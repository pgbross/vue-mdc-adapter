/**
* @module vue-mdc-adapterdrawer 0.19.1-beta
* @exports VueMDCDrawer
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
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
        version: '0.19.1-beta',
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
            followHref: function followHref(index) {
              var listItem = _this3.listElements[index];

              if (listItem && listItem.href) {
                listItem.click();
              }
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
    script.__file = "/ddata/extra/vma/components/drawer/mdc-drawer.vue";

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
      

      
      var mdcDrawer = normalizeComponent(
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
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$1.__file = "/ddata/extra/vma/components/drawer/mdc-drawer-header.vue";

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
      

      
      var mdcDrawerHeader = normalizeComponent(
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
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$2.__file = "/ddata/extra/vma/components/drawer/mdc-drawer-list.vue";

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
      

      
      var mdcDrawerList = normalizeComponent(
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
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$3.__file = "/ddata/extra/vma/components/ripple/mdc-ripple.vue";

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
      

      
      normalizeComponent(
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
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$4.__file = "/ddata/extra/vma/components/drawer/mdc-drawer-item.vue";

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
      

      
      var mdcDrawerItem = normalizeComponent(
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
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$5.__file = "/ddata/extra/vma/components/drawer/mdc-drawer-divider.vue";

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
      

      
      var mdcDrawerDivider = normalizeComponent(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXV0by1pbml0LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Jhc2UtcGx1Z2luLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1lbGVtZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1saW5rLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1ldmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9kaXNwYXRjaC1ldmVudC1taXhpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS91bmlxdWVpZC1taXhpbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL2Rpc21pc3NpYmxlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci9tb2RhbC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGlzdC9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGlzdC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vcG9ueWZpbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpc3QvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdGFiYmFibGUvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2ZvY3VzLXRyYXAvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL2RyYXdlci9tZGMtZHJhd2VyLnZ1ZSIsIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtcnVudGltZS1oZWxwZXJzL25vcm1hbGl6ZS1jb21wb25lbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2RyYXdlci9tZGMtZHJhd2VyLWhlYWRlci52dWUiLCIuLi8uLi9jb21wb25lbnRzL2RyYXdlci9tZGMtZHJhd2VyLWxpc3QudnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLWJhc2UuanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL21kYy1kcmF3ZXItaXRlbS52dWUiLCIuLi8uLi9jb21wb25lbnRzL2RyYXdlci9tZGMtZHJhd2VyLWRpdmlkZXIudnVlIiwiLi4vLi4vY29tcG9uZW50cy9kcmF3ZXIvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL2RyYXdlci9lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXV0b0luaXQocGx1Z2luKSB7XG4gIC8vIEF1dG8taW5zdGFsbFxuICBsZXQgX1Z1ZSA9IG51bGxcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgX1Z1ZSA9IHdpbmRvdy5WdWVcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8qZ2xvYmFsIGdsb2JhbCovXG4gICAgX1Z1ZSA9IGdsb2JhbC5WdWVcbiAgfVxuICBpZiAoX1Z1ZSkge1xuICAgIF9WdWUudXNlKHBsdWdpbilcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIEJhc2VQbHVnaW4oY29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICdfX1ZFUlNJT05fXycsXG4gICAgaW5zdGFsbDogdm0gPT4ge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNba2V5XVxuICAgICAgICB2bS5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHNcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEN1c3RvbUVsZW1lbnQgPSB7XG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHJlbmRlcihjcmVhdGVFbGVtZW50LCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBjb250ZXh0LnByb3BzLmlzIHx8IGNvbnRleHQucHJvcHMudGFnIHx8ICdkaXYnLFxuICAgICAgY29udGV4dC5kYXRhLFxuICAgICAgY29udGV4dC5jaGlsZHJlblxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudE1peGluID0ge1xuICBjb21wb25lbnRzOiB7XG4gICAgQ3VzdG9tRWxlbWVudFxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tTGluayA9IHtcbiAgbmFtZTogJ2N1c3RvbS1saW5rJyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICB0YWc6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnYScgfSxcbiAgICBsaW5rOiBPYmplY3RcbiAgfSxcbiAgcmVuZGVyKGgsIGNvbnRleHQpIHtcbiAgICBsZXQgZWxlbWVudFxuICAgIGxldCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dC5kYXRhKVxuXG4gICAgaWYgKGNvbnRleHQucHJvcHMubGluayAmJiBjb250ZXh0LnBhcmVudC4kcm91dGVyKSB7XG4gICAgICAvLyByb3V0ZXItbGluayBjYXNlXG4gICAgICBlbGVtZW50ID0gY29udGV4dC5wYXJlbnQuJHJvb3QuJG9wdGlvbnMuY29tcG9uZW50c1sncm91dGVyLWxpbmsnXVxuICAgICAgZGF0YS5wcm9wcyA9IE9iamVjdC5hc3NpZ24oeyB0YWc6IGNvbnRleHQucHJvcHMudGFnIH0sIGNvbnRleHQucHJvcHMubGluaylcbiAgICAgIGlmIChkYXRhLm9uLmNsaWNrKSB7XG4gICAgICAgIGRhdGEubmF0aXZlT24gPSB7IGNsaWNrOiBkYXRhLm9uLmNsaWNrIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZWxlbWVudCBmYWxsYmFja1xuICAgICAgZWxlbWVudCA9IGNvbnRleHQucHJvcHMudGFnXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoZWxlbWVudCwgZGF0YSwgY29udGV4dC5jaGlsZHJlbilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9tTGlua01peGluID0ge1xuICBwcm9wczoge1xuICAgIHRvOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgIGV4YWN0OiBCb29sZWFuLFxuICAgIGFwcGVuZDogQm9vbGVhbixcbiAgICByZXBsYWNlOiBCb29sZWFuLFxuICAgIGFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gICAgZXhhY3RBY3RpdmVDbGFzczogU3RyaW5nXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbGluaygpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMudG8gJiYge1xuICAgICAgICAgIHRvOiB0aGlzLnRvLFxuICAgICAgICAgIGV4YWN0OiB0aGlzLmV4YWN0LFxuICAgICAgICAgIGFwcGVuZDogdGhpcy5hcHBlbmQsXG4gICAgICAgICAgcmVwbGFjZTogdGhpcy5yZXBsYWNlLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzOiB0aGlzLmFjdGl2ZUNsYXNzLFxuICAgICAgICAgIGV4YWN0QWN0aXZlQ2xhc3M6IHRoaXMuZXhhY3RBY3RpdmVDbGFzc1xuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgQ3VzdG9tTGlua1xuICB9XG59XG4iLCIvKiBnbG9iYWwgQ3VzdG9tRXZlbnQgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXRDdXN0b21FdmVudChlbCwgZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgbGV0IGV2dFxuICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpXG4gIH1cbiAgZWwuZGlzcGF0Y2hFdmVudChldnQpXG59XG4iLCJleHBvcnQgY29uc3QgRGlzcGF0Y2hFdmVudE1peGluID0ge1xuICBwcm9wczoge1xuICAgIGV2ZW50OiBTdHJpbmcsXG4gICAgJ2V2ZW50LXRhcmdldCc6IE9iamVjdCxcbiAgICAnZXZlbnQtYXJncyc6IEFycmF5XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBkaXNwYXRjaEV2ZW50KGV2dCkge1xuICAgICAgZXZ0ICYmIHRoaXMuJGVtaXQoZXZ0LnR5cGUsIGV2dClcbiAgICAgIGlmICh0aGlzLmV2ZW50KSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmV2ZW50VGFyZ2V0IHx8IHRoaXMuJHJvb3RcbiAgICAgICAgbGV0IGFyZ3MgPSB0aGlzLmV2ZW50QXJncyB8fCBbXVxuICAgICAgICB0YXJnZXQuJGVtaXQodGhpcy5ldmVudCwgLi4uYXJncylcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbGlzdGVuZXJzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy4kbGlzdGVuZXJzLFxuICAgICAgICBjbGljazogZSA9PiB0aGlzLmRpc3BhdGNoRXZlbnQoZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0IHNjb3BlID1cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigweDEwMDAwMDAwKSkudG9TdHJpbmcoKSArICctJ1xuXG5leHBvcnQgY29uc3QgVk1BVW5pcXVlSWRNaXhpbiA9IHtcbiAgYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMudm1hX3VpZF8gPSBzY29wZSArIHRoaXMuX3VpZFxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIERyYXdlclxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIERyYXdlciBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDRHJhd2VyQWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIGEgY2xhc3MgdG8gdGhlIHJvb3QgRWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2xhc3MgZnJvbSB0aGUgcm9vdCBFbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcm9vdCBFbGVtZW50IGNvbnRhaW5zIHRoZSBnaXZlbiBjbGFzcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50IHRhcmdldCBlbGVtZW50IHRvIHZlcmlmeSBjbGFzcyBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgY2xhc3MgbmFtZVxuICAgKi9cbiAgZWxlbWVudEhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogU2F2ZXMgdGhlIGZvY3VzIG9mIGN1cnJlbnRseSBhY3RpdmUgZWxlbWVudC5cbiAgICovXG4gIHNhdmVGb2N1cygpIHt9XG5cbiAgLyoqXG4gICAqIFJlc3RvcmVzIGZvY3VzIHRvIGVsZW1lbnQgcHJldmlvdXNseSBzYXZlZCB3aXRoICdzYXZlRm9jdXMnLlxuICAgKi9cbiAgcmVzdG9yZUZvY3VzKCkge31cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgYWN0aXZlIC8gc2VsZWN0ZWQgbmF2aWdhdGlvbiBpdGVtLlxuICAgKi9cbiAgZm9jdXNBY3RpdmVOYXZpZ2F0aW9uSXRlbSgpIHt9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGEgY3VzdG9tIGV2ZW50IFwiTURDRHJhd2VyOmNsb3NlZFwiIGRlbm90aW5nIHRoZSBkcmF3ZXIgaGFzIGNsb3NlZC5cbiAgICovXG4gIG5vdGlmeUNsb3NlKCkge31cblxuICAvKipcbiAgICogRW1pdHMgYSBjdXN0b20gZXZlbnQgXCJNRENEcmF3ZXI6b3BlbmVkXCIgZGVub3RpbmcgdGhlIGRyYXdlciBoYXMgb3BlbmVkLlxuICAgKi9cbiAgbm90aWZ5T3BlbigpIHt9XG5cbiAgLyoqXG4gICAqIFRyYXBzIGZvY3VzIG9uIHJvb3QgZWxlbWVudCBhbmQgZm9jdXNlcyB0aGUgYWN0aXZlIG5hdmlnYXRpb24gZWxlbWVudC5cbiAgICovXG4gIHRyYXBGb2N1cygpIHt9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2VzIGZvY3VzIHRyYXAgZnJvbSByb290IGVsZW1lbnQgd2hpY2ggd2FzIHNldCBieSBgdHJhcEZvY3VzYFxuICAgKiBhbmQgcmVzdG9yZXMgZm9jdXMgdG8gd2hlcmUgaXQgd2FzIHByaW9yIHRvIGNhbGxpbmcgYHRyYXBGb2N1c2AuXG4gICAqL1xuICByZWxlYXNlRm9jdXMoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENEcmF3ZXJBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIEFcbiAqL1xuY2xhc3MgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW17Y3NzQ2xhc3Nlc30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte3N0cmluZ3N9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte251bWJlcnN9ICovXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFPYmplY3R9ICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgIC8vIHZhbGlkYXRpb24uXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7QT19IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIgPSB7fSkge1xuICAgIC8qKiBAcHJvdGVjdGVkIHshQX0gKi9cbiAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICBST09UOiAnbWRjLWRyYXdlcicsXG4gIERJU01JU1NJQkxFOiAnbWRjLWRyYXdlci0tZGlzbWlzc2libGUnLFxuICBNT0RBTDogJ21kYy1kcmF3ZXItLW1vZGFsJyxcbiAgT1BFTjogJ21kYy1kcmF3ZXItLW9wZW4nLFxuICBBTklNQVRFOiAnbWRjLWRyYXdlci0tYW5pbWF0ZScsXG4gIE9QRU5JTkc6ICdtZGMtZHJhd2VyLS1vcGVuaW5nJyxcbiAgQ0xPU0lORzogJ21kYy1kcmF3ZXItLWNsb3NpbmcnLFxufTtcblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBzdHJpbmdzID0ge1xuICBBUFBfQ09OVEVOVF9TRUxFQ1RPUjogJy5tZGMtZHJhd2VyLWFwcC1jb250ZW50JyxcbiAgU0NSSU1fU0VMRUNUT1I6ICcubWRjLWRyYXdlci1zY3JpbScsXG4gIENMT1NFX0VWRU5UOiAnTURDRHJhd2VyOmNsb3NlZCcsXG4gIE9QRU5fRVZFTlQ6ICdNRENEcmF3ZXI6b3BlbmVkJyxcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5nc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0RyYXdlckFkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlcic7XG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5nc30gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDRHJhd2VyQWRhcHRlcj59XG4gKi9cbmNsYXNzIE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDRHJhd2VyQWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBoYXNDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGVsZW1lbnRIYXNDbGFzczogKC8qIGVsZW1lbnQ6ICFFbGVtZW50LCBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBub3RpZnlDbG9zZTogKCkgPT4ge30sXG4gICAgICBub3RpZnlPcGVuOiAoKSA9PiB7fSxcbiAgICAgIHNhdmVGb2N1czogKCkgPT4ge30sXG4gICAgICByZXN0b3JlRm9jdXM6ICgpID0+IHt9LFxuICAgICAgZm9jdXNBY3RpdmVOYXZpZ2F0aW9uSXRlbTogKCkgPT4ge30sXG4gICAgICB0cmFwRm9jdXM6ICgpID0+IHt9LFxuICAgICAgcmVsZWFzZUZvY3VzOiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hbmltYXRpb25UaW1lcl8gPSAwO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5hbmltYXRpb25GcmFtZV8pIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWVfKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uVGltZXJfKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25UaW1lcl8pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBvcGVuIHRoZSBkcmF3ZXIuXG4gICAqL1xuICBvcGVuKCkge1xuICAgIGlmICh0aGlzLmlzT3BlbigpIHx8IHRoaXMuaXNPcGVuaW5nKCkgfHwgdGhpcy5pc0Nsb3NpbmcoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQU5JTUFURSk7XG5cbiAgICAvLyBXYWl0IGEgZnJhbWUgb25jZSBkaXNwbGF5IGlzIG5vIGxvbmdlciBcIm5vbmVcIiwgdG8gZXN0YWJsaXNoIGJhc2lzIGZvciBhbmltYXRpb25cbiAgICB0aGlzLnJ1bk5leHRBbmltYXRpb25GcmFtZV8oKCkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLk9QRU5JTkcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hZGFwdGVyXy5zYXZlRm9jdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBjbG9zZSB0aGUgZHJhd2VyLlxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgaWYgKCF0aGlzLmlzT3BlbigpIHx8IHRoaXMuaXNPcGVuaW5nKCkgfHwgdGhpcy5pc0Nsb3NpbmcoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5DTE9TSU5HKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRlbnNpb24gcG9pbnQgZm9yIHdoZW4gZHJhd2VyIGZpbmlzaGVzIG9wZW4gYW5pbWF0aW9uLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBvcGVuZWQoKSB7fVxuXG4gIC8qKlxuICAgKiBFeHRlbnNpb24gcG9pbnQgZm9yIHdoZW4gZHJhd2VyIGZpbmlzaGVzIGNsb3NlIGFuaW1hdGlvbi5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgY2xvc2VkKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGRyYXdlciBpcyBpbiBvcGVuIHN0YXRlLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuT1BFTik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGRyYXdlciBpcyBhbmltYXRpbmcgb3Blbi5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzT3BlbmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLk9QRU5JTkcpIHx8IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5BTklNQVRFKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgZHJhd2VyIGlzIGFuaW1hdGluZyBjbG9zZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0Nsb3NpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5DTE9TSU5HKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBLZXlkb3duIGhhbmRsZXIgdG8gY2xvc2UgZHJhd2VyIHdoZW4ga2V5IGlzIGVzY2FwZS5cbiAgICogQHBhcmFtIGV2dFxuICAgKi9cbiAgaGFuZGxlS2V5ZG93bihldnQpIHtcbiAgICBjb25zdCB7a2V5Q29kZSwga2V5fSA9IGV2dDtcblxuICAgIGNvbnN0IGlzRXNjYXBlID0ga2V5ID09PSAnRXNjYXBlJyB8fCBrZXlDb2RlID09PSAyNztcbiAgICBpZiAoaXNFc2NhcGUpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhIHRyYW5zaXRpb24gZW5kIGV2ZW50IG9uIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KSB7XG4gICAgY29uc3Qge09QRU5JTkcsIENMT1NJTkcsIE9QRU4sIEFOSU1BVEUsIFJPT1R9ID0gY3NzQ2xhc3NlcztcblxuICAgIC8vIEluIEVkZ2UsIHRyYW5zaXRpb25lbmQgb24gcmlwcGxlIHBzZXVkby1lbGVtZW50cyB5aWVsZHMgYSB0YXJnZXQgd2l0aG91dCBjbGFzc0xpc3QsIHNvIGNoZWNrIGZvciBFbGVtZW50IGZpcnN0LlxuICAgIGNvbnN0IGlzRWxlbWVudCA9IGV2dC50YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50O1xuICAgIGlmICghaXNFbGVtZW50IHx8ICF0aGlzLmFkYXB0ZXJfLmVsZW1lbnRIYXNDbGFzcygvKiogQHR5cGUgeyFFbGVtZW50fSAqLyAoZXZ0LnRhcmdldCksIFJPT1QpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNDbG9zaW5nKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoT1BFTik7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlc3RvcmVGb2N1cygpO1xuICAgICAgdGhpcy5jbG9zZWQoKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5Q2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0FjdGl2ZU5hdmlnYXRpb25JdGVtKCk7XG4gICAgICB0aGlzLm9wZW5lZCgpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlPcGVuKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhBTklNQVRFKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE9QRU5JTkcpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoQ0xPU0lORyk7XG4gIH1cblxuICAvKipcbiAgICogUnVucyB0aGUgZ2l2ZW4gbG9naWMgb24gdGhlIG5leHQgYW5pbWF0aW9uIGZyYW1lLCB1c2luZyBzZXRUaW1lb3V0IHRvIGZhY3RvciBpbiBGaXJlZm94IHJlZmxvdyBiZWhhdmlvci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJ1bk5leHRBbmltYXRpb25GcmFtZV8oY2FsbGJhY2spIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lXyk7XG4gICAgdGhpcy5hbmltYXRpb25GcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0aW9uVGltZXJfKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENEcmF3ZXJBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbiBmcm9tICcuLi9kaXNtaXNzaWJsZS9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9ufVxuICovXG5jbGFzcyBNRENNb2RhbERyYXdlckZvdW5kYXRpb24gZXh0ZW5kcyBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24ge1xuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gZHJhd2VyIGZpbmlzaGVzIG9wZW4gYW5pbWF0aW9uLlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIG9wZW5lZCgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnRyYXBGb2N1cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGRyYXdlciBmaW5pc2hlcyBjbG9zZSBhbmltYXRpb24uXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgY2xvc2VkKCkge1xuICAgIHRoaXMuYWRhcHRlcl8ucmVsZWFzZUZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBjbGljayBldmVudCBvbiBzY3JpbS5cbiAgICovXG4gIGhhbmRsZVNjcmltQ2xpY2soKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ01vZGFsRHJhd2VyRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBGXG4gKi9cbmNsYXNzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENDb21wb25lbnR9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7Rj19IGZvdW5kYXRpb25cbiAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb290LCBmb3VuZGF0aW9uID0gdW5kZWZpbmVkLCAuLi5hcmdzKSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuICAgIHRoaXMucm9vdF8gPSByb290O1xuICAgIHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcbiAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgLy8gdGhpcy5yb290XyBpcyBkZWZpbmVkIGFuZCBjYW4gYmUgdXNlZCB3aXRoaW4gdGhlIGZvdW5kYXRpb24gY2xhc3MuXG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFGfSAqL1xuICAgIHRoaXMuZm91bmRhdGlvbl8gPSBmb3VuZGF0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmdldERlZmF1bHRGb3VuZGF0aW9uKCkgOiBmb3VuZGF0aW9uO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gIH1cblxuICBpbml0aWFsaXplKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshRn0gZm91bmRhdGlvblxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgLy8gY29tcG9uZW50LlxuICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogbGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgbGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gcmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiB1bmxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLFxuICAgKiB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFPYmplY3R9IGV2dERhdGFcbiAgICogQHBhcmFtIHtib29sZWFuPX0gc2hvdWxkQnViYmxlXG4gICAqL1xuICBlbWl0KGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gICAgbGV0IGV2dDtcbiAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5yb290Xy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBMaXN0LiBQcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIG1hbmFnaW5nIGZvY3VzLlxuICpcbiAqIEFkZGl0aW9uYWxseSwgcHJvdmlkZXMgdHlwZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGFkYXB0ZXIgdG8gdGhlIENsb3N1cmVcbiAqIGNvbXBpbGVyLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGFkYXB0ZXIgZm9yIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZSB0byBkZWxlZ2F0ZSB1cGRhdGVzIHRvXG4gKiB0aGUgY29tcG9uZW50IGluIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZS4gU2VlIGFyY2hpdGVjdHVyZSBkb2N1bWVudGF0aW9uXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9jb2RlL2FyY2hpdGVjdHVyZS5tZFxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDTGlzdEFkYXB0ZXIge1xuICAvKiogQHJldHVybiB7bnVtYmVyfSAqL1xuICBnZXRMaXN0SXRlbUNvdW50KCkge31cblxuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfSAqL1xuICBnZXRGb2N1c2VkRWxlbWVudEluZGV4KCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIGF0dHJpYnV0ZSwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlXG4gICAqL1xuICByZW1vdmVBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIGF0dHJpYnV0ZSkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGFkZENsYXNzRm9yRWxlbWVudEluZGV4KGluZGV4LCBjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleChpbmRleCwgY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIGxpc3QgaXRlbSBhdCB0aGUgaW5kZXggc3BlY2lmaWVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICovXG4gIGZvY3VzSXRlbUF0SW5kZXgoaW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRhYmluZGV4IHRvIHRoZSB2YWx1ZSBzcGVjaWZpZWQgZm9yIGFsbCBidXR0b24vYSBlbGVtZW50IGNoaWxkcmVuIG9mXG4gICAqIHRoZSBsaXN0IGl0ZW0gYXQgdGhlIGluZGV4IHNwZWNpZmllZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxpc3RJdGVtSW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRhYkluZGV4VmFsdWVcbiAgICovXG4gIHNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbihsaXN0SXRlbUluZGV4LCB0YWJJbmRleFZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgZ2l2ZW4gZWxlbWVudCBoYXMgYW4gaHJlZiwgZm9sbG93cyB0aGUgbGluay5cbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlXG4gICAqL1xuICBmb2xsb3dIcmVmKGVsZSkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiByYWRpbyBidXR0b24gaXMgcHJlc2VudCBhdCBnaXZlbiBsaXN0IGl0ZW0gaW5kZXguXG4gICAqL1xuICBoYXNSYWRpb0F0SW5kZXgoaW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgY2hlY2tib3ggaXMgcHJlc2VudCBhdCBnaXZlbiBsaXN0IGl0ZW0gaW5kZXguXG4gICAqL1xuICBoYXNDaGVja2JveEF0SW5kZXgoaW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgY2hlY2tib3ggaW5zaWRlIGEgbGlzdCBpdGVtIGlzIGNoZWNrZWQuXG4gICAqL1xuICBpc0NoZWNrYm94Q2hlY2tlZEF0SW5kZXgoaW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNoZWNrZWQgc3RhdHVzIG9mIGNoZWNrYm94IG9yIHJhZGlvIGF0IGdpdmVuIGxpc3QgaXRlbSBpbmRleC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNDaGVja2VkXG4gICAqL1xuICBzZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleChpbmRleCwgaXNDaGVja2VkKSB7fVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm5zIHRydWUgd2hlbiB0aGUgY3VycmVudCBmb2N1c2VkIGVsZW1lbnQgaXMgaW5zaWRlIGxpc3Qgcm9vdC5cbiAgICovXG4gIGlzRm9jdXNJbnNpZGVMaXN0KCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDTGlzdEFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICBST09UOiAnbWRjLWxpc3QnLFxuICBMSVNUX0lURU1fQ0xBU1M6ICdtZGMtbGlzdC1pdGVtJyxcbiAgTElTVF9JVEVNX1NFTEVDVEVEX0NMQVNTOiAnbWRjLWxpc3QtaXRlbS0tc2VsZWN0ZWQnLFxuICBMSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTOiAnbWRjLWxpc3QtaXRlbS0tYWN0aXZhdGVkJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQVJJQV9PUklFTlRBVElPTjogJ2FyaWEtb3JpZW50YXRpb24nLFxuICBBUklBX09SSUVOVEFUSU9OX0hPUklaT05UQUw6ICdob3Jpem9udGFsJyxcbiAgQVJJQV9TRUxFQ1RFRDogJ2FyaWEtc2VsZWN0ZWQnLFxuICBBUklBX0NIRUNLRUQ6ICdhcmlhLWNoZWNrZWQnLFxuICBBUklBX0NIRUNLRURfUkFESU9fU0VMRUNUT1I6ICdbcm9sZT1cInJhZGlvXCJdW2FyaWEtY2hlY2tlZD1cInRydWVcIl0nLFxuICBBUklBX1JPTEVfQ0hFQ0tCT1hfU0VMRUNUT1I6ICdbcm9sZT1cImNoZWNrYm94XCJdJyxcbiAgQVJJQV9DSEVDS0VEX0NIRUNLQk9YX1NFTEVDVE9SOiAnW3JvbGU9XCJjaGVja2JveFwiXVthcmlhLWNoZWNrZWQ9XCJ0cnVlXCJdJyxcbiAgUkFESU9fU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpkaXNhYmxlZCknLFxuICBDSEVDS0JPWF9TRUxFQ1RPUjogJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmRpc2FibGVkKScsXG4gIENIRUNLQk9YX1JBRElPX1NFTEVDVE9SOiAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6ZGlzYWJsZWQpLCBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpkaXNhYmxlZCknLFxuICBDSElMRF9FTEVNRU5UU19UT19UT0dHTEVfVEFCSU5ERVg6IGAuJHtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU30gYnV0dG9uOm5vdCg6ZGlzYWJsZWQpLFxuICAuJHtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU30gYWAsXG4gIEZPQ1VTQUJMRV9DSElMRF9FTEVNRU5UUzogYC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTfSBidXR0b246bm90KDpkaXNhYmxlZCksIC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTfSBhLFxuICAuJHtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU30gaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6ZGlzYWJsZWQpLFxuICAuJHtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU30gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6ZGlzYWJsZWQpYCxcbiAgRU5BQkxFRF9JVEVNU19TRUxFQ1RPUjogJy5tZGMtbGlzdC1pdGVtOm5vdCgubWRjLWxpc3QtaXRlbS0tZGlzYWJsZWQpJyxcbn07XG5cbi8qKiBAdHlwZWRlZiB7bnVtYmVyfCFBcnJheTxudW1iZXI+fSAqL1xubGV0IEluZGV4O1xuXG5leHBvcnQge3N0cmluZ3MsIGNzc0NsYXNzZXMsIEluZGV4fTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENMaXN0QWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtzdHJpbmdzLCBjc3NDbGFzc2VzLCBJbmRleH0gZnJvbSAnLi9jb25zdGFudHMnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbmNvbnN0IEVMRU1FTlRTX0tFWV9BTExPV0VEX0lOID0gWydpbnB1dCcsICdidXR0b24nLCAndGV4dGFyZWEnLCAnc2VsZWN0J107XG5cbmNsYXNzIE1EQ0xpc3RGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDTGlzdEFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuXG4gICAqIHR5cGVzLlxuICAgKiBAcmV0dXJuIHshTURDTGlzdEFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENMaXN0QWRhcHRlcn0gKi8gKHtcbiAgICAgIGdldExpc3RJdGVtQ291bnQ6ICgpID0+IHt9LFxuICAgICAgZ2V0Rm9jdXNlZEVsZW1lbnRJbmRleDogKCkgPT4ge30sXG4gICAgICBzZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXg6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQXR0cmlidXRlRm9yRWxlbWVudEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGFkZENsYXNzRm9yRWxlbWVudEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGZvY3VzSXRlbUF0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuOiAoKSA9PiB7fSxcbiAgICAgIGZvbGxvd0hyZWY6ICgpID0+IHt9LFxuICAgICAgaGFzUmFkaW9BdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGhhc0NoZWNrYm94QXRJbmRleDogKCkgPT4ge30sXG4gICAgICBpc0NoZWNrYm94Q2hlY2tlZEF0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgaXNGb2N1c0luc2lkZUxpc3Q6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ0xpc3RBZGFwdGVyPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDTGlzdEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy53cmFwRm9jdXNfID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5pc1ZlcnRpY2FsXyA9IHRydWU7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5pc1NpbmdsZVNlbGVjdGlvbkxpc3RfID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUgeyFJbmRleH0gKi9cbiAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gLTE7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID0gLTE7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51c2VBY3RpdmF0ZWRDbGFzc18gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzQ2hlY2tib3hMaXN0XyA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuaXNSYWRpb0xpc3RfID0gZmFsc2U7XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpID09PSAwKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNDaGVja2JveEF0SW5kZXgoMCkpIHtcbiAgICAgIHRoaXMuaXNDaGVja2JveExpc3RfID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWRhcHRlcl8uaGFzUmFkaW9BdEluZGV4KDApKSB7XG4gICAgICB0aGlzLmlzUmFkaW9MaXN0XyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHByaXZhdGUgd3JhcEZvY3VzXyB2YXJpYWJsZS5cbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgc2V0V3JhcEZvY3VzKHZhbHVlKSB7XG4gICAgdGhpcy53cmFwRm9jdXNfID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaXNWZXJ0aWNhbF8gcHJpdmF0ZSB2YXJpYWJsZS5cbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgc2V0VmVydGljYWxPcmllbnRhdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuaXNWZXJ0aWNhbF8gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpc1NpbmdsZVNlbGVjdGlvbkxpc3RfIHByaXZhdGUgdmFyaWFibGUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICovXG4gIHNldFNpbmdsZVNlbGVjdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuaXNTaW5nbGVTZWxlY3Rpb25MaXN0XyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHVzZUFjdGl2YXRlZENsYXNzXyBwcml2YXRlIHZhcmlhYmxlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZUFjdGl2YXRlZFxuICAgKi9cbiAgc2V0VXNlQWN0aXZhdGVkQ2xhc3ModXNlQWN0aXZhdGVkKSB7XG4gICAgdGhpcy51c2VBY3RpdmF0ZWRDbGFzc18gPSB1c2VBY3RpdmF0ZWQ7XG4gIH1cblxuICAvKiogQHJldHVybiB7IUluZGV4fSAqL1xuICBnZXRTZWxlY3RlZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSW5kZXhfO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7IUluZGV4fSBpbmRleCAqL1xuICBzZXRTZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLmlzSW5kZXhWYWxpZF8oaW5kZXgpKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5pc0NoZWNrYm94TGlzdF8pIHtcbiAgICAgIHRoaXMuc2V0Q2hlY2tib3hBdEluZGV4XygvKiogQHR5cGUgeyFBcnJheTxudW1iZXI+fSAqLyAoaW5kZXgpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNSYWRpb0xpc3RfKSB7XG4gICAgICB0aGlzLnNldFJhZGlvQXRJbmRleF8oLyoqIEB0eXBlIHtudW1iZXJ9ICovIChpbmRleCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFNpbmdsZVNlbGVjdGlvbkF0SW5kZXhfKC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoaW5kZXgpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9jdXMgaW4gaGFuZGxlciBmb3IgdGhlIGxpc3QgaXRlbXMuXG4gICAqIEBwYXJhbSBldnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxpc3RJdGVtSW5kZXhcbiAgICovXG4gIGhhbmRsZUZvY3VzSW4oZXZ0LCBsaXN0SXRlbUluZGV4KSB7XG4gICAgaWYgKGxpc3RJdGVtSW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW4obGlzdEl0ZW1JbmRleCwgMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzIG91dCBoYW5kbGVyIGZvciB0aGUgbGlzdCBpdGVtcy5cbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaXN0SXRlbUluZGV4XG4gICAqL1xuICBoYW5kbGVGb2N1c091dChldnQsIGxpc3RJdGVtSW5kZXgpIHtcbiAgICBpZiAobGlzdEl0ZW1JbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbihsaXN0SXRlbUluZGV4LCAtMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmV0d2VlbiBGb2N1c291dCAmIEZvY3VzaW4gc29tZSBicm93c2VycyBkbyBub3QgaGF2ZSBmb2N1cyBvbiBhbnkgZWxlbWVudC4gU2V0dGluZyBhIGRlbGF5IHRvIHdhaXQgdGlsbCB0aGUgZm9jdXNcbiAgICAgKiBpcyBtb3ZlZCB0byBuZXh0IGVsZW1lbnQuXG4gICAgICovXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaXNGb2N1c0luc2lkZUxpc3QoKSkge1xuICAgICAgICB0aGlzLnNldFRhYmluZGV4VG9GaXJzdFNlbGVjdGVkSXRlbV8oKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBLZXkgaGFuZGxlciBmb3IgdGhlIGxpc3QuXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzUm9vdExpc3RJdGVtXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaXN0SXRlbUluZGV4XG4gICAqL1xuICBoYW5kbGVLZXlkb3duKGV2dCwgaXNSb290TGlzdEl0ZW0sIGxpc3RJdGVtSW5kZXgpIHtcbiAgICBjb25zdCBhcnJvd0xlZnQgPSBldnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBldnQua2V5Q29kZSA9PT0gMzc7XG4gICAgY29uc3QgYXJyb3dVcCA9IGV2dC5rZXkgPT09ICdBcnJvd1VwJyB8fCBldnQua2V5Q29kZSA9PT0gMzg7XG4gICAgY29uc3QgYXJyb3dSaWdodCA9IGV2dC5rZXkgPT09ICdBcnJvd1JpZ2h0JyB8fCBldnQua2V5Q29kZSA9PT0gMzk7XG4gICAgY29uc3QgYXJyb3dEb3duID0gZXZ0LmtleSA9PT0gJ0Fycm93RG93bicgfHwgZXZ0LmtleUNvZGUgPT09IDQwO1xuICAgIGNvbnN0IGlzSG9tZSA9IGV2dC5rZXkgPT09ICdIb21lJyB8fCBldnQua2V5Q29kZSA9PT0gMzY7XG4gICAgY29uc3QgaXNFbmQgPSBldnQua2V5ID09PSAnRW5kJyB8fCBldnQua2V5Q29kZSA9PT0gMzU7XG4gICAgY29uc3QgaXNFbnRlciA9IGV2dC5rZXkgPT09ICdFbnRlcicgfHwgZXZ0LmtleUNvZGUgPT09IDEzO1xuICAgIGNvbnN0IGlzU3BhY2UgPSBldnQua2V5ID09PSAnU3BhY2UnIHx8IGV2dC5rZXlDb2RlID09PSAzMjtcblxuICAgIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldEZvY3VzZWRFbGVtZW50SW5kZXgoKTtcbiAgICBsZXQgbmV4dEluZGV4ID0gLTE7XG4gICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcbiAgICAgIGN1cnJlbnRJbmRleCA9IGxpc3RJdGVtSW5kZXg7XG4gICAgICBpZiAoY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgICAvLyBJZiB0aGlzIGV2ZW50IGRvZXNuJ3QgaGF2ZSBhIG1kYy1saXN0LWl0ZW0gYW5jZXN0b3IgZnJvbSB0aGVcbiAgICAgICAgLy8gY3VycmVudCBsaXN0IChub3QgZnJvbSBhIHN1Ymxpc3QpLCByZXR1cm4gZWFybHkuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoKHRoaXMuaXNWZXJ0aWNhbF8gJiYgYXJyb3dEb3duKSB8fCAoIXRoaXMuaXNWZXJ0aWNhbF8gJiYgYXJyb3dSaWdodCkpIHtcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgIG5leHRJbmRleCA9IHRoaXMuZm9jdXNOZXh0RWxlbWVudChjdXJyZW50SW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoKHRoaXMuaXNWZXJ0aWNhbF8gJiYgYXJyb3dVcCkgfHwgKCF0aGlzLmlzVmVydGljYWxfICYmIGFycm93TGVmdCkpIHtcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgIG5leHRJbmRleCA9IHRoaXMuZm9jdXNQcmV2RWxlbWVudChjdXJyZW50SW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoaXNIb21lKSB7XG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICBuZXh0SW5kZXggPSB0aGlzLmZvY3VzRmlyc3RFbGVtZW50KCk7XG4gICAgfSBlbHNlIGlmIChpc0VuZCkge1xuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgbmV4dEluZGV4ID0gdGhpcy5mb2N1c0xhc3RFbGVtZW50KCk7XG4gICAgfSBlbHNlIGlmIChpc0VudGVyIHx8IGlzU3BhY2UpIHtcbiAgICAgIGlmIChpc1Jvb3RMaXN0SXRlbSkge1xuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGFibGVMaXN0XygpKSB7XG4gICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4T25BY3Rpb25fKGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXhwbGljaXRseSBhY3RpdmF0ZSBsaW5rcywgc2luY2Ugd2UncmUgcHJldmVudGluZyBkZWZhdWx0IG9uIEVudGVyLCBhbmQgU3BhY2UgZG9lc24ndCBhY3RpdmF0ZSB0aGVtLlxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvbGxvd0hyZWYoY3VycmVudEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID0gY3VycmVudEluZGV4O1xuXG4gICAgaWYgKG5leHRJbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLnNldFRhYmluZGV4QXRJbmRleF8obmV4dEluZGV4KTtcbiAgICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPSBuZXh0SW5kZXg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsaWNrIGhhbmRsZXIgZm9yIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtib29sZWFufSB0b2dnbGVDaGVja2JveFxuICAgKi9cbiAgaGFuZGxlQ2xpY2soaW5kZXgsIHRvZ2dsZUNoZWNrYm94KSB7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuaXNTZWxlY3RhYmxlTGlzdF8oKSkge1xuICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4T25BY3Rpb25fKGluZGV4LCB0b2dnbGVDaGVja2JveCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRUYWJpbmRleEF0SW5kZXhfKGluZGV4KTtcbiAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID0gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlcyB0aGF0IHByZXZlbnREZWZhdWx0IGlzIG9ubHkgY2FsbGVkIGlmIHRoZSBjb250YWluaW5nIGVsZW1lbnQgZG9lc24ndFxuICAgKiBjb25zdW1lIHRoZSBldmVudCwgYW5kIGl0IHdpbGwgY2F1c2UgYW4gdW5pbnRlbmRlZCBzY3JvbGwuXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJldmVudERlZmF1bHRFdmVudF8oZXZ0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IGAke2V2dC50YXJnZXQudGFnTmFtZX1gLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKEVMRU1FTlRTX0tFWV9BTExPV0VEX0lOLmluZGV4T2YodGFnTmFtZSkgPT09IC0xKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgbmV4dCBlbGVtZW50IG9uIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZm9jdXNOZXh0RWxlbWVudChpbmRleCkge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCk7XG4gICAgbGV0IG5leHRJbmRleCA9IGluZGV4ICsgMTtcbiAgICBpZiAobmV4dEluZGV4ID49IGNvdW50KSB7XG4gICAgICBpZiAodGhpcy53cmFwRm9jdXNfKSB7XG4gICAgICAgIG5leHRJbmRleCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gZWFybHkgYmVjYXVzZSBsYXN0IGl0ZW0gaXMgYWxyZWFkeSBmb2N1c2VkLlxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleChuZXh0SW5kZXgpO1xuXG4gICAgcmV0dXJuIG5leHRJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIHRoZSBwcmV2aW91cyBlbGVtZW50IG9uIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZm9jdXNQcmV2RWxlbWVudChpbmRleCkge1xuICAgIGxldCBwcmV2SW5kZXggPSBpbmRleCAtIDE7XG4gICAgaWYgKHByZXZJbmRleCA8IDApIHtcbiAgICAgIGlmICh0aGlzLndyYXBGb2N1c18pIHtcbiAgICAgICAgcHJldkluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCkgLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGJlY2F1c2UgZmlyc3QgaXRlbSBpcyBhbHJlYWR5IGZvY3VzZWQuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KHByZXZJbmRleCk7XG5cbiAgICByZXR1cm4gcHJldkluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGZvY3VzRmlyc3RFbGVtZW50KCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleCgwKTtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBmb2N1c0xhc3RFbGVtZW50KCkge1xuICAgIGNvbnN0IGxhc3RJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpIC0gMTtcbiAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgobGFzdEluZGV4KTtcbiAgICByZXR1cm4gbGFzdEluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0U2luZ2xlU2VsZWN0aW9uQXRJbmRleF8oaW5kZXgpIHtcbiAgICBsZXQgc2VsZWN0ZWRDbGFzc05hbWUgPSBjc3NDbGFzc2VzLkxJU1RfSVRFTV9TRUxFQ1RFRF9DTEFTUztcbiAgICBpZiAodGhpcy51c2VBY3RpdmF0ZWRDbGFzc18pIHtcbiAgICAgIHNlbGVjdGVkQ2xhc3NOYW1lID0gY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhfID49IDAgJiYgdGhpcy5zZWxlY3RlZEluZGV4XyAhPT0gaW5kZXgpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3NGb3JFbGVtZW50SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4Xywgc2VsZWN0ZWRDbGFzc05hbWUpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4Xywgc3RyaW5ncy5BUklBX1NFTEVDVEVELCAnZmFsc2UnKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzRm9yRWxlbWVudEluZGV4KGluZGV4LCBzZWxlY3RlZENsYXNzTmFtZSk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9TRUxFQ1RFRCwgJ3RydWUnKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8gPSBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHJhZGlvIGF0IGdpdmUgaW5kZXguIFJhZGlvIGRvZXNuJ3QgY2hhbmdlIHRoZSBjaGVja2VkIHN0YXRlIGlmIGl0IGlzIGFscmVhZHkgY2hlY2tlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRSYWRpb0F0SW5kZXhfKGluZGV4KSB7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleChpbmRleCwgdHJ1ZSk7XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4XyA+PSAwKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXhfLCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgJ2ZhbHNlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9DSEVDS0VELCAndHJ1ZScpO1xuXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUFycmF5PG51bWJlcj59IGluZGV4XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRDaGVja2JveEF0SW5kZXhfKGluZGV4KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKTsgaSsrKSB7XG4gICAgICBsZXQgaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICBpZiAoaW5kZXguaW5kZXhPZihpKSA+PSAwKSB7XG4gICAgICAgIGlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXgoaSwgaXNDaGVja2VkKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGksIHN0cmluZ3MuQVJJQV9DSEVDS0VELCBpc0NoZWNrZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRUYWJpbmRleEF0SW5kZXhfKGluZGV4KSB7XG4gICAgaWYgKHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPT09IC0xICYmIGluZGV4ICE9PSAwKSB7XG4gICAgICAvLyBJZiBubyBsaXN0IGl0ZW0gd2FzIHNlbGVjdGVkIHNldCBmaXJzdCBsaXN0IGl0ZW0ncyB0YWJpbmRleCB0byAtMS5cbiAgICAgIC8vIEdlbmVyYWxseSwgdGFiaW5kZXggaXMgc2V0IHRvIDAgb24gZmlyc3QgbGlzdCBpdGVtIG9mIGxpc3QgdGhhdCBoYXMgbm8gcHJlc2VsZWN0ZWQgaXRlbXMuXG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCgwLCAndGFiaW5kZXgnLCAtMSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID49IDAgJiYgdGhpcy5mb2N1c2VkSXRlbUluZGV4XyAhPT0gaW5kZXgpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8sICd0YWJpbmRleCcsIC0xKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgJ3RhYmluZGV4JywgMCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJuIHRydWUgaWYgaXQgaXMgc2luZ2xlIHNlbGVjdGluIGxpc3QsIGNoZWNrYm94IGxpc3Qgb3IgcmFkaW8gbGlzdC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzU2VsZWN0YWJsZUxpc3RfKCkge1xuICAgIHJldHVybiB0aGlzLmlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gfHwgdGhpcy5pc0NoZWNrYm94TGlzdF8gfHwgdGhpcy5pc1JhZGlvTGlzdF87XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgc2V0VGFiaW5kZXhUb0ZpcnN0U2VsZWN0ZWRJdGVtXygpIHtcbiAgICBsZXQgdGFyZ2V0SW5kZXggPSAwO1xuXG4gICAgaWYgKHRoaXMuaXNTZWxlY3RhYmxlTGlzdF8oKSkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGVkSW5kZXhfID09PSAnbnVtYmVyJyAmJiB0aGlzLnNlbGVjdGVkSW5kZXhfICE9PSAtMSkge1xuICAgICAgICB0YXJnZXRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleF87XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gaW5zdGFuY2VvZiBBcnJheSAmJiB0aGlzLnNlbGVjdGVkSW5kZXhfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGFyZ2V0SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXhfLnJlZHVjZSgoY3VycmVudEluZGV4LCBtaW5JbmRleCkgPT4gTWF0aC5taW4oY3VycmVudEluZGV4LCBtaW5JbmRleCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0VGFiaW5kZXhBdEluZGV4Xyh0YXJnZXRJbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshSW5kZXh9IGluZGV4XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc0luZGV4VmFsaWRfKGluZGV4KSB7XG4gICAgaWYgKGluZGV4IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGlmICghdGhpcy5pc0NoZWNrYm94TGlzdF8pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNRENMaXN0Rm91bmRhdGlvbjogQXJyYXkgb2YgaW5kZXggaXMgb25seSBzdXBwb3J0ZWQgZm9yIGNoZWNrYm94IGJhc2VkIGxpc3QnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbmRleC5zb21lKChpKSA9PiB0aGlzLmlzSW5kZXhJblJhbmdlXyhpKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAodGhpcy5pc0NoZWNrYm94TGlzdF8pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNRENMaXN0Rm91bmRhdGlvbjogRXhwZWN0ZWQgYXJyYXkgb2YgaW5kZXggZm9yIGNoZWNrYm94IGJhc2VkIGxpc3QgYnV0IGdvdCBudW1iZXI6ICcgKyBpbmRleCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5pc0luZGV4SW5SYW5nZV8oaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNJbmRleEluUmFuZ2VfKGluZGV4KSB7XG4gICAgY29uc3QgbGlzdFNpemUgPSB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKTtcbiAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IGxpc3RTaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSB0b2dnbGVDaGVja2JveFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0U2VsZWN0ZWRJbmRleE9uQWN0aW9uXyhpbmRleCwgdG9nZ2xlQ2hlY2tib3ggPSB0cnVlKSB7XG4gICAgaWYgKHRoaXMuaXNDaGVja2JveExpc3RfKSB7XG4gICAgICB0aGlzLnRvZ2dsZUNoZWNrYm94QXRJbmRleF8oaW5kZXgsIHRvZ2dsZUNoZWNrYm94KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdG9nZ2xlQ2hlY2tib3hcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRvZ2dsZUNoZWNrYm94QXRJbmRleF8oaW5kZXgsIHRvZ2dsZUNoZWNrYm94KSB7XG4gICAgbGV0IGlzQ2hlY2tlZCA9IHRoaXMuYWRhcHRlcl8uaXNDaGVja2JveENoZWNrZWRBdEluZGV4KGluZGV4KTtcblxuICAgIGlmICh0b2dnbGVDaGVja2JveCkge1xuICAgICAgaXNDaGVja2VkID0gIWlzQ2hlY2tlZDtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXgoaW5kZXgsIGlzQ2hlY2tlZCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9DSEVDS0VELCBpc0NoZWNrZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcblxuICAgIC8vIElmIG5vbmUgb2YgdGhlIGNoZWNrYm94IGl0ZW1zIGFyZSBzZWxlY3RlZCBhbmQgc2VsZWN0ZWRJbmRleCBpcyBub3QgaW5pdGlhbGl6ZWQgdGhlbiBwcm92aWRlIGEgZGVmYXVsdCB2YWx1ZS5cbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4XyA9PT0gLTEpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8gPSBbXTtcbiAgICB9XG5cbiAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXhfLnB1c2goaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gdGhpcy5zZWxlY3RlZEluZGV4Xy5maWx0ZXIoKGkpID0+IGkgIT09IGluZGV4KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDTGlzdEZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEEgXCJwb255ZmlsbFwiIGlzIGEgcG9seWZpbGwgdGhhdCBkb2Vzbid0IG1vZGlmeSB0aGUgZ2xvYmFsIHByb3RvdHlwZSBjaGFpbi5cbiAqIFRoaXMgbWFrZXMgcG9ueWZpbGxzIHNhZmVyIHRoYW4gdHJhZGl0aW9uYWwgcG9seWZpbGxzLCBlc3BlY2lhbGx5IGZvciBsaWJyYXJpZXMgbGlrZSBNREMuXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4gez9FbGVtZW50fVxuICovXG5mdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIGlmIChlbGVtZW50LmNsb3Nlc3QpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgfVxuXG4gIGxldCBlbCA9IGVsZW1lbnQ7XG4gIHdoaWxlIChlbCkge1xuICAgIGlmIChtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbWF0Y2hlcyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICBjb25zdCBuYXRpdmVNYXRjaGVzID0gZWxlbWVudC5tYXRjaGVzXG4gICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICB8fCBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cblxuZXhwb3J0IHtjbG9zZXN0LCBtYXRjaGVzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgTURDTGlzdEZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENMaXN0QWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHttYXRjaGVzfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgSW5kZXh9IGZyb20gJy4vY29uc3RhbnRzJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG4vKipcbiAqIEBleHRlbmRzIE1EQ0NvbXBvbmVudDwhTURDTGlzdEZvdW5kYXRpb24+XG4gKi9cbmNsYXNzIE1EQ0xpc3QgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKiogQHBhcmFtIHsuLi4/fSBhcmdzICovXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLmhhbmRsZUtleWRvd25fO1xuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuaGFuZGxlQ2xpY2tfO1xuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuZm9jdXNJbkV2ZW50TGlzdGVuZXJfO1xuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuZm9jdXNPdXRFdmVudExpc3RlbmVyXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENMaXN0fVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICByZXR1cm4gbmV3IE1EQ0xpc3Qocm9vdCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bl8pO1xuICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrXyk7XG4gICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5mb2N1c0luRXZlbnRMaXN0ZW5lcl8pO1xuICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB0aGlzLmZvY3VzT3V0RXZlbnRMaXN0ZW5lcl8pO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMuaGFuZGxlQ2xpY2tfID0gdGhpcy5oYW5kbGVDbGlja0V2ZW50Xy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlS2V5ZG93bl8gPSB0aGlzLmhhbmRsZUtleWRvd25FdmVudF8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmZvY3VzSW5FdmVudExpc3RlbmVyXyA9IHRoaXMuaGFuZGxlRm9jdXNJbkV2ZW50Xy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm9jdXNPdXRFdmVudExpc3RlbmVyXyA9IHRoaXMuaGFuZGxlRm9jdXNPdXRFdmVudF8uYmluZCh0aGlzKTtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25fKTtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmZvY3VzSW5FdmVudExpc3RlbmVyXyk7XG4gICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMuZm9jdXNPdXRFdmVudExpc3RlbmVyXyk7XG4gICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2tfKTtcbiAgICB0aGlzLmxheW91dCgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUxpc3RUeXBlKCk7XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5yb290Xy5nZXRBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX09SSUVOVEFUSU9OKTtcbiAgICB0aGlzLnZlcnRpY2FsID0gZGlyZWN0aW9uICE9PSBzdHJpbmdzLkFSSUFfT1JJRU5UQVRJT05fSE9SSVpPTlRBTDtcblxuICAgIC8vIExpc3QgaXRlbXMgbmVlZCB0byBoYXZlIGF0IGxlYXN0IHRhYmluZGV4PS0xIHRvIGJlIGZvY3VzYWJsZS5cbiAgICBbXS5zbGljZS5jYWxsKHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbCgnLm1kYy1saXN0LWl0ZW06bm90KFt0YWJpbmRleF0pJykpXG4gICAgICAuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpO1xuICAgICAgfSk7XG5cbiAgICAvLyBDaGlsZCBidXR0b24vYSBlbGVtZW50cyBhcmUgbm90IHRhYmJhYmxlIHVudGlsIHRoZSBsaXN0IGl0ZW0gaXMgZm9jdXNlZC5cbiAgICBbXS5zbGljZS5jYWxsKHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkZPQ1VTQUJMRV9DSElMRF9FTEVNRU5UUykpXG4gICAgICAuZm9yRWFjaCgoZWxlKSA9PiBlbGUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIC0xKSk7XG5cbiAgICB0aGlzLmZvdW5kYXRpb25fLmxheW91dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZmlndXJlIG91dCB3aGljaCBsaXN0IGl0ZW0gdGhpcyBldmVudCBpcyB0YXJnZXR0aW5nLiBPciByZXR1cm5zIC0xIGlmXG4gICAqIHRoZXJlIGlzIG5vIGxpc3QgaXRlbVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldExpc3RJdGVtSW5kZXhfKGV2dCkge1xuICAgIGxldCBldmVudFRhcmdldCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovIChldnQudGFyZ2V0KTtcbiAgICBsZXQgaW5kZXggPSAtMTtcblxuICAgIC8vIEZpbmQgdGhlIGZpcnN0IGFuY2VzdG9yIHRoYXQgaXMgYSBsaXN0IGl0ZW0gb3IgdGhlIGxpc3QuXG4gICAgd2hpbGUgKCFldmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MpXG4gICAgJiYgIWV2ZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLlJPT1QpKSB7XG4gICAgICBldmVudFRhcmdldCA9IGV2ZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBpbmRleCBvZiB0aGUgZWxlbWVudCBpZiBpdCBpcyBhIGxpc3QgaXRlbS5cbiAgICBpZiAoZXZlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTKSkge1xuICAgICAgaW5kZXggPSB0aGlzLmxpc3RFbGVtZW50cy5pbmRleE9mKGV2ZW50VGFyZ2V0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBmaWd1cmUgb3V0IHdoaWNoIGVsZW1lbnQgd2FzIGNsaWNrZWQgYmVmb3JlIHNlbmRpbmcgdGhlIGV2ZW50IHRvIHRoZSBmb3VuZGF0aW9uLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhbmRsZUZvY3VzSW5FdmVudF8oZXZ0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldExpc3RJdGVtSW5kZXhfKGV2dCk7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVGb2N1c0luKGV2dCwgaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZmlndXJlIG91dCB3aGljaCBlbGVtZW50IHdhcyBjbGlja2VkIGJlZm9yZSBzZW5kaW5nIHRoZSBldmVudCB0byB0aGUgZm91bmRhdGlvbi5cbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoYW5kbGVGb2N1c091dEV2ZW50XyhldnQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0TGlzdEl0ZW1JbmRleF8oZXZ0KTtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZUZvY3VzT3V0KGV2dCwgaW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZmlndXJlIG91dCB3aGljaCBlbGVtZW50IHdhcyBmb2N1c2VkIHdoZW4ga2V5ZG93biBldmVudCBvY2N1cnJlZCBiZWZvcmUgc2VuZGluZyB0aGUgZXZlbnQgdG8gdGhlXG4gICAqIGZvdW5kYXRpb24uXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlS2V5ZG93bkV2ZW50XyhldnQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0TGlzdEl0ZW1JbmRleF8oZXZ0KTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZUtleWRvd24oZXZ0LCBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUyksIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBmaWd1cmUgb3V0IHdoaWNoIGVsZW1lbnQgd2FzIGNsaWNrZWQgYmVmb3JlIHNlbmRpbmcgdGhlIGV2ZW50IHRvIHRoZSBmb3VuZGF0aW9uLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhbmRsZUNsaWNrRXZlbnRfKGV2dCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRMaXN0SXRlbUluZGV4XyhldnQpO1xuXG4gICAgLy8gVG9nZ2xlIHRoZSBjaGVja2JveCBvbmx5IGlmIGl0J3Mgbm90IHRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50LCBvciB0aGUgY2hlY2tib3ggd2lsbCBoYXZlIDIgY2hhbmdlIGV2ZW50cy5cbiAgICBjb25zdCB0b2dnbGVDaGVja2JveCA9ICFtYXRjaGVzKC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovIChldnQudGFyZ2V0KSwgc3RyaW5ncy5DSEVDS0JPWF9SQURJT19TRUxFQ1RPUik7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVDbGljayhpbmRleCwgdG9nZ2xlQ2hlY2tib3gpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgc2VsZWN0ZWRJbmRleCB2YWx1ZSBiYXNlZCBvbiBwcmUtc2VsZWN0ZWQgY2hlY2tib3ggbGlzdCBpdGVtcywgc2luZ2xlIHNlbGVjdGlvbiBvciByYWRpby5cbiAgICovXG4gIGluaXRpYWxpemVMaXN0VHlwZSgpIHtcbiAgICBjb25zdCBjaGVja2JveExpc3RJdGVtcyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkFSSUFfUk9MRV9DSEVDS0JPWF9TRUxFQ1RPUik7XG4gICAgY29uc3Qgc2luZ2xlU2VsZWN0ZWRMaXN0SXRlbSA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihgLiR7Y3NzQ2xhc3Nlcy5MSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTfSxcbiAgICAgICAgLiR7Y3NzQ2xhc3Nlcy5MSVNUX0lURU1fU0VMRUNURURfQ0xBU1N9YCk7XG4gICAgY29uc3QgcmFkaW9TZWxlY3RlZExpc3RJdGVtID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuQVJJQV9DSEVDS0VEX1JBRElPX1NFTEVDVE9SKTtcblxuICAgIGlmIChjaGVja2JveExpc3RJdGVtcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHByZXNlbGVjdGVkSXRlbXMgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5BUklBX0NIRUNLRURfQ0hFQ0tCT1hfU0VMRUNUT1IpO1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gW10ubWFwLmNhbGwocHJlc2VsZWN0ZWRJdGVtcywgKGxpc3RJdGVtKSA9PiB0aGlzLmxpc3RFbGVtZW50cy5pbmRleE9mKGxpc3RJdGVtKSk7XG4gICAgfSBlbHNlIGlmIChzaW5nbGVTZWxlY3RlZExpc3RJdGVtKSB7XG4gICAgICBpZiAoc2luZ2xlU2VsZWN0ZWRMaXN0SXRlbS5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTKSkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFVzZUFjdGl2YXRlZENsYXNzKHRydWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNpbmdsZVNlbGVjdGlvbiA9IHRydWU7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmxpc3RFbGVtZW50cy5pbmRleE9mKHNpbmdsZVNlbGVjdGVkTGlzdEl0ZW0pO1xuICAgIH0gZWxzZSBpZiAocmFkaW9TZWxlY3RlZExpc3RJdGVtKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmxpc3RFbGVtZW50cy5pbmRleE9mKHJhZGlvU2VsZWN0ZWRMaXN0SXRlbSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgKi9cbiAgc2V0IHZlcnRpY2FsKHZhbHVlKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRWZXJ0aWNhbE9yaWVudGF0aW9uKHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIEFycmF5PCFFbGVtZW50PiovXG4gIGdldCBsaXN0RWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuRU5BQkxFRF9JVEVNU19TRUxFQ1RPUikpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgKi9cbiAgc2V0IHdyYXBGb2N1cyh2YWx1ZSkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0V3JhcEZvY3VzKHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2luZ2xlU2VsZWN0aW9uTGlzdCAqL1xuICBzZXQgc2luZ2xlU2VsZWN0aW9uKGlzU2luZ2xlU2VsZWN0aW9uTGlzdCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0U2luZ2xlU2VsZWN0aW9uKGlzU2luZ2xlU2VsZWN0aW9uTGlzdCk7XG4gIH1cblxuICAvKiogQHJldHVybiB7IUluZGV4fSAqL1xuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXy5nZXRTZWxlY3RlZEluZGV4KCk7XG4gIH1cblxuICAvKiogQHBhcmFtIHshSW5kZXh9IGluZGV4ICovXG4gIHNldCBzZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshTURDTGlzdEZvdW5kYXRpb259ICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDTGlzdEZvdW5kYXRpb24oLyoqIEB0eXBlIHshTURDTGlzdEFkYXB0ZXJ9ICovIChPYmplY3QuYXNzaWduKHtcbiAgICAgIGdldExpc3RJdGVtQ291bnQ6ICgpID0+IHRoaXMubGlzdEVsZW1lbnRzLmxlbmd0aCxcbiAgICAgIGdldEZvY3VzZWRFbGVtZW50SW5kZXg6ICgpID0+IHRoaXMubGlzdEVsZW1lbnRzLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCksXG4gICAgICBzZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXg6IChpbmRleCwgYXR0ciwgdmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZW1vdmVBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXg6IChpbmRleCwgYXR0cikgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYWRkQ2xhc3NGb3JFbGVtZW50SW5kZXg6IChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleDogKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZvY3VzSXRlbUF0SW5kZXg6IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbjogKGxpc3RJdGVtSW5kZXgsIHRhYkluZGV4VmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2xpc3RJdGVtSW5kZXhdO1xuICAgICAgICBjb25zdCBsaXN0SXRlbUNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5DSElMRF9FTEVNRU5UU19UT19UT0dHTEVfVEFCSU5ERVgpKTtcbiAgICAgICAgbGlzdEl0ZW1DaGlsZHJlbi5mb3JFYWNoKChlbGUpID0+IGVsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdGFiSW5kZXhWYWx1ZSkpO1xuICAgICAgfSxcbiAgICAgIGZvbGxvd0hyZWY6IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKGxpc3RJdGVtICYmIGxpc3RJdGVtLmhyZWYpIHtcbiAgICAgICAgICBsaXN0SXRlbS5jbGljaygpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaGFzQ2hlY2tib3hBdEluZGV4OiAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSB0aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgIHJldHVybiAhIWxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5DSEVDS0JPWF9TRUxFQ1RPUik7XG4gICAgICB9LFxuICAgICAgaGFzUmFkaW9BdEluZGV4OiAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSB0aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgIHJldHVybiAhIWxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5SQURJT19TRUxFQ1RPUik7XG4gICAgICB9LFxuICAgICAgaXNDaGVja2JveENoZWNrZWRBdEluZGV4OiAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSB0aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgIGNvbnN0IHRvZ2dsZUVsID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcihzdHJpbmdzLkNIRUNLQk9YX1NFTEVDVE9SKTtcbiAgICAgICAgcmV0dXJuIHRvZ2dsZUVsLmNoZWNrZWQ7XG4gICAgICB9LFxuICAgICAgc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXg6IChpbmRleCwgaXNDaGVja2VkKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICBjb25zdCB0b2dnbGVFbCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5DSEVDS0JPWF9SQURJT19TRUxFQ1RPUik7XG4gICAgICAgIHRvZ2dsZUVsLmNoZWNrZWQgPSBpc0NoZWNrZWQ7XG5cbiAgICAgICAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgICAgZXZlbnQuaW5pdEV2ZW50KCdjaGFuZ2UnLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgdG9nZ2xlRWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICB9LFxuICAgICAgaXNGb2N1c0luc2lkZUxpc3Q6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdF8uY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICB9LFxuICAgIH0pKSk7XG4gIH1cbn1cblxuZXhwb3J0IHtNRENMaXN0LCBNRENMaXN0Rm91bmRhdGlvbn07XG4iLCJ2YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gW1xuICAnaW5wdXQnLFxuICAnc2VsZWN0JyxcbiAgJ3RleHRhcmVhJyxcbiAgJ2FbaHJlZl0nLFxuICAnYnV0dG9uJyxcbiAgJ1t0YWJpbmRleF0nLFxuICAnYXVkaW9bY29udHJvbHNdJyxcbiAgJ3ZpZGVvW2NvbnRyb2xzXScsXG4gICdbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCJdKScsXG5dO1xudmFyIGNhbmRpZGF0ZVNlbGVjdG9yID0gY2FuZGlkYXRlU2VsZWN0b3JzLmpvaW4oJywnKTtcblxudmFyIG1hdGNoZXMgPSB0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCdcbiAgPyBmdW5jdGlvbiAoKSB7fVxuICA6IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXG5mdW5jdGlvbiB0YWJiYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgZWxlbWVudERvY3VtZW50ID0gZWwub3duZXJEb2N1bWVudCB8fCBlbDtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcblxuICB2YXIgdW50b3VjaGFiaWxpdHlDaGVja2VyID0gbmV3IFVudG91Y2hhYmlsaXR5Q2hlY2tlcihlbGVtZW50RG9jdW1lbnQpO1xuICB2YXIgY2FuZGlkYXRlcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2FuZGlkYXRlU2VsZWN0b3IpO1xuXG4gIGlmIChvcHRpb25zLmluY2x1ZGVDb250YWluZXIpIHtcbiAgICBpZiAobWF0Y2hlcy5jYWxsKGVsLCBjYW5kaWRhdGVTZWxlY3RvcikpIHtcbiAgICAgIGNhbmRpZGF0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoY2FuZGlkYXRlcyk7XG4gICAgICBjYW5kaWRhdGVzLnVuc2hpZnQoZWwpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpLCBjYW5kaWRhdGUsIGNhbmRpZGF0ZVRhYmluZGV4O1xuICBmb3IgKGkgPSAwOyBpIDwgY2FuZGlkYXRlcy5sZW5ndGg7IGkrKykge1xuICAgIGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZXNbaV07XG5cbiAgICBpZiAoIWlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShjYW5kaWRhdGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcikpIGNvbnRpbnVlO1xuXG4gICAgY2FuZGlkYXRlVGFiaW5kZXggPSBnZXRUYWJpbmRleChjYW5kaWRhdGUpO1xuICAgIGlmIChjYW5kaWRhdGVUYWJpbmRleCA9PT0gMCkge1xuICAgICAgcmVndWxhclRhYmJhYmxlcy5wdXNoKGNhbmRpZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yZGVyZWRUYWJiYWJsZXMucHVzaCh7XG4gICAgICAgIGRvY3VtZW50T3JkZXI6IGksXG4gICAgICAgIHRhYkluZGV4OiBjYW5kaWRhdGVUYWJpbmRleCxcbiAgICAgICAgbm9kZTogY2FuZGlkYXRlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHRhYmJhYmxlTm9kZXMgPSBvcmRlcmVkVGFiYmFibGVzXG4gICAgLnNvcnQoc29ydE9yZGVyZWRUYWJiYWJsZXMpXG4gICAgLm1hcChmdW5jdGlvbihhKSB7IHJldHVybiBhLm5vZGUgfSlcbiAgICAuY29uY2F0KHJlZ3VsYXJUYWJiYWJsZXMpO1xuXG4gIHJldHVybiB0YWJiYWJsZU5vZGVzO1xufVxuXG50YWJiYWJsZS5pc1RhYmJhYmxlID0gaXNUYWJiYWJsZTtcbnRhYmJhYmxlLmlzRm9jdXNhYmxlID0gaXNGb2N1c2FibGU7XG5cbmZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpIHtcbiAgaWYgKFxuICAgICFpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcilcbiAgICB8fCBpc05vblRhYmJhYmxlUmFkaW8obm9kZSlcbiAgICB8fCBnZXRUYWJpbmRleChub2RlKSA8IDBcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc1RhYmJhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcikge1xuICBpZiAoIW5vZGUpIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpO1xufVxuXG5mdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcikge1xuICB1bnRvdWNoYWJpbGl0eUNoZWNrZXIgPSB1bnRvdWNoYWJpbGl0eUNoZWNrZXIgfHwgbmV3IFVudG91Y2hhYmlsaXR5Q2hlY2tlcihub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZSk7XG4gIGlmIChcbiAgICBub2RlLmRpc2FibGVkXG4gICAgfHwgaXNIaWRkZW5JbnB1dChub2RlKVxuICAgIHx8IHVudG91Y2hhYmlsaXR5Q2hlY2tlci5pc1VudG91Y2hhYmxlKG5vZGUpXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxudmFyIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yID0gY2FuZGlkYXRlU2VsZWN0b3JzLmNvbmNhdCgnaWZyYW1lJykuam9pbignLCcpO1xuZnVuY3Rpb24gaXNGb2N1c2FibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKSB7XG4gIGlmICghbm9kZSkgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpO1xufVxuXG5mdW5jdGlvbiBnZXRUYWJpbmRleChub2RlKSB7XG4gIHZhciB0YWJpbmRleEF0dHIgPSBwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSwgMTApO1xuICBpZiAoIWlzTmFOKHRhYmluZGV4QXR0cikpIHJldHVybiB0YWJpbmRleEF0dHI7XG4gIC8vIEJyb3dzZXJzIGRvIG5vdCByZXR1cm4gYHRhYkluZGV4YCBjb3JyZWN0bHkgZm9yIGNvbnRlbnRFZGl0YWJsZSBub2RlcztcbiAgLy8gc28gaWYgdGhleSBkb24ndCBoYXZlIGEgdGFiaW5kZXggYXR0cmlidXRlIHNwZWNpZmljYWxseSBzZXQsIGFzc3VtZSBpdCdzIDAuXG4gIGlmIChpc0NvbnRlbnRFZGl0YWJsZShub2RlKSkgcmV0dXJuIDA7XG4gIHJldHVybiBub2RlLnRhYkluZGV4O1xufVxuXG5mdW5jdGlvbiBzb3J0T3JkZXJlZFRhYmJhYmxlcyhhLCBiKSB7XG4gIHJldHVybiBhLnRhYkluZGV4ID09PSBiLnRhYkluZGV4ID8gYS5kb2N1bWVudE9yZGVyIC0gYi5kb2N1bWVudE9yZGVyIDogYS50YWJJbmRleCAtIGIudGFiSW5kZXg7XG59XG5cbi8vIEFycmF5LnByb3RvdHlwZS5maW5kIG5vdCBhdmFpbGFibGUgaW4gSUUuXG5mdW5jdGlvbiBmaW5kKGxpc3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gbGlzdC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChwcmVkaWNhdGUobGlzdFtpXSkpIHJldHVybiBsaXN0W2ldO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQ29udGVudEVkaXRhYmxlKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZSc7XG59XG5cbmZ1bmN0aW9uIGlzSW5wdXQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU5QVVQnO1xufVxuXG5mdW5jdGlvbiBpc0hpZGRlbklucHV0KG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAnaGlkZGVuJztcbn1cblxuZnVuY3Rpb24gaXNSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ3JhZGlvJztcbn1cblxuZnVuY3Rpb24gaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzUmFkaW8obm9kZSkgJiYgIWlzVGFiYmFibGVSYWRpbyhub2RlKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2hlY2tlZFJhZGlvKG5vZGVzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm9kZXNbaV0uY2hlY2tlZCkge1xuICAgICAgcmV0dXJuIG5vZGVzW2ldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc1RhYmJhYmxlUmFkaW8obm9kZSkge1xuICBpZiAoIW5vZGUubmFtZSkgcmV0dXJuIHRydWU7XG4gIC8vIFRoaXMgd29uJ3QgYWNjb3VudCBmb3IgdGhlIGVkZ2UgY2FzZSB3aGVyZSB5b3UgaGF2ZSByYWRpbyBncm91cHMgd2l0aCB0aGUgc2FtZVxuICAvLyBpbiBzZXBhcmF0ZSBmb3JtcyBvbiB0aGUgc2FtZSBwYWdlLlxuICB2YXIgcmFkaW9TZXQgPSBub2RlLm93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCInICsgbm9kZS5uYW1lICsgJ1wiXScpO1xuICB2YXIgY2hlY2tlZCA9IGdldENoZWNrZWRSYWRpbyhyYWRpb1NldCk7XG4gIHJldHVybiAhY2hlY2tlZCB8fCBjaGVja2VkID09PSBub2RlO1xufVxuXG4vLyBBbiBlbGVtZW50IGlzIFwidW50b3VjaGFibGVcIiBpZiAqaXQgb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMqIGhhc1xuLy8gYHZpc2liaWxpdHk6IGhpZGRlbmAgb3IgYGRpc3BsYXk6IG5vbmVgLlxuZnVuY3Rpb24gVW50b3VjaGFiaWxpdHlDaGVja2VyKGVsZW1lbnREb2N1bWVudCkge1xuICB0aGlzLmRvYyA9IGVsZW1lbnREb2N1bWVudDtcbiAgLy8gTm9kZSBjYWNoZSBtdXN0IGJlIHJlZnJlc2hlZCBvbiBldmVyeSBjaGVjaywgaW4gY2FzZVxuICAvLyB0aGUgY29udGVudCBvZiB0aGUgZWxlbWVudCBoYXMgY2hhbmdlZC4gVGhlIGNhY2hlIGNvbnRhaW5zIHR1cGxlc1xuICAvLyBtYXBwaW5nIG5vZGVzIHRvIHRoZWlyIGJvb2xlYW4gcmVzdWx0LlxuICB0aGlzLmNhY2hlID0gW107XG59XG5cbi8vIGdldENvbXB1dGVkU3R5bGUgYWNjdXJhdGVseSByZWZsZWN0cyBgdmlzaWJpbGl0eTogaGlkZGVuYCBvZiBhbmNlc3RvcnNcbi8vIGJ1dCBub3QgYGRpc3BsYXk6IG5vbmVgLCBzbyB3ZSBuZWVkIHRvIHJlY3Vyc2l2ZWx5IGNoZWNrIHBhcmVudHMuXG5VbnRvdWNoYWJpbGl0eUNoZWNrZXIucHJvdG90eXBlLmhhc0Rpc3BsYXlOb25lID0gZnVuY3Rpb24gaGFzRGlzcGxheU5vbmUobm9kZSwgbm9kZUNvbXB1dGVkU3R5bGUpIHtcbiAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBTZWFyY2ggZm9yIGEgY2FjaGVkIHJlc3VsdC5cbiAgICB2YXIgY2FjaGVkID0gZmluZCh0aGlzLmNhY2hlLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbSA9PT0gbm9kZTtcbiAgICB9KTtcbiAgICBpZiAoY2FjaGVkKSByZXR1cm4gY2FjaGVkWzFdO1xuXG4gICAgbm9kZUNvbXB1dGVkU3R5bGUgPSBub2RlQ29tcHV0ZWRTdHlsZSB8fCB0aGlzLmRvYy5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgaWYgKG5vZGVDb21wdXRlZFN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5oYXNEaXNwbGF5Tm9uZShub2RlLnBhcmVudE5vZGUpO1xuICAgIH1cblxuICAgIHRoaXMuY2FjaGUucHVzaChbbm9kZSwgcmVzdWx0XSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5VbnRvdWNoYWJpbGl0eUNoZWNrZXIucHJvdG90eXBlLmlzVW50b3VjaGFibGUgPSBmdW5jdGlvbiBpc1VudG91Y2hhYmxlKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IHRoaXMuZG9jLmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIGlmICh0aGlzLmhhc0Rpc3BsYXlOb25lKG5vZGUsIGNvbXB1dGVkU3R5bGUpKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGNvbXB1dGVkU3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbic7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGFiYmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIiwidmFyIHRhYmJhYmxlID0gcmVxdWlyZSgndGFiYmFibGUnKTtcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG5cbnZhciBhY3RpdmVGb2N1c1RyYXBzID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdHJhcFF1ZXVlID0gW107XG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVUcmFwOiBmdW5jdGlvbih0cmFwKSB7XG4gICAgICBpZiAodHJhcFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGFjdGl2ZVRyYXAgPSB0cmFwUXVldWVbdHJhcFF1ZXVlLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoYWN0aXZlVHJhcCAhPT0gdHJhcCkge1xuICAgICAgICAgIGFjdGl2ZVRyYXAucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdHJhcEluZGV4ID0gdHJhcFF1ZXVlLmluZGV4T2YodHJhcCk7XG4gICAgICBpZiAodHJhcEluZGV4ID09PSAtMSkge1xuICAgICAgICB0cmFwUXVldWUucHVzaCh0cmFwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG1vdmUgdGhpcyBleGlzdGluZyB0cmFwIHRvIHRoZSBmcm9udCBvZiB0aGUgcXVldWVcbiAgICAgICAgdHJhcFF1ZXVlLnNwbGljZSh0cmFwSW5kZXgsIDEpO1xuICAgICAgICB0cmFwUXVldWUucHVzaCh0cmFwKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGVhY3RpdmF0ZVRyYXA6IGZ1bmN0aW9uKHRyYXApIHtcbiAgICAgIHZhciB0cmFwSW5kZXggPSB0cmFwUXVldWUuaW5kZXhPZih0cmFwKTtcbiAgICAgIGlmICh0cmFwSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRyYXBRdWV1ZS5zcGxpY2UodHJhcEluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRyYXBRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyYXBRdWV1ZVt0cmFwUXVldWUubGVuZ3RoIC0gMV0udW5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGZvY3VzVHJhcChlbGVtZW50LCB1c2VyT3B0aW9ucykge1xuICB2YXIgZG9jID0gZG9jdW1lbnQ7XG4gIHZhciBjb250YWluZXIgPVxuICAgIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IGRvYy5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpIDogZWxlbWVudDtcblxuICB2YXIgY29uZmlnID0geHRlbmQoXG4gICAge1xuICAgICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IHRydWUsXG4gICAgICBlc2NhcGVEZWFjdGl2YXRlczogdHJ1ZVxuICAgIH0sXG4gICAgdXNlck9wdGlvbnNcbiAgKTtcblxuICB2YXIgc3RhdGUgPSB7XG4gICAgZmlyc3RUYWJiYWJsZU5vZGU6IG51bGwsXG4gICAgbGFzdFRhYmJhYmxlTm9kZTogbnVsbCxcbiAgICBub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb246IG51bGwsXG4gICAgbW9zdFJlY2VudGx5Rm9jdXNlZE5vZGU6IG51bGwsXG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBwYXVzZWQ6IGZhbHNlXG4gIH07XG5cbiAgdmFyIHRyYXAgPSB7XG4gICAgYWN0aXZhdGU6IGFjdGl2YXRlLFxuICAgIGRlYWN0aXZhdGU6IGRlYWN0aXZhdGUsXG4gICAgcGF1c2U6IHBhdXNlLFxuICAgIHVucGF1c2U6IHVucGF1c2VcbiAgfTtcblxuICByZXR1cm4gdHJhcDtcblxuICBmdW5jdGlvbiBhY3RpdmF0ZShhY3RpdmF0ZU9wdGlvbnMpIHtcbiAgICBpZiAoc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG5cbiAgICBzdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgIHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbiA9IGRvYy5hY3RpdmVFbGVtZW50O1xuXG4gICAgdmFyIG9uQWN0aXZhdGUgPVxuICAgICAgYWN0aXZhdGVPcHRpb25zICYmIGFjdGl2YXRlT3B0aW9ucy5vbkFjdGl2YXRlXG4gICAgICAgID8gYWN0aXZhdGVPcHRpb25zLm9uQWN0aXZhdGVcbiAgICAgICAgOiBjb25maWcub25BY3RpdmF0ZTtcbiAgICBpZiAob25BY3RpdmF0ZSkge1xuICAgICAgb25BY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycygpO1xuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVhY3RpdmF0ZShkZWFjdGl2YXRlT3B0aW9ucykge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICBzdGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcblxuICAgIGFjdGl2ZUZvY3VzVHJhcHMuZGVhY3RpdmF0ZVRyYXAodHJhcCk7XG5cbiAgICB2YXIgb25EZWFjdGl2YXRlID1cbiAgICAgIGRlYWN0aXZhdGVPcHRpb25zICYmIGRlYWN0aXZhdGVPcHRpb25zLm9uRGVhY3RpdmF0ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZGVhY3RpdmF0ZU9wdGlvbnMub25EZWFjdGl2YXRlXG4gICAgICAgIDogY29uZmlnLm9uRGVhY3RpdmF0ZTtcbiAgICBpZiAob25EZWFjdGl2YXRlKSB7XG4gICAgICBvbkRlYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0dXJuRm9jdXMgPVxuICAgICAgZGVhY3RpdmF0ZU9wdGlvbnMgJiYgZGVhY3RpdmF0ZU9wdGlvbnMucmV0dXJuRm9jdXMgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGRlYWN0aXZhdGVPcHRpb25zLnJldHVybkZvY3VzXG4gICAgICAgIDogY29uZmlnLnJldHVybkZvY3VzT25EZWFjdGl2YXRlO1xuICAgIGlmIChyZXR1cm5Gb2N1cykge1xuICAgICAgZGVsYXkoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRyeUZvY3VzKHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgIGlmIChzdGF0ZS5wYXVzZWQgfHwgIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuICAgIHN0YXRlLnBhdXNlZCA9IHRydWU7XG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1bnBhdXNlKCkge1xuICAgIGlmICghc3RhdGUucGF1c2VkIHx8ICFzdGF0ZS5hY3RpdmUpIHJldHVybjtcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICBpZiAoIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgLy8gVGhlcmUgY2FuIGJlIG9ubHkgb25lIGxpc3RlbmluZyBmb2N1cyB0cmFwIGF0IGEgdGltZVxuICAgIGFjdGl2ZUZvY3VzVHJhcHMuYWN0aXZhdGVUcmFwKHRyYXApO1xuXG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuXG4gICAgLy8gRGVsYXkgZW5zdXJlcyB0aGF0IHRoZSBmb2N1c2VkIGVsZW1lbnQgZG9lc24ndCBjYXB0dXJlIHRoZSBldmVudFxuICAgIC8vIHRoYXQgY2F1c2VkIHRoZSBmb2N1cyB0cmFwIGFjdGl2YXRpb24uXG4gICAgZGVsYXkoZnVuY3Rpb24oKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgY2hlY2tGb2N1c0luLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB0cnVlKTtcblxuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGNoZWNrRm9jdXNJbiwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDbGljaywgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGVja0tleSwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5vZGVGb3JPcHRpb24ob3B0aW9uTmFtZSkge1xuICAgIHZhciBvcHRpb25WYWx1ZSA9IGNvbmZpZ1tvcHRpb25OYW1lXTtcbiAgICB2YXIgbm9kZSA9IG9wdGlvblZhbHVlO1xuICAgIGlmICghb3B0aW9uVmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgbm9kZSA9IGRvYy5xdWVyeVNlbGVjdG9yKG9wdGlvblZhbHVlKTtcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2AnICsgb3B0aW9uTmFtZSArICdgIHJlZmVycyB0byBubyBrbm93biBub2RlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5vZGUgPSBvcHRpb25WYWx1ZSgpO1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBvcHRpb25OYW1lICsgJ2AgZGlkIG5vdCByZXR1cm4gYSBub2RlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5pdGlhbEZvY3VzTm9kZSgpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAoZ2V0Tm9kZUZvck9wdGlvbignaW5pdGlhbEZvY3VzJykgIT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSBnZXROb2RlRm9yT3B0aW9uKCdpbml0aWFsRm9jdXMnKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5jb250YWlucyhkb2MuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIG5vZGUgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZSA9IHN0YXRlLmZpcnN0VGFiYmFibGVOb2RlIHx8IGdldE5vZGVGb3JPcHRpb24oJ2ZhbGxiYWNrRm9jdXMnKTtcbiAgICB9XG5cbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJZb3UgY2FuJ3QgaGF2ZSBhIGZvY3VzLXRyYXAgd2l0aG91dCBhdCBsZWFzdCBvbmUgZm9jdXNhYmxlIGVsZW1lbnRcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIC8vIFRoaXMgbmVlZHMgdG8gYmUgZG9uZSBvbiBtb3VzZWRvd24gYW5kIHRvdWNoc3RhcnQgaW5zdGVhZCBvZiBjbGlja1xuICAvLyBzbyB0aGF0IGl0IHByZWNlZGVzIHRoZSBmb2N1cyBldmVudC5cbiAgZnVuY3Rpb24gY2hlY2tQb2ludGVyRG93bihlKSB7XG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcbiAgICBpZiAoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzKSB7XG4gICAgICBkZWFjdGl2YXRlKHtcbiAgICAgICAgcmV0dXJuRm9jdXM6ICF0YWJiYWJsZS5pc0ZvY3VzYWJsZShlLnRhcmdldClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gSW4gY2FzZSBmb2N1cyBlc2NhcGVzIHRoZSB0cmFwIGZvciBzb21lIHN0cmFuZ2UgcmVhc29uLCBwdWxsIGl0IGJhY2sgaW4uXG4gIGZ1bmN0aW9uIGNoZWNrRm9jdXNJbihlKSB7XG4gICAgLy8gSW4gRmlyZWZveCB3aGVuIHlvdSBUYWIgb3V0IG9mIGFuIGlmcmFtZSB0aGUgRG9jdW1lbnQgaXMgYnJpZWZseSBmb2N1c2VkLlxuICAgIGlmIChjb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpIHx8IGUudGFyZ2V0IGluc3RhbmNlb2YgRG9jdW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB0cnlGb2N1cyhzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSB8fCBnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tLZXkoZSkge1xuICAgIGlmIChjb25maWcuZXNjYXBlRGVhY3RpdmF0ZXMgIT09IGZhbHNlICYmIGlzRXNjYXBlRXZlbnQoZSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRlYWN0aXZhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzVGFiRXZlbnQoZSkpIHtcbiAgICAgIGNoZWNrVGFiKGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhpamFjayBUYWIgZXZlbnRzIG9uIHRoZSBmaXJzdCBhbmQgbGFzdCBmb2N1c2FibGUgbm9kZXMgb2YgdGhlIHRyYXAsXG4gIC8vIGluIG9yZGVyIHRvIHByZXZlbnQgZm9jdXMgZnJvbSBlc2NhcGluZy4gSWYgaXQgZXNjYXBlcyBmb3IgZXZlbiBhXG4gIC8vIG1vbWVudCBpdCBjYW4gZW5kIHVwIHNjcm9sbGluZyB0aGUgcGFnZSBhbmQgY2F1c2luZyBjb25mdXNpb24gc28gd2VcbiAgLy8ga2luZCBvZiBuZWVkIHRvIGNhcHR1cmUgdGhlIGFjdGlvbiBhdCB0aGUga2V5ZG93biBwaGFzZS5cbiAgZnVuY3Rpb24gY2hlY2tUYWIoZSkge1xuICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICBpZiAoZS5zaGlmdEtleSAmJiBlLnRhcmdldCA9PT0gc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRyeUZvY3VzKHN0YXRlLmxhc3RUYWJiYWJsZU5vZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWUuc2hpZnRLZXkgJiYgZS50YXJnZXQgPT09IHN0YXRlLmxhc3RUYWJiYWJsZU5vZGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRyeUZvY3VzKHN0YXRlLmZpcnN0VGFiYmFibGVOb2RlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0NsaWNrKGUpIHtcbiAgICBpZiAoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzKSByZXR1cm47XG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKSB7XG4gICAgdmFyIHRhYmJhYmxlTm9kZXMgPSB0YWJiYWJsZShjb250YWluZXIpO1xuICAgIHN0YXRlLmZpcnN0VGFiYmFibGVOb2RlID0gdGFiYmFibGVOb2Rlc1swXSB8fCBnZXRJbml0aWFsRm9jdXNOb2RlKCk7XG4gICAgc3RhdGUubGFzdFRhYmJhYmxlTm9kZSA9XG4gICAgICB0YWJiYWJsZU5vZGVzW3RhYmJhYmxlTm9kZXMubGVuZ3RoIC0gMV0gfHwgZ2V0SW5pdGlhbEZvY3VzTm9kZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJ5Rm9jdXMobm9kZSkge1xuICAgIGlmIChub2RlID09PSBkb2MuYWN0aXZlRWxlbWVudCkgcmV0dXJuO1xuICAgIGlmICghbm9kZSB8fCAhbm9kZS5mb2N1cykge1xuICAgICAgdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBub2RlLmZvY3VzKCk7XG4gICAgc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgPSBub2RlO1xuICAgIGlmIChpc1NlbGVjdGFibGVJbnB1dChub2RlKSkge1xuICAgICAgbm9kZS5zZWxlY3QoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTZWxlY3RhYmxlSW5wdXQobm9kZSkge1xuICByZXR1cm4gKFxuICAgIG5vZGUudGFnTmFtZSAmJlxuICAgIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnICYmXG4gICAgdHlwZW9mIG5vZGUuc2VsZWN0ID09PSAnZnVuY3Rpb24nXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzRXNjYXBlRXZlbnQoZSkge1xuICByZXR1cm4gZS5rZXkgPT09ICdFc2NhcGUnIHx8IGUua2V5ID09PSAnRXNjJyB8fCBlLmtleUNvZGUgPT09IDI3O1xufVxuXG5mdW5jdGlvbiBpc1RhYkV2ZW50KGUpIHtcbiAgcmV0dXJuIGUua2V5ID09PSAnVGFiJyB8fCBlLmtleUNvZGUgPT09IDk7XG59XG5cbmZ1bmN0aW9uIGRlbGF5KGZuKSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KGZuLCAwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmb2N1c1RyYXA7XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGFzaWRlIHJlZj1cImRyYXdlclwiIDpjbGFzcz1cImNsYXNzZXNcIiBjbGFzcz1cIm1kYy1kcmF3ZXIgbWRjLWRyYXdlci0tbW9kYWxcIj5cbiAgICAgIDxzbG90IHYtaWY9XCIkc2xvdHNbJ2hlYWRlciddXCIgbmFtZT1cImhlYWRlclwiPjwvc2xvdD5cbiAgICAgIDwhLS0gPGRpdiB2LWlmPVwiJHNsb3RzWydoZWFkZXInXVwiIGNsYXNzPVwibWRjLWRyYXdlcl9faGVhZGVyXCI+PDwvZGl2PiAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtZHJhd2VyX19jb250ZW50XCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgIDwvYXNpZGU+XG4gICAgPGRpdiBjbGFzcz1cIm1kYy1kcmF3ZXItc2NyaW1cIj48L2Rpdj5cblxuICAgIDxkaXYgdi1pZj1cInRvb2xiYXJTcGFjZXJcIiBjbGFzcz1cIm1kYy10b3AtYXBwLWJhci0tZml4ZWQtYWRqdXN0XCIgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvZHJhd2VyL2Rpc21pc3NpYmxlL2ZvdW5kYXRpb24nXG5pbXBvcnQgTURDTW9kYWxEcmF3ZXJGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9kcmF3ZXIvbW9kYWwvZm91bmRhdGlvbidcbmltcG9ydCB7IE1EQ0xpc3QgfSBmcm9tICdAbWF0ZXJpYWwvbGlzdC9pbmRleCdcbmltcG9ydCBNRENMaXN0Rm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvbGlzdC9mb3VuZGF0aW9uJ1xuaW1wb3J0IGNyZWF0ZUZvY3VzVHJhcCBmcm9tICdmb2N1cy10cmFwJ1xuXG5jb25zdCBtZWRpYSA9IG5ldyBjbGFzcyB7XG4gIGdldCBzbWFsbCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fc21hbGwgfHwgKHRoaXMuX3NtYWxsID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDgzOXB4KScpKVxuICAgIClcbiAgfVxuXG4gIGdldCBsYXJnZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fbGFyZ2UgfHwgKHRoaXMuX2xhcmdlID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEyMDBweCknKSlcbiAgICApXG4gIH1cbn0oKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtZHJhd2VyJyxcbiAgbW9kZWw6IHtcbiAgICBwcm9wOiAnb3BlbicsXG4gICAgZXZlbnQ6ICdjaGFuZ2UnXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgbW9kYWw6IEJvb2xlYW4sXG4gICAgb3BlbjogQm9vbGVhbixcbiAgICB0b29sYmFyU3BhY2VyOiBCb29sZWFuLFxuICAgIHRvZ2dsZU9uOiBTdHJpbmcsXG4gICAgdG9nZ2xlT25Tb3VyY2U6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgIH0sXG4gICAgb3Blbk9uOiBTdHJpbmcsXG4gICAgb3Blbk9uU291cmNlOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogZmFsc2VcbiAgICB9LFxuICAgIGNsb3NlT246IFN0cmluZyxcbiAgICBjbG9zZU9uU291cmNlOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIHByb3ZpZGUoKSB7XG4gICAgcmV0dXJuIHsgbWRjRHJhd2VyOiB0aGlzIH1cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gb3Blbl86IGZhbHNlLFxuICAgICAgY2xhc3Nlczoge31cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgdHlwZSgpIHt9LFxuICAgIGlzTW9kYWwoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb2RhbFxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBvcGVuOiAnb25PcGVuXydcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmRyYXdlcl8gPSB0aGlzLiRyZWZzLmRyYXdlclxuICAgIGNvbnN0IGFkYXB0ZXIgPSB7XG4gICAgICBhZGRDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSksXG4gICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGRlbGV0ZSh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSksXG4gICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuZHJhd2VyXy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcbiAgICAgIGVsZW1lbnRIYXNDbGFzczogKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT5cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcbiAgICAgIHNhdmVGb2N1czogKCkgPT4ge1xuICAgICAgICB0aGlzLnByZXZpb3VzRm9jdXNfID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgfSxcbiAgICAgIHJlc3RvcmVGb2N1czogKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2aW91c0ZvY3VzID0gdGhpcy5wcmV2aW91c0ZvY3VzXyAmJiB0aGlzLnByZXZpb3VzRm9jdXNfLmZvY3VzXG4gICAgICAgIGlmICh0aGlzLmRyYXdlcl8uY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgJiYgcHJldmlvdXNGb2N1cykge1xuICAgICAgICAgIHRoaXMucHJldmlvdXNGb2N1c18uZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZm9jdXNBY3RpdmVOYXZpZ2F0aW9uSXRlbTogKCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVOYXZJdGVtRWwgPSB0aGlzLmRyYXdlcl8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLiR7TURDTGlzdEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTfWBcbiAgICAgICAgKVxuICAgICAgICBpZiAoYWN0aXZlTmF2SXRlbUVsKSB7XG4gICAgICAgICAgYWN0aXZlTmF2SXRlbUVsLmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG5vdGlmeUNsb3NlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGZhbHNlKVxuICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpXG4gICAgICB9LFxuICAgICAgbm90aWZ5T3BlbjogKCkgPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0cnVlKVxuICAgICAgICB0aGlzLiRlbWl0KCdvcGVuJylcbiAgICAgIH0sXG4gICAgICB0cmFwRm9jdXM6ICgpID0+IHRoaXMuZm9jdXNUcmFwXy5hY3RpdmF0ZSgpLFxuICAgICAgcmVsZWFzZUZvY3VzOiAoKSA9PiB0aGlzLmZvY3VzVHJhcF8uZGVhY3RpdmF0ZSgpXG4gICAgfVxuXG4gICAgY29uc3QgeyBESVNNSVNTSUJMRSwgTU9EQUwgfSA9IE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5jc3NDbGFzc2VzXG4gICAgaWYgKHRoaXMuZHJhd2VyXy5jbGFzc0xpc3QuY29udGFpbnMoRElTTUlTU0lCTEUpKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uKGFkYXB0ZXIpXG4gICAgfSBlbHNlIGlmICh0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKE1PREFMKSkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ01vZGFsRHJhd2VyRm91bmRhdGlvbihhZGFwdGVyKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBNRENEcmF3ZXI6IEZhaWxlZCB0byBpbnN0YW50aWF0ZSBjb21wb25lbnQuIFN1cHBvcnRlZCB2YXJpYW50cyBhcmUgJHtESVNNSVNTSUJMRX0gYW5kICR7TU9EQUx9LmBcbiAgICAgIClcbiAgICB9XG4gICAgdGhpcy5mb3VuZGF0aW9uICYmIHRoaXMuZm91bmRhdGlvbi5pbml0KClcbiAgICB0aGlzLmluaXRpYWxTeW5jV2l0aERPTSgpXG5cbiAgICBpZiAodGhpcy50b2dnbGVPbikge1xuICAgICAgdGhpcy50b2dnbGVPbkV2ZW50U291cmNlID0gdGhpcy50b2dnbGVPblNvdXJjZSB8fCB0aGlzLiRyb290XG4gICAgICB0aGlzLnRvZ2dsZU9uRXZlbnRTb3VyY2UuJG9uKHRoaXMudG9nZ2xlT24sIHRoaXMudG9nZ2xlKVxuICAgIH1cbiAgICBpZiAodGhpcy5vcGVuT24pIHtcbiAgICAgIHRoaXMub3Blbk9uRXZlbnRTb3VyY2UgPSB0aGlzLm9wZW5PblNvdXJjZSB8fCB0aGlzLiRyb290XG4gICAgICB0aGlzLm9wZW5PbkV2ZW50U291cmNlLiRvbih0aGlzLm9wZW5PbiwgdGhpcy5zaG93KVxuICAgIH1cbiAgICBpZiAodGhpcy5jbG9zZU9uKSB7XG4gICAgICB0aGlzLmNsb3NlT25FdmVudFNvdXJjZSA9IHRoaXMuY2xvc2VPblNvdXJjZSB8fCB0aGlzLiRyb290XG4gICAgICB0aGlzLmNsb3NlT25FdmVudFNvdXJjZS4kb24odGhpcy5jbG9zZU9uLCB0aGlzLmNsb3NlKVxuICAgIH1cbiAgICAvLyBtZWRpYS5zbWFsbC5hZGRMaXN0ZW5lcih0aGlzLnJlZnJlc2hNZWRpYSlcbiAgICAvLyBtZWRpYS5sYXJnZS5hZGRMaXN0ZW5lcih0aGlzLnJlZnJlc2hNZWRpYSlcbiAgICAvLyB0aGlzLiRuZXh0VGljaygoKSA9PiB0aGlzLnJlZnJlc2hNZWRpYSgpKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbiAmJiB0aGlzLmZvdW5kYXRpb24uZGVzdHJveSgpXG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbnVsbFxuICAgIC8vIG1lZGlhLnNtYWxsLnJlbW92ZUxpc3RlbmVyKHRoaXMucmVmcmVzaE1lZGlhKVxuICAgIC8vIG1lZGlhLmxhcmdlLnJlbW92ZUxpc3RlbmVyKHRoaXMucmVmcmVzaE1lZGlhKVxuXG4gICAgaWYgKHRoaXMudG9nZ2xlT25FdmVudFNvdXJjZSkge1xuICAgICAgdGhpcy50b2dnbGVPbkV2ZW50U291cmNlLiRvZmYodGhpcy50b2dnbGVPbiwgdGhpcy50b2dnbGUpXG4gICAgfVxuICAgIGlmICh0aGlzLm9wZW5PbkV2ZW50U291cmNlKSB7XG4gICAgICB0aGlzLm9wZW5PbkV2ZW50U291cmNlLiRvZmYodGhpcy5vcGVuT24sIHRoaXMuc2hvdylcbiAgICB9XG4gICAgaWYgKHRoaXMuY2xvc2VPbkV2ZW50U291cmNlKSB7XG4gICAgICB0aGlzLmNsb3NlT25FdmVudFNvdXJjZS4kb2ZmKHRoaXMuY2xvc2VPbiwgdGhpcy5jbG9zZSlcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgICBjb25zdCB7IE1PREFMIH0gPSBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24uY3NzQ2xhc3Nlc1xuXG4gICAgICBpZiAodGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC5jb250YWlucyhNT0RBTCkpIHtcbiAgICAgICAgY29uc3QgeyBTQ1JJTV9TRUxFQ1RPUiB9ID0gTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uLnN0cmluZ3NcbiAgICAgICAgdGhpcy5zY3JpbV8gPSB0aGlzLmRyYXdlcl8ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFNDUklNX1NFTEVDVE9SKVxuICAgICAgICB0aGlzLmhhbmRsZVNjcmltQ2xpY2tfID0gKCkgPT4gdGhpcy5mb3VuZGF0aW9uLmhhbmRsZVNjcmltQ2xpY2soKVxuICAgICAgICB0aGlzLnNjcmltXy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlU2NyaW1DbGlja18pXG4gICAgICAgIHRoaXMuZm9jdXNUcmFwXyA9IGNyZWF0ZUZvY3VzVHJhcEluc3RhbmNlKFxuICAgICAgICAgIHRoaXMuZHJhd2VyXyxcbiAgICAgICAgICB0aGlzLmZvY3VzVHJhcEZhY3RvcnlfXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgdGhpcy5oYW5kbGVLZXlkb3duXyA9IGV2dCA9PiB0aGlzLmZvdW5kYXRpb24uaGFuZGxlS2V5ZG93bihldnQpXG4gICAgICB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmRfID0gZXZ0ID0+XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVUcmFuc2l0aW9uRW5kKGV2dClcblxuICAgICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bl8pXG4gICAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kXylcbiAgICB9LFxuICAgIG9uT3Blbl8odmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uICYmIHRoaXMuZm91bmRhdGlvbi5vcGVuKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbiAmJiB0aGlzLmZvdW5kYXRpb24uY2xvc2UoKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGV2ZW50KVxuICAgICAgdGhpcy4kcm9vdC4kZW1pdCgndm1hOmxheW91dCcpXG4gICAgfSxcbiAgICBzaG93KCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLm9wZW4oKVxuICAgIH0sXG4gICAgY2xvc2UoKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uY2xvc2UoKVxuICAgIH0sXG4gICAgdG9nZ2xlKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmlzT3BlbigpXG4gICAgICAgID8gdGhpcy5mb3VuZGF0aW9uLmNsb3NlKClcbiAgICAgICAgOiB0aGlzLmZvdW5kYXRpb24ub3BlbigpXG4gICAgfSxcbiAgICBpc09wZW4oKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uLmlzT3BlbigpXG4gICAgfSxcbiAgICByZWZyZXNoTWVkaWEoKSB7XG4gICAgICAvLyB0aGlzLnNtYWxsID0gbWVkaWEuc21hbGwubWF0Y2hlc1xuICAgICAgLy8gdGhpcy5sYXJnZSA9IG1lZGlhLmxhcmdlLm1hdGNoZXNcbiAgICAgIC8vIGlmICh0aGlzLmlzUmVzcG9uc2l2ZSkge1xuICAgICAgLy8gICBpZiAodGhpcy5sYXJnZSkge1xuICAgICAgLy8gICAgIHRoaXMuc2hvdygpXG4gICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgdGhpcy5jbG9zZSgpXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9jdXNUcmFwSW5zdGFuY2UoXG4gIHN1cmZhY2VFbCxcbiAgZm9jdXNUcmFwRmFjdG9yeSA9IGNyZWF0ZUZvY3VzVHJhcFxuKSB7XG4gIHJldHVybiBmb2N1c1RyYXBGYWN0b3J5KHN1cmZhY2VFbCwge1xuICAgIGNsaWNrT3V0c2lkZURlYWN0aXZhdGVzOiB0cnVlLFxuICAgIGluaXRpYWxGb2N1czogZmFsc2UsIC8vIE5hdmlnYXRpb24gZHJhd2VyIGhhbmRsZXMgZm9jdXNpbmcgb24gYWN0aXZlIG5hdiBpdGVtLlxuICAgIGVzY2FwZURlYWN0aXZhdGVzOiBmYWxzZSwgLy8gTmF2aWdhdGlvbiBkcmF3ZXIgaGFuZGxlcyBFU0MuXG4gICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IGZhbHNlIC8vIE5hdmlnYXRpb24gZHJhd2VyIGhhbmRsZXMgcmVzdG9yZSBmb2N1cy5cbiAgfSlcbn1cbjwvc2NyaXB0PlxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50KGNvbXBpbGVkVGVtcGxhdGUsIGluamVjdFN0eWxlLCBkZWZhdWx0RXhwb3J0LCBzY29wZUlkLCBpc0Z1bmN0aW9uYWxUZW1wbGF0ZSwgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLywgaXNTaGFkb3dNb2RlLCBjcmVhdGVJbmplY3RvciwgY3JlYXRlSW5qZWN0b3JTU1IsIGNyZWF0ZUluamVjdG9yU2hhZG93KSB7XG4gICAgaWYgKHR5cGVvZiBpc1NoYWRvd01vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3JTU1IgPSBjcmVhdGVJbmplY3RvcjtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3IgPSBpc1NoYWRvd01vZGU7XG4gICAgICAgIGlzU2hhZG93TW9kZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gICAgY29uc3Qgb3B0aW9ucyA9IHR5cGVvZiBkZWZhdWx0RXhwb3J0ID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdEV4cG9ydC5vcHRpb25zIDogZGVmYXVsdEV4cG9ydDtcbiAgICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gICAgaWYgKGNvbXBpbGVkVGVtcGxhdGUgJiYgY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXIpIHtcbiAgICAgICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlcjtcbiAgICAgICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgICAgICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlO1xuICAgICAgICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzY29wZWRJZFxuICAgIGlmIChzY29wZUlkKSB7XG4gICAgICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkO1xuICAgIH1cbiAgICBsZXQgaG9vaztcbiAgICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgICAgICAvLyBzZXJ2ZXIgYnVpbGRcbiAgICAgICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICAgICAgICBjb250ZXh0ID1cbiAgICAgICAgICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KTsgLy8gZnVuY3Rpb25hbFxuICAgICAgICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICAgICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX187XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgICAgICAgaWYgKGluamVjdFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNTUihjb250ZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVyZW5jZVxuICAgICAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9vaztcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5qZWN0U3R5bGUpIHtcbiAgICAgICAgaG9vayA9IGlzU2hhZG93TW9kZVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNoYWRvdyh0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH07XG4gICAgfVxuICAgIGlmIChob29rKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcbiAgICAgICAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBob29rLmNhbGwoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlO1xuICAgICAgICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRFeHBvcnQ7XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtZGMtZHJhd2VyLWhlYWRlciBtZGMtZHJhd2VyX19oZWFkZXJcIj5cbiAgICAgIDxzbG90IC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1kcmF3ZXItaGVhZGVyJ1xufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxuYXYgXG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiIFxuICAgIGNsYXNzPVwibWRjLWRyYXdlci1saXN0IG1kYy1saXN0XCI+XG4gICAgPHNsb3QvPlxuICA8L25hdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtZHJhd2VyLWxpc3QnLFxuICBwcm9wczoge1xuICAgIGRlbnNlOiBCb29sZWFuXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgJ21kYy1saXN0LS1kZW5zZSc6IHRoaXMuZGVuc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBSaXBwbGUuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmdcbiAqIC0gY2xhc3Nlc1xuICogLSBkb21cbiAqIC0gQ1NTIHZhcmlhYmxlc1xuICogLSBwb3NpdGlvblxuICogLSBkaW1lbnNpb25zXG4gKiAtIHNjcm9sbCBwb3NpdGlvblxuICogLSBldmVudCBoYW5kbGVyc1xuICogLSB1bmJvdW5kZWQsIGFjdGl2ZSBhbmQgZGlzYWJsZWQgc3RhdGVzXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENSaXBwbGVBZGFwdGVyIHtcbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1VuYm91bmRlZCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZUFjdGl2ZSgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZURpc2FibGVkKCkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0geyFFdmVudFRhcmdldH0gdGFyZ2V0ICovXG4gIGNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFyTmFtZVxuICAgKiBAcGFyYW0gez9udW1iZXJ8c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgdXBkYXRlQ3NzVmFyaWFibGUodmFyTmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqIEByZXR1cm4geyFDbGllbnRSZWN0fSAqL1xuICBjb21wdXRlQm91bmRpbmdSZWN0KCkge31cblxuICAvKiogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gKi9cbiAgZ2V0V2luZG93UGFnZU9mZnNldCgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxuICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbn07XG5cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG4gIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxufTtcblxuY29uc3QgbnVtYmVycyA9IHtcbiAgUEFERElORzogMTAsXG4gIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLXRyYW5zbGF0ZS1kdXJhdGlvbiAoaS5lLiBhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLWZhZGUtb3V0LWR1cmF0aW9uIChpLmUuIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIFRBUF9ERUxBWV9NUzogMzAwLCAvLyBEZWxheSBiZXR3ZWVuIHRvdWNoIGFuZCBzaW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXNcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gYXBwbHlQYXNzaXZlIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c1Bhc3NpdmVfO1xuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAvLyBEZXRlY3QgdmVyc2lvbnMgb2YgRWRnZSB3aXRoIGJ1Z2d5IHZhcigpIHN1cHBvcnRcbiAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMTQ5NTQ0OC9cbiAgY29uc3QgZG9jdW1lbnQgPSB3aW5kb3dPYmouZG9jdW1lbnQ7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgLy8gVGhlIGJ1ZyBleGlzdHMgaWYgOjpiZWZvcmUgc3R5bGUgZW5kcyB1cCBwcm9wYWdhdGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gIC8vIEFkZGl0aW9uYWxseSwgZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIG51bGwgaW4gaWZyYW1lcyB3aXRoIGRpc3BsYXk6IFwibm9uZVwiIGluIEZpcmVmb3gsXG4gIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvd09iai5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBjb25zdCBoYXNQc2V1ZG9WYXJCdWcgPSBjb21wdXRlZFN0eWxlICE9PSBudWxsICYmIGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wU3R5bGUgPT09ICdzb2xpZCc7XG4gIG5vZGUucmVtb3ZlKCk7XG4gIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBsZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuXG4gIGNvbnN0IHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gd2luZG93T2JqLkNTUyAmJiB0eXBlb2Ygd2luZG93T2JqLkNTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTQ2NjlcbiAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgY29uc3Qgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKFxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKVxuICApO1xuXG4gIGlmIChleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cykge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgfSBlbHNlIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG59XG5cbi8vXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZCBpZiBzbywgdXNlIHRoZW0uXG4gKiBAcGFyYW0geyFXaW5kb3c9fSBnbG9iYWxPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnwhRXZlbnRMaXN0ZW5lck9wdGlvbnN9XG4gKi9cbmZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmogPSB3aW5kb3csIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwge2dldCBwYXNzaXZlKCkge1xuICAgICAgICBpc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBpc1N1cHBvcnRlZDtcbiAgICAgIH19KTtcbiAgICB9IGNhdGNoIChlKSB7IH1cblxuICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZDtcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfXG4gICAgPyAvKiogQHR5cGUgeyFFdmVudExpc3RlbmVyT3B0aW9uc30gKi8gKHtwYXNzaXZlOiB0cnVlfSlcbiAgICA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gSFRNTEVsZW1lbnRQcm90b3R5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gIC8qKlxuICAgKiBPcmRlciBpcyBpbXBvcnRhbnQgYmVjYXVzZSB3ZSByZXR1cm4gdGhlIGZpcnN0IGV4aXN0aW5nIG1ldGhvZCB3ZSBmaW5kLlxuICAgKiBEbyBub3QgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgaXRlbXMgaW4gdGhlIGJlbG93IGFycmF5LlxuICAgKi9cbiAgY29uc3QgbWF0Y2hlc01ldGhvZHMgPSBbJ21hdGNoZXMnLCAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJywgJ21zTWF0Y2hlc1NlbGVjdG9yJ107XG4gIGxldCBtZXRob2QgPSAnbWF0Y2hlcyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlc01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0aG9kID0gbWF0Y2hlc01ldGhvZHNbaV07XG4gICAgaWYgKG1hdGNoZXNNZXRob2QgaW4gSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgICAgIG1ldGhvZCA9IG1hdGNoZXNNZXRob2Q7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0aG9kO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUV2ZW50fSBldlxuICogQHBhcmFtIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSBwYWdlT2Zmc2V0XG4gKiBAcGFyYW0geyFDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXYsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgY29uc3Qge3gsIHl9ID0gcGFnZU9mZnNldDtcbiAgY29uc3QgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgY29uc3QgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuXG4gIGxldCBub3JtYWxpemVkWDtcbiAgbGV0IG5vcm1hbGl6ZWRZO1xuICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gIGlmIChldi50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICBldiA9IC8qKiBAdHlwZSB7IVRvdWNoRXZlbnR9ICovIChldik7XG4gICAgbm9ybWFsaXplZFggPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9IGVsc2Uge1xuICAgIGV2ID0gLyoqIEB0eXBlIHshTW91c2VFdmVudH0gKi8gKGV2KTtcbiAgICBub3JtYWxpemVkWCA9IGV2LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYucGFnZVkgLSBkb2N1bWVudFk7XG4gIH1cblxuICByZXR1cm4ge3g6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWX07XG59XG5cbmV4cG9ydCB7c3VwcG9ydHNDc3NWYXJpYWJsZXMsIGFwcGx5UGFzc2l2ZSwgZ2V0TWF0Y2hlc1Byb3BlcnR5LCBnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgaXNBY3RpdmF0ZWQ6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBhY3RpdmF0aW9uRXZlbnQ6ICghRXZlbnR8dW5kZWZpbmVkKSxcbiAqICAgaXNQcm9ncmFtbWF0aWM6IChib29sZWFufHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBBY3RpdmF0aW9uU3RhdGVUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGRlYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZm9jdXM6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgYmx1cjogKHN0cmluZ3x1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJJbmZvVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50KSxcbiAqICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50PSksXG4gKiAgIGZvY3VzOiBmdW5jdGlvbigpLFxuICogICBibHVyOiBmdW5jdGlvbigpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJzVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICB4OiBudW1iZXIsXG4gKiAgIHk6IG51bWJlclxuICogfX1cbiAqL1xubGV0IFBvaW50VHlwZTtcblxuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbmNvbnN0IEFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nLCAnbW91c2Vkb3duJywgJ2tleWRvd24nXTtcblxuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG5jb25zdCBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnXTtcblxuLy8gVHJhY2tzIGFjdGl2YXRpb25zIHRoYXQgaGF2ZSBvY2N1cnJlZCBvbiB0aGUgY3VycmVudCBmcmFtZSwgdG8gYXZvaWQgc2ltdWx0YW5lb3VzIG5lc3RlZCBhY3RpdmF0aW9uc1xuLyoqIEB0eXBlIHshQXJyYXk8IUV2ZW50VGFyZ2V0Pn0gKi9cbmxldCBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1JpcHBsZUFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENSaXBwbGVGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gbnVtYmVycztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IC8qIGJvb2xlYW4gLSBjYWNoZWQgKi8ge30sXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICgvKiB0YXJnZXQ6ICFFdmVudFRhcmdldCAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAoLyogdmFyTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IC8qIENsaWVudFJlY3QgKi8ge30sXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAvKiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9ICovIHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUgeyFDbGllbnRSZWN0fSAqL1xuICAgIHRoaXMuZnJhbWVfID0gLyoqIEB0eXBlIHshQ2xpZW50UmVjdH0gKi8gKHt3aWR0aDogMCwgaGVpZ2h0OiAwfSk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubWF4UmFkaXVzXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCl9ICovXG4gICAgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gKGUpID0+IHRoaXMuYWN0aXZhdGVfKGUpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9ICgpID0+IHRoaXMuZGVhY3RpdmF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5mb2N1c0hhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVGb2N1cygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmJsdXJIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlQmx1cigpO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyXyA9ICgpID0+IHRoaXMubGF5b3V0KCk7XG5cbiAgICAvKiogQHByaXZhdGUge3tsZWZ0OiBudW1iZXIsIHRvcDpudW1iZXJ9fSAqL1xuICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdTY2FsZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUV2ZW50fHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdXBwb3J0c1ByZXNzUmlwcGxlXygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9XG4gICAqL1xuICBkZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcblxuICAgIHRoaXMucmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpO1xuXG4gICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhST09UKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlcyBuZWVkIGxheW91dCBsb2dpYyBhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIHNldCBjb29yZGluYXRlcyBmb3IgYm90aCBzaGFkZSBhbmQgcmlwcGxlXG4gICAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCkpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2YXRpb25UaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoUk9PVCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudH0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSkge1xuICAgIGlmIChlLnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpIHtcbiAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcmVtb3ZlQ3NzVmFyc18oKSB7XG4gICAgY29uc3Qge3N0cmluZ3N9ID0gTURDUmlwcGxlRm91bmRhdGlvbjtcbiAgICBPYmplY3Qua2V5cyhzdHJpbmdzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBpZiAoay5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShzdHJpbmdzW2tdLCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFjdGl2YXRlXyhlKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgIGNvbnN0IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgY29uc3QgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBlICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZS50eXBlO1xuICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZSA9PT0gdW5kZWZpbmVkO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IGUgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICBlLnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3BvaW50ZXJkb3duJ1xuICAgICk7XG5cbiAgICBjb25zdCBoYXNBY3RpdmF0ZWRDaGlsZCA9IGUgIT09IHVuZGVmaW5lZCAmJiBhY3RpdmF0ZWRUYXJnZXRzLmxlbmd0aCA+IDAgJiYgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKFxuICAgICAgKHRhcmdldCkgPT4gdGhpcy5hZGFwdGVyXy5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkpO1xuICAgIGlmIChoYXNBY3RpdmF0ZWRDaGlsZCkge1xuICAgICAgLy8gSW1tZWRpYXRlbHkgcmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSwgd2hpbGUgcHJlc2VydmluZyBsb2dpYyB0aGF0IHByZXZlbnRzIHRvdWNoIGZvbGxvdy1vbiBldmVudHNcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKC8qKiBAdHlwZSB7IUV2ZW50VGFyZ2V0fSAqLyAoZS50YXJnZXQpKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSAmJiBlICE9PSB1bmRlZmluZWQgJiYgKGUua2V5ID09PSAnICcgfHwgZS5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgLy8gYWN0aXZlIHN0YXRlcyBpbmNvbnNpc3RlbnRseSB3aGVuIHRoZXkncmUgY2FsbGVkIHdpdGhpbiBldmVudCBoYW5kbGluZyBjb2RlOlxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgLy8gV2UgdHJ5IGZpcnN0IG91dHNpZGUgckFGIHRvIHN1cHBvcnQgRWRnZSwgd2hpY2ggZG9lcyBub3QgZXhoaWJpdCB0aGlzIHByb2JsZW0sIGJ1dCB3aWxsIGNyYXNoIGlmIGEgQ1NTXG4gICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSkge1xuICAgIHJldHVybiAoZSAhPT0gdW5kZWZpbmVkICYmIGUudHlwZSA9PT0gJ2tleWRvd24nKSA/IHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlQWN0aXZlKCkgOiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZXZlbnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICovXG4gIGFjdGl2YXRlKGV2ZW50KSB7XG4gICAgdGhpcy5hY3RpdmF0ZV8oZXZlbnQpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGFuaW1hdGVBY3RpdmF0aW9uXygpIHtcbiAgICBjb25zdCB7VkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtERUFDVElWQVRJT05fVElNRU9VVF9NU30gPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnM7XG5cbiAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuXG4gICAgbGV0IHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgbGV0IHRyYW5zbGF0ZUVuZCA9ICcnO1xuXG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIGNvbnN0IHtzdGFydFBvaW50LCBlbmRQb2ludH0gPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKTtcbiAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gYCR7c3RhcnRQb2ludC54fXB4LCAke3N0YXJ0UG9pbnQueX1weGA7XG4gICAgICB0cmFuc2xhdGVFbmQgPSBgJHtlbmRQb2ludC54fXB4LCAke2VuZFBvaW50Lnl9cHhgO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuXG4gICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm4ge3tzdGFydFBvaW50OiBQb2ludFR5cGUsIGVuZFBvaW50OiBQb2ludFR5cGV9fVxuICAgKi9cbiAgZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpIHtcbiAgICBjb25zdCB7YWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXJ9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuXG4gICAgbGV0IHN0YXJ0UG9pbnQ7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhcbiAgICAgICAgLyoqIEB0eXBlIHshRXZlbnR9ICovIChhY3RpdmF0aW9uRXZlbnQpLFxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICBjb25zdCBlbmRQb2ludCA9IHtcbiAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtzdGFydFBvaW50LCBlbmRQb2ludH07XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCkge1xuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtoYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWR9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGNvbnN0IGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcblxuICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKSB7XG4gICAgY29uc3Qge0ZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gIH1cblxuICByZXNldEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQsIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZWFjdGl2YXRlXygpIHtcbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSAvKiogQHR5cGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqLyAoT2JqZWN0LmFzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKSk7XG5cbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSkpO1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9IG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFuaW1hdGVEZWFjdGl2YXRpb25fKHt3YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlfSkge1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfVxuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgIH1cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGxheW91dEludGVybmFsXygpIHtcbiAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIGNvbnN0IG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuXG4gICAgLy8gU3VyZmFjZSBkaWFtZXRlciBpcyB0cmVhdGVkIGRpZmZlcmVudGx5IGZvciB1bmJvdW5kZWQgdnMuIGJvdW5kZWQgcmlwcGxlcy5cbiAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAvLyBzcXVhcmUpLiBCb3VuZGVkIHJpcHBsZXMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgZnVsbHkgZXhwZWN0ZWQgdG8gZXhwYW5kIGJleW9uZCB0aGUgc3VyZmFjZSdzIGxvbmdlc3QgZGlhbWV0ZXJcbiAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgIGNvbnN0IGdldEJvdW5kZWRSYWRpdXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMuZnJhbWVfLndpZHRoLCAyKSArIE1hdGgucG93KHRoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICB9O1xuXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpID8gbWF4RGltIDogZ2V0Qm91bmRlZFJhZGl1cygpO1xuXG4gICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICB0aGlzLmluaXRpYWxTaXplXyA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICB0aGlzLmZnU2NhbGVfID0gdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG5cbiAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgdXBkYXRlTGF5b3V0Q3NzVmFyc18oKSB7XG4gICAgY29uc3Qge1xuICAgICAgVkFSX0ZHX1NJWkUsIFZBUl9MRUZULCBWQVJfVE9QLCBWQVJfRkdfU0NBTEUsXG4gICAgfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIGAke3RoaXMuaW5pdGlhbFNpemVffXB4YCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnR9cHhgKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcH1weGApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXRVbmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgY29uc3Qge1VOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRm9jdXMoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKSk7XG4gIH1cblxuICBoYW5kbGVCbHVyKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCBNRENSaXBwbGVGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQGV4dGVuZHMgTURDQ29tcG9uZW50PCFNRENSaXBwbGVGb3VuZGF0aW9uPlxuICovXG5jbGFzcyBNRENSaXBwbGUgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKiogQHBhcmFtIHsuLi4/fSBhcmdzICovXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHt7aXNVbmJvdW5kZWQ6IChib29sZWFufHVuZGVmaW5lZCl9PX0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QsIHtpc1VuYm91bmRlZCA9IHVuZGVmaW5lZH0gPSB7fSkge1xuICAgIGNvbnN0IHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgLy8gT25seSBvdmVycmlkZSB1bmJvdW5kZWQgYmVoYXZpb3IgaWYgb3B0aW9uIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgaWYgKGlzVW5ib3VuZGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSAvKiogQHR5cGUge2Jvb2xlYW59ICovIChpc1VuYm91bmRlZCk7XG4gICAgfVxuICAgIHJldHVybiByaXBwbGU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshUmlwcGxlQ2FwYWJsZVN1cmZhY2V9IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUFkYXB0ZXIoaW5zdGFuY2UpIHtcbiAgICBjb25zdCBNQVRDSEVTID0gdXRpbC5nZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyksXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gaW5zdGFuY2UudW5ib3VuZGVkLFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiBpbnN0YW5jZS5yb290X1tNQVRDSEVTXSgnOmFjdGl2ZScpLFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IGluc3RhbmNlLmRpc2FibGVkLFxuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiAodGFyZ2V0KSA9PiBpbnN0YW5jZS5yb290Xy5jb250YWlucyh0YXJnZXQpLFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpLFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gaW5zdGFuY2Uucm9vdF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAoe3g6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0fSksXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgdW5ib3VuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0IHVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICB0aGlzLnVuYm91bmRlZF8gPSBCb29sZWFuKHVuYm91bmRlZCk7XG4gICAgdGhpcy5zZXRVbmJvdW5kZWRfKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc3VyZSBDb21waWxlciB0aHJvd3MgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3Igd2hlbiBkaXJlY3RseSBhY2Nlc3NpbmcgYVxuICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICogQnkgYWNjZXNzaW5nIHRoZSBwcm90ZWN0ZWQgcHJvcGVydHkgaW5zaWRlIGEgbWV0aG9kLCB3ZSBzb2x2ZSB0aGF0IHByb2JsZW0uXG4gICAqIFRoYXQncyB3aHkgdGhpcyBmdW5jdGlvbiBleGlzdHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRVbmJvdW5kZWRfKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VW5ib3VuZGVkKHRoaXMudW5ib3VuZGVkXyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUZvdW5kYXRpb259XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMudW5ib3VuZGVkID0gJ21kY1JpcHBsZUlzVW5ib3VuZGVkJyBpbiB0aGlzLnJvb3RfLmRhdGFzZXQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTZWUgTWF0ZXJpYWwgRGVzaWduIHNwZWMgZm9yIG1vcmUgZGV0YWlscyBvbiB3aGVuIHRvIHVzZSByaXBwbGVzLlxuICogaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL21vdGlvbi9jaG9yZW9ncmFwaHkuaHRtbCNjaG9yZW9ncmFwaHktY3JlYXRpb25cbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgUmlwcGxlQ2FwYWJsZVN1cmZhY2Uge31cblxuLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLnJvb3RfO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgYmxlZWRzIG91dCBvZiB0aGUgYm91bmRzIG9mIHRoZSBlbGVtZW50LlxuICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUudW5ib3VuZGVkO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgaXMgYXR0YWNoZWQgdG8gYSBkaXNhYmxlZCBjb21wb25lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS5kaXNhYmxlZDtcblxuZXhwb3J0IHtNRENSaXBwbGUsIE1EQ1JpcHBsZUZvdW5kYXRpb24sIFJpcHBsZUNhcGFibGVTdXJmYWNlLCB1dGlsfTtcbiIsImltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2luZGV4J1xuaW1wb3J0IHtcbiAgc3VwcG9ydHNDc3NWYXJpYWJsZXMsXG4gIGdldE1hdGNoZXNQcm9wZXJ0eSxcbiAgYXBwbHlQYXNzaXZlXG59IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvdXRpbCdcblxuZXhwb3J0IGNsYXNzIFJpcHBsZUJhc2UgZXh0ZW5kcyBNRENSaXBwbGVGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBNQVRDSEVTKCkge1xuICAgIC8qIGdsb2JhbCBIVE1MRWxlbWVudCAqL1xuICAgIHJldHVybiAoXG4gICAgICBSaXBwbGVCYXNlLl9tYXRjaGVzIHx8XG4gICAgICAoUmlwcGxlQmFzZS5fbWF0Y2hlcyA9IGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpKVxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cmZhY2VBY3RpdmUocmVmKSB7XG4gICAgcmV0dXJuIHJlZltSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZtLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbFtSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRkZWxldGUodm0uY2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogdGFyZ2V0ID0+IHZtLiRlbC5jb250YWlucyh0YXJnZXQpLFxuICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uc3R5bGVzLCB2YXJOYW1lLCB2YWx1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFJpcHBsZU1peGluID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzKVxuICAgIHRoaXMucmlwcGxlLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxjdXN0b20tZWxlbWVudCBcbiAgICA6dGFnPVwidGFnXCIgXG4gICAgOmNsYXNzZXM9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGVzPVwic3R5bGVzXCIgXG4gICAgY2xhc3M9XCJtZGMtcmlwcGxlXCI+XG4gICAgPHNsb3QgLz5cbiAgPC9jdXN0b20tZWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBDdXN0b21FbGVtZW50TWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlTWl4aW4gfSBmcm9tICcuL21kYy1yaXBwbGUtYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXJpcHBsZScsXG4gIG1peGluczogW0N1c3RvbUVsZW1lbnRNaXhpbiwgUmlwcGxlTWl4aW5dLFxuICBwcm9wczoge1xuICAgIHRhZzogU3RyaW5nXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8Y3VzdG9tLWxpbmtcbiAgICA6bGluaz1cImxpbmtcIlxuICAgIDpjbGFzcz1cIltjbGFzc2VzLCBpdGVtQ2xhc3Nlc11cIlxuICAgIDpzdHlsZT1cInN0eWxlc1wiXG4gICAgY2xhc3M9XCJtZGMtZHJhd2VyLWl0ZW0gbWRjLWxpc3QtaXRlbVwiXG4gICAgdi1vbj1cIm15bGlzdGVuZXJzXCJcbiAgPlxuICAgIDxzcGFuIHYtaWY9XCJoYXNTdGFydERldGFpbFwiIGNsYXNzPVwibWRjLWxpc3QtaXRlbV9fZ3JhcGhpY1wiPlxuICAgICAgPHNsb3QgbmFtZT1cInN0YXJ0LWRldGFpbFwiPlxuICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+e3sgc3RhcnRJY29uIH19PC9pPlxuICAgICAgPC9zbG90PlxuICAgIDwvc3Bhbj5cbiAgICA8c2xvdCAvPlxuICA8L2N1c3RvbS1saW5rPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IERpc3BhdGNoRXZlbnRNaXhpbiwgQ3VzdG9tTGlua01peGluIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IFJpcHBsZUJhc2UgfSBmcm9tICcuLi9yaXBwbGUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1kcmF3ZXItaXRlbScsXG4gIGluamVjdDogWydtZGNEcmF3ZXInXSxcbiAgbWl4aW5zOiBbRGlzcGF0Y2hFdmVudE1peGluLCBDdXN0b21MaW5rTWl4aW5dLFxuICBwcm9wczoge1xuICAgIHN0YXJ0SWNvbjogU3RyaW5nLFxuICAgIG1vZGFsQ2xvc2U6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICBhY3RpdmF0ZWQ6IEJvb2xlYW4sXG4gICAgZXhhY3RBY3RpdmVDbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ21kYy1saXN0LWl0ZW0tLWFjdGl2YXRlZCdcbiAgICB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBteWxpc3RlbmVycygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMuJGxpc3RlbmVycyxcbiAgICAgICAgY2xpY2s6IGUgPT4ge1xuICAgICAgICAgIHRoaXMubWRjRHJhd2VyLmlzTW9kYWwgJiYgdGhpcy5tb2RhbENsb3NlICYmIHRoaXMubWRjRHJhd2VyLmNsb3NlKClcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgaXRlbUNsYXNzZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnbWRjLWxpc3QtaXRlbS0tYWN0aXZhdGVkJzogdGhpcy5hY3RpdmF0ZWRcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhc1N0YXJ0RGV0YWlsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhcnRJY29uIHx8IHRoaXMuJHNsb3RzWydzdGFydC1kZXRhaWwnXVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5yaXBwbGUgJiYgdGhpcy5yaXBwbGUuZGVzdHJveSgpXG4gICAgdGhpcy5yaXBwbGUgPSBudWxsXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8aHIgY2xhc3M9XCJtZGMtbGlzdC1kaXZpZGVyXCI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWRyYXdlci1kaXZpZGVyJ1xufVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBtZGNEcmF3ZXIgZnJvbSAnLi9tZGMtZHJhd2VyLnZ1ZSdcbmltcG9ydCBtZGNEcmF3ZXJIZWFkZXIgZnJvbSAnLi9tZGMtZHJhd2VyLWhlYWRlci52dWUnXG5pbXBvcnQgbWRjRHJhd2VyTGlzdCBmcm9tICcuL21kYy1kcmF3ZXItbGlzdC52dWUnXG5pbXBvcnQgbWRjRHJhd2VySXRlbSBmcm9tICcuL21kYy1kcmF3ZXItaXRlbS52dWUnXG5pbXBvcnQgbWRjRHJhd2VyRGl2aWRlciBmcm9tICcuL21kYy1kcmF3ZXItZGl2aWRlci52dWUnXG5cbmV4cG9ydCB7XG4gIG1kY0RyYXdlcixcbiAgbWRjRHJhd2VySGVhZGVyLFxuICBtZGNEcmF3ZXJMaXN0LFxuICBtZGNEcmF3ZXJJdGVtLFxuICBtZGNEcmF3ZXJEaXZpZGVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VQbHVnaW4oe1xuICBtZGNEcmF3ZXIsXG4gIG1kY0RyYXdlckhlYWRlcixcbiAgbWRjRHJhd2VyTGlzdCxcbiAgbWRjRHJhd2VySXRlbSxcbiAgbWRjRHJhd2VyRGl2aWRlclxufSlcbiIsImltcG9ydCAnLi9zdHlsZXMuc2NzcydcbmltcG9ydCB7IGF1dG9Jbml0IH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBwbHVnaW4gZnJvbSAnLi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG5hdXRvSW5pdChwbHVnaW4pXG4iXSwibmFtZXMiOlsiYXV0b0luaXQiLCJwbHVnaW4iLCJfVnVlIiwid2luZG93IiwiVnVlIiwiZ2xvYmFsIiwidXNlIiwiQmFzZVBsdWdpbiIsImNvbXBvbmVudHMiLCJ2ZXJzaW9uIiwiaW5zdGFsbCIsInZtIiwia2V5IiwiY29tcG9uZW50IiwibmFtZSIsIkN1c3RvbUVsZW1lbnQiLCJmdW5jdGlvbmFsIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJwcm9wcyIsImlzIiwidGFnIiwiZGF0YSIsImNoaWxkcmVuIiwiQ3VzdG9tRWxlbWVudE1peGluIiwiQ3VzdG9tTGluayIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwibGluayIsIk9iamVjdCIsImgiLCJlbGVtZW50IiwicGFyZW50IiwiJHJvdXRlciIsIiRyb290IiwiJG9wdGlvbnMiLCJvbiIsImNsaWNrIiwibmF0aXZlT24iLCJDdXN0b21MaW5rTWl4aW4iLCJ0byIsImV4YWN0IiwiQm9vbGVhbiIsImFwcGVuZCIsInJlcGxhY2UiLCJhY3RpdmVDbGFzcyIsImV4YWN0QWN0aXZlQ2xhc3MiLCJjb21wdXRlZCIsIkRpc3BhdGNoRXZlbnRNaXhpbiIsImV2ZW50IiwiQXJyYXkiLCJtZXRob2RzIiwiZGlzcGF0Y2hFdmVudCIsImV2dCIsIiRlbWl0IiwidGFyZ2V0IiwiZXZlbnRUYXJnZXQiLCJhcmdzIiwiZXZlbnRBcmdzIiwibGlzdGVuZXJzIiwiJGxpc3RlbmVycyIsImUiLCJzY29wZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiTURDRHJhd2VyQWRhcHRlciIsImNsYXNzTmFtZSIsIk1EQ0ZvdW5kYXRpb24iLCJhZGFwdGVyIiwiYWRhcHRlcl8iLCJjc3NDbGFzc2VzIiwiUk9PVCIsIkRJU01JU1NJQkxFIiwiTU9EQUwiLCJPUEVOIiwiQU5JTUFURSIsIk9QRU5JTkciLCJDTE9TSU5HIiwic3RyaW5ncyIsIkFQUF9DT05URU5UX1NFTEVDVE9SIiwiU0NSSU1fU0VMRUNUT1IiLCJDTE9TRV9FVkVOVCIsIk9QRU5fRVZFTlQiLCJNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24iLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJlbGVtZW50SGFzQ2xhc3MiLCJub3RpZnlDbG9zZSIsIm5vdGlmeU9wZW4iLCJzYXZlRm9jdXMiLCJyZXN0b3JlRm9jdXMiLCJmb2N1c0FjdGl2ZU5hdmlnYXRpb25JdGVtIiwidHJhcEZvY3VzIiwicmVsZWFzZUZvY3VzIiwiZGVmYXVsdEFkYXB0ZXIiLCJhbmltYXRpb25GcmFtZV8iLCJhbmltYXRpb25UaW1lcl8iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyVGltZW91dCIsImlzT3BlbiIsImlzT3BlbmluZyIsImlzQ2xvc2luZyIsInJ1bk5leHRBbmltYXRpb25GcmFtZV8iLCJrZXlDb2RlIiwiaXNFc2NhcGUiLCJjbG9zZSIsImlzRWxlbWVudCIsIkVsZW1lbnQiLCJjbG9zZWQiLCJvcGVuZWQiLCJjYWxsYmFjayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJNRENNb2RhbERyYXdlckZvdW5kYXRpb24iLCJNRENDb21wb25lbnQiLCJyb290IiwiZm91bmRhdGlvbiIsInVuZGVmaW5lZCIsInJvb3RfIiwiaW5pdGlhbGl6ZSIsImZvdW5kYXRpb25fIiwiZ2V0RGVmYXVsdEZvdW5kYXRpb24iLCJpbml0IiwiaW5pdGlhbFN5bmNXaXRoRE9NIiwiRXJyb3IiLCJkZXN0cm95IiwiZXZ0VHlwZSIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2dERhdGEiLCJzaG91bGRCdWJibGUiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImJ1YmJsZXMiLCJkb2N1bWVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiTURDTGlzdEFkYXB0ZXIiLCJpbmRleCIsImF0dHJpYnV0ZSIsInZhbHVlIiwibGlzdEl0ZW1JbmRleCIsInRhYkluZGV4VmFsdWUiLCJlbGUiLCJpc0NoZWNrZWQiLCJMSVNUX0lURU1fQ0xBU1MiLCJMSVNUX0lURU1fU0VMRUNURURfQ0xBU1MiLCJMSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTIiwiQVJJQV9PUklFTlRBVElPTiIsIkFSSUFfT1JJRU5UQVRJT05fSE9SSVpPTlRBTCIsIkFSSUFfU0VMRUNURUQiLCJBUklBX0NIRUNLRUQiLCJBUklBX0NIRUNLRURfUkFESU9fU0VMRUNUT1IiLCJBUklBX1JPTEVfQ0hFQ0tCT1hfU0VMRUNUT1IiLCJBUklBX0NIRUNLRURfQ0hFQ0tCT1hfU0VMRUNUT1IiLCJSQURJT19TRUxFQ1RPUiIsIkNIRUNLQk9YX1NFTEVDVE9SIiwiQ0hFQ0tCT1hfUkFESU9fU0VMRUNUT1IiLCJDSElMRF9FTEVNRU5UU19UT19UT0dHTEVfVEFCSU5ERVgiLCJGT0NVU0FCTEVfQ0hJTERfRUxFTUVOVFMiLCJFTkFCTEVEX0lURU1TX1NFTEVDVE9SIiwiRUxFTUVOVFNfS0VZX0FMTE9XRURfSU4iLCJNRENMaXN0Rm91bmRhdGlvbiIsImdldExpc3RJdGVtQ291bnQiLCJnZXRGb2N1c2VkRWxlbWVudEluZGV4Iiwic2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4IiwicmVtb3ZlQXR0cmlidXRlRm9yRWxlbWVudEluZGV4IiwiYWRkQ2xhc3NGb3JFbGVtZW50SW5kZXgiLCJyZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleCIsImZvY3VzSXRlbUF0SW5kZXgiLCJzZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW4iLCJmb2xsb3dIcmVmIiwiaGFzUmFkaW9BdEluZGV4IiwiaGFzQ2hlY2tib3hBdEluZGV4IiwiaXNDaGVja2JveENoZWNrZWRBdEluZGV4Iiwic2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXgiLCJpc0ZvY3VzSW5zaWRlTGlzdCIsIndyYXBGb2N1c18iLCJpc1ZlcnRpY2FsXyIsImlzU2luZ2xlU2VsZWN0aW9uTGlzdF8iLCJzZWxlY3RlZEluZGV4XyIsImZvY3VzZWRJdGVtSW5kZXhfIiwidXNlQWN0aXZhdGVkQ2xhc3NfIiwiaXNDaGVja2JveExpc3RfIiwiaXNSYWRpb0xpc3RfIiwidXNlQWN0aXZhdGVkIiwiaXNJbmRleFZhbGlkXyIsInNldENoZWNrYm94QXRJbmRleF8iLCJzZXRSYWRpb0F0SW5kZXhfIiwic2V0U2luZ2xlU2VsZWN0aW9uQXRJbmRleF8iLCJzZXRUYWJpbmRleFRvRmlyc3RTZWxlY3RlZEl0ZW1fIiwiaXNSb290TGlzdEl0ZW0iLCJhcnJvd0xlZnQiLCJhcnJvd1VwIiwiYXJyb3dSaWdodCIsImFycm93RG93biIsImlzSG9tZSIsImlzRW5kIiwiaXNFbnRlciIsImlzU3BhY2UiLCJjdXJyZW50SW5kZXgiLCJuZXh0SW5kZXgiLCJwcmV2ZW50RGVmYXVsdEV2ZW50XyIsImZvY3VzTmV4dEVsZW1lbnQiLCJmb2N1c1ByZXZFbGVtZW50IiwiZm9jdXNGaXJzdEVsZW1lbnQiLCJmb2N1c0xhc3RFbGVtZW50IiwiaXNTZWxlY3RhYmxlTGlzdF8iLCJzZXRTZWxlY3RlZEluZGV4T25BY3Rpb25fIiwic2V0VGFiaW5kZXhBdEluZGV4XyIsInRvZ2dsZUNoZWNrYm94IiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInByZXZlbnREZWZhdWx0IiwiY291bnQiLCJwcmV2SW5kZXgiLCJsYXN0SW5kZXgiLCJzZWxlY3RlZENsYXNzTmFtZSIsImkiLCJ0YXJnZXRJbmRleCIsImxlbmd0aCIsInJlZHVjZSIsIm1pbkluZGV4IiwibWluIiwic29tZSIsImlzSW5kZXhJblJhbmdlXyIsImxpc3RTaXplIiwidG9nZ2xlQ2hlY2tib3hBdEluZGV4XyIsInNldFNlbGVjdGVkSW5kZXgiLCJwdXNoIiwiZmlsdGVyIiwibWF0Y2hlcyIsInNlbGVjdG9yIiwibmF0aXZlTWF0Y2hlcyIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiY2FsbCIsIk1EQ0xpc3QiLCJoYW5kbGVLZXlkb3duXyIsImhhbmRsZUNsaWNrXyIsImZvY3VzSW5FdmVudExpc3RlbmVyXyIsImZvY3VzT3V0RXZlbnRMaXN0ZW5lcl8iLCJoYW5kbGVDbGlja0V2ZW50XyIsImJpbmQiLCJoYW5kbGVLZXlkb3duRXZlbnRfIiwiaGFuZGxlRm9jdXNJbkV2ZW50XyIsImhhbmRsZUZvY3VzT3V0RXZlbnRfIiwibGF5b3V0IiwiaW5pdGlhbGl6ZUxpc3RUeXBlIiwiZGlyZWN0aW9uIiwiZ2V0QXR0cmlidXRlIiwidmVydGljYWwiLCJzbGljZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnRFbGVtZW50IiwibGlzdEVsZW1lbnRzIiwiZ2V0TGlzdEl0ZW1JbmRleF8iLCJoYW5kbGVGb2N1c0luIiwiaGFuZGxlRm9jdXNPdXQiLCJoYW5kbGVLZXlkb3duIiwiaGFuZGxlQ2xpY2siLCJjaGVja2JveExpc3RJdGVtcyIsInNpbmdsZVNlbGVjdGVkTGlzdEl0ZW0iLCJxdWVyeVNlbGVjdG9yIiwicmFkaW9TZWxlY3RlZExpc3RJdGVtIiwicHJlc2VsZWN0ZWRJdGVtcyIsInNlbGVjdGVkSW5kZXgiLCJtYXAiLCJsaXN0SXRlbSIsInNldFVzZUFjdGl2YXRlZENsYXNzIiwic2luZ2xlU2VsZWN0aW9uIiwiYWN0aXZlRWxlbWVudCIsImF0dHIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGQiLCJyZW1vdmUiLCJmb2N1cyIsImxpc3RJdGVtQ2hpbGRyZW4iLCJocmVmIiwidG9nZ2xlRWwiLCJjaGVja2VkIiwiaW5pdEV2ZW50Iiwic2V0VmVydGljYWxPcmllbnRhdGlvbiIsInNldFdyYXBGb2N1cyIsImlzU2luZ2xlU2VsZWN0aW9uTGlzdCIsInNldFNpbmdsZVNlbGVjdGlvbiIsImdldFNlbGVjdGVkSW5kZXgiLCJjYW5kaWRhdGVTZWxlY3RvcnMiLCJjYW5kaWRhdGVTZWxlY3RvciIsImpvaW4iLCJwcm90b3R5cGUiLCJ0YWJiYWJsZSIsImVsIiwib3B0aW9ucyIsImVsZW1lbnREb2N1bWVudCIsIm93bmVyRG9jdW1lbnQiLCJyZWd1bGFyVGFiYmFibGVzIiwib3JkZXJlZFRhYmJhYmxlcyIsInVudG91Y2hhYmlsaXR5Q2hlY2tlciIsIlVudG91Y2hhYmlsaXR5Q2hlY2tlciIsImNhbmRpZGF0ZXMiLCJpbmNsdWRlQ29udGFpbmVyIiwiYXBwbHkiLCJ1bnNoaWZ0IiwiY2FuZGlkYXRlIiwiY2FuZGlkYXRlVGFiaW5kZXgiLCJpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUiLCJnZXRUYWJpbmRleCIsImRvY3VtZW50T3JkZXIiLCJ0YWJJbmRleCIsIm5vZGUiLCJ0YWJiYWJsZU5vZGVzIiwic29ydCIsInNvcnRPcmRlcmVkVGFiYmFibGVzIiwiYSIsImNvbmNhdCIsImlzVGFiYmFibGUiLCJpc0ZvY3VzYWJsZSIsImlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUiLCJpc05vblRhYmJhYmxlUmFkaW8iLCJkaXNhYmxlZCIsImlzSGlkZGVuSW5wdXQiLCJpc1VudG91Y2hhYmxlIiwiZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IiLCJ0YWJpbmRleEF0dHIiLCJwYXJzZUludCIsImlzTmFOIiwiaXNDb250ZW50RWRpdGFibGUiLCJiIiwiZmluZCIsImxpc3QiLCJwcmVkaWNhdGUiLCJjb250ZW50RWRpdGFibGUiLCJpc0lucHV0IiwiaXNSYWRpbyIsImlzVGFiYmFibGVSYWRpbyIsImdldENoZWNrZWRSYWRpbyIsIm5vZGVzIiwicmFkaW9TZXQiLCJkb2MiLCJjYWNoZSIsImhhc0Rpc3BsYXlOb25lIiwibm9kZUNvbXB1dGVkU3R5bGUiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJjYWNoZWQiLCJpdGVtIiwiZGVmYXVsdFZpZXciLCJnZXRDb21wdXRlZFN0eWxlIiwicmVzdWx0IiwiZGlzcGxheSIsInBhcmVudE5vZGUiLCJkb2N1bWVudEVsZW1lbnQiLCJjb21wdXRlZFN0eWxlIiwidmlzaWJpbGl0eSIsIm1vZHVsZSIsImV4dGVuZCIsImhhc093blByb3BlcnR5IiwiYXJndW1lbnRzIiwic291cmNlIiwiYWN0aXZlRm9jdXNUcmFwcyIsInRyYXBRdWV1ZSIsImFjdGl2YXRlVHJhcCIsInRyYXAiLCJhY3RpdmVUcmFwIiwicGF1c2UiLCJ0cmFwSW5kZXgiLCJzcGxpY2UiLCJkZWFjdGl2YXRlVHJhcCIsInVucGF1c2UiLCJmb2N1c1RyYXAiLCJ1c2VyT3B0aW9ucyIsImNvbnRhaW5lciIsImNvbmZpZyIsInh0ZW5kIiwicmV0dXJuRm9jdXNPbkRlYWN0aXZhdGUiLCJlc2NhcGVEZWFjdGl2YXRlcyIsInN0YXRlIiwiZmlyc3RUYWJiYWJsZU5vZGUiLCJsYXN0VGFiYmFibGVOb2RlIiwibm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uIiwibW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUiLCJhY3RpdmUiLCJwYXVzZWQiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJhY3RpdmF0ZU9wdGlvbnMiLCJ1cGRhdGVUYWJiYWJsZU5vZGVzIiwib25BY3RpdmF0ZSIsImFkZExpc3RlbmVycyIsImRlYWN0aXZhdGVPcHRpb25zIiwicmVtb3ZlTGlzdGVuZXJzIiwib25EZWFjdGl2YXRlIiwicmV0dXJuRm9jdXMiLCJkZWxheSIsInRyeUZvY3VzIiwiZ2V0SW5pdGlhbEZvY3VzTm9kZSIsImNoZWNrRm9jdXNJbiIsImNoZWNrUG9pbnRlckRvd24iLCJjaGVja0NsaWNrIiwiY2hlY2tLZXkiLCJnZXROb2RlRm9yT3B0aW9uIiwib3B0aW9uTmFtZSIsIm9wdGlvblZhbHVlIiwiY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMiLCJEb2N1bWVudCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImlzRXNjYXBlRXZlbnQiLCJpc1RhYkV2ZW50IiwiY2hlY2tUYWIiLCJzaGlmdEtleSIsImlzU2VsZWN0YWJsZUlucHV0Iiwic2VsZWN0IiwiZm4iLCJub3JtYWxpemVDb21wb25lbnQiLCJjb21waWxlZFRlbXBsYXRlIiwiaW5qZWN0U3R5bGUiLCJkZWZhdWx0RXhwb3J0Iiwic2NvcGVJZCIsImlzRnVuY3Rpb25hbFRlbXBsYXRlIiwibW9kdWxlSWRlbnRpZmllciIsImlzU2hhZG93TW9kZSIsImNyZWF0ZUluamVjdG9yIiwiY3JlYXRlSW5qZWN0b3JTU1IiLCJjcmVhdGVJbmplY3RvclNoYWRvdyIsInN0YXRpY1JlbmRlckZucyIsIl9jb21waWxlZCIsIl9zY29wZUlkIiwiaG9vayIsIiR2bm9kZSIsInNzckNvbnRleHQiLCJfX1ZVRV9TU1JfQ09OVEVYVF9fIiwiX3JlZ2lzdGVyZWRDb21wb25lbnRzIiwiX3NzclJlZ2lzdGVyIiwic2hhZG93Um9vdCIsIm9yaWdpbmFsUmVuZGVyIiwicmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIiwiZXhpc3RpbmciLCJiZWZvcmVDcmVhdGUiLCJzY3JpcHQiLCJNRENSaXBwbGVBZGFwdGVyIiwidmFyTmFtZSIsIlVOQk9VTkRFRCIsIkJHX0ZPQ1VTRUQiLCJGR19BQ1RJVkFUSU9OIiwiRkdfREVBQ1RJVkFUSU9OIiwiVkFSX0xFRlQiLCJWQVJfVE9QIiwiVkFSX0ZHX1NJWkUiLCJWQVJfRkdfU0NBTEUiLCJWQVJfRkdfVFJBTlNMQVRFX1NUQVJUIiwiVkFSX0ZHX1RSQU5TTEFURV9FTkQiLCJudW1iZXJzIiwiUEFERElORyIsIklOSVRJQUxfT1JJR0lOX1NDQUxFIiwiREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMiLCJGR19ERUFDVElWQVRJT05fTVMiLCJUQVBfREVMQVlfTVMiLCJzdXBwb3J0c0Nzc1ZhcmlhYmxlc18iLCJzdXBwb3J0c1Bhc3NpdmVfIiwiZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1ZyIsIndpbmRvd09iaiIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImhhc1BzZXVkb1ZhckJ1ZyIsImJvcmRlclRvcFN0eWxlIiwic3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJmb3JjZVJlZnJlc2giLCJzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCIsIkNTUyIsInN1cHBvcnRzIiwiZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyIsIndlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyIsImFwcGx5UGFzc2l2ZSIsImdsb2JhbE9iaiIsImlzU3VwcG9ydGVkIiwicGFzc2l2ZSIsImdldE1hdGNoZXNQcm9wZXJ0eSIsIkhUTUxFbGVtZW50UHJvdG90eXBlIiwibWF0Y2hlc01ldGhvZHMiLCJtZXRob2QiLCJtYXRjaGVzTWV0aG9kIiwiZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzIiwiZXYiLCJwYWdlT2Zmc2V0IiwiY2xpZW50UmVjdCIsIngiLCJ5IiwiZG9jdW1lbnRYIiwibGVmdCIsImRvY3VtZW50WSIsInRvcCIsIm5vcm1hbGl6ZWRYIiwibm9ybWFsaXplZFkiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTIiwiUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMiLCJhY3RpdmF0ZWRUYXJnZXRzIiwiTURDUmlwcGxlRm91bmRhdGlvbiIsImJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMiLCJpc1VuYm91bmRlZCIsImlzU3VyZmFjZUFjdGl2ZSIsImlzU3VyZmFjZURpc2FibGVkIiwiY29udGFpbnNFdmVudFRhcmdldCIsInJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwiZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJkZXJlZ2lzdGVyUmVzaXplSGFuZGxlciIsInVwZGF0ZUNzc1ZhcmlhYmxlIiwiY29tcHV0ZUJvdW5kaW5nUmVjdCIsImdldFdpbmRvd1BhZ2VPZmZzZXQiLCJsYXlvdXRGcmFtZV8iLCJmcmFtZV8iLCJ3aWR0aCIsImhlaWdodCIsImFjdGl2YXRpb25TdGF0ZV8iLCJkZWZhdWx0QWN0aXZhdGlvblN0YXRlXyIsImluaXRpYWxTaXplXyIsIm1heFJhZGl1c18iLCJhY3RpdmF0ZUhhbmRsZXJfIiwiYWN0aXZhdGVfIiwiZGVhY3RpdmF0ZUhhbmRsZXJfIiwiZGVhY3RpdmF0ZV8iLCJmb2N1c0hhbmRsZXJfIiwiaGFuZGxlRm9jdXMiLCJibHVySGFuZGxlcl8iLCJoYW5kbGVCbHVyIiwicmVzaXplSGFuZGxlcl8iLCJ1bmJvdW5kZWRDb29yZHNfIiwiZmdTY2FsZV8iLCJhY3RpdmF0aW9uVGltZXJfIiwiZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfIiwiYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyIsImFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyIsInJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XyIsInByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyIsImlzQWN0aXZhdGVkIiwiaGFzRGVhY3RpdmF0aW9uVVhSdW4iLCJ3YXNBY3RpdmF0ZWRCeVBvaW50ZXIiLCJ3YXNFbGVtZW50TWFkZUFjdGl2ZSIsImFjdGl2YXRpb25FdmVudCIsImlzUHJvZ3JhbW1hdGljIiwic3VwcG9ydHNQcmVzc1JpcHBsZSIsInN1cHBvcnRzUHJlc3NSaXBwbGVfIiwicmVnaXN0ZXJSb290SGFuZGxlcnNfIiwibGF5b3V0SW50ZXJuYWxfIiwicmVtb3ZlQ3NzVmFyc18iLCJkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXyIsImRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18iLCJrZXlzIiwiayIsImFjdGl2YXRpb25TdGF0ZSIsInByZXZpb3VzQWN0aXZhdGlvbkV2ZW50IiwiaXNTYW1lSW50ZXJhY3Rpb24iLCJoYXNBY3RpdmF0ZWRDaGlsZCIsInJlc2V0QWN0aXZhdGlvblN0YXRlXyIsInJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfIiwiY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8iLCJhbmltYXRlQWN0aXZhdGlvbl8iLCJ0cmFuc2xhdGVTdGFydCIsInRyYW5zbGF0ZUVuZCIsImdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18iLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18iLCJhY3RpdmF0aW9uSGFzRW5kZWQiLCJhbmltYXRlRGVhY3RpdmF0aW9uXyIsIm1heERpbSIsIm1heCIsImdldEJvdW5kZWRSYWRpdXMiLCJoeXBvdGVudXNlIiwic3FydCIsInBvdyIsInVwZGF0ZUxheW91dENzc1ZhcnNfIiwicm91bmQiLCJ1bmJvdW5kZWQiLCJNRENSaXBwbGUiLCJ1bmJvdW5kZWRfIiwic2V0VW5ib3VuZGVkIiwiY3JlYXRlQWRhcHRlciIsImRhdGFzZXQiLCJzZXRVbmJvdW5kZWRfIiwicmlwcGxlIiwiaW5zdGFuY2UiLCJNQVRDSEVTIiwidXRpbCIsIkhUTUxFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJSaXBwbGVDYXBhYmxlU3VyZmFjZSIsIlJpcHBsZUJhc2UiLCJyZWYiLCJfbWF0Y2hlcyIsIiRlbCIsIiRzZXQiLCJjbGFzc2VzIiwiJGRlbGV0ZSIsInN0eWxlcyIsIlJpcHBsZU1peGluIiwibW91bnRlZCIsImJlZm9yZURlc3Ryb3kiLCJtZGNEcmF3ZXIiLCJtZGNEcmF3ZXJIZWFkZXIiLCJtZGNEcmF3ZXJMaXN0IiwibWRjRHJhd2VySXRlbSIsIm1kY0RyYXdlckRpdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtJQUMvQjtJQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztJQUNBLE1BQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztJQUNqQ0QsSUFBQUEsSUFBSSxHQUFHQyxNQUFNLENBQUNDLEdBQWQ7SUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0lBQ3hDO0lBQ0FILElBQUFBLElBQUksR0FBR0csTUFBTSxDQUFDRCxHQUFkO0lBQ0Q7O0lBQ0QsTUFBSUYsSUFBSixFQUFVO0lBQ1JBLElBQUFBLElBQUksQ0FBQ0ksR0FBTCxDQUFTTCxNQUFUO0lBQ0Q7SUFDRjs7SUNaTSxTQUFTTSxVQUFULENBQW9CQyxVQUFwQixFQUFnQztJQUNyQyxTQUFPO0lBQ0xDLElBQUFBLE9BQU8sRUFBRSxhQURKO0lBRUxDLElBQUFBLE9BQU8sRUFBRSxpQkFBQUMsRUFBRSxFQUFJO0lBQ2IsV0FBSyxJQUFJQyxHQUFULElBQWdCSixVQUFoQixFQUE0QjtJQUMxQixZQUFJSyxTQUFTLEdBQUdMLFVBQVUsQ0FBQ0ksR0FBRCxDQUExQjtJQUNBRCxRQUFBQSxFQUFFLENBQUNFLFNBQUgsQ0FBYUEsU0FBUyxDQUFDQyxJQUF2QixFQUE2QkQsU0FBN0I7SUFDRDtJQUNGLEtBUEk7SUFR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
