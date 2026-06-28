
function asElement(node: Node): Element | null {
    if (node.isElement()) return node as Element
    else return null
}

/**
 * recursive (dfs) first non empty text node child, undefined if none available
 */
Node.prototype.firstTextChildDfs = function (this: Node): Node | undefined {
    if (
        this.isText() && this.textContent?.match(/^[\s<>]*$/) === null  // exclude whitespace, <, >
    ) {
        return this;
    } else {
        return Array.from(this.childNodes)
            .filter(n => !["svg"].includes(n.nodeName.toLowerCase()))  // element tag exceptions
            .filter(n => asElement(n)?.getAttribute("data-type") !== "stash-symbol")  // exclude checkmark
            .filter(n => !asElement(n)?.isHidden())  // exclude hidden elements - include nodes and not visible elements
            .map(n => n.firstTextChildDfs())
            .find(n => n);  // first truthy
    }
}

Node.prototype.allTextRecursive = function (this: Node): string[] {
    return Array.from(this.childNodes)
        .flatMap(n => n.isText() ? [n.textContent] : n.allTextRecursive())
        .filter((s: string | null) => s) as string[];
}

Node.prototype.isElement = function (this: Node): boolean {
    return this.nodeType === Node.ELEMENT_NODE
}

Node.prototype.isText = function (this: Node): boolean {
    return this.nodeType === Node.TEXT_NODE
}

Element.prototype.isHidden = function (this: Element): boolean {
    // this.computedStyleMap()?.getAll("display")?.includes("none")  // not supported yet by firefox (https://bugzilla.mozilla.org/show_bug.cgi?id=1857849)
    return window.getComputedStyle(this).display === "none"
}
