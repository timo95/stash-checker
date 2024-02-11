import {StashEndpoint} from "./dataTypes";

export async function request(endpoint: StashEndpoint, query: string, onload?: (data: any) => void, onerror?: () => void): Promise<void> {
    GM.xmlHttpRequest({
        method: "GET",
        url: `${endpoint.url}?query=${encodeURIComponent(query)}`,  // encode query (important for url and some titles)
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
