import {BatchQuery, GraphQlQuery, StashEndpoint} from "./dataTypes";

const batchTimeout = 10;
const maxBatchSize = 100;

let batchQueries: Map<StashEndpoint, BatchQuery> = new Map();

export async function request(
    endpoint: StashEndpoint,
    query: GraphQlQuery,
    batchQueries: boolean = false
): Promise<void> {
    if (batchQueries) {
        return addQuery(endpoint, query);
    } else {
        let namedQuery: GraphQlQuery = {query: `q:${query.query}`, onload: (data: any) => query.onload(data.q), onerror: query.onerror}
        return sendQuery(endpoint, namedQuery);
    }
}

async function addQuery(
    endpoint: StashEndpoint,
    query: GraphQlQuery
): Promise<void> {
    let batchQuery = batchQueries.get(endpoint)
    if (!batchQuery) {
        // init new batch
        let timerHandle = window.setTimeout(() => {
            sendQuery(endpoint, buildBatchQuery(endpoint, batchQueries.get(endpoint)));
            batchQueries.delete(endpoint);
        }, batchTimeout)
        batchQuery = {
            timerHandle,
            queries: [],
        };
    }
    batchQuery.queries.push(query);
    // send or save
    if (batchQuery.queries.length >= maxBatchSize) {
        window.clearTimeout(batchQuery.timerHandle);
        batchQueries.delete(endpoint);
        return sendQuery(endpoint, buildBatchQuery(endpoint, batchQuery));
    } else {
        batchQueries.set(endpoint, batchQuery);
    }
}

function buildBatchQuery(endpoint: StashEndpoint, batchQuery: BatchQuery): GraphQlQuery {
    let query = batchQuery.queries.map((request, index) => `q${index}:${request.query}`).join()
    let onload = (data: any) => {
        console.debug(`Received batch query response of size ${batchQuery.queries.length} from endpoint '${endpoint.name}'`)
        batchQuery.queries.forEach((request, index) => {
            if (request.onload) request.onload(data[`q${index}`])
        })
    }
    let onerror = (message?: string) => {
        console.debug(`Received error for batch query of size ${batchQuery.queries.length} from endpoint '${endpoint.name}'`)
        batchQuery.queries.forEach((request) => {
            if (request.onerror) request.onerror(message);
        })
    }
    console.info(`Sending batch query of size ${batchQuery.queries.length} to endpoint '${endpoint.name}'`)
    return {query, onload, onerror};
}

async function sendQuery(
    endpoint: StashEndpoint,
    query: GraphQlQuery
): Promise<void> {
    GM.xmlHttpRequest({
        method: "GET",
        url: `${endpoint.url}?query={${encodeURIComponent(query.query)}}`,  // encode query (important for url and some titles)
        headers: {
            "Content-Type": "application/json",
            ApiKey: endpoint.key,
        },
        onload: function (response) {
            switch (response.status) {
                case 200: {
                    try {
                        let r = JSON.parse(response.responseText)
                        if ("errors" in r) {
                            r.errors.forEach((e: any) => {
                                console.error(`Stash returned "${e.extensions.code}" error: ${e.message}`)
                                if (query.onerror) query.onerror(e.message);
                            });
                        } else {
                            if (query.onload) query.onload(r.data);
                        }
                    } catch (e) {
                        console.debug("Failed to parse response: " + response.responseText);
                        if (query.onerror) query.onerror(response.responseText);
                    }
                    break;
                }
                default: {
                    console.debug(`Error: Response code ${statusMessage(response.status, response.statusText)}`);
                    if (query.onerror) query.onerror(response.responseText ?? statusMessage(response.status, response.statusText));
                }
            }
        },
        onerror: function (response) {
            console.debug(response)
            if (query.onerror) query.onerror();
        }
    });
}

function statusMessage(status: number, statusText?: string): string {
    if (statusText && statusText.trim() !== "") {
        return `${status}: ${statusText}`;
    } else {
        return `${status}: ${friendlyHttpStatus.get(status)}`;
    }
}

let friendlyHttpStatus: Map<number, string> = new Map([
    [200, 'OK'],
    [201, 'Created'],
    [202, 'Accepted'],
    [203, 'Non-Authoritative Information'],
    [204, 'No Content'],
    [205, 'Reset Content'],
    [206, 'Partial Content'],
    [300, 'Multiple Choices'],
    [301, 'Moved Permanently'],
    [302, 'Found'],
    [303, 'See Other'],
    [304, 'Not Modified'],
    [305, 'Use Proxy'],
    [306, 'Unused'],
    [307, 'Temporary Redirect'],
    [400, 'Bad Request'],
    [401, 'Unauthorized'],
    [402, 'Payment Required'],
    [403, 'Forbidden'],
    [404, 'Not Found'],
    [405, 'Method Not Allowed'],
    [406, 'Not Acceptable'],
    [407, 'Proxy Authentication Required'],
    [408, 'Request Timeout'],
    [409, 'Conflict'],
    [410, 'Gone'],
    [411, 'Length Required'],
    [412, 'Precondition Required'],
    [413, 'Request Entry Too Large'],
    [414, 'Request-URI Too Long'],
    [415, 'Unsupported Media Type'],
    [416, 'Requested Range Not Satisfiable'],
    [417, 'Expectation Failed'],
    [418, 'I\'m a teapot'],
    [429, 'Too Many Requests'],
    [500, 'Internal Server Error'],
    [501, 'Not Implemented'],
    [502, 'Bad Gateway'],
    [503, 'Service Unavailable'],
    [504, 'Gateway Timeout'],
    [505, 'HTTP Version Not Supported'],
]);
