import {Target} from "./check";
import {mouseoutListener, mouseoverListener} from "./tooltipElement";
import {bytesToReadable, firstTextChild, entryLink, secondsToReadable} from "./utils";
import {StashEndpoint} from "./config";

interface StashEntry {
    [key: string]: any;
}

interface StashQuery {
    endpoint: string;
    url: string;
    types: string[];
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
        ["path", (path: any) => `Path: ${path}`],
        ["video_codec", (video_codec: any) => `<br>Codec: ${video_codec}`],
        ["width", (width: any) => ` (${width}`],
        ["height", (height: any) => `x${height})`],
        ["size", (size: any) => `&nbsp;&nbsp;&nbsp;&nbsp;Size: ${bytesToReadable(size)}`],
        ["bit_rate", (bit_rate: any) => `&nbsp;&nbsp;&nbsp;&nbsp;Bitrate: ${(bit_rate / 1000000).toFixed(2)}Mbit/s`],
        ["duration", (duration: any) => `&nbsp;&nbsp;&nbsp;&nbsp;Duration: ${secondsToReadable(duration)}`],
    ];
    return files.map((file: any) => "<div class='stashChecker file'>" + propertyStrings
        .filter(e => file[e[0]])
        .map(e => e[1](file[e[0]]))
        .join("") + "</div>"
    ).join("");
}

function formatQueries(queries: StashQuery[], target: Target, id: string): string {
    return queries.map(query => `${query.endpoint} (Matched: ${query.types.join(", ")}) ${entryLink(query.url, target, id)}`).join("<br>")
}

function formatEntryData(target: Target, data: StashEntry[]): string {
    let propertyStrings: [string, (v: any, queries: StashQuery[]) => string][] = [
        ["id", (id: any, queries: StashQuery[]) => `<br>Endpoints:<br>${formatQueries(queries, target, id)}`],
        ["title", (title: any) => `<br>Title: ${title}`],
        ["name", (name: any) => `<br>Name: ${name}`],
        ["favorite", () => "&emsp;&#10084;&#65039;"],
        ["disambiguation", (disambiguation: any) => ` <span style="color: grey">(${disambiguation})</span>`],
        ["alias_list", (alias_list: any) => `<br>Aliases: ${alias_list.join(", ")}`],
        ["studio", (studio: any) => `<br>Studio: ${studio.name}`],
        ["code", (code: any) => `<br>Code: ${code}`],
        ["date", (date: any) => `<br>Date: ${date}`],
        ["files", (files: any) => `${formatFileData(files)}`],
    ];
    return data.map((entry: any) => "<hr>" + propertyStrings
        .filter((e) => entry[e[0]])
        .map((e) => e[1](entry[e[0]], entry["queries"]))
        .join("")
    ).join("");
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
    mapSource.forEach((sourceValue, key) => {
        if (mapTarget.has(key)) {
            // merge stash queries
            let sourceQueries: Map<string, StashQuery> = new Map(sourceValue["queries"].map((v: StashQuery) => [v.endpoint, v]))
            let targetQueries: Map<string, StashQuery> = new Map(mapTarget.get(key)["queries"].map((v: StashQuery) => [v.endpoint, v]))

            sourceQueries.forEach((sourceQuery, key) => {
                if (targetQueries.has(key)) {
                    let targetQuery = targetQueries.get(key)
                    let typeSet = new Set(sourceQuery.types)
                    targetQuery.types.forEach(type => typeSet.add(type));

                    sourceQuery.types = [...typeSet]
                }
                targetQueries.set(key, sourceQuery)
            });

            // Sort and add new value
            sourceValue["queries"] = [...targetQueries.values()].sort((a, b) => a.endpoint.localeCompare(b.endpoint))
        }
        mapTarget.set(key, sourceValue)
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
    // All queries used here
    let endpoints = [endpoint.name]
    let queryTypes = [queryType]
    // Specific query for this result
    let query: StashQuery = {
        endpoint: endpoint.name,
        url: endpoint.url.replace(/\/graphql\/?$/, ""),
        types: queryTypes
    }
    // Add query for each found entry
    data.forEach((entry: any) => {
        entry["queries"] = [query]
    });

    // Look for existing check symbol
    let symbol = getExistingSymbol(element)
    if (symbol) {
        // Merge new result with existing results
        endpoints = [...new Set<string>(JSON.parse(symbol.getAttribute("data-endpoints"))).add(endpoint.name)].sort()
        queryTypes = [...new Set<string>(JSON.parse(symbol.getAttribute("data-queries"))).add(queryType)].sort()
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
    symbol.setAttribute("data-queries", JSON.stringify(queryTypes))
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
    // All used queries
    tooltip += `Endpoints: ${endpoints.join(", ")}`
    tooltip += "<br>"
    tooltip += `Queries: ${queryTypes.join(", ")}`
    // List of results
    tooltip += formatEntryData(target, data)

    // Store tooltip content on symbol
    symbol.setAttribute("data-info", tooltip)
}