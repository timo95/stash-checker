import {OptionKey} from "./providers";

export function checkBox(key: OptionKey, label: string, valueProvider: Map<OptionKey, boolean>): HTMLElement {
    let div = document.createElement("div")
    div.classList.add("option")

    let inputElement = document.createElement("input")
    inputElement.id = `stashChecker-checkBox-${key}`
    inputElement.name = key
    inputElement.type = "checkbox"
    inputElement.defaultChecked = valueProvider.get(key) ?? false
    inputElement.addEventListener("input", () => valueProvider.set(key, inputElement.checked));

    let labelElement: HTMLLabelElement = document.createElement("label")
    labelElement.htmlFor = inputElement.id
    labelElement.innerHTML = label

    div.appendChild(labelElement)
    div.appendChild(inputElement)
    return div
}

export function charBox(key: OptionKey, label: string, valueProvider: Map<OptionKey, string>): HTMLElement {
    let div = document.createElement("div")
    div.classList.add("option")

    let inputElement = document.createElement("input")
    inputElement.id = `stashChecker-textBox-${key}`
    inputElement.name = key
    inputElement.type = "text"
    inputElement.size = 2
    inputElement.defaultValue = valueProvider.get(key) ?? ""
    inputElement.addEventListener("input", () => valueProvider.set(key, inputElement.value));

    let labelElement: HTMLLabelElement = document.createElement("label")
    labelElement.htmlFor = inputElement.id
    labelElement.innerHTML = label

    div.appendChild(labelElement)
    div.appendChild(inputElement)
    return div
}

export function selectMenu(key: OptionKey, label: string, options: string[], valueProvider: Map<OptionKey, string>): HTMLElement {
    let div = document.createElement("div")
    div.classList.add("option")

    let labelElement: HTMLLabelElement = document.createElement("label")
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
