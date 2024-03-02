import {Target} from "./dataTypes";

/**
 * recursive (dfs) first non empty text node child, undefined if none available
 */
export function firstTextChild(node?: Node | undefined | null): null | undefined | Node {
    if (!node) {
        return node;
    }
    if (
        node.nodeType === Node.TEXT_NODE &&
        node.textContent?.match(/^[\s<>]*$/) === null  // exclude whitespace, <, >
    ) {
        return node;
    } else {
        return Array.from(node.childNodes)
            .filter(n => !["svg"].includes(n.nodeName.toLowerCase()))  // element tag exceptions
            .filter(n => n.nodeType === Node.ELEMENT_NODE ? (n as Element).getAttribute("data-type") !== "stash-symbol" : true)  // exclude checkmark
            .map(firstTextChild)
            .find(n => n);  // first truthy
    }
}

export function entryLink(stashUrl: string, target: Target, id: string): string {
    let path
    if (target == "gallery") {
        path = "galleries";
    } else {
        path = target + "s";
    }
    let url = `${stashUrl}/${path}/${id}`;
    return `<a target="_blank" href="${url}">${url}</a>`
}

export function secondsToReadable(seconds: number): string {
    let h = Math.floor(seconds / 3600)
    let m = Math.floor(seconds / 60) % 60
    let s = Math.floor(seconds) % 60
    return [h, m, s]
        .map(v => v.toString().padStart(2, "0"))
        .filter((v, i) => v !== "00" || i > 0)
        .join(":")
}

export function bytesToReadable(bytes: number): string {
    let labels = ["KB", "MB", "GB", "TB", "PB"]
    let label
    for (label of labels) {
        bytes /= 1000
        if (bytes < 1000) {
            break;
        }
    }
    return bytes.toFixed(2) + label;
}

export let friendlyHttpStatus: Map<number, string> = new Map([
    [200, "OK"],
    [201, "Created"],
    [202, "Accepted"],
    [203, "Non-Authoritative Information"],
    [204, "No Content"],
    [205, "Reset Content"],
    [206, "Partial Content"],
    [300, "Multiple Choices"],
    [301, "Moved Permanently"],
    [302, "Found"],
    [303, "See Other"],
    [304, "Not Modified"],
    [305, "Use Proxy"],
    [306, "Unused"],
    [307, "Temporary Redirect"],
    [400, "Bad Request"],
    [401, "Unauthorized"],
    [402, "Payment Required"],
    [403, "Forbidden"],
    [404, "Not Found"],
    [405, "Method Not Allowed"],
    [406, "Not Acceptable"],
    [407, "Proxy Authentication Required"],
    [408, "Request Timeout"],
    [409, "Conflict"],
    [410, "Gone"],
    [411, "Length Required"],
    [412, "Precondition Required"],
    [413, "Request Entry Too Large"],
    [414, "Request-URI Too Long"],
    [415, "Unsupported Media Type"],
    [416, "Requested Range Not Satisfiable"],
    [417, "Expectation Failed"],
    [418, "I'm a teapot"],
    [429, "Too Many Requests"],
    [500, "Internal Server Error"],
    [501, "Not Implemented"],
    [502, "Bad Gateway"],
    [503, "Service Unavailable"],
    [504, "Gateway Timeout"],
    [505, "HTTP Version Not Supported"],
]);