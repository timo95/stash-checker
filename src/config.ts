import {deleteValue, getValue, setValue} from "./storage";

const DEFAULT_STASH_URL = "http://localhost:9999"
const BLOCKED_SITE_KEY = `blocked_${window.location.host}`.replace(/[.\-]/, "_");

let settingsModal: HTMLDivElement;
let settings: HTMLDivElement;

type StashEndpoint = {
    name: string,
    url: string,
    key: string,
}

export async function initMenu() {
    GM.registerMenuCommand("Settings", openSettings, "s");
    GM.registerMenuCommand("Set Stash Url", setStashUrl, "u");
    GM.registerMenuCommand("Set API key", setApiKey, "k");

    if (await isSiteBlocked()) {
        GM.registerMenuCommand(`Activate for ${window.location.host}`, unblockSite, "a");
    } else {
        GM.registerMenuCommand(`Deactivate for ${window.location.host}`, blockSite, "d");
    }
}

export async function initSettings() {
    settingsModal = document.createElement("div");
    settingsModal.style.display = "none";
    settingsModal.classList.add("stashChecker", "modal");
    settingsModal.addEventListener("click", function (event) {
        if (event.target === settingsModal) {
            settingsModal.style.display = "none";
        }
    });

    settings = document.createElement("div");
    settings.classList.add("stashChecker", "settings");

    settings.append(initEndpoints())
    settingsModal.append(settings)
    document.body.append(settingsModal);
}

function initEndpoints(): HTMLDivElement {
    let endpoints = document.createElement("div");
    endpoints.classList.add("stashChecker", "endpoints");

    let defaultData: StashEndpoint[] = [{
        name: "Localhost",
        url: "localhost.8080",
        key: "",
    }];

    let data = defaultData  // TODO actual data

    let endpointList = data.map((datum, index) => {
        let endpoint = document.createElement("div")
        endpoint.classList.add("stashChecker", "endpoint")
        endpoint.innerHTML = `<p>${datum.name}</p><button id="stashCheckerEndpoint-${index}">Edit</button>`
        return endpoint
    });

    endpoints.append(...endpointList)
    return endpoints
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

async function setStashUrl() {
    let stashUrl = await getValue<string>("stashUrl", undefined);
    stashUrl = prompt("Stash URL:", stashUrl ?? DEFAULT_STASH_URL)?.trim()?.replace("\/$", "")
    if (stashUrl !== undefined) {
        await setValue("stashUrl", stashUrl)
    }
}

async function setApiKey() {
    let apiKey = await getValue<string>("apiKey", undefined);
    apiKey = prompt("API Key:", apiKey ?? "")?.trim()?.replace("\/$", "")
    if (apiKey !== undefined) {
        await setValue("apiKey", apiKey)
    }
}

export async function getConfig(): Promise<[string, string]> {
    let stashUrl = await getValue<string>("stashUrl", undefined);
    let apiKey = await getValue<string>("apiKey", undefined);

    if (stashUrl === undefined) {
        stashUrl = prompt("Stash URL:", DEFAULT_STASH_URL)?.trim()?.replace("\/$", "")
        if (stashUrl !== undefined) {
            await setValue("stashUrl", stashUrl)
        }
    }
    if (apiKey === undefined) {
        apiKey = prompt("API Key:")?.trim()?.replace("\/$", "")
        if (apiKey !== undefined) {
            await setValue("apiKey", apiKey)
        }
    }

    return [stashUrl ?? "", apiKey ?? ""]
}

async function openSettings() {
    settingsModal.style.display = "initial";
}
