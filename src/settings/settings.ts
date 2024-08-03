import {clearObservers} from "../observer";
import {clearSymbols} from "../tooltip/tooltip";
import {runStashChecker} from "../stashChecker";
import {updateStatistics} from "./statistics";
import {setTheme} from "../style/theme";

export function initSettingsWindow() {
    let settingsModal = document.createElement("div");
    settingsModal.id = "stashChecker-settingsModal";
    settingsModal.style.display = "none";
    settingsModal.classList.add("stashChecker", "modal");
    settingsModal.addEventListener("click", closeSettingsWindow);

    let settings = document.createElement("div");
    settings.id = "stashChecker-settings"
    settings.classList.add("stashChecker", "settings");
    settingsModal.append(settings);
    document.body.append(settingsModal);
}

export function newSettingsSection(id: string, title: string, description?: string): HTMLDivElement {
    let section = document.createElement("div");
    section.id = `stashChecker-settingsSection-${id}`
    section.classList.add("stashChecker", "settingsSection");
    getSettings().append(section)

    let heading = document.createElement("h2")
    heading.classList.add("stashChecker", "heading");
    heading.innerHTML = title;
    section.append(heading);

    if (description) {
        let text = document.createElement("p");
        text.classList.add("stashChecker", "sub-heading");
        text.innerHTML = description;
        section.append(text);
    }

    let body = document.createElement("div");
    body.id = `stashChecker-settingsSectionBody-${id}`
    body.classList.add("stashChecker", "settingsSectionBody");
    section.append(body)

    return body
}

function getSettings(): HTMLElement {
    return document.getElementById("stashChecker-settings")!;
}

export function getSettingsSection(id: string): HTMLElement | null {
    return document.getElementById(`stashChecker-settingsSectionBody-${id}`);
}

export function openSettingsWindow() {
    let settingsModal = document.getElementById("stashChecker-settingsModal");
    if (settingsModal?.style?.display) {
        updateStatistics()
        settingsModal.style.display = "initial";
    }
}

function closeSettingsWindow(this: HTMLElement, event: MouseEvent) {
    if (event.target === this) {
        this.style.display = "none";
        clearObservers()
        clearSymbols()
        setTheme()
        void runStashChecker()
    }
}

export function buttonPrimary(label: string, listener: (this: HTMLButtonElement, ev: MouseEvent) => any): HTMLElement {
    let button = document.createElement("button");
    button.classList.add("stashChecker", "btn", "btn-primary");
    button.addEventListener("click", listener);
    button.innerHTML = label;
    return button
}

export function buttonDanger(label: string, listener: (this: HTMLButtonElement, ev: MouseEvent) => any): HTMLElement {
    let button = document.createElement("button");
    button.classList.add("stashChecker", "btn", "btn-danger");
    button.addEventListener("click", listener);
    button.innerHTML = label;
    return button
}