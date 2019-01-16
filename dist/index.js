/**
* @module vue-mdc-adapter 0.19.0-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

import VueMDCButton from './button';
import VueMDCCard from './card';
import VueMDCCheckbox from './checkbox';
import VueMDCChipSet from './chips';
import VueMDCDialog from './dialog';
import VueMDCDrawer from './drawer';
import VueMDCElevation from './elevation';
import VueMDCFab from './fab';
import VueMDCGridList from './grid-list';
import VueMDCIcon from './icon';
import VueMDCIconButton from './icon-button';
import VueMDCIconToggle from './icon-toggle';
import VueMDCLayoutApp from './layout-app';
import VueMDCLayoutGrid from './layout-grid';
import VueMDCLinearProgress from './linear-progress';
import VueMDCList from './list';
import VueMDCMenu from './menu';
import VueMDCRadio from './radio';
import VueMDCRipple, { RippleMixin } from './ripple';
import VueMDCSelect from './select';
import VueMDCSlider from './slider';
import VueMDCSnackbar from './snackbar';
import VueMDCSwitch from './switch';
import VueMDCTabs from './tabs';
import VueMDCTextfield from './textfield';
import VueMDCTheme from './theme';
import VueMDCToolbar from './toolbar';
import VueMDCTypography from './typography';

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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
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

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/* global CustomEvent */

var DispatchEventMixin = {
  props: {
    event: String,
    'event-target': Object,
    'event-args': Array
  },
  methods: {
    dispatchEvent: function dispatchEvent(evt) {
      evt && this.$emit(evt.type, evt);

      if (this.event) {
        var target = this.eventTarget || this.$root;
        var args = this.eventArgs || [];
        target.$emit.apply(target, [this.event].concat(_toConsumableArray(args)));
      }
    }
  },
  computed: {
    listeners: function listeners() {
      var _this = this;

      return _objectSpread({}, this.$listeners, {
        click: function click(e) {
          return _this.dispatchEvent(e);
        }
      });
    }
  }
};

var scope = Math.floor(Math.random() * Math.floor(0x10000000)).toString() + '-';

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
 * Adapter for MDC Top App Bar
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Top App Bar into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTopAppBarAdapter =
/*#__PURE__*/
function () {
  function MDCTopAppBarAdapter() {
    _classCallCheck(this, MDCTopAppBarAdapter);
  }

  _createClass(MDCTopAppBarAdapter, [{
    key: "addClass",

    /**
     * Adds a class to the root Element.
     * @param {string} className
     */
    value: function addClass(className) {}
    /**
     * Removes a class from the root Element.
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}
    /**
     * Returns true if the root Element contains the given class.
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}
    /**
     * Sets the specified inline style property on the root Element to the given value.
     * @param {string} property
     * @param {string} value
     */

  }, {
    key: "setStyle",
    value: function setStyle(property, value) {}
    /**
     * Gets the height of the top app bar.
     * @return {number}
     */

  }, {
    key: "getTopAppBarHeight",
    value: function getTopAppBarHeight() {}
    /**
     * Registers an event handler on the navigation icon element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerNavigationIconInteractionHandler",
    value: function registerNavigationIconInteractionHandler(type, handler) {}
    /**
     * Deregisters an event handler on the navigation icon element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterNavigationIconInteractionHandler",
    value: function deregisterNavigationIconInteractionHandler(type, handler) {}
    /**
     * Emits an event when the navigation icon is clicked.
     */

  }, {
    key: "notifyNavigationIconClicked",
    value: function notifyNavigationIconClicked() {}
    /** @param {function(!Event)} handler */

  }, {
    key: "registerScrollHandler",
    value: function registerScrollHandler(handler) {}
    /** @param {function(!Event)} handler */

  }, {
    key: "deregisterScrollHandler",
    value: function deregisterScrollHandler(handler) {}
    /** @param {function(!Event)} handler */

  }, {
    key: "registerResizeHandler",
    value: function registerResizeHandler(handler) {}
    /** @param {function(!Event)} handler */

  }, {
    key: "deregisterResizeHandler",
    value: function deregisterResizeHandler(handler) {}
    /** @return {number} */

  }, {
    key: "getViewportScrollY",
    value: function getViewportScrollY() {}
    /** @return {number} */

  }, {
    key: "getTotalActionItems",
    value: function getTotalActionItems() {}
  }]);

  return MDCTopAppBarAdapter;
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
var cssClasses = {
  FIXED_CLASS: 'mdc-top-app-bar--fixed',
  FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
  SHORT_CLASS: 'mdc-top-app-bar--short',
  SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
  SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed'
};
/** @enum {number} */

var numbers = {
  DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
  MAX_TOP_APP_BAR_HEIGHT: 128
};
/** @enum {string} */

var strings = {
  ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
  NAVIGATION_EVENT: 'MDCTopAppBar:nav',
  NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
  ROOT_SELECTOR: '.mdc-top-app-bar',
  TITLE_SELECTOR: '.mdc-top-app-bar__title'
};

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
 * @extends {MDCFoundation<!MDCTopAppBarAdapter>}
 */

var MDCTopAppBarBaseFoundation =
/*#__PURE__*/
function (_MDCFoundation) {
  _inherits(MDCTopAppBarBaseFoundation, _MDCFoundation);

  _createClass(MDCTopAppBarBaseFoundation, null, [{
    key: "strings",

    /** @return enum {string} */
    get: function get() {
      return strings;
    }
    /** @return enum {string} */

  }, {
    key: "cssClasses",
    get: function get() {
      return cssClasses;
    }
    /** @return enum {number} */

  }, {
    key: "numbers",
    get: function get() {
      return numbers;
    }
    /**
     * {@see MDCTopAppBarAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTopAppBarAdapter}
     */

  }, {
    key: "defaultAdapter",
    get: function get() {
      return (
        /** @type {!MDCTopAppBarAdapter} */
        {
          hasClass: function hasClass()
          /* className: string */
          {},
          addClass: function addClass()
          /* className: string */
          {},
          removeClass: function removeClass()
          /* className: string */
          {},
          setStyle: function setStyle()
          /* property: string, value: string */
          {},
          getTopAppBarHeight: function getTopAppBarHeight() {},
          registerNavigationIconInteractionHandler: function registerNavigationIconInteractionHandler()
          /* type: string, handler: EventListener */
          {},
          deregisterNavigationIconInteractionHandler: function deregisterNavigationIconInteractionHandler()
          /* type: string, handler: EventListener */
          {},
          notifyNavigationIconClicked: function notifyNavigationIconClicked() {},
          registerScrollHandler: function registerScrollHandler()
          /* handler: EventListener */
          {},
          deregisterScrollHandler: function deregisterScrollHandler()
          /* handler: EventListener */
          {},
          registerResizeHandler: function registerResizeHandler()
          /* handler: EventListener */
          {},
          deregisterResizeHandler: function deregisterResizeHandler()
          /* handler: EventListener */
          {},
          getViewportScrollY: function getViewportScrollY() {
            return (
              /* number */
              0
            );
          },
          getTotalActionItems: function getTotalActionItems() {
            return (
              /* number */
              0
            );
          }
        }
      );
    }
    /**
     * @param {!MDCTopAppBarAdapter} adapter
     */

  }]);

  function MDCTopAppBarBaseFoundation(
  /** @type {!MDCTopAppBarAdapter} */
  adapter) {
    var _this;

    _classCallCheck(this, MDCTopAppBarBaseFoundation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCTopAppBarBaseFoundation).call(this, _extends(MDCTopAppBarBaseFoundation.defaultAdapter, adapter)));

    _this.navClickHandler_ = function () {
      return _this.adapter_.notifyNavigationIconClicked();
    };

    _this.scrollHandler_ = function () {};

    return _this;
  }

  _createClass(MDCTopAppBarBaseFoundation, [{
    key: "init",
    value: function init() {
      this.adapter_.registerNavigationIconInteractionHandler('click', this.navClickHandler_);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.adapter_.deregisterNavigationIconInteractionHandler('click', this.navClickHandler_);
    }
  }, {
    key: "initScrollHandler",
    value: function initScrollHandler() {
      this.adapter_.registerScrollHandler(this.scrollHandler_);
    }
  }, {
    key: "destroyScrollHandler",
    value: function destroyScrollHandler() {
      this.adapter_.deregisterScrollHandler(this.scrollHandler_);
    }
  }]);

  return MDCTopAppBarBaseFoundation;
}(MDCFoundation);

var INITIAL_VALUE = 0;
/**
 * @extends {MDCTopAppBarBaseFoundation<!MDCTopAppBarFoundation>}
 * @final
 */

var MDCTopAppBarFoundation =
/*#__PURE__*/
function (_MDCTopAppBarBaseFoun) {
  _inherits(MDCTopAppBarFoundation, _MDCTopAppBarBaseFoun);

  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  function MDCTopAppBarFoundation(adapter) {
    var _this;

    _classCallCheck(this, MDCTopAppBarFoundation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCTopAppBarFoundation).call(this, adapter));
    /**
     * Used for diffs of current scroll position vs previous scroll position
     * @private {number}
     */

    _this.lastScrollPosition_ = _this.adapter_.getViewportScrollY();
    /**
     * Used to verify when the top app bar is completely showing or completely hidden
     * @private {number}
     */

    _this.topAppBarHeight_ = _this.adapter_.getTopAppBarHeight();
    /**
     * wasDocked_ is used to indicate if the top app bar was docked in the previous
     * scroll handler iteration.
     * @private {boolean}
     */

    _this.wasDocked_ = true;
    /**
     * isDockedShowing_ is used to indicate if the top app bar is docked in the fully
     * shown position.
     * @private {boolean}
     */

    _this.isDockedShowing_ = true;
    /**
     * Variable for current scroll position of the top app bar
     * @private {number}
     */

    _this.currentAppBarOffsetTop_ = 0;
    /**
     * Used to prevent the top app bar from being scrolled out of view during resize events
     * @private {boolean} */

    _this.isCurrentlyBeingResized_ = false;
    /**
     * The timeout that's used to throttle the resize events
     * @private {number}
     */

    _this.resizeThrottleId_ = INITIAL_VALUE;
    /**
     * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
     * @private {number}
     */

    _this.resizeDebounceId_ = INITIAL_VALUE;

    _this.scrollHandler_ = function () {
      return _this.topAppBarScrollHandler_();
    };

    _this.resizeHandler_ = function () {
      return _this.topAppBarResizeHandler_();
    };

    return _this;
  }

  _createClass(MDCTopAppBarFoundation, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(MDCTopAppBarFoundation.prototype), "init", this).call(this);

      this.adapter_.registerScrollHandler(this.scrollHandler_);
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(MDCTopAppBarFoundation.prototype), "destroy", this).call(this);

      this.adapter_.deregisterScrollHandler(this.scrollHandler_);
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      this.adapter_.setStyle('top', '');
    }
    /**
     * Function to determine if the DOM needs to update.
     * @return {boolean}
     * @private
     */

  }, {
    key: "checkForUpdate_",
    value: function checkForUpdate_() {
      var offscreenBoundaryTop = -this.topAppBarHeight_;
      var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
      var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
      var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen; // If it's partially showing, it can't be docked.

      if (partiallyShowing) {
        this.wasDocked_ = false;
      } else {
        // Not previously docked and not partially showing, it's now docked.
        if (!this.wasDocked_) {
          this.wasDocked_ = true;
          return true;
        } else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
          this.isDockedShowing_ = hasAnyPixelsOnscreen;
          return true;
        }
      }

      return partiallyShowing;
    }
    /**
     * Function to move the top app bar if needed.
     * @private
     */

  }, {
    key: "moveTopAppBar_",
    value: function moveTopAppBar_() {
      if (this.checkForUpdate_()) {
        // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
        // so the top app bar doesn't show if the window resizes and the new height > the old height.
        var offset = this.currentAppBarOffsetTop_;

        if (Math.abs(offset) >= this.topAppBarHeight_) {
          offset = -numbers.MAX_TOP_APP_BAR_HEIGHT;
        }

        this.adapter_.setStyle('top', offset + 'px');
      }
    }
    /**
     * Scroll handler for the default scroll behavior of the top app bar.
     * @private
     */

  }, {
    key: "topAppBarScrollHandler_",
    value: function topAppBarScrollHandler_() {
      var currentScrollPosition = Math.max(this.adapter_.getViewportScrollY(), 0);
      var diff = currentScrollPosition - this.lastScrollPosition_;
      this.lastScrollPosition_ = currentScrollPosition; // If the window is being resized the lastScrollPosition_ needs to be updated but the
      // current scroll of the top app bar should stay in the same position.

      if (!this.isCurrentlyBeingResized_) {
        this.currentAppBarOffsetTop_ -= diff;

        if (this.currentAppBarOffsetTop_ > 0) {
          this.currentAppBarOffsetTop_ = 0;
        } else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
          this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
        }

        this.moveTopAppBar_();
      }
    }
    /**
     * Top app bar resize handler that throttle/debounce functions that execute updates.
     * @private
     */

  }, {
    key: "topAppBarResizeHandler_",
    value: function topAppBarResizeHandler_() {
      var _this2 = this;

      // Throttle resize events 10 p/s
      if (!this.resizeThrottleId_) {
        this.resizeThrottleId_ = setTimeout(function () {
          _this2.resizeThrottleId_ = INITIAL_VALUE;

          _this2.throttledResizeHandler_();
        }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
      }

      this.isCurrentlyBeingResized_ = true;

      if (this.resizeDebounceId_) {
        clearTimeout(this.resizeDebounceId_);
      }

      this.resizeDebounceId_ = setTimeout(function () {
        _this2.topAppBarScrollHandler_();

        _this2.isCurrentlyBeingResized_ = false;
        _this2.resizeDebounceId_ = INITIAL_VALUE;
      }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    }
    /**
     * Throttled function that updates the top app bar scrolled values if the
     * top app bar height changes.
     * @private
     */

  }, {
    key: "throttledResizeHandler_",
    value: function throttledResizeHandler_() {
      var currentHeight = this.adapter_.getTopAppBarHeight();

      if (this.topAppBarHeight_ !== currentHeight) {
        this.wasDocked_ = false; // Since the top app bar has a different height depending on the screen width, this
        // will ensure that the top app bar remains in the correct location if
        // completely hidden and a resize makes the top app bar a different height.

        this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
        this.topAppBarHeight_ = currentHeight;
      }

      this.topAppBarScrollHandler_();
    }
  }]);

  return MDCTopAppBarFoundation;
}(MDCTopAppBarBaseFoundation);

/**
 * @extends {MDCTopAppBarBaseFoundation<!MDCShortTopAppBarFoundation>}
 * @final
 */

var MDCShortTopAppBarFoundation =
/*#__PURE__*/
function (_MDCTopAppBarBaseFoun) {
  _inherits(MDCShortTopAppBarFoundation, _MDCTopAppBarBaseFoun);

  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  function MDCShortTopAppBarFoundation(adapter) {
    var _this;

    _classCallCheck(this, MDCShortTopAppBarFoundation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCShortTopAppBarFoundation).call(this, adapter)); // State variable for the current top app bar state

    _this.isCollapsed = false;

    _this.scrollHandler_ = function () {
      return _this.shortAppBarScrollHandler_();
    };

    return _this;
  }

  _createClass(MDCShortTopAppBarFoundation, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(MDCShortTopAppBarFoundation.prototype), "init", this).call(this);

      var isAlwaysCollapsed = this.adapter_.hasClass(cssClasses.SHORT_COLLAPSED_CLASS);

      if (this.adapter_.getTotalActionItems() > 0) {
        this.adapter_.addClass(cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
      }

      if (!isAlwaysCollapsed) {
        this.adapter_.registerScrollHandler(this.scrollHandler_);
        this.shortAppBarScrollHandler_();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(MDCShortTopAppBarFoundation.prototype), "destroy", this).call(this);

      this.adapter_.deregisterScrollHandler(this.scrollHandler_);
    }
    /**
     * Scroll handler for applying/removing the collapsed modifier class
     * on the short top app bar.
     * @private
     */

  }, {
    key: "shortAppBarScrollHandler_",
    value: function shortAppBarScrollHandler_() {
      var currentScroll = this.adapter_.getViewportScrollY();

      if (currentScroll <= 0) {
        if (this.isCollapsed) {
          this.adapter_.removeClass(cssClasses.SHORT_COLLAPSED_CLASS);
          this.isCollapsed = false;
        }
      } else {
        if (!this.isCollapsed) {
          this.adapter_.addClass(cssClasses.SHORT_COLLAPSED_CLASS);
          this.isCollapsed = true;
        }
      }
    }
  }]);

  return MDCShortTopAppBarFoundation;
}(MDCTopAppBarBaseFoundation);

/**
 * @extends {MDCTopAppBarFoundation<!MDCFixedTopAppBarFoundation>}
 * @final
 */

var MDCFixedTopAppBarFoundation =
/*#__PURE__*/
function (_MDCTopAppBarFoundati) {
  _inherits(MDCFixedTopAppBarFoundation, _MDCTopAppBarFoundati);

  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  function MDCFixedTopAppBarFoundation(adapter) {
    var _this;

    _classCallCheck(this, MDCFixedTopAppBarFoundation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCFixedTopAppBarFoundation).call(this, adapter));
    /** State variable for the previous scroll iteration top app bar state */

    _this.wasScrolled_ = false;

    _this.scrollHandler_ = function () {
      return _this.fixedScrollHandler_();
    };

    return _this;
  }

  _createClass(MDCFixedTopAppBarFoundation, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(MDCFixedTopAppBarFoundation.prototype), "init", this).call(this);

      this.adapter_.registerScrollHandler(this.scrollHandler_);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(MDCFixedTopAppBarFoundation.prototype), "destroy", this).call(this);

      this.adapter_.deregisterScrollHandler(this.scrollHandler_);
    }
    /**
     * Scroll handler for applying/removing the modifier class
     * on the fixed top app bar.
     */

  }, {
    key: "fixedScrollHandler_",
    value: function fixedScrollHandler_() {
      var currentScroll = this.adapter_.getViewportScrollY();

      if (currentScroll <= 0) {
        if (this.wasScrolled_) {
          this.adapter_.removeClass(cssClasses.FIXED_SCROLLED_CLASS);
          this.wasScrolled_ = false;
        }
      } else {
        if (!this.wasScrolled_) {
          this.adapter_.addClass(cssClasses.FIXED_SCROLLED_CLASS);
          this.wasScrolled_ = true;
        }
      }
    }
  }]);

  return MDCFixedTopAppBarFoundation;
}(MDCTopAppBarBaseFoundation);

var script = {
  name: 'mdc-top-app-bar',
  mixins: [DispatchEventMixin],
  props: {
    short: Boolean,
    shortCollapsed: Boolean,
    prominent: Boolean,
    fixed: Boolean,
    title: String,
    icon: {
      type: [String, Boolean],
      default: 'menu'
    },
    iconClasses: Object,
    dense: Boolean
  },
  data: function data() {
    return {
      rootStyles: {
        top: '0'
      },
      rootClasses: {
        'mdc-top-app-bar': true,
        'mdc-top-app-bar--dense': this.dense,
        'mdc-top-app-bar--short': this.short,
        'mdc-top-app-bar--short-collapsed': this.shortCollapsed,
        'mdc-top-app-bar--prominent': this.prominent,
        'mdc-top-app-bar--fixed': this.fixed
      },
      foundation: null
    };
  },
  computed: {
    haveNavigationIcon: function haveNavigationIcon() {
      return !!this.icon || this.iconClasses;
    },
    naviconClasses: function naviconClasses() {
      return _objectSpread({
        'mdc-top-app-bar__navigation-icon': true,
        'material-icons': !!this.icon
      }, this.iconClasses);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var adapter = {
      addClass: function addClass(className) {
        _this.$set(_this.rootClasses, className, true);
      },
      removeClass: function removeClass(className) {
        _this.$delete(_this.rootClasses, className);
      },
      hasClass: function hasClass(className) {
        return _this.$refs.root.classList.contains(className);
      },
      setStyle: function setStyle(property, value) {
        _this.$set(_this.rootStyles, property, value);
      },
      getTopAppBarHeight: function getTopAppBarHeight() {
        return _this.$el.clientHeight;
      },
      registerNavigationIconInteractionHandler: function registerNavigationIconInteractionHandler(type, handler) {
        if (_this.$refs.navigationIcon) {
          _this.$refs.navigationIcon.addEventListener(type, handler);
        }
      },
      deregisterNavigationIconInteractionHandler: function deregisterNavigationIconInteractionHandler(type, handler) {
        if (_this.$refs.navigationIcon) {
          _this.$refs.navigationIcon.removeEventListener(type, handler);
        }
      },
      notifyNavigationIconClicked: function notifyNavigationIconClicked() {
        _this.$emit('nav');
      },
      registerScrollHandler: function registerScrollHandler(handler) {
        window.addEventListener('scroll', handler);
      },
      deregisterScrollHandler: function deregisterScrollHandler(handler) {
        window.removeEventListener('scroll', handler);
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      getViewportScrollY: function getViewportScrollY() {
        return window.pageYOffset;
      },
      getTotalActionItems: function getTotalActionItems() {
        return _this.$refs.root.querySelectorAll(MDCTopAppBarFoundation.strings.ACTION_ITEM_SELECTOR).length;
      }
    };
    this.foundation = this.short ? new MDCShortTopAppBarFoundation(adapter) : this.fixed ? new MDCFixedTopAppBarFoundation(adapter) : new MDCTopAppBarFoundation(adapter);
    this.foundation.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
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
script.__file = "/ddata/extra/vma/components/top-app-bar/mdc-top-app-bar.vue";

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "header",
    _vm._g(
      { ref: "root", class: _vm.rootClasses, style: _vm.rootStyles },
      _vm.$listeners
    ),
    [
      _c("div", { staticClass: "mdc-top-app-bar__row" }, [
        _c(
          "section",
          {
            staticClass:
              "mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
          },
          [
            _vm.haveNavigationIcon
              ? _c(
                  "button",
                  _vm._g(
                    { ref: "navigationIcon", class: _vm.naviconClasses },
                    _vm.listeners
                  ),
                  [_vm._v("\n        " + _vm._s(_vm.icon) + "\n      ")]
                )
              : _vm._e(),
            _vm._v(" "),
            !!_vm.title
              ? _c("span", { staticClass: "mdc-top-app-bar__title" }, [
                  _vm._v(_vm._s(_vm.title))
                ])
              : _vm._e()
          ]
        ),
        _vm._v(" "),
        _vm.$slots.default
          ? _c(
              "section",
              {
                staticClass:
                  "mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
              },
              [_vm._t("default")],
              2
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm._t("tabs")
    ],
    2
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
  

  
  var mdcTopAppBar = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var script$1 = {
  name: 'mdc-top-app-bar-action',
  mixins: [DispatchEventMixin, RippleMixin],
  props: {
    icon: String,
    iconClasses: Object
  },
  computed: {
    actioniconClasses: function actioniconClasses() {
      return _objectSpread({
        'material-icons': !!this.icon
      }, this.iconClasses);
    }
  }
};

/* script */
const __vue_script__$1 = script$1;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$1.__file = "/ddata/extra/vma/components/top-app-bar/mdc-top-app-bar-action.vue";

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "a",
    _vm._g(
      {
        staticClass:
          "mdc-top-app-bar-action mdc-top-app-bar--action mdc-top-app-bar__action-item",
        class: _vm.actioniconClasses,
        attrs: { href: "#" }
      },
      _vm.listeners
    ),
    [_vm._t("default", [_vm._v(_vm._s(_vm.icon))])],
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
  

  
  var mdcTopAppBarAction = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

var VueMDCTopAppBar = BasePlugin({
  mdcTopAppBar: mdcTopAppBar,
  mdcTopAppBarAction: mdcTopAppBarAction
});

//
var index = {
  version: '0.19.0-beta',
  install: function install(vm) {
    vm.use(VueMDCButton);
    vm.use(VueMDCCard);
    vm.use(VueMDCCheckbox);
    vm.use(VueMDCChipSet);
    vm.use(VueMDCElevation);
    vm.use(VueMDCDialog);
    vm.use(VueMDCDrawer);
    vm.use(VueMDCElevation);
    vm.use(VueMDCFab);
    vm.use(VueMDCGridList);
    vm.use(VueMDCIcon);
    vm.use(VueMDCIconButton);
    vm.use(VueMDCIconToggle);
    vm.use(VueMDCLayoutApp);
    vm.use(VueMDCLayoutGrid);
    vm.use(VueMDCLinearProgress);
    vm.use(VueMDCList);
    vm.use(VueMDCMenu);
    vm.use(VueMDCRadio);
    vm.use(VueMDCRipple);
    vm.use(VueMDCSelect);
    vm.use(VueMDCSlider);
    vm.use(VueMDCSnackbar);
    vm.use(VueMDCSwitch);
    vm.use(VueMDCTabs);
    vm.use(VueMDCTextfield);
    vm.use(VueMDCTheme);
    vm.use(VueMDCToolbar);
    vm.use(VueMDCTopAppBar);
    vm.use(VueMDCTypography);
  }
};

export default index;

export { VueMDCButton }
export { VueMDCCard }
export { VueMDCCheckbox }
export { VueMDCChips }
export { VueMDCDialog }
export { VueMDCDrawer }
export { VueMDCElevation }
export { VueMDCFab }
export { VueMDCGridList }
export { VueMDCIconToggle }
export { VueMDCIconButton }
export { VueMDCIcon }
export { VueMDCLayoutApp }
export { VueMDCLayoutGrid }
export { VueMDCLinearProgress }
export { VueMDCList }
export { VueMDCMenu }
export { VueMDCRadio }
export { VueMDCRipple }
export { VueMDCSelect }
export { VueMDCSlider }
export { VueMDCSnackbar }
export { VueMDCSwitch }
export { VueMDCTabs }
export { VueMDCTextfield }
export { VueMDCTheme }
export { VueMDCToolbar }
export { VueMDCTypography }

export * from './button'
export * from './card'
export * from './checkbox'
export * from './chips'
export * from './dialog'
export * from './drawer'
export * from './elevation'
export * from './fab'
export * from './grid-list'
export * from './icon-toggle'
export * from './icon-button'
export * from './icon'
export * from './layout-app'
export * from './layout-grid'
export * from './linear-progress'
export * from './list'
export * from './menu'
export * from './radio'
export * from './ripple'
export * from './select'
export * from './slider'
export * from './snackbar'
export * from './switch'
export * from './tabs'
export * from './textfield'
export * from './theme'
export * from './toolbar'
export * from './typography'
//# sourceMappingURL=index.js.map
