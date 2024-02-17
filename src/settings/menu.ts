import {openSettings} from "./settingsElement";
import {deleteValue, getValue, setValue} from "./storage";

const BLOCKED_SITE_KEY = `blocked_${window.location.host}`.replace(/[.\-]/, "_");

export async function initMenu() {
    GM.registerMenuCommand("Settings", openSettings, "s");

    if (await isSiteBlocked()) {
        GM.registerMenuCommand(`Activate for ${window.location.host}`, unblockSite, "a");
    } else {
        GM.registerMenuCommand(`Deactivate for ${window.location.host}`, blockSite, "d");
    }
}

export async function isSiteBlocked(): Promise<boolean> {
    return await getValue(BLOCKED_SITE_KEY, false);
}

async function blockSite() {
    await setValue(BLOCKED_SITE_KEY, true);
    window.location.reload();
}

async function unblockSite() {
    await deleteValue(BLOCKED_SITE_KEY);
    window.location.reload();
}
