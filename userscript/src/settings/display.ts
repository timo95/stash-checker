import {buttonDanger, buttonPrimary, newSettingsSection} from "./settings";
import {CustomDisplayRule, Target} from "../dataTypes";
import {getValue, setValue, StorageKey} from "./storage";
import Sortable from 'sortablejs';
import {moveIndex} from "../utils";
import {OptionKey, stringOptions} from "./providers";
import {
    createTableCell,
    createDiv,
    createTable,
    createTableBody,
    createTableHead,
    createTableRow,
    createSpan, createBreak
} from "../util/htmlHelper";

// TODO: isActive indicator

export const customDisplayRules: CustomDisplayRule[] = await getValue<CustomDisplayRule[]>(StorageKey.CustomDisplayRules, []);

export function initDisplaySettings() {
    let description = "Custom display rules can change the display of check marks. " +
        "A rule applies when the URL pattern matches the current website and the GraphQL filter matches the element. " +
        "Rules higher in the list have higher priority. " +
        "The order can be changed by dragging. " +
        "If no rule applies, the default display options are used. " +
        "GraphQL filters may not contain AND/OR/NOT. " +
        "Multiple filters can still be concatenated by ','. " +
        "Leave the filter empty to always apply."
    let displaySection = newSettingsSection("display", "Custom Display Rules", description);
    displaySection.classList.add("flex-column");
    populateDisplaySection(displaySection);
}

// TODO: use tabs for targets?
// TODO: separate modal/tab for display settings
function populateDisplaySection(displaySection: HTMLElement) {
    let table = createTable();
    let tableHead = createTableHead();
    tableHead.append(tableHeadRow());
    table.append(tableHead);

    let tableBody = createTableBody();
    tableBody.id = "stashChecker-displayRules"
    table.append(tableBody);
    displaySection.append(table);
    displaySection.append(createBreak());
    displaySection.append(buttonPrimary("Add Rule", addRuleListener, ["align-end"]));
    Sortable.create(tableBody, {
        onEnd: event => {
            if (event.oldIndex && event.newIndex) {
                // Change data and update representation (data-index attributes)
                moveIndex(customDisplayRules, event.oldIndex, event.newIndex);
                populateCustomRulesTable(document.querySelector("#stashChecker-displayRules")!);
            }
        }
    });
    populateCustomRulesTable(tableBody);
}

function populateCustomRulesTable(tableBody: HTMLTableSectionElement) {
    let tableRows = Array.from(customDisplayRules)
        .map(tableRow);
    tableBody.replaceChildren(...tableRows);
}

function tableHeadRow(): HTMLTableRowElement {
    let row = createTableRow();
    let values = ["Type", "URL Pattern", "GraphQL Filter", "Color", "Preview", ""]
    row.innerHTML = values.map(value => `<th>${value}</th>`).join("");
    return row;
}

function tableRow(customRule: CustomDisplayRule, index: number): HTMLTableRowElement {
    let row = createTableRow();
    let preview = createSpan("stashCheckerSymbol", "stashCheckerPreview");
    preview.innerHTML = stringOptions.get(OptionKey.checkMark)!;
    preview.style.color = customRule.display.color;

    let previewCell = createTableCell("center");
    previewCell.append(preview)

    let buttonCell = createTableCell()
    let buttonCellInner = createDiv("buttonCell");
    buttonCellInner.append(editButton(index), deleteButton(index))
    buttonCell.append(buttonCellInner)

    row.append(
        htmlCell(customRule.target),
        htmlCell(customRule.pattern),
        htmlCell(customRule.filter),
        htmlCell(customRule.display.color),
        previewCell,
        buttonCell
    );
    return row;
}

function htmlCell(innerHtml: string): HTMLTableCellElement {
    let htmlCell = createTableCell();
    htmlCell.innerHTML = innerHtml
    return htmlCell;
}

function editButton(index: number): HTMLButtonElement {
    let button = buttonPrimary("Edit", editRuleListener)
    button.setAttribute("data-index", index.toString())
    return button;
}

function deleteButton(index: number): HTMLButtonElement {
    let button = buttonDanger("Delete", deleteRuleListener)
    button.setAttribute("data-index", index.toString())
    return button;
}

async function addRuleListener() {
    let newRule = {
        target: Target.Scene,
        pattern: "*://stashdb.org/*",
        filter: "organized:true",
        display: { color: "blue" }
    };

    customDisplayRules.push(newRule)
    populateCustomRulesTable(document.querySelector("#stashChecker-displayRules")!);
}

async function deleteRuleListener(this: HTMLButtonElement) {
    let index = parseInt(this.getAttribute("data-index")!);
    customDisplayRules.splice(index, 1);
    void setValue(StorageKey.CustomDisplayRules, customDisplayRules);
    populateCustomRulesTable(document.querySelector("#stashChecker-displayRules")!);
}

async function editRuleListener(this: HTMLButtonElement) {
    let index = parseInt(this.getAttribute("data-index")!);
    console.debug(`Editing rule ${index}`)
    let oldRule: CustomDisplayRule = customDisplayRules[index];

    let target = prompt(`Target (${Object.values(Target).join(", ")}):`, oldRule.target)?.trim() ?? oldRule.target
    let pattern = prompt("URL Pattern:", oldRule.pattern)?.trim() ?? oldRule.pattern
    let filter = prompt("GraphQL Filter:", oldRule.filter)?.trim() ?? oldRule.filter
    let color = prompt("Color (css):", oldRule.display.color)?.trim() ?? oldRule.display.color

    customDisplayRules[index] = {
        target: target as Target,
        pattern: pattern,
        filter: filter,
        display: { color: color }
    };
    void setValue(StorageKey.CustomDisplayRules, customDisplayRules);
    populateCustomRulesTable(document.querySelector("#stashChecker-displayRules")!);
}
