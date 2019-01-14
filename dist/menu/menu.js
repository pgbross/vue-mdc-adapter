/**
* @module vue-mdc-adaptermenu 0.19.0-beta
* @exports VueMDCMenu
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.42.0","material-components-web":"^0.42.1"}
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
      version: '0.19.0-beta',
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
            setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex() {}
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
      /** {boolean} */

      _this.wrapFocus_ = false;
      /** {boolean} */

      _this.isVertical_ = true;
      /** {boolean} */

      _this.isSingleSelectionList_ = false;
      /** {number} */

      _this.selectedIndex_ = -1;
      /** {boolean} */

      _this.useActivatedClass_ = false;
      return _this;
    }
    /**
     * Sets the private wrapFocus_ variable.
     * @param {boolean} value
     */


    _createClass(MDCListFoundation, [{
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
      /** @param {number} index */

    }, {
      key: "setSelectedIndex",
      value: function setSelectedIndex(index) {
        if (index < 0 || index >= this.adapter_.getListItemCount()) return;

        if (this.adapter_.hasCheckboxAtIndex(index)) {
          this.setAriaAttributesForCheckbox_(index);
        } else if (this.adapter_.hasRadioAtIndex(index)) {
          this.setAriaAttributesForRadio_(index);
        } else {
          this.setAriaAttributesForSingleSelect_(index);
          this.setClassNamesForSingleSelect_(index);
        }

        if (this.selectedIndex_ >= 0 && this.selectedIndex_ !== index) {
          this.adapter_.setAttributeForElementIndex(this.selectedIndex_, 'tabindex', -1);
        } else if (this.selectedIndex_ === -1 && index !== 0) {
          // If no list item was selected set first list item's tabindex to -1.
          // Generally, tabindex is set to 0 on first list item of list that has no preselected items.
          this.adapter_.setAttributeForElementIndex(0, 'tabindex', -1);
        }

        this.adapter_.setAttributeForElementIndex(index, 'tabindex', 0);
        this.selectedIndex_ = index;
      }
      /**
       * @param {number} index
       * @private
       */

    }, {
      key: "setAriaAttributesForCheckbox_",
      value: function setAriaAttributesForCheckbox_(index) {
        var ariaAttributeValue = this.adapter_.isCheckboxCheckedAtIndex(index) ? 'true' : 'false';
        this.adapter_.setAttributeForElementIndex(index, strings$2.ARIA_CHECKED, ariaAttributeValue);
      }
      /**
       * @param {number} index
       * @private
       */

    }, {
      key: "setAriaAttributesForRadio_",
      value: function setAriaAttributesForRadio_(index) {
        if (this.selectedIndex_ >= 0) {
          this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings$2.ARIA_CHECKED, 'false');
        }

        this.adapter_.setAttributeForElementIndex(index, strings$2.ARIA_CHECKED, 'true');
      }
      /**
      * @param {number} index
      * @private
      */

    }, {
      key: "setAriaAttributesForSingleSelect_",
      value: function setAriaAttributesForSingleSelect_(index) {
        if (this.selectedIndex_ >= 0 && this.selectedIndex_ !== index) {
          this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings$2.ARIA_SELECTED, 'false');
        }

        this.adapter_.setAttributeForElementIndex(index, strings$2.ARIA_SELECTED, 'true');
      }
      /**
       * @param {number} index
       * @private
       */

    }, {
      key: "setClassNamesForSingleSelect_",
      value: function setClassNamesForSingleSelect_(index) {
        var selectedClassName = cssClasses$3.LIST_ITEM_SELECTED_CLASS;

        if (this.useActivatedClass_) {
          selectedClassName = cssClasses$3.LIST_ITEM_ACTIVATED_CLASS;
        }

        if (this.selectedIndex_ >= 0) {
          this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
        }

        this.adapter_.addClassForElementIndex(index, selectedClassName);
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
        if (listItemIndex >= 0) {
          this.adapter_.setTabIndexForListItemChildren(listItemIndex, -1);
        }
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
          this.focusNextElement(currentIndex);
        } else if (this.isVertical_ && arrowUp || !this.isVertical_ && arrowLeft) {
          this.preventDefaultEvent_(evt);
          this.focusPrevElement(currentIndex);
        } else if (isHome) {
          this.preventDefaultEvent_(evt);
          this.focusFirstElement();
        } else if (isEnd) {
          this.preventDefaultEvent_(evt);
          this.focusLastElement();
        } else if (isEnter || isSpace) {
          if (isRootListItem) {
            if (this.isSingleSelectionList_) {
              // Check if the space key was pressed on the list item or a child element.
              this.preventDefaultEvent_(evt);
            }

            var hasCheckboxOrRadio = this.hasCheckboxOrRadioAtIndex_(listItemIndex);

            if (hasCheckboxOrRadio) {
              this.toggleCheckboxOrRadioAtIndex_(listItemIndex);
              this.preventDefaultEvent_(evt);
            }

            if (this.isSingleSelectionList_ || hasCheckboxOrRadio) {
              this.setSelectedIndex(currentIndex);
            } // Explicitly activate links, since we're preventing default on Enter, and Space doesn't activate them.


            this.adapter_.followHref(currentIndex);
          }
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

        if (toggleCheckbox) {
          this.toggleCheckboxOrRadioAtIndex_(index);
        }

        if (this.isSingleSelectionList_ || this.hasCheckboxOrRadioAtIndex_(index)) {
          this.setSelectedIndex(index);
        }
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
            return;
          }
        }

        this.adapter_.focusItemAtIndex(nextIndex);
      }
      /**
       * Focuses the previous element on the list.
       * @param {number} index
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
            return;
          }
        }

        this.adapter_.focusItemAtIndex(prevIndex);
      }
    }, {
      key: "focusFirstElement",
      value: function focusFirstElement() {
        if (this.adapter_.getListItemCount() > 0) {
          this.adapter_.focusItemAtIndex(0);
        }
      }
    }, {
      key: "focusLastElement",
      value: function focusLastElement() {
        var lastIndex = this.adapter_.getListItemCount() - 1;

        if (lastIndex >= 0) {
          this.adapter_.focusItemAtIndex(lastIndex);
        }
      }
      /**
       * Toggles checkbox or radio at give index. Radio doesn't change the checked state if it is already checked.
       * @param {number} index
       * @private
       */

    }, {
      key: "toggleCheckboxOrRadioAtIndex_",
      value: function toggleCheckboxOrRadioAtIndex_(index) {
        if (!this.hasCheckboxOrRadioAtIndex_(index)) return;
        var isChecked = true;

        if (this.adapter_.hasCheckboxAtIndex(index)) {
          isChecked = !this.adapter_.isCheckboxCheckedAtIndex(index);
        }

        this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
      }
      /**
       * @param {number} index
       * @return {boolean} Return true if list item contains checkbox or radio input at given index.
       */

    }, {
      key: "hasCheckboxOrRadioAtIndex_",
      value: function hasCheckboxOrRadioAtIndex_(index) {
        return this.adapter_.hasCheckboxAtIndex(index) || this.adapter_.hasRadioAtIndex(index);
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

  /* script */
              const __vue_script__ = script;
              
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
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/ddata/extra/vma/components/menu/mdc-menu.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcMenu = __vue_normalize__(
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
    /* component normalizer */
    function __vue_normalize__$1(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/ddata/extra/vma/components/menu/mdc-menu-surface.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcMenuSurface = __vue_normalize__$1(
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
    /* component normalizer */
    function __vue_normalize__$2(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/ddata/extra/vma/components/menu/mdc-menu-item.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcMenuItem = __vue_normalize__$2(
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
    /* component normalizer */
    function __vue_normalize__$3(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/ddata/extra/vma/components/menu/mdc-menu-divider.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcMenuDivider = __vue_normalize__$3(
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
    /* component normalizer */
    function __vue_normalize__$4(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/ddata/extra/vma/components/menu/mdc-menu-anchor.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcMenuAnchor = __vue_normalize__$4(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9iYXNlL2F1dG8taW5pdC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9iYXNlLXBsdWdpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZXZlbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvdW5pcXVlaWQtbWl4aW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbWVudS9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9tZW51L2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbWVudS1zdXJmYWNlL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUtc3VyZmFjZS9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUtc3VyZmFjZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpc3QvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUvZm91bmRhdGlvbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvbWVudS9tZGMtbWVudS52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUtc3VyZmFjZS91dGlsLmpzIiwiLi4vLi4vY29tcG9uZW50cy9tZW51L21kYy1tZW51LXN1cmZhY2UudnVlIiwiLi4vLi4vY29tcG9uZW50cy9tZW51L21kYy1tZW51LWl0ZW0udnVlIiwiLi4vLi4vY29tcG9uZW50cy9tZW51L21kYy1tZW51LWRpdmlkZXIudnVlIiwiLi4vLi4vY29tcG9uZW50cy9tZW51L21kYy1tZW51LWFuY2hvci52dWUiLCIuLi8uLi9jb21wb25lbnRzL21lbnUvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL21lbnUvZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGF1dG9Jbml0KHBsdWdpbikge1xuICAvLyBBdXRvLWluc3RhbGxcbiAgbGV0IF9WdWUgPSBudWxsXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIF9WdWUgPSB3aW5kb3cuVnVlXG4gIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvKmdsb2JhbCBnbG9iYWwqL1xuICAgIF9WdWUgPSBnbG9iYWwuVnVlXG4gIH1cbiAgaWYgKF9WdWUpIHtcbiAgICBfVnVlLnVzZShwbHVnaW4pXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBCYXNlUGx1Z2luKGNvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnX19WRVJTSU9OX18nLFxuICAgIGluc3RhbGw6IHZtID0+IHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2tleV1cbiAgICAgICAgdm0uY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQpXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImNvbnN0IHNjb3BlID1cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigweDEwMDAwMDAwKSkudG9TdHJpbmcoKSArICctJ1xuXG5leHBvcnQgY29uc3QgVk1BVW5pcXVlSWRNaXhpbiA9IHtcbiAgYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMudm1hX3VpZF8gPSBzY29wZSArIHRoaXMuX3VpZFxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgQVxuICovXG5jbGFzcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bXtjc3NDbGFzc2VzfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17bnVtYmVyc30gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiB7IU9iamVjdH0gKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgLy8gdmFsaWRhdGlvbi5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciA9IHt9KSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFBfSAqL1xuICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBNZW51LiBQcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIG1hbmFnaW5nXG4gKiAtIHNlbGVjdGVkIGVsZW1lbnQgY2xhc3Nlc1xuICogLSBnZXQgZm9jdXNlZCBlbGVtZW50c1xuICogLSB0b2dnbGluZyBhIGNoZWNrYm94IGluc2lkZSBhIGxpc3QgaXRlbVxuICpcbiAqIEFkZGl0aW9uYWxseSwgcHJvdmlkZXMgdHlwZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGFkYXB0ZXIgdG8gdGhlIENsb3N1cmVcbiAqIGNvbXBpbGVyLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGFkYXB0ZXIgZm9yIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZSB0byBkZWxlZ2F0ZSB1cGRhdGVzIHRvXG4gKiB0aGUgY29tcG9uZW50IGluIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZS4gU2VlIGFyY2hpdGVjdHVyZSBkb2N1bWVudGF0aW9uXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9jb2RlL2FyY2hpdGVjdHVyZS5tZFxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDTWVudUFkYXB0ZXIge1xuICAvKipcbiAgICogQWRkcyBhIGNsYXNzIHRvIHRoZSBlbGVtZW50IGF0IHRoZSBpbmRleCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGFkZENsYXNzVG9FbGVtZW50QXRJbmRleChpbmRleCwgY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2xhc3MgZnJvbSB0aGUgZWxlbWVudCBhdCB0aGUgaW5kZXggcHJvdmlkZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnRBdEluZGV4KGluZGV4LCBjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gYXR0cmlidXRlLCB3aXRoIHZhbHVlLCB0byB0aGUgZWxlbWVudCBhdCB0aGUgaW5kZXggcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIGFkZEF0dHJpYnV0ZVRvRWxlbWVudEF0SW5kZXgoaW5kZXgsIGF0dHIsIHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGF0dHJpYnV0ZSBmcm9tIGFuIGVsZW1lbnQgYXQgdGhlIGluZGV4IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJcbiAgICovXG4gIHJlbW92ZUF0dHJpYnV0ZUZyb21FbGVtZW50QXRJbmRleChpbmRleCwgYXR0cikge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBlbGVtZW50IGNvbnRhaW5zIHRoZSBjbGFzc05hbWUuXG4gICAqIEBwYXJhbSB7P0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZWxlbWVudCBjb250YWlucyB0aGUgY2xhc3NOYW1lXG4gICAqL1xuICBlbGVtZW50Q29udGFpbnNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgbWVudS1zdXJmYWNlLlxuICAgKi9cbiAgY2xvc2VTdXJmYWNlKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kZXggZm9yIHRoZSBlbGVtZW50IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0gez9IVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IGluZGV4IG9mIHRoZSBlbGVtZW50IGluIHRoZSBsaXN0IG9yIC0xIGlmIGl0IGlzIG5vdCBpbiB0aGUgbGlzdC5cbiAgICovXG4gIGdldEVsZW1lbnRJbmRleChlbGVtZW50KSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXJlbnRFbGVtZW50IG9mIHRoZSBwcm92aWRlZCBlbGVtZW50LlxuICAgKiBAcGFyYW0gez9IVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJuIHs/SFRNTEVsZW1lbnR9IHBhcmVudEVsZW1lbnQgb2YgdGhlIGVsZW1lbnQgcHJvdmlkZWQuXG4gICAqL1xuICBnZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVsZW1lbnQgd2l0aGluIHRoZSBzZWxlY3Rpb25Hcm91cCBjb250YWluaW5nIHRoZSBzZWxlY3RlZCBlbGVtZW50IGNsYXNzLlxuICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gc2VsZWN0aW9uR3JvdXBcbiAgICogQHJldHVybiB7bnVtYmVyfSBlbGVtZW50IHdpdGhpbiB0aGUgc2VsZWN0aW9uR3JvdXAgdGhhdCBjb250YWlucyB0aGUgc2VsZWN0ZWQgZWxlbWVudCBjbGFzcy5cbiAgICovXG4gIGdldFNlbGVjdGVkRWxlbWVudEluZGV4KHNlbGVjdGlvbkdyb3VwKSB7fVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB1c2luZyB0aGUgZXZ0RGF0YS5cbiAgICogQHBhcmFtIHt7XG4gKiAgICBpbmRleDogbnVtYmVyXG4gKiAgIH19IGV2dERhdGFcbiAgICovXG4gIG5vdGlmeVNlbGVjdGVkKGV2dERhdGEpIHt9XG59XG5cbmV4cG9ydCB7TURDTWVudUFkYXB0ZXJ9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgUk9PVDogJ21kYy1tZW51JyxcbiAgTUVOVV9TRUxFQ1RFRF9MSVNUX0lURU06ICdtZGMtbWVudS1pdGVtLS1zZWxlY3RlZCcsXG4gIE1FTlVfU0VMRUNUSU9OX0dST1VQOiAnbWRjLW1lbnVfX3NlbGVjdGlvbi1ncm91cCcsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFNFTEVDVEVEX0VWRU5UOiAnTURDTWVudTpzZWxlY3RlZCcsXG4gIEFSSUFfU0VMRUNURURfQVRUUjogJ2FyaWEtc2VsZWN0ZWQnLFxuICBMSVNUX1NFTEVDVE9SOiAnLm1kYy1saXN0JyxcbiAgQ0hFQ0tCT1hfU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLFxufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNRENNZW51U3VyZmFjZS4gUHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBtYW5hZ2luZ1xuICogLSBjbGFzc2VzXG4gKiAtIGRvbVxuICogLSBmb2N1c1xuICogLSBwb3NpdGlvblxuICogLSBkaW1lbnNpb25zXG4gKiAtIGV2ZW50IGhhbmRsZXJzXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENNZW51U3VyZmFjZUFkYXB0ZXIge1xuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGhhc0FuY2hvcigpIHt9XG5cbiAgLyoqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIG1lbnUgc3VyZmFjZSBpcyBjbG9zZWQuICovXG4gIG5vdGlmeUNsb3NlKCkge31cblxuICAvKiogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgbWVudSBzdXJmYWNlIGlzIG9wZW5lZC4gKi9cbiAgbm90aWZ5T3BlbigpIHt9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGVsXG4gICAqL1xuICBpc0VsZW1lbnRJbkNvbnRhaW5lcihlbCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNSdGwoKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gb3JpZ2luICovXG4gIHNldFRyYW5zZm9ybU9yaWdpbihvcmlnaW4pIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzRm9jdXNlZCgpIHt9XG5cbiAgLyoqIFNhdmVzIHRoZSBlbGVtZW50IHRoYXQgd2FzIGZvY3VzZWQgYmVmb3JlIHRoZSBtZW51IHN1cmZhY2Ugd2FzIG9wZW5lZC4gKi9cbiAgc2F2ZUZvY3VzKCkge31cblxuICAvKiogUmVzdG9yZXMgZm9jdXMgdG8gdGhlIGVsZW1lbnQgdGhhdCB3YXMgZm9jdXNlZCBiZWZvcmUgdGhlIG1lbnUgc3VyZmFjZSB3YXMgb3BlbmVkLiAqL1xuICByZXN0b3JlRm9jdXMoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc0ZpcnN0RWxlbWVudEZvY3VzZWQoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc0xhc3RFbGVtZW50Rm9jdXNlZCgpIHt9XG5cbiAgLyoqIEZvY3VzZXMgdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGluIHRoZSBtZW51LXN1cmZhY2UuICovXG4gIGZvY3VzRmlyc3RFbGVtZW50KCkge31cblxuICAvKiogRm9jdXNlcyB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgaW4gdGhlIG1lbnUtc3VyZmFjZS4gKi9cbiAgZm9jdXNMYXN0RWxlbWVudCgpIHt9XG5cbiAgLyoqIEByZXR1cm4geyF7d2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXJ9fSAqL1xuICBnZXRJbm5lckRpbWVuc2lvbnMoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHshe3dpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB0b3A6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIsIGxlZnQ6IG51bWJlcn19ICovXG4gIGdldEFuY2hvckRpbWVuc2lvbnMoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHsheyB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9fSAqL1xuICBnZXRXaW5kb3dEaW1lbnNpb25zKCkge31cblxuICAvKiogQHJldHVybiB7IXsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfX0gKi9cbiAgZ2V0Qm9keURpbWVuc2lvbnMoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHsheyB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9fSAqL1xuICBnZXRXaW5kb3dTY3JvbGwoKSB7fVxuXG4gIC8qKiBAcGFyYW0geyF7XG4gICogICB0b3A6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgKiAgIHJpZ2h0OiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gICogICBib3R0b206IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgKiAgIGxlZnQ6IChzdHJpbmd8dW5kZWZpbmVkKVxuICAqIH19IHBvc2l0aW9uICovXG4gIHNldFBvc2l0aW9uKHBvc2l0aW9uKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gaGVpZ2h0ICovXG4gIHNldE1heEhlaWdodChoZWlnaHQpIHt9XG59XG5cbmV4cG9ydCB7TURDTWVudVN1cmZhY2VBZGFwdGVyfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIEFOQ0hPUjogJ21kYy1tZW51LXN1cmZhY2UtLWFuY2hvcicsXG4gIEFOSU1BVElOR19DTE9TRUQ6ICdtZGMtbWVudS1zdXJmYWNlLS1hbmltYXRpbmctY2xvc2VkJyxcbiAgQU5JTUFUSU5HX09QRU46ICdtZGMtbWVudS1zdXJmYWNlLS1hbmltYXRpbmctb3BlbicsXG4gIEZJWEVEOiAnbWRjLW1lbnUtc3VyZmFjZS0tZml4ZWQnLFxuICBPUEVOOiAnbWRjLW1lbnUtc3VyZmFjZS0tb3BlbicsXG4gIFJPT1Q6ICdtZGMtbWVudS1zdXJmYWNlJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQ0xPU0VEX0VWRU5UOiAnTURDTWVudVN1cmZhY2U6Y2xvc2VkJyxcbiAgT1BFTkVEX0VWRU5UOiAnTURDTWVudVN1cmZhY2U6b3BlbmVkJyxcbiAgRk9DVVNBQkxFX0VMRU1FTlRTOiAnYnV0dG9uOm5vdCg6ZGlzYWJsZWQpLCBbaHJlZl06bm90KFthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSksIGlucHV0Om5vdCg6ZGlzYWJsZWQpLCAnICtcbiAgJ3NlbGVjdDpub3QoOmRpc2FibGVkKSwgdGV4dGFyZWE6bm90KDpkaXNhYmxlZCksIFt0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKTpub3QoW2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJdKScsXG59O1xuXG4vKiogQGVudW0ge251bWJlcn0gKi9cbmNvbnN0IG51bWJlcnMgPSB7XG4gIC8vIFRvdGFsIGR1cmF0aW9uIG9mIG1lbnUtc3VyZmFjZSBvcGVuIGFuaW1hdGlvbi5cbiAgVFJBTlNJVElPTl9PUEVOX0RVUkFUSU9OOiAxMjAsXG4gIC8vIFRvdGFsIGR1cmF0aW9uIG9mIG1lbnUtc3VyZmFjZSBjbG9zZSBhbmltYXRpb24uXG4gIFRSQU5TSVRJT05fQ0xPU0VfRFVSQVRJT046IDc1LFxuICAvLyBNYXJnaW4gbGVmdCB0byB0aGUgZWRnZSBvZiB0aGUgdmlld3BvcnQgd2hlbiBtZW51LXN1cmZhY2UgaXMgYXQgbWF4aW11bSBwb3NzaWJsZSBoZWlnaHQuXG4gIE1BUkdJTl9UT19FREdFOiAzMixcbiAgLy8gUmF0aW8gb2YgYW5jaG9yIHdpZHRoIHRvIG1lbnUtc3VyZmFjZSB3aWR0aCBmb3Igc3dpdGNoaW5nIGZyb20gY29ybmVyIHBvc2l0aW9uaW5nIHRvIGNlbnRlciBwb3NpdGlvbmluZy5cbiAgQU5DSE9SX1RPX01FTlVfU1VSRkFDRV9XSURUSF9SQVRJTzogMC42Nyxcbn07XG5cbi8qKlxuICogRW51bSBmb3IgYml0cyBpbiB0aGUge0BzZWUgQ29ybmVyKSBiaXRtYXAuXG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG5jb25zdCBDb3JuZXJCaXQgPSB7XG4gIEJPVFRPTTogMSxcbiAgQ0VOVEVSOiAyLFxuICBSSUdIVDogNCxcbiAgRkxJUF9SVEw6IDgsXG59O1xuXG4vKipcbiAqIEVudW0gZm9yIHJlcHJlc2VudGluZyBhbiBlbGVtZW50IGNvcm5lciBmb3IgcG9zaXRpb25pbmcgdGhlIG1lbnUtc3VyZmFjZS5cbiAqXG4gKiBUaGUgU1RBUlQgY29uc3RhbnRzIG1hcCB0byBMRUZUIGlmIGVsZW1lbnQgZGlyZWN0aW9uYWxpdHkgaXMgbGVmdFxuICogdG8gcmlnaHQgYW5kIFJJR0hUIGlmIHRoZSBkaXJlY3Rpb25hbGl0eSBpcyByaWdodCB0byBsZWZ0LlxuICogTGlrZXdpc2UgRU5EIG1hcHMgdG8gUklHSFQgb3IgTEVGVCBkZXBlbmRpbmcgb24gdGhlIGRpcmVjdGlvbmFsaXR5LlxuICpcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbmNvbnN0IENvcm5lciA9IHtcbiAgVE9QX0xFRlQ6IDAsXG4gIFRPUF9SSUdIVDogQ29ybmVyQml0LlJJR0hULFxuICBCT1RUT01fTEVGVDogQ29ybmVyQml0LkJPVFRPTSxcbiAgQk9UVE9NX1JJR0hUOiBDb3JuZXJCaXQuQk9UVE9NIHwgQ29ybmVyQml0LlJJR0hULFxuICBUT1BfU1RBUlQ6IENvcm5lckJpdC5GTElQX1JUTCxcbiAgVE9QX0VORDogQ29ybmVyQml0LkZMSVBfUlRMIHwgQ29ybmVyQml0LlJJR0hULFxuICBCT1RUT01fU1RBUlQ6IENvcm5lckJpdC5CT1RUT00gfCBDb3JuZXJCaXQuRkxJUF9SVEwsXG4gIEJPVFRPTV9FTkQ6IENvcm5lckJpdC5CT1RUT00gfCBDb3JuZXJCaXQuUklHSFQgfCBDb3JuZXJCaXQuRkxJUF9SVEwsXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnMsIENvcm5lckJpdCwgQ29ybmVyfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIHRvcDogbnVtYmVyLFxuICogICByaWdodDogbnVtYmVyLFxuICogICBib3R0b206IG51bWJlcixcbiAqICAgbGVmdDogbnVtYmVyXG4gKiB9fVxuICovXG5sZXQgQW5jaG9yTWFyZ2luO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICB2aWV3cG9ydDogeyB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9LFxuICogICB2aWV3cG9ydERpc3RhbmNlOiB7dG9wOiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyLCBsZWZ0OiBudW1iZXJ9LFxuICogICBhbmNob3JIZWlnaHQ6IG51bWJlcixcbiAqICAgYW5jaG9yV2lkdGg6IG51bWJlcixcbiAqICAgc3VyZmFjZUhlaWdodDogbnVtYmVyLFxuICogICBzdXJmYWNlV2lkdGg6IG51bWJlcixcbiAqICAgYm9keURpbWVuc2lvbnMsXG4gKiAgIHdpbmRvd1Njcm9sbCxcbiAqIH19XG4gKi9cbmxldCBBdXRvTGF5b3V0TWVhc3VyZW1lbnRzO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7TURDTWVudVN1cmZhY2VBZGFwdGVyfSBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzLCBDb3JuZXIsIENvcm5lckJpdH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENNZW51U3VyZmFjZUFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bXtjc3NDbGFzc2VzfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7bnVtYmVyfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte251bWJlcn0gKi9cbiAgc3RhdGljIGdldCBDb3JuZXIoKSB7XG4gICAgcmV0dXJuIENvcm5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QHNlZSBNRENNZW51U3VyZmFjZUFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuXG4gICAqIHR5cGVzLlxuICAgKiBAcmV0dXJuIHshTURDTWVudVN1cmZhY2VBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDTWVudVN1cmZhY2VBZGFwdGVyfSAqLyAoe1xuICAgICAgYWRkQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgaGFzQ2xhc3M6ICgpID0+IGZhbHNlLFxuICAgICAgaGFzQW5jaG9yOiAoKSA9PiBmYWxzZSxcbiAgICAgIG5vdGlmeUNsb3NlOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeU9wZW46ICgpID0+IHt9LFxuICAgICAgaXNFbGVtZW50SW5Db250YWluZXI6ICgpID0+IGZhbHNlLFxuICAgICAgaXNSdGw6ICgpID0+IGZhbHNlLFxuICAgICAgc2V0VHJhbnNmb3JtT3JpZ2luOiAoKSA9PiB7fSxcbiAgICAgIGlzRm9jdXNlZDogKCkgPT4gZmFsc2UsXG4gICAgICBzYXZlRm9jdXM6ICgpID0+IHt9LFxuICAgICAgcmVzdG9yZUZvY3VzOiAoKSA9PiB7fSxcbiAgICAgIGlzRmlyc3RFbGVtZW50Rm9jdXNlZDogKCkgPT4ge30sXG4gICAgICBpc0xhc3RFbGVtZW50Rm9jdXNlZDogKCkgPT4ge30sXG4gICAgICBmb2N1c0ZpcnN0RWxlbWVudDogKCkgPT4ge30sXG4gICAgICBmb2N1c0xhc3RFbGVtZW50OiAoKSA9PiB7fSxcbiAgICAgIGdldElubmVyRGltZW5zaW9uczogKCkgPT4gKHt9KSxcbiAgICAgIGdldEFuY2hvckRpbWVuc2lvbnM6ICgpID0+ICh7fSksXG4gICAgICBnZXRXaW5kb3dEaW1lbnNpb25zOiAoKSA9PiAoe30pLFxuICAgICAgZ2V0Qm9keURpbWVuc2lvbnM6ICgpID0+ICh7fSksXG4gICAgICBnZXRXaW5kb3dTY3JvbGw6ICgpID0+ICh7fSksXG4gICAgICBzZXRQb3NpdGlvbjogKCkgPT4ge30sXG4gICAgICBzZXRNYXhIZWlnaHQ6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7IU1EQ01lbnVTdXJmYWNlQWRhcHRlcn0gYWRhcHRlciAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzT3Blbl8gPSBmYWxzZTtcbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLm9wZW5BbmltYXRpb25FbmRUaW1lcklkXyA9IDA7XG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfID0gMDtcbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmFuaW1hdGlvblJlcXVlc3RJZF8gPSAwO1xuICAgIC8qKiBAcHJpdmF0ZSB7IXsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfX0gKi9cbiAgICB0aGlzLmRpbWVuc2lvbnNfO1xuICAgIC8qKiBAcHJpdmF0ZSB7IUNvcm5lcn0gKi9cbiAgICB0aGlzLmFuY2hvckNvcm5lcl8gPSBDb3JuZXIuVE9QX1NUQVJUO1xuICAgIC8qKiBAcHJpdmF0ZSB7IUFuY2hvck1hcmdpbn0gKi9cbiAgICB0aGlzLmFuY2hvck1hcmdpbl8gPSB7dG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwfTtcbiAgICAvKiogQHByaXZhdGUgez9BdXRvTGF5b3V0TWVhc3VyZW1lbnRzfSAqL1xuICAgIHRoaXMubWVhc3VyZXNfID0gbnVsbDtcbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5xdWlja09wZW5fID0gZmFsc2U7XG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuaG9pc3RlZEVsZW1lbnRfID0gZmFsc2U7XG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuaXNGaXhlZFBvc2l0aW9uXyA9IGZhbHNlO1xuICAgIC8qKiBAcHJpdmF0ZSB7IXt4OiBudW1iZXIsIHk6IG51bWJlcn19ICovXG4gICAgdGhpcy5wb3NpdGlvbl8gPSB7eDogMCwgeTogMH07XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IHtST09ULCBPUEVOfSA9IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuXG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKFJPT1QpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Uk9PVH0gY2xhc3MgcmVxdWlyZWQgaW4gcm9vdCBlbGVtZW50LmApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKE9QRU4pKSB7XG4gICAgICB0aGlzLmlzT3Blbl8gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMub3BlbkFuaW1hdGlvbkVuZFRpbWVySWRfKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfKTtcbiAgICAvLyBDYW5jZWwgYW55IGN1cnJlbnRseSBydW5uaW5nIGFuaW1hdGlvbnMuXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25SZXF1ZXN0SWRfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFDb3JuZXJ9IGNvcm5lciBEZWZhdWx0IGFuY2hvciBjb3JuZXIgYWxpZ25tZW50IG9mIHRvcC1sZWZ0IG1lbnUgc3VyZmFjZSBjb3JuZXIuXG4gICAqL1xuICBzZXRBbmNob3JDb3JuZXIoY29ybmVyKSB7XG4gICAgdGhpcy5hbmNob3JDb3JuZXJfID0gY29ybmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUFuY2hvck1hcmdpbn0gbWFyZ2luIHNldCBvZiBtYXJnaW4gdmFsdWVzIGZyb20gYW5jaG9yLlxuICAgKi9cbiAgc2V0QW5jaG9yTWFyZ2luKG1hcmdpbikge1xuICAgIHRoaXMuYW5jaG9yTWFyZ2luXy50b3AgPSB0eXBlb2YgbWFyZ2luLnRvcCA9PT0gJ251bWJlcicgPyBtYXJnaW4udG9wIDogMDtcbiAgICB0aGlzLmFuY2hvck1hcmdpbl8ucmlnaHQgPSB0eXBlb2YgbWFyZ2luLnJpZ2h0ID09PSAnbnVtYmVyJyA/IG1hcmdpbi5yaWdodCA6IDA7XG4gICAgdGhpcy5hbmNob3JNYXJnaW5fLmJvdHRvbSA9IHR5cGVvZiBtYXJnaW4uYm90dG9tID09PSAnbnVtYmVyJyA/IG1hcmdpbi5ib3R0b20gOiAwO1xuICAgIHRoaXMuYW5jaG9yTWFyZ2luXy5sZWZ0ID0gdHlwZW9mIG1hcmdpbi5sZWZ0ID09PSAnbnVtYmVyJyA/IG1hcmdpbi5sZWZ0IDogMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGluZGljYXRlIGlmIHRoZSBtZW51LXN1cmZhY2UgaXMgaG9pc3RlZCB0byB0aGUgYm9keS5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc0hvaXN0ZWRcbiAgICovXG4gIHNldElzSG9pc3RlZChpc0hvaXN0ZWQpIHtcbiAgICB0aGlzLmhvaXN0ZWRFbGVtZW50XyA9IGlzSG9pc3RlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIHNldCB0aGUgbWVudS1zdXJmYWNlIGNhbGN1bGF0aW9ucyBiYXNlZCBvbiBhIGZpeGVkIHBvc2l0aW9uIG1lbnUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNGaXhlZFBvc2l0aW9uXG4gICAqL1xuICBzZXRGaXhlZFBvc2l0aW9uKGlzRml4ZWRQb3NpdGlvbikge1xuICAgIHRoaXMuaXNGaXhlZFBvc2l0aW9uXyA9IGlzRml4ZWRQb3NpdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBtZW51LXN1cmZhY2UgcG9zaXRpb24gb24gdGhlIHBhZ2UuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAqL1xuICBzZXRBYnNvbHV0ZVBvc2l0aW9uKHgsIHkpIHtcbiAgICB0aGlzLnBvc2l0aW9uXy54ID0gdGhpcy50eXBlQ2hlY2tpc0Zpbml0ZV8oeCkgPyB4IDogMDtcbiAgICB0aGlzLnBvc2l0aW9uXy55ID0gdGhpcy50eXBlQ2hlY2tpc0Zpbml0ZV8oeSkgPyB5IDogMDtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHF1aWNrT3BlbiAqL1xuICBzZXRRdWlja09wZW4ocXVpY2tPcGVuKSB7XG4gICAgdGhpcy5xdWlja09wZW5fID0gcXVpY2tPcGVuO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBjbGlja3MgYW5kIGNsb3NlIGlmIG5vdCB3aXRoaW4gbWVudS1zdXJmYWNlIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZUJvZHlDbGljayhldnQpIHtcbiAgICBjb25zdCBlbCA9IGV2dC50YXJnZXQ7XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc0VsZW1lbnRJbkNvbnRhaW5lcihlbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBrZXlzIHRoYXQgY2xvc2UgdGhlIHN1cmZhY2UuXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZUtleWRvd24oZXZ0KSB7XG4gICAgY29uc3Qge2tleUNvZGUsIGtleSwgc2hpZnRLZXl9ID0gZXZ0O1xuXG4gICAgY29uc3QgaXNFc2NhcGUgPSBrZXkgPT09ICdFc2NhcGUnIHx8IGtleUNvZGUgPT09IDI3O1xuICAgIGNvbnN0IGlzVGFiID0ga2V5ID09PSAnVGFiJyB8fCBrZXlDb2RlID09PSA5O1xuXG4gICAgaWYgKGlzRXNjYXBlKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSBlbHNlIGlmIChpc1RhYikge1xuICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNMYXN0RWxlbWVudEZvY3VzZWQoKSAmJiAhc2hpZnRLZXkpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0ZpcnN0RWxlbWVudCgpO1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hZGFwdGVyXy5pc0ZpcnN0RWxlbWVudEZvY3VzZWQoKSAmJiBzaGlmdEtleSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzTGFzdEVsZW1lbnQoKTtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFBdXRvTGF5b3V0TWVhc3VyZW1lbnRzfSBNZWFzdXJlbWVudHMgdXNlZCB0byBwb3NpdGlvbiBtZW51IHN1cmZhY2UgcG9wdXAuXG4gICAqL1xuICBnZXRBdXRvTGF5b3V0TWVhc3VyZW1lbnRzXygpIHtcbiAgICBsZXQgYW5jaG9yUmVjdCA9IHRoaXMuYWRhcHRlcl8uZ2V0QW5jaG9yRGltZW5zaW9ucygpO1xuICAgIGNvbnN0IHZpZXdwb3J0ID0gdGhpcy5hZGFwdGVyXy5nZXRXaW5kb3dEaW1lbnNpb25zKCk7XG4gICAgY29uc3QgYm9keURpbWVuc2lvbnMgPSB0aGlzLmFkYXB0ZXJfLmdldEJvZHlEaW1lbnNpb25zKCk7XG4gICAgY29uc3Qgd2luZG93U2Nyb2xsID0gdGhpcy5hZGFwdGVyXy5nZXRXaW5kb3dTY3JvbGwoKTtcblxuICAgIGlmICghYW5jaG9yUmVjdCkge1xuICAgICAgYW5jaG9yUmVjdCA9IC8qKiBAdHlwZSB7Q2xpZW50UmVjdH0gKi8gKHtcbiAgICAgICAgeDogdGhpcy5wb3NpdGlvbl8ueCxcbiAgICAgICAgeTogdGhpcy5wb3NpdGlvbl8ueSxcbiAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uXy55LFxuICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb25fLnksXG4gICAgICAgIGxlZnQ6IHRoaXMucG9zaXRpb25fLngsXG4gICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uXy54LFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZpZXdwb3J0LFxuICAgICAgYm9keURpbWVuc2lvbnMsXG4gICAgICB3aW5kb3dTY3JvbGwsXG4gICAgICB2aWV3cG9ydERpc3RhbmNlOiB7XG4gICAgICAgIHRvcDogYW5jaG9yUmVjdC50b3AsXG4gICAgICAgIHJpZ2h0OiB2aWV3cG9ydC53aWR0aCAtIGFuY2hvclJlY3QucmlnaHQsXG4gICAgICAgIGxlZnQ6IGFuY2hvclJlY3QubGVmdCxcbiAgICAgICAgYm90dG9tOiB2aWV3cG9ydC5oZWlnaHQgLSBhbmNob3JSZWN0LmJvdHRvbSxcbiAgICAgIH0sXG4gICAgICBhbmNob3JIZWlnaHQ6IGFuY2hvclJlY3QuaGVpZ2h0LFxuICAgICAgYW5jaG9yV2lkdGg6IGFuY2hvclJlY3Qud2lkdGgsXG4gICAgICBzdXJmYWNlSGVpZ2h0OiB0aGlzLmRpbWVuc2lvbnNfLmhlaWdodCxcbiAgICAgIHN1cmZhY2VXaWR0aDogdGhpcy5kaW1lbnNpb25zXy53aWR0aCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBjb3JuZXIgb2YgdGhlIGFuY2hvciBmcm9tIHdoaWNoIHRvIGFuaW1hdGUgYW5kIHBvc2l0aW9uIHRoZSBtZW51IHN1cmZhY2UuXG4gICAqIEByZXR1cm4geyFDb3JuZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRPcmlnaW5Db3JuZXJfKCkge1xuICAgIC8vIERlZmF1bHRzOiBvcGVuIGZyb20gdGhlIHRvcCBsZWZ0LlxuICAgIGxldCBjb3JuZXIgPSBDb3JuZXIuVE9QX0xFRlQ7XG5cbiAgICBjb25zdCB7dmlld3BvcnREaXN0YW5jZSwgYW5jaG9ySGVpZ2h0LCBhbmNob3JXaWR0aCwgc3VyZmFjZUhlaWdodCwgc3VyZmFjZVdpZHRofSA9IHRoaXMubWVhc3VyZXNfO1xuICAgIGNvbnN0IGlzQm90dG9tQWxpZ25lZCA9IEJvb2xlYW4odGhpcy5hbmNob3JDb3JuZXJfICYgQ29ybmVyQml0LkJPVFRPTSk7XG4gICAgY29uc3QgYXZhaWxhYmxlVG9wID0gaXNCb3R0b21BbGlnbmVkID8gdmlld3BvcnREaXN0YW5jZS50b3AgKyBhbmNob3JIZWlnaHQgKyB0aGlzLmFuY2hvck1hcmdpbl8uYm90dG9tXG4gICAgICA6IHZpZXdwb3J0RGlzdGFuY2UudG9wICsgdGhpcy5hbmNob3JNYXJnaW5fLnRvcDtcbiAgICBjb25zdCBhdmFpbGFibGVCb3R0b20gPSBpc0JvdHRvbUFsaWduZWQgPyB2aWV3cG9ydERpc3RhbmNlLmJvdHRvbSAtIHRoaXMuYW5jaG9yTWFyZ2luXy5ib3R0b21cbiAgICAgIDogdmlld3BvcnREaXN0YW5jZS5ib3R0b20gKyBhbmNob3JIZWlnaHQgLSB0aGlzLmFuY2hvck1hcmdpbl8udG9wO1xuXG4gICAgY29uc3QgdG9wT3ZlcmZsb3cgPSBzdXJmYWNlSGVpZ2h0IC0gYXZhaWxhYmxlVG9wO1xuICAgIGNvbnN0IGJvdHRvbU92ZXJmbG93ID0gc3VyZmFjZUhlaWdodCAtIGF2YWlsYWJsZUJvdHRvbTtcbiAgICBpZiAoYm90dG9tT3ZlcmZsb3cgPiAwICYmIHRvcE92ZXJmbG93IDwgYm90dG9tT3ZlcmZsb3cpIHtcbiAgICAgIGNvcm5lciB8PSBDb3JuZXJCaXQuQk9UVE9NO1xuICAgIH1cblxuICAgIGNvbnN0IGlzUnRsID0gdGhpcy5hZGFwdGVyXy5pc1J0bCgpO1xuICAgIGNvbnN0IGlzRmxpcFJ0bCA9IEJvb2xlYW4odGhpcy5hbmNob3JDb3JuZXJfICYgQ29ybmVyQml0LkZMSVBfUlRMKTtcbiAgICBjb25zdCBhdm9pZEhvcml6b250YWxPdmVybGFwID0gQm9vbGVhbih0aGlzLmFuY2hvckNvcm5lcl8gJiBDb3JuZXJCaXQuUklHSFQpO1xuICAgIGNvbnN0IGlzQWxpZ25lZFJpZ2h0ID0gKGF2b2lkSG9yaXpvbnRhbE92ZXJsYXAgJiYgIWlzUnRsKSB8fFxuICAgICAgKCFhdm9pZEhvcml6b250YWxPdmVybGFwICYmIGlzRmxpcFJ0bCAmJiBpc1J0bCk7XG4gICAgY29uc3QgYXZhaWxhYmxlTGVmdCA9IGlzQWxpZ25lZFJpZ2h0ID8gdmlld3BvcnREaXN0YW5jZS5sZWZ0ICsgYW5jaG9yV2lkdGggKyB0aGlzLmFuY2hvck1hcmdpbl8ucmlnaHQgOlxuICAgICAgdmlld3BvcnREaXN0YW5jZS5sZWZ0ICsgdGhpcy5hbmNob3JNYXJnaW5fLmxlZnQ7XG4gICAgY29uc3QgYXZhaWxhYmxlUmlnaHQgPSBpc0FsaWduZWRSaWdodCA/IHZpZXdwb3J0RGlzdGFuY2UucmlnaHQgLSB0aGlzLmFuY2hvck1hcmdpbl8ucmlnaHQgOlxuICAgICAgdmlld3BvcnREaXN0YW5jZS5yaWdodCArIGFuY2hvcldpZHRoIC0gdGhpcy5hbmNob3JNYXJnaW5fLmxlZnQ7XG5cbiAgICBjb25zdCBsZWZ0T3ZlcmZsb3cgPSBzdXJmYWNlV2lkdGggLSBhdmFpbGFibGVMZWZ0O1xuICAgIGNvbnN0IHJpZ2h0T3ZlcmZsb3cgPSBzdXJmYWNlV2lkdGggLSBhdmFpbGFibGVSaWdodDtcblxuICAgIGlmICgobGVmdE92ZXJmbG93IDwgMCAmJiBpc0FsaWduZWRSaWdodCAmJiBpc1J0bCkgfHxcbiAgICAgICAgKGF2b2lkSG9yaXpvbnRhbE92ZXJsYXAgJiYgIWlzQWxpZ25lZFJpZ2h0ICYmIGxlZnRPdmVyZmxvdyA8IDApIHx8XG4gICAgICAgIChyaWdodE92ZXJmbG93ID4gMCAmJiBsZWZ0T3ZlcmZsb3cgPCByaWdodE92ZXJmbG93KSkge1xuICAgICAgY29ybmVyIHw9IENvcm5lckJpdC5SSUdIVDtcbiAgICB9XG5cbiAgICByZXR1cm4gLyoqIEB0eXBlIHtDb3JuZXJ9ICovIChjb3JuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUNvcm5lcn0gY29ybmVyIE9yaWdpbiBjb3JuZXIgb2YgdGhlIG1lbnUgc3VyZmFjZS5cbiAgICogQHJldHVybiB7bnVtYmVyfSBIb3Jpem9udGFsIG9mZnNldCBvZiBtZW51IHN1cmZhY2Ugb3JpZ2luIGNvcm5lciBmcm9tIGNvcnJlc3BvbmRpbmcgYW5jaG9yIGNvcm5lci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEhvcml6b250YWxPcmlnaW5PZmZzZXRfKGNvcm5lcikge1xuICAgIGNvbnN0IHthbmNob3JXaWR0aH0gPSB0aGlzLm1lYXN1cmVzXztcbiAgICAvLyBpc1JpZ2h0QWxpZ25lZCBjb3JyZXNwb25kcyB0byB1c2luZyB0aGUgJ3JpZ2h0JyBwcm9wZXJ0eSBvbiB0aGUgc3VyZmFjZS5cbiAgICBjb25zdCBpc1JpZ2h0QWxpZ25lZCA9IEJvb2xlYW4oY29ybmVyICYgQ29ybmVyQml0LlJJR0hUKTtcbiAgICBjb25zdCBhdm9pZEhvcml6b250YWxPdmVybGFwID0gQm9vbGVhbih0aGlzLmFuY2hvckNvcm5lcl8gJiBDb3JuZXJCaXQuUklHSFQpO1xuXG4gICAgaWYgKGlzUmlnaHRBbGlnbmVkKSB7XG4gICAgICBjb25zdCByaWdodE9mZnNldCA9IGF2b2lkSG9yaXpvbnRhbE92ZXJsYXAgPyBhbmNob3JXaWR0aCAtIHRoaXMuYW5jaG9yTWFyZ2luXy5sZWZ0IDogdGhpcy5hbmNob3JNYXJnaW5fLnJpZ2h0O1xuXG4gICAgICAvLyBGb3IgaG9pc3RlZCBvciBmaXhlZCBlbGVtZW50cywgYWRqdXN0IHRoZSBvZmZzZXQgYnkgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB2aWV3cG9ydCB3aWR0aCBhbmQgYm9keSB3aWR0aCBzb1xuICAgICAgLy8gd2hlbiB3ZSBjYWxjdWxhdGUgdGhlIHJpZ2h0IHZhbHVlIChgYWRqdXN0UG9zaXRpb25Gb3JIb2lzdGVkRWxlbWVudF9gKSBiYXNlZCBvbiB0aGUgZWxlbWVudCBwb3NpdGlvbixcbiAgICAgIC8vIHRoZSByaWdodCBwcm9wZXJ0eSBpcyBjb3JyZWN0LlxuICAgICAgaWYgKHRoaXMuaG9pc3RlZEVsZW1lbnRfIHx8IHRoaXMuaXNGaXhlZFBvc2l0aW9uXykge1xuICAgICAgICByZXR1cm4gcmlnaHRPZmZzZXQgLSAodGhpcy5tZWFzdXJlc18udmlld3BvcnQud2lkdGggLSB0aGlzLm1lYXN1cmVzXy5ib2R5RGltZW5zaW9ucy53aWR0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByaWdodE9mZnNldDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCA/IGFuY2hvcldpZHRoIC0gdGhpcy5hbmNob3JNYXJnaW5fLnJpZ2h0IDogdGhpcy5hbmNob3JNYXJnaW5fLmxlZnQ7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshQ29ybmVyfSBjb3JuZXIgT3JpZ2luIGNvcm5lciBvZiB0aGUgbWVudSBzdXJmYWNlLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFZlcnRpY2FsIG9mZnNldCBvZiBtZW51IHN1cmZhY2Ugb3JpZ2luIGNvcm5lciBmcm9tIGNvcnJlc3BvbmRpbmcgYW5jaG9yIGNvcm5lci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFZlcnRpY2FsT3JpZ2luT2Zmc2V0Xyhjb3JuZXIpIHtcbiAgICBjb25zdCB7YW5jaG9ySGVpZ2h0fSA9IHRoaXMubWVhc3VyZXNfO1xuICAgIGNvbnN0IGlzQm90dG9tQWxpZ25lZCA9IEJvb2xlYW4oY29ybmVyICYgQ29ybmVyQml0LkJPVFRPTSk7XG4gICAgY29uc3QgYXZvaWRWZXJ0aWNhbE92ZXJsYXAgPSBCb29sZWFuKHRoaXMuYW5jaG9yQ29ybmVyXyAmIENvcm5lckJpdC5CT1RUT00pO1xuICAgIGxldCB5ID0gMDtcblxuICAgIGlmIChpc0JvdHRvbUFsaWduZWQpIHtcbiAgICAgIHkgPSBhdm9pZFZlcnRpY2FsT3ZlcmxhcCA/IGFuY2hvckhlaWdodCAtIHRoaXMuYW5jaG9yTWFyZ2luXy50b3AgOiAtdGhpcy5hbmNob3JNYXJnaW5fLmJvdHRvbTtcbiAgICB9IGVsc2Uge1xuICAgICAgeSA9IGF2b2lkVmVydGljYWxPdmVybGFwID8gKGFuY2hvckhlaWdodCArIHRoaXMuYW5jaG9yTWFyZ2luXy5ib3R0b20pIDogdGhpcy5hbmNob3JNYXJnaW5fLnRvcDtcbiAgICB9XG4gICAgcmV0dXJuIHk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshQ29ybmVyfSBjb3JuZXIgT3JpZ2luIGNvcm5lciBvZiB0aGUgbWVudSBzdXJmYWNlLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IE1heGltdW0gaGVpZ2h0IG9mIHRoZSBtZW51IHN1cmZhY2UsIGJhc2VkIG9uIGF2YWlsYWJsZSBzcGFjZS4gMCBpbmRpY2F0ZXMgc2hvdWxkIG5vdCBiZSBzZXQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRNZW51U3VyZmFjZU1heEhlaWdodF8oY29ybmVyKSB7XG4gICAgbGV0IG1heEhlaWdodCA9IDA7XG4gICAgY29uc3Qge3ZpZXdwb3J0RGlzdGFuY2V9ID0gdGhpcy5tZWFzdXJlc187XG4gICAgY29uc3QgaXNCb3R0b21BbGlnbmVkID0gQm9vbGVhbihjb3JuZXIgJiBDb3JuZXJCaXQuQk9UVE9NKTtcbiAgICBjb25zdCB7TUFSR0lOX1RPX0VER0V9ID0gTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLm51bWJlcnM7XG5cbiAgICAvLyBXaGVuIG1heGltdW0gaGVpZ2h0IGlzIG5vdCBzcGVjaWZpZWQsIGl0IGlzIGhhbmRsZWQgZnJvbSBjc3MuXG4gICAgaWYgKGlzQm90dG9tQWxpZ25lZCkge1xuICAgICAgbWF4SGVpZ2h0ID0gdmlld3BvcnREaXN0YW5jZS50b3AgKyB0aGlzLmFuY2hvck1hcmdpbl8udG9wIC0gTUFSR0lOX1RPX0VER0U7XG4gICAgICBpZiAoISh0aGlzLmFuY2hvckNvcm5lcl8gJiBDb3JuZXJCaXQuQk9UVE9NKSkge1xuICAgICAgICBtYXhIZWlnaHQgKz0gdGhpcy5tZWFzdXJlc18uYW5jaG9ySGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXhIZWlnaHQgPSB2aWV3cG9ydERpc3RhbmNlLmJvdHRvbSAtIHRoaXMuYW5jaG9yTWFyZ2luXy5ib3R0b20gKyB0aGlzLm1lYXN1cmVzXy5hbmNob3JIZWlnaHQgLSBNQVJHSU5fVE9fRURHRTtcbiAgICAgIGlmICh0aGlzLmFuY2hvckNvcm5lcl8gJiBDb3JuZXJCaXQuQk9UVE9NKSB7XG4gICAgICAgIG1heEhlaWdodCAtPSB0aGlzLm1lYXN1cmVzXy5hbmNob3JIZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1heEhlaWdodDtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBhdXRvUG9zaXRpb25fKCkge1xuICAgIC8vIENvbXB1dGUgbWVhc3VyZW1lbnRzIGZvciBhdXRvcG9zaXRpb24gbWV0aG9kcyByZXVzZS5cbiAgICB0aGlzLm1lYXN1cmVzXyA9IHRoaXMuZ2V0QXV0b0xheW91dE1lYXN1cmVtZW50c18oKTtcblxuICAgIGNvbnN0IGNvcm5lciA9IHRoaXMuZ2V0T3JpZ2luQ29ybmVyXygpO1xuICAgIGNvbnN0IG1heE1lbnVTdXJmYWNlSGVpZ2h0ID0gdGhpcy5nZXRNZW51U3VyZmFjZU1heEhlaWdodF8oY29ybmVyKTtcbiAgICBjb25zdCB2ZXJ0aWNhbEFsaWdubWVudCA9IChjb3JuZXIgJiBDb3JuZXJCaXQuQk9UVE9NKSA/ICdib3R0b20nIDogJ3RvcCc7XG4gICAgbGV0IGhvcml6b250YWxBbGlnbm1lbnQgPSAoY29ybmVyICYgQ29ybmVyQml0LlJJR0hUKSA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgY29uc3QgaG9yaXpvbnRhbE9mZnNldCA9IHRoaXMuZ2V0SG9yaXpvbnRhbE9yaWdpbk9mZnNldF8oY29ybmVyKTtcbiAgICBjb25zdCB2ZXJ0aWNhbE9mZnNldCA9IHRoaXMuZ2V0VmVydGljYWxPcmlnaW5PZmZzZXRfKGNvcm5lcik7XG4gICAgbGV0IHBvc2l0aW9uID0ge1xuICAgICAgW2hvcml6b250YWxBbGlnbm1lbnRdOiBob3Jpem9udGFsT2Zmc2V0ID8gaG9yaXpvbnRhbE9mZnNldCA6ICcwJyxcbiAgICAgIFt2ZXJ0aWNhbEFsaWdubWVudF06IHZlcnRpY2FsT2Zmc2V0ID8gdmVydGljYWxPZmZzZXQgOiAnMCcsXG4gICAgfTtcbiAgICBjb25zdCB7YW5jaG9yV2lkdGgsIHN1cmZhY2VXaWR0aH0gPSB0aGlzLm1lYXN1cmVzXztcbiAgICAvLyBDZW50ZXIgYWxpZ24gd2hlbiBhbmNob3Igd2lkdGggaXMgY29tcGFyYWJsZSBvciBncmVhdGVyIHRoYW4gbWVudSBzdXJmYWNlLCBvdGhlcndpc2Uga2VlcCBjb3JuZXIuXG4gICAgaWYgKGFuY2hvcldpZHRoIC8gc3VyZmFjZVdpZHRoID4gbnVtYmVycy5BTkNIT1JfVE9fTUVOVV9TVVJGQUNFX1dJRFRIX1JBVElPKSB7XG4gICAgICBob3Jpem9udGFsQWxpZ25tZW50ID0gJ2NlbnRlcic7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIG1lbnUtc3VyZmFjZSBoYXMgYmVlbiBob2lzdGVkIHRvIHRoZSBib2R5LCBpdCdzIG5vIGxvbmdlciByZWxhdGl2ZSB0byB0aGUgYW5jaG9yIGVsZW1lbnRcbiAgICBpZiAodGhpcy5ob2lzdGVkRWxlbWVudF8gfHwgdGhpcy5pc0ZpeGVkUG9zaXRpb25fKSB7XG4gICAgICBwb3NpdGlvbiA9IHRoaXMuYWRqdXN0UG9zaXRpb25Gb3JIb2lzdGVkRWxlbWVudF8ocG9zaXRpb24pO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcHJvcCBpbiBwb3NpdGlvbikge1xuICAgICAgaWYgKHBvc2l0aW9uLmhhc093blByb3BlcnR5KHByb3ApICYmIHBvc2l0aW9uW3Byb3BdICE9PSAnMCcpIHtcbiAgICAgICAgcG9zaXRpb25bcHJvcF0gPSBgJHtwYXJzZUludChwb3NpdGlvbltwcm9wXSwgMTApfXB4YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnNldFRyYW5zZm9ybU9yaWdpbihgJHtob3Jpem9udGFsQWxpZ25tZW50fSAke3ZlcnRpY2FsQWxpZ25tZW50fWApO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0TWF4SGVpZ2h0KG1heE1lbnVTdXJmYWNlSGVpZ2h0ID8gbWF4TWVudVN1cmZhY2VIZWlnaHQgKyAncHgnIDogJycpO1xuXG4gICAgLy8gQ2xlYXIgbWVhc3VyZXMgYWZ0ZXIgcG9zaXRpb25pbmcgaXMgY29tcGxldGUuXG4gICAgdGhpcy5tZWFzdXJlc18gPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIG9mZnNldHMgZm9yIHBvc2l0aW9uaW5nIHRoZSBtZW51LXN1cmZhY2Ugd2hlbiB0aGUgbWVudS1zdXJmYWNlIGhhcyBiZWVuXG4gICAqIGhvaXN0ZWQgdG8gdGhlIGJvZHkuXG4gICAqIEBwYXJhbSB7IXtcbiAgICogICB0b3A6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAgICogICByaWdodDogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgKiAgIGJvdHRvbTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgKiAgIGxlZnQ6IChzdHJpbmd8dW5kZWZpbmVkKVxuICAgKiB9fSBwb3NpdGlvblxuICAgKiBAcmV0dXJuIHshe1xuICAgKiAgIHRvcDogKHN0cmluZ3x1bmRlZmluZWQpLFxuICAgKiAgIHJpZ2h0OiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gICAqICAgYm90dG9tOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gICAqICAgbGVmdDogKHN0cmluZ3x1bmRlZmluZWQpXG4gICAqIH19IHBvc2l0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhZGp1c3RQb3NpdGlvbkZvckhvaXN0ZWRFbGVtZW50Xyhwb3NpdGlvbikge1xuICAgIGNvbnN0IHt3aW5kb3dTY3JvbGwsIHZpZXdwb3J0RGlzdGFuY2V9ID0gdGhpcy5tZWFzdXJlc187XG5cbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gcG9zaXRpb24pIHtcbiAgICAgIGlmIChwb3NpdGlvbi5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAvLyBIb2lzdGVkIHN1cmZhY2VzIG5lZWQgdG8gaGF2ZSB0aGUgYW5jaG9yIGVsZW1lbnRzIGxvY2F0aW9uIG9uIHRoZSBwYWdlIGFkZGVkIHRvIHRoZVxuICAgICAgICAvLyBwb3NpdGlvbiBwcm9wZXJ0aWVzIGZvciBwcm9wZXIgYWxpZ25tZW50IG9uIHRoZSBib2R5LlxuICAgICAgICBpZiAodmlld3BvcnREaXN0YW5jZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgIHBvc2l0aW9uW3Byb3BdID0gcGFyc2VJbnQocG9zaXRpb25bcHJvcF0sIDEwKSArIHZpZXdwb3J0RGlzdGFuY2VbcHJvcF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdXJmYWNlcyB0aGF0IGFyZSBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgbmVlZCB0byBoYXZlIGFkZGl0aW9uYWwgY2FsY3VsYXRpb25zIGZvciBzY3JvbGxcbiAgICAgICAgLy8gYW5kIGJvdHRvbSBwb3NpdGlvbmluZy5cbiAgICAgICAgaWYgKCF0aGlzLmlzRml4ZWRQb3NpdGlvbl8pIHtcbiAgICAgICAgICBpZiAocHJvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uW3Byb3BdID0gcGFyc2VJbnQocG9zaXRpb25bcHJvcF0sIDEwKSArIHdpbmRvd1Njcm9sbC55O1xuICAgICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uW3Byb3BdID0gcGFyc2VJbnQocG9zaXRpb25bcHJvcF0sIDEwKSAtIHdpbmRvd1Njcm9sbC55O1xuICAgICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICBwb3NpdGlvbltwcm9wXSA9IHBhcnNlSW50KHBvc2l0aW9uW3Byb3BdLCAxMCkgKyB3aW5kb3dTY3JvbGwueDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uW3Byb3BdID0gcGFyc2VJbnQocG9zaXRpb25bcHJvcF0sIDEwKSAtIHdpbmRvd1Njcm9sbC54O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIHRoZSBtZW51IHN1cmZhY2UuXG4gICAqL1xuICBvcGVuKCkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2F2ZUZvY3VzKCk7XG5cbiAgICBpZiAoIXRoaXMucXVpY2tPcGVuXykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkdfT1BFTik7XG4gICAgfVxuXG4gICAgdGhpcy5hbmltYXRpb25SZXF1ZXN0SWRfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuT1BFTik7XG4gICAgICB0aGlzLmRpbWVuc2lvbnNfID0gdGhpcy5hZGFwdGVyXy5nZXRJbm5lckRpbWVuc2lvbnMoKTtcbiAgICAgIHRoaXMuYXV0b1Bvc2l0aW9uXygpO1xuICAgICAgaWYgKHRoaXMucXVpY2tPcGVuXykge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeU9wZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3BlbkFuaW1hdGlvbkVuZFRpbWVySWRfID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vcGVuQW5pbWF0aW9uRW5kVGltZXJJZF8gPSAwO1xuICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HX09QRU4pO1xuICAgICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5T3BlbigpO1xuICAgICAgICB9LCBudW1iZXJzLlRSQU5TSVRJT05fT1BFTl9EVVJBVElPTik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5pc09wZW5fID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIG1lbnUgc3VyZmFjZS5cbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGlmICghdGhpcy5xdWlja09wZW5fKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElOR19DTE9TRUQpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLk9QRU4pO1xuICAgICAgaWYgKHRoaXMucXVpY2tPcGVuXykge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8gPSAwO1xuICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HX0NMT1NFRCk7XG4gICAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDbG9zZSgpO1xuICAgICAgICB9LCBudW1iZXJzLlRSQU5TSVRJT05fQ0xPU0VfRFVSQVRJT04pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5pc09wZW5fID0gZmFsc2U7XG4gICAgdGhpcy5tYXliZVJlc3RvcmVGb2N1c18oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbGFzdCBmb2N1c2VkIGVsZW1lbnQgd2hlbiB0aGUgbWVudSBzdXJmYWNlIHdhcyBvcGVuZWQgc2hvdWxkIHJlZ2FpbiBmb2N1cywgaWYgdGhlIHVzZXIgaXNcbiAgICogZm9jdXNlZCBvbiBvciB3aXRoaW4gdGhlIG1lbnUgc3VyZmFjZSB3aGVuIGl0IGlzIGNsb3NlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIG1heWJlUmVzdG9yZUZvY3VzXygpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc0ZvY3VzZWQoKSB8fCB0aGlzLmFkYXB0ZXJfLmlzRWxlbWVudEluQ29udGFpbmVyKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlc3RvcmVGb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuXztcbiAgfVxuXG4gIC8qKlxuICAgKiBpc0Zpbml0ZSB0aGF0IGRvZXNuJ3QgZm9yY2UgY29udmVyc2lvbiB0byBudW1iZXIgdHlwZS5cbiAgICogRXF1aXZhbGVudCB0byBOdW1iZXIuaXNGaW5pdGUgaW4gRVMyMDE1LCBidXQgaXMgbm90IGluY2x1ZGVkIGluIElFMTEuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHR5cGVDaGVja2lzRmluaXRlXyhudW0pIHtcbiAgICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUobnVtKTtcbiAgfVxufVxuXG5leHBvcnQge01EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiwgQW5jaG9yTWFyZ2lufTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgTGlzdC4gUHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBtYW5hZ2luZyBmb2N1cy5cbiAqXG4gKiBBZGRpdGlvbmFsbHksIHByb3ZpZGVzIHR5cGUgaW5mb3JtYXRpb24gZm9yIHRoZSBhZGFwdGVyIHRvIHRoZSBDbG9zdXJlXG4gKiBjb21waWxlci5cbiAqXG4gKiBJbXBsZW1lbnQgdGhpcyBhZGFwdGVyIGZvciB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UgdG8gZGVsZWdhdGUgdXBkYXRlcyB0b1xuICogdGhlIGNvbXBvbmVudCBpbiB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UuIFNlZSBhcmNoaXRlY3R1cmUgZG9jdW1lbnRhdGlvblxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvY29kZS9hcmNoaXRlY3R1cmUubWRcbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ0xpc3RBZGFwdGVyIHtcbiAgLyoqIEByZXR1cm4ge251bWJlcn0gKi9cbiAgZ2V0TGlzdEl0ZW1Db3VudCgpIHt9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge251bWJlcn0gKi9cbiAgZ2V0Rm9jdXNlZEVsZW1lbnRJbmRleCgpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGluZGV4LCBhdHRyaWJ1dGUsIHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICAgKi9cbiAgcmVtb3ZlQXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGluZGV4LCBhdHRyaWJ1dGUpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBhZGRDbGFzc0ZvckVsZW1lbnRJbmRleChpbmRleCwgY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgcmVtb3ZlQ2xhc3NGb3JFbGVtZW50SW5kZXgoaW5kZXgsIGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogRm9jdXNlcyBsaXN0IGl0ZW0gYXQgdGhlIGluZGV4IHNwZWNpZmllZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqL1xuICBmb2N1c0l0ZW1BdEluZGV4KGluZGV4KSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0YWJpbmRleCB0byB0aGUgdmFsdWUgc3BlY2lmaWVkIGZvciBhbGwgYnV0dG9uL2EgZWxlbWVudCBjaGlsZHJlbiBvZlxuICAgKiB0aGUgbGlzdCBpdGVtIGF0IHRoZSBpbmRleCBzcGVjaWZpZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaXN0SXRlbUluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0YWJJbmRleFZhbHVlXG4gICAqL1xuICBzZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW4obGlzdEl0ZW1JbmRleCwgdGFiSW5kZXhWYWx1ZSkge31cblxuICAvKipcbiAgICogSWYgdGhlIGdpdmVuIGVsZW1lbnQgaGFzIGFuIGhyZWYsIGZvbGxvd3MgdGhlIGxpbmsuXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZVxuICAgKi9cbiAgZm9sbG93SHJlZihlbGUpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgcmFkaW8gYnV0dG9uIGlzIHByZXNlbnQgYXQgZ2l2ZW4gbGlzdCBpdGVtIGluZGV4LlxuICAgKi9cbiAgaGFzUmFkaW9BdEluZGV4KGluZGV4KSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGNoZWNrYm94IGlzIHByZXNlbnQgYXQgZ2l2ZW4gbGlzdCBpdGVtIGluZGV4LlxuICAgKi9cbiAgaGFzQ2hlY2tib3hBdEluZGV4KGluZGV4KSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGNoZWNrYm94IGluc2lkZSBhIGxpc3QgaXRlbSBpcyBjaGVja2VkLlxuICAgKi9cbiAgaXNDaGVja2JveENoZWNrZWRBdEluZGV4KGluZGV4KSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjaGVja2VkIHN0YXR1cyBvZiBjaGVja2JveCBvciByYWRpbyBhdCBnaXZlbiBsaXN0IGl0ZW0gaW5kZXguXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQ2hlY2tlZFxuICAgKi9cbiAgc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXgoaW5kZXgsIGlzQ2hlY2tlZCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDTGlzdEFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICBST09UOiAnbWRjLWxpc3QnLFxuICBMSVNUX0lURU1fQ0xBU1M6ICdtZGMtbGlzdC1pdGVtJyxcbiAgTElTVF9JVEVNX1NFTEVDVEVEX0NMQVNTOiAnbWRjLWxpc3QtaXRlbS0tc2VsZWN0ZWQnLFxuICBMSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTOiAnbWRjLWxpc3QtaXRlbS0tYWN0aXZhdGVkJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQVJJQV9PUklFTlRBVElPTjogJ2FyaWEtb3JpZW50YXRpb24nLFxuICBBUklBX09SSUVOVEFUSU9OX0hPUklaT05UQUw6ICdob3Jpem9udGFsJyxcbiAgQVJJQV9TRUxFQ1RFRDogJ2FyaWEtc2VsZWN0ZWQnLFxuICBBUklBX0NIRUNLRUQ6ICdhcmlhLWNoZWNrZWQnLFxuICBBUklBX0NIRUNLRURfUkFESU9fU0VMRUNUT1I6ICdbcm9sZT1cInJhZGlvXCJdW2FyaWEtY2hlY2tlZD1cInRydWVcIl0nLFxuICBSQURJT19TRUxFQ1RPUjogJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmRpc2FibGVkKScsXG4gIENIRUNLQk9YX1NFTEVDVE9SOiAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6ZGlzYWJsZWQpJyxcbiAgQ0hFQ0tCT1hfUkFESU9fU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpkaXNhYmxlZCksIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmRpc2FibGVkKScsXG4gIENISUxEX0VMRU1FTlRTX1RPX1RPR0dMRV9UQUJJTkRFWDogYC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTfSBidXR0b246bm90KDpkaXNhYmxlZCksXG4gIC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTfSBhYCxcbiAgRk9DVVNBQkxFX0NISUxEX0VMRU1FTlRTOiBgLiR7Y3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1N9IGJ1dHRvbjpub3QoOmRpc2FibGVkKSwgLiR7Y3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1N9IGEsXG4gIC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTfSBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpkaXNhYmxlZCksXG4gIC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTfSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpkaXNhYmxlZClgLFxuICBFTkFCTEVEX0lURU1TX1NFTEVDVE9SOiAnLm1kYy1saXN0LWl0ZW06bm90KC5tZGMtbGlzdC1pdGVtLS1kaXNhYmxlZCknLFxufTtcblxuZXhwb3J0IHtzdHJpbmdzLCBjc3NDbGFzc2VzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENMaXN0QWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtzdHJpbmdzLCBjc3NDbGFzc2VzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IEVMRU1FTlRTX0tFWV9BTExPV0VEX0lOID0gWydpbnB1dCcsICdidXR0b24nLCAndGV4dGFyZWEnLCAnc2VsZWN0J107XG5cbmNsYXNzIE1EQ0xpc3RGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDTGlzdEFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuXG4gICAqIHR5cGVzLlxuICAgKiBAcmV0dXJuIHshTURDTGlzdEFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENMaXN0QWRhcHRlcn0gKi8gKHtcbiAgICAgIGdldExpc3RJdGVtQ291bnQ6ICgpID0+IHt9LFxuICAgICAgZ2V0Rm9jdXNlZEVsZW1lbnRJbmRleDogKCkgPT4ge30sXG4gICAgICBzZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXg6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQXR0cmlidXRlRm9yRWxlbWVudEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGFkZENsYXNzRm9yRWxlbWVudEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGZvY3VzSXRlbUF0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuOiAoKSA9PiB7fSxcbiAgICAgIGZvbGxvd0hyZWY6ICgpID0+IHt9LFxuICAgICAgaGFzUmFkaW9BdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGhhc0NoZWNrYm94QXRJbmRleDogKCkgPT4ge30sXG4gICAgICBpc0NoZWNrYm94Q2hlY2tlZEF0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXg6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ0xpc3RBZGFwdGVyPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDTGlzdEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcbiAgICAvKioge2Jvb2xlYW59ICovXG4gICAgdGhpcy53cmFwRm9jdXNfID0gZmFsc2U7XG4gICAgLyoqIHtib29sZWFufSAqL1xuICAgIHRoaXMuaXNWZXJ0aWNhbF8gPSB0cnVlO1xuICAgIC8qKiB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gPSBmYWxzZTtcbiAgICAvKioge251bWJlcn0gKi9cbiAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gLTE7XG4gICAgLyoqIHtib29sZWFufSAqL1xuICAgIHRoaXMudXNlQWN0aXZhdGVkQ2xhc3NfID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcHJpdmF0ZSB3cmFwRm9jdXNfIHZhcmlhYmxlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAqL1xuICBzZXRXcmFwRm9jdXModmFsdWUpIHtcbiAgICB0aGlzLndyYXBGb2N1c18gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpc1ZlcnRpY2FsXyBwcml2YXRlIHZhcmlhYmxlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAqL1xuICBzZXRWZXJ0aWNhbE9yaWVudGF0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5pc1ZlcnRpY2FsXyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gcHJpdmF0ZSB2YXJpYWJsZS5cbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgc2V0U2luZ2xlU2VsZWN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5pc1NpbmdsZVNlbGVjdGlvbkxpc3RfID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdXNlQWN0aXZhdGVkQ2xhc3NfIHByaXZhdGUgdmFyaWFibGUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQWN0aXZhdGVkXG4gICAqL1xuICBzZXRVc2VBY3RpdmF0ZWRDbGFzcyh1c2VBY3RpdmF0ZWQpIHtcbiAgICB0aGlzLnVzZUFjdGl2YXRlZENsYXNzXyA9IHVzZUFjdGl2YXRlZDtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge251bWJlcn0gaW5kZXggKi9cbiAgc2V0U2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCkpIHJldHVybjtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0NoZWNrYm94QXRJbmRleChpbmRleCkpIHtcbiAgICAgIHRoaXMuc2V0QXJpYUF0dHJpYnV0ZXNGb3JDaGVja2JveF8oaW5kZXgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hZGFwdGVyXy5oYXNSYWRpb0F0SW5kZXgoaW5kZXgpKSB7XG4gICAgICB0aGlzLnNldEFyaWFBdHRyaWJ1dGVzRm9yUmFkaW9fKGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRBcmlhQXR0cmlidXRlc0ZvclNpbmdsZVNlbGVjdF8oaW5kZXgpO1xuICAgICAgdGhpcy5zZXRDbGFzc05hbWVzRm9yU2luZ2xlU2VsZWN0XyhpbmRleCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gPj0gMCAmJiB0aGlzLnNlbGVjdGVkSW5kZXhfICE9PSBpbmRleCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4XywgJ3RhYmluZGV4JywgLTEpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEluZGV4XyA9PT0gLTEgJiYgaW5kZXggIT09IDApIHtcbiAgICAgIC8vIElmIG5vIGxpc3QgaXRlbSB3YXMgc2VsZWN0ZWQgc2V0IGZpcnN0IGxpc3QgaXRlbSdzIHRhYmluZGV4IHRvIC0xLlxuICAgICAgLy8gR2VuZXJhbGx5LCB0YWJpbmRleCBpcyBzZXQgdG8gMCBvbiBmaXJzdCBsaXN0IGl0ZW0gb2YgbGlzdCB0aGF0IGhhcyBubyBwcmVzZWxlY3RlZCBpdGVtcy5cbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KDAsICd0YWJpbmRleCcsIC0xKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgJ3RhYmluZGV4JywgMCk7XG5cbiAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRBcmlhQXR0cmlidXRlc0ZvckNoZWNrYm94XyhpbmRleCkge1xuICAgIGNvbnN0IGFyaWFBdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuYWRhcHRlcl8uaXNDaGVja2JveENoZWNrZWRBdEluZGV4KGluZGV4KSA/ICd0cnVlJyA6ICdmYWxzZSc7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9DSEVDS0VELCBhcmlhQXR0cmlidXRlVmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0QXJpYUF0dHJpYnV0ZXNGb3JSYWRpb18oaW5kZXgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4XyA+PSAwKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXhfLCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgJ2ZhbHNlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9DSEVDS0VELCAndHJ1ZScpO1xuICB9XG5cbiAgLyoqXG4gICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICogQHByaXZhdGVcbiAgKi9cbiAgc2V0QXJpYUF0dHJpYnV0ZXNGb3JTaW5nbGVTZWxlY3RfKGluZGV4KSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gPj0gMCAmJiB0aGlzLnNlbGVjdGVkSW5kZXhfICE9PSBpbmRleCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4Xywgc3RyaW5ncy5BUklBX1NFTEVDVEVELCAnZmFsc2UnKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgc3RyaW5ncy5BUklBX1NFTEVDVEVELCAndHJ1ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0Q2xhc3NOYW1lc0ZvclNpbmdsZVNlbGVjdF8oaW5kZXgpIHtcbiAgICBsZXQgc2VsZWN0ZWRDbGFzc05hbWUgPSBjc3NDbGFzc2VzLkxJU1RfSVRFTV9TRUxFQ1RFRF9DTEFTUztcblxuICAgIGlmICh0aGlzLnVzZUFjdGl2YXRlZENsYXNzXykge1xuICAgICAgc2VsZWN0ZWRDbGFzc05hbWUgPSBjc3NDbGFzc2VzLkxJU1RfSVRFTV9BQ1RJVkFURURfQ0xBU1M7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gPj0gMCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXhfLCBzZWxlY3RlZENsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzc0ZvckVsZW1lbnRJbmRleChpbmRleCwgc2VsZWN0ZWRDbGFzc05hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzIGluIGhhbmRsZXIgZm9yIHRoZSBsaXN0IGl0ZW1zLlxuICAgKiBAcGFyYW0gZXZ0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaXN0SXRlbUluZGV4XG4gICAqL1xuICBoYW5kbGVGb2N1c0luKGV2dCwgbGlzdEl0ZW1JbmRleCkge1xuICAgIGlmIChsaXN0SXRlbUluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuKGxpc3RJdGVtSW5kZXgsIDApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1cyBvdXQgaGFuZGxlciBmb3IgdGhlIGxpc3QgaXRlbXMuXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcGFyYW0ge251bWJlcn0gbGlzdEl0ZW1JbmRleFxuICAgKi9cbiAgaGFuZGxlRm9jdXNPdXQoZXZ0LCBsaXN0SXRlbUluZGV4KSB7XG4gICAgaWYgKGxpc3RJdGVtSW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW4obGlzdEl0ZW1JbmRleCwgLTEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBLZXkgaGFuZGxlciBmb3IgdGhlIGxpc3QuXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzUm9vdExpc3RJdGVtXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaXN0SXRlbUluZGV4XG4gICAqL1xuICBoYW5kbGVLZXlkb3duKGV2dCwgaXNSb290TGlzdEl0ZW0sIGxpc3RJdGVtSW5kZXgpIHtcbiAgICBjb25zdCBhcnJvd0xlZnQgPSBldnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBldnQua2V5Q29kZSA9PT0gMzc7XG4gICAgY29uc3QgYXJyb3dVcCA9IGV2dC5rZXkgPT09ICdBcnJvd1VwJyB8fCBldnQua2V5Q29kZSA9PT0gMzg7XG4gICAgY29uc3QgYXJyb3dSaWdodCA9IGV2dC5rZXkgPT09ICdBcnJvd1JpZ2h0JyB8fCBldnQua2V5Q29kZSA9PT0gMzk7XG4gICAgY29uc3QgYXJyb3dEb3duID0gZXZ0LmtleSA9PT0gJ0Fycm93RG93bicgfHwgZXZ0LmtleUNvZGUgPT09IDQwO1xuICAgIGNvbnN0IGlzSG9tZSA9IGV2dC5rZXkgPT09ICdIb21lJyB8fCBldnQua2V5Q29kZSA9PT0gMzY7XG4gICAgY29uc3QgaXNFbmQgPSBldnQua2V5ID09PSAnRW5kJyB8fCBldnQua2V5Q29kZSA9PT0gMzU7XG4gICAgY29uc3QgaXNFbnRlciA9IGV2dC5rZXkgPT09ICdFbnRlcicgfHwgZXZ0LmtleUNvZGUgPT09IDEzO1xuICAgIGNvbnN0IGlzU3BhY2UgPSBldnQua2V5ID09PSAnU3BhY2UnIHx8IGV2dC5rZXlDb2RlID09PSAzMjtcblxuICAgIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldEZvY3VzZWRFbGVtZW50SW5kZXgoKTtcbiAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSkge1xuICAgICAgY3VycmVudEluZGV4ID0gbGlzdEl0ZW1JbmRleDtcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPCAwKSB7XG4gICAgICAgIC8vIElmIHRoaXMgZXZlbnQgZG9lc24ndCBoYXZlIGEgbWRjLWxpc3QtaXRlbSBhbmNlc3RvciBmcm9tIHRoZVxuICAgICAgICAvLyBjdXJyZW50IGxpc3QgKG5vdCBmcm9tIGEgc3VibGlzdCksIHJldHVybiBlYXJseS5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgodGhpcy5pc1ZlcnRpY2FsXyAmJiBhcnJvd0Rvd24pIHx8ICghdGhpcy5pc1ZlcnRpY2FsXyAmJiBhcnJvd1JpZ2h0KSkge1xuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgdGhpcy5mb2N1c05leHRFbGVtZW50KGN1cnJlbnRJbmRleCk7XG4gICAgfSBlbHNlIGlmICgodGhpcy5pc1ZlcnRpY2FsXyAmJiBhcnJvd1VwKSB8fCAoIXRoaXMuaXNWZXJ0aWNhbF8gJiYgYXJyb3dMZWZ0KSkge1xuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgdGhpcy5mb2N1c1ByZXZFbGVtZW50KGN1cnJlbnRJbmRleCk7XG4gICAgfSBlbHNlIGlmIChpc0hvbWUpIHtcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgIHRoaXMuZm9jdXNGaXJzdEVsZW1lbnQoKTtcbiAgICB9IGVsc2UgaWYgKGlzRW5kKSB7XG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICB0aGlzLmZvY3VzTGFzdEVsZW1lbnQoKTtcbiAgICB9IGVsc2UgaWYgKGlzRW50ZXIgfHwgaXNTcGFjZSkge1xuICAgICAgaWYgKGlzUm9vdExpc3RJdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2luZ2xlU2VsZWN0aW9uTGlzdF8pIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgc3BhY2Uga2V5IHdhcyBwcmVzc2VkIG9uIHRoZSBsaXN0IGl0ZW0gb3IgYSBjaGlsZCBlbGVtZW50LlxuICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhc0NoZWNrYm94T3JSYWRpbyA9IHRoaXMuaGFzQ2hlY2tib3hPclJhZGlvQXRJbmRleF8obGlzdEl0ZW1JbmRleCk7XG4gICAgICAgIGlmIChoYXNDaGVja2JveE9yUmFkaW8pIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUNoZWNrYm94T3JSYWRpb0F0SW5kZXhfKGxpc3RJdGVtSW5kZXgpO1xuICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gfHwgaGFzQ2hlY2tib3hPclJhZGlvKSB7XG4gICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4KGN1cnJlbnRJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFeHBsaWNpdGx5IGFjdGl2YXRlIGxpbmtzLCBzaW5jZSB3ZSdyZSBwcmV2ZW50aW5nIGRlZmF1bHQgb24gRW50ZXIsIGFuZCBTcGFjZSBkb2Vzbid0IGFjdGl2YXRlIHRoZW0uXG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZm9sbG93SHJlZihjdXJyZW50SW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGljayBoYW5kbGVyIGZvciB0aGUgbGlzdC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdG9nZ2xlQ2hlY2tib3hcbiAgICovXG4gIGhhbmRsZUNsaWNrKGluZGV4LCB0b2dnbGVDaGVja2JveCkge1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybjtcblxuICAgIGlmICh0b2dnbGVDaGVja2JveCkge1xuICAgICAgdGhpcy50b2dnbGVDaGVja2JveE9yUmFkaW9BdEluZGV4XyhpbmRleCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNTaW5nbGVTZWxlY3Rpb25MaXN0XyB8fCB0aGlzLmhhc0NoZWNrYm94T3JSYWRpb0F0SW5kZXhfKGluZGV4KSkge1xuICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlcyB0aGF0IHByZXZlbnREZWZhdWx0IGlzIG9ubHkgY2FsbGVkIGlmIHRoZSBjb250YWluaW5nIGVsZW1lbnQgZG9lc24ndFxuICAgKiBjb25zdW1lIHRoZSBldmVudCwgYW5kIGl0IHdpbGwgY2F1c2UgYW4gdW5pbnRlbmRlZCBzY3JvbGwuXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJldmVudERlZmF1bHRFdmVudF8oZXZ0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IGAke2V2dC50YXJnZXQudGFnTmFtZX1gLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKEVMRU1FTlRTX0tFWV9BTExPV0VEX0lOLmluZGV4T2YodGFnTmFtZSkgPT09IC0xKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgbmV4dCBlbGVtZW50IG9uIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICovXG4gIGZvY3VzTmV4dEVsZW1lbnQoaW5kZXgpIHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpO1xuICAgIGxldCBuZXh0SW5kZXggPSBpbmRleCArIDE7XG4gICAgaWYgKG5leHRJbmRleCA+PSBjb3VudCkge1xuICAgICAgaWYgKHRoaXMud3JhcEZvY3VzXykge1xuICAgICAgICBuZXh0SW5kZXggPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGJlY2F1c2UgbGFzdCBpdGVtIGlzIGFscmVhZHkgZm9jdXNlZC5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgobmV4dEluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIHRoZSBwcmV2aW91cyBlbGVtZW50IG9uIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICovXG4gIGZvY3VzUHJldkVsZW1lbnQoaW5kZXgpIHtcbiAgICBsZXQgcHJldkluZGV4ID0gaW5kZXggLSAxO1xuICAgIGlmIChwcmV2SW5kZXggPCAwKSB7XG4gICAgICBpZiAodGhpcy53cmFwRm9jdXNfKSB7XG4gICAgICAgIHByZXZJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpIC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBlYXJseSBiZWNhdXNlIGZpcnN0IGl0ZW0gaXMgYWxyZWFkeSBmb2N1c2VkLlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleChwcmV2SW5kZXgpO1xuICB9XG5cbiAgZm9jdXNGaXJzdEVsZW1lbnQoKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpID4gMCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KDApO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzTGFzdEVsZW1lbnQoKSB7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCkgLSAxO1xuICAgIGlmIChsYXN0SW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KGxhc3RJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgY2hlY2tib3ggb3IgcmFkaW8gYXQgZ2l2ZSBpbmRleC4gUmFkaW8gZG9lc24ndCBjaGFuZ2UgdGhlIGNoZWNrZWQgc3RhdGUgaWYgaXQgaXMgYWxyZWFkeSBjaGVja2VkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRvZ2dsZUNoZWNrYm94T3JSYWRpb0F0SW5kZXhfKGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLmhhc0NoZWNrYm94T3JSYWRpb0F0SW5kZXhfKGluZGV4KSkgcmV0dXJuO1xuXG4gICAgbGV0IGlzQ2hlY2tlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzQ2hlY2tib3hBdEluZGV4KGluZGV4KSkge1xuICAgICAgaXNDaGVja2VkID0gIXRoaXMuYWRhcHRlcl8uaXNDaGVja2JveENoZWNrZWRBdEluZGV4KGluZGV4KTtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4KGluZGV4LCBpc0NoZWNrZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm4gdHJ1ZSBpZiBsaXN0IGl0ZW0gY29udGFpbnMgY2hlY2tib3ggb3IgcmFkaW8gaW5wdXQgYXQgZ2l2ZW4gaW5kZXguXG4gICAqL1xuICBoYXNDaGVja2JveE9yUmFkaW9BdEluZGV4XyhpbmRleCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmhhc0NoZWNrYm94QXRJbmRleChpbmRleCkgfHwgdGhpcy5hZGFwdGVyXy5oYXNSYWRpb0F0SW5kZXgoaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0xpc3RGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHtNRENNZW51QWRhcHRlcn0gZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5nc30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtNRENNZW51U3VyZmFjZUZvdW5kYXRpb259IGZyb20gJ0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDTGlzdEZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2xpc3QvZm91bmRhdGlvbic7XG5cbmNvbnN0IEVMRU1FTlRTX0tFWV9BTExPV0VEX0lOID0gWydpbnB1dCcsICdidXR0b24nLCAndGV4dGFyZWEnLCAnc2VsZWN0JywgJ2EnXTtcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDTWVudUFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENNZW51Rm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVte2Nzc0NsYXNzZXN9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAc2VlIE1EQ01lbnVBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ01lbnVBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDTWVudUFkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzc1RvRWxlbWVudEF0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3NGcm9tRWxlbWVudEF0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgYWRkQXR0cmlidXRlVG9FbGVtZW50QXRJbmRleDogKCkgPT4ge30sXG4gICAgICByZW1vdmVBdHRyaWJ1dGVGcm9tRWxlbWVudEF0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgZWxlbWVudENvbnRhaW5zQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgY2xvc2VTdXJmYWNlOiAoKSA9PiB7fSxcbiAgICAgIGdldEVsZW1lbnRJbmRleDogKCkgPT4ge30sXG4gICAgICBnZXRQYXJlbnRFbGVtZW50OiAoKSA9PiB7fSxcbiAgICAgIGdldFNlbGVjdGVkRWxlbWVudEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeVNlbGVjdGVkOiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0geyFNRENNZW51QWRhcHRlcn0gYWRhcHRlciAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENNZW51Rm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfID0gMDtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXykge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXyk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5jbG9zZVN1cmZhY2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVyIGZ1bmN0aW9uIGZvciB0aGUga2V5ZG93biBldmVudHMuXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZUtleWRvd24oZXZ0KSB7XG4gICAgY29uc3Qge2tleSwga2V5Q29kZX0gPSBldnQ7XG5cbiAgICBjb25zdCBpc1NwYWNlID0ga2V5ID09PSAnU3BhY2UnIHx8IGtleUNvZGUgPT09IDMyO1xuICAgIGNvbnN0IGlzRW50ZXIgPSBrZXkgPT09ICdFbnRlcicgfHwga2V5Q29kZSA9PT0gMTM7XG4gICAgY29uc3QgaXNUYWIgPSBrZXkgPT09ICdUYWInIHx8IGtleUNvZGUgPT09IDk7XG5cbiAgICBpZiAoaXNTcGFjZSB8fCBpc0VudGVyKSB7XG4gICAgICB0aGlzLmhhbmRsZUFjdGlvbl8oZXZ0KTtcbiAgICB9IGVsc2UgaWYgKGlzVGFiKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmNsb3NlU3VyZmFjZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVyIGZ1bmN0aW9uIGZvciB0aGUgY2xpY2sgZXZlbnRzLlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqL1xuICBoYW5kbGVDbGljayhldnQpIHtcbiAgICB0aGlzLmhhbmRsZUFjdGlvbl8oZXZ0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21iaW5lZCBhY3Rpb24gaGFuZGxpbmcgZm9yIGNsaWNrL2tleXByZXNzIGV2ZW50cy5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlQWN0aW9uXyhldnQpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IHRoaXMuZ2V0TGlzdEl0ZW1fKC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovIChldnQudGFyZ2V0KSk7XG4gICAgaWYgKGxpc3RJdGVtKSB7XG4gICAgICB0aGlzLmhhbmRsZVNlbGVjdGlvbihsaXN0SXRlbSk7XG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgZm9yIGEgc2VsZWN0ZWQgbGlzdCBpdGVtLlxuICAgKiBAcGFyYW0gez9IVE1MRWxlbWVudH0gbGlzdEl0ZW1cbiAgICovXG4gIGhhbmRsZVNlbGVjdGlvbihsaXN0SXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRFbGVtZW50SW5kZXgobGlzdEl0ZW0pO1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeVNlbGVjdGVkKHtpbmRleH0pO1xuICAgIHRoaXMuYWRhcHRlcl8uY2xvc2VTdXJmYWNlKCk7XG5cbiAgICAvLyBXYWl0IGZvciB0aGUgbWVudSB0byBjbG9zZSBiZWZvcmUgYWRkaW5nL3JlbW92aW5nIGNsYXNzZXMgdGhhdCBhZmZlY3Qgc3R5bGVzLlxuICAgIHRoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0aW9uR3JvdXAgPSB0aGlzLmdldFNlbGVjdGlvbkdyb3VwXyhsaXN0SXRlbSk7XG5cbiAgICAgIGlmIChzZWxlY3Rpb25Hcm91cCAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdGlvbkdyb3VwXygvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKHNlbGVjdGlvbkdyb3VwKSwgaW5kZXgpO1xuICAgICAgfVxuICAgIH0sIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5udW1iZXJzLlRSQU5TSVRJT05fQ0xPU0VfRFVSQVRJT04pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdG9nZ2xpbmcgdGhlIHNlbGVjdGVkIGNsYXNzZXMgaW4gYSBzZWxlY3Rpb24gZ3JvdXAgd2hlbiBhXG4gICAqIHNlbGVjdGlvbiBpcyBtYWRlLlxuICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gc2VsZWN0aW9uR3JvdXBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBzZWxlY3RlZCBpbmRleCB2YWx1ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlU2VsZWN0aW9uR3JvdXBfKHNlbGVjdGlvbkdyb3VwLCBpbmRleCkge1xuICAgIC8vIERlLXNlbGVjdCB0aGUgcHJldmlvdXMgc2VsZWN0aW9uIGluIHRoaXMgZ3JvdXAuXG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2VsZWN0ZWRFbGVtZW50SW5kZXgoc2VsZWN0aW9uR3JvdXApO1xuICAgIGlmIChzZWxlY3RlZEluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQXR0cmlidXRlRnJvbUVsZW1lbnRBdEluZGV4KHNlbGVjdGVkSW5kZXgsIHN0cmluZ3MuQVJJQV9TRUxFQ1RFRF9BVFRSKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudEF0SW5kZXgoc2VsZWN0ZWRJbmRleCwgY3NzQ2xhc3Nlcy5NRU5VX1NFTEVDVEVEX0xJU1RfSVRFTSk7XG4gICAgfVxuICAgIC8vIFNlbGVjdCB0aGUgbmV3IGxpc3QgaXRlbSBpbiB0aGlzIGdyb3VwLlxuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3NUb0VsZW1lbnRBdEluZGV4KGluZGV4LCBjc3NDbGFzc2VzLk1FTlVfU0VMRUNURURfTElTVF9JVEVNKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZEF0dHJpYnV0ZVRvRWxlbWVudEF0SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9TRUxFQ1RFRF9BVFRSLCAndHJ1ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBhcmVudCBzZWxlY3Rpb24gZ3JvdXAgb2YgYW4gZWxlbWVudCBpZiBvbmUgZXhpc3RzLlxuICAgKiBAcGFyYW0gbGlzdEl0ZW1cbiAgICogQHJldHVybiB7P0hUTUxFbGVtZW50fSBwYXJlbnQgc2VsZWN0aW9uIGdyb3VwIGVsZW1lbnQgb3IgbnVsbC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFNlbGVjdGlvbkdyb3VwXyhsaXN0SXRlbSkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLmFkYXB0ZXJfLmdldFBhcmVudEVsZW1lbnQobGlzdEl0ZW0pO1xuICAgIGxldCBpc0dyb3VwID0gdGhpcy5hZGFwdGVyXy5lbGVtZW50Q29udGFpbnNDbGFzcyhwYXJlbnQsIGNzc0NsYXNzZXMuTUVOVV9TRUxFQ1RJT05fR1JPVVApO1xuXG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGFuY2VzdG9ycyB1bnRpbCB3ZSBmaW5kIHRoZSBncm91cCBvciBnZXQgdG8gdGhlIGxpc3QuXG4gICAgd2hpbGUgKCFpc0dyb3VwICYmICF0aGlzLmFkYXB0ZXJfLmVsZW1lbnRDb250YWluc0NsYXNzKHBhcmVudCwgTURDTGlzdEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5ST09UKSkge1xuICAgICAgcGFyZW50ID0gdGhpcy5hZGFwdGVyXy5nZXRQYXJlbnRFbGVtZW50KHBhcmVudCk7XG4gICAgICBpc0dyb3VwID0gdGhpcy5hZGFwdGVyXy5lbGVtZW50Q29udGFpbnNDbGFzcyhwYXJlbnQsIGNzc0NsYXNzZXMuTUVOVV9TRUxFQ1RJT05fR1JPVVApO1xuICAgIH1cblxuICAgIGlmIChpc0dyb3VwKSB7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgZmlyc3QgYW5jZXN0b3Igd2l0aCB0aGUgbWRjLWxpc3QtaXRlbSBjbGFzcy5cbiAgICogQHBhcmFtIHs/SFRNTEVsZW1lbnR9IHRhcmdldFxuICAgKiBAcmV0dXJuIHs/SFRNTEVsZW1lbnR9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRMaXN0SXRlbV8odGFyZ2V0KSB7XG4gICAgbGV0IGlzTGlzdEl0ZW0gPSB0aGlzLmFkYXB0ZXJfLmVsZW1lbnRDb250YWluc0NsYXNzKHRhcmdldCwgTURDTGlzdEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MpO1xuXG4gICAgd2hpbGUgKCFpc0xpc3RJdGVtKSB7XG4gICAgICB0YXJnZXQgPSB0aGlzLmFkYXB0ZXJfLmdldFBhcmVudEVsZW1lbnQodGFyZ2V0KTtcbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgaXNMaXN0SXRlbSA9IHRoaXMuYWRhcHRlcl8uZWxlbWVudENvbnRhaW5zQ2xhc3ModGFyZ2V0LCBNRENMaXN0Rm91bmRhdGlvbi5jc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUyk7XG4gICAgICB9IGVsc2UgeyAvLyB0YXJnZXQgaGFzIG5vIHBhcmVudCBlbGVtZW50LlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgdGhhdCBwcmV2ZW50RGVmYXVsdCBpcyBvbmx5IGNhbGxlZCBpZiB0aGUgY29udGFpbmluZyBlbGVtZW50IGRvZXNuJ3RcbiAgICogY29uc3VtZSB0aGUgZXZlbnQsIGFuZCBpdCB3aWxsIGNhdXNlIGFuIHVuaW50ZW5kZWQgc2Nyb2xsLlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKGV2dC50YXJnZXQpO1xuICAgIGNvbnN0IHRhZ05hbWUgPSBgJHt0YXJnZXQudGFnTmFtZX1gLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKEVMRU1FTlRTX0tFWV9BTExPV0VEX0lOLmluZGV4T2YodGFnTmFtZSkgPT09IC0xKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtNRENNZW51Rm91bmRhdGlvbn07XG4iLCI8dGVtcGxhdGU+XG4gIDxtZGMtbWVudS1zdXJmYWNlXG4gICAgcmVmPVwicm9vdFwiXG4gICAgOnF1aWNrLW9wZW49XCJxdWlja09wZW5cIlxuICAgIDpvcGVuPVwib3BlblwiXG4gICAgQGNoYW5nZT1cIm9uQ2hhbmdlXCJcbiAgICBAY2xpY2submF0aXZlPVwiaGFuZGxlQ2xpY2tcIlxuICA+XG4gICAgPG1kYy1saXN0IHJlZj1cImxpc3RcIj4gPHNsb3QgLz4gPC9tZGMtbGlzdD5cbiAgPC9tZGMtbWVudS1zdXJmYWNlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IE1EQ01lbnVGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL21lbnUvZm91bmRhdGlvbidcbmltcG9ydCB7IGVtaXRDdXN0b21FdmVudCB9IGZyb20gJy4uL2Jhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1tZW51JyxcbiAgbW9kZWw6IHtcbiAgICBwcm9wOiAnb3BlbicsXG4gICAgZXZlbnQ6ICdjaGFuZ2UnXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgb3BlbjogW0Jvb2xlYW4sIE9iamVjdF0sXG4gICAgJ3F1aWNrLW9wZW4nOiBCb29sZWFuLFxuICAgICdhbmNob3ItY29ybmVyJzogW1N0cmluZywgTnVtYmVyXSxcbiAgICAnYW5jaG9yLW1hcmdpbic6IE9iamVjdFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH0sXG4gIHByb3ZpZGUoKSB7XG4gICAgcmV0dXJuIHsgbWRjTWVudTogdGhpcyB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgLy8gYW5jaG9yQ29ybmVyKG52KSB7XG4gICAgLy8gICB0aGlzLmZvdW5kYXRpb24uc2V0QW5jaG9yQ29ybmVyKE51bWJlcihudikpXG4gICAgLy8gfSxcbiAgICAvLyBhbmNob3JNYXJnaW4obnYpIHtcbiAgICAvLyAgIHRoaXMuZm91bmRhdGlvbi5zZXRBbmNob3JNYXJnaW4obnYpXG4gICAgLy8gfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuX3ByZXZpb3VzRm9jdXMgPSB1bmRlZmluZWRcblxuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENNZW51Rm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzc1RvRWxlbWVudEF0SW5kZXg6IChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLml0ZW1zXG4gICAgICAgIGxpc3RbaW5kZXhdLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgfSxcbiAgICAgIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnRBdEluZGV4OiAoaW5kZXgsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5pdGVtc1xuICAgICAgICBsaXN0W2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgICAgIH0sXG4gICAgICBhZGRBdHRyaWJ1dGVUb0VsZW1lbnRBdEluZGV4OiAoaW5kZXgsIGF0dHIsIHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLml0ZW1zXG4gICAgICAgIGxpc3RbaW5kZXhdLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgICAgIH0sXG4gICAgICByZW1vdmVBdHRyaWJ1dGVGcm9tRWxlbWVudEF0SW5kZXg6IChpbmRleCwgYXR0cikgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5pdGVtc1xuICAgICAgICBsaXN0W2luZGV4XS5yZW1vdmVBdHRyaWJ1dGUoYXR0cilcbiAgICAgIH0sXG4gICAgICBlbGVtZW50Q29udGFpbnNDbGFzczogKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT5cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcbiAgICAgIGNsb3NlU3VyZmFjZTogKCkgPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBmYWxzZSlcbiAgICAgIH0sXG4gICAgICBnZXRFbGVtZW50SW5kZXg6IGVsZW1lbnQgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5pbmRleE9mKGVsZW1lbnQpXG4gICAgICB9LFxuICAgICAgZ2V0UGFyZW50RWxlbWVudDogZWxlbWVudCA9PiBlbGVtZW50LnBhcmVudEVsZW1lbnQsXG4gICAgICBnZXRTZWxlY3RlZEVsZW1lbnRJbmRleDogc2VsZWN0aW9uR3JvdXAgPT4ge1xuICAgICAgICBjb25zdCBpZHggPSB0aGlzLml0ZW1zLmluZGV4T2YoXG4gICAgICAgICAgc2VsZWN0aW9uR3JvdXAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuJHtNRENNZW51Rm91bmRhdGlvbi5jc3NDbGFzc2VzLk1FTlVfU0VMRUNURURfTElTVF9JVEVNfWBcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIGlkeFxuICAgICAgfSxcbiAgICAgIG5vdGlmeVNlbGVjdGVkOiBldnREYXRhID0+IHtcbiAgICAgICAgZW1pdEN1c3RvbUV2ZW50KHRoaXMuJGVsLCBNRENNZW51Rm91bmRhdGlvbi5zdHJpbmdzLlNFTEVDVEVEX0VWRU5ULCB7XG4gICAgICAgICAgaW5kZXg6IGV2dERhdGEuaW5kZXgsXG4gICAgICAgICAgaXRlbTogdGhpcy5pdGVtc1tldnREYXRhLmluZGV4XVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIHtcbiAgICAgICAgICBpbmRleDogZXZ0RGF0YS5pbmRleCxcbiAgICAgICAgICBpdGVtOiB0aGlzLml0ZW1zW2V2dERhdGEuaW5kZXhdXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLl9wcmV2aW91c0ZvY3VzID0gbnVsbFxuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGl0ZW1zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHJlZnMubGlzdC5saXN0RWxlbWVudHNcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZUNsaWNrKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUNsaWNrKGV2dClcbiAgICB9LFxuICAgIG9uQ2hhbmdlKGl0ZW0pIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGl0ZW0pXG4gICAgfVxuICAgIC8vIG9uT3Blbl8odmFsdWUpIHtcbiAgICAvLyAgIGlmICh2YWx1ZSkge1xuICAgIC8vICAgICB0aGlzLmZvdW5kYXRpb24ub3Blbih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB2b2lkIDApXG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB0aGlzLmZvdW5kYXRpb24uY2xvc2UoKVxuICAgIC8vICAgfVxuICAgIC8vIH0sXG4gICAgLy8gc2hvdyhvcHRpb25zKSB7XG4gICAgLy8gICB0aGlzLmZvdW5kYXRpb24ub3BlbihvcHRpb25zKVxuICAgIC8vIH0sXG4gICAgLy8gaGlkZSgpIHtcbiAgICAvLyAgIHRoaXMuZm91bmRhdGlvbi5jbG9zZSgpXG4gICAgLy8gfSxcbiAgICAvLyBpc09wZW4oKSB7XG4gICAgLy8gICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uID8gdGhpcy5mb3VuZGF0aW9uLmlzT3BlbigpIDogZmFsc2VcbiAgICAvLyB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAdHlwZSB7c3RyaW5nfHVuZGVmaW5lZH0gKi9cbmxldCBzdG9yZWRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWVfO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGNvcnJlY3QgdHJhbnNmb3JtIHByb3BlcnR5IHRvIHVzZSBvbiB0aGUgY3VycmVudCBicm93c2VyLlxuICogQHBhcmFtIHshV2luZG93fSBnbG9iYWxPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWUoZ2xvYmFsT2JqLCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBpZiAoc3RvcmVkVHJhbnNmb3JtUHJvcGVydHlOYW1lXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgIGNvbnN0IGVsID0gZ2xvYmFsT2JqLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRyYW5zZm9ybVByb3BlcnR5TmFtZSA9ICgndHJhbnNmb3JtJyBpbiBlbC5zdHlsZSA/ICd0cmFuc2Zvcm0nIDogJ3dlYmtpdFRyYW5zZm9ybScpO1xuICAgIHN0b3JlZFRyYW5zZm9ybVByb3BlcnR5TmFtZV8gPSB0cmFuc2Zvcm1Qcm9wZXJ0eU5hbWU7XG4gIH1cblxuICByZXR1cm4gc3RvcmVkVHJhbnNmb3JtUHJvcGVydHlOYW1lXztcbn1cblxuZXhwb3J0IHtnZXRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWV9O1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiXG4gICAgY2xhc3M9XCJtZGMtbWVudSBtZGMtbWVudS1zdXJmYWNlXCJcbiAgICBAa2V5ZG93bj1cImhhbmRsZUtleWRvd25cIlxuICAgIEBNRENNZW51U3VyZmFjZTpvcGVuZWQ9XCJyZWdpc3RlckJvZHlDbGlja0xpc3RlbmVyXCJcbiAgICBATURDTWVudVN1cmZhY2U6Y2xvc2VkPVwiZGVyZWdpc3RlckJvZHlDbGlja0xpc3RlbmVyXCJcbiAgPlxuICAgIDxzbG90IC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvZm91bmRhdGlvbidcbmltcG9ydCB7IGVtaXRDdXN0b21FdmVudCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJ0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLW1lbnUtc3VyZmFjZScsXG4gIG1vZGVsOiB7XG4gICAgcHJvcDogJ29wZW4nLFxuICAgIGV2ZW50OiAnY2hhbmdlJ1xuICB9LFxuICBwcm9wczoge1xuICAgIG9wZW46IFtCb29sZWFuLCBPYmplY3RdLFxuICAgICdxdWljay1vcGVuJzogQm9vbGVhbixcbiAgICAnYW5jaG9yLWNvcm5lcic6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgJ2FuY2hvci1tYXJnaW4nOiBPYmplY3RcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuICBwcm92aWRlKCkge1xuICAgIHJldHVybiB7IG1kY01lbnU6IHRoaXMgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIG9wZW46ICdvbk9wZW5fJyxcbiAgICBxdWlja09wZW4obnYpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRRdWlja09wZW4obnYpXG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuX3ByZXZpb3VzRm9jdXMgPSB1bmRlZmluZWRcblxuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24oXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpLFxuICAgICAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZGVsZXRlKHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lKSxcbiAgICAgICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgICAgIGhhc0FuY2hvcjogKCkgPT4gISF0aGlzLmFuY2hvckVsZW1lbnQsXG4gICAgICAgICAgbm90aWZ5Q2xvc2U6ICgpID0+IHtcbiAgICAgICAgICAgIGVtaXRDdXN0b21FdmVudChcbiAgICAgICAgICAgICAgdGhpcy4kZWwsXG4gICAgICAgICAgICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5zdHJpbmdzLkNMT1NFRF9FVkVOVCxcbiAgICAgICAgICAgICAge31cbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZmFsc2UpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBub3RpZnlPcGVuOiAoKSA9PiB7XG4gICAgICAgICAgICBlbWl0Q3VzdG9tRXZlbnQoXG4gICAgICAgICAgICAgIHRoaXMuJGVsLFxuICAgICAgICAgICAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uc3RyaW5ncy5PUEVORURfRVZFTlQsXG4gICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRydWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc0VsZW1lbnRJbkNvbnRhaW5lcjogZWwgPT4gdGhpcy4kZWwgPT09IGVsIHx8IHRoaXMuJGVsLmNvbnRhaW5zKGVsKSxcbiAgICAgICAgICBpc1J0bDogKCkgPT5cbiAgICAgICAgICAgIGdldENvbXB1dGVkU3R5bGUodGhpcy4kZWwpLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJyxcbiAgICAgICAgICBzZXRUcmFuc2Zvcm1PcmlnaW46IG9yaWdpbiA9PiB7XG4gICAgICAgICAgICB0aGlzLiRlbC5zdHlsZVtcbiAgICAgICAgICAgICAgYCR7dXRpbC5nZXRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWUod2luZG93KX0tb3JpZ2luYFxuICAgICAgICAgICAgXSA9IG9yaWdpblxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5nZXRGb2N1c0FkYXB0ZXJNZXRob2RzKCksXG4gICAgICAgIHRoaXMuZ2V0RGltZW5zaW9uQWRhcHRlck1ldGhvZHMoKVxuICAgICAgKVxuICAgIClcblxuICAgIGlmIChcbiAgICAgIHRoaXMuJGVsLnBhcmVudEVsZW1lbnQgJiZcbiAgICAgIHRoaXMuJGVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFxuICAgICAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTkNIT1JcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHRoaXMuYW5jaG9yRWxlbWVudCA9IHRoaXMuJGVsLnBhcmVudEVsZW1lbnRcbiAgICB9XG5cbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5fcHJldmlvdXNGb2N1cyA9IG51bGxcblxuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlQm9keUNsaWNrKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUJvZHlDbGljayhldnQpXG4gICAgfSxcblxuICAgIHJlZ2lzdGVyQm9keUNsaWNrTGlzdGVuZXIoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVCb2R5Q2xpY2spXG4gICAgfSxcbiAgICBkZXJlZ2lzdGVyQm9keUNsaWNrTGlzdGVuZXIoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVCb2R5Q2xpY2spXG4gICAgfSxcbiAgICBoYW5kbGVLZXlkb3duKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUtleWRvd24oZXZ0KVxuICAgIH0sXG4gICAgZ2V0Rm9jdXNBZGFwdGVyTWV0aG9kcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzRm9jdXNlZDogKCkgPT4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy4kZWwsXG4gICAgICAgIHNhdmVGb2N1czogKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJldmlvdXNGb2N1c18gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3RvcmVGb2N1czogKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLiRlbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlvdXNGb2N1c18gJiYgdGhpcy5wcmV2aW91c0ZvY3VzXy5mb2N1cykge1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzRm9jdXNfLmZvY3VzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGlzRmlyc3RFbGVtZW50Rm9jdXNlZDogKCkgPT5cbiAgICAgICAgICB0aGlzLmZpcnN0Rm9jdXNhYmxlRWxlbWVudF8gJiZcbiAgICAgICAgICB0aGlzLmZpcnN0Rm9jdXNhYmxlRWxlbWVudF8gPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsXG4gICAgICAgIGlzTGFzdEVsZW1lbnRGb2N1c2VkOiAoKSA9PlxuICAgICAgICAgIHRoaXMubGFzdEZvY3VzYWJsZUVsZW1lbnRfICYmXG4gICAgICAgICAgdGhpcy5sYXN0Rm9jdXNhYmxlRWxlbWVudF8gPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsXG4gICAgICAgIGZvY3VzRmlyc3RFbGVtZW50OiAoKSA9PlxuICAgICAgICAgIHRoaXMuZmlyc3RGb2N1c2FibGVFbGVtZW50XyAmJlxuICAgICAgICAgIHRoaXMuZmlyc3RGb2N1c2FibGVFbGVtZW50Xy5mb2N1cyAmJlxuICAgICAgICAgIHRoaXMuZmlyc3RGb2N1c2FibGVFbGVtZW50Xy5mb2N1cygpLFxuICAgICAgICBmb2N1c0xhc3RFbGVtZW50OiAoKSA9PlxuICAgICAgICAgIHRoaXMubGFzdEZvY3VzYWJsZUVsZW1lbnRfICYmXG4gICAgICAgICAgdGhpcy5sYXN0Rm9jdXNhYmxlRWxlbWVudF8uZm9jdXMgJiZcbiAgICAgICAgICB0aGlzLmxhc3RGb2N1c2FibGVFbGVtZW50Xy5mb2N1cygpXG4gICAgICB9XG4gICAgfSxcbiAgICBnZXREaW1lbnNpb25BZGFwdGVyTWV0aG9kcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGdldElubmVyRGltZW5zaW9uczogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy4kZWwub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuJGVsLm9mZnNldEhlaWdodFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0QW5jaG9yRGltZW5zaW9uczogKCkgPT5cbiAgICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQgJiYgdGhpcy5hbmNob3JFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBnZXRXaW5kb3dEaW1lbnNpb25zOiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldEJvZHlEaW1lbnNpb25zOiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0V2luZG93U2Nyb2xsOiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfVxuICAgICAgICB9LFxuICAgICAgICBzZXRQb3NpdGlvbjogcG9zaXRpb24gPT4ge1xuICAgICAgICAgIHRoaXMuJGVsLnN0eWxlLmxlZnQgPSAnbGVmdCcgaW4gcG9zaXRpb24gPyBwb3NpdGlvbi5sZWZ0IDogbnVsbFxuICAgICAgICAgIHRoaXMuJGVsLnN0eWxlLnJpZ2h0ID0gJ3JpZ2h0JyBpbiBwb3NpdGlvbiA/IHBvc2l0aW9uLnJpZ2h0IDogbnVsbFxuICAgICAgICAgIHRoaXMuJGVsLnN0eWxlLnRvcCA9ICd0b3AnIGluIHBvc2l0aW9uID8gcG9zaXRpb24udG9wIDogbnVsbFxuICAgICAgICAgIHRoaXMuJGVsLnN0eWxlLmJvdHRvbSA9ICdib3R0b20nIGluIHBvc2l0aW9uID8gcG9zaXRpb24uYm90dG9tIDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBzZXRNYXhIZWlnaHQ6IGhlaWdodCA9PiB7XG4gICAgICAgICAgdGhpcy4kZWwuc3R5bGUubWF4SGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25PcGVuXyh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uc3RyaW5ncy5GT0NVU0FCTEVfRUxFTUVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmZpcnN0Rm9jdXNhYmxlRWxlbWVudF8gPVxuICAgICAgICAgIGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCA+IDAgPyBmb2N1c2FibGVFbGVtZW50c1swXSA6IG51bGxcbiAgICAgICAgdGhpcy5sYXN0Rm9jdXNhYmxlRWxlbWVudF8gPVxuICAgICAgICAgIGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB0aGlzLmZvdW5kYXRpb24ub3BlbigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uY2xvc2UoKVxuICAgICAgfVxuICAgIH0sXG4gICAgaG9pc3RNZW51VG9Cb2R5KCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLiRlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuJGVsKSlcbiAgICAgIHRoaXMuc2V0SXNIb2lzdGVkKHRydWUpXG4gICAgfSxcbiAgICBzZXRJc0hvaXN0ZWQoaXNIb2lzdGVkKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0SXNIb2lzdGVkKGlzSG9pc3RlZClcbiAgICB9LFxuICAgIHNldE1lbnVTdXJmYWNlQW5jaG9yRWxlbWVudChlbGVtZW50KSB7XG4gICAgICB0aGlzLmFuY2hvckVsZW1lbnQgPSBlbGVtZW50XG4gICAgfSxcbiAgICBzZXRGaXhlZFBvc2l0aW9uKGlzRml4ZWQpIHtcbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHRoaXMuJGVsLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcy5GSVhFRClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJGVsLmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3Nlcy5GSVhFRClcbiAgICAgIH1cblxuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldEZpeGVkUG9zaXRpb24oaXNGaXhlZClcbiAgICB9LFxuICAgIHNldEFic29sdXRlUG9zaXRpb24oeCwgeSkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldEFic29sdXRlUG9zaXRpb24oeCwgeSlcbiAgICAgIHRoaXMuc2V0SXNIb2lzdGVkKHRydWUpXG4gICAgfSxcbiAgICBzZXRBbmNob3JDb3JuZXIoY29ybmVyKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0QW5jaG9yQ29ybmVyKGNvcm5lcilcbiAgICB9LFxuICAgIHNldEFuY2hvck1hcmdpbihtYXJnaW4pIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRBbmNob3JNYXJnaW4obWFyZ2luKVxuICAgIH0sXG4gICAgc2hvdyhvcHRpb25zKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24ub3BlbihvcHRpb25zKVxuICAgIH0sXG4gICAgaGlkZSgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5jbG9zZSgpXG4gICAgfSxcbiAgICBpc09wZW4oKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uID8gdGhpcy5mb3VuZGF0aW9uLmlzT3BlbigpIDogZmFsc2VcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8bGlcbiAgICA6dGFiaW5kZXg9XCJkaXNhYmxlZCA/ICctMScgOiAnMCdcIlxuICAgIDphcmlhLWRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgIGNsYXNzPVwibWRjLW1lbnUtaXRlbSBtZGMtbGlzdC1pdGVtXCJcbiAgICByb2xlPVwibWVudWl0ZW1cIlxuICA+XG4gICAgPHNsb3QgLz5cbiAgPC9saT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtbWVudS1pdGVtJyxcbiAgcHJvcHM6IHtcbiAgICBkaXNhYmxlZDogQm9vbGVhblxuICB9LFxuICBpbmplY3Q6IFsnbWRjTWVudSddLFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgY29uc29sZS5kaXIodGhpcy5tZGNNZW51KVxuICAgIHRoaXMubWRjTWVudS5pdGVtcy5wdXNoKHRoaXMuJGVsKVxuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGxpIFxuICAgIHJvbGU9XCJzZXBhcmF0b3JcIiBcbiAgICBjbGFzcz1cIm1kYy1tZW51LWRpdmlkZXIgbWRjLWxpc3QtZGl2aWRlclwiLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtbWVudS1kaXZpZGVyJ1xufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtZGMtbWVudS1zdXJmYWNlLS1hbmNob3JcIj48c2xvdCAvPjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1tZW51LWFuY2hvcidcbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgbWRjTWVudSBmcm9tICcuL21kYy1tZW51LnZ1ZSdcbmltcG9ydCBtZGNNZW51U3VyZmFjZSBmcm9tICcuL21kYy1tZW51LXN1cmZhY2UudnVlJ1xuaW1wb3J0IG1kY01lbnVJdGVtIGZyb20gJy4vbWRjLW1lbnUtaXRlbS52dWUnXG5pbXBvcnQgbWRjTWVudURpdmlkZXIgZnJvbSAnLi9tZGMtbWVudS1kaXZpZGVyLnZ1ZSdcbmltcG9ydCBtZGNNZW51QW5jaG9yIGZyb20gJy4vbWRjLW1lbnUtYW5jaG9yLnZ1ZSdcblxuZXhwb3J0IHsgbWRjTWVudSwgbWRjTWVudUl0ZW0sIG1kY01lbnVEaXZpZGVyLCBtZGNNZW51QW5jaG9yIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY01lbnUsXG4gIG1kY01lbnVTdXJmYWNlLFxuICBtZGNNZW51SXRlbSxcbiAgbWRjTWVudURpdmlkZXIsXG4gIG1kY01lbnVBbmNob3Jcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJlbWl0Q3VzdG9tRXZlbnQiLCJlbCIsImV2dFR5cGUiLCJldnREYXRhIiwic2hvdWxkQnViYmxlIiwiZXZ0IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJzY29wZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiTURDRm91bmRhdGlvbiIsImFkYXB0ZXIiLCJhZGFwdGVyXyIsIk1EQ01lbnVBZGFwdGVyIiwiaW5kZXgiLCJjbGFzc05hbWUiLCJhdHRyIiwidmFsdWUiLCJlbGVtZW50Iiwic2VsZWN0aW9uR3JvdXAiLCJjc3NDbGFzc2VzIiwiUk9PVCIsIk1FTlVfU0VMRUNURURfTElTVF9JVEVNIiwiTUVOVV9TRUxFQ1RJT05fR1JPVVAiLCJzdHJpbmdzIiwiU0VMRUNURURfRVZFTlQiLCJBUklBX1NFTEVDVEVEX0FUVFIiLCJMSVNUX1NFTEVDVE9SIiwiQ0hFQ0tCT1hfU0VMRUNUT1IiLCJNRENNZW51U3VyZmFjZUFkYXB0ZXIiLCJvcmlnaW4iLCJwb3NpdGlvbiIsImhlaWdodCIsIkFOQ0hPUiIsIkFOSU1BVElOR19DTE9TRUQiLCJBTklNQVRJTkdfT1BFTiIsIkZJWEVEIiwiT1BFTiIsIkNMT1NFRF9FVkVOVCIsIk9QRU5FRF9FVkVOVCIsIkZPQ1VTQUJMRV9FTEVNRU5UUyIsIm51bWJlcnMiLCJUUkFOU0lUSU9OX09QRU5fRFVSQVRJT04iLCJUUkFOU0lUSU9OX0NMT1NFX0RVUkFUSU9OIiwiTUFSR0lOX1RPX0VER0UiLCJBTkNIT1JfVE9fTUVOVV9TVVJGQUNFX1dJRFRIX1JBVElPIiwiQ29ybmVyQml0IiwiQk9UVE9NIiwiQ0VOVEVSIiwiUklHSFQiLCJGTElQX1JUTCIsIkNvcm5lciIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiQk9UVE9NX0xFRlQiLCJCT1RUT01fUklHSFQiLCJUT1BfU1RBUlQiLCJUT1BfRU5EIiwiQk9UVE9NX1NUQVJUIiwiQk9UVE9NX0VORCIsIk1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsImhhc0FuY2hvciIsIm5vdGlmeUNsb3NlIiwibm90aWZ5T3BlbiIsImlzRWxlbWVudEluQ29udGFpbmVyIiwiaXNSdGwiLCJzZXRUcmFuc2Zvcm1PcmlnaW4iLCJpc0ZvY3VzZWQiLCJzYXZlRm9jdXMiLCJyZXN0b3JlRm9jdXMiLCJpc0ZpcnN0RWxlbWVudEZvY3VzZWQiLCJpc0xhc3RFbGVtZW50Rm9jdXNlZCIsImZvY3VzRmlyc3RFbGVtZW50IiwiZm9jdXNMYXN0RWxlbWVudCIsImdldElubmVyRGltZW5zaW9ucyIsImdldEFuY2hvckRpbWVuc2lvbnMiLCJnZXRXaW5kb3dEaW1lbnNpb25zIiwiZ2V0Qm9keURpbWVuc2lvbnMiLCJnZXRXaW5kb3dTY3JvbGwiLCJzZXRQb3NpdGlvbiIsInNldE1heEhlaWdodCIsImRlZmF1bHRBZGFwdGVyIiwiaXNPcGVuXyIsIm9wZW5BbmltYXRpb25FbmRUaW1lcklkXyIsImNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8iLCJhbmltYXRpb25SZXF1ZXN0SWRfIiwiZGltZW5zaW9uc18iLCJhbmNob3JDb3JuZXJfIiwiYW5jaG9yTWFyZ2luXyIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIm1lYXN1cmVzXyIsInF1aWNrT3Blbl8iLCJob2lzdGVkRWxlbWVudF8iLCJpc0ZpeGVkUG9zaXRpb25fIiwicG9zaXRpb25fIiwieCIsInkiLCJFcnJvciIsImNsZWFyVGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY29ybmVyIiwibWFyZ2luIiwiaXNIb2lzdGVkIiwiaXNGaXhlZFBvc2l0aW9uIiwidHlwZUNoZWNraXNGaW5pdGVfIiwicXVpY2tPcGVuIiwidGFyZ2V0IiwiY2xvc2UiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJpc0VzY2FwZSIsImlzVGFiIiwicHJldmVudERlZmF1bHQiLCJhbmNob3JSZWN0Iiwidmlld3BvcnQiLCJib2R5RGltZW5zaW9ucyIsIndpbmRvd1Njcm9sbCIsIndpZHRoIiwidmlld3BvcnREaXN0YW5jZSIsImFuY2hvckhlaWdodCIsImFuY2hvcldpZHRoIiwic3VyZmFjZUhlaWdodCIsInN1cmZhY2VXaWR0aCIsImlzQm90dG9tQWxpZ25lZCIsIkJvb2xlYW4iLCJhdmFpbGFibGVUb3AiLCJhdmFpbGFibGVCb3R0b20iLCJ0b3BPdmVyZmxvdyIsImJvdHRvbU92ZXJmbG93IiwiaXNGbGlwUnRsIiwiYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCIsImlzQWxpZ25lZFJpZ2h0IiwiYXZhaWxhYmxlTGVmdCIsImF2YWlsYWJsZVJpZ2h0IiwibGVmdE92ZXJmbG93IiwicmlnaHRPdmVyZmxvdyIsImlzUmlnaHRBbGlnbmVkIiwicmlnaHRPZmZzZXQiLCJhdm9pZFZlcnRpY2FsT3ZlcmxhcCIsIm1heEhlaWdodCIsImdldEF1dG9MYXlvdXRNZWFzdXJlbWVudHNfIiwiZ2V0T3JpZ2luQ29ybmVyXyIsIm1heE1lbnVTdXJmYWNlSGVpZ2h0IiwiZ2V0TWVudVN1cmZhY2VNYXhIZWlnaHRfIiwidmVydGljYWxBbGlnbm1lbnQiLCJob3Jpem9udGFsQWxpZ25tZW50IiwiaG9yaXpvbnRhbE9mZnNldCIsImdldEhvcml6b250YWxPcmlnaW5PZmZzZXRfIiwidmVydGljYWxPZmZzZXQiLCJnZXRWZXJ0aWNhbE9yaWdpbk9mZnNldF8iLCJhZGp1c3RQb3NpdGlvbkZvckhvaXN0ZWRFbGVtZW50XyIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsInBhcnNlSW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYXV0b1Bvc2l0aW9uXyIsInNldFRpbWVvdXQiLCJtYXliZVJlc3RvcmVGb2N1c18iLCJhY3RpdmVFbGVtZW50IiwibnVtIiwiaXNGaW5pdGUiLCJNRENMaXN0QWRhcHRlciIsImF0dHJpYnV0ZSIsImxpc3RJdGVtSW5kZXgiLCJ0YWJJbmRleFZhbHVlIiwiZWxlIiwiaXNDaGVja2VkIiwiTElTVF9JVEVNX0NMQVNTIiwiTElTVF9JVEVNX1NFTEVDVEVEX0NMQVNTIiwiTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTUyIsIkFSSUFfT1JJRU5UQVRJT04iLCJBUklBX09SSUVOVEFUSU9OX0hPUklaT05UQUwiLCJBUklBX1NFTEVDVEVEIiwiQVJJQV9DSEVDS0VEIiwiQVJJQV9DSEVDS0VEX1JBRElPX1NFTEVDVE9SIiwiUkFESU9fU0VMRUNUT1IiLCJDSEVDS0JPWF9SQURJT19TRUxFQ1RPUiIsIkNISUxEX0VMRU1FTlRTX1RPX1RPR0dMRV9UQUJJTkRFWCIsIkZPQ1VTQUJMRV9DSElMRF9FTEVNRU5UUyIsIkVOQUJMRURfSVRFTVNfU0VMRUNUT1IiLCJFTEVNRU5UU19LRVlfQUxMT1dFRF9JTiIsIk1EQ0xpc3RGb3VuZGF0aW9uIiwiZ2V0TGlzdEl0ZW1Db3VudCIsImdldEZvY3VzZWRFbGVtZW50SW5kZXgiLCJzZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgiLCJyZW1vdmVBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgiLCJhZGRDbGFzc0ZvckVsZW1lbnRJbmRleCIsInJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4IiwiZm9jdXNJdGVtQXRJbmRleCIsInNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbiIsImZvbGxvd0hyZWYiLCJoYXNSYWRpb0F0SW5kZXgiLCJoYXNDaGVja2JveEF0SW5kZXgiLCJpc0NoZWNrYm94Q2hlY2tlZEF0SW5kZXgiLCJzZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleCIsIndyYXBGb2N1c18iLCJpc1ZlcnRpY2FsXyIsImlzU2luZ2xlU2VsZWN0aW9uTGlzdF8iLCJzZWxlY3RlZEluZGV4XyIsInVzZUFjdGl2YXRlZENsYXNzXyIsInVzZUFjdGl2YXRlZCIsInNldEFyaWFBdHRyaWJ1dGVzRm9yQ2hlY2tib3hfIiwic2V0QXJpYUF0dHJpYnV0ZXNGb3JSYWRpb18iLCJzZXRBcmlhQXR0cmlidXRlc0ZvclNpbmdsZVNlbGVjdF8iLCJzZXRDbGFzc05hbWVzRm9yU2luZ2xlU2VsZWN0XyIsImFyaWFBdHRyaWJ1dGVWYWx1ZSIsInNlbGVjdGVkQ2xhc3NOYW1lIiwiaXNSb290TGlzdEl0ZW0iLCJhcnJvd0xlZnQiLCJhcnJvd1VwIiwiYXJyb3dSaWdodCIsImFycm93RG93biIsImlzSG9tZSIsImlzRW5kIiwiaXNFbnRlciIsImlzU3BhY2UiLCJjdXJyZW50SW5kZXgiLCJwcmV2ZW50RGVmYXVsdEV2ZW50XyIsImZvY3VzTmV4dEVsZW1lbnQiLCJmb2N1c1ByZXZFbGVtZW50IiwiaGFzQ2hlY2tib3hPclJhZGlvIiwiaGFzQ2hlY2tib3hPclJhZGlvQXRJbmRleF8iLCJ0b2dnbGVDaGVja2JveE9yUmFkaW9BdEluZGV4XyIsInNldFNlbGVjdGVkSW5kZXgiLCJ0b2dnbGVDaGVja2JveCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJjb3VudCIsIm5leHRJbmRleCIsInByZXZJbmRleCIsImxhc3RJbmRleCIsIk1EQ01lbnVGb3VuZGF0aW9uIiwiYWRkQ2xhc3NUb0VsZW1lbnRBdEluZGV4IiwicmVtb3ZlQ2xhc3NGcm9tRWxlbWVudEF0SW5kZXgiLCJhZGRBdHRyaWJ1dGVUb0VsZW1lbnRBdEluZGV4IiwicmVtb3ZlQXR0cmlidXRlRnJvbUVsZW1lbnRBdEluZGV4IiwiZWxlbWVudENvbnRhaW5zQ2xhc3MiLCJjbG9zZVN1cmZhY2UiLCJnZXRFbGVtZW50SW5kZXgiLCJnZXRQYXJlbnRFbGVtZW50IiwiZ2V0U2VsZWN0ZWRFbGVtZW50SW5kZXgiLCJub3RpZnlTZWxlY3RlZCIsImhhbmRsZUFjdGlvbl8iLCJsaXN0SXRlbSIsImdldExpc3RJdGVtXyIsImhhbmRsZVNlbGVjdGlvbiIsImdldFNlbGVjdGlvbkdyb3VwXyIsImhhbmRsZVNlbGVjdGlvbkdyb3VwXyIsInNlbGVjdGVkSW5kZXgiLCJwYXJlbnQiLCJpc0dyb3VwIiwiaXNMaXN0SXRlbSIsInN0b3JlZFRyYW5zZm9ybVByb3BlcnR5TmFtZV8iLCJnZXRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWUiLCJnbG9iYWxPYmoiLCJmb3JjZVJlZnJlc2giLCJ1bmRlZmluZWQiLCJjcmVhdGVFbGVtZW50IiwidHJhbnNmb3JtUHJvcGVydHlOYW1lIiwic3R5bGUiLCJtZGNNZW51IiwibWRjTWVudVN1cmZhY2UiLCJtZGNNZW51SXRlbSIsIm1kY01lbnVEaXZpZGVyIiwibWRjTWVudUFuY2hvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztFQUFPLFNBQVNBLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0VBQy9CO0VBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0VBQ0EsTUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0VBQ2pDRCxJQUFBQSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBZDtFQUNELEdBRkQsTUFFTyxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7RUFDeEM7RUFDQUgsSUFBQUEsSUFBSSxHQUFHRyxNQUFNLENBQUNELEdBQWQ7RUFDRDs7RUFDRCxNQUFJRixJQUFKLEVBQVU7RUFDUkEsSUFBQUEsSUFBSSxDQUFDSSxHQUFMLENBQVNMLE1BQVQ7RUFDRDtFQUNGOztFQ1pNLFNBQVNNLFVBQVQsQ0FBb0JDLFVBQXBCLEVBQWdDO0VBQ3JDLFNBQU87RUFDTEMsSUFBQUEsT0FBTyxFQUFFLGFBREo7RUFFTEMsSUFBQUEsT0FBTyxFQUFFLGlCQUFBQyxFQUFFLEVBQUk7RUFDYixXQUFLLElBQUlDLEdBQVQsSUFBZ0JKLFVBQWhCLEVBQTRCO0VBQzFCLFlBQUlLLFNBQVMsR0FBR0wsVUFBVSxDQUFDSSxHQUFELENBQTFCO0VBQ0FELFFBQUFBLEVBQUUsQ0FBQ0UsU0FBSCxDQUFhQSxTQUFTLENBQUNDLElBQXZCLEVBQTZCRCxTQUE3QjtFQUNEO0VBQ0YsS0FQSTtFQVFMTCxJQUFBQSxVQUFV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
