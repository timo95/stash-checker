import {StashEndpoint} from "./dataTypes";

const batchTimeout = 1;
const maxBatchSize = 100;

interface BatchQuery {
    timerHandle: number,
    queries: string[],
    onload: (((data: any) => void) | undefined)[]
}

let batchQueries: Map<StashEndpoint, BatchQuery> = new Map();

export async function request(endpoint: StashEndpoint, query: string, batchRequest: boolean, onload?: (data: any) => void, onerror?: () => void): Promise<void> {
    if (batchRequest) {
        return addRequest(endpoint, query, onload);
    } else {
        if (onerror) console.warn("'onerror' callback is not handled on batch requests");
        return sendRequest(endpoint, `q:${query}`, (data: any) => onload(data.q), onerror);
    }
}

async function addRequest(endpoint: StashEndpoint, query: string, onload?: (data: any) => void): Promise<void> {
    let batchQuery = batchQueries.get(endpoint)
    if (!batchQuery) {
        // init new batch
        let timerHandle = window.setTimeout(() => batchRequest(endpoint, batchQueries.get(endpoint)), batchTimeout)
        batchQuery = {
            timerHandle,
            queries: [],
            onload: []
        };
    }
    // new request
    batchQuery.queries.push(query);
    batchQuery.onload.push(onload);
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
    console.info(`Sending batch request of size ${batchQuery.queries.length} to endpoint '${endpoint.name}'`)
    return sendRequest(endpoint, query, onload);
}

async function sendRequest(endpoint: StashEndpoint, query: string, onload?: (data: any) => void, onerror?: () => void): Promise<void> {
    GM.xmlHttpRequest({
        method: "GET",
        url: `${endpoint.url}?query={${encodeURIComponent(query)}}`,  // encode query (important for url and some titles)
        headers: {
            "Content-Type": "application/json",
            ApiKey: endpoint.key,
        },
        onload: function (response) {
            try {
                let r = JSON.parse(response.responseText)
                if ("errors" in r) {
                    r.errors.forEach((e: any) => {
                        console.log(`Stash returned "${e.extensions.code}" error: ${e.message}`)
                    });
                } else {
                    if (onload) onload(r.data);
                }
            } catch (e) {
                console.log("Exception: " + e);
                console.log("Failed to parse response: " + response.responseText);
            }
        },
        onerror(response) {
            console.debug(response)
            if (onerror) onerror();
        }
    });
}
