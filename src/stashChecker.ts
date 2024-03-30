import {check} from "./check";
import {CheckOptions, Target} from "./dataTypes";
import {firstText} from "./utils";

export function runStashChecker() {
    console.info("Running Stash Checker")
    let currentSite = () => window.location.href

    switch (window.location.host) {
        case "www.iwara.tv": {
            let color = (d: any) => d.files.some((f: any) => f.path.endsWith("_Source.mp4")) ? "green" : "blue"
            // Video code in the URL
            let codeRegex = /(?<=video\/)([a-zA-Z0-9]+)(?=\/|$)/
            // Cut URL after code off
            let prepareUrl = (url: String) => {
                let match = url.match(codeRegex)
                let end = (match?.index && match?.[0]?.length) ? match?.index + match?.[0]?.length : match?.index
                return url.substring(0, end)
            }

            check(Target.Scene, ".page-video__details > .text--h1", {
                observe: true,
                urlSelector: currentSite,
                color: color,
                prepareUrl,
                codeSelector: () => window.location.pathname.match(codeRegex)?.[0]
            });
            check(Target.Scene, "a.videoTeaser__title", {
                observe: true,
                color: color,
                prepareUrl,
                codeSelector: (e: Element) => e.getAttribute("href")?.match(codeRegex)?.[0]
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
                    codeSelector: _ => document.evaluate("//dt[text()='規格品番']/following-sibling::dd[1]/p/text()", document, null, XPathResult.STRING_TYPE, null)?.stringValue?.trim()
                });
            }
            check(Target.Scene, "div.item-info > :is(h4, h5) > a");
            break;
        }
        case "xcity.jp": {
            check(Target.Scene, "#program_detail_title", {
                urlSelector: currentSite,
                codeSelector: _ => document.getElementById("hinban")?.textContent
            });
            check(Target.Scene, ".x-itemBox", {
                observe: true,
                displaySelector: e => e.querySelector(".x-itemBox-title"),
                urlSelector: e => e.querySelector("a")?.href,
                prepareUrl: url => url.split("&")[0],
                titleSelector: e => e.querySelector("a")?.title
            });
            check(Target.Performer, "#avidolDetails", {
                urlSelector: currentSite,
                prepareUrl: url => url.split(/[?&]/)[0],
                nameSelector: e => e.querySelector(".photo img")?.getAttribute("alt") ?? firstText(e)
            });
            check(Target.Performer, "a[href^='/idol/detail/'][href$='/']", {observe: true});
            break;
        }
        case "xslist.org": {
            check(Target.Performer, "span[itemprop='name']", {urlSelector: currentSite});
            check(Target.Performer, "a[href*='/model/']");
            check(Target.Scene, "table#movices td > strong", {
                urlSelector: null,
                codeSelector: e => e.textContent?.trim(),
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
                    let first = xpath.iterateNext()?.textContent
                    let second = xpath.iterateNext()?.textContent
                    return (first && second) ? first + second : first
                },
            });
            if (window.location.pathname.startsWith("/v/")) {
                check(Target.Scene, "a[href^='/v/'] > .video-number", {
                    titleSelector: e => e.parentElement?.title?.trim(),
                    codeSelector: e => e.textContent?.trim(),
                })
            } else {
                check(Target.Scene, "a[href^='/v/'] > .video-title", {
                    titleSelector: e => e.parentElement?.title?.trim(),
                    codeSelector: e => e.querySelector("strong")?.textContent?.trim(),
                })
            }
            break;
        }
        case "theporndb.net": {
            let stashIdSelector = (_: Element) => document.querySelector("div[name='UUID'] > div > div.flex")?.textContent?.trim();
            // Alternative endpoint url. Query both the default and this one.
            let stashIdEndpoint = "https://api.theporndb.net/graphql";
            check(Target.Performer, "div.pl-4 > h2", {
                observe: true,
                displaySelector: e => window.location.pathname.startsWith("/performers/") ? e : null,
                urlSelector: currentSite,
                stashIdSelector
            });
            check(Target.Performer, "div.pl-4 > h2", {
                observe: true,
                displaySelector: e => window.location.pathname.startsWith("/performers/") ? e : null,
                urlSelector: null,
                nameSelector: null,
                stashIdSelector,
                stashIdEndpoint
            });
            check(Target.Scene, "div.flex.justify-between > h2", {
                observe: true,
                displaySelector: e => window.location.pathname.startsWith("/scenes/") || window.location.pathname.startsWith("/jav/") ? e : null,
                urlSelector: currentSite,
                stashIdSelector
            });
            check(Target.Scene, "div.flex.justify-between > h2", {
                observe: true,
                displaySelector: e => window.location.pathname.startsWith("/scenes/") || window.location.pathname.startsWith("/jav/") ? e : null,
                urlSelector: null,
                titleSelector: null,
                stashIdSelector,
                stashIdEndpoint
            });
            check(Target.Movie, "div.flex.justify-between > h2", {
                observe: true,
                displaySelector: e => window.location.pathname.startsWith("/movies/") ? e : null,
                urlSelector: currentSite,
                stashIdSelector
            });
            check(Target.Movie, "div.flex.justify-between > h2", {
                observe: true,
                displaySelector: e => window.location.pathname.startsWith("/movies/") ? e : null,
                urlSelector: null,
                nameSelector: null,
                stashIdSelector,
                stashIdEndpoint
            });
            check(Target.Performer, "a[href^='https://theporndb.net/performers/']", {observe: true});
            check(Target.Scene, "a[href^='https://theporndb.net/scenes/'], a[href^='https://theporndb.net/jav/']", {observe: true});
            check(Target.Movie, "a[href^='https://theporndb.net/movies/']", {observe: true});
            break;
        }
        case "www.javlibrary.com": {
            check(Target.Scene, "div[id='video_title']", {
                urlSelector: currentSite,
                prepareUrl: url => url.replace("videoreviews.php", "").replace(/&.*$/, ""),
                codeSelector: _ => document.querySelector("div[id='video_id'] td.text")?.textContent?.trim(),
                titleSelector: _ => document.querySelector("div[id='video_id'] td.text")?.textContent?.trim(),
            });
            // generic video links
            check(Target.Scene, ".video a[href^='./?v=jav']", {
                prepareUrl: url => url.replace(/&.*$/, ""),
                codeSelector: e => e.querySelector("div.id")?.textContent?.trim(),
            });
            // best reviews
            check(Target.Scene, ".comment strong > a[href^='videoreviews.php?v=jav']", {
                prepareUrl: url => url.replace("videoreviews.php", "").replace(/&.*$/, ""),
                codeSelector: e => firstText(e)?.split(" ")[0],
                titleSelector: e => firstText(e)?.split(" ")[0],
            });
            break;
        }
        case "r18.dev": {
            check(Target.Scene, "#video-info > #title", {
                observe: true,
                urlSelector: currentSite,
                codeSelector: _ => firstText(document.querySelector("#dvd-id")),
            });
            check(Target.Scene, ".video-label > a[href*='/movies/detail/']", {
                observe: true,
                codeSelector: firstText,
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
            check(Target.Performer, "a.modelLink[href^='https://www.indexxx.com/m/'] > span");
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
                    displaySelector: e => e.parentElement?.querySelector("div"),
                    nameSelector: e => e.getAttribute("title")
                })
            }
            break;
        }
        case "www.adultfilmdatabase.com": {
            check(Target.Performer, "h1.w3-opacity", {
                displaySelector: e => window.location.pathname.startsWith("/actor/") ? e : null,
                urlSelector: currentSite
            });
            check(Target.Scene, "h1[itemprop='name']", {urlSelector: currentSite});
            check(Target.Studio, "h1.w3-opacity", {
                displaySelector: e => window.location.pathname.startsWith("/studio/") ? e : null,
                urlSelector: currentSite
            });
            check(Target.Studio, "a[href^='/studio/']", {observe: true});
            check(Target.Performer, "a[href^='/actor/']", {
                observe: true,
                displaySelector: e => firstText(e) === "as performer" ? null : e
            });
            check(Target.Scene, "a[href^='/video/']", {
                observe: true,
                titleSelector: e => e.getAttribute("title")?.trim() ?? firstText(e)
            });
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
                nameSelector: e => firstText(e)?.replace(/\([^()]*\)$/, "")?.trimEnd()
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
        case "pmvhaven.com": {
            check(Target.Scene, "h1.pl-2", {
                observe: true,
                displaySelector: e => window.location.pathname.startsWith("/video/") ? e : null,
                urlSelector: currentSite
            });
            check(Target.Scene, "a[href^='/video/'] .v-card-text", {observe: true,});
            check(Target.Studio, ".v-card-title", {
                observe: true,
                displaySelector: e => window.location.pathname.startsWith("/creator/") ? e : null,
                urlSelector: currentSite
            });
            check(Target.Studio, "a[href^='/creator/'] .v-chip__content", {observe: true,});
            break;
        }
        case "fansdb.cc":
        case "fansdb.xyz":
        case "pmvstash.org":
        case "stashdb.org": {
            // These buttons are only visible with edit permissions.
            let exclude = ":not(a[href$='/add']):not(a[href$='/edit']):not(a[href$='/merge']):not(a[href$='/delete'])";
            let stashBoxDefault: CheckOptions = {
                observe: true,
                urlSelector: null,
                titleSelector: null,
                nameSelector: null
            }
            // noinspection Annotator
            function findId(string?: string): undefined | string {
                return string?.match(/\p{Hex}{8}-\p{Hex}{4}-\p{Hex}{4}-\p{Hex}{4}-\p{Hex}{12}/u)?.[0]
            }

            check(Target.Scene, "div.scene-info.card h3 > span", {
                ...stashBoxDefault,
                stashIdSelector: () => findId(window.location.href),
            });
            check(Target.Scene, `a[href^='/scenes/']${exclude}, a[href^='https://${window.location.host}/scenes/']${exclude}`, {
                ...stashBoxDefault,
                stashIdSelector: (e) => findId(e.closest("a")?.href),
            });
            check(Target.Performer, "div.PerformerInfo div.card-header h3 > span", {
                ...stashBoxDefault,
                stashIdSelector: () => findId(window.location.href),
            });
            check(Target.Performer, `a[href^='/performers/']${exclude}, a[href^='https://${window.location.host}/performers/']${exclude}`, {
                ...stashBoxDefault,
                stashIdSelector: (e) => findId(e.closest("a")?.href),
            });
            check(Target.Studio, ".studio-title > h3 > span", {
                ...stashBoxDefault,
                stashIdSelector: () => findId(window.location.href),
            });
            check(Target.Studio, `a[href^='/studios/']${exclude}, a[href^='https://${window.location.host}/studios/']${exclude}`, {
                ...stashBoxDefault,
                stashIdSelector: (e) => findId(e.closest("a")?.href),
            });
            // Tag by StashId isn't supported by Stash yet
            /*check(Target.Tag, ".MainContent > .NarrowPage h3 > span", {
                ...stashBoxDefault,
                displaySelector: e => window.location.pathname.startsWith("/tags/") ? e : null,  // only on tag page
                stashIdSelector: () => findId(window.location.href),
            });
            check(Target.Tag, `a[href^='/tags/']${exclude}, a[href^='https://${window.location.host}/tags/']${exclude}`, {
                ...stashBoxDefault,
                displaySelector: e => window.location.pathname === "/tags" ? e : null,  // only on overview page
                stashIdSelector: (e) => findId(e.closest("a")?.href),
            });*/
            break;
        }
        default:
            console.warn("No configuration for website found.");
            break;
    }
}
