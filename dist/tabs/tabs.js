/**
* @module vue-mdc-adaptertabs 0.19.0-beta
* @exports VueMDCTabs
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueMDCTabs = factory());
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

  var CustomElement = {
    functional: true,
    render: function render(createElement, context) {
      return createElement(context.props.is || context.props.tag || 'div', context.data, context.children);
    }
  };
  var CustomElementMixin = {
    components: {
      CustomElement: CustomElement
    }
  };

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
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

  function extractIconProp(iconProp) {
    if (typeof iconProp === 'string') {
      return {
        classes: {
          'material-icons': true
        },
        content: iconProp
      };
    } else if (iconProp instanceof Array) {
      return {
        classes: iconProp.reduce(function (result, value) {
          return _extends(result, _defineProperty({}, value, true));
        }, {})
      };
    } else if (_typeof(iconProp) === 'object') {
      return {
        classes: iconProp.className.split(' ').reduce(function (result, value) {
          return _extends(result, _defineProperty({}, value, true));
        }, {}),
        content: iconProp.textContent
      };
    }
  }

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
   * Adapter for MDC Tab.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the Tab  into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */

  var MDCTabAdapter =
  /*#__PURE__*/
  function () {
    function MDCTabAdapter() {
      _classCallCheck(this, MDCTabAdapter);
    }

    _createClass(MDCTabAdapter, [{
      key: "addClass",

      /**
       * Adds the given className to the root element.
       * @param {string} className The className to add
       */
      value: function addClass(className) {}
      /**
       * Removes the given className from the root element.
       * @param {string} className The className to remove
       */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}
      /**
       * Returns whether the root element has the given className.
       * @param {string} className The className to remove
       * @return {boolean}
       */

    }, {
      key: "hasClass",
      value: function hasClass(className) {}
      /**
       * Sets the given attrName of the root element to the given value.
       * @param {string} attr The attribute name to set
       * @param {string} value The value so give the attribute
       */

    }, {
      key: "setAttr",
      value: function setAttr(attr, value) {}
      /**
       * Activates the indicator element.
       * @param {!ClientRect=} previousIndicatorClientRect The client rect of the previously activated indicator
       */

    }, {
      key: "activateIndicator",
      value: function activateIndicator(previousIndicatorClientRect) {}
      /** Deactivates the indicator. */

    }, {
      key: "deactivateIndicator",
      value: function deactivateIndicator() {}
      /**
       * Emits the MDCTab:interacted event for use by parent components
       */

    }, {
      key: "notifyInteracted",
      value: function notifyInteracted() {}
      /**
       * Returns the offsetLeft value of the root element.
       * @return {number}
       */

    }, {
      key: "getOffsetLeft",
      value: function getOffsetLeft() {}
      /**
       * Returns the offsetWidth value of the root element.
       * @return {number}
       */

    }, {
      key: "getOffsetWidth",
      value: function getOffsetWidth() {}
      /**
       * Returns the offsetLeft of the content element.
       * @return {number}
       */

    }, {
      key: "getContentOffsetLeft",
      value: function getContentOffsetLeft() {}
      /**
       * Returns the offsetWidth of the content element.
       * @return {number}
       */

    }, {
      key: "getContentOffsetWidth",
      value: function getContentOffsetWidth() {}
      /**
       * Applies focus to the root element
       */

    }, {
      key: "focus",
      value: function focus() {}
    }]);

    return MDCTabAdapter;
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
    ACTIVE: 'mdc-tab--active'
  };
  /** @enum {string} */

  var strings = {
    ARIA_SELECTED: 'aria-selected',
    RIPPLE_SELECTOR: '.mdc-tab__ripple',
    CONTENT_SELECTOR: '.mdc-tab__content',
    TAB_INDICATOR_SELECTOR: '.mdc-tab-indicator',
    TABINDEX: 'tabIndex',
    INTERACTED_EVENT: 'MDCTab:interacted'
  };

  /**
   * @extends {MDCFoundation<!MDCTabAdapter>}
   * @final
   */

  var MDCTabFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCTabFoundation, _MDCFoundation);

    _createClass(MDCTabFoundation, null, [{
      key: "cssClasses",

      /** @return enum {string} */
      get: function get() {
        return cssClasses;
      }
      /** @return enum {string} */

    }, {
      key: "strings",
      get: function get() {
        return strings;
      }
      /**
       * @see MDCTabAdapter for typing information
       * @return {!MDCTabAdapter}
       */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCTabAdapter} */
          {
            addClass: function addClass() {},
            removeClass: function removeClass() {},
            hasClass: function hasClass() {},
            setAttr: function setAttr() {},
            activateIndicator: function activateIndicator() {},
            deactivateIndicator: function deactivateIndicator() {},
            notifyInteracted: function notifyInteracted() {},
            getOffsetLeft: function getOffsetLeft() {},
            getOffsetWidth: function getOffsetWidth() {},
            getContentOffsetLeft: function getContentOffsetLeft() {},
            getContentOffsetWidth: function getContentOffsetWidth() {},
            focus: function focus() {}
          }
        );
      }
      /** @param {!MDCTabAdapter} adapter */

    }]);

    function MDCTabFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCTabFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCTabFoundation).call(this, _extends(MDCTabFoundation.defaultAdapter, adapter)));
      /** @private {boolean} */

      _this.focusOnActivate_ = true;
      return _this;
    }
    /**
     * Handles the "click" event
     */


    _createClass(MDCTabFoundation, [{
      key: "handleClick",
      value: function handleClick() {
        // It's up to the parent component to keep track of the active Tab and
        // ensure we don't activate a Tab that's already active.
        this.adapter_.notifyInteracted();
      }
      /**
       * Returns the Tab's active state
       * @return {boolean}
       */

    }, {
      key: "isActive",
      value: function isActive() {
        return this.adapter_.hasClass(cssClasses.ACTIVE);
      }
      /**
       * Sets whether the tab should focus itself when activated
       * @param {boolean} focusOnActivate
       */

    }, {
      key: "setFocusOnActivate",
      value: function setFocusOnActivate(focusOnActivate) {
        this.focusOnActivate_ = focusOnActivate;
      }
      /**
       * Activates the Tab
       * @param {!ClientRect=} previousIndicatorClientRect
       */

    }, {
      key: "activate",
      value: function activate(previousIndicatorClientRect) {
        this.adapter_.addClass(cssClasses.ACTIVE);
        this.adapter_.setAttr(strings.ARIA_SELECTED, 'true');
        this.adapter_.setAttr(strings.TABINDEX, '0');
        this.adapter_.activateIndicator(previousIndicatorClientRect);

        if (this.focusOnActivate_) {
          this.adapter_.focus();
        }
      }
      /**
       * Deactivates the Tab
       */

    }, {
      key: "deactivate",
      value: function deactivate() {
        // Early exit
        if (!this.isActive()) {
          return;
        }

        this.adapter_.removeClass(cssClasses.ACTIVE);
        this.adapter_.setAttr(strings.ARIA_SELECTED, 'false');
        this.adapter_.setAttr(strings.TABINDEX, '-1');
        this.adapter_.deactivateIndicator();
      }
      /**
       * Returns the dimensions of the Tab
       * @return {!MDCTabDimensions}
       */

    }, {
      key: "computeDimensions",
      value: function computeDimensions() {
        var rootWidth = this.adapter_.getOffsetWidth();
        var rootLeft = this.adapter_.getOffsetLeft();
        var contentWidth = this.adapter_.getContentOffsetWidth();
        var contentLeft = this.adapter_.getContentOffsetLeft();
        return {
          rootLeft: rootLeft,
          rootRight: rootLeft + rootWidth,
          contentLeft: rootLeft + contentLeft,
          contentRight: rootLeft + contentLeft + contentWidth
        };
      }
    }]);

    return MDCTabFoundation;
  }(MDCFoundation);

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

  /* eslint no-unused-vars: [2, {"args": "none"}] */

  /**
   * Adapter for MDC Ripple. Provides an interface for managing
   * - classes
   * - dom
   * - CSS variables
   * - position
   * - dimensions
   * - scroll position
   * - event handlers
   * - unbounded, active and disabled states
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
  var MDCRippleAdapter =
  /*#__PURE__*/
  function () {
    function MDCRippleAdapter() {
      _classCallCheck(this, MDCRippleAdapter);
    }

    _createClass(MDCRippleAdapter, [{
      key: "browserSupportsCssVars",

      /** @return {boolean} */
      value: function browserSupportsCssVars() {}
      /** @return {boolean} */

    }, {
      key: "isUnbounded",
      value: function isUnbounded() {}
      /** @return {boolean} */

    }, {
      key: "isSurfaceActive",
      value: function isSurfaceActive() {}
      /** @return {boolean} */

    }, {
      key: "isSurfaceDisabled",
      value: function isSurfaceDisabled() {}
      /** @param {string} className */

    }, {
      key: "addClass",
      value: function addClass(className) {}
      /** @param {string} className */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}
      /** @param {!EventTarget} target */

    }, {
      key: "containsEventTarget",
      value: function containsEventTarget(target) {}
      /**
       * @param {string} evtType
       * @param {!Function} handler
       */

    }, {
      key: "registerInteractionHandler",
      value: function registerInteractionHandler(evtType, handler) {}
      /**
       * @param {string} evtType
       * @param {!Function} handler
       */

    }, {
      key: "deregisterInteractionHandler",
      value: function deregisterInteractionHandler(evtType, handler) {}
      /**
       * @param {string} evtType
       * @param {!Function} handler
       */

    }, {
      key: "registerDocumentInteractionHandler",
      value: function registerDocumentInteractionHandler(evtType, handler) {}
      /**
       * @param {string} evtType
       * @param {!Function} handler
       */

    }, {
      key: "deregisterDocumentInteractionHandler",
      value: function deregisterDocumentInteractionHandler(evtType, handler) {}
      /**
       * @param {!Function} handler
       */

    }, {
      key: "registerResizeHandler",
      value: function registerResizeHandler(handler) {}
      /**
       * @param {!Function} handler
       */

    }, {
      key: "deregisterResizeHandler",
      value: function deregisterResizeHandler(handler) {}
      /**
       * @param {string} varName
       * @param {?number|string} value
       */

    }, {
      key: "updateCssVariable",
      value: function updateCssVariable(varName, value) {}
      /** @return {!ClientRect} */

    }, {
      key: "computeBoundingRect",
      value: function computeBoundingRect() {}
      /** @return {{x: number, y: number}} */

    }, {
      key: "getWindowPageOffset",
      value: function getWindowPageOffset() {}
    }]);

    return MDCRippleAdapter;
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
  var cssClasses$1 = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
  };
  var strings$1 = {
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
  };
  var numbers = {
    PADDING: 10,
    INITIAL_ORIGIN_SCALE: 0.6,
    DEACTIVATION_TIMEOUT_MS: 225,
    // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
    FG_DEACTIVATION_MS: 150,
    // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
    TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices

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
   * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
   * @private {boolean|undefined}
   */
  var supportsCssVariables_;
  /**
   * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
   * @private {boolean|undefined}
   */

  var supportsPassive_$1;
  /**
   * @param {!Window} windowObj
   * @return {boolean}
   */

  function detectEdgePseudoVarBug(windowObj) {
    // Detect versions of Edge with buggy var() support
    // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
    var document = windowObj.document;
    var node = document.createElement('div');
    node.className = 'mdc-ripple-surface--test-edge-var-bug';
    document.body.appendChild(node); // The bug exists if ::before style ends up propagating to the parent element.
    // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
    // but Firefox is known to support CSS custom properties correctly.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

    var computedStyle = windowObj.getComputedStyle(node);
    var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
    node.remove();
    return hasPseudoVarBug;
  }
  /**
   * @param {!Window} windowObj
   * @param {boolean=} forceRefresh
   * @return {boolean|undefined}
   */


  function supportsCssVariables(windowObj) {
    var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var supportsCssVariables = supportsCssVariables_;

    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
      return supportsCssVariables;
    }

    var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';

    if (!supportsFunctionPresent) {
      return;
    }

    var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari

    var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

    if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
      supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
    } else {
      supportsCssVariables = false;
    }

    if (!forceRefresh) {
      supportsCssVariables_ = supportsCssVariables;
    }

    return supportsCssVariables;
  } //

  /**
   * Determine whether the current browser supports passive event listeners, and if so, use them.
   * @param {!Window=} globalObj
   * @param {boolean=} forceRefresh
   * @return {boolean|!EventListenerOptions}
   */


  function applyPassive$1() {
    var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (supportsPassive_$1 === undefined || forceRefresh) {
      var isSupported = false;

      try {
        globalObj.document.addEventListener('test', null, {
          get passive() {
            isSupported = true;
            return isSupported;
          }

        });
      } catch (e) {}

      supportsPassive_$1 = isSupported;
    }

    return supportsPassive_$1 ?
    /** @type {!EventListenerOptions} */
    {
      passive: true
    } : false;
  }
  /**
   * @param {!Object} HTMLElementPrototype
   * @return {string}
   */


  function getMatchesProperty(HTMLElementPrototype) {
    /**
     * Order is important because we return the first existing method we find.
     * Do not change the order of the items in the below array.
     */
    var matchesMethods = ['matches', 'webkitMatchesSelector', 'msMatchesSelector'];
    var method = 'matches';

    for (var i = 0; i < matchesMethods.length; i++) {
      var matchesMethod = matchesMethods[i];

      if (matchesMethod in HTMLElementPrototype) {
        method = matchesMethod;
        break;
      }
    }

    return method;
  }
  /**
   * @param {!Event} ev
   * @param {{x: number, y: number}} pageOffset
   * @param {!ClientRect} clientRect
   * @return {{x: number, y: number}}
   */


  function getNormalizedEventCoords(ev, pageOffset, clientRect) {
    var x = pageOffset.x,
        y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY; // Determine touch point relative to the ripple container.

    if (ev.type === 'touchstart') {
      ev =
      /** @type {!TouchEvent} */
      ev;
      normalizedX = ev.changedTouches[0].pageX - documentX;
      normalizedY = ev.changedTouches[0].pageY - documentY;
    } else {
      ev =
      /** @type {!MouseEvent} */
      ev;
      normalizedX = ev.pageX - documentX;
      normalizedY = ev.pageY - documentY;
    }

    return {
      x: normalizedX,
      y: normalizedY
    };
  }

  var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs

  var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu']; // Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations

  /** @type {!Array<!EventTarget>} */

  var activatedTargets = [];
  /**
   * @extends {MDCFoundation<!MDCRippleAdapter>}
   */

  var MDCRippleFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCRippleFoundation, _MDCFoundation);

    _createClass(MDCRippleFoundation, null, [{
      key: "cssClasses",
      get: function get() {
        return cssClasses$1;
      }
    }, {
      key: "strings",
      get: function get() {
        return strings$1;
      }
    }, {
      key: "numbers",
      get: function get() {
        return numbers;
      }
    }, {
      key: "defaultAdapter",
      get: function get() {
        return {
          browserSupportsCssVars: function browserSupportsCssVars()
          /* boolean - cached */
          {},
          isUnbounded: function isUnbounded()
          /* boolean */
          {},
          isSurfaceActive: function isSurfaceActive()
          /* boolean */
          {},
          isSurfaceDisabled: function isSurfaceDisabled()
          /* boolean */
          {},
          addClass: function addClass()
          /* className: string */
          {},
          removeClass: function removeClass()
          /* className: string */
          {},
          containsEventTarget: function containsEventTarget()
          /* target: !EventTarget */
          {},
          registerInteractionHandler: function registerInteractionHandler()
          /* evtType: string, handler: EventListener */
          {},
          deregisterInteractionHandler: function deregisterInteractionHandler()
          /* evtType: string, handler: EventListener */
          {},
          registerDocumentInteractionHandler: function registerDocumentInteractionHandler()
          /* evtType: string, handler: EventListener */
          {},
          deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler()
          /* evtType: string, handler: EventListener */
          {},
          registerResizeHandler: function registerResizeHandler()
          /* handler: EventListener */
          {},
          deregisterResizeHandler: function deregisterResizeHandler()
          /* handler: EventListener */
          {},
          updateCssVariable: function updateCssVariable()
          /* varName: string, value: string */
          {},
          computeBoundingRect: function computeBoundingRect()
          /* ClientRect */
          {},
          getWindowPageOffset: function getWindowPageOffset()
          /* {x: number, y: number} */
          {}
        };
      }
    }]);

    function MDCRippleFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCRippleFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCRippleFoundation).call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));
      /** @private {number} */

      _this.layoutFrame_ = 0;
      /** @private {!ClientRect} */

      _this.frame_ =
      /** @type {!ClientRect} */
      {
        width: 0,
        height: 0
      };
      /** @private {!ActivationStateType} */

      _this.activationState_ = _this.defaultActivationState_();
      /** @private {number} */

      _this.initialSize_ = 0;
      /** @private {number} */

      _this.maxRadius_ = 0;
      /** @private {function(!Event)} */

      _this.activateHandler_ = function (e) {
        return _this.activate_(e);
      };
      /** @private {function(!Event=)} */


      _this.deactivateHandler_ = function () {
        return _this.deactivate_();
      };
      /** @private {function(!Event=)} */


      _this.focusHandler_ = function () {
        return _this.handleFocus();
      };
      /** @private {function(!Event=)} */


      _this.blurHandler_ = function () {
        return _this.handleBlur();
      };
      /** @private {!Function} */


      _this.resizeHandler_ = function () {
        return _this.layout();
      };
      /** @private {{left: number, top:number}} */


      _this.unboundedCoords_ = {
        left: 0,
        top: 0
      };
      /** @private {number} */

      _this.fgScale_ = 0;
      /** @private {number} */

      _this.activationTimer_ = 0;
      /** @private {number} */

      _this.fgDeactivationRemovalTimer_ = 0;
      /** @private {boolean} */

      _this.activationAnimationHasEnded_ = false;
      /** @private {!Function} */

      _this.activationTimerCallback_ = function () {
        _this.activationAnimationHasEnded_ = true;

        _this.runDeactivationUXLogicIfReady_();
      };
      /** @private {!Event|undefined} */


      _this.previousActivationEvent_;
      return _this;
    }
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     * @return {boolean}
     * @private
     */


    _createClass(MDCRippleFoundation, [{
      key: "supportsPressRipple_",
      value: function supportsPressRipple_() {
        return this.adapter_.browserSupportsCssVars();
      }
      /**
       * @return {!ActivationStateType}
       */

    }, {
      key: "defaultActivationState_",
      value: function defaultActivationState_() {
        return {
          isActivated: false,
          hasDeactivationUXRun: false,
          wasActivatedByPointer: false,
          wasElementMadeActive: false,
          activationEvent: undefined,
          isProgrammatic: false
        };
      }
      /** @override */

    }, {
      key: "init",
      value: function init() {
        var _this2 = this;

        var supportsPressRipple = this.supportsPressRipple_();
        this.registerRootHandlers_(supportsPressRipple);

        if (supportsPressRipple) {
          var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
              ROOT = _MDCRippleFoundation$.ROOT,
              UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;
          requestAnimationFrame(function () {
            _this2.adapter_.addClass(ROOT);

            if (_this2.adapter_.isUnbounded()) {
              _this2.adapter_.addClass(UNBOUNDED); // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple


              _this2.layoutInternal_();
            }
          });
        }
      }
      /** @override */

    }, {
      key: "destroy",
      value: function destroy() {
        var _this3 = this;

        if (this.supportsPressRipple_()) {
          if (this.activationTimer_) {
            clearTimeout(this.activationTimer_);
            this.activationTimer_ = 0;
            this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
          }

          if (this.fgDeactivationRemovalTimer_) {
            clearTimeout(this.fgDeactivationRemovalTimer_);
            this.fgDeactivationRemovalTimer_ = 0;
            this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
          }

          var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
              ROOT = _MDCRippleFoundation$2.ROOT,
              UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;
          requestAnimationFrame(function () {
            _this3.adapter_.removeClass(ROOT);

            _this3.adapter_.removeClass(UNBOUNDED);

            _this3.removeCssVars_();
          });
        }

        this.deregisterRootHandlers_();
        this.deregisterDeactivationHandlers_();
      }
      /**
       * @param {boolean} supportsPressRipple Passed from init to save a redundant function call
       * @private
       */

    }, {
      key: "registerRootHandlers_",
      value: function registerRootHandlers_(supportsPressRipple) {
        var _this4 = this;

        if (supportsPressRipple) {
          ACTIVATION_EVENT_TYPES.forEach(function (type) {
            _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
          });

          if (this.adapter_.isUnbounded()) {
            this.adapter_.registerResizeHandler(this.resizeHandler_);
          }
        }

        this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
      }
      /**
       * @param {!Event} e
       * @private
       */

    }, {
      key: "registerDeactivationHandlers_",
      value: function registerDeactivationHandlers_(e) {
        var _this5 = this;

        if (e.type === 'keydown') {
          this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
        } else {
          POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
            _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
          });
        }
      }
      /** @private */

    }, {
      key: "deregisterRootHandlers_",
      value: function deregisterRootHandlers_() {
        var _this6 = this;

        ACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
        });
        this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

        if (this.adapter_.isUnbounded()) {
          this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        }
      }
      /** @private */

    }, {
      key: "deregisterDeactivationHandlers_",
      value: function deregisterDeactivationHandlers_() {
        var _this7 = this;

        this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
        });
      }
      /** @private */

    }, {
      key: "removeCssVars_",
      value: function removeCssVars_() {
        var _this8 = this;

        var strings = MDCRippleFoundation.strings;
        Object.keys(strings).forEach(function (k) {
          if (k.indexOf('VAR_') === 0) {
            _this8.adapter_.updateCssVariable(strings[k], null);
          }
        });
      }
      /**
       * @param {!Event=} e
       * @private
       */

    }, {
      key: "activate_",
      value: function activate_(e) {
        var _this9 = this;

        if (this.adapter_.isSurfaceDisabled()) {
          return;
        }

        var activationState = this.activationState_;

        if (activationState.isActivated) {
          return;
        } // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction


        var previousActivationEvent = this.previousActivationEvent_;
        var isSameInteraction = previousActivationEvent && e !== undefined && previousActivationEvent.type !== e.type;

        if (isSameInteraction) {
          return;
        }

        activationState.isActivated = true;
        activationState.isProgrammatic = e === undefined;
        activationState.activationEvent = e;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e !== undefined && (e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown');
        var hasActivatedChild = e !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
          return _this9.adapter_.containsEventTarget(target);
        });

        if (hasActivatedChild) {
          // Immediately reset activation state, while preserving logic that prevents touch follow-on events
          this.resetActivationState_();
          return;
        }

        if (e !== undefined) {
          activatedTargets.push(
          /** @type {!EventTarget} */
          e.target);
          this.registerDeactivationHandlers_(e);
        }

        activationState.wasElementMadeActive = this.checkElementMadeActive_(e);

        if (activationState.wasElementMadeActive) {
          this.animateActivation_();
        }

        requestAnimationFrame(function () {
          // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
          activatedTargets = [];

          if (!activationState.wasElementMadeActive && e !== undefined && (e.key === ' ' || e.keyCode === 32)) {
            // If space was pressed, try again within an rAF call to detect :active, because different UAs report
            // active states inconsistently when they're called within event handling code:
            // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
            // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
            // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
            // variable is set within a rAF callback for a submit button interaction (#2241).
            activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);

            if (activationState.wasElementMadeActive) {
              _this9.animateActivation_();
            }
          }

          if (!activationState.wasElementMadeActive) {
            // Reset activation state immediately if element was not made active.
            _this9.activationState_ = _this9.defaultActivationState_();
          }
        });
      }
      /**
       * @param {!Event=} e
       * @private
       */

    }, {
      key: "checkElementMadeActive_",
      value: function checkElementMadeActive_(e) {
        return e !== undefined && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
      }
      /**
       * @param {!Event=} event Optional event containing position information.
       */

    }, {
      key: "activate",
      value: function activate(event) {
        this.activate_(event);
      }
      /** @private */

    }, {
      key: "animateActivation_",
      value: function animateActivation_() {
        var _this10 = this;

        var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
            VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
            VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
        var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
            FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
            FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var translateStart = '';
        var translateEnd = '';

        if (!this.adapter_.isUnbounded()) {
          var _this$getFgTranslatio = this.getFgTranslationCoordinates_(),
              startPoint = _this$getFgTranslatio.startPoint,
              endPoint = _this$getFgTranslatio.endPoint;

          translateStart = "".concat(startPoint.x, "px, ").concat(startPoint.y, "px");
          translateEnd = "".concat(endPoint.x, "px, ").concat(endPoint.y, "px");
        }

        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd); // Cancel any ongoing activation/deactivation animations

        clearTimeout(this.activationTimer_);
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.rmBoundedActivationClasses_();
        this.adapter_.removeClass(FG_DEACTIVATION); // Force layout in order to re-trigger the animation.

        this.adapter_.computeBoundingRect();
        this.adapter_.addClass(FG_ACTIVATION);
        this.activationTimer_ = setTimeout(function () {
          return _this10.activationTimerCallback_();
        }, DEACTIVATION_TIMEOUT_MS);
      }
      /**
       * @private
       * @return {{startPoint: PointType, endPoint: PointType}}
       */

    }, {
      key: "getFgTranslationCoordinates_",
      value: function getFgTranslationCoordinates_() {
        var _this$activationState = this.activationState_,
            activationEvent = _this$activationState.activationEvent,
            wasActivatedByPointer = _this$activationState.wasActivatedByPointer;
        var startPoint;

        if (wasActivatedByPointer) {
          startPoint = getNormalizedEventCoords(
          /** @type {!Event} */
          activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
        } else {
          startPoint = {
            x: this.frame_.width / 2,
            y: this.frame_.height / 2
          };
        } // Center the element around the start point.


        startPoint = {
          x: startPoint.x - this.initialSize_ / 2,
          y: startPoint.y - this.initialSize_ / 2
        };
        var endPoint = {
          x: this.frame_.width / 2 - this.initialSize_ / 2,
          y: this.frame_.height / 2 - this.initialSize_ / 2
        };
        return {
          startPoint: startPoint,
          endPoint: endPoint
        };
      }
      /** @private */

    }, {
      key: "runDeactivationUXLogicIfReady_",
      value: function runDeactivationUXLogicIfReady_() {
        var _this11 = this;

        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _this$activationState2 = this.activationState_,
            hasDeactivationUXRun = _this$activationState2.hasDeactivationUXRun,
            isActivated = _this$activationState2.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;

        if (activationHasEnded && this.activationAnimationHasEnded_) {
          this.rmBoundedActivationClasses_();
          this.adapter_.addClass(FG_DEACTIVATION);
          this.fgDeactivationRemovalTimer_ = setTimeout(function () {
            _this11.adapter_.removeClass(FG_DEACTIVATION);
          }, numbers.FG_DEACTIVATION_MS);
        }
      }
      /** @private */

    }, {
      key: "rmBoundedActivationClasses_",
      value: function rmBoundedActivationClasses_() {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter_.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded_ = false;
        this.adapter_.computeBoundingRect();
      }
    }, {
      key: "resetActivationState_",
      value: function resetActivationState_() {
        var _this12 = this;

        this.previousActivationEvent_ = this.activationState_.activationEvent;
        this.activationState_ = this.defaultActivationState_(); // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.

        setTimeout(function () {
          return _this12.previousActivationEvent_ = undefined;
        }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
      }
      /**
       * @private
       */

    }, {
      key: "deactivate_",
      value: function deactivate_() {
        var _this13 = this;

        var activationState = this.activationState_; // This can happen in scenarios such as when you have a keyup event that blurs the element.

        if (!activationState.isActivated) {
          return;
        }

        var state =
        /** @type {!ActivationStateType} */
        _extends({}, activationState);

        if (activationState.isProgrammatic) {
          requestAnimationFrame(function () {
            return _this13.animateDeactivation_(state);
          });
          this.resetActivationState_();
        } else {
          this.deregisterDeactivationHandlers_();
          requestAnimationFrame(function () {
            _this13.activationState_.hasDeactivationUXRun = true;

            _this13.animateDeactivation_(state);

            _this13.resetActivationState_();
          });
        }
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this.deactivate_();
      }
      /**
       * @param {!ActivationStateType} options
       * @private
       */

    }, {
      key: "animateDeactivation_",
      value: function animateDeactivation_(_ref) {
        var wasActivatedByPointer = _ref.wasActivatedByPointer,
            wasElementMadeActive = _ref.wasElementMadeActive;

        if (wasActivatedByPointer || wasElementMadeActive) {
          this.runDeactivationUXLogicIfReady_();
        }
      }
    }, {
      key: "layout",
      value: function layout() {
        var _this14 = this;

        if (this.layoutFrame_) {
          cancelAnimationFrame(this.layoutFrame_);
        }

        this.layoutFrame_ = requestAnimationFrame(function () {
          _this14.layoutInternal_();

          _this14.layoutFrame_ = 0;
        });
      }
      /** @private */

    }, {
      key: "layoutInternal_",
      value: function layoutInternal_() {
        var _this15 = this;

        this.frame_ = this.adapter_.computeBoundingRect();
        var maxDim = Math.max(this.frame_.height, this.frame_.width); // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.

        var getBoundedRadius = function getBoundedRadius() {
          var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
          return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };

        this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius(); // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform

        this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        this.fgScale_ = this.maxRadius_ / this.initialSize_;
        this.updateLayoutCssVars_();
      }
      /** @private */

    }, {
      key: "updateLayoutCssVars_",
      value: function updateLayoutCssVars_() {
        var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
            VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
            VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
            VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
            VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;
        this.adapter_.updateCssVariable(VAR_FG_SIZE, "".concat(this.initialSize_, "px"));
        this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

        if (this.adapter_.isUnbounded()) {
          this.unboundedCoords_ = {
            left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
            top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
          };
          this.adapter_.updateCssVariable(VAR_LEFT, "".concat(this.unboundedCoords_.left, "px"));
          this.adapter_.updateCssVariable(VAR_TOP, "".concat(this.unboundedCoords_.top, "px"));
        }
      }
      /** @param {boolean} unbounded */

    }, {
      key: "setUnbounded",
      value: function setUnbounded(unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

        if (unbounded) {
          this.adapter_.addClass(UNBOUNDED);
        } else {
          this.adapter_.removeClass(UNBOUNDED);
        }
      }
    }, {
      key: "handleFocus",
      value: function handleFocus() {
        var _this16 = this;

        requestAnimationFrame(function () {
          return _this16.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      }
    }, {
      key: "handleBlur",
      value: function handleBlur() {
        var _this17 = this;

        requestAnimationFrame(function () {
          return _this17.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      }
    }]);

    return MDCRippleFoundation;
  }(MDCFoundation);

  /**
   * @extends MDCComponent<!MDCRippleFoundation>
   */

  var MDCRipple =
  /*#__PURE__*/
  function (_MDCComponent) {
    _inherits(MDCRipple, _MDCComponent);

    /** @param {...?} args */
    function MDCRipple() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MDCRipple);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MDCRipple)).call.apply(_getPrototypeOf2, [this].concat(args)));
      /** @type {boolean} */

      _this.disabled = false;
      /** @private {boolean} */

      _this.unbounded_;
      return _this;
    }
    /**
     * @param {!Element} root
     * @param {{isUnbounded: (boolean|undefined)}=} options
     * @return {!MDCRipple}
     */


    _createClass(MDCRipple, [{
      key: "setUnbounded_",

      /**
       * Closure Compiler throws an access control error when directly accessing a
       * protected or private property inside a getter/setter, like unbounded above.
       * By accessing the protected property inside a method, we solve that problem.
       * That's why this function exists.
       * @private
       */
      value: function setUnbounded_() {
        this.foundation_.setUnbounded(this.unbounded_);
      }
    }, {
      key: "activate",
      value: function activate() {
        this.foundation_.activate();
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this.foundation_.deactivate();
      }
    }, {
      key: "layout",
      value: function layout() {
        this.foundation_.layout();
      }
      /**
       * @return {!MDCRippleFoundation}
       * @override
       */

    }, {
      key: "getDefaultFoundation",
      value: function getDefaultFoundation() {
        return new MDCRippleFoundation(MDCRipple.createAdapter(this));
      }
      /** @override */

    }, {
      key: "initialSyncWithDOM",
      value: function initialSyncWithDOM() {
        this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
      }
    }, {
      key: "unbounded",

      /** @return {boolean} */
      get: function get() {
        return this.unbounded_;
      }
      /** @param {boolean} unbounded */
      ,
      set: function set(unbounded) {
        this.unbounded_ = Boolean(unbounded);
        this.setUnbounded_();
      }
    }], [{
      key: "attachTo",
      value: function attachTo(root) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref$isUnbounded = _ref.isUnbounded,
            isUnbounded = _ref$isUnbounded === void 0 ? undefined : _ref$isUnbounded;

        var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

        if (isUnbounded !== undefined) {
          ripple.unbounded =
          /** @type {boolean} */
          isUnbounded;
        }

        return ripple;
      }
      /**
       * @param {!RippleCapableSurface} instance
       * @return {!MDCRippleAdapter}
       */

    }, {
      key: "createAdapter",
      value: function createAdapter(instance) {
        var MATCHES = getMatchesProperty(HTMLElement.prototype);
        return {
          browserSupportsCssVars: function browserSupportsCssVars() {
            return supportsCssVariables(window);
          },
          isUnbounded: function isUnbounded() {
            return instance.unbounded;
          },
          isSurfaceActive: function isSurfaceActive() {
            return instance.root_[MATCHES](':active');
          },
          isSurfaceDisabled: function isSurfaceDisabled() {
            return instance.disabled;
          },
          addClass: function addClass(className) {
            return instance.root_.classList.add(className);
          },
          removeClass: function removeClass(className) {
            return instance.root_.classList.remove(className);
          },
          containsEventTarget: function containsEventTarget(target) {
            return instance.root_.contains(target);
          },
          registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
            return instance.root_.addEventListener(evtType, handler, applyPassive$1());
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
            return instance.root_.removeEventListener(evtType, handler, applyPassive$1());
          },
          registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
            return document.documentElement.addEventListener(evtType, handler, applyPassive$1());
          },
          deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
            return document.documentElement.removeEventListener(evtType, handler, applyPassive$1());
          },
          registerResizeHandler: function registerResizeHandler(handler) {
            return window.addEventListener('resize', handler);
          },
          deregisterResizeHandler: function deregisterResizeHandler(handler) {
            return window.removeEventListener('resize', handler);
          },
          updateCssVariable: function updateCssVariable(varName, value) {
            return instance.root_.style.setProperty(varName, value);
          },
          computeBoundingRect: function computeBoundingRect() {
            return instance.root_.getBoundingClientRect();
          },
          getWindowPageOffset: function getWindowPageOffset() {
            return {
              x: window.pageXOffset,
              y: window.pageYOffset
            };
          }
        };
      }
    }]);

    return MDCRipple;
  }(MDCComponent);
  /**
   * See Material Design spec for more details on when to use ripples.
   * https://material.io/guidelines/motion/choreography.html#choreography-creation
   * @record
   */


  var RippleCapableSurface = function RippleCapableSurface() {
    _classCallCheck(this, RippleCapableSurface);
  };
  /** @protected {!Element} */


  RippleCapableSurface.prototype.root_;
  /**
   * Whether or not the ripple bleeds out of the bounds of the element.
   * @type {boolean|undefined}
   */

  RippleCapableSurface.prototype.unbounded;
  /**
   * Whether or not the ripple is attached to a disabled component.
   * @type {boolean|undefined}
   */

  RippleCapableSurface.prototype.disabled;

  var RippleBase =
  /*#__PURE__*/
  function (_MDCRippleFoundation) {
    _inherits(RippleBase, _MDCRippleFoundation);

    _createClass(RippleBase, null, [{
      key: "isSurfaceActive",
      value: function isSurfaceActive(ref) {
        return ref[RippleBase.MATCHES](':active');
      }
    }, {
      key: "MATCHES",
      get: function get() {
        /* global HTMLElement */
        return RippleBase._matches || (RippleBase._matches = getMatchesProperty(HTMLElement.prototype));
      }
    }]);

    function RippleBase(vm, options) {
      _classCallCheck(this, RippleBase);

      return _possibleConstructorReturn(this, _getPrototypeOf(RippleBase).call(this, _extends({
        browserSupportsCssVars: function browserSupportsCssVars() {
          return supportsCssVariables(window);
        },
        isUnbounded: function isUnbounded() {
          return false;
        },
        isSurfaceActive: function isSurfaceActive() {
          return vm.$el[RippleBase.MATCHES](':active');
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return vm.disabled;
        },
        addClass: function addClass(className) {
          vm.$set(vm.classes, className, true);
        },
        removeClass: function removeClass(className) {
          vm.$delete(vm.classes, className);
        },
        containsEventTarget: function containsEventTarget(target) {
          return vm.$el.contains(target);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          vm.$el.addEventListener(evt, handler, applyPassive$1());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          vm.$el.removeEventListener(evt, handler, applyPassive$1());
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.addEventListener(evtType, handler, applyPassive$1());
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.removeEventListener(evtType, handler, applyPassive$1());
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          vm.$set(vm.styles, varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return vm.$el.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return {
            x: window.pageXOffset,
            y: window.pageYOffset
          };
        }
      }, options)));
    }

    return RippleBase;
  }(MDCRippleFoundation);
  var RippleMixin = {
    data: function data() {
      return {
        classes: {},
        styles: {}
      };
    },
    mounted: function mounted() {
      this.ripple = new RippleBase(this);
      this.ripple.init();
    },
    beforeDestroy: function beforeDestroy() {
      this.ripple.destroy();
    }
  };

  //
  var script = {
    name: 'mdc-ripple',
    mixins: [CustomElementMixin, RippleMixin],
    props: {
      tag: String
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
  script.__file = "/ddata/extra/vma/components/ripple/mdc-ripple.vue";

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "custom-element",
      {
        staticClass: "mdc-ripple",
        attrs: { tag: _vm.tag, classes: _vm.classes, styles: _vm.styles }
      },
      [_vm._t("default")],
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
    

    
    normalizeComponent(
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
  var script$1 = {
    name: 'mdc-tab',
    mixins: [CustomLinkMixin, DispatchEventMixin],
    props: {
      active: Boolean,
      icon: [String, Array, Object],
      stacked: Boolean,
      minWidth: Boolean
    },
    data: function data() {
      return {
        classes: {
          'mdc-tab--stacked': this.stacked,
          'mdc-tab--min-width': this.minWidth
        },
        styles: {}
      };
    },
    inject: ['mdcTabBar'],
    computed: {
      hasIcon: function hasIcon() {
        if (this.icon || this.$slots.icon) {
          return this.icon ? extractIconProp(this.icon) : {};
        }

        return false;
      },
      hasText: function hasText() {
        return !!this.$slots.default;
      }
    },
    watch: {
      active: function active(value) {}
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCTabFoundation({
        setAttr: function setAttr(attr, value) {
          return _this.$el.setAttribute(attr, value);
        },
        addClass: function addClass(className) {
          return _this.$set(_this.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this.$delete(_this.classes, className);
        },
        hasClass: function hasClass(className) {
          return _this.$el.classList.contains(className);
        },
        activateIndicator: function activateIndicator(previousIndicatorClientRect) {
          _this.$refs.tabIndicator.activate(previousIndicatorClientRect);
        },
        deactivateIndicator: function deactivateIndicator() {
          _this.$refs.tabIndicator.deactivate();
        },
        notifyInteracted: function notifyInteracted() {
          return emitCustomEvent(_this.$el, MDCTabFoundation.strings.INTERACTED_EVENT, {
            tab: _this
          }, true
          /* bubble */
          );
        },
        getOffsetLeft: function getOffsetLeft() {
          return _this.$el.offsetLeft;
        },
        getOffsetWidth: function getOffsetWidth() {
          return _this.$el.offsetWidth;
        },
        getContentOffsetLeft: function getContentOffsetLeft() {
          return _this.$refs.content.offsetLeft;
        },
        getContentOffsetWidth: function getContentOffsetWidth() {
          return _this.$refs.content.offsetWidth;
        },
        focus: function focus() {
          return _this.$el.focus();
        }
      });
      this.foundation.init(); // console.log('tab mounted')

      this.mdcTabBar.tabList.push(this); // this.setActive(this.active)
    },
    beforeDestroy: function beforeDestroy() {
      this.foundation.destroy();
    },
    methods: {
      activate: function activate(computeIndicatorClientRect) {
        this.foundation.activate(computeIndicatorClientRect);
      },
      deactivate: function deactivate() {
        this.foundation.deactivate();
      },
      handleClick: function handleClick(evt) {
        this.foundation.handleClick(evt);
      },
      isActive: function isActive() {
        return this.foundation.isActive();
      },
      setActive: function setActive(isActive) {
        if (isActive) {
          this.$set(this.classes, 'mdc-tab--active', true), this.$refs.tabIndicator.activate();
        }
      },
      computeIndicatorClientRect: function computeIndicatorClientRect() {
        return this.$refs.tabIndicator.computeContentClientRect();
      },
      computeDimensions: function computeDimensions() {
        return this.foundation.computeDimensions();
      },
      focus: function focus() {
        this.$el.focus();
      }
    }
  };

  /* script */
  const __vue_script__$1 = script$1;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$1.__file = "/ddata/extra/vma/components/tabs/mdc-tab.vue";

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "custom-link",
      {
        staticClass: "mdc-tab",
        class: _vm.classes,
        style: _vm.styles,
        attrs: {
          link: _vm.link,
          role: "tab",
          "aria-selected": "false",
          tabindex: "-1"
        },
        on: { click: _vm.handleClick }
      },
      [
        _c("span", { ref: "content", staticClass: "mdc-tab__content" }, [
          !!_vm.hasIcon
            ? _c(
                "i",
                {
                  ref: "icon",
                  staticClass: "mdc-tab__icon",
                  class: _vm.hasIcon.classes,
                  attrs: { tabindex: "0", "aria-hidden": "true" }
                },
                [_vm._t("icon", [_vm._v(_vm._s(_vm.hasIcon.content))])],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.hasText
            ? _c(
                "span",
                { staticClass: "mdc-tab__text-label" },
                [_vm._t("default")],
                2
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("mdc-tab-indicator", { ref: "tabIndicator" }),
        _vm._v(" "),
        _c("mdc-tab-ripple")
      ],
      1
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
    

    
    var mdcTab = normalizeComponent(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
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

  /** @enum {string} */
  var strings$2 = {
    TAB_ACTIVATED_EVENT: 'MDCTabBar:activated',
    TAB_SCROLLER_SELECTOR: '.mdc-tab-scroller',
    TAB_SELECTOR: '.mdc-tab',
    ARROW_LEFT_KEY: 'ArrowLeft',
    ARROW_RIGHT_KEY: 'ArrowRight',
    END_KEY: 'End',
    HOME_KEY: 'Home',
    ENTER_KEY: 'Enter',
    SPACE_KEY: 'Space'
  };
  /** @enum {number} */

  var numbers$1 = {
    EXTRA_SCROLL_AMOUNT: 20,
    ARROW_LEFT_KEYCODE: 37,
    ARROW_RIGHT_KEYCODE: 39,
    END_KEYCODE: 35,
    HOME_KEYCODE: 36,
    ENTER_KEYCODE: 13,
    SPACE_KEYCODE: 32
  };

  /* eslint-enable no-unused-vars */

  /**
   * Adapter for MDC Tab Bar.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the Tab Bar into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */

  var MDCTabBarAdapter =
  /*#__PURE__*/
  function () {
    function MDCTabBarAdapter() {
      _classCallCheck(this, MDCTabBarAdapter);
    }

    _createClass(MDCTabBarAdapter, [{
      key: "scrollTo",

      /**
       * Scrolls to the given position
       * @param {number} scrollX The position to scroll to
       */
      value: function scrollTo(scrollX) {}
      /**
       * Increments the current scroll position by the given amount
       * @param {number} scrollXIncrement The amount to increment scroll
       */

    }, {
      key: "incrementScroll",
      value: function incrementScroll(scrollXIncrement) {}
      /**
       * Returns the current scroll position
       * @return {number}
       */

    }, {
      key: "getScrollPosition",
      value: function getScrollPosition() {}
      /**
       * Returns the width of the scroll content
       * @return {number}
       */

    }, {
      key: "getScrollContentWidth",
      value: function getScrollContentWidth() {}
      /**
       * Returns the root element's offsetWidth
       * @return {number}
       */

    }, {
      key: "getOffsetWidth",
      value: function getOffsetWidth() {}
      /**
       * Returns if the Tab Bar language direction is RTL
       * @return {boolean}
       */

    }, {
      key: "isRTL",
      value: function isRTL() {}
      /**
       * Sets the tab at the given index to be activated
       * @param {number} index The index of the tab to activate
       */

    }, {
      key: "setActiveTab",
      value: function setActiveTab(index) {}
      /**
       * Activates the tab at the given index with the given client rect
       * @param {number} index The index of the tab to activate
       * @param {!ClientRect} clientRect The client rect of the previously active Tab Indicator
       */

    }, {
      key: "activateTabAtIndex",
      value: function activateTabAtIndex(index, clientRect) {}
      /**
       * Deactivates the tab at the given index
       * @param {number} index The index of the tab to deactivate
       */

    }, {
      key: "deactivateTabAtIndex",
      value: function deactivateTabAtIndex(index) {}
      /**
       * Focuses the tab at the given index
       * @param {number} index The index of the tab to focus
       */

    }, {
      key: "focusTabAtIndex",
      value: function focusTabAtIndex(index) {}
      /**
       * Returns the client rect of the tab's indicator
       * @param {number} index The index of the tab
       * @return {!ClientRect}
       */

    }, {
      key: "getTabIndicatorClientRectAtIndex",
      value: function getTabIndicatorClientRectAtIndex(index) {}
      /**
       * Returns the tab dimensions of the tab at the given index
       * @param {number} index The index of the tab
       * @return {!MDCTabDimensions}
       */

    }, {
      key: "getTabDimensionsAtIndex",
      value: function getTabDimensionsAtIndex(index) {}
      /**
       * Returns the length of the tab list
       * @return {number}
       */

    }, {
      key: "getTabListLength",
      value: function getTabListLength() {}
      /**
       * Returns the index of the previously active tab
       * @return {number}
       */

    }, {
      key: "getPreviousActiveTabIndex",
      value: function getPreviousActiveTabIndex() {}
      /**
       * Returns the index of the focused tab
       * @return {number}
       */

    }, {
      key: "getFocusedTabIndex",
      value: function getFocusedTabIndex() {}
      /**
       * Returns the index of the given tab
       * @param {string} id The ID of the tab whose index to determine
       * @return {number}
       */

    }, {
      key: "getIndexOfTabById",
      value: function getIndexOfTabById(id) {}
      /**
       * Emits the MDCTabBar:activated event
       * @param {number} index The index of the activated tab
       */

    }, {
      key: "notifyTabActivated",
      value: function notifyTabActivated(index) {}
    }]);

    return MDCTabBarAdapter;
  }();

  /* eslint-enable no-unused-vars */

  /**
   * @type {Set<string>}
   */

  var ACCEPTABLE_KEYS = new Set(); // IE11 has no support for new Set with iterable so we need to initialize this by hand

  ACCEPTABLE_KEYS.add(strings$2.ARROW_LEFT_KEY);
  ACCEPTABLE_KEYS.add(strings$2.ARROW_RIGHT_KEY);
  ACCEPTABLE_KEYS.add(strings$2.END_KEY);
  ACCEPTABLE_KEYS.add(strings$2.HOME_KEY);
  ACCEPTABLE_KEYS.add(strings$2.ENTER_KEY);
  ACCEPTABLE_KEYS.add(strings$2.SPACE_KEY);
  /**
   * @type {Map<number, string>}
   */

  var KEYCODE_MAP = new Map(); // IE11 has no support for new Map with iterable so we need to initialize this by hand

  KEYCODE_MAP.set(numbers$1.ARROW_LEFT_KEYCODE, strings$2.ARROW_LEFT_KEY);
  KEYCODE_MAP.set(numbers$1.ARROW_RIGHT_KEYCODE, strings$2.ARROW_RIGHT_KEY);
  KEYCODE_MAP.set(numbers$1.END_KEYCODE, strings$2.END_KEY);
  KEYCODE_MAP.set(numbers$1.HOME_KEYCODE, strings$2.HOME_KEY);
  KEYCODE_MAP.set(numbers$1.ENTER_KEYCODE, strings$2.ENTER_KEY);
  KEYCODE_MAP.set(numbers$1.SPACE_KEYCODE, strings$2.SPACE_KEY);
  /**
   * @extends {MDCFoundation<!MDCTabBarAdapter>}
   * @final
   */

  var MDCTabBarFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCTabBarFoundation, _MDCFoundation);

    _createClass(MDCTabBarFoundation, null, [{
      key: "strings",

      /** @return enum {string} */
      get: function get() {
        return strings$2;
      }
      /** @return enum {number} */

    }, {
      key: "numbers",
      get: function get() {
        return numbers$1;
      }
      /**
       * @see MDCTabBarAdapter for typing information
       * @return {!MDCTabBarAdapter}
       */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCTabBarAdapter} */
          {
            scrollTo: function scrollTo() {},
            incrementScroll: function incrementScroll() {},
            getScrollPosition: function getScrollPosition() {},
            getScrollContentWidth: function getScrollContentWidth() {},
            getOffsetWidth: function getOffsetWidth() {},
            isRTL: function isRTL() {},
            setActiveTab: function setActiveTab() {},
            activateTabAtIndex: function activateTabAtIndex() {},
            deactivateTabAtIndex: function deactivateTabAtIndex() {},
            focusTabAtIndex: function focusTabAtIndex() {},
            getTabIndicatorClientRectAtIndex: function getTabIndicatorClientRectAtIndex() {},
            getTabDimensionsAtIndex: function getTabDimensionsAtIndex() {},
            getPreviousActiveTabIndex: function getPreviousActiveTabIndex() {},
            getFocusedTabIndex: function getFocusedTabIndex() {},
            getIndexOfTabById: function getIndexOfTabById() {},
            getTabListLength: function getTabListLength() {},
            notifyTabActivated: function notifyTabActivated() {}
          }
        );
      }
      /**
       * @param {!MDCTabBarAdapter} adapter
       * */

    }]);

    function MDCTabBarFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCTabBarFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCTabBarFoundation).call(this, _extends(MDCTabBarFoundation.defaultAdapter, adapter)));
      /** @private {boolean} */

      _this.useAutomaticActivation_ = false;
      return _this;
    }
    /**
     * Switches between automatic and manual activation modes.
     * See https://www.w3.org/TR/wai-aria-practices/#tabpanel for examples.
     * @param {boolean} useAutomaticActivation
     */


    _createClass(MDCTabBarFoundation, [{
      key: "setUseAutomaticActivation",
      value: function setUseAutomaticActivation(useAutomaticActivation) {
        this.useAutomaticActivation_ = useAutomaticActivation;
      }
      /**
       * Activates the tab at the given index
       * @param {number} index
       */

    }, {
      key: "activateTab",
      value: function activateTab(index) {
        var previousActiveIndex = this.adapter_.getPreviousActiveTabIndex();

        if (!this.indexIsInRange_(index) || index === previousActiveIndex) {
          return;
        }

        this.adapter_.deactivateTabAtIndex(previousActiveIndex);
        this.adapter_.activateTabAtIndex(index, this.adapter_.getTabIndicatorClientRectAtIndex(previousActiveIndex));
        this.scrollIntoView(index);
        this.adapter_.notifyTabActivated(index);
      }
      /**
       * Handles the keydown event
       * @param {!Event} evt
       */

    }, {
      key: "handleKeyDown",
      value: function handleKeyDown(evt) {
        // Get the key from the event
        var key = this.getKeyFromEvent_(evt); // Early exit if the event key isn't one of the keyboard navigation keys

        if (key === undefined) {
          return;
        } // Prevent default behavior for movement keys, but not for activation keys, since :active is used to apply ripple


        if (!this.isActivationKey_(key)) {
          evt.preventDefault();
        }

        if (this.useAutomaticActivation_) {
          if (this.isActivationKey_(key)) {
            return;
          }

          var index = this.determineTargetFromKey_(this.adapter_.getPreviousActiveTabIndex(), key);
          this.adapter_.setActiveTab(index);
          this.scrollIntoView(index);
        } else {
          var focusedTabIndex = this.adapter_.getFocusedTabIndex();

          if (this.isActivationKey_(key)) {
            this.adapter_.setActiveTab(focusedTabIndex);
          } else {
            var _index = this.determineTargetFromKey_(focusedTabIndex, key);

            this.adapter_.focusTabAtIndex(_index);
            this.scrollIntoView(_index);
          }
        }
      }
      /**
       * Handles the MDCTab:interacted event
       * @param {!Event} evt
       */

    }, {
      key: "handleTabInteraction",
      value: function handleTabInteraction(evt) {
        this.adapter_.setActiveTab(this.adapter_.getIndexOfTabById(evt.detail.tabId));
      }
      /**
       * Scrolls the tab at the given index into view
       * @param {number} index The tab index to make visible
       */

    }, {
      key: "scrollIntoView",
      value: function scrollIntoView(index) {
        // Early exit if the index is out of range
        if (!this.indexIsInRange_(index)) {
          return;
        } // Always scroll to 0 if scrolling to the 0th index


        if (index === 0) {
          return this.adapter_.scrollTo(0);
        } // Always scroll to the max value if scrolling to the Nth index
        // MDCTabScroller.scrollTo() will never scroll past the max possible value


        if (index === this.adapter_.getTabListLength() - 1) {
          return this.adapter_.scrollTo(this.adapter_.getScrollContentWidth());
        }

        if (this.isRTL_()) {
          return this.scrollIntoViewRTL_(index);
        }

        this.scrollIntoView_(index);
      }
      /**
       * Private method for determining the index of the destination tab based on what key was pressed
       * @param {number} origin The original index from which to determine the destination
       * @param {string} key The name of the key
       * @return {number}
       * @private
       */

    }, {
      key: "determineTargetFromKey_",
      value: function determineTargetFromKey_(origin, key) {
        var isRTL = this.isRTL_();
        var maxIndex = this.adapter_.getTabListLength() - 1;
        var shouldGoToEnd = key === strings$2.END_KEY;
        var shouldDecrement = key === strings$2.ARROW_LEFT_KEY && !isRTL || key === strings$2.ARROW_RIGHT_KEY && isRTL;
        var shouldIncrement = key === strings$2.ARROW_RIGHT_KEY && !isRTL || key === strings$2.ARROW_LEFT_KEY && isRTL;
        var index = origin;

        if (shouldGoToEnd) {
          index = maxIndex;
        } else if (shouldDecrement) {
          index -= 1;
        } else if (shouldIncrement) {
          index += 1;
        } else {
          index = 0;
        }

        if (index < 0) {
          index = maxIndex;
        } else if (index > maxIndex) {
          index = 0;
        }

        return index;
      }
      /**
       * Calculates the scroll increment that will make the tab at the given index visible
       * @param {number} index The index of the tab
       * @param {number} nextIndex The index of the next tab
       * @param {number} scrollPosition The current scroll position
       * @param {number} barWidth The width of the Tab Bar
       * @return {number}
       * @private
       */

    }, {
      key: "calculateScrollIncrement_",
      value: function calculateScrollIncrement_(index, nextIndex, scrollPosition, barWidth) {
        var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
        var relativeContentLeft = nextTabDimensions.contentLeft - scrollPosition - barWidth;
        var relativeContentRight = nextTabDimensions.contentRight - scrollPosition;
        var leftIncrement = relativeContentRight - numbers$1.EXTRA_SCROLL_AMOUNT;
        var rightIncrement = relativeContentLeft + numbers$1.EXTRA_SCROLL_AMOUNT;

        if (nextIndex < index) {
          return Math.min(leftIncrement, 0);
        }

        return Math.max(rightIncrement, 0);
      }
      /**
       * Calculates the scroll increment that will make the tab at the given index visible in RTL
       * @param {number} index The index of the tab
       * @param {number} nextIndex The index of the next tab
       * @param {number} scrollPosition The current scroll position
       * @param {number} barWidth The width of the Tab Bar
       * @param {number} scrollContentWidth The width of the scroll content
       * @return {number}
       * @private
       */

    }, {
      key: "calculateScrollIncrementRTL_",
      value: function calculateScrollIncrementRTL_(index, nextIndex, scrollPosition, barWidth, scrollContentWidth) {
        var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
        var relativeContentLeft = scrollContentWidth - nextTabDimensions.contentLeft - scrollPosition;
        var relativeContentRight = scrollContentWidth - nextTabDimensions.contentRight - scrollPosition - barWidth;
        var leftIncrement = relativeContentRight + numbers$1.EXTRA_SCROLL_AMOUNT;
        var rightIncrement = relativeContentLeft - numbers$1.EXTRA_SCROLL_AMOUNT;

        if (nextIndex > index) {
          return Math.max(leftIncrement, 0);
        }

        return Math.min(rightIncrement, 0);
      }
      /**
       * Determines the index of the adjacent tab closest to either edge of the Tab Bar
       * @param {number} index The index of the tab
       * @param {!MDCTabDimensions} tabDimensions The dimensions of the tab
       * @param {number} scrollPosition The current scroll position
       * @param {number} barWidth The width of the tab bar
       * @return {number}
       * @private
       */

    }, {
      key: "findAdjacentTabIndexClosestToEdge_",
      value: function findAdjacentTabIndexClosestToEdge_(index, tabDimensions, scrollPosition, barWidth) {
        /**
         * Tabs are laid out in the Tab Scroller like this:
         *
         *    Scroll Position
         *    +---+
         *    |   |   Bar Width
         *    |   +-----------------------------------+
         *    |   |                                   |
         *    |   V                                   V
         *    |   +-----------------------------------+
         *    V   |             Tab Scroller          |
         *    +------------+--------------+-------------------+
         *    |    Tab     |      Tab     |        Tab        |
         *    +------------+--------------+-------------------+
         *        |                                   |
         *        +-----------------------------------+
         *
         * To determine the next adjacent index, we look at the Tab root left and
         * Tab root right, both relative to the scroll position. If the Tab root
         * left is less than 0, then we know it's out of view to the left. If the
         * Tab root right minus the bar width is greater than 0, we know the Tab is
         * out of view to the right. From there, we either increment or decrement
         * the index.
         */
        var relativeRootLeft = tabDimensions.rootLeft - scrollPosition;
        var relativeRootRight = tabDimensions.rootRight - scrollPosition - barWidth;
        var relativeRootDelta = relativeRootLeft + relativeRootRight;
        var leftEdgeIsCloser = relativeRootLeft < 0 || relativeRootDelta < 0;
        var rightEdgeIsCloser = relativeRootRight > 0 || relativeRootDelta > 0;

        if (leftEdgeIsCloser) {
          return index - 1;
        }

        if (rightEdgeIsCloser) {
          return index + 1;
        }

        return -1;
      }
      /**
       * Determines the index of the adjacent tab closest to either edge of the Tab Bar in RTL
       * @param {number} index The index of the tab
       * @param {!MDCTabDimensions} tabDimensions The dimensions of the tab
       * @param {number} scrollPosition The current scroll position
       * @param {number} barWidth The width of the tab bar
       * @param {number} scrollContentWidth The width of the scroller content
       * @return {number}
       * @private
       */

    }, {
      key: "findAdjacentTabIndexClosestToEdgeRTL_",
      value: function findAdjacentTabIndexClosestToEdgeRTL_(index, tabDimensions, scrollPosition, barWidth, scrollContentWidth) {
        var rootLeft = scrollContentWidth - tabDimensions.rootLeft - barWidth - scrollPosition;
        var rootRight = scrollContentWidth - tabDimensions.rootRight - scrollPosition;
        var rootDelta = rootLeft + rootRight;
        var leftEdgeIsCloser = rootLeft > 0 || rootDelta > 0;
        var rightEdgeIsCloser = rootRight < 0 || rootDelta < 0;

        if (leftEdgeIsCloser) {
          return index + 1;
        }

        if (rightEdgeIsCloser) {
          return index - 1;
        }

        return -1;
      }
      /**
       * Returns the key associated with a keydown event
       * @param {!Event} evt The keydown event
       * @return {string}
       * @private
       */

    }, {
      key: "getKeyFromEvent_",
      value: function getKeyFromEvent_(evt) {
        if (ACCEPTABLE_KEYS.has(evt.key)) {
          return evt.key;
        }

        return KEYCODE_MAP.get(evt.keyCode);
      }
    }, {
      key: "isActivationKey_",
      value: function isActivationKey_(key) {
        return key === strings$2.SPACE_KEY || key === strings$2.ENTER_KEY;
      }
      /**
       * Returns whether a given index is inclusively between the ends
       * @param {number} index The index to test
       * @private
       */

    }, {
      key: "indexIsInRange_",
      value: function indexIsInRange_(index) {
        return index >= 0 && index < this.adapter_.getTabListLength();
      }
      /**
       * Returns the view's RTL property
       * @return {boolean}
       * @private
       */

    }, {
      key: "isRTL_",
      value: function isRTL_() {
        return this.adapter_.isRTL();
      }
      /**
       * Scrolls the tab at the given index into view for left-to-right useragents
       * @param {number} index The index of the tab to scroll into view
       * @private
       */

    }, {
      key: "scrollIntoView_",
      value: function scrollIntoView_(index) {
        var scrollPosition = this.adapter_.getScrollPosition();
        var barWidth = this.adapter_.getOffsetWidth();
        var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
        var nextIndex = this.findAdjacentTabIndexClosestToEdge_(index, tabDimensions, scrollPosition, barWidth);

        if (!this.indexIsInRange_(nextIndex)) {
          return;
        }

        var scrollIncrement = this.calculateScrollIncrement_(index, nextIndex, scrollPosition, barWidth);
        this.adapter_.incrementScroll(scrollIncrement);
      }
      /**
       * Scrolls the tab at the given index into view in RTL
       * @param {number} index The tab index to make visible
       * @private
       */

    }, {
      key: "scrollIntoViewRTL_",
      value: function scrollIntoViewRTL_(index) {
        var scrollPosition = this.adapter_.getScrollPosition();
        var barWidth = this.adapter_.getOffsetWidth();
        var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
        var scrollWidth = this.adapter_.getScrollContentWidth();
        var nextIndex = this.findAdjacentTabIndexClosestToEdgeRTL_(index, tabDimensions, scrollPosition, barWidth, scrollWidth);

        if (!this.indexIsInRange_(nextIndex)) {
          return;
        }

        var scrollIncrement = this.calculateScrollIncrementRTL_(index, nextIndex, scrollPosition, barWidth, scrollWidth);
        this.adapter_.incrementScroll(scrollIncrement);
      }
    }]);

    return MDCTabBarFoundation;
  }(MDCFoundation);

  var script$2 = {
    name: 'mdc-tab-bar',
    data: function data() {
      return {
        classes: {},
        indicatorStyles: {},
        tabList: []
      };
    },
    props: {
      activeTabIndex: [Number, String]
    },
    provide: function provide() {
      return {
        mdcTabBar: this
      };
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCTabBarFoundation({
        scrollTo: function scrollTo(scrollX) {
          return _this.$refs.scroller.scrollTo(scrollX);
        },
        incrementScroll: function incrementScroll(scrollXIncrement) {
          return _this.$refs.scroller.incrementScroll(scrollXIncrement);
        },
        getScrollPosition: function getScrollPosition() {
          return _this.$refs.scroller.getScrollPosition();
        },
        getScrollContentWidth: function getScrollContentWidth() {
          return _this.$refs.scroller.getScrollContentWidth();
        },
        getOffsetWidth: function getOffsetWidth() {
          return _this.$el.offsetWidth;
        },
        isRTL: function isRTL() {
          return window.getComputedStyle(_this.$el).getPropertyValue('direction') === 'rtl';
        },
        setActiveTab: function setActiveTab(index) {
          _this.foundation.activateTab(index);
        },
        activateTabAtIndex: function activateTabAtIndex(index, clientRect) {
          _this.tabList[index].activate(clientRect);
        },
        deactivateTabAtIndex: function deactivateTabAtIndex(index) {
          _this.tabList[index] && _this.tabList[index].deactivate();
        },
        focusTabAtIndex: function focusTabAtIndex(index) {
          return _this.tabList[index].focus();
        },
        getTabIndicatorClientRectAtIndex: function getTabIndicatorClientRectAtIndex(index) {
          return _this.tabList[index] && _this.tabList[index].computeIndicatorClientRect();
        },
        getTabDimensionsAtIndex: function getTabDimensionsAtIndex(index) {
          return _this.tabList[index].computeDimensions();
        },
        getPreviousActiveTabIndex: function getPreviousActiveTabIndex() {
          for (var i = 0; i < _this.tabList.length; i++) {
            if (_this.tabList[i].isActive()) {
              return i;
            }
          }

          return -1;
        },
        getFocusedTabIndex: function getFocusedTabIndex() {
          var tabElements = _this.getTabElements_();

          var activeElement = document.activeElement;
          return tabElements.indexOf(activeElement);
        },
        getIndexOfTab: function getIndexOfTab(tabToFind) {
          return _this.tabList.indexOf(tabToFind);
        },
        getTabListLength: function getTabListLength() {
          return _this.tabList.length;
        },
        notifyTabActivated: function notifyTabActivated(index) {
          emitCustomEvent(_this.$el, MDCTabBarFoundation.strings.TAB_ACTIVATED_EVENT, {
            index: index
          }, true);

          _this.$emit('change', index);
        }
      });
      this.foundation.init(); // ensure active tab

      this.foundation.activateTab(this.activeTabIndex || 0);
    },
    beforeDestroy: function beforeDestroy() {
      this.foundation.destroy();
    },
    computed: {
      listeners: function listeners() {
        var _this2 = this;

        return _objectSpread({}, this.$listeners, {
          'MDCTab:interacted': function MDCTabInteracted(event) {
            return _this2.handleInteraction(event);
          }
        });
      }
    },
    methods: {
      handleInteraction: function handleInteraction(evt) {
        this.foundation.handleTabInteraction(evt);
      }
    }
  };

  /* script */
  const __vue_script__$2 = script$2;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$2.__file = "/ddata/extra/vma/components/tabs/mdc-tab-bar.vue";

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      _vm._g(
        {
          staticClass: "mdc-tab-bar",
          class: _vm.classes,
          attrs: { role: "tablist" }
        },
        _vm.listeners
      ),
      [_c("mdc-tab-scroller", { ref: "scroller" }, [_vm._t("default")], 2)],
      1
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
    

    
    var mdcTabBar = normalizeComponent(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
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

  /** @enum {string} */
  var cssClasses$2 = {
    ANIMATING: 'mdc-tab-scroller--animating',
    SCROLL_TEST: 'mdc-tab-scroller__test',
    SCROLL_AREA_SCROLL: 'mdc-tab-scroller__scroll-area--scroll'
  };
  /** @enum {string} */

  var strings$3 = {
    AREA_SELECTOR: '.mdc-tab-scroller__scroll-area',
    CONTENT_SELECTOR: '.mdc-tab-scroller__scroll-content'
  };

  /**
   * Adapter for MDC Tab Scroller.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the Tab  into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */

  var MDCTabScrollerAdapter =
  /*#__PURE__*/
  function () {
    function MDCTabScrollerAdapter() {
      _classCallCheck(this, MDCTabScrollerAdapter);
    }

    _createClass(MDCTabScrollerAdapter, [{
      key: "addClass",

      /**
       * Adds the given className to the root element.
       * @param {string} className The className to add
       */
      value: function addClass(className) {}
      /**
       * Removes the given className from the root element.
       * @param {string} className The className to remove
       */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}
      /**
       * Adds the given className to the scroll area element.
       * @param {string} className The className to add
       */

    }, {
      key: "addScrollAreaClass",
      value: function addScrollAreaClass(className) {}
      /**
       * Returns whether the event target matches given className.
       * @param {EventTarget} evtTarget The event target
       * @param {string} selector The selector to check
       * @return {boolean}
       */

    }, {
      key: "eventTargetMatchesSelector",
      value: function eventTargetMatchesSelector(evtTarget, selector) {}
      /**
       * Sets a style property of the area element to the passed value.
       * @param {string} propName The style property name to set
       * @param {string} value The style property value
       */

    }, {
      key: "setScrollAreaStyleProperty",
      value: function setScrollAreaStyleProperty(propName, value) {}
      /**
       * Sets a style property of the content element to the passed value.
       * @param {string} propName The style property name to set
       * @param {string} value The style property value
       */

    }, {
      key: "setScrollContentStyleProperty",
      value: function setScrollContentStyleProperty(propName, value) {}
      /**
       * Returns the scroll content element's computed style value of the given css property `propertyName`.
       * We achieve this via `getComputedStyle(...).getPropertyValue(propertyName)`.
       * @param {string} propertyName
       * @return {string}
       */

    }, {
      key: "getScrollContentStyleValue",
      value: function getScrollContentStyleValue(propertyName) {}
      /**
       * Sets the scrollLeft value of the scroll area element to the passed value.
       * @param {number} scrollLeft The new scrollLeft value
       */

    }, {
      key: "setScrollAreaScrollLeft",
      value: function setScrollAreaScrollLeft(scrollLeft) {}
      /**
       * Returns the scrollLeft value of the scroll area element.
       * @return {number}
       */

    }, {
      key: "getScrollAreaScrollLeft",
      value: function getScrollAreaScrollLeft() {}
      /**
       * Returns the offsetWidth of the scroll content element.
       * @return {number}
       */

    }, {
      key: "getScrollContentOffsetWidth",
      value: function getScrollContentOffsetWidth() {}
      /**
       * Returns the offsetWitdth of the scroll area element.
       * @return {number}
       */

    }, {
      key: "getScrollAreaOffsetWidth",
      value: function getScrollAreaOffsetWidth() {}
      /**
       * Returns the bounding client rect of the scroll area element.
       * @return {!ClientRect}
       */

    }, {
      key: "computeScrollAreaClientRect",
      value: function computeScrollAreaClientRect() {}
      /**
       * Returns the bounding client rect of the scroll content element.
       * @return {!ClientRect}
       */

    }, {
      key: "computeScrollContentClientRect",
      value: function computeScrollContentClientRect() {}
      /**
       * Returns the height of the browser's horizontal scrollbars (in px).
       * @return {number}
       */

    }, {
      key: "computeHorizontalScrollbarHeight",
      value: function computeHorizontalScrollbarHeight() {}
    }]);

    return MDCTabScrollerAdapter;
  }();

  /* eslint-enable no-unused-vars */

  /**
   * @abstract
   */

  var MDCTabScrollerRTL =
  /*#__PURE__*/
  function () {
    /** @param {!MDCTabScrollerAdapter} adapter */
    function MDCTabScrollerRTL(adapter) {
      _classCallCheck(this, MDCTabScrollerRTL);

      /** @private */
      this.adapter_ = adapter;
    }
    /**
     * @param {number} translateX The current translateX position
     * @return {number}
     * @abstract
     */


    _createClass(MDCTabScrollerRTL, [{
      key: "getScrollPositionRTL",
      value: function getScrollPositionRTL(translateX) {}
      /**
       * @param {number} scrollX
       * @return {!MDCTabScrollerAnimation}
       * @abstract
       */

    }, {
      key: "scrollToRTL",
      value: function scrollToRTL(scrollX) {}
      /**
       * @param {number} scrollX
       * @return {!MDCTabScrollerAnimation}
       * @abstract
       */

    }, {
      key: "incrementScrollRTL",
      value: function incrementScrollRTL(scrollX) {}
      /**
       * @param {number} scrollX The current scrollX position
       * @param {number} translateX The current translateX position
       * @return {number}
       * @abstract
       */

    }, {
      key: "getAnimatingScrollPosition",
      value: function getAnimatingScrollPosition(scrollX, translateX) {}
    }]);

    return MDCTabScrollerRTL;
  }();

  /* eslint-enable no-unused-vars */

  /**
   * @extends {MDCTabScrollerRTL}
   * @final
   */

  var MDCTabScrollerRTLDefault =
  /*#__PURE__*/
  function (_MDCTabScrollerRTL) {
    _inherits(MDCTabScrollerRTLDefault, _MDCTabScrollerRTL);

    function MDCTabScrollerRTLDefault() {
      _classCallCheck(this, MDCTabScrollerRTLDefault);

      return _possibleConstructorReturn(this, _getPrototypeOf(MDCTabScrollerRTLDefault).apply(this, arguments));
    }

    _createClass(MDCTabScrollerRTLDefault, [{
      key: "getScrollPositionRTL",

      /**
       * @return {number}
       */
      value: function getScrollPositionRTL() {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();

        var _this$calculateScroll = this.calculateScrollEdges_(),
            right = _this$calculateScroll.right; // Scroll values on most browsers are ints instead of floats so we round


        return Math.round(right - currentScrollLeft);
      }
      /**
       * @param {number} scrollX
       * @return {!MDCTabScrollerAnimation}
       */

    }, {
      key: "scrollToRTL",
      value: function scrollToRTL(scrollX) {
        var edges = this.calculateScrollEdges_();
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(edges.right - scrollX);
        return (
          /** @type {!MDCTabScrollerAnimation} */
          {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft
          }
        );
      }
      /**
       * @param {number} scrollX
       * @return {!MDCTabScrollerAnimation}
       */

    }, {
      key: "incrementScrollRTL",
      value: function incrementScrollRTL(scrollX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
        return (
          /** @type {!MDCTabScrollerAnimation} */
          {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft
          }
        );
      }
      /**
       * @param {number} scrollX
       * @return {number}
       */

    }, {
      key: "getAnimatingScrollPosition",
      value: function getAnimatingScrollPosition(scrollX) {
        return scrollX;
      }
      /**
       * @return {!MDCTabScrollerHorizontalEdges}
       * @private
       */

    }, {
      key: "calculateScrollEdges_",
      value: function calculateScrollEdges_() {
        var contentWidth = this.adapter_.getScrollContentOffsetWidth();
        var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
        return (
          /** @type {!MDCTabScrollerHorizontalEdges} */
          {
            left: 0,
            right: contentWidth - rootWidth
          }
        );
      }
      /**
       * @param {number} scrollX
       * @return {number}
       * @private
       */

    }, {
      key: "clampScrollValue_",
      value: function clampScrollValue_(scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.min(Math.max(edges.left, scrollX), edges.right);
      }
    }]);

    return MDCTabScrollerRTLDefault;
  }(MDCTabScrollerRTL);

  /* eslint-enable no-unused-vars */

  /**
   * @extends {MDCTabScrollerRTL}
   * @final
   */

  var MDCTabScrollerRTLNegative =
  /*#__PURE__*/
  function (_MDCTabScrollerRTL) {
    _inherits(MDCTabScrollerRTLNegative, _MDCTabScrollerRTL);

    function MDCTabScrollerRTLNegative() {
      _classCallCheck(this, MDCTabScrollerRTLNegative);

      return _possibleConstructorReturn(this, _getPrototypeOf(MDCTabScrollerRTLNegative).apply(this, arguments));
    }

    _createClass(MDCTabScrollerRTLNegative, [{
      key: "getScrollPositionRTL",

      /**
       * @param {number} translateX The current translateX position
       * @return {number}
       */
      value: function getScrollPositionRTL(translateX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        return Math.round(translateX - currentScrollLeft);
      }
      /**
       * @param {number} scrollX
       * @return {!MDCTabScrollerAnimation}
       */

    }, {
      key: "scrollToRTL",
      value: function scrollToRTL(scrollX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(-scrollX);
        return (
          /** @type {!MDCTabScrollerAnimation} */
          {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft
          }
        );
      }
      /**
       * @param {number} scrollX
       * @return {!MDCTabScrollerAnimation}
       */

    }, {
      key: "incrementScrollRTL",
      value: function incrementScrollRTL(scrollX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
        return (
          /** @type {!MDCTabScrollerAnimation} */
          {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft
          }
        );
      }
      /**
       * @param {number} scrollX
       * @param {number} translateX
       * @return {number}
       */

    }, {
      key: "getAnimatingScrollPosition",
      value: function getAnimatingScrollPosition(scrollX, translateX) {
        return scrollX - translateX;
      }
      /**
       * @return {!MDCTabScrollerHorizontalEdges}
       * @private
       */

    }, {
      key: "calculateScrollEdges_",
      value: function calculateScrollEdges_() {
        var contentWidth = this.adapter_.getScrollContentOffsetWidth();
        var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
        return (
          /** @type {!MDCTabScrollerHorizontalEdges} */
          {
            left: rootWidth - contentWidth,
            right: 0
          }
        );
      }
      /**
       * @param {number} scrollX
       * @return {number}
       * @private
       */

    }, {
      key: "clampScrollValue_",
      value: function clampScrollValue_(scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.max(Math.min(edges.right, scrollX), edges.left);
      }
    }]);

    return MDCTabScrollerRTLNegative;
  }(MDCTabScrollerRTL);

  /* eslint-enable no-unused-vars */

  /**
   * @extends {MDCTabScrollerRTL}
   * @final
   */

  var MDCTabScrollerRTLReverse =
  /*#__PURE__*/
  function (_MDCTabScrollerRTL) {
    _inherits(MDCTabScrollerRTLReverse, _MDCTabScrollerRTL);

    function MDCTabScrollerRTLReverse() {
      _classCallCheck(this, MDCTabScrollerRTLReverse);

      return _possibleConstructorReturn(this, _getPrototypeOf(MDCTabScrollerRTLReverse).apply(this, arguments));
    }

    _createClass(MDCTabScrollerRTLReverse, [{
      key: "getScrollPositionRTL",

      /**
       * @param {number} translateX
       * @return {number}
       */
      value: function getScrollPositionRTL(translateX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft(); // Scroll values on most browsers are ints instead of floats so we round

        return Math.round(currentScrollLeft - translateX);
      }
      /**
       * @param {number} scrollX
       * @return {!MDCTabScrollerAnimation}
       */

    }, {
      key: "scrollToRTL",
      value: function scrollToRTL(scrollX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(scrollX);
        return (
          /** @type {!MDCTabScrollerAnimation} */
          {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: currentScrollLeft - clampedScrollLeft
          }
        );
      }
      /**
       * @param {number} scrollX
       * @return {!MDCTabScrollerAnimation}
       */

    }, {
      key: "incrementScrollRTL",
      value: function incrementScrollRTL(scrollX) {
        var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft + scrollX);
        return (
          /** @type {!MDCTabScrollerAnimation} */
          {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: currentScrollLeft - clampedScrollLeft
          }
        );
      }
      /**
       * @param {number} scrollX
       * @return {number}
       */

    }, {
      key: "getAnimatingScrollPosition",
      value: function getAnimatingScrollPosition(scrollX, translateX) {
        return scrollX + translateX;
      }
      /**
       * @return {!MDCTabScrollerHorizontalEdges}
       * @private
       */

    }, {
      key: "calculateScrollEdges_",
      value: function calculateScrollEdges_() {
        var contentWidth = this.adapter_.getScrollContentOffsetWidth();
        var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
        return (
          /** @type {!MDCTabScrollerHorizontalEdges} */
          {
            left: contentWidth - rootWidth,
            right: 0
          }
        );
      }
      /**
       * @param {number} scrollX
       * @return {number}
       * @private
       */

    }, {
      key: "clampScrollValue_",
      value: function clampScrollValue_(scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.min(Math.max(edges.right, scrollX), edges.left);
      }
    }]);

    return MDCTabScrollerRTLReverse;
  }(MDCTabScrollerRTL);

  /**
   * @extends {MDCFoundation<!MDCTabScrollerAdapter>}
   * @final
   */

  var MDCTabScrollerFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCTabScrollerFoundation, _MDCFoundation);

    _createClass(MDCTabScrollerFoundation, null, [{
      key: "cssClasses",

      /** @return enum {string} */
      get: function get() {
        return cssClasses$2;
      }
      /** @return enum {string} */

    }, {
      key: "strings",
      get: function get() {
        return strings$3;
      }
      /**
       * @see MDCTabScrollerAdapter for typing information
       * @return {!MDCTabScrollerAdapter}
       */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCTabScrollerAdapter} */
          {
            eventTargetMatchesSelector: function eventTargetMatchesSelector() {},
            addClass: function addClass() {},
            removeClass: function removeClass() {},
            addScrollAreaClass: function addScrollAreaClass() {},
            setScrollAreaStyleProperty: function setScrollAreaStyleProperty() {},
            setScrollContentStyleProperty: function setScrollContentStyleProperty() {},
            getScrollContentStyleValue: function getScrollContentStyleValue() {},
            setScrollAreaScrollLeft: function setScrollAreaScrollLeft() {},
            getScrollAreaScrollLeft: function getScrollAreaScrollLeft() {},
            getScrollContentOffsetWidth: function getScrollContentOffsetWidth() {},
            getScrollAreaOffsetWidth: function getScrollAreaOffsetWidth() {},
            computeScrollAreaClientRect: function computeScrollAreaClientRect() {},
            computeScrollContentClientRect: function computeScrollContentClientRect() {},
            computeHorizontalScrollbarHeight: function computeHorizontalScrollbarHeight() {}
          }
        );
      }
      /** @param {!MDCTabScrollerAdapter} adapter */

    }]);

    function MDCTabScrollerFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCTabScrollerFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCTabScrollerFoundation).call(this, _extends(MDCTabScrollerFoundation.defaultAdapter, adapter)));
      /**
       * This boolean controls whether we should handle the transitionend and interaction events during the animation.
       * @private {boolean}
       */

      _this.isAnimating_ = false;
      /**
       * The MDCTabScrollerRTL instance varies per browser and allows us to encapsulate the peculiar browser behavior
       * of RTL scrolling in it's own class.
       * @private {?MDCTabScrollerRTL}
       */

      _this.rtlScrollerInstance_;
      return _this;
    }

    _createClass(MDCTabScrollerFoundation, [{
      key: "init",
      value: function init() {
        // Compute horizontal scrollbar height on scroller with overflow initially hidden, then update overflow to scroll
        // and immediately adjust bottom margin to avoid the scrollbar initially appearing before JS runs.
        var horizontalScrollbarHeight = this.adapter_.computeHorizontalScrollbarHeight();
        this.adapter_.setScrollAreaStyleProperty('margin-bottom', -horizontalScrollbarHeight + 'px');
        this.adapter_.addScrollAreaClass(MDCTabScrollerFoundation.cssClasses.SCROLL_AREA_SCROLL);
      }
      /**
       * Computes the current visual scroll position
       * @return {number}
       */

    }, {
      key: "getScrollPosition",
      value: function getScrollPosition() {
        if (this.isRTL_()) {
          return this.computeCurrentScrollPositionRTL_();
        }

        var currentTranslateX = this.calculateCurrentTranslateX_();
        var scrollLeft = this.adapter_.getScrollAreaScrollLeft();
        return scrollLeft - currentTranslateX;
      }
      /**
       * Handles interaction events that occur during transition
       */

    }, {
      key: "handleInteraction",
      value: function handleInteraction() {
        // Early exit if we aren't animating
        if (!this.isAnimating_) {
          return;
        } // Prevent other event listeners from handling this event


        this.stopScrollAnimation_();
      }
      /**
       * Handles the transitionend event
       * @param {!Event} evt
       */

    }, {
      key: "handleTransitionEnd",
      value: function handleTransitionEnd(evt) {
        // Early exit if we aren't animating or the event was triggered by a different element.
        if (!this.isAnimating_ || !this.adapter_.eventTargetMatchesSelector(evt.target, MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)) {
          return;
        }

        this.isAnimating_ = false;
        this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
      }
      /**
       * Increment the scroll value by the scrollXIncrement
       * @param {number} scrollXIncrement The value by which to increment the scroll position
       */

    }, {
      key: "incrementScroll",
      value: function incrementScroll(scrollXIncrement) {
        // Early exit for non-operational increment values
        if (scrollXIncrement === 0) {
          return;
        }

        if (this.isRTL_()) {
          return this.incrementScrollRTL_(scrollXIncrement);
        }

        this.incrementScroll_(scrollXIncrement);
      }
      /**
       * Scrolls to the given scrollX value
       * @param {number} scrollX
       */

    }, {
      key: "scrollTo",
      value: function scrollTo(scrollX) {
        if (this.isRTL_()) {
          return this.scrollToRTL_(scrollX);
        }

        this.scrollTo_(scrollX);
      }
      /**
       * Returns the appropriate version of the MDCTabScrollerRTL
       * @return {!MDCTabScrollerRTL}
       */

    }, {
      key: "getRTLScroller",
      value: function getRTLScroller() {
        if (!this.rtlScrollerInstance_) {
          this.rtlScrollerInstance_ = this.rtlScrollerFactory_();
        }

        return this.rtlScrollerInstance_;
      }
      /**
       * Returns the translateX value from a CSS matrix transform function string
       * @return {number}
       * @private
       */

    }, {
      key: "calculateCurrentTranslateX_",
      value: function calculateCurrentTranslateX_() {
        var transformValue = this.adapter_.getScrollContentStyleValue('transform'); // Early exit if no transform is present

        if (transformValue === 'none') {
          return 0;
        } // The transform value comes back as a matrix transformation in the form
        // of `matrix(a, b, c, d, tx, ty)`. We only care about tx (translateX) so
        // we're going to grab all the parenthesized values, strip out tx, and
        // parse it.


        var results = /\((.+)\)/.exec(transformValue)[1];
        var parts = results.split(',');
        return parseFloat(parts[4]);
      }
      /**
       * Calculates a safe scroll value that is > 0 and < the max scroll value
       * @param {number} scrollX The distance to scroll
       * @return {number}
       * @private
       */

    }, {
      key: "clampScrollValue_",
      value: function clampScrollValue_(scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.min(Math.max(edges.left, scrollX), edges.right);
      }
      /**
       * @return {number}
       * @private
       */

    }, {
      key: "computeCurrentScrollPositionRTL_",
      value: function computeCurrentScrollPositionRTL_() {
        var translateX = this.calculateCurrentTranslateX_();
        return this.getRTLScroller().getScrollPositionRTL(translateX);
      }
      /**
       * @return {!MDCTabScrollerHorizontalEdges}
       * @private
       */

    }, {
      key: "calculateScrollEdges_",
      value: function calculateScrollEdges_() {
        var contentWidth = this.adapter_.getScrollContentOffsetWidth();
        var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
        return (
          /** @type {!MDCTabScrollerHorizontalEdges} */
          {
            left: 0,
            right: contentWidth - rootWidth
          }
        );
      }
      /**
       * Internal scroll method
       * @param {number} scrollX The new scroll position
       * @private
       */

    }, {
      key: "scrollTo_",
      value: function scrollTo_(scrollX) {
        var currentScrollX = this.getScrollPosition();
        var safeScrollX = this.clampScrollValue_(scrollX);
        var scrollDelta = safeScrollX - currentScrollX;
        this.animate_(
        /** @type {!MDCTabScrollerAnimation} */
        {
          finalScrollPosition: safeScrollX,
          scrollDelta: scrollDelta
        });
      }
      /**
       * Internal RTL scroll method
       * @param {number} scrollX The new scroll position
       * @private
       */

    }, {
      key: "scrollToRTL_",
      value: function scrollToRTL_(scrollX) {
        var animation = this.getRTLScroller().scrollToRTL(scrollX);
        this.animate_(animation);
      }
      /**
       * Internal increment scroll method
       * @param {number} scrollX The new scroll position increment
       * @private
       */

    }, {
      key: "incrementScroll_",
      value: function incrementScroll_(scrollX) {
        var currentScrollX = this.getScrollPosition();
        var targetScrollX = scrollX + currentScrollX;
        var safeScrollX = this.clampScrollValue_(targetScrollX);
        var scrollDelta = safeScrollX - currentScrollX;
        this.animate_(
        /** @type {!MDCTabScrollerAnimation} */
        {
          finalScrollPosition: safeScrollX,
          scrollDelta: scrollDelta
        });
      }
      /**
       * Internal incremenet scroll RTL method
       * @param {number} scrollX The new scroll position RTL increment
       * @private
       */

    }, {
      key: "incrementScrollRTL_",
      value: function incrementScrollRTL_(scrollX) {
        var animation = this.getRTLScroller().incrementScrollRTL(scrollX);
        this.animate_(animation);
      }
      /**
       * Animates the tab scrolling
       * @param {!MDCTabScrollerAnimation} animation The animation to apply
       * @private
       */

    }, {
      key: "animate_",
      value: function animate_(animation) {
        var _this2 = this;

        // Early exit if translateX is 0, which means there's no animation to perform
        if (animation.scrollDelta === 0) {
          return;
        }

        this.stopScrollAnimation_(); // This animation uses the FLIP approach.
        // Read more here: https://aerotwist.com/blog/flip-your-animations/

        this.adapter_.setScrollAreaScrollLeft(animation.finalScrollPosition);
        this.adapter_.setScrollContentStyleProperty('transform', "translateX(".concat(animation.scrollDelta, "px)")); // Force repaint

        this.adapter_.computeScrollAreaClientRect();
        requestAnimationFrame(function () {
          _this2.adapter_.addClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);

          _this2.adapter_.setScrollContentStyleProperty('transform', 'none');
        });
        this.isAnimating_ = true;
      }
      /**
       * Stops scroll animation
       * @private
       */

    }, {
      key: "stopScrollAnimation_",
      value: function stopScrollAnimation_() {
        this.isAnimating_ = false;
        var currentScrollPosition = this.getAnimatingScrollPosition_();
        this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
        this.adapter_.setScrollContentStyleProperty('transform', 'translateX(0px)');
        this.adapter_.setScrollAreaScrollLeft(currentScrollPosition);
      }
      /**
       * Gets the current scroll position during animation
       * @return {number}
       * @private
       */

    }, {
      key: "getAnimatingScrollPosition_",
      value: function getAnimatingScrollPosition_() {
        var currentTranslateX = this.calculateCurrentTranslateX_();
        var scrollLeft = this.adapter_.getScrollAreaScrollLeft();

        if (this.isRTL_()) {
          return this.getRTLScroller().getAnimatingScrollPosition(scrollLeft, currentTranslateX);
        }

        return scrollLeft - currentTranslateX;
      }
      /**
       * Determines the RTL Scroller to use
       * @return {!MDCTabScrollerRTL}
       * @private
       */

    }, {
      key: "rtlScrollerFactory_",
      value: function rtlScrollerFactory_() {
        // Browsers have three different implementations of scrollLeft in RTL mode,
        // dependent on the browser. The behavior is based off the max LTR
        // scrollleft value and 0.
        //
        // * Default scrolling in RTL *
        //    - Left-most value: 0
        //    - Right-most value: Max LTR scrollLeft value
        //
        // * Negative scrolling in RTL *
        //    - Left-most value: Negated max LTR scrollLeft value
        //    - Right-most value: 0
        //
        // * Reverse scrolling in RTL *
        //    - Left-most value: Max LTR scrollLeft value
        //    - Right-most value: 0
        //
        // We use those principles below to determine which RTL scrollLeft
        // behavior is implemented in the current browser.
        var initialScrollLeft = this.adapter_.getScrollAreaScrollLeft();
        this.adapter_.setScrollAreaScrollLeft(initialScrollLeft - 1);
        var newScrollLeft = this.adapter_.getScrollAreaScrollLeft(); // If the newScrollLeft value is negative,then we know that the browser has
        // implemented negative RTL scrolling, since all other implementations have
        // only positive values.

        if (newScrollLeft < 0) {
          // Undo the scrollLeft test check
          this.adapter_.setScrollAreaScrollLeft(initialScrollLeft);
          return new MDCTabScrollerRTLNegative(this.adapter_);
        }

        var rootClientRect = this.adapter_.computeScrollAreaClientRect();
        var contentClientRect = this.adapter_.computeScrollContentClientRect();
        var rightEdgeDelta = Math.round(contentClientRect.right - rootClientRect.right); // Undo the scrollLeft test check

        this.adapter_.setScrollAreaScrollLeft(initialScrollLeft); // By calculating the clientRect of the root element and the clientRect of
        // the content element, we can determine how much the scroll value changed
        // when we performed the scrollLeft subtraction above.

        if (rightEdgeDelta === newScrollLeft) {
          return new MDCTabScrollerRTLReverse(this.adapter_);
        }

        return new MDCTabScrollerRTLDefault(this.adapter_);
      }
      /**
       * @return {boolean}
       * @private
       */

    }, {
      key: "isRTL_",
      value: function isRTL_() {
        return this.adapter_.getScrollContentStyleValue('direction') === 'rtl';
      }
    }]);

    return MDCTabScrollerFoundation;
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
   * Stores result from computeHorizontalScrollbarHeight to avoid redundant processing.
   * @private {number|undefined}
   */

  var horizontalScrollbarHeight_;
  /**
   * Computes the height of browser-rendered horizontal scrollbars using a self-created test element.
   * May return 0 (e.g. on OS X browsers under default configuration).
   * @param {!Document} documentObj
   * @param {boolean=} shouldCacheResult
   * @return {number}
   */

  function computeHorizontalScrollbarHeight(documentObj) {
    var shouldCacheResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (shouldCacheResult && typeof horizontalScrollbarHeight_ !== 'undefined') {
      return horizontalScrollbarHeight_;
    }

    var el = documentObj.createElement('div');
    el.classList.add(cssClasses$2.SCROLL_TEST);
    documentObj.body.appendChild(el);
    var horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
    documentObj.body.removeChild(el);

    if (shouldCacheResult) {
      horizontalScrollbarHeight_ = horizontalScrollbarHeight;
    }

    return horizontalScrollbarHeight;
  }
  /**
   * @param {!Object} HTMLElementPrototype
   * @return {!Array<string>}
   */


  function getMatchesProperty$1(HTMLElementPrototype) {
    return ['msMatchesSelector', 'matches'].filter(function (p) {
      return p in HTMLElementPrototype;
    }).pop();
  }

  //
  var script$3 = {
    name: 'mdc-tab-scroller',
    data: function data() {
      return {
        classes: {},
        areaClasses: {},
        areaStyles: {},
        contentStyles: {}
      };
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCTabScrollerFoundation({
        eventTargetMatchesSelector: function eventTargetMatchesSelector(evtTarget, selector) {
          var MATCHES = getMatchesProperty$1(HTMLElement.prototype);
          return evtTarget[MATCHES](selector);
        },
        addClass: function addClass(className) {
          return _this.$set(_this.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this.$delete(_this.classes, className);
        },
        addScrollAreaClass: function addScrollAreaClass(className) {
          return _this.$set(_this.areaClasses, className, true);
        },
        setScrollAreaStyleProperty: function setScrollAreaStyleProperty(prop, value) {
          return _this.$set(_this.areaStyles, prop, value);
        },
        setScrollContentStyleProperty: function setScrollContentStyleProperty(prop, value) {
          return _this.$set(_this.contentStyles, prop, value);
        },
        getScrollContentStyleValue: function getScrollContentStyleValue(propName) {
          return window.getComputedStyle(_this.$refs.content).getPropertyValue(propName);
        },
        setScrollAreaScrollLeft: function setScrollAreaScrollLeft(scrollX) {
          return _this.$refs.area.scrollLeft = scrollX;
        },
        getScrollAreaScrollLeft: function getScrollAreaScrollLeft() {
          return _this.$refs.area.scrollLeft;
        },
        getScrollContentOffsetWidth: function getScrollContentOffsetWidth() {
          return _this.$refs.content.offsetWidth;
        },
        getScrollAreaOffsetWidth: function getScrollAreaOffsetWidth() {
          return _this.$refs.area.offsetWidth;
        },
        computeScrollAreaClientRect: function computeScrollAreaClientRect() {
          return _this.$refs.area.getBoundingClientRect();
        },
        computeScrollContentClientRect: function computeScrollContentClientRect() {
          return _this.$refs.content.getBoundingClientRect();
        },
        computeHorizontalScrollbarHeight: function computeHorizontalScrollbarHeight$$1() {
          return computeHorizontalScrollbarHeight(document);
        }
      });
      this.foundation.init();
    },
    beforeDestroy: function beforeDestroy() {
      this.foundation.destroy();
    },
    methods: {
      handleTransitionEnd: function handleTransitionEnd(evt) {
        this.foundation.handleTransitionEnd(evt);
      },
      handleInteraction: function handleInteraction(evt) {
        this.foundation.handleInteraction(evt);
      },
      getScrollPosition: function getScrollPosition() {
        return this.foundation.getScrollPosition();
      },
      getScrollContentWidth: function getScrollContentWidth() {
        return this.$refs.content.offsetWidth;
      },
      incrementScroll: function incrementScroll(scrollXIncrement) {
        this.foundation.incrementScroll(scrollXIncrement);
      },
      scrollTo: function scrollTo(scrollX) {
        this.foundation.scrollTo(scrollX);
      }
    }
  };

  /* script */
  const __vue_script__$3 = script$3;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$3.__file = "/ddata/extra/vma/components/tabs/mdc-tab-scroller.vue";

  /* template */
  var __vue_render__$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "mdc-tab-scroller", class: _vm.classes }, [
      _c(
        "div",
        {
          ref: "area",
          staticClass: "mdc-tab-scroller__scroll-area",
          class: _vm.areaClasses,
          style: _vm.areaStyles,
          on: {
            mousedown: _vm.handleInteraction,
            wheel: _vm.handleInteraction,
            pointerdown: _vm.handleInteraction,
            touchstart: _vm.handleInteraction,
            keydown: _vm.handleInteraction
          }
        },
        [
          _c(
            "div",
            {
              ref: "content",
              staticClass: "mdc-tab-scroller__scroll-content",
              style: _vm.contentStyles,
              on: { transitionend: _vm.handleTransitionEnd }
            },
            [_vm._t("default")],
            2
          )
        ]
      )
    ])
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
    

    
    var mdcTabScroller = normalizeComponent(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
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

  /* eslint no-unused-vars: [2, {"args": "none"}] */

  /**
   * Adapter for MDC Tab Indicator.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the Tab Indicator into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */
  var MDCTabIndicatorAdapter =
  /*#__PURE__*/
  function () {
    function MDCTabIndicatorAdapter() {
      _classCallCheck(this, MDCTabIndicatorAdapter);
    }

    _createClass(MDCTabIndicatorAdapter, [{
      key: "addClass",

      /**
       * Adds the given className to the root element.
       * @param {string} className The className to add
       */
      value: function addClass(className) {}
      /**
       * Removes the given className from the root element.
       * @param {string} className The className to remove
       */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}
      /**
       * Returns the client rect of the content element.
       * @return {!ClientRect}
       */

    }, {
      key: "computeContentClientRect",
      value: function computeContentClientRect() {}
      /**
       * Sets a style property of the content element to the passed value
       * @param {string} propName The style property name to set
       * @param {string} value The style property value
       */

    }, {
      key: "setContentStyleProperty",
      value: function setContentStyleProperty(propName, value) {}
    }]);

    return MDCTabIndicatorAdapter;
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
    ACTIVE: 'mdc-tab-indicator--active',
    FADE: 'mdc-tab-indicator--fade',
    NO_TRANSITION: 'mdc-tab-indicator--no-transition'
  };
  /** @enum {string} */

  var strings$4 = {
    CONTENT_SELECTOR: '.mdc-tab-indicator__content'
  };

  /**
   * @extends {MDCFoundation<!MDCTabIndicatorAdapter>}
   * @abstract
   */

  var MDCTabIndicatorFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCTabIndicatorFoundation, _MDCFoundation);

    _createClass(MDCTabIndicatorFoundation, null, [{
      key: "cssClasses",

      /** @return enum {string} */
      get: function get() {
        return cssClasses$3;
      }
      /** @return enum {string} */

    }, {
      key: "strings",
      get: function get() {
        return strings$4;
      }
      /**
       * @see MDCTabIndicatorAdapter for typing information
       * @return {!MDCTabIndicatorAdapter}
       */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCTabIndicatorAdapter} */
          {
            addClass: function addClass() {},
            removeClass: function removeClass() {},
            computeContentClientRect: function computeContentClientRect() {},
            setContentStyleProperty: function setContentStyleProperty() {}
          }
        );
      }
      /** @param {!MDCTabIndicatorAdapter} adapter */

    }]);

    function MDCTabIndicatorFoundation(adapter) {
      _classCallCheck(this, MDCTabIndicatorFoundation);

      return _possibleConstructorReturn(this, _getPrototypeOf(MDCTabIndicatorFoundation).call(this, _extends(MDCTabIndicatorFoundation.defaultAdapter, adapter)));
    }
    /** @return {!ClientRect} */


    _createClass(MDCTabIndicatorFoundation, [{
      key: "computeContentClientRect",
      value: function computeContentClientRect() {
        return this.adapter_.computeContentClientRect();
      }
      /**
       * Activates the indicator
       * @param {!ClientRect=} previousIndicatorClientRect
       * @abstract
       */

    }, {
      key: "activate",
      value: function activate(previousIndicatorClientRect) {} // eslint-disable-line no-unused-vars

      /** @abstract */

    }, {
      key: "deactivate",
      value: function deactivate() {}
    }]);

    return MDCTabIndicatorFoundation;
  }(MDCFoundation);

  /**
   * @extends {MDCTabIndicatorFoundation}
   * @final
   */

  var MDCSlidingTabIndicatorFoundation =
  /*#__PURE__*/
  function (_MDCTabIndicatorFound) {
    _inherits(MDCSlidingTabIndicatorFoundation, _MDCTabIndicatorFound);

    function MDCSlidingTabIndicatorFoundation() {
      _classCallCheck(this, MDCSlidingTabIndicatorFoundation);

      return _possibleConstructorReturn(this, _getPrototypeOf(MDCSlidingTabIndicatorFoundation).apply(this, arguments));
    }

    _createClass(MDCSlidingTabIndicatorFoundation, [{
      key: "activate",

      /** @param {!ClientRect=} previousIndicatorClientRect */
      value: function activate(previousIndicatorClientRect) {
        // Early exit if no indicator is present to handle cases where an indicator
        // may be activated without a prior indicator state
        if (!previousIndicatorClientRect) {
          this.adapter_.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
          return;
        } // This animation uses the FLIP approach. You can read more about it at the link below:
        // https://aerotwist.com/blog/flip-your-animations/
        // Calculate the dimensions based on the dimensions of the previous indicator


        var currentClientRect = this.computeContentClientRect();
        var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
        var xPosition = previousIndicatorClientRect.left - currentClientRect.left;
        this.adapter_.addClass(MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
        this.adapter_.setContentStyleProperty('transform', "translateX(".concat(xPosition, "px) scaleX(").concat(widthDelta, ")")); // Force repaint before updating classes and transform to ensure the transform properly takes effect

        this.computeContentClientRect();
        this.adapter_.removeClass(MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
        this.adapter_.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
        this.adapter_.setContentStyleProperty('transform', '');
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this.adapter_.removeClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
      }
    }]);

    return MDCSlidingTabIndicatorFoundation;
  }(MDCTabIndicatorFoundation);

  //
  var script$4 = {
    name: 'mdc-tab-indicator',
    data: function data() {
      return {
        classes: {},
        styles: {}
      };
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCSlidingTabIndicatorFoundation({
        addClass: function addClass(className) {
          return _this.$set(_this.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this.$delete(_this.classes, className);
        },
        computeContentClientRect: function computeContentClientRect() {
          return _this.$refs.content.getBoundingClientRect();
        },
        setContentStyleProperty: function setContentStyleProperty(prop, value) {
          _this.$set(_this.styles, prop, value);
        }
      });
      this.foundation.init();
    },
    beforeDestroy: function beforeDestroy() {
      this.foundation.destroy();
    },
    methods: {
      activate: function activate(previousIndicatorClientRect) {
        this.foundation.activate(previousIndicatorClientRect);
      },
      deactivate: function deactivate() {
        this.foundation.deactivate();
      },
      computeContentClientRect: function computeContentClientRect() {
        return this.foundation.computeContentClientRect();
      }
    }
  };

  /* script */
  const __vue_script__$4 = script$4;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$4.__file = "/ddata/extra/vma/components/tabs/mdc-tab-indicator.vue";

  /* template */
  var __vue_render__$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", { staticClass: "mdc-tab-indicator", class: _vm.classes }, [
      _c("span", {
        ref: "content",
        staticClass:
          "mdc-tab-indicator__content mdc-tab-indicator__content--underline",
        style: _vm.styles
      })
    ])
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
    

    
    var mdcTabIndicator = normalizeComponent(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      undefined,
      undefined
    );

  //
  var script$5 = {
    name: 'mdc-tab-ripple',
    data: function data() {
      return {
        classes: {},
        styles: {}
      };
    },
    mounted: function mounted() {
      this.ripple = new RippleBase(this);
      this.ripple.init();
    },
    beforeDestroy: function beforeDestroy() {
      this.ripple.destroy();
    }
  };

  /* script */
  const __vue_script__$5 = script$5;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$5.__file = "/ddata/extra/vma/components/tabs/mdc-tab-ripple.vue";

  /* template */
  var __vue_render__$5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", {
      staticClass: "mdc-tab__ripple",
      class: _vm.classes,
      style: _vm.styles
    })
  };
  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;

    /* style */
    const __vue_inject_styles__$5 = undefined;
    /* scoped */
    const __vue_scope_id__$5 = undefined;
    /* module identifier */
    const __vue_module_identifier__$5 = undefined;
    /* functional template */
    const __vue_is_functional_template__$5 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcTabRipple = normalizeComponent(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      undefined,
      undefined
    );

  var plugin = BasePlugin({
    mdcTab: mdcTab,
    mdcTabBar: mdcTabBar,
    mdcTabScroller: mdcTabScroller,
    mdcTabIndicator: mdcTabIndicator,
    mdcTabRipple: mdcTabRipple
  });

  autoInit(plugin);

  return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9iYXNlL2F1dG8taW5pdC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9iYXNlLXBsdWdpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZWxlbWVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tbGluay5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZXZlbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWljb24uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvZGlzcGF0Y2gtZXZlbnQtbWl4aW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvdW5pcXVlaWQtbWl4aW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS91dGlsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS1iYXNlLmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXJ1bnRpbWUtaGVscGVycy9ub3JtYWxpemUtY29tcG9uZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy90YWJzL21kYy10YWIudnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9jb21wb25lbnRzL3RhYnMvbWRjLXRhYi1iYXIudnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3J0bC1zY3JvbGxlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3J0bC1kZWZhdWx0LXNjcm9sbGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvcnRsLW5lZ2F0aXZlLXNjcm9sbGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvcnRsLXJldmVyc2Utc2Nyb2xsZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvdXRpbC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvdGFicy9tZGMtdGFiLXNjcm9sbGVyLnZ1ZSIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWluZGljYXRvci9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWluZGljYXRvci9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL3NsaWRpbmctZm91bmRhdGlvbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvdGFicy9tZGMtdGFiLWluZGljYXRvci52dWUiLCIuLi8uLi9jb21wb25lbnRzL3RhYnMvbWRjLXRhYi1yaXBwbGUudnVlIiwiLi4vLi4vY29tcG9uZW50cy90YWJzL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy90YWJzL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHtcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIGNvbnRleHQucHJvcHMuaXMgfHwgY29udGV4dC5wcm9wcy50YWcgfHwgJ2RpdicsXG4gICAgICBjb250ZXh0LmRhdGEsXG4gICAgICBjb250ZXh0LmNoaWxkcmVuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50TWl4aW4gPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21FbGVtZW50XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDdXN0b21MaW5rID0ge1xuICBuYW1lOiAnY3VzdG9tLWxpbmsnLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIHRhZzogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdhJyB9LFxuICAgIGxpbms6IE9iamVjdFxuICB9LFxuICByZW5kZXIoaCwgY29udGV4dCkge1xuICAgIGxldCBlbGVtZW50XG4gICAgbGV0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LmRhdGEpXG5cbiAgICBpZiAoY29udGV4dC5wcm9wcy5saW5rICYmIGNvbnRleHQucGFyZW50LiRyb3V0ZXIpIHtcbiAgICAgIC8vIHJvdXRlci1saW5rIGNhc2VcbiAgICAgIGVsZW1lbnQgPSBjb250ZXh0LnBhcmVudC4kcm9vdC4kb3B0aW9ucy5jb21wb25lbnRzWydyb3V0ZXItbGluayddXG4gICAgICBkYXRhLnByb3BzID0gT2JqZWN0LmFzc2lnbih7IHRhZzogY29udGV4dC5wcm9wcy50YWcgfSwgY29udGV4dC5wcm9wcy5saW5rKVxuICAgICAgaWYgKGRhdGEub24uY2xpY2spIHtcbiAgICAgICAgZGF0YS5uYXRpdmVPbiA9IHsgY2xpY2s6IGRhdGEub24uY2xpY2sgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlbGVtZW50IGZhbGxiYWNrXG4gICAgICBlbGVtZW50ID0gY29udGV4dC5wcm9wcy50YWdcbiAgICB9XG5cbiAgICByZXR1cm4gaChlbGVtZW50LCBkYXRhLCBjb250ZXh0LmNoaWxkcmVuKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21MaW5rTWl4aW4gPSB7XG4gIHByb3BzOiB7XG4gICAgdG86IFtTdHJpbmcsIE9iamVjdF0sXG4gICAgZXhhY3Q6IEJvb2xlYW4sXG4gICAgYXBwZW5kOiBCb29sZWFuLFxuICAgIHJlcGxhY2U6IEJvb2xlYW4sXG4gICAgYWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgICBleGFjdEFjdGl2ZUNsYXNzOiBTdHJpbmdcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaW5rKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy50byAmJiB7XG4gICAgICAgICAgdG86IHRoaXMudG8sXG4gICAgICAgICAgZXhhY3Q6IHRoaXMuZXhhY3QsXG4gICAgICAgICAgYXBwZW5kOiB0aGlzLmFwcGVuZCxcbiAgICAgICAgICByZXBsYWNlOiB0aGlzLnJlcGxhY2UsXG4gICAgICAgICAgYWN0aXZlQ2xhc3M6IHRoaXMuYWN0aXZlQ2xhc3MsXG4gICAgICAgICAgZXhhY3RBY3RpdmVDbGFzczogdGhpcy5leGFjdEFjdGl2ZUNsYXNzXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21MaW5rXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBleHRyYWN0SWNvblByb3AoaWNvblByb3ApIHtcbiAgaWYgKHR5cGVvZiBpY29uUHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3NlczogeyAnbWF0ZXJpYWwtaWNvbnMnOiB0cnVlIH0sXG4gICAgICBjb250ZW50OiBpY29uUHJvcFxuICAgIH1cbiAgfSBlbHNlIGlmIChpY29uUHJvcCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IGljb25Qcm9wLnJlZHVjZShcbiAgICAgICAgKHJlc3VsdCwgdmFsdWUpID0+IE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7IFt2YWx1ZV06IHRydWUgfSksXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBpY29uUHJvcCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3NlczogaWNvblByb3AuY2xhc3NOYW1lXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgKHJlc3VsdCwgdmFsdWUpID0+IE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7IFt2YWx1ZV06IHRydWUgfSksXG4gICAgICAgICAge31cbiAgICAgICAgKSxcbiAgICAgIGNvbnRlbnQ6IGljb25Qcm9wLnRleHRDb250ZW50XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgRGlzcGF0Y2hFdmVudE1peGluID0ge1xuICBwcm9wczoge1xuICAgIGV2ZW50OiBTdHJpbmcsXG4gICAgJ2V2ZW50LXRhcmdldCc6IE9iamVjdCxcbiAgICAnZXZlbnQtYXJncyc6IEFycmF5XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBkaXNwYXRjaEV2ZW50KGV2dCkge1xuICAgICAgZXZ0ICYmIHRoaXMuJGVtaXQoZXZ0LnR5cGUsIGV2dClcbiAgICAgIGlmICh0aGlzLmV2ZW50KSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmV2ZW50VGFyZ2V0IHx8IHRoaXMuJHJvb3RcbiAgICAgICAgbGV0IGFyZ3MgPSB0aGlzLmV2ZW50QXJncyB8fCBbXVxuICAgICAgICB0YXJnZXQuJGVtaXQodGhpcy5ldmVudCwgLi4uYXJncylcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbGlzdGVuZXJzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy4kbGlzdGVuZXJzLFxuICAgICAgICBjbGljazogZSA9PiB0aGlzLmRpc3BhdGNoRXZlbnQoZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0IHNjb3BlID1cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigweDEwMDAwMDAwKSkudG9TdHJpbmcoKSArICctJ1xuXG5leHBvcnQgY29uc3QgVk1BVW5pcXVlSWRNaXhpbiA9IHtcbiAgYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMudm1hX3VpZF8gPSBzY29wZSArIHRoaXMuX3VpZFxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgQVxuICovXG5jbGFzcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bXtjc3NDbGFzc2VzfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17bnVtYmVyc30gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiB7IU9iamVjdH0gKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgLy8gdmFsaWRhdGlvbi5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciA9IHt9KSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFBfSAqL1xuICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIE1EQ1RhYkRpbWVuc2lvbnMgcHJvdmlkZXMgZGV0YWlscyBhYm91dCB0aGUgbGVmdCBhbmQgcmlnaHQgZWRnZXMgb2YgdGhlIFRhYlxuICogcm9vdCBlbGVtZW50IGFuZCB0aGUgVGFiIGNvbnRlbnQgZWxlbWVudC4gVGhlc2UgdmFsdWVzIGFyZSB1c2VkIHRvIGRldGVybWluZVxuICogdGhlIHZpc3VhbCBwb3NpdGlvbiBvZiB0aGUgVGFiIHdpdGggcmVzcGVjdCBpdCdzIHBhcmVudCBjb250YWluZXIuXG4gKiBAdHlwZWRlZiB7e3Jvb3RMZWZ0OiBudW1iZXIsIHJvb3RSaWdodDogbnVtYmVyLCBjb250ZW50TGVmdDogbnVtYmVyLCBjb250ZW50UmlnaHQ6IG51bWJlcn19XG4gKi9cbmxldCBNRENUYWJEaW1lbnNpb25zO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGRldGFpbDoge1xuICogICAgIHRhYklkOiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIGJ1YmJsZXM6IGJvb2xlYW4sXG4gKiB9fVxuICovXG5sZXQgTURDVGFiSW50ZXJhY3Rpb25FdmVudFR5cGU7XG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRhYi5cbiAqXG4gKiBEZWZpbmVzIHRoZSBzaGFwZSBvZiB0aGUgYWRhcHRlciBleHBlY3RlZCBieSB0aGUgZm91bmRhdGlvbi4gSW1wbGVtZW50IHRoaXNcbiAqIGFkYXB0ZXIgdG8gaW50ZWdyYXRlIHRoZSBUYWIgIGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENUYWJBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIGNsYXNzTmFtZSB0byB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzc05hbWUgdG8gYWRkXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGdpdmVuIGNsYXNzTmFtZSBmcm9tIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzTmFtZSB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSByb290IGVsZW1lbnQgaGFzIHRoZSBnaXZlbiBjbGFzc05hbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzTmFtZSB0byByZW1vdmVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgZ2l2ZW4gYXR0ck5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudCB0byB0aGUgZ2l2ZW4gdmFsdWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyIFRoZSBhdHRyaWJ1dGUgbmFtZSB0byBzZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBzbyBnaXZlIHRoZSBhdHRyaWJ1dGVcbiAgICovXG4gIHNldEF0dHIoYXR0ciwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5kaWNhdG9yIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7IUNsaWVudFJlY3Q9fSBwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QgVGhlIGNsaWVudCByZWN0IG9mIHRoZSBwcmV2aW91c2x5IGFjdGl2YXRlZCBpbmRpY2F0b3JcbiAgICovXG4gIGFjdGl2YXRlSW5kaWNhdG9yKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCkge31cblxuICAvKiogRGVhY3RpdmF0ZXMgdGhlIGluZGljYXRvci4gKi9cbiAgZGVhY3RpdmF0ZUluZGljYXRvcigpIHt9XG5cbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBNRENUYWI6aW50ZXJhY3RlZCBldmVudCBmb3IgdXNlIGJ5IHBhcmVudCBjb21wb25lbnRzXG4gICAqL1xuICBub3RpZnlJbnRlcmFjdGVkKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0TGVmdCB2YWx1ZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRPZmZzZXRMZWZ0KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0V2lkdGggdmFsdWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0T2Zmc2V0V2lkdGgoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXRMZWZ0IG9mIHRoZSBjb250ZW50IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldENvbnRlbnRPZmZzZXRMZWZ0KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0V2lkdGggb2YgdGhlIGNvbnRlbnQgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0Q29udGVudE9mZnNldFdpZHRoKCkge31cblxuICAvKipcbiAgICogQXBwbGllcyBmb2N1cyB0byB0aGUgcm9vdCBlbGVtZW50XG4gICAqL1xuICBmb2N1cygpIHt9XG59XG5cbmV4cG9ydCB7TURDVGFiRGltZW5zaW9ucywgTURDVGFiSW50ZXJhY3Rpb25FdmVudFR5cGUsIE1EQ1RhYkFkYXB0ZXJ9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgQUNUSVZFOiAnbWRjLXRhYi0tYWN0aXZlJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQVJJQV9TRUxFQ1RFRDogJ2FyaWEtc2VsZWN0ZWQnLFxuICBSSVBQTEVfU0VMRUNUT1I6ICcubWRjLXRhYl9fcmlwcGxlJyxcbiAgQ09OVEVOVF9TRUxFQ1RPUjogJy5tZGMtdGFiX19jb250ZW50JyxcbiAgVEFCX0lORElDQVRPUl9TRUxFQ1RPUjogJy5tZGMtdGFiLWluZGljYXRvcicsXG4gIFRBQklOREVYOiAndGFiSW5kZXgnLFxuICBJTlRFUkFDVEVEX0VWRU5UOiAnTURDVGFiOmludGVyYWN0ZWQnLFxufTtcblxuZXhwb3J0IHtcbiAgY3NzQ2xhc3NlcyxcbiAgc3RyaW5ncyxcbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1RhYkFkYXB0ZXIsIE1EQ1RhYkRpbWVuc2lvbnN9IGZyb20gJy4vYWRhcHRlcic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbmltcG9ydCB7XG4gIGNzc0NsYXNzZXMsXG4gIHN0cmluZ3MsXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDVGFiQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGFiRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzZWUgTURDVGFiQWRhcHRlciBmb3IgdHlwaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4geyFNRENUYWJBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiQWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIGhhc0NsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHNldEF0dHI6ICgpID0+IHt9LFxuICAgICAgYWN0aXZhdGVJbmRpY2F0b3I6ICgpID0+IHt9LFxuICAgICAgZGVhY3RpdmF0ZUluZGljYXRvcjogKCkgPT4ge30sXG4gICAgICBub3RpZnlJbnRlcmFjdGVkOiAoKSA9PiB7fSxcbiAgICAgIGdldE9mZnNldExlZnQ6ICgpID0+IHt9LFxuICAgICAgZ2V0T2Zmc2V0V2lkdGg6ICgpID0+IHt9LFxuICAgICAgZ2V0Q29udGVudE9mZnNldExlZnQ6ICgpID0+IHt9LFxuICAgICAgZ2V0Q29udGVudE9mZnNldFdpZHRoOiAoKSA9PiB7fSxcbiAgICAgIGZvY3VzOiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0geyFNRENUYWJBZGFwdGVyfSBhZGFwdGVyICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1RhYkZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmZvY3VzT25BY3RpdmF0ZV8gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIFwiY2xpY2tcIiBldmVudFxuICAgKi9cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgLy8gSXQncyB1cCB0byB0aGUgcGFyZW50IGNvbXBvbmVudCB0byBrZWVwIHRyYWNrIG9mIHRoZSBhY3RpdmUgVGFiIGFuZFxuICAgIC8vIGVuc3VyZSB3ZSBkb24ndCBhY3RpdmF0ZSBhIFRhYiB0aGF0J3MgYWxyZWFkeSBhY3RpdmUuXG4gICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlJbnRlcmFjdGVkKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgVGFiJ3MgYWN0aXZlIHN0YXRlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkFDVElWRSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB3aGV0aGVyIHRoZSB0YWIgc2hvdWxkIGZvY3VzIGl0c2VsZiB3aGVuIGFjdGl2YXRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZvY3VzT25BY3RpdmF0ZVxuICAgKi9cbiAgc2V0Rm9jdXNPbkFjdGl2YXRlKGZvY3VzT25BY3RpdmF0ZSkge1xuICAgIHRoaXMuZm9jdXNPbkFjdGl2YXRlXyA9IGZvY3VzT25BY3RpdmF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIFRhYlxuICAgKiBAcGFyYW0geyFDbGllbnRSZWN0PX0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0XG4gICAqL1xuICBhY3RpdmF0ZShwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5BUklBX1NFTEVDVEVELCAndHJ1ZScpO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihzdHJpbmdzLlRBQklOREVYLCAnMCcpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWN0aXZhdGVJbmRpY2F0b3IocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KTtcbiAgICBpZiAodGhpcy5mb2N1c09uQWN0aXZhdGVfKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBUYWJcbiAgICovXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgLy8gRWFybHkgZXhpdFxuICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkFDVElWRSk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKHN0cmluZ3MuQVJJQV9TRUxFQ1RFRCwgJ2ZhbHNlJyk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKHN0cmluZ3MuVEFCSU5ERVgsICctMScpO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVhY3RpdmF0ZUluZGljYXRvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIFRhYlxuICAgKiBAcmV0dXJuIHshTURDVGFiRGltZW5zaW9uc31cbiAgICovXG4gIGNvbXB1dGVEaW1lbnNpb25zKCkge1xuICAgIGNvbnN0IHJvb3RXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0T2Zmc2V0V2lkdGgoKTtcbiAgICBjb25zdCByb290TGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0T2Zmc2V0TGVmdCgpO1xuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0Q29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3QgY29udGVudExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldENvbnRlbnRPZmZzZXRMZWZ0KCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcm9vdExlZnQsXG4gICAgICByb290UmlnaHQ6IHJvb3RMZWZ0ICsgcm9vdFdpZHRoLFxuICAgICAgY29udGVudExlZnQ6IHJvb3RMZWZ0ICsgY29udGVudExlZnQsXG4gICAgICBjb250ZW50UmlnaHQ6IHJvb3RMZWZ0ICsgY29udGVudExlZnQgKyBjb250ZW50V2lkdGgsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbi8qKlxuICogQHRlbXBsYXRlIEZcbiAqL1xuY2xhc3MgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ0NvbXBvbmVudH1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgLy8gU3ViY2xhc3NlcyB3aGljaCBleHRlbmQgTURDQmFzZSBzaG91bGQgcHJvdmlkZSBhbiBhdHRhY2hUbygpIG1ldGhvZCB0aGF0IHRha2VzIGEgcm9vdCBlbGVtZW50IGFuZFxuICAgIC8vIHJldHVybnMgYW4gaW5zdGFudGlhdGVkIGNvbXBvbmVudCB3aXRoIGl0cyByb290IHNldCB0byB0aGF0IGVsZW1lbnQuIEFsc28gbm90ZSB0aGF0IGluIHRoZSBjYXNlcyBvZlxuICAgIC8vIHN1YmNsYXNzZXMsIGFuIGV4cGxpY2l0IGZvdW5kYXRpb24gY2xhc3Mgd2lsbCBub3QgaGF2ZSB0byBiZSBwYXNzZWQgaW47IGl0IHdpbGwgc2ltcGx5IGJlIGluaXRpYWxpemVkXG4gICAgLy8gZnJvbSBnZXREZWZhdWx0Rm91bmRhdGlvbigpLlxuICAgIHJldHVybiBuZXcgTURDQ29tcG9uZW50KHJvb3QsIG5ldyBNRENGb3VuZGF0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHtGPX0gZm91bmRhdGlvblxuICAgKiBAcGFyYW0gey4uLj99IGFyZ3NcbiAgICovXG4gIGNvbnN0cnVjdG9yKHJvb3QsIGZvdW5kYXRpb24gPSB1bmRlZmluZWQsIC4uLmFyZ3MpIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG4gICAgdGhpcy5yb290XyA9IHJvb3Q7XG4gICAgdGhpcy5pbml0aWFsaXplKC4uLmFyZ3MpO1xuICAgIC8vIE5vdGUgdGhhdCB3ZSBpbml0aWFsaXplIGZvdW5kYXRpb24gaGVyZSBhbmQgbm90IHdpdGhpbiB0aGUgY29uc3RydWN0b3IncyBkZWZhdWx0IHBhcmFtIHNvIHRoYXRcbiAgICAvLyB0aGlzLnJvb3RfIGlzIGRlZmluZWQgYW5kIGNhbiBiZSB1c2VkIHdpdGhpbiB0aGUgZm91bmRhdGlvbiBjbGFzcy5cbiAgICAvKiogQHByb3RlY3RlZCB7IUZ9ICovXG4gICAgdGhpcy5mb3VuZGF0aW9uXyA9IGZvdW5kYXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSA6IGZvdW5kYXRpb247XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5pbml0KCk7XG4gICAgdGhpcy5pbml0aWFsU3luY1dpdGhET00oKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoLyogLi4uYXJncyAqLykge1xuICAgIC8vIFN1YmNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoaXMgdG8gZG8gYW55IGFkZGl0aW9uYWwgc2V0dXAgd29yayB0aGF0IHdvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiBhXG4gICAgLy8gXCJjb25zdHJ1Y3RvclwiLiBFc3NlbnRpYWxseSwgaXQgaXMgYSBob29rIGludG8gdGhlIHBhcmVudCBjb25zdHJ1Y3RvciBiZWZvcmUgdGhlIGZvdW5kYXRpb24gaXNcbiAgICAvLyBpbml0aWFsaXplZC4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIGJlc2lkZXMgcm9vdCBhbmQgZm91bmRhdGlvbiB3aWxsIGJlIHBhc3NlZCBpbiBoZXJlLlxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFGfSBmb3VuZGF0aW9uXG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCBmb3VuZGF0aW9uIGNsYXNzIGZvciB0aGVcbiAgICAvLyBjb21wb25lbnQuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgZ2V0RGVmYXVsdEZvdW5kYXRpb24gdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCAnICtcbiAgICAgICdmb3VuZGF0aW9uIGNsYXNzJyk7XG4gIH1cblxuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgdGhleSBuZWVkIHRvIHBlcmZvcm0gd29yayB0byBzeW5jaHJvbml6ZSB3aXRoIGEgaG9zdCBET01cbiAgICAvLyBvYmplY3QuIEFuIGV4YW1wbGUgb2YgdGhpcyB3b3VsZCBiZSBhIGZvcm0gY29udHJvbCB3cmFwcGVyIHRoYXQgbmVlZHMgdG8gc3luY2hyb25pemUgaXRzIGludGVybmFsIHN0YXRlXG4gICAgLy8gdG8gc29tZSBwcm9wZXJ0eSBvciBhdHRyaWJ1dGUgb2YgdGhlIGhvc3QgRE9NLiBQbGVhc2Ugbm90ZTogdGhpcyBpcyAqbm90KiB0aGUgcGxhY2UgdG8gcGVyZm9ybSBET01cbiAgICAvLyByZWFkcy93cml0ZXMgdGhhdCB3b3VsZCBjYXVzZSBsYXlvdXQgLyBwYWludCwgYXMgdGhpcyBpcyBjYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIHdpdGhpbiB0aGUgY29uc3RydWN0b3IuXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgbWF5IGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZWxlYXNlIGFueSByZXNvdXJjZXMgLyBkZXJlZ2lzdGVyIGFueSBsaXN0ZW5lcnMgdGhleSBoYXZlXG4gICAgLy8gYXR0YWNoZWQuIEFuIGV4YW1wbGUgb2YgdGhpcyBtaWdodCBiZSBkZXJlZ2lzdGVyaW5nIGEgcmVzaXplIGV2ZW50IGZyb20gdGhlIHdpbmRvdyBvYmplY3QuXG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiBsaXN0ZW5pbmcgZm9yIGN1c3RvbSBldmVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBsaXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIG1ldGhvZCB0byByZW1vdmUgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudC4gVGhpcyBpcyBtb3N0IHVzZWZ1bCB3aGVuXG4gICAqIHVubGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgdW5saXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBhIGNyb3NzLWJyb3dzZXItY29tcGF0aWJsZSBjdXN0b20gZXZlbnQgZnJvbSB0aGUgY29tcG9uZW50IHJvb3Qgb2YgdGhlIGdpdmVuIHR5cGUsXG4gICAqIHdpdGggdGhlIGdpdmVuIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IU9iamVjdH0gZXZ0RGF0YVxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBzaG91bGRCdWJibGVcbiAgICovXG4gIGVtaXQoZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgICBsZXQgZXZ0O1xuICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvb3RfLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENDb21wb25lbnQ7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFJpcHBsZS4gUHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBtYW5hZ2luZ1xuICogLSBjbGFzc2VzXG4gKiAtIGRvbVxuICogLSBDU1MgdmFyaWFibGVzXG4gKiAtIHBvc2l0aW9uXG4gKiAtIGRpbWVuc2lvbnNcbiAqIC0gc2Nyb2xsIHBvc2l0aW9uXG4gKiAtIGV2ZW50IGhhbmRsZXJzXG4gKiAtIHVuYm91bmRlZCwgYWN0aXZlIGFuZCBkaXNhYmxlZCBzdGF0ZXNcbiAqXG4gKiBBZGRpdGlvbmFsbHksIHByb3ZpZGVzIHR5cGUgaW5mb3JtYXRpb24gZm9yIHRoZSBhZGFwdGVyIHRvIHRoZSBDbG9zdXJlXG4gKiBjb21waWxlci5cbiAqXG4gKiBJbXBsZW1lbnQgdGhpcyBhZGFwdGVyIGZvciB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UgdG8gZGVsZWdhdGUgdXBkYXRlcyB0b1xuICogdGhlIGNvbXBvbmVudCBpbiB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UuIFNlZSBhcmNoaXRlY3R1cmUgZG9jdW1lbnRhdGlvblxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvY29kZS9hcmNoaXRlY3R1cmUubWRcbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1JpcHBsZUFkYXB0ZXIge1xuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzVW5ib3VuZGVkKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNTdXJmYWNlQWN0aXZlKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNTdXJmYWNlRGlzYWJsZWQoKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7IUV2ZW50VGFyZ2V0fSB0YXJnZXQgKi9cbiAgY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlclJlc2l6ZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YXJOYW1lXG4gICAqIEBwYXJhbSB7P251bWJlcnxzdHJpbmd9IHZhbHVlXG4gICAqL1xuICB1cGRhdGVDc3NWYXJpYWJsZSh2YXJOYW1lLCB2YWx1ZSkge31cblxuICAvKiogQHJldHVybiB7IUNsaWVudFJlY3R9ICovXG4gIGNvbXB1dGVCb3VuZGluZ1JlY3QoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSAqL1xuICBnZXRXaW5kb3dQYWdlT2Zmc2V0KCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICAvLyBSaXBwbGUgaXMgYSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIFwicm9vdFwiIGNvbXBvbmVudCBpcyByZWFsbHkgYSBcIm1peGluXCIgb2Ygc29ydHMsXG4gIC8vIGdpdmVuIHRoYXQgaXQncyBhbiAndXBncmFkZScgdG8gYW4gZXhpc3RpbmcgY29tcG9uZW50LiBUaGF0IGJlaW5nIHNhaWQgaXQgaXMgdGhlIHJvb3RcbiAgLy8gQ1NTIGNsYXNzIHRoYXQgYWxsIG90aGVyIENTUyBjbGFzc2VzIGRlcml2ZSBmcm9tLlxuICBST09UOiAnbWRjLXJpcHBsZS11cGdyYWRlZCcsXG4gIFVOQk9VTkRFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZCcsXG4gIEJHX0ZPQ1VTRUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQnLFxuICBGR19BQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uJyxcbiAgRkdfREVBQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1kZWFjdGl2YXRpb24nLFxufTtcblxuY29uc3Qgc3RyaW5ncyA9IHtcbiAgVkFSX0xFRlQ6ICctLW1kYy1yaXBwbGUtbGVmdCcsXG4gIFZBUl9UT1A6ICctLW1kYy1yaXBwbGUtdG9wJyxcbiAgVkFSX0ZHX1NJWkU6ICctLW1kYy1yaXBwbGUtZmctc2l6ZScsXG4gIFZBUl9GR19TQ0FMRTogJy0tbWRjLXJpcHBsZS1mZy1zY2FsZScsXG4gIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0JyxcbiAgVkFSX0ZHX1RSQU5TTEFURV9FTkQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCcsXG59O1xuXG5jb25zdCBudW1iZXJzID0ge1xuICBQQURESU5HOiAxMCxcbiAgSU5JVElBTF9PUklHSU5fU0NBTEU6IDAuNixcbiAgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM6IDIyNSwgLy8gQ29ycmVzcG9uZHMgdG8gJG1kYy1yaXBwbGUtdHJhbnNsYXRlLWR1cmF0aW9uIChpLmUuIGFjdGl2YXRpb24gYW5pbWF0aW9uIGR1cmF0aW9uKVxuICBGR19ERUFDVElWQVRJT05fTVM6IDE1MCwgLy8gQ29ycmVzcG9uZHMgdG8gJG1kYy1yaXBwbGUtZmFkZS1vdXQtZHVyYXRpb24gKGkuZS4gZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgVEFQX0RFTEFZX01TOiAzMDAsIC8vIERlbGF5IGJldHdlZW4gdG91Y2ggYW5kIHNpbXVsYXRlZCBtb3VzZSBldmVudHMgb24gdG91Y2ggZGV2aWNlc1xufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3QgQ1NTIGN1c3RvbSB2YXJpYWJsZSBzdXBwb3J0LlxuICogQHByaXZhdGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5sZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBhcHBseVBhc3NpdmUgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzUGFzc2l2ZV87XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKSB7XG4gIC8vIERldGVjdCB2ZXJzaW9ucyBvZiBFZGdlIHdpdGggYnVnZ3kgdmFyKCkgc3VwcG9ydFxuICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzExNDk1NDQ4L1xuICBjb25zdCBkb2N1bWVudCA9IHdpbmRvd09iai5kb2N1bWVudDtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub2RlLmNsYXNzTmFtZSA9ICdtZGMtcmlwcGxlLXN1cmZhY2UtLXRlc3QtZWRnZS12YXItYnVnJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcblxuICAvLyBUaGUgYnVnIGV4aXN0cyBpZiA6OmJlZm9yZSBzdHlsZSBlbmRzIHVwIHByb3BhZ2F0aW5nIHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgLy8gQWRkaXRpb25hbGx5LCBnZXRDb21wdXRlZFN0eWxlIHJldHVybnMgbnVsbCBpbiBpZnJhbWVzIHdpdGggZGlzcGxheTogXCJub25lXCIgaW4gRmlyZWZveCxcbiAgLy8gYnV0IEZpcmVmb3ggaXMga25vd24gdG8gc3VwcG9ydCBDU1MgY3VzdG9tIHByb3BlcnRpZXMgY29ycmVjdGx5LlxuICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93T2JqLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIGNvbnN0IGhhc1BzZXVkb1ZhckJ1ZyA9IGNvbXB1dGVkU3R5bGUgIT09IG51bGwgJiYgY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BTdHlsZSA9PT0gJ3NvbGlkJztcbiAgbm9kZS5yZW1vdmUoKTtcbiAgcmV0dXJuIGhhc1BzZXVkb1ZhckJ1Zztcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFXaW5kb3d9IHdpbmRvd09ialxuICogQHBhcmFtIHtib29sZWFuPX0gZm9yY2VSZWZyZXNoXG4gKiBAcmV0dXJuIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3dPYmosIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGxldCBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgaWYgKHR5cGVvZiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPT09ICdib29sZWFuJyAmJiAhZm9yY2VSZWZyZXNoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xuICB9XG5cbiAgY29uc3Qgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSB3aW5kb3dPYmouQ1NTICYmIHR5cGVvZiB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzID09PSAnZnVuY3Rpb24nO1xuICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyA9IHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NDY2OVxuICAvLyBTZWU6IFJFQURNRSBzZWN0aW9uIG9uIFNhZmFyaVxuICBjb25zdCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMgPSAoXG4gICAgd2luZG93T2JqLkNTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpXG4gICk7XG5cbiAgaWYgKGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgfHwgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzKSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSAhZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopO1xuICB9IGVsc2Uge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gZmFsc2U7XG4gIH1cblxuICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xuICB9XG4gIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbn1cblxuLy9cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycywgYW5kIGlmIHNvLCB1c2UgdGhlbS5cbiAqIEBwYXJhbSB7IVdpbmRvdz19IGdsb2JhbE9ialxuICogQHBhcmFtIHtib29sZWFuPX0gZm9yY2VSZWZyZXNoXG4gKiBAcmV0dXJuIHtib29sZWFufCFFdmVudExpc3RlbmVyT3B0aW9uc31cbiAqL1xuZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiA9IHdpbmRvdywgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgaWYgKHN1cHBvcnRzUGFzc2l2ZV8gPT09IHVuZGVmaW5lZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgZ2xvYmFsT2JqLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCB7Z2V0IHBhc3NpdmUoKSB7XG4gICAgICAgIGlzU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkO1xuICAgICAgfX0pO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuXG4gICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkO1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZV9cbiAgICA/IC8qKiBAdHlwZSB7IUV2ZW50TGlzdGVuZXJPcHRpb25zfSAqLyAoe3Bhc3NpdmU6IHRydWV9KVxuICAgIDogZmFsc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHshT2JqZWN0fSBIVE1MRWxlbWVudFByb3RvdHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgLyoqXG4gICAqIE9yZGVyIGlzIGltcG9ydGFudCBiZWNhdXNlIHdlIHJldHVybiB0aGUgZmlyc3QgZXhpc3RpbmcgbWV0aG9kIHdlIGZpbmQuXG4gICAqIERvIG5vdCBjaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBpdGVtcyBpbiB0aGUgYmVsb3cgYXJyYXkuXG4gICAqL1xuICBjb25zdCBtYXRjaGVzTWV0aG9kcyA9IFsnbWF0Y2hlcycsICd3ZWJraXRNYXRjaGVzU2VsZWN0b3InLCAnbXNNYXRjaGVzU2VsZWN0b3InXTtcbiAgbGV0IG1ldGhvZCA9ICdtYXRjaGVzJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaGVzTWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1hdGNoZXNNZXRob2QgPSBtYXRjaGVzTWV0aG9kc1tpXTtcbiAgICBpZiAobWF0Y2hlc01ldGhvZCBpbiBIVE1MRWxlbWVudFByb3RvdHlwZSkge1xuICAgICAgbWV0aG9kID0gbWF0Y2hlc01ldGhvZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXRob2Q7XG59XG5cbi8qKlxuICogQHBhcmFtIHshRXZlbnR9IGV2XG4gKiBAcGFyYW0ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19IHBhZ2VPZmZzZXRcbiAqIEBwYXJhbSB7IUNsaWVudFJlY3R9IGNsaWVudFJlY3RcbiAqIEByZXR1cm4ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19XG4gKi9cbmZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhldiwgcGFnZU9mZnNldCwgY2xpZW50UmVjdCkge1xuICBjb25zdCB7eCwgeX0gPSBwYWdlT2Zmc2V0O1xuICBjb25zdCBkb2N1bWVudFggPSB4ICsgY2xpZW50UmVjdC5sZWZ0O1xuICBjb25zdCBkb2N1bWVudFkgPSB5ICsgY2xpZW50UmVjdC50b3A7XG5cbiAgbGV0IG5vcm1hbGl6ZWRYO1xuICBsZXQgbm9ybWFsaXplZFk7XG4gIC8vIERldGVybWluZSB0b3VjaCBwb2ludCByZWxhdGl2ZSB0byB0aGUgcmlwcGxlIGNvbnRhaW5lci5cbiAgaWYgKGV2LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgIGV2ID0gLyoqIEB0eXBlIHshVG91Y2hFdmVudH0gKi8gKGV2KTtcbiAgICBub3JtYWxpemVkWCA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSBkb2N1bWVudFk7XG4gIH0gZWxzZSB7XG4gICAgZXYgPSAvKiogQHR5cGUgeyFNb3VzZUV2ZW50fSAqLyAoZXYpO1xuICAgIG5vcm1hbGl6ZWRYID0gZXYucGFnZVggLSBkb2N1bWVudFg7XG4gICAgbm9ybWFsaXplZFkgPSBldi5wYWdlWSAtIGRvY3VtZW50WTtcbiAgfVxuXG4gIHJldHVybiB7eDogbm9ybWFsaXplZFgsIHk6IG5vcm1hbGl6ZWRZfTtcbn1cblxuZXhwb3J0IHtzdXBwb3J0c0Nzc1ZhcmlhYmxlcywgYXBwbHlQYXNzaXZlLCBnZXRNYXRjaGVzUHJvcGVydHksIGdldE5vcm1hbGl6ZWRFdmVudENvb3Jkc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDUmlwcGxlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge2dldE5vcm1hbGl6ZWRFdmVudENvb3Jkc30gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBpc0FjdGl2YXRlZDogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGFjdGl2YXRpb25FdmVudDogKCFFdmVudHx1bmRlZmluZWQpLFxuICogICBpc1Byb2dyYW1tYXRpYzogKGJvb2xlYW58dW5kZWZpbmVkKVxuICogfX1cbiAqL1xubGV0IEFjdGl2YXRpb25TdGF0ZVR5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZGVhY3RpdmF0ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBmb2N1czogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBibHVyOiAoc3RyaW5nfHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBMaXN0ZW5lckluZm9UeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiBmdW5jdGlvbighRXZlbnQpLFxuICogICBkZWFjdGl2YXRlOiBmdW5jdGlvbighRXZlbnQ9KSxcbiAqICAgZm9jdXM6IGZ1bmN0aW9uKCksXG4gKiAgIGJsdXI6IGZ1bmN0aW9uKClcbiAqIH19XG4gKi9cbmxldCBMaXN0ZW5lcnNUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIHg6IG51bWJlcixcbiAqICAgeTogbnVtYmVyXG4gKiB9fVxuICovXG5sZXQgUG9pbnRUeXBlO1xuXG4vLyBBY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIHRoZSByb290IGVsZW1lbnQgb2YgZWFjaCBpbnN0YW5jZSBmb3IgYWN0aXZhdGlvblxuY29uc3QgQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hzdGFydCcsICdwb2ludGVyZG93bicsICdtb3VzZWRvd24nLCAna2V5ZG93biddO1xuXG4vLyBEZWFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gZG9jdW1lbnRFbGVtZW50IHdoZW4gYSBwb2ludGVyLXJlbGF0ZWQgZG93biBldmVudCBvY2N1cnNcbmNvbnN0IFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gWyd0b3VjaGVuZCcsICdwb2ludGVydXAnLCAnbW91c2V1cCcsICdjb250ZXh0bWVudSddO1xuXG4vLyBUcmFja3MgYWN0aXZhdGlvbnMgdGhhdCBoYXZlIG9jY3VycmVkIG9uIHRoZSBjdXJyZW50IGZyYW1lLCB0byBhdm9pZCBzaW11bHRhbmVvdXMgbmVzdGVkIGFjdGl2YXRpb25zXG4vKiogQHR5cGUgeyFBcnJheTwhRXZlbnRUYXJnZXQ+fSAqL1xubGV0IGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDUmlwcGxlQWRhcHRlcj59XG4gKi9cbmNsYXNzIE1EQ1JpcHBsZUZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4gLyogYm9vbGVhbiAtIGNhY2hlZCAqLyB7fSxcbiAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBhZGRDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgY29udGFpbnNFdmVudFRhcmdldDogKC8qIHRhcmdldDogIUV2ZW50VGFyZ2V0ICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICgvKiB2YXJOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gLyogQ2xpZW50UmVjdCAqLyB7fSxcbiAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IC8qIHt4OiBudW1iZXIsIHk6IG51bWJlcn0gKi8ge30sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1JpcHBsZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUNsaWVudFJlY3R9ICovXG4gICAgdGhpcy5mcmFtZV8gPSAvKiogQHR5cGUgeyFDbGllbnRSZWN0fSAqLyAoe3dpZHRoOiAwLCBoZWlnaHQ6IDB9KTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5pbml0aWFsU2l6ZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50KX0gKi9cbiAgICB0aGlzLmFjdGl2YXRlSGFuZGxlcl8gPSAoZSkgPT4gdGhpcy5hY3RpdmF0ZV8oZSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudD0pfSAqL1xuICAgIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfID0gKCkgPT4gdGhpcy5kZWFjdGl2YXRlXygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmZvY3VzSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmhhbmRsZUZvY3VzKCk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudD0pfSAqL1xuICAgIHRoaXMuYmx1ckhhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVCbHVyKCk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXJfID0gKCkgPT4gdGhpcy5sYXlvdXQoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7e2xlZnQ6IG51bWJlciwgdG9wOm51bWJlcn19ICovXG4gICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICB9O1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5mZ1NjYWxlXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18gPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSB0cnVlO1xuICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICB9O1xuXG4gICAgLyoqIEBwcml2YXRlIHshRXZlbnR8dW5kZWZpbmVkfSAqL1xuICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICB9XG5cbiAgLyoqXG4gICAqIFdlIGNvbXB1dGUgdGhpcyBwcm9wZXJ0eSBzbyB0aGF0IHdlIGFyZSBub3QgcXVlcnlpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNsaWVudFxuICAgKiB1bnRpbCB0aGUgcG9pbnQgaW4gdGltZSB3aGVyZSB0aGUgZm91bmRhdGlvbiByZXF1ZXN0cyBpdC4gVGhpcyBwcmV2ZW50cyBzY2VuYXJpb3Mgd2hlcmVcbiAgICogY2xpZW50LXNpZGUgZmVhdHVyZS1kZXRlY3Rpb24gbWF5IGhhcHBlbiB0b28gZWFybHksIHN1Y2ggYXMgd2hlbiBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyXG4gICAqIGFuZCB0aGVuIGluaXRpYWxpemVkIGF0IG1vdW50IHRpbWUgb24gdGhlIGNsaWVudC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN1cHBvcnRzUHJlc3NSaXBwbGVfKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshQWN0aXZhdGlvblN0YXRlVHlwZX1cbiAgICovXG4gIGRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2YXRlZDogZmFsc2UsXG4gICAgICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogZmFsc2UsXG4gICAgICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IGZhbHNlLFxuICAgICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IGZhbHNlLFxuICAgICAgYWN0aXZhdGlvbkV2ZW50OiB1bmRlZmluZWQsXG4gICAgICBpc1Byb2dyYW1tYXRpYzogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBzdXBwb3J0c1ByZXNzUmlwcGxlID0gdGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpO1xuXG4gICAgdGhpcy5yZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSk7XG5cbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgY29uc3Qge1JPT1QsIFVOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFJPT1QpO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGVzIG5lZWQgbGF5b3V0IGxvZ2ljIGFwcGxpZWQgaW1tZWRpYXRlbHkgdG8gc2V0IGNvb3JkaW5hdGVzIGZvciBib3RoIHNoYWRlIGFuZCByaXBwbGVcbiAgICAgICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZhdGlvblRpbWVyXykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhST09UKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB0aGlzLnJlbW92ZUNzc1ZhcnNfKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCk7XG4gICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSBzdXBwb3J0c1ByZXNzUmlwcGxlIFBhc3NlZCBmcm9tIGluaXQgdG8gc2F2ZSBhIHJlZHVuZGFudCBmdW5jdGlvbiBjYWxsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhlKSB7XG4gICAgaWYgKGUudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCkge1xuICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICByZW1vdmVDc3NWYXJzXygpIHtcbiAgICBjb25zdCB7c3RyaW5nc30gPSBNRENSaXBwbGVGb3VuZGF0aW9uO1xuICAgIE9iamVjdC5rZXlzKHN0cmluZ3MpLmZvckVhY2goKGspID0+IHtcbiAgICAgIGlmIChrLmluZGV4T2YoJ1ZBUl8nKSA9PT0gMCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKHN0cmluZ3Nba10sIG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWN0aXZhdGVfKGUpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VEaXNhYmxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBdm9pZCByZWFjdGluZyB0byBmb2xsb3ctb24gZXZlbnRzIGZpcmVkIGJ5IHRvdWNoIGRldmljZSBhZnRlciBhbiBhbHJlYWR5LXByb2Nlc3NlZCB1c2VyIGludGVyYWN0aW9uXG4gICAgY29uc3QgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgPSB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgICBjb25zdCBpc1NhbWVJbnRlcmFjdGlvbiA9IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ICYmIGUgIT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c0FjdGl2YXRpb25FdmVudC50eXBlICE9PSBlLnR5cGU7XG4gICAgaWYgKGlzU2FtZUludGVyYWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPSBlID09PSB1bmRlZmluZWQ7XG4gICAgYWN0aXZhdGlvblN0YXRlLmFjdGl2YXRpb25FdmVudCA9IGU7XG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA/IGZhbHNlIDogZSAhPT0gdW5kZWZpbmVkICYmIChcbiAgICAgIGUudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAncG9pbnRlcmRvd24nXG4gICAgKTtcblxuICAgIGNvbnN0IGhhc0FjdGl2YXRlZENoaWxkID0gZSAhPT0gdW5kZWZpbmVkICYmIGFjdGl2YXRlZFRhcmdldHMubGVuZ3RoID4gMCAmJiBhY3RpdmF0ZWRUYXJnZXRzLnNvbWUoXG4gICAgICAodGFyZ2V0KSA9PiB0aGlzLmFkYXB0ZXJfLmNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSk7XG4gICAgaWYgKGhhc0FjdGl2YXRlZENoaWxkKSB7XG4gICAgICAvLyBJbW1lZGlhdGVseSByZXNldCBhY3RpdmF0aW9uIHN0YXRlLCB3aGlsZSBwcmVzZXJ2aW5nIGxvZ2ljIHRoYXQgcHJldmVudHMgdG91Y2ggZm9sbG93LW9uIGV2ZW50c1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhY3RpdmF0ZWRUYXJnZXRzLnB1c2goLyoqIEB0eXBlIHshRXZlbnRUYXJnZXR9ICovIChlLnRhcmdldCkpO1xuICAgICAgdGhpcy5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhlKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIC8vIFJlc2V0IGFycmF5IG9uIG5leHQgZnJhbWUgYWZ0ZXIgdGhlIGN1cnJlbnQgZXZlbnQgaGFzIGhhZCBhIGNoYW5jZSB0byBidWJibGUgdG8gcHJldmVudCBhbmNlc3RvciByaXBwbGVzXG4gICAgICBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbiAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlICYmIGUgIT09IHVuZGVmaW5lZCAmJiAoZS5rZXkgPT09ICcgJyB8fCBlLmtleUNvZGUgPT09IDMyKSkge1xuICAgICAgICAvLyBJZiBzcGFjZSB3YXMgcHJlc3NlZCwgdHJ5IGFnYWluIHdpdGhpbiBhbiByQUYgY2FsbCB0byBkZXRlY3QgOmFjdGl2ZSwgYmVjYXVzZSBkaWZmZXJlbnQgVUFzIHJlcG9ydFxuICAgICAgICAvLyBhY3RpdmUgc3RhdGVzIGluY29uc2lzdGVudGx5IHdoZW4gdGhleSdyZSBjYWxsZWQgd2l0aGluIGV2ZW50IGhhbmRsaW5nIGNvZGU6XG4gICAgICAgIC8vIC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjM1OTcxXG4gICAgICAgIC8vIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTI5Mzc0MVxuICAgICAgICAvLyBXZSB0cnkgZmlyc3Qgb3V0c2lkZSByQUYgdG8gc3VwcG9ydCBFZGdlLCB3aGljaCBkb2VzIG5vdCBleGhpYml0IHRoaXMgcHJvYmxlbSwgYnV0IHdpbGwgY3Jhc2ggaWYgYSBDU1NcbiAgICAgICAgLy8gdmFyaWFibGUgaXMgc2V0IHdpdGhpbiBhIHJBRiBjYWxsYmFjayBmb3IgYSBzdWJtaXQgYnV0dG9uIGludGVyYWN0aW9uICgjMjI0MSkuXG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgIC8vIFJlc2V0IGFjdGl2YXRpb24gc3RhdGUgaW1tZWRpYXRlbHkgaWYgZWxlbWVudCB3YXMgbm90IG1hZGUgYWN0aXZlLlxuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnQ9fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKSB7XG4gICAgcmV0dXJuIChlICE9PSB1bmRlZmluZWQgJiYgZS50eXBlID09PSAna2V5ZG93bicpID8gdGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VBY3RpdmUoKSA6IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnQ9fSBldmVudCBPcHRpb25hbCBldmVudCBjb250YWluaW5nIHBvc2l0aW9uIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgYWN0aXZhdGUoZXZlbnQpIHtcbiAgICB0aGlzLmFjdGl2YXRlXyhldmVudCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgYW5pbWF0ZUFjdGl2YXRpb25fKCkge1xuICAgIGNvbnN0IHtWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCBWQVJfRkdfVFJBTlNMQVRFX0VORH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG4gICAgY29uc3Qge0ZHX0RFQUNUSVZBVElPTiwgRkdfQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgY29uc3Qge0RFQUNUSVZBVElPTl9USU1FT1VUX01TfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycztcblxuICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG5cbiAgICBsZXQgdHJhbnNsYXRlU3RhcnQgPSAnJztcbiAgICBsZXQgdHJhbnNsYXRlRW5kID0gJyc7XG5cbiAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgY29uc3Qge3N0YXJ0UG9pbnQsIGVuZFBvaW50fSA9IHRoaXMuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpO1xuICAgICAgdHJhbnNsYXRlU3RhcnQgPSBgJHtzdGFydFBvaW50Lnh9cHgsICR7c3RhcnRQb2ludC55fXB4YDtcbiAgICAgIHRyYW5zbGF0ZUVuZCA9IGAke2VuZFBvaW50Lnh9cHgsICR7ZW5kUG9pbnQueX1weGA7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCB0cmFuc2xhdGVTdGFydCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX0VORCwgdHJhbnNsYXRlRW5kKTtcbiAgICAvLyBDYW5jZWwgYW55IG9uZ29pbmcgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5pbWF0aW9uc1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG5cbiAgICAvLyBGb3JjZSBsYXlvdXQgaW4gb3JkZXIgdG8gcmUtdHJpZ2dlciB0aGUgYW5pbWF0aW9uLlxuICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXygpLCBERUFDVElWQVRJT05fVElNRU9VVF9NUyk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHJldHVybiB7e3N0YXJ0UG9pbnQ6IFBvaW50VHlwZSwgZW5kUG9pbnQ6IFBvaW50VHlwZX19XG4gICAqL1xuICBnZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCkge1xuICAgIGNvbnN0IHthY3RpdmF0aW9uRXZlbnQsIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcn0gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG5cbiAgICBsZXQgc3RhcnRQb2ludDtcbiAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyKSB7XG4gICAgICBzdGFydFBvaW50ID0gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKFxuICAgICAgICAvKiogQHR5cGUgeyFFdmVudH0gKi8gKGFjdGl2YXRpb25FdmVudCksXG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZ2V0V2luZG93UGFnZU9mZnNldCgpLCB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgeDogdGhpcy5mcmFtZV8ud2lkdGggLyAyLFxuICAgICAgICB5OiB0aGlzLmZyYW1lXy5oZWlnaHQgLyAyLFxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gQ2VudGVyIHRoZSBlbGVtZW50IGFyb3VuZCB0aGUgc3RhcnQgcG9pbnQuXG4gICAgc3RhcnRQb2ludCA9IHtcbiAgICAgIHg6IHN0YXJ0UG9pbnQueCAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgeTogc3RhcnRQb2ludC55IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgfTtcblxuICAgIGNvbnN0IGVuZFBvaW50ID0ge1xuICAgICAgeDogKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6ICh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICByZXR1cm4ge3N0YXJ0UG9pbnQsIGVuZFBvaW50fTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKSB7XG4gICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJvdGggd2hlbiBhIHBvaW50aW5nIGRldmljZSBpcyByZWxlYXNlZCwgYW5kIHdoZW4gdGhlIGFjdGl2YXRpb24gYW5pbWF0aW9uIGVuZHMuXG4gICAgLy8gVGhlIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gc2hvdWxkIG9ubHkgcnVuIGFmdGVyIGJvdGggb2YgdGhvc2Ugb2NjdXIuXG4gICAgY29uc3Qge0ZHX0RFQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgY29uc3Qge2hhc0RlYWN0aXZhdGlvblVYUnVuLCBpc0FjdGl2YXRlZH0gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgY29uc3QgYWN0aXZhdGlvbkhhc0VuZGVkID0gaGFzRGVhY3RpdmF0aW9uVVhSdW4gfHwgIWlzQWN0aXZhdGVkO1xuXG4gICAgaWYgKGFjdGl2YXRpb25IYXNFbmRlZCAmJiB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8pIHtcbiAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICB9LCBudW1iZXJzLkZHX0RFQUNUSVZBVElPTl9NUyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpIHtcbiAgICBjb25zdCB7RkdfQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgfVxuXG4gIHJlc2V0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXy5hY3RpdmF0aW9uRXZlbnQ7XG4gICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgIC8vIFRvdWNoIGRldmljZXMgbWF5IGZpcmUgYWRkaXRpb25hbCBldmVudHMgZm9yIHRoZSBzYW1lIGludGVyYWN0aW9uIHdpdGhpbiBhIHNob3J0IHRpbWUuXG4gICAgLy8gU3RvcmUgdGhlIHByZXZpb3VzIGV2ZW50IHVudGlsIGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhhdCBzdWJzZXF1ZW50IGV2ZW50cyBhcmUgZm9yIG5ldyBpbnRlcmFjdGlvbnMuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHVuZGVmaW5lZCwgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlRBUF9ERUxBWV9NUyk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlYWN0aXZhdGVfKCkge1xuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gc2NlbmFyaW9zIHN1Y2ggYXMgd2hlbiB5b3UgaGF2ZSBhIGtleXVwIGV2ZW50IHRoYXQgYmx1cnMgdGhlIGVsZW1lbnQuXG4gICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZSA9IC8qKiBAdHlwZSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9ICovIChPYmplY3QuYXNzaWduKHt9LCBhY3RpdmF0aW9uU3RhdGUpKTtcblxuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKSk7XG4gICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXy5oYXNEZWFjdGl2YXRpb25VWFJ1biA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpO1xuICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmRlYWN0aXZhdGVfKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gb3B0aW9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYW5pbWF0ZURlYWN0aXZhdGlvbl8oe3dhc0FjdGl2YXRlZEJ5UG9pbnRlciwgd2FzRWxlbWVudE1hZGVBY3RpdmV9KSB7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlciB8fCB3YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICB9XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0RnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgbGF5b3V0SW50ZXJuYWxfKCkge1xuICAgIHRoaXMuZnJhbWVfID0gdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgY29uc3QgbWF4RGltID0gTWF0aC5tYXgodGhpcy5mcmFtZV8uaGVpZ2h0LCB0aGlzLmZyYW1lXy53aWR0aCk7XG5cbiAgICAvLyBTdXJmYWNlIGRpYW1ldGVyIGlzIHRyZWF0ZWQgZGlmZmVyZW50bHkgZm9yIHVuYm91bmRlZCB2cy4gYm91bmRlZCByaXBwbGVzLlxuICAgIC8vIFVuYm91bmRlZCByaXBwbGUgZGlhbWV0ZXIgaXMgY2FsY3VsYXRlZCBzbWFsbGVyIHNpbmNlIHRoZSBzdXJmYWNlIGlzIGV4cGVjdGVkIHRvIGFscmVhZHkgYmUgcGFkZGVkIGFwcHJvcHJpYXRlbHlcbiAgICAvLyB0byBleHRlbmQgdGhlIGhpdGJveCwgYW5kIHRoZSByaXBwbGUgaXMgZXhwZWN0ZWQgdG8gbWVldCB0aGUgZWRnZXMgb2YgdGhlIHBhZGRlZCBoaXRib3ggKHdoaWNoIGlzIHR5cGljYWxseVxuICAgIC8vIHNxdWFyZSkuIEJvdW5kZWQgcmlwcGxlcywgb24gdGhlIG90aGVyIGhhbmQsIGFyZSBmdWxseSBleHBlY3RlZCB0byBleHBhbmQgYmV5b25kIHRoZSBzdXJmYWNlJ3MgbG9uZ2VzdCBkaWFtZXRlclxuICAgIC8vIChjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBkaWFnb25hbCBwbHVzIGEgY29uc3RhbnQgcGFkZGluZyksIGFuZCBhcmUgY2xpcHBlZCBhdCB0aGUgc3VyZmFjZSdzIGJvcmRlciB2aWFcbiAgICAvLyBgb3ZlcmZsb3c6IGhpZGRlbmAuXG4gICAgY29uc3QgZ2V0Qm91bmRlZFJhZGl1cyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGh5cG90ZW51c2UgPSBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy5mcmFtZV8ud2lkdGgsIDIpICsgTWF0aC5wb3codGhpcy5mcmFtZV8uaGVpZ2h0LCAyKSk7XG4gICAgICByZXR1cm4gaHlwb3RlbnVzZSArIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5QQURESU5HO1xuICAgIH07XG5cbiAgICB0aGlzLm1heFJhZGl1c18gPSB0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkgPyBtYXhEaW0gOiBnZXRCb3VuZGVkUmFkaXVzKCk7XG5cbiAgICAvLyBSaXBwbGUgaXMgc2l6ZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgbGFyZ2VzdCBkaW1lbnNpb24gb2YgdGhlIHN1cmZhY2UsIHRoZW4gc2NhbGVzIHVwIHVzaW5nIGEgQ1NTIHNjYWxlIHRyYW5zZm9ybVxuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gTWF0aC5mbG9vcihtYXhEaW0gKiBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuSU5JVElBTF9PUklHSU5fU0NBTEUpO1xuICAgIHRoaXMuZmdTY2FsZV8gPSB0aGlzLm1heFJhZGl1c18gLyB0aGlzLmluaXRpYWxTaXplXztcblxuICAgIHRoaXMudXBkYXRlTGF5b3V0Q3NzVmFyc18oKTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICB1cGRhdGVMYXlvdXRDc3NWYXJzXygpIHtcbiAgICBjb25zdCB7XG4gICAgICBWQVJfRkdfU0laRSwgVkFSX0xFRlQsIFZBUl9UT1AsIFZBUl9GR19TQ0FMRSxcbiAgICB9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuXG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0laRSwgYCR7dGhpcy5pbml0aWFsU2l6ZV99cHhgKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TQ0FMRSwgdGhpcy5mZ1NjYWxlXyk7XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICAgIGxlZnQ6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgIHRvcDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9MRUZULCBgJHt0aGlzLnVuYm91bmRlZENvb3Jkc18ubGVmdH1weGApO1xuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfVE9QLCBgJHt0aGlzLnVuYm91bmRlZENvb3Jkc18udG9wfXB4YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdW5ib3VuZGVkICovXG4gIHNldFVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICBjb25zdCB7VU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBpZiAodW5ib3VuZGVkKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGb2N1cygpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpKTtcbiAgfVxuXG4gIGhhbmRsZUJsdXIoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgTURDUmlwcGxlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1JpcHBsZUZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBNRENDb21wb25lbnQ8IU1EQ1JpcHBsZUZvdW5kYXRpb24+XG4gKi9cbmNsYXNzIE1EQ1JpcHBsZSBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKiBAcGFyYW0gey4uLj99IGFyZ3MgKi9cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcGFyYW0ge3tpc1VuYm91bmRlZDogKGJvb2xlYW58dW5kZWZpbmVkKX09fSBvcHRpb25zXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGV9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCwge2lzVW5ib3VuZGVkID0gdW5kZWZpbmVkfSA9IHt9KSB7XG4gICAgY29uc3QgcmlwcGxlID0gbmV3IE1EQ1JpcHBsZShyb290KTtcbiAgICAvLyBPbmx5IG92ZXJyaWRlIHVuYm91bmRlZCBiZWhhdmlvciBpZiBvcHRpb24gaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcbiAgICBpZiAoaXNVbmJvdW5kZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmlwcGxlLnVuYm91bmRlZCA9IC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi8gKGlzVW5ib3VuZGVkKTtcbiAgICB9XG4gICAgcmV0dXJuIHJpcHBsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFSaXBwbGVDYXBhYmxlU3VyZmFjZX0gaW5zdGFuY2VcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlQWRhcHRlcihpbnN0YW5jZSkge1xuICAgIGNvbnN0IE1BVENIRVMgPSB1dGlsLmdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IHV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KSxcbiAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiBpbnN0YW5jZS51bmJvdW5kZWQsXG4gICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IGluc3RhbmNlLnJvb3RfW01BVENIRVNdKCc6YWN0aXZlJyksXG4gICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4gaW5zdGFuY2UuZGlzYWJsZWQsXG4gICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICh0YXJnZXQpID0+IGluc3RhbmNlLnJvb3RfLmNvbnRhaW5zKHRhcmdldCksXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgaW5zdGFuY2Uucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IChoYW5kbGVyKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKHZhck5hbWUsIHZhbHVlKSA9PiBpbnN0YW5jZS5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSksXG4gICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiBpbnN0YW5jZS5yb290Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+ICh7eDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXR9KSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGdldCB1bmJvdW5kZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5ib3VuZGVkXztcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXQgdW5ib3VuZGVkKHVuYm91bmRlZCkge1xuICAgIHRoaXMudW5ib3VuZGVkXyA9IEJvb2xlYW4odW5ib3VuZGVkKTtcbiAgICB0aGlzLnNldFVuYm91bmRlZF8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zdXJlIENvbXBpbGVyIHRocm93cyBhbiBhY2Nlc3MgY29udHJvbCBlcnJvciB3aGVuIGRpcmVjdGx5IGFjY2Vzc2luZyBhXG4gICAqIHByb3RlY3RlZCBvciBwcml2YXRlIHByb3BlcnR5IGluc2lkZSBhIGdldHRlci9zZXR0ZXIsIGxpa2UgdW5ib3VuZGVkIGFib3ZlLlxuICAgKiBCeSBhY2Nlc3NpbmcgdGhlIHByb3RlY3RlZCBwcm9wZXJ0eSBpbnNpZGUgYSBtZXRob2QsIHdlIHNvbHZlIHRoYXQgcHJvYmxlbS5cbiAgICogVGhhdCdzIHdoeSB0aGlzIGZ1bmN0aW9uIGV4aXN0cy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFVuYm91bmRlZF8oKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVbmJvdW5kZWQodGhpcy51bmJvdW5kZWRfKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZWFjdGl2YXRlKCk7XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5sYXlvdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlRm91bmRhdGlvbn1cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIodGhpcykpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgdGhpcy51bmJvdW5kZWQgPSAnbWRjUmlwcGxlSXNVbmJvdW5kZWQnIGluIHRoaXMucm9vdF8uZGF0YXNldDtcbiAgfVxufVxuXG4vKipcbiAqIFNlZSBNYXRlcmlhbCBEZXNpZ24gc3BlYyBmb3IgbW9yZSBkZXRhaWxzIG9uIHdoZW4gdG8gdXNlIHJpcHBsZXMuXG4gKiBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvbW90aW9uL2Nob3Jlb2dyYXBoeS5odG1sI2Nob3Jlb2dyYXBoeS1jcmVhdGlvblxuICogQHJlY29yZFxuICovXG5jbGFzcyBSaXBwbGVDYXBhYmxlU3VyZmFjZSB7fVxuXG4vKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUucm9vdF87XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHJpcHBsZSBibGVlZHMgb3V0IG9mIHRoZSBib3VuZHMgb2YgdGhlIGVsZW1lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS51bmJvdW5kZWQ7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHJpcHBsZSBpcyBhdHRhY2hlZCB0byBhIGRpc2FibGVkIGNvbXBvbmVudC5cbiAqIEB0eXBlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLmRpc2FibGVkO1xuXG5leHBvcnQge01EQ1JpcHBsZSwgTURDUmlwcGxlRm91bmRhdGlvbiwgUmlwcGxlQ2FwYWJsZVN1cmZhY2UsIHV0aWx9O1xuIiwiaW1wb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvaW5kZXgnXG5pbXBvcnQge1xuICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyxcbiAgZ2V0TWF0Y2hlc1Byb3BlcnR5LFxuICBhcHBseVBhc3NpdmVcbn0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS91dGlsJ1xuXG5leHBvcnQgY2xhc3MgUmlwcGxlQmFzZSBleHRlbmRzIE1EQ1JpcHBsZUZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IE1BVENIRVMoKSB7XG4gICAgLyogZ2xvYmFsIEhUTUxFbGVtZW50ICovXG4gICAgcmV0dXJuIChcbiAgICAgIFJpcHBsZUJhc2UuX21hdGNoZXMgfHxcbiAgICAgIChSaXBwbGVCYXNlLl9tYXRjaGVzID0gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSkpXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGlzU3VyZmFjZUFjdGl2ZShyZWYpIHtcbiAgICByZXR1cm4gcmVmW1JpcHBsZUJhc2UuTUFUQ0hFU10oJzphY3RpdmUnKVxuICB9XG5cbiAgY29uc3RydWN0b3Iodm0sIG9wdGlvbnMpIHtcbiAgICBzdXBlcihcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uJGVsW1JpcHBsZUJhc2UuTUFUQ0hFU10oJzphY3RpdmUnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS5kaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2bS4kc2V0KHZtLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJGRlbGV0ZSh2bS5jbGFzc2VzLCBjbGFzc05hbWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiB0YXJnZXQgPT4gdm0uJGVsLmNvbnRhaW5zKHRhcmdldCksXG4gICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHZtLiRlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5zdHlsZXMsIHZhck5hbWUsIHZhbHVlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgUmlwcGxlTWl4aW4gPSB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5yaXBwbGUuZGVzdHJveSgpXG4gIH1cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGN1c3RvbS1lbGVtZW50IFxuICAgIDp0YWc9XCJ0YWdcIiBcbiAgICA6Y2xhc3Nlcz1cImNsYXNzZXNcIlxuICAgIDpzdHlsZXM9XCJzdHlsZXNcIiBcbiAgICBjbGFzcz1cIm1kYy1yaXBwbGVcIj5cbiAgICA8c2xvdCAvPlxuICA8L2N1c3RvbS1lbGVtZW50PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnRNaXhpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgeyBSaXBwbGVNaXhpbiB9IGZyb20gJy4vbWRjLXJpcHBsZS1iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtcmlwcGxlJyxcbiAgbWl4aW5zOiBbQ3VzdG9tRWxlbWVudE1peGluLCBSaXBwbGVNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgdGFnOiBTdHJpbmdcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoY29tcGlsZWRUZW1wbGF0ZSwgaW5qZWN0U3R5bGUsIGRlZmF1bHRFeHBvcnQsIHNjb3BlSWQsIGlzRnVuY3Rpb25hbFRlbXBsYXRlLCBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovLCBpc1NoYWRvd01vZGUsIGNyZWF0ZUluamVjdG9yLCBjcmVhdGVJbmplY3RvclNTUiwgY3JlYXRlSW5qZWN0b3JTaGFkb3cpIHtcbiAgICBpZiAodHlwZW9mIGlzU2hhZG93TW9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjcmVhdGVJbmplY3RvclNTUiA9IGNyZWF0ZUluamVjdG9yO1xuICAgICAgICBjcmVhdGVJbmplY3RvciA9IGlzU2hhZG93TW9kZTtcbiAgICAgICAgaXNTaGFkb3dNb2RlID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgICBjb25zdCBvcHRpb25zID0gdHlwZW9mIGRlZmF1bHRFeHBvcnQgPT09ICdmdW5jdGlvbicgPyBkZWZhdWx0RXhwb3J0Lm9wdGlvbnMgOiBkZWZhdWx0RXhwb3J0O1xuICAgIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgICBpZiAoY29tcGlsZWRUZW1wbGF0ZSAmJiBjb21waWxlZFRlbXBsYXRlLnJlbmRlcikge1xuICAgICAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyO1xuICAgICAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zO1xuICAgICAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWU7XG4gICAgICAgIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgICAgICAgaWYgKGlzRnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNjb3BlZElkXG4gICAgaWYgKHNjb3BlSWQpIHtcbiAgICAgICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWQ7XG4gICAgfVxuICAgIGxldCBob29rO1xuICAgIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7XG4gICAgICAgIC8vIHNlcnZlciBidWlsZFxuICAgICAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgICAgICAgIGNvbnRleHQgPVxuICAgICAgICAgICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpOyAvLyBmdW5jdGlvbmFsXG4gICAgICAgICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgICAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfXztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICAgICAgICBpZiAoaW5qZWN0U3R5bGUpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yU1NSKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJlbmNlXG4gICAgICAgICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAgICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICAgICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmplY3RTdHlsZSkge1xuICAgICAgICBob29rID0gaXNTaGFkb3dNb2RlXG4gICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yU2hhZG93KHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGluamVjdFN0eWxlLmNhbGwodGhpcywgY3JlYXRlSW5qZWN0b3IoY29udGV4dCkpO1xuICAgICAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGhvb2spIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyO1xuICAgICAgICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24oaCwgY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGhvb2suY2FsbChjb250ZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGU7XG4gICAgICAgICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKSA6IFtob29rXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdEV4cG9ydDtcbn1cbiIsIjx0ZW1wbGF0ZT5cclxuICA8Y3VzdG9tLWxpbmtcclxuICAgIDpjbGFzcz1cImNsYXNzZXNcIlxyXG4gICAgOnN0eWxlPVwic3R5bGVzXCJcclxuICAgIDpsaW5rPVwibGlua1wiXHJcbiAgICBjbGFzcz1cIm1kYy10YWJcIlxyXG4gICAgQGNsaWNrPVwiaGFuZGxlQ2xpY2tcIlxyXG4gICAgcm9sZT1cInRhYlwiXHJcbiAgICBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIlxyXG4gICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgPlxyXG4gICAgPHNwYW4gcmVmPVwiY29udGVudFwiIGNsYXNzPVwibWRjLXRhYl9fY29udGVudFwiPlxyXG4gICAgICA8aVxyXG4gICAgICAgIHYtaWY9XCIhIWhhc0ljb25cIlxyXG4gICAgICAgIHJlZj1cImljb25cIlxyXG4gICAgICAgIDpjbGFzcz1cImhhc0ljb24uY2xhc3Nlc1wiXHJcbiAgICAgICAgdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICBjbGFzcz1cIm1kYy10YWJfX2ljb25cIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8c2xvdCBuYW1lPVwiaWNvblwiPnt7IGhhc0ljb24uY29udGVudCB9fTwvc2xvdD5cclxuICAgICAgPC9pPlxyXG5cclxuICAgICAgPHNwYW4gdi1pZj1cImhhc1RleHRcIiBjbGFzcz1cIm1kYy10YWJfX3RleHQtbGFiZWxcIj4gPHNsb3QgLz4gPC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG5cclxuICAgIDxtZGMtdGFiLWluZGljYXRvciByZWY9XCJ0YWJJbmRpY2F0b3JcIj48L21kYy10YWItaW5kaWNhdG9yPlxyXG4gICAgPG1kYy10YWItcmlwcGxlPjwvbWRjLXRhYi1yaXBwbGU+XHJcbiAgPC9jdXN0b20tbGluaz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBNRENUYWJGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC90YWIvZm91bmRhdGlvbidcclxuaW1wb3J0IHtcclxuICBDdXN0b21MaW5rTWl4aW4sXHJcbiAgRGlzcGF0Y2hFdmVudE1peGluLFxyXG4gIGVtaXRDdXN0b21FdmVudCxcclxuICBleHRyYWN0SWNvblByb3BcclxufSBmcm9tICcuLi9iYXNlJ1xyXG5pbXBvcnQgeyBSaXBwbGVCYXNlIH0gZnJvbSAnLi4vcmlwcGxlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdtZGMtdGFiJyxcclxuICBtaXhpbnM6IFtDdXN0b21MaW5rTWl4aW4sIERpc3BhdGNoRXZlbnRNaXhpbl0sXHJcbiAgcHJvcHM6IHtcclxuICAgIGFjdGl2ZTogQm9vbGVhbixcclxuICAgIGljb246IFtTdHJpbmcsIEFycmF5LCBPYmplY3RdLFxyXG4gICAgc3RhY2tlZDogQm9vbGVhbixcclxuICAgIG1pbldpZHRoOiBCb29sZWFuXHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2xhc3Nlczoge1xyXG4gICAgICAgICdtZGMtdGFiLS1zdGFja2VkJzogdGhpcy5zdGFja2VkLFxyXG4gICAgICAgICdtZGMtdGFiLS1taW4td2lkdGgnOiB0aGlzLm1pbldpZHRoXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0eWxlczoge31cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBpbmplY3Q6IFsnbWRjVGFiQmFyJ10sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGhhc0ljb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLmljb24gfHwgdGhpcy4kc2xvdHMuaWNvbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmljb24gPyBleHRyYWN0SWNvblByb3AodGhpcy5pY29uKSA6IHt9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9LFxyXG4gICAgaGFzVGV4dCgpIHtcclxuICAgICAgcmV0dXJuICEhdGhpcy4kc2xvdHMuZGVmYXVsdFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGFjdGl2ZSh2YWx1ZSkge31cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDVGFiRm91bmRhdGlvbih7XHJcbiAgICAgIHNldEF0dHI6IChhdHRyLCB2YWx1ZSkgPT4gdGhpcy4kZWwuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKSxcclxuICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpLFxyXG4gICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGRlbGV0ZSh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSksXHJcbiAgICAgIGhhc0NsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXHJcbiAgICAgIGFjdGl2YXRlSW5kaWNhdG9yOiBwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QgPT4ge1xyXG4gICAgICAgIHRoaXMuJHJlZnMudGFiSW5kaWNhdG9yLmFjdGl2YXRlKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdClcclxuICAgICAgfSxcclxuICAgICAgZGVhY3RpdmF0ZUluZGljYXRvcjogKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuJHJlZnMudGFiSW5kaWNhdG9yLmRlYWN0aXZhdGUoKVxyXG4gICAgICB9LFxyXG4gICAgICBub3RpZnlJbnRlcmFjdGVkOiAoKSA9PlxyXG4gICAgICAgIGVtaXRDdXN0b21FdmVudChcclxuICAgICAgICAgIHRoaXMuJGVsLFxyXG4gICAgICAgICAgTURDVGFiRm91bmRhdGlvbi5zdHJpbmdzLklOVEVSQUNURURfRVZFTlQsXHJcbiAgICAgICAgICB7IHRhYjogdGhpcyB9LFxyXG4gICAgICAgICAgdHJ1ZSAvKiBidWJibGUgKi9cclxuICAgICAgICApLFxyXG4gICAgICBnZXRPZmZzZXRMZWZ0OiAoKSA9PiB0aGlzLiRlbC5vZmZzZXRMZWZ0LFxyXG4gICAgICBnZXRPZmZzZXRXaWR0aDogKCkgPT4gdGhpcy4kZWwub2Zmc2V0V2lkdGgsXHJcbiAgICAgIGdldENvbnRlbnRPZmZzZXRMZWZ0OiAoKSA9PiB0aGlzLiRyZWZzLmNvbnRlbnQub2Zmc2V0TGVmdCxcclxuICAgICAgZ2V0Q29udGVudE9mZnNldFdpZHRoOiAoKSA9PiB0aGlzLiRyZWZzLmNvbnRlbnQub2Zmc2V0V2lkdGgsXHJcbiAgICAgIGZvY3VzOiAoKSA9PiB0aGlzLiRlbC5mb2N1cygpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCd0YWIgbW91bnRlZCcpXHJcblxyXG4gICAgdGhpcy5tZGNUYWJCYXIudGFiTGlzdC5wdXNoKHRoaXMpXHJcblxyXG4gICAgLy8gdGhpcy5zZXRBY3RpdmUodGhpcy5hY3RpdmUpXHJcbiAgfSxcclxuICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYWN0aXZhdGUoY29tcHV0ZUluZGljYXRvckNsaWVudFJlY3QpIHtcclxuICAgICAgdGhpcy5mb3VuZGF0aW9uLmFjdGl2YXRlKGNvbXB1dGVJbmRpY2F0b3JDbGllbnRSZWN0KVxyXG4gICAgfSxcclxuXHJcbiAgICBkZWFjdGl2YXRlKCkge1xyXG4gICAgICB0aGlzLmZvdW5kYXRpb24uZGVhY3RpdmF0ZSgpXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlQ2xpY2soZXZ0KSB7XHJcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVDbGljayhldnQpXHJcbiAgICB9LFxyXG4gICAgaXNBY3RpdmUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb24uaXNBY3RpdmUoKVxyXG4gICAgfSxcclxuICAgIHNldEFjdGl2ZShpc0FjdGl2ZSkge1xyXG4gICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCAnbWRjLXRhYi0tYWN0aXZlJywgdHJ1ZSksXHJcbiAgICAgICAgICB0aGlzLiRyZWZzLnRhYkluZGljYXRvci5hY3RpdmF0ZSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlSW5kaWNhdG9yQ2xpZW50UmVjdCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuJHJlZnMudGFiSW5kaWNhdG9yLmNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpXHJcbiAgICB9LFxyXG5cclxuICAgIGNvbXB1dGVEaW1lbnNpb25zKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uLmNvbXB1dGVEaW1lbnNpb25zKClcclxuICAgIH0sXHJcblxyXG4gICAgZm9jdXMoKSB7XHJcbiAgICAgIHRoaXMuJGVsLmZvY3VzKClcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFRBQl9BQ1RJVkFURURfRVZFTlQ6ICdNRENUYWJCYXI6YWN0aXZhdGVkJyxcbiAgVEFCX1NDUk9MTEVSX1NFTEVDVE9SOiAnLm1kYy10YWItc2Nyb2xsZXInLFxuICBUQUJfU0VMRUNUT1I6ICcubWRjLXRhYicsXG4gIEFSUk9XX0xFRlRfS0VZOiAnQXJyb3dMZWZ0JyxcbiAgQVJST1dfUklHSFRfS0VZOiAnQXJyb3dSaWdodCcsXG4gIEVORF9LRVk6ICdFbmQnLFxuICBIT01FX0tFWTogJ0hvbWUnLFxuICBFTlRFUl9LRVk6ICdFbnRlcicsXG4gIFNQQUNFX0tFWTogJ1NwYWNlJyxcbn07XG5cbi8qKiBAZW51bSB7bnVtYmVyfSAqL1xuY29uc3QgbnVtYmVycyA9IHtcbiAgRVhUUkFfU0NST0xMX0FNT1VOVDogMjAsXG4gIEFSUk9XX0xFRlRfS0VZQ09ERTogMzcsXG4gIEFSUk9XX1JJR0hUX0tFWUNPREU6IDM5LFxuICBFTkRfS0VZQ09ERTogMzUsXG4gIEhPTUVfS0VZQ09ERTogMzYsXG4gIEVOVEVSX0tFWUNPREU6IDEzLFxuICBTUEFDRV9LRVlDT0RFOiAzMixcbn07XG5cbmV4cG9ydCB7XG4gIG51bWJlcnMsXG4gIHN0cmluZ3MsXG59O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtNRENUYWJEaW1lbnNpb25zfSBmcm9tICdAbWF0ZXJpYWwvdGFiL2FkYXB0ZXInO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBUYWIgQmFyLlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIFRhYiBCYXIgaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1RhYkJhckFkYXB0ZXIge1xuICAvKipcbiAgICogU2Nyb2xscyB0byB0aGUgZ2l2ZW4gcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFggVGhlIHBvc2l0aW9uIHRvIHNjcm9sbCB0b1xuICAgKi9cbiAgc2Nyb2xsVG8oc2Nyb2xsWCkge31cblxuICAvKipcbiAgICogSW5jcmVtZW50cyB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gYnkgdGhlIGdpdmVuIGFtb3VudFxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWEluY3JlbWVudCBUaGUgYW1vdW50IHRvIGluY3JlbWVudCBzY3JvbGxcbiAgICovXG4gIGluY3JlbWVudFNjcm9sbChzY3JvbGxYSW5jcmVtZW50KSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRTY3JvbGxQb3NpdGlvbigpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHdpZHRoIG9mIHRoZSBzY3JvbGwgY29udGVudFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRTY3JvbGxDb250ZW50V2lkdGgoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByb290IGVsZW1lbnQncyBvZmZzZXRXaWR0aFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRPZmZzZXRXaWR0aCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgdGhlIFRhYiBCYXIgbGFuZ3VhZ2UgZGlyZWN0aW9uIGlzIFJUTFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNSVEwoKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4IHRvIGJlIGFjdGl2YXRlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWIgdG8gYWN0aXZhdGVcbiAgICovXG4gIHNldEFjdGl2ZVRhYihpbmRleCkge31cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4IHdpdGggdGhlIGdpdmVuIGNsaWVudCByZWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYiB0byBhY3RpdmF0ZVxuICAgKiBAcGFyYW0geyFDbGllbnRSZWN0fSBjbGllbnRSZWN0IFRoZSBjbGllbnQgcmVjdCBvZiB0aGUgcHJldmlvdXNseSBhY3RpdmUgVGFiIEluZGljYXRvclxuICAgKi9cbiAgYWN0aXZhdGVUYWJBdEluZGV4KGluZGV4LCBjbGllbnRSZWN0KSB7fVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWIgdG8gZGVhY3RpdmF0ZVxuICAgKi9cbiAgZGVhY3RpdmF0ZVRhYkF0SW5kZXgoaW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIEZvY3VzZXMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiIHRvIGZvY3VzXG4gICAqL1xuICBmb2N1c1RhYkF0SW5kZXgoaW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNsaWVudCByZWN0IG9mIHRoZSB0YWIncyBpbmRpY2F0b3JcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiXG4gICAqIEByZXR1cm4geyFDbGllbnRSZWN0fVxuICAgKi9cbiAgZ2V0VGFiSW5kaWNhdG9yQ2xpZW50UmVjdEF0SW5kZXgoaW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHRhYiBkaW1lbnNpb25zIG9mIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYlxuICAgKiBAcmV0dXJuIHshTURDVGFiRGltZW5zaW9uc31cbiAgICovXG4gIGdldFRhYkRpbWVuc2lvbnNBdEluZGV4KGluZGV4KSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIHRhYiBsaXN0XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFRhYkxpc3RMZW5ndGgoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgcHJldmlvdXNseSBhY3RpdmUgdGFiXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFByZXZpb3VzQWN0aXZlVGFiSW5kZXgoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZm9jdXNlZCB0YWJcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0Rm9jdXNlZFRhYkluZGV4KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGdpdmVuIHRhYlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIElEIG9mIHRoZSB0YWIgd2hvc2UgaW5kZXggdG8gZGV0ZXJtaW5lXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldEluZGV4T2ZUYWJCeUlkKGlkKSB7fVxuXG4gIC8qKlxuICAgKiBFbWl0cyB0aGUgTURDVGFiQmFyOmFjdGl2YXRlZCBldmVudFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBhY3RpdmF0ZWQgdGFiXG4gICAqL1xuICBub3RpZnlUYWJBY3RpdmF0ZWQoaW5kZXgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYkJhckFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5cbmltcG9ydCB7c3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IE1EQ1RhYkJhckFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGFiRGltZW5zaW9uc30gZnJvbSAnQG1hdGVyaWFsL3RhYi9hZGFwdGVyJztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBAdHlwZSB7U2V0PHN0cmluZz59XG4gKi9cbmNvbnN0IEFDQ0VQVEFCTEVfS0VZUyA9IG5ldyBTZXQoKTtcbi8vIElFMTEgaGFzIG5vIHN1cHBvcnQgZm9yIG5ldyBTZXQgd2l0aCBpdGVyYWJsZSBzbyB3ZSBuZWVkIHRvIGluaXRpYWxpemUgdGhpcyBieSBoYW5kXG5BQ0NFUFRBQkxFX0tFWVMuYWRkKHN0cmluZ3MuQVJST1dfTEVGVF9LRVkpO1xuQUNDRVBUQUJMRV9LRVlTLmFkZChzdHJpbmdzLkFSUk9XX1JJR0hUX0tFWSk7XG5BQ0NFUFRBQkxFX0tFWVMuYWRkKHN0cmluZ3MuRU5EX0tFWSk7XG5BQ0NFUFRBQkxFX0tFWVMuYWRkKHN0cmluZ3MuSE9NRV9LRVkpO1xuQUNDRVBUQUJMRV9LRVlTLmFkZChzdHJpbmdzLkVOVEVSX0tFWSk7XG5BQ0NFUFRBQkxFX0tFWVMuYWRkKHN0cmluZ3MuU1BBQ0VfS0VZKTtcblxuLyoqXG4gKiBAdHlwZSB7TWFwPG51bWJlciwgc3RyaW5nPn1cbiAqL1xuY29uc3QgS0VZQ09ERV9NQVAgPSBuZXcgTWFwKCk7XG4vLyBJRTExIGhhcyBubyBzdXBwb3J0IGZvciBuZXcgTWFwIHdpdGggaXRlcmFibGUgc28gd2UgbmVlZCB0byBpbml0aWFsaXplIHRoaXMgYnkgaGFuZFxuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuQVJST1dfTEVGVF9LRVlDT0RFLCBzdHJpbmdzLkFSUk9XX0xFRlRfS0VZKTtcbktFWUNPREVfTUFQLnNldChudW1iZXJzLkFSUk9XX1JJR0hUX0tFWUNPREUsIHN0cmluZ3MuQVJST1dfUklHSFRfS0VZKTtcbktFWUNPREVfTUFQLnNldChudW1iZXJzLkVORF9LRVlDT0RFLCBzdHJpbmdzLkVORF9LRVkpO1xuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuSE9NRV9LRVlDT0RFLCBzdHJpbmdzLkhPTUVfS0VZKTtcbktFWUNPREVfTUFQLnNldChudW1iZXJzLkVOVEVSX0tFWUNPREUsIHN0cmluZ3MuRU5URVJfS0VZKTtcbktFWUNPREVfTUFQLnNldChudW1iZXJzLlNQQUNFX0tFWUNPREUsIHN0cmluZ3MuU1BBQ0VfS0VZKTtcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDVGFiQmFyQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGFiQmFyRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge251bWJlcn0gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzZWUgTURDVGFiQmFyQWRhcHRlciBmb3IgdHlwaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4geyFNRENUYWJCYXJBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiQmFyQWRhcHRlcn0gKi8gKHtcbiAgICAgIHNjcm9sbFRvOiAoKSA9PiB7fSxcbiAgICAgIGluY3JlbWVudFNjcm9sbDogKCkgPT4ge30sXG4gICAgICBnZXRTY3JvbGxQb3NpdGlvbjogKCkgPT4ge30sXG4gICAgICBnZXRTY3JvbGxDb250ZW50V2lkdGg6ICgpID0+IHt9LFxuICAgICAgZ2V0T2Zmc2V0V2lkdGg6ICgpID0+IHt9LFxuICAgICAgaXNSVEw6ICgpID0+IHt9LFxuICAgICAgc2V0QWN0aXZlVGFiOiAoKSA9PiB7fSxcbiAgICAgIGFjdGl2YXRlVGFiQXRJbmRleDogKCkgPT4ge30sXG4gICAgICBkZWFjdGl2YXRlVGFiQXRJbmRleDogKCkgPT4ge30sXG4gICAgICBmb2N1c1RhYkF0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgZ2V0VGFiSW5kaWNhdG9yQ2xpZW50UmVjdEF0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgZ2V0UHJldmlvdXNBY3RpdmVUYWJJbmRleDogKCkgPT4ge30sXG4gICAgICBnZXRGb2N1c2VkVGFiSW5kZXg6ICgpID0+IHt9LFxuICAgICAgZ2V0SW5kZXhPZlRhYkJ5SWQ6ICgpID0+IHt9LFxuICAgICAgZ2V0VGFiTGlzdExlbmd0aDogKCkgPT4ge30sXG4gICAgICBub3RpZnlUYWJBY3RpdmF0ZWQ6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ1RhYkJhckFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICogKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDVGFiQmFyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMudXNlQXV0b21hdGljQWN0aXZhdGlvbl8gPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTd2l0Y2hlcyBiZXR3ZWVuIGF1dG9tYXRpYyBhbmQgbWFudWFsIGFjdGl2YXRpb24gbW9kZXMuXG4gICAqIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzLyN0YWJwYW5lbCBmb3IgZXhhbXBsZXMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQXV0b21hdGljQWN0aXZhdGlvblxuICAgKi9cbiAgc2V0VXNlQXV0b21hdGljQWN0aXZhdGlvbih1c2VBdXRvbWF0aWNBY3RpdmF0aW9uKSB7XG4gICAgdGhpcy51c2VBdXRvbWF0aWNBY3RpdmF0aW9uXyA9IHVzZUF1dG9tYXRpY0FjdGl2YXRpb247XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKi9cbiAgYWN0aXZhdGVUYWIoaW5kZXgpIHtcbiAgICBjb25zdCBwcmV2aW91c0FjdGl2ZUluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRQcmV2aW91c0FjdGl2ZVRhYkluZGV4KCk7XG4gICAgaWYgKCF0aGlzLmluZGV4SXNJblJhbmdlXyhpbmRleCkgfHwgaW5kZXggPT09IHByZXZpb3VzQWN0aXZlSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLmRlYWN0aXZhdGVUYWJBdEluZGV4KHByZXZpb3VzQWN0aXZlSW5kZXgpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWN0aXZhdGVUYWJBdEluZGV4KGluZGV4LCB0aGlzLmFkYXB0ZXJfLmdldFRhYkluZGljYXRvckNsaWVudFJlY3RBdEluZGV4KHByZXZpb3VzQWN0aXZlSW5kZXgpKTtcbiAgICB0aGlzLnNjcm9sbEludG9WaWV3KGluZGV4KTtcblxuICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5VGFiQWN0aXZhdGVkKGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBrZXlkb3duIGV2ZW50XG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZUtleURvd24oZXZ0KSB7XG4gICAgLy8gR2V0IHRoZSBrZXkgZnJvbSB0aGUgZXZlbnRcbiAgICBjb25zdCBrZXkgPSB0aGlzLmdldEtleUZyb21FdmVudF8oZXZ0KTtcblxuICAgIC8vIEVhcmx5IGV4aXQgaWYgdGhlIGV2ZW50IGtleSBpc24ndCBvbmUgb2YgdGhlIGtleWJvYXJkIG5hdmlnYXRpb24ga2V5c1xuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgZGVmYXVsdCBiZWhhdmlvciBmb3IgbW92ZW1lbnQga2V5cywgYnV0IG5vdCBmb3IgYWN0aXZhdGlvbiBrZXlzLCBzaW5jZSA6YWN0aXZlIGlzIHVzZWQgdG8gYXBwbHkgcmlwcGxlXG4gICAgaWYgKCF0aGlzLmlzQWN0aXZhdGlvbktleV8oa2V5KSkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudXNlQXV0b21hdGljQWN0aXZhdGlvbl8pIHtcbiAgICAgIGlmICh0aGlzLmlzQWN0aXZhdGlvbktleV8oa2V5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kZXRlcm1pbmVUYXJnZXRGcm9tS2V5Xyh0aGlzLmFkYXB0ZXJfLmdldFByZXZpb3VzQWN0aXZlVGFiSW5kZXgoKSwga2V5KTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QWN0aXZlVGFiKGluZGV4KTtcbiAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmb2N1c2VkVGFiSW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldEZvY3VzZWRUYWJJbmRleCgpO1xuICAgICAgaWYgKHRoaXMuaXNBY3RpdmF0aW9uS2V5XyhrZXkpKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QWN0aXZlVGFiKGZvY3VzZWRUYWJJbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGV0ZXJtaW5lVGFyZ2V0RnJvbUtleV8oZm9jdXNlZFRhYkluZGV4LCBrZXkpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzVGFiQXRJbmRleChpbmRleCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBNRENUYWI6aW50ZXJhY3RlZCBldmVudFxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqL1xuICBoYW5kbGVUYWJJbnRlcmFjdGlvbihldnQpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEFjdGl2ZVRhYih0aGlzLmFkYXB0ZXJfLmdldEluZGV4T2ZUYWJCeUlkKGV2dC5kZXRhaWwudGFiSWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4IGludG8gdmlld1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIHRhYiBpbmRleCB0byBtYWtlIHZpc2libGVcbiAgICovXG4gIHNjcm9sbEludG9WaWV3KGluZGV4KSB7XG4gICAgLy8gRWFybHkgZXhpdCBpZiB0aGUgaW5kZXggaXMgb3V0IG9mIHJhbmdlXG4gICAgaWYgKCF0aGlzLmluZGV4SXNJblJhbmdlXyhpbmRleCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBbHdheXMgc2Nyb2xsIHRvIDAgaWYgc2Nyb2xsaW5nIHRvIHRoZSAwdGggaW5kZXhcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLnNjcm9sbFRvKDApO1xuICAgIH1cblxuICAgIC8vIEFsd2F5cyBzY3JvbGwgdG8gdGhlIG1heCB2YWx1ZSBpZiBzY3JvbGxpbmcgdG8gdGhlIE50aCBpbmRleFxuICAgIC8vIE1EQ1RhYlNjcm9sbGVyLnNjcm9sbFRvKCkgd2lsbCBuZXZlciBzY3JvbGwgcGFzdCB0aGUgbWF4IHBvc3NpYmxlIHZhbHVlXG4gICAgaWYgKGluZGV4ID09PSB0aGlzLmFkYXB0ZXJfLmdldFRhYkxpc3RMZW5ndGgoKSAtIDEpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLnNjcm9sbFRvKHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudFdpZHRoKCkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxJbnRvVmlld1JUTF8oaW5kZXgpO1xuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXdfKGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcml2YXRlIG1ldGhvZCBmb3IgZGV0ZXJtaW5pbmcgdGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiB0YWIgYmFzZWQgb24gd2hhdCBrZXkgd2FzIHByZXNzZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9yaWdpbiBUaGUgb3JpZ2luYWwgaW5kZXggZnJvbSB3aGljaCB0byBkZXRlcm1pbmUgdGhlIGRlc3RpbmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIG5hbWUgb2YgdGhlIGtleVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZXRlcm1pbmVUYXJnZXRGcm9tS2V5XyhvcmlnaW4sIGtleSkge1xuICAgIGNvbnN0IGlzUlRMID0gdGhpcy5pc1JUTF8oKTtcbiAgICBjb25zdCBtYXhJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiTGlzdExlbmd0aCgpIC0gMTtcbiAgICBjb25zdCBzaG91bGRHb1RvRW5kID0ga2V5ID09PSBzdHJpbmdzLkVORF9LRVk7XG4gICAgY29uc3Qgc2hvdWxkRGVjcmVtZW50ID0ga2V5ID09PSBzdHJpbmdzLkFSUk9XX0xFRlRfS0VZICYmICFpc1JUTCB8fCBrZXkgPT09IHN0cmluZ3MuQVJST1dfUklHSFRfS0VZICYmIGlzUlRMO1xuICAgIGNvbnN0IHNob3VsZEluY3JlbWVudCA9IGtleSA9PT0gc3RyaW5ncy5BUlJPV19SSUdIVF9LRVkgJiYgIWlzUlRMIHx8IGtleSA9PT0gc3RyaW5ncy5BUlJPV19MRUZUX0tFWSAmJiBpc1JUTDtcbiAgICBsZXQgaW5kZXggPSBvcmlnaW47XG5cbiAgICBpZiAoc2hvdWxkR29Ub0VuZCkge1xuICAgICAgaW5kZXggPSBtYXhJbmRleDtcbiAgICB9IGVsc2UgaWYgKHNob3VsZERlY3JlbWVudCkge1xuICAgICAgaW5kZXggLT0gMTtcbiAgICB9IGVsc2UgaWYgKHNob3VsZEluY3JlbWVudCkge1xuICAgICAgaW5kZXggKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXggPSAwO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGluZGV4ID0gbWF4SW5kZXg7XG4gICAgfSBlbHNlIGlmIChpbmRleCA+IG1heEluZGV4KSB7XG4gICAgICBpbmRleCA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIHNjcm9sbCBpbmNyZW1lbnQgdGhhdCB3aWxsIG1ha2UgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggdmlzaWJsZVxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5leHRJbmRleCBUaGUgaW5kZXggb2YgdGhlIG5leHQgdGFiXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxQb3NpdGlvbiBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGJhcldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgVGFiIEJhclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWxjdWxhdGVTY3JvbGxJbmNyZW1lbnRfKGluZGV4LCBuZXh0SW5kZXgsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCkge1xuICAgIGNvbnN0IG5leHRUYWJEaW1lbnNpb25zID0gdGhpcy5hZGFwdGVyXy5nZXRUYWJEaW1lbnNpb25zQXRJbmRleChuZXh0SW5kZXgpO1xuICAgIGNvbnN0IHJlbGF0aXZlQ29udGVudExlZnQgPSBuZXh0VGFiRGltZW5zaW9ucy5jb250ZW50TGVmdCAtIHNjcm9sbFBvc2l0aW9uIC0gYmFyV2lkdGg7XG4gICAgY29uc3QgcmVsYXRpdmVDb250ZW50UmlnaHQgPSBuZXh0VGFiRGltZW5zaW9ucy5jb250ZW50UmlnaHQgLSBzY3JvbGxQb3NpdGlvbjtcbiAgICBjb25zdCBsZWZ0SW5jcmVtZW50ID0gcmVsYXRpdmVDb250ZW50UmlnaHQgLSBudW1iZXJzLkVYVFJBX1NDUk9MTF9BTU9VTlQ7XG4gICAgY29uc3QgcmlnaHRJbmNyZW1lbnQgPSByZWxhdGl2ZUNvbnRlbnRMZWZ0ICsgbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuXG4gICAgaWYgKG5leHRJbmRleCA8IGluZGV4KSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4obGVmdEluY3JlbWVudCwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgubWF4KHJpZ2h0SW5jcmVtZW50LCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBzY3JvbGwgaW5jcmVtZW50IHRoYXQgd2lsbCBtYWtlIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4IHZpc2libGUgaW4gUlRMXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYlxuICAgKiBAcGFyYW0ge251bWJlcn0gbmV4dEluZGV4IFRoZSBpbmRleCBvZiB0aGUgbmV4dCB0YWJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFBvc2l0aW9uIFRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gYmFyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSBUYWIgQmFyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxDb250ZW50V2lkdGggVGhlIHdpZHRoIG9mIHRoZSBzY3JvbGwgY29udGVudFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWxjdWxhdGVTY3JvbGxJbmNyZW1lbnRSVExfKGluZGV4LCBuZXh0SW5kZXgsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCwgc2Nyb2xsQ29udGVudFdpZHRoKSB7XG4gICAgY29uc3QgbmV4dFRhYkRpbWVuc2lvbnMgPSB0aGlzLmFkYXB0ZXJfLmdldFRhYkRpbWVuc2lvbnNBdEluZGV4KG5leHRJbmRleCk7XG4gICAgY29uc3QgcmVsYXRpdmVDb250ZW50TGVmdCA9IHNjcm9sbENvbnRlbnRXaWR0aCAtIG5leHRUYWJEaW1lbnNpb25zLmNvbnRlbnRMZWZ0IC0gc2Nyb2xsUG9zaXRpb247XG4gICAgY29uc3QgcmVsYXRpdmVDb250ZW50UmlnaHQgPSBzY3JvbGxDb250ZW50V2lkdGggLSBuZXh0VGFiRGltZW5zaW9ucy5jb250ZW50UmlnaHQgLSBzY3JvbGxQb3NpdGlvbiAtIGJhcldpZHRoO1xuICAgIGNvbnN0IGxlZnRJbmNyZW1lbnQgPSByZWxhdGl2ZUNvbnRlbnRSaWdodCArIG51bWJlcnMuRVhUUkFfU0NST0xMX0FNT1VOVDtcbiAgICBjb25zdCByaWdodEluY3JlbWVudCA9IHJlbGF0aXZlQ29udGVudExlZnQgLSBudW1iZXJzLkVYVFJBX1NDUk9MTF9BTU9VTlQ7XG5cbiAgICBpZiAobmV4dEluZGV4ID4gaW5kZXgpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heChsZWZ0SW5jcmVtZW50LCAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5taW4ocmlnaHRJbmNyZW1lbnQsIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIGluZGV4IG9mIHRoZSBhZGphY2VudCB0YWIgY2xvc2VzdCB0byBlaXRoZXIgZWRnZSBvZiB0aGUgVGFiIEJhclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICogQHBhcmFtIHshTURDVGFiRGltZW5zaW9uc30gdGFiRGltZW5zaW9ucyBUaGUgZGltZW5zaW9ucyBvZiB0aGUgdGFiXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxQb3NpdGlvbiBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGJhcldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgdGFiIGJhclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmaW5kQWRqYWNlbnRUYWJJbmRleENsb3Nlc3RUb0VkZ2VfKGluZGV4LCB0YWJEaW1lbnNpb25zLCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgpIHtcbiAgICAvKipcbiAgICAgKiBUYWJzIGFyZSBsYWlkIG91dCBpbiB0aGUgVGFiIFNjcm9sbGVyIGxpa2UgdGhpczpcbiAgICAgKlxuICAgICAqICAgIFNjcm9sbCBQb3NpdGlvblxuICAgICAqICAgICstLS0rXG4gICAgICogICAgfCAgIHwgICBCYXIgV2lkdGhcbiAgICAgKiAgICB8ICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICAgICAqICAgIHwgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgICogICAgfCAgIFYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZcbiAgICAgKiAgICB8ICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICAgICAqICAgIFYgICB8ICAgICAgICAgICAgIFRhYiBTY3JvbGxlciAgICAgICAgICB8XG4gICAgICogICAgKy0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tK1xuICAgICAqICAgIHwgICAgVGFiICAgICB8ICAgICAgVGFiICAgICB8ICAgICAgICBUYWIgICAgICAgIHxcbiAgICAgKiAgICArLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICogICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAgKiAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICAgICAqXG4gICAgICogVG8gZGV0ZXJtaW5lIHRoZSBuZXh0IGFkamFjZW50IGluZGV4LCB3ZSBsb29rIGF0IHRoZSBUYWIgcm9vdCBsZWZ0IGFuZFxuICAgICAqIFRhYiByb290IHJpZ2h0LCBib3RoIHJlbGF0aXZlIHRvIHRoZSBzY3JvbGwgcG9zaXRpb24uIElmIHRoZSBUYWIgcm9vdFxuICAgICAqIGxlZnQgaXMgbGVzcyB0aGFuIDAsIHRoZW4gd2Uga25vdyBpdCdzIG91dCBvZiB2aWV3IHRvIHRoZSBsZWZ0LiBJZiB0aGVcbiAgICAgKiBUYWIgcm9vdCByaWdodCBtaW51cyB0aGUgYmFyIHdpZHRoIGlzIGdyZWF0ZXIgdGhhbiAwLCB3ZSBrbm93IHRoZSBUYWIgaXNcbiAgICAgKiBvdXQgb2YgdmlldyB0byB0aGUgcmlnaHQuIEZyb20gdGhlcmUsIHdlIGVpdGhlciBpbmNyZW1lbnQgb3IgZGVjcmVtZW50XG4gICAgICogdGhlIGluZGV4LlxuICAgICAqL1xuICAgIGNvbnN0IHJlbGF0aXZlUm9vdExlZnQgPSB0YWJEaW1lbnNpb25zLnJvb3RMZWZ0IC0gc2Nyb2xsUG9zaXRpb247XG4gICAgY29uc3QgcmVsYXRpdmVSb290UmlnaHQgPSB0YWJEaW1lbnNpb25zLnJvb3RSaWdodCAtIHNjcm9sbFBvc2l0aW9uIC0gYmFyV2lkdGg7XG4gICAgY29uc3QgcmVsYXRpdmVSb290RGVsdGEgPSByZWxhdGl2ZVJvb3RMZWZ0ICsgcmVsYXRpdmVSb290UmlnaHQ7XG4gICAgY29uc3QgbGVmdEVkZ2VJc0Nsb3NlciA9IHJlbGF0aXZlUm9vdExlZnQgPCAwIHx8IHJlbGF0aXZlUm9vdERlbHRhIDwgMDtcbiAgICBjb25zdCByaWdodEVkZ2VJc0Nsb3NlciA9IHJlbGF0aXZlUm9vdFJpZ2h0ID4gMCB8fCByZWxhdGl2ZVJvb3REZWx0YSA+IDA7XG5cbiAgICBpZiAobGVmdEVkZ2VJc0Nsb3Nlcikge1xuICAgICAgcmV0dXJuIGluZGV4IC0gMTtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRFZGdlSXNDbG9zZXIpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIGluZGV4IG9mIHRoZSBhZGphY2VudCB0YWIgY2xvc2VzdCB0byBlaXRoZXIgZWRnZSBvZiB0aGUgVGFiIEJhciBpbiBSVExcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiXG4gICAqIEBwYXJhbSB7IU1EQ1RhYkRpbWVuc2lvbnN9IHRhYkRpbWVuc2lvbnMgVGhlIGRpbWVuc2lvbnMgb2YgdGhlIHRhYlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsUG9zaXRpb24gVGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBiYXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIHRhYiBiYXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbENvbnRlbnRXaWR0aCBUaGUgd2lkdGggb2YgdGhlIHNjcm9sbGVyIGNvbnRlbnRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZmluZEFkamFjZW50VGFiSW5kZXhDbG9zZXN0VG9FZGdlUlRMXyhpbmRleCwgdGFiRGltZW5zaW9ucywgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoLCBzY3JvbGxDb250ZW50V2lkdGgpIHtcbiAgICBjb25zdCByb290TGVmdCA9IHNjcm9sbENvbnRlbnRXaWR0aCAtIHRhYkRpbWVuc2lvbnMucm9vdExlZnQgLSBiYXJXaWR0aCAtIHNjcm9sbFBvc2l0aW9uO1xuICAgIGNvbnN0IHJvb3RSaWdodCA9IHNjcm9sbENvbnRlbnRXaWR0aCAtIHRhYkRpbWVuc2lvbnMucm9vdFJpZ2h0IC0gc2Nyb2xsUG9zaXRpb247XG4gICAgY29uc3Qgcm9vdERlbHRhID0gcm9vdExlZnQgKyByb290UmlnaHQ7XG4gICAgY29uc3QgbGVmdEVkZ2VJc0Nsb3NlciA9IHJvb3RMZWZ0ID4gMCB8fCByb290RGVsdGEgPiAwO1xuICAgIGNvbnN0IHJpZ2h0RWRnZUlzQ2xvc2VyID0gcm9vdFJpZ2h0IDwgMCB8fCByb290RGVsdGEgPCAwO1xuXG4gICAgaWYgKGxlZnRFZGdlSXNDbG9zZXIpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0RWRnZUlzQ2xvc2VyKSB7XG4gICAgICByZXR1cm4gaW5kZXggLSAxO1xuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBrZXkgYXNzb2NpYXRlZCB3aXRoIGEga2V5ZG93biBldmVudFxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0IFRoZSBrZXlkb3duIGV2ZW50XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEtleUZyb21FdmVudF8oZXZ0KSB7XG4gICAgaWYgKEFDQ0VQVEFCTEVfS0VZUy5oYXMoZXZ0LmtleSkpIHtcbiAgICAgIHJldHVybiBldnQua2V5O1xuICAgIH1cblxuICAgIHJldHVybiBLRVlDT0RFX01BUC5nZXQoZXZ0LmtleUNvZGUpO1xuICB9XG5cbiAgaXNBY3RpdmF0aW9uS2V5XyhrZXkpIHtcbiAgICByZXR1cm4ga2V5ID09PSBzdHJpbmdzLlNQQUNFX0tFWSB8fCBrZXkgPT09IHN0cmluZ3MuRU5URVJfS0VZO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBhIGdpdmVuIGluZGV4IGlzIGluY2x1c2l2ZWx5IGJldHdlZW4gdGhlIGVuZHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB0byB0ZXN0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbmRleElzSW5SYW5nZV8oaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuYWRhcHRlcl8uZ2V0VGFiTGlzdExlbmd0aCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZpZXcncyBSVEwgcHJvcGVydHlcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzUlRMXygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5pc1JUTCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbHMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggaW50byB2aWV3IGZvciBsZWZ0LXRvLXJpZ2h0IHVzZXJhZ2VudHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiIHRvIHNjcm9sbCBpbnRvIHZpZXdcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNjcm9sbEludG9WaWV3XyhpbmRleCkge1xuICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgIGNvbnN0IGJhcldpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRPZmZzZXRXaWR0aCgpO1xuICAgIGNvbnN0IHRhYkRpbWVuc2lvbnMgPSB0aGlzLmFkYXB0ZXJfLmdldFRhYkRpbWVuc2lvbnNBdEluZGV4KGluZGV4KTtcbiAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLmZpbmRBZGphY2VudFRhYkluZGV4Q2xvc2VzdFRvRWRnZV8oaW5kZXgsIHRhYkRpbWVuc2lvbnMsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCk7XG5cbiAgICBpZiAoIXRoaXMuaW5kZXhJc0luUmFuZ2VfKG5leHRJbmRleCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxJbmNyZW1lbnQgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEluY3JlbWVudF8oaW5kZXgsIG5leHRJbmRleCwgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmluY3JlbWVudFNjcm9sbChzY3JvbGxJbmNyZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbHMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggaW50byB2aWV3IGluIFJUTFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIHRhYiBpbmRleCB0byBtYWtlIHZpc2libGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNjcm9sbEludG9WaWV3UlRMXyhpbmRleCkge1xuICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgIGNvbnN0IGJhcldpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRPZmZzZXRXaWR0aCgpO1xuICAgIGNvbnN0IHRhYkRpbWVuc2lvbnMgPSB0aGlzLmFkYXB0ZXJfLmdldFRhYkRpbWVuc2lvbnNBdEluZGV4KGluZGV4KTtcbiAgICBjb25zdCBzY3JvbGxXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudFdpZHRoKCk7XG4gICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5maW5kQWRqYWNlbnRUYWJJbmRleENsb3Nlc3RUb0VkZ2VSVExfKFxuICAgICAgaW5kZXgsIHRhYkRpbWVuc2lvbnMsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCwgc2Nyb2xsV2lkdGgpO1xuXG4gICAgaWYgKCF0aGlzLmluZGV4SXNJblJhbmdlXyhuZXh0SW5kZXgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsSW5jcmVtZW50ID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxJbmNyZW1lbnRSVExfKGluZGV4LCBuZXh0SW5kZXgsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCwgc2Nyb2xsV2lkdGgpO1xuICAgIHRoaXMuYWRhcHRlcl8uaW5jcmVtZW50U2Nyb2xsKHNjcm9sbEluY3JlbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGFiQmFyRm91bmRhdGlvbjtcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiA6Y2xhc3M9XCJjbGFzc2VzXCIgY2xhc3M9XCJtZGMtdGFiLWJhclwiIHYtb249XCJsaXN0ZW5lcnNcIiByb2xlPVwidGFibGlzdFwiPlxuICAgIDxtZGMtdGFiLXNjcm9sbGVyIHJlZj1cInNjcm9sbGVyXCI+IDxzbG90Pjwvc2xvdD4gPC9tZGMtdGFiLXNjcm9sbGVyPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTURDVGFiQmFyRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvdGFiLWJhci9mb3VuZGF0aW9uJ1xuaW1wb3J0IHsgZW1pdEN1c3RvbUV2ZW50IH0gZnJvbSAnLi4vYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRhYi1iYXInLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIGluZGljYXRvclN0eWxlczoge30sXG4gICAgICB0YWJMaXN0OiBbXVxuICAgIH1cbiAgfSxcbiAgcHJvcHM6IHsgYWN0aXZlVGFiSW5kZXg6IFtOdW1iZXIsIFN0cmluZ10gfSxcbiAgcHJvdmlkZSgpIHtcbiAgICByZXR1cm4geyBtZGNUYWJCYXI6IHRoaXMgfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ1RhYkJhckZvdW5kYXRpb24oe1xuICAgICAgc2Nyb2xsVG86IHNjcm9sbFggPT4gdGhpcy4kcmVmcy5zY3JvbGxlci5zY3JvbGxUbyhzY3JvbGxYKSxcbiAgICAgIGluY3JlbWVudFNjcm9sbDogc2Nyb2xsWEluY3JlbWVudCA9PlxuICAgICAgICB0aGlzLiRyZWZzLnNjcm9sbGVyLmluY3JlbWVudFNjcm9sbChzY3JvbGxYSW5jcmVtZW50KSxcbiAgICAgIGdldFNjcm9sbFBvc2l0aW9uOiAoKSA9PiB0aGlzLiRyZWZzLnNjcm9sbGVyLmdldFNjcm9sbFBvc2l0aW9uKCksXG4gICAgICBnZXRTY3JvbGxDb250ZW50V2lkdGg6ICgpID0+IHRoaXMuJHJlZnMuc2Nyb2xsZXIuZ2V0U2Nyb2xsQ29udGVudFdpZHRoKCksXG4gICAgICBnZXRPZmZzZXRXaWR0aDogKCkgPT4gdGhpcy4kZWwub2Zmc2V0V2lkdGgsXG4gICAgICBpc1JUTDogKCkgPT5cbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy4kZWwpLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpID09PVxuICAgICAgICAncnRsJyxcbiAgICAgIHNldEFjdGl2ZVRhYjogaW5kZXggPT4ge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uYWN0aXZhdGVUYWIoaW5kZXgpXG4gICAgICB9LFxuICAgICAgYWN0aXZhdGVUYWJBdEluZGV4OiAoaW5kZXgsIGNsaWVudFJlY3QpID0+IHtcbiAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS5hY3RpdmF0ZShjbGllbnRSZWN0KVxuICAgICAgfSxcbiAgICAgIGRlYWN0aXZhdGVUYWJBdEluZGV4OiBpbmRleCA9PiB7XG4gICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0gJiYgdGhpcy50YWJMaXN0W2luZGV4XS5kZWFjdGl2YXRlKClcbiAgICAgIH0sXG4gICAgICBmb2N1c1RhYkF0SW5kZXg6IGluZGV4ID0+IHRoaXMudGFiTGlzdFtpbmRleF0uZm9jdXMoKSxcbiAgICAgIGdldFRhYkluZGljYXRvckNsaWVudFJlY3RBdEluZGV4OiBpbmRleCA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XSAmJlxuICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0uY29tcHV0ZUluZGljYXRvckNsaWVudFJlY3QoKVxuICAgICAgICApXG4gICAgICB9LFxuICAgICAgZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXg6IGluZGV4ID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFiTGlzdFtpbmRleF0uY29tcHV0ZURpbWVuc2lvbnMoKVxuICAgICAgfSxcbiAgICAgIGdldFByZXZpb3VzQWN0aXZlVGFiSW5kZXg6ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGhpcy50YWJMaXN0W2ldLmlzQWN0aXZlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfSxcbiAgICAgIGdldEZvY3VzZWRUYWJJbmRleDogKCkgPT4ge1xuICAgICAgICBjb25zdCB0YWJFbGVtZW50cyA9IHRoaXMuZ2V0VGFiRWxlbWVudHNfKClcbiAgICAgICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgICAgcmV0dXJuIHRhYkVsZW1lbnRzLmluZGV4T2YoYWN0aXZlRWxlbWVudClcbiAgICAgIH0sXG4gICAgICBnZXRJbmRleE9mVGFiOiB0YWJUb0ZpbmQgPT4gdGhpcy50YWJMaXN0LmluZGV4T2YodGFiVG9GaW5kKSxcbiAgICAgIGdldFRhYkxpc3RMZW5ndGg6ICgpID0+IHRoaXMudGFiTGlzdC5sZW5ndGgsXG4gICAgICBub3RpZnlUYWJBY3RpdmF0ZWQ6IGluZGV4ID0+IHtcbiAgICAgICAgZW1pdEN1c3RvbUV2ZW50KFxuICAgICAgICAgIHRoaXMuJGVsLFxuICAgICAgICAgIE1EQ1RhYkJhckZvdW5kYXRpb24uc3RyaW5ncy5UQUJfQUNUSVZBVEVEX0VWRU5ULFxuICAgICAgICAgIHsgaW5kZXggfSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgIClcblxuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcbiAgICAvLyBlbnN1cmUgYWN0aXZlIHRhYlxuICAgIHRoaXMuZm91bmRhdGlvbi5hY3RpdmF0ZVRhYih0aGlzLmFjdGl2ZVRhYkluZGV4IHx8IDApXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpc3RlbmVycygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMuJGxpc3RlbmVycyxcbiAgICAgICAgJ01EQ1RhYjppbnRlcmFjdGVkJzogZXZlbnQgPT4gdGhpcy5oYW5kbGVJbnRlcmFjdGlvbihldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVJbnRlcmFjdGlvbihldnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVUYWJJbnRlcmFjdGlvbihldnQpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIEFOSU1BVElORzogJ21kYy10YWItc2Nyb2xsZXItLWFuaW1hdGluZycsXG4gIFNDUk9MTF9URVNUOiAnbWRjLXRhYi1zY3JvbGxlcl9fdGVzdCcsXG4gIFNDUk9MTF9BUkVBX1NDUk9MTDogJ21kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhLS1zY3JvbGwnLFxufTtcblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBzdHJpbmdzID0ge1xuICBBUkVBX1NFTEVDVE9SOiAnLm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhJyxcbiAgQ09OVEVOVF9TRUxFQ1RPUjogJy5tZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtY29udGVudCcsXG59O1xuXG5leHBvcnQge1xuICBjc3NDbGFzc2VzLFxuICBzdHJpbmdzLFxufTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBNRENUYWJTY3JvbGxlckFuaW1hdGlvbiBjb250YWlucyB0aGUgdmFsdWVzIHJlcXVpcmVkIGZvciBhbmltYXRpbmcgZnJvbSB0aGVcbiAqIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHRvIHRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uLiBUaGUgXCJmaW5hbFNjcm9sbFBvc2l0aW9uXCJcbiAqIHZhbHVlIHJlcHJlc2VudHMgdGhlIG5ldyBzY3JvbGwgcG9zaXRpb24gd2hpbGUgdGhlIFwic2Nyb2xsRGVsdGFcIiB2YWx1ZSBpcyB0aGVcbiAqIGNvcnJlc3BvbmRpbmcgdHJhbnNmb3JtYXRpb24gdGhhdCBpcyBhcHBsaWVkIHRvIHRoZSBzY3JvbGwgY29udGVudC4gVG9nZXRoZXIsXG4gKiB0aGV5IGNyZWF0ZSB0aGUgYW5pbWF0aW9uIGJ5IGZpcnN0IHVwZGF0aW5nIHRoZSBzY3JvbGwgdmFsdWUgdGhlbiBhcHBseWluZ1xuICogdGhlIHRyYW5zZm9ybWF0aW9uIGFuZCBhbmltYXRpbmcgdGhlIHRyYW5zaXRpb24uIEJvdGggcGllY2VzIGFyZSBuZWNlc3NhcnlcbiAqIGZvciB0aGUgc2Nyb2xsIGFuaW1hdGlvbiB0byB3b3JrLiBUaGUgdmFsdWVzIGFyZSB1c2VkIGFzLWlzIGJ5IHRoZSB0YWJcbiAqIHNjcm9sbGVyIGFuaW1hdGlvbiBtZXRob2QsIGVuc3VyaW5nIHRoYXQgYWxsIGxvZ2ljIGZvciBkZXRlcm1pbmluZyBzY3JvbGxcbiAqIHBvc2l0aW9uIG9yIHRyYW5zZm9ybWF0aW9uIGlzIGFic3RyYWN0ZWQgYXdheSBmcm9tIHRoZSBhbmltYXRpb24gbWV0aG9kLlxuICogQHR5cGVkZWYge3tmaW5hbFNjcm9sbFBvc2l0aW9uOiBudW1iZXIsIHNjcm9sbERlbHRhOiBudW1iZXJ9fVxuICovXG5sZXQgTURDVGFiU2Nyb2xsZXJBbmltYXRpb247XG5cbi8qKlxuICogTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXMgcmVwcmVzZW50cyB0aGUgbGVmdCBhbmQgcmlnaHQgZWRnZXMgb2YgdGhlXG4gKiBzY3JvbGwgY29udGVudC4gVGhlc2UgdmFsdWVzIHZhcnkgZGVwZW5kaW5nIG9uIGhvdyBzY3JvbGxpbmcgaW4gUlRMIGlzXG4gKiBpbXBsZW1lbnRlZCBieSB0aGUgYnJvd3Nlci4gT25lIHZhbHVlIGlzIGFsd2F5cyAwIGFuZCBvbmUgdmFsdWUgaXMgYWx3YXlzXG4gKiB0aGUgbWF4IHNjcm9sbGFibGUgdmFsdWUgYXMgZWl0aGVyIGEgcG9zaXRpdmUgb3IgbmVnYXRpdmUgaW50ZWdlci5cbiAqIEB0eXBlZGVmIHt7bGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyfX1cbiAqL1xubGV0IE1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzO1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBUYWIgU2Nyb2xsZXIuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGFiICBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDVGFiU2Nyb2xsZXJBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIGNsYXNzTmFtZSB0byB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzc05hbWUgdG8gYWRkXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGdpdmVuIGNsYXNzTmFtZSBmcm9tIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzTmFtZSB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogQWRkcyB0aGUgZ2l2ZW4gY2xhc3NOYW1lIHRvIHRoZSBzY3JvbGwgYXJlYSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzc05hbWUgdG8gYWRkXG4gICAqL1xuICBhZGRTY3JvbGxBcmVhQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGV2ZW50IHRhcmdldCBtYXRjaGVzIGdpdmVuIGNsYXNzTmFtZS5cbiAgICogQHBhcmFtIHtFdmVudFRhcmdldH0gZXZ0VGFyZ2V0IFRoZSBldmVudCB0YXJnZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIFRoZSBzZWxlY3RvciB0byBjaGVja1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXZlbnRUYXJnZXRNYXRjaGVzU2VsZWN0b3IoZXZ0VGFyZ2V0LCBzZWxlY3Rvcikge31cblxuICAvKipcbiAgICogU2V0cyBhIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBhcmVhIGVsZW1lbnQgdG8gdGhlIHBhc3NlZCB2YWx1ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BOYW1lIFRoZSBzdHlsZSBwcm9wZXJ0eSBuYW1lIHRvIHNldFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIHN0eWxlIHByb3BlcnR5IHZhbHVlXG4gICAqL1xuICBzZXRTY3JvbGxBcmVhU3R5bGVQcm9wZXJ0eShwcm9wTmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgY29udGVudCBlbGVtZW50IHRvIHRoZSBwYXNzZWQgdmFsdWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wTmFtZSBUaGUgc3R5bGUgcHJvcGVydHkgbmFtZSB0byBzZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBzdHlsZSBwcm9wZXJ0eSB2YWx1ZVxuICAgKi9cbiAgc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHkocHJvcE5hbWUsIHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzY3JvbGwgY29udGVudCBlbGVtZW50J3MgY29tcHV0ZWQgc3R5bGUgdmFsdWUgb2YgdGhlIGdpdmVuIGNzcyBwcm9wZXJ0eSBgcHJvcGVydHlOYW1lYC5cbiAgICogV2UgYWNoaWV2ZSB0aGlzIHZpYSBgZ2V0Q29tcHV0ZWRTdHlsZSguLi4pLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHlOYW1lKWAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0U2Nyb2xsQ29udGVudFN0eWxlVmFsdWUocHJvcGVydHlOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBzY3JvbGxMZWZ0IHZhbHVlIG9mIHRoZSBzY3JvbGwgYXJlYSBlbGVtZW50IHRvIHRoZSBwYXNzZWQgdmFsdWUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxMZWZ0IFRoZSBuZXcgc2Nyb2xsTGVmdCB2YWx1ZVxuICAgKi9cbiAgc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoc2Nyb2xsTGVmdCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2Nyb2xsTGVmdCB2YWx1ZSBvZiB0aGUgc2Nyb2xsIGFyZWEgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXRXaWR0aCBvZiB0aGUgc2Nyb2xsIGNvbnRlbnQgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0V2l0ZHRoIG9mIHRoZSBzY3JvbGwgYXJlYSBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBib3VuZGluZyBjbGllbnQgcmVjdCBvZiB0aGUgc2Nyb2xsIGFyZWEgZWxlbWVudC5cbiAgICogQHJldHVybiB7IUNsaWVudFJlY3R9XG4gICAqL1xuICBjb21wdXRlU2Nyb2xsQXJlYUNsaWVudFJlY3QoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBib3VuZGluZyBjbGllbnQgcmVjdCBvZiB0aGUgc2Nyb2xsIGNvbnRlbnQgZWxlbWVudC5cbiAgICogQHJldHVybiB7IUNsaWVudFJlY3R9XG4gICAqL1xuICBjb21wdXRlU2Nyb2xsQ29udGVudENsaWVudFJlY3QoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBoZWlnaHQgb2YgdGhlIGJyb3dzZXIncyBob3Jpem9udGFsIHNjcm9sbGJhcnMgKGluIHB4KS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgY29tcHV0ZUhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQoKSB7fVxufVxuXG5leHBvcnQge01EQ1RhYlNjcm9sbGVyQW5pbWF0aW9uLCBNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlcywgTURDVGFiU2Nyb2xsZXJBZGFwdGVyfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGFiU2Nyb2xsZXJBZGFwdGVyLCBNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gZnJvbSAnLi9hZGFwdGVyJztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgTURDVGFiU2Nyb2xsZXJSVEwge1xuICAvKiogQHBhcmFtIHshTURDVGFiU2Nyb2xsZXJBZGFwdGVyfSBhZGFwdGVyICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICAvKiogQHByaXZhdGUgKi9cbiAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdHJhbnNsYXRlWCBUaGUgY3VycmVudCB0cmFuc2xhdGVYIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQGFic3RyYWN0XG4gICAqL1xuICBnZXRTY3JvbGxQb3NpdGlvblJUTCh0cmFuc2xhdGVYKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259XG4gICAqIEBhYnN0cmFjdFxuICAgKi9cbiAgc2Nyb2xsVG9SVEwoc2Nyb2xsWCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufVxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIGluY3JlbWVudFNjcm9sbFJUTChzY3JvbGxYKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgY3VycmVudCBzY3JvbGxYIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cmFuc2xhdGVYIFRoZSBjdXJyZW50IHRyYW5zbGF0ZVggcG9zaXRpb25cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIGdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uKHNjcm9sbFgsIHRyYW5zbGF0ZVgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYlNjcm9sbGVyUlRMO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENUYWJTY3JvbGxlclJUTCBmcm9tICcuL3J0bC1zY3JvbGxlcic7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1RhYlNjcm9sbGVyQW5pbWF0aW9uLCBNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc30gZnJvbSAnLi9hZGFwdGVyJztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDVGFiU2Nyb2xsZXJSVEx9XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0IGV4dGVuZHMgTURDVGFiU2Nyb2xsZXJSVEwge1xuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsUG9zaXRpb25SVEwoKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgY29uc3Qge3JpZ2h0fSA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCk7XG4gICAgLy8gU2Nyb2xsIHZhbHVlcyBvbiBtb3N0IGJyb3dzZXJzIGFyZSBpbnRzIGluc3RlYWQgb2YgZmxvYXRzIHNvIHdlIHJvdW5kXG4gICAgcmV0dXJuIE1hdGgucm91bmQocmlnaHQgLSBjdXJyZW50U2Nyb2xsTGVmdCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufVxuICAgKi9cbiAgc2Nyb2xsVG9SVEwoc2Nyb2xsWCkge1xuICAgIGNvbnN0IGVkZ2VzID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxFZGdlc18oKTtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICBjb25zdCBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oZWRnZXMucmlnaHQgLSBzY3JvbGxYKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259ICovICh7XG4gICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbERlbHRhOiBjbGFtcGVkU2Nyb2xsTGVmdCAtIGN1cnJlbnRTY3JvbGxMZWZ0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn1cbiAgICovXG4gIGluY3JlbWVudFNjcm9sbFJUTChzY3JvbGxYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgY29uc3QgY2xhbXBlZFNjcm9sbExlZnQgPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKGN1cnJlbnRTY3JvbGxMZWZ0IC0gc2Nyb2xsWCk7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSAqLyAoe1xuICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxEZWx0YTogY2xhbXBlZFNjcm9sbExlZnQgLSBjdXJyZW50U2Nyb2xsTGVmdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbihzY3JvbGxYKSB7XG4gICAgcmV0dXJuIHNjcm9sbFg7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCkge1xuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3Qgcm9vdFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgoKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9ICovICh7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IGNvbnRlbnRXaWR0aCAtIHJvb3RXaWR0aCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjbGFtcFNjcm9sbFZhbHVlXyhzY3JvbGxYKSB7XG4gICAgY29uc3QgZWRnZXMgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpO1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChlZGdlcy5sZWZ0LCBzY3JvbGxYKSwgZWRnZXMucmlnaHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdDtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDVGFiU2Nyb2xsZXJSVEwgZnJvbSAnLi9ydGwtc2Nyb2xsZXInO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtNRENUYWJTY3JvbGxlckFuaW1hdGlvbiwgTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9IGZyb20gJy4vYWRhcHRlcic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ1RhYlNjcm9sbGVyUlRMfVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUgZXh0ZW5kcyBNRENUYWJTY3JvbGxlclJUTCB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdHJhbnNsYXRlWCBUaGUgY3VycmVudCB0cmFuc2xhdGVYIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uUlRMKHRyYW5zbGF0ZVgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh0cmFuc2xhdGVYIC0gY3VycmVudFNjcm9sbExlZnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn1cbiAgICovXG4gIHNjcm9sbFRvUlRMKHNjcm9sbFgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICBjb25zdCBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oLXNjcm9sbFgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gKi8gKHtcbiAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsRGVsdGE6IGNsYW1wZWRTY3JvbGxMZWZ0IC0gY3VycmVudFNjcm9sbExlZnQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufVxuICAgKi9cbiAgaW5jcmVtZW50U2Nyb2xsUlRMKHNjcm9sbFgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICBjb25zdCBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oY3VycmVudFNjcm9sbExlZnQgLSBzY3JvbGxYKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259ICovICh7XG4gICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbERlbHRhOiBjbGFtcGVkU2Nyb2xsTGVmdCAtIGN1cnJlbnRTY3JvbGxMZWZ0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cmFuc2xhdGVYXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uKHNjcm9sbFgsIHRyYW5zbGF0ZVgpIHtcbiAgICByZXR1cm4gc2Nyb2xsWCAtIHRyYW5zbGF0ZVg7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCkge1xuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3Qgcm9vdFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgoKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9ICovICh7XG4gICAgICBsZWZ0OiByb290V2lkdGggLSBjb250ZW50V2lkdGgsXG4gICAgICByaWdodDogMCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjbGFtcFNjcm9sbFZhbHVlXyhzY3JvbGxYKSB7XG4gICAgY29uc3QgZWRnZXMgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpO1xuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihlZGdlcy5yaWdodCwgc2Nyb2xsWCksIGVkZ2VzLmxlZnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmU7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ1RhYlNjcm9sbGVyUlRMIGZyb20gJy4vcnRsLXNjcm9sbGVyJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGFiU2Nyb2xsZXJBbmltYXRpb24sIE1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfSBmcm9tICcuL2FkYXB0ZXInO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENUYWJTY3JvbGxlclJUTH1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UgZXh0ZW5kcyBNRENUYWJTY3JvbGxlclJUTCB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdHJhbnNsYXRlWFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRTY3JvbGxQb3NpdGlvblJUTCh0cmFuc2xhdGVYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgLy8gU2Nyb2xsIHZhbHVlcyBvbiBtb3N0IGJyb3dzZXJzIGFyZSBpbnRzIGluc3RlYWQgb2YgZmxvYXRzIHNvIHdlIHJvdW5kXG4gICAgcmV0dXJuIE1hdGgucm91bmQoY3VycmVudFNjcm9sbExlZnQgLSB0cmFuc2xhdGVYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259XG4gICAqL1xuICBzY3JvbGxUb1JUTChzY3JvbGxYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgY29uc3QgY2xhbXBlZFNjcm9sbExlZnQgPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKHNjcm9sbFgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gKi8gKHtcbiAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsRGVsdGE6IGN1cnJlbnRTY3JvbGxMZWZ0IC0gY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufVxuICAgKi9cbiAgaW5jcmVtZW50U2Nyb2xsUlRMKHNjcm9sbFgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICBjb25zdCBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oY3VycmVudFNjcm9sbExlZnQgKyBzY3JvbGxYKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259ICovICh7XG4gICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbERlbHRhOiBjdXJyZW50U2Nyb2xsTGVmdCAtIGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uKHNjcm9sbFgsIHRyYW5zbGF0ZVgpIHtcbiAgICByZXR1cm4gc2Nyb2xsWCArIHRyYW5zbGF0ZVg7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCkge1xuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3Qgcm9vdFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgoKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9ICovICh7XG4gICAgICBsZWZ0OiBjb250ZW50V2lkdGggLSByb290V2lkdGgsXG4gICAgICByaWdodDogMCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjbGFtcFNjcm9sbFZhbHVlXyhzY3JvbGxYKSB7XG4gICAgY29uc3QgZWRnZXMgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpO1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChlZGdlcy5yaWdodCwgc2Nyb2xsWCksIGVkZ2VzLmxlZnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5nc30gZnJvbSAnLi9jb25zdGFudHMnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGFiU2Nyb2xsZXJBbmltYXRpb24sIE1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzLCBNRENUYWJTY3JvbGxlckFkYXB0ZXJ9IGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDVGFiU2Nyb2xsZXJSVEwgZnJvbSAnLi9ydGwtc2Nyb2xsZXInO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdCBmcm9tICcuL3J0bC1kZWZhdWx0LXNjcm9sbGVyJztcbmltcG9ydCBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlIGZyb20gJy4vcnRsLW5lZ2F0aXZlLXNjcm9sbGVyJztcbmltcG9ydCBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UgZnJvbSAnLi9ydGwtcmV2ZXJzZS1zY3JvbGxlcic7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1RhYlNjcm9sbGVyQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKipcbiAgICogQHNlZSBNRENUYWJTY3JvbGxlckFkYXB0ZXIgZm9yIHR5cGluZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBZGFwdGVyfSAqLyAoe1xuICAgICAgZXZlbnRUYXJnZXRNYXRjaGVzU2VsZWN0b3I6ICgpID0+IHt9LFxuICAgICAgYWRkQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgYWRkU2Nyb2xsQXJlYUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHNldFNjcm9sbEFyZWFTdHlsZVByb3BlcnR5OiAoKSA9PiB7fSxcbiAgICAgIHNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5OiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbENvbnRlbnRTdHlsZVZhbHVlOiAoKSA9PiB7fSxcbiAgICAgIHNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0OiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0OiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aDogKCkgPT4ge30sXG4gICAgICBnZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGg6ICgpID0+IHt9LFxuICAgICAgY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0OiAoKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVTY3JvbGxDb250ZW50Q2xpZW50UmVjdDogKCkgPT4ge30sXG4gICAgICBjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodDogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHshTURDVGFiU2Nyb2xsZXJBZGFwdGVyfSBhZGFwdGVyICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBib29sZWFuIGNvbnRyb2xzIHdoZXRoZXIgd2Ugc2hvdWxkIGhhbmRsZSB0aGUgdHJhbnNpdGlvbmVuZCBhbmQgaW50ZXJhY3Rpb24gZXZlbnRzIGR1cmluZyB0aGUgYW5pbWF0aW9uLlxuICAgICAqIEBwcml2YXRlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNBbmltYXRpbmdfID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgTURDVGFiU2Nyb2xsZXJSVEwgaW5zdGFuY2UgdmFyaWVzIHBlciBicm93c2VyIGFuZCBhbGxvd3MgdXMgdG8gZW5jYXBzdWxhdGUgdGhlIHBlY3VsaWFyIGJyb3dzZXIgYmVoYXZpb3JcbiAgICAgKiBvZiBSVEwgc2Nyb2xsaW5nIGluIGl0J3Mgb3duIGNsYXNzLlxuICAgICAqIEBwcml2YXRlIHs/TURDVGFiU2Nyb2xsZXJSVEx9XG4gICAgICovXG4gICAgdGhpcy5ydGxTY3JvbGxlckluc3RhbmNlXztcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gQ29tcHV0ZSBob3Jpem9udGFsIHNjcm9sbGJhciBoZWlnaHQgb24gc2Nyb2xsZXIgd2l0aCBvdmVyZmxvdyBpbml0aWFsbHkgaGlkZGVuLCB0aGVuIHVwZGF0ZSBvdmVyZmxvdyB0byBzY3JvbGxcbiAgICAvLyBhbmQgaW1tZWRpYXRlbHkgYWRqdXN0IGJvdHRvbSBtYXJnaW4gdG8gYXZvaWQgdGhlIHNjcm9sbGJhciBpbml0aWFsbHkgYXBwZWFyaW5nIGJlZm9yZSBKUyBydW5zLlxuICAgIGNvbnN0IGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQgPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0KCk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxBcmVhU3R5bGVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScsIC1ob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRTY3JvbGxBcmVhQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuU0NST0xMX0FSRUFfU0NST0xMKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgY3VycmVudCB2aXN1YWwgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wdXRlQ3VycmVudFNjcm9sbFBvc2l0aW9uUlRMXygpO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRUcmFuc2xhdGVYID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50VHJhbnNsYXRlWF8oKTtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIHJldHVybiBzY3JvbGxMZWZ0IC0gY3VycmVudFRyYW5zbGF0ZVg7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBpbnRlcmFjdGlvbiBldmVudHMgdGhhdCBvY2N1ciBkdXJpbmcgdHJhbnNpdGlvblxuICAgKi9cbiAgaGFuZGxlSW50ZXJhY3Rpb24oKSB7XG4gICAgLy8gRWFybHkgZXhpdCBpZiB3ZSBhcmVuJ3QgYW5pbWF0aW5nXG4gICAgaWYgKCF0aGlzLmlzQW5pbWF0aW5nXykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgb3RoZXIgZXZlbnQgbGlzdGVuZXJzIGZyb20gaGFuZGxpbmcgdGhpcyBldmVudFxuICAgIHRoaXMuc3RvcFNjcm9sbEFuaW1hdGlvbl8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSB0cmFuc2l0aW9uZW5kIGV2ZW50XG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KSB7XG4gICAgLy8gRWFybHkgZXhpdCBpZiB3ZSBhcmVuJ3QgYW5pbWF0aW5nIG9yIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkIGJ5IGEgZGlmZmVyZW50IGVsZW1lbnQuXG4gICAgaWYgKCF0aGlzLmlzQW5pbWF0aW5nX1xuICAgICAgfHwgIXRoaXMuYWRhcHRlcl8uZXZlbnRUYXJnZXRNYXRjaGVzU2VsZWN0b3IoZXZ0LnRhcmdldCwgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnN0cmluZ3MuQ09OVEVOVF9TRUxFQ1RPUikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzQW5pbWF0aW5nXyA9IGZhbHNlO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZW1lbnQgdGhlIHNjcm9sbCB2YWx1ZSBieSB0aGUgc2Nyb2xsWEluY3JlbWVudFxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWEluY3JlbWVudCBUaGUgdmFsdWUgYnkgd2hpY2ggdG8gaW5jcmVtZW50IHRoZSBzY3JvbGwgcG9zaXRpb25cbiAgICovXG4gIGluY3JlbWVudFNjcm9sbChzY3JvbGxYSW5jcmVtZW50KSB7XG4gICAgLy8gRWFybHkgZXhpdCBmb3Igbm9uLW9wZXJhdGlvbmFsIGluY3JlbWVudCB2YWx1ZXNcbiAgICBpZiAoc2Nyb2xsWEluY3JlbWVudCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmNyZW1lbnRTY3JvbGxSVExfKHNjcm9sbFhJbmNyZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuaW5jcmVtZW50U2Nyb2xsXyhzY3JvbGxYSW5jcmVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIHRoZSBnaXZlbiBzY3JvbGxYIHZhbHVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqL1xuICBzY3JvbGxUbyhzY3JvbGxYKSB7XG4gICAgaWYgKHRoaXMuaXNSVExfKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvUlRMXyhzY3JvbGxYKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbFRvXyhzY3JvbGxYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSB2ZXJzaW9uIG9mIHRoZSBNRENUYWJTY3JvbGxlclJUTFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJSVEx9XG4gICAqL1xuICBnZXRSVExTY3JvbGxlcigpIHtcbiAgICBpZiAoIXRoaXMucnRsU2Nyb2xsZXJJbnN0YW5jZV8pIHtcbiAgICAgIHRoaXMucnRsU2Nyb2xsZXJJbnN0YW5jZV8gPSB0aGlzLnJ0bFNjcm9sbGVyRmFjdG9yeV8oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5ydGxTY3JvbGxlckluc3RhbmNlXztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0cmFuc2xhdGVYIHZhbHVlIGZyb20gYSBDU1MgbWF0cml4IHRyYW5zZm9ybSBmdW5jdGlvbiBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsY3VsYXRlQ3VycmVudFRyYW5zbGF0ZVhfKCkge1xuICAgIGNvbnN0IHRyYW5zZm9ybVZhbHVlID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50U3R5bGVWYWx1ZSgndHJhbnNmb3JtJyk7XG4gICAgLy8gRWFybHkgZXhpdCBpZiBubyB0cmFuc2Zvcm0gaXMgcHJlc2VudFxuICAgIGlmICh0cmFuc2Zvcm1WYWx1ZSA9PT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyBUaGUgdHJhbnNmb3JtIHZhbHVlIGNvbWVzIGJhY2sgYXMgYSBtYXRyaXggdHJhbnNmb3JtYXRpb24gaW4gdGhlIGZvcm1cbiAgICAvLyBvZiBgbWF0cml4KGEsIGIsIGMsIGQsIHR4LCB0eSlgLiBXZSBvbmx5IGNhcmUgYWJvdXQgdHggKHRyYW5zbGF0ZVgpIHNvXG4gICAgLy8gd2UncmUgZ29pbmcgdG8gZ3JhYiBhbGwgdGhlIHBhcmVudGhlc2l6ZWQgdmFsdWVzLCBzdHJpcCBvdXQgdHgsIGFuZFxuICAgIC8vIHBhcnNlIGl0LlxuICAgIGNvbnN0IHJlc3VsdHMgPSAvXFwoKC4rKVxcKS8uZXhlYyh0cmFuc2Zvcm1WYWx1ZSlbMV07XG4gICAgY29uc3QgcGFydHMgPSByZXN1bHRzLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocGFydHNbNF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgYSBzYWZlIHNjcm9sbCB2YWx1ZSB0aGF0IGlzID4gMCBhbmQgPCB0aGUgbWF4IHNjcm9sbCB2YWx1ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgZGlzdGFuY2UgdG8gc2Nyb2xsXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNsYW1wU2Nyb2xsVmFsdWVfKHNjcm9sbFgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCk7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGVkZ2VzLmxlZnQsIHNjcm9sbFgpLCBlZGdlcy5yaWdodCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29tcHV0ZUN1cnJlbnRTY3JvbGxQb3NpdGlvblJUTF8oKSB7XG4gICAgY29uc3QgdHJhbnNsYXRlWCA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudFRyYW5zbGF0ZVhfKCk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UlRMU2Nyb2xsZXIoKS5nZXRTY3JvbGxQb3NpdGlvblJUTCh0cmFuc2xhdGVYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWxjdWxhdGVTY3JvbGxFZGdlc18oKSB7XG4gICAgY29uc3QgY29udGVudFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGgoKTtcbiAgICBjb25zdCByb290V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFPZmZzZXRXaWR0aCgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc30gKi8gKHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogY29udGVudFdpZHRoIC0gcm9vdFdpZHRoLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVybmFsIHNjcm9sbCBtZXRob2RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFggVGhlIG5ldyBzY3JvbGwgcG9zaXRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNjcm9sbFRvXyhzY3JvbGxYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbFggPSB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgY29uc3Qgc2FmZVNjcm9sbFggPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKHNjcm9sbFgpO1xuICAgIGNvbnN0IHNjcm9sbERlbHRhID0gc2FmZVNjcm9sbFggLSBjdXJyZW50U2Nyb2xsWDtcbiAgICB0aGlzLmFuaW1hdGVfKC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSAqLyAoe1xuICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogc2FmZVNjcm9sbFgsXG4gICAgICBzY3JvbGxEZWx0YTogc2Nyb2xsRGVsdGEsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVybmFsIFJUTCBzY3JvbGwgbWV0aG9kXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYIFRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzY3JvbGxUb1JUTF8oc2Nyb2xsWCkge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuZ2V0UlRMU2Nyb2xsZXIoKS5zY3JvbGxUb1JUTChzY3JvbGxYKTtcbiAgICB0aGlzLmFuaW1hdGVfKGFuaW1hdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJuYWwgaW5jcmVtZW50IHNjcm9sbCBtZXRob2RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFggVGhlIG5ldyBzY3JvbGwgcG9zaXRpb24gaW5jcmVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbmNyZW1lbnRTY3JvbGxfKHNjcm9sbFgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsWCA9IHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICBjb25zdCB0YXJnZXRTY3JvbGxYID0gc2Nyb2xsWCArIGN1cnJlbnRTY3JvbGxYO1xuICAgIGNvbnN0IHNhZmVTY3JvbGxYID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXyh0YXJnZXRTY3JvbGxYKTtcbiAgICBjb25zdCBzY3JvbGxEZWx0YSA9IHNhZmVTY3JvbGxYIC0gY3VycmVudFNjcm9sbFg7XG4gICAgdGhpcy5hbmltYXRlXygvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gKi8gKHtcbiAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IHNhZmVTY3JvbGxYLFxuICAgICAgc2Nyb2xsRGVsdGE6IHNjcm9sbERlbHRhLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBpbmNyZW1lbmV0IHNjcm9sbCBSVEwgbWV0aG9kXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYIFRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uIFJUTCBpbmNyZW1lbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluY3JlbWVudFNjcm9sbFJUTF8oc2Nyb2xsWCkge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuZ2V0UlRMU2Nyb2xsZXIoKS5pbmNyZW1lbnRTY3JvbGxSVEwoc2Nyb2xsWCk7XG4gICAgdGhpcy5hbmltYXRlXyhhbmltYXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGVzIHRoZSB0YWIgc2Nyb2xsaW5nXG4gICAqIEBwYXJhbSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSBhbmltYXRpb24gVGhlIGFuaW1hdGlvbiB0byBhcHBseVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYW5pbWF0ZV8oYW5pbWF0aW9uKSB7XG4gICAgLy8gRWFybHkgZXhpdCBpZiB0cmFuc2xhdGVYIGlzIDAsIHdoaWNoIG1lYW5zIHRoZXJlJ3Mgbm8gYW5pbWF0aW9uIHRvIHBlcmZvcm1cbiAgICBpZiAoYW5pbWF0aW9uLnNjcm9sbERlbHRhID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdG9wU2Nyb2xsQW5pbWF0aW9uXygpO1xuICAgIC8vIFRoaXMgYW5pbWF0aW9uIHVzZXMgdGhlIEZMSVAgYXBwcm9hY2guXG4gICAgLy8gUmVhZCBtb3JlIGhlcmU6IGh0dHBzOi8vYWVyb3R3aXN0LmNvbS9ibG9nL2ZsaXAteW91ci1hbmltYXRpb25zL1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoYW5pbWF0aW9uLmZpbmFsU2Nyb2xsUG9zaXRpb24pO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7YW5pbWF0aW9uLnNjcm9sbERlbHRhfXB4KWApO1xuICAgIC8vIEZvcmNlIHJlcGFpbnRcbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVTY3JvbGxBcmVhQ2xpZW50UmVjdCgpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScsICdub25lJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzQW5pbWF0aW5nXyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgc2Nyb2xsIGFuaW1hdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RvcFNjcm9sbEFuaW1hdGlvbl8oKSB7XG4gICAgdGhpcy5pc0FuaW1hdGluZ18gPSBmYWxzZTtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsUG9zaXRpb24gPSB0aGlzLmdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uXygpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwcHgpJyk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdChjdXJyZW50U2Nyb2xsUG9zaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIGR1cmluZyBhbmltYXRpb25cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QW5pbWF0aW5nU2Nyb2xsUG9zaXRpb25fKCkge1xuICAgIGNvbnN0IGN1cnJlbnRUcmFuc2xhdGVYID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50VHJhbnNsYXRlWF8oKTtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRSVExTY3JvbGxlcigpLmdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uKHNjcm9sbExlZnQsIGN1cnJlbnRUcmFuc2xhdGVYKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2Nyb2xsTGVmdCAtIGN1cnJlbnRUcmFuc2xhdGVYO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIFJUTCBTY3JvbGxlciB0byB1c2VcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyUlRMfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcnRsU2Nyb2xsZXJGYWN0b3J5XygpIHtcbiAgICAvLyBCcm93c2VycyBoYXZlIHRocmVlIGRpZmZlcmVudCBpbXBsZW1lbnRhdGlvbnMgb2Ygc2Nyb2xsTGVmdCBpbiBSVEwgbW9kZSxcbiAgICAvLyBkZXBlbmRlbnQgb24gdGhlIGJyb3dzZXIuIFRoZSBiZWhhdmlvciBpcyBiYXNlZCBvZmYgdGhlIG1heCBMVFJcbiAgICAvLyBzY3JvbGxsZWZ0IHZhbHVlIGFuZCAwLlxuICAgIC8vXG4gICAgLy8gKiBEZWZhdWx0IHNjcm9sbGluZyBpbiBSVEwgKlxuICAgIC8vICAgIC0gTGVmdC1tb3N0IHZhbHVlOiAwXG4gICAgLy8gICAgLSBSaWdodC1tb3N0IHZhbHVlOiBNYXggTFRSIHNjcm9sbExlZnQgdmFsdWVcbiAgICAvL1xuICAgIC8vICogTmVnYXRpdmUgc2Nyb2xsaW5nIGluIFJUTCAqXG4gICAgLy8gICAgLSBMZWZ0LW1vc3QgdmFsdWU6IE5lZ2F0ZWQgbWF4IExUUiBzY3JvbGxMZWZ0IHZhbHVlXG4gICAgLy8gICAgLSBSaWdodC1tb3N0IHZhbHVlOiAwXG4gICAgLy9cbiAgICAvLyAqIFJldmVyc2Ugc2Nyb2xsaW5nIGluIFJUTCAqXG4gICAgLy8gICAgLSBMZWZ0LW1vc3QgdmFsdWU6IE1heCBMVFIgc2Nyb2xsTGVmdCB2YWx1ZVxuICAgIC8vICAgIC0gUmlnaHQtbW9zdCB2YWx1ZTogMFxuICAgIC8vXG4gICAgLy8gV2UgdXNlIHRob3NlIHByaW5jaXBsZXMgYmVsb3cgdG8gZGV0ZXJtaW5lIHdoaWNoIFJUTCBzY3JvbGxMZWZ0XG4gICAgLy8gYmVoYXZpb3IgaXMgaW1wbGVtZW50ZWQgaW4gdGhlIGN1cnJlbnQgYnJvd3Nlci5cbiAgICBjb25zdCBpbml0aWFsU2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KGluaXRpYWxTY3JvbGxMZWZ0IC0gMSk7XG4gICAgY29uc3QgbmV3U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcblxuICAgIC8vIElmIHRoZSBuZXdTY3JvbGxMZWZ0IHZhbHVlIGlzIG5lZ2F0aXZlLHRoZW4gd2Uga25vdyB0aGF0IHRoZSBicm93c2VyIGhhc1xuICAgIC8vIGltcGxlbWVudGVkIG5lZ2F0aXZlIFJUTCBzY3JvbGxpbmcsIHNpbmNlIGFsbCBvdGhlciBpbXBsZW1lbnRhdGlvbnMgaGF2ZVxuICAgIC8vIG9ubHkgcG9zaXRpdmUgdmFsdWVzLlxuICAgIGlmIChuZXdTY3JvbGxMZWZ0IDwgMCkge1xuICAgICAgLy8gVW5kbyB0aGUgc2Nyb2xsTGVmdCB0ZXN0IGNoZWNrXG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KGluaXRpYWxTY3JvbGxMZWZ0KTtcbiAgICAgIHJldHVybiBuZXcgTURDVGFiU2Nyb2xsZXJSVExOZWdhdGl2ZSh0aGlzLmFkYXB0ZXJfKTtcbiAgICB9XG5cbiAgICBjb25zdCByb290Q2xpZW50UmVjdCA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY29udGVudENsaWVudFJlY3QgPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVTY3JvbGxDb250ZW50Q2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHJpZ2h0RWRnZURlbHRhID0gTWF0aC5yb3VuZChjb250ZW50Q2xpZW50UmVjdC5yaWdodCAtIHJvb3RDbGllbnRSZWN0LnJpZ2h0KTtcbiAgICAvLyBVbmRvIHRoZSBzY3JvbGxMZWZ0IHRlc3QgY2hlY2tcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KGluaXRpYWxTY3JvbGxMZWZ0KTtcblxuICAgIC8vIEJ5IGNhbGN1bGF0aW5nIHRoZSBjbGllbnRSZWN0IG9mIHRoZSByb290IGVsZW1lbnQgYW5kIHRoZSBjbGllbnRSZWN0IG9mXG4gICAgLy8gdGhlIGNvbnRlbnQgZWxlbWVudCwgd2UgY2FuIGRldGVybWluZSBob3cgbXVjaCB0aGUgc2Nyb2xsIHZhbHVlIGNoYW5nZWRcbiAgICAvLyB3aGVuIHdlIHBlcmZvcm1lZCB0aGUgc2Nyb2xsTGVmdCBzdWJ0cmFjdGlvbiBhYm92ZS5cbiAgICBpZiAocmlnaHRFZGdlRGVsdGEgPT09IG5ld1Njcm9sbExlZnQpIHtcbiAgICAgIHJldHVybiBuZXcgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlKHRoaXMuYWRhcHRlcl8pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0KHRoaXMuYWRhcHRlcl8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc1JUTF8oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudFN0eWxlVmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJTY3JvbGxlckZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHtjc3NDbGFzc2VzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0IHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nLlxuICogQHByaXZhdGUge251bWJlcnx1bmRlZmluZWR9XG4gKi9cbmxldCBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0XztcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgaGVpZ2h0IG9mIGJyb3dzZXItcmVuZGVyZWQgaG9yaXpvbnRhbCBzY3JvbGxiYXJzIHVzaW5nIGEgc2VsZi1jcmVhdGVkIHRlc3QgZWxlbWVudC5cbiAqIE1heSByZXR1cm4gMCAoZS5nLiBvbiBPUyBYIGJyb3dzZXJzIHVuZGVyIGRlZmF1bHQgY29uZmlndXJhdGlvbikuXG4gKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IHNob3VsZENhY2hlUmVzdWx0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0KGRvY3VtZW50T2JqLCBzaG91bGRDYWNoZVJlc3VsdCA9IHRydWUpIHtcbiAgaWYgKHNob3VsZENhY2hlUmVzdWx0ICYmIHR5cGVvZiBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0XyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodF87XG4gIH1cblxuICBjb25zdCBlbCA9IGRvY3VtZW50T2JqLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlbC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzZXMuU0NST0xMX1RFU1QpO1xuICBkb2N1bWVudE9iai5ib2R5LmFwcGVuZENoaWxkKGVsKTtcblxuICBjb25zdCBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0IC0gZWwuY2xpZW50SGVpZ2h0O1xuICBkb2N1bWVudE9iai5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcblxuICBpZiAoc2hvdWxkQ2FjaGVSZXN1bHQpIHtcbiAgICBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0XyA9IGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHshT2JqZWN0fSBIVE1MRWxlbWVudFByb3RvdHlwZVxuICogQHJldHVybiB7IUFycmF5PHN0cmluZz59XG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudFByb3RvdHlwZSkge1xuICByZXR1cm4gW1xuICAgICdtc01hdGNoZXNTZWxlY3RvcicsICdtYXRjaGVzJyxcbiAgXS5maWx0ZXIoKHApID0+IHAgaW4gSFRNTEVsZW1lbnRQcm90b3R5cGUpLnBvcCgpO1xufVxuXG5leHBvcnQge2NvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0LCBnZXRNYXRjaGVzUHJvcGVydHl9O1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibWRjLXRhYi1zY3JvbGxlclwiIDpjbGFzcz1cImNsYXNzZXNcIj5cbiAgICA8ZGl2XG4gICAgICByZWY9XCJhcmVhXCJcbiAgICAgIGNsYXNzPVwibWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWFyZWFcIlxuICAgICAgQG1vdXNlZG93bj1cImhhbmRsZUludGVyYWN0aW9uXCJcbiAgICAgIEB3aGVlbD1cImhhbmRsZUludGVyYWN0aW9uXCJcbiAgICAgIEBwb2ludGVyZG93bj1cImhhbmRsZUludGVyYWN0aW9uXCJcbiAgICAgIEB0b3VjaHN0YXJ0PVwiaGFuZGxlSW50ZXJhY3Rpb25cIlxuICAgICAgQGtleWRvd249XCJoYW5kbGVJbnRlcmFjdGlvblwiXG4gICAgICA6Y2xhc3M9XCJhcmVhQ2xhc3Nlc1wiXG4gICAgICA6c3R5bGU9XCJhcmVhU3R5bGVzXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj1cImNvbnRlbnRcIlxuICAgICAgICBjbGFzcz1cIm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1jb250ZW50XCJcbiAgICAgICAgOnN0eWxlPVwiY29udGVudFN0eWxlc1wiXG4gICAgICAgIEB0cmFuc2l0aW9uZW5kPVwiaGFuZGxlVHJhbnNpdGlvbkVuZFwiXG4gICAgICA+XG4gICAgICAgIDxzbG90IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL2ZvdW5kYXRpb24nXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJ0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRhYi1zY3JvbGxlcicsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHsgY2xhc3Nlczoge30sIGFyZWFDbGFzc2VzOiB7fSwgYXJlYVN0eWxlczoge30sIGNvbnRlbnRTdHlsZXM6IHt9IH1cbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24oe1xuICAgICAgZXZlbnRUYXJnZXRNYXRjaGVzU2VsZWN0b3I6IChldnRUYXJnZXQsIHNlbGVjdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IE1BVENIRVMgPSB1dGlsLmdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpXG4gICAgICAgIHJldHVybiBldnRUYXJnZXRbTUFUQ0hFU10oc2VsZWN0b3IpXG4gICAgICB9LFxuICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpLFxuXG4gICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGRlbGV0ZSh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSksXG4gICAgICBhZGRTY3JvbGxBcmVhQ2xhc3M6IGNsYXNzTmFtZSA9PlxuICAgICAgICB0aGlzLiRzZXQodGhpcy5hcmVhQ2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKSxcbiAgICAgIHNldFNjcm9sbEFyZWFTdHlsZVByb3BlcnR5OiAocHJvcCwgdmFsdWUpID0+XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLmFyZWFTdHlsZXMsIHByb3AsIHZhbHVlKSxcbiAgICAgIHNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5OiAocHJvcCwgdmFsdWUpID0+XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLmNvbnRlbnRTdHlsZXMsIHByb3AsIHZhbHVlKSxcbiAgICAgIGdldFNjcm9sbENvbnRlbnRTdHlsZVZhbHVlOiBwcm9wTmFtZSA9PlxuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiRyZWZzLmNvbnRlbnQpLmdldFByb3BlcnR5VmFsdWUocHJvcE5hbWUpLFxuICAgICAgc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQ6IHNjcm9sbFggPT5cbiAgICAgICAgKHRoaXMuJHJlZnMuYXJlYS5zY3JvbGxMZWZ0ID0gc2Nyb2xsWCksXG4gICAgICBnZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdDogKCkgPT4gdGhpcy4kcmVmcy5hcmVhLnNjcm9sbExlZnQsXG4gICAgICBnZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGg6ICgpID0+IHRoaXMuJHJlZnMuY29udGVudC5vZmZzZXRXaWR0aCxcbiAgICAgIGdldFNjcm9sbEFyZWFPZmZzZXRXaWR0aDogKCkgPT4gdGhpcy4kcmVmcy5hcmVhLm9mZnNldFdpZHRoLFxuICAgICAgY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0OiAoKSA9PlxuICAgICAgICB0aGlzLiRyZWZzLmFyZWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjb21wdXRlU2Nyb2xsQ29udGVudENsaWVudFJlY3Q6ICgpID0+XG4gICAgICAgIHRoaXMuJHJlZnMuY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0OiAoKSA9PlxuICAgICAgICB1dGlsLmNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0KGRvY3VtZW50KVxuICAgIH0pXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlVHJhbnNpdGlvbkVuZChldnQpXG4gICAgfSxcbiAgICBoYW5kbGVJbnRlcmFjdGlvbihldnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVJbnRlcmFjdGlvbihldnQpXG4gICAgfSxcbiAgICBnZXRTY3JvbGxQb3NpdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb24uZ2V0U2Nyb2xsUG9zaXRpb24oKVxuICAgIH0sXG4gICAgZ2V0U2Nyb2xsQ29udGVudFdpZHRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuY29udGVudC5vZmZzZXRXaWR0aFxuICAgIH0sXG4gICAgaW5jcmVtZW50U2Nyb2xsKHNjcm9sbFhJbmNyZW1lbnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5pbmNyZW1lbnRTY3JvbGwoc2Nyb2xsWEluY3JlbWVudClcbiAgICB9LFxuICAgIHNjcm9sbFRvKHNjcm9sbFgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zY3JvbGxUbyhzY3JvbGxYKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRhYiBJbmRpY2F0b3IuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGFiIEluZGljYXRvciBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDVGFiSW5kaWNhdG9yQWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIHRoZSBnaXZlbiBjbGFzc05hbWUgdG8gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3NOYW1lIHRvIGFkZFxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBjbGFzc05hbWUgZnJvbSB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzc05hbWUgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNsaWVudCByZWN0IG9mIHRoZSBjb250ZW50IGVsZW1lbnQuXG4gICAqIEByZXR1cm4geyFDbGllbnRSZWN0fVxuICAgKi9cbiAgY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCkge31cblxuICAvKipcbiAgICogU2V0cyBhIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBjb250ZW50IGVsZW1lbnQgdG8gdGhlIHBhc3NlZCB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcE5hbWUgVGhlIHN0eWxlIHByb3BlcnR5IG5hbWUgdG8gc2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgc3R5bGUgcHJvcGVydHkgdmFsdWVcbiAgICovXG4gIHNldENvbnRlbnRTdHlsZVByb3BlcnR5KHByb3BOYW1lLCB2YWx1ZSkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGFiSW5kaWNhdG9yQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIEFDVElWRTogJ21kYy10YWItaW5kaWNhdG9yLS1hY3RpdmUnLFxuICBGQURFOiAnbWRjLXRhYi1pbmRpY2F0b3ItLWZhZGUnLFxuICBOT19UUkFOU0lUSU9OOiAnbWRjLXRhYi1pbmRpY2F0b3ItLW5vLXRyYW5zaXRpb24nLFxufTtcblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBzdHJpbmdzID0ge1xuICBDT05URU5UX1NFTEVDVE9SOiAnLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50Jyxcbn07XG5cbmV4cG9ydCB7XG4gIGNzc0NsYXNzZXMsXG4gIHN0cmluZ3MsXG59O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1RhYkluZGljYXRvckFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7XG4gIGNzc0NsYXNzZXMsXG4gIHN0cmluZ3MsXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDVGFiSW5kaWNhdG9yQWRhcHRlcj59XG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzZWUgTURDVGFiSW5kaWNhdG9yQWRhcHRlciBmb3IgdHlwaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4geyFNRENUYWJJbmRpY2F0b3JBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiSW5kaWNhdG9yQWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdDogKCkgPT4ge30sXG4gICAgICBzZXRDb250ZW50U3R5bGVQcm9wZXJ0eTogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHshTURDVGFiSW5kaWNhdG9yQWRhcHRlcn0gYWRhcHRlciAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG4gIH1cblxuICAvKiogQHJldHVybiB7IUNsaWVudFJlY3R9ICovXG4gIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5jb21wdXRlQ29udGVudENsaWVudFJlY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluZGljYXRvclxuICAgKiBAcGFyYW0geyFDbGllbnRSZWN0PX0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0XG4gICAqIEBhYnN0cmFjdFxuICAgKi9cbiAgYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbiAgLyoqIEBhYnN0cmFjdCAqL1xuICBkZWFjdGl2YXRlKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9ufVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIGV4dGVuZHMgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiB7XG4gIC8qKiBAcGFyYW0geyFDbGllbnRSZWN0PX0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0ICovXG4gIGFjdGl2YXRlKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCkge1xuICAgIC8vIEVhcmx5IGV4aXQgaWYgbm8gaW5kaWNhdG9yIGlzIHByZXNlbnQgdG8gaGFuZGxlIGNhc2VzIHdoZXJlIGFuIGluZGljYXRvclxuICAgIC8vIG1heSBiZSBhY3RpdmF0ZWQgd2l0aG91dCBhIHByaW9yIGluZGljYXRvciBzdGF0ZVxuICAgIGlmICghcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoaXMgYW5pbWF0aW9uIHVzZXMgdGhlIEZMSVAgYXBwcm9hY2guIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IGl0IGF0IHRoZSBsaW5rIGJlbG93OlxuICAgIC8vIGh0dHBzOi8vYWVyb3R3aXN0LmNvbS9ibG9nL2ZsaXAteW91ci1hbmltYXRpb25zL1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkaW1lbnNpb25zIGJhc2VkIG9uIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBwcmV2aW91cyBpbmRpY2F0b3JcbiAgICBjb25zdCBjdXJyZW50Q2xpZW50UmVjdCA9IHRoaXMuY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgd2lkdGhEZWx0YSA9IHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdC53aWR0aCAvIGN1cnJlbnRDbGllbnRSZWN0LndpZHRoO1xuICAgIGNvbnN0IHhQb3NpdGlvbiA9IHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdC5sZWZ0IC0gY3VycmVudENsaWVudFJlY3QubGVmdDtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5OT19UUkFOU0lUSU9OKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldENvbnRlbnRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgke3hQb3NpdGlvbn1weCkgc2NhbGVYKCR7d2lkdGhEZWx0YX0pYCk7XG5cbiAgICAvLyBGb3JjZSByZXBhaW50IGJlZm9yZSB1cGRhdGluZyBjbGFzc2VzIGFuZCB0cmFuc2Zvcm0gdG8gZW5zdXJlIHRoZSB0cmFuc2Zvcm0gcHJvcGVybHkgdGFrZXMgZWZmZWN0XG4gICAgdGhpcy5jb21wdXRlQ29udGVudENsaWVudFJlY3QoKTtcblxuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLk5PX1RSQU5TSVRJT04pO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFDVElWRSk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRDb250ZW50U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJywgJycpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uO1xuIiwiPHRlbXBsYXRlPlxuICA8c3BhbiBjbGFzcz1cIm1kYy10YWItaW5kaWNhdG9yXCIgOmNsYXNzPVwiY2xhc3Nlc1wiPlxuICAgIDxzcGFuXG4gICAgICByZWY9XCJjb250ZW50XCJcbiAgICAgIDpzdHlsZT1cInN0eWxlc1wiXG4gICAgICBjbGFzcz1cIm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50IG1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmVcIlxuICAgID48L3NwYW4+XG4gIDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTURDU2xpZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3Ivc2xpZGluZy1mb3VuZGF0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtdGFiLWluZGljYXRvcicsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHsgY2xhc3Nlczoge30sIHN0eWxlczoge30gfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKSxcbiAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZGVsZXRlKHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lKSxcbiAgICAgIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdDogKCkgPT5cbiAgICAgICAgdGhpcy4kcmVmcy5jb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgc2V0Q29udGVudFN0eWxlUHJvcGVydHk6IChwcm9wLCB2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLiRzZXQodGhpcy5zdHlsZXMsIHByb3AsIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KVxuICAgIH0sXG4gICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5kZWFjdGl2YXRlKClcbiAgICB9LFxuICAgIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb24uY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8c3BhbiBjbGFzcz1cIm1kYy10YWJfX3JpcHBsZVwiIDpjbGFzcz1cImNsYXNzZXNcIiA6c3R5bGU9XCJzdHlsZXNcIj48L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgUmlwcGxlQmFzZSB9IGZyb20gJy4uL3JpcHBsZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRhYi1yaXBwbGUnLFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHsgY2xhc3Nlczoge30sIHN0eWxlczoge30gfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMucmlwcGxlID0gbmV3IFJpcHBsZUJhc2UodGhpcylcbiAgICB0aGlzLnJpcHBsZS5pbml0KClcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IG1kY1RhYiBmcm9tICcuL21kYy10YWIudnVlJ1xuaW1wb3J0IG1kY1RhYkJhciBmcm9tICcuL21kYy10YWItYmFyLnZ1ZSdcbmltcG9ydCBtZGNUYWJTY3JvbGxlciBmcm9tICcuL21kYy10YWItc2Nyb2xsZXIudnVlJ1xuaW1wb3J0IG1kY1RhYkluZGljYXRvciBmcm9tICcuL21kYy10YWItaW5kaWNhdG9yLnZ1ZSdcbmltcG9ydCBtZGNUYWJSaXBwbGUgZnJvbSAnLi9tZGMtdGFiLXJpcHBsZS52dWUnXG5leHBvcnQgeyBtZGNUYWIsIG1kY1RhYkJhciwgbWRjVGFiU2Nyb2xsZXIsIG1kY1RhYkluZGljYXRvciwgbWRjVGFiUmlwcGxlIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY1RhYixcbiAgbWRjVGFiQmFyLFxuICBtZGNUYWJTY3JvbGxlcixcbiAgbWRjVGFiSW5kaWNhdG9yLFxuICBtZGNUYWJSaXBwbGVcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJDdXN0b21FbGVtZW50IiwiZnVuY3Rpb25hbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwicHJvcHMiLCJpcyIsInRhZyIsImRhdGEiLCJjaGlsZHJlbiIsIkN1c3RvbUVsZW1lbnRNaXhpbiIsIkN1c3RvbUxpbmsiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImxpbmsiLCJPYmplY3QiLCJoIiwiZWxlbWVudCIsInBhcmVudCIsIiRyb3V0ZXIiLCIkcm9vdCIsIiRvcHRpb25zIiwib24iLCJjbGljayIsIm5hdGl2ZU9uIiwiQ3VzdG9tTGlua01peGluIiwidG8iLCJleGFjdCIsIkJvb2xlYW4iLCJhcHBlbmQiLCJyZXBsYWNlIiwiYWN0aXZlQ2xhc3MiLCJleGFjdEFjdGl2ZUNsYXNzIiwiY29tcHV0ZWQiLCJlbWl0Q3VzdG9tRXZlbnQiLCJlbCIsImV2dFR5cGUiLCJldnREYXRhIiwic2hvdWxkQnViYmxlIiwiZXZ0IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJleHRyYWN0SWNvblByb3AiLCJpY29uUHJvcCIsImNsYXNzZXMiLCJjb250ZW50IiwiQXJyYXkiLCJyZWR1Y2UiLCJyZXN1bHQiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsInNwbGl0IiwidGV4dENvbnRlbnQiLCJEaXNwYXRjaEV2ZW50TWl4aW4iLCJldmVudCIsIm1ldGhvZHMiLCIkZW1pdCIsInRhcmdldCIsImV2ZW50VGFyZ2V0IiwiYXJncyIsImV2ZW50QXJncyIsImxpc3RlbmVycyIsIiRsaXN0ZW5lcnMiLCJlIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIk1EQ0ZvdW5kYXRpb24iLCJhZGFwdGVyIiwiYWRhcHRlcl8iLCJNRENUYWJBZGFwdGVyIiwiYXR0ciIsInByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCIsImNzc0NsYXNzZXMiLCJBQ1RJVkUiLCJzdHJpbmdzIiwiQVJJQV9TRUxFQ1RFRCIsIlJJUFBMRV9TRUxFQ1RPUiIsIkNPTlRFTlRfU0VMRUNUT1IiLCJUQUJfSU5ESUNBVE9SX1NFTEVDVE9SIiwiVEFCSU5ERVgiLCJJTlRFUkFDVEVEX0VWRU5UIiwiTURDVGFiRm91bmRhdGlvbiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsInNldEF0dHIiLCJhY3RpdmF0ZUluZGljYXRvciIsImRlYWN0aXZhdGVJbmRpY2F0b3IiLCJub3RpZnlJbnRlcmFjdGVkIiwiZ2V0T2Zmc2V0TGVmdCIsImdldE9mZnNldFdpZHRoIiwiZ2V0Q29udGVudE9mZnNldExlZnQiLCJnZXRDb250ZW50T2Zmc2V0V2lkdGgiLCJmb2N1cyIsImRlZmF1bHRBZGFwdGVyIiwiZm9jdXNPbkFjdGl2YXRlXyIsImZvY3VzT25BY3RpdmF0ZSIsImlzQWN0aXZlIiwicm9vdFdpZHRoIiwicm9vdExlZnQiLCJjb250ZW50V2lkdGgiLCJjb250ZW50TGVmdCIsInJvb3RSaWdodCIsImNvbnRlbnRSaWdodCIsIk1EQ0NvbXBvbmVudCIsInJvb3QiLCJmb3VuZGF0aW9uIiwidW5kZWZpbmVkIiwicm9vdF8iLCJpbml0aWFsaXplIiwiZm91bmRhdGlvbl8iLCJnZXREZWZhdWx0Rm91bmRhdGlvbiIsImluaXQiLCJpbml0aWFsU3luY1dpdGhET00iLCJFcnJvciIsImRlc3Ryb3kiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJNRENSaXBwbGVBZGFwdGVyIiwidmFyTmFtZSIsIlJPT1QiLCJVTkJPVU5ERUQiLCJCR19GT0NVU0VEIiwiRkdfQUNUSVZBVElPTiIsIkZHX0RFQUNUSVZBVElPTiIsIlZBUl9MRUZUIiwiVkFSX1RPUCIsIlZBUl9GR19TSVpFIiwiVkFSX0ZHX1NDQUxFIiwiVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCIsIlZBUl9GR19UUkFOU0xBVEVfRU5EIiwibnVtYmVycyIsIlBBRERJTkciLCJJTklUSUFMX09SSUdJTl9TQ0FMRSIsIkRFQUNUSVZBVElPTl9USU1FT1VUX01TIiwiRkdfREVBQ1RJVkFUSU9OX01TIiwiVEFQX0RFTEFZX01TIiwic3VwcG9ydHNDc3NWYXJpYWJsZXNfIiwic3VwcG9ydHNQYXNzaXZlXyIsImRldGVjdEVkZ2VQc2V1ZG9WYXJCdWciLCJ3aW5kb3dPYmoiLCJub2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJoYXNQc2V1ZG9WYXJCdWciLCJib3JkZXJUb3BTdHlsZSIsInJlbW92ZSIsInN1cHBvcnRzQ3NzVmFyaWFibGVzIiwiZm9yY2VSZWZyZXNoIiwic3VwcG9ydHNGdW5jdGlvblByZXNlbnQiLCJDU1MiLCJzdXBwb3J0cyIsImV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMiLCJ3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMiLCJhcHBseVBhc3NpdmUiLCJnbG9iYWxPYmoiLCJpc1N1cHBvcnRlZCIsInBhc3NpdmUiLCJnZXRNYXRjaGVzUHJvcGVydHkiLCJIVE1MRWxlbWVudFByb3RvdHlwZSIsIm1hdGNoZXNNZXRob2RzIiwibWV0aG9kIiwiaSIsImxlbmd0aCIsIm1hdGNoZXNNZXRob2QiLCJnZXROb3JtYWxpemVkRXZlbnRDb29yZHMiLCJldiIsInBhZ2VPZmZzZXQiLCJjbGllbnRSZWN0IiwieCIsInkiLCJkb2N1bWVudFgiLCJsZWZ0IiwiZG9jdW1lbnRZIiwidG9wIiwibm9ybWFsaXplZFgiLCJub3JtYWxpemVkWSIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIkFDVElWQVRJT05fRVZFTlRfVFlQRVMiLCJQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyIsImFjdGl2YXRlZFRhcmdldHMiLCJNRENSaXBwbGVGb3VuZGF0aW9uIiwiYnJvd3NlclN1cHBvcnRzQ3NzVmFycyIsImlzVW5ib3VuZGVkIiwiaXNTdXJmYWNlQWN0aXZlIiwiaXNTdXJmYWNlRGlzYWJsZWQiLCJjb250YWluc0V2ZW50VGFyZ2V0IiwicmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyUmVzaXplSGFuZGxlciIsImRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwidXBkYXRlQ3NzVmFyaWFibGUiLCJjb21wdXRlQm91bmRpbmdSZWN0IiwiZ2V0V2luZG93UGFnZU9mZnNldCIsImxheW91dEZyYW1lXyIsImZyYW1lXyIsIndpZHRoIiwiaGVpZ2h0IiwiYWN0aXZhdGlvblN0YXRlXyIsImRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfIiwiaW5pdGlhbFNpemVfIiwibWF4UmFkaXVzXyIsImFjdGl2YXRlSGFuZGxlcl8iLCJhY3RpdmF0ZV8iLCJkZWFjdGl2YXRlSGFuZGxlcl8iLCJkZWFjdGl2YXRlXyIsImZvY3VzSGFuZGxlcl8iLCJoYW5kbGVGb2N1cyIsImJsdXJIYW5kbGVyXyIsImhhbmRsZUJsdXIiLCJyZXNpemVIYW5kbGVyXyIsImxheW91dCIsInVuYm91bmRlZENvb3Jkc18iLCJmZ1NjYWxlXyIsImFjdGl2YXRpb25UaW1lcl8iLCJmZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8iLCJhY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfIiwiYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfIiwicnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfIiwicHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfIiwiaXNBY3RpdmF0ZWQiLCJoYXNEZWFjdGl2YXRpb25VWFJ1biIsIndhc0FjdGl2YXRlZEJ5UG9pbnRlciIsIndhc0VsZW1lbnRNYWRlQWN0aXZlIiwiYWN0aXZhdGlvbkV2ZW50IiwiaXNQcm9ncmFtbWF0aWMiLCJzdXBwb3J0c1ByZXNzUmlwcGxlIiwic3VwcG9ydHNQcmVzc1JpcHBsZV8iLCJyZWdpc3RlclJvb3RIYW5kbGVyc18iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsYXlvdXRJbnRlcm5hbF8iLCJjbGVhclRpbWVvdXQiLCJyZW1vdmVDc3NWYXJzXyIsImRlcmVnaXN0ZXJSb290SGFuZGxlcnNfIiwiZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyIsImZvckVhY2giLCJrZXlzIiwiayIsImluZGV4T2YiLCJhY3RpdmF0aW9uU3RhdGUiLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudCIsImlzU2FtZUludGVyYWN0aW9uIiwiaGFzQWN0aXZhdGVkQ2hpbGQiLCJzb21lIiwicmVzZXRBY3RpdmF0aW9uU3RhdGVfIiwicHVzaCIsInJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfIiwiY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8iLCJhbmltYXRlQWN0aXZhdGlvbl8iLCJrZXlDb2RlIiwidHJhbnNsYXRlU3RhcnQiLCJ0cmFuc2xhdGVFbmQiLCJnZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwicm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfIiwic2V0VGltZW91dCIsImFjdGl2YXRpb25IYXNFbmRlZCIsInN0YXRlIiwiYW5pbWF0ZURlYWN0aXZhdGlvbl8iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm1heERpbSIsIm1heCIsImdldEJvdW5kZWRSYWRpdXMiLCJoeXBvdGVudXNlIiwic3FydCIsInBvdyIsInVwZGF0ZUxheW91dENzc1ZhcnNfIiwicm91bmQiLCJ1bmJvdW5kZWQiLCJNRENSaXBwbGUiLCJkaXNhYmxlZCIsInVuYm91bmRlZF8iLCJzZXRVbmJvdW5kZWQiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJjcmVhdGVBZGFwdGVyIiwiZGF0YXNldCIsInNldFVuYm91bmRlZF8iLCJyaXBwbGUiLCJpbnN0YW5jZSIsIk1BVENIRVMiLCJ1dGlsIiwiSFRNTEVsZW1lbnQiLCJwcm90b3R5cGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYWdlWE9mZnNldCIsInBhZ2VZT2Zmc2V0IiwiUmlwcGxlQ2FwYWJsZVN1cmZhY2UiLCJSaXBwbGVCYXNlIiwicmVmIiwiX21hdGNoZXMiLCJvcHRpb25zIiwiJGVsIiwiJHNldCIsIiRkZWxldGUiLCJzdHlsZXMiLCJSaXBwbGVNaXhpbiIsIm1vdW50ZWQiLCJiZWZvcmVEZXN0cm95Iiwibm9ybWFsaXplQ29tcG9uZW50IiwiY29tcGlsZWRUZW1wbGF0ZSIsImluamVjdFN0eWxlIiwiZGVmYXVsdEV4cG9ydCIsInNjb3BlSWQiLCJpc0Z1bmN0aW9uYWxUZW1wbGF0ZSIsIm1vZHVsZUlkZW50aWZpZXIiLCJpc1NoYWRvd01vZGUiLCJjcmVhdGVJbmplY3RvciIsImNyZWF0ZUluamVjdG9yU1NSIiwiY3JlYXRlSW5qZWN0b3JTaGFkb3ciLCJzdGF0aWNSZW5kZXJGbnMiLCJfY29tcGlsZWQiLCJfc2NvcGVJZCIsImhvb2siLCIkdm5vZGUiLCJzc3JDb250ZXh0IiwiX19WVUVfU1NSX0NPTlRFWFRfXyIsImNhbGwiLCJfcmVnaXN0ZXJlZENvbXBvbmVudHMiLCJfc3NyUmVnaXN0ZXIiLCJzaGFkb3dSb290Iiwib3JpZ2luYWxSZW5kZXIiLCJyZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24iLCJleGlzdGluZyIsImJlZm9yZUNyZWF0ZSIsImNvbmNhdCIsInNjcmlwdCIsIlRBQl9BQ1RJVkFURURfRVZFTlQiLCJUQUJfU0NST0xMRVJfU0VMRUNUT1IiLCJUQUJfU0VMRUNUT1IiLCJBUlJPV19MRUZUX0tFWSIsIkFSUk9XX1JJR0hUX0tFWSIsIkVORF9LRVkiLCJIT01FX0tFWSIsIkVOVEVSX0tFWSIsIlNQQUNFX0tFWSIsIkVYVFJBX1NDUk9MTF9BTU9VTlQiLCJBUlJPV19MRUZUX0tFWUNPREUiLCJBUlJPV19SSUdIVF9LRVlDT0RFIiwiRU5EX0tFWUNPREUiLCJIT01FX0tFWUNPREUiLCJFTlRFUl9LRVlDT0RFIiwiU1BBQ0VfS0VZQ09ERSIsIk1EQ1RhYkJhckFkYXB0ZXIiLCJzY3JvbGxYIiwic2Nyb2xsWEluY3JlbWVudCIsImluZGV4IiwiaWQiLCJBQ0NFUFRBQkxFX0tFWVMiLCJTZXQiLCJLRVlDT0RFX01BUCIsIk1hcCIsInNldCIsIk1EQ1RhYkJhckZvdW5kYXRpb24iLCJzY3JvbGxUbyIsImluY3JlbWVudFNjcm9sbCIsImdldFNjcm9sbFBvc2l0aW9uIiwiZ2V0U2Nyb2xsQ29udGVudFdpZHRoIiwiaXNSVEwiLCJzZXRBY3RpdmVUYWIiLCJhY3RpdmF0ZVRhYkF0SW5kZXgiLCJkZWFjdGl2YXRlVGFiQXRJbmRleCIsImZvY3VzVGFiQXRJbmRleCIsImdldFRhYkluZGljYXRvckNsaWVudFJlY3RBdEluZGV4IiwiZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgiLCJnZXRQcmV2aW91c0FjdGl2ZVRhYkluZGV4IiwiZ2V0Rm9jdXNlZFRhYkluZGV4IiwiZ2V0SW5kZXhPZlRhYkJ5SWQiLCJnZXRUYWJMaXN0TGVuZ3RoIiwibm90aWZ5VGFiQWN0aXZhdGVkIiwidXNlQXV0b21hdGljQWN0aXZhdGlvbl8iLCJ1c2VBdXRvbWF0aWNBY3RpdmF0aW9uIiwicHJldmlvdXNBY3RpdmVJbmRleCIsImluZGV4SXNJblJhbmdlXyIsInNjcm9sbEludG9WaWV3IiwiZ2V0S2V5RnJvbUV2ZW50XyIsImlzQWN0aXZhdGlvbktleV8iLCJwcmV2ZW50RGVmYXVsdCIsImRldGVybWluZVRhcmdldEZyb21LZXlfIiwiZm9jdXNlZFRhYkluZGV4IiwidGFiSWQiLCJpc1JUTF8iLCJzY3JvbGxJbnRvVmlld1JUTF8iLCJzY3JvbGxJbnRvVmlld18iLCJvcmlnaW4iLCJtYXhJbmRleCIsInNob3VsZEdvVG9FbmQiLCJzaG91bGREZWNyZW1lbnQiLCJzaG91bGRJbmNyZW1lbnQiLCJuZXh0SW5kZXgiLCJzY3JvbGxQb3NpdGlvbiIsImJhcldpZHRoIiwibmV4dFRhYkRpbWVuc2lvbnMiLCJyZWxhdGl2ZUNvbnRlbnRMZWZ0IiwicmVsYXRpdmVDb250ZW50UmlnaHQiLCJsZWZ0SW5jcmVtZW50IiwicmlnaHRJbmNyZW1lbnQiLCJtaW4iLCJzY3JvbGxDb250ZW50V2lkdGgiLCJ0YWJEaW1lbnNpb25zIiwicmVsYXRpdmVSb290TGVmdCIsInJlbGF0aXZlUm9vdFJpZ2h0IiwicmVsYXRpdmVSb290RGVsdGEiLCJsZWZ0RWRnZUlzQ2xvc2VyIiwicmlnaHRFZGdlSXNDbG9zZXIiLCJyb290RGVsdGEiLCJoYXMiLCJnZXQiLCJmaW5kQWRqYWNlbnRUYWJJbmRleENsb3Nlc3RUb0VkZ2VfIiwic2Nyb2xsSW5jcmVtZW50IiwiY2FsY3VsYXRlU2Nyb2xsSW5jcmVtZW50XyIsInNjcm9sbFdpZHRoIiwiZmluZEFkamFjZW50VGFiSW5kZXhDbG9zZXN0VG9FZGdlUlRMXyIsImNhbGN1bGF0ZVNjcm9sbEluY3JlbWVudFJUTF8iLCJBTklNQVRJTkciLCJTQ1JPTExfVEVTVCIsIlNDUk9MTF9BUkVBX1NDUk9MTCIsIkFSRUFfU0VMRUNUT1IiLCJNRENUYWJTY3JvbGxlckFkYXB0ZXIiLCJldnRUYXJnZXQiLCJzZWxlY3RvciIsInByb3BOYW1lIiwicHJvcGVydHlOYW1lIiwic2Nyb2xsTGVmdCIsIk1EQ1RhYlNjcm9sbGVyUlRMIiwidHJhbnNsYXRlWCIsIk1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdCIsImN1cnJlbnRTY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQiLCJjYWxjdWxhdGVTY3JvbGxFZGdlc18iLCJyaWdodCIsImVkZ2VzIiwiY2xhbXBlZFNjcm9sbExlZnQiLCJjbGFtcFNjcm9sbFZhbHVlXyIsImZpbmFsU2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxEZWx0YSIsImdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aCIsImdldFNjcm9sbEFyZWFPZmZzZXRXaWR0aCIsIk1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUiLCJNRENUYWJTY3JvbGxlclJUTFJldmVyc2UiLCJNRENUYWJTY3JvbGxlckZvdW5kYXRpb24iLCJldmVudFRhcmdldE1hdGNoZXNTZWxlY3RvciIsImFkZFNjcm9sbEFyZWFDbGFzcyIsInNldFNjcm9sbEFyZWFTdHlsZVByb3BlcnR5Iiwic2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHkiLCJnZXRTY3JvbGxDb250ZW50U3R5bGVWYWx1ZSIsInNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0IiwiY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0IiwiY29tcHV0ZVNjcm9sbENvbnRlbnRDbGllbnRSZWN0IiwiY29tcHV0ZUhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQiLCJpc0FuaW1hdGluZ18iLCJydGxTY3JvbGxlckluc3RhbmNlXyIsImhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQiLCJjb21wdXRlQ3VycmVudFNjcm9sbFBvc2l0aW9uUlRMXyIsImN1cnJlbnRUcmFuc2xhdGVYIiwiY2FsY3VsYXRlQ3VycmVudFRyYW5zbGF0ZVhfIiwic3RvcFNjcm9sbEFuaW1hdGlvbl8iLCJpbmNyZW1lbnRTY3JvbGxSVExfIiwiaW5jcmVtZW50U2Nyb2xsXyIsInNjcm9sbFRvUlRMXyIsInNjcm9sbFRvXyIsInJ0bFNjcm9sbGVyRmFjdG9yeV8iLCJ0cmFuc2Zvcm1WYWx1ZSIsInJlc3VsdHMiLCJleGVjIiwicGFydHMiLCJwYXJzZUZsb2F0IiwiZ2V0UlRMU2Nyb2xsZXIiLCJnZXRTY3JvbGxQb3NpdGlvblJUTCIsImN1cnJlbnRTY3JvbGxYIiwic2FmZVNjcm9sbFgiLCJhbmltYXRlXyIsImFuaW1hdGlvbiIsInNjcm9sbFRvUlRMIiwidGFyZ2V0U2Nyb2xsWCIsImluY3JlbWVudFNjcm9sbFJUTCIsImN1cnJlbnRTY3JvbGxQb3NpdGlvbiIsImdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uXyIsImdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uIiwiaW5pdGlhbFNjcm9sbExlZnQiLCJuZXdTY3JvbGxMZWZ0Iiwicm9vdENsaWVudFJlY3QiLCJjb250ZW50Q2xpZW50UmVjdCIsInJpZ2h0RWRnZURlbHRhIiwiaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodF8iLCJkb2N1bWVudE9iaiIsInNob3VsZENhY2hlUmVzdWx0Iiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicmVtb3ZlQ2hpbGQiLCJmaWx0ZXIiLCJwIiwicG9wIiwiTURDVGFiSW5kaWNhdG9yQWRhcHRlciIsIkZBREUiLCJOT19UUkFOU0lUSU9OIiwiTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiIsImNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCIsInNldENvbnRlbnRTdHlsZVByb3BlcnR5IiwiTURDU2xpZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24iLCJjdXJyZW50Q2xpZW50UmVjdCIsIndpZHRoRGVsdGEiLCJ4UG9zaXRpb24iLCJtZGNUYWIiLCJtZGNUYWJCYXIiLCJtZGNUYWJTY3JvbGxlciIsIm1kY1RhYkluZGljYXRvciIsIm1kY1RhYlJpcHBsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztFQUFPLFNBQVNBLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0VBQy9CO0VBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0VBQ0EsTUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0VBQ2pDRCxJQUFBQSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBZDtFQUNELEdBRkQsTUFFTyxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7RUFDeEM7RUFDQUgsSUFBQUEsSUFBSSxHQUFHRyxNQUFNLENBQUNELEdBQWQ7RUFDRDs7RUFDRCxNQUFJRixJQUFKLEVBQVU7RUFDUkEsSUFBQUEsSUFBSSxDQUFDSSxHQUFMLENBQVNMLE1BQVQ7RUFDRDtFQUNGOztFQ1pNLFNBQVNNLFVBQVQsQ0FBb0JDLFVBQXBCLEVBQWdDO0VBQ3JDLFNBQU87RUFDTEMsSUFBQUEsT0FBTyxFQUFFLGFBREo7RUFFTEMsSUFBQUEsT0FBTyxFQUFFLGlCQUFBQyxFQUFFLEVBQUk7RUFDYixXQUFLLElBQUlDLEdBQVQsSUFBZ0JKLFVBQWhCLEVBQTRCO0VBQzFCLFlBQUlLLFNBQVMs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
