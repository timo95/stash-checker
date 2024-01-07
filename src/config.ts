import {deleteValue, getValue, setValue} from "./storage";

const DEFAULT_STASH_URL = "http://localhost:9999"
const BLOCKED_SITE_KEY = `blocked_${window.location.host}`.replace(/[.\-]/, "_");

let settingsModal: HTMLDivElement;
let settings: HTMLDivElement;

export type StashEndpoint = {
    name: string,
    url: string,
    key: string,
}

export let stashEndpoints: StashEndpoint[] = []

export async function initMenu() {
    GM.registerMenuCommand("Settings", openSettings, "s");

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

    let defaultData: StashEndpoint[] = [{
        name: "Localhost",
        url: "http://localhost:9999",
        key: "",
    }];
    stashEndpoints = await getValue<StashEndpoint[]>("stashEndpoints", defaultData);

    settings = document.createElement("div");
    settings.id = "stashChecker-settings"
    settings.classList.add("stashChecker", "settings");
    settings.append(await initEndpoints())
    settingsModal.append(settings)
    document.body.append(settingsModal);
    await updateEndpoints();
}

async function initEndpoints(): Promise<HTMLDivElement> {
    let endpoints = document.createElement("div");
    endpoints.id = "stashChecker-endpoints"
    endpoints.classList.add("stashChecker", "endpoints");
    return endpoints;
}

async function updateEndpoints() {
    let endpoints = document.getElementById("stashChecker-endpoints")
    let endpointList = stashEndpoints.map((endpoint: StashEndpoint, index: number) => {
        let div = document.createElement("div");
        div.classList.add("stashChecker", "endpoint");
        div.innerHTML = `<p>${endpoint.name}</p>`
        let button = document.createElement("button");
        button.setAttribute("data-index", index.toString());
        button.addEventListener("click", editEndpointListener);
        button.innerHTML = "Edit";
        div.append(button);
        return div;
    });
    endpoints.replaceChildren(...endpointList)
}

async function editEndpointListener(this: HTMLButtonElement) {
    let index = parseInt(this.getAttribute("data-index"));
    let oldEndpoint: StashEndpoint = stashEndpoints[index];

    let newEndpoint: StashEndpoint = {
        name: prompt("Name:", oldEndpoint.name)?.trim()?? "",
        url: prompt("URL:", oldEndpoint.url)?.trim()?? "",
        key: prompt("API Key:", oldEndpoint.key)?.trim()?? "",
    };
    stashEndpoints[index] = newEndpoint;
    setValue("stashEndpoints", stashEndpoints);
    updateEndpoints();
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

async function openSettings() {
    settingsModal.style.display = "initial";
}
