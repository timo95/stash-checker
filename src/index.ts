import "./style/main.less";
import {check} from "./check";

(function () {
    switch (window.location.host) {
        case "www.iwara.tv":
        case "ecchi.iwara.tv": {
            let color = (d: any) => d.files.some((f: any) => f.path.endsWith("_Source.mp4")) ? "green" : "blue"
            check("scene", "h1.title", {color: color, currentSite: true});
            check("scene", "h3.title > a", {color: color});
            break;
        }
        case "oreno3d.com": {
            let color = (d: any) => d.files.some((f: any) => f.path.endsWith("_Source.mp4")) ? "green" : "blue"
            check("scene", "h1.video-h1", {color: color, currentSite: true});
            check("scene", "a h2.box-h2", {color: color});
            break;
        }
        case "erommdtube.com": {
            let color = (d: any) => d.files.some((f: any) => f.path.endsWith("_Source.mp4")) ? "green" : "blue"
            check("scene", "h1.show__h1", {color: color, currentSite: true});
            check("scene", "h2.main__list-title", {color: color});
            break;
        }
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
            break;
        case "nubiles.net":
            check("performer", "a.title[href^='/model/profile/'], a.model[href^='/model/profile/']", {
                prepareUrl: url => url.split(/[?#]/)[0]
            });
            check("scene", ".title > a[href^='/video/watch/']", {
                prepareUrl: url => url.split(/[?#]/)[0]
            });
            check("gallery", "a.title[href^='/photo/gallery/']", {
                prepareUrl: url => url.split(/[?#]/)[0]
            });
            break;
        case "www.animecharactersdatabase.com":
            check("performer", "a[href*='characters.php']:not([href*='_']):not([href*='series'])");
            break;
        case "www.iafd.com": {
            let prepareUrl = (url: string) => {
                // Links on iafd have many variants. Normalize to using "-" and "https"
                let s = url.split("/");
                s.push(s.pop().replaceAll("_", "-"));
                return s.join("/").replace(/^http:/, "https:");
            };
            if (window.location.pathname.startsWith("/person.rme/perfid=")) {
                check("performer", "h1", {prepareUrl: prepareUrl, currentSite: true});
            } else if (window.location.pathname.startsWith("/title.rme/title=")) {
                check("scene", "h1", {prepareUrl: prepareUrl, currentSite: true});
            }
            check("performer", "a[href*='/person.rme/perfid=']", {
                prepareUrl: prepareUrl,
            });
            check("scene", "a[href*='/title.rme/title=']", {
                prepareUrl: prepareUrl,
            });
            break;
        }
        case "www.javlibrary.com":
            // generic links
            check("scene", "a[href*='?v=jav']", {
                prepareUrl: (url) => url.replace("videocomments.php", "").replace(/&.*$/, ""),
                codeSelector: (e) => e.querySelector("div.id")?.textContent?.trim(),
            });
            // code for video page, review
            check("scene", "div[id='video_title'] a[href*='?v=jav']", {
                urlSelector: null,
                codeSelector: (_) => document
                    .querySelector("table[id='video_jacket_info'] table:first-child td.text")
                    .textContent.trim(),
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
                prepareUrl: (url) => url.split("?")[0],
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
            check("scene", "a[href^='https://www.data18.com/scenes/']:not([href*='#'])", {observe: true});
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
        case "stashdb.org":
            check("scene", "div.scene-info.card h3 > span", {
                observe: true,
                currentSite: true,
                urlSelector: null,
                stashIdSelector: () => window.location.href.replace(/^.*\/scenes\//, "").split(/[?#]/)[0],
            });
            check("performer", "div.PerformerInfo div.card-header h3 > span", {
                observe: true,
                currentSite: true,
                urlSelector: null,
                stashIdSelector: () => window.location.href.replace(/^.*\/performers\//, "").split(/[?#]/)[0],
                nameSelector: null,
            });
            check("scene", "a[href*='/scenes/']", {
                observe: true,
                urlSelector: null,
                stashIdSelector: (e) => e.getAttribute("href")?.replace(/^.*\/scenes\//, "")?.split(/[?#]/)[0],
            });
            check("performer", "a[href*='/performers/']", {
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

    // TODO: fix: data18 performers overview
    // TODO: scenes: kemono, coomer, OF, ThePornDB, PH, XVideos
    // TODO: performers: boobpedia.com, www.adultfilmdatabase.com, www.wikidata.org, www.eurobabeindex.com
    // TODO: match confidence levels (StashId - URL - Code - Name - Title)
    // TODO: limit observe to rerun only new additions
    // TODO: movies, pictures
    // TODO: config: do not show cross mark if none found, custom symbols, default colors, options when to show ! instead
    // TODO: limit color functions to work with configurable colors
    // TODO: tooltip information: rating, favorite, resolution, codec
})();
