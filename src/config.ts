

const DEFAULT_URL = "http://localhost:9999"
let blockedKey = `blocked_${window.location.host}`.replace(/[\.\-]/, "_");

// Register menu items
GM.registerMenuCommand("Set Stash Url", setStashUrl, "u" );
GM.registerMenuCommand("Set API key", setApiKey, "k" );

if (await isSiteBlocked()) {
    GM.registerMenuCommand(`Activate for ${window.location.host}`, unblockSite, "a");
} else {
    GM.registerMenuCommand(`Deactivate for ${window.location.host}`, blockSite, "d");
}

export async function isSiteBlocked(): Promise<boolean> {
    return await GM.getValue(blockedKey, false);
}

async function blockSite() {
    await GM.setValue(blockedKey, true);
    window.location.reload();
}

async function unblockSite() {
    await GM.deleteValue(blockedKey);
    window.location.reload();
}

async function setStashUrl() {
    let stashUrl = await GM.getValue<string>("stashUrl", undefined);
    stashUrl = prompt("Stash URL:", stashUrl ?? DEFAULT_URL)?.trim()?.replace("\/$", "")
    if (stashUrl !== undefined) {
        await GM.setValue("stashUrl", stashUrl)
    }
}

async function setApiKey() {
    let apiKey = await GM.getValue<string>("apiKey", undefined);
    apiKey = prompt("API Key:", apiKey ?? "")?.trim()?.replace("\/$", "")
    if (apiKey !== undefined) {
        await GM.setValue("apiKey", apiKey)
    }
}

export async function getConfig(): Promise<[string, string]> {
    let stashUrl = await GM.getValue<string>("stashUrl", undefined);
    let apiKey = await GM.getValue<string>("apiKey", undefined);

    if (stashUrl === undefined) {
        stashUrl = prompt("Stash URL:", DEFAULT_URL)?.trim()?.replace("\/$", "")
        if (stashUrl !== undefined) {
            await GM.setValue("stashUrl", stashUrl)
        }
    }
    if (apiKey === undefined) {
        apiKey = prompt("API Key:")?.trim()?.replace("\/$", "")
        if (apiKey !== undefined) {
            await GM.setValue("apiKey", apiKey)
        }
    }

    return [stashUrl ?? "", apiKey ?? ""]
}
