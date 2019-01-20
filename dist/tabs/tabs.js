/**
* @module vue-mdc-adaptertabs 0.19.2-beta
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
      version: '0.19.2-beta',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9iYXNlL2F1dG8taW5pdC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9iYXNlLXBsdWdpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZWxlbWVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tbGluay5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZXZlbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWljb24uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvZGlzcGF0Y2gtZXZlbnQtbWl4aW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvdW5pcXVlaWQtbWl4aW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS91dGlsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS1iYXNlLmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXJ1bnRpbWUtaGVscGVycy9ub3JtYWxpemUtY29tcG9uZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy90YWJzL21kYy10YWIudnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWJhci9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9jb21wb25lbnRzL3RhYnMvbWRjLXRhYi1iYXIudnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3J0bC1zY3JvbGxlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL3J0bC1kZWZhdWx0LXNjcm9sbGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvcnRsLW5lZ2F0aXZlLXNjcm9sbGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvcnRsLXJldmVyc2Utc2Nyb2xsZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvdXRpbC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvdGFicy9tZGMtdGFiLXNjcm9sbGVyLnZ1ZSIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWluZGljYXRvci9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWluZGljYXRvci9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL3NsaWRpbmctZm91bmRhdGlvbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvdGFicy9tZGMtdGFiLWluZGljYXRvci52dWUiLCIuLi8uLi9jb21wb25lbnRzL3RhYnMvbWRjLXRhYi1yaXBwbGUudnVlIiwiLi4vLi4vY29tcG9uZW50cy90YWJzL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy90YWJzL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHtcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIGNvbnRleHQucHJvcHMuaXMgfHwgY29udGV4dC5wcm9wcy50YWcgfHwgJ2RpdicsXG4gICAgICBjb250ZXh0LmRhdGEsXG4gICAgICBjb250ZXh0LmNoaWxkcmVuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50TWl4aW4gPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21FbGVtZW50XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDdXN0b21MaW5rID0ge1xuICBuYW1lOiAnY3VzdG9tLWxpbmsnLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIHRhZzogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdhJyB9LFxuICAgIGxpbms6IE9iamVjdFxuICB9LFxuICByZW5kZXIoaCwgY29udGV4dCkge1xuICAgIGxldCBlbGVtZW50XG4gICAgbGV0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LmRhdGEpXG5cbiAgICBpZiAoY29udGV4dC5wcm9wcy5saW5rICYmIGNvbnRleHQucGFyZW50LiRyb3V0ZXIpIHtcbiAgICAgIC8vIHJvdXRlci1saW5rIGNhc2VcbiAgICAgIGVsZW1lbnQgPSBjb250ZXh0LnBhcmVudC4kcm9vdC4kb3B0aW9ucy5jb21wb25lbnRzWydyb3V0ZXItbGluayddXG4gICAgICBkYXRhLnByb3BzID0gT2JqZWN0LmFzc2lnbih7IHRhZzogY29udGV4dC5wcm9wcy50YWcgfSwgY29udGV4dC5wcm9wcy5saW5rKVxuICAgICAgaWYgKGRhdGEub24uY2xpY2spIHtcbiAgICAgICAgZGF0YS5uYXRpdmVPbiA9IHsgY2xpY2s6IGRhdGEub24uY2xpY2sgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlbGVtZW50IGZhbGxiYWNrXG4gICAgICBlbGVtZW50ID0gY29udGV4dC5wcm9wcy50YWdcbiAgICB9XG5cbiAgICByZXR1cm4gaChlbGVtZW50LCBkYXRhLCBjb250ZXh0LmNoaWxkcmVuKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21MaW5rTWl4aW4gPSB7XG4gIHByb3BzOiB7XG4gICAgdG86IFtTdHJpbmcsIE9iamVjdF0sXG4gICAgZXhhY3Q6IEJvb2xlYW4sXG4gICAgYXBwZW5kOiBCb29sZWFuLFxuICAgIHJlcGxhY2U6IEJvb2xlYW4sXG4gICAgYWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgICBleGFjdEFjdGl2ZUNsYXNzOiBTdHJpbmdcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaW5rKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy50byAmJiB7XG4gICAgICAgICAgdG86IHRoaXMudG8sXG4gICAgICAgICAgZXhhY3Q6IHRoaXMuZXhhY3QsXG4gICAgICAgICAgYXBwZW5kOiB0aGlzLmFwcGVuZCxcbiAgICAgICAgICByZXBsYWNlOiB0aGlzLnJlcGxhY2UsXG4gICAgICAgICAgYWN0aXZlQ2xhc3M6IHRoaXMuYWN0aXZlQ2xhc3MsXG4gICAgICAgICAgZXhhY3RBY3RpdmVDbGFzczogdGhpcy5leGFjdEFjdGl2ZUNsYXNzXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21MaW5rXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBleHRyYWN0SWNvblByb3AoaWNvblByb3ApIHtcbiAgaWYgKHR5cGVvZiBpY29uUHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3NlczogeyAnbWF0ZXJpYWwtaWNvbnMnOiB0cnVlIH0sXG4gICAgICBjb250ZW50OiBpY29uUHJvcFxuICAgIH1cbiAgfSBlbHNlIGlmIChpY29uUHJvcCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IGljb25Qcm9wLnJlZHVjZShcbiAgICAgICAgKHJlc3VsdCwgdmFsdWUpID0+IE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7IFt2YWx1ZV06IHRydWUgfSksXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBpY29uUHJvcCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3NlczogaWNvblByb3AuY2xhc3NOYW1lXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgKHJlc3VsdCwgdmFsdWUpID0+IE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7IFt2YWx1ZV06IHRydWUgfSksXG4gICAgICAgICAge31cbiAgICAgICAgKSxcbiAgICAgIGNvbnRlbnQ6IGljb25Qcm9wLnRleHRDb250ZW50XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgRGlzcGF0Y2hFdmVudE1peGluID0ge1xuICBwcm9wczoge1xuICAgIGV2ZW50OiBTdHJpbmcsXG4gICAgJ2V2ZW50LXRhcmdldCc6IE9iamVjdCxcbiAgICAnZXZlbnQtYXJncyc6IEFycmF5XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBkaXNwYXRjaEV2ZW50KGV2dCkge1xuICAgICAgZXZ0ICYmIHRoaXMuJGVtaXQoZXZ0LnR5cGUsIGV2dClcbiAgICAgIGlmICh0aGlzLmV2ZW50KSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmV2ZW50VGFyZ2V0IHx8IHRoaXMuJHJvb3RcbiAgICAgICAgbGV0IGFyZ3MgPSB0aGlzLmV2ZW50QXJncyB8fCBbXVxuICAgICAgICB0YXJnZXQuJGVtaXQodGhpcy5ldmVudCwgLi4uYXJncylcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbGlzdGVuZXJzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy4kbGlzdGVuZXJzLFxuICAgICAgICBjbGljazogZSA9PiB0aGlzLmRpc3BhdGNoRXZlbnQoZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0IHNjb3BlID1cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigweDEwMDAwMDAwKSkudG9TdHJpbmcoKSArICctJ1xuXG5leHBvcnQgY29uc3QgVk1BVW5pcXVlSWRNaXhpbiA9IHtcbiAgYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMudm1hX3VpZF8gPSBzY29wZSArIHRoaXMuX3VpZFxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgQVxuICovXG5jbGFzcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bXtjc3NDbGFzc2VzfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17bnVtYmVyc30gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiB7IU9iamVjdH0gKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgLy8gdmFsaWRhdGlvbi5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciA9IHt9KSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFBfSAqL1xuICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIE1EQ1RhYkRpbWVuc2lvbnMgcHJvdmlkZXMgZGV0YWlscyBhYm91dCB0aGUgbGVmdCBhbmQgcmlnaHQgZWRnZXMgb2YgdGhlIFRhYlxuICogcm9vdCBlbGVtZW50IGFuZCB0aGUgVGFiIGNvbnRlbnQgZWxlbWVudC4gVGhlc2UgdmFsdWVzIGFyZSB1c2VkIHRvIGRldGVybWluZVxuICogdGhlIHZpc3VhbCBwb3NpdGlvbiBvZiB0aGUgVGFiIHdpdGggcmVzcGVjdCBpdCdzIHBhcmVudCBjb250YWluZXIuXG4gKiBAdHlwZWRlZiB7e3Jvb3RMZWZ0OiBudW1iZXIsIHJvb3RSaWdodDogbnVtYmVyLCBjb250ZW50TGVmdDogbnVtYmVyLCBjb250ZW50UmlnaHQ6IG51bWJlcn19XG4gKi9cbmxldCBNRENUYWJEaW1lbnNpb25zO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGRldGFpbDoge1xuICogICAgIHRhYklkOiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIGJ1YmJsZXM6IGJvb2xlYW4sXG4gKiB9fVxuICovXG5sZXQgTURDVGFiSW50ZXJhY3Rpb25FdmVudFR5cGU7XG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRhYi5cbiAqXG4gKiBEZWZpbmVzIHRoZSBzaGFwZSBvZiB0aGUgYWRhcHRlciBleHBlY3RlZCBieSB0aGUgZm91bmRhdGlvbi4gSW1wbGVtZW50IHRoaXNcbiAqIGFkYXB0ZXIgdG8gaW50ZWdyYXRlIHRoZSBUYWIgIGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENUYWJBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIGNsYXNzTmFtZSB0byB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzc05hbWUgdG8gYWRkXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGdpdmVuIGNsYXNzTmFtZSBmcm9tIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzTmFtZSB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSByb290IGVsZW1lbnQgaGFzIHRoZSBnaXZlbiBjbGFzc05hbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzTmFtZSB0byByZW1vdmVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgZ2l2ZW4gYXR0ck5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudCB0byB0aGUgZ2l2ZW4gdmFsdWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyIFRoZSBhdHRyaWJ1dGUgbmFtZSB0byBzZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBzbyBnaXZlIHRoZSBhdHRyaWJ1dGVcbiAgICovXG4gIHNldEF0dHIoYXR0ciwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgaW5kaWNhdG9yIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7IUNsaWVudFJlY3Q9fSBwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QgVGhlIGNsaWVudCByZWN0IG9mIHRoZSBwcmV2aW91c2x5IGFjdGl2YXRlZCBpbmRpY2F0b3JcbiAgICovXG4gIGFjdGl2YXRlSW5kaWNhdG9yKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCkge31cblxuICAvKiogRGVhY3RpdmF0ZXMgdGhlIGluZGljYXRvci4gKi9cbiAgZGVhY3RpdmF0ZUluZGljYXRvcigpIHt9XG5cbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBNRENUYWI6aW50ZXJhY3RlZCBldmVudCBmb3IgdXNlIGJ5IHBhcmVudCBjb21wb25lbnRzXG4gICAqL1xuICBub3RpZnlJbnRlcmFjdGVkKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0TGVmdCB2YWx1ZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRPZmZzZXRMZWZ0KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0V2lkdGggdmFsdWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0T2Zmc2V0V2lkdGgoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXRMZWZ0IG9mIHRoZSBjb250ZW50IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldENvbnRlbnRPZmZzZXRMZWZ0KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0V2lkdGggb2YgdGhlIGNvbnRlbnQgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0Q29udGVudE9mZnNldFdpZHRoKCkge31cblxuICAvKipcbiAgICogQXBwbGllcyBmb2N1cyB0byB0aGUgcm9vdCBlbGVtZW50XG4gICAqL1xuICBmb2N1cygpIHt9XG59XG5cbmV4cG9ydCB7TURDVGFiRGltZW5zaW9ucywgTURDVGFiSW50ZXJhY3Rpb25FdmVudFR5cGUsIE1EQ1RhYkFkYXB0ZXJ9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgQUNUSVZFOiAnbWRjLXRhYi0tYWN0aXZlJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQVJJQV9TRUxFQ1RFRDogJ2FyaWEtc2VsZWN0ZWQnLFxuICBSSVBQTEVfU0VMRUNUT1I6ICcubWRjLXRhYl9fcmlwcGxlJyxcbiAgQ09OVEVOVF9TRUxFQ1RPUjogJy5tZGMtdGFiX19jb250ZW50JyxcbiAgVEFCX0lORElDQVRPUl9TRUxFQ1RPUjogJy5tZGMtdGFiLWluZGljYXRvcicsXG4gIFRBQklOREVYOiAndGFiSW5kZXgnLFxuICBJTlRFUkFDVEVEX0VWRU5UOiAnTURDVGFiOmludGVyYWN0ZWQnLFxufTtcblxuZXhwb3J0IHtcbiAgY3NzQ2xhc3NlcyxcbiAgc3RyaW5ncyxcbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1RhYkFkYXB0ZXIsIE1EQ1RhYkRpbWVuc2lvbnN9IGZyb20gJy4vYWRhcHRlcic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbmltcG9ydCB7XG4gIGNzc0NsYXNzZXMsXG4gIHN0cmluZ3MsXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDVGFiQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGFiRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzZWUgTURDVGFiQWRhcHRlciBmb3IgdHlwaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4geyFNRENUYWJBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiQWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIGhhc0NsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHNldEF0dHI6ICgpID0+IHt9LFxuICAgICAgYWN0aXZhdGVJbmRpY2F0b3I6ICgpID0+IHt9LFxuICAgICAgZGVhY3RpdmF0ZUluZGljYXRvcjogKCkgPT4ge30sXG4gICAgICBub3RpZnlJbnRlcmFjdGVkOiAoKSA9PiB7fSxcbiAgICAgIGdldE9mZnNldExlZnQ6ICgpID0+IHt9LFxuICAgICAgZ2V0T2Zmc2V0V2lkdGg6ICgpID0+IHt9LFxuICAgICAgZ2V0Q29udGVudE9mZnNldExlZnQ6ICgpID0+IHt9LFxuICAgICAgZ2V0Q29udGVudE9mZnNldFdpZHRoOiAoKSA9PiB7fSxcbiAgICAgIGZvY3VzOiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0geyFNRENUYWJBZGFwdGVyfSBhZGFwdGVyICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1RhYkZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmZvY3VzT25BY3RpdmF0ZV8gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIFwiY2xpY2tcIiBldmVudFxuICAgKi9cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgLy8gSXQncyB1cCB0byB0aGUgcGFyZW50IGNvbXBvbmVudCB0byBrZWVwIHRyYWNrIG9mIHRoZSBhY3RpdmUgVGFiIGFuZFxuICAgIC8vIGVuc3VyZSB3ZSBkb24ndCBhY3RpdmF0ZSBhIFRhYiB0aGF0J3MgYWxyZWFkeSBhY3RpdmUuXG4gICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlJbnRlcmFjdGVkKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgVGFiJ3MgYWN0aXZlIHN0YXRlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkFDVElWRSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB3aGV0aGVyIHRoZSB0YWIgc2hvdWxkIGZvY3VzIGl0c2VsZiB3aGVuIGFjdGl2YXRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZvY3VzT25BY3RpdmF0ZVxuICAgKi9cbiAgc2V0Rm9jdXNPbkFjdGl2YXRlKGZvY3VzT25BY3RpdmF0ZSkge1xuICAgIHRoaXMuZm9jdXNPbkFjdGl2YXRlXyA9IGZvY3VzT25BY3RpdmF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIFRhYlxuICAgKiBAcGFyYW0geyFDbGllbnRSZWN0PX0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0XG4gICAqL1xuICBhY3RpdmF0ZShwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5BUklBX1NFTEVDVEVELCAndHJ1ZScpO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihzdHJpbmdzLlRBQklOREVYLCAnMCcpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWN0aXZhdGVJbmRpY2F0b3IocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KTtcbiAgICBpZiAodGhpcy5mb2N1c09uQWN0aXZhdGVfKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBUYWJcbiAgICovXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgLy8gRWFybHkgZXhpdFxuICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkFDVElWRSk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKHN0cmluZ3MuQVJJQV9TRUxFQ1RFRCwgJ2ZhbHNlJyk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKHN0cmluZ3MuVEFCSU5ERVgsICctMScpO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVhY3RpdmF0ZUluZGljYXRvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIFRhYlxuICAgKiBAcmV0dXJuIHshTURDVGFiRGltZW5zaW9uc31cbiAgICovXG4gIGNvbXB1dGVEaW1lbnNpb25zKCkge1xuICAgIGNvbnN0IHJvb3RXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0T2Zmc2V0V2lkdGgoKTtcbiAgICBjb25zdCByb290TGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0T2Zmc2V0TGVmdCgpO1xuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0Q29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3QgY29udGVudExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldENvbnRlbnRPZmZzZXRMZWZ0KCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcm9vdExlZnQsXG4gICAgICByb290UmlnaHQ6IHJvb3RMZWZ0ICsgcm9vdFdpZHRoLFxuICAgICAgY29udGVudExlZnQ6IHJvb3RMZWZ0ICsgY29udGVudExlZnQsXG4gICAgICBjb250ZW50UmlnaHQ6IHJvb3RMZWZ0ICsgY29udGVudExlZnQgKyBjb250ZW50V2lkdGgsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbi8qKlxuICogQHRlbXBsYXRlIEZcbiAqL1xuY2xhc3MgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ0NvbXBvbmVudH1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgLy8gU3ViY2xhc3NlcyB3aGljaCBleHRlbmQgTURDQmFzZSBzaG91bGQgcHJvdmlkZSBhbiBhdHRhY2hUbygpIG1ldGhvZCB0aGF0IHRha2VzIGEgcm9vdCBlbGVtZW50IGFuZFxuICAgIC8vIHJldHVybnMgYW4gaW5zdGFudGlhdGVkIGNvbXBvbmVudCB3aXRoIGl0cyByb290IHNldCB0byB0aGF0IGVsZW1lbnQuIEFsc28gbm90ZSB0aGF0IGluIHRoZSBjYXNlcyBvZlxuICAgIC8vIHN1YmNsYXNzZXMsIGFuIGV4cGxpY2l0IGZvdW5kYXRpb24gY2xhc3Mgd2lsbCBub3QgaGF2ZSB0byBiZSBwYXNzZWQgaW47IGl0IHdpbGwgc2ltcGx5IGJlIGluaXRpYWxpemVkXG4gICAgLy8gZnJvbSBnZXREZWZhdWx0Rm91bmRhdGlvbigpLlxuICAgIHJldHVybiBuZXcgTURDQ29tcG9uZW50KHJvb3QsIG5ldyBNRENGb3VuZGF0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHtGPX0gZm91bmRhdGlvblxuICAgKiBAcGFyYW0gey4uLj99IGFyZ3NcbiAgICovXG4gIGNvbnN0cnVjdG9yKHJvb3QsIGZvdW5kYXRpb24gPSB1bmRlZmluZWQsIC4uLmFyZ3MpIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG4gICAgdGhpcy5yb290XyA9IHJvb3Q7XG4gICAgdGhpcy5pbml0aWFsaXplKC4uLmFyZ3MpO1xuICAgIC8vIE5vdGUgdGhhdCB3ZSBpbml0aWFsaXplIGZvdW5kYXRpb24gaGVyZSBhbmQgbm90IHdpdGhpbiB0aGUgY29uc3RydWN0b3IncyBkZWZhdWx0IHBhcmFtIHNvIHRoYXRcbiAgICAvLyB0aGlzLnJvb3RfIGlzIGRlZmluZWQgYW5kIGNhbiBiZSB1c2VkIHdpdGhpbiB0aGUgZm91bmRhdGlvbiBjbGFzcy5cbiAgICAvKiogQHByb3RlY3RlZCB7IUZ9ICovXG4gICAgdGhpcy5mb3VuZGF0aW9uXyA9IGZvdW5kYXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSA6IGZvdW5kYXRpb247XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5pbml0KCk7XG4gICAgdGhpcy5pbml0aWFsU3luY1dpdGhET00oKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoLyogLi4uYXJncyAqLykge1xuICAgIC8vIFN1YmNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoaXMgdG8gZG8gYW55IGFkZGl0aW9uYWwgc2V0dXAgd29yayB0aGF0IHdvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiBhXG4gICAgLy8gXCJjb25zdHJ1Y3RvclwiLiBFc3NlbnRpYWxseSwgaXQgaXMgYSBob29rIGludG8gdGhlIHBhcmVudCBjb25zdHJ1Y3RvciBiZWZvcmUgdGhlIGZvdW5kYXRpb24gaXNcbiAgICAvLyBpbml0aWFsaXplZC4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIGJlc2lkZXMgcm9vdCBhbmQgZm91bmRhdGlvbiB3aWxsIGJlIHBhc3NlZCBpbiBoZXJlLlxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFGfSBmb3VuZGF0aW9uXG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCBmb3VuZGF0aW9uIGNsYXNzIGZvciB0aGVcbiAgICAvLyBjb21wb25lbnQuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgZ2V0RGVmYXVsdEZvdW5kYXRpb24gdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCAnICtcbiAgICAgICdmb3VuZGF0aW9uIGNsYXNzJyk7XG4gIH1cblxuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgdGhleSBuZWVkIHRvIHBlcmZvcm0gd29yayB0byBzeW5jaHJvbml6ZSB3aXRoIGEgaG9zdCBET01cbiAgICAvLyBvYmplY3QuIEFuIGV4YW1wbGUgb2YgdGhpcyB3b3VsZCBiZSBhIGZvcm0gY29udHJvbCB3cmFwcGVyIHRoYXQgbmVlZHMgdG8gc3luY2hyb25pemUgaXRzIGludGVybmFsIHN0YXRlXG4gICAgLy8gdG8gc29tZSBwcm9wZXJ0eSBvciBhdHRyaWJ1dGUgb2YgdGhlIGhvc3QgRE9NLiBQbGVhc2Ugbm90ZTogdGhpcyBpcyAqbm90KiB0aGUgcGxhY2UgdG8gcGVyZm9ybSBET01cbiAgICAvLyByZWFkcy93cml0ZXMgdGhhdCB3b3VsZCBjYXVzZSBsYXlvdXQgLyBwYWludCwgYXMgdGhpcyBpcyBjYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIHdpdGhpbiB0aGUgY29uc3RydWN0b3IuXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgbWF5IGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZWxlYXNlIGFueSByZXNvdXJjZXMgLyBkZXJlZ2lzdGVyIGFueSBsaXN0ZW5lcnMgdGhleSBoYXZlXG4gICAgLy8gYXR0YWNoZWQuIEFuIGV4YW1wbGUgb2YgdGhpcyBtaWdodCBiZSBkZXJlZ2lzdGVyaW5nIGEgcmVzaXplIGV2ZW50IGZyb20gdGhlIHdpbmRvdyBvYmplY3QuXG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiBsaXN0ZW5pbmcgZm9yIGN1c3RvbSBldmVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBsaXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIG1ldGhvZCB0byByZW1vdmUgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudC4gVGhpcyBpcyBtb3N0IHVzZWZ1bCB3aGVuXG4gICAqIHVubGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgdW5saXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBhIGNyb3NzLWJyb3dzZXItY29tcGF0aWJsZSBjdXN0b20gZXZlbnQgZnJvbSB0aGUgY29tcG9uZW50IHJvb3Qgb2YgdGhlIGdpdmVuIHR5cGUsXG4gICAqIHdpdGggdGhlIGdpdmVuIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IU9iamVjdH0gZXZ0RGF0YVxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBzaG91bGRCdWJibGVcbiAgICovXG4gIGVtaXQoZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgICBsZXQgZXZ0O1xuICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvb3RfLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENDb21wb25lbnQ7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFJpcHBsZS4gUHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBtYW5hZ2luZ1xuICogLSBjbGFzc2VzXG4gKiAtIGRvbVxuICogLSBDU1MgdmFyaWFibGVzXG4gKiAtIHBvc2l0aW9uXG4gKiAtIGRpbWVuc2lvbnNcbiAqIC0gc2Nyb2xsIHBvc2l0aW9uXG4gKiAtIGV2ZW50IGhhbmRsZXJzXG4gKiAtIHVuYm91bmRlZCwgYWN0aXZlIGFuZCBkaXNhYmxlZCBzdGF0ZXNcbiAqXG4gKiBBZGRpdGlvbmFsbHksIHByb3ZpZGVzIHR5cGUgaW5mb3JtYXRpb24gZm9yIHRoZSBhZGFwdGVyIHRvIHRoZSBDbG9zdXJlXG4gKiBjb21waWxlci5cbiAqXG4gKiBJbXBsZW1lbnQgdGhpcyBhZGFwdGVyIGZvciB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UgdG8gZGVsZWdhdGUgdXBkYXRlcyB0b1xuICogdGhlIGNvbXBvbmVudCBpbiB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UuIFNlZSBhcmNoaXRlY3R1cmUgZG9jdW1lbnRhdGlvblxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvY29kZS9hcmNoaXRlY3R1cmUubWRcbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1JpcHBsZUFkYXB0ZXIge1xuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzVW5ib3VuZGVkKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNTdXJmYWNlQWN0aXZlKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNTdXJmYWNlRGlzYWJsZWQoKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7IUV2ZW50VGFyZ2V0fSB0YXJnZXQgKi9cbiAgY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlclJlc2l6ZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YXJOYW1lXG4gICAqIEBwYXJhbSB7P251bWJlcnxzdHJpbmd9IHZhbHVlXG4gICAqL1xuICB1cGRhdGVDc3NWYXJpYWJsZSh2YXJOYW1lLCB2YWx1ZSkge31cblxuICAvKiogQHJldHVybiB7IUNsaWVudFJlY3R9ICovXG4gIGNvbXB1dGVCb3VuZGluZ1JlY3QoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSAqL1xuICBnZXRXaW5kb3dQYWdlT2Zmc2V0KCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICAvLyBSaXBwbGUgaXMgYSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIFwicm9vdFwiIGNvbXBvbmVudCBpcyByZWFsbHkgYSBcIm1peGluXCIgb2Ygc29ydHMsXG4gIC8vIGdpdmVuIHRoYXQgaXQncyBhbiAndXBncmFkZScgdG8gYW4gZXhpc3RpbmcgY29tcG9uZW50LiBUaGF0IGJlaW5nIHNhaWQgaXQgaXMgdGhlIHJvb3RcbiAgLy8gQ1NTIGNsYXNzIHRoYXQgYWxsIG90aGVyIENTUyBjbGFzc2VzIGRlcml2ZSBmcm9tLlxuICBST09UOiAnbWRjLXJpcHBsZS11cGdyYWRlZCcsXG4gIFVOQk9VTkRFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZCcsXG4gIEJHX0ZPQ1VTRUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQnLFxuICBGR19BQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uJyxcbiAgRkdfREVBQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1kZWFjdGl2YXRpb24nLFxufTtcblxuY29uc3Qgc3RyaW5ncyA9IHtcbiAgVkFSX0xFRlQ6ICctLW1kYy1yaXBwbGUtbGVmdCcsXG4gIFZBUl9UT1A6ICctLW1kYy1yaXBwbGUtdG9wJyxcbiAgVkFSX0ZHX1NJWkU6ICctLW1kYy1yaXBwbGUtZmctc2l6ZScsXG4gIFZBUl9GR19TQ0FMRTogJy0tbWRjLXJpcHBsZS1mZy1zY2FsZScsXG4gIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0JyxcbiAgVkFSX0ZHX1RSQU5TTEFURV9FTkQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCcsXG59O1xuXG5jb25zdCBudW1iZXJzID0ge1xuICBQQURESU5HOiAxMCxcbiAgSU5JVElBTF9PUklHSU5fU0NBTEU6IDAuNixcbiAgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM6IDIyNSwgLy8gQ29ycmVzcG9uZHMgdG8gJG1kYy1yaXBwbGUtdHJhbnNsYXRlLWR1cmF0aW9uIChpLmUuIGFjdGl2YXRpb24gYW5pbWF0aW9uIGR1cmF0aW9uKVxuICBGR19ERUFDVElWQVRJT05fTVM6IDE1MCwgLy8gQ29ycmVzcG9uZHMgdG8gJG1kYy1yaXBwbGUtZmFkZS1vdXQtZHVyYXRpb24gKGkuZS4gZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgVEFQX0RFTEFZX01TOiAzMDAsIC8vIERlbGF5IGJldHdlZW4gdG91Y2ggYW5kIHNpbXVsYXRlZCBtb3VzZSBldmVudHMgb24gdG91Y2ggZGV2aWNlc1xufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3QgQ1NTIGN1c3RvbSB2YXJpYWJsZSBzdXBwb3J0LlxuICogQHByaXZhdGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5sZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBhcHBseVBhc3NpdmUgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzUGFzc2l2ZV87XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKSB7XG4gIC8vIERldGVjdCB2ZXJzaW9ucyBvZiBFZGdlIHdpdGggYnVnZ3kgdmFyKCkgc3VwcG9ydFxuICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzExNDk1NDQ4L1xuICBjb25zdCBkb2N1bWVudCA9IHdpbmRvd09iai5kb2N1bWVudDtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub2RlLmNsYXNzTmFtZSA9ICdtZGMtcmlwcGxlLXN1cmZhY2UtLXRlc3QtZWRnZS12YXItYnVnJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcblxuICAvLyBUaGUgYnVnIGV4aXN0cyBpZiA6OmJlZm9yZSBzdHlsZSBlbmRzIHVwIHByb3BhZ2F0aW5nIHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgLy8gQWRkaXRpb25hbGx5LCBnZXRDb21wdXRlZFN0eWxlIHJldHVybnMgbnVsbCBpbiBpZnJhbWVzIHdpdGggZGlzcGxheTogXCJub25lXCIgaW4gRmlyZWZveCxcbiAgLy8gYnV0IEZpcmVmb3ggaXMga25vd24gdG8gc3VwcG9ydCBDU1MgY3VzdG9tIHByb3BlcnRpZXMgY29ycmVjdGx5LlxuICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93T2JqLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIGNvbnN0IGhhc1BzZXVkb1ZhckJ1ZyA9IGNvbXB1dGVkU3R5bGUgIT09IG51bGwgJiYgY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BTdHlsZSA9PT0gJ3NvbGlkJztcbiAgbm9kZS5yZW1vdmUoKTtcbiAgcmV0dXJuIGhhc1BzZXVkb1ZhckJ1Zztcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFXaW5kb3d9IHdpbmRvd09ialxuICogQHBhcmFtIHtib29sZWFuPX0gZm9yY2VSZWZyZXNoXG4gKiBAcmV0dXJuIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3dPYmosIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGxldCBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgaWYgKHR5cGVvZiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPT09ICdib29sZWFuJyAmJiAhZm9yY2VSZWZyZXNoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xuICB9XG5cbiAgY29uc3Qgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSB3aW5kb3dPYmouQ1NTICYmIHR5cGVvZiB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzID09PSAnZnVuY3Rpb24nO1xuICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyA9IHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NDY2OVxuICAvLyBTZWU6IFJFQURNRSBzZWN0aW9uIG9uIFNhZmFyaVxuICBjb25zdCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMgPSAoXG4gICAgd2luZG93T2JqLkNTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpXG4gICk7XG5cbiAgaWYgKGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgfHwgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzKSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSAhZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopO1xuICB9IGVsc2Uge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gZmFsc2U7XG4gIH1cblxuICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xuICB9XG4gIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbn1cblxuLy9cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycywgYW5kIGlmIHNvLCB1c2UgdGhlbS5cbiAqIEBwYXJhbSB7IVdpbmRvdz19IGdsb2JhbE9ialxuICogQHBhcmFtIHtib29sZWFuPX0gZm9yY2VSZWZyZXNoXG4gKiBAcmV0dXJuIHtib29sZWFufCFFdmVudExpc3RlbmVyT3B0aW9uc31cbiAqL1xuZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiA9IHdpbmRvdywgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgaWYgKHN1cHBvcnRzUGFzc2l2ZV8gPT09IHVuZGVmaW5lZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgZ2xvYmFsT2JqLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCB7Z2V0IHBhc3NpdmUoKSB7XG4gICAgICAgIGlzU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkO1xuICAgICAgfX0pO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuXG4gICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkO1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZV9cbiAgICA/IC8qKiBAdHlwZSB7IUV2ZW50TGlzdGVuZXJPcHRpb25zfSAqLyAoe3Bhc3NpdmU6IHRydWV9KVxuICAgIDogZmFsc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHshT2JqZWN0fSBIVE1MRWxlbWVudFByb3RvdHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgLyoqXG4gICAqIE9yZGVyIGlzIGltcG9ydGFudCBiZWNhdXNlIHdlIHJldHVybiB0aGUgZmlyc3QgZXhpc3RpbmcgbWV0aG9kIHdlIGZpbmQuXG4gICAqIERvIG5vdCBjaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBpdGVtcyBpbiB0aGUgYmVsb3cgYXJyYXkuXG4gICAqL1xuICBjb25zdCBtYXRjaGVzTWV0aG9kcyA9IFsnbWF0Y2hlcycsICd3ZWJraXRNYXRjaGVzU2VsZWN0b3InLCAnbXNNYXRjaGVzU2VsZWN0b3InXTtcbiAgbGV0IG1ldGhvZCA9ICdtYXRjaGVzJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaGVzTWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1hdGNoZXNNZXRob2QgPSBtYXRjaGVzTWV0aG9kc1tpXTtcbiAgICBpZiAobWF0Y2hlc01ldGhvZCBpbiBIVE1MRWxlbWVudFByb3RvdHlwZSkge1xuICAgICAgbWV0aG9kID0gbWF0Y2hlc01ldGhvZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXRob2Q7XG59XG5cbi8qKlxuICogQHBhcmFtIHshRXZlbnR9IGV2XG4gKiBAcGFyYW0ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19IHBhZ2VPZmZzZXRcbiAqIEBwYXJhbSB7IUNsaWVudFJlY3R9IGNsaWVudFJlY3RcbiAqIEByZXR1cm4ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19XG4gKi9cbmZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhldiwgcGFnZU9mZnNldCwgY2xpZW50UmVjdCkge1xuICBjb25zdCB7eCwgeX0gPSBwYWdlT2Zmc2V0O1xuICBjb25zdCBkb2N1bWVudFggPSB4ICsgY2xpZW50UmVjdC5sZWZ0O1xuICBjb25zdCBkb2N1bWVudFkgPSB5ICsgY2xpZW50UmVjdC50b3A7XG5cbiAgbGV0IG5vcm1hbGl6ZWRYO1xuICBsZXQgbm9ybWFsaXplZFk7XG4gIC8vIERldGVybWluZSB0b3VjaCBwb2ludCByZWxhdGl2ZSB0byB0aGUgcmlwcGxlIGNvbnRhaW5lci5cbiAgaWYgKGV2LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgIGV2ID0gLyoqIEB0eXBlIHshVG91Y2hFdmVudH0gKi8gKGV2KTtcbiAgICBub3JtYWxpemVkWCA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSBkb2N1bWVudFk7XG4gIH0gZWxzZSB7XG4gICAgZXYgPSAvKiogQHR5cGUgeyFNb3VzZUV2ZW50fSAqLyAoZXYpO1xuICAgIG5vcm1hbGl6ZWRYID0gZXYucGFnZVggLSBkb2N1bWVudFg7XG4gICAgbm9ybWFsaXplZFkgPSBldi5wYWdlWSAtIGRvY3VtZW50WTtcbiAgfVxuXG4gIHJldHVybiB7eDogbm9ybWFsaXplZFgsIHk6IG5vcm1hbGl6ZWRZfTtcbn1cblxuZXhwb3J0IHtzdXBwb3J0c0Nzc1ZhcmlhYmxlcywgYXBwbHlQYXNzaXZlLCBnZXRNYXRjaGVzUHJvcGVydHksIGdldE5vcm1hbGl6ZWRFdmVudENvb3Jkc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDUmlwcGxlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge2dldE5vcm1hbGl6ZWRFdmVudENvb3Jkc30gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBpc0FjdGl2YXRlZDogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGFjdGl2YXRpb25FdmVudDogKCFFdmVudHx1bmRlZmluZWQpLFxuICogICBpc1Byb2dyYW1tYXRpYzogKGJvb2xlYW58dW5kZWZpbmVkKVxuICogfX1cbiAqL1xubGV0IEFjdGl2YXRpb25TdGF0ZVR5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZGVhY3RpdmF0ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBmb2N1czogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBibHVyOiAoc3RyaW5nfHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBMaXN0ZW5lckluZm9UeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiBmdW5jdGlvbighRXZlbnQpLFxuICogICBkZWFjdGl2YXRlOiBmdW5jdGlvbighRXZlbnQ9KSxcbiAqICAgZm9jdXM6IGZ1bmN0aW9uKCksXG4gKiAgIGJsdXI6IGZ1bmN0aW9uKClcbiAqIH19XG4gKi9cbmxldCBMaXN0ZW5lcnNUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIHg6IG51bWJlcixcbiAqICAgeTogbnVtYmVyXG4gKiB9fVxuICovXG5sZXQgUG9pbnRUeXBlO1xuXG4vLyBBY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIHRoZSByb290IGVsZW1lbnQgb2YgZWFjaCBpbnN0YW5jZSBmb3IgYWN0aXZhdGlvblxuY29uc3QgQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hzdGFydCcsICdwb2ludGVyZG93bicsICdtb3VzZWRvd24nLCAna2V5ZG93biddO1xuXG4vLyBEZWFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gZG9jdW1lbnRFbGVtZW50IHdoZW4gYSBwb2ludGVyLXJlbGF0ZWQgZG93biBldmVudCBvY2N1cnNcbmNvbnN0IFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gWyd0b3VjaGVuZCcsICdwb2ludGVydXAnLCAnbW91c2V1cCcsICdjb250ZXh0bWVudSddO1xuXG4vLyBUcmFja3MgYWN0aXZhdGlvbnMgdGhhdCBoYXZlIG9jY3VycmVkIG9uIHRoZSBjdXJyZW50IGZyYW1lLCB0byBhdm9pZCBzaW11bHRhbmVvdXMgbmVzdGVkIGFjdGl2YXRpb25zXG4vKiogQHR5cGUgeyFBcnJheTwhRXZlbnRUYXJnZXQ+fSAqL1xubGV0IGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDUmlwcGxlQWRhcHRlcj59XG4gKi9cbmNsYXNzIE1EQ1JpcHBsZUZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4gLyogYm9vbGVhbiAtIGNhY2hlZCAqLyB7fSxcbiAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBhZGRDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgY29udGFpbnNFdmVudFRhcmdldDogKC8qIHRhcmdldDogIUV2ZW50VGFyZ2V0ICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICgvKiB2YXJOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gLyogQ2xpZW50UmVjdCAqLyB7fSxcbiAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IC8qIHt4OiBudW1iZXIsIHk6IG51bWJlcn0gKi8ge30sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1JpcHBsZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUNsaWVudFJlY3R9ICovXG4gICAgdGhpcy5mcmFtZV8gPSAvKiogQHR5cGUgeyFDbGllbnRSZWN0fSAqLyAoe3dpZHRoOiAwLCBoZWlnaHQ6IDB9KTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5pbml0aWFsU2l6ZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50KX0gKi9cbiAgICB0aGlzLmFjdGl2YXRlSGFuZGxlcl8gPSAoZSkgPT4gdGhpcy5hY3RpdmF0ZV8oZSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudD0pfSAqL1xuICAgIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfID0gKCkgPT4gdGhpcy5kZWFjdGl2YXRlXygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmZvY3VzSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmhhbmRsZUZvY3VzKCk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudD0pfSAqL1xuICAgIHRoaXMuYmx1ckhhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVCbHVyKCk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXJfID0gKCkgPT4gdGhpcy5sYXlvdXQoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7e2xlZnQ6IG51bWJlciwgdG9wOm51bWJlcn19ICovXG4gICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICB9O1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5mZ1NjYWxlXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18gPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSB0cnVlO1xuICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICB9O1xuXG4gICAgLyoqIEBwcml2YXRlIHshRXZlbnR8dW5kZWZpbmVkfSAqL1xuICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICB9XG5cbiAgLyoqXG4gICAqIFdlIGNvbXB1dGUgdGhpcyBwcm9wZXJ0eSBzbyB0aGF0IHdlIGFyZSBub3QgcXVlcnlpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNsaWVudFxuICAgKiB1bnRpbCB0aGUgcG9pbnQgaW4gdGltZSB3aGVyZSB0aGUgZm91bmRhdGlvbiByZXF1ZXN0cyBpdC4gVGhpcyBwcmV2ZW50cyBzY2VuYXJpb3Mgd2hlcmVcbiAgICogY2xpZW50LXNpZGUgZmVhdHVyZS1kZXRlY3Rpb24gbWF5IGhhcHBlbiB0b28gZWFybHksIHN1Y2ggYXMgd2hlbiBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyXG4gICAqIGFuZCB0aGVuIGluaXRpYWxpemVkIGF0IG1vdW50IHRpbWUgb24gdGhlIGNsaWVudC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN1cHBvcnRzUHJlc3NSaXBwbGVfKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshQWN0aXZhdGlvblN0YXRlVHlwZX1cbiAgICovXG4gIGRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2YXRlZDogZmFsc2UsXG4gICAgICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogZmFsc2UsXG4gICAgICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IGZhbHNlLFxuICAgICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IGZhbHNlLFxuICAgICAgYWN0aXZhdGlvbkV2ZW50OiB1bmRlZmluZWQsXG4gICAgICBpc1Byb2dyYW1tYXRpYzogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBzdXBwb3J0c1ByZXNzUmlwcGxlID0gdGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpO1xuXG4gICAgdGhpcy5yZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSk7XG5cbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgY29uc3Qge1JPT1QsIFVOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFJPT1QpO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGVzIG5lZWQgbGF5b3V0IGxvZ2ljIGFwcGxpZWQgaW1tZWRpYXRlbHkgdG8gc2V0IGNvb3JkaW5hdGVzIGZvciBib3RoIHNoYWRlIGFuZCByaXBwbGVcbiAgICAgICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZhdGlvblRpbWVyXykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhST09UKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB0aGlzLnJlbW92ZUNzc1ZhcnNfKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCk7XG4gICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSBzdXBwb3J0c1ByZXNzUmlwcGxlIFBhc3NlZCBmcm9tIGluaXQgdG8gc2F2ZSBhIHJlZHVuZGFudCBmdW5jdGlvbiBjYWxsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhlKSB7XG4gICAgaWYgKGUudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCkge1xuICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICByZW1vdmVDc3NWYXJzXygpIHtcbiAgICBjb25zdCB7c3RyaW5nc30gPSBNRENSaXBwbGVGb3VuZGF0aW9uO1xuICAgIE9iamVjdC5rZXlzKHN0cmluZ3MpLmZvckVhY2goKGspID0+IHtcbiAgICAgIGlmIChrLmluZGV4T2YoJ1ZBUl8nKSA9PT0gMCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKHN0cmluZ3Nba10sIG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWN0aXZhdGVfKGUpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VEaXNhYmxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBdm9pZCByZWFjdGluZyB0byBmb2xsb3ctb24gZXZlbnRzIGZpcmVkIGJ5IHRvdWNoIGRldmljZSBhZnRlciBhbiBhbHJlYWR5LXByb2Nlc3NlZCB1c2VyIGludGVyYWN0aW9uXG4gICAgY29uc3QgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgPSB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgICBjb25zdCBpc1NhbWVJbnRlcmFjdGlvbiA9IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ICYmIGUgIT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c0FjdGl2YXRpb25FdmVudC50eXBlICE9PSBlLnR5cGU7XG4gICAgaWYgKGlzU2FtZUludGVyYWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPSBlID09PSB1bmRlZmluZWQ7XG4gICAgYWN0aXZhdGlvblN0YXRlLmFjdGl2YXRpb25FdmVudCA9IGU7XG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA/IGZhbHNlIDogZSAhPT0gdW5kZWZpbmVkICYmIChcbiAgICAgIGUudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAncG9pbnRlcmRvd24nXG4gICAgKTtcblxuICAgIGNvbnN0IGhhc0FjdGl2YXRlZENoaWxkID0gZSAhPT0gdW5kZWZpbmVkICYmIGFjdGl2YXRlZFRhcmdldHMubGVuZ3RoID4gMCAmJiBhY3RpdmF0ZWRUYXJnZXRzLnNvbWUoXG4gICAgICAodGFyZ2V0KSA9PiB0aGlzLmFkYXB0ZXJfLmNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSk7XG4gICAgaWYgKGhhc0FjdGl2YXRlZENoaWxkKSB7XG4gICAgICAvLyBJbW1lZGlhdGVseSByZXNldCBhY3RpdmF0aW9uIHN0YXRlLCB3aGlsZSBwcmVzZXJ2aW5nIGxvZ2ljIHRoYXQgcHJldmVudHMgdG91Y2ggZm9sbG93LW9uIGV2ZW50c1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhY3RpdmF0ZWRUYXJnZXRzLnB1c2goLyoqIEB0eXBlIHshRXZlbnRUYXJnZXR9ICovIChlLnRhcmdldCkpO1xuICAgICAgdGhpcy5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhlKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIC8vIFJlc2V0IGFycmF5IG9uIG5leHQgZnJhbWUgYWZ0ZXIgdGhlIGN1cnJlbnQgZXZlbnQgaGFzIGhhZCBhIGNoYW5jZSB0byBidWJibGUgdG8gcHJldmVudCBhbmNlc3RvciByaXBwbGVzXG4gICAgICBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbiAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlICYmIGUgIT09IHVuZGVmaW5lZCAmJiAoZS5rZXkgPT09ICcgJyB8fCBlLmtleUNvZGUgPT09IDMyKSkge1xuICAgICAgICAvLyBJZiBzcGFjZSB3YXMgcHJlc3NlZCwgdHJ5IGFnYWluIHdpdGhpbiBhbiByQUYgY2FsbCB0byBkZXRlY3QgOmFjdGl2ZSwgYmVjYXVzZSBkaWZmZXJlbnQgVUFzIHJlcG9ydFxuICAgICAgICAvLyBhY3RpdmUgc3RhdGVzIGluY29uc2lzdGVudGx5IHdoZW4gdGhleSdyZSBjYWxsZWQgd2l0aGluIGV2ZW50IGhhbmRsaW5nIGNvZGU6XG4gICAgICAgIC8vIC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjM1OTcxXG4gICAgICAgIC8vIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTI5Mzc0MVxuICAgICAgICAvLyBXZSB0cnkgZmlyc3Qgb3V0c2lkZSByQUYgdG8gc3VwcG9ydCBFZGdlLCB3aGljaCBkb2VzIG5vdCBleGhpYml0IHRoaXMgcHJvYmxlbSwgYnV0IHdpbGwgY3Jhc2ggaWYgYSBDU1NcbiAgICAgICAgLy8gdmFyaWFibGUgaXMgc2V0IHdpdGhpbiBhIHJBRiBjYWxsYmFjayBmb3IgYSBzdWJtaXQgYnV0dG9uIGludGVyYWN0aW9uICgjMjI0MSkuXG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgIC8vIFJlc2V0IGFjdGl2YXRpb24gc3RhdGUgaW1tZWRpYXRlbHkgaWYgZWxlbWVudCB3YXMgbm90IG1hZGUgYWN0aXZlLlxuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnQ9fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKSB7XG4gICAgcmV0dXJuIChlICE9PSB1bmRlZmluZWQgJiYgZS50eXBlID09PSAna2V5ZG93bicpID8gdGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VBY3RpdmUoKSA6IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnQ9fSBldmVudCBPcHRpb25hbCBldmVudCBjb250YWluaW5nIHBvc2l0aW9uIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgYWN0aXZhdGUoZXZlbnQpIHtcbiAgICB0aGlzLmFjdGl2YXRlXyhldmVudCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgYW5pbWF0ZUFjdGl2YXRpb25fKCkge1xuICAgIGNvbnN0IHtWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCBWQVJfRkdfVFJBTlNMQVRFX0VORH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG4gICAgY29uc3Qge0ZHX0RFQUNUSVZBVElPTiwgRkdfQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgY29uc3Qge0RFQUNUSVZBVElPTl9USU1FT1VUX01TfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycztcblxuICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG5cbiAgICBsZXQgdHJhbnNsYXRlU3RhcnQgPSAnJztcbiAgICBsZXQgdHJhbnNsYXRlRW5kID0gJyc7XG5cbiAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgY29uc3Qge3N0YXJ0UG9pbnQsIGVuZFBvaW50fSA9IHRoaXMuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpO1xuICAgICAgdHJhbnNsYXRlU3RhcnQgPSBgJHtzdGFydFBvaW50Lnh9cHgsICR7c3RhcnRQb2ludC55fXB4YDtcbiAgICAgIHRyYW5zbGF0ZUVuZCA9IGAke2VuZFBvaW50Lnh9cHgsICR7ZW5kUG9pbnQueX1weGA7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCB0cmFuc2xhdGVTdGFydCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX0VORCwgdHJhbnNsYXRlRW5kKTtcbiAgICAvLyBDYW5jZWwgYW55IG9uZ29pbmcgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5pbWF0aW9uc1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG5cbiAgICAvLyBGb3JjZSBsYXlvdXQgaW4gb3JkZXIgdG8gcmUtdHJpZ2dlciB0aGUgYW5pbWF0aW9uLlxuICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXygpLCBERUFDVElWQVRJT05fVElNRU9VVF9NUyk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHJldHVybiB7e3N0YXJ0UG9pbnQ6IFBvaW50VHlwZSwgZW5kUG9pbnQ6IFBvaW50VHlwZX19XG4gICAqL1xuICBnZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCkge1xuICAgIGNvbnN0IHthY3RpdmF0aW9uRXZlbnQsIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcn0gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG5cbiAgICBsZXQgc3RhcnRQb2ludDtcbiAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyKSB7XG4gICAgICBzdGFydFBvaW50ID0gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKFxuICAgICAgICAvKiogQHR5cGUgeyFFdmVudH0gKi8gKGFjdGl2YXRpb25FdmVudCksXG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZ2V0V2luZG93UGFnZU9mZnNldCgpLCB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgeDogdGhpcy5mcmFtZV8ud2lkdGggLyAyLFxuICAgICAgICB5OiB0aGlzLmZyYW1lXy5oZWlnaHQgLyAyLFxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gQ2VudGVyIHRoZSBlbGVtZW50IGFyb3VuZCB0aGUgc3RhcnQgcG9pbnQuXG4gICAgc3RhcnRQb2ludCA9IHtcbiAgICAgIHg6IHN0YXJ0UG9pbnQueCAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgeTogc3RhcnRQb2ludC55IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgfTtcblxuICAgIGNvbnN0IGVuZFBvaW50ID0ge1xuICAgICAgeDogKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6ICh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICByZXR1cm4ge3N0YXJ0UG9pbnQsIGVuZFBvaW50fTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKSB7XG4gICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJvdGggd2hlbiBhIHBvaW50aW5nIGRldmljZSBpcyByZWxlYXNlZCwgYW5kIHdoZW4gdGhlIGFjdGl2YXRpb24gYW5pbWF0aW9uIGVuZHMuXG4gICAgLy8gVGhlIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gc2hvdWxkIG9ubHkgcnVuIGFmdGVyIGJvdGggb2YgdGhvc2Ugb2NjdXIuXG4gICAgY29uc3Qge0ZHX0RFQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgY29uc3Qge2hhc0RlYWN0aXZhdGlvblVYUnVuLCBpc0FjdGl2YXRlZH0gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgY29uc3QgYWN0aXZhdGlvbkhhc0VuZGVkID0gaGFzRGVhY3RpdmF0aW9uVVhSdW4gfHwgIWlzQWN0aXZhdGVkO1xuXG4gICAgaWYgKGFjdGl2YXRpb25IYXNFbmRlZCAmJiB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8pIHtcbiAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICB9LCBudW1iZXJzLkZHX0RFQUNUSVZBVElPTl9NUyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpIHtcbiAgICBjb25zdCB7RkdfQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgfVxuXG4gIHJlc2V0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXy5hY3RpdmF0aW9uRXZlbnQ7XG4gICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgIC8vIFRvdWNoIGRldmljZXMgbWF5IGZpcmUgYWRkaXRpb25hbCBldmVudHMgZm9yIHRoZSBzYW1lIGludGVyYWN0aW9uIHdpdGhpbiBhIHNob3J0IHRpbWUuXG4gICAgLy8gU3RvcmUgdGhlIHByZXZpb3VzIGV2ZW50IHVudGlsIGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhhdCBzdWJzZXF1ZW50IGV2ZW50cyBhcmUgZm9yIG5ldyBpbnRlcmFjdGlvbnMuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHVuZGVmaW5lZCwgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlRBUF9ERUxBWV9NUyk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlYWN0aXZhdGVfKCkge1xuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gc2NlbmFyaW9zIHN1Y2ggYXMgd2hlbiB5b3UgaGF2ZSBhIGtleXVwIGV2ZW50IHRoYXQgYmx1cnMgdGhlIGVsZW1lbnQuXG4gICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZSA9IC8qKiBAdHlwZSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9ICovIChPYmplY3QuYXNzaWduKHt9LCBhY3RpdmF0aW9uU3RhdGUpKTtcblxuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKSk7XG4gICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXy5oYXNEZWFjdGl2YXRpb25VWFJ1biA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpO1xuICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmRlYWN0aXZhdGVfKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gb3B0aW9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYW5pbWF0ZURlYWN0aXZhdGlvbl8oe3dhc0FjdGl2YXRlZEJ5UG9pbnRlciwgd2FzRWxlbWVudE1hZGVBY3RpdmV9KSB7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlciB8fCB3YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICB9XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0RnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgbGF5b3V0SW50ZXJuYWxfKCkge1xuICAgIHRoaXMuZnJhbWVfID0gdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgY29uc3QgbWF4RGltID0gTWF0aC5tYXgodGhpcy5mcmFtZV8uaGVpZ2h0LCB0aGlzLmZyYW1lXy53aWR0aCk7XG5cbiAgICAvLyBTdXJmYWNlIGRpYW1ldGVyIGlzIHRyZWF0ZWQgZGlmZmVyZW50bHkgZm9yIHVuYm91bmRlZCB2cy4gYm91bmRlZCByaXBwbGVzLlxuICAgIC8vIFVuYm91bmRlZCByaXBwbGUgZGlhbWV0ZXIgaXMgY2FsY3VsYXRlZCBzbWFsbGVyIHNpbmNlIHRoZSBzdXJmYWNlIGlzIGV4cGVjdGVkIHRvIGFscmVhZHkgYmUgcGFkZGVkIGFwcHJvcHJpYXRlbHlcbiAgICAvLyB0byBleHRlbmQgdGhlIGhpdGJveCwgYW5kIHRoZSByaXBwbGUgaXMgZXhwZWN0ZWQgdG8gbWVldCB0aGUgZWRnZXMgb2YgdGhlIHBhZGRlZCBoaXRib3ggKHdoaWNoIGlzIHR5cGljYWxseVxuICAgIC8vIHNxdWFyZSkuIEJvdW5kZWQgcmlwcGxlcywgb24gdGhlIG90aGVyIGhhbmQsIGFyZSBmdWxseSBleHBlY3RlZCB0byBleHBhbmQgYmV5b25kIHRoZSBzdXJmYWNlJ3MgbG9uZ2VzdCBkaWFtZXRlclxuICAgIC8vIChjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBkaWFnb25hbCBwbHVzIGEgY29uc3RhbnQgcGFkZGluZyksIGFuZCBhcmUgY2xpcHBlZCBhdCB0aGUgc3VyZmFjZSdzIGJvcmRlciB2aWFcbiAgICAvLyBgb3ZlcmZsb3c6IGhpZGRlbmAuXG4gICAgY29uc3QgZ2V0Qm91bmRlZFJhZGl1cyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGh5cG90ZW51c2UgPSBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy5mcmFtZV8ud2lkdGgsIDIpICsgTWF0aC5wb3codGhpcy5mcmFtZV8uaGVpZ2h0LCAyKSk7XG4gICAgICByZXR1cm4gaHlwb3RlbnVzZSArIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5QQURESU5HO1xuICAgIH07XG5cbiAgICB0aGlzLm1heFJhZGl1c18gPSB0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkgPyBtYXhEaW0gOiBnZXRCb3VuZGVkUmFkaXVzKCk7XG5cbiAgICAvLyBSaXBwbGUgaXMgc2l6ZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgbGFyZ2VzdCBkaW1lbnNpb24gb2YgdGhlIHN1cmZhY2UsIHRoZW4gc2NhbGVzIHVwIHVzaW5nIGEgQ1NTIHNjYWxlIHRyYW5zZm9ybVxuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gTWF0aC5mbG9vcihtYXhEaW0gKiBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuSU5JVElBTF9PUklHSU5fU0NBTEUpO1xuICAgIHRoaXMuZmdTY2FsZV8gPSB0aGlzLm1heFJhZGl1c18gLyB0aGlzLmluaXRpYWxTaXplXztcblxuICAgIHRoaXMudXBkYXRlTGF5b3V0Q3NzVmFyc18oKTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICB1cGRhdGVMYXlvdXRDc3NWYXJzXygpIHtcbiAgICBjb25zdCB7XG4gICAgICBWQVJfRkdfU0laRSwgVkFSX0xFRlQsIFZBUl9UT1AsIFZBUl9GR19TQ0FMRSxcbiAgICB9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuXG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0laRSwgYCR7dGhpcy5pbml0aWFsU2l6ZV99cHhgKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TQ0FMRSwgdGhpcy5mZ1NjYWxlXyk7XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICAgIGxlZnQ6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgIHRvcDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9MRUZULCBgJHt0aGlzLnVuYm91bmRlZENvb3Jkc18ubGVmdH1weGApO1xuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfVE9QLCBgJHt0aGlzLnVuYm91bmRlZENvb3Jkc18udG9wfXB4YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdW5ib3VuZGVkICovXG4gIHNldFVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICBjb25zdCB7VU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBpZiAodW5ib3VuZGVkKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGb2N1cygpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpKTtcbiAgfVxuXG4gIGhhbmRsZUJsdXIoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgTURDUmlwcGxlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1JpcHBsZUZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBNRENDb21wb25lbnQ8IU1EQ1JpcHBsZUZvdW5kYXRpb24+XG4gKi9cbmNsYXNzIE1EQ1JpcHBsZSBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKiBAcGFyYW0gey4uLj99IGFyZ3MgKi9cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcGFyYW0ge3tpc1VuYm91bmRlZDogKGJvb2xlYW58dW5kZWZpbmVkKX09fSBvcHRpb25zXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGV9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCwge2lzVW5ib3VuZGVkID0gdW5kZWZpbmVkfSA9IHt9KSB7XG4gICAgY29uc3QgcmlwcGxlID0gbmV3IE1EQ1JpcHBsZShyb290KTtcbiAgICAvLyBPbmx5IG92ZXJyaWRlIHVuYm91bmRlZCBiZWhhdmlvciBpZiBvcHRpb24gaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcbiAgICBpZiAoaXNVbmJvdW5kZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmlwcGxlLnVuYm91bmRlZCA9IC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi8gKGlzVW5ib3VuZGVkKTtcbiAgICB9XG4gICAgcmV0dXJuIHJpcHBsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFSaXBwbGVDYXBhYmxlU3VyZmFjZX0gaW5zdGFuY2VcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlQWRhcHRlcihpbnN0YW5jZSkge1xuICAgIGNvbnN0IE1BVENIRVMgPSB1dGlsLmdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IHV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KSxcbiAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiBpbnN0YW5jZS51bmJvdW5kZWQsXG4gICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IGluc3RhbmNlLnJvb3RfW01BVENIRVNdKCc6YWN0aXZlJyksXG4gICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4gaW5zdGFuY2UuZGlzYWJsZWQsXG4gICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICh0YXJnZXQpID0+IGluc3RhbmNlLnJvb3RfLmNvbnRhaW5zKHRhcmdldCksXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgaW5zdGFuY2Uucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IChoYW5kbGVyKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKHZhck5hbWUsIHZhbHVlKSA9PiBpbnN0YW5jZS5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSksXG4gICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiBpbnN0YW5jZS5yb290Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+ICh7eDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXR9KSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGdldCB1bmJvdW5kZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5ib3VuZGVkXztcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXQgdW5ib3VuZGVkKHVuYm91bmRlZCkge1xuICAgIHRoaXMudW5ib3VuZGVkXyA9IEJvb2xlYW4odW5ib3VuZGVkKTtcbiAgICB0aGlzLnNldFVuYm91bmRlZF8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zdXJlIENvbXBpbGVyIHRocm93cyBhbiBhY2Nlc3MgY29udHJvbCBlcnJvciB3aGVuIGRpcmVjdGx5IGFjY2Vzc2luZyBhXG4gICAqIHByb3RlY3RlZCBvciBwcml2YXRlIHByb3BlcnR5IGluc2lkZSBhIGdldHRlci9zZXR0ZXIsIGxpa2UgdW5ib3VuZGVkIGFib3ZlLlxuICAgKiBCeSBhY2Nlc3NpbmcgdGhlIHByb3RlY3RlZCBwcm9wZXJ0eSBpbnNpZGUgYSBtZXRob2QsIHdlIHNvbHZlIHRoYXQgcHJvYmxlbS5cbiAgICogVGhhdCdzIHdoeSB0aGlzIGZ1bmN0aW9uIGV4aXN0cy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFVuYm91bmRlZF8oKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVbmJvdW5kZWQodGhpcy51bmJvdW5kZWRfKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZWFjdGl2YXRlKCk7XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5sYXlvdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlRm91bmRhdGlvbn1cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIodGhpcykpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgdGhpcy51bmJvdW5kZWQgPSAnbWRjUmlwcGxlSXNVbmJvdW5kZWQnIGluIHRoaXMucm9vdF8uZGF0YXNldDtcbiAgfVxufVxuXG4vKipcbiAqIFNlZSBNYXRlcmlhbCBEZXNpZ24gc3BlYyBmb3IgbW9yZSBkZXRhaWxzIG9uIHdoZW4gdG8gdXNlIHJpcHBsZXMuXG4gKiBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvbW90aW9uL2Nob3Jlb2dyYXBoeS5odG1sI2Nob3Jlb2dyYXBoeS1jcmVhdGlvblxuICogQHJlY29yZFxuICovXG5jbGFzcyBSaXBwbGVDYXBhYmxlU3VyZmFjZSB7fVxuXG4vKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUucm9vdF87XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHJpcHBsZSBibGVlZHMgb3V0IG9mIHRoZSBib3VuZHMgb2YgdGhlIGVsZW1lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS51bmJvdW5kZWQ7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHJpcHBsZSBpcyBhdHRhY2hlZCB0byBhIGRpc2FibGVkIGNvbXBvbmVudC5cbiAqIEB0eXBlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLmRpc2FibGVkO1xuXG5leHBvcnQge01EQ1JpcHBsZSwgTURDUmlwcGxlRm91bmRhdGlvbiwgUmlwcGxlQ2FwYWJsZVN1cmZhY2UsIHV0aWx9O1xuIiwiaW1wb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvaW5kZXgnXG5pbXBvcnQge1xuICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyxcbiAgZ2V0TWF0Y2hlc1Byb3BlcnR5LFxuICBhcHBseVBhc3NpdmVcbn0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS91dGlsJ1xuXG5leHBvcnQgY2xhc3MgUmlwcGxlQmFzZSBleHRlbmRzIE1EQ1JpcHBsZUZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IE1BVENIRVMoKSB7XG4gICAgLyogZ2xvYmFsIEhUTUxFbGVtZW50ICovXG4gICAgcmV0dXJuIChcbiAgICAgIFJpcHBsZUJhc2UuX21hdGNoZXMgfHxcbiAgICAgIChSaXBwbGVCYXNlLl9tYXRjaGVzID0gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSkpXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGlzU3VyZmFjZUFjdGl2ZShyZWYpIHtcbiAgICByZXR1cm4gcmVmW1JpcHBsZUJhc2UuTUFUQ0hFU10oJzphY3RpdmUnKVxuICB9XG5cbiAgY29uc3RydWN0b3Iodm0sIG9wdGlvbnMpIHtcbiAgICBzdXBlcihcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uJGVsW1JpcHBsZUJhc2UuTUFUQ0hFU10oJzphY3RpdmUnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS5kaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2bS4kc2V0KHZtLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJGRlbGV0ZSh2bS5jbGFzc2VzLCBjbGFzc05hbWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiB0YXJnZXQgPT4gdm0uJGVsLmNvbnRhaW5zKHRhcmdldCksXG4gICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHZtLiRlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5zdHlsZXMsIHZhck5hbWUsIHZhbHVlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgUmlwcGxlTWl4aW4gPSB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5yaXBwbGUuZGVzdHJveSgpXG4gIH1cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGN1c3RvbS1lbGVtZW50IFxuICAgIDp0YWc9XCJ0YWdcIiBcbiAgICA6Y2xhc3Nlcz1cImNsYXNzZXNcIlxuICAgIDpzdHlsZXM9XCJzdHlsZXNcIiBcbiAgICBjbGFzcz1cIm1kYy1yaXBwbGVcIj5cbiAgICA8c2xvdCAvPlxuICA8L2N1c3RvbS1lbGVtZW50PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnRNaXhpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgeyBSaXBwbGVNaXhpbiB9IGZyb20gJy4vbWRjLXJpcHBsZS1iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtcmlwcGxlJyxcbiAgbWl4aW5zOiBbQ3VzdG9tRWxlbWVudE1peGluLCBSaXBwbGVNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgdGFnOiBTdHJpbmdcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoY29tcGlsZWRUZW1wbGF0ZSwgaW5qZWN0U3R5bGUsIGRlZmF1bHRFeHBvcnQsIHNjb3BlSWQsIGlzRnVuY3Rpb25hbFRlbXBsYXRlLCBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovLCBpc1NoYWRvd01vZGUsIGNyZWF0ZUluamVjdG9yLCBjcmVhdGVJbmplY3RvclNTUiwgY3JlYXRlSW5qZWN0b3JTaGFkb3cpIHtcbiAgICBpZiAodHlwZW9mIGlzU2hhZG93TW9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjcmVhdGVJbmplY3RvclNTUiA9IGNyZWF0ZUluamVjdG9yO1xuICAgICAgICBjcmVhdGVJbmplY3RvciA9IGlzU2hhZG93TW9kZTtcbiAgICAgICAgaXNTaGFkb3dNb2RlID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgICBjb25zdCBvcHRpb25zID0gdHlwZW9mIGRlZmF1bHRFeHBvcnQgPT09ICdmdW5jdGlvbicgPyBkZWZhdWx0RXhwb3J0Lm9wdGlvbnMgOiBkZWZhdWx0RXhwb3J0O1xuICAgIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgICBpZiAoY29tcGlsZWRUZW1wbGF0ZSAmJiBjb21waWxlZFRlbXBsYXRlLnJlbmRlcikge1xuICAgICAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyO1xuICAgICAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zO1xuICAgICAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWU7XG4gICAgICAgIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgICAgICAgaWYgKGlzRnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNjb3BlZElkXG4gICAgaWYgKHNjb3BlSWQpIHtcbiAgICAgICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWQ7XG4gICAgfVxuICAgIGxldCBob29rO1xuICAgIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7XG4gICAgICAgIC8vIHNlcnZlciBidWlsZFxuICAgICAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgICAgICAgIGNvbnRleHQgPVxuICAgICAgICAgICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpOyAvLyBmdW5jdGlvbmFsXG4gICAgICAgICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgICAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfXztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICAgICAgICBpZiAoaW5qZWN0U3R5bGUpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yU1NSKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJlbmNlXG4gICAgICAgICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAgICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICAgICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmplY3RTdHlsZSkge1xuICAgICAgICBob29rID0gaXNTaGFkb3dNb2RlXG4gICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yU2hhZG93KHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGluamVjdFN0eWxlLmNhbGwodGhpcywgY3JlYXRlSW5qZWN0b3IoY29udGV4dCkpO1xuICAgICAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGhvb2spIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyO1xuICAgICAgICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24oaCwgY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGhvb2suY2FsbChjb250ZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGU7XG4gICAgICAgICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKSA6IFtob29rXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdEV4cG9ydDtcbn1cbiIsIjx0ZW1wbGF0ZT5cclxuICA8Y3VzdG9tLWxpbmtcclxuICAgIDpjbGFzcz1cImNsYXNzZXNcIlxyXG4gICAgOnN0eWxlPVwic3R5bGVzXCJcclxuICAgIDpsaW5rPVwibGlua1wiXHJcbiAgICBjbGFzcz1cIm1kYy10YWJcIlxyXG4gICAgQGNsaWNrPVwiaGFuZGxlQ2xpY2tcIlxyXG4gICAgcm9sZT1cInRhYlwiXHJcbiAgICBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIlxyXG4gICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgPlxyXG4gICAgPHNwYW4gcmVmPVwiY29udGVudFwiIGNsYXNzPVwibWRjLXRhYl9fY29udGVudFwiPlxyXG4gICAgICA8aVxyXG4gICAgICAgIHYtaWY9XCIhIWhhc0ljb25cIlxyXG4gICAgICAgIHJlZj1cImljb25cIlxyXG4gICAgICAgIDpjbGFzcz1cImhhc0ljb24uY2xhc3Nlc1wiXHJcbiAgICAgICAgdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICBjbGFzcz1cIm1kYy10YWJfX2ljb25cIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8c2xvdCBuYW1lPVwiaWNvblwiPnt7IGhhc0ljb24uY29udGVudCB9fTwvc2xvdD5cclxuICAgICAgPC9pPlxyXG5cclxuICAgICAgPHNwYW4gdi1pZj1cImhhc1RleHRcIiBjbGFzcz1cIm1kYy10YWJfX3RleHQtbGFiZWxcIj4gPHNsb3QgLz4gPC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG5cclxuICAgIDxtZGMtdGFiLWluZGljYXRvciByZWY9XCJ0YWJJbmRpY2F0b3JcIj48L21kYy10YWItaW5kaWNhdG9yPlxyXG4gICAgPG1kYy10YWItcmlwcGxlPjwvbWRjLXRhYi1yaXBwbGU+XHJcbiAgPC9jdXN0b20tbGluaz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBNRENUYWJGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC90YWIvZm91bmRhdGlvbidcclxuaW1wb3J0IHtcclxuICBDdXN0b21MaW5rTWl4aW4sXHJcbiAgRGlzcGF0Y2hFdmVudE1peGluLFxyXG4gIGVtaXRDdXN0b21FdmVudCxcclxuICBleHRyYWN0SWNvblByb3AsXHJcbiAgVk1BVW5pcXVlSWRNaXhpblxyXG59IGZyb20gJy4uL2Jhc2UnXHJcbmltcG9ydCB7IFJpcHBsZUJhc2UgfSBmcm9tICcuLi9yaXBwbGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ21kYy10YWInLFxyXG4gIG1peGluczogW0N1c3RvbUxpbmtNaXhpbiwgRGlzcGF0Y2hFdmVudE1peGluLCBWTUFVbmlxdWVJZE1peGluXSxcclxuICBwcm9wczoge1xyXG4gICAgYWN0aXZlOiBCb29sZWFuLFxyXG4gICAgaWNvbjogW1N0cmluZywgQXJyYXksIE9iamVjdF0sXHJcbiAgICBzdGFja2VkOiBCb29sZWFuLFxyXG4gICAgbWluV2lkdGg6IEJvb2xlYW5cclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjbGFzc2VzOiB7XHJcbiAgICAgICAgJ21kYy10YWItLXN0YWNrZWQnOiB0aGlzLnN0YWNrZWQsXHJcbiAgICAgICAgJ21kYy10YWItLW1pbi13aWR0aCc6IHRoaXMubWluV2lkdGhcclxuICAgICAgfSxcclxuICAgICAgc3R5bGVzOiB7fVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGluamVjdDogWydtZGNUYWJCYXInXSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgaGFzSWNvbigpIHtcclxuICAgICAgaWYgKHRoaXMuaWNvbiB8fCB0aGlzLiRzbG90cy5pY29uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWNvbiA/IGV4dHJhY3RJY29uUHJvcCh0aGlzLmljb24pIDoge31cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0sXHJcbiAgICBoYXNUZXh0KCkge1xyXG4gICAgICByZXR1cm4gISF0aGlzLiRzbG90cy5kZWZhdWx0XHJcbiAgICB9XHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgYWN0aXZlKHZhbHVlKSB7fVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMuaWQgPSB0aGlzLnZtYV91aWRfXHJcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDVGFiRm91bmRhdGlvbih7XHJcbiAgICAgIHNldEF0dHI6IChhdHRyLCB2YWx1ZSkgPT4gdGhpcy4kZWwuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKSxcclxuICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpLFxyXG4gICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGRlbGV0ZSh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSksXHJcbiAgICAgIGhhc0NsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXHJcbiAgICAgIGFjdGl2YXRlSW5kaWNhdG9yOiBwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QgPT4ge1xyXG4gICAgICAgIHRoaXMuJHJlZnMudGFiSW5kaWNhdG9yLmFjdGl2YXRlKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdClcclxuICAgICAgfSxcclxuICAgICAgZGVhY3RpdmF0ZUluZGljYXRvcjogKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuJHJlZnMudGFiSW5kaWNhdG9yLmRlYWN0aXZhdGUoKVxyXG4gICAgICB9LFxyXG4gICAgICBub3RpZnlJbnRlcmFjdGVkOiAoKSA9PlxyXG4gICAgICAgIGVtaXRDdXN0b21FdmVudChcclxuICAgICAgICAgIHRoaXMuJGVsLFxyXG4gICAgICAgICAgTURDVGFiRm91bmRhdGlvbi5zdHJpbmdzLklOVEVSQUNURURfRVZFTlQsXHJcbiAgICAgICAgICB7IHRhYklkOiB0aGlzLmlkIH0sXHJcbiAgICAgICAgICB0cnVlIC8qIGJ1YmJsZSAqL1xyXG4gICAgICAgICksXHJcbiAgICAgIGdldE9mZnNldExlZnQ6ICgpID0+IHRoaXMuJGVsLm9mZnNldExlZnQsXHJcbiAgICAgIGdldE9mZnNldFdpZHRoOiAoKSA9PiB0aGlzLiRlbC5vZmZzZXRXaWR0aCxcclxuICAgICAgZ2V0Q29udGVudE9mZnNldExlZnQ6ICgpID0+IHRoaXMuJHJlZnMuY29udGVudC5vZmZzZXRMZWZ0LFxyXG4gICAgICBnZXRDb250ZW50T2Zmc2V0V2lkdGg6ICgpID0+IHRoaXMuJHJlZnMuY29udGVudC5vZmZzZXRXaWR0aCxcclxuICAgICAgZm9jdXM6ICgpID0+IHRoaXMuJGVsLmZvY3VzKClcclxuICAgIH0pXHJcbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ3RhYiBtb3VudGVkJylcclxuXHJcbiAgICB0aGlzLm1kY1RhYkJhci50YWJMaXN0LnB1c2godGhpcylcclxuXHJcbiAgICAvLyB0aGlzLnNldEFjdGl2ZSh0aGlzLmFjdGl2ZSlcclxuICB9LFxyXG4gIGJlZm9yZURlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmZvdW5kYXRpb24uZGVzdHJveSgpXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhY3RpdmF0ZShjb21wdXRlSW5kaWNhdG9yQ2xpZW50UmVjdCkge1xyXG4gICAgICB0aGlzLmZvdW5kYXRpb24uYWN0aXZhdGUoY29tcHV0ZUluZGljYXRvckNsaWVudFJlY3QpXHJcbiAgICB9LFxyXG5cclxuICAgIGRlYWN0aXZhdGUoKSB7XHJcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5kZWFjdGl2YXRlKClcclxuICAgIH0sXHJcbiAgICBoYW5kbGVDbGljayhldnQpIHtcclxuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUNsaWNrKGV2dClcclxuICAgIH0sXHJcbiAgICBpc0FjdGl2ZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbi5pc0FjdGl2ZSgpXHJcbiAgICB9LFxyXG4gICAgc2V0QWN0aXZlKGlzQWN0aXZlKSB7XHJcbiAgICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsICdtZGMtdGFiLS1hY3RpdmUnLCB0cnVlKSxcclxuICAgICAgICAgIHRoaXMuJHJlZnMudGFiSW5kaWNhdG9yLmFjdGl2YXRlKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVJbmRpY2F0b3JDbGllbnRSZWN0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4kcmVmcy50YWJJbmRpY2F0b3IuY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KClcclxuICAgIH0sXHJcblxyXG4gICAgY29tcHV0ZURpbWVuc2lvbnMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb24uY29tcHV0ZURpbWVuc2lvbnMoKVxyXG4gICAgfSxcclxuXHJcbiAgICBmb2N1cygpIHtcclxuICAgICAgdGhpcy4kZWwuZm9jdXMoKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgVEFCX0FDVElWQVRFRF9FVkVOVDogJ01EQ1RhYkJhcjphY3RpdmF0ZWQnLFxuICBUQUJfU0NST0xMRVJfU0VMRUNUT1I6ICcubWRjLXRhYi1zY3JvbGxlcicsXG4gIFRBQl9TRUxFQ1RPUjogJy5tZGMtdGFiJyxcbiAgQVJST1dfTEVGVF9LRVk6ICdBcnJvd0xlZnQnLFxuICBBUlJPV19SSUdIVF9LRVk6ICdBcnJvd1JpZ2h0JyxcbiAgRU5EX0tFWTogJ0VuZCcsXG4gIEhPTUVfS0VZOiAnSG9tZScsXG4gIEVOVEVSX0tFWTogJ0VudGVyJyxcbiAgU1BBQ0VfS0VZOiAnU3BhY2UnLFxufTtcblxuLyoqIEBlbnVtIHtudW1iZXJ9ICovXG5jb25zdCBudW1iZXJzID0ge1xuICBFWFRSQV9TQ1JPTExfQU1PVU5UOiAyMCxcbiAgQVJST1dfTEVGVF9LRVlDT0RFOiAzNyxcbiAgQVJST1dfUklHSFRfS0VZQ09ERTogMzksXG4gIEVORF9LRVlDT0RFOiAzNSxcbiAgSE9NRV9LRVlDT0RFOiAzNixcbiAgRU5URVJfS0VZQ09ERTogMTMsXG4gIFNQQUNFX0tFWUNPREU6IDMyLFxufTtcblxuZXhwb3J0IHtcbiAgbnVtYmVycyxcbiAgc3RyaW5ncyxcbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1RhYkRpbWVuc2lvbnN9IGZyb20gJ0BtYXRlcmlhbC90YWIvYWRhcHRlcic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRhYiBCYXIuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGFiIEJhciBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDVGFiQmFyQWRhcHRlciB7XG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIHRoZSBnaXZlbiBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgcG9zaXRpb24gdG8gc2Nyb2xsIHRvXG4gICAqL1xuICBzY3JvbGxUbyhzY3JvbGxYKSB7fVxuXG4gIC8qKlxuICAgKiBJbmNyZW1lbnRzIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBieSB0aGUgZ2l2ZW4gYW1vdW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYSW5jcmVtZW50IFRoZSBhbW91bnQgdG8gaW5jcmVtZW50IHNjcm9sbFxuICAgKi9cbiAgaW5jcmVtZW50U2Nyb2xsKHNjcm9sbFhJbmNyZW1lbnQpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd2lkdGggb2YgdGhlIHNjcm9sbCBjb250ZW50XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbENvbnRlbnRXaWR0aCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJvb3QgZWxlbWVudCdzIG9mZnNldFdpZHRoXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldE9mZnNldFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyBpZiB0aGUgVGFiIEJhciBsYW5ndWFnZSBkaXJlY3Rpb24gaXMgUlRMXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc1JUTCgpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggdG8gYmUgYWN0aXZhdGVkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYiB0byBhY3RpdmF0ZVxuICAgKi9cbiAgc2V0QWN0aXZlVGFiKGluZGV4KSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggd2l0aCB0aGUgZ2l2ZW4gY2xpZW50IHJlY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiIHRvIGFjdGl2YXRlXG4gICAqIEBwYXJhbSB7IUNsaWVudFJlY3R9IGNsaWVudFJlY3QgVGhlIGNsaWVudCByZWN0IG9mIHRoZSBwcmV2aW91c2x5IGFjdGl2ZSBUYWIgSW5kaWNhdG9yXG4gICAqL1xuICBhY3RpdmF0ZVRhYkF0SW5kZXgoaW5kZXgsIGNsaWVudFJlY3QpIHt9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYiB0byBkZWFjdGl2YXRlXG4gICAqL1xuICBkZWFjdGl2YXRlVGFiQXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWIgdG8gZm9jdXNcbiAgICovXG4gIGZvY3VzVGFiQXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2xpZW50IHJlY3Qgb2YgdGhlIHRhYidzIGluZGljYXRvclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICogQHJldHVybiB7IUNsaWVudFJlY3R9XG4gICAqL1xuICBnZXRUYWJJbmRpY2F0b3JDbGllbnRSZWN0QXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGFiIGRpbWVuc2lvbnMgb2YgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiXG4gICAqIEByZXR1cm4geyFNRENUYWJEaW1lbnNpb25zfVxuICAgKi9cbiAgZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgoaW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgdGFiIGxpc3RcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0VGFiTGlzdExlbmd0aCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBwcmV2aW91c2x5IGFjdGl2ZSB0YWJcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0UHJldmlvdXNBY3RpdmVUYWJJbmRleCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmb2N1c2VkIHRhYlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRGb2N1c2VkVGFiSW5kZXgoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZ2l2ZW4gdGFiXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgSUQgb2YgdGhlIHRhYiB3aG9zZSBpbmRleCB0byBkZXRlcm1pbmVcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0SW5kZXhPZlRhYkJ5SWQoaWQpIHt9XG5cbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBNRENUYWJCYXI6YWN0aXZhdGVkIGV2ZW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGFjdGl2YXRlZCB0YWJcbiAgICovXG4gIG5vdGlmeVRhYkFjdGl2YXRlZChpbmRleCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGFiQmFyQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcblxuaW1wb3J0IHtzdHJpbmdzLCBudW1iZXJzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgTURDVGFiQmFyQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtNRENUYWJEaW1lbnNpb25zfSBmcm9tICdAbWF0ZXJpYWwvdGFiL2FkYXB0ZXInO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIEB0eXBlIHtTZXQ8c3RyaW5nPn1cbiAqL1xuY29uc3QgQUNDRVBUQUJMRV9LRVlTID0gbmV3IFNldCgpO1xuLy8gSUUxMSBoYXMgbm8gc3VwcG9ydCBmb3IgbmV3IFNldCB3aXRoIGl0ZXJhYmxlIHNvIHdlIG5lZWQgdG8gaW5pdGlhbGl6ZSB0aGlzIGJ5IGhhbmRcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5BUlJPV19MRUZUX0tFWSk7XG5BQ0NFUFRBQkxFX0tFWVMuYWRkKHN0cmluZ3MuQVJST1dfUklHSFRfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5FTkRfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5IT01FX0tFWSk7XG5BQ0NFUFRBQkxFX0tFWVMuYWRkKHN0cmluZ3MuRU5URVJfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5TUEFDRV9LRVkpO1xuXG4vKipcbiAqIEB0eXBlIHtNYXA8bnVtYmVyLCBzdHJpbmc+fVxuICovXG5jb25zdCBLRVlDT0RFX01BUCA9IG5ldyBNYXAoKTtcbi8vIElFMTEgaGFzIG5vIHN1cHBvcnQgZm9yIG5ldyBNYXAgd2l0aCBpdGVyYWJsZSBzbyB3ZSBuZWVkIHRvIGluaXRpYWxpemUgdGhpcyBieSBoYW5kXG5LRVlDT0RFX01BUC5zZXQobnVtYmVycy5BUlJPV19MRUZUX0tFWUNPREUsIHN0cmluZ3MuQVJST1dfTEVGVF9LRVkpO1xuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuQVJST1dfUklHSFRfS0VZQ09ERSwgc3RyaW5ncy5BUlJPV19SSUdIVF9LRVkpO1xuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuRU5EX0tFWUNPREUsIHN0cmluZ3MuRU5EX0tFWSk7XG5LRVlDT0RFX01BUC5zZXQobnVtYmVycy5IT01FX0tFWUNPREUsIHN0cmluZ3MuSE9NRV9LRVkpO1xuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuRU5URVJfS0VZQ09ERSwgc3RyaW5ncy5FTlRFUl9LRVkpO1xuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuU1BBQ0VfS0VZQ09ERSwgc3RyaW5ncy5TUEFDRV9LRVkpO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENUYWJCYXJBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUYWJCYXJGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7bnVtYmVyfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICAvKipcbiAgICogQHNlZSBNRENUYWJCYXJBZGFwdGVyIGZvciB0eXBpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7IU1EQ1RhYkJhckFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJCYXJBZGFwdGVyfSAqLyAoe1xuICAgICAgc2Nyb2xsVG86ICgpID0+IHt9LFxuICAgICAgaW5jcmVtZW50U2Nyb2xsOiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbFBvc2l0aW9uOiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbENvbnRlbnRXaWR0aDogKCkgPT4ge30sXG4gICAgICBnZXRPZmZzZXRXaWR0aDogKCkgPT4ge30sXG4gICAgICBpc1JUTDogKCkgPT4ge30sXG4gICAgICBzZXRBY3RpdmVUYWI6ICgpID0+IHt9LFxuICAgICAgYWN0aXZhdGVUYWJBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGRlYWN0aXZhdGVUYWJBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGZvY3VzVGFiQXRJbmRleDogKCkgPT4ge30sXG4gICAgICBnZXRUYWJJbmRpY2F0b3JDbGllbnRSZWN0QXRJbmRleDogKCkgPT4ge30sXG4gICAgICBnZXRUYWJEaW1lbnNpb25zQXRJbmRleDogKCkgPT4ge30sXG4gICAgICBnZXRQcmV2aW91c0FjdGl2ZVRhYkluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGdldEZvY3VzZWRUYWJJbmRleDogKCkgPT4ge30sXG4gICAgICBnZXRJbmRleE9mVGFiQnlJZDogKCkgPT4ge30sXG4gICAgICBnZXRUYWJMaXN0TGVuZ3RoOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeVRhYkFjdGl2YXRlZDogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDVGFiQmFyQWRhcHRlcn0gYWRhcHRlclxuICAgKiAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENUYWJCYXJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51c2VBdXRvbWF0aWNBY3RpdmF0aW9uXyA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFN3aXRjaGVzIGJldHdlZW4gYXV0b21hdGljIGFuZCBtYW51YWwgYWN0aXZhdGlvbiBtb2Rlcy5cbiAgICogU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMvI3RhYnBhbmVsIGZvciBleGFtcGxlcy5cbiAgICogQHBhcmFtIHtib29sZWFufSB1c2VBdXRvbWF0aWNBY3RpdmF0aW9uXG4gICAqL1xuICBzZXRVc2VBdXRvbWF0aWNBY3RpdmF0aW9uKHVzZUF1dG9tYXRpY0FjdGl2YXRpb24pIHtcbiAgICB0aGlzLnVzZUF1dG9tYXRpY0FjdGl2YXRpb25fID0gdXNlQXV0b21hdGljQWN0aXZhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqL1xuICBhY3RpdmF0ZVRhYihpbmRleCkge1xuICAgIGNvbnN0IHByZXZpb3VzQWN0aXZlSW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldFByZXZpb3VzQWN0aXZlVGFiSW5kZXgoKTtcbiAgICBpZiAoIXRoaXMuaW5kZXhJc0luUmFuZ2VfKGluZGV4KSB8fCBpbmRleCA9PT0gcHJldmlvdXNBY3RpdmVJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8uZGVhY3RpdmF0ZVRhYkF0SW5kZXgocHJldmlvdXNBY3RpdmVJbmRleCk7XG4gICAgdGhpcy5hZGFwdGVyXy5hY3RpdmF0ZVRhYkF0SW5kZXgoaW5kZXgsIHRoaXMuYWRhcHRlcl8uZ2V0VGFiSW5kaWNhdG9yQ2xpZW50UmVjdEF0SW5kZXgocHJldmlvdXNBY3RpdmVJbmRleCkpO1xuICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoaW5kZXgpO1xuXG4gICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlUYWJBY3RpdmF0ZWQoaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIGtleWRvd24gZXZlbnRcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlS2V5RG93bihldnQpIHtcbiAgICAvLyBHZXQgdGhlIGtleSBmcm9tIHRoZSBldmVudFxuICAgIGNvbnN0IGtleSA9IHRoaXMuZ2V0S2V5RnJvbUV2ZW50XyhldnQpO1xuXG4gICAgLy8gRWFybHkgZXhpdCBpZiB0aGUgZXZlbnQga2V5IGlzbid0IG9uZSBvZiB0aGUga2V5Ym9hcmQgbmF2aWdhdGlvbiBrZXlzXG4gICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUHJldmVudCBkZWZhdWx0IGJlaGF2aW9yIGZvciBtb3ZlbWVudCBrZXlzLCBidXQgbm90IGZvciBhY3RpdmF0aW9uIGtleXMsIHNpbmNlIDphY3RpdmUgaXMgdXNlZCB0byBhcHBseSByaXBwbGVcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmF0aW9uS2V5XyhrZXkpKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51c2VBdXRvbWF0aWNBY3RpdmF0aW9uXykge1xuICAgICAgaWYgKHRoaXMuaXNBY3RpdmF0aW9uS2V5XyhrZXkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRldGVybWluZVRhcmdldEZyb21LZXlfKHRoaXMuYWRhcHRlcl8uZ2V0UHJldmlvdXNBY3RpdmVUYWJJbmRleCgpLCBrZXkpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBY3RpdmVUYWIoaW5kZXgpO1xuICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldyhpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZvY3VzZWRUYWJJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0Rm9jdXNlZFRhYkluZGV4KCk7XG4gICAgICBpZiAodGhpcy5pc0FjdGl2YXRpb25LZXlfKGtleSkpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBY3RpdmVUYWIoZm9jdXNlZFRhYkluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kZXRlcm1pbmVUYXJnZXRGcm9tS2V5Xyhmb2N1c2VkVGFiSW5kZXgsIGtleSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNUYWJBdEluZGV4KGluZGV4KTtcbiAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldyhpbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIE1EQ1RhYjppbnRlcmFjdGVkIGV2ZW50XG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZVRhYkludGVyYWN0aW9uKGV2dCkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QWN0aXZlVGFiKHRoaXMuYWRhcHRlcl8uZ2V0SW5kZXhPZlRhYkJ5SWQoZXZ0LmRldGFpbC50YWJJZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbHMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggaW50byB2aWV3XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgdGFiIGluZGV4IHRvIG1ha2UgdmlzaWJsZVxuICAgKi9cbiAgc2Nyb2xsSW50b1ZpZXcoaW5kZXgpIHtcbiAgICAvLyBFYXJseSBleGl0IGlmIHRoZSBpbmRleCBpcyBvdXQgb2YgcmFuZ2VcbiAgICBpZiAoIXRoaXMuaW5kZXhJc0luUmFuZ2VfKGluZGV4KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEFsd2F5cyBzY3JvbGwgdG8gMCBpZiBzY3JvbGxpbmcgdG8gdGhlIDB0aCBpbmRleFxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uc2Nyb2xsVG8oMCk7XG4gICAgfVxuXG4gICAgLy8gQWx3YXlzIHNjcm9sbCB0byB0aGUgbWF4IHZhbHVlIGlmIHNjcm9sbGluZyB0byB0aGUgTnRoIGluZGV4XG4gICAgLy8gTURDVGFiU2Nyb2xsZXIuc2Nyb2xsVG8oKSB3aWxsIG5ldmVyIHNjcm9sbCBwYXN0IHRoZSBtYXggcG9zc2libGUgdmFsdWVcbiAgICBpZiAoaW5kZXggPT09IHRoaXMuYWRhcHRlcl8uZ2V0VGFiTGlzdExlbmd0aCgpIC0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uc2Nyb2xsVG8odGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50V2lkdGgoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNSVExfKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbEludG9WaWV3UlRMXyhpbmRleCk7XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGxJbnRvVmlld18oaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgbWV0aG9kIGZvciBkZXRlcm1pbmluZyB0aGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHRhYiBiYXNlZCBvbiB3aGF0IGtleSB3YXMgcHJlc3NlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gb3JpZ2luIFRoZSBvcmlnaW5hbCBpbmRleCBmcm9tIHdoaWNoIHRvIGRldGVybWluZSB0aGUgZGVzdGluYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgbmFtZSBvZiB0aGUga2V5XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRldGVybWluZVRhcmdldEZyb21LZXlfKG9yaWdpbiwga2V5KSB7XG4gICAgY29uc3QgaXNSVEwgPSB0aGlzLmlzUlRMXygpO1xuICAgIGNvbnN0IG1heEluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRUYWJMaXN0TGVuZ3RoKCkgLSAxO1xuICAgIGNvbnN0IHNob3VsZEdvVG9FbmQgPSBrZXkgPT09IHN0cmluZ3MuRU5EX0tFWTtcbiAgICBjb25zdCBzaG91bGREZWNyZW1lbnQgPSBrZXkgPT09IHN0cmluZ3MuQVJST1dfTEVGVF9LRVkgJiYgIWlzUlRMIHx8IGtleSA9PT0gc3RyaW5ncy5BUlJPV19SSUdIVF9LRVkgJiYgaXNSVEw7XG4gICAgY29uc3Qgc2hvdWxkSW5jcmVtZW50ID0ga2V5ID09PSBzdHJpbmdzLkFSUk9XX1JJR0hUX0tFWSAmJiAhaXNSVEwgfHwga2V5ID09PSBzdHJpbmdzLkFSUk9XX0xFRlRfS0VZICYmIGlzUlRMO1xuICAgIGxldCBpbmRleCA9IG9yaWdpbjtcblxuICAgIGlmIChzaG91bGRHb1RvRW5kKSB7XG4gICAgICBpbmRleCA9IG1heEluZGV4O1xuICAgIH0gZWxzZSBpZiAoc2hvdWxkRGVjcmVtZW50KSB7XG4gICAgICBpbmRleCAtPSAxO1xuICAgIH0gZWxzZSBpZiAoc2hvdWxkSW5jcmVtZW50KSB7XG4gICAgICBpbmRleCArPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaW5kZXggPSBtYXhJbmRleDtcbiAgICB9IGVsc2UgaWYgKGluZGV4ID4gbWF4SW5kZXgpIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgc2Nyb2xsIGluY3JlbWVudCB0aGF0IHdpbGwgbWFrZSB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCB2aXNpYmxlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYlxuICAgKiBAcGFyYW0ge251bWJlcn0gbmV4dEluZGV4IFRoZSBpbmRleCBvZiB0aGUgbmV4dCB0YWJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFBvc2l0aW9uIFRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gYmFyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSBUYWIgQmFyXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhbGN1bGF0ZVNjcm9sbEluY3JlbWVudF8oaW5kZXgsIG5leHRJbmRleCwgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoKSB7XG4gICAgY29uc3QgbmV4dFRhYkRpbWVuc2lvbnMgPSB0aGlzLmFkYXB0ZXJfLmdldFRhYkRpbWVuc2lvbnNBdEluZGV4KG5leHRJbmRleCk7XG4gICAgY29uc3QgcmVsYXRpdmVDb250ZW50TGVmdCA9IG5leHRUYWJEaW1lbnNpb25zLmNvbnRlbnRMZWZ0IC0gc2Nyb2xsUG9zaXRpb24gLSBiYXJXaWR0aDtcbiAgICBjb25zdCByZWxhdGl2ZUNvbnRlbnRSaWdodCA9IG5leHRUYWJEaW1lbnNpb25zLmNvbnRlbnRSaWdodCAtIHNjcm9sbFBvc2l0aW9uO1xuICAgIGNvbnN0IGxlZnRJbmNyZW1lbnQgPSByZWxhdGl2ZUNvbnRlbnRSaWdodCAtIG51bWJlcnMuRVhUUkFfU0NST0xMX0FNT1VOVDtcbiAgICBjb25zdCByaWdodEluY3JlbWVudCA9IHJlbGF0aXZlQ29udGVudExlZnQgKyBudW1iZXJzLkVYVFJBX1NDUk9MTF9BTU9VTlQ7XG5cbiAgICBpZiAobmV4dEluZGV4IDwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbihsZWZ0SW5jcmVtZW50LCAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5tYXgocmlnaHRJbmNyZW1lbnQsIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIHNjcm9sbCBpbmNyZW1lbnQgdGhhdCB3aWxsIG1ha2UgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggdmlzaWJsZSBpbiBSVExcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZXh0SW5kZXggVGhlIGluZGV4IG9mIHRoZSBuZXh0IHRhYlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsUG9zaXRpb24gVGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBiYXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIFRhYiBCYXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbENvbnRlbnRXaWR0aCBUaGUgd2lkdGggb2YgdGhlIHNjcm9sbCBjb250ZW50XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhbGN1bGF0ZVNjcm9sbEluY3JlbWVudFJUTF8oaW5kZXgsIG5leHRJbmRleCwgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoLCBzY3JvbGxDb250ZW50V2lkdGgpIHtcbiAgICBjb25zdCBuZXh0VGFiRGltZW5zaW9ucyA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgobmV4dEluZGV4KTtcbiAgICBjb25zdCByZWxhdGl2ZUNvbnRlbnRMZWZ0ID0gc2Nyb2xsQ29udGVudFdpZHRoIC0gbmV4dFRhYkRpbWVuc2lvbnMuY29udGVudExlZnQgLSBzY3JvbGxQb3NpdGlvbjtcbiAgICBjb25zdCByZWxhdGl2ZUNvbnRlbnRSaWdodCA9IHNjcm9sbENvbnRlbnRXaWR0aCAtIG5leHRUYWJEaW1lbnNpb25zLmNvbnRlbnRSaWdodCAtIHNjcm9sbFBvc2l0aW9uIC0gYmFyV2lkdGg7XG4gICAgY29uc3QgbGVmdEluY3JlbWVudCA9IHJlbGF0aXZlQ29udGVudFJpZ2h0ICsgbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuICAgIGNvbnN0IHJpZ2h0SW5jcmVtZW50ID0gcmVsYXRpdmVDb250ZW50TGVmdCAtIG51bWJlcnMuRVhUUkFfU0NST0xMX0FNT1VOVDtcblxuICAgIGlmIChuZXh0SW5kZXggPiBpbmRleCkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KGxlZnRJbmNyZW1lbnQsIDApO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLm1pbihyaWdodEluY3JlbWVudCwgMCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgaW5kZXggb2YgdGhlIGFkamFjZW50IHRhYiBjbG9zZXN0IHRvIGVpdGhlciBlZGdlIG9mIHRoZSBUYWIgQmFyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYlxuICAgKiBAcGFyYW0geyFNRENUYWJEaW1lbnNpb25zfSB0YWJEaW1lbnNpb25zIFRoZSBkaW1lbnNpb25zIG9mIHRoZSB0YWJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFBvc2l0aW9uIFRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gYmFyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSB0YWIgYmFyXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZpbmRBZGphY2VudFRhYkluZGV4Q2xvc2VzdFRvRWRnZV8oaW5kZXgsIHRhYkRpbWVuc2lvbnMsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCkge1xuICAgIC8qKlxuICAgICAqIFRhYnMgYXJlIGxhaWQgb3V0IGluIHRoZSBUYWIgU2Nyb2xsZXIgbGlrZSB0aGlzOlxuICAgICAqXG4gICAgICogICAgU2Nyb2xsIFBvc2l0aW9uXG4gICAgICogICAgKy0tLStcbiAgICAgKiAgICB8ICAgfCAgIEJhciBXaWR0aFxuICAgICAqICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICogICAgfCAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAgKiAgICB8ICAgViAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVlxuICAgICAqICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICogICAgViAgIHwgICAgICAgICAgICAgVGFiIFNjcm9sbGVyICAgICAgICAgIHxcbiAgICAgKiAgICArLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICogICAgfCAgICBUYWIgICAgIHwgICAgICBUYWIgICAgIHwgICAgICAgIFRhYiAgICAgICAgfFxuICAgICAqICAgICstLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAgKiAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgICAqICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICpcbiAgICAgKiBUbyBkZXRlcm1pbmUgdGhlIG5leHQgYWRqYWNlbnQgaW5kZXgsIHdlIGxvb2sgYXQgdGhlIFRhYiByb290IGxlZnQgYW5kXG4gICAgICogVGFiIHJvb3QgcmlnaHQsIGJvdGggcmVsYXRpdmUgdG8gdGhlIHNjcm9sbCBwb3NpdGlvbi4gSWYgdGhlIFRhYiByb290XG4gICAgICogbGVmdCBpcyBsZXNzIHRoYW4gMCwgdGhlbiB3ZSBrbm93IGl0J3Mgb3V0IG9mIHZpZXcgdG8gdGhlIGxlZnQuIElmIHRoZVxuICAgICAqIFRhYiByb290IHJpZ2h0IG1pbnVzIHRoZSBiYXIgd2lkdGggaXMgZ3JlYXRlciB0aGFuIDAsIHdlIGtub3cgdGhlIFRhYiBpc1xuICAgICAqIG91dCBvZiB2aWV3IHRvIHRoZSByaWdodC4gRnJvbSB0aGVyZSwgd2UgZWl0aGVyIGluY3JlbWVudCBvciBkZWNyZW1lbnRcbiAgICAgKiB0aGUgaW5kZXguXG4gICAgICovXG4gICAgY29uc3QgcmVsYXRpdmVSb290TGVmdCA9IHRhYkRpbWVuc2lvbnMucm9vdExlZnQgLSBzY3JvbGxQb3NpdGlvbjtcbiAgICBjb25zdCByZWxhdGl2ZVJvb3RSaWdodCA9IHRhYkRpbWVuc2lvbnMucm9vdFJpZ2h0IC0gc2Nyb2xsUG9zaXRpb24gLSBiYXJXaWR0aDtcbiAgICBjb25zdCByZWxhdGl2ZVJvb3REZWx0YSA9IHJlbGF0aXZlUm9vdExlZnQgKyByZWxhdGl2ZVJvb3RSaWdodDtcbiAgICBjb25zdCBsZWZ0RWRnZUlzQ2xvc2VyID0gcmVsYXRpdmVSb290TGVmdCA8IDAgfHwgcmVsYXRpdmVSb290RGVsdGEgPCAwO1xuICAgIGNvbnN0IHJpZ2h0RWRnZUlzQ2xvc2VyID0gcmVsYXRpdmVSb290UmlnaHQgPiAwIHx8IHJlbGF0aXZlUm9vdERlbHRhID4gMDtcblxuICAgIGlmIChsZWZ0RWRnZUlzQ2xvc2VyKSB7XG4gICAgICByZXR1cm4gaW5kZXggLSAxO1xuICAgIH1cblxuICAgIGlmIChyaWdodEVkZ2VJc0Nsb3Nlcikge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgaW5kZXggb2YgdGhlIGFkamFjZW50IHRhYiBjbG9zZXN0IHRvIGVpdGhlciBlZGdlIG9mIHRoZSBUYWIgQmFyIGluIFJUTFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICogQHBhcmFtIHshTURDVGFiRGltZW5zaW9uc30gdGFiRGltZW5zaW9ucyBUaGUgZGltZW5zaW9ucyBvZiB0aGUgdGFiXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxQb3NpdGlvbiBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGJhcldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgdGFiIGJhclxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsQ29udGVudFdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsZXIgY29udGVudFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmaW5kQWRqYWNlbnRUYWJJbmRleENsb3Nlc3RUb0VkZ2VSVExfKGluZGV4LCB0YWJEaW1lbnNpb25zLCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgsIHNjcm9sbENvbnRlbnRXaWR0aCkge1xuICAgIGNvbnN0IHJvb3RMZWZ0ID0gc2Nyb2xsQ29udGVudFdpZHRoIC0gdGFiRGltZW5zaW9ucy5yb290TGVmdCAtIGJhcldpZHRoIC0gc2Nyb2xsUG9zaXRpb247XG4gICAgY29uc3Qgcm9vdFJpZ2h0ID0gc2Nyb2xsQ29udGVudFdpZHRoIC0gdGFiRGltZW5zaW9ucy5yb290UmlnaHQgLSBzY3JvbGxQb3NpdGlvbjtcbiAgICBjb25zdCByb290RGVsdGEgPSByb290TGVmdCArIHJvb3RSaWdodDtcbiAgICBjb25zdCBsZWZ0RWRnZUlzQ2xvc2VyID0gcm9vdExlZnQgPiAwIHx8IHJvb3REZWx0YSA+IDA7XG4gICAgY29uc3QgcmlnaHRFZGdlSXNDbG9zZXIgPSByb290UmlnaHQgPCAwIHx8IHJvb3REZWx0YSA8IDA7XG5cbiAgICBpZiAobGVmdEVkZ2VJc0Nsb3Nlcikge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRFZGdlSXNDbG9zZXIpIHtcbiAgICAgIHJldHVybiBpbmRleCAtIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGtleSBhc3NvY2lhdGVkIHdpdGggYSBrZXlkb3duIGV2ZW50XG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnQgVGhlIGtleWRvd24gZXZlbnRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0S2V5RnJvbUV2ZW50XyhldnQpIHtcbiAgICBpZiAoQUNDRVBUQUJMRV9LRVlTLmhhcyhldnQua2V5KSkge1xuICAgICAgcmV0dXJuIGV2dC5rZXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEtFWUNPREVfTUFQLmdldChldnQua2V5Q29kZSk7XG4gIH1cblxuICBpc0FjdGl2YXRpb25LZXlfKGtleSkge1xuICAgIHJldHVybiBrZXkgPT09IHN0cmluZ3MuU1BBQ0VfS0VZIHx8IGtleSA9PT0gc3RyaW5ncy5FTlRFUl9LRVk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIGEgZ2l2ZW4gaW5kZXggaXMgaW5jbHVzaXZlbHkgYmV0d2VlbiB0aGUgZW5kc1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHRvIHRlc3RcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluZGV4SXNJblJhbmdlXyhpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5hZGFwdGVyXy5nZXRUYWJMaXN0TGVuZ3RoKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmlldydzIFJUTCBwcm9wZXJ0eVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNSVExfKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmlzUlRMKCk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCBpbnRvIHZpZXcgZm9yIGxlZnQtdG8tcmlnaHQgdXNlcmFnZW50c1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWIgdG8gc2Nyb2xsIGludG8gdmlld1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2Nyb2xsSW50b1ZpZXdfKGluZGV4KSB7XG4gICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgY29uc3QgYmFyV2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3QgdGFiRGltZW5zaW9ucyA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgoaW5kZXgpO1xuICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuZmluZEFkamFjZW50VGFiSW5kZXhDbG9zZXN0VG9FZGdlXyhpbmRleCwgdGFiRGltZW5zaW9ucywgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoKTtcblxuICAgIGlmICghdGhpcy5pbmRleElzSW5SYW5nZV8obmV4dEluZGV4KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbEluY3JlbWVudCA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsSW5jcmVtZW50XyhpbmRleCwgbmV4dEluZGV4LCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgpO1xuICAgIHRoaXMuYWRhcHRlcl8uaW5jcmVtZW50U2Nyb2xsKHNjcm9sbEluY3JlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCBpbnRvIHZpZXcgaW4gUlRMXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgdGFiIGluZGV4IHRvIG1ha2UgdmlzaWJsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2Nyb2xsSW50b1ZpZXdSVExfKGluZGV4KSB7XG4gICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgY29uc3QgYmFyV2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3QgdGFiRGltZW5zaW9ucyA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgoaW5kZXgpO1xuICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50V2lkdGgoKTtcbiAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLmZpbmRBZGphY2VudFRhYkluZGV4Q2xvc2VzdFRvRWRnZVJUTF8oXG4gICAgICBpbmRleCwgdGFiRGltZW5zaW9ucywgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoLCBzY3JvbGxXaWR0aCk7XG5cbiAgICBpZiAoIXRoaXMuaW5kZXhJc0luUmFuZ2VfKG5leHRJbmRleCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxJbmNyZW1lbnQgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEluY3JlbWVudFJUTF8oaW5kZXgsIG5leHRJbmRleCwgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoLCBzY3JvbGxXaWR0aCk7XG4gICAgdGhpcy5hZGFwdGVyXy5pbmNyZW1lbnRTY3JvbGwoc2Nyb2xsSW5jcmVtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJCYXJGb3VuZGF0aW9uO1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IDpjbGFzcz1cImNsYXNzZXNcIiBjbGFzcz1cIm1kYy10YWItYmFyXCIgdi1vbj1cImxpc3RlbmVyc1wiIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgPG1kYy10YWItc2Nyb2xsZXIgcmVmPVwic2Nyb2xsZXJcIj4gPHNsb3Q+PC9zbG90PiA8L21kYy10YWItc2Nyb2xsZXI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENUYWJCYXJGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC90YWItYmFyL2ZvdW5kYXRpb24nXG5pbXBvcnQgeyBlbWl0Q3VzdG9tRXZlbnQgfSBmcm9tICcuLi9iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtdGFiLWJhcicsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgaW5kaWNhdG9yU3R5bGVzOiB7fSxcbiAgICAgIHRhYkxpc3Q6IFtdXG4gICAgfVxuICB9LFxuICBwcm9wczogeyBhY3RpdmVUYWJJbmRleDogW051bWJlciwgU3RyaW5nXSB9LFxuICBwcm92aWRlKCkge1xuICAgIHJldHVybiB7IG1kY1RhYkJhcjogdGhpcyB9XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDVGFiQmFyRm91bmRhdGlvbih7XG4gICAgICBzY3JvbGxUbzogc2Nyb2xsWCA9PiB0aGlzLiRyZWZzLnNjcm9sbGVyLnNjcm9sbFRvKHNjcm9sbFgpLFxuICAgICAgaW5jcmVtZW50U2Nyb2xsOiBzY3JvbGxYSW5jcmVtZW50ID0+XG4gICAgICAgIHRoaXMuJHJlZnMuc2Nyb2xsZXIuaW5jcmVtZW50U2Nyb2xsKHNjcm9sbFhJbmNyZW1lbnQpLFxuICAgICAgZ2V0U2Nyb2xsUG9zaXRpb246ICgpID0+IHRoaXMuJHJlZnMuc2Nyb2xsZXIuZ2V0U2Nyb2xsUG9zaXRpb24oKSxcbiAgICAgIGdldFNjcm9sbENvbnRlbnRXaWR0aDogKCkgPT4gdGhpcy4kcmVmcy5zY3JvbGxlci5nZXRTY3JvbGxDb250ZW50V2lkdGgoKSxcbiAgICAgIGdldE9mZnNldFdpZHRoOiAoKSA9PiB0aGlzLiRlbC5vZmZzZXRXaWR0aCxcbiAgICAgIGlzUlRMOiAoKSA9PlxuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiRlbCkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgPT09XG4gICAgICAgICdydGwnLFxuICAgICAgc2V0QWN0aXZlVGFiOiBpbmRleCA9PiB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5hY3RpdmF0ZVRhYihpbmRleClcbiAgICAgIH0sXG4gICAgICBhY3RpdmF0ZVRhYkF0SW5kZXg6IChpbmRleCwgY2xpZW50UmVjdCkgPT4ge1xuICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLmFjdGl2YXRlKGNsaWVudFJlY3QpXG4gICAgICB9LFxuICAgICAgZGVhY3RpdmF0ZVRhYkF0SW5kZXg6IGluZGV4ID0+IHtcbiAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XSAmJiB0aGlzLnRhYkxpc3RbaW5kZXhdLmRlYWN0aXZhdGUoKVxuICAgICAgfSxcbiAgICAgIGZvY3VzVGFiQXRJbmRleDogaW5kZXggPT4gdGhpcy50YWJMaXN0W2luZGV4XS5mb2N1cygpLFxuICAgICAgZ2V0VGFiSW5kaWNhdG9yQ2xpZW50UmVjdEF0SW5kZXg6IGluZGV4ID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdICYmXG4gICAgICAgICAgdGhpcy50YWJMaXN0W2luZGV4XS5jb21wdXRlSW5kaWNhdG9yQ2xpZW50UmVjdCgpXG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICBnZXRUYWJEaW1lbnNpb25zQXRJbmRleDogaW5kZXggPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy50YWJMaXN0W2luZGV4XS5jb21wdXRlRGltZW5zaW9ucygpXG4gICAgICB9LFxuICAgICAgZ2V0UHJldmlvdXNBY3RpdmVUYWJJbmRleDogKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLnRhYkxpc3RbaV0uaXNBY3RpdmUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9LFxuICAgICAgZ2V0Rm9jdXNlZFRhYkluZGV4OiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYkVsZW1lbnRzID0gdGhpcy5nZXRUYWJFbGVtZW50c18oKVxuICAgICAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgICByZXR1cm4gdGFiRWxlbWVudHMuaW5kZXhPZihhY3RpdmVFbGVtZW50KVxuICAgICAgfSxcbiAgICAgIGdldEluZGV4T2ZUYWJCeUlkOiBpZCA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMudGFiTGlzdFtpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfSxcbiAgICAgIGdldFRhYkxpc3RMZW5ndGg6ICgpID0+IHRoaXMudGFiTGlzdC5sZW5ndGgsXG4gICAgICBub3RpZnlUYWJBY3RpdmF0ZWQ6IGluZGV4ID0+IHtcbiAgICAgICAgZW1pdEN1c3RvbUV2ZW50KFxuICAgICAgICAgIHRoaXMuJGVsLFxuICAgICAgICAgIE1EQ1RhYkJhckZvdW5kYXRpb24uc3RyaW5ncy5UQUJfQUNUSVZBVEVEX0VWRU5ULFxuICAgICAgICAgIHsgaW5kZXggfSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgIClcblxuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcbiAgICAvLyBlbnN1cmUgYWN0aXZlIHRhYlxuICAgIHRoaXMuZm91bmRhdGlvbi5hY3RpdmF0ZVRhYih0aGlzLmFjdGl2ZVRhYkluZGV4IHx8IDApXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpc3RlbmVycygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMuJGxpc3RlbmVycyxcbiAgICAgICAgJ01EQ1RhYjppbnRlcmFjdGVkJzogZXZlbnQgPT4gdGhpcy5oYW5kbGVJbnRlcmFjdGlvbihldmVudCksXG4gICAgICAgIGtleWRvd246IGV2ZW50ID0+IHRoaXMuaGFuZGxlS2V5RG93bihldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVJbnRlcmFjdGlvbihldnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVUYWJJbnRlcmFjdGlvbihldnQpXG4gICAgfSxcblxuICAgIGhhbmRsZUtleURvd24oZXZ0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlS2V5RG93bihldnQpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIEFOSU1BVElORzogJ21kYy10YWItc2Nyb2xsZXItLWFuaW1hdGluZycsXG4gIFNDUk9MTF9URVNUOiAnbWRjLXRhYi1zY3JvbGxlcl9fdGVzdCcsXG4gIFNDUk9MTF9BUkVBX1NDUk9MTDogJ21kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhLS1zY3JvbGwnLFxufTtcblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBzdHJpbmdzID0ge1xuICBBUkVBX1NFTEVDVE9SOiAnLm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhJyxcbiAgQ09OVEVOVF9TRUxFQ1RPUjogJy5tZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtY29udGVudCcsXG59O1xuXG5leHBvcnQge1xuICBjc3NDbGFzc2VzLFxuICBzdHJpbmdzLFxufTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBNRENUYWJTY3JvbGxlckFuaW1hdGlvbiBjb250YWlucyB0aGUgdmFsdWVzIHJlcXVpcmVkIGZvciBhbmltYXRpbmcgZnJvbSB0aGVcbiAqIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHRvIHRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uLiBUaGUgXCJmaW5hbFNjcm9sbFBvc2l0aW9uXCJcbiAqIHZhbHVlIHJlcHJlc2VudHMgdGhlIG5ldyBzY3JvbGwgcG9zaXRpb24gd2hpbGUgdGhlIFwic2Nyb2xsRGVsdGFcIiB2YWx1ZSBpcyB0aGVcbiAqIGNvcnJlc3BvbmRpbmcgdHJhbnNmb3JtYXRpb24gdGhhdCBpcyBhcHBsaWVkIHRvIHRoZSBzY3JvbGwgY29udGVudC4gVG9nZXRoZXIsXG4gKiB0aGV5IGNyZWF0ZSB0aGUgYW5pbWF0aW9uIGJ5IGZpcnN0IHVwZGF0aW5nIHRoZSBzY3JvbGwgdmFsdWUgdGhlbiBhcHBseWluZ1xuICogdGhlIHRyYW5zZm9ybWF0aW9uIGFuZCBhbmltYXRpbmcgdGhlIHRyYW5zaXRpb24uIEJvdGggcGllY2VzIGFyZSBuZWNlc3NhcnlcbiAqIGZvciB0aGUgc2Nyb2xsIGFuaW1hdGlvbiB0byB3b3JrLiBUaGUgdmFsdWVzIGFyZSB1c2VkIGFzLWlzIGJ5IHRoZSB0YWJcbiAqIHNjcm9sbGVyIGFuaW1hdGlvbiBtZXRob2QsIGVuc3VyaW5nIHRoYXQgYWxsIGxvZ2ljIGZvciBkZXRlcm1pbmluZyBzY3JvbGxcbiAqIHBvc2l0aW9uIG9yIHRyYW5zZm9ybWF0aW9uIGlzIGFic3RyYWN0ZWQgYXdheSBmcm9tIHRoZSBhbmltYXRpb24gbWV0aG9kLlxuICogQHR5cGVkZWYge3tmaW5hbFNjcm9sbFBvc2l0aW9uOiBudW1iZXIsIHNjcm9sbERlbHRhOiBudW1iZXJ9fVxuICovXG5sZXQgTURDVGFiU2Nyb2xsZXJBbmltYXRpb247XG5cbi8qKlxuICogTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXMgcmVwcmVzZW50cyB0aGUgbGVmdCBhbmQgcmlnaHQgZWRnZXMgb2YgdGhlXG4gKiBzY3JvbGwgY29udGVudC4gVGhlc2UgdmFsdWVzIHZhcnkgZGVwZW5kaW5nIG9uIGhvdyBzY3JvbGxpbmcgaW4gUlRMIGlzXG4gKiBpbXBsZW1lbnRlZCBieSB0aGUgYnJvd3Nlci4gT25lIHZhbHVlIGlzIGFsd2F5cyAwIGFuZCBvbmUgdmFsdWUgaXMgYWx3YXlzXG4gKiB0aGUgbWF4IHNjcm9sbGFibGUgdmFsdWUgYXMgZWl0aGVyIGEgcG9zaXRpdmUgb3IgbmVnYXRpdmUgaW50ZWdlci5cbiAqIEB0eXBlZGVmIHt7bGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyfX1cbiAqL1xubGV0IE1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzO1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBUYWIgU2Nyb2xsZXIuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGFiICBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDVGFiU2Nyb2xsZXJBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIGNsYXNzTmFtZSB0byB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzc05hbWUgdG8gYWRkXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGdpdmVuIGNsYXNzTmFtZSBmcm9tIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgVGhlIGNsYXNzTmFtZSB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogQWRkcyB0aGUgZ2l2ZW4gY2xhc3NOYW1lIHRvIHRoZSBzY3JvbGwgYXJlYSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzc05hbWUgdG8gYWRkXG4gICAqL1xuICBhZGRTY3JvbGxBcmVhQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGV2ZW50IHRhcmdldCBtYXRjaGVzIGdpdmVuIGNsYXNzTmFtZS5cbiAgICogQHBhcmFtIHtFdmVudFRhcmdldH0gZXZ0VGFyZ2V0IFRoZSBldmVudCB0YXJnZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIFRoZSBzZWxlY3RvciB0byBjaGVja1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXZlbnRUYXJnZXRNYXRjaGVzU2VsZWN0b3IoZXZ0VGFyZ2V0LCBzZWxlY3Rvcikge31cblxuICAvKipcbiAgICogU2V0cyBhIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBhcmVhIGVsZW1lbnQgdG8gdGhlIHBhc3NlZCB2YWx1ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BOYW1lIFRoZSBzdHlsZSBwcm9wZXJ0eSBuYW1lIHRvIHNldFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIHN0eWxlIHByb3BlcnR5IHZhbHVlXG4gICAqL1xuICBzZXRTY3JvbGxBcmVhU3R5bGVQcm9wZXJ0eShwcm9wTmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgY29udGVudCBlbGVtZW50IHRvIHRoZSBwYXNzZWQgdmFsdWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wTmFtZSBUaGUgc3R5bGUgcHJvcGVydHkgbmFtZSB0byBzZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBzdHlsZSBwcm9wZXJ0eSB2YWx1ZVxuICAgKi9cbiAgc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHkocHJvcE5hbWUsIHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzY3JvbGwgY29udGVudCBlbGVtZW50J3MgY29tcHV0ZWQgc3R5bGUgdmFsdWUgb2YgdGhlIGdpdmVuIGNzcyBwcm9wZXJ0eSBgcHJvcGVydHlOYW1lYC5cbiAgICogV2UgYWNoaWV2ZSB0aGlzIHZpYSBgZ2V0Q29tcHV0ZWRTdHlsZSguLi4pLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHlOYW1lKWAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0U2Nyb2xsQ29udGVudFN0eWxlVmFsdWUocHJvcGVydHlOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBzY3JvbGxMZWZ0IHZhbHVlIG9mIHRoZSBzY3JvbGwgYXJlYSBlbGVtZW50IHRvIHRoZSBwYXNzZWQgdmFsdWUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxMZWZ0IFRoZSBuZXcgc2Nyb2xsTGVmdCB2YWx1ZVxuICAgKi9cbiAgc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoc2Nyb2xsTGVmdCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2Nyb2xsTGVmdCB2YWx1ZSBvZiB0aGUgc2Nyb2xsIGFyZWEgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXRXaWR0aCBvZiB0aGUgc2Nyb2xsIGNvbnRlbnQgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0V2l0ZHRoIG9mIHRoZSBzY3JvbGwgYXJlYSBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBib3VuZGluZyBjbGllbnQgcmVjdCBvZiB0aGUgc2Nyb2xsIGFyZWEgZWxlbWVudC5cbiAgICogQHJldHVybiB7IUNsaWVudFJlY3R9XG4gICAqL1xuICBjb21wdXRlU2Nyb2xsQXJlYUNsaWVudFJlY3QoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBib3VuZGluZyBjbGllbnQgcmVjdCBvZiB0aGUgc2Nyb2xsIGNvbnRlbnQgZWxlbWVudC5cbiAgICogQHJldHVybiB7IUNsaWVudFJlY3R9XG4gICAqL1xuICBjb21wdXRlU2Nyb2xsQ29udGVudENsaWVudFJlY3QoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBoZWlnaHQgb2YgdGhlIGJyb3dzZXIncyBob3Jpem9udGFsIHNjcm9sbGJhcnMgKGluIHB4KS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgY29tcHV0ZUhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQoKSB7fVxufVxuXG5leHBvcnQge01EQ1RhYlNjcm9sbGVyQW5pbWF0aW9uLCBNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlcywgTURDVGFiU2Nyb2xsZXJBZGFwdGVyfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGFiU2Nyb2xsZXJBZGFwdGVyLCBNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gZnJvbSAnLi9hZGFwdGVyJztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgTURDVGFiU2Nyb2xsZXJSVEwge1xuICAvKiogQHBhcmFtIHshTURDVGFiU2Nyb2xsZXJBZGFwdGVyfSBhZGFwdGVyICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICAvKiogQHByaXZhdGUgKi9cbiAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdHJhbnNsYXRlWCBUaGUgY3VycmVudCB0cmFuc2xhdGVYIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQGFic3RyYWN0XG4gICAqL1xuICBnZXRTY3JvbGxQb3NpdGlvblJUTCh0cmFuc2xhdGVYKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259XG4gICAqIEBhYnN0cmFjdFxuICAgKi9cbiAgc2Nyb2xsVG9SVEwoc2Nyb2xsWCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufVxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIGluY3JlbWVudFNjcm9sbFJUTChzY3JvbGxYKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgY3VycmVudCBzY3JvbGxYIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cmFuc2xhdGVYIFRoZSBjdXJyZW50IHRyYW5zbGF0ZVggcG9zaXRpb25cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAYWJzdHJhY3RcbiAgICovXG4gIGdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uKHNjcm9sbFgsIHRyYW5zbGF0ZVgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYlNjcm9sbGVyUlRMO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENUYWJTY3JvbGxlclJUTCBmcm9tICcuL3J0bC1zY3JvbGxlcic7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1RhYlNjcm9sbGVyQW5pbWF0aW9uLCBNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc30gZnJvbSAnLi9hZGFwdGVyJztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDVGFiU2Nyb2xsZXJSVEx9XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0IGV4dGVuZHMgTURDVGFiU2Nyb2xsZXJSVEwge1xuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0U2Nyb2xsUG9zaXRpb25SVEwoKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgY29uc3Qge3JpZ2h0fSA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCk7XG4gICAgLy8gU2Nyb2xsIHZhbHVlcyBvbiBtb3N0IGJyb3dzZXJzIGFyZSBpbnRzIGluc3RlYWQgb2YgZmxvYXRzIHNvIHdlIHJvdW5kXG4gICAgcmV0dXJuIE1hdGgucm91bmQocmlnaHQgLSBjdXJyZW50U2Nyb2xsTGVmdCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufVxuICAgKi9cbiAgc2Nyb2xsVG9SVEwoc2Nyb2xsWCkge1xuICAgIGNvbnN0IGVkZ2VzID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxFZGdlc18oKTtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICBjb25zdCBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oZWRnZXMucmlnaHQgLSBzY3JvbGxYKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259ICovICh7XG4gICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbERlbHRhOiBjbGFtcGVkU2Nyb2xsTGVmdCAtIGN1cnJlbnRTY3JvbGxMZWZ0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn1cbiAgICovXG4gIGluY3JlbWVudFNjcm9sbFJUTChzY3JvbGxYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgY29uc3QgY2xhbXBlZFNjcm9sbExlZnQgPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKGN1cnJlbnRTY3JvbGxMZWZ0IC0gc2Nyb2xsWCk7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSAqLyAoe1xuICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxEZWx0YTogY2xhbXBlZFNjcm9sbExlZnQgLSBjdXJyZW50U2Nyb2xsTGVmdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbihzY3JvbGxYKSB7XG4gICAgcmV0dXJuIHNjcm9sbFg7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCkge1xuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3Qgcm9vdFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgoKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9ICovICh7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IGNvbnRlbnRXaWR0aCAtIHJvb3RXaWR0aCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjbGFtcFNjcm9sbFZhbHVlXyhzY3JvbGxYKSB7XG4gICAgY29uc3QgZWRnZXMgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpO1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChlZGdlcy5sZWZ0LCBzY3JvbGxYKSwgZWRnZXMucmlnaHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdDtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDVGFiU2Nyb2xsZXJSVEwgZnJvbSAnLi9ydGwtc2Nyb2xsZXInO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtNRENUYWJTY3JvbGxlckFuaW1hdGlvbiwgTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9IGZyb20gJy4vYWRhcHRlcic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ1RhYlNjcm9sbGVyUlRMfVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUgZXh0ZW5kcyBNRENUYWJTY3JvbGxlclJUTCB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdHJhbnNsYXRlWCBUaGUgY3VycmVudCB0cmFuc2xhdGVYIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uUlRMKHRyYW5zbGF0ZVgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh0cmFuc2xhdGVYIC0gY3VycmVudFNjcm9sbExlZnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4geyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn1cbiAgICovXG4gIHNjcm9sbFRvUlRMKHNjcm9sbFgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICBjb25zdCBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oLXNjcm9sbFgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gKi8gKHtcbiAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsRGVsdGE6IGNsYW1wZWRTY3JvbGxMZWZ0IC0gY3VycmVudFNjcm9sbExlZnQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufVxuICAgKi9cbiAgaW5jcmVtZW50U2Nyb2xsUlRMKHNjcm9sbFgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICBjb25zdCBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oY3VycmVudFNjcm9sbExlZnQgLSBzY3JvbGxYKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259ICovICh7XG4gICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbERlbHRhOiBjbGFtcGVkU2Nyb2xsTGVmdCAtIGN1cnJlbnRTY3JvbGxMZWZ0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cmFuc2xhdGVYXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uKHNjcm9sbFgsIHRyYW5zbGF0ZVgpIHtcbiAgICByZXR1cm4gc2Nyb2xsWCAtIHRyYW5zbGF0ZVg7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCkge1xuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3Qgcm9vdFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgoKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9ICovICh7XG4gICAgICBsZWZ0OiByb290V2lkdGggLSBjb250ZW50V2lkdGgsXG4gICAgICByaWdodDogMCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjbGFtcFNjcm9sbFZhbHVlXyhzY3JvbGxYKSB7XG4gICAgY29uc3QgZWRnZXMgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpO1xuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihlZGdlcy5yaWdodCwgc2Nyb2xsWCksIGVkZ2VzLmxlZnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmU7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ1RhYlNjcm9sbGVyUlRMIGZyb20gJy4vcnRsLXNjcm9sbGVyJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGFiU2Nyb2xsZXJBbmltYXRpb24sIE1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfSBmcm9tICcuL2FkYXB0ZXInO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENUYWJTY3JvbGxlclJUTH1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UgZXh0ZW5kcyBNRENUYWJTY3JvbGxlclJUTCB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdHJhbnNsYXRlWFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRTY3JvbGxQb3NpdGlvblJUTCh0cmFuc2xhdGVYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgLy8gU2Nyb2xsIHZhbHVlcyBvbiBtb3N0IGJyb3dzZXJzIGFyZSBpbnRzIGluc3RlYWQgb2YgZmxvYXRzIHNvIHdlIHJvdW5kXG4gICAgcmV0dXJuIE1hdGgucm91bmQoY3VycmVudFNjcm9sbExlZnQgLSB0cmFuc2xhdGVYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259XG4gICAqL1xuICBzY3JvbGxUb1JUTChzY3JvbGxYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgY29uc3QgY2xhbXBlZFNjcm9sbExlZnQgPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKHNjcm9sbFgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gKi8gKHtcbiAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgc2Nyb2xsRGVsdGE6IGN1cnJlbnRTY3JvbGxMZWZ0IC0gY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFhcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufVxuICAgKi9cbiAgaW5jcmVtZW50U2Nyb2xsUlRMKHNjcm9sbFgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICBjb25zdCBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oY3VycmVudFNjcm9sbExlZnQgKyBzY3JvbGxYKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBbmltYXRpb259ICovICh7XG4gICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbERlbHRhOiBjdXJyZW50U2Nyb2xsTGVmdCAtIGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uKHNjcm9sbFgsIHRyYW5zbGF0ZVgpIHtcbiAgICByZXR1cm4gc2Nyb2xsWCArIHRyYW5zbGF0ZVg7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCkge1xuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgY29uc3Qgcm9vdFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgoKTtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9ICovICh7XG4gICAgICBsZWZ0OiBjb250ZW50V2lkdGggLSByb290V2lkdGgsXG4gICAgICByaWdodDogMCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjbGFtcFNjcm9sbFZhbHVlXyhzY3JvbGxYKSB7XG4gICAgY29uc3QgZWRnZXMgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpO1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChlZGdlcy5yaWdodCwgc2Nyb2xsWCksIGVkZ2VzLmxlZnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5nc30gZnJvbSAnLi9jb25zdGFudHMnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGFiU2Nyb2xsZXJBbmltYXRpb24sIE1EQ1RhYlNjcm9sbGVySG9yaXpvbnRhbEVkZ2VzLCBNRENUYWJTY3JvbGxlckFkYXB0ZXJ9IGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDVGFiU2Nyb2xsZXJSVEwgZnJvbSAnLi9ydGwtc2Nyb2xsZXInO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdCBmcm9tICcuL3J0bC1kZWZhdWx0LXNjcm9sbGVyJztcbmltcG9ydCBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlIGZyb20gJy4vcnRsLW5lZ2F0aXZlLXNjcm9sbGVyJztcbmltcG9ydCBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UgZnJvbSAnLi9ydGwtcmV2ZXJzZS1zY3JvbGxlcic7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1RhYlNjcm9sbGVyQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKipcbiAgICogQHNlZSBNRENUYWJTY3JvbGxlckFkYXB0ZXIgZm9yIHR5cGluZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiU2Nyb2xsZXJBZGFwdGVyfSAqLyAoe1xuICAgICAgZXZlbnRUYXJnZXRNYXRjaGVzU2VsZWN0b3I6ICgpID0+IHt9LFxuICAgICAgYWRkQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgYWRkU2Nyb2xsQXJlYUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHNldFNjcm9sbEFyZWFTdHlsZVByb3BlcnR5OiAoKSA9PiB7fSxcbiAgICAgIHNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5OiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbENvbnRlbnRTdHlsZVZhbHVlOiAoKSA9PiB7fSxcbiAgICAgIHNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0OiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0OiAoKSA9PiB7fSxcbiAgICAgIGdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aDogKCkgPT4ge30sXG4gICAgICBnZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGg6ICgpID0+IHt9LFxuICAgICAgY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0OiAoKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVTY3JvbGxDb250ZW50Q2xpZW50UmVjdDogKCkgPT4ge30sXG4gICAgICBjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodDogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHshTURDVGFiU2Nyb2xsZXJBZGFwdGVyfSBhZGFwdGVyICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBib29sZWFuIGNvbnRyb2xzIHdoZXRoZXIgd2Ugc2hvdWxkIGhhbmRsZSB0aGUgdHJhbnNpdGlvbmVuZCBhbmQgaW50ZXJhY3Rpb24gZXZlbnRzIGR1cmluZyB0aGUgYW5pbWF0aW9uLlxuICAgICAqIEBwcml2YXRlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNBbmltYXRpbmdfID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgTURDVGFiU2Nyb2xsZXJSVEwgaW5zdGFuY2UgdmFyaWVzIHBlciBicm93c2VyIGFuZCBhbGxvd3MgdXMgdG8gZW5jYXBzdWxhdGUgdGhlIHBlY3VsaWFyIGJyb3dzZXIgYmVoYXZpb3JcbiAgICAgKiBvZiBSVEwgc2Nyb2xsaW5nIGluIGl0J3Mgb3duIGNsYXNzLlxuICAgICAqIEBwcml2YXRlIHs/TURDVGFiU2Nyb2xsZXJSVEx9XG4gICAgICovXG4gICAgdGhpcy5ydGxTY3JvbGxlckluc3RhbmNlXztcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gQ29tcHV0ZSBob3Jpem9udGFsIHNjcm9sbGJhciBoZWlnaHQgb24gc2Nyb2xsZXIgd2l0aCBvdmVyZmxvdyBpbml0aWFsbHkgaGlkZGVuLCB0aGVuIHVwZGF0ZSBvdmVyZmxvdyB0byBzY3JvbGxcbiAgICAvLyBhbmQgaW1tZWRpYXRlbHkgYWRqdXN0IGJvdHRvbSBtYXJnaW4gdG8gYXZvaWQgdGhlIHNjcm9sbGJhciBpbml0aWFsbHkgYXBwZWFyaW5nIGJlZm9yZSBKUyBydW5zLlxuICAgIGNvbnN0IGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQgPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0KCk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxBcmVhU3R5bGVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScsIC1ob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRTY3JvbGxBcmVhQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuU0NST0xMX0FSRUFfU0NST0xMKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgY3VycmVudCB2aXN1YWwgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wdXRlQ3VycmVudFNjcm9sbFBvc2l0aW9uUlRMXygpO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRUcmFuc2xhdGVYID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50VHJhbnNsYXRlWF8oKTtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIHJldHVybiBzY3JvbGxMZWZ0IC0gY3VycmVudFRyYW5zbGF0ZVg7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBpbnRlcmFjdGlvbiBldmVudHMgdGhhdCBvY2N1ciBkdXJpbmcgdHJhbnNpdGlvblxuICAgKi9cbiAgaGFuZGxlSW50ZXJhY3Rpb24oKSB7XG4gICAgLy8gRWFybHkgZXhpdCBpZiB3ZSBhcmVuJ3QgYW5pbWF0aW5nXG4gICAgaWYgKCF0aGlzLmlzQW5pbWF0aW5nXykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgb3RoZXIgZXZlbnQgbGlzdGVuZXJzIGZyb20gaGFuZGxpbmcgdGhpcyBldmVudFxuICAgIHRoaXMuc3RvcFNjcm9sbEFuaW1hdGlvbl8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSB0cmFuc2l0aW9uZW5kIGV2ZW50XG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KSB7XG4gICAgLy8gRWFybHkgZXhpdCBpZiB3ZSBhcmVuJ3QgYW5pbWF0aW5nIG9yIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkIGJ5IGEgZGlmZmVyZW50IGVsZW1lbnQuXG4gICAgaWYgKCF0aGlzLmlzQW5pbWF0aW5nX1xuICAgICAgfHwgIXRoaXMuYWRhcHRlcl8uZXZlbnRUYXJnZXRNYXRjaGVzU2VsZWN0b3IoZXZ0LnRhcmdldCwgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnN0cmluZ3MuQ09OVEVOVF9TRUxFQ1RPUikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzQW5pbWF0aW5nXyA9IGZhbHNlO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZW1lbnQgdGhlIHNjcm9sbCB2YWx1ZSBieSB0aGUgc2Nyb2xsWEluY3JlbWVudFxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWEluY3JlbWVudCBUaGUgdmFsdWUgYnkgd2hpY2ggdG8gaW5jcmVtZW50IHRoZSBzY3JvbGwgcG9zaXRpb25cbiAgICovXG4gIGluY3JlbWVudFNjcm9sbChzY3JvbGxYSW5jcmVtZW50KSB7XG4gICAgLy8gRWFybHkgZXhpdCBmb3Igbm9uLW9wZXJhdGlvbmFsIGluY3JlbWVudCB2YWx1ZXNcbiAgICBpZiAoc2Nyb2xsWEluY3JlbWVudCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmNyZW1lbnRTY3JvbGxSVExfKHNjcm9sbFhJbmNyZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuaW5jcmVtZW50U2Nyb2xsXyhzY3JvbGxYSW5jcmVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIHRoZSBnaXZlbiBzY3JvbGxYIHZhbHVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYXG4gICAqL1xuICBzY3JvbGxUbyhzY3JvbGxYKSB7XG4gICAgaWYgKHRoaXMuaXNSVExfKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvUlRMXyhzY3JvbGxYKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbFRvXyhzY3JvbGxYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSB2ZXJzaW9uIG9mIHRoZSBNRENUYWJTY3JvbGxlclJUTFxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJSVEx9XG4gICAqL1xuICBnZXRSVExTY3JvbGxlcigpIHtcbiAgICBpZiAoIXRoaXMucnRsU2Nyb2xsZXJJbnN0YW5jZV8pIHtcbiAgICAgIHRoaXMucnRsU2Nyb2xsZXJJbnN0YW5jZV8gPSB0aGlzLnJ0bFNjcm9sbGVyRmFjdG9yeV8oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5ydGxTY3JvbGxlckluc3RhbmNlXztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0cmFuc2xhdGVYIHZhbHVlIGZyb20gYSBDU1MgbWF0cml4IHRyYW5zZm9ybSBmdW5jdGlvbiBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsY3VsYXRlQ3VycmVudFRyYW5zbGF0ZVhfKCkge1xuICAgIGNvbnN0IHRyYW5zZm9ybVZhbHVlID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50U3R5bGVWYWx1ZSgndHJhbnNmb3JtJyk7XG4gICAgLy8gRWFybHkgZXhpdCBpZiBubyB0cmFuc2Zvcm0gaXMgcHJlc2VudFxuICAgIGlmICh0cmFuc2Zvcm1WYWx1ZSA9PT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyBUaGUgdHJhbnNmb3JtIHZhbHVlIGNvbWVzIGJhY2sgYXMgYSBtYXRyaXggdHJhbnNmb3JtYXRpb24gaW4gdGhlIGZvcm1cbiAgICAvLyBvZiBgbWF0cml4KGEsIGIsIGMsIGQsIHR4LCB0eSlgLiBXZSBvbmx5IGNhcmUgYWJvdXQgdHggKHRyYW5zbGF0ZVgpIHNvXG4gICAgLy8gd2UncmUgZ29pbmcgdG8gZ3JhYiBhbGwgdGhlIHBhcmVudGhlc2l6ZWQgdmFsdWVzLCBzdHJpcCBvdXQgdHgsIGFuZFxuICAgIC8vIHBhcnNlIGl0LlxuICAgIGNvbnN0IHJlc3VsdHMgPSAvXFwoKC4rKVxcKS8uZXhlYyh0cmFuc2Zvcm1WYWx1ZSlbMV07XG4gICAgY29uc3QgcGFydHMgPSByZXN1bHRzLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocGFydHNbNF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgYSBzYWZlIHNjcm9sbCB2YWx1ZSB0aGF0IGlzID4gMCBhbmQgPCB0aGUgbWF4IHNjcm9sbCB2YWx1ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsWCBUaGUgZGlzdGFuY2UgdG8gc2Nyb2xsXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNsYW1wU2Nyb2xsVmFsdWVfKHNjcm9sbFgpIHtcbiAgICBjb25zdCBlZGdlcyA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCk7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGVkZ2VzLmxlZnQsIHNjcm9sbFgpLCBlZGdlcy5yaWdodCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29tcHV0ZUN1cnJlbnRTY3JvbGxQb3NpdGlvblJUTF8oKSB7XG4gICAgY29uc3QgdHJhbnNsYXRlWCA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudFRyYW5zbGF0ZVhfKCk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UlRMU2Nyb2xsZXIoKS5nZXRTY3JvbGxQb3NpdGlvblJUTCh0cmFuc2xhdGVYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDVGFiU2Nyb2xsZXJIb3Jpem9udGFsRWRnZXN9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWxjdWxhdGVTY3JvbGxFZGdlc18oKSB7XG4gICAgY29uc3QgY29udGVudFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGgoKTtcbiAgICBjb25zdCByb290V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFPZmZzZXRXaWR0aCgpO1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckhvcml6b250YWxFZGdlc30gKi8gKHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogY29udGVudFdpZHRoIC0gcm9vdFdpZHRoLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVybmFsIHNjcm9sbCBtZXRob2RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFggVGhlIG5ldyBzY3JvbGwgcG9zaXRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNjcm9sbFRvXyhzY3JvbGxYKSB7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbFggPSB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgY29uc3Qgc2FmZVNjcm9sbFggPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKHNjcm9sbFgpO1xuICAgIGNvbnN0IHNjcm9sbERlbHRhID0gc2FmZVNjcm9sbFggLSBjdXJyZW50U2Nyb2xsWDtcbiAgICB0aGlzLmFuaW1hdGVfKC8qKiBAdHlwZSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSAqLyAoe1xuICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogc2FmZVNjcm9sbFgsXG4gICAgICBzY3JvbGxEZWx0YTogc2Nyb2xsRGVsdGEsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVybmFsIFJUTCBzY3JvbGwgbWV0aG9kXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYIFRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzY3JvbGxUb1JUTF8oc2Nyb2xsWCkge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuZ2V0UlRMU2Nyb2xsZXIoKS5zY3JvbGxUb1JUTChzY3JvbGxYKTtcbiAgICB0aGlzLmFuaW1hdGVfKGFuaW1hdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJuYWwgaW5jcmVtZW50IHNjcm9sbCBtZXRob2RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjcm9sbFggVGhlIG5ldyBzY3JvbGwgcG9zaXRpb24gaW5jcmVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbmNyZW1lbnRTY3JvbGxfKHNjcm9sbFgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsWCA9IHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICBjb25zdCB0YXJnZXRTY3JvbGxYID0gc2Nyb2xsWCArIGN1cnJlbnRTY3JvbGxYO1xuICAgIGNvbnN0IHNhZmVTY3JvbGxYID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXyh0YXJnZXRTY3JvbGxYKTtcbiAgICBjb25zdCBzY3JvbGxEZWx0YSA9IHNhZmVTY3JvbGxYIC0gY3VycmVudFNjcm9sbFg7XG4gICAgdGhpcy5hbmltYXRlXygvKiogQHR5cGUgeyFNRENUYWJTY3JvbGxlckFuaW1hdGlvbn0gKi8gKHtcbiAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IHNhZmVTY3JvbGxYLFxuICAgICAgc2Nyb2xsRGVsdGE6IHNjcm9sbERlbHRhLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBpbmNyZW1lbmV0IHNjcm9sbCBSVEwgbWV0aG9kXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxYIFRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uIFJUTCBpbmNyZW1lbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluY3JlbWVudFNjcm9sbFJUTF8oc2Nyb2xsWCkge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuZ2V0UlRMU2Nyb2xsZXIoKS5pbmNyZW1lbnRTY3JvbGxSVEwoc2Nyb2xsWCk7XG4gICAgdGhpcy5hbmltYXRlXyhhbmltYXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGVzIHRoZSB0YWIgc2Nyb2xsaW5nXG4gICAqIEBwYXJhbSB7IU1EQ1RhYlNjcm9sbGVyQW5pbWF0aW9ufSBhbmltYXRpb24gVGhlIGFuaW1hdGlvbiB0byBhcHBseVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYW5pbWF0ZV8oYW5pbWF0aW9uKSB7XG4gICAgLy8gRWFybHkgZXhpdCBpZiB0cmFuc2xhdGVYIGlzIDAsIHdoaWNoIG1lYW5zIHRoZXJlJ3Mgbm8gYW5pbWF0aW9uIHRvIHBlcmZvcm1cbiAgICBpZiAoYW5pbWF0aW9uLnNjcm9sbERlbHRhID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdG9wU2Nyb2xsQW5pbWF0aW9uXygpO1xuICAgIC8vIFRoaXMgYW5pbWF0aW9uIHVzZXMgdGhlIEZMSVAgYXBwcm9hY2guXG4gICAgLy8gUmVhZCBtb3JlIGhlcmU6IGh0dHBzOi8vYWVyb3R3aXN0LmNvbS9ibG9nL2ZsaXAteW91ci1hbmltYXRpb25zL1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoYW5pbWF0aW9uLmZpbmFsU2Nyb2xsUG9zaXRpb24pO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7YW5pbWF0aW9uLnNjcm9sbERlbHRhfXB4KWApO1xuICAgIC8vIEZvcmNlIHJlcGFpbnRcbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVTY3JvbGxBcmVhQ2xpZW50UmVjdCgpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScsICdub25lJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzQW5pbWF0aW5nXyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgc2Nyb2xsIGFuaW1hdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RvcFNjcm9sbEFuaW1hdGlvbl8oKSB7XG4gICAgdGhpcy5pc0FuaW1hdGluZ18gPSBmYWxzZTtcbiAgICBjb25zdCBjdXJyZW50U2Nyb2xsUG9zaXRpb24gPSB0aGlzLmdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uXygpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwcHgpJyk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdChjdXJyZW50U2Nyb2xsUG9zaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIGR1cmluZyBhbmltYXRpb25cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0QW5pbWF0aW5nU2Nyb2xsUG9zaXRpb25fKCkge1xuICAgIGNvbnN0IGN1cnJlbnRUcmFuc2xhdGVYID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50VHJhbnNsYXRlWF8oKTtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRSVExTY3JvbGxlcigpLmdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uKHNjcm9sbExlZnQsIGN1cnJlbnRUcmFuc2xhdGVYKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2Nyb2xsTGVmdCAtIGN1cnJlbnRUcmFuc2xhdGVYO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIFJUTCBTY3JvbGxlciB0byB1c2VcbiAgICogQHJldHVybiB7IU1EQ1RhYlNjcm9sbGVyUlRMfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcnRsU2Nyb2xsZXJGYWN0b3J5XygpIHtcbiAgICAvLyBCcm93c2VycyBoYXZlIHRocmVlIGRpZmZlcmVudCBpbXBsZW1lbnRhdGlvbnMgb2Ygc2Nyb2xsTGVmdCBpbiBSVEwgbW9kZSxcbiAgICAvLyBkZXBlbmRlbnQgb24gdGhlIGJyb3dzZXIuIFRoZSBiZWhhdmlvciBpcyBiYXNlZCBvZmYgdGhlIG1heCBMVFJcbiAgICAvLyBzY3JvbGxsZWZ0IHZhbHVlIGFuZCAwLlxuICAgIC8vXG4gICAgLy8gKiBEZWZhdWx0IHNjcm9sbGluZyBpbiBSVEwgKlxuICAgIC8vICAgIC0gTGVmdC1tb3N0IHZhbHVlOiAwXG4gICAgLy8gICAgLSBSaWdodC1tb3N0IHZhbHVlOiBNYXggTFRSIHNjcm9sbExlZnQgdmFsdWVcbiAgICAvL1xuICAgIC8vICogTmVnYXRpdmUgc2Nyb2xsaW5nIGluIFJUTCAqXG4gICAgLy8gICAgLSBMZWZ0LW1vc3QgdmFsdWU6IE5lZ2F0ZWQgbWF4IExUUiBzY3JvbGxMZWZ0IHZhbHVlXG4gICAgLy8gICAgLSBSaWdodC1tb3N0IHZhbHVlOiAwXG4gICAgLy9cbiAgICAvLyAqIFJldmVyc2Ugc2Nyb2xsaW5nIGluIFJUTCAqXG4gICAgLy8gICAgLSBMZWZ0LW1vc3QgdmFsdWU6IE1heCBMVFIgc2Nyb2xsTGVmdCB2YWx1ZVxuICAgIC8vICAgIC0gUmlnaHQtbW9zdCB2YWx1ZTogMFxuICAgIC8vXG4gICAgLy8gV2UgdXNlIHRob3NlIHByaW5jaXBsZXMgYmVsb3cgdG8gZGV0ZXJtaW5lIHdoaWNoIFJUTCBzY3JvbGxMZWZ0XG4gICAgLy8gYmVoYXZpb3IgaXMgaW1wbGVtZW50ZWQgaW4gdGhlIGN1cnJlbnQgYnJvd3Nlci5cbiAgICBjb25zdCBpbml0aWFsU2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KGluaXRpYWxTY3JvbGxMZWZ0IC0gMSk7XG4gICAgY29uc3QgbmV3U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcblxuICAgIC8vIElmIHRoZSBuZXdTY3JvbGxMZWZ0IHZhbHVlIGlzIG5lZ2F0aXZlLHRoZW4gd2Uga25vdyB0aGF0IHRoZSBicm93c2VyIGhhc1xuICAgIC8vIGltcGxlbWVudGVkIG5lZ2F0aXZlIFJUTCBzY3JvbGxpbmcsIHNpbmNlIGFsbCBvdGhlciBpbXBsZW1lbnRhdGlvbnMgaGF2ZVxuICAgIC8vIG9ubHkgcG9zaXRpdmUgdmFsdWVzLlxuICAgIGlmIChuZXdTY3JvbGxMZWZ0IDwgMCkge1xuICAgICAgLy8gVW5kbyB0aGUgc2Nyb2xsTGVmdCB0ZXN0IGNoZWNrXG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KGluaXRpYWxTY3JvbGxMZWZ0KTtcbiAgICAgIHJldHVybiBuZXcgTURDVGFiU2Nyb2xsZXJSVExOZWdhdGl2ZSh0aGlzLmFkYXB0ZXJfKTtcbiAgICB9XG5cbiAgICBjb25zdCByb290Q2xpZW50UmVjdCA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY29udGVudENsaWVudFJlY3QgPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVTY3JvbGxDb250ZW50Q2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHJpZ2h0RWRnZURlbHRhID0gTWF0aC5yb3VuZChjb250ZW50Q2xpZW50UmVjdC5yaWdodCAtIHJvb3RDbGllbnRSZWN0LnJpZ2h0KTtcbiAgICAvLyBVbmRvIHRoZSBzY3JvbGxMZWZ0IHRlc3QgY2hlY2tcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KGluaXRpYWxTY3JvbGxMZWZ0KTtcblxuICAgIC8vIEJ5IGNhbGN1bGF0aW5nIHRoZSBjbGllbnRSZWN0IG9mIHRoZSByb290IGVsZW1lbnQgYW5kIHRoZSBjbGllbnRSZWN0IG9mXG4gICAgLy8gdGhlIGNvbnRlbnQgZWxlbWVudCwgd2UgY2FuIGRldGVybWluZSBob3cgbXVjaCB0aGUgc2Nyb2xsIHZhbHVlIGNoYW5nZWRcbiAgICAvLyB3aGVuIHdlIHBlcmZvcm1lZCB0aGUgc2Nyb2xsTGVmdCBzdWJ0cmFjdGlvbiBhYm92ZS5cbiAgICBpZiAocmlnaHRFZGdlRGVsdGEgPT09IG5ld1Njcm9sbExlZnQpIHtcbiAgICAgIHJldHVybiBuZXcgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlKHRoaXMuYWRhcHRlcl8pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0KHRoaXMuYWRhcHRlcl8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc1JUTF8oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudFN0eWxlVmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJTY3JvbGxlckZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHtjc3NDbGFzc2VzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0IHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nLlxuICogQHByaXZhdGUge251bWJlcnx1bmRlZmluZWR9XG4gKi9cbmxldCBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0XztcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgaGVpZ2h0IG9mIGJyb3dzZXItcmVuZGVyZWQgaG9yaXpvbnRhbCBzY3JvbGxiYXJzIHVzaW5nIGEgc2VsZi1jcmVhdGVkIHRlc3QgZWxlbWVudC5cbiAqIE1heSByZXR1cm4gMCAoZS5nLiBvbiBPUyBYIGJyb3dzZXJzIHVuZGVyIGRlZmF1bHQgY29uZmlndXJhdGlvbikuXG4gKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IHNob3VsZENhY2hlUmVzdWx0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0KGRvY3VtZW50T2JqLCBzaG91bGRDYWNoZVJlc3VsdCA9IHRydWUpIHtcbiAgaWYgKHNob3VsZENhY2hlUmVzdWx0ICYmIHR5cGVvZiBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0XyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodF87XG4gIH1cblxuICBjb25zdCBlbCA9IGRvY3VtZW50T2JqLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlbC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzZXMuU0NST0xMX1RFU1QpO1xuICBkb2N1bWVudE9iai5ib2R5LmFwcGVuZENoaWxkKGVsKTtcblxuICBjb25zdCBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0IC0gZWwuY2xpZW50SGVpZ2h0O1xuICBkb2N1bWVudE9iai5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcblxuICBpZiAoc2hvdWxkQ2FjaGVSZXN1bHQpIHtcbiAgICBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0XyA9IGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHshT2JqZWN0fSBIVE1MRWxlbWVudFByb3RvdHlwZVxuICogQHJldHVybiB7IUFycmF5PHN0cmluZz59XG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudFByb3RvdHlwZSkge1xuICByZXR1cm4gW1xuICAgICdtc01hdGNoZXNTZWxlY3RvcicsICdtYXRjaGVzJyxcbiAgXS5maWx0ZXIoKHApID0+IHAgaW4gSFRNTEVsZW1lbnRQcm90b3R5cGUpLnBvcCgpO1xufVxuXG5leHBvcnQge2NvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0LCBnZXRNYXRjaGVzUHJvcGVydHl9O1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibWRjLXRhYi1zY3JvbGxlclwiIDpjbGFzcz1cImNsYXNzZXNcIj5cbiAgICA8ZGl2XG4gICAgICByZWY9XCJhcmVhXCJcbiAgICAgIGNsYXNzPVwibWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWFyZWFcIlxuICAgICAgQG1vdXNlZG93bj1cImhhbmRsZUludGVyYWN0aW9uXCJcbiAgICAgIEB3aGVlbD1cImhhbmRsZUludGVyYWN0aW9uXCJcbiAgICAgIEBwb2ludGVyZG93bj1cImhhbmRsZUludGVyYWN0aW9uXCJcbiAgICAgIEB0b3VjaHN0YXJ0PVwiaGFuZGxlSW50ZXJhY3Rpb25cIlxuICAgICAgQGtleWRvd249XCJoYW5kbGVJbnRlcmFjdGlvblwiXG4gICAgICA6Y2xhc3M9XCJhcmVhQ2xhc3Nlc1wiXG4gICAgICA6c3R5bGU9XCJhcmVhU3R5bGVzXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj1cImNvbnRlbnRcIlxuICAgICAgICBjbGFzcz1cIm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1jb250ZW50XCJcbiAgICAgICAgOnN0eWxlPVwiY29udGVudFN0eWxlc1wiXG4gICAgICAgIEB0cmFuc2l0aW9uZW5kPVwiaGFuZGxlVHJhbnNpdGlvbkVuZFwiXG4gICAgICA+XG4gICAgICAgIDxzbG90IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL2ZvdW5kYXRpb24nXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJ0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRhYi1zY3JvbGxlcicsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHsgY2xhc3Nlczoge30sIGFyZWFDbGFzc2VzOiB7fSwgYXJlYVN0eWxlczoge30sIGNvbnRlbnRTdHlsZXM6IHt9IH1cbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24oe1xuICAgICAgZXZlbnRUYXJnZXRNYXRjaGVzU2VsZWN0b3I6IChldnRUYXJnZXQsIHNlbGVjdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IE1BVENIRVMgPSB1dGlsLmdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpXG4gICAgICAgIHJldHVybiBldnRUYXJnZXRbTUFUQ0hFU10oc2VsZWN0b3IpXG4gICAgICB9LFxuICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpLFxuXG4gICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGRlbGV0ZSh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSksXG4gICAgICBhZGRTY3JvbGxBcmVhQ2xhc3M6IGNsYXNzTmFtZSA9PlxuICAgICAgICB0aGlzLiRzZXQodGhpcy5hcmVhQ2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKSxcbiAgICAgIHNldFNjcm9sbEFyZWFTdHlsZVByb3BlcnR5OiAocHJvcCwgdmFsdWUpID0+XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLmFyZWFTdHlsZXMsIHByb3AsIHZhbHVlKSxcbiAgICAgIHNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5OiAocHJvcCwgdmFsdWUpID0+XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLmNvbnRlbnRTdHlsZXMsIHByb3AsIHZhbHVlKSxcbiAgICAgIGdldFNjcm9sbENvbnRlbnRTdHlsZVZhbHVlOiBwcm9wTmFtZSA9PlxuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiRyZWZzLmNvbnRlbnQpLmdldFByb3BlcnR5VmFsdWUocHJvcE5hbWUpLFxuICAgICAgc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQ6IHNjcm9sbFggPT5cbiAgICAgICAgKHRoaXMuJHJlZnMuYXJlYS5zY3JvbGxMZWZ0ID0gc2Nyb2xsWCksXG4gICAgICBnZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdDogKCkgPT4gdGhpcy4kcmVmcy5hcmVhLnNjcm9sbExlZnQsXG4gICAgICBnZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGg6ICgpID0+IHRoaXMuJHJlZnMuY29udGVudC5vZmZzZXRXaWR0aCxcbiAgICAgIGdldFNjcm9sbEFyZWFPZmZzZXRXaWR0aDogKCkgPT4gdGhpcy4kcmVmcy5hcmVhLm9mZnNldFdpZHRoLFxuICAgICAgY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0OiAoKSA9PlxuICAgICAgICB0aGlzLiRyZWZzLmFyZWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjb21wdXRlU2Nyb2xsQ29udGVudENsaWVudFJlY3Q6ICgpID0+XG4gICAgICAgIHRoaXMuJHJlZnMuY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0OiAoKSA9PlxuICAgICAgICB1dGlsLmNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0KGRvY3VtZW50KVxuICAgIH0pXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlVHJhbnNpdGlvbkVuZChldnQpXG4gICAgfSxcbiAgICBoYW5kbGVJbnRlcmFjdGlvbihldnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVJbnRlcmFjdGlvbihldnQpXG4gICAgfSxcbiAgICBnZXRTY3JvbGxQb3NpdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb24uZ2V0U2Nyb2xsUG9zaXRpb24oKVxuICAgIH0sXG4gICAgZ2V0U2Nyb2xsQ29udGVudFdpZHRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuY29udGVudC5vZmZzZXRXaWR0aFxuICAgIH0sXG4gICAgaW5jcmVtZW50U2Nyb2xsKHNjcm9sbFhJbmNyZW1lbnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5pbmNyZW1lbnRTY3JvbGwoc2Nyb2xsWEluY3JlbWVudClcbiAgICB9LFxuICAgIHNjcm9sbFRvKHNjcm9sbFgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zY3JvbGxUbyhzY3JvbGxYKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRhYiBJbmRpY2F0b3IuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGFiIEluZGljYXRvciBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDVGFiSW5kaWNhdG9yQWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIHRoZSBnaXZlbiBjbGFzc05hbWUgdG8gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBUaGUgY2xhc3NOYW1lIHRvIGFkZFxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBjbGFzc05hbWUgZnJvbSB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIFRoZSBjbGFzc05hbWUgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNsaWVudCByZWN0IG9mIHRoZSBjb250ZW50IGVsZW1lbnQuXG4gICAqIEByZXR1cm4geyFDbGllbnRSZWN0fVxuICAgKi9cbiAgY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCkge31cblxuICAvKipcbiAgICogU2V0cyBhIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBjb250ZW50IGVsZW1lbnQgdG8gdGhlIHBhc3NlZCB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcE5hbWUgVGhlIHN0eWxlIHByb3BlcnR5IG5hbWUgdG8gc2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgc3R5bGUgcHJvcGVydHkgdmFsdWVcbiAgICovXG4gIHNldENvbnRlbnRTdHlsZVByb3BlcnR5KHByb3BOYW1lLCB2YWx1ZSkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGFiSW5kaWNhdG9yQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIEFDVElWRTogJ21kYy10YWItaW5kaWNhdG9yLS1hY3RpdmUnLFxuICBGQURFOiAnbWRjLXRhYi1pbmRpY2F0b3ItLWZhZGUnLFxuICBOT19UUkFOU0lUSU9OOiAnbWRjLXRhYi1pbmRpY2F0b3ItLW5vLXRyYW5zaXRpb24nLFxufTtcblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBzdHJpbmdzID0ge1xuICBDT05URU5UX1NFTEVDVE9SOiAnLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50Jyxcbn07XG5cbmV4cG9ydCB7XG4gIGNzc0NsYXNzZXMsXG4gIHN0cmluZ3MsXG59O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1RhYkluZGljYXRvckFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7XG4gIGNzc0NsYXNzZXMsXG4gIHN0cmluZ3MsXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDVGFiSW5kaWNhdG9yQWRhcHRlcj59XG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzZWUgTURDVGFiSW5kaWNhdG9yQWRhcHRlciBmb3IgdHlwaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4geyFNRENUYWJJbmRpY2F0b3JBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGFiSW5kaWNhdG9yQWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdDogKCkgPT4ge30sXG4gICAgICBzZXRDb250ZW50U3R5bGVQcm9wZXJ0eTogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHshTURDVGFiSW5kaWNhdG9yQWRhcHRlcn0gYWRhcHRlciAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG4gIH1cblxuICAvKiogQHJldHVybiB7IUNsaWVudFJlY3R9ICovXG4gIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5jb21wdXRlQ29udGVudENsaWVudFJlY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGluZGljYXRvclxuICAgKiBAcGFyYW0geyFDbGllbnRSZWN0PX0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0XG4gICAqIEBhYnN0cmFjdFxuICAgKi9cbiAgYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbiAgLyoqIEBhYnN0cmFjdCAqL1xuICBkZWFjdGl2YXRlKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9ufVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIGV4dGVuZHMgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiB7XG4gIC8qKiBAcGFyYW0geyFDbGllbnRSZWN0PX0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0ICovXG4gIGFjdGl2YXRlKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCkge1xuICAgIC8vIEVhcmx5IGV4aXQgaWYgbm8gaW5kaWNhdG9yIGlzIHByZXNlbnQgdG8gaGFuZGxlIGNhc2VzIHdoZXJlIGFuIGluZGljYXRvclxuICAgIC8vIG1heSBiZSBhY3RpdmF0ZWQgd2l0aG91dCBhIHByaW9yIGluZGljYXRvciBzdGF0ZVxuICAgIGlmICghcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoaXMgYW5pbWF0aW9uIHVzZXMgdGhlIEZMSVAgYXBwcm9hY2guIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IGl0IGF0IHRoZSBsaW5rIGJlbG93OlxuICAgIC8vIGh0dHBzOi8vYWVyb3R3aXN0LmNvbS9ibG9nL2ZsaXAteW91ci1hbmltYXRpb25zL1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkaW1lbnNpb25zIGJhc2VkIG9uIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBwcmV2aW91cyBpbmRpY2F0b3JcbiAgICBjb25zdCBjdXJyZW50Q2xpZW50UmVjdCA9IHRoaXMuY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgd2lkdGhEZWx0YSA9IHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdC53aWR0aCAvIGN1cnJlbnRDbGllbnRSZWN0LndpZHRoO1xuICAgIGNvbnN0IHhQb3NpdGlvbiA9IHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdC5sZWZ0IC0gY3VycmVudENsaWVudFJlY3QubGVmdDtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5OT19UUkFOU0lUSU9OKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldENvbnRlbnRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWCgke3hQb3NpdGlvbn1weCkgc2NhbGVYKCR7d2lkdGhEZWx0YX0pYCk7XG5cbiAgICAvLyBGb3JjZSByZXBhaW50IGJlZm9yZSB1cGRhdGluZyBjbGFzc2VzIGFuZCB0cmFuc2Zvcm0gdG8gZW5zdXJlIHRoZSB0cmFuc2Zvcm0gcHJvcGVybHkgdGFrZXMgZWZmZWN0XG4gICAgdGhpcy5jb21wdXRlQ29udGVudENsaWVudFJlY3QoKTtcblxuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLk5PX1RSQU5TSVRJT04pO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFDVElWRSk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRDb250ZW50U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJywgJycpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uO1xuIiwiPHRlbXBsYXRlPlxuICA8c3BhbiBjbGFzcz1cIm1kYy10YWItaW5kaWNhdG9yXCIgOmNsYXNzPVwiY2xhc3Nlc1wiPlxuICAgIDxzcGFuXG4gICAgICByZWY9XCJjb250ZW50XCJcbiAgICAgIDpzdHlsZT1cInN0eWxlc1wiXG4gICAgICBjbGFzcz1cIm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50IG1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmVcIlxuICAgID48L3NwYW4+XG4gIDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTURDU2xpZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3Ivc2xpZGluZy1mb3VuZGF0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtdGFiLWluZGljYXRvcicsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHsgY2xhc3Nlczoge30sIHN0eWxlczoge30gfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKSxcbiAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZGVsZXRlKHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lKSxcbiAgICAgIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdDogKCkgPT5cbiAgICAgICAgdGhpcy4kcmVmcy5jb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgc2V0Q29udGVudFN0eWxlUHJvcGVydHk6IChwcm9wLCB2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLiRzZXQodGhpcy5zdHlsZXMsIHByb3AsIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KVxuICAgIH0sXG4gICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5kZWFjdGl2YXRlKClcbiAgICB9LFxuICAgIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb24uY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8c3BhbiBjbGFzcz1cIm1kYy10YWJfX3JpcHBsZVwiIDpjbGFzcz1cImNsYXNzZXNcIiA6c3R5bGU9XCJzdHlsZXNcIj48L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgUmlwcGxlQmFzZSB9IGZyb20gJy4uL3JpcHBsZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRhYi1yaXBwbGUnLFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHsgY2xhc3Nlczoge30sIHN0eWxlczoge30gfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMucmlwcGxlID0gbmV3IFJpcHBsZUJhc2UodGhpcylcbiAgICB0aGlzLnJpcHBsZS5pbml0KClcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IG1kY1RhYiBmcm9tICcuL21kYy10YWIudnVlJ1xuaW1wb3J0IG1kY1RhYkJhciBmcm9tICcuL21kYy10YWItYmFyLnZ1ZSdcbmltcG9ydCBtZGNUYWJTY3JvbGxlciBmcm9tICcuL21kYy10YWItc2Nyb2xsZXIudnVlJ1xuaW1wb3J0IG1kY1RhYkluZGljYXRvciBmcm9tICcuL21kYy10YWItaW5kaWNhdG9yLnZ1ZSdcbmltcG9ydCBtZGNUYWJSaXBwbGUgZnJvbSAnLi9tZGMtdGFiLXJpcHBsZS52dWUnXG5leHBvcnQgeyBtZGNUYWIsIG1kY1RhYkJhciwgbWRjVGFiU2Nyb2xsZXIsIG1kY1RhYkluZGljYXRvciwgbWRjVGFiUmlwcGxlIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY1RhYixcbiAgbWRjVGFiQmFyLFxuICBtZGNUYWJTY3JvbGxlcixcbiAgbWRjVGFiSW5kaWNhdG9yLFxuICBtZGNUYWJSaXBwbGVcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJDdXN0b21FbGVtZW50IiwiZnVuY3Rpb25hbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwicHJvcHMiLCJpcyIsInRhZyIsImRhdGEiLCJjaGlsZHJlbiIsIkN1c3RvbUVsZW1lbnRNaXhpbiIsIkN1c3RvbUxpbmsiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImxpbmsiLCJPYmplY3QiLCJoIiwiZWxlbWVudCIsInBhcmVudCIsIiRyb3V0ZXIiLCIkcm9vdCIsIiRvcHRpb25zIiwib24iLCJjbGljayIsIm5hdGl2ZU9uIiwiQ3VzdG9tTGlua01peGluIiwidG8iLCJleGFjdCIsIkJvb2xlYW4iLCJhcHBlbmQiLCJyZXBsYWNlIiwiYWN0aXZlQ2xhc3MiLCJleGFjdEFjdGl2ZUNsYXNzIiwiY29tcHV0ZWQiLCJlbWl0Q3VzdG9tRXZlbnQiLCJlbCIsImV2dFR5cGUiLCJldnREYXRhIiwic2hvdWxkQnViYmxlIiwiZXZ0IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJleHRyYWN0SWNvblByb3AiLCJpY29uUHJvcCIsImNsYXNzZXMiLCJjb250ZW50IiwiQXJyYXkiLCJyZWR1Y2UiLCJyZXN1bHQiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsInNwbGl0IiwidGV4dENvbnRlbnQiLCJEaXNwYXRjaEV2ZW50TWl4aW4iLCJldmVudCIsIm1ldGhvZHMiLCIkZW1pdCIsInRhcmdldCIsImV2ZW50VGFyZ2V0IiwiYXJncyIsImV2ZW50QXJncyIsImxpc3RlbmVycyIsIiRsaXN0ZW5lcnMiLCJlIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIlZNQVVuaXF1ZUlkTWl4aW4iLCJiZWZvcmVDcmVhdGUiLCJ2bWFfdWlkXyIsIl91aWQiLCJNRENGb3VuZGF0aW9uIiwiYWRhcHRlciIsImFkYXB0ZXJfIiwiTURDVGFiQWRhcHRlciIsImF0dHIiLCJwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QiLCJjc3NDbGFzc2VzIiwiQUNUSVZFIiwic3RyaW5ncyIsIkFSSUFfU0VMRUNURUQiLCJSSVBQTEVfU0VMRUNUT1IiLCJDT05URU5UX1NFTEVDVE9SIiwiVEFCX0lORElDQVRPUl9TRUxFQ1RPUiIsIlRBQklOREVYIiwiSU5URVJBQ1RFRF9FVkVOVCIsIk1EQ1RhYkZvdW5kYXRpb24iLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJzZXRBdHRyIiwiYWN0aXZhdGVJbmRpY2F0b3IiLCJkZWFjdGl2YXRlSW5kaWNhdG9yIiwibm90aWZ5SW50ZXJhY3RlZCIsImdldE9mZnNldExlZnQiLCJnZXRPZmZzZXRXaWR0aCIsImdldENvbnRlbnRPZmZzZXRMZWZ0IiwiZ2V0Q29udGVudE9mZnNldFdpZHRoIiwiZm9jdXMiLCJkZWZhdWx0QWRhcHRlciIsImZvY3VzT25BY3RpdmF0ZV8iLCJmb2N1c09uQWN0aXZhdGUiLCJpc0FjdGl2ZSIsInJvb3RXaWR0aCIsInJvb3RMZWZ0IiwiY29udGVudFdpZHRoIiwiY29udGVudExlZnQiLCJyb290UmlnaHQiLCJjb250ZW50UmlnaHQiLCJNRENDb21wb25lbnQiLCJyb290IiwiZm91bmRhdGlvbiIsInVuZGVmaW5lZCIsInJvb3RfIiwiaW5pdGlhbGl6ZSIsImZvdW5kYXRpb25fIiwiZ2V0RGVmYXVsdEZvdW5kYXRpb24iLCJpbml0IiwiaW5pdGlhbFN5bmNXaXRoRE9NIiwiRXJyb3IiLCJkZXN0cm95IiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTURDUmlwcGxlQWRhcHRlciIsInZhck5hbWUiLCJST09UIiwiVU5CT1VOREVEIiwiQkdfRk9DVVNFRCIsIkZHX0FDVElWQVRJT04iLCJGR19ERUFDVElWQVRJT04iLCJWQVJfTEVGVCIsIlZBUl9UT1AiLCJWQVJfRkdfU0laRSIsIlZBUl9GR19TQ0FMRSIsIlZBUl9GR19UUkFOU0xBVEVfU1RBUlQiLCJWQVJfRkdfVFJBTlNMQVRFX0VORCIsIm51bWJlcnMiLCJQQURESU5HIiwiSU5JVElBTF9PUklHSU5fU0NBTEUiLCJERUFDVElWQVRJT05fVElNRU9VVF9NUyIsIkZHX0RFQUNUSVZBVElPTl9NUyIsIlRBUF9ERUxBWV9NUyIsInN1cHBvcnRzQ3NzVmFyaWFibGVzXyIsInN1cHBvcnRzUGFzc2l2ZV8iLCJkZXRlY3RFZGdlUHNldWRvVmFyQnVnIiwid2luZG93T2JqIiwibm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaGFzUHNldWRvVmFyQnVnIiwiYm9yZGVyVG9wU3R5bGUiLCJyZW1vdmUiLCJzdXBwb3J0c0Nzc1ZhcmlhYmxlcyIsImZvcmNlUmVmcmVzaCIsInN1cHBvcnRzRnVuY3Rpb25QcmVzZW50IiwiQ1NTIiwic3VwcG9ydHMiLCJleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIiwid2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzIiwiYXBwbHlQYXNzaXZlIiwiZ2xvYmFsT2JqIiwiaXNTdXBwb3J0ZWQiLCJwYXNzaXZlIiwiZ2V0TWF0Y2hlc1Byb3BlcnR5IiwiSFRNTEVsZW1lbnRQcm90b3R5cGUiLCJtYXRjaGVzTWV0aG9kcyIsIm1ldGhvZCIsImkiLCJsZW5ndGgiLCJtYXRjaGVzTWV0aG9kIiwiZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzIiwiZXYiLCJwYWdlT2Zmc2V0IiwiY2xpZW50UmVjdCIsIngiLCJ5IiwiZG9jdW1lbnRYIiwibGVmdCIsImRvY3VtZW50WSIsInRvcCIsIm5vcm1hbGl6ZWRYIiwibm9ybWFsaXplZFkiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTIiwiUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMiLCJhY3RpdmF0ZWRUYXJnZXRzIiwiTURDUmlwcGxlRm91bmRhdGlvbiIsImJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMiLCJpc1VuYm91bmRlZCIsImlzU3VyZmFjZUFjdGl2ZSIsImlzU3VyZmFjZURpc2FibGVkIiwiY29udGFpbnNFdmVudFRhcmdldCIsInJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwiZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJkZXJlZ2lzdGVyUmVzaXplSGFuZGxlciIsInVwZGF0ZUNzc1ZhcmlhYmxlIiwiY29tcHV0ZUJvdW5kaW5nUmVjdCIsImdldFdpbmRvd1BhZ2VPZmZzZXQiLCJsYXlvdXRGcmFtZV8iLCJmcmFtZV8iLCJ3aWR0aCIsImhlaWdodCIsImFjdGl2YXRpb25TdGF0ZV8iLCJkZWZhdWx0QWN0aXZhdGlvblN0YXRlXyIsImluaXRpYWxTaXplXyIsIm1heFJhZGl1c18iLCJhY3RpdmF0ZUhhbmRsZXJfIiwiYWN0aXZhdGVfIiwiZGVhY3RpdmF0ZUhhbmRsZXJfIiwiZGVhY3RpdmF0ZV8iLCJmb2N1c0hhbmRsZXJfIiwiaGFuZGxlRm9jdXMiLCJibHVySGFuZGxlcl8iLCJoYW5kbGVCbHVyIiwicmVzaXplSGFuZGxlcl8iLCJsYXlvdXQiLCJ1bmJvdW5kZWRDb29yZHNfIiwiZmdTY2FsZV8iLCJhY3RpdmF0aW9uVGltZXJfIiwiZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfIiwiYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyIsImFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyIsInJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XyIsInByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyIsImlzQWN0aXZhdGVkIiwiaGFzRGVhY3RpdmF0aW9uVVhSdW4iLCJ3YXNBY3RpdmF0ZWRCeVBvaW50ZXIiLCJ3YXNFbGVtZW50TWFkZUFjdGl2ZSIsImFjdGl2YXRpb25FdmVudCIsImlzUHJvZ3JhbW1hdGljIiwic3VwcG9ydHNQcmVzc1JpcHBsZSIsInN1cHBvcnRzUHJlc3NSaXBwbGVfIiwicmVnaXN0ZXJSb290SGFuZGxlcnNfIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibGF5b3V0SW50ZXJuYWxfIiwiY2xlYXJUaW1lb3V0IiwicmVtb3ZlQ3NzVmFyc18iLCJkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXyIsImRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18iLCJmb3JFYWNoIiwia2V5cyIsImsiLCJpbmRleE9mIiwiYWN0aXZhdGlvblN0YXRlIiwicHJldmlvdXNBY3RpdmF0aW9uRXZlbnQiLCJpc1NhbWVJbnRlcmFjdGlvbiIsImhhc0FjdGl2YXRlZENoaWxkIiwic29tZSIsInJlc2V0QWN0aXZhdGlvblN0YXRlXyIsInB1c2giLCJyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyIsImNoZWNrRWxlbWVudE1hZGVBY3RpdmVfIiwiYW5pbWF0ZUFjdGl2YXRpb25fIiwia2V5Q29kZSIsInRyYW5zbGF0ZVN0YXJ0IiwidHJhbnNsYXRlRW5kIiwiZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXyIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXyIsInNldFRpbWVvdXQiLCJhY3RpdmF0aW9uSGFzRW5kZWQiLCJzdGF0ZSIsImFuaW1hdGVEZWFjdGl2YXRpb25fIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtYXhEaW0iLCJtYXgiLCJnZXRCb3VuZGVkUmFkaXVzIiwiaHlwb3RlbnVzZSIsInNxcnQiLCJwb3ciLCJ1cGRhdGVMYXlvdXRDc3NWYXJzXyIsInJvdW5kIiwidW5ib3VuZGVkIiwiTURDUmlwcGxlIiwiZGlzYWJsZWQiLCJ1bmJvdW5kZWRfIiwic2V0VW5ib3VuZGVkIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiY3JlYXRlQWRhcHRlciIsImRhdGFzZXQiLCJzZXRVbmJvdW5kZWRfIiwicmlwcGxlIiwiaW5zdGFuY2UiLCJNQVRDSEVTIiwidXRpbCIsIkhUTUxFbGVtZW50IiwicHJvdG90eXBlIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29udGFpbnMiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsIlJpcHBsZUNhcGFibGVTdXJmYWNlIiwiUmlwcGxlQmFzZSIsInJlZiIsIl9tYXRjaGVzIiwib3B0aW9ucyIsIiRlbCIsIiRzZXQiLCIkZGVsZXRlIiwic3R5bGVzIiwiUmlwcGxlTWl4aW4iLCJtb3VudGVkIiwiYmVmb3JlRGVzdHJveSIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsImNvbXBpbGVkVGVtcGxhdGUiLCJpbmplY3RTdHlsZSIsImRlZmF1bHRFeHBvcnQiLCJzY29wZUlkIiwiaXNGdW5jdGlvbmFsVGVtcGxhdGUiLCJtb2R1bGVJZGVudGlmaWVyIiwiaXNTaGFkb3dNb2RlIiwiY3JlYXRlSW5qZWN0b3IiLCJjcmVhdGVJbmplY3RvclNTUiIsImNyZWF0ZUluamVjdG9yU2hhZG93Iiwic3RhdGljUmVuZGVyRm5zIiwiX2NvbXBpbGVkIiwiX3Njb3BlSWQiLCJob29rIiwiJHZub2RlIiwic3NyQ29udGV4dCIsIl9fVlVFX1NTUl9DT05URVhUX18iLCJjYWxsIiwiX3JlZ2lzdGVyZWRDb21wb25lbnRzIiwiX3NzclJlZ2lzdGVyIiwic2hhZG93Um9vdCIsIm9yaWdpbmFsUmVuZGVyIiwicmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIiwiZXhpc3RpbmciLCJjb25jYXQiLCJzY3JpcHQiLCJUQUJfQUNUSVZBVEVEX0VWRU5UIiwiVEFCX1NDUk9MTEVSX1NFTEVDVE9SIiwiVEFCX1NFTEVDVE9SIiwiQVJST1dfTEVGVF9LRVkiLCJBUlJPV19SSUdIVF9LRVkiLCJFTkRfS0VZIiwiSE9NRV9LRVkiLCJFTlRFUl9LRVkiLCJTUEFDRV9LRVkiLCJFWFRSQV9TQ1JPTExfQU1PVU5UIiwiQVJST1dfTEVGVF9LRVlDT0RFIiwiQVJST1dfUklHSFRfS0VZQ09ERSIsIkVORF9LRVlDT0RFIiwiSE9NRV9LRVlDT0RFIiwiRU5URVJfS0VZQ09ERSIsIlNQQUNFX0tFWUNPREUiLCJNRENUYWJCYXJBZGFwdGVyIiwic2Nyb2xsWCIsInNjcm9sbFhJbmNyZW1lbnQiLCJpbmRleCIsImlkIiwiQUNDRVBUQUJMRV9LRVlTIiwiU2V0IiwiS0VZQ09ERV9NQVAiLCJNYXAiLCJzZXQiLCJNRENUYWJCYXJGb3VuZGF0aW9uIiwic2Nyb2xsVG8iLCJpbmNyZW1lbnRTY3JvbGwiLCJnZXRTY3JvbGxQb3NpdGlvbiIsImdldFNjcm9sbENvbnRlbnRXaWR0aCIsImlzUlRMIiwic2V0QWN0aXZlVGFiIiwiYWN0aXZhdGVUYWJBdEluZGV4IiwiZGVhY3RpdmF0ZVRhYkF0SW5kZXgiLCJmb2N1c1RhYkF0SW5kZXgiLCJnZXRUYWJJbmRpY2F0b3JDbGllbnRSZWN0QXRJbmRleCIsImdldFRhYkRpbWVuc2lvbnNBdEluZGV4IiwiZ2V0UHJldmlvdXNBY3RpdmVUYWJJbmRleCIsImdldEZvY3VzZWRUYWJJbmRleCIsImdldEluZGV4T2ZUYWJCeUlkIiwiZ2V0VGFiTGlzdExlbmd0aCIsIm5vdGlmeVRhYkFjdGl2YXRlZCIsInVzZUF1dG9tYXRpY0FjdGl2YXRpb25fIiwidXNlQXV0b21hdGljQWN0aXZhdGlvbiIsInByZXZpb3VzQWN0aXZlSW5kZXgiLCJpbmRleElzSW5SYW5nZV8iLCJzY3JvbGxJbnRvVmlldyIsImdldEtleUZyb21FdmVudF8iLCJpc0FjdGl2YXRpb25LZXlfIiwicHJldmVudERlZmF1bHQiLCJkZXRlcm1pbmVUYXJnZXRGcm9tS2V5XyIsImZvY3VzZWRUYWJJbmRleCIsInRhYklkIiwiaXNSVExfIiwic2Nyb2xsSW50b1ZpZXdSVExfIiwic2Nyb2xsSW50b1ZpZXdfIiwib3JpZ2luIiwibWF4SW5kZXgiLCJzaG91bGRHb1RvRW5kIiwic2hvdWxkRGVjcmVtZW50Iiwic2hvdWxkSW5jcmVtZW50IiwibmV4dEluZGV4Iiwic2Nyb2xsUG9zaXRpb24iLCJiYXJXaWR0aCIsIm5leHRUYWJEaW1lbnNpb25zIiwicmVsYXRpdmVDb250ZW50TGVmdCIsInJlbGF0aXZlQ29udGVudFJpZ2h0IiwibGVmdEluY3JlbWVudCIsInJpZ2h0SW5jcmVtZW50IiwibWluIiwic2Nyb2xsQ29udGVudFdpZHRoIiwidGFiRGltZW5zaW9ucyIsInJlbGF0aXZlUm9vdExlZnQiLCJyZWxhdGl2ZVJvb3RSaWdodCIsInJlbGF0aXZlUm9vdERlbHRhIiwibGVmdEVkZ2VJc0Nsb3NlciIsInJpZ2h0RWRnZUlzQ2xvc2VyIiwicm9vdERlbHRhIiwiaGFzIiwiZ2V0IiwiZmluZEFkamFjZW50VGFiSW5kZXhDbG9zZXN0VG9FZGdlXyIsInNjcm9sbEluY3JlbWVudCIsImNhbGN1bGF0ZVNjcm9sbEluY3JlbWVudF8iLCJzY3JvbGxXaWR0aCIsImZpbmRBZGphY2VudFRhYkluZGV4Q2xvc2VzdFRvRWRnZVJUTF8iLCJjYWxjdWxhdGVTY3JvbGxJbmNyZW1lbnRSVExfIiwiQU5JTUFUSU5HIiwiU0NST0xMX1RFU1QiLCJTQ1JPTExfQVJFQV9TQ1JPTEwiLCJBUkVBX1NFTEVDVE9SIiwiTURDVGFiU2Nyb2xsZXJBZGFwdGVyIiwiZXZ0VGFyZ2V0Iiwic2VsZWN0b3IiLCJwcm9wTmFtZSIsInByb3BlcnR5TmFtZSIsInNjcm9sbExlZnQiLCJNRENUYWJTY3JvbGxlclJUTCIsInRyYW5zbGF0ZVgiLCJNRENUYWJTY3JvbGxlclJUTERlZmF1bHQiLCJjdXJyZW50U2Nyb2xsTGVmdCIsImdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0IiwiY2FsY3VsYXRlU2Nyb2xsRWRnZXNfIiwicmlnaHQiLCJlZGdlcyIsImNsYW1wZWRTY3JvbGxMZWZ0IiwiY2xhbXBTY3JvbGxWYWx1ZV8iLCJmaW5hbFNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsRGVsdGEiLCJnZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGgiLCJnZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgiLCJNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlIiwiTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlIiwiTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uIiwiZXZlbnRUYXJnZXRNYXRjaGVzU2VsZWN0b3IiLCJhZGRTY3JvbGxBcmVhQ2xhc3MiLCJzZXRTY3JvbGxBcmVhU3R5bGVQcm9wZXJ0eSIsInNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5IiwiZ2V0U2Nyb2xsQ29udGVudFN0eWxlVmFsdWUiLCJzZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCIsImNvbXB1dGVTY3JvbGxBcmVhQ2xpZW50UmVjdCIsImNvbXB1dGVTY3JvbGxDb250ZW50Q2xpZW50UmVjdCIsImNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0IiwiaXNBbmltYXRpbmdfIiwicnRsU2Nyb2xsZXJJbnN0YW5jZV8iLCJob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0IiwiY29tcHV0ZUN1cnJlbnRTY3JvbGxQb3NpdGlvblJUTF8iLCJjdXJyZW50VHJhbnNsYXRlWCIsImNhbGN1bGF0ZUN1cnJlbnRUcmFuc2xhdGVYXyIsInN0b3BTY3JvbGxBbmltYXRpb25fIiwiaW5jcmVtZW50U2Nyb2xsUlRMXyIsImluY3JlbWVudFNjcm9sbF8iLCJzY3JvbGxUb1JUTF8iLCJzY3JvbGxUb18iLCJydGxTY3JvbGxlckZhY3RvcnlfIiwidHJhbnNmb3JtVmFsdWUiLCJyZXN1bHRzIiwiZXhlYyIsInBhcnRzIiwicGFyc2VGbG9hdCIsImdldFJUTFNjcm9sbGVyIiwiZ2V0U2Nyb2xsUG9zaXRpb25SVEwiLCJjdXJyZW50U2Nyb2xsWCIsInNhZmVTY3JvbGxYIiwiYW5pbWF0ZV8iLCJhbmltYXRpb24iLCJzY3JvbGxUb1JUTCIsInRhcmdldFNjcm9sbFgiLCJpbmNyZW1lbnRTY3JvbGxSVEwiLCJjdXJyZW50U2Nyb2xsUG9zaXRpb24iLCJnZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbl8iLCJnZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbiIsImluaXRpYWxTY3JvbGxMZWZ0IiwibmV3U2Nyb2xsTGVmdCIsInJvb3RDbGllbnRSZWN0IiwiY29udGVudENsaWVudFJlY3QiLCJyaWdodEVkZ2VEZWx0YSIsImhvcml6b250YWxTY3JvbGxiYXJIZWlnaHRfIiwiZG9jdW1lbnRPYmoiLCJzaG91bGRDYWNoZVJlc3VsdCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsInJlbW92ZUNoaWxkIiwiZmlsdGVyIiwicCIsInBvcCIsIk1EQ1RhYkluZGljYXRvckFkYXB0ZXIiLCJGQURFIiwiTk9fVFJBTlNJVElPTiIsIk1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24iLCJjb21wdXRlQ29udGVudENsaWVudFJlY3QiLCJzZXRDb250ZW50U3R5bGVQcm9wZXJ0eSIsIk1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIiwiY3VycmVudENsaWVudFJlY3QiLCJ3aWR0aERlbHRhIiwieFBvc2l0aW9uIiwibWRjVGFiIiwibWRjVGFiQmFyIiwibWRjVGFiU2Nyb2xsZXIiLCJtZGNUYWJJbmRpY2F0b3IiLCJtZGNUYWJSaXBwbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtFQUMvQjtFQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztFQUNBLE1BQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0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
