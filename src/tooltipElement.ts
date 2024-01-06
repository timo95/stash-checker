
export async function initTooltip() {
    let tooltipWindow = document.createElement("div");
    tooltipWindow.style.display = "none";
    tooltipWindow.classList.add("stashChecker", "tooltip");
    tooltipWindow.id = "stashChecker-tooltipWindow";
    tooltipWindow.addEventListener("mouseover", function () {
        let handle = parseInt(this.getAttribute("handle"));
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

export function mouseoverListener() {
    let tooltipWindow = document.getElementById("stashChecker-tooltipWindow");
    let handle = parseInt(tooltipWindow.getAttribute("handle"));
    window.clearTimeout(handle);
    let margin = 10
    let symbolPos = this.getBoundingClientRect();
    tooltipWindow.innerHTML = this.getAttribute("data-info");
    tooltipWindow.style.display = "";
    // show tooltip above or below
    let north = tooltipWindow.clientHeight + margin < symbolPos.top
    if (north) {
        tooltipWindow.style.top = `${(Math.max(margin,  // upper border
            symbolPos.top - tooltipWindow.clientHeight  // wanted position
        )).toFixed(0)}px`;
    } else {
        tooltipWindow.style.top = `${(Math.min(window.innerHeight - tooltipWindow.clientHeight - margin,  // lower border
            symbolPos.top + symbolPos.height + margin  // wanted position
        )).toFixed(0)}px`;
    }
    tooltipWindow.style.left = `${(Math.max(margin, Math.min(window.innerWidth - tooltipWindow.clientWidth - margin,  // left/right borders
        symbolPos.left + symbolPos.width / 2 - tooltipWindow.clientWidth / 2  // wanted position
    ))).toFixed(0)}px`;
}

export function mouseoutListener() {
    let tooltipWindow = document.getElementById("stashChecker-tooltipWindow");
    let handle = window.setTimeout(function () {
        tooltipWindow.style.display = "none";
    }, 500);
    tooltipWindow.setAttribute("handle", handle.toString());
}
