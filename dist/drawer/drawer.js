/**
* @module vue-mdc-adapterdrawer 0.19.4-beta
* @exports VueMDCDrawer
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.44.0","material-components-web":"^0.44.0"}
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
          element = context.parent.$root.$options.components['RouterLink'];
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
            this.closed();
            this.adapter_.restoreFocus();
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
         * Notifies user action on list item.
         */

      }, {
        key: "notifyAction",
        value: function notifyAction(index) {}
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
      ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
      ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
      RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)',
      CHECKBOX_SELECTOR: 'input[type="checkbox"]:not(:disabled)',
      CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
      CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: ".".concat(cssClasses$1.LIST_ITEM_CLASS, " button:not(:disabled),\n  .").concat(cssClasses$1.LIST_ITEM_CLASS, " a"),
      FOCUSABLE_CHILD_ELEMENTS: ".".concat(cssClasses$1.LIST_ITEM_CLASS, " button:not(:disabled), .").concat(cssClasses$1.LIST_ITEM_CLASS, " a,\n  .").concat(cssClasses$1.LIST_ITEM_CLASS, " input[type=\"radio\"]:not(:disabled),\n  .").concat(cssClasses$1.LIST_ITEM_CLASS, " input[type=\"checkbox\"]:not(:disabled)"),
      ENABLED_ITEMS_SELECTOR: '.mdc-list-item:not(.mdc-list-item--disabled)',
      ACTION_EVENT: 'MDCList:action'
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
              hasRadioAtIndex: function hasRadioAtIndex() {},
              hasCheckboxAtIndex: function hasCheckboxAtIndex() {},
              isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex() {},
              setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex() {},
              notifyAction: function notifyAction() {},
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
              // Return early if enter key is pressed on anchor element which triggers synthetic MouseEvent event.
              if (evt.target.tagName === 'A' && isEnter) return;
              this.preventDefaultEvent_(evt);

              if (this.isSelectableList_()) {
                this.setSelectedIndexOnAction_(currentIndex);
              }

              this.adapter_.notifyAction(currentIndex);
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

          this.adapter_.notifyAction(index);
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
          var selectedClassName = cssClasses$1.LIST_ITEM_SELECTED_CLASS;

          if (this.useActivatedClass_) {
            selectedClassName = cssClasses$1.LIST_ITEM_ACTIVATED_CLASS;
          }

          if (this.selectedIndex_ >= 0 && this.selectedIndex_ !== index) {
            this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
            this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings$1.ARIA_SELECTED, 'false');
          }

          this.adapter_.addClassForElementIndex(index, selectedClassName);
          this.adapter_.setAttributeForElementIndex(index, strings$1.ARIA_SELECTED, 'true');
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
            this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings$1.ARIA_CHECKED, 'false');
          }

          this.adapter_.setAttributeForElementIndex(index, strings$1.ARIA_CHECKED, 'true');
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
            this.adapter_.setAttributeForElementIndex(i, strings$1.ARIA_CHECKED, isChecked ? 'true' : 'false');
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

          this.adapter_.setAttributeForElementIndex(index, strings$1.ARIA_CHECKED, isChecked ? 'true' : 'false'); // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.

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
        /**
         * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
         */

      }, {
        key: "initializeListType",
        value: function initializeListType() {
          var _this2 = this;

          var checkboxListItems = this.root_.querySelectorAll(strings$1.ARIA_ROLE_CHECKBOX_SELECTOR);
          var singleSelectedListItem = this.root_.querySelector(".".concat(cssClasses$1.LIST_ITEM_ACTIVATED_CLASS, ",\n        .").concat(cssClasses$1.LIST_ITEM_SELECTED_CLASS));
          var radioSelectedListItem = this.root_.querySelector(strings$1.ARIA_CHECKED_RADIO_SELECTOR);

          if (checkboxListItems.length) {
            var preselectedItems = this.root_.querySelectorAll(strings$1.ARIA_CHECKED_CHECKBOX_SELECTOR);
            this.selectedIndex = [].map.call(preselectedItems, function (listItem) {
              return _this2.listElements.indexOf(listItem);
            });
          } else if (singleSelectedListItem) {
            if (singleSelectedListItem.classList.contains(cssClasses$1.LIST_ITEM_ACTIVATED_CLASS)) {
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
              var listItemChildren = [].slice.call(element.querySelectorAll(strings$1.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
              listItemChildren.forEach(function (ele) {
                return ele.setAttribute('tabindex', tabIndexValue);
              });
            },
            hasCheckboxAtIndex: function hasCheckboxAtIndex(index) {
              var listItem = _this3.listElements[index];
              return !!listItem.querySelector(strings$1.CHECKBOX_SELECTOR);
            },
            hasRadioAtIndex: function hasRadioAtIndex(index) {
              var listItem = _this3.listElements[index];
              return !!listItem.querySelector(strings$1.RADIO_SELECTOR);
            },
            isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
              var listItem = _this3.listElements[index];
              var toggleEl = listItem.querySelector(strings$1.CHECKBOX_SELECTOR);
              return toggleEl.checked;
            },
            setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
              var listItem = _this3.listElements[index];
              var toggleEl = listItem.querySelector(strings$1.CHECKBOX_RADIO_SELECTOR);
              toggleEl.checked = isChecked;
              var event = document.createEvent('Event');
              event.initEvent('change', true, true);
              toggleEl.dispatchEvent(event);
            },
            notifyAction: function notifyAction(index) {
              _this3.emit(strings$1.ACTION_EVENT, index,
              /** shouldBubble */
              true);
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
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcDrawer = normalizeComponent_1(
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
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcDrawerHeader = normalizeComponent_1(
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
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcDrawerList = normalizeComponent_1(
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
      /* style inject */
      
      /* style inject SSR */
      

      
      normalizeComponent_1(
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
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcDrawerItem = normalizeComponent_1(
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
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcDrawerDivider = normalizeComponent_1(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXV0by1pbml0LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Jhc2UtcGx1Z2luLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1lbGVtZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1saW5rLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1ldmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9kaXNwYXRjaC1ldmVudC1taXhpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS91bmlxdWVpZC1taXhpbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL2Rpc21pc3NpYmxlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci9tb2RhbC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGlzdC9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGlzdC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vcG9ueWZpbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpc3QvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdGFiYmFibGUvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2ZvY3VzLXRyYXAvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL2RyYXdlci9tZGMtZHJhd2VyLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL21kYy1kcmF3ZXItaGVhZGVyLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL21kYy1kcmF3ZXItbGlzdC52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUtYmFzZS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUudnVlIiwiLi4vLi4vY29tcG9uZW50cy9kcmF3ZXIvbWRjLWRyYXdlci1pdGVtLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL21kYy1kcmF3ZXItZGl2aWRlci52dWUiLCIuLi8uLi9jb21wb25lbnRzL2RyYXdlci9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHtcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIGNvbnRleHQucHJvcHMuaXMgfHwgY29udGV4dC5wcm9wcy50YWcgfHwgJ2RpdicsXG4gICAgICBjb250ZXh0LmRhdGEsXG4gICAgICBjb250ZXh0LmNoaWxkcmVuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50TWl4aW4gPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21FbGVtZW50XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDdXN0b21MaW5rID0ge1xuICBuYW1lOiAnY3VzdG9tLWxpbmsnLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIHRhZzogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdhJyB9LFxuICAgIGxpbms6IE9iamVjdFxuICB9LFxuICByZW5kZXIoaCwgY29udGV4dCkge1xuICAgIGxldCBlbGVtZW50XG4gICAgbGV0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LmRhdGEpXG5cbiAgICBpZiAoY29udGV4dC5wcm9wcy5saW5rICYmIGNvbnRleHQucGFyZW50LiRyb3V0ZXIpIHtcbiAgICAgIC8vIHJvdXRlci1saW5rIGNhc2VcbiAgICAgIGVsZW1lbnQgPSBjb250ZXh0LnBhcmVudC4kcm9vdC4kb3B0aW9ucy5jb21wb25lbnRzWydSb3V0ZXJMaW5rJ11cbiAgICAgIGRhdGEucHJvcHMgPSBPYmplY3QuYXNzaWduKHsgdGFnOiBjb250ZXh0LnByb3BzLnRhZyB9LCBjb250ZXh0LnByb3BzLmxpbmspXG4gICAgICBpZiAoZGF0YS5vbi5jbGljaykge1xuICAgICAgICBkYXRhLm5hdGl2ZU9uID0geyBjbGljazogZGF0YS5vbi5jbGljayB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVsZW1lbnQgZmFsbGJhY2tcbiAgICAgIGVsZW1lbnQgPSBjb250ZXh0LnByb3BzLnRhZ1xuICAgIH1cblxuICAgIHJldHVybiBoKGVsZW1lbnQsIGRhdGEsIGNvbnRleHQuY2hpbGRyZW4pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUxpbmtNaXhpbiA9IHtcbiAgcHJvcHM6IHtcbiAgICB0bzogW1N0cmluZywgT2JqZWN0XSxcbiAgICBleGFjdDogQm9vbGVhbixcbiAgICBhcHBlbmQ6IEJvb2xlYW4sXG4gICAgcmVwbGFjZTogQm9vbGVhbixcbiAgICBhY3RpdmVDbGFzczogU3RyaW5nLFxuICAgIGV4YWN0QWN0aXZlQ2xhc3M6IFN0cmluZ1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpbmsoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLnRvICYmIHtcbiAgICAgICAgICB0bzogdGhpcy50byxcbiAgICAgICAgICBleGFjdDogdGhpcy5leGFjdCxcbiAgICAgICAgICBhcHBlbmQ6IHRoaXMuYXBwZW5kLFxuICAgICAgICAgIHJlcGxhY2U6IHRoaXMucmVwbGFjZSxcbiAgICAgICAgICBhY3RpdmVDbGFzczogdGhpcy5hY3RpdmVDbGFzcyxcbiAgICAgICAgICBleGFjdEFjdGl2ZUNsYXNzOiB0aGlzLmV4YWN0QWN0aXZlQ2xhc3NcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUxpbmtcbiAgfVxufVxuIiwiLyogZ2xvYmFsIEN1c3RvbUV2ZW50ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Q3VzdG9tRXZlbnQoZWwsIGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gIGxldCBldnRcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICBidWJibGVzOiBzaG91bGRCdWJibGVcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKVxuICB9XG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxufVxuIiwiZXhwb3J0IGNvbnN0IERpc3BhdGNoRXZlbnRNaXhpbiA9IHtcbiAgcHJvcHM6IHtcbiAgICBldmVudDogU3RyaW5nLFxuICAgICdldmVudC10YXJnZXQnOiBPYmplY3QsXG4gICAgJ2V2ZW50LWFyZ3MnOiBBcnJheVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZGlzcGF0Y2hFdmVudChldnQpIHtcbiAgICAgIGV2dCAmJiB0aGlzLiRlbWl0KGV2dC50eXBlLCBldnQpXG4gICAgICBpZiAodGhpcy5ldmVudCkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5ldmVudFRhcmdldCB8fCB0aGlzLiRyb290XG4gICAgICAgIGxldCBhcmdzID0gdGhpcy5ldmVudEFyZ3MgfHwgW11cbiAgICAgICAgdGFyZ2V0LiRlbWl0KHRoaXMuZXZlbnQsIC4uLmFyZ3MpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpc3RlbmVycygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMuJGxpc3RlbmVycyxcbiAgICAgICAgY2xpY2s6IGUgPT4gdGhpcy5kaXNwYXRjaEV2ZW50KGUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBzY29wZSA9XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMHgxMDAwMDAwMCkpLnRvU3RyaW5nKCkgKyAnLSdcblxuZXhwb3J0IGNvbnN0IFZNQVVuaXF1ZUlkTWl4aW4gPSB7XG4gIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICB0aGlzLnZtYV91aWRfID0gc2NvcGUgKyB0aGlzLl91aWRcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBEcmF3ZXJcbiAqXG4gKiBEZWZpbmVzIHRoZSBzaGFwZSBvZiB0aGUgYWRhcHRlciBleHBlY3RlZCBieSB0aGUgZm91bmRhdGlvbi4gSW1wbGVtZW50IHRoaXNcbiAqIGFkYXB0ZXIgdG8gaW50ZWdyYXRlIHRoZSBEcmF3ZXIgaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ0RyYXdlckFkYXB0ZXIge1xuICAvKipcbiAgICogQWRkcyBhIGNsYXNzIHRvIHRoZSByb290IEVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGNsYXNzIGZyb20gdGhlIHJvb3QgRWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHJvb3QgRWxlbWVudCBjb250YWlucyB0aGUgZ2l2ZW4gY2xhc3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudCB0YXJnZXQgZWxlbWVudCB0byB2ZXJpZnkgY2xhc3MgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIG5hbWVcbiAgICovXG4gIGVsZW1lbnRIYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFNhdmVzIHRoZSBmb2N1cyBvZiBjdXJyZW50bHkgYWN0aXZlIGVsZW1lbnQuXG4gICAqL1xuICBzYXZlRm9jdXMoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXN0b3JlcyBmb2N1cyB0byBlbGVtZW50IHByZXZpb3VzbHkgc2F2ZWQgd2l0aCAnc2F2ZUZvY3VzJy5cbiAgICovXG4gIHJlc3RvcmVGb2N1cygpIHt9XG5cbiAgLyoqXG4gICAqIEZvY3VzZXMgdGhlIGFjdGl2ZSAvIHNlbGVjdGVkIG5hdmlnYXRpb24gaXRlbS5cbiAgICovXG4gIGZvY3VzQWN0aXZlTmF2aWdhdGlvbkl0ZW0oKSB7fVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhIGN1c3RvbSBldmVudCBcIk1EQ0RyYXdlcjpjbG9zZWRcIiBkZW5vdGluZyB0aGUgZHJhd2VyIGhhcyBjbG9zZWQuXG4gICAqL1xuICBub3RpZnlDbG9zZSgpIHt9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGEgY3VzdG9tIGV2ZW50IFwiTURDRHJhd2VyOm9wZW5lZFwiIGRlbm90aW5nIHRoZSBkcmF3ZXIgaGFzIG9wZW5lZC5cbiAgICovXG4gIG5vdGlmeU9wZW4oKSB7fVxuXG4gIC8qKlxuICAgKiBUcmFwcyBmb2N1cyBvbiByb290IGVsZW1lbnQgYW5kIGZvY3VzZXMgdGhlIGFjdGl2ZSBuYXZpZ2F0aW9uIGVsZW1lbnQuXG4gICAqL1xuICB0cmFwRm9jdXMoKSB7fVxuXG4gIC8qKlxuICAgKiBSZWxlYXNlcyBmb2N1cyB0cmFwIGZyb20gcm9vdCBlbGVtZW50IHdoaWNoIHdhcyBzZXQgYnkgYHRyYXBGb2N1c2BcbiAgICogYW5kIHJlc3RvcmVzIGZvY3VzIHRvIHdoZXJlIGl0IHdhcyBwcmlvciB0byBjYWxsaW5nIGB0cmFwRm9jdXNgLlxuICAgKi9cbiAgcmVsZWFzZUZvY3VzKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDRHJhd2VyQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBBXG4gKi9cbmNsYXNzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVte2Nzc0NsYXNzZXN9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtzdHJpbmdzfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtudW1iZXJzfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshT2JqZWN0fSAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAvLyB2YWxpZGF0aW9uLlxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0E9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyID0ge30pIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUF9ICovXG4gICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgUk9PVDogJ21kYy1kcmF3ZXInLFxuICBESVNNSVNTSUJMRTogJ21kYy1kcmF3ZXItLWRpc21pc3NpYmxlJyxcbiAgTU9EQUw6ICdtZGMtZHJhd2VyLS1tb2RhbCcsXG4gIE9QRU46ICdtZGMtZHJhd2VyLS1vcGVuJyxcbiAgQU5JTUFURTogJ21kYy1kcmF3ZXItLWFuaW1hdGUnLFxuICBPUEVOSU5HOiAnbWRjLWRyYXdlci0tb3BlbmluZycsXG4gIENMT1NJTkc6ICdtZGMtZHJhd2VyLS1jbG9zaW5nJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQVBQX0NPTlRFTlRfU0VMRUNUT1I6ICcubWRjLWRyYXdlci1hcHAtY29udGVudCcsXG4gIFNDUklNX1NFTEVDVE9SOiAnLm1kYy1kcmF3ZXItc2NyaW0nLFxuICBDTE9TRV9FVkVOVDogJ01EQ0RyYXdlcjpjbG9zZWQnLFxuICBPUEVOX0VWRU5UOiAnTURDRHJhd2VyOm9wZW5lZCcsXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3N9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENEcmF3ZXJBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3N9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ0RyYXdlckFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ0RyYXdlckFkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgaGFzQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBlbGVtZW50SGFzQ2xhc3M6ICgvKiBlbGVtZW50OiAhRWxlbWVudCwgY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgbm90aWZ5Q2xvc2U6ICgpID0+IHt9LFxuICAgICAgbm90aWZ5T3BlbjogKCkgPT4ge30sXG4gICAgICBzYXZlRm9jdXM6ICgpID0+IHt9LFxuICAgICAgcmVzdG9yZUZvY3VzOiAoKSA9PiB7fSxcbiAgICAgIGZvY3VzQWN0aXZlTmF2aWdhdGlvbkl0ZW06ICgpID0+IHt9LFxuICAgICAgdHJhcEZvY3VzOiAoKSA9PiB7fSxcbiAgICAgIHJlbGVhc2VGb2N1czogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gMDtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRnJhbWVfKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lXyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFuaW1hdGlvblRpbWVyXykge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0aW9uVGltZXJfKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gb3BlbiB0aGUgZHJhd2VyLlxuICAgKi9cbiAgb3BlbigpIHtcbiAgICBpZiAodGhpcy5pc09wZW4oKSB8fCB0aGlzLmlzT3BlbmluZygpIHx8IHRoaXMuaXNDbG9zaW5nKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuT1BFTik7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkFOSU1BVEUpO1xuXG4gICAgLy8gV2FpdCBhIGZyYW1lIG9uY2UgZGlzcGxheSBpcyBubyBsb25nZXIgXCJub25lXCIsIHRvIGVzdGFibGlzaCBiYXNpcyBmb3IgYW5pbWF0aW9uXG4gICAgdGhpcy5ydW5OZXh0QW5pbWF0aW9uRnJhbWVfKCgpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOSU5HKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYWRhcHRlcl8uc2F2ZUZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gY2xvc2UgdGhlIGRyYXdlci5cbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGlmICghdGhpcy5pc09wZW4oKSB8fCB0aGlzLmlzT3BlbmluZygpIHx8IHRoaXMuaXNDbG9zaW5nKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQ0xPU0lORyk7XG4gIH1cblxuICAvKipcbiAgICogRXh0ZW5zaW9uIHBvaW50IGZvciB3aGVuIGRyYXdlciBmaW5pc2hlcyBvcGVuIGFuaW1hdGlvbi5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgb3BlbmVkKCkge31cblxuICAvKipcbiAgICogRXh0ZW5zaW9uIHBvaW50IGZvciB3aGVuIGRyYXdlciBmaW5pc2hlcyBjbG9zZSBhbmltYXRpb24uXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGNsb3NlZCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBkcmF3ZXIgaXMgaW4gb3BlbiBzdGF0ZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLk9QRU4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBkcmF3ZXIgaXMgYW5pbWF0aW5nIG9wZW4uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc09wZW5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOSU5HKSB8fCB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuQU5JTUFURSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGRyYXdlciBpcyBhbmltYXRpbmcgY2xvc2VkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNDbG9zaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuQ0xPU0lORyk7XG4gIH1cblxuICAvKipcbiAgICogS2V5ZG93biBoYW5kbGVyIHRvIGNsb3NlIGRyYXdlciB3aGVuIGtleSBpcyBlc2NhcGUuXG4gICAqIEBwYXJhbSBldnRcbiAgICovXG4gIGhhbmRsZUtleWRvd24oZXZ0KSB7XG4gICAgY29uc3Qge2tleUNvZGUsIGtleX0gPSBldnQ7XG5cbiAgICBjb25zdCBpc0VzY2FwZSA9IGtleSA9PT0gJ0VzY2FwZScgfHwga2V5Q29kZSA9PT0gMjc7XG4gICAgaWYgKGlzRXNjYXBlKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYSB0cmFuc2l0aW9uIGVuZCBldmVudCBvbiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqL1xuICBoYW5kbGVUcmFuc2l0aW9uRW5kKGV2dCkge1xuICAgIGNvbnN0IHtPUEVOSU5HLCBDTE9TSU5HLCBPUEVOLCBBTklNQVRFLCBST09UfSA9IGNzc0NsYXNzZXM7XG5cbiAgICAvLyBJbiBFZGdlLCB0cmFuc2l0aW9uZW5kIG9uIHJpcHBsZSBwc2V1ZG8tZWxlbWVudHMgeWllbGRzIGEgdGFyZ2V0IHdpdGhvdXQgY2xhc3NMaXN0LCBzbyBjaGVjayBmb3IgRWxlbWVudCBmaXJzdC5cbiAgICBjb25zdCBpc0VsZW1lbnQgPSBldnQudGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudDtcbiAgICBpZiAoIWlzRWxlbWVudCB8fCAhdGhpcy5hZGFwdGVyXy5lbGVtZW50SGFzQ2xhc3MoLyoqIEB0eXBlIHshRWxlbWVudH0gKi8gKGV2dC50YXJnZXQpLCBST09UKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQ2xvc2luZygpKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE9QRU4pO1xuICAgICAgdGhpcy5jbG9zZWQoKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVzdG9yZUZvY3VzKCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNBY3RpdmVOYXZpZ2F0aW9uSXRlbSgpO1xuICAgICAgdGhpcy5vcGVuZWQoKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5T3BlbigpO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoQU5JTUFURSk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhPUEVOSU5HKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKENMT1NJTkcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgdGhlIGdpdmVuIGxvZ2ljIG9uIHRoZSBuZXh0IGFuaW1hdGlvbiBmcmFtZSwgdXNpbmcgc2V0VGltZW91dCB0byBmYWN0b3IgaW4gRmlyZWZveCByZWZsb3cgYmVoYXZpb3IuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBydW5OZXh0QW5pbWF0aW9uRnJhbWVfKGNhbGxiYWNrKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZV8pO1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uIGZyb20gJy4uL2Rpc21pc3NpYmxlL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb259XG4gKi9cbmNsYXNzIE1EQ01vZGFsRHJhd2VyRm91bmRhdGlvbiBleHRlbmRzIE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbiB7XG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBkcmF3ZXIgZmluaXNoZXMgb3BlbiBhbmltYXRpb24uXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgb3BlbmVkKCkge1xuICAgIHRoaXMuYWRhcHRlcl8udHJhcEZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gZHJhd2VyIGZpbmlzaGVzIGNsb3NlIGFuaW1hdGlvbi5cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBjbG9zZWQoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWxlYXNlRm9jdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGNsaWNrIGV2ZW50IG9uIHNjcmltLlxuICAgKi9cbiAgaGFuZGxlU2NyaW1DbGljaygpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDTW9kYWxEcmF3ZXJGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbi8qKlxuICogQHRlbXBsYXRlIEZcbiAqL1xuY2xhc3MgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ0NvbXBvbmVudH1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgLy8gU3ViY2xhc3NlcyB3aGljaCBleHRlbmQgTURDQmFzZSBzaG91bGQgcHJvdmlkZSBhbiBhdHRhY2hUbygpIG1ldGhvZCB0aGF0IHRha2VzIGEgcm9vdCBlbGVtZW50IGFuZFxuICAgIC8vIHJldHVybnMgYW4gaW5zdGFudGlhdGVkIGNvbXBvbmVudCB3aXRoIGl0cyByb290IHNldCB0byB0aGF0IGVsZW1lbnQuIEFsc28gbm90ZSB0aGF0IGluIHRoZSBjYXNlcyBvZlxuICAgIC8vIHN1YmNsYXNzZXMsIGFuIGV4cGxpY2l0IGZvdW5kYXRpb24gY2xhc3Mgd2lsbCBub3QgaGF2ZSB0byBiZSBwYXNzZWQgaW47IGl0IHdpbGwgc2ltcGx5IGJlIGluaXRpYWxpemVkXG4gICAgLy8gZnJvbSBnZXREZWZhdWx0Rm91bmRhdGlvbigpLlxuICAgIHJldHVybiBuZXcgTURDQ29tcG9uZW50KHJvb3QsIG5ldyBNRENGb3VuZGF0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHtGPX0gZm91bmRhdGlvblxuICAgKiBAcGFyYW0gey4uLj99IGFyZ3NcbiAgICovXG4gIGNvbnN0cnVjdG9yKHJvb3QsIGZvdW5kYXRpb24gPSB1bmRlZmluZWQsIC4uLmFyZ3MpIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG4gICAgdGhpcy5yb290XyA9IHJvb3Q7XG4gICAgdGhpcy5pbml0aWFsaXplKC4uLmFyZ3MpO1xuICAgIC8vIE5vdGUgdGhhdCB3ZSBpbml0aWFsaXplIGZvdW5kYXRpb24gaGVyZSBhbmQgbm90IHdpdGhpbiB0aGUgY29uc3RydWN0b3IncyBkZWZhdWx0IHBhcmFtIHNvIHRoYXRcbiAgICAvLyB0aGlzLnJvb3RfIGlzIGRlZmluZWQgYW5kIGNhbiBiZSB1c2VkIHdpdGhpbiB0aGUgZm91bmRhdGlvbiBjbGFzcy5cbiAgICAvKiogQHByb3RlY3RlZCB7IUZ9ICovXG4gICAgdGhpcy5mb3VuZGF0aW9uXyA9IGZvdW5kYXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSA6IGZvdW5kYXRpb247XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5pbml0KCk7XG4gICAgdGhpcy5pbml0aWFsU3luY1dpdGhET00oKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoLyogLi4uYXJncyAqLykge1xuICAgIC8vIFN1YmNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoaXMgdG8gZG8gYW55IGFkZGl0aW9uYWwgc2V0dXAgd29yayB0aGF0IHdvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiBhXG4gICAgLy8gXCJjb25zdHJ1Y3RvclwiLiBFc3NlbnRpYWxseSwgaXQgaXMgYSBob29rIGludG8gdGhlIHBhcmVudCBjb25zdHJ1Y3RvciBiZWZvcmUgdGhlIGZvdW5kYXRpb24gaXNcbiAgICAvLyBpbml0aWFsaXplZC4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIGJlc2lkZXMgcm9vdCBhbmQgZm91bmRhdGlvbiB3aWxsIGJlIHBhc3NlZCBpbiBoZXJlLlxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFGfSBmb3VuZGF0aW9uXG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCBmb3VuZGF0aW9uIGNsYXNzIGZvciB0aGVcbiAgICAvLyBjb21wb25lbnQuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgZ2V0RGVmYXVsdEZvdW5kYXRpb24gdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCAnICtcbiAgICAgICdmb3VuZGF0aW9uIGNsYXNzJyk7XG4gIH1cblxuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgdGhleSBuZWVkIHRvIHBlcmZvcm0gd29yayB0byBzeW5jaHJvbml6ZSB3aXRoIGEgaG9zdCBET01cbiAgICAvLyBvYmplY3QuIEFuIGV4YW1wbGUgb2YgdGhpcyB3b3VsZCBiZSBhIGZvcm0gY29udHJvbCB3cmFwcGVyIHRoYXQgbmVlZHMgdG8gc3luY2hyb25pemUgaXRzIGludGVybmFsIHN0YXRlXG4gICAgLy8gdG8gc29tZSBwcm9wZXJ0eSBvciBhdHRyaWJ1dGUgb2YgdGhlIGhvc3QgRE9NLiBQbGVhc2Ugbm90ZTogdGhpcyBpcyAqbm90KiB0aGUgcGxhY2UgdG8gcGVyZm9ybSBET01cbiAgICAvLyByZWFkcy93cml0ZXMgdGhhdCB3b3VsZCBjYXVzZSBsYXlvdXQgLyBwYWludCwgYXMgdGhpcyBpcyBjYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIHdpdGhpbiB0aGUgY29uc3RydWN0b3IuXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgbWF5IGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZWxlYXNlIGFueSByZXNvdXJjZXMgLyBkZXJlZ2lzdGVyIGFueSBsaXN0ZW5lcnMgdGhleSBoYXZlXG4gICAgLy8gYXR0YWNoZWQuIEFuIGV4YW1wbGUgb2YgdGhpcyBtaWdodCBiZSBkZXJlZ2lzdGVyaW5nIGEgcmVzaXplIGV2ZW50IGZyb20gdGhlIHdpbmRvdyBvYmplY3QuXG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiBsaXN0ZW5pbmcgZm9yIGN1c3RvbSBldmVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBsaXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIG1ldGhvZCB0byByZW1vdmUgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudC4gVGhpcyBpcyBtb3N0IHVzZWZ1bCB3aGVuXG4gICAqIHVubGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgdW5saXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBhIGNyb3NzLWJyb3dzZXItY29tcGF0aWJsZSBjdXN0b20gZXZlbnQgZnJvbSB0aGUgY29tcG9uZW50IHJvb3Qgb2YgdGhlIGdpdmVuIHR5cGUsXG4gICAqIHdpdGggdGhlIGdpdmVuIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IU9iamVjdH0gZXZ0RGF0YVxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBzaG91bGRCdWJibGVcbiAgICovXG4gIGVtaXQoZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgICBsZXQgZXZ0O1xuICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvb3RfLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENDb21wb25lbnQ7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIExpc3QuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmcgZm9jdXMuXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENMaXN0QWRhcHRlciB7XG4gIC8qKiBAcmV0dXJuIHtudW1iZXJ9ICovXG4gIGdldExpc3RJdGVtQ291bnQoKSB7fVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9ICovXG4gIGdldEZvY3VzZWRFbGVtZW50SW5kZXgoKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgYXR0cmlidXRlLCB2YWx1ZSkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVcbiAgICovXG4gIHJlbW92ZUF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgYXR0cmlidXRlKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgYWRkQ2xhc3NGb3JFbGVtZW50SW5kZXgoaW5kZXgsIGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4KGluZGV4LCBjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEZvY3VzZXMgbGlzdCBpdGVtIGF0IHRoZSBpbmRleCBzcGVjaWZpZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKi9cbiAgZm9jdXNJdGVtQXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgdGFiaW5kZXggdG8gdGhlIHZhbHVlIHNwZWNpZmllZCBmb3IgYWxsIGJ1dHRvbi9hIGVsZW1lbnQgY2hpbGRyZW4gb2ZcbiAgICogdGhlIGxpc3QgaXRlbSBhdCB0aGUgaW5kZXggc3BlY2lmaWVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGlzdEl0ZW1JbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gdGFiSW5kZXhWYWx1ZVxuICAgKi9cbiAgc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuKGxpc3RJdGVtSW5kZXgsIHRhYkluZGV4VmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgcmFkaW8gYnV0dG9uIGlzIHByZXNlbnQgYXQgZ2l2ZW4gbGlzdCBpdGVtIGluZGV4LlxuICAgKi9cbiAgaGFzUmFkaW9BdEluZGV4KGluZGV4KSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGNoZWNrYm94IGlzIHByZXNlbnQgYXQgZ2l2ZW4gbGlzdCBpdGVtIGluZGV4LlxuICAgKi9cbiAgaGFzQ2hlY2tib3hBdEluZGV4KGluZGV4KSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGNoZWNrYm94IGluc2lkZSBhIGxpc3QgaXRlbSBpcyBjaGVja2VkLlxuICAgKi9cbiAgaXNDaGVja2JveENoZWNrZWRBdEluZGV4KGluZGV4KSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjaGVja2VkIHN0YXR1cyBvZiBjaGVja2JveCBvciByYWRpbyBhdCBnaXZlbiBsaXN0IGl0ZW0gaW5kZXguXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQ2hlY2tlZFxuICAgKi9cbiAgc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXgoaW5kZXgsIGlzQ2hlY2tlZCkge31cblxuICAvKipcbiAgICogTm90aWZpZXMgdXNlciBhY3Rpb24gb24gbGlzdCBpdGVtLlxuICAgKi9cbiAgbm90aWZ5QWN0aW9uKGluZGV4KSB7fVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm5zIHRydWUgd2hlbiB0aGUgY3VycmVudCBmb2N1c2VkIGVsZW1lbnQgaXMgaW5zaWRlIGxpc3Qgcm9vdC5cbiAgICovXG4gIGlzRm9jdXNJbnNpZGVMaXN0KCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDTGlzdEFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICBST09UOiAnbWRjLWxpc3QnLFxuICBMSVNUX0lURU1fQ0xBU1M6ICdtZGMtbGlzdC1pdGVtJyxcbiAgTElTVF9JVEVNX1NFTEVDVEVEX0NMQVNTOiAnbWRjLWxpc3QtaXRlbS0tc2VsZWN0ZWQnLFxuICBMSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTOiAnbWRjLWxpc3QtaXRlbS0tYWN0aXZhdGVkJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQVJJQV9PUklFTlRBVElPTjogJ2FyaWEtb3JpZW50YXRpb24nLFxuICBBUklBX09SSUVOVEFUSU9OX0hPUklaT05UQUw6ICdob3Jpem9udGFsJyxcbiAgQVJJQV9TRUxFQ1RFRDogJ2FyaWEtc2VsZWN0ZWQnLFxuICBBUklBX0NIRUNLRUQ6ICdhcmlhLWNoZWNrZWQnLFxuICBBUklBX0NIRUNLRURfUkFESU9fU0VMRUNUT1I6ICdbcm9sZT1cInJhZGlvXCJdW2FyaWEtY2hlY2tlZD1cInRydWVcIl0nLFxuICBBUklBX1JPTEVfQ0hFQ0tCT1hfU0VMRUNUT1I6ICdbcm9sZT1cImNoZWNrYm94XCJdJyxcbiAgQVJJQV9DSEVDS0VEX0NIRUNLQk9YX1NFTEVDVE9SOiAnW3JvbGU9XCJjaGVja2JveFwiXVthcmlhLWNoZWNrZWQ9XCJ0cnVlXCJdJyxcbiAgUkFESU9fU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpkaXNhYmxlZCknLFxuICBDSEVDS0JPWF9TRUxFQ1RPUjogJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmRpc2FibGVkKScsXG4gIENIRUNLQk9YX1JBRElPX1NFTEVDVE9SOiAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6ZGlzYWJsZWQpLCBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpkaXNhYmxlZCknLFxuICBDSElMRF9FTEVNRU5UU19UT19UT0dHTEVfVEFCSU5ERVg6IGAuJHtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU30gYnV0dG9uOm5vdCg6ZGlzYWJsZWQpLFxuICAuJHtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU30gYWAsXG4gIEZPQ1VTQUJMRV9DSElMRF9FTEVNRU5UUzogYC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTfSBidXR0b246bm90KDpkaXNhYmxlZCksIC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTfSBhLFxuICAuJHtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU30gaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6ZGlzYWJsZWQpLFxuICAuJHtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU30gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6ZGlzYWJsZWQpYCxcbiAgRU5BQkxFRF9JVEVNU19TRUxFQ1RPUjogJy5tZGMtbGlzdC1pdGVtOm5vdCgubWRjLWxpc3QtaXRlbS0tZGlzYWJsZWQpJyxcbiAgQUNUSU9OX0VWRU5UOiAnTURDTGlzdDphY3Rpb24nLFxufTtcblxuLyoqIEB0eXBlZGVmIHtudW1iZXJ8IUFycmF5PG51bWJlcj59ICovXG5sZXQgSW5kZXg7XG5cbmV4cG9ydCB7c3RyaW5ncywgY3NzQ2xhc3NlcywgSW5kZXh9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ0xpc3RBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge3N0cmluZ3MsIGNzc0NsYXNzZXMsIEluZGV4fSBmcm9tICcuL2NvbnN0YW50cyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuY29uc3QgRUxFTUVOVFNfS0VZX0FMTE9XRURfSU4gPSBbJ2lucHV0JywgJ2J1dHRvbicsICd0ZXh0YXJlYScsICdzZWxlY3QnXTtcblxuY2xhc3MgTURDTGlzdEZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QHNlZSBNRENMaXN0QWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5cbiAgICogdHlwZXMuXG4gICAqIEByZXR1cm4geyFNRENMaXN0QWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ0xpc3RBZGFwdGVyfSAqLyAoe1xuICAgICAgZ2V0TGlzdEl0ZW1Db3VudDogKCkgPT4ge30sXG4gICAgICBnZXRGb2N1c2VkRWxlbWVudEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIHNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleDogKCkgPT4ge30sXG4gICAgICByZW1vdmVBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXg6ICgpID0+IHt9LFxuICAgICAgYWRkQ2xhc3NGb3JFbGVtZW50SW5kZXg6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3NGb3JFbGVtZW50SW5kZXg6ICgpID0+IHt9LFxuICAgICAgZm9jdXNJdGVtQXRJbmRleDogKCkgPT4ge30sXG4gICAgICBzZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW46ICgpID0+IHt9LFxuICAgICAgaGFzUmFkaW9BdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGhhc0NoZWNrYm94QXRJbmRleDogKCkgPT4ge30sXG4gICAgICBpc0NoZWNrYm94Q2hlY2tlZEF0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgbm90aWZ5QWN0aW9uOiAoKSA9PiB7fSxcbiAgICAgIGlzRm9jdXNJbnNpZGVMaXN0OiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENMaXN0QWRhcHRlcj19IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ0xpc3RGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMud3JhcEZvY3VzXyA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuaXNWZXJ0aWNhbF8gPSB0cnVlO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuaXNTaW5nbGVTZWxlY3Rpb25MaXN0XyA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHshSW5kZXh9ICovXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IC0xO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4XyA9IC0xO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMudXNlQWN0aXZhdGVkQ2xhc3NfID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5pc0NoZWNrYm94TGlzdF8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzUmFkaW9MaXN0XyA9IGZhbHNlO1xuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKSA9PT0gMCkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzQ2hlY2tib3hBdEluZGV4KDApKSB7XG4gICAgICB0aGlzLmlzQ2hlY2tib3hMaXN0XyA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFkYXB0ZXJfLmhhc1JhZGlvQXRJbmRleCgwKSkge1xuICAgICAgdGhpcy5pc1JhZGlvTGlzdF8gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwcml2YXRlIHdyYXBGb2N1c18gdmFyaWFibGUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICovXG4gIHNldFdyYXBGb2N1cyh2YWx1ZSkge1xuICAgIHRoaXMud3JhcEZvY3VzXyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGlzVmVydGljYWxfIHByaXZhdGUgdmFyaWFibGUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICovXG4gIHNldFZlcnRpY2FsT3JpZW50YXRpb24odmFsdWUpIHtcbiAgICB0aGlzLmlzVmVydGljYWxfID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaXNTaW5nbGVTZWxlY3Rpb25MaXN0XyBwcml2YXRlIHZhcmlhYmxlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAqL1xuICBzZXRTaW5nbGVTZWxlY3Rpb24odmFsdWUpIHtcbiAgICB0aGlzLmlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB1c2VBY3RpdmF0ZWRDbGFzc18gcHJpdmF0ZSB2YXJpYWJsZS5cbiAgICogQHBhcmFtIHtib29sZWFufSB1c2VBY3RpdmF0ZWRcbiAgICovXG4gIHNldFVzZUFjdGl2YXRlZENsYXNzKHVzZUFjdGl2YXRlZCkge1xuICAgIHRoaXMudXNlQWN0aXZhdGVkQ2xhc3NfID0gdXNlQWN0aXZhdGVkO1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFJbmRleH0gKi9cbiAgZ2V0U2VsZWN0ZWRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEluZGV4XztcbiAgfVxuXG4gIC8qKiBAcGFyYW0geyFJbmRleH0gaW5kZXggKi9cbiAgc2V0U2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgIGlmICghdGhpcy5pc0luZGV4VmFsaWRfKGluZGV4KSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuaXNDaGVja2JveExpc3RfKSB7XG4gICAgICB0aGlzLnNldENoZWNrYm94QXRJbmRleF8oLyoqIEB0eXBlIHshQXJyYXk8bnVtYmVyPn0gKi8gKGluZGV4KSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUmFkaW9MaXN0Xykge1xuICAgICAgdGhpcy5zZXRSYWRpb0F0SW5kZXhfKC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoaW5kZXgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTaW5nbGVTZWxlY3Rpb25BdEluZGV4XygvKiogQHR5cGUge251bWJlcn0gKi8gKGluZGV4KSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzIGluIGhhbmRsZXIgZm9yIHRoZSBsaXN0IGl0ZW1zLlxuICAgKiBAcGFyYW0gZXZ0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaXN0SXRlbUluZGV4XG4gICAqL1xuICBoYW5kbGVGb2N1c0luKGV2dCwgbGlzdEl0ZW1JbmRleCkge1xuICAgIGlmIChsaXN0SXRlbUluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuKGxpc3RJdGVtSW5kZXgsIDApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1cyBvdXQgaGFuZGxlciBmb3IgdGhlIGxpc3QgaXRlbXMuXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcGFyYW0ge251bWJlcn0gbGlzdEl0ZW1JbmRleFxuICAgKi9cbiAgaGFuZGxlRm9jdXNPdXQoZXZ0LCBsaXN0SXRlbUluZGV4KSB7XG4gICAgaWYgKGxpc3RJdGVtSW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW4obGlzdEl0ZW1JbmRleCwgLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJldHdlZW4gRm9jdXNvdXQgJiBGb2N1c2luIHNvbWUgYnJvd3NlcnMgZG8gbm90IGhhdmUgZm9jdXMgb24gYW55IGVsZW1lbnQuIFNldHRpbmcgYSBkZWxheSB0byB3YWl0IHRpbGwgdGhlIGZvY3VzXG4gICAgICogaXMgbW92ZWQgdG8gbmV4dCBlbGVtZW50LlxuICAgICAqL1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzRm9jdXNJbnNpZGVMaXN0KCkpIHtcbiAgICAgICAgdGhpcy5zZXRUYWJpbmRleFRvRmlyc3RTZWxlY3RlZEl0ZW1fKCk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICAvKipcbiAgICogS2V5IGhhbmRsZXIgZm9yIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHBhcmFtIHtib29sZWFufSBpc1Jvb3RMaXN0SXRlbVxuICAgKiBAcGFyYW0ge251bWJlcn0gbGlzdEl0ZW1JbmRleFxuICAgKi9cbiAgaGFuZGxlS2V5ZG93bihldnQsIGlzUm9vdExpc3RJdGVtLCBsaXN0SXRlbUluZGV4KSB7XG4gICAgY29uc3QgYXJyb3dMZWZ0ID0gZXZ0LmtleSA9PT0gJ0Fycm93TGVmdCcgfHwgZXZ0LmtleUNvZGUgPT09IDM3O1xuICAgIGNvbnN0IGFycm93VXAgPSBldnQua2V5ID09PSAnQXJyb3dVcCcgfHwgZXZ0LmtleUNvZGUgPT09IDM4O1xuICAgIGNvbnN0IGFycm93UmlnaHQgPSBldnQua2V5ID09PSAnQXJyb3dSaWdodCcgfHwgZXZ0LmtleUNvZGUgPT09IDM5O1xuICAgIGNvbnN0IGFycm93RG93biA9IGV2dC5rZXkgPT09ICdBcnJvd0Rvd24nIHx8IGV2dC5rZXlDb2RlID09PSA0MDtcbiAgICBjb25zdCBpc0hvbWUgPSBldnQua2V5ID09PSAnSG9tZScgfHwgZXZ0LmtleUNvZGUgPT09IDM2O1xuICAgIGNvbnN0IGlzRW5kID0gZXZ0LmtleSA9PT0gJ0VuZCcgfHwgZXZ0LmtleUNvZGUgPT09IDM1O1xuICAgIGNvbnN0IGlzRW50ZXIgPSBldnQua2V5ID09PSAnRW50ZXInIHx8IGV2dC5rZXlDb2RlID09PSAxMztcbiAgICBjb25zdCBpc1NwYWNlID0gZXZ0LmtleSA9PT0gJ1NwYWNlJyB8fCBldnQua2V5Q29kZSA9PT0gMzI7XG5cbiAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRGb2N1c2VkRWxlbWVudEluZGV4KCk7XG4gICAgbGV0IG5leHRJbmRleCA9IC0xO1xuICAgIGlmIChjdXJyZW50SW5kZXggPT09IC0xKSB7XG4gICAgICBjdXJyZW50SW5kZXggPSBsaXN0SXRlbUluZGV4O1xuICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IDApIHtcbiAgICAgICAgLy8gSWYgdGhpcyBldmVudCBkb2Vzbid0IGhhdmUgYSBtZGMtbGlzdC1pdGVtIGFuY2VzdG9yIGZyb20gdGhlXG4gICAgICAgIC8vIGN1cnJlbnQgbGlzdCAobm90IGZyb20gYSBzdWJsaXN0KSwgcmV0dXJuIGVhcmx5LlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCh0aGlzLmlzVmVydGljYWxfICYmIGFycm93RG93bikgfHwgKCF0aGlzLmlzVmVydGljYWxfICYmIGFycm93UmlnaHQpKSB7XG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICBuZXh0SW5kZXggPSB0aGlzLmZvY3VzTmV4dEVsZW1lbnQoY3VycmVudEluZGV4KTtcbiAgICB9IGVsc2UgaWYgKCh0aGlzLmlzVmVydGljYWxfICYmIGFycm93VXApIHx8ICghdGhpcy5pc1ZlcnRpY2FsXyAmJiBhcnJvd0xlZnQpKSB7XG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICBuZXh0SW5kZXggPSB0aGlzLmZvY3VzUHJldkVsZW1lbnQoY3VycmVudEluZGV4KTtcbiAgICB9IGVsc2UgaWYgKGlzSG9tZSkge1xuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgbmV4dEluZGV4ID0gdGhpcy5mb2N1c0ZpcnN0RWxlbWVudCgpO1xuICAgIH0gZWxzZSBpZiAoaXNFbmQpIHtcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgIG5leHRJbmRleCA9IHRoaXMuZm9jdXNMYXN0RWxlbWVudCgpO1xuICAgIH0gZWxzZSBpZiAoaXNFbnRlciB8fCBpc1NwYWNlKSB7XG4gICAgICBpZiAoaXNSb290TGlzdEl0ZW0pIHtcbiAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGlmIGVudGVyIGtleSBpcyBwcmVzc2VkIG9uIGFuY2hvciBlbGVtZW50IHdoaWNoIHRyaWdnZXJzIHN5bnRoZXRpYyBNb3VzZUV2ZW50IGV2ZW50LlxuICAgICAgICBpZiAoZXZ0LnRhcmdldC50YWdOYW1lID09PSAnQScgJiYgaXNFbnRlcikgcmV0dXJuO1xuICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RhYmxlTGlzdF8oKSkge1xuICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleE9uQWN0aW9uXyhjdXJyZW50SW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlBY3Rpb24oY3VycmVudEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID0gY3VycmVudEluZGV4O1xuXG4gICAgaWYgKG5leHRJbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLnNldFRhYmluZGV4QXRJbmRleF8obmV4dEluZGV4KTtcbiAgICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPSBuZXh0SW5kZXg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsaWNrIGhhbmRsZXIgZm9yIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtib29sZWFufSB0b2dnbGVDaGVja2JveFxuICAgKi9cbiAgaGFuZGxlQ2xpY2soaW5kZXgsIHRvZ2dsZUNoZWNrYm94KSB7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuaXNTZWxlY3RhYmxlTGlzdF8oKSkge1xuICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4T25BY3Rpb25fKGluZGV4LCB0b2dnbGVDaGVja2JveCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlBY3Rpb24oaW5kZXgpO1xuXG4gICAgdGhpcy5zZXRUYWJpbmRleEF0SW5kZXhfKGluZGV4KTtcbiAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID0gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlcyB0aGF0IHByZXZlbnREZWZhdWx0IGlzIG9ubHkgY2FsbGVkIGlmIHRoZSBjb250YWluaW5nIGVsZW1lbnQgZG9lc24ndFxuICAgKiBjb25zdW1lIHRoZSBldmVudCwgYW5kIGl0IHdpbGwgY2F1c2UgYW4gdW5pbnRlbmRlZCBzY3JvbGwuXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJldmVudERlZmF1bHRFdmVudF8oZXZ0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IGAke2V2dC50YXJnZXQudGFnTmFtZX1gLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKEVMRU1FTlRTX0tFWV9BTExPV0VEX0lOLmluZGV4T2YodGFnTmFtZSkgPT09IC0xKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgbmV4dCBlbGVtZW50IG9uIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZm9jdXNOZXh0RWxlbWVudChpbmRleCkge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCk7XG4gICAgbGV0IG5leHRJbmRleCA9IGluZGV4ICsgMTtcbiAgICBpZiAobmV4dEluZGV4ID49IGNvdW50KSB7XG4gICAgICBpZiAodGhpcy53cmFwRm9jdXNfKSB7XG4gICAgICAgIG5leHRJbmRleCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gZWFybHkgYmVjYXVzZSBsYXN0IGl0ZW0gaXMgYWxyZWFkeSBmb2N1c2VkLlxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleChuZXh0SW5kZXgpO1xuXG4gICAgcmV0dXJuIG5leHRJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIHRoZSBwcmV2aW91cyBlbGVtZW50IG9uIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZm9jdXNQcmV2RWxlbWVudChpbmRleCkge1xuICAgIGxldCBwcmV2SW5kZXggPSBpbmRleCAtIDE7XG4gICAgaWYgKHByZXZJbmRleCA8IDApIHtcbiAgICAgIGlmICh0aGlzLndyYXBGb2N1c18pIHtcbiAgICAgICAgcHJldkluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCkgLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGJlY2F1c2UgZmlyc3QgaXRlbSBpcyBhbHJlYWR5IGZvY3VzZWQuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KHByZXZJbmRleCk7XG5cbiAgICByZXR1cm4gcHJldkluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGZvY3VzRmlyc3RFbGVtZW50KCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleCgwKTtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBmb2N1c0xhc3RFbGVtZW50KCkge1xuICAgIGNvbnN0IGxhc3RJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpIC0gMTtcbiAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgobGFzdEluZGV4KTtcbiAgICByZXR1cm4gbGFzdEluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0U2luZ2xlU2VsZWN0aW9uQXRJbmRleF8oaW5kZXgpIHtcbiAgICBsZXQgc2VsZWN0ZWRDbGFzc05hbWUgPSBjc3NDbGFzc2VzLkxJU1RfSVRFTV9TRUxFQ1RFRF9DTEFTUztcbiAgICBpZiAodGhpcy51c2VBY3RpdmF0ZWRDbGFzc18pIHtcbiAgICAgIHNlbGVjdGVkQ2xhc3NOYW1lID0gY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhfID49IDAgJiYgdGhpcy5zZWxlY3RlZEluZGV4XyAhPT0gaW5kZXgpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3NGb3JFbGVtZW50SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4Xywgc2VsZWN0ZWRDbGFzc05hbWUpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4Xywgc3RyaW5ncy5BUklBX1NFTEVDVEVELCAnZmFsc2UnKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzRm9yRWxlbWVudEluZGV4KGluZGV4LCBzZWxlY3RlZENsYXNzTmFtZSk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9TRUxFQ1RFRCwgJ3RydWUnKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8gPSBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHJhZGlvIGF0IGdpdmUgaW5kZXguIFJhZGlvIGRvZXNuJ3QgY2hhbmdlIHRoZSBjaGVja2VkIHN0YXRlIGlmIGl0IGlzIGFscmVhZHkgY2hlY2tlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRSYWRpb0F0SW5kZXhfKGluZGV4KSB7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleChpbmRleCwgdHJ1ZSk7XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4XyA+PSAwKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXhfLCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgJ2ZhbHNlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9DSEVDS0VELCAndHJ1ZScpO1xuXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUFycmF5PG51bWJlcj59IGluZGV4XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRDaGVja2JveEF0SW5kZXhfKGluZGV4KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKTsgaSsrKSB7XG4gICAgICBsZXQgaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICBpZiAoaW5kZXguaW5kZXhPZihpKSA+PSAwKSB7XG4gICAgICAgIGlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXgoaSwgaXNDaGVja2VkKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGksIHN0cmluZ3MuQVJJQV9DSEVDS0VELCBpc0NoZWNrZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRUYWJpbmRleEF0SW5kZXhfKGluZGV4KSB7XG4gICAgaWYgKHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPT09IC0xICYmIGluZGV4ICE9PSAwKSB7XG4gICAgICAvLyBJZiBubyBsaXN0IGl0ZW0gd2FzIHNlbGVjdGVkIHNldCBmaXJzdCBsaXN0IGl0ZW0ncyB0YWJpbmRleCB0byAtMS5cbiAgICAgIC8vIEdlbmVyYWxseSwgdGFiaW5kZXggaXMgc2V0IHRvIDAgb24gZmlyc3QgbGlzdCBpdGVtIG9mIGxpc3QgdGhhdCBoYXMgbm8gcHJlc2VsZWN0ZWQgaXRlbXMuXG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCgwLCAndGFiaW5kZXgnLCAtMSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID49IDAgJiYgdGhpcy5mb2N1c2VkSXRlbUluZGV4XyAhPT0gaW5kZXgpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8sICd0YWJpbmRleCcsIC0xKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgJ3RhYmluZGV4JywgMCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJuIHRydWUgaWYgaXQgaXMgc2luZ2xlIHNlbGVjdGluIGxpc3QsIGNoZWNrYm94IGxpc3Qgb3IgcmFkaW8gbGlzdC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzU2VsZWN0YWJsZUxpc3RfKCkge1xuICAgIHJldHVybiB0aGlzLmlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gfHwgdGhpcy5pc0NoZWNrYm94TGlzdF8gfHwgdGhpcy5pc1JhZGlvTGlzdF87XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgc2V0VGFiaW5kZXhUb0ZpcnN0U2VsZWN0ZWRJdGVtXygpIHtcbiAgICBsZXQgdGFyZ2V0SW5kZXggPSAwO1xuXG4gICAgaWYgKHRoaXMuaXNTZWxlY3RhYmxlTGlzdF8oKSkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGVkSW5kZXhfID09PSAnbnVtYmVyJyAmJiB0aGlzLnNlbGVjdGVkSW5kZXhfICE9PSAtMSkge1xuICAgICAgICB0YXJnZXRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleF87XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gaW5zdGFuY2VvZiBBcnJheSAmJiB0aGlzLnNlbGVjdGVkSW5kZXhfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGFyZ2V0SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXhfLnJlZHVjZSgoY3VycmVudEluZGV4LCBtaW5JbmRleCkgPT4gTWF0aC5taW4oY3VycmVudEluZGV4LCBtaW5JbmRleCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0VGFiaW5kZXhBdEluZGV4Xyh0YXJnZXRJbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshSW5kZXh9IGluZGV4XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc0luZGV4VmFsaWRfKGluZGV4KSB7XG4gICAgaWYgKGluZGV4IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGlmICghdGhpcy5pc0NoZWNrYm94TGlzdF8pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNRENMaXN0Rm91bmRhdGlvbjogQXJyYXkgb2YgaW5kZXggaXMgb25seSBzdXBwb3J0ZWQgZm9yIGNoZWNrYm94IGJhc2VkIGxpc3QnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbmRleC5zb21lKChpKSA9PiB0aGlzLmlzSW5kZXhJblJhbmdlXyhpKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAodGhpcy5pc0NoZWNrYm94TGlzdF8pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNRENMaXN0Rm91bmRhdGlvbjogRXhwZWN0ZWQgYXJyYXkgb2YgaW5kZXggZm9yIGNoZWNrYm94IGJhc2VkIGxpc3QgYnV0IGdvdCBudW1iZXI6ICcgKyBpbmRleCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5pc0luZGV4SW5SYW5nZV8oaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNJbmRleEluUmFuZ2VfKGluZGV4KSB7XG4gICAgY29uc3QgbGlzdFNpemUgPSB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKTtcbiAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IGxpc3RTaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSB0b2dnbGVDaGVja2JveFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0U2VsZWN0ZWRJbmRleE9uQWN0aW9uXyhpbmRleCwgdG9nZ2xlQ2hlY2tib3ggPSB0cnVlKSB7XG4gICAgaWYgKHRoaXMuaXNDaGVja2JveExpc3RfKSB7XG4gICAgICB0aGlzLnRvZ2dsZUNoZWNrYm94QXRJbmRleF8oaW5kZXgsIHRvZ2dsZUNoZWNrYm94KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdG9nZ2xlQ2hlY2tib3hcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRvZ2dsZUNoZWNrYm94QXRJbmRleF8oaW5kZXgsIHRvZ2dsZUNoZWNrYm94KSB7XG4gICAgbGV0IGlzQ2hlY2tlZCA9IHRoaXMuYWRhcHRlcl8uaXNDaGVja2JveENoZWNrZWRBdEluZGV4KGluZGV4KTtcblxuICAgIGlmICh0b2dnbGVDaGVja2JveCkge1xuICAgICAgaXNDaGVja2VkID0gIWlzQ2hlY2tlZDtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXgoaW5kZXgsIGlzQ2hlY2tlZCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9DSEVDS0VELCBpc0NoZWNrZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcblxuICAgIC8vIElmIG5vbmUgb2YgdGhlIGNoZWNrYm94IGl0ZW1zIGFyZSBzZWxlY3RlZCBhbmQgc2VsZWN0ZWRJbmRleCBpcyBub3QgaW5pdGlhbGl6ZWQgdGhlbiBwcm92aWRlIGEgZGVmYXVsdCB2YWx1ZS5cbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4XyA9PT0gLTEpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8gPSBbXTtcbiAgICB9XG5cbiAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXhfLnB1c2goaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gdGhpcy5zZWxlY3RlZEluZGV4Xy5maWx0ZXIoKGkpID0+IGkgIT09IGluZGV4KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDTGlzdEZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEEgXCJwb255ZmlsbFwiIGlzIGEgcG9seWZpbGwgdGhhdCBkb2Vzbid0IG1vZGlmeSB0aGUgZ2xvYmFsIHByb3RvdHlwZSBjaGFpbi5cbiAqIFRoaXMgbWFrZXMgcG9ueWZpbGxzIHNhZmVyIHRoYW4gdHJhZGl0aW9uYWwgcG9seWZpbGxzLCBlc3BlY2lhbGx5IGZvciBsaWJyYXJpZXMgbGlrZSBNREMuXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4gez9FbGVtZW50fVxuICovXG5mdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIGlmIChlbGVtZW50LmNsb3Nlc3QpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgfVxuXG4gIGxldCBlbCA9IGVsZW1lbnQ7XG4gIHdoaWxlIChlbCkge1xuICAgIGlmIChtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbWF0Y2hlcyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICBjb25zdCBuYXRpdmVNYXRjaGVzID0gZWxlbWVudC5tYXRjaGVzXG4gICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICB8fCBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cblxuZXhwb3J0IHtjbG9zZXN0LCBtYXRjaGVzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgTURDTGlzdEZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENMaXN0QWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHttYXRjaGVzfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgSW5kZXh9IGZyb20gJy4vY29uc3RhbnRzJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG4vKipcbiAqIEBleHRlbmRzIE1EQ0NvbXBvbmVudDwhTURDTGlzdEZvdW5kYXRpb24+XG4gKi9cbmNsYXNzIE1EQ0xpc3QgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKiogQHBhcmFtIHsuLi4/fSBhcmdzICovXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLmhhbmRsZUtleWRvd25fO1xuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuaGFuZGxlQ2xpY2tfO1xuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuZm9jdXNJbkV2ZW50TGlzdGVuZXJfO1xuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuZm9jdXNPdXRFdmVudExpc3RlbmVyXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENMaXN0fVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICByZXR1cm4gbmV3IE1EQ0xpc3Qocm9vdCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bl8pO1xuICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrXyk7XG4gICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5mb2N1c0luRXZlbnRMaXN0ZW5lcl8pO1xuICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB0aGlzLmZvY3VzT3V0RXZlbnRMaXN0ZW5lcl8pO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMuaGFuZGxlQ2xpY2tfID0gdGhpcy5oYW5kbGVDbGlja0V2ZW50Xy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlS2V5ZG93bl8gPSB0aGlzLmhhbmRsZUtleWRvd25FdmVudF8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmZvY3VzSW5FdmVudExpc3RlbmVyXyA9IHRoaXMuaGFuZGxlRm9jdXNJbkV2ZW50Xy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm9jdXNPdXRFdmVudExpc3RlbmVyXyA9IHRoaXMuaGFuZGxlRm9jdXNPdXRFdmVudF8uYmluZCh0aGlzKTtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25fKTtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmZvY3VzSW5FdmVudExpc3RlbmVyXyk7XG4gICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMuZm9jdXNPdXRFdmVudExpc3RlbmVyXyk7XG4gICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2tfKTtcbiAgICB0aGlzLmxheW91dCgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUxpc3RUeXBlKCk7XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5yb290Xy5nZXRBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX09SSUVOVEFUSU9OKTtcbiAgICB0aGlzLnZlcnRpY2FsID0gZGlyZWN0aW9uICE9PSBzdHJpbmdzLkFSSUFfT1JJRU5UQVRJT05fSE9SSVpPTlRBTDtcblxuICAgIC8vIExpc3QgaXRlbXMgbmVlZCB0byBoYXZlIGF0IGxlYXN0IHRhYmluZGV4PS0xIHRvIGJlIGZvY3VzYWJsZS5cbiAgICBbXS5zbGljZS5jYWxsKHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbCgnLm1kYy1saXN0LWl0ZW06bm90KFt0YWJpbmRleF0pJykpXG4gICAgICAuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpO1xuICAgICAgfSk7XG5cbiAgICAvLyBDaGlsZCBidXR0b24vYSBlbGVtZW50cyBhcmUgbm90IHRhYmJhYmxlIHVudGlsIHRoZSBsaXN0IGl0ZW0gaXMgZm9jdXNlZC5cbiAgICBbXS5zbGljZS5jYWxsKHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkZPQ1VTQUJMRV9DSElMRF9FTEVNRU5UUykpXG4gICAgICAuZm9yRWFjaCgoZWxlKSA9PiBlbGUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIC0xKSk7XG5cbiAgICB0aGlzLmZvdW5kYXRpb25fLmxheW91dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZmlndXJlIG91dCB3aGljaCBsaXN0IGl0ZW0gdGhpcyBldmVudCBpcyB0YXJnZXR0aW5nLiBPciByZXR1cm5zIC0xIGlmXG4gICAqIHRoZXJlIGlzIG5vIGxpc3QgaXRlbVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldExpc3RJdGVtSW5kZXhfKGV2dCkge1xuICAgIGxldCBldmVudFRhcmdldCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovIChldnQudGFyZ2V0KTtcbiAgICBsZXQgaW5kZXggPSAtMTtcblxuICAgIC8vIEZpbmQgdGhlIGZpcnN0IGFuY2VzdG9yIHRoYXQgaXMgYSBsaXN0IGl0ZW0gb3IgdGhlIGxpc3QuXG4gICAgd2hpbGUgKCFldmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MpXG4gICAgJiYgIWV2ZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLlJPT1QpKSB7XG4gICAgICBldmVudFRhcmdldCA9IGV2ZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBpbmRleCBvZiB0aGUgZWxlbWVudCBpZiBpdCBpcyBhIGxpc3QgaXRlbS5cbiAgICBpZiAoZXZlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTKSkge1xuICAgICAgaW5kZXggPSB0aGlzLmxpc3RFbGVtZW50cy5pbmRleE9mKGV2ZW50VGFyZ2V0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBmaWd1cmUgb3V0IHdoaWNoIGVsZW1lbnQgd2FzIGNsaWNrZWQgYmVmb3JlIHNlbmRpbmcgdGhlIGV2ZW50IHRvIHRoZSBmb3VuZGF0aW9uLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhbmRsZUZvY3VzSW5FdmVudF8oZXZ0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldExpc3RJdGVtSW5kZXhfKGV2dCk7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVGb2N1c0luKGV2dCwgaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZmlndXJlIG91dCB3aGljaCBlbGVtZW50IHdhcyBjbGlja2VkIGJlZm9yZSBzZW5kaW5nIHRoZSBldmVudCB0byB0aGUgZm91bmRhdGlvbi5cbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoYW5kbGVGb2N1c091dEV2ZW50XyhldnQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0TGlzdEl0ZW1JbmRleF8oZXZ0KTtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZUZvY3VzT3V0KGV2dCwgaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZmlndXJlIG91dCB3aGljaCBlbGVtZW50IHdhcyBmb2N1c2VkIHdoZW4ga2V5ZG93biBldmVudCBvY2N1cnJlZCBiZWZvcmUgc2VuZGluZyB0aGUgZXZlbnQgdG8gdGhlXG4gICAqIGZvdW5kYXRpb24uXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlS2V5ZG93bkV2ZW50XyhldnQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0TGlzdEl0ZW1JbmRleF8oZXZ0KTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZUtleWRvd24oZXZ0LCBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUyksIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBmaWd1cmUgb3V0IHdoaWNoIGVsZW1lbnQgd2FzIGNsaWNrZWQgYmVmb3JlIHNlbmRpbmcgdGhlIGV2ZW50IHRvIHRoZSBmb3VuZGF0aW9uLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhbmRsZUNsaWNrRXZlbnRfKGV2dCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRMaXN0SXRlbUluZGV4XyhldnQpO1xuXG4gICAgLy8gVG9nZ2xlIHRoZSBjaGVja2JveCBvbmx5IGlmIGl0J3Mgbm90IHRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50LCBvciB0aGUgY2hlY2tib3ggd2lsbCBoYXZlIDIgY2hhbmdlIGV2ZW50cy5cbiAgICBjb25zdCB0b2dnbGVDaGVja2JveCA9ICFtYXRjaGVzKC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovIChldnQudGFyZ2V0KSwgc3RyaW5ncy5DSEVDS0JPWF9SQURJT19TRUxFQ1RPUik7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVDbGljayhpbmRleCwgdG9nZ2xlQ2hlY2tib3gpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgc2VsZWN0ZWRJbmRleCB2YWx1ZSBiYXNlZCBvbiBwcmUtc2VsZWN0ZWQgY2hlY2tib3ggbGlzdCBpdGVtcywgc2luZ2xlIHNlbGVjdGlvbiBvciByYWRpby5cbiAgICovXG4gIGluaXRpYWxpemVMaXN0VHlwZSgpIHtcbiAgICBjb25zdCBjaGVja2JveExpc3RJdGVtcyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkFSSUFfUk9MRV9DSEVDS0JPWF9TRUxFQ1RPUik7XG4gICAgY29uc3Qgc2luZ2xlU2VsZWN0ZWRMaXN0SXRlbSA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihgLiR7Y3NzQ2xhc3Nlcy5MSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTfSxcbiAgICAgICAgLiR7Y3NzQ2xhc3Nlcy5MSVNUX0lURU1fU0VMRUNURURfQ0xBU1N9YCk7XG4gICAgY29uc3QgcmFkaW9TZWxlY3RlZExpc3RJdGVtID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuQVJJQV9DSEVDS0VEX1JBRElPX1NFTEVDVE9SKTtcblxuICAgIGlmIChjaGVja2JveExpc3RJdGVtcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHByZXNlbGVjdGVkSXRlbXMgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5BUklBX0NIRUNLRURfQ0hFQ0tCT1hfU0VMRUNUT1IpO1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gW10ubWFwLmNhbGwocHJlc2VsZWN0ZWRJdGVtcywgKGxpc3RJdGVtKSA9PiB0aGlzLmxpc3RFbGVtZW50cy5pbmRleE9mKGxpc3RJdGVtKSk7XG4gICAgfSBlbHNlIGlmIChzaW5nbGVTZWxlY3RlZExpc3RJdGVtKSB7XG4gICAgICBpZiAoc2luZ2xlU2VsZWN0ZWRMaXN0SXRlbS5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTKSkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFVzZUFjdGl2YXRlZENsYXNzKHRydWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNpbmdsZVNlbGVjdGlvbiA9IHRydWU7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmxpc3RFbGVtZW50cy5pbmRleE9mKHNpbmdsZVNlbGVjdGVkTGlzdEl0ZW0pO1xuICAgIH0gZWxzZSBpZiAocmFkaW9TZWxlY3RlZExpc3RJdGVtKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmxpc3RFbGVtZW50cy5pbmRleE9mKHJhZGlvU2VsZWN0ZWRMaXN0SXRlbSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgKi9cbiAgc2V0IHZlcnRpY2FsKHZhbHVlKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRWZXJ0aWNhbE9yaWVudGF0aW9uKHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIEFycmF5PCFFbGVtZW50PiovXG4gIGdldCBsaXN0RWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuRU5BQkxFRF9JVEVNU19TRUxFQ1RPUikpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgKi9cbiAgc2V0IHdyYXBGb2N1cyh2YWx1ZSkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0V3JhcEZvY3VzKHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2luZ2xlU2VsZWN0aW9uTGlzdCAqL1xuICBzZXQgc2luZ2xlU2VsZWN0aW9uKGlzU2luZ2xlU2VsZWN0aW9uTGlzdCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0U2luZ2xlU2VsZWN0aW9uKGlzU2luZ2xlU2VsZWN0aW9uTGlzdCk7XG4gIH1cblxuICAvKiogQHJldHVybiB7IUluZGV4fSAqL1xuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5nZXRTZWxlY3RlZEluZGV4KCk7XG4gIH1cblxuICAvKiogQHBhcmFtIHshSW5kZXh9IGluZGV4ICovXG4gIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshTURDTGlzdEZvdW5kYXRpb259ICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDTGlzdEZvdW5kYXRpb24oLyoqIEB0eXBlIHshTURDTGlzdEFkYXB0ZXJ9ICovIChPYmplY3QuYXNzaWduKHtcbiAgICAgIGdldExpc3RJdGVtQ291bnQ6ICgpID0+IHRoaXMubGlzdEVsZW1lbnRzLmxlbmd0aCxcbiAgICAgIGdldEZvY3VzZWRFbGVtZW50SW5kZXg6ICgpID0+IHRoaXMubGlzdEVsZW1lbnRzLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCksXG4gICAgICBzZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXg6IChpbmRleCwgYXR0ciwgdmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZW1vdmVBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXg6IChpbmRleCwgYXR0cikgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYWRkQ2xhc3NGb3JFbGVtZW50SW5kZXg6IChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleDogKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZvY3VzSXRlbUF0SW5kZXg6IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbjogKGxpc3RJdGVtSW5kZXgsIHRhYkluZGV4VmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2xpc3RJdGVtSW5kZXhdO1xuICAgICAgICBjb25zdCBsaXN0SXRlbUNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5DSElMRF9FTEVNRU5UU19UT19UT0dHTEVfVEFCSU5ERVgpKTtcbiAgICAgICAgbGlzdEl0ZW1DaGlsZHJlbi5mb3JFYWNoKChlbGUpID0+IGVsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdGFiSW5kZXhWYWx1ZSkpO1xuICAgICAgfSxcbiAgICAgIGhhc0NoZWNrYm94QXRJbmRleDogKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICByZXR1cm4gISFsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuQ0hFQ0tCT1hfU0VMRUNUT1IpO1xuICAgICAgfSxcbiAgICAgIGhhc1JhZGlvQXRJbmRleDogKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICByZXR1cm4gISFsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuUkFESU9fU0VMRUNUT1IpO1xuICAgICAgfSxcbiAgICAgIGlzQ2hlY2tib3hDaGVja2VkQXRJbmRleDogKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICBjb25zdCB0b2dnbGVFbCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5DSEVDS0JPWF9TRUxFQ1RPUik7XG4gICAgICAgIHJldHVybiB0b2dnbGVFbC5jaGVja2VkO1xuICAgICAgfSxcbiAgICAgIHNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4OiAoaW5kZXgsIGlzQ2hlY2tlZCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgY29uc3QgdG9nZ2xlRWwgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuQ0hFQ0tCT1hfUkFESU9fU0VMRUNUT1IpO1xuICAgICAgICB0b2dnbGVFbC5jaGVja2VkID0gaXNDaGVja2VkO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICAgIGV2ZW50LmluaXRFdmVudCgnY2hhbmdlJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHRvZ2dsZUVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgfSxcbiAgICAgIG5vdGlmeUFjdGlvbjogKGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdChzdHJpbmdzLkFDVElPTl9FVkVOVCwgaW5kZXgsIC8qKiBzaG91bGRCdWJibGUgKi8gdHJ1ZSk7XG4gICAgICB9LFxuICAgICAgaXNGb2N1c0luc2lkZUxpc3Q6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdF8uY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICB9LFxuICAgIH0pKSk7XG4gIH1cbn1cblxuZXhwb3J0IHtNRENMaXN0LCBNRENMaXN0Rm91bmRhdGlvbn07XG4iLCJ2YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gW1xuICAnaW5wdXQnLFxuICAnc2VsZWN0JyxcbiAgJ3RleHRhcmVhJyxcbiAgJ2FbaHJlZl0nLFxuICAnYnV0dG9uJyxcbiAgJ1t0YWJpbmRleF0nLFxuICAnYXVkaW9bY29udHJvbHNdJyxcbiAgJ3ZpZGVvW2NvbnRyb2xzXScsXG4gICdbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCJdKScsXG5dO1xudmFyIGNhbmRpZGF0ZVNlbGVjdG9yID0gY2FuZGlkYXRlU2VsZWN0b3JzLmpvaW4oJywnKTtcblxudmFyIG1hdGNoZXMgPSB0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCdcbiAgPyBmdW5jdGlvbiAoKSB7fVxuICA6IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXG5mdW5jdGlvbiB0YWJiYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgZWxlbWVudERvY3VtZW50ID0gZWwub3duZXJEb2N1bWVudCB8fCBlbDtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcblxuICB2YXIgdW50b3VjaGFiaWxpdHlDaGVja2VyID0gbmV3IFVudG91Y2hhYmlsaXR5Q2hlY2tlcihlbGVtZW50RG9jdW1lbnQpO1xuICB2YXIgY2FuZGlkYXRlcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2FuZGlkYXRlU2VsZWN0b3IpO1xuXG4gIGlmIChvcHRpb25zLmluY2x1ZGVDb250YWluZXIpIHtcbiAgICBpZiAobWF0Y2hlcy5jYWxsKGVsLCBjYW5kaWRhdGVTZWxlY3RvcikpIHtcbiAgICAgIGNhbmRpZGF0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoY2FuZGlkYXRlcyk7XG4gICAgICBjYW5kaWRhdGVzLnVuc2hpZnQoZWwpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpLCBjYW5kaWRhdGUsIGNhbmRpZGF0ZVRhYmluZGV4O1xuICBmb3IgKGkgPSAwOyBpIDwgY2FuZGlkYXRlcy5sZW5ndGg7IGkrKykge1xuICAgIGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZXNbaV07XG5cbiAgICBpZiAoIWlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShjYW5kaWRhdGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcikpIGNvbnRpbnVlO1xuXG4gICAgY2FuZGlkYXRlVGFiaW5kZXggPSBnZXRUYWJpbmRleChjYW5kaWRhdGUpO1xuICAgIGlmIChjYW5kaWRhdGVUYWJpbmRleCA9PT0gMCkge1xuICAgICAgcmVndWxhclRhYmJhYmxlcy5wdXNoKGNhbmRpZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yZGVyZWRUYWJiYWJsZXMucHVzaCh7XG4gICAgICAgIGRvY3VtZW50T3JkZXI6IGksXG4gICAgICAgIHRhYkluZGV4OiBjYW5kaWRhdGVUYWJpbmRleCxcbiAgICAgICAgbm9kZTogY2FuZGlkYXRlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHRhYmJhYmxlTm9kZXMgPSBvcmRlcmVkVGFiYmFibGVzXG4gICAgLnNvcnQoc29ydE9yZGVyZWRUYWJiYWJsZXMpXG4gICAgLm1hcChmdW5jdGlvbihhKSB7IHJldHVybiBhLm5vZGUgfSlcbiAgICAuY29uY2F0KHJlZ3VsYXJUYWJiYWJsZXMpO1xuXG4gIHJldHVybiB0YWJiYWJsZU5vZGVzO1xufVxuXG50YWJiYWJsZS5pc1RhYmJhYmxlID0gaXNUYWJiYWJsZTtcbnRhYmJhYmxlLmlzRm9jdXNhYmxlID0gaXNGb2N1c2FibGU7XG5cbmZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpIHtcbiAgaWYgKFxuICAgICFpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcilcbiAgICB8fCBpc05vblRhYmJhYmxlUmFkaW8obm9kZSlcbiAgICB8fCBnZXRUYWJpbmRleChub2RlKSA8IDBcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc1RhYmJhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcikge1xuICBpZiAoIW5vZGUpIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpO1xufVxuXG5mdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcikge1xuICB1bnRvdWNoYWJpbGl0eUNoZWNrZXIgPSB1bnRvdWNoYWJpbGl0eUNoZWNrZXIgfHwgbmV3IFVudG91Y2hhYmlsaXR5Q2hlY2tlcihub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZSk7XG4gIGlmIChcbiAgICBub2RlLmRpc2FibGVkXG4gICAgfHwgaXNIaWRkZW5JbnB1dChub2RlKVxuICAgIHx8IHVudG91Y2hhYmlsaXR5Q2hlY2tlci5pc1VudG91Y2hhYmxlKG5vZGUpXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxudmFyIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yID0gY2FuZGlkYXRlU2VsZWN0b3JzLmNvbmNhdCgnaWZyYW1lJykuam9pbignLCcpO1xuZnVuY3Rpb24gaXNGb2N1c2FibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKSB7XG4gIGlmICghbm9kZSkgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpO1xufVxuXG5mdW5jdGlvbiBnZXRUYWJpbmRleChub2RlKSB7XG4gIHZhciB0YWJpbmRleEF0dHIgPSBwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSwgMTApO1xuICBpZiAoIWlzTmFOKHRhYmluZGV4QXR0cikpIHJldHVybiB0YWJpbmRleEF0dHI7XG4gIC8vIEJyb3dzZXJzIGRvIG5vdCByZXR1cm4gYHRhYkluZGV4YCBjb3JyZWN0bHkgZm9yIGNvbnRlbnRFZGl0YWJsZSBub2RlcztcbiAgLy8gc28gaWYgdGhleSBkb24ndCBoYXZlIGEgdGFiaW5kZXggYXR0cmlidXRlIHNwZWNpZmljYWxseSBzZXQsIGFzc3VtZSBpdCdzIDAuXG4gIGlmIChpc0NvbnRlbnRFZGl0YWJsZShub2RlKSkgcmV0dXJuIDA7XG4gIHJldHVybiBub2RlLnRhYkluZGV4O1xufVxuXG5mdW5jdGlvbiBzb3J0T3JkZXJlZFRhYmJhYmxlcyhhLCBiKSB7XG4gIHJldHVybiBhLnRhYkluZGV4ID09PSBiLnRhYkluZGV4ID8gYS5kb2N1bWVudE9yZGVyIC0gYi5kb2N1bWVudE9yZGVyIDogYS50YWJJbmRleCAtIGIudGFiSW5kZXg7XG59XG5cbi8vIEFycmF5LnByb3RvdHlwZS5maW5kIG5vdCBhdmFpbGFibGUgaW4gSUUuXG5mdW5jdGlvbiBmaW5kKGxpc3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gbGlzdC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChwcmVkaWNhdGUobGlzdFtpXSkpIHJldHVybiBsaXN0W2ldO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQ29udGVudEVkaXRhYmxlKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZSc7XG59XG5cbmZ1bmN0aW9uIGlzSW5wdXQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU5QVVQnO1xufVxuXG5mdW5jdGlvbiBpc0hpZGRlbklucHV0KG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAnaGlkZGVuJztcbn1cblxuZnVuY3Rpb24gaXNSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ3JhZGlvJztcbn1cblxuZnVuY3Rpb24gaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzUmFkaW8obm9kZSkgJiYgIWlzVGFiYmFibGVSYWRpbyhub2RlKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2hlY2tlZFJhZGlvKG5vZGVzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm9kZXNbaV0uY2hlY2tlZCkge1xuICAgICAgcmV0dXJuIG5vZGVzW2ldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc1RhYmJhYmxlUmFkaW8obm9kZSkge1xuICBpZiAoIW5vZGUubmFtZSkgcmV0dXJuIHRydWU7XG4gIC8vIFRoaXMgd29uJ3QgYWNjb3VudCBmb3IgdGhlIGVkZ2UgY2FzZSB3aGVyZSB5b3UgaGF2ZSByYWRpbyBncm91cHMgd2l0aCB0aGUgc2FtZVxuICAvLyBpbiBzZXBhcmF0ZSBmb3JtcyBvbiB0aGUgc2FtZSBwYWdlLlxuICB2YXIgcmFkaW9TZXQgPSBub2RlLm93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCInICsgbm9kZS5uYW1lICsgJ1wiXScpO1xuICB2YXIgY2hlY2tlZCA9IGdldENoZWNrZWRSYWRpbyhyYWRpb1NldCk7XG4gIHJldHVybiAhY2hlY2tlZCB8fCBjaGVja2VkID09PSBub2RlO1xufVxuXG4vLyBBbiBlbGVtZW50IGlzIFwidW50b3VjaGFibGVcIiBpZiAqaXQgb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMqIGhhc1xuLy8gYHZpc2liaWxpdHk6IGhpZGRlbmAgb3IgYGRpc3BsYXk6IG5vbmVgLlxuZnVuY3Rpb24gVW50b3VjaGFiaWxpdHlDaGVja2VyKGVsZW1lbnREb2N1bWVudCkge1xuICB0aGlzLmRvYyA9IGVsZW1lbnREb2N1bWVudDtcbiAgLy8gTm9kZSBjYWNoZSBtdXN0IGJlIHJlZnJlc2hlZCBvbiBldmVyeSBjaGVjaywgaW4gY2FzZVxuICAvLyB0aGUgY29udGVudCBvZiB0aGUgZWxlbWVudCBoYXMgY2hhbmdlZC4gVGhlIGNhY2hlIGNvbnRhaW5zIHR1cGxlc1xuICAvLyBtYXBwaW5nIG5vZGVzIHRvIHRoZWlyIGJvb2xlYW4gcmVzdWx0LlxuICB0aGlzLmNhY2hlID0gW107XG59XG5cbi8vIGdldENvbXB1dGVkU3R5bGUgYWNjdXJhdGVseSByZWZsZWN0cyBgdmlzaWJpbGl0eTogaGlkZGVuYCBvZiBhbmNlc3RvcnNcbi8vIGJ1dCBub3QgYGRpc3BsYXk6IG5vbmVgLCBzbyB3ZSBuZWVkIHRvIHJlY3Vyc2l2ZWx5IGNoZWNrIHBhcmVudHMuXG5VbnRvdWNoYWJpbGl0eUNoZWNrZXIucHJvdG90eXBlLmhhc0Rpc3BsYXlOb25lID0gZnVuY3Rpb24gaGFzRGlzcGxheU5vbmUobm9kZSwgbm9kZUNvbXB1dGVkU3R5bGUpIHtcbiAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBTZWFyY2ggZm9yIGEgY2FjaGVkIHJlc3VsdC5cbiAgICB2YXIgY2FjaGVkID0gZmluZCh0aGlzLmNhY2hlLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbSA9PT0gbm9kZTtcbiAgICB9KTtcbiAgICBpZiAoY2FjaGVkKSByZXR1cm4gY2FjaGVkWzFdO1xuXG4gICAgbm9kZUNvbXB1dGVkU3R5bGUgPSBub2RlQ29tcHV0ZWRTdHlsZSB8fCB0aGlzLmRvYy5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgaWYgKG5vZGVDb21wdXRlZFN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5oYXNEaXNwbGF5Tm9uZShub2RlLnBhcmVudE5vZGUpO1xuICAgIH1cblxuICAgIHRoaXMuY2FjaGUucHVzaChbbm9kZSwgcmVzdWx0XSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5VbnRvdWNoYWJpbGl0eUNoZWNrZXIucHJvdG90eXBlLmlzVW50b3VjaGFibGUgPSBmdW5jdGlvbiBpc1VudG91Y2hhYmxlKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IHRoaXMuZG9jLmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIGlmICh0aGlzLmhhc0Rpc3BsYXlOb25lKG5vZGUsIGNvbXB1dGVkU3R5bGUpKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGNvbXB1dGVkU3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbic7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGFiYmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIiwidmFyIHRhYmJhYmxlID0gcmVxdWlyZSgndGFiYmFibGUnKTtcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG5cbnZhciBhY3RpdmVGb2N1c1RyYXBzID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdHJhcFF1ZXVlID0gW107XG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVUcmFwOiBmdW5jdGlvbih0cmFwKSB7XG4gICAgICBpZiAodHJhcFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGFjdGl2ZVRyYXAgPSB0cmFwUXVldWVbdHJhcFF1ZXVlLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoYWN0aXZlVHJhcCAhPT0gdHJhcCkge1xuICAgICAgICAgIGFjdGl2ZVRyYXAucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdHJhcEluZGV4ID0gdHJhcFF1ZXVlLmluZGV4T2YodHJhcCk7XG4gICAgICBpZiAodHJhcEluZGV4ID09PSAtMSkge1xuICAgICAgICB0cmFwUXVldWUucHVzaCh0cmFwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG1vdmUgdGhpcyBleGlzdGluZyB0cmFwIHRvIHRoZSBmcm9udCBvZiB0aGUgcXVldWVcbiAgICAgICAgdHJhcFF1ZXVlLnNwbGljZSh0cmFwSW5kZXgsIDEpO1xuICAgICAgICB0cmFwUXVldWUucHVzaCh0cmFwKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGVhY3RpdmF0ZVRyYXA6IGZ1bmN0aW9uKHRyYXApIHtcbiAgICAgIHZhciB0cmFwSW5kZXggPSB0cmFwUXVldWUuaW5kZXhPZih0cmFwKTtcbiAgICAgIGlmICh0cmFwSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRyYXBRdWV1ZS5zcGxpY2UodHJhcEluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRyYXBRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyYXBRdWV1ZVt0cmFwUXVldWUubGVuZ3RoIC0gMV0udW5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGZvY3VzVHJhcChlbGVtZW50LCB1c2VyT3B0aW9ucykge1xuICB2YXIgZG9jID0gZG9jdW1lbnQ7XG4gIHZhciBjb250YWluZXIgPVxuICAgIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IGRvYy5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpIDogZWxlbWVudDtcblxuICB2YXIgY29uZmlnID0geHRlbmQoXG4gICAge1xuICAgICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IHRydWUsXG4gICAgICBlc2NhcGVEZWFjdGl2YXRlczogdHJ1ZVxuICAgIH0sXG4gICAgdXNlck9wdGlvbnNcbiAgKTtcblxuICB2YXIgc3RhdGUgPSB7XG4gICAgZmlyc3RUYWJiYWJsZU5vZGU6IG51bGwsXG4gICAgbGFzdFRhYmJhYmxlTm9kZTogbnVsbCxcbiAgICBub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb246IG51bGwsXG4gICAgbW9zdFJlY2VudGx5Rm9jdXNlZE5vZGU6IG51bGwsXG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBwYXVzZWQ6IGZhbHNlXG4gIH07XG5cbiAgdmFyIHRyYXAgPSB7XG4gICAgYWN0aXZhdGU6IGFjdGl2YXRlLFxuICAgIGRlYWN0aXZhdGU6IGRlYWN0aXZhdGUsXG4gICAgcGF1c2U6IHBhdXNlLFxuICAgIHVucGF1c2U6IHVucGF1c2VcbiAgfTtcblxuICByZXR1cm4gdHJhcDtcblxuICBmdW5jdGlvbiBhY3RpdmF0ZShhY3RpdmF0ZU9wdGlvbnMpIHtcbiAgICBpZiAoc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG5cbiAgICBzdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgIHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbiA9IGRvYy5hY3RpdmVFbGVtZW50O1xuXG4gICAgdmFyIG9uQWN0aXZhdGUgPVxuICAgICAgYWN0aXZhdGVPcHRpb25zICYmIGFjdGl2YXRlT3B0aW9ucy5vbkFjdGl2YXRlXG4gICAgICAgID8gYWN0aXZhdGVPcHRpb25zLm9uQWN0aXZhdGVcbiAgICAgICAgOiBjb25maWcub25BY3RpdmF0ZTtcbiAgICBpZiAob25BY3RpdmF0ZSkge1xuICAgICAgb25BY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycygpO1xuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVhY3RpdmF0ZShkZWFjdGl2YXRlT3B0aW9ucykge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICBzdGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcblxuICAgIGFjdGl2ZUZvY3VzVHJhcHMuZGVhY3RpdmF0ZVRyYXAodHJhcCk7XG5cbiAgICB2YXIgb25EZWFjdGl2YXRlID1cbiAgICAgIGRlYWN0aXZhdGVPcHRpb25zICYmIGRlYWN0aXZhdGVPcHRpb25zLm9uRGVhY3RpdmF0ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZGVhY3RpdmF0ZU9wdGlvbnMub25EZWFjdGl2YXRlXG4gICAgICAgIDogY29uZmlnLm9uRGVhY3RpdmF0ZTtcbiAgICBpZiAob25EZWFjdGl2YXRlKSB7XG4gICAgICBvbkRlYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0dXJuRm9jdXMgPVxuICAgICAgZGVhY3RpdmF0ZU9wdGlvbnMgJiYgZGVhY3RpdmF0ZU9wdGlvbnMucmV0dXJuRm9jdXMgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGRlYWN0aXZhdGVPcHRpb25zLnJldHVybkZvY3VzXG4gICAgICAgIDogY29uZmlnLnJldHVybkZvY3VzT25EZWFjdGl2YXRlO1xuICAgIGlmIChyZXR1cm5Gb2N1cykge1xuICAgICAgZGVsYXkoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRyeUZvY3VzKHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgIGlmIChzdGF0ZS5wYXVzZWQgfHwgIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuICAgIHN0YXRlLnBhdXNlZCA9IHRydWU7XG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1bnBhdXNlKCkge1xuICAgIGlmICghc3RhdGUucGF1c2VkIHx8ICFzdGF0ZS5hY3RpdmUpIHJldHVybjtcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICBpZiAoIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgLy8gVGhlcmUgY2FuIGJlIG9ubHkgb25lIGxpc3RlbmluZyBmb2N1cyB0cmFwIGF0IGEgdGltZVxuICAgIGFjdGl2ZUZvY3VzVHJhcHMuYWN0aXZhdGVUcmFwKHRyYXApO1xuXG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuXG4gICAgLy8gRGVsYXkgZW5zdXJlcyB0aGF0IHRoZSBmb2N1c2VkIGVsZW1lbnQgZG9lc24ndCBjYXB0dXJlIHRoZSBldmVudFxuICAgIC8vIHRoYXQgY2F1c2VkIHRoZSBmb2N1cyB0cmFwIGFjdGl2YXRpb24uXG4gICAgZGVsYXkoZnVuY3Rpb24oKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgY2hlY2tGb2N1c0luLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB0cnVlKTtcblxuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGNoZWNrRm9jdXNJbiwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDbGljaywgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGVja0tleSwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5vZGVGb3JPcHRpb24ob3B0aW9uTmFtZSkge1xuICAgIHZhciBvcHRpb25WYWx1ZSA9IGNvbmZpZ1tvcHRpb25OYW1lXTtcbiAgICB2YXIgbm9kZSA9IG9wdGlvblZhbHVlO1xuICAgIGlmICghb3B0aW9uVmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgbm9kZSA9IGRvYy5xdWVyeVNlbGVjdG9yKG9wdGlvblZhbHVlKTtcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2AnICsgb3B0aW9uTmFtZSArICdgIHJlZmVycyB0byBubyBrbm93biBub2RlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5vZGUgPSBvcHRpb25WYWx1ZSgpO1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBvcHRpb25OYW1lICsgJ2AgZGlkIG5vdCByZXR1cm4gYSBub2RlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5pdGlhbEZvY3VzTm9kZSgpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAoZ2V0Tm9kZUZvck9wdGlvbignaW5pdGlhbEZvY3VzJykgIT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSBnZXROb2RlRm9yT3B0aW9uKCdpbml0aWFsRm9jdXMnKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5jb250YWlucyhkb2MuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIG5vZGUgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZSA9IHN0YXRlLmZpcnN0VGFiYmFibGVOb2RlIHx8IGdldE5vZGVGb3JPcHRpb24oJ2ZhbGxiYWNrRm9jdXMnKTtcbiAgICB9XG5cbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJZb3UgY2FuJ3QgaGF2ZSBhIGZvY3VzLXRyYXAgd2l0aG91dCBhdCBsZWFzdCBvbmUgZm9jdXNhYmxlIGVsZW1lbnRcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIC8vIFRoaXMgbmVlZHMgdG8gYmUgZG9uZSBvbiBtb3VzZWRvd24gYW5kIHRvdWNoc3RhcnQgaW5zdGVhZCBvZiBjbGlja1xuICAvLyBzbyB0aGF0IGl0IHByZWNlZGVzIHRoZSBmb2N1cyBldmVudC5cbiAgZnVuY3Rpb24gY2hlY2tQb2ludGVyRG93bihlKSB7XG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcbiAgICBpZiAoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzKSB7XG4gICAgICBkZWFjdGl2YXRlKHtcbiAgICAgICAgcmV0dXJuRm9jdXM6ICF0YWJiYWJsZS5pc0ZvY3VzYWJsZShlLnRhcmdldClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gSW4gY2FzZSBmb2N1cyBlc2NhcGVzIHRoZSB0cmFwIGZvciBzb21lIHN0cmFuZ2UgcmVhc29uLCBwdWxsIGl0IGJhY2sgaW4uXG4gIGZ1bmN0aW9uIGNoZWNrRm9jdXNJbihlKSB7XG4gICAgLy8gSW4gRmlyZWZveCB3aGVuIHlvdSBUYWIgb3V0IG9mIGFuIGlmcmFtZSB0aGUgRG9jdW1lbnQgaXMgYnJpZWZseSBmb2N1c2VkLlxuICAgIGlmIChjb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpIHx8IGUudGFyZ2V0IGluc3RhbmNlb2YgRG9jdW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB0cnlGb2N1cyhzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSB8fCBnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tLZXkoZSkge1xuICAgIGlmIChjb25maWcuZXNjYXBlRGVhY3RpdmF0ZXMgIT09IGZhbHNlICYmIGlzRXNjYXBlRXZlbnQoZSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRlYWN0aXZhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzVGFiRXZlbnQoZSkpIHtcbiAgICAgIGNoZWNrVGFiKGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhpamFjayBUYWIgZXZlbnRzIG9uIHRoZSBmaXJzdCBhbmQgbGFzdCBmb2N1c2FibGUgbm9kZXMgb2YgdGhlIHRyYXAsXG4gIC8vIGluIG9yZGVyIHRvIHByZXZlbnQgZm9jdXMgZnJvbSBlc2NhcGluZy4gSWYgaXQgZXNjYXBlcyBmb3IgZXZlbiBhXG4gIC8vIG1vbWVudCBpdCBjYW4gZW5kIHVwIHNjcm9sbGluZyB0aGUgcGFnZSBhbmQgY2F1c2luZyBjb25mdXNpb24gc28gd2VcbiAgLy8ga2luZCBvZiBuZWVkIHRvIGNhcHR1cmUgdGhlIGFjdGlvbiBhdCB0aGUga2V5ZG93biBwaGFzZS5cbiAgZnVuY3Rpb24gY2hlY2tUYWIoZSkge1xuICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICBpZiAoZS5zaGlmdEtleSAmJiBlLnRhcmdldCA9PT0gc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRyeUZvY3VzKHN0YXRlLmxhc3RUYWJiYWJsZU5vZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWUuc2hpZnRLZXkgJiYgZS50YXJnZXQgPT09IHN0YXRlLmxhc3RUYWJiYWJsZU5vZGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRyeUZvY3VzKHN0YXRlLmZpcnN0VGFiYmFibGVOb2RlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0NsaWNrKGUpIHtcbiAgICBpZiAoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzKSByZXR1cm47XG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKSB7XG4gICAgdmFyIHRhYmJhYmxlTm9kZXMgPSB0YWJiYWJsZShjb250YWluZXIpO1xuICAgIHN0YXRlLmZpcnN0VGFiYmFibGVOb2RlID0gdGFiYmFibGVOb2Rlc1swXSB8fCBnZXRJbml0aWFsRm9jdXNOb2RlKCk7XG4gICAgc3RhdGUubGFzdFRhYmJhYmxlTm9kZSA9XG4gICAgICB0YWJiYWJsZU5vZGVzW3RhYmJhYmxlTm9kZXMubGVuZ3RoIC0gMV0gfHwgZ2V0SW5pdGlhbEZvY3VzTm9kZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJ5Rm9jdXMobm9kZSkge1xuICAgIGlmIChub2RlID09PSBkb2MuYWN0aXZlRWxlbWVudCkgcmV0dXJuO1xuICAgIGlmICghbm9kZSB8fCAhbm9kZS5mb2N1cykge1xuICAgICAgdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBub2RlLmZvY3VzKCk7XG4gICAgc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgPSBub2RlO1xuICAgIGlmIChpc1NlbGVjdGFibGVJbnB1dChub2RlKSkge1xuICAgICAgbm9kZS5zZWxlY3QoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTZWxlY3RhYmxlSW5wdXQobm9kZSkge1xuICByZXR1cm4gKFxuICAgIG5vZGUudGFnTmFtZSAmJlxuICAgIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnICYmXG4gICAgdHlwZW9mIG5vZGUuc2VsZWN0ID09PSAnZnVuY3Rpb24nXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzRXNjYXBlRXZlbnQoZSkge1xuICByZXR1cm4gZS5rZXkgPT09ICdFc2NhcGUnIHx8IGUua2V5ID09PSAnRXNjJyB8fCBlLmtleUNvZGUgPT09IDI3O1xufVxuXG5mdW5jdGlvbiBpc1RhYkV2ZW50KGUpIHtcbiAgcmV0dXJuIGUua2V5ID09PSAnVGFiJyB8fCBlLmtleUNvZGUgPT09IDk7XG59XG5cbmZ1bmN0aW9uIGRlbGF5KGZuKSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KGZuLCAwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmb2N1c1RyYXA7XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGFzaWRlIHJlZj1cImRyYXdlclwiIDpjbGFzcz1cImNsYXNzZXNcIiBjbGFzcz1cIm1kYy1kcmF3ZXIgbWRjLWRyYXdlci0tbW9kYWxcIj5cbiAgICAgIDxzbG90IHYtaWY9XCIkc2xvdHNbJ2hlYWRlciddXCIgbmFtZT1cImhlYWRlclwiPjwvc2xvdD5cbiAgICAgIDwhLS0gPGRpdiB2LWlmPVwiJHNsb3RzWydoZWFkZXInXVwiIGNsYXNzPVwibWRjLWRyYXdlcl9faGVhZGVyXCI+PDwvZGl2PiAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtZHJhd2VyX19jb250ZW50XCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgIDwvYXNpZGU+XG4gICAgPGRpdiBjbGFzcz1cIm1kYy1kcmF3ZXItc2NyaW1cIj48L2Rpdj5cblxuICAgIDxkaXYgdi1pZj1cInRvb2xiYXJTcGFjZXJcIiBjbGFzcz1cIm1kYy10b3AtYXBwLWJhci0tZml4ZWQtYWRqdXN0XCIgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvZHJhd2VyL2Rpc21pc3NpYmxlL2ZvdW5kYXRpb24nXG5pbXBvcnQgTURDTW9kYWxEcmF3ZXJGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9kcmF3ZXIvbW9kYWwvZm91bmRhdGlvbidcbmltcG9ydCB7IE1EQ0xpc3QgfSBmcm9tICdAbWF0ZXJpYWwvbGlzdC9pbmRleCdcbmltcG9ydCBNRENMaXN0Rm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvbGlzdC9mb3VuZGF0aW9uJ1xuaW1wb3J0IGNyZWF0ZUZvY3VzVHJhcCBmcm9tICdmb2N1cy10cmFwJ1xuXG5jb25zdCBtZWRpYSA9IG5ldyBjbGFzcyB7XG4gIGdldCBzbWFsbCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fc21hbGwgfHwgKHRoaXMuX3NtYWxsID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDgzOXB4KScpKVxuICAgIClcbiAgfVxuXG4gIGdldCBsYXJnZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fbGFyZ2UgfHwgKHRoaXMuX2xhcmdlID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEyMDBweCknKSlcbiAgICApXG4gIH1cbn0oKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtZHJhd2VyJyxcbiAgbW9kZWw6IHtcbiAgICBwcm9wOiAnb3BlbicsXG4gICAgZXZlbnQ6ICdjaGFuZ2UnXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgbW9kYWw6IEJvb2xlYW4sXG4gICAgb3BlbjogQm9vbGVhbixcbiAgICB0b29sYmFyU3BhY2VyOiBCb29sZWFuLFxuICAgIHRvZ2dsZU9uOiBTdHJpbmcsXG4gICAgdG9nZ2xlT25Tb3VyY2U6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgIH0sXG4gICAgb3Blbk9uOiBTdHJpbmcsXG4gICAgb3Blbk9uU291cmNlOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogZmFsc2VcbiAgICB9LFxuICAgIGNsb3NlT246IFN0cmluZyxcbiAgICBjbG9zZU9uU291cmNlOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIHByb3ZpZGUoKSB7XG4gICAgcmV0dXJuIHsgbWRjRHJhd2VyOiB0aGlzIH1cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gb3Blbl86IGZhbHNlLFxuICAgICAgY2xhc3Nlczoge31cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgdHlwZSgpIHt9LFxuICAgIGlzTW9kYWwoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb2RhbFxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBvcGVuOiAnb25PcGVuXydcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmRyYXdlcl8gPSB0aGlzLiRyZWZzLmRyYXdlclxuICAgIGNvbnN0IGFkYXB0ZXIgPSB7XG4gICAgICBhZGRDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSksXG4gICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGRlbGV0ZSh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSksXG4gICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuZHJhd2VyXy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcbiAgICAgIGVsZW1lbnRIYXNDbGFzczogKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT5cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcbiAgICAgIHNhdmVGb2N1czogKCkgPT4ge1xuICAgICAgICB0aGlzLnByZXZpb3VzRm9jdXNfID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgfSxcbiAgICAgIHJlc3RvcmVGb2N1czogKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2aW91c0ZvY3VzID0gdGhpcy5wcmV2aW91c0ZvY3VzXyAmJiB0aGlzLnByZXZpb3VzRm9jdXNfLmZvY3VzXG4gICAgICAgIGlmICh0aGlzLmRyYXdlcl8uY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgJiYgcHJldmlvdXNGb2N1cykge1xuICAgICAgICAgIHRoaXMucHJldmlvdXNGb2N1c18uZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZm9jdXNBY3RpdmVOYXZpZ2F0aW9uSXRlbTogKCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVOYXZJdGVtRWwgPSB0aGlzLmRyYXdlcl8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLiR7TURDTGlzdEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTfWBcbiAgICAgICAgKVxuICAgICAgICBpZiAoYWN0aXZlTmF2SXRlbUVsKSB7XG4gICAgICAgICAgYWN0aXZlTmF2SXRlbUVsLmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG5vdGlmeUNsb3NlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGZhbHNlKVxuICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpXG4gICAgICB9LFxuICAgICAgbm90aWZ5T3BlbjogKCkgPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0cnVlKVxuICAgICAgICB0aGlzLiRlbWl0KCdvcGVuJylcbiAgICAgIH0sXG4gICAgICB0cmFwRm9jdXM6ICgpID0+IHRoaXMuZm9jdXNUcmFwXy5hY3RpdmF0ZSgpLFxuICAgICAgcmVsZWFzZUZvY3VzOiAoKSA9PiB0aGlzLmZvY3VzVHJhcF8uZGVhY3RpdmF0ZSgpXG4gICAgfVxuXG4gICAgY29uc3QgeyBESVNNSVNTSUJMRSwgTU9EQUwgfSA9IE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5jc3NDbGFzc2VzXG4gICAgaWYgKHRoaXMuZHJhd2VyXy5jbGFzc0xpc3QuY29udGFpbnMoRElTTUlTU0lCTEUpKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uKGFkYXB0ZXIpXG4gICAgfSBlbHNlIGlmICh0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKE1PREFMKSkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ01vZGFsRHJhd2VyRm91bmRhdGlvbihhZGFwdGVyKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBNRENEcmF3ZXI6IEZhaWxlZCB0byBpbnN0YW50aWF0ZSBjb21wb25lbnQuIFN1cHBvcnRlZCB2YXJpYW50cyBhcmUgJHtESVNNSVNTSUJMRX0gYW5kICR7TU9EQUx9LmBcbiAgICAgIClcbiAgICB9XG4gICAgdGhpcy5mb3VuZGF0aW9uICYmIHRoaXMuZm91bmRhdGlvbi5pbml0KClcbiAgICB0aGlzLmluaXRpYWxTeW5jV2l0aERPTSgpXG5cbiAgICBpZiAodGhpcy50b2dnbGVPbikge1xuICAgICAgdGhpcy50b2dnbGVPbkV2ZW50U291cmNlID0gdGhpcy50b2dnbGVPblNvdXJjZSB8fCB0aGlzLiRyb290XG4gICAgICB0aGlzLnRvZ2dsZU9uRXZlbnRTb3VyY2UuJG9uKHRoaXMudG9nZ2xlT24sIHRoaXMudG9nZ2xlKVxuICAgIH1cbiAgICBpZiAodGhpcy5vcGVuT24pIHtcbiAgICAgIHRoaXMub3Blbk9uRXZlbnRTb3VyY2UgPSB0aGlzLm9wZW5PblNvdXJjZSB8fCB0aGlzLiRyb290XG4gICAgICB0aGlzLm9wZW5PbkV2ZW50U291cmNlLiRvbih0aGlzLm9wZW5PbiwgdGhpcy5zaG93KVxuICAgIH1cbiAgICBpZiAodGhpcy5jbG9zZU9uKSB7XG4gICAgICB0aGlzLmNsb3NlT25FdmVudFNvdXJjZSA9IHRoaXMuY2xvc2VPblNvdXJjZSB8fCB0aGlzLiRyb290XG4gICAgICB0aGlzLmNsb3NlT25FdmVudFNvdXJjZS4kb24odGhpcy5jbG9zZU9uLCB0aGlzLmNsb3NlKVxuICAgIH1cbiAgICAvLyBtZWRpYS5zbWFsbC5hZGRMaXN0ZW5lcih0aGlzLnJlZnJlc2hNZWRpYSlcbiAgICAvLyBtZWRpYS5sYXJnZS5hZGRMaXN0ZW5lcih0aGlzLnJlZnJlc2hNZWRpYSlcbiAgICAvLyB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLnJlZnJlc2hNZWRpYSgpKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbiAmJiB0aGlzLmZvdW5kYXRpb24uZGVzdHJveSgpXG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbnVsbFxuICAgIC8vIG1lZGlhLnNtYWxsLnJlbW92ZUxpc3RlbmVyKHRoaXMucmVmcmVzaE1lZGlhKVxuICAgIC8vIG1lZGlhLmxhcmdlLnJlbW92ZUxpc3RlbmVyKHRoaXMucmVmcmVzaE1lZGlhKVxuXG4gICAgaWYgKHRoaXMudG9nZ2xlT25FdmVudFNvdXJjZSkge1xuICAgICAgdGhpcy50b2dnbGVPbkV2ZW50U291cmNlLiRvZmYodGhpcy50b2dnbGVPbiwgdGhpcy50b2dnbGUpXG4gICAgfVxuICAgIGlmICh0aGlzLm9wZW5PbkV2ZW50U291cmNlKSB7XG4gICAgICB0aGlzLm9wZW5PbkV2ZW50U291cmNlLiRvZmYodGhpcy5vcGVuT24sIHRoaXMuc2hvdylcbiAgICB9XG4gICAgaWYgKHRoaXMuY2xvc2VPbkV2ZW50U291cmNlKSB7XG4gICAgICB0aGlzLmNsb3NlT25FdmVudFNvdXJjZS4kb2ZmKHRoaXMuY2xvc2VPbiwgdGhpcy5jbG9zZSlcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgICBjb25zdCB7IE1PREFMIH0gPSBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24uY3NzQ2xhc3Nlc1xuXG4gICAgICBpZiAodGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC5jb250YWlucyhNT0RBTCkpIHtcbiAgICAgICAgY29uc3QgeyBTQ1JJTV9TRUxFQ1RPUiB9ID0gTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uLnN0cmluZ3NcbiAgICAgICAgdGhpcy5zY3JpbV8gPSB0aGlzLmRyYXdlcl8ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFNDUklNX1NFTEVDVE9SKVxuICAgICAgICB0aGlzLmhhbmRsZVNjcmltQ2xpY2tfID0gKCkgPT4gdGhpcy5mb3VuZGF0aW9uLmhhbmRsZVNjcmltQ2xpY2soKVxuICAgICAgICB0aGlzLnNjcmltXy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlU2NyaW1DbGlja18pXG4gICAgICAgIHRoaXMuZm9jdXNUcmFwXyA9IGNyZWF0ZUZvY3VzVHJhcEluc3RhbmNlKFxuICAgICAgICAgIHRoaXMuZHJhd2VyXyxcbiAgICAgICAgICB0aGlzLmZvY3VzVHJhcEZhY3RvcnlfXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgdGhpcy5oYW5kbGVLZXlkb3duXyA9IGV2dCA9PiB0aGlzLmZvdW5kYXRpb24uaGFuZGxlS2V5ZG93bihldnQpXG4gICAgICB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmRfID0gZXZ0ID0+XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVUcmFuc2l0aW9uRW5kKGV2dClcblxuICAgICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bl8pXG4gICAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kXylcbiAgICB9LFxuICAgIG9uT3Blbl8odmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uICYmIHRoaXMuZm91bmRhdGlvbi5vcGVuKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbiAmJiB0aGlzLmZvdW5kYXRpb24uY2xvc2UoKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGV2ZW50KVxuICAgICAgdGhpcy4kcm9vdC4kZW1pdCgndm1hOmxheW91dCcpXG4gICAgfSxcbiAgICBzaG93KCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLm9wZW4oKVxuICAgIH0sXG4gICAgY2xvc2UoKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uY2xvc2UoKVxuICAgIH0sXG4gICAgdG9nZ2xlKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmlzT3BlbigpXG4gICAgICAgID8gdGhpcy5mb3VuZGF0aW9uLmNsb3NlKClcbiAgICAgICAgOiB0aGlzLmZvdW5kYXRpb24ub3BlbigpXG4gICAgfSxcbiAgICBpc09wZW4oKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uLmlzT3BlbigpXG4gICAgfSxcbiAgICByZWZyZXNoTWVkaWEoKSB7XG4gICAgICAvLyB0aGlzLnNtYWxsID0gbWVkaWEuc21hbGwubWF0Y2hlc1xuICAgICAgLy8gdGhpcy5sYXJnZSA9IG1lZGlhLmxhcmdlLm1hdGNoZXNcbiAgICAgIC8vIGlmICh0aGlzLmlzUmVzcG9uc2l2ZSkge1xuICAgICAgLy8gICBpZiAodGhpcy5sYXJnZSkge1xuICAgICAgLy8gICAgIHRoaXMuc2hvdygpXG4gICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgdGhpcy5jbG9zZSgpXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9jdXNUcmFwSW5zdGFuY2UoXG4gIHN1cmZhY2VFbCxcbiAgZm9jdXNUcmFwRmFjdG9yeSA9IGNyZWF0ZUZvY3VzVHJhcFxuKSB7XG4gIHJldHVybiBmb2N1c1RyYXBGYWN0b3J5KHN1cmZhY2VFbCwge1xuICAgIGNsaWNrT3V0c2lkZURlYWN0aXZhdGVzOiB0cnVlLFxuICAgIGluaXRpYWxGb2N1czogZmFsc2UsIC8vIE5hdmlnYXRpb24gZHJhd2VyIGhhbmRsZXMgZm9jdXNpbmcgb24gYWN0aXZlIG5hdiBpdGVtLlxuICAgIGVzY2FwZURlYWN0aXZhdGVzOiBmYWxzZSwgLy8gTmF2aWdhdGlvbiBkcmF3ZXIgaGFuZGxlcyBFU0MuXG4gICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IGZhbHNlIC8vIE5hdmlnYXRpb24gZHJhd2VyIGhhbmRsZXMgcmVzdG9yZSBmb2N1cy5cbiAgfSlcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibWRjLWRyYXdlci1oZWFkZXIgbWRjLWRyYXdlcl9faGVhZGVyXCI+XG4gICAgICA8c2xvdCAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtZHJhd2VyLWhlYWRlcidcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8bmF2IFxuICAgIDpjbGFzcz1cImNsYXNzZXNcIiBcbiAgICBjbGFzcz1cIm1kYy1kcmF3ZXItbGlzdCBtZGMtbGlzdFwiPlxuICAgIDxzbG90Lz5cbiAgPC9uYXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWRyYXdlci1saXN0JyxcbiAgcHJvcHM6IHtcbiAgICBkZW5zZTogQm9vbGVhblxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgICdtZGMtbGlzdC0tZGVuc2UnOiB0aGlzLmRlbnNlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgUmlwcGxlLiBQcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIG1hbmFnaW5nXG4gKiAtIGNsYXNzZXNcbiAqIC0gZG9tXG4gKiAtIENTUyB2YXJpYWJsZXNcbiAqIC0gcG9zaXRpb25cbiAqIC0gZGltZW5zaW9uc1xuICogLSBzY3JvbGwgcG9zaXRpb25cbiAqIC0gZXZlbnQgaGFuZGxlcnNcbiAqIC0gdW5ib3VuZGVkLCBhY3RpdmUgYW5kIGRpc2FibGVkIHN0YXRlc1xuICpcbiAqIEFkZGl0aW9uYWxseSwgcHJvdmlkZXMgdHlwZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGFkYXB0ZXIgdG8gdGhlIENsb3N1cmVcbiAqIGNvbXBpbGVyLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGFkYXB0ZXIgZm9yIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZSB0byBkZWxlZ2F0ZSB1cGRhdGVzIHRvXG4gKiB0aGUgY29tcG9uZW50IGluIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZS4gU2VlIGFyY2hpdGVjdHVyZSBkb2N1bWVudGF0aW9uXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9jb2RlL2FyY2hpdGVjdHVyZS5tZFxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDUmlwcGxlQWRhcHRlciB7XG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBicm93c2VyU3VwcG9ydHNDc3NWYXJzKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNVbmJvdW5kZWQoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1N1cmZhY2VBY3RpdmUoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1N1cmZhY2VEaXNhYmxlZCgpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHshRXZlbnRUYXJnZXR9IHRhcmdldCAqL1xuICBjb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhck5hbWVcbiAgICogQHBhcmFtIHs/bnVtYmVyfHN0cmluZ30gdmFsdWVcbiAgICovXG4gIHVwZGF0ZUNzc1ZhcmlhYmxlKHZhck5hbWUsIHZhbHVlKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHshQ2xpZW50UmVjdH0gKi9cbiAgY29tcHV0ZUJvdW5kaW5nUmVjdCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19ICovXG4gIGdldFdpbmRvd1BhZ2VPZmZzZXQoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIC8vIFJpcHBsZSBpcyBhIHNwZWNpYWwgY2FzZSB3aGVyZSB0aGUgXCJyb290XCIgY29tcG9uZW50IGlzIHJlYWxseSBhIFwibWl4aW5cIiBvZiBzb3J0cyxcbiAgLy8gZ2l2ZW4gdGhhdCBpdCdzIGFuICd1cGdyYWRlJyB0byBhbiBleGlzdGluZyBjb21wb25lbnQuIFRoYXQgYmVpbmcgc2FpZCBpdCBpcyB0aGUgcm9vdFxuICAvLyBDU1MgY2xhc3MgdGhhdCBhbGwgb3RoZXIgQ1NTIGNsYXNzZXMgZGVyaXZlIGZyb20uXG4gIFJPT1Q6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkJyxcbiAgVU5CT1VOREVEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkJyxcbiAgQkdfRk9DVVNFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZCcsXG4gIEZHX0FDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb24nLFxuICBGR19ERUFDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbicsXG59O1xuXG5jb25zdCBzdHJpbmdzID0ge1xuICBWQVJfTEVGVDogJy0tbWRjLXJpcHBsZS1sZWZ0JyxcbiAgVkFSX1RPUDogJy0tbWRjLXJpcHBsZS10b3AnLFxuICBWQVJfRkdfU0laRTogJy0tbWRjLXJpcHBsZS1mZy1zaXplJyxcbiAgVkFSX0ZHX1NDQUxFOiAnLS1tZGMtcmlwcGxlLWZnLXNjYWxlJyxcbiAgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQnLFxuICBWQVJfRkdfVFJBTlNMQVRFX0VORDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kJyxcbn07XG5cbmNvbnN0IG51bWJlcnMgPSB7XG4gIFBBRERJTkc6IDEwLFxuICBJTklUSUFMX09SSUdJTl9TQ0FMRTogMC42LFxuICBERUFDVElWQVRJT05fVElNRU9VVF9NUzogMjI1LCAvLyBDb3JyZXNwb25kcyB0byAkbWRjLXJpcHBsZS10cmFuc2xhdGUtZHVyYXRpb24gKGkuZS4gYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIEZHX0RFQUNUSVZBVElPTl9NUzogMTUwLCAvLyBDb3JyZXNwb25kcyB0byAkbWRjLXJpcHBsZS1mYWRlLW91dC1kdXJhdGlvbiAoaS5lLiBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIGR1cmF0aW9uKVxuICBUQVBfREVMQVlfTVM6IDMwMCwgLy8gRGVsYXkgYmV0d2VlbiB0b3VjaCBhbmQgc2ltdWxhdGVkIG1vdXNlIGV2ZW50cyBvbiB0b3VjaCBkZXZpY2VzXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIHN1cHBvcnRzQ3NzVmFyaWFibGVzIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBDU1MgY3VzdG9tIHZhcmlhYmxlIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGFwcGx5UGFzc2l2ZSB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3QgcGFzc2l2ZSBldmVudCBsaXN0ZW5lciBzdXBwb3J0LlxuICogQHByaXZhdGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5sZXQgc3VwcG9ydHNQYXNzaXZlXztcblxuLyoqXG4gKiBAcGFyYW0geyFXaW5kb3d9IHdpbmRvd09ialxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopIHtcbiAgLy8gRGV0ZWN0IHZlcnNpb25zIG9mIEVkZ2Ugd2l0aCBidWdneSB2YXIoKSBzdXBwb3J0XG4gIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTE0OTU0NDgvXG4gIGNvbnN0IGRvY3VtZW50ID0gd2luZG93T2JqLmRvY3VtZW50O1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vZGUuY2xhc3NOYW1lID0gJ21kYy1yaXBwbGUtc3VyZmFjZS0tdGVzdC1lZGdlLXZhci1idWcnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gIC8vIFRoZSBidWcgZXhpc3RzIGlmIDo6YmVmb3JlIHN0eWxlIGVuZHMgdXAgcHJvcGFnYXRpbmcgdG8gdGhlIHBhcmVudCBlbGVtZW50LlxuICAvLyBBZGRpdGlvbmFsbHksIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBudWxsIGluIGlmcmFtZXMgd2l0aCBkaXNwbGF5OiBcIm5vbmVcIiBpbiBGaXJlZm94LFxuICAvLyBidXQgRmlyZWZveCBpcyBrbm93biB0byBzdXBwb3J0IENTUyBjdXN0b20gcHJvcGVydGllcyBjb3JyZWN0bHkuXG4gIC8vIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3dPYmouZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgY29uc3QgaGFzUHNldWRvVmFyQnVnID0gY29tcHV0ZWRTdHlsZSAhPT0gbnVsbCAmJiBjb21wdXRlZFN0eWxlLmJvcmRlclRvcFN0eWxlID09PSAnc29saWQnO1xuICBub2RlLnJlbW92ZSgpO1xuICByZXR1cm4gaGFzUHNldWRvVmFyQnVnO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvd09iaiwgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgbGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICBpZiAodHlwZW9mIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9PT0gJ2Jvb2xlYW4nICYmICFmb3JjZVJlZnJlc2gpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG4gIH1cblxuICBjb25zdCBzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCA9IHdpbmRvd09iai5DU1MgJiYgdHlwZW9mIHdpbmRvd09iai5DU1Muc3VwcG9ydHMgPT09ICdmdW5jdGlvbic7XG4gIGlmICghc3VwcG9ydHNGdW5jdGlvblByZXNlbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzID0gd2luZG93T2JqLkNTUy5zdXBwb3J0cygnLS1jc3MtdmFycycsICd5ZXMnKTtcbiAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gIC8vIFNlZTogUkVBRE1FIHNlY3Rpb24gb24gU2FmYXJpXG4gIGNvbnN0IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyA9IChcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCcoLS1jc3MtdmFyczogeWVzKScpICYmXG4gICAgd2luZG93T2JqLkNTUy5zdXBwb3J0cygnY29sb3InLCAnIzAwMDAwMDAwJylcbiAgKTtcblxuICBpZiAoZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyB8fCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9ICFkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaik7XG4gIH0gZWxzZSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICghZm9yY2VSZWZyZXNoKSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXNfID0gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG4gIH1cbiAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xufVxuXG4vL1xuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmQgaWYgc28sIHVzZSB0aGVtLlxuICogQHBhcmFtIHshV2luZG93PX0gZ2xvYmFsT2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58IUV2ZW50TGlzdGVuZXJPcHRpb25zfVxuICovXG5mdW5jdGlvbiBhcHBseVBhc3NpdmUoZ2xvYmFsT2JqID0gd2luZG93LCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBpZiAoc3VwcG9ydHNQYXNzaXZlXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgIGxldCBpc1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIHtnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgaXNTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gaXNTdXBwb3J0ZWQ7XG4gICAgICB9fSk7XG4gICAgfSBjYXRjaCAoZSkgeyB9XG5cbiAgICBzdXBwb3J0c1Bhc3NpdmVfID0gaXNTdXBwb3J0ZWQ7XG4gIH1cblxuICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlX1xuICAgID8gLyoqIEB0eXBlIHshRXZlbnRMaXN0ZW5lck9wdGlvbnN9ICovICh7cGFzc2l2ZTogdHJ1ZX0pXG4gICAgOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IEhUTUxFbGVtZW50UHJvdG90eXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudFByb3RvdHlwZSkge1xuICAvKipcbiAgICogT3JkZXIgaXMgaW1wb3J0YW50IGJlY2F1c2Ugd2UgcmV0dXJuIHRoZSBmaXJzdCBleGlzdGluZyBtZXRob2Qgd2UgZmluZC5cbiAgICogRG8gbm90IGNoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIGl0ZW1zIGluIHRoZSBiZWxvdyBhcnJheS5cbiAgICovXG4gIGNvbnN0IG1hdGNoZXNNZXRob2RzID0gWydtYXRjaGVzJywgJ3dlYmtpdE1hdGNoZXNTZWxlY3RvcicsICdtc01hdGNoZXNTZWxlY3RvciddO1xuICBsZXQgbWV0aG9kID0gJ21hdGNoZXMnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZXNNZXRob2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbWF0Y2hlc01ldGhvZCA9IG1hdGNoZXNNZXRob2RzW2ldO1xuICAgIGlmIChtYXRjaGVzTWV0aG9kIGluIEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gICAgICBtZXRob2QgPSBtYXRjaGVzTWV0aG9kO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ldGhvZDtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFFdmVudH0gZXZcbiAqIEBwYXJhbSB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gcGFnZU9mZnNldFxuICogQHBhcmFtIHshQ2xpZW50UmVjdH0gY2xpZW50UmVjdFxuICogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX1cbiAqL1xuZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGV2LCBwYWdlT2Zmc2V0LCBjbGllbnRSZWN0KSB7XG4gIGNvbnN0IHt4LCB5fSA9IHBhZ2VPZmZzZXQ7XG4gIGNvbnN0IGRvY3VtZW50WCA9IHggKyBjbGllbnRSZWN0LmxlZnQ7XG4gIGNvbnN0IGRvY3VtZW50WSA9IHkgKyBjbGllbnRSZWN0LnRvcDtcblxuICBsZXQgbm9ybWFsaXplZFg7XG4gIGxldCBub3JtYWxpemVkWTtcbiAgLy8gRGV0ZXJtaW5lIHRvdWNoIHBvaW50IHJlbGF0aXZlIHRvIHRoZSByaXBwbGUgY29udGFpbmVyLlxuICBpZiAoZXYudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgZXYgPSAvKiogQHR5cGUgeyFUb3VjaEV2ZW50fSAqLyAoZXYpO1xuICAgIG5vcm1hbGl6ZWRYID0gZXYuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBkb2N1bWVudFg7XG4gICAgbm9ybWFsaXplZFkgPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGRvY3VtZW50WTtcbiAgfSBlbHNlIHtcbiAgICBldiA9IC8qKiBAdHlwZSB7IU1vdXNlRXZlbnR9ICovIChldik7XG4gICAgbm9ybWFsaXplZFggPSBldi5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9XG5cbiAgcmV0dXJuIHt4OiBub3JtYWxpemVkWCwgeTogbm9ybWFsaXplZFl9O1xufVxuXG5leHBvcnQge3N1cHBvcnRzQ3NzVmFyaWFibGVzLCBhcHBseVBhc3NpdmUsIGdldE1hdGNoZXNQcm9wZXJ0eSwgZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENSaXBwbGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7Z2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGlzQWN0aXZhdGVkOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgYWN0aXZhdGlvbkV2ZW50OiAoIUV2ZW50fHVuZGVmaW5lZCksXG4gKiAgIGlzUHJvZ3JhbW1hdGljOiAoYm9vbGVhbnx1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgQWN0aXZhdGlvblN0YXRlVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBkZWFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGZvY3VzOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGJsdXI6IChzdHJpbmd8dW5kZWZpbmVkKVxuICogfX1cbiAqL1xubGV0IExpc3RlbmVySW5mb1R5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgYWN0aXZhdGU6IGZ1bmN0aW9uKCFFdmVudCksXG4gKiAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uKCFFdmVudD0pLFxuICogICBmb2N1czogZnVuY3Rpb24oKSxcbiAqICAgYmx1cjogZnVuY3Rpb24oKVxuICogfX1cbiAqL1xubGV0IExpc3RlbmVyc1R5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgeDogbnVtYmVyLFxuICogICB5OiBudW1iZXJcbiAqIH19XG4gKi9cbmxldCBQb2ludFR5cGU7XG5cbi8vIEFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gdGhlIHJvb3QgZWxlbWVudCBvZiBlYWNoIGluc3RhbmNlIGZvciBhY3RpdmF0aW9uXG5jb25zdCBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gWyd0b3VjaHN0YXJ0JywgJ3BvaW50ZXJkb3duJywgJ21vdXNlZG93bicsICdrZXlkb3duJ107XG5cbi8vIERlYWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiBkb2N1bWVudEVsZW1lbnQgd2hlbiBhIHBvaW50ZXItcmVsYXRlZCBkb3duIGV2ZW50IG9jY3Vyc1xuY29uc3QgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoZW5kJywgJ3BvaW50ZXJ1cCcsICdtb3VzZXVwJywgJ2NvbnRleHRtZW51J107XG5cbi8vIFRyYWNrcyBhY3RpdmF0aW9ucyB0aGF0IGhhdmUgb2NjdXJyZWQgb24gdGhlIGN1cnJlbnQgZnJhbWUsIHRvIGF2b2lkIHNpbXVsdGFuZW91cyBuZXN0ZWQgYWN0aXZhdGlvbnNcbi8qKiBAdHlwZSB7IUFycmF5PCFFdmVudFRhcmdldD59ICovXG5sZXQgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENSaXBwbGVBZGFwdGVyPn1cbiAqL1xuY2xhc3MgTURDUmlwcGxlRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiAvKiBib29sZWFuIC0gY2FjaGVkICovIHt9LFxuICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGFkZENsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiAoLyogdGFyZ2V0OiAhRXZlbnRUYXJnZXQgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKC8qIHZhck5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiAvKiBDbGllbnRSZWN0ICovIHt9LFxuICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4gLyoge3g6IG51bWJlciwgeTogbnVtYmVyfSAqLyB7fSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDUmlwcGxlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHshQ2xpZW50UmVjdH0gKi9cbiAgICB0aGlzLmZyYW1lXyA9IC8qKiBAdHlwZSB7IUNsaWVudFJlY3R9ICovICh7d2lkdGg6IDAsIGhlaWdodDogMH0pO1xuXG4gICAgLyoqIEBwcml2YXRlIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmluaXRpYWxTaXplXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLm1heFJhZGl1c18gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQpfSAqL1xuICAgIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyA9IChlKSA9PiB0aGlzLmFjdGl2YXRlXyhlKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmRlYWN0aXZhdGVfKCk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudD0pfSAqL1xuICAgIHRoaXMuZm9jdXNIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlRm9jdXMoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5ibHVySGFuZGxlcl8gPSAoKSA9PiB0aGlzLmhhbmRsZUJsdXIoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMucmVzaXplSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmxheW91dCgpO1xuXG4gICAgLyoqIEBwcml2YXRlIHt7bGVmdDogbnVtYmVyLCB0b3A6bnVtYmVyfX0gKi9cbiAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgIH07XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmZnU2NhbGVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IHRydWU7XG4gICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgIH07XG5cbiAgICAvKiogQHByaXZhdGUgeyFFdmVudHx1bmRlZmluZWR9ICovXG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gIH1cblxuICAvKipcbiAgICogV2UgY29tcHV0ZSB0aGlzIHByb3BlcnR5IHNvIHRoYXQgd2UgYXJlIG5vdCBxdWVyeWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2xpZW50XG4gICAqIHVudGlsIHRoZSBwb2ludCBpbiB0aW1lIHdoZXJlIHRoZSBmb3VuZGF0aW9uIHJlcXVlc3RzIGl0LiBUaGlzIHByZXZlbnRzIHNjZW5hcmlvcyB3aGVyZVxuICAgKiBjbGllbnQtc2lkZSBmZWF0dXJlLWRldGVjdGlvbiBtYXkgaGFwcGVuIHRvbyBlYXJseSwgc3VjaCBhcyB3aGVuIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXJcbiAgICogYW5kIHRoZW4gaW5pdGlhbGl6ZWQgYXQgbW91bnQgdGltZSBvbiB0aGUgY2xpZW50LlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFBY3RpdmF0aW9uU3RhdGVUeXBlfVxuICAgKi9cbiAgZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZhdGVkOiBmYWxzZSxcbiAgICAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiBmYWxzZSxcbiAgICAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogZmFsc2UsXG4gICAgICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogZmFsc2UsXG4gICAgICBhY3RpdmF0aW9uRXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgIGlzUHJvZ3JhbW1hdGljOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBpbml0KCkge1xuICAgIGNvbnN0IHN1cHBvcnRzUHJlc3NSaXBwbGUgPSB0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKTtcblxuICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoUk9PVCk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZXMgbmVlZCBsYXlvdXQgbG9naWMgYXBwbGllZCBpbW1lZGlhdGVseSB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGJvdGggc2hhZGUgYW5kIHJpcHBsZVxuICAgICAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmF0aW9uVGltZXJfKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1JPT1QsIFVOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFJPT1QpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIHRoaXMucmVtb3ZlQ3NzVmFyc18oKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKTtcbiAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN1cHBvcnRzUHJlc3NSaXBwbGUgUGFzc2VkIGZyb20gaW5pdCB0byBzYXZlIGEgcmVkdW5kYW50IGZ1bmN0aW9uIGNhbGxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnR9IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGUpIHtcbiAgICBpZiAoZS50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKSB7XG4gICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9KTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJlbW92ZUNzc1ZhcnNfKCkge1xuICAgIGNvbnN0IHtzdHJpbmdzfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4gICAgT2JqZWN0LmtleXMoc3RyaW5ncykuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgaWYgKGsuaW5kZXhPZignVkFSXycpID09PSAwKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoc3RyaW5nc1trXSwgbnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnQ9fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhY3RpdmF0ZV8oZSkge1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZURpc2FibGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEF2b2lkIHJlYWN0aW5nIHRvIGZvbGxvdy1vbiBldmVudHMgZmlyZWQgYnkgdG91Y2ggZGV2aWNlIGFmdGVyIGFuIGFscmVhZHktcHJvY2Vzc2VkIHVzZXIgaW50ZXJhY3Rpb25cbiAgICBjb25zdCBwcmV2aW91c0FjdGl2YXRpb25FdmVudCA9IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICAgIGNvbnN0IGlzU2FtZUludGVyYWN0aW9uID0gcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgJiYgZSAhPT0gdW5kZWZpbmVkICYmIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50LnR5cGUgIT09IGUudHlwZTtcbiAgICBpZiAoaXNTYW1lSW50ZXJhY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQgPSB0cnVlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA9IGUgPT09IHVuZGVmaW5lZDtcbiAgICBhY3RpdmF0aW9uU3RhdGUuYWN0aXZhdGlvbkV2ZW50ID0gZTtcbiAgICBhY3RpdmF0aW9uU3RhdGUud2FzQWN0aXZhdGVkQnlQb2ludGVyID0gYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID8gZmFsc2UgOiBlICE9PSB1bmRlZmluZWQgJiYgKFxuICAgICAgZS50eXBlID09PSAnbW91c2Vkb3duJyB8fCBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICdwb2ludGVyZG93bidcbiAgICApO1xuXG4gICAgY29uc3QgaGFzQWN0aXZhdGVkQ2hpbGQgPSBlICE9PSB1bmRlZmluZWQgJiYgYWN0aXZhdGVkVGFyZ2V0cy5sZW5ndGggPiAwICYmIGFjdGl2YXRlZFRhcmdldHMuc29tZShcbiAgICAgICh0YXJnZXQpID0+IHRoaXMuYWRhcHRlcl8uY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpKTtcbiAgICBpZiAoaGFzQWN0aXZhdGVkQ2hpbGQpIHtcbiAgICAgIC8vIEltbWVkaWF0ZWx5IHJlc2V0IGFjdGl2YXRpb24gc3RhdGUsIHdoaWxlIHByZXNlcnZpbmcgbG9naWMgdGhhdCBwcmV2ZW50cyB0b3VjaCBmb2xsb3ctb24gZXZlbnRzXG4gICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFjdGl2YXRlZFRhcmdldHMucHVzaCgvKiogQHR5cGUgeyFFdmVudFRhcmdldH0gKi8gKGUudGFyZ2V0KSk7XG4gICAgICB0aGlzLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGUpO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSk7XG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgLy8gUmVzZXQgYXJyYXkgb24gbmV4dCBmcmFtZSBhZnRlciB0aGUgY3VycmVudCBldmVudCBoYXMgaGFkIGEgY2hhbmNlIHRvIGJ1YmJsZSB0byBwcmV2ZW50IGFuY2VzdG9yIHJpcHBsZXNcbiAgICAgIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcblxuICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgJiYgZSAhPT0gdW5kZWZpbmVkICYmIChlLmtleSA9PT0gJyAnIHx8IGUua2V5Q29kZSA9PT0gMzIpKSB7XG4gICAgICAgIC8vIElmIHNwYWNlIHdhcyBwcmVzc2VkLCB0cnkgYWdhaW4gd2l0aGluIGFuIHJBRiBjYWxsIHRvIGRldGVjdCA6YWN0aXZlLCBiZWNhdXNlIGRpZmZlcmVudCBVQXMgcmVwb3J0XG4gICAgICAgIC8vIGFjdGl2ZSBzdGF0ZXMgaW5jb25zaXN0ZW50bHkgd2hlbiB0aGV5J3JlIGNhbGxlZCB3aXRoaW4gZXZlbnQgaGFuZGxpbmcgY29kZTpcbiAgICAgICAgLy8gLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02MzU5NzFcbiAgICAgICAgLy8gLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjkzNzQxXG4gICAgICAgIC8vIFdlIHRyeSBmaXJzdCBvdXRzaWRlIHJBRiB0byBzdXBwb3J0IEVkZ2UsIHdoaWNoIGRvZXMgbm90IGV4aGliaXQgdGhpcyBwcm9ibGVtLCBidXQgd2lsbCBjcmFzaCBpZiBhIENTU1xuICAgICAgICAvLyB2YXJpYWJsZSBpcyBzZXQgd2l0aGluIGEgckFGIGNhbGxiYWNrIGZvciBhIHN1Ym1pdCBidXR0b24gaW50ZXJhY3Rpb24gKCMyMjQxKS5cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgLy8gUmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSBpbW1lZGlhdGVseSBpZiBlbGVtZW50IHdhcyBub3QgbWFkZSBhY3RpdmUuXG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpIHtcbiAgICByZXR1cm4gKGUgIT09IHVuZGVmaW5lZCAmJiBlLnR5cGUgPT09ICdrZXlkb3duJykgPyB0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZUFjdGl2ZSgpIDogdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGV2ZW50IE9wdGlvbmFsIGV2ZW50IGNvbnRhaW5pbmcgcG9zaXRpb24gaW5mb3JtYXRpb24uXG4gICAqL1xuICBhY3RpdmF0ZShldmVudCkge1xuICAgIHRoaXMuYWN0aXZhdGVfKGV2ZW50KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBhbmltYXRlQWN0aXZhdGlvbl8oKSB7XG4gICAgY29uc3Qge1ZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIFZBUl9GR19UUkFOU0xBVEVfRU5EfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcbiAgICBjb25zdCB7RkdfREVBQ1RJVkFUSU9OLCBGR19BQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBjb25zdCB7REVBQ1RJVkFUSU9OX1RJTUVPVVRfTVN9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzO1xuXG4gICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcblxuICAgIGxldCB0cmFuc2xhdGVTdGFydCA9ICcnO1xuICAgIGxldCB0cmFuc2xhdGVFbmQgPSAnJztcblxuICAgIGlmICghdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICBjb25zdCB7c3RhcnRQb2ludCwgZW5kUG9pbnR9ID0gdGhpcy5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCk7XG4gICAgICB0cmFuc2xhdGVTdGFydCA9IGAke3N0YXJ0UG9pbnQueH1weCwgJHtzdGFydFBvaW50Lnl9cHhgO1xuICAgICAgdHJhbnNsYXRlRW5kID0gYCR7ZW5kUG9pbnQueH1weCwgJHtlbmRQb2ludC55fXB4YDtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIHRyYW5zbGF0ZVN0YXJ0KTtcbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfRU5ELCB0cmFuc2xhdGVFbmQpO1xuICAgIC8vIENhbmNlbCBhbnkgb25nb2luZyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBhbmltYXRpb25zXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcblxuICAgIC8vIEZvcmNlIGxheW91dCBpbiBvcmRlciB0byByZS10cmlnZ2VyIHRoZSBhbmltYXRpb24uXG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfKCksIERFQUNUSVZBVElPTl9USU1FT1VUX01TKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJuIHt7c3RhcnRQb2ludDogUG9pbnRUeXBlLCBlbmRQb2ludDogUG9pbnRUeXBlfX1cbiAgICovXG4gIGdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKSB7XG4gICAgY29uc3Qge2FjdGl2YXRpb25FdmVudCwgd2FzQWN0aXZhdGVkQnlQb2ludGVyfSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcblxuICAgIGxldCBzdGFydFBvaW50O1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIpIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoXG4gICAgICAgIC8qKiBAdHlwZSB7IUV2ZW50fSAqLyAoYWN0aXZhdGlvbkV2ZW50KSxcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5nZXRXaW5kb3dQYWdlT2Zmc2V0KCksIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICB4OiB0aGlzLmZyYW1lXy53aWR0aCAvIDIsXG4gICAgICAgIHk6IHRoaXMuZnJhbWVfLmhlaWdodCAvIDIsXG4gICAgICB9O1xuICAgIH1cbiAgICAvLyBDZW50ZXIgdGhlIGVsZW1lbnQgYXJvdW5kIHRoZSBzdGFydCBwb2ludC5cbiAgICBzdGFydFBvaW50ID0ge1xuICAgICAgeDogc3RhcnRQb2ludC54IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiBzdGFydFBvaW50LnkgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgY29uc3QgZW5kUG9pbnQgPSB7XG4gICAgICB4OiAodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgeTogKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgfTtcblxuICAgIHJldHVybiB7c3RhcnRQb2ludCwgZW5kUG9pbnR9O1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpIHtcbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYm90aCB3aGVuIGEgcG9pbnRpbmcgZGV2aWNlIGlzIHJlbGVhc2VkLCBhbmQgd2hlbiB0aGUgYWN0aXZhdGlvbiBhbmltYXRpb24gZW5kcy5cbiAgICAvLyBUaGUgZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBzaG91bGQgb25seSBydW4gYWZ0ZXIgYm90aCBvZiB0aG9zZSBvY2N1ci5cbiAgICBjb25zdCB7RkdfREVBQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBjb25zdCB7aGFzRGVhY3RpdmF0aW9uVVhSdW4sIGlzQWN0aXZhdGVkfSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBjb25zdCBhY3RpdmF0aW9uSGFzRW5kZWQgPSBoYXNEZWFjdGl2YXRpb25VWFJ1biB8fCAhaXNBY3RpdmF0ZWQ7XG5cbiAgICBpZiAoYWN0aXZhdGlvbkhhc0VuZGVkICYmIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXykge1xuICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIH0sIG51bWJlcnMuRkdfREVBQ1RJVkFUSU9OX01TKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCkge1xuICAgIGNvbnN0IHtGR19BQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICB9XG5cbiAgcmVzZXRBY3RpdmF0aW9uU3RhdGVfKCkge1xuICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmFjdGl2YXRpb25FdmVudDtcbiAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgLy8gVG91Y2ggZGV2aWNlcyBtYXkgZmlyZSBhZGRpdGlvbmFsIGV2ZW50cyBmb3IgdGhlIHNhbWUgaW50ZXJhY3Rpb24gd2l0aGluIGEgc2hvcnQgdGltZS5cbiAgICAvLyBTdG9yZSB0aGUgcHJldmlvdXMgZXZlbnQgdW50aWwgaXQncyBzYWZlIHRvIGFzc3VtZSB0aGF0IHN1YnNlcXVlbnQgZXZlbnRzIGFyZSBmb3IgbmV3IGludGVyYWN0aW9ucy5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdW5kZWZpbmVkLCBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuVEFQX0RFTEFZX01TKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVhY3RpdmF0ZV8oKSB7XG4gICAgY29uc3QgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBzY2VuYXJpb3Mgc3VjaCBhcyB3aGVuIHlvdSBoYXZlIGEga2V5dXAgZXZlbnQgdGhhdCBibHVycyB0aGUgZWxlbWVudC5cbiAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlID0gLyoqIEB0eXBlIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gKi8gKE9iamVjdC5hc3NpZ24oe30sIGFjdGl2YXRpb25TdGF0ZSkpO1xuXG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYykge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpKTtcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmhhc0RlYWN0aXZhdGlvblVYUnVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7XG4gICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZGVhY3RpdmF0ZV8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFBY3RpdmF0aW9uU3RhdGVUeXBlfSBvcHRpb25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhbmltYXRlRGVhY3RpdmF0aW9uXyh7d2FzQWN0aXZhdGVkQnlQb2ludGVyLCB3YXNFbGVtZW50TWFkZUFjdGl2ZX0pIHtcbiAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyIHx8IHdhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgIH1cbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICB9XG4gICAgdGhpcy5sYXlvdXRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBsYXlvdXRJbnRlcm5hbF8oKSB7XG4gICAgdGhpcy5mcmFtZV8gPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICBjb25zdCBtYXhEaW0gPSBNYXRoLm1heCh0aGlzLmZyYW1lXy5oZWlnaHQsIHRoaXMuZnJhbWVfLndpZHRoKTtcblxuICAgIC8vIFN1cmZhY2UgZGlhbWV0ZXIgaXMgdHJlYXRlZCBkaWZmZXJlbnRseSBmb3IgdW5ib3VuZGVkIHZzLiBib3VuZGVkIHJpcHBsZXMuXG4gICAgLy8gVW5ib3VuZGVkIHJpcHBsZSBkaWFtZXRlciBpcyBjYWxjdWxhdGVkIHNtYWxsZXIgc2luY2UgdGhlIHN1cmZhY2UgaXMgZXhwZWN0ZWQgdG8gYWxyZWFkeSBiZSBwYWRkZWQgYXBwcm9wcmlhdGVseVxuICAgIC8vIHRvIGV4dGVuZCB0aGUgaGl0Ym94LCBhbmQgdGhlIHJpcHBsZSBpcyBleHBlY3RlZCB0byBtZWV0IHRoZSBlZGdlcyBvZiB0aGUgcGFkZGVkIGhpdGJveCAod2hpY2ggaXMgdHlwaWNhbGx5XG4gICAgLy8gc3F1YXJlKS4gQm91bmRlZCByaXBwbGVzLCBvbiB0aGUgb3RoZXIgaGFuZCwgYXJlIGZ1bGx5IGV4cGVjdGVkIHRvIGV4cGFuZCBiZXlvbmQgdGhlIHN1cmZhY2UncyBsb25nZXN0IGRpYW1ldGVyXG4gICAgLy8gKGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGRpYWdvbmFsIHBsdXMgYSBjb25zdGFudCBwYWRkaW5nKSwgYW5kIGFyZSBjbGlwcGVkIGF0IHRoZSBzdXJmYWNlJ3MgYm9yZGVyIHZpYVxuICAgIC8vIGBvdmVyZmxvdzogaGlkZGVuYC5cbiAgICBjb25zdCBnZXRCb3VuZGVkUmFkaXVzID0gKCkgPT4ge1xuICAgICAgY29uc3QgaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdyh0aGlzLmZyYW1lXy53aWR0aCwgMikgKyBNYXRoLnBvdyh0aGlzLmZyYW1lXy5oZWlnaHQsIDIpKTtcbiAgICAgIHJldHVybiBoeXBvdGVudXNlICsgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlBBRERJTkc7XG4gICAgfTtcblxuICAgIHRoaXMubWF4UmFkaXVzXyA9IHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSA/IG1heERpbSA6IGdldEJvdW5kZWRSYWRpdXMoKTtcblxuICAgIC8vIFJpcHBsZSBpcyBzaXplZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiBvZiB0aGUgc3VyZmFjZSwgdGhlbiBzY2FsZXMgdXAgdXNpbmcgYSBDU1Mgc2NhbGUgdHJhbnNmb3JtXG4gICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBNYXRoLmZsb29yKG1heERpbSAqIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5JTklUSUFMX09SSUdJTl9TQ0FMRSk7XG4gICAgdGhpcy5mZ1NjYWxlXyA9IHRoaXMubWF4UmFkaXVzXyAvIHRoaXMuaW5pdGlhbFNpemVfO1xuXG4gICAgdGhpcy51cGRhdGVMYXlvdXRDc3NWYXJzXygpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHVwZGF0ZUxheW91dENzc1ZhcnNfKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIFZBUl9GR19TSVpFLCBWQVJfTEVGVCwgVkFSX1RPUCwgVkFSX0ZHX1NDQUxFLFxuICAgIH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TSVpFLCBgJHt0aGlzLmluaXRpYWxTaXplX31weGApO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NDQUxFLCB0aGlzLmZnU2NhbGVfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgICAgbGVmdDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0xFRlQsIGAke3RoaXMudW5ib3VuZGVkQ29vcmRzXy5sZWZ0fXB4YCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9UT1AsIGAke3RoaXMudW5ib3VuZGVkQ29vcmRzXy50b3B9cHhgKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0VW5ib3VuZGVkKHVuYm91bmRlZCkge1xuICAgIGNvbnN0IHtVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGlmICh1bmJvdW5kZWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZvY3VzKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG5cbiAgaGFuZGxlQmx1cigpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCBNRENSaXBwbGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDUmlwcGxlRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEBleHRlbmRzIE1EQ0NvbXBvbmVudDwhTURDUmlwcGxlRm91bmRhdGlvbj5cbiAqL1xuY2xhc3MgTURDUmlwcGxlIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqIEBwYXJhbSB7Li4uP30gYXJncyAqL1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMudW5ib3VuZGVkXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7e2lzVW5ib3VuZGVkOiAoYm9vbGVhbnx1bmRlZmluZWQpfT19IG9wdGlvbnNcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZX1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290LCB7aXNVbmJvdW5kZWQgPSB1bmRlZmluZWR9ID0ge30pIHtcbiAgICBjb25zdCByaXBwbGUgPSBuZXcgTURDUmlwcGxlKHJvb3QpO1xuICAgIC8vIE9ubHkgb3ZlcnJpZGUgdW5ib3VuZGVkIGJlaGF2aW9yIGlmIG9wdGlvbiBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxuICAgIGlmIChpc1VuYm91bmRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByaXBwbGUudW5ib3VuZGVkID0gLyoqIEB0eXBlIHtib29sZWFufSAqLyAoaXNVbmJvdW5kZWQpO1xuICAgIH1cbiAgICByZXR1cm4gcmlwcGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IVJpcHBsZUNhcGFibGVTdXJmYWNlfSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVBZGFwdGVyKGluc3RhbmNlKSB7XG4gICAgY29uc3QgTUFUQ0hFUyA9IHV0aWwuZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4gdXRpbC5zdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpLFxuICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IGluc3RhbmNlLnVuYm91bmRlZCxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gaW5zdGFuY2Uucm9vdF9bTUFUQ0hFU10oJzphY3RpdmUnKSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiBpbnN0YW5jZS5kaXNhYmxlZCxcbiAgICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgY29udGFpbnNFdmVudFRhcmdldDogKHRhcmdldCkgPT4gaW5zdGFuY2Uucm9vdF8uY29udGFpbnModGFyZ2V0KSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgaW5zdGFuY2Uucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IChoYW5kbGVyKSA9PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IGluc3RhbmNlLnJvb3RfLnN0eWxlLnNldFByb3BlcnR5KHZhck5hbWUsIHZhbHVlKSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IGluc3RhbmNlLnJvb3RfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4gKHt4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldH0pLFxuICAgIH07XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgZ2V0IHVuYm91bmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdW5ib3VuZGVkICovXG4gIHNldCB1bmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgdGhpcy51bmJvdW5kZWRfID0gQm9vbGVhbih1bmJvdW5kZWQpO1xuICAgIHRoaXMuc2V0VW5ib3VuZGVkXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3N1cmUgQ29tcGlsZXIgdGhyb3dzIGFuIGFjY2VzcyBjb250cm9sIGVycm9yIHdoZW4gZGlyZWN0bHkgYWNjZXNzaW5nIGFcbiAgICogcHJvdGVjdGVkIG9yIHByaXZhdGUgcHJvcGVydHkgaW5zaWRlIGEgZ2V0dGVyL3NldHRlciwgbGlrZSB1bmJvdW5kZWQgYWJvdmUuXG4gICAqIEJ5IGFjY2Vzc2luZyB0aGUgcHJvdGVjdGVkIHByb3BlcnR5IGluc2lkZSBhIG1ldGhvZCwgd2Ugc29sdmUgdGhhdCBwcm9ibGVtLlxuICAgKiBUaGF0J3Mgd2h5IHRoaXMgZnVuY3Rpb24gZXhpc3RzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0VW5ib3VuZGVkXygpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldFVuYm91bmRlZCh0aGlzLnVuYm91bmRlZF8pO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5hY3RpdmF0ZSgpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmRlYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmxheW91dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVGb3VuZGF0aW9ufVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDUmlwcGxlRm91bmRhdGlvbihNRENSaXBwbGUuY3JlYXRlQWRhcHRlcih0aGlzKSk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGluaXRpYWxTeW5jV2l0aERPTSgpIHtcbiAgICB0aGlzLnVuYm91bmRlZCA9ICdtZGNSaXBwbGVJc1VuYm91bmRlZCcgaW4gdGhpcy5yb290Xy5kYXRhc2V0O1xuICB9XG59XG5cbi8qKlxuICogU2VlIE1hdGVyaWFsIERlc2lnbiBzcGVjIGZvciBtb3JlIGRldGFpbHMgb24gd2hlbiB0byB1c2UgcmlwcGxlcy5cbiAqIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9tb3Rpb24vY2hvcmVvZ3JhcGh5Lmh0bWwjY2hvcmVvZ3JhcGh5LWNyZWF0aW9uXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIFJpcHBsZUNhcGFibGVTdXJmYWNlIHt9XG5cbi8qKiBAcHJvdGVjdGVkIHshRWxlbWVudH0gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS5yb290XztcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgcmlwcGxlIGJsZWVkcyBvdXQgb2YgdGhlIGJvdW5kcyBvZiB0aGUgZWxlbWVudC5cbiAqIEB0eXBlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLnVuYm91bmRlZDtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgcmlwcGxlIGlzIGF0dGFjaGVkIHRvIGEgZGlzYWJsZWQgY29tcG9uZW50LlxuICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUuZGlzYWJsZWQ7XG5cbmV4cG9ydCB7TURDUmlwcGxlLCBNRENSaXBwbGVGb3VuZGF0aW9uLCBSaXBwbGVDYXBhYmxlU3VyZmFjZSwgdXRpbH07XG4iLCJpbXBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9pbmRleCdcbmltcG9ydCB7XG4gIHN1cHBvcnRzQ3NzVmFyaWFibGVzLFxuICBnZXRNYXRjaGVzUHJvcGVydHksXG4gIGFwcGx5UGFzc2l2ZVxufSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL3V0aWwnXG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVCYXNlIGV4dGVuZHMgTURDUmlwcGxlRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgTUFUQ0hFUygpIHtcbiAgICAvKiBnbG9iYWwgSFRNTEVsZW1lbnQgKi9cbiAgICByZXR1cm4gKFxuICAgICAgUmlwcGxlQmFzZS5fbWF0Y2hlcyB8fFxuICAgICAgKFJpcHBsZUJhc2UuX21hdGNoZXMgPSBnZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKSlcbiAgICApXG4gIH1cblxuICBzdGF0aWMgaXNTdXJmYWNlQWN0aXZlKHJlZikge1xuICAgIHJldHVybiByZWZbUmlwcGxlQmFzZS5NQVRDSEVTXSgnOmFjdGl2ZScpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcih2bSwgb3B0aW9ucykge1xuICAgIHN1cGVyKFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1VuYm91bmRlZDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWxbUmlwcGxlQmFzZS5NQVRDSEVTXSgnOmFjdGl2ZScpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2bS4kZGVsZXRlKHZtLmNsYXNzZXMsIGNsYXNzTmFtZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IHRhcmdldCA9PiB2bS4kZWwuY29udGFpbnModGFyZ2V0KSxcbiAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHZtLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKHZhck5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2bS4kc2V0KHZtLnN0eWxlcywgdmFyTmFtZSwgdmFsdWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyB4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBSaXBwbGVNaXhpbiA9IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMucmlwcGxlID0gbmV3IFJpcHBsZUJhc2UodGhpcylcbiAgICB0aGlzLnJpcHBsZS5pbml0KClcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnJpcHBsZS5kZXN0cm95KClcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICA8Y3VzdG9tLWVsZW1lbnQgXG4gICAgOnRhZz1cInRhZ1wiIFxuICAgIDpjbGFzc2VzPVwiY2xhc3Nlc1wiXG4gICAgOnN0eWxlcz1cInN0eWxlc1wiIFxuICAgIGNsYXNzPVwibWRjLXJpcHBsZVwiPlxuICAgIDxzbG90IC8+XG4gIDwvY3VzdG9tLWVsZW1lbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudE1peGluIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IFJpcHBsZU1peGluIH0gZnJvbSAnLi9tZGMtcmlwcGxlLWJhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1yaXBwbGUnLFxuICBtaXhpbnM6IFtDdXN0b21FbGVtZW50TWl4aW4sIFJpcHBsZU1peGluXSxcbiAgcHJvcHM6IHtcbiAgICB0YWc6IFN0cmluZ1xuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGN1c3RvbS1saW5rXG4gICAgOmxpbms9XCJsaW5rXCJcbiAgICA6Y2xhc3M9XCJbY2xhc3NlcywgaXRlbUNsYXNzZXNdXCJcbiAgICA6c3R5bGU9XCJzdHlsZXNcIlxuICAgIGNsYXNzPVwibWRjLWRyYXdlci1pdGVtIG1kYy1saXN0LWl0ZW1cIlxuICAgIHYtb249XCJteWxpc3RlbmVyc1wiXG4gID5cbiAgICA8c3BhbiB2LWlmPVwiaGFzU3RhcnREZXRhaWxcIiBjbGFzcz1cIm1kYy1saXN0LWl0ZW1fX2dyYXBoaWNcIj5cbiAgICAgIDxzbG90IG5hbWU9XCJzdGFydC1kZXRhaWxcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnt7IHN0YXJ0SWNvbiB9fTwvaT5cbiAgICAgIDwvc2xvdD5cbiAgICA8L3NwYW4+XG4gICAgPHNsb3QgLz5cbiAgPC9jdXN0b20tbGluaz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBEaXNwYXRjaEV2ZW50TWl4aW4sIEN1c3RvbUxpbmtNaXhpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgeyBSaXBwbGVCYXNlIH0gZnJvbSAnLi4vcmlwcGxlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtZHJhd2VyLWl0ZW0nLFxuICBpbmplY3Q6IFsnbWRjRHJhd2VyJ10sXG4gIG1peGluczogW0Rpc3BhdGNoRXZlbnRNaXhpbiwgQ3VzdG9tTGlua01peGluXSxcbiAgcHJvcHM6IHtcbiAgICBzdGFydEljb246IFN0cmluZyxcbiAgICBtb2RhbENsb3NlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgYWN0aXZhdGVkOiBCb29sZWFuLFxuICAgIGV4YWN0QWN0aXZlQ2xhc3M6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdtZGMtbGlzdC1pdGVtLS1hY3RpdmF0ZWQnXG4gICAgfVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbXlsaXN0ZW5lcnMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLiRsaXN0ZW5lcnMsXG4gICAgICAgIGNsaWNrOiBlID0+IHtcbiAgICAgICAgICB0aGlzLm1kY0RyYXdlci5pc01vZGFsICYmIHRoaXMubW9kYWxDbG9zZSAmJiB0aGlzLm1kY0RyYXdlci5jbG9zZSgpXG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGl0ZW1DbGFzc2VzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ21kYy1saXN0LWl0ZW0tLWFjdGl2YXRlZCc6IHRoaXMuYWN0aXZhdGVkXG4gICAgICB9XG4gICAgfSxcbiAgICBoYXNTdGFydERldGFpbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXJ0SWNvbiB8fCB0aGlzLiRzbG90c1snc3RhcnQtZGV0YWlsJ11cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzKVxuICAgIHRoaXMucmlwcGxlLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlICYmIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICAgIHRoaXMucmlwcGxlID0gbnVsbFxuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGhyIGNsYXNzPVwibWRjLWxpc3QtZGl2aWRlclwiPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1kcmF3ZXItZGl2aWRlcidcbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgbWRjRHJhd2VyIGZyb20gJy4vbWRjLWRyYXdlci52dWUnXG5pbXBvcnQgbWRjRHJhd2VySGVhZGVyIGZyb20gJy4vbWRjLWRyYXdlci1oZWFkZXIudnVlJ1xuaW1wb3J0IG1kY0RyYXdlckxpc3QgZnJvbSAnLi9tZGMtZHJhd2VyLWxpc3QudnVlJ1xuaW1wb3J0IG1kY0RyYXdlckl0ZW0gZnJvbSAnLi9tZGMtZHJhd2VyLWl0ZW0udnVlJ1xuaW1wb3J0IG1kY0RyYXdlckRpdmlkZXIgZnJvbSAnLi9tZGMtZHJhd2VyLWRpdmlkZXIudnVlJ1xuXG5leHBvcnQge1xuICBtZGNEcmF3ZXIsXG4gIG1kY0RyYXdlckhlYWRlcixcbiAgbWRjRHJhd2VyTGlzdCxcbiAgbWRjRHJhd2VySXRlbSxcbiAgbWRjRHJhd2VyRGl2aWRlclxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlUGx1Z2luKHtcbiAgbWRjRHJhd2VyLFxuICBtZGNEcmF3ZXJIZWFkZXIsXG4gIG1kY0RyYXdlckxpc3QsXG4gIG1kY0RyYXdlckl0ZW0sXG4gIG1kY0RyYXdlckRpdmlkZXJcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJDdXN0b21FbGVtZW50IiwiZnVuY3Rpb25hbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwicHJvcHMiLCJpcyIsInRhZyIsImRhdGEiLCJjaGlsZHJlbiIsIkN1c3RvbUVsZW1lbnRNaXhpbiIsIkN1c3RvbUxpbmsiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImxpbmsiLCJPYmplY3QiLCJoIiwiZWxlbWVudCIsInBhcmVudCIsIiRyb3V0ZXIiLCIkcm9vdCIsIiRvcHRpb25zIiwib24iLCJjbGljayIsIm5hdGl2ZU9uIiwiQ3VzdG9tTGlua01peGluIiwidG8iLCJleGFjdCIsIkJvb2xlYW4iLCJhcHBlbmQiLCJyZXBsYWNlIiwiYWN0aXZlQ2xhc3MiLCJleGFjdEFjdGl2ZUNsYXNzIiwiY29tcHV0ZWQiLCJEaXNwYXRjaEV2ZW50TWl4aW4iLCJldmVudCIsIkFycmF5IiwibWV0aG9kcyIsImRpc3BhdGNoRXZlbnQiLCJldnQiLCIkZW1pdCIsInRhcmdldCIsImV2ZW50VGFyZ2V0IiwiYXJncyIsImV2ZW50QXJncyIsImxpc3RlbmVycyIsIiRsaXN0ZW5lcnMiLCJlIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIk1EQ0RyYXdlckFkYXB0ZXIiLCJjbGFzc05hbWUiLCJNRENGb3VuZGF0aW9uIiwiYWRhcHRlciIsImFkYXB0ZXJfIiwiY3NzQ2xhc3NlcyIsIlJPT1QiLCJESVNNSVNTSUJMRSIsIk1PREFMIiwiT1BFTiIsIkFOSU1BVEUiLCJPUEVOSU5HIiwiQ0xPU0lORyIsInN0cmluZ3MiLCJBUFBfQ09OVEVOVF9TRUxFQ1RPUiIsIlNDUklNX1NFTEVDVE9SIiwiQ0xPU0VfRVZFTlQiLCJPUEVOX0VWRU5UIiwiTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwiZWxlbWVudEhhc0NsYXNzIiwibm90aWZ5Q2xvc2UiLCJub3RpZnlPcGVuIiwic2F2ZUZvY3VzIiwicmVzdG9yZUZvY3VzIiwiZm9jdXNBY3RpdmVOYXZpZ2F0aW9uSXRlbSIsInRyYXBGb2N1cyIsInJlbGVhc2VGb2N1cyIsImRlZmF1bHRBZGFwdGVyIiwiYW5pbWF0aW9uRnJhbWVfIiwiYW5pbWF0aW9uVGltZXJfIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJpc09wZW4iLCJpc09wZW5pbmciLCJpc0Nsb3NpbmciLCJydW5OZXh0QW5pbWF0aW9uRnJhbWVfIiwia2V5Q29kZSIsImlzRXNjYXBlIiwiY2xvc2UiLCJpc0VsZW1lbnQiLCJFbGVtZW50IiwiY2xvc2VkIiwib3BlbmVkIiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwiTURDTW9kYWxEcmF3ZXJGb3VuZGF0aW9uIiwiTURDQ29tcG9uZW50Iiwicm9vdCIsImZvdW5kYXRpb24iLCJ1bmRlZmluZWQiLCJyb290XyIsImluaXRpYWxpemUiLCJmb3VuZGF0aW9uXyIsImdldERlZmF1bHRGb3VuZGF0aW9uIiwiaW5pdCIsImluaXRpYWxTeW5jV2l0aERPTSIsIkVycm9yIiwiZGVzdHJveSIsImV2dFR5cGUiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldnREYXRhIiwic2hvdWxkQnViYmxlIiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsIk1EQ0xpc3RBZGFwdGVyIiwiaW5kZXgiLCJhdHRyaWJ1dGUiLCJ2YWx1ZSIsImxpc3RJdGVtSW5kZXgiLCJ0YWJJbmRleFZhbHVlIiwiaXNDaGVja2VkIiwiTElTVF9JVEVNX0NMQVNTIiwiTElTVF9JVEVNX1NFTEVDVEVEX0NMQVNTIiwiTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTUyIsIkFSSUFfT1JJRU5UQVRJT04iLCJBUklBX09SSUVOVEFUSU9OX0hPUklaT05UQUwiLCJBUklBX1NFTEVDVEVEIiwiQVJJQV9DSEVDS0VEIiwiQVJJQV9DSEVDS0VEX1JBRElPX1NFTEVDVE9SIiwiQVJJQV9ST0xFX0NIRUNLQk9YX1NFTEVDVE9SIiwiQVJJQV9DSEVDS0VEX0NIRUNLQk9YX1NFTEVDVE9SIiwiUkFESU9fU0VMRUNUT1IiLCJDSEVDS0JPWF9TRUxFQ1RPUiIsIkNIRUNLQk9YX1JBRElPX1NFTEVDVE9SIiwiQ0hJTERfRUxFTUVOVFNfVE9fVE9HR0xFX1RBQklOREVYIiwiRk9DVVNBQkxFX0NISUxEX0VMRU1FTlRTIiwiRU5BQkxFRF9JVEVNU19TRUxFQ1RPUiIsIkFDVElPTl9FVkVOVCIsIkVMRU1FTlRTX0tFWV9BTExPV0VEX0lOIiwiTURDTGlzdEZvdW5kYXRpb24iLCJnZXRMaXN0SXRlbUNvdW50IiwiZ2V0Rm9jdXNlZEVsZW1lbnRJbmRleCIsInNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCIsInJlbW92ZUF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCIsImFkZENsYXNzRm9yRWxlbWVudEluZGV4IiwicmVtb3ZlQ2xhc3NGb3JFbGVtZW50SW5kZXgiLCJmb2N1c0l0ZW1BdEluZGV4Iiwic2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuIiwiaGFzUmFkaW9BdEluZGV4IiwiaGFzQ2hlY2tib3hBdEluZGV4IiwiaXNDaGVja2JveENoZWNrZWRBdEluZGV4Iiwic2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXgiLCJub3RpZnlBY3Rpb24iLCJpc0ZvY3VzSW5zaWRlTGlzdCIsIndyYXBGb2N1c18iLCJpc1ZlcnRpY2FsXyIsImlzU2luZ2xlU2VsZWN0aW9uTGlzdF8iLCJzZWxlY3RlZEluZGV4XyIsImZvY3VzZWRJdGVtSW5kZXhfIiwidXNlQWN0aXZhdGVkQ2xhc3NfIiwiaXNDaGVja2JveExpc3RfIiwiaXNSYWRpb0xpc3RfIiwidXNlQWN0aXZhdGVkIiwiaXNJbmRleFZhbGlkXyIsInNldENoZWNrYm94QXRJbmRleF8iLCJzZXRSYWRpb0F0SW5kZXhfIiwic2V0U2luZ2xlU2VsZWN0aW9uQXRJbmRleF8iLCJzZXRUYWJpbmRleFRvRmlyc3RTZWxlY3RlZEl0ZW1fIiwiaXNSb290TGlzdEl0ZW0iLCJhcnJvd0xlZnQiLCJhcnJvd1VwIiwiYXJyb3dSaWdodCIsImFycm93RG93biIsImlzSG9tZSIsImlzRW5kIiwiaXNFbnRlciIsImlzU3BhY2UiLCJjdXJyZW50SW5kZXgiLCJuZXh0SW5kZXgiLCJwcmV2ZW50RGVmYXVsdEV2ZW50XyIsImZvY3VzTmV4dEVsZW1lbnQiLCJmb2N1c1ByZXZFbGVtZW50IiwiZm9jdXNGaXJzdEVsZW1lbnQiLCJmb2N1c0xhc3RFbGVtZW50IiwidGFnTmFtZSIsImlzU2VsZWN0YWJsZUxpc3RfIiwic2V0U2VsZWN0ZWRJbmRleE9uQWN0aW9uXyIsInNldFRhYmluZGV4QXRJbmRleF8iLCJ0b2dnbGVDaGVja2JveCIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInByZXZlbnREZWZhdWx0IiwiY291bnQiLCJwcmV2SW5kZXgiLCJsYXN0SW5kZXgiLCJzZWxlY3RlZENsYXNzTmFtZSIsImkiLCJ0YXJnZXRJbmRleCIsImxlbmd0aCIsInJlZHVjZSIsIm1pbkluZGV4IiwibWluIiwic29tZSIsImlzSW5kZXhJblJhbmdlXyIsImxpc3RTaXplIiwidG9nZ2xlQ2hlY2tib3hBdEluZGV4XyIsInNldFNlbGVjdGVkSW5kZXgiLCJwdXNoIiwiZmlsdGVyIiwibWF0Y2hlcyIsInNlbGVjdG9yIiwibmF0aXZlTWF0Y2hlcyIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiY2FsbCIsIk1EQ0xpc3QiLCJoYW5kbGVLZXlkb3duXyIsImhhbmRsZUNsaWNrXyIsImZvY3VzSW5FdmVudExpc3RlbmVyXyIsImZvY3VzT3V0RXZlbnRMaXN0ZW5lcl8iLCJoYW5kbGVDbGlja0V2ZW50XyIsImJpbmQiLCJoYW5kbGVLZXlkb3duRXZlbnRfIiwiaGFuZGxlRm9jdXNJbkV2ZW50XyIsImhhbmRsZUZvY3VzT3V0RXZlbnRfIiwibGF5b3V0IiwiaW5pdGlhbGl6ZUxpc3RUeXBlIiwiZGlyZWN0aW9uIiwiZ2V0QXR0cmlidXRlIiwidmVydGljYWwiLCJzbGljZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlIiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnRFbGVtZW50IiwibGlzdEVsZW1lbnRzIiwiZ2V0TGlzdEl0ZW1JbmRleF8iLCJoYW5kbGVGb2N1c0luIiwiaGFuZGxlRm9jdXNPdXQiLCJoYW5kbGVLZXlkb3duIiwiaGFuZGxlQ2xpY2siLCJjaGVja2JveExpc3RJdGVtcyIsInNpbmdsZVNlbGVjdGVkTGlzdEl0ZW0iLCJxdWVyeVNlbGVjdG9yIiwicmFkaW9TZWxlY3RlZExpc3RJdGVtIiwicHJlc2VsZWN0ZWRJdGVtcyIsInNlbGVjdGVkSW5kZXgiLCJtYXAiLCJsaXN0SXRlbSIsInNldFVzZUFjdGl2YXRlZENsYXNzIiwic2luZ2xlU2VsZWN0aW9uIiwiYWN0aXZlRWxlbWVudCIsImF0dHIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGQiLCJyZW1vdmUiLCJmb2N1cyIsImxpc3RJdGVtQ2hpbGRyZW4iLCJ0b2dnbGVFbCIsImNoZWNrZWQiLCJpbml0RXZlbnQiLCJlbWl0Iiwic2V0VmVydGljYWxPcmllbnRhdGlvbiIsInNldFdyYXBGb2N1cyIsImlzU2luZ2xlU2VsZWN0aW9uTGlzdCIsInNldFNpbmdsZVNlbGVjdGlvbiIsImdldFNlbGVjdGVkSW5kZXgiLCJjYW5kaWRhdGVTZWxlY3RvcnMiLCJjYW5kaWRhdGVTZWxlY3RvciIsImpvaW4iLCJwcm90b3R5cGUiLCJ0YWJiYWJsZSIsImVsIiwib3B0aW9ucyIsImVsZW1lbnREb2N1bWVudCIsIm93bmVyRG9jdW1lbnQiLCJyZWd1bGFyVGFiYmFibGVzIiwib3JkZXJlZFRhYmJhYmxlcyIsInVudG91Y2hhYmlsaXR5Q2hlY2tlciIsIlVudG91Y2hhYmlsaXR5Q2hlY2tlciIsImNhbmRpZGF0ZXMiLCJpbmNsdWRlQ29udGFpbmVyIiwiYXBwbHkiLCJ1bnNoaWZ0IiwiY2FuZGlkYXRlIiwiY2FuZGlkYXRlVGFiaW5kZXgiLCJpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUiLCJnZXRUYWJpbmRleCIsImRvY3VtZW50T3JkZXIiLCJ0YWJJbmRleCIsIm5vZGUiLCJ0YWJiYWJsZU5vZGVzIiwic29ydCIsInNvcnRPcmRlcmVkVGFiYmFibGVzIiwiYSIsImNvbmNhdCIsImlzVGFiYmFibGUiLCJpc0ZvY3VzYWJsZSIsImlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUiLCJpc05vblRhYmJhYmxlUmFkaW8iLCJkaXNhYmxlZCIsImlzSGlkZGVuSW5wdXQiLCJpc1VudG91Y2hhYmxlIiwiZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IiLCJ0YWJpbmRleEF0dHIiLCJwYXJzZUludCIsImlzTmFOIiwiaXNDb250ZW50RWRpdGFibGUiLCJiIiwiZmluZCIsImxpc3QiLCJwcmVkaWNhdGUiLCJjb250ZW50RWRpdGFibGUiLCJpc0lucHV0IiwiaXNSYWRpbyIsImlzVGFiYmFibGVSYWRpbyIsImdldENoZWNrZWRSYWRpbyIsIm5vZGVzIiwicmFkaW9TZXQiLCJkb2MiLCJjYWNoZSIsImhhc0Rpc3BsYXlOb25lIiwibm9kZUNvbXB1dGVkU3R5bGUiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJjYWNoZWQiLCJpdGVtIiwiZGVmYXVsdFZpZXciLCJnZXRDb21wdXRlZFN0eWxlIiwicmVzdWx0IiwiZGlzcGxheSIsInBhcmVudE5vZGUiLCJkb2N1bWVudEVsZW1lbnQiLCJjb21wdXRlZFN0eWxlIiwidmlzaWJpbGl0eSIsIm1vZHVsZSIsImV4dGVuZCIsImhhc093blByb3BlcnR5IiwiYXJndW1lbnRzIiwic291cmNlIiwiYWN0aXZlRm9jdXNUcmFwcyIsInRyYXBRdWV1ZSIsImFjdGl2YXRlVHJhcCIsInRyYXAiLCJhY3RpdmVUcmFwIiwicGF1c2UiLCJ0cmFwSW5kZXgiLCJzcGxpY2UiLCJkZWFjdGl2YXRlVHJhcCIsInVucGF1c2UiLCJmb2N1c1RyYXAiLCJ1c2VyT3B0aW9ucyIsImNvbnRhaW5lciIsImNvbmZpZyIsInh0ZW5kIiwicmV0dXJuRm9jdXNPbkRlYWN0aXZhdGUiLCJlc2NhcGVEZWFjdGl2YXRlcyIsInN0YXRlIiwiZmlyc3RUYWJiYWJsZU5vZGUiLCJsYXN0VGFiYmFibGVOb2RlIiwibm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uIiwibW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUiLCJhY3RpdmUiLCJwYXVzZWQiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJhY3RpdmF0ZU9wdGlvbnMiLCJ1cGRhdGVUYWJiYWJsZU5vZGVzIiwib25BY3RpdmF0ZSIsImFkZExpc3RlbmVycyIsImRlYWN0aXZhdGVPcHRpb25zIiwicmVtb3ZlTGlzdGVuZXJzIiwib25EZWFjdGl2YXRlIiwicmV0dXJuRm9jdXMiLCJkZWxheSIsInRyeUZvY3VzIiwiZ2V0SW5pdGlhbEZvY3VzTm9kZSIsImNoZWNrRm9jdXNJbiIsImNoZWNrUG9pbnRlckRvd24iLCJjaGVja0NsaWNrIiwiY2hlY2tLZXkiLCJnZXROb2RlRm9yT3B0aW9uIiwib3B0aW9uTmFtZSIsIm9wdGlvblZhbHVlIiwiY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMiLCJEb2N1bWVudCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImlzRXNjYXBlRXZlbnQiLCJpc1RhYkV2ZW50IiwiY2hlY2tUYWIiLCJzaGlmdEtleSIsImlzU2VsZWN0YWJsZUlucHV0Iiwic2VsZWN0IiwiZm4iLCJNRENSaXBwbGVBZGFwdGVyIiwidmFyTmFtZSIsIlVOQk9VTkRFRCIsIkJHX0ZPQ1VTRUQiLCJGR19BQ1RJVkFUSU9OIiwiRkdfREVBQ1RJVkFUSU9OIiwiVkFSX0xFRlQiLCJWQVJfVE9QIiwiVkFSX0ZHX1NJWkUiLCJWQVJfRkdfU0NBTEUiLCJWQVJfRkdfVFJBTlNMQVRFX1NUQVJUIiwiVkFSX0ZHX1RSQU5TTEFURV9FTkQiLCJudW1iZXJzIiwiUEFERElORyIsIklOSVRJQUxfT1JJR0lOX1NDQUxFIiwiREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMiLCJGR19ERUFDVElWQVRJT05fTVMiLCJUQVBfREVMQVlfTVMiLCJzdXBwb3J0c0Nzc1ZhcmlhYmxlc18iLCJzdXBwb3J0c1Bhc3NpdmVfIiwiZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1ZyIsIndpbmRvd09iaiIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImhhc1BzZXVkb1ZhckJ1ZyIsImJvcmRlclRvcFN0eWxlIiwic3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJmb3JjZVJlZnJlc2giLCJzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCIsIkNTUyIsInN1cHBvcnRzIiwiZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyIsIndlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyIsImFwcGx5UGFzc2l2ZSIsImdsb2JhbE9iaiIsImlzU3VwcG9ydGVkIiwicGFzc2l2ZSIsImdldE1hdGNoZXNQcm9wZXJ0eSIsIkhUTUxFbGVtZW50UHJvdG90eXBlIiwibWF0Y2hlc01ldGhvZHMiLCJtZXRob2QiLCJtYXRjaGVzTWV0aG9kIiwiZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzIiwiZXYiLCJwYWdlT2Zmc2V0IiwiY2xpZW50UmVjdCIsIngiLCJ5IiwiZG9jdW1lbnRYIiwibGVmdCIsImRvY3VtZW50WSIsInRvcCIsIm5vcm1hbGl6ZWRYIiwibm9ybWFsaXplZFkiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTIiwiUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMiLCJhY3RpdmF0ZWRUYXJnZXRzIiwiTURDUmlwcGxlRm91bmRhdGlvbiIsImJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMiLCJpc1VuYm91bmRlZCIsImlzU3VyZmFjZUFjdGl2ZSIsImlzU3VyZmFjZURpc2FibGVkIiwiY29udGFpbnNFdmVudFRhcmdldCIsInJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwiZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJkZXJlZ2lzdGVyUmVzaXplSGFuZGxlciIsInVwZGF0ZUNzc1ZhcmlhYmxlIiwiY29tcHV0ZUJvdW5kaW5nUmVjdCIsImdldFdpbmRvd1BhZ2VPZmZzZXQiLCJsYXlvdXRGcmFtZV8iLCJmcmFtZV8iLCJ3aWR0aCIsImhlaWdodCIsImFjdGl2YXRpb25TdGF0ZV8iLCJkZWZhdWx0QWN0aXZhdGlvblN0YXRlXyIsImluaXRpYWxTaXplXyIsIm1heFJhZGl1c18iLCJhY3RpdmF0ZUhhbmRsZXJfIiwiYWN0aXZhdGVfIiwiZGVhY3RpdmF0ZUhhbmRsZXJfIiwiZGVhY3RpdmF0ZV8iLCJmb2N1c0hhbmRsZXJfIiwiaGFuZGxlRm9jdXMiLCJibHVySGFuZGxlcl8iLCJoYW5kbGVCbHVyIiwicmVzaXplSGFuZGxlcl8iLCJ1bmJvdW5kZWRDb29yZHNfIiwiZmdTY2FsZV8iLCJhY3RpdmF0aW9uVGltZXJfIiwiZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfIiwiYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyIsImFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyIsInJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XyIsInByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyIsImlzQWN0aXZhdGVkIiwiaGFzRGVhY3RpdmF0aW9uVVhSdW4iLCJ3YXNBY3RpdmF0ZWRCeVBvaW50ZXIiLCJ3YXNFbGVtZW50TWFkZUFjdGl2ZSIsImFjdGl2YXRpb25FdmVudCIsImlzUHJvZ3JhbW1hdGljIiwic3VwcG9ydHNQcmVzc1JpcHBsZSIsInN1cHBvcnRzUHJlc3NSaXBwbGVfIiwicmVnaXN0ZXJSb290SGFuZGxlcnNfIiwibGF5b3V0SW50ZXJuYWxfIiwicmVtb3ZlQ3NzVmFyc18iLCJkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXyIsImRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18iLCJrZXlzIiwiayIsImFjdGl2YXRpb25TdGF0ZSIsInByZXZpb3VzQWN0aXZhdGlvbkV2ZW50IiwiaXNTYW1lSW50ZXJhY3Rpb24iLCJoYXNBY3RpdmF0ZWRDaGlsZCIsInJlc2V0QWN0aXZhdGlvblN0YXRlXyIsInJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfIiwiY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8iLCJhbmltYXRlQWN0aXZhdGlvbl8iLCJ0cmFuc2xhdGVTdGFydCIsInRyYW5zbGF0ZUVuZCIsImdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18iLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18iLCJhY3RpdmF0aW9uSGFzRW5kZWQiLCJhbmltYXRlRGVhY3RpdmF0aW9uXyIsIm1heERpbSIsIm1heCIsImdldEJvdW5kZWRSYWRpdXMiLCJoeXBvdGVudXNlIiwic3FydCIsInBvdyIsInVwZGF0ZUxheW91dENzc1ZhcnNfIiwicm91bmQiLCJ1bmJvdW5kZWQiLCJNRENSaXBwbGUiLCJ1bmJvdW5kZWRfIiwic2V0VW5ib3VuZGVkIiwiY3JlYXRlQWRhcHRlciIsImRhdGFzZXQiLCJzZXRVbmJvdW5kZWRfIiwicmlwcGxlIiwiaW5zdGFuY2UiLCJNQVRDSEVTIiwidXRpbCIsIkhUTUxFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJSaXBwbGVDYXBhYmxlU3VyZmFjZSIsIlJpcHBsZUJhc2UiLCJyZWYiLCJfbWF0Y2hlcyIsIiRlbCIsIiRzZXQiLCJjbGFzc2VzIiwiJGRlbGV0ZSIsInN0eWxlcyIsIlJpcHBsZU1peGluIiwibW91bnRlZCIsImJlZm9yZURlc3Ryb3kiLCJtZGNEcmF3ZXIiLCJtZGNEcmF3ZXJIZWFkZXIiLCJtZGNEcmF3ZXJMaXN0IiwibWRjRHJhd2VySXRlbSIsIm1kY0RyYXdlckRpdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtJQUMvQjtJQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztJQUNBLE1BQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztJQUNqQ0QsSUFBQUEsSUFBSSxHQUFHQyxNQUFNLENBQUNDLEdBQWQ7SUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0lBQ3hDO0lBQ0FILElBQUFBLElBQUksR0FBR0csTUFBTSxDQUFDRCxHQUFkO0lBQ0Q7O0lBQ0QsTUFBSUYsSUFBSixFQUFVO0lBQ1JBLElBQUFBLElBQUksQ0FBQ0ksR0FBTCxDQUFTTCxNQUFUO0lBQ0Q7SUFDRjs7SUNaTSxTQUFTTSxVQUFULENBQW9CQyxVQUFwQixFQUFnQztJQUNyQyxTQUFPO0lBQ0xDLElBQUFBLE9BQU8sRUFBRSxhQURKO0lBRUxDLElBQUFBLE9BQU8sRUFBRSxpQkFBQUMsRUFBRSxFQUFJO0lBQ2IsV0FBSyxJQUFJQyxHQUFULElBQWdCSixVQUFoQixFQUE0QjtJQUMxQixZQUFJSyxTQUFTLEdBQUdMLFVBQVUsQ0FBQ0ksR0FBRCxDQUEx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
