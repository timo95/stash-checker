// ==UserScript==
// @name Stash Checker
// @description Add checkmarks on porn websites to scenes/performers that are present in your own Stash instance.
// @version 1.1.0
// @author timo95
// @match *://adultanime.dbsearch.net/*
// @match *://www.brazzers.com/*
// @match *://coomer.su/*
// @match *://erommdtube.com/*
// @match *://fansdb.cc/*
// @match *://fansdb.xyz/*
// @match *://fansly.com/*
// @match *://www.slayed.com/*
// @match *://www.blacked.com/*
// @match *://www.tushy.com/*
// @match *://www.vixen.com/*
// @match *://www.blackedraw.com/*
// @match *://www.tushyraw.com/*
// @match *://www.deeper.com/*
// @match *://www.milfy.com/*
// @match *://www.wifey.com/*
// @match *://www.angelslove.xxx/*
// @match *://www.sensuallove.xxx/*
// @match *://www.wowgirlsblog.com/*
// @match *://www.ultrafilms.xxx/*
// @match *://www.18onlygirlsblog.com/*
// @match *://www.metart.com/*
// @match *://www.metartx.com/*
// @match *://www.sexart.com/*
// @match *://www.vivthomas.com/*
// @match *://www.thelifeerotic.com/*
// @match *://www.straplez.com/*
// @match *://www.errotica-archives.com/*
// @match *://www.domai.com/*
// @match *://www.goddessnudes.com/*
// @match *://www.eroticbeauty.com/*
// @match *://www.lovehairy.com/*
// @match *://www.alsscan.com/*
// @match *://www.rylskyart.com/*
// @match *://www.eternaldesire.com/*
// @match *://gayeroticvideoindex.com/*
// @match *://hobby.porn/*
// @match *://javdb.com/*
// @match *://javstash.org/*
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
// @match *://www.clips4sale.com/*
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
// @icon https://docs.stashapp.cc/assets/images/favicon.ico
// @license MIT
// @run-at document-end
// @source https://github.com/timo95/stash-checker
// @updateURL https://github.com/timo95/stash-checker/releases/latest/download/index.prod.meta.js
// ==/UserScript==

/*! For license information please see index.prod.js.LICENSE.txt */
(() => {
  "use strict";
  var __webpack_modules__ = {
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
          var sortablejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(246);
          var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(185);
          var _providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(710);
          var _htmlHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(519);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _settings__WEBPACK_IMPORTED_MODULE_0__, _providers__WEBPACK_IMPORTED_MODULE_5__ ]);
          [_settings__WEBPACK_IMPORTED_MODULE_0__, _providers__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          const customDisplayRules = await (0, _storage__WEBPACK_IMPORTED_MODULE_2__._W)(_storage__WEBPACK_IMPORTED_MODULE_2__.Zg.CustomDisplayRules, []);
          function initDisplaySettings() {
            let description = "Custom display rules can change the display of check marks. " + "A rule applies when the URL pattern matches the current website and the GraphQL filter matches the element. " + "Rules higher in the list have higher priority. " + "The order can be changed by dragging. " + "If no rule applies, the default display options are used. " + "GraphQL filters may not contain AND/OR/NOT. " + "Multiple filters can still be concatenated by ','. " + "Leave the filter empty to always apply.";
            let displaySection = (0, _settings__WEBPACK_IMPORTED_MODULE_0__.Lc)("display", "Custom Display Rules", description);
            displaySection.classList.add("flex-column");
            populateDisplaySection(displaySection);
          }
          function populateDisplaySection(displaySection) {
            let table = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_6__.ZR)();
            let tableHead = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_6__.Ve)();
            tableHead.append(tableHeadRow());
            table.append(tableHead);
            let tableBody = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_6__.$0)();
            tableBody.id = "stashChecker-displayRules";
            table.append(tableBody);
            displaySection.append(table);
            displaySection.append((0, _htmlHelper__WEBPACK_IMPORTED_MODULE_6__.qi)());
            displaySection.append((0, _settings__WEBPACK_IMPORTED_MODULE_0__.jr)("Add Rule", addRuleListener, [ "align-end" ]));
            sortablejs__WEBPACK_IMPORTED_MODULE_3__.Ay.create(tableBody, {
              onEnd: event => {
                if (event.oldIndex && event.newIndex) {
                  (0, _utils__WEBPACK_IMPORTED_MODULE_4__.e6)(customDisplayRules, event.oldIndex, event.newIndex);
                  populateCustomRulesTable(document.querySelector("#stashChecker-displayRules"));
                }
              }
            });
            populateCustomRulesTable(tableBody);
          }
          function populateCustomRulesTable(tableBody) {
            let tableRows = Array.from(customDisplayRules).map(tableRow);
            tableBody.replaceChildren(...tableRows);
          }
          function tableHeadRow() {
            let row = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_6__.dc)();
            let values = [ "Type", "URL Pattern", "GraphQL Filter", "Color", "Preview", "" ];
            row.innerHTML = values.map((value => `<th>${value}</th>`)).join("");
            return row;
          }
          function tableRow(customRule, index) {
            let row = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_6__.dc)();
            let preview = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_6__.VI)("stashCheckerSymbol", "stashCheckerPreview");
            preview.innerHTML = _providers__WEBPACK_IMPORTED_MODULE_5__.i3.get(_providers__WEBPACK_IMPORTED_MODULE_5__.vw.checkMark);
            preview.style.color = customRule.display.color;
            let previewCell = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_6__.Tg)("center");
            previewCell.append(preview);
            let buttonCell = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_6__.Tg)();
            let buttonCellInner = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_6__.Sw)("buttonCell");
            buttonCellInner.append(editButton(index), deleteButton(index));
            buttonCell.append(buttonCellInner);
            row.append(htmlCell(customRule.target), htmlCell(customRule.pattern), htmlCell(customRule.filter), htmlCell(customRule.display.color), previewCell, buttonCell);
            return row;
          }
          function htmlCell(innerHtml) {
            let htmlCell = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_6__.Tg)();
            htmlCell.innerHTML = innerHtml;
            return htmlCell;
          }
          function editButton(index) {
            let button = (0, _settings__WEBPACK_IMPORTED_MODULE_0__.jr)("Edit", editRuleListener);
            button.setAttribute("data-index", index.toString());
            return button;
          }
          function deleteButton(index) {
            let button = (0, _settings__WEBPACK_IMPORTED_MODULE_0__.g8)("Delete", deleteRuleListener);
            button.setAttribute("data-index", index.toString());
            return button;
          }
          async function addRuleListener() {
            let newRule = {
              target: _dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene,
              pattern: "*://stashdb.org/*",
              filter: "organized:true",
              display: {
                color: "blue"
              }
            };
            customDisplayRules.push(newRule);
            populateCustomRulesTable(document.querySelector("#stashChecker-displayRules"));
          }
          async function deleteRuleListener() {
            let index = parseInt(this.getAttribute("data-index"));
            customDisplayRules.splice(index, 1);
            void (0, _storage__WEBPACK_IMPORTED_MODULE_2__.KY)(_storage__WEBPACK_IMPORTED_MODULE_2__.Zg.CustomDisplayRules, customDisplayRules);
            populateCustomRulesTable(document.querySelector("#stashChecker-displayRules"));
          }
          async function editRuleListener() {
            let index = parseInt(this.getAttribute("data-index"));
            void 0;
            let oldRule = customDisplayRules[index];
            let target = prompt(`Target (${Object.values(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We).join(", ")}):`, oldRule.target)?.trim() ?? oldRule.target;
            let pattern = prompt("URL Pattern:", oldRule.pattern)?.trim() ?? oldRule.pattern;
            let filter = prompt("GraphQL Filter:", oldRule.filter)?.trim() ?? oldRule.filter;
            let color = prompt("Color (css):", oldRule.display.color)?.trim() ?? oldRule.display.color;
            customDisplayRules[index] = {
              target,
              pattern,
              filter,
              display: {
                color
              }
            };
            void (0, _storage__WEBPACK_IMPORTED_MODULE_2__.KY)(_storage__WEBPACK_IMPORTED_MODULE_2__.Zg.CustomDisplayRules, customDisplayRules);
            populateCustomRulesTable(document.querySelector("#stashChecker-displayRules"));
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }), 1);
    },
    42: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        AA: () => initTooltip,
        Mf: () => symbolMouseoutListener,
        aN: () => symbolMouseoverListener
      });
      const floating_ui_utils_sides = null && [ "top", "right", "bottom", "left" ];
      const alignments = null && [ "start", "end" ];
      const floating_ui_utils_placements = null && floating_ui_utils_sides.reduce(((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1])), []);
      const floating_ui_utils_min = Math.min;
      const floating_ui_utils_max = Math.max;
      const round = Math.round;
      const floating_ui_utils_floor = Math.floor;
      const createCoords = v => ({
        x: v,
        y: v
      });
      const oppositeSideMap = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      const oppositeAlignmentMap = {
        start: "end",
        end: "start"
      };
      function floating_ui_utils_clamp(start, value, end) {
        return floating_ui_utils_max(start, floating_ui_utils_min(value, end));
      }
      function floating_ui_utils_evaluate(value, param) {
        return typeof value === "function" ? value(param) : value;
      }
      function floating_ui_utils_getSide(placement) {
        return placement.split("-")[0];
      }
      function floating_ui_utils_getAlignment(placement) {
        return placement.split("-")[1];
      }
      function floating_ui_utils_getOppositeAxis(axis) {
        return axis === "x" ? "y" : "x";
      }
      function floating_ui_utils_getAxisLength(axis) {
        return axis === "y" ? "height" : "width";
      }
      function floating_ui_utils_getSideAxis(placement) {
        return [ "top", "bottom" ].includes(floating_ui_utils_getSide(placement)) ? "y" : "x";
      }
      function floating_ui_utils_getAlignmentAxis(placement) {
        return floating_ui_utils_getOppositeAxis(floating_ui_utils_getSideAxis(placement));
      }
      function floating_ui_utils_getAlignmentSides(placement, rects, rtl) {
        if (rtl === void 0) rtl = false;
        const alignment = floating_ui_utils_getAlignment(placement);
        const alignmentAxis = floating_ui_utils_getAlignmentAxis(placement);
        const length = floating_ui_utils_getAxisLength(alignmentAxis);
        let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
        if (rects.reference[length] > rects.floating[length]) mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
        return [ mainAlignmentSide, getOppositePlacement(mainAlignmentSide) ];
      }
      function getExpandedPlacements(placement) {
        const oppositePlacement = getOppositePlacement(placement);
        return [ floating_ui_utils_getOppositeAlignmentPlacement(placement), oppositePlacement, floating_ui_utils_getOppositeAlignmentPlacement(oppositePlacement) ];
      }
      function floating_ui_utils_getOppositeAlignmentPlacement(placement) {
        return placement.replace(/start|end/g, (alignment => oppositeAlignmentMap[alignment]));
      }
      function getSideList(side, isStart, rtl) {
        const lr = [ "left", "right" ];
        const rl = [ "right", "left" ];
        const tb = [ "top", "bottom" ];
        const bt = [ "bottom", "top" ];
        switch (side) {
         case "top":
         case "bottom":
          if (rtl) return isStart ? rl : lr;
          return isStart ? lr : rl;

         case "left":
         case "right":
          return isStart ? tb : bt;

         default:
          return [];
        }
      }
      function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
        const alignment = floating_ui_utils_getAlignment(placement);
        let list = getSideList(floating_ui_utils_getSide(placement), direction === "start", rtl);
        if (alignment) {
          list = list.map((side => side + "-" + alignment));
          if (flipAlignment) list = list.concat(list.map(floating_ui_utils_getOppositeAlignmentPlacement));
        }
        return list;
      }
      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, (side => oppositeSideMap[side]));
      }
      function expandPaddingObject(padding) {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          ...padding
        };
      }
      function floating_ui_utils_getPaddingObject(padding) {
        return typeof padding !== "number" ? expandPaddingObject(padding) : {
          top: padding,
          right: padding,
          bottom: padding,
          left: padding
        };
      }
      function floating_ui_utils_rectToClientRect(rect) {
        const {x, y, width, height} = rect;
        return {
          width,
          height,
          top: y,
          left: x,
          right: x + width,
          bottom: y + height,
          x,
          y
        };
      }
      function computeCoordsFromPlacement(_ref, placement, rtl) {
        let {reference, floating} = _ref;
        const sideAxis = floating_ui_utils_getSideAxis(placement);
        const alignmentAxis = floating_ui_utils_getAlignmentAxis(placement);
        const alignLength = floating_ui_utils_getAxisLength(alignmentAxis);
        const side = floating_ui_utils_getSide(placement);
        const isVertical = sideAxis === "y";
        const commonX = reference.x + reference.width / 2 - floating.width / 2;
        const commonY = reference.y + reference.height / 2 - floating.height / 2;
        const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
        let coords;
        switch (side) {
         case "top":
          coords = {
            x: commonX,
            y: reference.y - floating.height
          };
          break;

         case "bottom":
          coords = {
            x: commonX,
            y: reference.y + reference.height
          };
          break;

         case "right":
          coords = {
            x: reference.x + reference.width,
            y: commonY
          };
          break;

         case "left":
          coords = {
            x: reference.x - floating.width,
            y: commonY
          };
          break;

         default:
          coords = {
            x: reference.x,
            y: reference.y
          };
        }
        switch (floating_ui_utils_getAlignment(placement)) {
         case "start":
          coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
          break;

         case "end":
          coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
          break;
        }
        return coords;
      }
      const computePosition = async (reference, floating, config) => {
        const {placement = "bottom", strategy = "absolute", middleware = [], platform} = config;
        const validMiddleware = middleware.filter(Boolean);
        const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
        let rects = await platform.getElementRects({
          reference,
          floating,
          strategy
        });
        let {x, y} = computeCoordsFromPlacement(rects, placement, rtl);
        let statefulPlacement = placement;
        let middlewareData = {};
        let resetCount = 0;
        for (let i = 0; i < validMiddleware.length; i++) {
          const {name, fn} = validMiddleware[i];
          const {x: nextX, y: nextY, data, reset} = await fn({
            x,
            y,
            initialPlacement: placement,
            placement: statefulPlacement,
            strategy,
            middlewareData,
            rects,
            platform,
            elements: {
              reference,
              floating
            }
          });
          x = nextX != null ? nextX : x;
          y = nextY != null ? nextY : y;
          middlewareData = {
            ...middlewareData,
            [name]: {
              ...middlewareData[name],
              ...data
            }
          };
          if (reset && resetCount <= 50) {
            resetCount++;
            if (typeof reset === "object") {
              if (reset.placement) statefulPlacement = reset.placement;
              if (reset.rects) rects = reset.rects === true ? await platform.getElementRects({
                reference,
                floating,
                strategy
              }) : reset.rects;
              ({x, y} = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
            }
            i = -1;
          }
        }
        return {
          x,
          y,
          placement: statefulPlacement,
          strategy,
          middlewareData
        };
      };
      async function detectOverflow(state, options) {
        var _await$platform$isEle;
        if (options === void 0) options = {};
        const {x, y, platform, rects, elements, strategy} = state;
        const {boundary = "clippingAncestors", rootBoundary = "viewport", elementContext = "floating", altBoundary = false, padding = 0} = floating_ui_utils_evaluate(options, state);
        const paddingObject = floating_ui_utils_getPaddingObject(padding);
        const altContext = elementContext === "floating" ? "reference" : "floating";
        const element = elements[altBoundary ? altContext : elementContext];
        const clippingClientRect = floating_ui_utils_rectToClientRect(await platform.getClippingRect({
          element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
          boundary,
          rootBoundary,
          strategy
        }));
        const rect = elementContext === "floating" ? {
          x,
          y,
          width: rects.floating.width,
          height: rects.floating.height
        } : rects.reference;
        const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
        const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
          x: 1,
          y: 1
        } : {
          x: 1,
          y: 1
        };
        const elementClientRect = floating_ui_utils_rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements,
          rect,
          offsetParent,
          strategy
        }) : rect);
        return {
          top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
          bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
          left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
          right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
        };
      }
      const arrow = options => ({
        name: "arrow",
        options,
        async fn(state) {
          const {x, y, placement, rects, platform, elements, middlewareData} = state;
          const {element, padding = 0} = evaluate(options, state) || {};
          if (element == null) return {};
          const paddingObject = getPaddingObject(padding);
          const coords = {
            x,
            y
          };
          const axis = getAlignmentAxis(placement);
          const length = getAxisLength(axis);
          const arrowDimensions = await platform.getDimensions(element);
          const isYAxis = axis === "y";
          const minProp = isYAxis ? "top" : "left";
          const maxProp = isYAxis ? "bottom" : "right";
          const clientProp = isYAxis ? "clientHeight" : "clientWidth";
          const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
          const startDiff = coords[axis] - rects.reference[axis];
          const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
          let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
          if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) clientSize = elements.floating[clientProp] || rects.floating[length];
          const centerToReference = endDiff / 2 - startDiff / 2;
          const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
          const minPadding = min(paddingObject[minProp], largestPossiblePadding);
          const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
          const min$1 = minPadding;
          const max = clientSize - arrowDimensions[length] - maxPadding;
          const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
          const offset = clamp(min$1, center, max);
          const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
          const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
          return {
            [axis]: coords[axis] + alignmentOffset,
            data: {
              [axis]: offset,
              centerOffset: center - offset - alignmentOffset,
              ...shouldAddOffset && {
                alignmentOffset
              }
            },
            reset: shouldAddOffset
          };
        }
      });
      function getPlacementList(alignment, autoAlignment, allowedPlacements) {
        const allowedPlacementsSortedByAlignment = alignment ? [ ...allowedPlacements.filter((placement => getAlignment(placement) === alignment)), ...allowedPlacements.filter((placement => getAlignment(placement) !== alignment)) ] : allowedPlacements.filter((placement => getSide(placement) === placement));
        return allowedPlacementsSortedByAlignment.filter((placement => {
          if (alignment) return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
          return true;
        }));
      }
      const autoPlacement = function(options) {
        if (options === void 0) options = {};
        return {
          name: "autoPlacement",
          options,
          async fn(state) {
            var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
            const {rects, middlewareData, placement, platform, elements} = state;
            const {crossAxis = false, alignment, allowedPlacements = placements, autoAlignment = true, ...detectOverflowOptions} = evaluate(options, state);
            const placements$1 = alignment !== void 0 || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
            const currentPlacement = placements$1[currentIndex];
            if (currentPlacement == null) return {};
            const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
            if (placement !== currentPlacement) return {
              reset: {
                placement: placements$1[0]
              }
            };
            const currentOverflows = [ overflow[getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]] ];
            const allOverflows = [ ...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [], {
              placement: currentPlacement,
              overflows: currentOverflows
            } ];
            const nextPlacement = placements$1[currentIndex + 1];
            if (nextPlacement) return {
              data: {
                index: currentIndex + 1,
                overflows: allOverflows
              },
              reset: {
                placement: nextPlacement
              }
            };
            const placementsSortedByMostSpace = allOverflows.map((d => {
              const alignment = getAlignment(d.placement);
              return [ d.placement, alignment && crossAxis ? d.overflows.slice(0, 2).reduce(((acc, v) => acc + v), 0) : d.overflows[0], d.overflows ];
            })).sort(((a, b) => a[1] - b[1]));
            const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d => d[2].slice(0, getAlignment(d[0]) ? 2 : 3).every((v => v <= 0))));
            const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
            if (resetPlacement !== placement) return {
              data: {
                index: currentIndex + 1,
                overflows: allOverflows
              },
              reset: {
                placement: resetPlacement
              }
            };
            return {};
          }
        };
      };
      const flip = function(options) {
        if (options === void 0) options = {};
        return {
          name: "flip",
          options,
          async fn(state) {
            var _middlewareData$arrow, _middlewareData$flip;
            const {placement, middlewareData, rects, initialPlacement, platform, elements} = state;
            const {mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = "bestFit", fallbackAxisSideDirection = "none", flipAlignment = true, ...detectOverflowOptions} = floating_ui_utils_evaluate(options, state);
            if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
            const side = floating_ui_utils_getSide(placement);
            const initialSideAxis = floating_ui_utils_getSideAxis(initialPlacement);
            const isBasePlacement = floating_ui_utils_getSide(initialPlacement) === initialPlacement;
            const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
            const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [ getOppositePlacement(initialPlacement) ] : getExpandedPlacements(initialPlacement));
            const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
            if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
            const placements = [ initialPlacement, ...fallbackPlacements ];
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const overflows = [];
            let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
            if (checkMainAxis) overflows.push(overflow[side]);
            if (checkCrossAxis) {
              const sides = floating_ui_utils_getAlignmentSides(placement, rects, rtl);
              overflows.push(overflow[sides[0]], overflow[sides[1]]);
            }
            overflowsData = [ ...overflowsData, {
              placement,
              overflows
            } ];
            if (!overflows.every((side => side <= 0))) {
              var _middlewareData$flip2, _overflowsData$filter;
              const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
              const nextPlacement = placements[nextIndex];
              if (nextPlacement) {
                var _overflowsData$;
                const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== floating_ui_utils_getSideAxis(nextPlacement) : false;
                const hasInitialMainAxisOverflow = ((_overflowsData$ = overflowsData[0]) == null ? void 0 : _overflowsData$.overflows[0]) > 0;
                if (!ignoreCrossAxisOverflow || hasInitialMainAxisOverflow) return {
                  data: {
                    index: nextIndex,
                    overflows: overflowsData
                  },
                  reset: {
                    placement: nextPlacement
                  }
                };
              }
              let resetPlacement = (_overflowsData$filter = overflowsData.filter((d => d.overflows[0] <= 0)).sort(((a, b) => a.overflows[1] - b.overflows[1]))[0]) == null ? void 0 : _overflowsData$filter.placement;
              if (!resetPlacement) switch (fallbackStrategy) {
               case "bestFit":
                {
                  var _overflowsData$filter2;
                  const placement = (_overflowsData$filter2 = overflowsData.filter((d => {
                    if (hasFallbackAxisSideDirection) {
                      const currentSideAxis = floating_ui_utils_getSideAxis(d.placement);
                      return currentSideAxis === initialSideAxis || currentSideAxis === "y";
                    }
                    return true;
                  })).map((d => [ d.placement, d.overflows.filter((overflow => overflow > 0)).reduce(((acc, overflow) => acc + overflow), 0) ])).sort(((a, b) => a[1] - b[1]))[0]) == null ? void 0 : _overflowsData$filter2[0];
                  if (placement) resetPlacement = placement;
                  break;
                }

               case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
              }
              if (placement !== resetPlacement) return {
                reset: {
                  placement: resetPlacement
                }
              };
            }
            return {};
          }
        };
      };
      function getSideOffsets(overflow, rect) {
        return {
          top: overflow.top - rect.height,
          right: overflow.right - rect.width,
          bottom: overflow.bottom - rect.height,
          left: overflow.left - rect.width
        };
      }
      function isAnySideFullyClipped(overflow) {
        return sides.some((side => overflow[side] >= 0));
      }
      const hide = function(options) {
        if (options === void 0) options = {};
        return {
          name: "hide",
          options,
          async fn(state) {
            const {rects} = state;
            const {strategy = "referenceHidden", ...detectOverflowOptions} = evaluate(options, state);
            switch (strategy) {
             case "referenceHidden":
              {
                const overflow = await detectOverflow(state, {
                  ...detectOverflowOptions,
                  elementContext: "reference"
                });
                const offsets = getSideOffsets(overflow, rects.reference);
                return {
                  data: {
                    referenceHiddenOffsets: offsets,
                    referenceHidden: isAnySideFullyClipped(offsets)
                  }
                };
              }

             case "escaped":
              {
                const overflow = await detectOverflow(state, {
                  ...detectOverflowOptions,
                  altBoundary: true
                });
                const offsets = getSideOffsets(overflow, rects.floating);
                return {
                  data: {
                    escapedOffsets: offsets,
                    escaped: isAnySideFullyClipped(offsets)
                  }
                };
              }

             default:
              return {};
            }
          }
        };
      };
      function getBoundingRect(rects) {
        const minX = min(...rects.map((rect => rect.left)));
        const minY = min(...rects.map((rect => rect.top)));
        const maxX = max(...rects.map((rect => rect.right)));
        const maxY = max(...rects.map((rect => rect.bottom)));
        return {
          x: minX,
          y: minY,
          width: maxX - minX,
          height: maxY - minY
        };
      }
      function getRectsByLine(rects) {
        const sortedRects = rects.slice().sort(((a, b) => a.y - b.y));
        const groups = [];
        let prevRect = null;
        for (let i = 0; i < sortedRects.length; i++) {
          const rect = sortedRects[i];
          if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) groups.push([ rect ]); else groups[groups.length - 1].push(rect);
          prevRect = rect;
        }
        return groups.map((rect => rectToClientRect(getBoundingRect(rect))));
      }
      const inline = function(options) {
        if (options === void 0) options = {};
        return {
          name: "inline",
          options,
          async fn(state) {
            const {placement, elements, rects, platform, strategy} = state;
            const {padding = 2, x, y} = evaluate(options, state);
            const nativeClientRects = Array.from(await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || []);
            const clientRects = getRectsByLine(nativeClientRects);
            const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
            const paddingObject = getPaddingObject(padding);
            function getBoundingClientRect() {
              if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) return clientRects.find((rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom)) || fallback;
              if (clientRects.length >= 2) {
                if (getSideAxis(placement) === "y") {
                  const firstRect = clientRects[0];
                  const lastRect = clientRects[clientRects.length - 1];
                  const isTop = getSide(placement) === "top";
                  const top = firstRect.top;
                  const bottom = lastRect.bottom;
                  const left = isTop ? firstRect.left : lastRect.left;
                  const right = isTop ? firstRect.right : lastRect.right;
                  const width = right - left;
                  const height = bottom - top;
                  return {
                    top,
                    bottom,
                    left,
                    right,
                    width,
                    height,
                    x: left,
                    y: top
                  };
                }
                const isLeftSide = getSide(placement) === "left";
                const maxRight = max(...clientRects.map((rect => rect.right)));
                const minLeft = min(...clientRects.map((rect => rect.left)));
                const measureRects = clientRects.filter((rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight));
                const top = measureRects[0].top;
                const bottom = measureRects[measureRects.length - 1].bottom;
                const left = minLeft;
                const right = maxRight;
                const width = right - left;
                const height = bottom - top;
                return {
                  top,
                  bottom,
                  left,
                  right,
                  width,
                  height,
                  x: left,
                  y: top
                };
              }
              return fallback;
            }
            const resetRects = await platform.getElementRects({
              reference: {
                getBoundingClientRect
              },
              floating: elements.floating,
              strategy
            });
            if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) return {
              reset: {
                rects: resetRects
              }
            };
            return {};
          }
        };
      };
      async function convertValueToCoords(state, options) {
        const {placement, platform, elements} = state;
        const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
        const side = floating_ui_utils_getSide(placement);
        const alignment = floating_ui_utils_getAlignment(placement);
        const isVertical = floating_ui_utils_getSideAxis(placement) === "y";
        const mainAxisMulti = [ "left", "top" ].includes(side) ? -1 : 1;
        const crossAxisMulti = rtl && isVertical ? -1 : 1;
        const rawValue = floating_ui_utils_evaluate(options, state);
        let {mainAxis, crossAxis, alignmentAxis} = typeof rawValue === "number" ? {
          mainAxis: rawValue,
          crossAxis: 0,
          alignmentAxis: null
        } : {
          mainAxis: rawValue.mainAxis || 0,
          crossAxis: rawValue.crossAxis || 0,
          alignmentAxis: rawValue.alignmentAxis
        };
        if (alignment && typeof alignmentAxis === "number") crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
        return isVertical ? {
          x: crossAxis * crossAxisMulti,
          y: mainAxis * mainAxisMulti
        } : {
          x: mainAxis * mainAxisMulti,
          y: crossAxis * crossAxisMulti
        };
      }
      const offset = function(options) {
        if (options === void 0) options = 0;
        return {
          name: "offset",
          options,
          async fn(state) {
            var _middlewareData$offse, _middlewareData$arrow;
            const {x, y, placement, middlewareData} = state;
            const diffCoords = await convertValueToCoords(state, options);
            if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
            return {
              x: x + diffCoords.x,
              y: y + diffCoords.y,
              data: {
                ...diffCoords,
                placement
              }
            };
          }
        };
      };
      const shift = function(options) {
        if (options === void 0) options = {};
        return {
          name: "shift",
          options,
          async fn(state) {
            const {x, y, placement} = state;
            const {mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = {
              fn: _ref => {
                let {x, y} = _ref;
                return {
                  x,
                  y
                };
              }
            }, ...detectOverflowOptions} = evaluate(options, state);
            const coords = {
              x,
              y
            };
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const crossAxis = getSideAxis(getSide(placement));
            const mainAxis = getOppositeAxis(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            if (checkMainAxis) {
              const minSide = mainAxis === "y" ? "top" : "left";
              const maxSide = mainAxis === "y" ? "bottom" : "right";
              const min = mainAxisCoord + overflow[minSide];
              const max = mainAxisCoord - overflow[maxSide];
              mainAxisCoord = clamp(min, mainAxisCoord, max);
            }
            if (checkCrossAxis) {
              const minSide = crossAxis === "y" ? "top" : "left";
              const maxSide = crossAxis === "y" ? "bottom" : "right";
              const min = crossAxisCoord + overflow[minSide];
              const max = crossAxisCoord - overflow[maxSide];
              crossAxisCoord = clamp(min, crossAxisCoord, max);
            }
            const limitedCoords = limiter.fn({
              ...state,
              [mainAxis]: mainAxisCoord,
              [crossAxis]: crossAxisCoord
            });
            return {
              ...limitedCoords,
              data: {
                x: limitedCoords.x - x,
                y: limitedCoords.y - y,
                enabled: {
                  [mainAxis]: checkMainAxis,
                  [crossAxis]: checkCrossAxis
                }
              }
            };
          }
        };
      };
      const limitShift = function(options) {
        if (options === void 0) options = {};
        return {
          options,
          fn(state) {
            const {x, y, placement, rects, middlewareData} = state;
            const {offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true} = evaluate(options, state);
            const coords = {
              x,
              y
            };
            const crossAxis = getSideAxis(placement);
            const mainAxis = getOppositeAxis(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            const rawOffset = evaluate(offset, state);
            const computedOffset = typeof rawOffset === "number" ? {
              mainAxis: rawOffset,
              crossAxis: 0
            } : {
              mainAxis: 0,
              crossAxis: 0,
              ...rawOffset
            };
            if (checkMainAxis) {
              const len = mainAxis === "y" ? "height" : "width";
              const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
              const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
              if (mainAxisCoord < limitMin) mainAxisCoord = limitMin; else if (mainAxisCoord > limitMax) mainAxisCoord = limitMax;
            }
            if (checkCrossAxis) {
              var _middlewareData$offse, _middlewareData$offse2;
              const len = mainAxis === "y" ? "width" : "height";
              const isOriginSide = [ "top", "left" ].includes(getSide(placement));
              const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
              const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
              if (crossAxisCoord < limitMin) crossAxisCoord = limitMin; else if (crossAxisCoord > limitMax) crossAxisCoord = limitMax;
            }
            return {
              [mainAxis]: mainAxisCoord,
              [crossAxis]: crossAxisCoord
            };
          }
        };
      };
      const size = function(options) {
        if (options === void 0) options = {};
        return {
          name: "size",
          options,
          async fn(state) {
            var _state$middlewareData, _state$middlewareData2;
            const {placement, rects, platform, elements} = state;
            const {apply = () => {}, ...detectOverflowOptions} = evaluate(options, state);
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const side = getSide(placement);
            const alignment = getAlignment(placement);
            const isYAxis = getSideAxis(placement) === "y";
            const {width, height} = rects.floating;
            let heightSide;
            let widthSide;
            if (side === "top" || side === "bottom") {
              heightSide = side;
              widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
            } else {
              widthSide = side;
              heightSide = alignment === "end" ? "top" : "bottom";
            }
            const maximumClippingHeight = height - overflow.top - overflow.bottom;
            const maximumClippingWidth = width - overflow.left - overflow.right;
            const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
            const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
            const noShift = !state.middlewareData.shift;
            let availableHeight = overflowAvailableHeight;
            let availableWidth = overflowAvailableWidth;
            if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) availableWidth = maximumClippingWidth;
            if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) availableHeight = maximumClippingHeight;
            if (noShift && !alignment) {
              const xMin = max(overflow.left, 0);
              const xMax = max(overflow.right, 0);
              const yMin = max(overflow.top, 0);
              const yMax = max(overflow.bottom, 0);
              if (isYAxis) availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right)); else availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
            }
            await apply({
              ...state,
              availableWidth,
              availableHeight
            });
            const nextDimensions = await platform.getDimensions(elements.floating);
            if (width !== nextDimensions.width || height !== nextDimensions.height) return {
              reset: {
                rects: true
              }
            };
            return {};
          }
        };
      };
      function hasWindow() {
        return typeof window !== "undefined";
      }
      function getNodeName(node) {
        if (isNode(node)) return (node.nodeName || "").toLowerCase();
        return "#document";
      }
      function getWindow(node) {
        var _node$ownerDocument;
        return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
      }
      function floating_ui_utils_dom_getDocumentElement(node) {
        var _ref;
        return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
      }
      function isNode(value) {
        if (!hasWindow()) return false;
        return value instanceof Node || value instanceof getWindow(value).Node;
      }
      function isElement(value) {
        if (!hasWindow()) return false;
        return value instanceof Element || value instanceof getWindow(value).Element;
      }
      function isHTMLElement(value) {
        if (!hasWindow()) return false;
        return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
      }
      function isShadowRoot(value) {
        if (!hasWindow() || typeof ShadowRoot === "undefined") return false;
        return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
      }
      function isOverflowElement(element) {
        const {overflow, overflowX, overflowY, display} = getComputedStyle(element);
        return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && ![ "inline", "contents" ].includes(display);
      }
      function isTableElement(element) {
        return [ "table", "td", "th" ].includes(getNodeName(element));
      }
      function isTopLayer(element) {
        return [ ":popover-open", ":modal" ].some((selector => {
          try {
            return element.matches(selector);
          } catch (e) {
            return false;
          }
        }));
      }
      function isContainingBlock(elementOrCss) {
        const webkit = isWebKit();
        const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
        return [ "transform", "translate", "scale", "rotate", "perspective" ].some((value => css[value] ? css[value] !== "none" : false)) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || [ "transform", "translate", "scale", "rotate", "perspective", "filter" ].some((value => (css.willChange || "").includes(value))) || [ "paint", "layout", "strict", "content" ].some((value => (css.contain || "").includes(value)));
      }
      function getContainingBlock(element) {
        let currentNode = getParentNode(element);
        while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
          if (isContainingBlock(currentNode)) return currentNode; else if (isTopLayer(currentNode)) return null;
          currentNode = getParentNode(currentNode);
        }
        return null;
      }
      function isWebKit() {
        if (typeof CSS === "undefined" || !CSS.supports) return false;
        return CSS.supports("-webkit-backdrop-filter", "none");
      }
      function isLastTraversableNode(node) {
        return [ "html", "body", "#document" ].includes(getNodeName(node));
      }
      function getComputedStyle(element) {
        return getWindow(element).getComputedStyle(element);
      }
      function getNodeScroll(element) {
        if (isElement(element)) return {
          scrollLeft: element.scrollLeft,
          scrollTop: element.scrollTop
        };
        return {
          scrollLeft: element.scrollX,
          scrollTop: element.scrollY
        };
      }
      function getParentNode(node) {
        if (getNodeName(node) === "html") return node;
        const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || floating_ui_utils_dom_getDocumentElement(node);
        return isShadowRoot(result) ? result.host : result;
      }
      function getNearestOverflowAncestor(node) {
        const parentNode = getParentNode(node);
        if (isLastTraversableNode(parentNode)) return node.ownerDocument ? node.ownerDocument.body : node.body;
        if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
        return getNearestOverflowAncestor(parentNode);
      }
      function floating_ui_utils_dom_getOverflowAncestors(node, list, traverseIframes) {
        var _node$ownerDocument2;
        if (list === void 0) list = [];
        if (traverseIframes === void 0) traverseIframes = true;
        const scrollableAncestor = getNearestOverflowAncestor(node);
        const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
        const win = getWindow(scrollableAncestor);
        if (isBody) {
          const frameElement = getFrameElement(win);
          return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? floating_ui_utils_dom_getOverflowAncestors(frameElement) : []);
        }
        return list.concat(scrollableAncestor, floating_ui_utils_dom_getOverflowAncestors(scrollableAncestor, [], traverseIframes));
      }
      function getFrameElement(win) {
        return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
      }
      function getCssDimensions(element) {
        const css = getComputedStyle(element);
        let width = parseFloat(css.width) || 0;
        let height = parseFloat(css.height) || 0;
        const hasOffset = isHTMLElement(element);
        const offsetWidth = hasOffset ? element.offsetWidth : width;
        const offsetHeight = hasOffset ? element.offsetHeight : height;
        const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
        if (shouldFallback) {
          width = offsetWidth;
          height = offsetHeight;
        }
        return {
          width,
          height,
          $: shouldFallback
        };
      }
      function unwrapElement(element) {
        return !isElement(element) ? element.contextElement : element;
      }
      function getScale(element) {
        const domElement = unwrapElement(element);
        if (!isHTMLElement(domElement)) return createCoords(1);
        const rect = domElement.getBoundingClientRect();
        const {width, height, $} = getCssDimensions(domElement);
        let x = ($ ? round(rect.width) : rect.width) / width;
        let y = ($ ? round(rect.height) : rect.height) / height;
        if (!x || !Number.isFinite(x)) x = 1;
        if (!y || !Number.isFinite(y)) y = 1;
        return {
          x,
          y
        };
      }
      const noOffsets = createCoords(0);
      function getVisualOffsets(element) {
        const win = getWindow(element);
        if (!isWebKit() || !win.visualViewport) return noOffsets;
        return {
          x: win.visualViewport.offsetLeft,
          y: win.visualViewport.offsetTop
        };
      }
      function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
        if (isFixed === void 0) isFixed = false;
        if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) return false;
        return isFixed;
      }
      function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
        if (includeScale === void 0) includeScale = false;
        if (isFixedStrategy === void 0) isFixedStrategy = false;
        const clientRect = element.getBoundingClientRect();
        const domElement = unwrapElement(element);
        let scale = createCoords(1);
        if (includeScale) if (offsetParent) {
          if (isElement(offsetParent)) scale = getScale(offsetParent);
        } else scale = getScale(element);
        const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
        let x = (clientRect.left + visualOffsets.x) / scale.x;
        let y = (clientRect.top + visualOffsets.y) / scale.y;
        let width = clientRect.width / scale.x;
        let height = clientRect.height / scale.y;
        if (domElement) {
          const win = getWindow(domElement);
          const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
          let currentWin = win;
          let currentIFrame = getFrameElement(currentWin);
          while (currentIFrame && offsetParent && offsetWin !== currentWin) {
            const iframeScale = getScale(currentIFrame);
            const iframeRect = currentIFrame.getBoundingClientRect();
            const css = getComputedStyle(currentIFrame);
            const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
            const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
            x *= iframeScale.x;
            y *= iframeScale.y;
            width *= iframeScale.x;
            height *= iframeScale.y;
            x += left;
            y += top;
            currentWin = getWindow(currentIFrame);
            currentIFrame = getFrameElement(currentWin);
          }
        }
        return floating_ui_utils_rectToClientRect({
          width,
          height,
          x,
          y
        });
      }
      function getWindowScrollBarX(element, rect) {
        const leftScroll = getNodeScroll(element).scrollLeft;
        if (!rect) return getBoundingClientRect(floating_ui_utils_dom_getDocumentElement(element)).left + leftScroll;
        return rect.left + leftScroll;
      }
      function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
        if (ignoreScrollbarX === void 0) ignoreScrollbarX = false;
        const htmlRect = documentElement.getBoundingClientRect();
        const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : getWindowScrollBarX(documentElement, htmlRect));
        const y = htmlRect.top + scroll.scrollTop;
        return {
          x,
          y
        };
      }
      function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
        let {elements, rect, offsetParent, strategy} = _ref;
        const isFixed = strategy === "fixed";
        const documentElement = floating_ui_utils_dom_getDocumentElement(offsetParent);
        const topLayer = elements ? isTopLayer(elements.floating) : false;
        if (offsetParent === documentElement || topLayer && isFixed) return rect;
        let scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        let scale = createCoords(1);
        const offsets = createCoords(0);
        const isOffsetParentAnElement = isHTMLElement(offsetParent);
        if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
          if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
          if (isHTMLElement(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent);
            scale = getScale(offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
          }
        }
        const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
        return {
          width: rect.width * scale.x,
          height: rect.height * scale.y,
          x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
          y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
        };
      }
      function getClientRects(element) {
        return Array.from(element.getClientRects());
      }
      function getDocumentRect(element) {
        const html = floating_ui_utils_dom_getDocumentElement(element);
        const scroll = getNodeScroll(element);
        const body = element.ownerDocument.body;
        const width = floating_ui_utils_max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
        const height = floating_ui_utils_max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
        let x = -scroll.scrollLeft + getWindowScrollBarX(element);
        const y = -scroll.scrollTop;
        if (getComputedStyle(body).direction === "rtl") x += floating_ui_utils_max(html.clientWidth, body.clientWidth) - width;
        return {
          width,
          height,
          x,
          y
        };
      }
      function getViewportRect(element, strategy) {
        const win = getWindow(element);
        const html = floating_ui_utils_dom_getDocumentElement(element);
        const visualViewport = win.visualViewport;
        let width = html.clientWidth;
        let height = html.clientHeight;
        let x = 0;
        let y = 0;
        if (visualViewport) {
          width = visualViewport.width;
          height = visualViewport.height;
          const visualViewportBased = isWebKit();
          if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
          }
        }
        return {
          width,
          height,
          x,
          y
        };
      }
      function getInnerBoundingClientRect(element, strategy) {
        const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
        const top = clientRect.top + element.clientTop;
        const left = clientRect.left + element.clientLeft;
        const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
        const width = element.clientWidth * scale.x;
        const height = element.clientHeight * scale.y;
        const x = left * scale.x;
        const y = top * scale.y;
        return {
          width,
          height,
          x,
          y
        };
      }
      function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
        let rect;
        if (clippingAncestor === "viewport") rect = getViewportRect(element, strategy); else if (clippingAncestor === "document") rect = getDocumentRect(floating_ui_utils_dom_getDocumentElement(element)); else if (isElement(clippingAncestor)) rect = getInnerBoundingClientRect(clippingAncestor, strategy); else {
          const visualOffsets = getVisualOffsets(element);
          rect = {
            x: clippingAncestor.x - visualOffsets.x,
            y: clippingAncestor.y - visualOffsets.y,
            width: clippingAncestor.width,
            height: clippingAncestor.height
          };
        }
        return floating_ui_utils_rectToClientRect(rect);
      }
      function hasFixedPositionAncestor(element, stopNode) {
        const parentNode = getParentNode(element);
        if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) return false;
        return getComputedStyle(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
      }
      function getClippingElementAncestors(element, cache) {
        const cachedResult = cache.get(element);
        if (cachedResult) return cachedResult;
        let result = floating_ui_utils_dom_getOverflowAncestors(element, [], false).filter((el => isElement(el) && getNodeName(el) !== "body"));
        let currentContainingBlockComputedStyle = null;
        const elementIsFixed = getComputedStyle(element).position === "fixed";
        let currentNode = elementIsFixed ? getParentNode(element) : element;
        while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
          const computedStyle = getComputedStyle(currentNode);
          const currentNodeIsContaining = isContainingBlock(currentNode);
          if (!currentNodeIsContaining && computedStyle.position === "fixed") currentContainingBlockComputedStyle = null;
          const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && [ "absolute", "fixed" ].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
          if (shouldDropCurrentNode) result = result.filter((ancestor => ancestor !== currentNode)); else currentContainingBlockComputedStyle = computedStyle;
          currentNode = getParentNode(currentNode);
        }
        cache.set(element, result);
        return result;
      }
      function getClippingRect(_ref) {
        let {element, boundary, rootBoundary, strategy} = _ref;
        const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
        const clippingAncestors = [ ...elementClippingAncestors, rootBoundary ];
        const firstClippingAncestor = clippingAncestors[0];
        const clippingRect = clippingAncestors.reduce(((accRect, clippingAncestor) => {
          const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
          accRect.top = floating_ui_utils_max(rect.top, accRect.top);
          accRect.right = floating_ui_utils_min(rect.right, accRect.right);
          accRect.bottom = floating_ui_utils_min(rect.bottom, accRect.bottom);
          accRect.left = floating_ui_utils_max(rect.left, accRect.left);
          return accRect;
        }), getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
        return {
          width: clippingRect.right - clippingRect.left,
          height: clippingRect.bottom - clippingRect.top,
          x: clippingRect.left,
          y: clippingRect.top
        };
      }
      function getDimensions(element) {
        const {width, height} = getCssDimensions(element);
        return {
          width,
          height
        };
      }
      function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
        const isOffsetParentAnElement = isHTMLElement(offsetParent);
        const documentElement = floating_ui_utils_dom_getDocumentElement(offsetParent);
        const isFixed = strategy === "fixed";
        const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
        let scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const offsets = createCoords(0);
        function setLeftRTLScrollbarOffset() {
          offsets.x = getWindowScrollBarX(documentElement);
        }
        if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
          if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
          if (isOffsetParentAnElement) {
            const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
          } else if (documentElement) setLeftRTLScrollbarOffset();
        }
        if (isFixed && !isOffsetParentAnElement && documentElement) setLeftRTLScrollbarOffset();
        const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
        const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
        const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
        return {
          x,
          y,
          width: rect.width,
          height: rect.height
        };
      }
      function isStaticPositioned(element) {
        return getComputedStyle(element).position === "static";
      }
      function getTrueOffsetParent(element, polyfill) {
        if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") return null;
        if (polyfill) return polyfill(element);
        let rawOffsetParent = element.offsetParent;
        if (floating_ui_utils_dom_getDocumentElement(element) === rawOffsetParent) rawOffsetParent = rawOffsetParent.ownerDocument.body;
        return rawOffsetParent;
      }
      function getOffsetParent(element, polyfill) {
        const win = getWindow(element);
        if (isTopLayer(element)) return win;
        if (!isHTMLElement(element)) {
          let svgOffsetParent = getParentNode(element);
          while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
            if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) return svgOffsetParent;
            svgOffsetParent = getParentNode(svgOffsetParent);
          }
          return win;
        }
        let offsetParent = getTrueOffsetParent(element, polyfill);
        while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) offsetParent = getTrueOffsetParent(offsetParent, polyfill);
        if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) return win;
        return offsetParent || getContainingBlock(element) || win;
      }
      const getElementRects = async function(data) {
        const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
        const getDimensionsFn = this.getDimensions;
        const floatingDimensions = await getDimensionsFn(data.floating);
        return {
          reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
          floating: {
            x: 0,
            y: 0,
            width: floatingDimensions.width,
            height: floatingDimensions.height
          }
        };
      };
      function isRTL(element) {
        return getComputedStyle(element).direction === "rtl";
      }
      const platform = {
        convertOffsetParentRelativeRectToViewportRelativeRect,
        getDocumentElement: floating_ui_utils_dom_getDocumentElement,
        getClippingRect,
        getOffsetParent,
        getElementRects,
        getClientRects,
        getDimensions,
        getScale,
        isElement,
        isRTL
      };
      function rectsAreEqual(a, b) {
        return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
      }
      function observeMove(element, onMove) {
        let io = null;
        let timeoutId;
        const root = getDocumentElement(element);
        function cleanup() {
          var _io;
          clearTimeout(timeoutId);
          (_io = io) == null || _io.disconnect();
          io = null;
        }
        function refresh(skip, threshold) {
          if (skip === void 0) skip = false;
          if (threshold === void 0) threshold = 1;
          cleanup();
          const elementRectForRootMargin = element.getBoundingClientRect();
          const {left, top, width, height} = elementRectForRootMargin;
          if (!skip) onMove();
          if (!width || !height) return;
          const insetTop = floor(top);
          const insetRight = floor(root.clientWidth - (left + width));
          const insetBottom = floor(root.clientHeight - (top + height));
          const insetLeft = floor(left);
          const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
          const options = {
            rootMargin,
            threshold: max(0, min(1, threshold)) || 1
          };
          let isFirstUpdate = true;
          function handleObserve(entries) {
            const ratio = entries[0].intersectionRatio;
            if (ratio !== threshold) {
              if (!isFirstUpdate) return refresh();
              if (!ratio) timeoutId = setTimeout((() => {
                refresh(false, 1e-7);
              }), 1e3); else refresh(false, ratio);
            }
            if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) refresh();
            isFirstUpdate = false;
          }
          try {
            io = new IntersectionObserver(handleObserve, {
              ...options,
              root: root.ownerDocument
            });
          } catch (_e) {
            io = new IntersectionObserver(handleObserve, options);
          }
          io.observe(element);
        }
        refresh(true);
        return cleanup;
      }
      function autoUpdate(reference, floating, update, options) {
        if (options === void 0) options = {};
        const {ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === "function", layoutShift = typeof IntersectionObserver === "function", animationFrame = false} = options;
        const referenceEl = unwrapElement(reference);
        const ancestors = ancestorScroll || ancestorResize ? [ ...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating) ] : [];
        ancestors.forEach((ancestor => {
          ancestorScroll && ancestor.addEventListener("scroll", update, {
            passive: true
          });
          ancestorResize && ancestor.addEventListener("resize", update);
        }));
        const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
        let reobserveFrame = -1;
        let resizeObserver = null;
        if (elementResize) {
          resizeObserver = new ResizeObserver((_ref => {
            let [firstEntry] = _ref;
            if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
              resizeObserver.unobserve(floating);
              cancelAnimationFrame(reobserveFrame);
              reobserveFrame = requestAnimationFrame((() => {
                var _resizeObserver;
                (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
              }));
            }
            update();
          }));
          if (referenceEl && !animationFrame) resizeObserver.observe(referenceEl);
          resizeObserver.observe(floating);
        }
        let frameId;
        let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
        if (animationFrame) frameLoop();
        function frameLoop() {
          const nextRefRect = getBoundingClientRect(reference);
          if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) update();
          prevRefRect = nextRefRect;
          frameId = requestAnimationFrame(frameLoop);
        }
        update();
        return () => {
          var _resizeObserver2;
          ancestors.forEach((ancestor => {
            ancestorScroll && ancestor.removeEventListener("scroll", update);
            ancestorResize && ancestor.removeEventListener("resize", update);
          }));
          cleanupIo == null || cleanupIo();
          (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
          resizeObserver = null;
          if (animationFrame) cancelAnimationFrame(frameId);
        };
      }
      const floating_ui_dom_detectOverflow = null && detectOverflow$1;
      const floating_ui_dom_offset = offset;
      const floating_ui_dom_autoPlacement = null && autoPlacement$1;
      const floating_ui_dom_shift = null && shift$1;
      const floating_ui_dom_flip = flip;
      const floating_ui_dom_size = null && size$1;
      const floating_ui_dom_hide = null && hide$1;
      const floating_ui_dom_arrow = null && arrow$1;
      const floating_ui_dom_inline = null && inline$1;
      const floating_ui_dom_limitShift = null && limitShift$1;
      const floating_ui_dom_computePosition = (reference, floating, options) => {
        const cache = new Map;
        const mergedOptions = {
          platform,
          ...options
        };
        const platformWithCache = {
          ...mergedOptions.platform,
          _c: cache
        };
        return computePosition(reference, floating, {
          ...mergedOptions,
          platform: platformWithCache
        });
      };
      var htmlHelper = __webpack_require__(519);
      const tooltipWindowId = "stashChecker-tooltipWindow";
      const outHandleKey = "outHandle";
      const inHandleKey = "inHandle";
      async function initTooltip() {
        let tooltipWindow = (0, htmlHelper.Sw)("stashChecker", "tooltip");
        tooltipWindow.style.display = "none";
        tooltipWindow.id = tooltipWindowId;
        tooltipWindow.addEventListener("mouseover", (() => {
          let outHandle = maybeParseInt(tooltipWindow.getAttribute(outHandleKey));
          console.info(`maybe clear out handle ${outHandle}`);
          window.clearTimeout(outHandle);
        }));
        tooltipWindow.addEventListener("mouseout", (() => {
          let outHandle = window.setTimeout((() => hideTooltip(tooltipWindow)), 500);
          console.info(`out handle: ${outHandle}`);
          tooltipWindow.setAttribute(outHandleKey, outHandle.toString());
        }));
        document.body.append(tooltipWindow);
      }
      function symbolMouseoverListener() {
        let tooltipWindow = document.getElementById(tooltipWindowId);
        let inHandle = window.setTimeout((() => displayTooltip(this, tooltipWindow)), 500);
        console.info(`in handle: ${inHandle}`);
        tooltipWindow.setAttribute(inHandleKey, inHandle.toString());
        let outHandle = maybeParseInt(tooltipWindow.getAttribute(outHandleKey));
        console.info(`maybe clear out handle ${outHandle}`);
        window.clearTimeout(outHandle);
      }
      function symbolMouseoutListener() {
        let tooltipWindow = document.getElementById(tooltipWindowId);
        let inHandle = maybeParseInt(tooltipWindow.getAttribute(inHandleKey));
        console.info(`maybe clear in handle ${inHandle}`);
        window.clearTimeout(inHandle);
        let outHandle = window.setTimeout((() => hideTooltip(tooltipWindow)), 500);
        console.info(`out handle: ${outHandle}`);
        tooltipWindow.setAttribute(outHandleKey, outHandle.toString());
      }
      function displayTooltip(stashSymbol, tooltipWindow) {
        console.info("run in");
        tooltipWindow.innerHTML = stashSymbol.getAttribute("data-info");
        tooltipWindow.style.display = "";
        let config = {
          placement: "top",
          strategy: "absolute",
          middleware: [ floating_ui_dom_flip(), floating_ui_dom_offset(10) ]
        };
        floating_ui_dom_computePosition(stashSymbol, tooltipWindow, config).then((({x, y}) => {
          tooltipWindow.style.left = `${x}px`;
          tooltipWindow.style.top = `${y}px`;
        }));
      }
      function hideTooltip(tooltipWindow) {
        console.info("run out");
        tooltipWindow.style.display = "none";
      }
      function maybeParseInt(string) {
        if (string !== null) return parseInt(string); else return;
      }
    },
    44: (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, (async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.d(__webpack_exports__, {
            W: () => initGeneralSettings
          });
          var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
          var _dataTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(389);
          var _elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(591);
          var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(710);
          var _htmlHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(519);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _settings__WEBPACK_IMPORTED_MODULE_0__, _providers__WEBPACK_IMPORTED_MODULE_2__ ]);
          [_settings__WEBPACK_IMPORTED_MODULE_0__, _providers__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          function initGeneralSettings() {
            let generalSection = (0, _settings__WEBPACK_IMPORTED_MODULE_0__.Lc)("general", "General");
            generalSection.classList.add("flex-row");
            populateGeneralSection(generalSection);
          }
          function populateGeneralSection(generalSection) {
            let symbolSettings = fieldSet("symbol-settings", "Symbol");
            symbolSettings.append((0, _elements__WEBPACK_IMPORTED_MODULE_3__.OO)(_providers__WEBPACK_IMPORTED_MODULE_2__.vw.showCheckMark, "Show check mark", _providers__WEBPACK_IMPORTED_MODULE_2__.$k), (0, 
            _elements__WEBPACK_IMPORTED_MODULE_3__.OO)(_providers__WEBPACK_IMPORTED_MODULE_2__.vw.showCrossMark, "Show cross mark", _providers__WEBPACK_IMPORTED_MODULE_2__.$k), (0, 
            _elements__WEBPACK_IMPORTED_MODULE_3__._V)(_providers__WEBPACK_IMPORTED_MODULE_2__.vw.checkMark, "Check mark", _providers__WEBPACK_IMPORTED_MODULE_2__.i3), (0, 
            _elements__WEBPACK_IMPORTED_MODULE_3__._V)(_providers__WEBPACK_IMPORTED_MODULE_2__.vw.warningMark, "Duplicate mark", _providers__WEBPACK_IMPORTED_MODULE_2__.i3), (0, 
            _elements__WEBPACK_IMPORTED_MODULE_3__._V)(_providers__WEBPACK_IMPORTED_MODULE_2__.vw.crossMark, "Cross mark", _providers__WEBPACK_IMPORTED_MODULE_2__.i3));
            generalSection.appendChild(symbolSettings);
            let tooltipSettings = fieldSet("tooltip-settings", "Tooltip");
            tooltipSettings.append((0, _elements__WEBPACK_IMPORTED_MODULE_3__.OO)(_providers__WEBPACK_IMPORTED_MODULE_2__.vw.showTags, "Show tags", _providers__WEBPACK_IMPORTED_MODULE_2__.$k), (0, 
            _elements__WEBPACK_IMPORTED_MODULE_3__.OO)(_providers__WEBPACK_IMPORTED_MODULE_2__.vw.showFiles, "Show files", _providers__WEBPACK_IMPORTED_MODULE_2__.$k), (0, 
            _elements__WEBPACK_IMPORTED_MODULE_3__.g4)(_providers__WEBPACK_IMPORTED_MODULE_2__.vw.theme, "Theme", [ _dataTypes__WEBPACK_IMPORTED_MODULE_1__.Sx.Light, _dataTypes__WEBPACK_IMPORTED_MODULE_1__.Sx.Dark, _dataTypes__WEBPACK_IMPORTED_MODULE_1__.Sx.Device ], _providers__WEBPACK_IMPORTED_MODULE_2__.i3));
            generalSection.appendChild(tooltipSettings);
            let defaultButton = fieldSet("default-button", "Default Settings");
            let div = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_4__.Sw)("option");
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
            _providers__WEBPACK_IMPORTED_MODULE_2__.$k.clear();
            _providers__WEBPACK_IMPORTED_MODULE_2__.i3.clear();
            let generalSection = (0, _settings__WEBPACK_IMPORTED_MODULE_0__.zH)("general");
            populateGeneralSection(generalSection);
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }));
    },
    56: (module, __unused_webpack_exports, __webpack_require__) => {
      function setAttributesWithoutAttributes(styleElement) {
        var nonce = true ? __webpack_require__.nc : 0;
        if (nonce) styleElement.setAttribute("nonce", nonce);
      }
      module.exports = setAttributesWithoutAttributes;
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
          var _observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(648);
          var _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(219);
          var _stashChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(782);
          var _statistics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(821);
          var _style_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(483);
          var _htmlHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(519);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__, _stashChecker__WEBPACK_IMPORTED_MODULE_1__, _statistics__WEBPACK_IMPORTED_MODULE_2__, _style_theme__WEBPACK_IMPORTED_MODULE_3__ ]);
          [_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__, _stashChecker__WEBPACK_IMPORTED_MODULE_1__, _statistics__WEBPACK_IMPORTED_MODULE_2__, _style_theme__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          function initSettingsWindow() {
            let settingsModal = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_4__.Sw)("stashChecker", "modal");
            settingsModal.id = "stashChecker-settingsModal";
            settingsModal.style.display = "none";
            settingsModal.addEventListener("click", closeSettingsWindow);
            let settings = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_4__.Sw)("stashChecker", "settings");
            settings.id = "stashChecker-settings";
            settingsModal.append(settings);
            document.body.append(settingsModal);
          }
          function newSettingsSection(id, title, description) {
            let section = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_4__.Sw)("stashChecker", "settingsSection");
            section.id = `stashChecker-settingsSection-${id}`;
            getSettings().append(section);
            let heading = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_4__.RA)(2, "stashChecker", "heading");
            heading.innerHTML = title;
            section.append(heading);
            if (description) {
              let text = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_4__.NY)("stashChecker", "sub-heading");
              text.innerHTML = description;
              section.append(text);
            }
            let body = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_4__.Sw)("stashChecker", "settingsSectionBody");
            body.id = `stashChecker-settingsSectionBody-${id}`;
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
              (0, _observer__WEBPACK_IMPORTED_MODULE_5__.r)();
              (0, _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__.T)();
              (0, _style_theme__WEBPACK_IMPORTED_MODULE_3__.Y)();
              void (0, _stashChecker__WEBPACK_IMPORTED_MODULE_1__.C)();
            }
          }
          function buttonPrimary(label, listener, classes = []) {
            let button = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_4__.Tf)("stashChecker", "btn", "btn-primary", ...classes);
            button.addEventListener("click", listener);
            button.innerHTML = label;
            return button;
          }
          function buttonDanger(label, listener, classes = []) {
            let button = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_4__.Tf)("stashChecker", "btn", "btn-danger", ...classes);
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
    113: module => {
      function styleTagTransform(css, styleElement) {
        if (styleElement.styleSheet) styleElement.styleSheet.cssText = css; else {
          while (styleElement.firstChild) styleElement.removeChild(styleElement.firstChild);
          styleElement.appendChild(document.createTextNode(css));
        }
      }
      module.exports = styleTagTransform;
    },
    156: (module, __unused_webpack___webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, (async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          var _style_main_important_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(397);
          var _settings_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(378);
          var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
          var _settings_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(513);
          var _settings_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
          var _stashChecker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(782);
          var _settings_statistics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(821);
          var _settings_display__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
          var _style_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(483);
          var _tooltip_tooltipElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _settings_endpoints__WEBPACK_IMPORTED_MODULE_1__, _settings_settings__WEBPACK_IMPORTED_MODULE_2__, _settings_menu__WEBPACK_IMPORTED_MODULE_3__, _settings_general__WEBPACK_IMPORTED_MODULE_4__, _stashChecker__WEBPACK_IMPORTED_MODULE_5__, _settings_statistics__WEBPACK_IMPORTED_MODULE_6__, _settings_display__WEBPACK_IMPORTED_MODULE_7__, _style_theme__WEBPACK_IMPORTED_MODULE_8__ ]);
          [_settings_endpoints__WEBPACK_IMPORTED_MODULE_1__, _settings_settings__WEBPACK_IMPORTED_MODULE_2__, _settings_menu__WEBPACK_IMPORTED_MODULE_3__, _settings_general__WEBPACK_IMPORTED_MODULE_4__, _stashChecker__WEBPACK_IMPORTED_MODULE_5__, _settings_statistics__WEBPACK_IMPORTED_MODULE_6__, _settings_display__WEBPACK_IMPORTED_MODULE_7__, _style_theme__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          (async function() {
            await (0, _tooltip_tooltipElement__WEBPACK_IMPORTED_MODULE_9__.AA)();
            (0, _settings_settings__WEBPACK_IMPORTED_MODULE_2__.yD)();
            (0, _settings_statistics__WEBPACK_IMPORTED_MODULE_6__.S)();
            (0, _settings_general__WEBPACK_IMPORTED_MODULE_4__.W)();
            (0, _settings_display__WEBPACK_IMPORTED_MODULE_7__.s)();
            (0, _style_theme__WEBPACK_IMPORTED_MODULE_8__.Y)();
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
    185: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        $R: () => bytesToReadable,
        Si: () => nakedDomain,
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
      function nakedDomain(url) {
        const regex = /^(https?:\/\/)?(www\.)?/i;
        return url.replace(regex, "");
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
    219: (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, (async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.d(__webpack_exports__, {
            T: () => clearSymbols,
            l: () => prefixSymbol
          });
          var _dataTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
          var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(185);
          var _stashQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(657);
          var _tooltipElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42);
          var _settings_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(710);
          var _htmlHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(519);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _settings_providers__WEBPACK_IMPORTED_MODULE_3__ ]);
          _settings_providers__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
          function getExistingSymbol(element) {
            if (element.getAttribute("data-type") === "stash-symbol") return element; else return Array.from(element.childNodes).filter((n => n.nodeType === Node.ELEMENT_NODE)).map((n => n)).map(getExistingSymbol).find((n => n));
          }
          function clearSymbols() {
            document.querySelectorAll(":not(.stashCheckerPreview).stashCheckerSymbol").forEach((symbol => symbol.remove()));
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
            return queries.map((query => new _stashQuery__WEBPACK_IMPORTED_MODULE_2__.M(query).toHtml(target, id, numQueries))).join("<br>");
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
                    let s = new _stashQuery__WEBPACK_IMPORTED_MODULE_2__.M(sourceQuery);
                    s.addTypes(targetQueries.get(key).types);
                    sourceQuery = s;
                  }
                  targetQueries.set(key, sourceQuery);
                }));
                sourceEntry.queries = Array.from(targetQueries.values()).map((q => new _stashQuery__WEBPACK_IMPORTED_MODULE_2__.M(q))).sort(((a, b) => a.compareTo(b)));
              }
              mapTarget.set(key, sourceEntry);
            }));
            return Array.from(mapTarget.values());
          }
          function entryKey(entry) {
            return `${entry.endpoint}-${entry.id}`;
          }
          function stashSymbol() {
            let symbol = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_4__.VI)("stashCheckerSymbol");
            symbol.setAttribute("data-type", "stash-symbol");
            symbol.setAttribute("data-count", "1");
            symbol.addEventListener("mouseover", _tooltipElement__WEBPACK_IMPORTED_MODULE_5__.aN);
            symbol.addEventListener("mouseout", _tooltipElement__WEBPACK_IMPORTED_MODULE_5__.Mf);
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
              if (_settings_providers__WEBPACK_IMPORTED_MODULE_3__.$k.get(_settings_providers__WEBPACK_IMPORTED_MODULE_3__.vw.showCrossMark)) symbol.innerHTML = `${_settings_providers__WEBPACK_IMPORTED_MODULE_3__.i3.get(_settings_providers__WEBPACK_IMPORTED_MODULE_3__.vw.crossMark)}&nbsp;`;
              symbol.style.color = "red";
              tooltip = `${targetReadable} not in Stash<br>`;
            } else if (new Set(data.map((e => e.endpoint))).size < data.length) {
              symbol.setAttribute("data-symbol", _dataTypes__WEBPACK_IMPORTED_MODULE_0__.Wb.Warning);
              symbol.innerHTML = `${_settings_providers__WEBPACK_IMPORTED_MODULE_3__.i3.get(_settings_providers__WEBPACK_IMPORTED_MODULE_3__.vw.warningMark)}&nbsp;`;
              symbol.style.color = "orange";
              tooltip = `${targetReadable} has duplicate matches<br>`;
            } else {
              symbol.setAttribute("data-symbol", _dataTypes__WEBPACK_IMPORTED_MODULE_0__.Wb.Check);
              if (_settings_providers__WEBPACK_IMPORTED_MODULE_3__.$k.get(_settings_providers__WEBPACK_IMPORTED_MODULE_3__.vw.showCheckMark)) symbol.innerHTML = `${_settings_providers__WEBPACK_IMPORTED_MODULE_3__.i3.get(_settings_providers__WEBPACK_IMPORTED_MODULE_3__.vw.checkMark)}&nbsp;`;
              symbol.style.color = data[0].display.color;
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
      var version = "1.15.6";
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
          supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window && (!Safari || IOS),
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
              preventOnFilter && evt.preventDefault();
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
              preventOnFilter && evt.preventDefault();
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
            if (options.supportPointer) {
              on(ownerDocument, "pointerup", _this._onDrop);
              !this.nativeDraggable && on(ownerDocument, "pointercancel", _this._onDrop);
            } else {
              on(ownerDocument, "mouseup", _this._onDrop);
              on(ownerDocument, "touchend", _this._onDrop);
              on(ownerDocument, "touchcancel", _this._onDrop);
            }
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
              if (options.supportPointer) {
                on(ownerDocument, "pointerup", _this._disableDelayedDrag);
                on(ownerDocument, "pointercancel", _this._disableDelayedDrag);
              } else {
                on(ownerDocument, "mouseup", _this._disableDelayedDrag);
                on(ownerDocument, "touchend", _this._disableDelayedDrag);
                on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
              }
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
          off(ownerDocument, "pointerup", this._disableDelayedDrag);
          off(ownerDocument, "pointercancel", this._disableDelayedDrag);
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
            } while (parent = getParentOrHost(parent));
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
          window.getSelection().removeAllRanges();
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
          off(ownerDocument, "pointercancel", this._onDrop);
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
        getChild,
        expando
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
                  if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) (function() {
                    var n, i;
                    if (currentIndex > lastIndex) {
                      i = lastIndex;
                      n = currentIndex;
                    } else {
                      i = currentIndex;
                      n = lastIndex + 1;
                    }
                    var filter = options.filter;
                    for (;i < n; i++) {
                      if (~multiDragElements.indexOf(children[i])) continue;
                      if (!closest(children[i], options.draggable, parentEl, false)) continue;
                      var filtered = filter && (typeof filter === "function" ? filter.call(sortable, evt, children[i], sortable) : filter.split(",").some((function(criteria) {
                        return closest(children[i], criteria.trim(), parentEl, false);
                      })));
                      if (filtered) continue;
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
                  })();
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
          var _htmlHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(519);
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
            endpointSection.classList.add("flex-column");
            await updateEndpoints(endpointSection);
          }
          async function updateEndpoints(container) {
            let endpointList = stashEndpoints.map(((endpoint, index) => {
              let div = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_3__.Sw)("stashChecker", "endpoint");
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
            let div = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_3__.Sw)("stashChecker", "endpoint");
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
    389: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        HD: () => readable,
        J7: () => DataField,
        Sx: () => Theme,
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
      var Theme;
      (function(Theme) {
        Theme["Light"] = "light";
        Theme["Dark"] = "dark";
        Theme["Device"] = "device";
      })(Theme || (Theme = {}));
    },
    397: (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
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
      var _node_modules_css_loader_dist_cjs_js_node_modules_cssimportant_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_important_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(452);
      var options = {};
      options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
      options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
      options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
      options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();
      var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_cssimportant_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_important_scss__WEBPACK_IMPORTED_MODULE_6__.A, options);
      var __WEBPACK_DEFAULT_EXPORT__ = _node_modules_css_loader_dist_cjs_js_node_modules_cssimportant_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_important_scss__WEBPACK_IMPORTED_MODULE_6__.A && _node_modules_css_loader_dist_cjs_js_node_modules_cssimportant_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_important_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_cssimportant_loader_index_js_node_modules_sass_loader_dist_cjs_js_main_important_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals : void 0;
    },
    452: (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => __WEBPACK_DEFAULT_EXPORT__
      });
      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
      ___CSS_LOADER_EXPORT___.push([ module.id, `:root {\n  --stash-checker-color-text: #323232 !important;\n  --stash-checker-color-text-light: #989898 !important;\n  --stash-checker-color-link-visited: #323232 !important;\n  --stash-checker-color-link-hover: #039 !important;\n  --stash-checker-color-link-active: #039 !important;\n  --stash-checker-color-border: #323232 !important;\n  --stash-checker-color-border-light: #989898 !important;\n  --stash-checker-color-bg: #ffffff !important;\n  --stash-checker-color-card: #f2f2f2 !important;\n}\n\n.stashChecker-dark-mode {\n  --stash-checker-color-text: #e0e0e0 !important;\n  --stash-checker-color-text-light: #707070 !important;\n  --stash-checker-color-link-visited: #c7c7c7 !important;\n  --stash-checker-color-link-hover: #f2f2f2 !important;\n  --stash-checker-color-link-active: #039 !important;\n  --stash-checker-color-border: #5a5a5a !important;\n  --stash-checker-color-border-light: #707070 !important;\n  --stash-checker-color-bg: #202020 !important;\n  --stash-checker-color-card: #464646 !important;\n}\n\n.stashChecker {\n  color: var(--stash-checker-color-text) !important;\n  text-align: left !important;\n  font-size: medium !important;\n  line-height: normal !important;\n  opacity: 1 !important;\n}\n\n.stashChecker.sub-heading {\n  font-size: .8rem !important;\n  text-align: center !important;\n  margin: 0 0 .5rem !important;\n}\n\n.stashChecker.tooltip {\n  visibility: visible !important;\n  z-index: 99999 !important;\n  background-color: var(--stash-checker-color-bg) !important;\n  border: .1rem solid var(--stash-checker-color-border) !important;\n  border-radius: .5rem !important;\n  padding: .5rem !important;\n  max-width: 60rem !important;\n  position: absolute !important;\n  width: max-content !important;\n}\n\n.stashChecker.file {\n  position: relative !important;\n  margin: .5rem !important;\n  padding: .5rem !important;\n  background-color: var(--stash-checker-color-card) !important;\n}\n\n.stashChecker.tag {\n  white-space: nowrap !important;\n  line-height: 1.5rem !important;\n  margin-right: .5rem !important;\n  padding: 0 .5rem !important;\n  background-color: var(--stash-checker-color-card) !important;\n  border-radius: .5rem !important;\n}\n\n.stashChecker.modal {\n  position: fixed !important;\n  z-index: 999999 !important;\n  left: 0 !important;\n  top: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n  overflow: hidden auto !important;\n  overscroll-behavior: contain !important;\n  background-color: #000 !important;\n  background-color: rgba(0,0,0,.4) !important;\n}\n\n.stashChecker.settings {\n  margin: 10vh auto !important;\n  background-color: var(--stash-checker-color-bg) !important;\n  border: .1rem solid var(--stash-checker-color-border) !important;\n  border-radius: .5rem !important;\n  padding: .5rem !important;\n  width: fit-content !important;\n  display: grid !important;\n  gap: 1rem !important;\n}\n\n.stashChecker.settings .version {\n  color: var(--stash-checker-color-text-light) !important;\n  font-size: 1.25rem !important;\n}\n\n.stashChecker.settingsSection {\n  width: 50rem !important;\n}\n\n.stashChecker.settingsSectionBody {\n  width: 100% !important;\n  gap: .5rem !important;\n}\n\n.stashChecker.flex-row {\n  display: flex !important;\n  flex-flow: row wrap !important;\n  justify-content: flex-start !important;\n  align-items: flex-start !important;\n}\n\n.stashChecker.flex-column {\n  display: flex !important;\n  flex-flow: column wrap !important;\n  justify-content: flex-start !important;\n  align-items: flex-start !important;\n}\n\n.stashChecker.align-end {\n  align-self: end !important;\n}\n\n.stashChecker .buttonCell {\n  display: flex !important;\n  flex-flow: row wrap !important;\n  justify-content: end !important;\n  column-gap: .2rem !important;\n}\n\n.stashChecker.endpoint {\n  width: 100% !important;\n  display: flex !important;\n  flex-direction: row !important;\n  justify-content: space-between !important;\n  justify-items: flex-start !important;\n  align-items: center !important;\n  padding: 1rem !important;\n  margin: .1rem !important;\n  background-color: var(--stash-checker-color-card) !important;\n}\n\n.stashChecker.endpoint>button {\n  flex-grow: 0 !important;\n  margin-left: .5rem !important;\n}\n\n.stashChecker.endpoint>div {\n  flex-grow: 1 !important;\n}\n\n.stashChecker.endpoint>div>* {\n  margin: 0 !important;\n}\n\n.stashChecker.heading {\n  font-size: 1.5rem !important;\n  text-align: center !important;\n}\n\n.stashChecker fieldset {\n  width: fit-content !important;\n  border: .1rem solid var(--stash-checker-color-border-light) !important;\n  border-radius: .5rem !important;\n  margin: .5rem 0 .5rem 0 !important;\n  padding: .5rem !important;\n  flex-grow: 1 !important;\n}\n\n.stashChecker legend {\n  float: unset !important;\n  width: auto !important;\n  height: auto !important;\n  margin-left: .5rem !important;\n  margin-bottom: 0 !important;\n  padding-left: .2rem !important;\n  padding-right: .2rem !important;\n  line-height: unset !important;\n  font-size: unset !important;\n}\n\n.stashChecker table {\n  width: 100% !important;\n}\n\n.stashChecker table,\n.stashChecker thead,\n.stashChecker tbody,\n.stashChecker tr,\n.stashChecker th,\n.stashChecker td {\n  border-collapse: collapse !important;\n  border: .1rem solid var(--stash-checker-color-border) !important;\n  padding: .2rem !important;\n}\n\n.stashChecker .center {\n  text-align: center !important;\n}\n\n.stashChecker .option {\n  text-align: right !important;\n  margin: .5rem !important;\n}\n\n.stashChecker .option>input {\n  margin-left: .5rem !important;\n  color: var(--stash-checker-color-text) !important;\n  background-color: var(--stash-checker-color-bg) !important;\n}\n\n.stashChecker .option>select {\n  margin-left: .5rem !important;\n}\n\n.stashChecker>.matchQuality {\n  width: .8em !important;\n  height: .8em !important;\n  display: inline-block !important;\n  border-radius: 50% !important;\n}\n\n.stashChecker.btn {\n  display: inline-block !important;\n  font-weight: 400 !important;\n  color: #212529 !important;\n  text-align: center !important;\n  vertical-align: middle !important;\n  user-select: none !important;\n  background-color: rgba(0,0,0,0) !important;\n  border: 1px solid rgba(0,0,0,0) !important;\n  padding: .375rem .75rem !important;\n  font-size: 1rem !important;\n  line-height: 1.5 !important;\n  border-radius: .25rem !important;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out !important;\n}\n\n.stashChecker.btn:not(:disabled):not(.disabled) {\n  cursor: pointer !important;\n}\n\n.stashChecker.btn:hover {\n  color: #212529 !important;\n  text-decoration: none !important;\n}\n\n.stashChecker.btn-primary {\n  color: #fff !important;\n  background-color: #137cbd !important;\n  border-color: #137cbd !important;\n}\n\n.stashChecker.btn-primary:hover {\n  color: #fff !important;\n  background-color: #10659a !important;\n  border-color: #0e5e8f !important;\n}\n\n.stashChecker.btn-danger {\n  color: #fff !important;\n  background-color: #db3737 !important;\n  border-color: #db3737 !important;\n}\n\n.stashChecker.btn-danger:hover {\n  color: #fff !important;\n  background-color: #c82424 !important;\n  border-color: #bd2222 !important;\n}\n\n.stashChecker.tooltip a:link {\n  color: var(--stash-checker-color-text) !important;\n}\n\n.stashChecker.tooltip a:visited {\n  color: var(--stash-checker-color-link-visited) !important;\n}\n\n.stashChecker.tooltip a:hover {\n  color: var(--stash-checker-color-link-hover) !important;\n}\n\n.stashChecker.tooltip a:active {\n  color: var(--stash-checker-color-link-active) !important;\n}\n\n.stashChecker.tooltip hr {\n  margin-top: .5rem !important;\n  margin-bottom: .5rem !important;\n  border-color: var(--stash-checker-color-border-light) !important;\n  background-color: var(--stash-checker-color-border-light) !important;\n}\n\n.stashChecker.tooltip hr+br {\n  display: none !important;\n}\n\n.stashChecker.file+br {\n  display: none !important;\n}\n\n.stashCheckerSymbol {\n  font-size: inherit !important;\n}`, "" ]);
      const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
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
          var _observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(648);
          var _settings_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
          var _settings_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(710);
          var urlpattern_polyfill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(487);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__, _settings_endpoints__WEBPACK_IMPORTED_MODULE_1__, _settings_display__WEBPACK_IMPORTED_MODULE_5__, _settings_providers__WEBPACK_IMPORTED_MODULE_6__ ]);
          [_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__, _settings_endpoints__WEBPACK_IMPORTED_MODULE_1__, _settings_display__WEBPACK_IMPORTED_MODULE_5__, _settings_providers__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
          const supportedDataFields = new Map([ [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Scene, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Title, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Organized, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Studio, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Code, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Date, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Tags, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Files ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Performer, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Name, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Disambiguation, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Favorite, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.AliasList, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Birthdate, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.HeightCm, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Tags ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Gallery, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Title, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Date, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Tags, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Files ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Movie, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Name, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Date ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Studio, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Name, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Aliases ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.We.Tag, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Name ] ] ]);
          const supportedSubDataFields = new Map([ [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Studio, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Name ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Tags, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Id, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Name ] ], [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Files, [ _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Path, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.VideoCodec, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Width, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Height, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Size, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.BitRate, _dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Duration ] ] ]);
          function getDataFields(target) {
            let supported = new Set(supportedDataFields.get(target) ?? []);
            if (!_settings_providers__WEBPACK_IMPORTED_MODULE_6__.$k.get(_settings_providers__WEBPACK_IMPORTED_MODULE_6__.vw.showTags)) supported.delete(_dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Tags);
            if (!_settings_providers__WEBPACK_IMPORTED_MODULE_6__.$k.get(_settings_providers__WEBPACK_IMPORTED_MODULE_6__.vw.showFiles)) supported.delete(_dataTypes__WEBPACK_IMPORTED_MODULE_3__.J7.Files);
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

             case _dataTypes__WEBPACK_IMPORTED_MODULE_3__.ZU.Url:
              filter = `${type}:{value:"""${encodeURIComponent(queryString)}""",modifier:INCLUDES}${customFilter}`;
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
                url = (0, _utils__WEBPACK_IMPORTED_MODULE_2__.Si)(url);
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
            let targetRules = _settings_display__WEBPACK_IMPORTED_MODULE_5__.p.filter((rule => rule.target === target));
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
    483: (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, (async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.d(__webpack_exports__, {
            Y: () => setTheme
          });
          var _dataTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
          var _settings_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(710);
          var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _settings_providers__WEBPACK_IMPORTED_MODULE_1__ ]);
          _settings_providers__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
          function setTheme() {
            const osSetting = window.matchMedia("(prefers-color-scheme: dark)");
            function toggleDarkMode(state) {
              document.documentElement.classList.toggle("stashChecker-dark-mode", state);
            }
            switch (_settings_providers__WEBPACK_IMPORTED_MODULE_1__.i3.get(_settings_providers__WEBPACK_IMPORTED_MODULE_1__.vw.theme)) {
             case _dataTypes__WEBPACK_IMPORTED_MODULE_0__.Sx.Light:
              toggleDarkMode(false);
              break;

             case _dataTypes__WEBPACK_IMPORTED_MODULE_0__.Sx.Dark:
              toggleDarkMode(true);
              break;

             case _dataTypes__WEBPACK_IMPORTED_MODULE_0__.Sx.Device:
             default:
              toggleDarkMode(osSetting.matches);
              break;
            }
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }));
    },
    487: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        I: () => Y
      });
      var Pe = Object.defineProperty;
      var a = (e, t) => Pe(e, "name", {
        value: t,
        configurable: !0
      });
      var P = class {
        type=3;
        name="";
        prefix="";
        value="";
        suffix="";
        modifier=3;
        constructor(t, r, n, c, l, f) {
          this.type = t, this.name = r, this.prefix = n, this.value = c, this.suffix = l, 
          this.modifier = f;
        }
        hasCustomName() {
          return this.name !== "" && typeof this.name != "number";
        }
      };
      a(P, "Part");
      var Re = /[$_\p{ID_Start}]/u, Ee = /[$_\u200C\u200D\p{ID_Continue}]/u, v = ".*";
      function Oe(e, t) {
        return (t ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(e);
      }
      a(Oe, "isASCII");
      function D(e, t = !1) {
        let r = [], n = 0;
        for (;n < e.length; ) {
          let c = e[n], l = a((function(f) {
            if (!t) throw new TypeError(f);
            r.push({
              type: "INVALID_CHAR",
              index: n,
              value: e[n++]
            });
          }), "ErrorOrInvalid");
          if (c === "*") {
            r.push({
              type: "ASTERISK",
              index: n,
              value: e[n++]
            });
            continue;
          }
          if (c === "+" || c === "?") {
            r.push({
              type: "OTHER_MODIFIER",
              index: n,
              value: e[n++]
            });
            continue;
          }
          if (c === "\\") {
            r.push({
              type: "ESCAPED_CHAR",
              index: n++,
              value: e[n++]
            });
            continue;
          }
          if (c === "{") {
            r.push({
              type: "OPEN",
              index: n,
              value: e[n++]
            });
            continue;
          }
          if (c === "}") {
            r.push({
              type: "CLOSE",
              index: n,
              value: e[n++]
            });
            continue;
          }
          if (c === ":") {
            let f = "", s = n + 1;
            for (;s < e.length; ) {
              let i = e.substr(s, 1);
              if (s === n + 1 && Re.test(i) || s !== n + 1 && Ee.test(i)) {
                f += e[s++];
                continue;
              }
              break;
            }
            if (!f) {
              l(`Missing parameter name at ${n}`);
              continue;
            }
            r.push({
              type: "NAME",
              index: n,
              value: f
            }), n = s;
            continue;
          }
          if (c === "(") {
            let f = 1, s = "", i = n + 1, o = !1;
            if (e[i] === "?") {
              l(`Pattern cannot start with "?" at ${i}`);
              continue;
            }
            for (;i < e.length; ) {
              if (!Oe(e[i], !1)) {
                l(`Invalid character '${e[i]}' at ${i}.`), o = !0;
                break;
              }
              if (e[i] === "\\") {
                s += e[i++] + e[i++];
                continue;
              }
              if (e[i] === ")") {
                if (f--, f === 0) {
                  i++;
                  break;
                }
              } else if (e[i] === "(" && (f++, e[i + 1] !== "?")) {
                l(`Capturing groups are not allowed at ${i}`), o = !0;
                break;
              }
              s += e[i++];
            }
            if (o) continue;
            if (f) {
              l(`Unbalanced pattern at ${n}`);
              continue;
            }
            if (!s) {
              l(`Missing pattern at ${n}`);
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
      a(D, "lexer");
      function F(e, t = {}) {
        let r = D(e);
        t.delimiter ??= "/#?", t.prefixes ??= "./";
        let n = `[^${x(t.delimiter)}]+?`, c = [], l = 0, f = 0, s = "", i = new Set, o = a((u => {
          if (f < r.length && r[f].type === u) return r[f++].value;
        }), "tryConsume"), h = a((() => o("OTHER_MODIFIER") ?? o("ASTERISK")), "tryConsumeModifier"), p = a((u => {
          let d = o(u);
          if (d !== void 0) return d;
          let {type: g, index: y} = r[f];
          throw new TypeError(`Unexpected ${g} at ${y}, expected ${u}`);
        }), "mustConsume"), A = a((() => {
          let u = "", d;
          for (;d = o("CHAR") ?? o("ESCAPED_CHAR"); ) u += d;
          return u;
        }), "consumeText"), xe = a((u => u), "DefaultEncodePart"), N = t.encodePart || xe, H = "", $ = a((u => {
          H += u;
        }), "appendToPendingFixedValue"), M = a((() => {
          H.length && (c.push(new P(3, "", "", N(H), "", 3)), H = "");
        }), "maybeAddPartFromPendingFixedValue"), X = a(((u, d, g, y, Z) => {
          let m = 3;
          switch (Z) {
           case "?":
            m = 1;
            break;

           case "*":
            m = 0;
            break;

           case "+":
            m = 2;
            break;
          }
          if (!d && !g && m === 3) {
            $(u);
            return;
          }
          if (M(), !d && !g) {
            if (!u) return;
            c.push(new P(3, "", "", N(u), "", m));
            return;
          }
          let S;
          g ? g === "*" ? S = v : S = g : S = n;
          let k = 2;
          S === n ? (k = 1, S = "") : S === v && (k = 0, S = "");
          let E;
          if (d ? E = d : g && (E = l++), i.has(E)) throw new TypeError(`Duplicate name '${E}'.`);
          i.add(E), c.push(new P(k, E, N(u), S, N(y), m));
        }), "addPart");
        for (;f < r.length; ) {
          let u = o("CHAR"), d = o("NAME"), g = o("REGEX");
          if (!d && !g && (g = o("ASTERISK")), d || g) {
            let m = u ?? "";
            t.prefixes.indexOf(m) === -1 && ($(m), m = ""), M();
            let S = h();
            X(m, d, g, "", S);
            continue;
          }
          let y = u ?? o("ESCAPED_CHAR");
          if (y) {
            $(y);
            continue;
          }
          if (o("OPEN")) {
            let m = A(), S = o("NAME"), k = o("REGEX");
            !S && !k && (k = o("ASTERISK"));
            let E = A();
            p("CLOSE");
            let be = h();
            X(m, S, k, E, be);
            continue;
          }
          M(), p("END");
        }
        return c;
      }
      a(F, "parse");
      function x(e) {
        return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
      }
      a(x, "escapeString");
      function B(e) {
        return e && e.ignoreCase ? "ui" : "u";
      }
      a(B, "flags");
      function q(e, t, r) {
        return W(F(e, r), t, r);
      }
      a(q, "stringToRegexp");
      function T(e) {
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
      a(T, "modifierToString");
      function W(e, t, r = {}) {
        r.delimiter ??= "/#?", r.prefixes ??= "./", r.sensitive ??= !1, r.strict ??= !1, 
        r.end ??= !0, r.start ??= !0, r.endsWith = "";
        let n = r.start ? "^" : "";
        for (let s of e) {
          if (s.type === 3) {
            s.modifier === 3 ? n += x(s.value) : n += `(?:${x(s.value)})${T(s.modifier)}`;
            continue;
          }
          t && t.push(s.name);
          let i = `[^${x(r.delimiter)}]+?`, o = s.value;
          if (s.type === 1 ? o = i : s.type === 0 && (o = v), !s.prefix.length && !s.suffix.length) {
            s.modifier === 3 || s.modifier === 1 ? n += `(${o})${T(s.modifier)}` : n += `((?:${o})${T(s.modifier)})`;
            continue;
          }
          if (s.modifier === 3 || s.modifier === 1) {
            n += `(?:${x(s.prefix)}(${o})${x(s.suffix)})`, n += T(s.modifier);
            continue;
          }
          n += `(?:${x(s.prefix)}`, n += `((?:${o})(?:`, n += x(s.suffix), n += x(s.prefix), 
          n += `(?:${o}))*)${x(s.suffix)})`, s.modifier === 0 && (n += "?");
        }
        let c = `[${x(r.endsWith)}]|$`, l = `[${x(r.delimiter)}]`;
        if (r.end) return r.strict || (n += `${l}?`), r.endsWith.length ? n += `(?=${c})` : n += "$", 
        new RegExp(n, B(r));
        r.strict || (n += `(?:${l}(?=${c}))?`);
        let f = !1;
        if (e.length) {
          let s = e[e.length - 1];
          s.type === 3 && s.modifier === 3 && (f = r.delimiter.indexOf(s) > -1);
        }
        return f || (n += `(?=${l}|${c})`), new RegExp(n, B(r));
      }
      a(W, "partsToRegexp");
      var b = {
        delimiter: "",
        prefixes: "",
        sensitive: !0,
        strict: !0
      }, J = {
        delimiter: ".",
        prefixes: "",
        sensitive: !0,
        strict: !0
      }, Q = {
        delimiter: "/",
        prefixes: "/",
        sensitive: !0,
        strict: !0
      };
      function ee(e, t) {
        return e.length ? e[0] === "/" ? !0 : !t || e.length < 2 ? !1 : (e[0] == "\\" || e[0] == "{") && e[1] == "/" : !1;
      }
      a(ee, "isAbsolutePathname");
      function te(e, t) {
        return e.startsWith(t) ? e.substring(t.length, e.length) : e;
      }
      a(te, "maybeStripPrefix");
      function ke(e, t) {
        return e.endsWith(t) ? e.substr(0, e.length - t.length) : e;
      }
      a(ke, "maybeStripSuffix");
      function _(e) {
        return !e || e.length < 2 ? !1 : e[0] === "[" || (e[0] === "\\" || e[0] === "{") && e[1] === "[";
      }
      a(_, "treatAsIPv6Hostname");
      var re = [ "ftp", "file", "http", "https", "ws", "wss" ];
      function U(e) {
        if (!e) return !0;
        for (let t of re) if (e.test(t)) return !0;
        return !1;
      }
      a(U, "isSpecialScheme");
      function ne(e, t) {
        if (e = te(e, "#"), t || e === "") return e;
        let r = new URL("https://example.com");
        return r.hash = e, r.hash ? r.hash.substring(1, r.hash.length) : "";
      }
      a(ne, "canonicalizeHash");
      function se(e, t) {
        if (e = te(e, "?"), t || e === "") return e;
        let r = new URL("https://example.com");
        return r.search = e, r.search ? r.search.substring(1, r.search.length) : "";
      }
      a(se, "canonicalizeSearch");
      function ie(e, t) {
        return t || e === "" ? e : _(e) ? K(e) : j(e);
      }
      a(ie, "canonicalizeHostname");
      function ae(e, t) {
        if (t || e === "") return e;
        let r = new URL("https://example.com");
        return r.password = e, r.password;
      }
      a(ae, "canonicalizePassword");
      function oe(e, t) {
        if (t || e === "") return e;
        let r = new URL("https://example.com");
        return r.username = e, r.username;
      }
      a(oe, "canonicalizeUsername");
      function ce(e, t, r) {
        if (r || e === "") return e;
        if (t && !re.includes(t)) return new URL(`${t}:${e}`).pathname;
        let n = e[0] == "/";
        return e = new URL(n ? e : "/-" + e, "https://example.com").pathname, n || (e = e.substring(2, e.length)), 
        e;
      }
      a(ce, "canonicalizePathname");
      function le(e, t, r) {
        return z(t) === e && (e = ""), r || e === "" ? e : G(e);
      }
      a(le, "canonicalizePort");
      function fe(e, t) {
        return e = ke(e, ":"), t || e === "" ? e : w(e);
      }
      a(fe, "canonicalizeProtocol");
      function z(e) {
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
      a(z, "defaultPortForProtocol");
      function w(e) {
        if (e === "") return e;
        if (/^[-+.A-Za-z0-9]*$/.test(e)) return e.toLowerCase();
        throw new TypeError(`Invalid protocol '${e}'.`);
      }
      a(w, "protocolEncodeCallback");
      function he(e) {
        if (e === "") return e;
        let t = new URL("https://example.com");
        return t.username = e, t.username;
      }
      a(he, "usernameEncodeCallback");
      function ue(e) {
        if (e === "") return e;
        let t = new URL("https://example.com");
        return t.password = e, t.password;
      }
      a(ue, "passwordEncodeCallback");
      function j(e) {
        if (e === "") return e;
        if (/[\t\n\r #%/:<>?@[\]^\\|]/g.test(e)) throw new TypeError(`Invalid hostname '${e}'`);
        let t = new URL("https://example.com");
        return t.hostname = e, t.hostname;
      }
      a(j, "hostnameEncodeCallback");
      function K(e) {
        if (e === "") return e;
        if (/[^0-9a-fA-F[\]:]/g.test(e)) throw new TypeError(`Invalid IPv6 hostname '${e}'`);
        return e.toLowerCase();
      }
      a(K, "ipv6HostnameEncodeCallback");
      function G(e) {
        if (e === "" || /^[0-9]*$/.test(e) && parseInt(e) <= 65535) return e;
        throw new TypeError(`Invalid port '${e}'.`);
      }
      a(G, "portEncodeCallback");
      function de(e) {
        if (e === "") return e;
        let t = new URL("https://example.com");
        return t.pathname = e[0] !== "/" ? "/-" + e : e, e[0] !== "/" ? t.pathname.substring(2, t.pathname.length) : t.pathname;
      }
      a(de, "standardURLPathnameEncodeCallback");
      function pe(e) {
        return e === "" ? e : new URL(`data:${e}`).pathname;
      }
      a(pe, "pathURLPathnameEncodeCallback");
      function ge(e) {
        if (e === "") return e;
        let t = new URL("https://example.com");
        return t.search = e, t.search.substring(1, t.search.length);
      }
      a(ge, "searchEncodeCallback");
      function me(e) {
        if (e === "") return e;
        let t = new URL("https://example.com");
        return t.hash = e, t.hash.substring(1, t.hash.length);
      }
      a(me, "hashEncodeCallback");
      var C = class {
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
          for (this.#n = D(this.#i, !0); this.#e < this.#n.length; this.#e += this.#s) {
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
          Object.assign(t, b), t.encodePart = w;
          let r = q(this.#c(), void 0, t);
          this.#g = U(r);
        }
      };
      a(C, "Parser");
      var V = [ "protocol", "username", "password", "hostname", "port", "pathname", "search", "hash" ], O = "*";
      function Se(e, t) {
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
      a(Se, "extractValues");
      function R(e, t) {
        return t ? I(e) : e;
      }
      a(R, "processBaseURLString");
      function L(e, t, r) {
        let n;
        if (typeof t.baseURL == "string") try {
          n = new URL(t.baseURL), t.protocol === void 0 && (e.protocol = R(n.protocol.substring(0, n.protocol.length - 1), r)), 
          !r && t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.username === void 0 && (e.username = R(n.username, r)), 
          !r && t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.username === void 0 && t.password === void 0 && (e.password = R(n.password, r)), 
          t.protocol === void 0 && t.hostname === void 0 && (e.hostname = R(n.hostname, r)), 
          t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && (e.port = R(n.port, r)), 
          t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && (e.pathname = R(n.pathname, r)), 
          t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && t.search === void 0 && (e.search = R(n.search.substring(1, n.search.length), r)), 
          t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && t.search === void 0 && t.hash === void 0 && (e.hash = R(n.hash.substring(1, n.hash.length), r));
        } catch {
          throw new TypeError(`invalid baseURL '${t.baseURL}'.`);
        }
        if (typeof t.protocol == "string" && (e.protocol = fe(t.protocol, r)), typeof t.username == "string" && (e.username = oe(t.username, r)), 
        typeof t.password == "string" && (e.password = ae(t.password, r)), typeof t.hostname == "string" && (e.hostname = ie(t.hostname, r)), 
        typeof t.port == "string" && (e.port = le(t.port, e.protocol, r)), typeof t.pathname == "string") {
          if (e.pathname = t.pathname, n && !ee(e.pathname, r)) {
            let c = n.pathname.lastIndexOf("/");
            c >= 0 && (e.pathname = R(n.pathname.substring(0, c + 1), r) + e.pathname);
          }
          e.pathname = ce(e.pathname, e.protocol, r);
        }
        return typeof t.search == "string" && (e.search = se(t.search, r)), typeof t.hash == "string" && (e.hash = ne(t.hash, r)), 
        e;
      }
      a(L, "applyInit");
      function I(e) {
        return e.replace(/([+*?:{}()\\])/g, "\\$1");
      }
      a(I, "escapePatternString");
      function Te(e) {
        return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
      }
      a(Te, "escapeRegexpString");
      function Ae(e, t) {
        t.delimiter ??= "/#?", t.prefixes ??= "./", t.sensitive ??= !1, t.strict ??= !1, 
        t.end ??= !0, t.start ??= !0, t.endsWith = "";
        let r = ".*", n = `[^${Te(t.delimiter)}]+?`, c = /[$_\u200C\u200D\p{ID_Continue}]/u, l = "";
        for (let f = 0; f < e.length; ++f) {
          let s = e[f];
          if (s.type === 3) {
            if (s.modifier === 3) {
              l += I(s.value);
              continue;
            }
            l += `{${I(s.value)}}${T(s.modifier)}`;
            continue;
          }
          let i = s.hasCustomName(), o = !!s.suffix.length || !!s.prefix.length && (s.prefix.length !== 1 || !t.prefixes.includes(s.prefix)), h = f > 0 ? e[f - 1] : null, p = f < e.length - 1 ? e[f + 1] : null;
          if (!o && i && s.type === 1 && s.modifier === 3 && p && !p.prefix.length && !p.suffix.length) if (p.type === 3) {
            let A = p.value.length > 0 ? p.value[0] : "";
            o = c.test(A);
          } else o = !p.hasCustomName();
          if (!o && !s.prefix.length && h && h.type === 3) {
            let A = h.value[h.value.length - 1];
            o = t.prefixes.includes(A);
          }
          o && (l += "{"), l += I(s.prefix), i && (l += `:${s.name}`), s.type === 2 ? l += `(${s.value})` : s.type === 1 ? i || (l += `(${n})`) : s.type === 0 && (!i && (!h || h.type === 3 || h.modifier !== 3 || o || s.prefix !== "") ? l += "*" : l += `(${r})`), 
          s.type === 1 && i && s.suffix.length && c.test(s.suffix[0]) && (l += "\\"), l += I(s.suffix), 
          o && (l += "}"), s.modifier !== 3 && (l += T(s.modifier));
        }
        return l;
      }
      a(Ae, "partsToPattern");
      var Y = class {
        #i;
        #n={};
        #t={};
        #e={};
        #s={};
        #l=!1;
        constructor(t = {}, r, n) {
          try {
            let c;
            if (typeof r == "string" ? c = r : n = r, typeof t == "string") {
              let i = new C(t);
              if (i.parse(), t = i.result, c === void 0 && typeof t.protocol != "string") throw new TypeError("A base URL must be provided for a relative constructor string.");
              t.baseURL = c;
            } else {
              if (!t || typeof t != "object") throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");
              if (c) throw new TypeError("parameter 1 is not of type 'string'.");
            }
            typeof n > "u" && (n = {
              ignoreCase: !1
            });
            let l = {
              ignoreCase: n.ignoreCase === !0
            }, f = {
              pathname: O,
              protocol: O,
              username: O,
              password: O,
              hostname: O,
              port: O,
              search: O,
              hash: O
            };
            this.#i = L(f, t, !0), z(this.#i.protocol) === this.#i.port && (this.#i.port = "");
            let s;
            for (s of V) {
              if (!(s in this.#i)) continue;
              let i = {}, o = this.#i[s];
              switch (this.#t[s] = [], s) {
               case "protocol":
                Object.assign(i, b), i.encodePart = w;
                break;

               case "username":
                Object.assign(i, b), i.encodePart = he;
                break;

               case "password":
                Object.assign(i, b), i.encodePart = ue;
                break;

               case "hostname":
                Object.assign(i, J), _(o) ? i.encodePart = K : i.encodePart = j;
                break;

               case "port":
                Object.assign(i, b), i.encodePart = G;
                break;

               case "pathname":
                U(this.#n.protocol) ? (Object.assign(i, Q, l), i.encodePart = de) : (Object.assign(i, b, l), 
                i.encodePart = pe);
                break;

               case "search":
                Object.assign(i, b, l), i.encodePart = ge;
                break;

               case "hash":
                Object.assign(i, b, l), i.encodePart = me;
                break;
              }
              try {
                this.#s[s] = F(o, i), this.#n[s] = W(this.#s[s], this.#t[s], i), this.#e[s] = Ae(this.#s[s], i), 
                this.#l = this.#l || this.#s[s].some((h => h.type === 2));
              } catch {
                throw new TypeError(`invalid ${s} pattern '${this.#i[s]}'.`);
              }
            }
          } catch (c) {
            throw new TypeError(`Failed to construct 'URLPattern': ${c.message}`);
          }
        }
        get [Symbol.toStringTag]() {
          return "URLPattern";
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
            typeof t == "object" ? n = L(n, t, !1) : n = L(n, Se(t, r), !1);
          } catch {
            return !1;
          }
          let c;
          for (c of V) if (!this.#n[c].exec(n[c])) return !1;
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
            typeof t == "object" ? n = L(n, t, !1) : n = L(n, Se(t, r), !1);
          } catch {
            return null;
          }
          let c = {};
          r ? c.inputs = [ t, r ] : c.inputs = [ t ];
          let l;
          for (l of V) {
            let f = this.#n[l].exec(n[l]);
            if (!f) return null;
            let s = {};
            for (let [i, o] of this.#t[l].entries()) if (typeof o == "string" || typeof o == "number") {
              let h = f[i + 1];
              s[o] = h;
            }
            c[l] = {
              input: n[l] ?? "",
              groups: s
            };
          }
          return c;
        }
        static compareComponent(t, r, n) {
          let c = a(((i, o) => {
            for (let h of [ "type", "modifier", "prefix", "value", "suffix" ]) {
              if (i[h] < o[h]) return -1;
              if (i[h] === o[h]) continue;
              return 1;
            }
            return 0;
          }), "comparePart"), l = new P(3, "", "", "", "", 3), f = new P(0, "", "", "", "", 3), s = a(((i, o) => {
            let h = 0;
            for (;h < Math.min(i.length, o.length); ++h) {
              let p = c(i[h], o[h]);
              if (p) return p;
            }
            return i.length === o.length ? 0 : c(i[h] ?? l, o[h] ?? l);
          }), "comparePartList");
          return !r.#e[t] && !n.#e[t] ? 0 : r.#e[t] && !n.#e[t] ? s(r.#s[t], [ f ]) : !r.#e[t] && n.#e[t] ? s([ f ], n.#s[t]) : s(r.#s[t], n.#s[t]);
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
      a(Y, "URLPattern");
      if (!globalThis.URLPattern) globalThis.URLPattern = Y;
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
    519: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        $0: () => createTableBody,
        NY: () => createParagraph,
        RA: () => createHeading,
        Sw: () => createDiv,
        Tf: () => createButton,
        Tg: () => createTableCell,
        VI: () => createSpan,
        Ve: () => createTableHead,
        ZR: () => createTable,
        dc: () => createTableRow,
        fp: () => createLabel,
        ph: () => createInput,
        qi: () => createBreak
      });
      function createBreak(...classes) {
        let element = document.createElement("br");
        if (classes.length !== 0) element.classList.add(...classes);
        return element;
      }
      function createButton(...classes) {
        let element = document.createElement("button");
        if (classes.length !== 0) element.classList.add(...classes);
        return element;
      }
      function createDiv(...classes) {
        let element = document.createElement("div");
        if (classes.length !== 0) element.classList.add(...classes);
        return element;
      }
      function createInput(...classes) {
        let element = document.createElement("input");
        if (classes.length !== 0) element.classList.add(...classes);
        return element;
      }
      function createLabel(...classes) {
        let element = document.createElement("label");
        if (classes.length !== 0) element.classList.add(...classes);
        return element;
      }
      function createParagraph(...classes) {
        let element = document.createElement("p");
        if (classes.length !== 0) element.classList.add(...classes);
        return element;
      }
      function createSpan(...classes) {
        let element = document.createElement("span");
        if (classes.length !== 0) element.classList.add(...classes);
        return element;
      }
      function createHeading(size, ...classes) {
        let element;
        switch (size) {
         case 1:
          element = document.createElement("h1");
          break;

         case 2:
          element = document.createElement("h2");
          break;

         case 3:
          element = document.createElement("h3");
          break;

         case 4:
          element = document.createElement("h4");
          break;

         case 5:
          element = document.createElement("h5");
          break;

         case 6:
          element = document.createElement("h6");
          break;

         default:
          throw Error("Size not a valid header size");
        }
        if (classes.length !== 0) element.classList.add(...classes);
        return element;
      }
      function createTable(...classes) {
        let element = document.createElement("table");
        if (classes.length !== 0) element.classList.add(...classes);
        return element;
      }
      function createTableBody(...classes) {
        let element = document.createElement("tbody");
        if (classes.length !== 0) element.classList.add(...classes);
        return element;
      }
      function createTableCell(...classes) {
        let element = document.createElement("td");
        if (classes.length !== 0) element.classList.add(...classes);
        return element;
      }
      function createTableHead(...classes) {
        let element = document.createElement("thead");
        if (classes.length !== 0) element.classList.add(...classes);
        return element;
      }
      function createTableRow(...classes) {
        let element = document.createElement("tr");
        if (classes.length !== 0) element.classList.add(...classes);
        return element;
      }
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
    591: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        OO: () => checkBox,
        _V: () => charBox,
        g4: () => selectMenu
      });
      var _htmlHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(519);
      function checkBox(key, label, valueProvider) {
        let div = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_0__.Sw)("option");
        let inputElement = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_0__.ph)();
        inputElement.id = `stashChecker-checkBox-${key}`;
        inputElement.name = key;
        inputElement.type = "checkbox";
        inputElement.defaultChecked = valueProvider.get(key) ?? false;
        inputElement.addEventListener("input", (() => valueProvider.set(key, inputElement.checked)));
        let labelElement = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_0__.fp)();
        labelElement.htmlFor = inputElement.id;
        labelElement.innerHTML = label;
        div.appendChild(labelElement);
        div.appendChild(inputElement);
        return div;
      }
      function charBox(key, label, valueProvider) {
        let div = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_0__.Sw)("option");
        let inputElement = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_0__.ph)();
        inputElement.id = `stashChecker-textBox-${key}`;
        inputElement.name = key;
        inputElement.type = "text";
        inputElement.size = 2;
        inputElement.defaultValue = valueProvider.get(key) ?? "";
        inputElement.addEventListener("input", (() => valueProvider.set(key, inputElement.value)));
        let labelElement = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_0__.fp)();
        labelElement.htmlFor = inputElement.id;
        labelElement.innerHTML = label;
        div.appendChild(labelElement);
        div.appendChild(inputElement);
        return div;
      }
      function selectMenu(key, label, options, valueProvider) {
        let div = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_0__.Sw)("option");
        let labelElement = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_0__.fp)();
        labelElement.htmlFor = `stashChecker-dropdown-${key}`;
        labelElement.innerHTML = label;
        let selectElement = document.createElement("select");
        selectElement.id = `stashChecker-dropdown-${key}`;
        selectElement.name = key;
        let currentSelection = valueProvider.get(key) ?? options[0];
        options.forEach((option => {
          let optionElement = document.createElement("option");
          optionElement.value = option;
          optionElement.innerHTML = option;
          if (option === currentSelection) optionElement.selected = true;
          selectElement.appendChild(optionElement);
        }));
        selectElement.addEventListener("change", (() => valueProvider.set(key, selectElement.value)));
        div.appendChild(labelElement);
        div.appendChild(selectElement);
        return div;
      }
    },
    601: module => {
      module.exports = function(i) {
        return i[1];
      };
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
          if (text === void 0) {
            console.info(`No stored value for '${key}'. Using default value.`);
            return Promise.resolve(defaultValue);
          } else {
            console.info(`Found stored value for '${key}'.`);
            return Promise.resolve(JSON.parse(text, reviver));
          }
        } catch (e) {
          console.warn("Failed to parse stored value for '${key}'. Deleting stored key-value pair.");
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
    710: (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, (async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.d(__webpack_exports__, {
            $k: () => booleanOptions,
            i3: () => stringOptions,
            vw: () => OptionKey
          });
          var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(613);
          var _dataTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(389);
          var OptionKey;
          (function(OptionKey) {
            OptionKey["showCheckMark"] = "showCheckMark";
            OptionKey["showCrossMark"] = "showCrossMark";
            OptionKey["showTags"] = "showTags";
            OptionKey["showFiles"] = "showFiles";
            OptionKey["checkMark"] = "checkMark";
            OptionKey["crossMark"] = "crossMark";
            OptionKey["warningMark"] = "warningMark";
            OptionKey["theme"] = "theme";
          })(OptionKey || (OptionKey = {}));
          const defaultBooleanOptions = new Map([ [ OptionKey.showCheckMark, true ], [ OptionKey.showCrossMark, true ], [ OptionKey.showTags, true ], [ OptionKey.showFiles, true ] ]);
          const defaultStringOptions = new Map([ [ OptionKey.checkMark, "✓" ], [ OptionKey.crossMark, "✗" ], [ OptionKey.warningMark, "!" ], [ OptionKey.theme, _dataTypes__WEBPACK_IMPORTED_MODULE_1__.Sx.Device ] ]);
          class DefaultableMap extends Map {
            constructor(map, defaults, onChange) {
              super(map.entries());
              this.defaults = defaults;
              this.onChange = onChange;
            }
            onChange() {}
            clear() {
              super.clear();
              this.onChange();
            }
            delete(key) {
              let result = super.delete(key);
              this.onChange();
              return result;
            }
            get(key) {
              return super.get(key) ?? this.defaults.get(key);
            }
            set(key, value) {
              super.set(key, value);
              this.onChange();
              return this;
            }
          }
          const booleanOptions = await optionProvider(_storage__WEBPACK_IMPORTED_MODULE_0__.Zg.BooleanOptions, defaultBooleanOptions);
          const stringOptions = await optionProvider(_storage__WEBPACK_IMPORTED_MODULE_0__.Zg.StringOptions, defaultStringOptions);
          async function optionProvider(storageKey, defaultOptions) {
            let map = await (0, _storage__WEBPACK_IMPORTED_MODULE_0__._W)(storageKey, new Map);
            return new DefaultableMap(map, defaultOptions, (function() {
              (0, _storage__WEBPACK_IMPORTED_MODULE_0__.KY)(storageKey, this);
            }));
          }
          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }), 1);
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

             case "www.brazzers.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "h2[class='sc-1b6bgon-3 iTXrhy font-secondary']", {
                observe: true,
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "a[href*='/video/'", {
                observe: true
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "h2[class='sc-ebvhsz-1 fLnSSs font-secondary']", {
                observe: true,
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a[href*='/pornstar/'", {
                observe: true
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
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "div[class*='item item-video item-lozad'] a[href*='hobby.porn/video/'] div.title-holder", {
                observe: true
              });
              break;

             case "www.pornhub.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "[class*='pcVideoListItem'] a[href*='/model/'], [class*='pcVideoListItem'] a[href*='/pornstar/']");
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "h1[itemprop='name']", {
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "span.pornStarName.performerCardName, div.userCardNameBlock, span.usernameBadgesWrapper");
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

             case "www.clips4sale.com":
              {
                let hrefStudio = "[href^='/studio/']";
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Studio, "h1[data-testid*='studio-title']", {
                  urlSelector: currentSite
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Studio, `a[data-testid*='studio-link']${hrefStudio}, a[data-testid*='clip-page-clipCategory']${hrefStudio}`, {
                  urlSelector: e => closestUrl(e)?.split("/Cat")?.[0]
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Studio, `a[data-testid*='clip-category-link']${hrefStudio}, a[data-testid*='clip-studio']${hrefStudio}, a[data-testid*='studioAnchor']${hrefStudio}, div[data-testid*='categoryTopStores'] a${hrefStudio}`, {
                  observe: true,
                  urlSelector: e => closestUrl(e)?.split("/Cat")?.[0]
                });
                if (window.location.pathname.startsWith("/clips/page/studios")) (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Studio, `a${hrefStudio}`, {
                  observe: true
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "h1[data-testid*='clip-page-clipTitle']", {
                  urlSelector: currentSite
                });
                (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, `a[data-testid*='clip-link']${hrefStudio}, a[data-testid*='clipCard-titleAnchor']${hrefStudio}`, {
                  observe: true
                });
                break;
              }

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

             case "fansly.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a.username-wrapper > div > span.display-name", {
                observe: true,
                urlSelector: currentSite
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a.username-wrapper > div > span.user-name", {
                urlSelector: _ => currentSite().replace("/^@/", "")
              });
              break;

             case "www.slayed.com":
             case "www.blacked.com":
             case "www.tushy.com":
             case "www.vixen.com":
             case "www.blackedraw.com":
             case "www.tushyraw.com":
             case "www.deeper.com":
             case "www.milfy.com":
             case "www.wifey.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, 'a[data-test-component="TitleLink"]', {
                observe: true
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, 'h1[data-test-component="VideoTitle"]', {
                observe: true
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a[href*='/performers/']", {
                observe: true
              });
              break;

             case "www.angelslove.xxx":
             case "www.sensuallove.xxx":
             case "www.wowgirlsblog.com":
             case "www.ultrafilms.xxx":
             case "www.18onlygirlsblog.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "article a header span");
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a[href*='/actor/']");
              break;

             case "www.metart.com":
             case "www.metartx.com":
             case "www.sexart.com":
             case "www.vivthomas.com":
             case "www.thelifeerotic.com":
             case "www.straplez.com":
             case "www.errotica-archives.com":
             case "www.domai.com":
             case "www.goddessnudes.com":
             case "www.eroticbeauty.com":
             case "www.lovehairy.com":
             case "www.alsscan.com":
             case "www.rylskyart.com":
             case "www.eternaldesire.com":
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Scene, "a[href*='/movie']", {
                observe: true
              });
              (0, _check__WEBPACK_IMPORTED_MODULE_0__.z)(_dataTypes__WEBPACK_IMPORTED_MODULE_1__.We.Performer, "a[href*='/model/']:not([href*='/movie'])", {
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
             case "javstash.org":
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
    821: (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(module, (async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
        try {
          __webpack_require__.d(__webpack_exports__, {
            S: () => initStatistics,
            n: () => updateStatistics
          });
          var _dataTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
          var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);
          var _htmlHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(519);
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
            let span = (0, _htmlHelper__WEBPACK_IMPORTED_MODULE_2__.VI)();
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
            let symbols = Array.from(document.querySelectorAll(":not(.stashCheckerPreview).stashCheckerSymbol"));
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