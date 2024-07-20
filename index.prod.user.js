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
// @match *://hobby.porn/*
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
// @match *://www.pornhub.com/*
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
      ___CSS_LOADER_EXPORT___.push([ module.id, `:root {\n  --stash-checker-color-text: #323232 !important;\n  --stash-checker-color-text-light: #989898 !important;\n  --stash-checker-color-link-visited: #323232 !important;\n  --stash-checker-color-link-hover: #039 !important;\n  --stash-checker-color-link-active: #039 !important;\n  --stash-checker-color-border: #323232 !important;\n  --stash-checker-color-border-light: #989898 !important;\n  --stash-checker-color-bg: #ffffff !important;\n  --stash-checker-color-card: #f2f2f2 !important;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --stash-checker-color-text: #e0e0e0 !important;\n    --stash-checker-color-text-light: #707070 !important;\n    --stash-checker-color-link-visited: #c7c7c7 !important;\n    --stash-checker-color-link-hover: #f2f2f2 !important;\n    --stash-checker-color-link-active: #039 !important;\n    --stash-checker-color-border: #5a5a5a !important;\n    --stash-checker-color-border-light: #707070 !important;\n    --stash-checker-color-bg: #202020 !important;\n    --stash-checker-color-card: #464646 !important;\n  }\n}\n\n.stashChecker {\n  color: var(--stash-checker-color-text) !important;\n  text-align: left !important;\n  font-size: medium !important;\n  line-height: normal !important;\n  opacity: 1 !important;\n}\n\n.stashChecker.sub-heading {\n  font-size: .8rem !important;\n  text-align: center !important;\n  margin: 0 0 .5rem !important;\n}\n\n.stashChecker.tooltip {\n  visibility: visible !important;\n  position: inherit !important;\n  background-color: var(--stash-checker-color-bg) !important;\n  border: .1rem solid var(--stash-checker-color-border) !important;\n  border-radius: .5rem !important;\n  padding: .5rem !important;\n  max-width: 60rem !important;\n}\n\n.stashChecker.file {\n  position: inherit !important;\n  margin: .5rem !important;\n  padding: .5rem !important;\n  background-color: var(--stash-checker-color-card) !important;\n}\n\n.stashChecker.tag {\n  white-space: nowrap !important;\n  line-height: 1.5rem !important;\n  margin-right: .5rem !important;\n  padding: 0 .5rem !important;\n  background-color: var(--stash-checker-color-card) !important;\n  border-radius: .5rem !important;\n}\n\n.stashChecker.modal {\n  position: fixed !important;\n  z-index: 999999 !important;\n  left: 0 !important;\n  top: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n  overflow: hidden auto !important;\n  overscroll-behavior: contain !important;\n  background-color: #000 !important;\n  background-color: rgba(0,0,0,.4) !important;\n}\n\n.stashChecker.settings {\n  margin: 10vh auto !important;\n  background-color: var(--stash-checker-color-bg) !important;\n  border: .1rem solid var(--stash-checker-color-border) !important;\n  border-radius: .5rem !important;\n  padding: .5rem !important;\n  width: fit-content !important;\n  display: grid !important;\n  gap: 1rem !important;\n}\n\n.stashChecker.settings .version {\n  color: var(--stash-checker-color-text-light) !important;\n  font-size: 1.25rem !important;\n}\n\n.stashChecker.settingsSection {\n  width: 35rem !important;\n}\n\n.stashChecker.settingsSectionBody {\n  width: 100% !important;\n  display: flex !important;\n  flex-flow: row wrap !important;\n  justify-content: flex-start !important;\n  align-items: flex-start !important;\n  gap: .5rem !important;\n}\n\n.stashChecker.endpoint {\n  width: 100% !important;\n  display: flex !important;\n  flex-direction: row !important;\n  justify-content: space-between !important;\n  justify-items: flex-start !important;\n  align-items: center !important;\n  padding: 1rem !important;\n  margin: .1rem !important;\n  background-color: var(--stash-checker-color-card) !important;\n}\n\n.stashChecker.endpoint>button {\n  flex-grow: 0 !important;\n  margin-left: .5rem !important;\n}\n\n.stashChecker.endpoint>div {\n  flex-grow: 1 !important;\n}\n\n.stashChecker.endpoint>div>* {\n  margin: 0 !important;\n}\n\n.stashChecker.heading {\n  font-size: 1.5rem !important;\n  text-align: center !important;\n}\n\n.stashChecker fieldset {\n  width: fit-content !important;\n  border: .1rem solid var(--stash-checker-color-border-light) !important;\n  border-radius: .5rem !important;\n  margin: .5rem 0 .5rem 0 !important;\n  padding: .5rem !important;\n  flex-grow: 1 !important;\n}\n\n.stashChecker legend {\n  float: unset !important;\n  width: auto !important;\n  height: auto !important;\n  margin-left: .5rem !important;\n  margin-bottom: 0 !important;\n  padding-left: .2rem !important;\n  padding-right: .2rem !important;\n  line-height: unset !important;\n  font-size: unset !important;\n}\n\n.stashChecker table,\n.stashChecker thead,\n.stashChecker tbody,\n.stashChecker tr,\n.stashChecker th,\n.stashChecker td {\n  border-collapse: collapse !important;\n  border: .1rem solid var(--stash-checker-color-border) !important;\n  padding: .2rem !important;\n}\n\n.stashChecker .center {\n  text-align: center !important;\n}\n\n.stashChecker .option {\n  text-align: right !important;\n  margin: .5rem !important;\n}\n\n.stashChecker .option>input {\n  margin-left: .5rem !important;\n  color: var(--stash-checker-color-text) !important;\n  background-color: var(--stash-checker-color-bg) !important;\n}\n\n.stashChecker>.matchQuality {\n  width: .8em !important;\n  height: .8em !important;\n  display: inline-block !important;\n  border-radius: 50% !important;\n}\n\n.stashChecker.btn {\n  display: inline-block !important;\n  font-weight: 400 !important;\n  color: #212529 !important;\n  text-align: center !important;\n  vertical-align: middle !important;\n  user-select: none !important;\n  background-color: rgba(0,0,0,0) !important;\n  border: 1px solid rgba(0,0,0,0) !important;\n  padding: .375rem .75rem !important;\n  font-size: 1rem !important;\n  line-height: 1.5 !important;\n  border-radius: .25rem !important;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out !important;\n}\n\n.stashChecker.btn:not(:disabled):not(.disabled) {\n  cursor: pointer !important;\n}\n\n.stashChecker.btn:hover {\n  color: #212529 !important;\n  text-decoration: none !important;\n}\n\n.stashChecker.btn-primary {\n  color: #fff !important;\n  background-color: #137cbd !important;\n  border-color: #137cbd !important;\n}\n\n.stashChecker.btn-primary:hover {\n  color: #fff !important;\n  background-color: #10659a !important;\n  border-color: #0e5e8f !important;\n}\n\n.stashChecker.btn-danger {\n  color: #fff !important;\n  background-color: #db3737 !important;\n  border-color: #db3737 !important;\n}\n\n.stashChecker.btn-danger:hover {\n  color: #fff !important;\n  background-color: #c82424 !important;\n  border-color: #bd2222 !important;\n}\n\n.stashChecker.tooltip a:link {\n  color: var(--stash-checker-color-text) !important;\n}\n\n.stashChecker.tooltip a:visited {\n  color: var(--stash-checker-color-link-visited) !important;\n}\n\n.stashChecker.tooltip a:hover {\n  color: var(--stash-checker-color-link-hover) !important;\n}\n\n.stashChecker.tooltip a:active {\n  color: var(--stash-checker-color-link-active) !important;\n}\n\n.stashChecker.tooltip hr {\n  margin-top: .5rem !important;\n  margin-bottom: .5rem !important;\n  border-color: var(--stash-checker-color-border-light) !important;\n  background-color: var(--stash-checker-color-border-light) !important;\n}\n\n.stashChecker.tooltip hr+br {\n  display: none !important;\n}\n\n.stashChecker.file+br {\n  display: none !important;\n}\n\n.stashCheckerSymbol {\n  font-size: inherit !important;\n}`, "" ]);
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
    246: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        Ay: () => __WEBPACK_DEFAULT_EXPORT__
      });
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) symbols = symbols.filter((function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          }));
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) ownKeys(Object(source), true).forEach((function(key) {
            _defineProperty(target, key, source[key]);
          })); else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); else ownKeys(Object(source)).forEach((function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          }));
        }
        return target;
      }
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
          return typeof obj;
        }; else _typeof = function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        return _typeof(obj);
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        }); else obj[key] = value;
        return obj;
      }
      function _extends() {
        _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
          }
        }
        return target;
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var version = "1.15.2";
      function userAgent(pattern) {
        if (typeof window !== "undefined" && window.navigator) return !!navigator.userAgent.match(pattern);
      }
      var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
      var Edge = userAgent(/Edge/i);
      var FireFox = userAgent(/firefox/i);
      var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
      var IOS = userAgent(/iP(ad|od|hone)/i);
      var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
      var captureMode = {
        capture: false,
        passive: false
      };
      function on(el, event, fn) {
        el.addEventListener(event, fn, !IE11OrLess && captureMode);
      }
      function off(el, event, fn) {
        el.removeEventListener(event, fn, !IE11OrLess && captureMode);
      }
      function matches(el, selector) {
        if (!selector) return;
        selector[0] === ">" && (selector = selector.substring(1));
        if (el) try {
          if (el.matches) return el.matches(selector); else if (el.msMatchesSelector) return el.msMatchesSelector(selector); else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
        } catch (_) {
          return false;
        }
        return false;
      }
      function getParentOrHost(el) {
        return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
      }
      function closest(el, selector, ctx, includeCTX) {
        if (el) {
          ctx = ctx || document;
          do {
            if (selector != null && (selector[0] === ">" ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) return el;
            if (el === ctx) break;
          } while (el = getParentOrHost(el));
        }
        return null;
      }
      var R_SPACE = /\s+/g;
      function toggleClass(el, name, state) {
        if (el && name) if (el.classList) el.classList[state ? "add" : "remove"](name); else {
          var className = (" " + el.className + " ").replace(R_SPACE, " ").replace(" " + name + " ", " ");
          el.className = (className + (state ? " " + name : "")).replace(R_SPACE, " ");
        }
      }
      function css(el, prop, val) {
        var style = el && el.style;
        if (style) if (val === void 0) {
          if (document.defaultView && document.defaultView.getComputedStyle) val = document.defaultView.getComputedStyle(el, ""); else if (el.currentStyle) val = el.currentStyle;
          return prop === void 0 ? val : val[prop];
        } else {
          if (!(prop in style) && prop.indexOf("webkit") === -1) prop = "-webkit-" + prop;
          style[prop] = val + (typeof val === "string" ? "" : "px");
        }
      }
      function matrix(el, selfOnly) {
        var appliedTransforms = "";
        if (typeof el === "string") appliedTransforms = el; else do {
          var transform = css(el, "transform");
          if (transform && transform !== "none") appliedTransforms = transform + " " + appliedTransforms;
        } while (!selfOnly && (el = el.parentNode));
        var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
        return matrixFn && new matrixFn(appliedTransforms);
      }
      function find(ctx, tagName, iterator) {
        if (ctx) {
          var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
          if (iterator) for (;i < n; i++) iterator(list[i], i);
          return list;
        }
        return [];
      }
      function getWindowScrollingElement() {
        var scrollingElement = document.scrollingElement;
        if (scrollingElement) return scrollingElement; else return document.documentElement;
      }
      function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
        if (!el.getBoundingClientRect && el !== window) return;
        var elRect, top, left, bottom, right, height, width;
        if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
          elRect = el.getBoundingClientRect();
          top = elRect.top;
          left = elRect.left;
          bottom = elRect.bottom;
          right = elRect.right;
          height = elRect.height;
          width = elRect.width;
        } else {
          top = 0;
          left = 0;
          bottom = window.innerHeight;
          right = window.innerWidth;
          height = window.innerHeight;
          width = window.innerWidth;
        }
        if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
          container = container || el.parentNode;
          if (!IE11OrLess) do {
            if (container && container.getBoundingClientRect && (css(container, "transform") !== "none" || relativeToNonStaticParent && css(container, "position") !== "static")) {
              var containerRect = container.getBoundingClientRect();
              top -= containerRect.top + parseInt(css(container, "border-top-width"));
              left -= containerRect.left + parseInt(css(container, "border-left-width"));
              bottom = top + elRect.height;
              right = left + elRect.width;
              break;
            }
          } while (container = container.parentNode);
        }
        if (undoScale && el !== window) {
          var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
          if (elMatrix) {
            top /= scaleY;
            left /= scaleX;
            width /= scaleX;
            height /= scaleY;
            bottom = top + height;
            right = left + width;
          }
        }
        return {
          top,
          left,
          bottom,
          right,
          width,
          height
        };
      }
      function isScrolledPast(el, elSide, parentSide) {
        var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
        while (parent) {
          var parentSideVal = getRect(parent)[parentSide], visible = void 0;
          if (parentSide === "top" || parentSide === "left") visible = elSideVal >= parentSideVal; else visible = elSideVal <= parentSideVal;
          if (!visible) return parent;
          if (parent === getWindowScrollingElement()) break;
          parent = getParentAutoScrollElement(parent, false);
        }
        return false;
      }
      function getChild(el, childNum, options, includeDragEl) {
        var currentChild = 0, i = 0, children = el.children;
        while (i < children.length) {
          if (children[i].style.display !== "none" && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
            if (currentChild === childNum) return children[i];
            currentChild++;
          }
          i++;
        }
        return null;
      }
      function lastChild(el, selector) {
        var last = el.lastElementChild;
        while (last && (last === Sortable.ghost || css(last, "display") === "none" || selector && !matches(last, selector))) last = last.previousElementSibling;
        return last || null;
      }
      function index(el, selector) {
        var index = 0;
        if (!el || !el.parentNode) return -1;
        while (el = el.previousElementSibling) if (el.nodeName.toUpperCase() !== "TEMPLATE" && el !== Sortable.clone && (!selector || matches(el, selector))) index++;
        return index;
      }
      function getRelativeScrollOffset(el) {
        var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
        if (el) do {
          var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
          offsetLeft += el.scrollLeft * scaleX;
          offsetTop += el.scrollTop * scaleY;
        } while (el !== winScroller && (el = el.parentNode));
        return [ offsetLeft, offsetTop ];
      }
      function indexOfObject(arr, obj) {
        for (var i in arr) {
          if (!arr.hasOwnProperty(i)) continue;
          for (var key in obj) if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
        }
        return -1;
      }
      function getParentAutoScrollElement(el, includeSelf) {
        if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
        var elem = el;
        var gotSelf = false;
        do {
          if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
            var elemCSS = css(elem);
            if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == "auto" || elemCSS.overflowX == "scroll") || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == "auto" || elemCSS.overflowY == "scroll")) {
              if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
              if (gotSelf || includeSelf) return elem;
              gotSelf = true;
            }
          }
        } while (elem = elem.parentNode);
        return getWindowScrollingElement();
      }
      function extend(dst, src) {
        if (dst && src) for (var key in src) if (src.hasOwnProperty(key)) dst[key] = src[key];
        return dst;
      }
      function isRectEqual(rect1, rect2) {
        return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
      }
      var _throttleTimeout;
      function throttle(callback, ms) {
        return function() {
          if (!_throttleTimeout) {
            var args = arguments, _this = this;
            if (args.length === 1) callback.call(_this, args[0]); else callback.apply(_this, args);
            _throttleTimeout = setTimeout((function() {
              _throttleTimeout = void 0;
            }), ms);
          }
        };
      }
      function cancelThrottle() {
        clearTimeout(_throttleTimeout);
        _throttleTimeout = void 0;
      }
      function scrollBy(el, x, y) {
        el.scrollLeft += x;
        el.scrollTop += y;
      }
      function clone(el) {
        var Polymer = window.Polymer;
        var $ = window.jQuery || window.Zepto;
        if (Polymer && Polymer.dom) return Polymer.dom(el).cloneNode(true); else if ($) return $(el).clone(true)[0]; else return el.cloneNode(true);
      }
      function setRect(el, rect) {
        css(el, "position", "absolute");
        css(el, "top", rect.top);
        css(el, "left", rect.left);
        css(el, "width", rect.width);
        css(el, "height", rect.height);
      }
      function unsetRect(el) {
        css(el, "position", "");
        css(el, "top", "");
        css(el, "left", "");
        css(el, "width", "");
        css(el, "height", "");
      }
      function getChildContainingRectFromElement(container, options, ghostEl) {
        var rect = {};
        Array.from(container.children).forEach((function(child) {
          var _rect$left, _rect$top, _rect$right, _rect$bottom;
          if (!closest(child, options.draggable, container, false) || child.animated || child === ghostEl) return;
          var childRect = getRect(child);
          rect.left = Math.min((_rect$left = rect.left) !== null && _rect$left !== void 0 ? _rect$left : 1 / 0, childRect.left);
          rect.top = Math.min((_rect$top = rect.top) !== null && _rect$top !== void 0 ? _rect$top : 1 / 0, childRect.top);
          rect.right = Math.max((_rect$right = rect.right) !== null && _rect$right !== void 0 ? _rect$right : -1 / 0, childRect.right);
          rect.bottom = Math.max((_rect$bottom = rect.bottom) !== null && _rect$bottom !== void 0 ? _rect$bottom : -1 / 0, childRect.bottom);
        }));
        rect.width = rect.right - rect.left;
        rect.height = rect.bottom - rect.top;
        rect.x = rect.left;
        rect.y = rect.top;
        return rect;
      }
      var expando = "Sortable" + (new Date).getTime();
      function AnimationStateManager() {
        var animationStates = [], animationCallbackId;
        return {
          captureAnimationState: function captureAnimationState() {
            animationStates = [];
            if (!this.options.animation) return;
            var children = [].slice.call(this.el.children);
            children.forEach((function(child) {
              if (css(child, "display") === "none" || child === Sortable.ghost) return;
              animationStates.push({
                target: child,
                rect: getRect(child)
              });
              var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);
              if (child.thisAnimationDuration) {
                var childMatrix = matrix(child, true);
                if (childMatrix) {
                  fromRect.top -= childMatrix.f;
                  fromRect.left -= childMatrix.e;
                }
              }
              child.fromRect = fromRect;
            }));
          },
          addAnimationState: function addAnimationState(state) {
            animationStates.push(state);
          },
          removeAnimationState: function removeAnimationState(target) {
            animationStates.splice(indexOfObject(animationStates, {
              target
            }), 1);
          },
          animateAll: function animateAll(callback) {
            var _this = this;
            if (!this.options.animation) {
              clearTimeout(animationCallbackId);
              if (typeof callback === "function") callback();
              return;
            }
            var animating = false, animationTime = 0;
            animationStates.forEach((function(state) {
              var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
              if (targetMatrix) {
                toRect.top -= targetMatrix.f;
                toRect.left -= targetMatrix.e;
              }
              target.toRect = toRect;
              if (target.thisAnimationDuration) if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
              if (!isRectEqual(toRect, fromRect)) {
                target.prevFromRect = fromRect;
                target.prevToRect = toRect;
                if (!time) time = _this.options.animation;
                _this.animate(target, animatingRect, toRect, time);
              }
              if (time) {
                animating = true;
                animationTime = Math.max(animationTime, time);
                clearTimeout(target.animationResetTimer);
                target.animationResetTimer = setTimeout((function() {
                  target.animationTime = 0;
                  target.prevFromRect = null;
                  target.fromRect = null;
                  target.prevToRect = null;
                  target.thisAnimationDuration = null;
                }), time);
                target.thisAnimationDuration = time;
              }
            }));
            clearTimeout(animationCallbackId);
            if (!animating) {
              if (typeof callback === "function") callback();
            } else animationCallbackId = setTimeout((function() {
              if (typeof callback === "function") callback();
            }), animationTime);
            animationStates = [];
          },
          animate: function animate(target, currentRect, toRect, duration) {
            if (duration) {
              css(target, "transition", "");
              css(target, "transform", "");
              var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
              target.animatingX = !!translateX;
              target.animatingY = !!translateY;
              css(target, "transform", "translate3d(" + translateX + "px," + translateY + "px,0)");
              this.forRepaintDummy = repaint(target);
              css(target, "transition", "transform " + duration + "ms" + (this.options.easing ? " " + this.options.easing : ""));
              css(target, "transform", "translate3d(0,0,0)");
              typeof target.animated === "number" && clearTimeout(target.animated);
              target.animated = setTimeout((function() {
                css(target, "transition", "");
                css(target, "transform", "");
                target.animated = false;
                target.animatingX = false;
                target.animatingY = false;
              }), duration);
            }
          }
        };
      }
      function repaint(target) {
        return target.offsetWidth;
      }
      function calculateRealTime(animatingRect, fromRect, toRect, options) {
        return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
      }
      var plugins = [];
      var defaults = {
        initializeByDefault: true
      };
      var PluginManager = {
        mount: function mount(plugin) {
          for (var option in defaults) if (defaults.hasOwnProperty(option) && !(option in plugin)) plugin[option] = defaults[option];
          plugins.forEach((function(p) {
            if (p.pluginName === plugin.pluginName) throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
          }));
          plugins.push(plugin);
        },
        pluginEvent: function pluginEvent(eventName, sortable, evt) {
          var _this = this;
          this.eventCanceled = false;
          evt.cancel = function() {
            _this.eventCanceled = true;
          };
          var eventNameGlobal = eventName + "Global";
          plugins.forEach((function(plugin) {
            if (!sortable[plugin.pluginName]) return;
            if (sortable[plugin.pluginName][eventNameGlobal]) sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
              sortable
            }, evt));
            if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) sortable[plugin.pluginName][eventName](_objectSpread2({
              sortable
            }, evt));
          }));
        },
        initializePlugins: function initializePlugins(sortable, el, defaults, options) {
          plugins.forEach((function(plugin) {
            var pluginName = plugin.pluginName;
            if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
            var initialized = new plugin(sortable, el, sortable.options);
            initialized.sortable = sortable;
            initialized.options = sortable.options;
            sortable[pluginName] = initialized;
            _extends(defaults, initialized.defaults);
          }));
          for (var option in sortable.options) {
            if (!sortable.options.hasOwnProperty(option)) continue;
            var modified = this.modifyOption(sortable, option, sortable.options[option]);
            if (typeof modified !== "undefined") sortable.options[option] = modified;
          }
        },
        getEventProperties: function getEventProperties(name, sortable) {
          var eventProperties = {};
          plugins.forEach((function(plugin) {
            if (typeof plugin.eventProperties !== "function") return;
            _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
          }));
          return eventProperties;
        },
        modifyOption: function modifyOption(sortable, name, value) {
          var modifiedValue;
          plugins.forEach((function(plugin) {
            if (!sortable[plugin.pluginName]) return;
            if (plugin.optionListeners && typeof plugin.optionListeners[name] === "function") modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
          }));
          return modifiedValue;
        }
      };
      function dispatchEvent(_ref) {
        var sortable = _ref.sortable, rootEl = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex = _ref.oldIndex, newIndex = _ref.newIndex, oldDraggableIndex = _ref.oldDraggableIndex, newDraggableIndex = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
        sortable = sortable || rootEl && rootEl[expando];
        if (!sortable) return;
        var evt, options = sortable.options, onName = "on" + name.charAt(0).toUpperCase() + name.substr(1);
        if (window.CustomEvent && !IE11OrLess && !Edge) evt = new CustomEvent(name, {
          bubbles: true,
          cancelable: true
        }); else {
          evt = document.createEvent("Event");
          evt.initEvent(name, true, true);
        }
        evt.to = toEl || rootEl;
        evt.from = fromEl || rootEl;
        evt.item = targetEl || rootEl;
        evt.clone = cloneEl;
        evt.oldIndex = oldIndex;
        evt.newIndex = newIndex;
        evt.oldDraggableIndex = oldDraggableIndex;
        evt.newDraggableIndex = newDraggableIndex;
        evt.originalEvent = originalEvent;
        evt.pullMode = putSortable ? putSortable.lastPutMode : void 0;
        var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
        for (var option in allEventProperties) evt[option] = allEventProperties[option];
        if (rootEl) rootEl.dispatchEvent(evt);
        if (options[onName]) options[onName].call(sortable, evt);
      }
      var _excluded = [ "evt" ];
      var pluginEvent = function pluginEvent(eventName, sortable) {
        var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, _excluded);
        PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
          dragEl,
          parentEl,
          ghostEl,
          rootEl,
          nextEl,
          lastDownEl,
          cloneEl,
          cloneHidden,
          dragStarted: moved,
          putSortable,
          activeSortable: Sortable.active,
          originalEvent,
          oldIndex,
          oldDraggableIndex,
          newIndex,
          newDraggableIndex,
          hideGhostForTarget: _hideGhostForTarget,
          unhideGhostForTarget: _unhideGhostForTarget,
          cloneNowHidden: function cloneNowHidden() {
            cloneHidden = true;
          },
          cloneNowShown: function cloneNowShown() {
            cloneHidden = false;
          },
          dispatchSortableEvent: function dispatchSortableEvent(name) {
            _dispatchEvent({
              sortable,
              name,
              originalEvent
            });
          }
        }, data));
      };
      function _dispatchEvent(info) {
        dispatchEvent(_objectSpread2({
          putSortable,
          cloneEl,
          targetEl: dragEl,
          rootEl,
          oldIndex,
          oldDraggableIndex,
          newIndex,
          newDraggableIndex
        }, info));
      }
      var dragEl, parentEl, ghostEl, rootEl, nextEl, lastDownEl, cloneEl, cloneHidden, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, activeGroup, putSortable, awaitingDragStarted = false, ignoreNextClick = false, sortables = [], tapEvt, touchEvt, lastDx, lastDy, tapDistanceLeft, tapDistanceTop, moved, lastTarget, lastDirection, pastFirstInvertThresh = false, isCircumstantialInvert = false, targetMoveDistance, ghostRelativeParent, ghostRelativeParentInitialScroll = [], _silent = false, savedInputChecked = [];
      var documentExists = typeof document !== "undefined", PositionGhostAbsolutely = IOS, CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float", supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div"), supportCssPointerEvents = function() {
        if (!documentExists) return;
        if (IE11OrLess) return false;
        var el = document.createElement("x");
        el.style.cssText = "pointer-events:auto";
        return el.style.pointerEvents === "auto";
      }(), _detectDirection = function _detectDirection(el, options) {
        var elCSS = css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options), child2 = getChild(el, 1, options), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
        if (elCSS.display === "flex") return elCSS.flexDirection === "column" || elCSS.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (elCSS.display === "grid") return elCSS.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== "none") {
          var touchingSideChild2 = firstChildCSS["float"] === "left" ? "left" : "right";
          return child2 && (secondChildCSS.clear === "both" || secondChildCSS.clear === touchingSideChild2) ? "vertical" : "horizontal";
        }
        return child1 && (firstChildCSS.display === "block" || firstChildCSS.display === "flex" || firstChildCSS.display === "table" || firstChildCSS.display === "grid" || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === "none" || child2 && elCSS[CSSFloatProperty] === "none" && firstChildWidth + secondChildWidth > elWidth) ? "vertical" : "horizontal";
      }, _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
        var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
        return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
      }, _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
        var ret;
        sortables.some((function(sortable) {
          var threshold = sortable[expando].options.emptyInsertThreshold;
          if (!threshold || lastChild(sortable)) return;
          var rect = getRect(sortable), insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
          if (insideHorizontally && insideVertically) return ret = sortable;
        }));
        return ret;
      }, _prepareGroup = function _prepareGroup(options) {
        function toFn(value, pull) {
          return function(to, from, dragEl, evt) {
            var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
            if (value == null && (pull || sameGroup)) return true; else if (value == null || value === false) return false; else if (pull && value === "clone") return value; else if (typeof value === "function") return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt); else {
              var otherGroup = (pull ? to : from).options.group.name;
              return value === true || typeof value === "string" && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
            }
          };
        }
        var group = {};
        var originalGroup = options.group;
        if (!originalGroup || _typeof(originalGroup) != "object") originalGroup = {
          name: originalGroup
        };
        group.name = originalGroup.name;
        group.checkPull = toFn(originalGroup.pull, true);
        group.checkPut = toFn(originalGroup.put);
        group.revertClone = originalGroup.revertClone;
        options.group = group;
      }, _hideGhostForTarget = function _hideGhostForTarget() {
        if (!supportCssPointerEvents && ghostEl) css(ghostEl, "display", "none");
      }, _unhideGhostForTarget = function _unhideGhostForTarget() {
        if (!supportCssPointerEvents && ghostEl) css(ghostEl, "display", "");
      };
      if (documentExists && !ChromeForAndroid) document.addEventListener("click", (function(evt) {
        if (ignoreNextClick) {
          evt.preventDefault();
          evt.stopPropagation && evt.stopPropagation();
          evt.stopImmediatePropagation && evt.stopImmediatePropagation();
          ignoreNextClick = false;
          return false;
        }
      }), true);
      var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
        if (dragEl) {
          evt = evt.touches ? evt.touches[0] : evt;
          var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
          if (nearest) {
            var event = {};
            for (var i in evt) if (evt.hasOwnProperty(i)) event[i] = evt[i];
            event.target = event.rootEl = nearest;
            event.preventDefault = void 0;
            event.stopPropagation = void 0;
            nearest[expando]._onDragOver(event);
          }
        }
      };
      var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
        if (dragEl) dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
      };
      function Sortable(el, options) {
        if (!(el && el.nodeType && el.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
        this.el = el;
        this.options = options = _extends({}, options);
        el[expando] = this;
        var defaults = {
          group: null,
          sort: true,
          disabled: false,
          store: null,
          handle: null,
          draggable: /^[uo]l$/i.test(el.nodeName) ? ">li" : ">*",
          swapThreshold: 1,
          invertSwap: false,
          invertedSwapThreshold: null,
          removeCloneOnHide: true,
          direction: function direction() {
            return _detectDirection(el, this.options);
          },
          ghostClass: "sortable-ghost",
          chosenClass: "sortable-chosen",
          dragClass: "sortable-drag",
          ignore: "a, img",
          filter: null,
          preventOnFilter: true,
          animation: 0,
          easing: null,
          setData: function setData(dataTransfer, dragEl) {
            dataTransfer.setData("Text", dragEl.textContent);
          },
          dropBubble: false,
          dragoverBubble: false,
          dataIdAttr: "data-id",
          delay: 0,
          delayOnTouchOnly: false,
          touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
          forceFallback: false,
          fallbackClass: "sortable-fallback",
          fallbackOnBody: false,
          fallbackTolerance: 0,
          fallbackOffset: {
            x: 0,
            y: 0
          },
          supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window && !Safari,
          emptyInsertThreshold: 5
        };
        PluginManager.initializePlugins(this, el, defaults);
        for (var name in defaults) !(name in options) && (options[name] = defaults[name]);
        _prepareGroup(options);
        for (var fn in this) if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
        this.nativeDraggable = options.forceFallback ? false : supportDraggable;
        if (this.nativeDraggable) this.options.touchStartThreshold = 1;
        if (options.supportPointer) on(el, "pointerdown", this._onTapStart); else {
          on(el, "mousedown", this._onTapStart);
          on(el, "touchstart", this._onTapStart);
        }
        if (this.nativeDraggable) {
          on(el, "dragover", this);
          on(el, "dragenter", this);
        }
        sortables.push(this.el);
        options.store && options.store.get && this.sort(options.store.get(this) || []);
        _extends(this, AnimationStateManager());
      }
      Sortable.prototype = {
        constructor: Sortable,
        _isOutsideThisEl: function _isOutsideThisEl(target) {
          if (!this.el.contains(target) && target !== this.el) lastTarget = null;
        },
        _getDirection: function _getDirection(evt, target) {
          return typeof this.options.direction === "function" ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
        },
        _onTapStart: function _onTapStart(evt) {
          if (!evt.cancelable) return;
          var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === "touch" && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
          _saveInputCheckedState(el);
          if (dragEl) return;
          if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) return;
          if (originalTarget.isContentEditable) return;
          if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === "SELECT") return;
          target = closest(target, options.draggable, el, false);
          if (target && target.animated) return;
          if (lastDownEl === target) return;
          oldIndex = index(target);
          oldDraggableIndex = index(target, options.draggable);
          if (typeof filter === "function") {
            if (filter.call(this, evt, target, this)) {
              _dispatchEvent({
                sortable: _this,
                rootEl: originalTarget,
                name: "filter",
                targetEl: target,
                toEl: el,
                fromEl: el
              });
              pluginEvent("filter", _this, {
                evt
              });
              preventOnFilter && evt.cancelable && evt.preventDefault();
              return;
            }
          } else if (filter) {
            filter = filter.split(",").some((function(criteria) {
              criteria = closest(originalTarget, criteria.trim(), el, false);
              if (criteria) {
                _dispatchEvent({
                  sortable: _this,
                  rootEl: criteria,
                  name: "filter",
                  targetEl: target,
                  fromEl: el,
                  toEl: el
                });
                pluginEvent("filter", _this, {
                  evt
                });
                return true;
              }
            }));
            if (filter) {
              preventOnFilter && evt.cancelable && evt.preventDefault();
              return;
            }
          }
          if (options.handle && !closest(originalTarget, options.handle, el, false)) return;
          this._prepareDragStart(evt, touch, target);
        },
        _prepareDragStart: function _prepareDragStart(evt, touch, target) {
          var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
          if (target && !dragEl && target.parentNode === el) {
            var dragRect = getRect(target);
            rootEl = el;
            dragEl = target;
            parentEl = dragEl.parentNode;
            nextEl = dragEl.nextSibling;
            lastDownEl = target;
            activeGroup = options.group;
            Sortable.dragged = dragEl;
            tapEvt = {
              target: dragEl,
              clientX: (touch || evt).clientX,
              clientY: (touch || evt).clientY
            };
            tapDistanceLeft = tapEvt.clientX - dragRect.left;
            tapDistanceTop = tapEvt.clientY - dragRect.top;
            this._lastX = (touch || evt).clientX;
            this._lastY = (touch || evt).clientY;
            dragEl.style["will-change"] = "all";
            dragStartFn = function dragStartFn() {
              pluginEvent("delayEnded", _this, {
                evt
              });
              if (Sortable.eventCanceled) {
                _this._onDrop();
                return;
              }
              _this._disableDelayedDragEvents();
              if (!FireFox && _this.nativeDraggable) dragEl.draggable = true;
              _this._triggerDragStart(evt, touch);
              _dispatchEvent({
                sortable: _this,
                name: "choose",
                originalEvent: evt
              });
              toggleClass(dragEl, options.chosenClass, true);
            };
            options.ignore.split(",").forEach((function(criteria) {
              find(dragEl, criteria.trim(), _disableDraggable);
            }));
            on(ownerDocument, "dragover", nearestEmptyInsertDetectEvent);
            on(ownerDocument, "mousemove", nearestEmptyInsertDetectEvent);
            on(ownerDocument, "touchmove", nearestEmptyInsertDetectEvent);
            on(ownerDocument, "mouseup", _this._onDrop);
            on(ownerDocument, "touchend", _this._onDrop);
            on(ownerDocument, "touchcancel", _this._onDrop);
            if (FireFox && this.nativeDraggable) {
              this.options.touchStartThreshold = 4;
              dragEl.draggable = true;
            }
            pluginEvent("delayStart", this, {
              evt
            });
            if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
              if (Sortable.eventCanceled) {
                this._onDrop();
                return;
              }
              on(ownerDocument, "mouseup", _this._disableDelayedDrag);
              on(ownerDocument, "touchend", _this._disableDelayedDrag);
              on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
              on(ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
              on(ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
              options.supportPointer && on(ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
              _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
            } else dragStartFn();
          }
        },
        _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(e) {
          var touch = e.touches ? e.touches[0] : e;
          if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) this._disableDelayedDrag();
        },
        _disableDelayedDrag: function _disableDelayedDrag() {
          dragEl && _disableDraggable(dragEl);
          clearTimeout(this._dragStartTimer);
          this._disableDelayedDragEvents();
        },
        _disableDelayedDragEvents: function _disableDelayedDragEvents() {
          var ownerDocument = this.el.ownerDocument;
          off(ownerDocument, "mouseup", this._disableDelayedDrag);
          off(ownerDocument, "touchend", this._disableDelayedDrag);
          off(ownerDocument, "touchcancel", this._disableDelayedDrag);
          off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
          off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
          off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
        },
        _triggerDragStart: function _triggerDragStart(evt, touch) {
          touch = touch || evt.pointerType == "touch" && evt;
          if (!this.nativeDraggable || touch) if (this.options.supportPointer) on(document, "pointermove", this._onTouchMove); else if (touch) on(document, "touchmove", this._onTouchMove); else on(document, "mousemove", this._onTouchMove); else {
            on(dragEl, "dragend", this);
            on(rootEl, "dragstart", this._onDragStart);
          }
          try {
            if (document.selection) _nextTick((function() {
              document.selection.empty();
            })); else window.getSelection().removeAllRanges();
          } catch (err) {}
        },
        _dragStarted: function _dragStarted(fallback, evt) {
          awaitingDragStarted = false;
          if (rootEl && dragEl) {
            pluginEvent("dragStarted", this, {
              evt
            });
            if (this.nativeDraggable) on(document, "dragover", _checkOutsideTargetEl);
            var options = this.options;
            !fallback && toggleClass(dragEl, options.dragClass, false);
            toggleClass(dragEl, options.ghostClass, true);
            Sortable.active = this;
            fallback && this._appendGhost();
            _dispatchEvent({
              sortable: this,
              name: "start",
              originalEvent: evt
            });
          } else this._nulling();
        },
        _emulateDragOver: function _emulateDragOver() {
          if (touchEvt) {
            this._lastX = touchEvt.clientX;
            this._lastY = touchEvt.clientY;
            _hideGhostForTarget();
            var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
            var parent = target;
            while (target && target.shadowRoot) {
              target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
              if (target === parent) break;
              parent = target;
            }
            dragEl.parentNode[expando]._isOutsideThisEl(target);
            if (parent) do {
              if (parent[expando]) {
                var inserted = void 0;
                inserted = parent[expando]._onDragOver({
                  clientX: touchEvt.clientX,
                  clientY: touchEvt.clientY,
                  target,
                  rootEl: parent
                });
                if (inserted && !this.options.dragoverBubble) break;
              }
              target = parent;
            } while (parent = parent.parentNode);
            _unhideGhostForTarget();
          }
        },
        _onTouchMove: function _onTouchMove(evt) {
          if (tapEvt) {
            var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);
            if (!Sortable.active && !awaitingDragStarted) {
              if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) return;
              this._onDragStart(evt, true);
            }
            if (ghostEl) {
              if (ghostMatrix) {
                ghostMatrix.e += dx - (lastDx || 0);
                ghostMatrix.f += dy - (lastDy || 0);
              } else ghostMatrix = {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: dx,
                f: dy
              };
              var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
              css(ghostEl, "webkitTransform", cssMatrix);
              css(ghostEl, "mozTransform", cssMatrix);
              css(ghostEl, "msTransform", cssMatrix);
              css(ghostEl, "transform", cssMatrix);
              lastDx = dx;
              lastDy = dy;
              touchEvt = touch;
            }
            evt.cancelable && evt.preventDefault();
          }
        },
        _appendGhost: function _appendGhost() {
          if (!ghostEl) {
            var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options = this.options;
            if (PositionGhostAbsolutely) {
              ghostRelativeParent = container;
              while (css(ghostRelativeParent, "position") === "static" && css(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document) ghostRelativeParent = ghostRelativeParent.parentNode;
              if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
                if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
                rect.top += ghostRelativeParent.scrollTop;
                rect.left += ghostRelativeParent.scrollLeft;
              } else ghostRelativeParent = getWindowScrollingElement();
              ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
            }
            ghostEl = dragEl.cloneNode(true);
            toggleClass(ghostEl, options.ghostClass, false);
            toggleClass(ghostEl, options.fallbackClass, true);
            toggleClass(ghostEl, options.dragClass, true);
            css(ghostEl, "transition", "");
            css(ghostEl, "transform", "");
            css(ghostEl, "box-sizing", "border-box");
            css(ghostEl, "margin", 0);
            css(ghostEl, "top", rect.top);
            css(ghostEl, "left", rect.left);
            css(ghostEl, "width", rect.width);
            css(ghostEl, "height", rect.height);
            css(ghostEl, "opacity", "0.8");
            css(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed");
            css(ghostEl, "zIndex", "100000");
            css(ghostEl, "pointerEvents", "none");
            Sortable.ghost = ghostEl;
            container.appendChild(ghostEl);
            css(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
          }
        },
        _onDragStart: function _onDragStart(evt, fallback) {
          var _this = this;
          var dataTransfer = evt.dataTransfer;
          var options = _this.options;
          pluginEvent("dragStart", this, {
            evt
          });
          if (Sortable.eventCanceled) {
            this._onDrop();
            return;
          }
          pluginEvent("setupClone", this);
          if (!Sortable.eventCanceled) {
            cloneEl = clone(dragEl);
            cloneEl.removeAttribute("id");
            cloneEl.draggable = false;
            cloneEl.style["will-change"] = "";
            this._hideClone();
            toggleClass(cloneEl, this.options.chosenClass, false);
            Sortable.clone = cloneEl;
          }
          _this.cloneId = _nextTick((function() {
            pluginEvent("clone", _this);
            if (Sortable.eventCanceled) return;
            if (!_this.options.removeCloneOnHide) rootEl.insertBefore(cloneEl, dragEl);
            _this._hideClone();
            _dispatchEvent({
              sortable: _this,
              name: "clone"
            });
          }));
          !fallback && toggleClass(dragEl, options.dragClass, true);
          if (fallback) {
            ignoreNextClick = true;
            _this._loopId = setInterval(_this._emulateDragOver, 50);
          } else {
            off(document, "mouseup", _this._onDrop);
            off(document, "touchend", _this._onDrop);
            off(document, "touchcancel", _this._onDrop);
            if (dataTransfer) {
              dataTransfer.effectAllowed = "move";
              options.setData && options.setData.call(_this, dataTransfer, dragEl);
            }
            on(document, "drop", _this);
            css(dragEl, "transform", "translateZ(0)");
          }
          awaitingDragStarted = true;
          _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
          on(document, "selectstart", _this);
          moved = true;
          if (Safari) css(document.body, "user-select", "none");
        },
        _onDragOver: function _onDragOver(evt) {
          var el = this.el, target = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
          if (_silent) return;
          function dragOverEvent(name, extra) {
            pluginEvent(name, _this, _objectSpread2({
              evt,
              isOwner,
              axis: vertical ? "vertical" : "horizontal",
              revert,
              dragRect,
              targetRect,
              canSort,
              fromSortable,
              target,
              completed,
              onMove: function onMove(target, after) {
                return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
              },
              changed
            }, extra));
          }
          function capture() {
            dragOverEvent("dragOverAnimationCapture");
            _this.captureAnimationState();
            if (_this !== fromSortable) fromSortable.captureAnimationState();
          }
          function completed(insertion) {
            dragOverEvent("dragOverCompleted", {
              insertion
            });
            if (insertion) {
              if (isOwner) activeSortable._hideClone(); else activeSortable._showClone(_this);
              if (_this !== fromSortable) {
                toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
                toggleClass(dragEl, options.ghostClass, true);
              }
              if (putSortable !== _this && _this !== Sortable.active) putSortable = _this; else if (_this === Sortable.active && putSortable) putSortable = null;
              if (fromSortable === _this) _this._ignoreWhileAnimating = target;
              _this.animateAll((function() {
                dragOverEvent("dragOverAnimationComplete");
                _this._ignoreWhileAnimating = null;
              }));
              if (_this !== fromSortable) {
                fromSortable.animateAll();
                fromSortable._ignoreWhileAnimating = null;
              }
            }
            if (target === dragEl && !dragEl.animated || target === el && !target.animated) lastTarget = null;
            if (!options.dragoverBubble && !evt.rootEl && target !== document) {
              dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
              !insertion && nearestEmptyInsertDetectEvent(evt);
            }
            !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
            return completedFired = true;
          }
          function changed() {
            newIndex = index(dragEl);
            newDraggableIndex = index(dragEl, options.draggable);
            _dispatchEvent({
              sortable: _this,
              name: "change",
              toEl: el,
              newIndex,
              newDraggableIndex,
              originalEvent: evt
            });
          }
          if (evt.preventDefault !== void 0) evt.cancelable && evt.preventDefault();
          target = closest(target, options.draggable, el, true);
          dragOverEvent("dragOver");
          if (Sortable.eventCanceled) return completedFired;
          if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) return completed(false);
          ignoreNextClick = false;
          if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
            vertical = this._getDirection(evt, target) === "vertical";
            dragRect = getRect(dragEl);
            dragOverEvent("dragOverValid");
            if (Sortable.eventCanceled) return completedFired;
            if (revert) {
              parentEl = rootEl;
              capture();
              this._hideClone();
              dragOverEvent("revert");
              if (!Sortable.eventCanceled) if (nextEl) rootEl.insertBefore(dragEl, nextEl); else rootEl.appendChild(dragEl);
              return completed(true);
            }
            var elLastChild = lastChild(el, options.draggable);
            if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
              if (elLastChild === dragEl) return completed(false);
              if (elLastChild && el === evt.target) target = elLastChild;
              if (target) targetRect = getRect(target);
              if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
                capture();
                if (elLastChild && elLastChild.nextSibling) el.insertBefore(dragEl, elLastChild.nextSibling); else el.appendChild(dragEl);
                parentEl = el;
                changed();
                return completed(true);
              }
            } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
              var firstChild = getChild(el, 0, options, true);
              if (firstChild === dragEl) return completed(false);
              target = firstChild;
              targetRect = getRect(target);
              if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
                capture();
                el.insertBefore(dragEl, firstChild);
                parentEl = el;
                changed();
                return completed(true);
              }
            } else if (target.parentNode === el) {
              targetRect = getRect(target);
              var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? "top" : "left", scrolledPastTop = isScrolledPast(target, "top", "top") || isScrolledPast(dragEl, "top", "top"), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
              if (lastTarget !== target) {
                targetBeforeFirstSwap = targetRect[side1];
                pastFirstInvertThresh = false;
                isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
              }
              direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
              var sibling;
              if (direction !== 0) {
                var dragIndex = index(dragEl);
                do {
                  dragIndex -= direction;
                  sibling = parentEl.children[dragIndex];
                } while (sibling && (css(sibling, "display") === "none" || sibling === ghostEl));
              }
              if (direction === 0 || sibling === target) return completed(false);
              lastTarget = target;
              lastDirection = direction;
              var nextSibling = target.nextElementSibling, after = false;
              after = direction === 1;
              var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
              if (moveVector !== false) {
                if (moveVector === 1 || moveVector === -1) after = moveVector === 1;
                _silent = true;
                setTimeout(_unsilent, 30);
                capture();
                if (after && !nextSibling) el.appendChild(dragEl); else target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
                if (scrolledPastTop) scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
                parentEl = dragEl.parentNode;
                if (targetBeforeFirstSwap !== void 0 && !isCircumstantialInvert) targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
                changed();
                return completed(true);
              }
            }
            if (el.contains(dragEl)) return completed(false);
          }
          return false;
        },
        _ignoreWhileAnimating: null,
        _offMoveEvents: function _offMoveEvents() {
          off(document, "mousemove", this._onTouchMove);
          off(document, "touchmove", this._onTouchMove);
          off(document, "pointermove", this._onTouchMove);
          off(document, "dragover", nearestEmptyInsertDetectEvent);
          off(document, "mousemove", nearestEmptyInsertDetectEvent);
          off(document, "touchmove", nearestEmptyInsertDetectEvent);
        },
        _offUpEvents: function _offUpEvents() {
          var ownerDocument = this.el.ownerDocument;
          off(ownerDocument, "mouseup", this._onDrop);
          off(ownerDocument, "touchend", this._onDrop);
          off(ownerDocument, "pointerup", this._onDrop);
          off(ownerDocument, "touchcancel", this._onDrop);
          off(document, "selectstart", this);
        },
        _onDrop: function _onDrop(evt) {
          var el = this.el, options = this.options;
          newIndex = index(dragEl);
          newDraggableIndex = index(dragEl, options.draggable);
          pluginEvent("drop", this, {
            evt
          });
          parentEl = dragEl && dragEl.parentNode;
          newIndex = index(dragEl);
          newDraggableIndex = index(dragEl, options.draggable);
          if (Sortable.eventCanceled) {
            this._nulling();
            return;
          }
          awaitingDragStarted = false;
          isCircumstantialInvert = false;
          pastFirstInvertThresh = false;
          clearInterval(this._loopId);
          clearTimeout(this._dragStartTimer);
          _cancelNextTick(this.cloneId);
          _cancelNextTick(this._dragStartId);
          if (this.nativeDraggable) {
            off(document, "drop", this);
            off(el, "dragstart", this._onDragStart);
          }
          this._offMoveEvents();
          this._offUpEvents();
          if (Safari) css(document.body, "user-select", "");
          css(dragEl, "transform", "");
          if (evt) {
            if (moved) {
              evt.cancelable && evt.preventDefault();
              !options.dropBubble && evt.stopPropagation();
            }
            ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
            if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
            if (dragEl) {
              if (this.nativeDraggable) off(dragEl, "dragend", this);
              _disableDraggable(dragEl);
              dragEl.style["will-change"] = "";
              if (moved && !awaitingDragStarted) toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
              toggleClass(dragEl, this.options.chosenClass, false);
              _dispatchEvent({
                sortable: this,
                name: "unchoose",
                toEl: parentEl,
                newIndex: null,
                newDraggableIndex: null,
                originalEvent: evt
              });
              if (rootEl !== parentEl) {
                if (newIndex >= 0) {
                  _dispatchEvent({
                    rootEl: parentEl,
                    name: "add",
                    toEl: parentEl,
                    fromEl: rootEl,
                    originalEvent: evt
                  });
                  _dispatchEvent({
                    sortable: this,
                    name: "remove",
                    toEl: parentEl,
                    originalEvent: evt
                  });
                  _dispatchEvent({
                    rootEl: parentEl,
                    name: "sort",
                    toEl: parentEl,
                    fromEl: rootEl,
                    originalEvent: evt
                  });
                  _dispatchEvent({
                    sortable: this,
                    name: "sort",
                    toEl: parentEl,
                    originalEvent: evt
                  });
                }
                putSortable && putSortable.save();
              } else if (newIndex !== oldIndex) if (newIndex >= 0) {
                _dispatchEvent({
                  sortable: this,
                  name: "update",
                  toEl: parentEl,
                  originalEvent: evt
                });
                _dispatchEvent({
                  sortable: this,
                  name: "sort",
                  toEl: parentEl,
                  originalEvent: evt
                });
              }
              if (Sortable.active) {
                if (newIndex == null || newIndex === -1) {
                  newIndex = oldIndex;
                  newDraggableIndex = oldDraggableIndex;
                }
                _dispatchEvent({
                  sortable: this,
                  name: "end",
                  toEl: parentEl,
                  originalEvent: evt
                });
                this.save();
              }
            }
          }
          this._nulling();
        },
        _nulling: function _nulling() {
          pluginEvent("nulling", this);
          rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
          savedInputChecked.forEach((function(el) {
            el.checked = true;
          }));
          savedInputChecked.length = lastDx = lastDy = 0;
        },
        handleEvent: function handleEvent(evt) {
          switch (evt.type) {
           case "drop":
           case "dragend":
            this._onDrop(evt);
            break;

           case "dragenter":
           case "dragover":
            if (dragEl) {
              this._onDragOver(evt);
              _globalDragOver(evt);
            }
            break;

           case "selectstart":
            evt.preventDefault();
            break;
          }
        },
        toArray: function toArray() {
          var order = [], el, children = this.el.children, i = 0, n = children.length, options = this.options;
          for (;i < n; i++) {
            el = children[i];
            if (closest(el, options.draggable, this.el, false)) order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
          }
          return order;
        },
        sort: function sort(order, useAnimation) {
          var items = {}, rootEl = this.el;
          this.toArray().forEach((function(id, i) {
            var el = rootEl.children[i];
            if (closest(el, this.options.draggable, rootEl, false)) items[id] = el;
          }), this);
          useAnimation && this.captureAnimationState();
          order.forEach((function(id) {
            if (items[id]) {
              rootEl.removeChild(items[id]);
              rootEl.appendChild(items[id]);
            }
          }));
          useAnimation && this.animateAll();
        },
        save: function save() {
          var store = this.options.store;
          store && store.set && store.set(this);
        },
        closest: function closest$1(el, selector) {
          return closest(el, selector || this.options.draggable, this.el, false);
        },
        option: function option(name, value) {
          var options = this.options;
          if (value === void 0) return options[name]; else {
            var modifiedValue = PluginManager.modifyOption(this, name, value);
            if (typeof modifiedValue !== "undefined") options[name] = modifiedValue; else options[name] = value;
            if (name === "group") _prepareGroup(options);
          }
        },
        destroy: function destroy() {
          pluginEvent("destroy", this);
          var el = this.el;
          el[expando] = null;
          off(el, "mousedown", this._onTapStart);
          off(el, "touchstart", this._onTapStart);
          off(el, "pointerdown", this._onTapStart);
          if (this.nativeDraggable) {
            off(el, "dragover", this);
            off(el, "dragenter", this);
          }
          Array.prototype.forEach.call(el.querySelectorAll("[draggable]"), (function(el) {
            el.removeAttribute("draggable");
          }));
          this._onDrop();
          this._disableDelayedDragEvents();
          sortables.splice(sortables.indexOf(this.el), 1);
          this.el = el = null;
        },
        _hideClone: function _hideClone() {
          if (!cloneHidden) {
            pluginEvent("hideClone", this);
            if (Sortable.eventCanceled) return;
            css(cloneEl, "display", "none");
            if (this.options.removeCloneOnHide && cloneEl.parentNode) cloneEl.parentNode.removeChild(cloneEl);
            cloneHidden = true;
          }
        },
        _showClone: function _showClone(putSortable) {
          if (putSortable.lastPutMode !== "clone") {
            this._hideClone();
            return;
          }
          if (cloneHidden) {
            pluginEvent("showClone", this);
            if (Sortable.eventCanceled) return;
            if (dragEl.parentNode == rootEl && !this.options.group.revertClone) rootEl.insertBefore(cloneEl, dragEl); else if (nextEl) rootEl.insertBefore(cloneEl, nextEl); else rootEl.appendChild(cloneEl);
            if (this.options.group.revertClone) this.animate(dragEl, cloneEl);
            css(cloneEl, "display", "");
            cloneHidden = false;
          }
        }
      };
      function _globalDragOver(evt) {
        if (evt.dataTransfer) evt.dataTransfer.dropEffect = "move";
        evt.cancelable && evt.preventDefault();
      }
      function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
        var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal;
        if (window.CustomEvent && !IE11OrLess && !Edge) evt = new CustomEvent("move", {
          bubbles: true,
          cancelable: true
        }); else {
          evt = document.createEvent("Event");
          evt.initEvent("move", true, true);
        }
        evt.to = toEl;
        evt.from = fromEl;
        evt.dragged = dragEl;
        evt.draggedRect = dragRect;
        evt.related = targetEl || toEl;
        evt.relatedRect = targetRect || getRect(toEl);
        evt.willInsertAfter = willInsertAfter;
        evt.originalEvent = originalEvent;
        fromEl.dispatchEvent(evt);
        if (onMoveFn) retVal = onMoveFn.call(sortable, evt, originalEvent);
        return retVal;
      }
      function _disableDraggable(el) {
        el.draggable = false;
      }
      function _unsilent() {
        _silent = false;
      }
      function _ghostIsFirst(evt, vertical, sortable) {
        var firstElRect = getRect(getChild(sortable.el, 0, sortable.options, true));
        var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
        var spacer = 10;
        return vertical ? evt.clientX < childContainingRect.left - spacer || evt.clientY < firstElRect.top && evt.clientX < firstElRect.right : evt.clientY < childContainingRect.top - spacer || evt.clientY < firstElRect.bottom && evt.clientX < firstElRect.left;
      }
      function _ghostIsLast(evt, vertical, sortable) {
        var lastElRect = getRect(lastChild(sortable.el, sortable.options.draggable));
        var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
        var spacer = 10;
        return vertical ? evt.clientX > childContainingRect.right + spacer || evt.clientY > lastElRect.bottom && evt.clientX > lastElRect.left : evt.clientY > childContainingRect.bottom + spacer || evt.clientX > lastElRect.right && evt.clientY > lastElRect.top;
      }
      function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
        var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
        if (!invertSwap) if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
          if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) pastFirstInvertThresh = true;
          if (!pastFirstInvertThresh) {
            if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance : mouseOnAxis > targetS2 - targetMoveDistance) return -lastDirection;
          } else invert = true;
        } else if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) return _getInsertDirection(target);
        invert = invert || invertSwap;
        if (invert) if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
        return 0;
      }
      function _getInsertDirection(target) {
        if (index(dragEl) < index(target)) return 1; else return -1;
      }
      function _generateId(el) {
        var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
        while (i--) sum += str.charCodeAt(i);
        return sum.toString(36);
      }
      function _saveInputCheckedState(root) {
        savedInputChecked.length = 0;
        var inputs = root.getElementsByTagName("input");
        var idx = inputs.length;
        while (idx--) {
          var el = inputs[idx];
          el.checked && savedInputChecked.push(el);
        }
      }
      function _nextTick(fn) {
        return setTimeout(fn, 0);
      }
      function _cancelNextTick(id) {
        return clearTimeout(id);
      }
      if (documentExists) on(document, "touchmove", (function(evt) {
        if ((Sortable.active || awaitingDragStarted) && evt.cancelable) evt.preventDefault();
      }));
      Sortable.utils = {
        on,
        off,
        css,
        find,
        is: function is(el, selector) {
          return !!closest(el, selector, el, false);
        },
        extend,
        throttle,
        closest,
        toggleClass,
        clone,
        index,
        nextTick: _nextTick,
        cancelNextTick: _cancelNextTick,
        detectDirection: _detectDirection,
        getChild
      };
      Sortable.get = function(element) {
        return element[expando];
      };
      Sortable.mount = function() {
        for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) plugins[_key] = arguments[_key];
        if (plugins[0].constructor === Array) plugins = plugins[0];
        plugins.forEach((function(plugin) {
          if (!plugin.prototype || !plugin.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
          if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
          PluginManager.mount(plugin);
        }));
      };
      Sortable.create = function(el, options) {
        return new Sortable(el, options);
      };
      Sortable.version = version;
      var autoScrolls = [], scrollEl, scrollRootEl, scrolling = false, lastAutoScrollX, lastAutoScrollY, touchEvt$1, pointerElemChangedInterval;
      function AutoScrollPlugin() {
        function AutoScroll() {
          this.defaults = {
            scroll: true,
            forceAutoScrollFallback: false,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: true
          };
          for (var fn in this) if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
        }
        AutoScroll.prototype = {
          dragStarted: function dragStarted(_ref) {
            var originalEvent = _ref.originalEvent;
            if (this.sortable.nativeDraggable) on(document, "dragover", this._handleAutoScroll); else if (this.options.supportPointer) on(document, "pointermove", this._handleFallbackAutoScroll); else if (originalEvent.touches) on(document, "touchmove", this._handleFallbackAutoScroll); else on(document, "mousemove", this._handleFallbackAutoScroll);
          },
          dragOverCompleted: function dragOverCompleted(_ref2) {
            var originalEvent = _ref2.originalEvent;
            if (!this.options.dragOverBubble && !originalEvent.rootEl) this._handleAutoScroll(originalEvent);
          },
          drop: function drop() {
            if (this.sortable.nativeDraggable) off(document, "dragover", this._handleAutoScroll); else {
              off(document, "pointermove", this._handleFallbackAutoScroll);
              off(document, "touchmove", this._handleFallbackAutoScroll);
              off(document, "mousemove", this._handleFallbackAutoScroll);
            }
            clearPointerElemChangedInterval();
            clearAutoScrolls();
            cancelThrottle();
          },
          nulling: function nulling() {
            touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
            autoScrolls.length = 0;
          },
          _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
            this._handleAutoScroll(evt, true);
          },
          _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
            var _this = this;
            var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
            touchEvt$1 = evt;
            if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
              autoScroll(evt, this.options, elem, fallback);
              var ogElemScroller = getParentAutoScrollElement(elem, true);
              if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
                pointerElemChangedInterval && clearPointerElemChangedInterval();
                pointerElemChangedInterval = setInterval((function() {
                  var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
                  if (newElem !== ogElemScroller) {
                    ogElemScroller = newElem;
                    clearAutoScrolls();
                  }
                  autoScroll(evt, _this.options, newElem, fallback);
                }), 10);
                lastAutoScrollX = x;
                lastAutoScrollY = y;
              }
            } else {
              if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
                clearAutoScrolls();
                return;
              }
              autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
            }
          }
        };
        return _extends(AutoScroll, {
          pluginName: "scroll",
          initializeByDefault: true
        });
      }
      function clearAutoScrolls() {
        autoScrolls.forEach((function(autoScroll) {
          clearInterval(autoScroll.pid);
        }));
        autoScrolls = [];
      }
      function clearPointerElemChangedInterval() {
        clearInterval(pointerElemChangedInterval);
      }
      var autoScroll = throttle((function(evt, options, rootEl, isFallback) {
        if (!options.scroll) return;
        var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = getWindowScrollingElement();
        var scrollThisInstance = false, scrollCustomFn;
        if (scrollRootEl !== rootEl) {
          scrollRootEl = rootEl;
          clearAutoScrolls();
          scrollEl = options.scroll;
          scrollCustomFn = options.scrollFn;
          if (scrollEl === true) scrollEl = getParentAutoScrollElement(rootEl, true);
        }
        var layersOut = 0;
        var currentParent = scrollEl;
        do {
          var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
          if (el === winScroller) {
            canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll" || elCSS.overflowX === "visible");
            canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll" || elCSS.overflowY === "visible");
          } else {
            canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll");
            canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll");
          }
          var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
          var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
          if (!autoScrolls[layersOut]) for (var i = 0; i <= layersOut; i++) if (!autoScrolls[i]) autoScrolls[i] = {};
          if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
            autoScrolls[layersOut].el = el;
            autoScrolls[layersOut].vx = vx;
            autoScrolls[layersOut].vy = vy;
            clearInterval(autoScrolls[layersOut].pid);
            if (vx != 0 || vy != 0) {
              scrollThisInstance = true;
              autoScrolls[layersOut].pid = setInterval(function() {
                if (isFallback && this.layer === 0) Sortable.active._onTouchMove(touchEvt$1);
                var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
                var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
                if (typeof scrollCustomFn === "function") if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== "continue") return;
                scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
              }.bind({
                layer: layersOut
              }), 24);
            }
          }
          layersOut++;
        } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
        scrolling = scrollThisInstance;
      }), 30);
      var drop = function drop(_ref) {
        var originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, dragEl = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
        if (!originalEvent) return;
        var toSortable = putSortable || activeSortable;
        hideGhostForTarget();
        var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
        var target = document.elementFromPoint(touch.clientX, touch.clientY);
        unhideGhostForTarget();
        if (toSortable && !toSortable.el.contains(target)) {
          dispatchSortableEvent("spill");
          this.onSpill({
            dragEl,
            putSortable
          });
        }
      };
      function Revert() {}
      Revert.prototype = {
        startIndex: null,
        dragStart: function dragStart(_ref2) {
          var oldDraggableIndex = _ref2.oldDraggableIndex;
          this.startIndex = oldDraggableIndex;
        },
        onSpill: function onSpill(_ref3) {
          var dragEl = _ref3.dragEl, putSortable = _ref3.putSortable;
          this.sortable.captureAnimationState();
          if (putSortable) putSortable.captureAnimationState();
          var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
          if (nextSibling) this.sortable.el.insertBefore(dragEl, nextSibling); else this.sortable.el.appendChild(dragEl);
          this.sortable.animateAll();
          if (putSortable) putSortable.animateAll();
        },
        drop
      };
      _extends(Revert, {
        pluginName: "revertOnSpill"
      });
      function Remove() {}
      Remove.prototype = {
        onSpill: function onSpill(_ref4) {
          var dragEl = _ref4.dragEl, putSortable = _ref4.putSortable;
          var parentSortable = putSortable || this.sortable;
          parentSortable.captureAnimationState();
          dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
          parentSortable.animateAll();
        },
        drop
      };
      _extends(Remove, {
        pluginName: "removeOnSpill"
      });
      var lastSwapEl;
      function SwapPlugin() {
        function Swap() {
          this.defaults = {
            swapClass: "sortable-swap-highlight"
          };
        }
        Swap.prototype = {
          dragStart: function dragStart(_ref) {
            var dragEl = _ref.dragEl;
            lastSwapEl = dragEl;
          },
          dragOverValid: function dragOverValid(_ref2) {
            var completed = _ref2.completed, target = _ref2.target, onMove = _ref2.onMove, activeSortable = _ref2.activeSortable, changed = _ref2.changed, cancel = _ref2.cancel;
            if (!activeSortable.options.swap) return;
            var el = this.sortable.el, options = this.options;
            if (target && target !== el) {
              var prevSwapEl = lastSwapEl;
              if (onMove(target) !== false) {
                toggleClass(target, options.swapClass, true);
                lastSwapEl = target;
              } else lastSwapEl = null;
              if (prevSwapEl && prevSwapEl !== lastSwapEl) toggleClass(prevSwapEl, options.swapClass, false);
            }
            changed();
            completed(true);
            cancel();
          },
          drop: function drop(_ref3) {
            var activeSortable = _ref3.activeSortable, putSortable = _ref3.putSortable, dragEl = _ref3.dragEl;
            var toSortable = putSortable || this.sortable;
            var options = this.options;
            lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);
            if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) if (dragEl !== lastSwapEl) {
              toSortable.captureAnimationState();
              if (toSortable !== activeSortable) activeSortable.captureAnimationState();
              swapNodes(dragEl, lastSwapEl);
              toSortable.animateAll();
              if (toSortable !== activeSortable) activeSortable.animateAll();
            }
          },
          nulling: function nulling() {
            lastSwapEl = null;
          }
        };
        return _extends(Swap, {
          pluginName: "swap",
          eventProperties: function eventProperties() {
            return {
              swapItem: lastSwapEl
            };
          }
        });
      }
      function swapNodes(n1, n2) {
        var p1 = n1.parentNode, p2 = n2.parentNode, i1, i2;
        if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
        i1 = index(n1);
        i2 = index(n2);
        if (p1.isEqualNode(p2) && i1 < i2) i2++;
        p1.insertBefore(n2, p1.children[i1]);
        p2.insertBefore(n1, p2.children[i2]);
      }
      var multiDragElements = null && [], multiDragClones = null && [], lastMultiDragSelect, multiDragSortable, initialFolding = false, folding = false, dragStarted = false, dragEl$1, clonesFromRect, clonesHidden;
      function MultiDragPlugin() {
        function MultiDrag(sortable) {
          for (var fn in this) if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
          if (!sortable.options.avoidImplicitDeselect) if (sortable.options.supportPointer) on(document, "pointerup", this._deselectMultiDrag); else {
            on(document, "mouseup", this._deselectMultiDrag);
            on(document, "touchend", this._deselectMultiDrag);
          }
          on(document, "keydown", this._checkKeyDown);
          on(document, "keyup", this._checkKeyUp);
          this.defaults = {
            selectedClass: "sortable-selected",
            multiDragKey: null,
            avoidImplicitDeselect: false,
            setData: function setData(dataTransfer, dragEl) {
              var data = "";
              if (multiDragElements.length && multiDragSortable === sortable) multiDragElements.forEach((function(multiDragElement, i) {
                data += (!i ? "" : ", ") + multiDragElement.textContent;
              })); else data = dragEl.textContent;
              dataTransfer.setData("Text", data);
            }
          };
        }
        MultiDrag.prototype = {
          multiDragKeyDown: false,
          isMultiDrag: false,
          delayStartGlobal: function delayStartGlobal(_ref) {
            var dragged = _ref.dragEl;
            dragEl$1 = dragged;
          },
          delayEnded: function delayEnded() {
            this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
          },
          setupClone: function setupClone(_ref2) {
            var sortable = _ref2.sortable, cancel = _ref2.cancel;
            if (!this.isMultiDrag) return;
            for (var i = 0; i < multiDragElements.length; i++) {
              multiDragClones.push(clone(multiDragElements[i]));
              multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
              multiDragClones[i].draggable = false;
              multiDragClones[i].style["will-change"] = "";
              toggleClass(multiDragClones[i], this.options.selectedClass, false);
              multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
            }
            sortable._hideClone();
            cancel();
          },
          clone: function clone(_ref3) {
            var sortable = _ref3.sortable, rootEl = _ref3.rootEl, dispatchSortableEvent = _ref3.dispatchSortableEvent, cancel = _ref3.cancel;
            if (!this.isMultiDrag) return;
            if (!this.options.removeCloneOnHide) if (multiDragElements.length && multiDragSortable === sortable) {
              insertMultiDragClones(true, rootEl);
              dispatchSortableEvent("clone");
              cancel();
            }
          },
          showClone: function showClone(_ref4) {
            var cloneNowShown = _ref4.cloneNowShown, rootEl = _ref4.rootEl, cancel = _ref4.cancel;
            if (!this.isMultiDrag) return;
            insertMultiDragClones(false, rootEl);
            multiDragClones.forEach((function(clone) {
              css(clone, "display", "");
            }));
            cloneNowShown();
            clonesHidden = false;
            cancel();
          },
          hideClone: function hideClone(_ref5) {
            var _this = this;
            var sortable = _ref5.sortable, cloneNowHidden = _ref5.cloneNowHidden, cancel = _ref5.cancel;
            if (!this.isMultiDrag) return;
            multiDragClones.forEach((function(clone) {
              css(clone, "display", "none");
              if (_this.options.removeCloneOnHide && clone.parentNode) clone.parentNode.removeChild(clone);
            }));
            cloneNowHidden();
            clonesHidden = true;
            cancel();
          },
          dragStartGlobal: function dragStartGlobal(_ref6) {
            var sortable = _ref6.sortable;
            if (!this.isMultiDrag && multiDragSortable) multiDragSortable.multiDrag._deselectMultiDrag();
            multiDragElements.forEach((function(multiDragElement) {
              multiDragElement.sortableIndex = index(multiDragElement);
            }));
            multiDragElements = multiDragElements.sort((function(a, b) {
              return a.sortableIndex - b.sortableIndex;
            }));
            dragStarted = true;
          },
          dragStarted: function dragStarted(_ref7) {
            var _this2 = this;
            var sortable = _ref7.sortable;
            if (!this.isMultiDrag) return;
            if (this.options.sort) {
              sortable.captureAnimationState();
              if (this.options.animation) {
                multiDragElements.forEach((function(multiDragElement) {
                  if (multiDragElement === dragEl$1) return;
                  css(multiDragElement, "position", "absolute");
                }));
                var dragRect = getRect(dragEl$1, false, true, true);
                multiDragElements.forEach((function(multiDragElement) {
                  if (multiDragElement === dragEl$1) return;
                  setRect(multiDragElement, dragRect);
                }));
                folding = true;
                initialFolding = true;
              }
            }
            sortable.animateAll((function() {
              folding = false;
              initialFolding = false;
              if (_this2.options.animation) multiDragElements.forEach((function(multiDragElement) {
                unsetRect(multiDragElement);
              }));
              if (_this2.options.sort) removeMultiDragElements();
            }));
          },
          dragOver: function dragOver(_ref8) {
            var target = _ref8.target, completed = _ref8.completed, cancel = _ref8.cancel;
            if (folding && ~multiDragElements.indexOf(target)) {
              completed(false);
              cancel();
            }
          },
          revert: function revert(_ref9) {
            var fromSortable = _ref9.fromSortable, rootEl = _ref9.rootEl, sortable = _ref9.sortable, dragRect = _ref9.dragRect;
            if (multiDragElements.length > 1) {
              multiDragElements.forEach((function(multiDragElement) {
                sortable.addAnimationState({
                  target: multiDragElement,
                  rect: folding ? getRect(multiDragElement) : dragRect
                });
                unsetRect(multiDragElement);
                multiDragElement.fromRect = dragRect;
                fromSortable.removeAnimationState(multiDragElement);
              }));
              folding = false;
              insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
            }
          },
          dragOverCompleted: function dragOverCompleted(_ref10) {
            var sortable = _ref10.sortable, isOwner = _ref10.isOwner, insertion = _ref10.insertion, activeSortable = _ref10.activeSortable, parentEl = _ref10.parentEl, putSortable = _ref10.putSortable;
            var options = this.options;
            if (insertion) {
              if (isOwner) activeSortable._hideClone();
              initialFolding = false;
              if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
                var dragRectAbsolute = getRect(dragEl$1, false, true, true);
                multiDragElements.forEach((function(multiDragElement) {
                  if (multiDragElement === dragEl$1) return;
                  setRect(multiDragElement, dragRectAbsolute);
                  parentEl.appendChild(multiDragElement);
                }));
                folding = true;
              }
              if (!isOwner) {
                if (!folding) removeMultiDragElements();
                if (multiDragElements.length > 1) {
                  var clonesHiddenBefore = clonesHidden;
                  activeSortable._showClone(sortable);
                  if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) multiDragClones.forEach((function(clone) {
                    activeSortable.addAnimationState({
                      target: clone,
                      rect: clonesFromRect
                    });
                    clone.fromRect = clonesFromRect;
                    clone.thisAnimationDuration = null;
                  }));
                } else activeSortable._showClone(sortable);
              }
            }
          },
          dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
            var dragRect = _ref11.dragRect, isOwner = _ref11.isOwner, activeSortable = _ref11.activeSortable;
            multiDragElements.forEach((function(multiDragElement) {
              multiDragElement.thisAnimationDuration = null;
            }));
            if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
              clonesFromRect = _extends({}, dragRect);
              var dragMatrix = matrix(dragEl$1, true);
              clonesFromRect.top -= dragMatrix.f;
              clonesFromRect.left -= dragMatrix.e;
            }
          },
          dragOverAnimationComplete: function dragOverAnimationComplete() {
            if (folding) {
              folding = false;
              removeMultiDragElements();
            }
          },
          drop: function drop(_ref12) {
            var evt = _ref12.originalEvent, rootEl = _ref12.rootEl, parentEl = _ref12.parentEl, sortable = _ref12.sortable, dispatchSortableEvent = _ref12.dispatchSortableEvent, oldIndex = _ref12.oldIndex, putSortable = _ref12.putSortable;
            var toSortable = putSortable || this.sortable;
            if (!evt) return;
            var options = this.options, children = parentEl.children;
            if (!dragStarted) {
              if (options.multiDragKey && !this.multiDragKeyDown) this._deselectMultiDrag();
              toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));
              if (!~multiDragElements.indexOf(dragEl$1)) {
                multiDragElements.push(dragEl$1);
                dispatchEvent({
                  sortable,
                  rootEl,
                  name: "select",
                  targetEl: dragEl$1,
                  originalEvent: evt
                });
                if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
                  var lastIndex = index(lastMultiDragSelect), currentIndex = index(dragEl$1);
                  if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
                    var n, i;
                    if (currentIndex > lastIndex) {
                      i = lastIndex;
                      n = currentIndex;
                    } else {
                      i = currentIndex;
                      n = lastIndex + 1;
                    }
                    for (;i < n; i++) {
                      if (~multiDragElements.indexOf(children[i])) continue;
                      toggleClass(children[i], options.selectedClass, true);
                      multiDragElements.push(children[i]);
                      dispatchEvent({
                        sortable,
                        rootEl,
                        name: "select",
                        targetEl: children[i],
                        originalEvent: evt
                      });
                    }
                  }
                } else lastMultiDragSelect = dragEl$1;
                multiDragSortable = toSortable;
              } else {
                multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
                lastMultiDragSelect = null;
                dispatchEvent({
                  sortable,
                  rootEl,
                  name: "deselect",
                  targetEl: dragEl$1,
                  originalEvent: evt
                });
              }
            }
            if (dragStarted && this.isMultiDrag) {
              folding = false;
              if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
                var dragRect = getRect(dragEl$1), multiDragIndex = index(dragEl$1, ":not(." + this.options.selectedClass + ")");
                if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
                toSortable.captureAnimationState();
                if (!initialFolding) {
                  if (options.animation) {
                    dragEl$1.fromRect = dragRect;
                    multiDragElements.forEach((function(multiDragElement) {
                      multiDragElement.thisAnimationDuration = null;
                      if (multiDragElement !== dragEl$1) {
                        var rect = folding ? getRect(multiDragElement) : dragRect;
                        multiDragElement.fromRect = rect;
                        toSortable.addAnimationState({
                          target: multiDragElement,
                          rect
                        });
                      }
                    }));
                  }
                  removeMultiDragElements();
                  multiDragElements.forEach((function(multiDragElement) {
                    if (children[multiDragIndex]) parentEl.insertBefore(multiDragElement, children[multiDragIndex]); else parentEl.appendChild(multiDragElement);
                    multiDragIndex++;
                  }));
                  if (oldIndex === index(dragEl$1)) {
                    var update = false;
                    multiDragElements.forEach((function(multiDragElement) {
                      if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                        update = true;
                        return;
                      }
                    }));
                    if (update) {
                      dispatchSortableEvent("update");
                      dispatchSortableEvent("sort");
                    }
                  }
                }
                multiDragElements.forEach((function(multiDragElement) {
                  unsetRect(multiDragElement);
                }));
                toSortable.animateAll();
              }
              multiDragSortable = toSortable;
            }
            if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") multiDragClones.forEach((function(clone) {
              clone.parentNode && clone.parentNode.removeChild(clone);
            }));
          },
          nullingGlobal: function nullingGlobal() {
            this.isMultiDrag = dragStarted = false;
            multiDragClones.length = 0;
          },
          destroyGlobal: function destroyGlobal() {
            this._deselectMultiDrag();
            off(document, "pointerup", this._deselectMultiDrag);
            off(document, "mouseup", this._deselectMultiDrag);
            off(document, "touchend", this._deselectMultiDrag);
            off(document, "keydown", this._checkKeyDown);
            off(document, "keyup", this._checkKeyUp);
          },
          _deselectMultiDrag: function _deselectMultiDrag(evt) {
            if (typeof dragStarted !== "undefined" && dragStarted) return;
            if (multiDragSortable !== this.sortable) return;
            if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return;
            if (evt && evt.button !== 0) return;
            while (multiDragElements.length) {
              var el = multiDragElements[0];
              toggleClass(el, this.options.selectedClass, false);
              multiDragElements.shift();
              dispatchEvent({
                sortable: this.sortable,
                rootEl: this.sortable.el,
                name: "deselect",
                targetEl: el,
                originalEvent: evt
              });
            }
          },
          _checkKeyDown: function _checkKeyDown(evt) {
            if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = true;
          },
          _checkKeyUp: function _checkKeyUp(evt) {
            if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = false;
          }
        };
        return _extends(MultiDrag, {
          pluginName: "multiDrag",
          utils: {
            select: function select(el) {
              var sortable = el.parentNode[expando];
              if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;
              if (multiDragSortable && multiDragSortable !== sortable) {
                multiDragSortable.multiDrag._deselectMultiDrag();
                multiDragSortable = sortable;
              }
              toggleClass(el, sortable.options.selectedClass, true);
              multiDragElements.push(el);
            },
            deselect: function deselect(el) {
              var sortable = el.parentNode[expando], index = multiDragElements.indexOf(el);
              if (!sortable || !sortable.options.multiDrag || !~index) return;
              toggleClass(el, sortable.options.selectedClass, false);
              multiDragElements.splice(index, 1);
            }
          },
          eventProperties: function eventProperties() {
            var _this3 = this;
            var oldIndicies = [], newIndicies = [];
            multiDragElements.forEach((function(multiDragElement) {
              oldIndicies.push({
                multiDragElement,
                index: multiDragElement.sortableIndex
              });
              var newIndex;
              if (folding && multiDragElement !== dragEl$1) newIndex = -1; else if (folding) newIndex = index(multiDragElement, ":not(." + _this3.options.selectedClass + ")"); else newIndex = index(multiDragElement);
              newIndicies.push({
                multiDragElement,
                index: newIndex
              });
            }));
            return {
              items: _toConsumableArray(multiDragElements),
              clones: [].concat(multiDragClones),
              oldIndicies,
              newIndicies
            };
          },
          optionListeners: {
            multiDragKey: function multiDragKey(key) {
              key = key.toLowerCase();
              if (key === "ctrl") key = "Control"; else if (key.length > 1) key = key.charAt(0).toUpperCase() + key.substr(1);
              return key;
            }
          }
        });
      }
      function insertMultiDragElements(clonesInserted, rootEl) {
        multiDragElements.forEach((function(multiDragElement, i) {
          var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
          if (target) rootEl.insertBefore(multiDragElement, target); else rootEl.appendChild(multiDragElement);
        }));
      }
      function insertMultiDragClones(elementsInserted, rootEl) {
        multiDragClones.forEach((function(clone, i) {
          var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];
          if (target) rootEl.insertBefore(clone, target); else rootEl.appendChild(clone);
        }));
      }
      function removeMultiDragElements() {
        multiDragElements.forEach((function(multiDragElement) {
          if (multiDragElement === dragEl$1) return;
          multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
        }));
      }
      Sortable.mount(new AutoScrollPlugin);
      Sortable.mount(Remove, Revert);
      const __WEBPACK_DEFAULT_EXPORT__ = Sortable;
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
          var _observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(648);
          var _settings_display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
          var urlpattern_polyfill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(487);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__, _settings_endpoints__WEBPACK_IMPORTED_MODULE_1__, _settings_general__WEBPACK_IMPORTED_MODULE_5__, _settings_display__WEBPACK_IMPORTED_MODULE_6__ ]);
          [_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__, _settings_endpoints__WEBPACK_IMPORTED_MODULE_1__, _settings_general__WEBPACK_IMPORTED_MODULE_5__, _settings_display__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          const supportedDataFields = new Map([ [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Scene, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Title, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Organized, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Studio, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Code, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Date, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Tags, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Files ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Performer, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Name, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Disambiguation, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Favorite, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.AliasList, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Birthdate, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.HeightCm, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Tags ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Gallery, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Title, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Date, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Tags, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Files ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Movie, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Name, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Date ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Studio, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Name, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Aliases ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Tag, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Name ] ] ]);
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
          async function queryStash(queryString, onload, target, type, customFilter, stashIdEndpoint) {
            let filter;
            let query;
            let access = d => d;
            switch (type) {
             case _dataTypes__WEBPACK_IMPORTED_MODULE_3__.ZU.StashId:
              filter = `stash_id_endpoint:{endpoint:"${encodeURIComponent(stashIdEndpoint)}",stash_id:"${encodeURIComponent(queryString)}",modifier:EQUALS}${customFilter}`;
              break;

             default:
              filter = `${type}:{value:"""${encodeURIComponent(queryString)}""",modifier:EQUALS}${customFilter}`;
              break;
            }
            switch (target) {
             case _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Scene:
              query = `findScenes(scene_filter:{${filter}}){scenes{${getDataFields(target)}}}`;
              access = d => d.scenes;
              break;

             case _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Performer:
              query = `findPerformers(performer_filter:{${filter}}){performers{${getDataFields(target)}}}`;
              access = d => d.performers;
              break;

             case _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Gallery:
              query = `findGalleries(gallery_filter:{${filter}}){galleries{${getDataFields(target)}}}`;
              access = d => d.galleries;
              break;

             case _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Movie:
              query = `findMovies(movie_filter:{${filter}}){movies{${getDataFields(target)}}}`;
              access = d => d.movies;
              break;

             case _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Studio:
              query = `findStudios(studio_filter:{${filter}}){studios{${getDataFields(target)}}}`;
              access = d => d.studios;
              break;

             case _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Tag:
              query = `findTags(tag_filter:{${filter}}){tags{${getDataFields(target)}}}`;
              access = d => d.tags;
              break;

             default:
              return;
            }
            _settings_endpoints__WEBPACK_IMPORTED_MODULE_1__.I.forEach((endpoint => {
              (0, _request__WEBPACK_IMPORTED_MODULE_4__.E)(endpoint, query, true).then((data => onload(target, type, endpoint, access(data))));
            }));
          }
          async function checkElement(target, element, customFilter, display, {displaySelector = e => e, urlSelector = e => e.closest("a")?.href, codeSelector, stashIdSelector, stashIdEndpoint = `https://${window.location.host}/graphql`, nameSelector = _utils__WEBPACK_IMPORTED_MODULE_2__.ou, titleSelector = _utils__WEBPACK_IMPORTED_MODULE_2__.ou}) {
            let displayElement = displaySelector(element);
            if (!displayElement) return;
            if (urlSelector) {
              let url = urlSelector(element);
              if (url) {
                void 0;
                await queryStash(url, ((...args) => (0, _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__.l)(displayElement, ...args, display)), target, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.ZU.Url, customFilter, stashIdEndpoint);
              } else console.info(`No URL for ${target} found.`);
            }
            if (codeSelector) {
              let code = codeSelector(element);
              if (code) {
                void 0;
                await queryStash(code, ((...args) => (0, _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__.l)(displayElement, ...args, display)), target, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.ZU.Code, customFilter, stashIdEndpoint);
              } else console.info(`No Code for ${target} found.`);
            }
            if (stashIdSelector) {
              let id = stashIdSelector(element);
              if (id) {
                void 0;
                await queryStash(id, ((...args) => (0, _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__.l)(displayElement, ...args, display)), target, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.ZU.StashId, customFilter, stashIdEndpoint);
              } else console.info(`No StashId for ${target} found.`);
            }
            if ([ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Performer, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Movie, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Studio, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Tag ].includes(target) && nameSelector) {
              let name = nameSelector(element);
              let nameCount = name?.split(/\s+/)?.length;
              let kanji = name ? (0, _utils__WEBPACK_IMPORTED_MODULE_2__._t)(name) : false;
              let ignore = target === _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Performer && nameCount === 1 && !kanji;
              if (name && !ignore) {
                void 0;
                await queryStash(name, ((...args) => (0, _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__.l)(displayElement, ...args, display)), target, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.ZU.Name, customFilter, stashIdEndpoint);
              } else if (name && ignore) console.info(`Ignore single name: ${name}`); else console.info(`No Name for ${target} found.`);
            }
            if ([ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Scene, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Gallery ].includes(target) && titleSelector) {
              let title = titleSelector(element);
              if (title) {
                void 0;
                await queryStash(title, ((...args) => (0, _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__.l)(displayElement, ...args, display)), target, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.ZU.Title, customFilter, stashIdEndpoint);
              } else console.info(`No Title for ${target} found.`);
            }
          }
          function getCustomRules(target) {
            let targetRules = _settings_display__WEBPACK_IMPORTED_MODULE_6__.p.filter((rule => rule.target === target));
            return targetRules.filter((rule => new urlpattern_polyfill__WEBPACK_IMPORTED_MODULE_7__.I(rule.pattern, self.location.href).test(window.location.href)));
          }
          function combineFilters(customAndFilters, customNotFilters) {
            let andFilter = customAndFilters.map((f => ",AND:{" + f)).join();
            let notFilter = customNotFilters.length == 0 ? "" : ",NOT:{" + customNotFilters.join(",OR:{");
            let closing = "}".repeat(customAndFilters.length + customNotFilters.length);
            return andFilter + notFilter + closing;
          }
          function checkWithCustomRules(target, element, checkConfig) {
            let customRules = getCustomRules(target);
            for (let i = 0; i < customRules.length; i++) {
              let rule = customRules[i];
              let notFilters = customRules.slice(0, i).map((rule => rule.filter)).map(emptyToTrue);
              let andFilters = [ rule.filter ].map(emptyToTrue);
              void checkElement(target, element, combineFilters(andFilters, notFilters), rule.display, checkConfig);
            }
            let notFilters = customRules.map((rule => rule.filter)).map(emptyToTrue);
            console.log("default");
            void checkElement(target, element, combineFilters([], notFilters), {
              color: "green"
            }, checkConfig);
          }
          function emptyToTrue(s) {
            return s.length > 0 ? s : "id:{value:-1,modifier:GREATER_THAN}";
          }
          function check(target, elementSelector, {observe = false, ...checkConfig} = {}) {
            if (observe) (0, _observer__WEBPACK_IMPORTED_MODULE_8__.C)(elementSelector, (element => checkWithCustomRules(target, element, checkConfig)));
            document.querySelectorAll(elementSelector).forEach((e => checkWithCustomRules(target, e, checkConfig)));
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
        DataField["Organized"] = "organized";
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
          var _settings_display__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _settings_endpoints__WEBPACK_IMPORTED_MODULE_1__, _settings_settings__WEBPACK_IMPORTED_MODULE_2__, _settings_menu__WEBPACK_IMPORTED_MODULE_3__, _settings_general__WEBPACK_IMPORTED_MODULE_4__, _stashChecker__WEBPACK_IMPORTED_MODULE_5__, _settings_statistics__WEBPACK_IMPORTED_MODULE_6__, _settings_display__WEBPACK_IMPORTED_MODULE_7__ ]);
          [_settings_endpoints__WEBPACK_IMPORTED_MODULE_1__, _settings_settings__WEBPACK_IMPORTED_MODULE_2__, _settings_menu__WEBPACK_IMPORTED_MODULE_3__, _settings_general__WEBPACK_IMPORTED_MODULE_4__, _stashChecker__WEBPACK_IMPORTED_MODULE_5__, _settings_statistics__WEBPACK_IMPORTED_MODULE_6__, _settings_display__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          (async function() {
            (0, _settings_settings__WEBPACK_IMPORTED_MODULE_2__.yD)();
            (0, _settings_statistics__WEBPACK_IMPORTED_MODULE_6__.S)();
            (0, _settings_general__WEBPACK_IMPORTED_MODULE_4__.WA)();
            (0, _settings_display__WEBPACK_IMPORTED_MODULE_7__.s)();
            await (0, _settings_endpoints__WEBPACK_IMPORTED_MODULE_1__.P)();
            await (0, _settings_menu__WEBPACK_IMPORTED_MODULE_3__.Q)();
            await (0, _stashChecker__WEBPACK_IMPORTED_MODULE_5__.C)();
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
    6: (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, (async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.d(__webpack_exports__, {
            p: () => customDisplayRules,
            s: () => initDisplaySettings
          });
          var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
          var _dataTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(389);
          var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(613);
          var _general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
          var sortablejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(246);
          var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(185);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _settings__WEBPACK_IMPORTED_MODULE_0__, _general__WEBPACK_IMPORTED_MODULE_3__ ]);
          [_settings__WEBPACK_IMPORTED_MODULE_0__, _general__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          const customRules = [ {
            target: _dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene,
            pattern: "*",
            filter: "organized:false",
            display: {
              color: "blue"
            }
          }, {
            target: _dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene,
            pattern: "*://*.javlibrary.com/*",
            filter: "",
            display: {
              color: "purple"
            }
          }, {
            target: _dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Studio,
            pattern: "*://stashdb.org/*",
            filter: "scene_count:{value:5,modifier:GREATER_THAN}",
            display: {
              color: "purple"
            }
          } ];
          const customDisplayRules = await (0, _storage__WEBPACK_IMPORTED_MODULE_2__._W)(_storage__WEBPACK_IMPORTED_MODULE_2__.Zg.CustomDisplayRules, customRules);
          function initDisplaySettings() {
            let description = "Custom display rules can change the display of check marks. " + "A rule applies when the URL pattern matches the current website and the GraphQL filter matches the element. " + "Rules higher in the list have higher priority. " + "The order can be changed by dragging. " + "If no rule applies, the default display options are use. " + "GraphQL filters may not contain AND/OR/NOT. " + "Multiple filters can still be concatenated by ','. " + "Leave the filter empty to always apply.";
            let displaySection = (0, _settings__WEBPACK_IMPORTED_MODULE_0__.Lc)("display", "Display", description);
            populateDisplaySection(displaySection);
          }
          function populateDisplaySection(displaySection) {
            let table = document.createElement("table");
            let tableHead = document.createElement("thead");
            tableHead.append(tableHeadRow());
            table.append(tableHead);
            let tableBody = document.createElement("tbody");
            table.append(tableBody);
            let tableHeading = document.createElement("h2");
            tableHeading.innerHTML = "Custom Display Rules";
            displaySection.append(tableHeading);
            displaySection.append(table);
            sortablejs__WEBPACK_IMPORTED_MODULE_4__.Ay.create(tableBody, {
              onEnd: event => {
                if (event.oldIndex && event.newIndex) (0, _utils__WEBPACK_IMPORTED_MODULE_5__.e6)(customDisplayRules, event.oldIndex, event.newIndex);
              }
            });
            populateCustomRulesTable(tableBody);
          }
          function populateCustomRulesTable(tableBody) {
            let tableRows = Array.from(customDisplayRules).map(tableRow);
            tableBody.replaceChildren(...tableRows);
          }
          function tableHeadRow() {
            let row = document.createElement("tr");
            row.innerHTML = "<th>Type</th><th>URL Pattern</th><th>GraphQL Filter</th><th>Color</th><th>Preview</th>";
            return row;
          }
          function tableRow(customRule) {
            let row = document.createElement("tr");
            let preview = document.createElement("span");
            preview.innerHTML = _general__WEBPACK_IMPORTED_MODULE_3__.i3.get(_general__WEBPACK_IMPORTED_MODULE_3__.vw.checkMark);
            preview.classList.add("stashCheckerSymbol");
            preview.style.color = customRule.display.color;
            let previewElement = document.createElement("td");
            previewElement.classList.add("center");
            previewElement.append(preview);
            row.append(dataCell(customRule.target), dataCell(customRule.pattern), dataCell(customRule.filter), dataCell(customRule.display.color), previewElement);
            return row;
          }
          function dataCell(innerHtml) {
            let cell = document.createElement("td");
            cell.innerHTML = innerHtml;
            return cell;
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }), 1);
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
            OptionKey["showCheckMark"] = "showCheckMark";
            OptionKey["showCrossMark"] = "showCrossMark";
            OptionKey["showTags"] = "showTags";
            OptionKey["showFiles"] = "showFiles";
            OptionKey["checkMark"] = "checkMark";
            OptionKey["crossMark"] = "crossMark";
            OptionKey["warningMark"] = "warningMark";
          })(OptionKey || (OptionKey = {}));
          const defaultBooleanOptions = new Map([ [ OptionKey.showCheckMark, true ], [ OptionKey.showCrossMark, true ], [ OptionKey.showTags, true ], [ OptionKey.showFiles, true ] ]);
          const defaultStringOptions = new Map([ [ OptionKey.checkMark, "✓" ], [ OptionKey.crossMark, "✗" ], [ OptionKey.warningMark, "!" ] ]);
          const booleanOptions = await (0, _storage__WEBPACK_IMPORTED_MODULE_1__._W)(_storage__WEBPACK_IMPORTED_MODULE_1__.Zg.BooleanOptions, defaultBooleanOptions);
          const stringOptions = await (0, _storage__WEBPACK_IMPORTED_MODULE_1__._W)(_storage__WEBPACK_IMPORTED_MODULE_1__.Zg.StringOptions, defaultStringOptions);
          function initGeneralSettings() {
            let generalSection = (0, _settings__WEBPACK_IMPORTED_MODULE_0__.Lc)("general", "General");
            populateGeneralSection(generalSection);
          }
          function populateGeneralSection(generalSection) {
            let symbolSettings = fieldSet("symbol-settings", "Symbol");
            symbolSettings.append(checkBox(OptionKey.showCheckMark, "Show check mark"), checkBox(OptionKey.showCrossMark, "Show cross mark"), charBox(OptionKey.checkMark, "Check mark"), charBox(OptionKey.warningMark, "Duplicate mark"), charBox(OptionKey.crossMark, "Cross mark"));
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
            inputElement.defaultChecked = booleanOptions.get(key) ?? defaultBooleanOptions.get(key) ?? false;
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
            inputElement.defaultValue = stringOptions.get(key) ?? defaultStringOptions.get(key) ?? "";
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
              void (0, _stashChecker__WEBPACK_IMPORTED_MODULE_1__.C)();
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
        StorageKey["CustomDisplayRules"] = "customDisplayRules";
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
                let codeRegex = /(?<=video\/)([a-zA-Z0-9]+)(?=\/|$)/;
                let prepareUrl = url => {
                  let match = url?.match(codeRegex);
                  let end = match?.index && match?.[0]?.length ? match?.index + match?.[0]?.length : match?.index;
                  return url?.substring(0, end);
                };
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, ".page-video__details > .text--h1", {
                  observe: true,
                  urlSelector: _ => prepareUrl(currentSite()),
                  codeSelector: () => window.location.pathname.match(codeRegex)?.[0]
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "a.videoTeaser__title", {
                  observe: true,
                  urlSelector: e => prepareUrl(closestUrl(e)),
                  codeSelector: e => e.getAttribute("href")?.match(codeRegex)?.[0]
                });
                break;
              }

             case "oreno3d.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "h1.video-h1", {
                urlSelector: currentSite,
                titleSelector: null
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "a h2.box-h2", {
                titleSelector: null
              });
              break;

             case "erommdtube.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "h1.show__h1", {
                urlSelector: currentSite,
                titleSelector: null
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "h2.main__list-title", {
                titleSelector: null
              });
              break;

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
              {
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "div#video_title", {
                  urlSelector: _ => currentSite().replace("videoreviews.php", "").replace(/&.*$/, ""),
                  codeSelector: _ => document.querySelector("div#video_id td.text")?.textContent?.trim(),
                  titleSelector: _ => document.querySelector("div#video_id td.text")?.textContent?.trim()
                });
                let searchParams = new URLSearchParams(window.location.search);
                if (searchParams.has("list")) (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, ".video a[href^='./?v=jav'], .title a[href^='./?v=jav']", {
                  observe: true,
                  urlSelector: e => closestUrl(e)?.replace(/&.*$/, ""),
                  codeSelector: e => e.getAttribute("title")?.split(" ", 1)?.[0],
                  titleSelector: e => e.getAttribute("title")?.replace(/^\S*\s/, "")
                }); else (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, ".video a[href^='./?v=jav']", {
                  observe: true,
                  urlSelector: e => closestUrl(e)?.replace(/&.*$/, ""),
                  codeSelector: e => e.querySelector("div.id")?.textContent?.trim(),
                  titleSelector: e => e.querySelector("div.title")?.textContent?.trim() ?? (0, _utils__WEBPACK_IMPORTED_MODULE_2__.ou)(e)
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, ".comment strong > a[href^='videoreviews.php?v=jav']", {
                  urlSelector: e => closestUrl(e)?.replace("videoreviews.php", "").replace(/&.*$/, ""),
                  codeSelector: e => (0, _utils__WEBPACK_IMPORTED_MODULE_2__.ou)(e)?.split(" ")?.[0],
                  titleSelector: e => (0, _utils__WEBPACK_IMPORTED_MODULE_2__.ou)(e)?.replace(/^\S*\s/, "")
                });
                break;
              }

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
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a[class^='modelLink'][href*='/m/'] > span", {
                observe: true
              });
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

             case "hobby.porn":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a[href*='/model/']:not([href*='modelInfo'])", {
                urlSelector: e => closestUrl(e)?.match(/\/model\/[^\/]+\/\d+$/)?.[0],
                nameSelector: e => (0, _utils__WEBPACK_IMPORTED_MODULE_2__.ou)(e)?.replace("porn", "")?.replace("videos", "")?.trim()
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "h1", {
                nameSelector: e => (0, _utils__WEBPACK_IMPORTED_MODULE_2__.ou)(e)?.replace("Free Amateur Porn - Hobby.porn", "").split("porn videos")?.[0].trim()
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "#tab_info > div.model-info > div > b");
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "h1[itemprop='name']", {
                urlSelector: currentSite,
                titleSelector: _utils__WEBPACK_IMPORTED_MODULE_2__.ou
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "div[class*='item item-video item-lozad'] a[href*='hobby.porn/video/'] div.title-holder", {
                observe: true,
                urlSelector: closestUrl,
                titleSelector: _utils__WEBPACK_IMPORTED_MODULE_2__.ou
              });
              break;

             case "www.pornhub.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "[class*='pcVideoListItem'] a[href*='/model/'], [class*='pcVideoListItem'] a[href*='/pornstar/']");
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "h1[itemprop='name']", {
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "span.pornStarName.performerCardName, div.userCardNameBlock, span.usernameBadgesWrapper", {
                urlSelector: closestUrl,
                nameSelector: e => e.textContent?.trim()
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "div.modelVideosTitle, div.subHeaderOverrite > h2", {
                urlSelector: currentSite,
                nameSelector: e => (0, _utils__WEBPACK_IMPORTED_MODULE_2__.ou)(e)?.split("'s")?.[0].trim()
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Studio, "[class*='pcVideoListItem'] a[href*='/channels/']");
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Studio, "[id='channelsProfile'] h1", {
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "div.videoUList span.title a[href*='/view_video.php?viewkey=']", {
                observe: true
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "h1.title", {
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "[class*='pcVideoListItem'] span.title a[href*='/view_video.php?viewkey=']", {
                observe: true
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
          _utils__WEBPACK_IMPORTED_MODULE_1__.xr)(duration)}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Favorite, () => "&emsp;&#10084;&#65039;" ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Files, (files, queries, target, numQueries) => `${files.map((file => formatFileData(file, queries, target, numQueries))).join("")}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Height, height => `x${height})` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.HeightCm, height => `<br>Height: ${height} cm` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Id, (id, queries, target, numQueries) => `<br>${formatQueries(queries, target, id, numQueries)}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Name, name => `<br>Name: ${name}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Organized, organized => organized ? `&emsp;&#128230;` : "" ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Path, path => `Path: ${path}` ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.J7.Size, size => `&nbsp;&nbsp;&nbsp;&nbsp;Size: ${(0, 
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
          function prefixSymbol(element, target, type, endpoint, data, display) {
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
              entry.display = display;
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
              if (_settings_general__WEBPACK_IMPORTED_MODULE_2__.$k.get(_settings_general__WEBPACK_IMPORTED_MODULE_2__.vw.showCheckMark)) symbol.innerHTML = `${_settings_general__WEBPACK_IMPORTED_MODULE_2__.i3.get(_settings_general__WEBPACK_IMPORTED_MODULE_2__.vw.checkMark)}&nbsp;`;
              symbol.style.color = data[0].display.color;
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
        e6: () => moveIndex,
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
        if (node.nodeType === Node.TEXT_NODE && node.textContent?.match(/^[\s<>]*$/) === null) return node; else return Array.from(node.childNodes).filter((n => ![ "svg" ].includes(n.nodeName.toLowerCase()))).filter((n => asElement(n)?.getAttribute("data-type") !== "stash-symbol")).filter((n => isElement(n) ? !isHidden(n) : true)).map(firstTextChild).find((n => n));
      }
      function isElement(childNode) {
        return childNode.nodeType === Node.ELEMENT_NODE;
      }
      function asElement(childNode) {
        if (isElement(childNode)) return childNode; else return null;
      }
      function isHidden(element) {
        return window.getComputedStyle(element).display === "none";
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
      function moveIndex(list, oldIndex, newIndex) {
        let moved = list.splice(oldIndex, 1)[0];
        list.splice(newIndex, 0, moved);
        return list;
      }
      let friendlyHttpStatus = new Map([ [ 200, "OK" ], [ 201, "Created" ], [ 202, "Accepted" ], [ 203, "Non-Authoritative Information" ], [ 204, "No Content" ], [ 205, "Reset Content" ], [ 206, "Partial Content" ], [ 300, "Multiple Choices" ], [ 301, "Moved Permanently" ], [ 302, "Found" ], [ 303, "See Other" ], [ 304, "Not Modified" ], [ 305, "Use Proxy" ], [ 306, "Unused" ], [ 307, "Temporary Redirect" ], [ 400, "Bad Request" ], [ 401, "Unauthorized" ], [ 402, "Payment Required" ], [ 403, "Forbidden" ], [ 404, "Not Found" ], [ 405, "Method Not Allowed" ], [ 406, "Not Acceptable" ], [ 407, "Proxy Authentication Required" ], [ 408, "Request Timeout" ], [ 409, "Conflict" ], [ 410, "Gone" ], [ 411, "Length Required" ], [ 412, "Precondition Required" ], [ 413, "Request Entry Too Large" ], [ 414, "Request-URI Too Long" ], [ 415, "Unsupported Media Type" ], [ 416, "Requested Range Not Satisfiable" ], [ 417, "Expectation Failed" ], [ 418, "I'm a teapot" ], [ 429, "Too Many Requests" ], [ 500, "Internal Server Error" ], [ 501, "Not Implemented" ], [ 502, "Bad Gateway" ], [ 503, "Service Unavailable" ], [ 504, "Gateway Timeout" ], [ 505, "HTTP Version Not Supported" ] ]);
      const typeToString = new Map([ [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.ZU.Url, "URL" ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.ZU.Code, "Code" ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.ZU.StashId, "StashId" ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.ZU.Name, "Name" ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_0__.ZU.Title, "Title" ] ]);
    },
    487: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        I: () => me
      });
      var R = class {
        type=3;
        name="";
        prefix="";
        value="";
        suffix="";
        modifier=3;
        constructor(t, r, n, o, c, l) {
          this.type = t, this.name = r, this.prefix = n, this.value = o, this.suffix = c, 
          this.modifier = l;
        }
        hasCustomName() {
          return this.name !== "" && typeof this.name != "number";
        }
      }, be = /[$_\p{ID_Start}]/u, Pe = /[$_\u200C\u200D\p{ID_Continue}]/u, M = ".*";
      function Re(e, t) {
        return (t ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(e);
      }
      function v(e, t = !1) {
        let r = [], n = 0;
        for (;n < e.length; ) {
          let o = e[n], c = function(l) {
            if (!t) throw new TypeError(l);
            r.push({
              type: "INVALID_CHAR",
              index: n,
              value: e[n++]
            });
          };
          if (o === "*") {
            r.push({
              type: "ASTERISK",
              index: n,
              value: e[n++]
            });
            continue;
          }
          if (o === "+" || o === "?") {
            r.push({
              type: "OTHER_MODIFIER",
              index: n,
              value: e[n++]
            });
            continue;
          }
          if (o === "\\") {
            r.push({
              type: "ESCAPED_CHAR",
              index: n++,
              value: e[n++]
            });
            continue;
          }
          if (o === "{") {
            r.push({
              type: "OPEN",
              index: n,
              value: e[n++]
            });
            continue;
          }
          if (o === "}") {
            r.push({
              type: "CLOSE",
              index: n,
              value: e[n++]
            });
            continue;
          }
          if (o === ":") {
            let l = "", s = n + 1;
            for (;s < e.length; ) {
              let i = e.substr(s, 1);
              if (s === n + 1 && be.test(i) || s !== n + 1 && Pe.test(i)) {
                l += e[s++];
                continue;
              }
              break;
            }
            if (!l) {
              c(`Missing parameter name at ${n}`);
              continue;
            }
            r.push({
              type: "NAME",
              index: n,
              value: l
            }), n = s;
            continue;
          }
          if (o === "(") {
            let l = 1, s = "", i = n + 1, a = !1;
            if (e[i] === "?") {
              c(`Pattern cannot start with "?" at ${i}`);
              continue;
            }
            for (;i < e.length; ) {
              if (!Re(e[i], !1)) {
                c(`Invalid character '${e[i]}' at ${i}.`), a = !0;
                break;
              }
              if (e[i] === "\\") {
                s += e[i++] + e[i++];
                continue;
              }
              if (e[i] === ")") {
                if (l--, l === 0) {
                  i++;
                  break;
                }
              } else if (e[i] === "(" && (l++, e[i + 1] !== "?")) {
                c(`Capturing groups are not allowed at ${i}`), a = !0;
                break;
              }
              s += e[i++];
            }
            if (a) continue;
            if (l) {
              c(`Unbalanced pattern at ${n}`);
              continue;
            }
            if (!s) {
              c(`Missing pattern at ${n}`);
              continue;
            }
            r.push({
              type: "REGEX",
              index: n,
              value: s
            }), n = i;
            continue;
          }
          r.push({
            type: "CHAR",
            index: n,
            value: e[n++]
          });
        }
        return r.push({
          type: "END",
          index: n,
          value: ""
        }), r;
      }
      function D(e, t = {}) {
        let r = v(e);
        t.delimiter ??= "/#?", t.prefixes ??= "./";
        let n = `[^${S(t.delimiter)}]+?`, o = [], c = 0, l = 0, s = "", i = new Set, a = h => {
          if (l < r.length && r[l].type === h) return r[l++].value;
        }, f = () => a("OTHER_MODIFIER") ?? a("ASTERISK"), d = h => {
          let u = a(h);
          if (u !== void 0) return u;
          let {type: p, index: A} = r[l];
          throw new TypeError(`Unexpected ${p} at ${A}, expected ${h}`);
        }, T = () => {
          let h = "", u;
          for (;u = a("CHAR") ?? a("ESCAPED_CHAR"); ) h += u;
          return h;
        }, Se = h => h, L = t.encodePart || Se, I = "", U = h => {
          I += h;
        }, $ = () => {
          I.length && (o.push(new R(3, "", "", L(I), "", 3)), I = "");
        }, V = (h, u, p, A, Y) => {
          let g = 3;
          switch (Y) {
           case "?":
            g = 1;
            break;

           case "*":
            g = 0;
            break;

           case "+":
            g = 2;
            break;
          }
          if (!u && !p && g === 3) {
            U(h);
            return;
          }
          if ($(), !u && !p) {
            if (!h) return;
            o.push(new R(3, "", "", L(h), "", g));
            return;
          }
          let m;
          p ? p === "*" ? m = M : m = p : m = n;
          let O = 2;
          m === n ? (O = 1, m = "") : m === M && (O = 0, m = "");
          let P;
          if (u ? P = u : p && (P = c++), i.has(P)) throw new TypeError(`Duplicate name '${P}'.`);
          i.add(P), o.push(new R(O, P, L(h), m, L(A), g));
        };
        for (;l < r.length; ) {
          let h = a("CHAR"), u = a("NAME"), p = a("REGEX");
          if (!u && !p && (p = a("ASTERISK")), u || p) {
            let g = h ?? "";
            t.prefixes.indexOf(g) === -1 && (U(g), g = ""), $();
            let m = f();
            V(g, u, p, "", m);
            continue;
          }
          let A = h ?? a("ESCAPED_CHAR");
          if (A) {
            U(A);
            continue;
          }
          if (a("OPEN")) {
            let g = T(), m = a("NAME"), O = a("REGEX");
            !m && !O && (O = a("ASTERISK"));
            let P = T();
            d("CLOSE");
            let xe = f();
            V(g, m, O, P, xe);
            continue;
          }
          $(), d("END");
        }
        return o;
      }
      function S(e) {
        return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
      }
      function X(e) {
        return e && e.ignoreCase ? "ui" : "u";
      }
      function Z(e, t, r) {
        return F(D(e, r), t, r);
      }
      function k(e) {
        switch (e) {
         case 0:
          return "*";

         case 1:
          return "?";

         case 2:
          return "+";

         case 3:
          return "";
        }
      }
      function F(e, t, r = {}) {
        r.delimiter ??= "/#?", r.prefixes ??= "./", r.sensitive ??= !1, r.strict ??= !1, 
        r.end ??= !0, r.start ??= !0, r.endsWith = "";
        let n = r.start ? "^" : "";
        for (let s of e) {
          if (s.type === 3) {
            s.modifier === 3 ? n += S(s.value) : n += `(?:${S(s.value)})${k(s.modifier)}`;
            continue;
          }
          t && t.push(s.name);
          let i = `[^${S(r.delimiter)}]+?`, a = s.value;
          if (s.type === 1 ? a = i : s.type === 0 && (a = M), !s.prefix.length && !s.suffix.length) {
            s.modifier === 3 || s.modifier === 1 ? n += `(${a})${k(s.modifier)}` : n += `((?:${a})${k(s.modifier)})`;
            continue;
          }
          if (s.modifier === 3 || s.modifier === 1) {
            n += `(?:${S(s.prefix)}(${a})${S(s.suffix)})`, n += k(s.modifier);
            continue;
          }
          n += `(?:${S(s.prefix)}`, n += `((?:${a})(?:`, n += S(s.suffix), n += S(s.prefix), 
          n += `(?:${a}))*)${S(s.suffix)})`, s.modifier === 0 && (n += "?");
        }
        let o = `[${S(r.endsWith)}]|$`, c = `[${S(r.delimiter)}]`;
        if (r.end) return r.strict || (n += `${c}?`), r.endsWith.length ? n += `(?=${o})` : n += "$", 
        new RegExp(n, X(r));
        r.strict || (n += `(?:${c}(?=${o}))?`);
        let l = !1;
        if (e.length) {
          let s = e[e.length - 1];
          s.type === 3 && s.modifier === 3 && (l = r.delimiter.indexOf(s) > -1);
        }
        return l || (n += `(?=${c}|${o})`), new RegExp(n, X(r));
      }
      var x = {
        delimiter: "",
        prefixes: "",
        sensitive: !0,
        strict: !0
      }, B = {
        delimiter: ".",
        prefixes: "",
        sensitive: !0,
        strict: !0
      }, q = {
        delimiter: "/",
        prefixes: "/",
        sensitive: !0,
        strict: !0
      };
      function J(e, t) {
        return e.length ? e[0] === "/" ? !0 : !t || e.length < 2 ? !1 : (e[0] == "\\" || e[0] == "{") && e[1] == "/" : !1;
      }
      function Q(e, t) {
        return e.startsWith(t) ? e.substring(t.length, e.length) : e;
      }
      function Ee(e, t) {
        return e.endsWith(t) ? e.substr(0, e.length - t.length) : e;
      }
      function W(e) {
        return !e || e.length < 2 ? !1 : e[0] === "[" || (e[0] === "\\" || e[0] === "{") && e[1] === "[";
      }
      var ee = [ "ftp", "file", "http", "https", "ws", "wss" ];
      function N(e) {
        if (!e) return !0;
        for (let t of ee) if (e.test(t)) return !0;
        return !1;
      }
      function te(e, t) {
        if (e = Q(e, "#"), t || e === "") return e;
        let r = new URL("https://example.com");
        return r.hash = e, r.hash ? r.hash.substring(1, r.hash.length) : "";
      }
      function re(e, t) {
        if (e = Q(e, "?"), t || e === "") return e;
        let r = new URL("https://example.com");
        return r.search = e, r.search ? r.search.substring(1, r.search.length) : "";
      }
      function ne(e, t) {
        return t || e === "" ? e : W(e) ? j(e) : z(e);
      }
      function se(e, t) {
        if (t || e === "") return e;
        let r = new URL("https://example.com");
        return r.password = e, r.password;
      }
      function ie(e, t) {
        if (t || e === "") return e;
        let r = new URL("https://example.com");
        return r.username = e, r.username;
      }
      function ae(e, t, r) {
        if (r || e === "") return e;
        if (t && !ee.includes(t)) return new URL(`${t}:${e}`).pathname;
        let n = e[0] == "/";
        return e = new URL(n ? e : "/-" + e, "https://example.com").pathname, n || (e = e.substring(2, e.length)), 
        e;
      }
      function oe(e, t, r) {
        return _(t) === e && (e = ""), r || e === "" ? e : K(e);
      }
      function ce(e, t) {
        return e = Ee(e, ":"), t || e === "" ? e : y(e);
      }
      function _(e) {
        switch (e) {
         case "ws":
         case "http":
          return "80";

         case "wws":
         case "https":
          return "443";

         case "ftp":
          return "21";

         default:
          return "";
        }
      }
      function y(e) {
        if (e === "") return e;
        if (/^[-+.A-Za-z0-9]*$/.test(e)) return e.toLowerCase();
        throw new TypeError(`Invalid protocol '${e}'.`);
      }
      function le(e) {
        if (e === "") return e;
        let t = new URL("https://example.com");
        return t.username = e, t.username;
      }
      function fe(e) {
        if (e === "") return e;
        let t = new URL("https://example.com");
        return t.password = e, t.password;
      }
      function z(e) {
        if (e === "") return e;
        if (/[\t\n\r #%/:<>?@[\]^\\|]/g.test(e)) throw new TypeError(`Invalid hostname '${e}'`);
        let t = new URL("https://example.com");
        return t.hostname = e, t.hostname;
      }
      function j(e) {
        if (e === "") return e;
        if (/[^0-9a-fA-F[\]:]/g.test(e)) throw new TypeError(`Invalid IPv6 hostname '${e}'`);
        return e.toLowerCase();
      }
      function K(e) {
        if (e === "" || /^[0-9]*$/.test(e) && parseInt(e) <= 65535) return e;
        throw new TypeError(`Invalid port '${e}'.`);
      }
      function he(e) {
        if (e === "") return e;
        let t = new URL("https://example.com");
        return t.pathname = e[0] !== "/" ? "/-" + e : e, e[0] !== "/" ? t.pathname.substring(2, t.pathname.length) : t.pathname;
      }
      function ue(e) {
        return e === "" ? e : new URL(`data:${e}`).pathname;
      }
      function de(e) {
        if (e === "") return e;
        let t = new URL("https://example.com");
        return t.search = e, t.search.substring(1, t.search.length);
      }
      function pe(e) {
        if (e === "") return e;
        let t = new URL("https://example.com");
        return t.hash = e, t.hash.substring(1, t.hash.length);
      }
      var H = class {
        #i;
        #n=[];
        #t={};
        #e=0;
        #s=1;
        #l=0;
        #o=0;
        #d=0;
        #p=0;
        #g=!1;
        constructor(t) {
          this.#i = t;
        }
        get result() {
          return this.#t;
        }
        parse() {
          for (this.#n = v(this.#i, !0); this.#e < this.#n.length; this.#e += this.#s) {
            if (this.#s = 1, this.#n[this.#e].type === "END") {
              if (this.#o === 0) {
                this.#b(), this.#f() ? this.#r(9, 1) : this.#h() ? this.#r(8, 1) : this.#r(7, 0);
                continue;
              } else if (this.#o === 2) {
                this.#u(5);
                continue;
              }
              this.#r(10, 0);
              break;
            }
            if (this.#d > 0) if (this.#A()) this.#d -= 1; else continue;
            if (this.#T()) {
              this.#d += 1;
              continue;
            }
            switch (this.#o) {
             case 0:
              this.#P() && this.#u(1);
              break;

             case 1:
              if (this.#P()) {
                this.#C();
                let t = 7, r = 1;
                this.#E() ? (t = 2, r = 3) : this.#g && (t = 2), this.#r(t, r);
              }
              break;

             case 2:
              this.#S() ? this.#u(3) : (this.#x() || this.#h() || this.#f()) && this.#u(5);
              break;

             case 3:
              this.#O() ? this.#r(4, 1) : this.#S() && this.#r(5, 1);
              break;

             case 4:
              this.#S() && this.#r(5, 1);
              break;

             case 5:
              this.#y() ? this.#p += 1 : this.#w() && (this.#p -= 1), this.#k() && !this.#p ? this.#r(6, 1) : this.#x() ? this.#r(7, 0) : this.#h() ? this.#r(8, 1) : this.#f() && this.#r(9, 1);
              break;

             case 6:
              this.#x() ? this.#r(7, 0) : this.#h() ? this.#r(8, 1) : this.#f() && this.#r(9, 1);
              break;

             case 7:
              this.#h() ? this.#r(8, 1) : this.#f() && this.#r(9, 1);
              break;

             case 8:
              this.#f() && this.#r(9, 1);
              break;

             case 9:
              break;

             case 10:
              break;
            }
          }
          this.#t.hostname !== void 0 && this.#t.port === void 0 && (this.#t.port = "");
        }
        #r(t, r) {
          switch (this.#o) {
           case 0:
            break;

           case 1:
            this.#t.protocol = this.#c();
            break;

           case 2:
            break;

           case 3:
            this.#t.username = this.#c();
            break;

           case 4:
            this.#t.password = this.#c();
            break;

           case 5:
            this.#t.hostname = this.#c();
            break;

           case 6:
            this.#t.port = this.#c();
            break;

           case 7:
            this.#t.pathname = this.#c();
            break;

           case 8:
            this.#t.search = this.#c();
            break;

           case 9:
            this.#t.hash = this.#c();
            break;

           case 10:
            break;
          }
          this.#o !== 0 && t !== 10 && ([ 1, 2, 3, 4 ].includes(this.#o) && [ 6, 7, 8, 9 ].includes(t) && (this.#t.hostname ??= ""), 
          [ 1, 2, 3, 4, 5, 6 ].includes(this.#o) && [ 8, 9 ].includes(t) && (this.#t.pathname ??= this.#g ? "/" : ""), 
          [ 1, 2, 3, 4, 5, 6, 7 ].includes(this.#o) && t === 9 && (this.#t.search ??= "")), 
          this.#R(t, r);
        }
        #R(t, r) {
          this.#o = t, this.#l = this.#e + r, this.#e += r, this.#s = 0;
        }
        #b() {
          this.#e = this.#l, this.#s = 0;
        }
        #u(t) {
          this.#b(), this.#o = t;
        }
        #m(t) {
          return t < 0 && (t = this.#n.length - t), t < this.#n.length ? this.#n[t] : this.#n[this.#n.length - 1];
        }
        #a(t, r) {
          let n = this.#m(t);
          return n.value === r && (n.type === "CHAR" || n.type === "ESCAPED_CHAR" || n.type === "INVALID_CHAR");
        }
        #P() {
          return this.#a(this.#e, ":");
        }
        #E() {
          return this.#a(this.#e + 1, "/") && this.#a(this.#e + 2, "/");
        }
        #S() {
          return this.#a(this.#e, "@");
        }
        #O() {
          return this.#a(this.#e, ":");
        }
        #k() {
          return this.#a(this.#e, ":");
        }
        #x() {
          return this.#a(this.#e, "/");
        }
        #h() {
          if (this.#a(this.#e, "?")) return !0;
          if (this.#n[this.#e].value !== "?") return !1;
          let t = this.#m(this.#e - 1);
          return t.type !== "NAME" && t.type !== "REGEX" && t.type !== "CLOSE" && t.type !== "ASTERISK";
        }
        #f() {
          return this.#a(this.#e, "#");
        }
        #T() {
          return this.#n[this.#e].type == "OPEN";
        }
        #A() {
          return this.#n[this.#e].type == "CLOSE";
        }
        #y() {
          return this.#a(this.#e, "[");
        }
        #w() {
          return this.#a(this.#e, "]");
        }
        #c() {
          let t = this.#n[this.#e], r = this.#m(this.#l).index;
          return this.#i.substring(r, t.index);
        }
        #C() {
          let t = {};
          Object.assign(t, x), t.encodePart = y;
          let r = Z(this.#c(), void 0, t);
          this.#g = N(r);
        }
      };
      var G = [ "protocol", "username", "password", "hostname", "port", "pathname", "search", "hash" ], E = "*";
      function ge(e, t) {
        if (typeof e != "string") throw new TypeError("parameter 1 is not of type 'string'.");
        let r = new URL(e, t);
        return {
          protocol: r.protocol.substring(0, r.protocol.length - 1),
          username: r.username,
          password: r.password,
          hostname: r.hostname,
          port: r.port,
          pathname: r.pathname,
          search: r.search !== "" ? r.search.substring(1, r.search.length) : void 0,
          hash: r.hash !== "" ? r.hash.substring(1, r.hash.length) : void 0
        };
      }
      function b(e, t) {
        return t ? C(e) : e;
      }
      function w(e, t, r) {
        let n;
        if (typeof t.baseURL == "string") try {
          n = new URL(t.baseURL), t.protocol === void 0 && (e.protocol = b(n.protocol.substring(0, n.protocol.length - 1), r)), 
          !r && t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.username === void 0 && (e.username = b(n.username, r)), 
          !r && t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.username === void 0 && t.password === void 0 && (e.password = b(n.password, r)), 
          t.protocol === void 0 && t.hostname === void 0 && (e.hostname = b(n.hostname, r)), 
          t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && (e.port = b(n.port, r)), 
          t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && (e.pathname = b(n.pathname, r)), 
          t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && t.search === void 0 && (e.search = b(n.search.substring(1, n.search.length), r)), 
          t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && t.search === void 0 && t.hash === void 0 && (e.hash = b(n.hash.substring(1, n.hash.length), r));
        } catch {
          throw new TypeError(`invalid baseURL '${t.baseURL}'.`);
        }
        if (typeof t.protocol == "string" && (e.protocol = ce(t.protocol, r)), typeof t.username == "string" && (e.username = ie(t.username, r)), 
        typeof t.password == "string" && (e.password = se(t.password, r)), typeof t.hostname == "string" && (e.hostname = ne(t.hostname, r)), 
        typeof t.port == "string" && (e.port = oe(t.port, e.protocol, r)), typeof t.pathname == "string") {
          if (e.pathname = t.pathname, n && !J(e.pathname, r)) {
            let o = n.pathname.lastIndexOf("/");
            o >= 0 && (e.pathname = b(n.pathname.substring(0, o + 1), r) + e.pathname);
          }
          e.pathname = ae(e.pathname, e.protocol, r);
        }
        return typeof t.search == "string" && (e.search = re(t.search, r)), typeof t.hash == "string" && (e.hash = te(t.hash, r)), 
        e;
      }
      function C(e) {
        return e.replace(/([+*?:{}()\\])/g, "\\$1");
      }
      function Oe(e) {
        return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
      }
      function ke(e, t) {
        t.delimiter ??= "/#?", t.prefixes ??= "./", t.sensitive ??= !1, t.strict ??= !1, 
        t.end ??= !0, t.start ??= !0, t.endsWith = "";
        let r = ".*", n = `[^${Oe(t.delimiter)}]+?`, o = /[$_\u200C\u200D\p{ID_Continue}]/u, c = "";
        for (let l = 0; l < e.length; ++l) {
          let s = e[l];
          if (s.type === 3) {
            if (s.modifier === 3) {
              c += C(s.value);
              continue;
            }
            c += `{${C(s.value)}}${k(s.modifier)}`;
            continue;
          }
          let i = s.hasCustomName(), a = !!s.suffix.length || !!s.prefix.length && (s.prefix.length !== 1 || !t.prefixes.includes(s.prefix)), f = l > 0 ? e[l - 1] : null, d = l < e.length - 1 ? e[l + 1] : null;
          if (!a && i && s.type === 1 && s.modifier === 3 && d && !d.prefix.length && !d.suffix.length) if (d.type === 3) {
            let T = d.value.length > 0 ? d.value[0] : "";
            a = o.test(T);
          } else a = !d.hasCustomName();
          if (!a && !s.prefix.length && f && f.type === 3) {
            let T = f.value[f.value.length - 1];
            a = t.prefixes.includes(T);
          }
          a && (c += "{"), c += C(s.prefix), i && (c += `:${s.name}`), s.type === 2 ? c += `(${s.value})` : s.type === 1 ? i || (c += `(${n})`) : s.type === 0 && (!i && (!f || f.type === 3 || f.modifier !== 3 || a || s.prefix !== "") ? c += "*" : c += `(${r})`), 
          s.type === 1 && i && s.suffix.length && o.test(s.suffix[0]) && (c += "\\"), c += C(s.suffix), 
          a && (c += "}"), s.modifier !== 3 && (c += k(s.modifier));
        }
        return c;
      }
      var me = class {
        #i;
        #n={};
        #t={};
        #e={};
        #s={};
        #l=!1;
        constructor(t = {}, r, n) {
          try {
            let o;
            if (typeof r == "string" ? o = r : n = r, typeof t == "string") {
              let i = new H(t);
              if (i.parse(), t = i.result, o === void 0 && typeof t.protocol != "string") throw new TypeError("A base URL must be provided for a relative constructor string.");
              t.baseURL = o;
            } else {
              if (!t || typeof t != "object") throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");
              if (o) throw new TypeError("parameter 1 is not of type 'string'.");
            }
            typeof n > "u" && (n = {
              ignoreCase: !1
            });
            let c = {
              ignoreCase: n.ignoreCase === !0
            }, l = {
              pathname: E,
              protocol: E,
              username: E,
              password: E,
              hostname: E,
              port: E,
              search: E,
              hash: E
            };
            this.#i = w(l, t, !0), _(this.#i.protocol) === this.#i.port && (this.#i.port = "");
            let s;
            for (s of G) {
              if (!(s in this.#i)) continue;
              let i = {}, a = this.#i[s];
              switch (this.#t[s] = [], s) {
               case "protocol":
                Object.assign(i, x), i.encodePart = y;
                break;

               case "username":
                Object.assign(i, x), i.encodePart = le;
                break;

               case "password":
                Object.assign(i, x), i.encodePart = fe;
                break;

               case "hostname":
                Object.assign(i, B), W(a) ? i.encodePart = j : i.encodePart = z;
                break;

               case "port":
                Object.assign(i, x), i.encodePart = K;
                break;

               case "pathname":
                N(this.#n.protocol) ? (Object.assign(i, q, c), i.encodePart = he) : (Object.assign(i, x, c), 
                i.encodePart = ue);
                break;

               case "search":
                Object.assign(i, x, c), i.encodePart = de;
                break;

               case "hash":
                Object.assign(i, x, c), i.encodePart = pe;
                break;
              }
              try {
                this.#s[s] = D(a, i), this.#n[s] = F(this.#s[s], this.#t[s], i), this.#e[s] = ke(this.#s[s], i), 
                this.#l = this.#l || this.#s[s].some((f => f.type === 2));
              } catch {
                throw new TypeError(`invalid ${s} pattern '${this.#i[s]}'.`);
              }
            }
          } catch (o) {
            throw new TypeError(`Failed to construct 'URLPattern': ${o.message}`);
          }
        }
        test(t = {}, r) {
          let n = {
            pathname: "",
            protocol: "",
            username: "",
            password: "",
            hostname: "",
            port: "",
            search: "",
            hash: ""
          };
          if (typeof t != "string" && r) throw new TypeError("parameter 1 is not of type 'string'.");
          if (typeof t > "u") return !1;
          try {
            typeof t == "object" ? n = w(n, t, !1) : n = w(n, ge(t, r), !1);
          } catch {
            return !1;
          }
          let o;
          for (o of G) if (!this.#n[o].exec(n[o])) return !1;
          return !0;
        }
        exec(t = {}, r) {
          let n = {
            pathname: "",
            protocol: "",
            username: "",
            password: "",
            hostname: "",
            port: "",
            search: "",
            hash: ""
          };
          if (typeof t != "string" && r) throw new TypeError("parameter 1 is not of type 'string'.");
          if (typeof t > "u") return;
          try {
            typeof t == "object" ? n = w(n, t, !1) : n = w(n, ge(t, r), !1);
          } catch {
            return null;
          }
          let o = {};
          r ? o.inputs = [ t, r ] : o.inputs = [ t ];
          let c;
          for (c of G) {
            let l = this.#n[c].exec(n[c]);
            if (!l) return null;
            let s = {};
            for (let [i, a] of this.#t[c].entries()) if (typeof a == "string" || typeof a == "number") {
              let f = l[i + 1];
              s[a] = f;
            }
            o[c] = {
              input: n[c] ?? "",
              groups: s
            };
          }
          return o;
        }
        static compareComponent(t, r, n) {
          let o = (i, a) => {
            for (let f of [ "type", "modifier", "prefix", "value", "suffix" ]) {
              if (i[f] < a[f]) return -1;
              if (i[f] === a[f]) continue;
              return 1;
            }
            return 0;
          }, c = new R(3, "", "", "", "", 3), l = new R(0, "", "", "", "", 3), s = (i, a) => {
            let f = 0;
            for (;f < Math.min(i.length, a.length); ++f) {
              let d = o(i[f], a[f]);
              if (d) return d;
            }
            return i.length === a.length ? 0 : o(i[f] ?? c, a[f] ?? c);
          };
          return !r.#e[t] && !n.#e[t] ? 0 : r.#e[t] && !n.#e[t] ? s(r.#s[t], [ l ]) : !r.#e[t] && n.#e[t] ? s([ l ], n.#s[t]) : s(r.#s[t], n.#s[t]);
        }
        get protocol() {
          return this.#e.protocol;
        }
        get username() {
          return this.#e.username;
        }
        get password() {
          return this.#e.password;
        }
        get hostname() {
          return this.#e.hostname;
        }
        get port() {
          return this.#e.port;
        }
        get pathname() {
          return this.#e.pathname;
        }
        get search() {
          return this.#e.search;
        }
        get hash() {
          return this.#e.hash;
        }
        get hasRegExpGroups() {
          return this.#l;
        }
      };
      if (!globalThis.URLPattern) globalThis.URLPattern = me;
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