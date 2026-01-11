import {readablePlural, StashSymbol, Target} from "../dataTypes";
import {getSettingsSection, newSettingsSection} from "./settings";
import {createSpan} from "../util/htmlHelper";


export function initStatistics() {
    newSettingsSection("statistics", "Statistics");
}

export function updateStatistics() {
    let statisticsSection = getSettingsSection("statistics")!;
    let targets = [Target.Scene, Target.Group, Target.Gallery, Target.Performer, Target.Studio, Target.Tag]
    let string = targets.flatMap(target => {
        let s = statistics(target)
        return s ? [s] : []
    }).join("<br>")
    let span = createSpan();
    span.innerHTML = string
    statisticsSection.replaceChildren(span);
}

function statistics(target: Target): string | null {
    let count = symbolCount(target)
    let string = `Matched ${symbolCount(target, [StashSymbol.Check, StashSymbol.Warning])} out of ${count} ${readablePlural(target)}`
    return (count > 0) ? string : null
}

function symbolCount(target: Target | undefined = undefined, symbol: StashSymbol[] | undefined = undefined): number {
    let symbols = Array.from(document.querySelectorAll(":not(.stashCheckerPreview).stashCheckerSymbol"))
    if (target) {
        symbols = symbols.filter(element => element.getAttribute("data-target") == target);
    }
    if (symbol) {
        symbols = symbols.filter(element => symbol.map(s => s.toString()).includes(element.getAttribute("data-symbol")!));
    }
    return symbols.length
}
