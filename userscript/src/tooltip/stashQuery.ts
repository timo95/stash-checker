import {entryLink, typeToString} from "../utils";
import {Target, Type} from "../dataTypes";

export interface StashQuery {
    endpoint: string;
    baseUrl: string;
    types: Type[];
}

/**
 * Queries per entry and endpoint.
 */
export class StashQueryClass implements StashQuery {
    endpoint: string;
    baseUrl: string;
    types: Type[];

    constructor(query: StashQuery) {
        this.endpoint = query.endpoint;
        this.baseUrl = query.baseUrl;
        this.types = query.types;
    }

    addTypes(types: Type[]): void {
        let typeSet = new Set(this.types)
        types.forEach(type => typeSet.add(type));
        this.types = Array.from(typeSet).sort()
    }

    compareTo(query: StashQueryClass): number {
        return this.endpoint.localeCompare(query.endpoint)
    }

    toHtml(target: Target, id: string, numQueries: number): string {
        let typesString = `(Matched: ${this.types.map(type => typeToString.get(type)).join(", ")})`
        return `${this.matchQualityHtml(numQueries)} ${this.endpoint} ${typesString}: ${entryLink(this.baseUrl, target, id)}`
    }

    private matchQualityHtml(numQueries: number): string {
        let matchQuality = this.types.length / numQueries
        let color;
        if (matchQuality == 1) color = "rgb(0,100,0)";
        else if (matchQuality > 0.5) color = "rgb(100,100,0)";
        else color = "rgb(100,50,0)";
        return `<span class="matchQuality" style="background-color: ${color}"></span>`;
    }
}
