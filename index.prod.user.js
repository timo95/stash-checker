// ==UserScript==
// @name Stash Checker
// @description Add checkmarks on porn websites to scenes/performers that are present in your own Stash instance.
// @version 1.1.0
// @author timo95
// @match *://adultanime.dbsearch.net/*
// @match *://coomer.su/*
// @match *://erommdtube.com/*
// @match *://fansdb.cc/*
// @match *://fansdb.xyz/*
// @match *://gayeroticvideoindex.com/*
// @match *://javdb.com/*
// @match *://kemono.su/*
// @match *://onlyfans.com/*
// @match *://oreno3d.com/*
// @match *://pmvhaven.com/*
// @match *://pmvstash.org/*
// @match *://r18.dev/*
// @match *://shemalestardb.com/*
// @match *://stashdb.org/*
// @match *://theporndb.net/*
// @match *://warashi-asian-pornstars.fr/*
// @match *://www.adultfilmdatabase.com/*
// @match *://www.animecharactersdatabase.com/*
// @match *://www.babepedia.com/*
// @match *://www.data18.com/*
// @match *://www.freeones.com/*
// @match *://www.iafd.com/*
// @match *://www.indexxx.com/*
// @match *://www.iwara.tv/*
// @match *://www.javlibrary.com/*
// @match *://www.manyvids.com/*
// @match *://www.minnano-av.com/*
// @match *://www.pornteengirl.com/*
// @match *://www.thenude.com/*
// @match *://xcity.jp/*
// @match *://xslist.org/*
// @connect localhost
// @connect *
// @downloadURL https://github.com/timo95/stash-checker/releases/latest/download/index.prod.user.js
// @grant GM.xmlHttpRequest
// @grant GM.getValue
// @grant GM.setValue
// @grant GM.deleteValue
// @grant GM.listValues
// @grant GM.registerMenuCommand
// @icon https://docs.stashapp.cc/favicon.ico
// @license MIT
// @run-at document-end
// @source https://github.com/timo95/stash-checker
// @updateURL https://github.com/timo95/stash-checker/releases/latest/download/index.prod.meta.js
// ==/UserScript==

/*! For license information please see index.prod.js.LICENSE.txt */
(() => {
  "use strict";
  var __webpack_modules__ = {
    661: (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => __WEBPACK_DEFAULT_EXPORT__
      });
      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
      ___CSS_LOADER_EXPORT___.push([ module.id, `:root {\n  --stash-checker-color-text: #323232 !important;\n  --stash-checker-color-text-light: #989898 !important;\n  --stash-checker-color-link-visited: #323232 !important;\n  --stash-checker-color-link-hover: #039 !important;\n  --stash-checker-color-link-active: #039 !important;\n  --stash-checker-color-border: #323232 !important;\n  --stash-checker-color-border-light: #989898 !important;\n  --stash-checker-color-bg: #ffffff !important;\n  --stash-checker-color-card: #f2f2f2 !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --stash-checker-color-text: #e0e0e0 !important;\n    --stash-checker-color-text-light: #707070 !important;\n    --stash-checker-color-link-visited: #c7c7c7 !important;\n    --stash-checker-color-link-hover: #f2f2f2 !important;\n    --stash-checker-color-link-active: #039 !important;\n    --stash-checker-color-border: #5a5a5a !important;\n    --stash-checker-color-border-light: #707070 !important;\n    --stash-checker-color-bg: #202020 !important;\n    --stash-checker-color-card: #464646 !important;\n  }\n}\n\n.stashChecker {\n  color: var(--stash-checker-color-text) !important;\n  text-align: left !important;\n  font-size: medium !important;\n  line-height: normal !important;\n  opacity: 1 !important;\n}\n\n.stashChecker.sub-heading {\n  font-size: .8rem !important;\n  text-align: center !important;\n  margin: 0 0 .5rem !important;\n}\n\n.stashChecker.tooltip {\n  visibility: visible !important;\n  position: inherit !important;\n  background-color: var(--stash-checker-color-bg) !important;\n  border: .1rem solid var(--stash-checker-color-border) !important;\n  border-radius: .5rem !important;\n  padding: .5rem !important;\n  max-width: 60rem !important;\n}\n\n.stashChecker.file {\n  margin: .5rem !important;\n  padding: .5rem !important;\n  background-color: var(--stash-checker-color-card) !important;\n}\n\n.stashChecker.tag {\n  white-space: nowrap !important;\n  line-height: 1.5rem !important;\n  margin-right: .5rem !important;\n  padding: 0 .5rem !important;\n  background-color: var(--stash-checker-color-card) !important;\n  border-radius: .5rem !important;\n}\n\n.stashChecker.modal {\n  position: fixed !important;\n  z-index: 999999 !important;\n  left: 0 !important;\n  top: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n  overflow: hidden !important;\n  background-color: #000 !important;\n  background-color: rgba(0,0,0,.4) !important;\n}\n\n.stashChecker.settings {\n  margin: 10vh auto !important;\n  background-color: var(--stash-checker-color-bg) !important;\n  border: .1rem solid var(--stash-checker-color-border) !important;\n  border-radius: .5rem !important;\n  padding: .5rem !important;\n  width: fit-content !important;\n  display: grid !important;\n  gap: 1rem !important;\n}\n\n.stashChecker.settings .version {\n  color: var(--stash-checker-color-text-light) !important;\n  font-size: 1.25rem !important;\n}\n\n.stashChecker.settingsSection {\n  width: 35rem !important;\n}\n\n.stashChecker.settingsSectionBody {\n  width: 100% !important;\n  display: flex !important;\n  flex-flow: row wrap !important;\n  justify-content: flex-start !important;\n  align-items: flex-start !important;\n  gap: .5rem !important;\n}\n\n.stashChecker.endpoint {\n  width: 100% !important;\n  display: flex !important;\n  flex-direction: row !important;\n  justify-content: space-between !important;\n  justify-items: flex-start !important;\n  align-items: center !important;\n  padding: 1rem !important;\n  margin: .1rem !important;\n  background-color: var(--stash-checker-color-card) !important;\n}\n\n.stashChecker.endpoint>button {\n  flex-grow: 0 !important;\n  margin-left: .5rem !important;\n}\n\n.stashChecker.endpoint>div {\n  flex-grow: 1 !important;\n}\n\n.stashChecker.endpoint>div>* {\n  margin: 0 !important;\n}\n\n.stashChecker.heading {\n  font-size: 1.5rem !important;\n  text-align: center !important;\n}\n\n.stashChecker fieldset {\n  width: fit-content !important;\n  border: .1rem solid var(--stash-checker-color-border-light) !important;\n  border-radius: .5rem !important;\n  margin: .5rem 0 .5rem 0 !important;\n  padding: .5rem !important;\n  flex-grow: 1 !important;\n}\n\n.stashChecker legend {\n  float: unset !important;\n  width: auto !important;\n  height: auto !important;\n  margin-left: .5rem !important;\n  margin-bottom: 0 !important;\n  padding-left: .2rem !important;\n  padding-right: .2rem !important;\n  line-height: unset !important;\n  font-size: unset !important;\n}\n\n.stashChecker .option {\n  text-align: right !important;\n  margin: .5rem !important;\n}\n\n.stashChecker .option>input {\n  margin-left: .5rem !important;\n  color: var(--stash-checker-color-text) !important;\n  background-color: var(--stash-checker-color-bg) !important;\n}\n\n.stashChecker>.matchQuality {\n  width: .8em !important;\n  height: .8em !important;\n  display: inline-block !important;\n  border-radius: 50% !important;\n}\n\n.stashChecker.btn {\n  display: inline-block !important;\n  font-weight: 400 !important;\n  color: #212529 !important;\n  text-align: center !important;\n  vertical-align: middle !important;\n  user-select: none !important;\n  background-color: rgba(0,0,0,0) !important;\n  border: 1px solid rgba(0,0,0,0) !important;\n  padding: .375rem .75rem !important;\n  font-size: 1rem !important;\n  line-height: 1.5 !important;\n  border-radius: .25rem !important;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out !important;\n}\n\n.stashChecker.btn:not(:disabled):not(.disabled) {\n  cursor: pointer !important;\n}\n\n.stashChecker.btn:hover {\n  color: #212529 !important;\n  text-decoration: none !important;\n}\n\n.stashChecker.btn-primary {\n  color: #fff !important;\n  background-color: #137cbd !important;\n  border-color: #137cbd !important;\n}\n\n.stashChecker.btn-primary:hover {\n  color: #fff !important;\n  background-color: #10659a !important;\n  border-color: #0e5e8f !important;\n}\n\n.stashChecker.btn-danger {\n  color: #fff !important;\n  background-color: #db3737 !important;\n  border-color: #db3737 !important;\n}\n\n.stashChecker.btn-danger:hover {\n  color: #fff !important;\n  background-color: #c82424 !important;\n  border-color: #bd2222 !important;\n}\n\n.stashChecker.tooltip a:link {\n  color: var(--stash-checker-color-text) !important;\n}\n\n.stashChecker.tooltip a:visited {\n  color: var(--stash-checker-color-link-visited) !important;\n}\n\n.stashChecker.tooltip a:hover {\n  color: var(--stash-checker-color-link-hover) !important;\n}\n\n.stashChecker.tooltip a:active {\n  color: var(--stash-checker-color-link-active) !important;\n}\n\n.stashChecker.tooltip hr {\n  margin-top: .5rem !important;\n  margin-bottom: .5rem !important;\n  border-color: var(--stash-checker-color-border-light) !important;\n  background-color: var(--stash-checker-color-border-light) !important;\n}\n\n.stashChecker.tooltip hr+br {\n  display: none !important;\n}\n\n.stashChecker.file+br {\n  display: none !important;\n}\n\n.stashCheckerSymbol {\n  font-size: inherit !important;\n}`, "" ]);
      const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
    },
    314: module => {
      module.exports = function(cssWithMappingToString) {
        var list = [];
        list.toString = function toString() {
          return this.map((function(item) {
            var content = "";
            var needLayer = typeof item[5] !== "undefined";
            if (item[4]) content += "@supports (".concat(item[4], ") {");
            if (item[2]) content += "@media ".concat(item[2], " {");
            if (needLayer) content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
            content += cssWithMappingToString(item);
            if (needLayer) content += "}";
            if (item[2]) content += "}";
            if (item[4]) content += "}";
            return content;
          })).join("");
        };
        list.i = function i(modules, media, dedupe, supports, layer) {
          if (typeof modules === "string") modules = [ [ null, modules, void 0 ] ];
          var alreadyImportedModules = {};
          if (dedupe) for (var k = 0; k < this.length; k++) {
            var id = this[k][0];
            if (id != null) alreadyImportedModules[id] = true;
          }
          for (var _k = 0; _k < modules.length; _k++) {
            var item = [].concat(modules[_k]);
            if (dedupe && alreadyImportedModules[item[0]]) continue;
            if (typeof layer !== "undefined") if (typeof item[5] === "undefined") item[5] = layer; else {
              item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
              item[5] = layer;
            }
            if (media) if (!item[2]) item[2] = media; else {
              item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
              item[2] = media;
            }
            if (supports) if (!item[4]) item[4] = "".concat(supports); else {
              item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
              item[4] = supports;
            }
            list.push(item);
          }
        };
        return list;
      };
    },
    601: module => {
      module.exports = function(i) {
        return i[1];
      };
    },
    432: (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
      var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
      var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
      var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(825);
      var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
      var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(659);
      var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
      var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
      var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
      var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(540);
      var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
      var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(113);
      var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
      var _node_modules_css_loader_dist_cjs_js_node_modules_cssimportant_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(661);
      var options = {};
      options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
      options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
      options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
      options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();
      var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_cssimportant_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.A, options);
      var __WEBPACK_DEFAULT_EXPORT__ = _node_modules_css_loader_dist_cjs_js_node_modules_cssimportant_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.A && _node_modules_css_loader_dist_cjs_js_node_modules_cssimportant_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_cssimportant_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals : void 0;
    },
    72: module => {
      var stylesInDOM = [];
      function getIndexByIdentifier(identifier) {
        var result = -1;
        for (var i = 0; i < stylesInDOM.length; i++) if (stylesInDOM[i].identifier === identifier) {
          result = i;
          break;
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
              identifier,
              updater,
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
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) return;
            api.update(obj = newObj);
          } else api.remove();
        };
        return updater;
      }
      module.exports = function(list, options) {
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
    },
    659: module => {
      var memo = {};
      function getTarget(target) {
        if (typeof memo[target] === "undefined") {
          var styleTarget = document.querySelector(target);
          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) try {
            styleTarget = styleTarget.contentDocument.head;
          } catch (e) {
            styleTarget = null;
          }
          memo[target] = styleTarget;
        }
        return memo[target];
      }
      function insertBySelector(insert, style) {
        var target = getTarget(insert);
        if (!target) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        target.appendChild(style);
      }
      module.exports = insertBySelector;
    },
    540: module => {
      function insertStyleElement(options) {
        var element = document.createElement("style");
        options.setAttributes(element, options.attributes);
        options.insert(element, options.options);
        return element;
      }
      module.exports = insertStyleElement;
    },
    56: (module, __unused_webpack_exports, __webpack_require__) => {
      function setAttributesWithoutAttributes(styleElement) {
        var nonce = true ? __webpack_require__.nc : 0;
        if (nonce) styleElement.setAttribute("nonce", nonce);
      }
      module.exports = setAttributesWithoutAttributes;
    },
    825: module => {
      function apply(styleElement, options, obj) {
        var css = "";
        if (obj.supports) css += "@supports (".concat(obj.supports, ") {");
        if (obj.media) css += "@media ".concat(obj.media, " {");
        var needLayer = typeof obj.layer !== "undefined";
        if (needLayer) css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
        css += obj.css;
        if (needLayer) css += "}";
        if (obj.media) css += "}";
        if (obj.supports) css += "}";
        var sourceMap = obj.sourceMap;
        if (sourceMap && typeof btoa !== "undefined") css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
        options.styleTagTransform(css, styleElement, options.options);
      }
      function removeStyleElement(styleElement) {
        if (styleElement.parentNode === null) return false;
        styleElement.parentNode.removeChild(styleElement);
      }
      function domAPI(options) {
        if (typeof document === "undefined") return {
          update: function update() {},
          remove: function remove() {}
        };
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
    },
    113: module => {
      function styleTagTransform(css, styleElement) {
        if (styleElement.styleSheet) styleElement.styleSheet.cssText = css; else {
          while (styleElement.firstChild) styleElement.removeChild(styleElement.firstChild);
          styleElement.appendChild(document.createTextNode(css));
        }
      }
      module.exports = styleTagTransform;
    },
    244: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        Ay: () => tippy_esm
      });
      function getWindow(node) {
        if (node == null) return window;
        if (node.toString() !== "[object Window]") {
          var ownerDocument = node.ownerDocument;
          return ownerDocument ? ownerDocument.defaultView || window : window;
        }
        return node;
      }
      function isElement(node) {
        var OwnElement = getWindow(node).Element;
        return node instanceof OwnElement || node instanceof Element;
      }
      function isHTMLElement(node) {
        var OwnElement = getWindow(node).HTMLElement;
        return node instanceof OwnElement || node instanceof HTMLElement;
      }
      function isShadowRoot(node) {
        if (typeof ShadowRoot === "undefined") return false;
        var OwnElement = getWindow(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
      }
      var math_max = Math.max;
      var math_min = Math.min;
      var round = Math.round;
      function getUAString() {
        var uaData = navigator.userAgentData;
        if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map((function(item) {
          return item.brand + "/" + item.version;
        })).join(" ");
        return navigator.userAgent;
      }
      function isLayoutViewport() {
        return !/^((?!chrome|android).)*safari/i.test(getUAString());
      }
      function getBoundingClientRect(element, includeScale, isFixedStrategy) {
        if (includeScale === void 0) includeScale = false;
        if (isFixedStrategy === void 0) isFixedStrategy = false;
        var clientRect = element.getBoundingClientRect();
        var scaleX = 1;
        var scaleY = 1;
        if (includeScale && isHTMLElement(element)) {
          scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
          scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
        }
        var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
        var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
        var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
        var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
        var width = clientRect.width / scaleX;
        var height = clientRect.height / scaleY;
        return {
          width,
          height,
          top: y,
          right: x + width,
          bottom: y + height,
          left: x,
          x,
          y
        };
      }
      function getWindowScroll(node) {
        var win = getWindow(node);
        var scrollLeft = win.pageXOffset;
        var scrollTop = win.pageYOffset;
        return {
          scrollLeft,
          scrollTop
        };
      }
      function getHTMLElementScroll(element) {
        return {
          scrollLeft: element.scrollLeft,
          scrollTop: element.scrollTop
        };
      }
      function getNodeScroll(node) {
        if (node === getWindow(node) || !isHTMLElement(node)) return getWindowScroll(node); else return getHTMLElementScroll(node);
      }
      function getNodeName(element) {
        return element ? (element.nodeName || "").toLowerCase() : null;
      }
      function getDocumentElement(element) {
        return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
      }
      function getWindowScrollBarX(element) {
        return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
      }
      function getComputedStyle(element) {
        return getWindow(element).getComputedStyle(element);
      }
      function isScrollParent(element) {
        var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
      }
      function isElementScaled(element) {
        var rect = element.getBoundingClientRect();
        var scaleX = round(rect.width) / element.offsetWidth || 1;
        var scaleY = round(rect.height) / element.offsetHeight || 1;
        return scaleX !== 1 || scaleY !== 1;
      }
      function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
        if (isFixed === void 0) isFixed = false;
        var isOffsetParentAnElement = isHTMLElement(offsetParent);
        var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
        var documentElement = getDocumentElement(offsetParent);
        var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
        var scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        var offsets = {
          x: 0,
          y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
          if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) scroll = getNodeScroll(offsetParent);
          if (isHTMLElement(offsetParent)) {
            offsets = getBoundingClientRect(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
          } else if (documentElement) offsets.x = getWindowScrollBarX(documentElement);
        }
        return {
          x: rect.left + scroll.scrollLeft - offsets.x,
          y: rect.top + scroll.scrollTop - offsets.y,
          width: rect.width,
          height: rect.height
        };
      }
      function getLayoutRect(element) {
        var clientRect = getBoundingClientRect(element);
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
        if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
        return {
          x: element.offsetLeft,
          y: element.offsetTop,
          width,
          height
        };
      }
      function getParentNode(element) {
        if (getNodeName(element) === "html") return element;
        return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
      }
      function getScrollParent(node) {
        if ([ "html", "body", "#document" ].indexOf(getNodeName(node)) >= 0) return node.ownerDocument.body;
        if (isHTMLElement(node) && isScrollParent(node)) return node;
        return getScrollParent(getParentNode(node));
      }
      function listScrollParents(element, list) {
        var _element$ownerDocumen;
        if (list === void 0) list = [];
        var scrollParent = getScrollParent(element);
        var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
        var win = getWindow(scrollParent);
        var target = isBody ? [ win ].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
        var updatedList = list.concat(target);
        return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
      }
      function isTableElement(element) {
        return [ "table", "td", "th" ].indexOf(getNodeName(element)) >= 0;
      }
      function getTrueOffsetParent(element) {
        if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") return null;
        return element.offsetParent;
      }
      function getContainingBlock(element) {
        var isFirefox = /firefox/i.test(getUAString());
        var isIE = /Trident/i.test(getUAString());
        if (isIE && isHTMLElement(element)) {
          var elementCss = getComputedStyle(element);
          if (elementCss.position === "fixed") return null;
        }
        var currentNode = getParentNode(element);
        if (isShadowRoot(currentNode)) currentNode = currentNode.host;
        while (isHTMLElement(currentNode) && [ "html", "body" ].indexOf(getNodeName(currentNode)) < 0) {
          var css = getComputedStyle(currentNode);
          if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [ "transform", "perspective" ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode; else currentNode = currentNode.parentNode;
        }
        return null;
      }
      function getOffsetParent(element) {
        var window = getWindow(element);
        var offsetParent = getTrueOffsetParent(element);
        while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") offsetParent = getTrueOffsetParent(offsetParent);
        if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) return window;
        return offsetParent || getContainingBlock(element) || window;
      }
      var enums_top = "top";
      var bottom = "bottom";
      var right = "right";
      var left = "left";
      var auto = "auto";
      var basePlacements = [ enums_top, bottom, right, left ];
      var start = "start";
      var end = "end";
      var clippingParents = "clippingParents";
      var viewport = "viewport";
      var popper = "popper";
      var reference = "reference";
      var variationPlacements = basePlacements.reduce((function(acc, placement) {
        return acc.concat([ placement + "-" + start, placement + "-" + end ]);
      }), []);
      var enums_placements = [].concat(basePlacements, [ auto ]).reduce((function(acc, placement) {
        return acc.concat([ placement, placement + "-" + start, placement + "-" + end ]);
      }), []);
      var beforeRead = "beforeRead";
      var read = "read";
      var afterRead = "afterRead";
      var beforeMain = "beforeMain";
      var main = "main";
      var afterMain = "afterMain";
      var beforeWrite = "beforeWrite";
      var write = "write";
      var afterWrite = "afterWrite";
      var modifierPhases = [ beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite ];
      function order(modifiers) {
        var map = new Map;
        var visited = new Set;
        var result = [];
        modifiers.forEach((function(modifier) {
          map.set(modifier.name, modifier);
        }));
        function sort(modifier) {
          visited.add(modifier.name);
          var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
          requires.forEach((function(dep) {
            if (!visited.has(dep)) {
              var depModifier = map.get(dep);
              if (depModifier) sort(depModifier);
            }
          }));
          result.push(modifier);
        }
        modifiers.forEach((function(modifier) {
          if (!visited.has(modifier.name)) sort(modifier);
        }));
        return result;
      }
      function orderModifiers(modifiers) {
        var orderedModifiers = order(modifiers);
        return modifierPhases.reduce((function(acc, phase) {
          return acc.concat(orderedModifiers.filter((function(modifier) {
            return modifier.phase === phase;
          })));
        }), []);
      }
      function debounce(fn) {
        var pending;
        return function() {
          if (!pending) pending = new Promise((function(resolve) {
            Promise.resolve().then((function() {
              pending = void 0;
              resolve(fn());
            }));
          }));
          return pending;
        };
      }
      function mergeByName(modifiers) {
        var merged = modifiers.reduce((function(merged, current) {
          var existing = merged[current.name];
          merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
          }) : current;
          return merged;
        }), {});
        return Object.keys(merged).map((function(key) {
          return merged[key];
        }));
      }
      var DEFAULT_OPTIONS = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      };
      function areValidElements() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
        return !args.some((function(element) {
          return !(element && typeof element.getBoundingClientRect === "function");
        }));
      }
      function popperGenerator(generatorOptions) {
        if (generatorOptions === void 0) generatorOptions = {};
        var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
        return function createPopper(reference, popper, options) {
          if (options === void 0) options = defaultOptions;
          var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
              reference,
              popper
            },
            attributes: {},
            styles: {}
          };
          var effectCleanupFns = [];
          var isDestroyed = false;
          var instance = {
            state,
            setOptions: function setOptions(setOptionsAction) {
              var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
              cleanupModifierEffects();
              state.options = Object.assign({}, defaultOptions, state.options, options);
              state.scrollParents = {
                reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
                popper: listScrollParents(popper)
              };
              var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers)));
              state.orderedModifiers = orderedModifiers.filter((function(m) {
                return m.enabled;
              }));
              runModifierEffects();
              return instance.update();
            },
            forceUpdate: function forceUpdate() {
              if (isDestroyed) return;
              var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper;
              if (!areValidElements(reference, popper)) return;
              state.rects = {
                reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === "fixed"),
                popper: getLayoutRect(popper)
              };
              state.reset = false;
              state.placement = state.options.placement;
              state.orderedModifiers.forEach((function(modifier) {
                return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
              }));
              for (var index = 0; index < state.orderedModifiers.length; index++) {
                if (state.reset === true) {
                  state.reset = false;
                  index = -1;
                  continue;
                }
                var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                if (typeof fn === "function") state = fn({
                  state,
                  options: _options,
                  name,
                  instance
                }) || state;
              }
            },
            update: debounce((function() {
              return new Promise((function(resolve) {
                instance.forceUpdate();
                resolve(state);
              }));
            })),
            destroy: function destroy() {
              cleanupModifierEffects();
              isDestroyed = true;
            }
          };
          if (!areValidElements(reference, popper)) return instance;
          instance.setOptions(options).then((function(state) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
          }));
          function runModifierEffects() {
            state.orderedModifiers.forEach((function(_ref) {
              var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
              if (typeof effect === "function") {
                var cleanupFn = effect({
                  state,
                  name,
                  instance,
                  options
                });
                var noopFn = function noopFn() {};
                effectCleanupFns.push(cleanupFn || noopFn);
              }
            }));
          }
          function cleanupModifierEffects() {
            effectCleanupFns.forEach((function(fn) {
              return fn();
            }));
            effectCleanupFns = [];
          }
          return instance;
        };
      }
      var createPopper = null && popperGenerator();
      var passive = {
        passive: true
      };
      function effect(_ref) {
        var state = _ref.state, instance = _ref.instance, options = _ref.options;
        var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
        var window = getWindow(state.elements.popper);
        var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
        if (scroll) scrollParents.forEach((function(scrollParent) {
          scrollParent.addEventListener("scroll", instance.update, passive);
        }));
        if (resize) window.addEventListener("resize", instance.update, passive);
        return function() {
          if (scroll) scrollParents.forEach((function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, passive);
          }));
          if (resize) window.removeEventListener("resize", instance.update, passive);
        };
      }
      const eventListeners = {
        name: "eventListeners",
        enabled: true,
        phase: "write",
        fn: function fn() {},
        effect,
        data: {}
      };
      function getBasePlacement(placement) {
        return placement.split("-")[0];
      }
      function getVariation(placement) {
        return placement.split("-")[1];
      }
      function getMainAxisFromPlacement(placement) {
        return [ "top", "bottom" ].indexOf(placement) >= 0 ? "x" : "y";
      }
      function computeOffsets(_ref) {
        var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
        var basePlacement = placement ? getBasePlacement(placement) : null;
        var variation = placement ? getVariation(placement) : null;
        var commonX = reference.x + reference.width / 2 - element.width / 2;
        var commonY = reference.y + reference.height / 2 - element.height / 2;
        var offsets;
        switch (basePlacement) {
         case enums_top:
          offsets = {
            x: commonX,
            y: reference.y - element.height
          };
          break;

         case bottom:
          offsets = {
            x: commonX,
            y: reference.y + reference.height
          };
          break;

         case right:
          offsets = {
            x: reference.x + reference.width,
            y: commonY
          };
          break;

         case left:
          offsets = {
            x: reference.x - element.width,
            y: commonY
          };
          break;

         default:
          offsets = {
            x: reference.x,
            y: reference.y
          };
        }
        var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
        if (mainAxis != null) {
          var len = mainAxis === "y" ? "height" : "width";
          switch (variation) {
           case start:
            offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
            break;

           case end:
            offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
            break;

           default:
          }
        }
        return offsets;
      }
      function popperOffsets(_ref) {
        var state = _ref.state, name = _ref.name;
        state.modifiersData[name] = computeOffsets({
          reference: state.rects.reference,
          element: state.rects.popper,
          strategy: "absolute",
          placement: state.placement
        });
      }
      const modifiers_popperOffsets = {
        name: "popperOffsets",
        enabled: true,
        phase: "read",
        fn: popperOffsets,
        data: {}
      };
      var unsetSides = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      };
      function roundOffsetsByDPR(_ref, win) {
        var x = _ref.x, y = _ref.y;
        var dpr = win.devicePixelRatio || 1;
        return {
          x: round(x * dpr) / dpr || 0,
          y: round(y * dpr) / dpr || 0
        };
      }
      function mapToStyles(_ref2) {
        var _Object$assign2;
        var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
        var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
        var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
          x,
          y
        }) : {
          x,
          y
        };
        x = _ref3.x;
        y = _ref3.y;
        var hasX = offsets.hasOwnProperty("x");
        var hasY = offsets.hasOwnProperty("y");
        var sideX = left;
        var sideY = enums_top;
        var win = window;
        if (adaptive) {
          var offsetParent = getOffsetParent(popper);
          var heightProp = "clientHeight";
          var widthProp = "clientWidth";
          if (offsetParent === getWindow(popper)) {
            offsetParent = getDocumentElement(popper);
            if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
              heightProp = "scrollHeight";
              widthProp = "scrollWidth";
            }
          }
          offsetParent;
          if (placement === enums_top || (placement === left || placement === right) && variation === end) {
            sideY = bottom;
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
          }
          if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
            sideX = right;
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
          }
        }
        var commonStyles = Object.assign({
          position
        }, adaptive && unsetSides);
        var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
          x,
          y
        }, getWindow(popper)) : {
          x,
          y
        };
        x = _ref4.x;
        y = _ref4.y;
        if (gpuAcceleration) {
          var _Object$assign;
          return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", 
          _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", 
          _Object$assign));
        }
        return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", 
        _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
      }
      function computeStyles(_ref5) {
        var state = _ref5.state, options = _ref5.options;
        var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
        var commonStyles = {
          placement: getBasePlacement(state.placement),
          variation: getVariation(state.placement),
          popper: state.elements.popper,
          popperRect: state.rects.popper,
          gpuAcceleration,
          isFixed: state.options.strategy === "fixed"
        };
        if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
          offsets: state.modifiersData.popperOffsets,
          position: state.options.strategy,
          adaptive,
          roundOffsets
        })));
        if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
          offsets: state.modifiersData.arrow,
          position: "absolute",
          adaptive: false,
          roundOffsets
        })));
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-placement": state.placement
        });
      }
      const modifiers_computeStyles = {
        name: "computeStyles",
        enabled: true,
        phase: "beforeWrite",
        fn: computeStyles,
        data: {}
      };
      function applyStyles(_ref) {
        var state = _ref.state;
        Object.keys(state.elements).forEach((function(name) {
          var style = state.styles[name] || {};
          var attributes = state.attributes[name] || {};
          var element = state.elements[name];
          if (!isHTMLElement(element) || !getNodeName(element)) return;
          Object.assign(element.style, style);
          Object.keys(attributes).forEach((function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name); else element.setAttribute(name, value === true ? "" : value);
          }));
        }));
      }
      function applyStyles_effect(_ref2) {
        var state = _ref2.state;
        var initialStyles = {
          popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
        return function() {
          Object.keys(state.elements).forEach((function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
            var style = styleProperties.reduce((function(style, property) {
              style[property] = "";
              return style;
            }), {});
            if (!isHTMLElement(element) || !getNodeName(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach((function(attribute) {
              element.removeAttribute(attribute);
            }));
          }));
        };
      }
      const modifiers_applyStyles = {
        name: "applyStyles",
        enabled: true,
        phase: "write",
        fn: applyStyles,
        effect: applyStyles_effect,
        requires: [ "computeStyles" ]
      };
      function distanceAndSkiddingToXY(placement, rects, offset) {
        var basePlacement = getBasePlacement(placement);
        var invertDistance = [ left, enums_top ].indexOf(basePlacement) >= 0 ? -1 : 1;
        var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
          placement
        })) : offset, skidding = _ref[0], distance = _ref[1];
        skidding = skidding || 0;
        distance = (distance || 0) * invertDistance;
        return [ left, right ].indexOf(basePlacement) >= 0 ? {
          x: distance,
          y: skidding
        } : {
          x: skidding,
          y: distance
        };
      }
      function offset(_ref2) {
        var state = _ref2.state, options = _ref2.options, name = _ref2.name;
        var _options$offset = options.offset, offset = _options$offset === void 0 ? [ 0, 0 ] : _options$offset;
        var data = enums_placements.reduce((function(acc, placement) {
          acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
          return acc;
        }), {});
        var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
        if (state.modifiersData.popperOffsets != null) {
          state.modifiersData.popperOffsets.x += x;
          state.modifiersData.popperOffsets.y += y;
        }
        state.modifiersData[name] = data;
      }
      const modifiers_offset = {
        name: "offset",
        enabled: true,
        phase: "main",
        requires: [ "popperOffsets" ],
        fn: offset
      };
      var hash = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, (function(matched) {
          return hash[matched];
        }));
      }
      var getOppositeVariationPlacement_hash = {
        start: "end",
        end: "start"
      };
      function getOppositeVariationPlacement(placement) {
        return placement.replace(/start|end/g, (function(matched) {
          return getOppositeVariationPlacement_hash[matched];
        }));
      }
      function getViewportRect(element, strategy) {
        var win = getWindow(element);
        var html = getDocumentElement(element);
        var visualViewport = win.visualViewport;
        var width = html.clientWidth;
        var height = html.clientHeight;
        var x = 0;
        var y = 0;
        if (visualViewport) {
          width = visualViewport.width;
          height = visualViewport.height;
          var layoutViewport = isLayoutViewport();
          if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
          }
        }
        return {
          width,
          height,
          x: x + getWindowScrollBarX(element),
          y
        };
      }
      function getDocumentRect(element) {
        var _element$ownerDocumen;
        var html = getDocumentElement(element);
        var winScroll = getWindowScroll(element);
        var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
        var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
        var y = -winScroll.scrollTop;
        if (getComputedStyle(body || html).direction === "rtl") x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
        return {
          width,
          height,
          x,
          y
        };
      }
      function contains(parent, child) {
        var rootNode = child.getRootNode && child.getRootNode();
        if (parent.contains(child)) return true; else if (rootNode && isShadowRoot(rootNode)) {
          var next = child;
          do {
            if (next && parent.isSameNode(next)) return true;
            next = next.parentNode || next.host;
          } while (next);
        }
        return false;
      }
      function rectToClientRect(rect) {
        return Object.assign({}, rect, {
          left: rect.x,
          top: rect.y,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height
        });
      }
      function getInnerBoundingClientRect(element, strategy) {
        var rect = getBoundingClientRect(element, false, strategy === "fixed");
        rect.top = rect.top + element.clientTop;
        rect.left = rect.left + element.clientLeft;
        rect.bottom = rect.top + element.clientHeight;
        rect.right = rect.left + element.clientWidth;
        rect.width = element.clientWidth;
        rect.height = element.clientHeight;
        rect.x = rect.left;
        rect.y = rect.top;
        return rect;
      }
      function getClientRectFromMixedType(element, clippingParent, strategy) {
        return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
      }
      function getClippingParents(element) {
        var clippingParents = listScrollParents(getParentNode(element));
        var canEscapeClipping = [ "absolute", "fixed" ].indexOf(getComputedStyle(element).position) >= 0;
        var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
        if (!isElement(clipperElement)) return [];
        return clippingParents.filter((function(clippingParent) {
          return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
        }));
      }
      function getClippingRect(element, boundary, rootBoundary, strategy) {
        var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
        var clippingParents = [].concat(mainClippingParents, [ rootBoundary ]);
        var firstClippingParent = clippingParents[0];
        var clippingRect = clippingParents.reduce((function(accRect, clippingParent) {
          var rect = getClientRectFromMixedType(element, clippingParent, strategy);
          accRect.top = math_max(rect.top, accRect.top);
          accRect.right = math_min(rect.right, accRect.right);
          accRect.bottom = math_min(rect.bottom, accRect.bottom);
          accRect.left = math_max(rect.left, accRect.left);
          return accRect;
        }), getClientRectFromMixedType(element, firstClippingParent, strategy));
        clippingRect.width = clippingRect.right - clippingRect.left;
        clippingRect.height = clippingRect.bottom - clippingRect.top;
        clippingRect.x = clippingRect.left;
        clippingRect.y = clippingRect.top;
        return clippingRect;
      }
      function getFreshSideObject() {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
      }
      function mergePaddingObject(paddingObject) {
        return Object.assign({}, getFreshSideObject(), paddingObject);
      }
      function expandToHashMap(value, keys) {
        return keys.reduce((function(hashMap, key) {
          hashMap[key] = value;
          return hashMap;
        }), {});
      }
      function detectOverflow(state, options) {
        if (options === void 0) options = {};
        var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
        var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
        var altContext = elementContext === popper ? reference : popper;
        var popperRect = state.rects.popper;
        var element = state.elements[altBoundary ? altContext : elementContext];
        var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
        var referenceClientRect = getBoundingClientRect(state.elements.reference);
        var popperOffsets = computeOffsets({
          reference: referenceClientRect,
          element: popperRect,
          strategy: "absolute",
          placement
        });
        var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
        var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
        var overflowOffsets = {
          top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
          bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
          left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
          right: elementClientRect.right - clippingClientRect.right + paddingObject.right
        };
        var offsetData = state.modifiersData.offset;
        if (elementContext === popper && offsetData) {
          var offset = offsetData[placement];
          Object.keys(overflowOffsets).forEach((function(key) {
            var multiply = [ right, bottom ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [ enums_top, bottom ].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset[axis] * multiply;
          }));
        }
        return overflowOffsets;
      }
      function computeAutoPlacement(state, options) {
        if (options === void 0) options = {};
        var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
        var variation = getVariation(placement);
        var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter((function(placement) {
          return getVariation(placement) === variation;
        })) : basePlacements;
        var allowedPlacements = placements.filter((function(placement) {
          return allowedAutoPlacements.indexOf(placement) >= 0;
        }));
        if (allowedPlacements.length === 0) allowedPlacements = placements;
        var overflows = allowedPlacements.reduce((function(acc, placement) {
          acc[placement] = detectOverflow(state, {
            placement,
            boundary,
            rootBoundary,
            padding
          })[getBasePlacement(placement)];
          return acc;
        }), {});
        return Object.keys(overflows).sort((function(a, b) {
          return overflows[a] - overflows[b];
        }));
      }
      function getExpandedFallbackPlacements(placement) {
        if (getBasePlacement(placement) === auto) return [];
        var oppositePlacement = getOppositePlacement(placement);
        return [ getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement) ];
      }
      function flip(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        if (state.modifiersData[name]._skip) return;
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
        var preferredPlacement = state.options.placement;
        var basePlacement = getBasePlacement(preferredPlacement);
        var isBasePlacement = basePlacement === preferredPlacement;
        var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [ getOppositePlacement(preferredPlacement) ] : getExpandedFallbackPlacements(preferredPlacement));
        var placements = [ preferredPlacement ].concat(fallbackPlacements).reduce((function(acc, placement) {
          return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
            placement,
            boundary,
            rootBoundary,
            padding,
            flipVariations,
            allowedAutoPlacements
          }) : placement);
        }), []);
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var checksMap = new Map;
        var makeFallbackChecks = true;
        var firstFittingPlacement = placements[0];
        for (var i = 0; i < placements.length; i++) {
          var placement = placements[i];
          var _basePlacement = getBasePlacement(placement);
          var isStartVariation = getVariation(placement) === start;
          var isVertical = [ enums_top, bottom ].indexOf(_basePlacement) >= 0;
          var len = isVertical ? "width" : "height";
          var overflow = detectOverflow(state, {
            placement,
            boundary,
            rootBoundary,
            altBoundary,
            padding
          });
          var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;
          if (referenceRect[len] > popperRect[len]) mainVariationSide = getOppositePlacement(mainVariationSide);
          var altVariationSide = getOppositePlacement(mainVariationSide);
          var checks = [];
          if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
          if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
          if (checks.every((function(check) {
            return check;
          }))) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
          }
          checksMap.set(placement, checks);
        }
        if (makeFallbackChecks) {
          var numberOfChecks = flipVariations ? 3 : 1;
          var _loop = function _loop(_i) {
            var fittingPlacement = placements.find((function(placement) {
              var checks = checksMap.get(placement);
              if (checks) return checks.slice(0, _i).every((function(check) {
                return check;
              }));
            }));
            if (fittingPlacement) {
              firstFittingPlacement = fittingPlacement;
              return "break";
            }
          };
          for (var _i = numberOfChecks; _i > 0; _i--) {
            var _ret = _loop(_i);
            if (_ret === "break") break;
          }
        }
        if (state.placement !== firstFittingPlacement) {
          state.modifiersData[name]._skip = true;
          state.placement = firstFittingPlacement;
          state.reset = true;
        }
      }
      const modifiers_flip = {
        name: "flip",
        enabled: true,
        phase: "main",
        fn: flip,
        requiresIfExists: [ "offset" ],
        data: {
          _skip: false
        }
      };
      function getAltAxis(axis) {
        return axis === "x" ? "y" : "x";
      }
      function within(min, value, max) {
        return math_max(min, math_min(value, max));
      }
      function withinMaxClamp(min, value, max) {
        var v = within(min, value, max);
        return v > max ? max : v;
      }
      function preventOverflow(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
        var overflow = detectOverflow(state, {
          boundary,
          rootBoundary,
          padding,
          altBoundary
        });
        var basePlacement = getBasePlacement(state.placement);
        var variation = getVariation(state.placement);
        var isBasePlacement = !variation;
        var mainAxis = getMainAxisFromPlacement(basePlacement);
        var altAxis = getAltAxis(mainAxis);
        var popperOffsets = state.modifiersData.popperOffsets;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
          placement: state.placement
        })) : tetherOffset;
        var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
          mainAxis: tetherOffsetValue,
          altAxis: tetherOffsetValue
        } : Object.assign({
          mainAxis: 0,
          altAxis: 0
        }, tetherOffsetValue);
        var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
        var data = {
          x: 0,
          y: 0
        };
        if (!popperOffsets) return;
        if (checkMainAxis) {
          var _offsetModifierState$;
          var mainSide = mainAxis === "y" ? enums_top : left;
          var altSide = mainAxis === "y" ? bottom : right;
          var len = mainAxis === "y" ? "height" : "width";
          var offset = popperOffsets[mainAxis];
          var min = offset + overflow[mainSide];
          var max = offset - overflow[altSide];
          var additive = tether ? -popperRect[len] / 2 : 0;
          var minLen = variation === start ? referenceRect[len] : popperRect[len];
          var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
          var arrowElement = state.elements.arrow;
          var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
            width: 0,
            height: 0
          };
          var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
          var arrowPaddingMin = arrowPaddingObject[mainSide];
          var arrowPaddingMax = arrowPaddingObject[altSide];
          var arrowLen = within(0, referenceRect[len], arrowRect[len]);
          var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
          var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
          var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
          var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
          var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
          var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
          var tetherMax = offset + maxOffset - offsetModifierValue;
          var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
          popperOffsets[mainAxis] = preventedOffset;
          data[mainAxis] = preventedOffset - offset;
        }
        if (checkAltAxis) {
          var _offsetModifierState$2;
          var _mainSide = mainAxis === "x" ? enums_top : left;
          var _altSide = mainAxis === "x" ? bottom : right;
          var _offset = popperOffsets[altAxis];
          var _len = altAxis === "y" ? "height" : "width";
          var _min = _offset + overflow[_mainSide];
          var _max = _offset - overflow[_altSide];
          var isOriginSide = [ enums_top, left ].indexOf(basePlacement) !== -1;
          var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
          var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
          var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
          var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
          popperOffsets[altAxis] = _preventedOffset;
          data[altAxis] = _preventedOffset - _offset;
        }
        state.modifiersData[name] = data;
      }
      const modifiers_preventOverflow = {
        name: "preventOverflow",
        enabled: true,
        phase: "main",
        fn: preventOverflow,
        requiresIfExists: [ "offset" ]
      };
      var toPaddingObject = function toPaddingObject(padding, state) {
        padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
          placement: state.placement
        })) : padding;
        return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
      };
      function arrow(_ref) {
        var _state$modifiersData$;
        var state = _ref.state, name = _ref.name, options = _ref.options;
        var arrowElement = state.elements.arrow;
        var popperOffsets = state.modifiersData.popperOffsets;
        var basePlacement = getBasePlacement(state.placement);
        var axis = getMainAxisFromPlacement(basePlacement);
        var isVertical = [ left, right ].indexOf(basePlacement) >= 0;
        var len = isVertical ? "height" : "width";
        if (!arrowElement || !popperOffsets) return;
        var paddingObject = toPaddingObject(options.padding, state);
        var arrowRect = getLayoutRect(arrowElement);
        var minProp = axis === "y" ? enums_top : left;
        var maxProp = axis === "y" ? bottom : right;
        var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
        var startDiff = popperOffsets[axis] - state.rects.reference[axis];
        var arrowOffsetParent = getOffsetParent(arrowElement);
        var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
        var centerToReference = endDiff / 2 - startDiff / 2;
        var min = paddingObject[minProp];
        var max = clientSize - arrowRect[len] - paddingObject[maxProp];
        var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
        var offset = within(min, center, max);
        var axisProp = axis;
        state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, 
        _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
      }
      function arrow_effect(_ref2) {
        var state = _ref2.state, options = _ref2.options;
        var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
        if (arrowElement == null) return;
        if (typeof arrowElement === "string") {
          arrowElement = state.elements.popper.querySelector(arrowElement);
          if (!arrowElement) return;
        }
        if (!contains(state.elements.popper, arrowElement)) return;
        state.elements.arrow = arrowElement;
      }
      const modifiers_arrow = {
        name: "arrow",
        enabled: true,
        phase: "main",
        fn: arrow,
        effect: arrow_effect,
        requires: [ "popperOffsets" ],
        requiresIfExists: [ "preventOverflow" ]
      };
      function getSideOffsets(overflow, rect, preventedOffsets) {
        if (preventedOffsets === void 0) preventedOffsets = {
          x: 0,
          y: 0
        };
        return {
          top: overflow.top - rect.height - preventedOffsets.y,
          right: overflow.right - rect.width + preventedOffsets.x,
          bottom: overflow.bottom - rect.height + preventedOffsets.y,
          left: overflow.left - rect.width - preventedOffsets.x
        };
      }
      function isAnySideFullyClipped(overflow) {
        return [ enums_top, right, bottom, left ].some((function(side) {
          return overflow[side] >= 0;
        }));
      }
      function hide(_ref) {
        var state = _ref.state, name = _ref.name;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var preventedOffsets = state.modifiersData.preventOverflow;
        var referenceOverflow = detectOverflow(state, {
          elementContext: "reference"
        });
        var popperAltOverflow = detectOverflow(state, {
          altBoundary: true
        });
        var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
        var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
        var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
        var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
        state.modifiersData[name] = {
          referenceClippingOffsets,
          popperEscapeOffsets,
          isReferenceHidden,
          hasPopperEscaped
        };
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-reference-hidden": isReferenceHidden,
          "data-popper-escaped": hasPopperEscaped
        });
      }
      const modifiers_hide = {
        name: "hide",
        enabled: true,
        phase: "main",
        requiresIfExists: [ "preventOverflow" ],
        fn: hide
      };
      var defaultModifiers = [ eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide ];
      var popper_createPopper = popperGenerator({
        defaultModifiers
      });
      var ROUND_ARROW = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
      var BOX_CLASS = "tippy-box";
      var CONTENT_CLASS = "tippy-content";
      var BACKDROP_CLASS = "tippy-backdrop";
      var ARROW_CLASS = "tippy-arrow";
      var SVG_ARROW_CLASS = "tippy-svg-arrow";
      var TOUCH_OPTIONS = {
        passive: true,
        capture: true
      };
      var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
        return document.body;
      };
      function tippy_esm_hasOwnProperty(obj, key) {
        return {}.hasOwnProperty.call(obj, key);
      }
      function getValueAtIndexOrReturn(value, index, defaultValue) {
        if (Array.isArray(value)) {
          var v = value[index];
          return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
        }
        return value;
      }
      function isType(value, type) {
        var str = {}.toString.call(value);
        return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
      }
      function invokeWithArgsOrReturn(value, args) {
        return typeof value === "function" ? value.apply(void 0, args) : value;
      }
      function tippy_esm_debounce(fn, ms) {
        if (ms === 0) return fn;
        var timeout;
        return function(arg) {
          clearTimeout(timeout);
          timeout = setTimeout((function() {
            fn(arg);
          }), ms);
        };
      }
      function removeProperties(obj, keys) {
        var clone = Object.assign({}, obj);
        keys.forEach((function(key) {
          delete clone[key];
        }));
        return clone;
      }
      function splitBySpaces(value) {
        return value.split(/\s+/).filter(Boolean);
      }
      function normalizeToArray(value) {
        return [].concat(value);
      }
      function pushIfUnique(arr, value) {
        if (arr.indexOf(value) === -1) arr.push(value);
      }
      function unique(arr) {
        return arr.filter((function(item, index) {
          return arr.indexOf(item) === index;
        }));
      }
      function tippy_esm_getBasePlacement(placement) {
        return placement.split("-")[0];
      }
      function arrayFrom(value) {
        return [].slice.call(value);
      }
      function removeUndefinedProps(obj) {
        return Object.keys(obj).reduce((function(acc, key) {
          if (obj[key] !== void 0) acc[key] = obj[key];
          return acc;
        }), {});
      }
      function div() {
        return document.createElement("div");
      }
      function tippy_esm_isElement(value) {
        return [ "Element", "Fragment" ].some((function(type) {
          return isType(value, type);
        }));
      }
      function isNodeList(value) {
        return isType(value, "NodeList");
      }
      function isMouseEvent(value) {
        return isType(value, "MouseEvent");
      }
      function isReferenceElement(value) {
        return !!(value && value._tippy && value._tippy.reference === value);
      }
      function getArrayOfElements(value) {
        if (tippy_esm_isElement(value)) return [ value ];
        if (isNodeList(value)) return arrayFrom(value);
        if (Array.isArray(value)) return value;
        return arrayFrom(document.querySelectorAll(value));
      }
      function setTransitionDuration(els, value) {
        els.forEach((function(el) {
          if (el) el.style.transitionDuration = value + "ms";
        }));
      }
      function setVisibilityState(els, state) {
        els.forEach((function(el) {
          if (el) el.setAttribute("data-state", state);
        }));
      }
      function getOwnerDocument(elementOrElements) {
        var _element$ownerDocumen;
        var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
        return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
      }
      function isCursorOutsideInteractiveBorder(popperTreeData, event) {
        var clientX = event.clientX, clientY = event.clientY;
        return popperTreeData.every((function(_ref) {
          var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
          var interactiveBorder = props.interactiveBorder;
          var basePlacement = tippy_esm_getBasePlacement(popperState.placement);
          var offsetData = popperState.modifiersData.offset;
          if (!offsetData) return true;
          var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
          var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
          var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
          var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
          var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
          var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
          var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
          var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
          return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
        }));
      }
      function updateTransitionEndListener(box, action, listener) {
        var method = action + "EventListener";
        [ "transitionend", "webkitTransitionEnd" ].forEach((function(event) {
          box[method](event, listener);
        }));
      }
      function actualContains(parent, child) {
        var target = child;
        while (target) {
          var _target$getRootNode;
          if (parent.contains(target)) return true;
          target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
        }
        return false;
      }
      var currentInput = {
        isTouch: false
      };
      var lastMouseMoveTime = 0;
      function onDocumentTouchStart() {
        if (currentInput.isTouch) return;
        currentInput.isTouch = true;
        if (window.performance) document.addEventListener("mousemove", onDocumentMouseMove);
      }
      function onDocumentMouseMove() {
        var now = performance.now();
        if (now - lastMouseMoveTime < 20) {
          currentInput.isTouch = false;
          document.removeEventListener("mousemove", onDocumentMouseMove);
        }
        lastMouseMoveTime = now;
      }
      function onWindowBlur() {
        var activeElement = document.activeElement;
        if (isReferenceElement(activeElement)) {
          var instance = activeElement._tippy;
          if (activeElement.blur && !instance.state.isVisible) activeElement.blur();
        }
      }
      function bindGlobalEventListeners() {
        document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
        window.addEventListener("blur", onWindowBlur);
      }
      var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
      var isIE11 = isBrowser ? !!window.msCrypto : false;
      function createMemoryLeakWarning(method) {
        var txt = method === "destroy" ? "n already-" : " ";
        return [ method + "() was called on a" + txt + "destroyed instance. This is a no-op but", "indicates a potential memory leak." ].join(" ");
      }
      function clean(value) {
        var spacesAndTabs = /[ \t]{2,}/g;
        var lineStartWithSpaces = /^[ \t]*/gm;
        return value.replace(spacesAndTabs, " ").replace(lineStartWithSpaces, "").trim();
      }
      function getDevMessage(message) {
        return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c👷‍ This is a development-only message. It will be removed in production.\n  ");
      }
      function getFormattedMessage(message) {
        return [ getDevMessage(message), "color: #00C584; font-size: 1.3em; font-weight: bold;", "line-height: 1.5", "color: #a6a095;" ];
      }
      var visitedMessages;
      if (false) ;
      function resetVisitedMessages() {
        visitedMessages = new Set;
      }
      function warnWhen(condition, message) {
        if (condition && !visitedMessages.has(message)) {
          var _console;
          visitedMessages.add(message);
          (_console = console).warn.apply(_console, getFormattedMessage(message));
        }
      }
      function errorWhen(condition, message) {
        if (condition && !visitedMessages.has(message)) {
          var _console2;
          visitedMessages.add(message);
          (_console2 = console).error.apply(_console2, getFormattedMessage(message));
        }
      }
      function validateTargets(targets) {
        var didPassFalsyValue = !targets;
        var didPassPlainObject = Object.prototype.toString.call(targets) === "[object Object]" && !targets.addEventListener;
        errorWhen(didPassFalsyValue, [ "tippy() was passed", "`" + String(targets) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList." ].join(" "));
        errorWhen(didPassPlainObject, [ "tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead." ].join(" "));
      }
      var pluginProps = {
        animateFill: false,
        followCursor: false,
        inlinePositioning: false,
        sticky: false
      };
      var renderProps = {
        allowHTML: false,
        animation: "fade",
        arrow: true,
        content: "",
        inertia: false,
        maxWidth: 350,
        role: "tooltip",
        theme: "",
        zIndex: 9999
      };
      var defaultProps = Object.assign({
        appendTo: TIPPY_DEFAULT_APPEND_TO,
        aria: {
          content: "auto",
          expanded: "auto"
        },
        delay: 0,
        duration: [ 300, 250 ],
        getReferenceClientRect: null,
        hideOnClick: true,
        ignoreAttributes: false,
        interactive: false,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: "",
        offset: [ 0, 10 ],
        onAfterUpdate: function onAfterUpdate() {},
        onBeforeUpdate: function onBeforeUpdate() {},
        onCreate: function onCreate() {},
        onDestroy: function onDestroy() {},
        onHidden: function onHidden() {},
        onHide: function onHide() {},
        onMount: function onMount() {},
        onShow: function onShow() {},
        onShown: function onShown() {},
        onTrigger: function onTrigger() {},
        onUntrigger: function onUntrigger() {},
        onClickOutside: function onClickOutside() {},
        placement: "top",
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: false,
        touch: true,
        trigger: "mouseenter focus",
        triggerTarget: null
      }, pluginProps, renderProps);
      var defaultKeys = Object.keys(defaultProps);
      var setDefaultProps = function setDefaultProps(partialProps) {
        if (false) ;
        var keys = Object.keys(partialProps);
        keys.forEach((function(key) {
          defaultProps[key] = partialProps[key];
        }));
      };
      function getExtendedPassedProps(passedProps) {
        var plugins = passedProps.plugins || [];
        var pluginProps = plugins.reduce((function(acc, plugin) {
          var name = plugin.name, defaultValue = plugin.defaultValue;
          if (name) {
            var _name;
            acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
          }
          return acc;
        }), {});
        return Object.assign({}, passedProps, pluginProps);
      }
      function getDataAttributeProps(reference, plugins) {
        var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
          plugins
        }))) : defaultKeys;
        var props = propKeys.reduce((function(acc, key) {
          var valueAsString = (reference.getAttribute("data-tippy-" + key) || "").trim();
          if (!valueAsString) return acc;
          if (key === "content") acc[key] = valueAsString; else try {
            acc[key] = JSON.parse(valueAsString);
          } catch (e) {
            acc[key] = valueAsString;
          }
          return acc;
        }), {});
        return props;
      }
      function evaluateProps(reference, props) {
        var out = Object.assign({}, props, {
          content: invokeWithArgsOrReturn(props.content, [ reference ])
        }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
        out.aria = Object.assign({}, defaultProps.aria, out.aria);
        out.aria = {
          expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
          content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
        };
        return out;
      }
      function validateProps(partialProps, plugins) {
        if (partialProps === void 0) partialProps = {};
        if (plugins === void 0) plugins = [];
        var keys = Object.keys(partialProps);
        keys.forEach((function(prop) {
          var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
          var didPassUnknownProp = !tippy_esm_hasOwnProperty(nonPluginProps, prop);
          if (didPassUnknownProp) didPassUnknownProp = plugins.filter((function(plugin) {
            return plugin.name === prop;
          })).length === 0;
          warnWhen(didPassUnknownProp, [ "`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", "\n\n", "All props: https://atomiks.github.io/tippyjs/v6/all-props/\n", "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/" ].join(" "));
        }));
      }
      var innerHTML = function innerHTML() {
        return "innerHTML";
      };
      function dangerouslySetInnerHTML(element, html) {
        element[innerHTML()] = html;
      }
      function createArrowElement(value) {
        var arrow = div();
        if (value === true) arrow.className = ARROW_CLASS; else {
          arrow.className = SVG_ARROW_CLASS;
          if (tippy_esm_isElement(value)) arrow.appendChild(value); else dangerouslySetInnerHTML(arrow, value);
        }
        return arrow;
      }
      function setContent(content, props) {
        if (tippy_esm_isElement(props.content)) {
          dangerouslySetInnerHTML(content, "");
          content.appendChild(props.content);
        } else if (typeof props.content !== "function") if (props.allowHTML) dangerouslySetInnerHTML(content, props.content); else content.textContent = props.content;
      }
      function getChildren(popper) {
        var box = popper.firstElementChild;
        var boxChildren = arrayFrom(box.children);
        return {
          box,
          content: boxChildren.find((function(node) {
            return node.classList.contains(CONTENT_CLASS);
          })),
          arrow: boxChildren.find((function(node) {
            return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
          })),
          backdrop: boxChildren.find((function(node) {
            return node.classList.contains(BACKDROP_CLASS);
          }))
        };
      }
      function render(instance) {
        var popper = div();
        var box = div();
        box.className = BOX_CLASS;
        box.setAttribute("data-state", "hidden");
        box.setAttribute("tabindex", "-1");
        var content = div();
        content.className = CONTENT_CLASS;
        content.setAttribute("data-state", "hidden");
        setContent(content, instance.props);
        popper.appendChild(box);
        box.appendChild(content);
        onUpdate(instance.props, instance.props);
        function onUpdate(prevProps, nextProps) {
          var _getChildren = getChildren(popper), box = _getChildren.box, content = _getChildren.content, arrow = _getChildren.arrow;
          if (nextProps.theme) box.setAttribute("data-theme", nextProps.theme); else box.removeAttribute("data-theme");
          if (typeof nextProps.animation === "string") box.setAttribute("data-animation", nextProps.animation); else box.removeAttribute("data-animation");
          if (nextProps.inertia) box.setAttribute("data-inertia", ""); else box.removeAttribute("data-inertia");
          box.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
          if (nextProps.role) box.setAttribute("role", nextProps.role); else box.removeAttribute("role");
          if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) setContent(content, instance.props);
          if (nextProps.arrow) {
            if (!arrow) box.appendChild(createArrowElement(nextProps.arrow)); else if (prevProps.arrow !== nextProps.arrow) {
              box.removeChild(arrow);
              box.appendChild(createArrowElement(nextProps.arrow));
            }
          } else if (arrow) box.removeChild(arrow);
        }
        return {
          popper,
          onUpdate
        };
      }
      render.$$tippy = true;
      var idCounter = 1;
      var mouseMoveListeners = [];
      var mountedInstances = [];
      function createTippy(reference, passedProps) {
        var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
        var showTimeout;
        var hideTimeout;
        var scheduleHideAnimationFrame;
        var isVisibleFromClick = false;
        var didHideDueToDocumentMouseDown = false;
        var didTouchMove = false;
        var ignoreOnFirstUpdate = false;
        var lastTriggerEvent;
        var currentTransitionEndListener;
        var onFirstUpdate;
        var listeners = [];
        var debouncedOnMouseMove = tippy_esm_debounce(onMouseMove, props.interactiveDebounce);
        var currentTarget;
        var id = idCounter++;
        var popperInstance = null;
        var plugins = unique(props.plugins);
        var state = {
          isEnabled: true,
          isVisible: false,
          isDestroyed: false,
          isMounted: false,
          isShown: false
        };
        var instance = {
          id,
          reference,
          popper: div(),
          popperInstance,
          props,
          state,
          plugins,
          clearDelayTimeouts,
          setProps,
          setContent,
          show,
          hide,
          hideWithInteractivity,
          enable,
          disable,
          unmount,
          destroy
        };
        if (!props.render) {
          if (false) ;
          return instance;
        }
        var _props$render = props.render(instance), popper = _props$render.popper, onUpdate = _props$render.onUpdate;
        popper.setAttribute("data-tippy-root", "");
        popper.id = "tippy-" + instance.id;
        instance.popper = popper;
        reference._tippy = instance;
        popper._tippy = instance;
        var pluginsHooks = plugins.map((function(plugin) {
          return plugin.fn(instance);
        }));
        var hasAriaExpanded = reference.hasAttribute("aria-expanded");
        addListeners();
        handleAriaExpandedAttribute();
        handleStyles();
        invokeHook("onCreate", [ instance ]);
        if (props.showOnCreate) scheduleShow();
        popper.addEventListener("mouseenter", (function() {
          if (instance.props.interactive && instance.state.isVisible) instance.clearDelayTimeouts();
        }));
        popper.addEventListener("mouseleave", (function() {
          if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) getDocument().addEventListener("mousemove", debouncedOnMouseMove);
        }));
        return instance;
        function getNormalizedTouchSettings() {
          var touch = instance.props.touch;
          return Array.isArray(touch) ? touch : [ touch, 0 ];
        }
        function getIsCustomTouchBehavior() {
          return getNormalizedTouchSettings()[0] === "hold";
        }
        function getIsDefaultRenderFn() {
          var _instance$props$rende;
          return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
        }
        function getCurrentTarget() {
          return currentTarget || reference;
        }
        function getDocument() {
          var parent = getCurrentTarget().parentNode;
          return parent ? getOwnerDocument(parent) : document;
        }
        function getDefaultTemplateChildren() {
          return getChildren(popper);
        }
        function getDelay(isShow) {
          if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") return 0;
          return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
        }
        function handleStyles(fromHide) {
          if (fromHide === void 0) fromHide = false;
          popper.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
          popper.style.zIndex = "" + instance.props.zIndex;
        }
        function invokeHook(hook, args, shouldInvokePropsHook) {
          if (shouldInvokePropsHook === void 0) shouldInvokePropsHook = true;
          pluginsHooks.forEach((function(pluginHooks) {
            if (pluginHooks[hook]) pluginHooks[hook].apply(pluginHooks, args);
          }));
          if (shouldInvokePropsHook) {
            var _instance$props;
            (_instance$props = instance.props)[hook].apply(_instance$props, args);
          }
        }
        function handleAriaContentAttribute() {
          var aria = instance.props.aria;
          if (!aria.content) return;
          var attr = "aria-" + aria.content;
          var id = popper.id;
          var nodes = normalizeToArray(instance.props.triggerTarget || reference);
          nodes.forEach((function(node) {
            var currentValue = node.getAttribute(attr);
            if (instance.state.isVisible) node.setAttribute(attr, currentValue ? currentValue + " " + id : id); else {
              var nextValue = currentValue && currentValue.replace(id, "").trim();
              if (nextValue) node.setAttribute(attr, nextValue); else node.removeAttribute(attr);
            }
          }));
        }
        function handleAriaExpandedAttribute() {
          if (hasAriaExpanded || !instance.props.aria.expanded) return;
          var nodes = normalizeToArray(instance.props.triggerTarget || reference);
          nodes.forEach((function(node) {
            if (instance.props.interactive) node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false"); else node.removeAttribute("aria-expanded");
          }));
        }
        function cleanupInteractiveMouseListeners() {
          getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
          mouseMoveListeners = mouseMoveListeners.filter((function(listener) {
            return listener !== debouncedOnMouseMove;
          }));
        }
        function onDocumentPress(event) {
          if (currentInput.isTouch) if (didTouchMove || event.type === "mousedown") return;
          var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
          if (instance.props.interactive && actualContains(popper, actualTarget)) return;
          if (normalizeToArray(instance.props.triggerTarget || reference).some((function(el) {
            return actualContains(el, actualTarget);
          }))) {
            if (currentInput.isTouch) return;
            if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) return;
          } else invokeHook("onClickOutside", [ instance, event ]);
          if (instance.props.hideOnClick === true) {
            instance.clearDelayTimeouts();
            instance.hide();
            didHideDueToDocumentMouseDown = true;
            setTimeout((function() {
              didHideDueToDocumentMouseDown = false;
            }));
            if (!instance.state.isMounted) removeDocumentPress();
          }
        }
        function onTouchMove() {
          didTouchMove = true;
        }
        function onTouchStart() {
          didTouchMove = false;
        }
        function addDocumentPress() {
          var doc = getDocument();
          doc.addEventListener("mousedown", onDocumentPress, true);
          doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
          doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
          doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
        }
        function removeDocumentPress() {
          var doc = getDocument();
          doc.removeEventListener("mousedown", onDocumentPress, true);
          doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
          doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
          doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
        }
        function onTransitionedOut(duration, callback) {
          onTransitionEnd(duration, (function() {
            if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) callback();
          }));
        }
        function onTransitionedIn(duration, callback) {
          onTransitionEnd(duration, callback);
        }
        function onTransitionEnd(duration, callback) {
          var box = getDefaultTemplateChildren().box;
          function listener(event) {
            if (event.target === box) {
              updateTransitionEndListener(box, "remove", listener);
              callback();
            }
          }
          if (duration === 0) return callback();
          updateTransitionEndListener(box, "remove", currentTransitionEndListener);
          updateTransitionEndListener(box, "add", listener);
          currentTransitionEndListener = listener;
        }
        function on(eventType, handler, options) {
          if (options === void 0) options = false;
          var nodes = normalizeToArray(instance.props.triggerTarget || reference);
          nodes.forEach((function(node) {
            node.addEventListener(eventType, handler, options);
            listeners.push({
              node,
              eventType,
              handler,
              options
            });
          }));
        }
        function addListeners() {
          if (getIsCustomTouchBehavior()) {
            on("touchstart", onTrigger, {
              passive: true
            });
            on("touchend", onMouseLeave, {
              passive: true
            });
          }
          splitBySpaces(instance.props.trigger).forEach((function(eventType) {
            if (eventType === "manual") return;
            on(eventType, onTrigger);
            switch (eventType) {
             case "mouseenter":
              on("mouseleave", onMouseLeave);
              break;

             case "focus":
              on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
              break;

             case "focusin":
              on("focusout", onBlurOrFocusOut);
              break;
            }
          }));
        }
        function removeListeners() {
          listeners.forEach((function(_ref) {
            var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
            node.removeEventListener(eventType, handler, options);
          }));
          listeners = [];
        }
        function onTrigger(event) {
          var _lastTriggerEvent;
          var shouldScheduleClickHide = false;
          if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) return;
          var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
          lastTriggerEvent = event;
          currentTarget = event.currentTarget;
          handleAriaExpandedAttribute();
          if (!instance.state.isVisible && isMouseEvent(event)) mouseMoveListeners.forEach((function(listener) {
            return listener(event);
          }));
          if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) shouldScheduleClickHide = true; else scheduleShow(event);
          if (event.type === "click") isVisibleFromClick = !shouldScheduleClickHide;
          if (shouldScheduleClickHide && !wasFocused) scheduleHide(event);
        }
        function onMouseMove(event) {
          var target = event.target;
          var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);
          if (event.type === "mousemove" && isCursorOverReferenceOrPopper) return;
          var popperTreeData = getNestedPopperTree().concat(popper).map((function(popper) {
            var _instance$popperInsta;
            var instance = popper._tippy;
            var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;
            if (state) return {
              popperRect: popper.getBoundingClientRect(),
              popperState: state,
              props
            };
            return null;
          })).filter(Boolean);
          if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
            cleanupInteractiveMouseListeners();
            scheduleHide(event);
          }
        }
        function onMouseLeave(event) {
          var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
          if (shouldBail) return;
          if (instance.props.interactive) {
            instance.hideWithInteractivity(event);
            return;
          }
          scheduleHide(event);
        }
        function onBlurOrFocusOut(event) {
          if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) return;
          if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) return;
          scheduleHide(event);
        }
        function isEventListenerStopped(event) {
          return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
        }
        function createPopperInstance() {
          destroyPopperInstance();
          var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
          var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
          var computedReference = getReferenceClientRect ? {
            getBoundingClientRect: getReferenceClientRect,
            contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
          } : reference;
          var tippyModifier = {
            name: "$$tippy",
            enabled: true,
            phase: "beforeWrite",
            requires: [ "computeStyles" ],
            fn: function fn(_ref2) {
              var state = _ref2.state;
              if (getIsDefaultRenderFn()) {
                var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
                [ "placement", "reference-hidden", "escaped" ].forEach((function(attr) {
                  if (attr === "placement") box.setAttribute("data-placement", state.placement); else if (state.attributes.popper["data-popper-" + attr]) box.setAttribute("data-" + attr, ""); else box.removeAttribute("data-" + attr);
                }));
                state.attributes.popper = {};
              }
            }
          };
          var modifiers = [ {
            name: "offset",
            options: {
              offset
            }
          }, {
            name: "preventOverflow",
            options: {
              padding: {
                top: 2,
                bottom: 2,
                left: 5,
                right: 5
              }
            }
          }, {
            name: "flip",
            options: {
              padding: 5
            }
          }, {
            name: "computeStyles",
            options: {
              adaptive: !moveTransition
            }
          }, tippyModifier ];
          if (getIsDefaultRenderFn() && arrow) modifiers.push({
            name: "arrow",
            options: {
              element: arrow,
              padding: 3
            }
          });
          modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
          instance.popperInstance = popper_createPopper(computedReference, popper, Object.assign({}, popperOptions, {
            placement,
            onFirstUpdate,
            modifiers
          }));
        }
        function destroyPopperInstance() {
          if (instance.popperInstance) {
            instance.popperInstance.destroy();
            instance.popperInstance = null;
          }
        }
        function mount() {
          var appendTo = instance.props.appendTo;
          var parentNode;
          var node = getCurrentTarget();
          if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") parentNode = node.parentNode; else parentNode = invokeWithArgsOrReturn(appendTo, [ node ]);
          if (!parentNode.contains(popper)) parentNode.appendChild(popper);
          instance.state.isMounted = true;
          createPopperInstance();
          if (false) ;
        }
        function getNestedPopperTree() {
          return arrayFrom(popper.querySelectorAll("[data-tippy-root]"));
        }
        function scheduleShow(event) {
          instance.clearDelayTimeouts();
          if (event) invokeHook("onTrigger", [ instance, event ]);
          addDocumentPress();
          var delay = getDelay(true);
          var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
          if (currentInput.isTouch && touchValue === "hold" && touchDelay) delay = touchDelay;
          if (delay) showTimeout = setTimeout((function() {
            instance.show();
          }), delay); else instance.show();
        }
        function scheduleHide(event) {
          instance.clearDelayTimeouts();
          invokeHook("onUntrigger", [ instance, event ]);
          if (!instance.state.isVisible) {
            removeDocumentPress();
            return;
          }
          if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && [ "mouseleave", "mousemove" ].indexOf(event.type) >= 0 && isVisibleFromClick) return;
          var delay = getDelay(false);
          if (delay) hideTimeout = setTimeout((function() {
            if (instance.state.isVisible) instance.hide();
          }), delay); else scheduleHideAnimationFrame = requestAnimationFrame((function() {
            instance.hide();
          }));
        }
        function enable() {
          instance.state.isEnabled = true;
        }
        function disable() {
          instance.hide();
          instance.state.isEnabled = false;
        }
        function clearDelayTimeouts() {
          clearTimeout(showTimeout);
          clearTimeout(hideTimeout);
          cancelAnimationFrame(scheduleHideAnimationFrame);
        }
        function setProps(partialProps) {
          if (false) ;
          if (instance.state.isDestroyed) return;
          invokeHook("onBeforeUpdate", [ instance, partialProps ]);
          removeListeners();
          var prevProps = instance.props;
          var nextProps = evaluateProps(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
            ignoreAttributes: true
          }));
          instance.props = nextProps;
          addListeners();
          if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
            cleanupInteractiveMouseListeners();
            debouncedOnMouseMove = tippy_esm_debounce(onMouseMove, nextProps.interactiveDebounce);
          }
          if (prevProps.triggerTarget && !nextProps.triggerTarget) normalizeToArray(prevProps.triggerTarget).forEach((function(node) {
            node.removeAttribute("aria-expanded");
          })); else if (nextProps.triggerTarget) reference.removeAttribute("aria-expanded");
          handleAriaExpandedAttribute();
          handleStyles();
          if (onUpdate) onUpdate(prevProps, nextProps);
          if (instance.popperInstance) {
            createPopperInstance();
            getNestedPopperTree().forEach((function(nestedPopper) {
              requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
            }));
          }
          invokeHook("onAfterUpdate", [ instance, partialProps ]);
        }
        function setContent(content) {
          instance.setProps({
            content
          });
        }
        function show() {
          if (false) ;
          var isAlreadyVisible = instance.state.isVisible;
          var isDestroyed = instance.state.isDestroyed;
          var isDisabled = !instance.state.isEnabled;
          var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
          var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
          if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) return;
          if (getCurrentTarget().hasAttribute("disabled")) return;
          invokeHook("onShow", [ instance ], false);
          if (instance.props.onShow(instance) === false) return;
          instance.state.isVisible = true;
          if (getIsDefaultRenderFn()) popper.style.visibility = "visible";
          handleStyles();
          addDocumentPress();
          if (!instance.state.isMounted) popper.style.transition = "none";
          if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
            setTransitionDuration([ box, content ], 0);
          }
          onFirstUpdate = function onFirstUpdate() {
            var _instance$popperInsta2;
            if (!instance.state.isVisible || ignoreOnFirstUpdate) return;
            ignoreOnFirstUpdate = true;
            void popper.offsetHeight;
            popper.style.transition = instance.props.moveTransition;
            if (getIsDefaultRenderFn() && instance.props.animation) {
              var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
              setTransitionDuration([ _box, _content ], duration);
              setVisibilityState([ _box, _content ], "visible");
            }
            handleAriaContentAttribute();
            handleAriaExpandedAttribute();
            pushIfUnique(mountedInstances, instance);
            (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
            invokeHook("onMount", [ instance ]);
            if (instance.props.animation && getIsDefaultRenderFn()) onTransitionedIn(duration, (function() {
              instance.state.isShown = true;
              invokeHook("onShown", [ instance ]);
            }));
          };
          mount();
        }
        function hide() {
          if (false) ;
          var isAlreadyHidden = !instance.state.isVisible;
          var isDestroyed = instance.state.isDestroyed;
          var isDisabled = !instance.state.isEnabled;
          var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
          if (isAlreadyHidden || isDestroyed || isDisabled) return;
          invokeHook("onHide", [ instance ], false);
          if (instance.props.onHide(instance) === false) return;
          instance.state.isVisible = false;
          instance.state.isShown = false;
          ignoreOnFirstUpdate = false;
          isVisibleFromClick = false;
          if (getIsDefaultRenderFn()) popper.style.visibility = "hidden";
          cleanupInteractiveMouseListeners();
          removeDocumentPress();
          handleStyles(true);
          if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
            if (instance.props.animation) {
              setTransitionDuration([ box, content ], duration);
              setVisibilityState([ box, content ], "hidden");
            }
          }
          handleAriaContentAttribute();
          handleAriaExpandedAttribute();
          if (instance.props.animation) {
            if (getIsDefaultRenderFn()) onTransitionedOut(duration, instance.unmount);
          } else instance.unmount();
        }
        function hideWithInteractivity(event) {
          if (false) ;
          getDocument().addEventListener("mousemove", debouncedOnMouseMove);
          pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
          debouncedOnMouseMove(event);
        }
        function unmount() {
          if (false) ;
          if (instance.state.isVisible) instance.hide();
          if (!instance.state.isMounted) return;
          destroyPopperInstance();
          getNestedPopperTree().forEach((function(nestedPopper) {
            nestedPopper._tippy.unmount();
          }));
          if (popper.parentNode) popper.parentNode.removeChild(popper);
          mountedInstances = mountedInstances.filter((function(i) {
            return i !== instance;
          }));
          instance.state.isMounted = false;
          invokeHook("onHidden", [ instance ]);
        }
        function destroy() {
          if (false) ;
          if (instance.state.isDestroyed) return;
          instance.clearDelayTimeouts();
          instance.unmount();
          removeListeners();
          delete reference._tippy;
          instance.state.isDestroyed = true;
          invokeHook("onDestroy", [ instance ]);
        }
      }
      function tippy(targets, optionalProps) {
        if (optionalProps === void 0) optionalProps = {};
        var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
        if (false) ;
        bindGlobalEventListeners();
        var passedProps = Object.assign({}, optionalProps, {
          plugins
        });
        var elements = getArrayOfElements(targets);
        if (false) var isMoreThanOneReferenceElement, isSingleContentElement;
        var instances = elements.reduce((function(acc, reference) {
          var instance = reference && createTippy(reference, passedProps);
          if (instance) acc.push(instance);
          return acc;
        }), []);
        return tippy_esm_isElement(targets) ? instances[0] : instances;
      }
      tippy.defaultProps = defaultProps;
      tippy.setDefaultProps = setDefaultProps;
      tippy.currentInput = currentInput;
      var hideAll = function hideAll(_temp) {
        var _ref = _temp === void 0 ? {} : _temp, excludedReferenceOrInstance = _ref.exclude, duration = _ref.duration;
        mountedInstances.forEach((function(instance) {
          var isExcluded = false;
          if (excludedReferenceOrInstance) isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : instance.popper === excludedReferenceOrInstance.popper;
          if (!isExcluded) {
            var originalDuration = instance.props.duration;
            instance.setProps({
              duration
            });
            instance.hide();
            if (!instance.state.isDestroyed) instance.setProps({
              duration: originalDuration
            });
          }
        }));
      };
      var applyStylesModifier = Object.assign({}, modifiers_applyStyles, {
        effect: function effect(_ref) {
          var state = _ref.state;
          var initialStyles = {
            popper: {
              position: state.options.strategy,
              left: "0",
              top: "0",
              margin: "0"
            },
            arrow: {
              position: "absolute"
            },
            reference: {}
          };
          Object.assign(state.elements.popper.style, initialStyles.popper);
          state.styles = initialStyles;
          if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
        }
      });
      var createSingleton = function createSingleton(tippyInstances, optionalProps) {
        var _optionalProps$popper;
        if (optionalProps === void 0) optionalProps = {};
        if (false) ;
        var individualInstances = tippyInstances;
        var references = [];
        var triggerTargets = [];
        var currentTarget;
        var overrides = optionalProps.overrides;
        var interceptSetPropsCleanups = [];
        var shownOnCreate = false;
        function setTriggerTargets() {
          triggerTargets = individualInstances.map((function(instance) {
            return normalizeToArray(instance.props.triggerTarget || instance.reference);
          })).reduce((function(acc, item) {
            return acc.concat(item);
          }), []);
        }
        function setReferences() {
          references = individualInstances.map((function(instance) {
            return instance.reference;
          }));
        }
        function enableInstances(isEnabled) {
          individualInstances.forEach((function(instance) {
            if (isEnabled) instance.enable(); else instance.disable();
          }));
        }
        function interceptSetProps(singleton) {
          return individualInstances.map((function(instance) {
            var originalSetProps = instance.setProps;
            instance.setProps = function(props) {
              originalSetProps(props);
              if (instance.reference === currentTarget) singleton.setProps(props);
            };
            return function() {
              instance.setProps = originalSetProps;
            };
          }));
        }
        function prepareInstance(singleton, target) {
          var index = triggerTargets.indexOf(target);
          if (target === currentTarget) return;
          currentTarget = target;
          var overrideProps = (overrides || []).concat("content").reduce((function(acc, prop) {
            acc[prop] = individualInstances[index].props[prop];
            return acc;
          }), {});
          singleton.setProps(Object.assign({}, overrideProps, {
            getReferenceClientRect: typeof overrideProps.getReferenceClientRect === "function" ? overrideProps.getReferenceClientRect : function() {
              var _references$index;
              return (_references$index = references[index]) == null ? void 0 : _references$index.getBoundingClientRect();
            }
          }));
        }
        enableInstances(false);
        setReferences();
        setTriggerTargets();
        var plugin = {
          fn: function fn() {
            return {
              onDestroy: function onDestroy() {
                enableInstances(true);
              },
              onHidden: function onHidden() {
                currentTarget = null;
              },
              onClickOutside: function onClickOutside(instance) {
                if (instance.props.showOnCreate && !shownOnCreate) {
                  shownOnCreate = true;
                  currentTarget = null;
                }
              },
              onShow: function onShow(instance) {
                if (instance.props.showOnCreate && !shownOnCreate) {
                  shownOnCreate = true;
                  prepareInstance(instance, references[0]);
                }
              },
              onTrigger: function onTrigger(instance, event) {
                prepareInstance(instance, event.currentTarget);
              }
            };
          }
        };
        var singleton = tippy(div(), Object.assign({}, removeProperties(optionalProps, [ "overrides" ]), {
          plugins: [ plugin ].concat(optionalProps.plugins || []),
          triggerTarget: triggerTargets,
          popperOptions: Object.assign({}, optionalProps.popperOptions, {
            modifiers: [].concat(((_optionalProps$popper = optionalProps.popperOptions) == null ? void 0 : _optionalProps$popper.modifiers) || [], [ applyStylesModifier ])
          })
        }));
        var originalShow = singleton.show;
        singleton.show = function(target) {
          originalShow();
          if (!currentTarget && target == null) return prepareInstance(singleton, references[0]);
          if (currentTarget && target == null) return;
          if (typeof target === "number") return references[target] && prepareInstance(singleton, references[target]);
          if (individualInstances.indexOf(target) >= 0) {
            var ref = target.reference;
            return prepareInstance(singleton, ref);
          }
          if (references.indexOf(target) >= 0) return prepareInstance(singleton, target);
        };
        singleton.showNext = function() {
          var first = references[0];
          if (!currentTarget) return singleton.show(0);
          var index = references.indexOf(currentTarget);
          singleton.show(references[index + 1] || first);
        };
        singleton.showPrevious = function() {
          var last = references[references.length - 1];
          if (!currentTarget) return singleton.show(last);
          var index = references.indexOf(currentTarget);
          var target = references[index - 1] || last;
          singleton.show(target);
        };
        var originalSetProps = singleton.setProps;
        singleton.setProps = function(props) {
          overrides = props.overrides || overrides;
          originalSetProps(props);
        };
        singleton.setInstances = function(nextInstances) {
          enableInstances(true);
          interceptSetPropsCleanups.forEach((function(fn) {
            return fn();
          }));
          individualInstances = nextInstances;
          enableInstances(false);
          setReferences();
          setTriggerTargets();
          interceptSetPropsCleanups = interceptSetProps(singleton);
          singleton.setProps({
            triggerTarget: triggerTargets
          });
        };
        interceptSetPropsCleanups = interceptSetProps(singleton);
        return singleton;
      };
      var BUBBLING_EVENTS_MAP = {
        mouseover: "mouseenter",
        focusin: "focus",
        click: "click"
      };
      function delegate(targets, props) {
        if (false) ;
        var listeners = [];
        var childTippyInstances = [];
        var disabled = false;
        var target = props.target;
        var nativeProps = removeProperties(props, [ "target" ]);
        var parentProps = Object.assign({}, nativeProps, {
          trigger: "manual",
          touch: false
        });
        var childProps = Object.assign({
          touch: defaultProps.touch
        }, nativeProps, {
          showOnCreate: true
        });
        var returnValue = tippy(targets, parentProps);
        var normalizedReturnValue = normalizeToArray(returnValue);
        function onTrigger(event) {
          if (!event.target || disabled) return;
          var targetNode = event.target.closest(target);
          if (!targetNode) return;
          var trigger = targetNode.getAttribute("data-tippy-trigger") || props.trigger || defaultProps.trigger;
          if (targetNode._tippy) return;
          if (event.type === "touchstart" && typeof childProps.touch === "boolean") return;
          if (event.type !== "touchstart" && trigger.indexOf(BUBBLING_EVENTS_MAP[event.type]) < 0) return;
          var instance = tippy(targetNode, childProps);
          if (instance) childTippyInstances = childTippyInstances.concat(instance);
        }
        function on(node, eventType, handler, options) {
          if (options === void 0) options = false;
          node.addEventListener(eventType, handler, options);
          listeners.push({
            node,
            eventType,
            handler,
            options
          });
        }
        function addEventListeners(instance) {
          var reference = instance.reference;
          on(reference, "touchstart", onTrigger, TOUCH_OPTIONS);
          on(reference, "mouseover", onTrigger);
          on(reference, "focusin", onTrigger);
          on(reference, "click", onTrigger);
        }
        function removeEventListeners() {
          listeners.forEach((function(_ref) {
            var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
            node.removeEventListener(eventType, handler, options);
          }));
          listeners = [];
        }
        function applyMutations(instance) {
          var originalDestroy = instance.destroy;
          var originalEnable = instance.enable;
          var originalDisable = instance.disable;
          instance.destroy = function(shouldDestroyChildInstances) {
            if (shouldDestroyChildInstances === void 0) shouldDestroyChildInstances = true;
            if (shouldDestroyChildInstances) childTippyInstances.forEach((function(instance) {
              instance.destroy();
            }));
            childTippyInstances = [];
            removeEventListeners();
            originalDestroy();
          };
          instance.enable = function() {
            originalEnable();
            childTippyInstances.forEach((function(instance) {
              return instance.enable();
            }));
            disabled = false;
          };
          instance.disable = function() {
            originalDisable();
            childTippyInstances.forEach((function(instance) {
              return instance.disable();
            }));
            disabled = true;
          };
          addEventListeners(instance);
        }
        normalizedReturnValue.forEach(applyMutations);
        return returnValue;
      }
      var animateFill = {
        name: "animateFill",
        defaultValue: false,
        fn: function fn(instance) {
          var _instance$props$rende;
          if (!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy)) {
            if (false) ;
            return {};
          }
          var _getChildren = getChildren(instance.popper), box = _getChildren.box, content = _getChildren.content;
          var backdrop = instance.props.animateFill ? createBackdropElement() : null;
          return {
            onCreate: function onCreate() {
              if (backdrop) {
                box.insertBefore(backdrop, box.firstElementChild);
                box.setAttribute("data-animatefill", "");
                box.style.overflow = "hidden";
                instance.setProps({
                  arrow: false,
                  animation: "shift-away"
                });
              }
            },
            onMount: function onMount() {
              if (backdrop) {
                var transitionDuration = box.style.transitionDuration;
                var duration = Number(transitionDuration.replace("ms", ""));
                content.style.transitionDelay = Math.round(duration / 10) + "ms";
                backdrop.style.transitionDuration = transitionDuration;
                setVisibilityState([ backdrop ], "visible");
              }
            },
            onShow: function onShow() {
              if (backdrop) backdrop.style.transitionDuration = "0ms";
            },
            onHide: function onHide() {
              if (backdrop) setVisibilityState([ backdrop ], "hidden");
            }
          };
        }
      };
      function createBackdropElement() {
        var backdrop = div();
        backdrop.className = BACKDROP_CLASS;
        setVisibilityState([ backdrop ], "hidden");
        return backdrop;
      }
      var mouseCoords = {
        clientX: 0,
        clientY: 0
      };
      var activeInstances = [];
      function storeMouseCoords(_ref) {
        var clientX = _ref.clientX, clientY = _ref.clientY;
        mouseCoords = {
          clientX,
          clientY
        };
      }
      function addMouseCoordsListener(doc) {
        doc.addEventListener("mousemove", storeMouseCoords);
      }
      function removeMouseCoordsListener(doc) {
        doc.removeEventListener("mousemove", storeMouseCoords);
      }
      var followCursor = {
        name: "followCursor",
        defaultValue: false,
        fn: function fn(instance) {
          var reference = instance.reference;
          var doc = getOwnerDocument(instance.props.triggerTarget || reference);
          var isInternalUpdate = false;
          var wasFocusEvent = false;
          var isUnmounted = true;
          var prevProps = instance.props;
          function getIsInitialBehavior() {
            return instance.props.followCursor === "initial" && instance.state.isVisible;
          }
          function addListener() {
            doc.addEventListener("mousemove", onMouseMove);
          }
          function removeListener() {
            doc.removeEventListener("mousemove", onMouseMove);
          }
          function unsetGetReferenceClientRect() {
            isInternalUpdate = true;
            instance.setProps({
              getReferenceClientRect: null
            });
            isInternalUpdate = false;
          }
          function onMouseMove(event) {
            var isCursorOverReference = event.target ? reference.contains(event.target) : true;
            var followCursor = instance.props.followCursor;
            var clientX = event.clientX, clientY = event.clientY;
            var rect = reference.getBoundingClientRect();
            var relativeX = clientX - rect.left;
            var relativeY = clientY - rect.top;
            if (isCursorOverReference || !instance.props.interactive) instance.setProps({
              getReferenceClientRect: function getReferenceClientRect() {
                var rect = reference.getBoundingClientRect();
                var x = clientX;
                var y = clientY;
                if (followCursor === "initial") {
                  x = rect.left + relativeX;
                  y = rect.top + relativeY;
                }
                var top = followCursor === "horizontal" ? rect.top : y;
                var right = followCursor === "vertical" ? rect.right : x;
                var bottom = followCursor === "horizontal" ? rect.bottom : y;
                var left = followCursor === "vertical" ? rect.left : x;
                return {
                  width: right - left,
                  height: bottom - top,
                  top,
                  right,
                  bottom,
                  left
                };
              }
            });
          }
          function create() {
            if (instance.props.followCursor) {
              activeInstances.push({
                instance,
                doc
              });
              addMouseCoordsListener(doc);
            }
          }
          function destroy() {
            activeInstances = activeInstances.filter((function(data) {
              return data.instance !== instance;
            }));
            if (activeInstances.filter((function(data) {
              return data.doc === doc;
            })).length === 0) removeMouseCoordsListener(doc);
          }
          return {
            onCreate: create,
            onDestroy: destroy,
            onBeforeUpdate: function onBeforeUpdate() {
              prevProps = instance.props;
            },
            onAfterUpdate: function onAfterUpdate(_, _ref2) {
              var followCursor = _ref2.followCursor;
              if (isInternalUpdate) return;
              if (followCursor !== void 0 && prevProps.followCursor !== followCursor) {
                destroy();
                if (followCursor) {
                  create();
                  if (instance.state.isMounted && !wasFocusEvent && !getIsInitialBehavior()) addListener();
                } else {
                  removeListener();
                  unsetGetReferenceClientRect();
                }
              }
            },
            onMount: function onMount() {
              if (instance.props.followCursor && !wasFocusEvent) {
                if (isUnmounted) {
                  onMouseMove(mouseCoords);
                  isUnmounted = false;
                }
                if (!getIsInitialBehavior()) addListener();
              }
            },
            onTrigger: function onTrigger(_, event) {
              if (isMouseEvent(event)) mouseCoords = {
                clientX: event.clientX,
                clientY: event.clientY
              };
              wasFocusEvent = event.type === "focus";
            },
            onHidden: function onHidden() {
              if (instance.props.followCursor) {
                unsetGetReferenceClientRect();
                removeListener();
                isUnmounted = true;
              }
            }
          };
        }
      };
      function getProps(props, modifier) {
        var _props$popperOptions;
        return {
          popperOptions: Object.assign({}, props.popperOptions, {
            modifiers: [].concat((((_props$popperOptions = props.popperOptions) == null ? void 0 : _props$popperOptions.modifiers) || []).filter((function(_ref) {
              var name = _ref.name;
              return name !== modifier.name;
            })), [ modifier ])
          })
        };
      }
      var inlinePositioning = {
        name: "inlinePositioning",
        defaultValue: false,
        fn: function fn(instance) {
          var reference = instance.reference;
          function isEnabled() {
            return !!instance.props.inlinePositioning;
          }
          var placement;
          var cursorRectIndex = -1;
          var isInternalUpdate = false;
          var triedPlacements = [];
          var modifier = {
            name: "tippyInlinePositioning",
            enabled: true,
            phase: "afterWrite",
            fn: function fn(_ref2) {
              var state = _ref2.state;
              if (isEnabled()) {
                if (triedPlacements.indexOf(state.placement) !== -1) triedPlacements = [];
                if (placement !== state.placement && triedPlacements.indexOf(state.placement) === -1) {
                  triedPlacements.push(state.placement);
                  instance.setProps({
                    getReferenceClientRect: function getReferenceClientRect() {
                      return _getReferenceClientRect(state.placement);
                    }
                  });
                }
                placement = state.placement;
              }
            }
          };
          function _getReferenceClientRect(placement) {
            return getInlineBoundingClientRect(tippy_esm_getBasePlacement(placement), reference.getBoundingClientRect(), arrayFrom(reference.getClientRects()), cursorRectIndex);
          }
          function setInternalProps(partialProps) {
            isInternalUpdate = true;
            instance.setProps(partialProps);
            isInternalUpdate = false;
          }
          function addModifier() {
            if (!isInternalUpdate) setInternalProps(getProps(instance.props, modifier));
          }
          return {
            onCreate: addModifier,
            onAfterUpdate: addModifier,
            onTrigger: function onTrigger(_, event) {
              if (isMouseEvent(event)) {
                var rects = arrayFrom(instance.reference.getClientRects());
                var cursorRect = rects.find((function(rect) {
                  return rect.left - 2 <= event.clientX && rect.right + 2 >= event.clientX && rect.top - 2 <= event.clientY && rect.bottom + 2 >= event.clientY;
                }));
                var index = rects.indexOf(cursorRect);
                cursorRectIndex = index > -1 ? index : cursorRectIndex;
              }
            },
            onHidden: function onHidden() {
              cursorRectIndex = -1;
            }
          };
        }
      };
      function getInlineBoundingClientRect(currentBasePlacement, boundingRect, clientRects, cursorRectIndex) {
        if (clientRects.length < 2 || currentBasePlacement === null) return boundingRect;
        if (clientRects.length === 2 && cursorRectIndex >= 0 && clientRects[0].left > clientRects[1].right) return clientRects[cursorRectIndex] || boundingRect;
        switch (currentBasePlacement) {
         case "top":
         case "bottom":
          var firstRect = clientRects[0];
          var lastRect = clientRects[clientRects.length - 1];
          var isTop = currentBasePlacement === "top";
          var top = firstRect.top;
          var bottom = lastRect.bottom;
          var left = isTop ? firstRect.left : lastRect.left;
          var right = isTop ? firstRect.right : lastRect.right;
          var width = right - left;
          var height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height
          };

         case "left":
         case "right":
          var minLeft = Math.min.apply(Math, clientRects.map((function(rects) {
            return rects.left;
          })));
          var maxRight = Math.max.apply(Math, clientRects.map((function(rects) {
            return rects.right;
          })));
          var measureRects = clientRects.filter((function(rect) {
            return currentBasePlacement === "left" ? rect.left === minLeft : rect.right === maxRight;
          }));
          var _top = measureRects[0].top;
          var _bottom = measureRects[measureRects.length - 1].bottom;
          var _left = minLeft;
          var _right = maxRight;
          var _width = _right - _left;
          var _height = _bottom - _top;
          return {
            top: _top,
            bottom: _bottom,
            left: _left,
            right: _right,
            width: _width,
            height: _height
          };

         default:
          return boundingRect;
        }
      }
      var sticky = {
        name: "sticky",
        defaultValue: false,
        fn: function fn(instance) {
          var reference = instance.reference, popper = instance.popper;
          function getReference() {
            return instance.popperInstance ? instance.popperInstance.state.elements.reference : reference;
          }
          function shouldCheck(value) {
            return instance.props.sticky === true || instance.props.sticky === value;
          }
          var prevRefRect = null;
          var prevPopRect = null;
          function updatePosition() {
            var currentRefRect = shouldCheck("reference") ? getReference().getBoundingClientRect() : null;
            var currentPopRect = shouldCheck("popper") ? popper.getBoundingClientRect() : null;
            if (currentRefRect && areRectsDifferent(prevRefRect, currentRefRect) || currentPopRect && areRectsDifferent(prevPopRect, currentPopRect)) if (instance.popperInstance) instance.popperInstance.update();
            prevRefRect = currentRefRect;
            prevPopRect = currentPopRect;
            if (instance.state.isMounted) requestAnimationFrame(updatePosition);
          }
          return {
            onMount: function onMount() {
              if (instance.props.sticky) updatePosition();
            }
          };
        }
      };
      function areRectsDifferent(rectA, rectB) {
        if (rectA && rectB) return rectA.top !== rectB.top || rectA.right !== rectB.right || rectA.bottom !== rectB.bottom || rectA.left !== rectB.left;
        return true;
      }
      tippy.setDefaultProps({
        render
      });
      const tippy_esm = tippy;
    },
    464: (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, (async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.d(__webpack_exports__, {
            z: () => check
          });
          var _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(219);
          var _settings_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(378);
          var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(185);
          var _dataTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(389);
          var _request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(463);
          var _settings_general__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44);
          var _observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(648);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__, _settings_endpoints__WEBPACK_IMPORTED_MODULE_1__, _settings_general__WEBPACK_IMPORTED_MODULE_5__ ]);
          [_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__, _settings_endpoints__WEBPACK_IMPORTED_MODULE_1__, _settings_general__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          const supportedDataFields = new Map([ [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Scene, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Title, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Studio, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Code, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Date, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Tags, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Files ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Performer, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Name, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Disambiguation, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Favorite, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.AliasList, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Birthdate, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.HeightCm, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Tags ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Gallery, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Title, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Date, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Tags, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Files ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Movie, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Name, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Date ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Studio, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Name, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Aliases ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Tag, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Name ] ] ]);
          const supportedSubDataFields = new Map([ [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Studio, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Name ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Tags, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Name ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Files, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Path, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.VideoCodec, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Width, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Height, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Size, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.BitRate, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Duration ] ] ]);
          function getDataFields(target) {
            let supported = new Set(supportedDataFields.get(target) ?? []);
            if (!_settings_general__WEBPACK_IMPORTED_MODULE_5__.$k.get(_settings_general__WEBPACK_IMPORTED_MODULE_5__.vw.showTags)) supported.delete(_dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Tags);
            if (!_settings_general__WEBPACK_IMPORTED_MODULE_5__.$k.get(_settings_general__WEBPACK_IMPORTED_MODULE_5__.vw.showFiles)) supported.delete(_dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Files);
            return Array.from(supported).map((field => field + getSubDataFields(field))).join(",");
          }
          function getSubDataFields(field) {
            let supported = supportedSubDataFields.get(field) ?? [];
            let string = supported.join(",");
            return string ? `{${string}}` : "";
          }
          async function queryStash(queryString, onload, target, type, stashIdEndpoint) {
            let criterion;
            let query;
            let access = d => d;
            switch (type) {
             case _dataTypes__WEBPACK_IMPORTED_MODULE_3__.ZU.StashId:
              criterion = `stash_id_endpoint:{endpoint:"${encodeURIComponent(stashIdEndpoint)}",stash_id:"${encodeURIComponent(queryString)}",modifier:EQUALS}`;
              break;

             default:
              criterion = `${type}:{value:"""${encodeURIComponent(queryString)}""",modifier:EQUALS}`;
              break;
            }
            switch (target) {
             case _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Scene:
              query = `findScenes(scene_filter:{${criterion}}){scenes{${getDataFields(target)}}}`;
              access = d => d.scenes;
              break;

             case _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Performer:
              query = `findPerformers(performer_filter:{${criterion}}){performers{${getDataFields(target)}}}`;
              access = d => d.performers;
              break;

             case _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Gallery:
              query = `findGalleries(gallery_filter:{${criterion}}){galleries{${getDataFields(target)}}}`;
              access = d => d.galleries;
              break;

             case _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Movie:
              query = `findMovies(movie_filter:{${criterion}}){movies{${getDataFields(target)}}}`;
              access = d => d.movies;
              break;

             case _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Studio:
              query = `findStudios(studio_filter:{${criterion}}){studios{${getDataFields(target)}}}`;
              access = d => d.studios;
              break;

             case _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Tag:
              query = `findTags(tag_filter:{${criterion}}){tags{${getDataFields(target)}}}`;
              access = d => d.tags;
              break;

             default:
              return;
            }
            _settings_endpoints__WEBPACK_IMPORTED_MODULE_1__.I.forEach((endpoint => {
              (0, _request__WEBPACK_IMPORTED_MODULE_4__.E)(endpoint, query, true).then((data => onload(target, type, endpoint, access(data))));
            }));
          }
          async function checkElement(target, element, {displaySelector = e => e, urlSelector = e => e.closest("a")?.href, codeSelector, stashIdSelector, stashIdEndpoint = `https://${window.location.host}/graphql`, nameSelector = _utils__WEBPACK_IMPORTED_MODULE_2__.ou, titleSelector = _utils__WEBPACK_IMPORTED_MODULE_2__.ou, color = () => "green"}) {
            let displayElement = displaySelector(element);
            if (!displayElement) return;
            if (urlSelector) {
              let url = urlSelector(element);
              if (url) {
                void 0;
                await queryStash(url, ((...args) => (0, _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__.l)(displayElement, ...args, color)), target, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.ZU.Url, stashIdEndpoint);
              } else console.info(`No URL for ${target} found.`);
            }
            if (codeSelector) {
              let code = codeSelector(element);
              if (code) {
                void 0;
                await queryStash(code, ((...args) => (0, _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__.l)(displayElement, ...args, color)), target, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.ZU.Code, stashIdEndpoint);
              } else console.info(`No Code for ${target} found.`);
            }
            if (stashIdSelector) {
              let id = stashIdSelector(element);
              if (id) {
                void 0;
                await queryStash(id, ((...args) => (0, _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__.l)(displayElement, ...args, color)), target, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.ZU.StashId, stashIdEndpoint);
              } else console.info(`No StashId for ${target} found.`);
            }
            if ([ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Performer, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Movie, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Studio, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Tag ].includes(target) && nameSelector) {
              let name = nameSelector(element);
              let nameCount = name?.split(/\s+/)?.length;
              let kanji = name ? (0, _utils__WEBPACK_IMPORTED_MODULE_2__._t)(name) : false;
              let ignore = target === _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Performer && nameCount === 1 && !kanji;
              if (name && !ignore) {
                void 0;
                await queryStash(name, ((...args) => (0, _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__.l)(displayElement, ...args, color)), target, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.ZU.Name, stashIdEndpoint);
              } else if (name && ignore) console.info(`Ignore single name: ${name}`); else console.info(`No Name for ${target} found.`);
            }
            if ([ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Scene, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Gallery ].includes(target) && titleSelector) {
              let title = titleSelector(element);
              if (title) {
                void 0;
                await queryStash(title, ((...args) => (0, _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__.l)(displayElement, ...args, color)), target, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.ZU.Title, stashIdEndpoint);
              } else console.info(`No Title for ${target} found.`);
            }
          }
          function check(target, elementSelector, {observe = false, ...checkConfig} = {}) {
            if (observe) (0, _observer__WEBPACK_IMPORTED_MODULE_6__.C)(elementSelector, (element => checkElement(target, element, checkConfig)));
            document.querySelectorAll(elementSelector).forEach((e => checkElement(target, e, checkConfig)));
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }));
    },
    389: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        HD: () => readable,
        J7: () => DataField,
        T4: () => readablePlural,
        Wb: () => StashSymbol,
        We: () => Target,
        ZU: () => Type
      });
      var DataField;
      (function(DataField) {
        DataField["Aliases"] = "aliases";
        DataField["AliasList"] = "alias_list";
        DataField["Birthdate"] = "birthdate";
        DataField["BitRate"] = "bit_rate";
        DataField["Code"] = "code";
        DataField["Date"] = "date";
        DataField["Disambiguation"] = "disambiguation";
        DataField["Duration"] = "duration";
        DataField["Favorite"] = "favorite";
        DataField["Files"] = "files";
        DataField["Height"] = "height";
        DataField["HeightCm"] = "height_cm";
        DataField["Id"] = "id";
        DataField["Name"] = "name";
        DataField["Path"] = "path";
        DataField["Size"] = "size";
        DataField["Studio"] = "studio";
        DataField["Tags"] = "tags";
        DataField["Title"] = "title";
        DataField["VideoCodec"] = "video_codec";
        DataField["Width"] = "width";
      })(DataField || (DataField = {}));
      var StashSymbol;
      (function(StashSymbol) {
        StashSymbol["Check"] = "check";
        StashSymbol["Warning"] = "warning";
        StashSymbol["Cross"] = "cross";
      })(StashSymbol || (StashSymbol = {}));
      var Target;
      (function(Target) {
        Target["Gallery"] = "gallery";
        Target["Movie"] = "movie";
        Target["Performer"] = "performer";
        Target["Scene"] = "scene";
        Target["Studio"] = "studio";
        Target["Tag"] = "tag";
      })(Target || (Target = {}));
      function readable(target) {
        return target.charAt(0).toUpperCase() + target.slice(1);
      }
      function readablePlural(target) {
        switch (target) {
         case Target.Gallery:
          return "Galleries";

         default:
          return readable(target) + "s";
        }
      }
      var Type;
      (function(Type) {
        Type["Code"] = "code";
        Type["Name"] = "name";
        Type["StashId"] = "stash_id";
        Type["Title"] = "title";
        Type["Url"] = "url";
      })(Type || (Type = {}));
    },
    156: (module, __unused_webpack___webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, (async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(432);
          var _settings_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(378);
          var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
          var _settings_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(513);
          var _settings_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
          var _stashChecker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(782);
          var _settings_statistics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(821);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _settings_endpoints__WEBPACK_IMPORTED_MODULE_1__, _settings_settings__WEBPACK_IMPORTED_MODULE_2__, _settings_menu__WEBPACK_IMPORTED_MODULE_3__, _settings_general__WEBPACK_IMPORTED_MODULE_4__, _stashChecker__WEBPACK_IMPORTED_MODULE_5__, _settings_statistics__WEBPACK_IMPORTED_MODULE_6__ ]);
          [_settings_endpoints__WEBPACK_IMPORTED_MODULE_1__, _settings_settings__WEBPACK_IMPORTED_MODULE_2__, _settings_menu__WEBPACK_IMPORTED_MODULE_3__, _settings_general__WEBPACK_IMPORTED_MODULE_4__, _stashChecker__WEBPACK_IMPORTED_MODULE_5__, _settings_statistics__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          (async function() {
            (0, _settings_settings__WEBPACK_IMPORTED_MODULE_2__.yD)();
            (0, _settings_statistics__WEBPACK_IMPORTED_MODULE_6__.S)();
            (0, _settings_general__WEBPACK_IMPORTED_MODULE_4__.WA)();
            await (0, _settings_endpoints__WEBPACK_IMPORTED_MODULE_1__.P)();
            await (0, _settings_menu__WEBPACK_IMPORTED_MODULE_3__.Q)();
            (0, _stashChecker__WEBPACK_IMPORTED_MODULE_5__.C)();
          })();
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }));
    },
    648: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        C: () => onAddition,
        r: () => clearObservers
      });
      const observerList = [];
      function onAddition(selector, callback) {
        let exclude = ".stashChecker, .stashCheckerSymbol";
        let observer = new MutationObserver((mutations => {
          let addedElements = mutations.flatMap((m => Array.from(m.addedNodes))).filter((n => n.nodeType === Node.ELEMENT_NODE)).map((n => n));
          addedElements.filter((e => e.matches(selector))).concat(addedElements.flatMap((e => Array.from(e.querySelectorAll(selector))))).filter((e => !e.matches(exclude) && !e.parentElement?.matches(exclude))).forEach(callback);
        }));
        let body = document.querySelector("body");
        observer.observe(body, {
          childList: true,
          subtree: true
        });
        observerList.push(observer);
      }
      function clearObservers() {
        while (observerList.length > 0) observerList.pop()?.disconnect();
      }
    },
    463: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        E: () => request
      });
      var utils = __webpack_require__(185);
      var Status;
      (function(Status) {
        Status[Status["WAITING"] = 0] = "WAITING";
        Status[Status["RUNNING"] = 1] = "RUNNING";
        Status[Status["FINISHED"] = 2] = "FINISHED";
      })(Status || (Status = {}));
      class JobQueue {
        constructor(parallel = 1) {
          this.queue = [];
          this.parallel = parallel;
        }
        enqueue(job) {
          return new Promise(((resolve, reject) => {
            this.queue.push({
              job,
              resolve,
              reject,
              status: Status.WAITING
            });
            this.dequeue();
          }));
        }
        dequeue() {
          let job = this.queue.find(((job, index) => index < this.parallel && job.status === Status.WAITING));
          if (job) {
            job.status = Status.RUNNING;
            void 0;
            job.job().then(job.resolve).catch(job.reject).finally((() => {
              job.status = Status.FINISHED;
              this.queue = this.queue.filter((job => job.status !== Status.FINISHED));
              void 0;
              this.dequeue();
            }));
          }
        }
        length() {
          return this.queue.length;
        }
      }
      const batchTimeout = 10;
      const maxBatchSize = 100;
      let batchQueries = new Map;
      let batchQueues = new Map;
      async function request(endpoint, query, batchQueries = false) {
        if (batchQueries) return addQuery(endpoint, query); else return new Promise(((resolve, reject) => sendQuery(endpoint, `q:${query}`).then((data => resolve(data.q))).catch(reject)));
      }
      async function addQuery(endpoint, query) {
        return new Promise(((resolve, reject) => {
          let batchQueue = batchQueues.get(endpoint);
          if (!batchQueue) {
            batchQueue = new JobQueue(2);
            batchQueues.set(endpoint, batchQueue);
          }
          let batchQuery = batchQueries.get(endpoint);
          if (!batchQuery) {
            let timerHandle = window.setTimeout((() => {
              let query = buildBatchQuery(endpoint, batchQueries.get(endpoint));
              batchQueue.enqueue((() => sendQuery(endpoint, query.query))).then(query.resolve).catch(query.reject);
              batchQueries.delete(endpoint);
            }), batchTimeout);
            batchQuery = {
              timerHandle,
              queries: []
            };
            batchQueries.set(endpoint, batchQuery);
          }
          batchQuery.queries.push({
            query,
            resolve,
            reject
          });
          if (batchQuery.queries.length >= maxBatchSize) {
            window.clearTimeout(batchQuery.timerHandle);
            batchQueries.delete(endpoint);
            let query = buildBatchQuery(endpoint, batchQuery);
            return batchQueue.enqueue((() => sendQuery(endpoint, query.query))).then(query.resolve).catch(query.reject);
          }
        }));
      }
      function buildBatchQuery(endpoint, batchQuery) {
        let query = batchQuery.queries.map(((request, index) => `q${index}:${request.query}`)).join();
        let resolve = data => {
          void 0;
          batchQuery.queries.forEach(((request, index) => {
            if (request.resolve) request.resolve(data[`q${index}`]);
          }));
        };
        let reject = message => {
          void 0;
          batchQuery.queries.forEach((request => {
            if (request.reject) request.reject(message);
          }));
        };
        console.info(`Build batch query of size ${batchQuery.queries.length} for endpoint '${endpoint.name}'`);
        return {
          query,
          resolve,
          reject
        };
      }
      async function sendQuery(endpoint, query) {
        void 0;
        return new Promise(((resolve, reject) => {
          GM.xmlHttpRequest({
            method: "GET",
            url: `${endpoint.url}?query={${query}}`,
            headers: {
              "Content-Type": "application/json",
              ApiKey: endpoint.key
            },
            onload: response => {
              switch (response.status) {
               case 200:
                try {
                  let r = JSON.parse(response.responseText);
                  if ("errors" in r) r.errors.forEach((e => {
                    console.error(`Stash returned "${e.extensions.code}" error: ${e.message}`);
                    reject(e.message);
                  })); else resolve(r.data);
                } catch (e) {
                  void 0;
                  reject(response.responseText);
                }
                break;

               default:
                void 0;
                reject(response.responseText ?? statusMessage(response.status, response.statusText));
              }
            },
            onerror: response => {
              void 0;
              reject(response.responseText ?? statusMessage(response.status, response.statusText));
            },
            onabort() {
              reject("aborted");
            },
            ontimeout() {
              reject("timeout");
            }
          });
        }));
      }
      function statusMessage(status, statusText) {
        if (statusText && statusText.trim() !== "") return `${status}: ${statusText}`; else return `${status}: ${utils.iy.get(status)}`;
      }
    },
    378: (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, (async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.d(__webpack_exports__, {
            I: () => stashEndpoints,
            P: () => initEndpointSettings
          });
          var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(613);
          var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(463);
          var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _settings__WEBPACK_IMPORTED_MODULE_2__ ]);
          _settings__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
          const defaultData = [ {
            name: "Localhost",
            url: "http://localhost:9999/graphql",
            key: ""
          } ];
          const stashEndpoints = await (0, _storage__WEBPACK_IMPORTED_MODULE_0__._W)(_storage__WEBPACK_IMPORTED_MODULE_0__.Zg.StashEndpoints, defaultData);
          async function initEndpointSettings() {
            let description = "The GraphQL endpoint URL can be generated by appending '/graphql' to your Stash base URL. The API key can be found on your security settings page. Leave the field empty, if none is required.";
            let endpointSection = (0, _settings__WEBPACK_IMPORTED_MODULE_2__.Lc)("endpoints", "Stash Endpoints", description);
            await updateEndpoints(endpointSection);
          }
          async function updateEndpoints(container) {
            let endpointList = stashEndpoints.map(((endpoint, index) => {
              let div = document.createElement("div");
              div.classList.add("stashChecker", "endpoint");
              div.innerHTML = `<div><h3>${endpoint.name}</h3><p>${endpoint.url}</p></div>`;
              getVersion(endpoint, div.querySelector("h3"));
              let editButton = (0, _settings__WEBPACK_IMPORTED_MODULE_2__.jr)("Edit", editEndpointListener);
              editButton.setAttribute("data-index", index.toString());
              div.append(editButton);
              let deleteButton = (0, _settings__WEBPACK_IMPORTED_MODULE_2__.g8)("Delete", deleteEndpointListener);
              deleteButton.setAttribute("data-index", index.toString());
              div.append(deleteButton);
              return div;
            }));
            let div = document.createElement("div");
            div.classList.add("stashChecker", "endpoint");
            div.innerHTML = "<div></div>";
            div.append((0, _settings__WEBPACK_IMPORTED_MODULE_2__.jr)("Add", addEndpointListener));
            endpointList.push(div);
            container.replaceChildren(...endpointList);
          }
          async function addEndpointListener() {
            let newEndpoint = {
              name: prompt("Name:")?.trim() ?? "",
              url: prompt("URL:")?.trim() ?? "",
              key: prompt("API Key:")?.trim() ?? ""
            };
            stashEndpoints.push(newEndpoint);
            void (0, _storage__WEBPACK_IMPORTED_MODULE_0__.KY)(_storage__WEBPACK_IMPORTED_MODULE_0__.Zg.StashEndpoints, stashEndpoints);
            await updateEndpoints((0, _settings__WEBPACK_IMPORTED_MODULE_2__.zH)("endpoints"));
          }
          async function editEndpointListener() {
            let index = parseInt(this.getAttribute("data-index"));
            let oldEndpoint = stashEndpoints[index];
            stashEndpoints[index] = {
              name: prompt("Name:", oldEndpoint.name)?.trim() ?? oldEndpoint.name,
              url: prompt("URL:", oldEndpoint.url)?.trim() ?? oldEndpoint.url,
              key: prompt("API Key:", oldEndpoint.key)?.trim() ?? oldEndpoint.key
            };
            void (0, _storage__WEBPACK_IMPORTED_MODULE_0__.KY)(_storage__WEBPACK_IMPORTED_MODULE_0__.Zg.StashEndpoints, stashEndpoints);
            await updateEndpoints((0, _settings__WEBPACK_IMPORTED_MODULE_2__.zH)("endpoints"));
          }
          async function deleteEndpointListener() {
            let index = parseInt(this.getAttribute("data-index"));
            stashEndpoints.splice(index, 1);
            void (0, _storage__WEBPACK_IMPORTED_MODULE_0__.KY)(_storage__WEBPACK_IMPORTED_MODULE_0__.Zg.StashEndpoints, stashEndpoints);
            await updateEndpoints((0, _settings__WEBPACK_IMPORTED_MODULE_2__.zH)("endpoints"));
          }
          async function getVersion(endpoint, element) {
            let resolve = data => {
              element.innerHTML += `<span class="version"> (${data.version})</span>`;
            };
            let reject = message => {
              let explanation = "no connection";
              if (message) explanation = message.length < 30 ? message?.trim() : "wrong URL";
              element.innerHTML += `<span class="version"> (${explanation})</span>`;
            };
            await (0, _request__WEBPACK_IMPORTED_MODULE_1__.E)(endpoint, "version{version}").then(resolve).catch(reject);
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }), 1);
    },
    44: (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, (async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.d(__webpack_exports__, {
            $k: () => booleanOptions,
            WA: () => initGeneralSettings,
            i3: () => stringOptions,
            vw: () => OptionKey
          });
          var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
          var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(613);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _settings__WEBPACK_IMPORTED_MODULE_0__ ]);
          _settings__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
          var OptionKey;
          (function(OptionKey) {
            OptionKey["showCrossMark"] = "showCrossMark";
            OptionKey["showTags"] = "showTags";
            OptionKey["showFiles"] = "showFiles";
            OptionKey["checkMark"] = "checkMark";
            OptionKey["crossMark"] = "crossMark";
            OptionKey["warningMark"] = "warningMark";
          })(OptionKey || (OptionKey = {}));
          const defaultBooleanOptions = new Map([ [ OptionKey.showCrossMark, true ], [ OptionKey.showTags, true ], [ OptionKey.showFiles, true ] ]);
          const defaultStringOptions = new Map([ [ OptionKey.checkMark, "✓" ], [ OptionKey.crossMark, "✗" ], [ OptionKey.warningMark, "!" ] ]);
          const booleanOptions = await (0, _storage__WEBPACK_IMPORTED_MODULE_1__._W)(_storage__WEBPACK_IMPORTED_MODULE_1__.Zg.BooleanOptions, defaultBooleanOptions);
          const stringOptions = await (0, _storage__WEBPACK_IMPORTED_MODULE_1__._W)(_storage__WEBPACK_IMPORTED_MODULE_1__.Zg.StringOptions, defaultStringOptions);
          function initGeneralSettings() {
            let generalSection = (0, _settings__WEBPACK_IMPORTED_MODULE_0__.Lc)("general", "General");
            populateGeneralSection(generalSection);
          }
          function populateGeneralSection(generalSection) {
            let symbolSettings = fieldSet("symbol-settings", "Symbol");
            symbolSettings.append(checkBox(OptionKey.showCrossMark, "Show cross mark"), charBox(OptionKey.checkMark, "Check mark"), charBox(OptionKey.warningMark, "Duplicate mark"), charBox(OptionKey.crossMark, "Cross mark"));
            generalSection.appendChild(symbolSettings);
            let tooltipSettings = fieldSet("tooltip-settings", "Tooltip");
            tooltipSettings.append(checkBox(OptionKey.showTags, "Show tags"), checkBox(OptionKey.showFiles, "Show files"));
            generalSection.appendChild(tooltipSettings);
            let defaultButton = fieldSet("default-button", "Default Settings");
            let div = document.createElement("div");
            div.classList.add("option");
            div.appendChild((0, _settings__WEBPACK_IMPORTED_MODULE_0__.g8)("Reset", resetToDefault));
            defaultButton.append(div);
            generalSection.appendChild(defaultButton);
          }
          function fieldSet(id, label) {
            let fieldSet = document.getElementById(`stashChecker-fieldset-${id}`) ?? document.createElement("fieldset");
            fieldSet.id = `stashChecker-fieldset-${id}`;
            fieldSet.innerHTML = `<legend>${label}</legend>`;
            return fieldSet;
          }
          function resetToDefault() {
            defaultBooleanOptions.forEach(((value, key) => booleanOptions.set(key, value)));
            void (0, _storage__WEBPACK_IMPORTED_MODULE_1__.KY)(_storage__WEBPACK_IMPORTED_MODULE_1__.Zg.BooleanOptions, booleanOptions);
            defaultStringOptions.forEach(((value, key) => stringOptions.set(key, value)));
            void (0, _storage__WEBPACK_IMPORTED_MODULE_1__.KY)(_storage__WEBPACK_IMPORTED_MODULE_1__.Zg.StringOptions, stringOptions);
            let generalSection = (0, _settings__WEBPACK_IMPORTED_MODULE_0__.zH)("general");
            populateGeneralSection(generalSection);
          }
          function checkBox(key, label) {
            let div = document.createElement("div");
            div.classList.add("option");
            let inputElement = document.createElement("input");
            inputElement.id = `stashChecker-checkBox-${key}`;
            inputElement.name = key;
            inputElement.type = "checkbox";
            inputElement.defaultChecked = booleanOptions.get(key) ?? false;
            inputElement.addEventListener("input", (() => {
              booleanOptions.set(key, inputElement.checked);
              void (0, _storage__WEBPACK_IMPORTED_MODULE_1__.KY)(_storage__WEBPACK_IMPORTED_MODULE_1__.Zg.BooleanOptions, booleanOptions);
            }));
            let labelElement = document.createElement("label");
            labelElement.htmlFor = inputElement.id;
            labelElement.innerHTML = label;
            div.appendChild(labelElement);
            div.appendChild(inputElement);
            return div;
          }
          function charBox(key, label) {
            let div = document.createElement("div");
            div.classList.add("option");
            let inputElement = document.createElement("input");
            inputElement.id = `stashChecker-textBox-${key}`;
            inputElement.name = key;
            inputElement.type = "text";
            inputElement.size = 2;
            inputElement.defaultValue = stringOptions.get(key) ?? "";
            inputElement.addEventListener("input", (() => {
              stringOptions.set(key, inputElement.value);
              void (0, _storage__WEBPACK_IMPORTED_MODULE_1__.KY)(_storage__WEBPACK_IMPORTED_MODULE_1__.Zg.StringOptions, stringOptions);
            }));
            let labelElement = document.createElement("label");
            labelElement.htmlFor = inputElement.id;
            labelElement.innerHTML = label;
            div.appendChild(labelElement);
            div.appendChild(inputElement);
            return div;
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }), 1);
    },
    513: (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, (async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.d(__webpack_exports__, {
            Q: () => initMenu,
            e: () => isSiteBlocked
          });
          var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
          var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(613);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _settings__WEBPACK_IMPORTED_MODULE_0__ ]);
          _settings__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
          const BLOCKED_SITE_KEY = `blocked_${window.location.host}`.replace(/[.\-]/, "_");
          async function initMenu() {
            GM.registerMenuCommand("Settings", _settings__WEBPACK_IMPORTED_MODULE_0__.YH, "s");
            if (await isSiteBlocked()) GM.registerMenuCommand(`Activate for ${window.location.host}`, unblockSite, "a"); else GM.registerMenuCommand(`Deactivate for ${window.location.host}`, blockSite, "d");
          }
          async function isSiteBlocked() {
            return await (0, _storage__WEBPACK_IMPORTED_MODULE_1__._W)(BLOCKED_SITE_KEY, false);
          }
          async function blockSite() {
            await (0, _storage__WEBPACK_IMPORTED_MODULE_1__.KY)(BLOCKED_SITE_KEY, true);
            window.location.reload();
          }
          async function unblockSite() {
            await (0, _storage__WEBPACK_IMPORTED_MODULE_1__.Tc)(BLOCKED_SITE_KEY);
            window.location.reload();
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }));
    },
    59: (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, (async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.d(__webpack_exports__, {
            Lc: () => newSettingsSection,
            YH: () => openSettingsWindow,
            g8: () => buttonDanger,
            jr: () => buttonPrimary,
            yD: () => initSettingsWindow,
            zH: () => getSettingsSection
          });
          var _observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(648);
          var _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(219);
          var _stashChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(782);
          var _statistics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(821);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__, _stashChecker__WEBPACK_IMPORTED_MODULE_1__, _statistics__WEBPACK_IMPORTED_MODULE_2__ ]);
          [_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__, _stashChecker__WEBPACK_IMPORTED_MODULE_1__, _statistics__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          function initSettingsWindow() {
            let settingsModal = document.createElement("div");
            settingsModal.id = "stashChecker-settingsModal";
            settingsModal.style.display = "none";
            settingsModal.classList.add("stashChecker", "modal");
            settingsModal.addEventListener("click", closeSettingsWindow);
            let settings = document.createElement("div");
            settings.id = "stashChecker-settings";
            settings.classList.add("stashChecker", "settings");
            settingsModal.append(settings);
            document.body.append(settingsModal);
          }
          function newSettingsSection(id, title, description) {
            let section = document.createElement("div");
            section.id = `stashChecker-settingsSection-${id}`;
            section.classList.add("stashChecker", "settingsSection");
            getSettings().append(section);
            let heading = document.createElement("h2");
            heading.classList.add("stashChecker", "heading");
            heading.innerHTML = title;
            section.append(heading);
            if (description) {
              let text = document.createElement("p");
              text.classList.add("stashChecker", "sub-heading");
              text.innerHTML = description;
              section.append(text);
            }
            let body = document.createElement("div");
            body.id = `stashChecker-settingsSectionBody-${id}`;
            body.classList.add("stashChecker", "settingsSectionBody");
            section.append(body);
            return body;
          }
          function getSettings() {
            return document.getElementById("stashChecker-settings");
          }
          function getSettingsSection(id) {
            return document.getElementById(`stashChecker-settingsSectionBody-${id}`);
          }
          function openSettingsWindow() {
            let settingsModal = document.getElementById("stashChecker-settingsModal");
            if (settingsModal?.style?.display) {
              (0, _statistics__WEBPACK_IMPORTED_MODULE_2__.n)();
              settingsModal.style.display = "initial";
            }
          }
          function closeSettingsWindow(event) {
            if (event.target === this) {
              this.style.display = "none";
              (0, _observer__WEBPACK_IMPORTED_MODULE_3__.r)();
              (0, _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__.T)();
              (0, _stashChecker__WEBPACK_IMPORTED_MODULE_1__.C)();
            }
          }
          function buttonPrimary(label, listener) {
            let button = document.createElement("button");
            button.classList.add("stashChecker", "btn", "btn-primary");
            button.addEventListener("click", listener);
            button.innerHTML = label;
            return button;
          }
          function buttonDanger(label, listener) {
            let button = document.createElement("button");
            button.classList.add("stashChecker", "btn", "btn-danger");
            button.addEventListener("click", listener);
            button.innerHTML = label;
            return button;
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }));
    },
    821: (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, (async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.d(__webpack_exports__, {
            S: () => initStatistics,
            n: () => updateStatistics
          });
          var _dataTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
          var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _settings__WEBPACK_IMPORTED_MODULE_1__ ]);
          _settings__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
          function initStatistics() {
            (0, _settings__WEBPACK_IMPORTED_MODULE_1__.Lc)("statistics", "Statistics");
          }
          function updateStatistics() {
            let statisticsSection = (0, _settings__WEBPACK_IMPORTED_MODULE_1__.zH)("statistics");
            let targets = [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.We.Scene, _dataTypes__WEBPACK_IMPORTED_MODULE_0__.We.Movie, _dataTypes__WEBPACK_IMPORTED_MODULE_0__.We.Gallery, _dataTypes__WEBPACK_IMPORTED_MODULE_0__.We.Performer, _dataTypes__WEBPACK_IMPORTED_MODULE_0__.We.Studio, _dataTypes__WEBPACK_IMPORTED_MODULE_0__.We.Tag ];
            let string = targets.flatMap((target => {
              let s = statistics(target);
              return s ? [ s ] : [];
            })).join("<br>");
            let span = document.createElement("span");
            span.innerHTML = string;
            statisticsSection.replaceChildren(span);
          }
          function statistics(target) {
            let count = symbolCount(target);
            let string = `Matched ${symbolCount(target, [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.Wb.Check, _dataTypes__WEBPACK_IMPORTED_MODULE_0__.Wb.Warning ])} out of ${count} ${(0, 
            _dataTypes__WEBPACK_IMPORTED_MODULE_0__.T4)(target)}`;
            return count > 0 ? string : null;
          }
          function symbolCount(target = void 0, symbol = void 0) {
            let symbols = Array.from(document.querySelectorAll(".stashCheckerSymbol"));
            if (target) symbols = symbols.filter((element => element.getAttribute("data-target") == target));
            if (symbol) symbols = symbols.filter((element => symbol.map((s => s.toString())).includes(element.getAttribute("data-symbol"))));
            return symbols.length;
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }));
    },
    613: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        KY: () => setValue,
        Tc: () => deleteValue,
        Zg: () => StorageKey,
        _W: () => getValue
      });
      var StorageKey;
      (function(StorageKey) {
        StorageKey["BooleanOptions"] = "booleanOptions";
        StorageKey["StashEndpoints"] = "stashEndpoints";
        StorageKey["StringOptions"] = "stringOptions";
      })(StorageKey || (StorageKey = {}));
      async function getValue(key, defaultValue) {
        const text = await GM.getValue(key, void 0);
        try {
          if (text === void 0) return Promise.resolve(defaultValue); else return Promise.resolve(JSON.parse(text, reviver));
        } catch (e) {
          console.warn("Failed to parse stored value. Delete stored key-value pair.");
          await deleteValue(key);
          return Promise.resolve(defaultValue);
        }
      }
      async function setValue(key, value) {
        return GM.setValue(key, JSON.stringify(value, replacer));
      }
      async function deleteValue(key) {
        return GM.deleteValue(key);
      }
      function replacer(key, value) {
        if (value instanceof Map) return {
          dataType: "Map",
          value: Array.from(value.entries())
        }; else return value;
      }
      function reviver(key, value) {
        if (typeof value === "object" && value !== null) if (value.dataType === "Map") return new Map(value.value);
        return value;
      }
    },
    782: (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, (async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.d(__webpack_exports__, {
            C: () => runStashChecker
          });
          var _check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(464);
          var _dataTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(389);
          var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(185);
          var _settings_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(513);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _check__WEBPACK_IMPORTED_MODULE_0__, _settings_menu__WEBPACK_IMPORTED_MODULE_3__ ]);
          [_check__WEBPACK_IMPORTED_MODULE_0__, _settings_menu__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          async function runStashChecker() {
            if (await (0, _settings_menu__WEBPACK_IMPORTED_MODULE_3__.e)()) {
              console.info("Userscript is deactivated for this site. Activate in userscript menu.");
              return;
            }
            console.info("Running Stash Checker");
            let currentSite = () => window.location.href;
            let closestUrl = e => e.closest("a")?.href;
            switch (window.location.host) {
             case "www.iwara.tv":
              {
                let color = d => d.files.some((f => f.path.endsWith("_Source.mp4"))) ? "green" : "blue";
                let codeRegex = /(?<=video\/)([a-zA-Z0-9]+)(?=\/|$)/;
                let prepareUrl = url => {
                  let match = url?.match(codeRegex);
                  let end = match?.index && match?.[0]?.length ? match?.index + match?.[0]?.length : match?.index;
                  return url?.substring(0, end);
                };
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, ".page-video__details > .text--h1", {
                  observe: true,
                  urlSelector: _ => prepareUrl(currentSite()),
                  color,
                  codeSelector: () => window.location.pathname.match(codeRegex)?.[0]
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "a.videoTeaser__title", {
                  observe: true,
                  urlSelector: e => prepareUrl(closestUrl(e)),
                  color,
                  codeSelector: e => e.getAttribute("href")?.match(codeRegex)?.[0]
                });
                break;
              }

             case "oreno3d.com":
              {
                let color = d => d.files.some((f => f.path.endsWith("_Source.mp4"))) ? "green" : "blue";
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "h1.video-h1", {
                  color,
                  urlSelector: currentSite,
                  titleSelector: null
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "a h2.box-h2", {
                  color,
                  titleSelector: null
                });
                break;
              }

             case "erommdtube.com":
              {
                let color = d => d.files.some((f => f.path.endsWith("_Source.mp4"))) ? "green" : "blue";
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "h1.show__h1", {
                  color,
                  urlSelector: currentSite,
                  titleSelector: null
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "h2.main__list-title", {
                  color,
                  titleSelector: null
                });
                break;
              }

             case "coomer.su":
             case "kemono.su":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "h1.post__title", {
                urlSelector: currentSite,
                titleSelector: null
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, ".post-card > a[href*='/post/']", {
                titleSelector: null
              });
              break;

             case "adultanime.dbsearch.net":
              if (document.querySelector("article > section[id='info-table']") !== null) (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "div[id='main-inner'] > article > h2", {
                urlSelector: currentSite,
                codeSelector: _ => document.evaluate("//dt[text()='規格品番']/following-sibling::dd[1]/p/text()", document, null, XPathResult.STRING_TYPE, null)?.stringValue?.trim()
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "div.item-info > :is(h4, h5) > a");
              break;

             case "xcity.jp":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "#program_detail_title", {
                urlSelector: currentSite,
                codeSelector: _ => document.getElementById("hinban")?.textContent
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, ".x-itemBox", {
                observe: true,
                displaySelector: e => e.querySelector(".x-itemBox-title"),
                urlSelector: e => e.querySelector("a")?.href?.split("&")?.[0],
                titleSelector: e => e.querySelector("a")?.title
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "#avidolDetails", {
                urlSelector: _ => currentSite().split(/[?&]/)[0],
                nameSelector: e => e.querySelector(".photo img")?.getAttribute("alt") ?? (0, _utils__WEBPACK_IMPORTED_MODULE_2__.ou)(e)
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a[href^='/idol/detail/'][href$='/']", {
                observe: true
              });
              break;

             case "xslist.org":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "span[itemprop='name']", {
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a[href*='/model/']");
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "table#movices td > strong", {
                urlSelector: null,
                codeSelector: e => e.textContent?.trim(),
                titleSelector: null
              });
              break;

             case "warashi-asian-pornstars.fr":
              {
                let nameSelector = e => (0, _utils__WEBPACK_IMPORTED_MODULE_2__.zW)(e).flatMap((s => s.split(" "))).map((s => s.trim())).filter((s => s && !(0, 
                _utils__WEBPACK_IMPORTED_MODULE_2__._t)(s) && !(0, _utils__WEBPACK_IMPORTED_MODULE_2__.gS)(s))).map((s => (0, 
                _utils__WEBPACK_IMPORTED_MODULE_2__.l2)(s))).join(" ");
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "#pornostar-profil [itemprop='name']", {
                  urlSelector: currentSite,
                  nameSelector
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "figcaption a[href*='/s-2-0/'], figcaption a[href*='/s-3-0/']", {
                  displaySelector: e => Array(null, "(read more)", "(lire la suite)").includes(e.textContent) ? null : e,
                  nameSelector
                });
                break;
              }

             case "www.animecharactersdatabase.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a[href*='characters.php']:not([href*='_']):not([href*='series'])");
              break;

             case "www.iafd.com":
              if (window.location.pathname.startsWith("/person.rme/perfid=")) (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "h1", {
                urlSelector: currentSite
              }); else if (window.location.pathname.startsWith("/title.rme/id=")) (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "h1", {
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a[href*='/person.rme/perfid=']");
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "a[href*='/title.rme/id=']");
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Studio, "a[href*='/studio.rme/studio=']");
              break;

             case "javdb.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, ".video-detail > h2", {
                urlSelector: currentSite,
                titleSelector: e => e.querySelector("strong.current-title")?.textContent?.trim(),
                codeSelector: _ => {
                  let xpath = document.evaluate("//div/strong[text()='ID:']/following-sibling::span[1]//text()", document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
                  let first = xpath.iterateNext()?.textContent;
                  let second = xpath.iterateNext()?.textContent;
                  return first && second ? first + second : first;
                }
              });
              if (window.location.pathname.startsWith("/v/")) (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "a[href^='/v/'] > .video-number", {
                titleSelector: e => e.parentElement?.title?.trim(),
                codeSelector: e => e.textContent?.trim()
              }); else (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "a[href^='/v/'] > .video-title", {
                titleSelector: e => e.parentElement?.title?.trim(),
                codeSelector: e => e.querySelector("strong")?.textContent?.trim()
              });
              break;

             case "theporndb.net":
              {
                let stashIdSelector = _ => document.querySelector("div[name='UUID'] > div > div.flex")?.textContent?.trim();
                let stashIdEndpoint = "https://api.theporndb.net/graphql";
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "div.pl-4 > h2", {
                  observe: true,
                  displaySelector: e => window.location.pathname.startsWith("/performers/") ? e : null,
                  urlSelector: currentSite,
                  stashIdSelector
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "div.pl-4 > h2", {
                  observe: true,
                  displaySelector: e => window.location.pathname.startsWith("/performers/") ? e : null,
                  urlSelector: null,
                  nameSelector: null,
                  stashIdSelector,
                  stashIdEndpoint
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "div.flex.justify-between > h2", {
                  observe: true,
                  displaySelector: e => window.location.pathname.startsWith("/scenes/") || window.location.pathname.startsWith("/jav/") ? e : null,
                  urlSelector: currentSite,
                  stashIdSelector
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "div.flex.justify-between > h2", {
                  observe: true,
                  displaySelector: e => window.location.pathname.startsWith("/scenes/") || window.location.pathname.startsWith("/jav/") ? e : null,
                  urlSelector: null,
                  titleSelector: null,
                  stashIdSelector,
                  stashIdEndpoint
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Movie, "div.flex.justify-between > h2", {
                  observe: true,
                  displaySelector: e => window.location.pathname.startsWith("/movies/") ? e : null,
                  urlSelector: currentSite,
                  stashIdSelector
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Movie, "div.flex.justify-between > h2", {
                  observe: true,
                  displaySelector: e => window.location.pathname.startsWith("/movies/") ? e : null,
                  urlSelector: null,
                  nameSelector: null,
                  stashIdSelector,
                  stashIdEndpoint
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a[href^='https://theporndb.net/performers/']", {
                  observe: true
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "a[href^='https://theporndb.net/scenes/'], a[href^='https://theporndb.net/jav/']", {
                  observe: true
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Movie, "a[href^='https://theporndb.net/movies/']", {
                  observe: true
                });
                break;
              }

             case "www.javlibrary.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "div[id='video_title']", {
                urlSelector: _ => currentSite().replace("videoreviews.php", "").replace(/&.*$/, ""),
                codeSelector: _ => document.querySelector("div[id='video_id'] td.text")?.textContent?.trim(),
                titleSelector: _ => document.querySelector("div[id='video_id'] td.text")?.textContent?.trim()
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, ".video a[href^='./?v=jav']", {
                urlSelector: e => closestUrl(e)?.replace(/&.*$/, ""),
                codeSelector: e => e.querySelector("div.id")?.textContent?.trim()
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, ".comment strong > a[href^='videoreviews.php?v=jav']", {
                urlSelector: e => closestUrl(e)?.replace("videoreviews.php", "").replace(/&.*$/, ""),
                codeSelector: e => (0, _utils__WEBPACK_IMPORTED_MODULE_2__.ou)(e)?.split(" ")[0],
                titleSelector: e => (0, _utils__WEBPACK_IMPORTED_MODULE_2__.ou)(e)?.split(" ")[0]
              });
              break;

             case "r18.dev":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "#video-info > #title", {
                observe: true,
                urlSelector: currentSite,
                codeSelector: _ => (0, _utils__WEBPACK_IMPORTED_MODULE_2__.ou)(document.querySelector("#dvd-id"))
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, ".video-label > a[href*='/movies/detail/']", {
                observe: true,
                codeSelector: _utils__WEBPACK_IMPORTED_MODULE_2__.ou
              });
              break;

             case "www.manyvids.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Studio, "[class^='ProfileAboutMeUI_stageName_']", {
                observe: true,
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Studio, "[class^='VideoProfileCard_actions_'] a[href^='/Profile/'], [class^='CardCreatorHeaderUI_creatorInfo_'] a[href^='/Profile/']", {
                observe: true,
                urlSelector: e => closestUrl(e)?.replace(/Store\/Videos$/, "")
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "h1[class^='VideoMetaInfo_title_']", {
                observe: true,
                urlSelector: currentSite,
                codeSelector: _ => window.location.pathname.split("/")[2]
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "[class^='VideoCardUI_videoTitle_'] a[href^='/Video/']", {
                observe: true,
                codeSelector: e => e.getAttribute("href")?.split("/")?.[2]
              });
              break;

             case "www.minnano-av.com":
              if (/actress\d{1,6}/.test(window.location.pathname)) (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "h1", {
                urlSelector: _ => currentSite().split("?")[0]
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a[href*='actress']:not([href*='list']):not([href*='.php']):not([href*='http'])", {
                urlSelector: e => closestUrl(e)?.split("?")?.[0]
              });
              break;

             case "www.indexxx.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "h1[id='model-name']", {
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a.modelLink[href^='https://www.indexxx.com/m/'] > span");
              break;

             case "www.thenude.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "span.model-name", {
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a.model-name, a.model-title, a[data-img*='/models/']", {
                observe: true
              });
              break;

             case "www.data18.com":
              {
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "a[href^='https://www.data18.com/scenes/']:not([href*='#'])", {
                  observe: true,
                  titleSelector: e => e.getAttribute("title")?.trim()
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Movie, "a[href^='https://www.data18.com/movies/']:not([href*='#']):not([href$='/movies/series']):not([href$='/movies/showcases'])", {
                  observe: true,
                  nameSelector: e => e.getAttribute("title")?.trim()
                });
                let exclude = ":not([href*='/pairings']):not([href*='/studio']):not([href*='/virtual-reality']):not([href*='/scenes']):not([href*='/movies']):not([href*='/tags']):not([title$=' Home'])";
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, `a[href^='https://www.data18.com/name/']${exclude}`, {
                  observe: true
                });
                if (window.location.pathname === "/names/pornstars") (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, `a[href^='https://www.data18.com/name/']${exclude}`, {
                  observe: true,
                  displaySelector: e => e.parentElement?.querySelector("div"),
                  nameSelector: e => e.getAttribute("title")
                });
                break;
              }

             case "www.adultfilmdatabase.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "h1.w3-opacity", {
                displaySelector: e => window.location.pathname.startsWith("/actor/") ? e : null,
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "h1[itemprop='name']", {
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Studio, "h1.w3-opacity", {
                displaySelector: e => window.location.pathname.startsWith("/studio/") ? e : null,
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Studio, "a[href^='/studio/']", {
                observe: true
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a[href^='/actor/']", {
                observe: true,
                displaySelector: e => (0, _utils__WEBPACK_IMPORTED_MODULE_2__.ou)(e) === "as performer" ? null : e
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "a[href^='/video/']", {
                observe: true,
                titleSelector: e => e.getAttribute("title")?.trim() ?? (0, _utils__WEBPACK_IMPORTED_MODULE_2__.ou)(e)
              });
              break;

             case "www.babepedia.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "h1#babename", {
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a[href*='/babe/']", {
                observe: true
              });
              break;

             case "www.freeones.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a[href$='/feed'] [data-test='subject-name'], a[href$='/feed'] .profile-image + p", {
                urlSelector: e => closestUrl(e)?.replace(/\/feed$/, "").replace(/\/[a-z]{2}\//, "/")
              });
              break;

             case "shemalestardb.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "h2[id='star-name']", {
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "figcaption > a[href*='/stars/']");
              break;

             case "onlyfans.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "div.b-username > div.g-user-name", {
                observe: true,
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a.b-username > div.g-user-name", {
                observe: true
              });
              break;

             case "www.pornteengirl.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a[href*='/model/']", {
                nameSelector: e => (0, _utils__WEBPACK_IMPORTED_MODULE_2__.ou)(e)?.replace(/\([^()]*\)$/, "")?.trimEnd()
              });
              break;

             case "gayeroticvideoindex.com":
              if (window.location.pathname.startsWith("/performer/")) (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "[id='data'] h1", {
                urlSelector: currentSite
              }); else if (window.location.pathname.startsWith("/episode/")) (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "[id='data'] h1", {
                urlSelector: currentSite
              }); else if (window.location.pathname.startsWith("/video/")) (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Movie, "[id='data'] h1", {
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a[href*='performer/']", {
                observe: true
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "a[href*='episode/']", {
                observe: true
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Movie, "a[href*='video/']", {
                observe: true
              });
              break;

             case "pmvhaven.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "h1.pl-2", {
                observe: true,
                displaySelector: e => window.location.pathname.startsWith("/video/") ? e : null,
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "a[href^='/video/'] .v-card-text", {
                observe: true
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Studio, ".v-card-title", {
                observe: true,
                displaySelector: e => window.location.pathname.startsWith("/creator/") ? e : null,
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Studio, "a[href^='/creator/'] .v-chip__content", {
                observe: true
              });
              break;

             case "fansdb.cc":
             case "fansdb.xyz":
             case "pmvstash.org":
             case "stashdb.org":
              {
                let exclude = ":not(a[href$='/add']):not(a[href$='/edit']):not(a[href$='/merge']):not(a[href$='/delete'])";
                let stashBoxDefault = {
                  observe: true,
                  urlSelector: null,
                  titleSelector: null,
                  nameSelector: null
                };
                function findId(string) {
                  return string?.match(/\p{Hex}{8}-\p{Hex}{4}-\p{Hex}{4}-\p{Hex}{4}-\p{Hex}{12}/u)?.[0];
                }
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "div.scene-info.card h3 > span", {
                  ...stashBoxDefault,
                  stashIdSelector: () => findId(currentSite())
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, `a[href^='/scenes/']${exclude}, a[href^='https://${currentSite()}/scenes/']${exclude}`, {
                  ...stashBoxDefault,
                  stashIdSelector: e => findId(closestUrl(e))
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "div.PerformerInfo div.card-header h3 > span", {
                  ...stashBoxDefault,
                  stashIdSelector: () => findId(currentSite())
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, `a[href^='/performers/']${exclude}, a[href^='https://${currentSite()}/performers/']${exclude}`, {
                  ...stashBoxDefault,
                  stashIdSelector: e => findId(closestUrl(e))
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Studio, ".studio-title > h3 > span", {
                  ...stashBoxDefault,
                  stashIdSelector: () => findId(currentSite())
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Studio, `a[href^='/studios/']${exclude}, a[href^='https://${currentSite()}/studios/']${exclude}`, {
                  ...stashBoxDefault,
                  stashIdSelector: e => findId(closestUrl(e))
                });
                break;
              }

             default:
              console.warn("No configuration for website found.");
              break;
            }
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }));
    },
    657: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        M: () => StashQueryClass
      });
      var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
      class StashQueryClass {
        constructor(query) {
          this.endpoint = query.endpoint;
          this.baseUrl = query.baseUrl;
          this.types = query.types;
        }
        addTypes(types) {
          let typeSet = new Set(this.types);
          types.forEach((type => typeSet.add(type)));
          this.types = Array.from(typeSet).sort();
        }
        compareTo(query) {
          return this.endpoint.localeCompare(query.endpoint);
        }
        toHtml(target, id, numQueries) {
          let typesString = `(Matched: ${this.types.map((type => _utils__WEBPACK_IMPORTED_MODULE_0__.xG.get(type))).join(", ")})`;
          return `${this.matchQualityHtml(numQueries)} ${this.endpoint} ${typesString}: ${(0, 
          _utils__WEBPACK_IMPORTED_MODULE_0__.bM)(this.baseUrl, target, id)}`;
        }
        matchQualityHtml(numQueries) {
          let matchQuality = this.types.length / numQueries;
          let color;
          if (matchQuality == 1) color = "rgb(0,100,0)"; else if (matchQuality > .5) color = "rgb(100,100,0)"; else color = "rgb(100,50,0)";
          return `<span class="matchQuality" style="background-color: ${color}"></span>`;
        }
      }
    },
    219: (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, (async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.d(__webpack_exports__, {
            T: () => clearSymbols,
            l: () => prefixSymbol
          });
          var _dataTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
          var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(185);
          var _settings_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
          var _stashQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(657);
          var tippy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(244);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _settings_general__WEBPACK_IMPORTED_MODULE_2__ ]);
          _settings_general__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
          function getExistingSymbol(element) {
            if (element.getAttribute("data-type") === "stash-symbol") return element; else return Array.from(element.childNodes).filter((n => n.nodeType === Node.ELEMENT_NODE)).map((n => n)).map(getExistingSymbol).find((n => n));
          }
          function clearSymbols() {
            document.querySelectorAll(".stashCheckerSymbol").forEach((symbol => symbol.remove()));
          }
          const propertyStrings = new Map([ [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Aliases, aliases => aliases.length === 0 ? "" : `<br>Aliases: ${aliases.join(", <wbr>")}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.AliasList, aliasList => aliasList.length === 0 ? "" : `<br>Aliases: ${aliasList.join(", <wbr>")}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Birthdate, birthdate => `<br>Birthdate: ${birthdate}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.BitRate, bit_rate => `&nbsp;&nbsp;&nbsp;&nbsp;Bitrate: ${(bit_rate / 1e6).toFixed(2)}Mbit/s` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Code, code => `<br>Code: ${code}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Date, date => `<br>Date: ${date}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Disambiguation, disambiguation => ` <span style="color: grey">(${disambiguation})</span>` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Duration, duration => `&nbsp;&nbsp;&nbsp;&nbsp;Duration: ${(0, 
          _utils__WEBPACK_IMPORTED_MODULE_1__.xr)(duration)}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Favorite, () => "&emsp;&#10084;&#65039;" ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Files, (files, queries, target, numQueries) => `${files.map((file => formatFileData(file, queries, target, numQueries))).join("")}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Height, height => `x${height})` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.HeightCm, height => `<br>Height: ${height} cm` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Id, (id, queries, target, numQueries) => `<br>${formatQueries(queries, target, id, numQueries)}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Name, name => `<br>Name: ${name}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Path, path => `Path: ${path}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Size, size => `&nbsp;&nbsp;&nbsp;&nbsp;Size: ${(0, 
          _utils__WEBPACK_IMPORTED_MODULE_1__.$R)(size)}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Studio, studio => `<br>Studio: ${studio[_dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Name]}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Tags, tags => tags.length === 0 ? "" : `<br>Tags: ${tags.map(formatTagPill).join("<wbr>")}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Title, title => `<br>Title: ${title}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.VideoCodec, video_codec => `<br>Codec: ${video_codec}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Width, width => ` (${width}` ] ]);
          function formatFileData(file, queries, target, numQueries) {
            let text = Object.entries(file).map((([key, value]) => value ? propertyStrings.get(key)?.(value, queries, target, numQueries) : void 0)).filter((s => s)).join("");
            return `<div class='stashChecker file'>${text}</div>`;
          }
          function formatTagPill(tag) {
            return `<span class='stashChecker tag'>${tag.name}</span>`;
          }
          function formatQueries(queries, target, id, numQueries) {
            return queries.map((query => new _stashQuery__WEBPACK_IMPORTED_MODULE_3__.M(query).toHtml(target, id, numQueries))).join("<br>");
          }
          function formatEntryData(entry, target, numQueries) {
            return "<hr>" + Object.entries(entry).map((([key, value]) => value ? propertyStrings.get(key)?.(value, entry.queries, target, numQueries) : void 0)).filter((s => s)).join("");
          }
          function mergeData(target, source) {
            let mapTarget = new Map(target.map((e => [ entryKey(e), e ])));
            let mapSource = new Map(source.map((e => [ entryKey(e), e ])));
            mapSource.forEach(((sourceEntry, key) => {
              if (mapTarget.has(key)) {
                let sourceQueries = new Map(sourceEntry.queries.map((v => [ v.endpoint, v ])));
                let targetQueries = new Map(mapTarget.get(key).queries.map((v => [ v.endpoint, v ])));
                sourceQueries.forEach(((sourceQuery, key) => {
                  if (targetQueries.has(key)) {
                    let s = new _stashQuery__WEBPACK_IMPORTED_MODULE_3__.M(sourceQuery);
                    s.addTypes(targetQueries.get(key).types);
                    sourceQuery = s;
                  }
                  targetQueries.set(key, sourceQuery);
                }));
                sourceEntry.queries = Array.from(targetQueries.values()).map((q => new _stashQuery__WEBPACK_IMPORTED_MODULE_3__.M(q))).sort(((a, b) => a.compareTo(b)));
              }
              mapTarget.set(key, sourceEntry);
            }));
            return Array.from(mapTarget.values());
          }
          function entryKey(entry) {
            return `${entry.endpoint}-${entry.id}`;
          }
          function stashSymbol() {
            let symbol = document.createElement("span");
            symbol.classList.add("stashCheckerSymbol");
            symbol.setAttribute("data-type", "stash-symbol");
            symbol.setAttribute("data-count", "1");
            (0, tippy_js__WEBPACK_IMPORTED_MODULE_4__.Ay)(symbol, {
              allowHTML: true,
              interactive: true,
              appendTo: document.body,
              delay: [ 100, 300 ],
              duration: [ 200, 200 ],
              placement: "top",
              maxWidth: "none"
            });
            return symbol;
          }
          function prefixSymbol(element, target, type, endpoint, data, color) {
            let endpoints = [ endpoint.name ];
            let queryTypes = [ type ];
            let baseUrl = endpoint.url.replace(/\/graphql\/?$/, "");
            let query = {
              endpoint: endpoint.name,
              baseUrl,
              types: queryTypes
            };
            data.forEach((entry => {
              entry.queries = [ query ];
              entry.endpoint = endpoint.name;
            }));
            let symbol = getExistingSymbol(element);
            if (symbol) {
              endpoints = [ ...new Set(JSON.parse(symbol.getAttribute("data-endpoints"))).add(endpoint.name) ].sort();
              queryTypes = [ ...new Set(JSON.parse(symbol.getAttribute("data-queries"))).add(type) ].sort();
              data = mergeData(JSON.parse(symbol.getAttribute("data-data")), data);
              symbol.setAttribute("data-count", (parseInt(symbol.getAttribute("data-count")) + 1).toString());
            } else {
              symbol = stashSymbol();
              let text = (0, _utils__WEBPACK_IMPORTED_MODULE_1__.Yz)(element);
              if (text) text.parentNode?.insertBefore(symbol, text); else return;
            }
            symbol.setAttribute("data-endpoints", JSON.stringify(endpoints));
            symbol.setAttribute("data-target", target);
            symbol.setAttribute("data-queries", JSON.stringify(queryTypes));
            symbol.setAttribute("data-data", JSON.stringify(data));
            let count = data.length;
            let tooltip = "";
            let targetReadable = (0, _dataTypes__WEBPACK_IMPORTED_MODULE_0__.HD)(target);
            if (count === 0) {
              symbol.setAttribute("data-symbol", _dataTypes__WEBPACK_IMPORTED_MODULE_0__.Wb.Cross);
              if (_settings_general__WEBPACK_IMPORTED_MODULE_2__.$k.get(_settings_general__WEBPACK_IMPORTED_MODULE_2__.vw.showCrossMark)) symbol.innerHTML = `${_settings_general__WEBPACK_IMPORTED_MODULE_2__.i3.get(_settings_general__WEBPACK_IMPORTED_MODULE_2__.vw.crossMark)}&nbsp;`;
              symbol.style.color = "red";
              tooltip = `${targetReadable} not in Stash<br>`;
            } else if (new Set(data.map((e => e.endpoint))).size < data.length) {
              symbol.setAttribute("data-symbol", _dataTypes__WEBPACK_IMPORTED_MODULE_0__.Wb.Warning);
              symbol.innerHTML = `${_settings_general__WEBPACK_IMPORTED_MODULE_2__.i3.get(_settings_general__WEBPACK_IMPORTED_MODULE_2__.vw.warningMark)}&nbsp;`;
              symbol.style.color = "orange";
              tooltip = `${targetReadable} has duplicate matches<br>`;
            } else {
              symbol.setAttribute("data-symbol", _dataTypes__WEBPACK_IMPORTED_MODULE_0__.Wb.Check);
              symbol.innerHTML = `${_settings_general__WEBPACK_IMPORTED_MODULE_2__.i3.get(_settings_general__WEBPACK_IMPORTED_MODULE_2__.vw.checkMark)}&nbsp;`;
              symbol.style.color = color(data[0]);
            }
            tooltip += `Endpoints: ${endpoints.join(", ")}`;
            tooltip += "<br>";
            tooltip += `Queries: ${queryTypes.map((type => _utils__WEBPACK_IMPORTED_MODULE_1__.xG.get(type))).join(", ")}`;
            tooltip += data.map((entry => formatEntryData(entry, target, queryTypes.length))).join("");
            let tooltipWindow = document.createElement("div");
            tooltipWindow.classList.add("stashChecker", "tooltip");
            tooltipWindow.innerHTML = tooltip;
            tooltipWindow.tabIndex = 0;
            symbol._tippy?.setContent(tooltipWindow);
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }));
    },
    185: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        $R: () => bytesToReadable,
        Yz: () => firstTextChild,
        _t: () => hasKanji,
        bM: () => entryLink,
        gS: () => hasKana,
        iy: () => friendlyHttpStatus,
        l2: () => capitalized,
        ou: () => firstText,
        xG: () => typeToString,
        xr: () => secondsToReadable,
        zW: () => allText
      });
      var _dataTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
      function firstTextChild(node) {
        if (!node) return node;
        if (node.nodeType === Node.TEXT_NODE && node.textContent?.match(/^[\s<>]*$/) === null) return node; else return Array.from(node.childNodes).filter((n => ![ "svg" ].includes(n.nodeName.toLowerCase()))).filter((n => n.nodeType === Node.ELEMENT_NODE ? n.getAttribute("data-type") !== "stash-symbol" : true)).map(firstTextChild).find((n => n));
      }
      function firstText(node) {
        return firstTextChild(node)?.textContent?.trim();
      }
      function allText(node) {
        let words = node ? Array.from(node.childNodes).flatMap((n => n.nodeType == Node.TEXT_NODE ? [ n.textContent ] : allText(n))).filter((s => s)) : [];
        return words;
      }
      function entryLink(stashUrl, target, id) {
        let path;
        if (target == "gallery") path = "galleries"; else path = target + "s";
        let url = `${stashUrl}/${path}/${id}`;
        return `<a target="_blank" href="${url}">${url}</a>`;
      }
      function secondsToReadable(seconds) {
        let h = Math.floor(seconds / 3600);
        let m = Math.floor(seconds / 60) % 60;
        let s = Math.floor(seconds) % 60;
        return [ h, m, s ].map((v => v.toString().padStart(2, "0"))).filter(((v, i) => v !== "00" || i > 0)).join(":");
      }
      function bytesToReadable(bytes) {
        let labels = [ "KB", "MB", "GB", "TB", "PB" ];
        let label;
        for (label of labels) {
          bytes /= 1e3;
          if (bytes < 1e3) break;
        }
        return bytes.toFixed(2) + label;
      }
      function hasKanji(text) {
        return /[\u4e00-\u9faf\u3400-\u4dbf]/.test(text);
      }
      function hasKana(text) {
        return /[\u3041-\u3096\u30a0-\u30ff\uff5f-\uff9f]/.test(text);
      }
      function capitalized(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
      function titleCase(text) {
        return text.split(" ").map((n => capitalized(n))).join(" ");
      }
      function interleave(array, between) {
        return array.flatMap((element => [ element, between.cloneNode(true) ])).slice(0, -1);
      }
      let friendlyHttpStatus = new Map([ [ 200, "OK" ], [ 201, "Created" ], [ 202, "Accepted" ], [ 203, "Non-Authoritative Information" ], [ 204, "No Content" ], [ 205, "Reset Content" ], [ 206, "Partial Content" ], [ 300, "Multiple Choices" ], [ 301, "Moved Permanently" ], [ 302, "Found" ], [ 303, "See Other" ], [ 304, "Not Modified" ], [ 305, "Use Proxy" ], [ 306, "Unused" ], [ 307, "Temporary Redirect" ], [ 400, "Bad Request" ], [ 401, "Unauthorized" ], [ 402, "Payment Required" ], [ 403, "Forbidden" ], [ 404, "Not Found" ], [ 405, "Method Not Allowed" ], [ 406, "Not Acceptable" ], [ 407, "Proxy Authentication Required" ], [ 408, "Request Timeout" ], [ 409, "Conflict" ], [ 410, "Gone" ], [ 411, "Length Required" ], [ 412, "Precondition Required" ], [ 413, "Request Entry Too Large" ], [ 414, "Request-URI Too Long" ], [ 415, "Unsupported Media Type" ], [ 416, "Requested Range Not Satisfiable" ], [ 417, "Expectation Failed" ], [ 418, "I'm a teapot" ], [ 429, "Too Many Requests" ], [ 500, "Internal Server Error" ], [ 501, "Not Implemented" ], [ 502, "Bad Gateway" ], [ 503, "Service Unavailable" ], [ 504, "Gateway Timeout" ], [ 505, "HTTP Version Not Supported" ] ]);
      const typeToString = new Map([ [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.ZU.Url, "URL" ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.ZU.Code, "Code" ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.ZU.StashId, "StashId" ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.ZU.Name, "Name" ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.ZU.Title, "Title" ] ]);
    }
  };
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== void 0) return cachedModule.exports;
    var module = __webpack_module_cache__[moduleId] = {
      id: moduleId,
      exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }
  (() => {
    var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
    var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
    var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
    var resolveQueue = queue => {
      if (queue && queue.d < 1) {
        queue.d = 1;
        queue.forEach((fn => fn.r--));
        queue.forEach((fn => fn.r-- ? fn.r++ : fn()));
      }
    };
    var wrapDeps = deps => deps.map((dep => {
      if (dep !== null && typeof dep === "object") {
        if (dep[webpackQueues]) return dep;
        if (dep.then) {
          var queue = [];
          queue.d = 0;
          dep.then((r => {
            obj[webpackExports] = r;
            resolveQueue(queue);
          }), (e => {
            obj[webpackError] = e;
            resolveQueue(queue);
          }));
          var obj = {};
          obj[webpackQueues] = fn => fn(queue);
          return obj;
        }
      }
      var ret = {};
      ret[webpackQueues] = x => {};
      ret[webpackExports] = dep;
      return ret;
    }));
    __webpack_require__.a = (module, body, hasAwait) => {
      var queue;
      hasAwait && ((queue = []).d = -1);
      var depQueues = new Set;
      var exports = module.exports;
      var currentDeps;
      var outerResolve;
      var reject;
      var promise = new Promise(((resolve, rej) => {
        reject = rej;
        outerResolve = resolve;
      }));
      promise[webpackExports] = exports;
      promise[webpackQueues] = fn => (queue && fn(queue), depQueues.forEach(fn), promise["catch"]((x => {})));
      module.exports = promise;
      body((deps => {
        currentDeps = wrapDeps(deps);
        var fn;
        var getResult = () => currentDeps.map((d => {
          if (d[webpackError]) throw d[webpackError];
          return d[webpackExports];
        }));
        var promise = new Promise((resolve => {
          fn = () => resolve(getResult);
          fn.r = 0;
          var fnQueue = q => q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, 
          q.push(fn)));
          currentDeps.map((dep => dep[webpackQueues](fnQueue)));
        }));
        return fn.r ? promise : getResult();
      }), (err => (err ? reject(promise[webpackError] = err) : outerResolve(exports), 
      resolveQueue(queue))));
      queue && queue.d < 0 && (queue.d = 0);
    };
  })();
  (() => {
    __webpack_require__.n = module => {
      var getter = module && module.__esModule ? () => module["default"] : () => module;
      __webpack_require__.d(getter, {
        a: getter
      });
      return getter;
    };
  })();
  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
        enumerable: true,
        get: definition[key]
      });
    };
  })();
  (() => {
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  (() => {
    __webpack_require__.nc = void 0;
  })();
  var __webpack_exports__ = __webpack_require__(156);
})();