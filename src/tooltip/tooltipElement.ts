
import {computePosition, ComputePositionConfig, flip, offset, shift} from "@floating-ui/dom";
import {createDiv} from "../util/htmlHelper";

const tooltipWindowId = "stashChecker-tooltipWindow";
const outHandleKey = "outHandle";
const inHandleKey = "inHandle";

export async function initTooltip() {
    let tooltipWindow = createDiv("stashChecker", "tooltip");
    tooltipWindow.style.display = "none";
    tooltipWindow.id = tooltipWindowId;
    tooltipWindow.addEventListener("mouseover", () => {
        let outHandle = maybeParseInt(tooltipWindow.getAttribute(outHandleKey));
        console.info(`maybe clear out handle ${outHandle}`)
        window.clearTimeout(outHandle);
    });
    tooltipWindow.addEventListener("mouseout", () => {
        let outHandle = window.setTimeout(() => hideTooltip(tooltipWindow), 500);
        console.info(`out handle: ${outHandle}`)
        tooltipWindow.setAttribute(outHandleKey, outHandle.toString());
    });
    document.body.append(tooltipWindow);
}

export function symbolMouseoverListener(this: HTMLElement) {
    let tooltipWindow = document.getElementById(tooltipWindowId)!;

    let inHandle = window.setTimeout(() => displayTooltip(this, tooltipWindow), 500);
    console.info(`in handle: ${inHandle}`)
    tooltipWindow.setAttribute(inHandleKey, inHandle.toString());

    let outHandle = maybeParseInt(tooltipWindow.getAttribute(outHandleKey));
    console.info(`maybe clear out handle ${outHandle}`)
    window.clearTimeout(outHandle);
}

export function symbolMouseoutListener() {
    let tooltipWindow = document.getElementById(tooltipWindowId)!;

    let inHandle = maybeParseInt(tooltipWindow.getAttribute(inHandleKey));
    console.info(`maybe clear in handle ${inHandle}`)
    window.clearTimeout(inHandle);

    let outHandle = window.setTimeout(() => hideTooltip(tooltipWindow), 500);
    console.info(`out handle: ${outHandle}`)
    tooltipWindow.setAttribute(outHandleKey, outHandle.toString());
}

function displayTooltip(stashSymbol: HTMLElement, tooltipWindow: HTMLElement) {
    console.info("run in")
    // Display tooltip
    tooltipWindow.innerHTML = stashSymbol.getAttribute("data-info")!;
    tooltipWindow.style.display = "";
    // Floating-UI
    let config: ComputePositionConfig = {
        placement: 'top',
        strategy: 'absolute',
        middleware: [flip(), offset(10), shift({padding: 5})]

    }
    computePosition(stashSymbol, tooltipWindow, config).then(({x, y}) => {
        tooltipWindow.style.left = `${x}px`
        tooltipWindow.style.top = `${y}px`
    });
}

function hideTooltip(tooltipWindow: HTMLElement) {
    console.info("run out")
    tooltipWindow.style.display = "none";
}

function maybeParseInt(string: string | null): number | undefined {
    if (string !== null) {
        return parseInt(string)
    } else {
        return undefined
    }
}
