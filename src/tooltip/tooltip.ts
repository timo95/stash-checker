import {StashEndpoint, StashEntry, Target, Type} from "../dataTypes";
import {bytesToReadable, firstTextChild, secondsToReadable, typeToString} from "../utils";
import {booleanOptions, OptionKey} from "../settings/general";
import {StashQuery, StashQueryClass} from "./stashQuery";
import {mouseoutListener, mouseoverListener} from "./tooltipElement";

/**
 * find existing symbol span recursively, undefined if none available
 */
function getExistingSymbol(element: Element): HTMLSpanElement | undefined {
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

function formatTagPill(tag: {id: string, name: string}): string {
    return `<span class='stashChecker tag'>${tag.name}</span>`;
}

function formatQueries(queries: StashQuery[], target: Target, id: string, numQueries: number): string {
    return queries.map(query => new StashQueryClass(query).toHtml(target, id, numQueries)).join("<br>");
}

function formatEntryData(target: Target, data: StashEntry[], numQueries: number): string {
    let propertyStrings: [string, (v: any, queries: StashQuery[]) => string][] = [
        ["id", (id: any, queries: StashQuery[]) => `<br>${formatQueries(queries, target, id, numQueries)}`],
        ["title", (title: any) => `<br>Title: ${title}`],
        ["name", (name: any) => `<br>Name: ${name}`],
        ["favorite", () => "&emsp;&#10084;&#65039;"],
        ["disambiguation", (disambiguation: any) => ` <span style="color: grey">(${disambiguation})</span>`],
        ["alias_list", (alias_list: any) => alias_list.length === 0 ? "" : `<br>Aliases: ${alias_list.join(", <wbr>")}`],
        ["studio", (studio: any) => `<br>Studio: ${studio.name}`],
        ["code", (code: any) => `<br>Code: ${code}`],
        ["date", (date: any) => `<br>Date: ${date}`],
        ["tags", (tags: any) => tags.length === 0 ? "" : `<br>Tags: ${tags.map(formatTagPill).join("<wbr>")}`],
        ["files", (files: any) => `${formatFileData(files)}`],
    ];
    return data.map((entry: any) => "<hr>" + propertyStrings
        .filter((e) => entry[e[0]])
        .map((e) => e[1](entry[e[0]], entry.queries))
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
    // Identify results by endpoint + id, merge identical ones
    let mapTarget: Map<string, StashEntry> = new Map(target.map(e => [entryKey(e), e]))
    let mapSource: Map<string, StashEntry> = new Map(source.map(e => [entryKey(e), e]))
    mapSource.forEach((sourceEntry, key) => {
        if (mapTarget.has(key)) {
            // Merge "queries"; Create maps: endpoint -> query
            let sourceQueries: Map<string, StashQuery> = new Map(sourceEntry.queries.map((v: StashQuery) => [v.endpoint, v]))
            let targetQueries: Map<string, StashQuery> = new Map(mapTarget.get(key)!.queries.map((v: StashQuery) => [v.endpoint, v]))

            sourceQueries.forEach((sourceQuery, key) => {
                if (targetQueries.has(key)) {
                    new StashQueryClass(sourceQuery).addTypes(targetQueries.get(key)!.types)
                }
                targetQueries.set(key, sourceQuery)
            });

            // Sort and add new value
            sourceEntry.queries = Array.from(targetQueries.values())
                .map(q => new StashQueryClass(q))
                .sort((a, b) => a.compareTo(b))
        }
        mapTarget.set(key, sourceEntry)
    });
    return Array.from(mapTarget.values());
}

function entryKey(entry: StashEntry): string {
    return `${entry.id}`;
}

/**
 * Prepends depending on the data the checkmark or cross to the selected element.
 * Also populates tooltip window.
 *
 * @param element
 * @param target
 * @param data
 * @param endpoint
 * @param type
 * @param color
 */
export function prefixSymbol(
    element: Element,
    target: Target,
    type: Type,
    endpoint: StashEndpoint,
    data: StashEntry[],
    color: (data: StashEntry) => string
) {
    // All queries used here
    let endpoints = [endpoint.name]
    let queryTypes = [type]
    // Specific query for this result
    let baseUrl = endpoint.url.replace(/\/graphql\/?$/, "")
    let query: StashQuery = { endpoint: endpoint.name, baseUrl, types: queryTypes }
    // Add query and endpoint to each new entry
    data.forEach((entry: StashEntry) => {
        entry.queries = [query]
        entry.endpoint = endpoint.name
    });

    // Look for existing check symbol
    let symbol = getExistingSymbol(element)
    if (symbol) {
        // Merge new result with existing results
        endpoints = [...new Set<string>(JSON.parse(symbol.getAttribute("data-endpoints")!)).add(endpoint.name)].sort()
        queryTypes = [...new Set<Type>(JSON.parse(symbol.getAttribute("data-queries")!)).add(type)].sort()
        data = mergeData(JSON.parse(symbol.getAttribute("data-data")!), data)
        symbol.setAttribute("data-count", (parseInt(symbol.getAttribute("data-count")!) + 1).toString())
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
            text.parentNode?.insertBefore(symbol, text);
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
        if (booleanOptions.get(OptionKey.showCrossMark)) {
            symbol.textContent = "✗ ";
        }
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
    tooltip += `Queries: ${queryTypes.map(type => typeToString.get(type)).join(", ")}`
    // List of results
    tooltip += formatEntryData(target, data, queryTypes.length)

    // Store tooltip content on symbol
    symbol.setAttribute("data-info", tooltip)
}
