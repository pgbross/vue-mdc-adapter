/**
* @module vue-mdc-adapter 0.19.0-beta
* @exports VueMDCAdapter
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueMDCAdapter = factory());
}(this, function () { 'use strict';

  var supportsPassive_;
  /**
   * Determine whether the current browser supports passive event listeners, and if so, use them.
   * @param {!Window=} globalObj
   * @param {boolean=} forceRefresh
   * @return {boolean|{passive: boolean}}
   */

  function applyPassive() {
    var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (supportsPassive_ === undefined || forceRefresh) {
      var isSupported = false;

      try {
        globalObj.document.addEventListener('test', null, {
          get passive() {
            isSupported = {
              passive: true
            };
          }

        });
      } catch (e) {//empty
      }

      supportsPassive_ = isSupported;
    }

    return supportsPassive_;
  }

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

  var CustomButton = {
    name: 'custom-button',
    functional: true,
    props: {
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
        data.attrs.role = 'button';

        if (data.on.click) {
          data.nativeOn = {
            click: data.on.click
          };
        }
      } else if (data.attrs && data.attrs.href) {
        // href case
        element = 'a';
        data.attrs.role = 'button';
      } else {
        // button fallback
        element = 'button';
      }

      return h(element, data, context.children);
    }
  };
  var CustomButtonMixin = {
    props: {
      href: String,
      disabled: Boolean,
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
      CustomButton: CustomButton
    }
  };

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

  var DispatchFocusMixin = {
    data: function data() {
      return {
        hasFocus: false
      };
    },
    methods: {
      onMouseDown: function onMouseDown() {
        this._active = true;
      },
      onMouseUp: function onMouseUp() {
        this._active = false;
      },
      onFocusEvent: function onFocusEvent() {
        var _this = this;

        // dispatch async to let time to other focus event to propagate
        setTimeout(function () {
          return _this.dispatchFocusEvent();
        }, 0);
      },
      onBlurEvent: function onBlurEvent() {
        var _this2 = this;

        // dispatch async to let time to other focus event to propagate
        // also filtur blur if mousedown
        this._active || setTimeout(function () {
          return _this2.dispatchFocusEvent();
        }, 0);
      },
      dispatchFocusEvent: function dispatchFocusEvent() {
        var hasFocus = this.$el === document.activeElement || this.$el.contains(document.activeElement);

        if (hasFocus != this.hasFocus) {
          this.$emit(hasFocus ? 'focus' : 'blur');
          this.hasFocus = hasFocus;
        }
      }
    },
    mounted: function mounted() {
      this.$el.addEventListener('focusin', this.onFocusEvent);
      this.$el.addEventListener('focusout', this.onBlurEvent);
      this.$el.addEventListener('mousedown', this.onMouseDown);
      this.$el.addEventListener('mouseup', this.onMouseUp);
    },
    beforeDestroy: function beforeDestroy() {
      this.$el.removeEventListener('focusin', this.onFocusEvent);
      this.$el.removeEventListener('focusout', this.onBlurEvent);
      this.$el.removeEventListener('mousedown', this.onMouseDown);
      this.$el.removeEventListener('mouseup', this.onMouseUp);
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
  var strings = {
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
        return strings;
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

        var strings$$1 = MDCRippleFoundation.strings;
        Object.keys(strings$$1).forEach(function (k) {
          if (k.indexOf('VAR_') === 0) {
            _this8.adapter_.updateCssVariable(strings$$1[k], null);
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
    

    
    var mdcRipple = normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  var VueMDCRipple = BasePlugin({
    mdcRipple: mdcRipple
  });

  //
  var script$1 = {
    name: 'mdc-button-base',
    mixins: [DispatchEventMixin, CustomButtonMixin, RippleMixin],
    data: function data() {
      return {
        classes: {},
        styles: {}
      };
    }
  };

  /* script */
  const __vue_script__$1 = script$1;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$1.__file = "/ddata/extra/vma/components/button/mdc-button-base.vue";

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "custom-button",
      _vm._g(
        {
          ref: "root",
          class: _vm.classes,
          style: _vm.styles,
          attrs: { href: _vm.href, link: _vm.link, disabled: _vm.disabled }
        },
        _vm.listeners
      ),
      [_c("span", { staticClass: "mdc-button__label" }, [_vm._t("default")], 2)]
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
    

    
    var mdcButtonBase = normalizeComponent(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      undefined,
      undefined
    );

  var script$2 = {
    name: 'mdc-button',
    extends: mdcButtonBase,
    props: {
      raised: Boolean,
      unelevated: Boolean,
      outlined: Boolean,
      dense: Boolean
    },
    data: function data() {
      return {
        classes: {
          'mdc-button': true,
          'mdc-button--raised': this.raised,
          'mdc-button--unelevated': this.unelevated,
          'mdc-button--outlined': this.outlined,
          'mdc-button--dense': this.dense
        }
      };
    },
    watch: {
      raised: function raised() {
        this.$set(this.classes, 'mdc-button--raised', this.raised);
      },
      unelevated: function unelevated() {
        this.$set(this.classes, 'mdc-button--unelevated', this.unelevated);
      },
      outlined: function outlined() {
        this.$set(this.classes, 'mdc-button--outlined', this.outlined);
      },
      dense: function dense() {
        this.$set(this.classes, 'mdc-button--dense', this.dense);
      }
    }
  };

  /* script */
  const __vue_script__$2 = script$2;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$2.__file = "/ddata/extra/vma/components/button/mdc-button.vue";

  /* template */

    /* style */
    const __vue_inject_styles__$2 = undefined;
    /* scoped */
    const __vue_scope_id__$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = undefined;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcButton = normalizeComponent(
      {},
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      undefined,
      undefined
    );

  var VueMDCButton = BasePlugin({
    mdcButton: mdcButton
  });

  //
  //
  //
  //
  //
  //
  //
  //
  var script$3 = {
    name: 'mdc-card',
    props: {
      outlined: Boolean
    }
  };

  /* script */
  const __vue_script__$3 = script$3;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$3.__file = "/ddata/extra/vma/components/card/mdc-card.vue";

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mdc-card", class: { "mdc-card--outlined": _vm.outlined } },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

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
    

    
    var mdcCard = normalizeComponent(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
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
    name: 'mdc-card-primary-action',
    mixins: [DispatchEventMixin, CustomLinkMixin, RippleMixin],
    data: function data() {
      return {
        classes: {},
        styles: {}
      };
    }
  };

  /* script */
  const __vue_script__$4 = script$4;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$4.__file = "/ddata/extra/vma/components/card/mdc-card-primary-action.vue";

  /* template */
  var __vue_render__$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "custom-link",
      _vm._g(
        {
          staticClass: "mdc-card-primary-action mdc-card__primary-action",
          class: _vm.classes,
          style: _vm.styles,
          attrs: { link: _vm.link }
        },
        _vm.listeners
      ),
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;

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
    

    
    var mdcCardPrimaryAction = normalizeComponent(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
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
  //
  //
  var script$5 = {
    name: 'mdc-card-media',
    props: {
      src: String,
      square: Boolean
    },
    computed: {
      styles: function styles() {
        var styles = {
          backgroundImage: "url(".concat(this.src, ")")
        };
        return styles;
      },
      classes: function classes() {
        return this.square ? 'mdc-card__media--square' : 'mdc-card__media--16-9';
      }
    }
  };

  /* script */
  const __vue_script__$5 = script$5;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$5.__file = "/ddata/extra/vma/components/card/mdc-card-media.vue";

  /* template */
  var __vue_render__$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "section",
      {
        staticClass: "mdc-card-media mdc-card__media",
        class: _vm.classes,
        style: _vm.styles
      },
      [
        _vm.$slots.default
          ? _c(
              "div",
              { staticClass: "mdc-card__media-content" },
              [_vm._t("default")],
              2
            )
          : _vm._e()
      ]
    )
  };
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

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
    

    
    var mdcCardMedia = normalizeComponent(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
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
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$6 = {
    name: 'mdc-card-header',
    props: {
      title: String,
      subtitle: String,
      'large-title': {
        type: Boolean,
        default: true
      }
    }
  };

  /* script */
  const __vue_script__$6 = script$6;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$6.__file = "/ddata/extra/vma/components/card/mdc-card-header.vue";

  /* template */
  var __vue_render__$5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "section",
      { staticClass: "mdc-card-header mdc-card__primary" },
      [
        _vm._t("default", [
          _vm.title
            ? _c(
                "h1",
                {
                  staticClass: "mdc-card__title",
                  class: { "mdc-card__title--large": _vm.largeTitle }
                },
                [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.subtitle
            ? _c("h2", { staticClass: "mdc-card__subtitle" }, [
                _vm._v("\n      " + _vm._s(_vm.subtitle) + " \n    ")
              ])
            : _vm._e()
        ])
      ],
      2
    )
  };
  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;

    /* style */
    const __vue_inject_styles__$6 = undefined;
    /* scoped */
    const __vue_scope_id__$6 = undefined;
    /* module identifier */
    const __vue_module_identifier__$6 = undefined;
    /* functional template */
    const __vue_is_functional_template__$6 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcCardHeader = normalizeComponent(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$6,
      __vue_script__$6,
      __vue_scope_id__$6,
      __vue_is_functional_template__$6,
      __vue_module_identifier__$6,
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
  var script$7 = {
    name: 'mdc-card-title',
    props: {
      large: Boolean
    }
  };

  /* script */
  const __vue_script__$7 = script$7;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$7.__file = "/ddata/extra/vma/components/card/mdc-card-title.vue";

  /* template */
  var __vue_render__$6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "h1",
      {
        staticClass: "mdc-card-title mdc-card__title",
        class: { "mdc-card__title--large": _vm.large }
      },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$6 = [];
  __vue_render__$6._withStripped = true;

    /* style */
    const __vue_inject_styles__$7 = undefined;
    /* scoped */
    const __vue_scope_id__$7 = undefined;
    /* module identifier */
    const __vue_module_identifier__$7 = undefined;
    /* functional template */
    const __vue_is_functional_template__$7 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcCardTitle = normalizeComponent(
      { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
      __vue_inject_styles__$7,
      __vue_script__$7,
      __vue_scope_id__$7,
      __vue_is_functional_template__$7,
      __vue_module_identifier__$7,
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
  var script$8 = {
    name: 'mdc-card-subtitle'
  };

  /* script */
  const __vue_script__$8 = script$8;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$8.__file = "/ddata/extra/vma/components/card/mdc-card-subtitle.vue";

  /* template */
  var __vue_render__$7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "h2",
      { staticClass: "mdc-card-subtitle mdc-card__subtitle" },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$7 = [];
  __vue_render__$7._withStripped = true;

    /* style */
    const __vue_inject_styles__$8 = undefined;
    /* scoped */
    const __vue_scope_id__$8 = undefined;
    /* module identifier */
    const __vue_module_identifier__$8 = undefined;
    /* functional template */
    const __vue_is_functional_template__$8 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcCardSubtitle = normalizeComponent(
      { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
      __vue_inject_styles__$8,
      __vue_script__$8,
      __vue_scope_id__$8,
      __vue_is_functional_template__$8,
      __vue_module_identifier__$8,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  var script$9 = {
    name: 'mdc-card-text'
  };

  /* script */
  const __vue_script__$9 = script$9;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$9.__file = "/ddata/extra/vma/components/card/mdc-card-text.vue";

  /* template */
  var __vue_render__$8 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "section",
      { staticClass: "mdc-card-text mdc-card__supporting-text" },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$8 = [];
  __vue_render__$8._withStripped = true;

    /* style */
    const __vue_inject_styles__$9 = undefined;
    /* scoped */
    const __vue_scope_id__$9 = undefined;
    /* module identifier */
    const __vue_module_identifier__$9 = undefined;
    /* functional template */
    const __vue_is_functional_template__$9 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcCardText = normalizeComponent(
      { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
      __vue_inject_styles__$9,
      __vue_script__$9,
      __vue_scope_id__$9,
      __vue_is_functional_template__$9,
      __vue_module_identifier__$9,
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
  var script$a = {
    name: 'mdc-card-actions',
    props: {
      fullBleed: Boolean
    },
    computed: {
      classes: function classes() {
        return {
          'mdc-card__actions--full-bleed': this.fullBleed
        };
      }
    }
  };

  /* script */
  const __vue_script__$a = script$a;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$a.__file = "/ddata/extra/vma/components/card/mdc-card-actions.vue";

  /* template */
  var __vue_render__$9 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "section",
      { staticClass: "mdc-card-actions mdc-card__actions", class: _vm.classes },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$9 = [];
  __vue_render__$9._withStripped = true;

    /* style */
    const __vue_inject_styles__$a = undefined;
    /* scoped */
    const __vue_scope_id__$a = undefined;
    /* module identifier */
    const __vue_module_identifier__$a = undefined;
    /* functional template */
    const __vue_is_functional_template__$a = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcCardActions = normalizeComponent(
      { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
      __vue_inject_styles__$a,
      __vue_script__$a,
      __vue_scope_id__$a,
      __vue_is_functional_template__$a,
      __vue_module_identifier__$a,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  var script$b = {
    name: 'mdc-card-action-buttons'
  };

  /* script */
  const __vue_script__$b = script$b;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$b.__file = "/ddata/extra/vma/components/card/mdc-card-action-buttons.vue";

  /* template */
  var __vue_render__$a = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mdc-card-action-buttons mdc-card__action-buttons" },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$a = [];
  __vue_render__$a._withStripped = true;

    /* style */
    const __vue_inject_styles__$b = undefined;
    /* scoped */
    const __vue_scope_id__$b = undefined;
    /* module identifier */
    const __vue_module_identifier__$b = undefined;
    /* functional template */
    const __vue_is_functional_template__$b = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcCardActionButtons = normalizeComponent(
      { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
      __vue_inject_styles__$b,
      __vue_script__$b,
      __vue_scope_id__$b,
      __vue_is_functional_template__$b,
      __vue_module_identifier__$b,
      undefined,
      undefined
    );

  var script$c = {
    name: 'mdc-card-action-button',
    extends: mdcButtonBase,
    data: function data() {
      return {
        classes: {
          'mdc-button': true,
          'mdc-card__action': true,
          'mdc-card-action-button': true
        }
      };
    }
  };

  /* script */
  const __vue_script__$c = script$c;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$c.__file = "/ddata/extra/vma/components/card/mdc-card-action-button.vue";

  /* template */

    /* style */
    const __vue_inject_styles__$c = undefined;
    /* scoped */
    const __vue_scope_id__$c = undefined;
    /* module identifier */
    const __vue_module_identifier__$c = undefined;
    /* functional template */
    const __vue_is_functional_template__$c = undefined;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcCardActionButton = normalizeComponent(
      {},
      __vue_inject_styles__$c,
      __vue_script__$c,
      __vue_scope_id__$c,
      __vue_is_functional_template__$c,
      __vue_module_identifier__$c,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  var script$d = {
    name: 'mdc-card-action-icons'
  };

  /* script */
  const __vue_script__$d = script$d;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$d.__file = "/ddata/extra/vma/components/card/mdc-card-action-icons.vue";

  /* template */
  var __vue_render__$b = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mdc-card-action-icons mdc-card__action-icons" },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$b = [];
  __vue_render__$b._withStripped = true;

    /* style */
    const __vue_inject_styles__$d = undefined;
    /* scoped */
    const __vue_scope_id__$d = undefined;
    /* module identifier */
    const __vue_module_identifier__$d = undefined;
    /* functional template */
    const __vue_is_functional_template__$d = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcCardActionIcons = normalizeComponent(
      { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
      __vue_inject_styles__$d,
      __vue_script__$d,
      __vue_scope_id__$d,
      __vue_is_functional_template__$d,
      __vue_module_identifier__$d,
      undefined,
      undefined
    );

  //
  var script$e = {
    name: 'mdc-card-action-icon',
    mixins: [DispatchEventMixin],
    props: {
      icon: String
    },
    data: function data() {
      return {
        classes: {
          'mdc-card-action-icon': true,
          'material-icons': !!this.icon,
          'mdc-card__action': true,
          'mdc-card__action--icon': true,
          'mdc-icon-toggle': true
        },
        styles: {}
      };
    },
    watch: {
      icon: function icon() {
        this.$set(this.classes, 'material-icons', !!this.icon);
      }
    },
    mounted: function mounted() {
      this.ripple = new RippleBase(this, {
        isUnbounded: function isUnbounded() {
          return true;
        }
      });
      this.ripple.init();
    },
    beforeDestroy: function beforeDestroy() {
      this.ripple.destroy();
    }
  };

  /* script */
  const __vue_script__$e = script$e;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$e.__file = "/ddata/extra/vma/components/card/mdc-card-action-icon.vue";

  /* template */
  var __vue_render__$c = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "span",
      _vm._g({ class: _vm.classes, style: _vm.styles }, _vm.listeners),
      [_vm._t("default", [_vm._v(_vm._s(_vm.icon))])],
      2
    )
  };
  var __vue_staticRenderFns__$c = [];
  __vue_render__$c._withStripped = true;

    /* style */
    const __vue_inject_styles__$e = undefined;
    /* scoped */
    const __vue_scope_id__$e = undefined;
    /* module identifier */
    const __vue_module_identifier__$e = undefined;
    /* functional template */
    const __vue_is_functional_template__$e = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcCardActionIcon = normalizeComponent(
      { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
      __vue_inject_styles__$e,
      __vue_script__$e,
      __vue_scope_id__$e,
      __vue_is_functional_template__$e,
      __vue_module_identifier__$e,
      undefined,
      undefined
    );

  var VueMDCCard = BasePlugin({
    mdcCard: mdcCard,
    mdcCardPrimaryAction: mdcCardPrimaryAction,
    mdcCardMedia: mdcCardMedia,
    mdcCardHeader: mdcCardHeader,
    mdcCardTitle: mdcCardTitle,
    mdcCardSubtitle: mdcCardSubtitle,
    mdcCardText: mdcCardText,
    mdcCardActions: mdcCardActions,
    mdcCardActionButtons: mdcCardActionButtons,
    mdcCardActionButton: mdcCardActionButton,
    mdcCardActionIcons: mdcCardActionIcons,
    mdcCardActionIcon: mdcCardActionIcon
  });

  /**
   * @record
   */

  var MDCSelectionControl =
  /*#__PURE__*/
  function () {
    function MDCSelectionControl() {
      _classCallCheck(this, MDCSelectionControl);
    }

    _createClass(MDCSelectionControl, [{
      key: "ripple",

      /** @return {?MDCRipple} */
      get: function get() {}
    }]);

    return MDCSelectionControl;
  }();

  /* eslint no-unused-vars: [2, {"args": "none"}] */

  /**
   * Adapter for MDC Checkbox. Provides an interface for managing
   * - classes
   * - dom
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

  var MDCCheckboxAdapter =
  /*#__PURE__*/
  function () {
    function MDCCheckboxAdapter() {
      _classCallCheck(this, MDCCheckboxAdapter);
    }

    _createClass(MDCCheckboxAdapter, [{
      key: "addClass",

      /** @param {string} className */
      value: function addClass(className) {}
      /** @param {string} className */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}
      /**
       * Sets an attribute with a given value on the input element.
       * @param {string} attr
       * @param {string} value
       */

    }, {
      key: "setNativeControlAttr",
      value: function setNativeControlAttr(attr, value) {}
      /**
       * Removes an attribute from the input element.
       * @param {string} attr
       */

    }, {
      key: "removeNativeControlAttr",
      value: function removeNativeControlAttr(attr) {}
    }, {
      key: "forceLayout",
      value: function forceLayout() {}
      /** @return {boolean} */

    }, {
      key: "isAttachedToDOM",
      value: function isAttachedToDOM() {}
      /** @return {boolean} */

    }, {
      key: "isIndeterminate",
      value: function isIndeterminate() {}
      /** @return {boolean} */

    }, {
      key: "isChecked",
      value: function isChecked() {}
      /** @return {boolean} */

    }, {
      key: "hasNativeControl",
      value: function hasNativeControl() {}
      /** @param {boolean} disabled */

    }, {
      key: "setNativeControlDisabled",
      value: function setNativeControlDisabled(disabled) {}
    }]);

    return MDCCheckboxAdapter;
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

  /** @const {string} */
  var ROOT = 'mdc-checkbox';
  /** @enum {string} */

  var cssClasses$2 = {
    UPGRADED: 'mdc-checkbox--upgraded',
    CHECKED: 'mdc-checkbox--checked',
    INDETERMINATE: 'mdc-checkbox--indeterminate',
    DISABLED: 'mdc-checkbox--disabled',
    ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
    ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
    ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
    ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
    ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
    ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked'
  };
  /** @enum {string} */

  var strings$1 = {
    NATIVE_CONTROL_SELECTOR: ".".concat(ROOT, "__native-control"),
    TRANSITION_STATE_INIT: 'init',
    TRANSITION_STATE_CHECKED: 'checked',
    TRANSITION_STATE_UNCHECKED: 'unchecked',
    TRANSITION_STATE_INDETERMINATE: 'indeterminate',
    ARIA_CHECKED_ATTR: 'aria-checked',
    ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed'
  };
  /** @enum {number} */

  var numbers$1 = {
    ANIM_END_LATCH_MS: 250
  };

  /**
   * @extends {MDCFoundation<!MDCCheckboxAdapter>}
   */

  var MDCCheckboxFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCCheckboxFoundation, _MDCFoundation);

    _createClass(MDCCheckboxFoundation, null, [{
      key: "cssClasses",

      /** @return enum {cssClasses} */
      get: function get() {
        return cssClasses$2;
      }
      /** @return enum {strings} */

    }, {
      key: "strings",
      get: function get() {
        return strings$1;
      }
      /** @return enum {numbers} */

    }, {
      key: "numbers",
      get: function get() {
        return numbers$1;
      }
      /** @return {!MDCCheckboxAdapter} */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCCheckboxAdapter} */
          {
            addClass: function addClass()
            /* className: string */
            {},
            removeClass: function removeClass()
            /* className: string */
            {},
            setNativeControlAttr: function setNativeControlAttr()
            /* attr: string, value: string */
            {},
            removeNativeControlAttr: function removeNativeControlAttr()
            /* attr: string */
            {},
            forceLayout: function forceLayout() {},
            isAttachedToDOM: function isAttachedToDOM()
            /* boolean */
            {},
            isIndeterminate: function isIndeterminate()
            /* boolean */
            {},
            isChecked: function isChecked()
            /* boolean */
            {},
            hasNativeControl: function hasNativeControl()
            /* boolean */
            {},
            setNativeControlDisabled: function setNativeControlDisabled()
            /* disabled: boolean */
            {}
          }
        );
      }
    }]);

    function MDCCheckboxFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCCheckboxFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCCheckboxFoundation).call(this, _extends(MDCCheckboxFoundation.defaultAdapter, adapter)));
      /** @private {string} */

      _this.currentCheckState_ = strings$1.TRANSITION_STATE_INIT;
      /** @private {string} */

      _this.currentAnimationClass_ = '';
      /** @private {number} */

      _this.animEndLatchTimer_ = 0;
      /** @private {boolean} */

      _this.enableAnimationEndHandler_ = false;
      return _this;
    }
    /** @override */


    _createClass(MDCCheckboxFoundation, [{
      key: "init",
      value: function init() {
        this.currentCheckState_ = this.determineCheckState_();
        this.updateAriaChecked_();
        this.adapter_.addClass(cssClasses$2.UPGRADED);
      }
      /** @override */

    }, {
      key: "destroy",
      value: function destroy() {
        clearTimeout(this.animEndLatchTimer_);
      }
      /** @param {boolean} disabled */

    }, {
      key: "setDisabled",
      value: function setDisabled(disabled) {
        this.adapter_.setNativeControlDisabled(disabled);

        if (disabled) {
          this.adapter_.addClass(cssClasses$2.DISABLED);
        } else {
          this.adapter_.removeClass(cssClasses$2.DISABLED);
        }
      }
      /**
       * Handles the animationend event for the checkbox
       */

    }, {
      key: "handleAnimationEnd",
      value: function handleAnimationEnd() {
        var _this2 = this;

        if (!this.enableAnimationEndHandler_) return;
        clearTimeout(this.animEndLatchTimer_);
        this.animEndLatchTimer_ = setTimeout(function () {
          _this2.adapter_.removeClass(_this2.currentAnimationClass_);

          _this2.enableAnimationEndHandler_ = false;
        }, numbers$1.ANIM_END_LATCH_MS);
      }
      /**
       * Handles the change event for the checkbox
       */

    }, {
      key: "handleChange",
      value: function handleChange() {
        this.transitionCheckState_();
      }
      /** @private */

    }, {
      key: "transitionCheckState_",
      value: function transitionCheckState_() {
        if (!this.adapter_.hasNativeControl()) {
          return;
        }

        var oldState = this.currentCheckState_;
        var newState = this.determineCheckState_();

        if (oldState === newState) {
          return;
        }

        this.updateAriaChecked_(); // Check to ensure that there isn't a previously existing animation class, in case for example
        // the user interacted with the checkbox before the animation was finished.

        if (this.currentAnimationClass_.length > 0) {
          clearTimeout(this.animEndLatchTimer_);
          this.adapter_.forceLayout();
          this.adapter_.removeClass(this.currentAnimationClass_);
        }

        this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
        this.currentCheckState_ = newState; // Check for parentNode so that animations are only run when the element is attached
        // to the DOM.

        if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
          this.adapter_.addClass(this.currentAnimationClass_);
          this.enableAnimationEndHandler_ = true;
        }
      }
      /**
       * @return {string}
       * @private
       */

    }, {
      key: "determineCheckState_",
      value: function determineCheckState_() {
        var TRANSITION_STATE_INDETERMINATE = strings$1.TRANSITION_STATE_INDETERMINATE,
            TRANSITION_STATE_CHECKED = strings$1.TRANSITION_STATE_CHECKED,
            TRANSITION_STATE_UNCHECKED = strings$1.TRANSITION_STATE_UNCHECKED;

        if (this.adapter_.isIndeterminate()) {
          return TRANSITION_STATE_INDETERMINATE;
        }

        return this.adapter_.isChecked() ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
      }
      /**
       * @param {string} oldState
       * @param {string} newState
       * @return {string}
       */

    }, {
      key: "getTransitionAnimationClass_",
      value: function getTransitionAnimationClass_(oldState, newState) {
        var TRANSITION_STATE_INIT = strings$1.TRANSITION_STATE_INIT,
            TRANSITION_STATE_CHECKED = strings$1.TRANSITION_STATE_CHECKED,
            TRANSITION_STATE_UNCHECKED = strings$1.TRANSITION_STATE_UNCHECKED;
        var _MDCCheckboxFoundatio = MDCCheckboxFoundation.cssClasses,
            ANIM_UNCHECKED_CHECKED = _MDCCheckboxFoundatio.ANIM_UNCHECKED_CHECKED,
            ANIM_UNCHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_UNCHECKED_INDETERMINATE,
            ANIM_CHECKED_UNCHECKED = _MDCCheckboxFoundatio.ANIM_CHECKED_UNCHECKED,
            ANIM_CHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_CHECKED_INDETERMINATE,
            ANIM_INDETERMINATE_CHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_CHECKED,
            ANIM_INDETERMINATE_UNCHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_UNCHECKED;

        switch (oldState) {
          case TRANSITION_STATE_INIT:
            if (newState === TRANSITION_STATE_UNCHECKED) {
              return '';
            }

          // fallthrough

          case TRANSITION_STATE_UNCHECKED:
            return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;

          case TRANSITION_STATE_CHECKED:
            return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
          // TRANSITION_STATE_INDETERMINATE

          default:
            return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
        }
      }
    }, {
      key: "updateAriaChecked_",
      value: function updateAriaChecked_() {
        // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
        if (this.adapter_.isIndeterminate()) {
          this.adapter_.setNativeControlAttr(strings$1.ARIA_CHECKED_ATTR, strings$1.ARIA_CHECKED_INDETERMINATE_VALUE);
        } else {
          // The on/off state does not need to keep track of aria-checked, since
          // the screenreader uses the checked property on the checkbox element.
          this.adapter_.removeNativeControlAttr(strings$1.ARIA_CHECKED_ATTR);
        }
      }
    }]);

    return MDCCheckboxFoundation;
  }(MDCFoundation);

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
   * Adapter for MDC Form Field. Provides an interface for managing
   * - event handlers
   * - ripple activation
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
  var MDCFormFieldAdapter =
  /*#__PURE__*/
  function () {
    function MDCFormFieldAdapter() {
      _classCallCheck(this, MDCFormFieldAdapter);
    }

    _createClass(MDCFormFieldAdapter, [{
      key: "registerInteractionHandler",

      /**
       * @param {string} type
       * @param {!EventListener} handler
       */
      value: function registerInteractionHandler(type, handler) {}
      /**
       * @param {string} type
       * @param {!EventListener} handler
       */

    }, {
      key: "deregisterInteractionHandler",
      value: function deregisterInteractionHandler(type, handler) {}
    }, {
      key: "activateInputRipple",
      value: function activateInputRipple() {}
    }, {
      key: "deactivateInputRipple",
      value: function deactivateInputRipple() {}
    }]);

    return MDCFormFieldAdapter;
  }();

  /**
   * @license
   * Copyright 2017 Google Inc.
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
    ROOT: 'mdc-form-field'
  };
  /** @enum {string} */

  var strings$2 = {
    LABEL_SELECTOR: '.mdc-form-field > label'
  };

  /**
   * @extends {MDCFoundation<!MDCFormFieldAdapter>}
   */

  var MDCFormFieldFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCFormFieldFoundation, _MDCFoundation);

    _createClass(MDCFormFieldFoundation, null, [{
      key: "cssClasses",

      /** @return enum {cssClasses} */
      get: function get() {
        return cssClasses$3;
      }
      /** @return enum {strings} */

    }, {
      key: "strings",
      get: function get() {
        return strings$2;
      }
      /** @return {!MDCFormFieldAdapter} */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return {
          registerInteractionHandler: function registerInteractionHandler()
          /* type: string, handler: EventListener */
          {},
          deregisterInteractionHandler: function deregisterInteractionHandler()
          /* type: string, handler: EventListener */
          {},
          activateInputRipple: function activateInputRipple() {},
          deactivateInputRipple: function deactivateInputRipple() {}
        };
      }
    }]);

    function MDCFormFieldFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCFormFieldFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCFormFieldFoundation).call(this, _extends(MDCFormFieldFoundation.defaultAdapter, adapter)));
      /** @private {!EventListener} */

      _this.clickHandler_ =
      /** @type {!EventListener} */
      function () {
        return _this.handleClick_();
      };

      return _this;
    }

    _createClass(MDCFormFieldFoundation, [{
      key: "init",
      value: function init() {
        this.adapter_.registerInteractionHandler('click', this.clickHandler_);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
      }
      /** @private */

    }, {
      key: "handleClick_",
      value: function handleClick_() {
        var _this2 = this;

        this.adapter_.activateInputRipple();
        requestAnimationFrame(function () {
          return _this2.adapter_.deactivateInputRipple();
        });
      }
    }]);

    return MDCFormFieldFoundation;
  }(MDCFoundation);

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
  /** @const {Object<string, !VendorPropertyMapType>} */

  var eventTypeMap = {
    'animationstart': {
      noPrefix: 'animationstart',
      webkitPrefix: 'webkitAnimationStart',
      styleProperty: 'animation'
    },
    'animationend': {
      noPrefix: 'animationend',
      webkitPrefix: 'webkitAnimationEnd',
      styleProperty: 'animation'
    },
    'animationiteration': {
      noPrefix: 'animationiteration',
      webkitPrefix: 'webkitAnimationIteration',
      styleProperty: 'animation'
    },
    'transitionend': {
      noPrefix: 'transitionend',
      webkitPrefix: 'webkitTransitionEnd',
      styleProperty: 'transition'
    }
  };
  /** @const {Object<string, !VendorPropertyMapType>} */

  var cssPropertyMap = {
    'animation': {
      noPrefix: 'animation',
      webkitPrefix: '-webkit-animation'
    },
    'transform': {
      noPrefix: 'transform',
      webkitPrefix: '-webkit-transform'
    },
    'transition': {
      noPrefix: 'transition',
      webkitPrefix: '-webkit-transition'
    }
  };
  /**
   * @param {!Object} windowObj
   * @return {boolean}
   */

  function hasProperShape(windowObj) {
    return windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function';
  }
  /**
   * @param {string} eventType
   * @return {boolean}
   */


  function eventFoundInMaps(eventType) {
    return eventType in eventTypeMap || eventType in cssPropertyMap;
  }
  /**
   * @param {string} eventType
   * @param {!Object<string, !VendorPropertyMapType>} map
   * @param {!Element} el
   * @return {string}
   */


  function getJavaScriptEventName(eventType, map, el) {
    return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }
  /**
   * Helper function to determine browser prefix for CSS3 animation events
   * and property names.
   * @param {!Object} windowObj
   * @param {string} eventType
   * @return {string}
   */


  function getAnimationName(windowObj, eventType) {
    if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
      return eventType;
    }

    var map =
    /** @type {!Object<string, !VendorPropertyMapType>} */
    eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
    var el = windowObj['document']['createElement']('div');
    var eventName = '';

    if (map === eventTypeMap) {
      eventName = getJavaScriptEventName(eventType, map, el);
    } else {
      eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
    }

    return eventName;
  } // Public functions to access getAnimationName() for JavaScript events or CSS
  // property names.


  var transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];
  /**
   * @param {!Object} windowObj
   * @param {string} eventType
   * @return {string}
   */

  function getCorrectEventName(windowObj, eventType) {
    return getAnimationName(windowObj, eventType);
  }
  /**
   * @param {!Object} windowObj
   * @param {string} eventType
   * @return {string}
   */


  function getCorrectPropertyName(windowObj, eventType) {
    return getAnimationName(windowObj, eventType);
  }

  //
  var CB_PROTO_PROPS = ['checked', 'indeterminate'];
  var script$f = {
    name: 'mdc-checkbox',
    mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      checked: [Boolean, Array],
      indeterminate: Boolean,
      disabled: Boolean,
      label: String,
      'align-end': Boolean,
      value: {
        type: [String, Number],
        default: function _default() {
          return 'on';
        }
      },
      name: String
    },
    data: function data() {
      return {
        styles: {},
        classes: {}
      };
    },
    computed: {
      hasLabel: function hasLabel() {
        return this.label || this.$slots.default;
      },
      formFieldClasses: function formFieldClasses() {
        return {
          'mdc-form-field': this.hasLabel,
          'mdc-form-field--align-end': this.hasLabel && this.alignEnd
        };
      }
    },
    watch: {
      checked: 'setChecked',
      disabled: function disabled(value) {
        this.foundation.setDisabled(value);
      },
      indeterminate: function indeterminate(value) {
        this.setIndeterminate(value);
      }
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCCheckboxFoundation({
        addClass: function addClass(className) {
          return _this.$set(_this.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this.$delete(_this.classes, className);
        },
        setNativeControlAttr: function setNativeControlAttr(attr, value) {
          _this.$refs.control.setAttribute(attr, value);
        },
        removeNativeControlAttr: function removeNativeControlAttr(attr) {
          _this.$refs.control.removeAttribute(attr);
        },
        // getNativeControl: () => this.$refs.control,
        isIndeterminate: function isIndeterminate() {
          return _this.$refs.control.indeterminate;
        },
        isChecked: function isChecked() {
          return _this.checked;
        },
        hasNativeControl: function hasNativeControl() {
          return !!_this.$refs.control;
        },
        setNativeControlDisabled: function setNativeControlDisabled(disabled) {
          return _this.$refs.control.disabled = disabled;
        },
        forceLayout: function forceLayout() {
          return _this.$refs.root.offsetWidth;
        },
        isAttachedToDOM: function isAttachedToDOM() {
          return Boolean(_this.$el.parentNode);
        }
      });

      this.handleAnimationEnd_ = function () {
        return _this.foundation.handleAnimationEnd();
      };

      this.$el.addEventListener(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
      this.installPropertyChangeHooks_();
      this.ripple = new RippleBase(this, {
        isUnbounded: function isUnbounded() {
          return true;
        },
        isSurfaceActive: function isSurfaceActive() {
          return RippleBase.isSurfaceActive(_this.$refs.control);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          _this.$refs.control.addEventListener(evt, handler, applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          _this.$refs.control.removeEventListener(evt, handler, applyPassive());
        },
        computeBoundingRect: function computeBoundingRect() {
          return _this.$refs.root.getBoundingClientRect();
        }
      });
      this.formField = new MDCFormFieldFoundation({
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          _this.$refs.label.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          _this.$refs.label.removeEventListener(type, handler);
        },
        activateInputRipple: function activateInputRipple() {
          _this.ripple && _this.ripple.activate();
        },
        deactivateInputRipple: function deactivateInputRipple() {
          _this.ripple && _this.ripple.deactivate();
        }
      });
      this.foundation.init();
      this.ripple.init();
      this.formField.init();
      this.setChecked(this.checked);
      this.foundation.setDisabled(this.disabled);
      this.setIndeterminate(this.indeterminate);
    },
    beforeDestroy: function beforeDestroy() {
      this.$el.removeEventListener(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
      this.formField.destroy();
      this.ripple.destroy();
      this.uninstallPropertyChangeHooks_();
      this.foundation.destroy();
    },
    methods: {
      setChecked: function setChecked(checked) {
        this.$refs.control.checked = Array.isArray(checked) ? checked.indexOf(this.value) > -1 : checked;
      },
      setIndeterminate: function setIndeterminate(indeterminate) {
        this.$refs.control.indeterminate = indeterminate;
      },
      onChange: function onChange() {
        this.$emit('update:indeterminate', this.indeterminate);
        var isChecked = this.$refs.control.checked;

        if (Array.isArray(this.checked)) {
          var idx = this.checked.indexOf(this.value);

          if (isChecked) {
            idx < 0 && this.$emit('change', this.checked.concat(this.value));
          } else {
            idx > -1 && this.$emit('change', this.checked.slice(0, idx).concat(this.checked.slice(idx + 1)));
          }
        } else {
          this.$emit('change', isChecked);
        }
      },
      installPropertyChangeHooks_: function installPropertyChangeHooks_() {
        var _this2 = this;

        var nativeCb = this.$refs.control;
        var cbProto = Object.getPrototypeOf(nativeCb);
        CB_PROTO_PROPS.forEach(function (controlState) {
          var desc = Object.getOwnPropertyDescriptor(cbProto, controlState); // We have to check for this descriptor, since some browsers (Safari) don't support its return.
          // See: https://bugs.webkit.org/show_bug.cgi?id=49739

          if (validDescriptor(desc)) {
            var nativeCbDesc =
            /** @type {!ObjectPropertyDescriptor} */
            {
              get: desc.get,
              set: function set(state) {
                desc.set.call(nativeCb, state);

                _this2.foundation.handleChange();
              },
              configurable: desc.configurable,
              enumerable: desc.enumerable
            };
            Object.defineProperty(nativeCb, controlState, nativeCbDesc);
          }
        });
      },
      uninstallPropertyChangeHooks_: function uninstallPropertyChangeHooks_() {
        var nativeCb = this.$refs.control;
        var cbProto = Object.getPrototypeOf(nativeCb);
        CB_PROTO_PROPS.forEach(function (controlState) {
          var desc =
          /** @type {!ObjectPropertyDescriptor} */
          Object.getOwnPropertyDescriptor(cbProto, controlState);

          if (validDescriptor(desc)) {
            Object.defineProperty(nativeCb, controlState, desc);
          }
        });
      }
    } // ===
    // Private functions
    // ===

  };

  function validDescriptor(inputPropDesc) {
    return !!inputPropDesc && typeof inputPropDesc.set === 'function';
  }

  /* script */
  const __vue_script__$f = script$f;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$f.__file = "/ddata/extra/vma/components/checkbox/mdc-checkbox.vue";

  /* template */
  var __vue_render__$d = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mdc-checkbox-wrapper", class: _vm.formFieldClasses },
      [
        _c(
          "div",
          {
            ref: "root",
            staticClass: "mdc-checkbox",
            class: _vm.classes,
            style: _vm.styles
          },
          [
            _c("input", {
              ref: "control",
              staticClass: "mdc-checkbox__native-control",
              attrs: { id: _vm.vma_uid_, name: _vm.name, type: "checkbox" },
              domProps: { value: _vm.value },
              on: { change: _vm.onChange }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "mdc-checkbox__background" }, [
              _c(
                "svg",
                {
                  staticClass: "mdc-checkbox__checkmark",
                  attrs: { viewBox: "0 0 24 24" }
                },
                [
                  _c("path", {
                    staticClass: "mdc-checkbox__checkmark-path",
                    attrs: {
                      fill: "none",
                      stroke: "white",
                      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mdc-checkbox__mixedmark" })
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "label",
          { ref: "label", attrs: { for: _vm.vma_uid_ } },
          [_vm._t("default", [_vm._v(_vm._s(_vm.label))])],
          2
        )
      ]
    )
  };
  var __vue_staticRenderFns__$d = [];
  __vue_render__$d._withStripped = true;

    /* style */
    const __vue_inject_styles__$f = undefined;
    /* scoped */
    const __vue_scope_id__$f = undefined;
    /* module identifier */
    const __vue_module_identifier__$f = undefined;
    /* functional template */
    const __vue_is_functional_template__$f = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcCheckbox = normalizeComponent(
      { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
      __vue_inject_styles__$f,
      __vue_script__$f,
      __vue_scope_id__$f,
      __vue_is_functional_template__$f,
      __vue_module_identifier__$f,
      undefined,
      undefined
    );

  var VueMDCCheckbox = BasePlugin({
    mdcCheckbox: mdcCheckbox
  });

  /**
   * @license
   * Copyright 2017 Google Inc.
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
   * Adapter for MDC Chip.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the Chip into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */
  var MDCChipAdapter =
  /*#__PURE__*/
  function () {
    function MDCChipAdapter() {
      _classCallCheck(this, MDCChipAdapter);
    }

    _createClass(MDCChipAdapter, [{
      key: "addClass",

      /**
       * Adds a class to the root element.
       * @param {string} className
       */
      value: function addClass(className) {}
      /**
       * Removes a class from the root element.
       * @param {string} className
       */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}
      /**
       * Returns true if the root element contains the given class.
       * @param {string} className
       * @return {boolean}
       */

    }, {
      key: "hasClass",
      value: function hasClass(className) {}
      /**
       * Adds a class to the leading icon element.
       * @param {string} className
       */

    }, {
      key: "addClassToLeadingIcon",
      value: function addClassToLeadingIcon(className) {}
      /**
       * Removes a class from the leading icon element.
       * @param {string} className
       */

    }, {
      key: "removeClassFromLeadingIcon",
      value: function removeClassFromLeadingIcon(className) {}
      /**
       * Returns true if target has className, false otherwise.
       * @param {!EventTarget} target
       * @param {string} className
       * @return {boolean}
       */

    }, {
      key: "eventTargetHasClass",
      value: function eventTargetHasClass(target, className) {}
      /**
       * Emits a custom "MDCChip:interaction" event denoting the chip has been
       * interacted with (typically on click or keydown).
       */

    }, {
      key: "notifyInteraction",
      value: function notifyInteraction() {}
      /**
       * Emits a custom "MDCChip:selection" event denoting the chip has been selected or deselected.
       * @param {boolean} selected
       */

    }, {
      key: "notifySelection",
      value: function notifySelection(selected) {}
      /**
       * Emits a custom "MDCChip:trailingIconInteraction" event denoting the trailing icon has been
       * interacted with (typically on click or keydown).
       */

    }, {
      key: "notifyTrailingIconInteraction",
      value: function notifyTrailingIconInteraction() {}
      /**
       * Emits a custom event "MDCChip:removal" denoting the chip will be removed.
       */

    }, {
      key: "notifyRemoval",
      value: function notifyRemoval() {}
      /**
       * Returns the computed property value of the given style property on the root element.
       * @param {string} propertyName
       * @return {string}
       */

    }, {
      key: "getComputedStyleValue",
      value: function getComputedStyleValue(propertyName) {}
      /**
       * Sets the property value of the given style property on the root element.
       * @param {string} propertyName
       * @param {string} value
       */

    }, {
      key: "setStyleProperty",
      value: function setStyleProperty(propertyName, value) {}
    }]);

    return MDCChipAdapter;
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
  var strings$3 = {
    ENTRY_ANIMATION_NAME: 'mdc-chip-entry',
    INTERACTION_EVENT: 'MDCChip:interaction',
    SELECTION_EVENT: 'MDCChip:selection',
    TRAILING_ICON_INTERACTION_EVENT: 'MDCChip:trailingIconInteraction',
    REMOVAL_EVENT: 'MDCChip:removal',
    CHECKMARK_SELECTOR: '.mdc-chip__checkmark',
    LEADING_ICON_SELECTOR: '.mdc-chip__icon--leading',
    TRAILING_ICON_SELECTOR: '.mdc-chip__icon--trailing'
  };
  /** @enum {string} */

  var cssClasses$4 = {
    CHECKMARK: 'mdc-chip__checkmark',
    CHIP_EXIT: 'mdc-chip--exit',
    HIDDEN_LEADING_ICON: 'mdc-chip__icon--leading-hidden',
    LEADING_ICON: 'mdc-chip__icon--leading',
    TRAILING_ICON: 'mdc-chip__icon--trailing',
    SELECTED: 'mdc-chip--selected'
  };

  /**
   * @extends {MDCFoundation<!MDCChipAdapter>}
   * @final
   */

  var MDCChipFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCChipFoundation, _MDCFoundation);

    _createClass(MDCChipFoundation, null, [{
      key: "strings",

      /** @return enum {string} */
      get: function get() {
        return strings$3;
      }
      /** @return enum {string} */

    }, {
      key: "cssClasses",
      get: function get() {
        return cssClasses$4;
      }
      /**
       * {@see MDCChipAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCChipAdapter}
       */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCChipAdapter} */
          {
            addClass: function addClass() {},
            removeClass: function removeClass() {},
            hasClass: function hasClass() {},
            addClassToLeadingIcon: function addClassToLeadingIcon() {},
            removeClassFromLeadingIcon: function removeClassFromLeadingIcon() {},
            eventTargetHasClass: function eventTargetHasClass() {},
            notifyInteraction: function notifyInteraction() {},
            notifySelection: function notifySelection() {},
            notifyTrailingIconInteraction: function notifyTrailingIconInteraction() {},
            notifyRemoval: function notifyRemoval() {},
            getComputedStyleValue: function getComputedStyleValue() {},
            setStyleProperty: function setStyleProperty() {}
          }
        );
      }
      /**
       * @param {!MDCChipAdapter} adapter
       */

    }]);

    function MDCChipFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCChipFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCChipFoundation).call(this, _extends(MDCChipFoundation.defaultAdapter, adapter)));
      /**
       * Whether a trailing icon click should immediately trigger exit/removal of the chip.
       * @private {boolean}
       * */

      _this.shouldRemoveOnTrailingIconClick_ = true;
      return _this;
    }
    /**
     * @return {boolean}
     */


    _createClass(MDCChipFoundation, [{
      key: "isSelected",
      value: function isSelected() {
        return this.adapter_.hasClass(cssClasses$4.SELECTED);
      }
      /**
       * @param {boolean} selected
       */

    }, {
      key: "setSelected",
      value: function setSelected(selected) {
        if (selected) {
          this.adapter_.addClass(cssClasses$4.SELECTED);
        } else {
          this.adapter_.removeClass(cssClasses$4.SELECTED);
        }

        this.adapter_.notifySelection(selected);
      }
      /**
       * @return {boolean}
       */

    }, {
      key: "getShouldRemoveOnTrailingIconClick",
      value: function getShouldRemoveOnTrailingIconClick() {
        return this.shouldRemoveOnTrailingIconClick_;
      }
      /**
       * @param {boolean} shouldRemove
       */

    }, {
      key: "setShouldRemoveOnTrailingIconClick",
      value: function setShouldRemoveOnTrailingIconClick(shouldRemove) {
        this.shouldRemoveOnTrailingIconClick_ = shouldRemove;
      }
      /**
       * Begins the exit animation which leads to removal of the chip.
       */

    }, {
      key: "beginExit",
      value: function beginExit() {
        this.adapter_.addClass(cssClasses$4.CHIP_EXIT);
      }
      /**
       * Handles an interaction event on the root element.
       * @param {!Event} evt
       */

    }, {
      key: "handleInteraction",
      value: function handleInteraction(evt) {
        if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
          this.adapter_.notifyInteraction();
        }
      }
      /**
       * Handles a transition end event on the root element.
       * @param {!Event} evt
       */

    }, {
      key: "handleTransitionEnd",
      value: function handleTransitionEnd(evt) {
        var _this2 = this;

        // Handle transition end event on the chip when it is about to be removed.
        if (this.adapter_.eventTargetHasClass(
        /** @type {!EventTarget} */
        evt.target, cssClasses$4.CHIP_EXIT)) {
          if (evt.propertyName === 'width') {
            this.adapter_.notifyRemoval();
          } else if (evt.propertyName === 'opacity') {
            // See: https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5
            var chipWidth = this.adapter_.getComputedStyleValue('width'); // On the next frame (once we get the computed width), explicitly set the chip's width
            // to its current pixel width, so we aren't transitioning out of 'auto'.

            requestAnimationFrame(function () {
              _this2.adapter_.setStyleProperty('width', chipWidth); // To mitigate jitter, start transitioning padding and margin before width.


              _this2.adapter_.setStyleProperty('padding', '0');

              _this2.adapter_.setStyleProperty('margin', '0'); // On the next frame (once width is explicitly set), transition width to 0.


              requestAnimationFrame(function () {
                _this2.adapter_.setStyleProperty('width', '0');
              });
            });
          }

          return;
        } // Handle a transition end event on the leading icon or checkmark, since the transition end event bubbles.


        if (evt.propertyName !== 'opacity') {
          return;
        }

        if (this.adapter_.eventTargetHasClass(
        /** @type {!EventTarget} */
        evt.target, cssClasses$4.LEADING_ICON) && this.adapter_.hasClass(cssClasses$4.SELECTED)) {
          this.adapter_.addClassToLeadingIcon(cssClasses$4.HIDDEN_LEADING_ICON);
        } else if (this.adapter_.eventTargetHasClass(
        /** @type {!EventTarget} */
        evt.target, cssClasses$4.CHECKMARK) && !this.adapter_.hasClass(cssClasses$4.SELECTED)) {
          this.adapter_.removeClassFromLeadingIcon(cssClasses$4.HIDDEN_LEADING_ICON);
        }
      }
      /**
       * Handles an interaction event on the trailing icon element. This is used to
       * prevent the ripple from activating on interaction with the trailing icon.
       * @param {!Event} evt
       */

    }, {
      key: "handleTrailingIconInteraction",
      value: function handleTrailingIconInteraction(evt) {
        evt.stopPropagation();

        if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
          this.adapter_.notifyTrailingIconInteraction();

          if (this.shouldRemoveOnTrailingIconClick_) {
            this.beginExit();
          }
        }
      }
    }]);

    return MDCChipFoundation;
  }(MDCFoundation);

  var script$g = {
    name: 'mdc-chip',
    mixins: [CustomLinkMixin],
    props: {
      leadingIcon: [String],
      trailingIcon: [String],
      leadingIconClasses: [Object],
      trailingIconClasses: [Object]
    },
    inject: ['mdcChipSet'],
    data: function data() {
      return {
        classes: {
          'mdc-chip': true
        },
        styles: {},
        id: ''
      };
    },
    computed: {
      selected: {
        get: function get() {
          return this.foundation.isSelected();
        },
        set: function set(nv) {
          this.foundation.setSelected(nv);
        }
      },
      isFilter: function isFilter() {
        return this.mdcChipSet && this.mdcChipSet.filter;
      },
      haveleadingIcon: function haveleadingIcon() {
        return !!this.leadingIcon || this.leadingIconClasses;
      },
      havetrailingIcon: function havetrailingIcon() {
        return !!this.trailingIcon || this.trailingIconClasses;
      },
      leadingClasses: function leadingClasses() {
        return _extends({}, {
          'material-icons': !!this.leadingIcon
        }, this.leadingIconClasses);
      },
      trailingClasses: function trailingClasses() {
        return _extends({}, {
          'material-icons': !!this.trailingIcon
        }, this.trailingIconClasses);
      }
    },
    created: function created() {
      this.id = this.mdcChipSet.nextId();
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCChipFoundation({
        addClass: function addClass(className) {
          return _this.$set(_this.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this.$delete(_this.classes, className);
        },
        hasClass: function hasClass(className) {
          return _this.$el.classList.contains(className);
        },
        addClassToLeadingIcon: function addClassToLeadingIcon(className) {
          if (_this.haveleadingIcon) {
            _this.$refs.leadingIcon.classList.add(className);
          }
        },
        removeClassFromLeadingIcon: function removeClassFromLeadingIcon(className) {
          if (_this.haveleadingIcon) {
            _this.$refs.leadingIcon.classList.remove(className);
          }
        },
        eventTargetHasClass: function eventTargetHasClass(target, className) {
          return target.classList.contains(className);
        },
        notifyInteraction: function notifyInteraction() {
          emitCustomEvent(_this.$el, MDCChipFoundation.strings.INTERACTION_EVENT, {
            chipId: _this.id
          }, true);
          _this.mdcChipSet && _this.mdcChipSet.handleInteraction;
        },
        notifySelection: function notifySelection(selected) {
          return emitCustomEvent(_this.$el, MDCChipFoundation.strings.SELECTION_EVENT, {
            chipId: _this.id,
            selected: selected
          }, true
          /* shouldBubble */
          );
        },
        notifyTrailingIconInteraction: function notifyTrailingIconInteraction() {
          emitCustomEvent(_this.$el, MDCChipFoundation.strings.TRAILING_ICON_INTERACTION_EVENT, {
            chipId: _this.id
          }, true);
        },
        notifyRemoval: function notifyRemoval() {
          emitCustomEvent(_this.$el, MDCChipFoundation.strings.REMOVAL_EVENT, {
            chipId: _this.id,
            root: _this.$el
          }, true);
        },
        getComputedStyleValue: function getComputedStyleValue(propertyName) {
          return window.getComputedStyle(_this.$el).getPropertyValue(propertyName);
        },
        setStyleProperty: function setStyleProperty(property, value) {
          return _this.$set(_this.styles, property, value);
        }
      });
      this.foundation.init();
      this.mdcChipSet.chips.push(this);
      this.ripple = new RippleBase(this);
      this.ripple.init();
    },
    beforeDestroy: function beforeDestroy() {
      this.ripple.destroy();
      this.foundation.destroy();
    },
    methods: {
      handleInteraction: function handleInteraction(evt) {
        this.foundation.handleInteraction(evt);
      },
      handleTransitionEnd: function handleTransitionEnd(evt) {
        this.foundation.handleTransitionEnd(evt);
      },
      handleTrailingIconInteraction: function handleTrailingIconInteraction(evt) {
        this.foundation.handleTrailingIconInteraction(evt);
      },
      toggleSelected: function toggleSelected() {
        this.foundation.toggleSelected();
      },
      isSelected: function isSelected() {
        return this.foundation.isSelected();
      }
    }
  };

  /* script */
  const __vue_script__$g = script$g;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$g.__file = "/ddata/extra/vma/components/chips/mdc-chip.vue";

  /* template */
  var __vue_render__$e = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        class: _vm.classes,
        style: _vm.styles,
        attrs: { id: _vm.id, tabindex: "0" },
        on: {
          click: _vm.handleInteraction,
          keydown: _vm.handleInteraction,
          transitionend: _vm.handleTransitionEnd
        }
      },
      [
        _vm.haveleadingIcon
          ? _c(
              "i",
              {
                ref: "leadingIcon",
                staticClass: "mdc-chip__icon mdc-chip__icon--leading",
                class: _vm.leadingClasses
              },
              [_vm._v(_vm._s(_vm.leadingIcon))]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.isFilter
          ? _c("div", { staticClass: "mdc-chip__checkmark" }, [
              _c(
                "svg",
                {
                  staticClass: "mdc-chip__checkmark-svg",
                  attrs: { viewBox: "-2 -3 30 30" }
                },
                [
                  _c("path", {
                    staticClass: "mdc-chip__checkmark-path",
                    attrs: {
                      fill: "none",
                      stroke: "black",
                      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
                    }
                  })
                ]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "mdc-chip__text" }, [_vm._t("default")], 2),
        _vm._v(" "),
        _vm.havetrailingIcon
          ? _c(
              "i",
              {
                ref: "trailingIcon",
                staticClass: "mdc-chip__icon mdc-chip__icon--trailing",
                class: _vm.trailingClasses,
                attrs: { tabindex: "0", role: "button" },
                on: {
                  click: _vm.handleTrailingIconInteraction,
                  keydown: _vm.handleTrailingIconInteraction
                }
              },
              [_vm._v(_vm._s(_vm.trailingIcon))]
            )
          : _vm._e()
      ]
    )
  };
  var __vue_staticRenderFns__$e = [];
  __vue_render__$e._withStripped = true;

    /* style */
    const __vue_inject_styles__$g = undefined;
    /* scoped */
    const __vue_scope_id__$g = undefined;
    /* module identifier */
    const __vue_module_identifier__$g = undefined;
    /* functional template */
    const __vue_is_functional_template__$g = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcChip = normalizeComponent(
      { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
      __vue_inject_styles__$g,
      __vue_script__$g,
      __vue_scope_id__$g,
      __vue_is_functional_template__$g,
      __vue_module_identifier__$g,
      undefined,
      undefined
    );

  /**
   * @license
   * Copyright 2017 Google Inc.
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
   * Adapter for MDC Chip Set.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the Chip Set into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */
  var MDCChipSetAdapter =
  /*#__PURE__*/
  function () {
    function MDCChipSetAdapter() {
      _classCallCheck(this, MDCChipSetAdapter);
    }

    _createClass(MDCChipSetAdapter, [{
      key: "hasClass",

      /**
       * Returns true if the root element contains the given class name.
       * @param {string} className
       * @return {boolean}
       */
      value: function hasClass(className) {}
      /**
       * Removes the chip with the given id from the chip set.
       * @param {string} chipId
       */

    }, {
      key: "removeChip",
      value: function removeChip(chipId) {}
      /**
       * Sets the selected state of the chip with the given id.
       * @param {string} chipId
       * @param {boolean} selected
       */

    }, {
      key: "setSelected",
      value: function setSelected(chipId, selected) {}
    }]);

    return MDCChipSetAdapter;
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
  var strings$4 = {
    CHIP_SELECTOR: '.mdc-chip'
  };
  /** @enum {string} */

  var cssClasses$5 = {
    CHOICE: 'mdc-chip-set--choice',
    FILTER: 'mdc-chip-set--filter'
  };

  /**
   * @extends {MDCFoundation<!MDCChipSetAdapter>}
   * @final
   */

  var MDCChipSetFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCChipSetFoundation, _MDCFoundation);

    _createClass(MDCChipSetFoundation, null, [{
      key: "strings",

      /** @return enum {string} */
      get: function get() {
        return strings$4;
      }
      /** @return enum {string} */

    }, {
      key: "cssClasses",
      get: function get() {
        return cssClasses$5;
      }
      /**
       * {@see MDCChipSetAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCChipSetAdapter}
       */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCChipSetAdapter} */
          {
            hasClass: function hasClass() {},
            removeChip: function removeChip() {},
            setSelected: function setSelected() {}
          }
        );
      }
      /**
       * @param {!MDCChipSetAdapter} adapter
       */

    }]);

    function MDCChipSetFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCChipSetFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCChipSetFoundation).call(this, _extends(MDCChipSetFoundation.defaultAdapter, adapter)));
      /**
       * The ids of the selected chips in the set. Only used for choice chip set or filter chip set.
       * @private {!Array<string>}
       */

      _this.selectedChipIds_ = [];
      return _this;
    }
    /**
     * Returns an array of the IDs of all selected chips.
     * @return {!Array<string>}
     */


    _createClass(MDCChipSetFoundation, [{
      key: "getSelectedChipIds",
      value: function getSelectedChipIds() {
        return this.selectedChipIds_;
      }
      /**
       * Toggles selection of the chip with the given id.
       * @private
       * @param {string} chipId
       */

    }, {
      key: "toggleSelect_",
      value: function toggleSelect_(chipId) {
        if (this.selectedChipIds_.indexOf(chipId) >= 0) {
          this.deselect_(chipId);
        } else {
          this.select(chipId);
        }
      }
      /**
       * Selects the chip with the given id. Deselects all other chips if the chip set is of the choice variant.
       * @param {string} chipId
       */

    }, {
      key: "select",
      value: function select(chipId) {
        if (this.selectedChipIds_.indexOf(chipId) >= 0) {
          return;
        }

        if (this.adapter_.hasClass(cssClasses$5.CHOICE) && this.selectedChipIds_.length > 0) {
          var previouslySelectedChip = this.selectedChipIds_[0];
          this.selectedChipIds_.length = 0;
          this.adapter_.setSelected(previouslySelectedChip, false);
        }

        this.selectedChipIds_.push(chipId);
        this.adapter_.setSelected(chipId, true);
      }
      /**
       * Deselects the chip with the given id.
       * @private
       * @param {string} chipId
       */

    }, {
      key: "deselect_",
      value: function deselect_(chipId) {
        var index = this.selectedChipIds_.indexOf(chipId);

        if (index >= 0) {
          this.selectedChipIds_.splice(index, 1);
          this.adapter_.setSelected(chipId, false);
        }
      }
      /**
       * Handles a chip interaction event
       * @param {string} chipId
       */

    }, {
      key: "handleChipInteraction",
      value: function handleChipInteraction(chipId) {
        if (this.adapter_.hasClass(cssClasses$5.CHOICE) || this.adapter_.hasClass(cssClasses$5.FILTER)) {
          this.toggleSelect_(chipId);
        }
      }
      /**
       * Handles a chip selection event, used to handle discrepancy when selection state is set directly on the Chip.
       * @param {string} chipId
       * @param {boolean} selected
       */

    }, {
      key: "handleChipSelection",
      value: function handleChipSelection(chipId, selected) {
        var chipIsSelected = this.selectedChipIds_.indexOf(chipId) >= 0;

        if (selected && !chipIsSelected) {
          this.select(chipId);
        } else if (!selected && chipIsSelected) {
          this.deselect_(chipId);
        }
      }
      /**
       * Handles the event when a chip is removed.
       * @param {string} chipId
       */

    }, {
      key: "handleChipRemoval",
      value: function handleChipRemoval(chipId) {
        this.deselect_(chipId);
        this.adapter_.removeChip(chipId);
      }
    }]);

    return MDCChipSetFoundation;
  }(MDCFoundation);

  var idCounter = 0;
  var script$h = {
    name: 'mdc-chip-set',
    props: {
      choice: [Boolean],
      filter: [Boolean],
      input: [Boolean]
    },
    provide: function provide() {
      return {
        mdcChipSet: this
      };
    },
    data: function data() {
      return {
        classes: {
          'mdc-chip-set': true,
          'mdc-chip-set--choice': this.choice,
          'mdc-chip-set--filter': this.filter,
          'mdc-chip-set--input': this.input
        },
        chips: []
      };
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCChipSetFoundation({
        hasClass: function hasClass(className) {
          return _this.$el.classList.contains(className);
        },
        removeChip: function removeChip(chipId) {
          var index = _this.findChipIndex(chipId);

          if (index > 0) {
            _this.$nextTick(function () {
              _this.chips.splice(index, 1);
            });
          }
        },
        setSelected: function setSelected(chipId, selected) {
          var index = _this.findChipIndex(chipId);

          if (index >= 0) {
            _this.chips[index].selected = selected;
          }
        }
      });
      this.foundation.init();
    },
    beforeDestroy: function beforeDestroy() {
      this.foundation.destroy();
    },
    methods: {
      nextId: function nextId() {
        return "mdc-chip-".concat(++idCounter);
      },
      findChipIndex: function findChipIndex(chipId) {
        for (var i = 0; i < this.chips.length; i++) {
          if (this.chips[i].id === chipId) {
            return i;
          }
        }

        return -1;
      },
      handleChipInteraction: function handleChipInteraction(evt) {
        this.foundation.handleChipInteraction(evt.detail.chipId);
      },
      handleChipRemoval: function handleChipRemoval(evt) {
        this.foundation.handleChipRemoval(evt.detail.chipId);
      },
      handleChipSelection: function handleChipSelection(evt) {
        this.foundation.handleChipSelection(evt.detail.chipId, evt.detail.selected);
      }
    },
    render: function render(h) {
      var _this2 = this,
          _on;

      return h('div', {
        class: this.classes,
        on: (_on = {}, _defineProperty(_on, MDCChipFoundation.strings.INTERACTION_EVENT, function (evt) {
          return _this2.handleChipInteraction(evt);
        }), _defineProperty(_on, MDCChipFoundation.strings.SELECTION_EVENT, function (evt) {
          return _this2.handleChipSelection(evt);
        }), _defineProperty(_on, MDCChipFoundation.strings.REMOVAL_EVENT, function (evt) {
          return _this2.handleChipRemoval(evt);
        }), _on)
      }, this.$slots.default);
    }
  };

  /* script */
  const __vue_script__$h = script$h;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$h.__file = "/ddata/extra/vma/components/chips/mdc-chip-set.vue";

  /* template */

    /* style */
    const __vue_inject_styles__$h = undefined;
    /* scoped */
    const __vue_scope_id__$h = undefined;
    /* module identifier */
    const __vue_module_identifier__$h = undefined;
    /* functional template */
    const __vue_is_functional_template__$h = undefined;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcChipSet = normalizeComponent(
      {},
      __vue_inject_styles__$h,
      __vue_script__$h,
      __vue_scope_id__$h,
      __vue_is_functional_template__$h,
      __vue_module_identifier__$h,
      undefined,
      undefined
    );

  var VueMDCChipSet = BasePlugin({
    mdcChip: mdcChip,
    mdcChipSet: mdcChipSet
  });

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
   * Adapter for MDC Dialog. Provides an interface for managing:
   * - CSS classes
   * - DOM
   * - Event handlers
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
  var MDCDialogAdapter =
  /*#__PURE__*/
  function () {
    function MDCDialogAdapter() {
      _classCallCheck(this, MDCDialogAdapter);
    }

    _createClass(MDCDialogAdapter, [{
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
      /** @param {string} className */

    }, {
      key: "addBodyClass",
      value: function addBodyClass(className) {}
      /** @param {string} className */

    }, {
      key: "removeBodyClass",
      value: function removeBodyClass(className) {}
      /**
       * @param {!EventTarget} target
       * @param {string} selector
       * @return {boolean}
       */

    }, {
      key: "eventTargetMatches",
      value: function eventTargetMatches(target, selector) {}
    }, {
      key: "trapFocus",
      value: function trapFocus() {}
    }, {
      key: "releaseFocus",
      value: function releaseFocus() {}
      /** @return {boolean} */

    }, {
      key: "isContentScrollable",
      value: function isContentScrollable() {}
      /** @return {boolean} */

    }, {
      key: "areButtonsStacked",
      value: function areButtonsStacked() {}
      /**
       * @param {!Event} event
       * @return {?string}
       */

    }, {
      key: "getActionFromEvent",
      value: function getActionFromEvent(event) {}
    }, {
      key: "clickDefaultButton",
      value: function clickDefaultButton() {}
    }, {
      key: "reverseButtons",
      value: function reverseButtons() {}
    }, {
      key: "notifyOpening",
      value: function notifyOpening() {}
    }, {
      key: "notifyOpened",
      value: function notifyOpened() {}
      /**
       * @param {string} action
       */

    }, {
      key: "notifyClosing",
      value: function notifyClosing(action) {}
      /**
       * @param {string} action
       */

    }, {
      key: "notifyClosed",
      value: function notifyClosed(action) {}
    }]);

    return MDCDialogAdapter;
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
  var cssClasses$6 = {
    OPEN: 'mdc-dialog--open',
    OPENING: 'mdc-dialog--opening',
    CLOSING: 'mdc-dialog--closing',
    SCROLLABLE: 'mdc-dialog--scrollable',
    STACKED: 'mdc-dialog--stacked',
    SCROLL_LOCK: 'mdc-dialog-scroll-lock'
  };
  var strings$5 = {
    SCRIM_SELECTOR: '.mdc-dialog__scrim',
    CONTAINER_SELECTOR: '.mdc-dialog__container',
    SURFACE_SELECTOR: '.mdc-dialog__surface',
    CONTENT_SELECTOR: '.mdc-dialog__content',
    BUTTON_SELECTOR: '.mdc-dialog__button',
    DEFAULT_BUTTON_SELECTOR: '.mdc-dialog__button--default',
    SUPPRESS_DEFAULT_PRESS_SELECTOR: ['textarea', '.mdc-menu .mdc-list-item'].join(', '),
    OPENING_EVENT: 'MDCDialog:opening',
    OPENED_EVENT: 'MDCDialog:opened',
    CLOSING_EVENT: 'MDCDialog:closing',
    CLOSED_EVENT: 'MDCDialog:closed',
    ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
    CLOSE_ACTION: 'close',
    DESTROY_ACTION: 'destroy'
  };
  var numbers$2 = {
    DIALOG_ANIMATION_OPEN_TIME_MS: 150,
    DIALOG_ANIMATION_CLOSE_TIME_MS: 75
  };

  var MDCDialogFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCDialogFoundation, _MDCFoundation);

    _createClass(MDCDialogFoundation, null, [{
      key: "cssClasses",
      get: function get() {
        return cssClasses$6;
      }
    }, {
      key: "strings",
      get: function get() {
        return strings$5;
      }
    }, {
      key: "numbers",
      get: function get() {
        return numbers$2;
      }
    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCDialogAdapter} */
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
            addBodyClass: function addBodyClass()
            /* className: string */
            {},
            removeBodyClass: function removeBodyClass()
            /* className: string */
            {},
            eventTargetMatches: function eventTargetMatches()
            /* target: !EventTarget, selector: string */
            {},
            trapFocus: function trapFocus() {},
            releaseFocus: function releaseFocus() {},
            isContentScrollable: function isContentScrollable() {},
            areButtonsStacked: function areButtonsStacked() {},
            getActionFromEvent: function getActionFromEvent()
            /* event: !Event */
            {},
            clickDefaultButton: function clickDefaultButton() {},
            reverseButtons: function reverseButtons() {},
            notifyOpening: function notifyOpening() {},
            notifyOpened: function notifyOpened() {},
            notifyClosing: function notifyClosing()
            /* action: ?string */
            {},
            notifyClosed: function notifyClosed()
            /* action: ?string */
            {}
          }
        );
      }
      /**
       * @param {!MDCDialogAdapter=} adapter
       */

    }]);

    function MDCDialogFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCDialogFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCDialogFoundation).call(this, _extends(MDCDialogFoundation.defaultAdapter, adapter)));
      /** @private {boolean} */

      _this.isOpen_ = false;
      /** @private {number} */

      _this.animationFrame_ = 0;
      /** @private {number} */

      _this.animationTimer_ = 0;
      /** @private {number} */

      _this.layoutFrame_ = 0;
      /** @private {string} */

      _this.escapeKeyAction_ = strings$5.CLOSE_ACTION;
      /** @private {string} */

      _this.scrimClickAction_ = strings$5.CLOSE_ACTION;
      /** @private {boolean} */

      _this.autoStackButtons_ = true;
      /** @private {boolean} */

      _this.areButtonsStacked_ = false;
      return _this;
    }

    _createClass(MDCDialogFoundation, [{
      key: "init",
      value: function init() {
        if (this.adapter_.hasClass(cssClasses$6.STACKED)) {
          this.setAutoStackButtons(false);
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.isOpen_) {
          this.close(strings$5.DESTROY_ACTION);
        }

        if (this.animationTimer_) {
          clearTimeout(this.animationTimer_);
          this.handleAnimationTimerEnd_();
        }

        if (this.layoutFrame_) {
          cancelAnimationFrame(this.layoutFrame_);
          this.layoutFrame_ = 0;
        }
      }
    }, {
      key: "open",
      value: function open() {
        var _this2 = this;

        this.isOpen_ = true;
        this.adapter_.notifyOpening();
        this.adapter_.addClass(cssClasses$6.OPENING); // Wait a frame once display is no longer "none", to establish basis for animation

        this.runNextAnimationFrame_(function () {
          _this2.adapter_.addClass(cssClasses$6.OPEN);

          _this2.adapter_.addBodyClass(cssClasses$6.SCROLL_LOCK);

          _this2.layout();

          _this2.animationTimer_ = setTimeout(function () {
            _this2.handleAnimationTimerEnd_();

            _this2.adapter_.trapFocus();

            _this2.adapter_.notifyOpened();
          }, numbers$2.DIALOG_ANIMATION_OPEN_TIME_MS);
        });
      }
      /**
       * @param {string=} action
       */

    }, {
      key: "close",
      value: function close() {
        var _this3 = this;

        var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (!this.isOpen_) {
          // Avoid redundant close calls (and events), e.g. from keydown on elements that inherently emit click
          return;
        }

        this.isOpen_ = false;
        this.adapter_.notifyClosing(action);
        this.adapter_.addClass(cssClasses$6.CLOSING);
        this.adapter_.removeClass(cssClasses$6.OPEN);
        this.adapter_.removeBodyClass(cssClasses$6.SCROLL_LOCK);
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = 0;
        clearTimeout(this.animationTimer_);
        this.animationTimer_ = setTimeout(function () {
          _this3.adapter_.releaseFocus();

          _this3.handleAnimationTimerEnd_();

          _this3.adapter_.notifyClosed(action);
        }, numbers$2.DIALOG_ANIMATION_CLOSE_TIME_MS);
      }
    }, {
      key: "isOpen",
      value: function isOpen() {
        return this.isOpen_;
      }
      /** @return {string} */

    }, {
      key: "getEscapeKeyAction",
      value: function getEscapeKeyAction() {
        return this.escapeKeyAction_;
      }
      /** @param {string} action */

    }, {
      key: "setEscapeKeyAction",
      value: function setEscapeKeyAction(action) {
        this.escapeKeyAction_ = action;
      }
      /** @return {string} */

    }, {
      key: "getScrimClickAction",
      value: function getScrimClickAction() {
        return this.scrimClickAction_;
      }
      /** @param {string} action */

    }, {
      key: "setScrimClickAction",
      value: function setScrimClickAction(action) {
        this.scrimClickAction_ = action;
      }
      /** @return {boolean} */

    }, {
      key: "getAutoStackButtons",
      value: function getAutoStackButtons() {
        return this.autoStackButtons_;
      }
      /** @param {boolean} autoStack */

    }, {
      key: "setAutoStackButtons",
      value: function setAutoStackButtons(autoStack) {
        this.autoStackButtons_ = autoStack;
      }
    }, {
      key: "layout",
      value: function layout() {
        var _this4 = this;

        if (this.layoutFrame_) {
          cancelAnimationFrame(this.layoutFrame_);
        }

        this.layoutFrame_ = requestAnimationFrame(function () {
          _this4.layoutInternal_();

          _this4.layoutFrame_ = 0;
        });
      }
    }, {
      key: "layoutInternal_",
      value: function layoutInternal_() {
        if (this.autoStackButtons_) {
          this.detectStackedButtons_();
        }

        this.detectScrollableContent_();
      }
      /** @private */

    }, {
      key: "detectStackedButtons_",
      value: function detectStackedButtons_() {
        // Remove the class first to let us measure the buttons' natural positions.
        this.adapter_.removeClass(cssClasses$6.STACKED);
        var areButtonsStacked = this.adapter_.areButtonsStacked();

        if (areButtonsStacked) {
          this.adapter_.addClass(cssClasses$6.STACKED);
        }

        if (areButtonsStacked !== this.areButtonsStacked_) {
          this.adapter_.reverseButtons();
          this.areButtonsStacked_ = areButtonsStacked;
        }
      }
      /** @private */

    }, {
      key: "detectScrollableContent_",
      value: function detectScrollableContent_() {
        // Remove the class first to let us measure the natural height of the content.
        this.adapter_.removeClass(cssClasses$6.SCROLLABLE);

        if (this.adapter_.isContentScrollable()) {
          this.adapter_.addClass(cssClasses$6.SCROLLABLE);
        }
      }
      /**
       * @param {!Event} evt
       * @private
       */

    }, {
      key: "handleInteraction",
      value: function handleInteraction(evt) {
        var isClick = evt.type === 'click';
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13; // Check for scrim click first since it doesn't require querying ancestors

        if (isClick && this.adapter_.eventTargetMatches(evt.target, strings$5.SCRIM_SELECTOR) && this.scrimClickAction_ !== '') {
          this.close(this.scrimClickAction_);
        } else if (isClick || evt.key === 'Space' || evt.keyCode === 32 || isEnter) {
          var action = this.adapter_.getActionFromEvent(evt);

          if (action) {
            this.close(action);
          } else if (isEnter && !this.adapter_.eventTargetMatches(evt.target, strings$5.SUPPRESS_DEFAULT_PRESS_SELECTOR)) {
            this.adapter_.clickDefaultButton();
          }
        }
      }
      /**
       * @param {!KeyboardEvent} evt
       * @private
       */

    }, {
      key: "handleDocumentKeydown",
      value: function handleDocumentKeydown(evt) {
        if ((evt.key === 'Escape' || evt.keyCode === 27) && this.escapeKeyAction_ !== '') {
          this.close(this.escapeKeyAction_);
        }
      }
      /** @private */

    }, {
      key: "handleAnimationTimerEnd_",
      value: function handleAnimationTimerEnd_() {
        this.animationTimer_ = 0;
        this.adapter_.removeClass(cssClasses$6.OPENING);
        this.adapter_.removeClass(cssClasses$6.CLOSING);
      }
      /**
       * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
       * @param {Function} callback
       * @private
       */

    }, {
      key: "runNextAnimationFrame_",
      value: function runNextAnimationFrame_(callback) {
        var _this5 = this;

        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = requestAnimationFrame(function () {
          _this5.animationFrame_ = 0;
          clearTimeout(_this5.animationTimer_);
          _this5.animationTimer_ = setTimeout(callback, 0);
        });
      }
    }]);

    return MDCDialogFoundation;
  }(MDCFoundation);

  var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
  var candidateSelector = candidateSelectors.join(',');
  var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

  function tabbable(el, options) {
    options = options || {};
    var elementDocument = el.ownerDocument || el;
    var regularTabbables = [];
    var orderedTabbables = [];
    var untouchabilityChecker = new UntouchabilityChecker(elementDocument);
    var candidates = el.querySelectorAll(candidateSelector);

    if (options.includeContainer) {
      if (matches.call(el, candidateSelector)) {
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
    if (matches.call(node, candidateSelector) === false) return false;
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
    if (matches.call(node, focusableCandidateSelector) === false) return false;
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
    if (node.nodeType !== Node.ELEMENT_NODE) return false; // Search for a cached result.

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
   * @param {!Element} surfaceEl
   * @param {?Element=} initialFocusEl
   * @param {function(!Element, !FocusTrapCreateOptions): !FocusTrapInstance} focusTrapFactory
   * @return {!FocusTrapInstance}
   */

  function createFocusTrapInstance(surfaceEl) {
    var focusTrapFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : focusTrap_1;
    var initialFocusEl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return focusTrapFactory(surfaceEl, {
      initialFocus: initialFocusEl,
      escapeDeactivates: false,
      // Dialog foundation handles escape key
      clickOutsideDeactivates: true // Allow handling of scrim clicks

    });
  }
  /**
   * @param {!Element} el
   * @return {boolean}
   */


  function isScrollable(el) {
    return el.scrollHeight > el.offsetHeight;
  }
  /**
   * @param {!Array<!Element>|!NodeList} els
   * @return {boolean}
   */


  function areTopsMisaligned(els) {
    var tops = new Set();
    [].forEach.call(els, function (el) {
      return tops.add(el.offsetTop);
    });
    return tops.size > 1;
  }

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
   * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
   * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
   */

  /**
   * @param {!Element} element
   * @param {string} selector
   * @return {?Element}
   */
  function closest(element, selector) {
    if (element.closest) {
      return element.closest(selector);
    }

    var el = element;

    while (el) {
      if (matches$1(el, selector)) {
        return el;
      }

      el = el.parentElement;
    }

    return null;
  }
  /**
   * @param {!Element} element
   * @param {string} selector
   * @return {boolean}
   */


  function matches$1(element, selector) {
    var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
  }

  var activeFocusTraps$1 = function () {
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

  function focusTrap$1(element, userOptions) {
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
      activeFocusTraps$1.deactivateTrap(trap);
      var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;

      if (onDeactivate) {
        onDeactivate();
      }

      var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;

      if (returnFocus) {
        delay$1(function () {
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

      activeFocusTraps$1.activateTrap(trap);
      updateTabbableNodes(); // Delay ensures that the focused element doesn't capture the event
      // that caused the focus trap activation.

      delay$1(function () {
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
      if (config.escapeDeactivates !== false && isEscapeEvent$1(e)) {
        e.preventDefault();
        deactivate();
        return;
      }

      if (isTabEvent$1(e)) {
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

      if (isSelectableInput$1(node)) {
        node.select();
      }
    }
  }

  function isSelectableInput$1(node) {
    return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
  }

  function isEscapeEvent$1(e) {
    return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
  }

  function isTabEvent$1(e) {
    return e.key === 'Tab' || e.keyCode === 9;
  }

  function delay$1(fn) {
    return setTimeout(fn, 0);
  }

  var focusTrap_1$1 = focusTrap$1;

  //
  var strings$6 = MDCDialogFoundation.strings;
  var script$i = {
    name: 'mdc-dialog',
    components: {
      mdcButton: mdcButton
    },
    mixins: [VMAUniqueIdMixin],
    model: {
      prop: 'open',
      event: 'change'
    },
    props: {
      title: {
        type: String
      },
      accept: {
        type: String,
        default: 'Ok'
      },
      acceptDisabled: Boolean,
      acceptRaised: {
        type: Boolean,
        default: false
      },
      cancel: {
        type: String
      },
      cancelRaised: {
        type: Boolean,
        default: false
      },
      accent: Boolean,
      scrollable: Boolean,
      open: Boolean
    },
    data: function data() {
      return {
        classes: {
          'mdc-theme--dark': this.dark
        },
        styles: {},
        surfaceClasses: {},
        bodyClasses: {
          'mdc-dialog__body--scrollable': this.scrollable
        }
      };
    },
    watch: {
      open: 'onOpen_'
    },
    mounted: function mounted() {
      var _this = this;

      if (this.accept) {
        this.focusTrap = createFocusTrapInstance(this.$refs.container, focusTrap_1$1);
      }

      this.buttons_ = [].slice.call(this.$el.querySelectorAll(strings$6.BUTTON_SELECTOR));
      this.foundation = new MDCDialogFoundation({
        addClass: function addClass(className) {
          return _this.$set(_this.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this.$delete(_this.classes, className);
        },
        hasClass: function hasClass(className) {
          return _this.$el.classList.contains(className);
        },
        addBodyClass: function addBodyClass(className) {
          return document.body.classList.add(className);
        },
        removeBodyClass: function removeBodyClass(className) {
          return document.body.classList.remove(className);
        },
        eventTargetMatches: function eventTargetMatches(target, selector) {
          return matches$1(target, selector);
        },
        trapFocus: function trapFocus() {
          return _this.focusTrap && _this.focusTrap.activate();
        },
        releaseFocus: function releaseFocus() {
          return _this.focusTrap && _this.focusTrap.deactivate();
        },
        isContentScrollable: function isContentScrollable() {
          return !!_this.$refs.content && isScrollable(_this.$refs.content);
        },
        areButtonsStacked: function areButtonsStacked() {
          return areTopsMisaligned(_this.buttons_);
        },
        getActionFromEvent: function getActionFromEvent(event) {
          var element = closest(event.target, "[".concat(strings$6.ACTION_ATTRIBUTE, "]"));
          return element && element.getAttribute(strings$6.ACTION_ATTRIBUTE);
        },
        clickDefaultButton: function clickDefaultButton() {
          if (_this.$refs.defaultButton) {
            _this.$refs.defaultButton.click();
          }
        },
        reverseButtons: function reverseButtons() {
          _this.buttons_.reverse();

          _this.buttons_.forEach(function (button) {
            return button.parentElement.appendChild(button);
          });
        },
        notifyOpening: function notifyOpening() {
          return _this.$emit(strings$6.OPENING_EVENT, {});
        },
        notifyOpened: function notifyOpened() {
          return _this.$emit(strings$6.OPENED_EVENT, {});
        },
        notifyClosing: function notifyClosing(action) {
          _this.$emit('change', false); // console.log(action)


          _this.$emit(strings$6.CLOSING_EVENT, action ? {
            action: action
          } : {});
        },
        notifyClosed: function notifyClosed(action) {
          return _this.$emit(strings$6.CLOSED_EVENT, action ? {
            action: action
          } : {});
        }
      });
      this.foundation.init();
      this.open && this.foundation.open();
    },
    beforeDestroy: function beforeDestroy() {
      this.foundation.destroy();
    },
    methods: {
      onOpen_: function onOpen_(value) {
        if (value) {
          this.foundation.open();
        } else {
          this.foundation.close();
        }
      },
      onClick: function onClick(event) {
        this.foundation.handleInteraction(event);
      },
      onCancel: function onCancel() {
        var _this2 = this;

        if (this.$listeners['validateCancel']) {
          this.$emit('validateCancel', {
            cancel: function cancel() {
              var notify = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

              // if notify = false, the dialog will close
              // but the notifyAccept method will not be called
              // so we need to notify listeners the open state
              // is changing.
              if (!notify) {
                _this2.$emit('change', false);
              }

              _this2.foundation.cancel(notify);
            }
          });
        } else {
          this.foundation.cancel(true);
        }
      },
      onAccept: function onAccept() {
        var _this3 = this;

        if (this.$listeners['validate']) {
          this.$emit('validate', {
            accept: function accept() {
              var notify = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

              // if notify = false, the dialog will close
              // but the notifyAccept method will not be called
              // so we need to notify listeners the open state
              // is changing.
              if (!notify) {
                _this3.$emit('change', false);
              }

              _this3.foundation.accept(notify);
            }
          });
        } else {
          this.foundation.accept(true);
        }
      },
      show: function show() {
        this.foundation.open();
      },
      close: function close() {
        this.foundation.close();
      }
    }
  };

  /* script */
  const __vue_script__$i = script$i;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$i.__file = "/ddata/extra/vma/components/dialog/mdc-dialog.vue";

  /* template */
  var __vue_render__$f = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        ref: "root",
        staticClass: "mdc-dialog",
        class: _vm.classes,
        style: _vm.styles,
        attrs: {
          "aria-modal": "true",
          "aria-labelledby": "label" + _vm.vma_uid_,
          "aria-describedby": "desc" + _vm.vma_uid_,
          role: "alertdialog"
        },
        on: { click: _vm.onClick, keydown: _vm.onClick }
      },
      [
        _c("div", { ref: "container", staticClass: "mdc-dialog__container" }, [
          _c(
            "div",
            {
              ref: "surface",
              staticClass: "mdc-dialog__surface",
              class: _vm.surfaceClasses
            },
            [
              _vm.title
                ? _c(
                    "h2",
                    {
                      staticClass: "mdc-dialog__title",
                      attrs: { id: "label" + _vm.vma_uid_ }
                    },
                    [_vm._v(_vm._s(_vm.title))]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  ref: "content",
                  staticClass: "mdc-dialog__content",
                  attrs: { id: "desc" + _vm.vma_uid_ }
                },
                [_vm._t("default")],
                2
              ),
              _vm._v(" "),
              _vm.accept || _vm.cancel
                ? _c("footer", { staticClass: "mdc-dialog__actions" }, [
                    _vm.cancel
                      ? _c(
                          "button",
                          {
                            staticClass: "mdc-button mdc-dialog__button",
                            attrs: {
                              type: "button",
                              "data-mdc-dialog-action": "no"
                            }
                          },
                          [
                            _vm._v(
                              "\n          " + _vm._s(_vm.cancel) + "\n        "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        ref: "defaultButton",
                        staticClass: "mdc-button mdc-dialog__button ",
                        attrs: {
                          type: "button",
                          disabled: _vm.acceptDisabled,
                          "data-mdc-dialog-action": "yes"
                        }
                      },
                      [_vm._v("\n          " + _vm._s(_vm.accept) + "\n        ")]
                    )
                  ])
                : _vm._e()
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mdc-dialog__scrim" })
      ]
    )
  };
  var __vue_staticRenderFns__$f = [];
  __vue_render__$f._withStripped = true;

    /* style */
    const __vue_inject_styles__$i = undefined;
    /* scoped */
    const __vue_scope_id__$i = undefined;
    /* module identifier */
    const __vue_module_identifier__$i = undefined;
    /* functional template */
    const __vue_is_functional_template__$i = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcDialog = normalizeComponent(
      { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
      __vue_inject_styles__$i,
      __vue_script__$i,
      __vue_scope_id__$i,
      __vue_is_functional_template__$i,
      __vue_module_identifier__$i,
      undefined,
      undefined
    );

  var VueMDCDialog = BasePlugin({
    mdcDialog: mdcDialog
  });

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

  /** @enum {string} */
  var cssClasses$7 = {
    ROOT: 'mdc-drawer',
    DISMISSIBLE: 'mdc-drawer--dismissible',
    MODAL: 'mdc-drawer--modal',
    OPEN: 'mdc-drawer--open',
    ANIMATE: 'mdc-drawer--animate',
    OPENING: 'mdc-drawer--opening',
    CLOSING: 'mdc-drawer--closing'
  };
  /** @enum {string} */

  var strings$7 = {
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
        return strings$7;
      }
      /** @return enum {string} */

    }, {
      key: "cssClasses",
      get: function get() {
        return cssClasses$7;
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

        this.adapter_.addClass(cssClasses$7.OPEN);
        this.adapter_.addClass(cssClasses$7.ANIMATE); // Wait a frame once display is no longer "none", to establish basis for animation

        this.runNextAnimationFrame_(function () {
          _this2.adapter_.addClass(cssClasses$7.OPENING);
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

        this.adapter_.addClass(cssClasses$7.CLOSING);
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
        return this.adapter_.hasClass(cssClasses$7.OPEN);
      }
      /**
       * Returns true if drawer is animating open.
       * @return {boolean}
       */

    }, {
      key: "isOpening",
      value: function isOpening() {
        return this.adapter_.hasClass(cssClasses$7.OPENING) || this.adapter_.hasClass(cssClasses$7.ANIMATE);
      }
      /**
       * Returns true if drawer is animating closed.
       * @return {boolean}
       */

    }, {
      key: "isClosing",
      value: function isClosing() {
        return this.adapter_.hasClass(cssClasses$7.CLOSING);
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
        var OPENING = cssClasses$7.OPENING,
            CLOSING = cssClasses$7.CLOSING,
            OPEN = cssClasses$7.OPEN,
            ANIMATE = cssClasses$7.ANIMATE,
            ROOT = cssClasses$7.ROOT; // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.

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
  var cssClasses$8 = {
    ROOT: 'mdc-list',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated'
  };
  /** @enum {string} */

  var strings$8 = {
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
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: ".".concat(cssClasses$8.LIST_ITEM_CLASS, " button:not(:disabled),\n  .").concat(cssClasses$8.LIST_ITEM_CLASS, " a"),
    FOCUSABLE_CHILD_ELEMENTS: ".".concat(cssClasses$8.LIST_ITEM_CLASS, " button:not(:disabled), .").concat(cssClasses$8.LIST_ITEM_CLASS, " a,\n  .").concat(cssClasses$8.LIST_ITEM_CLASS, " input[type=\"radio\"]:not(:disabled),\n  .").concat(cssClasses$8.LIST_ITEM_CLASS, " input[type=\"checkbox\"]:not(:disabled)"),
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
        return strings$8;
      }
      /** @return enum {string} */

    }, {
      key: "cssClasses",
      get: function get() {
        return cssClasses$8;
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
        var selectedClassName = cssClasses$8.LIST_ITEM_SELECTED_CLASS;

        if (this.useActivatedClass_) {
          selectedClassName = cssClasses$8.LIST_ITEM_ACTIVATED_CLASS;
        }

        if (this.selectedIndex_ >= 0 && this.selectedIndex_ !== index) {
          this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
          this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings$8.ARIA_SELECTED, 'false');
        }

        this.adapter_.addClassForElementIndex(index, selectedClassName);
        this.adapter_.setAttributeForElementIndex(index, strings$8.ARIA_SELECTED, 'true');
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
          this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings$8.ARIA_CHECKED, 'false');
        }

        this.adapter_.setAttributeForElementIndex(index, strings$8.ARIA_CHECKED, 'true');
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
          this.adapter_.setAttributeForElementIndex(i, strings$8.ARIA_CHECKED, isChecked ? 'true' : 'false');
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

        this.adapter_.setAttributeForElementIndex(index, strings$8.ARIA_CHECKED, isChecked ? 'true' : 'false'); // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.

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
        var direction = this.root_.getAttribute(strings$8.ARIA_ORIENTATION);
        this.vertical = direction !== strings$8.ARIA_ORIENTATION_HORIZONTAL; // List items need to have at least tabindex=-1 to be focusable.

        [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (ele) {
          ele.setAttribute('tabindex', -1);
        }); // Child button/a elements are not tabbable until the list item is focused.

        [].slice.call(this.root_.querySelectorAll(strings$8.FOCUSABLE_CHILD_ELEMENTS)).forEach(function (ele) {
          return ele.setAttribute('tabindex', -1);
        });
        this.foundation_.layout();
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

        while (!eventTarget.classList.contains(cssClasses$8.LIST_ITEM_CLASS) && !eventTarget.classList.contains(cssClasses$8.ROOT)) {
          eventTarget = eventTarget.parentElement;
        } // Get the index of the element if it is a list item.


        if (eventTarget.classList.contains(cssClasses$8.LIST_ITEM_CLASS)) {
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
          this.foundation_.handleKeydown(evt, evt.target.classList.contains(cssClasses$8.LIST_ITEM_CLASS), index);
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

        var toggleCheckbox = !matches$1(
        /** @type {!Element} */
        evt.target, strings$8.CHECKBOX_RADIO_SELECTOR);
        this.foundation_.handleClick(index, toggleCheckbox);
      }
      /**
       * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
       */

    }, {
      key: "initializeListType",
      value: function initializeListType() {
        var _this2 = this;

        var checkboxListItems = this.root_.querySelectorAll(strings$8.ARIA_ROLE_CHECKBOX_SELECTOR);
        var singleSelectedListItem = this.root_.querySelector(".".concat(cssClasses$8.LIST_ITEM_ACTIVATED_CLASS, ",\n        .").concat(cssClasses$8.LIST_ITEM_SELECTED_CLASS));
        var radioSelectedListItem = this.root_.querySelector(strings$8.ARIA_CHECKED_RADIO_SELECTOR);

        if (checkboxListItems.length) {
          var preselectedItems = this.root_.querySelectorAll(strings$8.ARIA_CHECKED_CHECKBOX_SELECTOR);
          this.selectedIndex = [].map.call(preselectedItems, function (listItem) {
            return _this2.listElements.indexOf(listItem);
          });
        } else if (singleSelectedListItem) {
          if (singleSelectedListItem.classList.contains(cssClasses$8.LIST_ITEM_ACTIVATED_CLASS)) {
            this.foundation_.setUseActivatedClass(true);
          }

          this.singleSelection = true;
          this.selectedIndex = this.listElements.indexOf(singleSelectedListItem);
        } else if (radioSelectedListItem) {
          this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
        }
      }
      /** @param {boolean} value */

    }, {
      key: "getDefaultFoundation",

      /** @return {!MDCListFoundation} */
      value: function getDefaultFoundation() {
        var _this3 = this;

        return new MDCListFoundation(
        /** @type {!MDCListAdapter} */
        _extends({
          getListItemCount: function getListItemCount() {
            return _this3.listElements.length;
          },
          getFocusedElementIndex: function getFocusedElementIndex() {
            return _this3.listElements.indexOf(document.activeElement);
          },
          setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
            var element = _this3.listElements[index];

            if (element) {
              element.setAttribute(attr, value);
            }
          },
          removeAttributeForElementIndex: function removeAttributeForElementIndex(index, attr) {
            var element = _this3.listElements[index];

            if (element) {
              element.removeAttribute(attr);
            }
          },
          addClassForElementIndex: function addClassForElementIndex(index, className) {
            var element = _this3.listElements[index];

            if (element) {
              element.classList.add(className);
            }
          },
          removeClassForElementIndex: function removeClassForElementIndex(index, className) {
            var element = _this3.listElements[index];

            if (element) {
              element.classList.remove(className);
            }
          },
          focusItemAtIndex: function focusItemAtIndex(index) {
            var element = _this3.listElements[index];

            if (element) {
              element.focus();
            }
          },
          setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
            var element = _this3.listElements[listItemIndex];
            var listItemChildren = [].slice.call(element.querySelectorAll(strings$8.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
            listItemChildren.forEach(function (ele) {
              return ele.setAttribute('tabindex', tabIndexValue);
            });
          },
          followHref: function followHref(index) {
            var listItem = _this3.listElements[index];

            if (listItem && listItem.href) {
              listItem.click();
            }
          },
          hasCheckboxAtIndex: function hasCheckboxAtIndex(index) {
            var listItem = _this3.listElements[index];
            return !!listItem.querySelector(strings$8.CHECKBOX_SELECTOR);
          },
          hasRadioAtIndex: function hasRadioAtIndex(index) {
            var listItem = _this3.listElements[index];
            return !!listItem.querySelector(strings$8.RADIO_SELECTOR);
          },
          isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
            var listItem = _this3.listElements[index];
            var toggleEl = listItem.querySelector(strings$8.CHECKBOX_SELECTOR);
            return toggleEl.checked;
          },
          setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
            var listItem = _this3.listElements[index];
            var toggleEl = listItem.querySelector(strings$8.CHECKBOX_RADIO_SELECTOR);
            toggleEl.checked = isChecked;
            var event = document.createEvent('Event');
            event.initEvent('change', true, true);
            toggleEl.dispatchEvent(event);
          },
          isFocusInsideList: function isFocusInsideList() {
            return _this3.root_.contains(document.activeElement);
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
        return [].slice.call(this.root_.querySelectorAll(strings$8.ENABLED_ITEMS_SELECTOR));
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
      /** @return {!Index} */

    }, {
      key: "selectedIndex",
      get: function get() {
        return this.foundation_.getSelectedIndex();
      }
      /** @param {!Index} index */
      ,
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
  var script$j = {
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
          this.focusTrap_ = createFocusTrapInstance$1(this.drawer_, this.focusTrapFactory_);
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

  function createFocusTrapInstance$1(surfaceEl) {
    var focusTrapFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : focusTrap_1$1;
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
  const __vue_script__$j = script$j;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$j.__file = "/ddata/extra/vma/components/drawer/mdc-drawer.vue";

  /* template */
  var __vue_render__$g = function() {
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
  var __vue_staticRenderFns__$g = [];
  __vue_render__$g._withStripped = true;

    /* style */
    const __vue_inject_styles__$j = undefined;
    /* scoped */
    const __vue_scope_id__$j = undefined;
    /* module identifier */
    const __vue_module_identifier__$j = undefined;
    /* functional template */
    const __vue_is_functional_template__$j = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcDrawer = normalizeComponent(
      { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
      __vue_inject_styles__$j,
      __vue_script__$j,
      __vue_scope_id__$j,
      __vue_is_functional_template__$j,
      __vue_module_identifier__$j,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  var script$k = {
    name: 'mdc-drawer-header'
  };

  /* script */
  const __vue_script__$k = script$k;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$k.__file = "/ddata/extra/vma/components/drawer/mdc-drawer-header.vue";

  /* template */
  var __vue_render__$h = function() {
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
  var __vue_staticRenderFns__$h = [];
  __vue_render__$h._withStripped = true;

    /* style */
    const __vue_inject_styles__$k = undefined;
    /* scoped */
    const __vue_scope_id__$k = undefined;
    /* module identifier */
    const __vue_module_identifier__$k = undefined;
    /* functional template */
    const __vue_is_functional_template__$k = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcDrawerHeader = normalizeComponent(
      { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
      __vue_inject_styles__$k,
      __vue_script__$k,
      __vue_scope_id__$k,
      __vue_is_functional_template__$k,
      __vue_module_identifier__$k,
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
  var script$l = {
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
  const __vue_script__$l = script$l;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$l.__file = "/ddata/extra/vma/components/drawer/mdc-drawer-list.vue";

  /* template */
  var __vue_render__$i = function() {
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
  var __vue_staticRenderFns__$i = [];
  __vue_render__$i._withStripped = true;

    /* style */
    const __vue_inject_styles__$l = undefined;
    /* scoped */
    const __vue_scope_id__$l = undefined;
    /* module identifier */
    const __vue_module_identifier__$l = undefined;
    /* functional template */
    const __vue_is_functional_template__$l = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcDrawerList = normalizeComponent(
      { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
      __vue_inject_styles__$l,
      __vue_script__$l,
      __vue_scope_id__$l,
      __vue_is_functional_template__$l,
      __vue_module_identifier__$l,
      undefined,
      undefined
    );

  var script$m = {
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
  const __vue_script__$m = script$m;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$m.__file = "/ddata/extra/vma/components/drawer/mdc-drawer-item.vue";

  /* template */
  var __vue_render__$j = function() {
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
  var __vue_staticRenderFns__$j = [];
  __vue_render__$j._withStripped = true;

    /* style */
    const __vue_inject_styles__$m = undefined;
    /* scoped */
    const __vue_scope_id__$m = undefined;
    /* module identifier */
    const __vue_module_identifier__$m = undefined;
    /* functional template */
    const __vue_is_functional_template__$m = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcDrawerItem = normalizeComponent(
      { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
      __vue_inject_styles__$m,
      __vue_script__$m,
      __vue_scope_id__$m,
      __vue_is_functional_template__$m,
      __vue_module_identifier__$m,
      undefined,
      undefined
    );

  //
  //
  //
  //
  var script$n = {
    name: 'mdc-drawer-divider'
  };

  /* script */
  const __vue_script__$n = script$n;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$n.__file = "/ddata/extra/vma/components/drawer/mdc-drawer-divider.vue";

  /* template */
  var __vue_render__$k = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("hr", { staticClass: "mdc-list-divider" })
  };
  var __vue_staticRenderFns__$k = [];
  __vue_render__$k._withStripped = true;

    /* style */
    const __vue_inject_styles__$n = undefined;
    /* scoped */
    const __vue_scope_id__$n = undefined;
    /* module identifier */
    const __vue_module_identifier__$n = undefined;
    /* functional template */
    const __vue_is_functional_template__$n = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcDrawerDivider = normalizeComponent(
      { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
      __vue_inject_styles__$n,
      __vue_script__$n,
      __vue_scope_id__$n,
      __vue_is_functional_template__$n,
      __vue_module_identifier__$n,
      undefined,
      undefined
    );

  var VueMDCDrawer = BasePlugin({
    mdcDrawer: mdcDrawer,
    mdcDrawerHeader: mdcDrawerHeader,
    mdcDrawerList: mdcDrawerList,
    mdcDrawerItem: mdcDrawerItem,
    mdcDrawerDivider: mdcDrawerDivider
  });

  //
  //
  //
  //
  //
  //
  //
  //
  var script$o = {
    name: 'mdc-elevation',
    props: {
      z: {
        type: [Number, String],
        default: function _default() {
          return 1;
        }
      }
    },
    data: function data() {
      var elevationClasses = {};
      elevationClasses["mdc-elevation--z".concat(this.z)] = true;
      return {
        classes: elevationClasses
      };
    }
  };

  /* script */
  const __vue_script__$o = script$o;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$o.__file = "/ddata/extra/vma/components/elevation/mdc-elevation.vue";

  /* template */
  var __vue_render__$l = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mdc-elevation", class: _vm.classes },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$l = [];
  __vue_render__$l._withStripped = true;

    /* style */
    const __vue_inject_styles__$o = undefined;
    /* scoped */
    const __vue_scope_id__$o = undefined;
    /* module identifier */
    const __vue_module_identifier__$o = undefined;
    /* functional template */
    const __vue_is_functional_template__$o = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcElevation = normalizeComponent(
      { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
      __vue_inject_styles__$o,
      __vue_script__$o,
      __vue_scope_id__$o,
      __vue_is_functional_template__$o,
      __vue_module_identifier__$o,
      undefined,
      undefined
    );

  var VueMDCElevation = BasePlugin({
    mdcElevation: mdcElevation
  });

  //
  var script$p = {
    name: 'mdc-fab',
    mixins: [DispatchEventMixin, CustomButtonMixin, RippleMixin],
    props: {
      icon: String,
      mini: Boolean,
      absolute: Boolean,
      fixed: Boolean
    },
    data: function data() {
      return {
        classes: {
          'material-icons': this.icon,
          'mdc-fab--mini': this.mini,
          'mdc-fab--absolute': this.absolute,
          'mdc-fab--fixed': this.fixed
        },
        styles: {}
      };
    },
    watch: {
      icon: function icon() {
        this.$set(this.classes, 'material-icons', this.icon);
      },
      mini: function mini() {
        this.$set(this.classes, 'mdc-fab--mini', this.mini);
      }
    }
  };

  /* script */
  const __vue_script__$p = script$p;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$p.__file = "/ddata/extra/vma/components/fab/mdc-fab.vue";

  /* template */
  var __vue_render__$m = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "custom-button",
      _vm._g(
        {
          staticClass: "mdc-fab",
          class: _vm.classes,
          style: _vm.styles,
          attrs: { href: _vm.href, link: _vm.link }
        },
        _vm.listeners
      ),
      [
        _c(
          "span",
          { staticClass: "mdc-fab__icon" },
          [_vm._t("default", [_vm._v(_vm._s(_vm.icon))])],
          2
        )
      ]
    )
  };
  var __vue_staticRenderFns__$m = [];
  __vue_render__$m._withStripped = true;

    /* style */
    const __vue_inject_styles__$p = undefined;
    /* scoped */
    const __vue_scope_id__$p = undefined;
    /* module identifier */
    const __vue_module_identifier__$p = undefined;
    /* functional template */
    const __vue_is_functional_template__$p = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcFAB = normalizeComponent(
      { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
      __vue_inject_styles__$p,
      __vue_script__$p,
      __vue_scope_id__$p,
      __vue_is_functional_template__$p,
      __vue_module_identifier__$p,
      undefined,
      undefined
    );

  var VueMDCFab = BasePlugin({
    mdcFAB: mdcFAB
  });

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
  var strings$9 = {
    TILES_SELECTOR: '.mdc-grid-list__tiles',
    TILE_SELECTOR: '.mdc-grid-tile'
  };

  var MDCGridListFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCGridListFoundation, _MDCFoundation);

    _createClass(MDCGridListFoundation, null, [{
      key: "strings",
      get: function get() {
        return strings$9;
      }
    }, {
      key: "defaultAdapter",
      get: function get() {
        return {
          getOffsetWidth: function getOffsetWidth() {
            return (
              /* number */
              0
            );
          },
          getNumberOfTiles: function getNumberOfTiles() {
            return (
              /* number */
              0
            );
          },
          getOffsetWidthForTileAtIndex: function getOffsetWidthForTileAtIndex() {
            return (
              /* index: number */

              /* number */
              0
            );
          },
          setStyleForTilesElement: function setStyleForTilesElement()
          /* property: string, value: string */
          {},
          registerResizeHandler: function registerResizeHandler()
          /* handler: EventListener */
          {},
          deregisterResizeHandler: function deregisterResizeHandler()
          /* handler: EventListener */
          {}
        };
      }
    }]);

    function MDCGridListFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCGridListFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCGridListFoundation).call(this, _extends(MDCGridListFoundation.defaultAdapter, adapter)));

      _this.resizeHandler_ = function () {
        return _this.alignCenter();
      };

      _this.resizeFrame_ = 0;
      return _this;
    }

    _createClass(MDCGridListFoundation, [{
      key: "init",
      value: function init() {
        this.alignCenter();
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      }
    }, {
      key: "alignCenter",
      value: function alignCenter() {
        var _this2 = this;

        if (this.resizeFrame_ !== 0) {
          cancelAnimationFrame(this.resizeFrame_);
        }

        this.resizeFrame_ = requestAnimationFrame(function () {
          _this2.alignCenter_();

          _this2.resizeFrame_ = 0;
        });
      }
    }, {
      key: "alignCenter_",
      value: function alignCenter_() {
        if (this.adapter_.getNumberOfTiles() == 0) {
          return;
        }

        var gridWidth = this.adapter_.getOffsetWidth();
        var itemWidth = this.adapter_.getOffsetWidthForTileAtIndex(0);
        var tilesWidth = itemWidth * Math.floor(gridWidth / itemWidth);
        this.adapter_.setStyleForTilesElement('width', "".concat(tilesWidth, "px"));
      }
    }]);

    return MDCGridListFoundation;
  }(MDCFoundation);

  //
  var script$q = {
    name: 'mdc-grid-list',
    props: {
      width: [String, Number],
      ratio: String,
      'narrow-gutter': Boolean,
      'header-caption': Boolean,
      'icon-align-start': Boolean,
      'icon-align-end': Boolean,
      'with-support-text': Boolean,
      interactive: Boolean
    },
    provide: function provide() {
      return {
        mdcGrid: this
      };
    },
    computed: {
      classes: function classes() {
        var classes = {};
        classes['mdc-grid-list--tile-gutter-1'] = this.narrowGutter;
        classes['mdc-grid-list--header-caption'] = this.headerCaption;
        classes["mdc-grid-list--tile-aspect-".concat(this.ratio)] = this.ratio;
        classes['mdc-grid-list--with-icon-align-start'] = this.iconAlignStart;
        classes['mdc-grid-list--with-icon-align-end'] = this.iconAlignEnd;
        classes['mdc-grid-list--twoline-caption'] = this.withSupportText;
        classes['mdc-grid-list--non-interactive'] = !this.interactive;
        return classes;
      },
      styles: function styles() {
        var defaultWidth = 200;
        return {
          '--mdc-grid-list-tile-width': "".concat(this.width || defaultWidth, "px")
        };
      }
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCGridListFoundation({
        getOffsetWidth: function getOffsetWidth() {
          return _this.$el.offsetWidth;
        },
        getNumberOfTiles: function getNumberOfTiles() {
          return _this.$el.querySelectorAll(MDCGridListFoundation.strings.TILE_SELECTOR).length;
        },
        getOffsetWidthForTileAtIndex: function getOffsetWidthForTileAtIndex(index) {
          return _this.$el.querySelectorAll(MDCGridListFoundation.strings.TILE_SELECTOR)[index].offsetWidth;
        },
        setStyleForTilesElement: function setStyleForTilesElement(property, value) {
          _this.$el.querySelector(MDCGridListFoundation.strings.TILES_SELECTOR).style[property] = value;
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          window.removeEventListener('resize', handler);
        }
      });
      this.foundation.init();
    },
    beforeDestroy: function beforeDestroy() {
      this.foundation.destroy();
    }
  };

  /* script */
  const __vue_script__$q = script$q;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$q.__file = "/ddata/extra/vma/components/grid-list/mdc-grid-list.vue";

  /* template */
  var __vue_render__$n = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "mdc-grid-list" }, [
      _c(
        "ul",
        {
          staticClass: "mdc-grid-list__tiles",
          class: _vm.classes,
          style: _vm.styles
        },
        [_vm._t("default")],
        2
      )
    ])
  };
  var __vue_staticRenderFns__$n = [];
  __vue_render__$n._withStripped = true;

    /* style */
    const __vue_inject_styles__$q = undefined;
    /* scoped */
    const __vue_scope_id__$q = undefined;
    /* module identifier */
    const __vue_module_identifier__$q = undefined;
    /* functional template */
    const __vue_is_functional_template__$q = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcGridList = normalizeComponent(
      { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
      __vue_inject_styles__$q,
      __vue_script__$q,
      __vue_scope_id__$q,
      __vue_is_functional_template__$q,
      __vue_module_identifier__$q,
      undefined,
      undefined
    );

  //
  var script$r = {
    name: 'mdc-grid-tile',
    inject: ['mdcGrid'],
    mixins: [DispatchEventMixin],
    props: {
      src: String,
      cover: Boolean,
      icon: String,
      title: String,
      'support-text': String,
      selected: Boolean,
      activated: Boolean
    },
    data: function data() {
      return {
        classes: {},
        styles: {}
      };
    },
    computed: {
      clickListener: function clickListener() {
        var _this = this;

        return {
          click: function click(e) {
            return _this.dispatchEvent(e);
          }
        };
      },
      itemClasses: function itemClasses() {
        return {
          'mdc-grid-tile--selected': this.selected,
          'mdc-grid-tile--activated': this.activated
        };
      },
      isInteractive: function isInteractive() {
        return this.mdcGrid && this.mdcGrid.interactive;
      },
      hasStartDetail: function hasStartDetail() {
        return this.startIcon || this.$slots['start-detail'];
      },
      hasEndDetail: function hasEndDetail() {
        return this.endIcon || this.$slots['end-detail'];
      }
    },
    watch: {
      isInteractive: function isInteractive(value) {
        if (value) {
          this.addRipple();
        } else {
          this.removeRipple();
        }
      }
    },
    mounted: function mounted() {
      this.isInteractive && this.addRipple();
    },
    beforeDestroy: function beforeDestroy() {
      this.removeRipple();
    },
    methods: {
      addRipple: function addRipple() {
        if (!this.ripple) {
          var ripple = new RippleBase(this);
          ripple.init();
          this.ripple = ripple;
        }
      },
      removeRipple: function removeRipple() {
        if (this.ripple) {
          var ripple = this.ripple;
          this.ripple = null;
          ripple.destroy();
        }
      }
    }
  };

  /* script */
  const __vue_script__$r = script$r;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$r.__file = "/ddata/extra/vma/components/grid-list/mdc-grid-tile.vue";

  /* template */
  var __vue_render__$o = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "li",
      _vm._g(
        {
          staticClass: "mdc-grid-tile",
          class: [_vm.classes, _vm.itemClasses],
          style: _vm.styles,
          attrs: { tabindex: _vm.isInteractive ? "0" : undefined }
        },
        _vm.isInteractive ? _vm.listeners : _vm.clickListener
      ),
      [
        _vm.cover
          ? _c("div", { staticClass: "mdc-grid-tile__primary" }, [
              _c("div", {
                staticClass: "mdc-grid-tile__primary-content",
                style: { backgroundImage: "url(" + _vm.src + ")" }
              })
            ])
          : _c("div", { staticClass: "mdc-grid-tile__primary" }, [
              _c("img", {
                staticClass: "mdc-grid-tile__primary-content",
                attrs: { src: _vm.src }
              })
            ]),
        _vm._v(" "),
        _vm.title || _vm.supportText
          ? _c("span", { staticClass: "mdc-grid-tile__secondary" }, [
              _vm.icon
                ? _c("i", { staticClass: "mdc-grid-tile__icon material-icons" }, [
                    _vm._v(_vm._s(_vm.icon))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.title
                ? _c("span", { staticClass: "mdc-grid-tile__title" }, [
                    _vm._v(_vm._s(_vm.title))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.supportText
                ? _c("span", { staticClass: "mdc-grid-tile__support-text" }, [
                    _vm._v(_vm._s(_vm.supportText))
                  ])
                : _vm._e()
            ])
          : _vm._e()
      ]
    )
  };
  var __vue_staticRenderFns__$o = [];
  __vue_render__$o._withStripped = true;

    /* style */
    const __vue_inject_styles__$r = undefined;
    /* scoped */
    const __vue_scope_id__$r = undefined;
    /* module identifier */
    const __vue_module_identifier__$r = undefined;
    /* functional template */
    const __vue_is_functional_template__$r = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcGridTile = normalizeComponent(
      { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
      __vue_inject_styles__$r,
      __vue_script__$r,
      __vue_scope_id__$r,
      __vue_is_functional_template__$r,
      __vue_module_identifier__$r,
      undefined,
      undefined
    );

  var VueMDCGridList = BasePlugin({
    mdcGridList: mdcGridList,
    mdcGridTile: mdcGridTile
  });

  //
  //
  //
  //
  //
  //
  //
  //
  var script$s = {
    name: 'mdc-icon',
    props: {
      icon: String
    }
  };

  /* script */
  const __vue_script__$s = script$s;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$s.__file = "/ddata/extra/vma/components/icon/mdc-icon.vue";

  /* template */
  var __vue_render__$p = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "span",
      {
        staticClass: "mdc-icon mdc-icon--material",
        class: { "material-icons": !!_vm.icon }
      },
      [_vm._t("default", [_vm._v(_vm._s(_vm.icon))])],
      2
    )
  };
  var __vue_staticRenderFns__$p = [];
  __vue_render__$p._withStripped = true;

    /* style */
    const __vue_inject_styles__$s = undefined;
    /* scoped */
    const __vue_scope_id__$s = undefined;
    /* module identifier */
    const __vue_module_identifier__$s = undefined;
    /* functional template */
    const __vue_is_functional_template__$s = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcIcon = normalizeComponent(
      { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
      __vue_inject_styles__$s,
      __vue_script__$s,
      __vue_scope_id__$s,
      __vue_is_functional_template__$s,
      __vue_module_identifier__$s,
      undefined,
      undefined
    );

  var VueMDCIcon = BasePlugin({
    mdcIcon: mdcIcon
  });

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
   * Adapter for MDC Icon Button Toggle. Provides an interface for managing
   * - classes
   * - dom
   * - inner text
   * - event handlers
   * - event dispatch
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
  var MDCIconButtonToggleAdapter =
  /*#__PURE__*/
  function () {
    function MDCIconButtonToggleAdapter() {
      _classCallCheck(this, MDCIconButtonToggleAdapter);
    }

    _createClass(MDCIconButtonToggleAdapter, [{
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
       * */

    }, {
      key: "hasClass",
      value: function hasClass(className) {}
      /**
       * @param {string} attrName
       * @param {string} attrValue
       */

    }, {
      key: "setAttr",
      value: function setAttr(attrName, attrValue) {}
      /** @param {!IconButtonToggleEvent} evtData */

    }, {
      key: "notifyChange",
      value: function notifyChange(evtData) {}
    }]);

    return MDCIconButtonToggleAdapter;
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
  var cssClasses$9 = {
    ROOT: 'mdc-icon-button',
    ICON_BUTTON_ON: 'mdc-icon-button--on'
  };
  /** @enum {string} */

  var strings$a = {
    ARIA_PRESSED: 'aria-pressed',
    CHANGE_EVENT: 'MDCIconButtonToggle:change'
  };

  /**
   * @extends {MDCFoundation<!MDCIconButtonToggleAdapter>}
   */

  var MDCIconButtonToggleFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCIconButtonToggleFoundation, _MDCFoundation);

    _createClass(MDCIconButtonToggleFoundation, null, [{
      key: "cssClasses",
      get: function get() {
        return cssClasses$9;
      }
    }, {
      key: "strings",
      get: function get() {
        return strings$a;
      }
    }, {
      key: "defaultAdapter",
      get: function get() {
        return {
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          setAttr: function setAttr() {},
          notifyChange: function notifyChange() {}
        };
      }
    }]);

    function MDCIconButtonToggleFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCIconButtonToggleFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCIconButtonToggleFoundation).call(this, _extends(MDCIconButtonToggleFoundation.defaultAdapter, adapter)));
      /** @private {boolean} */

      _this.disabled_ = false;
      return _this;
    }

    _createClass(MDCIconButtonToggleFoundation, [{
      key: "init",
      value: function init() {
        this.adapter_.setAttr(strings$a.ARIA_PRESSED, "".concat(this.isOn()));
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        this.toggle();
        this.adapter_.notifyChange(
        /** @type {!IconButtonToggleEvent} */
        {
          isOn: this.isOn()
        });
      }
      /** @return {boolean} */

    }, {
      key: "isOn",
      value: function isOn() {
        return this.adapter_.hasClass(cssClasses$9.ICON_BUTTON_ON);
      }
      /** @param {boolean=} isOn */

    }, {
      key: "toggle",
      value: function toggle() {
        var isOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.isOn();

        if (isOn) {
          this.adapter_.addClass(cssClasses$9.ICON_BUTTON_ON);
        } else {
          this.adapter_.removeClass(cssClasses$9.ICON_BUTTON_ON);
        }

        this.adapter_.setAttr(strings$a.ARIA_PRESSED, "".concat(isOn));
      }
    }]);

    return MDCIconButtonToggleFoundation;
  }(MDCFoundation);

  //
  var script$t = {
    name: 'mdc-icon-button',
    model: {
      prop: 'isOn',
      event: 'change'
    },
    props: {
      isOn: Boolean
    },
    data: function data() {
      return {
        classes: {},
        styles: {}
      };
    },
    watch: {
      isOn: 'onOn_'
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCIconButtonToggleFoundation({
        addClass: function addClass(className) {
          return _this.$set(_this.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this.$delete(_this.classes, className);
        },
        hasClass: function hasClass(className) {
          return _this.$el.classList.contains(className);
        },
        setAttr: function setAttr(attrName, attrValue) {
          return _this.$el.setAttribute(attrName, attrValue);
        },
        notifyChange: function notifyChange(evtData) {
          _this.$emit(MDCIconButtonToggleFoundation.strings.CHANGE_EVENT, evtData);

          _this.$emit('change', evtData.isOn);
        }
      });
      this.foundation.init();
      this.ripple = new RippleBase(this, {
        isUnbounded: function isUnbounded() {
          return true;
        }
      });
      this.ripple.init();
      this.foundation.toggle(this.isOn);
    },
    beforeDestroy: function beforeDestroy() {
      this.ripple.destroy();
      this.foundation.destroy();
    },
    methods: {
      onOn_: function onOn_(isOn) {
        if (this.isOn !== isOn) {
          this.foundation.toggle(isOn);
        }
      },
      onClick: function onClick(evt) {
        this.foundation.handleClick(evt);
      }
    },
    computed: {
      isLink: function isLink() {
        return this.$el && Boolean(this.$el.getAttribute('href'));
      }
    }
  };

  /* script */
  const __vue_script__$t = script$t;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$t.__file = "/ddata/extra/vma/components/icon-button/mdc-icon-button.vue";

  /* template */
  var __vue_render__$q = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.isLink
      ? _c(
          "a",
          _vm._b(
            {
              staticClass: "mdc-icon-button material-icons",
              class: _vm.classes,
              style: _vm.styles,
              on: { click: _vm.onClick }
            },
            "a",
            _vm.$attrs,
            false
          ),
          [_vm._t("default")],
          2
        )
      : _c(
          "button",
          _vm._b(
            {
              staticClass: "mdc-icon-button material-icons",
              class: _vm.classes,
              style: _vm.styles,
              on: { click: _vm.onClick }
            },
            "button",
            _vm.$attrs,
            false
          ),
          [_vm._t("default")],
          2
        )
  };
  var __vue_staticRenderFns__$q = [];
  __vue_render__$q._withStripped = true;

    /* style */
    const __vue_inject_styles__$t = undefined;
    /* scoped */
    const __vue_scope_id__$t = undefined;
    /* module identifier */
    const __vue_module_identifier__$t = undefined;
    /* functional template */
    const __vue_is_functional_template__$t = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcIconButton = normalizeComponent(
      { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
      __vue_inject_styles__$t,
      __vue_script__$t,
      __vue_scope_id__$t,
      __vue_is_functional_template__$t,
      __vue_module_identifier__$t,
      undefined,
      undefined
    );

  var VueMDCIconButton = BasePlugin({
    mdcIconButton: mdcIconButton
  });

  /**
   * @license
   * Copyright 2017 Google Inc.
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
   * Adapter for MDC Icon Toggle. Provides an interface for managing
   * - classes
   * - dom
   * - inner text
   * - event handlers
   * - event dispatch
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
  var MDCIconToggleAdapter =
  /*#__PURE__*/
  function () {
    function MDCIconToggleAdapter() {
      _classCallCheck(this, MDCIconToggleAdapter);
    }

    _createClass(MDCIconToggleAdapter, [{
      key: "addClass",

      /** @param {string} className */
      value: function addClass(className) {}
      /** @param {string} className */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}
      /**
       * @param {string} type
       * @param {!EventListener} handler
       */

    }, {
      key: "registerInteractionHandler",
      value: function registerInteractionHandler(type, handler) {}
      /**
       * @param {string} type
       * @param {!EventListener} handler
       */

    }, {
      key: "deregisterInteractionHandler",
      value: function deregisterInteractionHandler(type, handler) {}
      /** @param {string} text */

    }, {
      key: "setText",
      value: function setText(text) {}
      /** @return {number} */

    }, {
      key: "getTabIndex",
      value: function getTabIndex() {}
      /** @param {number} tabIndex */

    }, {
      key: "setTabIndex",
      value: function setTabIndex(tabIndex) {}
      /**
       * @param {string} name
       * @return {string}
       */

    }, {
      key: "getAttr",
      value: function getAttr(name) {}
      /**
       * @param {string} name
       * @param {string} value
       */

    }, {
      key: "setAttr",
      value: function setAttr(name, value) {}
      /** @param {string} name */

    }, {
      key: "rmAttr",
      value: function rmAttr(name) {}
      /** @param {!IconToggleEvent} evtData */

    }, {
      key: "notifyChange",
      value: function notifyChange(evtData) {}
    }]);

    return MDCIconToggleAdapter;
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
  var cssClasses$a = {
    ROOT: 'mdc-icon-toggle',
    DISABLED: 'mdc-icon-toggle--disabled'
  };
  /** @enum {string} */

  var strings$b = {
    DATA_TOGGLE_ON: 'data-toggle-on',
    DATA_TOGGLE_OFF: 'data-toggle-off',
    ARIA_PRESSED: 'aria-pressed',
    ARIA_DISABLED: 'aria-disabled',
    ARIA_LABEL: 'aria-label',
    CHANGE_EVENT: 'MDCIconToggle:change'
  };

  /**
   * @extends {MDCFoundation<!MDCIconToggleAdapter>}
   */

  var MDCIconToggleFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCIconToggleFoundation, _MDCFoundation);

    _createClass(MDCIconToggleFoundation, null, [{
      key: "cssClasses",
      get: function get() {
        return cssClasses$a;
      }
    }, {
      key: "strings",
      get: function get() {
        return strings$b;
      }
    }, {
      key: "defaultAdapter",
      get: function get() {
        return {
          addClass: function addClass()
          /* className: string */
          {},
          removeClass: function removeClass()
          /* className: string */
          {},
          registerInteractionHandler: function registerInteractionHandler()
          /* type: string, handler: EventListener */
          {},
          deregisterInteractionHandler: function deregisterInteractionHandler()
          /* type: string, handler: EventListener */
          {},
          setText: function setText()
          /* text: string */
          {},
          getTabIndex: function getTabIndex() {
            return (
              /* number */
              0
            );
          },
          setTabIndex: function setTabIndex()
          /* tabIndex: number */
          {},
          getAttr: function getAttr() {
            return (
              /* name: string */

              /* string */
              ''
            );
          },
          setAttr: function setAttr()
          /* name: string, value: string */
          {},
          rmAttr: function rmAttr()
          /* name: string */
          {},
          notifyChange: function notifyChange()
          /* evtData: IconToggleEvent */
          {}
        };
      }
    }]);

    function MDCIconToggleFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCIconToggleFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCIconToggleFoundation).call(this, _extends(MDCIconToggleFoundation.defaultAdapter, adapter)));
      /** @private {boolean} */

      _this.on_ = false;
      /** @private {boolean} */

      _this.disabled_ = false;
      /** @private {number} */

      _this.savedTabIndex_ = -1;
      /** @private {?IconToggleState} */

      _this.toggleOnData_ = null;
      /** @private {?IconToggleState} */

      _this.toggleOffData_ = null;

      _this.clickHandler_ =
      /** @private {!EventListener} */
      function () {
        return _this.toggleFromEvt_();
      };
      /** @private {boolean} */


      _this.isHandlingKeydown_ = false;

      _this.keydownHandler_ =
      /** @private {!EventListener} */
      function (
      /** @type {!KeyboardKey} */
      evt) {
        if (isSpace(evt)) {
          _this.isHandlingKeydown_ = true;
          return evt.preventDefault();
        }
      };

      _this.keyupHandler_ =
      /** @private {!EventListener} */
      function (
      /** @type {!KeyboardKey} */
      evt) {
        if (isSpace(evt)) {
          _this.isHandlingKeydown_ = false;

          _this.toggleFromEvt_();
        }
      };

      return _this;
    }

    _createClass(MDCIconToggleFoundation, [{
      key: "init",
      value: function init() {
        this.refreshToggleData();
        this.savedTabIndex_ = this.adapter_.getTabIndex();
        this.adapter_.registerInteractionHandler('click', this.clickHandler_);
        this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
        this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
      }
    }, {
      key: "refreshToggleData",
      value: function refreshToggleData() {
        var _MDCIconToggleFoundat = MDCIconToggleFoundation.strings,
            DATA_TOGGLE_ON = _MDCIconToggleFoundat.DATA_TOGGLE_ON,
            DATA_TOGGLE_OFF = _MDCIconToggleFoundat.DATA_TOGGLE_OFF;
        this.toggleOnData_ = this.parseJsonDataAttr_(DATA_TOGGLE_ON);
        this.toggleOffData_ = this.parseJsonDataAttr_(DATA_TOGGLE_OFF);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
        this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
        this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
      }
      /** @private */

    }, {
      key: "toggleFromEvt_",
      value: function toggleFromEvt_() {
        this.toggle();
        var isOn = this.on_;
        this.adapter_.notifyChange(
        /** @type {!IconToggleEvent} */
        {
          isOn: isOn
        });
      }
      /** @return {boolean} */

    }, {
      key: "isOn",
      value: function isOn() {
        return this.on_;
      }
      /** @param {boolean=} isOn */

    }, {
      key: "toggle",
      value: function toggle() {
        var isOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.on_;
        this.on_ = isOn;
        var _MDCIconToggleFoundat2 = MDCIconToggleFoundation.strings,
            ARIA_LABEL = _MDCIconToggleFoundat2.ARIA_LABEL,
            ARIA_PRESSED = _MDCIconToggleFoundat2.ARIA_PRESSED;

        if (this.on_) {
          this.adapter_.setAttr(ARIA_PRESSED, 'true');
        } else {
          this.adapter_.setAttr(ARIA_PRESSED, 'false');
        }

        var _ref = this.on_ ? this.toggleOffData_ : this.toggleOnData_,
            classToRemove = _ref.cssClass;

        if (classToRemove) {
          this.adapter_.removeClass(classToRemove);
        }

        var _ref2 = this.on_ ? this.toggleOnData_ : this.toggleOffData_,
            content = _ref2.content,
            label = _ref2.label,
            cssClass = _ref2.cssClass;

        if (cssClass) {
          this.adapter_.addClass(cssClass);
        }

        if (content) {
          this.adapter_.setText(content);
        }

        if (label) {
          this.adapter_.setAttr(ARIA_LABEL, label);
        }
      }
      /**
       * @param {string} dataAttr
       * @return {!IconToggleState}
       */

    }, {
      key: "parseJsonDataAttr_",
      value: function parseJsonDataAttr_(dataAttr) {
        var val = this.adapter_.getAttr(dataAttr);

        if (!val) {
          return {};
        }

        return (
          /** @type {!IconToggleState} */
          JSON.parse(val)
        );
      }
      /** @return {boolean} */

    }, {
      key: "isDisabled",
      value: function isDisabled() {
        return this.disabled_;
      }
      /** @param {boolean} isDisabled */

    }, {
      key: "setDisabled",
      value: function setDisabled(isDisabled) {
        this.disabled_ = isDisabled;
        var DISABLED = MDCIconToggleFoundation.cssClasses.DISABLED;
        var ARIA_DISABLED = MDCIconToggleFoundation.strings.ARIA_DISABLED;

        if (this.disabled_) {
          this.savedTabIndex_ = this.adapter_.getTabIndex();
          this.adapter_.setTabIndex(-1);
          this.adapter_.setAttr(ARIA_DISABLED, 'true');
          this.adapter_.addClass(DISABLED);
        } else {
          this.adapter_.setTabIndex(this.savedTabIndex_);
          this.adapter_.rmAttr(ARIA_DISABLED);
          this.adapter_.removeClass(DISABLED);
        }
      }
      /** @return {boolean} */

    }, {
      key: "isKeyboardActivated",
      value: function isKeyboardActivated() {
        return this.isHandlingKeydown_;
      }
    }]);

    return MDCIconToggleFoundation;
  }(MDCFoundation);
  /**
   * @param {!KeyboardKey} keyboardKey
   * @return {boolean}
   */

  function isSpace(keyboardKey) {
    return keyboardKey.key === 'Space' || keyboardKey.keyCode === 32;
  }
  /** @record */


  var IconToggleState = function IconToggleState() {
    _classCallCheck(this, IconToggleState);
  };
  /**
   * The aria-label value of the icon toggle, or undefined if there is no aria-label.
   * @export {string|undefined}
   */


  IconToggleState.prototype.label;
  /**
   * The text for the icon toggle, or undefined if there is no text.
   * @export {string|undefined}
   */

  IconToggleState.prototype.content;
  /**
   * The CSS class to add to the icon toggle, or undefined if there is no CSS class.
   * @export {string|undefined}
   */

  IconToggleState.prototype.cssClass;

  //
  var script$u = {
    name: 'mdc-icon-toggle',
    props: {
      toggleOn: [String, Object],
      toggleOff: [String, Object],
      value: Boolean,
      disabled: Boolean,
      accent: Boolean
    },
    data: function data() {
      return {
        classes: {
          'mdc-icon-toggle--accent': this.accent
        },
        styles: {},
        iconClasses: {},
        tabIndex: 0,
        text: ''
      };
    },
    computed: {
      toggleOnData: function toggleOnData() {
        var toggle = this.toggleOn;
        return toggle && JSON.stringify(typeof toggle === 'string' ? {
          content: toggle,
          cssClass: 'material-icons'
        } : {
          content: toggle.icon || toggle.content,
          label: toggle.label,
          cssClass: toggle.icon ? 'material-icons' : toggle.cssClass
        });
      },
      toggleOffData: function toggleOffData() {
        var toggle = this.toggleOff;
        return toggle && JSON.stringify(typeof toggle === 'string' ? {
          content: toggle,
          cssClass: 'material-icons'
        } : {
          content: toggle.icon || toggle.content,
          label: toggle.label,
          cssClass: toggle.icon ? 'material-icons' : toggle.cssClass
        });
      }
    },
    watch: {
      value: function value(_value) {
        this.foundation && this.foundation.toggle(_value);
      },
      disabled: function disabled(_disabled) {
        this.foundation && this.foundation.setDisabled(_disabled);
      },
      toggleOnData: function toggleOnData() {
        this.foundation && this.foundation.refreshToggleData();
      },
      toggleOffData: function toggleOffData() {
        this.foundation && this.foundation.refreshToggleData();
      },
      accent: function accent(value) {
        this.$set(this.classes, 'mdc-icon-toggle--secondary', value);
      }
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCIconToggleFoundation({
        addClass: function addClass(className) {
          return _this.$set(_this.iconClasses, className, true);
        },
        removeClass: function removeClass(className) {
          return _this.$delete(_this.iconClasses, className);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          return _this.$el.addEventListener(evt, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          return _this.$el.removeEventListener(evt, handler);
        },
        setText: function setText(text) {
          _this.text = text;
        },
        getTabIndex: function getTabIndex() {
          return _this.tabIndex;
        },
        setTabIndex: function setTabIndex(tabIndex) {
          _this.tabIndex = tabIndex;
        },
        getAttr: function getAttr(name, value) {
          return _this.$el.getAttribute(name, value);
        },
        setAttr: function setAttr(name, value) {
          _this.$el.setAttribute(name, value);
        },
        rmAttr: function rmAttr(name) {
          _this.$el.removeAttribute(name);
        },
        notifyChange: function notifyChange(evtData) {
          _this.$emit('input', evtData.isOn);
        }
      });
      this.foundation.init();
      this.foundation.toggle(this.value);
      this.foundation.setDisabled(this.disabled);
      this.ripple = new RippleBase(this, {
        isUnbounded: function isUnbounded() {
          return true;
        },
        isSurfaceActive: function isSurfaceActive() {
          return _this.foundation.isKeyboardActivated();
        }
      });
      this.ripple.init();
    },
    beforeDestroy: function beforeDestroy() {
      this.foundation.destroy();
      this.ripple.destroy();
    }
  };

  /* script */
  const __vue_script__$u = script$u;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$u.__file = "/ddata/extra/vma/components/icon-toggle/mdc-icon-toggle.vue";

  /* template */
  var __vue_render__$r = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "span",
      {
        staticClass: "mdc-icon-toggle",
        class: _vm.classes,
        style: _vm.styles,
        attrs: {
          tabindex: _vm.tabIndex,
          "data-toggle-on": _vm.toggleOnData,
          "data-toggle-off": _vm.toggleOffData,
          role: "button",
          "aria-pressed": "false"
        }
      },
      [
        _c("i", { class: _vm.iconClasses, attrs: { "aria-hidden": "true" } }, [
          _vm._v(_vm._s(_vm.text))
        ])
      ]
    )
  };
  var __vue_staticRenderFns__$r = [];
  __vue_render__$r._withStripped = true;

    /* style */
    const __vue_inject_styles__$u = undefined;
    /* scoped */
    const __vue_scope_id__$u = undefined;
    /* module identifier */
    const __vue_module_identifier__$u = undefined;
    /* functional template */
    const __vue_is_functional_template__$u = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcIConToggle = normalizeComponent(
      { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
      __vue_inject_styles__$u,
      __vue_script__$u,
      __vue_scope_id__$u,
      __vue_is_functional_template__$u,
      __vue_module_identifier__$u,
      undefined,
      undefined
    );

  var VueMDCIconToggle = BasePlugin({
    mdcIConToggle: mdcIConToggle
  });

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
  //
  //
  //
  var script$v = {
    name: 'mdc-layout-app'
  };

  /* script */
  const __vue_script__$v = script$v;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$v.__file = "/ddata/extra/vma/components/layout-app/mdc-layout-app.vue";

  /* template */
  var __vue_render__$s = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "mdc-layout-app" }, [
      _c(
        "div",
        { staticClass: "mdc-layout-app--topappbar-wrapper" },
        [_vm._t("topappbar")],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "mdc-layout-app--main-container" }, [
        _c(
          "div",
          { staticClass: "mdc-layout-app--drawer-wrapper" },
          [_vm._t("drawer")],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mdc-layout-app--content-wrapper" },
          [_vm._t("default")],
          2
        )
      ])
    ])
  };
  var __vue_staticRenderFns__$s = [];
  __vue_render__$s._withStripped = true;

    /* style */
    const __vue_inject_styles__$v = undefined;
    /* scoped */
    const __vue_scope_id__$v = undefined;
    /* module identifier */
    const __vue_module_identifier__$v = undefined;
    /* functional template */
    const __vue_is_functional_template__$v = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcLayoutApp = normalizeComponent(
      { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
      __vue_inject_styles__$v,
      __vue_script__$v,
      __vue_scope_id__$v,
      __vue_is_functional_template__$v,
      __vue_module_identifier__$v,
      undefined,
      undefined
    );

  var VueMDCLayoutApp = BasePlugin({
    mdcLayoutApp: mdcLayoutApp
  });

  //
  //
  //
  //
  //
  //
  //
  //
  var script$w = {
    name: 'mdc-layout-grid',
    props: {
      'fixed-column-width': Boolean,
      'align-left': Boolean,
      'align-right': Boolean
    },
    computed: {
      classes: function classes() {
        return {
          'mdc-layout-grid': true,
          'mdc-layout-grid--fixed-column-width': this.fixedColumnWidth,
          'mdc-layout-grid--align-left': this.alignLeft,
          'mdc-layout-grid--align-right': this.alignRight
        };
      }
    }
  };

  /* script */
  const __vue_script__$w = script$w;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$w.__file = "/ddata/extra/vma/components/layout-grid/mdc-layout-grid.vue";

  /* template */
  var __vue_render__$t = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { class: _vm.classes }, [
      _c("div", { staticClass: "mdc-layout-grid__inner" }, [_vm._t("default")], 2)
    ])
  };
  var __vue_staticRenderFns__$t = [];
  __vue_render__$t._withStripped = true;

    /* style */
    const __vue_inject_styles__$w = undefined;
    /* scoped */
    const __vue_scope_id__$w = undefined;
    /* module identifier */
    const __vue_module_identifier__$w = undefined;
    /* functional template */
    const __vue_is_functional_template__$w = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcLayoutGrid = normalizeComponent(
      { render: __vue_render__$t, staticRenderFns: __vue_staticRenderFns__$t },
      __vue_inject_styles__$w,
      __vue_script__$w,
      __vue_scope_id__$w,
      __vue_is_functional_template__$w,
      __vue_module_identifier__$w,
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
  var spanOptions = {
    type: [String, Number],
    default: null,
    validator: function validator(value) {
      var num = Number(value);
      return isFinite(num) && num <= 12 && num > 0;
    }
  };
  var script$x = {
    name: 'mdc-layout-cell',
    props: {
      span: spanOptions,
      order: spanOptions,
      phone: spanOptions,
      tablet: spanOptions,
      desktop: spanOptions,
      align: {
        type: String,
        validator: function validator(value) {
          return ['top', 'bottom', 'middle'].indexOf(value) !== -1;
        }
      }
    },
    computed: {
      classes: function classes() {
        var classes = [];

        if (this.span) {
          classes.push("mdc-layout-grid__cell--span-".concat(this.span));
        }

        if (this.order) {
          classes.push("mdc-layout-grid__cell--order-".concat(this.order));
        }

        if (this.phone) {
          classes.push("mdc-layout-grid__cell--span-".concat(this.phone, "-phone"));
        }

        if (this.tablet) {
          classes.push("mdc-layout-grid__cell--span-".concat(this.tablet, "-tablet"));
        }

        if (this.desktop) {
          classes.push("mdc-layout-grid__cell--span-".concat(this.desktop, "-desktop"));
        }

        if (this.align) {
          classes.push("mdc-layout-grid__cell--align-".concat(this.align));
        }

        return classes;
      }
    }
  };

  /* script */
  const __vue_script__$x = script$x;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$x.__file = "/ddata/extra/vma/components/layout-grid/mdc-layout-cell.vue";

  /* template */
  var __vue_render__$u = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "mdc-layout-cell mdc-layout-grid__cell",
        class: _vm.classes
      },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$u = [];
  __vue_render__$u._withStripped = true;

    /* style */
    const __vue_inject_styles__$x = undefined;
    /* scoped */
    const __vue_scope_id__$x = undefined;
    /* module identifier */
    const __vue_module_identifier__$x = undefined;
    /* functional template */
    const __vue_is_functional_template__$x = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcLayoutCell = normalizeComponent(
      { render: __vue_render__$u, staticRenderFns: __vue_staticRenderFns__$u },
      __vue_inject_styles__$x,
      __vue_script__$x,
      __vue_scope_id__$x,
      __vue_is_functional_template__$x,
      __vue_module_identifier__$x,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  var script$y = {
    name: 'mdc-layout-inner-grid'
  };

  /* script */
  const __vue_script__$y = script$y;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$y.__file = "/ddata/extra/vma/components/layout-grid/mdc-layout-inner-grid.vue";

  /* template */
  var __vue_render__$v = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mdc-layout-inner-grid mdc-layout-grid__inner" },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$v = [];
  __vue_render__$v._withStripped = true;

    /* style */
    const __vue_inject_styles__$y = undefined;
    /* scoped */
    const __vue_scope_id__$y = undefined;
    /* module identifier */
    const __vue_module_identifier__$y = undefined;
    /* functional template */
    const __vue_is_functional_template__$y = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcLayoutInnerGrid = normalizeComponent(
      { render: __vue_render__$v, staticRenderFns: __vue_staticRenderFns__$v },
      __vue_inject_styles__$y,
      __vue_script__$y,
      __vue_scope_id__$y,
      __vue_is_functional_template__$y,
      __vue_module_identifier__$y,
      undefined,
      undefined
    );

  var VueMDCLayoutGrid = BasePlugin({
    mdcLayoutGrid: mdcLayoutGrid,
    mdcLayoutCell: mdcLayoutCell,
    mdcLayoutInnerGrid: mdcLayoutInnerGrid
  });

  /**
   * @license
   * Copyright 2017 Google Inc.
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
  var cssClasses$b = {
    CLOSED_CLASS: 'mdc-linear-progress--closed',
    INDETERMINATE_CLASS: 'mdc-linear-progress--indeterminate',
    REVERSED_CLASS: 'mdc-linear-progress--reversed'
  };
  var strings$c = {
    PRIMARY_BAR_SELECTOR: '.mdc-linear-progress__primary-bar',
    BUFFER_SELECTOR: '.mdc-linear-progress__buffer'
  };

  var MDCLinearProgressFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCLinearProgressFoundation, _MDCFoundation);

    _createClass(MDCLinearProgressFoundation, null, [{
      key: "cssClasses",
      get: function get() {
        return cssClasses$b;
      }
    }, {
      key: "strings",
      get: function get() {
        return strings$c;
      }
    }, {
      key: "defaultAdapter",
      get: function get() {
        return {
          addClass: function addClass()
          /* className: string */
          {},
          getPrimaryBar: function getPrimaryBar()
          /* el: Element */
          {},
          getBuffer: function getBuffer()
          /* el: Element */
          {},
          hasClass: function hasClass() {
            return (
              /* className: string */
              false
            );
          },
          removeClass: function removeClass()
          /* className: string */
          {},
          setStyle: function setStyle()
          /* el: Element, styleProperty: string, value: string */
          {}
        };
      }
    }]);

    function MDCLinearProgressFoundation(adapter) {
      _classCallCheck(this, MDCLinearProgressFoundation);

      return _possibleConstructorReturn(this, _getPrototypeOf(MDCLinearProgressFoundation).call(this, _extends(MDCLinearProgressFoundation.defaultAdapter, adapter)));
    }

    _createClass(MDCLinearProgressFoundation, [{
      key: "init",
      value: function init() {
        this.determinate_ = !this.adapter_.hasClass(cssClasses$b.INDETERMINATE_CLASS);
        this.reverse_ = this.adapter_.hasClass(cssClasses$b.REVERSED_CLASS);
        this.progress_ = 0;
      }
    }, {
      key: "setDeterminate",
      value: function setDeterminate(isDeterminate) {
        this.determinate_ = isDeterminate;

        if (this.determinate_) {
          this.adapter_.removeClass(cssClasses$b.INDETERMINATE_CLASS);
          this.setScale_(this.adapter_.getPrimaryBar(), this.progress_);
        } else {
          this.adapter_.addClass(cssClasses$b.INDETERMINATE_CLASS);
          this.setScale_(this.adapter_.getPrimaryBar(), 1);
          this.setScale_(this.adapter_.getBuffer(), 1);
        }
      }
    }, {
      key: "setProgress",
      value: function setProgress(value) {
        this.progress_ = value;

        if (this.determinate_) {
          this.setScale_(this.adapter_.getPrimaryBar(), value);
        }
      }
    }, {
      key: "setBuffer",
      value: function setBuffer(value) {
        if (this.determinate_) {
          this.setScale_(this.adapter_.getBuffer(), value);
        }
      }
    }, {
      key: "setReverse",
      value: function setReverse(isReversed) {
        this.reverse_ = isReversed;

        if (this.reverse_) {
          this.adapter_.addClass(cssClasses$b.REVERSED_CLASS);
        } else {
          this.adapter_.removeClass(cssClasses$b.REVERSED_CLASS);
        }
      }
    }, {
      key: "open",
      value: function open() {
        this.adapter_.removeClass(cssClasses$b.CLOSED_CLASS);
      }
    }, {
      key: "close",
      value: function close() {
        this.adapter_.addClass(cssClasses$b.CLOSED_CLASS);
      }
    }, {
      key: "setScale_",
      value: function setScale_(el, scaleValue) {
        var _this = this;

        var value = 'scaleX(' + scaleValue + ')';
        transformStyleProperties.forEach(function (transformStyleProperty) {
          _this.adapter_.setStyle(el, transformStyleProperty, value);
        });
      }
    }]);

    return MDCLinearProgressFoundation;
  }(MDCFoundation);

  //
  var ProgressPropType = {
    type: [Number, String],
    validator: function validator(value) {
      return Number(value) >= 0 && Number(value) <= 1;
    }
  };
  var script$z = {
    name: 'mdc-linear-progress',
    props: {
      open: {
        type: Boolean,
        default: true
      },
      indeterminate: Boolean,
      reverse: Boolean,
      accent: Boolean,
      progress: ProgressPropType,
      buffer: ProgressPropType
    },
    data: function data() {
      return {
        classes: {
          'mdc-linear-progress--accent': this.accent
        },
        styles: {}
      };
    },
    watch: {
      open: function open() {
        if (this.open) {
          this.foundation.open();
        } else {
          this.foundation.close();
        }
      },
      progress: function progress() {
        this.foundation.setProgress(Number(this.progress));
      },
      buffer: function buffer() {
        this.foundation.setBuffer(Number(this.buffer));
      },
      indeterminate: function indeterminate() {
        this.foundation.setDeterminate(!this.indeterminate);
      },
      reverse: function reverse() {
        this.foundation.setReverse(this.reverse);
      }
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCLinearProgressFoundation({
        addClass: function addClass(className) {
          _this.$set(_this.classes, className, true);
        },
        getPrimaryBar: function getPrimaryBar()
        /* el: Element */
        {
          return _this.$refs.primary;
        },
        getBuffer: function getBuffer()
        /* el: Element */
        {
          return _this.$refs.buffer;
        },
        hasClass: function hasClass(className) {
          _this.$el.classList.contains(className);
        },
        removeClass: function removeClass(className) {
          _this.$delete(_this.classes, className);
        },
        setStyle: function setStyle(el, styleProperty, value) {
          el.style[styleProperty] = value;
        }
      });
      this.foundation.init();
      this.foundation.setReverse(this.reverse);
      this.foundation.setProgress(Number(this.progress));
      this.foundation.setBuffer(Number(this.buffer));
      this.foundation.setDeterminate(!this.indeterminate);

      if (this.open) {
        this.foundation.open();
      } else {
        this.foundation.close();
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.foundation.destroy();
    }
  };

  /* script */
  const __vue_script__$z = script$z;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$z.__file = "/ddata/extra/vma/components/linear-progress/mdc-linear-progress.vue";

  /* template */
  var __vue_render__$w = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "mdc-linear-progress",
        class: _vm.classes,
        style: _vm.styles,
        attrs: { role: "progressbar" }
      },
      [
        _c("div", { staticClass: "mdc-linear-progress__buffering-dots" }),
        _vm._v(" "),
        _c("div", { ref: "buffer", staticClass: "mdc-linear-progress__buffer" }),
        _vm._v(" "),
        _c(
          "div",
          {
            ref: "primary",
            staticClass:
              "mdc-linear-progress__bar mdc-linear-progress__primary-bar"
          },
          [_c("span", { staticClass: "mdc-linear-progress__bar-inner" })]
        ),
        _vm._v(" "),
        _vm._m(0)
      ]
    )
  };
  var __vue_staticRenderFns__$w = [
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        {
          staticClass:
            "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"
        },
        [_c("span", { staticClass: "mdc-linear-progress__bar-inner" })]
      )
    }
  ];
  __vue_render__$w._withStripped = true;

    /* style */
    const __vue_inject_styles__$z = undefined;
    /* scoped */
    const __vue_scope_id__$z = undefined;
    /* module identifier */
    const __vue_module_identifier__$z = undefined;
    /* functional template */
    const __vue_is_functional_template__$z = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcLinearProgress = normalizeComponent(
      { render: __vue_render__$w, staticRenderFns: __vue_staticRenderFns__$w },
      __vue_inject_styles__$z,
      __vue_script__$z,
      __vue_scope_id__$z,
      __vue_is_functional_template__$z,
      __vue_module_identifier__$z,
      undefined,
      undefined
    );

  var VueMDCLinearProgress = BasePlugin({
    mdcLinearProgress: mdcLinearProgress
  });

  //
  var script$A = {
    name: 'mdc-list',
    props: {
      dense: Boolean,
      avatarList: Boolean,
      twoLine: Boolean,
      bordered: Boolean,
      interactive: {
        type: Boolean,
        default: true
      },
      singleSelection: Boolean,
      vertical: {
        type: Boolean,
        default: true
      }
    },
    provide: function provide() {
      return {
        mdcList: this
      };
    },
    computed: {
      classes: function classes() {
        return {
          'mdc-list--dense': this.dense,
          'mdc-list--avatar-list': this.avatarList,
          'mdc-list--two-line': this.twoLine,
          'mdc-list--bordered': this.bordered,
          'mdc-list--non-interactive': !this.interactive
        };
      },
      orientation: function orientation() {
        return this.vertical ? 'vertical' : 'horizontal';
      },
      listElements: function listElements() {
        return [].slice.call(this.$el.querySelectorAll(MDCListFoundation.strings.ENABLED_ITEMS_SELECTOR));
      }
    },
    methods: {
      handleFocusInEvent: function handleFocusInEvent(evt) {
        var index = this.getListItemIndex(evt);
        this.foundation.handleFocusIn(evt, index);
      },
      handleFocusOutEvent: function handleFocusOutEvent(evt) {
        var index = this.getListItemIndex(evt);
        this.foundation.handleFocusOut(evt, index);
      },
      handleKeydownEvent: function handleKeydownEvent(evt) {
        var index = this.getListItemIndex(evt);

        if (index >= 0) {
          this.foundation.handleKeydown(evt, evt.target.classList.contains(MDCListFoundation.cssClasses.LIST_ITEM_CLASS), index);
        }
      },
      handleClickEvent: function handleClickEvent(evt) {
        var index = this.getListItemIndex(evt); // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.

        var toggleCheckbox = !matches$1(evt.target, MDCListFoundation.strings.CHECKBOX_RADIO_SELECTOR);
        this.foundation.handleClick(index, toggleCheckbox);
      },
      layout: function layout() {
        [].slice.call(this.$el.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (ele) {
          ele.setAttribute('tabindex', -1);
        }) // Child button/a elements are not tabbable until the list item is focused.
        ;
        [].slice.call(this.$el.querySelectorAll(MDCListFoundation.strings.FOCUSABLE_CHILD_ELEMENTS)).forEach(function (ele) {
          return ele.setAttribute('tabindex', -1);
        });
      },
      initializeListType: function initializeListType() {
        // Automatically set single selection if selected/activated classes are present.
        var preselectedElement = this.$el.querySelector(".".concat(MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS, ", .").concat(MDCListFoundation.cssClasses.LIST_ITEM_SELECTED_CLASS));

        if (preselectedElement) {
          if (preselectedElement.classList.contains(MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS)) {
            this.foundation.setUseActivatedClass(true);
          }

          this.singleSelection = true;
          this.selectedIndex = this.listElements.indexOf(preselectedElement);
        }
      },
      getListItemIndex: function getListItemIndex(evt) {
        var eventTarget = evt.target;
        var index = -1; // Find the first ancestor that is a list item or the list.

        while (!eventTarget.classList.contains(MDCListFoundation.cssClasses.LIST_ITEM_CLASS) && !eventTarget.classList.contains(MDCListFoundation.cssClasses.ROOT)) {
          eventTarget = eventTarget.parentElement;
        } // Get the index of the element if it is a list item.


        if (eventTarget.classList.contains(MDCListFoundation.cssClasses.LIST_ITEM_CLASS)) {
          index = this.listElements.indexOf(eventTarget);
        }

        return index;
      }
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCListFoundation({
        getListItemCount: function getListItemCount() {
          return _this.listElements.length;
        },
        getFocusedElementIndex: function getFocusedElementIndex() {
          return _this.listElements.indexOf(document.activeElement);
        },
        setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
          var element = _this.listElements[index];

          if (element) {
            element.setAttribute(attr, value);
          }
        },
        removeAttributeForElementIndex: function removeAttributeForElementIndex(index, attr) {
          var element = _this.listElements[index];

          if (element) {
            element.removeAttribute(attr);
          }
        },
        addClassForElementIndex: function addClassForElementIndex(index, className) {
          var element = _this.listElements[index];

          if (element) {
            element.classList.add(className);
          }
        },
        removeClassForElementIndex: function removeClassForElementIndex(index, className) {
          var element = _this.listElements[index];

          if (element) {
            element.classList.remove(className);
          }
        },
        focusItemAtIndex: function focusItemAtIndex(index) {
          var element = _this.listElements[index];

          if (element) {
            element.focus();
          }
        },
        setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
          var element = _this.listElements[listItemIndex];
          var listItemChildren = [].slice.call(element.querySelectorAll(MDCListFoundation.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
          listItemChildren.forEach(function (ele) {
            return ele.setAttribute('tabindex', tabIndexValue);
          });
        },
        followHref: function followHref(index) {
          var listItem = _this.listElements[index];

          if (listItem && listItem.href) {
            listItem.click();
          }
        },
        hasCheckboxAtIndex: function hasCheckboxAtIndex(index) {
          var listItem = _this.listElements[index];
          return !!listItem.querySelector(MDCListFoundation.strings.CHECKBOX_SELECTOR);
        },
        hasRadioAtIndex: function hasRadioAtIndex(index) {
          var listItem = _this.listElements[index];
          return !!listItem.querySelector(MDCListFoundation.strings.RADIO_SELECTOR);
        },
        isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
          var listItem = _this.listElements[index];
          var toggleEl = listItem.querySelector(MDCListFoundation.strings.CHECKBOX_SELECTOR);
          return toggleEl.checked;
        },
        setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
          var listItem = _this.listElements[index];
          var toggleEl = listItem.querySelector(MDCListFoundation.strings.CHECKBOX_RADIO_SELECTOR);
          toggleEl.checked = isChecked;
          var event = document.createEvent('Event');
          event.initEvent('change', true, true);
          toggleEl.dispatchEvent(event);
        }
      });
      this.foundation.init();
      this.foundation.setSingleSelection(this.singleSelection);
      this.foundation.setVerticalOrientation(this.vertical);
      this.layout();
    }
  };

  /* script */
  const __vue_script__$A = script$A;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$A.__file = "/ddata/extra/vma/components/list/mdc-list.vue";

  /* template */
  var __vue_render__$x = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "ul",
      {
        staticClass: "mdc-list",
        class: _vm.classes,
        attrs: { "aria-orientation": _vm.orientation },
        on: {
          click: _vm.handleClickEvent,
          keydown: _vm.handleKeydownEvent,
          focusin: _vm.handleFocusInEvent,
          focusout: _vm.handleFocusOutEvent
        }
      },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$x = [];
  __vue_render__$x._withStripped = true;

    /* style */
    const __vue_inject_styles__$A = undefined;
    /* scoped */
    const __vue_scope_id__$A = undefined;
    /* module identifier */
    const __vue_module_identifier__$A = undefined;
    /* functional template */
    const __vue_is_functional_template__$A = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcList = normalizeComponent(
      { render: __vue_render__$x, staticRenderFns: __vue_staticRenderFns__$x },
      __vue_inject_styles__$A,
      __vue_script__$A,
      __vue_scope_id__$A,
      __vue_is_functional_template__$A,
      __vue_module_identifier__$A,
      undefined,
      undefined
    );

  //
  var script$B = {
    name: 'mdc-list-item',
    inject: ['mdcList'],
    props: {
      selected: Boolean,
      activated: Boolean
    },
    data: function data() {
      return {
        classes: {},
        styles: {}
      };
    },
    computed: {
      itemClasses: function itemClasses() {
        return {
          'mdc-list-item--selected': this.selected,
          'mdc-list-item--activated': this.activated
        };
      },
      isInteractive: function isInteractive() {
        return this.mdcList && this.mdcList.interactive;
      },
      hasSecondary: function hasSecondary() {
        return this.$slots['secondary'] && this.mdcList && this.mdcList.twoLine;
      },
      hasEndDetail: function hasEndDetail() {
        return !!this.$slots['end-detail'];
      },
      hasStartDetail: function hasStartDetail() {
        return !!this.$slots['start-detail'];
      }
    },
    watch: {
      isInteractive: function isInteractive(value) {
        if (value) {
          this.addRipple();
        } else {
          this.removeRipple();
        }
      }
    },
    mounted: function mounted() {
      this.isInteractive && this.addRipple();
    },
    beforeDestroy: function beforeDestroy() {
      this.removeRipple();
    },
    methods: {
      addRipple: function addRipple() {
        if (!this.ripple) {
          var ripple = new RippleBase(this);
          ripple.init();
          this.ripple = ripple;
        }
      },
      removeRipple: function removeRipple() {
        if (this.ripple) {
          var ripple = this.ripple;
          this.ripple = null;
          ripple.destroy();
        }
      }
    }
  };

  /* script */
  const __vue_script__$B = script$B;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$B.__file = "/ddata/extra/vma/components/list/mdc-list-item.vue";

  /* template */
  var __vue_render__$y = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "li",
      _vm._g(
        {
          staticClass: "mdc-list-item",
          class: [_vm.classes, _vm.itemClasses],
          style: _vm.styles,
          attrs: { tabindex: _vm.isInteractive ? "0" : undefined }
        },
        _vm.isInteractive ? _vm.$listeners : {}
      ),
      [
        _vm._t("start-detail"),
        _vm._v(" "),
        _vm.hasSecondary
          ? _c("span", { staticClass: "mdc-list-item__text" }, [
              _c(
                "span",
                { staticClass: "mdc-list-item__primary-text" },
                [_vm._t("default")],
                2
              ),
              _vm._v(" "),
              _vm.hasSecondary
                ? _c(
                    "span",
                    { staticClass: "mdc-list-item__secondary-text" },
                    [_vm._t("secondary")],
                    2
                  )
                : _vm._e()
            ])
          : _c(
              "span",
              { staticClass: "mdc-list-item__text" },
              [_vm._t("default")],
              2
            ),
        _vm._v(" "),
        _vm._t("end-detail")
      ],
      2
    )
  };
  var __vue_staticRenderFns__$y = [];
  __vue_render__$y._withStripped = true;

    /* style */
    const __vue_inject_styles__$B = undefined;
    /* scoped */
    const __vue_scope_id__$B = undefined;
    /* module identifier */
    const __vue_module_identifier__$B = undefined;
    /* functional template */
    const __vue_is_functional_template__$B = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcListItem = normalizeComponent(
      { render: __vue_render__$y, staticRenderFns: __vue_staticRenderFns__$y },
      __vue_inject_styles__$B,
      __vue_script__$B,
      __vue_scope_id__$B,
      __vue_is_functional_template__$B,
      __vue_module_identifier__$B,
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
  var script$C = {
    name: 'mdc-list-divider',
    props: {
      inset: Boolean,
      padded: Boolean
    },
    computed: {
      classes: function classes() {
        return {
          'mdc-list-divider--inset': this.inset,
          'mdc-list-divider--padded': this.padded
        };
      }
    }
  };

  /* script */
  const __vue_script__$C = script$C;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$C.__file = "/ddata/extra/vma/components/list/mdc-list-divider.vue";

  /* template */
  var __vue_render__$z = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("li", {
      staticClass: "mdc-list-divider",
      class: _vm.classes,
      attrs: { role: "separator" }
    })
  };
  var __vue_staticRenderFns__$z = [];
  __vue_render__$z._withStripped = true;

    /* style */
    const __vue_inject_styles__$C = undefined;
    /* scoped */
    const __vue_scope_id__$C = undefined;
    /* module identifier */
    const __vue_module_identifier__$C = undefined;
    /* functional template */
    const __vue_is_functional_template__$C = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcListDivider = normalizeComponent(
      { render: __vue_render__$z, staticRenderFns: __vue_staticRenderFns__$z },
      __vue_inject_styles__$C,
      __vue_script__$C,
      __vue_scope_id__$C,
      __vue_is_functional_template__$C,
      __vue_module_identifier__$C,
      undefined,
      undefined
    );

  //
  //
  //
  //
  var script$D = {
    name: 'mdc-list-group'
  };

  /* script */
  const __vue_script__$D = script$D;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$D.__file = "/ddata/extra/vma/components/list/mdc-list-group.vue";

  /* template */
  var __vue_render__$A = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "mdc-list-group" }, [_vm._t("default")], 2)
  };
  var __vue_staticRenderFns__$A = [];
  __vue_render__$A._withStripped = true;

    /* style */
    const __vue_inject_styles__$D = undefined;
    /* scoped */
    const __vue_scope_id__$D = undefined;
    /* module identifier */
    const __vue_module_identifier__$D = undefined;
    /* functional template */
    const __vue_is_functional_template__$D = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcListGroup = normalizeComponent(
      { render: __vue_render__$A, staticRenderFns: __vue_staticRenderFns__$A },
      __vue_inject_styles__$D,
      __vue_script__$D,
      __vue_scope_id__$D,
      __vue_is_functional_template__$D,
      __vue_module_identifier__$D,
      undefined,
      undefined
    );

  //
  //
  //
  //
  var script$E = {
    name: 'mdc-list-group-header'
  };

  /* script */
  const __vue_script__$E = script$E;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$E.__file = "/ddata/extra/vma/components/list/mdc-list-group-header.vue";

  /* template */
  var __vue_render__$B = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "h3",
      { staticClass: "mdc-list-group-header mdc-list-group__subheader" },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$B = [];
  __vue_render__$B._withStripped = true;

    /* style */
    const __vue_inject_styles__$E = undefined;
    /* scoped */
    const __vue_scope_id__$E = undefined;
    /* module identifier */
    const __vue_module_identifier__$E = undefined;
    /* functional template */
    const __vue_is_functional_template__$E = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcListGroupHeader = normalizeComponent(
      { render: __vue_render__$B, staticRenderFns: __vue_staticRenderFns__$B },
      __vue_inject_styles__$E,
      __vue_script__$E,
      __vue_scope_id__$E,
      __vue_is_functional_template__$E,
      __vue_module_identifier__$E,
      undefined,
      undefined
    );

  //
  //
  //
  //
  var script$F = {
    name: 'mdc-list-group-divider'
  };

  /* script */
  const __vue_script__$F = script$F;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$F.__file = "/ddata/extra/vma/components/list/mdc-list-group-divider.vue";

  /* template */
  var __vue_render__$C = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("hr", { staticClass: "mdc-list-group-divider mdc-list-divider" })
  };
  var __vue_staticRenderFns__$C = [];
  __vue_render__$C._withStripped = true;

    /* style */
    const __vue_inject_styles__$F = undefined;
    /* scoped */
    const __vue_scope_id__$F = undefined;
    /* module identifier */
    const __vue_module_identifier__$F = undefined;
    /* functional template */
    const __vue_is_functional_template__$F = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcListGroupDivider = normalizeComponent(
      { render: __vue_render__$C, staticRenderFns: __vue_staticRenderFns__$C },
      __vue_inject_styles__$F,
      __vue_script__$F,
      __vue_scope_id__$F,
      __vue_is_functional_template__$F,
      __vue_module_identifier__$F,
      undefined,
      undefined
    );

  var VueMDCList = BasePlugin({
    mdcList: mdcList,
    mdcListItem: mdcListItem,
    mdcListDivider: mdcListDivider,
    mdcListGroup: mdcListGroup,
    mdcListGroupHeader: mdcListGroupHeader,
    mdcListGroupDivider: mdcListGroupDivider
  });

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
  var cssClasses$c = {
    ROOT: 'mdc-menu',
    MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
    MENU_SELECTION_GROUP: 'mdc-menu__selection-group'
  };
  /** @enum {string} */

  var strings$d = {
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
  var cssClasses$d = {
    ANCHOR: 'mdc-menu-surface--anchor',
    ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
    ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
    FIXED: 'mdc-menu-surface--fixed',
    OPEN: 'mdc-menu-surface--open',
    ROOT: 'mdc-menu-surface'
  };
  /** @enum {string} */

  var strings$e = {
    CLOSED_EVENT: 'MDCMenuSurface:closed',
    OPENED_EVENT: 'MDCMenuSurface:opened',
    FOCUSABLE_ELEMENTS: 'button:not(:disabled), [href]:not([aria-disabled="true"]), input:not(:disabled), ' + 'select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
  };
  /** @enum {number} */

  var numbers$3 = {
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
        return cssClasses$d;
      }
      /** @return enum{string} */

    }, {
      key: "strings",
      get: function get() {
        return strings$e;
      }
      /** @return enum {number} */

    }, {
      key: "numbers",
      get: function get() {
        return numbers$3;
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

        if (anchorWidth / surfaceWidth > numbers$3.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
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
            }, numbers$3.TRANSITION_OPEN_DURATION);
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
            }, numbers$3.TRANSITION_CLOSE_DURATION);
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
        return cssClasses$c;
      }
      /** @return enum{strings} */

    }, {
      key: "strings",
      get: function get() {
        return strings$d;
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
          this.adapter_.removeAttributeFromElementAtIndex(selectedIndex, strings$d.ARIA_SELECTED_ATTR);
          this.adapter_.removeClassFromElementAtIndex(selectedIndex, cssClasses$c.MENU_SELECTED_LIST_ITEM);
        } // Select the new list item in this group.


        this.adapter_.addClassToElementAtIndex(index, cssClasses$c.MENU_SELECTED_LIST_ITEM);
        this.adapter_.addAttributeToElementAtIndex(index, strings$d.ARIA_SELECTED_ATTR, 'true');
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
        var isGroup = this.adapter_.elementContainsClass(parent, cssClasses$c.MENU_SELECTION_GROUP); // Iterate through ancestors until we find the group or get to the list.

        while (!isGroup && !this.adapter_.elementContainsClass(parent, MDCListFoundation.cssClasses.ROOT)) {
          parent = this.adapter_.getParentElement(parent);
          isGroup = this.adapter_.elementContainsClass(parent, cssClasses$c.MENU_SELECTION_GROUP);
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
  var script$G = {
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
  const __vue_script__$G = script$G;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$G.__file = "/ddata/extra/vma/components/menu/mdc-menu.vue";

  /* template */
  var __vue_render__$D = function() {
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
  var __vue_staticRenderFns__$D = [];
  __vue_render__$D._withStripped = true;

    /* style */
    const __vue_inject_styles__$G = undefined;
    /* scoped */
    const __vue_scope_id__$G = undefined;
    /* module identifier */
    const __vue_module_identifier__$G = undefined;
    /* functional template */
    const __vue_is_functional_template__$G = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcMenu = normalizeComponent(
      { render: __vue_render__$D, staticRenderFns: __vue_staticRenderFns__$D },
      __vue_inject_styles__$G,
      __vue_script__$G,
      __vue_scope_id__$G,
      __vue_is_functional_template__$G,
      __vue_module_identifier__$G,
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

  var script$H = {
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
  const __vue_script__$H = script$H;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$H.__file = "/ddata/extra/vma/components/menu/mdc-menu-surface.vue";

  /* template */
  var __vue_render__$E = function() {
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
  var __vue_staticRenderFns__$E = [];
  __vue_render__$E._withStripped = true;

    /* style */
    const __vue_inject_styles__$H = undefined;
    /* scoped */
    const __vue_scope_id__$H = undefined;
    /* module identifier */
    const __vue_module_identifier__$H = undefined;
    /* functional template */
    const __vue_is_functional_template__$H = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcMenuSurface = normalizeComponent(
      { render: __vue_render__$E, staticRenderFns: __vue_staticRenderFns__$E },
      __vue_inject_styles__$H,
      __vue_script__$H,
      __vue_scope_id__$H,
      __vue_is_functional_template__$H,
      __vue_module_identifier__$H,
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
  var script$I = {
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
  const __vue_script__$I = script$I;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$I.__file = "/ddata/extra/vma/components/menu/mdc-menu-item.vue";

  /* template */
  var __vue_render__$F = function() {
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
  var __vue_staticRenderFns__$F = [];
  __vue_render__$F._withStripped = true;

    /* style */
    const __vue_inject_styles__$I = undefined;
    /* scoped */
    const __vue_scope_id__$I = undefined;
    /* module identifier */
    const __vue_module_identifier__$I = undefined;
    /* functional template */
    const __vue_is_functional_template__$I = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcMenuItem = normalizeComponent(
      { render: __vue_render__$F, staticRenderFns: __vue_staticRenderFns__$F },
      __vue_inject_styles__$I,
      __vue_script__$I,
      __vue_scope_id__$I,
      __vue_is_functional_template__$I,
      __vue_module_identifier__$I,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  var script$J = {
    name: 'mdc-menu-divider'
  };

  /* script */
  const __vue_script__$J = script$J;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$J.__file = "/ddata/extra/vma/components/menu/mdc-menu-divider.vue";

  /* template */
  var __vue_render__$G = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("li", {
      staticClass: "mdc-menu-divider mdc-list-divider",
      attrs: { role: "separator" }
    })
  };
  var __vue_staticRenderFns__$G = [];
  __vue_render__$G._withStripped = true;

    /* style */
    const __vue_inject_styles__$J = undefined;
    /* scoped */
    const __vue_scope_id__$J = undefined;
    /* module identifier */
    const __vue_module_identifier__$J = undefined;
    /* functional template */
    const __vue_is_functional_template__$J = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcMenuDivider = normalizeComponent(
      { render: __vue_render__$G, staticRenderFns: __vue_staticRenderFns__$G },
      __vue_inject_styles__$J,
      __vue_script__$J,
      __vue_scope_id__$J,
      __vue_is_functional_template__$J,
      __vue_module_identifier__$J,
      undefined,
      undefined
    );

  //
  //
  //
  //
  var script$K = {
    name: 'mdc-menu-anchor'
  };

  /* script */
  const __vue_script__$K = script$K;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$K.__file = "/ddata/extra/vma/components/menu/mdc-menu-anchor.vue";

  /* template */
  var __vue_render__$H = function() {
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
  var __vue_staticRenderFns__$H = [];
  __vue_render__$H._withStripped = true;

    /* style */
    const __vue_inject_styles__$K = undefined;
    /* scoped */
    const __vue_scope_id__$K = undefined;
    /* module identifier */
    const __vue_module_identifier__$K = undefined;
    /* functional template */
    const __vue_is_functional_template__$K = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcMenuAnchor = normalizeComponent(
      { render: __vue_render__$H, staticRenderFns: __vue_staticRenderFns__$H },
      __vue_inject_styles__$K,
      __vue_script__$K,
      __vue_scope_id__$K,
      __vue_is_functional_template__$K,
      __vue_module_identifier__$K,
      undefined,
      undefined
    );

  var VueMDCMenu = BasePlugin({
    mdcMenu: mdcMenu,
    mdcMenuSurface: mdcMenuSurface,
    mdcMenuItem: mdcMenuItem,
    mdcMenuDivider: mdcMenuDivider,
    mdcMenuAnchor: mdcMenuAnchor
  });

  /* eslint no-unused-vars: [2, {"args": "none"}] */

  /**
   * Adapter for MDC Radio. Provides an interface for managing
   * - classes
   * - dom
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

  var MDCRadioAdapter =
  /*#__PURE__*/
  function () {
    function MDCRadioAdapter() {
      _classCallCheck(this, MDCRadioAdapter);
    }

    _createClass(MDCRadioAdapter, [{
      key: "addClass",

      /** @param {string} className */
      value: function addClass(className) {}
      /** @param {string} className */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}
      /** @param {boolean} disabled */

    }, {
      key: "setNativeControlDisabled",
      value: function setNativeControlDisabled(disabled) {}
    }]);

    return MDCRadioAdapter;
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
  var strings$f = {
    NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control'
  };
  /** @enum {string} */

  var cssClasses$e = {
    ROOT: 'mdc-radio',
    DISABLED: 'mdc-radio--disabled'
  };

  /**
   * @extends {MDCFoundation<!MDCRadioAdapter>}
   */

  var MDCRadioFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCRadioFoundation, _MDCFoundation);

    function MDCRadioFoundation() {
      _classCallCheck(this, MDCRadioFoundation);

      return _possibleConstructorReturn(this, _getPrototypeOf(MDCRadioFoundation).apply(this, arguments));
    }

    _createClass(MDCRadioFoundation, [{
      key: "setDisabled",

      /** @param {boolean} disabled */
      value: function setDisabled(disabled) {
        var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;
        this.adapter_.setNativeControlDisabled(disabled);

        if (disabled) {
          this.adapter_.addClass(DISABLED);
        } else {
          this.adapter_.removeClass(DISABLED);
        }
      }
    }], [{
      key: "cssClasses",

      /** @return enum {cssClasses} */
      get: function get() {
        return cssClasses$e;
      }
      /** @return enum {strings} */

    }, {
      key: "strings",
      get: function get() {
        return strings$f;
      }
      /** @return {!MDCRadioAdapter} */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCRadioAdapter} */
          {
            addClass: function addClass()
            /* className: string */
            {},
            removeClass: function removeClass()
            /* className: string */
            {},
            setNativeControlDisabled: function setNativeControlDisabled()
            /* disabled: boolean */
            {}
          }
        );
      }
    }]);

    return MDCRadioFoundation;
  }(MDCFoundation);

  //
  var script$L = {
    name: 'mdc-radio',
    mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
    model: {
      prop: 'picked',
      event: 'change'
    },
    props: {
      name: {
        type: String,
        required: true
      },
      value: String,
      picked: String,
      checked: Boolean,
      label: String,
      'align-end': Boolean,
      disabled: Boolean
    },
    data: function data() {
      return {
        classes: {},
        styles: {},
        formFieldClasses: {
          'mdc-form-field': this.label,
          'mdc-form-field--align-end': this.label && this.alignEnd
        }
      };
    },
    watch: {
      checked: 'setChecked',
      picked: 'onPicked',
      disabled: function disabled(value) {
        this.foundation.setDisabled(value);
      }
    },
    mounted: function mounted() {
      var _this = this;

      // add foundation
      this.foundation = new MDCRadioFoundation({
        addClass: function addClass(className) {
          return _this.$set(_this.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this.$delete(_this.classes, className);
        },
        setNativeControlDisabled: function setNativeControlDisabled(disabled) {
          return _this.$refs.control.disabled = disabled;
        }
      }); // add ripple

      this.ripple = new RippleBase(this, {
        isUnbounded: function isUnbounded() {
          return true;
        },
        // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
        // UI we desire.
        isSurfaceActive: function isSurfaceActive() {
          return false;
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          _this.$refs.control.addEventListener(evt, handler, applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          _this.$refs.control.removeEventListener(evt, handler, applyPassive());
        },
        computeBoundingRect: function computeBoundingRect() {
          return _this.$refs.root.getBoundingClientRect();
        }
      });
      this.formField = new MDCFormFieldFoundation({
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          _this.$refs.label.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          _this.$refs.label.removeEventListener(type, handler);
        },
        activateInputRipple: function activateInputRipple() {
          _this.ripple && _this.ripple.activate();
        },
        deactivateInputRipple: function deactivateInputRipple() {
          _this.ripple && _this.ripple.deactivate();
        }
      });
      this.foundation.init();
      this.ripple.init();
      this.formField.init();
      this.foundation.setDisabled(this.disabled);
      this.$refs.control.value = this.value || this.label;
      this.setChecked(this.checked || this.picked == this.$refs.control.value); // refresh model

      this.checked && this.sync();
    },
    beforeDestroy: function beforeDestroy() {
      this.formField.destroy();
      this.ripple.destroy();
      this.foundation.destroy();
    },
    methods: {
      onPicked: function onPicked(nv) {
        this.setChecked(this.picked == this.$refs.control.value);
      },
      setChecked: function setChecked(checked) {
        this.$refs.control.checked = checked;
      },
      isChecked: function isChecked() {
        return this.$refs.control.checked;
      },
      sync: function sync(evt) {
        this.$emit('change', this.$refs.control.value);
      }
    }
  };

  /* script */
  const __vue_script__$L = script$L;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$L.__file = "/ddata/extra/vma/components/radio/mdc-radio.vue";

  /* template */
  var __vue_render__$I = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mdc-radio-wrapper", class: _vm.formFieldClasses },
      [
        _c(
          "div",
          {
            ref: "root",
            staticClass: "mdc-radio",
            class: _vm.classes,
            style: _vm.styles
          },
          [
            _c("input", {
              ref: "control",
              staticClass: "mdc-radio__native-control",
              attrs: { id: _vm.vma_uid_, name: _vm.name, type: "radio" },
              on: { change: _vm.sync }
            }),
            _vm._v(" "),
            _vm._m(0)
          ]
        ),
        _vm._v(" "),
        _c(
          "label",
          { ref: "label", attrs: { for: _vm.vma_uid_ } },
          [_vm._t("default", [_vm._v(_vm._s(_vm.label))])],
          2
        )
      ]
    )
  };
  var __vue_staticRenderFns__$I = [
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "mdc-radio__background" }, [
        _c("div", { staticClass: "mdc-radio__outer-circle" }),
        _vm._v(" "),
        _c("div", { staticClass: "mdc-radio__inner-circle" })
      ])
    }
  ];
  __vue_render__$I._withStripped = true;

    /* style */
    const __vue_inject_styles__$L = undefined;
    /* scoped */
    const __vue_scope_id__$L = undefined;
    /* module identifier */
    const __vue_module_identifier__$L = undefined;
    /* functional template */
    const __vue_is_functional_template__$L = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcRadio = normalizeComponent(
      { render: __vue_render__$I, staticRenderFns: __vue_staticRenderFns__$I },
      __vue_inject_styles__$L,
      __vue_script__$L,
      __vue_scope_id__$L,
      __vue_is_functional_template__$L,
      __vue_module_identifier__$L,
      undefined,
      undefined
    );

  var VueMDCRadio = BasePlugin({
    mdcRadio: mdcRadio
  });

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
   * Adapter for MDC Select Icon.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the select icon into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */
  var MDCSelectIconAdapter =
  /*#__PURE__*/
  function () {
    function MDCSelectIconAdapter() {
      _classCallCheck(this, MDCSelectIconAdapter);
    }

    _createClass(MDCSelectIconAdapter, [{
      key: "getAttr",

      /**
       * Gets the value of an attribute on the icon element.
       * @param {string} attr
       * @return {string}
       */
      value: function getAttr(attr) {}
      /**
       * Sets an attribute on the icon element.
       * @param {string} attr
       * @param {string} value
       */

    }, {
      key: "setAttr",
      value: function setAttr(attr, value) {}
      /**
       * Removes an attribute from the icon element.
       * @param {string} attr
       */

    }, {
      key: "removeAttr",
      value: function removeAttr(attr) {}
      /**
       * Sets the text content of the icon element.
       * @param {string} content
       */

    }, {
      key: "setContent",
      value: function setContent(content) {}
      /**
       * Registers an event listener on the icon element for a given event.
       * @param {string} evtType
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "registerInteractionHandler",
      value: function registerInteractionHandler(evtType, handler) {}
      /**
       * Deregisters an event listener on the icon element for a given event.
       * @param {string} evtType
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "deregisterInteractionHandler",
      value: function deregisterInteractionHandler(evtType, handler) {}
      /**
       * Emits a custom event "MDCSelect:icon" denoting a user has clicked the icon.
       */

    }, {
      key: "notifyIconAction",
      value: function notifyIconAction() {}
    }]);

    return MDCSelectIconAdapter;
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
  var strings$g = {
    ICON_EVENT: 'MDCSelect:icon',
    ICON_ROLE: 'button'
  };

  /**
   * @extends {MDCFoundation<!MDCSelectIconAdapter>}
   * @final
   */

  var MDCSelectIconFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCSelectIconFoundation, _MDCFoundation);

    _createClass(MDCSelectIconFoundation, null, [{
      key: "strings",

      /** @return enum {string} */
      get: function get() {
        return strings$g;
      }
      /**
       * {@see MDCSelectIconAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCSelectIconAdapter}
       */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCSelectIconAdapter} */
          {
            getAttr: function getAttr() {},
            setAttr: function setAttr() {},
            removeAttr: function removeAttr() {},
            setContent: function setContent() {},
            registerInteractionHandler: function registerInteractionHandler() {},
            deregisterInteractionHandler: function deregisterInteractionHandler() {},
            notifyIconAction: function notifyIconAction() {}
          }
        );
      }
      /**
       * @param {!MDCSelectIconAdapter} adapter
       */

    }]);

    function MDCSelectIconFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCSelectIconFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCSelectIconFoundation).call(this, _extends(MDCSelectIconFoundation.defaultAdapter, adapter)));
      /** @private {string?} */

      _this.savedTabIndex_ = null;
      /** @private {function(!Event): undefined} */

      _this.interactionHandler_ = function (evt) {
        return _this.handleInteraction(evt);
      };

      return _this;
    }

    _createClass(MDCSelectIconFoundation, [{
      key: "init",
      value: function init() {
        var _this2 = this;

        this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
        ['click', 'keydown'].forEach(function (evtType) {
          _this2.adapter_.registerInteractionHandler(evtType, _this2.interactionHandler_);
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this3 = this;

        ['click', 'keydown'].forEach(function (evtType) {
          _this3.adapter_.deregisterInteractionHandler(evtType, _this3.interactionHandler_);
        });
      }
      /** @param {boolean} disabled */

    }, {
      key: "setDisabled",
      value: function setDisabled(disabled) {
        if (!this.savedTabIndex_) {
          return;
        }

        if (disabled) {
          this.adapter_.setAttr('tabindex', '-1');
          this.adapter_.removeAttr('role');
        } else {
          this.adapter_.setAttr('tabindex', this.savedTabIndex_);
          this.adapter_.setAttr('role', strings$g.ICON_ROLE);
        }
      }
      /** @param {string} label */

    }, {
      key: "setAriaLabel",
      value: function setAriaLabel(label) {
        this.adapter_.setAttr('aria-label', label);
      }
      /** @param {string} content */

    }, {
      key: "setContent",
      value: function setContent(content) {
        this.adapter_.setContent(content);
      }
      /**
       * Handles an interaction event
       * @param {!Event} evt
       */

    }, {
      key: "handleInteraction",
      value: function handleInteraction(evt) {
        if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
          this.adapter_.notifyIconAction();
        }
      }
    }]);

    return MDCSelectIconFoundation;
  }(MDCFoundation);

  /**
   * @extends {MDCComponent<!MDCSelectIconFoundation>}
   * @final
   */

  var MDCSelectIcon =
  /*#__PURE__*/
  function (_MDCComponent) {
    _inherits(MDCSelectIcon, _MDCComponent);

    function MDCSelectIcon() {
      _classCallCheck(this, MDCSelectIcon);

      return _possibleConstructorReturn(this, _getPrototypeOf(MDCSelectIcon).apply(this, arguments));
    }

    _createClass(MDCSelectIcon, [{
      key: "getDefaultFoundation",

      /**
       * @return {!MDCSelectIconFoundation}
       */
      value: function getDefaultFoundation() {
        var _this = this;

        return new MDCSelectIconFoundation(
        /** @type {!MDCSelectIconAdapter} */
        _extends({
          getAttr: function getAttr(attr) {
            return _this.root_.getAttribute(attr);
          },
          setAttr: function setAttr(attr, value) {
            return _this.root_.setAttribute(attr, value);
          },
          removeAttr: function removeAttr(attr) {
            return _this.root_.removeAttribute(attr);
          },
          setContent: function setContent(content) {
            _this.root_.textContent = content;
          },
          registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
            return _this.root_.addEventListener(evtType, handler);
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
            return _this.root_.removeEventListener(evtType, handler);
          },
          notifyIconAction: function notifyIconAction() {
            return _this.emit(MDCSelectIconFoundation.strings.ICON_EVENT, {}
            /* evtData */
            , true
            /* shouldBubble */
            );
          }
        }));
      }
    }, {
      key: "foundation",

      /**
       * @return {!MDCSelectIconFoundation}
       */
      get: function get() {
        return this.foundation_;
      }
    }], [{
      key: "attachTo",

      /**
       * @param {!Element} root
       * @return {!MDCSelectIcon}
       */
      value: function attachTo(root) {
        return new MDCSelectIcon(root);
      }
    }]);

    return MDCSelectIcon;
  }(MDCComponent);

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
   * Adapter for MDC Select Helper Text.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the Select helper text into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */
  var MDCSelectHelperTextAdapter =
  /*#__PURE__*/
  function () {
    function MDCSelectHelperTextAdapter() {
      _classCallCheck(this, MDCSelectHelperTextAdapter);
    }

    _createClass(MDCSelectHelperTextAdapter, [{
      key: "addClass",

      /**
       * Adds a class to the helper text element.
       * @param {string} className
       */
      value: function addClass(className) {}
      /**
       * Removes a class from the helper text element.
       * @param {string} className
       */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}
      /**
       * Returns whether or not the helper text element contains the given class.
       * @param {string} className
       * @return {boolean}
       */

    }, {
      key: "hasClass",
      value: function hasClass(className) {}
      /**
       * Sets an attribute with a given value on the helper text element.
       * @param {string} attr
       * @param {string} value
       */

    }, {
      key: "setAttr",
      value: function setAttr(attr, value) {}
      /**
       * Removes an attribute from the helper text element.
       * @param {string} attr
       */

    }, {
      key: "removeAttr",
      value: function removeAttr(attr) {}
      /**
       * Sets the text content for the helper text element.
       * @param {string} content
       */

    }, {
      key: "setContent",
      value: function setContent(content) {}
    }]);

    return MDCSelectHelperTextAdapter;
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
  var strings$h = {
    ARIA_HIDDEN: 'aria-hidden',
    ROLE: 'role'
  };
  /** @enum {string} */

  var cssClasses$f = {
    HELPER_TEXT_PERSISTENT: 'mdc-select-helper-text--persistent',
    HELPER_TEXT_VALIDATION_MSG: 'mdc-select-helper-text--validation-msg'
  };

  /**
   * @extends {MDCFoundation<!MDCSelectHelperTextAdapter>}
   * @final
   */

  var MDCSelectHelperTextFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCSelectHelperTextFoundation, _MDCFoundation);

    _createClass(MDCSelectHelperTextFoundation, null, [{
      key: "cssClasses",

      /** @return enum {string} */
      get: function get() {
        return cssClasses$f;
      }
      /** @return enum {string} */

    }, {
      key: "strings",
      get: function get() {
        return strings$h;
      }
      /**
       * {@see MDCSelectHelperTextAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCSelectHelperTextAdapter}
       */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCSelectHelperTextAdapter} */
          {
            addClass: function addClass() {},
            removeClass: function removeClass() {},
            hasClass: function hasClass() {},
            setAttr: function setAttr() {},
            removeAttr: function removeAttr() {},
            setContent: function setContent() {}
          }
        );
      }
      /**
       * @param {!MDCSelectHelperTextAdapter} adapter
       */

    }]);

    function MDCSelectHelperTextFoundation(adapter) {
      _classCallCheck(this, MDCSelectHelperTextFoundation);

      return _possibleConstructorReturn(this, _getPrototypeOf(MDCSelectHelperTextFoundation).call(this, _extends(MDCSelectHelperTextFoundation.defaultAdapter, adapter)));
    }
    /**
     * Sets the content of the helper text field.
     * @param {string} content
     */


    _createClass(MDCSelectHelperTextFoundation, [{
      key: "setContent",
      value: function setContent(content) {
        this.adapter_.setContent(content);
      }
      /** @param {boolean} isPersistent Sets the persistency of the helper text. */

    }, {
      key: "setPersistent",
      value: function setPersistent(isPersistent) {
        if (isPersistent) {
          this.adapter_.addClass(cssClasses$f.HELPER_TEXT_PERSISTENT);
        } else {
          this.adapter_.removeClass(cssClasses$f.HELPER_TEXT_PERSISTENT);
        }
      }
      /**
       * @param {boolean} isValidation True to make the helper text act as an
       *   error validation message.
       */

    }, {
      key: "setValidation",
      value: function setValidation(isValidation) {
        if (isValidation) {
          this.adapter_.addClass(cssClasses$f.HELPER_TEXT_VALIDATION_MSG);
        } else {
          this.adapter_.removeClass(cssClasses$f.HELPER_TEXT_VALIDATION_MSG);
        }
      }
      /** Makes the helper text visible to the screen reader. */

    }, {
      key: "showToScreenReader",
      value: function showToScreenReader() {
        this.adapter_.removeAttr(strings$h.ARIA_HIDDEN);
      }
      /**
       * Sets the validity of the helper text based on the select validity.
       * @param {boolean} selectIsValid
       */

    }, {
      key: "setValidity",
      value: function setValidity(selectIsValid) {
        var helperTextIsPersistent = this.adapter_.hasClass(cssClasses$f.HELPER_TEXT_PERSISTENT);
        var helperTextIsValidationMsg = this.adapter_.hasClass(cssClasses$f.HELPER_TEXT_VALIDATION_MSG);
        var validationMsgNeedsDisplay = helperTextIsValidationMsg && !selectIsValid;

        if (validationMsgNeedsDisplay) {
          this.adapter_.setAttr(strings$h.ROLE, 'alert');
        } else {
          this.adapter_.removeAttr(strings$h.ROLE);
        }

        if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
          this.hide_();
        }
      }
      /**
       * Hides the help text from screen readers.
       * @private
       */

    }, {
      key: "hide_",
      value: function hide_() {
        this.adapter_.setAttr(strings$h.ARIA_HIDDEN, 'true');
      }
    }]);

    return MDCSelectHelperTextFoundation;
  }(MDCFoundation);

  /**
   * @extends {MDCComponent<!MDCSelectHelperTextFoundation>}
   * @final
   */

  var MDCSelectHelperText =
  /*#__PURE__*/
  function (_MDCComponent) {
    _inherits(MDCSelectHelperText, _MDCComponent);

    function MDCSelectHelperText() {
      _classCallCheck(this, MDCSelectHelperText);

      return _possibleConstructorReturn(this, _getPrototypeOf(MDCSelectHelperText).apply(this, arguments));
    }

    _createClass(MDCSelectHelperText, [{
      key: "getDefaultFoundation",

      /**
       * @return {!MDCSelectHelperTextFoundation}
       */
      value: function getDefaultFoundation() {
        var _this = this;

        return new MDCSelectHelperTextFoundation(
        /** @type {!MDCSelectHelperTextAdapter} */
        _extends({
          addClass: function addClass(className) {
            return _this.root_.classList.add(className);
          },
          removeClass: function removeClass(className) {
            return _this.root_.classList.remove(className);
          },
          hasClass: function hasClass(className) {
            return _this.root_.classList.contains(className);
          },
          setAttr: function setAttr(attr, value) {
            return _this.root_.setAttribute(attr, value);
          },
          removeAttr: function removeAttr(attr) {
            return _this.root_.removeAttribute(attr);
          },
          setContent: function setContent(content) {
            _this.root_.textContent = content;
          }
        }));
      }
    }, {
      key: "foundation",

      /**
       * @return {!MDCSelectHelperTextFoundation}
       */
      get: function get() {
        return this.foundation_;
      }
    }], [{
      key: "attachTo",

      /**
       * @param {!Element} root
       * @return {!MDCSelectHelperText}
       */
      value: function attachTo(root) {
        return new MDCSelectHelperText(root);
      }
    }]);

    return MDCSelectHelperText;
  }(MDCComponent);

  /**
   * Adapter for MDC Select. Provides an interface for managing
   * - classes
   * - dom
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

  var MDCSelectAdapter =
  /*#__PURE__*/
  function () {
    function MDCSelectAdapter() {
      _classCallCheck(this, MDCSelectAdapter);
    }

    _createClass(MDCSelectAdapter, [{
      key: "addClass",

      /**
       * Adds class to root element.
       * @param {string} className
       */
      value: function addClass(className) {}
      /**
       * Removes a class from the root element.
       * @param {string} className
       */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}
      /**
       * Returns true if the root element contains the given class name.
       * @param {string} className
       * @return {boolean}
       */

    }, {
      key: "hasClass",
      value: function hasClass(className) {}
      /**
       * Activates the bottom line, showing a focused state.
       */

    }, {
      key: "activateBottomLine",
      value: function activateBottomLine() {}
      /**
       * Deactivates the bottom line.
       */

    }, {
      key: "deactivateBottomLine",
      value: function deactivateBottomLine() {}
      /**
       * Sets the value of the select.
       * @param {string} value
       */

    }, {
      key: "setValue",
      value: function setValue(value) {}
      /**
       * Returns the selected value of the select element.
       * @return {string}
       */

    }, {
      key: "getValue",
      value: function getValue() {}
      /**
       * Floats label determined based off of the shouldFloat argument.
       * @param {boolean} shouldFloat
       */

    }, {
      key: "floatLabel",
      value: function floatLabel(shouldFloat) {}
      /**
       * Returns width of label in pixels, if the label exists.
       * @return {number}
       */

    }, {
      key: "getLabelWidth",
      value: function getLabelWidth() {}
      /**
       * Returns true if outline element exists, false if it doesn't.
       * @return {boolean}
       */

    }, {
      key: "hasOutline",
      value: function hasOutline() {}
      /**
       * Only implement if outline element exists.
       * @param {number} labelWidth
       */

    }, {
      key: "notchOutline",
      value: function notchOutline(labelWidth) {}
      /**
       * Closes notch in outline element, if the outline exists.
       */

    }, {
      key: "closeOutline",
      value: function closeOutline() {}
      /**
       * Opens the menu.
       */

    }, {
      key: "openMenu",
      value: function openMenu() {}
      /**
       * Closes the menu.
       */

    }, {
      key: "closeMenu",
      value: function closeMenu() {}
      /**
       * Returns true if the menu is currently open.
       * @return {boolean}
       */

    }, {
      key: "isMenuOpen",
      value: function isMenuOpen() {}
      /**
       * Sets the selected index of the select to the index provided.
       * @param {number} index
       */

    }, {
      key: "setSelectedIndex",
      value: function setSelectedIndex(index) {}
      /**
       * Sets the select to disabled.
       * @param {boolean} isDisabled
       */

    }, {
      key: "setDisabled",
      value: function setDisabled(isDisabled) {}
      /**
       * Sets the line ripple transform origin center.
       * @param {number} normalizedX
       */

    }, {
      key: "setRippleCenter",
      value: function setRippleCenter(normalizedX) {}
      /**
       * Emits a change event when an element is selected.
       * @param {string} value
       */

    }, {
      key: "notifyChange",
      value: function notifyChange(value) {}
      /**
       * Checks if the select is currently valid.
       * @return {boolean} isValid
       */

    }, {
      key: "checkValidity",
      value: function checkValidity() {}
      /**
       * Adds/Removes the invalid class.
       * @param {boolean} isValid
       */

    }, {
      key: "setValid",
      value: function setValid(isValid) {}
    }]);

    return MDCSelectAdapter;
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
  var cssClasses$g = {
    DISABLED: 'mdc-select--disabled',
    ROOT: 'mdc-select',
    OUTLINED: 'mdc-select--outlined',
    FOCUSED: 'mdc-select--focused',
    SELECTED_ITEM_CLASS: 'mdc-list-item--selected',
    WITH_LEADING_ICON: 'mdc-select--with-leading-icon',
    INVALID: 'mdc-select--invalid',
    REQUIRED: 'mdc-select--required'
  };
  /** @enum {string} */

  var strings$i = {
    ARIA_CONTROLS: 'aria-controls',
    CHANGE_EVENT: 'MDCSelect:change',
    SELECTED_ITEM_SELECTOR: ".".concat(cssClasses$g.SELECTED_ITEM_CLASS),
    LEADING_ICON_SELECTOR: '.mdc-select__icon',
    SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text',
    HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
    MENU_SELECTOR: '.mdc-select__menu',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    LABEL_SELECTOR: '.mdc-floating-label',
    NATIVE_CONTROL_SELECTOR: '.mdc-select__native-control',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    ENHANCED_VALUE_ATTR: 'data-value',
    ARIA_SELECTED_ATTR: 'aria-selected'
  };
  /** @enum {number} */

  var numbers$4 = {
    LABEL_SCALE: 0.75
  };

  /**
   * @extends {MDCFoundation<!MDCSelectAdapter>}
   * @final
   */

  var MDCSelectFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCSelectFoundation, _MDCFoundation);

    _createClass(MDCSelectFoundation, null, [{
      key: "cssClasses",

      /** @return enum {string} */
      get: function get() {
        return cssClasses$g;
      }
      /** @return enum {number} */

    }, {
      key: "numbers",
      get: function get() {
        return numbers$4;
      }
      /** @return enum {string} */

    }, {
      key: "strings",
      get: function get() {
        return strings$i;
      }
      /**
       * {@see MDCSelectAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCSelectAdapter}
       */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCSelectAdapter} */
          {
            addClass: function addClass()
            /* className: string */
            {},
            removeClass: function removeClass()
            /* className: string */
            {},
            hasClass: function hasClass() {
              return (
                /* className: string */
                false
              );
            },
            activateBottomLine: function activateBottomLine() {},
            deactivateBottomLine: function deactivateBottomLine() {},
            setValue: function setValue() {},
            getValue: function getValue() {},
            floatLabel: function floatLabel()
            /* value: boolean */
            {},
            getLabelWidth: function getLabelWidth() {},
            hasOutline: function hasOutline() {
              return false;
            },
            notchOutline: function notchOutline()
            /* labelWidth: number, */
            {},
            closeOutline: function closeOutline() {},
            openMenu: function openMenu() {},
            closeMenu: function closeMenu() {},
            isMenuOpen: function isMenuOpen() {},
            setSelectedIndex: function setSelectedIndex() {},
            setDisabled: function setDisabled() {},
            setRippleCenter: function setRippleCenter() {},
            notifyChange: function notifyChange() {},
            checkValidity: function checkValidity() {},
            setValid: function setValid() {}
          }
        );
      }
      /**
       * @param {!MDCSelectAdapter} adapter
       * @param {!FoundationMapType=} foundationMap Map from subcomponent names to their subfoundations.
       */

    }]);

    function MDCSelectFoundation(adapter) {
      var _this;

      var foundationMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :
      /** @type {!FoundationMapType} */
      {};

      _classCallCheck(this, MDCSelectFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCSelectFoundation).call(this, _extends(MDCSelectFoundation.defaultAdapter, adapter)));
      /** @type {!MDCSelectIconFoundation|undefined} */

      _this.leadingIcon_ = foundationMap.leadingIcon;
      /** @type {!MDCSelectHelperTextFoundation|undefined} */

      _this.helperText_ = foundationMap.helperText;
      return _this;
    }

    _createClass(MDCSelectFoundation, [{
      key: "setSelectedIndex",
      value: function setSelectedIndex(index) {
        this.adapter_.setSelectedIndex(index);
        this.adapter_.closeMenu();
        var didChange = true;
        this.handleChange(didChange);
      }
    }, {
      key: "setValue",
      value: function setValue(value) {
        this.adapter_.setValue(value);
        var didChange = true;
        this.handleChange(didChange);
      }
    }, {
      key: "getValue",
      value: function getValue() {
        return this.adapter_.getValue();
      }
    }, {
      key: "setDisabled",
      value: function setDisabled(isDisabled) {
        isDisabled ? this.adapter_.addClass(cssClasses$g.DISABLED) : this.adapter_.removeClass(cssClasses$g.DISABLED);
        this.adapter_.setDisabled(isDisabled);
        this.adapter_.closeMenu();

        if (this.leadingIcon_) {
          this.leadingIcon_.setDisabled(isDisabled);
        }
      }
      /**
       * @param {string} content Sets the content of the helper text.
       */

    }, {
      key: "setHelperTextContent",
      value: function setHelperTextContent(content) {
        if (this.helperText_) {
          this.helperText_.setContent(content);
        }
      }
    }, {
      key: "layout",
      value: function layout() {
        var openNotch = this.getValue().length > 0;
        this.notchOutline(openNotch);
      }
      /**
       * Handles value changes, via change event or programmatic updates.
       */

    }, {
      key: "handleChange",
      value: function handleChange() {
        var didChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var value = this.getValue();
        var optionHasValue = value.length > 0;
        var isRequired = this.adapter_.hasClass(cssClasses$g.REQUIRED);
        this.notchOutline(optionHasValue);

        if (!this.adapter_.hasClass(cssClasses$g.FOCUSED)) {
          this.adapter_.floatLabel(optionHasValue);
        }

        if (didChange) {
          this.adapter_.notifyChange(value);

          if (isRequired) {
            this.setValid(this.isValid());

            if (this.helperText_) {
              this.helperText_.setValidity(this.isValid());
            }
          }
        }
      }
      /**
       * Handles focus events from select element.
       */

    }, {
      key: "handleFocus",
      value: function handleFocus() {
        this.adapter_.addClass(cssClasses$g.FOCUSED);
        this.adapter_.floatLabel(true);
        this.notchOutline(true);
        this.adapter_.activateBottomLine();

        if (this.helperText_) {
          this.helperText_.showToScreenReader();
        }
      }
      /**
       * Handles blur events from select element.
       */

    }, {
      key: "handleBlur",
      value: function handleBlur() {
        if (this.adapter_.isMenuOpen()) return;
        this.adapter_.removeClass(cssClasses$g.FOCUSED);
        this.handleChange(false);
        this.adapter_.deactivateBottomLine();
        var isRequired = this.adapter_.hasClass(cssClasses$g.REQUIRED);

        if (isRequired) {
          this.setValid(this.isValid());

          if (this.helperText_) {
            this.helperText_.setValidity(this.isValid());
          }
        }
      }
    }, {
      key: "handleClick",
      value: function handleClick(normalizedX) {
        if (this.adapter_.isMenuOpen()) return;
        this.adapter_.setRippleCenter(normalizedX);
        this.adapter_.openMenu();
      }
    }, {
      key: "handleKeydown",
      value: function handleKeydown(event) {
        if (this.adapter_.isMenuOpen()) return;
        var isEnter = event.key === 'Enter' || event.keyCode === 13;
        var isSpace = event.key === 'Space' || event.keyCode === 32;
        var arrowUp = event.key === 'ArrowUp' || event.keyCode === 38;
        var arrowDown = event.key === 'ArrowDown' || event.keyCode === 40;

        if (this.adapter_.hasClass(cssClasses$g.FOCUSED) && (isEnter || isSpace || arrowUp || arrowDown)) {
          this.adapter_.openMenu();
          event.preventDefault();
        }
      }
      /**
       * Opens/closes the notched outline.
       * @param {boolean} openNotch
       */

    }, {
      key: "notchOutline",
      value: function notchOutline(openNotch) {
        if (!this.adapter_.hasOutline()) {
          return;
        }

        var isFocused = this.adapter_.hasClass(cssClasses$g.FOCUSED);

        if (openNotch) {
          var labelScale = numbers$4.LABEL_SCALE;
          var labelWidth = this.adapter_.getLabelWidth() * labelScale;
          this.adapter_.notchOutline(labelWidth);
        } else if (!isFocused) {
          this.adapter_.closeOutline();
        }
      }
      /**
       * Sets the aria label of the leading icon.
       * @param {string} label
       */

    }, {
      key: "setLeadingIconAriaLabel",
      value: function setLeadingIconAriaLabel(label) {
        if (this.leadingIcon_) {
          this.leadingIcon_.setAriaLabel(label);
        }
      }
      /**
       * Sets the text content of the leading icon.
       * @param {string} content
       */

    }, {
      key: "setLeadingIconContent",
      value: function setLeadingIconContent(content) {
        if (this.leadingIcon_) {
          this.leadingIcon_.setContent(content);
        }
      }
    }, {
      key: "setValid",
      value: function setValid(isValid) {
        this.adapter_.setValid(isValid);
      }
    }, {
      key: "isValid",
      value: function isValid() {
        return this.adapter_.checkValidity();
      }
    }]);

    return MDCSelectFoundation;
  }(MDCFoundation);

  /**
   * @license
   * Copyright 2017 Google Inc.
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
   * Adapter for MDC Floating Label.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the floating label into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */
  var MDCFloatingLabelAdapter =
  /*#__PURE__*/
  function () {
    function MDCFloatingLabelAdapter() {
      _classCallCheck(this, MDCFloatingLabelAdapter);
    }

    _createClass(MDCFloatingLabelAdapter, [{
      key: "addClass",

      /**
       * Adds a class to the label element.
       * @param {string} className
       */
      value: function addClass(className) {}
      /**
       * Removes a class from the label element.
       * @param {string} className
       */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}
      /**
       * Returns the width of the label element.
       * @return {number}
       */

    }, {
      key: "getWidth",
      value: function getWidth() {}
      /**
       * Registers an event listener on the root element for a given event.
       * @param {string} evtType
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "registerInteractionHandler",
      value: function registerInteractionHandler(evtType, handler) {}
      /**
       * Deregisters an event listener on the root element for a given event.
       * @param {string} evtType
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "deregisterInteractionHandler",
      value: function deregisterInteractionHandler(evtType, handler) {}
    }]);

    return MDCFloatingLabelAdapter;
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
  var cssClasses$h = {
    LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
    LABEL_SHAKE: 'mdc-floating-label--shake',
    ROOT: 'mdc-floating-label'
  };

  /**
   * @extends {MDCFoundation<!MDCFloatingLabelAdapter>}
   * @final
   */

  var MDCFloatingLabelFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCFloatingLabelFoundation, _MDCFoundation);

    _createClass(MDCFloatingLabelFoundation, null, [{
      key: "cssClasses",

      /** @return enum {string} */
      get: function get() {
        return cssClasses$h;
      }
      /**
       * {@see MDCFloatingLabelAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCFloatingLabelAdapter}
       */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCFloatingLabelAdapter} */
          {
            addClass: function addClass() {},
            removeClass: function removeClass() {},
            getWidth: function getWidth() {},
            registerInteractionHandler: function registerInteractionHandler() {},
            deregisterInteractionHandler: function deregisterInteractionHandler() {}
          }
        );
      }
      /**
       * @param {!MDCFloatingLabelAdapter} adapter
       */

    }]);

    function MDCFloatingLabelFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCFloatingLabelFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCFloatingLabelFoundation).call(this, _extends(MDCFloatingLabelFoundation.defaultAdapter, adapter)));
      /** @private {function(!Event): undefined} */

      _this.shakeAnimationEndHandler_ = function () {
        return _this.handleShakeAnimationEnd_();
      };

      return _this;
    }

    _createClass(MDCFloatingLabelFoundation, [{
      key: "init",
      value: function init() {
        this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
      }
      /**
       * Returns the width of the label element.
       * @return {number}
       */

    }, {
      key: "getWidth",
      value: function getWidth() {
        return this.adapter_.getWidth();
      }
      /**
       * Styles the label to produce the label shake for errors.
       * @param {boolean} shouldShake adds shake class if true,
       * otherwise removes shake class.
       */

    }, {
      key: "shake",
      value: function shake(shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

        if (shouldShake) {
          this.adapter_.addClass(LABEL_SHAKE);
        } else {
          this.adapter_.removeClass(LABEL_SHAKE);
        }
      }
      /**
       * Styles the label to float or dock.
       * @param {boolean} shouldFloat adds float class if true, otherwise remove
       * float and shake class to dock label.
       */

    }, {
      key: "float",
      value: function float(shouldFloat) {
        var _MDCFloatingLabelFoun = MDCFloatingLabelFoundation.cssClasses,
            LABEL_FLOAT_ABOVE = _MDCFloatingLabelFoun.LABEL_FLOAT_ABOVE,
            LABEL_SHAKE = _MDCFloatingLabelFoun.LABEL_SHAKE;

        if (shouldFloat) {
          this.adapter_.addClass(LABEL_FLOAT_ABOVE);
        } else {
          this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
          this.adapter_.removeClass(LABEL_SHAKE);
        }
      }
      /**
       * Handles an interaction event on the root element.
       */

    }, {
      key: "handleShakeAnimationEnd_",
      value: function handleShakeAnimationEnd_() {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        this.adapter_.removeClass(LABEL_SHAKE);
      }
    }]);

    return MDCFloatingLabelFoundation;
  }(MDCFoundation);

  //
  var script$M = {
    name: 'mdc-select-label',
    data: function data() {
      return {
        labelClasses: {}
      };
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCFloatingLabelFoundation({
        addClass: function addClass(className) {
          _this.$set(_this.labelClasses, className, true);
        },
        removeClass: function removeClass(className) {
          _this.$delete(_this.labelClasses, className);
        },
        getWidth: function getWidth() {
          return _this.$el.offsetWidth;
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          _this.$el.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          _this.$el.removeEventListener(evtType, handler);
        }
      });
      this.foundation.init();
    },
    beforeDestroy: function beforeDestroy() {
      var foundation = this.foundation;
      this.foundation = null;
      foundation.destroy();
    }
  };

  /* script */
  const __vue_script__$M = script$M;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$M.__file = "/ddata/extra/vma/components/select/mdc-select-label.vue";

  /* template */
  var __vue_render__$J = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "label",
      { staticClass: "mdc-floating-label", class: _vm.labelClasses },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$J = [];
  __vue_render__$J._withStripped = true;

    /* style */
    const __vue_inject_styles__$M = undefined;
    /* scoped */
    const __vue_scope_id__$M = undefined;
    /* module identifier */
    const __vue_module_identifier__$M = undefined;
    /* functional template */
    const __vue_is_functional_template__$M = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var SelectLabel = normalizeComponent(
      { render: __vue_render__$J, staticRenderFns: __vue_staticRenderFns__$J },
      __vue_inject_styles__$M,
      __vue_script__$M,
      __vue_scope_id__$M,
      __vue_is_functional_template__$M,
      __vue_module_identifier__$M,
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
   * Adapter for MDC TextField Line Ripple.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the line ripple into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */
  var MDCLineRippleAdapter =
  /*#__PURE__*/
  function () {
    function MDCLineRippleAdapter() {
      _classCallCheck(this, MDCLineRippleAdapter);
    }

    _createClass(MDCLineRippleAdapter, [{
      key: "addClass",

      /**
       * Adds a class to the line ripple element.
       * @param {string} className
       */
      value: function addClass(className) {}
      /**
       * Removes a class from the line ripple element.
       * @param {string} className
       */

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
      /**
       * Sets the style property with propertyName to value on the root element.
       * @param {string} propertyName
       * @param {string} value
       */

    }, {
      key: "setStyle",
      value: function setStyle(propertyName, value) {}
      /**
       * Registers an event listener on the line ripple element for a given event.
       * @param {string} evtType
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "registerEventHandler",
      value: function registerEventHandler(evtType, handler) {}
      /**
       * Deregisters an event listener on the line ripple element for a given event.
       * @param {string} evtType
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "deregisterEventHandler",
      value: function deregisterEventHandler(evtType, handler) {}
    }]);

    return MDCLineRippleAdapter;
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
  var cssClasses$i = {
    LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
    LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
  };

  /**
   * @extends {MDCFoundation<!MDCLineRippleAdapter>}
   * @final
   */

  var MDCLineRippleFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCLineRippleFoundation, _MDCFoundation);

    _createClass(MDCLineRippleFoundation, null, [{
      key: "cssClasses",

      /** @return enum {string} */
      get: function get() {
        return cssClasses$i;
      }
      /**
       * {@see MDCLineRippleAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCLineRippleAdapter}
       */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCLineRippleAdapter} */
          {
            addClass: function addClass() {},
            removeClass: function removeClass() {},
            hasClass: function hasClass() {},
            setStyle: function setStyle() {},
            registerEventHandler: function registerEventHandler() {},
            deregisterEventHandler: function deregisterEventHandler() {}
          }
        );
      }
      /**
       * @param {!MDCLineRippleAdapter=} adapter
       */

    }]);

    function MDCLineRippleFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCLineRippleFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCLineRippleFoundation).call(this, _extends(MDCLineRippleFoundation.defaultAdapter, adapter)));
      /** @private {function(!Event): undefined} */

      _this.transitionEndHandler_ = function (evt) {
        return _this.handleTransitionEnd(evt);
      };

      return _this;
    }

    _createClass(MDCLineRippleFoundation, [{
      key: "init",
      value: function init() {
        this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
      }
      /**
       * Activates the line ripple
       */

    }, {
      key: "activate",
      value: function activate() {
        this.adapter_.removeClass(cssClasses$i.LINE_RIPPLE_DEACTIVATING);
        this.adapter_.addClass(cssClasses$i.LINE_RIPPLE_ACTIVE);
      }
      /**
       * Sets the center of the ripple animation to the given X coordinate.
       * @param {number} xCoordinate
       */

    }, {
      key: "setRippleCenter",
      value: function setRippleCenter(xCoordinate) {
        this.adapter_.setStyle('transform-origin', "".concat(xCoordinate, "px center"));
      }
      /**
       * Deactivates the line ripple
       */

    }, {
      key: "deactivate",
      value: function deactivate() {
        this.adapter_.addClass(cssClasses$i.LINE_RIPPLE_DEACTIVATING);
      }
      /**
       * Handles a transition end event
       * @param {!Event} evt
       */

    }, {
      key: "handleTransitionEnd",
      value: function handleTransitionEnd(evt) {
        // Wait for the line ripple to be either transparent or opaque
        // before emitting the animation end event
        var isDeactivating = this.adapter_.hasClass(cssClasses$i.LINE_RIPPLE_DEACTIVATING);

        if (evt.propertyName === 'opacity') {
          if (isDeactivating) {
            this.adapter_.removeClass(cssClasses$i.LINE_RIPPLE_ACTIVE);
            this.adapter_.removeClass(cssClasses$i.LINE_RIPPLE_DEACTIVATING);
          }
        }
      }
    }]);

    return MDCLineRippleFoundation;
  }(MDCFoundation);

  //
  var script$N = {
    name: 'mdc-select-line-ripple',
    data: function data() {
      return {
        lineClasses: {},
        lineStyles: {}
      };
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCLineRippleFoundation({
        addClass: function addClass(className) {
          _this.$set(_this.lineClasses, className, true);
        },
        removeClass: function removeClass(className) {
          _this.$delete(_this.lineClasses, className);
        },
        hasClass: function hasClass(className) {
          _this.$el.classList.contains(className);
        },
        setStyle: function setStyle(name, value) {
          _this.$set(_this.lineStyles, name, value);
        },
        registerEventHandler: function registerEventHandler(evtType, handler) {
          _this.$el.addEventListener(evtType, handler);
        },
        deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
          _this.$el.removeEventListener(evtType, handler);
        }
      });
      this.foundation.init();
    },
    beforeDestroy: function beforeDestroy() {
      var foundation = this.foundation;
      this.foundation = null;
      foundation.destroy();
    }
  };

  /* script */
  const __vue_script__$N = script$N;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$N.__file = "/ddata/extra/vma/components/select/mdc-select-line-ripple.vue";

  /* template */
  var __vue_render__$K = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      staticClass: "mdc-line-ripple",
      class: _vm.lineClasses,
      style: _vm.lineStyles
    })
  };
  var __vue_staticRenderFns__$K = [];
  __vue_render__$K._withStripped = true;

    /* style */
    const __vue_inject_styles__$N = undefined;
    /* scoped */
    const __vue_scope_id__$N = undefined;
    /* module identifier */
    const __vue_module_identifier__$N = undefined;
    /* functional template */
    const __vue_is_functional_template__$N = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var SelectLineRiple = normalizeComponent(
      { render: __vue_render__$K, staticRenderFns: __vue_staticRenderFns__$K },
      __vue_inject_styles__$N,
      __vue_script__$N,
      __vue_scope_id__$N,
      __vue_is_functional_template__$N,
      __vue_module_identifier__$N,
      undefined,
      undefined
    );

  /**
   * @license
   * Copyright 2017 Google Inc.
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
   * Adapter for MDC Notched Outline.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the Notched Outline into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */
  var MDCNotchedOutlineAdapter =
  /*#__PURE__*/
  function () {
    function MDCNotchedOutlineAdapter() {
      _classCallCheck(this, MDCNotchedOutlineAdapter);
    }

    _createClass(MDCNotchedOutlineAdapter, [{
      key: "addClass",

      /**
       * Adds a class to the root element.
       * @param {string} className
       */
      value: function addClass(className) {}
      /**
       * Removes a class from the root element.
       * @param {string} className
       */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}
      /**
       * Sets the width style property of the notch element.
       * @param {number} width
       */

    }, {
      key: "setNotchWidthProperty",
      value: function setNotchWidthProperty(width) {}
      /**
       * Removes the width style property from the notch element.
       */

    }, {
      key: "removeNotchWidthProperty",
      value: function removeNotchWidthProperty() {}
    }]);

    return MDCNotchedOutlineAdapter;
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
  var strings$j = {
    NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch'
  };
  /** @enum {number} */

  var numbers$5 = {
    // This should stay in sync with $mdc-notched-outline-padding * 2.
    NOTCH_ELEMENT_PADDING: 8
  };
  /** @enum {string} */

  var cssClasses$j = {
    OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
    OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
    NO_LABEL: 'mdc-notched-outline--no-label'
  };

  /**
   * @extends {MDCFoundation<!MDCNotchedOutlineAdapter>}
   * @final
   */

  var MDCNotchedOutlineFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCNotchedOutlineFoundation, _MDCFoundation);

    _createClass(MDCNotchedOutlineFoundation, null, [{
      key: "strings",

      /** @return enum {string} */
      get: function get() {
        return strings$j;
      }
      /** @return enum {string} */

    }, {
      key: "cssClasses",
      get: function get() {
        return cssClasses$j;
      }
      /** @return enum {number} */

    }, {
      key: "numbers",
      get: function get() {
        return numbers$5;
      }
      /**
       * {@see MDCNotchedOutlineAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCNotchedOutlineAdapter}
       */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCNotchedOutlineAdapter} */
          {
            addClass: function addClass() {},
            removeClass: function removeClass() {},
            setNotchWidthProperty: function setNotchWidthProperty() {},
            removeNotchWidthProperty: function removeNotchWidthProperty() {}
          }
        );
      }
      /**
       * @param {!MDCNotchedOutlineAdapter} adapter
       */

    }]);

    function MDCNotchedOutlineFoundation(adapter) {
      _classCallCheck(this, MDCNotchedOutlineFoundation);

      return _possibleConstructorReturn(this, _getPrototypeOf(MDCNotchedOutlineFoundation).call(this, _extends(MDCNotchedOutlineFoundation.defaultAdapter, adapter)));
    }
    /**
     * Adds the outline notched selector and updates the notch width
     * calculated based off of notchWidth.
     * @param {number} notchWidth
     */


    _createClass(MDCNotchedOutlineFoundation, [{
      key: "notch",
      value: function notch(notchWidth) {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

        if (notchWidth > 0) {
          notchWidth += numbers$5.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
        }

        this.adapter_.setNotchWidthProperty(notchWidth);
        this.adapter_.addClass(OUTLINE_NOTCHED);
      }
      /**
       * Removes notched outline selector to close the notch in the outline.
       */

    }, {
      key: "closeNotch",
      value: function closeNotch() {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        this.adapter_.removeClass(OUTLINE_NOTCHED);
        this.adapter_.removeNotchWidthProperty();
      }
    }]);

    return MDCNotchedOutlineFoundation;
  }(MDCFoundation);

  //
  var script$O = {
    name: 'mdc-select-notched-outline',
    data: function data() {
      return {
        outlinedClasses: {}
      };
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCNotchedOutlineFoundation({
        getWidth: function getWidth() {
          return _this.$refs.outlined.offsetWidth;
        },
        getHeight: function getHeight() {
          return _this.$refs.outlined.offsetHeight;
        },
        addClass: function addClass(className) {
          _this.$set(_this.outlinedClasses, className, true);
        },
        removeClass: function removeClass(className) {
          _this.$delete(_this.outlinedClasses, className);
        },
        setOutlinePathAttr: function setOutlinePathAttr(value) {
          var path = _this.$refs.outlinedPath;
          path.setAttribute('d', value);
        },
        getIdleOutlineStyleValue: function getIdleOutlineStyleValue(propertyName) {
          return window.getComputedStyle(_this.$refs.outlinedIdle).getPropertyValue(propertyName);
        }
      });
      this.foundation.init();
    },
    beforeDestroy: function beforeDestroy() {
      var foundation = this.foundation;
      this.foundation = null;
      foundation.destroy();
    }
  };

  /* script */
  const __vue_script__$O = script$O;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$O.__file = "/ddata/extra/vma/components/select/mdc-select-notched-outline.vue";

  /* template */
  var __vue_render__$L = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c(
        "div",
        {
          ref: "outlined",
          staticClass: "mdc-notched-outline",
          class: _vm.outlinedClasses
        },
        [
          _c("svg", [
            _c("path", {
              ref: "outlinedPath",
              staticClass: "mdc-notched-outline__path"
            })
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { ref: "outlinedIdle", staticClass: "mdc-notched-outline__idle" })
    ])
  };
  var __vue_staticRenderFns__$L = [];
  __vue_render__$L._withStripped = true;

    /* style */
    const __vue_inject_styles__$O = undefined;
    /* scoped */
    const __vue_scope_id__$O = undefined;
    /* module identifier */
    const __vue_module_identifier__$O = undefined;
    /* functional template */
    const __vue_is_functional_template__$O = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var SelectNotchedOutline = normalizeComponent(
      { render: __vue_render__$L, staticRenderFns: __vue_staticRenderFns__$L },
      __vue_inject_styles__$O,
      __vue_script__$O,
      __vue_scope_id__$O,
      __vue_is_functional_template__$O,
      __vue_module_identifier__$O,
      undefined,
      undefined
    );

  var script$P = {
    name: 'mdc-select',
    components: {
      SelectLabel: SelectLabel,
      SelectLineRiple: SelectLineRiple,
      SelectNotchedOutline: SelectNotchedOutline
    },
    inheritAttrs: false,
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: String,
      disabled: Boolean,
      label: String,
      outlined: Boolean,
      id: {
        type: String
      }
    },
    data: function data() {
      return {
        styles: {},
        classes: {}
      };
    },
    computed: {
      rootClasses: function rootClasses() {
        return _objectSpread({
          'mdc-select--box': !this.outlined,
          'mdc-select--outlined': this.outlined
        }, this.classes);
      },
      listeners: function listeners() {
        var _this = this;

        return _objectSpread({}, this.$listeners, {
          change: function change(event) {
            return _this.onChange(event);
          }
        });
      }
    },
    watch: {
      disabled: function disabled(value) {
        this.foundation && this.foundation.updateDisabledStyle(value);
      },
      value: 'refreshIndex'
    },
    mounted: function mounted() {
      var _this2 = this;

      this.foundation = new MDCSelectFoundation({
        addClass: function addClass(className) {
          return _this2.$set(_this2.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this2.$delete(_this2.classes, className);
        },
        hasClass: function hasClass(className) {
          return _this2.$el.classList.contains(className);
        },
        activateBottomLine: function activateBottomLine() {
          if (_this2.$refs.line) {
            _this2.$refs.line.foundation.activate();
          }
        },
        deactivateBottomLine: function deactivateBottomLine() {
          if (_this2.$refs.line) {
            _this2.$refs.line.foundation.deactivate();
          }
        },
        getValue: function getValue() {
          return _this2.$refs.native_control.value;
        },
        isRtl: function isRtl() {
          return window.getComputedStyle(_this2.$el).getPropertyValue('direction') === 'rtl';
        },
        notchOutline: function notchOutline(labelWidth, isRtl) {
          if (_this2.$refs.outline) {
            _this2.$refs.outline.foundation.notch(labelWidth, isRtl);
          }
        },
        closeOutline: function closeOutline() {
          if (_this2.$refs.outline) {
            _this2.$refs.outline.foundation.closeNotch();
          }
        },
        hasOutline: function hasOutline() {
          return !!_this2.$refs.outline;
        },
        floatLabel: function floatLabel(value) {
          if (_this2.$refs.label) {
            _this2.$refs.label.foundation.float(value);
          }
        },
        hasLabel: function hasLabel() {
          return !!_this2.$refs.label;
        },
        getLabelWidth: function getLabelWidth() {
          if (_this2.$refs.label) {
            return _this2.$refs.label.foundation.getWidth();
          }
        }
      });
      this.foundation.init();
      this.foundation.handleChange(); // initial sync with DOM

      this.refreshIndex();
      this.slotObserver = new MutationObserver(function () {
        return _this2.refreshIndex();
      });
      this.slotObserver.observe(this.$refs.native_control, {
        childList: true,
        subtree: true
      });
      this.ripple = new RippleBase(this);
      this.ripple.init();
    },
    beforeDestroy: function beforeDestroy() {
      this.slotObserver.disconnect();
      var foundation = this.foundation;
      this.foundation = null;
      foundation.destroy();
      this.ripple && this.ripple.destroy();
    },
    methods: {
      refreshIndex: function refreshIndex() {
        var _this3 = this;

        var options = _toConsumableArray(this.$refs.native_control.querySelectorAll('option'));

        var idx = options.findIndex(function (_ref) {
          var value = _ref.value;
          return _this3.value === value;
        });

        if (this.$refs.native_control.selectedIndex !== idx) {
          this.$refs.native_control.selectedIndex = idx;
          this.foundation.handleChange();
        }
      },
      onChange: function onChange(event) {
        this.foundation.handleChange();
        this.$emit('change', event.target.value);
      }
    }
  };

  /* script */
  const __vue_script__$P = script$P;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$P.__file = "/ddata/extra/vma/components/select/mdc-select.vue";

  /* template */
  var __vue_render__$M = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "mdc-select",
        class: _vm.rootClasses,
        style: _vm.styles,
        attrs: { id: _vm.id }
      },
      [
        _c(
          "select",
          _vm._g(
            _vm._b(
              {
                ref: "native_control",
                staticClass: "mdc-select__native-control",
                attrs: { disabled: _vm.disabled }
              },
              "select",
              _vm.$attrs,
              false
            ),
            _vm.listeners
          ),
          [
            !!_vm.label
              ? _c("option", {
                  staticClass: "mdc-option",
                  attrs: { value: "", disabled: "", selected: "" }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm._t("default")
          ],
          2
        ),
        _vm._v(" "),
        _vm.label
          ? _c("select-label", { ref: "label" }, [_vm._v(_vm._s(_vm.label))])
          : _vm._e(),
        _vm._v(" "),
        !_vm.outlined ? _c("select-line-riple", { ref: "line" }) : _vm._e(),
        _vm._v(" "),
        _vm.outlined ? _c("select-notched-outline", { ref: "outline" }) : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$M = [];
  __vue_render__$M._withStripped = true;

    /* style */
    const __vue_inject_styles__$P = undefined;
    /* scoped */
    const __vue_scope_id__$P = undefined;
    /* module identifier */
    const __vue_module_identifier__$P = undefined;
    /* functional template */
    const __vue_is_functional_template__$P = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcSelect = normalizeComponent(
      { render: __vue_render__$M, staticRenderFns: __vue_staticRenderFns__$M },
      __vue_inject_styles__$P,
      __vue_script__$P,
      __vue_scope_id__$P,
      __vue_is_functional_template__$P,
      __vue_module_identifier__$P,
      undefined,
      undefined
    );

  var VueMDCSelect = BasePlugin({
    mdcSelect: mdcSelect
  });

  /**
   * @license
   * Copyright 2017 Google Inc.
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
  var cssClasses$k = {
    ACTIVE: 'mdc-slider--active',
    DISABLED: 'mdc-slider--disabled',
    DISCRETE: 'mdc-slider--discrete',
    FOCUS: 'mdc-slider--focus',
    IN_TRANSIT: 'mdc-slider--in-transit',
    IS_DISCRETE: 'mdc-slider--discrete',
    HAS_TRACK_MARKER: 'mdc-slider--display-markers'
  };
  /** @enum {string} */

  var strings$k = {
    TRACK_SELECTOR: '.mdc-slider__track',
    TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
    LAST_TRACK_MARKER_SELECTOR: '.mdc-slider__track-marker:last-child',
    THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
    PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
    ARIA_VALUEMIN: 'aria-valuemin',
    ARIA_VALUEMAX: 'aria-valuemax',
    ARIA_VALUENOW: 'aria-valuenow',
    ARIA_DISABLED: 'aria-disabled',
    STEP_DATA_ATTR: 'data-step',
    CHANGE_EVENT: 'MDCSlider:change',
    INPUT_EVENT: 'MDCSlider:input'
  };
  /** @enum {number} */

  var numbers$6 = {
    PAGE_FACTOR: 4
  };

  /**
   * @license
   * Copyright 2017 Google Inc.
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

  /* eslint-disable no-unused-vars */

  /**
   * Adapter for MDC Slider.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the Slider into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */
  var MDCSliderAdapter =
  /*#__PURE__*/
  function () {
    function MDCSliderAdapter() {
      _classCallCheck(this, MDCSliderAdapter);
    }

    _createClass(MDCSliderAdapter, [{
      key: "hasClass",

      /**
       * Returns true if className exists for the slider Element
       * @param {string} className
       * @return {boolean}
       */
      value: function hasClass(className) {}
      /**
       * Adds a class to the slider Element
       * @param {string} className
       */

    }, {
      key: "addClass",
      value: function addClass(className) {}
      /**
       * Removes a class from the slider Element
       * @param {string} className
       */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}
      /**
       * Returns a string if attribute name exists on the slider Element,
       * otherwise returns null
       * @param {string} name
       * @return {?string}
       */

    }, {
      key: "getAttribute",
      value: function getAttribute(name) {}
      /**
       * Sets attribute name on slider Element to value
       * @param {string} name
       * @param {string} value
       */

    }, {
      key: "setAttribute",
      value: function setAttribute(name, value) {}
      /**
       * Removes attribute name from slider Element
       * @param {string} name
       */

    }, {
      key: "removeAttribute",
      value: function removeAttribute(name) {}
      /**
       * Returns the bounding client rect for the slider Element
       * @return {?ClientRect}
       */

    }, {
      key: "computeBoundingRect",
      value: function computeBoundingRect() {}
      /**
       * Returns the tab index of the slider Element
       * @return {number}
       */

    }, {
      key: "getTabIndex",
      value: function getTabIndex() {}
      /**
       * Registers an event handler on the root element for a given event.
       * @param {string} type
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "registerInteractionHandler",
      value: function registerInteractionHandler(type, handler) {}
      /**
       * Deregisters an event handler on the root element for a given event.
       * @param {string} type
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "deregisterInteractionHandler",
      value: function deregisterInteractionHandler(type, handler) {}
      /**
       * Registers an event handler on the thumb container element for a given event.
       * @param {string} type
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "registerThumbContainerInteractionHandler",
      value: function registerThumbContainerInteractionHandler(type, handler) {}
      /**
       * Deregisters an event handler on the thumb container element for a given event.
       * @param {string} type
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "deregisterThumbContainerInteractionHandler",
      value: function deregisterThumbContainerInteractionHandler(type, handler) {}
      /**
       * Registers an event handler on the body for a given event.
       * @param {string} type
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "registerBodyInteractionHandler",
      value: function registerBodyInteractionHandler(type, handler) {}
      /**
       * Deregisters an event handler on the body for a given event.
       * @param {string} type
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "deregisterBodyInteractionHandler",
      value: function deregisterBodyInteractionHandler(type, handler) {}
      /**
       * Registers an event handler for the window resize event
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "registerResizeHandler",
      value: function registerResizeHandler(handler) {}
      /**
       * Deregisters an event handler for the window resize event
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "deregisterResizeHandler",
      value: function deregisterResizeHandler(handler) {}
      /**
       * Emits a custom event MDCSlider:input from the root
       */

    }, {
      key: "notifyInput",
      value: function notifyInput() {}
      /**
       * Emits a custom event MDCSlider:change from the root
       */

    }, {
      key: "notifyChange",
      value: function notifyChange() {}
      /**
       * Sets a style property of the thumb container element to the passed value
       * @param {string} propertyName
       * @param {string} value
       */

    }, {
      key: "setThumbContainerStyleProperty",
      value: function setThumbContainerStyleProperty(propertyName, value) {}
      /**
       * Sets a style property of the track element to the passed value
       * @param {string} propertyName
       * @param {string} value
       */

    }, {
      key: "setTrackStyleProperty",
      value: function setTrackStyleProperty(propertyName, value) {}
      /**
       * Sets the inner text of the pin marker to the passed value
       * @param {number} value
       */

    }, {
      key: "setMarkerValue",
      value: function setMarkerValue(value) {}
      /**
       * Appends the passed number of track markers to the track mark container element
       * @param {number} numMarkers
       */

    }, {
      key: "appendTrackMarkers",
      value: function appendTrackMarkers(numMarkers) {}
      /**
       * Removes all track markers fromt he track mark container element
       */

    }, {
      key: "removeTrackMarkers",
      value: function removeTrackMarkers() {}
      /**
       * Sets a style property of the last track marker to the passed value
       * @param {string} propertyName
       * @param {string} value
       */

    }, {
      key: "setLastTrackMarkersStyleProperty",
      value: function setLastTrackMarkersStyleProperty(propertyName, value) {}
      /**
       * Returns true if the root element is RTL, otherwise false
       * @return {boolean}
       */

    }, {
      key: "isRTL",
      value: function isRTL() {}
    }]);

    return MDCSliderAdapter;
  }();

  /** @enum {string} */

  var KEY_IDS = {
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    HOME: 'Home',
    END: 'End',
    PAGE_UP: 'PageUp',
    PAGE_DOWN: 'PageDown'
  };
  /** @enum {string} */

  var MOVE_EVENT_MAP = {
    'mousedown': 'mousemove',
    'touchstart': 'touchmove',
    'pointerdown': 'pointermove'
  };
  var DOWN_EVENTS = ['mousedown', 'pointerdown', 'touchstart'];
  var UP_EVENTS = ['mouseup', 'pointerup', 'touchend'];
  /**
   * @extends {MDCFoundation<!MDCSliderAdapter>}
   */

  var MDCSliderFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCSliderFoundation, _MDCFoundation);

    _createClass(MDCSliderFoundation, null, [{
      key: "cssClasses",

      /** @return enum {cssClasses} */
      get: function get() {
        return cssClasses$k;
      }
      /** @return enum {strings} */

    }, {
      key: "strings",
      get: function get() {
        return strings$k;
      }
      /** @return enum {numbers} */

    }, {
      key: "numbers",
      get: function get() {
        return numbers$6;
      }
      /** @return {!MDCSliderAdapter} */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCSliderAdapter} */
          {
            hasClass: function hasClass() {
              return (
                /* className: string */

                /* boolean */
                false
              );
            },
            addClass: function addClass()
            /* className: string */
            {},
            removeClass: function removeClass()
            /* className: string */
            {},
            getAttribute: function getAttribute() {
              return (
                /* name: string */

                /* string|null */
                null
              );
            },
            setAttribute: function setAttribute()
            /* name: string, value: string */
            {},
            removeAttribute: function removeAttribute()
            /* name: string */
            {},
            computeBoundingRect: function computeBoundingRect() {
              return (
                /* ClientRect */
                {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: 0
                }
              );
            },
            getTabIndex: function getTabIndex() {
              return (
                /* number */
                0
              );
            },
            registerInteractionHandler: function registerInteractionHandler()
            /* type: string, handler: EventListener */
            {},
            deregisterInteractionHandler: function deregisterInteractionHandler()
            /* type: string, handler: EventListener */
            {},
            registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler()
            /* type: string, handler: EventListener */
            {},
            deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler()
            /* type: string, handler: EventListener */
            {},
            registerBodyInteractionHandler: function registerBodyInteractionHandler()
            /* type: string, handler: EventListener */
            {},
            deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler()
            /* type: string, handler: EventListener */
            {},
            registerResizeHandler: function registerResizeHandler()
            /* handler: EventListener */
            {},
            deregisterResizeHandler: function deregisterResizeHandler()
            /* handler: EventListener */
            {},
            notifyInput: function notifyInput() {},
            notifyChange: function notifyChange() {},
            setThumbContainerStyleProperty: function setThumbContainerStyleProperty()
            /* propertyName: string, value: string */
            {},
            setTrackStyleProperty: function setTrackStyleProperty()
            /* propertyName: string, value: string */
            {},
            setMarkerValue: function setMarkerValue()
            /* value: number */
            {},
            appendTrackMarkers: function appendTrackMarkers()
            /* numMarkers: number */
            {},
            removeTrackMarkers: function removeTrackMarkers() {},
            setLastTrackMarkersStyleProperty: function setLastTrackMarkersStyleProperty()
            /* propertyName: string, value: string */
            {},
            isRTL: function isRTL() {
              return (
                /* boolean */
                false
              );
            }
          }
        );
      }
      /**
       * Creates a new instance of MDCSliderFoundation
       * @param {?MDCSliderAdapter} adapter
       */

    }]);

    function MDCSliderFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCSliderFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCSliderFoundation).call(this, _extends(MDCSliderFoundation.defaultAdapter, adapter)));
      /** @private {?ClientRect} */

      _this.rect_ = null; // We set this to NaN since we want it to be a number, but we can't use '0' or '-1'
      // because those could be valid tabindices set by the client code.

      _this.savedTabIndex_ = NaN;
      _this.active_ = false;
      _this.inTransit_ = false;
      _this.isDiscrete_ = false;
      _this.hasTrackMarker_ = false;
      _this.handlingThumbTargetEvt_ = false;
      _this.min_ = 0;
      _this.max_ = 100;
      _this.step_ = 0;
      _this.value_ = 0;
      _this.disabled_ = false;
      _this.preventFocusState_ = false;
      _this.updateUIFrame_ = 0;

      _this.thumbContainerPointerHandler_ = function () {
        _this.handlingThumbTargetEvt_ = true;
      };

      _this.interactionStartHandler_ = function (evt) {
        return _this.handleDown_(evt);
      };

      _this.keydownHandler_ = function (evt) {
        return _this.handleKeydown_(evt);
      };

      _this.focusHandler_ = function () {
        return _this.handleFocus_();
      };

      _this.blurHandler_ = function () {
        return _this.handleBlur_();
      };

      _this.resizeHandler_ = function () {
        return _this.layout();
      };

      return _this;
    }

    _createClass(MDCSliderFoundation, [{
      key: "init",
      value: function init() {
        var _this2 = this;

        this.isDiscrete_ = this.adapter_.hasClass(cssClasses$k.IS_DISCRETE);
        this.hasTrackMarker_ = this.adapter_.hasClass(cssClasses$k.HAS_TRACK_MARKER);
        DOWN_EVENTS.forEach(function (evtName) {
          return _this2.adapter_.registerInteractionHandler(evtName, _this2.interactionStartHandler_);
        });
        this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
        this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
        DOWN_EVENTS.forEach(function (evtName) {
          _this2.adapter_.registerThumbContainerInteractionHandler(evtName, _this2.thumbContainerPointerHandler_);
        });
        this.adapter_.registerResizeHandler(this.resizeHandler_);
        this.layout(); // At last step, provide a reasonable default value to discrete slider

        if (this.isDiscrete_ && this.getStep() == 0) {
          this.step_ = 1;
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this3 = this;

        DOWN_EVENTS.forEach(function (evtName) {
          _this3.adapter_.deregisterInteractionHandler(evtName, _this3.interactionStartHandler_);
        });
        this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
        this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
        DOWN_EVENTS.forEach(function (evtName) {
          _this3.adapter_.deregisterThumbContainerInteractionHandler(evtName, _this3.thumbContainerPointerHandler_);
        });
        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      }
    }, {
      key: "setupTrackMarker",
      value: function setupTrackMarker() {
        if (this.isDiscrete_ && this.hasTrackMarker_ && this.getStep() != 0) {
          var min = this.getMin();
          var max = this.getMax();
          var step = this.getStep();
          var numMarkers = (max - min) / step; // In case distance between max & min is indivisible to step,
          // we place the secondary to last marker proportionally at where thumb
          // could reach and place the last marker at max value

          var indivisible = Math.ceil(numMarkers) !== numMarkers;

          if (indivisible) {
            numMarkers = Math.ceil(numMarkers);
          }

          this.adapter_.removeTrackMarkers();
          this.adapter_.appendTrackMarkers(numMarkers);

          if (indivisible) {
            var lastStepRatio = (max - numMarkers * step) / step + 1;
            var flex = getCorrectPropertyName(window, 'flex');
            this.adapter_.setLastTrackMarkersStyleProperty(flex, String(lastStepRatio));
          }
        }
      }
    }, {
      key: "layout",
      value: function layout() {
        this.rect_ = this.adapter_.computeBoundingRect();
        this.updateUIForCurrentValue_();
      }
      /** @return {number} */

    }, {
      key: "getValue",
      value: function getValue() {
        return this.value_;
      }
      /** @param {number} value */

    }, {
      key: "setValue",
      value: function setValue(value) {
        this.setValue_(value, false);
      }
      /** @return {number} */

    }, {
      key: "getMax",
      value: function getMax() {
        return this.max_;
      }
      /** @param {number} max */

    }, {
      key: "setMax",
      value: function setMax(max) {
        if (max < this.min_) {
          throw new Error('Cannot set max to be less than the slider\'s minimum value');
        }

        this.max_ = max;
        this.setValue_(this.value_, false, true);
        this.adapter_.setAttribute(strings$k.ARIA_VALUEMAX, String(this.max_));
        this.setupTrackMarker();
      }
      /** @return {number} */

    }, {
      key: "getMin",
      value: function getMin() {
        return this.min_;
      }
      /** @param {number} min */

    }, {
      key: "setMin",
      value: function setMin(min) {
        if (min > this.max_) {
          throw new Error('Cannot set min to be greater than the slider\'s maximum value');
        }

        this.min_ = min;
        this.setValue_(this.value_, false, true);
        this.adapter_.setAttribute(strings$k.ARIA_VALUEMIN, String(this.min_));
        this.setupTrackMarker();
      }
      /** @return {number} */

    }, {
      key: "getStep",
      value: function getStep() {
        return this.step_;
      }
      /** @param {number} step */

    }, {
      key: "setStep",
      value: function setStep(step) {
        if (step < 0) {
          throw new Error('Step cannot be set to a negative number');
        }

        if (this.isDiscrete_ && (typeof step !== 'number' || step < 1)) {
          step = 1;
        }

        this.step_ = step;
        this.setValue_(this.value_, false, true);
        this.setupTrackMarker();
      }
      /** @return {boolean} */

    }, {
      key: "isDisabled",
      value: function isDisabled() {
        return this.disabled_;
      }
      /** @param {boolean} disabled */

    }, {
      key: "setDisabled",
      value: function setDisabled(disabled) {
        this.disabled_ = disabled;
        this.toggleClass_(cssClasses$k.DISABLED, this.disabled_);

        if (this.disabled_) {
          this.savedTabIndex_ = this.adapter_.getTabIndex();
          this.adapter_.setAttribute(strings$k.ARIA_DISABLED, 'true');
          this.adapter_.removeAttribute('tabindex');
        } else {
          this.adapter_.removeAttribute(strings$k.ARIA_DISABLED);

          if (!isNaN(this.savedTabIndex_)) {
            this.adapter_.setAttribute('tabindex', String(this.savedTabIndex_));
          }
        }
      }
      /**
       * Called when the user starts interacting with the slider
       * @param {!Event} evt
       * @private
       */

    }, {
      key: "handleDown_",
      value: function handleDown_(evt) {
        var _this4 = this;

        if (this.disabled_) {
          return;
        }

        this.preventFocusState_ = true;
        this.setInTransit_(!this.handlingThumbTargetEvt_);
        this.handlingThumbTargetEvt_ = false;
        this.setActive_(true);

        var moveHandler = function moveHandler(evt) {
          _this4.handleMove_(evt);
        }; // Note: upHandler is [de]registered on ALL potential pointer-related release event types, since some browsers
        // do not always fire these consistently in pairs.
        // (See https://github.com/material-components/material-components-web/issues/1192)


        var upHandler = function upHandler() {
          _this4.handleUp_();

          _this4.adapter_.deregisterBodyInteractionHandler(MOVE_EVENT_MAP[evt.type], moveHandler);

          UP_EVENTS.forEach(function (evtName) {
            return _this4.adapter_.deregisterBodyInteractionHandler(evtName, upHandler);
          });
        };

        this.adapter_.registerBodyInteractionHandler(MOVE_EVENT_MAP[evt.type], moveHandler);
        UP_EVENTS.forEach(function (evtName) {
          return _this4.adapter_.registerBodyInteractionHandler(evtName, upHandler);
        });
        this.setValueFromEvt_(evt);
      }
      /**
       * Called when the user moves the slider
       * @param {!Event} evt
       * @private
       */

    }, {
      key: "handleMove_",
      value: function handleMove_(evt) {
        evt.preventDefault();
        this.setValueFromEvt_(evt);
      }
      /**
       * Called when the user's interaction with the slider ends
       * @private
       */

    }, {
      key: "handleUp_",
      value: function handleUp_() {
        this.setActive_(false);
        this.adapter_.notifyChange();
      }
      /**
       * Returns the pageX of the event
       * @param {!Event} evt
       * @return {number}
       * @private
       */

    }, {
      key: "getPageX_",
      value: function getPageX_(evt) {
        if (evt.targetTouches && evt.targetTouches.length > 0) {
          return evt.targetTouches[0].pageX;
        }

        return evt.pageX;
      }
      /**
       * Sets the slider value from an event
       * @param {!Event} evt
       * @private
       */

    }, {
      key: "setValueFromEvt_",
      value: function setValueFromEvt_(evt) {
        var pageX = this.getPageX_(evt);
        var value = this.computeValueFromPageX_(pageX);
        this.setValue_(value, true);
      }
      /**
       * Computes the new value from the pageX position
       * @param {number} pageX
       * @return {number}
       */

    }, {
      key: "computeValueFromPageX_",
      value: function computeValueFromPageX_(pageX) {
        var max = this.max_,
            min = this.min_;
        var xPos = pageX - this.rect_.left;
        var pctComplete = xPos / this.rect_.width;

        if (this.adapter_.isRTL()) {
          pctComplete = 1 - pctComplete;
        } // Fit the percentage complete between the range [min,max]
        // by remapping from [0, 1] to [min, min+(max-min)].


        return min + pctComplete * (max - min);
      }
      /**
       * Handles keydown events
       * @param {!Event} evt
       */

    }, {
      key: "handleKeydown_",
      value: function handleKeydown_(evt) {
        var keyId = this.getKeyId_(evt);
        var value = this.getValueForKeyId_(keyId);

        if (isNaN(value)) {
          return;
        } // Prevent page from scrolling due to key presses that would normally scroll the page


        evt.preventDefault();
        this.adapter_.addClass(cssClasses$k.FOCUS);
        this.setValue_(value, true);
        this.adapter_.notifyChange();
      }
      /**
       * Returns the computed name of the event
       * @param {!Event} kbdEvt
       * @return {string}
       */

    }, {
      key: "getKeyId_",
      value: function getKeyId_(kbdEvt) {
        if (kbdEvt.key === KEY_IDS.ARROW_LEFT || kbdEvt.keyCode === 37) {
          return KEY_IDS.ARROW_LEFT;
        }

        if (kbdEvt.key === KEY_IDS.ARROW_RIGHT || kbdEvt.keyCode === 39) {
          return KEY_IDS.ARROW_RIGHT;
        }

        if (kbdEvt.key === KEY_IDS.ARROW_UP || kbdEvt.keyCode === 38) {
          return KEY_IDS.ARROW_UP;
        }

        if (kbdEvt.key === KEY_IDS.ARROW_DOWN || kbdEvt.keyCode === 40) {
          return KEY_IDS.ARROW_DOWN;
        }

        if (kbdEvt.key === KEY_IDS.HOME || kbdEvt.keyCode === 36) {
          return KEY_IDS.HOME;
        }

        if (kbdEvt.key === KEY_IDS.END || kbdEvt.keyCode === 35) {
          return KEY_IDS.END;
        }

        if (kbdEvt.key === KEY_IDS.PAGE_UP || kbdEvt.keyCode === 33) {
          return KEY_IDS.PAGE_UP;
        }

        if (kbdEvt.key === KEY_IDS.PAGE_DOWN || kbdEvt.keyCode === 34) {
          return KEY_IDS.PAGE_DOWN;
        }

        return '';
      }
      /**
       * Computes the value given a keyboard key ID
       * @param {string} keyId
       * @return {number}
       */

    }, {
      key: "getValueForKeyId_",
      value: function getValueForKeyId_(keyId) {
        var max = this.max_,
            min = this.min_,
            step = this.step_;
        var delta = step || (max - min) / 100;
        var valueNeedsToBeFlipped = this.adapter_.isRTL() && (keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT);

        if (valueNeedsToBeFlipped) {
          delta = -delta;
        }

        switch (keyId) {
          case KEY_IDS.ARROW_LEFT:
          case KEY_IDS.ARROW_DOWN:
            return this.value_ - delta;

          case KEY_IDS.ARROW_RIGHT:
          case KEY_IDS.ARROW_UP:
            return this.value_ + delta;

          case KEY_IDS.HOME:
            return this.min_;

          case KEY_IDS.END:
            return this.max_;

          case KEY_IDS.PAGE_UP:
            return this.value_ + delta * numbers$6.PAGE_FACTOR;

          case KEY_IDS.PAGE_DOWN:
            return this.value_ - delta * numbers$6.PAGE_FACTOR;

          default:
            return NaN;
        }
      }
    }, {
      key: "handleFocus_",
      value: function handleFocus_() {
        if (this.preventFocusState_) {
          return;
        }

        this.adapter_.addClass(cssClasses$k.FOCUS);
      }
    }, {
      key: "handleBlur_",
      value: function handleBlur_() {
        this.preventFocusState_ = false;
        this.adapter_.removeClass(cssClasses$k.FOCUS);
      }
      /**
       * Sets the value of the slider
       * @param {number} value
       * @param {boolean} shouldFireInput
       * @param {boolean=} force
       */

    }, {
      key: "setValue_",
      value: function setValue_(value, shouldFireInput) {
        var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (value === this.value_ && !force) {
          return;
        }

        var min = this.min_,
            max = this.max_;
        var valueSetToBoundary = value === min || value === max;

        if (this.step_ && !valueSetToBoundary) {
          value = this.quantize_(value);
        }

        if (value < min) {
          value = min;
        } else if (value > max) {
          value = max;
        }

        this.value_ = value;
        this.adapter_.setAttribute(strings$k.ARIA_VALUENOW, String(this.value_));
        this.updateUIForCurrentValue_();

        if (shouldFireInput) {
          this.adapter_.notifyInput();

          if (this.isDiscrete_) {
            this.adapter_.setMarkerValue(value);
          }
        }
      }
      /**
       * Calculates the quantized value
       * @param {number} value
       * @return {number}
       */

    }, {
      key: "quantize_",
      value: function quantize_(value) {
        var numSteps = Math.round(value / this.step_);
        var quantizedVal = numSteps * this.step_;
        return quantizedVal;
      }
    }, {
      key: "updateUIForCurrentValue_",
      value: function updateUIForCurrentValue_() {
        var _this5 = this;

        var max = this.max_,
            min = this.min_,
            value = this.value_;
        var pctComplete = (value - min) / (max - min);
        var translatePx = pctComplete * this.rect_.width;

        if (this.adapter_.isRTL()) {
          translatePx = this.rect_.width - translatePx;
        }

        var transformProp = getCorrectPropertyName(window, 'transform');
        var transitionendEvtName = getCorrectEventName(window, 'transitionend');

        if (this.inTransit_) {
          var onTransitionEnd = function onTransitionEnd() {
            _this5.setInTransit_(false);

            _this5.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
          };

          this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
        }

        this.updateUIFrame_ = requestAnimationFrame(function () {
          // NOTE(traviskaufman): It would be nice to use calc() here,
          // but IE cannot handle calcs in transforms correctly.
          // See: https://goo.gl/NC2itk
          // Also note that the -50% offset is used to center the slider thumb.
          _this5.adapter_.setThumbContainerStyleProperty(transformProp, "translateX(".concat(translatePx, "px) translateX(-50%)"));

          _this5.adapter_.setTrackStyleProperty(transformProp, "scaleX(".concat(pctComplete, ")"));
        });
      }
      /**
       * Toggles the active state of the slider
       * @param {boolean} active
       */

    }, {
      key: "setActive_",
      value: function setActive_(active) {
        this.active_ = active;
        this.toggleClass_(cssClasses$k.ACTIVE, this.active_);
      }
      /**
       * Toggles the inTransit state of the slider
       * @param {boolean} inTransit
       */

    }, {
      key: "setInTransit_",
      value: function setInTransit_(inTransit) {
        this.inTransit_ = inTransit;
        this.toggleClass_(cssClasses$k.IN_TRANSIT, this.inTransit_);
      }
      /**
       * Conditionally adds or removes a class based on shouldBePresent
       * @param {string} className
       * @param {boolean} shouldBePresent
       */

    }, {
      key: "toggleClass_",
      value: function toggleClass_(className, shouldBePresent) {
        if (shouldBePresent) {
          this.adapter_.addClass(className);
        } else {
          this.adapter_.removeClass(className);
        }
      }
    }]);

    return MDCSliderFoundation;
  }(MDCFoundation);

  //
  var script$Q = {
    name: 'mdc-slider',
    mixins: [DispatchFocusMixin],
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: [Number, String],
      min: {
        type: [Number, String],
        default: 0
      },
      max: {
        type: [Number, String],
        default: 100
      },
      step: {
        type: [Number, String],
        default: 0
      },
      displayMarkers: Boolean,
      disabled: Boolean,
      layoutOn: String,
      layoutOnSource: {
        type: Object,
        required: false
      }
    },
    data: function data() {
      return {
        classes: {
          'mdc-slider--discrete': !!this.step,
          'mdc-slider--display-markers': this.displayMarkers
        },
        trackStyles: {},
        lastTrackMarkersStyles: {},
        thumbStyles: {},
        markerValue: '',
        numMarkers: 0
      };
    },
    computed: {
      isDiscrete: function isDiscrete() {
        return !!this.step;
      },
      hasMarkers: function hasMarkers() {
        return !!this.step && this.displayMarkers && this.numMarkers;
      }
    },
    watch: {
      value: function value() {
        if (this.foundation.getValue() !== Number(this.value)) {
          this.foundation.setValue(this.value);
        }
      },
      min: function min() {
        this.foundation.setMin(Number(this.min));
      },
      max: function max() {
        this.foundation.setMax(Number(this.max));
      },
      step: function step() {
        this.foundation.setStep(Number(this.step));
      },
      disabled: function disabled() {
        this.foundation.setDisabled(this.disabled);
      }
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCSliderFoundation({
        hasClass: function hasClass(className) {
          return _this.$el.classList.contains(className);
        },
        addClass: function addClass(className) {
          _this.$set(_this.classes, className, true);
        },
        removeClass: function removeClass(className) {
          _this.$delete(_this.classes, className, true);
        },
        getAttribute: function getAttribute(name) {
          return _this.$el.getAttribute(name);
        },
        setAttribute: function setAttribute(name, value) {
          return _this.$el.setAttribute(name, value);
        },
        removeAttribute: function removeAttribute(name) {
          return _this.$el.removeAttribute(name);
        },
        computeBoundingRect: function computeBoundingRect() {
          return _this.$el.getBoundingClientRect();
        },
        getTabIndex: function getTabIndex() {
          return _this.$el.tabIndex;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          _this.$el.addEventListener(type, handler, applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          _this.$el.removeEventListener(type, handler, applyPassive());
        },
        registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler(type, handler) {
          _this.$refs.thumbContainer.addEventListener(type, handler, applyPassive());
        },
        deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler(type, handler) {
          _this.$refs.thumbContainer.removeEventListener(type, handler, applyPassive());
        },
        registerBodyInteractionHandler: function registerBodyInteractionHandler(type, handler) {
          document.body.addEventListener(type, handler);
        },
        deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler(type, handler) {
          document.body.removeEventListener(type, handler);
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          window.removeEventListener('resize', handler);
        },
        notifyInput: function notifyInput() {
          _this.$emit('input', _this.foundation.getValue());
        },
        notifyChange: function notifyChange() {
          _this.$emit('change', _this.foundation.getValue());
        },
        setThumbContainerStyleProperty: function setThumbContainerStyleProperty(propertyName, value) {
          _this.$set(_this.thumbStyles, propertyName, value);
        },
        setTrackStyleProperty: function setTrackStyleProperty(propertyName, value) {
          _this.$set(_this.trackStyles, propertyName, value);
        },
        setMarkerValue: function setMarkerValue(value) {
          _this.markerValue = value;
        },
        appendTrackMarkers: function appendTrackMarkers(numMarkers) {
          _this.numMarkers = numMarkers;
        },
        removeTrackMarkers: function removeTrackMarkers() {
          _this.numMarkers = 0;
        },
        setLastTrackMarkersStyleProperty: function setLastTrackMarkersStyleProperty(propertyName, value) {
          _this.$set(_this.lastTrackMarkersStyles, propertyName, value);
        },
        isRTL: function isRTL() {
          return false;
        }
      });
      this.foundation.init();
      this.foundation.setDisabled(this.disabled);

      if (Number(this.min) <= this.foundation.getMax()) {
        this.foundation.setMin(Number(this.min));
        this.foundation.setMax(Number(this.max));
      } else {
        this.foundation.setMax(Number(this.max));
        this.foundation.setMin(Number(this.min));
      }

      this.foundation.setStep(Number(this.step));
      this.foundation.setValue(Number(this.value));

      if (this.hasMarkers) {
        this.foundation.setupTrackMarker();
      }

      this.$root.$on('vma:layout', this.layout);

      if (this.layoutOn) {
        this.layoutOnEventSource = this.layoutOnSource || this.$root;
        this.layoutOnEventSource.$on(this.layoutOn, this.layout);
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.$root.$off('vma:layout', this.layout);

      if (this.layoutOnEventSource) {
        this.layoutOnEventSource.$off(this.layoutOn, this.layout);
      }

      this.foundation.destroy();
    },
    methods: {
      layout: function layout() {
        var _this2 = this;

        this.$nextTick(function () {
          _this2.foundation && _this2.foundation.layout();
        });
      }
    }
  };

  /* script */
  const __vue_script__$Q = script$Q;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$Q.__file = "/ddata/extra/vma/components/slider/mdc-slider.vue";

  /* template */
  var __vue_render__$N = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "mdc-slider",
        class: _vm.classes,
        attrs: { tabindex: "0", role: "slider" }
      },
      [
        _c("div", { staticClass: "mdc-slider__track-container" }, [
          _c("div", { staticClass: "mdc-slider__track", style: _vm.trackStyles }),
          _vm._v(" "),
          _vm.hasMarkers
            ? _c(
                "div",
                { staticClass: "mdc-slider__track-marker-container" },
                _vm._l(_vm.numMarkers, function(markerNum) {
                  return _c("div", {
                    key: markerNum,
                    staticClass: "mdc-slider__track-marker",
                    style:
                      markerNum == _vm.numMarkers
                        ? _vm.lastTrackMarkersStyles
                        : {}
                  })
                }),
                0
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            ref: "thumbContainer",
            staticClass: "mdc-slider__thumb-container",
            style: _vm.thumbStyles
          },
          [
            _vm.isDiscrete
              ? _c("div", { staticClass: "mdc-slider__pin" }, [
                  _c("span", { staticClass: "mdc-slider__pin-value-marker" }, [
                    _vm._v(_vm._s(_vm.markerValue))
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "svg",
              {
                staticClass: "mdc-slider__thumb",
                attrs: { width: "21", height: "21" }
              },
              [_c("circle", { attrs: { cx: "10.5", cy: "10.5", r: "7.875" } })]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mdc-slider__focus-ring" })
          ]
        )
      ]
    )
  };
  var __vue_staticRenderFns__$N = [];
  __vue_render__$N._withStripped = true;

    /* style */
    const __vue_inject_styles__$Q = undefined;
    /* scoped */
    const __vue_scope_id__$Q = undefined;
    /* module identifier */
    const __vue_module_identifier__$Q = undefined;
    /* functional template */
    const __vue_is_functional_template__$Q = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcSlider = normalizeComponent(
      { render: __vue_render__$N, staticRenderFns: __vue_staticRenderFns__$N },
      __vue_inject_styles__$Q,
      __vue_script__$Q,
      __vue_scope_id__$Q,
      __vue_is_functional_template__$Q,
      __vue_module_identifier__$Q,
      undefined,
      undefined
    );

  var VueMDCSlider = BasePlugin({
    mdcSlider: mdcSlider
  });

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
   * Adapter for MDC Snackbar. Provides an interface for managing:
   * - CSS classes
   * - Event handlers
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
  var MDCSnackbarAdapter =
  /*#__PURE__*/
  function () {
    function MDCSnackbarAdapter() {
      _classCallCheck(this, MDCSnackbarAdapter);
    }

    _createClass(MDCSnackbarAdapter, [{
      key: "addClass",

      /** @param {string} className */
      value: function addClass(className) {}
      /** @param {string} className */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}
    }, {
      key: "announce",
      value: function announce() {}
    }, {
      key: "notifyOpening",
      value: function notifyOpening() {}
    }, {
      key: "notifyOpened",
      value: function notifyOpened() {}
      /**
       * @param {string} reason
       */

    }, {
      key: "notifyClosing",
      value: function notifyClosing(reason) {}
      /**
       * @param {string} reason
       */

    }, {
      key: "notifyClosed",
      value: function notifyClosed(reason) {}
    }]);

    return MDCSnackbarAdapter;
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
  var cssClasses$l = {
    OPENING: 'mdc-snackbar--opening',
    OPEN: 'mdc-snackbar--open',
    CLOSING: 'mdc-snackbar--closing'
  };
  var strings$l = {
    SURFACE_SELECTOR: '.mdc-snackbar__surface',
    LABEL_SELECTOR: '.mdc-snackbar__label',
    ACTION_SELECTOR: '.mdc-snackbar__action',
    DISMISS_SELECTOR: '.mdc-snackbar__dismiss',
    OPENING_EVENT: 'MDCSnackbar:opening',
    OPENED_EVENT: 'MDCSnackbar:opened',
    CLOSING_EVENT: 'MDCSnackbar:closing',
    CLOSED_EVENT: 'MDCSnackbar:closed',
    REASON_ACTION: 'action',
    REASON_DISMISS: 'dismiss',
    ARIA_LIVE_LABEL_TEXT_ATTR: 'data-mdc-snackbar-label-text'
  };
  var numbers$7 = {
    MIN_AUTO_DISMISS_TIMEOUT_MS: 4000,
    MAX_AUTO_DISMISS_TIMEOUT_MS: 10000,
    DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5000,
    // These variables need to be kept in sync with the values in _variables.scss.
    SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
    SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,

    /**
     * Number of milliseconds to wait between temporarily clearing the label text
     * in the DOM and subsequently restoring it. This is necessary to force IE 11
     * to pick up the `aria-live` content change and announce it to the user.
     */
    ARIA_LIVE_DELAY_MS: 1000
  };

  var OPENING = cssClasses$l.OPENING,
      OPEN = cssClasses$l.OPEN,
      CLOSING = cssClasses$l.CLOSING;
  var REASON_ACTION = strings$l.REASON_ACTION,
      REASON_DISMISS = strings$l.REASON_DISMISS;

  var MDCSnackbarFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCSnackbarFoundation, _MDCFoundation);

    _createClass(MDCSnackbarFoundation, null, [{
      key: "cssClasses",
      get: function get() {
        return cssClasses$l;
      }
    }, {
      key: "strings",
      get: function get() {
        return strings$l;
      }
    }, {
      key: "numbers",
      get: function get() {
        return numbers$7;
      }
      /**
       * @return {!MDCSnackbarAdapter}
       */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCSnackbarAdapter} */
          {
            addClass: function addClass()
            /* className: string */
            {},
            removeClass: function removeClass()
            /* className: string */
            {},
            announce: function announce() {},
            notifyOpening: function notifyOpening() {},
            notifyOpened: function notifyOpened() {},
            notifyClosing: function notifyClosing()
            /* reason: string */
            {},
            notifyClosed: function notifyClosed()
            /* reason: string */
            {}
          }
        );
      }
      /**
       * @param {!MDCSnackbarAdapter=} adapter
       */

    }]);

    function MDCSnackbarFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCSnackbarFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCSnackbarFoundation).call(this, _extends(MDCSnackbarFoundation.defaultAdapter, adapter)));
      /** @private {boolean} */

      _this.isOpen_ = false;
      /** @private {number} */

      _this.animationFrame_ = 0;
      /** @private {number} */

      _this.animationTimer_ = 0;
      /** @private {number} */

      _this.autoDismissTimer_ = 0;
      /** @private {number} */

      _this.autoDismissTimeoutMs_ = numbers$7.DEFAULT_AUTO_DISMISS_TIMEOUT_MS;
      /** @private {boolean} */

      _this.closeOnEscape_ = true;
      return _this;
    }

    _createClass(MDCSnackbarFoundation, [{
      key: "destroy",
      value: function destroy() {
        this.clearAutoDismissTimer_();
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = 0;
        clearTimeout(this.animationTimer_);
        this.animationTimer_ = 0;
        this.adapter_.removeClass(OPENING);
        this.adapter_.removeClass(OPEN);
        this.adapter_.removeClass(CLOSING);
      }
    }, {
      key: "open",
      value: function open() {
        var _this2 = this;

        this.clearAutoDismissTimer_();
        this.isOpen_ = true;
        this.adapter_.notifyOpening();
        this.adapter_.removeClass(CLOSING);
        this.adapter_.addClass(OPENING);
        this.adapter_.announce(); // Wait a frame once display is no longer "none", to establish basis for animation

        this.runNextAnimationFrame_(function () {
          _this2.adapter_.addClass(OPEN);

          _this2.animationTimer_ = setTimeout(function () {
            _this2.handleAnimationTimerEnd_();

            _this2.adapter_.notifyOpened();

            _this2.autoDismissTimer_ = setTimeout(function () {
              _this2.close(REASON_DISMISS);
            }, _this2.getTimeoutMs());
          }, numbers$7.SNACKBAR_ANIMATION_OPEN_TIME_MS);
        });
      }
      /**
       * @param {string=} reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
       *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
       *     client-specific values may also be used if desired.
       */

    }, {
      key: "close",
      value: function close() {
        var _this3 = this;

        var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (!this.isOpen_) {
          // Avoid redundant close calls (and events), e.g. repeated interactions as the snackbar is animating closed
          return;
        }

        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = 0;
        this.clearAutoDismissTimer_();
        this.isOpen_ = false;
        this.adapter_.notifyClosing(reason);
        this.adapter_.addClass(cssClasses$l.CLOSING);
        this.adapter_.removeClass(cssClasses$l.OPEN);
        this.adapter_.removeClass(cssClasses$l.OPENING);
        clearTimeout(this.animationTimer_);
        this.animationTimer_ = setTimeout(function () {
          _this3.handleAnimationTimerEnd_();

          _this3.adapter_.notifyClosed(reason);
        }, numbers$7.SNACKBAR_ANIMATION_CLOSE_TIME_MS);
      }
      /**
       * @return {boolean}
       */

    }, {
      key: "isOpen",
      value: function isOpen() {
        return this.isOpen_;
      }
      /**
       * @return {number}
       */

    }, {
      key: "getTimeoutMs",
      value: function getTimeoutMs() {
        return this.autoDismissTimeoutMs_;
      }
      /**
       * @param {number} timeoutMs
       */

    }, {
      key: "setTimeoutMs",
      value: function setTimeoutMs(timeoutMs) {
        // Use shorter variable names to make the code more readable
        var minValue = numbers$7.MIN_AUTO_DISMISS_TIMEOUT_MS;
        var maxValue = numbers$7.MAX_AUTO_DISMISS_TIMEOUT_MS;

        if (timeoutMs <= maxValue && timeoutMs >= minValue) {
          this.autoDismissTimeoutMs_ = timeoutMs;
        } else {
          throw new Error("timeoutMs must be an integer in the range ".concat(minValue, "\u2013").concat(maxValue, ", but got '").concat(timeoutMs, "'"));
        }
      }
      /**
       * @return {boolean}
       */

    }, {
      key: "getCloseOnEscape",
      value: function getCloseOnEscape() {
        return this.closeOnEscape_;
      }
      /**
       * @param {boolean} closeOnEscape
       */

    }, {
      key: "setCloseOnEscape",
      value: function setCloseOnEscape(closeOnEscape) {
        this.closeOnEscape_ = closeOnEscape;
      }
      /**
       * @param {!KeyboardEvent} evt
       */

    }, {
      key: "handleKeyDown",
      value: function handleKeyDown(evt) {
        if (this.getCloseOnEscape() && (evt.key === 'Escape' || evt.keyCode === 27)) {
          this.close(REASON_DISMISS);
        }
      }
      /**
       * @param {!MouseEvent} evt
       */

    }, {
      key: "handleActionButtonClick",
      value: function handleActionButtonClick(evt) {
        this.close(REASON_ACTION);
      }
      /**
       * @param {!MouseEvent} evt
       */

    }, {
      key: "handleActionIconClick",
      value: function handleActionIconClick(evt) {
        this.close(REASON_DISMISS);
      }
      /** @private */

    }, {
      key: "clearAutoDismissTimer_",
      value: function clearAutoDismissTimer_() {
        clearTimeout(this.autoDismissTimer_);
        this.autoDismissTimer_ = 0;
      }
      /** @private */

    }, {
      key: "handleAnimationTimerEnd_",
      value: function handleAnimationTimerEnd_() {
        this.animationTimer_ = 0;
        this.adapter_.removeClass(cssClasses$l.OPENING);
        this.adapter_.removeClass(cssClasses$l.CLOSING);
      }
      /**
       * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
       * @param {Function} callback
       * @private
       */

    }, {
      key: "runNextAnimationFrame_",
      value: function runNextAnimationFrame_(callback) {
        var _this4 = this;

        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = requestAnimationFrame(function () {
          _this4.animationFrame_ = 0;
          clearTimeout(_this4.animationTimer_);
          _this4.animationTimer_ = setTimeout(callback, 0);
        });
      }
    }]);

    return MDCSnackbarFoundation;
  }(MDCFoundation);

  //
  var script$R = {
    name: 'mdc-snackbar',
    model: {
      prop: 'open',
      event: 'change'
    },
    props: {
      open: Boolean,
      stacked: Boolean,
      leading: Boolean,
      labelText: String,
      actionText: String,
      timeoutMs: [String, Number],
      dismissAction: {
        type: [String, Boolean],
        default: true
      }
    },
    data: function data() {
      return {
        classes: {
          'mdc-snackbar--leading': this.leading,
          'mdc-snackbar--stacked': this.stacked
        },
        hidden: false,
        actionHidden: false,
        showLabelText: true
      };
    },
    watch: {
      open: 'onOpen_',
      timeoutMs: 'onTimeoutMs_'
    },
    mounted: function mounted() {
      var _this = this;

      window.addEventListener('keydown', this.handleKeydownEvent);
      this.foundation = new MDCSnackbarFoundation({
        addClass: function addClass(className) {
          return _this.$set(_this.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this.$delete(_this.classes, className);
        },
        announce: function announce() {
          return _this.announce(_this.$refs.labelEl);
        },
        notifyOpening: function notifyOpening() {
          return _this.$emit(MDCSnackbarFoundation.strings.OPENING_EVENT, {});
        },
        notifyOpened: function notifyOpened() {
          _this.$emit(MDCSnackbarFoundation.strings.OPENED_EVENT, {});

          _this.$emit('change', true);

          _this.$emit('show', {});
        },
        notifyClosing: function notifyClosing(reason) {
          return _this.$emit(MDCSnackbarFoundation.strings.CLOSING_EVENT, reason ? {
            reason: reason
          } : {});
        },
        notifyClosed: function notifyClosed(reason) {
          _this.$emit(MDCSnackbarFoundation.strings.CLOSED_EVENT, reason ? {
            reason: reason
          } : {});

          _this.$emit('change', false);

          _this.$emit('hide');
        }
      });
      this.foundation.init();

      if (this.timeoutMs !== void 0) {
        this.foundation.setTimeoutMs(this.timeoutMs);
      }
    },
    computed: {
      showDismissAction: function showDismissAction() {
        return typeof this.dismissAction === 'string' ? this.dismissAction != 'false' : this.dismissAction;
      }
    },
    beforeDestroy: function beforeDestroy() {
      window.removeEventListener('keydown', this.handleKeydownEvent);
      this.foundation.destroy();
    },
    methods: {
      onTimeoutMs_: function onTimeoutMs_(value) {
        if (value !== void 0) {
          this.foundation.setTimeoutMs(value);
        }
      },
      onOpen_: function onOpen_(value) {
        if (value) {
          this.foundation.open();
        } else {
          this.foundation.close();
        }
      },
      surfaceClickHandler: function surfaceClickHandler(evt) {
        if (this.isActionButton_(evt.target)) {
          this.foundation.handleActionButtonClick(evt);
        } else if (this.isActionIcon_(evt.target)) {
          this.foundation.handleActionIconClick(evt);
        }
      },
      handleKeydownEvent: function handleKeydownEvent(evt) {
        this.foundation.handleKeyDown(evt);
      },
      isActionButton_: function isActionButton_(target) {
        return Boolean(closest(target, MDCSnackbarFoundation.strings.ACTION_SELECTOR));
      },
      isActionIcon_: function isActionIcon_(target) {
        return Boolean(closest(target, MDCSnackbarFoundation.strings.DISMISS_SELECTOR));
      },
      announce: function announce(ariaEl) {
        var _this2 = this;

        var labelEl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ariaEl;
        var priority = ariaEl.getAttribute('aria-live');
        var text = this.labelText;

        if (!text) {
          return;
        } // Temporarily disable `aria-live` to prevent JAWS+Firefox from announcing the message twice.


        ariaEl.setAttribute('aria-live', 'off'); // Temporarily clear `textContent` to force a DOM mutation event that will be detected by screen readers.
        // `aria-live` elements are only announced when the element's `textContent` *changes*, so snackbars
        // sent to the browser in the initial HTML response won't be read unless we clear the element's `textContent` first.
        // Similarly, displaying the same snackbar message twice in a row doesn't trigger a DOM mutation event,
        // so screen readers won't announce the second message unless we first clear `textContent`.
        //
        // We have to clear the label text two different ways to make it work in all browsers and screen readers:
        //
        //   1. `textContent = ''` is required for IE11 + JAWS
        //   2. `innerHTML = '&nbsp;'` is required for Chrome + JAWS and NVDA
        //
        // All other browser/screen reader combinations support both methods.
        //
        // The wrapper `<span>` visually hides the space character so that it doesn't cause jank when added/removed.
        // N.B.: Setting `position: absolute`, `opacity: 0`, or `height: 0` prevents Chrome from detecting the DOM change.
        //
        // This technique has been tested in:
        //
        //   * JAWS 2019:
        //       - Chrome 70
        //       - Firefox 60 (ESR)
        //       - IE 11
        //   * NVDA 2018:
        //       - Chrome 70
        //       - Firefox 60 (ESR)
        //       - IE 11
        //   * ChromeVox 53

        this.showLabelText = false; // Prevent visual jank by temporarily displaying the label text in the ::before pseudo-element.
        // CSS generated content is normally announced by screen readers
        // (except in IE 11; see https://tink.uk/accessibility-support-for-css-generated-content/);
        // however, `aria-live` is turned off, so this DOM update will be ignored by screen readers.

        labelEl.setAttribute(MDCSnackbarFoundation.strings.ARIA_LIVE_LABEL_TEXT_ATTR, this.labelText);
        setTimeout(function () {
          // Allow screen readers to announce changes to the DOM again.
          ariaEl.setAttribute('aria-live', priority); // Remove the message from the ::before pseudo-element.

          labelEl.removeAttribute(MDCSnackbarFoundation.strings.ARIA_LIVE_LABEL_TEXT_ATTR); // Restore the original label text, which will be announced by screen readers.

          _this2.showLabelText = true;
        }, MDCSnackbarFoundation.numbers.ARIA_LIVE_DELAY_MS);
      }
    }
  };

  /* script */
  const __vue_script__$R = script$R;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$R.__file = "/ddata/extra/vma/components/snackbar/mdc-snackbar.vue";

  /* template */
  var __vue_render__$O = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { ref: "root", staticClass: "mdc-snackbar", class: _vm.classes },
      [
        _c(
          "div",
          {
            staticClass: "mdc-snackbar__surface",
            on: { click: _vm.surfaceClickHandler }
          },
          [
            _c(
              "div",
              {
                ref: "labelEl",
                staticClass: "mdc-snackbar__label",
                attrs: { role: "status", "aria-live": "polite" }
              },
              [
                _vm.showLabelText
                  ? [_vm._v("\n        " + _vm._s(_vm.labelText) + "\n      ")]
                  : _c(
                      "span",
                      {
                        staticStyle: {
                          display: "inline-block",
                          width: "0",
                          height: "1px"
                        }
                      },
                      [_vm._v(" ")]
                    )
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mdc-snackbar__actions" }, [
              _c(
                "button",
                _vm._g(
                  {
                    ref: "actionEl",
                    staticClass: "mdc-button mdc-snackbar__action",
                    attrs: { type: "button" }
                  },
                  _vm.$listeners
                ),
                [_vm._v("\n        " + _vm._s(_vm.actionText) + "\n      ")]
              ),
              _vm._v(" "),
              _vm.showDismissAction
                ? _c(
                    "button",
                    {
                      staticClass:
                        "mdc-icon-button mdc-snackbar__dismiss material-icons",
                      attrs: { title: "Dismiss" }
                    },
                    [_vm._v("\n        close\n      ")]
                  )
                : _vm._e()
            ])
          ]
        )
      ]
    )
  };
  var __vue_staticRenderFns__$O = [];
  __vue_render__$O._withStripped = true;

    /* style */
    const __vue_inject_styles__$R = undefined;
    /* scoped */
    const __vue_scope_id__$R = undefined;
    /* module identifier */
    const __vue_module_identifier__$R = undefined;
    /* functional template */
    const __vue_is_functional_template__$R = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcSnackbar = normalizeComponent(
      { render: __vue_render__$O, staticRenderFns: __vue_staticRenderFns__$O },
      __vue_inject_styles__$R,
      __vue_script__$R,
      __vue_scope_id__$R,
      __vue_is_functional_template__$R,
      __vue_module_identifier__$R,
      undefined,
      undefined
    );

  var VueMDCSnackbar = BasePlugin({
    mdcSnackbar: mdcSnackbar
  });

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
   * Adapter for MDC Switch. Provides an interface for managing
   * - classes
   * - dom
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
  var MDCSwitchAdapter =
  /*#__PURE__*/
  function () {
    function MDCSwitchAdapter() {
      _classCallCheck(this, MDCSwitchAdapter);
    }

    _createClass(MDCSwitchAdapter, [{
      key: "addClass",

      /** @param {string} className */
      value: function addClass(className) {}
      /** @param {string} className */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}
      /** @param {boolean} checked */

    }, {
      key: "setNativeControlChecked",
      value: function setNativeControlChecked(checked) {}
      /** @param {boolean} disabled */

    }, {
      key: "setNativeControlDisabled",
      value: function setNativeControlDisabled(disabled) {}
    }]);

    return MDCSwitchAdapter;
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
  var cssClasses$m = {
    CHECKED: 'mdc-switch--checked',
    DISABLED: 'mdc-switch--disabled'
  };
  /** @enum {string} */

  var strings$m = {
    NATIVE_CONTROL_SELECTOR: '.mdc-switch__native-control',
    RIPPLE_SURFACE_SELECTOR: '.mdc-switch__thumb-underlay'
  };

  /**
   * @extends {MDCFoundation<!MDCSwitchAdapter>}
   */

  var MDCSwitchFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCSwitchFoundation, _MDCFoundation);

    _createClass(MDCSwitchFoundation, null, [{
      key: "strings",

      /** @return enum {string} */
      get: function get() {
        return strings$m;
      }
      /** @return enum {string} */

    }, {
      key: "cssClasses",
      get: function get() {
        return cssClasses$m;
      }
      /** @return {!MDCSwitchAdapter} */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCSwitchAdapter} */
          {
            addClass: function addClass()
            /* className: string */
            {},
            removeClass: function removeClass()
            /* className: string */
            {},
            setNativeControlChecked: function setNativeControlChecked()
            /* checked: boolean */
            {},
            setNativeControlDisabled: function setNativeControlDisabled()
            /* disabled: boolean */
            {}
          }
        );
      }
    }]);

    function MDCSwitchFoundation(adapter) {
      _classCallCheck(this, MDCSwitchFoundation);

      return _possibleConstructorReturn(this, _getPrototypeOf(MDCSwitchFoundation).call(this, _extends(MDCSwitchFoundation.defaultAdapter, adapter)));
    }
    /** @param {boolean} checked */


    _createClass(MDCSwitchFoundation, [{
      key: "setChecked",
      value: function setChecked(checked) {
        this.adapter_.setNativeControlChecked(checked);
        this.updateCheckedStyling_(checked);
      }
      /** @param {boolean} disabled */

    }, {
      key: "setDisabled",
      value: function setDisabled(disabled) {
        this.adapter_.setNativeControlDisabled(disabled);

        if (disabled) {
          this.adapter_.addClass(cssClasses$m.DISABLED);
        } else {
          this.adapter_.removeClass(cssClasses$m.DISABLED);
        }
      }
      /**
       * Handles the change event for the switch native control.
       * @param {!Event} evt
       */

    }, {
      key: "handleChange",
      value: function handleChange(evt) {
        this.updateCheckedStyling_(evt.target.checked);
      }
      /**
       * Updates the styling of the switch based on its checked state.
       * @param {boolean} checked
       * @private
       */

    }, {
      key: "updateCheckedStyling_",
      value: function updateCheckedStyling_(checked) {
        if (checked) {
          this.adapter_.addClass(cssClasses$m.CHECKED);
        } else {
          this.adapter_.removeClass(cssClasses$m.CHECKED);
        }
      }
    }]);

    return MDCSwitchFoundation;
  }(MDCFoundation);

  //
  var script$S = {
    name: 'mdc-switch',
    mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      checked: Boolean,
      disabled: Boolean,
      value: String,
      label: String,
      alignEnd: Boolean,
      name: String
    },
    data: function data() {
      return {
        classes: {},
        styles: {}
      };
    },
    computed: {
      hasLabel: function hasLabel() {
        return this.label || this.$slots.default;
      }
    },
    watch: {
      checked: function checked(value) {
        this.foundation && this.foundation.setChecked(value);
      },
      disabled: function disabled(value) {
        this.foundation && this.foundation.setDisabled(value);
      }
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCSwitchFoundation({
        addClass: function addClass(className) {
          return _this.$set(_this.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this.$delete(_this.classes, className);
        },
        setNativeControlChecked: function setNativeControlChecked(checked) {
          return _this.$refs.control.checked = checked;
        },
        setNativeControlDisabled: function setNativeControlDisabled(disabled) {
          return _this.$refs.control.disabled = disabled;
        }
      });
      this.foundation.init();
      this.foundation.setChecked(this.checked);
      this.foundation.setDisabled(this.disabled);
      this.ripple = new RippleBase(this);
      this.ripple.init();
    },
    beforeDestroy: function beforeDestroy() {
      this.foundation && this.foundation.destroy();
      this.ripple && this.ripple.destroy();
    },
    methods: {
      onChanged: function onChanged(event) {
        this.foundation && this.foundation.handleChange(event);
        this.$emit('change', event.target.checked);
      }
    }
  };

  /* script */
  const __vue_script__$S = script$S;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$S.__file = "/ddata/extra/vma/components/switch/mdc-switch.vue";

  /* template */
  var __vue_render__$P = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "mdc-switch-wrapper",
        class: {
          "mdc-form-field": _vm.hasLabel,
          "mdc-form-field--align-end": _vm.hasLabel && _vm.alignEnd
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "mdc-switch",
            class: _vm.classes,
            attrs: { styles: _vm.styles }
          },
          [
            _c("div", { staticClass: "mdc-switch__track" }),
            _vm._v(" "),
            _c("div", { staticClass: "mdc-switch__thumb-underlay" }, [
              _c("div", { staticClass: "mdc-switch__thumb" }, [
                _c("input", {
                  ref: "control",
                  staticClass: "mdc-switch__native-control",
                  attrs: {
                    name: _vm.name,
                    id: _vm.vma_uid_,
                    type: "checkbox",
                    role: "switch"
                  },
                  domProps: { value: _vm.value },
                  on: { change: _vm.onChanged }
                })
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _vm.hasLabel
          ? _c(
              "label",
              { staticClass: "mdc-switch-label", attrs: { for: _vm.vma_uid_ } },
              [_vm._t("default", [_vm._v(_vm._s(_vm.label))])],
              2
            )
          : _vm._e()
      ]
    )
  };
  var __vue_staticRenderFns__$P = [];
  __vue_render__$P._withStripped = true;

    /* style */
    const __vue_inject_styles__$S = undefined;
    /* scoped */
    const __vue_scope_id__$S = undefined;
    /* module identifier */
    const __vue_module_identifier__$S = undefined;
    /* functional template */
    const __vue_is_functional_template__$S = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcSwitch = normalizeComponent(
      { render: __vue_render__$P, staticRenderFns: __vue_staticRenderFns__$P },
      __vue_inject_styles__$S,
      __vue_script__$S,
      __vue_scope_id__$S,
      __vue_is_functional_template__$S,
      __vue_module_identifier__$S,
      undefined,
      undefined
    );

  var VueMDCSwitch = BasePlugin({
    mdcSwitch: mdcSwitch
  });

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
  var cssClasses$n = {
    ACTIVE: 'mdc-tab--active'
  };
  /** @enum {string} */

  var strings$n = {
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
        return cssClasses$n;
      }
      /** @return enum {string} */

    }, {
      key: "strings",
      get: function get() {
        return strings$n;
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
        return this.adapter_.hasClass(cssClasses$n.ACTIVE);
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
        this.adapter_.addClass(cssClasses$n.ACTIVE);
        this.adapter_.setAttr(strings$n.ARIA_SELECTED, 'true');
        this.adapter_.setAttr(strings$n.TABINDEX, '0');
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

        this.adapter_.removeClass(cssClasses$n.ACTIVE);
        this.adapter_.setAttr(strings$n.ARIA_SELECTED, 'false');
        this.adapter_.setAttr(strings$n.TABINDEX, '-1');
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

  //
  var script$T = {
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
  const __vue_script__$T = script$T;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$T.__file = "/ddata/extra/vma/components/tabs/mdc-tab.vue";

  /* template */
  var __vue_render__$Q = function() {
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
  var __vue_staticRenderFns__$Q = [];
  __vue_render__$Q._withStripped = true;

    /* style */
    const __vue_inject_styles__$T = undefined;
    /* scoped */
    const __vue_scope_id__$T = undefined;
    /* module identifier */
    const __vue_module_identifier__$T = undefined;
    /* functional template */
    const __vue_is_functional_template__$T = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcTab = normalizeComponent(
      { render: __vue_render__$Q, staticRenderFns: __vue_staticRenderFns__$Q },
      __vue_inject_styles__$T,
      __vue_script__$T,
      __vue_scope_id__$T,
      __vue_is_functional_template__$T,
      __vue_module_identifier__$T,
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
  var strings$o = {
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

  var numbers$8 = {
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

  ACCEPTABLE_KEYS.add(strings$o.ARROW_LEFT_KEY);
  ACCEPTABLE_KEYS.add(strings$o.ARROW_RIGHT_KEY);
  ACCEPTABLE_KEYS.add(strings$o.END_KEY);
  ACCEPTABLE_KEYS.add(strings$o.HOME_KEY);
  ACCEPTABLE_KEYS.add(strings$o.ENTER_KEY);
  ACCEPTABLE_KEYS.add(strings$o.SPACE_KEY);
  /**
   * @type {Map<number, string>}
   */

  var KEYCODE_MAP = new Map(); // IE11 has no support for new Map with iterable so we need to initialize this by hand

  KEYCODE_MAP.set(numbers$8.ARROW_LEFT_KEYCODE, strings$o.ARROW_LEFT_KEY);
  KEYCODE_MAP.set(numbers$8.ARROW_RIGHT_KEYCODE, strings$o.ARROW_RIGHT_KEY);
  KEYCODE_MAP.set(numbers$8.END_KEYCODE, strings$o.END_KEY);
  KEYCODE_MAP.set(numbers$8.HOME_KEYCODE, strings$o.HOME_KEY);
  KEYCODE_MAP.set(numbers$8.ENTER_KEYCODE, strings$o.ENTER_KEY);
  KEYCODE_MAP.set(numbers$8.SPACE_KEYCODE, strings$o.SPACE_KEY);
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
        return strings$o;
      }
      /** @return enum {number} */

    }, {
      key: "numbers",
      get: function get() {
        return numbers$8;
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
        var shouldGoToEnd = key === strings$o.END_KEY;
        var shouldDecrement = key === strings$o.ARROW_LEFT_KEY && !isRTL || key === strings$o.ARROW_RIGHT_KEY && isRTL;
        var shouldIncrement = key === strings$o.ARROW_RIGHT_KEY && !isRTL || key === strings$o.ARROW_LEFT_KEY && isRTL;
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
        var leftIncrement = relativeContentRight - numbers$8.EXTRA_SCROLL_AMOUNT;
        var rightIncrement = relativeContentLeft + numbers$8.EXTRA_SCROLL_AMOUNT;

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
        var leftIncrement = relativeContentRight + numbers$8.EXTRA_SCROLL_AMOUNT;
        var rightIncrement = relativeContentLeft - numbers$8.EXTRA_SCROLL_AMOUNT;

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
        return key === strings$o.SPACE_KEY || key === strings$o.ENTER_KEY;
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

  var script$U = {
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
  const __vue_script__$U = script$U;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$U.__file = "/ddata/extra/vma/components/tabs/mdc-tab-bar.vue";

  /* template */
  var __vue_render__$R = function() {
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
  var __vue_staticRenderFns__$R = [];
  __vue_render__$R._withStripped = true;

    /* style */
    const __vue_inject_styles__$U = undefined;
    /* scoped */
    const __vue_scope_id__$U = undefined;
    /* module identifier */
    const __vue_module_identifier__$U = undefined;
    /* functional template */
    const __vue_is_functional_template__$U = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcTabBar = normalizeComponent(
      { render: __vue_render__$R, staticRenderFns: __vue_staticRenderFns__$R },
      __vue_inject_styles__$U,
      __vue_script__$U,
      __vue_scope_id__$U,
      __vue_is_functional_template__$U,
      __vue_module_identifier__$U,
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
  var cssClasses$o = {
    ANIMATING: 'mdc-tab-scroller--animating',
    SCROLL_TEST: 'mdc-tab-scroller__test',
    SCROLL_AREA_SCROLL: 'mdc-tab-scroller__scroll-area--scroll'
  };
  /** @enum {string} */

  var strings$p = {
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
        return cssClasses$o;
      }
      /** @return enum {string} */

    }, {
      key: "strings",
      get: function get() {
        return strings$p;
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
    el.classList.add(cssClasses$o.SCROLL_TEST);
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
  var script$V = {
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
  const __vue_script__$V = script$V;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$V.__file = "/ddata/extra/vma/components/tabs/mdc-tab-scroller.vue";

  /* template */
  var __vue_render__$S = function() {
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
  var __vue_staticRenderFns__$S = [];
  __vue_render__$S._withStripped = true;

    /* style */
    const __vue_inject_styles__$V = undefined;
    /* scoped */
    const __vue_scope_id__$V = undefined;
    /* module identifier */
    const __vue_module_identifier__$V = undefined;
    /* functional template */
    const __vue_is_functional_template__$V = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcTabScroller = normalizeComponent(
      { render: __vue_render__$S, staticRenderFns: __vue_staticRenderFns__$S },
      __vue_inject_styles__$V,
      __vue_script__$V,
      __vue_scope_id__$V,
      __vue_is_functional_template__$V,
      __vue_module_identifier__$V,
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
  var cssClasses$p = {
    ACTIVE: 'mdc-tab-indicator--active',
    FADE: 'mdc-tab-indicator--fade',
    NO_TRANSITION: 'mdc-tab-indicator--no-transition'
  };
  /** @enum {string} */

  var strings$q = {
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
        return cssClasses$p;
      }
      /** @return enum {string} */

    }, {
      key: "strings",
      get: function get() {
        return strings$q;
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
  var script$W = {
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
  const __vue_script__$W = script$W;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$W.__file = "/ddata/extra/vma/components/tabs/mdc-tab-indicator.vue";

  /* template */
  var __vue_render__$T = function() {
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
  var __vue_staticRenderFns__$T = [];
  __vue_render__$T._withStripped = true;

    /* style */
    const __vue_inject_styles__$W = undefined;
    /* scoped */
    const __vue_scope_id__$W = undefined;
    /* module identifier */
    const __vue_module_identifier__$W = undefined;
    /* functional template */
    const __vue_is_functional_template__$W = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcTabIndicator = normalizeComponent(
      { render: __vue_render__$T, staticRenderFns: __vue_staticRenderFns__$T },
      __vue_inject_styles__$W,
      __vue_script__$W,
      __vue_scope_id__$W,
      __vue_is_functional_template__$W,
      __vue_module_identifier__$W,
      undefined,
      undefined
    );

  //
  var script$X = {
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
  const __vue_script__$X = script$X;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$X.__file = "/ddata/extra/vma/components/tabs/mdc-tab-ripple.vue";

  /* template */
  var __vue_render__$U = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", {
      staticClass: "mdc-tab__ripple",
      class: _vm.classes,
      style: _vm.styles
    })
  };
  var __vue_staticRenderFns__$U = [];
  __vue_render__$U._withStripped = true;

    /* style */
    const __vue_inject_styles__$X = undefined;
    /* scoped */
    const __vue_scope_id__$X = undefined;
    /* module identifier */
    const __vue_module_identifier__$X = undefined;
    /* functional template */
    const __vue_is_functional_template__$X = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcTabRipple = normalizeComponent(
      { render: __vue_render__$U, staticRenderFns: __vue_staticRenderFns__$U },
      __vue_inject_styles__$X,
      __vue_script__$X,
      __vue_scope_id__$X,
      __vue_is_functional_template__$X,
      __vue_module_identifier__$X,
      undefined,
      undefined
    );

  var VueMDCTabs = BasePlugin({
    mdcTab: mdcTab,
    mdcTabBar: mdcTabBar,
    mdcTabScroller: mdcTabScroller,
    mdcTabIndicator: mdcTabIndicator,
    mdcTabRipple: mdcTabRipple
  });

  /**
   * @license
   * Copyright 2017 Google Inc.
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
   * Adapter for MDC Text Field Helper Text.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the TextField helper text into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */
  var MDCTextFieldHelperTextAdapter =
  /*#__PURE__*/
  function () {
    function MDCTextFieldHelperTextAdapter() {
      _classCallCheck(this, MDCTextFieldHelperTextAdapter);
    }

    _createClass(MDCTextFieldHelperTextAdapter, [{
      key: "addClass",

      /**
       * Adds a class to the helper text element.
       * @param {string} className
       */
      value: function addClass(className) {}
      /**
       * Removes a class from the helper text element.
       * @param {string} className
       */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}
      /**
       * Returns whether or not the helper text element contains the given class.
       * @param {string} className
       * @return {boolean}
       */

    }, {
      key: "hasClass",
      value: function hasClass(className) {}
      /**
       * Sets an attribute with a given value on the helper text element.
       * @param {string} attr
       * @param {string} value
       */

    }, {
      key: "setAttr",
      value: function setAttr(attr, value) {}
      /**
       * Removes an attribute from the helper text element.
       * @param {string} attr
       */

    }, {
      key: "removeAttr",
      value: function removeAttr(attr) {}
      /**
       * Sets the text content for the helper text element.
       * @param {string} content
       */

    }, {
      key: "setContent",
      value: function setContent(content) {}
    }]);

    return MDCTextFieldHelperTextAdapter;
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
  var strings$r = {
    ARIA_HIDDEN: 'aria-hidden',
    ROLE: 'role'
  };
  /** @enum {string} */

  var cssClasses$q = {
    HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
    HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg'
  };

  /**
   * @extends {MDCFoundation<!MDCTextFieldHelperTextAdapter>}
   * @final
   */

  var MDCTextFieldHelperTextFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCTextFieldHelperTextFoundation, _MDCFoundation);

    _createClass(MDCTextFieldHelperTextFoundation, null, [{
      key: "cssClasses",

      /** @return enum {string} */
      get: function get() {
        return cssClasses$q;
      }
      /** @return enum {string} */

    }, {
      key: "strings",
      get: function get() {
        return strings$r;
      }
      /**
       * {@see MDCTextFieldHelperTextAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCTextFieldHelperTextAdapter}
       */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCTextFieldHelperTextAdapter} */
          {
            addClass: function addClass() {},
            removeClass: function removeClass() {},
            hasClass: function hasClass() {},
            setAttr: function setAttr() {},
            removeAttr: function removeAttr() {},
            setContent: function setContent() {}
          }
        );
      }
      /**
       * @param {!MDCTextFieldHelperTextAdapter} adapter
       */

    }]);

    function MDCTextFieldHelperTextFoundation(adapter) {
      _classCallCheck(this, MDCTextFieldHelperTextFoundation);

      return _possibleConstructorReturn(this, _getPrototypeOf(MDCTextFieldHelperTextFoundation).call(this, _extends(MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)));
    }
    /**
     * Sets the content of the helper text field.
     * @param {string} content
     */


    _createClass(MDCTextFieldHelperTextFoundation, [{
      key: "setContent",
      value: function setContent(content) {
        this.adapter_.setContent(content);
      }
      /** @param {boolean} isPersistent Sets the persistency of the helper text. */

    }, {
      key: "setPersistent",
      value: function setPersistent(isPersistent) {
        if (isPersistent) {
          this.adapter_.addClass(cssClasses$q.HELPER_TEXT_PERSISTENT);
        } else {
          this.adapter_.removeClass(cssClasses$q.HELPER_TEXT_PERSISTENT);
        }
      }
      /**
       * @param {boolean} isValidation True to make the helper text act as an
       *   error validation message.
       */

    }, {
      key: "setValidation",
      value: function setValidation(isValidation) {
        if (isValidation) {
          this.adapter_.addClass(cssClasses$q.HELPER_TEXT_VALIDATION_MSG);
        } else {
          this.adapter_.removeClass(cssClasses$q.HELPER_TEXT_VALIDATION_MSG);
        }
      }
      /** Makes the helper text visible to the screen reader. */

    }, {
      key: "showToScreenReader",
      value: function showToScreenReader() {
        this.adapter_.removeAttr(strings$r.ARIA_HIDDEN);
      }
      /**
       * Sets the validity of the helper text based on the input validity.
       * @param {boolean} inputIsValid
       */

    }, {
      key: "setValidity",
      value: function setValidity(inputIsValid) {
        var helperTextIsPersistent = this.adapter_.hasClass(cssClasses$q.HELPER_TEXT_PERSISTENT);
        var helperTextIsValidationMsg = this.adapter_.hasClass(cssClasses$q.HELPER_TEXT_VALIDATION_MSG);
        var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;

        if (validationMsgNeedsDisplay) {
          this.adapter_.setAttr(strings$r.ROLE, 'alert');
        } else {
          this.adapter_.removeAttr(strings$r.ROLE);
        }

        if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
          this.hide_();
        }
      }
      /**
       * Hides the help text from screen readers.
       * @private
       */

    }, {
      key: "hide_",
      value: function hide_() {
        this.adapter_.setAttr(strings$r.ARIA_HIDDEN, 'true');
      }
    }]);

    return MDCTextFieldHelperTextFoundation;
  }(MDCFoundation);

  /**
   * @license
   * Copyright 2017 Google Inc.
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
   * Adapter for MDC Text Field Icon.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the text field icon into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */
  var MDCTextFieldIconAdapter =
  /*#__PURE__*/
  function () {
    function MDCTextFieldIconAdapter() {
      _classCallCheck(this, MDCTextFieldIconAdapter);
    }

    _createClass(MDCTextFieldIconAdapter, [{
      key: "getAttr",

      /**
       * Gets the value of an attribute on the icon element.
       * @param {string} attr
       * @return {string}
       */
      value: function getAttr(attr) {}
      /**
       * Sets an attribute on the icon element.
       * @param {string} attr
       * @param {string} value
       */

    }, {
      key: "setAttr",
      value: function setAttr(attr, value) {}
      /**
       * Removes an attribute from the icon element.
       * @param {string} attr
       */

    }, {
      key: "removeAttr",
      value: function removeAttr(attr) {}
      /**
       * Sets the text content of the icon element.
       * @param {string} content
       */

    }, {
      key: "setContent",
      value: function setContent(content) {}
      /**
       * Registers an event listener on the icon element for a given event.
       * @param {string} evtType
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "registerInteractionHandler",
      value: function registerInteractionHandler(evtType, handler) {}
      /**
       * Deregisters an event listener on the icon element for a given event.
       * @param {string} evtType
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "deregisterInteractionHandler",
      value: function deregisterInteractionHandler(evtType, handler) {}
      /**
       * Emits a custom event "MDCTextField:icon" denoting a user has clicked the icon.
       */

    }, {
      key: "notifyIconAction",
      value: function notifyIconAction() {}
    }]);

    return MDCTextFieldIconAdapter;
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
  var strings$s = {
    ICON_EVENT: 'MDCTextField:icon',
    ICON_ROLE: 'button'
  };

  /**
   * @extends {MDCFoundation<!MDCTextFieldIconAdapter>}
   * @final
   */

  var MDCTextFieldIconFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCTextFieldIconFoundation, _MDCFoundation);

    _createClass(MDCTextFieldIconFoundation, null, [{
      key: "strings",

      /** @return enum {string} */
      get: function get() {
        return strings$s;
      }
      /**
       * {@see MDCTextFieldIconAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCTextFieldIconAdapter}
       */

    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCTextFieldIconAdapter} */
          {
            getAttr: function getAttr() {},
            setAttr: function setAttr() {},
            removeAttr: function removeAttr() {},
            setContent: function setContent() {},
            registerInteractionHandler: function registerInteractionHandler() {},
            deregisterInteractionHandler: function deregisterInteractionHandler() {},
            notifyIconAction: function notifyIconAction() {}
          }
        );
      }
      /**
       * @param {!MDCTextFieldIconAdapter} adapter
       */

    }]);

    function MDCTextFieldIconFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCTextFieldIconFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCTextFieldIconFoundation).call(this, _extends(MDCTextFieldIconFoundation.defaultAdapter, adapter)));
      /** @private {string?} */

      _this.savedTabIndex_ = null;
      /** @private {function(!Event): undefined} */

      _this.interactionHandler_ = function (evt) {
        return _this.handleInteraction(evt);
      };

      return _this;
    }

    _createClass(MDCTextFieldIconFoundation, [{
      key: "init",
      value: function init() {
        var _this2 = this;

        this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
        ['click', 'keydown'].forEach(function (evtType) {
          _this2.adapter_.registerInteractionHandler(evtType, _this2.interactionHandler_);
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this3 = this;

        ['click', 'keydown'].forEach(function (evtType) {
          _this3.adapter_.deregisterInteractionHandler(evtType, _this3.interactionHandler_);
        });
      }
      /** @param {boolean} disabled */

    }, {
      key: "setDisabled",
      value: function setDisabled(disabled) {
        if (!this.savedTabIndex_) {
          return;
        }

        if (disabled) {
          this.adapter_.setAttr('tabindex', '-1');
          this.adapter_.removeAttr('role');
        } else {
          this.adapter_.setAttr('tabindex', this.savedTabIndex_);
          this.adapter_.setAttr('role', strings$s.ICON_ROLE);
        }
      }
      /** @param {string} label */

    }, {
      key: "setAriaLabel",
      value: function setAriaLabel(label) {
        this.adapter_.setAttr('aria-label', label);
      }
      /** @param {string} content */

    }, {
      key: "setContent",
      value: function setContent(content) {
        this.adapter_.setContent(content);
      }
      /**
       * Handles an interaction event
       * @param {!Event} evt
       */

    }, {
      key: "handleInteraction",
      value: function handleInteraction(evt) {
        if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
          this.adapter_.notifyIconAction();
        }
      }
    }]);

    return MDCTextFieldIconFoundation;
  }(MDCFoundation);

  /**
   * Adapter for MDC Text Field.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the Text Field into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */

  var MDCTextFieldAdapter =
  /*#__PURE__*/
  function () {
    function MDCTextFieldAdapter() {
      _classCallCheck(this, MDCTextFieldAdapter);
    }

    _createClass(MDCTextFieldAdapter, [{
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
       * Returns true if the root element contains the given class name.
       * @param {string} className
       * @return {boolean}
       */

    }, {
      key: "hasClass",
      value: function hasClass(className) {}
      /**
       * Registers an event handler on the root element for a given event.
       * @param {string} type
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "registerTextFieldInteractionHandler",
      value: function registerTextFieldInteractionHandler(type, handler) {}
      /**
       * Deregisters an event handler on the root element for a given event.
       * @param {string} type
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "deregisterTextFieldInteractionHandler",
      value: function deregisterTextFieldInteractionHandler(type, handler) {}
      /**
       * Registers an event listener on the native input element for a given event.
       * @param {string} evtType
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "registerInputInteractionHandler",
      value: function registerInputInteractionHandler(evtType, handler) {}
      /**
       * Deregisters an event listener on the native input element for a given event.
       * @param {string} evtType
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "deregisterInputInteractionHandler",
      value: function deregisterInputInteractionHandler(evtType, handler) {}
      /**
       * Registers a validation attribute change listener on the input element.
       * Handler accepts list of attribute names.
       * @param {function(!Array<string>): undefined} handler
       * @return {!MutationObserver}
       */

    }, {
      key: "registerValidationAttributeChangeHandler",
      value: function registerValidationAttributeChangeHandler(handler) {}
      /**
       * Disconnects a validation attribute observer on the input element.
       * @param {!MutationObserver} observer
       */

    }, {
      key: "deregisterValidationAttributeChangeHandler",
      value: function deregisterValidationAttributeChangeHandler(observer) {}
      /**
       * Returns an object representing the native text input element, with a
       * similar API shape. The object returned should include the value, disabled
       * and badInput properties, as well as the checkValidity() function. We never
       * alter the value within our code, however we do update the disabled
       * property, so if you choose to duck-type the return value for this method
       * in your implementation it's important to keep this in mind. Also note that
       * this method can return null, which the foundation will handle gracefully.
       * @return {?Element|?NativeInputType}
       */

    }, {
      key: "getNativeInput",
      value: function getNativeInput() {}
      /**
       * Returns true if the textfield is focused.
       * We achieve this via `document.activeElement === this.root_`.
       * @return {boolean}
       */

    }, {
      key: "isFocused",
      value: function isFocused() {}
      /**
       * Activates the line ripple.
       */

    }, {
      key: "activateLineRipple",
      value: function activateLineRipple() {}
      /**
       * Deactivates the line ripple.
       */

    }, {
      key: "deactivateLineRipple",
      value: function deactivateLineRipple() {}
      /**
       * Sets the transform origin of the line ripple.
       * @param {number} normalizedX
       */

    }, {
      key: "setLineRippleTransformOrigin",
      value: function setLineRippleTransformOrigin(normalizedX) {}
      /**
       * Only implement if label exists.
       * Shakes label if shouldShake is true.
       * @param {boolean} shouldShake
       */

    }, {
      key: "shakeLabel",
      value: function shakeLabel(shouldShake) {}
      /**
       * Only implement if label exists.
       * Floats the label above the input element if shouldFloat is true.
       * @param {boolean} shouldFloat
       */

    }, {
      key: "floatLabel",
      value: function floatLabel(shouldFloat) {}
      /**
       * Returns true if label element exists, false if it doesn't.
       * @return {boolean}
       */

    }, {
      key: "hasLabel",
      value: function hasLabel() {}
      /**
       * Only implement if label exists.
       * Returns width of label in pixels.
       * @return {number}
       */

    }, {
      key: "getLabelWidth",
      value: function getLabelWidth() {}
      /**
       * Returns true if outline element exists, false if it doesn't.
       * @return {boolean}
       */

    }, {
      key: "hasOutline",
      value: function hasOutline() {}
      /**
       * Only implement if outline element exists.
       * @param {number} labelWidth
       */

    }, {
      key: "notchOutline",
      value: function notchOutline(labelWidth) {}
      /**
       * Only implement if outline element exists.
       * Closes notch in outline element.
       */

    }, {
      key: "closeOutline",
      value: function closeOutline() {}
    }]);

    return MDCTextFieldAdapter;
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
  var strings$t = {
    ARIA_CONTROLS: 'aria-controls',
    INPUT_SELECTOR: '.mdc-text-field__input',
    LABEL_SELECTOR: '.mdc-floating-label',
    ICON_SELECTOR: '.mdc-text-field__icon',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple'
  };
  /** @enum {string} */

  var cssClasses$r = {
    ROOT: 'mdc-text-field',
    DISABLED: 'mdc-text-field--disabled',
    DENSE: 'mdc-text-field--dense',
    FOCUSED: 'mdc-text-field--focused',
    INVALID: 'mdc-text-field--invalid',
    TEXTAREA: 'mdc-text-field--textarea',
    OUTLINED: 'mdc-text-field--outlined',
    WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon'
  };
  /** @enum {number} */

  var numbers$9 = {
    LABEL_SCALE: 0.75,
    DENSE_LABEL_SCALE: 0.923
  }; // whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
  // under section: `Validation-related attributes`

  var VALIDATION_ATTR_WHITELIST = ['pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength']; // Label should always float for these types as they show some UI even if value is empty.

  var ALWAYS_FLOAT_TYPES = ['color', 'date', 'datetime-local', 'month', 'range', 'time', 'week'];

  /**
   * @extends {MDCFoundation<!MDCTextFieldAdapter>}
   * @final
   */

  var MDCTextFieldFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCTextFieldFoundation, _MDCFoundation);

    _createClass(MDCTextFieldFoundation, [{
      key: "shouldShake",

      /** @return {boolean} */
      get: function get() {
        return !this.isValid() && !this.isFocused_ && !!this.getValue();
      }
      /**
       * @return {boolean}
       * @private
       */

    }, {
      key: "shouldAlwaysFloat_",
      get: function get() {
        var type = this.getNativeInput_().type;
        return ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
      }
      /** @return {boolean} */

    }, {
      key: "shouldFloat",
      get: function get() {
        return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_();
      }
      /**
       * {@see MDCTextFieldAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCTextFieldAdapter}
       */

    }], [{
      key: "cssClasses",

      /** @return enum {string} */
      get: function get() {
        return cssClasses$r;
      }
      /** @return enum {string} */

    }, {
      key: "strings",
      get: function get() {
        return strings$t;
      }
      /** @return enum {string} */

    }, {
      key: "numbers",
      get: function get() {
        return numbers$9;
      }
    }, {
      key: "defaultAdapter",
      get: function get() {
        return (
          /** @type {!MDCTextFieldAdapter} */
          {
            addClass: function addClass() {},
            removeClass: function removeClass() {},
            hasClass: function hasClass() {},
            registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler() {},
            deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler() {},
            registerInputInteractionHandler: function registerInputInteractionHandler() {},
            deregisterInputInteractionHandler: function deregisterInputInteractionHandler() {},
            registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler() {},
            deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler() {},
            getNativeInput: function getNativeInput() {},
            isFocused: function isFocused() {},
            activateLineRipple: function activateLineRipple() {},
            deactivateLineRipple: function deactivateLineRipple() {},
            setLineRippleTransformOrigin: function setLineRippleTransformOrigin() {},
            shakeLabel: function shakeLabel() {},
            floatLabel: function floatLabel() {},
            hasLabel: function hasLabel() {},
            getLabelWidth: function getLabelWidth() {},
            hasOutline: function hasOutline() {},
            notchOutline: function notchOutline() {},
            closeOutline: function closeOutline() {}
          }
        );
      }
      /**
       * @param {!MDCTextFieldAdapter} adapter
       * @param {!FoundationMapType=} foundationMap Map from subcomponent names to their subfoundations.
       */

    }]);

    function MDCTextFieldFoundation(adapter) {
      var _this;

      var foundationMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :
      /** @type {!FoundationMapType} */
      {};

      _classCallCheck(this, MDCTextFieldFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCTextFieldFoundation).call(this, _extends(MDCTextFieldFoundation.defaultAdapter, adapter)));
      /** @type {!MDCTextFieldHelperTextFoundation|undefined} */

      _this.helperText_ = foundationMap.helperText;
      /** @type {!MDCTextFieldIconFoundation|undefined} */

      _this.leadingIcon_ = foundationMap.leadingIcon;
      /** @type {!MDCTextFieldIconFoundation|undefined} */

      _this.trailingIcon_ = foundationMap.trailingIcon;
      /** @private {boolean} */

      _this.isFocused_ = false;
      /** @private {boolean} */

      _this.receivedUserInput_ = false;
      /** @private {boolean} */

      _this.useCustomValidityChecking_ = false;
      /** @private {boolean} */

      _this.isValid_ = true;
      /** @private {boolean} */

      _this.useNativeValidation_ = true;
      /** @private {function(): undefined} */

      _this.inputFocusHandler_ = function () {
        return _this.activateFocus();
      };
      /** @private {function(): undefined} */


      _this.inputBlurHandler_ = function () {
        return _this.deactivateFocus();
      };
      /** @private {function(): undefined} */


      _this.inputInputHandler_ = function () {
        return _this.autoCompleteFocus();
      };
      /** @private {function(!Event): undefined} */


      _this.setPointerXOffset_ = function (evt) {
        return _this.setTransformOrigin(evt);
      };
      /** @private {function(!Event): undefined} */


      _this.textFieldInteractionHandler_ = function () {
        return _this.handleTextFieldInteraction();
      };
      /** @private {function(!Array): undefined} */


      _this.validationAttributeChangeHandler_ = function (attributesList) {
        return _this.handleValidationAttributeChange(attributesList);
      };
      /** @private {!MutationObserver} */


      _this.validationObserver_;
      return _this;
    }

    _createClass(MDCTextFieldFoundation, [{
      key: "init",
      value: function init() {
        var _this2 = this;

        if (this.adapter_.isFocused()) {
          this.inputFocusHandler_();
        } else if (this.adapter_.hasLabel() && this.shouldFloat) {
          this.notchOutline(true);
          this.adapter_.floatLabel(true);
        }

        this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
        this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
        this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
        ['mousedown', 'touchstart'].forEach(function (evtType) {
          _this2.adapter_.registerInputInteractionHandler(evtType, _this2.setPointerXOffset_);
        });
        ['click', 'keydown'].forEach(function (evtType) {
          _this2.adapter_.registerTextFieldInteractionHandler(evtType, _this2.textFieldInteractionHandler_);
        });
        this.validationObserver_ = this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this3 = this;

        this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
        this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
        this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
        ['mousedown', 'touchstart'].forEach(function (evtType) {
          _this3.adapter_.deregisterInputInteractionHandler(evtType, _this3.setPointerXOffset_);
        });
        ['click', 'keydown'].forEach(function (evtType) {
          _this3.adapter_.deregisterTextFieldInteractionHandler(evtType, _this3.textFieldInteractionHandler_);
        });
        this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
      }
      /**
       * Handles user interactions with the Text Field.
       */

    }, {
      key: "handleTextFieldInteraction",
      value: function handleTextFieldInteraction() {
        if (this.adapter_.getNativeInput().disabled) {
          return;
        }

        this.receivedUserInput_ = true;
      }
      /**
       * Handles validation attribute changes
       * @param {!Array<string>} attributesList
       */

    }, {
      key: "handleValidationAttributeChange",
      value: function handleValidationAttributeChange(attributesList) {
        var _this4 = this;

        attributesList.some(function (attributeName) {
          if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
            _this4.styleValidity_(true);

            return true;
          }
        });
      }
      /**
       * Opens/closes the notched outline.
       * @param {boolean} openNotch
       */

    }, {
      key: "notchOutline",
      value: function notchOutline(openNotch) {
        if (!this.adapter_.hasOutline()) {
          return;
        }

        if (openNotch) {
          var isDense = this.adapter_.hasClass(cssClasses$r.DENSE);
          var labelScale = isDense ? numbers$9.DENSE_LABEL_SCALE : numbers$9.LABEL_SCALE;
          var labelWidth = this.adapter_.getLabelWidth() * labelScale;
          this.adapter_.notchOutline(labelWidth);
        } else {
          this.adapter_.closeOutline();
        }
      }
      /**
       * Activates the text field focus state.
       */

    }, {
      key: "activateFocus",
      value: function activateFocus() {
        this.isFocused_ = true;
        this.styleFocused_(this.isFocused_);
        this.adapter_.activateLineRipple();

        if (this.adapter_.hasLabel()) {
          this.notchOutline(this.shouldFloat);
          this.adapter_.floatLabel(this.shouldFloat);
          this.adapter_.shakeLabel(this.shouldShake);
        }

        if (this.helperText_) {
          this.helperText_.showToScreenReader();
        }
      }
      /**
       * Sets the line ripple's transform origin, so that the line ripple activate
       * animation will animate out from the user's click location.
       * @param {!Event} evt
       */

    }, {
      key: "setTransformOrigin",
      value: function setTransformOrigin(evt) {
        var targetEvent;

        if (evt.touches) {
          targetEvent = evt.touches[0];
        } else {
          targetEvent = evt;
        }

        var targetClientRect = targetEvent.target.getBoundingClientRect();
        var normalizedX = targetEvent.clientX - targetClientRect.left;
        this.adapter_.setLineRippleTransformOrigin(normalizedX);
      }
      /**
       * Activates the Text Field's focus state in cases when the input value
       * changes without user input (e.g. programatically).
       */

    }, {
      key: "autoCompleteFocus",
      value: function autoCompleteFocus() {
        if (!this.receivedUserInput_) {
          this.activateFocus();
        }
      }
      /**
       * Deactivates the Text Field's focus state.
       */

    }, {
      key: "deactivateFocus",
      value: function deactivateFocus() {
        this.isFocused_ = false;
        this.adapter_.deactivateLineRipple();
        var isValid = this.isValid();
        this.styleValidity_(isValid);
        this.styleFocused_(this.isFocused_);

        if (this.adapter_.hasLabel()) {
          this.notchOutline(this.shouldFloat);
          this.adapter_.floatLabel(this.shouldFloat);
          this.adapter_.shakeLabel(this.shouldShake);
        }

        if (!this.shouldFloat) {
          this.receivedUserInput_ = false;
        }
      }
      /**
       * @return {string} The value of the input Element.
       */

    }, {
      key: "getValue",
      value: function getValue() {
        return this.getNativeInput_().value;
      }
      /**
       * @param {string} value The value to set on the input Element.
       */

    }, {
      key: "setValue",
      value: function setValue(value) {
        // Prevent Safari from moving the caret to the end of the input when the value has not changed.
        if (this.getValue() !== value) {
          this.getNativeInput_().value = value;
        }

        var isValid = this.isValid();
        this.styleValidity_(isValid);

        if (this.adapter_.hasLabel()) {
          this.notchOutline(this.shouldFloat);
          this.adapter_.floatLabel(this.shouldFloat);
          this.adapter_.shakeLabel(this.shouldShake);
        }
      }
      /**
       * @return {boolean} If a custom validity is set, returns that value.
       *     Otherwise, returns the result of native validity checks.
       */

    }, {
      key: "isValid",
      value: function isValid() {
        return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_;
      }
      /**
       * @param {boolean} isValid Sets the validity state of the Text Field.
       */

    }, {
      key: "setValid",
      value: function setValid(isValid) {
        this.isValid_ = isValid;
        this.styleValidity_(isValid);
        var shouldShake = !isValid && !this.isFocused_;

        if (this.adapter_.hasLabel()) {
          this.adapter_.shakeLabel(shouldShake);
        }
      }
      /**
       * Enables or disables the use of native validation. Use this for custom validation.
       * @param {boolean} useNativeValidation Set this to false to ignore native input validation.
       */

    }, {
      key: "setUseNativeValidation",
      value: function setUseNativeValidation(useNativeValidation) {
        this.useNativeValidation_ = useNativeValidation;
      }
      /**
       * @return {boolean} True if the Text Field is disabled.
       */

    }, {
      key: "isDisabled",
      value: function isDisabled() {
        return this.getNativeInput_().disabled;
      }
      /**
       * @param {boolean} disabled Sets the text-field disabled or enabled.
       */

    }, {
      key: "setDisabled",
      value: function setDisabled(disabled) {
        this.getNativeInput_().disabled = disabled;
        this.styleDisabled_(disabled);
      }
      /**
       * @param {string} content Sets the content of the helper text.
       */

    }, {
      key: "setHelperTextContent",
      value: function setHelperTextContent(content) {
        if (this.helperText_) {
          this.helperText_.setContent(content);
        }
      }
      /**
       * Sets the aria label of the leading icon.
       * @param {string} label
       */

    }, {
      key: "setLeadingIconAriaLabel",
      value: function setLeadingIconAriaLabel(label) {
        if (this.leadingIcon_) {
          this.leadingIcon_.setAriaLabel(label);
        }
      }
      /**
       * Sets the text content of the leading icon.
       * @param {string} content
       */

    }, {
      key: "setLeadingIconContent",
      value: function setLeadingIconContent(content) {
        if (this.leadingIcon_) {
          this.leadingIcon_.setContent(content);
        }
      }
      /**
       * Sets the aria label of the trailing icon.
       * @param {string} label
       */

    }, {
      key: "setTrailingIconAriaLabel",
      value: function setTrailingIconAriaLabel(label) {
        if (this.trailingIcon_) {
          this.trailingIcon_.setAriaLabel(label);
        }
      }
      /**
       * Sets the text content of the trailing icon.
       * @param {string} content
       */

    }, {
      key: "setTrailingIconContent",
      value: function setTrailingIconContent(content) {
        if (this.trailingIcon_) {
          this.trailingIcon_.setContent(content);
        }
      }
      /**
       * @return {boolean} True if the Text Field input fails in converting the
       *     user-supplied value.
       * @private
       */

    }, {
      key: "isBadInput_",
      value: function isBadInput_() {
        return this.getNativeInput_().validity.badInput;
      }
      /**
       * @return {boolean} The result of native validity checking
       *     (ValidityState.valid).
       */

    }, {
      key: "isNativeInputValid_",
      value: function isNativeInputValid_() {
        return this.getNativeInput_().validity.valid;
      }
      /**
       * Styles the component based on the validity state.
       * @param {boolean} isValid
       * @private
       */

    }, {
      key: "styleValidity_",
      value: function styleValidity_(isValid) {
        var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;

        if (isValid) {
          this.adapter_.removeClass(INVALID);
        } else {
          this.adapter_.addClass(INVALID);
        }

        if (this.helperText_) {
          this.helperText_.setValidity(isValid);
        }
      }
      /**
       * Styles the component based on the focused state.
       * @param {boolean} isFocused
       * @private
       */

    }, {
      key: "styleFocused_",
      value: function styleFocused_(isFocused) {
        var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;

        if (isFocused) {
          this.adapter_.addClass(FOCUSED);
        } else {
          this.adapter_.removeClass(FOCUSED);
        }
      }
      /**
       * Styles the component based on the disabled state.
       * @param {boolean} isDisabled
       * @private
       */

    }, {
      key: "styleDisabled_",
      value: function styleDisabled_(isDisabled) {
        var _MDCTextFieldFoundati = MDCTextFieldFoundation.cssClasses,
            DISABLED = _MDCTextFieldFoundati.DISABLED,
            INVALID = _MDCTextFieldFoundati.INVALID;

        if (isDisabled) {
          this.adapter_.addClass(DISABLED);
          this.adapter_.removeClass(INVALID);
        } else {
          this.adapter_.removeClass(DISABLED);
        }

        if (this.leadingIcon_) {
          this.leadingIcon_.setDisabled(isDisabled);
        }

        if (this.trailingIcon_) {
          this.trailingIcon_.setDisabled(isDisabled);
        }
      }
      /**
       * @return {!Element|!NativeInputType} The native text input from the
       * host environment, or a dummy if none exists.
       * @private
       */

    }, {
      key: "getNativeInput_",
      value: function getNativeInput_() {
        return this.adapter_.getNativeInput() ||
        /** @type {!NativeInputType} */
        {
          value: '',
          disabled: false,
          validity: {
            badInput: false,
            valid: true
          }
        };
      }
    }]);

    return MDCTextFieldFoundation;
  }(MDCFoundation);

  var script$Y = {
    name: 'mdc-textfield',
    mixins: [CustomElementMixin, DispatchFocusMixin, VMAUniqueIdMixin],
    inheritAttrs: false,
    model: {
      prop: 'value',
      event: 'model'
    },
    props: {
      value: [String, Number],
      type: {
        type: String,
        default: 'text',
        validator: function validator(value) {
          return ['text', 'email', 'search', 'password', 'tel', 'url', 'number'].indexOf(value) !== -1;
        }
      },
      dense: Boolean,
      label: String,
      helptext: String,
      helptextPersistent: Boolean,
      helptextValidation: Boolean,
      outline: Boolean,
      disabled: Boolean,
      required: Boolean,
      valid: {
        type: Boolean,
        default: undefined
      },
      fullwidth: Boolean,
      multiline: Boolean,
      leadingIcon: [String, Array, Object],
      trailingNonInteractive: Boolean,
      leadingNonInteractive: Boolean,
      trailingIcon: [String, Array, Object],
      size: {
        type: [Number, String],
        default: 20
      },
      minlength: {
        type: [Number, String],
        default: undefined
      },
      maxlength: {
        type: [Number, String],
        default: undefined
      },
      rows: {
        type: [Number, String],
        default: 8
      },
      cols: {
        type: [Number, String],
        default: 40
      },
      id: {
        type: String
      }
    },
    data: function data() {
      return {
        text: this.value,
        rootClasses: {
          'mdc-textfield': true,
          'mdc-text-field': true,
          'mdc-text-field--upgraded': true,
          'mdc-text-field--disabled': this.disabled,
          'mdc-text-field--dense': this.dense,
          'mdc-text-field--fullwidth': this.fullwidth,
          'mdc-text-field--textarea': this.multiline,
          'mdc-text-field--outlined': !this.fullwidth && this.outline
        },
        inputClasses: {
          'mdc-text-field__input': true
        },
        labelClasses: {
          'mdc-floating-label': true
        },
        lineRippleClasses: {
          'mdc-line-ripple': true
        },
        lineRippleStyles: {},
        helpClasses: {
          'mdc-text-field-helper-text': true,
          'mdc-text-field-helper-text--persistent': this.helptextPersistent,
          'mdc-text-field-helper-text--validation-msg': this.helptextValidation
        },
        outlineClasses: {},
        notchStyles: {}
      };
    },
    computed: {
      leadingTabindex: function leadingTabindex() {
        if (!this.leadingNonInteractive) {
          return '0';
        }
      },
      leadingRole: function leadingRole() {
        if (!this.leadingNonInteractive) {
          return 'button';
        }
      },
      trailingTabindex: function trailingTabindex() {
        if (!this.trailingNonInteractive) {
          return '0';
        }
      },
      trailingRole: function trailingRole() {
        if (!this.trailingNonInteractive) {
          return 'button';
        }
      },
      inputPlaceHolder: function inputPlaceHolder() {
        return this.fullwidth ? this.label : undefined;
      },
      inputAriaControls: function inputAriaControls() {
        return this.help ? 'help-' + this.vma_uid_ : undefined;
      },
      hasLabel: function hasLabel() {
        return !this.fullwidth && !this.outline && this.label;
      },
      hasOutlineLabel: function hasOutlineLabel() {
        return this.hasOutline && this.label;
      },
      hasOutline: function hasOutline() {
        return !this.fullwidth && this.outline;
      },
      hasLineRipple: function hasLineRipple() {
        return !this.hasOutline && !this.multiline;
      },
      hasLeadingIcon: function hasLeadingIcon() {
        if (this.leadingIcon || this.$slots['leading-icon']) {
          return this.leadingIcon ? extractIconProp(this.leadingIcon) : {};
        }

        return false;
      },
      hasTrailingIcon: function hasTrailingIcon() {
        if (this.trailingIcon || this.$slots['trailing-icon']) {
          return this.trailingIcon ? extractIconProp(this.trailingIcon) : {};
        }

        return false;
      },
      labelClassesUpgraded: function labelClassesUpgraded() {
        return _extends(this.labelClasses, {
          'mdc-floating-label--float-above': this.value
        });
      }
    },
    watch: {
      disabled: function disabled() {
        this.foundation && this.foundation.setDisabled(this.disabled);
      },
      required: function required() {
        this.$refs.input && (this.$refs.input.required = this.required);
      },
      valid: function valid() {
        if (typeof this.valid !== 'undefined') {
          this.foundation && this.foundation.setValid(this.valid);
        }
      },
      dense: function dense() {
        this.$set(this.rootClasses, 'mdc-text-field--dense', this.dense);
      },
      helptextPersistent: function helptextPersistent() {
        this.helperTextFoundation && this.helperTextFoundation.setPersistent(this.helptextPersistent);
      },
      helptextValidation: function helptextValidation() {
        this.helperTextFoundation && this.helperTextFoundation.setValidation(this.helptextValidation);
      },
      value: function value(_value) {
        if (this.foundation) {
          if (_value !== this.foundation.getValue()) {
            this.foundation.setValue(_value);
          }
        }
      }
    },
    mounted: function mounted() {
      var _this = this;

      if (this.$refs.lineRipple) {
        this.lineRippleFoundation = new MDCLineRippleFoundation({
          addClass: function addClass(className) {
            _this.$set(_this.lineRippleClasses, className, true);
          },
          removeClass: function removeClass(className) {
            _this.$delete(_this.lineRippleClasses, className);
          },
          hasClass: function hasClass(className) {
            _this.$refs.lineRipple.classList.contains(className);
          },
          setStyle: function setStyle(name, value) {
            _this.$set(_this.lineRippleStyles, name, value);
          },
          registerEventHandler: function registerEventHandler(evtType, handler) {
            _this.$refs.lineRipple.addEventListener(evtType, handler);
          },
          deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
            _this.$refs.lineRipple.removeEventListener(evtType, handler);
          }
        });
        this.lineRippleFoundation.init();
      }

      if (this.$refs.help) {
        this.helperTextFoundation = new MDCTextFieldHelperTextFoundation({
          addClass: function addClass(className) {
            _this.$set(_this.helpClasses, className, true);
          },
          removeClass: function removeClass(className) {
            _this.$delete(_this.helpClasses, className);
          },
          hasClass: function hasClass(className) {
            return _this.$refs.help.classList.contains(className);
          },
          setAttr: function setAttr(name, value) {
            _this.$refs.help.setAttribute(name, value);
          },
          removeAttr: function removeAttr(name) {
            _this.$refs.help.removeAttribute(name);
          },
          setContent: function setContent()
          /*content*/
          {// help text get's updated from {{helptext}}
            // this.$refs.help.textContent = content;
          }
        });
        this.helperTextFoundation.init();
      }

      if (this.hasLeadingIcon) {
        this.$set(this.rootClasses, 'mdc-text-field--with-leading-icon', true);
        this.leadingIconFoundation = new MDCTextFieldIconFoundation({
          setAttr: function setAttr(attr, value) {
            return _this.$refs.leadingIcon.setAttribute(attr, value);
          },
          getAttr: function getAttr(attr) {
            return _this.$refs.leadingIcon.getAttribute(attr);
          },
          removeAttr: function removeAttr(attr) {
            return _this.$refs.leadingIcon.removeAttribute(attr);
          },
          setContent: function setContent()
          /*content*/
          {// icon text get's updated from {{{{ hasTrailingIcon.content }}}}
            // this.$refs.icon.textContent = content;
          },
          registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
            _this.$refs.leadingIcon.addEventListener(evtType, handler);
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
            _this.$refs.leadingIcon.removeEventListener(evtType, handler);
          },
          notifyIconAction: function notifyIconAction() {
            return _this.$emit('leadingicon-action');
          }
        });
        this.leadingIconFoundation.init();
      }

      if (this.hasTrailingIcon) {
        this.$set(this.rootClasses, 'mdc-text-field--with-trailing-icon', true);
        this.trailingIconFoundation = new MDCTextFieldIconFoundation({
          setAttr: function setAttr(attr, value) {
            return _this.$refs.trailingIcon.setAttribute(attr, value);
          },
          getAttr: function getAttr(attr) {
            return _this.$refs.trailingIcon.getAttribute(attr);
          },
          removeAttr: function removeAttr(attr) {
            return _this.$refs.trailingIcon.removeAttribute(attr);
          },
          setContent: function setContent()
          /*content*/
          {// icon text get's updated from {{{{ hasTrailingIcon.content }}}}
            // this.$refs.icon.textContent = content;
          },
          registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
            _this.$refs.trailingIcon.addEventListener(evtType, handler);
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
            _this.$refs.trailingIcon.removeEventListener(evtType, handler);
          },
          notifyIconAction: function notifyIconAction() {
            return _this.$emit('trainlingicon-action');
          }
        });
        this.trailingIconFoundation.init();
      }

      if (this.$refs.label || this.$refs['label-outline']) {
        var label = this.$refs.label || this.$refs['label-outline'];
        this.labelFoundation = new MDCFloatingLabelFoundation({
          addClass: function addClass(className) {
            _this.$set(_this.labelClasses, className, true);
          },
          removeClass: function removeClass(className) {
            _this.$delete(_this.labelClasses, className);
          },
          getWidth: function getWidth() {
            return label.offsetWidth;
          },
          registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
            label.addEventListener(evtType, handler);
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
            label.removeEventListener(evtType, handler);
          }
        });
        this.labelFoundation.init();
      }

      if (this.$refs.outline) {
        this.outlineFoundation = new MDCNotchedOutlineFoundation({
          addClass: function addClass(className) {
            _this.$set(_this.outlineClasses, className, true);
          },
          removeClass: function removeClass(className) {
            _this.$delete(_this.outlineClasses, className);
          },
          setNotchWidthProperty: function setNotchWidthProperty(width) {
            return _this.$set(_this.notchStyles, 'width', width > 0 ? width + 'px' : '0');
          }
        });
        this.outlineFoundation.init();
      }

      this.foundation = new MDCTextFieldFoundation(_extends({
        addClass: function addClass(className) {
          _this.$set(_this.rootClasses, className, true);
        },
        removeClass: function removeClass(className) {
          _this.$delete(_this.rootClasses, className);
        },
        hasClass: function hasClass(className) {
          _this.$refs.root.classList.contains(className);
        },
        registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {
          _this.$refs.root.addEventListener(evtType, handler);
        },
        deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {
          _this.$refs.root.removeEventListener(evtType, handler);
        },
        isFocused: function isFocused() {
          return document.activeElement === _this.$refs.input;
        },
        isRtl: function isRtl() {
          return window.getComputedStyle(_this.$refs.root).getPropertyValue('direction') === 'rtl';
        },
        registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler(handler) {
          var getAttributesList = function getAttributesList(mutationsList) {
            return mutationsList.map(function (mutation) {
              return mutation.attributeName;
            });
          };

          var observer = new MutationObserver(function (mutationsList) {
            return handler(getAttributesList(mutationsList));
          });
          var targetNode = _this.$refs.input;
          var config = {
            attributes: true
          };
          observer.observe(targetNode, config);
          return observer;
        },
        deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler(observer) {
          observer.disconnect();
        }
      }, this.getInputAdapterMethods(), this.getLabelAdapterMethods(), this.getLineRippleAdapterMethods(), this.getOutlineAdapterMethods()), {
        helperText: this.helperTextFoundation,
        leadingIcon: this.leadingIconFoundation,
        trailingIcon: this.trailingFoundation
      });
      this.foundation.init();
      this.foundation.setValue(this.value);
      this.foundation.setDisabled(this.disabled);
      this.$refs.input && (this.$refs.input.required = this.required);

      if (typeof this.valid !== 'undefined') {
        this.foundation.setValid(this.valid);
      }

      if (this.textbox) {
        this.ripple = new RippleBase(this);
        this.ripple.init();
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.foundation && this.foundation.destroy();
      this.lineRippleFoundation && this.lineRippleFoundation.destroy();
      this.helperTextFoundation && this.helperTextFoundation.destroy();
      this.leadingIconFoundation && this.leadingIconFoundation.destroy();
      this.trailingIconFoundation && this.trailingIconFoundation.destroy();
      this.labelFoundation && this.labelFoundation.destroy();
      this.outlineFoundation && this.outlineFoundation.destroy();
      this.ripple && this.ripple.destroy();
    },
    methods: {
      getInputAdapterMethods: function getInputAdapterMethods() {
        var _this2 = this;

        return {
          registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {
            _this2.$refs.input.addEventListener(evtType, handler, applyPassive());
          },
          deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {
            _this2.$refs.input.removeEventListener(evtType, handler, applyPassive());
          },
          getNativeInput: function getNativeInput() {
            return _this2.$refs.input;
          }
        };
      },
      getLabelAdapterMethods: function getLabelAdapterMethods() {
        var _this3 = this;

        return {
          shakeLabel: function shakeLabel(shouldShake) {
            _this3.labelFoundation.shake(shouldShake);
          },
          floatLabel: function floatLabel(shouldFloat) {
            _this3.labelFoundation.float(shouldFloat);
          },
          hasLabel: function hasLabel() {
            return !!_this3.$refs.label || !!_this3.$refs['label-outline'];
          },
          getLabelWidth: function getLabelWidth() {
            return _this3.labelFoundation.getWidth();
          }
        };
      },
      getLineRippleAdapterMethods: function getLineRippleAdapterMethods() {
        var _this4 = this;

        return {
          deactivateLineRipple: function deactivateLineRipple() {
            if (_this4.lineRippleFoundation) {
              _this4.lineRippleFoundation.deactivate();
            }
          },
          activateLineRipple: function activateLineRipple() {
            if (_this4.lineRippleFoundation) {
              _this4.lineRippleFoundation.activate();
            }
          },
          setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {
            if (_this4.lineRippleFoundation) {
              _this4.lineRippleFoundation.setRippleCenter(normalizedX);
            }
          }
        };
      },
      getOutlineAdapterMethods: function getOutlineAdapterMethods() {
        var _this5 = this;

        return {
          hasOutline: function hasOutline() {
            return !!_this5.hasOutline;
          },
          notchOutline: function notchOutline(notchWidth, isRtl) {
            return _this5.outlineFoundation.notch(notchWidth, isRtl);
          },
          closeOutline: function closeOutline() {
            return _this5.outlineFoundation.closeNotch();
          }
        };
      },
      updateValue: function updateValue(value) {
        this.$emit('model', value);
      },
      focus: function focus() {
        this.$refs.input && this.$refs.input.focus();
      },
      blur: function blur() {
        this.$refs.input && this.$refs.input.blur();
      }
    }
  };

  /* script */
  const __vue_script__$Y = script$Y;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$Y.__file = "/ddata/extra/vma/components/textfield/mdc-textfield.vue";

  /* template */
  var __vue_render__$V = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "mdc-textfield-wrapper",
        style: { width: _vm.fullwidth ? "100%" : undefined },
        attrs: { id: _vm.id }
      },
      [
        _c("div", { ref: "root", class: _vm.rootClasses }, [
          !!_vm.hasLeadingIcon
            ? _c(
                "i",
                {
                  ref: "leadingIcon",
                  staticClass: "mdc-text-field__icon",
                  class: _vm.hasLeadingIcon.classes,
                  attrs: { tabindex: _vm.leadingTabindex, role: _vm.leadingRole }
                },
                [
                  _vm._t("leading-icon", [
                    _vm._v(_vm._s(_vm.hasLeadingIcon.content))
                  ])
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.multiline
            ? _c(
                "textarea",
                _vm._g(
                  _vm._b(
                    {
                      ref: "input",
                      class: _vm.inputClasses,
                      attrs: {
                        id: _vm.vma_uid_,
                        minlength: _vm.minlength,
                        maxlength: _vm.maxlength,
                        placeholder: _vm.inputPlaceHolder,
                        "aria-label": _vm.inputPlaceHolder,
                        "aria-controls": _vm.inputAriaControls,
                        rows: _vm.rows,
                        cols: _vm.cols
                      },
                      on: {
                        input: function($event) {
                          _vm.updateValue($event.target.value);
                        }
                      }
                    },
                    "textarea",
                    _vm.$attrs,
                    false
                  ),
                  _vm.$listeners
                )
              )
            : _c(
                "input",
                _vm._g(
                  _vm._b(
                    {
                      ref: "input",
                      class: _vm.inputClasses,
                      attrs: {
                        id: _vm.vma_uid_,
                        type: _vm.type,
                        minlength: _vm.minlength,
                        maxlength: _vm.maxlength,
                        placeholder: _vm.inputPlaceHolder,
                        "aria-label": _vm.inputPlaceHolder,
                        "aria-controls": _vm.inputAriaControls
                      },
                      on: {
                        input: function($event) {
                          _vm.updateValue($event.target.value);
                        }
                      }
                    },
                    "input",
                    _vm.$attrs,
                    false
                  ),
                  _vm.$listeners
                )
              ),
          _vm._v(" "),
          _vm.hasLabel
            ? _c(
                "label",
                {
                  ref: "label",
                  class: _vm.labelClassesUpgraded,
                  attrs: { for: _vm.vma_uid_ }
                },
                [_vm._v("\n      " + _vm._s(_vm.label) + "\n    ")]
              )
            : _vm._e(),
          _vm._v(" "),
          !!_vm.hasTrailingIcon
            ? _c(
                "i",
                {
                  ref: "trailingIcon",
                  staticClass: "mdc-text-field__icon",
                  class: _vm.hasTrailingIcon.classes,
                  attrs: {
                    tabindex: _vm.trailingTabindex,
                    role: _vm.trailingRole
                  }
                },
                [
                  _vm._t("trailing-icon", [
                    _vm._v(_vm._s(_vm.hasTrailingIcon.content))
                  ])
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.hasOutline
            ? _c(
                "div",
                {
                  ref: "outline",
                  staticClass: "mdc-notched-outline",
                  class: _vm.outlineClasses
                },
                [
                  _c("div", { staticClass: "mdc-notched-outline__leading" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "mdc-notched-outline__notch",
                      style: _vm.notchStyles
                    },
                    [
                      _vm.hasOutlineLabel
                        ? _c(
                            "label",
                            {
                              ref: "label-outline",
                              class: _vm.labelClassesUpgraded,
                              attrs: { for: _vm.vma_uid_ }
                            },
                            [
                              _vm._v(
                                "\n          " + _vm._s(_vm.label) + "\n        "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("label", { staticClass: "mdc-floating-label" })
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "mdc-notched-outline__trailing" })
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.hasLineRipple
            ? _c("div", {
                ref: "lineRipple",
                class: _vm.lineRippleClasses,
                style: _vm.lineRippleStyles
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _vm.helptext
          ? _c(
              "p",
              {
                ref: "help",
                class: _vm.helpClasses,
                attrs: { id: "help-" + _vm.vma_uid_, "aria-hidden": "true" }
              },
              [_vm._v("\n    " + _vm._s(_vm.helptext) + "\n  ")]
            )
          : _vm._e()
      ]
    )
  };
  var __vue_staticRenderFns__$V = [];
  __vue_render__$V._withStripped = true;

    /* style */
    const __vue_inject_styles__$Y = undefined;
    /* scoped */
    const __vue_scope_id__$Y = undefined;
    /* module identifier */
    const __vue_module_identifier__$Y = undefined;
    /* functional template */
    const __vue_is_functional_template__$Y = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcTextField = normalizeComponent(
      { render: __vue_render__$V, staticRenderFns: __vue_staticRenderFns__$V },
      __vue_inject_styles__$Y,
      __vue_script__$Y,
      __vue_scope_id__$Y,
      __vue_is_functional_template__$Y,
      __vue_module_identifier__$Y,
      undefined,
      undefined
    );

  var VueMDCTextfield = BasePlugin({
    mdcTextField: mdcTextField
  });

  //
  var THEME_COLORS = ['primary', 'secondary', 'background', 'primary-light', 'secondary-light', 'secondary-dark', 'primary-dark'];
  var THEME_STYLES = ['text-primary', 'text-secondary', 'text-hint', 'text-icon', 'text-disabled'];
  var script$Z = {
    name: 'mdc-theme',
    components: {
      CustomElement: CustomElement
    },
    props: {
      tag: {
        type: String,
        default: 'div'
      },
      color: String,
      background: String
    },
    computed: {
      classes: function classes() {
        var classes = {};

        if (this.color && THEME_COLORS.indexOf(this.color) !== -1) {
          classes["mdc-theme--".concat(this.color)] = true;
        }

        if (this.background && THEME_COLORS.indexOf(this.background) !== -1) {
          classes["mdc-theme--".concat(this.background, "-bg")] = true;

          if (this.color && THEME_STYLES.indexOf(this.color) !== -1) {
            classes["mdc-theme--".concat(this.color, "-on-").concat(this.background)] = true;
          }
        }

        return classes;
      }
    }
  };

  /* script */
  const __vue_script__$Z = script$Z;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$Z.__file = "/ddata/extra/vma/components/theme/mdc-theme.vue";

  /* template */
  var __vue_render__$W = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "custom-element",
      { staticClass: "mdc-theme", class: _vm.classes, attrs: { tag: _vm.tag } },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$W = [];
  __vue_render__$W._withStripped = true;

    /* style */
    const __vue_inject_styles__$Z = undefined;
    /* scoped */
    const __vue_scope_id__$Z = undefined;
    /* module identifier */
    const __vue_module_identifier__$Z = undefined;
    /* functional template */
    const __vue_is_functional_template__$Z = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcTheme = normalizeComponent(
      { render: __vue_render__$W, staticRenderFns: __vue_staticRenderFns__$W },
      __vue_inject_styles__$Z,
      __vue_script__$Z,
      __vue_scope_id__$Z,
      __vue_is_functional_template__$Z,
      __vue_module_identifier__$Z,
      undefined,
      undefined
    );

  var VueMDCTheme = BasePlugin({
    mdcTheme: mdcTheme
  });

  /**
   * @license
   * Copyright 2017 Google Inc.
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
  var cssClasses$s = {
    FIXED: 'mdc-toolbar--fixed',
    FIXED_LASTROW: 'mdc-toolbar--fixed-lastrow-only',
    FIXED_AT_LAST_ROW: 'mdc-toolbar--fixed-at-last-row',
    TOOLBAR_ROW_FLEXIBLE: 'mdc-toolbar--flexible',
    FLEXIBLE_DEFAULT_BEHAVIOR: 'mdc-toolbar--flexible-default-behavior',
    FLEXIBLE_MAX: 'mdc-toolbar--flexible-space-maximized',
    FLEXIBLE_MIN: 'mdc-toolbar--flexible-space-minimized'
  };
  var strings$u = {
    TITLE_SELECTOR: '.mdc-toolbar__title',
    ICON_SELECTOR: '.mdc-toolbar__icon',
    FIRST_ROW_SELECTOR: '.mdc-toolbar__row:first-child',
    CHANGE_EVENT: 'MDCToolbar:change'
  };
  var numbers$a = {
    MAX_TITLE_SIZE: 2.125,
    MIN_TITLE_SIZE: 1.25,
    TOOLBAR_ROW_HEIGHT: 64,
    TOOLBAR_ROW_MOBILE_HEIGHT: 56,
    TOOLBAR_MOBILE_BREAKPOINT: 600
  };

  var MDCToolbarFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCToolbarFoundation, _MDCFoundation);

    _createClass(MDCToolbarFoundation, null, [{
      key: "cssClasses",
      get: function get() {
        return cssClasses$s;
      }
    }, {
      key: "strings",
      get: function get() {
        return strings$u;
      }
    }, {
      key: "numbers",
      get: function get() {
        return numbers$a;
      }
    }, {
      key: "defaultAdapter",
      get: function get() {
        return {
          hasClass: function hasClass() {
            return (
              /* className: string */

              /* boolean */
              false
            );
          },
          addClass: function addClass()
          /* className: string */
          {},
          removeClass: function removeClass()
          /* className: string */
          {},
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
          getViewportWidth: function getViewportWidth() {
            return (
              /* number */
              0
            );
          },
          getViewportScrollY: function getViewportScrollY() {
            return (
              /* number */
              0
            );
          },
          getOffsetHeight: function getOffsetHeight() {
            return (
              /* number */
              0
            );
          },
          getFirstRowElementOffsetHeight: function getFirstRowElementOffsetHeight() {
            return (
              /* number */
              0
            );
          },
          notifyChange: function notifyChange()
          /* evtData: {flexibleExpansionRatio: number} */
          {},
          setStyle: function setStyle()
          /* property: string, value: string */
          {},
          setStyleForTitleElement: function setStyleForTitleElement()
          /* property: string, value: string */
          {},
          setStyleForFlexibleRowElement: function setStyleForFlexibleRowElement()
          /* property: string, value: string */
          {},
          setStyleForFixedAdjustElement: function setStyleForFixedAdjustElement()
          /* property: string, value: string */
          {}
        };
      }
    }]);

    function MDCToolbarFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCToolbarFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCToolbarFoundation).call(this, _extends(MDCToolbarFoundation.defaultAdapter, adapter)));

      _this.resizeHandler_ = function () {
        return _this.checkRowHeight_();
      };

      _this.scrollHandler_ = function () {
        return _this.updateToolbarStyles_();
      };

      _this.checkRowHeightFrame_ = 0;
      _this.scrollFrame_ = 0;
      _this.executedLastChange_ = false;
      _this.calculations_ = {
        toolbarRowHeight: 0,
        // Calculated Height ratio. We use ratio to calculate corresponding heights in resize event.
        toolbarRatio: 0,
        // The ratio of toolbar height to row height
        flexibleExpansionRatio: 0,
        // The ratio of flexible space height to row height
        maxTranslateYRatio: 0,
        // The ratio of max toolbar move up distance to row height
        scrollThresholdRatio: 0,
        // The ratio of max scrollTop that we should listen to to row height
        // Derived Heights based on the above key ratios.
        toolbarHeight: 0,
        flexibleExpansionHeight: 0,
        // Flexible row minus toolbar height (derived)
        maxTranslateYDistance: 0,
        // When toolbar only fix last row (derived)
        scrollThreshold: 0
      }; // Toolbar fixed behavior
      // If toolbar is fixed

      _this.fixed_ = false; // If fixed is targeted only at the last row

      _this.fixedLastrow_ = false; // Toolbar flexible behavior
      // If the first row is flexible

      _this.hasFlexibleRow_ = false; // If use the default behavior

      _this.useFlexDefaultBehavior_ = false;
      return _this;
    }

    _createClass(MDCToolbarFoundation, [{
      key: "init",
      value: function init() {
        this.fixed_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED);
        this.fixedLastrow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED_LASTROW) & this.fixed_;
        this.hasFlexibleRow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.TOOLBAR_ROW_FLEXIBLE);

        if (this.hasFlexibleRow_) {
          this.useFlexDefaultBehavior_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_DEFAULT_BEHAVIOR);
        }

        this.initKeyRatio_();
        this.setKeyHeights_();
        this.adapter_.registerResizeHandler(this.resizeHandler_);
        this.adapter_.registerScrollHandler(this.scrollHandler_);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        this.adapter_.deregisterScrollHandler(this.scrollHandler_);
      }
    }, {
      key: "updateAdjustElementStyles",
      value: function updateAdjustElementStyles() {
        if (this.fixed_) {
          this.adapter_.setStyleForFixedAdjustElement('margin-top', "".concat(this.calculations_.toolbarHeight, "px"));
        }
      }
    }, {
      key: "getFlexibleExpansionRatio_",
      value: function getFlexibleExpansionRatio_(scrollTop) {
        // To prevent division by zero when there is no flexibleExpansionHeight
        var delta = 0.0001;
        return Math.max(0, 1 - scrollTop / (this.calculations_.flexibleExpansionHeight + delta));
      }
    }, {
      key: "checkRowHeight_",
      value: function checkRowHeight_() {
        var _this2 = this;

        cancelAnimationFrame(this.checkRowHeightFrame_);
        this.checkRowHeightFrame_ = requestAnimationFrame(function () {
          return _this2.setKeyHeights_();
        });
      }
    }, {
      key: "setKeyHeights_",
      value: function setKeyHeights_() {
        var newToolbarRowHeight = this.getRowHeight_();

        if (newToolbarRowHeight !== this.calculations_.toolbarRowHeight) {
          this.calculations_.toolbarRowHeight = newToolbarRowHeight;
          this.calculations_.toolbarHeight = this.calculations_.toolbarRatio * this.calculations_.toolbarRowHeight;
          this.calculations_.flexibleExpansionHeight = this.calculations_.flexibleExpansionRatio * this.calculations_.toolbarRowHeight;
          this.calculations_.maxTranslateYDistance = this.calculations_.maxTranslateYRatio * this.calculations_.toolbarRowHeight;
          this.calculations_.scrollThreshold = this.calculations_.scrollThresholdRatio * this.calculations_.toolbarRowHeight;
          this.updateAdjustElementStyles();
          this.updateToolbarStyles_();
        }
      }
    }, {
      key: "updateToolbarStyles_",
      value: function updateToolbarStyles_() {
        var _this3 = this;

        cancelAnimationFrame(this.scrollFrame_);
        this.scrollFrame_ = requestAnimationFrame(function () {
          var scrollTop = _this3.adapter_.getViewportScrollY();

          var hasScrolledOutOfThreshold = _this3.scrolledOutOfThreshold_(scrollTop);

          if (hasScrolledOutOfThreshold && _this3.executedLastChange_) {
            return;
          }

          var flexibleExpansionRatio = _this3.getFlexibleExpansionRatio_(scrollTop);

          _this3.updateToolbarFlexibleState_(flexibleExpansionRatio);

          if (_this3.fixedLastrow_) {
            _this3.updateToolbarFixedState_(scrollTop);
          }

          if (_this3.hasFlexibleRow_) {
            _this3.updateFlexibleRowElementStyles_(flexibleExpansionRatio);
          }

          _this3.executedLastChange_ = hasScrolledOutOfThreshold;

          _this3.adapter_.notifyChange({
            flexibleExpansionRatio: flexibleExpansionRatio
          });
        });
      }
    }, {
      key: "scrolledOutOfThreshold_",
      value: function scrolledOutOfThreshold_(scrollTop) {
        return scrollTop > this.calculations_.scrollThreshold;
      }
    }, {
      key: "initKeyRatio_",
      value: function initKeyRatio_() {
        var toolbarRowHeight = this.getRowHeight_();
        var firstRowMaxRatio = this.adapter_.getFirstRowElementOffsetHeight() / toolbarRowHeight;
        this.calculations_.toolbarRatio = this.adapter_.getOffsetHeight() / toolbarRowHeight;
        this.calculations_.flexibleExpansionRatio = firstRowMaxRatio - 1;
        this.calculations_.maxTranslateYRatio = this.fixedLastrow_ ? this.calculations_.toolbarRatio - firstRowMaxRatio : 0;
        this.calculations_.scrollThresholdRatio = (this.fixedLastrow_ ? this.calculations_.toolbarRatio : firstRowMaxRatio) - 1;
      }
    }, {
      key: "getRowHeight_",
      value: function getRowHeight_() {
        var breakpoint = MDCToolbarFoundation.numbers.TOOLBAR_MOBILE_BREAKPOINT;
        return this.adapter_.getViewportWidth() < breakpoint ? MDCToolbarFoundation.numbers.TOOLBAR_ROW_MOBILE_HEIGHT : MDCToolbarFoundation.numbers.TOOLBAR_ROW_HEIGHT;
      }
    }, {
      key: "updateToolbarFlexibleState_",
      value: function updateToolbarFlexibleState_(flexibleExpansionRatio) {
        this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
        this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);

        if (flexibleExpansionRatio === 1) {
          this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
        } else if (flexibleExpansionRatio === 0) {
          this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);
        }
      }
    }, {
      key: "updateToolbarFixedState_",
      value: function updateToolbarFixedState_(scrollTop) {
        var translateDistance = Math.max(0, Math.min(scrollTop - this.calculations_.flexibleExpansionHeight, this.calculations_.maxTranslateYDistance));
        this.adapter_.setStyle('transform', "translateY(".concat(-translateDistance, "px)"));

        if (translateDistance === this.calculations_.maxTranslateYDistance) {
          this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
        } else {
          this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
        }
      }
    }, {
      key: "updateFlexibleRowElementStyles_",
      value: function updateFlexibleRowElementStyles_(flexibleExpansionRatio) {
        if (this.fixed_) {
          var height = this.calculations_.flexibleExpansionHeight * flexibleExpansionRatio;
          this.adapter_.setStyleForFlexibleRowElement('height', "".concat(height + this.calculations_.toolbarRowHeight, "px"));
        }

        if (this.useFlexDefaultBehavior_) {
          this.updateElementStylesDefaultBehavior_(flexibleExpansionRatio);
        }
      }
    }, {
      key: "updateElementStylesDefaultBehavior_",
      value: function updateElementStylesDefaultBehavior_(flexibleExpansionRatio) {
        var maxTitleSize = MDCToolbarFoundation.numbers.MAX_TITLE_SIZE;
        var minTitleSize = MDCToolbarFoundation.numbers.MIN_TITLE_SIZE;
        var currentTitleSize = (maxTitleSize - minTitleSize) * flexibleExpansionRatio + minTitleSize;
        this.adapter_.setStyleForTitleElement('font-size', "".concat(currentTitleSize, "rem"));
      }
    }]);

    return MDCToolbarFoundation;
  }(MDCFoundation);

  //
  var script$_ = {
    name: 'mdc-toolbar',
    props: {
      fixed: Boolean,
      waterfall: Boolean,
      'fixed-lastrow': Boolean,
      flexible: Boolean,
      'flexible-default': {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      return {
        rootClasses: {
          'mdc-toolbar': true,
          'mdc-toolbar--fixed': this.fixed || this.waterfall || this.fixedLastrow,
          'mdc-toolbar--waterfall': this.waterfall,
          'mdc-toolbar--fixed-lastrow-only': this.fixedLastrow,
          'mdc-toolbar--flexible': this.flexible,
          'mdc-toolbar--flexible-default-behavior': this.flexible && this.flexibleDefault
        },
        rootStyles: {},
        adjustStyles: {// to avoid top margin collapse with :after el
          // 0.1 px should be rounded to 0px
          // TODO: find a better trick
          // height: '0.1px'
        },
        foundation: null
      };
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCToolbarFoundation({
        addClass: function addClass(className) {
          _this.$set(_this.rootClasses, className, true);
        },
        removeClass: function removeClass(className) {
          _this.$delete(_this.rootClasses, className);
        },
        hasClass: function hasClass(className) {
          return _this.$refs.root.classList.contains(className);
        },
        registerScrollHandler: function registerScrollHandler(handler) {
          window.addEventListener('scroll', handler);
        },
        deregisterScrollHandler: function deregisterScrollHandler(handler) {
          window.removeEventListener('scroll', handler);
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          window.removeEventListener('resize', handler);
        },
        getViewportWidth: function getViewportWidth() {
          return window.innerWidth;
        },
        getViewportScrollY: function getViewportScrollY() {
          return window.pageYOffset;
        },
        getOffsetHeight: function getOffsetHeight() {
          return _this.$refs.root.offsetHeight;
        },
        getFirstRowElementOffsetHeight: function getFirstRowElementOffsetHeight() {
          var el = _this.$refs.root.querySelector(MDCToolbarFoundation.strings.FIRST_ROW_SELECTOR);

          return el ? el.offsetHeight : undefined;
        },
        notifyChange: function notifyChange(evtData) {
          _this.$emit('change', evtData);
        },
        setStyle: function setStyle(property, value) {
          _this.$set(_this.rootStyles, property, value);
        },
        setStyleForTitleElement: function setStyleForTitleElement(property, value) {
          var el = _this.$refs.root.querySelector(MDCToolbarFoundation.strings.TITLE_SELECTOR);

          if (el) el.style.setProperty(property, value);
        },
        setStyleForFlexibleRowElement: function setStyleForFlexibleRowElement(property, value) {
          var el = _this.$refs.root.querySelector(MDCToolbarFoundation.strings.FIRST_ROW_SELECTOR);

          if (el) el.style.setProperty(property, value);
        },
        setStyleForFixedAdjustElement: function setStyleForFixedAdjustElement(property, value) {
          _this.$set(_this.adjustStyles, property, value);
        }
      });
      this.foundation.init();
    },
    beforeDestroy: function beforeDestroy() {
      this.foundation.destroy();
    }
  };

  /* script */
  const __vue_script__$_ = script$_;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$_.__file = "/ddata/extra/vma/components/toolbar/mdc-toolbar.vue";

  /* template */
  var __vue_render__$X = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("header", { staticClass: "mdc-toolbar-wrapper" }, [
      _c(
        "div",
        { ref: "root", class: _vm.rootClasses, style: _vm.rootStyles },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _vm.fixed || _vm.waterfall || _vm.fixedLastrow
        ? _c("div", {
            ref: "fixed-adjust",
            staticClass: "mdc-toolbar-fixed-adjust",
            style: _vm.adjustStyles
          })
        : _vm._e()
    ])
  };
  var __vue_staticRenderFns__$X = [];
  __vue_render__$X._withStripped = true;

    /* style */
    const __vue_inject_styles__$_ = undefined;
    /* scoped */
    const __vue_scope_id__$_ = undefined;
    /* module identifier */
    const __vue_module_identifier__$_ = undefined;
    /* functional template */
    const __vue_is_functional_template__$_ = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcToolbar = normalizeComponent(
      { render: __vue_render__$X, staticRenderFns: __vue_staticRenderFns__$X },
      __vue_inject_styles__$_,
      __vue_script__$_,
      __vue_scope_id__$_,
      __vue_is_functional_template__$_,
      __vue_module_identifier__$_,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  var script$10 = {
    name: 'mdc-toolbar-row'
  };

  /* script */
  const __vue_script__$10 = script$10;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$10.__file = "/ddata/extra/vma/components/toolbar/mdc-toolbar-row.vue";

  /* template */
  var __vue_render__$Y = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mdc-toolbar-row mdc-toolbar__row" },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$Y = [];
  __vue_render__$Y._withStripped = true;

    /* style */
    const __vue_inject_styles__$10 = undefined;
    /* scoped */
    const __vue_scope_id__$10 = undefined;
    /* module identifier */
    const __vue_module_identifier__$10 = undefined;
    /* functional template */
    const __vue_is_functional_template__$10 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcToolbarRow = normalizeComponent(
      { render: __vue_render__$Y, staticRenderFns: __vue_staticRenderFns__$Y },
      __vue_inject_styles__$10,
      __vue_script__$10,
      __vue_scope_id__$10,
      __vue_is_functional_template__$10,
      __vue_module_identifier__$10,
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
  var script$11 = {
    name: 'mdc-toolbar-section',
    props: {
      'align-start': Boolean,
      'align-end': Boolean,
      'shrink-to-fit': Boolean
    },
    data: function data() {
      return {
        classes: {
          'mdc-toolbar__section--align-start': this.alignStart,
          'mdc-toolbar__section--align-end': this.alignEnd,
          'mdc-toolbar__section--shrink-to-fit': this.shrinkToFit
        }
      };
    }
  };

  /* script */
  const __vue_script__$11 = script$11;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$11.__file = "/ddata/extra/vma/components/toolbar/mdc-toolbar-section.vue";

  /* template */
  var __vue_render__$Z = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "section",
      {
        staticClass: "mdc-toolbar-section mdc-toolbar__section",
        class: _vm.classes
      },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$Z = [];
  __vue_render__$Z._withStripped = true;

    /* style */
    const __vue_inject_styles__$11 = undefined;
    /* scoped */
    const __vue_scope_id__$11 = undefined;
    /* module identifier */
    const __vue_module_identifier__$11 = undefined;
    /* functional template */
    const __vue_is_functional_template__$11 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcToolbarSection = normalizeComponent(
      { render: __vue_render__$Z, staticRenderFns: __vue_staticRenderFns__$Z },
      __vue_inject_styles__$11,
      __vue_script__$11,
      __vue_scope_id__$11,
      __vue_is_functional_template__$11,
      __vue_module_identifier__$11,
      undefined,
      undefined
    );

  //
  var script$12 = {
    name: 'mdc-toolbar-menu-icon',
    mixins: [DispatchEventMixin],
    props: {
      icon: {
        type: String,
        default: 'menu'
      }
    }
  };

  /* script */
  const __vue_script__$12 = script$12;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$12.__file = "/ddata/extra/vma/components/toolbar/mdc-toolbar-menu-icon.vue";

  /* template */
  var __vue_render__$_ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "a",
      _vm._g(
        {
          staticClass: "mdc-toolbar-menu-icon mdc-toolbar__menu-icon",
          class: { "material-icons": !!_vm.icon }
        },
        _vm.listeners
      ),
      [_vm._t("default", [_vm._v(_vm._s(_vm.icon))])],
      2
    )
  };
  var __vue_staticRenderFns__$_ = [];
  __vue_render__$_._withStripped = true;

    /* style */
    const __vue_inject_styles__$12 = undefined;
    /* scoped */
    const __vue_scope_id__$12 = undefined;
    /* module identifier */
    const __vue_module_identifier__$12 = undefined;
    /* functional template */
    const __vue_is_functional_template__$12 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcToolbarMenuIcon = normalizeComponent(
      { render: __vue_render__$_, staticRenderFns: __vue_staticRenderFns__$_ },
      __vue_inject_styles__$12,
      __vue_script__$12,
      __vue_scope_id__$12,
      __vue_is_functional_template__$12,
      __vue_module_identifier__$12,
      undefined,
      undefined
    );

  //
  var script$13 = {
    name: 'mdc-toolbar-title',
    mixins: [DispatchEventMixin]
  };

  /* script */
  const __vue_script__$13 = script$13;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$13.__file = "/ddata/extra/vma/components/toolbar/mdc-toolbar-title.vue";

  /* template */
  var __vue_render__$10 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "a",
      _vm._g(
        { staticClass: "mdc-toolbar-title mdc-toolbar__title" },
        _vm.listeners
      ),
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$10 = [];
  __vue_render__$10._withStripped = true;

    /* style */
    const __vue_inject_styles__$13 = undefined;
    /* scoped */
    const __vue_scope_id__$13 = undefined;
    /* module identifier */
    const __vue_module_identifier__$13 = undefined;
    /* functional template */
    const __vue_is_functional_template__$13 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcToolbarTitle = normalizeComponent(
      { render: __vue_render__$10, staticRenderFns: __vue_staticRenderFns__$10 },
      __vue_inject_styles__$13,
      __vue_script__$13,
      __vue_scope_id__$13,
      __vue_is_functional_template__$13,
      __vue_module_identifier__$13,
      undefined,
      undefined
    );

  //
  var script$14 = {
    name: 'mdc-toolbar-icon',
    mixins: [DispatchEventMixin],
    props: {
      icon: String
    }
  };

  /* script */
  const __vue_script__$14 = script$14;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$14.__file = "/ddata/extra/vma/components/toolbar/mdc-toolbar-icon.vue";

  /* template */
  var __vue_render__$11 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "a",
      _vm._g(
        {
          staticClass: "mdc-toolbar-icon mdc-toolbar__icon",
          class: { "material-icons": !!_vm.icon }
        },
        _vm.listeners
      ),
      [_vm._t("default", [_vm._v(_vm._s(_vm.icon))])],
      2
    )
  };
  var __vue_staticRenderFns__$11 = [];
  __vue_render__$11._withStripped = true;

    /* style */
    const __vue_inject_styles__$14 = undefined;
    /* scoped */
    const __vue_scope_id__$14 = undefined;
    /* module identifier */
    const __vue_module_identifier__$14 = undefined;
    /* functional template */
    const __vue_is_functional_template__$14 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcToolbarIcon = normalizeComponent(
      { render: __vue_render__$11, staticRenderFns: __vue_staticRenderFns__$11 },
      __vue_inject_styles__$14,
      __vue_script__$14,
      __vue_scope_id__$14,
      __vue_is_functional_template__$14,
      __vue_module_identifier__$14,
      undefined,
      undefined
    );

  var VueMDCToolbar = BasePlugin({
    mdcToolbar: mdcToolbar,
    mdcToolbarRow: mdcToolbarRow,
    mdcToolbarSection: mdcToolbarSection,
    mdcToolbarMenuIcon: mdcToolbarMenuIcon,
    mdcToolbarTitle: mdcToolbarTitle,
    mdcToolbarIcon: mdcToolbarIcon
  });

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
  var cssClasses$t = {
    FIXED_CLASS: 'mdc-top-app-bar--fixed',
    FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
    SHORT_CLASS: 'mdc-top-app-bar--short',
    SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
    SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed'
  };
  /** @enum {number} */

  var numbers$b = {
    DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
    MAX_TOP_APP_BAR_HEIGHT: 128
  };
  /** @enum {string} */

  var strings$v = {
    ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
    NAVIGATION_EVENT: 'MDCTopAppBar:nav',
    NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
    ROOT_SELECTOR: '.mdc-top-app-bar',
    TITLE_SELECTOR: '.mdc-top-app-bar__title'
  };

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
        return strings$v;
      }
      /** @return enum {string} */

    }, {
      key: "cssClasses",
      get: function get() {
        return cssClasses$t;
      }
      /** @return enum {number} */

    }, {
      key: "numbers",
      get: function get() {
        return numbers$b;
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
            offset = -numbers$b.MAX_TOP_APP_BAR_HEIGHT;
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
          }, numbers$b.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
        }

        this.isCurrentlyBeingResized_ = true;

        if (this.resizeDebounceId_) {
          clearTimeout(this.resizeDebounceId_);
        }

        this.resizeDebounceId_ = setTimeout(function () {
          _this2.topAppBarScrollHandler_();

          _this2.isCurrentlyBeingResized_ = false;
          _this2.resizeDebounceId_ = INITIAL_VALUE;
        }, numbers$b.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
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

        var isAlwaysCollapsed = this.adapter_.hasClass(cssClasses$t.SHORT_COLLAPSED_CLASS);

        if (this.adapter_.getTotalActionItems() > 0) {
          this.adapter_.addClass(cssClasses$t.SHORT_HAS_ACTION_ITEM_CLASS);
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
            this.adapter_.removeClass(cssClasses$t.SHORT_COLLAPSED_CLASS);
            this.isCollapsed = false;
          }
        } else {
          if (!this.isCollapsed) {
            this.adapter_.addClass(cssClasses$t.SHORT_COLLAPSED_CLASS);
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
            this.adapter_.removeClass(cssClasses$t.FIXED_SCROLLED_CLASS);
            this.wasScrolled_ = false;
          }
        } else {
          if (!this.wasScrolled_) {
            this.adapter_.addClass(cssClasses$t.FIXED_SCROLLED_CLASS);
            this.wasScrolled_ = true;
          }
        }
      }
    }]);

    return MDCFixedTopAppBarFoundation;
  }(MDCTopAppBarBaseFoundation);

  var script$15 = {
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

  /* script */
  const __vue_script__$15 = script$15;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$15.__file = "/ddata/extra/vma/components/top-app-bar/mdc-top-app-bar.vue";

  /* template */
  var __vue_render__$12 = function() {
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
  var __vue_staticRenderFns__$12 = [];
  __vue_render__$12._withStripped = true;

    /* style */
    const __vue_inject_styles__$15 = undefined;
    /* scoped */
    const __vue_scope_id__$15 = undefined;
    /* module identifier */
    const __vue_module_identifier__$15 = undefined;
    /* functional template */
    const __vue_is_functional_template__$15 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcTopAppBar = normalizeComponent(
      { render: __vue_render__$12, staticRenderFns: __vue_staticRenderFns__$12 },
      __vue_inject_styles__$15,
      __vue_script__$15,
      __vue_scope_id__$15,
      __vue_is_functional_template__$15,
      __vue_module_identifier__$15,
      undefined,
      undefined
    );

  var script$16 = {
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
  const __vue_script__$16 = script$16;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$16.__file = "/ddata/extra/vma/components/top-app-bar/mdc-top-app-bar-action.vue";

  /* template */
  var __vue_render__$13 = function() {
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
  var __vue_staticRenderFns__$13 = [];
  __vue_render__$13._withStripped = true;

    /* style */
    const __vue_inject_styles__$16 = undefined;
    /* scoped */
    const __vue_scope_id__$16 = undefined;
    /* module identifier */
    const __vue_module_identifier__$16 = undefined;
    /* functional template */
    const __vue_is_functional_template__$16 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcTopAppBarAction = normalizeComponent(
      { render: __vue_render__$13, staticRenderFns: __vue_staticRenderFns__$13 },
      __vue_inject_styles__$16,
      __vue_script__$16,
      __vue_scope_id__$16,
      __vue_is_functional_template__$16,
      __vue_module_identifier__$16,
      undefined,
      undefined
    );

  var VueMDCTopAppBar = BasePlugin({
    mdcTopAppBar: mdcTopAppBar,
    mdcTopAppBarAction: mdcTopAppBarAction
  });

  var typos = ['headline1', 'headline2', 'headline3', 'headline4', 'headline5', 'headline6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'];
  var mdcTypoMixin = function mdcTypoMixin(name) {
    return {
      render: function render(createElement) {
        var _class;

        return createElement(this.tag, {
          class: (_class = {
            'mdc-typo': true
          }, _defineProperty(_class, name, true), _defineProperty(_class, "mdc-typography--".concat(this.typo), true), _class),
          attrs: this.$attrs,
          on: this.$listeners
        }, this.$slots.default);
      }
    };
  };
  function mdcTypoPropMixin(defaultTag, defaultTypo, validTypos) {
    return {
      props: {
        tag: {
          type: String,
          default: defaultTag
        },
        typo: {
          type: String,
          default: defaultTypo,
          validator: function validator(value) {
            return validTypos.indexOf(value) !== -1;
          }
        }
      }
    };
  }
  var mdcTextSection = {
    name: 'mdc-text-section',
    props: {
      tag: {
        type: String,
        default: 'section'
      }
    },
    render: function render(createElement) {
      return createElement(this.tag, {
        class: {
          'mdc-typography': true,
          'mdc-text-section': true
        },
        attrs: this.$attrs,
        on: this.$listeners
      }, this.$slots.default);
    }
  };
  var mdcText = {
    name: 'mdc-text',
    mixins: [mdcTypoMixin('mdc-text'), mdcTypoPropMixin('p', 'body1', typos)]
  };
  var mdcDisplay = {
    name: 'mdc-display',
    mixins: [mdcTypoMixin('mdc-display'), mdcTypoPropMixin('h1', 'headline4', ['headline4', 'headline3', 'headline2', 'headline1'])]
  };
  var mdcHeadline = {
    name: 'mdc-headline',
    mixins: [mdcTypoMixin('mdc-headline'), mdcTypoPropMixin('h2', 'headline5', ['headline5'])]
  };
  var mdcTitle = {
    name: 'mdc-title',
    mixins: [mdcTypoMixin('mdc-title'), mdcTypoPropMixin('h3', 'headline6', ['headline6'])]
  };
  var mdcSubHeading = {
    name: 'mdc-subheading',
    mixins: [mdcTypoMixin('mdc-subheading'), mdcTypoPropMixin('h4', 'subtitle2', ['subtitle1', 'subtitle2'])]
  };
  var mdcBody = {
    name: 'mdc-body',
    mixins: [mdcTypoMixin('mdc-body'), mdcTypoPropMixin('p', 'body1', ['body1', 'body2'])]
  };
  var mdcCaption = {
    name: 'mdc-caption',
    mixins: [mdcTypoMixin('mdc-caption'), mdcTypoPropMixin('span', 'caption', ['caption'])]
  };

  var VueMDCTypography = BasePlugin({
    mdcTextSection: mdcTextSection,
    mdcText: mdcText,
    mdcBody: mdcBody,
    mdcCaption: mdcCaption,
    mdcDisplay: mdcDisplay,
    mdcHeadline: mdcHeadline,
    mdcSubHeading: mdcSubHeading,
    mdcTitle: mdcTitle
  });

  //
  var plugin = {
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

  autoInit(plugin);

  return plugin;

}));