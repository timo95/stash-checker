import {OptionKey} from "./providers";
import {createDiv, createInput, createLabel} from "../htmlHelper";

export function checkBox(key: OptionKey, label: string, valueProvider: Map<OptionKey, boolean>): HTMLElement {
    let div = createDiv("option")

    let inputElement = createInput();
    inputElement.id = `stashChecker-checkBox-${key}`
    inputElement.name = key
    inputElement.type = "checkbox"
    inputElement.defaultChecked = valueProvider.get(key) ?? false
    inputElement.addEventListener("input", () => valueProvider.set(key, inputElement.checked));

    let labelElement: HTMLLabelElement = createLabel();
    labelElement.htmlFor = inputElement.id
    labelElement.innerHTML = label

    div.appendChild(labelElement)
    div.appendChild(inputElement)
    return div
}

export function charBox(key: OptionKey, label: string, valueProvider: Map<OptionKey, string>): HTMLElement {
    let div = createDiv("option");

    let inputElement = createInput();
    inputElement.id = `stashChecker-textBox-${key}`
    inputElement.name = key
    inputElement.type = "text"
    inputElement.size = 2
    inputElement.defaultValue = valueProvider.get(key) ?? ""
    inputElement.addEventListener("input", () => valueProvider.set(key, inputElement.value));

    let labelElement: HTMLLabelElement = createLabel();
    labelElement.htmlFor = inputElement.id
    labelElement.innerHTML = label

    div.appendChild(labelElement)
    div.appendChild(inputElement)
    return div
}

export function numberBox(key: OptionKey, label: string, valueProvider: Map<OptionKey, number>): HTMLElement {
    let div = createDiv("option");

    let inputElement = createInput();
    inputElement.id = `stashChecker-numberBox-${key}`
    inputElement.name = key
    inputElement.type = "number"
    inputElement.size = 3
    inputElement.defaultValue = valueProvider.get(key)?.toString() ?? "0"
    inputElement.addEventListener("input", () => valueProvider.set(key, parseInt(inputElement.value)));

    let labelElement: HTMLLabelElement = createLabel();
    labelElement.htmlFor = inputElement.id
    labelElement.innerHTML = label

    div.appendChild(labelElement)
    div.appendChild(inputElement)
    return div
}

export function selectMenu(key: OptionKey, label: string, options: string[], valueProvider: Map<OptionKey, string>): HTMLElement {
    let div = createDiv("option");

    let labelElement: HTMLLabelElement = createLabel();
    labelElement.htmlFor = `stashChecker-dropdown-${key}`
    labelElement.innerHTML = label

    let selectElement = document.createElement("select")
    selectElement.id = `stashChecker-dropdown-${key}`
    selectElement.name = key

    // Set the currently selected option based on saved values
    let currentSelection = valueProvider.get(key) ?? options[0]
    options.forEach(option => {
        let optionElement = document.createElement("option")
        optionElement.value = option
        optionElement.innerHTML = option
        if (option === currentSelection) {
            optionElement.selected = true
        }
        selectElement.appendChild(optionElement)
    })

    selectElement.addEventListener("change", () => valueProvider.set(key, selectElement.value));

    div.appendChild(labelElement)
    div.appendChild(selectElement)
    return div
}
