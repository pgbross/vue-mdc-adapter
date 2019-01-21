/**
* @module vue-mdc-adaptermenu 0.19.3-beta
* @exports VueMDCMenu
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueMDCMenu = factory());
}(this, function () { 'use strict';

  function autoInit(plugin) {
    // Auto-install
    var _Vue = null;

    if (typeof window !== 'undefined') {
      _Vue = window.Vue;
    } else if (typeof global !== 'undefined') {
      /*global global*/
      _Vue = global.Vue;
    }

    if (_Vue) {
      _Vue.use(plugin);
    }
  }

  function BasePlugin(components) {
    return {
      version: '0.19.3-beta',
      install: function install(vm) {
        for (var key in components) {
          var component = components[key];
          vm.component(component.name, component);
        }
      },
      components: components
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  /* global CustomEvent */
  function emitCustomEvent(el, evtType, evtData) {
    var shouldBubble = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var evt;

    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        detail: evtData,
        bubbles: shouldBubble
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    el.dispatchEvent(evt);
  }

  var scope = Math.floor(Math.random() * Math.floor(0x10000000)).toString() + '-';

  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */

  /**
   * @template A
   */
  var MDCFoundation =
  /*#__PURE__*/
  function () {
    _createClass(MDCFoundation, null, [{
      key: "cssClasses",

      /** @return enum{cssClasses} */
      get: function get() {
        // Classes extending MDCFoundation should implement this method to return an object which exports every
        // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
        return {};
      }
      /** @return enum{strings} */

    }, {
      key: "strings",
      get: function get() {
        // Classes extending MDCFoundation should implement this method to return an object which exports all
        // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
        return {};
      }
      /** @return enum{numbers} */

    }, {
      key: "numbers",
      get: function get() {
        // Classes extending MDCFoundation should implement this method to return an object which exports all
        // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
        return {};
      }
      /** @return {!Object} */

    }, {
      key: "defaultAdapter",
      get: function get() {
        // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
        // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
        // validation.
        return {};
      }
      /**
       * @param {A=} adapter
       */

    }]);

    function MDCFoundation() {
      var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, MDCFoundation);

      /** @protected {!A} */
      this.adapter_ = adapter;
    }

    _createClass(MDCFoundation, [{
      key: "init",
      value: function init() {// Subclasses should override this method to perform initialization routines (registering events, etc.)
      }
    }, {
      key: "destroy",
      value: function destroy() {// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
      }
    }]);

    return MDCFoundation;
  }();

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */

  /* eslint no-unused-vars: [2, {"args": "none"}] */

  /**
   * Adapter for MDC Menu. Provides an interface for managing
   * - selected element classes
   * - get focused elements
   * - toggling a checkbox inside a list item
   *
   * Additionally, provides type information for the adapter to the Closure
   * compiler.
   *
   * Implement this adapter for your framework of choice to delegate updates to
   * the component in your framework of choice. See architecture documentation
   * for more details.
   * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
   *
   * @record
   */
  var MDCMenuAdapter =
  /*#__PURE__*/
  function () {
    function MDCMenuAdapter() {
      _classCallCheck(this, MDCMenuAdapter);
    }

    _createClass(MDCMenuAdapter, [{
      key: "addClassToElementAtIndex",

      /**
       * Adds a class to the element at the index provided.
       * @param {number} index
       * @param {string} className
       */
      value: function addClassToElementAtIndex(index, className) {}
      /**
       * Removes a class from the element at the index provided
       * @param {number} index
       * @param {string} className
       */

    }, {
      key: "removeClassFromElementAtIndex",
      value: function removeClassFromElementAtIndex(index, className) {}
      /**
       * Adds an attribute, with value, to the element at the index provided.
       * @param {number} index
       * @param {string} attr
       * @param {string} value
       */

    }, {
      key: "addAttributeToElementAtIndex",
      value: function addAttributeToElementAtIndex(index, attr, value) {}
      /**
       * Removes an attribute from an element at the index provided.
       * @param {number} index
       * @param {string} attr
       */

    }, {
      key: "removeAttributeFromElementAtIndex",
      value: function removeAttributeFromElementAtIndex(index, attr) {}
      /**
       * Returns true if the element contains the className.
       * @param {?HTMLElement} element
       * @param {string} className
       * @return {boolean} true if the element contains the className
       */

    }, {
      key: "elementContainsClass",
      value: function elementContainsClass(element, className) {}
      /**
       * Closes the menu-surface.
       */

    }, {
      key: "closeSurface",
      value: function closeSurface() {}
      /**
       * Returns the index for the element provided.
       * @param {?HTMLElement} element
       * @return {number} index of the element in the list or -1 if it is not in the list.
       */

    }, {
      key: "getElementIndex",
      value: function getElementIndex(element) {}
      /**
       * Returns the parentElement of the provided element.
       * @param {?HTMLElement} element
       * @return {?HTMLElement} parentElement of the element provided.
       */

    }, {
      key: "getParentElement",
      value: function getParentElement(element) {}
      /**
       * Returns the element within the selectionGroup containing the selected element class.
       * @param {!HTMLElement} selectionGroup
       * @return {number} element within the selectionGroup that contains the selected element class.
       */

    }, {
      key: "getSelectedElementIndex",
      value: function getSelectedElementIndex(selectionGroup) {}
      /**
       * Emits an event using the evtData.
       * @param {{
      *    index: number
      *   }} evtData
       */

    }, {
      key: "notifySelected",
      value: function notifySelected(evtData) {}
    }]);

    return MDCMenuAdapter;
  }();

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */

  /** @enum {string} */
  var cssClasses$1 = {
    ROOT: 'mdc-menu',
    MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
    MENU_SELECTION_GROUP: 'mdc-menu__selection-group'
  };
  /** @enum {string} */

  var strings = {
    SELECTED_EVENT: 'MDCMenu:selected',
    ARIA_SELECTED_ATTR: 'aria-selected',
    LIST_SELECTOR: '.mdc-list',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]'
  };

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */

  /* eslint no-unused-vars: [2, {"args": "none"}] */

  /**
   * Adapter for MDCMenuSurface. Provides an interface for managing
   * - classes
   * - dom
   * - focus
   * - position
   * - dimensions
   * - event handlers
   *
   * Additionally, provides type information for the adapter to the Closure
   * compiler.
   *
   * Implement this adapter for your framework of choice to delegate updates to
   * the component in your framework of choice. See architecture documentation
   * for more details.
   * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
   *
   * @record
   */
  var MDCMenuSurfaceAdapter =
  /*#__PURE__*/
  function () {
    function MDCMenuSurfaceAdapter() {
      _classCallCheck(this, MDCMenuSurfaceAdapter);
    }

    _createClass(MDCMenuSurfaceAdapter, [{
      key: "addClass",

      /** @param {string} className */
      value: function addClass(className) {}
      /** @param {string} className */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}
      /**
       * @param {string} className
       * @return {boolean}
       */

    }, {
      key: "hasClass",
      value: function hasClass(className) {}
      /** @return {boolean} */

    }, {
      key: "hasAnchor",
      value: function hasAnchor() {}
      /** Emits an event when the menu surface is closed. */

    }, {
      key: "notifyClose",
      value: function notifyClose() {}
      /** Emits an event when the menu surface is opened. */

    }, {
      key: "notifyOpen",
      value: function notifyOpen() {}
      /**
       * @return {boolean}
       * @param {EventTarget} el
       */

    }, {
      key: "isElementInContainer",
      value: function isElementInContainer(el) {}
      /** @return {boolean} */

    }, {
      key: "isRtl",
      value: function isRtl() {}
      /** @param {string} origin */

    }, {
      key: "setTransformOrigin",
      value: function setTransformOrigin(origin) {}
      /** @return {boolean} */

    }, {
      key: "isFocused",
      value: function isFocused() {}
      /** Saves the element that was focused before the menu surface was opened. */

    }, {
      key: "saveFocus",
      value: function saveFocus() {}
      /** Restores focus to the element that was focused before the menu surface was opened. */

    }, {
      key: "restoreFocus",
      value: function restoreFocus() {}
      /** @return {boolean} */

    }, {
      key: "isFirstElementFocused",
      value: function isFirstElementFocused() {}
      /** @return {boolean} */

    }, {
      key: "isLastElementFocused",
      value: function isLastElementFocused() {}
      /** Focuses the first focusable element in the menu-surface. */

    }, {
      key: "focusFirstElement",
      value: function focusFirstElement() {}
      /** Focuses the first focusable element in the menu-surface. */

    }, {
      key: "focusLastElement",
      value: function focusLastElement() {}
      /** @return {!{width: number, height: number}} */

    }, {
      key: "getInnerDimensions",
      value: function getInnerDimensions() {}
      /** @return {!{width: number, height: number, top: number, right: number, bottom: number, left: number}} */

    }, {
      key: "getAnchorDimensions",
      value: function getAnchorDimensions() {}
      /** @return {!{ width: number, height: number }} */

    }, {
      key: "getWindowDimensions",
      value: function getWindowDimensions() {}
      /** @return {!{ width: number, height: number }} */

    }, {
      key: "getBodyDimensions",
      value: function getBodyDimensions() {}
      /** @return {!{ width: number, height: number }} */

    }, {
      key: "getWindowScroll",
      value: function getWindowScroll() {}
      /** @param {!{
      *   top: (string|undefined),
      *   right: (string|undefined),
      *   bottom: (string|undefined),
      *   left: (string|undefined)
      * }} position */

    }, {
      key: "setPosition",
      value: function setPosition(position) {}
      /** @param {string} height */

    }, {
      key: "setMaxHeight",
      value: function setMaxHeight(height) {}
    }]);

    return MDCMenuSurfaceAdapter;
  }();

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */

  /** @enum {string} */
  var cssClasses$2 = {
    ANCHOR: 'mdc-menu-surface--anchor',
    ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
    ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
    FIXED: 'mdc-menu-surface--fixed',
    OPEN: 'mdc-menu-surface--open',
    ROOT: 'mdc-menu-surface'
  };
  /** @enum {string} */

  var strings$1 = {
    CLOSED_EVENT: 'MDCMenuSurface:closed',
    OPENED_EVENT: 'MDCMenuSurface:opened',
    FOCUSABLE_ELEMENTS: 'button:not(:disabled), [href]:not([aria-disabled="true"]), input:not(:disabled), ' + 'select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
  };
  /** @enum {number} */

  var numbers = {
    // Total duration of menu-surface open animation.
    TRANSITION_OPEN_DURATION: 120,
    // Total duration of menu-surface close animation.
    TRANSITION_CLOSE_DURATION: 75,
    // Margin left to the edge of the viewport when menu-surface is at maximum possible height.
    MARGIN_TO_EDGE: 32,
    // Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning.
    ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67
  };
  /**
   * Enum for bits in the {@see Corner) bitmap.
   * @enum {number}
   */

  var CornerBit = {
    BOTTOM: 1,
    CENTER: 2,
    RIGHT: 4,
    FLIP_RTL: 8
  };
  /**
   * Enum for representing an element corner for positioning the menu-surface.
   *
   * The START constants map to LEFT if element directionality is left
   * to right and RIGHT if the directionality is right to left.
   * Likewise END maps to RIGHT or LEFT depending on the directionality.
   *
   * @enum {number}
   */

  var Corner = {
    TOP_LEFT: 0,
    TOP_RIGHT: CornerBit.RIGHT,
    BOTTOM_LEFT: CornerBit.BOTTOM,
    BOTTOM_RIGHT: CornerBit.BOTTOM | CornerBit.RIGHT,
    TOP_START: CornerBit.FLIP_RTL,
    TOP_END: CornerBit.FLIP_RTL | CornerBit.RIGHT,
    BOTTOM_START: CornerBit.BOTTOM | CornerBit.FLIP_RTL,
    BOTTOM_END: CornerBit.BOTTOM | CornerBit.RIGHT | CornerBit.FLIP_RTL
  };

  /**
   * @extends {MDCFoundation<!MDCMenuSurfaceAdapter>}
   */

  var MDCMenuSurfaceFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCMenuSurfaceFoundation, _MDCFoundation);

    _createClass(MDCMenuSurfaceFoundation, null, [{
      key: "cssClasses",

      /** @return enum{cssClasses} */
      get: function get() {
        return cssClasses$2;
      }
      /** @return enum{string} */

    }, {
      key: "strings",
      get: function get() {
        return strings$1;
      }
      /** @return enum {number} */

    }, {
      key: "numbers",
      get: function get() {
        return numbers;
      }
      /** @return enum{number} */

    }, {
      key: "Corner",
      get: function get() {
        return Corner;
      }
      /**
       * {@see MDCMenuSurfaceAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCMenuSurfaceAdapter}
       */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCMenuSurfaceAdapter} */
          {
            addClass: function addClass() {},
            removeClass: function removeClass() {},
            hasClass: function hasClass() {
              return false;
            },
            hasAnchor: function hasAnchor() {
              return false;
            },
            notifyClose: function notifyClose() {},
            notifyOpen: function notifyOpen() {},
            isElementInContainer: function isElementInContainer() {
              return false;
            },
            isRtl: function isRtl() {
              return false;
            },
            setTransformOrigin: function setTransformOrigin() {},
            isFocused: function isFocused() {
              return false;
            },
            saveFocus: function saveFocus() {},
            restoreFocus: function restoreFocus() {},
            isFirstElementFocused: function isFirstElementFocused() {},
            isLastElementFocused: function isLastElementFocused() {},
            focusFirstElement: function focusFirstElement() {},
            focusLastElement: function focusLastElement() {},
            getInnerDimensions: function getInnerDimensions() {
              return {};
            },
            getAnchorDimensions: function getAnchorDimensions() {
              return {};
            },
            getWindowDimensions: function getWindowDimensions() {
              return {};
            },
            getBodyDimensions: function getBodyDimensions() {
              return {};
            },
            getWindowScroll: function getWindowScroll() {
              return {};
            },
            setPosition: function setPosition() {},
            setMaxHeight: function setMaxHeight() {}
          }
        );
      }
      /** @param {!MDCMenuSurfaceAdapter} adapter */

    }]);

    function MDCMenuSurfaceFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCMenuSurfaceFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCMenuSurfaceFoundation).call(this, _extends(MDCMenuSurfaceFoundation.defaultAdapter, adapter)));
      /** @private {boolean} */

      _this.isOpen_ = false;
      /** @private {number} */

      _this.openAnimationEndTimerId_ = 0;
      /** @private {number} */

      _this.closeAnimationEndTimerId_ = 0;
      /** @private {number} */

      _this.animationRequestId_ = 0;
      /** @private {!{ width: number, height: number }} */

      _this.dimensions_;
      /** @private {!Corner} */

      _this.anchorCorner_ = Corner.TOP_START;
      /** @private {!AnchorMargin} */

      _this.anchorMargin_ = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
      /** @private {?AutoLayoutMeasurements} */

      _this.measures_ = null;
      /** @private {boolean} */

      _this.quickOpen_ = false;
      /** @private {boolean} */

      _this.hoistedElement_ = false;
      /** @private {boolean} */

      _this.isFixedPosition_ = false;
      /** @private {!{x: number, y: number}} */

      _this.position_ = {
        x: 0,
        y: 0
      };
      return _this;
    }

    _createClass(MDCMenuSurfaceFoundation, [{
      key: "init",
      value: function init() {
        var _MDCMenuSurfaceFounda = MDCMenuSurfaceFoundation.cssClasses,
            ROOT = _MDCMenuSurfaceFounda.ROOT,
            OPEN = _MDCMenuSurfaceFounda.OPEN;

        if (!this.adapter_.hasClass(ROOT)) {
          throw new Error("".concat(ROOT, " class required in root element."));
        }

        if (this.adapter_.hasClass(OPEN)) {
          this.isOpen_ = true;
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        clearTimeout(this.openAnimationEndTimerId_);
        clearTimeout(this.closeAnimationEndTimerId_); // Cancel any currently running animations.

        cancelAnimationFrame(this.animationRequestId_);
      }
      /**
       * @param {!Corner} corner Default anchor corner alignment of top-left menu surface corner.
       */

    }, {
      key: "setAnchorCorner",
      value: function setAnchorCorner(corner) {
        this.anchorCorner_ = corner;
      }
      /**
       * @param {!AnchorMargin} margin set of margin values from anchor.
       */

    }, {
      key: "setAnchorMargin",
      value: function setAnchorMargin(margin) {
        this.anchorMargin_.top = typeof margin.top === 'number' ? margin.top : 0;
        this.anchorMargin_.right = typeof margin.right === 'number' ? margin.right : 0;
        this.anchorMargin_.bottom = typeof margin.bottom === 'number' ? margin.bottom : 0;
        this.anchorMargin_.left = typeof margin.left === 'number' ? margin.left : 0;
      }
      /**
       * Used to indicate if the menu-surface is hoisted to the body.
       * @param {boolean} isHoisted
       */

    }, {
      key: "setIsHoisted",
      value: function setIsHoisted(isHoisted) {
        this.hoistedElement_ = isHoisted;
      }
      /**
       * Used to set the menu-surface calculations based on a fixed position menu.
       * @param {boolean} isFixedPosition
       */

    }, {
      key: "setFixedPosition",
      value: function setFixedPosition(isFixedPosition) {
        this.isFixedPosition_ = isFixedPosition;
      }
      /**
       * Sets the menu-surface position on the page.
       * @param {number} x
       * @param {number} y
       */

    }, {
      key: "setAbsolutePosition",
      value: function setAbsolutePosition(x, y) {
        this.position_.x = this.typeCheckisFinite_(x) ? x : 0;
        this.position_.y = this.typeCheckisFinite_(y) ? y : 0;
      }
      /** @param {boolean} quickOpen */

    }, {
      key: "setQuickOpen",
      value: function setQuickOpen(quickOpen) {
        this.quickOpen_ = quickOpen;
      }
      /**
       * Handle clicks and close if not within menu-surface element.
       * @param {!Event} evt
       */

    }, {
      key: "handleBodyClick",
      value: function handleBodyClick(evt) {
        var el = evt.target;

        if (this.adapter_.isElementInContainer(el)) {
          return;
        }

        this.close();
      }
    }, {
      key: "handleKeydown",

      /**
       * Handle keys that close the surface.
       * @param {!Event} evt
       */
      value: function handleKeydown(evt) {
        var keyCode = evt.keyCode,
            key = evt.key,
            shiftKey = evt.shiftKey;
        var isEscape = key === 'Escape' || keyCode === 27;
        var isTab = key === 'Tab' || keyCode === 9;

        if (isEscape) {
          this.close();
        } else if (isTab) {
          if (this.adapter_.isLastElementFocused() && !shiftKey) {
            this.adapter_.focusFirstElement();
            evt.preventDefault();
          } else if (this.adapter_.isFirstElementFocused() && shiftKey) {
            this.adapter_.focusLastElement();
            evt.preventDefault();
          }
        }
      }
      /**
       * @return {!AutoLayoutMeasurements} Measurements used to position menu surface popup.
       */

    }, {
      key: "getAutoLayoutMeasurements_",
      value: function getAutoLayoutMeasurements_() {
        var anchorRect = this.adapter_.getAnchorDimensions();
        var viewport = this.adapter_.getWindowDimensions();
        var bodyDimensions = this.adapter_.getBodyDimensions();
        var windowScroll = this.adapter_.getWindowScroll();

        if (!anchorRect) {
          anchorRect =
          /** @type {ClientRect} */
          {
            x: this.position_.x,
            y: this.position_.y,
            top: this.position_.y,
            bottom: this.position_.y,
            left: this.position_.x,
            right: this.position_.x,
            height: 0,
            width: 0
          };
        }

        return {
          viewport: viewport,
          bodyDimensions: bodyDimensions,
          windowScroll: windowScroll,
          viewportDistance: {
            top: anchorRect.top,
            right: viewport.width - anchorRect.right,
            left: anchorRect.left,
            bottom: viewport.height - anchorRect.bottom
          },
          anchorHeight: anchorRect.height,
          anchorWidth: anchorRect.width,
          surfaceHeight: this.dimensions_.height,
          surfaceWidth: this.dimensions_.width
        };
      }
      /**
       * Computes the corner of the anchor from which to animate and position the menu surface.
       * @return {!Corner}
       * @private
       */

    }, {
      key: "getOriginCorner_",
      value: function getOriginCorner_() {
        // Defaults: open from the top left.
        var corner = Corner.TOP_LEFT;
        var _this$measures_ = this.measures_,
            viewportDistance = _this$measures_.viewportDistance,
            anchorHeight = _this$measures_.anchorHeight,
            anchorWidth = _this$measures_.anchorWidth,
            surfaceHeight = _this$measures_.surfaceHeight,
            surfaceWidth = _this$measures_.surfaceWidth;
        var isBottomAligned = Boolean(this.anchorCorner_ & CornerBit.BOTTOM);
        var availableTop = isBottomAligned ? viewportDistance.top + anchorHeight + this.anchorMargin_.bottom : viewportDistance.top + this.anchorMargin_.top;
        var availableBottom = isBottomAligned ? viewportDistance.bottom - this.anchorMargin_.bottom : viewportDistance.bottom + anchorHeight - this.anchorMargin_.top;
        var topOverflow = surfaceHeight - availableTop;
        var bottomOverflow = surfaceHeight - availableBottom;

        if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
          corner |= CornerBit.BOTTOM;
        }

        var isRtl = this.adapter_.isRtl();
        var isFlipRtl = Boolean(this.anchorCorner_ & CornerBit.FLIP_RTL);
        var avoidHorizontalOverlap = Boolean(this.anchorCorner_ & CornerBit.RIGHT);
        var isAlignedRight = avoidHorizontalOverlap && !isRtl || !avoidHorizontalOverlap && isFlipRtl && isRtl;
        var availableLeft = isAlignedRight ? viewportDistance.left + anchorWidth + this.anchorMargin_.right : viewportDistance.left + this.anchorMargin_.left;
        var availableRight = isAlignedRight ? viewportDistance.right - this.anchorMargin_.right : viewportDistance.right + anchorWidth - this.anchorMargin_.left;
        var leftOverflow = surfaceWidth - availableLeft;
        var rightOverflow = surfaceWidth - availableRight;

        if (leftOverflow < 0 && isAlignedRight && isRtl || avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0 || rightOverflow > 0 && leftOverflow < rightOverflow) {
          corner |= CornerBit.RIGHT;
        }

        return (
          /** @type {Corner} */
          corner
        );
      }
      /**
       * @param {!Corner} corner Origin corner of the menu surface.
       * @return {number} Horizontal offset of menu surface origin corner from corresponding anchor corner.
       * @private
       */

    }, {
      key: "getHorizontalOriginOffset_",
      value: function getHorizontalOriginOffset_(corner) {
        var anchorWidth = this.measures_.anchorWidth; // isRightAligned corresponds to using the 'right' property on the surface.

        var isRightAligned = Boolean(corner & CornerBit.RIGHT);
        var avoidHorizontalOverlap = Boolean(this.anchorCorner_ & CornerBit.RIGHT);

        if (isRightAligned) {
          var rightOffset = avoidHorizontalOverlap ? anchorWidth - this.anchorMargin_.left : this.anchorMargin_.right; // For hoisted or fixed elements, adjust the offset by the difference between viewport width and body width so
          // when we calculate the right value (`adjustPositionForHoistedElement_`) based on the element position,
          // the right property is correct.

          if (this.hoistedElement_ || this.isFixedPosition_) {
            return rightOffset - (this.measures_.viewport.width - this.measures_.bodyDimensions.width);
          }

          return rightOffset;
        }

        return avoidHorizontalOverlap ? anchorWidth - this.anchorMargin_.right : this.anchorMargin_.left;
      }
      /**
       * @param {!Corner} corner Origin corner of the menu surface.
       * @return {number} Vertical offset of menu surface origin corner from corresponding anchor corner.
       * @private
       */

    }, {
      key: "getVerticalOriginOffset_",
      value: function getVerticalOriginOffset_(corner) {
        var anchorHeight = this.measures_.anchorHeight;
        var isBottomAligned = Boolean(corner & CornerBit.BOTTOM);
        var avoidVerticalOverlap = Boolean(this.anchorCorner_ & CornerBit.BOTTOM);
        var y = 0;

        if (isBottomAligned) {
          y = avoidVerticalOverlap ? anchorHeight - this.anchorMargin_.top : -this.anchorMargin_.bottom;
        } else {
          y = avoidVerticalOverlap ? anchorHeight + this.anchorMargin_.bottom : this.anchorMargin_.top;
        }

        return y;
      }
      /**
       * @param {!Corner} corner Origin corner of the menu surface.
       * @return {number} Maximum height of the menu surface, based on available space. 0 indicates should not be set.
       * @private
       */

    }, {
      key: "getMenuSurfaceMaxHeight_",
      value: function getMenuSurfaceMaxHeight_(corner) {
        var maxHeight = 0;
        var viewportDistance = this.measures_.viewportDistance;
        var isBottomAligned = Boolean(corner & CornerBit.BOTTOM);
        var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE; // When maximum height is not specified, it is handled from css.

        if (isBottomAligned) {
          maxHeight = viewportDistance.top + this.anchorMargin_.top - MARGIN_TO_EDGE;

          if (!(this.anchorCorner_ & CornerBit.BOTTOM)) {
            maxHeight += this.measures_.anchorHeight;
          }
        } else {
          maxHeight = viewportDistance.bottom - this.anchorMargin_.bottom + this.measures_.anchorHeight - MARGIN_TO_EDGE;

          if (this.anchorCorner_ & CornerBit.BOTTOM) {
            maxHeight -= this.measures_.anchorHeight;
          }
        }

        return maxHeight;
      }
      /** @private */

    }, {
      key: "autoPosition_",
      value: function autoPosition_() {
        var _position;

        // Compute measurements for autoposition methods reuse.
        this.measures_ = this.getAutoLayoutMeasurements_();
        var corner = this.getOriginCorner_();
        var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight_(corner);
        var verticalAlignment = corner & CornerBit.BOTTOM ? 'bottom' : 'top';
        var horizontalAlignment = corner & CornerBit.RIGHT ? 'right' : 'left';
        var horizontalOffset = this.getHorizontalOriginOffset_(corner);
        var verticalOffset = this.getVerticalOriginOffset_(corner);
        var position = (_position = {}, _defineProperty(_position, horizontalAlignment, horizontalOffset ? horizontalOffset : '0'), _defineProperty(_position, verticalAlignment, verticalOffset ? verticalOffset : '0'), _position);
        var _this$measures_2 = this.measures_,
            anchorWidth = _this$measures_2.anchorWidth,
            surfaceWidth = _this$measures_2.surfaceWidth; // Center align when anchor width is comparable or greater than menu surface, otherwise keep corner.

        if (anchorWidth / surfaceWidth > numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
          horizontalAlignment = 'center';
        } // If the menu-surface has been hoisted to the body, it's no longer relative to the anchor element


        if (this.hoistedElement_ || this.isFixedPosition_) {
          position = this.adjustPositionForHoistedElement_(position);
        }

        for (var prop in position) {
          if (position.hasOwnProperty(prop) && position[prop] !== '0') {
            position[prop] = "".concat(parseInt(position[prop], 10), "px");
          }
        }

        this.adapter_.setTransformOrigin("".concat(horizontalAlignment, " ").concat(verticalAlignment));
        this.adapter_.setPosition(position);
        this.adapter_.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : ''); // Clear measures after positioning is complete.

        this.measures_ = null;
      }
      /**
       * Calculates the offsets for positioning the menu-surface when the menu-surface has been
       * hoisted to the body.
       * @param {!{
       *   top: (string|undefined),
       *   right: (string|undefined),
       *   bottom: (string|undefined),
       *   left: (string|undefined)
       * }} position
       * @return {!{
       *   top: (string|undefined),
       *   right: (string|undefined),
       *   bottom: (string|undefined),
       *   left: (string|undefined)
       * }} position
       * @private
       */

    }, {
      key: "adjustPositionForHoistedElement_",
      value: function adjustPositionForHoistedElement_(position) {
        var _this$measures_3 = this.measures_,
            windowScroll = _this$measures_3.windowScroll,
            viewportDistance = _this$measures_3.viewportDistance;

        for (var prop in position) {
          if (position.hasOwnProperty(prop)) {
            // Hoisted surfaces need to have the anchor elements location on the page added to the
            // position properties for proper alignment on the body.
            if (viewportDistance.hasOwnProperty(prop)) {
              position[prop] = parseInt(position[prop], 10) + viewportDistance[prop];
            } // Surfaces that are absolutely positioned need to have additional calculations for scroll
            // and bottom positioning.


            if (!this.isFixedPosition_) {
              if (prop === 'top') {
                position[prop] = parseInt(position[prop], 10) + windowScroll.y;
              } else if (prop === 'bottom') {
                position[prop] = parseInt(position[prop], 10) - windowScroll.y;
              } else if (prop === 'left') {
                position[prop] = parseInt(position[prop], 10) + windowScroll.x;
              } else if (prop === 'right') {
                position[prop] = parseInt(position[prop], 10) - windowScroll.x;
              }
            }
          }
        }

        return position;
      }
      /**
       * Open the menu surface.
       */

    }, {
      key: "open",
      value: function open() {
        var _this2 = this;

        this.adapter_.saveFocus();

        if (!this.quickOpen_) {
          this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
        }

        this.animationRequestId_ = requestAnimationFrame(function () {
          _this2.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);

          _this2.dimensions_ = _this2.adapter_.getInnerDimensions();

          _this2.autoPosition_();

          if (_this2.quickOpen_) {
            _this2.adapter_.notifyOpen();
          } else {
            _this2.openAnimationEndTimerId_ = setTimeout(function () {
              _this2.openAnimationEndTimerId_ = 0;

              _this2.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);

              _this2.adapter_.notifyOpen();
            }, numbers.TRANSITION_OPEN_DURATION);
          }
        });
        this.isOpen_ = true;
      }
      /**
       * Closes the menu surface.
       */

    }, {
      key: "close",
      value: function close() {
        var _this3 = this;

        if (!this.quickOpen_) {
          this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
        }

        requestAnimationFrame(function () {
          _this3.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);

          if (_this3.quickOpen_) {
            _this3.adapter_.notifyClose();
          } else {
            _this3.closeAnimationEndTimerId_ = setTimeout(function () {
              _this3.closeAnimationEndTimerId_ = 0;

              _this3.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);

              _this3.adapter_.notifyClose();
            }, numbers.TRANSITION_CLOSE_DURATION);
          }
        });
        this.isOpen_ = false;
        this.maybeRestoreFocus_();
      }
      /**
       * The last focused element when the menu surface was opened should regain focus, if the user is
       * focused on or within the menu surface when it is closed.
       * @private
       */

    }, {
      key: "maybeRestoreFocus_",
      value: function maybeRestoreFocus_() {
        if (this.adapter_.isFocused() || this.adapter_.isElementInContainer(document.activeElement)) {
          this.adapter_.restoreFocus();
        }
      }
      /** @return {boolean} */

    }, {
      key: "isOpen",
      value: function isOpen() {
        return this.isOpen_;
      }
      /**
       * isFinite that doesn't force conversion to number type.
       * Equivalent to Number.isFinite in ES2015, but is not included in IE11.
       * @param {number} num
       * @return {boolean}
       * @private
       */

    }, {
      key: "typeCheckisFinite_",
      value: function typeCheckisFinite_(num) {
        return typeof num === 'number' && isFinite(num);
      }
    }]);

    return MDCMenuSurfaceFoundation;
  }(MDCFoundation);

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */

  /* eslint no-unused-vars: [2, {"args": "none"}] */

  /**
   * Adapter for MDC List. Provides an interface for managing focus.
   *
   * Additionally, provides type information for the adapter to the Closure
   * compiler.
   *
   * Implement this adapter for your framework of choice to delegate updates to
   * the component in your framework of choice. See architecture documentation
   * for more details.
   * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
   *
   * @record
   */
  var MDCListAdapter =
  /*#__PURE__*/
  function () {
    function MDCListAdapter() {
      _classCallCheck(this, MDCListAdapter);
    }

    _createClass(MDCListAdapter, [{
      key: "getListItemCount",

      /** @return {number} */
      value: function getListItemCount() {}
      /**
       * @return {number} */

    }, {
      key: "getFocusedElementIndex",
      value: function getFocusedElementIndex() {}
      /**
       * @param {number} index
       * @param {string} attribute
       * @param {string} value
       */

    }, {
      key: "setAttributeForElementIndex",
      value: function setAttributeForElementIndex(index, attribute, value) {}
      /**
       * @param {number} index
       * @param {string} attribute
       */

    }, {
      key: "removeAttributeForElementIndex",
      value: function removeAttributeForElementIndex(index, attribute) {}
      /**
       * @param {number} index
       * @param {string} className
       */

    }, {
      key: "addClassForElementIndex",
      value: function addClassForElementIndex(index, className) {}
      /**
       * @param {number} index
       * @param {string} className
       */

    }, {
      key: "removeClassForElementIndex",
      value: function removeClassForElementIndex(index, className) {}
      /**
       * Focuses list item at the index specified.
       * @param {number} index
       */

    }, {
      key: "focusItemAtIndex",
      value: function focusItemAtIndex(index) {}
      /**
       * Sets the tabindex to the value specified for all button/a element children of
       * the list item at the index specified.
       * @param {number} listItemIndex
       * @param {number} tabIndexValue
       */

    }, {
      key: "setTabIndexForListItemChildren",
      value: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {}
      /**
       * If the given element has an href, follows the link.
       * @param {!Element} ele
       */

    }, {
      key: "followHref",
      value: function followHref(ele) {}
      /**
       * @param {number} index
       * @return {boolean} Returns true if radio button is present at given list item index.
       */

    }, {
      key: "hasRadioAtIndex",
      value: function hasRadioAtIndex(index) {}
      /**
       * @param {number} index
       * @return {boolean} Returns true if checkbox is present at given list item index.
       */

    }, {
      key: "hasCheckboxAtIndex",
      value: function hasCheckboxAtIndex(index) {}
      /**
       * @param {number} index
       * @return {boolean} Returns true if checkbox inside a list item is checked.
       */

    }, {
      key: "isCheckboxCheckedAtIndex",
      value: function isCheckboxCheckedAtIndex(index) {}
      /**
       * Sets the checked status of checkbox or radio at given list item index.
       * @param {number} index
       * @param {boolean} isChecked
       */

    }, {
      key: "setCheckedCheckboxOrRadioAtIndex",
      value: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {}
      /**
       * @return {boolean} Returns true when the current focused element is inside list root.
       */

    }, {
      key: "isFocusInsideList",
      value: function isFocusInsideList() {}
    }]);

    return MDCListAdapter;
  }();

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */

  /** @enum {string} */
  var cssClasses$3 = {
    ROOT: 'mdc-list',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated'
  };
  /** @enum {string} */

  var strings$2 = {
    ARIA_ORIENTATION: 'aria-orientation',
    ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
    ARIA_SELECTED: 'aria-selected',
    ARIA_CHECKED: 'aria-checked',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]:not(:disabled)',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: ".".concat(cssClasses$3.LIST_ITEM_CLASS, " button:not(:disabled),\n  .").concat(cssClasses$3.LIST_ITEM_CLASS, " a"),
    FOCUSABLE_CHILD_ELEMENTS: ".".concat(cssClasses$3.LIST_ITEM_CLASS, " button:not(:disabled), .").concat(cssClasses$3.LIST_ITEM_CLASS, " a,\n  .").concat(cssClasses$3.LIST_ITEM_CLASS, " input[type=\"radio\"]:not(:disabled),\n  .").concat(cssClasses$3.LIST_ITEM_CLASS, " input[type=\"checkbox\"]:not(:disabled)"),
    ENABLED_ITEMS_SELECTOR: '.mdc-list-item:not(.mdc-list-item--disabled)'
  };

  var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];

  var MDCListFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCListFoundation, _MDCFoundation);

    _createClass(MDCListFoundation, null, [{
      key: "strings",

      /** @return enum {string} */
      get: function get() {
        return strings$2;
      }
      /** @return enum {string} */

    }, {
      key: "cssClasses",
      get: function get() {
        return cssClasses$3;
      }
      /**
       * {@see MDCListAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCListAdapter}
       */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCListAdapter} */
          {
            getListItemCount: function getListItemCount() {},
            getFocusedElementIndex: function getFocusedElementIndex() {},
            setAttributeForElementIndex: function setAttributeForElementIndex() {},
            removeAttributeForElementIndex: function removeAttributeForElementIndex() {},
            addClassForElementIndex: function addClassForElementIndex() {},
            removeClassForElementIndex: function removeClassForElementIndex() {},
            focusItemAtIndex: function focusItemAtIndex() {},
            setTabIndexForListItemChildren: function setTabIndexForListItemChildren() {},
            followHref: function followHref() {},
            hasRadioAtIndex: function hasRadioAtIndex() {},
            hasCheckboxAtIndex: function hasCheckboxAtIndex() {},
            isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex() {},
            setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex() {},
            isFocusInsideList: function isFocusInsideList() {}
          }
        );
      }
      /**
       * @param {!MDCListAdapter=} adapter
       */

    }]);

    function MDCListFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCListFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCListFoundation).call(this, _extends(MDCListFoundation.defaultAdapter, adapter)));
      /** @private {boolean} */

      _this.wrapFocus_ = false;
      /** @private {boolean} */

      _this.isVertical_ = true;
      /** @private {boolean} */

      _this.isSingleSelectionList_ = false;
      /** @private {!Index} */

      _this.selectedIndex_ = -1;
      /** @private {number} */

      _this.focusedItemIndex_ = -1;
      /** @private {boolean} */

      _this.useActivatedClass_ = false;
      /** @private {boolean} */

      _this.isCheckboxList_ = false;
      /** @private {boolean} */

      _this.isRadioList_ = false;
      return _this;
    }

    _createClass(MDCListFoundation, [{
      key: "layout",
      value: function layout() {
        if (this.adapter_.getListItemCount() === 0) return;

        if (this.adapter_.hasCheckboxAtIndex(0)) {
          this.isCheckboxList_ = true;
        } else if (this.adapter_.hasRadioAtIndex(0)) {
          this.isRadioList_ = true;
        }
      }
      /**
       * Sets the private wrapFocus_ variable.
       * @param {boolean} value
       */

    }, {
      key: "setWrapFocus",
      value: function setWrapFocus(value) {
        this.wrapFocus_ = value;
      }
      /**
       * Sets the isVertical_ private variable.
       * @param {boolean} value
       */

    }, {
      key: "setVerticalOrientation",
      value: function setVerticalOrientation(value) {
        this.isVertical_ = value;
      }
      /**
       * Sets the isSingleSelectionList_ private variable.
       * @param {boolean} value
       */

    }, {
      key: "setSingleSelection",
      value: function setSingleSelection(value) {
        this.isSingleSelectionList_ = value;
      }
      /**
       * Sets the useActivatedClass_ private variable.
       * @param {boolean} useActivated
       */

    }, {
      key: "setUseActivatedClass",
      value: function setUseActivatedClass(useActivated) {
        this.useActivatedClass_ = useActivated;
      }
      /** @return {!Index} */

    }, {
      key: "getSelectedIndex",
      value: function getSelectedIndex() {
        return this.selectedIndex_;
      }
      /** @param {!Index} index */

    }, {
      key: "setSelectedIndex",
      value: function setSelectedIndex(index) {
        if (!this.isIndexValid_(index)) return;

        if (this.isCheckboxList_) {
          this.setCheckboxAtIndex_(
          /** @type {!Array<number>} */
          index);
        } else if (this.isRadioList_) {
          this.setRadioAtIndex_(
          /** @type {number} */
          index);
        } else {
          this.setSingleSelectionAtIndex_(
          /** @type {number} */
          index);
        }
      }
      /**
       * Focus in handler for the list items.
       * @param evt
       * @param {number} listItemIndex
       */

    }, {
      key: "handleFocusIn",
      value: function handleFocusIn(evt, listItemIndex) {
        if (listItemIndex >= 0) {
          this.adapter_.setTabIndexForListItemChildren(listItemIndex, 0);
        }
      }
      /**
       * Focus out handler for the list items.
       * @param {Event} evt
       * @param {number} listItemIndex
       */

    }, {
      key: "handleFocusOut",
      value: function handleFocusOut(evt, listItemIndex) {
        var _this2 = this;

        if (listItemIndex >= 0) {
          this.adapter_.setTabIndexForListItemChildren(listItemIndex, -1);
        }
        /**
         * Between Focusout & Focusin some browsers do not have focus on any element. Setting a delay to wait till the focus
         * is moved to next element.
         */


        setTimeout(function () {
          if (!_this2.adapter_.isFocusInsideList()) {
            _this2.setTabindexToFirstSelectedItem_();
          }
        }, 0);
      }
      /**
       * Key handler for the list.
       * @param {Event} evt
       * @param {boolean} isRootListItem
       * @param {number} listItemIndex
       */

    }, {
      key: "handleKeydown",
      value: function handleKeydown(evt, isRootListItem, listItemIndex) {
        var arrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
        var arrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
        var arrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
        var arrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
        var isHome = evt.key === 'Home' || evt.keyCode === 36;
        var isEnd = evt.key === 'End' || evt.keyCode === 35;
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        var isSpace = evt.key === 'Space' || evt.keyCode === 32;
        var currentIndex = this.adapter_.getFocusedElementIndex();
        var nextIndex = -1;

        if (currentIndex === -1) {
          currentIndex = listItemIndex;

          if (currentIndex < 0) {
            // If this event doesn't have a mdc-list-item ancestor from the
            // current list (not from a sublist), return early.
            return;
          }
        }

        if (this.isVertical_ && arrowDown || !this.isVertical_ && arrowRight) {
          this.preventDefaultEvent_(evt);
          nextIndex = this.focusNextElement(currentIndex);
        } else if (this.isVertical_ && arrowUp || !this.isVertical_ && arrowLeft) {
          this.preventDefaultEvent_(evt);
          nextIndex = this.focusPrevElement(currentIndex);
        } else if (isHome) {
          this.preventDefaultEvent_(evt);
          nextIndex = this.focusFirstElement();
        } else if (isEnd) {
          this.preventDefaultEvent_(evt);
          nextIndex = this.focusLastElement();
        } else if (isEnter || isSpace) {
          if (isRootListItem) {
            if (this.isSelectableList_()) {
              this.setSelectedIndexOnAction_(currentIndex);
              this.preventDefaultEvent_(evt);
            } // Explicitly activate links, since we're preventing default on Enter, and Space doesn't activate them.


            this.adapter_.followHref(currentIndex);
          }
        }

        this.focusedItemIndex_ = currentIndex;

        if (nextIndex >= 0) {
          this.setTabindexAtIndex_(nextIndex);
          this.focusedItemIndex_ = nextIndex;
        }
      }
      /**
       * Click handler for the list.
       * @param {number} index
       * @param {boolean} toggleCheckbox
       */

    }, {
      key: "handleClick",
      value: function handleClick(index, toggleCheckbox) {
        if (index === -1) return;

        if (this.isSelectableList_()) {
          this.setSelectedIndexOnAction_(index, toggleCheckbox);
        }

        this.setTabindexAtIndex_(index);
        this.focusedItemIndex_ = index;
      }
      /**
       * Ensures that preventDefault is only called if the containing element doesn't
       * consume the event, and it will cause an unintended scroll.
       * @param {Event} evt
       * @private
       */

    }, {
      key: "preventDefaultEvent_",
      value: function preventDefaultEvent_(evt) {
        var tagName = "".concat(evt.target.tagName).toLowerCase();

        if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
          evt.preventDefault();
        }
      }
      /**
       * Focuses the next element on the list.
       * @param {number} index
       * @return {number}
       */

    }, {
      key: "focusNextElement",
      value: function focusNextElement(index) {
        var count = this.adapter_.getListItemCount();
        var nextIndex = index + 1;

        if (nextIndex >= count) {
          if (this.wrapFocus_) {
            nextIndex = 0;
          } else {
            // Return early because last item is already focused.
            return index;
          }
        }

        this.adapter_.focusItemAtIndex(nextIndex);
        return nextIndex;
      }
      /**
       * Focuses the previous element on the list.
       * @param {number} index
       * @return {number}
       */

    }, {
      key: "focusPrevElement",
      value: function focusPrevElement(index) {
        var prevIndex = index - 1;

        if (prevIndex < 0) {
          if (this.wrapFocus_) {
            prevIndex = this.adapter_.getListItemCount() - 1;
          } else {
            // Return early because first item is already focused.
            return index;
          }
        }

        this.adapter_.focusItemAtIndex(prevIndex);
        return prevIndex;
      }
      /**
       * @return {number}
       */

    }, {
      key: "focusFirstElement",
      value: function focusFirstElement() {
        this.adapter_.focusItemAtIndex(0);
        return 0;
      }
      /**
       * @return {number}
       */

    }, {
      key: "focusLastElement",
      value: function focusLastElement() {
        var lastIndex = this.adapter_.getListItemCount() - 1;
        this.adapter_.focusItemAtIndex(lastIndex);
        return lastIndex;
      }
      /**
       * @param {number} index
       * @private
       */

    }, {
      key: "setSingleSelectionAtIndex_",
      value: function setSingleSelectionAtIndex_(index) {
        var selectedClassName = cssClasses$3.LIST_ITEM_SELECTED_CLASS;

        if (this.useActivatedClass_) {
          selectedClassName = cssClasses$3.LIST_ITEM_ACTIVATED_CLASS;
        }

        if (this.selectedIndex_ >= 0 && this.selectedIndex_ !== index) {
          this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
          this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings$2.ARIA_SELECTED, 'false');
        }

        this.adapter_.addClassForElementIndex(index, selectedClassName);
        this.adapter_.setAttributeForElementIndex(index, strings$2.ARIA_SELECTED, 'true');
        this.selectedIndex_ = index;
      }
      /**
       * Toggles radio at give index. Radio doesn't change the checked state if it is already checked.
       * @param {number} index
       * @private
       */

    }, {
      key: "setRadioAtIndex_",
      value: function setRadioAtIndex_(index) {
        this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, true);

        if (this.selectedIndex_ >= 0) {
          this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings$2.ARIA_CHECKED, 'false');
        }

        this.adapter_.setAttributeForElementIndex(index, strings$2.ARIA_CHECKED, 'true');
        this.selectedIndex_ = index;
      }
      /**
       * @param {!Array<number>} index
       * @private
       */

    }, {
      key: "setCheckboxAtIndex_",
      value: function setCheckboxAtIndex_(index) {
        for (var i = 0; i < this.adapter_.getListItemCount(); i++) {
          var isChecked = false;

          if (index.indexOf(i) >= 0) {
            isChecked = true;
          }

          this.adapter_.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
          this.adapter_.setAttributeForElementIndex(i, strings$2.ARIA_CHECKED, isChecked ? 'true' : 'false');
        }

        this.selectedIndex_ = index;
      }
      /**
       * @param {number} index
       * @private
       */

    }, {
      key: "setTabindexAtIndex_",
      value: function setTabindexAtIndex_(index) {
        if (this.focusedItemIndex_ === -1 && index !== 0) {
          // If no list item was selected set first list item's tabindex to -1.
          // Generally, tabindex is set to 0 on first list item of list that has no preselected items.
          this.adapter_.setAttributeForElementIndex(0, 'tabindex', -1);
        } else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
          this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, 'tabindex', -1);
        }

        this.adapter_.setAttributeForElementIndex(index, 'tabindex', 0);
      }
      /**
       * @return {boolean} Return true if it is single selectin list, checkbox list or radio list.
       * @private
       */

    }, {
      key: "isSelectableList_",
      value: function isSelectableList_() {
        return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
      }
      /** @private */

    }, {
      key: "setTabindexToFirstSelectedItem_",
      value: function setTabindexToFirstSelectedItem_() {
        var targetIndex = 0;

        if (this.isSelectableList_()) {
          if (typeof this.selectedIndex_ === 'number' && this.selectedIndex_ !== -1) {
            targetIndex = this.selectedIndex_;
          } else if (this.selectedIndex_ instanceof Array && this.selectedIndex_.length > 0) {
            targetIndex = this.selectedIndex_.reduce(function (currentIndex, minIndex) {
              return Math.min(currentIndex, minIndex);
            });
          }
        }

        this.setTabindexAtIndex_(targetIndex);
      }
      /**
       * @param {!Index} index
       * @return {boolean}
       * @private
       */

    }, {
      key: "isIndexValid_",
      value: function isIndexValid_(index) {
        var _this3 = this;

        if (index instanceof Array) {
          if (!this.isCheckboxList_) {
            throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
          }

          if (index.length === 0) {
            return true;
          } else {
            return index.some(function (i) {
              return _this3.isIndexInRange_(i);
            });
          }
        } else if (typeof index === 'number') {
          if (this.isCheckboxList_) {
            throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' + index);
          }

          return this.isIndexInRange_(index);
        } else {
          return false;
        }
      }
      /**
       * @param {number} index
       * @return {boolean}
       * @private
       */

    }, {
      key: "isIndexInRange_",
      value: function isIndexInRange_(index) {
        var listSize = this.adapter_.getListItemCount();
        return index >= 0 && index < listSize;
      }
      /**
       * @param {number} index
       * @param {boolean=} toggleCheckbox
       * @private
       */

    }, {
      key: "setSelectedIndexOnAction_",
      value: function setSelectedIndexOnAction_(index) {
        var toggleCheckbox = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (this.isCheckboxList_) {
          this.toggleCheckboxAtIndex_(index, toggleCheckbox);
        } else {
          this.setSelectedIndex(index);
        }
      }
      /**
       * @param {number} index
       * @param {boolean} toggleCheckbox
       * @private
       */

    }, {
      key: "toggleCheckboxAtIndex_",
      value: function toggleCheckboxAtIndex_(index, toggleCheckbox) {
        var isChecked = this.adapter_.isCheckboxCheckedAtIndex(index);

        if (toggleCheckbox) {
          isChecked = !isChecked;
          this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
        }

        this.adapter_.setAttributeForElementIndex(index, strings$2.ARIA_CHECKED, isChecked ? 'true' : 'false'); // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.

        if (this.selectedIndex_ === -1) {
          this.selectedIndex_ = [];
        }

        if (isChecked) {
          this.selectedIndex_.push(index);
        } else {
          this.selectedIndex_ = this.selectedIndex_.filter(function (i) {
            return i !== index;
          });
        }
      }
    }]);

    return MDCListFoundation;
  }(MDCFoundation);

  var ELEMENTS_KEY_ALLOWED_IN$1 = ['input', 'button', 'textarea', 'select', 'a'];
  /**
   * @extends {MDCFoundation<!MDCMenuAdapter>}
   */

  var MDCMenuFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCMenuFoundation, _MDCFoundation);

    _createClass(MDCMenuFoundation, null, [{
      key: "cssClasses",

      /** @return enum{cssClasses} */
      get: function get() {
        return cssClasses$1;
      }
      /** @return enum{strings} */

    }, {
      key: "strings",
      get: function get() {
        return strings;
      }
      /**
       * {@see MDCMenuAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCMenuAdapter}
       */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCMenuAdapter} */
          {
            addClassToElementAtIndex: function addClassToElementAtIndex() {},
            removeClassFromElementAtIndex: function removeClassFromElementAtIndex() {},
            addAttributeToElementAtIndex: function addAttributeToElementAtIndex() {},
            removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex() {},
            elementContainsClass: function elementContainsClass() {},
            closeSurface: function closeSurface() {},
            getElementIndex: function getElementIndex() {},
            getParentElement: function getParentElement() {},
            getSelectedElementIndex: function getSelectedElementIndex() {},
            notifySelected: function notifySelected() {}
          }
        );
      }
      /** @param {!MDCMenuAdapter} adapter */

    }]);

    function MDCMenuFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCMenuFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCMenuFoundation).call(this, _extends(MDCMenuFoundation.defaultAdapter, adapter)));
      /** @type {number} */

      _this.closeAnimationEndTimerId_ = 0;
      return _this;
    }

    _createClass(MDCMenuFoundation, [{
      key: "destroy",
      value: function destroy() {
        if (this.closeAnimationEndTimerId_) {
          clearTimeout(this.closeAnimationEndTimerId_);
        }

        this.adapter_.closeSurface();
      }
      /**
       * Handler function for the keydown events.
       * @param {!Event} evt
       */

    }, {
      key: "handleKeydown",
      value: function handleKeydown(evt) {
        var key = evt.key,
            keyCode = evt.keyCode;
        var isSpace = key === 'Space' || keyCode === 32;
        var isEnter = key === 'Enter' || keyCode === 13;
        var isTab = key === 'Tab' || keyCode === 9;

        if (isSpace || isEnter) {
          this.handleAction_(evt);
        } else if (isTab) {
          this.adapter_.closeSurface();
        }
      }
      /**
       * Handler function for the click events.
       * @param {!Event} evt
       */

    }, {
      key: "handleClick",
      value: function handleClick(evt) {
        this.handleAction_(evt);
      }
      /**
       * Combined action handling for click/keypress events.
       * @param {!Event} evt
       * @private
       */

    }, {
      key: "handleAction_",
      value: function handleAction_(evt) {
        var listItem = this.getListItem_(
        /** @type {HTMLElement} */
        evt.target);

        if (listItem) {
          this.handleSelection(listItem);
          this.preventDefaultEvent_(evt);
        }
      }
      /**
       * Handler for a selected list item.
       * @param {?HTMLElement} listItem
       */

    }, {
      key: "handleSelection",
      value: function handleSelection(listItem) {
        var _this2 = this;

        var index = this.adapter_.getElementIndex(listItem);

        if (index < 0) {
          return;
        }

        this.adapter_.notifySelected({
          index: index
        });
        this.adapter_.closeSurface(); // Wait for the menu to close before adding/removing classes that affect styles.

        this.closeAnimationEndTimerId_ = setTimeout(function () {
          var selectionGroup = _this2.getSelectionGroup_(listItem);

          if (selectionGroup !== null) {
            _this2.handleSelectionGroup_(
            /** @type {!HTMLElement} */
            selectionGroup, index);
          }
        }, MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
      }
      /**
       * Handles toggling the selected classes in a selection group when a
       * selection is made.
       * @param {!HTMLElement} selectionGroup
       * @param {number} index The selected index value
       * @private
       */

    }, {
      key: "handleSelectionGroup_",
      value: function handleSelectionGroup_(selectionGroup, index) {
        // De-select the previous selection in this group.
        var selectedIndex = this.adapter_.getSelectedElementIndex(selectionGroup);

        if (selectedIndex >= 0) {
          this.adapter_.removeAttributeFromElementAtIndex(selectedIndex, strings.ARIA_SELECTED_ATTR);
          this.adapter_.removeClassFromElementAtIndex(selectedIndex, cssClasses$1.MENU_SELECTED_LIST_ITEM);
        } // Select the new list item in this group.


        this.adapter_.addClassToElementAtIndex(index, cssClasses$1.MENU_SELECTED_LIST_ITEM);
        this.adapter_.addAttributeToElementAtIndex(index, strings.ARIA_SELECTED_ATTR, 'true');
      }
      /**
       * Returns the parent selection group of an element if one exists.
       * @param listItem
       * @return {?HTMLElement} parent selection group element or null.
       * @private
       */

    }, {
      key: "getSelectionGroup_",
      value: function getSelectionGroup_(listItem) {
        var parent = this.adapter_.getParentElement(listItem);
        var isGroup = this.adapter_.elementContainsClass(parent, cssClasses$1.MENU_SELECTION_GROUP); // Iterate through ancestors until we find the group or get to the list.

        while (!isGroup && !this.adapter_.elementContainsClass(parent, MDCListFoundation.cssClasses.ROOT)) {
          parent = this.adapter_.getParentElement(parent);
          isGroup = this.adapter_.elementContainsClass(parent, cssClasses$1.MENU_SELECTION_GROUP);
        }

        if (isGroup) {
          return parent;
        } else {
          return null;
        }
      }
      /**
       * Find the first ancestor with the mdc-list-item class.
       * @param {?HTMLElement} target
       * @return {?HTMLElement}
       * @private
       */

    }, {
      key: "getListItem_",
      value: function getListItem_(target) {
        var isListItem = this.adapter_.elementContainsClass(target, MDCListFoundation.cssClasses.LIST_ITEM_CLASS);

        while (!isListItem) {
          target = this.adapter_.getParentElement(target);

          if (target) {
            isListItem = this.adapter_.elementContainsClass(target, MDCListFoundation.cssClasses.LIST_ITEM_CLASS);
          } else {
            // target has no parent element.
            return null;
          }
        }

        return target;
      }
      /**
       * Ensures that preventDefault is only called if the containing element doesn't
       * consume the event, and it will cause an unintended scroll.
       * @param {!Event} evt
       * @private
       */

    }, {
      key: "preventDefaultEvent_",
      value: function preventDefaultEvent_(evt) {
        var target =
        /** @type {!HTMLElement} */
        evt.target;
        var tagName = "".concat(target.tagName).toLowerCase();

        if (ELEMENTS_KEY_ALLOWED_IN$1.indexOf(tagName) === -1) {
          evt.preventDefault();
        }
      }
    }]);

    return MDCMenuFoundation;
  }(MDCFoundation);

  //
  var script = {
    name: 'mdc-menu',
    model: {
      prop: 'open',
      event: 'change'
    },
    props: {
      open: [Boolean, Object],
      'quick-open': Boolean,
      'anchor-corner': [String, Number],
      'anchor-margin': Object
    },
    data: function data() {
      return {
        classes: {},
        styles: {}
      };
    },
    provide: function provide() {
      return {
        mdcMenu: this
      };
    },
    watch: {// anchorCorner(nv) {
      //   this.foundation.setAnchorCorner(Number(nv))
      // },
      // anchorMargin(nv) {
      //   this.foundation.setAnchorMargin(nv)
      // }
    },
    mounted: function mounted() {
      var _this = this;

      this._previousFocus = undefined;
      this.foundation = new MDCMenuFoundation({
        addClassToElementAtIndex: function addClassToElementAtIndex(index, className) {
          var list = _this.items;
          list[index].classList.add(className);
        },
        removeClassFromElementAtIndex: function removeClassFromElementAtIndex(index, className) {
          var list = _this.items;
          list[index].classList.remove(className);
        },
        addAttributeToElementAtIndex: function addAttributeToElementAtIndex(index, attr, value) {
          var list = _this.items;
          list[index].setAttribute(attr, value);
        },
        removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex(index, attr) {
          var list = _this.items;
          list[index].removeAttribute(attr);
        },
        elementContainsClass: function elementContainsClass(element, className) {
          return element.classList.contains(className);
        },
        closeSurface: function closeSurface() {
          _this.$emit('change', false);
        },
        getElementIndex: function getElementIndex(element) {
          return _this.items.indexOf(element);
        },
        getParentElement: function getParentElement(element) {
          return element.parentElement;
        },
        getSelectedElementIndex: function getSelectedElementIndex(selectionGroup) {
          var idx = _this.items.indexOf(selectionGroup.querySelector(".".concat(MDCMenuFoundation.cssClasses.MENU_SELECTED_LIST_ITEM)));

          return idx;
        },
        notifySelected: function notifySelected(evtData) {
          emitCustomEvent(_this.$el, MDCMenuFoundation.strings.SELECTED_EVENT, {
            index: evtData.index,
            item: _this.items[evtData.index]
          });

          _this.$emit('select', {
            index: evtData.index,
            item: _this.items[evtData.index]
          });
        }
      });
      this.foundation.init();
    },
    beforeDestroy: function beforeDestroy() {
      this._previousFocus = null;
      this.foundation.destroy();
    },
    computed: {
      items: function items() {
        return this.$refs.list.listElements;
      }
    },
    methods: {
      handleClick: function handleClick(evt) {
        this.foundation.handleClick(evt);
      },
      onChange: function onChange(item) {
        this.$emit('change', item);
      } // onOpen_(value) {
      //   if (value) {
      //     this.foundation.open(typeof value === 'object' ? value : void 0)
      //   } else {
      //     this.foundation.close()
      //   }
      // },
      // show(options) {
      //   this.foundation.open(options)
      // },
      // hide() {
      //   this.foundation.close()
      // },
      // isOpen() {
      //   return this.foundation ? this.foundation.isOpen() : false
      // }

    }
  };

  function normalizeComponent(compiledTemplate, injectStyle, defaultExport, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , isShadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof isShadowMode === 'function') {
      createInjectorSSR = createInjector;
      createInjector = isShadowMode;
      isShadowMode = false;
    } // Vue.extend constructor export interop


    var options = typeof defaultExport === 'function' ? defaultExport.options : defaultExport; // render functions

    if (compiledTemplate && compiledTemplate.render) {
      options.render = compiledTemplate.render;
      options.staticRenderFns = compiledTemplate.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (injectStyle) {
          injectStyle.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (injectStyle) {
      hook = isShadowMode ? function () {
        injectStyle.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        injectStyle.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return defaultExport;
  }

  /* script */
  const __vue_script__ = script;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script.__file = "/ddata/extra/vma/components/menu/mdc-menu.vue";

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "mdc-menu-surface",
      {
        ref: "root",
        attrs: { "quick-open": _vm.quickOpen, open: _vm.open },
        on: { change: _vm.onChange },
        nativeOn: {
          click: function($event) {
            return _vm.handleClick($event)
          }
        }
      },
      [_c("mdc-list", { ref: "list" }, [_vm._t("default")], 2)],
      1
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcMenu = normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */

  /** @type {string|undefined} */
  var storedTransformPropertyName_;
  /**
   * Returns the name of the correct transform property to use on the current browser.
   * @param {!Window} globalObj
   * @param {boolean=} forceRefresh
   * @return {string}
   */

  function getTransformPropertyName(globalObj) {
    var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (storedTransformPropertyName_ === undefined || forceRefresh) {
      var el = globalObj.document.createElement('div');
      var transformPropertyName = 'transform' in el.style ? 'transform' : 'webkitTransform';
      storedTransformPropertyName_ = transformPropertyName;
    }

    return storedTransformPropertyName_;
  }

  var script$1 = {
    name: 'mdc-menu-surface',
    model: {
      prop: 'open',
      event: 'change'
    },
    props: {
      open: [Boolean, Object],
      'quick-open': Boolean,
      'anchor-corner': [String, Number],
      'anchor-margin': Object
    },
    data: function data() {
      return {
        classes: {},
        styles: {}
      };
    },
    provide: function provide() {
      return {
        mdcMenu: this
      };
    },
    watch: {
      open: 'onOpen_',
      quickOpen: function quickOpen(nv) {
        this.foundation.setQuickOpen(nv);
      }
    },
    mounted: function mounted() {
      var _this = this;

      this._previousFocus = undefined;
      this.foundation = new MDCMenuSurfaceFoundation(_extends({
        addClass: function addClass(className) {
          return _this.$set(_this.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this.$delete(_this.classes, className);
        },
        hasClass: function hasClass(className) {
          return _this.$el.classList.contains(className);
        },
        hasAnchor: function hasAnchor() {
          return !!_this.anchorElement;
        },
        notifyClose: function notifyClose() {
          emitCustomEvent(_this.$el, MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, {});

          _this.$emit('change', false);
        },
        notifyOpen: function notifyOpen() {
          emitCustomEvent(_this.$el, MDCMenuSurfaceFoundation.strings.OPENED_EVENT, {});

          _this.$emit('change', true);
        },
        isElementInContainer: function isElementInContainer(el) {
          return _this.$el === el || _this.$el.contains(el);
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this.$el).getPropertyValue('direction') === 'rtl';
        },
        setTransformOrigin: function setTransformOrigin(origin) {
          _this.$el.style["".concat(getTransformPropertyName(window), "-origin")] = origin;
        }
      }, this.getFocusAdapterMethods(), this.getDimensionAdapterMethods()));

      if (this.$el.parentElement && this.$el.parentElement.classList.contains(MDCMenuSurfaceFoundation.cssClasses.ANCHOR)) {
        this.anchorElement = this.$el.parentElement;
      }

      this.foundation.init();
    },
    beforeDestroy: function beforeDestroy() {
      this._previousFocus = null;
      this.foundation.destroy();
    },
    methods: {
      handleBodyClick: function handleBodyClick(evt) {
        this.foundation.handleBodyClick(evt);
      },
      registerBodyClickListener: function registerBodyClickListener() {
        document.body.addEventListener('click', this.handleBodyClick);
      },
      deregisterBodyClickListener: function deregisterBodyClickListener() {
        document.body.removeEventListener('click', this.handleBodyClick);
      },
      handleKeydown: function handleKeydown(evt) {
        this.foundation.handleKeydown(evt);
      },
      getFocusAdapterMethods: function getFocusAdapterMethods() {
        var _this2 = this;

        return {
          isFocused: function isFocused() {
            return document.activeElement === _this2.$el;
          },
          saveFocus: function saveFocus() {
            _this2.previousFocus_ = document.activeElement;
          },
          restoreFocus: function restoreFocus() {
            if (_this2.$el.contains(document.activeElement)) {
              if (_this2.previousFocus_ && _this2.previousFocus_.focus) {
                _this2.previousFocus_.focus();
              }
            }
          },
          isFirstElementFocused: function isFirstElementFocused() {
            return _this2.firstFocusableElement_ && _this2.firstFocusableElement_ === document.activeElement;
          },
          isLastElementFocused: function isLastElementFocused() {
            return _this2.lastFocusableElement_ && _this2.lastFocusableElement_ === document.activeElement;
          },
          focusFirstElement: function focusFirstElement() {
            return _this2.firstFocusableElement_ && _this2.firstFocusableElement_.focus && _this2.firstFocusableElement_.focus();
          },
          focusLastElement: function focusLastElement() {
            return _this2.lastFocusableElement_ && _this2.lastFocusableElement_.focus && _this2.lastFocusableElement_.focus();
          }
        };
      },
      getDimensionAdapterMethods: function getDimensionAdapterMethods() {
        var _this3 = this;

        return {
          getInnerDimensions: function getInnerDimensions() {
            return {
              width: _this3.$el.offsetWidth,
              height: _this3.$el.offsetHeight
            };
          },
          getAnchorDimensions: function getAnchorDimensions() {
            return _this3.anchorElement && _this3.anchorElement.getBoundingClientRect();
          },
          getWindowDimensions: function getWindowDimensions() {
            return {
              width: window.innerWidth,
              height: window.innerHeight
            };
          },
          getBodyDimensions: function getBodyDimensions() {
            return {
              width: document.body.clientWidth,
              height: document.body.clientHeight
            };
          },
          getWindowScroll: function getWindowScroll() {
            return {
              x: window.pageXOffset,
              y: window.pageYOffset
            };
          },
          setPosition: function setPosition(position) {
            _this3.$el.style.left = 'left' in position ? position.left : null;
            _this3.$el.style.right = 'right' in position ? position.right : null;
            _this3.$el.style.top = 'top' in position ? position.top : null;
            _this3.$el.style.bottom = 'bottom' in position ? position.bottom : null;
          },
          setMaxHeight: function setMaxHeight(height) {
            _this3.$el.style.maxHeight = height;
          }
        };
      },
      onOpen_: function onOpen_(value) {
        if (value) {
          var focusableElements = this.$el.querySelectorAll(MDCMenuSurfaceFoundation.strings.FOCUSABLE_ELEMENTS);
          this.firstFocusableElement_ = focusableElements.length > 0 ? focusableElements[0] : null;
          this.lastFocusableElement_ = focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
          this.foundation.open();
        } else {
          this.foundation.close();
        }
      },
      hoistMenuToBody: function hoistMenuToBody() {
        document.body.appendChild(this.$el.parentElement.removeChild(this.$el));
        this.setIsHoisted(true);
      },
      setIsHoisted: function setIsHoisted(isHoisted) {
        this.foundation.setIsHoisted(isHoisted);
      },
      setMenuSurfaceAnchorElement: function setMenuSurfaceAnchorElement(element) {
        this.anchorElement = element;
      },
      setFixedPosition: function setFixedPosition(isFixed) {
        if (isFixed) {
          this.$el.classList.add(cssClasses.FIXED);
        } else {
          this.$el.classList.remove(cssClasses.FIXED);
        }

        this.foundation.setFixedPosition(isFixed);
      },
      setAbsolutePosition: function setAbsolutePosition(x, y) {
        this.foundation.setAbsolutePosition(x, y);
        this.setIsHoisted(true);
      },
      setAnchorCorner: function setAnchorCorner(corner) {
        this.foundation.setAnchorCorner(corner);
      },
      setAnchorMargin: function setAnchorMargin(margin) {
        this.foundation.setAnchorMargin(margin);
      },
      show: function show(options) {
        this.foundation.open(options);
      },
      hide: function hide() {
        this.foundation.close();
      },
      isOpen: function isOpen() {
        return this.foundation ? this.foundation.isOpen() : false;
      }
    }
  };

  /* script */
  const __vue_script__$1 = script$1;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$1.__file = "/ddata/extra/vma/components/menu/mdc-menu-surface.vue";

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "mdc-menu mdc-menu-surface",
        class: _vm.classes,
        on: {
          keydown: _vm.handleKeydown,
          "MDCMenuSurface:opened": _vm.registerBodyClickListener,
          "MDCMenuSurface:closed": _vm.deregisterBodyClickListener
        }
      },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = undefined;
    /* scoped */
    const __vue_scope_id__$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcMenuSurface = normalizeComponent(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$2 = {
    name: 'mdc-menu-item',
    props: {
      disabled: Boolean
    },
    inject: ['mdcMenu'],
    mounted: function mounted() {
      console.dir(this.mdcMenu);
      this.mdcMenu.items.push(this.$el);
    }
  };

  /* script */
  const __vue_script__$2 = script$2;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$2.__file = "/ddata/extra/vma/components/menu/mdc-menu-item.vue";

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "li",
      {
        staticClass: "mdc-menu-item mdc-list-item",
        attrs: {
          tabindex: _vm.disabled ? "-1" : "0",
          "aria-disabled": _vm.disabled,
          role: "menuitem"
        }
      },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = undefined;
    /* scoped */
    const __vue_scope_id__$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcMenuItem = normalizeComponent(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  var script$3 = {
    name: 'mdc-menu-divider'
  };

  /* script */
  const __vue_script__$3 = script$3;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$3.__file = "/ddata/extra/vma/components/menu/mdc-menu-divider.vue";

  /* template */
  var __vue_render__$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("li", {
      staticClass: "mdc-menu-divider mdc-list-divider",
      attrs: { role: "separator" }
    })
  };
  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;

    /* style */
    const __vue_inject_styles__$3 = undefined;
    /* scoped */
    const __vue_scope_id__$3 = undefined;
    /* module identifier */
    const __vue_module_identifier__$3 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcMenuDivider = normalizeComponent(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      undefined,
      undefined
    );

  //
  //
  //
  //
  var script$4 = {
    name: 'mdc-menu-anchor'
  };

  /* script */
  const __vue_script__$4 = script$4;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$4.__file = "/ddata/extra/vma/components/menu/mdc-menu-anchor.vue";

  /* template */
  var __vue_render__$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mdc-menu-surface--anchor" },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

    /* style */
    const __vue_inject_styles__$4 = undefined;
    /* scoped */
    const __vue_scope_id__$4 = undefined;
    /* module identifier */
    const __vue_module_identifier__$4 = undefined;
    /* functional template */
    const __vue_is_functional_template__$4 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcMenuAnchor = normalizeComponent(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      undefined,
      undefined
    );

  var plugin = BasePlugin({
    mdcMenu: mdcMenu,
    mdcMenuSurface: mdcMenuSurface,
    mdcMenuItem: mdcMenuItem,
    mdcMenuDivider: mdcMenuDivider,
    mdcMenuAnchor: mdcMenuAnchor
  });

  autoInit(plugin);

  return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9iYXNlL2F1dG8taW5pdC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9iYXNlLXBsdWdpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZXZlbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvdW5pcXVlaWQtbWl4aW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbWVudS9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9tZW51L2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbWVudS1zdXJmYWNlL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUtc3VyZmFjZS9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUtc3VyZmFjZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpc3QvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUvZm91bmRhdGlvbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvbWVudS9tZGMtbWVudS52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXJ1bnRpbWUtaGVscGVycy9ub3JtYWxpemUtY29tcG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvdXRpbC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvbWVudS9tZGMtbWVudS1zdXJmYWNlLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvbWVudS9tZGMtbWVudS1pdGVtLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvbWVudS9tZGMtbWVudS1kaXZpZGVyLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvbWVudS9tZGMtbWVudS1hbmNob3IudnVlIiwiLi4vLi4vY29tcG9uZW50cy9tZW51L2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9tZW51L2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCIvKiBnbG9iYWwgQ3VzdG9tRXZlbnQgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXRDdXN0b21FdmVudChlbCwgZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgbGV0IGV2dFxuICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpXG4gIH1cbiAgZWwuZGlzcGF0Y2hFdmVudChldnQpXG59XG4iLCJjb25zdCBzY29wZSA9XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMHgxMDAwMDAwMCkpLnRvU3RyaW5nKCkgKyAnLSdcblxuZXhwb3J0IGNvbnN0IFZNQVVuaXF1ZUlkTWl4aW4gPSB7XG4gIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICB0aGlzLnZtYV91aWRfID0gc2NvcGUgKyB0aGlzLl91aWRcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIEFcbiAqL1xuY2xhc3MgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW17Y3NzQ2xhc3Nlc30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte3N0cmluZ3N9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte251bWJlcnN9ICovXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFPYmplY3R9ICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgIC8vIHZhbGlkYXRpb24uXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7QT19IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIgPSB7fSkge1xuICAgIC8qKiBAcHJvdGVjdGVkIHshQX0gKi9cbiAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgTWVudS4gUHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBtYW5hZ2luZ1xuICogLSBzZWxlY3RlZCBlbGVtZW50IGNsYXNzZXNcbiAqIC0gZ2V0IGZvY3VzZWQgZWxlbWVudHNcbiAqIC0gdG9nZ2xpbmcgYSBjaGVja2JveCBpbnNpZGUgYSBsaXN0IGl0ZW1cbiAqXG4gKiBBZGRpdGlvbmFsbHksIHByb3ZpZGVzIHR5cGUgaW5mb3JtYXRpb24gZm9yIHRoZSBhZGFwdGVyIHRvIHRoZSBDbG9zdXJlXG4gKiBjb21waWxlci5cbiAqXG4gKiBJbXBsZW1lbnQgdGhpcyBhZGFwdGVyIGZvciB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UgdG8gZGVsZWdhdGUgdXBkYXRlcyB0b1xuICogdGhlIGNvbXBvbmVudCBpbiB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UuIFNlZSBhcmNoaXRlY3R1cmUgZG9jdW1lbnRhdGlvblxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvY29kZS9hcmNoaXRlY3R1cmUubWRcbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ01lbnVBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFkZHMgYSBjbGFzcyB0byB0aGUgZWxlbWVudCBhdCB0aGUgaW5kZXggcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBhZGRDbGFzc1RvRWxlbWVudEF0SW5kZXgoaW5kZXgsIGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGNsYXNzIGZyb20gdGhlIGVsZW1lbnQgYXQgdGhlIGluZGV4IHByb3ZpZGVkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzc0Zyb21FbGVtZW50QXRJbmRleChpbmRleCwgY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGF0dHJpYnV0ZSwgd2l0aCB2YWx1ZSwgdG8gdGhlIGVsZW1lbnQgYXQgdGhlIGluZGV4IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBhZGRBdHRyaWJ1dGVUb0VsZW1lbnRBdEluZGV4KGluZGV4LCBhdHRyLCB2YWx1ZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBhdHRyaWJ1dGUgZnJvbSBhbiBlbGVtZW50IGF0IHRoZSBpbmRleCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyXG4gICAqL1xuICByZW1vdmVBdHRyaWJ1dGVGcm9tRWxlbWVudEF0SW5kZXgoaW5kZXgsIGF0dHIpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZWxlbWVudCBjb250YWlucyB0aGUgY2xhc3NOYW1lLlxuICAgKiBAcGFyYW0gez9IVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGVsZW1lbnQgY29udGFpbnMgdGhlIGNsYXNzTmFtZVxuICAgKi9cbiAgZWxlbWVudENvbnRhaW5zQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIG1lbnUtc3VyZmFjZS5cbiAgICovXG4gIGNsb3NlU3VyZmFjZSgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IGZvciB0aGUgZWxlbWVudCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHs/SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybiB7bnVtYmVyfSBpbmRleCBvZiB0aGUgZWxlbWVudCBpbiB0aGUgbGlzdCBvciAtMSBpZiBpdCBpcyBub3QgaW4gdGhlIGxpc3QuXG4gICAqL1xuICBnZXRFbGVtZW50SW5kZXgoZWxlbWVudCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcGFyZW50RWxlbWVudCBvZiB0aGUgcHJvdmlkZWQgZWxlbWVudC5cbiAgICogQHBhcmFtIHs/SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybiB7P0hUTUxFbGVtZW50fSBwYXJlbnRFbGVtZW50IG9mIHRoZSBlbGVtZW50IHByb3ZpZGVkLlxuICAgKi9cbiAgZ2V0UGFyZW50RWxlbWVudChlbGVtZW50KSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IHdpdGhpbiB0aGUgc2VsZWN0aW9uR3JvdXAgY29udGFpbmluZyB0aGUgc2VsZWN0ZWQgZWxlbWVudCBjbGFzcy5cbiAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IHNlbGVjdGlvbkdyb3VwXG4gICAqIEByZXR1cm4ge251bWJlcn0gZWxlbWVudCB3aXRoaW4gdGhlIHNlbGVjdGlvbkdyb3VwIHRoYXQgY29udGFpbnMgdGhlIHNlbGVjdGVkIGVsZW1lbnQgY2xhc3MuXG4gICAqL1xuICBnZXRTZWxlY3RlZEVsZW1lbnRJbmRleChzZWxlY3Rpb25Hcm91cCkge31cblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgdXNpbmcgdGhlIGV2dERhdGEuXG4gICAqIEBwYXJhbSB7e1xuICogICAgaW5kZXg6IG51bWJlclxuICogICB9fSBldnREYXRhXG4gICAqL1xuICBub3RpZnlTZWxlY3RlZChldnREYXRhKSB7fVxufVxuXG5leHBvcnQge01EQ01lbnVBZGFwdGVyfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIFJPT1Q6ICdtZGMtbWVudScsXG4gIE1FTlVfU0VMRUNURURfTElTVF9JVEVNOiAnbWRjLW1lbnUtaXRlbS0tc2VsZWN0ZWQnLFxuICBNRU5VX1NFTEVDVElPTl9HUk9VUDogJ21kYy1tZW51X19zZWxlY3Rpb24tZ3JvdXAnLFxufTtcblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBzdHJpbmdzID0ge1xuICBTRUxFQ1RFRF9FVkVOVDogJ01EQ01lbnU6c2VsZWN0ZWQnLFxuICBBUklBX1NFTEVDVEVEX0FUVFI6ICdhcmlhLXNlbGVjdGVkJyxcbiAgTElTVF9TRUxFQ1RPUjogJy5tZGMtbGlzdCcsXG4gIENIRUNLQk9YX1NFTEVDVE9SOiAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyxcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5nc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDTWVudVN1cmZhY2UuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmdcbiAqIC0gY2xhc3Nlc1xuICogLSBkb21cbiAqIC0gZm9jdXNcbiAqIC0gcG9zaXRpb25cbiAqIC0gZGltZW5zaW9uc1xuICogLSBldmVudCBoYW5kbGVyc1xuICpcbiAqIEFkZGl0aW9uYWxseSwgcHJvdmlkZXMgdHlwZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGFkYXB0ZXIgdG8gdGhlIENsb3N1cmVcbiAqIGNvbXBpbGVyLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGFkYXB0ZXIgZm9yIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZSB0byBkZWxlZ2F0ZSB1cGRhdGVzIHRvXG4gKiB0aGUgY29tcG9uZW50IGluIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZS4gU2VlIGFyY2hpdGVjdHVyZSBkb2N1bWVudGF0aW9uXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9jb2RlL2FyY2hpdGVjdHVyZS5tZFxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDTWVudVN1cmZhY2VBZGFwdGVyIHtcbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBoYXNBbmNob3IoKSB7fVxuXG4gIC8qKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBtZW51IHN1cmZhY2UgaXMgY2xvc2VkLiAqL1xuICBub3RpZnlDbG9zZSgpIHt9XG5cbiAgLyoqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIG1lbnUgc3VyZmFjZSBpcyBvcGVuZWQuICovXG4gIG5vdGlmeU9wZW4oKSB7fVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBlbFxuICAgKi9cbiAgaXNFbGVtZW50SW5Db250YWluZXIoZWwpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzUnRsKCkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IG9yaWdpbiAqL1xuICBzZXRUcmFuc2Zvcm1PcmlnaW4ob3JpZ2luKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc0ZvY3VzZWQoKSB7fVxuXG4gIC8qKiBTYXZlcyB0aGUgZWxlbWVudCB0aGF0IHdhcyBmb2N1c2VkIGJlZm9yZSB0aGUgbWVudSBzdXJmYWNlIHdhcyBvcGVuZWQuICovXG4gIHNhdmVGb2N1cygpIHt9XG5cbiAgLyoqIFJlc3RvcmVzIGZvY3VzIHRvIHRoZSBlbGVtZW50IHRoYXQgd2FzIGZvY3VzZWQgYmVmb3JlIHRoZSBtZW51IHN1cmZhY2Ugd2FzIG9wZW5lZC4gKi9cbiAgcmVzdG9yZUZvY3VzKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNGaXJzdEVsZW1lbnRGb2N1c2VkKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNMYXN0RWxlbWVudEZvY3VzZWQoKSB7fVxuXG4gIC8qKiBGb2N1c2VzIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBpbiB0aGUgbWVudS1zdXJmYWNlLiAqL1xuICBmb2N1c0ZpcnN0RWxlbWVudCgpIHt9XG5cbiAgLyoqIEZvY3VzZXMgdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGluIHRoZSBtZW51LXN1cmZhY2UuICovXG4gIGZvY3VzTGFzdEVsZW1lbnQoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHshe3dpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyfX0gKi9cbiAgZ2V0SW5uZXJEaW1lbnNpb25zKCkge31cblxuICAvKiogQHJldHVybiB7IXt3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyLCBsZWZ0OiBudW1iZXJ9fSAqL1xuICBnZXRBbmNob3JEaW1lbnNpb25zKCkge31cblxuICAvKiogQHJldHVybiB7IXsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfX0gKi9cbiAgZ2V0V2luZG93RGltZW5zaW9ucygpIHt9XG5cbiAgLyoqIEByZXR1cm4geyF7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH19ICovXG4gIGdldEJvZHlEaW1lbnNpb25zKCkge31cblxuICAvKiogQHJldHVybiB7IXsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfX0gKi9cbiAgZ2V0V2luZG93U2Nyb2xsKCkge31cblxuICAvKiogQHBhcmFtIHshe1xuICAqICAgdG9wOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gICogICByaWdodDogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAqICAgYm90dG9tOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gICogICBsZWZ0OiAoc3RyaW5nfHVuZGVmaW5lZClcbiAgKiB9fSBwb3NpdGlvbiAqL1xuICBzZXRQb3NpdGlvbihwb3NpdGlvbikge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGhlaWdodCAqL1xuICBzZXRNYXhIZWlnaHQoaGVpZ2h0KSB7fVxufVxuXG5leHBvcnQge01EQ01lbnVTdXJmYWNlQWRhcHRlcn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICBBTkNIT1I6ICdtZGMtbWVudS1zdXJmYWNlLS1hbmNob3InLFxuICBBTklNQVRJTkdfQ0xPU0VEOiAnbWRjLW1lbnUtc3VyZmFjZS0tYW5pbWF0aW5nLWNsb3NlZCcsXG4gIEFOSU1BVElOR19PUEVOOiAnbWRjLW1lbnUtc3VyZmFjZS0tYW5pbWF0aW5nLW9wZW4nLFxuICBGSVhFRDogJ21kYy1tZW51LXN1cmZhY2UtLWZpeGVkJyxcbiAgT1BFTjogJ21kYy1tZW51LXN1cmZhY2UtLW9wZW4nLFxuICBST09UOiAnbWRjLW1lbnUtc3VyZmFjZScsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIENMT1NFRF9FVkVOVDogJ01EQ01lbnVTdXJmYWNlOmNsb3NlZCcsXG4gIE9QRU5FRF9FVkVOVDogJ01EQ01lbnVTdXJmYWNlOm9wZW5lZCcsXG4gIEZPQ1VTQUJMRV9FTEVNRU5UUzogJ2J1dHRvbjpub3QoOmRpc2FibGVkKSwgW2hyZWZdOm5vdChbYXJpYS1kaXNhYmxlZD1cInRydWVcIl0pLCBpbnB1dDpub3QoOmRpc2FibGVkKSwgJyArXG4gICdzZWxlY3Q6bm90KDpkaXNhYmxlZCksIHRleHRhcmVhOm5vdCg6ZGlzYWJsZWQpLCBbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSk6bm90KFthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSknLFxufTtcblxuLyoqIEBlbnVtIHtudW1iZXJ9ICovXG5jb25zdCBudW1iZXJzID0ge1xuICAvLyBUb3RhbCBkdXJhdGlvbiBvZiBtZW51LXN1cmZhY2Ugb3BlbiBhbmltYXRpb24uXG4gIFRSQU5TSVRJT05fT1BFTl9EVVJBVElPTjogMTIwLFxuICAvLyBUb3RhbCBkdXJhdGlvbiBvZiBtZW51LXN1cmZhY2UgY2xvc2UgYW5pbWF0aW9uLlxuICBUUkFOU0lUSU9OX0NMT1NFX0RVUkFUSU9OOiA3NSxcbiAgLy8gTWFyZ2luIGxlZnQgdG8gdGhlIGVkZ2Ugb2YgdGhlIHZpZXdwb3J0IHdoZW4gbWVudS1zdXJmYWNlIGlzIGF0IG1heGltdW0gcG9zc2libGUgaGVpZ2h0LlxuICBNQVJHSU5fVE9fRURHRTogMzIsXG4gIC8vIFJhdGlvIG9mIGFuY2hvciB3aWR0aCB0byBtZW51LXN1cmZhY2Ugd2lkdGggZm9yIHN3aXRjaGluZyBmcm9tIGNvcm5lciBwb3NpdGlvbmluZyB0byBjZW50ZXIgcG9zaXRpb25pbmcuXG4gIEFOQ0hPUl9UT19NRU5VX1NVUkZBQ0VfV0lEVEhfUkFUSU86IDAuNjcsXG59O1xuXG4vKipcbiAqIEVudW0gZm9yIGJpdHMgaW4gdGhlIHtAc2VlIENvcm5lcikgYml0bWFwLlxuICogQGVudW0ge251bWJlcn1cbiAqL1xuY29uc3QgQ29ybmVyQml0ID0ge1xuICBCT1RUT006IDEsXG4gIENFTlRFUjogMixcbiAgUklHSFQ6IDQsXG4gIEZMSVBfUlRMOiA4LFxufTtcblxuLyoqXG4gKiBFbnVtIGZvciByZXByZXNlbnRpbmcgYW4gZWxlbWVudCBjb3JuZXIgZm9yIHBvc2l0aW9uaW5nIHRoZSBtZW51LXN1cmZhY2UuXG4gKlxuICogVGhlIFNUQVJUIGNvbnN0YW50cyBtYXAgdG8gTEVGVCBpZiBlbGVtZW50IGRpcmVjdGlvbmFsaXR5IGlzIGxlZnRcbiAqIHRvIHJpZ2h0IGFuZCBSSUdIVCBpZiB0aGUgZGlyZWN0aW9uYWxpdHkgaXMgcmlnaHQgdG8gbGVmdC5cbiAqIExpa2V3aXNlIEVORCBtYXBzIHRvIFJJR0hUIG9yIExFRlQgZGVwZW5kaW5nIG9uIHRoZSBkaXJlY3Rpb25hbGl0eS5cbiAqXG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG5jb25zdCBDb3JuZXIgPSB7XG4gIFRPUF9MRUZUOiAwLFxuICBUT1BfUklHSFQ6IENvcm5lckJpdC5SSUdIVCxcbiAgQk9UVE9NX0xFRlQ6IENvcm5lckJpdC5CT1RUT00sXG4gIEJPVFRPTV9SSUdIVDogQ29ybmVyQml0LkJPVFRPTSB8IENvcm5lckJpdC5SSUdIVCxcbiAgVE9QX1NUQVJUOiBDb3JuZXJCaXQuRkxJUF9SVEwsXG4gIFRPUF9FTkQ6IENvcm5lckJpdC5GTElQX1JUTCB8IENvcm5lckJpdC5SSUdIVCxcbiAgQk9UVE9NX1NUQVJUOiBDb3JuZXJCaXQuQk9UVE9NIHwgQ29ybmVyQml0LkZMSVBfUlRMLFxuICBCT1RUT01fRU5EOiBDb3JuZXJCaXQuQk9UVE9NIHwgQ29ybmVyQml0LlJJR0hUIHwgQ29ybmVyQml0LkZMSVBfUlRMLFxufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzLCBDb3JuZXJCaXQsIENvcm5lcn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICB0b3A6IG51bWJlcixcbiAqICAgcmlnaHQ6IG51bWJlcixcbiAqICAgYm90dG9tOiBudW1iZXIsXG4gKiAgIGxlZnQ6IG51bWJlclxuICogfX1cbiAqL1xubGV0IEFuY2hvck1hcmdpbjtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgdmlld3BvcnQ6IHsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfSxcbiAqICAgdmlld3BvcnREaXN0YW5jZToge3RvcDogbnVtYmVyLCByaWdodDogbnVtYmVyLCBib3R0b206IG51bWJlciwgbGVmdDogbnVtYmVyfSxcbiAqICAgYW5jaG9ySGVpZ2h0OiBudW1iZXIsXG4gKiAgIGFuY2hvcldpZHRoOiBudW1iZXIsXG4gKiAgIHN1cmZhY2VIZWlnaHQ6IG51bWJlcixcbiAqICAgc3VyZmFjZVdpZHRoOiBudW1iZXIsXG4gKiAgIGJvZHlEaW1lbnNpb25zLFxuICogICB3aW5kb3dTY3JvbGwsXG4gKiB9fVxuICovXG5sZXQgQXV0b0xheW91dE1lYXN1cmVtZW50cztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQge01EQ01lbnVTdXJmYWNlQWRhcHRlcn0gZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVycywgQ29ybmVyLCBDb3JuZXJCaXR9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDTWVudVN1cmZhY2VBZGFwdGVyPn1cbiAqL1xuY2xhc3MgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW17Y3NzQ2xhc3Nlc30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge251bWJlcn0gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtudW1iZXJ9ICovXG4gIHN0YXRpYyBnZXQgQ29ybmVyKCkge1xuICAgIHJldHVybiBDb3JuZXI7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDTWVudVN1cmZhY2VBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ01lbnVTdXJmYWNlQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ01lbnVTdXJmYWNlQWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIGhhc0NsYXNzOiAoKSA9PiBmYWxzZSxcbiAgICAgIGhhc0FuY2hvcjogKCkgPT4gZmFsc2UsXG4gICAgICBub3RpZnlDbG9zZTogKCkgPT4ge30sXG4gICAgICBub3RpZnlPcGVuOiAoKSA9PiB7fSxcbiAgICAgIGlzRWxlbWVudEluQ29udGFpbmVyOiAoKSA9PiBmYWxzZSxcbiAgICAgIGlzUnRsOiAoKSA9PiBmYWxzZSxcbiAgICAgIHNldFRyYW5zZm9ybU9yaWdpbjogKCkgPT4ge30sXG4gICAgICBpc0ZvY3VzZWQ6ICgpID0+IGZhbHNlLFxuICAgICAgc2F2ZUZvY3VzOiAoKSA9PiB7fSxcbiAgICAgIHJlc3RvcmVGb2N1czogKCkgPT4ge30sXG4gICAgICBpc0ZpcnN0RWxlbWVudEZvY3VzZWQ6ICgpID0+IHt9LFxuICAgICAgaXNMYXN0RWxlbWVudEZvY3VzZWQ6ICgpID0+IHt9LFxuICAgICAgZm9jdXNGaXJzdEVsZW1lbnQ6ICgpID0+IHt9LFxuICAgICAgZm9jdXNMYXN0RWxlbWVudDogKCkgPT4ge30sXG4gICAgICBnZXRJbm5lckRpbWVuc2lvbnM6ICgpID0+ICh7fSksXG4gICAgICBnZXRBbmNob3JEaW1lbnNpb25zOiAoKSA9PiAoe30pLFxuICAgICAgZ2V0V2luZG93RGltZW5zaW9uczogKCkgPT4gKHt9KSxcbiAgICAgIGdldEJvZHlEaW1lbnNpb25zOiAoKSA9PiAoe30pLFxuICAgICAgZ2V0V2luZG93U2Nyb2xsOiAoKSA9PiAoe30pLFxuICAgICAgc2V0UG9zaXRpb246ICgpID0+IHt9LFxuICAgICAgc2V0TWF4SGVpZ2h0OiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0geyFNRENNZW51U3VyZmFjZUFkYXB0ZXJ9IGFkYXB0ZXIgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5pc09wZW5fID0gZmFsc2U7XG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5vcGVuQW5pbWF0aW9uRW5kVGltZXJJZF8gPSAwO1xuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXyA9IDA7XG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hbmltYXRpb25SZXF1ZXN0SWRfID0gMDtcbiAgICAvKiogQHByaXZhdGUgeyF7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH19ICovXG4gICAgdGhpcy5kaW1lbnNpb25zXztcbiAgICAvKiogQHByaXZhdGUgeyFDb3JuZXJ9ICovXG4gICAgdGhpcy5hbmNob3JDb3JuZXJfID0gQ29ybmVyLlRPUF9TVEFSVDtcbiAgICAvKiogQHByaXZhdGUgeyFBbmNob3JNYXJnaW59ICovXG4gICAgdGhpcy5hbmNob3JNYXJnaW5fID0ge3RvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMH07XG4gICAgLyoqIEBwcml2YXRlIHs/QXV0b0xheW91dE1lYXN1cmVtZW50c30gKi9cbiAgICB0aGlzLm1lYXN1cmVzXyA9IG51bGw7XG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMucXVpY2tPcGVuXyA9IGZhbHNlO1xuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmhvaXN0ZWRFbGVtZW50XyA9IGZhbHNlO1xuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzRml4ZWRQb3NpdGlvbl8gPSBmYWxzZTtcbiAgICAvKiogQHByaXZhdGUgeyF7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSAqL1xuICAgIHRoaXMucG9zaXRpb25fID0ge3g6IDAsIHk6IDB9O1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCB7Uk9PVCwgT1BFTn0gPSBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcblxuICAgIGlmICghdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhST09UKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke1JPT1R9IGNsYXNzIHJlcXVpcmVkIGluIHJvb3QgZWxlbWVudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhPUEVOKSkge1xuICAgICAgdGhpcy5pc09wZW5fID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLm9wZW5BbmltYXRpb25FbmRUaW1lcklkXyk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXyk7XG4gICAgLy8gQ2FuY2VsIGFueSBjdXJyZW50bHkgcnVubmluZyBhbmltYXRpb25zLlxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uUmVxdWVzdElkXyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshQ29ybmVyfSBjb3JuZXIgRGVmYXVsdCBhbmNob3IgY29ybmVyIGFsaWdubWVudCBvZiB0b3AtbGVmdCBtZW51IHN1cmZhY2UgY29ybmVyLlxuICAgKi9cbiAgc2V0QW5jaG9yQ29ybmVyKGNvcm5lcikge1xuICAgIHRoaXMuYW5jaG9yQ29ybmVyXyA9IGNvcm5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFBbmNob3JNYXJnaW59IG1hcmdpbiBzZXQgb2YgbWFyZ2luIHZhbHVlcyBmcm9tIGFuY2hvci5cbiAgICovXG4gIHNldEFuY2hvck1hcmdpbihtYXJnaW4pIHtcbiAgICB0aGlzLmFuY2hvck1hcmdpbl8udG9wID0gdHlwZW9mIG1hcmdpbi50b3AgPT09ICdudW1iZXInID8gbWFyZ2luLnRvcCA6IDA7XG4gICAgdGhpcy5hbmNob3JNYXJnaW5fLnJpZ2h0ID0gdHlwZW9mIG1hcmdpbi5yaWdodCA9PT0gJ251bWJlcicgPyBtYXJnaW4ucmlnaHQgOiAwO1xuICAgIHRoaXMuYW5jaG9yTWFyZ2luXy5ib3R0b20gPSB0eXBlb2YgbWFyZ2luLmJvdHRvbSA9PT0gJ251bWJlcicgPyBtYXJnaW4uYm90dG9tIDogMDtcbiAgICB0aGlzLmFuY2hvck1hcmdpbl8ubGVmdCA9IHR5cGVvZiBtYXJnaW4ubGVmdCA9PT0gJ251bWJlcicgPyBtYXJnaW4ubGVmdCA6IDA7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBpbmRpY2F0ZSBpZiB0aGUgbWVudS1zdXJmYWNlIGlzIGhvaXN0ZWQgdG8gdGhlIGJvZHkuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNIb2lzdGVkXG4gICAqL1xuICBzZXRJc0hvaXN0ZWQoaXNIb2lzdGVkKSB7XG4gICAgdGhpcy5ob2lzdGVkRWxlbWVudF8gPSBpc0hvaXN0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBzZXQgdGhlIG1lbnUtc3VyZmFjZSBjYWxjdWxhdGlvbnMgYmFzZWQgb24gYSBmaXhlZCBwb3NpdGlvbiBtZW51LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzRml4ZWRQb3NpdGlvblxuICAgKi9cbiAgc2V0Rml4ZWRQb3NpdGlvbihpc0ZpeGVkUG9zaXRpb24pIHtcbiAgICB0aGlzLmlzRml4ZWRQb3NpdGlvbl8gPSBpc0ZpeGVkUG9zaXRpb247XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgbWVudS1zdXJmYWNlIHBvc2l0aW9uIG9uIHRoZSBwYWdlLlxuICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgKi9cbiAgc2V0QWJzb2x1dGVQb3NpdGlvbih4LCB5KSB7XG4gICAgdGhpcy5wb3NpdGlvbl8ueCA9IHRoaXMudHlwZUNoZWNraXNGaW5pdGVfKHgpID8geCA6IDA7XG4gICAgdGhpcy5wb3NpdGlvbl8ueSA9IHRoaXMudHlwZUNoZWNraXNGaW5pdGVfKHkpID8geSA6IDA7XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSBxdWlja09wZW4gKi9cbiAgc2V0UXVpY2tPcGVuKHF1aWNrT3Blbikge1xuICAgIHRoaXMucXVpY2tPcGVuXyA9IHF1aWNrT3BlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgY2xpY2tzIGFuZCBjbG9zZSBpZiBub3Qgd2l0aGluIG1lbnUtc3VyZmFjZSBlbGVtZW50LlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqL1xuICBoYW5kbGVCb2R5Q2xpY2soZXZ0KSB7XG4gICAgY29uc3QgZWwgPSBldnQudGFyZ2V0O1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNFbGVtZW50SW5Db250YWluZXIoZWwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGUga2V5cyB0aGF0IGNsb3NlIHRoZSBzdXJmYWNlLlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqL1xuICBoYW5kbGVLZXlkb3duKGV2dCkge1xuICAgIGNvbnN0IHtrZXlDb2RlLCBrZXksIHNoaWZ0S2V5fSA9IGV2dDtcblxuICAgIGNvbnN0IGlzRXNjYXBlID0ga2V5ID09PSAnRXNjYXBlJyB8fCBrZXlDb2RlID09PSAyNztcbiAgICBjb25zdCBpc1RhYiA9IGtleSA9PT0gJ1RhYicgfHwga2V5Q29kZSA9PT0gOTtcblxuICAgIGlmIChpc0VzY2FwZSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSBpZiAoaXNUYWIpIHtcbiAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzTGFzdEVsZW1lbnRGb2N1c2VkKCkgJiYgIXNoaWZ0S2V5KSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNGaXJzdEVsZW1lbnQoKTtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWRhcHRlcl8uaXNGaXJzdEVsZW1lbnRGb2N1c2VkKCkgJiYgc2hpZnRLZXkpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0xhc3RFbGVtZW50KCk7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshQXV0b0xheW91dE1lYXN1cmVtZW50c30gTWVhc3VyZW1lbnRzIHVzZWQgdG8gcG9zaXRpb24gbWVudSBzdXJmYWNlIHBvcHVwLlxuICAgKi9cbiAgZ2V0QXV0b0xheW91dE1lYXN1cmVtZW50c18oKSB7XG4gICAgbGV0IGFuY2hvclJlY3QgPSB0aGlzLmFkYXB0ZXJfLmdldEFuY2hvckRpbWVuc2lvbnMoKTtcbiAgICBjb25zdCB2aWV3cG9ydCA9IHRoaXMuYWRhcHRlcl8uZ2V0V2luZG93RGltZW5zaW9ucygpO1xuICAgIGNvbnN0IGJvZHlEaW1lbnNpb25zID0gdGhpcy5hZGFwdGVyXy5nZXRCb2R5RGltZW5zaW9ucygpO1xuICAgIGNvbnN0IHdpbmRvd1Njcm9sbCA9IHRoaXMuYWRhcHRlcl8uZ2V0V2luZG93U2Nyb2xsKCk7XG5cbiAgICBpZiAoIWFuY2hvclJlY3QpIHtcbiAgICAgIGFuY2hvclJlY3QgPSAvKiogQHR5cGUge0NsaWVudFJlY3R9ICovICh7XG4gICAgICAgIHg6IHRoaXMucG9zaXRpb25fLngsXG4gICAgICAgIHk6IHRoaXMucG9zaXRpb25fLnksXG4gICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbl8ueSxcbiAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uXy55LFxuICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uXy54LFxuICAgICAgICByaWdodDogdGhpcy5wb3NpdGlvbl8ueCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB2aWV3cG9ydCxcbiAgICAgIGJvZHlEaW1lbnNpb25zLFxuICAgICAgd2luZG93U2Nyb2xsLFxuICAgICAgdmlld3BvcnREaXN0YW5jZToge1xuICAgICAgICB0b3A6IGFuY2hvclJlY3QudG9wLFxuICAgICAgICByaWdodDogdmlld3BvcnQud2lkdGggLSBhbmNob3JSZWN0LnJpZ2h0LFxuICAgICAgICBsZWZ0OiBhbmNob3JSZWN0LmxlZnQsXG4gICAgICAgIGJvdHRvbTogdmlld3BvcnQuaGVpZ2h0IC0gYW5jaG9yUmVjdC5ib3R0b20sXG4gICAgICB9LFxuICAgICAgYW5jaG9ySGVpZ2h0OiBhbmNob3JSZWN0LmhlaWdodCxcbiAgICAgIGFuY2hvcldpZHRoOiBhbmNob3JSZWN0LndpZHRoLFxuICAgICAgc3VyZmFjZUhlaWdodDogdGhpcy5kaW1lbnNpb25zXy5oZWlnaHQsXG4gICAgICBzdXJmYWNlV2lkdGg6IHRoaXMuZGltZW5zaW9uc18ud2lkdGgsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgY29ybmVyIG9mIHRoZSBhbmNob3IgZnJvbSB3aGljaCB0byBhbmltYXRlIGFuZCBwb3NpdGlvbiB0aGUgbWVudSBzdXJmYWNlLlxuICAgKiBAcmV0dXJuIHshQ29ybmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0T3JpZ2luQ29ybmVyXygpIHtcbiAgICAvLyBEZWZhdWx0czogb3BlbiBmcm9tIHRoZSB0b3AgbGVmdC5cbiAgICBsZXQgY29ybmVyID0gQ29ybmVyLlRPUF9MRUZUO1xuXG4gICAgY29uc3Qge3ZpZXdwb3J0RGlzdGFuY2UsIGFuY2hvckhlaWdodCwgYW5jaG9yV2lkdGgsIHN1cmZhY2VIZWlnaHQsIHN1cmZhY2VXaWR0aH0gPSB0aGlzLm1lYXN1cmVzXztcbiAgICBjb25zdCBpc0JvdHRvbUFsaWduZWQgPSBCb29sZWFuKHRoaXMuYW5jaG9yQ29ybmVyXyAmIENvcm5lckJpdC5CT1RUT00pO1xuICAgIGNvbnN0IGF2YWlsYWJsZVRvcCA9IGlzQm90dG9tQWxpZ25lZCA/IHZpZXdwb3J0RGlzdGFuY2UudG9wICsgYW5jaG9ySGVpZ2h0ICsgdGhpcy5hbmNob3JNYXJnaW5fLmJvdHRvbVxuICAgICAgOiB2aWV3cG9ydERpc3RhbmNlLnRvcCArIHRoaXMuYW5jaG9yTWFyZ2luXy50b3A7XG4gICAgY29uc3QgYXZhaWxhYmxlQm90dG9tID0gaXNCb3R0b21BbGlnbmVkID8gdmlld3BvcnREaXN0YW5jZS5ib3R0b20gLSB0aGlzLmFuY2hvck1hcmdpbl8uYm90dG9tXG4gICAgICA6IHZpZXdwb3J0RGlzdGFuY2UuYm90dG9tICsgYW5jaG9ySGVpZ2h0IC0gdGhpcy5hbmNob3JNYXJnaW5fLnRvcDtcblxuICAgIGNvbnN0IHRvcE92ZXJmbG93ID0gc3VyZmFjZUhlaWdodCAtIGF2YWlsYWJsZVRvcDtcbiAgICBjb25zdCBib3R0b21PdmVyZmxvdyA9IHN1cmZhY2VIZWlnaHQgLSBhdmFpbGFibGVCb3R0b207XG4gICAgaWYgKGJvdHRvbU92ZXJmbG93ID4gMCAmJiB0b3BPdmVyZmxvdyA8IGJvdHRvbU92ZXJmbG93KSB7XG4gICAgICBjb3JuZXIgfD0gQ29ybmVyQml0LkJPVFRPTTtcbiAgICB9XG5cbiAgICBjb25zdCBpc1J0bCA9IHRoaXMuYWRhcHRlcl8uaXNSdGwoKTtcbiAgICBjb25zdCBpc0ZsaXBSdGwgPSBCb29sZWFuKHRoaXMuYW5jaG9yQ29ybmVyXyAmIENvcm5lckJpdC5GTElQX1JUTCk7XG4gICAgY29uc3QgYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCA9IEJvb2xlYW4odGhpcy5hbmNob3JDb3JuZXJfICYgQ29ybmVyQml0LlJJR0hUKTtcbiAgICBjb25zdCBpc0FsaWduZWRSaWdodCA9IChhdm9pZEhvcml6b250YWxPdmVybGFwICYmICFpc1J0bCkgfHxcbiAgICAgICghYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCAmJiBpc0ZsaXBSdGwgJiYgaXNSdGwpO1xuICAgIGNvbnN0IGF2YWlsYWJsZUxlZnQgPSBpc0FsaWduZWRSaWdodCA/IHZpZXdwb3J0RGlzdGFuY2UubGVmdCArIGFuY2hvcldpZHRoICsgdGhpcy5hbmNob3JNYXJnaW5fLnJpZ2h0IDpcbiAgICAgIHZpZXdwb3J0RGlzdGFuY2UubGVmdCArIHRoaXMuYW5jaG9yTWFyZ2luXy5sZWZ0O1xuICAgIGNvbnN0IGF2YWlsYWJsZVJpZ2h0ID0gaXNBbGlnbmVkUmlnaHQgPyB2aWV3cG9ydERpc3RhbmNlLnJpZ2h0IC0gdGhpcy5hbmNob3JNYXJnaW5fLnJpZ2h0IDpcbiAgICAgIHZpZXdwb3J0RGlzdGFuY2UucmlnaHQgKyBhbmNob3JXaWR0aCAtIHRoaXMuYW5jaG9yTWFyZ2luXy5sZWZ0O1xuXG4gICAgY29uc3QgbGVmdE92ZXJmbG93ID0gc3VyZmFjZVdpZHRoIC0gYXZhaWxhYmxlTGVmdDtcbiAgICBjb25zdCByaWdodE92ZXJmbG93ID0gc3VyZmFjZVdpZHRoIC0gYXZhaWxhYmxlUmlnaHQ7XG5cbiAgICBpZiAoKGxlZnRPdmVyZmxvdyA8IDAgJiYgaXNBbGlnbmVkUmlnaHQgJiYgaXNSdGwpIHx8XG4gICAgICAgIChhdm9pZEhvcml6b250YWxPdmVybGFwICYmICFpc0FsaWduZWRSaWdodCAmJiBsZWZ0T3ZlcmZsb3cgPCAwKSB8fFxuICAgICAgICAocmlnaHRPdmVyZmxvdyA+IDAgJiYgbGVmdE92ZXJmbG93IDwgcmlnaHRPdmVyZmxvdykpIHtcbiAgICAgIGNvcm5lciB8PSBDb3JuZXJCaXQuUklHSFQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7Q29ybmVyfSAqLyAoY29ybmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFDb3JuZXJ9IGNvcm5lciBPcmlnaW4gY29ybmVyIG9mIHRoZSBtZW51IHN1cmZhY2UuXG4gICAqIEByZXR1cm4ge251bWJlcn0gSG9yaXpvbnRhbCBvZmZzZXQgb2YgbWVudSBzdXJmYWNlIG9yaWdpbiBjb3JuZXIgZnJvbSBjb3JyZXNwb25kaW5nIGFuY2hvciBjb3JuZXIuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRIb3Jpem9udGFsT3JpZ2luT2Zmc2V0Xyhjb3JuZXIpIHtcbiAgICBjb25zdCB7YW5jaG9yV2lkdGh9ID0gdGhpcy5tZWFzdXJlc187XG4gICAgLy8gaXNSaWdodEFsaWduZWQgY29ycmVzcG9uZHMgdG8gdXNpbmcgdGhlICdyaWdodCcgcHJvcGVydHkgb24gdGhlIHN1cmZhY2UuXG4gICAgY29uc3QgaXNSaWdodEFsaWduZWQgPSBCb29sZWFuKGNvcm5lciAmIENvcm5lckJpdC5SSUdIVCk7XG4gICAgY29uc3QgYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCA9IEJvb2xlYW4odGhpcy5hbmNob3JDb3JuZXJfICYgQ29ybmVyQml0LlJJR0hUKTtcblxuICAgIGlmIChpc1JpZ2h0QWxpZ25lZCkge1xuICAgICAgY29uc3QgcmlnaHRPZmZzZXQgPSBhdm9pZEhvcml6b250YWxPdmVybGFwID8gYW5jaG9yV2lkdGggLSB0aGlzLmFuY2hvck1hcmdpbl8ubGVmdCA6IHRoaXMuYW5jaG9yTWFyZ2luXy5yaWdodDtcblxuICAgICAgLy8gRm9yIGhvaXN0ZWQgb3IgZml4ZWQgZWxlbWVudHMsIGFkanVzdCB0aGUgb2Zmc2V0IGJ5IHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdmlld3BvcnQgd2lkdGggYW5kIGJvZHkgd2lkdGggc29cbiAgICAgIC8vIHdoZW4gd2UgY2FsY3VsYXRlIHRoZSByaWdodCB2YWx1ZSAoYGFkanVzdFBvc2l0aW9uRm9ySG9pc3RlZEVsZW1lbnRfYCkgYmFzZWQgb24gdGhlIGVsZW1lbnQgcG9zaXRpb24sXG4gICAgICAvLyB0aGUgcmlnaHQgcHJvcGVydHkgaXMgY29ycmVjdC5cbiAgICAgIGlmICh0aGlzLmhvaXN0ZWRFbGVtZW50XyB8fCB0aGlzLmlzRml4ZWRQb3NpdGlvbl8pIHtcbiAgICAgICAgcmV0dXJuIHJpZ2h0T2Zmc2V0IC0gKHRoaXMubWVhc3VyZXNfLnZpZXdwb3J0LndpZHRoIC0gdGhpcy5tZWFzdXJlc18uYm9keURpbWVuc2lvbnMud2lkdGgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmlnaHRPZmZzZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF2b2lkSG9yaXpvbnRhbE92ZXJsYXAgPyBhbmNob3JXaWR0aCAtIHRoaXMuYW5jaG9yTWFyZ2luXy5yaWdodCA6IHRoaXMuYW5jaG9yTWFyZ2luXy5sZWZ0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUNvcm5lcn0gY29ybmVyIE9yaWdpbiBjb3JuZXIgb2YgdGhlIG1lbnUgc3VyZmFjZS5cbiAgICogQHJldHVybiB7bnVtYmVyfSBWZXJ0aWNhbCBvZmZzZXQgb2YgbWVudSBzdXJmYWNlIG9yaWdpbiBjb3JuZXIgZnJvbSBjb3JyZXNwb25kaW5nIGFuY2hvciBjb3JuZXIuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRWZXJ0aWNhbE9yaWdpbk9mZnNldF8oY29ybmVyKSB7XG4gICAgY29uc3Qge2FuY2hvckhlaWdodH0gPSB0aGlzLm1lYXN1cmVzXztcbiAgICBjb25zdCBpc0JvdHRvbUFsaWduZWQgPSBCb29sZWFuKGNvcm5lciAmIENvcm5lckJpdC5CT1RUT00pO1xuICAgIGNvbnN0IGF2b2lkVmVydGljYWxPdmVybGFwID0gQm9vbGVhbih0aGlzLmFuY2hvckNvcm5lcl8gJiBDb3JuZXJCaXQuQk9UVE9NKTtcbiAgICBsZXQgeSA9IDA7XG5cbiAgICBpZiAoaXNCb3R0b21BbGlnbmVkKSB7XG4gICAgICB5ID0gYXZvaWRWZXJ0aWNhbE92ZXJsYXAgPyBhbmNob3JIZWlnaHQgLSB0aGlzLmFuY2hvck1hcmdpbl8udG9wIDogLXRoaXMuYW5jaG9yTWFyZ2luXy5ib3R0b207XG4gICAgfSBlbHNlIHtcbiAgICAgIHkgPSBhdm9pZFZlcnRpY2FsT3ZlcmxhcCA/IChhbmNob3JIZWlnaHQgKyB0aGlzLmFuY2hvck1hcmdpbl8uYm90dG9tKSA6IHRoaXMuYW5jaG9yTWFyZ2luXy50b3A7XG4gICAgfVxuICAgIHJldHVybiB5O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUNvcm5lcn0gY29ybmVyIE9yaWdpbiBjb3JuZXIgb2YgdGhlIG1lbnUgc3VyZmFjZS5cbiAgICogQHJldHVybiB7bnVtYmVyfSBNYXhpbXVtIGhlaWdodCBvZiB0aGUgbWVudSBzdXJmYWNlLCBiYXNlZCBvbiBhdmFpbGFibGUgc3BhY2UuIDAgaW5kaWNhdGVzIHNob3VsZCBub3QgYmUgc2V0LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TWVudVN1cmZhY2VNYXhIZWlnaHRfKGNvcm5lcikge1xuICAgIGxldCBtYXhIZWlnaHQgPSAwO1xuICAgIGNvbnN0IHt2aWV3cG9ydERpc3RhbmNlfSA9IHRoaXMubWVhc3VyZXNfO1xuICAgIGNvbnN0IGlzQm90dG9tQWxpZ25lZCA9IEJvb2xlYW4oY29ybmVyICYgQ29ybmVyQml0LkJPVFRPTSk7XG4gICAgY29uc3Qge01BUkdJTl9UT19FREdFfSA9IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5udW1iZXJzO1xuXG4gICAgLy8gV2hlbiBtYXhpbXVtIGhlaWdodCBpcyBub3Qgc3BlY2lmaWVkLCBpdCBpcyBoYW5kbGVkIGZyb20gY3NzLlxuICAgIGlmIChpc0JvdHRvbUFsaWduZWQpIHtcbiAgICAgIG1heEhlaWdodCA9IHZpZXdwb3J0RGlzdGFuY2UudG9wICsgdGhpcy5hbmNob3JNYXJnaW5fLnRvcCAtIE1BUkdJTl9UT19FREdFO1xuICAgICAgaWYgKCEodGhpcy5hbmNob3JDb3JuZXJfICYgQ29ybmVyQml0LkJPVFRPTSkpIHtcbiAgICAgICAgbWF4SGVpZ2h0ICs9IHRoaXMubWVhc3VyZXNfLmFuY2hvckhlaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWF4SGVpZ2h0ID0gdmlld3BvcnREaXN0YW5jZS5ib3R0b20gLSB0aGlzLmFuY2hvck1hcmdpbl8uYm90dG9tICsgdGhpcy5tZWFzdXJlc18uYW5jaG9ySGVpZ2h0IC0gTUFSR0lOX1RPX0VER0U7XG4gICAgICBpZiAodGhpcy5hbmNob3JDb3JuZXJfICYgQ29ybmVyQml0LkJPVFRPTSkge1xuICAgICAgICBtYXhIZWlnaHQgLT0gdGhpcy5tZWFzdXJlc18uYW5jaG9ySGVpZ2h0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXhIZWlnaHQ7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgYXV0b1Bvc2l0aW9uXygpIHtcbiAgICAvLyBDb21wdXRlIG1lYXN1cmVtZW50cyBmb3IgYXV0b3Bvc2l0aW9uIG1ldGhvZHMgcmV1c2UuXG4gICAgdGhpcy5tZWFzdXJlc18gPSB0aGlzLmdldEF1dG9MYXlvdXRNZWFzdXJlbWVudHNfKCk7XG5cbiAgICBjb25zdCBjb3JuZXIgPSB0aGlzLmdldE9yaWdpbkNvcm5lcl8oKTtcbiAgICBjb25zdCBtYXhNZW51U3VyZmFjZUhlaWdodCA9IHRoaXMuZ2V0TWVudVN1cmZhY2VNYXhIZWlnaHRfKGNvcm5lcik7XG4gICAgY29uc3QgdmVydGljYWxBbGlnbm1lbnQgPSAoY29ybmVyICYgQ29ybmVyQml0LkJPVFRPTSkgPyAnYm90dG9tJyA6ICd0b3AnO1xuICAgIGxldCBob3Jpem9udGFsQWxpZ25tZW50ID0gKGNvcm5lciAmIENvcm5lckJpdC5SSUdIVCkgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIGNvbnN0IGhvcml6b250YWxPZmZzZXQgPSB0aGlzLmdldEhvcml6b250YWxPcmlnaW5PZmZzZXRfKGNvcm5lcik7XG4gICAgY29uc3QgdmVydGljYWxPZmZzZXQgPSB0aGlzLmdldFZlcnRpY2FsT3JpZ2luT2Zmc2V0Xyhjb3JuZXIpO1xuICAgIGxldCBwb3NpdGlvbiA9IHtcbiAgICAgIFtob3Jpem9udGFsQWxpZ25tZW50XTogaG9yaXpvbnRhbE9mZnNldCA/IGhvcml6b250YWxPZmZzZXQgOiAnMCcsXG4gICAgICBbdmVydGljYWxBbGlnbm1lbnRdOiB2ZXJ0aWNhbE9mZnNldCA/IHZlcnRpY2FsT2Zmc2V0IDogJzAnLFxuICAgIH07XG4gICAgY29uc3Qge2FuY2hvcldpZHRoLCBzdXJmYWNlV2lkdGh9ID0gdGhpcy5tZWFzdXJlc187XG4gICAgLy8gQ2VudGVyIGFsaWduIHdoZW4gYW5jaG9yIHdpZHRoIGlzIGNvbXBhcmFibGUgb3IgZ3JlYXRlciB0aGFuIG1lbnUgc3VyZmFjZSwgb3RoZXJ3aXNlIGtlZXAgY29ybmVyLlxuICAgIGlmIChhbmNob3JXaWR0aCAvIHN1cmZhY2VXaWR0aCA+IG51bWJlcnMuQU5DSE9SX1RPX01FTlVfU1VSRkFDRV9XSURUSF9SQVRJTykge1xuICAgICAgaG9yaXpvbnRhbEFsaWdubWVudCA9ICdjZW50ZXInO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBtZW51LXN1cmZhY2UgaGFzIGJlZW4gaG9pc3RlZCB0byB0aGUgYm9keSwgaXQncyBubyBsb25nZXIgcmVsYXRpdmUgdG8gdGhlIGFuY2hvciBlbGVtZW50XG4gICAgaWYgKHRoaXMuaG9pc3RlZEVsZW1lbnRfIHx8IHRoaXMuaXNGaXhlZFBvc2l0aW9uXykge1xuICAgICAgcG9zaXRpb24gPSB0aGlzLmFkanVzdFBvc2l0aW9uRm9ySG9pc3RlZEVsZW1lbnRfKHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gcG9zaXRpb24pIHtcbiAgICAgIGlmIChwb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBwb3NpdGlvbltwcm9wXSAhPT0gJzAnKSB7XG4gICAgICAgIHBvc2l0aW9uW3Byb3BdID0gYCR7cGFyc2VJbnQocG9zaXRpb25bcHJvcF0sIDEwKX1weGA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5zZXRUcmFuc2Zvcm1PcmlnaW4oYCR7aG9yaXpvbnRhbEFsaWdubWVudH0gJHt2ZXJ0aWNhbEFsaWdubWVudH1gKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldE1heEhlaWdodChtYXhNZW51U3VyZmFjZUhlaWdodCA/IG1heE1lbnVTdXJmYWNlSGVpZ2h0ICsgJ3B4JyA6ICcnKTtcblxuICAgIC8vIENsZWFyIG1lYXN1cmVzIGFmdGVyIHBvc2l0aW9uaW5nIGlzIGNvbXBsZXRlLlxuICAgIHRoaXMubWVhc3VyZXNfID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBvZmZzZXRzIGZvciBwb3NpdGlvbmluZyB0aGUgbWVudS1zdXJmYWNlIHdoZW4gdGhlIG1lbnUtc3VyZmFjZSBoYXMgYmVlblxuICAgKiBob2lzdGVkIHRvIHRoZSBib2R5LlxuICAgKiBAcGFyYW0geyF7XG4gICAqICAgdG9wOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gICAqICAgcmlnaHQ6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgICogICBib3R0b206IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgICogICBsZWZ0OiAoc3RyaW5nfHVuZGVmaW5lZClcbiAgICogfX0gcG9zaXRpb25cbiAgICogQHJldHVybiB7IXtcbiAgICogICB0b3A6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgICogICByaWdodDogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgKiAgIGJvdHRvbTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgKiAgIGxlZnQ6IChzdHJpbmd8dW5kZWZpbmVkKVxuICAgKiB9fSBwb3NpdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWRqdXN0UG9zaXRpb25Gb3JIb2lzdGVkRWxlbWVudF8ocG9zaXRpb24pIHtcbiAgICBjb25zdCB7d2luZG93U2Nyb2xsLCB2aWV3cG9ydERpc3RhbmNlfSA9IHRoaXMubWVhc3VyZXNfO1xuXG4gICAgZm9yIChjb25zdCBwcm9wIGluIHBvc2l0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24uaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgLy8gSG9pc3RlZCBzdXJmYWNlcyBuZWVkIHRvIGhhdmUgdGhlIGFuY2hvciBlbGVtZW50cyBsb2NhdGlvbiBvbiB0aGUgcGFnZSBhZGRlZCB0byB0aGVcbiAgICAgICAgLy8gcG9zaXRpb24gcHJvcGVydGllcyBmb3IgcHJvcGVyIGFsaWdubWVudCBvbiB0aGUgYm9keS5cbiAgICAgICAgaWYgKHZpZXdwb3J0RGlzdGFuY2UuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICBwb3NpdGlvbltwcm9wXSA9IHBhcnNlSW50KHBvc2l0aW9uW3Byb3BdLCAxMCkgKyB2aWV3cG9ydERpc3RhbmNlW3Byb3BdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3VyZmFjZXMgdGhhdCBhcmUgYWJzb2x1dGVseSBwb3NpdGlvbmVkIG5lZWQgdG8gaGF2ZSBhZGRpdGlvbmFsIGNhbGN1bGF0aW9ucyBmb3Igc2Nyb2xsXG4gICAgICAgIC8vIGFuZCBib3R0b20gcG9zaXRpb25pbmcuXG4gICAgICAgIGlmICghdGhpcy5pc0ZpeGVkUG9zaXRpb25fKSB7XG4gICAgICAgICAgaWYgKHByb3AgPT09ICd0b3AnKSB7XG4gICAgICAgICAgICBwb3NpdGlvbltwcm9wXSA9IHBhcnNlSW50KHBvc2l0aW9uW3Byb3BdLCAxMCkgKyB3aW5kb3dTY3JvbGwueTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICBwb3NpdGlvbltwcm9wXSA9IHBhcnNlSW50KHBvc2l0aW9uW3Byb3BdLCAxMCkgLSB3aW5kb3dTY3JvbGwueTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgcG9zaXRpb25bcHJvcF0gPSBwYXJzZUludChwb3NpdGlvbltwcm9wXSwgMTApICsgd2luZG93U2Nyb2xsLng7XG4gICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICBwb3NpdGlvbltwcm9wXSA9IHBhcnNlSW50KHBvc2l0aW9uW3Byb3BdLCAxMCkgLSB3aW5kb3dTY3JvbGwueDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICAvKipcbiAgICogT3BlbiB0aGUgbWVudSBzdXJmYWNlLlxuICAgKi9cbiAgb3BlbigpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnNhdmVGb2N1cygpO1xuXG4gICAgaWYgKCF0aGlzLnF1aWNrT3Blbl8pIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HX09QRU4pO1xuICAgIH1cblxuICAgIHRoaXMuYW5pbWF0aW9uUmVxdWVzdElkXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLk9QRU4pO1xuICAgICAgdGhpcy5kaW1lbnNpb25zXyA9IHRoaXMuYWRhcHRlcl8uZ2V0SW5uZXJEaW1lbnNpb25zKCk7XG4gICAgICB0aGlzLmF1dG9Qb3NpdGlvbl8oKTtcbiAgICAgIGlmICh0aGlzLnF1aWNrT3Blbl8pIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlPcGVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wZW5BbmltYXRpb25FbmRUaW1lcklkXyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMub3BlbkFuaW1hdGlvbkVuZFRpbWVySWRfID0gMDtcbiAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElOR19PUEVOKTtcbiAgICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeU9wZW4oKTtcbiAgICAgICAgfSwgbnVtYmVycy5UUkFOU0lUSU9OX09QRU5fRFVSQVRJT04pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuaXNPcGVuXyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBtZW51IHN1cmZhY2UuXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMucXVpY2tPcGVuXykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkdfQ0xPU0VEKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICAgIGlmICh0aGlzLnF1aWNrT3Blbl8pIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfID0gMDtcbiAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElOR19DTE9TRUQpO1xuICAgICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5Q2xvc2UoKTtcbiAgICAgICAgfSwgbnVtYmVycy5UUkFOU0lUSU9OX0NMT1NFX0RVUkFUSU9OKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuaXNPcGVuXyA9IGZhbHNlO1xuICAgIHRoaXMubWF5YmVSZXN0b3JlRm9jdXNfKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGxhc3QgZm9jdXNlZCBlbGVtZW50IHdoZW4gdGhlIG1lbnUgc3VyZmFjZSB3YXMgb3BlbmVkIHNob3VsZCByZWdhaW4gZm9jdXMsIGlmIHRoZSB1c2VyIGlzXG4gICAqIGZvY3VzZWQgb24gb3Igd2l0aGluIHRoZSBtZW51IHN1cmZhY2Ugd2hlbiBpdCBpcyBjbG9zZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBtYXliZVJlc3RvcmVGb2N1c18oKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNGb2N1c2VkKCkgfHwgdGhpcy5hZGFwdGVyXy5pc0VsZW1lbnRJbkNvbnRhaW5lcihkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZXN0b3JlRm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLmlzT3Blbl87XG4gIH1cblxuICAvKipcbiAgICogaXNGaW5pdGUgdGhhdCBkb2Vzbid0IGZvcmNlIGNvbnZlcnNpb24gdG8gbnVtYmVyIHR5cGUuXG4gICAqIEVxdWl2YWxlbnQgdG8gTnVtYmVyLmlzRmluaXRlIGluIEVTMjAxNSwgYnV0IGlzIG5vdCBpbmNsdWRlZCBpbiBJRTExLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0eXBlQ2hlY2tpc0Zpbml0ZV8obnVtKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInICYmIGlzRmluaXRlKG51bSk7XG4gIH1cbn1cblxuZXhwb3J0IHtNRENNZW51U3VyZmFjZUZvdW5kYXRpb24sIEFuY2hvck1hcmdpbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIExpc3QuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmcgZm9jdXMuXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENMaXN0QWRhcHRlciB7XG4gIC8qKiBAcmV0dXJuIHtudW1iZXJ9ICovXG4gIGdldExpc3RJdGVtQ291bnQoKSB7fVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9ICovXG4gIGdldEZvY3VzZWRFbGVtZW50SW5kZXgoKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgYXR0cmlidXRlLCB2YWx1ZSkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVcbiAgICovXG4gIHJlbW92ZUF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgYXR0cmlidXRlKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgYWRkQ2xhc3NGb3JFbGVtZW50SW5kZXgoaW5kZXgsIGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4KGluZGV4LCBjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEZvY3VzZXMgbGlzdCBpdGVtIGF0IHRoZSBpbmRleCBzcGVjaWZpZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKi9cbiAgZm9jdXNJdGVtQXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgdGFiaW5kZXggdG8gdGhlIHZhbHVlIHNwZWNpZmllZCBmb3IgYWxsIGJ1dHRvbi9hIGVsZW1lbnQgY2hpbGRyZW4gb2ZcbiAgICogdGhlIGxpc3QgaXRlbSBhdCB0aGUgaW5kZXggc3BlY2lmaWVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGlzdEl0ZW1JbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gdGFiSW5kZXhWYWx1ZVxuICAgKi9cbiAgc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuKGxpc3RJdGVtSW5kZXgsIHRhYkluZGV4VmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIElmIHRoZSBnaXZlbiBlbGVtZW50IGhhcyBhbiBocmVmLCBmb2xsb3dzIHRoZSBsaW5rLlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBlbGVcbiAgICovXG4gIGZvbGxvd0hyZWYoZWxlKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHJhZGlvIGJ1dHRvbiBpcyBwcmVzZW50IGF0IGdpdmVuIGxpc3QgaXRlbSBpbmRleC5cbiAgICovXG4gIGhhc1JhZGlvQXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBjaGVja2JveCBpcyBwcmVzZW50IGF0IGdpdmVuIGxpc3QgaXRlbSBpbmRleC5cbiAgICovXG4gIGhhc0NoZWNrYm94QXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBjaGVja2JveCBpbnNpZGUgYSBsaXN0IGl0ZW0gaXMgY2hlY2tlZC5cbiAgICovXG4gIGlzQ2hlY2tib3hDaGVja2VkQXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgY2hlY2tlZCBzdGF0dXMgb2YgY2hlY2tib3ggb3IgcmFkaW8gYXQgZ2l2ZW4gbGlzdCBpdGVtIGluZGV4LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0NoZWNrZWRcbiAgICovXG4gIHNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4KGluZGV4LCBpc0NoZWNrZWQpIHt9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSB3aGVuIHRoZSBjdXJyZW50IGZvY3VzZWQgZWxlbWVudCBpcyBpbnNpZGUgbGlzdCByb290LlxuICAgKi9cbiAgaXNGb2N1c0luc2lkZUxpc3QoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENMaXN0QWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIFJPT1Q6ICdtZGMtbGlzdCcsXG4gIExJU1RfSVRFTV9DTEFTUzogJ21kYy1saXN0LWl0ZW0nLFxuICBMSVNUX0lURU1fU0VMRUNURURfQ0xBU1M6ICdtZGMtbGlzdC1pdGVtLS1zZWxlY3RlZCcsXG4gIExJU1RfSVRFTV9BQ1RJVkFURURfQ0xBU1M6ICdtZGMtbGlzdC1pdGVtLS1hY3RpdmF0ZWQnLFxufTtcblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBzdHJpbmdzID0ge1xuICBBUklBX09SSUVOVEFUSU9OOiAnYXJpYS1vcmllbnRhdGlvbicsXG4gIEFSSUFfT1JJRU5UQVRJT05fSE9SSVpPTlRBTDogJ2hvcml6b250YWwnLFxuICBBUklBX1NFTEVDVEVEOiAnYXJpYS1zZWxlY3RlZCcsXG4gIEFSSUFfQ0hFQ0tFRDogJ2FyaWEtY2hlY2tlZCcsXG4gIEFSSUFfQ0hFQ0tFRF9SQURJT19TRUxFQ1RPUjogJ1tyb2xlPVwicmFkaW9cIl1bYXJpYS1jaGVja2VkPVwidHJ1ZVwiXScsXG4gIEFSSUFfUk9MRV9DSEVDS0JPWF9TRUxFQ1RPUjogJ1tyb2xlPVwiY2hlY2tib3hcIl0nLFxuICBBUklBX0NIRUNLRURfQ0hFQ0tCT1hfU0VMRUNUT1I6ICdbcm9sZT1cImNoZWNrYm94XCJdW2FyaWEtY2hlY2tlZD1cInRydWVcIl0nLFxuICBSQURJT19TRUxFQ1RPUjogJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmRpc2FibGVkKScsXG4gIENIRUNLQk9YX1NFTEVDVE9SOiAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6ZGlzYWJsZWQpJyxcbiAgQ0hFQ0tCT1hfUkFESU9fU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpkaXNhYmxlZCksIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmRpc2FibGVkKScsXG4gIENISUxEX0VMRU1FTlRTX1RPX1RPR0dMRV9UQUJJTkRFWDogYC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTfSBidXR0b246bm90KDpkaXNhYmxlZCksXG4gIC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTfSBhYCxcbiAgRk9DVVNBQkxFX0NISUxEX0VMRU1FTlRTOiBgLiR7Y3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1N9IGJ1dHRvbjpub3QoOmRpc2FibGVkKSwgLiR7Y3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1N9IGEsXG4gIC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTfSBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpkaXNhYmxlZCksXG4gIC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTfSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpkaXNhYmxlZClgLFxuICBFTkFCTEVEX0lURU1TX1NFTEVDVE9SOiAnLm1kYy1saXN0LWl0ZW06bm90KC5tZGMtbGlzdC1pdGVtLS1kaXNhYmxlZCknLFxufTtcblxuLyoqIEB0eXBlZGVmIHtudW1iZXJ8IUFycmF5PG51bWJlcj59ICovXG5sZXQgSW5kZXg7XG5cbmV4cG9ydCB7c3RyaW5ncywgY3NzQ2xhc3NlcywgSW5kZXh9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ0xpc3RBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge3N0cmluZ3MsIGNzc0NsYXNzZXMsIEluZGV4fSBmcm9tICcuL2NvbnN0YW50cyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuY29uc3QgRUxFTUVOVFNfS0VZX0FMTE9XRURfSU4gPSBbJ2lucHV0JywgJ2J1dHRvbicsICd0ZXh0YXJlYScsICdzZWxlY3QnXTtcblxuY2xhc3MgTURDTGlzdEZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QHNlZSBNRENMaXN0QWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5cbiAgICogdHlwZXMuXG4gICAqIEByZXR1cm4geyFNRENMaXN0QWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ0xpc3RBZGFwdGVyfSAqLyAoe1xuICAgICAgZ2V0TGlzdEl0ZW1Db3VudDogKCkgPT4ge30sXG4gICAgICBnZXRGb2N1c2VkRWxlbWVudEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIHNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleDogKCkgPT4ge30sXG4gICAgICByZW1vdmVBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXg6ICgpID0+IHt9LFxuICAgICAgYWRkQ2xhc3NGb3JFbGVtZW50SW5kZXg6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3NGb3JFbGVtZW50SW5kZXg6ICgpID0+IHt9LFxuICAgICAgZm9jdXNJdGVtQXRJbmRleDogKCkgPT4ge30sXG4gICAgICBzZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW46ICgpID0+IHt9LFxuICAgICAgZm9sbG93SHJlZjogKCkgPT4ge30sXG4gICAgICBoYXNSYWRpb0F0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgaGFzQ2hlY2tib3hBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGlzQ2hlY2tib3hDaGVja2VkQXRJbmRleDogKCkgPT4ge30sXG4gICAgICBzZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleDogKCkgPT4ge30sXG4gICAgICBpc0ZvY3VzSW5zaWRlTGlzdDogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDTGlzdEFkYXB0ZXI9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENMaXN0Rm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLndyYXBGb2N1c18gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzVmVydGljYWxfID0gdHJ1ZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUluZGV4fSAqL1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8gPSAtMTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPSAtMTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLnVzZUFjdGl2YXRlZENsYXNzXyA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuaXNDaGVja2JveExpc3RfID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5pc1JhZGlvTGlzdF8gPSBmYWxzZTtcbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCkgPT09IDApIHJldHVybjtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0NoZWNrYm94QXRJbmRleCgwKSkge1xuICAgICAgdGhpcy5pc0NoZWNrYm94TGlzdF8gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hZGFwdGVyXy5oYXNSYWRpb0F0SW5kZXgoMCkpIHtcbiAgICAgIHRoaXMuaXNSYWRpb0xpc3RfID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcHJpdmF0ZSB3cmFwRm9jdXNfIHZhcmlhYmxlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAqL1xuICBzZXRXcmFwRm9jdXModmFsdWUpIHtcbiAgICB0aGlzLndyYXBGb2N1c18gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpc1ZlcnRpY2FsXyBwcml2YXRlIHZhcmlhYmxlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAqL1xuICBzZXRWZXJ0aWNhbE9yaWVudGF0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5pc1ZlcnRpY2FsXyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gcHJpdmF0ZSB2YXJpYWJsZS5cbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgc2V0U2luZ2xlU2VsZWN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5pc1NpbmdsZVNlbGVjdGlvbkxpc3RfID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdXNlQWN0aXZhdGVkQ2xhc3NfIHByaXZhdGUgdmFyaWFibGUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQWN0aXZhdGVkXG4gICAqL1xuICBzZXRVc2VBY3RpdmF0ZWRDbGFzcyh1c2VBY3RpdmF0ZWQpIHtcbiAgICB0aGlzLnVzZUFjdGl2YXRlZENsYXNzXyA9IHVzZUFjdGl2YXRlZDtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshSW5kZXh9ICovXG4gIGdldFNlbGVjdGVkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJbmRleF87XG4gIH1cblxuICAvKiogQHBhcmFtIHshSW5kZXh9IGluZGV4ICovXG4gIHNldFNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuaXNJbmRleFZhbGlkXyhpbmRleCkpIHJldHVybjtcblxuICAgIGlmICh0aGlzLmlzQ2hlY2tib3hMaXN0Xykge1xuICAgICAgdGhpcy5zZXRDaGVja2JveEF0SW5kZXhfKC8qKiBAdHlwZSB7IUFycmF5PG51bWJlcj59ICovIChpbmRleCkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc1JhZGlvTGlzdF8pIHtcbiAgICAgIHRoaXMuc2V0UmFkaW9BdEluZGV4XygvKiogQHR5cGUge251bWJlcn0gKi8gKGluZGV4KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U2luZ2xlU2VsZWN0aW9uQXRJbmRleF8oLyoqIEB0eXBlIHtudW1iZXJ9ICovIChpbmRleCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1cyBpbiBoYW5kbGVyIGZvciB0aGUgbGlzdCBpdGVtcy5cbiAgICogQHBhcmFtIGV2dFxuICAgKiBAcGFyYW0ge251bWJlcn0gbGlzdEl0ZW1JbmRleFxuICAgKi9cbiAgaGFuZGxlRm9jdXNJbihldnQsIGxpc3RJdGVtSW5kZXgpIHtcbiAgICBpZiAobGlzdEl0ZW1JbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbihsaXN0SXRlbUluZGV4LCAwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9jdXMgb3V0IGhhbmRsZXIgZm9yIHRoZSBsaXN0IGl0ZW1zLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxpc3RJdGVtSW5kZXhcbiAgICovXG4gIGhhbmRsZUZvY3VzT3V0KGV2dCwgbGlzdEl0ZW1JbmRleCkge1xuICAgIGlmIChsaXN0SXRlbUluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuKGxpc3RJdGVtSW5kZXgsIC0xKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCZXR3ZWVuIEZvY3Vzb3V0ICYgRm9jdXNpbiBzb21lIGJyb3dzZXJzIGRvIG5vdCBoYXZlIGZvY3VzIG9uIGFueSBlbGVtZW50LiBTZXR0aW5nIGEgZGVsYXkgdG8gd2FpdCB0aWxsIHRoZSBmb2N1c1xuICAgICAqIGlzIG1vdmVkIHRvIG5leHQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5hZGFwdGVyXy5pc0ZvY3VzSW5zaWRlTGlzdCgpKSB7XG4gICAgICAgIHRoaXMuc2V0VGFiaW5kZXhUb0ZpcnN0U2VsZWN0ZWRJdGVtXygpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEtleSBoYW5kbGVyIGZvciB0aGUgbGlzdC5cbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNSb290TGlzdEl0ZW1cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxpc3RJdGVtSW5kZXhcbiAgICovXG4gIGhhbmRsZUtleWRvd24oZXZ0LCBpc1Jvb3RMaXN0SXRlbSwgbGlzdEl0ZW1JbmRleCkge1xuICAgIGNvbnN0IGFycm93TGVmdCA9IGV2dC5rZXkgPT09ICdBcnJvd0xlZnQnIHx8IGV2dC5rZXlDb2RlID09PSAzNztcbiAgICBjb25zdCBhcnJvd1VwID0gZXZ0LmtleSA9PT0gJ0Fycm93VXAnIHx8IGV2dC5rZXlDb2RlID09PSAzODtcbiAgICBjb25zdCBhcnJvd1JpZ2h0ID0gZXZ0LmtleSA9PT0gJ0Fycm93UmlnaHQnIHx8IGV2dC5rZXlDb2RlID09PSAzOTtcbiAgICBjb25zdCBhcnJvd0Rvd24gPSBldnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldnQua2V5Q29kZSA9PT0gNDA7XG4gICAgY29uc3QgaXNIb21lID0gZXZ0LmtleSA9PT0gJ0hvbWUnIHx8IGV2dC5rZXlDb2RlID09PSAzNjtcbiAgICBjb25zdCBpc0VuZCA9IGV2dC5rZXkgPT09ICdFbmQnIHx8IGV2dC5rZXlDb2RlID09PSAzNTtcbiAgICBjb25zdCBpc0VudGVyID0gZXZ0LmtleSA9PT0gJ0VudGVyJyB8fCBldnQua2V5Q29kZSA9PT0gMTM7XG4gICAgY29uc3QgaXNTcGFjZSA9IGV2dC5rZXkgPT09ICdTcGFjZScgfHwgZXZ0LmtleUNvZGUgPT09IDMyO1xuXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0Rm9jdXNlZEVsZW1lbnRJbmRleCgpO1xuICAgIGxldCBuZXh0SW5kZXggPSAtMTtcbiAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSkge1xuICAgICAgY3VycmVudEluZGV4ID0gbGlzdEl0ZW1JbmRleDtcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPCAwKSB7XG4gICAgICAgIC8vIElmIHRoaXMgZXZlbnQgZG9lc24ndCBoYXZlIGEgbWRjLWxpc3QtaXRlbSBhbmNlc3RvciBmcm9tIHRoZVxuICAgICAgICAvLyBjdXJyZW50IGxpc3QgKG5vdCBmcm9tIGEgc3VibGlzdCksIHJldHVybiBlYXJseS5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgodGhpcy5pc1ZlcnRpY2FsXyAmJiBhcnJvd0Rvd24pIHx8ICghdGhpcy5pc1ZlcnRpY2FsXyAmJiBhcnJvd1JpZ2h0KSkge1xuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgbmV4dEluZGV4ID0gdGhpcy5mb2N1c05leHRFbGVtZW50KGN1cnJlbnRJbmRleCk7XG4gICAgfSBlbHNlIGlmICgodGhpcy5pc1ZlcnRpY2FsXyAmJiBhcnJvd1VwKSB8fCAoIXRoaXMuaXNWZXJ0aWNhbF8gJiYgYXJyb3dMZWZ0KSkge1xuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgbmV4dEluZGV4ID0gdGhpcy5mb2N1c1ByZXZFbGVtZW50KGN1cnJlbnRJbmRleCk7XG4gICAgfSBlbHNlIGlmIChpc0hvbWUpIHtcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgIG5leHRJbmRleCA9IHRoaXMuZm9jdXNGaXJzdEVsZW1lbnQoKTtcbiAgICB9IGVsc2UgaWYgKGlzRW5kKSB7XG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICBuZXh0SW5kZXggPSB0aGlzLmZvY3VzTGFzdEVsZW1lbnQoKTtcbiAgICB9IGVsc2UgaWYgKGlzRW50ZXIgfHwgaXNTcGFjZSkge1xuICAgICAgaWYgKGlzUm9vdExpc3RJdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0YWJsZUxpc3RfKCkpIHtcbiAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkSW5kZXhPbkFjdGlvbl8oY3VycmVudEluZGV4KTtcbiAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFeHBsaWNpdGx5IGFjdGl2YXRlIGxpbmtzLCBzaW5jZSB3ZSdyZSBwcmV2ZW50aW5nIGRlZmF1bHQgb24gRW50ZXIsIGFuZCBTcGFjZSBkb2Vzbid0IGFjdGl2YXRlIHRoZW0uXG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZm9sbG93SHJlZihjdXJyZW50SW5kZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPSBjdXJyZW50SW5kZXg7XG5cbiAgICBpZiAobmV4dEluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuc2V0VGFiaW5kZXhBdEluZGV4XyhuZXh0SW5kZXgpO1xuICAgICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4XyA9IG5leHRJbmRleDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xpY2sgaGFuZGxlciBmb3IgdGhlIGxpc3QuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHRvZ2dsZUNoZWNrYm94XG4gICAqL1xuICBoYW5kbGVDbGljayhpbmRleCwgdG9nZ2xlQ2hlY2tib3gpIHtcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5pc1NlbGVjdGFibGVMaXN0XygpKSB7XG4gICAgICB0aGlzLnNldFNlbGVjdGVkSW5kZXhPbkFjdGlvbl8oaW5kZXgsIHRvZ2dsZUNoZWNrYm94KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFRhYmluZGV4QXRJbmRleF8oaW5kZXgpO1xuICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPSBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnN1cmVzIHRoYXQgcHJldmVudERlZmF1bHQgaXMgb25seSBjYWxsZWQgaWYgdGhlIGNvbnRhaW5pbmcgZWxlbWVudCBkb2Vzbid0XG4gICAqIGNvbnN1bWUgdGhlIGV2ZW50LCBhbmQgaXQgd2lsbCBjYXVzZSBhbiB1bmludGVuZGVkIHNjcm9sbC5cbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gYCR7ZXZ0LnRhcmdldC50YWdOYW1lfWAudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoRUxFTUVOVFNfS0VZX0FMTE9XRURfSU4uaW5kZXhPZih0YWdOYW1lKSA9PT0gLTEpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIHRoZSBuZXh0IGVsZW1lbnQgb24gdGhlIGxpc3QuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBmb2N1c05leHRFbGVtZW50KGluZGV4KSB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKTtcbiAgICBsZXQgbmV4dEluZGV4ID0gaW5kZXggKyAxO1xuICAgIGlmIChuZXh0SW5kZXggPj0gY291bnQpIHtcbiAgICAgIGlmICh0aGlzLndyYXBGb2N1c18pIHtcbiAgICAgICAgbmV4dEluZGV4ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBlYXJseSBiZWNhdXNlIGxhc3QgaXRlbSBpcyBhbHJlYWR5IGZvY3VzZWQuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KG5leHRJbmRleCk7XG5cbiAgICByZXR1cm4gbmV4dEluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzZXMgdGhlIHByZXZpb3VzIGVsZW1lbnQgb24gdGhlIGxpc3QuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBmb2N1c1ByZXZFbGVtZW50KGluZGV4KSB7XG4gICAgbGV0IHByZXZJbmRleCA9IGluZGV4IC0gMTtcbiAgICBpZiAocHJldkluZGV4IDwgMCkge1xuICAgICAgaWYgKHRoaXMud3JhcEZvY3VzXykge1xuICAgICAgICBwcmV2SW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKSAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gZWFybHkgYmVjYXVzZSBmaXJzdCBpdGVtIGlzIGFscmVhZHkgZm9jdXNlZC5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgocHJldkluZGV4KTtcblxuICAgIHJldHVybiBwcmV2SW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZm9jdXNGaXJzdEVsZW1lbnQoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KDApO1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGZvY3VzTGFzdEVsZW1lbnQoKSB7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCkgLSAxO1xuICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleChsYXN0SW5kZXgpO1xuICAgIHJldHVybiBsYXN0SW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRTaW5nbGVTZWxlY3Rpb25BdEluZGV4XyhpbmRleCkge1xuICAgIGxldCBzZWxlY3RlZENsYXNzTmFtZSA9IGNzc0NsYXNzZXMuTElTVF9JVEVNX1NFTEVDVEVEX0NMQVNTO1xuICAgIGlmICh0aGlzLnVzZUFjdGl2YXRlZENsYXNzXykge1xuICAgICAgc2VsZWN0ZWRDbGFzc05hbWUgPSBjc3NDbGFzc2VzLkxJU1RfSVRFTV9BQ1RJVkFURURfQ0xBU1M7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gPj0gMCAmJiB0aGlzLnNlbGVjdGVkSW5kZXhfICE9PSBpbmRleCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXhfLCBzZWxlY3RlZENsYXNzTmFtZSk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXhfLCBzdHJpbmdzLkFSSUFfU0VMRUNURUQsICdmYWxzZScpO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3NGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHNlbGVjdGVkQ2xhc3NOYW1lKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgc3RyaW5ncy5BUklBX1NFTEVDVEVELCAndHJ1ZScpO1xuXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgcmFkaW8gYXQgZ2l2ZSBpbmRleC4gUmFkaW8gZG9lc24ndCBjaGFuZ2UgdGhlIGNoZWNrZWQgc3RhdGUgaWYgaXQgaXMgYWxyZWFkeSBjaGVja2VkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFJhZGlvQXRJbmRleF8oaW5kZXgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4KGluZGV4LCB0cnVlKTtcblxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhfID49IDApIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleF8sIHN0cmluZ3MuQVJJQV9DSEVDS0VELCAnZmFsc2UnKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgc3RyaW5ncy5BUklBX0NIRUNLRUQsICd0cnVlJyk7XG5cbiAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshQXJyYXk8bnVtYmVyPn0gaW5kZXhcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldENoZWNrYm94QXRJbmRleF8oaW5kZXgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpOyBpKyspIHtcbiAgICAgIGxldCBpc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgIGlmIChpbmRleC5pbmRleE9mKGkpID49IDApIHtcbiAgICAgICAgaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleChpLCBpc0NoZWNrZWQpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaSwgc3RyaW5ncy5BUklBX0NIRUNLRUQsIGlzQ2hlY2tlZCA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8gPSBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFRhYmluZGV4QXRJbmRleF8oaW5kZXgpIHtcbiAgICBpZiAodGhpcy5mb2N1c2VkSXRlbUluZGV4XyA9PT0gLTEgJiYgaW5kZXggIT09IDApIHtcbiAgICAgIC8vIElmIG5vIGxpc3QgaXRlbSB3YXMgc2VsZWN0ZWQgc2V0IGZpcnN0IGxpc3QgaXRlbSdzIHRhYmluZGV4IHRvIC0xLlxuICAgICAgLy8gR2VuZXJhbGx5LCB0YWJpbmRleCBpcyBzZXQgdG8gMCBvbiBmaXJzdCBsaXN0IGl0ZW0gb2YgbGlzdCB0aGF0IGhhcyBubyBwcmVzZWxlY3RlZCBpdGVtcy5cbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KDAsICd0YWJpbmRleCcsIC0xKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPj0gMCAmJiB0aGlzLmZvY3VzZWRJdGVtSW5kZXhfICE9PSBpbmRleCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgodGhpcy5mb2N1c2VkSXRlbUluZGV4XywgJ3RhYmluZGV4JywgLTEpO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGluZGV4LCAndGFiaW5kZXgnLCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm4gdHJ1ZSBpZiBpdCBpcyBzaW5nbGUgc2VsZWN0aW4gbGlzdCwgY2hlY2tib3ggbGlzdCBvciByYWRpbyBsaXN0LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNTZWxlY3RhYmxlTGlzdF8oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNTaW5nbGVTZWxlY3Rpb25MaXN0XyB8fCB0aGlzLmlzQ2hlY2tib3hMaXN0XyB8fCB0aGlzLmlzUmFkaW9MaXN0XztcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBzZXRUYWJpbmRleFRvRmlyc3RTZWxlY3RlZEl0ZW1fKCkge1xuICAgIGxldCB0YXJnZXRJbmRleCA9IDA7XG5cbiAgICBpZiAodGhpcy5pc1NlbGVjdGFibGVMaXN0XygpKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0ZWRJbmRleF8gPT09ICdudW1iZXInICYmIHRoaXMuc2VsZWN0ZWRJbmRleF8gIT09IC0xKSB7XG4gICAgICAgIHRhcmdldEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4XztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEluZGV4XyBpbnN0YW5jZW9mIEFycmF5ICYmIHRoaXMuc2VsZWN0ZWRJbmRleF8ubGVuZ3RoID4gMCkge1xuICAgICAgICB0YXJnZXRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleF8ucmVkdWNlKChjdXJyZW50SW5kZXgsIG1pbkluZGV4KSA9PiBNYXRoLm1pbihjdXJyZW50SW5kZXgsIG1pbkluZGV4KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRUYWJpbmRleEF0SW5kZXhfKHRhcmdldEluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFJbmRleH0gaW5kZXhcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzSW5kZXhWYWxpZF8oaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgaWYgKCF0aGlzLmlzQ2hlY2tib3hMaXN0Xykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01EQ0xpc3RGb3VuZGF0aW9uOiBBcnJheSBvZiBpbmRleCBpcyBvbmx5IHN1cHBvcnRlZCBmb3IgY2hlY2tib3ggYmFzZWQgbGlzdCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGluZGV4LnNvbWUoKGkpID0+IHRoaXMuaXNJbmRleEluUmFuZ2VfKGkpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGlmICh0aGlzLmlzQ2hlY2tib3hMaXN0Xykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01EQ0xpc3RGb3VuZGF0aW9uOiBFeHBlY3RlZCBhcnJheSBvZiBpbmRleCBmb3IgY2hlY2tib3ggYmFzZWQgbGlzdCBidXQgZ290IG51bWJlcjogJyArIGluZGV4KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmlzSW5kZXhJblJhbmdlXyhpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc0luZGV4SW5SYW5nZV8oaW5kZXgpIHtcbiAgICBjb25zdCBsaXN0U2l6ZSA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpO1xuICAgIHJldHVybiBpbmRleCA+PSAwICYmIGluZGV4IDwgbGlzdFNpemU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IHRvZ2dsZUNoZWNrYm94XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRTZWxlY3RlZEluZGV4T25BY3Rpb25fKGluZGV4LCB0b2dnbGVDaGVja2JveCA9IHRydWUpIHtcbiAgICBpZiAodGhpcy5pc0NoZWNrYm94TGlzdF8pIHtcbiAgICAgIHRoaXMudG9nZ2xlQ2hlY2tib3hBdEluZGV4XyhpbmRleCwgdG9nZ2xlQ2hlY2tib3gpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFNlbGVjdGVkSW5kZXgoaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtib29sZWFufSB0b2dnbGVDaGVja2JveFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdG9nZ2xlQ2hlY2tib3hBdEluZGV4XyhpbmRleCwgdG9nZ2xlQ2hlY2tib3gpIHtcbiAgICBsZXQgaXNDaGVja2VkID0gdGhpcy5hZGFwdGVyXy5pc0NoZWNrYm94Q2hlY2tlZEF0SW5kZXgoaW5kZXgpO1xuXG4gICAgaWYgKHRvZ2dsZUNoZWNrYm94KSB7XG4gICAgICBpc0NoZWNrZWQgPSAhaXNDaGVja2VkO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleChpbmRleCwgaXNDaGVja2VkKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgc3RyaW5ncy5BUklBX0NIRUNLRUQsIGlzQ2hlY2tlZCA/ICd0cnVlJyA6ICdmYWxzZScpO1xuXG4gICAgLy8gSWYgbm9uZSBvZiB0aGUgY2hlY2tib3ggaXRlbXMgYXJlIHNlbGVjdGVkIGFuZCBzZWxlY3RlZEluZGV4IGlzIG5vdCBpbml0aWFsaXplZCB0aGVuIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlLlxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhfID09PSAtMSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IFtdO1xuICAgIH1cblxuICAgIGlmIChpc0NoZWNrZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8ucHVzaChpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8gPSB0aGlzLnNlbGVjdGVkSW5kZXhfLmZpbHRlcigoaSkgPT4gaSAhPT0gaW5kZXgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENMaXN0Rm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7TURDTWVudUFkYXB0ZXJ9IGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7TURDTWVudVN1cmZhY2VGb3VuZGF0aW9ufSBmcm9tICdAbWF0ZXJpYWwvbWVudS1zdXJmYWNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ0xpc3RGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9saXN0L2ZvdW5kYXRpb24nO1xuXG5jb25zdCBFTEVNRU5UU19LRVlfQUxMT1dFRF9JTiA9IFsnaW5wdXQnLCAnYnV0dG9uJywgJ3RleHRhcmVhJywgJ3NlbGVjdCcsICdhJ107XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ01lbnVBZGFwdGVyPn1cbiAqL1xuY2xhc3MgTURDTWVudUZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bXtjc3NDbGFzc2VzfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte3N0cmluZ3N9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QHNlZSBNRENNZW51QWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5cbiAgICogdHlwZXMuXG4gICAqIEByZXR1cm4geyFNRENNZW51QWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ01lbnVBZGFwdGVyfSAqLyAoe1xuICAgICAgYWRkQ2xhc3NUb0VsZW1lbnRBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnRBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGFkZEF0dHJpYnV0ZVRvRWxlbWVudEF0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQXR0cmlidXRlRnJvbUVsZW1lbnRBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGVsZW1lbnRDb250YWluc0NsYXNzOiAoKSA9PiB7fSxcbiAgICAgIGNsb3NlU3VyZmFjZTogKCkgPT4ge30sXG4gICAgICBnZXRFbGVtZW50SW5kZXg6ICgpID0+IHt9LFxuICAgICAgZ2V0UGFyZW50RWxlbWVudDogKCkgPT4ge30sXG4gICAgICBnZXRTZWxlY3RlZEVsZW1lbnRJbmRleDogKCkgPT4ge30sXG4gICAgICBub3RpZnlTZWxlY3RlZDogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHshTURDTWVudUFkYXB0ZXJ9IGFkYXB0ZXIgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDTWVudUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXyA9IDA7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8pIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8pO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8uY2xvc2VTdXJmYWNlKCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlciBmdW5jdGlvbiBmb3IgdGhlIGtleWRvd24gZXZlbnRzLlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqL1xuICBoYW5kbGVLZXlkb3duKGV2dCkge1xuICAgIGNvbnN0IHtrZXksIGtleUNvZGV9ID0gZXZ0O1xuXG4gICAgY29uc3QgaXNTcGFjZSA9IGtleSA9PT0gJ1NwYWNlJyB8fCBrZXlDb2RlID09PSAzMjtcbiAgICBjb25zdCBpc0VudGVyID0ga2V5ID09PSAnRW50ZXInIHx8IGtleUNvZGUgPT09IDEzO1xuICAgIGNvbnN0IGlzVGFiID0ga2V5ID09PSAnVGFiJyB8fCBrZXlDb2RlID09PSA5O1xuXG4gICAgaWYgKGlzU3BhY2UgfHwgaXNFbnRlcikge1xuICAgICAgdGhpcy5oYW5kbGVBY3Rpb25fKGV2dCk7XG4gICAgfSBlbHNlIGlmIChpc1RhYikge1xuICAgICAgdGhpcy5hZGFwdGVyXy5jbG9zZVN1cmZhY2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlciBmdW5jdGlvbiBmb3IgdGhlIGNsaWNrIGV2ZW50cy5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlQ2xpY2soZXZ0KSB7XG4gICAgdGhpcy5oYW5kbGVBY3Rpb25fKGV2dCk7XG4gIH1cblxuICAvKipcbiAgICogQ29tYmluZWQgYWN0aW9uIGhhbmRsaW5nIGZvciBjbGljay9rZXlwcmVzcyBldmVudHMuXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhbmRsZUFjdGlvbl8oZXZ0KSB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSB0aGlzLmdldExpc3RJdGVtXygvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyAoZXZ0LnRhcmdldCkpO1xuICAgIGlmIChsaXN0SXRlbSkge1xuICAgICAgdGhpcy5oYW5kbGVTZWxlY3Rpb24obGlzdEl0ZW0pO1xuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBhIHNlbGVjdGVkIGxpc3QgaXRlbS5cbiAgICogQHBhcmFtIHs/SFRNTEVsZW1lbnR9IGxpc3RJdGVtXG4gICAqL1xuICBoYW5kbGVTZWxlY3Rpb24obGlzdEl0ZW0pIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0RWxlbWVudEluZGV4KGxpc3RJdGVtKTtcbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlTZWxlY3RlZCh7aW5kZXh9KTtcbiAgICB0aGlzLmFkYXB0ZXJfLmNsb3NlU3VyZmFjZSgpO1xuXG4gICAgLy8gV2FpdCBmb3IgdGhlIG1lbnUgdG8gY2xvc2UgYmVmb3JlIGFkZGluZy9yZW1vdmluZyBjbGFzc2VzIHRoYXQgYWZmZWN0IHN0eWxlcy5cbiAgICB0aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGlvbkdyb3VwID0gdGhpcy5nZXRTZWxlY3Rpb25Hcm91cF8obGlzdEl0ZW0pO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uR3JvdXAgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3Rpb25Hcm91cF8oLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChzZWxlY3Rpb25Hcm91cCksIGluZGV4KTtcbiAgICAgIH1cbiAgICB9LCBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ubnVtYmVycy5UUkFOU0lUSU9OX0NMT1NFX0RVUkFUSU9OKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRvZ2dsaW5nIHRoZSBzZWxlY3RlZCBjbGFzc2VzIGluIGEgc2VsZWN0aW9uIGdyb3VwIHdoZW4gYVxuICAgKiBzZWxlY3Rpb24gaXMgbWFkZS5cbiAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IHNlbGVjdGlvbkdyb3VwXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgc2VsZWN0ZWQgaW5kZXggdmFsdWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhbmRsZVNlbGVjdGlvbkdyb3VwXyhzZWxlY3Rpb25Hcm91cCwgaW5kZXgpIHtcbiAgICAvLyBEZS1zZWxlY3QgdGhlIHByZXZpb3VzIHNlbGVjdGlvbiBpbiB0aGlzIGdyb3VwLlxuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldFNlbGVjdGVkRWxlbWVudEluZGV4KHNlbGVjdGlvbkdyb3VwKTtcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHJpYnV0ZUZyb21FbGVtZW50QXRJbmRleChzZWxlY3RlZEluZGV4LCBzdHJpbmdzLkFSSUFfU0VMRUNURURfQVRUUik7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnRBdEluZGV4KHNlbGVjdGVkSW5kZXgsIGNzc0NsYXNzZXMuTUVOVV9TRUxFQ1RFRF9MSVNUX0lURU0pO1xuICAgIH1cbiAgICAvLyBTZWxlY3QgdGhlIG5ldyBsaXN0IGl0ZW0gaW4gdGhpcyBncm91cC5cbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzVG9FbGVtZW50QXRJbmRleChpbmRleCwgY3NzQ2xhc3Nlcy5NRU5VX1NFTEVDVEVEX0xJU1RfSVRFTSk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRBdHRyaWJ1dGVUb0VsZW1lbnRBdEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfU0VMRUNURURfQVRUUiwgJ3RydWUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXJlbnQgc2VsZWN0aW9uIGdyb3VwIG9mIGFuIGVsZW1lbnQgaWYgb25lIGV4aXN0cy5cbiAgICogQHBhcmFtIGxpc3RJdGVtXG4gICAqIEByZXR1cm4gez9IVE1MRWxlbWVudH0gcGFyZW50IHNlbGVjdGlvbiBncm91cCBlbGVtZW50IG9yIG51bGwuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRTZWxlY3Rpb25Hcm91cF8obGlzdEl0ZW0pIHtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5hZGFwdGVyXy5nZXRQYXJlbnRFbGVtZW50KGxpc3RJdGVtKTtcbiAgICBsZXQgaXNHcm91cCA9IHRoaXMuYWRhcHRlcl8uZWxlbWVudENvbnRhaW5zQ2xhc3MocGFyZW50LCBjc3NDbGFzc2VzLk1FTlVfU0VMRUNUSU9OX0dST1VQKTtcblxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBhbmNlc3RvcnMgdW50aWwgd2UgZmluZCB0aGUgZ3JvdXAgb3IgZ2V0IHRvIHRoZSBsaXN0LlxuICAgIHdoaWxlICghaXNHcm91cCAmJiAhdGhpcy5hZGFwdGVyXy5lbGVtZW50Q29udGFpbnNDbGFzcyhwYXJlbnQsIE1EQ0xpc3RGb3VuZGF0aW9uLmNzc0NsYXNzZXMuUk9PVCkpIHtcbiAgICAgIHBhcmVudCA9IHRoaXMuYWRhcHRlcl8uZ2V0UGFyZW50RWxlbWVudChwYXJlbnQpO1xuICAgICAgaXNHcm91cCA9IHRoaXMuYWRhcHRlcl8uZWxlbWVudENvbnRhaW5zQ2xhc3MocGFyZW50LCBjc3NDbGFzc2VzLk1FTlVfU0VMRUNUSU9OX0dST1VQKTtcbiAgICB9XG5cbiAgICBpZiAoaXNHcm91cCkge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIGZpcnN0IGFuY2VzdG9yIHdpdGggdGhlIG1kYy1saXN0LWl0ZW0gY2xhc3MuXG4gICAqIEBwYXJhbSB7P0hUTUxFbGVtZW50fSB0YXJnZXRcbiAgICogQHJldHVybiB7P0hUTUxFbGVtZW50fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TGlzdEl0ZW1fKHRhcmdldCkge1xuICAgIGxldCBpc0xpc3RJdGVtID0gdGhpcy5hZGFwdGVyXy5lbGVtZW50Q29udGFpbnNDbGFzcyh0YXJnZXQsIE1EQ0xpc3RGb3VuZGF0aW9uLmNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTKTtcblxuICAgIHdoaWxlICghaXNMaXN0SXRlbSkge1xuICAgICAgdGFyZ2V0ID0gdGhpcy5hZGFwdGVyXy5nZXRQYXJlbnRFbGVtZW50KHRhcmdldCk7XG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIGlzTGlzdEl0ZW0gPSB0aGlzLmFkYXB0ZXJfLmVsZW1lbnRDb250YWluc0NsYXNzKHRhcmdldCwgTURDTGlzdEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MpO1xuICAgICAgfSBlbHNlIHsgLy8gdGFyZ2V0IGhhcyBubyBwYXJlbnQgZWxlbWVudC5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnN1cmVzIHRoYXQgcHJldmVudERlZmF1bHQgaXMgb25seSBjYWxsZWQgaWYgdGhlIGNvbnRhaW5pbmcgZWxlbWVudCBkb2Vzbid0XG4gICAqIGNvbnN1bWUgdGhlIGV2ZW50LCBhbmQgaXQgd2lsbCBjYXVzZSBhbiB1bmludGVuZGVkIHNjcm9sbC5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJldmVudERlZmF1bHRFdmVudF8oZXZ0KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChldnQudGFyZ2V0KTtcbiAgICBjb25zdCB0YWdOYW1lID0gYCR7dGFyZ2V0LnRhZ05hbWV9YC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChFTEVNRU5UU19LRVlfQUxMT1dFRF9JTi5pbmRleE9mKHRhZ05hbWUpID09PSAtMSkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7TURDTWVudUZvdW5kYXRpb259O1xuIiwiPHRlbXBsYXRlPlxuICA8bWRjLW1lbnUtc3VyZmFjZVxuICAgIHJlZj1cInJvb3RcIlxuICAgIDpxdWljay1vcGVuPVwicXVpY2tPcGVuXCJcbiAgICA6b3Blbj1cIm9wZW5cIlxuICAgIEBjaGFuZ2U9XCJvbkNoYW5nZVwiXG4gICAgQGNsaWNrLm5hdGl2ZT1cImhhbmRsZUNsaWNrXCJcbiAgPlxuICAgIDxtZGMtbGlzdCByZWY9XCJsaXN0XCI+IDxzbG90IC8+IDwvbWRjLWxpc3Q+XG4gIDwvbWRjLW1lbnUtc3VyZmFjZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBNRENNZW51Rm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9tZW51L2ZvdW5kYXRpb24nXG5pbXBvcnQgeyBlbWl0Q3VzdG9tRXZlbnQgfSBmcm9tICcuLi9iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtbWVudScsXG4gIG1vZGVsOiB7XG4gICAgcHJvcDogJ29wZW4nLFxuICAgIGV2ZW50OiAnY2hhbmdlJ1xuICB9LFxuICBwcm9wczoge1xuICAgIG9wZW46IFtCb29sZWFuLCBPYmplY3RdLFxuICAgICdxdWljay1vcGVuJzogQm9vbGVhbixcbiAgICAnYW5jaG9yLWNvcm5lcic6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgJ2FuY2hvci1tYXJnaW4nOiBPYmplY3RcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuICBwcm92aWRlKCkge1xuICAgIHJldHVybiB7IG1kY01lbnU6IHRoaXMgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIC8vIGFuY2hvckNvcm5lcihudikge1xuICAgIC8vICAgdGhpcy5mb3VuZGF0aW9uLnNldEFuY2hvckNvcm5lcihOdW1iZXIobnYpKVxuICAgIC8vIH0sXG4gICAgLy8gYW5jaG9yTWFyZ2luKG52KSB7XG4gICAgLy8gICB0aGlzLmZvdW5kYXRpb24uc2V0QW5jaG9yTWFyZ2luKG52KVxuICAgIC8vIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLl9wcmV2aW91c0ZvY3VzID0gdW5kZWZpbmVkXG5cbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDTWVudUZvdW5kYXRpb24oe1xuICAgICAgYWRkQ2xhc3NUb0VsZW1lbnRBdEluZGV4OiAoaW5kZXgsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5pdGVtc1xuICAgICAgICBsaXN0W2luZGV4XS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgIH0sXG4gICAgICByZW1vdmVDbGFzc0Zyb21FbGVtZW50QXRJbmRleDogKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuaXRlbXNcbiAgICAgICAgbGlzdFtpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgICB9LFxuICAgICAgYWRkQXR0cmlidXRlVG9FbGVtZW50QXRJbmRleDogKGluZGV4LCBhdHRyLCB2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5pdGVtc1xuICAgICAgICBsaXN0W2luZGV4XS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpXG4gICAgICB9LFxuICAgICAgcmVtb3ZlQXR0cmlidXRlRnJvbUVsZW1lbnRBdEluZGV4OiAoaW5kZXgsIGF0dHIpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuaXRlbXNcbiAgICAgICAgbGlzdFtpbmRleF0ucmVtb3ZlQXR0cmlidXRlKGF0dHIpXG4gICAgICB9LFxuICAgICAgZWxlbWVudENvbnRhaW5zQ2xhc3M6IChlbGVtZW50LCBjbGFzc05hbWUpID0+XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICBjbG9zZVN1cmZhY2U6ICgpID0+IHtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZmFsc2UpXG4gICAgICB9LFxuICAgICAgZ2V0RWxlbWVudEluZGV4OiBlbGVtZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuaW5kZXhPZihlbGVtZW50KVxuICAgICAgfSxcbiAgICAgIGdldFBhcmVudEVsZW1lbnQ6IGVsZW1lbnQgPT4gZWxlbWVudC5wYXJlbnRFbGVtZW50LFxuICAgICAgZ2V0U2VsZWN0ZWRFbGVtZW50SW5kZXg6IHNlbGVjdGlvbkdyb3VwID0+IHtcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5pdGVtcy5pbmRleE9mKFxuICAgICAgICAgIHNlbGVjdGlvbkdyb3VwLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLiR7TURDTWVudUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5NRU5VX1NFTEVDVEVEX0xJU1RfSVRFTX1gXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBpZHhcbiAgICAgIH0sXG4gICAgICBub3RpZnlTZWxlY3RlZDogZXZ0RGF0YSA9PiB7XG4gICAgICAgIGVtaXRDdXN0b21FdmVudCh0aGlzLiRlbCwgTURDTWVudUZvdW5kYXRpb24uc3RyaW5ncy5TRUxFQ1RFRF9FVkVOVCwge1xuICAgICAgICAgIGluZGV4OiBldnREYXRhLmluZGV4LFxuICAgICAgICAgIGl0ZW06IHRoaXMuaXRlbXNbZXZ0RGF0YS5pbmRleF1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCB7XG4gICAgICAgICAgaW5kZXg6IGV2dERhdGEuaW5kZXgsXG4gICAgICAgICAgaXRlbTogdGhpcy5pdGVtc1tldnREYXRhLmluZGV4XVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5fcHJldmlvdXNGb2N1cyA9IG51bGxcbiAgICB0aGlzLmZvdW5kYXRpb24uZGVzdHJveSgpXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBpdGVtcygpIHtcbiAgICAgIHJldHVybiB0aGlzLiRyZWZzLmxpc3QubGlzdEVsZW1lbnRzXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVDbGljayhldnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVDbGljayhldnQpXG4gICAgfSxcbiAgICBvbkNoYW5nZShpdGVtKSB7XG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBpdGVtKVxuICAgIH1cbiAgICAvLyBvbk9wZW5fKHZhbHVlKSB7XG4gICAgLy8gICBpZiAodmFsdWUpIHtcbiAgICAvLyAgICAgdGhpcy5mb3VuZGF0aW9uLm9wZW4odHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDogdm9pZCAwKVxuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgdGhpcy5mb3VuZGF0aW9uLmNsb3NlKClcbiAgICAvLyAgIH1cbiAgICAvLyB9LFxuICAgIC8vIHNob3cob3B0aW9ucykge1xuICAgIC8vICAgdGhpcy5mb3VuZGF0aW9uLm9wZW4ob3B0aW9ucylcbiAgICAvLyB9LFxuICAgIC8vIGhpZGUoKSB7XG4gICAgLy8gICB0aGlzLmZvdW5kYXRpb24uY2xvc2UoKVxuICAgIC8vIH0sXG4gICAgLy8gaXNPcGVuKCkge1xuICAgIC8vICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbiA/IHRoaXMuZm91bmRhdGlvbi5pc09wZW4oKSA6IGZhbHNlXG4gICAgLy8gfVxuICB9XG59XG48L3NjcmlwdD5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudChjb21waWxlZFRlbXBsYXRlLCBpbmplY3RTdHlsZSwgZGVmYXVsdEV4cG9ydCwgc2NvcGVJZCwgaXNGdW5jdGlvbmFsVGVtcGxhdGUsIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi8sIGlzU2hhZG93TW9kZSwgY3JlYXRlSW5qZWN0b3IsIGNyZWF0ZUluamVjdG9yU1NSLCBjcmVhdGVJbmplY3RvclNoYWRvdykge1xuICAgIGlmICh0eXBlb2YgaXNTaGFkb3dNb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNyZWF0ZUluamVjdG9yU1NSID0gY3JlYXRlSW5qZWN0b3I7XG4gICAgICAgIGNyZWF0ZUluamVjdG9yID0gaXNTaGFkb3dNb2RlO1xuICAgICAgICBpc1NoYWRvd01vZGUgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICAgIGNvbnN0IG9wdGlvbnMgPSB0eXBlb2YgZGVmYXVsdEV4cG9ydCA9PT0gJ2Z1bmN0aW9uJyA/IGRlZmF1bHRFeHBvcnQub3B0aW9ucyA6IGRlZmF1bHRFeHBvcnQ7XG4gICAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICAgIGlmIChjb21waWxlZFRlbXBsYXRlICYmIGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyKSB7XG4gICAgICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXI7XG4gICAgICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnM7XG4gICAgICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICAgICAgICBpZiAoaXNGdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gc2NvcGVkSWRcbiAgICBpZiAoc2NvcGVJZCkge1xuICAgICAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZDtcbiAgICB9XG4gICAgbGV0IGhvb2s7XG4gICAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgLy8gc2VydmVyIGJ1aWxkXG4gICAgICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgICAgICAgY29udGV4dCA9XG4gICAgICAgICAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAgICAgICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCk7IC8vIGZ1bmN0aW9uYWxcbiAgICAgICAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgICAgICAgIGlmIChpbmplY3RTdHlsZSkge1xuICAgICAgICAgICAgICAgIGluamVjdFN0eWxlLmNhbGwodGhpcywgY3JlYXRlSW5qZWN0b3JTU1IoY29udGV4dCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcmVuY2VcbiAgICAgICAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgICAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgICAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2s7XG4gICAgfVxuICAgIGVsc2UgaWYgKGluamVjdFN0eWxlKSB7XG4gICAgICAgIGhvb2sgPSBpc1NoYWRvd01vZGVcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGluamVjdFN0eWxlLmNhbGwodGhpcywgY3JlYXRlSW5qZWN0b3JTaGFkb3codGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3Rvcihjb250ZXh0KSk7XG4gICAgICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoaG9vaykge1xuICAgICAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAgICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXI7XG4gICAgICAgICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbihoLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0RXhwb3J0O1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAdHlwZSB7c3RyaW5nfHVuZGVmaW5lZH0gKi9cbmxldCBzdG9yZWRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWVfO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGNvcnJlY3QgdHJhbnNmb3JtIHByb3BlcnR5IHRvIHVzZSBvbiB0aGUgY3VycmVudCBicm93c2VyLlxuICogQHBhcmFtIHshV2luZG93fSBnbG9iYWxPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWUoZ2xvYmFsT2JqLCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBpZiAoc3RvcmVkVHJhbnNmb3JtUHJvcGVydHlOYW1lXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgIGNvbnN0IGVsID0gZ2xvYmFsT2JqLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRyYW5zZm9ybVByb3BlcnR5TmFtZSA9ICgndHJhbnNmb3JtJyBpbiBlbC5zdHlsZSA/ICd0cmFuc2Zvcm0nIDogJ3dlYmtpdFRyYW5zZm9ybScpO1xuICAgIHN0b3JlZFRyYW5zZm9ybVByb3BlcnR5TmFtZV8gPSB0cmFuc2Zvcm1Qcm9wZXJ0eU5hbWU7XG4gIH1cblxuICByZXR1cm4gc3RvcmVkVHJhbnNmb3JtUHJvcGVydHlOYW1lXztcbn1cblxuZXhwb3J0IHtnZXRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWV9O1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiXG4gICAgY2xhc3M9XCJtZGMtbWVudSBtZGMtbWVudS1zdXJmYWNlXCJcbiAgICBAa2V5ZG93bj1cImhhbmRsZUtleWRvd25cIlxuICAgIEBNRENNZW51U3VyZmFjZTpvcGVuZWQ9XCJyZWdpc3RlckJvZHlDbGlja0xpc3RlbmVyXCJcbiAgICBATURDTWVudVN1cmZhY2U6Y2xvc2VkPVwiZGVyZWdpc3RlckJvZHlDbGlja0xpc3RlbmVyXCJcbiAgPlxuICAgIDxzbG90IC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvZm91bmRhdGlvbidcbmltcG9ydCB7IGVtaXRDdXN0b21FdmVudCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJ0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLW1lbnUtc3VyZmFjZScsXG4gIG1vZGVsOiB7XG4gICAgcHJvcDogJ29wZW4nLFxuICAgIGV2ZW50OiAnY2hhbmdlJ1xuICB9LFxuICBwcm9wczoge1xuICAgIG9wZW46IFtCb29sZWFuLCBPYmplY3RdLFxuICAgICdxdWljay1vcGVuJzogQm9vbGVhbixcbiAgICAnYW5jaG9yLWNvcm5lcic6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgJ2FuY2hvci1tYXJnaW4nOiBPYmplY3RcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuICBwcm92aWRlKCkge1xuICAgIHJldHVybiB7IG1kY01lbnU6IHRoaXMgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIG9wZW46ICdvbk9wZW5fJyxcbiAgICBxdWlja09wZW4obnYpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRRdWlja09wZW4obnYpXG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuX3ByZXZpb3VzRm9jdXMgPSB1bmRlZmluZWRcblxuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24oXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpLFxuICAgICAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZGVsZXRlKHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lKSxcbiAgICAgICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgICAgIGhhc0FuY2hvcjogKCkgPT4gISF0aGlzLmFuY2hvckVsZW1lbnQsXG4gICAgICAgICAgbm90aWZ5Q2xvc2U6ICgpID0+IHtcbiAgICAgICAgICAgIGVtaXRDdXN0b21FdmVudChcbiAgICAgICAgICAgICAgdGhpcy4kZWwsXG4gICAgICAgICAgICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5zdHJpbmdzLkNMT1NFRF9FVkVOVCxcbiAgICAgICAgICAgICAge31cbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZmFsc2UpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBub3RpZnlPcGVuOiAoKSA9PiB7XG4gICAgICAgICAgICBlbWl0Q3VzdG9tRXZlbnQoXG4gICAgICAgICAgICAgIHRoaXMuJGVsLFxuICAgICAgICAgICAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uc3RyaW5ncy5PUEVORURfRVZFTlQsXG4gICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRydWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc0VsZW1lbnRJbkNvbnRhaW5lcjogZWwgPT4gdGhpcy4kZWwgPT09IGVsIHx8IHRoaXMuJGVsLmNvbnRhaW5zKGVsKSxcbiAgICAgICAgICBpc1J0bDogKCkgPT5cbiAgICAgICAgICAgIGdldENvbXB1dGVkU3R5bGUodGhpcy4kZWwpLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJyxcbiAgICAgICAgICBzZXRUcmFuc2Zvcm1PcmlnaW46IG9yaWdpbiA9PiB7XG4gICAgICAgICAgICB0aGlzLiRlbC5zdHlsZVtcbiAgICAgICAgICAgICAgYCR7dXRpbC5nZXRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWUod2luZG93KX0tb3JpZ2luYFxuICAgICAgICAgICAgXSA9IG9yaWdpblxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5nZXRGb2N1c0FkYXB0ZXJNZXRob2RzKCksXG4gICAgICAgIHRoaXMuZ2V0RGltZW5zaW9uQWRhcHRlck1ldGhvZHMoKVxuICAgICAgKVxuICAgIClcblxuICAgIGlmIChcbiAgICAgIHRoaXMuJGVsLnBhcmVudEVsZW1lbnQgJiZcbiAgICAgIHRoaXMuJGVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFxuICAgICAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTkNIT1JcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHRoaXMuYW5jaG9yRWxlbWVudCA9IHRoaXMuJGVsLnBhcmVudEVsZW1lbnRcbiAgICB9XG5cbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5fcHJldmlvdXNGb2N1cyA9IG51bGxcblxuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlQm9keUNsaWNrKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUJvZHlDbGljayhldnQpXG4gICAgfSxcblxuICAgIHJlZ2lzdGVyQm9keUNsaWNrTGlzdGVuZXIoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVCb2R5Q2xpY2spXG4gICAgfSxcbiAgICBkZXJlZ2lzdGVyQm9keUNsaWNrTGlzdGVuZXIoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVCb2R5Q2xpY2spXG4gICAgfSxcbiAgICBoYW5kbGVLZXlkb3duKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUtleWRvd24oZXZ0KVxuICAgIH0sXG4gICAgZ2V0Rm9jdXNBZGFwdGVyTWV0aG9kcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzRm9jdXNlZDogKCkgPT4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy4kZWwsXG4gICAgICAgIHNhdmVGb2N1czogKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJldmlvdXNGb2N1c18gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3RvcmVGb2N1czogKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLiRlbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlvdXNGb2N1c18gJiYgdGhpcy5wcmV2aW91c0ZvY3VzXy5mb2N1cykge1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzRm9jdXNfLmZvY3VzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGlzRmlyc3RFbGVtZW50Rm9jdXNlZDogKCkgPT5cbiAgICAgICAgICB0aGlzLmZpcnN0Rm9jdXNhYmxlRWxlbWVudF8gJiZcbiAgICAgICAgICB0aGlzLmZpcnN0Rm9jdXNhYmxlRWxlbWVudF8gPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsXG4gICAgICAgIGlzTGFzdEVsZW1lbnRGb2N1c2VkOiAoKSA9PlxuICAgICAgICAgIHRoaXMubGFzdEZvY3VzYWJsZUVsZW1lbnRfICYmXG4gICAgICAgICAgdGhpcy5sYXN0Rm9jdXNhYmxlRWxlbWVudF8gPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsXG4gICAgICAgIGZvY3VzRmlyc3RFbGVtZW50OiAoKSA9PlxuICAgICAgICAgIHRoaXMuZmlyc3RGb2N1c2FibGVFbGVtZW50XyAmJlxuICAgICAgICAgIHRoaXMuZmlyc3RGb2N1c2FibGVFbGVtZW50Xy5mb2N1cyAmJlxuICAgICAgICAgIHRoaXMuZmlyc3RGb2N1c2FibGVFbGVtZW50Xy5mb2N1cygpLFxuICAgICAgICBmb2N1c0xhc3RFbGVtZW50OiAoKSA9PlxuICAgICAgICAgIHRoaXMubGFzdEZvY3VzYWJsZUVsZW1lbnRfICYmXG4gICAgICAgICAgdGhpcy5sYXN0Rm9jdXNhYmxlRWxlbWVudF8uZm9jdXMgJiZcbiAgICAgICAgICB0aGlzLmxhc3RGb2N1c2FibGVFbGVtZW50Xy5mb2N1cygpXG4gICAgICB9XG4gICAgfSxcbiAgICBnZXREaW1lbnNpb25BZGFwdGVyTWV0aG9kcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGdldElubmVyRGltZW5zaW9uczogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy4kZWwub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuJGVsLm9mZnNldEhlaWdodFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0QW5jaG9yRGltZW5zaW9uczogKCkgPT5cbiAgICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQgJiYgdGhpcy5hbmNob3JFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBnZXRXaW5kb3dEaW1lbnNpb25zOiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldEJvZHlEaW1lbnNpb25zOiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0V2luZG93U2Nyb2xsOiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfVxuICAgICAgICB9LFxuICAgICAgICBzZXRQb3NpdGlvbjogcG9zaXRpb24gPT4ge1xuICAgICAgICAgIHRoaXMuJGVsLnN0eWxlLmxlZnQgPSAnbGVmdCcgaW4gcG9zaXRpb24gPyBwb3NpdGlvbi5sZWZ0IDogbnVsbFxuICAgICAgICAgIHRoaXMuJGVsLnN0eWxlLnJpZ2h0ID0gJ3JpZ2h0JyBpbiBwb3NpdGlvbiA/IHBvc2l0aW9uLnJpZ2h0IDogbnVsbFxuICAgICAgICAgIHRoaXMuJGVsLnN0eWxlLnRvcCA9ICd0b3AnIGluIHBvc2l0aW9uID8gcG9zaXRpb24udG9wIDogbnVsbFxuICAgICAgICAgIHRoaXMuJGVsLnN0eWxlLmJvdHRvbSA9ICdib3R0b20nIGluIHBvc2l0aW9uID8gcG9zaXRpb24uYm90dG9tIDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBzZXRNYXhIZWlnaHQ6IGhlaWdodCA9PiB7XG4gICAgICAgICAgdGhpcy4kZWwuc3R5bGUubWF4SGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25PcGVuXyh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uc3RyaW5ncy5GT0NVU0FCTEVfRUxFTUVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmZpcnN0Rm9jdXNhYmxlRWxlbWVudF8gPVxuICAgICAgICAgIGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCA+IDAgPyBmb2N1c2FibGVFbGVtZW50c1swXSA6IG51bGxcbiAgICAgICAgdGhpcy5sYXN0Rm9jdXNhYmxlRWxlbWVudF8gPVxuICAgICAgICAgIGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB0aGlzLmZvdW5kYXRpb24ub3BlbigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uY2xvc2UoKVxuICAgICAgfVxuICAgIH0sXG4gICAgaG9pc3RNZW51VG9Cb2R5KCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLiRlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuJGVsKSlcbiAgICAgIHRoaXMuc2V0SXNIb2lzdGVkKHRydWUpXG4gICAgfSxcbiAgICBzZXRJc0hvaXN0ZWQoaXNIb2lzdGVkKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0SXNIb2lzdGVkKGlzSG9pc3RlZClcbiAgICB9LFxuICAgIHNldE1lbnVTdXJmYWNlQW5jaG9yRWxlbWVudChlbGVtZW50KSB7XG4gICAgICB0aGlzLmFuY2hvckVsZW1lbnQgPSBlbGVtZW50XG4gICAgfSxcbiAgICBzZXRGaXhlZFBvc2l0aW9uKGlzRml4ZWQpIHtcbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHRoaXMuJGVsLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcy5GSVhFRClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJGVsLmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3Nlcy5GSVhFRClcbiAgICAgIH1cblxuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldEZpeGVkUG9zaXRpb24oaXNGaXhlZClcbiAgICB9LFxuICAgIHNldEFic29sdXRlUG9zaXRpb24oeCwgeSkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldEFic29sdXRlUG9zaXRpb24oeCwgeSlcbiAgICAgIHRoaXMuc2V0SXNIb2lzdGVkKHRydWUpXG4gICAgfSxcbiAgICBzZXRBbmNob3JDb3JuZXIoY29ybmVyKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0QW5jaG9yQ29ybmVyKGNvcm5lcilcbiAgICB9LFxuICAgIHNldEFuY2hvck1hcmdpbihtYXJnaW4pIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRBbmNob3JNYXJnaW4obWFyZ2luKVxuICAgIH0sXG4gICAgc2hvdyhvcHRpb25zKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24ub3BlbihvcHRpb25zKVxuICAgIH0sXG4gICAgaGlkZSgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5jbG9zZSgpXG4gICAgfSxcbiAgICBpc09wZW4oKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uID8gdGhpcy5mb3VuZGF0aW9uLmlzT3BlbigpIDogZmFsc2VcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8bGlcbiAgICA6dGFiaW5kZXg9XCJkaXNhYmxlZCA/ICctMScgOiAnMCdcIlxuICAgIDphcmlhLWRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgIGNsYXNzPVwibWRjLW1lbnUtaXRlbSBtZGMtbGlzdC1pdGVtXCJcbiAgICByb2xlPVwibWVudWl0ZW1cIlxuICA+XG4gICAgPHNsb3QgLz5cbiAgPC9saT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtbWVudS1pdGVtJyxcbiAgcHJvcHM6IHtcbiAgICBkaXNhYmxlZDogQm9vbGVhblxuICB9LFxuICBpbmplY3Q6IFsnbWRjTWVudSddLFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgY29uc29sZS5kaXIodGhpcy5tZGNNZW51KVxuICAgIHRoaXMubWRjTWVudS5pdGVtcy5wdXNoKHRoaXMuJGVsKVxuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGxpIFxuICAgIHJvbGU9XCJzZXBhcmF0b3JcIiBcbiAgICBjbGFzcz1cIm1kYy1tZW51LWRpdmlkZXIgbWRjLWxpc3QtZGl2aWRlclwiLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtbWVudS1kaXZpZGVyJ1xufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtZGMtbWVudS1zdXJmYWNlLS1hbmNob3JcIj48c2xvdCAvPjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1tZW51LWFuY2hvcidcbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgbWRjTWVudSBmcm9tICcuL21kYy1tZW51LnZ1ZSdcbmltcG9ydCBtZGNNZW51U3VyZmFjZSBmcm9tICcuL21kYy1tZW51LXN1cmZhY2UudnVlJ1xuaW1wb3J0IG1kY01lbnVJdGVtIGZyb20gJy4vbWRjLW1lbnUtaXRlbS52dWUnXG5pbXBvcnQgbWRjTWVudURpdmlkZXIgZnJvbSAnLi9tZGMtbWVudS1kaXZpZGVyLnZ1ZSdcbmltcG9ydCBtZGNNZW51QW5jaG9yIGZyb20gJy4vbWRjLW1lbnUtYW5jaG9yLnZ1ZSdcblxuZXhwb3J0IHsgbWRjTWVudSwgbWRjTWVudUl0ZW0sIG1kY01lbnVEaXZpZGVyLCBtZGNNZW51QW5jaG9yIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY01lbnUsXG4gIG1kY01lbnVTdXJmYWNlLFxuICBtZGNNZW51SXRlbSxcbiAgbWRjTWVudURpdmlkZXIsXG4gIG1kY01lbnVBbmNob3Jcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJlbWl0Q3VzdG9tRXZlbnQiLCJlbCIsImV2dFR5cGUiLCJldnREYXRhIiwic2hvdWxkQnViYmxlIiwiZXZ0IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJzY29wZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiTURDRm91bmRhdGlvbiIsImFkYXB0ZXIiLCJhZGFwdGVyXyIsIk1EQ01lbnVBZGFwdGVyIiwiaW5kZXgiLCJjbGFzc05hbWUiLCJhdHRyIiwidmFsdWUiLCJlbGVtZW50Iiwic2VsZWN0aW9uR3JvdXAiLCJjc3NDbGFzc2VzIiwiUk9PVCIsIk1FTlVfU0VMRUNURURfTElTVF9JVEVNIiwiTUVOVV9TRUxFQ1RJT05fR1JPVVAiLCJzdHJpbmdzIiwiU0VMRUNURURfRVZFTlQiLCJBUklBX1NFTEVDVEVEX0FUVFIiLCJMSVNUX1NFTEVDVE9SIiwiQ0hFQ0tCT1hfU0VMRUNUT1IiLCJNRENNZW51U3VyZmFjZUFkYXB0ZXIiLCJvcmlnaW4iLCJwb3NpdGlvbiIsImhlaWdodCIsIkFOQ0hPUiIsIkFOSU1BVElOR19DTE9TRUQiLCJBTklNQVRJTkdfT1BFTiIsIkZJWEVEIiwiT1BFTiIsIkNMT1NFRF9FVkVOVCIsIk9QRU5FRF9FVkVOVCIsIkZPQ1VTQUJMRV9FTEVNRU5UUyIsIm51bWJlcnMiLCJUUkFOU0lUSU9OX09QRU5fRFVSQVRJT04iLCJUUkFOU0lUSU9OX0NMT1NFX0RVUkFUSU9OIiwiTUFSR0lOX1RPX0VER0UiLCJBTkNIT1JfVE9fTUVOVV9TVVJGQUNFX1dJRFRIX1JBVElPIiwiQ29ybmVyQml0IiwiQk9UVE9NIiwiQ0VOVEVSIiwiUklHSFQiLCJGTElQX1JUTCIsIkNvcm5lciIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiQk9UVE9NX0xFRlQiLCJCT1RUT01fUklHSFQiLCJUT1BfU1RBUlQiLCJUT1BfRU5EIiwiQk9UVE9NX1NUQVJUIiwiQk9UVE9NX0VORCIsIk1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsImhhc0FuY2hvciIsIm5vdGlmeUNsb3NlIiwibm90aWZ5T3BlbiIsImlzRWxlbWVudEluQ29udGFpbmVyIiwiaXNSdGwiLCJzZXRUcmFuc2Zvcm1PcmlnaW4iLCJpc0ZvY3VzZWQiLCJzYXZlRm9jdXMiLCJyZXN0b3JlRm9jdXMiLCJpc0ZpcnN0RWxlbWVudEZvY3VzZWQiLCJpc0xhc3RFbGVtZW50Rm9jdXNlZCIsImZvY3VzRmlyc3RFbGVtZW50IiwiZm9jdXNMYXN0RWxlbWVudCIsImdldElubmVyRGltZW5zaW9ucyIsImdldEFuY2hvckRpbWVuc2lvbnMiLCJnZXRXaW5kb3dEaW1lbnNpb25zIiwiZ2V0Qm9keURpbWVuc2lvbnMiLCJnZXRXaW5kb3dTY3JvbGwiLCJzZXRQb3NpdGlvbiIsInNldE1heEhlaWdodCIsImRlZmF1bHRBZGFwdGVyIiwiaXNPcGVuXyIsIm9wZW5BbmltYXRpb25FbmRUaW1lcklkXyIsImNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8iLCJhbmltYXRpb25SZXF1ZXN0SWRfIiwiZGltZW5zaW9uc18iLCJhbmNob3JDb3JuZXJfIiwiYW5jaG9yTWFyZ2luXyIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIm1lYXN1cmVzXyIsInF1aWNrT3Blbl8iLCJob2lzdGVkRWxlbWVudF8iLCJpc0ZpeGVkUG9zaXRpb25fIiwicG9zaXRpb25fIiwieCIsInkiLCJFcnJvciIsImNsZWFyVGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY29ybmVyIiwibWFyZ2luIiwiaXNIb2lzdGVkIiwiaXNGaXhlZFBvc2l0aW9uIiwidHlwZUNoZWNraXNGaW5pdGVfIiwicXVpY2tPcGVuIiwidGFyZ2V0IiwiY2xvc2UiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJpc0VzY2FwZSIsImlzVGFiIiwicHJldmVudERlZmF1bHQiLCJhbmNob3JSZWN0Iiwidmlld3BvcnQiLCJib2R5RGltZW5zaW9ucyIsIndpbmRvd1Njcm9sbCIsIndpZHRoIiwidmlld3BvcnREaXN0YW5jZSIsImFuY2hvckhlaWdodCIsImFuY2hvcldpZHRoIiwic3VyZmFjZUhlaWdodCIsInN1cmZhY2VXaWR0aCIsImlzQm90dG9tQWxpZ25lZCIsIkJvb2xlYW4iLCJhdmFpbGFibGVUb3AiLCJhdmFpbGFibGVCb3R0b20iLCJ0b3BPdmVyZmxvdyIsImJvdHRvbU92ZXJmbG93IiwiaXNGbGlwUnRsIiwiYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCIsImlzQWxpZ25lZFJpZ2h0IiwiYXZhaWxhYmxlTGVmdCIsImF2YWlsYWJsZVJpZ2h0IiwibGVmdE92ZXJmbG93IiwicmlnaHRPdmVyZmxvdyIsImlzUmlnaHRBbGlnbmVkIiwicmlnaHRPZmZzZXQiLCJhdm9pZFZlcnRpY2FsT3ZlcmxhcCIsIm1heEhlaWdodCIsImdldEF1dG9MYXlvdXRNZWFzdXJlbWVudHNfIiwiZ2V0T3JpZ2luQ29ybmVyXyIsIm1heE1lbnVTdXJmYWNlSGVpZ2h0IiwiZ2V0TWVudVN1cmZhY2VNYXhIZWlnaHRfIiwidmVydGljYWxBbGlnbm1lbnQiLCJob3Jpem9udGFsQWxpZ25tZW50IiwiaG9yaXpvbnRhbE9mZnNldCIsImdldEhvcml6b250YWxPcmlnaW5PZmZzZXRfIiwidmVydGljYWxPZmZzZXQiLCJnZXRWZXJ0aWNhbE9yaWdpbk9mZnNldF8iLCJhZGp1c3RQb3NpdGlvbkZvckhvaXN0ZWRFbGVtZW50XyIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsInBhcnNlSW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYXV0b1Bvc2l0aW9uXyIsInNldFRpbWVvdXQiLCJtYXliZVJlc3RvcmVGb2N1c18iLCJhY3RpdmVFbGVtZW50IiwibnVtIiwiaXNGaW5pdGUiLCJNRENMaXN0QWRhcHRlciIsImF0dHJpYnV0ZSIsImxpc3RJdGVtSW5kZXgiLCJ0YWJJbmRleFZhbHVlIiwiZWxlIiwiaXNDaGVja2VkIiwiTElTVF9JVEVNX0NMQVNTIiwiTElTVF9JVEVNX1NFTEVDVEVEX0NMQVNTIiwiTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTUyIsIkFSSUFfT1JJRU5UQVRJT04iLCJBUklBX09SSUVOVEFUSU9OX0hPUklaT05UQUwiLCJBUklBX1NFTEVDVEVEIiwiQVJJQV9DSEVDS0VEIiwiQVJJQV9DSEVDS0VEX1JBRElPX1NFTEVDVE9SIiwiQVJJQV9ST0xFX0NIRUNLQk9YX1NFTEVDVE9SIiwiQVJJQV9DSEVDS0VEX0NIRUNLQk9YX1NFTEVDVE9SIiwiUkFESU9fU0VMRUNUT1IiLCJDSEVDS0JPWF9SQURJT19TRUxFQ1RPUiIsIkNISUxEX0VMRU1FTlRTX1RPX1RPR0dMRV9UQUJJTkRFWCIsIkZPQ1VTQUJMRV9DSElMRF9FTEVNRU5UUyIsIkVOQUJMRURfSVRFTVNfU0VMRUNUT1IiLCJFTEVNRU5UU19LRVlfQUxMT1dFRF9JTiIsIk1EQ0xpc3RGb3VuZGF0aW9uIiwiZ2V0TGlzdEl0ZW1Db3VudCIsImdldEZvY3VzZWRFbGVtZW50SW5kZXgiLCJzZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgiLCJyZW1vdmVBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgiLCJhZGRDbGFzc0ZvckVsZW1lbnRJbmRleCIsInJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4IiwiZm9jdXNJdGVtQXRJbmRleCIsInNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbiIsImZvbGxvd0hyZWYiLCJoYXNSYWRpb0F0SW5kZXgiLCJoYXNDaGVja2JveEF0SW5kZXgiLCJpc0NoZWNrYm94Q2hlY2tlZEF0SW5kZXgiLCJzZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleCIsImlzRm9jdXNJbnNpZGVMaXN0Iiwid3JhcEZvY3VzXyIsImlzVmVydGljYWxfIiwiaXNTaW5nbGVTZWxlY3Rpb25MaXN0XyIsInNlbGVjdGVkSW5kZXhfIiwiZm9jdXNlZEl0ZW1JbmRleF8iLCJ1c2VBY3RpdmF0ZWRDbGFzc18iLCJpc0NoZWNrYm94TGlzdF8iLCJpc1JhZGlvTGlzdF8iLCJ1c2VBY3RpdmF0ZWQiLCJpc0luZGV4VmFsaWRfIiwic2V0Q2hlY2tib3hBdEluZGV4XyIsInNldFJhZGlvQXRJbmRleF8iLCJzZXRTaW5nbGVTZWxlY3Rpb25BdEluZGV4XyIsInNldFRhYmluZGV4VG9GaXJzdFNlbGVjdGVkSXRlbV8iLCJpc1Jvb3RMaXN0SXRlbSIsImFycm93TGVmdCIsImFycm93VXAiLCJhcnJvd1JpZ2h0IiwiYXJyb3dEb3duIiwiaXNIb21lIiwiaXNFbmQiLCJpc0VudGVyIiwiaXNTcGFjZSIsImN1cnJlbnRJbmRleCIsIm5leHRJbmRleCIsInByZXZlbnREZWZhdWx0RXZlbnRfIiwiZm9jdXNOZXh0RWxlbWVudCIsImZvY3VzUHJldkVsZW1lbnQiLCJpc1NlbGVjdGFibGVMaXN0XyIsInNldFNlbGVjdGVkSW5kZXhPbkFjdGlvbl8iLCJzZXRUYWJpbmRleEF0SW5kZXhfIiwidG9nZ2xlQ2hlY2tib3giLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiY291bnQiLCJwcmV2SW5kZXgiLCJsYXN0SW5kZXgiLCJzZWxlY3RlZENsYXNzTmFtZSIsImkiLCJ0YXJnZXRJbmRleCIsIkFycmF5IiwibGVuZ3RoIiwicmVkdWNlIiwibWluSW5kZXgiLCJtaW4iLCJzb21lIiwiaXNJbmRleEluUmFuZ2VfIiwibGlzdFNpemUiLCJ0b2dnbGVDaGVja2JveEF0SW5kZXhfIiwic2V0U2VsZWN0ZWRJbmRleCIsInB1c2giLCJmaWx0ZXIiLCJNRENNZW51Rm91bmRhdGlvbiIsImFkZENsYXNzVG9FbGVtZW50QXRJbmRleCIsInJlbW92ZUNsYXNzRnJvbUVsZW1lbnRBdEluZGV4IiwiYWRkQXR0cmlidXRlVG9FbGVtZW50QXRJbmRleCIsInJlbW92ZUF0dHJpYnV0ZUZyb21FbGVtZW50QXRJbmRleCIsImVsZW1lbnRDb250YWluc0NsYXNzIiwiY2xvc2VTdXJmYWNlIiwiZ2V0RWxlbWVudEluZGV4IiwiZ2V0UGFyZW50RWxlbWVudCIsImdldFNlbGVjdGVkRWxlbWVudEluZGV4Iiwibm90aWZ5U2VsZWN0ZWQiLCJoYW5kbGVBY3Rpb25fIiwibGlzdEl0ZW0iLCJnZXRMaXN0SXRlbV8iLCJoYW5kbGVTZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb25Hcm91cF8iLCJoYW5kbGVTZWxlY3Rpb25Hcm91cF8iLCJzZWxlY3RlZEluZGV4IiwicGFyZW50IiwiaXNHcm91cCIsImlzTGlzdEl0ZW0iLCJub3JtYWxpemVDb21wb25lbnQiLCJjb21waWxlZFRlbXBsYXRlIiwiaW5qZWN0U3R5bGUiLCJkZWZhdWx0RXhwb3J0Iiwic2NvcGVJZCIsImlzRnVuY3Rpb25hbFRlbXBsYXRlIiwibW9kdWxlSWRlbnRpZmllciIsImlzU2hhZG93TW9kZSIsImNyZWF0ZUluamVjdG9yIiwiY3JlYXRlSW5qZWN0b3JTU1IiLCJjcmVhdGVJbmplY3RvclNoYWRvdyIsIm9wdGlvbnMiLCJyZW5kZXIiLCJzdGF0aWNSZW5kZXJGbnMiLCJfY29tcGlsZWQiLCJmdW5jdGlvbmFsIiwiX3Njb3BlSWQiLCJob29rIiwiY29udGV4dCIsIiR2bm9kZSIsInNzckNvbnRleHQiLCJfX1ZVRV9TU1JfQ09OVEVYVF9fIiwiY2FsbCIsIl9yZWdpc3RlcmVkQ29tcG9uZW50cyIsImFkZCIsIl9zc3JSZWdpc3RlciIsIiRyb290IiwiJG9wdGlvbnMiLCJzaGFkb3dSb290Iiwib3JpZ2luYWxSZW5kZXIiLCJyZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24iLCJoIiwiZXhpc3RpbmciLCJiZWZvcmVDcmVhdGUiLCJjb25jYXQiLCJzdG9yZWRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWVfIiwiZ2V0VHJhbnNmb3JtUHJvcGVydHlOYW1lIiwiZ2xvYmFsT2JqIiwiZm9yY2VSZWZyZXNoIiwidW5kZWZpbmVkIiwiY3JlYXRlRWxlbWVudCIsInRyYW5zZm9ybVByb3BlcnR5TmFtZSIsInN0eWxlIiwic2NyaXB0IiwibWRjTWVudSIsIm1kY01lbnVTdXJmYWNlIiwibWRjTWVudUl0ZW0iLCJtZGNNZW51RGl2aWRlciIsIm1kY01lbnVBbmNob3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtFQUMvQjtFQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztFQUNBLE1BQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztFQUNqQ0QsSUFBQUEsSUFBSSxHQUFHQyxNQUFNLENBQUNDLEdBQWQ7RUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0VBQ3hDO0VBQ0FILElBQUFBLElBQUksR0FBR0csTUFBTSxDQUFDRCxHQUFkO0VBQ0Q7O0VBQ0QsTUFBSUYsSUFBSixFQUFVO0VBQ1JBLElBQUFBLElBQUksQ0FBQ0ksR0FBTCxDQUFTTCxNQUFUO0VBQ0Q7RUFDRjs7RUNaTSxTQUFTTSxVQUFULENBQW9C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
