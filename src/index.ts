import "./style/main.less";

let stash = "http://stash.rock-5b.lan"; //"https://stash.tiemada.de"
let apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ0aW1vIiwiaWF0IjoxNjQxOTIyNzE1LCJzdWIiOiJBUElLZXkifQ.K29zkH-0KDg1VNf-r-A71pIsBvBubRjjMUHUEkUSmHU";

let handle: number;
let popup: HTMLDivElement = document.createElement("div");
popup.style.display = "none";
popup.classList.add("stashCheckerPopup");
popup.addEventListener("mouseover", function () {
  window.clearTimeout(handle);
});
popup.addEventListener("mouseout", function () {
  handle = window.setTimeout(function () {
    popup.style.display = "none";
  }, 500);
});
document.body.append(popup);

interface CheckConfig {
  checkUrl?: boolean;
  urlSelector?: (e: Element) => string;
  prepareUrl?: (url: string) => string;
  codeSelector?: (e: Element) => string;
  color?: (data: any) => string;
  currentSite?: boolean;
}

function request(
  queryString: string,
  onload: (data: any) => any,
  type: string
) {
  let query = "";
  let access = (d: any) => d;
  switch (type) {
    case "sceneUrl":
      queryString = encodeURIComponent(queryString);
      query = `{findScenes(scene_filter:{url:{value:"${queryString}",modifier:EQUALS}}){scenes{title,code,path}}}`;
      access = (d) => d.findScenes.scenes;
      break;
    case "performerUrl":
      queryString = encodeURIComponent(queryString);
      query = `{findPerformers(performer_filter:{url:{value:"${queryString}",modifier:EQUALS}}){performers{name}}}`;
      access = (d) => d.findPerformers.performers;
      break;
    case "sceneCode":
      query = `{findScenes(scene_filter:{code:{value:"${queryString}",modifier:EQUALS}}){scenes{title,code,path}}}`;
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

/**
 * recursive (dfs) first non empty text node child, undefined if none available
 */
function firstTextChild(node: Element): Element {
  if (
    node.nodeType === document.TEXT_NODE &&
    node.textContent.match(/^\s*$/) === null
  ) {
    return node;
  } else {
    return Array.from(node.childNodes)
      .map(firstTextChild)
      .find((n) => n);
  }
}

/**
 * Prepends depending on the data the checkmark or cross to the selected element.
 * Also populates popup window.
 *
 * @param element
 * @param data
 * @param color
 */
function prefixSymbol(
  element: Element,
  data: any,
  color: (data: any) => string
) {
  let span = document.createElement("span");
  let count = data.length;
  let info = "";
  if (count === 1) {
    span.innerText = "✓ ";
    info += "URL in Stash:\n\n";
    span.style.color = color(data[0]);
  } else if (count === 0) {
    span.innerText = "✗ ";
    span.style.color = "red";
    info += "URL not in Stash";
  } else {
    span.innerText = "! ";
    span.style.color = "orange";
    console.log(data);
    info += "URL has multiple matches:\n\n";
  }

  info += data
    .map((e: any) =>
      [
        [e.title, `Title: ${e.title}`],
        [e.code, `Code: ${e.code}`],
        [e.path, `URL: ${e.path}`],
        [e.name, `Name: ${e.name}`],
      ]
        .filter((e) => e[0])
        .map((e) => e[1])
        .join("\n")
    )
    .join("\n\n");

  span.addEventListener("mouseover", function () {
    window.clearTimeout(handle);
    let pos = span.getBoundingClientRect();
    popup.innerText = info;
    popup.style.display = "";
    popup.style.top = `${(
      pos.top -
      popup.clientHeight +
      window.scrollY
    ).toFixed(0)}px`;
    popup.style.left = `${(
      pos.left +
      pos.width / 2 -
      popup.clientWidth / 2 +
      window.scrollX
    ).toFixed(0)}px`;
  });
  span.addEventListener("mouseout", function () {
    handle = window.setTimeout(function () {
      popup.style.display = "none";
    }, 500);
  });

  // prepend before first text because css selectors cannot select text nodes directly
  // it works with cases were non text elements (images) are inside of the selected element
  firstTextChild(element)?.before(span);
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
  }: CheckConfig
) {
  if (checkUrl) {
    let url = urlSelector(element);
    url = prepareUrl(url);
    if (url) {
      console.log(url);
      request(url, (data) => prefixSymbol(element, data, color), type + "Url");
    } else {
      console.log("No URL for entry found");
    }
  }
  if (codeSelector) {
    let code = codeSelector(element);
    if (code) {
      console.log(code);
      request(
        code,
        (data) => prefixSymbol(element, data, color),
        type + "Code"
      );
    } else {
      console.log("No Code for entry found");
    }
  }
  // TODO: merge multiple symbols
  // a: check existing checkmarks and OR (is resilient to multiple check() calls on the same(!) element)
  // b: return data promise for url and code -> OR(data)
}

/**
 * queries for each selected element
 *
 * the selected element should be [a child of] the link that will be compared with stash urls
 * the first text inside of the selected element will be prepended with the symbol
 */
function check(
  type: string,
  elementSelector: string,
  { currentSite = false, ...checkConfig }: CheckConfig = {}
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
      checkConfig.urlSelector ??= (e: Element) =>
        decodeURI(e.closest("a").href);
      checkElement(type, element, checkConfig);
    });
  }
}

(function () {
  switch (window.location.host) {
    case "oreno3d.com":
      check("scene", "h1.video-h1", {
        color: (d) => (d.path.endsWith("_Source.mp4") ? "green" : "blue"),
        currentSite: true,
      });
      check("scene", "a h2.box-h2", {
        color: (d) => (d.path.endsWith("_Source.mp4") ? "green" : "blue"),
      });
      break;
    case "xslist.org":
      check("performer", "span[itemprop='name']", { currentSite: true });
      check("performer", "a[href*='/model/']");
      break;
    case "www.animecharactersdatabase.com":
      check(
        "performer",
        "a[href*='characters.php']:not([href*='_']):not([href*='series'])"
      );
      break;
    case "www.iafd.com":
      {
        let prepareUrl = (url: string) => {
          // Links on iafd have many variants. Normalize to using "-" and "https"
          let s = url.split("/");
          s.push(s.pop().replaceAll("_", "-"));
          return s.join("/").replace(/^http:/, "https:");
        };
        if (window.location.pathname.startsWith("/person.rme/perfid=")) {
          check("performer", "h1", {
            prepareUrl: prepareUrl,
            currentSite: true,
          });
        } else if (window.location.pathname.startsWith("/title.rme/title=")) {
          check("scene", "h1", { prepareUrl: prepareUrl, currentSite: true });
        }
        check("performer", "a[href*='/person.rme/perfid=']", {
          prepareUrl: prepareUrl,
        });
        check("scene", "a[href*='/title.rme/title=']", {
          prepareUrl: prepareUrl,
        });
      }
      break;
    case "www.javlibrary.com":
      // generic links
      check("scene", "a[href*='?v=jav']", {
        prepareUrl: (url) =>
          url.replace("videocomments.php", "").replace(/&.*$/, ""),
        codeSelector: (e) => e.querySelector("div.id")?.textContent?.trim(),
      });
      // code for video page, review
      check("scene", "div[id='video_title'] a[href*='?v=jav']", {
        checkUrl: false,
        codeSelector: (_) =>
          document
            .querySelector(
              "table[id='video_jacket_info'] table:first-child td.text"
            )
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
      check(
        "performer",
        "a[href*='actress']:not([href*='list']):not([href*='.php']):not([href*='http'])",
        { prepareUrl: (url) => url.split("?")[0] }
      );
      break;
    default:
  }

  // TODO: other websites (iwara, kemono, coomer), stashDB
  // TODO: studio code
  // TODO: pop up information: rating, favorite, length, file information, link to stash
  // TODO: graphical configuration: https://stackoverflow.com/questions/14594346/create-a-config-or-options-page-for-a-greasemonkey-script
  // TODO: using GM_setValue()
  // TODO: GitHub actions -> gist
  // TODO: batch multiple link requests together?
})();
