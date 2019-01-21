/**
* @module vue-mdc-adaptermenu 0.19.3-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

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

var index = BasePlugin({
  mdcMenu: mdcMenu,
  mdcMenuSurface: mdcMenuSurface,
  mdcMenuItem: mdcMenuItem,
  mdcMenuDivider: mdcMenuDivider,
  mdcMenuAnchor: mdcMenuAnchor
});

export default index;
export { mdcMenu, mdcMenuItem, mdcMenuDivider, mdcMenuAnchor };
//# sourceMappingURL=index.js.map
