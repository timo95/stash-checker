import {clearObservers} from "../observer";
import {clearSymbols} from "../tooltip/tooltip";
import {runStashChecker} from "../stashChecker";
import {updateStatistics} from "./statistics";
import {setTheme} from "../style/theme";
import {createButton, createDiv, createParagraph, createHeading} from "../util/htmlHelper";

export function initSettingsWindow() {
    let settingsModal = createDiv("stashChecker", "modal");
    settingsModal.id = "stashChecker-settingsModal";
    settingsModal.style.display = "none";
    settingsModal.addEventListener("click", closeSettingsWindow);

    let settings = createDiv("stashChecker", "settings");
    settings.id = "stashChecker-settings"
    settingsModal.append(settings);
    document.body.append(settingsModal);
}

export function newSettingsSection(id: string, title: string, description?: string): HTMLDivElement {
    let section = createDiv("stashChecker", "settingsSection");
    section.id = `stashChecker-settingsSection-${id}`
    getSettings().append(section)

    let heading = createHeading(2, "stashChecker", "heading")
    heading.innerHTML = title;
    section.append(heading);

    if (description) {
        let text = createParagraph("stashChecker", "sub-heading");
        text.innerHTML = description;
        section.append(text);
    }

    let body = createDiv("stashChecker", "settingsSectionBody");
    body.id = `stashChecker-settingsSectionBody-${id}`
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

export function buttonPrimary(label: string, listener: (this: HTMLButtonElement, ev: MouseEvent) => any, classes: string[] = []): HTMLButtonElement {
    let button = createButton("stashChecker", "btn", "btn-primary", ...classes);
    button.addEventListener("click", listener);
    button.innerHTML = label;
    return button
}

export function buttonDanger(label: string, listener: (this: HTMLButtonElement, ev: MouseEvent) => any, classes: string[] = []): HTMLButtonElement {
    let button = createButton("stashChecker", "btn", "btn-danger", ...classes);
    button.addEventListener("click", listener);
    button.innerHTML = label;
    return button
}
