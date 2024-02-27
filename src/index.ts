import "./style/main.scss";
import {check} from "./check";
import {initEndpointSettings} from "./settings/endpoints";
import {initTooltip} from "./tooltipElement";
import {firstTextChild} from "./utils";
import {Target} from "./dataTypes";
import {initSettingsWindow} from "./settings/settings";
import {initMenu, isSiteBlocked} from "./settings/menu";

(async function () {
    await initTooltip();
    initSettingsWindow();
    await initEndpointSettings();
    await initMenu();

    // Stop, if site block is configured
    if (await isSiteBlocked()) {
        console.info("Userscript is deactivated for this site. Activate in userscript menu.");
        return;
    }
    
    let currentSite = () => window.location.href

    // Main area
    console.info("Running Stash Checker")
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

            check(Target.Scene, ".page-video__details > .text--h1", {
                observe: true,
                urlSelector: currentSite,
                color: color,
                prepareUrl,
                codeSelector: () => window.location.pathname.match(codeRegex).at(0)
            });
            check(Target.Scene, "a.videoTeaser__title", {
                observe: true,
                color: color,
                prepareUrl,
                codeSelector: (e: Element) => e.getAttribute("href").match(codeRegex).at(0)
            });
            break;
        }
        case "oreno3d.com": {
            let color = (d: any) => d.files.some((f: any) => f.path.endsWith("_Source.mp4")) ? "green" : "blue"
            check(Target.Scene, "h1.video-h1", {color: color, urlSelector: currentSite, titleSelector: null});
            check(Target.Scene, "a h2.box-h2", {color: color, titleSelector: null});
            break;
        }
        case "erommdtube.com": {
            let color = (d: any) => d.files.some((f: any) => f.path.endsWith("_Source.mp4")) ? "green" : "blue"
            check(Target.Scene, "h1.show__h1", {color: color, urlSelector: currentSite, titleSelector: null});
            check(Target.Scene, "h2.main__list-title", {color: color, titleSelector: null});
            break;
        }
        case "coomer.su":
        case "kemono.su": {
            check(Target.Scene, "h1.post__title", {urlSelector: currentSite, titleSelector: null});
            check(Target.Scene, ".post-card > a[href*='/post/']", {titleSelector: null});
            break;
        }
        case "adultanime.dbsearch.net": {
            if (document.querySelector("article > section[id='info-table']") !== null) {
                check(Target.Scene, "div[id='main-inner'] > article > h2", {
                    urlSelector: currentSite,
                    codeSelector: (_) => document.evaluate("//dt[text()='規格品番']/following-sibling::dd[1]/p/text()", document, null, XPathResult.STRING_TYPE, null)?.stringValue?.trim()
                });
            }
            check(Target.Scene, "div.item-info > h4 > a, div.item-info > h5 > a");
            break;
        }
        case "xslist.org": {
            check(Target.Performer, "span[itemprop='name']", {urlSelector: currentSite});
            check(Target.Performer, "a[href*='/model/']");
            check(Target.Scene, "table#movices td > strong", {
                urlSelector: null,
                codeSelector: e => e.textContent.trim(),
                titleSelector: null,
            });
            break;
        }
        case "www.animecharactersdatabase.com":
            check(Target.Performer, "a[href*='characters.php']:not([href*='_']):not([href*='series'])");
            break;
        case "www.iafd.com": {
            if (window.location.pathname.startsWith("/person.rme/perfid=")) {
                check(Target.Performer, "h1", {urlSelector: currentSite});
            } else if (window.location.pathname.startsWith("/title.rme/id=")) {
                check(Target.Scene, "h1", {urlSelector: currentSite});
            }
            check(Target.Performer, "a[href*='/person.rme/perfid=']");
            check(Target.Scene, "a[href*='/title.rme/id=']");
            check(Target.Studio, "a[href*='/studio.rme/studio=']");
            break;
        }
        case "javdb.com": {
            check(Target.Scene, ".video-detail > h2", {
                urlSelector: currentSite,
                titleSelector: e => e.querySelector("strong.current-title")?.textContent?.trim(),
                codeSelector: _ => {
                    let xpath = document.evaluate("//div/strong[text()='ID:']/following-sibling::span[1]//text()", document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null)
                    return xpath.iterateNext().textContent + xpath.iterateNext()?.textContent
                },
            });
            if (window.location.pathname.startsWith("/v/")) {
                check(Target.Scene, "a[href^='/v/'] > .video-number", {
                    titleSelector: e => e.parentElement.getAttribute("title")?.trim(),
                    codeSelector: e => e.textContent?.trim(),
                })
            } else {
                check(Target.Scene, "a[href^='/v/'] > .video-title", {
                    titleSelector: e => e.parentElement.getAttribute("title")?.trim(),
                    codeSelector: e => e.querySelector("strong")?.textContent?.trim(),
                })
            }
            break;
        }
        case "metadataapi.net": {
            let stashIdSelector = (_: Element) => document.evaluate("//div[text()='TPDB UUID']/following-sibling::div/text()", document, null, XPathResult.STRING_TYPE, null)?.stringValue?.trim();
            // Alternative endpoint url. Query both the default and this one.
            let stashIdEndpoint = "https://api.metadataapi.net/graphql";
            if (window.location.pathname.startsWith("/performers/")) {
                check(Target.Performer, "div.pl-4 > h2", {observe: true, urlSelector: currentSite, stashIdSelector});
                check(Target.Performer, "div.pl-4 > h2", {observe: true, urlSelector: null, nameSelector: null, stashIdSelector, stashIdEndpoint});
            } else if (window.location.pathname.startsWith("/scenes/")) {
                check(Target.Scene, "div.flex.justify-between > h2", {observe: true, urlSelector: currentSite, stashIdSelector});
                check(Target.Scene, "div.flex.justify-between > h2", {observe: true, urlSelector: null, titleSelector: null, stashIdSelector, stashIdEndpoint});
            } else if (window.location.pathname.startsWith("/movies/")) {
                check(Target.Movie, "div.flex.justify-between > h2", {observe: true, urlSelector: currentSite, stashIdSelector});
                check(Target.Movie, "div.flex.justify-between > h2", {observe: true, urlSelector: null, nameSelector: null, stashIdSelector, stashIdEndpoint});
            }
            check(Target.Performer, "a[href^='https://metadataapi.net/performers/']", {observe: true});
            check(Target.Scene, "a[href^='https://metadataapi.net/scenes/'], a[href^='https://metadataapi.net/jav/']", {observe: true});
            check(Target.Movie, "a[href^='https://metadataapi.net/movies/']", {observe: true});
            break;
        }
        case "www.javlibrary.com": {
            check(Target.Scene, "div[id='video_title']", {
                urlSelector: currentSite,
                prepareUrl: url => url.replace("videoreviews.php", "").replace(/&.*$/, ""),
                codeSelector: _ => document.querySelector("div[id='video_id'] td.text").textContent.trim(),
                titleSelector: _ => document.querySelector("div[id='video_id'] td.text").textContent.trim(),
            });
            // generic video links
            check(Target.Scene, ".video a[href^='./?v=jav']", {
                prepareUrl: url => url.replace(/&.*$/, ""),
                codeSelector: e => e.querySelector("div.id")?.textContent?.trim(),
            });
            // best reviews
            check(Target.Scene, ".comment strong > a[href^='videoreviews.php?v=jav']", {
                prepareUrl: url => url.replace("videoreviews.php", "").replace(/&.*$/, ""),
                codeSelector: e => firstTextChild(e)?.textContent?.trim()?.split(" ")[0],
                titleSelector: e => firstTextChild(e)?.textContent?.trim()?.split(" ")[0],
            });
            break;
        }
        case "r18.dev": {
            check(Target.Scene, "#video-info > #title", {
                observe: true,
                urlSelector: currentSite,
                codeSelector: _ => firstTextChild(document.querySelector("#dvd-id"))?.textContent?.trim(),
            });
            check(Target.Scene, ".video-label > a[href*='/movies/detail/']", {
                observe: true,
                codeSelector: e => firstTextChild(e)?.textContent?.trim(),
            });
            break;
        }
        case "www.minnano-av.com": {
            if (/actress\d{1,6}/.test(window.location.pathname)) {
                check(Target.Performer, "h1", {
                    prepareUrl: url => url.split("?")[0],
                    urlSelector: currentSite,
                });
            }
            check(Target.Performer, "a[href*='actress']:not([href*='list']):not([href*='.php']):not([href*='http'])", {
                prepareUrl: url => url.split("?")[0],
            });
            break;
        }
        case "www.indexxx.com": {
            check(Target.Performer, "h1[id='model-name']", {urlSelector: currentSite});
            check(Target.Performer, "a.modelLink[href*='https://www.indexxx.com/m/'] > span");
            break;
        }
        case "www.thenude.com": {
            check(Target.Performer, "span.model-name", {urlSelector: currentSite});
            check(Target.Performer, "a.model-name, a.model-title, a[data-img*='/models/']", {observe: true});
            break;
        }
        case "www.data18.com": {
            check(Target.Scene, "a[href^='https://www.data18.com/scenes/']:not([href*='#'])", {
                observe: true,
                titleSelector: e => e.getAttribute("title")?.trim()
            });
            check(Target.Movie, "a[href^='https://www.data18.com/movies/']:not([href*='#']):not([href$='/movies/series']):not([href$='/movies/showcases'])", {
                observe: true,
                nameSelector: e => e.getAttribute("title")?.trim()
            });
            let exclude = ":not([href*='/pairings']):not([href*='/studio']):not([href*='/virtual-reality']):not([href*='/scenes']):not([href*='/movies']):not([href*='/tags']):not([title$=' Home'])"
            check(Target.Performer, `a[href^='https://www.data18.com/name/']${exclude}`, {observe: true});
            if (window.location.pathname === "/names/pornstars") {
                check(Target.Performer, `a[href^='https://www.data18.com/name/']${exclude}`, {
                    observe: true,
                    displaySelector: e => e.parentElement.querySelector("div"),
                    nameSelector: e => e.getAttribute("title")
                })
            }
            break;
        }
        case "www.babepedia.com": {
            check(Target.Performer, "h1#babename", {urlSelector: currentSite});
            check(Target.Performer, "a[href*='/babe/']", {observe: true});
            break;
        }
        case "www.freeones.com": {
            check(Target.Performer, "a[href$='/feed'] [data-test='subject-name'], a[href$='/feed'] .profile-image + p", {
                prepareUrl: url => url.replace(/\/feed$/, "").replace(/\/[a-z]{2}\//, "/")
            });
            break;
        }
        case "shemalestardb.com": {
            check(Target.Performer, "h2[id='star-name']", {urlSelector: currentSite});
            check(Target.Performer, "figcaption > a[href*='/stars/']");
            break;
        }
        case "onlyfans.com": {
            check(Target.Performer, "div.b-username > div.g-user-name", {observe: true, urlSelector: currentSite});
            check(Target.Performer, "a.b-username > div.g-user-name", {observe: true});
            break;
        }
        case "www.pornteengirl.com": {
            check(Target.Performer, "a[href*='/model/']", {
                nameSelector: e => firstTextChild(e)?.textContent?.trim()?.replace(/\([^()]*\)$/, "")?.trimEnd()
            });
            break;
        }
        case "gayeroticvideoindex.com": {
            if (window.location.pathname.startsWith("/performer/")) {
                check(Target.Performer, "[id='data'] h1", {urlSelector: currentSite});
            } else if (window.location.pathname.startsWith("/episode/")) {
                check(Target.Scene, "[id='data'] h1", {urlSelector: currentSite});
            } else if (window.location.pathname.startsWith("/video/")) {
                check(Target.Movie, "[id='data'] h1", {urlSelector: currentSite});
            }
            check(Target.Performer, "a[href*='performer/']", {observe: true});
            check(Target.Scene, "a[href*='episode/']", {observe: true});
            check(Target.Movie, "a[href*='video/']", {observe: true});
            break;
        }
        case "fansdb.cc":
        case "fansdb.xyz":
        case "pmvstash.org":
        case "stashdb.org": {
            // These buttons are only visible with edit permissions.
            let exclude = ":not(a[href$='/add']):not(a[href$='/edit']):not(a[href$='/merge']):not(a[href$='/delete'])";
            check(Target.Scene, "div.scene-info.card h3 > span", {
                observe: true,
                urlSelector: null,
                stashIdSelector: () => window.location.href.replace(/^.*\/scenes\//, "").split(/[?#]/)[0],
                titleSelector: null,
            });
            check(Target.Scene, `a[href^='/scenes/']${exclude}, a[href^='https://${window.location.host}/scenes/']${exclude}`, {
                observe: true,
                urlSelector: null,
                stashIdSelector: (e) => e.getAttribute("href")?.replace(/^.*\/scenes\//, "")?.split(/[?#]/)[0],
                titleSelector: null,
            });
            check(Target.Performer, "div.PerformerInfo div.card-header h3 > span", {
                observe: true,
                urlSelector: null,
                stashIdSelector: () => window.location.href.replace(/^.*\/performers\//, "").split(/[?#]/)[0],
                nameSelector: null,
            });
            check(Target.Performer, `a[href^='/performers/']${exclude}, a[href^='https://${window.location.host}/performers/']${exclude}`, {
                observe: true,
                urlSelector: null,
                stashIdSelector: (e) => e.closest("a")?.getAttribute("href")?.replace(/^.*\/performers\//, "")?.split(/[?#]/)[0],
                nameSelector: null,
            });
            check(Target.Studio, ".studio-title > h3 > span", {
                observe: true,
                urlSelector: null,
                stashIdSelector: () => window.location.href.replace(/^.*\/studios\//, "").split(/[?#]/)[0],
                nameSelector: null,
            });
            check(Target.Studio, `a[href^='/studios/']${exclude}, a[href^='https://${window.location.host}/studios/']${exclude}`, {
                observe: true,
                urlSelector: null,
                stashIdSelector: (e) => e.closest("a")?.getAttribute("href")?.replace(/^.*\/studios\//, "")?.split(/[?#]/)[0],
                nameSelector: null,
            });
            check(Target.Tag, ".MainContent > .NarrowPage h3 > span", {
                observe: true,
                displaySelector: e => window.location.pathname.startsWith("/tags/") ? e : undefined,
                urlSelector: null,
                stashIdSelector: () => window.location.href.replace(/^.*\/tags\//, "").split(/[?#]/)[0],
                nameSelector: null,
            });
            check(Target.Tag, `a[href^='/tags/']${exclude}, a[href^='https://${window.location.host}/tags/']${exclude}`, {
                observe: true,
                displaySelector: e => window.location.pathname === "/tags" ? e : undefined,
                urlSelector: null,
                stashIdSelector: (e) => e.closest("a")?.getAttribute("href")?.replace(/^.*\/tags\//, "")?.split(/[?#]/)[0],
                nameSelector: null,
            });
            break;
        }
        default:
            console.warn("No configuration for website found.");
            break;
    }
})();
