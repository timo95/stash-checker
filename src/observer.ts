
const observerList: MutationObserver[] = []

/**
 * Run callback when a new element added to the document matches the selector.
 *
 * @param selector css selector string
 * @param callback callback function
 */
export function onAddition(selector: string, callback: (e: Element) => void) {
    let exclude = ".stashChecker, .stashCheckerSymbol"
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
    observerList.push(observer)
}

export function clearObservers() {
    while (observerList.length > 0) observerList.pop()?.disconnect()
}
