
import {computePosition, ComputePositionConfig, flip, offset} from "@floating-ui/dom";

export async function initTooltip() {
    let tooltipWindow = document.createElement("div");
    tooltipWindow.style.display = "none";
    tooltipWindow.classList.add("stashChecker", "tooltip");
    tooltipWindow.id = "stashChecker-tooltipWindow";
    tooltipWindow.addEventListener("mouseover", function () {
        let handle = parseInt(this.getAttribute("handle")!);
        window.clearTimeout(handle);
    });
    tooltipWindow.addEventListener("mouseout", function () {
        let handle = window.setTimeout(function () {
            tooltipWindow.style.display = "none";
        }, 500);
        this.setAttribute("handle", handle.toString());
    });
    document.body.append(tooltipWindow);
}

export function mouseoverListener(this: HTMLElement) {
    let tooltipWindow = document.getElementById("stashChecker-tooltipWindow")!;
    let handle = parseInt(tooltipWindow.getAttribute("handle")!);
    window.clearTimeout(handle);

    tooltipWindow.innerHTML = this.getAttribute("data-info")!;
    tooltipWindow.style.display = "";

    // Floating-UI
    let config: ComputePositionConfig = {
        placement: 'top',
        strategy: 'absolute',
        middleware: [flip(), offset(10)]
    }
    computePosition(this, tooltipWindow, config).then(({x, y}) => {
        tooltipWindow.style.left = `${x}px`
        tooltipWindow.style.top = `${y}px`
    });
}

export function mouseoutListener() {
    let tooltipWindow = document.getElementById("stashChecker-tooltipWindow")!;
    let handle = window.setTimeout(function () {
        tooltipWindow.style.display = "none";
    }, 500);
    tooltipWindow.setAttribute("handle", handle.toString());
}
