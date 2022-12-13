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
function firstTextChild(node: Element): Element {
    if (
        node.nodeType === document.TEXT_NODE &&
        node.textContent.match(/^\s*$/) === null
    ) {
        return node;
    } else {
        return Array.from(node.childNodes)
            .map(firstTextChild)
            .find((n) => n);
    }
}

/**
 * Prepends depending on the data the checkmark or cross to the selected element.
 * Also populates popup window.
 *
 * @param element
 * @param data
 * @param color
 */
export function prefixSymbol(
    element: Element,
    data: any,
    color: (data: any) => string
) {
    let span = document.createElement("span");
    let count = data.length;
    let info = "";
    if (count === 1) {
        span.innerText = "✓ ";
        info += "URL in Stash:\n\n";
        span.style.color = color(data[0]);
    } else if (count === 0) {
        span.innerText = "✗ ";
        span.style.color = "red";
        info += "URL not in Stash";
    } else {
        span.innerText = "! ";
        span.style.color = "orange";
        console.log(data);
        info += "URL has multiple matches:\n\n";
    }

    info += data
        .map((e: any) =>
            [
                [e.title, `Title: ${e.title}`],
                [e.code, `Code: ${e.code}`],
                [
                    e.files,
                    `Files:\n${e.files.map((f: any) => `Path: ${f.path}`).join("\n")}`,
                ],
                [e.name, `Name: ${e.name}`],
            ]
                .filter((e) => e[0])
                .map((e) => e[1])
                .join("\n")
        )
        .join("\n\n");

    span.addEventListener("mouseover", function () {
        window.clearTimeout(handle);
        let pos = span.getBoundingClientRect();
        popup.innerText = info;
        popup.style.display = "";
        popup.style.top = `${(
            pos.top -
            popup.clientHeight +
            window.scrollY
        ).toFixed(0)}px`;
        popup.style.left = `${(
            pos.left +
            pos.width / 2 -
            popup.clientWidth / 2 +
            window.scrollX
        ).toFixed(0)}px`;
    });
    span.addEventListener("mouseout", function () {
        handle = window.setTimeout(function () {
            popup.style.display = "none";
        }, 500);
    });

    // prepend before first text because css selectors cannot select text nodes directly
    // it works with cases were non text elements (images) are inside of the selected element
    firstTextChild(element)?.before(span);
}
