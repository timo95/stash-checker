// ==UserScript==
// @name          Stash Checker
// @name:en       Stash Checker
// @description   Add checkmarks to scenes/performers present in your stash
// @version       0.0.1
// @author        timo95 <24251362+timo95@users.noreply.github.com>
// @source        https://github.com/timo95/stash-checker
// @match         *://oreno3d.com/*
// @match         *://www.animecharactersdatabase.com/*
// @match         *://www.iafd.com/*
// @match         *://www.minnano-av.com/*
// @match         *://xslist.org/*
// @match         *://www.javlibrary.com/*
// @require       https://cdn.jsdelivr.net/npm/jquery@^3.6.1/dist/jquery.min.js
// @grant         GM.xmlHttpRequest
// @grant         GM.getValue
// @grant         GM.setValue
// @connect       stash.tiemada.de
// @connect       stash.rock-5b.lan
// @run-at        document-end
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/main.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".stashCheckerPopup {\n  z-index: 999 !important;\n  position: absolute !important;\n  text-align: left !important;\n  background-color: white !important;\n  border: 0.1em solid black !important;\n  border-radius: 0.5em !important;\n  padding: 0.5em !important;\n  margin-top: -0.5em !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/main.less
var main = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/main.less");
;// CONCATENATED MODULE: ./src/style/main.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(main/* default */.Z, options);




       /* harmony default export */ const style_main = (main/* default */.Z && main/* default.locals */.Z.locals ? main/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/symbol.ts
let handle;
let popup = document.createElement("div");
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
/**
 * recursive (dfs) first non empty text node child, undefined if none available
 */
function firstTextChild(node) {
    if (node.nodeType === document.TEXT_NODE &&
        node.textContent.match(/^\s*$/) === null) {
        return node;
    }
    else {
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
function prefixSymbol(element, data, color) {
    let span = document.createElement("span");
    let count = data.length;
    let info = "";
    if (count === 1) {
        span.innerText = "✓ ";
        info += "URL in Stash:\n\n";
        span.style.color = color(data[0]);
    }
    else if (count === 0) {
        span.innerText = "✗ ";
        span.style.color = "red";
        info += "URL not in Stash";
    }
    else {
        span.innerText = "! ";
        span.style.color = "orange";
        console.log(data);
        info += "URL has multiple matches:\n\n";
    }
    info += data
        .map((e) => [
        [e.title, `Title: ${e.title}`],
        [e.code, `Code: ${e.code}`],
        [
            e.files,
            `Files:\n${e.files.map((f) => `Path: ${f.path}`).join("\n")}`,
        ],
        [e.name, `Name: ${e.name}`],
    ]
        .filter((e) => e[0])
        .map((e) => e[1])
        .join("\n"))
        .join("\n\n");
    span.addEventListener("mouseover", function () {
        window.clearTimeout(handle);
        let pos = span.getBoundingClientRect();
        popup.innerText = info;
        popup.style.display = "";
        popup.style.top = `${(pos.top -
            popup.clientHeight +
            window.scrollY).toFixed(0)}px`;
        popup.style.left = `${(pos.left +
            pos.width / 2 -
            popup.clientWidth / 2 +
            window.scrollX).toFixed(0)}px`;
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

;// CONCATENATED MODULE: ./src/index.ts


let stash = "http://stash.rock-5b.lan"; //"https://stash.tiemada.de"
let apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ0aW1vIiwiaWF0IjoxNjQxOTIyNzE1LCJzdWIiOiJBUElLZXkifQ.K29zkH-0KDg1VNf-r-A71pIsBvBubRjjMUHUEkUSmHU";
function request(queryString, onload, type) {
    let query = "";
    let access = (d) => d;
    switch (type) {
        case "sceneUrl":
            queryString = encodeURIComponent(queryString);
            query = `{findScenes(scene_filter:{url:{value:"${queryString}",modifier:EQUALS}}){scenes{title,code,files{path}}}}`;
            access = (d) => d.findScenes.scenes;
            break;
        case "performerUrl":
            queryString = encodeURIComponent(queryString);
            query = `{findPerformers(performer_filter:{url:{value:"${queryString}",modifier:EQUALS}}){performers{name}}}`;
            access = (d) => d.findPerformers.performers;
            break;
        case "sceneCode":
            query = `{findScenes(scene_filter:{code:{value:"${queryString}",modifier:EQUALS}}){scenes{title,code,files{path}}}}`;
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
            }
            catch (e) {
                console.log("Failed to parse response: " + response.responseText);
                console.log("Exception: " + e);
            }
        },
    });
}
function checkElement(type, element, { checkUrl = true, prepareUrl = (url) => url, urlSelector, codeSelector, color = () => "green", }) {
    if (checkUrl) {
        let url = urlSelector(element);
        url = prepareUrl(url);
        if (url) {
            console.log(url);
            request(url, (data) => prefixSymbol(element, data, color), type + "Url");
        }
        else {
            console.log("No URL for entry found");
        }
    }
    if (codeSelector) {
        let code = codeSelector(element);
        if (code) {
            console.log(code);
            request(code, (data) => prefixSymbol(element, data, color), type + "Code");
        }
        else {
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
function check(type, elementSelector, { currentSite = false, ...checkConfig } = {}) {
    if (currentSite) {
        let element = document.querySelector(elementSelector);
        if (element) {
            // url of current site
            checkConfig.urlSelector ?? (checkConfig.urlSelector = () => decodeURI(window.location.href));
            checkElement(type, element, checkConfig);
        }
    }
    else {
        // multiple entries with url nearest to element
        document.querySelectorAll(elementSelector).forEach((element) => {
            // url nearest to selected element traversing towards the root (children are ignored)
            checkConfig.urlSelector ?? (checkConfig.urlSelector = (e) => decodeURI(e.closest("a").href));
            checkElement(type, element, checkConfig);
        });
    }
}
(function () {
    switch (window.location.host) {
        case "oreno3d.com":
            check("scene", "h1.video-h1", {
                color: (d) => d.files.some((f) => f.path.endsWith("_Source.mp4"))
                    ? "green"
                    : "blue",
                currentSite: true,
            });
            check("scene", "a h2.box-h2", {
                color: (d) => d.files.some((f) => f.path.endsWith("_Source.mp4"))
                    ? "green"
                    : "blue",
            });
            break;
        case "xslist.org":
            check("performer", "span[itemprop='name']", { currentSite: true });
            check("performer", "a[href*='/model/']");
            break;
        case "www.animecharactersdatabase.com":
            check("performer", "a[href*='characters.php']:not([href*='_']):not([href*='series'])");
            break;
        case "www.iafd.com": {
            let prepareUrl = (url) => {
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
            }
            else if (window.location.pathname.startsWith("/title.rme/title=")) {
                check("scene", "h1", { prepareUrl: prepareUrl, currentSite: true });
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
    }
    // TODO: other websites (iwara, kemono, coomer), stashDB
    // TODO: studio code
    // TODO: pop up information: rating, favorite, length, file information, link to stash
    // TODO: graphical configuration: https://stackoverflow.com/questions/14594346/create-a-config-or-options-page-for-a-greasemonkey-script
    // TODO: using GM_setValue()
    // TODO: GitHub actions -> gist
    // TODO: batch multiple link requests together?
})();

})();

/******/ })()
;