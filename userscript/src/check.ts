import {prefixSymbol} from "./tooltip/tooltip";
import {stashEndpoints} from "./settings/endpoints";
import {firstText} from "./utils";
import {
    CheckOptions,
    CustomDisplayRule,
    DataField,
    DisplayOptions,
    Method,
    StashEndpoint,
    Target,
    Type
} from "./dataTypes";
import {request} from "./request";
import {onAddition} from "./observer";
import {customDisplayRules} from "./settings/display";
import {booleanOptions, getEnumOptionMethod, OptionKey} from "./settings/providers";
import {nakedDomain} from "./util/stringUtils";

const supportedDataFields = new Map<Target, DataField[]>([
    [Target.Scene, [DataField.Id, DataField.Title, DataField.Organized, DataField.Studio, DataField.Code, DataField.Date, DataField.Tags, DataField.Files]],
    [Target.Performer, [DataField.Id, DataField.Name, DataField.Disambiguation, DataField.Favorite, DataField.AliasList, DataField.Birthdate, DataField.CareerLength, DataField.HeightCm, DataField.Tags]],
    [Target.Gallery, [DataField.Id, DataField.Title, DataField.Date, DataField.Tags]],
    [Target.Group, [DataField.Id, DataField.Name, DataField.Aliases, DataField.Date, DataField.Studio, DataField.Director, DataField.SceneCount, DataField.Tags]],
    [Target.Studio, [DataField.Id, DataField.Name, DataField.Aliases, DataField.Tags]],
    [Target.Tag, [DataField.Id, DataField.Name, DataField.Aliases]],
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

function escapeString(value: string, method: Method): string {
    let escapedGraphQl = value
        .replaceAll("\n", "\\n")
        .replaceAll('"', "\\u0022")
        .replaceAll("\\", "\\\\")

    switch (method) {
        case Method.Get:
            return encodeURIComponent(escapedGraphQl)
        case Method.Post:
            return escapedGraphQl
        default:
            throw Error(`Missing implementation for method ${method}`);
    }
}

async function queryStash(
    queryString: string,
    onload: (target: Target, type: Type, endpoint: StashEndpoint, data: any[]) => any,
    target: Target,
    type: Type,
    customFilter: string,
    stashIdEndpoint: string
) {
    let filter: string;
    let query: string;
    let access = (d: any) => d;
    let method = getEnumOptionMethod()

    // Build filter
    switch (type) {
        case Type.StashId:
            filter = `stash_id_endpoint:{endpoint:"${escapeString(stashIdEndpoint, method)}",stash_id:"${escapeString(queryString, method)}",modifier:EQUALS}${customFilter}`;
            break;
        case Type.Url:
            filter = `${type}:{value:"${escapeString(queryString, method)}",modifier:INCLUDES}${customFilter}`;
            break;
        default:
            filter = `${type}:{value:"${escapeString(queryString, method)}",modifier:EQUALS}${customFilter}`;
            break;
    }

    // Build query
    switch (target) {
        case Target.Scene:
            query = `findScenes(scene_filter:{${filter}}){scenes{${getDataFields(target)}}}`;
            access = (d) => d.scenes;
            break;
        case Target.Performer:
            query = `findPerformers(performer_filter:{${filter}}){performers{${getDataFields(target)}}}`;
            access = (d) => d.performers;
            break;
        case Target.Gallery:
            query = `findGalleries(gallery_filter:{${filter}}){galleries{${getDataFields(target)}}}`;
            access = (d) => d.galleries;
            break;
        case Target.Group:
            query = `findGroups(group_filter:{${filter}}){groups{${getDataFields(target)}}}`;
            access = (d) => d.groups;
            break;
        case Target.Studio:
            query = `findStudios(studio_filter:{${filter}}){studios{${getDataFields(target)}}}`;
            access = (d) => d.studios;
            break;
        case Target.Tag:
            query = `findTags(tag_filter:{${filter}}){tags{${getDataFields(target)}}}`;
            access = (d) => d.tags;
            break;
        default:
            return;
    }

    // Get config values or wait for popup if it is not stored
    stashEndpoints.forEach((endpoint: StashEndpoint) => {
        request(endpoint, query, method, true)
            .then((data: any) => onload(target, type, endpoint, access(data)));
    });
}

/**
 * For a given element query stash with each configured query.
 * Default selectors for most queries are defined here.
 */
async function checkElement(
    target: Target,
    element: Element,
    customFilter: string,
    display: DisplayOptions,
    {
        displaySelector = (e: Element) => e,
        urlSelector = (e: Element) => e.closest("a")?.href,
        codeSelector,
        stashIdSelector,
        stashIdEndpoint = `https://${window.location.host}/graphql`,
        nameSelector = firstText,
        titleSelector = firstText,
    }: CheckOptions
) {
    let displayElement = displaySelector(element)
    if (!displayElement) {
        return
    }

    if (urlSelector) {
        let url = urlSelector(element)
        if (url) {
            url = nakedDomain(url);
            console.debug(`URL: ${url}`);
            await queryStash(url, (...args) => prefixSymbol(displayElement!, ...args, display), target, Type.Url, customFilter, stashIdEndpoint);
        } else {
            console.info(`No URL for ${target} found.`);
        }
    }
    if (codeSelector) {
        let code = codeSelector(element);
        if (code) {
            console.debug(`Code: ${code}`);
            await queryStash(code, (...args) => prefixSymbol(displayElement!, ...args, display), target, Type.Code, customFilter, stashIdEndpoint);
        } else {
            console.info(`No Code for ${target} found.`);
        }
    }
    if (stashIdSelector) {
        let id = stashIdSelector(element);
        if (id) {
            console.debug(`StashId: ${id}`);
            await queryStash(id, (...args) => prefixSymbol(displayElement!, ...args, display), target, Type.StashId, customFilter, stashIdEndpoint);
        } else {
            console.info(`No StashId for ${target} found.`);
        }
    }
    if ([Target.Performer, Target.Group, Target.Studio, Target.Tag].includes(target) && nameSelector) {
        let name = nameSelector(element);
        let ignore = target === Target.Performer && (name ? ignorePerformerName(name) : true);
        if (name && !ignore) {
            console.debug(`Name: ${name}`);
            await queryStash(name, (...args) => prefixSymbol(displayElement!, ...args, display), target, Type.Name, customFilter, stashIdEndpoint);
        } else if (name && ignore) {
            console.info(`Ignore single name: ${name}`)
        } else {
            console.info(`No Name for ${target} found.`);
        }
    }
    if ([Target.Performer, Target.Studio, Target.Tag].includes(target) && nameSelector) {
        let name = nameSelector(element);
        let ignore = target === Target.Performer && (name ? ignorePerformerName(name) : true);
        if (name && !ignore) {
            console.debug(`Alias name: ${name}`);
            await queryStash(name, (...args) => prefixSymbol(displayElement!, ...args, display), target, Type.Aliases, customFilter, stashIdEndpoint);
        } else if (name && ignore) {
            console.info(`Ignore single name alias: ${name}`)
        } else {
            console.info(`No name alias for ${target} found.`);
        }
    }
    if ([Target.Scene, Target.Gallery].includes(target) && titleSelector) {
        let title = titleSelector(element);
        if (title) {
            console.debug(`Title: ${title}`);
            await queryStash(title, (...args) => prefixSymbol(displayElement!, ...args, display), target, Type.Title, customFilter, stashIdEndpoint);
        } else {
            console.info(`No Title for ${target} found.`);
        }
    }
}

function ignorePerformerName(name: string): boolean {
    // Do not use single performer names
    let nameCount = name.split(/\s+/).length
    return nameCount === 1 && !name.hasKanji()
}

function getCustomRules(target: Target): CustomDisplayRule[] {
    let targetRules = customDisplayRules.filter(rule => rule.target === target)
    // @ts-ignore: Property 'URLPattern' does not exist TODO remove
    return targetRules.filter(rule => new URLPattern(rule.pattern, self.location.href).test(window.location.href))
}

/**
 * Combine filters with AND/NOT/OR recursively
 * Flat list has too many restrictions (no duplicate filter types, no AND / OR / NOT in the same filter)
 */
function combineFilters(customAndFilters: string[], customNotFilters: string[]): string {
    let andFilter = customAndFilters.map(f => ",AND:{" + f).join()
    let notFilter = customNotFilters.length == 0 ? "" : ",NOT:{" + customNotFilters.join(",OR:{")
    let closing = "}".repeat(customAndFilters.length + customNotFilters.length)
    return andFilter + notFilter + closing
}

/**
 * Resolves custom rules. Lower index equates to higher priority.
 *
 * Example: List of 3 custom rules results in these 4 query filters
 * 0 -> 0
 * 1 -> NOT 0 && 1
 * 2 -> NOT 0 && NOT 1 && 2
 * default -> NOT 0 && NOT 1 && NOT 2
 */
function checkWithCustomRules(
    target: Target,
    element: Element,
    checkConfig: CheckOptions
) {
    let customRules = getCustomRules(target)

    // filter for each rule
    for (let i = 0; i < customRules.length; i++) {
        let rule = customRules[i]
        let notFilters = customRules.slice(0, i).map(rule => rule.filter).map(emptyToTrue)
        let andFilters = [rule.filter].map(emptyToTrue)
        void checkElement(target, element, combineFilters(andFilters, notFilters), rule.display, checkConfig)
    }
    // default excluding all rules
    let notFilters = customRules.map(rule => rule.filter).map(emptyToTrue)
    console.log("default")
    void checkElement(target, element, combineFilters([], notFilters), {color: "green"}, checkConfig)
}

function emptyToTrue(s: string): string {
    return s.length > 0 ? s : "id:{value:-1,modifier:GREATER_THAN}"
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
            checkWithCustomRules(target, element, checkConfig)
        );
    }
    document.querySelectorAll(elementSelector).forEach((e) => checkWithCustomRules(target, e, checkConfig));
}
