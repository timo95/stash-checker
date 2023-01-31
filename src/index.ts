import "./style/main.less";
import {check} from "./check";

function hasType(node: Node, nodeType: string): boolean {
    if (node.nodeName.toLowerCase() === nodeType) {
        return true;
    } else {
        return Array.from(node.childNodes).some(n => hasType(n, nodeType))
    }
}

function onAddition(nodeType: string, callback: any) {
    // Run on each type-element addition
    let body = document.querySelector("body");
    let timeout: any = undefined;
    let observer = new MutationObserver((mutations) => {
        let newNode = mutations.map(m => Array.from(m.addedNodes).some(n => hasType(n, nodeType.toLowerCase()))).some(n => n);
        if (newNode) {
            console.log(`A ${nodeType}-element was added. Rerun queries.`);
            clearTimeout(timeout);
            timeout = setTimeout(callback, 200);  // arbitrary delay to prevent too many calls
        } else {
            console.log("No update.");
        }
    });
    observer.observe(body, {childList: true, subtree: true});
}

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
                checkUrl: false,
                codeSelector: (_) => document
                    .querySelector("table[id='video_jacket_info'] table:first-child td.text")
                    .textContent.trim(),
            });
            break;
        case "www.minnano-av.com":
            if (new RegExp("actress\\d{1,6}").test(window.location.pathname)) {
                check("performer", "h1", {
                    prepareUrl: (url) => url.split("?")[0],
                    currentSite: true,
                });
            }
            check("performer", "a[href*='actress']:not([href*='list']):not([href*='.php']):not([href*='http'])", {
                prepareUrl: (url) => url.split("?")[0],
            });
            break;
        case "www.indexxx.com":
            check("performer", "h1[id='model-name']", {currentSite: true})
            check("performer", "a[class*='modelLink'][href*='https://www.indexxx.com/m/'] > span")
            break;
        case "www.data18.com": {
            let callback = () => {
                check("scene", "a[href^='https://www.data18.com/scenes/']:not([href*='#'])")
                check("performer", "a[href^='https://www.data18.com/name/']:not([href*='/pairings']):not([href*='/studio']):not([href*='/virtual-reality']):not([href*='/scenes']):not([href*='/movies']):not([href*='/tags']):not([title$=' Home'])")
            }
            callback();  // initial load is not dynamic
            onAddition("a", callback);
            break;
        }
        case "stashdb.org": {
            let callback = () => {
                check("scene", "div.scene-info.card h3 > span", {
                    currentSite: true,
                    checkUrl: false,
                    stashIdSelector: () => window.location.href.replace(/^.*\/scenes\//, "").split(/[?#]/)[0],
                });
                check("scene", "a[href*='/scenes/']", {
                    checkUrl: false,
                    stashIdSelector: (e) => e.getAttribute("href")?.replace(/^.*\/scenes\//, "").split(/[?#]/)[0],
                });
                check("performer", "div.PerformerInfo div.card-header h3 > span", {
                    currentSite: true,
                    checkUrl: false,
                    stashIdSelector: () => window.location.href.replace(/^.*\/performers\//, "").split(/[?#]/)[0],
                });
                check("performer", "a[href*='/performers/']", {
                    checkUrl: false,
                    stashIdSelector: (e) => e.closest("a")?.getAttribute("href")?.replace(/^.*\/performers\//, "").split(/[?#]/)[0],
                });
            };
            // TODO: currentSite versions without a link (probably fine)
            onAddition("a", callback);
            break;
        }
        default:
            console.log("No configuration for website found.")
            break;
    }

    // TODO: scenes: kemono, coomer, OF, ThePornDB
    // TODO: performers: boobpedia.com, www.adultfilmdatabase.com, www.freeones.com, www.thenude.com, www.wikidata.org, www.babepedia.com, www.eurobabeindex.com
    // TODO: movies, pictures, galleries
    // TODO: make onAddition work with (multiple) css selectors/attributes
    // TODO: config: do not show cross mark if none found, custom symbols, default colors
    // TODO: tooltip information: rating, favorite, resolution
})();
