import {check} from "./check";
import {CheckOptions, Target} from "./dataTypes";
import {firstText} from "./utils";
import {isSiteBlocked} from "./settings/menu";
import {capitalized} from "./util/stringUtils";

export async function runStashChecker() {
    // Stop, if site block is configured
    if (await isSiteBlocked()) {
        console.info("Userscript is deactivated for this site. Activate in userscript menu.");
        return;
    }

    console.info("Running Stash Checker")
    let currentSite = () => window.location.href
    let closestUrl = (e: Element) => e.closest("a")?.href
    let directChildTextNode = (e: Element | null | undefined) => Array.from(e?.childNodes ?? []).find(n => n.isText())

    switch (window.location.host) {
        case "www.iwara.tv": {
            // TODO translate to graphql filter
            //(d: any) => d.files.some((f: any) => f.path.endsWith("_Source.mp4")) ? "green" : "blue"
            // Video code in the URL
            let codeRegex = /(?<=video\/)([a-zA-Z0-9]+)(?=\/|$)/
            // Cut URL after code off
            let prepareUrl = (url: String | undefined) => {
                let match = url?.match(codeRegex)
                let end = (match?.index && match?.[0]?.length) ? match?.index + match?.[0]?.length : match?.index
                return url?.substring(0, end)
            }

            check(Target.Scene, ".page-video__details > .text--h1", {
                observe: true,
                urlSelector: _ => prepareUrl(currentSite()),
                codeSelector: () => window.location.pathname.match(codeRegex)?.[0]
            });
            check(Target.Scene, "a.videoTeaser__title", {
                observe: true,
                urlSelector: e => prepareUrl(closestUrl(e)),
                codeSelector: (e: Element) => e.getAttribute("href")?.match(codeRegex)?.[0]
            });
            break;
        }
        case "oreno3d.com": {
            //(d: any) => d.files.some((f: any) => f.path.endsWith("_Source.mp4")) ? "green" : "blue"
            check(Target.Scene, "h1.video-h1", {urlSelector: currentSite, titleSelector: null});
            check(Target.Scene, "a h2.box-h2", {titleSelector: null});
            break;
        }
        case "erommdtube.com": {
            //(d: any) => d.files.some((f: any) => f.path.endsWith("_Source.mp4")) ? "green" : "blue"
            check(Target.Scene, "h1.show__h1", {urlSelector: currentSite, titleSelector: null});
            check(Target.Scene, "h2.main__list-title", {titleSelector: null});
            break;
        }
        case "coomer.st":
        case "kemono.cr": {
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
        case "duga.jp": {
            if (window.location.pathname.startsWith("/ppv/") || window.location.pathname.startsWith("/month/")) {
                check(Target.Scene, "#contentsname.title", {
                    urlSelector: _ => currentSite().replace("/month/", "/ppv/"),
                    codeSelector: _ => document.querySelector("[itemprop='mpn']")?.textContent
                });
                check(Target.Studio, ".maintitle.multiple", {urlSelector: currentSite});
            } else if (window.location.pathname.startsWith("/search/=/performerid=")) {
                check(Target.Performer, ".performerdetail .name", {
                    urlSelector: currentSite,
                });
            }
            let displaySelector = (e: Element) => directChildTextNode(e.querySelector(".title"))
            let titleSelector = (e: Element) => directChildTextNode(e)?.textContent
            let sceneSelector = ".contentslist > a[href*='/ppv/'], .contentslist > a[href*='/month/'], .monthlylist > a[href*='/month/'], .sidemenu > a[href*='/ppv/']"

            check(Target.Scene, sceneSelector, {observe: true, urlSelector: e => e.closest("a")?.href?.replace("/month/", "/ppv/"), displaySelector: displaySelector, titleSelector: titleSelector});
            check(Target.Performer, ".sidemenu.actress > a[href*='/search/=/performerid=']", {observe: true, displaySelector: displaySelector, nameSelector: titleSelector});
            check(Target.Group, ".serieslist > a[href*='/search/=/seriesid=']", {observe: true, displaySelector: displaySelector, nameSelector: titleSelector});
            check(Target.Studio, ".newlabel a[href*='/ppv/']", {
                observe: true,
                displaySelector: e => directChildTextNode(e.querySelector("span")),
                nameSelector: e => directChildTextNode(e.querySelector("span"))?.textContent
            });
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
                urlSelector: e => e.querySelector("a")?.href?.substringBefore("&"),
                titleSelector: e => e.querySelector("a")?.title
            });
            check(Target.Performer, "#avidolDetails", {
                urlSelector: _ => currentSite().split(/[?&]/)[0],
                nameSelector: e => e.querySelector(".photo img")?.getAttribute("alt") ?? firstText(e)
            });
            check(Target.Performer, "a[href^='/idol/detail/'][href$='/']", {observe: true});
            break;
        }
        case "xslist.org": {
            check(Target.Performer, "span[itemprop='name']", {urlSelector: currentSite});
            check(Target.Performer, "a[href*='/model/']");
            check(Target.Scene, "table#movices > tbody > tr", {
                urlSelector: null,
                codeSelector: e => e.querySelector("td:nth-child(1) > strong")?.textContent?.trim(),
                titleSelector: e => e.querySelector("td:nth-child(2)")?.textContent?.trim(),
            });
            break;
        }
        case "warashi-asian-pornstars.fr": {
            let nameSelector = (e: Element) => e.allTextRecursive()
                .flatMap(s => s.split(" "))
                .map(s => s.trim())
                .filter(s => !s.isEmpty() && !s.hasKanji() && !s.hasKana())
                .map(s => capitalized(s))
                .join(" ");

            check(Target.Performer, "#pornostar-profil [itemprop='name']", {urlSelector: currentSite, nameSelector});
            check(Target.Performer, "figcaption a[href*='/s-2-0/'], figcaption a[href*='/s-3-0/']", {
                displaySelector: e => Array(null, "(read more)", "(lire la suite)").includes(e.textContent) ? null : e,
                nameSelector
            });
            break;
        }
        case "www.animecharactersdatabase.com":
            check(Target.Performer, "a[href*='characters.php']:not([href*='_']):not([href*='series'])");
            break;
        case "www.iafd.com": {
            if (window.location.pathname.startsWith("/person.rme/id=")) {
                check(Target.Performer, "h1", {urlSelector: currentSite});
            } else if (window.location.pathname.startsWith("/title.rme/id=")) {
                check(Target.Scene, "h1", {urlSelector: currentSite});
            }
            check(Target.Performer, "a[href*='/person.rme/id=']");
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
            check(Target.Group, "div.flex.justify-between > h2", {
                observe: true,
                displaySelector: e => window.location.pathname.startsWith("/movies/") ? e : null,
                urlSelector: currentSite,
                stashIdSelector
            });
            check(Target.Group, "div.flex.justify-between > h2", {
                observe: true,
                displaySelector: e => window.location.pathname.startsWith("/movies/") ? e : null,
                urlSelector: null,
                nameSelector: null,
                stashIdSelector,
                stashIdEndpoint
            });
            check(Target.Performer, "a[href^='https://theporndb.net/performers/']", {observe: true});
            check(Target.Scene, "a[href^='https://theporndb.net/scenes/'], a[href^='https://theporndb.net/jav/']", {observe: true});
            check(Target.Group, "a[href^='https://theporndb.net/movies/']", {observe: true});
            break;
        }
        case "www.javlibrary.com": {
            let searchParams = new URLSearchParams(window.location.search)
            check(Target.Scene, "div#video_title", {
                urlSelector: _ => currentSite().replace(/videoreviews\.php.*$/, searchParams.get("v") + ".html"),
                codeSelector: _ => document.querySelector("div#video_id td.text")?.textContent?.trim(),
                titleSelector: e => firstText(e)?.substringAfter(" "),
            });
            if (searchParams.has("list")) {
                // list view
                check(Target.Scene, ".video a[href^='./jav'], .title a[href^='./jav']", {
                    observe: true,
                    urlSelector: e => closestUrl(e)?.substringBefore("&"),
                    codeSelector: e => e.getAttribute("title")?.substringBefore(" "),
                    titleSelector: e => e.getAttribute("title")?.substringAfter(" "),
                });
            } else {
                // thumbnail view
                check(Target.Scene, ".video a[href^='./jav']", {
                    observe: true,
                    urlSelector: e => closestUrl(e)?.substringBefore("&"),
                    codeSelector: e => e.querySelector("div.id")?.textContent?.trim(),
                    titleSelector: e => e.querySelector("div.title")?.textContent?.trim() ?? firstText(e),
                });
            }
            // best reviews
            check(Target.Scene, ".comment strong > a[href^='videoreviews.php?v=jav']", {
                urlSelector: e => {
                    let url = closestUrl(e)
                    let page = new URLSearchParams(url?.substringAfter("?")).get("v") + ".html"
                    return url?.replace(/videoreviews\.php.*$/, page)
                },
                codeSelector: e => firstText(e)?.substringBefore(" "),
                titleSelector: e => firstText(e)?.substringAfter(" "),
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
        case "www.manyvids.com": {
            check(Target.Studio, "[class^='ProfileAboutMeUI_stageName_']", {
                observe: true,
                urlSelector: currentSite,
            });
            check(Target.Studio, "[class^='VideoProfileCard_actions_'] a[href^='/Profile/'], [class^='CardCreatorHeaderUI_creatorInfo_'] a[href^='/Profile/']", {
                observe: true,
                urlSelector: e => closestUrl(e)?.replace(/Store\/Videos$/, ""),
            });
            check(Target.Scene, "h1[class^='VideoMetaInfo_title_']", {
                observe: true,
                urlSelector: currentSite,
                codeSelector: _ => window.location.pathname.split("/")[2]
            });
            check(Target.Scene, "[class^='VideoCardUI_videoTitle_'] a[href^='/Video/']", {
                observe: true,
                codeSelector: e => e.getAttribute("href")?.split("/")?.[2]
            });
            break;
        }
        case "www.minnano-av.com": {
            if (/actress\d{1,6}/.test(window.location.pathname)) {
                check(Target.Performer, "h1", {
                    urlSelector: _ => currentSite().substringBefore("?"),
                });
            }
            check(Target.Performer, "a[href*='actress']:not([href*='list']):not([href*='.php']):not([href*='http'])", {
                urlSelector: e => closestUrl(e)?.substringBefore("?"),
            });
            break;
        }
        case "fc2ppvdb.com": {
            let prefix = "FC2-PPV-";
            if (/articles\//.test(window.location.pathname)) {
                check(Target.Scene, "main h2.title-font", {
                    observe: true,
                    codeSelector: _ => `${prefix}${window.location.pathname.substringAfter("articles/")}`,
                    urlSelector: _ => currentSite(),
                });
                check(Target.Studio, "main h2.title-font ~ div a[href*='writers/']", {observe: true});
                check(Target.Performer, "main h2.title-font ~ div a[href*='actresses/']", {observe: true});
            }
            check(Target.Scene, "a[href*='articles/'][title]", {
                observe: true,
                codeSelector: e => `${prefix}${e.getAttribute("href")?.substringAfter("articles/")}`,
            });
            check(Target.Studio, "a[href*='writers/'][title]", {observe: true});
            check(Target.Performer, "a[href*='actresses/'][title]", {observe: true});
            break;
        }
        case 'www.avbase.net': {
            check(Target.Performer, "a[href*='/talents/']:not([href*='on_sale']):not([href*='page='])", {observe: true});
            check(Target.Scene, "div:not(.bg-base-100) > a[href*='/works/']:not([href*='/works/date']):not([href*='/edit'])", {
                observe: true,
                codeSelector: e => e.getAttribute("href")?.substringAfter(":") || e.getAttribute("href")?.substringAfter("works/"),
            });
            check(Target.Studio, "a[href*='/makers/']:not([href*='page='])", {observe: true});
            check(Target.Studio, "a[href*='/labels/']:not([href*='page='])", {observe: true});
            check(Target.Group, "a[href*='/series/']:not([href*='page='])", {observe: true});
            if (/talents\//.test(window.location.pathname)) {
                check(Target.Performer, "h1:first-child", {observe: true})
            }
            if (/works\//.test(window.location.pathname)) {
                check(Target.Scene, "h1:first-child", {
                    observe: true,
                    codeSelector: _ => currentSite().substringAfter("works/")?.substringAfter(":") || currentSite().substringAfter("works/"),
                })
            }
            if (/makers\/|labels\//.test(window.location.pathname)) {
                check(Target.Studio, "h1:first-child", {observe: true})
            }
            if (/series\//.test(window.location.pathname)) {
                check(Target.Group, "h1:first-child", {observe: true})
            }
            break;
        }
        case "www.indexxx.com": {
            check(Target.Performer, "h1[id='model-name']", {urlSelector: currentSite});
            check(Target.Performer, "a[class^='modelLink'][href*='/m/'] > span", {observe: true});
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
            check(Target.Group, "a[href^='https://www.data18.com/movies/']:not([href*='#']):not([href$='/movies/series']):not([href$='/movies/showcases'])", {
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
        case "www.brazzers.com": {
            check(Target.Scene, "h2[class='sc-1b6bgon-3 iTXrhy font-secondary']", {
                observe: true,
                urlSelector: currentSite
            });
            check(Target.Scene, "a[href*='/video/'", {observe: true});
            check(Target.Performer, "h2[class='sc-ebvhsz-1 fLnSSs font-secondary']", {
                observe: true,
                urlSelector: currentSite
            });
            check(Target.Performer, "a[href*='/pornstar/'", {observe: true});
            break;
        }
        case "hobby.porn": {
            check(Target.Performer, "a[href*='/model/']:not([href*='modelInfo'])", {
                urlSelector: e => closestUrl(e)?.match(/\/model\/[^\/]+\/\d+$/)?.[0],
                nameSelector: e => firstText(e)?.replace("porn", "")?.replace("videos", "")?.trim()
            });
            check(Target.Performer, "h1", { nameSelector: e => firstText(e)?.replace("Free Amateur Porn - Hobby.porn", "").substringBefore("porn videos")?.trim()});
            check(Target.Performer, "#tab_info > div.model-info > div > b");
            check(Target.Scene, "h1[itemprop='name']", { urlSelector: currentSite });
            check(Target.Scene, "div[class*='item item-video item-lozad'] a[href*='hobby.porn/video/'] div.title-holder", { observe: true });
            break;
        }
        case "www.pornhub.com": {
            check(Target.Performer, "[class*='pcVideoListItem'] a[href*='/model/'], [class*='pcVideoListItem'] a[href*='/pornstar/']");
            check(Target.Performer, "h1[itemprop='name']", { urlSelector: currentSite });
            check(Target.Performer, "span.pornStarName.performerCardName, div.userCardNameBlock, span.usernameBadgesWrapper");
            check(Target.Performer, "div.modelVideosTitle, div.subHeaderOverrite > h2", {
                urlSelector: currentSite,
                nameSelector: e => firstText(e)?.substringBefore("'s")?.trim()
            });
            check(Target.Studio, "[class*='pcVideoListItem'] a[href*='/channels/']");
            check(Target.Studio, "[id='channelsProfile'] h1", { urlSelector: currentSite });
            check(Target.Scene, "div.videoUList span.title a[href*='/view_video.php?viewkey=']", { observe: true });
            check(Target.Scene, "h1.title", { urlSelector: currentSite })
            check(Target.Scene, "[class*='pcVideoListItem'] span.title a[href*='/view_video.php?viewkey=']", { observe: true })
            break;
        }
        case "www.clips4sale.com": {
            let hrefStudio = "[href^='/studio/']";
            check(Target.Studio, "h1[data-testid*='studio-title']", {urlSelector: currentSite});
            check(Target.Studio, `a[data-testid*='studio-link']${hrefStudio}, a[data-testid*='clip-page-clipCategory']${hrefStudio}`, {urlSelector: e => closestUrl(e)?.substringBefore("/Cat")});
            check(Target.Studio, `a[data-testid*='clip-category-link']${hrefStudio}, a[data-testid*='clip-studio']${hrefStudio}, a[data-testid*='studioAnchor']${hrefStudio}, div[data-testid*='categoryTopStores'] a${hrefStudio}`, {
                observe: true,
                urlSelector: e => closestUrl(e)?.substringBefore("/Cat")
            });
            if (window.location.pathname.startsWith("/clips/page/studios")) {
                check(Target.Studio, `a${hrefStudio}`, {observe: true});
            }
            check(Target.Scene, "h1[data-testid*='clip-page-clipTitle']", {urlSelector: currentSite});
            check(Target.Scene, `a[data-testid*='clip-link']${hrefStudio}, a[data-testid*='clipCard-titleAnchor']${hrefStudio}`, {observe: true});
            break;
        }
        case "www.babepedia.com": {
            check(Target.Performer, "h1#babename", {urlSelector: currentSite});
            check(Target.Performer, "a[href*='/babe/']", {observe: true});
            break;
        }
        case "www.freeones.com": {
            check(Target.Performer, "a[href$='/feed'] [data-test='subject-name'], a[href$='/feed'] .profile-image + p", {
                urlSelector: e => closestUrl(e)?.replace(/\/feed$/, "").replace(/\/[a-z]{2}\//, "/")
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
        case "fansly.com": {
            check(Target.Performer, "a.username-wrapper > div > span.display-name", {observe: true, urlSelector: currentSite});
            check(Target.Performer, "a.username-wrapper > div > span.user-name", {
                urlSelector: _ => currentSite().replace("/^@/", "")
        });
            break;
        }
        case "www.slayed.com":
        case "www.blacked.com":
        case "www.tushy.com":
        case "www.vixen.com":
        case "www.blackedraw.com":
        case "www.tushyraw.com":
        case "www.deeper.com":
        case "www.milfy.com":
        case "www.wifey.com":{
            check(Target.Scene, 'a[data-test-component="TitleLink"]', {observe: true});
            check(Target.Scene, 'h1[data-test-component="VideoTitle"]', {observe: true});
            check(Target.Performer, "a[href*='/performers/']", {observe: true});
            break;
        }
        case "www.angelslove.xxx":
        case "www.sensuallove.xxx":
        case "www.wowgirlsblog.com":
        case "www.ultrafilms.xxx":
        case "www.18onlygirlsblog.com": {
            check(Target.Scene, "article a header span");
            check(Target.Performer, "a[href*='/actor/']");
            break;
        }
        case "www.metart.com":
        case "www.metartx.com":
        case "www.sexart.com":
        case "www.vivthomas.com":
        case "www.thelifeerotic.com":
        case "www.straplez.com":
        case "www.errotica-archives.com":
        case "www.domai.com":
        case "www.goddessnudes.com":
        case "www.eroticbeauty.com":
        case "www.lovehairy.com":
        case "www.alsscan.com":
        case "www.rylskyart.com":
        case "www.eternaldesire.com": {
            check(Target.Scene, "a[href*='/movie']:not(.tab)", {observe: true});
            check(Target.Gallery, "a[href*='/gallery/']:not(.page-button)", {observe: true});
            check(Target.Performer, "a[href*='/model/']:not([href*='/movie']):not([href*='/gallery/']):not(.page-button):not(.tab)", {observe: true});
            break;
        }
        case "www.hegre.com": {
            check(Target.Scene, "a.playable:not(.artwork)[href*='/films/']", {
                observe: true,
                displaySelector: (e: Element) => Array.from(e.querySelector('h4')?.childNodes ?? []).find(n => n.nodeType === Node.TEXT_NODE && n.textContent?.trim()) as Element | undefined
            });
            check(Target.Gallery, "a[href*='/photos/']", {observe: true});
            check(Target.Performer, "a[href*='/models/']:not(.filter):not([href*='#'])", {observe: true});
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
                check(Target.Group, "[id='data'] h1", {urlSelector: currentSite});
            }
            check(Target.Performer, "a[href*='performer/']", {observe: true});
            check(Target.Scene, "a[href*='episode/']", {observe: true});
            check(Target.Group, "a[href*='video/']", {observe: true});
            break;
        }
        case "pmvhaven.com": {
            check(Target.Scene, "h1.pl-2", {
                observe: true,
                displaySelector: e => window.location.pathname.startsWith("/video/") ? e : null,
                urlSelector: currentSite
            });
            check(Target.Scene, "a[href^='/video/'] .v-card-text", {observe: true});
            check(Target.Studio, ".v-card-title", {
                observe: true,
                displaySelector: e => window.location.pathname.startsWith("/creator/") ? e : null,
                urlSelector: currentSite
            });
            check(Target.Studio, "a[href^='/creator/'] .v-chip__content", {observe: true});
            break;
        }
        case "fansdb.cc":
        case "fansdb.xyz":
        case "javstash.org":
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
                stashIdSelector: () => findId(currentSite()),
            });
            check(Target.Scene, `a[href^='/scenes/']${exclude}, a[href^='https://${currentSite()}/scenes/']${exclude}`, {
                ...stashBoxDefault,
                stashIdSelector: (e) => findId(closestUrl(e)),
            });
            check(Target.Performer, "div.PerformerInfo div.card-header h3 > span", {
                ...stashBoxDefault,
                stashIdSelector: () => findId(currentSite()),
            });
            check(Target.Performer, `a[href^='/performers/']${exclude}, a[href^='https://${currentSite()}/performers/']${exclude}`, {
                ...stashBoxDefault,
                stashIdSelector: (e) => findId(closestUrl(e)),
            });
            check(Target.Studio, ".studio-title > h3 > span", {
                ...stashBoxDefault,
                stashIdSelector: () => findId(currentSite()),
            });
            check(Target.Studio, `a[href^='/studios/']${exclude}, a[href^='https://${currentSite()}/studios/']${exclude}`, {
                ...stashBoxDefault,
                stashIdSelector: (e) => findId(closestUrl(e)),
            });
            check(Target.Tag, ".MainContent > .NarrowPage h3 > span", {
                ...stashBoxDefault,
                displaySelector: e => window.location.pathname.startsWith("/tags/") ? e : null,  // only on tag page
                stashIdSelector: () => findId(currentSite()),
            });
            check(Target.Tag, `a[href^='/tags/']${exclude}, a[href^='https://${currentSite()}/tags/']${exclude}`, {
                ...stashBoxDefault,
                displaySelector: e => window.location.pathname === "/tags" ? e : null,  // only on overview page
                stashIdSelector: (e) => findId(closestUrl(e)),
            });
            break;
        }
        default:
            console.warn("No configuration for website found.");
            break;
    }
}
