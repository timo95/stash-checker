

export interface StashEntry {
    [key: string]: any;
}

export interface StashQuery {
    endpoint: string;
    url: string;
    types: Type[];
    matchQuality: number;
}

// what the query asks for
export enum Target {
    Scene = "scene",
    Performer = "performer",
    Gallery = "gallery",
    Movie = "movie",
    Studio = "studio",
    Tag = "tag",
}

// what the query uses to filter
export enum Type {
    Url = "url",
    Code = "code",
    StashId = "stash_id",
    Name = "name",
    Title = "title",
}
