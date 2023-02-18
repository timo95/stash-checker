import {firstTextChild, prefixSymbol} from "./tooltip";
import {getConfig} from "./config";

interface CheckOptions {
    urlSelector?: (e: Element) => string;
    prepareUrl?: (url: string) => string;
    codeSelector?: (e: Element) => string;
    stashIdSelector?: (e: Element) => string;
    nameSelector?: (e: Element) => string;
    titleSelector?: (e: Element) => string;
    color?: (data: any) => string;
    currentSite?: boolean;
    observe?: boolean | string;
}

// what the query asks for
export type Target = "scene" | "performer" | "gallery" | "movie"
// what the query uses to filter
type Type = "url" | "code" | "stash_id" | "name" | "title"

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
    switch (target) {
        case "scene":
            query = `{findScenes(scene_filter:{${type}:{value:"${queryString}",modifier:EQUALS}}){scenes{id,title,code,studio{name},date,files{path,duration,video_codec,width,height,bit_rate}}}}`;
            access = (d) => d.findScenes.scenes;
            break;
        case "performer":
            query = `{findPerformers(performer_filter:{${type}:{value:"${queryString}",modifier:EQUALS}}){performers{id,name,disambiguation,alias_list}}}`;
            access = (d) => d.findPerformers.performers;
            break;
        case "gallery":
            query = `{findGalleries(gallery_filter:{${type}:{value:"${queryString}",modifier:EQUALS}}){galleries{id,title,date,files{path}}}}`;
            access = (d) => d.findGalleries.galleries;
            break;
        case "movie":
            query = `{findMovies(movie_filter:{${type}:{value:"${queryString}",modifier:EQUALS}}){movies{id,name,date}}}`;
            access = (d) => d.findMovies.movies;
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
                let r = JSON.parse(response.responseText)
                if ("errors" in r) {
                    r.errors.forEach((e: any) => {
                        console.log(`Stash returned "${e.extensions.code}" error: ${e.message}`)
                    });
                } else {
                    onload(target, access(r.data), stashUrl);
                }
            } catch (e) {
                console.log("Exception: " + e);
                console.log("Failed to parse response: " + response.responseText);
            }
        },
    });
}

async function checkElement(
    target: Target,
    element: Element,
    {
        prepareUrl = url => url,
        urlSelector,  // default is set in check()
        codeSelector,
        stashIdSelector,
        nameSelector = e => firstTextChild(e)?.textContent?.trim(),
        titleSelector = e => firstTextChild(e)?.textContent?.trim(),
        color = () => "green",
    }: CheckOptions
) {
    if (urlSelector && prepareUrl) {
        let url = urlSelector(element);
        url = prepareUrl(url);
        if (url) {
            url = encodeURIComponent(url);
            console.log(url);
            await request(url, (...args) => prefixSymbol(element, ...args, "URL", color), target, "url");
        } else {
            console.log(`No URL for ${target} found.`);
        }
    }
    if (codeSelector) {
        let code = codeSelector(element);
        if (code) {
            console.log(code);
            await request(code, (...args) => prefixSymbol(element, ...args, "Code", color), target, "code");
        } else {
            console.log(`No Code for ${target} found.`);
        }
    }
    if (stashIdSelector) {
        let id = stashIdSelector(element);
        if (id) {
            console.log(id);
            await request(id, (...args) => prefixSymbol(element, ...args, "StashId", color), target, "stash_id");
        } else {
            console.log(`No StashId for ${target} found.`);
        }
    }
    if (target === "performer" && nameSelector) {
        let name = nameSelector(element);
        // Do not use single names
        let nameCount = name?.split(/\s+/)?.length
        if (name && nameCount > 1) {
            console.log(name);
            await request(name, (...args) => prefixSymbol(element, ...args, "Name", color), target, "name");
        } else if (name && nameCount === 1) {
            console.log(`Ignore single name: ${name}`)
        } else {
            console.log(`No Name for ${target} found.`);
        }
    }
    if (["scene", "gallery"].includes(target) && titleSelector) {
        let title = titleSelector(element);
        if (title) {
            console.log(title);
            await request(title, (...args) => prefixSymbol(element, ...args, "Title", color), target, "title");
        } else {
            console.log(`No Title for ${target} found.`);
        }
    }
}

/**
 * Run callback when a new object added to the document matches the selector.
 * Calls callback with a timer after the last addition to prevent unnecessary executions.
 *
 * @param selector css selector string
 * @param callback callback function
 */
function onAddition(selector: string, callback: any) {
    // Run on each type-element addition
    let body = document.querySelector("body");
    let timeout: any = undefined;
    let observer = new MutationObserver((mutations) => {
        let newNode = mutations.map(m => Array.from(m.addedNodes)
                .filter(n => n.nodeType === Node.ELEMENT_NODE)
                .some(n => (n as Element).matches(selector) || (n as Element).querySelector(selector)) ||  // Element or Child match
            Array.from(m.addedNodes).map(n => n.parentElement).filter(e => e).some(e => e.matches(selector))  // Parent match (if text node was added)
        ).some(n => n);
        if (newNode) {
            console.log(`"${selector}"-element was added or modified. Start/Update Timer.`);
            clearTimeout(timeout);
            timeout = setTimeout(_ => {
                console.log("Run queries.");
                callback();
            }, 200);  // arbitrary delay to prevent too many calls
        }
    });
    observer.observe(body, {childList: true, subtree: true});
}

/**
 * queries for each selected element
 *
 * the selected element should be [a child of] the link that will be compared with stash urls
 * the first text inside the selected element will be prepended with the symbol
 * Set predefined selectors to "null" to not use them.
 */
function checkOnce(
    target: Target,
    elementSelector: string,
    {currentSite = false, ...checkConfig}: CheckOptions = {}
) {
    if (currentSite) {
        let element = document.querySelector(elementSelector);
        if (element) {
            // url of current site
            checkConfig.urlSelector = (checkConfig.urlSelector === undefined) ? () => decodeURI(window.location.href) : checkConfig.urlSelector;
            checkElement(target, element, checkConfig);
        }
    } else {
        // multiple entries with url nearest to element
        document.querySelectorAll(elementSelector).forEach((element) => {
            // url nearest to selected element traversing towards the root (children are ignored)
            checkConfig.urlSelector = (checkConfig.urlSelector === undefined) ? (e: Element) => decodeURI(e.closest("a").href) : checkConfig.urlSelector;
            checkElement(target, element, checkConfig);
        });
    }
}

/**
 * queries for each selected element
 *
 * the selected element should be [a child of] the link that will be compared with stash urls
 * the first text inside the selected element will be prepended with the symbol
 * Set predefined selectors to "null" to not use them.
 */
export function check(
    target: Target,
    elementSelector: string,
    {observe = false, ...checkConfig}: CheckOptions = {}
) {
    // Exclude direct children of tooltip window (some selectors match the stash link)
    elementSelector = ":not(.stashCheckerTooltip) > " + elementSelector;

    // Callback on addition of new elements fitting the query
    if (observe) {
        let selector = typeof observe === "string" ? observe : elementSelector
        onAddition(selector, (_: any) => checkOnce(target, elementSelector, checkConfig))
    }
    checkOnce(target, elementSelector, checkConfig)
}
