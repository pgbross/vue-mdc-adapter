/**
* @module vue-mdc-adapterdrawer 0.19.0-beta
* @exports VueMDCDrawer
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.42.0","material-components-web":"^0.42.1"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.VueMDCDrawer = factory());
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
    var cssClasses$2 = {
      // Ripple is a special case where the "root" component is really a "mixin" of sorts,
      // given that it's an 'upgrade' to an existing component. That being said it is the root
      // CSS class that all other CSS classes derive from.
      ROOT: 'mdc-ripple-upgraded',
      UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
      BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
      FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
      FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
    };
    var strings$2 = {
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
          return cssClasses$2;
        }
      }, {
        key: "strings",
        get: function get() {
          return strings$2;
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
    var script$3 = {
      name: 'mdc-ripple',
      mixins: [CustomElementMixin, RippleMixin],
      props: {
        tag: String
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
        "custom-element",
        {
          staticClass: "mdc-ripple",
          attrs: { tag: _vm.tag, classes: _vm.classes, styles: _vm.styles }
        },
        [_vm._t("default")],
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
      

      
      __vue_normalize__$3(
        { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
        __vue_inject_styles__$3,
        __vue_script__$3,
        __vue_scope_id__$3,
        __vue_is_functional_template__$3,
        __vue_module_identifier__$3,
        undefined,
        undefined
      );

    var script$4 = {
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
                const __vue_script__$4 = script$4;
                
    /* template */
    var __vue_render__$4 = function() {
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
      

      
      var mdcDrawerItem = __vue_normalize__$4(
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
    //
    //
    //
    var script$5 = {
      name: 'mdc-drawer-divider'
    };

    /* script */
                const __vue_script__$5 = script$5;
                
    /* template */
    var __vue_render__$5 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("hr", { staticClass: "mdc-list-divider" })
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
      

      
      var mdcDrawerDivider = __vue_normalize__$5(
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
      mdcDrawer: mdcDrawer,
      mdcDrawerHeader: mdcDrawerHeader,
      mdcDrawerList: mdcDrawerList,
      mdcDrawerItem: mdcDrawerItem,
      mdcDrawerDivider: mdcDrawerDivider
    });

    autoInit(plugin);

    return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXV0by1pbml0LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Jhc2UtcGx1Z2luLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1lbGVtZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1saW5rLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1ldmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9kaXNwYXRjaC1ldmVudC1taXhpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS91bmlxdWVpZC1taXhpbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL2Rpc21pc3NpYmxlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci9tb2RhbC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGlzdC9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGlzdC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vcG9ueWZpbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpc3QvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZm9jdXMtdHJhcC9ub2RlX21vZHVsZXMvdGFiYmFibGUvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2ZvY3VzLXRyYXAvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL2RyYXdlci9tZGMtZHJhd2VyLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL21kYy1kcmF3ZXItaGVhZGVyLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL21kYy1kcmF3ZXItbGlzdC52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUtYmFzZS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUudnVlIiwiLi4vLi4vY29tcG9uZW50cy9kcmF3ZXIvbWRjLWRyYXdlci1pdGVtLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL21kYy1kcmF3ZXItZGl2aWRlci52dWUiLCIuLi8uLi9jb21wb25lbnRzL2RyYXdlci9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHtcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIGNvbnRleHQucHJvcHMuaXMgfHwgY29udGV4dC5wcm9wcy50YWcgfHwgJ2RpdicsXG4gICAgICBjb250ZXh0LmRhdGEsXG4gICAgICBjb250ZXh0LmNoaWxkcmVuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50TWl4aW4gPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21FbGVtZW50XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDdXN0b21MaW5rID0ge1xuICBuYW1lOiAnY3VzdG9tLWxpbmsnLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIHRhZzogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdhJyB9LFxuICAgIGxpbms6IE9iamVjdFxuICB9LFxuICByZW5kZXIoaCwgY29udGV4dCkge1xuICAgIGxldCBlbGVtZW50XG4gICAgbGV0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LmRhdGEpXG5cbiAgICBpZiAoY29udGV4dC5wcm9wcy5saW5rICYmIGNvbnRleHQucGFyZW50LiRyb3V0ZXIpIHtcbiAgICAgIC8vIHJvdXRlci1saW5rIGNhc2VcbiAgICAgIGVsZW1lbnQgPSBjb250ZXh0LnBhcmVudC4kcm9vdC4kb3B0aW9ucy5jb21wb25lbnRzWydyb3V0ZXItbGluayddXG4gICAgICBkYXRhLnByb3BzID0gT2JqZWN0LmFzc2lnbih7IHRhZzogY29udGV4dC5wcm9wcy50YWcgfSwgY29udGV4dC5wcm9wcy5saW5rKVxuICAgICAgaWYgKGRhdGEub24uY2xpY2spIHtcbiAgICAgICAgZGF0YS5uYXRpdmVPbiA9IHsgY2xpY2s6IGRhdGEub24uY2xpY2sgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlbGVtZW50IGZhbGxiYWNrXG4gICAgICBlbGVtZW50ID0gY29udGV4dC5wcm9wcy50YWdcbiAgICB9XG5cbiAgICByZXR1cm4gaChlbGVtZW50LCBkYXRhLCBjb250ZXh0LmNoaWxkcmVuKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21MaW5rTWl4aW4gPSB7XG4gIHByb3BzOiB7XG4gICAgdG86IFtTdHJpbmcsIE9iamVjdF0sXG4gICAgZXhhY3Q6IEJvb2xlYW4sXG4gICAgYXBwZW5kOiBCb29sZWFuLFxuICAgIHJlcGxhY2U6IEJvb2xlYW4sXG4gICAgYWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgICBleGFjdEFjdGl2ZUNsYXNzOiBTdHJpbmdcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaW5rKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy50byAmJiB7XG4gICAgICAgICAgdG86IHRoaXMudG8sXG4gICAgICAgICAgZXhhY3Q6IHRoaXMuZXhhY3QsXG4gICAgICAgICAgYXBwZW5kOiB0aGlzLmFwcGVuZCxcbiAgICAgICAgICByZXBsYWNlOiB0aGlzLnJlcGxhY2UsXG4gICAgICAgICAgYWN0aXZlQ2xhc3M6IHRoaXMuYWN0aXZlQ2xhc3MsXG4gICAgICAgICAgZXhhY3RBY3RpdmVDbGFzczogdGhpcy5leGFjdEFjdGl2ZUNsYXNzXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21MaW5rXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImV4cG9ydCBjb25zdCBEaXNwYXRjaEV2ZW50TWl4aW4gPSB7XG4gIHByb3BzOiB7XG4gICAgZXZlbnQ6IFN0cmluZyxcbiAgICAnZXZlbnQtdGFyZ2V0JzogT2JqZWN0LFxuICAgICdldmVudC1hcmdzJzogQXJyYXlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRpc3BhdGNoRXZlbnQoZXZ0KSB7XG4gICAgICBldnQgJiYgdGhpcy4kZW1pdChldnQudHlwZSwgZXZ0KVxuICAgICAgaWYgKHRoaXMuZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZXZlbnRUYXJnZXQgfHwgdGhpcy4kcm9vdFxuICAgICAgICBsZXQgYXJncyA9IHRoaXMuZXZlbnRBcmdzIHx8IFtdXG4gICAgICAgIHRhcmdldC4kZW1pdCh0aGlzLmV2ZW50LCAuLi5hcmdzKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaXN0ZW5lcnMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLiRsaXN0ZW5lcnMsXG4gICAgICAgIGNsaWNrOiBlID0+IHRoaXMuZGlzcGF0Y2hFdmVudChlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgRHJhd2VyXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgRHJhd2VyIGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENEcmF3ZXJBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFkZHMgYSBjbGFzcyB0byB0aGUgcm9vdCBFbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjbGFzcyBmcm9tIHRoZSByb290IEVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSByb290IEVsZW1lbnQgY29udGFpbnMgdGhlIGdpdmVuIGNsYXNzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnQgdGFyZ2V0IGVsZW1lbnQgdG8gdmVyaWZ5IGNsYXNzIG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lXG4gICAqL1xuICBlbGVtZW50SGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBTYXZlcyB0aGUgZm9jdXMgb2YgY3VycmVudGx5IGFjdGl2ZSBlbGVtZW50LlxuICAgKi9cbiAgc2F2ZUZvY3VzKCkge31cblxuICAvKipcbiAgICogUmVzdG9yZXMgZm9jdXMgdG8gZWxlbWVudCBwcmV2aW91c2x5IHNhdmVkIHdpdGggJ3NhdmVGb2N1cycuXG4gICAqL1xuICByZXN0b3JlRm9jdXMoKSB7fVxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIHRoZSBhY3RpdmUgLyBzZWxlY3RlZCBuYXZpZ2F0aW9uIGl0ZW0uXG4gICAqL1xuICBmb2N1c0FjdGl2ZU5hdmlnYXRpb25JdGVtKCkge31cblxuICAvKipcbiAgICogRW1pdHMgYSBjdXN0b20gZXZlbnQgXCJNRENEcmF3ZXI6Y2xvc2VkXCIgZGVub3RpbmcgdGhlIGRyYXdlciBoYXMgY2xvc2VkLlxuICAgKi9cbiAgbm90aWZ5Q2xvc2UoKSB7fVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhIGN1c3RvbSBldmVudCBcIk1EQ0RyYXdlcjpvcGVuZWRcIiBkZW5vdGluZyB0aGUgZHJhd2VyIGhhcyBvcGVuZWQuXG4gICAqL1xuICBub3RpZnlPcGVuKCkge31cblxuICAvKipcbiAgICogVHJhcHMgZm9jdXMgb24gcm9vdCBlbGVtZW50IGFuZCBmb2N1c2VzIHRoZSBhY3RpdmUgbmF2aWdhdGlvbiBlbGVtZW50LlxuICAgKi9cbiAgdHJhcEZvY3VzKCkge31cblxuICAvKipcbiAgICogUmVsZWFzZXMgZm9jdXMgdHJhcCBmcm9tIHJvb3QgZWxlbWVudCB3aGljaCB3YXMgc2V0IGJ5IGB0cmFwRm9jdXNgXG4gICAqIGFuZCByZXN0b3JlcyBmb2N1cyB0byB3aGVyZSBpdCB3YXMgcHJpb3IgdG8gY2FsbGluZyBgdHJhcEZvY3VzYC5cbiAgICovXG4gIHJlbGVhc2VGb2N1cygpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0RyYXdlckFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgQVxuICovXG5jbGFzcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bXtjc3NDbGFzc2VzfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17bnVtYmVyc30gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiB7IU9iamVjdH0gKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgLy8gdmFsaWRhdGlvbi5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciA9IHt9KSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFBfSAqL1xuICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIFJPT1Q6ICdtZGMtZHJhd2VyJyxcbiAgRElTTUlTU0lCTEU6ICdtZGMtZHJhd2VyLS1kaXNtaXNzaWJsZScsXG4gIE1PREFMOiAnbWRjLWRyYXdlci0tbW9kYWwnLFxuICBPUEVOOiAnbWRjLWRyYXdlci0tb3BlbicsXG4gIEFOSU1BVEU6ICdtZGMtZHJhd2VyLS1hbmltYXRlJyxcbiAgT1BFTklORzogJ21kYy1kcmF3ZXItLW9wZW5pbmcnLFxuICBDTE9TSU5HOiAnbWRjLWRyYXdlci0tY2xvc2luZycsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIEFQUF9DT05URU5UX1NFTEVDVE9SOiAnLm1kYy1kcmF3ZXItYXBwLWNvbnRlbnQnLFxuICBTQ1JJTV9TRUxFQ1RPUjogJy5tZGMtZHJhd2VyLXNjcmltJyxcbiAgQ0xPU0VfRVZFTlQ6ICdNRENEcmF3ZXI6Y2xvc2VkJyxcbiAgT1BFTl9FVkVOVDogJ01EQ0RyYXdlcjpvcGVuZWQnLFxufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRHJhd2VyQWRhcHRlciBmcm9tICcuLi9hZGFwdGVyJztcbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENEcmF3ZXJBZGFwdGVyPn1cbiAqL1xuY2xhc3MgTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENEcmF3ZXJBZGFwdGVyfSAqLyAoe1xuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGhhc0NsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgZWxlbWVudEhhc0NsYXNzOiAoLyogZWxlbWVudDogIUVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIG5vdGlmeUNsb3NlOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeU9wZW46ICgpID0+IHt9LFxuICAgICAgc2F2ZUZvY3VzOiAoKSA9PiB7fSxcbiAgICAgIHJlc3RvcmVGb2N1czogKCkgPT4ge30sXG4gICAgICBmb2N1c0FjdGl2ZU5hdmlnYXRpb25JdGVtOiAoKSA9PiB7fSxcbiAgICAgIHRyYXBGb2N1czogKCkgPT4ge30sXG4gICAgICByZWxlYXNlRm9jdXM6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IDA7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbkZyYW1lXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZV8pO1xuICAgIH1cbiAgICBpZiAodGhpcy5hbmltYXRpb25UaW1lcl8pIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIG9wZW4gdGhlIGRyYXdlci5cbiAgICovXG4gIG9wZW4oKSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKCkgfHwgdGhpcy5pc09wZW5pbmcoKSB8fCB0aGlzLmlzQ2xvc2luZygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLk9QRU4pO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5BTklNQVRFKTtcblxuICAgIC8vIFdhaXQgYSBmcmFtZSBvbmNlIGRpc3BsYXkgaXMgbm8gbG9uZ2VyIFwibm9uZVwiLCB0byBlc3RhYmxpc2ggYmFzaXMgZm9yIGFuaW1hdGlvblxuICAgIHRoaXMucnVuTmV4dEFuaW1hdGlvbkZyYW1lXygoKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuT1BFTklORyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnNhdmVGb2N1cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBkcmF3ZXIuXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNPcGVuKCkgfHwgdGhpcy5pc09wZW5pbmcoKSB8fCB0aGlzLmlzQ2xvc2luZygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkNMT1NJTkcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dGVuc2lvbiBwb2ludCBmb3Igd2hlbiBkcmF3ZXIgZmluaXNoZXMgb3BlbiBhbmltYXRpb24uXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIG9wZW5lZCgpIHt9XG5cbiAgLyoqXG4gICAqIEV4dGVuc2lvbiBwb2ludCBmb3Igd2hlbiBkcmF3ZXIgZmluaXNoZXMgY2xvc2UgYW5pbWF0aW9uLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBjbG9zZWQoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgZHJhd2VyIGlzIGluIG9wZW4gc3RhdGUuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgZHJhd2VyIGlzIGFuaW1hdGluZyBvcGVuLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNPcGVuaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuT1BFTklORykgfHwgdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkFOSU1BVEUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBkcmF3ZXIgaXMgYW5pbWF0aW5nIGNsb3NlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQ2xvc2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkNMT1NJTkcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEtleWRvd24gaGFuZGxlciB0byBjbG9zZSBkcmF3ZXIgd2hlbiBrZXkgaXMgZXNjYXBlLlxuICAgKiBAcGFyYW0gZXZ0XG4gICAqL1xuICBoYW5kbGVLZXlkb3duKGV2dCkge1xuICAgIGNvbnN0IHtrZXlDb2RlLCBrZXl9ID0gZXZ0O1xuXG4gICAgY29uc3QgaXNFc2NhcGUgPSBrZXkgPT09ICdFc2NhcGUnIHx8IGtleUNvZGUgPT09IDI3O1xuICAgIGlmIChpc0VzY2FwZSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgdHJhbnNpdGlvbiBlbmQgZXZlbnQgb24gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlVHJhbnNpdGlvbkVuZChldnQpIHtcbiAgICBjb25zdCB7T1BFTklORywgQ0xPU0lORywgT1BFTiwgQU5JTUFURSwgUk9PVH0gPSBjc3NDbGFzc2VzO1xuXG4gICAgLy8gSW4gRWRnZSwgdHJhbnNpdGlvbmVuZCBvbiByaXBwbGUgcHNldWRvLWVsZW1lbnRzIHlpZWxkcyBhIHRhcmdldCB3aXRob3V0IGNsYXNzTGlzdCwgc28gY2hlY2sgZm9yIEVsZW1lbnQgZmlyc3QuXG4gICAgY29uc3QgaXNFbGVtZW50ID0gZXZ0LnRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQ7XG4gICAgaWYgKCFpc0VsZW1lbnQgfHwgIXRoaXMuYWRhcHRlcl8uZWxlbWVudEhhc0NsYXNzKC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovIChldnQudGFyZ2V0KSwgUk9PVCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0Nsb3NpbmcoKSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhPUEVOKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVzdG9yZUZvY3VzKCk7XG4gICAgICB0aGlzLmNsb3NlZCgpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzQWN0aXZlTmF2aWdhdGlvbkl0ZW0oKTtcbiAgICAgIHRoaXMub3BlbmVkKCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeU9wZW4oKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEFOSU1BVEUpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoT1BFTklORyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhDTE9TSU5HKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW5zIHRoZSBnaXZlbiBsb2dpYyBvbiB0aGUgbmV4dCBhbmltYXRpb24gZnJhbWUsIHVzaW5nIHNldFRpbWVvdXQgdG8gZmFjdG9yIGluIEZpcmVmb3ggcmVmbG93IGJlaGF2aW9yLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcnVuTmV4dEFuaW1hdGlvbkZyYW1lXyhjYWxsYmFjaykge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWVfKTtcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IDA7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25UaW1lcl8pO1xuICAgICAgdGhpcy5hbmltYXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0RyYXdlckFkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlcic7XG5pbXBvcnQgTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uIGZyb20gJy4uL2Rpc21pc3NpYmxlL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb259XG4gKi9cbmNsYXNzIE1EQ01vZGFsRHJhd2VyRm91bmRhdGlvbiBleHRlbmRzIE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbiB7XG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBkcmF3ZXIgZmluaXNoZXMgb3BlbiBhbmltYXRpb24uXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgb3BlbmVkKCkge1xuICAgIHRoaXMuYWRhcHRlcl8udHJhcEZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gZHJhd2VyIGZpbmlzaGVzIGNsb3NlIGFuaW1hdGlvbi5cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBjbG9zZWQoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWxlYXNlRm9jdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGNsaWNrIGV2ZW50IG9uIHNjcmltLlxuICAgKi9cbiAgaGFuZGxlU2NyaW1DbGljaygpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDTW9kYWxEcmF3ZXJGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbi8qKlxuICogQHRlbXBsYXRlIEZcbiAqL1xuY2xhc3MgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ0NvbXBvbmVudH1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgLy8gU3ViY2xhc3NlcyB3aGljaCBleHRlbmQgTURDQmFzZSBzaG91bGQgcHJvdmlkZSBhbiBhdHRhY2hUbygpIG1ldGhvZCB0aGF0IHRha2VzIGEgcm9vdCBlbGVtZW50IGFuZFxuICAgIC8vIHJldHVybnMgYW4gaW5zdGFudGlhdGVkIGNvbXBvbmVudCB3aXRoIGl0cyByb290IHNldCB0byB0aGF0IGVsZW1lbnQuIEFsc28gbm90ZSB0aGF0IGluIHRoZSBjYXNlcyBvZlxuICAgIC8vIHN1YmNsYXNzZXMsIGFuIGV4cGxpY2l0IGZvdW5kYXRpb24gY2xhc3Mgd2lsbCBub3QgaGF2ZSB0byBiZSBwYXNzZWQgaW47IGl0IHdpbGwgc2ltcGx5IGJlIGluaXRpYWxpemVkXG4gICAgLy8gZnJvbSBnZXREZWZhdWx0Rm91bmRhdGlvbigpLlxuICAgIHJldHVybiBuZXcgTURDQ29tcG9uZW50KHJvb3QsIG5ldyBNRENGb3VuZGF0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHtGPX0gZm91bmRhdGlvblxuICAgKiBAcGFyYW0gey4uLj99IGFyZ3NcbiAgICovXG4gIGNvbnN0cnVjdG9yKHJvb3QsIGZvdW5kYXRpb24gPSB1bmRlZmluZWQsIC4uLmFyZ3MpIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG4gICAgdGhpcy5yb290XyA9IHJvb3Q7XG4gICAgdGhpcy5pbml0aWFsaXplKC4uLmFyZ3MpO1xuICAgIC8vIE5vdGUgdGhhdCB3ZSBpbml0aWFsaXplIGZvdW5kYXRpb24gaGVyZSBhbmQgbm90IHdpdGhpbiB0aGUgY29uc3RydWN0b3IncyBkZWZhdWx0IHBhcmFtIHNvIHRoYXRcbiAgICAvLyB0aGlzLnJvb3RfIGlzIGRlZmluZWQgYW5kIGNhbiBiZSB1c2VkIHdpdGhpbiB0aGUgZm91bmRhdGlvbiBjbGFzcy5cbiAgICAvKiogQHByb3RlY3RlZCB7IUZ9ICovXG4gICAgdGhpcy5mb3VuZGF0aW9uXyA9IGZvdW5kYXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSA6IGZvdW5kYXRpb247XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5pbml0KCk7XG4gICAgdGhpcy5pbml0aWFsU3luY1dpdGhET00oKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoLyogLi4uYXJncyAqLykge1xuICAgIC8vIFN1YmNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoaXMgdG8gZG8gYW55IGFkZGl0aW9uYWwgc2V0dXAgd29yayB0aGF0IHdvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiBhXG4gICAgLy8gXCJjb25zdHJ1Y3RvclwiLiBFc3NlbnRpYWxseSwgaXQgaXMgYSBob29rIGludG8gdGhlIHBhcmVudCBjb25zdHJ1Y3RvciBiZWZvcmUgdGhlIGZvdW5kYXRpb24gaXNcbiAgICAvLyBpbml0aWFsaXplZC4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIGJlc2lkZXMgcm9vdCBhbmQgZm91bmRhdGlvbiB3aWxsIGJlIHBhc3NlZCBpbiBoZXJlLlxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFGfSBmb3VuZGF0aW9uXG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCBmb3VuZGF0aW9uIGNsYXNzIGZvciB0aGVcbiAgICAvLyBjb21wb25lbnQuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgZ2V0RGVmYXVsdEZvdW5kYXRpb24gdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCAnICtcbiAgICAgICdmb3VuZGF0aW9uIGNsYXNzJyk7XG4gIH1cblxuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgdGhleSBuZWVkIHRvIHBlcmZvcm0gd29yayB0byBzeW5jaHJvbml6ZSB3aXRoIGEgaG9zdCBET01cbiAgICAvLyBvYmplY3QuIEFuIGV4YW1wbGUgb2YgdGhpcyB3b3VsZCBiZSBhIGZvcm0gY29udHJvbCB3cmFwcGVyIHRoYXQgbmVlZHMgdG8gc3luY2hyb25pemUgaXRzIGludGVybmFsIHN0YXRlXG4gICAgLy8gdG8gc29tZSBwcm9wZXJ0eSBvciBhdHRyaWJ1dGUgb2YgdGhlIGhvc3QgRE9NLiBQbGVhc2Ugbm90ZTogdGhpcyBpcyAqbm90KiB0aGUgcGxhY2UgdG8gcGVyZm9ybSBET01cbiAgICAvLyByZWFkcy93cml0ZXMgdGhhdCB3b3VsZCBjYXVzZSBsYXlvdXQgLyBwYWludCwgYXMgdGhpcyBpcyBjYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIHdpdGhpbiB0aGUgY29uc3RydWN0b3IuXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgbWF5IGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZWxlYXNlIGFueSByZXNvdXJjZXMgLyBkZXJlZ2lzdGVyIGFueSBsaXN0ZW5lcnMgdGhleSBoYXZlXG4gICAgLy8gYXR0YWNoZWQuIEFuIGV4YW1wbGUgb2YgdGhpcyBtaWdodCBiZSBkZXJlZ2lzdGVyaW5nIGEgcmVzaXplIGV2ZW50IGZyb20gdGhlIHdpbmRvdyBvYmplY3QuXG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiBsaXN0ZW5pbmcgZm9yIGN1c3RvbSBldmVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBsaXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIG1ldGhvZCB0byByZW1vdmUgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudC4gVGhpcyBpcyBtb3N0IHVzZWZ1bCB3aGVuXG4gICAqIHVubGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgdW5saXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBhIGNyb3NzLWJyb3dzZXItY29tcGF0aWJsZSBjdXN0b20gZXZlbnQgZnJvbSB0aGUgY29tcG9uZW50IHJvb3Qgb2YgdGhlIGdpdmVuIHR5cGUsXG4gICAqIHdpdGggdGhlIGdpdmVuIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IU9iamVjdH0gZXZ0RGF0YVxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBzaG91bGRCdWJibGVcbiAgICovXG4gIGVtaXQoZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgICBsZXQgZXZ0O1xuICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvb3RfLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENDb21wb25lbnQ7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIExpc3QuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmcgZm9jdXMuXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENMaXN0QWRhcHRlciB7XG4gIC8qKiBAcmV0dXJuIHtudW1iZXJ9ICovXG4gIGdldExpc3RJdGVtQ291bnQoKSB7fVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9ICovXG4gIGdldEZvY3VzZWRFbGVtZW50SW5kZXgoKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgYXR0cmlidXRlLCB2YWx1ZSkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVcbiAgICovXG4gIHJlbW92ZUF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgYXR0cmlidXRlKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgYWRkQ2xhc3NGb3JFbGVtZW50SW5kZXgoaW5kZXgsIGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4KGluZGV4LCBjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEZvY3VzZXMgbGlzdCBpdGVtIGF0IHRoZSBpbmRleCBzcGVjaWZpZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKi9cbiAgZm9jdXNJdGVtQXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgdGFiaW5kZXggdG8gdGhlIHZhbHVlIHNwZWNpZmllZCBmb3IgYWxsIGJ1dHRvbi9hIGVsZW1lbnQgY2hpbGRyZW4gb2ZcbiAgICogdGhlIGxpc3QgaXRlbSBhdCB0aGUgaW5kZXggc3BlY2lmaWVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGlzdEl0ZW1JbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gdGFiSW5kZXhWYWx1ZVxuICAgKi9cbiAgc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuKGxpc3RJdGVtSW5kZXgsIHRhYkluZGV4VmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIElmIHRoZSBnaXZlbiBlbGVtZW50IGhhcyBhbiBocmVmLCBmb2xsb3dzIHRoZSBsaW5rLlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBlbGVcbiAgICovXG4gIGZvbGxvd0hyZWYoZWxlKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHJhZGlvIGJ1dHRvbiBpcyBwcmVzZW50IGF0IGdpdmVuIGxpc3QgaXRlbSBpbmRleC5cbiAgICovXG4gIGhhc1JhZGlvQXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBjaGVja2JveCBpcyBwcmVzZW50IGF0IGdpdmVuIGxpc3QgaXRlbSBpbmRleC5cbiAgICovXG4gIGhhc0NoZWNrYm94QXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBjaGVja2JveCBpbnNpZGUgYSBsaXN0IGl0ZW0gaXMgY2hlY2tlZC5cbiAgICovXG4gIGlzQ2hlY2tib3hDaGVja2VkQXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgY2hlY2tlZCBzdGF0dXMgb2YgY2hlY2tib3ggb3IgcmFkaW8gYXQgZ2l2ZW4gbGlzdCBpdGVtIGluZGV4LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0NoZWNrZWRcbiAgICovXG4gIHNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4KGluZGV4LCBpc0NoZWNrZWQpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0xpc3RBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgUk9PVDogJ21kYy1saXN0JyxcbiAgTElTVF9JVEVNX0NMQVNTOiAnbWRjLWxpc3QtaXRlbScsXG4gIExJU1RfSVRFTV9TRUxFQ1RFRF9DTEFTUzogJ21kYy1saXN0LWl0ZW0tLXNlbGVjdGVkJyxcbiAgTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTUzogJ21kYy1saXN0LWl0ZW0tLWFjdGl2YXRlZCcsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIEFSSUFfT1JJRU5UQVRJT046ICdhcmlhLW9yaWVudGF0aW9uJyxcbiAgQVJJQV9PUklFTlRBVElPTl9IT1JJWk9OVEFMOiAnaG9yaXpvbnRhbCcsXG4gIEFSSUFfU0VMRUNURUQ6ICdhcmlhLXNlbGVjdGVkJyxcbiAgQVJJQV9DSEVDS0VEOiAnYXJpYS1jaGVja2VkJyxcbiAgQVJJQV9DSEVDS0VEX1JBRElPX1NFTEVDVE9SOiAnW3JvbGU9XCJyYWRpb1wiXVthcmlhLWNoZWNrZWQ9XCJ0cnVlXCJdJyxcbiAgUkFESU9fU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpkaXNhYmxlZCknLFxuICBDSEVDS0JPWF9TRUxFQ1RPUjogJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmRpc2FibGVkKScsXG4gIENIRUNLQk9YX1JBRElPX1NFTEVDVE9SOiAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6ZGlzYWJsZWQpLCBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpkaXNhYmxlZCknLFxuICBDSElMRF9FTEVNRU5UU19UT19UT0dHTEVfVEFCSU5ERVg6IGAuJHtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU30gYnV0dG9uOm5vdCg6ZGlzYWJsZWQpLFxuICAuJHtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU30gYWAsXG4gIEZPQ1VTQUJMRV9DSElMRF9FTEVNRU5UUzogYC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTfSBidXR0b246bm90KDpkaXNhYmxlZCksIC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTfSBhLFxuICAuJHtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU30gaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6ZGlzYWJsZWQpLFxuICAuJHtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU30gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6ZGlzYWJsZWQpYCxcbiAgRU5BQkxFRF9JVEVNU19TRUxFQ1RPUjogJy5tZGMtbGlzdC1pdGVtOm5vdCgubWRjLWxpc3QtaXRlbS0tZGlzYWJsZWQpJyxcbn07XG5cbmV4cG9ydCB7c3RyaW5ncywgY3NzQ2xhc3Nlc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDTGlzdEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7c3RyaW5ncywgY3NzQ2xhc3Nlc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBFTEVNRU5UU19LRVlfQUxMT1dFRF9JTiA9IFsnaW5wdXQnLCAnYnV0dG9uJywgJ3RleHRhcmVhJywgJ3NlbGVjdCddO1xuXG5jbGFzcyBNRENMaXN0Rm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAc2VlIE1EQ0xpc3RBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ0xpc3RBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDTGlzdEFkYXB0ZXJ9ICovICh7XG4gICAgICBnZXRMaXN0SXRlbUNvdW50OiAoKSA9PiB7fSxcbiAgICAgIGdldEZvY3VzZWRFbGVtZW50SW5kZXg6ICgpID0+IHt9LFxuICAgICAgc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleDogKCkgPT4ge30sXG4gICAgICBhZGRDbGFzc0ZvckVsZW1lbnRJbmRleDogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleDogKCkgPT4ge30sXG4gICAgICBmb2N1c0l0ZW1BdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIHNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbjogKCkgPT4ge30sXG4gICAgICBmb2xsb3dIcmVmOiAoKSA9PiB7fSxcbiAgICAgIGhhc1JhZGlvQXRJbmRleDogKCkgPT4ge30sXG4gICAgICBoYXNDaGVja2JveEF0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgaXNDaGVja2JveENoZWNrZWRBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIHNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4OiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENMaXN0QWRhcHRlcj19IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ0xpc3RGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG4gICAgLyoqIHtib29sZWFufSAqL1xuICAgIHRoaXMud3JhcEZvY3VzXyA9IGZhbHNlO1xuICAgIC8qKiB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzVmVydGljYWxfID0gdHJ1ZTtcbiAgICAvKioge2Jvb2xlYW59ICovXG4gICAgdGhpcy5pc1NpbmdsZVNlbGVjdGlvbkxpc3RfID0gZmFsc2U7XG4gICAgLyoqIHtudW1iZXJ9ICovXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IC0xO1xuICAgIC8qKiB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLnVzZUFjdGl2YXRlZENsYXNzXyA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHByaXZhdGUgd3JhcEZvY3VzXyB2YXJpYWJsZS5cbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgc2V0V3JhcEZvY3VzKHZhbHVlKSB7XG4gICAgdGhpcy53cmFwRm9jdXNfID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaXNWZXJ0aWNhbF8gcHJpdmF0ZSB2YXJpYWJsZS5cbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgc2V0VmVydGljYWxPcmllbnRhdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuaXNWZXJ0aWNhbF8gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpc1NpbmdsZVNlbGVjdGlvbkxpc3RfIHByaXZhdGUgdmFyaWFibGUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICovXG4gIHNldFNpbmdsZVNlbGVjdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuaXNTaW5nbGVTZWxlY3Rpb25MaXN0XyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHVzZUFjdGl2YXRlZENsYXNzXyBwcml2YXRlIHZhcmlhYmxlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZUFjdGl2YXRlZFxuICAgKi9cbiAgc2V0VXNlQWN0aXZhdGVkQ2xhc3ModXNlQWN0aXZhdGVkKSB7XG4gICAgdGhpcy51c2VBY3RpdmF0ZWRDbGFzc18gPSB1c2VBY3RpdmF0ZWQ7XG4gIH1cblxuICAvKiogQHBhcmFtIHtudW1iZXJ9IGluZGV4ICovXG4gIHNldFNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNDaGVja2JveEF0SW5kZXgoaW5kZXgpKSB7XG4gICAgICB0aGlzLnNldEFyaWFBdHRyaWJ1dGVzRm9yQ2hlY2tib3hfKGluZGV4KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWRhcHRlcl8uaGFzUmFkaW9BdEluZGV4KGluZGV4KSkge1xuICAgICAgdGhpcy5zZXRBcmlhQXR0cmlidXRlc0ZvclJhZGlvXyhpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0QXJpYUF0dHJpYnV0ZXNGb3JTaW5nbGVTZWxlY3RfKGluZGV4KTtcbiAgICAgIHRoaXMuc2V0Q2xhc3NOYW1lc0ZvclNpbmdsZVNlbGVjdF8oaW5kZXgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhfID49IDAgJiYgdGhpcy5zZWxlY3RlZEluZGV4XyAhPT0gaW5kZXgpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleF8sICd0YWJpbmRleCcsIC0xKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gPT09IC0xICYmIGluZGV4ICE9PSAwKSB7XG4gICAgICAvLyBJZiBubyBsaXN0IGl0ZW0gd2FzIHNlbGVjdGVkIHNldCBmaXJzdCBsaXN0IGl0ZW0ncyB0YWJpbmRleCB0byAtMS5cbiAgICAgIC8vIEdlbmVyYWxseSwgdGFiaW5kZXggaXMgc2V0IHRvIDAgb24gZmlyc3QgbGlzdCBpdGVtIG9mIGxpc3QgdGhhdCBoYXMgbm8gcHJlc2VsZWN0ZWQgaXRlbXMuXG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCgwLCAndGFiaW5kZXgnLCAtMSk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsICd0YWJpbmRleCcsIDApO1xuXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0QXJpYUF0dHJpYnV0ZXNGb3JDaGVja2JveF8oaW5kZXgpIHtcbiAgICBjb25zdCBhcmlhQXR0cmlidXRlVmFsdWUgPSB0aGlzLmFkYXB0ZXJfLmlzQ2hlY2tib3hDaGVja2VkQXRJbmRleChpbmRleCkgPyAndHJ1ZScgOiAnZmFsc2UnO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgYXJpYUF0dHJpYnV0ZVZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldEFyaWFBdHRyaWJ1dGVzRm9yUmFkaW9fKGluZGV4KSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gPj0gMCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4Xywgc3RyaW5ncy5BUklBX0NIRUNLRUQsICdmYWxzZScpO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgJ3RydWUnKTtcbiAgfVxuXG4gIC8qKlxuICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAqIEBwcml2YXRlXG4gICovXG4gIHNldEFyaWFBdHRyaWJ1dGVzRm9yU2luZ2xlU2VsZWN0XyhpbmRleCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhfID49IDAgJiYgdGhpcy5zZWxlY3RlZEluZGV4XyAhPT0gaW5kZXgpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleF8sIHN0cmluZ3MuQVJJQV9TRUxFQ1RFRCwgJ2ZhbHNlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9TRUxFQ1RFRCwgJ3RydWUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldENsYXNzTmFtZXNGb3JTaW5nbGVTZWxlY3RfKGluZGV4KSB7XG4gICAgbGV0IHNlbGVjdGVkQ2xhc3NOYW1lID0gY3NzQ2xhc3Nlcy5MSVNUX0lURU1fU0VMRUNURURfQ0xBU1M7XG5cbiAgICBpZiAodGhpcy51c2VBY3RpdmF0ZWRDbGFzc18pIHtcbiAgICAgIHNlbGVjdGVkQ2xhc3NOYW1lID0gY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhfID49IDApIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3NGb3JFbGVtZW50SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4Xywgc2VsZWN0ZWRDbGFzc05hbWUpO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3NGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHNlbGVjdGVkQ2xhc3NOYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1cyBpbiBoYW5kbGVyIGZvciB0aGUgbGlzdCBpdGVtcy5cbiAgICogQHBhcmFtIGV2dFxuICAgKiBAcGFyYW0ge251bWJlcn0gbGlzdEl0ZW1JbmRleFxuICAgKi9cbiAgaGFuZGxlRm9jdXNJbihldnQsIGxpc3RJdGVtSW5kZXgpIHtcbiAgICBpZiAobGlzdEl0ZW1JbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbihsaXN0SXRlbUluZGV4LCAwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9jdXMgb3V0IGhhbmRsZXIgZm9yIHRoZSBsaXN0IGl0ZW1zLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxpc3RJdGVtSW5kZXhcbiAgICovXG4gIGhhbmRsZUZvY3VzT3V0KGV2dCwgbGlzdEl0ZW1JbmRleCkge1xuICAgIGlmIChsaXN0SXRlbUluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuKGxpc3RJdGVtSW5kZXgsIC0xKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogS2V5IGhhbmRsZXIgZm9yIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHBhcmFtIHtib29sZWFufSBpc1Jvb3RMaXN0SXRlbVxuICAgKiBAcGFyYW0ge251bWJlcn0gbGlzdEl0ZW1JbmRleFxuICAgKi9cbiAgaGFuZGxlS2V5ZG93bihldnQsIGlzUm9vdExpc3RJdGVtLCBsaXN0SXRlbUluZGV4KSB7XG4gICAgY29uc3QgYXJyb3dMZWZ0ID0gZXZ0LmtleSA9PT0gJ0Fycm93TGVmdCcgfHwgZXZ0LmtleUNvZGUgPT09IDM3O1xuICAgIGNvbnN0IGFycm93VXAgPSBldnQua2V5ID09PSAnQXJyb3dVcCcgfHwgZXZ0LmtleUNvZGUgPT09IDM4O1xuICAgIGNvbnN0IGFycm93UmlnaHQgPSBldnQua2V5ID09PSAnQXJyb3dSaWdodCcgfHwgZXZ0LmtleUNvZGUgPT09IDM5O1xuICAgIGNvbnN0IGFycm93RG93biA9IGV2dC5rZXkgPT09ICdBcnJvd0Rvd24nIHx8IGV2dC5rZXlDb2RlID09PSA0MDtcbiAgICBjb25zdCBpc0hvbWUgPSBldnQua2V5ID09PSAnSG9tZScgfHwgZXZ0LmtleUNvZGUgPT09IDM2O1xuICAgIGNvbnN0IGlzRW5kID0gZXZ0LmtleSA9PT0gJ0VuZCcgfHwgZXZ0LmtleUNvZGUgPT09IDM1O1xuICAgIGNvbnN0IGlzRW50ZXIgPSBldnQua2V5ID09PSAnRW50ZXInIHx8IGV2dC5rZXlDb2RlID09PSAxMztcbiAgICBjb25zdCBpc1NwYWNlID0gZXZ0LmtleSA9PT0gJ1NwYWNlJyB8fCBldnQua2V5Q29kZSA9PT0gMzI7XG5cbiAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRGb2N1c2VkRWxlbWVudEluZGV4KCk7XG4gICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcbiAgICAgIGN1cnJlbnRJbmRleCA9IGxpc3RJdGVtSW5kZXg7XG4gICAgICBpZiAoY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgICAvLyBJZiB0aGlzIGV2ZW50IGRvZXNuJ3QgaGF2ZSBhIG1kYy1saXN0LWl0ZW0gYW5jZXN0b3IgZnJvbSB0aGVcbiAgICAgICAgLy8gY3VycmVudCBsaXN0IChub3QgZnJvbSBhIHN1Ymxpc3QpLCByZXR1cm4gZWFybHkuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoKHRoaXMuaXNWZXJ0aWNhbF8gJiYgYXJyb3dEb3duKSB8fCAoIXRoaXMuaXNWZXJ0aWNhbF8gJiYgYXJyb3dSaWdodCkpIHtcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgIHRoaXMuZm9jdXNOZXh0RWxlbWVudChjdXJyZW50SW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoKHRoaXMuaXNWZXJ0aWNhbF8gJiYgYXJyb3dVcCkgfHwgKCF0aGlzLmlzVmVydGljYWxfICYmIGFycm93TGVmdCkpIHtcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgIHRoaXMuZm9jdXNQcmV2RWxlbWVudChjdXJyZW50SW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoaXNIb21lKSB7XG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICB0aGlzLmZvY3VzRmlyc3RFbGVtZW50KCk7XG4gICAgfSBlbHNlIGlmIChpc0VuZCkge1xuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgdGhpcy5mb2N1c0xhc3RFbGVtZW50KCk7XG4gICAgfSBlbHNlIGlmIChpc0VudGVyIHx8IGlzU3BhY2UpIHtcbiAgICAgIGlmIChpc1Jvb3RMaXN0SXRlbSkge1xuICAgICAgICBpZiAodGhpcy5pc1NpbmdsZVNlbGVjdGlvbkxpc3RfKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHNwYWNlIGtleSB3YXMgcHJlc3NlZCBvbiB0aGUgbGlzdCBpdGVtIG9yIGEgY2hpbGQgZWxlbWVudC5cbiAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYXNDaGVja2JveE9yUmFkaW8gPSB0aGlzLmhhc0NoZWNrYm94T3JSYWRpb0F0SW5kZXhfKGxpc3RJdGVtSW5kZXgpO1xuICAgICAgICBpZiAoaGFzQ2hlY2tib3hPclJhZGlvKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVDaGVja2JveE9yUmFkaW9BdEluZGV4XyhsaXN0SXRlbUluZGV4KTtcbiAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1NpbmdsZVNlbGVjdGlvbkxpc3RfIHx8IGhhc0NoZWNrYm94T3JSYWRpbykge1xuICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleChjdXJyZW50SW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXhwbGljaXRseSBhY3RpdmF0ZSBsaW5rcywgc2luY2Ugd2UncmUgcHJldmVudGluZyBkZWZhdWx0IG9uIEVudGVyLCBhbmQgU3BhY2UgZG9lc24ndCBhY3RpdmF0ZSB0aGVtLlxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvbGxvd0hyZWYoY3VycmVudEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xpY2sgaGFuZGxlciBmb3IgdGhlIGxpc3QuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHRvZ2dsZUNoZWNrYm94XG4gICAqL1xuICBoYW5kbGVDbGljayhpbmRleCwgdG9nZ2xlQ2hlY2tib3gpIHtcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm47XG5cbiAgICBpZiAodG9nZ2xlQ2hlY2tib3gpIHtcbiAgICAgIHRoaXMudG9nZ2xlQ2hlY2tib3hPclJhZGlvQXRJbmRleF8oaW5kZXgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gfHwgdGhpcy5oYXNDaGVja2JveE9yUmFkaW9BdEluZGV4XyhpbmRleCkpIHtcbiAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgdGhhdCBwcmV2ZW50RGVmYXVsdCBpcyBvbmx5IGNhbGxlZCBpZiB0aGUgY29udGFpbmluZyBlbGVtZW50IGRvZXNuJ3RcbiAgICogY29uc3VtZSB0aGUgZXZlbnQsIGFuZCBpdCB3aWxsIGNhdXNlIGFuIHVuaW50ZW5kZWQgc2Nyb2xsLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBgJHtldnQudGFyZ2V0LnRhZ05hbWV9YC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChFTEVNRU5UU19LRVlfQUxMT1dFRF9JTi5pbmRleE9mKHRhZ05hbWUpID09PSAtMSkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzZXMgdGhlIG5leHQgZWxlbWVudCBvbiB0aGUgbGlzdC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqL1xuICBmb2N1c05leHRFbGVtZW50KGluZGV4KSB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKTtcbiAgICBsZXQgbmV4dEluZGV4ID0gaW5kZXggKyAxO1xuICAgIGlmIChuZXh0SW5kZXggPj0gY291bnQpIHtcbiAgICAgIGlmICh0aGlzLndyYXBGb2N1c18pIHtcbiAgICAgICAgbmV4dEluZGV4ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBlYXJseSBiZWNhdXNlIGxhc3QgaXRlbSBpcyBhbHJlYWR5IGZvY3VzZWQuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KG5leHRJbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgcHJldmlvdXMgZWxlbWVudCBvbiB0aGUgbGlzdC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqL1xuICBmb2N1c1ByZXZFbGVtZW50KGluZGV4KSB7XG4gICAgbGV0IHByZXZJbmRleCA9IGluZGV4IC0gMTtcbiAgICBpZiAocHJldkluZGV4IDwgMCkge1xuICAgICAgaWYgKHRoaXMud3JhcEZvY3VzXykge1xuICAgICAgICBwcmV2SW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKSAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gZWFybHkgYmVjYXVzZSBmaXJzdCBpdGVtIGlzIGFscmVhZHkgZm9jdXNlZC5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgocHJldkluZGV4KTtcbiAgfVxuXG4gIGZvY3VzRmlyc3RFbGVtZW50KCkge1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKSA+IDApIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleCgwKTtcbiAgICB9XG4gIH1cblxuICBmb2N1c0xhc3RFbGVtZW50KCkge1xuICAgIGNvbnN0IGxhc3RJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpIC0gMTtcbiAgICBpZiAobGFzdEluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleChsYXN0SW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGNoZWNrYm94IG9yIHJhZGlvIGF0IGdpdmUgaW5kZXguIFJhZGlvIGRvZXNuJ3QgY2hhbmdlIHRoZSBjaGVja2VkIHN0YXRlIGlmIGl0IGlzIGFscmVhZHkgY2hlY2tlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0b2dnbGVDaGVja2JveE9yUmFkaW9BdEluZGV4XyhpbmRleCkge1xuICAgIGlmICghdGhpcy5oYXNDaGVja2JveE9yUmFkaW9BdEluZGV4XyhpbmRleCkpIHJldHVybjtcblxuICAgIGxldCBpc0NoZWNrZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0NoZWNrYm94QXRJbmRleChpbmRleCkpIHtcbiAgICAgIGlzQ2hlY2tlZCA9ICF0aGlzLmFkYXB0ZXJfLmlzQ2hlY2tib3hDaGVja2VkQXRJbmRleChpbmRleCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5zZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleChpbmRleCwgaXNDaGVja2VkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJuIHRydWUgaWYgbGlzdCBpdGVtIGNvbnRhaW5zIGNoZWNrYm94IG9yIHJhZGlvIGlucHV0IGF0IGdpdmVuIGluZGV4LlxuICAgKi9cbiAgaGFzQ2hlY2tib3hPclJhZGlvQXRJbmRleF8oaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5oYXNDaGVja2JveEF0SW5kZXgoaW5kZXgpIHx8IHRoaXMuYWRhcHRlcl8uaGFzUmFkaW9BdEluZGV4KGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENMaXN0Rm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBcInBvbnlmaWxsXCIgaXMgYSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgbW9kaWZ5IHRoZSBnbG9iYWwgcHJvdG90eXBlIGNoYWluLlxuICogVGhpcyBtYWtlcyBwb255ZmlsbHMgc2FmZXIgdGhhbiB0cmFkaXRpb25hbCBwb2x5ZmlsbHMsIGVzcGVjaWFsbHkgZm9yIGxpYnJhcmllcyBsaWtlIE1EQy5cbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7P0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgaWYgKGVsZW1lbnQuY2xvc2VzdCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICB9XG5cbiAgbGV0IGVsID0gZWxlbWVudDtcbiAgd2hpbGUgKGVsKSB7XG4gICAgaWYgKG1hdGNoZXMoZWwsIHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IG5hdGl2ZU1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXNcbiAgICB8fCBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvclxuICAgIHx8IGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3I7XG4gIHJldHVybiBuYXRpdmVNYXRjaGVzLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xufVxuXG5leHBvcnQge2Nsb3Nlc3QsIG1hdGNoZXN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCBNRENMaXN0Rm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ0xpc3RBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge21hdGNoZXN9IGZyb20gJ0BtYXRlcmlhbC9kb20vcG9ueWZpbGwnO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGV4dGVuZHMgTURDQ29tcG9uZW50PCFNRENMaXN0Rm91bmRhdGlvbj5cbiAqL1xuY2xhc3MgTURDTGlzdCBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKiBAcGFyYW0gey4uLj99IGFyZ3MgKi9cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuaGFuZGxlS2V5ZG93bl87XG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5oYW5kbGVDbGlja187XG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5mb2N1c0luRXZlbnRMaXN0ZW5lcl87XG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5mb2N1c091dEV2ZW50TGlzdGVuZXJfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ0xpc3R9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIHJldHVybiBuZXcgTURDTGlzdChyb290KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duXyk7XG4gICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2tfKTtcbiAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmZvY3VzSW5FdmVudExpc3RlbmVyXyk7XG4gICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMuZm9jdXNPdXRFdmVudExpc3RlbmVyXyk7XG4gIH1cblxuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgdGhpcy5oYW5kbGVDbGlja18gPSB0aGlzLmhhbmRsZUNsaWNrRXZlbnRfLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVLZXlkb3duXyA9IHRoaXMuaGFuZGxlS2V5ZG93bkV2ZW50Xy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm9jdXNJbkV2ZW50TGlzdGVuZXJfID0gdGhpcy5oYW5kbGVGb2N1c0luRXZlbnRfLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mb2N1c091dEV2ZW50TGlzdGVuZXJfID0gdGhpcy5oYW5kbGVGb2N1c091dEV2ZW50Xy5iaW5kKHRoaXMpO1xuICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bl8pO1xuICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuZm9jdXNJbkV2ZW50TGlzdGVuZXJfKTtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdGhpcy5mb2N1c091dEV2ZW50TGlzdGVuZXJfKTtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja18pO1xuICAgIHRoaXMubGF5b3V0KCk7XG4gICAgdGhpcy5pbml0aWFsaXplTGlzdFR5cGUoKTtcbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLnJvb3RfLmdldEF0dHJpYnV0ZShzdHJpbmdzLkFSSUFfT1JJRU5UQVRJT04pO1xuICAgIHRoaXMudmVydGljYWwgPSBkaXJlY3Rpb24gIT09IHN0cmluZ3MuQVJJQV9PUklFTlRBVElPTl9IT1JJWk9OVEFMO1xuXG4gICAgLy8gTGlzdCBpdGVtcyBuZWVkIHRvIGhhdmUgYXQgbGVhc3QgdGFiaW5kZXg9LTEgdG8gYmUgZm9jdXNhYmxlLlxuICAgIFtdLnNsaWNlLmNhbGwodGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKCcubWRjLWxpc3QtaXRlbTpub3QoW3RhYmluZGV4XSknKSlcbiAgICAgIC5mb3JFYWNoKChlbGUpID0+IHtcbiAgICAgICAgZWxlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSk7XG4gICAgICB9KTtcblxuICAgIC8vIENoaWxkIGJ1dHRvbi9hIGVsZW1lbnRzIGFyZSBub3QgdGFiYmFibGUgdW50aWwgdGhlIGxpc3QgaXRlbSBpcyBmb2N1c2VkLlxuICAgIFtdLnNsaWNlLmNhbGwodGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuRk9DVVNBQkxFX0NISUxEX0VMRU1FTlRTKSlcbiAgICAgIC5mb3JFYWNoKChlbGUpID0+IGVsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggbGlzdCBpdGVtIHRoaXMgZXZlbnQgaXMgdGFyZ2V0dGluZy4gT3IgcmV0dXJucyAtMSBpZlxuICAgKiB0aGVyZSBpcyBubyBsaXN0IGl0ZW1cbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRMaXN0SXRlbUluZGV4XyhldnQpIHtcbiAgICBsZXQgZXZlbnRUYXJnZXQgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyAoZXZ0LnRhcmdldCk7XG4gICAgbGV0IGluZGV4ID0gLTE7XG5cbiAgICAvLyBGaW5kIHRoZSBmaXJzdCBhbmNlc3RvciB0aGF0IGlzIGEgbGlzdCBpdGVtIG9yIHRoZSBsaXN0LlxuICAgIHdoaWxlICghZXZlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTKVxuICAgICYmICFldmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5ST09UKSkge1xuICAgICAgZXZlbnRUYXJnZXQgPSBldmVudFRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgaW5kZXggb2YgdGhlIGVsZW1lbnQgaWYgaXQgaXMgYSBsaXN0IGl0ZW0uXG4gICAgaWYgKGV2ZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUykpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5saXN0RWxlbWVudHMuaW5kZXhPZihldmVudFRhcmdldCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZmlndXJlIG91dCB3aGljaCBlbGVtZW50IHdhcyBjbGlja2VkIGJlZm9yZSBzZW5kaW5nIHRoZSBldmVudCB0byB0aGUgZm91bmRhdGlvbi5cbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoYW5kbGVGb2N1c0luRXZlbnRfKGV2dCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRMaXN0SXRlbUluZGV4XyhldnQpO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaGFuZGxlRm9jdXNJbihldnQsIGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggZWxlbWVudCB3YXMgY2xpY2tlZCBiZWZvcmUgc2VuZGluZyB0aGUgZXZlbnQgdG8gdGhlIGZvdW5kYXRpb24uXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlRm9jdXNPdXRFdmVudF8oZXZ0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldExpc3RJdGVtSW5kZXhfKGV2dCk7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVGb2N1c091dChldnQsIGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggZWxlbWVudCB3YXMgZm9jdXNlZCB3aGVuIGtleWRvd24gZXZlbnQgb2NjdXJyZWQgYmVmb3JlIHNlbmRpbmcgdGhlIGV2ZW50IHRvIHRoZVxuICAgKiBmb3VuZGF0aW9uLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhbmRsZUtleWRvd25FdmVudF8oZXZ0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldExpc3RJdGVtSW5kZXhfKGV2dCk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVLZXlkb3duKGV2dCwgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MpLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZmlndXJlIG91dCB3aGljaCBlbGVtZW50IHdhcyBjbGlja2VkIGJlZm9yZSBzZW5kaW5nIHRoZSBldmVudCB0byB0aGUgZm91bmRhdGlvbi5cbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoYW5kbGVDbGlja0V2ZW50XyhldnQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0TGlzdEl0ZW1JbmRleF8oZXZ0KTtcblxuICAgIC8vIFRvZ2dsZSB0aGUgY2hlY2tib3ggb25seSBpZiBpdCdzIG5vdCB0aGUgdGFyZ2V0IG9mIHRoZSBldmVudCwgb3IgdGhlIGNoZWNrYm94IHdpbGwgaGF2ZSAyIGNoYW5nZSBldmVudHMuXG4gICAgY29uc3QgdG9nZ2xlQ2hlY2tib3ggPSAhbWF0Y2hlcygvKiogQHR5cGUgeyFFbGVtZW50fSAqLyAoZXZ0LnRhcmdldCksIHN0cmluZ3MuQ0hFQ0tCT1hfUkFESU9fU0VMRUNUT1IpO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaGFuZGxlQ2xpY2soaW5kZXgsIHRvZ2dsZUNoZWNrYm94KTtcbiAgfVxuXG4gIGluaXRpYWxpemVMaXN0VHlwZSgpIHtcbiAgICAvLyBQcmUtc2VsZWN0ZWQgbGlzdCBpdGVtIGluIHNpbmdsZSBzZWxlY3RlZCBsaXN0IG9yIGNoZWNrZWQgbGlzdCBpdGVtIGlmIGxpc3Qgd2l0aCByYWRpbyBpbnB1dC5cbiAgICBjb25zdCBwcmVzZWxlY3RlZEVsZW1lbnQgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoYC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTU30sXG4gICAgICAgIC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX1NFTEVDVEVEX0NMQVNTfSxcbiAgICAgICAgJHtzdHJpbmdzLkFSSUFfQ0hFQ0tFRF9SQURJT19TRUxFQ1RPUn1gKTtcblxuICAgIGlmIChwcmVzZWxlY3RlZEVsZW1lbnQpIHtcbiAgICAgIGlmIChwcmVzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTUykpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVc2VBY3RpdmF0ZWRDbGFzcyh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zaW5nbGVTZWxlY3Rpb24gPSB0cnVlO1xuXG4gICAgICAvLyBBdXRvbWF0aWNhbGx5IHNldCBzZWxlY3RlZCBpbmRleCBpZiBzaW5nbGUgc2VsZWN0IGxpc3QgdHlwZSBvciBsaXN0IHdpdGggcmFkaW8gaW5wdXRzLlxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5saXN0RWxlbWVudHMuaW5kZXhPZihwcmVzZWxlY3RlZEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlICovXG4gIHNldCB2ZXJ0aWNhbCh2YWx1ZSkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VmVydGljYWxPcmllbnRhdGlvbih2YWx1ZSk7XG4gIH1cblxuICAvKiogQHJldHVybiBBcnJheTwhRWxlbWVudD4qL1xuICBnZXQgbGlzdEVsZW1lbnRzKCkge1xuICAgIHJldHVybiBbXS5zbGljZS5jYWxsKHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkVOQUJMRURfSVRFTVNfU0VMRUNUT1IpKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlICovXG4gIHNldCB3cmFwRm9jdXModmFsdWUpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldFdyYXBGb2N1cyh2YWx1ZSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSBpc1NpbmdsZVNlbGVjdGlvbkxpc3QgKi9cbiAgc2V0IHNpbmdsZVNlbGVjdGlvbihpc1NpbmdsZVNlbGVjdGlvbkxpc3QpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldFNpbmdsZVNlbGVjdGlvbihpc1NpbmdsZVNlbGVjdGlvbkxpc3QpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAqL1xuICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gIH1cblxuICAvKiogQHJldHVybiB7IU1EQ0xpc3RGb3VuZGF0aW9ufSAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE1EQ0xpc3RGb3VuZGF0aW9uKC8qKiBAdHlwZSB7IU1EQ0xpc3RBZGFwdGVyfSAqLyAoT2JqZWN0LmFzc2lnbih7XG4gICAgICBnZXRMaXN0SXRlbUNvdW50OiAoKSA9PiB0aGlzLmxpc3RFbGVtZW50cy5sZW5ndGgsXG4gICAgICBnZXRGb2N1c2VkRWxlbWVudEluZGV4OiAoKSA9PiB0aGlzLmxpc3RFbGVtZW50cy5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLFxuICAgICAgc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4OiAoaW5kZXgsIGF0dHIsIHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVtb3ZlQXR0cmlidXRlRm9yRWxlbWVudEluZGV4OiAoaW5kZXgsIGF0dHIpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFkZENsYXNzRm9yRWxlbWVudEluZGV4OiAoaW5kZXgsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVtb3ZlQ2xhc3NGb3JFbGVtZW50SW5kZXg6IChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmb2N1c0l0ZW1BdEluZGV4OiAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW46IChsaXN0SXRlbUluZGV4LCB0YWJJbmRleFZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmxpc3RFbGVtZW50c1tsaXN0SXRlbUluZGV4XTtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW1DaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuQ0hJTERfRUxFTUVOVFNfVE9fVE9HR0xFX1RBQklOREVYKSk7XG4gICAgICAgIGxpc3RJdGVtQ2hpbGRyZW4uZm9yRWFjaCgoZWxlKSA9PiBlbGUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRhYkluZGV4VmFsdWUpKTtcbiAgICAgIH0sXG4gICAgICBmb2xsb3dIcmVmOiAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSB0aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChsaXN0SXRlbSAmJiBsaXN0SXRlbS5ocmVmKSB7XG4gICAgICAgICAgbGlzdEl0ZW0uY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGhhc0NoZWNrYm94QXRJbmRleDogKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICByZXR1cm4gISFsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuQ0hFQ0tCT1hfU0VMRUNUT1IpO1xuICAgICAgfSxcbiAgICAgIGhhc1JhZGlvQXRJbmRleDogKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICByZXR1cm4gISFsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuUkFESU9fU0VMRUNUT1IpO1xuICAgICAgfSxcbiAgICAgIGlzQ2hlY2tib3hDaGVja2VkQXRJbmRleDogKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICBjb25zdCB0b2dnbGVFbCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5DSEVDS0JPWF9TRUxFQ1RPUik7XG4gICAgICAgIHJldHVybiB0b2dnbGVFbC5jaGVja2VkO1xuICAgICAgfSxcbiAgICAgIHNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4OiAoaW5kZXgsIGlzQ2hlY2tlZCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgY29uc3QgdG9nZ2xlRWwgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuQ0hFQ0tCT1hfUkFESU9fU0VMRUNUT1IpO1xuICAgICAgICB0b2dnbGVFbC5jaGVja2VkID0gaXNDaGVja2VkO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICAgIGV2ZW50LmluaXRFdmVudCgnY2hhbmdlJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHRvZ2dsZUVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgfSxcbiAgICB9KSkpO1xuICB9XG59XG5cbmV4cG9ydCB7TURDTGlzdCwgTURDTGlzdEZvdW5kYXRpb259O1xuIiwidmFyIGNhbmRpZGF0ZVNlbGVjdG9ycyA9IFtcbiAgJ2lucHV0JyxcbiAgJ3NlbGVjdCcsXG4gICd0ZXh0YXJlYScsXG4gICdhW2hyZWZdJyxcbiAgJ2J1dHRvbicsXG4gICdbdGFiaW5kZXhdJyxcbiAgJ2F1ZGlvW2NvbnRyb2xzXScsXG4gICd2aWRlb1tjb250cm9sc10nLFxuICAnW2NvbnRlbnRlZGl0YWJsZV06bm90KFtjb250ZW50ZWRpdGFibGU9XCJmYWxzZVwiXSknLFxuXTtcbnZhciBjYW5kaWRhdGVTZWxlY3RvciA9IGNhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJyk7XG5cbnZhciBtYXRjaGVzID0gdHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnXG4gID8gZnVuY3Rpb24gKCkge31cbiAgOiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcblxuZnVuY3Rpb24gdGFiYmFibGUoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIGVsZW1lbnREb2N1bWVudCA9IGVsLm93bmVyRG9jdW1lbnQgfHwgZWw7XG4gIHZhciByZWd1bGFyVGFiYmFibGVzID0gW107XG4gIHZhciBvcmRlcmVkVGFiYmFibGVzID0gW107XG5cbiAgdmFyIHVudG91Y2hhYmlsaXR5Q2hlY2tlciA9IG5ldyBVbnRvdWNoYWJpbGl0eUNoZWNrZXIoZWxlbWVudERvY3VtZW50KTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKGNhbmRpZGF0ZVNlbGVjdG9yKTtcblxuICBpZiAob3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyKSB7XG4gICAgaWYgKG1hdGNoZXMuY2FsbChlbCwgY2FuZGlkYXRlU2VsZWN0b3IpKSB7XG4gICAgICBjYW5kaWRhdGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGNhbmRpZGF0ZXMpO1xuICAgICAgY2FuZGlkYXRlcy51bnNoaWZ0KGVsKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaSwgY2FuZGlkYXRlLCBjYW5kaWRhdGVUYWJpbmRleDtcbiAgZm9yIChpID0gMDsgaSA8IGNhbmRpZGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjYW5kaWRhdGUgPSBjYW5kaWRhdGVzW2ldO1xuXG4gICAgaWYgKCFpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUoY2FuZGlkYXRlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpKSBjb250aW51ZTtcblxuICAgIGNhbmRpZGF0ZVRhYmluZGV4ID0gZ2V0VGFiaW5kZXgoY2FuZGlkYXRlKTtcbiAgICBpZiAoY2FuZGlkYXRlVGFiaW5kZXggPT09IDApIHtcbiAgICAgIHJlZ3VsYXJUYWJiYWJsZXMucHVzaChjYW5kaWRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcmRlcmVkVGFiYmFibGVzLnB1c2goe1xuICAgICAgICBkb2N1bWVudE9yZGVyOiBpLFxuICAgICAgICB0YWJJbmRleDogY2FuZGlkYXRlVGFiaW5kZXgsXG4gICAgICAgIG5vZGU6IGNhbmRpZGF0ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0YWJiYWJsZU5vZGVzID0gb3JkZXJlZFRhYmJhYmxlc1xuICAgIC5zb3J0KHNvcnRPcmRlcmVkVGFiYmFibGVzKVxuICAgIC5tYXAoZnVuY3Rpb24oYSkgeyByZXR1cm4gYS5ub2RlIH0pXG4gICAgLmNvbmNhdChyZWd1bGFyVGFiYmFibGVzKTtcblxuICByZXR1cm4gdGFiYmFibGVOb2Rlcztcbn1cblxudGFiYmFibGUuaXNUYWJiYWJsZSA9IGlzVGFiYmFibGU7XG50YWJiYWJsZS5pc0ZvY3VzYWJsZSA9IGlzRm9jdXNhYmxlO1xuXG5mdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKSB7XG4gIGlmIChcbiAgICAhaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpXG4gICAgfHwgaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpXG4gICAgfHwgZ2V0VGFiaW5kZXgobm9kZSkgPCAwXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNUYWJiYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpIHtcbiAgaWYgKCFub2RlKSB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBjYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKTtcbn1cblxuZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpIHtcbiAgdW50b3VjaGFiaWxpdHlDaGVja2VyID0gdW50b3VjaGFiaWxpdHlDaGVja2VyIHx8IG5ldyBVbnRvdWNoYWJpbGl0eUNoZWNrZXIobm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGUpO1xuICBpZiAoXG4gICAgbm9kZS5kaXNhYmxlZFxuICAgIHx8IGlzSGlkZGVuSW5wdXQobm9kZSlcbiAgICB8fCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIuaXNVbnRvdWNoYWJsZShub2RlKVxuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbnZhciBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvciA9IGNhbmRpZGF0ZVNlbGVjdG9ycy5jb25jYXQoJ2lmcmFtZScpLmpvaW4oJywnKTtcbmZ1bmN0aW9uIGlzRm9jdXNhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcikge1xuICBpZiAoIW5vZGUpIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFiaW5kZXgobm9kZSkge1xuICB2YXIgdGFiaW5kZXhBdHRyID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwKTtcbiAgaWYgKCFpc05hTih0YWJpbmRleEF0dHIpKSByZXR1cm4gdGFiaW5kZXhBdHRyO1xuICAvLyBCcm93c2VycyBkbyBub3QgcmV0dXJuIGB0YWJJbmRleGAgY29ycmVjdGx5IGZvciBjb250ZW50RWRpdGFibGUgbm9kZXM7XG4gIC8vIHNvIGlmIHRoZXkgZG9uJ3QgaGF2ZSBhIHRhYmluZGV4IGF0dHJpYnV0ZSBzcGVjaWZpY2FsbHkgc2V0LCBhc3N1bWUgaXQncyAwLlxuICBpZiAoaXNDb250ZW50RWRpdGFibGUobm9kZSkpIHJldHVybiAwO1xuICByZXR1cm4gbm9kZS50YWJJbmRleDtcbn1cblxuZnVuY3Rpb24gc29ydE9yZGVyZWRUYWJiYWJsZXMoYSwgYikge1xuICByZXR1cm4gYS50YWJJbmRleCA9PT0gYi50YWJJbmRleCA/IGEuZG9jdW1lbnRPcmRlciAtIGIuZG9jdW1lbnRPcmRlciA6IGEudGFiSW5kZXggLSBiLnRhYkluZGV4O1xufVxuXG4vLyBBcnJheS5wcm90b3R5cGUuZmluZCBub3QgYXZhaWxhYmxlIGluIElFLlxuZnVuY3Rpb24gZmluZChsaXN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJlZGljYXRlKGxpc3RbaV0pKSByZXR1cm4gbGlzdFtpXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0NvbnRlbnRFZGl0YWJsZShub2RlKSB7XG4gIHJldHVybiBub2RlLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnO1xufVxuXG5mdW5jdGlvbiBpc0lucHV0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJztcbn1cblxuZnVuY3Rpb24gaXNIaWRkZW5JbnB1dChub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ2hpZGRlbic7XG59XG5cbmZ1bmN0aW9uIGlzUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdyYWRpbyc7XG59XG5cbmZ1bmN0aW9uIGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc1JhZGlvKG5vZGUpICYmICFpc1RhYmJhYmxlUmFkaW8obm9kZSk7XG59XG5cbmZ1bmN0aW9uIGdldENoZWNrZWRSYWRpbyhub2Rlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5vZGVzW2ldLmNoZWNrZWQpIHtcbiAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNUYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHJldHVybiB0cnVlO1xuICAvLyBUaGlzIHdvbid0IGFjY291bnQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgeW91IGhhdmUgcmFkaW8gZ3JvdXBzIHdpdGggdGhlIHNhbWVcbiAgLy8gaW4gc2VwYXJhdGUgZm9ybXMgb24gdGhlIHNhbWUgcGFnZS5cbiAgdmFyIHJhZGlvU2V0ID0gbm9kZS5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJyArIG5vZGUubmFtZSArICdcIl0nKTtcbiAgdmFyIGNoZWNrZWQgPSBnZXRDaGVja2VkUmFkaW8ocmFkaW9TZXQpO1xuICByZXR1cm4gIWNoZWNrZWQgfHwgY2hlY2tlZCA9PT0gbm9kZTtcbn1cblxuLy8gQW4gZWxlbWVudCBpcyBcInVudG91Y2hhYmxlXCIgaWYgKml0IG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzKiBoYXNcbi8vIGB2aXNpYmlsaXR5OiBoaWRkZW5gIG9yIGBkaXNwbGF5OiBub25lYC5cbmZ1bmN0aW9uIFVudG91Y2hhYmlsaXR5Q2hlY2tlcihlbGVtZW50RG9jdW1lbnQpIHtcbiAgdGhpcy5kb2MgPSBlbGVtZW50RG9jdW1lbnQ7XG4gIC8vIE5vZGUgY2FjaGUgbXVzdCBiZSByZWZyZXNoZWQgb24gZXZlcnkgY2hlY2ssIGluIGNhc2VcbiAgLy8gdGhlIGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQgaGFzIGNoYW5nZWQuIFRoZSBjYWNoZSBjb250YWlucyB0dXBsZXNcbiAgLy8gbWFwcGluZyBub2RlcyB0byB0aGVpciBib29sZWFuIHJlc3VsdC5cbiAgdGhpcy5jYWNoZSA9IFtdO1xufVxuXG4vLyBnZXRDb21wdXRlZFN0eWxlIGFjY3VyYXRlbHkgcmVmbGVjdHMgYHZpc2liaWxpdHk6IGhpZGRlbmAgb2YgYW5jZXN0b3JzXG4vLyBidXQgbm90IGBkaXNwbGF5OiBub25lYCwgc28gd2UgbmVlZCB0byByZWN1cnNpdmVseSBjaGVjayBwYXJlbnRzLlxuVW50b3VjaGFiaWxpdHlDaGVja2VyLnByb3RvdHlwZS5oYXNEaXNwbGF5Tm9uZSA9IGZ1bmN0aW9uIGhhc0Rpc3BsYXlOb25lKG5vZGUsIG5vZGVDb21wdXRlZFN0eWxlKSB7XG4gIGlmIChub2RlID09PSB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIFNlYXJjaCBmb3IgYSBjYWNoZWQgcmVzdWx0LlxuICAgIHZhciBjYWNoZWQgPSBmaW5kKHRoaXMuY2FjaGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtID09PSBub2RlO1xuICAgIH0pO1xuICAgIGlmIChjYWNoZWQpIHJldHVybiBjYWNoZWRbMV07XG5cbiAgICBub2RlQ29tcHV0ZWRTdHlsZSA9IG5vZGVDb21wdXRlZFN0eWxlIHx8IHRoaXMuZG9jLmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICBpZiAobm9kZUNvbXB1dGVkU3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmhhc0Rpc3BsYXlOb25lKG5vZGUucGFyZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jYWNoZS5wdXNoKFtub2RlLCByZXN1bHRdKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblVudG91Y2hhYmlsaXR5Q2hlY2tlci5wcm90b3R5cGUuaXNVbnRvdWNoYWJsZSA9IGZ1bmN0aW9uIGlzVW50b3VjaGFibGUobm9kZSkge1xuICBpZiAobm9kZSA9PT0gdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50KSByZXR1cm4gZmFsc2U7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gdGhpcy5kb2MuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgaWYgKHRoaXMuaGFzRGlzcGxheU5vbmUobm9kZSwgY29tcHV0ZWRTdHlsZSkpIHJldHVybiB0cnVlO1xuICByZXR1cm4gY29tcHV0ZWRTdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0YWJiYWJsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG4iLCJ2YXIgdGFiYmFibGUgPSByZXF1aXJlKCd0YWJiYWJsZScpO1xudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKTtcblxudmFyIGFjdGl2ZUZvY3VzVHJhcHMgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB0cmFwUXVldWUgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmF0ZVRyYXA6IGZ1bmN0aW9uKHRyYXApIHtcbiAgICAgIGlmICh0cmFwUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgYWN0aXZlVHJhcCA9IHRyYXBRdWV1ZVt0cmFwUXVldWUubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChhY3RpdmVUcmFwICE9PSB0cmFwKSB7XG4gICAgICAgICAgYWN0aXZlVHJhcC5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB0cmFwSW5kZXggPSB0cmFwUXVldWUuaW5kZXhPZih0cmFwKTtcbiAgICAgIGlmICh0cmFwSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRyYXBRdWV1ZS5wdXNoKHRyYXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbW92ZSB0aGlzIGV4aXN0aW5nIHRyYXAgdG8gdGhlIGZyb250IG9mIHRoZSBxdWV1ZVxuICAgICAgICB0cmFwUXVldWUuc3BsaWNlKHRyYXBJbmRleCwgMSk7XG4gICAgICAgIHRyYXBRdWV1ZS5wdXNoKHRyYXApO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBkZWFjdGl2YXRlVHJhcDogZnVuY3Rpb24odHJhcCkge1xuICAgICAgdmFyIHRyYXBJbmRleCA9IHRyYXBRdWV1ZS5pbmRleE9mKHRyYXApO1xuICAgICAgaWYgKHRyYXBJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdHJhcFF1ZXVlLnNwbGljZSh0cmFwSW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJhcFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdHJhcFF1ZXVlW3RyYXBRdWV1ZS5sZW5ndGggLSAxXS51bnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSkoKTtcblxuZnVuY3Rpb24gZm9jdXNUcmFwKGVsZW1lbnQsIHVzZXJPcHRpb25zKSB7XG4gIHZhciBkb2MgPSBkb2N1bWVudDtcbiAgdmFyIGNvbnRhaW5lciA9XG4gICAgdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gZG9jLnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIHZhciBjb25maWcgPSB4dGVuZChcbiAgICB7XG4gICAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogdHJ1ZSxcbiAgICAgIGVzY2FwZURlYWN0aXZhdGVzOiB0cnVlXG4gICAgfSxcbiAgICB1c2VyT3B0aW9uc1xuICApO1xuXG4gIHZhciBzdGF0ZSA9IHtcbiAgICBmaXJzdFRhYmJhYmxlTm9kZTogbnVsbCxcbiAgICBsYXN0VGFiYmFibGVOb2RlOiBudWxsLFxuICAgIG5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbjogbnVsbCxcbiAgICBtb3N0UmVjZW50bHlGb2N1c2VkTm9kZTogbnVsbCxcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIHBhdXNlZDogZmFsc2VcbiAgfTtcblxuICB2YXIgdHJhcCA9IHtcbiAgICBhY3RpdmF0ZTogYWN0aXZhdGUsXG4gICAgZGVhY3RpdmF0ZTogZGVhY3RpdmF0ZSxcbiAgICBwYXVzZTogcGF1c2UsXG4gICAgdW5wYXVzZTogdW5wYXVzZVxuICB9O1xuXG4gIHJldHVybiB0cmFwO1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKGFjdGl2YXRlT3B0aW9ucykge1xuICAgIGlmIChzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcblxuICAgIHN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICB2YXIgb25BY3RpdmF0ZSA9XG4gICAgICBhY3RpdmF0ZU9wdGlvbnMgJiYgYWN0aXZhdGVPcHRpb25zLm9uQWN0aXZhdGVcbiAgICAgICAgPyBhY3RpdmF0ZU9wdGlvbnMub25BY3RpdmF0ZVxuICAgICAgICA6IGNvbmZpZy5vbkFjdGl2YXRlO1xuICAgIGlmIChvbkFjdGl2YXRlKSB7XG4gICAgICBvbkFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiBkZWFjdGl2YXRlKGRlYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgIHN0YXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuXG4gICAgYWN0aXZlRm9jdXNUcmFwcy5kZWFjdGl2YXRlVHJhcCh0cmFwKTtcblxuICAgIHZhciBvbkRlYWN0aXZhdGUgPVxuICAgICAgZGVhY3RpdmF0ZU9wdGlvbnMgJiYgZGVhY3RpdmF0ZU9wdGlvbnMub25EZWFjdGl2YXRlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBkZWFjdGl2YXRlT3B0aW9ucy5vbkRlYWN0aXZhdGVcbiAgICAgICAgOiBjb25maWcub25EZWFjdGl2YXRlO1xuICAgIGlmIChvbkRlYWN0aXZhdGUpIHtcbiAgICAgIG9uRGVhY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIHZhciByZXR1cm5Gb2N1cyA9XG4gICAgICBkZWFjdGl2YXRlT3B0aW9ucyAmJiBkZWFjdGl2YXRlT3B0aW9ucy5yZXR1cm5Gb2N1cyAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZGVhY3RpdmF0ZU9wdGlvbnMucmV0dXJuRm9jdXNcbiAgICAgICAgOiBjb25maWcucmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU7XG4gICAgaWYgKHJldHVybkZvY3VzKSB7XG4gICAgICBkZWxheShmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5Rm9jdXMoc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgaWYgKHN0YXRlLnBhdXNlZCB8fCAhc3RhdGUuYWN0aXZlKSByZXR1cm47XG4gICAgc3RhdGUucGF1c2VkID0gdHJ1ZTtcbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVucGF1c2UoKSB7XG4gICAgaWYgKCFzdGF0ZS5wYXVzZWQgfHwgIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgIGFkZExpc3RlbmVycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICAvLyBUaGVyZSBjYW4gYmUgb25seSBvbmUgbGlzdGVuaW5nIGZvY3VzIHRyYXAgYXQgYSB0aW1lXG4gICAgYWN0aXZlRm9jdXNUcmFwcy5hY3RpdmF0ZVRyYXAodHJhcCk7XG5cbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG5cbiAgICAvLyBEZWxheSBlbnN1cmVzIHRoYXQgdGhlIGZvY3VzZWQgZWxlbWVudCBkb2Vzbid0IGNhcHR1cmUgdGhlIGV2ZW50XG4gICAgLy8gdGhhdCBjYXVzZWQgdGhlIGZvY3VzIHRyYXAgYWN0aXZhdGlvbi5cbiAgICBkZWxheShmdW5jdGlvbigpIHtcbiAgICAgIHRyeUZvY3VzKGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBjaGVja0ZvY3VzSW4sIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2ssIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXksIHRydWUpO1xuXG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgY2hlY2tGb2N1c0luLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB0cnVlKTtcblxuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Tm9kZUZvck9wdGlvbihvcHRpb25OYW1lKSB7XG4gICAgdmFyIG9wdGlvblZhbHVlID0gY29uZmlnW29wdGlvbk5hbWVdO1xuICAgIHZhciBub2RlID0gb3B0aW9uVmFsdWU7XG4gICAgaWYgKCFvcHRpb25WYWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBub2RlID0gZG9jLnF1ZXJ5U2VsZWN0b3Iob3B0aW9uVmFsdWUpO1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBvcHRpb25OYW1lICsgJ2AgcmVmZXJzIHRvIG5vIGtub3duIG5vZGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbm9kZSA9IG9wdGlvblZhbHVlKCk7XG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgJyArIG9wdGlvbk5hbWUgKyAnYCBkaWQgbm90IHJldHVybiBhIG5vZGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbml0aWFsRm9jdXNOb2RlKCkge1xuICAgIHZhciBub2RlO1xuICAgIGlmIChnZXROb2RlRm9yT3B0aW9uKCdpbml0aWFsRm9jdXMnKSAhPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IGdldE5vZGVGb3JPcHRpb24oJ2luaXRpYWxGb2N1cycpO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGRvYy5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgbm9kZSA9IGRvYy5hY3RpdmVFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlID0gc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUgfHwgZ2V0Tm9kZUZvck9wdGlvbignZmFsbGJhY2tGb2N1cycpO1xuICAgIH1cblxuICAgIGlmICghbm9kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIllvdSBjYW4ndCBoYXZlIGEgZm9jdXMtdHJhcCB3aXRob3V0IGF0IGxlYXN0IG9uZSBmb2N1c2FibGUgZWxlbWVudFwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgLy8gVGhpcyBuZWVkcyB0byBiZSBkb25lIG9uIG1vdXNlZG93biBhbmQgdG91Y2hzdGFydCBpbnN0ZWFkIG9mIGNsaWNrXG4gIC8vIHNvIHRoYXQgaXQgcHJlY2VkZXMgdGhlIGZvY3VzIGV2ZW50LlxuICBmdW5jdGlvbiBjaGVja1BvaW50ZXJEb3duKGUpIHtcbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkgcmV0dXJuO1xuICAgIGlmIChjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMpIHtcbiAgICAgIGRlYWN0aXZhdGUoe1xuICAgICAgICByZXR1cm5Gb2N1czogIXRhYmJhYmxlLmlzRm9jdXNhYmxlKGUudGFyZ2V0KVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICAvLyBJbiBjYXNlIGZvY3VzIGVzY2FwZXMgdGhlIHRyYXAgZm9yIHNvbWUgc3RyYW5nZSByZWFzb24sIHB1bGwgaXQgYmFjayBpbi5cbiAgZnVuY3Rpb24gY2hlY2tGb2N1c0luKGUpIHtcbiAgICAvLyBJbiBGaXJlZm94IHdoZW4geW91IFRhYiBvdXQgb2YgYW4gaWZyYW1lIHRoZSBEb2N1bWVudCBpcyBicmllZmx5IGZvY3VzZWQuXG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkgfHwgZS50YXJnZXQgaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHRyeUZvY3VzKHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlIHx8IGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0tleShlKSB7XG4gICAgaWYgKGNvbmZpZy5lc2NhcGVEZWFjdGl2YXRlcyAhPT0gZmFsc2UgJiYgaXNFc2NhcGVFdmVudChlKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZGVhY3RpdmF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNUYWJFdmVudChlKSkge1xuICAgICAgY2hlY2tUYWIoZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgLy8gSGlqYWNrIFRhYiBldmVudHMgb24gdGhlIGZpcnN0IGFuZCBsYXN0IGZvY3VzYWJsZSBub2RlcyBvZiB0aGUgdHJhcCxcbiAgLy8gaW4gb3JkZXIgdG8gcHJldmVudCBmb2N1cyBmcm9tIGVzY2FwaW5nLiBJZiBpdCBlc2NhcGVzIGZvciBldmVuIGFcbiAgLy8gbW9tZW50IGl0IGNhbiBlbmQgdXAgc2Nyb2xsaW5nIHRoZSBwYWdlIGFuZCBjYXVzaW5nIGNvbmZ1c2lvbiBzbyB3ZVxuICAvLyBraW5kIG9mIG5lZWQgdG8gY2FwdHVyZSB0aGUgYWN0aW9uIGF0IHRoZSBrZXlkb3duIHBoYXNlLlxuICBmdW5jdGlvbiBjaGVja1RhYihlKSB7XG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgIGlmIChlLnNoaWZ0S2V5ICYmIGUudGFyZ2V0ID09PSBzdGF0ZS5maXJzdFRhYmJhYmxlTm9kZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdHJ5Rm9jdXMoc3RhdGUubGFzdFRhYmJhYmxlTm9kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghZS5zaGlmdEtleSAmJiBlLnRhcmdldCA9PT0gc3RhdGUubGFzdFRhYmJhYmxlTm9kZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdHJ5Rm9jdXMoc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQ2xpY2soZSkge1xuICAgIGlmIChjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMpIHJldHVybjtcbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkgcmV0dXJuO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVGFiYmFibGVOb2RlcygpIHtcbiAgICB2YXIgdGFiYmFibGVOb2RlcyA9IHRhYmJhYmxlKGNvbnRhaW5lcik7XG4gICAgc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUgPSB0YWJiYWJsZU5vZGVzWzBdIHx8IGdldEluaXRpYWxGb2N1c05vZGUoKTtcbiAgICBzdGF0ZS5sYXN0VGFiYmFibGVOb2RlID1cbiAgICAgIHRhYmJhYmxlTm9kZXNbdGFiYmFibGVOb2Rlcy5sZW5ndGggLSAxXSB8fCBnZXRJbml0aWFsRm9jdXNOb2RlKCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cnlGb2N1cyhub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IGRvYy5hY3RpdmVFbGVtZW50KSByZXR1cm47XG4gICAgaWYgKCFub2RlIHx8ICFub2RlLmZvY3VzKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5vZGUuZm9jdXMoKTtcbiAgICBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSA9IG5vZGU7XG4gICAgaWYgKGlzU2VsZWN0YWJsZUlucHV0KG5vZGUpKSB7XG4gICAgICBub2RlLnNlbGVjdCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc1NlbGVjdGFibGVJbnB1dChub2RlKSB7XG4gIHJldHVybiAoXG4gICAgbm9kZS50YWdOYW1lICYmXG4gICAgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcgJiZcbiAgICB0eXBlb2Ygbm9kZS5zZWxlY3QgPT09ICdmdW5jdGlvbidcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNFc2NhcGVFdmVudChlKSB7XG4gIHJldHVybiBlLmtleSA9PT0gJ0VzY2FwZScgfHwgZS5rZXkgPT09ICdFc2MnIHx8IGUua2V5Q29kZSA9PT0gMjc7XG59XG5cbmZ1bmN0aW9uIGlzVGFiRXZlbnQoZSkge1xuICByZXR1cm4gZS5rZXkgPT09ICdUYWInIHx8IGUua2V5Q29kZSA9PT0gOTtcbn1cblxuZnVuY3Rpb24gZGVsYXkoZm4pIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvY3VzVHJhcDtcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8YXNpZGUgcmVmPVwiZHJhd2VyXCIgOmNsYXNzPVwiY2xhc3Nlc1wiIGNsYXNzPVwibWRjLWRyYXdlciBtZGMtZHJhd2VyLS1tb2RhbFwiPlxuICAgICAgPHNsb3Qgdi1pZj1cIiRzbG90c1snaGVhZGVyJ11cIiBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxuICAgICAgPCEtLSA8ZGl2IHYtaWY9XCIkc2xvdHNbJ2hlYWRlciddXCIgY2xhc3M9XCJtZGMtZHJhd2VyX19oZWFkZXJcIj48PC9kaXY+IC0tPlxuICAgICAgPGRpdiBjbGFzcz1cIm1kYy1kcmF3ZXJfX2NvbnRlbnRcIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gICAgPC9hc2lkZT5cbiAgICA8ZGl2IGNsYXNzPVwibWRjLWRyYXdlci1zY3JpbVwiPjwvZGl2PlxuXG4gICAgPGRpdiB2LWlmPVwidG9vbGJhclNwYWNlclwiIGNsYXNzPVwibWRjLXRvcC1hcHAtYmFyLS1maXhlZC1hZGp1c3RcIiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9kcmF3ZXIvZGlzbWlzc2libGUvZm91bmRhdGlvbidcbmltcG9ydCBNRENNb2RhbERyYXdlckZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2RyYXdlci9tb2RhbC9mb3VuZGF0aW9uJ1xuaW1wb3J0IHsgTURDTGlzdCB9IGZyb20gJ0BtYXRlcmlhbC9saXN0L2luZGV4J1xuaW1wb3J0IE1EQ0xpc3RGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9saXN0L2ZvdW5kYXRpb24nXG5pbXBvcnQgY3JlYXRlRm9jdXNUcmFwIGZyb20gJ2ZvY3VzLXRyYXAnXG5cbmNvbnN0IG1lZGlhID0gbmV3IGNsYXNzIHtcbiAgZ2V0IHNtYWxsKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9zbWFsbCB8fCAodGhpcy5fc21hbGwgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogODM5cHgpJykpXG4gICAgKVxuICB9XG5cbiAgZ2V0IGxhcmdlKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9sYXJnZSB8fCAodGhpcy5fbGFyZ2UgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTIwMHB4KScpKVxuICAgIClcbiAgfVxufSgpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1kcmF3ZXInLFxuICBtb2RlbDoge1xuICAgIHByb3A6ICdvcGVuJyxcbiAgICBldmVudDogJ2NoYW5nZSdcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBtb2RhbDogQm9vbGVhbixcbiAgICBvcGVuOiBCb29sZWFuLFxuICAgIHRvb2xiYXJTcGFjZXI6IEJvb2xlYW4sXG4gICAgdG9nZ2xlT246IFN0cmluZyxcbiAgICB0b2dnbGVPblNvdXJjZToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgfSxcbiAgICBvcGVuT246IFN0cmluZyxcbiAgICBvcGVuT25Tb3VyY2U6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgIH0sXG4gICAgY2xvc2VPbjogU3RyaW5nLFxuICAgIGNsb3NlT25Tb3VyY2U6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgcHJvdmlkZSgpIHtcbiAgICByZXR1cm4geyBtZGNEcmF3ZXI6IHRoaXMgfVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBvcGVuXzogZmFsc2UsXG4gICAgICBjbGFzc2VzOiB7fVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB0eXBlKCkge30sXG4gICAgaXNNb2RhbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGFsXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIG9wZW46ICdvbk9wZW5fJ1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZHJhd2VyXyA9IHRoaXMuJHJlZnMuZHJhd2VyXG4gICAgY29uc3QgYWRhcHRlciA9IHtcbiAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKSxcbiAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZGVsZXRlKHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lKSxcbiAgICAgIGhhc0NsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgZWxlbWVudEhhc0NsYXNzOiAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PlxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgc2F2ZUZvY3VzOiAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJldmlvdXNGb2N1c18gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICB9LFxuICAgICAgcmVzdG9yZUZvY3VzOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzRm9jdXMgPSB0aGlzLnByZXZpb3VzRm9jdXNfICYmIHRoaXMucHJldmlvdXNGb2N1c18uZm9jdXNcbiAgICAgICAgaWYgKHRoaXMuZHJhd2VyXy5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSAmJiBwcmV2aW91c0ZvY3VzKSB7XG4gICAgICAgICAgdGhpcy5wcmV2aW91c0ZvY3VzXy5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmb2N1c0FjdGl2ZU5hdmlnYXRpb25JdGVtOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZU5hdkl0ZW1FbCA9IHRoaXMuZHJhd2VyXy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuJHtNRENMaXN0Rm91bmRhdGlvbi5jc3NDbGFzc2VzLkxJU1RfSVRFTV9BQ1RJVkFURURfQ0xBU1N9YFxuICAgICAgICApXG4gICAgICAgIGlmIChhY3RpdmVOYXZJdGVtRWwpIHtcbiAgICAgICAgICBhY3RpdmVOYXZJdGVtRWwuZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbm90aWZ5Q2xvc2U6ICgpID0+IHtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZmFsc2UpXG4gICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJylcbiAgICAgIH0sXG4gICAgICBub3RpZnlPcGVuOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRydWUpXG4gICAgICAgIHRoaXMuJGVtaXQoJ29wZW4nKVxuICAgICAgfSxcbiAgICAgIHRyYXBGb2N1czogKCkgPT4gdGhpcy5mb2N1c1RyYXBfLmFjdGl2YXRlKCksXG4gICAgICByZWxlYXNlRm9jdXM6ICgpID0+IHRoaXMuZm9jdXNUcmFwXy5kZWFjdGl2YXRlKClcbiAgICB9XG5cbiAgICBjb25zdCB7IERJU01JU1NJQkxFLCBNT0RBTCB9ID0gTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXNcbiAgICBpZiAodGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC5jb250YWlucyhESVNNSVNTSUJMRSkpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24oYWRhcHRlcilcbiAgICB9IGVsc2UgaWYgKHRoaXMuZHJhd2VyXy5jbGFzc0xpc3QuY29udGFpbnMoTU9EQUwpKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDTW9kYWxEcmF3ZXJGb3VuZGF0aW9uKGFkYXB0ZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE1EQ0RyYXdlcjogRmFpbGVkIHRvIGluc3RhbnRpYXRlIGNvbXBvbmVudC4gU3VwcG9ydGVkIHZhcmlhbnRzIGFyZSAke0RJU01JU1NJQkxFfSBhbmQgJHtNT0RBTH0uYFxuICAgICAgKVxuICAgIH1cbiAgICB0aGlzLmZvdW5kYXRpb24gJiYgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKClcblxuICAgIGlmICh0aGlzLnRvZ2dsZU9uKSB7XG4gICAgICB0aGlzLnRvZ2dsZU9uRXZlbnRTb3VyY2UgPSB0aGlzLnRvZ2dsZU9uU291cmNlIHx8IHRoaXMuJHJvb3RcbiAgICAgIHRoaXMudG9nZ2xlT25FdmVudFNvdXJjZS4kb24odGhpcy50b2dnbGVPbiwgdGhpcy50b2dnbGUpXG4gICAgfVxuICAgIGlmICh0aGlzLm9wZW5Pbikge1xuICAgICAgdGhpcy5vcGVuT25FdmVudFNvdXJjZSA9IHRoaXMub3Blbk9uU291cmNlIHx8IHRoaXMuJHJvb3RcbiAgICAgIHRoaXMub3Blbk9uRXZlbnRTb3VyY2UuJG9uKHRoaXMub3Blbk9uLCB0aGlzLnNob3cpXG4gICAgfVxuICAgIGlmICh0aGlzLmNsb3NlT24pIHtcbiAgICAgIHRoaXMuY2xvc2VPbkV2ZW50U291cmNlID0gdGhpcy5jbG9zZU9uU291cmNlIHx8IHRoaXMuJHJvb3RcbiAgICAgIHRoaXMuY2xvc2VPbkV2ZW50U291cmNlLiRvbih0aGlzLmNsb3NlT24sIHRoaXMuY2xvc2UpXG4gICAgfVxuICAgIC8vIG1lZGlhLnNtYWxsLmFkZExpc3RlbmVyKHRoaXMucmVmcmVzaE1lZGlhKVxuICAgIC8vIG1lZGlhLmxhcmdlLmFkZExpc3RlbmVyKHRoaXMucmVmcmVzaE1lZGlhKVxuICAgIC8vIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMucmVmcmVzaE1lZGlhKCkpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uICYmIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBudWxsXG4gICAgLy8gbWVkaWEuc21hbGwucmVtb3ZlTGlzdGVuZXIodGhpcy5yZWZyZXNoTWVkaWEpXG4gICAgLy8gbWVkaWEubGFyZ2UucmVtb3ZlTGlzdGVuZXIodGhpcy5yZWZyZXNoTWVkaWEpXG5cbiAgICBpZiAodGhpcy50b2dnbGVPbkV2ZW50U291cmNlKSB7XG4gICAgICB0aGlzLnRvZ2dsZU9uRXZlbnRTb3VyY2UuJG9mZih0aGlzLnRvZ2dsZU9uLCB0aGlzLnRvZ2dsZSlcbiAgICB9XG4gICAgaWYgKHRoaXMub3Blbk9uRXZlbnRTb3VyY2UpIHtcbiAgICAgIHRoaXMub3Blbk9uRXZlbnRTb3VyY2UuJG9mZih0aGlzLm9wZW5PbiwgdGhpcy5zaG93KVxuICAgIH1cbiAgICBpZiAodGhpcy5jbG9zZU9uRXZlbnRTb3VyY2UpIHtcbiAgICAgIHRoaXMuY2xvc2VPbkV2ZW50U291cmNlLiRvZmYodGhpcy5jbG9zZU9uLCB0aGlzLmNsb3NlKVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGluaXRpYWxTeW5jV2l0aERPTSgpIHtcbiAgICAgIGNvbnN0IHsgTU9EQUwgfSA9IE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5jc3NDbGFzc2VzXG5cbiAgICAgIGlmICh0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKE1PREFMKSkge1xuICAgICAgICBjb25zdCB7IFNDUklNX1NFTEVDVE9SIH0gPSBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24uc3RyaW5nc1xuICAgICAgICB0aGlzLnNjcmltXyA9IHRoaXMuZHJhd2VyXy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0NSSU1fU0VMRUNUT1IpXG4gICAgICAgIHRoaXMuaGFuZGxlU2NyaW1DbGlja18gPSAoKSA9PiB0aGlzLmZvdW5kYXRpb24uaGFuZGxlU2NyaW1DbGljaygpXG4gICAgICAgIHRoaXMuc2NyaW1fLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVTY3JpbUNsaWNrXylcbiAgICAgICAgdGhpcy5mb2N1c1RyYXBfID0gY3JlYXRlRm9jdXNUcmFwSW5zdGFuY2UoXG4gICAgICAgICAgdGhpcy5kcmF3ZXJfLFxuICAgICAgICAgIHRoaXMuZm9jdXNUcmFwRmFjdG9yeV9cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmhhbmRsZUtleWRvd25fID0gZXZ0ID0+IHRoaXMuZm91bmRhdGlvbi5oYW5kbGVLZXlkb3duKGV2dClcbiAgICAgIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8gPSBldnQgPT5cbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KVxuXG4gICAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duXylcbiAgICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmRfKVxuICAgIH0sXG4gICAgb25PcGVuXyh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24gJiYgdGhpcy5mb3VuZGF0aW9uLm9wZW4oKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uICYmIHRoaXMuZm91bmRhdGlvbi5jbG9zZSgpXG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNoYW5nZShldmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZXZlbnQpXG4gICAgICB0aGlzLiRyb290LiRlbWl0KCd2bWE6bGF5b3V0JylcbiAgICB9LFxuICAgIHNob3coKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24ub3BlbigpXG4gICAgfSxcbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5jbG9zZSgpXG4gICAgfSxcbiAgICB0b2dnbGUoKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaXNPcGVuKClcbiAgICAgICAgPyB0aGlzLmZvdW5kYXRpb24uY2xvc2UoKVxuICAgICAgICA6IHRoaXMuZm91bmRhdGlvbi5vcGVuKClcbiAgICB9LFxuICAgIGlzT3BlbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb24uaXNPcGVuKClcbiAgICB9LFxuICAgIHJlZnJlc2hNZWRpYSgpIHtcbiAgICAgIC8vIHRoaXMuc21hbGwgPSBtZWRpYS5zbWFsbC5tYXRjaGVzXG4gICAgICAvLyB0aGlzLmxhcmdlID0gbWVkaWEubGFyZ2UubWF0Y2hlc1xuICAgICAgLy8gaWYgKHRoaXMuaXNSZXNwb25zaXZlKSB7XG4gICAgICAvLyAgIGlmICh0aGlzLmxhcmdlKSB7XG4gICAgICAvLyAgICAgdGhpcy5zaG93KClcbiAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICB0aGlzLmNsb3NlKClcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGb2N1c1RyYXBJbnN0YW5jZShcbiAgc3VyZmFjZUVsLFxuICBmb2N1c1RyYXBGYWN0b3J5ID0gY3JlYXRlRm9jdXNUcmFwXG4pIHtcbiAgcmV0dXJuIGZvY3VzVHJhcEZhY3Rvcnkoc3VyZmFjZUVsLCB7XG4gICAgY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXM6IHRydWUsXG4gICAgaW5pdGlhbEZvY3VzOiBmYWxzZSwgLy8gTmF2aWdhdGlvbiBkcmF3ZXIgaGFuZGxlcyBmb2N1c2luZyBvbiBhY3RpdmUgbmF2IGl0ZW0uXG4gICAgZXNjYXBlRGVhY3RpdmF0ZXM6IGZhbHNlLCAvLyBOYXZpZ2F0aW9uIGRyYXdlciBoYW5kbGVzIEVTQy5cbiAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogZmFsc2UgLy8gTmF2aWdhdGlvbiBkcmF3ZXIgaGFuZGxlcyByZXN0b3JlIGZvY3VzLlxuICB9KVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtZGMtZHJhd2VyLWhlYWRlciBtZGMtZHJhd2VyX19oZWFkZXJcIj5cbiAgICAgIDxzbG90IC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1kcmF3ZXItaGVhZGVyJ1xufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxuYXYgXG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiIFxuICAgIGNsYXNzPVwibWRjLWRyYXdlci1saXN0IG1kYy1saXN0XCI+XG4gICAgPHNsb3QvPlxuICA8L25hdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtZHJhd2VyLWxpc3QnLFxuICBwcm9wczoge1xuICAgIGRlbnNlOiBCb29sZWFuXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgJ21kYy1saXN0LS1kZW5zZSc6IHRoaXMuZGVuc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBSaXBwbGUuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmdcbiAqIC0gY2xhc3Nlc1xuICogLSBkb21cbiAqIC0gQ1NTIHZhcmlhYmxlc1xuICogLSBwb3NpdGlvblxuICogLSBkaW1lbnNpb25zXG4gKiAtIHNjcm9sbCBwb3NpdGlvblxuICogLSBldmVudCBoYW5kbGVyc1xuICogLSB1bmJvdW5kZWQsIGFjdGl2ZSBhbmQgZGlzYWJsZWQgc3RhdGVzXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENSaXBwbGVBZGFwdGVyIHtcbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1VuYm91bmRlZCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZUFjdGl2ZSgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZURpc2FibGVkKCkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0geyFFdmVudFRhcmdldH0gdGFyZ2V0ICovXG4gIGNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFyTmFtZVxuICAgKiBAcGFyYW0gez9udW1iZXJ8c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgdXBkYXRlQ3NzVmFyaWFibGUodmFyTmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqIEByZXR1cm4geyFDbGllbnRSZWN0fSAqL1xuICBjb21wdXRlQm91bmRpbmdSZWN0KCkge31cblxuICAvKiogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gKi9cbiAgZ2V0V2luZG93UGFnZU9mZnNldCgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxuICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbn07XG5cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG4gIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxufTtcblxuY29uc3QgbnVtYmVycyA9IHtcbiAgUEFERElORzogMTAsXG4gIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLXRyYW5zbGF0ZS1kdXJhdGlvbiAoaS5lLiBhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLWZhZGUtb3V0LWR1cmF0aW9uIChpLmUuIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIFRBUF9ERUxBWV9NUzogMzAwLCAvLyBEZWxheSBiZXR3ZWVuIHRvdWNoIGFuZCBzaW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXNcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gYXBwbHlQYXNzaXZlIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c1Bhc3NpdmVfO1xuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAvLyBEZXRlY3QgdmVyc2lvbnMgb2YgRWRnZSB3aXRoIGJ1Z2d5IHZhcigpIHN1cHBvcnRcbiAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMTQ5NTQ0OC9cbiAgY29uc3QgZG9jdW1lbnQgPSB3aW5kb3dPYmouZG9jdW1lbnQ7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgLy8gVGhlIGJ1ZyBleGlzdHMgaWYgOjpiZWZvcmUgc3R5bGUgZW5kcyB1cCBwcm9wYWdhdGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gIC8vIEFkZGl0aW9uYWxseSwgZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIG51bGwgaW4gaWZyYW1lcyB3aXRoIGRpc3BsYXk6IFwibm9uZVwiIGluIEZpcmVmb3gsXG4gIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvd09iai5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBjb25zdCBoYXNQc2V1ZG9WYXJCdWcgPSBjb21wdXRlZFN0eWxlICE9PSBudWxsICYmIGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wU3R5bGUgPT09ICdzb2xpZCc7XG4gIG5vZGUucmVtb3ZlKCk7XG4gIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBsZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuXG4gIGNvbnN0IHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gd2luZG93T2JqLkNTUyAmJiB0eXBlb2Ygd2luZG93T2JqLkNTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTQ2NjlcbiAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgY29uc3Qgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKFxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKVxuICApO1xuXG4gIGlmIChleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cykge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgfSBlbHNlIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG59XG5cbi8vXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZCBpZiBzbywgdXNlIHRoZW0uXG4gKiBAcGFyYW0geyFXaW5kb3c9fSBnbG9iYWxPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnwhRXZlbnRMaXN0ZW5lck9wdGlvbnN9XG4gKi9cbmZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmogPSB3aW5kb3csIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwge2dldCBwYXNzaXZlKCkge1xuICAgICAgICBpc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBpc1N1cHBvcnRlZDtcbiAgICAgIH19KTtcbiAgICB9IGNhdGNoIChlKSB7IH1cblxuICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZDtcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfXG4gICAgPyAvKiogQHR5cGUgeyFFdmVudExpc3RlbmVyT3B0aW9uc30gKi8gKHtwYXNzaXZlOiB0cnVlfSlcbiAgICA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gSFRNTEVsZW1lbnRQcm90b3R5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gIC8qKlxuICAgKiBPcmRlciBpcyBpbXBvcnRhbnQgYmVjYXVzZSB3ZSByZXR1cm4gdGhlIGZpcnN0IGV4aXN0aW5nIG1ldGhvZCB3ZSBmaW5kLlxuICAgKiBEbyBub3QgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgaXRlbXMgaW4gdGhlIGJlbG93IGFycmF5LlxuICAgKi9cbiAgY29uc3QgbWF0Y2hlc01ldGhvZHMgPSBbJ21hdGNoZXMnLCAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJywgJ21zTWF0Y2hlc1NlbGVjdG9yJ107XG4gIGxldCBtZXRob2QgPSAnbWF0Y2hlcyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlc01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0aG9kID0gbWF0Y2hlc01ldGhvZHNbaV07XG4gICAgaWYgKG1hdGNoZXNNZXRob2QgaW4gSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgICAgIG1ldGhvZCA9IG1hdGNoZXNNZXRob2Q7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0aG9kO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUV2ZW50fSBldlxuICogQHBhcmFtIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSBwYWdlT2Zmc2V0XG4gKiBAcGFyYW0geyFDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXYsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgY29uc3Qge3gsIHl9ID0gcGFnZU9mZnNldDtcbiAgY29uc3QgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgY29uc3QgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuXG4gIGxldCBub3JtYWxpemVkWDtcbiAgbGV0IG5vcm1hbGl6ZWRZO1xuICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gIGlmIChldi50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICBldiA9IC8qKiBAdHlwZSB7IVRvdWNoRXZlbnR9ICovIChldik7XG4gICAgbm9ybWFsaXplZFggPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9IGVsc2Uge1xuICAgIGV2ID0gLyoqIEB0eXBlIHshTW91c2VFdmVudH0gKi8gKGV2KTtcbiAgICBub3JtYWxpemVkWCA9IGV2LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYucGFnZVkgLSBkb2N1bWVudFk7XG4gIH1cblxuICByZXR1cm4ge3g6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWX07XG59XG5cbmV4cG9ydCB7c3VwcG9ydHNDc3NWYXJpYWJsZXMsIGFwcGx5UGFzc2l2ZSwgZ2V0TWF0Y2hlc1Byb3BlcnR5LCBnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgaXNBY3RpdmF0ZWQ6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBhY3RpdmF0aW9uRXZlbnQ6ICghRXZlbnR8dW5kZWZpbmVkKSxcbiAqICAgaXNQcm9ncmFtbWF0aWM6IChib29sZWFufHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBBY3RpdmF0aW9uU3RhdGVUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGRlYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZm9jdXM6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgYmx1cjogKHN0cmluZ3x1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJJbmZvVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50KSxcbiAqICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50PSksXG4gKiAgIGZvY3VzOiBmdW5jdGlvbigpLFxuICogICBibHVyOiBmdW5jdGlvbigpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJzVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICB4OiBudW1iZXIsXG4gKiAgIHk6IG51bWJlclxuICogfX1cbiAqL1xubGV0IFBvaW50VHlwZTtcblxuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbmNvbnN0IEFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nLCAnbW91c2Vkb3duJywgJ2tleWRvd24nXTtcblxuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG5jb25zdCBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnXTtcblxuLy8gVHJhY2tzIGFjdGl2YXRpb25zIHRoYXQgaGF2ZSBvY2N1cnJlZCBvbiB0aGUgY3VycmVudCBmcmFtZSwgdG8gYXZvaWQgc2ltdWx0YW5lb3VzIG5lc3RlZCBhY3RpdmF0aW9uc1xuLyoqIEB0eXBlIHshQXJyYXk8IUV2ZW50VGFyZ2V0Pn0gKi9cbmxldCBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1JpcHBsZUFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENSaXBwbGVGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gbnVtYmVycztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IC8qIGJvb2xlYW4gLSBjYWNoZWQgKi8ge30sXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICgvKiB0YXJnZXQ6ICFFdmVudFRhcmdldCAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAoLyogdmFyTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IC8qIENsaWVudFJlY3QgKi8ge30sXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAvKiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9ICovIHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUgeyFDbGllbnRSZWN0fSAqL1xuICAgIHRoaXMuZnJhbWVfID0gLyoqIEB0eXBlIHshQ2xpZW50UmVjdH0gKi8gKHt3aWR0aDogMCwgaGVpZ2h0OiAwfSk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubWF4UmFkaXVzXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCl9ICovXG4gICAgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gKGUpID0+IHRoaXMuYWN0aXZhdGVfKGUpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9ICgpID0+IHRoaXMuZGVhY3RpdmF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5mb2N1c0hhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVGb2N1cygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmJsdXJIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlQmx1cigpO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyXyA9ICgpID0+IHRoaXMubGF5b3V0KCk7XG5cbiAgICAvKiogQHByaXZhdGUge3tsZWZ0OiBudW1iZXIsIHRvcDpudW1iZXJ9fSAqL1xuICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdTY2FsZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUV2ZW50fHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdXBwb3J0c1ByZXNzUmlwcGxlXygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9XG4gICAqL1xuICBkZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcblxuICAgIHRoaXMucmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpO1xuXG4gICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhST09UKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlcyBuZWVkIGxheW91dCBsb2dpYyBhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIHNldCBjb29yZGluYXRlcyBmb3IgYm90aCBzaGFkZSBhbmQgcmlwcGxlXG4gICAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCkpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2YXRpb25UaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoUk9PVCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudH0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSkge1xuICAgIGlmIChlLnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpIHtcbiAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcmVtb3ZlQ3NzVmFyc18oKSB7XG4gICAgY29uc3Qge3N0cmluZ3N9ID0gTURDUmlwcGxlRm91bmRhdGlvbjtcbiAgICBPYmplY3Qua2V5cyhzdHJpbmdzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBpZiAoay5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShzdHJpbmdzW2tdLCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFjdGl2YXRlXyhlKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgIGNvbnN0IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgY29uc3QgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBlICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZS50eXBlO1xuICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZSA9PT0gdW5kZWZpbmVkO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IGUgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICBlLnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3BvaW50ZXJkb3duJ1xuICAgICk7XG5cbiAgICBjb25zdCBoYXNBY3RpdmF0ZWRDaGlsZCA9IGUgIT09IHVuZGVmaW5lZCAmJiBhY3RpdmF0ZWRUYXJnZXRzLmxlbmd0aCA+IDAgJiYgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKFxuICAgICAgKHRhcmdldCkgPT4gdGhpcy5hZGFwdGVyXy5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkpO1xuICAgIGlmIChoYXNBY3RpdmF0ZWRDaGlsZCkge1xuICAgICAgLy8gSW1tZWRpYXRlbHkgcmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSwgd2hpbGUgcHJlc2VydmluZyBsb2dpYyB0aGF0IHByZXZlbnRzIHRvdWNoIGZvbGxvdy1vbiBldmVudHNcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKC8qKiBAdHlwZSB7IUV2ZW50VGFyZ2V0fSAqLyAoZS50YXJnZXQpKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSAmJiBlICE9PSB1bmRlZmluZWQgJiYgKGUua2V5ID09PSAnICcgfHwgZS5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgLy8gYWN0aXZlIHN0YXRlcyBpbmNvbnNpc3RlbnRseSB3aGVuIHRoZXkncmUgY2FsbGVkIHdpdGhpbiBldmVudCBoYW5kbGluZyBjb2RlOlxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgLy8gV2UgdHJ5IGZpcnN0IG91dHNpZGUgckFGIHRvIHN1cHBvcnQgRWRnZSwgd2hpY2ggZG9lcyBub3QgZXhoaWJpdCB0aGlzIHByb2JsZW0sIGJ1dCB3aWxsIGNyYXNoIGlmIGEgQ1NTXG4gICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSkge1xuICAgIHJldHVybiAoZSAhPT0gdW5kZWZpbmVkICYmIGUudHlwZSA9PT0gJ2tleWRvd24nKSA/IHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlQWN0aXZlKCkgOiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZXZlbnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICovXG4gIGFjdGl2YXRlKGV2ZW50KSB7XG4gICAgdGhpcy5hY3RpdmF0ZV8oZXZlbnQpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGFuaW1hdGVBY3RpdmF0aW9uXygpIHtcbiAgICBjb25zdCB7VkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtERUFDVElWQVRJT05fVElNRU9VVF9NU30gPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnM7XG5cbiAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuXG4gICAgbGV0IHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgbGV0IHRyYW5zbGF0ZUVuZCA9ICcnO1xuXG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIGNvbnN0IHtzdGFydFBvaW50LCBlbmRQb2ludH0gPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKTtcbiAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gYCR7c3RhcnRQb2ludC54fXB4LCAke3N0YXJ0UG9pbnQueX1weGA7XG4gICAgICB0cmFuc2xhdGVFbmQgPSBgJHtlbmRQb2ludC54fXB4LCAke2VuZFBvaW50Lnl9cHhgO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuXG4gICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm4ge3tzdGFydFBvaW50OiBQb2ludFR5cGUsIGVuZFBvaW50OiBQb2ludFR5cGV9fVxuICAgKi9cbiAgZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpIHtcbiAgICBjb25zdCB7YWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXJ9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuXG4gICAgbGV0IHN0YXJ0UG9pbnQ7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhcbiAgICAgICAgLyoqIEB0eXBlIHshRXZlbnR9ICovIChhY3RpdmF0aW9uRXZlbnQpLFxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICBjb25zdCBlbmRQb2ludCA9IHtcbiAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtzdGFydFBvaW50LCBlbmRQb2ludH07XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCkge1xuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtoYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWR9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGNvbnN0IGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcblxuICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKSB7XG4gICAgY29uc3Qge0ZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gIH1cblxuICByZXNldEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQsIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZWFjdGl2YXRlXygpIHtcbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSAvKiogQHR5cGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqLyAoT2JqZWN0LmFzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKSk7XG5cbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSkpO1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9IG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFuaW1hdGVEZWFjdGl2YXRpb25fKHt3YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlfSkge1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfVxuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgIH1cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGxheW91dEludGVybmFsXygpIHtcbiAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIGNvbnN0IG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuXG4gICAgLy8gU3VyZmFjZSBkaWFtZXRlciBpcyB0cmVhdGVkIGRpZmZlcmVudGx5IGZvciB1bmJvdW5kZWQgdnMuIGJvdW5kZWQgcmlwcGxlcy5cbiAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAvLyBzcXVhcmUpLiBCb3VuZGVkIHJpcHBsZXMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgZnVsbHkgZXhwZWN0ZWQgdG8gZXhwYW5kIGJleW9uZCB0aGUgc3VyZmFjZSdzIGxvbmdlc3QgZGlhbWV0ZXJcbiAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgIGNvbnN0IGdldEJvdW5kZWRSYWRpdXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMuZnJhbWVfLndpZHRoLCAyKSArIE1hdGgucG93KHRoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICB9O1xuXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpID8gbWF4RGltIDogZ2V0Qm91bmRlZFJhZGl1cygpO1xuXG4gICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICB0aGlzLmluaXRpYWxTaXplXyA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICB0aGlzLmZnU2NhbGVfID0gdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG5cbiAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgdXBkYXRlTGF5b3V0Q3NzVmFyc18oKSB7XG4gICAgY29uc3Qge1xuICAgICAgVkFSX0ZHX1NJWkUsIFZBUl9MRUZULCBWQVJfVE9QLCBWQVJfRkdfU0NBTEUsXG4gICAgfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIGAke3RoaXMuaW5pdGlhbFNpemVffXB4YCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnR9cHhgKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcH1weGApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXRVbmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgY29uc3Qge1VOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRm9jdXMoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKSk7XG4gIH1cblxuICBoYW5kbGVCbHVyKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCBNRENSaXBwbGVGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQGV4dGVuZHMgTURDQ29tcG9uZW50PCFNRENSaXBwbGVGb3VuZGF0aW9uPlxuICovXG5jbGFzcyBNRENSaXBwbGUgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKiogQHBhcmFtIHsuLi4/fSBhcmdzICovXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHt7aXNVbmJvdW5kZWQ6IChib29sZWFufHVuZGVmaW5lZCl9PX0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QsIHtpc1VuYm91bmRlZCA9IHVuZGVmaW5lZH0gPSB7fSkge1xuICAgIGNvbnN0IHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgLy8gT25seSBvdmVycmlkZSB1bmJvdW5kZWQgYmVoYXZpb3IgaWYgb3B0aW9uIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgaWYgKGlzVW5ib3VuZGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSAvKiogQHR5cGUge2Jvb2xlYW59ICovIChpc1VuYm91bmRlZCk7XG4gICAgfVxuICAgIHJldHVybiByaXBwbGU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshUmlwcGxlQ2FwYWJsZVN1cmZhY2V9IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUFkYXB0ZXIoaW5zdGFuY2UpIHtcbiAgICBjb25zdCBNQVRDSEVTID0gdXRpbC5nZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyksXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gaW5zdGFuY2UudW5ib3VuZGVkLFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiBpbnN0YW5jZS5yb290X1tNQVRDSEVTXSgnOmFjdGl2ZScpLFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IGluc3RhbmNlLmRpc2FibGVkLFxuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiAodGFyZ2V0KSA9PiBpbnN0YW5jZS5yb290Xy5jb250YWlucyh0YXJnZXQpLFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpLFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gaW5zdGFuY2Uucm9vdF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAoe3g6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0fSksXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgdW5ib3VuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0IHVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICB0aGlzLnVuYm91bmRlZF8gPSBCb29sZWFuKHVuYm91bmRlZCk7XG4gICAgdGhpcy5zZXRVbmJvdW5kZWRfKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc3VyZSBDb21waWxlciB0aHJvd3MgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3Igd2hlbiBkaXJlY3RseSBhY2Nlc3NpbmcgYVxuICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICogQnkgYWNjZXNzaW5nIHRoZSBwcm90ZWN0ZWQgcHJvcGVydHkgaW5zaWRlIGEgbWV0aG9kLCB3ZSBzb2x2ZSB0aGF0IHByb2JsZW0uXG4gICAqIFRoYXQncyB3aHkgdGhpcyBmdW5jdGlvbiBleGlzdHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRVbmJvdW5kZWRfKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VW5ib3VuZGVkKHRoaXMudW5ib3VuZGVkXyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUZvdW5kYXRpb259XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMudW5ib3VuZGVkID0gJ21kY1JpcHBsZUlzVW5ib3VuZGVkJyBpbiB0aGlzLnJvb3RfLmRhdGFzZXQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTZWUgTWF0ZXJpYWwgRGVzaWduIHNwZWMgZm9yIG1vcmUgZGV0YWlscyBvbiB3aGVuIHRvIHVzZSByaXBwbGVzLlxuICogaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL21vdGlvbi9jaG9yZW9ncmFwaHkuaHRtbCNjaG9yZW9ncmFwaHktY3JlYXRpb25cbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgUmlwcGxlQ2FwYWJsZVN1cmZhY2Uge31cblxuLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLnJvb3RfO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgYmxlZWRzIG91dCBvZiB0aGUgYm91bmRzIG9mIHRoZSBlbGVtZW50LlxuICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUudW5ib3VuZGVkO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgaXMgYXR0YWNoZWQgdG8gYSBkaXNhYmxlZCBjb21wb25lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS5kaXNhYmxlZDtcblxuZXhwb3J0IHtNRENSaXBwbGUsIE1EQ1JpcHBsZUZvdW5kYXRpb24sIFJpcHBsZUNhcGFibGVTdXJmYWNlLCB1dGlsfTtcbiIsIi8vIGltcG9ydCBNRENSaXBwbGVGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbidcbi8vIGltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2Rpc3QvbWRjLnJpcHBsZSdcbmltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2luZGV4J1xuaW1wb3J0IHtcbiAgc3VwcG9ydHNDc3NWYXJpYWJsZXMsXG4gIGdldE1hdGNoZXNQcm9wZXJ0eSxcbiAgYXBwbHlQYXNzaXZlXG59IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvdXRpbCdcblxuZXhwb3J0IGNsYXNzIFJpcHBsZUJhc2UgZXh0ZW5kcyBNRENSaXBwbGVGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBNQVRDSEVTKCkge1xuICAgIC8qIGdsb2JhbCBIVE1MRWxlbWVudCAqL1xuICAgIHJldHVybiAoXG4gICAgICBSaXBwbGVCYXNlLl9tYXRjaGVzIHx8XG4gICAgICAoUmlwcGxlQmFzZS5fbWF0Y2hlcyA9IGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpKVxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cmZhY2VBY3RpdmUocmVmKSB7XG4gICAgcmV0dXJuIHJlZltSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZtLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbFtSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRkZWxldGUodm0uY2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogdGFyZ2V0ID0+IHZtLiRlbC5jb250YWlucyh0YXJnZXQpLFxuICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uc3R5bGVzLCB2YXJOYW1lLCB2YWx1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFJpcHBsZU1peGluID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzKVxuICAgIHRoaXMucmlwcGxlLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxjdXN0b20tZWxlbWVudCBcbiAgICA6dGFnPVwidGFnXCIgXG4gICAgOmNsYXNzZXM9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGVzPVwic3R5bGVzXCIgXG4gICAgY2xhc3M9XCJtZGMtcmlwcGxlXCI+XG4gICAgPHNsb3QgLz5cbiAgPC9jdXN0b20tZWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBDdXN0b21FbGVtZW50TWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlTWl4aW4gfSBmcm9tICcuL21kYy1yaXBwbGUtYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXJpcHBsZScsXG4gIG1peGluczogW0N1c3RvbUVsZW1lbnRNaXhpbiwgUmlwcGxlTWl4aW5dLFxuICBwcm9wczoge1xuICAgIHRhZzogU3RyaW5nXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8Y3VzdG9tLWxpbmtcbiAgICA6bGluaz1cImxpbmtcIlxuICAgIDpjbGFzcz1cIltjbGFzc2VzLCBpdGVtQ2xhc3Nlc11cIlxuICAgIDpzdHlsZT1cInN0eWxlc1wiXG4gICAgY2xhc3M9XCJtZGMtZHJhd2VyLWl0ZW0gbWRjLWxpc3QtaXRlbVwiXG4gICAgdi1vbj1cIm15bGlzdGVuZXJzXCJcbiAgPlxuICAgIDxzcGFuIHYtaWY9XCJoYXNTdGFydERldGFpbFwiIGNsYXNzPVwibWRjLWxpc3QtaXRlbV9fZ3JhcGhpY1wiPlxuICAgICAgPHNsb3QgbmFtZT1cInN0YXJ0LWRldGFpbFwiPlxuICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+e3sgc3RhcnRJY29uIH19PC9pPlxuICAgICAgPC9zbG90PlxuICAgIDwvc3Bhbj5cbiAgICA8c2xvdCAvPlxuICA8L2N1c3RvbS1saW5rPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IERpc3BhdGNoRXZlbnRNaXhpbiwgQ3VzdG9tTGlua01peGluIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IFJpcHBsZUJhc2UgfSBmcm9tICcuLi9yaXBwbGUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1kcmF3ZXItaXRlbScsXG4gIGluamVjdDogWydtZGNEcmF3ZXInXSxcbiAgbWl4aW5zOiBbRGlzcGF0Y2hFdmVudE1peGluLCBDdXN0b21MaW5rTWl4aW5dLFxuICBwcm9wczoge1xuICAgIHN0YXJ0SWNvbjogU3RyaW5nLFxuICAgIG1vZGFsQ2xvc2U6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICBhY3RpdmF0ZWQ6IEJvb2xlYW4sXG4gICAgZXhhY3RBY3RpdmVDbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ21kYy1saXN0LWl0ZW0tLWFjdGl2YXRlZCdcbiAgICB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBteWxpc3RlbmVycygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMuJGxpc3RlbmVycyxcbiAgICAgICAgY2xpY2s6IGUgPT4ge1xuICAgICAgICAgIHRoaXMubWRjRHJhd2VyLmlzTW9kYWwgJiYgdGhpcy5tb2RhbENsb3NlICYmIHRoaXMubWRjRHJhd2VyLmNsb3NlKClcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgaXRlbUNsYXNzZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnbWRjLWxpc3QtaXRlbS0tYWN0aXZhdGVkJzogdGhpcy5hY3RpdmF0ZWRcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhc1N0YXJ0RGV0YWlsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhcnRJY29uIHx8IHRoaXMuJHNsb3RzWydzdGFydC1kZXRhaWwnXVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5yaXBwbGUgJiYgdGhpcy5yaXBwbGUuZGVzdHJveSgpXG4gICAgdGhpcy5yaXBwbGUgPSBudWxsXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8aHIgY2xhc3M9XCJtZGMtbGlzdC1kaXZpZGVyXCI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWRyYXdlci1kaXZpZGVyJ1xufVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBtZGNEcmF3ZXIgZnJvbSAnLi9tZGMtZHJhd2VyLnZ1ZSdcbmltcG9ydCBtZGNEcmF3ZXJIZWFkZXIgZnJvbSAnLi9tZGMtZHJhd2VyLWhlYWRlci52dWUnXG5pbXBvcnQgbWRjRHJhd2VyTGlzdCBmcm9tICcuL21kYy1kcmF3ZXItbGlzdC52dWUnXG5pbXBvcnQgbWRjRHJhd2VySXRlbSBmcm9tICcuL21kYy1kcmF3ZXItaXRlbS52dWUnXG5pbXBvcnQgbWRjRHJhd2VyRGl2aWRlciBmcm9tICcuL21kYy1kcmF3ZXItZGl2aWRlci52dWUnXG5cbmV4cG9ydCB7XG4gIG1kY0RyYXdlcixcbiAgbWRjRHJhd2VySGVhZGVyLFxuICBtZGNEcmF3ZXJMaXN0LFxuICBtZGNEcmF3ZXJJdGVtLFxuICBtZGNEcmF3ZXJEaXZpZGVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VQbHVnaW4oe1xuICBtZGNEcmF3ZXIsXG4gIG1kY0RyYXdlckhlYWRlcixcbiAgbWRjRHJhd2VyTGlzdCxcbiAgbWRjRHJhd2VySXRlbSxcbiAgbWRjRHJhd2VyRGl2aWRlclxufSlcbiIsImltcG9ydCAnLi9zdHlsZXMuc2NzcydcbmltcG9ydCB7IGF1dG9Jbml0IH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBwbHVnaW4gZnJvbSAnLi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG5hdXRvSW5pdChwbHVnaW4pXG4iXSwibmFtZXMiOlsiYXV0b0luaXQiLCJwbHVnaW4iLCJfVnVlIiwid2luZG93IiwiVnVlIiwiZ2xvYmFsIiwidXNlIiwiQmFzZVBsdWdpbiIsImNvbXBvbmVudHMiLCJ2ZXJzaW9uIiwiaW5zdGFsbCIsInZtIiwia2V5IiwiY29tcG9uZW50IiwibmFtZSIsIkN1c3RvbUVsZW1lbnQiLCJmdW5jdGlvbmFsIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJwcm9wcyIsImlzIiwidGFnIiwiZGF0YSIsImNoaWxkcmVuIiwiQ3VzdG9tRWxlbWVudE1peGluIiwiQ3VzdG9tTGluayIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwibGluayIsIk9iamVjdCIsImgiLCJlbGVtZW50IiwicGFyZW50IiwiJHJvdXRlciIsIiRyb290IiwiJG9wdGlvbnMiLCJvbiIsImNsaWNrIiwibmF0aXZlT24iLCJDdXN0b21MaW5rTWl4aW4iLCJ0byIsImV4YWN0IiwiQm9vbGVhbiIsImFwcGVuZCIsInJlcGxhY2UiLCJhY3RpdmVDbGFzcyIsImV4YWN0QWN0aXZlQ2xhc3MiLCJjb21wdXRlZCIsIkRpc3BhdGNoRXZlbnRNaXhpbiIsImV2ZW50IiwiQXJyYXkiLCJtZXRob2RzIiwiZGlzcGF0Y2hFdmVudCIsImV2dCIsIiRlbWl0IiwidGFyZ2V0IiwiZXZlbnRUYXJnZXQiLCJhcmdzIiwiZXZlbnRBcmdzIiwibGlzdGVuZXJzIiwiJGxpc3RlbmVycyIsImUiLCJzY29wZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiTURDRHJhd2VyQWRhcHRlciIsImNsYXNzTmFtZSIsIk1EQ0ZvdW5kYXRpb24iLCJhZGFwdGVyIiwiYWRhcHRlcl8iLCJjc3NDbGFzc2VzIiwiUk9PVCIsIkRJU01JU1NJQkxFIiwiTU9EQUwiLCJPUEVOIiwiQU5JTUFURSIsIk9QRU5JTkciLCJDTE9TSU5HIiwic3RyaW5ncyIsIkFQUF9DT05URU5UX1NFTEVDVE9SIiwiU0NSSU1fU0VMRUNUT1IiLCJDTE9TRV9FVkVOVCIsIk9QRU5fRVZFTlQiLCJNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24iLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJlbGVtZW50SGFzQ2xhc3MiLCJub3RpZnlDbG9zZSIsIm5vdGlmeU9wZW4iLCJzYXZlRm9jdXMiLCJyZXN0b3JlRm9jdXMiLCJmb2N1c0FjdGl2ZU5hdmlnYXRpb25JdGVtIiwidHJhcEZvY3VzIiwicmVsZWFzZUZvY3VzIiwiZGVmYXVsdEFkYXB0ZXIiLCJhbmltYXRpb25GcmFtZV8iLCJhbmltYXRpb25UaW1lcl8iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyVGltZW91dCIsImlzT3BlbiIsImlzT3BlbmluZyIsImlzQ2xvc2luZyIsInJ1bk5leHRBbmltYXRpb25GcmFtZV8iLCJrZXlDb2RlIiwiaXNFc2NhcGUiLCJjbG9zZSIsImlzRWxlbWVudCIsIkVsZW1lbnQiLCJjbG9zZWQiLCJvcGVuZWQiLCJjYWxsYmFjayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJNRENNb2RhbERyYXdlckZvdW5kYXRpb24iLCJNRENDb21wb25lbnQiLCJyb290IiwiZm91bmRhdGlvbiIsInVuZGVmaW5lZCIsInJvb3RfIiwiaW5pdGlhbGl6ZSIsImZvdW5kYXRpb25fIiwiZ2V0RGVmYXVsdEZvdW5kYXRpb24iLCJpbml0IiwiaW5pdGlhbFN5bmNXaXRoRE9NIiwiRXJyb3IiLCJkZXN0cm95IiwiZXZ0VHlwZSIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2dERhdGEiLCJzaG91bGRCdWJibGUiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImJ1YmJsZXMiLCJkb2N1bWVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiTURDTGlzdEFkYXB0ZXIiLCJpbmRleCIsImF0dHJpYnV0ZSIsInZhbHVlIiwibGlzdEl0ZW1JbmRleCIsInRhYkluZGV4VmFsdWUiLCJlbGUiLCJpc0NoZWNrZWQiLCJMSVNUX0lURU1fQ0xBU1MiLCJMSVNUX0lURU1fU0VMRUNURURfQ0xBU1MiLCJMSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTIiwiQVJJQV9PUklFTlRBVElPTiIsIkFSSUFfT1JJRU5UQVRJT05fSE9SSVpPTlRBTCIsIkFSSUFfU0VMRUNURUQiLCJBUklBX0NIRUNLRUQiLCJBUklBX0NIRUNLRURfUkFESU9fU0VMRUNUT1IiLCJSQURJT19TRUxFQ1RPUiIsIkNIRUNLQk9YX1NFTEVDVE9SIiwiQ0hFQ0tCT1hfUkFESU9fU0VMRUNUT1IiLCJDSElMRF9FTEVNRU5UU19UT19UT0dHTEVfVEFCSU5ERVgiLCJGT0NVU0FCTEVfQ0hJTERfRUxFTUVOVFMiLCJFTkFCTEVEX0lURU1TX1NFTEVDVE9SIiwiRUxFTUVOVFNfS0VZX0FMTE9XRURfSU4iLCJNRENMaXN0Rm91bmRhdGlvbiIsImdldExpc3RJdGVtQ291bnQiLCJnZXRGb2N1c2VkRWxlbWVudEluZGV4Iiwic2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4IiwicmVtb3ZlQXR0cmlidXRlRm9yRWxlbWVudEluZGV4IiwiYWRkQ2xhc3NGb3JFbGVtZW50SW5kZXgiLCJyZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleCIsImZvY3VzSXRlbUF0SW5kZXgiLCJzZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW4iLCJmb2xsb3dIcmVmIiwiaGFzUmFkaW9BdEluZGV4IiwiaGFzQ2hlY2tib3hBdEluZGV4IiwiaXNDaGVja2JveENoZWNrZWRBdEluZGV4Iiwic2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXgiLCJ3cmFwRm9jdXNfIiwiaXNWZXJ0aWNhbF8iLCJpc1NpbmdsZVNlbGVjdGlvbkxpc3RfIiwic2VsZWN0ZWRJbmRleF8iLCJ1c2VBY3RpdmF0ZWRDbGFzc18iLCJ1c2VBY3RpdmF0ZWQiLCJzZXRBcmlhQXR0cmlidXRlc0ZvckNoZWNrYm94XyIsInNldEFyaWFBdHRyaWJ1dGVzRm9yUmFkaW9fIiwic2V0QXJpYUF0dHJpYnV0ZXNGb3JTaW5nbGVTZWxlY3RfIiwic2V0Q2xhc3NOYW1lc0ZvclNpbmdsZVNlbGVjdF8iLCJhcmlhQXR0cmlidXRlVmFsdWUiLCJzZWxlY3RlZENsYXNzTmFtZSIsImlzUm9vdExpc3RJdGVtIiwiYXJyb3dMZWZ0IiwiYXJyb3dVcCIsImFycm93UmlnaHQiLCJhcnJvd0Rvd24iLCJpc0hvbWUiLCJpc0VuZCIsImlzRW50ZXIiLCJpc1NwYWNlIiwiY3VycmVudEluZGV4IiwicHJldmVudERlZmF1bHRFdmVudF8iLCJmb2N1c05leHRFbGVtZW50IiwiZm9jdXNQcmV2RWxlbWVudCIsImZvY3VzRmlyc3RFbGVtZW50IiwiZm9jdXNMYXN0RWxlbWVudCIsImhhc0NoZWNrYm94T3JSYWRpbyIsImhhc0NoZWNrYm94T3JSYWRpb0F0SW5kZXhfIiwidG9nZ2xlQ2hlY2tib3hPclJhZGlvQXRJbmRleF8iLCJzZXRTZWxlY3RlZEluZGV4IiwidG9nZ2xlQ2hlY2tib3giLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwicHJldmVudERlZmF1bHQiLCJjb3VudCIsIm5leHRJbmRleCIsInByZXZJbmRleCIsImxhc3RJbmRleCIsIm1hdGNoZXMiLCJzZWxlY3RvciIsIm5hdGl2ZU1hdGNoZXMiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsImNhbGwiLCJNRENMaXN0IiwiaGFuZGxlS2V5ZG93bl8iLCJoYW5kbGVDbGlja18iLCJmb2N1c0luRXZlbnRMaXN0ZW5lcl8iLCJmb2N1c091dEV2ZW50TGlzdGVuZXJfIiwiaGFuZGxlQ2xpY2tFdmVudF8iLCJiaW5kIiwiaGFuZGxlS2V5ZG93bkV2ZW50XyIsImhhbmRsZUZvY3VzSW5FdmVudF8iLCJoYW5kbGVGb2N1c091dEV2ZW50XyIsImxheW91dCIsImluaXRpYWxpemVMaXN0VHlwZSIsImRpcmVjdGlvbiIsImdldEF0dHJpYnV0ZSIsInZlcnRpY2FsIiwic2xpY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCIsImxpc3RFbGVtZW50cyIsImdldExpc3RJdGVtSW5kZXhfIiwiaGFuZGxlRm9jdXNJbiIsImhhbmRsZUZvY3VzT3V0IiwiaGFuZGxlS2V5ZG93biIsImhhbmRsZUNsaWNrIiwicHJlc2VsZWN0ZWRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInNldFVzZUFjdGl2YXRlZENsYXNzIiwic2luZ2xlU2VsZWN0aW9uIiwic2VsZWN0ZWRJbmRleCIsImxlbmd0aCIsImFjdGl2ZUVsZW1lbnQiLCJhdHRyIiwicmVtb3ZlQXR0cmlidXRlIiwiYWRkIiwicmVtb3ZlIiwiZm9jdXMiLCJsaXN0SXRlbUNoaWxkcmVuIiwibGlzdEl0ZW0iLCJocmVmIiwidG9nZ2xlRWwiLCJjaGVja2VkIiwiaW5pdEV2ZW50Iiwic2V0VmVydGljYWxPcmllbnRhdGlvbiIsInNldFdyYXBGb2N1cyIsImlzU2luZ2xlU2VsZWN0aW9uTGlzdCIsInNldFNpbmdsZVNlbGVjdGlvbiIsImNhbmRpZGF0ZVNlbGVjdG9ycyIsImNhbmRpZGF0ZVNlbGVjdG9yIiwiam9pbiIsInByb3RvdHlwZSIsInRhYmJhYmxlIiwiZWwiLCJvcHRpb25zIiwiZWxlbWVudERvY3VtZW50Iiwib3duZXJEb2N1bWVudCIsInJlZ3VsYXJUYWJiYWJsZXMiLCJvcmRlcmVkVGFiYmFibGVzIiwidW50b3VjaGFiaWxpdHlDaGVja2VyIiwiVW50b3VjaGFiaWxpdHlDaGVja2VyIiwiY2FuZGlkYXRlcyIsImluY2x1ZGVDb250YWluZXIiLCJhcHBseSIsInVuc2hpZnQiLCJpIiwiY2FuZGlkYXRlIiwiY2FuZGlkYXRlVGFiaW5kZXgiLCJpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUiLCJnZXRUYWJpbmRleCIsInB1c2giLCJkb2N1bWVudE9yZGVyIiwidGFiSW5kZXgiLCJub2RlIiwidGFiYmFibGVOb2RlcyIsInNvcnQiLCJzb3J0T3JkZXJlZFRhYmJhYmxlcyIsIm1hcCIsImEiLCJjb25jYXQiLCJpc1RhYmJhYmxlIiwiaXNGb2N1c2FibGUiLCJpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlIiwiaXNOb25UYWJiYWJsZVJhZGlvIiwiZGlzYWJsZWQiLCJpc0hpZGRlbklucHV0IiwiaXNVbnRvdWNoYWJsZSIsImZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yIiwidGFiaW5kZXhBdHRyIiwicGFyc2VJbnQiLCJpc05hTiIsImlzQ29udGVudEVkaXRhYmxlIiwiYiIsImZpbmQiLCJsaXN0IiwicHJlZGljYXRlIiwiY29udGVudEVkaXRhYmxlIiwiaXNJbnB1dCIsImlzUmFkaW8iLCJpc1RhYmJhYmxlUmFkaW8iLCJnZXRDaGVja2VkUmFkaW8iLCJub2RlcyIsInJhZGlvU2V0IiwiZG9jIiwiY2FjaGUiLCJoYXNEaXNwbGF5Tm9uZSIsIm5vZGVDb21wdXRlZFN0eWxlIiwiZG9jdW1lbnRFbGVtZW50IiwiY2FjaGVkIiwiaXRlbSIsImRlZmF1bHRWaWV3IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInJlc3VsdCIsImRpc3BsYXkiLCJwYXJlbnROb2RlIiwiY29tcHV0ZWRTdHlsZSIsInZpc2liaWxpdHkiLCJtb2R1bGUiLCJleHRlbmQiLCJoYXNPd25Qcm9wZXJ0eSIsImFyZ3VtZW50cyIsInNvdXJjZSIsImFjdGl2ZUZvY3VzVHJhcHMiLCJ0cmFwUXVldWUiLCJhY3RpdmF0ZVRyYXAiLCJ0cmFwIiwiYWN0aXZlVHJhcCIsInBhdXNlIiwidHJhcEluZGV4Iiwic3BsaWNlIiwiZGVhY3RpdmF0ZVRyYXAiLCJ1bnBhdXNlIiwiZm9jdXNUcmFwIiwidXNlck9wdGlvbnMiLCJjb250YWluZXIiLCJjb25maWciLCJ4dGVuZCIsInJldHVybkZvY3VzT25EZWFjdGl2YXRlIiwiZXNjYXBlRGVhY3RpdmF0ZXMiLCJzdGF0ZSIsImZpcnN0VGFiYmFibGVOb2RlIiwibGFzdFRhYmJhYmxlTm9kZSIsIm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbiIsIm1vc3RSZWNlbnRseUZvY3VzZWROb2RlIiwiYWN0aXZlIiwicGF1c2VkIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiYWN0aXZhdGVPcHRpb25zIiwidXBkYXRlVGFiYmFibGVOb2RlcyIsIm9uQWN0aXZhdGUiLCJhZGRMaXN0ZW5lcnMiLCJkZWFjdGl2YXRlT3B0aW9ucyIsInJlbW92ZUxpc3RlbmVycyIsIm9uRGVhY3RpdmF0ZSIsInJldHVybkZvY3VzIiwiZGVsYXkiLCJ0cnlGb2N1cyIsImdldEluaXRpYWxGb2N1c05vZGUiLCJjaGVja0ZvY3VzSW4iLCJjaGVja1BvaW50ZXJEb3duIiwiY2hlY2tDbGljayIsImNoZWNrS2V5IiwiZ2V0Tm9kZUZvck9wdGlvbiIsIm9wdGlvbk5hbWUiLCJvcHRpb25WYWx1ZSIsImNsaWNrT3V0c2lkZURlYWN0aXZhdGVzIiwiRG9jdW1lbnQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJpc0VzY2FwZUV2ZW50IiwiaXNUYWJFdmVudCIsImNoZWNrVGFiIiwic2hpZnRLZXkiLCJpc1NlbGVjdGFibGVJbnB1dCIsInNlbGVjdCIsImZuIiwiTURDUmlwcGxlQWRhcHRlciIsInZhck5hbWUiLCJVTkJPVU5ERUQiLCJCR19GT0NVU0VEIiwiRkdfQUNUSVZBVElPTiIsIkZHX0RFQUNUSVZBVElPTiIsIlZBUl9MRUZUIiwiVkFSX1RPUCIsIlZBUl9GR19TSVpFIiwiVkFSX0ZHX1NDQUxFIiwiVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCIsIlZBUl9GR19UUkFOU0xBVEVfRU5EIiwibnVtYmVycyIsIlBBRERJTkciLCJJTklUSUFMX09SSUdJTl9TQ0FMRSIsIkRFQUNUSVZBVElPTl9USU1FT1VUX01TIiwiRkdfREVBQ1RJVkFUSU9OX01TIiwiVEFQX0RFTEFZX01TIiwic3VwcG9ydHNDc3NWYXJpYWJsZXNfIiwic3VwcG9ydHNQYXNzaXZlXyIsImRldGVjdEVkZ2VQc2V1ZG9WYXJCdWciLCJ3aW5kb3dPYmoiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJoYXNQc2V1ZG9WYXJCdWciLCJib3JkZXJUb3BTdHlsZSIsInN1cHBvcnRzQ3NzVmFyaWFibGVzIiwiZm9yY2VSZWZyZXNoIiwic3VwcG9ydHNGdW5jdGlvblByZXNlbnQiLCJDU1MiLCJzdXBwb3J0cyIsImV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMiLCJ3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMiLCJhcHBseVBhc3NpdmUiLCJnbG9iYWxPYmoiLCJpc1N1cHBvcnRlZCIsInBhc3NpdmUiLCJnZXRNYXRjaGVzUHJvcGVydHkiLCJIVE1MRWxlbWVudFByb3RvdHlwZSIsIm1hdGNoZXNNZXRob2RzIiwibWV0aG9kIiwibWF0Y2hlc01ldGhvZCIsImdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyIsImV2IiwicGFnZU9mZnNldCIsImNsaWVudFJlY3QiLCJ4IiwieSIsImRvY3VtZW50WCIsImxlZnQiLCJkb2N1bWVudFkiLCJ0b3AiLCJub3JtYWxpemVkWCIsIm5vcm1hbGl6ZWRZIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiQUNUSVZBVElPTl9FVkVOVF9UWVBFUyIsIlBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTIiwiYWN0aXZhdGVkVGFyZ2V0cyIsIk1EQ1JpcHBsZUZvdW5kYXRpb24iLCJicm93c2VyU3VwcG9ydHNDc3NWYXJzIiwiaXNVbmJvdW5kZWQiLCJpc1N1cmZhY2VBY3RpdmUiLCJpc1N1cmZhY2VEaXNhYmxlZCIsImNvbnRhaW5zRXZlbnRUYXJnZXQiLCJyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyIiwiZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwiZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJ1cGRhdGVDc3NWYXJpYWJsZSIsImNvbXB1dGVCb3VuZGluZ1JlY3QiLCJnZXRXaW5kb3dQYWdlT2Zmc2V0IiwibGF5b3V0RnJhbWVfIiwiZnJhbWVfIiwid2lkdGgiLCJoZWlnaHQiLCJhY3RpdmF0aW9uU3RhdGVfIiwiZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8iLCJpbml0aWFsU2l6ZV8iLCJtYXhSYWRpdXNfIiwiYWN0aXZhdGVIYW5kbGVyXyIsImFjdGl2YXRlXyIsImRlYWN0aXZhdGVIYW5kbGVyXyIsImRlYWN0aXZhdGVfIiwiZm9jdXNIYW5kbGVyXyIsImhhbmRsZUZvY3VzIiwiYmx1ckhhbmRsZXJfIiwiaGFuZGxlQmx1ciIsInJlc2l6ZUhhbmRsZXJfIiwidW5ib3VuZGVkQ29vcmRzXyIsImZnU2NhbGVfIiwiYWN0aXZhdGlvblRpbWVyXyIsImZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyIsImFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8iLCJhY3RpdmF0aW9uVGltZXJDYWxsYmFja18iLCJydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8iLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudF8iLCJpc0FjdGl2YXRlZCIsImhhc0RlYWN0aXZhdGlvblVYUnVuIiwid2FzQWN0aXZhdGVkQnlQb2ludGVyIiwid2FzRWxlbWVudE1hZGVBY3RpdmUiLCJhY3RpdmF0aW9uRXZlbnQiLCJpc1Byb2dyYW1tYXRpYyIsInN1cHBvcnRzUHJlc3NSaXBwbGUiLCJzdXBwb3J0c1ByZXNzUmlwcGxlXyIsInJlZ2lzdGVyUm9vdEhhbmRsZXJzXyIsImxheW91dEludGVybmFsXyIsInJlbW92ZUNzc1ZhcnNfIiwiZGVyZWdpc3RlclJvb3RIYW5kbGVyc18iLCJkZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfIiwia2V5cyIsImsiLCJhY3RpdmF0aW9uU3RhdGUiLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudCIsImlzU2FtZUludGVyYWN0aW9uIiwiaGFzQWN0aXZhdGVkQ2hpbGQiLCJzb21lIiwicmVzZXRBY3RpdmF0aW9uU3RhdGVfIiwicmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18iLCJjaGVja0VsZW1lbnRNYWRlQWN0aXZlXyIsImFuaW1hdGVBY3RpdmF0aW9uXyIsInRyYW5zbGF0ZVN0YXJ0IiwidHJhbnNsYXRlRW5kIiwiZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXyIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXyIsImFjdGl2YXRpb25IYXNFbmRlZCIsImFuaW1hdGVEZWFjdGl2YXRpb25fIiwibWF4RGltIiwibWF4IiwiZ2V0Qm91bmRlZFJhZGl1cyIsImh5cG90ZW51c2UiLCJzcXJ0IiwicG93IiwidXBkYXRlTGF5b3V0Q3NzVmFyc18iLCJyb3VuZCIsInVuYm91bmRlZCIsIk1EQ1JpcHBsZSIsInVuYm91bmRlZF8iLCJzZXRVbmJvdW5kZWQiLCJjcmVhdGVBZGFwdGVyIiwiZGF0YXNldCIsInNldFVuYm91bmRlZF8iLCJyaXBwbGUiLCJpbnN0YW5jZSIsIk1BVENIRVMiLCJ1dGlsIiwiSFRNTEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsIlJpcHBsZUNhcGFibGVTdXJmYWNlIiwiUmlwcGxlQmFzZSIsInJlZiIsIl9tYXRjaGVzIiwiJGVsIiwiJHNldCIsImNsYXNzZXMiLCIkZGVsZXRlIiwic3R5bGVzIiwiUmlwcGxlTWl4aW4iLCJtb3VudGVkIiwiYmVmb3JlRGVzdHJveSIsIm1kY0RyYXdlciIsIm1kY0RyYXdlckhlYWRlciIsIm1kY0RyYXdlckxpc3QiLCJtZGNEcmF3ZXJJdGVtIiwibWRjRHJhd2VyRGl2aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUFPLFNBQVNBLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0lBQy9CO0lBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0lBQ0EsTUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0lBQ2pDRCxJQUFBQSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBZDtJQUNELEdBRkQsTUFFTyxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7SUFDeEM7SUFDQUgsSUFBQUEsSUFBSSxHQUFHRyxNQUFNLENBQUNELEdBQWQ7SUFDRDs7SUFDRCxNQUFJRixJQUFKLEVBQVU7SUFDUkEsSUFBQUEsSUFBSSxDQUFDSSxHQUFMLENBQVNMLE1BQVQ7SUFDRDtJQUNGOztJQ1pNLFNBQVNNLFVBQVQsQ0FBb0JDLFVBQXBCLEVBQWdDO0lBQ3JDLFNBQU87SUFDTEMsSUFBQUEsT0FBTyxFQUFFLGFBREo7SUFFTEMsSUFBQUEsT0FBTyxFQUFFLGlCQUFBQyxFQUFFLEVBQUk7SUFDYixXQUFLLElBQUlDLEdBQVQsSUFBZ0JKLFVBQWhCLEVBQTRCO0lBQzFCLFlBQUlLLFNBQVMsR0FBR0wsVUFBVSxDQUFDSSxHQUFELENBQTFCO0lBQ0FELFFBQUFBLEVBQUUsQ0FBQ0UsU0FBSCxDQUFhQSxT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
