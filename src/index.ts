import "./style/main.scss";
import {check} from "./check";
import {initMenu, initSettings, isSiteBlocked} from "./config";
import {initTooltip} from "./tooltipElement";
import {firstTextChild} from "./utils";

(async function () {
    // Create (invisible) tooltip window
    await initTooltip();
    // Create (invisible) settings modal
    await initSettings();
    // Register menu items
    await initMenu();

    // Stop, if site block is configured
    if (await isSiteBlocked()) {
        console.log("Userscript is deactivated for this site. Activate in userscript menu.");
        return;
    }

    // Main area
    console.log("Running Stash Checker")
    switch (window.location.host) {
        case "www.iwara.tv": {
            let color = (d: any) => d.files.some((f: any) => f.path.endsWith("_Source.mp4")) ? "green" : "blue"
            // Video code in the URL
            let codeRegex = /(?<=video\/)([a-zA-Z0-9]+)(?=\/|$)/
            // Cut URL after code off
            let prepareUrl = (url: String) => {
                let match = url.match(codeRegex)
                return url.substring(0, match.index + match.at(0).length)
            }

            check("scene", ".page-video__details > .text--h1", {
                observe: true,
                currentSite: true,
                color: color,
                prepareUrl,
                codeSelector: () => window.location.pathname.match(codeRegex).at(0)
            });
            check("scene", "a.videoTeaser__title", {
                observe: true,
                color: color,
                prepareUrl,
                codeSelector: (e: Element) => e.getAttribute("href").match(codeRegex).at(0)
            });
            break;
        }
        case "oreno3d.com": {
            let color = (d: any) => d.files.some((f: any) => f.path.endsWith("_Source.mp4")) ? "green" : "blue"
            check("scene", "h1.video-h1", {color: color, currentSite: true, titleSelector: null});
            check("scene", "a h2.box-h2", {color: color, titleSelector: null});
            break;
        }
        case "erommdtube.com": {
            let color = (d: any) => d.files.some((f: any) => f.path.endsWith("_Source.mp4")) ? "green" : "blue"
            check("scene", "h1.show__h1", {color: color, currentSite: true, titleSelector: null});
            check("scene", "h2.main__list-title", {color: color, titleSelector: null});
            break;
        }
        case "kemono.party":
            check("scene", "h1.post__title", {currentSite: true, titleSelector: null});
            check("scene", ".post-card > a[href*='/post/']", {titleSelector: null});
            break;
        case "coomer.party":
            check("scene", "h1.post__title", {currentSite: true, titleSelector: null});
            check("scene", ".post-card h2 > a[href*='/post/']", {titleSelector: null});
            break;
        case "adultanime.dbsearch.net":
            if (document.querySelector("article > section[id='info-table']") !== null) {
                check("scene", "div[id='main-inner'] > article > h2", {
                    currentSite: true,
                    codeSelector: (_) => document.evaluate("//dt[text()='規格品番']/following-sibling::dd[1]/p/text()", document, null, XPathResult.STRING_TYPE, null)?.stringValue?.trim()
                });
            }
            check("scene", "div.item-info > h4 > a, div.item-info > h5 > a");
            break;
        case "xslist.org":
            check("performer", "span[itemprop='name']", {currentSite: true});
            check("performer", "a[href*='/model/']");
            check("scene", "table#movices td > strong", {
                urlSelector: null,
                codeSelector: e => e.textContent.trim(),
                titleSelector: null,
            });
            break;
        case "www.animecharactersdatabase.com":
            check("performer", "a[href*='characters.php']:not([href*='_']):not([href*='series'])");
            break;
        case "www.iafd.com": {
            let prepareUrl = (url: string) => url.replaceAll("'", "%27").replace(/^http:/, "https:");
            if (window.location.pathname.startsWith("/person.rme/perfid=")) {
                check("performer", "h1", {prepareUrl: prepareUrl, currentSite: true});
            } else if (window.location.pathname.startsWith("/title.rme/title=")) {
                check("scene", "h1", {prepareUrl: prepareUrl, currentSite: true, titleSelector: null});
            }
            check("performer", "a[href*='/person.rme/perfid=']", {prepareUrl: prepareUrl});
            check("scene", "a[href*='/title.rme/title=']", {prepareUrl: prepareUrl, titleSelector: null});
            break;
        }
        case "metadataapi.net": {
            let stashIdSelector = (_: Element) => document.evaluate("//div[text()='TPDB UUID']/following-sibling::div/text()", document, null, XPathResult.STRING_TYPE, null)?.stringValue?.trim();
            // Alternative endpoint url. Query both the default and this one.
            let stashIdEndpoint = "https://api.metadataapi.net/graphql";
            if (window.location.pathname.startsWith("/performers/")) {
                check("performer", "div.pl-4 > h2", {observe: true, currentSite: true, stashIdSelector});
                check("performer", "div.pl-4 > h2", {observe: true, currentSite: true, urlSelector: null, nameSelector: null, stashIdSelector, stashIdEndpoint});
            } else if (window.location.pathname.startsWith("/scenes/")) {
                check("scene", "div.flex.justify-between > h2", {observe: true, currentSite: true, stashIdSelector});
                check("scene", "div.flex.justify-between > h2", {observe: true, currentSite: true, titleSelector: null, stashIdSelector, stashIdEndpoint});
            } else if (window.location.pathname.startsWith("/movies/")) {
                check("movie", "div.flex.justify-between > h2", {observe: true, currentSite: true, stashIdSelector});
                check("movie", "div.flex.justify-between > h2", {observe: true, currentSite: true, nameSelector: null, stashIdSelector, stashIdEndpoint});
            }
            check("performer", "a[href^='https://metadataapi.net/performers/']", {observe: true});
            check("scene", "a[href^='https://metadataapi.net/scenes/'], a[href^='https://metadataapi.net/jav/']", {observe: true});
            check("movie", "a[href^='https://metadataapi.net/movies/']", {observe: true});
            break;
        }
        case "www.javlibrary.com":
            check("scene", "div[id='video_title']", {
                currentSite: true,
                prepareUrl: url => url.replace("videoreviews.php", "").replace(/&.*$/, ""),
                codeSelector: _ => document.querySelector("div[id='video_id'] td.text").textContent.trim(),
                titleSelector: _ => document.querySelector("div[id='video_id'] td.text").textContent.trim(),
            });
            // generic video links
            check("scene", ".video a[href^='./?v=jav']", {
                prepareUrl: url => url.replace(/&.*$/, ""),
                codeSelector: e => e.querySelector("div.id")?.textContent?.trim(),
            });
            // best reviews
            check("scene", ".comment strong > a[href^='videoreviews.php?v=jav']", {
                prepareUrl: url => url.replace("videoreviews.php", "").replace(/&.*$/, ""),
                codeSelector: e => firstTextChild(e)?.textContent?.trim()?.split(" ")[0],
                titleSelector: e => firstTextChild(e)?.textContent?.trim()?.split(" ")[0],
            });
            break;
        case "r18.dev":
            check("scene","#video-info > #title", {
                observe: true,
                currentSite: true,
                codeSelector: _ => firstTextChild(document.querySelector("#dvd-id"))?.textContent?.trim(),
            });
            check("scene", ".video-label > a[href*='/movies/detail/']", {
                observe: true,
                codeSelector: e => firstTextChild(e)?.textContent?.trim(),
            });
            break;
        case "www.minnano-av.com":
            if (/actress\d{1,6}/.test(window.location.pathname)) {
                check("performer", "h1", {
                    prepareUrl: url => url.split("?")[0],
                    currentSite: true,
                });
            }
            check("performer", "a[href*='actress']:not([href*='list']):not([href*='.php']):not([href*='http'])", {
                prepareUrl: url => url.split("?")[0],
            });
            break;
        case "www.indexxx.com":
            check("performer", "h1[id='model-name']", {currentSite: true});
            check("performer", "a.modelLink[href*='https://www.indexxx.com/m/'] > span");
            break;
        case "www.thenude.com":
            check("performer", "span.model-name", {currentSite: true});
            check("performer", "a.model-name, a.model-title, a[data-img*='/models/']", {observe: true});
            break;
        case "www.data18.com":
            check("scene", "a[href^='https://www.data18.com/scenes/']:not([href*='#'])", {observe: true, titleSelector: null});
            check("performer", "a[href^='https://www.data18.com/name/']:not([href*='/pairings']):not([href*='/studio']):not([href*='/virtual-reality']):not([href*='/scenes']):not([href*='/movies']):not([href*='/tags']):not([title$=' Home'])", {observe: true});
            break;
        case "www.babepedia.com":
            check("performer", "h1#babename", {currentSite: true});
            check("performer", "a[href*='/babe/']", {observe: true});
            break;
        case "www.freeones.com":
            check("performer", "a[href$='/feed'] [data-test='subject-name'], a[href$='/feed'] .profile-image + p", {
                prepareUrl: url => url.replace(/\/feed$/, "").replace(/\/[a-z]{2}\//, "/")
            });
            break;
        case "shemalestardb.com":
            check("performer", "h2[id='star-name']", {currentSite: true});
            check("performer", "figcaption > a[href*='/stars/']");
            break;
        case "onlyfans.com":
            check("performer", "div.b-username > div.g-user-name", {observe: true, currentSite: true});
            check("performer", "a.b-username > div.g-user-name", {observe: true});
            break;
        case "www.pornteengirl.com":
            check("performer", "a[href*='/model/']", {
                 nameSelector: e => firstTextChild(e)?.textContent?.trim()?.replace(/\([^()]*\)$/, "")?.trimEnd()
            });
            break;
        case "gayeroticvideoindex.com":
            if (window.location.pathname.startsWith("/performer/")) {
                check("performer", "[id='data'] h1", {currentSite: true});
            } else if (window.location.pathname.startsWith("/episode/")) {
                check("scene", "[id='data'] h1", {currentSite: true});
            } else if (window.location.pathname.startsWith("/video/")) {
                check("movie", "[id='data'] h1", {currentSite: true});
            }
            check("performer", "a[href*='performer/']", {observe: true});
            check("scene", "a[href*='episode/']", {observe: true});
            check("movie", "a[href*='video/']", {observe: true});
            break;
        case "fansdb.cc":
        case "fansdb.xyz":
        case "pmvstash.org":
        case "stashdb.org":
            // These buttons are only visible with edit permissions.
            let exclude = ":not(a[href$='/edit']):not(a[href$='/merge']):not(a[href$='/delete'])";
            if (window.location.pathname.startsWith("/scenes/")) {
                check("scene", "div.scene-info.card h3 > span", {
                    observe: true,
                    currentSite: true,
                    urlSelector: null,
                    stashIdSelector: () => window.location.href.replace(/^.*\/scenes\//, "").split(/[?#]/)[0],
                    titleSelector: null,
                });
            }
            check("scene", `a[href^='/scenes/']${exclude}, a[href^='https://${window.location.host}/scenes/']${exclude}`, {
                observe: true,
                urlSelector: null,
                stashIdSelector: (e) => e.getAttribute("href")?.replace(/^.*\/scenes\//, "")?.split(/[?#]/)[0],
                titleSelector: null,
            });
            if (window.location.pathname.startsWith("/performers/")) {
                check("performer", "div.PerformerInfo div.card-header h3 > span", {
                    observe: true,
                    currentSite: true,
                    urlSelector: null,
                    stashIdSelector: () => window.location.href.replace(/^.*\/performers\//, "").split(/[?#]/)[0],
                    nameSelector: null,
                });
            }
            check("performer", `a[href^='/performers/']${exclude}, a[href^='https://${window.location.host}/performers/']${exclude}`, {
                observe: true,
                urlSelector: null,
                stashIdSelector: (e) => e.closest("a")?.getAttribute("href")?.replace(/^.*\/performers\//, "")?.split(/[?#]/)[0],
                nameSelector: null,
            });
            if (window.location.pathname.startsWith("/studios/")) {
                check("studio", ".studio-title > h3 > span", {
                    observe: true,
                    currentSite: true,
                    urlSelector: null,
                    stashIdSelector: () => window.location.href.replace(/^.*\/studios\//, "").split(/[?#]/)[0],
                    nameSelector: null,
                });
            }
            check("studio", `a[href^='/studios/']${exclude}, a[href^='https://${window.location.host}/studios/']${exclude}`, {
                observe: true,
                urlSelector: null,
                stashIdSelector: (e) => e.closest("a")?.getAttribute("href")?.replace(/^.*\/studios\//, "")?.split(/[?#]/)[0],
                nameSelector: null,
            });
            if (window.location.pathname.startsWith("/tags/")) {
                check("tag", ".MainContent > .NarrowPage h3 > span", {
                    observe: true,
                    currentSite: true,
                    urlSelector: null,
                    stashIdSelector: () => window.location.href.replace(/^.*\/tags\//, "").split(/[?#]/)[0],
                    nameSelector: null,
                });
            } else if (window.location.pathname === "/tags") {
                check("tag", `a[href^='/tags/']${exclude}, a[href^='https://${window.location.host}/tags/']${exclude}`, {
                    observe: true,
                    urlSelector: null,
                    stashIdSelector: (e) => e.closest("a")?.getAttribute("href")?.replace(/^.*\/tags\//, "")?.split(/[?#]/)[0],
                    nameSelector: null,
                });
            }
            break;
        default:
            console.log("No configuration for website found.");
            break;
    }
})();
