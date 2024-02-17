// ==UserScript==
// @name Stash Checker
// @description Add checkmarks on porn websites to scenes/performers that are present in your own Stash instance.
// @version 0.10.0
// @author timo95
// @match *://adultanime.dbsearch.net/*
// @match *://coomer.su/*
// @match *://erommdtube.com/*
// @match *://fansdb.cc/*
// @match *://fansdb.xyz/*
// @match *://gayeroticvideoindex.com/*
// @match *://kemono.su/*
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
      ___CSS_LOADER_EXPORT___.push([ module.id, `:root {\n  --stash-checker-color-text: #323232 !important;\n  --stash-checker-color-text-light: #989898 !important;\n  --stash-checker-color-link-visited: #323232 !important;\n  --stash-checker-color-link-hover: #039 !important;\n  --stash-checker-color-link-active: #039 !important;\n  --stash-checker-color-border: #323232 !important;\n  --stash-checker-color-bg: #ffffff !important;\n  --stash-checker-color-card: #f2f2f2 !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --stash-checker-color-text: #e0e0e0 !important;\n    --stash-checker-color-text-light: #707070 !important;\n    --stash-checker-color-link-visited: #c7c7c7 !important;\n    --stash-checker-color-link-hover: #f2f2f2 !important;\n    --stash-checker-color-link-active: #039 !important;\n    --stash-checker-color-border: #5a5a5a !important;\n    --stash-checker-color-bg: #202020 !important;\n    --stash-checker-color-card: #464646 !important;\n  }\n}\n\n.stashChecker {\n  color: var(--stash-checker-color-text) !important;\n  text-align: left !important;\n  font-size: medium !important;\n  line-height: normal !important;\n  opacity: 1 !important;\n}\n\n.stashChecker.sub-heading {\n  font-size: .8rem !important;\n  margin: .5rem 0 0 !important;\n}\n\n.stashChecker.tooltip {\n  z-index: 99999 !important;\n  position: fixed !important;\n  background-color: var(--stash-checker-color-bg) !important;\n  border: .1rem solid var(--stash-checker-color-border) !important;\n  border-radius: .5rem !important;\n  padding: .5rem !important;\n  margin-top: -0.5rem !important;\n}\n\n.stashChecker.file {\n  margin: .5rem !important;\n  padding: .5rem !important;\n  background-color: var(--stash-checker-color-card) !important;\n}\n\n.stashChecker.modal {\n  position: fixed !important;\n  z-index: 999999 !important;\n  left: 0 !important;\n  top: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n  overflow: auto !important;\n  background-color: #000 !important;\n  background-color: rgba(0,0,0,.4) !important;\n}\n\n.stashChecker.settings {\n  margin: 20vh auto !important;\n  background-color: var(--stash-checker-color-bg) !important;\n  border: .1rem solid var(--stash-checker-color-border) !important;\n  border-radius: .5rem !important;\n  padding: .5rem !important;\n  width: 35rem !important;\n}\n\n.stashChecker.settings h3 {\n  font-size: 1.25rem !important;\n}\n\n.stashChecker.settings .version {\n  color: var(--stash-checker-color-text-light) !important;\n  font-size: 1.25rem !important;\n}\n\n.stashChecker.endpoints {\n  display: flex !important;\n  flex-direction: column !important;\n  justify-content: space-between !important;\n  justify-items: flex-start !important;\n  align-items: stretch !important;\n}\n\n.stashChecker.endpoint {\n  display: flex !important;\n  flex-direction: row !important;\n  justify-content: space-between !important;\n  justify-items: flex-start !important;\n  align-items: center !important;\n  padding: 1rem !important;\n  margin: .1rem !important;\n  background-color: var(--stash-checker-color-card) !important;\n}\n\n.stashChecker.endpoint>button {\n  flex-grow: 0 !important;\n  margin-left: .5rem !important;\n}\n\n.stashChecker.endpoint>div {\n  flex-grow: 1 !important;\n}\n\n.stashChecker.endpoint>div>* {\n  margin: 0 !important;\n}\n\n.stashChecker>.matchQuality {\n  width: .8em !important;\n  height: .8em !important;\n  display: inline-block !important;\n  border-radius: 50% !important;\n}\n\n.stashChecker.btn {\n  display: inline-block !important;\n  font-weight: 400 !important;\n  color: #212529 !important;\n  text-align: center !important;\n  vertical-align: middle !important;\n  user-select: none !important;\n  background-color: rgba(0,0,0,0) !important;\n  border: 1px solid rgba(0,0,0,0) !important;\n  border-top-color: rgba(0,0,0,0) !important;\n  border-right-color: rgba(0,0,0,0) !important;\n  border-bottom-color: rgba(0,0,0,0) !important;\n  border-left-color: rgba(0,0,0,0) !important;\n  padding: .375rem .75rem !important;\n  font-size: 1rem !important;\n  line-height: 1.5 !important;\n  border-radius: .25rem !important;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out !important;\n}\n\n.stashChecker.btn:not(:disabled):not(.disabled) {\n  cursor: pointer !important;\n}\n\n.stashChecker.btn:hover {\n  color: #212529 !important;\n  text-decoration: none !important;\n}\n\n.stashChecker.btn-primary {\n  color: #fff !important;\n  background-color: #137cbd !important;\n  border-color: #137cbd !important;\n}\n\n.stashChecker.btn-primary:hover {\n  color: #fff !important;\n  background-color: #10659a !important;\n  border-color: #0e5e8f !important;\n}\n\n.stashChecker.btn-danger {\n  color: #fff !important;\n  background-color: #db3737 !important;\n  border-color: #db3737 !important;\n}\n\n.stashChecker.btn-danger:hover {\n  color: #fff !important;\n  background-color: #c82424 !important;\n  border-color: #bd2222 !important;\n}\n\n.stashChecker.tooltip a:link {\n  color: var(--stash-checker-color-text) !important;\n}\n\n.stashChecker.tooltip a:visited {\n  color: var(--stash-checker-color-link-visited) !important;\n}\n\n.stashChecker.tooltip a:hover {\n  color: var(--stash-checker-color-link-hover) !important;\n}\n\n.stashChecker.tooltip a:active {\n  color: var(--stash-checker-color-link-active) !important;\n}\n\n.stashChecker.tooltip hr {\n  margin-top: .5rem !important;\n  margin-bottom: .5rem !important;\n  border-color: var(--stash-checker-color-card) !important;\n  background-color: var(--stash-checker-color-card) !important;\n}\n\n.stashChecker.tooltip hr+br {\n  display: none !important;\n}\n\n.stashChecker.file+br {\n  display: none !important;\n}\n\n.stashCheckerCheckmark {\n  font-size: inherit !important;\n}`, "" ]);
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
    var injectStylesIntoStyleTag = __webpack_require__(72);
    var injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag);
    var styleDomAPI = __webpack_require__(825);
    var styleDomAPI_default = __webpack_require__.n(styleDomAPI);
    var insertBySelector = __webpack_require__(659);
    var insertBySelector_default = __webpack_require__.n(insertBySelector);
    var setAttributesWithoutAttributes = __webpack_require__(56);
    var setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes);
    var insertStyleElement = __webpack_require__(540);
    var insertStyleElement_default = __webpack_require__.n(insertStyleElement);
    var styleTagTransform = __webpack_require__(113);
    var styleTagTransform_default = __webpack_require__.n(styleTagTransform);
    var main = __webpack_require__(661);
    var options = {};
    options.styleTagTransform = styleTagTransform_default();
    options.setAttributes = setAttributesWithoutAttributes_default();
    options.insert = insertBySelector_default().bind(null, "head");
    options.domAPI = styleDomAPI_default();
    options.insertStyleElement = insertStyleElement_default();
    var update = injectStylesIntoStyleTag_default()(main.A, options);
    const style_main = main.A && main.A.locals ? main.A.locals : void 0;
    var Target;
    (function(Target) {
      Target["Scene"] = "scene";
      Target["Performer"] = "performer";
      Target["Gallery"] = "gallery";
      Target["Movie"] = "movie";
      Target["Studio"] = "studio";
      Target["Tag"] = "tag";
    })(Target || (Target = {}));
    var Type;
    (function(Type) {
      Type["Url"] = "url";
      Type["Code"] = "code";
      Type["StashId"] = "stash_id";
      Type["Name"] = "name";
      Type["Title"] = "title";
    })(Type || (Type = {}));
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
    const typeToString = new Map([ [ Type.Url, "URL" ], [ Type.Code, "Code" ], [ Type.StashId, "StashId" ], [ Type.Name, "Name" ], [ Type.Title, "Title" ] ]);
    function getExistingSymbol(element) {
      if (element.getAttribute("data-type") === "stash-symbol") return element; else return Array.from(element.childNodes).filter((n => n.nodeType === Node.ELEMENT_NODE)).map((n => n)).map(getExistingSymbol).find((n => n));
    }
    function formatFileData(files) {
      let propertyStrings = [ [ "path", path => `Path: ${path}` ], [ "video_codec", video_codec => `<br>Codec: ${video_codec}` ], [ "width", width => ` (${width}` ], [ "height", height => `x${height})` ], [ "size", size => `&nbsp;&nbsp;&nbsp;&nbsp;Size: ${bytesToReadable(size)}` ], [ "bit_rate", bit_rate => `&nbsp;&nbsp;&nbsp;&nbsp;Bitrate: ${(bit_rate / 1e6).toFixed(2)}Mbit/s` ], [ "duration", duration => `&nbsp;&nbsp;&nbsp;&nbsp;Duration: ${secondsToReadable(duration)}` ] ];
      return files.map((file => "<div class='stashChecker file'>" + propertyStrings.filter((e => file[e[0]])).map((e => e[1](file[e[0]]))).join("") + "</div>")).join("");
    }
    function matchQuality(matchQuality) {
      let color;
      if (matchQuality == 1) color = "rgb(0,100,0)"; else if (matchQuality > .5) color = "rgb(100,100,0)"; else color = "rgb(100,50,0)";
      return `<span class="matchQuality" style="background-color: ${color}"></span>`;
    }
    function formatQueries(queries, target, id) {
      return queries.map((query => `${matchQuality(query.matchQuality)} ${query.endpoint} (Matched: ${query.types.map((type => typeToString.get(type))).join(", ")}): ${entryLink(query.url, target, id)}`)).join("<br>");
    }
    function formatEntryData(target, data) {
      let propertyStrings = [ [ "id", (id, queries) => `<br>${formatQueries(queries, target, id)}` ], [ "title", title => `<br>Title: ${title}` ], [ "name", name => `<br>Name: ${name}` ], [ "favorite", () => "&emsp;&#10084;&#65039;" ], [ "disambiguation", disambiguation => ` <span style="color: grey">(${disambiguation})</span>` ], [ "alias_list", alias_list => `<br>Aliases: ${alias_list.join(", ")}` ], [ "studio", studio => `<br>Studio: ${studio.name}` ], [ "code", code => `<br>Code: ${code}` ], [ "date", date => `<br>Date: ${date}` ], [ "files", files => `${formatFileData(files)}` ] ];
      return data.map((entry => "<hr>" + propertyStrings.filter((e => entry[e[0]])).map((e => e[1](entry[e[0]], entry["queries"]))).join(""))).join("");
    }
    function updateMatchQuality(queries, numQueries) {
      return queries.map((query => {
        query.matchQuality = query.types.length / numQueries;
        return query;
      }));
    }
    function mergeData(target, source, numQueries) {
      let mapTarget = new Map(target.map((e => [ e.id, e ])));
      let mapSource = new Map(source.map((e => [ e.id, e ])));
      mapSource.forEach(((sourceValue, key) => {
        if (mapTarget.has(key)) {
          let sourceQueries = new Map(sourceValue["queries"].map((v => [ v.endpoint, v ])));
          let targetQueries = new Map(mapTarget.get(key)["queries"].map((v => [ v.endpoint, v ])));
          sourceQueries.forEach(((sourceQuery, key) => {
            if (targetQueries.has(key)) {
              let targetQuery = targetQueries.get(key);
              let typeSet = new Set(sourceQuery.types);
              targetQuery.types.forEach((type => typeSet.add(type)));
              sourceQuery.types = [ ...typeSet ].sort();
            }
            targetQueries.set(key, sourceQuery);
          }));
          sourceValue["queries"] = [ ...targetQueries.values() ].sort(((a, b) => a.endpoint.localeCompare(b.endpoint)));
        }
        mapTarget.set(key, sourceValue);
      }));
      return Array.from(mapTarget.values()).map((datum => {
        datum["queries"] = updateMatchQuality(datum["queries"], numQueries);
        return datum;
      }));
    }
    function prefixSymbol(element, target, type, endpoint, data, color) {
      let endpoints = [ endpoint.name ];
      let queryTypes = [ type ];
      let query = {
        endpoint: endpoint.name,
        url: endpoint.url.replace(/\/graphql\/?$/, ""),
        types: queryTypes,
        matchQuality: 1
      };
      data.forEach((entry => {
        entry["queries"] = [ query ];
      }));
      let symbol = getExistingSymbol(element);
      if (symbol) {
        endpoints = [ ...new Set(JSON.parse(symbol.getAttribute("data-endpoints"))).add(endpoint.name) ].sort();
        queryTypes = [ ...new Set(JSON.parse(symbol.getAttribute("data-queries"))).add(type) ].sort();
        data = mergeData(JSON.parse(symbol.getAttribute("data-data")), data, queryTypes.length);
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
      symbol.setAttribute("data-endpoints", JSON.stringify(endpoints));
      symbol.setAttribute("data-queries", JSON.stringify(queryTypes));
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
      tooltip += `Endpoints: ${endpoints.join(", ")}`;
      tooltip += "<br>";
      tooltip += `Queries: ${queryTypes.map((type => typeToString.get(type))).join(", ")}`;
      tooltip += formatEntryData(target, data);
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
    const batchTimeout = 10;
    const maxBatchSize = 100;
    let batchQueries = new Map;
    async function request(endpoint, query, batchQueries = false) {
      if (batchQueries) return addQuery(endpoint, query); else return sendQuery(endpoint, `q:${query.query}`).then((data => query.onload(data.q))).catch(query.onerror);
    }
    async function addQuery(endpoint, query) {
      let batchQuery = batchQueries.get(endpoint);
      if (!batchQuery) {
        let timerHandle = window.setTimeout((() => {
          let query = buildBatchQuery(endpoint, batchQueries.get(endpoint));
          sendQuery(endpoint, query.query).then(query.onload).catch(query.onerror);
          batchQueries.delete(endpoint);
        }), batchTimeout);
        batchQuery = {
          timerHandle,
          queries: []
        };
      }
      batchQuery.queries.push(query);
      if (batchQuery.queries.length >= maxBatchSize) {
        window.clearTimeout(batchQuery.timerHandle);
        batchQueries.delete(endpoint);
        let query = buildBatchQuery(endpoint, batchQuery);
        return sendQuery(endpoint, query.query).then(query.onload).catch(query.onerror);
      } else batchQueries.set(endpoint, batchQuery);
    }
    function buildBatchQuery(endpoint, batchQuery) {
      let query = batchQuery.queries.map(((request, index) => `q${index}:${request.query}`)).join();
      let onload = data => {
        void 0;
        batchQuery.queries.forEach(((request, index) => {
          if (request.onload) request.onload(data[`q${index}`]);
        }));
      };
      let onerror = message => {
        void 0;
        batchQuery.queries.forEach((request => {
          if (request.onerror) request.onerror(message);
        }));
      };
      console.info(`Sending batch query of size ${batchQuery.queries.length} to endpoint '${endpoint.name}'`);
      return {
        query,
        onload,
        onerror
      };
    }
    async function sendQuery(endpoint, query) {
      return new Promise(((resolve, reject) => {
        GM.xmlHttpRequest({
          method: "GET",
          url: `${endpoint.url}?query={${encodeURIComponent(query)}}`,
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
      if (statusText && statusText.trim() !== "") return `${status}: ${statusText}`; else return `${status}: ${friendlyHttpStatus.get(status)}`;
    }
    let friendlyHttpStatus = new Map([ [ 200, "OK" ], [ 201, "Created" ], [ 202, "Accepted" ], [ 203, "Non-Authoritative Information" ], [ 204, "No Content" ], [ 205, "Reset Content" ], [ 206, "Partial Content" ], [ 300, "Multiple Choices" ], [ 301, "Moved Permanently" ], [ 302, "Found" ], [ 303, "See Other" ], [ 304, "Not Modified" ], [ 305, "Use Proxy" ], [ 306, "Unused" ], [ 307, "Temporary Redirect" ], [ 400, "Bad Request" ], [ 401, "Unauthorized" ], [ 402, "Payment Required" ], [ 403, "Forbidden" ], [ 404, "Not Found" ], [ 405, "Method Not Allowed" ], [ 406, "Not Acceptable" ], [ 407, "Proxy Authentication Required" ], [ 408, "Request Timeout" ], [ 409, "Conflict" ], [ 410, "Gone" ], [ 411, "Length Required" ], [ 412, "Precondition Required" ], [ 413, "Request Entry Too Large" ], [ 414, "Request-URI Too Long" ], [ 415, "Unsupported Media Type" ], [ 416, "Requested Range Not Satisfiable" ], [ 417, "Expectation Failed" ], [ 418, "I'm a teapot" ], [ 429, "Too Many Requests" ], [ 500, "Internal Server Error" ], [ 501, "Not Implemented" ], [ 502, "Bad Gateway" ], [ 503, "Service Unavailable" ], [ 504, "Gateway Timeout" ], [ 505, "HTTP Version Not Supported" ] ]);
    function initSettingsElement() {
      let settingsModal = document.createElement("div");
      settingsModal.id = "stashChecker-settingsModal";
      settingsModal.style.display = "none";
      settingsModal.classList.add("stashChecker", "modal");
      settingsModal.addEventListener("click", (event => {
        if (event.target === settingsModal) settingsModal.style.display = "none";
      }));
      let settings = document.createElement("div");
      settings.id = "stashChecker-settings";
      settings.classList.add("stashChecker", "settings");
      settingsModal.append(settings);
      document.body.append(settingsModal);
    }
    function appendSettingsSection(...nodes) {
      let settings = document.getElementById("stashChecker-settings");
      settings.append(...nodes);
    }
    function openSettings() {
      let settingsModal = document.getElementById("stashChecker-settingsModal");
      settingsModal.style.display = "initial";
    }
    let stashEndpoints = [];
    async function initEndpointSettings() {
      let defaultData = [ {
        name: "Localhost",
        url: "http://localhost:9999/graphql",
        key: ""
      } ];
      stashEndpoints = await getValue("stashEndpoints", defaultData);
      let endpointSection = document.createElement("div");
      endpointSection.id = "stashChecker-endpointSection";
      endpointSection.classList.add("stashChecker", "settingsSection");
      appendSettingsSection(endpointSection);
      let heading = document.createElement("h2");
      heading.innerHTML = "Stash Endpoints";
      endpointSection.append(heading);
      let description = document.createElement("p");
      description.classList.add("stashChecker", "sub-heading");
      description.innerHTML = "The GraphQL endpoint URL can be generated by appending '/graphql' to your Stash base URL. The API key can be found on your security settings page. Leave the field empty, if none is required.";
      endpointSection.append(description);
      let endpoints = document.createElement("div");
      endpoints.id = "stashChecker-endpoints";
      endpoints.classList.add("stashChecker", "endpoints");
      endpointSection.append(endpoints);
      await updateEndpoints(endpoints);
    }
    async function updateEndpoints(container) {
      let endpointList = stashEndpoints.map(((endpoint, index) => {
        let div = document.createElement("div");
        div.classList.add("stashChecker", "endpoint");
        div.innerHTML = `<div><h3>${endpoint.name}</h3><p>${endpoint.url}</p></div>`;
        getVersion(endpoint, div.querySelector("h3"));
        let editButton = document.createElement("button");
        editButton.classList.add("stashChecker", "btn", "btn-primary");
        editButton.setAttribute("data-index", index.toString());
        editButton.addEventListener("click", editEndpointListener);
        editButton.innerHTML = "Edit";
        div.append(editButton);
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("stashChecker", "btn", "btn-danger");
        deleteButton.setAttribute("data-index", index.toString());
        deleteButton.addEventListener("click", deleteEndpointListener);
        deleteButton.innerHTML = "Delete";
        div.append(deleteButton);
        return div;
      }));
      let div = document.createElement("div");
      div.classList.add("stashChecker", "endpoint");
      div.innerHTML = "<div></div>";
      endpointList.push(div);
      let addButton = document.createElement("button");
      addButton.classList.add("stashChecker", "btn", "btn-primary");
      addButton.addEventListener("click", addEndpointListener);
      addButton.innerHTML = "Add";
      div.append(addButton);
      container.replaceChildren(...endpointList);
    }
    async function addEndpointListener() {
      let newEndpoint = {
        name: prompt("Name:")?.trim() ?? "",
        url: prompt("URL:")?.trim() ?? "",
        key: prompt("API Key:")?.trim() ?? ""
      };
      stashEndpoints.push(newEndpoint);
      void setValue("stashEndpoints", stashEndpoints);
      await updateEndpoints(document.getElementById("stashChecker-endpoints"));
    }
    async function editEndpointListener() {
      let index = parseInt(this.getAttribute("data-index"));
      let oldEndpoint = stashEndpoints[index];
      stashEndpoints[index] = {
        name: prompt("Name:", oldEndpoint.name)?.trim() ?? oldEndpoint.name,
        url: prompt("URL:", oldEndpoint.url)?.trim() ?? oldEndpoint.url,
        key: prompt("API Key:", oldEndpoint.key)?.trim() ?? oldEndpoint.key
      };
      void setValue("stashEndpoints", stashEndpoints);
      await updateEndpoints(document.getElementById("stashChecker-endpoints"));
    }
    async function deleteEndpointListener() {
      let index = parseInt(this.getAttribute("data-index"));
      stashEndpoints.splice(index, 1);
      void setValue("stashEndpoints", stashEndpoints);
      await updateEndpoints(document.getElementById("stashChecker-endpoints"));
    }
    async function getVersion(endpoint, element) {
      let onload = data => {
        element.innerHTML += `<span class="version"> (${data.version})</span>`;
      };
      let onerror = message => {
        let explanation = "no connection";
        if (message) explanation = message.length < 30 ? message?.trim() : "wrong path";
        element.innerHTML += `<span class="version"> (${explanation})</span>`;
      };
      await request(endpoint, {
        query: "version{version}",
        onload,
        onerror
      });
    }
    async function queryStash(queryString, onload, target, type, {stashIdEndpoint}) {
      let criterion;
      let query;
      let access = d => d;
      switch (type) {
       case Type.StashId:
        criterion = `stash_id_endpoint:{endpoint:"${stashIdEndpoint}",stash_id:"${queryString}",modifier:EQUALS}`;
        break;

       default:
        criterion = `${type}:{value:"${queryString}",modifier:EQUALS}`;
        break;
      }
      switch (target) {
       case Target.Scene:
        query = `findScenes(scene_filter:{${criterion}}){scenes{id,title,code,studio{name},date,files{path,duration,video_codec,width,height,size,bit_rate}}}`;
        access = d => d.scenes;
        break;

       case Target.Performer:
        query = `findPerformers(performer_filter:{${criterion}}){performers{id,name,disambiguation,alias_list,favorite}}`;
        access = d => d.performers;
        break;

       case Target.Gallery:
        query = `findGalleries(gallery_filter:{${criterion}}){galleries{id,title,date,files{path}}}`;
        access = d => d.galleries;
        break;

       case Target.Movie:
        query = `findMovies(movie_filter:{${criterion}}){movies{id,name,date}}`;
        access = d => d.movies;
        break;

       case Target.Studio:
        query = `findStudios(studio_filter:{${criterion}}){studios{id,name}}`;
        access = d => d.studios;
        break;

       case Target.Tag:
        query = `findTags(tag_filter:{${criterion}}){tags{id,name}}`;
        access = d => d.tags;
        break;

       default:
        return;
      }
      stashEndpoints.forEach((endpoint => {
        let graphQlQuery = {
          query,
          onload: data => onload(target, type, endpoint, access(data))
        };
        request(endpoint, graphQlQuery, true);
      }));
    }
    async function checkElement(target, element, {prepareUrl = url => url, urlSelector = e => e.closest("a").href, codeSelector, stashIdSelector, stashIdEndpoint = `https://${window.location.host}/graphql`, nameSelector = e => firstTextChild(e)?.textContent?.trim(), titleSelector = e => firstTextChild(e)?.textContent?.trim(), color = () => "green"}) {
      if (urlSelector && prepareUrl) {
        let url = prepareUrl(urlSelector(element));
        if (url) {
          void 0;
          await queryStash(url, ((...args) => prefixSymbol(element, ...args, color)), target, Type.Url, {
            stashIdEndpoint
          });
        } else console.info(`No URL for ${target} found.`);
      }
      if (codeSelector) {
        let code = codeSelector(element);
        if (code) {
          void 0;
          await queryStash(code, ((...args) => prefixSymbol(element, ...args, color)), target, Type.Code, {
            stashIdEndpoint
          });
        } else console.info(`No Code for ${target} found.`);
      }
      if (stashIdSelector) {
        let id = stashIdSelector(element);
        if (id) {
          void 0;
          await queryStash(id, ((...args) => prefixSymbol(element, ...args, color)), target, Type.StashId, {
            stashIdEndpoint
          });
        } else console.info(`No StashId for ${target} found.`);
      }
      if ([ Target.Performer, Target.Movie, Target.Studio, Target.Tag ].includes(target) && nameSelector) {
        let name = nameSelector(element);
        let nameCount = name?.split(/\s+/)?.length;
        let ignore = target === Target.Performer && nameCount === 1;
        if (name && !ignore) {
          void 0;
          await queryStash(name, ((...args) => prefixSymbol(element, ...args, color)), target, Type.Name, {
            stashIdEndpoint
          });
        } else if (name && ignore) console.info(`Ignore single name: ${name}`); else console.info(`No Name for ${target} found.`);
      }
      if ([ Target.Scene, Target.Gallery ].includes(target) && titleSelector) {
        let title = titleSelector(element);
        if (title) {
          void 0;
          await queryStash(title, ((...args) => prefixSymbol(element, ...args, color)), target, Type.Title, {
            stashIdEndpoint
          });
        } else console.info(`No Title for ${target} found.`);
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
    const BLOCKED_SITE_KEY = `blocked_${window.location.host}`.replace(/[.\-]/, "_");
    async function initMenu() {
      GM.registerMenuCommand("Settings", openSettings, "s");
      if (await isSiteBlocked()) GM.registerMenuCommand(`Activate for ${window.location.host}`, unblockSite, "a"); else GM.registerMenuCommand(`Deactivate for ${window.location.host}`, blockSite, "d");
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
    (async function() {
      await initTooltip();
      initSettingsElement();
      await initEndpointSettings();
      await initMenu();
      if (await isSiteBlocked()) {
        console.info("Userscript is deactivated for this site. Activate in userscript menu.");
        return;
      }
      let currentSite = () => window.location.href;
      console.info("Running Stash Checker");
      switch (window.location.host) {
       case "www.iwara.tv":
        {
          let color = d => d.files.some((f => f.path.endsWith("_Source.mp4"))) ? "green" : "blue";
          let codeRegex = /(?<=video\/)([a-zA-Z0-9]+)(?=\/|$)/;
          let prepareUrl = url => {
            let match = url.match(codeRegex);
            return url.substring(0, match.index + match.at(0).length);
          };
          check(Target.Scene, ".page-video__details > .text--h1", {
            observe: true,
            urlSelector: currentSite,
            color,
            prepareUrl,
            codeSelector: () => window.location.pathname.match(codeRegex).at(0)
          });
          check(Target.Scene, "a.videoTeaser__title", {
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
          check(Target.Scene, "h1.video-h1", {
            color,
            urlSelector: currentSite,
            titleSelector: null
          });
          check(Target.Scene, "a h2.box-h2", {
            color,
            titleSelector: null
          });
          break;
        }

       case "erommdtube.com":
        {
          let color = d => d.files.some((f => f.path.endsWith("_Source.mp4"))) ? "green" : "blue";
          check(Target.Scene, "h1.show__h1", {
            color,
            urlSelector: currentSite,
            titleSelector: null
          });
          check(Target.Scene, "h2.main__list-title", {
            color,
            titleSelector: null
          });
          break;
        }

       case "coomer.su":
       case "kemono.su":
        check(Target.Scene, "h1.post__title", {
          urlSelector: currentSite,
          titleSelector: null
        });
        check(Target.Scene, ".post-card > a[href*='/post/']", {
          titleSelector: null
        });
        break;

       case "adultanime.dbsearch.net":
        if (document.querySelector("article > section[id='info-table']") !== null) check(Target.Scene, "div[id='main-inner'] > article > h2", {
          urlSelector: currentSite,
          codeSelector: _ => document.evaluate("//dt[text()='規格品番']/following-sibling::dd[1]/p/text()", document, null, XPathResult.STRING_TYPE, null)?.stringValue?.trim()
        });
        check(Target.Scene, "div.item-info > h4 > a, div.item-info > h5 > a");
        break;

       case "xslist.org":
        check(Target.Performer, "span[itemprop='name']", {
          urlSelector: currentSite
        });
        check(Target.Performer, "a[href*='/model/']");
        check(Target.Scene, "table#movices td > strong", {
          urlSelector: null,
          codeSelector: e => e.textContent.trim(),
          titleSelector: null
        });
        break;

       case "www.animecharactersdatabase.com":
        check(Target.Performer, "a[href*='characters.php']:not([href*='_']):not([href*='series'])");
        break;

       case "www.iafd.com":
        if (window.location.pathname.startsWith("/person.rme/perfid=")) check(Target.Performer, "h1", {
          urlSelector: currentSite
        }); else if (window.location.pathname.startsWith("/title.rme/id=")) check(Target.Scene, "h1", {
          urlSelector: currentSite
        });
        check(Target.Performer, "a[href*='/person.rme/perfid=']");
        check(Target.Scene, "a[href*='/title.rme/id=']");
        check(Target.Studio, "a[href*='/studio.rme/studio=']");
        break;

       case "metadataapi.net":
        {
          let stashIdSelector = _ => document.evaluate("//div[text()='TPDB UUID']/following-sibling::div/text()", document, null, XPathResult.STRING_TYPE, null)?.stringValue?.trim();
          let stashIdEndpoint = "https://api.metadataapi.net/graphql";
          if (window.location.pathname.startsWith("/performers/")) {
            check(Target.Performer, "div.pl-4 > h2", {
              observe: true,
              urlSelector: currentSite,
              stashIdSelector
            });
            check(Target.Performer, "div.pl-4 > h2", {
              observe: true,
              urlSelector: null,
              nameSelector: null,
              stashIdSelector,
              stashIdEndpoint
            });
          } else if (window.location.pathname.startsWith("/scenes/")) {
            check(Target.Scene, "div.flex.justify-between > h2", {
              observe: true,
              urlSelector: currentSite,
              stashIdSelector
            });
            check(Target.Scene, "div.flex.justify-between > h2", {
              observe: true,
              urlSelector: null,
              titleSelector: null,
              stashIdSelector,
              stashIdEndpoint
            });
          } else if (window.location.pathname.startsWith("/movies/")) {
            check(Target.Movie, "div.flex.justify-between > h2", {
              observe: true,
              urlSelector: currentSite,
              stashIdSelector
            });
            check(Target.Movie, "div.flex.justify-between > h2", {
              observe: true,
              urlSelector: null,
              nameSelector: null,
              stashIdSelector,
              stashIdEndpoint
            });
          }
          check(Target.Performer, "a[href^='https://metadataapi.net/performers/']", {
            observe: true
          });
          check(Target.Scene, "a[href^='https://metadataapi.net/scenes/'], a[href^='https://metadataapi.net/jav/']", {
            observe: true
          });
          check(Target.Movie, "a[href^='https://metadataapi.net/movies/']", {
            observe: true
          });
          break;
        }

       case "www.javlibrary.com":
        check(Target.Scene, "div[id='video_title']", {
          urlSelector: currentSite,
          prepareUrl: url => url.replace("videoreviews.php", "").replace(/&.*$/, ""),
          codeSelector: _ => document.querySelector("div[id='video_id'] td.text").textContent.trim(),
          titleSelector: _ => document.querySelector("div[id='video_id'] td.text").textContent.trim()
        });
        check(Target.Scene, ".video a[href^='./?v=jav']", {
          prepareUrl: url => url.replace(/&.*$/, ""),
          codeSelector: e => e.querySelector("div.id")?.textContent?.trim()
        });
        check(Target.Scene, ".comment strong > a[href^='videoreviews.php?v=jav']", {
          prepareUrl: url => url.replace("videoreviews.php", "").replace(/&.*$/, ""),
          codeSelector: e => firstTextChild(e)?.textContent?.trim()?.split(" ")[0],
          titleSelector: e => firstTextChild(e)?.textContent?.trim()?.split(" ")[0]
        });
        break;

       case "r18.dev":
        check(Target.Scene, "#video-info > #title", {
          observe: true,
          urlSelector: currentSite,
          codeSelector: _ => firstTextChild(document.querySelector("#dvd-id"))?.textContent?.trim()
        });
        check(Target.Scene, ".video-label > a[href*='/movies/detail/']", {
          observe: true,
          codeSelector: e => firstTextChild(e)?.textContent?.trim()
        });
        break;

       case "www.minnano-av.com":
        if (/actress\d{1,6}/.test(window.location.pathname)) check(Target.Performer, "h1", {
          prepareUrl: url => url.split("?")[0],
          urlSelector: currentSite
        });
        check(Target.Performer, "a[href*='actress']:not([href*='list']):not([href*='.php']):not([href*='http'])", {
          prepareUrl: url => url.split("?")[0]
        });
        break;

       case "www.indexxx.com":
        check(Target.Performer, "h1[id='model-name']", {
          urlSelector: currentSite
        });
        check(Target.Performer, "a.modelLink[href*='https://www.indexxx.com/m/'] > span");
        break;

       case "www.thenude.com":
        check(Target.Performer, "span.model-name", {
          urlSelector: currentSite
        });
        check(Target.Performer, "a.model-name, a.model-title, a[data-img*='/models/']", {
          observe: true
        });
        break;

       case "www.data18.com":
        check(Target.Scene, "a[href^='https://www.data18.com/scenes/']:not([href*='#'])", {
          observe: true,
          titleSelector: null
        });
        check(Target.Performer, "a[href^='https://www.data18.com/name/']:not([href*='/pairings']):not([href*='/studio']):not([href*='/virtual-reality']):not([href*='/scenes']):not([href*='/movies']):not([href*='/tags']):not([title$=' Home'])", {
          observe: true
        });
        break;

       case "www.babepedia.com":
        check(Target.Performer, "h1#babename", {
          urlSelector: currentSite
        });
        check(Target.Performer, "a[href*='/babe/']", {
          observe: true
        });
        break;

       case "www.freeones.com":
        check(Target.Performer, "a[href$='/feed'] [data-test='subject-name'], a[href$='/feed'] .profile-image + p", {
          prepareUrl: url => url.replace(/\/feed$/, "").replace(/\/[a-z]{2}\//, "/")
        });
        break;

       case "shemalestardb.com":
        check(Target.Performer, "h2[id='star-name']", {
          urlSelector: currentSite
        });
        check(Target.Performer, "figcaption > a[href*='/stars/']");
        break;

       case "onlyfans.com":
        check(Target.Performer, "div.b-username > div.g-user-name", {
          observe: true,
          urlSelector: currentSite
        });
        check(Target.Performer, "a.b-username > div.g-user-name", {
          observe: true
        });
        break;

       case "www.pornteengirl.com":
        check(Target.Performer, "a[href*='/model/']", {
          nameSelector: e => firstTextChild(e)?.textContent?.trim()?.replace(/\([^()]*\)$/, "")?.trimEnd()
        });
        break;

       case "gayeroticvideoindex.com":
        if (window.location.pathname.startsWith("/performer/")) check(Target.Performer, "[id='data'] h1", {
          urlSelector: currentSite
        }); else if (window.location.pathname.startsWith("/episode/")) check(Target.Scene, "[id='data'] h1", {
          urlSelector: currentSite
        }); else if (window.location.pathname.startsWith("/video/")) check(Target.Movie, "[id='data'] h1", {
          urlSelector: currentSite
        });
        check(Target.Performer, "a[href*='performer/']", {
          observe: true
        });
        check(Target.Scene, "a[href*='episode/']", {
          observe: true
        });
        check(Target.Movie, "a[href*='video/']", {
          observe: true
        });
        break;

       case "fansdb.cc":
       case "fansdb.xyz":
       case "pmvstash.org":
       case "stashdb.org":
        let exclude = ":not(a[href$='/add']):not(a[href$='/edit']):not(a[href$='/merge']):not(a[href$='/delete'])";
        if (window.location.pathname.startsWith("/scenes/")) check(Target.Scene, "div.scene-info.card h3 > span", {
          observe: true,
          urlSelector: null,
          stashIdSelector: () => window.location.href.replace(/^.*\/scenes\//, "").split(/[?#]/)[0],
          titleSelector: null
        });
        check(Target.Scene, `a[href^='/scenes/']${exclude}, a[href^='https://${window.location.host}/scenes/']${exclude}`, {
          observe: true,
          urlSelector: null,
          stashIdSelector: e => e.getAttribute("href")?.replace(/^.*\/scenes\//, "")?.split(/[?#]/)[0],
          titleSelector: null
        });
        if (window.location.pathname.startsWith("/performers/")) check(Target.Performer, "div.PerformerInfo div.card-header h3 > span", {
          observe: true,
          urlSelector: null,
          stashIdSelector: () => window.location.href.replace(/^.*\/performers\//, "").split(/[?#]/)[0],
          nameSelector: null
        });
        check(Target.Performer, `a[href^='/performers/']${exclude}, a[href^='https://${window.location.host}/performers/']${exclude}`, {
          observe: true,
          urlSelector: null,
          stashIdSelector: e => e.closest("a")?.getAttribute("href")?.replace(/^.*\/performers\//, "")?.split(/[?#]/)[0],
          nameSelector: null
        });
        if (window.location.pathname.startsWith("/studios/")) check(Target.Studio, ".studio-title > h3 > span", {
          observe: true,
          urlSelector: null,
          stashIdSelector: () => window.location.href.replace(/^.*\/studios\//, "").split(/[?#]/)[0],
          nameSelector: null
        });
        check(Target.Studio, `a[href^='/studios/']${exclude}, a[href^='https://${window.location.host}/studios/']${exclude}`, {
          observe: true,
          urlSelector: null,
          stashIdSelector: e => e.closest("a")?.getAttribute("href")?.replace(/^.*\/studios\//, "")?.split(/[?#]/)[0],
          nameSelector: null
        });
        if (window.location.pathname.startsWith("/tags/")) check(Target.Tag, ".MainContent > .NarrowPage h3 > span", {
          observe: true,
          urlSelector: null,
          stashIdSelector: () => window.location.href.replace(/^.*\/tags\//, "").split(/[?#]/)[0],
          nameSelector: null
        }); else if (window.location.pathname === "/tags") check(Target.Tag, `a[href^='/tags/']${exclude}, a[href^='https://${window.location.host}/tags/']${exclude}`, {
          observe: true,
          urlSelector: null,
          stashIdSelector: e => e.closest("a")?.getAttribute("href")?.replace(/^.*\/tags\//, "")?.split(/[?#]/)[0],
          nameSelector: null
        });
        break;

       default:
        console.warn("No configuration for website found.");
        break;
      }
    })();
  })();
})();