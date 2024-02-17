import {prefixSymbol} from "./tooltip";
import {stashEndpoints} from "./settings";
import {firstTextChild} from "./utils";
import {CheckOptions, StashEndpoint, Target, Type} from "./dataTypes";
import {request} from "./request";

async function queryStash(
    queryString: string,
    onload: (target: Target, type: Type, endpoint: StashEndpoint, data: any[]) => any,
    target: Target,
    type: Type,
    {stashIdEndpoint}: CheckOptions
) {
    let criterion: string;
    let query: string;
    let access = (d: any) => d;

    // Build filter
    switch (type) {
        case Type.StashId:
            criterion = `stash_id_endpoint:{endpoint:"${stashIdEndpoint}",stash_id:"${queryString}",modifier:EQUALS}`;
            break;
        default:
            criterion = `${type}:{value:"${queryString}",modifier:EQUALS}`;
            break;
    }

    // Build query
    switch (target) {
        case Target.Scene:
            query = `findScenes(scene_filter:{${criterion}}){scenes{id,title,code,studio{name},date,files{path,duration,video_codec,width,height,size,bit_rate}}}`;
            access = (d) => d.scenes;
            break;
        case Target.Performer:
            query = `findPerformers(performer_filter:{${criterion}}){performers{id,name,disambiguation,alias_list,favorite}}`;
            access = (d) => d.performers;
            break;
        case Target.Gallery:
            query = `findGalleries(gallery_filter:{${criterion}}){galleries{id,title,date,files{path}}}`;
            access = (d) => d.galleries;
            break;
        case Target.Movie:
            query = `findMovies(movie_filter:{${criterion}}){movies{id,name,date}}`;
            access = (d) => d.movies;
            break;
        case Target.Studio:
            query = `findStudios(studio_filter:{${criterion}}){studios{id,name}}`;
            access = (d) => d.studios;
            break;
        case Target.Tag:
            query = `findTags(tag_filter:{${criterion}}){tags{id,name}}`;
            access = (d) => d.tags;
            break;
        default:
            return;
    }

    // Get config values or wait for popup if it is not stored
    stashEndpoints.forEach((endpoint: StashEndpoint) => {
        let graphQlQuery = {query, onload: (data: any) => onload(target, type, endpoint, access(data))}
        request(endpoint, graphQlQuery, true);
    });
}

/**
 * For a given element query stash with each configured query.
 * Default selectors for most queries are defined here.
 *
 * @param target
 * @param element
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
        prepareUrl = url => url,
        urlSelector = (e: Element) => e.closest("a").href,
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
            await queryStash(url, (...args) => prefixSymbol(element, ...args, color), target, Type.Url, {stashIdEndpoint});
        } else {
            console.log(`No URL for ${target} found.`);
        }
    }
    if (codeSelector) {
        let code = codeSelector(element);
        if (code) {
            console.debug(`Code: ${code}`);
            await queryStash(code, (...args) => prefixSymbol(element, ...args, color), target, Type.Code, {stashIdEndpoint});
        } else {
            console.log(`No Code for ${target} found.`);
        }
    }
    if (stashIdSelector) {
        let id = stashIdSelector(element);
        if (id) {
            console.debug(`StashId: ${id}`);
            await queryStash(id, (...args) => prefixSymbol(element, ...args, color), target, Type.StashId, {stashIdEndpoint});
        } else {
            console.log(`No StashId for ${target} found.`);
        }
    }
    if ([Target.Performer, Target.Movie, Target.Studio, Target.Tag].includes(target) && nameSelector) {
        let name = nameSelector(element);
        // Do not use single performer names
        let nameCount = name?.split(/\s+/)?.length
        let ignore = target === Target.Performer && nameCount === 1
        if (name && !ignore) {
            console.debug(`Name: ${name}`);
            await queryStash(name, (...args) => prefixSymbol(element, ...args, color), target, Type.Name, {stashIdEndpoint});
        } else if (name && ignore) {
            console.log(`Ignore single name: ${name}`)
        } else {
            console.log(`No Name for ${target} found.`);
        }
    }
    if ([Target.Scene, Target.Gallery].includes(target) && titleSelector) {
        let title = titleSelector(element);
        if (title) {
            console.debug(`Title: ${title}`);
            await queryStash(title, (...args) => prefixSymbol(element, ...args, color), target, Type.Title, {stashIdEndpoint});
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
    let exclude = ".stashChecker, .stashCheckerCheckmark"
    // Run on each element addition
    let observer = new MutationObserver((mutations) => {
        let addedElements = mutations
            .flatMap(m => Array.from(m.addedNodes))
            .filter(n => n.nodeType === Node.ELEMENT_NODE)
            .map(n => n as Element)
        addedElements
            .filter(e => e.matches(selector))
            .concat(addedElements.flatMap(e => Array.from(e.querySelectorAll(selector))))
            .filter(e => !e.matches(exclude) && !e.parentElement.matches(exclude))
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
