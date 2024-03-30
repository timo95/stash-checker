// ==UserScript==
// @name Stash Checker
// @description Add checkmarks on porn websites to scenes/performers that are present in your own Stash instance.
// @version 1.0.0
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
// @match *://www.adultfilmdatabase.com/*
// @match *://www.animecharactersdatabase.com/*
// @match *://www.babepedia.com/*
// @match *://www.data18.com/*
// @match *://www.freeones.com/*
// @match *://www.iafd.com/*
// @match *://www.indexxx.com/*
// @match *://www.iwara.tv/*
// @match *://www.javlibrary.com/*
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
      ___CSS_LOADER_EXPORT___.push([ module.id, `:root {\n  --stash-checker-color-text: #323232 !important;\n  --stash-checker-color-text-light: #989898 !important;\n  --stash-checker-color-link-visited: #323232 !important;\n  --stash-checker-color-link-hover: #039 !important;\n  --stash-checker-color-link-active: #039 !important;\n  --stash-checker-color-border: #323232 !important;\n  --stash-checker-color-border-light: #989898 !important;\n  --stash-checker-color-bg: #ffffff !important;\n  --stash-checker-color-card: #f2f2f2 !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --stash-checker-color-text: #e0e0e0 !important;\n    --stash-checker-color-text-light: #707070 !important;\n    --stash-checker-color-link-visited: #c7c7c7 !important;\n    --stash-checker-color-link-hover: #f2f2f2 !important;\n    --stash-checker-color-link-active: #039 !important;\n    --stash-checker-color-border: #5a5a5a !important;\n    --stash-checker-color-border-light: #707070 !important;\n    --stash-checker-color-bg: #202020 !important;\n    --stash-checker-color-card: #464646 !important;\n  }\n}\n\n.stashChecker {\n  color: var(--stash-checker-color-text) !important;\n  text-align: left !important;\n  font-size: medium !important;\n  line-height: normal !important;\n  opacity: 1 !important;\n}\n\n.stashChecker.sub-heading {\n  font-size: .8rem !important;\n  text-align: center !important;\n  margin: 0 0 .5rem !important;\n}\n\n.stashChecker.tooltip {\n  z-index: 99999 !important;\n  position: fixed !important;\n  background-color: var(--stash-checker-color-bg) !important;\n  border: .1rem solid var(--stash-checker-color-border) !important;\n  border-radius: .5rem !important;\n  padding: .5rem !important;\n  margin-top: -0.5rem !important;\n  max-width: 60rem !important;\n}\n\n.stashChecker.file {\n  margin: .5rem !important;\n  padding: .5rem !important;\n  background-color: var(--stash-checker-color-card) !important;\n}\n\n.stashChecker.tag {\n  white-space: nowrap !important;\n  line-height: 1.5rem !important;\n  margin-right: .5rem !important;\n  padding: 0 .5rem !important;\n  background-color: var(--stash-checker-color-card) !important;\n  border-radius: .5rem !important;\n}\n\n.stashChecker.modal {\n  position: fixed !important;\n  z-index: 999999 !important;\n  left: 0 !important;\n  top: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n  overflow: hidden !important;\n  background-color: #000 !important;\n  background-color: rgba(0,0,0,.4) !important;\n}\n\n.stashChecker.settings {\n  margin: 10vh auto !important;\n  background-color: var(--stash-checker-color-bg) !important;\n  border: .1rem solid var(--stash-checker-color-border) !important;\n  border-radius: .5rem !important;\n  padding: .5rem !important;\n  width: fit-content !important;\n  display: grid !important;\n  gap: 1rem !important;\n}\n\n.stashChecker.settings .version {\n  color: var(--stash-checker-color-text-light) !important;\n  font-size: 1.25rem !important;\n}\n\n.stashChecker.settingsSection {\n  width: 35rem !important;\n}\n\n.stashChecker.settingsSectionBody {\n  width: 100% !important;\n  display: flex !important;\n  flex-flow: row wrap !important;\n  justify-content: flex-start !important;\n  align-items: flex-start !important;\n  gap: .5rem !important;\n}\n\n.stashChecker.endpoint {\n  width: 100% !important;\n  display: flex !important;\n  flex-direction: row !important;\n  justify-content: space-between !important;\n  justify-items: flex-start !important;\n  align-items: center !important;\n  padding: 1rem !important;\n  margin: .1rem !important;\n  background-color: var(--stash-checker-color-card) !important;\n}\n\n.stashChecker.endpoint>button {\n  flex-grow: 0 !important;\n  margin-left: .5rem !important;\n}\n\n.stashChecker.endpoint>div {\n  flex-grow: 1 !important;\n}\n\n.stashChecker.endpoint>div>* {\n  margin: 0 !important;\n}\n\n.stashChecker.heading {\n  font-size: 1.5rem !important;\n  text-align: center !important;\n}\n\n.stashChecker fieldset {\n  width: fit-content !important;\n  border: .1rem solid var(--stash-checker-color-border-light) !important;\n  border-radius: .5rem !important;\n  margin: .5rem 0 .5rem 0 !important;\n  padding: .5rem !important;\n  flex-grow: 1 !important;\n}\n\n.stashChecker legend {\n  float: unset !important;\n  width: auto !important;\n  height: auto !important;\n  margin-left: .5rem !important;\n  margin-bottom: 0 !important;\n  padding-left: .2rem !important;\n  padding-right: .2rem !important;\n  line-height: unset !important;\n  font-size: unset !important;\n}\n\n.stashChecker .option {\n  text-align: right !important;\n  margin: .5rem !important;\n}\n\n.stashChecker .option>input {\n  margin-left: .5rem !important;\n}\n\n.stashChecker>.matchQuality {\n  width: .8em !important;\n  height: .8em !important;\n  display: inline-block !important;\n  border-radius: 50% !important;\n}\n\n.stashChecker.btn {\n  display: inline-block !important;\n  font-weight: 400 !important;\n  color: #212529 !important;\n  text-align: center !important;\n  vertical-align: middle !important;\n  user-select: none !important;\n  background-color: rgba(0,0,0,0) !important;\n  border: 1px solid rgba(0,0,0,0) !important;\n  padding: .375rem .75rem !important;\n  font-size: 1rem !important;\n  line-height: 1.5 !important;\n  border-radius: .25rem !important;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out !important;\n}\n\n.stashChecker.btn:not(:disabled):not(.disabled) {\n  cursor: pointer !important;\n}\n\n.stashChecker.btn:hover {\n  color: #212529 !important;\n  text-decoration: none !important;\n}\n\n.stashChecker.btn-primary {\n  color: #fff !important;\n  background-color: #137cbd !important;\n  border-color: #137cbd !important;\n}\n\n.stashChecker.btn-primary:hover {\n  color: #fff !important;\n  background-color: #10659a !important;\n  border-color: #0e5e8f !important;\n}\n\n.stashChecker.btn-danger {\n  color: #fff !important;\n  background-color: #db3737 !important;\n  border-color: #db3737 !important;\n}\n\n.stashChecker.btn-danger:hover {\n  color: #fff !important;\n  background-color: #c82424 !important;\n  border-color: #bd2222 !important;\n}\n\n.stashChecker.tooltip a:link {\n  color: var(--stash-checker-color-text) !important;\n}\n\n.stashChecker.tooltip a:visited {\n  color: var(--stash-checker-color-link-visited) !important;\n}\n\n.stashChecker.tooltip a:hover {\n  color: var(--stash-checker-color-link-hover) !important;\n}\n\n.stashChecker.tooltip a:active {\n  color: var(--stash-checker-color-link-active) !important;\n}\n\n.stashChecker.tooltip hr {\n  margin-top: .5rem !important;\n  margin-bottom: .5rem !important;\n  border-color: var(--stash-checker-color-border-light) !important;\n  background-color: var(--stash-checker-color-border-light) !important;\n}\n\n.stashChecker.tooltip hr+br {\n  display: none !important;\n}\n\n.stashChecker.file+br {\n  display: none !important;\n}\n\n.stashCheckerSymbol {\n  font-size: inherit !important;\n}`, "" ]);
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
          async function checkElement(target, element, {displaySelector = e => e, prepareUrl = url => url, urlSelector = e => e.closest("a")?.href, codeSelector, stashIdSelector, stashIdEndpoint = `https://${window.location.host}/graphql`, nameSelector = _utils__WEBPACK_IMPORTED_MODULE_2__.ou, titleSelector = _utils__WEBPACK_IMPORTED_MODULE_2__.ou, color = () => "green"}) {
            let displayElement = displaySelector(element);
            if (!displayElement) return;
            if (urlSelector && prepareUrl) {
              let selectedUrl = urlSelector(element);
              let url = selectedUrl ? prepareUrl(selectedUrl) : selectedUrl;
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
              let kanji = name ? /[\u4e00-\u9faf\u3400-\u4dbf]/.test(name) : false;
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
          var _tooltip_tooltipElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(563);
          var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
          var _settings_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(513);
          var _settings_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
          var _stashChecker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(782);
          var _settings_statistics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(821);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _settings_endpoints__WEBPACK_IMPORTED_MODULE_1__, _settings_settings__WEBPACK_IMPORTED_MODULE_2__, _settings_menu__WEBPACK_IMPORTED_MODULE_3__, _settings_general__WEBPACK_IMPORTED_MODULE_4__, _stashChecker__WEBPACK_IMPORTED_MODULE_5__, _settings_statistics__WEBPACK_IMPORTED_MODULE_6__ ]);
          [_settings_endpoints__WEBPACK_IMPORTED_MODULE_1__, _settings_settings__WEBPACK_IMPORTED_MODULE_2__, _settings_menu__WEBPACK_IMPORTED_MODULE_3__, _settings_general__WEBPACK_IMPORTED_MODULE_4__, _stashChecker__WEBPACK_IMPORTED_MODULE_5__, _settings_statistics__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          (async function() {
            await (0, _tooltip_tooltipElement__WEBPACK_IMPORTED_MODULE_7__.AA)();
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
            switch (window.location.host) {
             case "www.iwara.tv":
              {
                let color = d => d.files.some((f => f.path.endsWith("_Source.mp4"))) ? "green" : "blue";
                let codeRegex = /(?<=video\/)([a-zA-Z0-9]+)(?=\/|$)/;
                let prepareUrl = url => {
                  let match = url.match(codeRegex);
                  let end = match?.index && match?.[0]?.length ? match?.index + match?.[0]?.length : match?.index;
                  return url.substring(0, end);
                };
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, ".page-video__details > .text--h1", {
                  observe: true,
                  urlSelector: currentSite,
                  color,
                  prepareUrl,
                  codeSelector: () => window.location.pathname.match(codeRegex)?.[0]
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "a.videoTeaser__title", {
                  observe: true,
                  color,
                  prepareUrl,
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
                urlSelector: e => e.querySelector("a")?.href,
                prepareUrl: url => url.split("&")[0],
                titleSelector: e => e.querySelector("a")?.title
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "#avidolDetails", {
                urlSelector: currentSite,
                prepareUrl: url => url.split(/[?&]/)[0],
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
                urlSelector: currentSite,
                prepareUrl: url => url.replace("videoreviews.php", "").replace(/&.*$/, ""),
                codeSelector: _ => document.querySelector("div[id='video_id'] td.text")?.textContent?.trim(),
                titleSelector: _ => document.querySelector("div[id='video_id'] td.text")?.textContent?.trim()
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, ".video a[href^='./?v=jav']", {
                prepareUrl: url => url.replace(/&.*$/, ""),
                codeSelector: e => e.querySelector("div.id")?.textContent?.trim()
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, ".comment strong > a[href^='videoreviews.php?v=jav']", {
                prepareUrl: url => url.replace("videoreviews.php", "").replace(/&.*$/, ""),
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

             case "www.minnano-av.com":
              if (/actress\d{1,6}/.test(window.location.pathname)) (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "h1", {
                prepareUrl: url => url.split("?")[0],
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a[href*='actress']:not([href*='list']):not([href*='.php']):not([href*='http'])", {
                prepareUrl: url => url.split("?")[0]
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
                prepareUrl: url => url.replace(/\/feed$/, "").replace(/\/[a-z]{2}\//, "/")
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
                  stashIdSelector: () => findId(window.location.href)
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, `a[href^='/scenes/']${exclude}, a[href^='https://${window.location.host}/scenes/']${exclude}`, {
                  ...stashBoxDefault,
                  stashIdSelector: e => findId(e.closest("a")?.href)
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "div.PerformerInfo div.card-header h3 > span", {
                  ...stashBoxDefault,
                  stashIdSelector: () => findId(window.location.href)
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, `a[href^='/performers/']${exclude}, a[href^='https://${window.location.host}/performers/']${exclude}`, {
                  ...stashBoxDefault,
                  stashIdSelector: e => findId(e.closest("a")?.href)
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Studio, ".studio-title > h3 > span", {
                  ...stashBoxDefault,
                  stashIdSelector: () => findId(window.location.href)
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Studio, `a[href^='/studios/']${exclude}, a[href^='https://${window.location.host}/studios/']${exclude}`, {
                  ...stashBoxDefault,
                  stashIdSelector: e => findId(e.closest("a")?.href)
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
          var _tooltipElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(563);
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
            symbol.addEventListener("mouseover", _tooltipElement__WEBPACK_IMPORTED_MODULE_4__.sQ);
            symbol.addEventListener("mouseout", _tooltipElement__WEBPACK_IMPORTED_MODULE_4__._I);
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
              if (_settings_general__WEBPACK_IMPORTED_MODULE_2__.$k.get(_settings_general__WEBPACK_IMPORTED_MODULE_2__.vw.showCrossMark)) symbol.textContent = `${_settings_general__WEBPACK_IMPORTED_MODULE_2__.i3.get(_settings_general__WEBPACK_IMPORTED_MODULE_2__.vw.crossMark)} `;
              symbol.style.color = "red";
              tooltip = `${targetReadable} not in Stash<br>`;
            } else if (new Set(data.map((e => e.endpoint))).size < data.length) {
              symbol.setAttribute("data-symbol", _dataTypes__WEBPACK_IMPORTED_MODULE_0__.Wb.Warning);
              symbol.textContent = `${_settings_general__WEBPACK_IMPORTED_MODULE_2__.i3.get(_settings_general__WEBPACK_IMPORTED_MODULE_2__.vw.warningMark)} `;
              symbol.style.color = "orange";
              tooltip = `${targetReadable} has duplicate matches<br>`;
            } else {
              symbol.setAttribute("data-symbol", _dataTypes__WEBPACK_IMPORTED_MODULE_0__.Wb.Check);
              symbol.textContent = `${_settings_general__WEBPACK_IMPORTED_MODULE_2__.i3.get(_settings_general__WEBPACK_IMPORTED_MODULE_2__.vw.checkMark)} `;
              symbol.style.color = color(data[0]);
            }
            tooltip += `Endpoints: ${endpoints.join(", ")}`;
            tooltip += "<br>";
            tooltip += `Queries: ${queryTypes.map((type => _utils__WEBPACK_IMPORTED_MODULE_1__.xG.get(type))).join(", ")}`;
            tooltip += data.map((entry => formatEntryData(entry, target, queryTypes.length))).join("");
            symbol.setAttribute("data-info", tooltip);
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }));
    },
    563: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        AA: () => initTooltip,
        _I: () => mouseoutListener,
        sQ: () => mouseoverListener
      });
      async function initTooltip() {
        let tooltipWindow = document.createElement("div");
        tooltipWindow.style.display = "none";
        tooltipWindow.classList.add("stashChecker", "tooltip");
        tooltipWindow.id = "stashChecker-tooltipWindow";
        tooltipWindow.addEventListener("mouseover", (function() {
          let handle = parseInt(this.getAttribute("handle"));
          window.clearTimeout(handle);
        }));
        tooltipWindow.addEventListener("mouseout", (function() {
          let handle = window.setTimeout((function() {
            tooltipWindow.style.display = "none";
          }), 500);
          this.setAttribute("handle", handle.toString());
        }));
        document.body.append(tooltipWindow);
      }
      function mouseoverListener() {
        let tooltipWindow = document.getElementById("stashChecker-tooltipWindow");
        let handle = parseInt(tooltipWindow.getAttribute("handle"));
        window.clearTimeout(handle);
        let margin = 10;
        let symbolPos = this.getBoundingClientRect();
        tooltipWindow.innerHTML = this.getAttribute("data-info");
        tooltipWindow.style.display = "";
        let north = tooltipWindow.clientHeight + margin < symbolPos.top;
        if (north) tooltipWindow.style.top = `${Math.max(margin, symbolPos.top - tooltipWindow.clientHeight).toFixed(0)}px`; else tooltipWindow.style.top = `${Math.min(window.innerHeight - tooltipWindow.clientHeight - margin, symbolPos.top + symbolPos.height + margin).toFixed(0)}px`;
        tooltipWindow.style.left = `${Math.max(margin, Math.min(window.innerWidth - tooltipWindow.clientWidth - margin, symbolPos.left + symbolPos.width / 2 - tooltipWindow.clientWidth / 2)).toFixed(0)}px`;
      }
      function mouseoutListener() {
        let tooltipWindow = document.getElementById("stashChecker-tooltipWindow");
        let handle = window.setTimeout((function() {
          tooltipWindow.style.display = "none";
        }), 500);
        tooltipWindow.setAttribute("handle", handle.toString());
      }
    },
    185: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        $R: () => bytesToReadable,
        Yz: () => firstTextChild,
        bM: () => entryLink,
        iy: () => friendlyHttpStatus,
        ou: () => firstText,
        xG: () => typeToString,
        xr: () => secondsToReadable
      });
      var _dataTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
      function firstTextChild(node) {
        if (!node) return node;
        if (node.nodeType === Node.TEXT_NODE && node.textContent?.match(/^[\s<>]*$/) === null) return node; else return Array.from(node.childNodes).filter((n => ![ "svg" ].includes(n.nodeName.toLowerCase()))).filter((n => n.nodeType === Node.ELEMENT_NODE ? n.getAttribute("data-type") !== "stash-symbol" : true)).map(firstTextChild).find((n => n));
      }
      function firstText(node) {
        return firstTextChild(node)?.textContent?.trim();
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