import {StashQuery} from "./tooltip/stashQuery";

/**
 * Represents a Stash GraphQL endpoint.
 */
export type StashEndpoint = {
    name: string,
    url: string,
    key: string,
}

/**
 * Return type of GraphQL queries representing an entry.
 */
export type StashEntry = {
    [key in DataField]: any | StashFile[];
} & {
    queries: StashQuery[];
    endpoint: string;
    display: DisplayOptions;
};

export type StashFile = {
    [key in DataField]: any;
}

export enum Method {
    Get = "GET",
    Post = "POST",
}

/**
 * A batch collector of requests.
 */
export interface BatchQuery {
    timerHandle: number,
    queries: GraphQlQuery[],
}

/**
 * A graphql query and result handlers.
 */
export interface GraphQlQuery {
    query: string,
    resolve?: (data: any) => void,
    reject?: (message?: string) => void,
}

export interface DisplayOptions {
    color: string,
}

export interface CustomDisplayRule {
    target: Target,
    pattern: string,
    filter: string,
    display: DisplayOptions,
}

/**
 * Possible fields and subfields of the returned data
 */
export enum DataField {
    Aliases = "aliases",
    AliasList = "alias_list",
    Birthdate = "birthdate",
    BitRate = "bit_rate",
    Code = "code",
    Date = "date",
    Director = "director",
    Disambiguation = "disambiguation",
    Duration = "duration",
    Favorite = "favorite",
    Files = "files",
    Height = "height",
    HeightCm = "height_cm",
    Id = "id",
    Name = "name",
    Organized = "organized",
    Path = "path",
    SceneCount = "scene_count",
    Size = "size",
    Studio = "studio",
    Tags = "tags",
    Title = "title",
    VideoCodec = "video_codec",
    Width = "width",
}

export enum StashSymbol {
    Check = "check",
    Warning = "warning",
    Cross = "cross",
}

/**
 * Entry types in Stash
 */
export enum Target {
    Gallery = "gallery",
    Group = "group",
    Performer = "performer",
    Scene = "scene",
    Studio = "studio",
    Tag = "tag",
}

export function readable(target: Target): string {
    return target.charAt(0).toUpperCase() + target.slice(1);
}

export function readablePlural(target: Target): string {
    switch (target) {
        case Target.Gallery: return "Galleries";
        default: return readable(target) + "s";
    }
}

/**
 * Ways to query for an entry
 */
export enum Type {
    Aliases = "aliases",
    Code = "code",
    Name = "name",
    StashId = "stash_id",
    Title = "title",
    Url = "url",
}

/**
 * Possible themes
 */
export enum Theme {
    Light = "light",
    Dark = "dark",
    Device = "device"
}

/**
 * Date display formats
 */
export enum DateFormat {
    Local = "local",
    Iso = "iso"
}

/**
 * A function to select a [Type] query parameter from a given element.
 */
export type Selector = (e: Element) => null | undefined | string;

/**
 * Configure queries for an entry.
 */
export interface CheckOptions {
    displaySelector?: (e: Element) => Node | null | undefined;
    urlSelector?: Selector | null;
    codeSelector?: Selector | null;
    stashIdSelector?: Selector | null;
    stashIdEndpoint?: string;
    nameSelector?: Selector | null;
    titleSelector?: Selector | null;
    observe?: boolean;
}
