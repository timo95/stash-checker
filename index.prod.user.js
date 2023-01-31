// ==UserScript==
// @name          Stash Checker
// @name:en       Stash Checker
// @description   Add checkmarks to scenes/performers present in your stash
// @icon          https://docs.stashapp.cc/favicon.ico
// @version       0.3.0
// @author        timo95 <24251362+timo95@users.noreply.github.com>
// @match         *://adultanime.dbsearch.net/*
// @match         *://ecchi.iwara.tv/*
// @match         *://erommdtube.com/*
// @match         *://oreno3d.com/*
// @match         *://stashdb.org/*
// @match         *://www.animecharactersdatabase.com/*
// @match         *://www.data18.com/*
// @match         *://www.iafd.com/*
// @match         *://www.indexxx.com/*
// @match         *://www.iwara.tv/*
// @match         *://www.javlibrary.com/*
// @match         *://www.minnano-av.com/*
// @match         *://xslist.org/*
// @grant         GM.xmlHttpRequest
// @grant         GM.getValue
// @grant         GM.setValue
// @grant         GM.registerMenuCommand
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
___CSS_LOADER_EXPORT___.push([module.id, ".stashCheckerPopup {\n  z-index: 999 !important;\n  position: absolute !important;\n  color: black !important;\n  text-align: left !important;\n  font-size: medium !important;\n  line-height: normal !important;\n  background-color: white !important;\n  border: 0.1em solid black !important;\n  border-radius: 0.5em !important;\n  padding: 0.5em !important;\n  margin-top: -0.5em !important;\n}\n", ""]);
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

;// CONCATENATED MODULE: ./src/tooltip.ts
let handle;
let tooltipWindow = document.createElement("div");
tooltipWindow.style.display = "none";
tooltipWindow.classList.add("stashCheckerPopup");
tooltipWindow.addEventListener("mouseover", function () {
    window.clearTimeout(handle);
});
tooltipWindow.addEventListener("mouseout", function () {
    handle = window.setTimeout(function () {
        tooltipWindow.style.display = "none";
    }, 500);
});
document.body.append(tooltipWindow);
function secondsToReadable(seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor(seconds / 60) % 60;
    let s = Math.floor(seconds) % 60;
    return [h, m, s]
        .map(v => v.toString().padStart(2, "0"))
        .filter((v, i) => v !== "00" || i > 0)
        .join(":");
}
/**
 * recursive (dfs) first non empty text node child, undefined if none available
 */
function firstTextChild(node) {
    if (node.nodeType === Node.TEXT_NODE &&
        node.textContent.match(/^[\s<>]*$/) === null // exclude whitespace
    ) {
        return node;
    }
    else {
        return Array.from(node.childNodes)
            .filter(n => !["svg"].includes(n.nodeName.toLowerCase())) // element tag exceptions
            .map(firstTextChild)
            .find(n => n); // first truthy
    }
}
/**
 * find existing span recursively, undefined if none available
 */
function getExistingSpan(element) {
    if (element.getAttribute("data-type") === "stash-symbol") {
        return element;
    }
    else {
        return Array.from(element.childNodes)
            .filter(n => n.nodeType === Node.ELEMENT_NODE)
            .map(n => n)
            .map(getExistingSpan)
            .find(n => n); // first truthy
    }
}
function formatFileData(files) {
    let propertyStrings = [
        ["path", (v) => `Path: ${v}`],
        ["duration", (v) => `Duration: ${secondsToReadable(v)}`],
    ];
    return files.map((file) => propertyStrings
        .filter(e => file[e[0]])
        .map(e => e[1](file[e[0]]))
        .join("<br>")).join("<br>");
}
function formatEntryData(target, data, stashUrl) {
    let propertyStrings = [
        ["id", (v) => `<a target="_blank" href="${stashUrl}/${target}s/${v}">${stashUrl}/${target}s/${v}</a>`],
        ["title", (v) => `Title: ${v}`],
        ["name", (v) => `Name: ${v}`],
        ["code", (v) => `Code: ${v}`],
        ["files", (v) => formatFileData(v)],
        ["queries", (v) => `Matched: ${v.join(", ")}`],
    ];
    return ["", ...data.map((entry) => propertyStrings
            .filter((e) => entry[e[0]])
            .map((e) => e[1](entry[e[0]]))
            .join("<br>"))].join("<br><hr>");
}
function mouseoverListener() {
    window.clearTimeout(handle);
    let margin = 10;
    let pos = this.getBoundingClientRect();
    tooltipWindow.innerHTML = this.getAttribute("data-info");
    tooltipWindow.style.display = "";
    // show tooltip above or below
    let north = tooltipWindow.clientHeight + margin < pos.top + window.scrollY;
    if (north) {
        tooltipWindow.style.top = `${(Math.max(window.scrollY + margin, // upper border
        pos.top - tooltipWindow.clientHeight + window.scrollY // wanted position
        )).toFixed(0)}px`;
    }
    else {
        tooltipWindow.style.top = `${(Math.min(window.innerHeight + window.scrollY - tooltipWindow.clientHeight - margin, // lower border
        pos.top + pos.height + margin + window.scrollY // wanted position
        )).toFixed(0)}px`;
    }
    tooltipWindow.style.left = `${(Math.max(window.scrollX + margin, Math.min(window.innerWidth + window.scrollX - tooltipWindow.clientWidth - margin, pos.left + pos.width / 2 - tooltipWindow.clientWidth / 2 + window.scrollX // wanted position
    ))).toFixed(0)}px`;
}
function mouseoutListener() {
    handle = window.setTimeout(function () {
        tooltipWindow.style.display = "none";
    }, 500);
}
/**
 * Similar to object.assign(), but also merges the children of the objects.
 *
 * @param target
 * @param source
 */
function mergeData(target, source) {
    let mapTarget = new Map(target.map(e => [e.id, e]));
    let mapSource = new Map(source.map(e => [e.id, e]));
    mapSource.forEach((value, key) => {
        if (mapTarget.has(key)) {
            // merge which queries were successful
            let set = new Set(value["queries"]);
            mapTarget.get(key)["queries"].forEach((query) => {
                set.add(query);
            });
            value["queries"] = [...set].sort();
        }
        mapTarget.set(key, value);
    });
    return Array.from(mapTarget.values());
}
/**
 * Prepends depending on the data the checkmark or cross to the selected element.
 * Also populates tooltip window.
 *
 * @param element
 * @param target
 * @param data
 * @param stashUrl
 * @param queryType
 * @param color
 */
function prefixSymbol(element, target, data, stashUrl, queryType, color) {
    let queries = [queryType];
    // Query for each found entry
    data.forEach((entry) => {
        entry["queries"] = queries;
    });
    // Look for existing check spans
    let span = getExistingSpan(element);
    if (span) {
        // Add previous queries tried and remove duplicates
        queries = [...new Set(JSON.parse(span.getAttribute("data-queries"))).add(queryType)].sort();
        data = mergeData(JSON.parse(span.getAttribute("data-data")), data);
    }
    else {
        span = document.createElement("span");
        span.setAttribute("data-type", "stash-symbol");
        span.addEventListener("mouseover", mouseoverListener);
        span.addEventListener("mouseout", mouseoutListener);
        // insert before first text because css selectors cannot select text nodes directly
        // it works with cases were non text elements (images) are inside the selected element
        let text = firstTextChild(element);
        if (text) {
            text.parentNode.insertBefore(span, text);
        }
        else {
            return; // abort if no text in span
        }
    }
    span.setAttribute("data-queries", JSON.stringify(queries));
    span.setAttribute("data-data", JSON.stringify(data));
    let count = data.length;
    let tooltip = target.charAt(0).toUpperCase() + target.slice(1);
    if (count === 0) {
        span.textContent = "✗ ";
        span.style.color = "red";
        tooltip += " not in Stash";
    }
    else if (count === 1) {
        span.textContent = "✓ ";
        span.style.color = color(data[0]);
        tooltip += " in Stash";
    }
    else {
        span.textContent = "! ";
        span.style.color = "orange";
        tooltip += " has duplicate matches";
    }
    tooltip += `<br>Queries: ${queries.join(", ")}`;
    tooltip += formatEntryData(target, data, stashUrl);
    span.setAttribute("data-info", tooltip);
}

;// CONCATENATED MODULE: ./src/config.ts
// Register menu items
GM.registerMenuCommand("Set Stash Url", setStashUrl, "u");
GM.registerMenuCommand("Set API key", setApiKey, "k");
async function setStashUrl() {
    let stashUrl = await GM.getValue("stashUrl", undefined);
    stashUrl = prompt("Stash URL:", stashUrl ?? "https://localhost:9999")?.trim()?.replace("\/$", "");
    if (stashUrl !== undefined) {
        await GM.setValue("stashUrl", stashUrl);
    }
}
async function setApiKey() {
    let apiKey = await GM.getValue("apiKey", undefined);
    apiKey = prompt("API Key:", apiKey ?? "")?.trim()?.replace("\/$", "");
    if (apiKey !== undefined) {
        await GM.setValue("apiKey", apiKey);
    }
}
async function getConfig() {
    let stashUrl = await GM.getValue("stashUrl", undefined);
    let apiKey = await GM.getValue("apiKey", undefined);
    if (stashUrl === undefined) {
        stashUrl = prompt("Stash URL:", "https://localhost:9999")?.trim()?.replace("\/$", "");
        if (stashUrl !== undefined) {
            await GM.setValue("stashUrl", stashUrl);
        }
    }
    if (apiKey === undefined) {
        apiKey = prompt("API Key:")?.trim()?.replace("\/$", "");
        if (apiKey !== undefined) {
            await GM.setValue("apiKey", apiKey);
        }
    }
    return [stashUrl ?? "", apiKey ?? ""];
}

;// CONCATENATED MODULE: ./src/check.ts


// Ask for stash url/key on load
let configPromise = getConfig();
async function request(queryString, onload, target, type) {
    let query = "";
    let access = (d) => d;
    // Build query
    if (type === "url") {
        queryString = encodeURIComponent(queryString);
    }
    switch (target) {
        case "scene":
            query = `{findScenes(scene_filter:{${type}:{value:"${queryString}",modifier:EQUALS}}){scenes{id,title,code,files{path,duration}}}}`;
            access = (d) => d.findScenes.scenes;
            break;
        case "performer":
            query = `{findPerformers(performer_filter:{${type}:{value:"${queryString}",modifier:EQUALS}}){performers{id,name}}}`;
            access = (d) => d.findPerformers.performers;
            break;
        default:
    }
    // Wait for config popup if it is not stored
    let [stashUrl, apiKey] = await configPromise;
    GM.xmlHttpRequest({
        method: "GET",
        url: `${stashUrl}/graphql?query=${query}`,
        headers: {
            "Content-Type": "application/json",
            ApiKey: apiKey,
        },
        onload: function (response) {
            try {
                let data = access(JSON.parse(response.responseText).data);
                onload(target, data, stashUrl);
            }
            catch (e) {
                console.log("Failed to parse response: " + response.responseText);
                console.log("Exception: " + e);
            }
        },
    });
}
async function checkElement(target, element, { checkUrl = true, prepareUrl = (url) => url, urlSelector, codeSelector, stashIdSelector, color = () => "green", }) {
    if (checkUrl) {
        let url = urlSelector(element);
        url = prepareUrl(url);
        if (url) {
            console.log(url);
            await request(url, (target, data, stashUrl) => prefixSymbol(element, target, data, stashUrl, "URL", color), target, "url");
        }
        else {
            console.log("No URL for entry found");
        }
    }
    if (codeSelector) {
        let code = codeSelector(element);
        if (code) {
            console.log(code);
            await request(code, (target, data, stashUrl) => prefixSymbol(element, target, data, stashUrl, "Code", color), target, "code");
        }
        else {
            console.log("No Code for entry found");
        }
    }
    if (stashIdSelector) {
        let id = stashIdSelector(element);
        if (id) {
            console.log(id);
            await request(id, (target, data, stashUrl) => prefixSymbol(element, target, data, stashUrl, "StashId", color), target, "stash_id");
        }
        else {
            console.log("No StashId for entry found");
        }
    }
}
/**
 * queries for each selected element
 *
 * the selected element should be [a child of] the link that will be compared with stash urls
 * the first text inside the selected element will be prepended with the symbol
 */
function check(target, elementSelector, { currentSite = false, ...checkConfig } = {}) {
    if (currentSite) {
        let element = document.querySelector(elementSelector);
        if (element) {
            // url of current site
            checkConfig.urlSelector ?? (checkConfig.urlSelector = () => decodeURI(window.location.href));
            checkElement(target, element, checkConfig);
        }
    }
    else {
        // multiple entries with url nearest to element
        document.querySelectorAll(elementSelector).forEach((element) => {
            // url nearest to selected element traversing towards the root (children are ignored)
            checkConfig.urlSelector ?? (checkConfig.urlSelector = (e) => decodeURI(e.closest("a").href));
            checkElement(target, element, checkConfig);
        });
    }
}

;// CONCATENATED MODULE: ./src/index.ts


function hasType(node, nodeType) {
    if (node.nodeName.toLowerCase() === nodeType) {
        return true;
    }
    else {
        return Array.from(node.childNodes).some(n => hasType(n, nodeType));
    }
}
function onAddition(nodeType, callback) {
    // Run on each type-element addition
    let body = document.querySelector("body");
    let timeout = undefined;
    let observer = new MutationObserver((mutations) => {
        let newNode = mutations.map(m => Array.from(m.addedNodes).some(n => hasType(n, nodeType.toLowerCase()))).some(n => n);
        if (newNode) {
            console.log(`A ${nodeType}-element was added. Rerun queries.`);
            clearTimeout(timeout);
            timeout = setTimeout(callback, 200); // arbitrary delay to prevent too many calls
        }
        else {
            console.log("No update.");
        }
    });
    observer.observe(body, { childList: true, subtree: true });
}
(function () {
    switch (window.location.host) {
        case "www.iwara.tv":
        case "ecchi.iwara.tv": {
            let color = (d) => d.files.some((f) => f.path.endsWith("_Source.mp4")) ? "green" : "blue";
            check("scene", "h1.title", { color: color, currentSite: true });
            check("scene", "h3.title > a", { color: color });
            break;
        }
        case "oreno3d.com": {
            let color = (d) => d.files.some((f) => f.path.endsWith("_Source.mp4")) ? "green" : "blue";
            check("scene", "h1.video-h1", { color: color, currentSite: true });
            check("scene", "a h2.box-h2", { color: color });
            break;
        }
        case "erommdtube.com": {
            let color = (d) => d.files.some((f) => f.path.endsWith("_Source.mp4")) ? "green" : "blue";
            check("scene", "h1.show__h1", { color: color, currentSite: true });
            check("scene", "h2.main__list-title", { color: color });
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
                check("performer", "h1", { prepareUrl: prepareUrl, currentSite: true });
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
        case "www.indexxx.com":
            check("performer", "h1[id='model-name']", { currentSite: true });
            check("performer", "a[class*='modelLink'][href*='https://www.indexxx.com/m/'] > span");
            break;
        case "www.data18.com": {
            let callback = () => {
                check("scene", "a[href^='https://www.data18.com/scenes/']:not([href*='#'])");
                check("performer", "a[href^='https://www.data18.com/name/']:not([href*='/pairings']):not([href*='/studio']):not([href*='/virtual-reality']):not([href*='/scenes']):not([href*='/movies']):not([href*='/tags']):not([title$=' Home'])");
            };
            callback(); // initial load is not dynamic
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
            console.log("No configuration for website found.");
            break;
    }
    // TODO: scenes: kemono, coomer, OF, ThePornDB
    // TODO: performers: boobpedia.com, www.adultfilmdatabase.com, www.freeones.com, www.thenude.com, www.wikidata.org, www.babepedia.com, www.eurobabeindex.com
    // TODO: movies, pictures, galleries
    // TODO: make onAddition work with (multiple) css selectors/attributes
    // TODO: config: do not show cross mark if none found, custom symbols, default colors
    // TODO: tooltip information: rating, favorite, resolution
})();

})();

/******/ })()
;