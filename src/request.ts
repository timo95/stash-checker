import {StashEndpoint} from "./dataTypes";

const batchTimeout = 1;
const maxBatchSize = 100;

interface BatchQuery {
    timerHandle: number,
    queries: string[],
    onload: (((data: any) => void) | undefined)[],
    onerror: (((message?: string) => void) | undefined)[],
}

let batchQueries: Map<StashEndpoint, BatchQuery> = new Map();

export async function request(
    endpoint: StashEndpoint,
    query: string, batchRequest: boolean,
    onload?: (data: any) => void,
    onerror?: (message?: string) => void
): Promise<void> {
    if (batchRequest) {
        return addRequest(endpoint, query, onload, onerror);
    } else {
        return sendRequest(endpoint, `q:${query}`, (data: any) => onload(data.q), onerror);
    }
}

async function addRequest(
    endpoint: StashEndpoint,
    query: string,
    onload?: (data: any) => void,
    onerror?: (response?: string) => void
): Promise<void> {
    let batchQuery = batchQueries.get(endpoint)
    if (!batchQuery) {
        // init new batch
        let timerHandle = window.setTimeout(() => {
            batchRequest(endpoint, batchQueries.get(endpoint));
            batchQueries.delete(endpoint);
        }, batchTimeout)
        batchQuery = {
            timerHandle,
            queries: [],
            onload: [],
            onerror: [],
        };
    }
    // new request
    batchQuery.queries.push(query);
    batchQuery.onload.push(onload);
    batchQuery.onerror.push(onerror);
    // send or save
    if (batchQuery.queries.length >= maxBatchSize) {
        window.clearTimeout(batchQuery.timerHandle);
        batchQueries.delete(endpoint);
        return batchRequest(endpoint, batchQuery);
    } else {
        batchQueries.set(endpoint, batchQuery);
    }
}

async function batchRequest(endpoint: StashEndpoint, batchQuery: BatchQuery): Promise<void> {
    let query = batchQuery.queries.map((query, index) => `q${index}:${query}`).join()
    let onload = (data: any) => {
        console.debug(`Received batch request response of size ${batchQuery.queries.length} from endpoint '${endpoint.name}'`)
        batchQuery.onload.forEach((onload, index) => {
            if (onload) onload(data[`q${index}`])
        })
    }
    let onerror = (message?: string) => {
        console.debug(`Received error for batch request of size ${batchQuery.queries.length} from endpoint '${endpoint.name}'`)
        batchQuery.onerror.forEach((onerror) => {
            if (onerror) onerror(message);
        })
    }
    console.info(`Sending batch request of size ${batchQuery.queries.length} to endpoint '${endpoint.name}'`)
    return sendRequest(endpoint, query, onload, onerror);
}

async function sendRequest(
    endpoint: StashEndpoint,
    query: string,
    onload?: (data: any) => void,
    onerror?: (message?: string) => void
): Promise<void> {
    GM.xmlHttpRequest({
        method: "GET",
        url: `${endpoint.url}?query={${encodeURIComponent(query)}}`,  // encode query (important for url and some titles)
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
                                if (onerror) onerror(e.message);
                            });
                        } else {
                            if (onload) onload(r.data);
                        }
                    } catch (e) {
                        console.debug("Failed to parse response: " + response.responseText);
                        if (onerror) onerror(response.responseText.length < 20 ? response.responseText : "wrong path");
                    }
                    break;
                }
                default: {
                    console.debug(`Error: Response code ${statusMessage(response.status, response.statusText)}`);
                    if (onerror) onerror(response.responseText ?? statusMessage(response.status, response.statusText));
                }
            }
        },
        onerror: function (response) {
            console.debug(response)
            if (onerror) onerror();
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
