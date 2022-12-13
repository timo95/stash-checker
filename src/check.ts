import {prefixSymbol} from "./symbol";

let stash = "http://stash.rock-5b.lan"; //"https://stash.tiemada.de"
let apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ0aW1vIiwiaWF0IjoxNjQxOTIyNzE1LCJzdWIiOiJBUElLZXkifQ.K29zkH-0KDg1VNf-r-A71pIsBvBubRjjMUHUEkUSmHU";

interface CheckOptions {
    checkUrl?: boolean;
    urlSelector?: (e: Element) => string;
    prepareUrl?: (url: string) => string;
    codeSelector?: (e: Element) => string;
    color?: (data: any) => string;
    currentSite?: boolean;
}

function request(
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
        default:
    }
    GM.xmlHttpRequest({
        method: "GET",
        url: `${stash}/graphql?query=${query}`,
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

function checkElement(
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
            request(url, (data) => prefixSymbol(element, data, "URL", color), type + "Url");
        } else {
            console.log("No URL for entry found");
        }
    }
    if (codeSelector) {
        let code = codeSelector(element);
        if (code) {
            console.log(code);
            request(code, (data) => prefixSymbol(element, data, "Code", color), type + "Code");
        } else {
            console.log("No Code for entry found");
        }
    }
}

/**
 * queries for each selected element
 *
 * the selected element should be [a child of] the link that will be compared with stash urls
 * the first text inside of the selected element will be prepended with the symbol
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
