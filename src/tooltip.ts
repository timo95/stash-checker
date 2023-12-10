import {Target} from "./check";

let handle: number;
let tooltipWindow: HTMLDivElement = document.createElement("div");
tooltipWindow.style.display = "none";
tooltipWindow.classList.add("stashCheckerTooltip");
tooltipWindow.addEventListener("mouseover", function () {
    window.clearTimeout(handle);
});
tooltipWindow.addEventListener("mouseout", function () {
    handle = window.setTimeout(function () {
        tooltipWindow.style.display = "none";
    }, 500);
});
document.body.append(tooltipWindow);

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

/**
 * find existing span recursively, undefined if none available
 */
function getExistingSpan(element: Element): HTMLSpanElement {
    if (element.getAttribute("data-type") === "stash-symbol") {
        return element as HTMLSpanElement;
    } else {
        return Array.from(element.childNodes)
            .filter(n => n.nodeType === Node.ELEMENT_NODE)
            .map(n => n as Element)
            .map(getExistingSpan)
            .find(n => n);  // first truthy
    }
}

function getUrl(stashUrl: string, target: Target, id: string): string {
    let path
    if (target == "gallery") {
        path = "galleries";
    } else {
        path = target + "s";
    }
    return `${stashUrl}/${path}/${id}`;
}

function secondsToReadable(seconds: number): string {
    let h = Math.floor(seconds / 3600)
    let m = Math.floor(seconds / 60) % 60
    let s = Math.floor(seconds) % 60
    return [h, m, s]
        .map(v => v.toString().padStart(2, "0"))
        .filter((v, i) => v !== "00" || i > 0)
        .join(":")
}

function bytesToReadable(bytes: number): string {
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

function formatFileData(files: any[]): string {
    let propertyStrings: [string, (v: any) => string][] = [
        ["path", (v: any) => `Path: ${v}`],
        ["video_codec", (v: any) => `<br>Codec: ${v}`],
        ["width", (v: any) => ` (${v}`],
        ["height", (v: any) => `x${v})`],
        ["size", (v: any) => `&nbsp;&nbsp;&nbsp;&nbsp;Size: ${bytesToReadable(v)}`],
        ["bit_rate", (v: any) => `&nbsp;&nbsp;&nbsp;&nbsp;Bitrate: ${(v / 1000000).toFixed(2)}Mbit/s`],
        ["duration", (v: any) => `&nbsp;&nbsp;&nbsp;&nbsp;Duration: ${secondsToReadable(v)}`],
    ];
    return files.map((file: any) => "<div class='stashCheckerFile'>" + propertyStrings
        .filter(e => file[e[0]])
        .map(e => e[1](file[e[0]]))
        .join("") + "</div>"
    ).join("");
}

function formatEntryData(target: Target, data: any[], stashUrl: string): string {
    let propertyStrings: [string, (v: any) => string][] = [
        ["id", (v: any) => `<br><a target="_blank" href="${getUrl(stashUrl, target, v)}">${getUrl(stashUrl, target, v)}</a>`],
        ["title", (v: any) => `<br>Title: ${v}`],
        ["name", (v: any) => `<br>Name: ${v}`],
        ["favorite", (v: any) => "&emsp;&#10084;&#65039;"],
        ["disambiguation", (v: any) => ` <span style="color: grey">(${v})</span>`],
        ["alias_list", (v: any) => `<br>Aliases: ${v.join(", ")}`],
        ["studio", (v: any) => `<br>Studio: ${v.name}`],
        ["code", (v: any) => `<br>Code: ${v}`],
        ["date", (v: any) => `<br>Date: ${v}`],
        ["queries", (v: any) => `<br>Matched: ${v.join(", ")}`],
        ["files", (v: any) => `${formatFileData(v)}`],
    ];
    return data.map((entry: any) => "<hr>" + propertyStrings
        .filter((e) => entry[e[0]])
        .map((e) => e[1](entry[e[0]]))
        .join("")
    ).join("");
}

function mouseoverListener() {
    window.clearTimeout(handle);
    let margin = 10
    let symbolPos = this.getBoundingClientRect();
    tooltipWindow.innerHTML = this.getAttribute("data-info");
    tooltipWindow.style.display = "";
    // show tooltip above or below
    let north = tooltipWindow.clientHeight + margin < symbolPos.top
    if (north) {
        tooltipWindow.style.top = `${(Math.max(margin,  // upper border
            symbolPos.top - tooltipWindow.clientHeight  // wanted position
        )).toFixed(0)}px`;
    } else {
        tooltipWindow.style.top = `${(Math.min(window.innerHeight - tooltipWindow.clientHeight - margin,  // lower border
            symbolPos.top + symbolPos.height + margin  // wanted position
        )).toFixed(0)}px`;
    }
    tooltipWindow.style.left = `${(Math.max(margin, Math.min(window.innerWidth - tooltipWindow.clientWidth - margin,  // left/right borders
        symbolPos.left + symbolPos.width / 2 - tooltipWindow.clientWidth / 2  // wanted position
    ))).toFixed(0)}px`;
}

function mouseoutListener() {
    handle = window.setTimeout(function () {
        tooltipWindow.style.display = "none";
    }, 500);
}

/**
 * Similar to object.assign(), but also merges the children of the objects.
 *
 * @param target
 * @param source
 */
function mergeData(target: any[], source: any[]): any[] {
    let mapTarget: Map<string, any> = new Map(target.map(e => [e.id, e]))
    let mapSource: Map<string, any> = new Map(source.map(e => [e.id, e]))
    mapSource.forEach((value, key) => {
        if (mapTarget.has(key)) {
            // merge which queries were successful
            let set = new Set(value["queries"])
            mapTarget.get(key)["queries"].forEach((query: string) => {
                set.add(query)
            })
            value["queries"] = [...set].sort()
        }
        mapTarget.set(key, value)
    });
    return Array.from(mapTarget.values());
}


/**
 * Prepends depending on the data the checkmark or cross to the selected element.
 * Also populates tooltip window.
 *
 * @param element
 * @param target
 * @param data
 * @param stashUrl
 * @param queryType
 * @param color
 */
export function prefixSymbol(
    element: Element,
    target: Target,
    data: any,
    stashUrl: string,
    queryType: string,
    color: (data: any[]) => string
) {
    let queries = [queryType]
    // Query for each found entry
    data.forEach((entry: any) => {
        entry["queries"] = queries
    });

    // Look for existing check spans
    let span = getExistingSpan(element)
    if (span) {
        // Merge new result with existing results
        queries = [...new Set<string>(JSON.parse(span.getAttribute("data-queries"))).add(queryType)].sort()
        data = mergeData(JSON.parse(span.getAttribute("data-data")), data)
        span.setAttribute("data-count", (parseInt(span.getAttribute("data-count")) + 1).toString())
    } else {
        // Create new span
        span = document.createElement("span");
        span.classList.add("stashCheckerSymbol");
        span.setAttribute("data-type", "stash-symbol")
        span.setAttribute("data-count", "1")
        span.addEventListener("mouseover", mouseoverListener);
        span.addEventListener("mouseout", mouseoutListener);
        // insert before first text because css selectors cannot select text nodes directly
        // it works with cases were non text elements (images) are inside the selected element
        let text = firstTextChild(element)
        if (text) {
            // If node contains text, insert span before the text
            text.parentNode.insertBefore(span, text);
        } else {
            return  // abort if no text in span
        }
    }
    // Store merged query results on span
    span.setAttribute("data-queries", JSON.stringify(queries))
    span.setAttribute("data-data", JSON.stringify(data))

    // Set symbol and tooltip content based on query results
    let count = data.length;
    let tooltip = ""
    let targetP = target.charAt(0).toUpperCase() + target.slice(1);
    if (count === 0) {
        span.textContent = "✗ ";
        span.style.color = "red";
        tooltip = `${targetP} not in Stash<br>`;
    } else if (count === 1) {
        span.textContent = "✓ ";
        span.style.color = color(data[0]);
    } else {
        span.textContent = "! ";
        span.style.color = "orange";
        tooltip = `${targetP} has duplicate matches<br>`;
    }
    tooltip += `Queries: ${queries.join(", ")}`
    tooltip += formatEntryData(target, data, stashUrl)

    // Store tooltip content on span
    span.setAttribute("data-info", tooltip)
}
