import {BatchQuery, GraphQlQuery, StashEndpoint} from "./dataTypes";
import {friendlyHttpStatus} from "./utils";
import {JobQueue} from "./jobQueue";
import {numberOptions, OptionKey} from "./settings/providers";

const batchCollectionTimeout = 10;

let batchQueries: Map<StashEndpoint, BatchQuery> = new Map();
let batchQueues: Map<StashEndpoint, JobQueue> = new Map();

export async function request(
    endpoint: StashEndpoint,
    query: string,
    batchQueries: boolean = false
): Promise<any> {
    if (batchQueries) {
        return addQuery(endpoint, query);
    } else {
        return new Promise((resolve, reject) => sendQuery(endpoint, `q:${query}`)
            .then((data: any) => resolve(data.q))
            .catch(reject)
        );
    }
}

async function addQuery(
    endpoint: StashEndpoint,
    query: string
): Promise<any> {
    return new Promise((resolve, reject) => {
        let batchQueue = batchQueues.get(endpoint);
        if (!batchQueue) {
            // Init new queue. Every queue gets initialized once and never deleted
            batchQueue = new JobQueue(2)
            batchQueues.set(endpoint, batchQueue)
        }

        let batchQuery = batchQueries.get(endpoint)
        if (!batchQuery) {
            // Init new batch collector
            let timerHandle = window.setTimeout(() => {
                // Send batch after timeout and delete map entry
                let query = buildBatchQuery(endpoint, batchQueries.get(endpoint)!);
                batchQueue!.enqueue(() => sendQuery(endpoint, query.query))
                    .then(query.resolve)
                    .catch(query.reject);
                batchQueries.delete(endpoint);
            }, batchCollectionTimeout)
            batchQuery = {
                timerHandle,
                queries: [],
            };
            batchQueries.set(endpoint, batchQuery);
        }

        // Add new query to batch collector
        batchQuery.queries.push({ query, resolve, reject });

        const batchSize = numberOptions.get(OptionKey.batchSize)!;
        if (batchQuery.queries.length >= batchSize) {
            // Send full batch and delete map entry
            window.clearTimeout(batchQuery.timerHandle);
            batchQueries.delete(endpoint);
            let query = buildBatchQuery(endpoint, batchQuery)
            return batchQueue.enqueue(() => sendQuery(endpoint, query.query))
                .then(query.resolve)
                .catch(query.reject);
        }
    });
}

function buildBatchQuery(endpoint: StashEndpoint, batchQuery: BatchQuery): GraphQlQuery {
    let query = batchQuery.queries.map((request, index) => `q${index}:${request.query}`).join()
    let resolve = (data: any) => {
        console.debug(`Received batch query response of size ${batchQuery.queries.length} from endpoint '${endpoint.name}'`)
        batchQuery.queries.forEach((request, index) => {
            if (request.resolve) request.resolve(data[`q${index}`])
        })
    }
    let reject = (message?: string) => {
        console.debug(`Received error for batch query of size ${batchQuery.queries.length} from endpoint '${endpoint.name}'`)
        batchQuery.queries.forEach((request) => {
            if (request.reject) request.reject(message);
        })
    }
    console.info(`Build batch query of size ${batchQuery.queries.length} for endpoint '${endpoint.name}'`)
    return {query, resolve, reject};
}

async function sendQuery(
    endpoint: StashEndpoint,
    query: string
): Promise<any> {
    console.debug(`Sending query to endpoint '${endpoint.name}'`);
    return new Promise((resolve, reject) => {
        GM.xmlHttpRequest({
            method: "GET",
            url: `${endpoint.url}?query={${query}}`,  // encode query (important for url and some titles)
            headers: {
                "Content-Type": "application/json",
                ApiKey: endpoint.key,
            },
            onload: (response) => {
                switch (response.status) {
                    case 200: {
                        try {
                            let r = JSON.parse(response.responseText)
                            if ("errors" in r) {
                                r.errors.forEach((e: any) => {
                                    console.error(`Stash returned "${e.extensions.code}" error: ${e.message}`)
                                    reject(e.message);
                                });
                            } else {
                                resolve(r.data)
                            }
                        } catch (e) {
                            console.debug("Failed to parse response: " + response.responseText);
                            reject(response.responseText);
                        }
                        break;
                    }
                    default: {
                        console.debug(`Error: Response code ${statusMessage(response.status, response.statusText)} for query: ${query}`);
                        reject(response.responseText ?? statusMessage(response.status, response.statusText));
                    }
                }
            },
            onerror: (response) => {
                console.debug(response);
                reject(response.responseText ?? statusMessage(response.status, response.statusText));
            },
            onabort() {
                reject("aborted");
            },
            ontimeout() {
                reject("timeout");
            }
        });
    })
}

function statusMessage(status: number, statusText?: string): string {
    if (statusText && statusText.trim() !== "") {
        return `${status}: ${statusText}`;
    } else {
        return `${status}: ${friendlyHttpStatus.get(status)}`;
    }
}
