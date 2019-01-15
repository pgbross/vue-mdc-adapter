/**
* @module vue-mdc-adaptertabs 0.19.0-beta
* @exports VueMDCTabs
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.42.0","material-components-web":"^0.42.1"}
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

  /* script */
              const __vue_script__ = script;
              
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
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/ddata/extra/vma/components/ripple/mdc-ripple.vue";

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
    

    
    __vue_normalize__(
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
    /* component normalizer */
    function __vue_normalize__$1(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/ddata/extra/vma/components/tabs/mdc-tab.vue";

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
    

    
    var mdcTab = __vue_normalize__$1(
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
  var cssClasses$2 = {
    ACTIVE: 'mdc-tab-indicator--active',
    FADE: 'mdc-tab-indicator--fade',
    NO_TRANSITION: 'mdc-tab-indicator--no-transition'
  };
  /** @enum {string} */

  var strings$3 = {
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
        return cssClasses$2;
      }
      /** @return enum {string} */

    }, {
      key: "strings",
      get: function get() {
        return strings$3;
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

  /**
   * @extends {MDCTabIndicatorFoundation}
   * @final
   */

  var MDCFadingTabIndicatorFoundation =
  /*#__PURE__*/
  function (_MDCTabIndicatorFound) {
    _inherits(MDCFadingTabIndicatorFoundation, _MDCTabIndicatorFound);

    function MDCFadingTabIndicatorFoundation() {
      _classCallCheck(this, MDCFadingTabIndicatorFoundation);

      return _possibleConstructorReturn(this, _getPrototypeOf(MDCFadingTabIndicatorFoundation).apply(this, arguments));
    }

    _createClass(MDCFadingTabIndicatorFoundation, [{
      key: "activate",
      value: function activate() {
        this.adapter_.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this.adapter_.removeClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
      }
    }]);

    return MDCFadingTabIndicatorFoundation;
  }(MDCTabIndicatorFoundation);

  /**
   * @extends {MDCComponent<!MDCTabIndicatorFoundation>}
   * @final
   */

  var MDCTabIndicator =
  /*#__PURE__*/
  function (_MDCComponent) {
    _inherits(MDCTabIndicator, _MDCComponent);

    _createClass(MDCTabIndicator, null, [{
      key: "attachTo",

      /**
       * @param {!Element} root
       * @return {!MDCTabIndicator}
       */
      value: function attachTo(root) {
        return new MDCTabIndicator(root);
      }
      /**
       * @param {...?} args
       */

    }]);

    function MDCTabIndicator() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MDCTabIndicator);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MDCTabIndicator)).call.apply(_getPrototypeOf2, [this].concat(args)));
      /** @type {?Element} */

      _this.content_;
      return _this;
    }

    _createClass(MDCTabIndicator, [{
      key: "initialize",
      value: function initialize() {
        this.content_ = this.root_.querySelector(MDCTabIndicatorFoundation.strings.CONTENT_SELECTOR);
      }
      /**
       * @return {!ClientRect}
       */

    }, {
      key: "computeContentClientRect",
      value: function computeContentClientRect() {
        return this.foundation_.computeContentClientRect();
      }
      /**
       * @return {!MDCTabIndicatorFoundation}
       */

    }, {
      key: "getDefaultFoundation",
      value: function getDefaultFoundation() {
        var _this2 = this;

        var adapter =
        /** @type {!MDCTabIndicatorAdapter} */
        _extends({
          addClass: function addClass(className) {
            return _this2.root_.classList.add(className);
          },
          removeClass: function removeClass(className) {
            return _this2.root_.classList.remove(className);
          },
          computeContentClientRect: function computeContentClientRect() {
            return _this2.content_.getBoundingClientRect();
          },
          setContentStyleProperty: function setContentStyleProperty(prop, value) {
            return _this2.content_.style.setProperty(prop, value);
          }
        });

        if (this.root_.classList.contains(MDCTabIndicatorFoundation.cssClasses.FADE)) {
          return new MDCFadingTabIndicatorFoundation(adapter);
        } // Default to the sliding indicator


        return new MDCSlidingTabIndicatorFoundation(adapter);
      }
      /**
       * @param {!ClientRect=} previousIndicatorClientRect
       */

    }, {
      key: "activate",
      value: function activate(previousIndicatorClientRect) {
        this.foundation_.activate(previousIndicatorClientRect);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this.foundation_.deactivate();
      }
    }]);

    return MDCTabIndicator;
  }(MDCComponent);

  /**
   * @extends {MDCComponent<!MDCTabFoundation>}
   * @final
   */

  var MDCTab =
  /*#__PURE__*/
  function (_MDCComponent) {
    _inherits(MDCTab, _MDCComponent);

    /**
     * @param {...?} args
     */
    function MDCTab() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MDCTab);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MDCTab)).call.apply(_getPrototypeOf2, [this].concat(args)));
      /** @private {?MDCRipple} */

      _this.ripple_;
      /** @private {?MDCTabIndicator} */

      _this.tabIndicator_;
      /** @private {?Element} */

      _this.content_;
      /** @private {?Function} */

      _this.handleClick_;
      return _this;
    }
    /**
     * @param {!Element} root
     * @return {!MDCTab}
     */


    _createClass(MDCTab, [{
      key: "initialize",
      value: function initialize() {
        var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el, foundation) {
          return new MDCRipple(el, foundation);
        };
        var tabIndicatorFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
          return new MDCTabIndicator(el);
        };
        var rippleSurface = this.root_.querySelector(MDCTabFoundation.strings.RIPPLE_SELECTOR);

        var rippleAdapter = _extends(MDCRipple.createAdapter(
        /** @type {!RippleCapableSurface} */
        this), {
          addClass: function addClass(className) {
            return rippleSurface.classList.add(className);
          },
          removeClass: function removeClass(className) {
            return rippleSurface.classList.remove(className);
          },
          updateCssVariable: function updateCssVariable(varName, value) {
            return rippleSurface.style.setProperty(varName, value);
          }
        });

        var rippleFoundation = new MDCRippleFoundation(rippleAdapter);
        this.ripple_ = rippleFactory(this.root_, rippleFoundation);
        var tabIndicatorElement = this.root_.querySelector(MDCTabFoundation.strings.TAB_INDICATOR_SELECTOR);
        this.tabIndicator_ = tabIndicatorFactory(tabIndicatorElement);
        this.content_ = this.root_.querySelector(MDCTabFoundation.strings.CONTENT_SELECTOR);
      }
    }, {
      key: "initialSyncWithDOM",
      value: function initialSyncWithDOM() {
        this.handleClick_ = this.foundation_.handleClick.bind(this.foundation_);
        this.listen('click', this.handleClick_);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.unlisten('click',
        /** @type {!Function} */
        this.handleClick_);
        this.ripple_.destroy();

        _get(_getPrototypeOf(MDCTab.prototype), "destroy", this).call(this);
      }
      /**
       * @return {!MDCTabFoundation}
       */

    }, {
      key: "getDefaultFoundation",
      value: function getDefaultFoundation() {
        var _this2 = this;

        return new MDCTabFoundation(
        /** @type {!MDCTabAdapter} */
        {
          setAttr: function setAttr(attr, value) {
            return _this2.root_.setAttribute(attr, value);
          },
          addClass: function addClass(className) {
            return _this2.root_.classList.add(className);
          },
          removeClass: function removeClass(className) {
            return _this2.root_.classList.remove(className);
          },
          hasClass: function hasClass(className) {
            return _this2.root_.classList.contains(className);
          },
          activateIndicator: function activateIndicator(previousIndicatorClientRect) {
            return _this2.tabIndicator_.activate(previousIndicatorClientRect);
          },
          deactivateIndicator: function deactivateIndicator() {
            return _this2.tabIndicator_.deactivate();
          },
          notifyInteracted: function notifyInteracted() {
            return _this2.emit(MDCTabFoundation.strings.INTERACTED_EVENT, {
              tab: _this2
            }, true
            /* bubble */
            );
          },
          getOffsetLeft: function getOffsetLeft() {
            return _this2.root_.offsetLeft;
          },
          getOffsetWidth: function getOffsetWidth() {
            return _this2.root_.offsetWidth;
          },
          getContentOffsetLeft: function getContentOffsetLeft() {
            return _this2.content_.offsetLeft;
          },
          getContentOffsetWidth: function getContentOffsetWidth() {
            return _this2.content_.offsetWidth;
          },
          focus: function focus() {
            return _this2.root_.focus();
          }
        });
      }
      /**
       * Getter for the active state of the tab
       * @return {boolean}
       */

    }, {
      key: "activate",

      /**
       * Activates the tab
       * @param {!ClientRect=} computeIndicatorClientRect
       */
      value: function activate(computeIndicatorClientRect) {
        this.foundation_.activate(computeIndicatorClientRect);
      }
      /**
       * Deactivates the tab
       */

    }, {
      key: "deactivate",
      value: function deactivate() {
        this.foundation_.deactivate();
      }
      /**
       * Returns the indicator's client rect
       * @return {!ClientRect}
       */

    }, {
      key: "computeIndicatorClientRect",
      value: function computeIndicatorClientRect() {
        return this.tabIndicator_.computeContentClientRect();
      }
      /**
       * @return {!MDCTabDimensions}
       */

    }, {
      key: "computeDimensions",
      value: function computeDimensions() {
        return this.foundation_.computeDimensions();
      }
      /**
       * Focuses the tab
       */

    }, {
      key: "focus",
      value: function focus() {
        this.root_.focus();
      }
    }, {
      key: "active",
      get: function get$$1() {
        return this.foundation_.isActive();
      }
    }, {
      key: "focusOnActivate",
      set: function set(focusOnActivate) {
        this.foundation_.setFocusOnActivate(focusOnActivate);
      }
    }], [{
      key: "attachTo",
      value: function attachTo(root) {
        return new MDCTab(root);
      }
    }]);

    return MDCTab;
  }(MDCComponent);

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
       * @param {!MDCTab} tab The tab whose index to determin
       * @return {number}
       */

    }, {
      key: "getIndexOfTab",
      value: function getIndexOfTab(tab) {}
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
            getIndexOfTab: function getIndexOfTab() {},
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
        this.adapter_.setActiveTab(this.adapter_.getIndexOfTab(evt.detail.tab));
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
    /* component normalizer */
    function __vue_normalize__$2(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/ddata/extra/vma/components/tabs/mdc-tab-bar.vue";

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
    

    
    var mdcTabBar = __vue_normalize__$2(
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
  var cssClasses$3 = {
    ANIMATING: 'mdc-tab-scroller--animating',
    SCROLL_TEST: 'mdc-tab-scroller__test',
    SCROLL_AREA_SCROLL: 'mdc-tab-scroller__scroll-area--scroll'
  };
  /** @enum {string} */

  var strings$4 = {
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
        return cssClasses$3;
      }
      /** @return enum {string} */

    }, {
      key: "strings",
      get: function get() {
        return strings$4;
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
    el.classList.add(cssClasses$3.SCROLL_TEST);
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
    /* component normalizer */
    function __vue_normalize__$3(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/ddata/extra/vma/components/tabs/mdc-tab-scroller.vue";

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
    

    
    var mdcTabScroller = __vue_normalize__$3(
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
    /* component normalizer */
    function __vue_normalize__$4(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/ddata/extra/vma/components/tabs/mdc-tab-indicator.vue";

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
    

    
    var mdcTabIndicator = __vue_normalize__$4(
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
    /* component normalizer */
    function __vue_normalize__$5(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/ddata/extra/vma/components/tabs/mdc-tab-ripple.vue";

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
    

    
    var mdcTabRipple = __vue_normalize__$5(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9iYXNlL2F1dG8taW5pdC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9iYXNlLXBsdWdpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZWxlbWVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tbGluay5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZXZlbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWljb24uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvZGlzcGF0Y2gtZXZlbnQtbWl4aW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvdW5pcXVlaWQtbWl4aW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS91dGlsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS1iYXNlLmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS52dWUiLCIuLi8uLi9jb21wb25lbnRzL3RhYnMvbWRjLXRhYi52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3Ivc2xpZGluZy1mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2ZhZGluZy1mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vY29tcG9uZW50cy90YWJzL21kYy10YWItYmFyLnZ1ZSIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtc2Nyb2xsZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtZGVmYXVsdC1zY3JvbGxlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3J0bC1uZWdhdGl2ZS1zY3JvbGxlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3J0bC1yZXZlcnNlLXNjcm9sbGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3V0aWwuanMiLCIuLi8uLi9jb21wb25lbnRzL3RhYnMvbWRjLXRhYi1zY3JvbGxlci52dWUiLCIuLi8uLi9jb21wb25lbnRzL3RhYnMvbWRjLXRhYi1pbmRpY2F0b3IudnVlIiwiLi4vLi4vY29tcG9uZW50cy90YWJzL21kYy10YWItcmlwcGxlLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvdGFicy9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvdGFicy9lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXV0b0luaXQocGx1Z2luKSB7XG4gIC8vIEF1dG8taW5zdGFsbFxuICBsZXQgX1Z1ZSA9IG51bGxcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgX1Z1ZSA9IHdpbmRvdy5WdWVcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8qZ2xvYmFsIGdsb2JhbCovXG4gICAgX1Z1ZSA9IGdsb2JhbC5WdWVcbiAgfVxuICBpZiAoX1Z1ZSkge1xuICAgIF9WdWUudXNlKHBsdWdpbilcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIEJhc2VQbHVnaW4oY29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICdfX1ZFUlNJT05fXycsXG4gICAgaW5zdGFsbDogdm0gPT4ge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNba2V5XVxuICAgICAgICB2bS5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHNcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEN1c3RvbUVsZW1lbnQgPSB7XG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHJlbmRlcihjcmVhdGVFbGVtZW50LCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBjb250ZXh0LnByb3BzLmlzIHx8IGNvbnRleHQucHJvcHMudGFnIHx8ICdkaXYnLFxuICAgICAgY29udGV4dC5kYXRhLFxuICAgICAgY29udGV4dC5jaGlsZHJlblxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudE1peGluID0ge1xuICBjb21wb25lbnRzOiB7XG4gICAgQ3VzdG9tRWxlbWVudFxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tTGluayA9IHtcbiAgbmFtZTogJ2N1c3RvbS1saW5rJyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICB0YWc6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnYScgfSxcbiAgICBsaW5rOiBPYmplY3RcbiAgfSxcbiAgcmVuZGVyKGgsIGNvbnRleHQpIHtcbiAgICBsZXQgZWxlbWVudFxuICAgIGxldCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dC5kYXRhKVxuXG4gICAgaWYgKGNvbnRleHQucHJvcHMubGluayAmJiBjb250ZXh0LnBhcmVudC4kcm91dGVyKSB7XG4gICAgICAvLyByb3V0ZXItbGluayBjYXNlXG4gICAgICBlbGVtZW50ID0gY29udGV4dC5wYXJlbnQuJHJvb3QuJG9wdGlvbnMuY29tcG9uZW50c1sncm91dGVyLWxpbmsnXVxuICAgICAgZGF0YS5wcm9wcyA9IE9iamVjdC5hc3NpZ24oeyB0YWc6IGNvbnRleHQucHJvcHMudGFnIH0sIGNvbnRleHQucHJvcHMubGluaylcbiAgICAgIGlmIChkYXRhLm9uLmNsaWNrKSB7XG4gICAgICAgIGRhdGEubmF0aXZlT24gPSB7IGNsaWNrOiBkYXRhLm9uLmNsaWNrIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZWxlbWVudCBmYWxsYmFja1xuICAgICAgZWxlbWVudCA9IGNvbnRleHQucHJvcHMudGFnXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoZWxlbWVudCwgZGF0YSwgY29udGV4dC5jaGlsZHJlbilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9tTGlua01peGluID0ge1xuICBwcm9wczoge1xuICAgIHRvOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgIGV4YWN0OiBCb29sZWFuLFxuICAgIGFwcGVuZDogQm9vbGVhbixcbiAgICByZXBsYWNlOiBCb29sZWFuLFxuICAgIGFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gICAgZXhhY3RBY3RpdmVDbGFzczogU3RyaW5nXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbGluaygpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMudG8gJiYge1xuICAgICAgICAgIHRvOiB0aGlzLnRvLFxuICAgICAgICAgIGV4YWN0OiB0aGlzLmV4YWN0LFxuICAgICAgICAgIGFwcGVuZDogdGhpcy5hcHBlbmQsXG4gICAgICAgICAgcmVwbGFjZTogdGhpcy5yZXBsYWNlLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzOiB0aGlzLmFjdGl2ZUNsYXNzLFxuICAgICAgICAgIGV4YWN0QWN0aXZlQ2xhc3M6IHRoaXMuZXhhY3RBY3RpdmVDbGFzc1xuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgQ3VzdG9tTGlua1xuICB9XG59XG4iLCIvKiBnbG9iYWwgQ3VzdG9tRXZlbnQgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXRDdXN0b21FdmVudChlbCwgZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgbGV0IGV2dFxuICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpXG4gIH1cbiAgZWwuZGlzcGF0Y2hFdmVudChldnQpXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZXh0cmFjdEljb25Qcm9wKGljb25Qcm9wKSB7XG4gIGlmICh0eXBlb2YgaWNvblByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHsgJ21hdGVyaWFsLWljb25zJzogdHJ1ZSB9LFxuICAgICAgY29udGVudDogaWNvblByb3BcbiAgICB9XG4gIH0gZWxzZSBpZiAoaWNvblByb3AgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiBpY29uUHJvcC5yZWR1Y2UoXG4gICAgICAgIChyZXN1bHQsIHZhbHVlKSA9PiBPYmplY3QuYXNzaWduKHJlc3VsdCwgeyBbdmFsdWVdOiB0cnVlIH0pLFxuICAgICAgICB7fVxuICAgICAgKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgaWNvblByb3AgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IGljb25Qcm9wLmNsYXNzTmFtZVxuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAucmVkdWNlKFxuICAgICAgICAgIChyZXN1bHQsIHZhbHVlKSA9PiBPYmplY3QuYXNzaWduKHJlc3VsdCwgeyBbdmFsdWVdOiB0cnVlIH0pLFxuICAgICAgICAgIHt9XG4gICAgICAgICksXG4gICAgICBjb250ZW50OiBpY29uUHJvcC50ZXh0Q29udGVudFxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IERpc3BhdGNoRXZlbnRNaXhpbiA9IHtcbiAgcHJvcHM6IHtcbiAgICBldmVudDogU3RyaW5nLFxuICAgICdldmVudC10YXJnZXQnOiBPYmplY3QsXG4gICAgJ2V2ZW50LWFyZ3MnOiBBcnJheVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZGlzcGF0Y2hFdmVudChldnQpIHtcbiAgICAgIGV2dCAmJiB0aGlzLiRlbWl0KGV2dC50eXBlLCBldnQpXG4gICAgICBpZiAodGhpcy5ldmVudCkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5ldmVudFRhcmdldCB8fCB0aGlzLiRyb290XG4gICAgICAgIGxldCBhcmdzID0gdGhpcy5ldmVudEFyZ3MgfHwgW11cbiAgICAgICAgdGFyZ2V0LiRlbWl0KHRoaXMuZXZlbnQsIC4uLmFyZ3MpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpc3RlbmVycygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMuJGxpc3RlbmVycyxcbiAgICAgICAgY2xpY2s6IGUgPT4gdGhpcy5kaXNwYXRjaEV2ZW50KGUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBzY29wZSA9XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMHgxMDAwMDAwMCkpLnRvU3RyaW5nKCkgKyAnLSdcblxuZXhwb3J0IGNvbnN0IFZNQVVuaXF1ZUlkTWl4aW4gPSB7XG4gIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICB0aGlzLnZtYV91aWRfID0gc2NvcGUgKyB0aGlzLl91aWRcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIEFcbiAqL1xuY2xhc3MgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW17Y3NzQ2xhc3Nlc30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte3N0cmluZ3N9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte251bWJlcnN9ICovXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFPYmplY3R9ICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgIC8vIHZhbGlkYXRpb24uXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7QT19IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIgPSB7fSkge1xuICAgIC8qKiBAcHJvdGVjdGVkIHshQX0gKi9cbiAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBNRENUYWJEaW1lbnNpb25zIHByb3ZpZGVzIGRldGFpbHMgYWJvdXQgdGhlIGxlZnQgYW5kIHJpZ2h0IGVkZ2VzIG9mIHRoZSBUYWJcbiAqIHJvb3QgZWxlbWVudCBhbmQgdGhlIFRhYiBjb250ZW50IGVsZW1lbnQuIFRoZXNlIHZhbHVlcyBhcmUgdXNlZCB0byBkZXRlcm1pbmVcbiAqIHRoZSB2aXN1YWwgcG9zaXRpb24gb2YgdGhlIFRhYiB3aXRoIHJlc3BlY3QgaXQncyBwYXJlbnQgY29udGFpbmVyLlxuICogQHR5cGVkZWYge3tyb290TGVmdDogbnVtYmVyLCByb290UmlnaHQ6IG51bWJlciwgY29udGVudExlZnQ6IG51bWJlciwgY29udGVudFJpZ2h0OiBudW1iZXJ9fVxuICovXG5sZXQgTURDVGFiRGltZW5zaW9ucztcblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgVGFiLlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIFRhYiAgaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1RhYkFkYXB0ZXIge1xuICAvKipcbiAgICogQWRkcyB0aGUgZ2l2ZW4gY2xhc3NOYW1lIHRvIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzTmFtZSB0byBhZGRcbiAgICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gY2xhc3NOYW1lIGZyb20gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3NOYW1lIHRvIHJlbW92ZVxuICAgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHJvb3QgZWxlbWVudCBoYXMgdGhlIGdpdmVuIGNsYXNzTmFtZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3NOYW1lIHRvIHJlbW92ZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBnaXZlbiBhdHRyTmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50IHRvIHRoZSBnaXZlbiB2YWx1ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHIgVGhlIGF0dHJpYnV0ZSBuYW1lIHRvIHNldFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHNvIGdpdmUgdGhlIGF0dHJpYnV0ZVxuICAgKi9cbiAgc2V0QXR0cihhdHRyLCB2YWx1ZSkge31cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBpbmRpY2F0b3IgZWxlbWVudC5cbiAgICogQHBhcmFtIHshQ2xpZW50UmVjdD19IHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCBUaGUgY2xpZW50IHJlY3Qgb2YgdGhlIHByZXZpb3VzbHkgYWN0aXZhdGVkIGluZGljYXRvclxuICAgKi9cbiAgYWN0aXZhdGVJbmRpY2F0b3IocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7fVxuXG4gIC8qKiBEZWFjdGl2YXRlcyB0aGUgaW5kaWNhdG9yLiAqL1xuICBkZWFjdGl2YXRlSW5kaWNhdG9yKCkge31cblxuICAvKipcbiAgICogRW1pdHMgdGhlIE1EQ1RhYjppbnRlcmFjdGVkIGV2ZW50IGZvciB1c2UgYnkgcGFyZW50IGNvbXBvbmVudHNcbiAgICovXG4gIG5vdGlmeUludGVyYWN0ZWQoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXRMZWZ0IHZhbHVlIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldE9mZnNldExlZnQoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXRXaWR0aCB2YWx1ZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRPZmZzZXRXaWR0aCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldExlZnQgb2YgdGhlIGNvbnRlbnQgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0Q29udGVudE9mZnNldExlZnQoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXRXaWR0aCBvZiB0aGUgY29udGVudCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRDb250ZW50T2Zmc2V0V2lkdGgoKSB7fVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGZvY3VzIHRvIHRoZSByb290IGVsZW1lbnRcbiAgICovXG4gIGZvY3VzKCkge31cbn1cblxuZXhwb3J0IHtNRENUYWJEaW1lbnNpb25zLCBNRENUYWJBZGFwdGVyfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIEFDVElWRTogJ21kYy10YWItLWFjdGl2ZScsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIEFSSUFfU0VMRUNURUQ6ICdhcmlhLXNlbGVjdGVkJyxcbiAgUklQUExFX1NFTEVDVE9SOiAnLm1kYy10YWJfX3JpcHBsZScsXG4gIENPTlRFTlRfU0VMRUNUT1I6ICcubWRjLXRhYl9fY29udGVudCcsXG4gIFRBQl9JTkRJQ0FUT1JfU0VMRUNUT1I6ICcubWRjLXRhYi1pbmRpY2F0b3InLFxuICBUQUJJTkRFWDogJ3RhYkluZGV4JyxcbiAgSU5URVJBQ1RFRF9FVkVOVDogJ01EQ1RhYjppbnRlcmFjdGVkJyxcbn07XG5cbmV4cG9ydCB7XG4gIGNzc0NsYXNzZXMsXG4gIHN0cmluZ3MsXG59O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtNRENUYWJBZGFwdGVyLCBNRENUYWJEaW1lbnNpb25zfSBmcm9tICcuL2FkYXB0ZXInO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG5pbXBvcnQge1xuICBjc3NDbGFzc2VzLFxuICBzdHJpbmdzLFxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1RhYkFkYXB0ZXI+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RhYkZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKlxuICAgKiBAc2VlIE1EQ1RhYkFkYXB0ZXIgZm9yIHR5cGluZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHshTURDVGFiQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYkFkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBoYXNDbGFzczogKCkgPT4ge30sXG4gICAgICBzZXRBdHRyOiAoKSA9PiB7fSxcbiAgICAgIGFjdGl2YXRlSW5kaWNhdG9yOiAoKSA9PiB7fSxcbiAgICAgIGRlYWN0aXZhdGVJbmRpY2F0b3I6ICgpID0+IHt9LFxuICAgICAgbm90aWZ5SW50ZXJhY3RlZDogKCkgPT4ge30sXG4gICAgICBnZXRPZmZzZXRMZWZ0OiAoKSA9PiB7fSxcbiAgICAgIGdldE9mZnNldFdpZHRoOiAoKSA9PiB7fSxcbiAgICAgIGdldENvbnRlbnRPZmZzZXRMZWZ0OiAoKSA9PiB7fSxcbiAgICAgIGdldENvbnRlbnRPZmZzZXRXaWR0aDogKCkgPT4ge30sXG4gICAgICBmb2N1czogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHshTURDVGFiQWRhcHRlcn0gYWRhcHRlciAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENUYWJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5mb2N1c09uQWN0aXZhdGVfID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBcImNsaWNrXCIgZXZlbnRcbiAgICovXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIC8vIEl0J3MgdXAgdG8gdGhlIHBhcmVudCBjb21wb25lbnQgdG8ga2VlcCB0cmFjayBvZiB0aGUgYWN0aXZlIFRhYiBhbmRcbiAgICAvLyBlbnN1cmUgd2UgZG9uJ3QgYWN0aXZhdGUgYSBUYWIgdGhhdCdzIGFscmVhZHkgYWN0aXZlLlxuICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5SW50ZXJhY3RlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIFRhYidzIGFjdGl2ZSBzdGF0ZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgd2hldGhlciB0aGUgdGFiIHNob3VsZCBmb2N1cyBpdHNlbGYgd2hlbiBhY3RpdmF0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBmb2N1c09uQWN0aXZhdGVcbiAgICovXG4gIHNldEZvY3VzT25BY3RpdmF0ZShmb2N1c09uQWN0aXZhdGUpIHtcbiAgICB0aGlzLmZvY3VzT25BY3RpdmF0ZV8gPSBmb2N1c09uQWN0aXZhdGU7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBUYWJcbiAgICogQHBhcmFtIHshQ2xpZW50UmVjdD19IHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdFxuICAgKi9cbiAgYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkFDVElWRSk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKHN0cmluZ3MuQVJJQV9TRUxFQ1RFRCwgJ3RydWUnKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5UQUJJTkRFWCwgJzAnKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFjdGl2YXRlSW5kaWNhdG9yKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCk7XG4gICAgaWYgKHRoaXMuZm9jdXNPbkFjdGl2YXRlXykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgVGFiXG4gICAqL1xuICBkZWFjdGl2YXRlKCkge1xuICAgIC8vIEVhcmx5IGV4aXRcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihzdHJpbmdzLkFSSUFfU0VMRUNURUQsICdmYWxzZScpO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihzdHJpbmdzLlRBQklOREVYLCAnLTEnKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlYWN0aXZhdGVJbmRpY2F0b3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBUYWJcbiAgICogQHJldHVybiB7IU1EQ1RhYkRpbWVuc2lvbnN9XG4gICAqL1xuICBjb21wdXRlRGltZW5zaW9ucygpIHtcbiAgICBjb25zdCByb290V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3Qgcm9vdExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldE9mZnNldExlZnQoKTtcbiAgICBjb25zdCBjb250ZW50V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldENvbnRlbnRPZmZzZXRXaWR0aCgpO1xuICAgIGNvbnN0IGNvbnRlbnRMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRDb250ZW50T2Zmc2V0TGVmdCgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJvb3RMZWZ0LFxuICAgICAgcm9vdFJpZ2h0OiByb290TGVmdCArIHJvb3RXaWR0aCxcbiAgICAgIGNvbnRlbnRMZWZ0OiByb290TGVmdCArIGNvbnRlbnRMZWZ0LFxuICAgICAgY29udGVudFJpZ2h0OiByb290TGVmdCArIGNvbnRlbnRMZWZ0ICsgY29udGVudFdpZHRoLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGFiRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBGXG4gKi9cbmNsYXNzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENDb21wb25lbnR9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7Rj19IGZvdW5kYXRpb25cbiAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb290LCBmb3VuZGF0aW9uID0gdW5kZWZpbmVkLCAuLi5hcmdzKSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuICAgIHRoaXMucm9vdF8gPSByb290O1xuICAgIHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcbiAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgLy8gdGhpcy5yb290XyBpcyBkZWZpbmVkIGFuZCBjYW4gYmUgdXNlZCB3aXRoaW4gdGhlIGZvdW5kYXRpb24gY2xhc3MuXG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFGfSAqL1xuICAgIHRoaXMuZm91bmRhdGlvbl8gPSBmb3VuZGF0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmdldERlZmF1bHRGb3VuZGF0aW9uKCkgOiBmb3VuZGF0aW9uO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gIH1cblxuICBpbml0aWFsaXplKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshRn0gZm91bmRhdGlvblxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgLy8gY29tcG9uZW50LlxuICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogbGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgbGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gcmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiB1bmxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLFxuICAgKiB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFPYmplY3R9IGV2dERhdGFcbiAgICogQHBhcmFtIHtib29sZWFuPX0gc2hvdWxkQnViYmxlXG4gICAqL1xuICBlbWl0KGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gICAgbGV0IGV2dDtcbiAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5yb290Xy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBSaXBwbGUuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmdcbiAqIC0gY2xhc3Nlc1xuICogLSBkb21cbiAqIC0gQ1NTIHZhcmlhYmxlc1xuICogLSBwb3NpdGlvblxuICogLSBkaW1lbnNpb25zXG4gKiAtIHNjcm9sbCBwb3NpdGlvblxuICogLSBldmVudCBoYW5kbGVyc1xuICogLSB1bmJvdW5kZWQsIGFjdGl2ZSBhbmQgZGlzYWJsZWQgc3RhdGVzXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENSaXBwbGVBZGFwdGVyIHtcbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1VuYm91bmRlZCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZUFjdGl2ZSgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZURpc2FibGVkKCkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0geyFFdmVudFRhcmdldH0gdGFyZ2V0ICovXG4gIGNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFyTmFtZVxuICAgKiBAcGFyYW0gez9udW1iZXJ8c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgdXBkYXRlQ3NzVmFyaWFibGUodmFyTmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqIEByZXR1cm4geyFDbGllbnRSZWN0fSAqL1xuICBjb21wdXRlQm91bmRpbmdSZWN0KCkge31cblxuICAvKiogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gKi9cbiAgZ2V0V2luZG93UGFnZU9mZnNldCgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxuICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbn07XG5cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG4gIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxufTtcblxuY29uc3QgbnVtYmVycyA9IHtcbiAgUEFERElORzogMTAsXG4gIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLXRyYW5zbGF0ZS1kdXJhdGlvbiAoaS5lLiBhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLWZhZGUtb3V0LWR1cmF0aW9uIChpLmUuIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIFRBUF9ERUxBWV9NUzogMzAwLCAvLyBEZWxheSBiZXR3ZWVuIHRvdWNoIGFuZCBzaW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXNcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gYXBwbHlQYXNzaXZlIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c1Bhc3NpdmVfO1xuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAvLyBEZXRlY3QgdmVyc2lvbnMgb2YgRWRnZSB3aXRoIGJ1Z2d5IHZhcigpIHN1cHBvcnRcbiAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMTQ5NTQ0OC9cbiAgY29uc3QgZG9jdW1lbnQgPSB3aW5kb3dPYmouZG9jdW1lbnQ7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgLy8gVGhlIGJ1ZyBleGlzdHMgaWYgOjpiZWZvcmUgc3R5bGUgZW5kcyB1cCBwcm9wYWdhdGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gIC8vIEFkZGl0aW9uYWxseSwgZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIG51bGwgaW4gaWZyYW1lcyB3aXRoIGRpc3BsYXk6IFwibm9uZVwiIGluIEZpcmVmb3gsXG4gIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvd09iai5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBjb25zdCBoYXNQc2V1ZG9WYXJCdWcgPSBjb21wdXRlZFN0eWxlICE9PSBudWxsICYmIGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wU3R5bGUgPT09ICdzb2xpZCc7XG4gIG5vZGUucmVtb3ZlKCk7XG4gIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBsZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuXG4gIGNvbnN0IHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gd2luZG93T2JqLkNTUyAmJiB0eXBlb2Ygd2luZG93T2JqLkNTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTQ2NjlcbiAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgY29uc3Qgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKFxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKVxuICApO1xuXG4gIGlmIChleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cykge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgfSBlbHNlIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG59XG5cbi8vXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZCBpZiBzbywgdXNlIHRoZW0uXG4gKiBAcGFyYW0geyFXaW5kb3c9fSBnbG9iYWxPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnwhRXZlbnRMaXN0ZW5lck9wdGlvbnN9XG4gKi9cbmZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmogPSB3aW5kb3csIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwge2dldCBwYXNzaXZlKCkge1xuICAgICAgICBpc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBpc1N1cHBvcnRlZDtcbiAgICAgIH19KTtcbiAgICB9IGNhdGNoIChlKSB7IH1cblxuICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZDtcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfXG4gICAgPyAvKiogQHR5cGUgeyFFdmVudExpc3RlbmVyT3B0aW9uc30gKi8gKHtwYXNzaXZlOiB0cnVlfSlcbiAgICA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gSFRNTEVsZW1lbnRQcm90b3R5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gIC8qKlxuICAgKiBPcmRlciBpcyBpbXBvcnRhbnQgYmVjYXVzZSB3ZSByZXR1cm4gdGhlIGZpcnN0IGV4aXN0aW5nIG1ldGhvZCB3ZSBmaW5kLlxuICAgKiBEbyBub3QgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgaXRlbXMgaW4gdGhlIGJlbG93IGFycmF5LlxuICAgKi9cbiAgY29uc3QgbWF0Y2hlc01ldGhvZHMgPSBbJ21hdGNoZXMnLCAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJywgJ21zTWF0Y2hlc1NlbGVjdG9yJ107XG4gIGxldCBtZXRob2QgPSAnbWF0Y2hlcyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlc01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0aG9kID0gbWF0Y2hlc01ldGhvZHNbaV07XG4gICAgaWYgKG1hdGNoZXNNZXRob2QgaW4gSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgICAgIG1ldGhvZCA9IG1hdGNoZXNNZXRob2Q7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0aG9kO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUV2ZW50fSBldlxuICogQHBhcmFtIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSBwYWdlT2Zmc2V0XG4gKiBAcGFyYW0geyFDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXYsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgY29uc3Qge3gsIHl9ID0gcGFnZU9mZnNldDtcbiAgY29uc3QgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgY29uc3QgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuXG4gIGxldCBub3JtYWxpemVkWDtcbiAgbGV0IG5vcm1hbGl6ZWRZO1xuICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gIGlmIChldi50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICBldiA9IC8qKiBAdHlwZSB7IVRvdWNoRXZlbnR9ICovIChldik7XG4gICAgbm9ybWFsaXplZFggPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9IGVsc2Uge1xuICAgIGV2ID0gLyoqIEB0eXBlIHshTW91c2VFdmVudH0gKi8gKGV2KTtcbiAgICBub3JtYWxpemVkWCA9IGV2LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYucGFnZVkgLSBkb2N1bWVudFk7XG4gIH1cblxuICByZXR1cm4ge3g6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWX07XG59XG5cbmV4cG9ydCB7c3VwcG9ydHNDc3NWYXJpYWJsZXMsIGFwcGx5UGFzc2l2ZSwgZ2V0TWF0Y2hlc1Byb3BlcnR5LCBnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgaXNBY3RpdmF0ZWQ6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBhY3RpdmF0aW9uRXZlbnQ6ICghRXZlbnR8dW5kZWZpbmVkKSxcbiAqICAgaXNQcm9ncmFtbWF0aWM6IChib29sZWFufHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBBY3RpdmF0aW9uU3RhdGVUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGRlYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZm9jdXM6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgYmx1cjogKHN0cmluZ3x1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJJbmZvVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50KSxcbiAqICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50PSksXG4gKiAgIGZvY3VzOiBmdW5jdGlvbigpLFxuICogICBibHVyOiBmdW5jdGlvbigpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJzVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICB4OiBudW1iZXIsXG4gKiAgIHk6IG51bWJlclxuICogfX1cbiAqL1xubGV0IFBvaW50VHlwZTtcblxuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbmNvbnN0IEFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nLCAnbW91c2Vkb3duJywgJ2tleWRvd24nXTtcblxuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG5jb25zdCBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnXTtcblxuLy8gVHJhY2tzIGFjdGl2YXRpb25zIHRoYXQgaGF2ZSBvY2N1cnJlZCBvbiB0aGUgY3VycmVudCBmcmFtZSwgdG8gYXZvaWQgc2ltdWx0YW5lb3VzIG5lc3RlZCBhY3RpdmF0aW9uc1xuLyoqIEB0eXBlIHshQXJyYXk8IUV2ZW50VGFyZ2V0Pn0gKi9cbmxldCBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1JpcHBsZUFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENSaXBwbGVGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gbnVtYmVycztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IC8qIGJvb2xlYW4gLSBjYWNoZWQgKi8ge30sXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICgvKiB0YXJnZXQ6ICFFdmVudFRhcmdldCAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAoLyogdmFyTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IC8qIENsaWVudFJlY3QgKi8ge30sXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAvKiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9ICovIHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUgeyFDbGllbnRSZWN0fSAqL1xuICAgIHRoaXMuZnJhbWVfID0gLyoqIEB0eXBlIHshQ2xpZW50UmVjdH0gKi8gKHt3aWR0aDogMCwgaGVpZ2h0OiAwfSk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubWF4UmFkaXVzXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCl9ICovXG4gICAgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gKGUpID0+IHRoaXMuYWN0aXZhdGVfKGUpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9ICgpID0+IHRoaXMuZGVhY3RpdmF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5mb2N1c0hhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVGb2N1cygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmJsdXJIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlQmx1cigpO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyXyA9ICgpID0+IHRoaXMubGF5b3V0KCk7XG5cbiAgICAvKiogQHByaXZhdGUge3tsZWZ0OiBudW1iZXIsIHRvcDpudW1iZXJ9fSAqL1xuICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdTY2FsZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUV2ZW50fHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdXBwb3J0c1ByZXNzUmlwcGxlXygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9XG4gICAqL1xuICBkZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcblxuICAgIHRoaXMucmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpO1xuXG4gICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhST09UKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlcyBuZWVkIGxheW91dCBsb2dpYyBhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIHNldCBjb29yZGluYXRlcyBmb3IgYm90aCBzaGFkZSBhbmQgcmlwcGxlXG4gICAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCkpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2YXRpb25UaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoUk9PVCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudH0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSkge1xuICAgIGlmIChlLnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpIHtcbiAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcmVtb3ZlQ3NzVmFyc18oKSB7XG4gICAgY29uc3Qge3N0cmluZ3N9ID0gTURDUmlwcGxlRm91bmRhdGlvbjtcbiAgICBPYmplY3Qua2V5cyhzdHJpbmdzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBpZiAoay5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShzdHJpbmdzW2tdLCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFjdGl2YXRlXyhlKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgIGNvbnN0IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgY29uc3QgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBlICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZS50eXBlO1xuICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZSA9PT0gdW5kZWZpbmVkO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IGUgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICBlLnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3BvaW50ZXJkb3duJ1xuICAgICk7XG5cbiAgICBjb25zdCBoYXNBY3RpdmF0ZWRDaGlsZCA9IGUgIT09IHVuZGVmaW5lZCAmJiBhY3RpdmF0ZWRUYXJnZXRzLmxlbmd0aCA+IDAgJiYgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKFxuICAgICAgKHRhcmdldCkgPT4gdGhpcy5hZGFwdGVyXy5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkpO1xuICAgIGlmIChoYXNBY3RpdmF0ZWRDaGlsZCkge1xuICAgICAgLy8gSW1tZWRpYXRlbHkgcmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSwgd2hpbGUgcHJlc2VydmluZyBsb2dpYyB0aGF0IHByZXZlbnRzIHRvdWNoIGZvbGxvdy1vbiBldmVudHNcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKC8qKiBAdHlwZSB7IUV2ZW50VGFyZ2V0fSAqLyAoZS50YXJnZXQpKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSAmJiBlICE9PSB1bmRlZmluZWQgJiYgKGUua2V5ID09PSAnICcgfHwgZS5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgLy8gYWN0aXZlIHN0YXRlcyBpbmNvbnNpc3RlbnRseSB3aGVuIHRoZXkncmUgY2FsbGVkIHdpdGhpbiBldmVudCBoYW5kbGluZyBjb2RlOlxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgLy8gV2UgdHJ5IGZpcnN0IG91dHNpZGUgckFGIHRvIHN1cHBvcnQgRWRnZSwgd2hpY2ggZG9lcyBub3QgZXhoaWJpdCB0aGlzIHByb2JsZW0sIGJ1dCB3aWxsIGNyYXNoIGlmIGEgQ1NTXG4gICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSkge1xuICAgIHJldHVybiAoZSAhPT0gdW5kZWZpbmVkICYmIGUudHlwZSA9PT0gJ2tleWRvd24nKSA/IHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlQWN0aXZlKCkgOiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZXZlbnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICovXG4gIGFjdGl2YXRlKGV2ZW50KSB7XG4gICAgdGhpcy5hY3RpdmF0ZV8oZXZlbnQpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGFuaW1hdGVBY3RpdmF0aW9uXygpIHtcbiAgICBjb25zdCB7VkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtERUFDVElWQVRJT05fVElNRU9VVF9NU30gPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnM7XG5cbiAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuXG4gICAgbGV0IHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgbGV0IHRyYW5zbGF0ZUVuZCA9ICcnO1xuXG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIGNvbnN0IHtzdGFydFBvaW50LCBlbmRQb2ludH0gPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKTtcbiAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gYCR7c3RhcnRQb2ludC54fXB4LCAke3N0YXJ0UG9pbnQueX1weGA7XG4gICAgICB0cmFuc2xhdGVFbmQgPSBgJHtlbmRQb2ludC54fXB4LCAke2VuZFBvaW50Lnl9cHhgO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuXG4gICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm4ge3tzdGFydFBvaW50OiBQb2ludFR5cGUsIGVuZFBvaW50OiBQb2ludFR5cGV9fVxuICAgKi9cbiAgZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpIHtcbiAgICBjb25zdCB7YWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXJ9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuXG4gICAgbGV0IHN0YXJ0UG9pbnQ7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhcbiAgICAgICAgLyoqIEB0eXBlIHshRXZlbnR9ICovIChhY3RpdmF0aW9uRXZlbnQpLFxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICBjb25zdCBlbmRQb2ludCA9IHtcbiAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtzdGFydFBvaW50LCBlbmRQb2ludH07XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCkge1xuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtoYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWR9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGNvbnN0IGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcblxuICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKSB7XG4gICAgY29uc3Qge0ZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gIH1cblxuICByZXNldEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQsIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZWFjdGl2YXRlXygpIHtcbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSAvKiogQHR5cGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqLyAoT2JqZWN0LmFzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKSk7XG5cbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSkpO1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9IG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFuaW1hdGVEZWFjdGl2YXRpb25fKHt3YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlfSkge1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfVxuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgIH1cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGxheW91dEludGVybmFsXygpIHtcbiAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIGNvbnN0IG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuXG4gICAgLy8gU3VyZmFjZSBkaWFtZXRlciBpcyB0cmVhdGVkIGRpZmZlcmVudGx5IGZvciB1bmJvdW5kZWQgdnMuIGJvdW5kZWQgcmlwcGxlcy5cbiAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAvLyBzcXVhcmUpLiBCb3VuZGVkIHJpcHBsZXMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgZnVsbHkgZXhwZWN0ZWQgdG8gZXhwYW5kIGJleW9uZCB0aGUgc3VyZmFjZSdzIGxvbmdlc3QgZGlhbWV0ZXJcbiAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgIGNvbnN0IGdldEJvdW5kZWRSYWRpdXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMuZnJhbWVfLndpZHRoLCAyKSArIE1hdGgucG93KHRoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICB9O1xuXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpID8gbWF4RGltIDogZ2V0Qm91bmRlZFJhZGl1cygpO1xuXG4gICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICB0aGlzLmluaXRpYWxTaXplXyA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICB0aGlzLmZnU2NhbGVfID0gdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG5cbiAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgdXBkYXRlTGF5b3V0Q3NzVmFyc18oKSB7XG4gICAgY29uc3Qge1xuICAgICAgVkFSX0ZHX1NJWkUsIFZBUl9MRUZULCBWQVJfVE9QLCBWQVJfRkdfU0NBTEUsXG4gICAgfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIGAke3RoaXMuaW5pdGlhbFNpemVffXB4YCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnR9cHhgKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcH1weGApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXRVbmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgY29uc3Qge1VOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRm9jdXMoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKSk7XG4gIH1cblxuICBoYW5kbGVCbHVyKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCBNRENSaXBwbGVGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQGV4dGVuZHMgTURDQ29tcG9uZW50PCFNRENSaXBwbGVGb3VuZGF0aW9uPlxuICovXG5jbGFzcyBNRENSaXBwbGUgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKiogQHBhcmFtIHsuLi4/fSBhcmdzICovXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHt7aXNVbmJvdW5kZWQ6IChib29sZWFufHVuZGVmaW5lZCl9PX0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QsIHtpc1VuYm91bmRlZCA9IHVuZGVmaW5lZH0gPSB7fSkge1xuICAgIGNvbnN0IHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgLy8gT25seSBvdmVycmlkZSB1bmJvdW5kZWQgYmVoYXZpb3IgaWYgb3B0aW9uIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgaWYgKGlzVW5ib3VuZGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSAvKiogQHR5cGUge2Jvb2xlYW59ICovIChpc1VuYm91bmRlZCk7XG4gICAgfVxuICAgIHJldHVybiByaXBwbGU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshUmlwcGxlQ2FwYWJsZVN1cmZhY2V9IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUFkYXB0ZXIoaW5zdGFuY2UpIHtcbiAgICBjb25zdCBNQVRDSEVTID0gdXRpbC5nZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyksXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gaW5zdGFuY2UudW5ib3VuZGVkLFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiBpbnN0YW5jZS5yb290X1tNQVRDSEVTXSgnOmFjdGl2ZScpLFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IGluc3RhbmNlLmRpc2FibGVkLFxuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiAodGFyZ2V0KSA9PiBpbnN0YW5jZS5yb290Xy5jb250YWlucyh0YXJnZXQpLFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpLFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gaW5zdGFuY2Uucm9vdF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAoe3g6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0fSksXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgdW5ib3VuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0IHVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICB0aGlzLnVuYm91bmRlZF8gPSBCb29sZWFuKHVuYm91bmRlZCk7XG4gICAgdGhpcy5zZXRVbmJvdW5kZWRfKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc3VyZSBDb21waWxlciB0aHJvd3MgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3Igd2hlbiBkaXJlY3RseSBhY2Nlc3NpbmcgYVxuICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICogQnkgYWNjZXNzaW5nIHRoZSBwcm90ZWN0ZWQgcHJvcGVydHkgaW5zaWRlIGEgbWV0aG9kLCB3ZSBzb2x2ZSB0aGF0IHByb2JsZW0uXG4gICAqIFRoYXQncyB3aHkgdGhpcyBmdW5jdGlvbiBleGlzdHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRVbmJvdW5kZWRfKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VW5ib3VuZGVkKHRoaXMudW5ib3VuZGVkXyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUZvdW5kYXRpb259XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMudW5ib3VuZGVkID0gJ21kY1JpcHBsZUlzVW5ib3VuZGVkJyBpbiB0aGlzLnJvb3RfLmRhdGFzZXQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTZWUgTWF0ZXJpYWwgRGVzaWduIHNwZWMgZm9yIG1vcmUgZGV0YWlscyBvbiB3aGVuIHRvIHVzZSByaXBwbGVzLlxuICogaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL21vdGlvbi9jaG9yZW9ncmFwaHkuaHRtbCNjaG9yZW9ncmFwaHktY3JlYXRpb25cbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgUmlwcGxlQ2FwYWJsZVN1cmZhY2Uge31cblxuLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLnJvb3RfO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgYmxlZWRzIG91dCBvZiB0aGUgYm91bmRzIG9mIHRoZSBlbGVtZW50LlxuICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUudW5ib3VuZGVkO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgaXMgYXR0YWNoZWQgdG8gYSBkaXNhYmxlZCBjb21wb25lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS5kaXNhYmxlZDtcblxuZXhwb3J0IHtNRENSaXBwbGUsIE1EQ1JpcHBsZUZvdW5kYXRpb24sIFJpcHBsZUNhcGFibGVTdXJmYWNlLCB1dGlsfTtcbiIsImltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2luZGV4J1xuaW1wb3J0IHtcbiAgc3VwcG9ydHNDc3NWYXJpYWJsZXMsXG4gIGdldE1hdGNoZXNQcm9wZXJ0eSxcbiAgYXBwbHlQYXNzaXZlXG59IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvdXRpbCdcblxuZXhwb3J0IGNsYXNzIFJpcHBsZUJhc2UgZXh0ZW5kcyBNRENSaXBwbGVGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBNQVRDSEVTKCkge1xuICAgIC8qIGdsb2JhbCBIVE1MRWxlbWVudCAqL1xuICAgIHJldHVybiAoXG4gICAgICBSaXBwbGVCYXNlLl9tYXRjaGVzIHx8XG4gICAgICAoUmlwcGxlQmFzZS5fbWF0Y2hlcyA9IGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpKVxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cmZhY2VBY3RpdmUocmVmKSB7XG4gICAgcmV0dXJuIHJlZltSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZtLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbFtSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRkZWxldGUodm0uY2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogdGFyZ2V0ID0+IHZtLiRlbC5jb250YWlucyh0YXJnZXQpLFxuICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uc3R5bGVzLCB2YXJOYW1lLCB2YWx1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFJpcHBsZU1peGluID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzKVxuICAgIHRoaXMucmlwcGxlLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxjdXN0b20tZWxlbWVudCBcbiAgICA6dGFnPVwidGFnXCIgXG4gICAgOmNsYXNzZXM9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGVzPVwic3R5bGVzXCIgXG4gICAgY2xhc3M9XCJtZGMtcmlwcGxlXCI+XG4gICAgPHNsb3QgLz5cbiAgPC9jdXN0b20tZWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBDdXN0b21FbGVtZW50TWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlTWl4aW4gfSBmcm9tICcuL21kYy1yaXBwbGUtYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXJpcHBsZScsXG4gIG1peGluczogW0N1c3RvbUVsZW1lbnRNaXhpbiwgUmlwcGxlTWl4aW5dLFxuICBwcm9wczoge1xuICAgIHRhZzogU3RyaW5nXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxyXG4gIDxjdXN0b20tbGlua1xyXG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiXHJcbiAgICA6c3R5bGU9XCJzdHlsZXNcIlxyXG4gICAgOmxpbms9XCJsaW5rXCJcclxuICAgIGNsYXNzPVwibWRjLXRhYlwiXHJcbiAgICBAY2xpY2s9XCJoYW5kbGVDbGlja1wiXHJcbiAgICByb2xlPVwidGFiXCJcclxuICAgIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiXHJcbiAgICB0YWJpbmRleD1cIi0xXCJcclxuICA+XHJcbiAgICA8c3BhbiByZWY9XCJjb250ZW50XCIgY2xhc3M9XCJtZGMtdGFiX19jb250ZW50XCI+XHJcbiAgICAgIDxpXHJcbiAgICAgICAgdi1pZj1cIiEhaGFzSWNvblwiXHJcbiAgICAgICAgcmVmPVwiaWNvblwiXHJcbiAgICAgICAgOmNsYXNzPVwiaGFzSWNvbi5jbGFzc2VzXCJcclxuICAgICAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgIGNsYXNzPVwibWRjLXRhYl9faWNvblwiXHJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzbG90IG5hbWU9XCJpY29uXCI+e3sgaGFzSWNvbi5jb250ZW50IH19PC9zbG90PlxyXG4gICAgICA8L2k+XHJcblxyXG4gICAgICA8c3BhbiB2LWlmPVwiaGFzVGV4dFwiIGNsYXNzPVwibWRjLXRhYl9fdGV4dC1sYWJlbFwiPiA8c2xvdCAvPiA8L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcblxyXG4gICAgPG1kYy10YWItaW5kaWNhdG9yIHJlZj1cInRhYkluZGljYXRvclwiPjwvbWRjLXRhYi1pbmRpY2F0b3I+XHJcbiAgICA8bWRjLXRhYi1yaXBwbGU+PC9tZGMtdGFiLXJpcHBsZT5cclxuICA8L2N1c3RvbS1saW5rPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IE1EQ1RhYkZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL3RhYi9mb3VuZGF0aW9uJ1xyXG5pbXBvcnQge1xyXG4gIEN1c3RvbUxpbmtNaXhpbixcclxuICBEaXNwYXRjaEV2ZW50TWl4aW4sXHJcbiAgZW1pdEN1c3RvbUV2ZW50LFxyXG4gIGV4dHJhY3RJY29uUHJvcFxyXG59IGZyb20gJy4uL2Jhc2UnXHJcbmltcG9ydCB7IFJpcHBsZUJhc2UgfSBmcm9tICcuLi9yaXBwbGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ21kYy10YWInLFxyXG4gIG1peGluczogW0N1c3RvbUxpbmtNaXhpbiwgRGlzcGF0Y2hFdmVudE1peGluXSxcclxuICBwcm9wczoge1xyXG4gICAgYWN0aXZlOiBCb29sZWFuLFxyXG4gICAgaWNvbjogW1N0cmluZywgQXJyYXksIE9iamVjdF0sXHJcbiAgICBzdGFja2VkOiBCb29sZWFuLFxyXG4gICAgbWluV2lkdGg6IEJvb2xlYW5cclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjbGFzc2VzOiB7XHJcbiAgICAgICAgJ21kYy10YWItLXN0YWNrZWQnOiB0aGlzLnN0YWNrZWQsXHJcbiAgICAgICAgJ21kYy10YWItLW1pbi13aWR0aCc6IHRoaXMubWluV2lkdGhcclxuICAgICAgfSxcclxuICAgICAgc3R5bGVzOiB7fVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGluamVjdDogWydtZGNUYWJCYXInXSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgaGFzSWNvbigpIHtcclxuICAgICAgaWYgKHRoaXMuaWNvbiB8fCB0aGlzLiRzbG90cy5pY29uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWNvbiA/IGV4dHJhY3RJY29uUHJvcCh0aGlzLmljb24pIDoge31cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0sXHJcbiAgICBoYXNUZXh0KCkge1xyXG4gICAgICByZXR1cm4gISF0aGlzLiRzbG90cy5kZWZhdWx0XHJcbiAgICB9XHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgYWN0aXZlKHZhbHVlKSB7fVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENUYWJGb3VuZGF0aW9uKHtcclxuICAgICAgc2V0QXR0cjogKGF0dHIsIHZhbHVlKSA9PiB0aGlzLiRlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpLFxyXG4gICAgICBhZGRDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSksXHJcbiAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZGVsZXRlKHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lKSxcclxuICAgICAgaGFzQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcclxuICAgICAgYWN0aXZhdGVJbmRpY2F0b3I6IHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCA9PiB7XHJcbiAgICAgICAgdGhpcy4kcmVmcy50YWJJbmRpY2F0b3IuYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KVxyXG4gICAgICB9LFxyXG4gICAgICBkZWFjdGl2YXRlSW5kaWNhdG9yOiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4kcmVmcy50YWJJbmRpY2F0b3IuZGVhY3RpdmF0ZSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIG5vdGlmeUludGVyYWN0ZWQ6ICgpID0+XHJcbiAgICAgICAgZW1pdEN1c3RvbUV2ZW50KFxyXG4gICAgICAgICAgdGhpcy4kZWwsXHJcbiAgICAgICAgICBNRENUYWJGb3VuZGF0aW9uLnN0cmluZ3MuSU5URVJBQ1RFRF9FVkVOVCxcclxuICAgICAgICAgIHsgdGFiOiB0aGlzIH0sXHJcbiAgICAgICAgICB0cnVlIC8qIGJ1YmJsZSAqL1xyXG4gICAgICAgICksXHJcbiAgICAgIGdldE9mZnNldExlZnQ6ICgpID0+IHRoaXMuJGVsLm9mZnNldExlZnQsXHJcbiAgICAgIGdldE9mZnNldFdpZHRoOiAoKSA9PiB0aGlzLiRlbC5vZmZzZXRXaWR0aCxcclxuICAgICAgZ2V0Q29udGVudE9mZnNldExlZnQ6ICgpID0+IHRoaXMuJHJlZnMuY29udGVudC5vZmZzZXRMZWZ0LFxyXG4gICAgICBnZXRDb250ZW50T2Zmc2V0V2lkdGg6ICgpID0+IHRoaXMuJHJlZnMuY29udGVudC5vZmZzZXRXaWR0aCxcclxuICAgICAgZm9jdXM6ICgpID0+IHRoaXMuJGVsLmZvY3VzKClcclxuICAgIH0pXHJcbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ3RhYiBtb3VudGVkJylcclxuXHJcbiAgICB0aGlzLm1kY1RhYkJhci50YWJMaXN0LnB1c2godGhpcylcclxuXHJcbiAgICAvLyB0aGlzLnNldEFjdGl2ZSh0aGlzLmFjdGl2ZSlcclxuICB9LFxyXG4gIGJlZm9yZURlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmZvdW5kYXRpb24uZGVzdHJveSgpXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhY3RpdmF0ZShjb21wdXRlSW5kaWNhdG9yQ2xpZW50UmVjdCkge1xyXG4gICAgICB0aGlzLmZvdW5kYXRpb24uYWN0aXZhdGUoY29tcHV0ZUluZGljYXRvckNsaWVudFJlY3QpXHJcbiAgICB9LFxyXG5cclxuICAgIGRlYWN0aXZhdGUoKSB7XHJcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5kZWFjdGl2YXRlKClcclxuICAgIH0sXHJcbiAgICBoYW5kbGVDbGljayhldnQpIHtcclxuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUNsaWNrKGV2dClcclxuICAgIH0sXHJcbiAgICBpc0FjdGl2ZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbi5pc0FjdGl2ZSgpXHJcbiAgICB9LFxyXG4gICAgc2V0QWN0aXZlKGlzQWN0aXZlKSB7XHJcbiAgICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsICdtZGMtdGFiLS1hY3RpdmUnLCB0cnVlKSxcclxuICAgICAgICAgIHRoaXMuJHJlZnMudGFiSW5kaWNhdG9yLmFjdGl2YXRlKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVJbmRpY2F0b3JDbGllbnRSZWN0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4kcmVmcy50YWJJbmRpY2F0b3IuY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KClcclxuICAgIH0sXHJcblxyXG4gICAgY29tcHV0ZURpbWVuc2lvbnMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb24uY29tcHV0ZURpbWVuc2lvbnMoKVxyXG4gICAgfSxcclxuXHJcbiAgICBmb2N1cygpIHtcclxuICAgICAgdGhpcy4kZWwuZm9jdXMoKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgVEFCX0FDVElWQVRFRF9FVkVOVDogJ01EQ1RhYkJhcjphY3RpdmF0ZWQnLFxuICBUQUJfU0NST0xMRVJfU0VMRUNUT1I6ICcubWRjLXRhYi1zY3JvbGxlcicsXG4gIFRBQl9TRUxFQ1RPUjogJy5tZGMtdGFiJyxcbiAgQVJST1dfTEVGVF9LRVk6ICdBcnJvd0xlZnQnLFxuICBBUlJPV19SSUdIVF9LRVk6ICdBcnJvd1JpZ2h0JyxcbiAgRU5EX0tFWTogJ0VuZCcsXG4gIEhPTUVfS0VZOiAnSG9tZScsXG4gIEVOVEVSX0tFWTogJ0VudGVyJyxcbiAgU1BBQ0VfS0VZOiAnU3BhY2UnLFxufTtcblxuLyoqIEBlbnVtIHtudW1iZXJ9ICovXG5jb25zdCBudW1iZXJzID0ge1xuICBFWFRSQV9TQ1JPTExfQU1PVU5UOiAyMCxcbiAgQVJST1dfTEVGVF9LRVlDT0RFOiAzNyxcbiAgQVJST1dfUklHSFRfS0VZQ09ERTogMzksXG4gIEVORF9LRVlDT0RFOiAzNSxcbiAgSE9NRV9LRVlDT0RFOiAzNixcbiAgRU5URVJfS0VZQ09ERTogMTMsXG4gIFNQQUNFX0tFWUNPREU6IDMyLFxufTtcblxuZXhwb3J0IHtcbiAgbnVtYmVycyxcbiAgc3RyaW5ncyxcbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRhYiBJbmRpY2F0b3IuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGFiIEluZGljYXRvciBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDVGFiSW5kaWNhdG9yQWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIHRoZSBnaXZlbiBjbGFzc05hbWUgdG8gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3NOYW1lIHRvIGFkZFxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBjbGFzc05hbWUgZnJvbSB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzc05hbWUgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNsaWVudCByZWN0IG9mIHRoZSBjb250ZW50IGVsZW1lbnQuXG4gICAqIEByZXR1cm4geyFDbGllbnRSZWN0fVxuICAgKi9cbiAgY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCkge31cblxuICAvKipcbiAgICogU2V0cyBhIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBjb250ZW50IGVsZW1lbnQgdG8gdGhlIHBhc3NlZCB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcE5hbWUgVGhlIHN0eWxlIHByb3BlcnR5IG5hbWUgdG8gc2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgc3R5bGUgcHJvcGVydHkgdmFsdWVcbiAgICovXG4gIHNldENvbnRlbnRTdHlsZVByb3BlcnR5KHByb3BOYW1lLCB2YWx1ZSkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGFiSW5kaWNhdG9yQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIEFDVElWRTogJ21kYy10YWItaW5kaWNhdG9yLS1hY3RpdmUnLFxuICBGQURFOiAnbWRjLXRhYi1pbmRpY2F0b3ItLWZhZGUnLFxuICBOT19UUkFOU0lUSU9OOiAnbWRjLXRhYi1pbmRpY2F0b3ItLW5vLXRyYW5zaXRpb24nLFxufTtcblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBzdHJpbmdzID0ge1xuICBDT05URU5UX1NFTEVDVE9SOiAnLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50Jyxcbn07XG5cbmV4cG9ydCB7XG4gIGNzc0NsYXNzZXMsXG4gIHN0cmluZ3MsXG59O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1RhYkluZGljYXRvckFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7XG4gIGNzc0NsYXNzZXMsXG4gIHN0cmluZ3MsXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDVGFiSW5kaWNhdG9yQWRhcHRlcj59XG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzZWUgTURDVGFiSW5kaWNhdG9yQWRhcHRlciBmb3IgdHlwaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4geyFNRENUYWJJbmRpY2F0b3JBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiSW5kaWNhdG9yQWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdDogKCkgPT4ge30sXG4gICAgICBzZXRDb250ZW50U3R5bGVQcm9wZXJ0eTogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHshTURDVGFiSW5kaWNhdG9yQWRhcHRlcn0gYWRhcHRlciAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG4gIH1cblxuICAvKiogQHJldHVybiB7IUNsaWVudFJlY3R9ICovXG4gIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5jb21wdXRlQ29udGVudENsaWVudFJlY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluZGljYXRvclxuICAgKiBAcGFyYW0geyFDbGllbnRSZWN0PX0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0XG4gICAqIEBhYnN0cmFjdFxuICAgKi9cbiAgYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbiAgLyoqIEBhYnN0cmFjdCAqL1xuICBkZWFjdGl2YXRlKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9ufVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIGV4dGVuZHMgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiB7XG4gIC8qKiBAcGFyYW0geyFDbGllbnRSZWN0PX0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0ICovXG4gIGFjdGl2YXRlKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCkge1xuICAgIC8vIEVhcmx5IGV4aXQgaWYgbm8gaW5kaWNhdG9yIGlzIHByZXNlbnQgdG8gaGFuZGxlIGNhc2VzIHdoZXJlIGFuIGluZGljYXRvclxuICAgIC8vIG1heSBiZSBhY3RpdmF0ZWQgd2l0aG91dCBhIHByaW9yIGluZGljYXRvciBzdGF0ZVxuICAgIGlmICghcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoaXMgYW5pbWF0aW9uIHVzZXMgdGhlIEZMSVAgYXBwcm9hY2guIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IGl0IGF0IHRoZSBsaW5rIGJlbG93OlxuICAgIC8vIGh0dHBzOi8vYWVyb3R3aXN0LmNvbS9ibG9nL2ZsaXAteW91ci1hbmltYXRpb25zL1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkaW1lbnNpb25zIGJhc2VkIG9uIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBwcmV2aW91cyBpbmRpY2F0b3JcbiAgICBjb25zdCBjdXJyZW50Q2xpZW50UmVjdCA9IHRoaXMuY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgd2lkdGhEZWx0YSA9IHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdC53aWR0aCAvIGN1cnJlbnRDbGllbnRSZWN0LndpZHRoO1xuICAgIGNvbnN0IHhQb3NpdGlvbiA9IHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdC5sZWZ0IC0gY3VycmVudENsaWVudFJlY3QubGVmdDtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5OT19UUkFOU0lUSU9OKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldENvbnRlbnRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgke3hQb3NpdGlvbn1weCkgc2NhbGVYKCR7d2lkdGhEZWx0YX0pYCk7XG5cbiAgICAvLyBGb3JjZSByZXBhaW50IGJlZm9yZSB1cGRhdGluZyBjbGFzc2VzIGFuZCB0cmFuc2Zvcm0gdG8gZW5zdXJlIHRoZSB0cmFuc2Zvcm0gcHJvcGVybHkgdGFrZXMgZWZmZWN0XG4gICAgdGhpcy5jb21wdXRlQ29udGVudENsaWVudFJlY3QoKTtcblxuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLk5PX1RSQU5TSVRJT04pO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFDVElWRSk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRDb250ZW50U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJywgJycpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ1RhYkluZGljYXRvckZvdW5kYXRpb259XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDRmFkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbiBleHRlbmRzIE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24ge1xuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZhZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuXG5pbXBvcnQgTURDVGFiSW5kaWNhdG9yQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuaW1wb3J0IE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIGZyb20gJy4vc2xpZGluZy1mb3VuZGF0aW9uJztcbmltcG9ydCBNRENGYWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIGZyb20gJy4vZmFkaW5nLWZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENDb21wb25lbnQ8IU1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RhYkluZGljYXRvciBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENUYWJJbmRpY2F0b3J9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIHJldHVybiBuZXcgTURDVGFiSW5kaWNhdG9yKHJvb3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uP30gYXJnc1xuICAgKi9cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIC8qKiBAdHlwZSB7P0VsZW1lbnR9ICovXG4gICAgdGhpcy5jb250ZW50XztcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5jb250ZW50XyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLnN0cmluZ3MuQ09OVEVOVF9TRUxFQ1RPUik7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUNsaWVudFJlY3R9XG4gICAqL1xuICBjb21wdXRlQ29udGVudENsaWVudFJlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RhYkluZGljYXRvckZvdW5kYXRpb259XG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICBjb25zdCBhZGFwdGVyID0gLyoqIEB0eXBlIHshTURDVGFiSW5kaWNhdG9yQWRhcHRlcn0gKi8gKE9iamVjdC5hc3NpZ24oe1xuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0OiAoKSA9PiB0aGlzLmNvbnRlbnRfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgc2V0Q29udGVudFN0eWxlUHJvcGVydHk6IChwcm9wLCB2YWx1ZSkgPT4gdGhpcy5jb250ZW50Xy5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCB2YWx1ZSksXG4gICAgfSkpO1xuXG4gICAgaWYgKHRoaXMucm9vdF8uY2xhc3NMaXN0LmNvbnRhaW5zKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GQURFKSkge1xuICAgICAgcmV0dXJuIG5ldyBNRENGYWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gdGhlIHNsaWRpbmcgaW5kaWNhdG9yXG4gICAgcmV0dXJuIG5ldyBNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFDbGllbnRSZWN0PX0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0XG4gICAqL1xuICBhY3RpdmF0ZShwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICB9XG59XG5cbmV4cG9ydCB7TURDVGFiSW5kaWNhdG9yLCBNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLCBNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbiwgTURDRmFkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtNRENSaXBwbGUsIE1EQ1JpcHBsZUZvdW5kYXRpb24sIFJpcHBsZUNhcGFibGVTdXJmYWNlfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2luZGV4JztcbmltcG9ydCB7TURDVGFiSW5kaWNhdG9yLCBNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9ufSBmcm9tICdAbWF0ZXJpYWwvdGFiLWluZGljYXRvci9pbmRleCc7XG5pbXBvcnQge01EQ1RhYkFkYXB0ZXIsIE1EQ1RhYkRpbWVuc2lvbnN9IGZyb20gJy4vYWRhcHRlcic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbmltcG9ydCBNRENUYWJGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0NvbXBvbmVudDwhTURDVGFiRm91bmRhdGlvbj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGFiIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uP30gYXJnc1xuICAgKi9cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIC8qKiBAcHJpdmF0ZSB7P01EQ1JpcHBsZX0gKi9cbiAgICB0aGlzLnJpcHBsZV87XG4gICAgLyoqIEBwcml2YXRlIHs/TURDVGFiSW5kaWNhdG9yfSAqL1xuICAgIHRoaXMudGFiSW5kaWNhdG9yXztcbiAgICAvKiogQHByaXZhdGUgez9FbGVtZW50fSAqL1xuICAgIHRoaXMuY29udGVudF87XG5cbiAgICAvKiogQHByaXZhdGUgez9GdW5jdGlvbn0gKi9cbiAgICB0aGlzLmhhbmRsZUNsaWNrXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENUYWJ9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIHJldHVybiBuZXcgTURDVGFiKHJvb3QpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZShcbiAgICByaXBwbGVGYWN0b3J5ID0gKGVsLCBmb3VuZGF0aW9uKSA9PiBuZXcgTURDUmlwcGxlKGVsLCBmb3VuZGF0aW9uKSxcbiAgICB0YWJJbmRpY2F0b3JGYWN0b3J5ID0gKGVsKSA9PiBuZXcgTURDVGFiSW5kaWNhdG9yKGVsKSkge1xuICAgIGNvbnN0IHJpcHBsZVN1cmZhY2UgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoTURDVGFiRm91bmRhdGlvbi5zdHJpbmdzLlJJUFBMRV9TRUxFQ1RPUik7XG4gICAgY29uc3QgcmlwcGxlQWRhcHRlciA9IE9iamVjdC5hc3NpZ24oTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIoLyoqIEB0eXBlIHshUmlwcGxlQ2FwYWJsZVN1cmZhY2V9ICovICh0aGlzKSksIHtcbiAgICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiByaXBwbGVTdXJmYWNlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiByaXBwbGVTdXJmYWNlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IHJpcHBsZVN1cmZhY2Uuc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpLFxuICAgIH0pO1xuICAgIGNvbnN0IHJpcHBsZUZvdW5kYXRpb24gPSBuZXcgTURDUmlwcGxlRm91bmRhdGlvbihyaXBwbGVBZGFwdGVyKTtcbiAgICB0aGlzLnJpcHBsZV8gPSByaXBwbGVGYWN0b3J5KHRoaXMucm9vdF8sIHJpcHBsZUZvdW5kYXRpb24pO1xuXG4gICAgY29uc3QgdGFiSW5kaWNhdG9yRWxlbWVudCA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihNRENUYWJGb3VuZGF0aW9uLnN0cmluZ3MuVEFCX0lORElDQVRPUl9TRUxFQ1RPUik7XG4gICAgdGhpcy50YWJJbmRpY2F0b3JfID0gdGFiSW5kaWNhdG9yRmFjdG9yeSh0YWJJbmRpY2F0b3JFbGVtZW50KTtcblxuICAgIHRoaXMuY29udGVudF8gPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoTURDVGFiRm91bmRhdGlvbi5zdHJpbmdzLkNPTlRFTlRfU0VMRUNUT1IpO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMuaGFuZGxlQ2xpY2tfID0gdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVDbGljay5iaW5kKHRoaXMuZm91bmRhdGlvbl8pO1xuICAgIHRoaXMubGlzdGVuKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2tfKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy51bmxpc3RlbignY2xpY2snLCAvKiogQHR5cGUgeyFGdW5jdGlvbn0gKi8gKHRoaXMuaGFuZGxlQ2xpY2tfKSk7XG4gICAgdGhpcy5yaXBwbGVfLmRlc3Ryb3koKTtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RhYkZvdW5kYXRpb259XG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1RhYkZvdW5kYXRpb24oXG4gICAgICAvKiogQHR5cGUgeyFNRENUYWJBZGFwdGVyfSAqLyAoe1xuICAgICAgICBzZXRBdHRyOiAoYXR0ciwgdmFsdWUpID0+IHRoaXMucm9vdF8uc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKSxcbiAgICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IHRoaXMucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICAgIGhhc0NsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgICBhY3RpdmF0ZUluZGljYXRvcjogKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCkgPT4gdGhpcy50YWJJbmRpY2F0b3JfLmFjdGl2YXRlKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCksXG4gICAgICAgIGRlYWN0aXZhdGVJbmRpY2F0b3I6ICgpID0+IHRoaXMudGFiSW5kaWNhdG9yXy5kZWFjdGl2YXRlKCksXG4gICAgICAgIG5vdGlmeUludGVyYWN0ZWQ6ICgpID0+IHRoaXMuZW1pdChNRENUYWJGb3VuZGF0aW9uLnN0cmluZ3MuSU5URVJBQ1RFRF9FVkVOVCwge3RhYjogdGhpc30sIHRydWUgLyogYnViYmxlICovKSxcbiAgICAgICAgZ2V0T2Zmc2V0TGVmdDogKCkgPT4gdGhpcy5yb290Xy5vZmZzZXRMZWZ0LFxuICAgICAgICBnZXRPZmZzZXRXaWR0aDogKCkgPT4gdGhpcy5yb290Xy5vZmZzZXRXaWR0aCxcbiAgICAgICAgZ2V0Q29udGVudE9mZnNldExlZnQ6ICgpID0+IHRoaXMuY29udGVudF8ub2Zmc2V0TGVmdCxcbiAgICAgICAgZ2V0Q29udGVudE9mZnNldFdpZHRoOiAoKSA9PiB0aGlzLmNvbnRlbnRfLm9mZnNldFdpZHRoLFxuICAgICAgICBmb2N1czogKCkgPT4gdGhpcy5yb290Xy5mb2N1cygpLFxuICAgICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGhlIGFjdGl2ZSBzdGF0ZSBvZiB0aGUgdGFiXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgYWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmlzQWN0aXZlKCk7XG4gIH1cblxuICBzZXQgZm9jdXNPbkFjdGl2YXRlKGZvY3VzT25BY3RpdmF0ZSkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0Rm9jdXNPbkFjdGl2YXRlKGZvY3VzT25BY3RpdmF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSB0YWJcbiAgICogQHBhcmFtIHshQ2xpZW50UmVjdD19IGNvbXB1dGVJbmRpY2F0b3JDbGllbnRSZWN0XG4gICAqL1xuICBhY3RpdmF0ZShjb21wdXRlSW5kaWNhdG9yQ2xpZW50UmVjdCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uYWN0aXZhdGUoY29tcHV0ZUluZGljYXRvckNsaWVudFJlY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSB0YWJcbiAgICovXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZWFjdGl2YXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kaWNhdG9yJ3MgY2xpZW50IHJlY3RcbiAgICogQHJldHVybiB7IUNsaWVudFJlY3R9XG4gICAqL1xuICBjb21wdXRlSW5kaWNhdG9yQ2xpZW50UmVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy50YWJJbmRpY2F0b3JfLmNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENUYWJEaW1lbnNpb25zfVxuICAgKi9cbiAgY29tcHV0ZURpbWVuc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uY29tcHV0ZURpbWVuc2lvbnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIHRoZSB0YWJcbiAgICovXG4gIGZvY3VzKCkge1xuICAgIHRoaXMucm9vdF8uZm9jdXMoKTtcbiAgfVxufVxuXG5leHBvcnQge01EQ1RhYiwgTURDVGFiRm91bmRhdGlvbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1RhYkRpbWVuc2lvbnN9IGZyb20gJ0BtYXRlcmlhbC90YWIvYWRhcHRlcic7XG5pbXBvcnQge01EQ1RhYn0gZnJvbSAnQG1hdGVyaWFsL3RhYi9pbmRleCc7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRhYiBCYXIuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGFiIEJhciBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDVGFiQmFyQWRhcHRlciB7XG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIHRoZSBnaXZlbiBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgcG9zaXRpb24gdG8gc2Nyb2xsIHRvXG4gICAqL1xuICBzY3JvbGxUbyhzY3JvbGxYKSB7fVxuXG4gIC8qKlxuICAgKiBJbmNyZW1lbnRzIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBieSB0aGUgZ2l2ZW4gYW1vdW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYSW5jcmVtZW50IFRoZSBhbW91bnQgdG8gaW5jcmVtZW50IHNjcm9sbFxuICAgKi9cbiAgaW5jcmVtZW50U2Nyb2xsKHNjcm9sbFhJbmNyZW1lbnQpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd2lkdGggb2YgdGhlIHNjcm9sbCBjb250ZW50XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbENvbnRlbnRXaWR0aCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJvb3QgZWxlbWVudCdzIG9mZnNldFdpZHRoXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldE9mZnNldFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyBpZiB0aGUgVGFiIEJhciBsYW5ndWFnZSBkaXJlY3Rpb24gaXMgUlRMXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc1JUTCgpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggdG8gYmUgYWN0aXZhdGVkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYiB0byBhY3RpdmF0ZVxuICAgKi9cbiAgc2V0QWN0aXZlVGFiKGluZGV4KSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggd2l0aCB0aGUgZ2l2ZW4gY2xpZW50IHJlY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiIHRvIGFjdGl2YXRlXG4gICAqIEBwYXJhbSB7IUNsaWVudFJlY3R9IGNsaWVudFJlY3QgVGhlIGNsaWVudCByZWN0IG9mIHRoZSBwcmV2aW91c2x5IGFjdGl2ZSBUYWIgSW5kaWNhdG9yXG4gICAqL1xuICBhY3RpdmF0ZVRhYkF0SW5kZXgoaW5kZXgsIGNsaWVudFJlY3QpIHt9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYiB0byBkZWFjdGl2YXRlXG4gICAqL1xuICBkZWFjdGl2YXRlVGFiQXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWIgdG8gZm9jdXNcbiAgICovXG4gIGZvY3VzVGFiQXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2xpZW50IHJlY3Qgb2YgdGhlIHRhYidzIGluZGljYXRvclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICogQHJldHVybiB7IUNsaWVudFJlY3R9XG4gICAqL1xuICBnZXRUYWJJbmRpY2F0b3JDbGllbnRSZWN0QXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGFiIGRpbWVuc2lvbnMgb2YgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiXG4gICAqIEByZXR1cm4geyFNRENUYWJEaW1lbnNpb25zfVxuICAgKi9cbiAgZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgoaW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgdGFiIGxpc3RcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0VGFiTGlzdExlbmd0aCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBwcmV2aW91c2x5IGFjdGl2ZSB0YWJcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0UHJldmlvdXNBY3RpdmVUYWJJbmRleCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmb2N1c2VkIHRhYlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRGb2N1c2VkVGFiSW5kZXgoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZ2l2ZW4gdGFiXG4gICAqIEBwYXJhbSB7IU1EQ1RhYn0gdGFiIFRoZSB0YWIgd2hvc2UgaW5kZXggdG8gZGV0ZXJtaW5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0SW5kZXhPZlRhYih0YWIpIHt9XG5cbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBNRENUYWJCYXI6YWN0aXZhdGVkIGV2ZW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGFjdGl2YXRlZCB0YWJcbiAgICovXG4gIG5vdGlmeVRhYkFjdGl2YXRlZChpbmRleCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGFiQmFyQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcblxuaW1wb3J0IHtzdHJpbmdzLCBudW1iZXJzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgTURDVGFiQmFyQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtNRENUYWJEaW1lbnNpb25zfSBmcm9tICdAbWF0ZXJpYWwvdGFiL2FkYXB0ZXInO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIEB0eXBlIHtTZXQ8c3RyaW5nPn1cbiAqL1xuY29uc3QgQUNDRVBUQUJMRV9LRVlTID0gbmV3IFNldCgpO1xuLy8gSUUxMSBoYXMgbm8gc3VwcG9ydCBmb3IgbmV3IFNldCB3aXRoIGl0ZXJhYmxlIHNvIHdlIG5lZWQgdG8gaW5pdGlhbGl6ZSB0aGlzIGJ5IGhhbmRcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5BUlJPV19MRUZUX0tFWSk7XG5BQ0NFUFRBQkxFX0tFWVMuYWRkKHN0cmluZ3MuQVJST1dfUklHSFRfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5FTkRfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5IT01FX0tFWSk7XG5BQ0NFUFRBQkxFX0tFWVMuYWRkKHN0cmluZ3MuRU5URVJfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5TUEFDRV9LRVkpO1xuXG4vKipcbiAqIEB0eXBlIHtNYXA8bnVtYmVyLCBzdHJpbmc+fVxuICovXG5jb25zdCBLRVlDT0RFX01BUCA9IG5ldyBNYXAoKTtcbi8vIElFMTEgaGFzIG5vIHN1cHBvcnQgZm9yIG5ldyBNYXAgd2l0aCBpdGVyYWJsZSBzbyB3ZSBuZWVkIHRvIGluaXRpYWxpemUgdGhpcyBieSBoYW5kXG5LRVlDT0RFX01BUC5zZXQobnVtYmVycy5BUlJPV19MRUZUX0tFWUNPREUsIHN0cmluZ3MuQVJST1dfTEVGVF9LRVkpO1xuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuQVJST1dfUklHSFRfS0VZQ09ERSwgc3RyaW5ncy5BUlJPV19SSUdIVF9LRVkpO1xuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuRU5EX0tFWUNPREUsIHN0cmluZ3MuRU5EX0tFWSk7XG5LRVlDT0RFX01BUC5zZXQobnVtYmVycy5IT01FX0tFWUNPREUsIHN0cmluZ3MuSE9NRV9LRVkpO1xuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuRU5URVJfS0VZQ09ERSwgc3RyaW5ncy5FTlRFUl9LRVkpO1xuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuU1BBQ0VfS0VZQ09ERSwgc3RyaW5ncy5TUEFDRV9LRVkpO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENUYWJCYXJBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUYWJCYXJGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7bnVtYmVyfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICAvKipcbiAgICogQHNlZSBNRENUYWJCYXJBZGFwdGVyIGZvciB0eXBpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7IU1EQ1RhYkJhckFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJCYXJBZGFwdGVyfSAqLyAoe1xuICAgICAgc2Nyb2xsVG86ICgpID0+IHt9LFxuICAgICAgaW5jcmVtZW50U2Nyb2xsOiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbFBvc2l0aW9uOiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbENvbnRlbnRXaWR0aDogKCkgPT4ge30sXG4gICAgICBnZXRPZmZzZXRXaWR0aDogKCkgPT4ge30sXG4gICAgICBpc1JUTDogKCkgPT4ge30sXG4gICAgICBzZXRBY3RpdmVUYWI6ICgpID0+IHt9LFxuICAgICAgYWN0aXZhdGVUYWJBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGRlYWN0aXZhdGVUYWJBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGZvY3VzVGFiQXRJbmRleDogKCkgPT4ge30sXG4gICAgICBnZXRUYWJJbmRpY2F0b3JDbGllbnRSZWN0QXRJbmRleDogKCkgPT4ge30sXG4gICAgICBnZXRUYWJEaW1lbnNpb25zQXRJbmRleDogKCkgPT4ge30sXG4gICAgICBnZXRQcmV2aW91c0FjdGl2ZVRhYkluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGdldEZvY3VzZWRUYWJJbmRleDogKCkgPT4ge30sXG4gICAgICBnZXRJbmRleE9mVGFiOiAoKSA9PiB7fSxcbiAgICAgIGdldFRhYkxpc3RMZW5ndGg6ICgpID0+IHt9LFxuICAgICAgbm90aWZ5VGFiQWN0aXZhdGVkOiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENUYWJCYXJBZGFwdGVyfSBhZGFwdGVyXG4gICAqICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1RhYkJhckZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLnVzZUF1dG9tYXRpY0FjdGl2YXRpb25fID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoZXMgYmV0d2VlbiBhdXRvbWF0aWMgYW5kIG1hbnVhbCBhY3RpdmF0aW9uIG1vZGVzLlxuICAgKiBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy8jdGFicGFuZWwgZm9yIGV4YW1wbGVzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZUF1dG9tYXRpY0FjdGl2YXRpb25cbiAgICovXG4gIHNldFVzZUF1dG9tYXRpY0FjdGl2YXRpb24odXNlQXV0b21hdGljQWN0aXZhdGlvbikge1xuICAgIHRoaXMudXNlQXV0b21hdGljQWN0aXZhdGlvbl8gPSB1c2VBdXRvbWF0aWNBY3RpdmF0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICovXG4gIGFjdGl2YXRlVGFiKGluZGV4KSB7XG4gICAgY29uc3QgcHJldmlvdXNBY3RpdmVJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0UHJldmlvdXNBY3RpdmVUYWJJbmRleCgpO1xuICAgIGlmICghdGhpcy5pbmRleElzSW5SYW5nZV8oaW5kZXgpIHx8IGluZGV4ID09PSBwcmV2aW91c0FjdGl2ZUluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5kZWFjdGl2YXRlVGFiQXRJbmRleChwcmV2aW91c0FjdGl2ZUluZGV4KTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFjdGl2YXRlVGFiQXRJbmRleChpbmRleCwgdGhpcy5hZGFwdGVyXy5nZXRUYWJJbmRpY2F0b3JDbGllbnRSZWN0QXRJbmRleChwcmV2aW91c0FjdGl2ZUluZGV4KSk7XG4gICAgdGhpcy5zY3JvbGxJbnRvVmlldyhpbmRleCk7XG5cbiAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeVRhYkFjdGl2YXRlZChpbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUga2V5ZG93biBldmVudFxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqL1xuICBoYW5kbGVLZXlEb3duKGV2dCkge1xuICAgIC8vIEdldCB0aGUga2V5IGZyb20gdGhlIGV2ZW50XG4gICAgY29uc3Qga2V5ID0gdGhpcy5nZXRLZXlGcm9tRXZlbnRfKGV2dCk7XG5cbiAgICAvLyBFYXJseSBleGl0IGlmIHRoZSBldmVudCBrZXkgaXNuJ3Qgb25lIG9mIHRoZSBrZXlib2FyZCBuYXZpZ2F0aW9uIGtleXNcbiAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50IGRlZmF1bHQgYmVoYXZpb3IgZm9yIG1vdmVtZW50IGtleXMsIGJ1dCBub3QgZm9yIGFjdGl2YXRpb24ga2V5cywgc2luY2UgOmFjdGl2ZSBpcyB1c2VkIHRvIGFwcGx5IHJpcHBsZVxuICAgIGlmICghdGhpcy5pc0FjdGl2YXRpb25LZXlfKGtleSkpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVzZUF1dG9tYXRpY0FjdGl2YXRpb25fKSB7XG4gICAgICBpZiAodGhpcy5pc0FjdGl2YXRpb25LZXlfKGtleSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGV0ZXJtaW5lVGFyZ2V0RnJvbUtleV8odGhpcy5hZGFwdGVyXy5nZXRQcmV2aW91c0FjdGl2ZVRhYkluZGV4KCksIGtleSk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEFjdGl2ZVRhYihpbmRleCk7XG4gICAgICB0aGlzLnNjcm9sbEludG9WaWV3KGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZm9jdXNlZFRhYkluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRGb2N1c2VkVGFiSW5kZXgoKTtcbiAgICAgIGlmICh0aGlzLmlzQWN0aXZhdGlvbktleV8oa2V5KSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEFjdGl2ZVRhYihmb2N1c2VkVGFiSW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRldGVybWluZVRhcmdldEZyb21LZXlfKGZvY3VzZWRUYWJJbmRleCwga2V5KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c1RhYkF0SW5kZXgoaW5kZXgpO1xuICAgICAgICB0aGlzLnNjcm9sbEludG9WaWV3KGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgTURDVGFiOmludGVyYWN0ZWQgZXZlbnRcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlVGFiSW50ZXJhY3Rpb24oZXZ0KSB7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBY3RpdmVUYWIodGhpcy5hZGFwdGVyXy5nZXRJbmRleE9mVGFiKGV2dC5kZXRhaWwudGFiKSk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCBpbnRvIHZpZXdcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSB0YWIgaW5kZXggdG8gbWFrZSB2aXNpYmxlXG4gICAqL1xuICBzY3JvbGxJbnRvVmlldyhpbmRleCkge1xuICAgIC8vIEVhcmx5IGV4aXQgaWYgdGhlIGluZGV4IGlzIG91dCBvZiByYW5nZVxuICAgIGlmICghdGhpcy5pbmRleElzSW5SYW5nZV8oaW5kZXgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQWx3YXlzIHNjcm9sbCB0byAwIGlmIHNjcm9sbGluZyB0byB0aGUgMHRoIGluZGV4XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5zY3JvbGxUbygwKTtcbiAgICB9XG5cbiAgICAvLyBBbHdheXMgc2Nyb2xsIHRvIHRoZSBtYXggdmFsdWUgaWYgc2Nyb2xsaW5nIHRvIHRoZSBOdGggaW5kZXhcbiAgICAvLyBNRENUYWJTY3JvbGxlci5zY3JvbGxUbygpIHdpbGwgbmV2ZXIgc2Nyb2xsIHBhc3QgdGhlIG1heCBwb3NzaWJsZSB2YWx1ZVxuICAgIGlmIChpbmRleCA9PT0gdGhpcy5hZGFwdGVyXy5nZXRUYWJMaXN0TGVuZ3RoKCkgLSAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5zY3JvbGxUbyh0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbENvbnRlbnRXaWR0aCgpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1JUTF8oKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsSW50b1ZpZXdSVExfKGluZGV4KTtcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbEludG9WaWV3XyhpbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogUHJpdmF0ZSBtZXRob2QgZm9yIGRldGVybWluaW5nIHRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gdGFiIGJhc2VkIG9uIHdoYXQga2V5IHdhcyBwcmVzc2VkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcmlnaW4gVGhlIG9yaWdpbmFsIGluZGV4IGZyb20gd2hpY2ggdG8gZGV0ZXJtaW5lIHRoZSBkZXN0aW5hdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBuYW1lIG9mIHRoZSBrZXlcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGV0ZXJtaW5lVGFyZ2V0RnJvbUtleV8ob3JpZ2luLCBrZXkpIHtcbiAgICBjb25zdCBpc1JUTCA9IHRoaXMuaXNSVExfKCk7XG4gICAgY29uc3QgbWF4SW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldFRhYkxpc3RMZW5ndGgoKSAtIDE7XG4gICAgY29uc3Qgc2hvdWxkR29Ub0VuZCA9IGtleSA9PT0gc3RyaW5ncy5FTkRfS0VZO1xuICAgIGNvbnN0IHNob3VsZERlY3JlbWVudCA9IGtleSA9PT0gc3RyaW5ncy5BUlJPV19MRUZUX0tFWSAmJiAhaXNSVEwgfHwga2V5ID09PSBzdHJpbmdzLkFSUk9XX1JJR0hUX0tFWSAmJiBpc1JUTDtcbiAgICBjb25zdCBzaG91bGRJbmNyZW1lbnQgPSBrZXkgPT09IHN0cmluZ3MuQVJST1dfUklHSFRfS0VZICYmICFpc1JUTCB8fCBrZXkgPT09IHN0cmluZ3MuQVJST1dfTEVGVF9LRVkgJiYgaXNSVEw7XG4gICAgbGV0IGluZGV4ID0gb3JpZ2luO1xuXG4gICAgaWYgKHNob3VsZEdvVG9FbmQpIHtcbiAgICAgIGluZGV4ID0gbWF4SW5kZXg7XG4gICAgfSBlbHNlIGlmIChzaG91bGREZWNyZW1lbnQpIHtcbiAgICAgIGluZGV4IC09IDE7XG4gICAgfSBlbHNlIGlmIChzaG91bGRJbmNyZW1lbnQpIHtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICBpbmRleCA9IG1heEluZGV4O1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPiBtYXhJbmRleCkge1xuICAgICAgaW5kZXggPSAwO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBzY3JvbGwgaW5jcmVtZW50IHRoYXQgd2lsbCBtYWtlIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4IHZpc2libGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZXh0SW5kZXggVGhlIGluZGV4IG9mIHRoZSBuZXh0IHRhYlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsUG9zaXRpb24gVGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBiYXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIFRhYiBCYXJcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsY3VsYXRlU2Nyb2xsSW5jcmVtZW50XyhpbmRleCwgbmV4dEluZGV4LCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgpIHtcbiAgICBjb25zdCBuZXh0VGFiRGltZW5zaW9ucyA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgobmV4dEluZGV4KTtcbiAgICBjb25zdCByZWxhdGl2ZUNvbnRlbnRMZWZ0ID0gbmV4dFRhYkRpbWVuc2lvbnMuY29udGVudExlZnQgLSBzY3JvbGxQb3NpdGlvbiAtIGJhcldpZHRoO1xuICAgIGNvbnN0IHJlbGF0aXZlQ29udGVudFJpZ2h0ID0gbmV4dFRhYkRpbWVuc2lvbnMuY29udGVudFJpZ2h0IC0gc2Nyb2xsUG9zaXRpb247XG4gICAgY29uc3QgbGVmdEluY3JlbWVudCA9IHJlbGF0aXZlQ29udGVudFJpZ2h0IC0gbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuICAgIGNvbnN0IHJpZ2h0SW5jcmVtZW50ID0gcmVsYXRpdmVDb250ZW50TGVmdCArIG51bWJlcnMuRVhUUkFfU0NST0xMX0FNT1VOVDtcblxuICAgIGlmIChuZXh0SW5kZXggPCBpbmRleCkge1xuICAgICAgcmV0dXJuIE1hdGgubWluKGxlZnRJbmNyZW1lbnQsIDApO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLm1heChyaWdodEluY3JlbWVudCwgMCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgc2Nyb2xsIGluY3JlbWVudCB0aGF0IHdpbGwgbWFrZSB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCB2aXNpYmxlIGluIFJUTFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5leHRJbmRleCBUaGUgaW5kZXggb2YgdGhlIG5leHQgdGFiXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxQb3NpdGlvbiBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGJhcldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgVGFiIEJhclxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsQ29udGVudFdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsIGNvbnRlbnRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsY3VsYXRlU2Nyb2xsSW5jcmVtZW50UlRMXyhpbmRleCwgbmV4dEluZGV4LCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgsIHNjcm9sbENvbnRlbnRXaWR0aCkge1xuICAgIGNvbnN0IG5leHRUYWJEaW1lbnNpb25zID0gdGhpcy5hZGFwdGVyXy5nZXRUYWJEaW1lbnNpb25zQXRJbmRleChuZXh0SW5kZXgpO1xuICAgIGNvbnN0IHJlbGF0aXZlQ29udGVudExlZnQgPSBzY3JvbGxDb250ZW50V2lkdGggLSBuZXh0VGFiRGltZW5zaW9ucy5jb250ZW50TGVmdCAtIHNjcm9sbFBvc2l0aW9uO1xuICAgIGNvbnN0IHJlbGF0aXZlQ29udGVudFJpZ2h0ID0gc2Nyb2xsQ29udGVudFdpZHRoIC0gbmV4dFRhYkRpbWVuc2lvbnMuY29udGVudFJpZ2h0IC0gc2Nyb2xsUG9zaXRpb24gLSBiYXJXaWR0aDtcbiAgICBjb25zdCBsZWZ0SW5jcmVtZW50ID0gcmVsYXRpdmVDb250ZW50UmlnaHQgKyBudW1iZXJzLkVYVFJBX1NDUk9MTF9BTU9VTlQ7XG4gICAgY29uc3QgcmlnaHRJbmNyZW1lbnQgPSByZWxhdGl2ZUNvbnRlbnRMZWZ0IC0gbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuXG4gICAgaWYgKG5leHRJbmRleCA+IGluZGV4KSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXgobGVmdEluY3JlbWVudCwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgubWluKHJpZ2h0SW5jcmVtZW50LCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBpbmRleCBvZiB0aGUgYWRqYWNlbnQgdGFiIGNsb3Nlc3QgdG8gZWl0aGVyIGVkZ2Ugb2YgdGhlIFRhYiBCYXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiXG4gICAqIEBwYXJhbSB7IU1EQ1RhYkRpbWVuc2lvbnN9IHRhYkRpbWVuc2lvbnMgVGhlIGRpbWVuc2lvbnMgb2YgdGhlIHRhYlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsUG9zaXRpb24gVGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBiYXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIHRhYiBiYXJcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZmluZEFkamFjZW50VGFiSW5kZXhDbG9zZXN0VG9FZGdlXyhpbmRleCwgdGFiRGltZW5zaW9ucywgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoKSB7XG4gICAgLyoqXG4gICAgICogVGFicyBhcmUgbGFpZCBvdXQgaW4gdGhlIFRhYiBTY3JvbGxlciBsaWtlIHRoaXM6XG4gICAgICpcbiAgICAgKiAgICBTY3JvbGwgUG9zaXRpb25cbiAgICAgKiAgICArLS0tK1xuICAgICAqICAgIHwgICB8ICAgQmFyIFdpZHRoXG4gICAgICogICAgfCAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAgKiAgICB8ICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgICAqICAgIHwgICBWICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWXG4gICAgICogICAgfCAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAgKiAgICBWICAgfCAgICAgICAgICAgICBUYWIgU2Nyb2xsZXIgICAgICAgICAgfFxuICAgICAqICAgICstLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAgKiAgICB8ICAgIFRhYiAgICAgfCAgICAgIFRhYiAgICAgfCAgICAgICAgVGFiICAgICAgICB8XG4gICAgICogICAgKy0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tK1xuICAgICAqICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgICogICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAgKlxuICAgICAqIFRvIGRldGVybWluZSB0aGUgbmV4dCBhZGphY2VudCBpbmRleCwgd2UgbG9vayBhdCB0aGUgVGFiIHJvb3QgbGVmdCBhbmRcbiAgICAgKiBUYWIgcm9vdCByaWdodCwgYm90aCByZWxhdGl2ZSB0byB0aGUgc2Nyb2xsIHBvc2l0aW9uLiBJZiB0aGUgVGFiIHJvb3RcbiAgICAgKiBsZWZ0IGlzIGxlc3MgdGhhbiAwLCB0aGVuIHdlIGtub3cgaXQncyBvdXQgb2YgdmlldyB0byB0aGUgbGVmdC4gSWYgdGhlXG4gICAgICogVGFiIHJvb3QgcmlnaHQgbWludXMgdGhlIGJhciB3aWR0aCBpcyBncmVhdGVyIHRoYW4gMCwgd2Uga25vdyB0aGUgVGFiIGlzXG4gICAgICogb3V0IG9mIHZpZXcgdG8gdGhlIHJpZ2h0LiBGcm9tIHRoZXJlLCB3ZSBlaXRoZXIgaW5jcmVtZW50IG9yIGRlY3JlbWVudFxuICAgICAqIHRoZSBpbmRleC5cbiAgICAgKi9cbiAgICBjb25zdCByZWxhdGl2ZVJvb3RMZWZ0ID0gdGFiRGltZW5zaW9ucy5yb290TGVmdCAtIHNjcm9sbFBvc2l0aW9uO1xuICAgIGNvbnN0IHJlbGF0aXZlUm9vdFJpZ2h0ID0gdGFiRGltZW5zaW9ucy5yb290UmlnaHQgLSBzY3JvbGxQb3NpdGlvbiAtIGJhcldpZHRoO1xuICAgIGNvbnN0IHJlbGF0aXZlUm9vdERlbHRhID0gcmVsYXRpdmVSb290TGVmdCArIHJlbGF0aXZlUm9vdFJpZ2h0O1xuICAgIGNvbnN0IGxlZnRFZGdlSXNDbG9zZXIgPSByZWxhdGl2ZVJvb3RMZWZ0IDwgMCB8fCByZWxhdGl2ZVJvb3REZWx0YSA8IDA7XG4gICAgY29uc3QgcmlnaHRFZGdlSXNDbG9zZXIgPSByZWxhdGl2ZVJvb3RSaWdodCA+IDAgfHwgcmVsYXRpdmVSb290RGVsdGEgPiAwO1xuXG4gICAgaWYgKGxlZnRFZGdlSXNDbG9zZXIpIHtcbiAgICAgIHJldHVybiBpbmRleCAtIDE7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0RWRnZUlzQ2xvc2VyKSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBpbmRleCBvZiB0aGUgYWRqYWNlbnQgdGFiIGNsb3Nlc3QgdG8gZWl0aGVyIGVkZ2Ugb2YgdGhlIFRhYiBCYXIgaW4gUlRMXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYlxuICAgKiBAcGFyYW0geyFNRENUYWJEaW1lbnNpb25zfSB0YWJEaW1lbnNpb25zIFRoZSBkaW1lbnNpb25zIG9mIHRoZSB0YWJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFBvc2l0aW9uIFRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gYmFyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSB0YWIgYmFyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxDb250ZW50V2lkdGggVGhlIHdpZHRoIG9mIHRoZSBzY3JvbGxlciBjb250ZW50XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZpbmRBZGphY2VudFRhYkluZGV4Q2xvc2VzdFRvRWRnZVJUTF8oaW5kZXgsIHRhYkRpbWVuc2lvbnMsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCwgc2Nyb2xsQ29udGVudFdpZHRoKSB7XG4gICAgY29uc3Qgcm9vdExlZnQgPSBzY3JvbGxDb250ZW50V2lkdGggLSB0YWJEaW1lbnNpb25zLnJvb3RMZWZ0IC0gYmFyV2lkdGggLSBzY3JvbGxQb3NpdGlvbjtcbiAgICBjb25zdCByb290UmlnaHQgPSBzY3JvbGxDb250ZW50V2lkdGggLSB0YWJEaW1lbnNpb25zLnJvb3RSaWdodCAtIHNjcm9sbFBvc2l0aW9uO1xuICAgIGNvbnN0IHJvb3REZWx0YSA9IHJvb3RMZWZ0ICsgcm9vdFJpZ2h0O1xuICAgIGNvbnN0IGxlZnRFZGdlSXNDbG9zZXIgPSByb290TGVmdCA+IDAgfHwgcm9vdERlbHRhID4gMDtcbiAgICBjb25zdCByaWdodEVkZ2VJc0Nsb3NlciA9IHJvb3RSaWdodCA8IDAgfHwgcm9vdERlbHRhIDwgMDtcblxuICAgIGlmIChsZWZ0RWRnZUlzQ2xvc2VyKSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cblxuICAgIGlmIChyaWdodEVkZ2VJc0Nsb3Nlcikge1xuICAgICAgcmV0dXJuIGluZGV4IC0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUga2V5IGFzc29jaWF0ZWQgd2l0aCBhIGtleWRvd24gZXZlbnRcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dCBUaGUga2V5ZG93biBldmVudFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRLZXlGcm9tRXZlbnRfKGV2dCkge1xuICAgIGlmIChBQ0NFUFRBQkxFX0tFWVMuaGFzKGV2dC5rZXkpKSB7XG4gICAgICByZXR1cm4gZXZ0LmtleTtcbiAgICB9XG5cbiAgICByZXR1cm4gS0VZQ09ERV9NQVAuZ2V0KGV2dC5rZXlDb2RlKTtcbiAgfVxuXG4gIGlzQWN0aXZhdGlvbktleV8oa2V5KSB7XG4gICAgcmV0dXJuIGtleSA9PT0gc3RyaW5ncy5TUEFDRV9LRVkgfHwga2V5ID09PSBzdHJpbmdzLkVOVEVSX0tFWTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgYSBnaXZlbiBpbmRleCBpcyBpbmNsdXNpdmVseSBiZXR3ZWVuIHRoZSBlbmRzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggdG8gdGVzdFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5kZXhJc0luUmFuZ2VfKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmFkYXB0ZXJfLmdldFRhYkxpc3RMZW5ndGgoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2aWV3J3MgUlRMIHByb3BlcnR5XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc1JUTF8oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uaXNSVEwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4IGludG8gdmlldyBmb3IgbGVmdC10by1yaWdodCB1c2VyYWdlbnRzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYiB0byBzY3JvbGwgaW50byB2aWV3XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzY3JvbGxJbnRvVmlld18oaW5kZXgpIHtcbiAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICBjb25zdCBiYXJXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0T2Zmc2V0V2lkdGgoKTtcbiAgICBjb25zdCB0YWJEaW1lbnNpb25zID0gdGhpcy5hZGFwdGVyXy5nZXRUYWJEaW1lbnNpb25zQXRJbmRleChpbmRleCk7XG4gICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5maW5kQWRqYWNlbnRUYWJJbmRleENsb3Nlc3RUb0VkZ2VfKGluZGV4LCB0YWJEaW1lbnNpb25zLCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgpO1xuXG4gICAgaWYgKCF0aGlzLmluZGV4SXNJblJhbmdlXyhuZXh0SW5kZXgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsSW5jcmVtZW50ID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxJbmNyZW1lbnRfKGluZGV4LCBuZXh0SW5kZXgsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCk7XG4gICAgdGhpcy5hZGFwdGVyXy5pbmNyZW1lbnRTY3JvbGwoc2Nyb2xsSW5jcmVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4IGludG8gdmlldyBpbiBSVExcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSB0YWIgaW5kZXggdG8gbWFrZSB2aXNpYmxlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzY3JvbGxJbnRvVmlld1JUTF8oaW5kZXgpIHtcbiAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICBjb25zdCBiYXJXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0T2Zmc2V0V2lkdGgoKTtcbiAgICBjb25zdCB0YWJEaW1lbnNpb25zID0gdGhpcy5hZGFwdGVyXy5nZXRUYWJEaW1lbnNpb25zQXRJbmRleChpbmRleCk7XG4gICAgY29uc3Qgc2Nyb2xsV2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbENvbnRlbnRXaWR0aCgpO1xuICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuZmluZEFkamFjZW50VGFiSW5kZXhDbG9zZXN0VG9FZGdlUlRMXyhcbiAgICAgIGluZGV4LCB0YWJEaW1lbnNpb25zLCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgsIHNjcm9sbFdpZHRoKTtcblxuICAgIGlmICghdGhpcy5pbmRleElzSW5SYW5nZV8obmV4dEluZGV4KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbEluY3JlbWVudCA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsSW5jcmVtZW50UlRMXyhpbmRleCwgbmV4dEluZGV4LCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgsIHNjcm9sbFdpZHRoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmluY3JlbWVudFNjcm9sbChzY3JvbGxJbmNyZW1lbnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYkJhckZvdW5kYXRpb247XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgOmNsYXNzPVwiY2xhc3Nlc1wiIGNsYXNzPVwibWRjLXRhYi1iYXJcIiB2LW9uPVwibGlzdGVuZXJzXCIgcm9sZT1cInRhYmxpc3RcIj5cbiAgICA8bWRjLXRhYi1zY3JvbGxlciByZWY9XCJzY3JvbGxlclwiPiA8c2xvdD48L3Nsb3Q+IDwvbWRjLXRhYi1zY3JvbGxlcj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1EQ1RhYkJhckZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL3RhYi1iYXIvZm91bmRhdGlvbidcbmltcG9ydCB7IGVtaXRDdXN0b21FdmVudCB9IGZyb20gJy4uL2Jhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy10YWItYmFyJyxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBpbmRpY2F0b3JTdHlsZXM6IHt9LFxuICAgICAgdGFiTGlzdDogW11cbiAgICB9XG4gIH0sXG4gIHByb3BzOiB7IGFjdGl2ZVRhYkluZGV4OiBbTnVtYmVyLCBTdHJpbmddIH0sXG4gIHByb3ZpZGUoKSB7XG4gICAgcmV0dXJuIHsgbWRjVGFiQmFyOiB0aGlzIH1cbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENUYWJCYXJGb3VuZGF0aW9uKHtcbiAgICAgIHNjcm9sbFRvOiBzY3JvbGxYID0+IHRoaXMuJHJlZnMuc2Nyb2xsZXIuc2Nyb2xsVG8oc2Nyb2xsWCksXG4gICAgICBpbmNyZW1lbnRTY3JvbGw6IHNjcm9sbFhJbmNyZW1lbnQgPT5cbiAgICAgICAgdGhpcy4kcmVmcy5zY3JvbGxlci5pbmNyZW1lbnRTY3JvbGwoc2Nyb2xsWEluY3JlbWVudCksXG4gICAgICBnZXRTY3JvbGxQb3NpdGlvbjogKCkgPT4gdGhpcy4kcmVmcy5zY3JvbGxlci5nZXRTY3JvbGxQb3NpdGlvbigpLFxuICAgICAgZ2V0U2Nyb2xsQ29udGVudFdpZHRoOiAoKSA9PiB0aGlzLiRyZWZzLnNjcm9sbGVyLmdldFNjcm9sbENvbnRlbnRXaWR0aCgpLFxuICAgICAgZ2V0T2Zmc2V0V2lkdGg6ICgpID0+IHRoaXMuJGVsLm9mZnNldFdpZHRoLFxuICAgICAgaXNSVEw6ICgpID0+XG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuJGVsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKSA9PT1cbiAgICAgICAgJ3J0bCcsXG4gICAgICBzZXRBY3RpdmVUYWI6IGluZGV4ID0+IHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmFjdGl2YXRlVGFiKGluZGV4KVxuICAgICAgfSxcbiAgICAgIGFjdGl2YXRlVGFiQXRJbmRleDogKGluZGV4LCBjbGllbnRSZWN0KSA9PiB7XG4gICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0uYWN0aXZhdGUoY2xpZW50UmVjdClcbiAgICAgIH0sXG4gICAgICBkZWFjdGl2YXRlVGFiQXRJbmRleDogaW5kZXggPT4ge1xuICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdICYmIHRoaXMudGFiTGlzdFtpbmRleF0uZGVhY3RpdmF0ZSgpXG4gICAgICB9LFxuICAgICAgZm9jdXNUYWJBdEluZGV4OiBpbmRleCA9PiB0aGlzLnRhYkxpc3RbaW5kZXhdLmZvY3VzKCksXG4gICAgICBnZXRUYWJJbmRpY2F0b3JDbGllbnRSZWN0QXRJbmRleDogaW5kZXggPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0gJiZcbiAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLmNvbXB1dGVJbmRpY2F0b3JDbGllbnRSZWN0KClcbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIGdldFRhYkRpbWVuc2lvbnNBdEluZGV4OiBpbmRleCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYkxpc3RbaW5kZXhdLmNvbXB1dGVEaW1lbnNpb25zKClcbiAgICAgIH0sXG4gICAgICBnZXRQcmV2aW91c0FjdGl2ZVRhYkluZGV4OiAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMudGFiTGlzdFtpXS5pc0FjdGl2ZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gaVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH0sXG4gICAgICBnZXRGb2N1c2VkVGFiSW5kZXg6ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFiRWxlbWVudHMgPSB0aGlzLmdldFRhYkVsZW1lbnRzXygpXG4gICAgICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICAgIHJldHVybiB0YWJFbGVtZW50cy5pbmRleE9mKGFjdGl2ZUVsZW1lbnQpXG4gICAgICB9LFxuICAgICAgZ2V0SW5kZXhPZlRhYjogdGFiVG9GaW5kID0+IHRoaXMudGFiTGlzdC5pbmRleE9mKHRhYlRvRmluZCksXG4gICAgICBnZXRUYWJMaXN0TGVuZ3RoOiAoKSA9PiB0aGlzLnRhYkxpc3QubGVuZ3RoLFxuICAgICAgbm90aWZ5VGFiQWN0aXZhdGVkOiBpbmRleCA9PiB7XG4gICAgICAgIGVtaXRDdXN0b21FdmVudChcbiAgICAgICAgICB0aGlzLiRlbCxcbiAgICAgICAgICBNRENUYWJCYXJGb3VuZGF0aW9uLnN0cmluZ3MuVEFCX0FDVElWQVRFRF9FVkVOVCxcbiAgICAgICAgICB7IGluZGV4IH0sXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApXG5cbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gICAgLy8gZW5zdXJlIGFjdGl2ZSB0YWJcbiAgICB0aGlzLmZvdW5kYXRpb24uYWN0aXZhdGVUYWIodGhpcy5hY3RpdmVUYWJJbmRleCB8fCAwKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaXN0ZW5lcnMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLiRsaXN0ZW5lcnMsXG4gICAgICAgICdNRENUYWI6aW50ZXJhY3RlZCc6IGV2ZW50ID0+IHRoaXMuaGFuZGxlSW50ZXJhY3Rpb24oZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlVGFiSW50ZXJhY3Rpb24oZXZ0KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICBBTklNQVRJTkc6ICdtZGMtdGFiLXNjcm9sbGVyLS1hbmltYXRpbmcnLFxuICBTQ1JPTExfVEVTVDogJ21kYy10YWItc2Nyb2xsZXJfX3Rlc3QnLFxuICBTQ1JPTExfQVJFQV9TQ1JPTEw6ICdtZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtYXJlYS0tc2Nyb2xsJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQVJFQV9TRUxFQ1RPUjogJy5tZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtYXJlYScsXG4gIENPTlRFTlRfU0VMRUNUT1I6ICcubWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWNvbnRlbnQnLFxufTtcblxuZXhwb3J0IHtcbiAgY3NzQ2xhc3NlcyxcbiAgc3RyaW5ncyxcbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogTURDVGFiU2Nyb2xsZXJBbmltYXRpb24gY29udGFpbnMgdGhlIHZhbHVlcyByZXF1aXJlZCBmb3IgYW5pbWF0aW5nIGZyb20gdGhlXG4gKiBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiB0byB0aGUgbmV3IHNjcm9sbCBwb3NpdGlvbi4gVGhlIFwiZmluYWxTY3JvbGxQb3NpdGlvblwiXG4gKiB2YWx1ZSByZXByZXNlbnRzIHRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uIHdoaWxlIHRoZSBcInNjcm9sbERlbHRhXCIgdmFsdWUgaXMgdGhlXG4gKiBjb3JyZXNwb25kaW5nIHRyYW5zZm9ybWF0aW9uIHRoYXQgaXMgYXBwbGllZCB0byB0aGUgc2Nyb2xsIGNvbnRlbnQuIFRvZ2V0aGVyLFxuICogdGhleSBjcmVhdGUgdGhlIGFuaW1hdGlvbiBieSBmaXJzdCB1cGRhdGluZyB0aGUgc2Nyb2xsIHZhbHVlIHRoZW4gYXBwbHlpbmdcbiAqIHRoZSB0cmFuc2Zvcm1hdGlvbiBhbmQgYW5pbWF0aW5nIHRoZSB0cmFuc2l0aW9uLiBCb3RoIHBpZWNlcyBhcmUgbmVjZXNzYXJ5XG4gKiBmb3IgdGhlIHNjcm9sbCBhbmltYXRpb24gdG8gd29yay4gVGhlIHZhbHVlcyBhcmUgdXNlZCBhcy1pcyBieSB0aGUgdGFiXG4gKiBzY3JvbGxlciBhbmltYXRpb24gbWV0aG9kLCBlbnN1cmluZyB0aGF0IGFsbCBsb2dpYyBmb3IgZGV0ZXJtaW5pbmcgc2Nyb2xsXG4gKiBwb3NpdGlvbiBvciB0cmFuc2Zvcm1hdGlvbiBpcyBhYnN0cmFjdGVkIGF3YXkgZnJvbSB0aGUgYW5pbWF0aW9uIG1ldGhvZC5cbiAqIEB0eXBlZGVmIHt7ZmluYWxTY3JvbGxQb3NpdGlvbjogbnVtYmVyLCBzY3JvbGxEZWx0YTogbnVtYmVyfX1cbiAqL1xubGV0IE1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9uO1xuXG4vKipcbiAqIE1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzIHJlcHJlc2VudHMgdGhlIGxlZnQgYW5kIHJpZ2h0IGVkZ2VzIG9mIHRoZVxuICogc2Nyb2xsIGNvbnRlbnQuIFRoZXNlIHZhbHVlcyB2YXJ5IGRlcGVuZGluZyBvbiBob3cgc2Nyb2xsaW5nIGluIFJUTCBpc1xuICogaW1wbGVtZW50ZWQgYnkgdGhlIGJyb3dzZXIuIE9uZSB2YWx1ZSBpcyBhbHdheXMgMCBhbmQgb25lIHZhbHVlIGlzIGFsd2F5c1xuICogdGhlIG1heCBzY3JvbGxhYmxlIHZhbHVlIGFzIGVpdGhlciBhIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGludGVnZXIuXG4gKiBAdHlwZWRlZiB7e2xlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlcn19XG4gKi9cbmxldCBNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlcztcblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgVGFiIFNjcm9sbGVyLlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIFRhYiAgaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1RhYlNjcm9sbGVyQWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIHRoZSBnaXZlbiBjbGFzc05hbWUgdG8gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3NOYW1lIHRvIGFkZFxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBjbGFzc05hbWUgZnJvbSB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzc05hbWUgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIGNsYXNzTmFtZSB0byB0aGUgc2Nyb2xsIGFyZWEgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3NOYW1lIHRvIGFkZFxuICAgKi9cbiAgYWRkU2Nyb2xsQXJlYUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBldmVudCB0YXJnZXQgbWF0Y2hlcyBnaXZlbiBjbGFzc05hbWUuXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGV2dFRhcmdldCBUaGUgZXZlbnQgdGFyZ2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciBUaGUgc2VsZWN0b3IgdG8gY2hlY2tcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGV2ZW50VGFyZ2V0TWF0Y2hlc1NlbGVjdG9yKGV2dFRhcmdldCwgc2VsZWN0b3IpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYXJlYSBlbGVtZW50IHRvIHRoZSBwYXNzZWQgdmFsdWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wTmFtZSBUaGUgc3R5bGUgcHJvcGVydHkgbmFtZSB0byBzZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBzdHlsZSBwcm9wZXJ0eSB2YWx1ZVxuICAgKi9cbiAgc2V0U2Nyb2xsQXJlYVN0eWxlUHJvcGVydHkocHJvcE5hbWUsIHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGNvbnRlbnQgZWxlbWVudCB0byB0aGUgcGFzc2VkIHZhbHVlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcE5hbWUgVGhlIHN0eWxlIHByb3BlcnR5IG5hbWUgdG8gc2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgc3R5bGUgcHJvcGVydHkgdmFsdWVcbiAgICovXG4gIHNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5KHByb3BOYW1lLCB2YWx1ZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2Nyb2xsIGNvbnRlbnQgZWxlbWVudCdzIGNvbXB1dGVkIHN0eWxlIHZhbHVlIG9mIHRoZSBnaXZlbiBjc3MgcHJvcGVydHkgYHByb3BlcnR5TmFtZWAuXG4gICAqIFdlIGFjaGlldmUgdGhpcyB2aWEgYGdldENvbXB1dGVkU3R5bGUoLi4uKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZSlgLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlOYW1lXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldFNjcm9sbENvbnRlbnRTdHlsZVZhbHVlKHByb3BlcnR5TmFtZSkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgc2Nyb2xsTGVmdCB2YWx1ZSBvZiB0aGUgc2Nyb2xsIGFyZWEgZWxlbWVudCB0byB0aGUgcGFzc2VkIHZhbHVlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsTGVmdCBUaGUgbmV3IHNjcm9sbExlZnQgdmFsdWVcbiAgICovXG4gIHNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNjcm9sbExlZnQgdmFsdWUgb2YgdGhlIHNjcm9sbCBhcmVhIGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0V2lkdGggb2YgdGhlIHNjcm9sbCBjb250ZW50IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldFdpdGR0aCBvZiB0aGUgc2Nyb2xsIGFyZWEgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsQXJlYU9mZnNldFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYm91bmRpbmcgY2xpZW50IHJlY3Qgb2YgdGhlIHNjcm9sbCBhcmVhIGVsZW1lbnQuXG4gICAqIEByZXR1cm4geyFDbGllbnRSZWN0fVxuICAgKi9cbiAgY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYm91bmRpbmcgY2xpZW50IHJlY3Qgb2YgdGhlIHNjcm9sbCBjb250ZW50IGVsZW1lbnQuXG4gICAqIEByZXR1cm4geyFDbGllbnRSZWN0fVxuICAgKi9cbiAgY29tcHV0ZVNjcm9sbENvbnRlbnRDbGllbnRSZWN0KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaGVpZ2h0IG9mIHRoZSBicm93c2VyJ3MgaG9yaXpvbnRhbCBzY3JvbGxiYXJzIChpbiBweCkuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0KCkge31cbn1cblxuZXhwb3J0IHtNRENUYWJTY3JvbGxlckFuaW1hdGlvbiwgTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXMsIE1EQ1RhYlNjcm9sbGVyQWRhcHRlcn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1RhYlNjcm9sbGVyQWRhcHRlciwgTURDVGFiU2Nyb2xsZXJBbmltYXRpb259IGZyb20gJy4vYWRhcHRlcic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQGFic3RyYWN0XG4gKi9cbmNsYXNzIE1EQ1RhYlNjcm9sbGVyUlRMIHtcbiAgLyoqIEBwYXJhbSB7IU1EQ1RhYlNjcm9sbGVyQWRhcHRlcn0gYWRhcHRlciAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgLyoqIEBwcml2YXRlICovXG4gICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRyYW5zbGF0ZVggVGhlIGN1cnJlbnQgdHJhbnNsYXRlWCBwb3NpdGlvblxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBhYnN0cmFjdFxuICAgKi9cbiAgZ2V0U2Nyb2xsUG9zaXRpb25SVEwodHJhbnNsYXRlWCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufVxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIHNjcm9sbFRvUlRMKHNjcm9sbFgpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn1cbiAgICogQGFic3RyYWN0XG4gICAqL1xuICBpbmNyZW1lbnRTY3JvbGxSVEwoc2Nyb2xsWCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFggVGhlIGN1cnJlbnQgc2Nyb2xsWCBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gdHJhbnNsYXRlWCBUaGUgY3VycmVudCB0cmFuc2xhdGVYIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQGFic3RyYWN0XG4gICAqL1xuICBnZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbihzY3JvbGxYLCB0cmFuc2xhdGVYKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJTY3JvbGxlclJUTDtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDVGFiU2Nyb2xsZXJSVEwgZnJvbSAnLi9ydGwtc2Nyb2xsZXInO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtNRENUYWJTY3JvbGxlckFuaW1hdGlvbiwgTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9IGZyb20gJy4vYWRhcHRlcic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ1RhYlNjcm9sbGVyUlRMfVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdCBleHRlbmRzIE1EQ1RhYlNjcm9sbGVyUlRMIHtcbiAgLyoqXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uUlRMKCkge1xuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIGNvbnN0IHtyaWdodH0gPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpO1xuICAgIC8vIFNjcm9sbCB2YWx1ZXMgb24gbW9zdCBicm93c2VycyBhcmUgaW50cyBpbnN0ZWFkIG9mIGZsb2F0cyBzbyB3ZSByb3VuZFxuICAgIHJldHVybiBNYXRoLnJvdW5kKHJpZ2h0IC0gY3VycmVudFNjcm9sbExlZnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn1cbiAgICovXG4gIHNjcm9sbFRvUlRMKHNjcm9sbFgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCk7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgY29uc3QgY2xhbXBlZFNjcm9sbExlZnQgPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKGVkZ2VzLnJpZ2h0IC0gc2Nyb2xsWCk7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSAqLyAoe1xuICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxEZWx0YTogY2xhbXBlZFNjcm9sbExlZnQgLSBjdXJyZW50U2Nyb2xsTGVmdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259XG4gICAqL1xuICBpbmNyZW1lbnRTY3JvbGxSVEwoc2Nyb2xsWCkge1xuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIGNvbnN0IGNsYW1wZWRTY3JvbGxMZWZ0ID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXyhjdXJyZW50U2Nyb2xsTGVmdCAtIHNjcm9sbFgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gKi8gKHtcbiAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsRGVsdGE6IGNsYW1wZWRTY3JvbGxMZWZ0IC0gY3VycmVudFNjcm9sbExlZnQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0QW5pbWF0aW5nU2Nyb2xsUG9zaXRpb24oc2Nyb2xsWCkge1xuICAgIHJldHVybiBzY3JvbGxYO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpIHtcbiAgICBjb25zdCBjb250ZW50V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aCgpO1xuICAgIGNvbnN0IHJvb3RXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYU9mZnNldFdpZHRoKCk7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfSAqLyAoe1xuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiBjb250ZW50V2lkdGggLSByb290V2lkdGgsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2xhbXBTY3JvbGxWYWx1ZV8oc2Nyb2xsWCkge1xuICAgIGNvbnN0IGVkZ2VzID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxFZGdlc18oKTtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoZWRnZXMubGVmdCwgc2Nyb2xsWCksIGVkZ2VzLnJpZ2h0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQ7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ1RhYlNjcm9sbGVyUlRMIGZyb20gJy4vcnRsLXNjcm9sbGVyJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGFiU2Nyb2xsZXJBbmltYXRpb24sIE1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfSBmcm9tICcuL2FkYXB0ZXInO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENUYWJTY3JvbGxlclJUTH1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlIGV4dGVuZHMgTURDVGFiU2Nyb2xsZXJSVEwge1xuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRyYW5zbGF0ZVggVGhlIGN1cnJlbnQgdHJhbnNsYXRlWCBwb3NpdGlvblxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRTY3JvbGxQb3NpdGlvblJUTCh0cmFuc2xhdGVYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodHJhbnNsYXRlWCAtIGN1cnJlbnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259XG4gICAqL1xuICBzY3JvbGxUb1JUTChzY3JvbGxYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgY29uc3QgY2xhbXBlZFNjcm9sbExlZnQgPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKC1zY3JvbGxYKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259ICovICh7XG4gICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbERlbHRhOiBjbGFtcGVkU2Nyb2xsTGVmdCAtIGN1cnJlbnRTY3JvbGxMZWZ0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn1cbiAgICovXG4gIGluY3JlbWVudFNjcm9sbFJUTChzY3JvbGxYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgY29uc3QgY2xhbXBlZFNjcm9sbExlZnQgPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKGN1cnJlbnRTY3JvbGxMZWZ0IC0gc2Nyb2xsWCk7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSAqLyAoe1xuICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxEZWx0YTogY2xhbXBlZFNjcm9sbExlZnQgLSBjdXJyZW50U2Nyb2xsTGVmdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHJhbnNsYXRlWFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbihzY3JvbGxYLCB0cmFuc2xhdGVYKSB7XG4gICAgcmV0dXJuIHNjcm9sbFggLSB0cmFuc2xhdGVYO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpIHtcbiAgICBjb25zdCBjb250ZW50V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aCgpO1xuICAgIGNvbnN0IHJvb3RXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYU9mZnNldFdpZHRoKCk7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfSAqLyAoe1xuICAgICAgbGVmdDogcm9vdFdpZHRoIC0gY29udGVudFdpZHRoLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2xhbXBTY3JvbGxWYWx1ZV8oc2Nyb2xsWCkge1xuICAgIGNvbnN0IGVkZ2VzID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxFZGdlc18oKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4oZWRnZXMucmlnaHQsIHNjcm9sbFgpLCBlZGdlcy5sZWZ0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENUYWJTY3JvbGxlclJUTCBmcm9tICcuL3J0bC1zY3JvbGxlcic7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1RhYlNjcm9sbGVyQW5pbWF0aW9uLCBNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc30gZnJvbSAnLi9hZGFwdGVyJztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDVGFiU2Nyb2xsZXJSVEx9XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlIGV4dGVuZHMgTURDVGFiU2Nyb2xsZXJSVEwge1xuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRyYW5zbGF0ZVhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsUG9zaXRpb25SVEwodHJhbnNsYXRlWCkge1xuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIC8vIFNjcm9sbCB2YWx1ZXMgb24gbW9zdCBicm93c2VycyBhcmUgaW50cyBpbnN0ZWFkIG9mIGZsb2F0cyBzbyB3ZSByb3VuZFxuICAgIHJldHVybiBNYXRoLnJvdW5kKGN1cnJlbnRTY3JvbGxMZWZ0IC0gdHJhbnNsYXRlWCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufVxuICAgKi9cbiAgc2Nyb2xsVG9SVEwoc2Nyb2xsWCkge1xuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIGNvbnN0IGNsYW1wZWRTY3JvbGxMZWZ0ID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXyhzY3JvbGxYKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259ICovICh7XG4gICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbERlbHRhOiBjdXJyZW50U2Nyb2xsTGVmdCAtIGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn1cbiAgICovXG4gIGluY3JlbWVudFNjcm9sbFJUTChzY3JvbGxYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgY29uc3QgY2xhbXBlZFNjcm9sbExlZnQgPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKGN1cnJlbnRTY3JvbGxMZWZ0ICsgc2Nyb2xsWCk7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSAqLyAoe1xuICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxEZWx0YTogY3VycmVudFNjcm9sbExlZnQgLSBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbihzY3JvbGxYLCB0cmFuc2xhdGVYKSB7XG4gICAgcmV0dXJuIHNjcm9sbFggKyB0cmFuc2xhdGVYO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpIHtcbiAgICBjb25zdCBjb250ZW50V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aCgpO1xuICAgIGNvbnN0IHJvb3RXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYU9mZnNldFdpZHRoKCk7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfSAqLyAoe1xuICAgICAgbGVmdDogY29udGVudFdpZHRoIC0gcm9vdFdpZHRoLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2xhbXBTY3JvbGxWYWx1ZV8oc2Nyb2xsWCkge1xuICAgIGNvbnN0IGVkZ2VzID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxFZGdlc18oKTtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoZWRnZXMucmlnaHQsIHNjcm9sbFgpLCBlZGdlcy5sZWZ0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJTY3JvbGxlclJUTFJldmVyc2U7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1RhYlNjcm9sbGVyQW5pbWF0aW9uLCBNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlcywgTURDVGFiU2Nyb2xsZXJBZGFwdGVyfSBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1RhYlNjcm9sbGVyUlRMIGZyb20gJy4vcnRsLXNjcm9sbGVyJztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQgZnJvbSAnLi9ydGwtZGVmYXVsdC1zY3JvbGxlcic7XG5pbXBvcnQgTURDVGFiU2Nyb2xsZXJSVExOZWdhdGl2ZSBmcm9tICcuL3J0bC1uZWdhdGl2ZS1zY3JvbGxlcic7XG5pbXBvcnQgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlIGZyb20gJy4vcnRsLXJldmVyc2Utc2Nyb2xsZXInO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENUYWJTY3JvbGxlckFkYXB0ZXI+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzZWUgTURDVGFiU2Nyb2xsZXJBZGFwdGVyIGZvciB0eXBpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQWRhcHRlcn0gKi8gKHtcbiAgICAgIGV2ZW50VGFyZ2V0TWF0Y2hlc1NlbGVjdG9yOiAoKSA9PiB7fSxcbiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIGFkZFNjcm9sbEFyZWFDbGFzczogKCkgPT4ge30sXG4gICAgICBzZXRTY3JvbGxBcmVhU3R5bGVQcm9wZXJ0eTogKCkgPT4ge30sXG4gICAgICBzZXRTY3JvbGxDb250ZW50U3R5bGVQcm9wZXJ0eTogKCkgPT4ge30sXG4gICAgICBnZXRTY3JvbGxDb250ZW50U3R5bGVWYWx1ZTogKCkgPT4ge30sXG4gICAgICBzZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdDogKCkgPT4ge30sXG4gICAgICBnZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdDogKCkgPT4ge30sXG4gICAgICBnZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGg6ICgpID0+IHt9LFxuICAgICAgZ2V0U2Nyb2xsQXJlYU9mZnNldFdpZHRoOiAoKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVTY3JvbGxBcmVhQ2xpZW50UmVjdDogKCkgPT4ge30sXG4gICAgICBjb21wdXRlU2Nyb2xsQ29udGVudENsaWVudFJlY3Q6ICgpID0+IHt9LFxuICAgICAgY29tcHV0ZUhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQ6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7IU1EQ1RhYlNjcm9sbGVyQWRhcHRlcn0gYWRhcHRlciAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENUYWJTY3JvbGxlckZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgYm9vbGVhbiBjb250cm9scyB3aGV0aGVyIHdlIHNob3VsZCBoYW5kbGUgdGhlIHRyYW5zaXRpb25lbmQgYW5kIGludGVyYWN0aW9uIGV2ZW50cyBkdXJpbmcgdGhlIGFuaW1hdGlvbi5cbiAgICAgKiBAcHJpdmF0ZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzQW5pbWF0aW5nXyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIE1EQ1RhYlNjcm9sbGVyUlRMIGluc3RhbmNlIHZhcmllcyBwZXIgYnJvd3NlciBhbmQgYWxsb3dzIHVzIHRvIGVuY2Fwc3VsYXRlIHRoZSBwZWN1bGlhciBicm93c2VyIGJlaGF2aW9yXG4gICAgICogb2YgUlRMIHNjcm9sbGluZyBpbiBpdCdzIG93biBjbGFzcy5cbiAgICAgKiBAcHJpdmF0ZSB7P01EQ1RhYlNjcm9sbGVyUlRMfVxuICAgICAqL1xuICAgIHRoaXMucnRsU2Nyb2xsZXJJbnN0YW5jZV87XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIENvbXB1dGUgaG9yaXpvbnRhbCBzY3JvbGxiYXIgaGVpZ2h0IG9uIHNjcm9sbGVyIHdpdGggb3ZlcmZsb3cgaW5pdGlhbGx5IGhpZGRlbiwgdGhlbiB1cGRhdGUgb3ZlcmZsb3cgdG8gc2Nyb2xsXG4gICAgLy8gYW5kIGltbWVkaWF0ZWx5IGFkanVzdCBib3R0b20gbWFyZ2luIHRvIGF2b2lkIHRoZSBzY3JvbGxiYXIgaW5pdGlhbGx5IGFwcGVhcmluZyBiZWZvcmUgSlMgcnVucy5cbiAgICBjb25zdCBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0ID0gdGhpcy5hZGFwdGVyXy5jb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodCgpO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQXJlYVN0eWxlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nLCAtaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodCArICdweCcpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkU2Nyb2xsQXJlYUNsYXNzKE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5jc3NDbGFzc2VzLlNDUk9MTF9BUkVBX1NDUk9MTCk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgdGhlIGN1cnJlbnQgdmlzdWFsIHNjcm9sbCBwb3NpdGlvblxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRTY3JvbGxQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5pc1JUTF8oKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcHV0ZUN1cnJlbnRTY3JvbGxQb3NpdGlvblJUTF8oKTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRlWCA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudFRyYW5zbGF0ZVhfKCk7XG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICByZXR1cm4gc2Nyb2xsTGVmdCAtIGN1cnJlbnRUcmFuc2xhdGVYO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgaW50ZXJhY3Rpb24gZXZlbnRzIHRoYXQgb2NjdXIgZHVyaW5nIHRyYW5zaXRpb25cbiAgICovXG4gIGhhbmRsZUludGVyYWN0aW9uKCkge1xuICAgIC8vIEVhcmx5IGV4aXQgaWYgd2UgYXJlbid0IGFuaW1hdGluZ1xuICAgIGlmICghdGhpcy5pc0FuaW1hdGluZ18pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50IG90aGVyIGV2ZW50IGxpc3RlbmVycyBmcm9tIGhhbmRsaW5nIHRoaXMgZXZlbnRcbiAgICB0aGlzLnN0b3BTY3JvbGxBbmltYXRpb25fKCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgdHJhbnNpdGlvbmVuZCBldmVudFxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqL1xuICBoYW5kbGVUcmFuc2l0aW9uRW5kKGV2dCkge1xuICAgIC8vIEVhcmx5IGV4aXQgaWYgd2UgYXJlbid0IGFuaW1hdGluZyBvciB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZCBieSBhIGRpZmZlcmVudCBlbGVtZW50LlxuICAgIGlmICghdGhpcy5pc0FuaW1hdGluZ19cbiAgICAgIHx8ICF0aGlzLmFkYXB0ZXJfLmV2ZW50VGFyZ2V0TWF0Y2hlc1NlbGVjdG9yKGV2dC50YXJnZXQsIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5zdHJpbmdzLkNPTlRFTlRfU0VMRUNUT1IpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pc0FuaW1hdGluZ18gPSBmYWxzZTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElORyk7XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVtZW50IHRoZSBzY3JvbGwgdmFsdWUgYnkgdGhlIHNjcm9sbFhJbmNyZW1lbnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhJbmNyZW1lbnQgVGhlIHZhbHVlIGJ5IHdoaWNoIHRvIGluY3JlbWVudCB0aGUgc2Nyb2xsIHBvc2l0aW9uXG4gICAqL1xuICBpbmNyZW1lbnRTY3JvbGwoc2Nyb2xsWEluY3JlbWVudCkge1xuICAgIC8vIEVhcmx5IGV4aXQgZm9yIG5vbi1vcGVyYXRpb25hbCBpbmNyZW1lbnQgdmFsdWVzXG4gICAgaWYgKHNjcm9sbFhJbmNyZW1lbnQgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1JUTF8oKSkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5jcmVtZW50U2Nyb2xsUlRMXyhzY3JvbGxYSW5jcmVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLmluY3JlbWVudFNjcm9sbF8oc2Nyb2xsWEluY3JlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0byB0aGUgZ2l2ZW4gc2Nyb2xsWCB2YWx1ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKi9cbiAgc2Nyb2xsVG8oc2Nyb2xsWCkge1xuICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxUb1JUTF8oc2Nyb2xsWCk7XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGxUb18oc2Nyb2xsWCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgdmVyc2lvbiBvZiB0aGUgTURDVGFiU2Nyb2xsZXJSVExcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyUlRMfVxuICAgKi9cbiAgZ2V0UlRMU2Nyb2xsZXIoKSB7XG4gICAgaWYgKCF0aGlzLnJ0bFNjcm9sbGVySW5zdGFuY2VfKSB7XG4gICAgICB0aGlzLnJ0bFNjcm9sbGVySW5zdGFuY2VfID0gdGhpcy5ydGxTY3JvbGxlckZhY3RvcnlfKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucnRsU2Nyb2xsZXJJbnN0YW5jZV87XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdHJhbnNsYXRlWCB2YWx1ZSBmcm9tIGEgQ1NTIG1hdHJpeCB0cmFuc2Zvcm0gZnVuY3Rpb24gc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhbGN1bGF0ZUN1cnJlbnRUcmFuc2xhdGVYXygpIHtcbiAgICBjb25zdCB0cmFuc2Zvcm1WYWx1ZSA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudFN0eWxlVmFsdWUoJ3RyYW5zZm9ybScpO1xuICAgIC8vIEVhcmx5IGV4aXQgaWYgbm8gdHJhbnNmb3JtIGlzIHByZXNlbnRcbiAgICBpZiAodHJhbnNmb3JtVmFsdWUgPT09ICdub25lJykge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gVGhlIHRyYW5zZm9ybSB2YWx1ZSBjb21lcyBiYWNrIGFzIGEgbWF0cml4IHRyYW5zZm9ybWF0aW9uIGluIHRoZSBmb3JtXG4gICAgLy8gb2YgYG1hdHJpeChhLCBiLCBjLCBkLCB0eCwgdHkpYC4gV2Ugb25seSBjYXJlIGFib3V0IHR4ICh0cmFuc2xhdGVYKSBzb1xuICAgIC8vIHdlJ3JlIGdvaW5nIHRvIGdyYWIgYWxsIHRoZSBwYXJlbnRoZXNpemVkIHZhbHVlcywgc3RyaXAgb3V0IHR4LCBhbmRcbiAgICAvLyBwYXJzZSBpdC5cbiAgICBjb25zdCByZXN1bHRzID0gL1xcKCguKylcXCkvLmV4ZWModHJhbnNmb3JtVmFsdWUpWzFdO1xuICAgIGNvbnN0IHBhcnRzID0gcmVzdWx0cy5zcGxpdCgnLCcpO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHBhcnRzWzRdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIGEgc2FmZSBzY3JvbGwgdmFsdWUgdGhhdCBpcyA+IDAgYW5kIDwgdGhlIG1heCBzY3JvbGwgdmFsdWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFggVGhlIGRpc3RhbmNlIHRvIHNjcm9sbFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjbGFtcFNjcm9sbFZhbHVlXyhzY3JvbGxYKSB7XG4gICAgY29uc3QgZWRnZXMgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpO1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChlZGdlcy5sZWZ0LCBzY3JvbGxYKSwgZWRnZXMucmlnaHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNvbXB1dGVDdXJyZW50U2Nyb2xsUG9zaXRpb25SVExfKCkge1xuICAgIGNvbnN0IHRyYW5zbGF0ZVggPSB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRUcmFuc2xhdGVYXygpO1xuICAgIHJldHVybiB0aGlzLmdldFJUTFNjcm9sbGVyKCkuZ2V0U2Nyb2xsUG9zaXRpb25SVEwodHJhbnNsYXRlWCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCkge1xuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3Qgcm9vdFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgoKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9ICovICh7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IGNvbnRlbnRXaWR0aCAtIHJvb3RXaWR0aCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBzY3JvbGwgbWV0aG9kXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYIFRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzY3JvbGxUb18oc2Nyb2xsWCkge1xuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxYID0gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgIGNvbnN0IHNhZmVTY3JvbGxYID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXyhzY3JvbGxYKTtcbiAgICBjb25zdCBzY3JvbGxEZWx0YSA9IHNhZmVTY3JvbGxYIC0gY3VycmVudFNjcm9sbFg7XG4gICAgdGhpcy5hbmltYXRlXygvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gKi8gKHtcbiAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IHNhZmVTY3JvbGxYLFxuICAgICAgc2Nyb2xsRGVsdGE6IHNjcm9sbERlbHRhLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBSVEwgc2Nyb2xsIG1ldGhvZFxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgbmV3IHNjcm9sbCBwb3NpdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2Nyb2xsVG9SVExfKHNjcm9sbFgpIHtcbiAgICBjb25zdCBhbmltYXRpb24gPSB0aGlzLmdldFJUTFNjcm9sbGVyKCkuc2Nyb2xsVG9SVEwoc2Nyb2xsWCk7XG4gICAgdGhpcy5hbmltYXRlXyhhbmltYXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVybmFsIGluY3JlbWVudCBzY3JvbGwgbWV0aG9kXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYIFRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uIGluY3JlbWVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5jcmVtZW50U2Nyb2xsXyhzY3JvbGxYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbFggPSB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgY29uc3QgdGFyZ2V0U2Nyb2xsWCA9IHNjcm9sbFggKyBjdXJyZW50U2Nyb2xsWDtcbiAgICBjb25zdCBzYWZlU2Nyb2xsWCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8odGFyZ2V0U2Nyb2xsWCk7XG4gICAgY29uc3Qgc2Nyb2xsRGVsdGEgPSBzYWZlU2Nyb2xsWCAtIGN1cnJlbnRTY3JvbGxYO1xuICAgIHRoaXMuYW5pbWF0ZV8oLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259ICovICh7XG4gICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBzYWZlU2Nyb2xsWCxcbiAgICAgIHNjcm9sbERlbHRhOiBzY3JvbGxEZWx0YSxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJuYWwgaW5jcmVtZW5ldCBzY3JvbGwgUlRMIG1ldGhvZFxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgbmV3IHNjcm9sbCBwb3NpdGlvbiBSVEwgaW5jcmVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbmNyZW1lbnRTY3JvbGxSVExfKHNjcm9sbFgpIHtcbiAgICBjb25zdCBhbmltYXRpb24gPSB0aGlzLmdldFJUTFNjcm9sbGVyKCkuaW5jcmVtZW50U2Nyb2xsUlRMKHNjcm9sbFgpO1xuICAgIHRoaXMuYW5pbWF0ZV8oYW5pbWF0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRlcyB0aGUgdGFiIHNjcm9sbGluZ1xuICAgKiBAcGFyYW0geyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gYW5pbWF0aW9uIFRoZSBhbmltYXRpb24gdG8gYXBwbHlcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFuaW1hdGVfKGFuaW1hdGlvbikge1xuICAgIC8vIEVhcmx5IGV4aXQgaWYgdHJhbnNsYXRlWCBpcyAwLCB3aGljaCBtZWFucyB0aGVyZSdzIG5vIGFuaW1hdGlvbiB0byBwZXJmb3JtXG4gICAgaWYgKGFuaW1hdGlvbi5zY3JvbGxEZWx0YSA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcFNjcm9sbEFuaW1hdGlvbl8oKTtcbiAgICAvLyBUaGlzIGFuaW1hdGlvbiB1c2VzIHRoZSBGTElQIGFwcHJvYWNoLlxuICAgIC8vIFJlYWQgbW9yZSBoZXJlOiBodHRwczovL2Flcm90d2lzdC5jb20vYmxvZy9mbGlwLXlvdXItYW5pbWF0aW9ucy9cbiAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KGFuaW1hdGlvbi5maW5hbFNjcm9sbFBvc2l0aW9uKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgke2FuaW1hdGlvbi5zY3JvbGxEZWx0YX1weClgKTtcbiAgICAvLyBGb3JjZSByZXBhaW50XG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlU2Nyb2xsQXJlYUNsaWVudFJlY3QoKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElORyk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nLCAnbm9uZScpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0FuaW1hdGluZ18gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHNjcm9sbCBhbmltYXRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0b3BTY3JvbGxBbmltYXRpb25fKCkge1xuICAgIHRoaXMuaXNBbmltYXRpbmdfID0gZmFsc2U7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbFBvc2l0aW9uID0gdGhpcy5nZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbl8oKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElORyk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxDb250ZW50U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMHB4KScpO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoY3VycmVudFNjcm9sbFBvc2l0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBkdXJpbmcgYW5pbWF0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uXygpIHtcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRlWCA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudFRyYW5zbGF0ZVhfKCk7XG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICBpZiAodGhpcy5pc1JUTF8oKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UlRMU2Nyb2xsZXIoKS5nZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbihzY3JvbGxMZWZ0LCBjdXJyZW50VHJhbnNsYXRlWCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjcm9sbExlZnQgLSBjdXJyZW50VHJhbnNsYXRlWDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBSVEwgU2Nyb2xsZXIgdG8gdXNlXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlclJUTH1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJ0bFNjcm9sbGVyRmFjdG9yeV8oKSB7XG4gICAgLy8gQnJvd3NlcnMgaGF2ZSB0aHJlZSBkaWZmZXJlbnQgaW1wbGVtZW50YXRpb25zIG9mIHNjcm9sbExlZnQgaW4gUlRMIG1vZGUsXG4gICAgLy8gZGVwZW5kZW50IG9uIHRoZSBicm93c2VyLiBUaGUgYmVoYXZpb3IgaXMgYmFzZWQgb2ZmIHRoZSBtYXggTFRSXG4gICAgLy8gc2Nyb2xsbGVmdCB2YWx1ZSBhbmQgMC5cbiAgICAvL1xuICAgIC8vICogRGVmYXVsdCBzY3JvbGxpbmcgaW4gUlRMICpcbiAgICAvLyAgICAtIExlZnQtbW9zdCB2YWx1ZTogMFxuICAgIC8vICAgIC0gUmlnaHQtbW9zdCB2YWx1ZTogTWF4IExUUiBzY3JvbGxMZWZ0IHZhbHVlXG4gICAgLy9cbiAgICAvLyAqIE5lZ2F0aXZlIHNjcm9sbGluZyBpbiBSVEwgKlxuICAgIC8vICAgIC0gTGVmdC1tb3N0IHZhbHVlOiBOZWdhdGVkIG1heCBMVFIgc2Nyb2xsTGVmdCB2YWx1ZVxuICAgIC8vICAgIC0gUmlnaHQtbW9zdCB2YWx1ZTogMFxuICAgIC8vXG4gICAgLy8gKiBSZXZlcnNlIHNjcm9sbGluZyBpbiBSVEwgKlxuICAgIC8vICAgIC0gTGVmdC1tb3N0IHZhbHVlOiBNYXggTFRSIHNjcm9sbExlZnQgdmFsdWVcbiAgICAvLyAgICAtIFJpZ2h0LW1vc3QgdmFsdWU6IDBcbiAgICAvL1xuICAgIC8vIFdlIHVzZSB0aG9zZSBwcmluY2lwbGVzIGJlbG93IHRvIGRldGVybWluZSB3aGljaCBSVEwgc2Nyb2xsTGVmdFxuICAgIC8vIGJlaGF2aW9yIGlzIGltcGxlbWVudGVkIGluIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gICAgY29uc3QgaW5pdGlhbFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdChpbml0aWFsU2Nyb2xsTGVmdCAtIDEpO1xuICAgIGNvbnN0IG5ld1Njcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG5cbiAgICAvLyBJZiB0aGUgbmV3U2Nyb2xsTGVmdCB2YWx1ZSBpcyBuZWdhdGl2ZSx0aGVuIHdlIGtub3cgdGhhdCB0aGUgYnJvd3NlciBoYXNcbiAgICAvLyBpbXBsZW1lbnRlZCBuZWdhdGl2ZSBSVEwgc2Nyb2xsaW5nLCBzaW5jZSBhbGwgb3RoZXIgaW1wbGVtZW50YXRpb25zIGhhdmVcbiAgICAvLyBvbmx5IHBvc2l0aXZlIHZhbHVlcy5cbiAgICBpZiAobmV3U2Nyb2xsTGVmdCA8IDApIHtcbiAgICAgIC8vIFVuZG8gdGhlIHNjcm9sbExlZnQgdGVzdCBjaGVja1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdChpbml0aWFsU2Nyb2xsTGVmdCk7XG4gICAgICByZXR1cm4gbmV3IE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUodGhpcy5hZGFwdGVyXyk7XG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdENsaWVudFJlY3QgPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVTY3JvbGxBcmVhQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvbnRlbnRDbGllbnRSZWN0ID0gdGhpcy5hZGFwdGVyXy5jb21wdXRlU2Nyb2xsQ29udGVudENsaWVudFJlY3QoKTtcbiAgICBjb25zdCByaWdodEVkZ2VEZWx0YSA9IE1hdGgucm91bmQoY29udGVudENsaWVudFJlY3QucmlnaHQgLSByb290Q2xpZW50UmVjdC5yaWdodCk7XG4gICAgLy8gVW5kbyB0aGUgc2Nyb2xsTGVmdCB0ZXN0IGNoZWNrXG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdChpbml0aWFsU2Nyb2xsTGVmdCk7XG5cbiAgICAvLyBCeSBjYWxjdWxhdGluZyB0aGUgY2xpZW50UmVjdCBvZiB0aGUgcm9vdCBlbGVtZW50IGFuZCB0aGUgY2xpZW50UmVjdCBvZlxuICAgIC8vIHRoZSBjb250ZW50IGVsZW1lbnQsIHdlIGNhbiBkZXRlcm1pbmUgaG93IG11Y2ggdGhlIHNjcm9sbCB2YWx1ZSBjaGFuZ2VkXG4gICAgLy8gd2hlbiB3ZSBwZXJmb3JtZWQgdGhlIHNjcm9sbExlZnQgc3VidHJhY3Rpb24gYWJvdmUuXG4gICAgaWYgKHJpZ2h0RWRnZURlbHRhID09PSBuZXdTY3JvbGxMZWZ0KSB7XG4gICAgICByZXR1cm4gbmV3IE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZSh0aGlzLmFkYXB0ZXJfKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdCh0aGlzLmFkYXB0ZXJfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNSVExfKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbENvbnRlbnRTdHlsZVZhbHVlKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7Y3NzQ2xhc3Nlc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodCB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZy5cbiAqIEBwcml2YXRlIHtudW1iZXJ8dW5kZWZpbmVkfVxuICovXG5sZXQgaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodF87XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGhlaWdodCBvZiBicm93c2VyLXJlbmRlcmVkIGhvcml6b250YWwgc2Nyb2xsYmFycyB1c2luZyBhIHNlbGYtY3JlYXRlZCB0ZXN0IGVsZW1lbnQuXG4gKiBNYXkgcmV0dXJuIDAgKGUuZy4gb24gT1MgWCBicm93c2VycyB1bmRlciBkZWZhdWx0IGNvbmZpZ3VyYXRpb24pLlxuICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY3VtZW50T2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBzaG91bGRDYWNoZVJlc3VsdFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodChkb2N1bWVudE9iaiwgc2hvdWxkQ2FjaGVSZXN1bHQgPSB0cnVlKSB7XG4gIGlmIChzaG91bGRDYWNoZVJlc3VsdCAmJiB0eXBlb2YgaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodF8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHRfO1xuICB9XG5cbiAgY29uc3QgZWwgPSBkb2N1bWVudE9iai5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWwuY2xhc3NMaXN0LmFkZChjc3NDbGFzc2VzLlNDUk9MTF9URVNUKTtcbiAgZG9jdW1lbnRPYmouYm9keS5hcHBlbmRDaGlsZChlbCk7XG5cbiAgY29uc3QgaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodCA9IGVsLm9mZnNldEhlaWdodCAtIGVsLmNsaWVudEhlaWdodDtcbiAgZG9jdW1lbnRPYmouYm9keS5yZW1vdmVDaGlsZChlbCk7XG5cbiAgaWYgKHNob3VsZENhY2hlUmVzdWx0KSB7XG4gICAgaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodF8gPSBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0O1xuICB9XG4gIHJldHVybiBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gSFRNTEVsZW1lbnRQcm90b3R5cGVcbiAqIEByZXR1cm4geyFBcnJheTxzdHJpbmc+fVxuICovXG5mdW5jdGlvbiBnZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgcmV0dXJuIFtcbiAgICAnbXNNYXRjaGVzU2VsZWN0b3InLCAnbWF0Y2hlcycsXG4gIF0uZmlsdGVyKChwKSA9PiBwIGluIEhUTUxFbGVtZW50UHJvdG90eXBlKS5wb3AoKTtcbn1cblxuZXhwb3J0IHtjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodCwgZ2V0TWF0Y2hlc1Byb3BlcnR5fTtcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1kYy10YWItc2Nyb2xsZXJcIiA6Y2xhc3M9XCJjbGFzc2VzXCI+XG4gICAgPGRpdlxuICAgICAgcmVmPVwiYXJlYVwiXG4gICAgICBjbGFzcz1cIm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhXCJcbiAgICAgIEBtb3VzZWRvd249XCJoYW5kbGVJbnRlcmFjdGlvblwiXG4gICAgICBAd2hlZWw9XCJoYW5kbGVJbnRlcmFjdGlvblwiXG4gICAgICBAcG9pbnRlcmRvd249XCJoYW5kbGVJbnRlcmFjdGlvblwiXG4gICAgICBAdG91Y2hzdGFydD1cImhhbmRsZUludGVyYWN0aW9uXCJcbiAgICAgIEBrZXlkb3duPVwiaGFuZGxlSW50ZXJhY3Rpb25cIlxuICAgICAgOmNsYXNzPVwiYXJlYUNsYXNzZXNcIlxuICAgICAgOnN0eWxlPVwiYXJlYVN0eWxlc1wiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICByZWY9XCJjb250ZW50XCJcbiAgICAgICAgY2xhc3M9XCJtZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtY29udGVudFwiXG4gICAgICAgIDpzdHlsZT1cImNvbnRlbnRTdHlsZXNcIlxuICAgICAgICBAdHJhbnNpdGlvbmVuZD1cImhhbmRsZVRyYW5zaXRpb25FbmRcIlxuICAgICAgPlxuICAgICAgICA8c2xvdCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9mb3VuZGF0aW9uJ1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICdAbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy10YWItc2Nyb2xsZXInLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7IGNsYXNzZXM6IHt9LCBhcmVhQ2xhc3Nlczoge30sIGFyZWFTdHlsZXM6IHt9LCBjb250ZW50U3R5bGVzOiB7fSB9XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uKHtcbiAgICAgIGV2ZW50VGFyZ2V0TWF0Y2hlc1NlbGVjdG9yOiAoZXZ0VGFyZ2V0LCBzZWxlY3RvcikgPT4ge1xuICAgICAgICBjb25zdCBNQVRDSEVTID0gdXRpbC5nZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKVxuICAgICAgICByZXR1cm4gZXZ0VGFyZ2V0W01BVENIRVNdKHNlbGVjdG9yKVxuICAgICAgfSxcbiAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKSxcblxuICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRkZWxldGUodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUpLFxuICAgICAgYWRkU2Nyb2xsQXJlYUNsYXNzOiBjbGFzc05hbWUgPT5cbiAgICAgICAgdGhpcy4kc2V0KHRoaXMuYXJlYUNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSksXG4gICAgICBzZXRTY3JvbGxBcmVhU3R5bGVQcm9wZXJ0eTogKHByb3AsIHZhbHVlKSA9PlxuICAgICAgICB0aGlzLiRzZXQodGhpcy5hcmVhU3R5bGVzLCBwcm9wLCB2YWx1ZSksXG4gICAgICBzZXRTY3JvbGxDb250ZW50U3R5bGVQcm9wZXJ0eTogKHByb3AsIHZhbHVlKSA9PlxuICAgICAgICB0aGlzLiRzZXQodGhpcy5jb250ZW50U3R5bGVzLCBwcm9wLCB2YWx1ZSksXG4gICAgICBnZXRTY3JvbGxDb250ZW50U3R5bGVWYWx1ZTogcHJvcE5hbWUgPT5cbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy4kcmVmcy5jb250ZW50KS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BOYW1lKSxcbiAgICAgIHNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0OiBzY3JvbGxYID0+XG4gICAgICAgICh0aGlzLiRyZWZzLmFyZWEuc2Nyb2xsTGVmdCA9IHNjcm9sbFgpLFxuICAgICAgZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQ6ICgpID0+IHRoaXMuJHJlZnMuYXJlYS5zY3JvbGxMZWZ0LFxuICAgICAgZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoOiAoKSA9PiB0aGlzLiRyZWZzLmNvbnRlbnQub2Zmc2V0V2lkdGgsXG4gICAgICBnZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGg6ICgpID0+IHRoaXMuJHJlZnMuYXJlYS5vZmZzZXRXaWR0aCxcbiAgICAgIGNvbXB1dGVTY3JvbGxBcmVhQ2xpZW50UmVjdDogKCkgPT5cbiAgICAgICAgdGhpcy4kcmVmcy5hcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgY29tcHV0ZVNjcm9sbENvbnRlbnRDbGllbnRSZWN0OiAoKSA9PlxuICAgICAgICB0aGlzLiRyZWZzLmNvbnRlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodDogKCkgPT5cbiAgICAgICAgdXRpbC5jb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodChkb2N1bWVudClcbiAgICB9KVxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24uZGVzdHJveSgpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVUcmFuc2l0aW9uRW5kKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KVxuICAgIH0sXG4gICAgaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KVxuICAgIH0sXG4gICAgZ2V0U2Nyb2xsUG9zaXRpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uLmdldFNjcm9sbFBvc2l0aW9uKClcbiAgICB9LFxuICAgIGdldFNjcm9sbENvbnRlbnRXaWR0aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRyZWZzLmNvbnRlbnQub2Zmc2V0V2lkdGhcbiAgICB9LFxuICAgIGluY3JlbWVudFNjcm9sbChzY3JvbGxYSW5jcmVtZW50KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaW5jcmVtZW50U2Nyb2xsKHNjcm9sbFhJbmNyZW1lbnQpXG4gICAgfSxcbiAgICBzY3JvbGxUbyhzY3JvbGxYKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2Nyb2xsVG8oc2Nyb2xsWClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8c3BhbiBjbGFzcz1cIm1kYy10YWItaW5kaWNhdG9yXCIgOmNsYXNzPVwiY2xhc3Nlc1wiPlxuICAgIDxzcGFuXG4gICAgICByZWY9XCJjb250ZW50XCJcbiAgICAgIDpzdHlsZT1cInN0eWxlc1wiXG4gICAgICBjbGFzcz1cIm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50IG1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmVcIlxuICAgID48L3NwYW4+XG4gIDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTURDU2xpZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3Ivc2xpZGluZy1mb3VuZGF0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtdGFiLWluZGljYXRvcicsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHsgY2xhc3Nlczoge30sIHN0eWxlczoge30gfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKSxcbiAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZGVsZXRlKHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lKSxcbiAgICAgIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdDogKCkgPT5cbiAgICAgICAgdGhpcy4kcmVmcy5jb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgc2V0Q29udGVudFN0eWxlUHJvcGVydHk6IChwcm9wLCB2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLiRzZXQodGhpcy5zdHlsZXMsIHByb3AsIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KVxuICAgIH0sXG4gICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5kZWFjdGl2YXRlKClcbiAgICB9LFxuICAgIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb24uY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8c3BhbiBjbGFzcz1cIm1kYy10YWJfX3JpcHBsZVwiIDpjbGFzcz1cImNsYXNzZXNcIiA6c3R5bGU9XCJzdHlsZXNcIj48L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgUmlwcGxlQmFzZSB9IGZyb20gJy4uL3JpcHBsZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRhYi1yaXBwbGUnLFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHsgY2xhc3Nlczoge30sIHN0eWxlczoge30gfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMucmlwcGxlID0gbmV3IFJpcHBsZUJhc2UodGhpcylcbiAgICB0aGlzLnJpcHBsZS5pbml0KClcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IG1kY1RhYiBmcm9tICcuL21kYy10YWIudnVlJ1xuaW1wb3J0IG1kY1RhYkJhciBmcm9tICcuL21kYy10YWItYmFyLnZ1ZSdcbmltcG9ydCBtZGNUYWJTY3JvbGxlciBmcm9tICcuL21kYy10YWItc2Nyb2xsZXIudnVlJ1xuaW1wb3J0IG1kY1RhYkluZGljYXRvciBmcm9tICcuL21kYy10YWItaW5kaWNhdG9yLnZ1ZSdcbmltcG9ydCBtZGNUYWJSaXBwbGUgZnJvbSAnLi9tZGMtdGFiLXJpcHBsZS52dWUnXG5leHBvcnQgeyBtZGNUYWIsIG1kY1RhYkJhciwgbWRjVGFiU2Nyb2xsZXIsIG1kY1RhYkluZGljYXRvciwgbWRjVGFiUmlwcGxlIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY1RhYixcbiAgbWRjVGFiQmFyLFxuICBtZGNUYWJTY3JvbGxlcixcbiAgbWRjVGFiSW5kaWNhdG9yLFxuICBtZGNUYWJSaXBwbGVcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJDdXN0b21FbGVtZW50IiwiZnVuY3Rpb25hbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwicHJvcHMiLCJpcyIsInRhZyIsImRhdGEiLCJjaGlsZHJlbiIsIkN1c3RvbUVsZW1lbnRNaXhpbiIsIkN1c3RvbUxpbmsiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImxpbmsiLCJPYmplY3QiLCJoIiwiZWxlbWVudCIsInBhcmVudCIsIiRyb3V0ZXIiLCIkcm9vdCIsIiRvcHRpb25zIiwib24iLCJjbGljayIsIm5hdGl2ZU9uIiwiQ3VzdG9tTGlua01peGluIiwidG8iLCJleGFjdCIsIkJvb2xlYW4iLCJhcHBlbmQiLCJyZXBsYWNlIiwiYWN0aXZlQ2xhc3MiLCJleGFjdEFjdGl2ZUNsYXNzIiwiY29tcHV0ZWQiLCJlbWl0Q3VzdG9tRXZlbnQiLCJlbCIsImV2dFR5cGUiLCJldnREYXRhIiwic2hvdWxkQnViYmxlIiwiZXZ0IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJleHRyYWN0SWNvblByb3AiLCJpY29uUHJvcCIsImNsYXNzZXMiLCJjb250ZW50IiwiQXJyYXkiLCJyZWR1Y2UiLCJyZXN1bHQiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsInNwbGl0IiwidGV4dENvbnRlbnQiLCJEaXNwYXRjaEV2ZW50TWl4aW4iLCJldmVudCIsIm1ldGhvZHMiLCIkZW1pdCIsInRhcmdldCIsImV2ZW50VGFyZ2V0IiwiYXJncyIsImV2ZW50QXJncyIsImxpc3RlbmVycyIsIiRsaXN0ZW5lcnMiLCJlIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIk1EQ0ZvdW5kYXRpb24iLCJhZGFwdGVyIiwiYWRhcHRlcl8iLCJNRENUYWJBZGFwdGVyIiwiYXR0ciIsInByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCIsImNzc0NsYXNzZXMiLCJBQ1RJVkUiLCJzdHJpbmdzIiwiQVJJQV9TRUxFQ1RFRCIsIlJJUFBMRV9TRUxFQ1RPUiIsIkNPTlRFTlRfU0VMRUNUT1IiLCJUQUJfSU5ESUNBVE9SX1NFTEVDVE9SIiwiVEFCSU5ERVgiLCJJTlRFUkFDVEVEX0VWRU5UIiwiTURDVGFiRm91bmRhdGlvbiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsInNldEF0dHIiLCJhY3RpdmF0ZUluZGljYXRvciIsImRlYWN0aXZhdGVJbmRpY2F0b3IiLCJub3RpZnlJbnRlcmFjdGVkIiwiZ2V0T2Zmc2V0TGVmdCIsImdldE9mZnNldFdpZHRoIiwiZ2V0Q29udGVudE9mZnNldExlZnQiLCJnZXRDb250ZW50T2Zmc2V0V2lkdGgiLCJmb2N1cyIsImRlZmF1bHRBZGFwdGVyIiwiZm9jdXNPbkFjdGl2YXRlXyIsImZvY3VzT25BY3RpdmF0ZSIsImlzQWN0aXZlIiwicm9vdFdpZHRoIiwicm9vdExlZnQiLCJjb250ZW50V2lkdGgiLCJjb250ZW50TGVmdCIsInJvb3RSaWdodCIsImNvbnRlbnRSaWdodCIsIk1EQ0NvbXBvbmVudCIsInJvb3QiLCJmb3VuZGF0aW9uIiwidW5kZWZpbmVkIiwicm9vdF8iLCJpbml0aWFsaXplIiwiZm91bmRhdGlvbl8iLCJnZXREZWZhdWx0Rm91bmRhdGlvbiIsImluaXQiLCJpbml0aWFsU3luY1dpdGhET00iLCJFcnJvciIsImRlc3Ryb3kiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJNRENSaXBwbGVBZGFwdGVyIiwidmFyTmFtZSIsIlJPT1QiLCJVTkJPVU5ERUQiLCJCR19GT0NVU0VEIiwiRkdfQUNUSVZBVElPTiIsIkZHX0RFQUNUSVZBVElPTiIsIlZBUl9MRUZUIiwiVkFSX1RPUCIsIlZBUl9GR19TSVpFIiwiVkFSX0ZHX1NDQUxFIiwiVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCIsIlZBUl9GR19UUkFOU0xBVEVfRU5EIiwibnVtYmVycyIsIlBBRERJTkciLCJJTklUSUFMX09SSUdJTl9TQ0FMRSIsIkRFQUNUSVZBVElPTl9USU1FT1VUX01TIiwiRkdfREVBQ1RJVkFUSU9OX01TIiwiVEFQX0RFTEFZX01TIiwic3VwcG9ydHNDc3NWYXJpYWJsZXNfIiwic3VwcG9ydHNQYXNzaXZlXyIsImRldGVjdEVkZ2VQc2V1ZG9WYXJCdWciLCJ3aW5kb3dPYmoiLCJub2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJoYXNQc2V1ZG9WYXJCdWciLCJib3JkZXJUb3BTdHlsZSIsInJlbW92ZSIsInN1cHBvcnRzQ3NzVmFyaWFibGVzIiwiZm9yY2VSZWZyZXNoIiwic3VwcG9ydHNGdW5jdGlvblByZXNlbnQiLCJDU1MiLCJzdXBwb3J0cyIsImV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMiLCJ3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMiLCJhcHBseVBhc3NpdmUiLCJnbG9iYWxPYmoiLCJpc1N1cHBvcnRlZCIsInBhc3NpdmUiLCJnZXRNYXRjaGVzUHJvcGVydHkiLCJIVE1MRWxlbWVudFByb3RvdHlwZSIsIm1hdGNoZXNNZXRob2RzIiwibWV0aG9kIiwiaSIsImxlbmd0aCIsIm1hdGNoZXNNZXRob2QiLCJnZXROb3JtYWxpemVkRXZlbnRDb29yZHMiLCJldiIsInBhZ2VPZmZzZXQiLCJjbGllbnRSZWN0IiwieCIsInkiLCJkb2N1bWVudFgiLCJsZWZ0IiwiZG9jdW1lbnRZIiwidG9wIiwibm9ybWFsaXplZFgiLCJub3JtYWxpemVkWSIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIkFDVElWQVRJT05fRVZFTlRfVFlQRVMiLCJQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyIsImFjdGl2YXRlZFRhcmdldHMiLCJNRENSaXBwbGVGb3VuZGF0aW9uIiwiYnJvd3NlclN1cHBvcnRzQ3NzVmFycyIsImlzVW5ib3VuZGVkIiwiaXNTdXJmYWNlQWN0aXZlIiwiaXNTdXJmYWNlRGlzYWJsZWQiLCJjb250YWluc0V2ZW50VGFyZ2V0IiwicmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyUmVzaXplSGFuZGxlciIsImRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwidXBkYXRlQ3NzVmFyaWFibGUiLCJjb21wdXRlQm91bmRpbmdSZWN0IiwiZ2V0V2luZG93UGFnZU9mZnNldCIsImxheW91dEZyYW1lXyIsImZyYW1lXyIsIndpZHRoIiwiaGVpZ2h0IiwiYWN0aXZhdGlvblN0YXRlXyIsImRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfIiwiaW5pdGlhbFNpemVfIiwibWF4UmFkaXVzXyIsImFjdGl2YXRlSGFuZGxlcl8iLCJhY3RpdmF0ZV8iLCJkZWFjdGl2YXRlSGFuZGxlcl8iLCJkZWFjdGl2YXRlXyIsImZvY3VzSGFuZGxlcl8iLCJoYW5kbGVGb2N1cyIsImJsdXJIYW5kbGVyXyIsImhhbmRsZUJsdXIiLCJyZXNpemVIYW5kbGVyXyIsImxheW91dCIsInVuYm91bmRlZENvb3Jkc18iLCJmZ1NjYWxlXyIsImFjdGl2YXRpb25UaW1lcl8iLCJmZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8iLCJhY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfIiwiYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfIiwicnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfIiwicHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfIiwiaXNBY3RpdmF0ZWQiLCJoYXNEZWFjdGl2YXRpb25VWFJ1biIsIndhc0FjdGl2YXRlZEJ5UG9pbnRlciIsIndhc0VsZW1lbnRNYWRlQWN0aXZlIiwiYWN0aXZhdGlvbkV2ZW50IiwiaXNQcm9ncmFtbWF0aWMiLCJzdXBwb3J0c1ByZXNzUmlwcGxlIiwic3VwcG9ydHNQcmVzc1JpcHBsZV8iLCJyZWdpc3RlclJvb3RIYW5kbGVyc18iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsYXlvdXRJbnRlcm5hbF8iLCJjbGVhclRpbWVvdXQiLCJyZW1vdmVDc3NWYXJzXyIsImRlcmVnaXN0ZXJSb290SGFuZGxlcnNfIiwiZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyIsImZvckVhY2giLCJrZXlzIiwiayIsImluZGV4T2YiLCJhY3RpdmF0aW9uU3RhdGUiLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudCIsImlzU2FtZUludGVyYWN0aW9uIiwiaGFzQWN0aXZhdGVkQ2hpbGQiLCJzb21lIiwicmVzZXRBY3RpdmF0aW9uU3RhdGVfIiwicHVzaCIsInJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfIiwiY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8iLCJhbmltYXRlQWN0aXZhdGlvbl8iLCJrZXlDb2RlIiwidHJhbnNsYXRlU3RhcnQiLCJ0cmFuc2xhdGVFbmQiLCJnZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwicm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfIiwic2V0VGltZW91dCIsImFjdGl2YXRpb25IYXNFbmRlZCIsInN0YXRlIiwiYW5pbWF0ZURlYWN0aXZhdGlvbl8iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm1heERpbSIsIm1heCIsImdldEJvdW5kZWRSYWRpdXMiLCJoeXBvdGVudXNlIiwic3FydCIsInBvdyIsInVwZGF0ZUxheW91dENzc1ZhcnNfIiwicm91bmQiLCJ1bmJvdW5kZWQiLCJNRENSaXBwbGUiLCJkaXNhYmxlZCIsInVuYm91bmRlZF8iLCJzZXRVbmJvdW5kZWQiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJjcmVhdGVBZGFwdGVyIiwiZGF0YXNldCIsInNldFVuYm91bmRlZF8iLCJyaXBwbGUiLCJpbnN0YW5jZSIsIk1BVENIRVMiLCJ1dGlsIiwiSFRNTEVsZW1lbnQiLCJwcm90b3R5cGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYWdlWE9mZnNldCIsInBhZ2VZT2Zmc2V0IiwiUmlwcGxlQ2FwYWJsZVN1cmZhY2UiLCJSaXBwbGVCYXNlIiwicmVmIiwiX21hdGNoZXMiLCJvcHRpb25zIiwiJGVsIiwiJHNldCIsIiRkZWxldGUiLCJzdHlsZXMiLCJSaXBwbGVNaXhpbiIsIm1vdW50ZWQiLCJiZWZvcmVEZXN0cm95IiwiVEFCX0FDVElWQVRFRF9FVkVOVCIsIlRBQl9TQ1JPTExFUl9TRUxFQ1RPUiIsIlRBQl9TRUxFQ1RPUiIsIkFSUk9XX0xFRlRfS0VZIiwiQVJST1dfUklHSFRfS0VZIiwiRU5EX0tFWSIsIkhPTUVfS0VZIiwiRU5URVJfS0VZIiwiU1BBQ0VfS0VZIiwiRVhUUkFfU0NST0xMX0FNT1VOVCIsIkFSUk9XX0xFRlRfS0VZQ09ERSIsIkFSUk9XX1JJR0hUX0tFWUNPREUiLCJFTkRfS0VZQ09ERSIsIkhPTUVfS0VZQ09ERSIsIkVOVEVSX0tFWUNPREUiLCJTUEFDRV9LRVlDT0RFIiwiTURDVGFiSW5kaWNhdG9yQWRhcHRlciIsInByb3BOYW1lIiwiRkFERSIsIk5PX1RSQU5TSVRJT04iLCJNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIiwiY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0Iiwic2V0Q29udGVudFN0eWxlUHJvcGVydHkiLCJNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbiIsImN1cnJlbnRDbGllbnRSZWN0Iiwid2lkdGhEZWx0YSIsInhQb3NpdGlvbiIsIk1EQ0ZhZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24iLCJNRENUYWJJbmRpY2F0b3IiLCJjb250ZW50XyIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9wIiwiTURDVGFiIiwicmlwcGxlXyIsInRhYkluZGljYXRvcl8iLCJoYW5kbGVDbGlja18iLCJyaXBwbGVGYWN0b3J5IiwidGFiSW5kaWNhdG9yRmFjdG9yeSIsInJpcHBsZVN1cmZhY2UiLCJyaXBwbGVBZGFwdGVyIiwicmlwcGxlRm91bmRhdGlvbiIsInRhYkluZGljYXRvckVsZW1lbnQiLCJoYW5kbGVDbGljayIsImJpbmQiLCJsaXN0ZW4iLCJ1bmxpc3RlbiIsInNldEF0dHJpYnV0ZSIsImVtaXQiLCJ0YWIiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJjb21wdXRlSW5kaWNhdG9yQ2xpZW50UmVjdCIsImNvbXB1dGVEaW1lbnNpb25zIiwic2V0Rm9jdXNPbkFjdGl2YXRlIiwiTURDVGFiQmFyQWRhcHRlciIsInNjcm9sbFgiLCJzY3JvbGxYSW5jcmVtZW50IiwiaW5kZXgiLCJBQ0NFUFRBQkxFX0tFWVMiLCJTZXQiLCJLRVlDT0RFX01BUCIsIk1hcCIsInNldCIsIk1EQ1RhYkJhckZvdW5kYXRpb24iLCJzY3JvbGxUbyIsImluY3JlbWVudFNjcm9sbCIsImdldFNjcm9sbFBvc2l0aW9uIiwiZ2V0U2Nyb2xsQ29udGVudFdpZHRoIiwiaXNSVEwiLCJzZXRBY3RpdmVUYWIiLCJhY3RpdmF0ZVRhYkF0SW5kZXgiLCJkZWFjdGl2YXRlVGFiQXRJbmRleCIsImZvY3VzVGFiQXRJbmRleCIsImdldFRhYkluZGljYXRvckNsaWVudFJlY3RBdEluZGV4IiwiZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgiLCJnZXRQcmV2aW91c0FjdGl2ZVRhYkluZGV4IiwiZ2V0Rm9jdXNlZFRhYkluZGV4IiwiZ2V0SW5kZXhPZlRhYiIsImdldFRhYkxpc3RMZW5ndGgiLCJub3RpZnlUYWJBY3RpdmF0ZWQiLCJ1c2VBdXRvbWF0aWNBY3RpdmF0aW9uXyIsInVzZUF1dG9tYXRpY0FjdGl2YXRpb24iLCJwcmV2aW91c0FjdGl2ZUluZGV4IiwiaW5kZXhJc0luUmFuZ2VfIiwic2Nyb2xsSW50b1ZpZXciLCJnZXRLZXlGcm9tRXZlbnRfIiwiaXNBY3RpdmF0aW9uS2V5XyIsInByZXZlbnREZWZhdWx0IiwiZGV0ZXJtaW5lVGFyZ2V0RnJvbUtleV8iLCJmb2N1c2VkVGFiSW5kZXgiLCJpc1JUTF8iLCJzY3JvbGxJbnRvVmlld1JUTF8iLCJzY3JvbGxJbnRvVmlld18iLCJvcmlnaW4iLCJtYXhJbmRleCIsInNob3VsZEdvVG9FbmQiLCJzaG91bGREZWNyZW1lbnQiLCJzaG91bGRJbmNyZW1lbnQiLCJuZXh0SW5kZXgiLCJzY3JvbGxQb3NpdGlvbiIsImJhcldpZHRoIiwibmV4dFRhYkRpbWVuc2lvbnMiLCJyZWxhdGl2ZUNvbnRlbnRMZWZ0IiwicmVsYXRpdmVDb250ZW50UmlnaHQiLCJsZWZ0SW5jcmVtZW50IiwicmlnaHRJbmNyZW1lbnQiLCJtaW4iLCJzY3JvbGxDb250ZW50V2lkdGgiLCJ0YWJEaW1lbnNpb25zIiwicmVsYXRpdmVSb290TGVmdCIsInJlbGF0aXZlUm9vdFJpZ2h0IiwicmVsYXRpdmVSb290RGVsdGEiLCJsZWZ0RWRnZUlzQ2xvc2VyIiwicmlnaHRFZGdlSXNDbG9zZXIiLCJyb290RGVsdGEiLCJoYXMiLCJnZXQiLCJmaW5kQWRqYWNlbnRUYWJJbmRleENsb3Nlc3RUb0VkZ2VfIiwic2Nyb2xsSW5jcmVtZW50IiwiY2FsY3VsYXRlU2Nyb2xsSW5jcmVtZW50XyIsInNjcm9sbFdpZHRoIiwiZmluZEFkamFjZW50VGFiSW5kZXhDbG9zZXN0VG9FZGdlUlRMXyIsImNhbGN1bGF0ZVNjcm9sbEluY3JlbWVudFJUTF8iLCJBTklNQVRJTkciLCJTQ1JPTExfVEVTVCIsIlNDUk9MTF9BUkVBX1NDUk9MTCIsIkFSRUFfU0VMRUNUT1IiLCJNRENUYWJTY3JvbGxlckFkYXB0ZXIiLCJldnRUYXJnZXQiLCJzZWxlY3RvciIsInByb3BlcnR5TmFtZSIsInNjcm9sbExlZnQiLCJNRENUYWJTY3JvbGxlclJUTCIsInRyYW5zbGF0ZVgiLCJNRENUYWJTY3JvbGxlclJUTERlZmF1bHQiLCJjdXJyZW50U2Nyb2xsTGVmdCIsImdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0IiwiY2FsY3VsYXRlU2Nyb2xsRWRnZXNfIiwicmlnaHQiLCJlZGdlcyIsImNsYW1wZWRTY3JvbGxMZWZ0IiwiY2xhbXBTY3JvbGxWYWx1ZV8iLCJmaW5hbFNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsRGVsdGEiLCJnZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGgiLCJnZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgiLCJNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlIiwiTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlIiwiTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uIiwiZXZlbnRUYXJnZXRNYXRjaGVzU2VsZWN0b3IiLCJhZGRTY3JvbGxBcmVhQ2xhc3MiLCJzZXRTY3JvbGxBcmVhU3R5bGVQcm9wZXJ0eSIsInNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5IiwiZ2V0U2Nyb2xsQ29udGVudFN0eWxlVmFsdWUiLCJzZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCIsImNvbXB1dGVTY3JvbGxBcmVhQ2xpZW50UmVjdCIsImNvbXB1dGVTY3JvbGxDb250ZW50Q2xpZW50UmVjdCIsImNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0IiwiaXNBbmltYXRpbmdfIiwicnRsU2Nyb2xsZXJJbnN0YW5jZV8iLCJob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0IiwiY29tcHV0ZUN1cnJlbnRTY3JvbGxQb3NpdGlvblJUTF8iLCJjdXJyZW50VHJhbnNsYXRlWCIsImNhbGN1bGF0ZUN1cnJlbnRUcmFuc2xhdGVYXyIsInN0b3BTY3JvbGxBbmltYXRpb25fIiwiaW5jcmVtZW50U2Nyb2xsUlRMXyIsImluY3JlbWVudFNjcm9sbF8iLCJzY3JvbGxUb1JUTF8iLCJzY3JvbGxUb18iLCJydGxTY3JvbGxlckZhY3RvcnlfIiwidHJhbnNmb3JtVmFsdWUiLCJyZXN1bHRzIiwiZXhlYyIsInBhcnRzIiwicGFyc2VGbG9hdCIsImdldFJUTFNjcm9sbGVyIiwiZ2V0U2Nyb2xsUG9zaXRpb25SVEwiLCJjdXJyZW50U2Nyb2xsWCIsInNhZmVTY3JvbGxYIiwiYW5pbWF0ZV8iLCJhbmltYXRpb24iLCJzY3JvbGxUb1JUTCIsInRhcmdldFNjcm9sbFgiLCJpbmNyZW1lbnRTY3JvbGxSVEwiLCJjdXJyZW50U2Nyb2xsUG9zaXRpb24iLCJnZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbl8iLCJnZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbiIsImluaXRpYWxTY3JvbGxMZWZ0IiwibmV3U2Nyb2xsTGVmdCIsInJvb3RDbGllbnRSZWN0IiwiY29udGVudENsaWVudFJlY3QiLCJyaWdodEVkZ2VEZWx0YSIsImhvcml6b250YWxTY3JvbGxiYXJIZWlnaHRfIiwiZG9jdW1lbnRPYmoiLCJzaG91bGRDYWNoZVJlc3VsdCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsInJlbW92ZUNoaWxkIiwiZmlsdGVyIiwicCIsInBvcCIsIm1kY1RhYiIsIm1kY1RhYkJhciIsIm1kY1RhYlNjcm9sbGVyIiwibWRjVGFiSW5kaWNhdG9yIiwibWRjVGFiUmlwcGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0VBQU8sU0FBU0EsUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEI7RUFDL0I7RUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7RUFDQSxNQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7RUFDakNELElBQUFBLElBQUksR0FBR0MsTUFBTSxDQUFDQyxHQUFkO0VBQ0QsR0FGRCxNQUVPLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztFQUN4QztFQUNBSCxJQUFBQSxJQUFJLEdBQUdHLE1BQU0sQ0FBQ0QsR0FBZDtFQUNEOztFQUNELE1BQUlGLElBQUosRUFBVTtFQUNSQSxJQUFBQSxJQUFJLENBQUNJLEdBQUwsQ0FBU0wsTUFBVDtFQUNEO0VBQ0Y7O0VDWk0sU0FBU00sVUFBVCxDQUFvQkMsVUFBcEIsRUFBZ0M7RUFDckMsU0FBTztFQUNMQyxJQUFBQSxPQUFPLEVBQUUsYUFESjtFQUVMQyxJQUFBQSxPQUFPLEVBQUUsaUJBQUFDLEVBQUUsRUFBSTtFQUNiLFdBQUssSUFBSUMsR0FBVCxJ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
