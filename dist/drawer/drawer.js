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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXV0by1pbml0LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Jhc2UtcGx1Z2luLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1lbGVtZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1saW5rLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1ldmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9kaXNwYXRjaC1ldmVudC1taXhpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS91bmlxdWVpZC1taXhpbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL2Rpc21pc3NpYmxlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci9tb2RhbC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGlzdC9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGlzdC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vcG9ueWZpbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpc3QvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdGFiYmFibGUvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2ZvY3VzLXRyYXAvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL2RyYXdlci9tZGMtZHJhd2VyLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL21kYy1kcmF3ZXItaGVhZGVyLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL21kYy1kcmF3ZXItbGlzdC52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUtYmFzZS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUudnVlIiwiLi4vLi4vY29tcG9uZW50cy9kcmF3ZXIvbWRjLWRyYXdlci1pdGVtLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL21kYy1kcmF3ZXItZGl2aWRlci52dWUiLCIuLi8uLi9jb21wb25lbnRzL2RyYXdlci9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHtcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIGNvbnRleHQucHJvcHMuaXMgfHwgY29udGV4dC5wcm9wcy50YWcgfHwgJ2RpdicsXG4gICAgICBjb250ZXh0LmRhdGEsXG4gICAgICBjb250ZXh0LmNoaWxkcmVuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50TWl4aW4gPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21FbGVtZW50XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDdXN0b21MaW5rID0ge1xuICBuYW1lOiAnY3VzdG9tLWxpbmsnLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIHRhZzogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdhJyB9LFxuICAgIGxpbms6IE9iamVjdFxuICB9LFxuICByZW5kZXIoaCwgY29udGV4dCkge1xuICAgIGxldCBlbGVtZW50XG4gICAgbGV0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LmRhdGEpXG5cbiAgICBpZiAoY29udGV4dC5wcm9wcy5saW5rICYmIGNvbnRleHQucGFyZW50LiRyb3V0ZXIpIHtcbiAgICAgIC8vIHJvdXRlci1saW5rIGNhc2VcbiAgICAgIGVsZW1lbnQgPSBjb250ZXh0LnBhcmVudC4kcm9vdC4kb3B0aW9ucy5jb21wb25lbnRzWydyb3V0ZXItbGluayddXG4gICAgICBkYXRhLnByb3BzID0gT2JqZWN0LmFzc2lnbih7IHRhZzogY29udGV4dC5wcm9wcy50YWcgfSwgY29udGV4dC5wcm9wcy5saW5rKVxuICAgICAgaWYgKGRhdGEub24uY2xpY2spIHtcbiAgICAgICAgZGF0YS5uYXRpdmVPbiA9IHsgY2xpY2s6IGRhdGEub24uY2xpY2sgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlbGVtZW50IGZhbGxiYWNrXG4gICAgICBlbGVtZW50ID0gY29udGV4dC5wcm9wcy50YWdcbiAgICB9XG5cbiAgICByZXR1cm4gaChlbGVtZW50LCBkYXRhLCBjb250ZXh0LmNoaWxkcmVuKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21MaW5rTWl4aW4gPSB7XG4gIHByb3BzOiB7XG4gICAgdG86IFtTdHJpbmcsIE9iamVjdF0sXG4gICAgZXhhY3Q6IEJvb2xlYW4sXG4gICAgYXBwZW5kOiBCb29sZWFuLFxuICAgIHJlcGxhY2U6IEJvb2xlYW4sXG4gICAgYWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgICBleGFjdEFjdGl2ZUNsYXNzOiBTdHJpbmdcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaW5rKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy50byAmJiB7XG4gICAgICAgICAgdG86IHRoaXMudG8sXG4gICAgICAgICAgZXhhY3Q6IHRoaXMuZXhhY3QsXG4gICAgICAgICAgYXBwZW5kOiB0aGlzLmFwcGVuZCxcbiAgICAgICAgICByZXBsYWNlOiB0aGlzLnJlcGxhY2UsXG4gICAgICAgICAgYWN0aXZlQ2xhc3M6IHRoaXMuYWN0aXZlQ2xhc3MsXG4gICAgICAgICAgZXhhY3RBY3RpdmVDbGFzczogdGhpcy5leGFjdEFjdGl2ZUNsYXNzXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21MaW5rXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImV4cG9ydCBjb25zdCBEaXNwYXRjaEV2ZW50TWl4aW4gPSB7XG4gIHByb3BzOiB7XG4gICAgZXZlbnQ6IFN0cmluZyxcbiAgICAnZXZlbnQtdGFyZ2V0JzogT2JqZWN0LFxuICAgICdldmVudC1hcmdzJzogQXJyYXlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRpc3BhdGNoRXZlbnQoZXZ0KSB7XG4gICAgICBldnQgJiYgdGhpcy4kZW1pdChldnQudHlwZSwgZXZ0KVxuICAgICAgaWYgKHRoaXMuZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZXZlbnRUYXJnZXQgfHwgdGhpcy4kcm9vdFxuICAgICAgICBsZXQgYXJncyA9IHRoaXMuZXZlbnRBcmdzIHx8IFtdXG4gICAgICAgIHRhcmdldC4kZW1pdCh0aGlzLmV2ZW50LCAuLi5hcmdzKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaXN0ZW5lcnMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLiRsaXN0ZW5lcnMsXG4gICAgICAgIGNsaWNrOiBlID0+IHRoaXMuZGlzcGF0Y2hFdmVudChlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgRHJhd2VyXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgRHJhd2VyIGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENEcmF3ZXJBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFkZHMgYSBjbGFzcyB0byB0aGUgcm9vdCBFbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjbGFzcyBmcm9tIHRoZSByb290IEVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSByb290IEVsZW1lbnQgY29udGFpbnMgdGhlIGdpdmVuIGNsYXNzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnQgdGFyZ2V0IGVsZW1lbnQgdG8gdmVyaWZ5IGNsYXNzIG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSBjbGFzcyBuYW1lXG4gICAqL1xuICBlbGVtZW50SGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBTYXZlcyB0aGUgZm9jdXMgb2YgY3VycmVudGx5IGFjdGl2ZSBlbGVtZW50LlxuICAgKi9cbiAgc2F2ZUZvY3VzKCkge31cblxuICAvKipcbiAgICogUmVzdG9yZXMgZm9jdXMgdG8gZWxlbWVudCBwcmV2aW91c2x5IHNhdmVkIHdpdGggJ3NhdmVGb2N1cycuXG4gICAqL1xuICByZXN0b3JlRm9jdXMoKSB7fVxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIHRoZSBhY3RpdmUgLyBzZWxlY3RlZCBuYXZpZ2F0aW9uIGl0ZW0uXG4gICAqL1xuICBmb2N1c0FjdGl2ZU5hdmlnYXRpb25JdGVtKCkge31cblxuICAvKipcbiAgICogRW1pdHMgYSBjdXN0b20gZXZlbnQgXCJNRENEcmF3ZXI6Y2xvc2VkXCIgZGVub3RpbmcgdGhlIGRyYXdlciBoYXMgY2xvc2VkLlxuICAgKi9cbiAgbm90aWZ5Q2xvc2UoKSB7fVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhIGN1c3RvbSBldmVudCBcIk1EQ0RyYXdlcjpvcGVuZWRcIiBkZW5vdGluZyB0aGUgZHJhd2VyIGhhcyBvcGVuZWQuXG4gICAqL1xuICBub3RpZnlPcGVuKCkge31cblxuICAvKipcbiAgICogVHJhcHMgZm9jdXMgb24gcm9vdCBlbGVtZW50IGFuZCBmb2N1c2VzIHRoZSBhY3RpdmUgbmF2aWdhdGlvbiBlbGVtZW50LlxuICAgKi9cbiAgdHJhcEZvY3VzKCkge31cblxuICAvKipcbiAgICogUmVsZWFzZXMgZm9jdXMgdHJhcCBmcm9tIHJvb3QgZWxlbWVudCB3aGljaCB3YXMgc2V0IGJ5IGB0cmFwRm9jdXNgXG4gICAqIGFuZCByZXN0b3JlcyBmb2N1cyB0byB3aGVyZSBpdCB3YXMgcHJpb3IgdG8gY2FsbGluZyBgdHJhcEZvY3VzYC5cbiAgICovXG4gIHJlbGVhc2VGb2N1cygpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0RyYXdlckFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgQVxuICovXG5jbGFzcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bXtjc3NDbGFzc2VzfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17bnVtYmVyc30gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiB7IU9iamVjdH0gKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgLy8gdmFsaWRhdGlvbi5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciA9IHt9KSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFBfSAqL1xuICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIFJPT1Q6ICdtZGMtZHJhd2VyJyxcbiAgRElTTUlTU0lCTEU6ICdtZGMtZHJhd2VyLS1kaXNtaXNzaWJsZScsXG4gIE1PREFMOiAnbWRjLWRyYXdlci0tbW9kYWwnLFxuICBPUEVOOiAnbWRjLWRyYXdlci0tb3BlbicsXG4gIEFOSU1BVEU6ICdtZGMtZHJhd2VyLS1hbmltYXRlJyxcbiAgT1BFTklORzogJ21kYy1kcmF3ZXItLW9wZW5pbmcnLFxuICBDTE9TSU5HOiAnbWRjLWRyYXdlci0tY2xvc2luZycsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIEFQUF9DT05URU5UX1NFTEVDVE9SOiAnLm1kYy1kcmF3ZXItYXBwLWNvbnRlbnQnLFxuICBTQ1JJTV9TRUxFQ1RPUjogJy5tZGMtZHJhd2VyLXNjcmltJyxcbiAgQ0xPU0VfRVZFTlQ6ICdNRENEcmF3ZXI6Y2xvc2VkJyxcbiAgT1BFTl9FVkVOVDogJ01EQ0RyYXdlcjpvcGVuZWQnLFxufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRHJhd2VyQWRhcHRlciBmcm9tICcuLi9hZGFwdGVyJztcbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENEcmF3ZXJBZGFwdGVyPn1cbiAqL1xuY2xhc3MgTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENEcmF3ZXJBZGFwdGVyfSAqLyAoe1xuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGhhc0NsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgZWxlbWVudEhhc0NsYXNzOiAoLyogZWxlbWVudDogIUVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIG5vdGlmeUNsb3NlOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeU9wZW46ICgpID0+IHt9LFxuICAgICAgc2F2ZUZvY3VzOiAoKSA9PiB7fSxcbiAgICAgIHJlc3RvcmVGb2N1czogKCkgPT4ge30sXG4gICAgICBmb2N1c0FjdGl2ZU5hdmlnYXRpb25JdGVtOiAoKSA9PiB7fSxcbiAgICAgIHRyYXBGb2N1czogKCkgPT4ge30sXG4gICAgICByZWxlYXNlRm9jdXM6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IDA7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbkZyYW1lXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZV8pO1xuICAgIH1cbiAgICBpZiAodGhpcy5hbmltYXRpb25UaW1lcl8pIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIG9wZW4gdGhlIGRyYXdlci5cbiAgICovXG4gIG9wZW4oKSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKCkgfHwgdGhpcy5pc09wZW5pbmcoKSB8fCB0aGlzLmlzQ2xvc2luZygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLk9QRU4pO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5BTklNQVRFKTtcblxuICAgIC8vIFdhaXQgYSBmcmFtZSBvbmNlIGRpc3BsYXkgaXMgbm8gbG9uZ2VyIFwibm9uZVwiLCB0byBlc3RhYmxpc2ggYmFzaXMgZm9yIGFuaW1hdGlvblxuICAgIHRoaXMucnVuTmV4dEFuaW1hdGlvbkZyYW1lXygoKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuT1BFTklORyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnNhdmVGb2N1cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBkcmF3ZXIuXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNPcGVuKCkgfHwgdGhpcy5pc09wZW5pbmcoKSB8fCB0aGlzLmlzQ2xvc2luZygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkNMT1NJTkcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dGVuc2lvbiBwb2ludCBmb3Igd2hlbiBkcmF3ZXIgZmluaXNoZXMgb3BlbiBhbmltYXRpb24uXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIG9wZW5lZCgpIHt9XG5cbiAgLyoqXG4gICAqIEV4dGVuc2lvbiBwb2ludCBmb3Igd2hlbiBkcmF3ZXIgZmluaXNoZXMgY2xvc2UgYW5pbWF0aW9uLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBjbG9zZWQoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgZHJhd2VyIGlzIGluIG9wZW4gc3RhdGUuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgZHJhd2VyIGlzIGFuaW1hdGluZyBvcGVuLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNPcGVuaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuT1BFTklORykgfHwgdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkFOSU1BVEUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBkcmF3ZXIgaXMgYW5pbWF0aW5nIGNsb3NlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQ2xvc2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkNMT1NJTkcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEtleWRvd24gaGFuZGxlciB0byBjbG9zZSBkcmF3ZXIgd2hlbiBrZXkgaXMgZXNjYXBlLlxuICAgKiBAcGFyYW0gZXZ0XG4gICAqL1xuICBoYW5kbGVLZXlkb3duKGV2dCkge1xuICAgIGNvbnN0IHtrZXlDb2RlLCBrZXl9ID0gZXZ0O1xuXG4gICAgY29uc3QgaXNFc2NhcGUgPSBrZXkgPT09ICdFc2NhcGUnIHx8IGtleUNvZGUgPT09IDI3O1xuICAgIGlmIChpc0VzY2FwZSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgdHJhbnNpdGlvbiBlbmQgZXZlbnQgb24gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlVHJhbnNpdGlvbkVuZChldnQpIHtcbiAgICBjb25zdCB7T1BFTklORywgQ0xPU0lORywgT1BFTiwgQU5JTUFURSwgUk9PVH0gPSBjc3NDbGFzc2VzO1xuXG4gICAgLy8gSW4gRWRnZSwgdHJhbnNpdGlvbmVuZCBvbiByaXBwbGUgcHNldWRvLWVsZW1lbnRzIHlpZWxkcyBhIHRhcmdldCB3aXRob3V0IGNsYXNzTGlzdCwgc28gY2hlY2sgZm9yIEVsZW1lbnQgZmlyc3QuXG4gICAgY29uc3QgaXNFbGVtZW50ID0gZXZ0LnRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQ7XG4gICAgaWYgKCFpc0VsZW1lbnQgfHwgIXRoaXMuYWRhcHRlcl8uZWxlbWVudEhhc0NsYXNzKC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovIChldnQudGFyZ2V0KSwgUk9PVCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0Nsb3NpbmcoKSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhPUEVOKTtcbiAgICAgIHRoaXMuY2xvc2VkKCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlc3RvcmVGb2N1cygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzQWN0aXZlTmF2aWdhdGlvbkl0ZW0oKTtcbiAgICAgIHRoaXMub3BlbmVkKCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeU9wZW4oKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEFOSU1BVEUpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoT1BFTklORyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhDTE9TSU5HKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW5zIHRoZSBnaXZlbiBsb2dpYyBvbiB0aGUgbmV4dCBhbmltYXRpb24gZnJhbWUsIHVzaW5nIHNldFRpbWVvdXQgdG8gZmFjdG9yIGluIEZpcmVmb3ggcmVmbG93IGJlaGF2aW9yLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcnVuTmV4dEFuaW1hdGlvbkZyYW1lXyhjYWxsYmFjaykge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWVfKTtcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IDA7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25UaW1lcl8pO1xuICAgICAgdGhpcy5hbmltYXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbiBmcm9tICcuLi9kaXNtaXNzaWJsZS9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9ufVxuICovXG5jbGFzcyBNRENNb2RhbERyYXdlckZvdW5kYXRpb24gZXh0ZW5kcyBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24ge1xuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gZHJhd2VyIGZpbmlzaGVzIG9wZW4gYW5pbWF0aW9uLlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIG9wZW5lZCgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnRyYXBGb2N1cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGRyYXdlciBmaW5pc2hlcyBjbG9zZSBhbmltYXRpb24uXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgY2xvc2VkKCkge1xuICAgIHRoaXMuYWRhcHRlcl8ucmVsZWFzZUZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBjbGljayBldmVudCBvbiBzY3JpbS5cbiAgICovXG4gIGhhbmRsZVNjcmltQ2xpY2soKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ01vZGFsRHJhd2VyRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBGXG4gKi9cbmNsYXNzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENDb21wb25lbnR9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7Rj19IGZvdW5kYXRpb25cbiAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb290LCBmb3VuZGF0aW9uID0gdW5kZWZpbmVkLCAuLi5hcmdzKSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuICAgIHRoaXMucm9vdF8gPSByb290O1xuICAgIHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcbiAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgLy8gdGhpcy5yb290XyBpcyBkZWZpbmVkIGFuZCBjYW4gYmUgdXNlZCB3aXRoaW4gdGhlIGZvdW5kYXRpb24gY2xhc3MuXG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFGfSAqL1xuICAgIHRoaXMuZm91bmRhdGlvbl8gPSBmb3VuZGF0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmdldERlZmF1bHRGb3VuZGF0aW9uKCkgOiBmb3VuZGF0aW9uO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gIH1cblxuICBpbml0aWFsaXplKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshRn0gZm91bmRhdGlvblxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgLy8gY29tcG9uZW50LlxuICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogbGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgbGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gcmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiB1bmxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLFxuICAgKiB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFPYmplY3R9IGV2dERhdGFcbiAgICogQHBhcmFtIHtib29sZWFuPX0gc2hvdWxkQnViYmxlXG4gICAqL1xuICBlbWl0KGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gICAgbGV0IGV2dDtcbiAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5yb290Xy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBMaXN0LiBQcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIG1hbmFnaW5nIGZvY3VzLlxuICpcbiAqIEFkZGl0aW9uYWxseSwgcHJvdmlkZXMgdHlwZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGFkYXB0ZXIgdG8gdGhlIENsb3N1cmVcbiAqIGNvbXBpbGVyLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGFkYXB0ZXIgZm9yIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZSB0byBkZWxlZ2F0ZSB1cGRhdGVzIHRvXG4gKiB0aGUgY29tcG9uZW50IGluIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZS4gU2VlIGFyY2hpdGVjdHVyZSBkb2N1bWVudGF0aW9uXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9jb2RlL2FyY2hpdGVjdHVyZS5tZFxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDTGlzdEFkYXB0ZXIge1xuICAvKiogQHJldHVybiB7bnVtYmVyfSAqL1xuICBnZXRMaXN0SXRlbUNvdW50KCkge31cblxuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfSAqL1xuICBnZXRGb2N1c2VkRWxlbWVudEluZGV4KCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIGF0dHJpYnV0ZSwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlXG4gICAqL1xuICByZW1vdmVBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIGF0dHJpYnV0ZSkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGFkZENsYXNzRm9yRWxlbWVudEluZGV4KGluZGV4LCBjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleChpbmRleCwgY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIGxpc3QgaXRlbSBhdCB0aGUgaW5kZXggc3BlY2lmaWVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICovXG4gIGZvY3VzSXRlbUF0SW5kZXgoaW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRhYmluZGV4IHRvIHRoZSB2YWx1ZSBzcGVjaWZpZWQgZm9yIGFsbCBidXR0b24vYSBlbGVtZW50IGNoaWxkcmVuIG9mXG4gICAqIHRoZSBsaXN0IGl0ZW0gYXQgdGhlIGluZGV4IHNwZWNpZmllZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxpc3RJdGVtSW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRhYkluZGV4VmFsdWVcbiAgICovXG4gIHNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbihsaXN0SXRlbUluZGV4LCB0YWJJbmRleFZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHJhZGlvIGJ1dHRvbiBpcyBwcmVzZW50IGF0IGdpdmVuIGxpc3QgaXRlbSBpbmRleC5cbiAgICovXG4gIGhhc1JhZGlvQXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBjaGVja2JveCBpcyBwcmVzZW50IGF0IGdpdmVuIGxpc3QgaXRlbSBpbmRleC5cbiAgICovXG4gIGhhc0NoZWNrYm94QXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBjaGVja2JveCBpbnNpZGUgYSBsaXN0IGl0ZW0gaXMgY2hlY2tlZC5cbiAgICovXG4gIGlzQ2hlY2tib3hDaGVja2VkQXRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgY2hlY2tlZCBzdGF0dXMgb2YgY2hlY2tib3ggb3IgcmFkaW8gYXQgZ2l2ZW4gbGlzdCBpdGVtIGluZGV4LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0NoZWNrZWRcbiAgICovXG4gIHNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4KGluZGV4LCBpc0NoZWNrZWQpIHt9XG5cbiAgLyoqXG4gICAqIE5vdGlmaWVzIHVzZXIgYWN0aW9uIG9uIGxpc3QgaXRlbS5cbiAgICovXG4gIG5vdGlmeUFjdGlvbihpbmRleCkge31cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIHdoZW4gdGhlIGN1cnJlbnQgZm9jdXNlZCBlbGVtZW50IGlzIGluc2lkZSBsaXN0IHJvb3QuXG4gICAqL1xuICBpc0ZvY3VzSW5zaWRlTGlzdCgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0xpc3RBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgUk9PVDogJ21kYy1saXN0JyxcbiAgTElTVF9JVEVNX0NMQVNTOiAnbWRjLWxpc3QtaXRlbScsXG4gIExJU1RfSVRFTV9TRUxFQ1RFRF9DTEFTUzogJ21kYy1saXN0LWl0ZW0tLXNlbGVjdGVkJyxcbiAgTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTUzogJ21kYy1saXN0LWl0ZW0tLWFjdGl2YXRlZCcsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIEFSSUFfT1JJRU5UQVRJT046ICdhcmlhLW9yaWVudGF0aW9uJyxcbiAgQVJJQV9PUklFTlRBVElPTl9IT1JJWk9OVEFMOiAnaG9yaXpvbnRhbCcsXG4gIEFSSUFfU0VMRUNURUQ6ICdhcmlhLXNlbGVjdGVkJyxcbiAgQVJJQV9DSEVDS0VEOiAnYXJpYS1jaGVja2VkJyxcbiAgQVJJQV9DSEVDS0VEX1JBRElPX1NFTEVDVE9SOiAnW3JvbGU9XCJyYWRpb1wiXVthcmlhLWNoZWNrZWQ9XCJ0cnVlXCJdJyxcbiAgQVJJQV9ST0xFX0NIRUNLQk9YX1NFTEVDVE9SOiAnW3JvbGU9XCJjaGVja2JveFwiXScsXG4gIEFSSUFfQ0hFQ0tFRF9DSEVDS0JPWF9TRUxFQ1RPUjogJ1tyb2xlPVwiY2hlY2tib3hcIl1bYXJpYS1jaGVja2VkPVwidHJ1ZVwiXScsXG4gIFJBRElPX1NFTEVDVE9SOiAnaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6ZGlzYWJsZWQpJyxcbiAgQ0hFQ0tCT1hfU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpkaXNhYmxlZCknLFxuICBDSEVDS0JPWF9SQURJT19TRUxFQ1RPUjogJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmRpc2FibGVkKSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6ZGlzYWJsZWQpJyxcbiAgQ0hJTERfRUxFTUVOVFNfVE9fVE9HR0xFX1RBQklOREVYOiBgLiR7Y3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1N9IGJ1dHRvbjpub3QoOmRpc2FibGVkKSxcbiAgLiR7Y3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1N9IGFgLFxuICBGT0NVU0FCTEVfQ0hJTERfRUxFTUVOVFM6IGAuJHtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU30gYnV0dG9uOm5vdCg6ZGlzYWJsZWQpLCAuJHtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU30gYSxcbiAgLiR7Y3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1N9IGlucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmRpc2FibGVkKSxcbiAgLiR7Y3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1N9IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmRpc2FibGVkKWAsXG4gIEVOQUJMRURfSVRFTVNfU0VMRUNUT1I6ICcubWRjLWxpc3QtaXRlbTpub3QoLm1kYy1saXN0LWl0ZW0tLWRpc2FibGVkKScsXG4gIEFDVElPTl9FVkVOVDogJ01EQ0xpc3Q6YWN0aW9uJyxcbn07XG5cbi8qKiBAdHlwZWRlZiB7bnVtYmVyfCFBcnJheTxudW1iZXI+fSAqL1xubGV0IEluZGV4O1xuXG5leHBvcnQge3N0cmluZ3MsIGNzc0NsYXNzZXMsIEluZGV4fTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENMaXN0QWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtzdHJpbmdzLCBjc3NDbGFzc2VzLCBJbmRleH0gZnJvbSAnLi9jb25zdGFudHMnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbmNvbnN0IEVMRU1FTlRTX0tFWV9BTExPV0VEX0lOID0gWydpbnB1dCcsICdidXR0b24nLCAndGV4dGFyZWEnLCAnc2VsZWN0J107XG5cbmNsYXNzIE1EQ0xpc3RGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDTGlzdEFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuXG4gICAqIHR5cGVzLlxuICAgKiBAcmV0dXJuIHshTURDTGlzdEFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENMaXN0QWRhcHRlcn0gKi8gKHtcbiAgICAgIGdldExpc3RJdGVtQ291bnQ6ICgpID0+IHt9LFxuICAgICAgZ2V0Rm9jdXNlZEVsZW1lbnRJbmRleDogKCkgPT4ge30sXG4gICAgICBzZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXg6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQXR0cmlidXRlRm9yRWxlbWVudEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGFkZENsYXNzRm9yRWxlbWVudEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGZvY3VzSXRlbUF0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuOiAoKSA9PiB7fSxcbiAgICAgIGhhc1JhZGlvQXRJbmRleDogKCkgPT4ge30sXG4gICAgICBoYXNDaGVja2JveEF0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgaXNDaGVja2JveENoZWNrZWRBdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIHNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeUFjdGlvbjogKCkgPT4ge30sXG4gICAgICBpc0ZvY3VzSW5zaWRlTGlzdDogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDTGlzdEFkYXB0ZXI9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENMaXN0Rm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLndyYXBGb2N1c18gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzVmVydGljYWxfID0gdHJ1ZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUluZGV4fSAqL1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8gPSAtMTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPSAtMTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLnVzZUFjdGl2YXRlZENsYXNzXyA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuaXNDaGVja2JveExpc3RfID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5pc1JhZGlvTGlzdF8gPSBmYWxzZTtcbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCkgPT09IDApIHJldHVybjtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0NoZWNrYm94QXRJbmRleCgwKSkge1xuICAgICAgdGhpcy5pc0NoZWNrYm94TGlzdF8gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hZGFwdGVyXy5oYXNSYWRpb0F0SW5kZXgoMCkpIHtcbiAgICAgIHRoaXMuaXNSYWRpb0xpc3RfID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcHJpdmF0ZSB3cmFwRm9jdXNfIHZhcmlhYmxlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAqL1xuICBzZXRXcmFwRm9jdXModmFsdWUpIHtcbiAgICB0aGlzLndyYXBGb2N1c18gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpc1ZlcnRpY2FsXyBwcml2YXRlIHZhcmlhYmxlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAqL1xuICBzZXRWZXJ0aWNhbE9yaWVudGF0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5pc1ZlcnRpY2FsXyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gcHJpdmF0ZSB2YXJpYWJsZS5cbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgc2V0U2luZ2xlU2VsZWN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5pc1NpbmdsZVNlbGVjdGlvbkxpc3RfID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdXNlQWN0aXZhdGVkQ2xhc3NfIHByaXZhdGUgdmFyaWFibGUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQWN0aXZhdGVkXG4gICAqL1xuICBzZXRVc2VBY3RpdmF0ZWRDbGFzcyh1c2VBY3RpdmF0ZWQpIHtcbiAgICB0aGlzLnVzZUFjdGl2YXRlZENsYXNzXyA9IHVzZUFjdGl2YXRlZDtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshSW5kZXh9ICovXG4gIGdldFNlbGVjdGVkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJbmRleF87XG4gIH1cblxuICAvKiogQHBhcmFtIHshSW5kZXh9IGluZGV4ICovXG4gIHNldFNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuaXNJbmRleFZhbGlkXyhpbmRleCkpIHJldHVybjtcblxuICAgIGlmICh0aGlzLmlzQ2hlY2tib3hMaXN0Xykge1xuICAgICAgdGhpcy5zZXRDaGVja2JveEF0SW5kZXhfKC8qKiBAdHlwZSB7IUFycmF5PG51bWJlcj59ICovIChpbmRleCkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc1JhZGlvTGlzdF8pIHtcbiAgICAgIHRoaXMuc2V0UmFkaW9BdEluZGV4XygvKiogQHR5cGUge251bWJlcn0gKi8gKGluZGV4KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U2luZ2xlU2VsZWN0aW9uQXRJbmRleF8oLyoqIEB0eXBlIHtudW1iZXJ9ICovIChpbmRleCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1cyBpbiBoYW5kbGVyIGZvciB0aGUgbGlzdCBpdGVtcy5cbiAgICogQHBhcmFtIGV2dFxuICAgKiBAcGFyYW0ge251bWJlcn0gbGlzdEl0ZW1JbmRleFxuICAgKi9cbiAgaGFuZGxlRm9jdXNJbihldnQsIGxpc3RJdGVtSW5kZXgpIHtcbiAgICBpZiAobGlzdEl0ZW1JbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbihsaXN0SXRlbUluZGV4LCAwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9jdXMgb3V0IGhhbmRsZXIgZm9yIHRoZSBsaXN0IGl0ZW1zLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxpc3RJdGVtSW5kZXhcbiAgICovXG4gIGhhbmRsZUZvY3VzT3V0KGV2dCwgbGlzdEl0ZW1JbmRleCkge1xuICAgIGlmIChsaXN0SXRlbUluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuKGxpc3RJdGVtSW5kZXgsIC0xKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCZXR3ZWVuIEZvY3Vzb3V0ICYgRm9jdXNpbiBzb21lIGJyb3dzZXJzIGRvIG5vdCBoYXZlIGZvY3VzIG9uIGFueSBlbGVtZW50LiBTZXR0aW5nIGEgZGVsYXkgdG8gd2FpdCB0aWxsIHRoZSBmb2N1c1xuICAgICAqIGlzIG1vdmVkIHRvIG5leHQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5hZGFwdGVyXy5pc0ZvY3VzSW5zaWRlTGlzdCgpKSB7XG4gICAgICAgIHRoaXMuc2V0VGFiaW5kZXhUb0ZpcnN0U2VsZWN0ZWRJdGVtXygpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEtleSBoYW5kbGVyIGZvciB0aGUgbGlzdC5cbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNSb290TGlzdEl0ZW1cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxpc3RJdGVtSW5kZXhcbiAgICovXG4gIGhhbmRsZUtleWRvd24oZXZ0LCBpc1Jvb3RMaXN0SXRlbSwgbGlzdEl0ZW1JbmRleCkge1xuICAgIGNvbnN0IGFycm93TGVmdCA9IGV2dC5rZXkgPT09ICdBcnJvd0xlZnQnIHx8IGV2dC5rZXlDb2RlID09PSAzNztcbiAgICBjb25zdCBhcnJvd1VwID0gZXZ0LmtleSA9PT0gJ0Fycm93VXAnIHx8IGV2dC5rZXlDb2RlID09PSAzODtcbiAgICBjb25zdCBhcnJvd1JpZ2h0ID0gZXZ0LmtleSA9PT0gJ0Fycm93UmlnaHQnIHx8IGV2dC5rZXlDb2RlID09PSAzOTtcbiAgICBjb25zdCBhcnJvd0Rvd24gPSBldnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldnQua2V5Q29kZSA9PT0gNDA7XG4gICAgY29uc3QgaXNIb21lID0gZXZ0LmtleSA9PT0gJ0hvbWUnIHx8IGV2dC5rZXlDb2RlID09PSAzNjtcbiAgICBjb25zdCBpc0VuZCA9IGV2dC5rZXkgPT09ICdFbmQnIHx8IGV2dC5rZXlDb2RlID09PSAzNTtcbiAgICBjb25zdCBpc0VudGVyID0gZXZ0LmtleSA9PT0gJ0VudGVyJyB8fCBldnQua2V5Q29kZSA9PT0gMTM7XG4gICAgY29uc3QgaXNTcGFjZSA9IGV2dC5rZXkgPT09ICdTcGFjZScgfHwgZXZ0LmtleUNvZGUgPT09IDMyO1xuXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0Rm9jdXNlZEVsZW1lbnRJbmRleCgpO1xuICAgIGxldCBuZXh0SW5kZXggPSAtMTtcbiAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSkge1xuICAgICAgY3VycmVudEluZGV4ID0gbGlzdEl0ZW1JbmRleDtcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPCAwKSB7XG4gICAgICAgIC8vIElmIHRoaXMgZXZlbnQgZG9lc24ndCBoYXZlIGEgbWRjLWxpc3QtaXRlbSBhbmNlc3RvciBmcm9tIHRoZVxuICAgICAgICAvLyBjdXJyZW50IGxpc3QgKG5vdCBmcm9tIGEgc3VibGlzdCksIHJldHVybiBlYXJseS5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgodGhpcy5pc1ZlcnRpY2FsXyAmJiBhcnJvd0Rvd24pIHx8ICghdGhpcy5pc1ZlcnRpY2FsXyAmJiBhcnJvd1JpZ2h0KSkge1xuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgbmV4dEluZGV4ID0gdGhpcy5mb2N1c05leHRFbGVtZW50KGN1cnJlbnRJbmRleCk7XG4gICAgfSBlbHNlIGlmICgodGhpcy5pc1ZlcnRpY2FsXyAmJiBhcnJvd1VwKSB8fCAoIXRoaXMuaXNWZXJ0aWNhbF8gJiYgYXJyb3dMZWZ0KSkge1xuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgbmV4dEluZGV4ID0gdGhpcy5mb2N1c1ByZXZFbGVtZW50KGN1cnJlbnRJbmRleCk7XG4gICAgfSBlbHNlIGlmIChpc0hvbWUpIHtcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgIG5leHRJbmRleCA9IHRoaXMuZm9jdXNGaXJzdEVsZW1lbnQoKTtcbiAgICB9IGVsc2UgaWYgKGlzRW5kKSB7XG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICBuZXh0SW5kZXggPSB0aGlzLmZvY3VzTGFzdEVsZW1lbnQoKTtcbiAgICB9IGVsc2UgaWYgKGlzRW50ZXIgfHwgaXNTcGFjZSkge1xuICAgICAgaWYgKGlzUm9vdExpc3RJdGVtKSB7XG4gICAgICAgIC8vIFJldHVybiBlYXJseSBpZiBlbnRlciBrZXkgaXMgcHJlc3NlZCBvbiBhbmNob3IgZWxlbWVudCB3aGljaCB0cmlnZ2VycyBzeW50aGV0aWMgTW91c2VFdmVudCBldmVudC5cbiAgICAgICAgaWYgKGV2dC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnICYmIGlzRW50ZXIpIHJldHVybjtcbiAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0YWJsZUxpc3RfKCkpIHtcbiAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkSW5kZXhPbkFjdGlvbl8oY3VycmVudEluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5QWN0aW9uKGN1cnJlbnRJbmRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4XyA9IGN1cnJlbnRJbmRleDtcblxuICAgIGlmIChuZXh0SW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5zZXRUYWJpbmRleEF0SW5kZXhfKG5leHRJbmRleCk7XG4gICAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID0gbmV4dEluZGV4O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGljayBoYW5kbGVyIGZvciB0aGUgbGlzdC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdG9nZ2xlQ2hlY2tib3hcbiAgICovXG4gIGhhbmRsZUNsaWNrKGluZGV4LCB0b2dnbGVDaGVja2JveCkge1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybjtcblxuICAgIGlmICh0aGlzLmlzU2VsZWN0YWJsZUxpc3RfKCkpIHtcbiAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleE9uQWN0aW9uXyhpbmRleCwgdG9nZ2xlQ2hlY2tib3gpO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5QWN0aW9uKGluZGV4KTtcblxuICAgIHRoaXMuc2V0VGFiaW5kZXhBdEluZGV4XyhpbmRleCk7XG4gICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4XyA9IGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgdGhhdCBwcmV2ZW50RGVmYXVsdCBpcyBvbmx5IGNhbGxlZCBpZiB0aGUgY29udGFpbmluZyBlbGVtZW50IGRvZXNuJ3RcbiAgICogY29uc3VtZSB0aGUgZXZlbnQsIGFuZCBpdCB3aWxsIGNhdXNlIGFuIHVuaW50ZW5kZWQgc2Nyb2xsLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBgJHtldnQudGFyZ2V0LnRhZ05hbWV9YC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChFTEVNRU5UU19LRVlfQUxMT1dFRF9JTi5pbmRleE9mKHRhZ05hbWUpID09PSAtMSkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzZXMgdGhlIG5leHQgZWxlbWVudCBvbiB0aGUgbGlzdC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGZvY3VzTmV4dEVsZW1lbnQoaW5kZXgpIHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpO1xuICAgIGxldCBuZXh0SW5kZXggPSBpbmRleCArIDE7XG4gICAgaWYgKG5leHRJbmRleCA+PSBjb3VudCkge1xuICAgICAgaWYgKHRoaXMud3JhcEZvY3VzXykge1xuICAgICAgICBuZXh0SW5kZXggPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGJlY2F1c2UgbGFzdCBpdGVtIGlzIGFscmVhZHkgZm9jdXNlZC5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgobmV4dEluZGV4KTtcblxuICAgIHJldHVybiBuZXh0SW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgcHJldmlvdXMgZWxlbWVudCBvbiB0aGUgbGlzdC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGZvY3VzUHJldkVsZW1lbnQoaW5kZXgpIHtcbiAgICBsZXQgcHJldkluZGV4ID0gaW5kZXggLSAxO1xuICAgIGlmIChwcmV2SW5kZXggPCAwKSB7XG4gICAgICBpZiAodGhpcy53cmFwRm9jdXNfKSB7XG4gICAgICAgIHByZXZJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpIC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBlYXJseSBiZWNhdXNlIGZpcnN0IGl0ZW0gaXMgYWxyZWFkeSBmb2N1c2VkLlxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleChwcmV2SW5kZXgpO1xuXG4gICAgcmV0dXJuIHByZXZJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBmb2N1c0ZpcnN0RWxlbWVudCgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgoMCk7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZm9jdXNMYXN0RWxlbWVudCgpIHtcbiAgICBjb25zdCBsYXN0SW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKSAtIDE7XG4gICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KGxhc3RJbmRleCk7XG4gICAgcmV0dXJuIGxhc3RJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFNpbmdsZVNlbGVjdGlvbkF0SW5kZXhfKGluZGV4KSB7XG4gICAgbGV0IHNlbGVjdGVkQ2xhc3NOYW1lID0gY3NzQ2xhc3Nlcy5MSVNUX0lURU1fU0VMRUNURURfQ0xBU1M7XG4gICAgaWYgKHRoaXMudXNlQWN0aXZhdGVkQ2xhc3NfKSB7XG4gICAgICBzZWxlY3RlZENsYXNzTmFtZSA9IGNzc0NsYXNzZXMuTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTUztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4XyA+PSAwICYmIHRoaXMuc2VsZWN0ZWRJbmRleF8gIT09IGluZGV4KSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleF8sIHNlbGVjdGVkQ2xhc3NOYW1lKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleF8sIHN0cmluZ3MuQVJJQV9TRUxFQ1RFRCwgJ2ZhbHNlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzc0ZvckVsZW1lbnRJbmRleChpbmRleCwgc2VsZWN0ZWRDbGFzc05hbWUpO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfU0VMRUNURUQsICd0cnVlJyk7XG5cbiAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyByYWRpbyBhdCBnaXZlIGluZGV4LiBSYWRpbyBkb2Vzbid0IGNoYW5nZSB0aGUgY2hlY2tlZCBzdGF0ZSBpZiBpdCBpcyBhbHJlYWR5IGNoZWNrZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0UmFkaW9BdEluZGV4XyhpbmRleCkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXgoaW5kZXgsIHRydWUpO1xuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gPj0gMCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4Xywgc3RyaW5ncy5BUklBX0NIRUNLRUQsICdmYWxzZScpO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgJ3RydWUnKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8gPSBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+fSBpbmRleFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0Q2hlY2tib3hBdEluZGV4XyhpbmRleCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCk7IGkrKykge1xuICAgICAgbGV0IGlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgaWYgKGluZGV4LmluZGV4T2YoaSkgPj0gMCkge1xuICAgICAgICBpc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4KGksIGlzQ2hlY2tlZCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpLCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgaXNDaGVja2VkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0VGFiaW5kZXhBdEluZGV4XyhpbmRleCkge1xuICAgIGlmICh0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID09PSAtMSAmJiBpbmRleCAhPT0gMCkge1xuICAgICAgLy8gSWYgbm8gbGlzdCBpdGVtIHdhcyBzZWxlY3RlZCBzZXQgZmlyc3QgbGlzdCBpdGVtJ3MgdGFiaW5kZXggdG8gLTEuXG4gICAgICAvLyBHZW5lcmFsbHksIHRhYmluZGV4IGlzIHNldCB0byAwIG9uIGZpcnN0IGxpc3QgaXRlbSBvZiBsaXN0IHRoYXQgaGFzIG5vIHByZXNlbGVjdGVkIGl0ZW1zLlxuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoMCwgJ3RhYmluZGV4JywgLTEpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mb2N1c2VkSXRlbUluZGV4XyA+PSAwICYmIHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gIT09IGluZGV4KSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCh0aGlzLmZvY3VzZWRJdGVtSW5kZXhfLCAndGFiaW5kZXgnLCAtMSk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsICd0YWJpbmRleCcsIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybiB0cnVlIGlmIGl0IGlzIHNpbmdsZSBzZWxlY3RpbiBsaXN0LCBjaGVja2JveCBsaXN0IG9yIHJhZGlvIGxpc3QuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc1NlbGVjdGFibGVMaXN0XygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1NpbmdsZVNlbGVjdGlvbkxpc3RfIHx8IHRoaXMuaXNDaGVja2JveExpc3RfIHx8IHRoaXMuaXNSYWRpb0xpc3RfO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHNldFRhYmluZGV4VG9GaXJzdFNlbGVjdGVkSXRlbV8oKSB7XG4gICAgbGV0IHRhcmdldEluZGV4ID0gMDtcblxuICAgIGlmICh0aGlzLmlzU2VsZWN0YWJsZUxpc3RfKCkpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3RlZEluZGV4XyA9PT0gJ251bWJlcicgJiYgdGhpcy5zZWxlY3RlZEluZGV4XyAhPT0gLTEpIHtcbiAgICAgICAgdGFyZ2V0SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXhfO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhfIGluc3RhbmNlb2YgQXJyYXkgJiYgdGhpcy5zZWxlY3RlZEluZGV4Xy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRhcmdldEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4Xy5yZWR1Y2UoKGN1cnJlbnRJbmRleCwgbWluSW5kZXgpID0+IE1hdGgubWluKGN1cnJlbnRJbmRleCwgbWluSW5kZXgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFRhYmluZGV4QXRJbmRleF8odGFyZ2V0SW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUluZGV4fSBpbmRleFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNJbmRleFZhbGlkXyhpbmRleCkge1xuICAgIGlmIChpbmRleCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBpZiAoIXRoaXMuaXNDaGVja2JveExpc3RfKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTURDTGlzdEZvdW5kYXRpb246IEFycmF5IG9mIGluZGV4IGlzIG9ubHkgc3VwcG9ydGVkIGZvciBjaGVja2JveCBiYXNlZCBsaXN0Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaW5kZXguc29tZSgoaSkgPT4gdGhpcy5pc0luZGV4SW5SYW5nZV8oaSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKHRoaXMuaXNDaGVja2JveExpc3RfKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTURDTGlzdEZvdW5kYXRpb246IEV4cGVjdGVkIGFycmF5IG9mIGluZGV4IGZvciBjaGVja2JveCBiYXNlZCBsaXN0IGJ1dCBnb3QgbnVtYmVyOiAnICsgaW5kZXgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaXNJbmRleEluUmFuZ2VfKGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzSW5kZXhJblJhbmdlXyhpbmRleCkge1xuICAgIGNvbnN0IGxpc3RTaXplID0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCk7XG4gICAgcmV0dXJuIGluZGV4ID49IDAgJiYgaW5kZXggPCBsaXN0U2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtib29sZWFuPX0gdG9nZ2xlQ2hlY2tib3hcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFNlbGVjdGVkSW5kZXhPbkFjdGlvbl8oaW5kZXgsIHRvZ2dsZUNoZWNrYm94ID0gdHJ1ZSkge1xuICAgIGlmICh0aGlzLmlzQ2hlY2tib3hMaXN0Xykge1xuICAgICAgdGhpcy50b2dnbGVDaGVja2JveEF0SW5kZXhfKGluZGV4LCB0b2dnbGVDaGVja2JveCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHRvZ2dsZUNoZWNrYm94XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0b2dnbGVDaGVja2JveEF0SW5kZXhfKGluZGV4LCB0b2dnbGVDaGVja2JveCkge1xuICAgIGxldCBpc0NoZWNrZWQgPSB0aGlzLmFkYXB0ZXJfLmlzQ2hlY2tib3hDaGVja2VkQXRJbmRleChpbmRleCk7XG5cbiAgICBpZiAodG9nZ2xlQ2hlY2tib3gpIHtcbiAgICAgIGlzQ2hlY2tlZCA9ICFpc0NoZWNrZWQ7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4KGluZGV4LCBpc0NoZWNrZWQpO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgaXNDaGVja2VkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG5cbiAgICAvLyBJZiBub25lIG9mIHRoZSBjaGVja2JveCBpdGVtcyBhcmUgc2VsZWN0ZWQgYW5kIHNlbGVjdGVkSW5kZXggaXMgbm90IGluaXRpYWxpemVkIHRoZW4gcHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gPT09IC0xKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gW107XG4gICAgfVxuXG4gICAgaWYgKGlzQ2hlY2tlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Xy5wdXNoKGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IHRoaXMuc2VsZWN0ZWRJbmRleF8uZmlsdGVyKChpKSA9PiBpICE9PSBpbmRleCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0xpc3RGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBBIFwicG9ueWZpbGxcIiBpcyBhIHBvbHlmaWxsIHRoYXQgZG9lc24ndCBtb2RpZnkgdGhlIGdsb2JhbCBwcm90b3R5cGUgY2hhaW4uXG4gKiBUaGlzIG1ha2VzIHBvbnlmaWxscyBzYWZlciB0aGFuIHRyYWRpdGlvbmFsIHBvbHlmaWxscywgZXNwZWNpYWxseSBmb3IgbGlicmFyaWVzIGxpa2UgTURDLlxuICovXG5cbi8qKlxuICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHs/RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBzZWxlY3Rvcikge1xuICBpZiAoZWxlbWVudC5jbG9zZXN0KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdChzZWxlY3Rvcik7XG4gIH1cblxuICBsZXQgZWwgPSBlbGVtZW50O1xuICB3aGlsZSAoZWwpIHtcbiAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgY29uc3QgbmF0aXZlTWF0Y2hlcyA9IGVsZW1lbnQubWF0Y2hlc1xuICAgIHx8IGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yXG4gICAgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcjtcbiAgcmV0dXJuIG5hdGl2ZU1hdGNoZXMuY2FsbChlbGVtZW50LCBzZWxlY3Rvcik7XG59XG5cbmV4cG9ydCB7Y2xvc2VzdCwgbWF0Y2hlc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IE1EQ0xpc3RGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgTURDTGlzdEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7bWF0Y2hlc30gZnJvbSAnQG1hdGVyaWFsL2RvbS9wb255ZmlsbCc7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIEluZGV4fSBmcm9tICcuL2NvbnN0YW50cyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuLyoqXG4gKiBAZXh0ZW5kcyBNRENDb21wb25lbnQ8IU1EQ0xpc3RGb3VuZGF0aW9uPlxuICovXG5jbGFzcyBNRENMaXN0IGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqIEBwYXJhbSB7Li4uP30gYXJncyAqL1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5oYW5kbGVLZXlkb3duXztcbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLmhhbmRsZUNsaWNrXztcbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLmZvY3VzSW5FdmVudExpc3RlbmVyXztcbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLmZvY3VzT3V0RXZlbnRMaXN0ZW5lcl87XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcmV0dXJuIHshTURDTGlzdH1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgcmV0dXJuIG5ldyBNRENMaXN0KHJvb3QpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25fKTtcbiAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja18pO1xuICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuZm9jdXNJbkV2ZW50TGlzdGVuZXJfKTtcbiAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdGhpcy5mb2N1c091dEV2ZW50TGlzdGVuZXJfKTtcbiAgfVxuXG4gIGluaXRpYWxTeW5jV2l0aERPTSgpIHtcbiAgICB0aGlzLmhhbmRsZUNsaWNrXyA9IHRoaXMuaGFuZGxlQ2xpY2tFdmVudF8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUtleWRvd25fID0gdGhpcy5oYW5kbGVLZXlkb3duRXZlbnRfLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mb2N1c0luRXZlbnRMaXN0ZW5lcl8gPSB0aGlzLmhhbmRsZUZvY3VzSW5FdmVudF8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmZvY3VzT3V0RXZlbnRMaXN0ZW5lcl8gPSB0aGlzLmhhbmRsZUZvY3VzT3V0RXZlbnRfLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duXyk7XG4gICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5mb2N1c0luRXZlbnRMaXN0ZW5lcl8pO1xuICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB0aGlzLmZvY3VzT3V0RXZlbnRMaXN0ZW5lcl8pO1xuICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrXyk7XG4gICAgdGhpcy5sYXlvdXQoKTtcbiAgICB0aGlzLmluaXRpYWxpemVMaXN0VHlwZSgpO1xuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMucm9vdF8uZ2V0QXR0cmlidXRlKHN0cmluZ3MuQVJJQV9PUklFTlRBVElPTik7XG4gICAgdGhpcy52ZXJ0aWNhbCA9IGRpcmVjdGlvbiAhPT0gc3RyaW5ncy5BUklBX09SSUVOVEFUSU9OX0hPUklaT05UQUw7XG5cbiAgICAvLyBMaXN0IGl0ZW1zIG5lZWQgdG8gaGF2ZSBhdCBsZWFzdCB0YWJpbmRleD0tMSB0byBiZSBmb2N1c2FibGUuXG4gICAgW10uc2xpY2UuY2FsbCh0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZGMtbGlzdC1pdGVtOm5vdChbdGFiaW5kZXhdKScpKVxuICAgICAgLmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgICBlbGUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIC0xKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gQ2hpbGQgYnV0dG9uL2EgZWxlbWVudHMgYXJlIG5vdCB0YWJiYWJsZSB1bnRpbCB0aGUgbGlzdCBpdGVtIGlzIGZvY3VzZWQuXG4gICAgW10uc2xpY2UuY2FsbCh0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5GT0NVU0FCTEVfQ0hJTERfRUxFTUVOVFMpKVxuICAgICAgLmZvckVhY2goKGVsZSkgPT4gZWxlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSkpO1xuXG4gICAgdGhpcy5mb3VuZGF0aW9uXy5sYXlvdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggbGlzdCBpdGVtIHRoaXMgZXZlbnQgaXMgdGFyZ2V0dGluZy4gT3IgcmV0dXJucyAtMSBpZlxuICAgKiB0aGVyZSBpcyBubyBsaXN0IGl0ZW1cbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRMaXN0SXRlbUluZGV4XyhldnQpIHtcbiAgICBsZXQgZXZlbnRUYXJnZXQgPSAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqLyAoZXZ0LnRhcmdldCk7XG4gICAgbGV0IGluZGV4ID0gLTE7XG5cbiAgICAvLyBGaW5kIHRoZSBmaXJzdCBhbmNlc3RvciB0aGF0IGlzIGEgbGlzdCBpdGVtIG9yIHRoZSBsaXN0LlxuICAgIHdoaWxlICghZXZlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTKVxuICAgICYmICFldmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5ST09UKSkge1xuICAgICAgZXZlbnRUYXJnZXQgPSBldmVudFRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgaW5kZXggb2YgdGhlIGVsZW1lbnQgaWYgaXQgaXMgYSBsaXN0IGl0ZW0uXG4gICAgaWYgKGV2ZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUykpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5saXN0RWxlbWVudHMuaW5kZXhPZihldmVudFRhcmdldCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZmlndXJlIG91dCB3aGljaCBlbGVtZW50IHdhcyBjbGlja2VkIGJlZm9yZSBzZW5kaW5nIHRoZSBldmVudCB0byB0aGUgZm91bmRhdGlvbi5cbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoYW5kbGVGb2N1c0luRXZlbnRfKGV2dCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRMaXN0SXRlbUluZGV4XyhldnQpO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaGFuZGxlRm9jdXNJbihldnQsIGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggZWxlbWVudCB3YXMgY2xpY2tlZCBiZWZvcmUgc2VuZGluZyB0aGUgZXZlbnQgdG8gdGhlIGZvdW5kYXRpb24uXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlRm9jdXNPdXRFdmVudF8oZXZ0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldExpc3RJdGVtSW5kZXhfKGV2dCk7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVGb2N1c091dChldnQsIGluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggZWxlbWVudCB3YXMgZm9jdXNlZCB3aGVuIGtleWRvd24gZXZlbnQgb2NjdXJyZWQgYmVmb3JlIHNlbmRpbmcgdGhlIGV2ZW50IHRvIHRoZVxuICAgKiBmb3VuZGF0aW9uLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhbmRsZUtleWRvd25FdmVudF8oZXZ0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldExpc3RJdGVtSW5kZXhfKGV2dCk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVLZXlkb3duKGV2dCwgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MpLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZmlndXJlIG91dCB3aGljaCBlbGVtZW50IHdhcyBjbGlja2VkIGJlZm9yZSBzZW5kaW5nIHRoZSBldmVudCB0byB0aGUgZm91bmRhdGlvbi5cbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoYW5kbGVDbGlja0V2ZW50XyhldnQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0TGlzdEl0ZW1JbmRleF8oZXZ0KTtcblxuICAgIC8vIFRvZ2dsZSB0aGUgY2hlY2tib3ggb25seSBpZiBpdCdzIG5vdCB0aGUgdGFyZ2V0IG9mIHRoZSBldmVudCwgb3IgdGhlIGNoZWNrYm94IHdpbGwgaGF2ZSAyIGNoYW5nZSBldmVudHMuXG4gICAgY29uc3QgdG9nZ2xlQ2hlY2tib3ggPSAhbWF0Y2hlcygvKiogQHR5cGUgeyFFbGVtZW50fSAqLyAoZXZ0LnRhcmdldCksIHN0cmluZ3MuQ0hFQ0tCT1hfUkFESU9fU0VMRUNUT1IpO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaGFuZGxlQ2xpY2soaW5kZXgsIHRvZ2dsZUNoZWNrYm94KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHNlbGVjdGVkSW5kZXggdmFsdWUgYmFzZWQgb24gcHJlLXNlbGVjdGVkIGNoZWNrYm94IGxpc3QgaXRlbXMsIHNpbmdsZSBzZWxlY3Rpb24gb3IgcmFkaW8uXG4gICAqL1xuICBpbml0aWFsaXplTGlzdFR5cGUoKSB7XG4gICAgY29uc3QgY2hlY2tib3hMaXN0SXRlbXMgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5BUklBX1JPTEVfQ0hFQ0tCT1hfU0VMRUNUT1IpO1xuICAgIGNvbnN0IHNpbmdsZVNlbGVjdGVkTGlzdEl0ZW0gPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoYC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTU30sXG4gICAgICAgIC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX1NFTEVDVEVEX0NMQVNTfWApO1xuICAgIGNvbnN0IHJhZGlvU2VsZWN0ZWRMaXN0SXRlbSA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvcihzdHJpbmdzLkFSSUFfQ0hFQ0tFRF9SQURJT19TRUxFQ1RPUik7XG5cbiAgICBpZiAoY2hlY2tib3hMaXN0SXRlbXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBwcmVzZWxlY3RlZEl0ZW1zID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuQVJJQV9DSEVDS0VEX0NIRUNLQk9YX1NFTEVDVE9SKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IFtdLm1hcC5jYWxsKHByZXNlbGVjdGVkSXRlbXMsIChsaXN0SXRlbSkgPT4gdGhpcy5saXN0RWxlbWVudHMuaW5kZXhPZihsaXN0SXRlbSkpO1xuICAgIH0gZWxzZSBpZiAoc2luZ2xlU2VsZWN0ZWRMaXN0SXRlbSkge1xuICAgICAgaWYgKHNpbmdsZVNlbGVjdGVkTGlzdEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzZXMuTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTUykpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVc2VBY3RpdmF0ZWRDbGFzcyh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zaW5nbGVTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5saXN0RWxlbWVudHMuaW5kZXhPZihzaW5nbGVTZWxlY3RlZExpc3RJdGVtKTtcbiAgICB9IGVsc2UgaWYgKHJhZGlvU2VsZWN0ZWRMaXN0SXRlbSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5saXN0RWxlbWVudHMuaW5kZXhPZihyYWRpb1NlbGVjdGVkTGlzdEl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlICovXG4gIHNldCB2ZXJ0aWNhbCh2YWx1ZSkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VmVydGljYWxPcmllbnRhdGlvbih2YWx1ZSk7XG4gIH1cblxuICAvKiogQHJldHVybiBBcnJheTwhRWxlbWVudD4qL1xuICBnZXQgbGlzdEVsZW1lbnRzKCkge1xuICAgIHJldHVybiBbXS5zbGljZS5jYWxsKHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkVOQUJMRURfSVRFTVNfU0VMRUNUT1IpKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlICovXG4gIHNldCB3cmFwRm9jdXModmFsdWUpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldFdyYXBGb2N1cyh2YWx1ZSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSBpc1NpbmdsZVNlbGVjdGlvbkxpc3QgKi9cbiAgc2V0IHNpbmdsZVNlbGVjdGlvbihpc1NpbmdsZVNlbGVjdGlvbkxpc3QpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldFNpbmdsZVNlbGVjdGlvbihpc1NpbmdsZVNlbGVjdGlvbkxpc3QpO1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFJbmRleH0gKi9cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uZ2V0U2VsZWN0ZWRJbmRleCgpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7IUluZGV4fSBpbmRleCAqL1xuICBzZXQgc2VsZWN0ZWRJbmRleChpbmRleCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gIH1cblxuICAvKiogQHJldHVybiB7IU1EQ0xpc3RGb3VuZGF0aW9ufSAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE1EQ0xpc3RGb3VuZGF0aW9uKC8qKiBAdHlwZSB7IU1EQ0xpc3RBZGFwdGVyfSAqLyAoT2JqZWN0LmFzc2lnbih7XG4gICAgICBnZXRMaXN0SXRlbUNvdW50OiAoKSA9PiB0aGlzLmxpc3RFbGVtZW50cy5sZW5ndGgsXG4gICAgICBnZXRGb2N1c2VkRWxlbWVudEluZGV4OiAoKSA9PiB0aGlzLmxpc3RFbGVtZW50cy5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLFxuICAgICAgc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4OiAoaW5kZXgsIGF0dHIsIHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVtb3ZlQXR0cmlidXRlRm9yRWxlbWVudEluZGV4OiAoaW5kZXgsIGF0dHIpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFkZENsYXNzRm9yRWxlbWVudEluZGV4OiAoaW5kZXgsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVtb3ZlQ2xhc3NGb3JFbGVtZW50SW5kZXg6IChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmb2N1c0l0ZW1BdEluZGV4OiAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW46IChsaXN0SXRlbUluZGV4LCB0YWJJbmRleFZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmxpc3RFbGVtZW50c1tsaXN0SXRlbUluZGV4XTtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW1DaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuQ0hJTERfRUxFTUVOVFNfVE9fVE9HR0xFX1RBQklOREVYKSk7XG4gICAgICAgIGxpc3RJdGVtQ2hpbGRyZW4uZm9yRWFjaCgoZWxlKSA9PiBlbGUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRhYkluZGV4VmFsdWUpKTtcbiAgICAgIH0sXG4gICAgICBoYXNDaGVja2JveEF0SW5kZXg6IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgcmV0dXJuICEhbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcihzdHJpbmdzLkNIRUNLQk9YX1NFTEVDVE9SKTtcbiAgICAgIH0sXG4gICAgICBoYXNSYWRpb0F0SW5kZXg6IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgcmV0dXJuICEhbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcihzdHJpbmdzLlJBRElPX1NFTEVDVE9SKTtcbiAgICAgIH0sXG4gICAgICBpc0NoZWNrYm94Q2hlY2tlZEF0SW5kZXg6IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgY29uc3QgdG9nZ2xlRWwgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuQ0hFQ0tCT1hfU0VMRUNUT1IpO1xuICAgICAgICByZXR1cm4gdG9nZ2xlRWwuY2hlY2tlZDtcbiAgICAgIH0sXG4gICAgICBzZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleDogKGluZGV4LCBpc0NoZWNrZWQpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSB0aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgIGNvbnN0IHRvZ2dsZUVsID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcihzdHJpbmdzLkNIRUNLQk9YX1JBRElPX1NFTEVDVE9SKTtcbiAgICAgICAgdG9nZ2xlRWwuY2hlY2tlZCA9IGlzQ2hlY2tlZDtcblxuICAgICAgICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICBldmVudC5pbml0RXZlbnQoJ2NoYW5nZScsIHRydWUsIHRydWUpO1xuICAgICAgICB0b2dnbGVFbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH0sXG4gICAgICBub3RpZnlBY3Rpb246IChpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoc3RyaW5ncy5BQ1RJT05fRVZFTlQsIGluZGV4LCAvKiogc2hvdWxkQnViYmxlICovIHRydWUpO1xuICAgICAgfSxcbiAgICAgIGlzRm9jdXNJbnNpZGVMaXN0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3RfLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgfSxcbiAgICB9KSkpO1xuICB9XG59XG5cbmV4cG9ydCB7TURDTGlzdCwgTURDTGlzdEZvdW5kYXRpb259O1xuIiwidmFyIGNhbmRpZGF0ZVNlbGVjdG9ycyA9IFtcbiAgJ2lucHV0JyxcbiAgJ3NlbGVjdCcsXG4gICd0ZXh0YXJlYScsXG4gICdhW2hyZWZdJyxcbiAgJ2J1dHRvbicsXG4gICdbdGFiaW5kZXhdJyxcbiAgJ2F1ZGlvW2NvbnRyb2xzXScsXG4gICd2aWRlb1tjb250cm9sc10nLFxuICAnW2NvbnRlbnRlZGl0YWJsZV06bm90KFtjb250ZW50ZWRpdGFibGU9XCJmYWxzZVwiXSknLFxuXTtcbnZhciBjYW5kaWRhdGVTZWxlY3RvciA9IGNhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJyk7XG5cbnZhciBtYXRjaGVzID0gdHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnXG4gID8gZnVuY3Rpb24gKCkge31cbiAgOiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcblxuZnVuY3Rpb24gdGFiYmFibGUoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIGVsZW1lbnREb2N1bWVudCA9IGVsLm93bmVyRG9jdW1lbnQgfHwgZWw7XG4gIHZhciByZWd1bGFyVGFiYmFibGVzID0gW107XG4gIHZhciBvcmRlcmVkVGFiYmFibGVzID0gW107XG5cbiAgdmFyIHVudG91Y2hhYmlsaXR5Q2hlY2tlciA9IG5ldyBVbnRvdWNoYWJpbGl0eUNoZWNrZXIoZWxlbWVudERvY3VtZW50KTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKGNhbmRpZGF0ZVNlbGVjdG9yKTtcblxuICBpZiAob3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyKSB7XG4gICAgaWYgKG1hdGNoZXMuY2FsbChlbCwgY2FuZGlkYXRlU2VsZWN0b3IpKSB7XG4gICAgICBjYW5kaWRhdGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGNhbmRpZGF0ZXMpO1xuICAgICAgY2FuZGlkYXRlcy51bnNoaWZ0KGVsKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaSwgY2FuZGlkYXRlLCBjYW5kaWRhdGVUYWJpbmRleDtcbiAgZm9yIChpID0gMDsgaSA8IGNhbmRpZGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjYW5kaWRhdGUgPSBjYW5kaWRhdGVzW2ldO1xuXG4gICAgaWYgKCFpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUoY2FuZGlkYXRlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpKSBjb250aW51ZTtcblxuICAgIGNhbmRpZGF0ZVRhYmluZGV4ID0gZ2V0VGFiaW5kZXgoY2FuZGlkYXRlKTtcbiAgICBpZiAoY2FuZGlkYXRlVGFiaW5kZXggPT09IDApIHtcbiAgICAgIHJlZ3VsYXJUYWJiYWJsZXMucHVzaChjYW5kaWRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcmRlcmVkVGFiYmFibGVzLnB1c2goe1xuICAgICAgICBkb2N1bWVudE9yZGVyOiBpLFxuICAgICAgICB0YWJJbmRleDogY2FuZGlkYXRlVGFiaW5kZXgsXG4gICAgICAgIG5vZGU6IGNhbmRpZGF0ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0YWJiYWJsZU5vZGVzID0gb3JkZXJlZFRhYmJhYmxlc1xuICAgIC5zb3J0KHNvcnRPcmRlcmVkVGFiYmFibGVzKVxuICAgIC5tYXAoZnVuY3Rpb24oYSkgeyByZXR1cm4gYS5ub2RlIH0pXG4gICAgLmNvbmNhdChyZWd1bGFyVGFiYmFibGVzKTtcblxuICByZXR1cm4gdGFiYmFibGVOb2Rlcztcbn1cblxudGFiYmFibGUuaXNUYWJiYWJsZSA9IGlzVGFiYmFibGU7XG50YWJiYWJsZS5pc0ZvY3VzYWJsZSA9IGlzRm9jdXNhYmxlO1xuXG5mdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKSB7XG4gIGlmIChcbiAgICAhaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpXG4gICAgfHwgaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpXG4gICAgfHwgZ2V0VGFiaW5kZXgobm9kZSkgPCAwXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNUYWJiYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpIHtcbiAgaWYgKCFub2RlKSB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBjYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKTtcbn1cblxuZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpIHtcbiAgdW50b3VjaGFiaWxpdHlDaGVja2VyID0gdW50b3VjaGFiaWxpdHlDaGVja2VyIHx8IG5ldyBVbnRvdWNoYWJpbGl0eUNoZWNrZXIobm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGUpO1xuICBpZiAoXG4gICAgbm9kZS5kaXNhYmxlZFxuICAgIHx8IGlzSGlkZGVuSW5wdXQobm9kZSlcbiAgICB8fCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIuaXNVbnRvdWNoYWJsZShub2RlKVxuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbnZhciBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvciA9IGNhbmRpZGF0ZVNlbGVjdG9ycy5jb25jYXQoJ2lmcmFtZScpLmpvaW4oJywnKTtcbmZ1bmN0aW9uIGlzRm9jdXNhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcikge1xuICBpZiAoIW5vZGUpIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFiaW5kZXgobm9kZSkge1xuICB2YXIgdGFiaW5kZXhBdHRyID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwKTtcbiAgaWYgKCFpc05hTih0YWJpbmRleEF0dHIpKSByZXR1cm4gdGFiaW5kZXhBdHRyO1xuICAvLyBCcm93c2VycyBkbyBub3QgcmV0dXJuIGB0YWJJbmRleGAgY29ycmVjdGx5IGZvciBjb250ZW50RWRpdGFibGUgbm9kZXM7XG4gIC8vIHNvIGlmIHRoZXkgZG9uJ3QgaGF2ZSBhIHRhYmluZGV4IGF0dHJpYnV0ZSBzcGVjaWZpY2FsbHkgc2V0LCBhc3N1bWUgaXQncyAwLlxuICBpZiAoaXNDb250ZW50RWRpdGFibGUobm9kZSkpIHJldHVybiAwO1xuICByZXR1cm4gbm9kZS50YWJJbmRleDtcbn1cblxuZnVuY3Rpb24gc29ydE9yZGVyZWRUYWJiYWJsZXMoYSwgYikge1xuICByZXR1cm4gYS50YWJJbmRleCA9PT0gYi50YWJJbmRleCA/IGEuZG9jdW1lbnRPcmRlciAtIGIuZG9jdW1lbnRPcmRlciA6IGEudGFiSW5kZXggLSBiLnRhYkluZGV4O1xufVxuXG4vLyBBcnJheS5wcm90b3R5cGUuZmluZCBub3QgYXZhaWxhYmxlIGluIElFLlxuZnVuY3Rpb24gZmluZChsaXN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJlZGljYXRlKGxpc3RbaV0pKSByZXR1cm4gbGlzdFtpXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0NvbnRlbnRFZGl0YWJsZShub2RlKSB7XG4gIHJldHVybiBub2RlLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnO1xufVxuXG5mdW5jdGlvbiBpc0lucHV0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJztcbn1cblxuZnVuY3Rpb24gaXNIaWRkZW5JbnB1dChub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ2hpZGRlbic7XG59XG5cbmZ1bmN0aW9uIGlzUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdyYWRpbyc7XG59XG5cbmZ1bmN0aW9uIGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc1JhZGlvKG5vZGUpICYmICFpc1RhYmJhYmxlUmFkaW8obm9kZSk7XG59XG5cbmZ1bmN0aW9uIGdldENoZWNrZWRSYWRpbyhub2Rlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5vZGVzW2ldLmNoZWNrZWQpIHtcbiAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNUYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHJldHVybiB0cnVlO1xuICAvLyBUaGlzIHdvbid0IGFjY291bnQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgeW91IGhhdmUgcmFkaW8gZ3JvdXBzIHdpdGggdGhlIHNhbWVcbiAgLy8gaW4gc2VwYXJhdGUgZm9ybXMgb24gdGhlIHNhbWUgcGFnZS5cbiAgdmFyIHJhZGlvU2V0ID0gbm9kZS5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJyArIG5vZGUubmFtZSArICdcIl0nKTtcbiAgdmFyIGNoZWNrZWQgPSBnZXRDaGVja2VkUmFkaW8ocmFkaW9TZXQpO1xuICByZXR1cm4gIWNoZWNrZWQgfHwgY2hlY2tlZCA9PT0gbm9kZTtcbn1cblxuLy8gQW4gZWxlbWVudCBpcyBcInVudG91Y2hhYmxlXCIgaWYgKml0IG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzKiBoYXNcbi8vIGB2aXNpYmlsaXR5OiBoaWRkZW5gIG9yIGBkaXNwbGF5OiBub25lYC5cbmZ1bmN0aW9uIFVudG91Y2hhYmlsaXR5Q2hlY2tlcihlbGVtZW50RG9jdW1lbnQpIHtcbiAgdGhpcy5kb2MgPSBlbGVtZW50RG9jdW1lbnQ7XG4gIC8vIE5vZGUgY2FjaGUgbXVzdCBiZSByZWZyZXNoZWQgb24gZXZlcnkgY2hlY2ssIGluIGNhc2VcbiAgLy8gdGhlIGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQgaGFzIGNoYW5nZWQuIFRoZSBjYWNoZSBjb250YWlucyB0dXBsZXNcbiAgLy8gbWFwcGluZyBub2RlcyB0byB0aGVpciBib29sZWFuIHJlc3VsdC5cbiAgdGhpcy5jYWNoZSA9IFtdO1xufVxuXG4vLyBnZXRDb21wdXRlZFN0eWxlIGFjY3VyYXRlbHkgcmVmbGVjdHMgYHZpc2liaWxpdHk6IGhpZGRlbmAgb2YgYW5jZXN0b3JzXG4vLyBidXQgbm90IGBkaXNwbGF5OiBub25lYCwgc28gd2UgbmVlZCB0byByZWN1cnNpdmVseSBjaGVjayBwYXJlbnRzLlxuVW50b3VjaGFiaWxpdHlDaGVja2VyLnByb3RvdHlwZS5oYXNEaXNwbGF5Tm9uZSA9IGZ1bmN0aW9uIGhhc0Rpc3BsYXlOb25lKG5vZGUsIG5vZGVDb21wdXRlZFN0eWxlKSB7XG4gIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gU2VhcmNoIGZvciBhIGNhY2hlZCByZXN1bHQuXG4gICAgdmFyIGNhY2hlZCA9IGZpbmQodGhpcy5jYWNoZSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0gPT09IG5vZGU7XG4gICAgfSk7XG4gICAgaWYgKGNhY2hlZCkgcmV0dXJuIGNhY2hlZFsxXTtcblxuICAgIG5vZGVDb21wdXRlZFN0eWxlID0gbm9kZUNvbXB1dGVkU3R5bGUgfHwgdGhpcy5kb2MuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblxuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICAgIGlmIChub2RlQ29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaGFzRGlzcGxheU5vbmUobm9kZS5wYXJlbnROb2RlKTtcbiAgICB9XG5cbiAgICB0aGlzLmNhY2hlLnB1c2goW25vZGUsIHJlc3VsdF0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuVW50b3VjaGFiaWxpdHlDaGVja2VyLnByb3RvdHlwZS5pc1VudG91Y2hhYmxlID0gZnVuY3Rpb24gaXNVbnRvdWNoYWJsZShub2RlKSB7XG4gIGlmIChub2RlID09PSB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQpIHJldHVybiBmYWxzZTtcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSB0aGlzLmRvYy5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBpZiAodGhpcy5oYXNEaXNwbGF5Tm9uZShub2RlLCBjb21wdXRlZFN0eWxlKSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBjb21wdXRlZFN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYmJhYmxlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cbiIsInZhciB0YWJiYWJsZSA9IHJlcXVpcmUoJ3RhYmJhYmxlJyk7XG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpO1xuXG52YXIgYWN0aXZlRm9jdXNUcmFwcyA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHRyYXBRdWV1ZSA9IFtdO1xuICByZXR1cm4ge1xuICAgIGFjdGl2YXRlVHJhcDogZnVuY3Rpb24odHJhcCkge1xuICAgICAgaWYgKHRyYXBRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBhY3RpdmVUcmFwID0gdHJhcFF1ZXVlW3RyYXBRdWV1ZS5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGFjdGl2ZVRyYXAgIT09IHRyYXApIHtcbiAgICAgICAgICBhY3RpdmVUcmFwLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHRyYXBJbmRleCA9IHRyYXBRdWV1ZS5pbmRleE9mKHRyYXApO1xuICAgICAgaWYgKHRyYXBJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdHJhcFF1ZXVlLnB1c2godHJhcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBtb3ZlIHRoaXMgZXhpc3RpbmcgdHJhcCB0byB0aGUgZnJvbnQgb2YgdGhlIHF1ZXVlXG4gICAgICAgIHRyYXBRdWV1ZS5zcGxpY2UodHJhcEluZGV4LCAxKTtcbiAgICAgICAgdHJhcFF1ZXVlLnB1c2godHJhcCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRlYWN0aXZhdGVUcmFwOiBmdW5jdGlvbih0cmFwKSB7XG4gICAgICB2YXIgdHJhcEluZGV4ID0gdHJhcFF1ZXVlLmluZGV4T2YodHJhcCk7XG4gICAgICBpZiAodHJhcEluZGV4ICE9PSAtMSkge1xuICAgICAgICB0cmFwUXVldWUuc3BsaWNlKHRyYXBJbmRleCwgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmFwUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICB0cmFwUXVldWVbdHJhcFF1ZXVlLmxlbmd0aCAtIDFdLnVucGF1c2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KSgpO1xuXG5mdW5jdGlvbiBmb2N1c1RyYXAoZWxlbWVudCwgdXNlck9wdGlvbnMpIHtcbiAgdmFyIGRvYyA9IGRvY3VtZW50O1xuICB2YXIgY29udGFpbmVyID1cbiAgICB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBkb2MucXVlcnlTZWxlY3RvcihlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgdmFyIGNvbmZpZyA9IHh0ZW5kKFxuICAgIHtcbiAgICAgIHJldHVybkZvY3VzT25EZWFjdGl2YXRlOiB0cnVlLFxuICAgICAgZXNjYXBlRGVhY3RpdmF0ZXM6IHRydWVcbiAgICB9LFxuICAgIHVzZXJPcHRpb25zXG4gICk7XG5cbiAgdmFyIHN0YXRlID0ge1xuICAgIGZpcnN0VGFiYmFibGVOb2RlOiBudWxsLFxuICAgIGxhc3RUYWJiYWJsZU5vZGU6IG51bGwsXG4gICAgbm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uOiBudWxsLFxuICAgIG1vc3RSZWNlbnRseUZvY3VzZWROb2RlOiBudWxsLFxuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgcGF1c2VkOiBmYWxzZVxuICB9O1xuXG4gIHZhciB0cmFwID0ge1xuICAgIGFjdGl2YXRlOiBhY3RpdmF0ZSxcbiAgICBkZWFjdGl2YXRlOiBkZWFjdGl2YXRlLFxuICAgIHBhdXNlOiBwYXVzZSxcbiAgICB1bnBhdXNlOiB1bnBhdXNlXG4gIH07XG5cbiAgcmV0dXJuIHRyYXA7XG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgaWYgKHN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuXG4gICAgc3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICBzdGF0ZS5ub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24gPSBkb2MuYWN0aXZlRWxlbWVudDtcblxuICAgIHZhciBvbkFjdGl2YXRlID1cbiAgICAgIGFjdGl2YXRlT3B0aW9ucyAmJiBhY3RpdmF0ZU9wdGlvbnMub25BY3RpdmF0ZVxuICAgICAgICA/IGFjdGl2YXRlT3B0aW9ucy5vbkFjdGl2YXRlXG4gICAgICAgIDogY29uZmlnLm9uQWN0aXZhdGU7XG4gICAgaWYgKG9uQWN0aXZhdGUpIHtcbiAgICAgIG9uQWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYWN0aXZhdGUoZGVhY3RpdmF0ZU9wdGlvbnMpIHtcbiAgICBpZiAoIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgc3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG5cbiAgICBhY3RpdmVGb2N1c1RyYXBzLmRlYWN0aXZhdGVUcmFwKHRyYXApO1xuXG4gICAgdmFyIG9uRGVhY3RpdmF0ZSA9XG4gICAgICBkZWFjdGl2YXRlT3B0aW9ucyAmJiBkZWFjdGl2YXRlT3B0aW9ucy5vbkRlYWN0aXZhdGUgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGRlYWN0aXZhdGVPcHRpb25zLm9uRGVhY3RpdmF0ZVxuICAgICAgICA6IGNvbmZpZy5vbkRlYWN0aXZhdGU7XG4gICAgaWYgKG9uRGVhY3RpdmF0ZSkge1xuICAgICAgb25EZWFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgdmFyIHJldHVybkZvY3VzID1cbiAgICAgIGRlYWN0aXZhdGVPcHRpb25zICYmIGRlYWN0aXZhdGVPcHRpb25zLnJldHVybkZvY3VzICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBkZWFjdGl2YXRlT3B0aW9ucy5yZXR1cm5Gb2N1c1xuICAgICAgICA6IGNvbmZpZy5yZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTtcbiAgICBpZiAocmV0dXJuRm9jdXMpIHtcbiAgICAgIGRlbGF5KGZ1bmN0aW9uKCkge1xuICAgICAgICB0cnlGb2N1cyhzdGF0ZS5ub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICBpZiAoc3RhdGUucGF1c2VkIHx8ICFzdGF0ZS5hY3RpdmUpIHJldHVybjtcbiAgICBzdGF0ZS5wYXVzZWQgPSB0cnVlO1xuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5wYXVzZSgpIHtcbiAgICBpZiAoIXN0YXRlLnBhdXNlZCB8fCAhc3RhdGUuYWN0aXZlKSByZXR1cm47XG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgYWRkTGlzdGVuZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIC8vIFRoZXJlIGNhbiBiZSBvbmx5IG9uZSBsaXN0ZW5pbmcgZm9jdXMgdHJhcCBhdCBhIHRpbWVcbiAgICBhY3RpdmVGb2N1c1RyYXBzLmFjdGl2YXRlVHJhcCh0cmFwKTtcblxuICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcblxuICAgIC8vIERlbGF5IGVuc3VyZXMgdGhhdCB0aGUgZm9jdXNlZCBlbGVtZW50IGRvZXNuJ3QgY2FwdHVyZSB0aGUgZXZlbnRcbiAgICAvLyB0aGF0IGNhdXNlZCB0aGUgZm9jdXMgdHJhcCBhY3RpdmF0aW9uLlxuICAgIGRlbGF5KGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICB9KTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGNoZWNrRm9jdXNJbiwgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDbGljaywgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGVja0tleSwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBpZiAoIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBjaGVja0ZvY3VzSW4sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2ssIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXksIHRydWUpO1xuXG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXROb2RlRm9yT3B0aW9uKG9wdGlvbk5hbWUpIHtcbiAgICB2YXIgb3B0aW9uVmFsdWUgPSBjb25maWdbb3B0aW9uTmFtZV07XG4gICAgdmFyIG5vZGUgPSBvcHRpb25WYWx1ZTtcbiAgICBpZiAoIW9wdGlvblZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5vZGUgPSBkb2MucXVlcnlTZWxlY3RvcihvcHRpb25WYWx1ZSk7XG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgJyArIG9wdGlvbk5hbWUgKyAnYCByZWZlcnMgdG8gbm8ga25vd24gbm9kZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBub2RlID0gb3B0aW9uVmFsdWUoKTtcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2AnICsgb3B0aW9uTmFtZSArICdgIGRpZCBub3QgcmV0dXJuIGEgbm9kZScpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEluaXRpYWxGb2N1c05vZGUoKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKGdldE5vZGVGb3JPcHRpb24oJ2luaXRpYWxGb2N1cycpICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gZ2V0Tm9kZUZvck9wdGlvbignaW5pdGlhbEZvY3VzJyk7XG4gICAgfSBlbHNlIGlmIChjb250YWluZXIuY29udGFpbnMoZG9jLmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBub2RlID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUgPSBzdGF0ZS5maXJzdFRhYmJhYmxlTm9kZSB8fCBnZXROb2RlRm9yT3B0aW9uKCdmYWxsYmFja0ZvY3VzJyk7XG4gICAgfVxuXG4gICAgaWYgKCFub2RlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiWW91IGNhbid0IGhhdmUgYSBmb2N1cy10cmFwIHdpdGhvdXQgYXQgbGVhc3Qgb25lIGZvY3VzYWJsZSBlbGVtZW50XCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICAvLyBUaGlzIG5lZWRzIHRvIGJlIGRvbmUgb24gbW91c2Vkb3duIGFuZCB0b3VjaHN0YXJ0IGluc3RlYWQgb2YgY2xpY2tcbiAgLy8gc28gdGhhdCBpdCBwcmVjZWRlcyB0aGUgZm9jdXMgZXZlbnQuXG4gIGZ1bmN0aW9uIGNoZWNrUG9pbnRlckRvd24oZSkge1xuICAgIGlmIChjb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpKSByZXR1cm47XG4gICAgaWYgKGNvbmZpZy5jbGlja091dHNpZGVEZWFjdGl2YXRlcykge1xuICAgICAgZGVhY3RpdmF0ZSh7XG4gICAgICAgIHJldHVybkZvY3VzOiAhdGFiYmFibGUuaXNGb2N1c2FibGUoZS50YXJnZXQpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEluIGNhc2UgZm9jdXMgZXNjYXBlcyB0aGUgdHJhcCBmb3Igc29tZSBzdHJhbmdlIHJlYXNvbiwgcHVsbCBpdCBiYWNrIGluLlxuICBmdW5jdGlvbiBjaGVja0ZvY3VzSW4oZSkge1xuICAgIC8vIEluIEZpcmVmb3ggd2hlbiB5b3UgVGFiIG91dCBvZiBhbiBpZnJhbWUgdGhlIERvY3VtZW50IGlzIGJyaWVmbHkgZm9jdXNlZC5cbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSB8fCBlLnRhcmdldCBpbnN0YW5jZW9mIERvY3VtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgdHJ5Rm9jdXMoc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgfHwgZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrS2V5KGUpIHtcbiAgICBpZiAoY29uZmlnLmVzY2FwZURlYWN0aXZhdGVzICE9PSBmYWxzZSAmJiBpc0VzY2FwZUV2ZW50KGUpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkZWFjdGl2YXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc1RhYkV2ZW50KGUpKSB7XG4gICAgICBjaGVja1RhYihlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICAvLyBIaWphY2sgVGFiIGV2ZW50cyBvbiB0aGUgZmlyc3QgYW5kIGxhc3QgZm9jdXNhYmxlIG5vZGVzIG9mIHRoZSB0cmFwLFxuICAvLyBpbiBvcmRlciB0byBwcmV2ZW50IGZvY3VzIGZyb20gZXNjYXBpbmcuIElmIGl0IGVzY2FwZXMgZm9yIGV2ZW4gYVxuICAvLyBtb21lbnQgaXQgY2FuIGVuZCB1cCBzY3JvbGxpbmcgdGhlIHBhZ2UgYW5kIGNhdXNpbmcgY29uZnVzaW9uIHNvIHdlXG4gIC8vIGtpbmQgb2YgbmVlZCB0byBjYXB0dXJlIHRoZSBhY3Rpb24gYXQgdGhlIGtleWRvd24gcGhhc2UuXG4gIGZ1bmN0aW9uIGNoZWNrVGFiKGUpIHtcbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgaWYgKGUuc2hpZnRLZXkgJiYgZS50YXJnZXQgPT09IHN0YXRlLmZpcnN0VGFiYmFibGVOb2RlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0cnlGb2N1cyhzdGF0ZS5sYXN0VGFiYmFibGVOb2RlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFlLnNoaWZ0S2V5ICYmIGUudGFyZ2V0ID09PSBzdGF0ZS5sYXN0VGFiYmFibGVOb2RlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0cnlGb2N1cyhzdGF0ZS5maXJzdFRhYmJhYmxlTm9kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tDbGljayhlKSB7XG4gICAgaWYgKGNvbmZpZy5jbGlja091dHNpZGVEZWFjdGl2YXRlcykgcmV0dXJuO1xuICAgIGlmIChjb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpKSByZXR1cm47XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVUYWJiYWJsZU5vZGVzKCkge1xuICAgIHZhciB0YWJiYWJsZU5vZGVzID0gdGFiYmFibGUoY29udGFpbmVyKTtcbiAgICBzdGF0ZS5maXJzdFRhYmJhYmxlTm9kZSA9IHRhYmJhYmxlTm9kZXNbMF0gfHwgZ2V0SW5pdGlhbEZvY3VzTm9kZSgpO1xuICAgIHN0YXRlLmxhc3RUYWJiYWJsZU5vZGUgPVxuICAgICAgdGFiYmFibGVOb2Rlc1t0YWJiYWJsZU5vZGVzLmxlbmd0aCAtIDFdIHx8IGdldEluaXRpYWxGb2N1c05vZGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeUZvY3VzKG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gZG9jLmFjdGl2ZUVsZW1lbnQpIHJldHVybjtcbiAgICBpZiAoIW5vZGUgfHwgIW5vZGUuZm9jdXMpIHtcbiAgICAgIHRyeUZvY3VzKGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbm9kZS5mb2N1cygpO1xuICAgIHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlID0gbm9kZTtcbiAgICBpZiAoaXNTZWxlY3RhYmxlSW5wdXQobm9kZSkpIHtcbiAgICAgIG5vZGUuc2VsZWN0KCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzU2VsZWN0YWJsZUlucHV0KG5vZGUpIHtcbiAgcmV0dXJuIChcbiAgICBub2RlLnRhZ05hbWUgJiZcbiAgICBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0JyAmJlxuICAgIHR5cGVvZiBub2RlLnNlbGVjdCA9PT0gJ2Z1bmN0aW9uJ1xuICApO1xufVxuXG5mdW5jdGlvbiBpc0VzY2FwZUV2ZW50KGUpIHtcbiAgcmV0dXJuIGUua2V5ID09PSAnRXNjYXBlJyB8fCBlLmtleSA9PT0gJ0VzYycgfHwgZS5rZXlDb2RlID09PSAyNztcbn1cblxuZnVuY3Rpb24gaXNUYWJFdmVudChlKSB7XG4gIHJldHVybiBlLmtleSA9PT0gJ1RhYicgfHwgZS5rZXlDb2RlID09PSA5O1xufVxuXG5mdW5jdGlvbiBkZWxheShmbikge1xuICByZXR1cm4gc2V0VGltZW91dChmbiwgMCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZm9jdXNUcmFwO1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxhc2lkZSByZWY9XCJkcmF3ZXJcIiA6Y2xhc3M9XCJjbGFzc2VzXCIgY2xhc3M9XCJtZGMtZHJhd2VyIG1kYy1kcmF3ZXItLW1vZGFsXCI+XG4gICAgICA8c2xvdCB2LWlmPVwiJHNsb3RzWydoZWFkZXInXVwiIG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+XG4gICAgICA8IS0tIDxkaXYgdi1pZj1cIiRzbG90c1snaGVhZGVyJ11cIiBjbGFzcz1cIm1kYy1kcmF3ZXJfX2hlYWRlclwiPjw8L2Rpdj4gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwibWRjLWRyYXdlcl9fY29udGVudFwiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgICA8L2FzaWRlPlxuICAgIDxkaXYgY2xhc3M9XCJtZGMtZHJhd2VyLXNjcmltXCI+PC9kaXY+XG5cbiAgICA8ZGl2IHYtaWY9XCJ0b29sYmFyU3BhY2VyXCIgY2xhc3M9XCJtZGMtdG9wLWFwcC1iYXItLWZpeGVkLWFkanVzdFwiIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2RyYXdlci9kaXNtaXNzaWJsZS9mb3VuZGF0aW9uJ1xuaW1wb3J0IE1EQ01vZGFsRHJhd2VyRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvZHJhd2VyL21vZGFsL2ZvdW5kYXRpb24nXG5pbXBvcnQgeyBNRENMaXN0IH0gZnJvbSAnQG1hdGVyaWFsL2xpc3QvaW5kZXgnXG5pbXBvcnQgTURDTGlzdEZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2xpc3QvZm91bmRhdGlvbidcbmltcG9ydCBjcmVhdGVGb2N1c1RyYXAgZnJvbSAnZm9jdXMtdHJhcCdcblxuY29uc3QgbWVkaWEgPSBuZXcgY2xhc3Mge1xuICBnZXQgc21hbGwoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX3NtYWxsIHx8ICh0aGlzLl9zbWFsbCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA4MzlweCknKSlcbiAgICApXG4gIH1cblxuICBnZXQgbGFyZ2UoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX2xhcmdlIHx8ICh0aGlzLl9sYXJnZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMjAwcHgpJykpXG4gICAgKVxuICB9XG59KClcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWRyYXdlcicsXG4gIG1vZGVsOiB7XG4gICAgcHJvcDogJ29wZW4nLFxuICAgIGV2ZW50OiAnY2hhbmdlJ1xuICB9LFxuICBwcm9wczoge1xuICAgIG1vZGFsOiBCb29sZWFuLFxuICAgIG9wZW46IEJvb2xlYW4sXG4gICAgdG9vbGJhclNwYWNlcjogQm9vbGVhbixcbiAgICB0b2dnbGVPbjogU3RyaW5nLFxuICAgIHRvZ2dsZU9uU291cmNlOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogZmFsc2VcbiAgICB9LFxuICAgIG9wZW5PbjogU3RyaW5nLFxuICAgIG9wZW5PblNvdXJjZToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgfSxcbiAgICBjbG9zZU9uOiBTdHJpbmcsXG4gICAgY2xvc2VPblNvdXJjZToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBwcm92aWRlKCkge1xuICAgIHJldHVybiB7IG1kY0RyYXdlcjogdGhpcyB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIG9wZW5fOiBmYWxzZSxcbiAgICAgIGNsYXNzZXM6IHt9XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHR5cGUoKSB7fSxcbiAgICBpc01vZGFsKCkge1xuICAgICAgcmV0dXJuIHRoaXMubW9kYWxcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgb3BlbjogJ29uT3Blbl8nXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5kcmF3ZXJfID0gdGhpcy4kcmVmcy5kcmF3ZXJcbiAgICBjb25zdCBhZGFwdGVyID0ge1xuICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRkZWxldGUodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUpLFxuICAgICAgaGFzQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICBlbGVtZW50SGFzQ2xhc3M6IChlbGVtZW50LCBjbGFzc05hbWUpID0+XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICBzYXZlRm9jdXM6ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcmV2aW91c0ZvY3VzXyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgIH0sXG4gICAgICByZXN0b3JlRm9jdXM6ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNGb2N1cyA9IHRoaXMucHJldmlvdXNGb2N1c18gJiYgdGhpcy5wcmV2aW91c0ZvY3VzXy5mb2N1c1xuICAgICAgICBpZiAodGhpcy5kcmF3ZXJfLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpICYmIHByZXZpb3VzRm9jdXMpIHtcbiAgICAgICAgICB0aGlzLnByZXZpb3VzRm9jdXNfLmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZvY3VzQWN0aXZlTmF2aWdhdGlvbkl0ZW06ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlTmF2SXRlbUVsID0gdGhpcy5kcmF3ZXJfLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC4ke01EQ0xpc3RGb3VuZGF0aW9uLmNzc0NsYXNzZXMuTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTU31gXG4gICAgICAgIClcbiAgICAgICAgaWYgKGFjdGl2ZU5hdkl0ZW1FbCkge1xuICAgICAgICAgIGFjdGl2ZU5hdkl0ZW1FbC5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBub3RpZnlDbG9zZTogKCkgPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBmYWxzZSlcbiAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxuICAgICAgfSxcbiAgICAgIG5vdGlmeU9wZW46ICgpID0+IHtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdHJ1ZSlcbiAgICAgICAgdGhpcy4kZW1pdCgnb3BlbicpXG4gICAgICB9LFxuICAgICAgdHJhcEZvY3VzOiAoKSA9PiB0aGlzLmZvY3VzVHJhcF8uYWN0aXZhdGUoKSxcbiAgICAgIHJlbGVhc2VGb2N1czogKCkgPT4gdGhpcy5mb2N1c1RyYXBfLmRlYWN0aXZhdGUoKVxuICAgIH1cblxuICAgIGNvbnN0IHsgRElTTUlTU0lCTEUsIE1PREFMIH0gPSBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24uY3NzQ2xhc3Nlc1xuICAgIGlmICh0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKERJU01JU1NJQkxFKSkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbihhZGFwdGVyKVxuICAgIH0gZWxzZSBpZiAodGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC5jb250YWlucyhNT0RBTCkpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENNb2RhbERyYXdlckZvdW5kYXRpb24oYWRhcHRlcilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTURDRHJhd2VyOiBGYWlsZWQgdG8gaW5zdGFudGlhdGUgY29tcG9uZW50LiBTdXBwb3J0ZWQgdmFyaWFudHMgYXJlICR7RElTTUlTU0lCTEV9IGFuZCAke01PREFMfS5gXG4gICAgICApXG4gICAgfVxuICAgIHRoaXMuZm91bmRhdGlvbiAmJiB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gICAgdGhpcy5pbml0aWFsU3luY1dpdGhET00oKVxuXG4gICAgaWYgKHRoaXMudG9nZ2xlT24pIHtcbiAgICAgIHRoaXMudG9nZ2xlT25FdmVudFNvdXJjZSA9IHRoaXMudG9nZ2xlT25Tb3VyY2UgfHwgdGhpcy4kcm9vdFxuICAgICAgdGhpcy50b2dnbGVPbkV2ZW50U291cmNlLiRvbih0aGlzLnRvZ2dsZU9uLCB0aGlzLnRvZ2dsZSlcbiAgICB9XG4gICAgaWYgKHRoaXMub3Blbk9uKSB7XG4gICAgICB0aGlzLm9wZW5PbkV2ZW50U291cmNlID0gdGhpcy5vcGVuT25Tb3VyY2UgfHwgdGhpcy4kcm9vdFxuICAgICAgdGhpcy5vcGVuT25FdmVudFNvdXJjZS4kb24odGhpcy5vcGVuT24sIHRoaXMuc2hvdylcbiAgICB9XG4gICAgaWYgKHRoaXMuY2xvc2VPbikge1xuICAgICAgdGhpcy5jbG9zZU9uRXZlbnRTb3VyY2UgPSB0aGlzLmNsb3NlT25Tb3VyY2UgfHwgdGhpcy4kcm9vdFxuICAgICAgdGhpcy5jbG9zZU9uRXZlbnRTb3VyY2UuJG9uKHRoaXMuY2xvc2VPbiwgdGhpcy5jbG9zZSlcbiAgICB9XG4gICAgLy8gbWVkaWEuc21hbGwuYWRkTGlzdGVuZXIodGhpcy5yZWZyZXNoTWVkaWEpXG4gICAgLy8gbWVkaWEubGFyZ2UuYWRkTGlzdGVuZXIodGhpcy5yZWZyZXNoTWVkaWEpXG4gICAgLy8gdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy5yZWZyZXNoTWVkaWEoKSlcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24gJiYgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICAgIHRoaXMuZm91bmRhdGlvbiA9IG51bGxcbiAgICAvLyBtZWRpYS5zbWFsbC5yZW1vdmVMaXN0ZW5lcih0aGlzLnJlZnJlc2hNZWRpYSlcbiAgICAvLyBtZWRpYS5sYXJnZS5yZW1vdmVMaXN0ZW5lcih0aGlzLnJlZnJlc2hNZWRpYSlcblxuICAgIGlmICh0aGlzLnRvZ2dsZU9uRXZlbnRTb3VyY2UpIHtcbiAgICAgIHRoaXMudG9nZ2xlT25FdmVudFNvdXJjZS4kb2ZmKHRoaXMudG9nZ2xlT24sIHRoaXMudG9nZ2xlKVxuICAgIH1cbiAgICBpZiAodGhpcy5vcGVuT25FdmVudFNvdXJjZSkge1xuICAgICAgdGhpcy5vcGVuT25FdmVudFNvdXJjZS4kb2ZmKHRoaXMub3Blbk9uLCB0aGlzLnNob3cpXG4gICAgfVxuICAgIGlmICh0aGlzLmNsb3NlT25FdmVudFNvdXJjZSkge1xuICAgICAgdGhpcy5jbG9zZU9uRXZlbnRTb3VyY2UuJG9mZih0aGlzLmNsb3NlT24sIHRoaXMuY2xvc2UpXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgICAgY29uc3QgeyBNT0RBTCB9ID0gTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXNcblxuICAgICAgaWYgKHRoaXMuZHJhd2VyXy5jbGFzc0xpc3QuY29udGFpbnMoTU9EQUwpKSB7XG4gICAgICAgIGNvbnN0IHsgU0NSSU1fU0VMRUNUT1IgfSA9IE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5zdHJpbmdzXG4gICAgICAgIHRoaXMuc2NyaW1fID0gdGhpcy5kcmF3ZXJfLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihTQ1JJTV9TRUxFQ1RPUilcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JpbUNsaWNrXyA9ICgpID0+IHRoaXMuZm91bmRhdGlvbi5oYW5kbGVTY3JpbUNsaWNrKClcbiAgICAgICAgdGhpcy5zY3JpbV8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVNjcmltQ2xpY2tfKVxuICAgICAgICB0aGlzLmZvY3VzVHJhcF8gPSBjcmVhdGVGb2N1c1RyYXBJbnN0YW5jZShcbiAgICAgICAgICB0aGlzLmRyYXdlcl8sXG4gICAgICAgICAgdGhpcy5mb2N1c1RyYXBGYWN0b3J5X1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGFuZGxlS2V5ZG93bl8gPSBldnQgPT4gdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUtleWRvd24oZXZ0KVxuICAgICAgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kXyA9IGV2dCA9PlxuICAgICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlVHJhbnNpdGlvbkVuZChldnQpXG5cbiAgICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25fKVxuICAgICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8pXG4gICAgfSxcbiAgICBvbk9wZW5fKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbiAmJiB0aGlzLmZvdW5kYXRpb24ub3BlbigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24gJiYgdGhpcy5mb3VuZGF0aW9uLmNsb3NlKClcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBldmVudClcbiAgICAgIHRoaXMuJHJvb3QuJGVtaXQoJ3ZtYTpsYXlvdXQnKVxuICAgIH0sXG4gICAgc2hvdygpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5vcGVuKClcbiAgICB9LFxuICAgIGNsb3NlKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmNsb3NlKClcbiAgICB9LFxuICAgIHRvZ2dsZSgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5pc09wZW4oKVxuICAgICAgICA/IHRoaXMuZm91bmRhdGlvbi5jbG9zZSgpXG4gICAgICAgIDogdGhpcy5mb3VuZGF0aW9uLm9wZW4oKVxuICAgIH0sXG4gICAgaXNPcGVuKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbi5pc09wZW4oKVxuICAgIH0sXG4gICAgcmVmcmVzaE1lZGlhKCkge1xuICAgICAgLy8gdGhpcy5zbWFsbCA9IG1lZGlhLnNtYWxsLm1hdGNoZXNcbiAgICAgIC8vIHRoaXMubGFyZ2UgPSBtZWRpYS5sYXJnZS5tYXRjaGVzXG4gICAgICAvLyBpZiAodGhpcy5pc1Jlc3BvbnNpdmUpIHtcbiAgICAgIC8vICAgaWYgKHRoaXMubGFyZ2UpIHtcbiAgICAgIC8vICAgICB0aGlzLnNob3coKVxuICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgLy8gICAgIHRoaXMuY2xvc2UoKVxuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvY3VzVHJhcEluc3RhbmNlKFxuICBzdXJmYWNlRWwsXG4gIGZvY3VzVHJhcEZhY3RvcnkgPSBjcmVhdGVGb2N1c1RyYXBcbikge1xuICByZXR1cm4gZm9jdXNUcmFwRmFjdG9yeShzdXJmYWNlRWwsIHtcbiAgICBjbGlja091dHNpZGVEZWFjdGl2YXRlczogdHJ1ZSxcbiAgICBpbml0aWFsRm9jdXM6IGZhbHNlLCAvLyBOYXZpZ2F0aW9uIGRyYXdlciBoYW5kbGVzIGZvY3VzaW5nIG9uIGFjdGl2ZSBuYXYgaXRlbS5cbiAgICBlc2NhcGVEZWFjdGl2YXRlczogZmFsc2UsIC8vIE5hdmlnYXRpb24gZHJhd2VyIGhhbmRsZXMgRVNDLlxuICAgIHJldHVybkZvY3VzT25EZWFjdGl2YXRlOiBmYWxzZSAvLyBOYXZpZ2F0aW9uIGRyYXdlciBoYW5kbGVzIHJlc3RvcmUgZm9jdXMuXG4gIH0pXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1kYy1kcmF3ZXItaGVhZGVyIG1kYy1kcmF3ZXJfX2hlYWRlclwiPlxuICAgICAgPHNsb3QgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWRyYXdlci1oZWFkZXInXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPG5hdiBcbiAgICA6Y2xhc3M9XCJjbGFzc2VzXCIgXG4gICAgY2xhc3M9XCJtZGMtZHJhd2VyLWxpc3QgbWRjLWxpc3RcIj5cbiAgICA8c2xvdC8+XG4gIDwvbmF2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1kcmF3ZXItbGlzdCcsXG4gIHByb3BzOiB7XG4gICAgZGVuc2U6IEJvb2xlYW5cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICAnbWRjLWxpc3QtLWRlbnNlJzogdGhpcy5kZW5zZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFJpcHBsZS4gUHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBtYW5hZ2luZ1xuICogLSBjbGFzc2VzXG4gKiAtIGRvbVxuICogLSBDU1MgdmFyaWFibGVzXG4gKiAtIHBvc2l0aW9uXG4gKiAtIGRpbWVuc2lvbnNcbiAqIC0gc2Nyb2xsIHBvc2l0aW9uXG4gKiAtIGV2ZW50IGhhbmRsZXJzXG4gKiAtIHVuYm91bmRlZCwgYWN0aXZlIGFuZCBkaXNhYmxlZCBzdGF0ZXNcbiAqXG4gKiBBZGRpdGlvbmFsbHksIHByb3ZpZGVzIHR5cGUgaW5mb3JtYXRpb24gZm9yIHRoZSBhZGFwdGVyIHRvIHRoZSBDbG9zdXJlXG4gKiBjb21waWxlci5cbiAqXG4gKiBJbXBsZW1lbnQgdGhpcyBhZGFwdGVyIGZvciB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UgdG8gZGVsZWdhdGUgdXBkYXRlcyB0b1xuICogdGhlIGNvbXBvbmVudCBpbiB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UuIFNlZSBhcmNoaXRlY3R1cmUgZG9jdW1lbnRhdGlvblxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvY29kZS9hcmNoaXRlY3R1cmUubWRcbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1JpcHBsZUFkYXB0ZXIge1xuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzVW5ib3VuZGVkKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNTdXJmYWNlQWN0aXZlKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNTdXJmYWNlRGlzYWJsZWQoKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7IUV2ZW50VGFyZ2V0fSB0YXJnZXQgKi9cbiAgY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlclJlc2l6ZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YXJOYW1lXG4gICAqIEBwYXJhbSB7P251bWJlcnxzdHJpbmd9IHZhbHVlXG4gICAqL1xuICB1cGRhdGVDc3NWYXJpYWJsZSh2YXJOYW1lLCB2YWx1ZSkge31cblxuICAvKiogQHJldHVybiB7IUNsaWVudFJlY3R9ICovXG4gIGNvbXB1dGVCb3VuZGluZ1JlY3QoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSAqL1xuICBnZXRXaW5kb3dQYWdlT2Zmc2V0KCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICAvLyBSaXBwbGUgaXMgYSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIFwicm9vdFwiIGNvbXBvbmVudCBpcyByZWFsbHkgYSBcIm1peGluXCIgb2Ygc29ydHMsXG4gIC8vIGdpdmVuIHRoYXQgaXQncyBhbiAndXBncmFkZScgdG8gYW4gZXhpc3RpbmcgY29tcG9uZW50LiBUaGF0IGJlaW5nIHNhaWQgaXQgaXMgdGhlIHJvb3RcbiAgLy8gQ1NTIGNsYXNzIHRoYXQgYWxsIG90aGVyIENTUyBjbGFzc2VzIGRlcml2ZSBmcm9tLlxuICBST09UOiAnbWRjLXJpcHBsZS11cGdyYWRlZCcsXG4gIFVOQk9VTkRFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZCcsXG4gIEJHX0ZPQ1VTRUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQnLFxuICBGR19BQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uJyxcbiAgRkdfREVBQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1kZWFjdGl2YXRpb24nLFxufTtcblxuY29uc3Qgc3RyaW5ncyA9IHtcbiAgVkFSX0xFRlQ6ICctLW1kYy1yaXBwbGUtbGVmdCcsXG4gIFZBUl9UT1A6ICctLW1kYy1yaXBwbGUtdG9wJyxcbiAgVkFSX0ZHX1NJWkU6ICctLW1kYy1yaXBwbGUtZmctc2l6ZScsXG4gIFZBUl9GR19TQ0FMRTogJy0tbWRjLXJpcHBsZS1mZy1zY2FsZScsXG4gIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0JyxcbiAgVkFSX0ZHX1RSQU5TTEFURV9FTkQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCcsXG59O1xuXG5jb25zdCBudW1iZXJzID0ge1xuICBQQURESU5HOiAxMCxcbiAgSU5JVElBTF9PUklHSU5fU0NBTEU6IDAuNixcbiAgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM6IDIyNSwgLy8gQ29ycmVzcG9uZHMgdG8gJG1kYy1yaXBwbGUtdHJhbnNsYXRlLWR1cmF0aW9uIChpLmUuIGFjdGl2YXRpb24gYW5pbWF0aW9uIGR1cmF0aW9uKVxuICBGR19ERUFDVElWQVRJT05fTVM6IDE1MCwgLy8gQ29ycmVzcG9uZHMgdG8gJG1kYy1yaXBwbGUtZmFkZS1vdXQtZHVyYXRpb24gKGkuZS4gZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgVEFQX0RFTEFZX01TOiAzMDAsIC8vIERlbGF5IGJldHdlZW4gdG91Y2ggYW5kIHNpbXVsYXRlZCBtb3VzZSBldmVudHMgb24gdG91Y2ggZGV2aWNlc1xufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3QgQ1NTIGN1c3RvbSB2YXJpYWJsZSBzdXBwb3J0LlxuICogQHByaXZhdGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5sZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBhcHBseVBhc3NpdmUgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzUGFzc2l2ZV87XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKSB7XG4gIC8vIERldGVjdCB2ZXJzaW9ucyBvZiBFZGdlIHdpdGggYnVnZ3kgdmFyKCkgc3VwcG9ydFxuICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzExNDk1NDQ4L1xuICBjb25zdCBkb2N1bWVudCA9IHdpbmRvd09iai5kb2N1bWVudDtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub2RlLmNsYXNzTmFtZSA9ICdtZGMtcmlwcGxlLXN1cmZhY2UtLXRlc3QtZWRnZS12YXItYnVnJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcblxuICAvLyBUaGUgYnVnIGV4aXN0cyBpZiA6OmJlZm9yZSBzdHlsZSBlbmRzIHVwIHByb3BhZ2F0aW5nIHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgLy8gQWRkaXRpb25hbGx5LCBnZXRDb21wdXRlZFN0eWxlIHJldHVybnMgbnVsbCBpbiBpZnJhbWVzIHdpdGggZGlzcGxheTogXCJub25lXCIgaW4gRmlyZWZveCxcbiAgLy8gYnV0IEZpcmVmb3ggaXMga25vd24gdG8gc3VwcG9ydCBDU1MgY3VzdG9tIHByb3BlcnRpZXMgY29ycmVjdGx5LlxuICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93T2JqLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIGNvbnN0IGhhc1BzZXVkb1ZhckJ1ZyA9IGNvbXB1dGVkU3R5bGUgIT09IG51bGwgJiYgY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BTdHlsZSA9PT0gJ3NvbGlkJztcbiAgbm9kZS5yZW1vdmUoKTtcbiAgcmV0dXJuIGhhc1BzZXVkb1ZhckJ1Zztcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFXaW5kb3d9IHdpbmRvd09ialxuICogQHBhcmFtIHtib29sZWFuPX0gZm9yY2VSZWZyZXNoXG4gKiBAcmV0dXJuIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3dPYmosIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGxldCBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgaWYgKHR5cGVvZiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPT09ICdib29sZWFuJyAmJiAhZm9yY2VSZWZyZXNoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xuICB9XG5cbiAgY29uc3Qgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSB3aW5kb3dPYmouQ1NTICYmIHR5cGVvZiB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzID09PSAnZnVuY3Rpb24nO1xuICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyA9IHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NDY2OVxuICAvLyBTZWU6IFJFQURNRSBzZWN0aW9uIG9uIFNhZmFyaVxuICBjb25zdCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMgPSAoXG4gICAgd2luZG93T2JqLkNTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpXG4gICk7XG5cbiAgaWYgKGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgfHwgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzKSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSAhZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopO1xuICB9IGVsc2Uge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gZmFsc2U7XG4gIH1cblxuICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xuICB9XG4gIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbn1cblxuLy9cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycywgYW5kIGlmIHNvLCB1c2UgdGhlbS5cbiAqIEBwYXJhbSB7IVdpbmRvdz19IGdsb2JhbE9ialxuICogQHBhcmFtIHtib29sZWFuPX0gZm9yY2VSZWZyZXNoXG4gKiBAcmV0dXJuIHtib29sZWFufCFFdmVudExpc3RlbmVyT3B0aW9uc31cbiAqL1xuZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiA9IHdpbmRvdywgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgaWYgKHN1cHBvcnRzUGFzc2l2ZV8gPT09IHVuZGVmaW5lZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgZ2xvYmFsT2JqLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCB7Z2V0IHBhc3NpdmUoKSB7XG4gICAgICAgIGlzU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkO1xuICAgICAgfX0pO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuXG4gICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkO1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZV9cbiAgICA/IC8qKiBAdHlwZSB7IUV2ZW50TGlzdGVuZXJPcHRpb25zfSAqLyAoe3Bhc3NpdmU6IHRydWV9KVxuICAgIDogZmFsc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHshT2JqZWN0fSBIVE1MRWxlbWVudFByb3RvdHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgLyoqXG4gICAqIE9yZGVyIGlzIGltcG9ydGFudCBiZWNhdXNlIHdlIHJldHVybiB0aGUgZmlyc3QgZXhpc3RpbmcgbWV0aG9kIHdlIGZpbmQuXG4gICAqIERvIG5vdCBjaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBpdGVtcyBpbiB0aGUgYmVsb3cgYXJyYXkuXG4gICAqL1xuICBjb25zdCBtYXRjaGVzTWV0aG9kcyA9IFsnbWF0Y2hlcycsICd3ZWJraXRNYXRjaGVzU2VsZWN0b3InLCAnbXNNYXRjaGVzU2VsZWN0b3InXTtcbiAgbGV0IG1ldGhvZCA9ICdtYXRjaGVzJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaGVzTWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1hdGNoZXNNZXRob2QgPSBtYXRjaGVzTWV0aG9kc1tpXTtcbiAgICBpZiAobWF0Y2hlc01ldGhvZCBpbiBIVE1MRWxlbWVudFByb3RvdHlwZSkge1xuICAgICAgbWV0aG9kID0gbWF0Y2hlc01ldGhvZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXRob2Q7XG59XG5cbi8qKlxuICogQHBhcmFtIHshRXZlbnR9IGV2XG4gKiBAcGFyYW0ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19IHBhZ2VPZmZzZXRcbiAqIEBwYXJhbSB7IUNsaWVudFJlY3R9IGNsaWVudFJlY3RcbiAqIEByZXR1cm4ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19XG4gKi9cbmZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhldiwgcGFnZU9mZnNldCwgY2xpZW50UmVjdCkge1xuICBjb25zdCB7eCwgeX0gPSBwYWdlT2Zmc2V0O1xuICBjb25zdCBkb2N1bWVudFggPSB4ICsgY2xpZW50UmVjdC5sZWZ0O1xuICBjb25zdCBkb2N1bWVudFkgPSB5ICsgY2xpZW50UmVjdC50b3A7XG5cbiAgbGV0IG5vcm1hbGl6ZWRYO1xuICBsZXQgbm9ybWFsaXplZFk7XG4gIC8vIERldGVybWluZSB0b3VjaCBwb2ludCByZWxhdGl2ZSB0byB0aGUgcmlwcGxlIGNvbnRhaW5lci5cbiAgaWYgKGV2LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgIGV2ID0gLyoqIEB0eXBlIHshVG91Y2hFdmVudH0gKi8gKGV2KTtcbiAgICBub3JtYWxpemVkWCA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSBkb2N1bWVudFk7XG4gIH0gZWxzZSB7XG4gICAgZXYgPSAvKiogQHR5cGUgeyFNb3VzZUV2ZW50fSAqLyAoZXYpO1xuICAgIG5vcm1hbGl6ZWRYID0gZXYucGFnZVggLSBkb2N1bWVudFg7XG4gICAgbm9ybWFsaXplZFkgPSBldi5wYWdlWSAtIGRvY3VtZW50WTtcbiAgfVxuXG4gIHJldHVybiB7eDogbm9ybWFsaXplZFgsIHk6IG5vcm1hbGl6ZWRZfTtcbn1cblxuZXhwb3J0IHtzdXBwb3J0c0Nzc1ZhcmlhYmxlcywgYXBwbHlQYXNzaXZlLCBnZXRNYXRjaGVzUHJvcGVydHksIGdldE5vcm1hbGl6ZWRFdmVudENvb3Jkc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDUmlwcGxlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge2dldE5vcm1hbGl6ZWRFdmVudENvb3Jkc30gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBpc0FjdGl2YXRlZDogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGFjdGl2YXRpb25FdmVudDogKCFFdmVudHx1bmRlZmluZWQpLFxuICogICBpc1Byb2dyYW1tYXRpYzogKGJvb2xlYW58dW5kZWZpbmVkKVxuICogfX1cbiAqL1xubGV0IEFjdGl2YXRpb25TdGF0ZVR5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZGVhY3RpdmF0ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBmb2N1czogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBibHVyOiAoc3RyaW5nfHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBMaXN0ZW5lckluZm9UeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiBmdW5jdGlvbighRXZlbnQpLFxuICogICBkZWFjdGl2YXRlOiBmdW5jdGlvbighRXZlbnQ9KSxcbiAqICAgZm9jdXM6IGZ1bmN0aW9uKCksXG4gKiAgIGJsdXI6IGZ1bmN0aW9uKClcbiAqIH19XG4gKi9cbmxldCBMaXN0ZW5lcnNUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIHg6IG51bWJlcixcbiAqICAgeTogbnVtYmVyXG4gKiB9fVxuICovXG5sZXQgUG9pbnRUeXBlO1xuXG4vLyBBY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIHRoZSByb290IGVsZW1lbnQgb2YgZWFjaCBpbnN0YW5jZSBmb3IgYWN0aXZhdGlvblxuY29uc3QgQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hzdGFydCcsICdwb2ludGVyZG93bicsICdtb3VzZWRvd24nLCAna2V5ZG93biddO1xuXG4vLyBEZWFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gZG9jdW1lbnRFbGVtZW50IHdoZW4gYSBwb2ludGVyLXJlbGF0ZWQgZG93biBldmVudCBvY2N1cnNcbmNvbnN0IFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gWyd0b3VjaGVuZCcsICdwb2ludGVydXAnLCAnbW91c2V1cCcsICdjb250ZXh0bWVudSddO1xuXG4vLyBUcmFja3MgYWN0aXZhdGlvbnMgdGhhdCBoYXZlIG9jY3VycmVkIG9uIHRoZSBjdXJyZW50IGZyYW1lLCB0byBhdm9pZCBzaW11bHRhbmVvdXMgbmVzdGVkIGFjdGl2YXRpb25zXG4vKiogQHR5cGUgeyFBcnJheTwhRXZlbnRUYXJnZXQ+fSAqL1xubGV0IGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDUmlwcGxlQWRhcHRlcj59XG4gKi9cbmNsYXNzIE1EQ1JpcHBsZUZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4gLyogYm9vbGVhbiAtIGNhY2hlZCAqLyB7fSxcbiAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBhZGRDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgY29udGFpbnNFdmVudFRhcmdldDogKC8qIHRhcmdldDogIUV2ZW50VGFyZ2V0ICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICgvKiB2YXJOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gLyogQ2xpZW50UmVjdCAqLyB7fSxcbiAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IC8qIHt4OiBudW1iZXIsIHk6IG51bWJlcn0gKi8ge30sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1JpcHBsZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUNsaWVudFJlY3R9ICovXG4gICAgdGhpcy5mcmFtZV8gPSAvKiogQHR5cGUgeyFDbGllbnRSZWN0fSAqLyAoe3dpZHRoOiAwLCBoZWlnaHQ6IDB9KTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5pbml0aWFsU2l6ZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50KX0gKi9cbiAgICB0aGlzLmFjdGl2YXRlSGFuZGxlcl8gPSAoZSkgPT4gdGhpcy5hY3RpdmF0ZV8oZSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudD0pfSAqL1xuICAgIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfID0gKCkgPT4gdGhpcy5kZWFjdGl2YXRlXygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmZvY3VzSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmhhbmRsZUZvY3VzKCk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudD0pfSAqL1xuICAgIHRoaXMuYmx1ckhhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVCbHVyKCk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXJfID0gKCkgPT4gdGhpcy5sYXlvdXQoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7e2xlZnQ6IG51bWJlciwgdG9wOm51bWJlcn19ICovXG4gICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICB9O1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5mZ1NjYWxlXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18gPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSB0cnVlO1xuICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICB9O1xuXG4gICAgLyoqIEBwcml2YXRlIHshRXZlbnR8dW5kZWZpbmVkfSAqL1xuICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICB9XG5cbiAgLyoqXG4gICAqIFdlIGNvbXB1dGUgdGhpcyBwcm9wZXJ0eSBzbyB0aGF0IHdlIGFyZSBub3QgcXVlcnlpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNsaWVudFxuICAgKiB1bnRpbCB0aGUgcG9pbnQgaW4gdGltZSB3aGVyZSB0aGUgZm91bmRhdGlvbiByZXF1ZXN0cyBpdC4gVGhpcyBwcmV2ZW50cyBzY2VuYXJpb3Mgd2hlcmVcbiAgICogY2xpZW50LXNpZGUgZmVhdHVyZS1kZXRlY3Rpb24gbWF5IGhhcHBlbiB0b28gZWFybHksIHN1Y2ggYXMgd2hlbiBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyXG4gICAqIGFuZCB0aGVuIGluaXRpYWxpemVkIGF0IG1vdW50IHRpbWUgb24gdGhlIGNsaWVudC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN1cHBvcnRzUHJlc3NSaXBwbGVfKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshQWN0aXZhdGlvblN0YXRlVHlwZX1cbiAgICovXG4gIGRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2YXRlZDogZmFsc2UsXG4gICAgICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogZmFsc2UsXG4gICAgICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IGZhbHNlLFxuICAgICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IGZhbHNlLFxuICAgICAgYWN0aXZhdGlvbkV2ZW50OiB1bmRlZmluZWQsXG4gICAgICBpc1Byb2dyYW1tYXRpYzogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBzdXBwb3J0c1ByZXNzUmlwcGxlID0gdGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpO1xuXG4gICAgdGhpcy5yZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSk7XG5cbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgY29uc3Qge1JPT1QsIFVOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFJPT1QpO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGVzIG5lZWQgbGF5b3V0IGxvZ2ljIGFwcGxpZWQgaW1tZWRpYXRlbHkgdG8gc2V0IGNvb3JkaW5hdGVzIGZvciBib3RoIHNoYWRlIGFuZCByaXBwbGVcbiAgICAgICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZhdGlvblRpbWVyXykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhST09UKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB0aGlzLnJlbW92ZUNzc1ZhcnNfKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCk7XG4gICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSBzdXBwb3J0c1ByZXNzUmlwcGxlIFBhc3NlZCBmcm9tIGluaXQgdG8gc2F2ZSBhIHJlZHVuZGFudCBmdW5jdGlvbiBjYWxsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhlKSB7XG4gICAgaWYgKGUudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCkge1xuICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICByZW1vdmVDc3NWYXJzXygpIHtcbiAgICBjb25zdCB7c3RyaW5nc30gPSBNRENSaXBwbGVGb3VuZGF0aW9uO1xuICAgIE9iamVjdC5rZXlzKHN0cmluZ3MpLmZvckVhY2goKGspID0+IHtcbiAgICAgIGlmIChrLmluZGV4T2YoJ1ZBUl8nKSA9PT0gMCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKHN0cmluZ3Nba10sIG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWN0aXZhdGVfKGUpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VEaXNhYmxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBdm9pZCByZWFjdGluZyB0byBmb2xsb3ctb24gZXZlbnRzIGZpcmVkIGJ5IHRvdWNoIGRldmljZSBhZnRlciBhbiBhbHJlYWR5LXByb2Nlc3NlZCB1c2VyIGludGVyYWN0aW9uXG4gICAgY29uc3QgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgPSB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgICBjb25zdCBpc1NhbWVJbnRlcmFjdGlvbiA9IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ICYmIGUgIT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c0FjdGl2YXRpb25FdmVudC50eXBlICE9PSBlLnR5cGU7XG4gICAgaWYgKGlzU2FtZUludGVyYWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPSBlID09PSB1bmRlZmluZWQ7XG4gICAgYWN0aXZhdGlvblN0YXRlLmFjdGl2YXRpb25FdmVudCA9IGU7XG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA/IGZhbHNlIDogZSAhPT0gdW5kZWZpbmVkICYmIChcbiAgICAgIGUudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAncG9pbnRlcmRvd24nXG4gICAgKTtcblxuICAgIGNvbnN0IGhhc0FjdGl2YXRlZENoaWxkID0gZSAhPT0gdW5kZWZpbmVkICYmIGFjdGl2YXRlZFRhcmdldHMubGVuZ3RoID4gMCAmJiBhY3RpdmF0ZWRUYXJnZXRzLnNvbWUoXG4gICAgICAodGFyZ2V0KSA9PiB0aGlzLmFkYXB0ZXJfLmNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSk7XG4gICAgaWYgKGhhc0FjdGl2YXRlZENoaWxkKSB7XG4gICAgICAvLyBJbW1lZGlhdGVseSByZXNldCBhY3RpdmF0aW9uIHN0YXRlLCB3aGlsZSBwcmVzZXJ2aW5nIGxvZ2ljIHRoYXQgcHJldmVudHMgdG91Y2ggZm9sbG93LW9uIGV2ZW50c1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhY3RpdmF0ZWRUYXJnZXRzLnB1c2goLyoqIEB0eXBlIHshRXZlbnRUYXJnZXR9ICovIChlLnRhcmdldCkpO1xuICAgICAgdGhpcy5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhlKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIC8vIFJlc2V0IGFycmF5IG9uIG5leHQgZnJhbWUgYWZ0ZXIgdGhlIGN1cnJlbnQgZXZlbnQgaGFzIGhhZCBhIGNoYW5jZSB0byBidWJibGUgdG8gcHJldmVudCBhbmNlc3RvciByaXBwbGVzXG4gICAgICBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbiAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlICYmIGUgIT09IHVuZGVmaW5lZCAmJiAoZS5rZXkgPT09ICcgJyB8fCBlLmtleUNvZGUgPT09IDMyKSkge1xuICAgICAgICAvLyBJZiBzcGFjZSB3YXMgcHJlc3NlZCwgdHJ5IGFnYWluIHdpdGhpbiBhbiByQUYgY2FsbCB0byBkZXRlY3QgOmFjdGl2ZSwgYmVjYXVzZSBkaWZmZXJlbnQgVUFzIHJlcG9ydFxuICAgICAgICAvLyBhY3RpdmUgc3RhdGVzIGluY29uc2lzdGVudGx5IHdoZW4gdGhleSdyZSBjYWxsZWQgd2l0aGluIGV2ZW50IGhhbmRsaW5nIGNvZGU6XG4gICAgICAgIC8vIC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjM1OTcxXG4gICAgICAgIC8vIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTI5Mzc0MVxuICAgICAgICAvLyBXZSB0cnkgZmlyc3Qgb3V0c2lkZSByQUYgdG8gc3VwcG9ydCBFZGdlLCB3aGljaCBkb2VzIG5vdCBleGhpYml0IHRoaXMgcHJvYmxlbSwgYnV0IHdpbGwgY3Jhc2ggaWYgYSBDU1NcbiAgICAgICAgLy8gdmFyaWFibGUgaXMgc2V0IHdpdGhpbiBhIHJBRiBjYWxsYmFjayBmb3IgYSBzdWJtaXQgYnV0dG9uIGludGVyYWN0aW9uICgjMjI0MSkuXG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgIC8vIFJlc2V0IGFjdGl2YXRpb24gc3RhdGUgaW1tZWRpYXRlbHkgaWYgZWxlbWVudCB3YXMgbm90IG1hZGUgYWN0aXZlLlxuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnQ9fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKSB7XG4gICAgcmV0dXJuIChlICE9PSB1bmRlZmluZWQgJiYgZS50eXBlID09PSAna2V5ZG93bicpID8gdGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VBY3RpdmUoKSA6IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnQ9fSBldmVudCBPcHRpb25hbCBldmVudCBjb250YWluaW5nIHBvc2l0aW9uIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgYWN0aXZhdGUoZXZlbnQpIHtcbiAgICB0aGlzLmFjdGl2YXRlXyhldmVudCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgYW5pbWF0ZUFjdGl2YXRpb25fKCkge1xuICAgIGNvbnN0IHtWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCBWQVJfRkdfVFJBTlNMQVRFX0VORH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG4gICAgY29uc3Qge0ZHX0RFQUNUSVZBVElPTiwgRkdfQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgY29uc3Qge0RFQUNUSVZBVElPTl9USU1FT1VUX01TfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycztcblxuICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG5cbiAgICBsZXQgdHJhbnNsYXRlU3RhcnQgPSAnJztcbiAgICBsZXQgdHJhbnNsYXRlRW5kID0gJyc7XG5cbiAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgY29uc3Qge3N0YXJ0UG9pbnQsIGVuZFBvaW50fSA9IHRoaXMuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpO1xuICAgICAgdHJhbnNsYXRlU3RhcnQgPSBgJHtzdGFydFBvaW50Lnh9cHgsICR7c3RhcnRQb2ludC55fXB4YDtcbiAgICAgIHRyYW5zbGF0ZUVuZCA9IGAke2VuZFBvaW50Lnh9cHgsICR7ZW5kUG9pbnQueX1weGA7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCB0cmFuc2xhdGVTdGFydCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX0VORCwgdHJhbnNsYXRlRW5kKTtcbiAgICAvLyBDYW5jZWwgYW55IG9uZ29pbmcgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5pbWF0aW9uc1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG5cbiAgICAvLyBGb3JjZSBsYXlvdXQgaW4gb3JkZXIgdG8gcmUtdHJpZ2dlciB0aGUgYW5pbWF0aW9uLlxuICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXygpLCBERUFDVElWQVRJT05fVElNRU9VVF9NUyk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHJldHVybiB7e3N0YXJ0UG9pbnQ6IFBvaW50VHlwZSwgZW5kUG9pbnQ6IFBvaW50VHlwZX19XG4gICAqL1xuICBnZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCkge1xuICAgIGNvbnN0IHthY3RpdmF0aW9uRXZlbnQsIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcn0gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG5cbiAgICBsZXQgc3RhcnRQb2ludDtcbiAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyKSB7XG4gICAgICBzdGFydFBvaW50ID0gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKFxuICAgICAgICAvKiogQHR5cGUgeyFFdmVudH0gKi8gKGFjdGl2YXRpb25FdmVudCksXG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZ2V0V2luZG93UGFnZU9mZnNldCgpLCB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgeDogdGhpcy5mcmFtZV8ud2lkdGggLyAyLFxuICAgICAgICB5OiB0aGlzLmZyYW1lXy5oZWlnaHQgLyAyLFxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gQ2VudGVyIHRoZSBlbGVtZW50IGFyb3VuZCB0aGUgc3RhcnQgcG9pbnQuXG4gICAgc3RhcnRQb2ludCA9IHtcbiAgICAgIHg6IHN0YXJ0UG9pbnQueCAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgeTogc3RhcnRQb2ludC55IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgfTtcblxuICAgIGNvbnN0IGVuZFBvaW50ID0ge1xuICAgICAgeDogKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6ICh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICByZXR1cm4ge3N0YXJ0UG9pbnQsIGVuZFBvaW50fTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKSB7XG4gICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJvdGggd2hlbiBhIHBvaW50aW5nIGRldmljZSBpcyByZWxlYXNlZCwgYW5kIHdoZW4gdGhlIGFjdGl2YXRpb24gYW5pbWF0aW9uIGVuZHMuXG4gICAgLy8gVGhlIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gc2hvdWxkIG9ubHkgcnVuIGFmdGVyIGJvdGggb2YgdGhvc2Ugb2NjdXIuXG4gICAgY29uc3Qge0ZHX0RFQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgY29uc3Qge2hhc0RlYWN0aXZhdGlvblVYUnVuLCBpc0FjdGl2YXRlZH0gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgY29uc3QgYWN0aXZhdGlvbkhhc0VuZGVkID0gaGFzRGVhY3RpdmF0aW9uVVhSdW4gfHwgIWlzQWN0aXZhdGVkO1xuXG4gICAgaWYgKGFjdGl2YXRpb25IYXNFbmRlZCAmJiB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8pIHtcbiAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICB9LCBudW1iZXJzLkZHX0RFQUNUSVZBVElPTl9NUyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpIHtcbiAgICBjb25zdCB7RkdfQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgfVxuXG4gIHJlc2V0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXy5hY3RpdmF0aW9uRXZlbnQ7XG4gICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgIC8vIFRvdWNoIGRldmljZXMgbWF5IGZpcmUgYWRkaXRpb25hbCBldmVudHMgZm9yIHRoZSBzYW1lIGludGVyYWN0aW9uIHdpdGhpbiBhIHNob3J0IHRpbWUuXG4gICAgLy8gU3RvcmUgdGhlIHByZXZpb3VzIGV2ZW50IHVudGlsIGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhhdCBzdWJzZXF1ZW50IGV2ZW50cyBhcmUgZm9yIG5ldyBpbnRlcmFjdGlvbnMuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHVuZGVmaW5lZCwgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlRBUF9ERUxBWV9NUyk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlYWN0aXZhdGVfKCkge1xuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gc2NlbmFyaW9zIHN1Y2ggYXMgd2hlbiB5b3UgaGF2ZSBhIGtleXVwIGV2ZW50IHRoYXQgYmx1cnMgdGhlIGVsZW1lbnQuXG4gICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZSA9IC8qKiBAdHlwZSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9ICovIChPYmplY3QuYXNzaWduKHt9LCBhY3RpdmF0aW9uU3RhdGUpKTtcblxuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKSk7XG4gICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXy5oYXNEZWFjdGl2YXRpb25VWFJ1biA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpO1xuICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmRlYWN0aXZhdGVfKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gb3B0aW9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYW5pbWF0ZURlYWN0aXZhdGlvbl8oe3dhc0FjdGl2YXRlZEJ5UG9pbnRlciwgd2FzRWxlbWVudE1hZGVBY3RpdmV9KSB7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlciB8fCB3YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICB9XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0RnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgbGF5b3V0SW50ZXJuYWxfKCkge1xuICAgIHRoaXMuZnJhbWVfID0gdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgY29uc3QgbWF4RGltID0gTWF0aC5tYXgodGhpcy5mcmFtZV8uaGVpZ2h0LCB0aGlzLmZyYW1lXy53aWR0aCk7XG5cbiAgICAvLyBTdXJmYWNlIGRpYW1ldGVyIGlzIHRyZWF0ZWQgZGlmZmVyZW50bHkgZm9yIHVuYm91bmRlZCB2cy4gYm91bmRlZCByaXBwbGVzLlxuICAgIC8vIFVuYm91bmRlZCByaXBwbGUgZGlhbWV0ZXIgaXMgY2FsY3VsYXRlZCBzbWFsbGVyIHNpbmNlIHRoZSBzdXJmYWNlIGlzIGV4cGVjdGVkIHRvIGFscmVhZHkgYmUgcGFkZGVkIGFwcHJvcHJpYXRlbHlcbiAgICAvLyB0byBleHRlbmQgdGhlIGhpdGJveCwgYW5kIHRoZSByaXBwbGUgaXMgZXhwZWN0ZWQgdG8gbWVldCB0aGUgZWRnZXMgb2YgdGhlIHBhZGRlZCBoaXRib3ggKHdoaWNoIGlzIHR5cGljYWxseVxuICAgIC8vIHNxdWFyZSkuIEJvdW5kZWQgcmlwcGxlcywgb24gdGhlIG90aGVyIGhhbmQsIGFyZSBmdWxseSBleHBlY3RlZCB0byBleHBhbmQgYmV5b25kIHRoZSBzdXJmYWNlJ3MgbG9uZ2VzdCBkaWFtZXRlclxuICAgIC8vIChjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBkaWFnb25hbCBwbHVzIGEgY29uc3RhbnQgcGFkZGluZyksIGFuZCBhcmUgY2xpcHBlZCBhdCB0aGUgc3VyZmFjZSdzIGJvcmRlciB2aWFcbiAgICAvLyBgb3ZlcmZsb3c6IGhpZGRlbmAuXG4gICAgY29uc3QgZ2V0Qm91bmRlZFJhZGl1cyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGh5cG90ZW51c2UgPSBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy5mcmFtZV8ud2lkdGgsIDIpICsgTWF0aC5wb3codGhpcy5mcmFtZV8uaGVpZ2h0LCAyKSk7XG4gICAgICByZXR1cm4gaHlwb3RlbnVzZSArIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5QQURESU5HO1xuICAgIH07XG5cbiAgICB0aGlzLm1heFJhZGl1c18gPSB0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkgPyBtYXhEaW0gOiBnZXRCb3VuZGVkUmFkaXVzKCk7XG5cbiAgICAvLyBSaXBwbGUgaXMgc2l6ZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgbGFyZ2VzdCBkaW1lbnNpb24gb2YgdGhlIHN1cmZhY2UsIHRoZW4gc2NhbGVzIHVwIHVzaW5nIGEgQ1NTIHNjYWxlIHRyYW5zZm9ybVxuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gTWF0aC5mbG9vcihtYXhEaW0gKiBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuSU5JVElBTF9PUklHSU5fU0NBTEUpO1xuICAgIHRoaXMuZmdTY2FsZV8gPSB0aGlzLm1heFJhZGl1c18gLyB0aGlzLmluaXRpYWxTaXplXztcblxuICAgIHRoaXMudXBkYXRlTGF5b3V0Q3NzVmFyc18oKTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICB1cGRhdGVMYXlvdXRDc3NWYXJzXygpIHtcbiAgICBjb25zdCB7XG4gICAgICBWQVJfRkdfU0laRSwgVkFSX0xFRlQsIFZBUl9UT1AsIFZBUl9GR19TQ0FMRSxcbiAgICB9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuXG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0laRSwgYCR7dGhpcy5pbml0aWFsU2l6ZV99cHhgKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TQ0FMRSwgdGhpcy5mZ1NjYWxlXyk7XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICAgIGxlZnQ6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgIHRvcDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9MRUZULCBgJHt0aGlzLnVuYm91bmRlZENvb3Jkc18ubGVmdH1weGApO1xuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfVE9QLCBgJHt0aGlzLnVuYm91bmRlZENvb3Jkc18udG9wfXB4YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdW5ib3VuZGVkICovXG4gIHNldFVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICBjb25zdCB7VU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBpZiAodW5ib3VuZGVkKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGb2N1cygpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpKTtcbiAgfVxuXG4gIGhhbmRsZUJsdXIoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgTURDUmlwcGxlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1JpcHBsZUZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBNRENDb21wb25lbnQ8IU1EQ1JpcHBsZUZvdW5kYXRpb24+XG4gKi9cbmNsYXNzIE1EQ1JpcHBsZSBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKiBAcGFyYW0gey4uLj99IGFyZ3MgKi9cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcGFyYW0ge3tpc1VuYm91bmRlZDogKGJvb2xlYW58dW5kZWZpbmVkKX09fSBvcHRpb25zXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGV9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCwge2lzVW5ib3VuZGVkID0gdW5kZWZpbmVkfSA9IHt9KSB7XG4gICAgY29uc3QgcmlwcGxlID0gbmV3IE1EQ1JpcHBsZShyb290KTtcbiAgICAvLyBPbmx5IG92ZXJyaWRlIHVuYm91bmRlZCBiZWhhdmlvciBpZiBvcHRpb24gaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcbiAgICBpZiAoaXNVbmJvdW5kZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmlwcGxlLnVuYm91bmRlZCA9IC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi8gKGlzVW5ib3VuZGVkKTtcbiAgICB9XG4gICAgcmV0dXJuIHJpcHBsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFSaXBwbGVDYXBhYmxlU3VyZmFjZX0gaW5zdGFuY2VcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlQWRhcHRlcihpbnN0YW5jZSkge1xuICAgIGNvbnN0IE1BVENIRVMgPSB1dGlsLmdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IHV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KSxcbiAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiBpbnN0YW5jZS51bmJvdW5kZWQsXG4gICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IGluc3RhbmNlLnJvb3RfW01BVENIRVNdKCc6YWN0aXZlJyksXG4gICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4gaW5zdGFuY2UuZGlzYWJsZWQsXG4gICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICh0YXJnZXQpID0+IGluc3RhbmNlLnJvb3RfLmNvbnRhaW5zKHRhcmdldCksXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgaW5zdGFuY2Uucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IChoYW5kbGVyKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKHZhck5hbWUsIHZhbHVlKSA9PiBpbnN0YW5jZS5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSksXG4gICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiBpbnN0YW5jZS5yb290Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+ICh7eDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXR9KSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGdldCB1bmJvdW5kZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5ib3VuZGVkXztcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXQgdW5ib3VuZGVkKHVuYm91bmRlZCkge1xuICAgIHRoaXMudW5ib3VuZGVkXyA9IEJvb2xlYW4odW5ib3VuZGVkKTtcbiAgICB0aGlzLnNldFVuYm91bmRlZF8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zdXJlIENvbXBpbGVyIHRocm93cyBhbiBhY2Nlc3MgY29udHJvbCBlcnJvciB3aGVuIGRpcmVjdGx5IGFjY2Vzc2luZyBhXG4gICAqIHByb3RlY3RlZCBvciBwcml2YXRlIHByb3BlcnR5IGluc2lkZSBhIGdldHRlci9zZXR0ZXIsIGxpa2UgdW5ib3VuZGVkIGFib3ZlLlxuICAgKiBCeSBhY2Nlc3NpbmcgdGhlIHByb3RlY3RlZCBwcm9wZXJ0eSBpbnNpZGUgYSBtZXRob2QsIHdlIHNvbHZlIHRoYXQgcHJvYmxlbS5cbiAgICogVGhhdCdzIHdoeSB0aGlzIGZ1bmN0aW9uIGV4aXN0cy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFVuYm91bmRlZF8oKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVbmJvdW5kZWQodGhpcy51bmJvdW5kZWRfKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZWFjdGl2YXRlKCk7XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5sYXlvdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlRm91bmRhdGlvbn1cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIodGhpcykpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgdGhpcy51bmJvdW5kZWQgPSAnbWRjUmlwcGxlSXNVbmJvdW5kZWQnIGluIHRoaXMucm9vdF8uZGF0YXNldDtcbiAgfVxufVxuXG4vKipcbiAqIFNlZSBNYXRlcmlhbCBEZXNpZ24gc3BlYyBmb3IgbW9yZSBkZXRhaWxzIG9uIHdoZW4gdG8gdXNlIHJpcHBsZXMuXG4gKiBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvbW90aW9uL2Nob3Jlb2dyYXBoeS5odG1sI2Nob3Jlb2dyYXBoeS1jcmVhdGlvblxuICogQHJlY29yZFxuICovXG5jbGFzcyBSaXBwbGVDYXBhYmxlU3VyZmFjZSB7fVxuXG4vKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUucm9vdF87XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHJpcHBsZSBibGVlZHMgb3V0IG9mIHRoZSBib3VuZHMgb2YgdGhlIGVsZW1lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS51bmJvdW5kZWQ7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHJpcHBsZSBpcyBhdHRhY2hlZCB0byBhIGRpc2FibGVkIGNvbXBvbmVudC5cbiAqIEB0eXBlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLmRpc2FibGVkO1xuXG5leHBvcnQge01EQ1JpcHBsZSwgTURDUmlwcGxlRm91bmRhdGlvbiwgUmlwcGxlQ2FwYWJsZVN1cmZhY2UsIHV0aWx9O1xuIiwiaW1wb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvaW5kZXgnXG5pbXBvcnQge1xuICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyxcbiAgZ2V0TWF0Y2hlc1Byb3BlcnR5LFxuICBhcHBseVBhc3NpdmVcbn0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS91dGlsJ1xuXG5leHBvcnQgY2xhc3MgUmlwcGxlQmFzZSBleHRlbmRzIE1EQ1JpcHBsZUZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IE1BVENIRVMoKSB7XG4gICAgLyogZ2xvYmFsIEhUTUxFbGVtZW50ICovXG4gICAgcmV0dXJuIChcbiAgICAgIFJpcHBsZUJhc2UuX21hdGNoZXMgfHxcbiAgICAgIChSaXBwbGVCYXNlLl9tYXRjaGVzID0gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSkpXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGlzU3VyZmFjZUFjdGl2ZShyZWYpIHtcbiAgICByZXR1cm4gcmVmW1JpcHBsZUJhc2UuTUFUQ0hFU10oJzphY3RpdmUnKVxuICB9XG5cbiAgY29uc3RydWN0b3Iodm0sIG9wdGlvbnMpIHtcbiAgICBzdXBlcihcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uJGVsW1JpcHBsZUJhc2UuTUFUQ0hFU10oJzphY3RpdmUnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS5kaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2bS4kc2V0KHZtLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJGRlbGV0ZSh2bS5jbGFzc2VzLCBjbGFzc05hbWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiB0YXJnZXQgPT4gdm0uJGVsLmNvbnRhaW5zKHRhcmdldCksXG4gICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHZtLiRlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5zdHlsZXMsIHZhck5hbWUsIHZhbHVlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgUmlwcGxlTWl4aW4gPSB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5yaXBwbGUuZGVzdHJveSgpXG4gIH1cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGN1c3RvbS1lbGVtZW50IFxuICAgIDp0YWc9XCJ0YWdcIiBcbiAgICA6Y2xhc3Nlcz1cImNsYXNzZXNcIlxuICAgIDpzdHlsZXM9XCJzdHlsZXNcIiBcbiAgICBjbGFzcz1cIm1kYy1yaXBwbGVcIj5cbiAgICA8c2xvdCAvPlxuICA8L2N1c3RvbS1lbGVtZW50PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnRNaXhpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgeyBSaXBwbGVNaXhpbiB9IGZyb20gJy4vbWRjLXJpcHBsZS1iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtcmlwcGxlJyxcbiAgbWl4aW5zOiBbQ3VzdG9tRWxlbWVudE1peGluLCBSaXBwbGVNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgdGFnOiBTdHJpbmdcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxjdXN0b20tbGlua1xuICAgIDpsaW5rPVwibGlua1wiXG4gICAgOmNsYXNzPVwiW2NsYXNzZXMsIGl0ZW1DbGFzc2VzXVwiXG4gICAgOnN0eWxlPVwic3R5bGVzXCJcbiAgICBjbGFzcz1cIm1kYy1kcmF3ZXItaXRlbSBtZGMtbGlzdC1pdGVtXCJcbiAgICB2LW9uPVwibXlsaXN0ZW5lcnNcIlxuICA+XG4gICAgPHNwYW4gdi1pZj1cImhhc1N0YXJ0RGV0YWlsXCIgY2xhc3M9XCJtZGMtbGlzdC1pdGVtX19ncmFwaGljXCI+XG4gICAgICA8c2xvdCBuYW1lPVwic3RhcnQtZGV0YWlsXCI+XG4gICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj57eyBzdGFydEljb24gfX08L2k+XG4gICAgICA8L3Nsb3Q+XG4gICAgPC9zcGFuPlxuICAgIDxzbG90IC8+XG4gIDwvY3VzdG9tLWxpbms+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgRGlzcGF0Y2hFdmVudE1peGluLCBDdXN0b21MaW5rTWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlQmFzZSB9IGZyb20gJy4uL3JpcHBsZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWRyYXdlci1pdGVtJyxcbiAgaW5qZWN0OiBbJ21kY0RyYXdlciddLFxuICBtaXhpbnM6IFtEaXNwYXRjaEV2ZW50TWl4aW4sIEN1c3RvbUxpbmtNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgc3RhcnRJY29uOiBTdHJpbmcsXG4gICAgbW9kYWxDbG9zZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIGFjdGl2YXRlZDogQm9vbGVhbixcbiAgICBleGFjdEFjdGl2ZUNsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbWRjLWxpc3QtaXRlbS0tYWN0aXZhdGVkJ1xuICAgIH1cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIG15bGlzdGVuZXJzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy4kbGlzdGVuZXJzLFxuICAgICAgICBjbGljazogZSA9PiB7XG4gICAgICAgICAgdGhpcy5tZGNEcmF3ZXIuaXNNb2RhbCAmJiB0aGlzLm1vZGFsQ2xvc2UgJiYgdGhpcy5tZGNEcmF3ZXIuY2xvc2UoKVxuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBpdGVtQ2xhc3NlcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdtZGMtbGlzdC1pdGVtLS1hY3RpdmF0ZWQnOiB0aGlzLmFjdGl2YXRlZFxuICAgICAgfVxuICAgIH0sXG4gICAgaGFzU3RhcnREZXRhaWwoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGFydEljb24gfHwgdGhpcy4kc2xvdHNbJ3N0YXJ0LWRldGFpbCddXG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMucmlwcGxlID0gbmV3IFJpcHBsZUJhc2UodGhpcylcbiAgICB0aGlzLnJpcHBsZS5pbml0KClcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnJpcHBsZSAmJiB0aGlzLnJpcHBsZS5kZXN0cm95KClcbiAgICB0aGlzLnJpcHBsZSA9IG51bGxcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxociBjbGFzcz1cIm1kYy1saXN0LWRpdmlkZXJcIj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtZHJhd2VyLWRpdmlkZXInXG59XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IG1kY0RyYXdlciBmcm9tICcuL21kYy1kcmF3ZXIudnVlJ1xuaW1wb3J0IG1kY0RyYXdlckhlYWRlciBmcm9tICcuL21kYy1kcmF3ZXItaGVhZGVyLnZ1ZSdcbmltcG9ydCBtZGNEcmF3ZXJMaXN0IGZyb20gJy4vbWRjLWRyYXdlci1saXN0LnZ1ZSdcbmltcG9ydCBtZGNEcmF3ZXJJdGVtIGZyb20gJy4vbWRjLWRyYXdlci1pdGVtLnZ1ZSdcbmltcG9ydCBtZGNEcmF3ZXJEaXZpZGVyIGZyb20gJy4vbWRjLWRyYXdlci1kaXZpZGVyLnZ1ZSdcblxuZXhwb3J0IHtcbiAgbWRjRHJhd2VyLFxuICBtZGNEcmF3ZXJIZWFkZXIsXG4gIG1kY0RyYXdlckxpc3QsXG4gIG1kY0RyYXdlckl0ZW0sXG4gIG1kY0RyYXdlckRpdmlkZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY0RyYXdlcixcbiAgbWRjRHJhd2VySGVhZGVyLFxuICBtZGNEcmF3ZXJMaXN0LFxuICBtZGNEcmF3ZXJJdGVtLFxuICBtZGNEcmF3ZXJEaXZpZGVyXG59KVxuIiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJ1xuaW1wb3J0IHsgYXV0b0luaXQgfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHBsdWdpbiBmcm9tICcuL2luZGV4LmpzJ1xuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXG5cbmF1dG9Jbml0KHBsdWdpbilcbiJdLCJuYW1lcyI6WyJhdXRvSW5pdCIsInBsdWdpbiIsIl9WdWUiLCJ3aW5kb3ciLCJWdWUiLCJnbG9iYWwiLCJ1c2UiLCJCYXNlUGx1Z2luIiwiY29tcG9uZW50cyIsInZlcnNpb24iLCJpbnN0YWxsIiwidm0iLCJrZXkiLCJjb21wb25lbnQiLCJuYW1lIiwiQ3VzdG9tRWxlbWVudCIsImZ1bmN0aW9uYWwiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsInByb3BzIiwiaXMiLCJ0YWciLCJkYXRhIiwiY2hpbGRyZW4iLCJDdXN0b21FbGVtZW50TWl4aW4iLCJDdXN0b21MaW5rIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJsaW5rIiwiT2JqZWN0IiwiaCIsImVsZW1lbnQiLCJwYXJlbnQiLCIkcm91dGVyIiwiJHJvb3QiLCIkb3B0aW9ucyIsIm9uIiwiY2xpY2siLCJuYXRpdmVPbiIsIkN1c3RvbUxpbmtNaXhpbiIsInRvIiwiZXhhY3QiLCJCb29sZWFuIiwiYXBwZW5kIiwicmVwbGFjZSIsImFjdGl2ZUNsYXNzIiwiZXhhY3RBY3RpdmVDbGFzcyIsImNvbXB1dGVkIiwiRGlzcGF0Y2hFdmVudE1peGluIiwiZXZlbnQiLCJBcnJheSIsIm1ldGhvZHMiLCJkaXNwYXRjaEV2ZW50IiwiZXZ0IiwiJGVtaXQiLCJ0YXJnZXQiLCJldmVudFRhcmdldCIsImFyZ3MiLCJldmVudEFyZ3MiLCJsaXN0ZW5lcnMiLCIkbGlzdGVuZXJzIiwiZSIsInNjb3BlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJNRENEcmF3ZXJBZGFwdGVyIiwiY2xhc3NOYW1lIiwiTURDRm91bmRhdGlvbiIsImFkYXB0ZXIiLCJhZGFwdGVyXyIsImNzc0NsYXNzZXMiLCJST09UIiwiRElTTUlTU0lCTEUiLCJNT0RBTCIsIk9QRU4iLCJBTklNQVRFIiwiT1BFTklORyIsIkNMT1NJTkciLCJzdHJpbmdzIiwiQVBQX0NPTlRFTlRfU0VMRUNUT1IiLCJTQ1JJTV9TRUxFQ1RPUiIsIkNMT1NFX0VWRU5UIiwiT1BFTl9FVkVOVCIsIk1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsImVsZW1lbnRIYXNDbGFzcyIsIm5vdGlmeUNsb3NlIiwibm90aWZ5T3BlbiIsInNhdmVGb2N1cyIsInJlc3RvcmVGb2N1cyIsImZvY3VzQWN0aXZlTmF2aWdhdGlvbkl0ZW0iLCJ0cmFwRm9jdXMiLCJyZWxlYXNlRm9jdXMiLCJkZWZhdWx0QWRhcHRlciIsImFuaW1hdGlvbkZyYW1lXyIsImFuaW1hdGlvblRpbWVyXyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwiaXNPcGVuIiwiaXNPcGVuaW5nIiwiaXNDbG9zaW5nIiwicnVuTmV4dEFuaW1hdGlvbkZyYW1lXyIsImtleUNvZGUiLCJpc0VzY2FwZSIsImNsb3NlIiwiaXNFbGVtZW50IiwiRWxlbWVudCIsImNsb3NlZCIsIm9wZW5lZCIsImNhbGxiYWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsIk1EQ01vZGFsRHJhd2VyRm91bmRhdGlvbiIsIk1EQ0NvbXBvbmVudCIsInJvb3QiLCJmb3VuZGF0aW9uIiwidW5kZWZpbmVkIiwicm9vdF8iLCJpbml0aWFsaXplIiwiZm91bmRhdGlvbl8iLCJnZXREZWZhdWx0Rm91bmRhdGlvbiIsImluaXQiLCJpbml0aWFsU3luY1dpdGhET00iLCJFcnJvciIsImRlc3Ryb3kiLCJldnRUeXBlIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZ0RGF0YSIsInNob3VsZEJ1YmJsZSIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiYnViYmxlcyIsImRvY3VtZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJNRENMaXN0QWRhcHRlciIsImluZGV4IiwiYXR0cmlidXRlIiwidmFsdWUiLCJsaXN0SXRlbUluZGV4IiwidGFiSW5kZXhWYWx1ZSIsImlzQ2hlY2tlZCIsIkxJU1RfSVRFTV9DTEFTUyIsIkxJU1RfSVRFTV9TRUxFQ1RFRF9DTEFTUyIsIkxJU1RfSVRFTV9BQ1RJVkFURURfQ0xBU1MiLCJBUklBX09SSUVOVEFUSU9OIiwiQVJJQV9PUklFTlRBVElPTl9IT1JJWk9OVEFMIiwiQVJJQV9TRUxFQ1RFRCIsIkFSSUFfQ0hFQ0tFRCIsIkFSSUFfQ0hFQ0tFRF9SQURJT19TRUxFQ1RPUiIsIkFSSUFfUk9MRV9DSEVDS0JPWF9TRUxFQ1RPUiIsIkFSSUFfQ0hFQ0tFRF9DSEVDS0JPWF9TRUxFQ1RPUiIsIlJBRElPX1NFTEVDVE9SIiwiQ0hFQ0tCT1hfU0VMRUNUT1IiLCJDSEVDS0JPWF9SQURJT19TRUxFQ1RPUiIsIkNISUxEX0VMRU1FTlRTX1RPX1RPR0dMRV9UQUJJTkRFWCIsIkZPQ1VTQUJMRV9DSElMRF9FTEVNRU5UUyIsIkVOQUJMRURfSVRFTVNfU0VMRUNUT1IiLCJBQ1RJT05fRVZFTlQiLCJFTEVNRU5UU19LRVlfQUxMT1dFRF9JTiIsIk1EQ0xpc3RGb3VuZGF0aW9uIiwiZ2V0TGlzdEl0ZW1Db3VudCIsImdldEZvY3VzZWRFbGVtZW50SW5kZXgiLCJzZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgiLCJyZW1vdmVBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgiLCJhZGRDbGFzc0ZvckVsZW1lbnRJbmRleCIsInJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4IiwiZm9jdXNJdGVtQXRJbmRleCIsInNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbiIsImhhc1JhZGlvQXRJbmRleCIsImhhc0NoZWNrYm94QXRJbmRleCIsImlzQ2hlY2tib3hDaGVja2VkQXRJbmRleCIsInNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4Iiwibm90aWZ5QWN0aW9uIiwiaXNGb2N1c0luc2lkZUxpc3QiLCJ3cmFwRm9jdXNfIiwiaXNWZXJ0aWNhbF8iLCJpc1NpbmdsZVNlbGVjdGlvbkxpc3RfIiwic2VsZWN0ZWRJbmRleF8iLCJmb2N1c2VkSXRlbUluZGV4XyIsInVzZUFjdGl2YXRlZENsYXNzXyIsImlzQ2hlY2tib3hMaXN0XyIsImlzUmFkaW9MaXN0XyIsInVzZUFjdGl2YXRlZCIsImlzSW5kZXhWYWxpZF8iLCJzZXRDaGVja2JveEF0SW5kZXhfIiwic2V0UmFkaW9BdEluZGV4XyIsInNldFNpbmdsZVNlbGVjdGlvbkF0SW5kZXhfIiwic2V0VGFiaW5kZXhUb0ZpcnN0U2VsZWN0ZWRJdGVtXyIsImlzUm9vdExpc3RJdGVtIiwiYXJyb3dMZWZ0IiwiYXJyb3dVcCIsImFycm93UmlnaHQiLCJhcnJvd0Rvd24iLCJpc0hvbWUiLCJpc0VuZCIsImlzRW50ZXIiLCJpc1NwYWNlIiwiY3VycmVudEluZGV4IiwibmV4dEluZGV4IiwicHJldmVudERlZmF1bHRFdmVudF8iLCJmb2N1c05leHRFbGVtZW50IiwiZm9jdXNQcmV2RWxlbWVudCIsImZvY3VzRmlyc3RFbGVtZW50IiwiZm9jdXNMYXN0RWxlbWVudCIsInRhZ05hbWUiLCJpc1NlbGVjdGFibGVMaXN0XyIsInNldFNlbGVjdGVkSW5kZXhPbkFjdGlvbl8iLCJzZXRUYWJpbmRleEF0SW5kZXhfIiwidG9nZ2xlQ2hlY2tib3giLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJwcmV2ZW50RGVmYXVsdCIsImNvdW50IiwicHJldkluZGV4IiwibGFzdEluZGV4Iiwic2VsZWN0ZWRDbGFzc05hbWUiLCJpIiwidGFyZ2V0SW5kZXgiLCJsZW5ndGgiLCJyZWR1Y2UiLCJtaW5JbmRleCIsIm1pbiIsInNvbWUiLCJpc0luZGV4SW5SYW5nZV8iLCJsaXN0U2l6ZSIsInRvZ2dsZUNoZWNrYm94QXRJbmRleF8iLCJzZXRTZWxlY3RlZEluZGV4IiwicHVzaCIsImZpbHRlciIsIm1hdGNoZXMiLCJzZWxlY3RvciIsIm5hdGl2ZU1hdGNoZXMiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsImNhbGwiLCJNRENMaXN0IiwiaGFuZGxlS2V5ZG93bl8iLCJoYW5kbGVDbGlja18iLCJmb2N1c0luRXZlbnRMaXN0ZW5lcl8iLCJmb2N1c091dEV2ZW50TGlzdGVuZXJfIiwiaGFuZGxlQ2xpY2tFdmVudF8iLCJiaW5kIiwiaGFuZGxlS2V5ZG93bkV2ZW50XyIsImhhbmRsZUZvY3VzSW5FdmVudF8iLCJoYW5kbGVGb2N1c091dEV2ZW50XyIsImxheW91dCIsImluaXRpYWxpemVMaXN0VHlwZSIsImRpcmVjdGlvbiIsImdldEF0dHJpYnV0ZSIsInZlcnRpY2FsIiwic2xpY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCIsImxpc3RFbGVtZW50cyIsImdldExpc3RJdGVtSW5kZXhfIiwiaGFuZGxlRm9jdXNJbiIsImhhbmRsZUZvY3VzT3V0IiwiaGFuZGxlS2V5ZG93biIsImhhbmRsZUNsaWNrIiwiY2hlY2tib3hMaXN0SXRlbXMiLCJzaW5nbGVTZWxlY3RlZExpc3RJdGVtIiwicXVlcnlTZWxlY3RvciIsInJhZGlvU2VsZWN0ZWRMaXN0SXRlbSIsInByZXNlbGVjdGVkSXRlbXMiLCJzZWxlY3RlZEluZGV4IiwibWFwIiwibGlzdEl0ZW0iLCJzZXRVc2VBY3RpdmF0ZWRDbGFzcyIsInNpbmdsZVNlbGVjdGlvbiIsImFjdGl2ZUVsZW1lbnQiLCJhdHRyIiwicmVtb3ZlQXR0cmlidXRlIiwiYWRkIiwicmVtb3ZlIiwiZm9jdXMiLCJsaXN0SXRlbUNoaWxkcmVuIiwidG9nZ2xlRWwiLCJjaGVja2VkIiwiaW5pdEV2ZW50IiwiZW1pdCIsInNldFZlcnRpY2FsT3JpZW50YXRpb24iLCJzZXRXcmFwRm9jdXMiLCJpc1NpbmdsZVNlbGVjdGlvbkxpc3QiLCJzZXRTaW5nbGVTZWxlY3Rpb24iLCJnZXRTZWxlY3RlZEluZGV4IiwiY2FuZGlkYXRlU2VsZWN0b3JzIiwiY2FuZGlkYXRlU2VsZWN0b3IiLCJqb2luIiwicHJvdG90eXBlIiwidGFiYmFibGUiLCJlbCIsIm9wdGlvbnMiLCJlbGVtZW50RG9jdW1lbnQiLCJvd25lckRvY3VtZW50IiwicmVndWxhclRhYmJhYmxlcyIsIm9yZGVyZWRUYWJiYWJsZXMiLCJ1bnRvdWNoYWJpbGl0eUNoZWNrZXIiLCJVbnRvdWNoYWJpbGl0eUNoZWNrZXIiLCJjYW5kaWRhdGVzIiwiaW5jbHVkZUNvbnRhaW5lciIsImFwcGx5IiwidW5zaGlmdCIsImNhbmRpZGF0ZSIsImNhbmRpZGF0ZVRhYmluZGV4IiwiaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlIiwiZ2V0VGFiaW5kZXgiLCJkb2N1bWVudE9yZGVyIiwidGFiSW5kZXgiLCJub2RlIiwidGFiYmFibGVOb2RlcyIsInNvcnQiLCJzb3J0T3JkZXJlZFRhYmJhYmxlcyIsImEiLCJjb25jYXQiLCJpc1RhYmJhYmxlIiwiaXNGb2N1c2FibGUiLCJpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlIiwiaXNOb25UYWJiYWJsZVJhZGlvIiwiZGlzYWJsZWQiLCJpc0hpZGRlbklucHV0IiwiaXNVbnRvdWNoYWJsZSIsImZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yIiwidGFiaW5kZXhBdHRyIiwicGFyc2VJbnQiLCJpc05hTiIsImlzQ29udGVudEVkaXRhYmxlIiwiYiIsImZpbmQiLCJsaXN0IiwicHJlZGljYXRlIiwiY29udGVudEVkaXRhYmxlIiwiaXNJbnB1dCIsImlzUmFkaW8iLCJpc1RhYmJhYmxlUmFkaW8iLCJnZXRDaGVja2VkUmFkaW8iLCJub2RlcyIsInJhZGlvU2V0IiwiZG9jIiwiY2FjaGUiLCJoYXNEaXNwbGF5Tm9uZSIsIm5vZGVDb21wdXRlZFN0eWxlIiwibm9kZVR5cGUiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwiY2FjaGVkIiwiaXRlbSIsImRlZmF1bHRWaWV3IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInJlc3VsdCIsImRpc3BsYXkiLCJwYXJlbnROb2RlIiwiZG9jdW1lbnRFbGVtZW50IiwiY29tcHV0ZWRTdHlsZSIsInZpc2liaWxpdHkiLCJtb2R1bGUiLCJleHRlbmQiLCJoYXNPd25Qcm9wZXJ0eSIsImFyZ3VtZW50cyIsInNvdXJjZSIsImFjdGl2ZUZvY3VzVHJhcHMiLCJ0cmFwUXVldWUiLCJhY3RpdmF0ZVRyYXAiLCJ0cmFwIiwiYWN0aXZlVHJhcCIsInBhdXNlIiwidHJhcEluZGV4Iiwic3BsaWNlIiwiZGVhY3RpdmF0ZVRyYXAiLCJ1bnBhdXNlIiwiZm9jdXNUcmFwIiwidXNlck9wdGlvbnMiLCJjb250YWluZXIiLCJjb25maWciLCJ4dGVuZCIsInJldHVybkZvY3VzT25EZWFjdGl2YXRlIiwiZXNjYXBlRGVhY3RpdmF0ZXMiLCJzdGF0ZSIsImZpcnN0VGFiYmFibGVOb2RlIiwibGFzdFRhYmJhYmxlTm9kZSIsIm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbiIsIm1vc3RSZWNlbnRseUZvY3VzZWROb2RlIiwiYWN0aXZlIiwicGF1c2VkIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiYWN0aXZhdGVPcHRpb25zIiwidXBkYXRlVGFiYmFibGVOb2RlcyIsIm9uQWN0aXZhdGUiLCJhZGRMaXN0ZW5lcnMiLCJkZWFjdGl2YXRlT3B0aW9ucyIsInJlbW92ZUxpc3RlbmVycyIsIm9uRGVhY3RpdmF0ZSIsInJldHVybkZvY3VzIiwiZGVsYXkiLCJ0cnlGb2N1cyIsImdldEluaXRpYWxGb2N1c05vZGUiLCJjaGVja0ZvY3VzSW4iLCJjaGVja1BvaW50ZXJEb3duIiwiY2hlY2tDbGljayIsImNoZWNrS2V5IiwiZ2V0Tm9kZUZvck9wdGlvbiIsIm9wdGlvbk5hbWUiLCJvcHRpb25WYWx1ZSIsImNsaWNrT3V0c2lkZURlYWN0aXZhdGVzIiwiRG9jdW1lbnQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJpc0VzY2FwZUV2ZW50IiwiaXNUYWJFdmVudCIsImNoZWNrVGFiIiwic2hpZnRLZXkiLCJpc1NlbGVjdGFibGVJbnB1dCIsInNlbGVjdCIsImZuIiwiTURDUmlwcGxlQWRhcHRlciIsInZhck5hbWUiLCJVTkJPVU5ERUQiLCJCR19GT0NVU0VEIiwiRkdfQUNUSVZBVElPTiIsIkZHX0RFQUNUSVZBVElPTiIsIlZBUl9MRUZUIiwiVkFSX1RPUCIsIlZBUl9GR19TSVpFIiwiVkFSX0ZHX1NDQUxFIiwiVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCIsIlZBUl9GR19UUkFOU0xBVEVfRU5EIiwibnVtYmVycyIsIlBBRERJTkciLCJJTklUSUFMX09SSUdJTl9TQ0FMRSIsIkRFQUNUSVZBVElPTl9USU1FT1VUX01TIiwiRkdfREVBQ1RJVkFUSU9OX01TIiwiVEFQX0RFTEFZX01TIiwic3VwcG9ydHNDc3NWYXJpYWJsZXNfIiwic3VwcG9ydHNQYXNzaXZlXyIsImRldGVjdEVkZ2VQc2V1ZG9WYXJCdWciLCJ3aW5kb3dPYmoiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJoYXNQc2V1ZG9WYXJCdWciLCJib3JkZXJUb3BTdHlsZSIsInN1cHBvcnRzQ3NzVmFyaWFibGVzIiwiZm9yY2VSZWZyZXNoIiwic3VwcG9ydHNGdW5jdGlvblByZXNlbnQiLCJDU1MiLCJzdXBwb3J0cyIsImV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMiLCJ3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMiLCJhcHBseVBhc3NpdmUiLCJnbG9iYWxPYmoiLCJpc1N1cHBvcnRlZCIsInBhc3NpdmUiLCJnZXRNYXRjaGVzUHJvcGVydHkiLCJIVE1MRWxlbWVudFByb3RvdHlwZSIsIm1hdGNoZXNNZXRob2RzIiwibWV0aG9kIiwibWF0Y2hlc01ldGhvZCIsImdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyIsImV2IiwicGFnZU9mZnNldCIsImNsaWVudFJlY3QiLCJ4IiwieSIsImRvY3VtZW50WCIsImxlZnQiLCJkb2N1bWVudFkiLCJ0b3AiLCJub3JtYWxpemVkWCIsIm5vcm1hbGl6ZWRZIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiQUNUSVZBVElPTl9FVkVOVF9UWVBFUyIsIlBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTIiwiYWN0aXZhdGVkVGFyZ2V0cyIsIk1EQ1JpcHBsZUZvdW5kYXRpb24iLCJicm93c2VyU3VwcG9ydHNDc3NWYXJzIiwiaXNVbmJvdW5kZWQiLCJpc1N1cmZhY2VBY3RpdmUiLCJpc1N1cmZhY2VEaXNhYmxlZCIsImNvbnRhaW5zRXZlbnRUYXJnZXQiLCJyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyIiwiZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwiZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJ1cGRhdGVDc3NWYXJpYWJsZSIsImNvbXB1dGVCb3VuZGluZ1JlY3QiLCJnZXRXaW5kb3dQYWdlT2Zmc2V0IiwibGF5b3V0RnJhbWVfIiwiZnJhbWVfIiwid2lkdGgiLCJoZWlnaHQiLCJhY3RpdmF0aW9uU3RhdGVfIiwiZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8iLCJpbml0aWFsU2l6ZV8iLCJtYXhSYWRpdXNfIiwiYWN0aXZhdGVIYW5kbGVyXyIsImFjdGl2YXRlXyIsImRlYWN0aXZhdGVIYW5kbGVyXyIsImRlYWN0aXZhdGVfIiwiZm9jdXNIYW5kbGVyXyIsImhhbmRsZUZvY3VzIiwiYmx1ckhhbmRsZXJfIiwiaGFuZGxlQmx1ciIsInJlc2l6ZUhhbmRsZXJfIiwidW5ib3VuZGVkQ29vcmRzXyIsImZnU2NhbGVfIiwiYWN0aXZhdGlvblRpbWVyXyIsImZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyIsImFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8iLCJhY3RpdmF0aW9uVGltZXJDYWxsYmFja18iLCJydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8iLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudF8iLCJpc0FjdGl2YXRlZCIsImhhc0RlYWN0aXZhdGlvblVYUnVuIiwid2FzQWN0aXZhdGVkQnlQb2ludGVyIiwid2FzRWxlbWVudE1hZGVBY3RpdmUiLCJhY3RpdmF0aW9uRXZlbnQiLCJpc1Byb2dyYW1tYXRpYyIsInN1cHBvcnRzUHJlc3NSaXBwbGUiLCJzdXBwb3J0c1ByZXNzUmlwcGxlXyIsInJlZ2lzdGVyUm9vdEhhbmRsZXJzXyIsImxheW91dEludGVybmFsXyIsInJlbW92ZUNzc1ZhcnNfIiwiZGVyZWdpc3RlclJvb3RIYW5kbGVyc18iLCJkZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfIiwia2V5cyIsImsiLCJhY3RpdmF0aW9uU3RhdGUiLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudCIsImlzU2FtZUludGVyYWN0aW9uIiwiaGFzQWN0aXZhdGVkQ2hpbGQiLCJyZXNldEFjdGl2YXRpb25TdGF0ZV8iLCJyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyIsImNoZWNrRWxlbWVudE1hZGVBY3RpdmVfIiwiYW5pbWF0ZUFjdGl2YXRpb25fIiwidHJhbnNsYXRlU3RhcnQiLCJ0cmFuc2xhdGVFbmQiLCJnZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwicm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfIiwiYWN0aXZhdGlvbkhhc0VuZGVkIiwiYW5pbWF0ZURlYWN0aXZhdGlvbl8iLCJtYXhEaW0iLCJtYXgiLCJnZXRCb3VuZGVkUmFkaXVzIiwiaHlwb3RlbnVzZSIsInNxcnQiLCJwb3ciLCJ1cGRhdGVMYXlvdXRDc3NWYXJzXyIsInJvdW5kIiwidW5ib3VuZGVkIiwiTURDUmlwcGxlIiwidW5ib3VuZGVkXyIsInNldFVuYm91bmRlZCIsImNyZWF0ZUFkYXB0ZXIiLCJkYXRhc2V0Iiwic2V0VW5ib3VuZGVkXyIsInJpcHBsZSIsImluc3RhbmNlIiwiTUFUQ0hFUyIsInV0aWwiLCJIVE1MRWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYWdlWE9mZnNldCIsInBhZ2VZT2Zmc2V0IiwiUmlwcGxlQ2FwYWJsZVN1cmZhY2UiLCJSaXBwbGVCYXNlIiwicmVmIiwiX21hdGNoZXMiLCIkZWwiLCIkc2V0IiwiY2xhc3NlcyIsIiRkZWxldGUiLCJzdHlsZXMiLCJSaXBwbGVNaXhpbiIsIm1vdW50ZWQiLCJiZWZvcmVEZXN0cm95IiwibWRjRHJhd2VyIiwibWRjRHJhd2VySGVhZGVyIiwibWRjRHJhd2VyTGlzdCIsIm1kY0RyYXdlckl0ZW0iLCJtZGNEcmF3ZXJEaXZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQU8sU0FBU0EsUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEI7SUFDL0I7SUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7SUFDQSxNQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7SUFDakNELElBQUFBLElBQUksR0FBR0MsTUFBTSxDQUFDQyxHQUFkO0lBQ0QsR0FGRCxNQUVPLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztJQUN4QztJQUNBSCxJQUFBQSxJQUFJLEdBQUdHLE1BQU0sQ0FBQ0QsR0FBZDtJQUNEOztJQUNELE1BQUlGLElBQUosRUFBVTtJQUNSQSxJQUFBQSxJQUFJLENBQUNJLEdBQUwsQ0FBU0wsTUFBVDtJQUNEO0lBQ0Y7O0lDWk0sU0FBU00sVUFBVCxDQUFvQkMsVUFBcEIsRUFBZ0M7SUFDckMsU0FBTztJQUNMQyxJQUFBQSxPQUFPLEVBQUUsYUFESjtJQUVMQyxJQUFBQSxPQUFPLEVBQUUsaUJBQUFDLEVBQUUsRUFBSTtJQUNiLFdBQUssSUFBSUMsR0FBVCxJQUFnQkosVUFBaEIsRUFBNEI7SUFDMUIsWUFBSUssU0FBUyxHQUFHTCxVQUFVLENBQUNJLEdBQUQsQ0FB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
