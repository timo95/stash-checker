
export function initSettingsElement() {
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

export function appendSettingsSection(...nodes: Node[]) {
    let settings = document.getElementById("stashChecker-settings")
    settings.append(...nodes)
}

export function openSettings() {
    let settingsModal = document.getElementById("stashChecker-settingsModal");
    settingsModal.style.display = "initial";
}
