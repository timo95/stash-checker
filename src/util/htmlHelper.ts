
export function createBreak(...classes: string[]): HTMLBRElement {
    let element = document.createElement("br");
    if (classes.length !== 0) {
        element.classList.add(...classes)
    }
    return element;
}

export function createButton(...classes: string[]): HTMLButtonElement {
    let element = document.createElement("button");
    if (classes.length !== 0) {
        element.classList.add(...classes)
    }
    return element;
}

export function createDiv(...classes: string[]): HTMLDivElement {
    let element = document.createElement("div");
    if (classes.length !== 0) {
        element.classList.add(...classes)
    }
    return element;
}

export function createInput(...classes: string[]): HTMLInputElement {
    let element = document.createElement("input");
    if (classes.length !== 0) {
        element.classList.add(...classes)
    }
    return element;
}

export function createLabel(...classes: string[]): HTMLLabelElement {
    let element = document.createElement("label");
    if (classes.length !== 0) {
        element.classList.add(...classes)
    }
    return element;
}

export function createParagraph(...classes: string[]): HTMLParagraphElement {
    let element = document.createElement("p");
    if (classes.length !== 0) {
        element.classList.add(...classes)
    }
    return element;
}

export function createSpan(...classes: string[]): HTMLSpanElement {
    let element = document.createElement("span");
    if (classes.length !== 0) {
        element.classList.add(...classes)
    }
    return element;
}

export function createHeading(size: number, ...classes: string[]): HTMLHeadingElement {
    let element: HTMLHeadingElement
    switch (size) {
        case 1:
            element = document.createElement("h1");
            break;
        case 2:
            element = document.createElement("h2");
            break;
        case 3:
            element = document.createElement("h3");
            break;
        case 4:
            element = document.createElement("h4");
            break;
        case 5:
            element = document.createElement("h5");
            break;
        case 6:
            element = document.createElement("h6");
            break;
        default:
            throw Error("Size not a valid header size")
    }

    if (classes.length !== 0) {
        element.classList.add(...classes)
    }
    return element;
}

// ##### Table #####

export function createTable(...classes: string[]): HTMLTableElement {
    let element = document.createElement("table");
    if (classes.length !== 0) {
        element.classList.add(...classes)
    }
    return element;
}

export function createTableBody(...classes: string[]): HTMLTableSectionElement {
    let element = document.createElement("tbody");
    if (classes.length !== 0) {
        element.classList.add(...classes)
    }
    return element;
}

export function createTableCell(...classes: string[]): HTMLTableCellElement {
    let element = document.createElement("td");
    if (classes.length !== 0) {
        element.classList.add(...classes)
    }
    return element;
}

export function createTableHead(...classes: string[]): HTMLTableSectionElement {
    let element = document.createElement("thead");
    if (classes.length !== 0) {
        element.classList.add(...classes)
    }
    return element;
}

export function createTableRow(...classes: string[]): HTMLTableRowElement {
    let element = document.createElement("tr");
    if (classes.length !== 0) {
        element.classList.add(...classes)
    }
    return element;
}

// ##########
