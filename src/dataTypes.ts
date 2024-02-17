
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
export interface StashEntry {
    [key: string]: any;
}

/**
 * An aggregation of queries for the same entry.
 */
export interface StashQuery {
    endpoint: string;
    url: string;
    types: Type[];
    matchQuality: number;
}

/**
 * A batch collector of requests.
 */
export interface BatchQuery {
    timerHandle: number,
    requests: Request[],
}

/**
 * A graphql query and result handlers.
 */
export interface Request {
    query: string,
    onload?: (data: any) => void,
    onerror?: (message?: string) => void
}

/**
 * Entry types in Stash
 */
export enum Target {
    Scene = "scene",
    Performer = "performer",
    Gallery = "gallery",
    Movie = "movie",
    Studio = "studio",
    Tag = "tag",
}

/**
 * Ways to query for an entry
 */
export enum Type {
    Url = "url",
    Code = "code",
    StashId = "stash_id",
    Name = "name",
    Title = "title",
}

/**
 * A function to select a [Type] query parameter from a given element.
 */
export type Selector = (e: Element) => string;

/**
 * Configure queries for an entry.
 */
export interface CheckOptions {
    urlSelector?: Selector;
    prepareUrl?: (url: string) => string;
    codeSelector?: Selector;
    stashIdSelector?: Selector;
    stashIdEndpoint?: string;
    nameSelector?: Selector;
    titleSelector?: Selector;
    color?: (data: any) => string;
    observe?: boolean;
}
