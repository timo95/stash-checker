import {firstTextChild, prefixSymbol} from "./tooltip";
import {getConfig} from "./config";

type Selector = (e: Element) => string;

interface CheckOptions {
    urlSelector?: Selector;
    prepareUrl?: (url: string) => string;
    codeSelector?: Selector;
    stashIdSelector?: Selector;
    stashIdEndpoint?: string;
    nameSelector?: Selector;
    titleSelector?: Selector;
    color?: (data: any) => string;
    currentSite?: boolean;
    observe?: boolean;
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
    type: Type,
    {stashIdEndpoint}: CheckOptions
) {
    let criterion;
    let query;
    let access = (d: any) => d;

    // Build filter
    switch (type) {
        case "stash_id":
            criterion = `{stash_id_endpoint:{endpoint:"${stashIdEndpoint}",stash_id:"${queryString}",modifier:EQUALS}}`;
            break;
        default:
            criterion = `{${type}:{value:"${queryString}",modifier:EQUALS}}`;
            break;
    }

    // Build query
    switch (target) {
        case "scene":
            query = `{findScenes(scene_filter:${criterion}){scenes{id,title,code,studio{name},date,files{path,duration,video_codec,width,height,size,bit_rate}}}}`;
            access = (d) => d.findScenes.scenes;
            break;
        case "performer":
            query = `{findPerformers(performer_filter:${criterion}){performers{id,name,disambiguation,alias_list,favorite}}}`;
            access = (d) => d.findPerformers.performers;
            break;
        case "gallery":
            query = `{findGalleries(gallery_filter:${criterion}){galleries{id,title,date,files{path}}}}`;
            access = (d) => d.findGalleries.galleries;
            break;
        case "movie":
            query = `{findMovies(movie_filter:${criterion}){movies{id,name,date}}}`;
            access = (d) => d.findMovies.movies;
            break;
        default:
            return;
    }

    // Get config values or wait for popup if it is not stored
    let [stashUrl, apiKey] = await configPromise
    GM.xmlHttpRequest({
        method: "GET",
        url: `${stashUrl}/graphql?query=${encodeURIComponent(query)}`,  // encode query (important for url and some titles)
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

/**
 * For a given element query stash with each configured query.
 * Default selectors for most queries are defined here.
 *
 * @param target
 * @param element
 * @param currentSite
 * @param prepareUrl
 * @param urlSelector
 * @param codeSelector
 * @param stashIdSelector
 * @param stashIdEndpoint
 * @param nameSelector
 * @param titleSelector
 * @param color
 */
async function checkElement(
    target: Target,
    element: Element,
    {
        currentSite = false,
        prepareUrl = url => url,
        urlSelector = currentSite ?
            () => decodeURI(window.location.href) :
            (e: Element) => decodeURI(e.closest("a").href),
        codeSelector,
        stashIdSelector,
        stashIdEndpoint = `https://${window.location.host}/graphql`,
        nameSelector = e => firstTextChild(e)?.textContent?.trim(),
        titleSelector = e => firstTextChild(e)?.textContent?.trim(),
        color = () => "green",
    }: CheckOptions
) {
    if (urlSelector && prepareUrl) {
        let url = prepareUrl(urlSelector(element));
        if (url) {
            console.debug(`URL: ${url}`);
            await request(url, (...args) => prefixSymbol(element, ...args, "URL", color), target, "url", {stashIdEndpoint});
        } else {
            console.log(`No URL for ${target} found.`);
        }
    }
    if (codeSelector) {
        let code = codeSelector(element);
        if (code) {
            console.debug(`Code: ${code}`);
            await request(code, (...args) => prefixSymbol(element, ...args, "Code", color), target, "code", {stashIdEndpoint});
        } else {
            console.log(`No Code for ${target} found.`);
        }
    }
    if (stashIdSelector) {
        let id = stashIdSelector(element);
        if (id) {
            console.debug(`StashId: ${id}`);
            await request(id, (...args) => prefixSymbol(element, ...args, "StashId", color), target, "stash_id", {stashIdEndpoint});
        } else {
            console.log(`No StashId for ${target} found.`);
        }
    }
    if (["performer", "movie"].includes(target) && nameSelector) {
        let name = nameSelector(element);
        // Do not use single names
        let nameCount = name?.split(/\s+/)?.length
        if (name && nameCount > 1) {
            console.debug(`Name: ${name}`);
            await request(name, (...args) => prefixSymbol(element, ...args, "Name", color), target, "name", {stashIdEndpoint});
        } else if (name && nameCount === 1) {
            console.log(`Ignore single name: ${name}`)
        } else {
            console.log(`No Name for ${target} found.`);
        }
    }
    if (["scene", "gallery"].includes(target) && titleSelector) {
        let title = titleSelector(element);
        if (title) {
            console.debug(`Title: ${title}`);
            await request(title, (...args) => prefixSymbol(element, ...args, "Title", color), target, "title", {stashIdEndpoint});
        } else {
            console.log(`No Title for ${target} found.`);
        }
    }
}

/**
 * Run callback when a new element added to the document matches the selector.
 *
 * @param selector css selector string
 * @param callback callback function
 */
function onAddition(selector: string, callback: (e: Element) => void) {
    // Run on each element addition
    let observer = new MutationObserver((mutations) => {
        let addedElements = mutations
            .flatMap(m => Array.from(m.addedNodes))
            .filter(n => n.nodeType === Node.ELEMENT_NODE)
            .map(n => n as Element)
        addedElements
            .filter(e => e.matches(selector))
            .concat(addedElements.flatMap(e => Array.from(e.querySelectorAll(selector))))
            .filter(e => !e.parentElement.matches(".stashCheckerTooltip"))
            .forEach(callback);
    });
    let body = document.querySelector("body");
    observer.observe(body, {childList: true, subtree: true});
}

/**
 * Queries for each selected element
 *
 * The selected element should be [a descendant of] the link that will be compared with stash urls.
 * The first text inside the selected element will be prepended with the symbol.
 */
export function check(
    target: Target,
    elementSelector: string,
    {observe = false, ...checkConfig}: CheckOptions = {}
) {
    // Run query on addition of new elements fitting the selector
    if (observe) {
        onAddition(elementSelector, (element: Element) =>
            checkElement(target, element, checkConfig)
        );
    }
    document.querySelectorAll(elementSelector).forEach((e) => checkElement(target, e, checkConfig));
}
