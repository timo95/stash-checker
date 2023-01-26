

// Register menu items
GM.registerMenuCommand("Set Stash Url", setStashUrl, "u" )
GM.registerMenuCommand("Set API key", setApiKey, "k" )


async function setStashUrl() {
    let stashUrl = await GM.getValue<string>("stashUrl", undefined);
    stashUrl = prompt("Stash URL:", stashUrl ?? "https://localhost:9999")?.trim()?.replace("\/$", "")
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


export async function getStashData(): Promise<[string, string]> {
    let stashUrl = await GM.getValue<string>("stashUrl", undefined);
    let apiKey = await GM.getValue<string>("apiKey", undefined);

    if (stashUrl === undefined) {
        stashUrl = prompt("Stash URL:", "https://localhost:9999")?.trim()?.replace("\/$", "")
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
