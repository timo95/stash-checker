import {Target} from "./dataTypes";

/**
 * recursive (dfs) first non empty text node child, undefined if none available
 */
export function firstTextChild(node: Node): Node {
    if (
        node.nodeType === Node.TEXT_NODE &&
        node.textContent.match(/^[\s<>]*$/) === null  // exclude whitespace
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
