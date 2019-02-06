/**
* @module vue-mdc-adaptertabs 0.19.4-beta
* @exports VueMDCTabs
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.44.0","material-components-web":"^0.44.0"}
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
      version: '0.19.4-beta',
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
  var VMAUniqueIdMixin = {
    beforeCreate: function beforeCreate() {
      this.vma_uid_ = scope + this._uid;
    }
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

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
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


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
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

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

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
    /* style inject */
    
    /* style inject SSR */
    

    
    normalizeComponent_1(
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
    mixins: [CustomLinkMixin, DispatchEventMixin, VMAUniqueIdMixin],
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

      this.id = this.vma_uid_;
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
            tabId: _this.id
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
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcTab = normalizeComponent_1(
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
       * @param {!CustomEvent} evt
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
        getIndexOfTabById: function getIndexOfTabById(id) {
          for (var i = 0; i < _this.tabList.length; i++) {
            if (_this.tabList[i].id === id) {
              return i;
            }
          }

          return -1;
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
          },
          keydown: function keydown(event) {
            return _this2.handleKeyDown(event);
          }
        });
      }
    },
    methods: {
      handleInteraction: function handleInteraction(evt) {
        this.foundation.handleTabInteraction(evt);
      },
      handleKeyDown: function handleKeyDown(evt) {
        this.foundation.handleKeyDown(evt);
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
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcTabBar = normalizeComponent_1(
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
   * @return {string}
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
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcTabScroller = normalizeComponent_1(
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
    

    
    var mdcTabIndicator = normalizeComponent_1(
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
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcTabRipple = normalizeComponent_1(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9iYXNlL2F1dG8taW5pdC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9iYXNlLXBsdWdpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZWxlbWVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tbGluay5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZXZlbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWljb24uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvZGlzcGF0Y2gtZXZlbnQtbWl4aW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvdW5pcXVlaWQtbWl4aW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS91dGlsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS1iYXNlLmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS52dWUiLCIuLi8uLi9jb21wb25lbnRzL3RhYnMvbWRjLXRhYi52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvZm91bmRhdGlvbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvdGFicy9tZGMtdGFiLWJhci52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvcnRsLXNjcm9sbGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvcnRsLWRlZmF1bHQtc2Nyb2xsZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtbmVnYXRpdmUtc2Nyb2xsZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtcmV2ZXJzZS1zY3JvbGxlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci91dGlsLmpzIiwiLi4vLi4vY29tcG9uZW50cy90YWJzL21kYy10YWItc2Nyb2xsZXIudnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3IvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3Ivc2xpZGluZy1mb3VuZGF0aW9uLmpzIiwiLi4vLi4vY29tcG9uZW50cy90YWJzL21kYy10YWItaW5kaWNhdG9yLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvdGFicy9tZGMtdGFiLXJpcHBsZS52dWUiLCIuLi8uLi9jb21wb25lbnRzL3RhYnMvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3RhYnMvZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGF1dG9Jbml0KHBsdWdpbikge1xuICAvLyBBdXRvLWluc3RhbGxcbiAgbGV0IF9WdWUgPSBudWxsXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIF9WdWUgPSB3aW5kb3cuVnVlXG4gIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvKmdsb2JhbCBnbG9iYWwqL1xuICAgIF9WdWUgPSBnbG9iYWwuVnVlXG4gIH1cbiAgaWYgKF9WdWUpIHtcbiAgICBfVnVlLnVzZShwbHVnaW4pXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBCYXNlUGx1Z2luKGNvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnX19WRVJTSU9OX18nLFxuICAgIGluc3RhbGw6IHZtID0+IHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2tleV1cbiAgICAgICAgdm0uY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQpXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50ID0ge1xuICBmdW5jdGlvbmFsOiB0cnVlLFxuICByZW5kZXIoY3JlYXRlRWxlbWVudCwgY29udGV4dCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFxuICAgICAgY29udGV4dC5wcm9wcy5pcyB8fCBjb250ZXh0LnByb3BzLnRhZyB8fCAnZGl2JyxcbiAgICAgIGNvbnRleHQuZGF0YSxcbiAgICAgIGNvbnRleHQuY2hpbGRyZW5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUVsZW1lbnRNaXhpbiA9IHtcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUVsZW1lbnRcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEN1c3RvbUxpbmsgPSB7XG4gIG5hbWU6ICdjdXN0b20tbGluaycsXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgdGFnOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ2EnIH0sXG4gICAgbGluazogT2JqZWN0XG4gIH0sXG4gIHJlbmRlcihoLCBjb250ZXh0KSB7XG4gICAgbGV0IGVsZW1lbnRcbiAgICBsZXQgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQuZGF0YSlcblxuICAgIGlmIChjb250ZXh0LnByb3BzLmxpbmsgJiYgY29udGV4dC5wYXJlbnQuJHJvdXRlcikge1xuICAgICAgLy8gcm91dGVyLWxpbmsgY2FzZVxuICAgICAgZWxlbWVudCA9IGNvbnRleHQucGFyZW50LiRyb290LiRvcHRpb25zLmNvbXBvbmVudHNbJ3JvdXRlci1saW5rJ11cbiAgICAgIGRhdGEucHJvcHMgPSBPYmplY3QuYXNzaWduKHsgdGFnOiBjb250ZXh0LnByb3BzLnRhZyB9LCBjb250ZXh0LnByb3BzLmxpbmspXG4gICAgICBpZiAoZGF0YS5vbi5jbGljaykge1xuICAgICAgICBkYXRhLm5hdGl2ZU9uID0geyBjbGljazogZGF0YS5vbi5jbGljayB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVsZW1lbnQgZmFsbGJhY2tcbiAgICAgIGVsZW1lbnQgPSBjb250ZXh0LnByb3BzLnRhZ1xuICAgIH1cblxuICAgIHJldHVybiBoKGVsZW1lbnQsIGRhdGEsIGNvbnRleHQuY2hpbGRyZW4pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUxpbmtNaXhpbiA9IHtcbiAgcHJvcHM6IHtcbiAgICB0bzogW1N0cmluZywgT2JqZWN0XSxcbiAgICBleGFjdDogQm9vbGVhbixcbiAgICBhcHBlbmQ6IEJvb2xlYW4sXG4gICAgcmVwbGFjZTogQm9vbGVhbixcbiAgICBhY3RpdmVDbGFzczogU3RyaW5nLFxuICAgIGV4YWN0QWN0aXZlQ2xhc3M6IFN0cmluZ1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpbmsoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLnRvICYmIHtcbiAgICAgICAgICB0bzogdGhpcy50byxcbiAgICAgICAgICBleGFjdDogdGhpcy5leGFjdCxcbiAgICAgICAgICBhcHBlbmQ6IHRoaXMuYXBwZW5kLFxuICAgICAgICAgIHJlcGxhY2U6IHRoaXMucmVwbGFjZSxcbiAgICAgICAgICBhY3RpdmVDbGFzczogdGhpcy5hY3RpdmVDbGFzcyxcbiAgICAgICAgICBleGFjdEFjdGl2ZUNsYXNzOiB0aGlzLmV4YWN0QWN0aXZlQ2xhc3NcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUxpbmtcbiAgfVxufVxuIiwiLyogZ2xvYmFsIEN1c3RvbUV2ZW50ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Q3VzdG9tRXZlbnQoZWwsIGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gIGxldCBldnRcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICBidWJibGVzOiBzaG91bGRCdWJibGVcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKVxuICB9XG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RJY29uUHJvcChpY29uUHJvcCkge1xuICBpZiAodHlwZW9mIGljb25Qcm9wID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7ICdtYXRlcmlhbC1pY29ucyc6IHRydWUgfSxcbiAgICAgIGNvbnRlbnQ6IGljb25Qcm9wXG4gICAgfVxuICB9IGVsc2UgaWYgKGljb25Qcm9wIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3NlczogaWNvblByb3AucmVkdWNlKFxuICAgICAgICAocmVzdWx0LCB2YWx1ZSkgPT4gT2JqZWN0LmFzc2lnbihyZXN1bHQsIHsgW3ZhbHVlXTogdHJ1ZSB9KSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGljb25Qcm9wID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiBpY29uUHJvcC5jbGFzc05hbWVcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLnJlZHVjZShcbiAgICAgICAgICAocmVzdWx0LCB2YWx1ZSkgPT4gT2JqZWN0LmFzc2lnbihyZXN1bHQsIHsgW3ZhbHVlXTogdHJ1ZSB9KSxcbiAgICAgICAgICB7fVxuICAgICAgICApLFxuICAgICAgY29udGVudDogaWNvblByb3AudGV4dENvbnRlbnRcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBEaXNwYXRjaEV2ZW50TWl4aW4gPSB7XG4gIHByb3BzOiB7XG4gICAgZXZlbnQ6IFN0cmluZyxcbiAgICAnZXZlbnQtdGFyZ2V0JzogT2JqZWN0LFxuICAgICdldmVudC1hcmdzJzogQXJyYXlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRpc3BhdGNoRXZlbnQoZXZ0KSB7XG4gICAgICBldnQgJiYgdGhpcy4kZW1pdChldnQudHlwZSwgZXZ0KVxuICAgICAgaWYgKHRoaXMuZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZXZlbnRUYXJnZXQgfHwgdGhpcy4kcm9vdFxuICAgICAgICBsZXQgYXJncyA9IHRoaXMuZXZlbnRBcmdzIHx8IFtdXG4gICAgICAgIHRhcmdldC4kZW1pdCh0aGlzLmV2ZW50LCAuLi5hcmdzKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaXN0ZW5lcnMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLiRsaXN0ZW5lcnMsXG4gICAgICAgIGNsaWNrOiBlID0+IHRoaXMuZGlzcGF0Y2hFdmVudChlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBBXG4gKi9cbmNsYXNzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVte2Nzc0NsYXNzZXN9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtzdHJpbmdzfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtudW1iZXJzfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshT2JqZWN0fSAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAvLyB2YWxpZGF0aW9uLlxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0E9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyID0ge30pIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUF9ICovXG4gICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogTURDVGFiRGltZW5zaW9ucyBwcm92aWRlcyBkZXRhaWxzIGFib3V0IHRoZSBsZWZ0IGFuZCByaWdodCBlZGdlcyBvZiB0aGUgVGFiXG4gKiByb290IGVsZW1lbnQgYW5kIHRoZSBUYWIgY29udGVudCBlbGVtZW50LiBUaGVzZSB2YWx1ZXMgYXJlIHVzZWQgdG8gZGV0ZXJtaW5lXG4gKiB0aGUgdmlzdWFsIHBvc2l0aW9uIG9mIHRoZSBUYWIgd2l0aCByZXNwZWN0IGl0J3MgcGFyZW50IGNvbnRhaW5lci5cbiAqIEB0eXBlZGVmIHt7cm9vdExlZnQ6IG51bWJlciwgcm9vdFJpZ2h0OiBudW1iZXIsIGNvbnRlbnRMZWZ0OiBudW1iZXIsIGNvbnRlbnRSaWdodDogbnVtYmVyfX1cbiAqL1xubGV0IE1EQ1RhYkRpbWVuc2lvbnM7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgZGV0YWlsOiB7XG4gKiAgICAgdGFiSWQ6IHN0cmluZyxcbiAqICAgfSxcbiAqICAgYnViYmxlczogYm9vbGVhbixcbiAqIH19XG4gKi9cbmxldCBNRENUYWJJbnRlcmFjdGlvbkV2ZW50VHlwZTtcblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgVGFiLlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIFRhYiAgaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1RhYkFkYXB0ZXIge1xuICAvKipcbiAgICogQWRkcyB0aGUgZ2l2ZW4gY2xhc3NOYW1lIHRvIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzTmFtZSB0byBhZGRcbiAgICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gY2xhc3NOYW1lIGZyb20gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3NOYW1lIHRvIHJlbW92ZVxuICAgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHJvb3QgZWxlbWVudCBoYXMgdGhlIGdpdmVuIGNsYXNzTmFtZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3NOYW1lIHRvIHJlbW92ZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBnaXZlbiBhdHRyTmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50IHRvIHRoZSBnaXZlbiB2YWx1ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHIgVGhlIGF0dHJpYnV0ZSBuYW1lIHRvIHNldFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHNvIGdpdmUgdGhlIGF0dHJpYnV0ZVxuICAgKi9cbiAgc2V0QXR0cihhdHRyLCB2YWx1ZSkge31cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBpbmRpY2F0b3IgZWxlbWVudC5cbiAgICogQHBhcmFtIHshQ2xpZW50UmVjdD19IHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCBUaGUgY2xpZW50IHJlY3Qgb2YgdGhlIHByZXZpb3VzbHkgYWN0aXZhdGVkIGluZGljYXRvclxuICAgKi9cbiAgYWN0aXZhdGVJbmRpY2F0b3IocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7fVxuXG4gIC8qKiBEZWFjdGl2YXRlcyB0aGUgaW5kaWNhdG9yLiAqL1xuICBkZWFjdGl2YXRlSW5kaWNhdG9yKCkge31cblxuICAvKipcbiAgICogRW1pdHMgdGhlIE1EQ1RhYjppbnRlcmFjdGVkIGV2ZW50IGZvciB1c2UgYnkgcGFyZW50IGNvbXBvbmVudHNcbiAgICovXG4gIG5vdGlmeUludGVyYWN0ZWQoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXRMZWZ0IHZhbHVlIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldE9mZnNldExlZnQoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXRXaWR0aCB2YWx1ZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRPZmZzZXRXaWR0aCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldExlZnQgb2YgdGhlIGNvbnRlbnQgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0Q29udGVudE9mZnNldExlZnQoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXRXaWR0aCBvZiB0aGUgY29udGVudCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRDb250ZW50T2Zmc2V0V2lkdGgoKSB7fVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGZvY3VzIHRvIHRoZSByb290IGVsZW1lbnRcbiAgICovXG4gIGZvY3VzKCkge31cbn1cblxuZXhwb3J0IHtNRENUYWJEaW1lbnNpb25zLCBNRENUYWJJbnRlcmFjdGlvbkV2ZW50VHlwZSwgTURDVGFiQWRhcHRlcn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICBBQ1RJVkU6ICdtZGMtdGFiLS1hY3RpdmUnLFxufTtcblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBzdHJpbmdzID0ge1xuICBBUklBX1NFTEVDVEVEOiAnYXJpYS1zZWxlY3RlZCcsXG4gIFJJUFBMRV9TRUxFQ1RPUjogJy5tZGMtdGFiX19yaXBwbGUnLFxuICBDT05URU5UX1NFTEVDVE9SOiAnLm1kYy10YWJfX2NvbnRlbnQnLFxuICBUQUJfSU5ESUNBVE9SX1NFTEVDVE9SOiAnLm1kYy10YWItaW5kaWNhdG9yJyxcbiAgVEFCSU5ERVg6ICd0YWJJbmRleCcsXG4gIElOVEVSQUNURURfRVZFTlQ6ICdNRENUYWI6aW50ZXJhY3RlZCcsXG59O1xuXG5leHBvcnQge1xuICBjc3NDbGFzc2VzLFxuICBzdHJpbmdzLFxufTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGFiQWRhcHRlciwgTURDVGFiRGltZW5zaW9uc30gZnJvbSAnLi9hZGFwdGVyJztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuaW1wb3J0IHtcbiAgY3NzQ2xhc3NlcyxcbiAgc3RyaW5ncyxcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENUYWJBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUYWJGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKipcbiAgICogQHNlZSBNRENUYWJBZGFwdGVyIGZvciB0eXBpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7IU1EQ1RhYkFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJBZGFwdGVyfSAqLyAoe1xuICAgICAgYWRkQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgaGFzQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgc2V0QXR0cjogKCkgPT4ge30sXG4gICAgICBhY3RpdmF0ZUluZGljYXRvcjogKCkgPT4ge30sXG4gICAgICBkZWFjdGl2YXRlSW5kaWNhdG9yOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeUludGVyYWN0ZWQ6ICgpID0+IHt9LFxuICAgICAgZ2V0T2Zmc2V0TGVmdDogKCkgPT4ge30sXG4gICAgICBnZXRPZmZzZXRXaWR0aDogKCkgPT4ge30sXG4gICAgICBnZXRDb250ZW50T2Zmc2V0TGVmdDogKCkgPT4ge30sXG4gICAgICBnZXRDb250ZW50T2Zmc2V0V2lkdGg6ICgpID0+IHt9LFxuICAgICAgZm9jdXM6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7IU1EQ1RhYkFkYXB0ZXJ9IGFkYXB0ZXIgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDVGFiRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuZm9jdXNPbkFjdGl2YXRlXyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgXCJjbGlja1wiIGV2ZW50XG4gICAqL1xuICBoYW5kbGVDbGljaygpIHtcbiAgICAvLyBJdCdzIHVwIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIGtlZXAgdHJhY2sgb2YgdGhlIGFjdGl2ZSBUYWIgYW5kXG4gICAgLy8gZW5zdXJlIHdlIGRvbid0IGFjdGl2YXRlIGEgVGFiIHRoYXQncyBhbHJlYWR5IGFjdGl2ZS5cbiAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUludGVyYWN0ZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBUYWIncyBhY3RpdmUgc3RhdGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHdoZXRoZXIgdGhlIHRhYiBzaG91bGQgZm9jdXMgaXRzZWxmIHdoZW4gYWN0aXZhdGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZm9jdXNPbkFjdGl2YXRlXG4gICAqL1xuICBzZXRGb2N1c09uQWN0aXZhdGUoZm9jdXNPbkFjdGl2YXRlKSB7XG4gICAgdGhpcy5mb2N1c09uQWN0aXZhdGVfID0gZm9jdXNPbkFjdGl2YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgVGFiXG4gICAqIEBwYXJhbSB7IUNsaWVudFJlY3Q9fSBwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3RcbiAgICovXG4gIGFjdGl2YXRlKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCkge1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihzdHJpbmdzLkFSSUFfU0VMRUNURUQsICd0cnVlJyk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKHN0cmluZ3MuVEFCSU5ERVgsICcwJyk7XG4gICAgdGhpcy5hZGFwdGVyXy5hY3RpdmF0ZUluZGljYXRvcihwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpO1xuICAgIGlmICh0aGlzLmZvY3VzT25BY3RpdmF0ZV8pIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIFRhYlxuICAgKi9cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICAvLyBFYXJseSBleGl0XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5BUklBX1NFTEVDVEVELCAnZmFsc2UnKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5UQUJJTkRFWCwgJy0xJyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZWFjdGl2YXRlSW5kaWNhdG9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGltZW5zaW9ucyBvZiB0aGUgVGFiXG4gICAqIEByZXR1cm4geyFNRENUYWJEaW1lbnNpb25zfVxuICAgKi9cbiAgY29tcHV0ZURpbWVuc2lvbnMoKSB7XG4gICAgY29uc3Qgcm9vdFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRPZmZzZXRXaWR0aCgpO1xuICAgIGNvbnN0IHJvb3RMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRPZmZzZXRMZWZ0KCk7XG4gICAgY29uc3QgY29udGVudFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRDb250ZW50T2Zmc2V0V2lkdGgoKTtcbiAgICBjb25zdCBjb250ZW50TGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0Q29udGVudE9mZnNldExlZnQoKTtcblxuICAgIHJldHVybiB7XG4gICAgICByb290TGVmdCxcbiAgICAgIHJvb3RSaWdodDogcm9vdExlZnQgKyByb290V2lkdGgsXG4gICAgICBjb250ZW50TGVmdDogcm9vdExlZnQgKyBjb250ZW50TGVmdCxcbiAgICAgIGNvbnRlbnRSaWdodDogcm9vdExlZnQgKyBjb250ZW50TGVmdCArIGNvbnRlbnRXaWR0aCxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYkZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAdGVtcGxhdGUgRlxuICovXG5jbGFzcyBNRENDb21wb25lbnQge1xuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcmV0dXJuIHshTURDQ29tcG9uZW50fVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHdoaWNoIGV4dGVuZCBNRENCYXNlIHNob3VsZCBwcm92aWRlIGFuIGF0dGFjaFRvKCkgbWV0aG9kIHRoYXQgdGFrZXMgYSByb290IGVsZW1lbnQgYW5kXG4gICAgLy8gcmV0dXJucyBhbiBpbnN0YW50aWF0ZWQgY29tcG9uZW50IHdpdGggaXRzIHJvb3Qgc2V0IHRvIHRoYXQgZWxlbWVudC4gQWxzbyBub3RlIHRoYXQgaW4gdGhlIGNhc2VzIG9mXG4gICAgLy8gc3ViY2xhc3NlcywgYW4gZXhwbGljaXQgZm91bmRhdGlvbiBjbGFzcyB3aWxsIG5vdCBoYXZlIHRvIGJlIHBhc3NlZCBpbjsgaXQgd2lsbCBzaW1wbHkgYmUgaW5pdGlhbGl6ZWRcbiAgICAvLyBmcm9tIGdldERlZmF1bHRGb3VuZGF0aW9uKCkuXG4gICAgcmV0dXJuIG5ldyBNRENDb21wb25lbnQocm9vdCwgbmV3IE1EQ0ZvdW5kYXRpb24oKSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcGFyYW0ge0Y9fSBmb3VuZGF0aW9uXG4gICAqIEBwYXJhbSB7Li4uP30gYXJnc1xuICAgKi9cbiAgY29uc3RydWN0b3Iocm9vdCwgZm91bmRhdGlvbiA9IHVuZGVmaW5lZCwgLi4uYXJncykge1xuICAgIC8qKiBAcHJvdGVjdGVkIHshRWxlbWVudH0gKi9cbiAgICB0aGlzLnJvb3RfID0gcm9vdDtcbiAgICB0aGlzLmluaXRpYWxpemUoLi4uYXJncyk7XG4gICAgLy8gTm90ZSB0aGF0IHdlIGluaXRpYWxpemUgZm91bmRhdGlvbiBoZXJlIGFuZCBub3Qgd2l0aGluIHRoZSBjb25zdHJ1Y3RvcidzIGRlZmF1bHQgcGFyYW0gc28gdGhhdFxuICAgIC8vIHRoaXMucm9vdF8gaXMgZGVmaW5lZCBhbmQgY2FuIGJlIHVzZWQgd2l0aGluIHRoZSBmb3VuZGF0aW9uIGNsYXNzLlxuICAgIC8qKiBAcHJvdGVjdGVkIHshRn0gKi9cbiAgICB0aGlzLmZvdW5kYXRpb25fID0gZm91bmRhdGlvbiA9PT0gdW5kZWZpbmVkID8gdGhpcy5nZXREZWZhdWx0Rm91bmRhdGlvbigpIDogZm91bmRhdGlvbjtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmluaXQoKTtcbiAgICB0aGlzLmluaXRpYWxTeW5jV2l0aERPTSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgvKiAuLi5hcmdzICovKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBjYW4gb3ZlcnJpZGUgdGhpcyB0byBkbyBhbnkgYWRkaXRpb25hbCBzZXR1cCB3b3JrIHRoYXQgd291bGQgYmUgY29uc2lkZXJlZCBwYXJ0IG9mIGFcbiAgICAvLyBcImNvbnN0cnVjdG9yXCIuIEVzc2VudGlhbGx5LCBpdCBpcyBhIGhvb2sgaW50byB0aGUgcGFyZW50IGNvbnN0cnVjdG9yIGJlZm9yZSB0aGUgZm91bmRhdGlvbiBpc1xuICAgIC8vIGluaXRpYWxpemVkLiBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgYmVzaWRlcyByb290IGFuZCBmb3VuZGF0aW9uIHdpbGwgYmUgcGFzc2VkIGluIGhlcmUuXG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUZ9IGZvdW5kYXRpb25cbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkIGZvdW5kYXRpb24gY2xhc3MgZm9yIHRoZVxuICAgIC8vIGNvbXBvbmVudC5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSBnZXREZWZhdWx0Rm91bmRhdGlvbiB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkICcgK1xuICAgICAgJ2ZvdW5kYXRpb24gY2xhc3MnKTtcbiAgfVxuXG4gIGluaXRpYWxTeW5jV2l0aERPTSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCBpZiB0aGV5IG5lZWQgdG8gcGVyZm9ybSB3b3JrIHRvIHN5bmNocm9uaXplIHdpdGggYSBob3N0IERPTVxuICAgIC8vIG9iamVjdC4gQW4gZXhhbXBsZSBvZiB0aGlzIHdvdWxkIGJlIGEgZm9ybSBjb250cm9sIHdyYXBwZXIgdGhhdCBuZWVkcyB0byBzeW5jaHJvbml6ZSBpdHMgaW50ZXJuYWwgc3RhdGVcbiAgICAvLyB0byBzb21lIHByb3BlcnR5IG9yIGF0dHJpYnV0ZSBvZiB0aGUgaG9zdCBET00uIFBsZWFzZSBub3RlOiB0aGlzIGlzICpub3QqIHRoZSBwbGFjZSB0byBwZXJmb3JtIERPTVxuICAgIC8vIHJlYWRzL3dyaXRlcyB0aGF0IHdvdWxkIGNhdXNlIGxheW91dCAvIHBhaW50LCBhcyB0aGlzIGlzIGNhbGxlZCBzeW5jaHJvbm91c2x5IGZyb20gd2l0aGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtYXkgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJlbGVhc2UgYW55IHJlc291cmNlcyAvIGRlcmVnaXN0ZXIgYW55IGxpc3RlbmVycyB0aGV5IGhhdmVcbiAgICAvLyBhdHRhY2hlZC4gQW4gZXhhbXBsZSBvZiB0aGlzIG1pZ2h0IGJlIGRlcmVnaXN0ZXJpbmcgYSByZXNpemUgZXZlbnQgZnJvbSB0aGUgd2luZG93IG9iamVjdC5cbiAgICB0aGlzLmZvdW5kYXRpb25fLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIG1ldGhvZCB0byBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudC4gVGhpcyBpcyBtb3N0IHVzZWZ1bCB3aGVuXG4gICAqIGxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGxpc3RlbihldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIHJlbW92ZSBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogdW5saXN0ZW5pbmcgZm9yIGN1c3RvbSBldmVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bmxpc3RlbihldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGEgY3Jvc3MtYnJvd3Nlci1jb21wYXRpYmxlIGN1c3RvbSBldmVudCBmcm9tIHRoZSBjb21wb25lbnQgcm9vdCBvZiB0aGUgZ2l2ZW4gdHlwZSxcbiAgICogd2l0aCB0aGUgZ2l2ZW4gZGF0YS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshT2JqZWN0fSBldnREYXRhXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IHNob3VsZEJ1YmJsZVxuICAgKi9cbiAgZW1pdChldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICAgIGxldCBldnQ7XG4gICAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgICBidWJibGVzOiBzaG91bGRCdWJibGUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpO1xuICAgIH1cblxuICAgIHRoaXMucm9vdF8uZGlzcGF0Y2hFdmVudChldnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0NvbXBvbmVudDtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgUmlwcGxlLiBQcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIG1hbmFnaW5nXG4gKiAtIGNsYXNzZXNcbiAqIC0gZG9tXG4gKiAtIENTUyB2YXJpYWJsZXNcbiAqIC0gcG9zaXRpb25cbiAqIC0gZGltZW5zaW9uc1xuICogLSBzY3JvbGwgcG9zaXRpb25cbiAqIC0gZXZlbnQgaGFuZGxlcnNcbiAqIC0gdW5ib3VuZGVkLCBhY3RpdmUgYW5kIGRpc2FibGVkIHN0YXRlc1xuICpcbiAqIEFkZGl0aW9uYWxseSwgcHJvdmlkZXMgdHlwZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGFkYXB0ZXIgdG8gdGhlIENsb3N1cmVcbiAqIGNvbXBpbGVyLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGFkYXB0ZXIgZm9yIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZSB0byBkZWxlZ2F0ZSB1cGRhdGVzIHRvXG4gKiB0aGUgY29tcG9uZW50IGluIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZS4gU2VlIGFyY2hpdGVjdHVyZSBkb2N1bWVudGF0aW9uXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9jb2RlL2FyY2hpdGVjdHVyZS5tZFxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDUmlwcGxlQWRhcHRlciB7XG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBicm93c2VyU3VwcG9ydHNDc3NWYXJzKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNVbmJvdW5kZWQoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1N1cmZhY2VBY3RpdmUoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1N1cmZhY2VEaXNhYmxlZCgpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHshRXZlbnRUYXJnZXR9IHRhcmdldCAqL1xuICBjb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhck5hbWVcbiAgICogQHBhcmFtIHs/bnVtYmVyfHN0cmluZ30gdmFsdWVcbiAgICovXG4gIHVwZGF0ZUNzc1ZhcmlhYmxlKHZhck5hbWUsIHZhbHVlKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHshQ2xpZW50UmVjdH0gKi9cbiAgY29tcHV0ZUJvdW5kaW5nUmVjdCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19ICovXG4gIGdldFdpbmRvd1BhZ2VPZmZzZXQoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIC8vIFJpcHBsZSBpcyBhIHNwZWNpYWwgY2FzZSB3aGVyZSB0aGUgXCJyb290XCIgY29tcG9uZW50IGlzIHJlYWxseSBhIFwibWl4aW5cIiBvZiBzb3J0cyxcbiAgLy8gZ2l2ZW4gdGhhdCBpdCdzIGFuICd1cGdyYWRlJyB0byBhbiBleGlzdGluZyBjb21wb25lbnQuIFRoYXQgYmVpbmcgc2FpZCBpdCBpcyB0aGUgcm9vdFxuICAvLyBDU1MgY2xhc3MgdGhhdCBhbGwgb3RoZXIgQ1NTIGNsYXNzZXMgZGVyaXZlIGZyb20uXG4gIFJPT1Q6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkJyxcbiAgVU5CT1VOREVEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkJyxcbiAgQkdfRk9DVVNFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZCcsXG4gIEZHX0FDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb24nLFxuICBGR19ERUFDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbicsXG59O1xuXG5jb25zdCBzdHJpbmdzID0ge1xuICBWQVJfTEVGVDogJy0tbWRjLXJpcHBsZS1sZWZ0JyxcbiAgVkFSX1RPUDogJy0tbWRjLXJpcHBsZS10b3AnLFxuICBWQVJfRkdfU0laRTogJy0tbWRjLXJpcHBsZS1mZy1zaXplJyxcbiAgVkFSX0ZHX1NDQUxFOiAnLS1tZGMtcmlwcGxlLWZnLXNjYWxlJyxcbiAgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQnLFxuICBWQVJfRkdfVFJBTlNMQVRFX0VORDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kJyxcbn07XG5cbmNvbnN0IG51bWJlcnMgPSB7XG4gIFBBRERJTkc6IDEwLFxuICBJTklUSUFMX09SSUdJTl9TQ0FMRTogMC42LFxuICBERUFDVElWQVRJT05fVElNRU9VVF9NUzogMjI1LCAvLyBDb3JyZXNwb25kcyB0byAkbWRjLXJpcHBsZS10cmFuc2xhdGUtZHVyYXRpb24gKGkuZS4gYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIEZHX0RFQUNUSVZBVElPTl9NUzogMTUwLCAvLyBDb3JyZXNwb25kcyB0byAkbWRjLXJpcHBsZS1mYWRlLW91dC1kdXJhdGlvbiAoaS5lLiBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIGR1cmF0aW9uKVxuICBUQVBfREVMQVlfTVM6IDMwMCwgLy8gRGVsYXkgYmV0d2VlbiB0b3VjaCBhbmQgc2ltdWxhdGVkIG1vdXNlIGV2ZW50cyBvbiB0b3VjaCBkZXZpY2VzXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIHN1cHBvcnRzQ3NzVmFyaWFibGVzIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBDU1MgY3VzdG9tIHZhcmlhYmxlIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGFwcGx5UGFzc2l2ZSB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3QgcGFzc2l2ZSBldmVudCBsaXN0ZW5lciBzdXBwb3J0LlxuICogQHByaXZhdGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5sZXQgc3VwcG9ydHNQYXNzaXZlXztcblxuLyoqXG4gKiBAcGFyYW0geyFXaW5kb3d9IHdpbmRvd09ialxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopIHtcbiAgLy8gRGV0ZWN0IHZlcnNpb25zIG9mIEVkZ2Ugd2l0aCBidWdneSB2YXIoKSBzdXBwb3J0XG4gIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTE0OTU0NDgvXG4gIGNvbnN0IGRvY3VtZW50ID0gd2luZG93T2JqLmRvY3VtZW50O1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vZGUuY2xhc3NOYW1lID0gJ21kYy1yaXBwbGUtc3VyZmFjZS0tdGVzdC1lZGdlLXZhci1idWcnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gIC8vIFRoZSBidWcgZXhpc3RzIGlmIDo6YmVmb3JlIHN0eWxlIGVuZHMgdXAgcHJvcGFnYXRpbmcgdG8gdGhlIHBhcmVudCBlbGVtZW50LlxuICAvLyBBZGRpdGlvbmFsbHksIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBudWxsIGluIGlmcmFtZXMgd2l0aCBkaXNwbGF5OiBcIm5vbmVcIiBpbiBGaXJlZm94LFxuICAvLyBidXQgRmlyZWZveCBpcyBrbm93biB0byBzdXBwb3J0IENTUyBjdXN0b20gcHJvcGVydGllcyBjb3JyZWN0bHkuXG4gIC8vIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3dPYmouZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgY29uc3QgaGFzUHNldWRvVmFyQnVnID0gY29tcHV0ZWRTdHlsZSAhPT0gbnVsbCAmJiBjb21wdXRlZFN0eWxlLmJvcmRlclRvcFN0eWxlID09PSAnc29saWQnO1xuICBub2RlLnJlbW92ZSgpO1xuICByZXR1cm4gaGFzUHNldWRvVmFyQnVnO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvd09iaiwgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgbGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICBpZiAodHlwZW9mIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9PT0gJ2Jvb2xlYW4nICYmICFmb3JjZVJlZnJlc2gpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG4gIH1cblxuICBjb25zdCBzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCA9IHdpbmRvd09iai5DU1MgJiYgdHlwZW9mIHdpbmRvd09iai5DU1Muc3VwcG9ydHMgPT09ICdmdW5jdGlvbic7XG4gIGlmICghc3VwcG9ydHNGdW5jdGlvblByZXNlbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzID0gd2luZG93T2JqLkNTUy5zdXBwb3J0cygnLS1jc3MtdmFycycsICd5ZXMnKTtcbiAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gIC8vIFNlZTogUkVBRE1FIHNlY3Rpb24gb24gU2FmYXJpXG4gIGNvbnN0IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyA9IChcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCcoLS1jc3MtdmFyczogeWVzKScpICYmXG4gICAgd2luZG93T2JqLkNTUy5zdXBwb3J0cygnY29sb3InLCAnIzAwMDAwMDAwJylcbiAgKTtcblxuICBpZiAoZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyB8fCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9ICFkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaik7XG4gIH0gZWxzZSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICghZm9yY2VSZWZyZXNoKSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXNfID0gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG4gIH1cbiAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xufVxuXG4vL1xuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmQgaWYgc28sIHVzZSB0aGVtLlxuICogQHBhcmFtIHshV2luZG93PX0gZ2xvYmFsT2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58IUV2ZW50TGlzdGVuZXJPcHRpb25zfVxuICovXG5mdW5jdGlvbiBhcHBseVBhc3NpdmUoZ2xvYmFsT2JqID0gd2luZG93LCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBpZiAoc3VwcG9ydHNQYXNzaXZlXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgIGxldCBpc1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIHtnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgaXNTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gaXNTdXBwb3J0ZWQ7XG4gICAgICB9fSk7XG4gICAgfSBjYXRjaCAoZSkgeyB9XG5cbiAgICBzdXBwb3J0c1Bhc3NpdmVfID0gaXNTdXBwb3J0ZWQ7XG4gIH1cblxuICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlX1xuICAgID8gLyoqIEB0eXBlIHshRXZlbnRMaXN0ZW5lck9wdGlvbnN9ICovICh7cGFzc2l2ZTogdHJ1ZX0pXG4gICAgOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IEhUTUxFbGVtZW50UHJvdG90eXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudFByb3RvdHlwZSkge1xuICAvKipcbiAgICogT3JkZXIgaXMgaW1wb3J0YW50IGJlY2F1c2Ugd2UgcmV0dXJuIHRoZSBmaXJzdCBleGlzdGluZyBtZXRob2Qgd2UgZmluZC5cbiAgICogRG8gbm90IGNoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIGl0ZW1zIGluIHRoZSBiZWxvdyBhcnJheS5cbiAgICovXG4gIGNvbnN0IG1hdGNoZXNNZXRob2RzID0gWydtYXRjaGVzJywgJ3dlYmtpdE1hdGNoZXNTZWxlY3RvcicsICdtc01hdGNoZXNTZWxlY3RvciddO1xuICBsZXQgbWV0aG9kID0gJ21hdGNoZXMnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZXNNZXRob2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbWF0Y2hlc01ldGhvZCA9IG1hdGNoZXNNZXRob2RzW2ldO1xuICAgIGlmIChtYXRjaGVzTWV0aG9kIGluIEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gICAgICBtZXRob2QgPSBtYXRjaGVzTWV0aG9kO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ldGhvZDtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFFdmVudH0gZXZcbiAqIEBwYXJhbSB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gcGFnZU9mZnNldFxuICogQHBhcmFtIHshQ2xpZW50UmVjdH0gY2xpZW50UmVjdFxuICogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX1cbiAqL1xuZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGV2LCBwYWdlT2Zmc2V0LCBjbGllbnRSZWN0KSB7XG4gIGNvbnN0IHt4LCB5fSA9IHBhZ2VPZmZzZXQ7XG4gIGNvbnN0IGRvY3VtZW50WCA9IHggKyBjbGllbnRSZWN0LmxlZnQ7XG4gIGNvbnN0IGRvY3VtZW50WSA9IHkgKyBjbGllbnRSZWN0LnRvcDtcblxuICBsZXQgbm9ybWFsaXplZFg7XG4gIGxldCBub3JtYWxpemVkWTtcbiAgLy8gRGV0ZXJtaW5lIHRvdWNoIHBvaW50IHJlbGF0aXZlIHRvIHRoZSByaXBwbGUgY29udGFpbmVyLlxuICBpZiAoZXYudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgZXYgPSAvKiogQHR5cGUgeyFUb3VjaEV2ZW50fSAqLyAoZXYpO1xuICAgIG5vcm1hbGl6ZWRYID0gZXYuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBkb2N1bWVudFg7XG4gICAgbm9ybWFsaXplZFkgPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGRvY3VtZW50WTtcbiAgfSBlbHNlIHtcbiAgICBldiA9IC8qKiBAdHlwZSB7IU1vdXNlRXZlbnR9ICovIChldik7XG4gICAgbm9ybWFsaXplZFggPSBldi5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9XG5cbiAgcmV0dXJuIHt4OiBub3JtYWxpemVkWCwgeTogbm9ybWFsaXplZFl9O1xufVxuXG5leHBvcnQge3N1cHBvcnRzQ3NzVmFyaWFibGVzLCBhcHBseVBhc3NpdmUsIGdldE1hdGNoZXNQcm9wZXJ0eSwgZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENSaXBwbGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7Z2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGlzQWN0aXZhdGVkOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgYWN0aXZhdGlvbkV2ZW50OiAoIUV2ZW50fHVuZGVmaW5lZCksXG4gKiAgIGlzUHJvZ3JhbW1hdGljOiAoYm9vbGVhbnx1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgQWN0aXZhdGlvblN0YXRlVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBkZWFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGZvY3VzOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGJsdXI6IChzdHJpbmd8dW5kZWZpbmVkKVxuICogfX1cbiAqL1xubGV0IExpc3RlbmVySW5mb1R5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgYWN0aXZhdGU6IGZ1bmN0aW9uKCFFdmVudCksXG4gKiAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uKCFFdmVudD0pLFxuICogICBmb2N1czogZnVuY3Rpb24oKSxcbiAqICAgYmx1cjogZnVuY3Rpb24oKVxuICogfX1cbiAqL1xubGV0IExpc3RlbmVyc1R5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgeDogbnVtYmVyLFxuICogICB5OiBudW1iZXJcbiAqIH19XG4gKi9cbmxldCBQb2ludFR5cGU7XG5cbi8vIEFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gdGhlIHJvb3QgZWxlbWVudCBvZiBlYWNoIGluc3RhbmNlIGZvciBhY3RpdmF0aW9uXG5jb25zdCBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gWyd0b3VjaHN0YXJ0JywgJ3BvaW50ZXJkb3duJywgJ21vdXNlZG93bicsICdrZXlkb3duJ107XG5cbi8vIERlYWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiBkb2N1bWVudEVsZW1lbnQgd2hlbiBhIHBvaW50ZXItcmVsYXRlZCBkb3duIGV2ZW50IG9jY3Vyc1xuY29uc3QgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoZW5kJywgJ3BvaW50ZXJ1cCcsICdtb3VzZXVwJywgJ2NvbnRleHRtZW51J107XG5cbi8vIFRyYWNrcyBhY3RpdmF0aW9ucyB0aGF0IGhhdmUgb2NjdXJyZWQgb24gdGhlIGN1cnJlbnQgZnJhbWUsIHRvIGF2b2lkIHNpbXVsdGFuZW91cyBuZXN0ZWQgYWN0aXZhdGlvbnNcbi8qKiBAdHlwZSB7IUFycmF5PCFFdmVudFRhcmdldD59ICovXG5sZXQgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENSaXBwbGVBZGFwdGVyPn1cbiAqL1xuY2xhc3MgTURDUmlwcGxlRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiAvKiBib29sZWFuIC0gY2FjaGVkICovIHt9LFxuICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGFkZENsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiAoLyogdGFyZ2V0OiAhRXZlbnRUYXJnZXQgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKC8qIHZhck5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiAvKiBDbGllbnRSZWN0ICovIHt9LFxuICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4gLyoge3g6IG51bWJlciwgeTogbnVtYmVyfSAqLyB7fSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDUmlwcGxlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHshQ2xpZW50UmVjdH0gKi9cbiAgICB0aGlzLmZyYW1lXyA9IC8qKiBAdHlwZSB7IUNsaWVudFJlY3R9ICovICh7d2lkdGg6IDAsIGhlaWdodDogMH0pO1xuXG4gICAgLyoqIEBwcml2YXRlIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmluaXRpYWxTaXplXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLm1heFJhZGl1c18gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQpfSAqL1xuICAgIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyA9IChlKSA9PiB0aGlzLmFjdGl2YXRlXyhlKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmRlYWN0aXZhdGVfKCk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudD0pfSAqL1xuICAgIHRoaXMuZm9jdXNIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlRm9jdXMoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5ibHVySGFuZGxlcl8gPSAoKSA9PiB0aGlzLmhhbmRsZUJsdXIoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMucmVzaXplSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmxheW91dCgpO1xuXG4gICAgLyoqIEBwcml2YXRlIHt7bGVmdDogbnVtYmVyLCB0b3A6bnVtYmVyfX0gKi9cbiAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgIH07XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmZnU2NhbGVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IHRydWU7XG4gICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgIH07XG5cbiAgICAvKiogQHByaXZhdGUgeyFFdmVudHx1bmRlZmluZWR9ICovXG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gIH1cblxuICAvKipcbiAgICogV2UgY29tcHV0ZSB0aGlzIHByb3BlcnR5IHNvIHRoYXQgd2UgYXJlIG5vdCBxdWVyeWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2xpZW50XG4gICAqIHVudGlsIHRoZSBwb2ludCBpbiB0aW1lIHdoZXJlIHRoZSBmb3VuZGF0aW9uIHJlcXVlc3RzIGl0LiBUaGlzIHByZXZlbnRzIHNjZW5hcmlvcyB3aGVyZVxuICAgKiBjbGllbnQtc2lkZSBmZWF0dXJlLWRldGVjdGlvbiBtYXkgaGFwcGVuIHRvbyBlYXJseSwgc3VjaCBhcyB3aGVuIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXJcbiAgICogYW5kIHRoZW4gaW5pdGlhbGl6ZWQgYXQgbW91bnQgdGltZSBvbiB0aGUgY2xpZW50LlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFBY3RpdmF0aW9uU3RhdGVUeXBlfVxuICAgKi9cbiAgZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZhdGVkOiBmYWxzZSxcbiAgICAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiBmYWxzZSxcbiAgICAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogZmFsc2UsXG4gICAgICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogZmFsc2UsXG4gICAgICBhY3RpdmF0aW9uRXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgIGlzUHJvZ3JhbW1hdGljOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBpbml0KCkge1xuICAgIGNvbnN0IHN1cHBvcnRzUHJlc3NSaXBwbGUgPSB0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKTtcblxuICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoUk9PVCk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZXMgbmVlZCBsYXlvdXQgbG9naWMgYXBwbGllZCBpbW1lZGlhdGVseSB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGJvdGggc2hhZGUgYW5kIHJpcHBsZVxuICAgICAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmF0aW9uVGltZXJfKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1JPT1QsIFVOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFJPT1QpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIHRoaXMucmVtb3ZlQ3NzVmFyc18oKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKTtcbiAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN1cHBvcnRzUHJlc3NSaXBwbGUgUGFzc2VkIGZyb20gaW5pdCB0byBzYXZlIGEgcmVkdW5kYW50IGZ1bmN0aW9uIGNhbGxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnR9IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGUpIHtcbiAgICBpZiAoZS50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKSB7XG4gICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9KTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJlbW92ZUNzc1ZhcnNfKCkge1xuICAgIGNvbnN0IHtzdHJpbmdzfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4gICAgT2JqZWN0LmtleXMoc3RyaW5ncykuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgaWYgKGsuaW5kZXhPZignVkFSXycpID09PSAwKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoc3RyaW5nc1trXSwgbnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnQ9fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhY3RpdmF0ZV8oZSkge1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZURpc2FibGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEF2b2lkIHJlYWN0aW5nIHRvIGZvbGxvdy1vbiBldmVudHMgZmlyZWQgYnkgdG91Y2ggZGV2aWNlIGFmdGVyIGFuIGFscmVhZHktcHJvY2Vzc2VkIHVzZXIgaW50ZXJhY3Rpb25cbiAgICBjb25zdCBwcmV2aW91c0FjdGl2YXRpb25FdmVudCA9IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICAgIGNvbnN0IGlzU2FtZUludGVyYWN0aW9uID0gcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgJiYgZSAhPT0gdW5kZWZpbmVkICYmIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50LnR5cGUgIT09IGUudHlwZTtcbiAgICBpZiAoaXNTYW1lSW50ZXJhY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQgPSB0cnVlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA9IGUgPT09IHVuZGVmaW5lZDtcbiAgICBhY3RpdmF0aW9uU3RhdGUuYWN0aXZhdGlvbkV2ZW50ID0gZTtcbiAgICBhY3RpdmF0aW9uU3RhdGUud2FzQWN0aXZhdGVkQnlQb2ludGVyID0gYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID8gZmFsc2UgOiBlICE9PSB1bmRlZmluZWQgJiYgKFxuICAgICAgZS50eXBlID09PSAnbW91c2Vkb3duJyB8fCBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICdwb2ludGVyZG93bidcbiAgICApO1xuXG4gICAgY29uc3QgaGFzQWN0aXZhdGVkQ2hpbGQgPSBlICE9PSB1bmRlZmluZWQgJiYgYWN0aXZhdGVkVGFyZ2V0cy5sZW5ndGggPiAwICYmIGFjdGl2YXRlZFRhcmdldHMuc29tZShcbiAgICAgICh0YXJnZXQpID0+IHRoaXMuYWRhcHRlcl8uY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpKTtcbiAgICBpZiAoaGFzQWN0aXZhdGVkQ2hpbGQpIHtcbiAgICAgIC8vIEltbWVkaWF0ZWx5IHJlc2V0IGFjdGl2YXRpb24gc3RhdGUsIHdoaWxlIHByZXNlcnZpbmcgbG9naWMgdGhhdCBwcmV2ZW50cyB0b3VjaCBmb2xsb3ctb24gZXZlbnRzXG4gICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFjdGl2YXRlZFRhcmdldHMucHVzaCgvKiogQHR5cGUgeyFFdmVudFRhcmdldH0gKi8gKGUudGFyZ2V0KSk7XG4gICAgICB0aGlzLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGUpO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSk7XG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgLy8gUmVzZXQgYXJyYXkgb24gbmV4dCBmcmFtZSBhZnRlciB0aGUgY3VycmVudCBldmVudCBoYXMgaGFkIGEgY2hhbmNlIHRvIGJ1YmJsZSB0byBwcmV2ZW50IGFuY2VzdG9yIHJpcHBsZXNcbiAgICAgIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcblxuICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgJiYgZSAhPT0gdW5kZWZpbmVkICYmIChlLmtleSA9PT0gJyAnIHx8IGUua2V5Q29kZSA9PT0gMzIpKSB7XG4gICAgICAgIC8vIElmIHNwYWNlIHdhcyBwcmVzc2VkLCB0cnkgYWdhaW4gd2l0aGluIGFuIHJBRiBjYWxsIHRvIGRldGVjdCA6YWN0aXZlLCBiZWNhdXNlIGRpZmZlcmVudCBVQXMgcmVwb3J0XG4gICAgICAgIC8vIGFjdGl2ZSBzdGF0ZXMgaW5jb25zaXN0ZW50bHkgd2hlbiB0aGV5J3JlIGNhbGxlZCB3aXRoaW4gZXZlbnQgaGFuZGxpbmcgY29kZTpcbiAgICAgICAgLy8gLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02MzU5NzFcbiAgICAgICAgLy8gLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjkzNzQxXG4gICAgICAgIC8vIFdlIHRyeSBmaXJzdCBvdXRzaWRlIHJBRiB0byBzdXBwb3J0IEVkZ2UsIHdoaWNoIGRvZXMgbm90IGV4aGliaXQgdGhpcyBwcm9ibGVtLCBidXQgd2lsbCBjcmFzaCBpZiBhIENTU1xuICAgICAgICAvLyB2YXJpYWJsZSBpcyBzZXQgd2l0aGluIGEgckFGIGNhbGxiYWNrIGZvciBhIHN1Ym1pdCBidXR0b24gaW50ZXJhY3Rpb24gKCMyMjQxKS5cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgLy8gUmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSBpbW1lZGlhdGVseSBpZiBlbGVtZW50IHdhcyBub3QgbWFkZSBhY3RpdmUuXG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpIHtcbiAgICByZXR1cm4gKGUgIT09IHVuZGVmaW5lZCAmJiBlLnR5cGUgPT09ICdrZXlkb3duJykgPyB0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZUFjdGl2ZSgpIDogdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGV2ZW50IE9wdGlvbmFsIGV2ZW50IGNvbnRhaW5pbmcgcG9zaXRpb24gaW5mb3JtYXRpb24uXG4gICAqL1xuICBhY3RpdmF0ZShldmVudCkge1xuICAgIHRoaXMuYWN0aXZhdGVfKGV2ZW50KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBhbmltYXRlQWN0aXZhdGlvbl8oKSB7XG4gICAgY29uc3Qge1ZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIFZBUl9GR19UUkFOU0xBVEVfRU5EfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcbiAgICBjb25zdCB7RkdfREVBQ1RJVkFUSU9OLCBGR19BQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBjb25zdCB7REVBQ1RJVkFUSU9OX1RJTUVPVVRfTVN9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzO1xuXG4gICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcblxuICAgIGxldCB0cmFuc2xhdGVTdGFydCA9ICcnO1xuICAgIGxldCB0cmFuc2xhdGVFbmQgPSAnJztcblxuICAgIGlmICghdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICBjb25zdCB7c3RhcnRQb2ludCwgZW5kUG9pbnR9ID0gdGhpcy5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCk7XG4gICAgICB0cmFuc2xhdGVTdGFydCA9IGAke3N0YXJ0UG9pbnQueH1weCwgJHtzdGFydFBvaW50Lnl9cHhgO1xuICAgICAgdHJhbnNsYXRlRW5kID0gYCR7ZW5kUG9pbnQueH1weCwgJHtlbmRQb2ludC55fXB4YDtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIHRyYW5zbGF0ZVN0YXJ0KTtcbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfRU5ELCB0cmFuc2xhdGVFbmQpO1xuICAgIC8vIENhbmNlbCBhbnkgb25nb2luZyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBhbmltYXRpb25zXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcblxuICAgIC8vIEZvcmNlIGxheW91dCBpbiBvcmRlciB0byByZS10cmlnZ2VyIHRoZSBhbmltYXRpb24uXG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfKCksIERFQUNUSVZBVElPTl9USU1FT1VUX01TKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJuIHt7c3RhcnRQb2ludDogUG9pbnRUeXBlLCBlbmRQb2ludDogUG9pbnRUeXBlfX1cbiAgICovXG4gIGdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKSB7XG4gICAgY29uc3Qge2FjdGl2YXRpb25FdmVudCwgd2FzQWN0aXZhdGVkQnlQb2ludGVyfSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcblxuICAgIGxldCBzdGFydFBvaW50O1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIpIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoXG4gICAgICAgIC8qKiBAdHlwZSB7IUV2ZW50fSAqLyAoYWN0aXZhdGlvbkV2ZW50KSxcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5nZXRXaW5kb3dQYWdlT2Zmc2V0KCksIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICB4OiB0aGlzLmZyYW1lXy53aWR0aCAvIDIsXG4gICAgICAgIHk6IHRoaXMuZnJhbWVfLmhlaWdodCAvIDIsXG4gICAgICB9O1xuICAgIH1cbiAgICAvLyBDZW50ZXIgdGhlIGVsZW1lbnQgYXJvdW5kIHRoZSBzdGFydCBwb2ludC5cbiAgICBzdGFydFBvaW50ID0ge1xuICAgICAgeDogc3RhcnRQb2ludC54IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiBzdGFydFBvaW50LnkgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgY29uc3QgZW5kUG9pbnQgPSB7XG4gICAgICB4OiAodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgeTogKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgfTtcblxuICAgIHJldHVybiB7c3RhcnRQb2ludCwgZW5kUG9pbnR9O1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpIHtcbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYm90aCB3aGVuIGEgcG9pbnRpbmcgZGV2aWNlIGlzIHJlbGVhc2VkLCBhbmQgd2hlbiB0aGUgYWN0aXZhdGlvbiBhbmltYXRpb24gZW5kcy5cbiAgICAvLyBUaGUgZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBzaG91bGQgb25seSBydW4gYWZ0ZXIgYm90aCBvZiB0aG9zZSBvY2N1ci5cbiAgICBjb25zdCB7RkdfREVBQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBjb25zdCB7aGFzRGVhY3RpdmF0aW9uVVhSdW4sIGlzQWN0aXZhdGVkfSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBjb25zdCBhY3RpdmF0aW9uSGFzRW5kZWQgPSBoYXNEZWFjdGl2YXRpb25VWFJ1biB8fCAhaXNBY3RpdmF0ZWQ7XG5cbiAgICBpZiAoYWN0aXZhdGlvbkhhc0VuZGVkICYmIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXykge1xuICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIH0sIG51bWJlcnMuRkdfREVBQ1RJVkFUSU9OX01TKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCkge1xuICAgIGNvbnN0IHtGR19BQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICB9XG5cbiAgcmVzZXRBY3RpdmF0aW9uU3RhdGVfKCkge1xuICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmFjdGl2YXRpb25FdmVudDtcbiAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgLy8gVG91Y2ggZGV2aWNlcyBtYXkgZmlyZSBhZGRpdGlvbmFsIGV2ZW50cyBmb3IgdGhlIHNhbWUgaW50ZXJhY3Rpb24gd2l0aGluIGEgc2hvcnQgdGltZS5cbiAgICAvLyBTdG9yZSB0aGUgcHJldmlvdXMgZXZlbnQgdW50aWwgaXQncyBzYWZlIHRvIGFzc3VtZSB0aGF0IHN1YnNlcXVlbnQgZXZlbnRzIGFyZSBmb3IgbmV3IGludGVyYWN0aW9ucy5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdW5kZWZpbmVkLCBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuVEFQX0RFTEFZX01TKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVhY3RpdmF0ZV8oKSB7XG4gICAgY29uc3QgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBzY2VuYXJpb3Mgc3VjaCBhcyB3aGVuIHlvdSBoYXZlIGEga2V5dXAgZXZlbnQgdGhhdCBibHVycyB0aGUgZWxlbWVudC5cbiAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlID0gLyoqIEB0eXBlIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gKi8gKE9iamVjdC5hc3NpZ24oe30sIGFjdGl2YXRpb25TdGF0ZSkpO1xuXG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYykge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpKTtcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmhhc0RlYWN0aXZhdGlvblVYUnVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7XG4gICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZGVhY3RpdmF0ZV8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFBY3RpdmF0aW9uU3RhdGVUeXBlfSBvcHRpb25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhbmltYXRlRGVhY3RpdmF0aW9uXyh7d2FzQWN0aXZhdGVkQnlQb2ludGVyLCB3YXNFbGVtZW50TWFkZUFjdGl2ZX0pIHtcbiAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyIHx8IHdhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgIH1cbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICB9XG4gICAgdGhpcy5sYXlvdXRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBsYXlvdXRJbnRlcm5hbF8oKSB7XG4gICAgdGhpcy5mcmFtZV8gPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICBjb25zdCBtYXhEaW0gPSBNYXRoLm1heCh0aGlzLmZyYW1lXy5oZWlnaHQsIHRoaXMuZnJhbWVfLndpZHRoKTtcblxuICAgIC8vIFN1cmZhY2UgZGlhbWV0ZXIgaXMgdHJlYXRlZCBkaWZmZXJlbnRseSBmb3IgdW5ib3VuZGVkIHZzLiBib3VuZGVkIHJpcHBsZXMuXG4gICAgLy8gVW5ib3VuZGVkIHJpcHBsZSBkaWFtZXRlciBpcyBjYWxjdWxhdGVkIHNtYWxsZXIgc2luY2UgdGhlIHN1cmZhY2UgaXMgZXhwZWN0ZWQgdG8gYWxyZWFkeSBiZSBwYWRkZWQgYXBwcm9wcmlhdGVseVxuICAgIC8vIHRvIGV4dGVuZCB0aGUgaGl0Ym94LCBhbmQgdGhlIHJpcHBsZSBpcyBleHBlY3RlZCB0byBtZWV0IHRoZSBlZGdlcyBvZiB0aGUgcGFkZGVkIGhpdGJveCAod2hpY2ggaXMgdHlwaWNhbGx5XG4gICAgLy8gc3F1YXJlKS4gQm91bmRlZCByaXBwbGVzLCBvbiB0aGUgb3RoZXIgaGFuZCwgYXJlIGZ1bGx5IGV4cGVjdGVkIHRvIGV4cGFuZCBiZXlvbmQgdGhlIHN1cmZhY2UncyBsb25nZXN0IGRpYW1ldGVyXG4gICAgLy8gKGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGRpYWdvbmFsIHBsdXMgYSBjb25zdGFudCBwYWRkaW5nKSwgYW5kIGFyZSBjbGlwcGVkIGF0IHRoZSBzdXJmYWNlJ3MgYm9yZGVyIHZpYVxuICAgIC8vIGBvdmVyZmxvdzogaGlkZGVuYC5cbiAgICBjb25zdCBnZXRCb3VuZGVkUmFkaXVzID0gKCkgPT4ge1xuICAgICAgY29uc3QgaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdyh0aGlzLmZyYW1lXy53aWR0aCwgMikgKyBNYXRoLnBvdyh0aGlzLmZyYW1lXy5oZWlnaHQsIDIpKTtcbiAgICAgIHJldHVybiBoeXBvdGVudXNlICsgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlBBRERJTkc7XG4gICAgfTtcblxuICAgIHRoaXMubWF4UmFkaXVzXyA9IHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSA/IG1heERpbSA6IGdldEJvdW5kZWRSYWRpdXMoKTtcblxuICAgIC8vIFJpcHBsZSBpcyBzaXplZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiBvZiB0aGUgc3VyZmFjZSwgdGhlbiBzY2FsZXMgdXAgdXNpbmcgYSBDU1Mgc2NhbGUgdHJhbnNmb3JtXG4gICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBNYXRoLmZsb29yKG1heERpbSAqIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5JTklUSUFMX09SSUdJTl9TQ0FMRSk7XG4gICAgdGhpcy5mZ1NjYWxlXyA9IHRoaXMubWF4UmFkaXVzXyAvIHRoaXMuaW5pdGlhbFNpemVfO1xuXG4gICAgdGhpcy51cGRhdGVMYXlvdXRDc3NWYXJzXygpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHVwZGF0ZUxheW91dENzc1ZhcnNfKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIFZBUl9GR19TSVpFLCBWQVJfTEVGVCwgVkFSX1RPUCwgVkFSX0ZHX1NDQUxFLFxuICAgIH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TSVpFLCBgJHt0aGlzLmluaXRpYWxTaXplX31weGApO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NDQUxFLCB0aGlzLmZnU2NhbGVfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgICAgbGVmdDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0xFRlQsIGAke3RoaXMudW5ib3VuZGVkQ29vcmRzXy5sZWZ0fXB4YCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9UT1AsIGAke3RoaXMudW5ib3VuZGVkQ29vcmRzXy50b3B9cHhgKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0VW5ib3VuZGVkKHVuYm91bmRlZCkge1xuICAgIGNvbnN0IHtVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGlmICh1bmJvdW5kZWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZvY3VzKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG5cbiAgaGFuZGxlQmx1cigpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCBNRENSaXBwbGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDUmlwcGxlRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEBleHRlbmRzIE1EQ0NvbXBvbmVudDwhTURDUmlwcGxlRm91bmRhdGlvbj5cbiAqL1xuY2xhc3MgTURDUmlwcGxlIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqIEBwYXJhbSB7Li4uP30gYXJncyAqL1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMudW5ib3VuZGVkXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7e2lzVW5ib3VuZGVkOiAoYm9vbGVhbnx1bmRlZmluZWQpfT19IG9wdGlvbnNcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZX1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290LCB7aXNVbmJvdW5kZWQgPSB1bmRlZmluZWR9ID0ge30pIHtcbiAgICBjb25zdCByaXBwbGUgPSBuZXcgTURDUmlwcGxlKHJvb3QpO1xuICAgIC8vIE9ubHkgb3ZlcnJpZGUgdW5ib3VuZGVkIGJlaGF2aW9yIGlmIG9wdGlvbiBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxuICAgIGlmIChpc1VuYm91bmRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByaXBwbGUudW5ib3VuZGVkID0gLyoqIEB0eXBlIHtib29sZWFufSAqLyAoaXNVbmJvdW5kZWQpO1xuICAgIH1cbiAgICByZXR1cm4gcmlwcGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IVJpcHBsZUNhcGFibGVTdXJmYWNlfSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVBZGFwdGVyKGluc3RhbmNlKSB7XG4gICAgY29uc3QgTUFUQ0hFUyA9IHV0aWwuZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4gdXRpbC5zdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpLFxuICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IGluc3RhbmNlLnVuYm91bmRlZCxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gaW5zdGFuY2Uucm9vdF9bTUFUQ0hFU10oJzphY3RpdmUnKSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiBpbnN0YW5jZS5kaXNhYmxlZCxcbiAgICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgY29udGFpbnNFdmVudFRhcmdldDogKHRhcmdldCkgPT4gaW5zdGFuY2Uucm9vdF8uY29udGFpbnModGFyZ2V0KSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgaW5zdGFuY2Uucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IChoYW5kbGVyKSA9PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IGluc3RhbmNlLnJvb3RfLnN0eWxlLnNldFByb3BlcnR5KHZhck5hbWUsIHZhbHVlKSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IGluc3RhbmNlLnJvb3RfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4gKHt4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldH0pLFxuICAgIH07XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgZ2V0IHVuYm91bmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdW5ib3VuZGVkICovXG4gIHNldCB1bmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgdGhpcy51bmJvdW5kZWRfID0gQm9vbGVhbih1bmJvdW5kZWQpO1xuICAgIHRoaXMuc2V0VW5ib3VuZGVkXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3N1cmUgQ29tcGlsZXIgdGhyb3dzIGFuIGFjY2VzcyBjb250cm9sIGVycm9yIHdoZW4gZGlyZWN0bHkgYWNjZXNzaW5nIGFcbiAgICogcHJvdGVjdGVkIG9yIHByaXZhdGUgcHJvcGVydHkgaW5zaWRlIGEgZ2V0dGVyL3NldHRlciwgbGlrZSB1bmJvdW5kZWQgYWJvdmUuXG4gICAqIEJ5IGFjY2Vzc2luZyB0aGUgcHJvdGVjdGVkIHByb3BlcnR5IGluc2lkZSBhIG1ldGhvZCwgd2Ugc29sdmUgdGhhdCBwcm9ibGVtLlxuICAgKiBUaGF0J3Mgd2h5IHRoaXMgZnVuY3Rpb24gZXhpc3RzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0VW5ib3VuZGVkXygpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldFVuYm91bmRlZCh0aGlzLnVuYm91bmRlZF8pO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5hY3RpdmF0ZSgpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmRlYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmxheW91dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVGb3VuZGF0aW9ufVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDUmlwcGxlRm91bmRhdGlvbihNRENSaXBwbGUuY3JlYXRlQWRhcHRlcih0aGlzKSk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGluaXRpYWxTeW5jV2l0aERPTSgpIHtcbiAgICB0aGlzLnVuYm91bmRlZCA9ICdtZGNSaXBwbGVJc1VuYm91bmRlZCcgaW4gdGhpcy5yb290Xy5kYXRhc2V0O1xuICB9XG59XG5cbi8qKlxuICogU2VlIE1hdGVyaWFsIERlc2lnbiBzcGVjIGZvciBtb3JlIGRldGFpbHMgb24gd2hlbiB0byB1c2UgcmlwcGxlcy5cbiAqIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9tb3Rpb24vY2hvcmVvZ3JhcGh5Lmh0bWwjY2hvcmVvZ3JhcGh5LWNyZWF0aW9uXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIFJpcHBsZUNhcGFibGVTdXJmYWNlIHt9XG5cbi8qKiBAcHJvdGVjdGVkIHshRWxlbWVudH0gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS5yb290XztcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgcmlwcGxlIGJsZWVkcyBvdXQgb2YgdGhlIGJvdW5kcyBvZiB0aGUgZWxlbWVudC5cbiAqIEB0eXBlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLnVuYm91bmRlZDtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgcmlwcGxlIGlzIGF0dGFjaGVkIHRvIGEgZGlzYWJsZWQgY29tcG9uZW50LlxuICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUuZGlzYWJsZWQ7XG5cbmV4cG9ydCB7TURDUmlwcGxlLCBNRENSaXBwbGVGb3VuZGF0aW9uLCBSaXBwbGVDYXBhYmxlU3VyZmFjZSwgdXRpbH07XG4iLCJpbXBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9pbmRleCdcbmltcG9ydCB7XG4gIHN1cHBvcnRzQ3NzVmFyaWFibGVzLFxuICBnZXRNYXRjaGVzUHJvcGVydHksXG4gIGFwcGx5UGFzc2l2ZVxufSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL3V0aWwnXG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVCYXNlIGV4dGVuZHMgTURDUmlwcGxlRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgTUFUQ0hFUygpIHtcbiAgICAvKiBnbG9iYWwgSFRNTEVsZW1lbnQgKi9cbiAgICByZXR1cm4gKFxuICAgICAgUmlwcGxlQmFzZS5fbWF0Y2hlcyB8fFxuICAgICAgKFJpcHBsZUJhc2UuX21hdGNoZXMgPSBnZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKSlcbiAgICApXG4gIH1cblxuICBzdGF0aWMgaXNTdXJmYWNlQWN0aXZlKHJlZikge1xuICAgIHJldHVybiByZWZbUmlwcGxlQmFzZS5NQVRDSEVTXSgnOmFjdGl2ZScpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcih2bSwgb3B0aW9ucykge1xuICAgIHN1cGVyKFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1VuYm91bmRlZDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWxbUmlwcGxlQmFzZS5NQVRDSEVTXSgnOmFjdGl2ZScpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2bS4kZGVsZXRlKHZtLmNsYXNzZXMsIGNsYXNzTmFtZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IHRhcmdldCA9PiB2bS4kZWwuY29udGFpbnModGFyZ2V0KSxcbiAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHZtLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKHZhck5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2bS4kc2V0KHZtLnN0eWxlcywgdmFyTmFtZSwgdmFsdWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyB4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBSaXBwbGVNaXhpbiA9IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMucmlwcGxlID0gbmV3IFJpcHBsZUJhc2UodGhpcylcbiAgICB0aGlzLnJpcHBsZS5pbml0KClcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnJpcHBsZS5kZXN0cm95KClcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICA8Y3VzdG9tLWVsZW1lbnQgXG4gICAgOnRhZz1cInRhZ1wiIFxuICAgIDpjbGFzc2VzPVwiY2xhc3Nlc1wiXG4gICAgOnN0eWxlcz1cInN0eWxlc1wiIFxuICAgIGNsYXNzPVwibWRjLXJpcHBsZVwiPlxuICAgIDxzbG90IC8+XG4gIDwvY3VzdG9tLWVsZW1lbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudE1peGluIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IFJpcHBsZU1peGluIH0gZnJvbSAnLi9tZGMtcmlwcGxlLWJhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1yaXBwbGUnLFxuICBtaXhpbnM6IFtDdXN0b21FbGVtZW50TWl4aW4sIFJpcHBsZU1peGluXSxcbiAgcHJvcHM6IHtcbiAgICB0YWc6IFN0cmluZ1xuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cclxuICA8Y3VzdG9tLWxpbmtcclxuICAgIDpjbGFzcz1cImNsYXNzZXNcIlxyXG4gICAgOnN0eWxlPVwic3R5bGVzXCJcclxuICAgIDpsaW5rPVwibGlua1wiXHJcbiAgICBjbGFzcz1cIm1kYy10YWJcIlxyXG4gICAgQGNsaWNrPVwiaGFuZGxlQ2xpY2tcIlxyXG4gICAgcm9sZT1cInRhYlwiXHJcbiAgICBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIlxyXG4gICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgPlxyXG4gICAgPHNwYW4gcmVmPVwiY29udGVudFwiIGNsYXNzPVwibWRjLXRhYl9fY29udGVudFwiPlxyXG4gICAgICA8aVxyXG4gICAgICAgIHYtaWY9XCIhIWhhc0ljb25cIlxyXG4gICAgICAgIHJlZj1cImljb25cIlxyXG4gICAgICAgIDpjbGFzcz1cImhhc0ljb24uY2xhc3Nlc1wiXHJcbiAgICAgICAgdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICBjbGFzcz1cIm1kYy10YWJfX2ljb25cIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8c2xvdCBuYW1lPVwiaWNvblwiPnt7IGhhc0ljb24uY29udGVudCB9fTwvc2xvdD5cclxuICAgICAgPC9pPlxyXG5cclxuICAgICAgPHNwYW4gdi1pZj1cImhhc1RleHRcIiBjbGFzcz1cIm1kYy10YWJfX3RleHQtbGFiZWxcIj4gPHNsb3QgLz4gPC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG5cclxuICAgIDxtZGMtdGFiLWluZGljYXRvciByZWY9XCJ0YWJJbmRpY2F0b3JcIj48L21kYy10YWItaW5kaWNhdG9yPlxyXG4gICAgPG1kYy10YWItcmlwcGxlPjwvbWRjLXRhYi1yaXBwbGU+XHJcbiAgPC9jdXN0b20tbGluaz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBNRENUYWJGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC90YWIvZm91bmRhdGlvbidcclxuaW1wb3J0IHtcclxuICBDdXN0b21MaW5rTWl4aW4sXHJcbiAgRGlzcGF0Y2hFdmVudE1peGluLFxyXG4gIGVtaXRDdXN0b21FdmVudCxcclxuICBleHRyYWN0SWNvblByb3AsXHJcbiAgVk1BVW5pcXVlSWRNaXhpblxyXG59IGZyb20gJy4uL2Jhc2UnXHJcbmltcG9ydCB7IFJpcHBsZUJhc2UgfSBmcm9tICcuLi9yaXBwbGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ21kYy10YWInLFxyXG4gIG1peGluczogW0N1c3RvbUxpbmtNaXhpbiwgRGlzcGF0Y2hFdmVudE1peGluLCBWTUFVbmlxdWVJZE1peGluXSxcclxuICBwcm9wczoge1xyXG4gICAgYWN0aXZlOiBCb29sZWFuLFxyXG4gICAgaWNvbjogW1N0cmluZywgQXJyYXksIE9iamVjdF0sXHJcbiAgICBzdGFja2VkOiBCb29sZWFuLFxyXG4gICAgbWluV2lkdGg6IEJvb2xlYW5cclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjbGFzc2VzOiB7XHJcbiAgICAgICAgJ21kYy10YWItLXN0YWNrZWQnOiB0aGlzLnN0YWNrZWQsXHJcbiAgICAgICAgJ21kYy10YWItLW1pbi13aWR0aCc6IHRoaXMubWluV2lkdGhcclxuICAgICAgfSxcclxuICAgICAgc3R5bGVzOiB7fVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGluamVjdDogWydtZGNUYWJCYXInXSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgaGFzSWNvbigpIHtcclxuICAgICAgaWYgKHRoaXMuaWNvbiB8fCB0aGlzLiRzbG90cy5pY29uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWNvbiA/IGV4dHJhY3RJY29uUHJvcCh0aGlzLmljb24pIDoge31cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0sXHJcbiAgICBoYXNUZXh0KCkge1xyXG4gICAgICByZXR1cm4gISF0aGlzLiRzbG90cy5kZWZhdWx0XHJcbiAgICB9XHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgYWN0aXZlKHZhbHVlKSB7fVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMuaWQgPSB0aGlzLnZtYV91aWRfXHJcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDVGFiRm91bmRhdGlvbih7XHJcbiAgICAgIHNldEF0dHI6IChhdHRyLCB2YWx1ZSkgPT4gdGhpcy4kZWwuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKSxcclxuICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpLFxyXG4gICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGRlbGV0ZSh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSksXHJcbiAgICAgIGhhc0NsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXHJcbiAgICAgIGFjdGl2YXRlSW5kaWNhdG9yOiBwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QgPT4ge1xyXG4gICAgICAgIHRoaXMuJHJlZnMudGFiSW5kaWNhdG9yLmFjdGl2YXRlKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdClcclxuICAgICAgfSxcclxuICAgICAgZGVhY3RpdmF0ZUluZGljYXRvcjogKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuJHJlZnMudGFiSW5kaWNhdG9yLmRlYWN0aXZhdGUoKVxyXG4gICAgICB9LFxyXG4gICAgICBub3RpZnlJbnRlcmFjdGVkOiAoKSA9PlxyXG4gICAgICAgIGVtaXRDdXN0b21FdmVudChcclxuICAgICAgICAgIHRoaXMuJGVsLFxyXG4gICAgICAgICAgTURDVGFiRm91bmRhdGlvbi5zdHJpbmdzLklOVEVSQUNURURfRVZFTlQsXHJcbiAgICAgICAgICB7IHRhYklkOiB0aGlzLmlkIH0sXHJcbiAgICAgICAgICB0cnVlIC8qIGJ1YmJsZSAqL1xyXG4gICAgICAgICksXHJcbiAgICAgIGdldE9mZnNldExlZnQ6ICgpID0+IHRoaXMuJGVsLm9mZnNldExlZnQsXHJcbiAgICAgIGdldE9mZnNldFdpZHRoOiAoKSA9PiB0aGlzLiRlbC5vZmZzZXRXaWR0aCxcclxuICAgICAgZ2V0Q29udGVudE9mZnNldExlZnQ6ICgpID0+IHRoaXMuJHJlZnMuY29udGVudC5vZmZzZXRMZWZ0LFxyXG4gICAgICBnZXRDb250ZW50T2Zmc2V0V2lkdGg6ICgpID0+IHRoaXMuJHJlZnMuY29udGVudC5vZmZzZXRXaWR0aCxcclxuICAgICAgZm9jdXM6ICgpID0+IHRoaXMuJGVsLmZvY3VzKClcclxuICAgIH0pXHJcbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ3RhYiBtb3VudGVkJylcclxuXHJcbiAgICB0aGlzLm1kY1RhYkJhci50YWJMaXN0LnB1c2godGhpcylcclxuXHJcbiAgICAvLyB0aGlzLnNldEFjdGl2ZSh0aGlzLmFjdGl2ZSlcclxuICB9LFxyXG4gIGJlZm9yZURlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmZvdW5kYXRpb24uZGVzdHJveSgpXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhY3RpdmF0ZShjb21wdXRlSW5kaWNhdG9yQ2xpZW50UmVjdCkge1xyXG4gICAgICB0aGlzLmZvdW5kYXRpb24uYWN0aXZhdGUoY29tcHV0ZUluZGljYXRvckNsaWVudFJlY3QpXHJcbiAgICB9LFxyXG5cclxuICAgIGRlYWN0aXZhdGUoKSB7XHJcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5kZWFjdGl2YXRlKClcclxuICAgIH0sXHJcbiAgICBoYW5kbGVDbGljayhldnQpIHtcclxuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUNsaWNrKGV2dClcclxuICAgIH0sXHJcbiAgICBpc0FjdGl2ZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbi5pc0FjdGl2ZSgpXHJcbiAgICB9LFxyXG4gICAgc2V0QWN0aXZlKGlzQWN0aXZlKSB7XHJcbiAgICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsICdtZGMtdGFiLS1hY3RpdmUnLCB0cnVlKSxcclxuICAgICAgICAgIHRoaXMuJHJlZnMudGFiSW5kaWNhdG9yLmFjdGl2YXRlKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVJbmRpY2F0b3JDbGllbnRSZWN0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4kcmVmcy50YWJJbmRpY2F0b3IuY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KClcclxuICAgIH0sXHJcblxyXG4gICAgY29tcHV0ZURpbWVuc2lvbnMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb24uY29tcHV0ZURpbWVuc2lvbnMoKVxyXG4gICAgfSxcclxuXHJcbiAgICBmb2N1cygpIHtcclxuICAgICAgdGhpcy4kZWwuZm9jdXMoKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgVEFCX0FDVElWQVRFRF9FVkVOVDogJ01EQ1RhYkJhcjphY3RpdmF0ZWQnLFxuICBUQUJfU0NST0xMRVJfU0VMRUNUT1I6ICcubWRjLXRhYi1zY3JvbGxlcicsXG4gIFRBQl9TRUxFQ1RPUjogJy5tZGMtdGFiJyxcbiAgQVJST1dfTEVGVF9LRVk6ICdBcnJvd0xlZnQnLFxuICBBUlJPV19SSUdIVF9LRVk6ICdBcnJvd1JpZ2h0JyxcbiAgRU5EX0tFWTogJ0VuZCcsXG4gIEhPTUVfS0VZOiAnSG9tZScsXG4gIEVOVEVSX0tFWTogJ0VudGVyJyxcbiAgU1BBQ0VfS0VZOiAnU3BhY2UnLFxufTtcblxuLyoqIEBlbnVtIHtudW1iZXJ9ICovXG5jb25zdCBudW1iZXJzID0ge1xuICBFWFRSQV9TQ1JPTExfQU1PVU5UOiAyMCxcbiAgQVJST1dfTEVGVF9LRVlDT0RFOiAzNyxcbiAgQVJST1dfUklHSFRfS0VZQ09ERTogMzksXG4gIEVORF9LRVlDT0RFOiAzNSxcbiAgSE9NRV9LRVlDT0RFOiAzNixcbiAgRU5URVJfS0VZQ09ERTogMTMsXG4gIFNQQUNFX0tFWUNPREU6IDMyLFxufTtcblxuZXhwb3J0IHtcbiAgbnVtYmVycyxcbiAgc3RyaW5ncyxcbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1RhYkRpbWVuc2lvbnN9IGZyb20gJ0BtYXRlcmlhbC90YWIvYWRhcHRlcic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRhYiBCYXIuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGFiIEJhciBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDVGFiQmFyQWRhcHRlciB7XG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIHRoZSBnaXZlbiBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgcG9zaXRpb24gdG8gc2Nyb2xsIHRvXG4gICAqL1xuICBzY3JvbGxUbyhzY3JvbGxYKSB7fVxuXG4gIC8qKlxuICAgKiBJbmNyZW1lbnRzIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBieSB0aGUgZ2l2ZW4gYW1vdW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYSW5jcmVtZW50IFRoZSBhbW91bnQgdG8gaW5jcmVtZW50IHNjcm9sbFxuICAgKi9cbiAgaW5jcmVtZW50U2Nyb2xsKHNjcm9sbFhJbmNyZW1lbnQpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd2lkdGggb2YgdGhlIHNjcm9sbCBjb250ZW50XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbENvbnRlbnRXaWR0aCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJvb3QgZWxlbWVudCdzIG9mZnNldFdpZHRoXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldE9mZnNldFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyBpZiB0aGUgVGFiIEJhciBsYW5ndWFnZSBkaXJlY3Rpb24gaXMgUlRMXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc1JUTCgpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggdG8gYmUgYWN0aXZhdGVkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYiB0byBhY3RpdmF0ZVxuICAgKi9cbiAgc2V0QWN0aXZlVGFiKGluZGV4KSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggd2l0aCB0aGUgZ2l2ZW4gY2xpZW50IHJlY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiIHRvIGFjdGl2YXRlXG4gICAqIEBwYXJhbSB7IUNsaWVudFJlY3R9IGNsaWVudFJlY3QgVGhlIGNsaWVudCByZWN0IG9mIHRoZSBwcmV2aW91c2x5IGFjdGl2ZSBUYWIgSW5kaWNhdG9yXG4gICAqL1xuICBhY3RpdmF0ZVRhYkF0SW5kZXgoaW5kZXgsIGNsaWVudFJlY3QpIHt9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYiB0byBkZWFjdGl2YXRlXG4gICAqL1xuICBkZWFjdGl2YXRlVGFiQXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWIgdG8gZm9jdXNcbiAgICovXG4gIGZvY3VzVGFiQXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2xpZW50IHJlY3Qgb2YgdGhlIHRhYidzIGluZGljYXRvclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICogQHJldHVybiB7IUNsaWVudFJlY3R9XG4gICAqL1xuICBnZXRUYWJJbmRpY2F0b3JDbGllbnRSZWN0QXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGFiIGRpbWVuc2lvbnMgb2YgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiXG4gICAqIEByZXR1cm4geyFNRENUYWJEaW1lbnNpb25zfVxuICAgKi9cbiAgZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgoaW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgdGFiIGxpc3RcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0VGFiTGlzdExlbmd0aCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBwcmV2aW91c2x5IGFjdGl2ZSB0YWJcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0UHJldmlvdXNBY3RpdmVUYWJJbmRleCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmb2N1c2VkIHRhYlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRGb2N1c2VkVGFiSW5kZXgoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZ2l2ZW4gdGFiXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgSUQgb2YgdGhlIHRhYiB3aG9zZSBpbmRleCB0byBkZXRlcm1pbmVcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0SW5kZXhPZlRhYkJ5SWQoaWQpIHt9XG5cbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBNRENUYWJCYXI6YWN0aXZhdGVkIGV2ZW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGFjdGl2YXRlZCB0YWJcbiAgICovXG4gIG5vdGlmeVRhYkFjdGl2YXRlZChpbmRleCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGFiQmFyQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcblxuaW1wb3J0IHtzdHJpbmdzLCBudW1iZXJzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgTURDVGFiQmFyQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtNRENUYWJEaW1lbnNpb25zfSBmcm9tICdAbWF0ZXJpYWwvdGFiL2FkYXB0ZXInO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIEB0eXBlIHtTZXQ8c3RyaW5nPn1cbiAqL1xuY29uc3QgQUNDRVBUQUJMRV9LRVlTID0gbmV3IFNldCgpO1xuLy8gSUUxMSBoYXMgbm8gc3VwcG9ydCBmb3IgbmV3IFNldCB3aXRoIGl0ZXJhYmxlIHNvIHdlIG5lZWQgdG8gaW5pdGlhbGl6ZSB0aGlzIGJ5IGhhbmRcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5BUlJPV19MRUZUX0tFWSk7XG5BQ0NFUFRBQkxFX0tFWVMuYWRkKHN0cmluZ3MuQVJST1dfUklHSFRfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5FTkRfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5IT01FX0tFWSk7XG5BQ0NFUFRBQkxFX0tFWVMuYWRkKHN0cmluZ3MuRU5URVJfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5TUEFDRV9LRVkpO1xuXG4vKipcbiAqIEB0eXBlIHtNYXA8bnVtYmVyLCBzdHJpbmc+fVxuICovXG5jb25zdCBLRVlDT0RFX01BUCA9IG5ldyBNYXAoKTtcbi8vIElFMTEgaGFzIG5vIHN1cHBvcnQgZm9yIG5ldyBNYXAgd2l0aCBpdGVyYWJsZSBzbyB3ZSBuZWVkIHRvIGluaXRpYWxpemUgdGhpcyBieSBoYW5kXG5LRVlDT0RFX01BUC5zZXQobnVtYmVycy5BUlJPV19MRUZUX0tFWUNPREUsIHN0cmluZ3MuQVJST1dfTEVGVF9LRVkpO1xuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuQVJST1dfUklHSFRfS0VZQ09ERSwgc3RyaW5ncy5BUlJPV19SSUdIVF9LRVkpO1xuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuRU5EX0tFWUNPREUsIHN0cmluZ3MuRU5EX0tFWSk7XG5LRVlDT0RFX01BUC5zZXQobnVtYmVycy5IT01FX0tFWUNPREUsIHN0cmluZ3MuSE9NRV9LRVkpO1xuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuRU5URVJfS0VZQ09ERSwgc3RyaW5ncy5FTlRFUl9LRVkpO1xuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuU1BBQ0VfS0VZQ09ERSwgc3RyaW5ncy5TUEFDRV9LRVkpO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENUYWJCYXJBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUYWJCYXJGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7bnVtYmVyfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICAvKipcbiAgICogQHNlZSBNRENUYWJCYXJBZGFwdGVyIGZvciB0eXBpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7IU1EQ1RhYkJhckFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJCYXJBZGFwdGVyfSAqLyAoe1xuICAgICAgc2Nyb2xsVG86ICgpID0+IHt9LFxuICAgICAgaW5jcmVtZW50U2Nyb2xsOiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbFBvc2l0aW9uOiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbENvbnRlbnRXaWR0aDogKCkgPT4ge30sXG4gICAgICBnZXRPZmZzZXRXaWR0aDogKCkgPT4ge30sXG4gICAgICBpc1JUTDogKCkgPT4ge30sXG4gICAgICBzZXRBY3RpdmVUYWI6ICgpID0+IHt9LFxuICAgICAgYWN0aXZhdGVUYWJBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGRlYWN0aXZhdGVUYWJBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGZvY3VzVGFiQXRJbmRleDogKCkgPT4ge30sXG4gICAgICBnZXRUYWJJbmRpY2F0b3JDbGllbnRSZWN0QXRJbmRleDogKCkgPT4ge30sXG4gICAgICBnZXRUYWJEaW1lbnNpb25zQXRJbmRleDogKCkgPT4ge30sXG4gICAgICBnZXRQcmV2aW91c0FjdGl2ZVRhYkluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGdldEZvY3VzZWRUYWJJbmRleDogKCkgPT4ge30sXG4gICAgICBnZXRJbmRleE9mVGFiQnlJZDogKCkgPT4ge30sXG4gICAgICBnZXRUYWJMaXN0TGVuZ3RoOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeVRhYkFjdGl2YXRlZDogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDVGFiQmFyQWRhcHRlcn0gYWRhcHRlclxuICAgKiAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENUYWJCYXJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51c2VBdXRvbWF0aWNBY3RpdmF0aW9uXyA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFN3aXRjaGVzIGJldHdlZW4gYXV0b21hdGljIGFuZCBtYW51YWwgYWN0aXZhdGlvbiBtb2Rlcy5cbiAgICogU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMvI3RhYnBhbmVsIGZvciBleGFtcGxlcy5cbiAgICogQHBhcmFtIHtib29sZWFufSB1c2VBdXRvbWF0aWNBY3RpdmF0aW9uXG4gICAqL1xuICBzZXRVc2VBdXRvbWF0aWNBY3RpdmF0aW9uKHVzZUF1dG9tYXRpY0FjdGl2YXRpb24pIHtcbiAgICB0aGlzLnVzZUF1dG9tYXRpY0FjdGl2YXRpb25fID0gdXNlQXV0b21hdGljQWN0aXZhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqL1xuICBhY3RpdmF0ZVRhYihpbmRleCkge1xuICAgIGNvbnN0IHByZXZpb3VzQWN0aXZlSW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldFByZXZpb3VzQWN0aXZlVGFiSW5kZXgoKTtcbiAgICBpZiAoIXRoaXMuaW5kZXhJc0luUmFuZ2VfKGluZGV4KSB8fCBpbmRleCA9PT0gcHJldmlvdXNBY3RpdmVJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8uZGVhY3RpdmF0ZVRhYkF0SW5kZXgocHJldmlvdXNBY3RpdmVJbmRleCk7XG4gICAgdGhpcy5hZGFwdGVyXy5hY3RpdmF0ZVRhYkF0SW5kZXgoaW5kZXgsIHRoaXMuYWRhcHRlcl8uZ2V0VGFiSW5kaWNhdG9yQ2xpZW50UmVjdEF0SW5kZXgocHJldmlvdXNBY3RpdmVJbmRleCkpO1xuICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoaW5kZXgpO1xuXG4gICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlUYWJBY3RpdmF0ZWQoaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIGtleWRvd24gZXZlbnRcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlS2V5RG93bihldnQpIHtcbiAgICAvLyBHZXQgdGhlIGtleSBmcm9tIHRoZSBldmVudFxuICAgIGNvbnN0IGtleSA9IHRoaXMuZ2V0S2V5RnJvbUV2ZW50XyhldnQpO1xuXG4gICAgLy8gRWFybHkgZXhpdCBpZiB0aGUgZXZlbnQga2V5IGlzbid0IG9uZSBvZiB0aGUga2V5Ym9hcmQgbmF2aWdhdGlvbiBrZXlzXG4gICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUHJldmVudCBkZWZhdWx0IGJlaGF2aW9yIGZvciBtb3ZlbWVudCBrZXlzLCBidXQgbm90IGZvciBhY3RpdmF0aW9uIGtleXMsIHNpbmNlIDphY3RpdmUgaXMgdXNlZCB0byBhcHBseSByaXBwbGVcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmF0aW9uS2V5XyhrZXkpKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51c2VBdXRvbWF0aWNBY3RpdmF0aW9uXykge1xuICAgICAgaWYgKHRoaXMuaXNBY3RpdmF0aW9uS2V5XyhrZXkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRldGVybWluZVRhcmdldEZyb21LZXlfKHRoaXMuYWRhcHRlcl8uZ2V0UHJldmlvdXNBY3RpdmVUYWJJbmRleCgpLCBrZXkpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBY3RpdmVUYWIoaW5kZXgpO1xuICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldyhpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZvY3VzZWRUYWJJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0Rm9jdXNlZFRhYkluZGV4KCk7XG4gICAgICBpZiAodGhpcy5pc0FjdGl2YXRpb25LZXlfKGtleSkpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBY3RpdmVUYWIoZm9jdXNlZFRhYkluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kZXRlcm1pbmVUYXJnZXRGcm9tS2V5Xyhmb2N1c2VkVGFiSW5kZXgsIGtleSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNUYWJBdEluZGV4KGluZGV4KTtcbiAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldyhpbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIE1EQ1RhYjppbnRlcmFjdGVkIGV2ZW50XG4gICAqIEBwYXJhbSB7IUN1c3RvbUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZVRhYkludGVyYWN0aW9uKGV2dCkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QWN0aXZlVGFiKHRoaXMuYWRhcHRlcl8uZ2V0SW5kZXhPZlRhYkJ5SWQoZXZ0LmRldGFpbC50YWJJZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbHMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggaW50byB2aWV3XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgdGFiIGluZGV4IHRvIG1ha2UgdmlzaWJsZVxuICAgKi9cbiAgc2Nyb2xsSW50b1ZpZXcoaW5kZXgpIHtcbiAgICAvLyBFYXJseSBleGl0IGlmIHRoZSBpbmRleCBpcyBvdXQgb2YgcmFuZ2VcbiAgICBpZiAoIXRoaXMuaW5kZXhJc0luUmFuZ2VfKGluZGV4KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEFsd2F5cyBzY3JvbGwgdG8gMCBpZiBzY3JvbGxpbmcgdG8gdGhlIDB0aCBpbmRleFxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uc2Nyb2xsVG8oMCk7XG4gICAgfVxuXG4gICAgLy8gQWx3YXlzIHNjcm9sbCB0byB0aGUgbWF4IHZhbHVlIGlmIHNjcm9sbGluZyB0byB0aGUgTnRoIGluZGV4XG4gICAgLy8gTURDVGFiU2Nyb2xsZXIuc2Nyb2xsVG8oKSB3aWxsIG5ldmVyIHNjcm9sbCBwYXN0IHRoZSBtYXggcG9zc2libGUgdmFsdWVcbiAgICBpZiAoaW5kZXggPT09IHRoaXMuYWRhcHRlcl8uZ2V0VGFiTGlzdExlbmd0aCgpIC0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uc2Nyb2xsVG8odGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50V2lkdGgoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNSVExfKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbEludG9WaWV3UlRMXyhpbmRleCk7XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGxJbnRvVmlld18oaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgbWV0aG9kIGZvciBkZXRlcm1pbmluZyB0aGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHRhYiBiYXNlZCBvbiB3aGF0IGtleSB3YXMgcHJlc3NlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gb3JpZ2luIFRoZSBvcmlnaW5hbCBpbmRleCBmcm9tIHdoaWNoIHRvIGRldGVybWluZSB0aGUgZGVzdGluYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgbmFtZSBvZiB0aGUga2V5XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRldGVybWluZVRhcmdldEZyb21LZXlfKG9yaWdpbiwga2V5KSB7XG4gICAgY29uc3QgaXNSVEwgPSB0aGlzLmlzUlRMXygpO1xuICAgIGNvbnN0IG1heEluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRUYWJMaXN0TGVuZ3RoKCkgLSAxO1xuICAgIGNvbnN0IHNob3VsZEdvVG9FbmQgPSBrZXkgPT09IHN0cmluZ3MuRU5EX0tFWTtcbiAgICBjb25zdCBzaG91bGREZWNyZW1lbnQgPSBrZXkgPT09IHN0cmluZ3MuQVJST1dfTEVGVF9LRVkgJiYgIWlzUlRMIHx8IGtleSA9PT0gc3RyaW5ncy5BUlJPV19SSUdIVF9LRVkgJiYgaXNSVEw7XG4gICAgY29uc3Qgc2hvdWxkSW5jcmVtZW50ID0ga2V5ID09PSBzdHJpbmdzLkFSUk9XX1JJR0hUX0tFWSAmJiAhaXNSVEwgfHwga2V5ID09PSBzdHJpbmdzLkFSUk9XX0xFRlRfS0VZICYmIGlzUlRMO1xuICAgIGxldCBpbmRleCA9IG9yaWdpbjtcblxuICAgIGlmIChzaG91bGRHb1RvRW5kKSB7XG4gICAgICBpbmRleCA9IG1heEluZGV4O1xuICAgIH0gZWxzZSBpZiAoc2hvdWxkRGVjcmVtZW50KSB7XG4gICAgICBpbmRleCAtPSAxO1xuICAgIH0gZWxzZSBpZiAoc2hvdWxkSW5jcmVtZW50KSB7XG4gICAgICBpbmRleCArPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaW5kZXggPSBtYXhJbmRleDtcbiAgICB9IGVsc2UgaWYgKGluZGV4ID4gbWF4SW5kZXgpIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgc2Nyb2xsIGluY3JlbWVudCB0aGF0IHdpbGwgbWFrZSB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCB2aXNpYmxlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYlxuICAgKiBAcGFyYW0ge251bWJlcn0gbmV4dEluZGV4IFRoZSBpbmRleCBvZiB0aGUgbmV4dCB0YWJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFBvc2l0aW9uIFRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gYmFyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSBUYWIgQmFyXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhbGN1bGF0ZVNjcm9sbEluY3JlbWVudF8oaW5kZXgsIG5leHRJbmRleCwgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoKSB7XG4gICAgY29uc3QgbmV4dFRhYkRpbWVuc2lvbnMgPSB0aGlzLmFkYXB0ZXJfLmdldFRhYkRpbWVuc2lvbnNBdEluZGV4KG5leHRJbmRleCk7XG4gICAgY29uc3QgcmVsYXRpdmVDb250ZW50TGVmdCA9IG5leHRUYWJEaW1lbnNpb25zLmNvbnRlbnRMZWZ0IC0gc2Nyb2xsUG9zaXRpb24gLSBiYXJXaWR0aDtcbiAgICBjb25zdCByZWxhdGl2ZUNvbnRlbnRSaWdodCA9IG5leHRUYWJEaW1lbnNpb25zLmNvbnRlbnRSaWdodCAtIHNjcm9sbFBvc2l0aW9uO1xuICAgIGNvbnN0IGxlZnRJbmNyZW1lbnQgPSByZWxhdGl2ZUNvbnRlbnRSaWdodCAtIG51bWJlcnMuRVhUUkFfU0NST0xMX0FNT1VOVDtcbiAgICBjb25zdCByaWdodEluY3JlbWVudCA9IHJlbGF0aXZlQ29udGVudExlZnQgKyBudW1iZXJzLkVYVFJBX1NDUk9MTF9BTU9VTlQ7XG5cbiAgICBpZiAobmV4dEluZGV4IDwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbihsZWZ0SW5jcmVtZW50LCAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5tYXgocmlnaHRJbmNyZW1lbnQsIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIHNjcm9sbCBpbmNyZW1lbnQgdGhhdCB3aWxsIG1ha2UgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggdmlzaWJsZSBpbiBSVExcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZXh0SW5kZXggVGhlIGluZGV4IG9mIHRoZSBuZXh0IHRhYlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsUG9zaXRpb24gVGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBiYXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIFRhYiBCYXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbENvbnRlbnRXaWR0aCBUaGUgd2lkdGggb2YgdGhlIHNjcm9sbCBjb250ZW50XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhbGN1bGF0ZVNjcm9sbEluY3JlbWVudFJUTF8oaW5kZXgsIG5leHRJbmRleCwgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoLCBzY3JvbGxDb250ZW50V2lkdGgpIHtcbiAgICBjb25zdCBuZXh0VGFiRGltZW5zaW9ucyA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgobmV4dEluZGV4KTtcbiAgICBjb25zdCByZWxhdGl2ZUNvbnRlbnRMZWZ0ID0gc2Nyb2xsQ29udGVudFdpZHRoIC0gbmV4dFRhYkRpbWVuc2lvbnMuY29udGVudExlZnQgLSBzY3JvbGxQb3NpdGlvbjtcbiAgICBjb25zdCByZWxhdGl2ZUNvbnRlbnRSaWdodCA9IHNjcm9sbENvbnRlbnRXaWR0aCAtIG5leHRUYWJEaW1lbnNpb25zLmNvbnRlbnRSaWdodCAtIHNjcm9sbFBvc2l0aW9uIC0gYmFyV2lkdGg7XG4gICAgY29uc3QgbGVmdEluY3JlbWVudCA9IHJlbGF0aXZlQ29udGVudFJpZ2h0ICsgbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuICAgIGNvbnN0IHJpZ2h0SW5jcmVtZW50ID0gcmVsYXRpdmVDb250ZW50TGVmdCAtIG51bWJlcnMuRVhUUkFfU0NST0xMX0FNT1VOVDtcblxuICAgIGlmIChuZXh0SW5kZXggPiBpbmRleCkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KGxlZnRJbmNyZW1lbnQsIDApO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLm1pbihyaWdodEluY3JlbWVudCwgMCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgaW5kZXggb2YgdGhlIGFkamFjZW50IHRhYiBjbG9zZXN0IHRvIGVpdGhlciBlZGdlIG9mIHRoZSBUYWIgQmFyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYlxuICAgKiBAcGFyYW0geyFNRENUYWJEaW1lbnNpb25zfSB0YWJEaW1lbnNpb25zIFRoZSBkaW1lbnNpb25zIG9mIHRoZSB0YWJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFBvc2l0aW9uIFRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gYmFyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSB0YWIgYmFyXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZpbmRBZGphY2VudFRhYkluZGV4Q2xvc2VzdFRvRWRnZV8oaW5kZXgsIHRhYkRpbWVuc2lvbnMsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCkge1xuICAgIC8qKlxuICAgICAqIFRhYnMgYXJlIGxhaWQgb3V0IGluIHRoZSBUYWIgU2Nyb2xsZXIgbGlrZSB0aGlzOlxuICAgICAqXG4gICAgICogICAgU2Nyb2xsIFBvc2l0aW9uXG4gICAgICogICAgKy0tLStcbiAgICAgKiAgICB8ICAgfCAgIEJhciBXaWR0aFxuICAgICAqICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICogICAgfCAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAgKiAgICB8ICAgViAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVlxuICAgICAqICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICogICAgViAgIHwgICAgICAgICAgICAgVGFiIFNjcm9sbGVyICAgICAgICAgIHxcbiAgICAgKiAgICArLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICogICAgfCAgICBUYWIgICAgIHwgICAgICBUYWIgICAgIHwgICAgICAgIFRhYiAgICAgICAgfFxuICAgICAqICAgICstLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAgKiAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgICAqICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICpcbiAgICAgKiBUbyBkZXRlcm1pbmUgdGhlIG5leHQgYWRqYWNlbnQgaW5kZXgsIHdlIGxvb2sgYXQgdGhlIFRhYiByb290IGxlZnQgYW5kXG4gICAgICogVGFiIHJvb3QgcmlnaHQsIGJvdGggcmVsYXRpdmUgdG8gdGhlIHNjcm9sbCBwb3NpdGlvbi4gSWYgdGhlIFRhYiByb290XG4gICAgICogbGVmdCBpcyBsZXNzIHRoYW4gMCwgdGhlbiB3ZSBrbm93IGl0J3Mgb3V0IG9mIHZpZXcgdG8gdGhlIGxlZnQuIElmIHRoZVxuICAgICAqIFRhYiByb290IHJpZ2h0IG1pbnVzIHRoZSBiYXIgd2lkdGggaXMgZ3JlYXRlciB0aGFuIDAsIHdlIGtub3cgdGhlIFRhYiBpc1xuICAgICAqIG91dCBvZiB2aWV3IHRvIHRoZSByaWdodC4gRnJvbSB0aGVyZSwgd2UgZWl0aGVyIGluY3JlbWVudCBvciBkZWNyZW1lbnRcbiAgICAgKiB0aGUgaW5kZXguXG4gICAgICovXG4gICAgY29uc3QgcmVsYXRpdmVSb290TGVmdCA9IHRhYkRpbWVuc2lvbnMucm9vdExlZnQgLSBzY3JvbGxQb3NpdGlvbjtcbiAgICBjb25zdCByZWxhdGl2ZVJvb3RSaWdodCA9IHRhYkRpbWVuc2lvbnMucm9vdFJpZ2h0IC0gc2Nyb2xsUG9zaXRpb24gLSBiYXJXaWR0aDtcbiAgICBjb25zdCByZWxhdGl2ZVJvb3REZWx0YSA9IHJlbGF0aXZlUm9vdExlZnQgKyByZWxhdGl2ZVJvb3RSaWdodDtcbiAgICBjb25zdCBsZWZ0RWRnZUlzQ2xvc2VyID0gcmVsYXRpdmVSb290TGVmdCA8IDAgfHwgcmVsYXRpdmVSb290RGVsdGEgPCAwO1xuICAgIGNvbnN0IHJpZ2h0RWRnZUlzQ2xvc2VyID0gcmVsYXRpdmVSb290UmlnaHQgPiAwIHx8IHJlbGF0aXZlUm9vdERlbHRhID4gMDtcblxuICAgIGlmIChsZWZ0RWRnZUlzQ2xvc2VyKSB7XG4gICAgICByZXR1cm4gaW5kZXggLSAxO1xuICAgIH1cblxuICAgIGlmIChyaWdodEVkZ2VJc0Nsb3Nlcikge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgaW5kZXggb2YgdGhlIGFkamFjZW50IHRhYiBjbG9zZXN0IHRvIGVpdGhlciBlZGdlIG9mIHRoZSBUYWIgQmFyIGluIFJUTFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICogQHBhcmFtIHshTURDVGFiRGltZW5zaW9uc30gdGFiRGltZW5zaW9ucyBUaGUgZGltZW5zaW9ucyBvZiB0aGUgdGFiXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxQb3NpdGlvbiBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGJhcldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgdGFiIGJhclxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsQ29udGVudFdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsZXIgY29udGVudFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmaW5kQWRqYWNlbnRUYWJJbmRleENsb3Nlc3RUb0VkZ2VSVExfKGluZGV4LCB0YWJEaW1lbnNpb25zLCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgsIHNjcm9sbENvbnRlbnRXaWR0aCkge1xuICAgIGNvbnN0IHJvb3RMZWZ0ID0gc2Nyb2xsQ29udGVudFdpZHRoIC0gdGFiRGltZW5zaW9ucy5yb290TGVmdCAtIGJhcldpZHRoIC0gc2Nyb2xsUG9zaXRpb247XG4gICAgY29uc3Qgcm9vdFJpZ2h0ID0gc2Nyb2xsQ29udGVudFdpZHRoIC0gdGFiRGltZW5zaW9ucy5yb290UmlnaHQgLSBzY3JvbGxQb3NpdGlvbjtcbiAgICBjb25zdCByb290RGVsdGEgPSByb290TGVmdCArIHJvb3RSaWdodDtcbiAgICBjb25zdCBsZWZ0RWRnZUlzQ2xvc2VyID0gcm9vdExlZnQgPiAwIHx8IHJvb3REZWx0YSA+IDA7XG4gICAgY29uc3QgcmlnaHRFZGdlSXNDbG9zZXIgPSByb290UmlnaHQgPCAwIHx8IHJvb3REZWx0YSA8IDA7XG5cbiAgICBpZiAobGVmdEVkZ2VJc0Nsb3Nlcikge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRFZGdlSXNDbG9zZXIpIHtcbiAgICAgIHJldHVybiBpbmRleCAtIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGtleSBhc3NvY2lhdGVkIHdpdGggYSBrZXlkb3duIGV2ZW50XG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnQgVGhlIGtleWRvd24gZXZlbnRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0S2V5RnJvbUV2ZW50XyhldnQpIHtcbiAgICBpZiAoQUNDRVBUQUJMRV9LRVlTLmhhcyhldnQua2V5KSkge1xuICAgICAgcmV0dXJuIGV2dC5rZXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEtFWUNPREVfTUFQLmdldChldnQua2V5Q29kZSk7XG4gIH1cblxuICBpc0FjdGl2YXRpb25LZXlfKGtleSkge1xuICAgIHJldHVybiBrZXkgPT09IHN0cmluZ3MuU1BBQ0VfS0VZIHx8IGtleSA9PT0gc3RyaW5ncy5FTlRFUl9LRVk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIGEgZ2l2ZW4gaW5kZXggaXMgaW5jbHVzaXZlbHkgYmV0d2VlbiB0aGUgZW5kc1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHRvIHRlc3RcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluZGV4SXNJblJhbmdlXyhpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5hZGFwdGVyXy5nZXRUYWJMaXN0TGVuZ3RoKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmlldydzIFJUTCBwcm9wZXJ0eVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNSVExfKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmlzUlRMKCk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCBpbnRvIHZpZXcgZm9yIGxlZnQtdG8tcmlnaHQgdXNlcmFnZW50c1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWIgdG8gc2Nyb2xsIGludG8gdmlld1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2Nyb2xsSW50b1ZpZXdfKGluZGV4KSB7XG4gICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgY29uc3QgYmFyV2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3QgdGFiRGltZW5zaW9ucyA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgoaW5kZXgpO1xuICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuZmluZEFkamFjZW50VGFiSW5kZXhDbG9zZXN0VG9FZGdlXyhpbmRleCwgdGFiRGltZW5zaW9ucywgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoKTtcblxuICAgIGlmICghdGhpcy5pbmRleElzSW5SYW5nZV8obmV4dEluZGV4KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbEluY3JlbWVudCA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsSW5jcmVtZW50XyhpbmRleCwgbmV4dEluZGV4LCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgpO1xuICAgIHRoaXMuYWRhcHRlcl8uaW5jcmVtZW50U2Nyb2xsKHNjcm9sbEluY3JlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCBpbnRvIHZpZXcgaW4gUlRMXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgdGFiIGluZGV4IHRvIG1ha2UgdmlzaWJsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2Nyb2xsSW50b1ZpZXdSVExfKGluZGV4KSB7XG4gICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgY29uc3QgYmFyV2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3QgdGFiRGltZW5zaW9ucyA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgoaW5kZXgpO1xuICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50V2lkdGgoKTtcbiAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLmZpbmRBZGphY2VudFRhYkluZGV4Q2xvc2VzdFRvRWRnZVJUTF8oXG4gICAgICBpbmRleCwgdGFiRGltZW5zaW9ucywgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoLCBzY3JvbGxXaWR0aCk7XG5cbiAgICBpZiAoIXRoaXMuaW5kZXhJc0luUmFuZ2VfKG5leHRJbmRleCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxJbmNyZW1lbnQgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEluY3JlbWVudFJUTF8oaW5kZXgsIG5leHRJbmRleCwgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoLCBzY3JvbGxXaWR0aCk7XG4gICAgdGhpcy5hZGFwdGVyXy5pbmNyZW1lbnRTY3JvbGwoc2Nyb2xsSW5jcmVtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJCYXJGb3VuZGF0aW9uO1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IDpjbGFzcz1cImNsYXNzZXNcIiBjbGFzcz1cIm1kYy10YWItYmFyXCIgdi1vbj1cImxpc3RlbmVyc1wiIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgPG1kYy10YWItc2Nyb2xsZXIgcmVmPVwic2Nyb2xsZXJcIj4gPHNsb3Q+PC9zbG90PiA8L21kYy10YWItc2Nyb2xsZXI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENUYWJCYXJGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC90YWItYmFyL2ZvdW5kYXRpb24nXG5pbXBvcnQgeyBlbWl0Q3VzdG9tRXZlbnQgfSBmcm9tICcuLi9iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtdGFiLWJhcicsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgaW5kaWNhdG9yU3R5bGVzOiB7fSxcbiAgICAgIHRhYkxpc3Q6IFtdXG4gICAgfVxuICB9LFxuICBwcm9wczogeyBhY3RpdmVUYWJJbmRleDogW051bWJlciwgU3RyaW5nXSB9LFxuICBwcm92aWRlKCkge1xuICAgIHJldHVybiB7IG1kY1RhYkJhcjogdGhpcyB9XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDVGFiQmFyRm91bmRhdGlvbih7XG4gICAgICBzY3JvbGxUbzogc2Nyb2xsWCA9PiB0aGlzLiRyZWZzLnNjcm9sbGVyLnNjcm9sbFRvKHNjcm9sbFgpLFxuICAgICAgaW5jcmVtZW50U2Nyb2xsOiBzY3JvbGxYSW5jcmVtZW50ID0+XG4gICAgICAgIHRoaXMuJHJlZnMuc2Nyb2xsZXIuaW5jcmVtZW50U2Nyb2xsKHNjcm9sbFhJbmNyZW1lbnQpLFxuICAgICAgZ2V0U2Nyb2xsUG9zaXRpb246ICgpID0+IHRoaXMuJHJlZnMuc2Nyb2xsZXIuZ2V0U2Nyb2xsUG9zaXRpb24oKSxcbiAgICAgIGdldFNjcm9sbENvbnRlbnRXaWR0aDogKCkgPT4gdGhpcy4kcmVmcy5zY3JvbGxlci5nZXRTY3JvbGxDb250ZW50V2lkdGgoKSxcbiAgICAgIGdldE9mZnNldFdpZHRoOiAoKSA9PiB0aGlzLiRlbC5vZmZzZXRXaWR0aCxcbiAgICAgIGlzUlRMOiAoKSA9PlxuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiRlbCkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgPT09XG4gICAgICAgICdydGwnLFxuICAgICAgc2V0QWN0aXZlVGFiOiBpbmRleCA9PiB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5hY3RpdmF0ZVRhYihpbmRleClcbiAgICAgIH0sXG4gICAgICBhY3RpdmF0ZVRhYkF0SW5kZXg6IChpbmRleCwgY2xpZW50UmVjdCkgPT4ge1xuICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLmFjdGl2YXRlKGNsaWVudFJlY3QpXG4gICAgICB9LFxuICAgICAgZGVhY3RpdmF0ZVRhYkF0SW5kZXg6IGluZGV4ID0+IHtcbiAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XSAmJiB0aGlzLnRhYkxpc3RbaW5kZXhdLmRlYWN0aXZhdGUoKVxuICAgICAgfSxcbiAgICAgIGZvY3VzVGFiQXRJbmRleDogaW5kZXggPT4gdGhpcy50YWJMaXN0W2luZGV4XS5mb2N1cygpLFxuICAgICAgZ2V0VGFiSW5kaWNhdG9yQ2xpZW50UmVjdEF0SW5kZXg6IGluZGV4ID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdICYmXG4gICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS5jb21wdXRlSW5kaWNhdG9yQ2xpZW50UmVjdCgpXG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICBnZXRUYWJEaW1lbnNpb25zQXRJbmRleDogaW5kZXggPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy50YWJMaXN0W2luZGV4XS5jb21wdXRlRGltZW5zaW9ucygpXG4gICAgICB9LFxuICAgICAgZ2V0UHJldmlvdXNBY3RpdmVUYWJJbmRleDogKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLnRhYkxpc3RbaV0uaXNBY3RpdmUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9LFxuICAgICAgZ2V0Rm9jdXNlZFRhYkluZGV4OiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYkVsZW1lbnRzID0gdGhpcy5nZXRUYWJFbGVtZW50c18oKVxuICAgICAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgICByZXR1cm4gdGFiRWxlbWVudHMuaW5kZXhPZihhY3RpdmVFbGVtZW50KVxuICAgICAgfSxcbiAgICAgIGdldEluZGV4T2ZUYWJCeUlkOiBpZCA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMudGFiTGlzdFtpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfSxcbiAgICAgIGdldFRhYkxpc3RMZW5ndGg6ICgpID0+IHRoaXMudGFiTGlzdC5sZW5ndGgsXG4gICAgICBub3RpZnlUYWJBY3RpdmF0ZWQ6IGluZGV4ID0+IHtcbiAgICAgICAgZW1pdEN1c3RvbUV2ZW50KFxuICAgICAgICAgIHRoaXMuJGVsLFxuICAgICAgICAgIE1EQ1RhYkJhckZvdW5kYXRpb24uc3RyaW5ncy5UQUJfQUNUSVZBVEVEX0VWRU5ULFxuICAgICAgICAgIHsgaW5kZXggfSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgIClcblxuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcbiAgICAvLyBlbnN1cmUgYWN0aXZlIHRhYlxuICAgIHRoaXMuZm91bmRhdGlvbi5hY3RpdmF0ZVRhYih0aGlzLmFjdGl2ZVRhYkluZGV4IHx8IDApXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpc3RlbmVycygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMuJGxpc3RlbmVycyxcbiAgICAgICAgJ01EQ1RhYjppbnRlcmFjdGVkJzogZXZlbnQgPT4gdGhpcy5oYW5kbGVJbnRlcmFjdGlvbihldmVudCksXG4gICAgICAgIGtleWRvd246IGV2ZW50ID0+IHRoaXMuaGFuZGxlS2V5RG93bihldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVJbnRlcmFjdGlvbihldnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVUYWJJbnRlcmFjdGlvbihldnQpXG4gICAgfSxcblxuICAgIGhhbmRsZUtleURvd24oZXZ0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlS2V5RG93bihldnQpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIEFOSU1BVElORzogJ21kYy10YWItc2Nyb2xsZXItLWFuaW1hdGluZycsXG4gIFNDUk9MTF9URVNUOiAnbWRjLXRhYi1zY3JvbGxlcl9fdGVzdCcsXG4gIFNDUk9MTF9BUkVBX1NDUk9MTDogJ21kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhLS1zY3JvbGwnLFxufTtcblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBzdHJpbmdzID0ge1xuICBBUkVBX1NFTEVDVE9SOiAnLm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhJyxcbiAgQ09OVEVOVF9TRUxFQ1RPUjogJy5tZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtY29udGVudCcsXG59O1xuXG5leHBvcnQge1xuICBjc3NDbGFzc2VzLFxuICBzdHJpbmdzLFxufTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBNRENUYWJTY3JvbGxlckFuaW1hdGlvbiBjb250YWlucyB0aGUgdmFsdWVzIHJlcXVpcmVkIGZvciBhbmltYXRpbmcgZnJvbSB0aGVcbiAqIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHRvIHRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uLiBUaGUgXCJmaW5hbFNjcm9sbFBvc2l0aW9uXCJcbiAqIHZhbHVlIHJlcHJlc2VudHMgdGhlIG5ldyBzY3JvbGwgcG9zaXRpb24gd2hpbGUgdGhlIFwic2Nyb2xsRGVsdGFcIiB2YWx1ZSBpcyB0aGVcbiAqIGNvcnJlc3BvbmRpbmcgdHJhbnNmb3JtYXRpb24gdGhhdCBpcyBhcHBsaWVkIHRvIHRoZSBzY3JvbGwgY29udGVudC4gVG9nZXRoZXIsXG4gKiB0aGV5IGNyZWF0ZSB0aGUgYW5pbWF0aW9uIGJ5IGZpcnN0IHVwZGF0aW5nIHRoZSBzY3JvbGwgdmFsdWUgdGhlbiBhcHBseWluZ1xuICogdGhlIHRyYW5zZm9ybWF0aW9uIGFuZCBhbmltYXRpbmcgdGhlIHRyYW5zaXRpb24uIEJvdGggcGllY2VzIGFyZSBuZWNlc3NhcnlcbiAqIGZvciB0aGUgc2Nyb2xsIGFuaW1hdGlvbiB0byB3b3JrLiBUaGUgdmFsdWVzIGFyZSB1c2VkIGFzLWlzIGJ5IHRoZSB0YWJcbiAqIHNjcm9sbGVyIGFuaW1hdGlvbiBtZXRob2QsIGVuc3VyaW5nIHRoYXQgYWxsIGxvZ2ljIGZvciBkZXRlcm1pbmluZyBzY3JvbGxcbiAqIHBvc2l0aW9uIG9yIHRyYW5zZm9ybWF0aW9uIGlzIGFic3RyYWN0ZWQgYXdheSBmcm9tIHRoZSBhbmltYXRpb24gbWV0aG9kLlxuICogQHR5cGVkZWYge3tmaW5hbFNjcm9sbFBvc2l0aW9uOiBudW1iZXIsIHNjcm9sbERlbHRhOiBudW1iZXJ9fVxuICovXG5sZXQgTURDVGFiU2Nyb2xsZXJBbmltYXRpb247XG5cbi8qKlxuICogTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXMgcmVwcmVzZW50cyB0aGUgbGVmdCBhbmQgcmlnaHQgZWRnZXMgb2YgdGhlXG4gKiBzY3JvbGwgY29udGVudC4gVGhlc2UgdmFsdWVzIHZhcnkgZGVwZW5kaW5nIG9uIGhvdyBzY3JvbGxpbmcgaW4gUlRMIGlzXG4gKiBpbXBsZW1lbnRlZCBieSB0aGUgYnJvd3Nlci4gT25lIHZhbHVlIGlzIGFsd2F5cyAwIGFuZCBvbmUgdmFsdWUgaXMgYWx3YXlzXG4gKiB0aGUgbWF4IHNjcm9sbGFibGUgdmFsdWUgYXMgZWl0aGVyIGEgcG9zaXRpdmUgb3IgbmVnYXRpdmUgaW50ZWdlci5cbiAqIEB0eXBlZGVmIHt7bGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyfX1cbiAqL1xubGV0IE1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzO1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBUYWIgU2Nyb2xsZXIuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGFiICBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDVGFiU2Nyb2xsZXJBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIGNsYXNzTmFtZSB0byB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzc05hbWUgdG8gYWRkXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGdpdmVuIGNsYXNzTmFtZSBmcm9tIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzTmFtZSB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogQWRkcyB0aGUgZ2l2ZW4gY2xhc3NOYW1lIHRvIHRoZSBzY3JvbGwgYXJlYSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzc05hbWUgdG8gYWRkXG4gICAqL1xuICBhZGRTY3JvbGxBcmVhQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGV2ZW50IHRhcmdldCBtYXRjaGVzIGdpdmVuIGNsYXNzTmFtZS5cbiAgICogQHBhcmFtIHtFdmVudFRhcmdldH0gZXZ0VGFyZ2V0IFRoZSBldmVudCB0YXJnZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIFRoZSBzZWxlY3RvciB0byBjaGVja1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXZlbnRUYXJnZXRNYXRjaGVzU2VsZWN0b3IoZXZ0VGFyZ2V0LCBzZWxlY3Rvcikge31cblxuICAvKipcbiAgICogU2V0cyBhIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBhcmVhIGVsZW1lbnQgdG8gdGhlIHBhc3NlZCB2YWx1ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BOYW1lIFRoZSBzdHlsZSBwcm9wZXJ0eSBuYW1lIHRvIHNldFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIHN0eWxlIHByb3BlcnR5IHZhbHVlXG4gICAqL1xuICBzZXRTY3JvbGxBcmVhU3R5bGVQcm9wZXJ0eShwcm9wTmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgY29udGVudCBlbGVtZW50IHRvIHRoZSBwYXNzZWQgdmFsdWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wTmFtZSBUaGUgc3R5bGUgcHJvcGVydHkgbmFtZSB0byBzZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBzdHlsZSBwcm9wZXJ0eSB2YWx1ZVxuICAgKi9cbiAgc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHkocHJvcE5hbWUsIHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzY3JvbGwgY29udGVudCBlbGVtZW50J3MgY29tcHV0ZWQgc3R5bGUgdmFsdWUgb2YgdGhlIGdpdmVuIGNzcyBwcm9wZXJ0eSBgcHJvcGVydHlOYW1lYC5cbiAgICogV2UgYWNoaWV2ZSB0aGlzIHZpYSBgZ2V0Q29tcHV0ZWRTdHlsZSguLi4pLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHlOYW1lKWAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0U2Nyb2xsQ29udGVudFN0eWxlVmFsdWUocHJvcGVydHlOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBzY3JvbGxMZWZ0IHZhbHVlIG9mIHRoZSBzY3JvbGwgYXJlYSBlbGVtZW50IHRvIHRoZSBwYXNzZWQgdmFsdWUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxMZWZ0IFRoZSBuZXcgc2Nyb2xsTGVmdCB2YWx1ZVxuICAgKi9cbiAgc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoc2Nyb2xsTGVmdCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2Nyb2xsTGVmdCB2YWx1ZSBvZiB0aGUgc2Nyb2xsIGFyZWEgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXRXaWR0aCBvZiB0aGUgc2Nyb2xsIGNvbnRlbnQgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0V2l0ZHRoIG9mIHRoZSBzY3JvbGwgYXJlYSBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBib3VuZGluZyBjbGllbnQgcmVjdCBvZiB0aGUgc2Nyb2xsIGFyZWEgZWxlbWVudC5cbiAgICogQHJldHVybiB7IUNsaWVudFJlY3R9XG4gICAqL1xuICBjb21wdXRlU2Nyb2xsQXJlYUNsaWVudFJlY3QoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBib3VuZGluZyBjbGllbnQgcmVjdCBvZiB0aGUgc2Nyb2xsIGNvbnRlbnQgZWxlbWVudC5cbiAgICogQHJldHVybiB7IUNsaWVudFJlY3R9XG4gICAqL1xuICBjb21wdXRlU2Nyb2xsQ29udGVudENsaWVudFJlY3QoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBoZWlnaHQgb2YgdGhlIGJyb3dzZXIncyBob3Jpem9udGFsIHNjcm9sbGJhcnMgKGluIHB4KS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgY29tcHV0ZUhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQoKSB7fVxufVxuXG5leHBvcnQge01EQ1RhYlNjcm9sbGVyQW5pbWF0aW9uLCBNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlcywgTURDVGFiU2Nyb2xsZXJBZGFwdGVyfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGFiU2Nyb2xsZXJBZGFwdGVyLCBNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gZnJvbSAnLi9hZGFwdGVyJztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgTURDVGFiU2Nyb2xsZXJSVEwge1xuICAvKiogQHBhcmFtIHshTURDVGFiU2Nyb2xsZXJBZGFwdGVyfSBhZGFwdGVyICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICAvKiogQHByaXZhdGUgKi9cbiAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdHJhbnNsYXRlWCBUaGUgY3VycmVudCB0cmFuc2xhdGVYIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQGFic3RyYWN0XG4gICAqL1xuICBnZXRTY3JvbGxQb3NpdGlvblJUTCh0cmFuc2xhdGVYKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259XG4gICAqIEBhYnN0cmFjdFxuICAgKi9cbiAgc2Nyb2xsVG9SVEwoc2Nyb2xsWCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufVxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIGluY3JlbWVudFNjcm9sbFJUTChzY3JvbGxYKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgY3VycmVudCBzY3JvbGxYIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cmFuc2xhdGVYIFRoZSBjdXJyZW50IHRyYW5zbGF0ZVggcG9zaXRpb25cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIGdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uKHNjcm9sbFgsIHRyYW5zbGF0ZVgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYlNjcm9sbGVyUlRMO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENUYWJTY3JvbGxlclJUTCBmcm9tICcuL3J0bC1zY3JvbGxlcic7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1RhYlNjcm9sbGVyQW5pbWF0aW9uLCBNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc30gZnJvbSAnLi9hZGFwdGVyJztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDVGFiU2Nyb2xsZXJSVEx9XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0IGV4dGVuZHMgTURDVGFiU2Nyb2xsZXJSVEwge1xuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsUG9zaXRpb25SVEwoKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgY29uc3Qge3JpZ2h0fSA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCk7XG4gICAgLy8gU2Nyb2xsIHZhbHVlcyBvbiBtb3N0IGJyb3dzZXJzIGFyZSBpbnRzIGluc3RlYWQgb2YgZmxvYXRzIHNvIHdlIHJvdW5kXG4gICAgcmV0dXJuIE1hdGgucm91bmQocmlnaHQgLSBjdXJyZW50U2Nyb2xsTGVmdCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufVxuICAgKi9cbiAgc2Nyb2xsVG9SVEwoc2Nyb2xsWCkge1xuICAgIGNvbnN0IGVkZ2VzID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxFZGdlc18oKTtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICBjb25zdCBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oZWRnZXMucmlnaHQgLSBzY3JvbGxYKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259ICovICh7XG4gICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbERlbHRhOiBjbGFtcGVkU2Nyb2xsTGVmdCAtIGN1cnJlbnRTY3JvbGxMZWZ0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn1cbiAgICovXG4gIGluY3JlbWVudFNjcm9sbFJUTChzY3JvbGxYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgY29uc3QgY2xhbXBlZFNjcm9sbExlZnQgPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKGN1cnJlbnRTY3JvbGxMZWZ0IC0gc2Nyb2xsWCk7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSAqLyAoe1xuICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxEZWx0YTogY2xhbXBlZFNjcm9sbExlZnQgLSBjdXJyZW50U2Nyb2xsTGVmdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbihzY3JvbGxYKSB7XG4gICAgcmV0dXJuIHNjcm9sbFg7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCkge1xuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3Qgcm9vdFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgoKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9ICovICh7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IGNvbnRlbnRXaWR0aCAtIHJvb3RXaWR0aCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjbGFtcFNjcm9sbFZhbHVlXyhzY3JvbGxYKSB7XG4gICAgY29uc3QgZWRnZXMgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpO1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChlZGdlcy5sZWZ0LCBzY3JvbGxYKSwgZWRnZXMucmlnaHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdDtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDVGFiU2Nyb2xsZXJSVEwgZnJvbSAnLi9ydGwtc2Nyb2xsZXInO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtNRENUYWJTY3JvbGxlckFuaW1hdGlvbiwgTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9IGZyb20gJy4vYWRhcHRlcic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ1RhYlNjcm9sbGVyUlRMfVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUgZXh0ZW5kcyBNRENUYWJTY3JvbGxlclJUTCB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdHJhbnNsYXRlWCBUaGUgY3VycmVudCB0cmFuc2xhdGVYIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uUlRMKHRyYW5zbGF0ZVgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh0cmFuc2xhdGVYIC0gY3VycmVudFNjcm9sbExlZnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn1cbiAgICovXG4gIHNjcm9sbFRvUlRMKHNjcm9sbFgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICBjb25zdCBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oLXNjcm9sbFgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gKi8gKHtcbiAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsRGVsdGE6IGNsYW1wZWRTY3JvbGxMZWZ0IC0gY3VycmVudFNjcm9sbExlZnQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufVxuICAgKi9cbiAgaW5jcmVtZW50U2Nyb2xsUlRMKHNjcm9sbFgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICBjb25zdCBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oY3VycmVudFNjcm9sbExlZnQgLSBzY3JvbGxYKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259ICovICh7XG4gICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbERlbHRhOiBjbGFtcGVkU2Nyb2xsTGVmdCAtIGN1cnJlbnRTY3JvbGxMZWZ0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cmFuc2xhdGVYXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uKHNjcm9sbFgsIHRyYW5zbGF0ZVgpIHtcbiAgICByZXR1cm4gc2Nyb2xsWCAtIHRyYW5zbGF0ZVg7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCkge1xuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3Qgcm9vdFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgoKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9ICovICh7XG4gICAgICBsZWZ0OiByb290V2lkdGggLSBjb250ZW50V2lkdGgsXG4gICAgICByaWdodDogMCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjbGFtcFNjcm9sbFZhbHVlXyhzY3JvbGxYKSB7XG4gICAgY29uc3QgZWRnZXMgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpO1xuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihlZGdlcy5yaWdodCwgc2Nyb2xsWCksIGVkZ2VzLmxlZnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmU7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ1RhYlNjcm9sbGVyUlRMIGZyb20gJy4vcnRsLXNjcm9sbGVyJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGFiU2Nyb2xsZXJBbmltYXRpb24sIE1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfSBmcm9tICcuL2FkYXB0ZXInO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENUYWJTY3JvbGxlclJUTH1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UgZXh0ZW5kcyBNRENUYWJTY3JvbGxlclJUTCB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdHJhbnNsYXRlWFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRTY3JvbGxQb3NpdGlvblJUTCh0cmFuc2xhdGVYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgLy8gU2Nyb2xsIHZhbHVlcyBvbiBtb3N0IGJyb3dzZXJzIGFyZSBpbnRzIGluc3RlYWQgb2YgZmxvYXRzIHNvIHdlIHJvdW5kXG4gICAgcmV0dXJuIE1hdGgucm91bmQoY3VycmVudFNjcm9sbExlZnQgLSB0cmFuc2xhdGVYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259XG4gICAqL1xuICBzY3JvbGxUb1JUTChzY3JvbGxYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgY29uc3QgY2xhbXBlZFNjcm9sbExlZnQgPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKHNjcm9sbFgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gKi8gKHtcbiAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsRGVsdGE6IGN1cnJlbnRTY3JvbGxMZWZ0IC0gY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufVxuICAgKi9cbiAgaW5jcmVtZW50U2Nyb2xsUlRMKHNjcm9sbFgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICBjb25zdCBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oY3VycmVudFNjcm9sbExlZnQgKyBzY3JvbGxYKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259ICovICh7XG4gICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbERlbHRhOiBjdXJyZW50U2Nyb2xsTGVmdCAtIGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uKHNjcm9sbFgsIHRyYW5zbGF0ZVgpIHtcbiAgICByZXR1cm4gc2Nyb2xsWCArIHRyYW5zbGF0ZVg7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCkge1xuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3Qgcm9vdFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgoKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9ICovICh7XG4gICAgICBsZWZ0OiBjb250ZW50V2lkdGggLSByb290V2lkdGgsXG4gICAgICByaWdodDogMCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjbGFtcFNjcm9sbFZhbHVlXyhzY3JvbGxYKSB7XG4gICAgY29uc3QgZWRnZXMgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpO1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChlZGdlcy5yaWdodCwgc2Nyb2xsWCksIGVkZ2VzLmxlZnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5nc30gZnJvbSAnLi9jb25zdGFudHMnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGFiU2Nyb2xsZXJBbmltYXRpb24sIE1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzLCBNRENUYWJTY3JvbGxlckFkYXB0ZXJ9IGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDVGFiU2Nyb2xsZXJSVEwgZnJvbSAnLi9ydGwtc2Nyb2xsZXInO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdCBmcm9tICcuL3J0bC1kZWZhdWx0LXNjcm9sbGVyJztcbmltcG9ydCBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlIGZyb20gJy4vcnRsLW5lZ2F0aXZlLXNjcm9sbGVyJztcbmltcG9ydCBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UgZnJvbSAnLi9ydGwtcmV2ZXJzZS1zY3JvbGxlcic7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1RhYlNjcm9sbGVyQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKipcbiAgICogQHNlZSBNRENUYWJTY3JvbGxlckFkYXB0ZXIgZm9yIHR5cGluZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBZGFwdGVyfSAqLyAoe1xuICAgICAgZXZlbnRUYXJnZXRNYXRjaGVzU2VsZWN0b3I6ICgpID0+IHt9LFxuICAgICAgYWRkQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgYWRkU2Nyb2xsQXJlYUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHNldFNjcm9sbEFyZWFTdHlsZVByb3BlcnR5OiAoKSA9PiB7fSxcbiAgICAgIHNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5OiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbENvbnRlbnRTdHlsZVZhbHVlOiAoKSA9PiB7fSxcbiAgICAgIHNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0OiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0OiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aDogKCkgPT4ge30sXG4gICAgICBnZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGg6ICgpID0+IHt9LFxuICAgICAgY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0OiAoKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVTY3JvbGxDb250ZW50Q2xpZW50UmVjdDogKCkgPT4ge30sXG4gICAgICBjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodDogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHshTURDVGFiU2Nyb2xsZXJBZGFwdGVyfSBhZGFwdGVyICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBib29sZWFuIGNvbnRyb2xzIHdoZXRoZXIgd2Ugc2hvdWxkIGhhbmRsZSB0aGUgdHJhbnNpdGlvbmVuZCBhbmQgaW50ZXJhY3Rpb24gZXZlbnRzIGR1cmluZyB0aGUgYW5pbWF0aW9uLlxuICAgICAqIEBwcml2YXRlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNBbmltYXRpbmdfID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgTURDVGFiU2Nyb2xsZXJSVEwgaW5zdGFuY2UgdmFyaWVzIHBlciBicm93c2VyIGFuZCBhbGxvd3MgdXMgdG8gZW5jYXBzdWxhdGUgdGhlIHBlY3VsaWFyIGJyb3dzZXIgYmVoYXZpb3JcbiAgICAgKiBvZiBSVEwgc2Nyb2xsaW5nIGluIGl0J3Mgb3duIGNsYXNzLlxuICAgICAqIEBwcml2YXRlIHs/TURDVGFiU2Nyb2xsZXJSVEx9XG4gICAgICovXG4gICAgdGhpcy5ydGxTY3JvbGxlckluc3RhbmNlXztcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gQ29tcHV0ZSBob3Jpem9udGFsIHNjcm9sbGJhciBoZWlnaHQgb24gc2Nyb2xsZXIgd2l0aCBvdmVyZmxvdyBpbml0aWFsbHkgaGlkZGVuLCB0aGVuIHVwZGF0ZSBvdmVyZmxvdyB0byBzY3JvbGxcbiAgICAvLyBhbmQgaW1tZWRpYXRlbHkgYWRqdXN0IGJvdHRvbSBtYXJnaW4gdG8gYXZvaWQgdGhlIHNjcm9sbGJhciBpbml0aWFsbHkgYXBwZWFyaW5nIGJlZm9yZSBKUyBydW5zLlxuICAgIGNvbnN0IGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQgPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0KCk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxBcmVhU3R5bGVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScsIC1ob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRTY3JvbGxBcmVhQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuU0NST0xMX0FSRUFfU0NST0xMKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgY3VycmVudCB2aXN1YWwgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wdXRlQ3VycmVudFNjcm9sbFBvc2l0aW9uUlRMXygpO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRUcmFuc2xhdGVYID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50VHJhbnNsYXRlWF8oKTtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIHJldHVybiBzY3JvbGxMZWZ0IC0gY3VycmVudFRyYW5zbGF0ZVg7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBpbnRlcmFjdGlvbiBldmVudHMgdGhhdCBvY2N1ciBkdXJpbmcgdHJhbnNpdGlvblxuICAgKi9cbiAgaGFuZGxlSW50ZXJhY3Rpb24oKSB7XG4gICAgLy8gRWFybHkgZXhpdCBpZiB3ZSBhcmVuJ3QgYW5pbWF0aW5nXG4gICAgaWYgKCF0aGlzLmlzQW5pbWF0aW5nXykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgb3RoZXIgZXZlbnQgbGlzdGVuZXJzIGZyb20gaGFuZGxpbmcgdGhpcyBldmVudFxuICAgIHRoaXMuc3RvcFNjcm9sbEFuaW1hdGlvbl8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSB0cmFuc2l0aW9uZW5kIGV2ZW50XG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KSB7XG4gICAgLy8gRWFybHkgZXhpdCBpZiB3ZSBhcmVuJ3QgYW5pbWF0aW5nIG9yIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkIGJ5IGEgZGlmZmVyZW50IGVsZW1lbnQuXG4gICAgaWYgKCF0aGlzLmlzQW5pbWF0aW5nX1xuICAgICAgfHwgIXRoaXMuYWRhcHRlcl8uZXZlbnRUYXJnZXRNYXRjaGVzU2VsZWN0b3IoZXZ0LnRhcmdldCwgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnN0cmluZ3MuQ09OVEVOVF9TRUxFQ1RPUikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzQW5pbWF0aW5nXyA9IGZhbHNlO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZW1lbnQgdGhlIHNjcm9sbCB2YWx1ZSBieSB0aGUgc2Nyb2xsWEluY3JlbWVudFxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWEluY3JlbWVudCBUaGUgdmFsdWUgYnkgd2hpY2ggdG8gaW5jcmVtZW50IHRoZSBzY3JvbGwgcG9zaXRpb25cbiAgICovXG4gIGluY3JlbWVudFNjcm9sbChzY3JvbGxYSW5jcmVtZW50KSB7XG4gICAgLy8gRWFybHkgZXhpdCBmb3Igbm9uLW9wZXJhdGlvbmFsIGluY3JlbWVudCB2YWx1ZXNcbiAgICBpZiAoc2Nyb2xsWEluY3JlbWVudCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmNyZW1lbnRTY3JvbGxSVExfKHNjcm9sbFhJbmNyZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuaW5jcmVtZW50U2Nyb2xsXyhzY3JvbGxYSW5jcmVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIHRoZSBnaXZlbiBzY3JvbGxYIHZhbHVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqL1xuICBzY3JvbGxUbyhzY3JvbGxYKSB7XG4gICAgaWYgKHRoaXMuaXNSVExfKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvUlRMXyhzY3JvbGxYKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbFRvXyhzY3JvbGxYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSB2ZXJzaW9uIG9mIHRoZSBNRENUYWJTY3JvbGxlclJUTFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJSVEx9XG4gICAqL1xuICBnZXRSVExTY3JvbGxlcigpIHtcbiAgICBpZiAoIXRoaXMucnRsU2Nyb2xsZXJJbnN0YW5jZV8pIHtcbiAgICAgIHRoaXMucnRsU2Nyb2xsZXJJbnN0YW5jZV8gPSB0aGlzLnJ0bFNjcm9sbGVyRmFjdG9yeV8oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5ydGxTY3JvbGxlckluc3RhbmNlXztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0cmFuc2xhdGVYIHZhbHVlIGZyb20gYSBDU1MgbWF0cml4IHRyYW5zZm9ybSBmdW5jdGlvbiBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsY3VsYXRlQ3VycmVudFRyYW5zbGF0ZVhfKCkge1xuICAgIGNvbnN0IHRyYW5zZm9ybVZhbHVlID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50U3R5bGVWYWx1ZSgndHJhbnNmb3JtJyk7XG4gICAgLy8gRWFybHkgZXhpdCBpZiBubyB0cmFuc2Zvcm0gaXMgcHJlc2VudFxuICAgIGlmICh0cmFuc2Zvcm1WYWx1ZSA9PT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyBUaGUgdHJhbnNmb3JtIHZhbHVlIGNvbWVzIGJhY2sgYXMgYSBtYXRyaXggdHJhbnNmb3JtYXRpb24gaW4gdGhlIGZvcm1cbiAgICAvLyBvZiBgbWF0cml4KGEsIGIsIGMsIGQsIHR4LCB0eSlgLiBXZSBvbmx5IGNhcmUgYWJvdXQgdHggKHRyYW5zbGF0ZVgpIHNvXG4gICAgLy8gd2UncmUgZ29pbmcgdG8gZ3JhYiBhbGwgdGhlIHBhcmVudGhlc2l6ZWQgdmFsdWVzLCBzdHJpcCBvdXQgdHgsIGFuZFxuICAgIC8vIHBhcnNlIGl0LlxuICAgIGNvbnN0IHJlc3VsdHMgPSAvXFwoKC4rKVxcKS8uZXhlYyh0cmFuc2Zvcm1WYWx1ZSlbMV07XG4gICAgY29uc3QgcGFydHMgPSByZXN1bHRzLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocGFydHNbNF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgYSBzYWZlIHNjcm9sbCB2YWx1ZSB0aGF0IGlzID4gMCBhbmQgPCB0aGUgbWF4IHNjcm9sbCB2YWx1ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgZGlzdGFuY2UgdG8gc2Nyb2xsXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNsYW1wU2Nyb2xsVmFsdWVfKHNjcm9sbFgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCk7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGVkZ2VzLmxlZnQsIHNjcm9sbFgpLCBlZGdlcy5yaWdodCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29tcHV0ZUN1cnJlbnRTY3JvbGxQb3NpdGlvblJUTF8oKSB7XG4gICAgY29uc3QgdHJhbnNsYXRlWCA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudFRyYW5zbGF0ZVhfKCk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UlRMU2Nyb2xsZXIoKS5nZXRTY3JvbGxQb3NpdGlvblJUTCh0cmFuc2xhdGVYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWxjdWxhdGVTY3JvbGxFZGdlc18oKSB7XG4gICAgY29uc3QgY29udGVudFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGgoKTtcbiAgICBjb25zdCByb290V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFPZmZzZXRXaWR0aCgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc30gKi8gKHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogY29udGVudFdpZHRoIC0gcm9vdFdpZHRoLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVybmFsIHNjcm9sbCBtZXRob2RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFggVGhlIG5ldyBzY3JvbGwgcG9zaXRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNjcm9sbFRvXyhzY3JvbGxYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbFggPSB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgY29uc3Qgc2FmZVNjcm9sbFggPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKHNjcm9sbFgpO1xuICAgIGNvbnN0IHNjcm9sbERlbHRhID0gc2FmZVNjcm9sbFggLSBjdXJyZW50U2Nyb2xsWDtcbiAgICB0aGlzLmFuaW1hdGVfKC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSAqLyAoe1xuICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogc2FmZVNjcm9sbFgsXG4gICAgICBzY3JvbGxEZWx0YTogc2Nyb2xsRGVsdGEsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVybmFsIFJUTCBzY3JvbGwgbWV0aG9kXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYIFRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzY3JvbGxUb1JUTF8oc2Nyb2xsWCkge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuZ2V0UlRMU2Nyb2xsZXIoKS5zY3JvbGxUb1JUTChzY3JvbGxYKTtcbiAgICB0aGlzLmFuaW1hdGVfKGFuaW1hdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJuYWwgaW5jcmVtZW50IHNjcm9sbCBtZXRob2RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFggVGhlIG5ldyBzY3JvbGwgcG9zaXRpb24gaW5jcmVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbmNyZW1lbnRTY3JvbGxfKHNjcm9sbFgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsWCA9IHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICBjb25zdCB0YXJnZXRTY3JvbGxYID0gc2Nyb2xsWCArIGN1cnJlbnRTY3JvbGxYO1xuICAgIGNvbnN0IHNhZmVTY3JvbGxYID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXyh0YXJnZXRTY3JvbGxYKTtcbiAgICBjb25zdCBzY3JvbGxEZWx0YSA9IHNhZmVTY3JvbGxYIC0gY3VycmVudFNjcm9sbFg7XG4gICAgdGhpcy5hbmltYXRlXygvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gKi8gKHtcbiAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IHNhZmVTY3JvbGxYLFxuICAgICAgc2Nyb2xsRGVsdGE6IHNjcm9sbERlbHRhLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBpbmNyZW1lbmV0IHNjcm9sbCBSVEwgbWV0aG9kXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYIFRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uIFJUTCBpbmNyZW1lbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluY3JlbWVudFNjcm9sbFJUTF8oc2Nyb2xsWCkge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuZ2V0UlRMU2Nyb2xsZXIoKS5pbmNyZW1lbnRTY3JvbGxSVEwoc2Nyb2xsWCk7XG4gICAgdGhpcy5hbmltYXRlXyhhbmltYXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGVzIHRoZSB0YWIgc2Nyb2xsaW5nXG4gICAqIEBwYXJhbSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSBhbmltYXRpb24gVGhlIGFuaW1hdGlvbiB0byBhcHBseVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYW5pbWF0ZV8oYW5pbWF0aW9uKSB7XG4gICAgLy8gRWFybHkgZXhpdCBpZiB0cmFuc2xhdGVYIGlzIDAsIHdoaWNoIG1lYW5zIHRoZXJlJ3Mgbm8gYW5pbWF0aW9uIHRvIHBlcmZvcm1cbiAgICBpZiAoYW5pbWF0aW9uLnNjcm9sbERlbHRhID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdG9wU2Nyb2xsQW5pbWF0aW9uXygpO1xuICAgIC8vIFRoaXMgYW5pbWF0aW9uIHVzZXMgdGhlIEZMSVAgYXBwcm9hY2guXG4gICAgLy8gUmVhZCBtb3JlIGhlcmU6IGh0dHBzOi8vYWVyb3R3aXN0LmNvbS9ibG9nL2ZsaXAteW91ci1hbmltYXRpb25zL1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoYW5pbWF0aW9uLmZpbmFsU2Nyb2xsUG9zaXRpb24pO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7YW5pbWF0aW9uLnNjcm9sbERlbHRhfXB4KWApO1xuICAgIC8vIEZvcmNlIHJlcGFpbnRcbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVTY3JvbGxBcmVhQ2xpZW50UmVjdCgpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScsICdub25lJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzQW5pbWF0aW5nXyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgc2Nyb2xsIGFuaW1hdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RvcFNjcm9sbEFuaW1hdGlvbl8oKSB7XG4gICAgdGhpcy5pc0FuaW1hdGluZ18gPSBmYWxzZTtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsUG9zaXRpb24gPSB0aGlzLmdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uXygpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwcHgpJyk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdChjdXJyZW50U2Nyb2xsUG9zaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIGR1cmluZyBhbmltYXRpb25cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QW5pbWF0aW5nU2Nyb2xsUG9zaXRpb25fKCkge1xuICAgIGNvbnN0IGN1cnJlbnRUcmFuc2xhdGVYID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50VHJhbnNsYXRlWF8oKTtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRSVExTY3JvbGxlcigpLmdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uKHNjcm9sbExlZnQsIGN1cnJlbnRUcmFuc2xhdGVYKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2Nyb2xsTGVmdCAtIGN1cnJlbnRUcmFuc2xhdGVYO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIFJUTCBTY3JvbGxlciB0byB1c2VcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyUlRMfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcnRsU2Nyb2xsZXJGYWN0b3J5XygpIHtcbiAgICAvLyBCcm93c2VycyBoYXZlIHRocmVlIGRpZmZlcmVudCBpbXBsZW1lbnRhdGlvbnMgb2Ygc2Nyb2xsTGVmdCBpbiBSVEwgbW9kZSxcbiAgICAvLyBkZXBlbmRlbnQgb24gdGhlIGJyb3dzZXIuIFRoZSBiZWhhdmlvciBpcyBiYXNlZCBvZmYgdGhlIG1heCBMVFJcbiAgICAvLyBzY3JvbGxsZWZ0IHZhbHVlIGFuZCAwLlxuICAgIC8vXG4gICAgLy8gKiBEZWZhdWx0IHNjcm9sbGluZyBpbiBSVEwgKlxuICAgIC8vICAgIC0gTGVmdC1tb3N0IHZhbHVlOiAwXG4gICAgLy8gICAgLSBSaWdodC1tb3N0IHZhbHVlOiBNYXggTFRSIHNjcm9sbExlZnQgdmFsdWVcbiAgICAvL1xuICAgIC8vICogTmVnYXRpdmUgc2Nyb2xsaW5nIGluIFJUTCAqXG4gICAgLy8gICAgLSBMZWZ0LW1vc3QgdmFsdWU6IE5lZ2F0ZWQgbWF4IExUUiBzY3JvbGxMZWZ0IHZhbHVlXG4gICAgLy8gICAgLSBSaWdodC1tb3N0IHZhbHVlOiAwXG4gICAgLy9cbiAgICAvLyAqIFJldmVyc2Ugc2Nyb2xsaW5nIGluIFJUTCAqXG4gICAgLy8gICAgLSBMZWZ0LW1vc3QgdmFsdWU6IE1heCBMVFIgc2Nyb2xsTGVmdCB2YWx1ZVxuICAgIC8vICAgIC0gUmlnaHQtbW9zdCB2YWx1ZTogMFxuICAgIC8vXG4gICAgLy8gV2UgdXNlIHRob3NlIHByaW5jaXBsZXMgYmVsb3cgdG8gZGV0ZXJtaW5lIHdoaWNoIFJUTCBzY3JvbGxMZWZ0XG4gICAgLy8gYmVoYXZpb3IgaXMgaW1wbGVtZW50ZWQgaW4gdGhlIGN1cnJlbnQgYnJvd3Nlci5cbiAgICBjb25zdCBpbml0aWFsU2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KGluaXRpYWxTY3JvbGxMZWZ0IC0gMSk7XG4gICAgY29uc3QgbmV3U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcblxuICAgIC8vIElmIHRoZSBuZXdTY3JvbGxMZWZ0IHZhbHVlIGlzIG5lZ2F0aXZlLHRoZW4gd2Uga25vdyB0aGF0IHRoZSBicm93c2VyIGhhc1xuICAgIC8vIGltcGxlbWVudGVkIG5lZ2F0aXZlIFJUTCBzY3JvbGxpbmcsIHNpbmNlIGFsbCBvdGhlciBpbXBsZW1lbnRhdGlvbnMgaGF2ZVxuICAgIC8vIG9ubHkgcG9zaXRpdmUgdmFsdWVzLlxuICAgIGlmIChuZXdTY3JvbGxMZWZ0IDwgMCkge1xuICAgICAgLy8gVW5kbyB0aGUgc2Nyb2xsTGVmdCB0ZXN0IGNoZWNrXG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KGluaXRpYWxTY3JvbGxMZWZ0KTtcbiAgICAgIHJldHVybiBuZXcgTURDVGFiU2Nyb2xsZXJSVExOZWdhdGl2ZSh0aGlzLmFkYXB0ZXJfKTtcbiAgICB9XG5cbiAgICBjb25zdCByb290Q2xpZW50UmVjdCA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY29udGVudENsaWVudFJlY3QgPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVTY3JvbGxDb250ZW50Q2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHJpZ2h0RWRnZURlbHRhID0gTWF0aC5yb3VuZChjb250ZW50Q2xpZW50UmVjdC5yaWdodCAtIHJvb3RDbGllbnRSZWN0LnJpZ2h0KTtcbiAgICAvLyBVbmRvIHRoZSBzY3JvbGxMZWZ0IHRlc3QgY2hlY2tcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KGluaXRpYWxTY3JvbGxMZWZ0KTtcblxuICAgIC8vIEJ5IGNhbGN1bGF0aW5nIHRoZSBjbGllbnRSZWN0IG9mIHRoZSByb290IGVsZW1lbnQgYW5kIHRoZSBjbGllbnRSZWN0IG9mXG4gICAgLy8gdGhlIGNvbnRlbnQgZWxlbWVudCwgd2UgY2FuIGRldGVybWluZSBob3cgbXVjaCB0aGUgc2Nyb2xsIHZhbHVlIGNoYW5nZWRcbiAgICAvLyB3aGVuIHdlIHBlcmZvcm1lZCB0aGUgc2Nyb2xsTGVmdCBzdWJ0cmFjdGlvbiBhYm92ZS5cbiAgICBpZiAocmlnaHRFZGdlRGVsdGEgPT09IG5ld1Njcm9sbExlZnQpIHtcbiAgICAgIHJldHVybiBuZXcgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlKHRoaXMuYWRhcHRlcl8pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0KHRoaXMuYWRhcHRlcl8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc1JUTF8oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudFN0eWxlVmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJTY3JvbGxlckZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHtjc3NDbGFzc2VzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0IHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nLlxuICogQHByaXZhdGUge251bWJlcnx1bmRlZmluZWR9XG4gKi9cbmxldCBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0XztcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgaGVpZ2h0IG9mIGJyb3dzZXItcmVuZGVyZWQgaG9yaXpvbnRhbCBzY3JvbGxiYXJzIHVzaW5nIGEgc2VsZi1jcmVhdGVkIHRlc3QgZWxlbWVudC5cbiAqIE1heSByZXR1cm4gMCAoZS5nLiBvbiBPUyBYIGJyb3dzZXJzIHVuZGVyIGRlZmF1bHQgY29uZmlndXJhdGlvbikuXG4gKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IHNob3VsZENhY2hlUmVzdWx0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0KGRvY3VtZW50T2JqLCBzaG91bGRDYWNoZVJlc3VsdCA9IHRydWUpIHtcbiAgaWYgKHNob3VsZENhY2hlUmVzdWx0ICYmIHR5cGVvZiBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0XyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodF87XG4gIH1cblxuICBjb25zdCBlbCA9IGRvY3VtZW50T2JqLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlbC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzZXMuU0NST0xMX1RFU1QpO1xuICBkb2N1bWVudE9iai5ib2R5LmFwcGVuZENoaWxkKGVsKTtcblxuICBjb25zdCBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0IC0gZWwuY2xpZW50SGVpZ2h0O1xuICBkb2N1bWVudE9iai5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcblxuICBpZiAoc2hvdWxkQ2FjaGVSZXN1bHQpIHtcbiAgICBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0XyA9IGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHshT2JqZWN0fSBIVE1MRWxlbWVudFByb3RvdHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgcmV0dXJuIFtcbiAgICAnbXNNYXRjaGVzU2VsZWN0b3InLCAnbWF0Y2hlcycsXG4gIF0uZmlsdGVyKChwKSA9PiBwIGluIEhUTUxFbGVtZW50UHJvdG90eXBlKS5wb3AoKTtcbn1cblxuZXhwb3J0IHtjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodCwgZ2V0TWF0Y2hlc1Byb3BlcnR5fTtcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1kYy10YWItc2Nyb2xsZXJcIiA6Y2xhc3M9XCJjbGFzc2VzXCI+XG4gICAgPGRpdlxuICAgICAgcmVmPVwiYXJlYVwiXG4gICAgICBjbGFzcz1cIm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhXCJcbiAgICAgIEBtb3VzZWRvd249XCJoYW5kbGVJbnRlcmFjdGlvblwiXG4gICAgICBAd2hlZWw9XCJoYW5kbGVJbnRlcmFjdGlvblwiXG4gICAgICBAcG9pbnRlcmRvd249XCJoYW5kbGVJbnRlcmFjdGlvblwiXG4gICAgICBAdG91Y2hzdGFydD1cImhhbmRsZUludGVyYWN0aW9uXCJcbiAgICAgIEBrZXlkb3duPVwiaGFuZGxlSW50ZXJhY3Rpb25cIlxuICAgICAgOmNsYXNzPVwiYXJlYUNsYXNzZXNcIlxuICAgICAgOnN0eWxlPVwiYXJlYVN0eWxlc1wiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICByZWY9XCJjb250ZW50XCJcbiAgICAgICAgY2xhc3M9XCJtZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtY29udGVudFwiXG4gICAgICAgIDpzdHlsZT1cImNvbnRlbnRTdHlsZXNcIlxuICAgICAgICBAdHJhbnNpdGlvbmVuZD1cImhhbmRsZVRyYW5zaXRpb25FbmRcIlxuICAgICAgPlxuICAgICAgICA8c2xvdCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9mb3VuZGF0aW9uJ1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICdAbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy10YWItc2Nyb2xsZXInLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7IGNsYXNzZXM6IHt9LCBhcmVhQ2xhc3Nlczoge30sIGFyZWFTdHlsZXM6IHt9LCBjb250ZW50U3R5bGVzOiB7fSB9XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uKHtcbiAgICAgIGV2ZW50VGFyZ2V0TWF0Y2hlc1NlbGVjdG9yOiAoZXZ0VGFyZ2V0LCBzZWxlY3RvcikgPT4ge1xuICAgICAgICBjb25zdCBNQVRDSEVTID0gdXRpbC5nZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKVxuICAgICAgICByZXR1cm4gZXZ0VGFyZ2V0W01BVENIRVNdKHNlbGVjdG9yKVxuICAgICAgfSxcbiAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKSxcblxuICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRkZWxldGUodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUpLFxuICAgICAgYWRkU2Nyb2xsQXJlYUNsYXNzOiBjbGFzc05hbWUgPT5cbiAgICAgICAgdGhpcy4kc2V0KHRoaXMuYXJlYUNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSksXG4gICAgICBzZXRTY3JvbGxBcmVhU3R5bGVQcm9wZXJ0eTogKHByb3AsIHZhbHVlKSA9PlxuICAgICAgICB0aGlzLiRzZXQodGhpcy5hcmVhU3R5bGVzLCBwcm9wLCB2YWx1ZSksXG4gICAgICBzZXRTY3JvbGxDb250ZW50U3R5bGVQcm9wZXJ0eTogKHByb3AsIHZhbHVlKSA9PlxuICAgICAgICB0aGlzLiRzZXQodGhpcy5jb250ZW50U3R5bGVzLCBwcm9wLCB2YWx1ZSksXG4gICAgICBnZXRTY3JvbGxDb250ZW50U3R5bGVWYWx1ZTogcHJvcE5hbWUgPT5cbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy4kcmVmcy5jb250ZW50KS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BOYW1lKSxcbiAgICAgIHNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0OiBzY3JvbGxYID0+XG4gICAgICAgICh0aGlzLiRyZWZzLmFyZWEuc2Nyb2xsTGVmdCA9IHNjcm9sbFgpLFxuICAgICAgZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQ6ICgpID0+IHRoaXMuJHJlZnMuYXJlYS5zY3JvbGxMZWZ0LFxuICAgICAgZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoOiAoKSA9PiB0aGlzLiRyZWZzLmNvbnRlbnQub2Zmc2V0V2lkdGgsXG4gICAgICBnZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGg6ICgpID0+IHRoaXMuJHJlZnMuYXJlYS5vZmZzZXRXaWR0aCxcbiAgICAgIGNvbXB1dGVTY3JvbGxBcmVhQ2xpZW50UmVjdDogKCkgPT5cbiAgICAgICAgdGhpcy4kcmVmcy5hcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgY29tcHV0ZVNjcm9sbENvbnRlbnRDbGllbnRSZWN0OiAoKSA9PlxuICAgICAgICB0aGlzLiRyZWZzLmNvbnRlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodDogKCkgPT5cbiAgICAgICAgdXRpbC5jb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodChkb2N1bWVudClcbiAgICB9KVxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24uZGVzdHJveSgpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVUcmFuc2l0aW9uRW5kKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KVxuICAgIH0sXG4gICAgaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KVxuICAgIH0sXG4gICAgZ2V0U2Nyb2xsUG9zaXRpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uLmdldFNjcm9sbFBvc2l0aW9uKClcbiAgICB9LFxuICAgIGdldFNjcm9sbENvbnRlbnRXaWR0aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRyZWZzLmNvbnRlbnQub2Zmc2V0V2lkdGhcbiAgICB9LFxuICAgIGluY3JlbWVudFNjcm9sbChzY3JvbGxYSW5jcmVtZW50KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaW5jcmVtZW50U2Nyb2xsKHNjcm9sbFhJbmNyZW1lbnQpXG4gICAgfSxcbiAgICBzY3JvbGxUbyhzY3JvbGxYKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2Nyb2xsVG8oc2Nyb2xsWClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBUYWIgSW5kaWNhdG9yLlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIFRhYiBJbmRpY2F0b3IgaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1RhYkluZGljYXRvckFkYXB0ZXIge1xuICAvKipcbiAgICogQWRkcyB0aGUgZ2l2ZW4gY2xhc3NOYW1lIHRvIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzTmFtZSB0byBhZGRcbiAgICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gY2xhc3NOYW1lIGZyb20gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3NOYW1lIHRvIHJlbW92ZVxuICAgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjbGllbnQgcmVjdCBvZiB0aGUgY29udGVudCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHshQ2xpZW50UmVjdH1cbiAgICovXG4gIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgY29udGVudCBlbGVtZW50IHRvIHRoZSBwYXNzZWQgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BOYW1lIFRoZSBzdHlsZSBwcm9wZXJ0eSBuYW1lIHRvIHNldFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIHN0eWxlIHByb3BlcnR5IHZhbHVlXG4gICAqL1xuICBzZXRDb250ZW50U3R5bGVQcm9wZXJ0eShwcm9wTmFtZSwgdmFsdWUpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYkluZGljYXRvckFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICBBQ1RJVkU6ICdtZGMtdGFiLWluZGljYXRvci0tYWN0aXZlJyxcbiAgRkFERTogJ21kYy10YWItaW5kaWNhdG9yLS1mYWRlJyxcbiAgTk9fVFJBTlNJVElPTjogJ21kYy10YWItaW5kaWNhdG9yLS1uby10cmFuc2l0aW9uJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQ09OVEVOVF9TRUxFQ1RPUjogJy5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudCcsXG59O1xuXG5leHBvcnQge1xuICBjc3NDbGFzc2VzLFxuICBzdHJpbmdzLFxufTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENUYWJJbmRpY2F0b3JBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge1xuICBjc3NDbGFzc2VzLFxuICBzdHJpbmdzLFxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1RhYkluZGljYXRvckFkYXB0ZXI+fVxuICogQGFic3RyYWN0XG4gKi9cbmNsYXNzIE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKlxuICAgKiBAc2VlIE1EQ1RhYkluZGljYXRvckFkYXB0ZXIgZm9yIHR5cGluZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHshTURDVGFiSW5kaWNhdG9yQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYkluZGljYXRvckFkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBjb21wdXRlQ29udGVudENsaWVudFJlY3Q6ICgpID0+IHt9LFxuICAgICAgc2V0Q29udGVudFN0eWxlUHJvcGVydHk6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7IU1EQ1RhYkluZGljYXRvckFkYXB0ZXJ9IGFkYXB0ZXIgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFDbGllbnRSZWN0fSAqL1xuICBjb21wdXRlQ29udGVudENsaWVudFJlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBpbmRpY2F0b3JcbiAgICogQHBhcmFtIHshQ2xpZW50UmVjdD19IHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdFxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIGFjdGl2YXRlKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG4gIC8qKiBAYWJzdHJhY3QgKi9cbiAgZGVhY3RpdmF0ZSgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbiBleHRlbmRzIE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24ge1xuICAvKiogQHBhcmFtIHshQ2xpZW50UmVjdD19IHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCAqL1xuICBhY3RpdmF0ZShwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpIHtcbiAgICAvLyBFYXJseSBleGl0IGlmIG5vIGluZGljYXRvciBpcyBwcmVzZW50IHRvIGhhbmRsZSBjYXNlcyB3aGVyZSBhbiBpbmRpY2F0b3JcbiAgICAvLyBtYXkgYmUgYWN0aXZhdGVkIHdpdGhvdXQgYSBwcmlvciBpbmRpY2F0b3Igc3RhdGVcbiAgICBpZiAoIXByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGFuaW1hdGlvbiB1c2VzIHRoZSBGTElQIGFwcHJvYWNoLiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCBpdCBhdCB0aGUgbGluayBiZWxvdzpcbiAgICAvLyBodHRwczovL2Flcm90d2lzdC5jb20vYmxvZy9mbGlwLXlvdXItYW5pbWF0aW9ucy9cblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGltZW5zaW9ucyBiYXNlZCBvbiB0aGUgZGltZW5zaW9ucyBvZiB0aGUgcHJldmlvdXMgaW5kaWNhdG9yXG4gICAgY29uc3QgY3VycmVudENsaWVudFJlY3QgPSB0aGlzLmNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHdpZHRoRGVsdGEgPSBwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3Qud2lkdGggLyBjdXJyZW50Q2xpZW50UmVjdC53aWR0aDtcbiAgICBjb25zdCB4UG9zaXRpb24gPSBwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QubGVmdCAtIGN1cnJlbnRDbGllbnRSZWN0LmxlZnQ7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmNzc0NsYXNzZXMuTk9fVFJBTlNJVElPTik7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRDb250ZW50U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoJHt4UG9zaXRpb259cHgpIHNjYWxlWCgke3dpZHRoRGVsdGF9KWApO1xuXG4gICAgLy8gRm9yY2UgcmVwYWludCBiZWZvcmUgdXBkYXRpbmcgY2xhc3NlcyBhbmQgdHJhbnNmb3JtIHRvIGVuc3VyZSB0aGUgdHJhbnNmb3JtIHByb3Blcmx5IHRha2VzIGVmZmVjdFxuICAgIHRoaXMuY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCk7XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5OT19UUkFOU0lUSU9OKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0Q29udGVudFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScsICcnKTtcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbjtcbiIsIjx0ZW1wbGF0ZT5cbiAgPHNwYW4gY2xhc3M9XCJtZGMtdGFiLWluZGljYXRvclwiIDpjbGFzcz1cImNsYXNzZXNcIj5cbiAgICA8c3BhblxuICAgICAgcmVmPVwiY29udGVudFwiXG4gICAgICA6c3R5bGU9XCJzdHlsZXNcIlxuICAgICAgY2xhc3M9XCJtZGMtdGFiLWluZGljYXRvcl9fY29udGVudCBtZGMtdGFiLWluZGljYXRvcl9fY29udGVudC0tdW5kZXJsaW5lXCJcbiAgICA+PC9zcGFuPlxuICA8L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL3NsaWRpbmctZm91bmRhdGlvbidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRhYi1pbmRpY2F0b3InLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7IGNsYXNzZXM6IHt9LCBzdHlsZXM6IHt9IH1cbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSksXG4gICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGRlbGV0ZSh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSksXG4gICAgICBjb21wdXRlQ29udGVudENsaWVudFJlY3Q6ICgpID0+XG4gICAgICAgIHRoaXMuJHJlZnMuY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHNldENvbnRlbnRTdHlsZVByb3BlcnR5OiAocHJvcCwgdmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMuc3R5bGVzLCBwcm9wLCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFjdGl2YXRlKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmFjdGl2YXRlKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdClcbiAgICB9LFxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uZGVhY3RpdmF0ZSgpXG4gICAgfSxcbiAgICBjb21wdXRlQ29udGVudENsaWVudFJlY3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uLmNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHNwYW4gY2xhc3M9XCJtZGMtdGFiX19yaXBwbGVcIiA6Y2xhc3M9XCJjbGFzc2VzXCIgOnN0eWxlPVwic3R5bGVzXCI+PC9zcGFuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IFJpcHBsZUJhc2UgfSBmcm9tICcuLi9yaXBwbGUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy10YWItcmlwcGxlJyxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7IGNsYXNzZXM6IHt9LCBzdHlsZXM6IHt9IH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnJpcHBsZS5kZXN0cm95KClcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBtZGNUYWIgZnJvbSAnLi9tZGMtdGFiLnZ1ZSdcbmltcG9ydCBtZGNUYWJCYXIgZnJvbSAnLi9tZGMtdGFiLWJhci52dWUnXG5pbXBvcnQgbWRjVGFiU2Nyb2xsZXIgZnJvbSAnLi9tZGMtdGFiLXNjcm9sbGVyLnZ1ZSdcbmltcG9ydCBtZGNUYWJJbmRpY2F0b3IgZnJvbSAnLi9tZGMtdGFiLWluZGljYXRvci52dWUnXG5pbXBvcnQgbWRjVGFiUmlwcGxlIGZyb20gJy4vbWRjLXRhYi1yaXBwbGUudnVlJ1xuZXhwb3J0IHsgbWRjVGFiLCBtZGNUYWJCYXIsIG1kY1RhYlNjcm9sbGVyLCBtZGNUYWJJbmRpY2F0b3IsIG1kY1RhYlJpcHBsZSB9XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VQbHVnaW4oe1xuICBtZGNUYWIsXG4gIG1kY1RhYkJhcixcbiAgbWRjVGFiU2Nyb2xsZXIsXG4gIG1kY1RhYkluZGljYXRvcixcbiAgbWRjVGFiUmlwcGxlXG59KVxuIiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJ1xuaW1wb3J0IHsgYXV0b0luaXQgfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHBsdWdpbiBmcm9tICcuL2luZGV4LmpzJ1xuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXG5cbmF1dG9Jbml0KHBsdWdpbilcbiJdLCJuYW1lcyI6WyJhdXRvSW5pdCIsInBsdWdpbiIsIl9WdWUiLCJ3aW5kb3ciLCJWdWUiLCJnbG9iYWwiLCJ1c2UiLCJCYXNlUGx1Z2luIiwiY29tcG9uZW50cyIsInZlcnNpb24iLCJpbnN0YWxsIiwidm0iLCJrZXkiLCJjb21wb25lbnQiLCJuYW1lIiwiQ3VzdG9tRWxlbWVudCIsImZ1bmN0aW9uYWwiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsInByb3BzIiwiaXMiLCJ0YWciLCJkYXRhIiwiY2hpbGRyZW4iLCJDdXN0b21FbGVtZW50TWl4aW4iLCJDdXN0b21MaW5rIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJsaW5rIiwiT2JqZWN0IiwiaCIsImVsZW1lbnQiLCJwYXJlbnQiLCIkcm91dGVyIiwiJHJvb3QiLCIkb3B0aW9ucyIsIm9uIiwiY2xpY2siLCJuYXRpdmVPbiIsIkN1c3RvbUxpbmtNaXhpbiIsInRvIiwiZXhhY3QiLCJCb29sZWFuIiwiYXBwZW5kIiwicmVwbGFjZSIsImFjdGl2ZUNsYXNzIiwiZXhhY3RBY3RpdmVDbGFzcyIsImNvbXB1dGVkIiwiZW1pdEN1c3RvbUV2ZW50IiwiZWwiLCJldnRUeXBlIiwiZXZ0RGF0YSIsInNob3VsZEJ1YmJsZSIsImV2dCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiYnViYmxlcyIsImRvY3VtZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiZXh0cmFjdEljb25Qcm9wIiwiaWNvblByb3AiLCJjbGFzc2VzIiwiY29udGVudCIsIkFycmF5IiwicmVkdWNlIiwicmVzdWx0IiwidmFsdWUiLCJjbGFzc05hbWUiLCJzcGxpdCIsInRleHRDb250ZW50IiwiRGlzcGF0Y2hFdmVudE1peGluIiwiZXZlbnQiLCJtZXRob2RzIiwiJGVtaXQiLCJ0YXJnZXQiLCJldmVudFRhcmdldCIsImFyZ3MiLCJldmVudEFyZ3MiLCJsaXN0ZW5lcnMiLCIkbGlzdGVuZXJzIiwiZSIsInNjb3BlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJWTUFVbmlxdWVJZE1peGluIiwiYmVmb3JlQ3JlYXRlIiwidm1hX3VpZF8iLCJfdWlkIiwiTURDRm91bmRhdGlvbiIsImFkYXB0ZXIiLCJhZGFwdGVyXyIsIk1EQ1RhYkFkYXB0ZXIiLCJhdHRyIiwicHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0IiwiY3NzQ2xhc3NlcyIsIkFDVElWRSIsInN0cmluZ3MiLCJBUklBX1NFTEVDVEVEIiwiUklQUExFX1NFTEVDVE9SIiwiQ09OVEVOVF9TRUxFQ1RPUiIsIlRBQl9JTkRJQ0FUT1JfU0VMRUNUT1IiLCJUQUJJTkRFWCIsIklOVEVSQUNURURfRVZFTlQiLCJNRENUYWJGb3VuZGF0aW9uIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwic2V0QXR0ciIsImFjdGl2YXRlSW5kaWNhdG9yIiwiZGVhY3RpdmF0ZUluZGljYXRvciIsIm5vdGlmeUludGVyYWN0ZWQiLCJnZXRPZmZzZXRMZWZ0IiwiZ2V0T2Zmc2V0V2lkdGgiLCJnZXRDb250ZW50T2Zmc2V0TGVmdCIsImdldENvbnRlbnRPZmZzZXRXaWR0aCIsImZvY3VzIiwiZGVmYXVsdEFkYXB0ZXIiLCJmb2N1c09uQWN0aXZhdGVfIiwiZm9jdXNPbkFjdGl2YXRlIiwiaXNBY3RpdmUiLCJyb290V2lkdGgiLCJyb290TGVmdCIsImNvbnRlbnRXaWR0aCIsImNvbnRlbnRMZWZ0Iiwicm9vdFJpZ2h0IiwiY29udGVudFJpZ2h0IiwiTURDQ29tcG9uZW50Iiwicm9vdCIsImZvdW5kYXRpb24iLCJ1bmRlZmluZWQiLCJyb290XyIsImluaXRpYWxpemUiLCJmb3VuZGF0aW9uXyIsImdldERlZmF1bHRGb3VuZGF0aW9uIiwiaW5pdCIsImluaXRpYWxTeW5jV2l0aERPTSIsIkVycm9yIiwiZGVzdHJveSIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1EQ1JpcHBsZUFkYXB0ZXIiLCJ2YXJOYW1lIiwiUk9PVCIsIlVOQk9VTkRFRCIsIkJHX0ZPQ1VTRUQiLCJGR19BQ1RJVkFUSU9OIiwiRkdfREVBQ1RJVkFUSU9OIiwiVkFSX0xFRlQiLCJWQVJfVE9QIiwiVkFSX0ZHX1NJWkUiLCJWQVJfRkdfU0NBTEUiLCJWQVJfRkdfVFJBTlNMQVRFX1NUQVJUIiwiVkFSX0ZHX1RSQU5TTEFURV9FTkQiLCJudW1iZXJzIiwiUEFERElORyIsIklOSVRJQUxfT1JJR0lOX1NDQUxFIiwiREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMiLCJGR19ERUFDVElWQVRJT05fTVMiLCJUQVBfREVMQVlfTVMiLCJzdXBwb3J0c0Nzc1ZhcmlhYmxlc18iLCJzdXBwb3J0c1Bhc3NpdmVfIiwiZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1ZyIsIndpbmRvd09iaiIsIm5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImhhc1BzZXVkb1ZhckJ1ZyIsImJvcmRlclRvcFN0eWxlIiwicmVtb3ZlIiwic3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJmb3JjZVJlZnJlc2giLCJzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCIsIkNTUyIsInN1cHBvcnRzIiwiZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyIsIndlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyIsImFwcGx5UGFzc2l2ZSIsImdsb2JhbE9iaiIsImlzU3VwcG9ydGVkIiwicGFzc2l2ZSIsImdldE1hdGNoZXNQcm9wZXJ0eSIsIkhUTUxFbGVtZW50UHJvdG90eXBlIiwibWF0Y2hlc01ldGhvZHMiLCJtZXRob2QiLCJpIiwibGVuZ3RoIiwibWF0Y2hlc01ldGhvZCIsImdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyIsImV2IiwicGFnZU9mZnNldCIsImNsaWVudFJlY3QiLCJ4IiwieSIsImRvY3VtZW50WCIsImxlZnQiLCJkb2N1bWVudFkiLCJ0b3AiLCJub3JtYWxpemVkWCIsIm5vcm1hbGl6ZWRZIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiQUNUSVZBVElPTl9FVkVOVF9UWVBFUyIsIlBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTIiwiYWN0aXZhdGVkVGFyZ2V0cyIsIk1EQ1JpcHBsZUZvdW5kYXRpb24iLCJicm93c2VyU3VwcG9ydHNDc3NWYXJzIiwiaXNVbmJvdW5kZWQiLCJpc1N1cmZhY2VBY3RpdmUiLCJpc1N1cmZhY2VEaXNhYmxlZCIsImNvbnRhaW5zRXZlbnRUYXJnZXQiLCJyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyIiwiZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwiZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJ1cGRhdGVDc3NWYXJpYWJsZSIsImNvbXB1dGVCb3VuZGluZ1JlY3QiLCJnZXRXaW5kb3dQYWdlT2Zmc2V0IiwibGF5b3V0RnJhbWVfIiwiZnJhbWVfIiwid2lkdGgiLCJoZWlnaHQiLCJhY3RpdmF0aW9uU3RhdGVfIiwiZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8iLCJpbml0aWFsU2l6ZV8iLCJtYXhSYWRpdXNfIiwiYWN0aXZhdGVIYW5kbGVyXyIsImFjdGl2YXRlXyIsImRlYWN0aXZhdGVIYW5kbGVyXyIsImRlYWN0aXZhdGVfIiwiZm9jdXNIYW5kbGVyXyIsImhhbmRsZUZvY3VzIiwiYmx1ckhhbmRsZXJfIiwiaGFuZGxlQmx1ciIsInJlc2l6ZUhhbmRsZXJfIiwibGF5b3V0IiwidW5ib3VuZGVkQ29vcmRzXyIsImZnU2NhbGVfIiwiYWN0aXZhdGlvblRpbWVyXyIsImZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyIsImFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8iLCJhY3RpdmF0aW9uVGltZXJDYWxsYmFja18iLCJydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8iLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudF8iLCJpc0FjdGl2YXRlZCIsImhhc0RlYWN0aXZhdGlvblVYUnVuIiwid2FzQWN0aXZhdGVkQnlQb2ludGVyIiwid2FzRWxlbWVudE1hZGVBY3RpdmUiLCJhY3RpdmF0aW9uRXZlbnQiLCJpc1Byb2dyYW1tYXRpYyIsInN1cHBvcnRzUHJlc3NSaXBwbGUiLCJzdXBwb3J0c1ByZXNzUmlwcGxlXyIsInJlZ2lzdGVyUm9vdEhhbmRsZXJzXyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxheW91dEludGVybmFsXyIsImNsZWFyVGltZW91dCIsInJlbW92ZUNzc1ZhcnNfIiwiZGVyZWdpc3RlclJvb3RIYW5kbGVyc18iLCJkZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfIiwiZm9yRWFjaCIsImtleXMiLCJrIiwiaW5kZXhPZiIsImFjdGl2YXRpb25TdGF0ZSIsInByZXZpb3VzQWN0aXZhdGlvbkV2ZW50IiwiaXNTYW1lSW50ZXJhY3Rpb24iLCJoYXNBY3RpdmF0ZWRDaGlsZCIsInNvbWUiLCJyZXNldEFjdGl2YXRpb25TdGF0ZV8iLCJwdXNoIiwicmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18iLCJjaGVja0VsZW1lbnRNYWRlQWN0aXZlXyIsImFuaW1hdGVBY3RpdmF0aW9uXyIsImtleUNvZGUiLCJ0cmFuc2xhdGVTdGFydCIsInRyYW5zbGF0ZUVuZCIsImdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18iLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18iLCJzZXRUaW1lb3V0IiwiYWN0aXZhdGlvbkhhc0VuZGVkIiwic3RhdGUiLCJhbmltYXRlRGVhY3RpdmF0aW9uXyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibWF4RGltIiwibWF4IiwiZ2V0Qm91bmRlZFJhZGl1cyIsImh5cG90ZW51c2UiLCJzcXJ0IiwicG93IiwidXBkYXRlTGF5b3V0Q3NzVmFyc18iLCJyb3VuZCIsInVuYm91bmRlZCIsIk1EQ1JpcHBsZSIsImRpc2FibGVkIiwidW5ib3VuZGVkXyIsInNldFVuYm91bmRlZCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImNyZWF0ZUFkYXB0ZXIiLCJkYXRhc2V0Iiwic2V0VW5ib3VuZGVkXyIsInJpcHBsZSIsImluc3RhbmNlIiwiTUFUQ0hFUyIsInV0aWwiLCJIVE1MRWxlbWVudCIsInByb3RvdHlwZSIsImNsYXNzTGlzdCIsImFkZCIsImNvbnRhaW5zIiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJSaXBwbGVDYXBhYmxlU3VyZmFjZSIsIlJpcHBsZUJhc2UiLCJyZWYiLCJfbWF0Y2hlcyIsIm9wdGlvbnMiLCIkZWwiLCIkc2V0IiwiJGRlbGV0ZSIsInN0eWxlcyIsIlJpcHBsZU1peGluIiwibW91bnRlZCIsImJlZm9yZURlc3Ryb3kiLCJUQUJfQUNUSVZBVEVEX0VWRU5UIiwiVEFCX1NDUk9MTEVSX1NFTEVDVE9SIiwiVEFCX1NFTEVDVE9SIiwiQVJST1dfTEVGVF9LRVkiLCJBUlJPV19SSUdIVF9LRVkiLCJFTkRfS0VZIiwiSE9NRV9LRVkiLCJFTlRFUl9LRVkiLCJTUEFDRV9LRVkiLCJFWFRSQV9TQ1JPTExfQU1PVU5UIiwiQVJST1dfTEVGVF9LRVlDT0RFIiwiQVJST1dfUklHSFRfS0VZQ09ERSIsIkVORF9LRVlDT0RFIiwiSE9NRV9LRVlDT0RFIiwiRU5URVJfS0VZQ09ERSIsIlNQQUNFX0tFWUNPREUiLCJNRENUYWJCYXJBZGFwdGVyIiwic2Nyb2xsWCIsInNjcm9sbFhJbmNyZW1lbnQiLCJpbmRleCIsImlkIiwiQUNDRVBUQUJMRV9LRVlTIiwiU2V0IiwiS0VZQ09ERV9NQVAiLCJNYXAiLCJzZXQiLCJNRENUYWJCYXJGb3VuZGF0aW9uIiwic2Nyb2xsVG8iLCJpbmNyZW1lbnRTY3JvbGwiLCJnZXRTY3JvbGxQb3NpdGlvbiIsImdldFNjcm9sbENvbnRlbnRXaWR0aCIsImlzUlRMIiwic2V0QWN0aXZlVGFiIiwiYWN0aXZhdGVUYWJBdEluZGV4IiwiZGVhY3RpdmF0ZVRhYkF0SW5kZXgiLCJmb2N1c1RhYkF0SW5kZXgiLCJnZXRUYWJJbmRpY2F0b3JDbGllbnRSZWN0QXRJbmRleCIsImdldFRhYkRpbWVuc2lvbnNBdEluZGV4IiwiZ2V0UHJldmlvdXNBY3RpdmVUYWJJbmRleCIsImdldEZvY3VzZWRUYWJJbmRleCIsImdldEluZGV4T2ZUYWJCeUlkIiwiZ2V0VGFiTGlzdExlbmd0aCIsIm5vdGlmeVRhYkFjdGl2YXRlZCIsInVzZUF1dG9tYXRpY0FjdGl2YXRpb25fIiwidXNlQXV0b21hdGljQWN0aXZhdGlvbiIsInByZXZpb3VzQWN0aXZlSW5kZXgiLCJpbmRleElzSW5SYW5nZV8iLCJzY3JvbGxJbnRvVmlldyIsImdldEtleUZyb21FdmVudF8iLCJpc0FjdGl2YXRpb25LZXlfIiwicHJldmVudERlZmF1bHQiLCJkZXRlcm1pbmVUYXJnZXRGcm9tS2V5XyIsImZvY3VzZWRUYWJJbmRleCIsInRhYklkIiwiaXNSVExfIiwic2Nyb2xsSW50b1ZpZXdSVExfIiwic2Nyb2xsSW50b1ZpZXdfIiwib3JpZ2luIiwibWF4SW5kZXgiLCJzaG91bGRHb1RvRW5kIiwic2hvdWxkRGVjcmVtZW50Iiwic2hvdWxkSW5jcmVtZW50IiwibmV4dEluZGV4Iiwic2Nyb2xsUG9zaXRpb24iLCJiYXJXaWR0aCIsIm5leHRUYWJEaW1lbnNpb25zIiwicmVsYXRpdmVDb250ZW50TGVmdCIsInJlbGF0aXZlQ29udGVudFJpZ2h0IiwibGVmdEluY3JlbWVudCIsInJpZ2h0SW5jcmVtZW50IiwibWluIiwic2Nyb2xsQ29udGVudFdpZHRoIiwidGFiRGltZW5zaW9ucyIsInJlbGF0aXZlUm9vdExlZnQiLCJyZWxhdGl2ZVJvb3RSaWdodCIsInJlbGF0aXZlUm9vdERlbHRhIiwibGVmdEVkZ2VJc0Nsb3NlciIsInJpZ2h0RWRnZUlzQ2xvc2VyIiwicm9vdERlbHRhIiwiaGFzIiwiZ2V0IiwiZmluZEFkamFjZW50VGFiSW5kZXhDbG9zZXN0VG9FZGdlXyIsInNjcm9sbEluY3JlbWVudCIsImNhbGN1bGF0ZVNjcm9sbEluY3JlbWVudF8iLCJzY3JvbGxXaWR0aCIsImZpbmRBZGphY2VudFRhYkluZGV4Q2xvc2VzdFRvRWRnZVJUTF8iLCJjYWxjdWxhdGVTY3JvbGxJbmNyZW1lbnRSVExfIiwiQU5JTUFUSU5HIiwiU0NST0xMX1RFU1QiLCJTQ1JPTExfQVJFQV9TQ1JPTEwiLCJBUkVBX1NFTEVDVE9SIiwiTURDVGFiU2Nyb2xsZXJBZGFwdGVyIiwiZXZ0VGFyZ2V0Iiwic2VsZWN0b3IiLCJwcm9wTmFtZSIsInByb3BlcnR5TmFtZSIsInNjcm9sbExlZnQiLCJNRENUYWJTY3JvbGxlclJUTCIsInRyYW5zbGF0ZVgiLCJNRENUYWJTY3JvbGxlclJUTERlZmF1bHQiLCJjdXJyZW50U2Nyb2xsTGVmdCIsImdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0IiwiY2FsY3VsYXRlU2Nyb2xsRWRnZXNfIiwicmlnaHQiLCJlZGdlcyIsImNsYW1wZWRTY3JvbGxMZWZ0IiwiY2xhbXBTY3JvbGxWYWx1ZV8iLCJmaW5hbFNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsRGVsdGEiLCJnZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGgiLCJnZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgiLCJNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlIiwiTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlIiwiTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uIiwiZXZlbnRUYXJnZXRNYXRjaGVzU2VsZWN0b3IiLCJhZGRTY3JvbGxBcmVhQ2xhc3MiLCJzZXRTY3JvbGxBcmVhU3R5bGVQcm9wZXJ0eSIsInNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5IiwiZ2V0U2Nyb2xsQ29udGVudFN0eWxlVmFsdWUiLCJzZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCIsImNvbXB1dGVTY3JvbGxBcmVhQ2xpZW50UmVjdCIsImNvbXB1dGVTY3JvbGxDb250ZW50Q2xpZW50UmVjdCIsImNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0IiwiaXNBbmltYXRpbmdfIiwicnRsU2Nyb2xsZXJJbnN0YW5jZV8iLCJob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0IiwiY29tcHV0ZUN1cnJlbnRTY3JvbGxQb3NpdGlvblJUTF8iLCJjdXJyZW50VHJhbnNsYXRlWCIsImNhbGN1bGF0ZUN1cnJlbnRUcmFuc2xhdGVYXyIsInN0b3BTY3JvbGxBbmltYXRpb25fIiwiaW5jcmVtZW50U2Nyb2xsUlRMXyIsImluY3JlbWVudFNjcm9sbF8iLCJzY3JvbGxUb1JUTF8iLCJzY3JvbGxUb18iLCJydGxTY3JvbGxlckZhY3RvcnlfIiwidHJhbnNmb3JtVmFsdWUiLCJyZXN1bHRzIiwiZXhlYyIsInBhcnRzIiwicGFyc2VGbG9hdCIsImdldFJUTFNjcm9sbGVyIiwiZ2V0U2Nyb2xsUG9zaXRpb25SVEwiLCJjdXJyZW50U2Nyb2xsWCIsInNhZmVTY3JvbGxYIiwiYW5pbWF0ZV8iLCJhbmltYXRpb24iLCJzY3JvbGxUb1JUTCIsInRhcmdldFNjcm9sbFgiLCJpbmNyZW1lbnRTY3JvbGxSVEwiLCJjdXJyZW50U2Nyb2xsUG9zaXRpb24iLCJnZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbl8iLCJnZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbiIsImluaXRpYWxTY3JvbGxMZWZ0IiwibmV3U2Nyb2xsTGVmdCIsInJvb3RDbGllbnRSZWN0IiwiY29udGVudENsaWVudFJlY3QiLCJyaWdodEVkZ2VEZWx0YSIsImhvcml6b250YWxTY3JvbGxiYXJIZWlnaHRfIiwiZG9jdW1lbnRPYmoiLCJzaG91bGRDYWNoZVJlc3VsdCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsInJlbW92ZUNoaWxkIiwiZmlsdGVyIiwicCIsInBvcCIsIk1EQ1RhYkluZGljYXRvckFkYXB0ZXIiLCJGQURFIiwiTk9fVFJBTlNJVElPTiIsIk1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24iLCJjb21wdXRlQ29udGVudENsaWVudFJlY3QiLCJzZXRDb250ZW50U3R5bGVQcm9wZXJ0eSIsIk1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIiwiY3VycmVudENsaWVudFJlY3QiLCJ3aWR0aERlbHRhIiwieFBvc2l0aW9uIiwibWRjVGFiIiwibWRjVGFiQmFyIiwibWRjVGFiU2Nyb2xsZXIiLCJtZGNUYWJJbmRpY2F0b3IiLCJtZGNUYWJSaXBwbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixF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
