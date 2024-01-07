// ==UserScript==
// @name Stash Checker
// @description Add checkmarks to scenes/performers on porn websites that are present in your own Stash instance.
// @version 0.7.0
// @author timo95
// @match *://adultanime.dbsearch.net/*
// @match *://coomer.party/*
// @match *://erommdtube.com/*
// @match *://fansdb.cc/*
// @match *://fansdb.xyz/*
// @match *://gayeroticvideoindex.com/*
// @match *://kemono.party/*
// @match *://metadataapi.net/*
// @match *://onlyfans.com/*
// @match *://oreno3d.com/*
// @match *://pmvstash.org/*
// @match *://r18.dev/*
// @match *://shemalestardb.com/*
// @match *://stashdb.org/*
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
// @match *://xslist.org/*
// @connect localhost
// @connect *
// @grant GM.xmlHttpRequest
// @grant GM.getValue
// @grant GM.setValue
// @grant GM.deleteValue
// @grant GM.listValues
// @grant GM.registerMenuCommand
// @icon https://docs.stashapp.cc/favicon.ico
// @license WTFPL
// @run-at document-end
// @source https://github.com/timo95/stash-checker
// ==/UserScript==

(() => {
  "use strict";
  var __webpack_modules__ = {
    550: (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        Z: () => __WEBPACK_DEFAULT_EXPORT__
      });
      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
      ___CSS_LOADER_EXPORT___.push([ module.id, `:root {\n  --stash-checker-color-text: #323232 !important;\n  --stash-checker-color-link-visited: #323232 !important;\n  --stash-checker-color-link-hover: #039 !important;\n  --stash-checker-color-link-active: #039 !important;\n  --stash-checker-color-border: #323232 !important;\n  --stash-checker-color-bg: #ffffff !important;\n  --stash-checker-color-card: #f2f2f2 !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --stash-checker-color-text: #e0e0e0 !important;\n    --stash-checker-color-link-visited: #c7c7c7 !important;\n    --stash-checker-color-link-hover: #f2f2f2 !important;\n    --stash-checker-color-link-active: #039 !important;\n    --stash-checker-color-border: #5a5a5a !important;\n    --stash-checker-color-bg: #202020 !important;\n    --stash-checker-color-card: #464646 !important;\n  }\n}\n\n.stashChecker {\n  color: var(--stash-checker-color-text) !important;\n  text-align: left !important;\n  font-size: medium !important;\n  line-height: normal !important;\n  opacity: 1 !important;\n}\n\n.stashChecker.tooltip {\n  z-index: 99999 !important;\n  position: fixed !important;\n  background-color: var(--stash-checker-color-bg) !important;\n  border: .1em solid var(--stash-checker-color-border) !important;\n  border-radius: .5em !important;\n  padding: .5em !important;\n  margin-top: -0.5em !important;\n}\n\n.stashChecker.file {\n  margin: .5em !important;\n  padding: .5em !important;\n  background-color: var(--stash-checker-color-card) !important;\n}\n\n.stashChecker.modal {\n  position: fixed !important;\n  z-index: 999999 !important;\n  left: 0 !important;\n  top: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n  overflow: auto !important;\n  background-color: #000 !important;\n  background-color: rgba(0,0,0,.4) !important;\n}\n\n.stashChecker.settings {\n  margin: 20vh auto !important;\n  background-color: var(--stash-checker-color-bg) !important;\n  border: .1em solid var(--stash-checker-color-border) !important;\n  border-radius: .5em !important;\n  padding: .5em !important;\n  width: auto !important;\n}\n\n.stashChecker.endpoints {\n  display: flex !important;\n  flex-direction: column !important;\n  justify-content: space-between !important;\n  justify-items: flex-start !important;\n  align-items: stretch !important;\n}\n\n.stashChecker.endpoint {\n  display: flex !important;\n  flex-direction: row !important;\n  justify-content: space-between !important;\n  justify-items: flex-start !important;\n  align-items: center !important;\n  width: 30em !important;\n  padding: 1em !important;\n  margin: 1em !important;\n  background-color: var(--stash-checker-color-card) !important;\n}\n\n.stashChecker.endpoint button {\n  background-color: red !important;\n  height: 2em !important;\n  width: 4em !important;\n}\n\n.stashChecker.tooltip a:link {\n  color: var(--stash-checker-color-text) !important;\n}\n\n.stashChecker.tooltip a:visited {\n  color: var(--stash-checker-color-link-visited) !important;\n}\n\n.stashChecker.tooltip a:hover {\n  color: var(--stash-checker-color-link-hover) !important;\n}\n\n.stashChecker.tooltip a:active {\n  color: var(--stash-checker-color-link-active) !important;\n}\n\n.stashChecker.tooltip hr {\n  margin-top: .5em !important;\n  margin-bottom: .5em !important;\n  border-color: var(--stash-checker-color-card) !important;\n}\n\n.stashChecker.tooltip hr+br {\n  display: none !important;\n}\n\n.stashChecker.file+br {\n  display: none !important;\n}\n\n.stashCheckerCheckmark {\n  font-size: inherit !important;\n}`, "" ]);
      const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
    },
    645: module => {
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
    81: module => {
      module.exports = function(i) {
        return i[1];
      };
    },
    379: module => {
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
    569: module => {
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
    216: module => {
      function insertStyleElement(options) {
        var element = document.createElement("style");
        options.setAttributes(element, options.attributes);
        options.insert(element, options.options);
        return element;
      }
      module.exports = insertStyleElement;
    },
    565: (module, __unused_webpack_exports, __webpack_require__) => {
      function setAttributesWithoutAttributes(styleElement) {
        var nonce = true ? __webpack_require__.nc : 0;
        if (nonce) styleElement.setAttribute("nonce", nonce);
      }
      module.exports = setAttributesWithoutAttributes;
    },
    795: module => {
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
    589: module => {
      function styleTagTransform(css, styleElement) {
        if (styleElement.styleSheet) styleElement.styleSheet.cssText = css; else {
          while (styleElement.firstChild) styleElement.removeChild(styleElement.firstChild);
          styleElement.appendChild(document.createTextNode(css));
        }
      }
      module.exports = styleTagTransform;
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
  var __webpack_exports__ = {};
  (() => {
    var injectStylesIntoStyleTag = __webpack_require__(379);
    var injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag);
    var styleDomAPI = __webpack_require__(795);
    var styleDomAPI_default = __webpack_require__.n(styleDomAPI);
    var insertBySelector = __webpack_require__(569);
    var insertBySelector_default = __webpack_require__.n(insertBySelector);
    var setAttributesWithoutAttributes = __webpack_require__(565);
    var setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes);
    var insertStyleElement = __webpack_require__(216);
    var insertStyleElement_default = __webpack_require__.n(insertStyleElement);
    var styleTagTransform = __webpack_require__(589);
    var styleTagTransform_default = __webpack_require__.n(styleTagTransform);
    var main = __webpack_require__(550);
    var options = {};
    options.styleTagTransform = styleTagTransform_default();
    options.setAttributes = setAttributesWithoutAttributes_default();
    options.insert = insertBySelector_default().bind(null, "head");
    options.domAPI = styleDomAPI_default();
    options.insertStyleElement = insertStyleElement_default();
    var update = injectStylesIntoStyleTag_default()(main.Z, options);
    const style_main = main.Z && main.Z.locals ? main.Z.locals : void 0;
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
    function firstTextChild(node) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.match(/^[\s<>]*$/) === null) return node; else return Array.from(node.childNodes).filter((n => ![ "svg" ].includes(n.nodeName.toLowerCase()))).filter((n => n.nodeType === Node.ELEMENT_NODE ? n.getAttribute("data-type") !== "stash-symbol" : true)).map(firstTextChild).find((n => n));
    }
    function getUrl(stashUrl, target, id) {
      let path;
      if (target == "gallery") path = "galleries"; else path = target + "s";
      return `${stashUrl}/${path}/${id}`;
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
    function getExistingSymbol(element) {
      if (element.getAttribute("data-type") === "stash-symbol") return element; else return Array.from(element.childNodes).filter((n => n.nodeType === Node.ELEMENT_NODE)).map((n => n)).map(getExistingSymbol).find((n => n));
    }
    function formatFileData(files) {
      let propertyStrings = [ [ "path", v => `Path: ${v}` ], [ "video_codec", v => `<br>Codec: ${v}` ], [ "width", v => ` (${v}` ], [ "height", v => `x${v})` ], [ "size", v => `&nbsp;&nbsp;&nbsp;&nbsp;Size: ${bytesToReadable(v)}` ], [ "bit_rate", v => `&nbsp;&nbsp;&nbsp;&nbsp;Bitrate: ${(v / 1e6).toFixed(2)}Mbit/s` ], [ "duration", v => `&nbsp;&nbsp;&nbsp;&nbsp;Duration: ${secondsToReadable(v)}` ] ];
      return files.map((file => "<div class='stashChecker file'>" + propertyStrings.filter((e => file[e[0]])).map((e => e[1](file[e[0]]))).join("") + "</div>")).join("");
    }
    function formatEntryData(target, data, stashUrl) {
      let propertyStrings = [ [ "id", v => `<br><a target="_blank" href="${getUrl(stashUrl, target, v)}">${getUrl(stashUrl, target, v)}</a>` ], [ "title", v => `<br>Title: ${v}` ], [ "name", v => `<br>Name: ${v}` ], [ "favorite", v => "&emsp;&#10084;&#65039;" ], [ "disambiguation", v => ` <span style="color: grey">(${v})</span>` ], [ "alias_list", v => `<br>Aliases: ${v.join(", ")}` ], [ "studio", v => `<br>Studio: ${v.name}` ], [ "code", v => `<br>Code: ${v}` ], [ "date", v => `<br>Date: ${v}` ], [ "queries", v => `<br>Matched: ${v.join(", ")}` ], [ "files", v => `${formatFileData(v)}` ] ];
      return data.map((entry => "<hr>" + propertyStrings.filter((e => entry[e[0]])).map((e => e[1](entry[e[0]]))).join(""))).join("");
    }
    function mergeData(target, source) {
      let mapTarget = new Map(target.map((e => [ e.id, e ])));
      let mapSource = new Map(source.map((e => [ e.id, e ])));
      mapSource.forEach(((value, key) => {
        if (mapTarget.has(key)) {
          let set = new Set(value["queries"]);
          mapTarget.get(key)["queries"].forEach((query => {
            set.add(query);
          }));
          value["queries"] = [ ...set ].sort();
        }
        mapTarget.set(key, value);
      }));
      return Array.from(mapTarget.values());
    }
    function prefixSymbol(element, target, data, stashUrl, queryType, color) {
      let queries = [ queryType ];
      data.forEach((entry => {
        entry["queries"] = queries;
      }));
      let symbol = getExistingSymbol(element);
      if (symbol) {
        queries = [ ...new Set(JSON.parse(symbol.getAttribute("data-queries"))).add(queryType) ].sort();
        data = mergeData(JSON.parse(symbol.getAttribute("data-data")), data);
        symbol.setAttribute("data-count", (parseInt(symbol.getAttribute("data-count")) + 1).toString());
      } else {
        symbol = document.createElement("span");
        symbol.classList.add("stashCheckerCheckmark");
        symbol.setAttribute("data-type", "stash-symbol");
        symbol.setAttribute("data-count", "1");
        symbol.addEventListener("mouseover", mouseoverListener);
        symbol.addEventListener("mouseout", mouseoutListener);
        let text = firstTextChild(element);
        if (text) text.parentNode.insertBefore(symbol, text); else return;
      }
      symbol.setAttribute("data-queries", JSON.stringify(queries));
      symbol.setAttribute("data-data", JSON.stringify(data));
      let count = data.length;
      let tooltip = "";
      let targetReadable = target.charAt(0).toUpperCase() + target.slice(1);
      if (count === 0) {
        symbol.textContent = "✗ ";
        symbol.style.color = "red";
        tooltip = `${targetReadable} not in Stash<br>`;
      } else if (count === 1) {
        symbol.textContent = "✓ ";
        symbol.style.color = color(data[0]);
      } else {
        symbol.textContent = "! ";
        symbol.style.color = "orange";
        tooltip = `${targetReadable} has duplicate matches<br>`;
      }
      tooltip += `Queries: ${queries.join(", ")}`;
      tooltip += formatEntryData(target, data, stashUrl);
      symbol.setAttribute("data-info", tooltip);
    }
    async function getValue(key, defaultValue) {
      const text = await GM.getValue(key, void 0);
      try {
        return text === void 0 ? Promise.resolve(defaultValue) : JSON.parse(text);
      } catch (e) {
        console.warn("Failed to parse stored value. Delete stored key-value pair.");
        await deleteValue(key);
        return defaultValue;
      }
    }
    async function setValue(key, value) {
      return GM.setValue(key, JSON.stringify(value));
    }
    async function deleteValue(key) {
      return GM.deleteValue(key);
    }
    const DEFAULT_STASH_URL = "http://localhost:9999";
    const BLOCKED_SITE_KEY = `blocked_${window.location.host}`.replace(/[.\-]/, "_");
    let settingsModal;
    let settings;
    async function initMenu() {
      GM.registerMenuCommand("Settings", openSettings, "s");
      GM.registerMenuCommand("Set Stash Url", setStashUrl, "u");
      GM.registerMenuCommand("Set API key", setApiKey, "k");
      if (await isSiteBlocked()) GM.registerMenuCommand(`Activate for ${window.location.host}`, unblockSite, "a"); else GM.registerMenuCommand(`Deactivate for ${window.location.host}`, blockSite, "d");
    }
    async function initSettings() {
      settingsModal = document.createElement("div");
      settingsModal.style.display = "none";
      settingsModal.classList.add("stashChecker", "modal");
      settingsModal.addEventListener("click", (function(event) {
        if (event.target === settingsModal) settingsModal.style.display = "none";
      }));
      settings = document.createElement("div");
      settings.classList.add("stashChecker", "settings");
      settings.append(initEndpoints());
      settingsModal.append(settings);
      document.body.append(settingsModal);
    }
    function initEndpoints() {
      let endpoints = document.createElement("div");
      endpoints.classList.add("stashChecker", "endpoints");
      let defaultData = [ {
        name: "Localhost",
        url: "localhost.8080",
        key: ""
      } ];
      let data = defaultData;
      let endpointList = data.map(((datum, index) => {
        let endpoint = document.createElement("div");
        endpoint.classList.add("stashChecker", "endpoint");
        endpoint.innerHTML = `<p>${datum.name}</p><button id="stashCheckerEndpoint-${index}">Edit</button>`;
        return endpoint;
      }));
      endpoints.append(...endpointList);
      return endpoints;
    }
    async function isSiteBlocked() {
      return await getValue(BLOCKED_SITE_KEY, false);
    }
    async function blockSite() {
      await setValue(BLOCKED_SITE_KEY, true);
      window.location.reload();
    }
    async function unblockSite() {
      await deleteValue(BLOCKED_SITE_KEY);
      window.location.reload();
    }
    async function setStashUrl() {
      let stashUrl = await getValue("stashUrl", void 0);
      stashUrl = prompt("Stash URL:", stashUrl ?? DEFAULT_STASH_URL)?.trim()?.replace("/$", "");
      if (stashUrl !== void 0) await setValue("stashUrl", stashUrl);
    }
    async function setApiKey() {
      let apiKey = await getValue("apiKey", void 0);
      apiKey = prompt("API Key:", apiKey ?? "")?.trim()?.replace("/$", "");
      if (apiKey !== void 0) await setValue("apiKey", apiKey);
    }
    async function getConfig() {
      let stashUrl = await getValue("stashUrl", void 0);
      let apiKey = await getValue("apiKey", void 0);
      if (stashUrl === void 0) {
        stashUrl = prompt("Stash URL:", DEFAULT_STASH_URL)?.trim()?.replace("/$", "");
        if (stashUrl !== void 0) await setValue("stashUrl", stashUrl);
      }
      if (apiKey === void 0) {
        apiKey = prompt("API Key:")?.trim()?.replace("/$", "");
        if (apiKey !== void 0) await setValue("apiKey", apiKey);
      }
      return [ stashUrl ?? "", apiKey ?? "" ];
    }
    async function openSettings() {
      settingsModal.style.display = "initial";
    }
    let configPromise = getConfig();
    async function request(queryString, onload, target, type, {stashIdEndpoint}) {
      let criterion;
      let query;
      let access = d => d;
      switch (type) {
       case "stash_id":
        criterion = `{stash_id_endpoint:{endpoint:"${stashIdEndpoint}",stash_id:"${queryString}",modifier:EQUALS}}`;
        break;

       default:
        criterion = `{${type}:{value:"${queryString}",modifier:EQUALS}}`;
        break;
      }
      switch (target) {
       case "scene":
        query = `{findScenes(scene_filter:${criterion}){scenes{id,title,code,studio{name},date,files{path,duration,video_codec,width,height,size,bit_rate}}}}`;
        access = d => d.findScenes.scenes;
        break;

       case "performer":
        query = `{findPerformers(performer_filter:${criterion}){performers{id,name,disambiguation,alias_list,favorite}}}`;
        access = d => d.findPerformers.performers;
        break;

       case "gallery":
        query = `{findGalleries(gallery_filter:${criterion}){galleries{id,title,date,files{path}}}}`;
        access = d => d.findGalleries.galleries;
        break;

       case "movie":
        query = `{findMovies(movie_filter:${criterion}){movies{id,name,date}}}`;
        access = d => d.findMovies.movies;
        break;

       case "studio":
        query = `{findStudios(studio_filter:${criterion}){studios{id,name}}}`;
        access = d => d.findStudios.studios;
        break;

       case "tag":
        query = `{findTags(tag_filter:${criterion}){tags{id,name}}}`;
        access = d => d.findTags.tags;
        break;

       default:
        return;
      }
      let [stashUrl, apiKey] = await configPromise;
      GM.xmlHttpRequest({
        method: "GET",
        url: `${stashUrl}/graphql?query=${encodeURIComponent(query)}`,
        headers: {
          "Content-Type": "application/json",
          ApiKey: apiKey
        },
        onload: function(response) {
          try {
            let r = JSON.parse(response.responseText);
            if ("errors" in r) r.errors.forEach((e => {
              console.log(`Stash returned "${e.extensions.code}" error: ${e.message}`);
            })); else onload(target, access(r.data), stashUrl);
          } catch (e) {
            console.log("Exception: " + e);
            console.log("Failed to parse response: " + response.responseText);
          }
        }
      });
    }
    async function checkElement(target, element, {currentSite = false, prepareUrl = url => url, urlSelector = currentSite ? () => decodeURI(window.location.href) : e => decodeURI(e.closest("a").href), codeSelector, stashIdSelector, stashIdEndpoint = `https://${window.location.host}/graphql`, nameSelector = e => firstTextChild(e)?.textContent?.trim(), titleSelector = e => firstTextChild(e)?.textContent?.trim(), color = () => "green"}) {
      if (urlSelector && prepareUrl) {
        let url = prepareUrl(urlSelector(element));
        if (url) {
          void 0;
          await request(url, ((...args) => prefixSymbol(element, ...args, "URL", color)), target, "url", {
            stashIdEndpoint
          });
        } else console.log(`No URL for ${target} found.`);
      }
      if (codeSelector) {
        let code = codeSelector(element);
        if (code) {
          void 0;
          await request(code, ((...args) => prefixSymbol(element, ...args, "Code", color)), target, "code", {
            stashIdEndpoint
          });
        } else console.log(`No Code for ${target} found.`);
      }
      if (stashIdSelector) {
        let id = stashIdSelector(element);
        if (id) {
          void 0;
          await request(id, ((...args) => prefixSymbol(element, ...args, "StashId", color)), target, "stash_id", {
            stashIdEndpoint
          });
        } else console.log(`No StashId for ${target} found.`);
      }
      if ([ "performer", "movie" ].includes(target) && nameSelector) {
        let name = nameSelector(element);
        let nameCount = name?.split(/\s+/)?.length;
        if (name && nameCount > 1) {
          void 0;
          await request(name, ((...args) => prefixSymbol(element, ...args, "Name", color)), target, "name", {
            stashIdEndpoint
          });
        } else if (name && nameCount === 1) console.log(`Ignore single name: ${name}`); else console.log(`No Name for ${target} found.`);
      }
      if ([ "scene", "gallery" ].includes(target) && titleSelector) {
        let title = titleSelector(element);
        if (title) {
          void 0;
          await request(title, ((...args) => prefixSymbol(element, ...args, "Title", color)), target, "title", {
            stashIdEndpoint
          });
        } else console.log(`No Title for ${target} found.`);
      }
    }
    function onAddition(selector, callback) {
      let exclude = ".stashChecker, .stashCheckerCheckmark";
      let observer = new MutationObserver((mutations => {
        let addedElements = mutations.flatMap((m => Array.from(m.addedNodes))).filter((n => n.nodeType === Node.ELEMENT_NODE)).map((n => n));
        addedElements.filter((e => e.matches(selector))).concat(addedElements.flatMap((e => Array.from(e.querySelectorAll(selector))))).filter((e => !e.matches(exclude) && !e.parentElement.matches(exclude))).forEach(callback);
      }));
      let body = document.querySelector("body");
      observer.observe(body, {
        childList: true,
        subtree: true
      });
    }
    function check(target, elementSelector, {observe = false, ...checkConfig} = {}) {
      if (observe) onAddition(elementSelector, (element => checkElement(target, element, checkConfig)));
      document.querySelectorAll(elementSelector).forEach((e => checkElement(target, e, checkConfig)));
    }
    (async function() {
      await initTooltip();
      await initSettings();
      await initMenu();
      if (await isSiteBlocked()) {
        console.log("Userscript is deactivated for this site. Activate in userscript menu.");
        return;
      }
      console.log("Running Stash Checker");
      switch (window.location.host) {
       case "www.iwara.tv":
        {
          let color = d => d.files.some((f => f.path.endsWith("_Source.mp4"))) ? "green" : "blue";
          let codeRegex = /(?<=video\/)([a-zA-Z0-9]+)(?=\/|$)/;
          let prepareUrl = url => {
            let match = url.match(codeRegex);
            return url.substring(0, match.index + match.at(0).length);
          };
          check("scene", ".page-video__details > .text--h1", {
            observe: true,
            currentSite: true,
            color,
            prepareUrl,
            codeSelector: () => window.location.pathname.match(codeRegex).at(0)
          });
          check("scene", "a.videoTeaser__title", {
            observe: true,
            color,
            prepareUrl,
            codeSelector: e => e.getAttribute("href").match(codeRegex).at(0)
          });
          break;
        }

       case "oreno3d.com":
        {
          let color = d => d.files.some((f => f.path.endsWith("_Source.mp4"))) ? "green" : "blue";
          check("scene", "h1.video-h1", {
            color,
            currentSite: true,
            titleSelector: null
          });
          check("scene", "a h2.box-h2", {
            color,
            titleSelector: null
          });
          break;
        }

       case "erommdtube.com":
        {
          let color = d => d.files.some((f => f.path.endsWith("_Source.mp4"))) ? "green" : "blue";
          check("scene", "h1.show__h1", {
            color,
            currentSite: true,
            titleSelector: null
          });
          check("scene", "h2.main__list-title", {
            color,
            titleSelector: null
          });
          break;
        }

       case "kemono.party":
        check("scene", "h1.post__title", {
          currentSite: true,
          titleSelector: null
        });
        check("scene", ".post-card > a[href*='/post/']", {
          titleSelector: null
        });
        break;

       case "coomer.party":
        check("scene", "h1.post__title", {
          currentSite: true,
          titleSelector: null
        });
        check("scene", ".post-card h2 > a[href*='/post/']", {
          titleSelector: null
        });
        break;

       case "adultanime.dbsearch.net":
        if (document.querySelector("article > section[id='info-table']") !== null) check("scene", "div[id='main-inner'] > article > h2", {
          currentSite: true,
          codeSelector: _ => document.evaluate("//dt[text()='規格品番']/following-sibling::dd[1]/p/text()", document, null, XPathResult.STRING_TYPE, null)?.stringValue?.trim()
        });
        check("scene", "div.item-info > h4 > a, div.item-info > h5 > a");
        break;

       case "xslist.org":
        check("performer", "span[itemprop='name']", {
          currentSite: true
        });
        check("performer", "a[href*='/model/']");
        check("scene", "table#movices td > strong", {
          urlSelector: null,
          codeSelector: e => e.textContent.trim(),
          titleSelector: null
        });
        break;

       case "www.animecharactersdatabase.com":
        check("performer", "a[href*='characters.php']:not([href*='_']):not([href*='series'])");
        break;

       case "www.iafd.com":
        {
          let prepareUrl = url => url.replaceAll("'", "%27").replace(/^http:/, "https:");
          if (window.location.pathname.startsWith("/person.rme/perfid=")) check("performer", "h1", {
            prepareUrl,
            currentSite: true
          }); else if (window.location.pathname.startsWith("/title.rme/title=")) check("scene", "h1", {
            prepareUrl,
            currentSite: true,
            titleSelector: null
          });
          check("performer", "a[href*='/person.rme/perfid=']", {
            prepareUrl
          });
          check("scene", "a[href*='/title.rme/title=']", {
            prepareUrl,
            titleSelector: null
          });
          break;
        }

       case "metadataapi.net":
        {
          let stashIdSelector = _ => document.evaluate("//div[text()='TPDB UUID']/following-sibling::div/text()", document, null, XPathResult.STRING_TYPE, null)?.stringValue?.trim();
          let stashIdEndpoint = "https://api.metadataapi.net/graphql";
          if (window.location.pathname.startsWith("/performers/")) {
            check("performer", "div.pl-4 > h2", {
              observe: true,
              currentSite: true,
              stashIdSelector
            });
            check("performer", "div.pl-4 > h2", {
              observe: true,
              currentSite: true,
              urlSelector: null,
              nameSelector: null,
              stashIdSelector,
              stashIdEndpoint
            });
          } else if (window.location.pathname.startsWith("/scenes/")) {
            check("scene", "div.flex.justify-between > h2", {
              observe: true,
              currentSite: true,
              stashIdSelector
            });
            check("scene", "div.flex.justify-between > h2", {
              observe: true,
              currentSite: true,
              titleSelector: null,
              stashIdSelector,
              stashIdEndpoint
            });
          } else if (window.location.pathname.startsWith("/movies/")) {
            check("movie", "div.flex.justify-between > h2", {
              observe: true,
              currentSite: true,
              stashIdSelector
            });
            check("movie", "div.flex.justify-between > h2", {
              observe: true,
              currentSite: true,
              nameSelector: null,
              stashIdSelector,
              stashIdEndpoint
            });
          }
          check("performer", "a[href^='https://metadataapi.net/performers/']", {
            observe: true
          });
          check("scene", "a[href^='https://metadataapi.net/scenes/'], a[href^='https://metadataapi.net/jav/']", {
            observe: true
          });
          check("movie", "a[href^='https://metadataapi.net/movies/']", {
            observe: true
          });
          break;
        }

       case "www.javlibrary.com":
        check("scene", "div[id='video_title']", {
          currentSite: true,
          prepareUrl: url => url.replace("videoreviews.php", "").replace(/&.*$/, ""),
          codeSelector: _ => document.querySelector("div[id='video_id'] td.text").textContent.trim(),
          titleSelector: _ => document.querySelector("div[id='video_id'] td.text").textContent.trim()
        });
        check("scene", ".video a[href^='./?v=jav']", {
          prepareUrl: url => url.replace(/&.*$/, ""),
          codeSelector: e => e.querySelector("div.id")?.textContent?.trim()
        });
        check("scene", ".comment strong > a[href^='videoreviews.php?v=jav']", {
          prepareUrl: url => url.replace("videoreviews.php", "").replace(/&.*$/, ""),
          codeSelector: e => firstTextChild(e)?.textContent?.trim()?.split(" ")[0],
          titleSelector: e => firstTextChild(e)?.textContent?.trim()?.split(" ")[0]
        });
        break;

       case "r18.dev":
        check("scene", "#video-info > #title", {
          observe: true,
          currentSite: true,
          codeSelector: _ => firstTextChild(document.querySelector("#dvd-id"))?.textContent?.trim()
        });
        check("scene", ".video-label > a[href*='/movies/detail/']", {
          observe: true,
          codeSelector: e => firstTextChild(e)?.textContent?.trim()
        });
        break;

       case "www.minnano-av.com":
        if (/actress\d{1,6}/.test(window.location.pathname)) check("performer", "h1", {
          prepareUrl: url => url.split("?")[0],
          currentSite: true
        });
        check("performer", "a[href*='actress']:not([href*='list']):not([href*='.php']):not([href*='http'])", {
          prepareUrl: url => url.split("?")[0]
        });
        break;

       case "www.indexxx.com":
        check("performer", "h1[id='model-name']", {
          currentSite: true
        });
        check("performer", "a.modelLink[href*='https://www.indexxx.com/m/'] > span");
        break;

       case "www.thenude.com":
        check("performer", "span.model-name", {
          currentSite: true
        });
        check("performer", "a.model-name, a.model-title, a[data-img*='/models/']", {
          observe: true
        });
        break;

       case "www.data18.com":
        check("scene", "a[href^='https://www.data18.com/scenes/']:not([href*='#'])", {
          observe: true,
          titleSelector: null
        });
        check("performer", "a[href^='https://www.data18.com/name/']:not([href*='/pairings']):not([href*='/studio']):not([href*='/virtual-reality']):not([href*='/scenes']):not([href*='/movies']):not([href*='/tags']):not([title$=' Home'])", {
          observe: true
        });
        break;

       case "www.babepedia.com":
        check("performer", "h1#babename", {
          currentSite: true
        });
        check("performer", "a[href*='/babe/']", {
          observe: true
        });
        break;

       case "www.freeones.com":
        check("performer", "a[href$='/feed'] [data-test='subject-name'], a[href$='/feed'] .profile-image + p", {
          prepareUrl: url => url.replace(/\/feed$/, "").replace(/\/[a-z]{2}\//, "/")
        });
        break;

       case "shemalestardb.com":
        check("performer", "h2[id='star-name']", {
          currentSite: true
        });
        check("performer", "figcaption > a[href*='/stars/']");
        break;

       case "onlyfans.com":
        check("performer", "div.b-username > div.g-user-name", {
          observe: true,
          currentSite: true
        });
        check("performer", "a.b-username > div.g-user-name", {
          observe: true
        });
        break;

       case "www.pornteengirl.com":
        check("performer", "a[href*='/model/']", {
          nameSelector: e => firstTextChild(e)?.textContent?.trim()?.replace(/\([^()]*\)$/, "")?.trimEnd()
        });
        break;

       case "gayeroticvideoindex.com":
        if (window.location.pathname.startsWith("/performer/")) check("performer", "[id='data'] h1", {
          currentSite: true
        }); else if (window.location.pathname.startsWith("/episode/")) check("scene", "[id='data'] h1", {
          currentSite: true
        }); else if (window.location.pathname.startsWith("/video/")) check("movie", "[id='data'] h1", {
          currentSite: true
        });
        check("performer", "a[href*='performer/']", {
          observe: true
        });
        check("scene", "a[href*='episode/']", {
          observe: true
        });
        check("movie", "a[href*='video/']", {
          observe: true
        });
        break;

       case "fansdb.cc":
       case "fansdb.xyz":
       case "pmvstash.org":
       case "stashdb.org":
        let exclude = ":not(a[href$='/edit']):not(a[href$='/merge']):not(a[href$='/delete'])";
        if (window.location.pathname.startsWith("/scenes/")) check("scene", "div.scene-info.card h3 > span", {
          observe: true,
          currentSite: true,
          urlSelector: null,
          stashIdSelector: () => window.location.href.replace(/^.*\/scenes\//, "").split(/[?#]/)[0],
          titleSelector: null
        });
        check("scene", `a[href^='/scenes/']${exclude}, a[href^='https://${window.location.host}/scenes/']${exclude}`, {
          observe: true,
          urlSelector: null,
          stashIdSelector: e => e.getAttribute("href")?.replace(/^.*\/scenes\//, "")?.split(/[?#]/)[0],
          titleSelector: null
        });
        if (window.location.pathname.startsWith("/performers/")) check("performer", "div.PerformerInfo div.card-header h3 > span", {
          observe: true,
          currentSite: true,
          urlSelector: null,
          stashIdSelector: () => window.location.href.replace(/^.*\/performers\//, "").split(/[?#]/)[0],
          nameSelector: null
        });
        check("performer", `a[href^='/performers/']${exclude}, a[href^='https://${window.location.host}/performers/']${exclude}`, {
          observe: true,
          urlSelector: null,
          stashIdSelector: e => e.closest("a")?.getAttribute("href")?.replace(/^.*\/performers\//, "")?.split(/[?#]/)[0],
          nameSelector: null
        });
        if (window.location.pathname.startsWith("/studios/")) check("studio", ".studio-title > h3 > span", {
          observe: true,
          currentSite: true,
          urlSelector: null,
          stashIdSelector: () => window.location.href.replace(/^.*\/studios\//, "").split(/[?#]/)[0],
          nameSelector: null
        });
        check("studio", `a[href^='/studios/']${exclude}, a[href^='https://${window.location.host}/studios/']${exclude}`, {
          observe: true,
          urlSelector: null,
          stashIdSelector: e => e.closest("a")?.getAttribute("href")?.replace(/^.*\/studios\//, "")?.split(/[?#]/)[0],
          nameSelector: null
        });
        if (window.location.pathname.startsWith("/tags/")) check("tag", ".MainContent > .NarrowPage h3 > span", {
          observe: true,
          currentSite: true,
          urlSelector: null,
          stashIdSelector: () => window.location.href.replace(/^.*\/tags\//, "").split(/[?#]/)[0],
          nameSelector: null
        }); else if (window.location.pathname === "/tags") check("tag", `a[href^='/tags/']${exclude}, a[href^='https://${window.location.host}/tags/']${exclude}`, {
          observe: true,
          urlSelector: null,
          stashIdSelector: e => e.closest("a")?.getAttribute("href")?.replace(/^.*\/tags\//, "")?.split(/[?#]/)[0],
          nameSelector: null
        });
        break;

       default:
        console.log("No configuration for website found.");
        break;
      }
    })();
  })();
})();