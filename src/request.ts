import {BatchQuery, GraphQlQuery, StashEndpoint} from "./dataTypes";
import {friendlyHttpStatus} from "./utils";
import {JobQueue} from "./jobQueue";

const batchTimeout = 10;
const maxBatchSize = 100;

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
            }, batchTimeout)
            batchQuery = {
                timerHandle,
                queries: [],
            };
            batchQueries.set(endpoint, batchQuery);
        }

        // Add new query to batch collector
        batchQuery.queries.push({ query, resolve, reject });

        if (batchQuery.queries.length >= maxBatchSize) {
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
    return new Promise((resolve, reject) => {
        GM.xmlHttpRequest({
            method: "POST",
            url: endpoint.url,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "ApiKey": endpoint.key || ""
            },
            data: JSON.stringify({
                query: `{${query}}`
            }),
            onload: (response) => {
                const body: string = response.responseText;
                if (response.status === 200) {
                    try {
                        const r = JSON.parse(body);
                        if (r.errors && r.errors.length) {
                            r.errors.forEach((e: any) => console.error(`GraphQL: ${e.message}`));
                            return reject(r.errors[0]?.message || "GraphQL error");
                        }
                        return resolve(r.data);
                    } catch (e) {
                        console.error("JSON parse error", e, body);
                        return reject("Invalid JSON from server");
                    }
                } else {
                    console.error(`HTTP ${response.status}`, body);
                    return reject(`${response.status}: ${response.statusText || "HTTP error"} — ${body || "no body"}`);
                }
            },
            onerror: (e) => {
                console.error("Network error", e);
                reject("Network error");
            },
            ontimeout: () => reject("Request timeout"),
            timeout: 30000
        });
    });
}

function statusMessage(status: number, statusText?: string): string {
    if (statusText && statusText.trim() !== "") {
        return `${status}: ${statusText}`;
    } else {
        return `${status}: ${friendlyHttpStatus.get(status)}`;
    }
}
