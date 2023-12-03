// ==UserScript==
// @name          Stash Checker
// @name:en       Stash Checker
// @description   Add checkmarks to scenes/performers present in your stash
// @icon          https://docs.stashapp.cc/favicon.ico
// @version       0.6.0
// @author        timo95 <24251362+timo95@users.noreply.github.com>
// @match         *://adultanime.dbsearch.net/*
// @match         *://coomer.party/*
// @match         *://ecchi.iwara.tv/*
// @match         *://erommdtube.com/*
// @match         *://fansdb.cc/*
// @match         *://fansdb.xyz/*
// @match         *://gayeroticvideoindex.com/*
// @match         *://kemono.party/*
// @match         *://metadataapi.net/*
// @match         *://onlyfans.com/*
// @match         *://oreno3d.com/*
// @match         *://pmvstash.org/*
// @match         *://www.pornteengirl.com/*
// @match         *://r18.dev/*
// @match         *://shemalestardb.com/*
// @match         *://stashdb.org/*
// @match         *://www.animecharactersdatabase.com/*
// @match         *://www.babepedia.com/*
// @match         *://www.data18.com/*
// @match         *://www.freeones.com/*
// @match         *://www.iafd.com/*
// @match         *://www.indexxx.com/*
// @match         *://www.iwara.tv/*
// @match         *://www.javlibrary.com/*
// @match         *://www.minnano-av.com/*
// @match         *://www.thenude.com/*
// @match         *://xslist.org/*
// @grant         GM.xmlHttpRequest
// @grant         GM.getValue
// @grant         GM.setValue
// @grant         GM.deleteValue
// @grant         GM.listValues
// @grant         GM.registerMenuCommand
// @connect       localhost
// @connect       *
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
___CSS_LOADER_EXPORT___.push([module.id, ".stashCheckerTooltip {\n  z-index: 99999 !important;\n  position: fixed !important;\n  color: black !important;\n  text-align: left !important;\n  font-size: medium !important;\n  line-height: normal !important;\n  background-color: white !important;\n  border: 0.1em solid black !important;\n  border-radius: 0.5em !important;\n  padding: 0.5em !important;\n  margin-top: -0.5em !important;\n}\n.stashCheckerTooltip hr {\n  margin-top: 0.5em !important;\n  margin-bottom: 0.5em !important;\n}\n.stashCheckerTooltip hr + br {\n  display: none !important;\n}\n.stashCheckerFile {\n  color: black !important;\n  text-align: left !important;\n  font-size: medium !important;\n  line-height: normal !important;\n  background-color: lightgrey !important;\n  margin: 0.5em !important;\n  padding: 0.5em !important;\n}\n.stashCheckerFile + br {\n  display: none !important;\n}\n.stashCheckerSymbol {\n  font-size: inherit !important;\n}\n", ""]);
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

/***/ "./src/style/main.less":
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/main.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


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

/***/ }),

/***/ "./src/check.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ check)
/* harmony export */ });
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/tooltip.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/config.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config__WEBPACK_IMPORTED_MODULE_1__]);
_config__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// Ask for stash url/key on load
let configPromise = (0,_config__WEBPACK_IMPORTED_MODULE_1__/* .getConfig */ .i)();
async function request(queryString, onload, target, type) {
    let criterion = "";
    let query = "";
    let access = (d) => d;
    // Build filter
    switch (type) {
        case "stash_id":
            let endpoint = `https://${window.location.host}/graphql`;
            criterion = `{stash_id_endpoint:{endpoint:"${endpoint}",stash_id:"${queryString}",modifier:EQUALS}}`;
            break;
        default:
            criterion = `{${type}:{value:"${queryString}",modifier:EQUALS}}`;
            break;
    }
    // Build query
    switch (target) {
        case "scene":
            query = `{findScenes(scene_filter:${criterion}){scenes{id,title,code,studio{name},date,files{path,duration,video_codec,width,height,size,bit_rate}}}}`;
            access = (d) => d.findScenes.scenes;
            break;
        case "performer":
            query = `{findPerformers(performer_filter:${criterion}){performers{id,name,disambiguation,alias_list,favorite}}}`;
            access = (d) => d.findPerformers.performers;
            break;
        case "gallery":
            query = `{findGalleries(gallery_filter:${criterion}){galleries{id,title,date,files{path}}}}`;
            access = (d) => d.findGalleries.galleries;
            break;
        case "movie":
            query = `{findMovies(movie_filter:${criterion}){movies{id,name,date}}}`;
            access = (d) => d.findMovies.movies;
            break;
        default:
            break;
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
                let r = JSON.parse(response.responseText);
                if ("errors" in r) {
                    r.errors.forEach((e) => {
                        console.log(`Stash returned "${e.extensions.code}" error: ${e.message}`);
                    });
                }
                else {
                    onload(target, access(r.data), stashUrl);
                }
            }
            catch (e) {
                console.log("Exception: " + e);
                console.log("Failed to parse response: " + response.responseText);
            }
        },
    });
}
async function checkElement(target, element, { prepareUrl = url => url, urlSelector, // default is set in check()
codeSelector, stashIdSelector, nameSelector = e => (0,_tooltip__WEBPACK_IMPORTED_MODULE_0__/* .firstTextChild */ .I)(e)?.textContent?.trim(), titleSelector = e => (0,_tooltip__WEBPACK_IMPORTED_MODULE_0__/* .firstTextChild */ .I)(e)?.textContent?.trim(), color = () => "green", }) {
    if (urlSelector && prepareUrl) {
        let url = urlSelector(element);
        url = prepareUrl(url);
        if (url) {
            url = encodeURIComponent(url);
            console.log(url);
            await request(url, (...args) => (0,_tooltip__WEBPACK_IMPORTED_MODULE_0__/* .prefixSymbol */ .F)(element, ...args, "URL", color), target, "url");
        }
        else {
            console.log(`No URL for ${target} found.`);
        }
    }
    if (codeSelector) {
        let code = codeSelector(element);
        if (code) {
            console.log(code);
            await request(code, (...args) => (0,_tooltip__WEBPACK_IMPORTED_MODULE_0__/* .prefixSymbol */ .F)(element, ...args, "Code", color), target, "code");
        }
        else {
            console.log(`No Code for ${target} found.`);
        }
    }
    if (stashIdSelector) {
        let id = stashIdSelector(element);
        if (id) {
            console.log(id);
            await request(id, (...args) => (0,_tooltip__WEBPACK_IMPORTED_MODULE_0__/* .prefixSymbol */ .F)(element, ...args, "StashId", color), target, "stash_id");
        }
        else {
            console.log(`No StashId for ${target} found.`);
        }
    }
    if (target === "performer" && nameSelector) {
        let name = nameSelector(element);
        // Do not use single names
        let nameCount = name?.split(/\s+/)?.length;
        if (name && nameCount > 1) {
            console.log(name);
            await request(name, (...args) => (0,_tooltip__WEBPACK_IMPORTED_MODULE_0__/* .prefixSymbol */ .F)(element, ...args, "Name", color), target, "name");
        }
        else if (name && nameCount === 1) {
            console.log(`Ignore single name: ${name}`);
        }
        else {
            console.log(`No Name for ${target} found.`);
        }
    }
    if (["scene", "gallery"].includes(target) && titleSelector) {
        let title = titleSelector(element);
        if (title) {
            console.log(title);
            await request(title, (...args) => (0,_tooltip__WEBPACK_IMPORTED_MODULE_0__/* .prefixSymbol */ .F)(element, ...args, "Title", color), target, "title");
        }
        else {
            console.log(`No Title for ${target} found.`);
        }
    }
}
/**
 * Run callback when a new object added to the document matches the selector.
 * Calls callback with a timer after the last addition to prevent unnecessary executions.
 *
 * @param selector css selector string
 * @param callback callback function
 */
function onAddition(selector, callback) {
    // Run on each type-element addition
    let body = document.querySelector("body");
    let timeout = undefined;
    let observer = new MutationObserver((mutations) => {
        let newNode = mutations.map(m => Array.from(m.addedNodes)
            .filter(n => n.nodeType === Node.ELEMENT_NODE)
            .some(n => n.matches(selector) || n.querySelector(selector)) || // Element or Child match
            Array.from(m.addedNodes).map(n => n.parentElement).filter(e => e).some(e => e.matches(selector)) // Parent match (if text node was added)
        ).some(n => n);
        if (newNode) {
            console.log(`"${selector}"-element was added or modified. Start/Update Timer.`);
            clearTimeout(timeout);
            timeout = setTimeout(_ => {
                console.log("Run queries.");
                callback();
            }, 200); // arbitrary delay to prevent too many calls
        }
    });
    observer.observe(body, { childList: true, subtree: true });
}
/**
 * queries for each selected element
 *
 * the selected element should be [a child of] the link that will be compared with stash urls
 * the first text inside the selected element will be prepended with the symbol
 * Set predefined selectors to "null" to not use them.
 */
function checkOnce(target, elementSelector, { currentSite = false, ...checkConfig } = {}) {
    document.querySelectorAll(elementSelector).forEach((element) => {
        if (currentSite) {
            // url of current site
            checkConfig.urlSelector = (checkConfig.urlSelector === undefined) ? () => decodeURI(window.location.href) : checkConfig.urlSelector;
        }
        else {
            // url nearest to selected element traversing towards the root (children are ignored)
            checkConfig.urlSelector = (checkConfig.urlSelector === undefined) ? (e) => decodeURI(e.closest("a").href) : checkConfig.urlSelector;
        }
        checkElement(target, element, checkConfig);
    });
}
/**
 * queries for each selected element
 *
 * the selected element should be [a child of] the link that will be compared with stash urls
 * the first text inside the selected element will be prepended with the symbol
 * Set predefined selectors to "null" to not use them.
 */
function check(target, elementSelector, { observe = false, ...checkConfig } = {}) {
    // Exclude direct children of tooltip window (some selectors match the stash link)
    elementSelector = ":not(.stashCheckerTooltip) > " + elementSelector;
    // Callback on addition of new elements fitting the query
    if (observe) {
        let selector = typeof observe === "string" ? observe : elementSelector;
        onAddition(selector, (_) => checkOnce(target, elementSelector, checkConfig));
    }
    checkOnce(target, elementSelector, checkConfig);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/config.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ isSiteBlocked),
/* harmony export */   "i": () => (/* binding */ getConfig)
/* harmony export */ });
const DEFAULT_URL = "http://localhost:9999";
let blockedKey = `blocked_${window.location.host}`.replace(/[\.\-]/, "_");
// Register menu items
GM.registerMenuCommand("Set Stash Url", setStashUrl, "u");
GM.registerMenuCommand("Set API key", setApiKey, "k");
if (await isSiteBlocked()) {
    GM.registerMenuCommand(`Activate for ${window.location.host}`, unblockSite, "a");
}
else {
    GM.registerMenuCommand(`Deactivate for ${window.location.host}`, blockSite, "d");
}
async function isSiteBlocked() {
    return await GM.getValue(blockedKey, false);
}
async function blockSite() {
    await GM.setValue(blockedKey, true);
    window.location.reload();
}
async function unblockSite() {
    await GM.deleteValue(blockedKey);
    window.location.reload();
}
async function setStashUrl() {
    let stashUrl = await GM.getValue("stashUrl", undefined);
    stashUrl = prompt("Stash URL:", stashUrl ?? DEFAULT_URL)?.trim()?.replace("\/$", "");
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
        stashUrl = prompt("Stash URL:", DEFAULT_URL)?.trim()?.replace("\/$", "");
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/index.ts":
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _style_main_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/style/main.less");
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/check.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/config.ts");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/tooltip.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_check__WEBPACK_IMPORTED_MODULE_1__, _config__WEBPACK_IMPORTED_MODULE_2__]);
([_check__WEBPACK_IMPORTED_MODULE_1__, _config__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




(async function () {
    if (await (0,_config__WEBPACK_IMPORTED_MODULE_2__/* .isSiteBlocked */ .c)()) {
        console.log("Userscript is deactivated for this site. Activate in userscript menu.");
        return;
    }
    switch (window.location.host) {
        case "www.iwara.tv":
        case "ecchi.iwara.tv": {
            let color = (d) => d.files.some((f) => f.path.endsWith("_Source.mp4")) ? "green" : "blue";
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "h1.title", { color: color, currentSite: true, titleSelector: null });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "h3.title > a", { color: color, titleSelector: null });
            break;
        }
        case "oreno3d.com": {
            let color = (d) => d.files.some((f) => f.path.endsWith("_Source.mp4")) ? "green" : "blue";
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "h1.video-h1", { color: color, currentSite: true, titleSelector: null });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "a h2.box-h2", { color: color, titleSelector: null });
            break;
        }
        case "erommdtube.com": {
            let color = (d) => d.files.some((f) => f.path.endsWith("_Source.mp4")) ? "green" : "blue";
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "h1.show__h1", { color: color, currentSite: true, titleSelector: null });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "h2.main__list-title", { color: color, titleSelector: null });
            break;
        }
        case "kemono.party":
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "h1.post__title", { currentSite: true, titleSelector: null });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", ".post-card > a[href*='/post/']", { titleSelector: null });
            break;
        case "coomer.party":
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "h1.post__title", { currentSite: true, titleSelector: null });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", ".post-card h2 > a[href*='/post/']", { titleSelector: null });
            break;
        case "adultanime.dbsearch.net":
            if (document.querySelector("article > section[id='info-table']") !== null) {
                (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "div[id='main-inner'] > article > h2", {
                    currentSite: true,
                    codeSelector: (_) => document.evaluate("//dt[text()='規格品番']/following-sibling::dd[1]/p/text()", document, null, XPathResult.STRING_TYPE, null)?.stringValue?.trim()
                });
            }
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "div[class='item-info'] > h4 > a, div[class='item-info'] > h5 > a");
            break;
        case "xslist.org":
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "span[itemprop='name']", { currentSite: true });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "a[href*='/model/']");
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "table#movices td > strong", {
                urlSelector: null,
                codeSelector: e => e.textContent.trim(),
                titleSelector: null,
            });
            break;
        case "www.animecharactersdatabase.com":
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "a[href*='characters.php']:not([href*='_']):not([href*='series'])");
            break;
        case "www.iafd.com": {
            let prepareUrl = (url) => url.replaceAll("'", "%27").replace(/^http:/, "https:");
            if (window.location.pathname.startsWith("/person.rme/perfid=")) {
                (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "h1", { prepareUrl: prepareUrl, currentSite: true });
            }
            else if (window.location.pathname.startsWith("/title.rme/title=")) {
                (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "h1", { prepareUrl: prepareUrl, currentSite: true, titleSelector: null });
            }
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "a[href*='/person.rme/perfid=']", { prepareUrl: prepareUrl });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "a[href*='/title.rme/title=']", { prepareUrl: prepareUrl, titleSelector: null });
            break;
        }
        case "metadataapi.net": {
            let stashIdSelector = (_) => document.evaluate("//div[text()='TPDB UUID']/following-sibling::div/text()", document, null, XPathResult.STRING_TYPE, null)?.stringValue?.trim();
            if (window.location.pathname.startsWith("/performers/")) {
                (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "div[class='pl-4'] > h2", { observe: true, currentSite: true, stashIdSelector });
            }
            else if (window.location.pathname.startsWith("/scenes/")) {
                (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "div[class='flex justify-between'] > h2", { observe: true, currentSite: true, stashIdSelector });
            }
            else if (window.location.pathname.startsWith("/movies/")) {
                (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("movie", "div[class='flex justify-between'] > h2", { observe: true, currentSite: true, stashIdSelector });
            }
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "a[href^='https://metadataapi.net/performers/']", { observe: true });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "a[href^='https://metadataapi.net/scenes/'], a[href^='https://metadataapi.net/jav/']", { observe: true, titleSelector: null });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("movie", "a[href^='https://metadataapi.net/movies/']", { observe: true, titleSelector: null });
            break;
        }
        case "www.javlibrary.com":
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "div[id='video_title']", {
                currentSite: true,
                prepareUrl: url => url.replace("videoreviews.php", "").replace(/&.*$/, ""),
                codeSelector: _ => document.querySelector("div[id='video_id'] td.text").textContent.trim(),
                titleSelector: _ => document.querySelector("div[id='video_id'] td.text").textContent.trim(),
            });
            // generic video links
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", ".video a[href^='./?v=jav']", {
                prepareUrl: url => url.replace(/&.*$/, ""),
                codeSelector: e => e.querySelector("div.id")?.textContent?.trim(),
            });
            // best reviews
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", ".comment strong > a[href^='videoreviews.php?v=jav']", {
                prepareUrl: url => url.replace("videoreviews.php", "").replace(/&.*$/, ""),
                codeSelector: e => (0,_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .firstTextChild */ .I)(e)?.textContent?.trim()?.split(" ")[0],
                titleSelector: e => (0,_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .firstTextChild */ .I)(e)?.textContent?.trim()?.split(" ")[0],
            });
            break;
        case "r18.dev":
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "#video-info > #title", {
                observe: "#dvd-id",
                currentSite: true,
                codeSelector: _ => (0,_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .firstTextChild */ .I)(document.querySelector("#dvd-id"))?.textContent?.trim(),
            });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", ".video-label > a[href*='/movies/detail/']", {
                observe: true,
                codeSelector: e => (0,_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .firstTextChild */ .I)(e)?.textContent?.trim(),
            });
            break;
        case "www.minnano-av.com":
            if (/actress\d{1,6}/.test(window.location.pathname)) {
                (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "h1", {
                    prepareUrl: url => url.split("?")[0],
                    currentSite: true,
                });
            }
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "a[href*='actress']:not([href*='list']):not([href*='.php']):not([href*='http'])", {
                prepareUrl: url => url.split("?")[0],
            });
            break;
        case "www.indexxx.com":
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "h1[id='model-name']", { currentSite: true });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "a[class*='modelLink'][href*='https://www.indexxx.com/m/'] > span");
            break;
        case "www.thenude.com":
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "span.model-name", { currentSite: true });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "a.model-name, a.model-title, a[data-img*='/models/']", { observe: true });
            break;
        case "www.data18.com":
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "a[href^='https://www.data18.com/scenes/']:not([href*='#'])", { observe: true, titleSelector: null });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "a[href^='https://www.data18.com/name/']:not([href*='/pairings']):not([href*='/studio']):not([href*='/virtual-reality']):not([href*='/scenes']):not([href*='/movies']):not([href*='/tags']):not([title$=' Home'])", { observe: true });
            break;
        case "www.babepedia.com":
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "h1#babename", { currentSite: true });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "a[href*='/babe/']", { observe: true });
            break;
        case "www.freeones.com":
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "a[href$='/feed'] [data-test='subject-name'], a[href$='/feed'] .profile-image + p", {
                prepareUrl: url => url.replace(/\/feed$/, "").replace(/\/[a-z]{2}\//, "/")
            });
            break;
        case "shemalestardb.com":
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "h2[id='star-name']", { currentSite: true });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "figcaption > a[href*='/stars/']");
            break;
        case "onlyfans.com":
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "div[class*='b-username'] > div[class*='g-user-name']", { observe: true, currentSite: true });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "a[class*='b-username'] > div[class*='g-user-name']", { observe: true });
            break;
        case "www.pornteengirl.com":
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "a[href*='/model/']", {
                nameSelector: e => (0,_tooltip__WEBPACK_IMPORTED_MODULE_3__/* .firstTextChild */ .I)(e)?.textContent?.trim()?.replace(/\([^()]*\)$/, "")?.trimEnd()
            });
            break;
        case "gayeroticvideoindex.com":
            if (window.location.pathname.startsWith("/performer/")) {
                (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "[id='data'] h1", { currentSite: true });
            }
            else if (window.location.pathname.startsWith("/episode/")) {
                (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "[id='data'] h1", { currentSite: true });
            }
            else if (window.location.pathname.startsWith("/video/")) {
                (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("movie", "[id='data'] h1", { currentSite: true });
            }
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "a[href*='performer/']", { observe: true });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "a[href*='episode/']", { observe: true });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("movie", "a[href*='video/']", { observe: true });
            break;
        case "fansdb.cc":
        case "fansdb.xyz":
        case "pmvstash.org":
        case "stashdb.org":
            let exclude = ":not(a[href$='/edit']):not(a[href$='/merge']):not(a[href$='/delete'])";
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", "div.scene-info.card h3 > span", {
                observe: true,
                currentSite: true,
                urlSelector: null,
                stashIdSelector: () => window.location.href.replace(/^.*\/scenes\//, "").split(/[?#]/)[0],
                titleSelector: null,
            });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", "div.PerformerInfo div.card-header h3 > span", {
                observe: true,
                currentSite: true,
                urlSelector: null,
                stashIdSelector: () => window.location.href.replace(/^.*\/performers\//, "").split(/[?#]/)[0],
                nameSelector: null,
            });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("scene", `a[href^='/scenes/']${exclude}, a[href^='https://${window.location.host}/scenes/']${exclude}`, {
                observe: true,
                urlSelector: null,
                stashIdSelector: (e) => e.getAttribute("href")?.replace(/^.*\/scenes\//, "")?.split(/[?#]/)[0],
                titleSelector: null,
            });
            (0,_check__WEBPACK_IMPORTED_MODULE_1__/* .check */ .B)("performer", `a[href^='/performers/']${exclude}, a[href^='https://${window.location.host}/performers/']${exclude}`, {
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
})();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/tooltip.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ prefixSymbol),
/* harmony export */   "I": () => (/* binding */ firstTextChild)
/* harmony export */ });
let handle;
let tooltipWindow = document.createElement("div");
tooltipWindow.style.display = "none";
tooltipWindow.classList.add("stashCheckerTooltip");
tooltipWindow.addEventListener("mouseover", function () {
    window.clearTimeout(handle);
});
tooltipWindow.addEventListener("mouseout", function () {
    handle = window.setTimeout(function () {
        tooltipWindow.style.display = "none";
    }, 500);
});
document.body.append(tooltipWindow);
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
            .filter(n => n.nodeType === Node.ELEMENT_NODE ? n.getAttribute("data-type") !== "stash-symbol" : true) // exclude checkmark
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
function getUrl(stashUrl, target, id) {
    let path;
    if (target == "gallery") {
        path = "galleries";
    }
    else {
        path = target + "s";
    }
    return `${stashUrl}/${path}/${id}`;
}
function secondsToReadable(seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor(seconds / 60) % 60;
    let s = Math.floor(seconds) % 60;
    return [h, m, s]
        .map(v => v.toString().padStart(2, "0"))
        .filter((v, i) => v !== "00" || i > 0)
        .join(":");
}
function bytesToReadable(bytes) {
    let labels = ["KB", "MB", "GB", "TB", "PB"];
    let label;
    for (label of labels) {
        bytes /= 1000;
        if (bytes < 1000) {
            break;
        }
    }
    return bytes.toFixed(2) + label;
}
function formatFileData(files) {
    let propertyStrings = [
        ["path", (v) => `Path: ${v}`],
        ["video_codec", (v) => `<br>Codec: ${v}`],
        ["width", (v) => ` (${v}`],
        ["height", (v) => `x${v})`],
        ["size", (v) => `&nbsp;&nbsp;&nbsp;&nbsp;Size: ${bytesToReadable(v)}`],
        ["bit_rate", (v) => `&nbsp;&nbsp;&nbsp;&nbsp;Bitrate: ${(v / 1000000).toFixed(2)}Mbit/s`],
        ["duration", (v) => `&nbsp;&nbsp;&nbsp;&nbsp;Duration: ${secondsToReadable(v)}`],
    ];
    return files.map((file) => "<div class='stashCheckerFile'>" + propertyStrings
        .filter(e => file[e[0]])
        .map(e => e[1](file[e[0]]))
        .join("") + "</div>").join("");
}
function formatEntryData(target, data, stashUrl) {
    let propertyStrings = [
        ["id", (v) => `<br><a target="_blank" href="${getUrl(stashUrl, target, v)}">${getUrl(stashUrl, target, v)}</a>`],
        ["title", (v) => `<br>Title: ${v}`],
        ["name", (v) => `<br>Name: ${v}`],
        ["favorite", (v) => "&emsp;&#10084;&#65039;"],
        ["disambiguation", (v) => ` <span style="color: grey">(${v})</span>`],
        ["alias_list", (v) => `<br>Aliases: ${v.join(", ")}`],
        ["studio", (v) => `<br>Studio: ${v.name}`],
        ["code", (v) => `<br>Code: ${v}`],
        ["date", (v) => `<br>Date: ${v}`],
        ["queries", (v) => `<br>Matched: ${v.join(", ")}`],
        ["files", (v) => `${formatFileData(v)}`],
    ];
    return data.map((entry) => "<hr>" + propertyStrings
        .filter((e) => entry[e[0]])
        .map((e) => e[1](entry[e[0]]))
        .join("")).join("");
}
function mouseoverListener() {
    window.clearTimeout(handle);
    let margin = 10;
    let symbolPos = this.getBoundingClientRect();
    tooltipWindow.innerHTML = this.getAttribute("data-info");
    tooltipWindow.style.display = "";
    // show tooltip above or below
    let north = tooltipWindow.clientHeight + margin < symbolPos.top;
    if (north) {
        tooltipWindow.style.top = `${(Math.max(margin, // upper border
        symbolPos.top - tooltipWindow.clientHeight // wanted position
        )).toFixed(0)}px`;
    }
    else {
        tooltipWindow.style.top = `${(Math.min(window.innerHeight - tooltipWindow.clientHeight - margin, // lower border
        symbolPos.top + symbolPos.height + margin // wanted position
        )).toFixed(0)}px`;
    }
    tooltipWindow.style.left = `${(Math.max(margin, Math.min(window.innerWidth - tooltipWindow.clientWidth - margin, // left/right borders
    symbolPos.left + symbolPos.width / 2 - tooltipWindow.clientWidth / 2 // wanted position
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
        span.classList.add("stashCheckerSymbol");
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
    let tooltip = "";
    let targetP = target.charAt(0).toUpperCase() + target.slice(1);
    if (count === 0) {
        span.textContent = "✗ ";
        span.style.color = "red";
        tooltip = `${targetP} not in Stash<br>`;
    }
    else if (count === 1) {
        span.textContent = "✓ ";
        span.style.color = color(data[0]);
    }
    else {
        span.textContent = "! ";
        span.style.color = "orange";
        tooltip = `${targetP} has duplicate matches<br>`;
    }
    tooltip += `Queries: ${queries.join(", ")}`;
    tooltip += formatEntryData(target, data, stashUrl);
    span.setAttribute("data-info", tooltip);
}


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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;