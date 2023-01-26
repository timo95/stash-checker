import {prefixSymbol} from "./symbol";
import {getStashData} from "./stashData";

interface CheckOptions {
    checkUrl?: boolean;
    urlSelector?: (e: Element) => string;
    prepareUrl?: (url: string) => string;
    codeSelector?: (e: Element) => string;
    color?: (data: any) => string;
    currentSite?: boolean;
}

// Ask for stash url/key on load
let promise = getStashData()

async function request(
    queryString: string,
    onload: (data: any[]) => any,
    type: string
) {
    let query = "";
    let access = (d: any) => d;
    switch (type) {
        case "sceneUrl":
            queryString = encodeURIComponent(queryString);
            query = `{findScenes(scene_filter:{url:{value:"${queryString}",modifier:EQUALS}}){scenes{id,title,code,files{path}}}}`;
            access = (d) => d.findScenes.scenes;
            break;
        case "performerUrl":
            queryString = encodeURIComponent(queryString);
            query = `{findPerformers(performer_filter:{url:{value:"${queryString}",modifier:EQUALS}}){performers{id,name}}}`;
            access = (d) => d.findPerformers.performers;
            break;
        case "sceneCode":
            query = `{findScenes(scene_filter:{code:{value:"${queryString}",modifier:EQUALS}}){scenes{id,title,code,files{path}}}}`;
            access = (d) => d.findScenes.scenes;
            break;
        default:
    }
    let [stashUrl, apiKey] = await promise  // Wait for stash data popup if it is not stored
    GM.xmlHttpRequest({
        method: "GET",
        url: `${stashUrl}/graphql?query=${query}`,
        headers: {
            "Content-Type": "application/json",
            ApiKey: apiKey,
        },
        onload: function (response) {
            try {
                let data = access(JSON.parse(response.responseText).data);
                onload(data);
            } catch (e) {
                console.log("Failed to parse response: " + response.responseText);
                console.log("Exception: " + e);
            }
        },
    });
}

async function checkElement(
    type: string,
    element: Element,
    {
        checkUrl = true,
        prepareUrl = (url) => url,
        urlSelector,
        codeSelector,
        color = () => "green",
    }: CheckOptions
) {
    if (checkUrl) {
        let url = urlSelector(element);
        url = prepareUrl(url);
        if (url) {
            console.log(url);
            request(url, (data: any) => prefixSymbol(element, data, "URL", color), type + "Url");
        } else {
            console.log("No URL for entry found");
        }
    }
    if (codeSelector) {
        let code = codeSelector(element);
        if (code) {
            console.log(code);
            request(code, (data: any) => prefixSymbol(element, data, "Code", color), type + "Code");
        } else {
            console.log("No Code for entry found");
        }
    }
}

/**
 * queries for each selected element
 *
 * the selected element should be [a child of] the link that will be compared with stash urls
 * the first text inside the selected element will be prepended with the symbol
 */
export function check(
    type: string,
    elementSelector: string,
    {currentSite = false, ...checkConfig}: CheckOptions = {}
) {
    if (currentSite) {
        let element = document.querySelector(elementSelector);
        if (element) {
            // url of current site
            checkConfig.urlSelector ??= () => decodeURI(window.location.href);
            checkElement(type, element, checkConfig);
        }
    } else {
        // multiple entries with url nearest to element
        document.querySelectorAll(elementSelector).forEach((element) => {
            // url nearest to selected element traversing towards the root (children are ignored)
            checkConfig.urlSelector ??= (e: Element) => decodeURI(e.closest("a").href);
            checkElement(type, element, checkConfig);
        });
    }
}
