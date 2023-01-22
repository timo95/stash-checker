let handle: number;
let popup: HTMLDivElement = document.createElement("div");
popup.style.display = "none";
popup.classList.add("stashCheckerPopup");
popup.addEventListener("mouseover", function () {
    window.clearTimeout(handle);
});
popup.addEventListener("mouseout", function () {
    handle = window.setTimeout(function () {
        popup.style.display = "none";
    }, 500);
});
document.body.append(popup);

/**
 * recursive (dfs) first non empty text node child, undefined if none available
 */
function firstTextChild(node: Node): Node {
    if (
        node.nodeType === Node.TEXT_NODE &&
        node.textContent.match(/^\s*$/) === null
    ) {
        return node;
    } else {
        return Array.from(node.childNodes)
            .filter(n => n.nodeType === Node.ELEMENT_NODE ? (n as Element).getAttribute("data-type") !== "stash-symbol" : true)
            .map(firstTextChild)
            .find((n) => n);
    }
}

function getPopupBody(data: any[]): string {
    let propertyStrings: [string, (v: any) => string][] = [
        ["title", (v: any) => `Title: ${v}`],
        ["name", (v: any) => `Name: ${v}`],
        ["code", (v: any) => `Code: ${v}`],
        ["files", (v: any) => `${v.map((file: any) => `Path: ${file.path}`).join("<br>")}`],
    ];
    return ["", ...data.map((entry: any) => propertyStrings
        .filter((e) => entry[e[0]])
        .map((e) => e[1](entry[e[0]]))
        .join("<br>")
    )].join("<br><hr>");
}

function getExistingSpan(element: Element): HTMLSpanElement | null {
    let e = firstTextChild(element)?.previousSibling
    if (e && e.nodeType === Node.ELEMENT_NODE && (e as Element).getAttribute("data-type") === "stash-symbol") {
        return (e as HTMLSpanElement)
    } else {
        return null
    }
}

function mouseoverListener() {
    window.clearTimeout(handle);
    let pos = this.getBoundingClientRect();
    popup.innerHTML = this.getAttribute("data-info");
    popup.style.display = "";
    // TODO flip popup to other side (up/down), if not enough space
    // TODO (top-)margin is ignored for min/max positions -> doesn't matter if ^ is implemented
    popup.style.top = `${(Math.max(window.scrollY + 10, Math.min(window.innerHeight + window.scrollY - popup.clientHeight - 10,
        pos.top -
        popup.clientHeight +
        window.scrollY
    ))).toFixed(0)}px`;
    popup.style.left = `${(Math.max(window.scrollX + 10, Math.min(window.innerWidth + window.scrollX - popup.clientWidth - 10,
        pos.left +
        pos.width / 2 -
        popup.clientWidth / 2 +
        window.scrollX
    ))).toFixed(0)}px`;
}

function mouseoutListener() {
    handle = window.setTimeout(function () {
        popup.style.display = "none";
    }, 500);
}

/**
 * Similar to object.assign(), but also merges the children of the objects.
 *
 * @param target
 * @param source
 */
function mergeData(target: any[], source: any[]): any[] {
    let mapTarget: Map<string, any> = new Map(target.map(e => [e.id, e]))
    let mapSource: Map<string, any> = new Map(source.map(e => [e.id, e]))
    mapSource.forEach((value, key) => {
        mapTarget.set(key, value)
    });
    return Array.from(mapTarget.values());
}


/**
 * Prepends depending on the data the checkmark or cross to the selected element.
 * Also populates popup window.
 *
 * @param element
 * @param data
 * @param query
 * @param color
 */
export function prefixSymbol(
    element: Element,
    data: any,
    query: string,
    color: (data: any[]) => string
) {
    let span = getExistingSpan(element)
    let queries = [query]
    if (span) {
        queries = JSON.parse(span.getAttribute("data-queries")).concat(queries).sort()
        data = mergeData(JSON.parse(span.getAttribute("data-data")), data)
    } else {
        span = document.createElement("span");
        span.setAttribute("data-type", "stash-symbol")
        span.addEventListener("mouseover", mouseoverListener);
        span.addEventListener("mouseout", mouseoutListener);
    }
    span.setAttribute("data-queries", JSON.stringify(queries))
    span.setAttribute("data-data", JSON.stringify(data))
    let count = data.length;
    let info = "";
    if (count === 0) {
        span.textContent = "✗ ";
        span.style.color = "red";
        info += "Entry not in Stash";
    } else if (count === 1) {
        span.textContent = "✓ ";
        span.style.color = color(data[0]);
        info += "Entry in Stash";
    } else {
        span.textContent = "! ";
        span.style.color = "orange";
        info += "Entry has duplicate matches";
    }

    info += `<br>Queries: ${queries.join(", ")}`
    info += getPopupBody(data)
    span.setAttribute("data-info", info)


    // insert before first text because css selectors cannot select text nodes directly
    // it works with cases were non text elements (images) are inside of the selected element
    let text = firstTextChild(element)
    text.parentNode.insertBefore(span, text);
}