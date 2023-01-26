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
        default:
            console.log("No configuration for website found.")
            break;
    }

    // TODO: other websites (kemono, coomer), stashDB
    // TODO: pop up information: rating, favorite, length, file information, link to stash
    // TODO: graphical configuration: https://stackoverflow.com/questions/14594346/create-a-config-or-options-page-for-a-greasemonkey-script
    // TODO: using GM_setValue()
    // TODO: batch multiple link requests together?
})();
