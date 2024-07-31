import {OptionKey, stringOptions} from "../settings/general";
import {Theme} from "../dataTypes";

export function setTheme() {

    const osSetting = window.matchMedia("(prefers-color-scheme: dark)");

    function toggleDarkMode(state: boolean | undefined) {
        document.documentElement.classList.toggle("dark-mode", state);
    }

    switch (stringOptions.get(OptionKey.theme)) {
        case Theme.Light:
            toggleDarkMode(false)
            break;
        case Theme.Dark:
            toggleDarkMode(true)
            break;
        case Theme.Device:
        default:
            toggleDarkMode(osSetting.matches);
            break;
    }
}

window.addEventListener("DOMContentLoaded", setTheme);