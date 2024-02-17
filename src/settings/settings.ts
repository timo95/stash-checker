
export function initSettingsWindow() {
    let settingsModal = document.createElement("div");
    settingsModal.id = "stashChecker-settingsModal";
    settingsModal.style.display = "none";
    settingsModal.classList.add("stashChecker", "modal");
    settingsModal.addEventListener("click", (event) => {
        if (event.target === settingsModal) {
            settingsModal.style.display = "none";
        }
    });

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
    heading.innerHTML = title;
    section.append(heading);

    if (description) {
        let text = document.createElement("p");
        text.classList.add("stashChecker", "sub-heading");
        text.innerHTML = description;
        section.append(text);
    }

    return section
}

function getSettings(): HTMLElement {
    return document.getElementById("stashChecker-settings");
}

export function getSettingsSection(id: string): HTMLElement {
    return document.getElementById(`stashChecker-settingsSection-${id}`);
}

export function openSettingsWindow() {
    let settingsModal = document.getElementById("stashChecker-settingsModal");
    settingsModal.style.display = "initial";
}
