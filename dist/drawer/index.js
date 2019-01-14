/**
* @module vue-mdc-adapterdrawer 0.19.0-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.42.0","material-components-web":"^0.42.1"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

import { RippleBase } from '../ripple';

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

var CustomLink = {
  name: 'custom-link',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'a'
    },
    link: Object
  },
  render: function render(h, context) {
    var element;

    var data = _extends({}, context.data);

    if (context.props.link && context.parent.$router) {
      // router-link case
      element = context.parent.$root.$options.components['router-link'];
      data.props = _extends({
        tag: context.props.tag
      }, context.props.link);

      if (data.on.click) {
        data.nativeOn = {
          click: data.on.click
        };
      }
    } else {
      // element fallback
      element = context.props.tag;
    }

    return h(element, data, context.children);
  }
};
var CustomLinkMixin = {
  props: {
    to: [String, Object],
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String
  },
  computed: {
    link: function link() {
      return this.to && {
        to: this.to,
        exact: this.exact,
        append: this.append,
        replace: this.replace,
        activeClass: this.activeClass,
        exactActiveClass: this.exactActiveClass
      };
    }
  },
  components: {
    CustomLink: CustomLink
  }
};

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
 * Adapter for MDC Drawer
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Drawer into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCDrawerAdapter =
/*#__PURE__*/
function () {
  function MDCDrawerAdapter() {
    _classCallCheck(this, MDCDrawerAdapter);
  }

  _createClass(MDCDrawerAdapter, [{
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
     * @param {!Element} element target element to verify class name
     * @param {string} className class name
     */

  }, {
    key: "elementHasClass",
    value: function elementHasClass(element, className) {}
    /**
     * Saves the focus of currently active element.
     */

  }, {
    key: "saveFocus",
    value: function saveFocus() {}
    /**
     * Restores focus to element previously saved with 'saveFocus'.
     */

  }, {
    key: "restoreFocus",
    value: function restoreFocus() {}
    /**
     * Focuses the active / selected navigation item.
     */

  }, {
    key: "focusActiveNavigationItem",
    value: function focusActiveNavigationItem() {}
    /**
     * Emits a custom event "MDCDrawer:closed" denoting the drawer has closed.
     */

  }, {
    key: "notifyClose",
    value: function notifyClose() {}
    /**
     * Emits a custom event "MDCDrawer:opened" denoting the drawer has opened.
     */

  }, {
    key: "notifyOpen",
    value: function notifyOpen() {}
    /**
     * Traps focus on root element and focuses the active navigation element.
     */

  }, {
    key: "trapFocus",
    value: function trapFocus() {}
    /**
     * Releases focus trap from root element which was set by `trapFocus`
     * and restores focus to where it was prior to calling `trapFocus`.
     */

  }, {
    key: "releaseFocus",
    value: function releaseFocus() {}
  }]);

  return MDCDrawerAdapter;
}();

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

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-drawer',
  DISMISSIBLE: 'mdc-drawer--dismissible',
  MODAL: 'mdc-drawer--modal',
  OPEN: 'mdc-drawer--open',
  ANIMATE: 'mdc-drawer--animate',
  OPENING: 'mdc-drawer--opening',
  CLOSING: 'mdc-drawer--closing'
};
/** @enum {string} */

var strings = {
  APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
  SCRIM_SELECTOR: '.mdc-drawer-scrim',
  CLOSE_EVENT: 'MDCDrawer:closed',
  OPEN_EVENT: 'MDCDrawer:opened'
};

/**
 * @extends {MDCFoundation<!MDCDrawerAdapter>}
 */

var MDCDismissibleDrawerFoundation =
/*#__PURE__*/
function (_MDCFoundation) {
  _inherits(MDCDismissibleDrawerFoundation, _MDCFoundation);

  _createClass(MDCDismissibleDrawerFoundation, null, [{
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
  }, {
    key: "defaultAdapter",
    get: function get() {
      return (
        /** @type {!MDCDrawerAdapter} */
        {
          addClass: function addClass()
          /* className: string */
          {},
          removeClass: function removeClass()
          /* className: string */
          {},
          hasClass: function hasClass()
          /* className: string */
          {},
          elementHasClass: function elementHasClass()
          /* element: !Element, className: string */
          {},
          notifyClose: function notifyClose() {},
          notifyOpen: function notifyOpen() {},
          saveFocus: function saveFocus() {},
          restoreFocus: function restoreFocus() {},
          focusActiveNavigationItem: function focusActiveNavigationItem() {},
          trapFocus: function trapFocus() {},
          releaseFocus: function releaseFocus() {}
        }
      );
    }
  }]);

  function MDCDismissibleDrawerFoundation(adapter) {
    var _this;

    _classCallCheck(this, MDCDismissibleDrawerFoundation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCDismissibleDrawerFoundation).call(this, _extends(MDCDismissibleDrawerFoundation.defaultAdapter, adapter)));
    /** @private {number} */

    _this.animationFrame_ = 0;
    /** @private {number} */

    _this.animationTimer_ = 0;
    return _this;
  }

  _createClass(MDCDismissibleDrawerFoundation, [{
    key: "destroy",
    value: function destroy() {
      if (this.animationFrame_) {
        cancelAnimationFrame(this.animationFrame_);
      }

      if (this.animationTimer_) {
        clearTimeout(this.animationTimer_);
      }
    }
    /**
     * Function to open the drawer.
     */

  }, {
    key: "open",
    value: function open() {
      var _this2 = this;

      if (this.isOpen() || this.isOpening() || this.isClosing()) {
        return;
      }

      this.adapter_.addClass(cssClasses.OPEN);
      this.adapter_.addClass(cssClasses.ANIMATE); // Wait a frame once display is no longer "none", to establish basis for animation

      this.runNextAnimationFrame_(function () {
        _this2.adapter_.addClass(cssClasses.OPENING);
      });
      this.adapter_.saveFocus();
    }
    /**
     * Function to close the drawer.
     */

  }, {
    key: "close",
    value: function close() {
      if (!this.isOpen() || this.isOpening() || this.isClosing()) {
        return;
      }

      this.adapter_.addClass(cssClasses.CLOSING);
    }
    /**
     * Extension point for when drawer finishes open animation.
     * @protected
     */

  }, {
    key: "opened",
    value: function opened() {}
    /**
     * Extension point for when drawer finishes close animation.
     * @protected
     */

  }, {
    key: "closed",
    value: function closed() {}
    /**
     * Returns true if drawer is in open state.
     * @return {boolean}
     */

  }, {
    key: "isOpen",
    value: function isOpen() {
      return this.adapter_.hasClass(cssClasses.OPEN);
    }
    /**
     * Returns true if drawer is animating open.
     * @return {boolean}
     */

  }, {
    key: "isOpening",
    value: function isOpening() {
      return this.adapter_.hasClass(cssClasses.OPENING) || this.adapter_.hasClass(cssClasses.ANIMATE);
    }
    /**
     * Returns true if drawer is animating closed.
     * @return {boolean}
     */

  }, {
    key: "isClosing",
    value: function isClosing() {
      return this.adapter_.hasClass(cssClasses.CLOSING);
    }
    /**
     * Keydown handler to close drawer when key is escape.
     * @param evt
     */

  }, {
    key: "handleKeydown",
    value: function handleKeydown(evt) {
      var keyCode = evt.keyCode,
          key = evt.key;
      var isEscape = key === 'Escape' || keyCode === 27;

      if (isEscape) {
        this.close();
      }
    }
    /**
     * Handles a transition end event on the root element.
     * @param {!Event} evt
     */

  }, {
    key: "handleTransitionEnd",
    value: function handleTransitionEnd(evt) {
      var OPENING = cssClasses.OPENING,
          CLOSING = cssClasses.CLOSING,
          OPEN = cssClasses.OPEN,
          ANIMATE = cssClasses.ANIMATE,
          ROOT = cssClasses.ROOT; // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.

      var isElement = evt.target instanceof Element;

      if (!isElement || !this.adapter_.elementHasClass(
      /** @type {!Element} */
      evt.target, ROOT)) {
        return;
      }

      if (this.isClosing()) {
        this.adapter_.removeClass(OPEN);
        this.adapter_.restoreFocus();
        this.closed();
        this.adapter_.notifyClose();
      } else {
        this.adapter_.focusActiveNavigationItem();
        this.opened();
        this.adapter_.notifyOpen();
      }

      this.adapter_.removeClass(ANIMATE);
      this.adapter_.removeClass(OPENING);
      this.adapter_.removeClass(CLOSING);
    }
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     * @param {Function} callback
     * @private
     */

  }, {
    key: "runNextAnimationFrame_",
    value: function runNextAnimationFrame_(callback) {
      var _this3 = this;

      cancelAnimationFrame(this.animationFrame_);
      this.animationFrame_ = requestAnimationFrame(function () {
        _this3.animationFrame_ = 0;
        clearTimeout(_this3.animationTimer_);
        _this3.animationTimer_ = setTimeout(callback, 0);
      });
    }
  }]);

  return MDCDismissibleDrawerFoundation;
}(MDCFoundation);

/**
 * @extends {MDCDismissibleDrawerFoundation}
 */

var MDCModalDrawerFoundation =
/*#__PURE__*/
function (_MDCDismissibleDrawer) {
  _inherits(MDCModalDrawerFoundation, _MDCDismissibleDrawer);

  function MDCModalDrawerFoundation() {
    _classCallCheck(this, MDCModalDrawerFoundation);

    return _possibleConstructorReturn(this, _getPrototypeOf(MDCModalDrawerFoundation).apply(this, arguments));
  }

  _createClass(MDCModalDrawerFoundation, [{
    key: "opened",

    /**
     * Called when drawer finishes open animation.
     * @override
     */
    value: function opened() {
      this.adapter_.trapFocus();
    }
    /**
     * Called when drawer finishes close animation.
     * @override
     */

  }, {
    key: "closed",
    value: function closed() {
      this.adapter_.releaseFocus();
    }
    /**
     * Handles click event on scrim.
     */

  }, {
    key: "handleScrimClick",
    value: function handleScrimClick() {
      this.close();
    }
  }]);

  return MDCModalDrawerFoundation;
}(MDCDismissibleDrawerFoundation);

/**
 * @template F
 */

var MDCComponent =
/*#__PURE__*/
function () {
  _createClass(MDCComponent, null, [{
    key: "attachTo",

    /**
     * @param {!Element} root
     * @return {!MDCComponent}
     */
    value: function attachTo(root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new MDCFoundation());
    }
    /**
     * @param {!Element} root
     * @param {F=} foundation
     * @param {...?} args
     */

  }]);

  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    /** @protected {!Element} */
    this.root_ = root;

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args); // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.

    /** @protected {!F} */

    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  _createClass(MDCComponent, [{
    key: "initialize",
    value: function initialize()
    /* ...args */
    {} // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.

    /**
     * @return {!F} foundation
     */

  }, {
    key: "getDefaultFoundation",
    value: function getDefaultFoundation() {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    }
  }, {
    key: "initialSyncWithDOM",
    value: function initialSyncWithDOM() {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    }
    /**
     * Wrapper method to add an event listener to the component's root element. This is most useful when
     * listening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "listen",
    value: function listen(evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    }
    /**
     * Wrapper method to remove an event listener to the component's root element. This is most useful when
     * unlistening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "unlisten",
    value: function unlisten(evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    }
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type,
     * with the given data.
     * @param {string} evtType
     * @param {!Object} evtData
     * @param {boolean=} shouldBubble
     */

  }, {
    key: "emit",
    value: function emit(evtType, evtData) {
      var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
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

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
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
var cssClasses$1 = {
  ROOT: 'mdc-list',
  LIST_ITEM_CLASS: 'mdc-list-item',
  LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
  LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated'
};
/** @enum {string} */

var strings$1 = {
  ARIA_ORIENTATION: 'aria-orientation',
  ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
  ARIA_SELECTED: 'aria-selected',
  ARIA_CHECKED: 'aria-checked',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]:not(:disabled)',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: ".".concat(cssClasses$1.LIST_ITEM_CLASS, " button:not(:disabled),\n  .").concat(cssClasses$1.LIST_ITEM_CLASS, " a"),
  FOCUSABLE_CHILD_ELEMENTS: ".".concat(cssClasses$1.LIST_ITEM_CLASS, " button:not(:disabled), .").concat(cssClasses$1.LIST_ITEM_CLASS, " a,\n  .").concat(cssClasses$1.LIST_ITEM_CLASS, " input[type=\"radio\"]:not(:disabled),\n  .").concat(cssClasses$1.LIST_ITEM_CLASS, " input[type=\"checkbox\"]:not(:disabled)"),
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
      return strings$1;
    }
    /** @return enum {string} */

  }, {
    key: "cssClasses",
    get: function get() {
      return cssClasses$1;
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
      this.adapter_.setAttributeForElementIndex(index, strings$1.ARIA_CHECKED, ariaAttributeValue);
    }
    /**
     * @param {number} index
     * @private
     */

  }, {
    key: "setAriaAttributesForRadio_",
    value: function setAriaAttributesForRadio_(index) {
      if (this.selectedIndex_ >= 0) {
        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings$1.ARIA_CHECKED, 'false');
      }

      this.adapter_.setAttributeForElementIndex(index, strings$1.ARIA_CHECKED, 'true');
    }
    /**
    * @param {number} index
    * @private
    */

  }, {
    key: "setAriaAttributesForSingleSelect_",
    value: function setAriaAttributesForSingleSelect_(index) {
      if (this.selectedIndex_ >= 0 && this.selectedIndex_ !== index) {
        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings$1.ARIA_SELECTED, 'false');
      }

      this.adapter_.setAttributeForElementIndex(index, strings$1.ARIA_SELECTED, 'true');
    }
    /**
     * @param {number} index
     * @private
     */

  }, {
    key: "setClassNamesForSingleSelect_",
    value: function setClassNamesForSingleSelect_(index) {
      var selectedClassName = cssClasses$1.LIST_ITEM_SELECTED_CLASS;

      if (this.useActivatedClass_) {
        selectedClassName = cssClasses$1.LIST_ITEM_ACTIVATED_CLASS;
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
/**
 * @param {!Element} element
 * @param {string} selector
 * @return {boolean}
 */


function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}

/**
 * @extends MDCComponent<!MDCListFoundation>
 */

var MDCList =
/*#__PURE__*/
function (_MDCComponent) {
  _inherits(MDCList, _MDCComponent);

  /** @param {...?} args */
  function MDCList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MDCList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MDCList)).call.apply(_getPrototypeOf2, [this].concat(args)));
    /** @private {!Function} */

    _this.handleKeydown_;
    /** @private {!Function} */

    _this.handleClick_;
    /** @private {!Function} */

    _this.focusInEventListener_;
    /** @private {!Function} */

    _this.focusOutEventListener_;
    return _this;
  }
  /**
   * @param {!Element} root
   * @return {!MDCList}
   */


  _createClass(MDCList, [{
    key: "destroy",
    value: function destroy() {
      this.root_.removeEventListener('keydown', this.handleKeydown_);
      this.root_.removeEventListener('click', this.handleClick_);
      this.root_.removeEventListener('focusin', this.focusInEventListener_);
      this.root_.removeEventListener('focusout', this.focusOutEventListener_);
    }
  }, {
    key: "initialSyncWithDOM",
    value: function initialSyncWithDOM() {
      this.handleClick_ = this.handleClickEvent_.bind(this);
      this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
      this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
      this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
      this.root_.addEventListener('keydown', this.handleKeydown_);
      this.root_.addEventListener('focusin', this.focusInEventListener_);
      this.root_.addEventListener('focusout', this.focusOutEventListener_);
      this.root_.addEventListener('click', this.handleClick_);
      this.layout();
      this.initializeListType();
    }
  }, {
    key: "layout",
    value: function layout() {
      var direction = this.root_.getAttribute(strings$1.ARIA_ORIENTATION);
      this.vertical = direction !== strings$1.ARIA_ORIENTATION_HORIZONTAL; // List items need to have at least tabindex=-1 to be focusable.

      [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (ele) {
        ele.setAttribute('tabindex', -1);
      }); // Child button/a elements are not tabbable until the list item is focused.

      [].slice.call(this.root_.querySelectorAll(strings$1.FOCUSABLE_CHILD_ELEMENTS)).forEach(function (ele) {
        return ele.setAttribute('tabindex', -1);
      });
    }
    /**
     * Used to figure out which list item this event is targetting. Or returns -1 if
     * there is no list item
     * @param {Event} evt
     * @private
     */

  }, {
    key: "getListItemIndex_",
    value: function getListItemIndex_(evt) {
      var eventTarget =
      /** @type {HTMLElement} */
      evt.target;
      var index = -1; // Find the first ancestor that is a list item or the list.

      while (!eventTarget.classList.contains(cssClasses$1.LIST_ITEM_CLASS) && !eventTarget.classList.contains(cssClasses$1.ROOT)) {
        eventTarget = eventTarget.parentElement;
      } // Get the index of the element if it is a list item.


      if (eventTarget.classList.contains(cssClasses$1.LIST_ITEM_CLASS)) {
        index = this.listElements.indexOf(eventTarget);
      }

      return index;
    }
    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     * @param {Event} evt
     * @private
     */

  }, {
    key: "handleFocusInEvent_",
    value: function handleFocusInEvent_(evt) {
      var index = this.getListItemIndex_(evt);
      this.foundation_.handleFocusIn(evt, index);
    }
    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     * @param {Event} evt
     * @private
     */

  }, {
    key: "handleFocusOutEvent_",
    value: function handleFocusOutEvent_(evt) {
      var index = this.getListItemIndex_(evt);
      this.foundation_.handleFocusOut(evt, index);
    }
    /**
     * Used to figure out which element was focused when keydown event occurred before sending the event to the
     * foundation.
     * @param {Event} evt
     * @private
     */

  }, {
    key: "handleKeydownEvent_",
    value: function handleKeydownEvent_(evt) {
      var index = this.getListItemIndex_(evt);

      if (index >= 0) {
        this.foundation_.handleKeydown(evt, evt.target.classList.contains(cssClasses$1.LIST_ITEM_CLASS), index);
      }
    }
    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     * @param {Event} evt
     * @private
     */

  }, {
    key: "handleClickEvent_",
    value: function handleClickEvent_(evt) {
      var index = this.getListItemIndex_(evt); // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.

      var toggleCheckbox = !matches(
      /** @type {!Element} */
      evt.target, strings$1.CHECKBOX_RADIO_SELECTOR);
      this.foundation_.handleClick(index, toggleCheckbox);
    }
  }, {
    key: "initializeListType",
    value: function initializeListType() {
      // Pre-selected list item in single selected list or checked list item if list with radio input.
      var preselectedElement = this.root_.querySelector(".".concat(cssClasses$1.LIST_ITEM_ACTIVATED_CLASS, ",\n        .").concat(cssClasses$1.LIST_ITEM_SELECTED_CLASS, ",\n        ").concat(strings$1.ARIA_CHECKED_RADIO_SELECTOR));

      if (preselectedElement) {
        if (preselectedElement.classList.contains(cssClasses$1.LIST_ITEM_ACTIVATED_CLASS)) {
          this.foundation_.setUseActivatedClass(true);
        }

        this.singleSelection = true; // Automatically set selected index if single select list type or list with radio inputs.

        this.selectedIndex = this.listElements.indexOf(preselectedElement);
      }
    }
    /** @param {boolean} value */

  }, {
    key: "getDefaultFoundation",

    /** @return {!MDCListFoundation} */
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new MDCListFoundation(
      /** @type {!MDCListAdapter} */
      _extends({
        getListItemCount: function getListItemCount() {
          return _this2.listElements.length;
        },
        getFocusedElementIndex: function getFocusedElementIndex() {
          return _this2.listElements.indexOf(document.activeElement);
        },
        setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
          var element = _this2.listElements[index];

          if (element) {
            element.setAttribute(attr, value);
          }
        },
        removeAttributeForElementIndex: function removeAttributeForElementIndex(index, attr) {
          var element = _this2.listElements[index];

          if (element) {
            element.removeAttribute(attr);
          }
        },
        addClassForElementIndex: function addClassForElementIndex(index, className) {
          var element = _this2.listElements[index];

          if (element) {
            element.classList.add(className);
          }
        },
        removeClassForElementIndex: function removeClassForElementIndex(index, className) {
          var element = _this2.listElements[index];

          if (element) {
            element.classList.remove(className);
          }
        },
        focusItemAtIndex: function focusItemAtIndex(index) {
          var element = _this2.listElements[index];

          if (element) {
            element.focus();
          }
        },
        setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
          var element = _this2.listElements[listItemIndex];
          var listItemChildren = [].slice.call(element.querySelectorAll(strings$1.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
          listItemChildren.forEach(function (ele) {
            return ele.setAttribute('tabindex', tabIndexValue);
          });
        },
        followHref: function followHref(index) {
          var listItem = _this2.listElements[index];

          if (listItem && listItem.href) {
            listItem.click();
          }
        },
        hasCheckboxAtIndex: function hasCheckboxAtIndex(index) {
          var listItem = _this2.listElements[index];
          return !!listItem.querySelector(strings$1.CHECKBOX_SELECTOR);
        },
        hasRadioAtIndex: function hasRadioAtIndex(index) {
          var listItem = _this2.listElements[index];
          return !!listItem.querySelector(strings$1.RADIO_SELECTOR);
        },
        isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
          var listItem = _this2.listElements[index];
          var toggleEl = listItem.querySelector(strings$1.CHECKBOX_SELECTOR);
          return toggleEl.checked;
        },
        setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
          var listItem = _this2.listElements[index];
          var toggleEl = listItem.querySelector(strings$1.CHECKBOX_RADIO_SELECTOR);
          toggleEl.checked = isChecked;
          var event = document.createEvent('Event');
          event.initEvent('change', true, true);
          toggleEl.dispatchEvent(event);
        }
      }));
    }
  }, {
    key: "vertical",
    set: function set(value) {
      this.foundation_.setVerticalOrientation(value);
    }
    /** @return Array<!Element>*/

  }, {
    key: "listElements",
    get: function get() {
      return [].slice.call(this.root_.querySelectorAll(strings$1.ENABLED_ITEMS_SELECTOR));
    }
    /** @param {boolean} value */

  }, {
    key: "wrapFocus",
    set: function set(value) {
      this.foundation_.setWrapFocus(value);
    }
    /** @param {boolean} isSingleSelectionList */

  }, {
    key: "singleSelection",
    set: function set(isSingleSelectionList) {
      this.foundation_.setSingleSelection(isSingleSelectionList);
    }
    /** @param {number} index */

  }, {
    key: "selectedIndex",
    set: function set(index) {
      this.foundation_.setSelectedIndex(index);
    }
  }], [{
    key: "attachTo",
    value: function attachTo(root) {
      return new MDCList(root);
    }
  }]);

  return MDCList;
}(MDCComponent);

var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
var candidateSelector = candidateSelectors.join(',');
var matches$1 = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

function tabbable(el, options) {
  options = options || {};
  var elementDocument = el.ownerDocument || el;
  var regularTabbables = [];
  var orderedTabbables = [];
  var untouchabilityChecker = new UntouchabilityChecker(elementDocument);
  var candidates = el.querySelectorAll(candidateSelector);

  if (options.includeContainer) {
    if (matches$1.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var i, candidate, candidateTabindex;

  for (i = 0; i < candidates.length; i++) {
    candidate = candidates[i];
    if (!isNodeMatchingSelectorTabbable(candidate, untouchabilityChecker)) continue;
    candidateTabindex = getTabindex(candidate);

    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate
      });
    }
  }

  var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
    return a.node;
  }).concat(regularTabbables);
  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node, untouchabilityChecker) {
  if (!isNodeMatchingSelectorFocusable(node, untouchabilityChecker) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
    return false;
  }

  return true;
}

function isTabbable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches$1.call(node, candidateSelector) === false) return false;
  return isNodeMatchingSelectorTabbable(node, untouchabilityChecker);
}

function isNodeMatchingSelectorFocusable(node, untouchabilityChecker) {
  untouchabilityChecker = untouchabilityChecker || new UntouchabilityChecker(node.ownerDocument || node);

  if (node.disabled || isHiddenInput(node) || untouchabilityChecker.isUntouchable(node)) {
    return false;
  }

  return true;
}

var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');

function isFocusable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches$1.call(node, focusableCandidateSelector) === false) return false;
  return isNodeMatchingSelectorFocusable(node, untouchabilityChecker);
}

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
  if (!isNaN(tabindexAttr)) return tabindexAttr; // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.

  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
} // Array.prototype.find not available in IE.


function find(list, predicate) {
  for (var i = 0, length = list.length; i < length; i++) {
    if (predicate(list[i])) return list[i];
  }
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }
}

function isTabbableRadio(node) {
  if (!node.name) return true; // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.

  var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
} // An element is "untouchable" if *it or one of its ancestors* has
// `visibility: hidden` or `display: none`.


function UntouchabilityChecker(elementDocument) {
  this.doc = elementDocument; // Node cache must be refreshed on every check, in case
  // the content of the element has changed. The cache contains tuples
  // mapping nodes to their boolean result.

  this.cache = [];
} // getComputedStyle accurately reflects `visibility: hidden` of ancestors
// but not `display: none`, so we need to recursively check parents.


UntouchabilityChecker.prototype.hasDisplayNone = function hasDisplayNone(node, nodeComputedStyle) {
  if (node === this.doc.documentElement) return false; // Search for a cached result.

  var cached = find(this.cache, function (item) {
    return item === node;
  });
  if (cached) return cached[1];
  nodeComputedStyle = nodeComputedStyle || this.doc.defaultView.getComputedStyle(node);
  var result = false;

  if (nodeComputedStyle.display === 'none') {
    result = true;
  } else if (node.parentNode) {
    result = this.hasDisplayNone(node.parentNode);
  }

  this.cache.push([node, result]);
  return result;
};

UntouchabilityChecker.prototype.isUntouchable = function isUntouchable(node) {
  if (node === this.doc.documentElement) return false;
  var computedStyle = this.doc.defaultView.getComputedStyle(node);
  if (this.hasDisplayNone(node, computedStyle)) return true;
  return computedStyle.visibility === 'hidden';
};

var tabbable_1 = tabbable;

var immutable = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
  var target = {};

  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}

var activeFocusTraps = function () {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];

        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();

function focusTrap(element, userOptions) {
  var doc = document;
  var container = typeof element === 'string' ? doc.querySelector(element) : element;
  var config = immutable({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true
  }, userOptions);
  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };
  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };
  return trap;

  function activate(activateOptions) {
    if (state.active) return;
    updateTabbableNodes();
    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;
    var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;

    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;
    removeListeners();
    state.active = false;
    state.paused = false;
    activeFocusTraps.deactivateTrap(trap);
    var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;

    if (onDeactivate) {
      onDeactivate();
    }

    var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;

    if (returnFocus) {
      delay(function () {
        tryFocus(state.nodeFocusedBeforeActivation);
      });
    }

    return trap;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    addListeners();
  }

  function addListeners() {
    if (!state.active) return; // There can be only one listening focus trap at a time

    activeFocusTraps.activateTrap(trap);
    updateTabbableNodes(); // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.

    delay(function () {
      tryFocus(getInitialFocusNode());
    });
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, true);
    doc.addEventListener('touchstart', checkPointerDown, true);
    doc.addEventListener('click', checkClick, true);
    doc.addEventListener('keydown', checkKey, true);
    return trap;
  }

  function removeListeners() {
    if (!state.active) return;
    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;

    if (!optionValue) {
      return null;
    }

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);

      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }

    if (typeof optionValue === 'function') {
      node = optionValue();

      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }

    return node;
  }

  function getInitialFocusNode() {
    var node;

    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error("You can't have a focus-trap without at least one focusable element");
    }

    return node;
  } // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.


  function checkPointerDown(e) {
    if (container.contains(e.target)) return;

    if (config.clickOutsideDeactivates) {
      deactivate({
        returnFocus: !tabbable_1.isFocusable(e.target)
      });
    } else {
      e.preventDefault();
    }
  } // In case focus escapes the trap for some strange reason, pull it back in.


  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (container.contains(e.target) || e.target instanceof Document) {
      return;
    }

    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      deactivate();
      return;
    }

    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  } // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.


  function checkTab(e) {
    updateTabbableNodes();

    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }

    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = tabbable_1(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode = tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;

    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus();
    state.mostRecentlyFocusedNode = node;

    if (isSelectableInput(node)) {
      node.select();
    }
  }
}

function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
}

function delay(fn) {
  return setTimeout(fn, 0);
}

var focusTrap_1 = focusTrap;

var media = new (
/*#__PURE__*/
function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "small",
    get: function get() {
      return this._small || (this._small = window.matchMedia('(max-width: 839px)'));
    }
  }, {
    key: "large",
    get: function get() {
      return this._large || (this._large = window.matchMedia('(min-width: 1200px)'));
    }
  }]);

  return _class;
}())();
var script = {
  name: 'mdc-drawer',
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    modal: Boolean,
    open: Boolean,
    toolbarSpacer: Boolean,
    toggleOn: String,
    toggleOnSource: {
      type: Object,
      required: false
    },
    openOn: String,
    openOnSource: {
      type: Object,
      required: false
    },
    closeOn: String,
    closeOnSource: {
      type: Object,
      required: false
    }
  },
  provide: function provide() {
    return {
      mdcDrawer: this
    };
  },
  data: function data() {
    return {
      // open_: false,
      classes: {}
    };
  },
  computed: {
    type: function type() {},
    isModal: function isModal() {
      return this.modal;
    }
  },
  watch: {
    open: 'onOpen_'
  },
  mounted: function mounted() {
    var _this = this;

    this.drawer_ = this.$refs.drawer;
    var adapter = {
      addClass: function addClass(className) {
        return _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      hasClass: function hasClass(className) {
        return _this.drawer_.classList.contains(className);
      },
      elementHasClass: function elementHasClass(element, className) {
        return element.classList.contains(className);
      },
      saveFocus: function saveFocus() {
        _this.previousFocus_ = document.activeElement;
      },
      restoreFocus: function restoreFocus() {
        var previousFocus = _this.previousFocus_ && _this.previousFocus_.focus;

        if (_this.drawer_.contains(document.activeElement) && previousFocus) {
          _this.previousFocus_.focus();
        }
      },
      focusActiveNavigationItem: function focusActiveNavigationItem() {
        var activeNavItemEl = _this.drawer_.querySelector(".".concat(MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS));

        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: function notifyClose() {
        _this.$emit('change', false);

        _this.$emit('close');
      },
      notifyOpen: function notifyOpen() {
        _this.$emit('change', true);

        _this.$emit('open');
      },
      trapFocus: function trapFocus() {
        return _this.focusTrap_.activate();
      },
      releaseFocus: function releaseFocus() {
        return _this.focusTrap_.deactivate();
      }
    };
    var _MDCDismissibleDrawer = MDCDismissibleDrawerFoundation.cssClasses,
        DISMISSIBLE = _MDCDismissibleDrawer.DISMISSIBLE,
        MODAL = _MDCDismissibleDrawer.MODAL;

    if (this.drawer_.classList.contains(DISMISSIBLE)) {
      this.foundation = new MDCDismissibleDrawerFoundation(adapter);
    } else if (this.drawer_.classList.contains(MODAL)) {
      this.foundation = new MDCModalDrawerFoundation(adapter);
    } else {
      throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are ".concat(DISMISSIBLE, " and ").concat(MODAL, "."));
    }

    this.foundation && this.foundation.init();
    this.initialSyncWithDOM();

    if (this.toggleOn) {
      this.toggleOnEventSource = this.toggleOnSource || this.$root;
      this.toggleOnEventSource.$on(this.toggleOn, this.toggle);
    }

    if (this.openOn) {
      this.openOnEventSource = this.openOnSource || this.$root;
      this.openOnEventSource.$on(this.openOn, this.show);
    }

    if (this.closeOn) {
      this.closeOnEventSource = this.closeOnSource || this.$root;
      this.closeOnEventSource.$on(this.closeOn, this.close);
    } // media.small.addListener(this.refreshMedia)
    // media.large.addListener(this.refreshMedia)
    // this.$nextTick(() => this.refreshMedia())

  },
  beforeDestroy: function beforeDestroy() {
    this.foundation && this.foundation.destroy();
    this.foundation = null; // media.small.removeListener(this.refreshMedia)
    // media.large.removeListener(this.refreshMedia)

    if (this.toggleOnEventSource) {
      this.toggleOnEventSource.$off(this.toggleOn, this.toggle);
    }

    if (this.openOnEventSource) {
      this.openOnEventSource.$off(this.openOn, this.show);
    }

    if (this.closeOnEventSource) {
      this.closeOnEventSource.$off(this.closeOn, this.close);
    }
  },
  methods: {
    initialSyncWithDOM: function initialSyncWithDOM() {
      var _this2 = this;

      var MODAL = MDCDismissibleDrawerFoundation.cssClasses.MODAL;

      if (this.drawer_.classList.contains(MODAL)) {
        var SCRIM_SELECTOR = MDCDismissibleDrawerFoundation.strings.SCRIM_SELECTOR;
        this.scrim_ = this.drawer_.parentElement.querySelector(SCRIM_SELECTOR);

        this.handleScrimClick_ = function () {
          return _this2.foundation.handleScrimClick();
        };

        this.scrim_.addEventListener('click', this.handleScrimClick_);
        this.focusTrap_ = createFocusTrapInstance(this.drawer_, this.focusTrapFactory_);
      }

      this.handleKeydown_ = function (evt) {
        return _this2.foundation.handleKeydown(evt);
      };

      this.handleTransitionEnd_ = function (evt) {
        return _this2.foundation.handleTransitionEnd(evt);
      };

      this.$el.addEventListener('keydown', this.handleKeydown_);
      this.$el.addEventListener('transitionend', this.handleTransitionEnd_);
    },
    onOpen_: function onOpen_(value) {
      if (this.open) {
        this.foundation && this.foundation.open();
      } else {
        this.foundation && this.foundation.close();
      }
    },
    onChange: function onChange(event) {
      this.$emit('change', event);
      this.$root.$emit('vma:layout');
    },
    show: function show() {
      this.foundation.open();
    },
    close: function close() {
      this.foundation.close();
    },
    toggle: function toggle() {
      this.foundation.isOpen() ? this.foundation.close() : this.foundation.open();
    },
    isOpen: function isOpen() {
      return this.foundation.isOpen();
    },
    refreshMedia: function refreshMedia() {// this.small = media.small.matches
      // this.large = media.large.matches
      // if (this.isResponsive) {
      //   if (this.large) {
      //     this.show()
      //   } else {
      //     this.close()
      //   }
      // }
    }
  }
};

function createFocusTrapInstance(surfaceEl) {
  var focusTrapFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : focusTrap_1;
  return focusTrapFactory(surfaceEl, {
    clickOutsideDeactivates: true,
    initialFocus: false,
    // Navigation drawer handles focusing on active nav item.
    escapeDeactivates: false,
    // Navigation drawer handles ESC.
    returnFocusOnDeactivate: false // Navigation drawer handles restore focus.

  });
}

/* script */
            const __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [
    _c(
      "aside",
      {
        ref: "drawer",
        staticClass: "mdc-drawer mdc-drawer--modal",
        class: _vm.classes
      },
      [
        _vm.$slots["header"] ? _vm._t("header") : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mdc-drawer__content" },
          [_vm._t("default")],
          2
        )
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "mdc-drawer-scrim" }),
    _vm._v(" "),
    _vm.toolbarSpacer
      ? _c("div", { staticClass: "mdc-top-app-bar--fixed-adjust" })
      : _vm._e()
  ])
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
    component.__file = "/ddata/extra/vma/components/drawer/mdc-drawer.vue";

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
  

  
  var mdcDrawer = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

//
//
//
//
//
//
var script$1 = {
  name: 'mdc-drawer-header'
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
    { staticClass: "mdc-drawer-header mdc-drawer__header" },
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
    component.__file = "/ddata/extra/vma/components/drawer/mdc-drawer-header.vue";

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
  

  
  var mdcDrawerHeader = __vue_normalize__$1(
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
var script$2 = {
  name: 'mdc-drawer-list',
  props: {
    dense: Boolean
  },
  data: function data() {
    return {
      classes: {
        'mdc-list--dense': this.dense
      }
    };
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
    "nav",
    { staticClass: "mdc-drawer-list mdc-list", class: _vm.classes },
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
    component.__file = "/ddata/extra/vma/components/drawer/mdc-drawer-list.vue";

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
  

  
  var mdcDrawerList = __vue_normalize__$2(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

var script$3 = {
  name: 'mdc-drawer-item',
  inject: ['mdcDrawer'],
  mixins: [DispatchEventMixin, CustomLinkMixin],
  props: {
    startIcon: String,
    modalClose: {
      type: Boolean,
      default: true
    },
    activated: Boolean,
    exactActiveClass: {
      type: String,
      default: 'mdc-list-item--activated'
    }
  },
  data: function data() {
    return {
      classes: {},
      styles: {}
    };
  },
  computed: {
    mylisteners: function mylisteners() {
      var _this = this;

      return _objectSpread({}, this.$listeners, {
        click: function click(e) {
          _this.mdcDrawer.isModal && _this.modalClose && _this.mdcDrawer.close();

          _this.dispatchEvent(e);
        }
      });
    },
    itemClasses: function itemClasses() {
      return {
        'mdc-list-item--activated': this.activated
      };
    },
    hasStartDetail: function hasStartDetail() {
      return this.startIcon || this.$slots['start-detail'];
    }
  },
  mounted: function mounted() {
    this.ripple = new RippleBase(this);
    this.ripple.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.ripple && this.ripple.destroy();
    this.ripple = null;
  }
};

/* script */
            const __vue_script__$3 = script$3;
            
/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "custom-link",
    _vm._g(
      {
        staticClass: "mdc-drawer-item mdc-list-item",
        class: [_vm.classes, _vm.itemClasses],
        style: _vm.styles,
        attrs: { link: _vm.link }
      },
      _vm.mylisteners
    ),
    [
      _vm.hasStartDetail
        ? _c(
            "span",
            { staticClass: "mdc-list-item__graphic" },
            [
              _vm._t("start-detail", [
                _c(
                  "i",
                  {
                    staticClass: "material-icons",
                    attrs: { "aria-hidden": "true" }
                  },
                  [_vm._v(_vm._s(_vm.startIcon))]
                )
              ])
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
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
    component.__file = "/ddata/extra/vma/components/drawer/mdc-drawer-item.vue";

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
  

  
  var mdcDrawerItem = __vue_normalize__$3(
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
  name: 'mdc-drawer-divider'
};

/* script */
            const __vue_script__$4 = script$4;
            
/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("hr", { staticClass: "mdc-list-divider" })
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
    component.__file = "/ddata/extra/vma/components/drawer/mdc-drawer-divider.vue";

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
  

  
  var mdcDrawerDivider = __vue_normalize__$4(
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
  mdcDrawer: mdcDrawer,
  mdcDrawerHeader: mdcDrawerHeader,
  mdcDrawerList: mdcDrawerList,
  mdcDrawerItem: mdcDrawerItem,
  mdcDrawerDivider: mdcDrawerDivider
});

export default index;
export { mdcDrawer, mdcDrawerHeader, mdcDrawerList, mdcDrawerItem, mdcDrawerDivider };
//# sourceMappingURL=index.js.map
