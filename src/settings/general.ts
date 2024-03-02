import {newSettingsSection} from "./settings";
import {getValue, setValue} from "./storage";

export enum OptionKey {
    showCrossMark = "showCrossMark",
    showTags = "showTags",
    showFiles = "showFiles",
}

const defaultOptions = new Map([
    [OptionKey.showCrossMark, true],
    [OptionKey.showTags, true],
    [OptionKey.showFiles, true]
]);

export const booleanOptions: Map<OptionKey, boolean> = await getValue("booleanOptions", defaultOptions)

export async function initGeneralSettings() {
    let generalSection = newSettingsSection("general", "General")

    let checkmarkSettings = document.createElement("fieldset")
    checkmarkSettings.innerHTML = "<legend>Checkmark</legend>"
    checkmarkSettings.append(
        checkBox(OptionKey.showCrossMark, "Show cross mark")
    );
    generalSection.appendChild(checkmarkSettings);

    let tooltipSettings = document.createElement("fieldset")
    tooltipSettings.innerHTML = "<legend>Tooltip</legend>"
    tooltipSettings.append(
        checkBox(OptionKey.showTags, "Show tags"),
        checkBox(OptionKey.showFiles, "Show files")
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
    inputElement.checked = booleanOptions.get(key) ?? false
    inputElement.addEventListener("click", () => {
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
