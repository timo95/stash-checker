import {prefixSymbol} from "./tooltip/tooltip";
import {stashEndpoints} from "./settings/endpoints";
import {firstText, hasKanji} from "./utils";
import {CheckOptions, DataField, StashEndpoint, Target, Type} from "./dataTypes";
import {request} from "./request";
import {booleanOptions, OptionKey} from "./settings/general";
import {onAddition} from "./observer";

const supportedDataFields = new Map<Target, DataField[]>([
    [Target.Scene, [DataField.Id, DataField.Title, DataField.Organized, DataField.Studio, DataField.Code, DataField.Date, DataField.Tags, DataField.Files]],
    [Target.Performer, [DataField.Id, DataField.Name, DataField.Disambiguation, DataField.Favorite, DataField.AliasList, DataField.Birthdate, DataField.HeightCm, DataField.Tags]],
    [Target.Gallery, [DataField.Id, DataField.Title, DataField.Date, DataField.Tags, DataField.Files]],
    [Target.Movie, [DataField.Id, DataField.Name, DataField.Date]],
    [Target.Studio,[DataField.Id, DataField.Name, DataField.Aliases]],
    [Target.Tag, [DataField.Id, DataField.Name]],
]);

const supportedSubDataFields = new Map<DataField, DataField[]>([
    [DataField.Studio, [DataField.Name]],
    [DataField.Tags, [DataField.Id, DataField.Name]],
    [DataField.Files, [DataField.Path, DataField.VideoCodec, DataField.Width, DataField.Height, DataField.Size, DataField.BitRate, DataField.Duration]],
]);

function getDataFields(target: Target): string {
    let supported = new Set(supportedDataFields.get(target) ?? [])
    if (!booleanOptions.get(OptionKey.showTags)) {
        supported.delete(DataField.Tags)
    }
    if (!booleanOptions.get(OptionKey.showFiles)) {
        supported.delete(DataField.Files)
    }
    return Array.from(supported).map(field => field + getSubDataFields(field)).join(",")
}

function getSubDataFields(field: DataField): string {
    let supported = supportedSubDataFields.get(field) ?? []
    let string = supported.join(",")
    return string ? `{${string}}` : ""
}

async function queryStash(
    queryString: string,
    onload: (target: Target, type: Type, endpoint: StashEndpoint, data: any[]) => any,
    target: Target,
    type: Type,
    stashIdEndpoint: string
) {
    let criterion: string;
    let query: string;
    let access = (d: any) => d;

    // Build filter
    switch (type) {
        case Type.StashId:
            criterion = `stash_id_endpoint:{endpoint:"${encodeURIComponent(stashIdEndpoint)}",stash_id:"${encodeURIComponent(queryString)}",modifier:EQUALS}`;
            break;
        default:
            criterion = `${type}:{value:"""${encodeURIComponent(queryString)}""",modifier:EQUALS}`;
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
        urlSelector = (e: Element) => e.closest("a")?.href,
        codeSelector,
        stashIdSelector,
        stashIdEndpoint = `https://${window.location.host}/graphql`,
        nameSelector = firstText,
        titleSelector = firstText,
        color = () => "green",
    }: CheckOptions
) {
    let displayElement = displaySelector(element)
    if (!displayElement) {
        return
    }

    if (urlSelector) {
        let url = urlSelector(element)
        if (url) {
            console.debug(`URL: ${url}`);
            await queryStash(url, (...args) => prefixSymbol(displayElement!, ...args, color), target, Type.Url, stashIdEndpoint);
        } else {
            console.info(`No URL for ${target} found.`);
        }
    }
    if (codeSelector) {
        let code = codeSelector(element);
        if (code) {
            console.debug(`Code: ${code}`);
            await queryStash(code, (...args) => prefixSymbol(displayElement!, ...args, color), target, Type.Code, stashIdEndpoint);
        } else {
            console.info(`No Code for ${target} found.`);
        }
    }
    if (stashIdSelector) {
        let id = stashIdSelector(element);
        if (id) {
            console.debug(`StashId: ${id}`);
            await queryStash(id, (...args) => prefixSymbol(displayElement!, ...args, color), target, Type.StashId, stashIdEndpoint);
        } else {
            console.info(`No StashId for ${target} found.`);
        }
    }
    if ([Target.Performer, Target.Movie, Target.Studio, Target.Tag].includes(target) && nameSelector) {
        let name = nameSelector(element);
        // Do not use single performer names
        let nameCount = name?.split(/\s+/)?.length
        let kanji = name ? hasKanji(name) : false
        let ignore = target === Target.Performer && nameCount === 1 && !kanji
        if (name && !ignore) {
            console.debug(`Name: ${name}`);
            await queryStash(name, (...args) => prefixSymbol(displayElement!, ...args, color), target, Type.Name, stashIdEndpoint);
        } else if (name && ignore) {
            console.info(`Ignore single name: ${name}`)
        } else {
            console.info(`No Name for ${target} found.`);
        }
    }
    if ([Target.Scene, Target.Gallery].includes(target) && titleSelector) {
        let title = titleSelector(element);
        if (title) {
            console.debug(`Title: ${title}`);
            await queryStash(title, (...args) => prefixSymbol(displayElement!, ...args, color), target, Type.Title, stashIdEndpoint);
        } else {
            console.info(`No Title for ${target} found.`);
        }
    }
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
