
declare interface Boolean {
    not(): boolean;
}

declare interface Node {
    firstTextChildDfs(): Node | undefined;
    allTextRecursive(): string[];
    isElement(): boolean;
    isText(): boolean;
}

declare interface Element {
    isHidden(): boolean;
}

declare interface String {
    substringAfter(separator: string): string;
    substringBefore(separator: string): string;
    isBlank(): boolean;
    isEmpty(): boolean;
    hasKana(): boolean;
    hasKanji(): boolean;
}
