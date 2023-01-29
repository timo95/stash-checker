import {prefixSymbol} from "./tooltip";
import {getConfig} from "./stashData";

interface CheckOptions {
    checkUrl?: boolean;
    urlSelector?: (e: Element) => string;
    prepareUrl?: (url: string) => string;
    codeSelector?: (e: Element) => string;
    stashIdSelector?: (e: Element) => string;
    color?: (data: any) => string;
    currentSite?: boolean;
}

// what the query asks for
export type Target = "scene" | "performer"
// what the query uses to filter
type Type = "url" | "code" | "stash_id"

// Ask for stash url/key on load
let configPromise = getConfig()

async function request(
    queryString: string,
    onload: (target: Target, data: any[], stashUrl: string) => any,
    target: Target,
    type: Type
) {
    let query = "";
    let access = (d: any) => d;

    // Build query
    if (type === "url") {
        queryString = encodeURIComponent(queryString);
    }
    switch (target) {
        case "scene":
            query = `{findScenes(scene_filter:{${type}:{value:"${queryString}",modifier:EQUALS}}){scenes{id,title,code,files{path}}}}`;
            access = (d) => d.findScenes.scenes;
            break;
        case "performer":
            query = `{findPerformers(performer_filter:{${type}:{value:"${queryString}",modifier:EQUALS}}){performers{id,name}}}`;
            access = (d) => d.findPerformers.performers;
            break;
        default:
    }

    // Wait for config popup if it is not stored
    let [stashUrl, apiKey] = await configPromise
    GM.xmlHttpRequest({
        method: "GET",
        url: `${stashUrl}/graphql?query=${query}`,
        headers: {
            "Content-Type": "application/json",
            ApiKey: apiKey,
        },
        onload: function (response) {
            try {
                let data = access(JSON.parse(response.responseText).data);
                onload(target, data, stashUrl);
            } catch (e) {
                console.log("Failed to parse response: " + response.responseText);
                console.log("Exception: " + e);
            }
        },
    });
}

async function checkElement(
    target: Target,
    element: Element,
    {
        checkUrl = true,
        prepareUrl = (url) => url,
        urlSelector,
        codeSelector,
        stashIdSelector,
        color = () => "green",
    }: CheckOptions
) {
    if (checkUrl) {
        let url = urlSelector(element);
        url = prepareUrl(url);
        if (url) {
            console.log(url);
            request(url, (target: Target, data: any, stashUrl: string) => prefixSymbol(element, target, data, stashUrl, "URL", color), target, "url");
        } else {
            console.log("No URL for entry found");
        }
    }
    if (codeSelector) {
        let code = codeSelector(element);
        if (code) {
            console.log(code);
            request(code, (target: Target, data: any, stashUrl: string) => prefixSymbol(element, target, data, stashUrl, "Code", color), target, "code");
        } else {
            console.log("No Code for entry found");
        }
    }
    if (stashIdSelector) {
        let id = stashIdSelector(element);
        if (id) {
            console.log(id);
            request(id, (target: Target, data: any, stashUrl: string) => prefixSymbol(element, target, data, stashUrl, "StashId", color), target, "stash_id");
        } else {
            console.log("No StashId for entry found");
        }
    }
}

/**
 * queries for each selected element
 *
 * the selected element should be [a child of] the link that will be compared with stash urls
 * the first text inside the selected element will be prepended with the symbol
 */
export function check(
    target: Target,
    elementSelector: string,
    {currentSite = false, ...checkConfig}: CheckOptions = {}
) {
    if (currentSite) {
        let element = document.querySelector(elementSelector);
        if (element) {
            // url of current site
            checkConfig.urlSelector ??= () => decodeURI(window.location.href);
            checkElement(target, element, checkConfig);
        }
    } else {
        // multiple entries with url nearest to element
        document.querySelectorAll(elementSelector).forEach((element) => {
            // url nearest to selected element traversing towards the root (children are ignored)
            checkConfig.urlSelector ??= (e: Element) => decodeURI(e.closest("a").href);
            checkElement(target, element, checkConfig);
        });
    }
}
