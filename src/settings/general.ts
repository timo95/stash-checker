import {buttonDanger, getSettingsSection, newSettingsSection} from "./settings";
import {Theme} from "../dataTypes";
import {charBox, checkBox, numberBox, selectMenu} from "./elements";
import {booleanOptions, numberOptions, OptionKey, stringOptions} from "./providers";
import {createDiv} from "../util/htmlHelper";

export function initGeneralSettings() {
    let generalSection = newSettingsSection("general", "General")
    generalSection.classList.add("flex-row")
    populateGeneralSection(generalSection)
}

function populateGeneralSection(generalSection: HTMLElement) {
    let symbolSettings = fieldSet("symbol-settings", "Symbol");
    symbolSettings.append(
        checkBox(OptionKey.showCheckMark, "Show check mark", booleanOptions),
        checkBox(OptionKey.showCrossMark, "Show cross mark", booleanOptions),
        charBox(OptionKey.checkMark, "Check mark", stringOptions),
        charBox(OptionKey.warningMark, "Duplicate mark", stringOptions),
        charBox(OptionKey.crossMark, "Cross mark", stringOptions),
    );
    generalSection.appendChild(symbolSettings);

    let tooltipSettings = fieldSet("tooltip-settings", "Tooltip");
    tooltipSettings.append(
        checkBox(OptionKey.showTags, "Show tags", booleanOptions),
        checkBox(OptionKey.showFiles, "Show files", booleanOptions),
        selectMenu(OptionKey.theme, "Theme", [Theme.Light, Theme.Dark, Theme.Device], stringOptions),
    );
    generalSection.appendChild(tooltipSettings);

    let querySettings = fieldSet("query-settings", "Query");
    querySettings.append(
        numberBox(OptionKey.batchSize, "Batch size", numberOptions),
    );
    generalSection.appendChild(querySettings);

    let defaultButton = fieldSet("default-button", "Default Settings");
    let div = createDiv("option");
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
    booleanOptions.clear()
    stringOptions.clear()
    let generalSection = getSettingsSection("general")!
    populateGeneralSection(generalSection)
}
