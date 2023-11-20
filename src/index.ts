import "./style/main.less";
import {check} from "./check";
import {isSiteBlocked} from "./config";
import {firstTextChild} from "./tooltip";

(async function () {
    if (await isSiteBlocked()) {
        console.log("Userscript is deactivated for this site. Activate in userscript menu.");
        return;
    }

    switch (window.location.host) {
        case "www.iwara.tv":
        case "ecchi.iwara.tv": {
            let color = (d: any) => d.files.some((f: any) => f.path.endsWith("_Source.mp4")) ? "green" : "blue"
            check("scene", "h1.title", {color: color, currentSite: true, titleSelector: null});
            check("scene", "h3.title > a", {color: color, titleSelector: null});
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
            check("scene", "div[class='item-info'] > h4 > a, div[class='item-info'] > h5 > a");
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
        case "metadataapi.net":
            check("performer", "a[href^='https://metadataapi.net/performers/']", {observe: true});
            check("scene", "a[href^='https://metadataapi.net/scenes/'], a[href^='https://metadataapi.net/jav/']", {observe: true, titleSelector: null});
            check("movie", "a[href^='https://metadataapi.net/movies/']", {observe: true, titleSelector: null});
            break;
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
                observe: "#dvd-id",
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
            check("performer", "a[class*='modelLink'][href*='https://www.indexxx.com/m/'] > span");
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
                prepareUrl: url => url.replace(/\/feed$/, "")
            });
            break;
        case "fansdb.xyz":
        case "pmvstash.org":
        case "stashdb.org":
            let exclude = ":not(a[href$='/edit']):not(a[href$='/merge']):not(a[href$='/delete'])";
            check("scene", "div.scene-info.card h3 > span", {
                observe: true,
                currentSite: true,
                urlSelector: null,
                stashIdSelector: () => window.location.href.replace(/^.*\/scenes\//, "").split(/[?#]/)[0],
                titleSelector: null,
            });
            check("performer", "div.PerformerInfo div.card-header h3 > span", {
                observe: true,
                currentSite: true,
                urlSelector: null,
                stashIdSelector: () => window.location.href.replace(/^.*\/performers\//, "").split(/[?#]/)[0],
                nameSelector: null,
            });
            check("scene", `a[href^='/scenes/']${exclude}, a[href^='https://${window.location.host}/scenes/']${exclude}`, {
                observe: true,
                urlSelector: null,
                stashIdSelector: (e) => e.getAttribute("href")?.replace(/^.*\/scenes\//, "")?.split(/[?#]/)[0],
                titleSelector: null,
            });
            check("performer", `a[href^='/performers/']${exclude}, a[href^='https://${window.location.host}/performers/']${exclude}`, {
                observe: true,
                urlSelector: null,
                stashIdSelector: (e) => e.closest("a")?.getAttribute("href")?.replace(/^.*\/performers\//, "")?.split(/[?#]/)[0],
                nameSelector: null,
            });
            break;
        default:
            console.log("No configuration for website found.");
            break;
    }
})();
