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

function request(url: string, onload: (data: any) => any, type: string) {
  url = encodeURIComponent(url);
  let query = "";
  let access = (d: any) => d;
  switch (type) {
    case "scene":
      query = `{findScenes(scene_filter:{url:{value:"${url}",modifier:EQUALS}}){scenes{title,path}}}`;
      access = (d) => d.findScenes.scenes;
      break;
    case "performer":
      query = `{findPerformers(performer_filter:{url:{value:"${url}",modifier:EQUALS}}){performers{name}}}`;
      access = (d) => d.findPerformers.performers;
      break;
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

/**
 * the selected element should be [a child of] the link that will be compared with stash urls
 * the first text inside of the selected element will be prepended with the symbol
 */
function links(
  selector: string,
  type: string,
  {
    prepareUrl = (url) => url,
    color = () => "green",
  }: {
    prepareUrl?: (url: string) => string;
    color?: (data: any) => string;
  } = {}
) {
  document.querySelectorAll(selector).forEach((element) => {
    let url = prepareUrl(decodeURI(element.closest("a").href));
    console.log(url);
    request(url, (data) => prefixSymbol(element, data, color), type);
  });
}

function current(
  selector: string,
  type: string,
  {
    prepareUrl = (url) => url,
    color = () => "green",
  }: {
    prepareUrl?: (url: string) => string;
    color?: (data: any) => string;
  } = {}
) {
  let url = prepareUrl(decodeURI(window.location.href));
  console.log(url);
  let element = document.querySelector(selector);
  if (element) {
    request(url, (data) => prefixSymbol(element, data, color), type);
  }
}

(function () {
  "use strict";

  switch (window.location.host) {
    case "oreno3d.com":
      current("h1.video-h1", "scene", {
        color: (d) => (d.path.endsWith("_Source.mp4") ? "green" : "blue"),
      });
      links("a h2.box-h2", "scene", {
        color: (d) => (d.path.endsWith("_Source.mp4") ? "green" : "blue"),
      });
      break;
    case "xslist.org":
      current("span[itemprop='name']", "performer");
      links("a[href*='/model/']", "performer");
      break;
    case "www.animecharactersdatabase.com":
      links(
        "a[href*='characters.php']:not([href*='_']):not([href*='series'])",
        "performer"
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
          current("h1", "performer", { prepareUrl: prepareUrl });
        } else if (window.location.pathname.startsWith("/title.rme/title=")) {
          current("h1", "scene", { prepareUrl: prepareUrl });
        }
        links("a[href*='/person.rme/perfid=']", "performer", {
          prepareUrl: prepareUrl,
        });
        links("a[href*='/title.rme/title=']", "scene", {
          prepareUrl: prepareUrl,
        });
      }
      break;
    case "www.javlibrary.com":
      links("a[href*='/?v=jav']", "scene");
      break;
    case "www.minnano-av.com":
      if (new RegExp("actress\\d{1,6}").test(window.location.pathname)) {
        current("h1", "performer", { prepareUrl: (url) => url.split("?")[0] });
      }
      links(
        "a[href*='actress']:not([href*='list']):not([href*='.php']):not([href*='http'])",
        "performer",
        { prepareUrl: (url) => url.split("?")[0] }
      );
      break;
    default:
  }

  // TODO: other websites (iwara, kemono, coomer), stashDB
  // TODO: studio code when it is available in stash
  // TODO: pop up information: rating, favorite, length, file information, link to stash
  // TODO: graphical configuration: https://stackoverflow.com/questions/14594346/create-a-config-or-options-page-for-a-greasemonkey-script
  // TODO: using GM_setValue()
  // TODO: IDE? typescript? GitHub?
  // TODO: batch multiple link requests together?
})();
