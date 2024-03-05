import {prefixSymbol} from "./tooltip/tooltip";
import {stashEndpoints} from "./settings/endpoints";
import {firstTextChild} from "./utils";
import {CheckOptions, StashEndpoint, Target, Type} from "./dataTypes";
import {request} from "./request";
import {booleanOptions, OptionKey} from "./settings/general";

enum DataFields {
    id = "id",
    code = "code",
    name = "name",
    disambiguation = "disambiguation",
    aliasList = "alias_list",
    title = "title",
    studio = "studio{name}",
    favorite = "favorite",
    date = "date",
    tags = "tags{id,name}",
    files = "files{path,duration,video_codec,width,height,size,bit_rate}"
}

let supportedDataFields = new Map<Target, DataFields[]>([
    [Target.Scene, [DataFields.id, DataFields.title, DataFields.code, DataFields.studio, DataFields.date, DataFields.tags, DataFields.files]],
    [Target.Performer, [DataFields.id, DataFields.name, DataFields.disambiguation, DataFields.aliasList, DataFields.favorite, DataFields.tags]],
    [Target.Gallery, [DataFields.id, DataFields.title, DataFields.date, DataFields.tags, DataFields.files]],
    [Target.Movie, [DataFields.id, DataFields.name, DataFields.date]],
    [Target.Studio,[DataFields.id, DataFields.name]],
    [Target.Tag, [DataFields.id, DataFields.name]],
]);

function getDataFields(target: Target): string {
    let supported = new Set(supportedDataFields.get(target)!)
    if (!booleanOptions.get(OptionKey.showTags)) {
        supported.delete(DataFields.tags)
    }
    if (!booleanOptions.get(OptionKey.showFiles)) {
        supported.delete(DataFields.files)
    }
    return new Array(...supported).join(",")
}

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
            query = `findScenes(scene_filter:{${criterion}}){scenes{${getDataFields(target)}}}`;
            access = (d) => d.scenes;
            break;
        case Target.Performer:
            query = `findPerformers(performer_filter:{${criterion}}){performers{${getDataFields(target)}}}`;
            access = (d) => d.performers;
            break;
        case Target.Gallery:
            query = `findGalleries(gallery_filter:{${criterion}}){galleries{${getDataFields(target)}}}`;
            access = (d) => d.galleries;
            break;
        case Target.Movie:
            query = `findMovies(movie_filter:{${criterion}}){movies{${getDataFields(target)}}}`;
            access = (d) => d.movies;
            break;
        case Target.Studio:
            query = `findStudios(studio_filter:{${criterion}}){studios{${getDataFields(target)}}}`;
            access = (d) => d.studios;
            break;
        case Target.Tag:
            query = `findTags(tag_filter:{${criterion}}){tags{${getDataFields(target)}}}`;
            access = (d) => d.tags;
            break;
        default:
            return;
    }

    // Get config values or wait for popup if it is not stored
    stashEndpoints.forEach((endpoint: StashEndpoint) => {
        request(endpoint, query, true)
            .then((data: any) => onload(target, type, endpoint, access(data)));
    });
}

/**
 * For a given element query stash with each configured query.
 * Default selectors for most queries are defined here.
 *
 * @param target
 * @param element
 * @param elementSelector
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
        displaySelector = (e: Element) => e,
        prepareUrl = url => url,
        urlSelector = (e: Element) => e.closest("a")?.href,
        codeSelector,
        stashIdSelector,
        stashIdEndpoint = `https://${window.location.host}/graphql`,
        nameSelector = e => firstTextChild(e)?.textContent?.trim(),
        titleSelector = e => firstTextChild(e)?.textContent?.trim(),
        color = () => "green",
    }: CheckOptions
) {
    if (urlSelector && prepareUrl) {
        let selectedUrl = urlSelector(element)
        let url = selectedUrl ? prepareUrl(selectedUrl) : selectedUrl;
        let displayElement = displaySelector(element)
        if (displayElement && url) {
            console.debug(`URL: ${url}`);
            await queryStash(url, (...args) => prefixSymbol(displayElement!, ...args, color), target, Type.Url, {stashIdEndpoint});
        } else {
            console.info(`No URL for ${target} found.`);
        }
    }
    if (codeSelector) {
        let code = codeSelector(element);
        let displayElement = displaySelector(element)
        if (displayElement && code) {
            console.debug(`Code: ${code}`);
            await queryStash(code, (...args) => prefixSymbol(displayElement!, ...args, color), target, Type.Code, {stashIdEndpoint});
        } else {
            console.info(`No Code for ${target} found.`);
        }
    }
    if (stashIdSelector) {
        let id = stashIdSelector(element);
        let displayElement = displaySelector(element)
        if (displayElement && id) {
            console.debug(`StashId: ${id}`);
            await queryStash(id, (...args) => prefixSymbol(displayElement!, ...args, color), target, Type.StashId, {stashIdEndpoint});
        } else {
            console.info(`No StashId for ${target} found.`);
        }
    }
    if ([Target.Performer, Target.Movie, Target.Studio, Target.Tag].includes(target) && nameSelector) {
        let name = nameSelector(element);
        // Do not use single performer names
        let nameCount = name?.split(/\s+/)?.length
        let ignore = target === Target.Performer && nameCount === 1
        let displayElement = displaySelector(element)
        if (displayElement && name && !ignore) {
            console.debug(`Name: ${name}`);
            await queryStash(name, (...args) => prefixSymbol(displayElement!, ...args, color), target, Type.Name, {stashIdEndpoint});
        } else if (name && ignore) {
            console.info(`Ignore single name: ${name}`)
        } else {
            console.info(`No Name for ${target} found.`);
        }
    }
    if ([Target.Scene, Target.Gallery].includes(target) && titleSelector) {
        let title = titleSelector(element);
        let displayElement = displaySelector(element)
        if (displayElement && title) {
            console.debug(`Title: ${title}`);
            await queryStash(title, (...args) => prefixSymbol(displayElement!, ...args, color), target, Type.Title, {stashIdEndpoint});
        } else {
            console.info(`No Title for ${target} found.`);
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
            .filter(e => !e.matches(exclude) && !e.parentElement?.matches(exclude))
            .forEach(callback);
    });
    let body = document.querySelector("body")!;
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
