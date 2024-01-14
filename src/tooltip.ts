import {Target} from "./check";
import {mouseoutListener, mouseoverListener} from "./tooltipElement";
import {bytesToReadable, firstTextChild, getUrl, secondsToReadable} from "./utils";
import {StashEndpoint} from "./config";

interface StashEntry {
    [key: string]: any;
}

/**
 * find existing symbol span recursively, undefined if none available
 */
function getExistingSymbol(element: Element): HTMLSpanElement {
    if (element.getAttribute("data-type") === "stash-symbol") {
        return element as HTMLSpanElement;
    } else {
        return Array.from(element.childNodes)
            .filter(n => n.nodeType === Node.ELEMENT_NODE)
            .map(n => n as Element)
            .map(getExistingSymbol)
            .find(n => n);  // first truthy
    }
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
    return files.map((file: any) => "<div class='stashChecker file'>" + propertyStrings
        .filter(e => file[e[0]])
        .map(e => e[1](file[e[0]]))
        .join("") + "</div>"
    ).join("");
}

function formatEntryData(target: Target, data: StashEntry[], endpoints: StashEndpoint[]): string {
    let propertyStrings: [string, (v: any) => string][] = [
        ["id", (id: any) => `<br>${endpoints.map(endpoint => formatEndpointLinks(endpoint, id, target)).join("<br>")}`],
        ["queries", (v: any) => `<br>Matched: ${v.join(", ")}`],
        ["title", (v: any) => `<br>Title: ${v}`],
        ["name", (v: any) => `<br>Name: ${v}`],
        ["favorite", (v: any) => "&emsp;&#10084;&#65039;"],
        ["disambiguation", (v: any) => ` <span style="color: grey">(${v})</span>`],
        ["alias_list", (v: any) => `<br>Aliases: ${v.join(", ")}`],
        ["studio", (v: any) => `<br>Studio: ${v.name}`],
        ["code", (v: any) => `<br>Code: ${v}`],
        ["date", (v: any) => `<br>Date: ${v}`],
        ["files", (v: any) => `${formatFileData(v)}`],
    ];
    return data.map((entry: any) => "<hr>" + propertyStrings
        .filter((e) => entry[e[0]])
        .map((e) => e[1](entry[e[0]]))
        .join("")
    ).join("");
}

function formatEndpointLinks(endpoint: StashEndpoint, id: string, target: Target): string {
    return `<a target="_blank" href="${getUrl(endpoint.url.replace(/\/graphql\/?$/, ""), target, id)}">${endpoint.name}</a>`
}

/**
 * Similar to object.assign(), but also merges the children of the objects.
 *
 * @param target
 * @param source
 */
function mergeData(target: StashEntry[], source: StashEntry[]): StashEntry[] {
    let mapTarget: Map<string, StashEntry> = new Map(target.map(e => [e.id, e]))
    let mapSource: Map<string, StashEntry> = new Map(source.map(e => [e.id, e]))
    mapSource.forEach((value, key) => {
        if (mapTarget.has(key)) {
            // merge stash endpoints
            let endpoints = new Set(value["endpoints"])
            mapTarget.get(key)["endpoints"].forEach((endpoint: StashEndpoint) => {
                endpoints.add(endpoint)
            })
            value["endpoints"] = [...endpoints].sort()
            // merge which queries were successful
            let queries = new Set(value["queries"])
            mapTarget.get(key)["queries"].forEach((query: string) => {
                queries.add(query)
            })
            value["queries"] = [...queries].sort()
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
 * @param endpoint
 * @param queryType
 * @param color
 */
export function prefixSymbol(
    element: Element,
    target: Target,
    data: StashEntry[],
    endpoint: StashEndpoint,
    queryType: string,
    color: (data: StashEntry) => string
) {
    let endpoints = [endpoint]
    let queries = [queryType]
    // Query and url for each found entry
    data.forEach((entry: any) => {
        entry["endpoints"] = endpoints
        entry["queries"] = queries
    });

    // Look for existing check symbol
    let symbol = getExistingSymbol(element)
    if (symbol) {
        // Merge new result with existing results
        endpoints = [...new Set<StashEndpoint>(JSON.parse(symbol.getAttribute("data-endpoints"))).add(endpoint)]
            .sort((a, b) => a.name.localeCompare(b.name))
        queries = [...new Set<string>(JSON.parse(symbol.getAttribute("data-queries"))).add(queryType)].sort()
        data = mergeData(JSON.parse(symbol.getAttribute("data-data")), data)
        symbol.setAttribute("data-count", (parseInt(symbol.getAttribute("data-count")) + 1).toString())
    } else {
        // Create new symbol
        symbol = document.createElement("span");
        symbol.classList.add("stashCheckerCheckmark");
        symbol.setAttribute("data-type", "stash-symbol");
        symbol.setAttribute("data-count", "1");
        symbol.addEventListener("mouseover", mouseoverListener);
        symbol.addEventListener("mouseout", mouseoutListener);
        // insert before first text because css selectors cannot select text nodes directly
        // it works with cases were non text elements (images) are inside the selected element
        let text = firstTextChild(element)
        if (text) {
            // If node contains text, insert symbol before the text
            text.parentNode.insertBefore(symbol, text);
        } else {
            return  // abort if no text in symbol
        }
    }
    // Store merged query results on symbol
    symbol.setAttribute("data-endpoints", JSON.stringify(endpoints))
    symbol.setAttribute("data-queries", JSON.stringify(queries))
    symbol.setAttribute("data-data", JSON.stringify(data))

    // Set symbol and tooltip content based on query results
    let count = data.length;
    let tooltip = ""
    let targetReadable = target.charAt(0).toUpperCase() + target.slice(1);
    if (count === 0) {
        symbol.textContent = "✗ ";
        symbol.style.color = "red";
        tooltip = `${targetReadable} not in Stash<br>`;
    } else if (count === 1) {
        symbol.textContent = "✓ ";
        symbol.style.color = color(data[0]);
    } else {
        symbol.textContent = "! ";
        symbol.style.color = "orange";
        tooltip = `${targetReadable} has duplicate matches<br>`;
    }
    tooltip += `Endpoints: ${endpoints.map(endpoint => endpoint.name).join(", ")}`
    tooltip += "<br>"
    tooltip += `Queries: ${queries.join(", ")}`
    console.debug(endpoint)
    tooltip += formatEntryData(target, data, endpoints)

    // Store tooltip content on symbol
    symbol.setAttribute("data-info", tooltip)
}
