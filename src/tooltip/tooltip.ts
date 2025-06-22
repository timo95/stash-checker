import {
    DataField,
    DisplayOptions,
    readable,
    StashEndpoint,
    StashEntry,
    StashFile,
    StashSymbol,
    Target,
    Type
} from "../dataTypes";
import {bytesToReadable, firstTextChild, secondsToReadable, typeToString} from "../utils";
import {StashQuery, StashQueryClass} from "./stashQuery";
import {symbolMouseoverListener, symbolMouseoutListener} from "./tooltipElement";
import {booleanOptions, OptionKey, stringOptions} from "../settings/providers";
import {createSpan} from "../htmlHelper";

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

export function clearSymbols() {
    document.querySelectorAll(":not(.stashCheckerPreview).stashCheckerSymbol")
        .forEach(symbol => symbol.remove())
}

const propertyStrings: Map<string, (datum: any, queries: StashQuery[], target: Target, numQueries: number) => string> = new Map([
    [DataField.Aliases, (aliases: any) => aliases.length === 0 ? "" : `<br>Aliases: ${aliases.join(", <wbr>")}`],
    [DataField.AliasList, (aliasList: any) => aliasList.length === 0 ? "" : `<br>Aliases: ${aliasList.join(", <wbr>")}`],
    [DataField.Birthdate, (birthdate: string) => `<br>Birthdate: ${birthdate}`],
    [DataField.BitRate, (bit_rate: any) => `&nbsp;&nbsp;&nbsp;&nbsp;Bitrate: ${(bit_rate / 1000000).toFixed(2)}Mbit/s`],
    [DataField.Code, (code: string) => `<br>Code: ${code}`],
    [DataField.Date, (date: string) => `<br>Date: ${date}`],
    [DataField.Disambiguation, (disambiguation: string) => ` <span style="color: grey">(${disambiguation})</span>`],
    [DataField.Duration, (duration: any) => `&nbsp;&nbsp;&nbsp;&nbsp;Duration: ${secondsToReadable(duration)}`],
    [DataField.Favorite, () => "&emsp;&#10084;&#65039;"],
    [DataField.Files, (files: any, queries: StashQuery[], target: Target, numQueries: number) => `${files.map((file: StashFile) => formatFileData(file, queries, target, numQueries)).join("")}`],
    [DataField.Height, (height: any) => `x${height})`],
    [DataField.HeightCm, (height: any) => `<br>Height: ${height} cm`],
    [DataField.Id, (id: string, queries: StashQuery[], target: Target, numQueries: number) => `<br>${formatQueries(queries, target, id, numQueries)}`],
    [DataField.Name, (name: string) => `<br>Name: ${name}`],
    [DataField.Organized, (organized: any) => organized ? `&emsp;&#128230;` : ""],
    [DataField.Path, (path: string) => `Path: ${path}`],
    [DataField.Size, (size: any) => `&nbsp;&nbsp;&nbsp;&nbsp;Size: ${bytesToReadable(size)}`],
    [DataField.Studio, (studio: any) => `<br>Studio: ${studio[DataField.Name]}`],
    [DataField.Tags, (tags: any) => tags.length === 0 ? "" : `<br>Tags: ${tags.map(formatTagPill).join("<wbr>")}`],
    [DataField.Title, (title: string) => `<br>Title: ${title}`],
    [DataField.VideoCodec, (video_codec: any) => `<br>Codec: ${video_codec}`],
    [DataField.Width, (width: any) => ` (${width}`],
]);

function formatFileData(file: StashFile, queries: StashQuery[], target: Target, numQueries: number): string {
    let text = Object.entries(file)
        .map(([key, value]: [string, any]) => value ? propertyStrings.get(key)?.(value, queries, target, numQueries) : undefined)
        .filter(s => s)
        .join("")
    return `<div class='stashChecker file'>${text}</div>`
}

function formatTagPill(tag: { id: string, name: string }): string {
    return `<span class='stashChecker tag'>${tag.name}</span>`;
}

function formatQueries(queries: StashQuery[], target: Target, id: string, numQueries: number): string {
    return queries.map((query: StashQuery) => new StashQueryClass(query).toHtml(target, id, numQueries)).join("<br>");
}

function formatEntryData(entry: StashEntry, target: Target, numQueries: number): string {
    return "<hr>" + Object.entries(entry)
        .map(([key, value]: [string, any]) => value ? propertyStrings.get(key)?.(value, entry.queries, target, numQueries) : undefined)
        .filter(s => s)
        .join("")
}

/**
 * Similar to object.assign(), but also merges the children of the objects.
 */
function mergeData(target: StashEntry[], source: StashEntry[]): StashEntry[] {
    // Identify results by endpoint + id, merge identical ones
    let mapTarget: Map<string, StashEntry> = new Map(target.map(e => [entryKey(e), e]))
    let mapSource: Map<string, StashEntry> = new Map(source.map(e => [entryKey(e), e]))
    mapSource.forEach((sourceEntry, key) => {
        if (mapTarget.has(key)) {
            // Merge "queries"; Create maps: endpoint -> query
            let sourceQueries: Map<string, StashQuery> = new Map(sourceEntry.queries.map(v => [v.endpoint, v]))
            let targetQueries: Map<string, StashQuery> = new Map(mapTarget.get(key)!.queries.map(v => [v.endpoint, v]))

            sourceQueries.forEach((sourceQuery, key) => {
                if (targetQueries.has(key)) {
                    let s = new StashQueryClass(sourceQuery)
                    s.addTypes(targetQueries.get(key)!.types)
                    sourceQuery = s
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
    return `${entry.endpoint}-${entry.id}`;
}

function stashSymbol(): HTMLSpanElement {
    let symbol = createSpan("stashCheckerSymbol");
    symbol.setAttribute("data-type", "stash-symbol");
    symbol.setAttribute("data-count", "1");
    symbol.addEventListener("mouseover", symbolMouseoverListener);
    symbol.addEventListener("mouseout", symbolMouseoutListener);
    return symbol
}

/**
 * Prepends depending on the data the checkmark or cross to the selected element.
 * Also populates tooltip window.
 */
export function prefixSymbol(
    element: Element,
    target: Target,
    type: Type,
    endpoint: StashEndpoint,
    data: StashEntry[],
    display: DisplayOptions,
) {
    // All queries used here
    let endpoints = [endpoint.name];
    let queryTypes = [type];
    // Specific query for this result
    let baseUrl = endpoint.url.replace(/\/graphql\/?$/, "");
    let query: StashQuery = {endpoint: endpoint.name, baseUrl, types: queryTypes};
    // Add query, endpoint and display options to each new entry
    data.forEach((entry: StashEntry) => {
        entry.queries = [query]
        entry.endpoint = endpoint.name
        entry.display = display
    });

    // Look for existing check symbol
    let symbol = getExistingSymbol(element);
    if (symbol) {
        // Merge new result with existing results
        endpoints = [...new Set<string>(JSON.parse(symbol.getAttribute("data-endpoints")!)).add(endpoint.name)].sort();
        queryTypes = [...new Set<Type>(JSON.parse(symbol.getAttribute("data-queries")!)).add(type)].sort();
        data = mergeData(JSON.parse(symbol.getAttribute("data-data")!), data);
        symbol.setAttribute("data-count", (parseInt(symbol.getAttribute("data-count")!) + 1).toString());
    } else {
        // insert new symbol before first text because css selectors cannot select text nodes directly
        // it works with cases were non text elements (images) are inside the selected element
        symbol = stashSymbol();
        let text = firstTextChild(element);
        if (text) {
            // If node contains text, insert symbol before the text
            text.parentNode?.insertBefore(symbol, text);
        } else {
            return;  // abort if no text in symbol
        }
    }
    // Store merged query results on symbol
    symbol.setAttribute("data-endpoints", JSON.stringify(endpoints));
    symbol.setAttribute("data-target", target);
    symbol.setAttribute("data-queries", JSON.stringify(queryTypes));
    symbol.setAttribute("data-data", JSON.stringify(data));

    // Set symbol and tooltip content based on query results
    let count = data.length;
    let tooltip = "";
    let targetReadable = readable(target);
    if (count === 0) {
        symbol.setAttribute("data-symbol", StashSymbol.Cross);
        if (booleanOptions.get(OptionKey.showCrossMark)) {
            symbol.innerHTML = `${stringOptions.get(OptionKey.crossMark)!}&nbsp;`;
        }
        symbol.style.color = "red";
        tooltip = `${targetReadable} not in Stash<br>`;
    } else if (new Set(data.map(e => e.endpoint)).size < data.length) {
        symbol.setAttribute("data-symbol", StashSymbol.Warning);
        symbol.innerHTML = `${stringOptions.get(OptionKey.warningMark)!}&nbsp;`;
        symbol.style.color = "orange";
        tooltip = `${targetReadable} has duplicate matches<br>`;
    } else {
        symbol.setAttribute("data-symbol", StashSymbol.Check);
        if (booleanOptions.get(OptionKey.showCheckMark)) {
            symbol.innerHTML = `${stringOptions.get(OptionKey.checkMark)!}&nbsp;`;
        }
        symbol.style.color = data[0].display.color;
    }

    // All used queries
    tooltip += `Endpoints: ${endpoints.join(", ")}`;
    tooltip += "<br>";
    tooltip += `Queries: ${queryTypes.map(type => typeToString.get(type)).join(", ")}`;
    // List of results
    tooltip += data.map(entry => formatEntryData(entry, target, queryTypes.length)).join("");

    // Store tooltip content on symbol
    symbol.setAttribute("data-info", tooltip)
}
