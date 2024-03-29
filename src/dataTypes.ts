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
};

export type StashFile = {
    [key in DataField]: any;
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
    reject?: (message?: string) => void
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
    Disambiguation = "disambiguation",
    Duration = "duration",
    Favorite = "favorite",
    Files = "files",
    Height = "height",
    HeightCm = "height_cm",
    Id = "id",
    Name = "name",
    Path = "path",
    Size = "size",
    Studio = "studio",
    Tags = "tags",
    Title = "title",
    VideoCodec = "video_codec",
    Width = "width",
}

/**
 * Entry types in Stash
 */
export enum Target {
    Gallery = "gallery",
    Movie = "movie",
    Performer = "performer",
    Scene = "scene",
    Studio = "studio",
    Tag = "tag",
}

/**
 * Ways to query for an entry
 */
export enum Type {
    Code = "code",
    Name = "name",
    StashId = "stash_id",
    Title = "title",
    Url = "url",
}

/**
 * A function to select a [Type] query parameter from a given element.
 */
export type Selector = (e: Element) => null | undefined | string;

/**
 * Configure queries for an entry.
 */
export interface CheckOptions {
    displaySelector?: (e: Element) => Element | null | undefined;
    urlSelector?: Selector | null;
    prepareUrl?: (url: string) => string | undefined;
    codeSelector?: Selector | null;
    stashIdSelector?: Selector | null;
    stashIdEndpoint?: string;
    nameSelector?: Selector | null;
    titleSelector?: Selector | null;
    color?: (data: any) => string;
    observe?: boolean;
}
