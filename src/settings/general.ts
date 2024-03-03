import {newSettingsSection} from "./settings";
import {getValue, setValue} from "./storage";

export enum OptionKey {
    showCrossMark = "showCrossMark",
    showTags = "showTags",
    showFiles = "showFiles",
    checkMark = "checkMark",
    crossMark = "crossMark",
    dangerMark = "dangerMark",
}

const defaultBooleanOptions = new Map([
    [OptionKey.showCrossMark, true],
    [OptionKey.showTags, true],
    [OptionKey.showFiles, true]
]);

const defaultStringOptions = new Map([
    [OptionKey.checkMark, "✓"],
    [OptionKey.crossMark, "✗"],
    [OptionKey.dangerMark, "!"]
]);

export const booleanOptions: Map<OptionKey, boolean> = await getValue("booleanOptions", defaultBooleanOptions)
export const stringOptions: Map<OptionKey, string> = await getValue("stringOptions", defaultStringOptions)

export async function initGeneralSettings() {
    let generalSection = newSettingsSection("general", "General")

    let checkmarkSettings = document.createElement("fieldset")
    checkmarkSettings.innerHTML = "<legend>Checkmark</legend>"
    checkmarkSettings.append(
        checkBox(OptionKey.showCrossMark, "Show cross mark"),
        charBox(OptionKey.checkMark, "Check mark"),
        charBox(OptionKey.dangerMark, "Danger mark"),
        charBox(OptionKey.crossMark, "Cross mark"),
    );
    generalSection.appendChild(checkmarkSettings);

    let tooltipSettings = document.createElement("fieldset")
    tooltipSettings.innerHTML = "<legend>Tooltip</legend>"
    tooltipSettings.append(
        checkBox(OptionKey.showTags, "Show tags"),
        checkBox(OptionKey.showFiles, "Show files"),
    );
    generalSection.appendChild(tooltipSettings);
}

function checkBox(key: OptionKey, label: string): HTMLElement {
    let div = document.createElement("div")
    div.classList.add("option")

    let inputElement = document.createElement("input")
    inputElement.id = `stashChecker-checkBox-${key}`
    inputElement.name = key
    inputElement.type = "checkbox"
    inputElement.defaultChecked = booleanOptions.get(key) ?? false
    inputElement.addEventListener("input", () => {
        booleanOptions.set(key, inputElement.checked)
        void setValue("booleanOptions", booleanOptions)
    });

    let labelElement: HTMLLabelElement = document.createElement("label")
    labelElement.htmlFor = inputElement.id
    labelElement.innerHTML = label

    div.appendChild(labelElement)
    div.appendChild(inputElement)
    return div
}

function charBox(key: OptionKey, label: string): HTMLElement {
    let div = document.createElement("div")
    div.classList.add("option")

    let inputElement = document.createElement("input")
    inputElement.id = `stashChecker-textBox-${key}`
    inputElement.name = key
    inputElement.type = "text"
    inputElement.size = 4
    inputElement.defaultValue = stringOptions.get(key) ?? ""
    inputElement.addEventListener("input", () => {
        stringOptions.set(key, inputElement.value)
        void setValue("stringOptions", stringOptions)
    });

    let labelElement: HTMLLabelElement = document.createElement("label")
    labelElement.htmlFor = inputElement.id
    labelElement.innerHTML = label

    div.appendChild(labelElement)
    div.appendChild(inputElement)
    return div
}
