import {buttonDanger, getSettingsSection, newSettingsSection} from "./settings";
import {getValue, setValue, StorageKey} from "./storage";
import {getAllThemes, Theme} from "../dataTypes";
import {rangeStr} from "../utils";

export enum OptionKey {
    showCheckMark = "showCheckMark",
    showCrossMark = "showCrossMark",
    showTags = "showTags",
    showFiles = "showFiles",
    checkMark = "checkMark",
    crossMark = "crossMark",
    warningMark = "warningMark",
    theme = "theme",
    opacityScenes = "opacityScenes",
    opacityCheckMark = "opacityCheckMark",
    opacityCrossMark = "opacityCrossMark",
}

const defaultBooleanOptions = new Map([
    [OptionKey.showCheckMark, true],
    [OptionKey.showCrossMark, true],
    [OptionKey.showTags, true],
    [OptionKey.showFiles, true],
    [OptionKey.opacityScenes, false]
]);

const defaultStringOptions = new Map([
    [OptionKey.checkMark, "✓"],
    [OptionKey.crossMark, "✗"],
    [OptionKey.warningMark, "!"],
    [OptionKey.theme, Theme.Device],
    [OptionKey.opacityCheckMark, "100"],
    [OptionKey.opacityCrossMark, "100"],
]);

export const booleanOptions: Map<OptionKey, boolean> = await getValue(StorageKey.BooleanOptions, defaultBooleanOptions)
export const stringOptions: Map<OptionKey, string> = await getValue(StorageKey.StringOptions, defaultStringOptions)

export function initGeneralSettings() {
    let description = "Scene cover opacity can change the visual effect of the scene covers. You can darken both the found and the missing elements. " +
        "If the value is 100%, no changes are made."
    let generalSection = newSettingsSection("general", "General", description);
    populateGeneralSection(generalSection)
}

function populateGeneralSection(generalSection: HTMLElement) {
    let symbolSettings = fieldSet("symbol-settings", "Symbol");
    symbolSettings.append(
        checkBox(OptionKey.showCheckMark, "Show check mark"),
        checkBox(OptionKey.showCrossMark, "Show cross mark"),
        charBox(OptionKey.checkMark, "Check mark"),
        charBox(OptionKey.warningMark, "Duplicate mark"),
        charBox(OptionKey.crossMark, "Cross mark"),
    );
    generalSection.appendChild(symbolSettings);

    let tooltipSettings = fieldSet("tooltip-settings", "Tooltip");
    tooltipSettings.append(
        checkBox(OptionKey.showTags, "Show tags"),
        checkBox(OptionKey.showFiles, "Show files"),
        selectMenu(OptionKey.theme, "Theme", getAllThemes()),
    );
    generalSection.appendChild(tooltipSettings);

    let sceneSettings = fieldSet("scene-settings", "Scene");
    sceneSettings.append(
        checkBox(OptionKey.opacityScenes, "Modify cover opacity"),
        selectMenu(OptionKey.opacityCheckMark, "Check mark", rangeStr(0, 100, 10), '%'),
        selectMenu(OptionKey.opacityCrossMark, "Cross mark", rangeStr(0, 100, 10), '%'),
    );
    generalSection.appendChild(sceneSettings);

    let defaultButton = fieldSet("default-button", "Default Settings");
    let div = document.createElement("div")
    div.classList.add("option")
    div.appendChild(buttonDanger("Reset", resetToDefault))
    defaultButton.append(div);
    generalSection.appendChild(defaultButton);
}

function fieldSet(id: string, label: string) {
    let fieldSet = document.getElementById(`stashChecker-fieldset-${id}`) ?? document.createElement("fieldset")
    fieldSet.id = `stashChecker-fieldset-${id}`
    fieldSet.innerHTML = `<legend>${label}</legend>`;
    return fieldSet
}

function resetToDefault() {
    defaultBooleanOptions.forEach((value, key) => booleanOptions.set(key, value));
    void setValue(StorageKey.BooleanOptions, booleanOptions)
    defaultStringOptions.forEach((value, key) => stringOptions.set(key, value));
    void setValue(StorageKey.StringOptions, stringOptions)
    let generalSection = getSettingsSection("general")!
    populateGeneralSection(generalSection)
}

function checkBox(key: OptionKey, label: string): HTMLElement {
    let div = document.createElement("div")
    div.classList.add("option")

    let inputElement = document.createElement("input")
    inputElement.id = `stashChecker-checkBox-${key}`
    inputElement.name = key
    inputElement.type = "checkbox"
    inputElement.defaultChecked = booleanOptions.get(key) ?? defaultBooleanOptions.get(key) ?? false
    inputElement.addEventListener("input", () => {
        booleanOptions.set(key, inputElement.checked)
        void setValue(StorageKey.BooleanOptions, booleanOptions)
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
    inputElement.size = 2
    inputElement.defaultValue = stringOptions.get(key) ?? defaultStringOptions.get(key) ?? ""
    inputElement.addEventListener("input", () => {
        stringOptions.set(key, inputElement.value)
        void setValue(StorageKey.StringOptions, stringOptions)
    });

    let labelElement: HTMLLabelElement = document.createElement("label")
    labelElement.htmlFor = inputElement.id
    labelElement.innerHTML = label

    div.appendChild(labelElement)
    div.appendChild(inputElement)
    return div
}

function selectMenu(key: OptionKey, label: string, options: string[], unit?: string): HTMLElement {
    let div = document.createElement("div")
    div.classList.add("option")

    let labelElement: HTMLLabelElement = document.createElement("label")
    labelElement.htmlFor = `stashChecker-dropdown-${key}`
    labelElement.innerHTML = label

    let selectElement = document.createElement("select")
    selectElement.id = `stashChecker-dropdown-${key}`
    selectElement.name = key

    // Set the currently selected option based on saved values
    let currentSelection = stringOptions.get(key) ?? defaultStringOptions.get(key) ?? options[0]
    options.forEach(option => {
        let optionElement = document.createElement("option")
        optionElement.value = option
        optionElement.innerHTML = option.concat(unit ?? '');
        if (option === currentSelection) {
            optionElement.selected = true
        }
        selectElement.appendChild(optionElement)
    })

    selectElement.addEventListener("change", () => {
        stringOptions.set(key, selectElement.value)
        void setValue(StorageKey.StringOptions, stringOptions)
    });

    div.appendChild(labelElement)
    div.appendChild(selectElement)
    return div
}