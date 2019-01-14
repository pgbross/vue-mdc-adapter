/**
* @module vue-mdc-adapterdialog 0.19.0-beta
* @exports VueMDCDialog
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.42.0","material-components-web":"^0.42.1"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.VueMDCDialog = factory());
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

    /* global CustomEvent */

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
    var cssClasses = {
      OPEN: 'mdc-dialog--open',
      OPENING: 'mdc-dialog--opening',
      CLOSING: 'mdc-dialog--closing',
      SCROLLABLE: 'mdc-dialog--scrollable',
      STACKED: 'mdc-dialog--stacked',
      SCROLL_LOCK: 'mdc-dialog-scroll-lock'
    };
    var strings = {
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
    var numbers = {
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
          return cssClasses;
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

        _this.escapeKeyAction_ = strings.CLOSE_ACTION;
        /** @private {string} */

        _this.scrimClickAction_ = strings.CLOSE_ACTION;
        /** @private {boolean} */

        _this.autoStackButtons_ = true;
        /** @private {boolean} */

        _this.areButtonsStacked_ = false;
        return _this;
      }

      _createClass(MDCDialogFoundation, [{
        key: "init",
        value: function init() {
          if (this.adapter_.hasClass(cssClasses.STACKED)) {
            this.setAutoStackButtons(false);
          }
        }
      }, {
        key: "destroy",
        value: function destroy() {
          if (this.isOpen_) {
            this.close(strings.DESTROY_ACTION);
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
          this.adapter_.addClass(cssClasses.OPENING); // Wait a frame once display is no longer "none", to establish basis for animation

          this.runNextAnimationFrame_(function () {
            _this2.adapter_.addClass(cssClasses.OPEN);

            _this2.adapter_.addBodyClass(cssClasses.SCROLL_LOCK);

            _this2.layout();

            _this2.animationTimer_ = setTimeout(function () {
              _this2.handleAnimationTimerEnd_();

              _this2.adapter_.trapFocus();

              _this2.adapter_.notifyOpened();
            }, numbers.DIALOG_ANIMATION_OPEN_TIME_MS);
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
          this.adapter_.addClass(cssClasses.CLOSING);
          this.adapter_.removeClass(cssClasses.OPEN);
          this.adapter_.removeBodyClass(cssClasses.SCROLL_LOCK);
          cancelAnimationFrame(this.animationFrame_);
          this.animationFrame_ = 0;
          clearTimeout(this.animationTimer_);
          this.animationTimer_ = setTimeout(function () {
            _this3.adapter_.releaseFocus();

            _this3.handleAnimationTimerEnd_();

            _this3.adapter_.notifyClosed(action);
          }, numbers.DIALOG_ANIMATION_CLOSE_TIME_MS);
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
          this.adapter_.removeClass(cssClasses.STACKED);
          var areButtonsStacked = this.adapter_.areButtonsStacked();

          if (areButtonsStacked) {
            this.adapter_.addClass(cssClasses.STACKED);
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
          this.adapter_.removeClass(cssClasses.SCROLLABLE);

          if (this.adapter_.isContentScrollable()) {
            this.adapter_.addClass(cssClasses.SCROLLABLE);
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

          if (isClick && this.adapter_.eventTargetMatches(evt.target, strings.SCRIM_SELECTOR) && this.scrimClickAction_ !== '') {
            this.close(this.scrimClickAction_);
          } else if (isClick || evt.key === 'Space' || evt.keyCode === 32 || isEnter) {
            var action = this.adapter_.getActionFromEvent(evt);

            if (action) {
              this.close(action);
            } else if (isEnter && !this.adapter_.eventTargetMatches(evt.target, strings.SUPPRESS_DEFAULT_PRESS_SELECTOR)) {
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
          this.adapter_.removeClass(cssClasses.OPENING);
          this.adapter_.removeClass(cssClasses.CLOSING);
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

    var tabbable = function (el, options) {
      options = options || {};
      var elementDocument = el.ownerDocument || el;
      var basicTabbables = [];
      var orderedTabbables = []; // A node is "available" if
      // - it's computed style

      var isUnavailable = createIsUnavailable(elementDocument);
      var candidateSelectors = ['input', 'select', 'a[href]', 'textarea', 'button', '[tabindex]'];
      var candidates = el.querySelectorAll(candidateSelectors.join(','));

      if (options.includeContainer) {
        var matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

        if (candidateSelectors.some(function (candidateSelector) {
          return matches.call(el, candidateSelector);
        })) {
          candidates = Array.prototype.slice.apply(candidates);
          candidates.unshift(el);
        }
      }

      var candidate, candidateIndexAttr, candidateIndex;

      for (var i = 0, l = candidates.length; i < l; i++) {
        candidate = candidates[i];
        candidateIndexAttr = parseInt(candidate.getAttribute('tabindex'), 10);
        candidateIndex = isNaN(candidateIndexAttr) ? candidate.tabIndex : candidateIndexAttr;

        if (candidateIndex < 0 || candidate.tagName === 'INPUT' && candidate.type === 'hidden' || candidate.disabled || isUnavailable(candidate, elementDocument)) {
          continue;
        }

        if (candidateIndex === 0) {
          basicTabbables.push(candidate);
        } else {
          orderedTabbables.push({
            index: i,
            tabIndex: candidateIndex,
            node: candidate
          });
        }
      }

      var tabbableNodes = orderedTabbables.sort(function (a, b) {
        return a.tabIndex === b.tabIndex ? a.index - b.index : a.tabIndex - b.tabIndex;
      }).map(function (a) {
        return a.node;
      });
      Array.prototype.push.apply(tabbableNodes, basicTabbables);
      return tabbableNodes;
    };

    function createIsUnavailable(elementDocument) {
      // Node cache must be refreshed on every check, in case
      // the content of the element has changed
      var isOffCache = []; // "off" means `display: none;`, as opposed to "hidden",
      // which means `visibility: hidden;`. getComputedStyle
      // accurately reflects visiblity in context but not
      // "off" state, so we need to recursively check parents.

      function isOff(node, nodeComputedStyle) {
        if (node === elementDocument.documentElement) return false; // Find the cached node (Array.prototype.find not available in IE9)

        for (var i = 0, length = isOffCache.length; i < length; i++) {
          if (isOffCache[i][0] === node) return isOffCache[i][1];
        }

        nodeComputedStyle = nodeComputedStyle || elementDocument.defaultView.getComputedStyle(node);
        var result = false;

        if (nodeComputedStyle.display === 'none') {
          result = true;
        } else if (node.parentNode) {
          result = isOff(node.parentNode);
        }

        isOffCache.push([node, result]);
        return result;
      }

      return function isUnavailable(node) {
        if (node === elementDocument.documentElement) return false;
        var computedStyle = elementDocument.defaultView.getComputedStyle(node);
        if (isOff(node, computedStyle)) return true;
        return computedStyle.visibility === 'hidden';
      };
    }

    var listeningFocusTrap = null;

    function focusTrap(element, userOptions) {
      var tabbableNodes = [];
      var firstTabbableNode = null;
      var lastTabbableNode = null;
      var nodeFocusedBeforeActivation = null;
      var active = false;
      var paused = false;
      var tabEvent = null;
      var container = typeof element === 'string' ? document.querySelector(element) : element;
      var config = userOptions || {};
      config.returnFocusOnDeactivate = userOptions && userOptions.returnFocusOnDeactivate !== undefined ? userOptions.returnFocusOnDeactivate : true;
      config.escapeDeactivates = userOptions && userOptions.escapeDeactivates !== undefined ? userOptions.escapeDeactivates : true;
      var trap = {
        activate: activate,
        deactivate: deactivate,
        pause: pause,
        unpause: unpause
      };
      return trap;

      function activate(activateOptions) {
        if (active) return;
        var defaultedActivateOptions = {
          onActivate: activateOptions && activateOptions.onActivate !== undefined ? activateOptions.onActivate : config.onActivate
        };
        active = true;
        paused = false;
        nodeFocusedBeforeActivation = document.activeElement;

        if (defaultedActivateOptions.onActivate) {
          defaultedActivateOptions.onActivate();
        }

        addListeners();
        return trap;
      }

      function deactivate(deactivateOptions) {
        if (!active) return;
        var defaultedDeactivateOptions = {
          returnFocus: deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate,
          onDeactivate: deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate
        };
        removeListeners();

        if (defaultedDeactivateOptions.onDeactivate) {
          defaultedDeactivateOptions.onDeactivate();
        }

        if (defaultedDeactivateOptions.returnFocus) {
          setTimeout(function () {
            tryFocus(nodeFocusedBeforeActivation);
          }, 0);
        }

        active = false;
        paused = false;
        return this;
      }

      function pause() {
        if (paused || !active) return;
        paused = true;
        removeListeners();
      }

      function unpause() {
        if (!paused || !active) return;
        paused = false;
        addListeners();
      }

      function addListeners() {
        if (!active) return; // There can be only one listening focus trap at a time

        if (listeningFocusTrap) {
          listeningFocusTrap.pause();
        }

        listeningFocusTrap = trap;
        updateTabbableNodes(); // Ensure that the focused element doesn't capture the event that caused the focus trap activation

        setTimeout(function () {
          tryFocus(firstFocusNode());
        }, 0);
        document.addEventListener('focus', checkFocus, true);
        document.addEventListener('click', checkClick, true);
        document.addEventListener('mousedown', checkPointerDown, true);
        document.addEventListener('touchstart', checkPointerDown, true);
        document.addEventListener('keydown', checkKey, true);
        return trap;
      }

      function removeListeners() {
        if (!active || listeningFocusTrap !== trap) return;
        document.removeEventListener('focus', checkFocus, true);
        document.removeEventListener('click', checkClick, true);
        document.removeEventListener('mousedown', checkPointerDown, true);
        document.removeEventListener('touchstart', checkPointerDown, true);
        document.removeEventListener('keydown', checkKey, true);
        listeningFocusTrap = null;
        return trap;
      }

      function getNodeForOption(optionName) {
        var optionValue = config[optionName];
        var node = optionValue;

        if (!optionValue) {
          return null;
        }

        if (typeof optionValue === 'string') {
          node = document.querySelector(optionValue);

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

      function firstFocusNode() {
        var node;

        if (getNodeForOption('initialFocus') !== null) {
          node = getNodeForOption('initialFocus');
        } else if (container.contains(document.activeElement)) {
          node = document.activeElement;
        } else {
          node = tabbableNodes[0] || getNodeForOption('fallbackFocus');
        }

        if (!node) {
          throw new Error('You can\'t have a focus-trap without at least one focusable element');
        }

        return node;
      } // This needs to be done on mousedown and touchstart instead of click
      // so that it precedes the focus event


      function checkPointerDown(e) {
        if (config.clickOutsideDeactivates && !container.contains(e.target)) {
          deactivate({
            returnFocus: false
          });
        }
      }

      function checkClick(e) {
        if (config.clickOutsideDeactivates) return;
        if (container.contains(e.target)) return;
        e.preventDefault();
        e.stopImmediatePropagation();
      }

      function checkFocus(e) {
        if (container.contains(e.target)) return;
        e.preventDefault();
        e.stopImmediatePropagation(); // Checking for a blur method here resolves a Firefox issue (#15)

        if (typeof e.target.blur === 'function') e.target.blur();

        if (tabEvent) {
          readjustFocus(tabEvent);
        }
      }

      function checkKey(e) {
        if (e.key === 'Tab' || e.keyCode === 9) {
          handleTab(e);
        }

        if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
          deactivate();
        }
      }

      function handleTab(e) {
        updateTabbableNodes();

        if (e.target.hasAttribute('tabindex') && Number(e.target.getAttribute('tabindex')) < 0) {
          return tabEvent = e;
        }

        e.preventDefault();
        var currentFocusIndex = tabbableNodes.indexOf(e.target);

        if (e.shiftKey) {
          if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
            return tryFocus(lastTabbableNode);
          }

          return tryFocus(tabbableNodes[currentFocusIndex - 1]);
        }

        if (e.target === lastTabbableNode) return tryFocus(firstTabbableNode);
        tryFocus(tabbableNodes[currentFocusIndex + 1]);
      }

      function updateTabbableNodes() {
        tabbableNodes = tabbable(container);
        firstTabbableNode = tabbableNodes[0];
        lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
      }

      function readjustFocus(e) {
        if (e.shiftKey) return tryFocus(lastTabbableNode);
        tryFocus(firstTabbableNode);
      }
    }

    function isEscapeEvent(e) {
      return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
    }

    function tryFocus(node) {
      if (!node || !node.focus) return;
      if (node === document.activeElement) return;
      node.focus();

      if (node.tagName.toLowerCase() === 'input') {
        node.select();
      }
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
    var numbers$1 = {
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
          return numbers$1;
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
            }, numbers$1.FG_DEACTIVATION_MS);
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
        component.__file = "/ddata/extra/vma/components/button/mdc-button-base.vue";

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
      

      
      var mdcButtonBase = __vue_normalize__$1(
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
                
    /* template */

      /* style */
      const __vue_inject_styles__$2 = undefined;
      /* scoped */
      const __vue_scope_id__$2 = undefined;
      /* module identifier */
      const __vue_module_identifier__$2 = undefined;
      /* functional template */
      const __vue_is_functional_template__$2 = undefined;
      /* component normalizer */
      function __vue_normalize__$2(
        template, style, script,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        const component = (typeof script === 'function' ? script.options : script) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "/ddata/extra/vma/components/button/mdc-button.vue";

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
      

      
      var mdcButton = __vue_normalize__$2(
        {},
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
        if (matches(el, selector)) {
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


    function matches(element, selector) {
      var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
      return nativeMatches.call(element, selector);
    }

    var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
    var candidateSelector = candidateSelectors.join(',');
    var matches$1 = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

    function tabbable$1(el, options) {
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

    tabbable$1.isTabbable = isTabbable;
    tabbable$1.isFocusable = isFocusable;

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

    var tabbable_1 = tabbable$1;

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
        if (config.escapeDeactivates !== false && isEscapeEvent$1(e)) {
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

    function isEscapeEvent$1(e) {
      return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
    }

    function isTabEvent(e) {
      return e.key === 'Tab' || e.keyCode === 9;
    }

    function delay(fn) {
      return setTimeout(fn, 0);
    }

    var focusTrap_1$1 = focusTrap$1;

    //
    var strings$2 = MDCDialogFoundation.strings;
    var script$3 = {
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

        this.buttons_ = [].slice.call(this.$el.querySelectorAll(strings$2.BUTTON_SELECTOR));
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
            return matches(target, selector);
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
            var element = closest(event.target, "[".concat(strings$2.ACTION_ATTRIBUTE, "]"));
            return element && element.getAttribute(strings$2.ACTION_ATTRIBUTE);
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
            return _this.$emit(strings$2.OPENING_EVENT, {});
          },
          notifyOpened: function notifyOpened() {
            return _this.$emit(strings$2.OPENED_EVENT, {});
          },
          notifyClosing: function notifyClosing(action) {
            _this.$emit('change', false); // console.log(action)


            _this.$emit(strings$2.CLOSING_EVENT, action ? {
              action: action
            } : {});
          },
          notifyClosed: function notifyClosed(action) {
            return _this.$emit(strings$2.CLOSED_EVENT, action ? {
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
                const __vue_script__$3 = script$3;
                
    /* template */
    var __vue_render__$2 = function() {
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
      /* component normalizer */
      function __vue_normalize__$3(
        template, style, script,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        const component = (typeof script === 'function' ? script.options : script) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "/ddata/extra/vma/components/dialog/mdc-dialog.vue";

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
      

      
      var mdcDialog = __vue_normalize__$3(
        { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
        __vue_inject_styles__$3,
        __vue_script__$3,
        __vue_scope_id__$3,
        __vue_is_functional_template__$3,
        __vue_module_identifier__$3,
        undefined,
        undefined
      );

    var plugin = BasePlugin({
      mdcDialog: mdcDialog
    });

    autoInit(plugin);

    return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXV0by1pbml0LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Jhc2UtcGx1Z2luLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1lbGVtZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1ldmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tYnV0dG9uLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Rpc3BhdGNoLWV2ZW50LW1peGluLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kaWFsb2cvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZGlhbG9nL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZGlhbG9nL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdGFiYmFibGUvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RpYWxvZy9ub2RlX21vZHVsZXMvZm9jdXMtdHJhcC9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZGlhbG9nL3V0aWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUtYmFzZS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUudnVlIiwiLi4vLi4vY29tcG9uZW50cy9idXR0b24vbWRjLWJ1dHRvbi1iYXNlLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL21kYy1idXR0b24udnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vcG9ueWZpbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZm9jdXMtdHJhcC9ub2RlX21vZHVsZXMvdGFiYmFibGUvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2ZvY3VzLXRyYXAvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL2RpYWxvZy9tZGMtZGlhbG9nLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGF1dG9Jbml0KHBsdWdpbikge1xuICAvLyBBdXRvLWluc3RhbGxcbiAgbGV0IF9WdWUgPSBudWxsXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIF9WdWUgPSB3aW5kb3cuVnVlXG4gIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvKmdsb2JhbCBnbG9iYWwqL1xuICAgIF9WdWUgPSBnbG9iYWwuVnVlXG4gIH1cbiAgaWYgKF9WdWUpIHtcbiAgICBfVnVlLnVzZShwbHVnaW4pXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBCYXNlUGx1Z2luKGNvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnX19WRVJTSU9OX18nLFxuICAgIGluc3RhbGw6IHZtID0+IHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2tleV1cbiAgICAgICAgdm0uY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQpXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50ID0ge1xuICBmdW5jdGlvbmFsOiB0cnVlLFxuICByZW5kZXIoY3JlYXRlRWxlbWVudCwgY29udGV4dCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFxuICAgICAgY29udGV4dC5wcm9wcy5pcyB8fCBjb250ZXh0LnByb3BzLnRhZyB8fCAnZGl2JyxcbiAgICAgIGNvbnRleHQuZGF0YSxcbiAgICAgIGNvbnRleHQuY2hpbGRyZW5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUVsZW1lbnRNaXhpbiA9IHtcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUVsZW1lbnRcbiAgfVxufVxuIiwiLyogZ2xvYmFsIEN1c3RvbUV2ZW50ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Q3VzdG9tRXZlbnQoZWwsIGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gIGxldCBldnRcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICBidWJibGVzOiBzaG91bGRCdWJibGVcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKVxuICB9XG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxufVxuIiwiZXhwb3J0IGNvbnN0IEN1c3RvbUJ1dHRvbiA9IHtcbiAgbmFtZTogJ2N1c3RvbS1idXR0b24nLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIGxpbms6IE9iamVjdFxuICB9LFxuICByZW5kZXIoaCwgY29udGV4dCkge1xuICAgIGxldCBlbGVtZW50XG4gICAgbGV0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LmRhdGEpXG5cbiAgICBpZiAoY29udGV4dC5wcm9wcy5saW5rICYmIGNvbnRleHQucGFyZW50LiRyb3V0ZXIpIHtcbiAgICAgIC8vIHJvdXRlci1saW5rIGNhc2VcbiAgICAgIGVsZW1lbnQgPSBjb250ZXh0LnBhcmVudC4kcm9vdC4kb3B0aW9ucy5jb21wb25lbnRzWydyb3V0ZXItbGluayddXG4gICAgICBkYXRhLnByb3BzID0gT2JqZWN0LmFzc2lnbih7IHRhZzogY29udGV4dC5wcm9wcy50YWcgfSwgY29udGV4dC5wcm9wcy5saW5rKVxuICAgICAgZGF0YS5hdHRycy5yb2xlID0gJ2J1dHRvbidcbiAgICAgIGlmIChkYXRhLm9uLmNsaWNrKSB7XG4gICAgICAgIGRhdGEubmF0aXZlT24gPSB7IGNsaWNrOiBkYXRhLm9uLmNsaWNrIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy5ocmVmKSB7XG4gICAgICAvLyBocmVmIGNhc2VcbiAgICAgIGVsZW1lbnQgPSAnYSdcbiAgICAgIGRhdGEuYXR0cnMucm9sZSA9ICdidXR0b24nXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGJ1dHRvbiBmYWxsYmFja1xuICAgICAgZWxlbWVudCA9ICdidXR0b24nXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoZWxlbWVudCwgZGF0YSwgY29udGV4dC5jaGlsZHJlbilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9tQnV0dG9uTWl4aW4gPSB7XG4gIHByb3BzOiB7XG4gICAgaHJlZjogU3RyaW5nLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIHRvOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgIGV4YWN0OiBCb29sZWFuLFxuICAgIGFwcGVuZDogQm9vbGVhbixcbiAgICByZXBsYWNlOiBCb29sZWFuLFxuICAgIGFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gICAgZXhhY3RBY3RpdmVDbGFzczogU3RyaW5nXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbGluaygpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMudG8gJiYge1xuICAgICAgICAgIHRvOiB0aGlzLnRvLFxuICAgICAgICAgIGV4YWN0OiB0aGlzLmV4YWN0LFxuICAgICAgICAgIGFwcGVuZDogdGhpcy5hcHBlbmQsXG4gICAgICAgICAgcmVwbGFjZTogdGhpcy5yZXBsYWNlLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzOiB0aGlzLmFjdGl2ZUNsYXNzLFxuICAgICAgICAgIGV4YWN0QWN0aXZlQ2xhc3M6IHRoaXMuZXhhY3RBY3RpdmVDbGFzc1xuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgQ3VzdG9tQnV0dG9uXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBEaXNwYXRjaEV2ZW50TWl4aW4gPSB7XG4gIHByb3BzOiB7XG4gICAgZXZlbnQ6IFN0cmluZyxcbiAgICAnZXZlbnQtdGFyZ2V0JzogT2JqZWN0LFxuICAgICdldmVudC1hcmdzJzogQXJyYXlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRpc3BhdGNoRXZlbnQoZXZ0KSB7XG4gICAgICBldnQgJiYgdGhpcy4kZW1pdChldnQudHlwZSwgZXZ0KVxuICAgICAgaWYgKHRoaXMuZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZXZlbnRUYXJnZXQgfHwgdGhpcy4kcm9vdFxuICAgICAgICBsZXQgYXJncyA9IHRoaXMuZXZlbnRBcmdzIHx8IFtdXG4gICAgICAgIHRhcmdldC4kZW1pdCh0aGlzLmV2ZW50LCAuLi5hcmdzKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaXN0ZW5lcnMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLiRsaXN0ZW5lcnMsXG4gICAgICAgIGNsaWNrOiBlID0+IHRoaXMuZGlzcGF0Y2hFdmVudChlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBBXG4gKi9cbmNsYXNzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVte2Nzc0NsYXNzZXN9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtzdHJpbmdzfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtudW1iZXJzfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshT2JqZWN0fSAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAvLyB2YWxpZGF0aW9uLlxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0E9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyID0ge30pIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUF9ICovXG4gICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAdGVtcGxhdGUgRlxuICovXG5jbGFzcyBNRENDb21wb25lbnQge1xuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcmV0dXJuIHshTURDQ29tcG9uZW50fVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHdoaWNoIGV4dGVuZCBNRENCYXNlIHNob3VsZCBwcm92aWRlIGFuIGF0dGFjaFRvKCkgbWV0aG9kIHRoYXQgdGFrZXMgYSByb290IGVsZW1lbnQgYW5kXG4gICAgLy8gcmV0dXJucyBhbiBpbnN0YW50aWF0ZWQgY29tcG9uZW50IHdpdGggaXRzIHJvb3Qgc2V0IHRvIHRoYXQgZWxlbWVudC4gQWxzbyBub3RlIHRoYXQgaW4gdGhlIGNhc2VzIG9mXG4gICAgLy8gc3ViY2xhc3NlcywgYW4gZXhwbGljaXQgZm91bmRhdGlvbiBjbGFzcyB3aWxsIG5vdCBoYXZlIHRvIGJlIHBhc3NlZCBpbjsgaXQgd2lsbCBzaW1wbHkgYmUgaW5pdGlhbGl6ZWRcbiAgICAvLyBmcm9tIGdldERlZmF1bHRGb3VuZGF0aW9uKCkuXG4gICAgcmV0dXJuIG5ldyBNRENDb21wb25lbnQocm9vdCwgbmV3IE1EQ0ZvdW5kYXRpb24oKSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcGFyYW0ge0Y9fSBmb3VuZGF0aW9uXG4gICAqIEBwYXJhbSB7Li4uP30gYXJnc1xuICAgKi9cbiAgY29uc3RydWN0b3Iocm9vdCwgZm91bmRhdGlvbiA9IHVuZGVmaW5lZCwgLi4uYXJncykge1xuICAgIC8qKiBAcHJvdGVjdGVkIHshRWxlbWVudH0gKi9cbiAgICB0aGlzLnJvb3RfID0gcm9vdDtcbiAgICB0aGlzLmluaXRpYWxpemUoLi4uYXJncyk7XG4gICAgLy8gTm90ZSB0aGF0IHdlIGluaXRpYWxpemUgZm91bmRhdGlvbiBoZXJlIGFuZCBub3Qgd2l0aGluIHRoZSBjb25zdHJ1Y3RvcidzIGRlZmF1bHQgcGFyYW0gc28gdGhhdFxuICAgIC8vIHRoaXMucm9vdF8gaXMgZGVmaW5lZCBhbmQgY2FuIGJlIHVzZWQgd2l0aGluIHRoZSBmb3VuZGF0aW9uIGNsYXNzLlxuICAgIC8qKiBAcHJvdGVjdGVkIHshRn0gKi9cbiAgICB0aGlzLmZvdW5kYXRpb25fID0gZm91bmRhdGlvbiA9PT0gdW5kZWZpbmVkID8gdGhpcy5nZXREZWZhdWx0Rm91bmRhdGlvbigpIDogZm91bmRhdGlvbjtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmluaXQoKTtcbiAgICB0aGlzLmluaXRpYWxTeW5jV2l0aERPTSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgvKiAuLi5hcmdzICovKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBjYW4gb3ZlcnJpZGUgdGhpcyB0byBkbyBhbnkgYWRkaXRpb25hbCBzZXR1cCB3b3JrIHRoYXQgd291bGQgYmUgY29uc2lkZXJlZCBwYXJ0IG9mIGFcbiAgICAvLyBcImNvbnN0cnVjdG9yXCIuIEVzc2VudGlhbGx5LCBpdCBpcyBhIGhvb2sgaW50byB0aGUgcGFyZW50IGNvbnN0cnVjdG9yIGJlZm9yZSB0aGUgZm91bmRhdGlvbiBpc1xuICAgIC8vIGluaXRpYWxpemVkLiBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgYmVzaWRlcyByb290IGFuZCBmb3VuZGF0aW9uIHdpbGwgYmUgcGFzc2VkIGluIGhlcmUuXG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUZ9IGZvdW5kYXRpb25cbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkIGZvdW5kYXRpb24gY2xhc3MgZm9yIHRoZVxuICAgIC8vIGNvbXBvbmVudC5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSBnZXREZWZhdWx0Rm91bmRhdGlvbiB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkICcgK1xuICAgICAgJ2ZvdW5kYXRpb24gY2xhc3MnKTtcbiAgfVxuXG4gIGluaXRpYWxTeW5jV2l0aERPTSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCBpZiB0aGV5IG5lZWQgdG8gcGVyZm9ybSB3b3JrIHRvIHN5bmNocm9uaXplIHdpdGggYSBob3N0IERPTVxuICAgIC8vIG9iamVjdC4gQW4gZXhhbXBsZSBvZiB0aGlzIHdvdWxkIGJlIGEgZm9ybSBjb250cm9sIHdyYXBwZXIgdGhhdCBuZWVkcyB0byBzeW5jaHJvbml6ZSBpdHMgaW50ZXJuYWwgc3RhdGVcbiAgICAvLyB0byBzb21lIHByb3BlcnR5IG9yIGF0dHJpYnV0ZSBvZiB0aGUgaG9zdCBET00uIFBsZWFzZSBub3RlOiB0aGlzIGlzICpub3QqIHRoZSBwbGFjZSB0byBwZXJmb3JtIERPTVxuICAgIC8vIHJlYWRzL3dyaXRlcyB0aGF0IHdvdWxkIGNhdXNlIGxheW91dCAvIHBhaW50LCBhcyB0aGlzIGlzIGNhbGxlZCBzeW5jaHJvbm91c2x5IGZyb20gd2l0aGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtYXkgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJlbGVhc2UgYW55IHJlc291cmNlcyAvIGRlcmVnaXN0ZXIgYW55IGxpc3RlbmVycyB0aGV5IGhhdmVcbiAgICAvLyBhdHRhY2hlZC4gQW4gZXhhbXBsZSBvZiB0aGlzIG1pZ2h0IGJlIGRlcmVnaXN0ZXJpbmcgYSByZXNpemUgZXZlbnQgZnJvbSB0aGUgd2luZG93IG9iamVjdC5cbiAgICB0aGlzLmZvdW5kYXRpb25fLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIG1ldGhvZCB0byBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudC4gVGhpcyBpcyBtb3N0IHVzZWZ1bCB3aGVuXG4gICAqIGxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGxpc3RlbihldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIHJlbW92ZSBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogdW5saXN0ZW5pbmcgZm9yIGN1c3RvbSBldmVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bmxpc3RlbihldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGEgY3Jvc3MtYnJvd3Nlci1jb21wYXRpYmxlIGN1c3RvbSBldmVudCBmcm9tIHRoZSBjb21wb25lbnQgcm9vdCBvZiB0aGUgZ2l2ZW4gdHlwZSxcbiAgICogd2l0aCB0aGUgZ2l2ZW4gZGF0YS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshT2JqZWN0fSBldnREYXRhXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IHNob3VsZEJ1YmJsZVxuICAgKi9cbiAgZW1pdChldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICAgIGxldCBldnQ7XG4gICAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgICBidWJibGVzOiBzaG91bGRCdWJibGUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpO1xuICAgIH1cblxuICAgIHRoaXMucm9vdF8uZGlzcGF0Y2hFdmVudChldnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0NvbXBvbmVudDtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmV4cG9ydCB7TURDRm91bmRhdGlvbiwgTURDQ29tcG9uZW50fTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgRGlhbG9nLiBQcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIG1hbmFnaW5nOlxuICogLSBDU1MgY2xhc3Nlc1xuICogLSBET01cbiAqIC0gRXZlbnQgaGFuZGxlcnNcbiAqXG4gKiBBZGRpdGlvbmFsbHksIHByb3ZpZGVzIHR5cGUgaW5mb3JtYXRpb24gZm9yIHRoZSBhZGFwdGVyIHRvIHRoZSBDbG9zdXJlXG4gKiBjb21waWxlci5cbiAqXG4gKiBJbXBsZW1lbnQgdGhpcyBhZGFwdGVyIGZvciB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UgdG8gZGVsZWdhdGUgdXBkYXRlcyB0b1xuICogdGhlIGNvbXBvbmVudCBpbiB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UuIFNlZSBhcmNoaXRlY3R1cmUgZG9jdW1lbnRhdGlvblxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvY29kZS9hcmNoaXRlY3R1cmUubWRcbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ0RpYWxvZ0FkYXB0ZXIge1xuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgYWRkQm9keUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICByZW1vdmVCb2R5Q2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudFRhcmdldH0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXZlbnRUYXJnZXRNYXRjaGVzKHRhcmdldCwgc2VsZWN0b3IpIHt9XG5cbiAgdHJhcEZvY3VzKCkge31cbiAgcmVsZWFzZUZvY3VzKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNDb250ZW50U2Nyb2xsYWJsZSgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGFyZUJ1dHRvbnNTdGFja2VkKCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gICAqIEByZXR1cm4gez9zdHJpbmd9XG4gICAqL1xuICBnZXRBY3Rpb25Gcm9tRXZlbnQoZXZlbnQpIHt9XG5cbiAgY2xpY2tEZWZhdWx0QnV0dG9uKCkge31cbiAgcmV2ZXJzZUJ1dHRvbnMoKSB7fVxuXG4gIG5vdGlmeU9wZW5pbmcoKSB7fVxuICBub3RpZnlPcGVuZWQoKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uXG4gICAqL1xuICBub3RpZnlDbG9zaW5nKGFjdGlvbikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvblxuICAgKi9cbiAgbm90aWZ5Q2xvc2VkKGFjdGlvbikge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDRGlhbG9nQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICBPUEVOOiAnbWRjLWRpYWxvZy0tb3BlbicsXG4gIE9QRU5JTkc6ICdtZGMtZGlhbG9nLS1vcGVuaW5nJyxcbiAgQ0xPU0lORzogJ21kYy1kaWFsb2ctLWNsb3NpbmcnLFxuICBTQ1JPTExBQkxFOiAnbWRjLWRpYWxvZy0tc2Nyb2xsYWJsZScsXG4gIFNUQUNLRUQ6ICdtZGMtZGlhbG9nLS1zdGFja2VkJyxcbiAgU0NST0xMX0xPQ0s6ICdtZGMtZGlhbG9nLXNjcm9sbC1sb2NrJyxcbn07XG5cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFNDUklNX1NFTEVDVE9SOiAnLm1kYy1kaWFsb2dfX3NjcmltJyxcbiAgQ09OVEFJTkVSX1NFTEVDVE9SOiAnLm1kYy1kaWFsb2dfX2NvbnRhaW5lcicsXG4gIFNVUkZBQ0VfU0VMRUNUT1I6ICcubWRjLWRpYWxvZ19fc3VyZmFjZScsXG4gIENPTlRFTlRfU0VMRUNUT1I6ICcubWRjLWRpYWxvZ19fY29udGVudCcsXG4gIEJVVFRPTl9TRUxFQ1RPUjogJy5tZGMtZGlhbG9nX19idXR0b24nLFxuICBERUZBVUxUX0JVVFRPTl9TRUxFQ1RPUjogJy5tZGMtZGlhbG9nX19idXR0b24tLWRlZmF1bHQnLFxuICBTVVBQUkVTU19ERUZBVUxUX1BSRVNTX1NFTEVDVE9SOiBbXG4gICAgJ3RleHRhcmVhJyxcbiAgICAnLm1kYy1tZW51IC5tZGMtbGlzdC1pdGVtJyxcbiAgXS5qb2luKCcsICcpLFxuXG4gIE9QRU5JTkdfRVZFTlQ6ICdNRENEaWFsb2c6b3BlbmluZycsXG4gIE9QRU5FRF9FVkVOVDogJ01EQ0RpYWxvZzpvcGVuZWQnLFxuICBDTE9TSU5HX0VWRU5UOiAnTURDRGlhbG9nOmNsb3NpbmcnLFxuICBDTE9TRURfRVZFTlQ6ICdNRENEaWFsb2c6Y2xvc2VkJyxcblxuICBBQ1RJT05fQVRUUklCVVRFOiAnZGF0YS1tZGMtZGlhbG9nLWFjdGlvbicsXG5cbiAgQ0xPU0VfQUNUSU9OOiAnY2xvc2UnLFxuICBERVNUUk9ZX0FDVElPTjogJ2Rlc3Ryb3knLFxufTtcblxuY29uc3QgbnVtYmVycyA9IHtcbiAgRElBTE9HX0FOSU1BVElPTl9PUEVOX1RJTUVfTVM6IDE1MCxcbiAgRElBTE9HX0FOSU1BVElPTl9DTE9TRV9USU1FX01TOiA3NSxcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHtNRENGb3VuZGF0aW9ufSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9pbmRleCc7XG5pbXBvcnQgTURDRGlhbG9nQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIE1EQ0RpYWxvZ0ZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDRGlhbG9nQWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBoYXNDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGFkZEJvZHlDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJlbW92ZUJvZHlDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGV2ZW50VGFyZ2V0TWF0Y2hlczogKC8qIHRhcmdldDogIUV2ZW50VGFyZ2V0LCBzZWxlY3Rvcjogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHRyYXBGb2N1czogKCkgPT4ge30sXG4gICAgICByZWxlYXNlRm9jdXM6ICgpID0+IHt9LFxuICAgICAgaXNDb250ZW50U2Nyb2xsYWJsZTogKCkgPT4ge30sXG4gICAgICBhcmVCdXR0b25zU3RhY2tlZDogKCkgPT4ge30sXG4gICAgICBnZXRBY3Rpb25Gcm9tRXZlbnQ6ICgvKiBldmVudDogIUV2ZW50ICovKSA9PiB7fSxcbiAgICAgIGNsaWNrRGVmYXVsdEJ1dHRvbjogKCkgPT4ge30sXG4gICAgICByZXZlcnNlQnV0dG9uczogKCkgPT4ge30sXG4gICAgICBub3RpZnlPcGVuaW5nOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeU9wZW5lZDogKCkgPT4ge30sXG4gICAgICBub3RpZnlDbG9zaW5nOiAoLyogYWN0aW9uOiA/c3RyaW5nICovKSA9PiB7fSxcbiAgICAgIG5vdGlmeUNsb3NlZDogKC8qIGFjdGlvbjogP3N0cmluZyAqLykgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDRGlhbG9nQWRhcHRlcj19IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ0RpYWxvZ0ZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzT3Blbl8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7c3RyaW5nfSAqL1xuICAgIHRoaXMuZXNjYXBlS2V5QWN0aW9uXyA9IHN0cmluZ3MuQ0xPU0VfQUNUSU9OO1xuXG4gICAgLyoqIEBwcml2YXRlIHtzdHJpbmd9ICovXG4gICAgdGhpcy5zY3JpbUNsaWNrQWN0aW9uXyA9IHN0cmluZ3MuQ0xPU0VfQUNUSU9OO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuYXV0b1N0YWNrQnV0dG9uc18gPSB0cnVlO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuYXJlQnV0dG9uc1N0YWNrZWRfID0gZmFsc2U7XG4gIH07XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLlNUQUNLRUQpKSB7XG4gICAgICB0aGlzLnNldEF1dG9TdGFja0J1dHRvbnMoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmlzT3Blbl8pIHtcbiAgICAgIHRoaXMuY2xvc2Uoc3RyaW5ncy5ERVNUUk9ZX0FDVElPTik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uVGltZXJfKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25UaW1lcl8pO1xuICAgICAgdGhpcy5oYW5kbGVBbmltYXRpb25UaW1lckVuZF8oKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuaXNPcGVuXyA9IHRydWU7XG4gICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlPcGVuaW5nKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLk9QRU5JTkcpO1xuXG4gICAgLy8gV2FpdCBhIGZyYW1lIG9uY2UgZGlzcGxheSBpcyBubyBsb25nZXIgXCJub25lXCIsIHRvIGVzdGFibGlzaCBiYXNpcyBmb3IgYW5pbWF0aW9uXG4gICAgdGhpcy5ydW5OZXh0QW5pbWF0aW9uRnJhbWVfKCgpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQm9keUNsYXNzKGNzc0NsYXNzZXMuU0NST0xMX0xPQ0spO1xuXG4gICAgICB0aGlzLmxheW91dCgpO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUFuaW1hdGlvblRpbWVyRW5kXygpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnRyYXBGb2N1cygpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeU9wZW5lZCgpO1xuICAgICAgfSwgbnVtYmVycy5ESUFMT0dfQU5JTUFUSU9OX09QRU5fVElNRV9NUyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBhY3Rpb25cbiAgICovXG4gIGNsb3NlKGFjdGlvbiA9ICcnKSB7XG4gICAgaWYgKCF0aGlzLmlzT3Blbl8pIHtcbiAgICAgIC8vIEF2b2lkIHJlZHVuZGFudCBjbG9zZSBjYWxscyAoYW5kIGV2ZW50cyksIGUuZy4gZnJvbSBrZXlkb3duIG9uIGVsZW1lbnRzIHRoYXQgaW5oZXJlbnRseSBlbWl0IGNsaWNrXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pc09wZW5fID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDbG9zaW5nKGFjdGlvbik7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkNMT1NJTkcpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUJvZHlDbGFzcyhjc3NDbGFzc2VzLlNDUk9MTF9MT0NLKTtcblxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWVfKTtcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IDA7XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25UaW1lcl8pO1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbGVhc2VGb2N1cygpO1xuICAgICAgdGhpcy5oYW5kbGVBbmltYXRpb25UaW1lckVuZF8oKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5Q2xvc2VkKGFjdGlvbik7XG4gICAgfSwgbnVtYmVycy5ESUFMT0dfQU5JTUFUSU9OX0NMT1NFX1RJTUVfTVMpO1xuICB9XG5cbiAgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLmlzT3Blbl87XG4gIH1cblxuICAvKiogQHJldHVybiB7c3RyaW5nfSAqL1xuICBnZXRFc2NhcGVLZXlBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXNjYXBlS2V5QWN0aW9uXztcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uICovXG4gIHNldEVzY2FwZUtleUFjdGlvbihhY3Rpb24pIHtcbiAgICB0aGlzLmVzY2FwZUtleUFjdGlvbl8gPSBhY3Rpb247XG4gIH1cblxuICAvKiogQHJldHVybiB7c3RyaW5nfSAqL1xuICBnZXRTY3JpbUNsaWNrQWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNjcmltQ2xpY2tBY3Rpb25fO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gKi9cbiAgc2V0U2NyaW1DbGlja0FjdGlvbihhY3Rpb24pIHtcbiAgICB0aGlzLnNjcmltQ2xpY2tBY3Rpb25fID0gYWN0aW9uO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGdldEF1dG9TdGFja0J1dHRvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0b1N0YWNrQnV0dG9uc187XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSBhdXRvU3RhY2sgKi9cbiAgc2V0QXV0b1N0YWNrQnV0dG9ucyhhdXRvU3RhY2spIHtcbiAgICB0aGlzLmF1dG9TdGFja0J1dHRvbnNfID0gYXV0b1N0YWNrO1xuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgIH1cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgIH0pO1xuICB9XG5cbiAgbGF5b3V0SW50ZXJuYWxfKCkge1xuICAgIGlmICh0aGlzLmF1dG9TdGFja0J1dHRvbnNfKSB7XG4gICAgICB0aGlzLmRldGVjdFN0YWNrZWRCdXR0b25zXygpO1xuICAgIH1cbiAgICB0aGlzLmRldGVjdFNjcm9sbGFibGVDb250ZW50XygpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRldGVjdFN0YWNrZWRCdXR0b25zXygpIHtcbiAgICAvLyBSZW1vdmUgdGhlIGNsYXNzIGZpcnN0IHRvIGxldCB1cyBtZWFzdXJlIHRoZSBidXR0b25zJyBuYXR1cmFsIHBvc2l0aW9ucy5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuU1RBQ0tFRCk7XG5cbiAgICBjb25zdCBhcmVCdXR0b25zU3RhY2tlZCA9IHRoaXMuYWRhcHRlcl8uYXJlQnV0dG9uc1N0YWNrZWQoKTtcblxuICAgIGlmIChhcmVCdXR0b25zU3RhY2tlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLlNUQUNLRUQpO1xuICAgIH1cblxuICAgIGlmIChhcmVCdXR0b25zU3RhY2tlZCAhPT0gdGhpcy5hcmVCdXR0b25zU3RhY2tlZF8pIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmV2ZXJzZUJ1dHRvbnMoKTtcbiAgICAgIHRoaXMuYXJlQnV0dG9uc1N0YWNrZWRfID0gYXJlQnV0dG9uc1N0YWNrZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRldGVjdFNjcm9sbGFibGVDb250ZW50XygpIHtcbiAgICAvLyBSZW1vdmUgdGhlIGNsYXNzIGZpcnN0IHRvIGxldCB1cyBtZWFzdXJlIHRoZSBuYXR1cmFsIGhlaWdodCBvZiB0aGUgY29udGVudC5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuU0NST0xMQUJMRSk7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNDb250ZW50U2Nyb2xsYWJsZSgpKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuU0NST0xMQUJMRSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhbmRsZUludGVyYWN0aW9uKGV2dCkge1xuICAgIGNvbnN0IGlzQ2xpY2sgPSBldnQudHlwZSA9PT0gJ2NsaWNrJztcbiAgICBjb25zdCBpc0VudGVyID0gZXZ0LmtleSA9PT0gJ0VudGVyJyB8fCBldnQua2V5Q29kZSA9PT0gMTM7XG5cbiAgICAvLyBDaGVjayBmb3Igc2NyaW0gY2xpY2sgZmlyc3Qgc2luY2UgaXQgZG9lc24ndCByZXF1aXJlIHF1ZXJ5aW5nIGFuY2VzdG9yc1xuICAgIGlmIChpc0NsaWNrICYmIHRoaXMuYWRhcHRlcl8uZXZlbnRUYXJnZXRNYXRjaGVzKGV2dC50YXJnZXQsIHN0cmluZ3MuU0NSSU1fU0VMRUNUT1IpICYmXG4gICAgICB0aGlzLnNjcmltQ2xpY2tBY3Rpb25fICE9PSAnJykge1xuICAgICAgdGhpcy5jbG9zZSh0aGlzLnNjcmltQ2xpY2tBY3Rpb25fKTtcbiAgICB9IGVsc2UgaWYgKGlzQ2xpY2sgfHwgZXZ0LmtleSA9PT0gJ1NwYWNlJyB8fCBldnQua2V5Q29kZSA9PT0gMzIgfHwgaXNFbnRlcikge1xuICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5hZGFwdGVyXy5nZXRBY3Rpb25Gcm9tRXZlbnQoZXZ0KTtcbiAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5jbG9zZShhY3Rpb24pO1xuICAgICAgfSBlbHNlIGlmIChpc0VudGVyICYmICF0aGlzLmFkYXB0ZXJfLmV2ZW50VGFyZ2V0TWF0Y2hlcyhldnQudGFyZ2V0LCBzdHJpbmdzLlNVUFBSRVNTX0RFRkFVTFRfUFJFU1NfU0VMRUNUT1IpKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uY2xpY2tEZWZhdWx0QnV0dG9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUtleWJvYXJkRXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlRG9jdW1lbnRLZXlkb3duKGV2dCkge1xuICAgIGlmICgoZXZ0LmtleSA9PT0gJ0VzY2FwZScgfHwgZXZ0LmtleUNvZGUgPT09IDI3KSAmJiB0aGlzLmVzY2FwZUtleUFjdGlvbl8gIT09ICcnKSB7XG4gICAgICB0aGlzLmNsb3NlKHRoaXMuZXNjYXBlS2V5QWN0aW9uXyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGhhbmRsZUFuaW1hdGlvblRpbWVyRW5kXygpIHtcbiAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IDA7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLk9QRU5JTkcpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5DTE9TSU5HKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW5zIHRoZSBnaXZlbiBsb2dpYyBvbiB0aGUgbmV4dCBhbmltYXRpb24gZnJhbWUsIHVzaW5nIHNldFRpbWVvdXQgdG8gZmFjdG9yIGluIEZpcmVmb3ggcmVmbG93IGJlaGF2aW9yLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcnVuTmV4dEFuaW1hdGlvbkZyYW1lXyhjYWxsYmFjaykge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWVfKTtcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IDA7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25UaW1lcl8pO1xuICAgICAgdGhpcy5hbmltYXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENEaWFsb2dGb3VuZGF0aW9uO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgZWxlbWVudERvY3VtZW50ID0gZWwub3duZXJEb2N1bWVudCB8fCBlbDtcbiAgdmFyIGJhc2ljVGFiYmFibGVzID0gW107XG4gIHZhciBvcmRlcmVkVGFiYmFibGVzID0gW107XG5cbiAgLy8gQSBub2RlIGlzIFwiYXZhaWxhYmxlXCIgaWZcbiAgLy8gLSBpdCdzIGNvbXB1dGVkIHN0eWxlXG4gIHZhciBpc1VuYXZhaWxhYmxlID0gY3JlYXRlSXNVbmF2YWlsYWJsZShlbGVtZW50RG9jdW1lbnQpO1xuXG4gIHZhciBjYW5kaWRhdGVTZWxlY3RvcnMgPSBbXG4gICAgJ2lucHV0JyxcbiAgICAnc2VsZWN0JyxcbiAgICAnYVtocmVmXScsXG4gICAgJ3RleHRhcmVhJyxcbiAgICAnYnV0dG9uJyxcbiAgICAnW3RhYmluZGV4XScsXG4gIF07XG5cbiAgdmFyIGNhbmRpZGF0ZXMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKGNhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJykpO1xuXG4gIGlmIChvcHRpb25zLmluY2x1ZGVDb250YWluZXIpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgaWYgKFxuICAgICAgY2FuZGlkYXRlU2VsZWN0b3JzLnNvbWUoZnVuY3Rpb24oY2FuZGlkYXRlU2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoZXMuY2FsbChlbCwgY2FuZGlkYXRlU2VsZWN0b3IpO1xuICAgICAgfSlcbiAgICApIHtcbiAgICAgIGNhbmRpZGF0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoY2FuZGlkYXRlcyk7XG4gICAgICBjYW5kaWRhdGVzLnVuc2hpZnQoZWwpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjYW5kaWRhdGUsIGNhbmRpZGF0ZUluZGV4QXR0ciwgY2FuZGlkYXRlSW5kZXg7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gY2FuZGlkYXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjYW5kaWRhdGUgPSBjYW5kaWRhdGVzW2ldO1xuICAgIGNhbmRpZGF0ZUluZGV4QXR0ciA9IHBhcnNlSW50KGNhbmRpZGF0ZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwKVxuICAgIGNhbmRpZGF0ZUluZGV4ID0gaXNOYU4oY2FuZGlkYXRlSW5kZXhBdHRyKSA/IGNhbmRpZGF0ZS50YWJJbmRleCA6IGNhbmRpZGF0ZUluZGV4QXR0cjtcblxuICAgIGlmIChcbiAgICAgIGNhbmRpZGF0ZUluZGV4IDwgMFxuICAgICAgfHwgKGNhbmRpZGF0ZS50YWdOYW1lID09PSAnSU5QVVQnICYmIGNhbmRpZGF0ZS50eXBlID09PSAnaGlkZGVuJylcbiAgICAgIHx8IGNhbmRpZGF0ZS5kaXNhYmxlZFxuICAgICAgfHwgaXNVbmF2YWlsYWJsZShjYW5kaWRhdGUsIGVsZW1lbnREb2N1bWVudClcbiAgICApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjYW5kaWRhdGVJbmRleCA9PT0gMCkge1xuICAgICAgYmFzaWNUYWJiYWJsZXMucHVzaChjYW5kaWRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcmRlcmVkVGFiYmFibGVzLnB1c2goe1xuICAgICAgICBpbmRleDogaSxcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZUluZGV4LFxuICAgICAgICBub2RlOiBjYW5kaWRhdGUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YXIgdGFiYmFibGVOb2RlcyA9IG9yZGVyZWRUYWJiYWJsZXNcbiAgICAuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICByZXR1cm4gYS50YWJJbmRleCA9PT0gYi50YWJJbmRleCA/IGEuaW5kZXggLSBiLmluZGV4IDogYS50YWJJbmRleCAtIGIudGFiSW5kZXg7XG4gICAgfSlcbiAgICAubWFwKGZ1bmN0aW9uKGEpIHtcbiAgICAgIHJldHVybiBhLm5vZGVcbiAgICB9KTtcblxuICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0YWJiYWJsZU5vZGVzLCBiYXNpY1RhYmJhYmxlcyk7XG5cbiAgcmV0dXJuIHRhYmJhYmxlTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlzVW5hdmFpbGFibGUoZWxlbWVudERvY3VtZW50KSB7XG4gIC8vIE5vZGUgY2FjaGUgbXVzdCBiZSByZWZyZXNoZWQgb24gZXZlcnkgY2hlY2ssIGluIGNhc2VcbiAgLy8gdGhlIGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQgaGFzIGNoYW5nZWRcbiAgdmFyIGlzT2ZmQ2FjaGUgPSBbXTtcblxuICAvLyBcIm9mZlwiIG1lYW5zIGBkaXNwbGF5OiBub25lO2AsIGFzIG9wcG9zZWQgdG8gXCJoaWRkZW5cIixcbiAgLy8gd2hpY2ggbWVhbnMgYHZpc2liaWxpdHk6IGhpZGRlbjtgLiBnZXRDb21wdXRlZFN0eWxlXG4gIC8vIGFjY3VyYXRlbHkgcmVmbGVjdHMgdmlzaWJsaXR5IGluIGNvbnRleHQgYnV0IG5vdFxuICAvLyBcIm9mZlwiIHN0YXRlLCBzbyB3ZSBuZWVkIHRvIHJlY3Vyc2l2ZWx5IGNoZWNrIHBhcmVudHMuXG5cbiAgZnVuY3Rpb24gaXNPZmYobm9kZSwgbm9kZUNvbXB1dGVkU3R5bGUpIHtcbiAgICBpZiAobm9kZSA9PT0gZWxlbWVudERvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gRmluZCB0aGUgY2FjaGVkIG5vZGUgKEFycmF5LnByb3RvdHlwZS5maW5kIG5vdCBhdmFpbGFibGUgaW4gSUU5KVxuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBpc09mZkNhY2hlLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaXNPZmZDYWNoZVtpXVswXSA9PT0gbm9kZSkgcmV0dXJuIGlzT2ZmQ2FjaGVbaV1bMV07XG4gICAgfVxuXG4gICAgbm9kZUNvbXB1dGVkU3R5bGUgPSBub2RlQ29tcHV0ZWRTdHlsZSB8fCBlbGVtZW50RG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblxuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICAgIGlmIChub2RlQ29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJlc3VsdCA9IGlzT2ZmKG5vZGUucGFyZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgaXNPZmZDYWNoZS5wdXNoKFtub2RlLCByZXN1bHRdKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gaXNVbmF2YWlsYWJsZShub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IGVsZW1lbnREb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBjb21wdXRlZFN0eWxlID0gZWxlbWVudERvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cbiAgICBpZiAoaXNPZmYobm9kZSwgY29tcHV0ZWRTdHlsZSkpIHJldHVybiB0cnVlO1xuXG4gICAgcmV0dXJuIGNvbXB1dGVkU3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbic7XG4gIH1cbn1cbiIsInZhciB0YWJiYWJsZSA9IHJlcXVpcmUoJ3RhYmJhYmxlJyk7XG5cbnZhciBsaXN0ZW5pbmdGb2N1c1RyYXAgPSBudWxsO1xuXG5mdW5jdGlvbiBmb2N1c1RyYXAoZWxlbWVudCwgdXNlck9wdGlvbnMpIHtcbiAgdmFyIHRhYmJhYmxlTm9kZXMgPSBbXTtcbiAgdmFyIGZpcnN0VGFiYmFibGVOb2RlID0gbnVsbDtcbiAgdmFyIGxhc3RUYWJiYWJsZU5vZGUgPSBudWxsO1xuICB2YXIgbm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uID0gbnVsbDtcbiAgdmFyIGFjdGl2ZSA9IGZhbHNlO1xuICB2YXIgcGF1c2VkID0gZmFsc2U7XG4gIHZhciB0YWJFdmVudCA9IG51bGw7XG5cbiAgdmFyIGNvbnRhaW5lciA9ICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpXG4gICAgOiBlbGVtZW50O1xuXG4gIHZhciBjb25maWcgPSB1c2VyT3B0aW9ucyB8fCB7fTtcbiAgY29uZmlnLnJldHVybkZvY3VzT25EZWFjdGl2YXRlID0gKHVzZXJPcHRpb25zICYmIHVzZXJPcHRpb25zLnJldHVybkZvY3VzT25EZWFjdGl2YXRlICE9PSB1bmRlZmluZWQpXG4gICAgPyB1c2VyT3B0aW9ucy5yZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZVxuICAgIDogdHJ1ZTtcbiAgY29uZmlnLmVzY2FwZURlYWN0aXZhdGVzID0gKHVzZXJPcHRpb25zICYmIHVzZXJPcHRpb25zLmVzY2FwZURlYWN0aXZhdGVzICE9PSB1bmRlZmluZWQpXG4gICAgPyB1c2VyT3B0aW9ucy5lc2NhcGVEZWFjdGl2YXRlc1xuICAgIDogdHJ1ZTtcblxuICB2YXIgdHJhcCA9IHtcbiAgICBhY3RpdmF0ZTogYWN0aXZhdGUsXG4gICAgZGVhY3RpdmF0ZTogZGVhY3RpdmF0ZSxcbiAgICBwYXVzZTogcGF1c2UsXG4gICAgdW5wYXVzZTogdW5wYXVzZSxcbiAgfTtcblxuICByZXR1cm4gdHJhcDtcblxuICBmdW5jdGlvbiBhY3RpdmF0ZShhY3RpdmF0ZU9wdGlvbnMpIHtcbiAgICBpZiAoYWN0aXZlKSByZXR1cm47XG5cbiAgICB2YXIgZGVmYXVsdGVkQWN0aXZhdGVPcHRpb25zID0ge1xuICAgICAgb25BY3RpdmF0ZTogKGFjdGl2YXRlT3B0aW9ucyAmJiBhY3RpdmF0ZU9wdGlvbnMub25BY3RpdmF0ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICA/IGFjdGl2YXRlT3B0aW9ucy5vbkFjdGl2YXRlXG4gICAgICAgIDogY29uZmlnLm9uQWN0aXZhdGUsXG4gICAgfTtcblxuICAgIGFjdGl2ZSA9IHRydWU7XG4gICAgcGF1c2VkID0gZmFsc2U7XG4gICAgbm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgIGlmIChkZWZhdWx0ZWRBY3RpdmF0ZU9wdGlvbnMub25BY3RpdmF0ZSkge1xuICAgICAgZGVmYXVsdGVkQWN0aXZhdGVPcHRpb25zLm9uQWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYWN0aXZhdGUoZGVhY3RpdmF0ZU9wdGlvbnMpIHtcbiAgICBpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgdmFyIGRlZmF1bHRlZERlYWN0aXZhdGVPcHRpb25zID0ge1xuICAgICAgcmV0dXJuRm9jdXM6IChkZWFjdGl2YXRlT3B0aW9ucyAmJiBkZWFjdGl2YXRlT3B0aW9ucy5yZXR1cm5Gb2N1cyAhPT0gdW5kZWZpbmVkKVxuICAgICAgICA/IGRlYWN0aXZhdGVPcHRpb25zLnJldHVybkZvY3VzXG4gICAgICAgIDogY29uZmlnLnJldHVybkZvY3VzT25EZWFjdGl2YXRlLFxuICAgICAgb25EZWFjdGl2YXRlOiAoZGVhY3RpdmF0ZU9wdGlvbnMgJiYgZGVhY3RpdmF0ZU9wdGlvbnMub25EZWFjdGl2YXRlICE9PSB1bmRlZmluZWQpXG4gICAgICAgID8gZGVhY3RpdmF0ZU9wdGlvbnMub25EZWFjdGl2YXRlXG4gICAgICAgIDogY29uZmlnLm9uRGVhY3RpdmF0ZSxcbiAgICB9O1xuXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG5cbiAgICBpZiAoZGVmYXVsdGVkRGVhY3RpdmF0ZU9wdGlvbnMub25EZWFjdGl2YXRlKSB7XG4gICAgICBkZWZhdWx0ZWREZWFjdGl2YXRlT3B0aW9ucy5vbkRlYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAoZGVmYXVsdGVkRGVhY3RpdmF0ZU9wdGlvbnMucmV0dXJuRm9jdXMpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnlGb2N1cyhub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgYWN0aXZlID0gZmFsc2U7XG4gICAgcGF1c2VkID0gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICBpZiAocGF1c2VkIHx8ICFhY3RpdmUpIHJldHVybjtcbiAgICBwYXVzZWQgPSB0cnVlO1xuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5wYXVzZSgpIHtcbiAgICBpZiAoIXBhdXNlZCB8fCAhYWN0aXZlKSByZXR1cm47XG4gICAgcGF1c2VkID0gZmFsc2U7XG4gICAgYWRkTGlzdGVuZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFhY3RpdmUpIHJldHVybjtcblxuICAgIC8vIFRoZXJlIGNhbiBiZSBvbmx5IG9uZSBsaXN0ZW5pbmcgZm9jdXMgdHJhcCBhdCBhIHRpbWVcbiAgICBpZiAobGlzdGVuaW5nRm9jdXNUcmFwKSB7XG4gICAgICBsaXN0ZW5pbmdGb2N1c1RyYXAucGF1c2UoKTtcbiAgICB9XG4gICAgbGlzdGVuaW5nRm9jdXNUcmFwID0gdHJhcDtcblxuICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICAvLyBFbnN1cmUgdGhhdCB0aGUgZm9jdXNlZCBlbGVtZW50IGRvZXNuJ3QgY2FwdHVyZSB0aGUgZXZlbnQgdGhhdCBjYXVzZWQgdGhlIGZvY3VzIHRyYXAgYWN0aXZhdGlvblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5Rm9jdXMoZmlyc3RGb2N1c05vZGUoKSk7XG4gICAgfSwgMCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBjaGVja0ZvY3VzLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2ssIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXksIHRydWUpO1xuXG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFhY3RpdmUgfHwgbGlzdGVuaW5nRm9jdXNUcmFwICE9PSB0cmFwKSByZXR1cm47XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGNoZWNrRm9jdXMsIHRydWUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDbGljaywgdHJ1ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGVja0tleSwgdHJ1ZSk7XG5cbiAgICBsaXN0ZW5pbmdGb2N1c1RyYXAgPSBudWxsO1xuXG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXROb2RlRm9yT3B0aW9uKG9wdGlvbk5hbWUpIHtcbiAgICB2YXIgb3B0aW9uVmFsdWUgPSBjb25maWdbb3B0aW9uTmFtZV07XG4gICAgdmFyIG5vZGUgPSBvcHRpb25WYWx1ZTtcbiAgICBpZiAoIW9wdGlvblZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvblZhbHVlKTtcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2AnICsgb3B0aW9uTmFtZSArICdgIHJlZmVycyB0byBubyBrbm93biBub2RlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5vZGUgPSBvcHRpb25WYWx1ZSgpO1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBvcHRpb25OYW1lICsgJ2AgZGlkIG5vdCByZXR1cm4gYSBub2RlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gZmlyc3RGb2N1c05vZGUoKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKGdldE5vZGVGb3JPcHRpb24oJ2luaXRpYWxGb2N1cycpICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gZ2V0Tm9kZUZvck9wdGlvbignaW5pdGlhbEZvY3VzJyk7XG4gICAgfSBlbHNlIGlmIChjb250YWluZXIuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIG5vZGUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlID0gdGFiYmFibGVOb2Rlc1swXSB8fCBnZXROb2RlRm9yT3B0aW9uKCdmYWxsYmFja0ZvY3VzJyk7XG4gICAgfVxuXG4gICAgaWYgKCFub2RlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBjYW5cXCd0IGhhdmUgYSBmb2N1cy10cmFwIHdpdGhvdXQgYXQgbGVhc3Qgb25lIGZvY3VzYWJsZSBlbGVtZW50Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICAvLyBUaGlzIG5lZWRzIHRvIGJlIGRvbmUgb24gbW91c2Vkb3duIGFuZCB0b3VjaHN0YXJ0IGluc3RlYWQgb2YgY2xpY2tcbiAgLy8gc28gdGhhdCBpdCBwcmVjZWRlcyB0aGUgZm9jdXMgZXZlbnRcbiAgZnVuY3Rpb24gY2hlY2tQb2ludGVyRG93bihlKSB7XG4gICAgaWYgKGNvbmZpZy5jbGlja091dHNpZGVEZWFjdGl2YXRlcyAmJiAhY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgZGVhY3RpdmF0ZSh7IHJldHVybkZvY3VzOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0NsaWNrKGUpIHtcbiAgICBpZiAoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzKSByZXR1cm47XG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrRm9jdXMoZSkge1xuICAgIGlmIChjb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpKSByZXR1cm47XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgLy8gQ2hlY2tpbmcgZm9yIGEgYmx1ciBtZXRob2QgaGVyZSByZXNvbHZlcyBhIEZpcmVmb3ggaXNzdWUgKCMxNSlcbiAgICBpZiAodHlwZW9mIGUudGFyZ2V0LmJsdXIgPT09ICdmdW5jdGlvbicpIGUudGFyZ2V0LmJsdXIoKTtcblxuICAgIGlmICh0YWJFdmVudCkge1xuICAgICAgcmVhZGp1c3RGb2N1cyh0YWJFdmVudCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tLZXkoZSkge1xuICAgIGlmIChlLmtleSA9PT0gJ1RhYicgfHwgZS5rZXlDb2RlID09PSA5KSB7XG4gICAgICBoYW5kbGVUYWIoZSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5lc2NhcGVEZWFjdGl2YXRlcyAhPT0gZmFsc2UgJiYgaXNFc2NhcGVFdmVudChlKSkge1xuICAgICAgZGVhY3RpdmF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRhYihlKSB7XG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuXG4gICAgaWYgKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSAmJiBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKSA8IDApIHtcbiAgICAgIHJldHVybiB0YWJFdmVudCA9IGU7XG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBjdXJyZW50Rm9jdXNJbmRleCA9IHRhYmJhYmxlTm9kZXMuaW5kZXhPZihlLnRhcmdldCk7XG5cbiAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBmaXJzdFRhYmJhYmxlTm9kZSB8fCB0YWJiYWJsZU5vZGVzLmluZGV4T2YoZS50YXJnZXQpID09PSAtMSkge1xuICAgICAgICByZXR1cm4gdHJ5Rm9jdXMobGFzdFRhYmJhYmxlTm9kZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ5Rm9jdXModGFiYmFibGVOb2Rlc1tjdXJyZW50Rm9jdXNJbmRleCAtIDFdKTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQgPT09IGxhc3RUYWJiYWJsZU5vZGUpIHJldHVybiB0cnlGb2N1cyhmaXJzdFRhYmJhYmxlTm9kZSk7XG5cbiAgICB0cnlGb2N1cyh0YWJiYWJsZU5vZGVzW2N1cnJlbnRGb2N1c0luZGV4ICsgMV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVGFiYmFibGVOb2RlcygpIHtcbiAgICB0YWJiYWJsZU5vZGVzID0gdGFiYmFibGUoY29udGFpbmVyKTtcbiAgICBmaXJzdFRhYmJhYmxlTm9kZSA9IHRhYmJhYmxlTm9kZXNbMF07XG4gICAgbGFzdFRhYmJhYmxlTm9kZSA9IHRhYmJhYmxlTm9kZXNbdGFiYmFibGVOb2Rlcy5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRqdXN0Rm9jdXMoZSkge1xuICAgIGlmIChlLnNoaWZ0S2V5KSByZXR1cm4gdHJ5Rm9jdXMobGFzdFRhYmJhYmxlTm9kZSk7XG5cbiAgICB0cnlGb2N1cyhmaXJzdFRhYmJhYmxlTm9kZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNFc2NhcGVFdmVudChlKSB7XG4gIHJldHVybiBlLmtleSA9PT0gJ0VzY2FwZScgfHwgZS5rZXkgPT09ICdFc2MnIHx8IGUua2V5Q29kZSA9PT0gMjc7XG59XG5cbmZ1bmN0aW9uIHRyeUZvY3VzKG5vZGUpIHtcbiAgaWYgKCFub2RlIHx8ICFub2RlLmZvY3VzKSByZXR1cm47XG4gIGlmIChub2RlID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSAgcmV0dXJuO1xuXG4gIG5vZGUuZm9jdXMoKTtcbiAgaWYgKG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgbm9kZS5zZWxlY3QoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvY3VzVHJhcDtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlRm9jdXNUcmFwIGZyb20gJ2ZvY3VzLXRyYXAnO1xuXG4vKipcbiAqIEBwYXJhbSB7IUVsZW1lbnR9IHN1cmZhY2VFbFxuICogQHBhcmFtIHs/RWxlbWVudD19IGluaXRpYWxGb2N1c0VsXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCFFbGVtZW50LCAhRm9jdXNUcmFwQ3JlYXRlT3B0aW9ucyk6ICFGb2N1c1RyYXBJbnN0YW5jZX0gZm9jdXNUcmFwRmFjdG9yeVxuICogQHJldHVybiB7IUZvY3VzVHJhcEluc3RhbmNlfVxuICovXG5mdW5jdGlvbiBjcmVhdGVGb2N1c1RyYXBJbnN0YW5jZShzdXJmYWNlRWwsIGZvY3VzVHJhcEZhY3RvcnkgPSBjcmVhdGVGb2N1c1RyYXAsIGluaXRpYWxGb2N1c0VsID0gbnVsbCkge1xuICByZXR1cm4gZm9jdXNUcmFwRmFjdG9yeShzdXJmYWNlRWwsIHtcbiAgICBpbml0aWFsRm9jdXM6IGluaXRpYWxGb2N1c0VsLFxuICAgIGVzY2FwZURlYWN0aXZhdGVzOiBmYWxzZSwgLy8gRGlhbG9nIGZvdW5kYXRpb24gaGFuZGxlcyBlc2NhcGUga2V5XG4gICAgY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXM6IHRydWUsIC8vIEFsbG93IGhhbmRsaW5nIG9mIHNjcmltIGNsaWNrc1xuICB9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFFbGVtZW50fSBlbFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNTY3JvbGxhYmxlKGVsKSB7XG4gIHJldHVybiBlbC5zY3JvbGxIZWlnaHQgPiBlbC5vZmZzZXRIZWlnaHQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHshQXJyYXk8IUVsZW1lbnQ+fCFOb2RlTGlzdH0gZWxzXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBhcmVUb3BzTWlzYWxpZ25lZChlbHMpIHtcbiAgY29uc3QgdG9wcyA9IG5ldyBTZXQoKTtcbiAgW10uZm9yRWFjaC5jYWxsKGVscywgKGVsKSA9PiB0b3BzLmFkZChlbC5vZmZzZXRUb3ApKTtcbiAgcmV0dXJuIHRvcHMuc2l6ZSA+IDE7XG59XG5cbmV4cG9ydCB7Y3JlYXRlRm9jdXNUcmFwSW5zdGFuY2UsIGlzU2Nyb2xsYWJsZSwgYXJlVG9wc01pc2FsaWduZWR9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBSaXBwbGUuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmdcbiAqIC0gY2xhc3Nlc1xuICogLSBkb21cbiAqIC0gQ1NTIHZhcmlhYmxlc1xuICogLSBwb3NpdGlvblxuICogLSBkaW1lbnNpb25zXG4gKiAtIHNjcm9sbCBwb3NpdGlvblxuICogLSBldmVudCBoYW5kbGVyc1xuICogLSB1bmJvdW5kZWQsIGFjdGl2ZSBhbmQgZGlzYWJsZWQgc3RhdGVzXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENSaXBwbGVBZGFwdGVyIHtcbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1VuYm91bmRlZCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZUFjdGl2ZSgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZURpc2FibGVkKCkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0geyFFdmVudFRhcmdldH0gdGFyZ2V0ICovXG4gIGNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFyTmFtZVxuICAgKiBAcGFyYW0gez9udW1iZXJ8c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgdXBkYXRlQ3NzVmFyaWFibGUodmFyTmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqIEByZXR1cm4geyFDbGllbnRSZWN0fSAqL1xuICBjb21wdXRlQm91bmRpbmdSZWN0KCkge31cblxuICAvKiogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gKi9cbiAgZ2V0V2luZG93UGFnZU9mZnNldCgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxuICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbn07XG5cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG4gIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxufTtcblxuY29uc3QgbnVtYmVycyA9IHtcbiAgUEFERElORzogMTAsXG4gIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLXRyYW5zbGF0ZS1kdXJhdGlvbiAoaS5lLiBhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLWZhZGUtb3V0LWR1cmF0aW9uIChpLmUuIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIFRBUF9ERUxBWV9NUzogMzAwLCAvLyBEZWxheSBiZXR3ZWVuIHRvdWNoIGFuZCBzaW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXNcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gYXBwbHlQYXNzaXZlIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c1Bhc3NpdmVfO1xuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAvLyBEZXRlY3QgdmVyc2lvbnMgb2YgRWRnZSB3aXRoIGJ1Z2d5IHZhcigpIHN1cHBvcnRcbiAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMTQ5NTQ0OC9cbiAgY29uc3QgZG9jdW1lbnQgPSB3aW5kb3dPYmouZG9jdW1lbnQ7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgLy8gVGhlIGJ1ZyBleGlzdHMgaWYgOjpiZWZvcmUgc3R5bGUgZW5kcyB1cCBwcm9wYWdhdGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gIC8vIEFkZGl0aW9uYWxseSwgZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIG51bGwgaW4gaWZyYW1lcyB3aXRoIGRpc3BsYXk6IFwibm9uZVwiIGluIEZpcmVmb3gsXG4gIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvd09iai5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBjb25zdCBoYXNQc2V1ZG9WYXJCdWcgPSBjb21wdXRlZFN0eWxlICE9PSBudWxsICYmIGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wU3R5bGUgPT09ICdzb2xpZCc7XG4gIG5vZGUucmVtb3ZlKCk7XG4gIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBsZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuXG4gIGNvbnN0IHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gd2luZG93T2JqLkNTUyAmJiB0eXBlb2Ygd2luZG93T2JqLkNTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTQ2NjlcbiAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgY29uc3Qgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKFxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKVxuICApO1xuXG4gIGlmIChleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cykge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgfSBlbHNlIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG59XG5cbi8vXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZCBpZiBzbywgdXNlIHRoZW0uXG4gKiBAcGFyYW0geyFXaW5kb3c9fSBnbG9iYWxPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnwhRXZlbnRMaXN0ZW5lck9wdGlvbnN9XG4gKi9cbmZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmogPSB3aW5kb3csIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwge2dldCBwYXNzaXZlKCkge1xuICAgICAgICBpc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBpc1N1cHBvcnRlZDtcbiAgICAgIH19KTtcbiAgICB9IGNhdGNoIChlKSB7IH1cblxuICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZDtcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfXG4gICAgPyAvKiogQHR5cGUgeyFFdmVudExpc3RlbmVyT3B0aW9uc30gKi8gKHtwYXNzaXZlOiB0cnVlfSlcbiAgICA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gSFRNTEVsZW1lbnRQcm90b3R5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gIC8qKlxuICAgKiBPcmRlciBpcyBpbXBvcnRhbnQgYmVjYXVzZSB3ZSByZXR1cm4gdGhlIGZpcnN0IGV4aXN0aW5nIG1ldGhvZCB3ZSBmaW5kLlxuICAgKiBEbyBub3QgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgaXRlbXMgaW4gdGhlIGJlbG93IGFycmF5LlxuICAgKi9cbiAgY29uc3QgbWF0Y2hlc01ldGhvZHMgPSBbJ21hdGNoZXMnLCAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJywgJ21zTWF0Y2hlc1NlbGVjdG9yJ107XG4gIGxldCBtZXRob2QgPSAnbWF0Y2hlcyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlc01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0aG9kID0gbWF0Y2hlc01ldGhvZHNbaV07XG4gICAgaWYgKG1hdGNoZXNNZXRob2QgaW4gSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgICAgIG1ldGhvZCA9IG1hdGNoZXNNZXRob2Q7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0aG9kO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUV2ZW50fSBldlxuICogQHBhcmFtIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSBwYWdlT2Zmc2V0XG4gKiBAcGFyYW0geyFDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXYsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgY29uc3Qge3gsIHl9ID0gcGFnZU9mZnNldDtcbiAgY29uc3QgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgY29uc3QgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuXG4gIGxldCBub3JtYWxpemVkWDtcbiAgbGV0IG5vcm1hbGl6ZWRZO1xuICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gIGlmIChldi50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICBldiA9IC8qKiBAdHlwZSB7IVRvdWNoRXZlbnR9ICovIChldik7XG4gICAgbm9ybWFsaXplZFggPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9IGVsc2Uge1xuICAgIGV2ID0gLyoqIEB0eXBlIHshTW91c2VFdmVudH0gKi8gKGV2KTtcbiAgICBub3JtYWxpemVkWCA9IGV2LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYucGFnZVkgLSBkb2N1bWVudFk7XG4gIH1cblxuICByZXR1cm4ge3g6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWX07XG59XG5cbmV4cG9ydCB7c3VwcG9ydHNDc3NWYXJpYWJsZXMsIGFwcGx5UGFzc2l2ZSwgZ2V0TWF0Y2hlc1Byb3BlcnR5LCBnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgaXNBY3RpdmF0ZWQ6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBhY3RpdmF0aW9uRXZlbnQ6ICghRXZlbnR8dW5kZWZpbmVkKSxcbiAqICAgaXNQcm9ncmFtbWF0aWM6IChib29sZWFufHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBBY3RpdmF0aW9uU3RhdGVUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGRlYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZm9jdXM6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgYmx1cjogKHN0cmluZ3x1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJJbmZvVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50KSxcbiAqICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50PSksXG4gKiAgIGZvY3VzOiBmdW5jdGlvbigpLFxuICogICBibHVyOiBmdW5jdGlvbigpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJzVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICB4OiBudW1iZXIsXG4gKiAgIHk6IG51bWJlclxuICogfX1cbiAqL1xubGV0IFBvaW50VHlwZTtcblxuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbmNvbnN0IEFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nLCAnbW91c2Vkb3duJywgJ2tleWRvd24nXTtcblxuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG5jb25zdCBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnXTtcblxuLy8gVHJhY2tzIGFjdGl2YXRpb25zIHRoYXQgaGF2ZSBvY2N1cnJlZCBvbiB0aGUgY3VycmVudCBmcmFtZSwgdG8gYXZvaWQgc2ltdWx0YW5lb3VzIG5lc3RlZCBhY3RpdmF0aW9uc1xuLyoqIEB0eXBlIHshQXJyYXk8IUV2ZW50VGFyZ2V0Pn0gKi9cbmxldCBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1JpcHBsZUFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENSaXBwbGVGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gbnVtYmVycztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IC8qIGJvb2xlYW4gLSBjYWNoZWQgKi8ge30sXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICgvKiB0YXJnZXQ6ICFFdmVudFRhcmdldCAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAoLyogdmFyTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IC8qIENsaWVudFJlY3QgKi8ge30sXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAvKiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9ICovIHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUgeyFDbGllbnRSZWN0fSAqL1xuICAgIHRoaXMuZnJhbWVfID0gLyoqIEB0eXBlIHshQ2xpZW50UmVjdH0gKi8gKHt3aWR0aDogMCwgaGVpZ2h0OiAwfSk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubWF4UmFkaXVzXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCl9ICovXG4gICAgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gKGUpID0+IHRoaXMuYWN0aXZhdGVfKGUpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9ICgpID0+IHRoaXMuZGVhY3RpdmF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5mb2N1c0hhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVGb2N1cygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmJsdXJIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlQmx1cigpO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyXyA9ICgpID0+IHRoaXMubGF5b3V0KCk7XG5cbiAgICAvKiogQHByaXZhdGUge3tsZWZ0OiBudW1iZXIsIHRvcDpudW1iZXJ9fSAqL1xuICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdTY2FsZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUV2ZW50fHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdXBwb3J0c1ByZXNzUmlwcGxlXygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9XG4gICAqL1xuICBkZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcblxuICAgIHRoaXMucmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpO1xuXG4gICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhST09UKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlcyBuZWVkIGxheW91dCBsb2dpYyBhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIHNldCBjb29yZGluYXRlcyBmb3IgYm90aCBzaGFkZSBhbmQgcmlwcGxlXG4gICAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCkpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2YXRpb25UaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoUk9PVCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudH0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSkge1xuICAgIGlmIChlLnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpIHtcbiAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcmVtb3ZlQ3NzVmFyc18oKSB7XG4gICAgY29uc3Qge3N0cmluZ3N9ID0gTURDUmlwcGxlRm91bmRhdGlvbjtcbiAgICBPYmplY3Qua2V5cyhzdHJpbmdzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBpZiAoay5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShzdHJpbmdzW2tdLCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFjdGl2YXRlXyhlKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgIGNvbnN0IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgY29uc3QgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBlICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZS50eXBlO1xuICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZSA9PT0gdW5kZWZpbmVkO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IGUgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICBlLnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3BvaW50ZXJkb3duJ1xuICAgICk7XG5cbiAgICBjb25zdCBoYXNBY3RpdmF0ZWRDaGlsZCA9IGUgIT09IHVuZGVmaW5lZCAmJiBhY3RpdmF0ZWRUYXJnZXRzLmxlbmd0aCA+IDAgJiYgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKFxuICAgICAgKHRhcmdldCkgPT4gdGhpcy5hZGFwdGVyXy5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkpO1xuICAgIGlmIChoYXNBY3RpdmF0ZWRDaGlsZCkge1xuICAgICAgLy8gSW1tZWRpYXRlbHkgcmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSwgd2hpbGUgcHJlc2VydmluZyBsb2dpYyB0aGF0IHByZXZlbnRzIHRvdWNoIGZvbGxvdy1vbiBldmVudHNcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKC8qKiBAdHlwZSB7IUV2ZW50VGFyZ2V0fSAqLyAoZS50YXJnZXQpKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSAmJiBlICE9PSB1bmRlZmluZWQgJiYgKGUua2V5ID09PSAnICcgfHwgZS5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgLy8gYWN0aXZlIHN0YXRlcyBpbmNvbnNpc3RlbnRseSB3aGVuIHRoZXkncmUgY2FsbGVkIHdpdGhpbiBldmVudCBoYW5kbGluZyBjb2RlOlxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgLy8gV2UgdHJ5IGZpcnN0IG91dHNpZGUgckFGIHRvIHN1cHBvcnQgRWRnZSwgd2hpY2ggZG9lcyBub3QgZXhoaWJpdCB0aGlzIHByb2JsZW0sIGJ1dCB3aWxsIGNyYXNoIGlmIGEgQ1NTXG4gICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSkge1xuICAgIHJldHVybiAoZSAhPT0gdW5kZWZpbmVkICYmIGUudHlwZSA9PT0gJ2tleWRvd24nKSA/IHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlQWN0aXZlKCkgOiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZXZlbnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICovXG4gIGFjdGl2YXRlKGV2ZW50KSB7XG4gICAgdGhpcy5hY3RpdmF0ZV8oZXZlbnQpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGFuaW1hdGVBY3RpdmF0aW9uXygpIHtcbiAgICBjb25zdCB7VkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtERUFDVElWQVRJT05fVElNRU9VVF9NU30gPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnM7XG5cbiAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuXG4gICAgbGV0IHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgbGV0IHRyYW5zbGF0ZUVuZCA9ICcnO1xuXG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIGNvbnN0IHtzdGFydFBvaW50LCBlbmRQb2ludH0gPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKTtcbiAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gYCR7c3RhcnRQb2ludC54fXB4LCAke3N0YXJ0UG9pbnQueX1weGA7XG4gICAgICB0cmFuc2xhdGVFbmQgPSBgJHtlbmRQb2ludC54fXB4LCAke2VuZFBvaW50Lnl9cHhgO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuXG4gICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm4ge3tzdGFydFBvaW50OiBQb2ludFR5cGUsIGVuZFBvaW50OiBQb2ludFR5cGV9fVxuICAgKi9cbiAgZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpIHtcbiAgICBjb25zdCB7YWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXJ9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuXG4gICAgbGV0IHN0YXJ0UG9pbnQ7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhcbiAgICAgICAgLyoqIEB0eXBlIHshRXZlbnR9ICovIChhY3RpdmF0aW9uRXZlbnQpLFxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICBjb25zdCBlbmRQb2ludCA9IHtcbiAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtzdGFydFBvaW50LCBlbmRQb2ludH07XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCkge1xuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtoYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWR9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGNvbnN0IGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcblxuICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKSB7XG4gICAgY29uc3Qge0ZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gIH1cblxuICByZXNldEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQsIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZWFjdGl2YXRlXygpIHtcbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSAvKiogQHR5cGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqLyAoT2JqZWN0LmFzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKSk7XG5cbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSkpO1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9IG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFuaW1hdGVEZWFjdGl2YXRpb25fKHt3YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlfSkge1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfVxuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgIH1cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGxheW91dEludGVybmFsXygpIHtcbiAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIGNvbnN0IG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuXG4gICAgLy8gU3VyZmFjZSBkaWFtZXRlciBpcyB0cmVhdGVkIGRpZmZlcmVudGx5IGZvciB1bmJvdW5kZWQgdnMuIGJvdW5kZWQgcmlwcGxlcy5cbiAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAvLyBzcXVhcmUpLiBCb3VuZGVkIHJpcHBsZXMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgZnVsbHkgZXhwZWN0ZWQgdG8gZXhwYW5kIGJleW9uZCB0aGUgc3VyZmFjZSdzIGxvbmdlc3QgZGlhbWV0ZXJcbiAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgIGNvbnN0IGdldEJvdW5kZWRSYWRpdXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMuZnJhbWVfLndpZHRoLCAyKSArIE1hdGgucG93KHRoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICB9O1xuXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpID8gbWF4RGltIDogZ2V0Qm91bmRlZFJhZGl1cygpO1xuXG4gICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICB0aGlzLmluaXRpYWxTaXplXyA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICB0aGlzLmZnU2NhbGVfID0gdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG5cbiAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgdXBkYXRlTGF5b3V0Q3NzVmFyc18oKSB7XG4gICAgY29uc3Qge1xuICAgICAgVkFSX0ZHX1NJWkUsIFZBUl9MRUZULCBWQVJfVE9QLCBWQVJfRkdfU0NBTEUsXG4gICAgfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIGAke3RoaXMuaW5pdGlhbFNpemVffXB4YCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnR9cHhgKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcH1weGApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXRVbmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgY29uc3Qge1VOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRm9jdXMoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKSk7XG4gIH1cblxuICBoYW5kbGVCbHVyKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCBNRENSaXBwbGVGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQGV4dGVuZHMgTURDQ29tcG9uZW50PCFNRENSaXBwbGVGb3VuZGF0aW9uPlxuICovXG5jbGFzcyBNRENSaXBwbGUgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKiogQHBhcmFtIHsuLi4/fSBhcmdzICovXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHt7aXNVbmJvdW5kZWQ6IChib29sZWFufHVuZGVmaW5lZCl9PX0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QsIHtpc1VuYm91bmRlZCA9IHVuZGVmaW5lZH0gPSB7fSkge1xuICAgIGNvbnN0IHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgLy8gT25seSBvdmVycmlkZSB1bmJvdW5kZWQgYmVoYXZpb3IgaWYgb3B0aW9uIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgaWYgKGlzVW5ib3VuZGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSAvKiogQHR5cGUge2Jvb2xlYW59ICovIChpc1VuYm91bmRlZCk7XG4gICAgfVxuICAgIHJldHVybiByaXBwbGU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshUmlwcGxlQ2FwYWJsZVN1cmZhY2V9IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUFkYXB0ZXIoaW5zdGFuY2UpIHtcbiAgICBjb25zdCBNQVRDSEVTID0gdXRpbC5nZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyksXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gaW5zdGFuY2UudW5ib3VuZGVkLFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiBpbnN0YW5jZS5yb290X1tNQVRDSEVTXSgnOmFjdGl2ZScpLFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IGluc3RhbmNlLmRpc2FibGVkLFxuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiAodGFyZ2V0KSA9PiBpbnN0YW5jZS5yb290Xy5jb250YWlucyh0YXJnZXQpLFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpLFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gaW5zdGFuY2Uucm9vdF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAoe3g6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0fSksXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgdW5ib3VuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0IHVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICB0aGlzLnVuYm91bmRlZF8gPSBCb29sZWFuKHVuYm91bmRlZCk7XG4gICAgdGhpcy5zZXRVbmJvdW5kZWRfKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc3VyZSBDb21waWxlciB0aHJvd3MgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3Igd2hlbiBkaXJlY3RseSBhY2Nlc3NpbmcgYVxuICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICogQnkgYWNjZXNzaW5nIHRoZSBwcm90ZWN0ZWQgcHJvcGVydHkgaW5zaWRlIGEgbWV0aG9kLCB3ZSBzb2x2ZSB0aGF0IHByb2JsZW0uXG4gICAqIFRoYXQncyB3aHkgdGhpcyBmdW5jdGlvbiBleGlzdHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRVbmJvdW5kZWRfKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VW5ib3VuZGVkKHRoaXMudW5ib3VuZGVkXyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUZvdW5kYXRpb259XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMudW5ib3VuZGVkID0gJ21kY1JpcHBsZUlzVW5ib3VuZGVkJyBpbiB0aGlzLnJvb3RfLmRhdGFzZXQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTZWUgTWF0ZXJpYWwgRGVzaWduIHNwZWMgZm9yIG1vcmUgZGV0YWlscyBvbiB3aGVuIHRvIHVzZSByaXBwbGVzLlxuICogaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL21vdGlvbi9jaG9yZW9ncmFwaHkuaHRtbCNjaG9yZW9ncmFwaHktY3JlYXRpb25cbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgUmlwcGxlQ2FwYWJsZVN1cmZhY2Uge31cblxuLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLnJvb3RfO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgYmxlZWRzIG91dCBvZiB0aGUgYm91bmRzIG9mIHRoZSBlbGVtZW50LlxuICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUudW5ib3VuZGVkO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgaXMgYXR0YWNoZWQgdG8gYSBkaXNhYmxlZCBjb21wb25lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS5kaXNhYmxlZDtcblxuZXhwb3J0IHtNRENSaXBwbGUsIE1EQ1JpcHBsZUZvdW5kYXRpb24sIFJpcHBsZUNhcGFibGVTdXJmYWNlLCB1dGlsfTtcbiIsIi8vIGltcG9ydCBNRENSaXBwbGVGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbidcbi8vIGltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2Rpc3QvbWRjLnJpcHBsZSdcbmltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2luZGV4J1xuaW1wb3J0IHtcbiAgc3VwcG9ydHNDc3NWYXJpYWJsZXMsXG4gIGdldE1hdGNoZXNQcm9wZXJ0eSxcbiAgYXBwbHlQYXNzaXZlXG59IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvdXRpbCdcblxuZXhwb3J0IGNsYXNzIFJpcHBsZUJhc2UgZXh0ZW5kcyBNRENSaXBwbGVGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBNQVRDSEVTKCkge1xuICAgIC8qIGdsb2JhbCBIVE1MRWxlbWVudCAqL1xuICAgIHJldHVybiAoXG4gICAgICBSaXBwbGVCYXNlLl9tYXRjaGVzIHx8XG4gICAgICAoUmlwcGxlQmFzZS5fbWF0Y2hlcyA9IGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpKVxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cmZhY2VBY3RpdmUocmVmKSB7XG4gICAgcmV0dXJuIHJlZltSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZtLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbFtSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRkZWxldGUodm0uY2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogdGFyZ2V0ID0+IHZtLiRlbC5jb250YWlucyh0YXJnZXQpLFxuICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uc3R5bGVzLCB2YXJOYW1lLCB2YWx1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFJpcHBsZU1peGluID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzKVxuICAgIHRoaXMucmlwcGxlLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxjdXN0b20tZWxlbWVudCBcbiAgICA6dGFnPVwidGFnXCIgXG4gICAgOmNsYXNzZXM9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGVzPVwic3R5bGVzXCIgXG4gICAgY2xhc3M9XCJtZGMtcmlwcGxlXCI+XG4gICAgPHNsb3QgLz5cbiAgPC9jdXN0b20tZWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBDdXN0b21FbGVtZW50TWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlTWl4aW4gfSBmcm9tICcuL21kYy1yaXBwbGUtYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXJpcHBsZScsXG4gIG1peGluczogW0N1c3RvbUVsZW1lbnRNaXhpbiwgUmlwcGxlTWl4aW5dLFxuICBwcm9wczoge1xuICAgIHRhZzogU3RyaW5nXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8Y3VzdG9tLWJ1dHRvblxuICAgIHJlZj1cInJvb3RcIlxuICAgIDpjbGFzcz1cImNsYXNzZXNcIlxuICAgIDpzdHlsZT1cInN0eWxlc1wiXG4gICAgOmhyZWY9XCJocmVmXCJcbiAgICA6bGluaz1cImxpbmtcIlxuICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICB2LW9uPVwibGlzdGVuZXJzXCJcbiAgPlxuICAgIDxzbG90IC8+XG4gIDwvY3VzdG9tLWJ1dHRvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBEaXNwYXRjaEV2ZW50TWl4aW4sIEN1c3RvbUJ1dHRvbk1peGluIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IFJpcHBsZU1peGluIH0gZnJvbSAnLi4vcmlwcGxlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtYnV0dG9uLWJhc2UnLFxuICBtaXhpbnM6IFtEaXNwYXRjaEV2ZW50TWl4aW4sIEN1c3RvbUJ1dHRvbk1peGluLCBSaXBwbGVNaXhpbl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8c2NyaXB0PlxuaW1wb3J0IG1kY0J1dHRvbkJhc2UgZnJvbSAnLi9tZGMtYnV0dG9uLWJhc2UudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtYnV0dG9uJyxcbiAgZXh0ZW5kczogbWRjQnV0dG9uQmFzZSxcbiAgcHJvcHM6IHtcbiAgICByYWlzZWQ6IEJvb2xlYW4sXG4gICAgdW5lbGV2YXRlZDogQm9vbGVhbixcbiAgICBvdXRsaW5lZDogQm9vbGVhbixcbiAgICBkZW5zZTogQm9vbGVhblxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgICdtZGMtYnV0dG9uJzogdHJ1ZSxcbiAgICAgICAgJ21kYy1idXR0b24tLXJhaXNlZCc6IHRoaXMucmFpc2VkLFxuICAgICAgICAnbWRjLWJ1dHRvbi0tdW5lbGV2YXRlZCc6IHRoaXMudW5lbGV2YXRlZCxcbiAgICAgICAgJ21kYy1idXR0b24tLW91dGxpbmVkJzogdGhpcy5vdXRsaW5lZCxcbiAgICAgICAgJ21kYy1idXR0b24tLWRlbnNlJzogdGhpcy5kZW5zZVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICByYWlzZWQoKSB7XG4gICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCAnbWRjLWJ1dHRvbi0tcmFpc2VkJywgdGhpcy5yYWlzZWQpXG4gICAgfSxcbiAgICB1bmVsZXZhdGVkKCkge1xuICAgICAgdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgJ21kYy1idXR0b24tLXVuZWxldmF0ZWQnLCB0aGlzLnVuZWxldmF0ZWQpXG4gICAgfSxcbiAgICBvdXRsaW5lZCgpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsICdtZGMtYnV0dG9uLS1vdXRsaW5lZCcsIHRoaXMub3V0bGluZWQpXG4gICAgfSxcbiAgICBkZW5zZSgpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsICdtZGMtYnV0dG9uLS1kZW5zZScsIHRoaXMuZGVuc2UpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBcInBvbnlmaWxsXCIgaXMgYSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgbW9kaWZ5IHRoZSBnbG9iYWwgcHJvdG90eXBlIGNoYWluLlxuICogVGhpcyBtYWtlcyBwb255ZmlsbHMgc2FmZXIgdGhhbiB0cmFkaXRpb25hbCBwb2x5ZmlsbHMsIGVzcGVjaWFsbHkgZm9yIGxpYnJhcmllcyBsaWtlIE1EQy5cbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7P0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgaWYgKGVsZW1lbnQuY2xvc2VzdCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICB9XG5cbiAgbGV0IGVsID0gZWxlbWVudDtcbiAgd2hpbGUgKGVsKSB7XG4gICAgaWYgKG1hdGNoZXMoZWwsIHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IG5hdGl2ZU1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXNcbiAgICB8fCBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvclxuICAgIHx8IGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3I7XG4gIHJldHVybiBuYXRpdmVNYXRjaGVzLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xufVxuXG5leHBvcnQge2Nsb3Nlc3QsIG1hdGNoZXN9O1xuIiwidmFyIGNhbmRpZGF0ZVNlbGVjdG9ycyA9IFtcbiAgJ2lucHV0JyxcbiAgJ3NlbGVjdCcsXG4gICd0ZXh0YXJlYScsXG4gICdhW2hyZWZdJyxcbiAgJ2J1dHRvbicsXG4gICdbdGFiaW5kZXhdJyxcbiAgJ2F1ZGlvW2NvbnRyb2xzXScsXG4gICd2aWRlb1tjb250cm9sc10nLFxuICAnW2NvbnRlbnRlZGl0YWJsZV06bm90KFtjb250ZW50ZWRpdGFibGU9XCJmYWxzZVwiXSknLFxuXTtcbnZhciBjYW5kaWRhdGVTZWxlY3RvciA9IGNhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJyk7XG5cbnZhciBtYXRjaGVzID0gdHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnXG4gID8gZnVuY3Rpb24gKCkge31cbiAgOiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcblxuZnVuY3Rpb24gdGFiYmFibGUoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIGVsZW1lbnREb2N1bWVudCA9IGVsLm93bmVyRG9jdW1lbnQgfHwgZWw7XG4gIHZhciByZWd1bGFyVGFiYmFibGVzID0gW107XG4gIHZhciBvcmRlcmVkVGFiYmFibGVzID0gW107XG5cbiAgdmFyIHVudG91Y2hhYmlsaXR5Q2hlY2tlciA9IG5ldyBVbnRvdWNoYWJpbGl0eUNoZWNrZXIoZWxlbWVudERvY3VtZW50KTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKGNhbmRpZGF0ZVNlbGVjdG9yKTtcblxuICBpZiAob3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyKSB7XG4gICAgaWYgKG1hdGNoZXMuY2FsbChlbCwgY2FuZGlkYXRlU2VsZWN0b3IpKSB7XG4gICAgICBjYW5kaWRhdGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGNhbmRpZGF0ZXMpO1xuICAgICAgY2FuZGlkYXRlcy51bnNoaWZ0KGVsKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaSwgY2FuZGlkYXRlLCBjYW5kaWRhdGVUYWJpbmRleDtcbiAgZm9yIChpID0gMDsgaSA8IGNhbmRpZGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjYW5kaWRhdGUgPSBjYW5kaWRhdGVzW2ldO1xuXG4gICAgaWYgKCFpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUoY2FuZGlkYXRlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpKSBjb250aW51ZTtcblxuICAgIGNhbmRpZGF0ZVRhYmluZGV4ID0gZ2V0VGFiaW5kZXgoY2FuZGlkYXRlKTtcbiAgICBpZiAoY2FuZGlkYXRlVGFiaW5kZXggPT09IDApIHtcbiAgICAgIHJlZ3VsYXJUYWJiYWJsZXMucHVzaChjYW5kaWRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcmRlcmVkVGFiYmFibGVzLnB1c2goe1xuICAgICAgICBkb2N1bWVudE9yZGVyOiBpLFxuICAgICAgICB0YWJJbmRleDogY2FuZGlkYXRlVGFiaW5kZXgsXG4gICAgICAgIG5vZGU6IGNhbmRpZGF0ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0YWJiYWJsZU5vZGVzID0gb3JkZXJlZFRhYmJhYmxlc1xuICAgIC5zb3J0KHNvcnRPcmRlcmVkVGFiYmFibGVzKVxuICAgIC5tYXAoZnVuY3Rpb24oYSkgeyByZXR1cm4gYS5ub2RlIH0pXG4gICAgLmNvbmNhdChyZWd1bGFyVGFiYmFibGVzKTtcblxuICByZXR1cm4gdGFiYmFibGVOb2Rlcztcbn1cblxudGFiYmFibGUuaXNUYWJiYWJsZSA9IGlzVGFiYmFibGU7XG50YWJiYWJsZS5pc0ZvY3VzYWJsZSA9IGlzRm9jdXNhYmxlO1xuXG5mdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKSB7XG4gIGlmIChcbiAgICAhaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpXG4gICAgfHwgaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpXG4gICAgfHwgZ2V0VGFiaW5kZXgobm9kZSkgPCAwXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNUYWJiYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpIHtcbiAgaWYgKCFub2RlKSB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBjYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKTtcbn1cblxuZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpIHtcbiAgdW50b3VjaGFiaWxpdHlDaGVja2VyID0gdW50b3VjaGFiaWxpdHlDaGVja2VyIHx8IG5ldyBVbnRvdWNoYWJpbGl0eUNoZWNrZXIobm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGUpO1xuICBpZiAoXG4gICAgbm9kZS5kaXNhYmxlZFxuICAgIHx8IGlzSGlkZGVuSW5wdXQobm9kZSlcbiAgICB8fCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIuaXNVbnRvdWNoYWJsZShub2RlKVxuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbnZhciBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvciA9IGNhbmRpZGF0ZVNlbGVjdG9ycy5jb25jYXQoJ2lmcmFtZScpLmpvaW4oJywnKTtcbmZ1bmN0aW9uIGlzRm9jdXNhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcikge1xuICBpZiAoIW5vZGUpIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFiaW5kZXgobm9kZSkge1xuICB2YXIgdGFiaW5kZXhBdHRyID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwKTtcbiAgaWYgKCFpc05hTih0YWJpbmRleEF0dHIpKSByZXR1cm4gdGFiaW5kZXhBdHRyO1xuICAvLyBCcm93c2VycyBkbyBub3QgcmV0dXJuIGB0YWJJbmRleGAgY29ycmVjdGx5IGZvciBjb250ZW50RWRpdGFibGUgbm9kZXM7XG4gIC8vIHNvIGlmIHRoZXkgZG9uJ3QgaGF2ZSBhIHRhYmluZGV4IGF0dHJpYnV0ZSBzcGVjaWZpY2FsbHkgc2V0LCBhc3N1bWUgaXQncyAwLlxuICBpZiAoaXNDb250ZW50RWRpdGFibGUobm9kZSkpIHJldHVybiAwO1xuICByZXR1cm4gbm9kZS50YWJJbmRleDtcbn1cblxuZnVuY3Rpb24gc29ydE9yZGVyZWRUYWJiYWJsZXMoYSwgYikge1xuICByZXR1cm4gYS50YWJJbmRleCA9PT0gYi50YWJJbmRleCA/IGEuZG9jdW1lbnRPcmRlciAtIGIuZG9jdW1lbnRPcmRlciA6IGEudGFiSW5kZXggLSBiLnRhYkluZGV4O1xufVxuXG4vLyBBcnJheS5wcm90b3R5cGUuZmluZCBub3QgYXZhaWxhYmxlIGluIElFLlxuZnVuY3Rpb24gZmluZChsaXN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJlZGljYXRlKGxpc3RbaV0pKSByZXR1cm4gbGlzdFtpXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0NvbnRlbnRFZGl0YWJsZShub2RlKSB7XG4gIHJldHVybiBub2RlLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnO1xufVxuXG5mdW5jdGlvbiBpc0lucHV0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJztcbn1cblxuZnVuY3Rpb24gaXNIaWRkZW5JbnB1dChub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ2hpZGRlbic7XG59XG5cbmZ1bmN0aW9uIGlzUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdyYWRpbyc7XG59XG5cbmZ1bmN0aW9uIGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc1JhZGlvKG5vZGUpICYmICFpc1RhYmJhYmxlUmFkaW8obm9kZSk7XG59XG5cbmZ1bmN0aW9uIGdldENoZWNrZWRSYWRpbyhub2Rlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5vZGVzW2ldLmNoZWNrZWQpIHtcbiAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNUYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHJldHVybiB0cnVlO1xuICAvLyBUaGlzIHdvbid0IGFjY291bnQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgeW91IGhhdmUgcmFkaW8gZ3JvdXBzIHdpdGggdGhlIHNhbWVcbiAgLy8gaW4gc2VwYXJhdGUgZm9ybXMgb24gdGhlIHNhbWUgcGFnZS5cbiAgdmFyIHJhZGlvU2V0ID0gbm9kZS5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJyArIG5vZGUubmFtZSArICdcIl0nKTtcbiAgdmFyIGNoZWNrZWQgPSBnZXRDaGVja2VkUmFkaW8ocmFkaW9TZXQpO1xuICByZXR1cm4gIWNoZWNrZWQgfHwgY2hlY2tlZCA9PT0gbm9kZTtcbn1cblxuLy8gQW4gZWxlbWVudCBpcyBcInVudG91Y2hhYmxlXCIgaWYgKml0IG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzKiBoYXNcbi8vIGB2aXNpYmlsaXR5OiBoaWRkZW5gIG9yIGBkaXNwbGF5OiBub25lYC5cbmZ1bmN0aW9uIFVudG91Y2hhYmlsaXR5Q2hlY2tlcihlbGVtZW50RG9jdW1lbnQpIHtcbiAgdGhpcy5kb2MgPSBlbGVtZW50RG9jdW1lbnQ7XG4gIC8vIE5vZGUgY2FjaGUgbXVzdCBiZSByZWZyZXNoZWQgb24gZXZlcnkgY2hlY2ssIGluIGNhc2VcbiAgLy8gdGhlIGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQgaGFzIGNoYW5nZWQuIFRoZSBjYWNoZSBjb250YWlucyB0dXBsZXNcbiAgLy8gbWFwcGluZyBub2RlcyB0byB0aGVpciBib29sZWFuIHJlc3VsdC5cbiAgdGhpcy5jYWNoZSA9IFtdO1xufVxuXG4vLyBnZXRDb21wdXRlZFN0eWxlIGFjY3VyYXRlbHkgcmVmbGVjdHMgYHZpc2liaWxpdHk6IGhpZGRlbmAgb2YgYW5jZXN0b3JzXG4vLyBidXQgbm90IGBkaXNwbGF5OiBub25lYCwgc28gd2UgbmVlZCB0byByZWN1cnNpdmVseSBjaGVjayBwYXJlbnRzLlxuVW50b3VjaGFiaWxpdHlDaGVja2VyLnByb3RvdHlwZS5oYXNEaXNwbGF5Tm9uZSA9IGZ1bmN0aW9uIGhhc0Rpc3BsYXlOb25lKG5vZGUsIG5vZGVDb21wdXRlZFN0eWxlKSB7XG4gIGlmIChub2RlID09PSB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIFNlYXJjaCBmb3IgYSBjYWNoZWQgcmVzdWx0LlxuICAgIHZhciBjYWNoZWQgPSBmaW5kKHRoaXMuY2FjaGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtID09PSBub2RlO1xuICAgIH0pO1xuICAgIGlmIChjYWNoZWQpIHJldHVybiBjYWNoZWRbMV07XG5cbiAgICBub2RlQ29tcHV0ZWRTdHlsZSA9IG5vZGVDb21wdXRlZFN0eWxlIHx8IHRoaXMuZG9jLmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICBpZiAobm9kZUNvbXB1dGVkU3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmhhc0Rpc3BsYXlOb25lKG5vZGUucGFyZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jYWNoZS5wdXNoKFtub2RlLCByZXN1bHRdKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblVudG91Y2hhYmlsaXR5Q2hlY2tlci5wcm90b3R5cGUuaXNVbnRvdWNoYWJsZSA9IGZ1bmN0aW9uIGlzVW50b3VjaGFibGUobm9kZSkge1xuICBpZiAobm9kZSA9PT0gdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50KSByZXR1cm4gZmFsc2U7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gdGhpcy5kb2MuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgaWYgKHRoaXMuaGFzRGlzcGxheU5vbmUobm9kZSwgY29tcHV0ZWRTdHlsZSkpIHJldHVybiB0cnVlO1xuICByZXR1cm4gY29tcHV0ZWRTdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0YWJiYWJsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG4iLCJ2YXIgdGFiYmFibGUgPSByZXF1aXJlKCd0YWJiYWJsZScpO1xudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKTtcblxudmFyIGFjdGl2ZUZvY3VzVHJhcHMgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB0cmFwUXVldWUgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmF0ZVRyYXA6IGZ1bmN0aW9uKHRyYXApIHtcbiAgICAgIGlmICh0cmFwUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgYWN0aXZlVHJhcCA9IHRyYXBRdWV1ZVt0cmFwUXVldWUubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChhY3RpdmVUcmFwICE9PSB0cmFwKSB7XG4gICAgICAgICAgYWN0aXZlVHJhcC5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB0cmFwSW5kZXggPSB0cmFwUXVldWUuaW5kZXhPZih0cmFwKTtcbiAgICAgIGlmICh0cmFwSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRyYXBRdWV1ZS5wdXNoKHRyYXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbW92ZSB0aGlzIGV4aXN0aW5nIHRyYXAgdG8gdGhlIGZyb250IG9mIHRoZSBxdWV1ZVxuICAgICAgICB0cmFwUXVldWUuc3BsaWNlKHRyYXBJbmRleCwgMSk7XG4gICAgICAgIHRyYXBRdWV1ZS5wdXNoKHRyYXApO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBkZWFjdGl2YXRlVHJhcDogZnVuY3Rpb24odHJhcCkge1xuICAgICAgdmFyIHRyYXBJbmRleCA9IHRyYXBRdWV1ZS5pbmRleE9mKHRyYXApO1xuICAgICAgaWYgKHRyYXBJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdHJhcFF1ZXVlLnNwbGljZSh0cmFwSW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJhcFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdHJhcFF1ZXVlW3RyYXBRdWV1ZS5sZW5ndGggLSAxXS51bnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSkoKTtcblxuZnVuY3Rpb24gZm9jdXNUcmFwKGVsZW1lbnQsIHVzZXJPcHRpb25zKSB7XG4gIHZhciBkb2MgPSBkb2N1bWVudDtcbiAgdmFyIGNvbnRhaW5lciA9XG4gICAgdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gZG9jLnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIHZhciBjb25maWcgPSB4dGVuZChcbiAgICB7XG4gICAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogdHJ1ZSxcbiAgICAgIGVzY2FwZURlYWN0aXZhdGVzOiB0cnVlXG4gICAgfSxcbiAgICB1c2VyT3B0aW9uc1xuICApO1xuXG4gIHZhciBzdGF0ZSA9IHtcbiAgICBmaXJzdFRhYmJhYmxlTm9kZTogbnVsbCxcbiAgICBsYXN0VGFiYmFibGVOb2RlOiBudWxsLFxuICAgIG5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbjogbnVsbCxcbiAgICBtb3N0UmVjZW50bHlGb2N1c2VkTm9kZTogbnVsbCxcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIHBhdXNlZDogZmFsc2VcbiAgfTtcblxuICB2YXIgdHJhcCA9IHtcbiAgICBhY3RpdmF0ZTogYWN0aXZhdGUsXG4gICAgZGVhY3RpdmF0ZTogZGVhY3RpdmF0ZSxcbiAgICBwYXVzZTogcGF1c2UsXG4gICAgdW5wYXVzZTogdW5wYXVzZVxuICB9O1xuXG4gIHJldHVybiB0cmFwO1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKGFjdGl2YXRlT3B0aW9ucykge1xuICAgIGlmIChzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcblxuICAgIHN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICB2YXIgb25BY3RpdmF0ZSA9XG4gICAgICBhY3RpdmF0ZU9wdGlvbnMgJiYgYWN0aXZhdGVPcHRpb25zLm9uQWN0aXZhdGVcbiAgICAgICAgPyBhY3RpdmF0ZU9wdGlvbnMub25BY3RpdmF0ZVxuICAgICAgICA6IGNvbmZpZy5vbkFjdGl2YXRlO1xuICAgIGlmIChvbkFjdGl2YXRlKSB7XG4gICAgICBvbkFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiBkZWFjdGl2YXRlKGRlYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgIHN0YXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuXG4gICAgYWN0aXZlRm9jdXNUcmFwcy5kZWFjdGl2YXRlVHJhcCh0cmFwKTtcblxuICAgIHZhciBvbkRlYWN0aXZhdGUgPVxuICAgICAgZGVhY3RpdmF0ZU9wdGlvbnMgJiYgZGVhY3RpdmF0ZU9wdGlvbnMub25EZWFjdGl2YXRlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBkZWFjdGl2YXRlT3B0aW9ucy5vbkRlYWN0aXZhdGVcbiAgICAgICAgOiBjb25maWcub25EZWFjdGl2YXRlO1xuICAgIGlmIChvbkRlYWN0aXZhdGUpIHtcbiAgICAgIG9uRGVhY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIHZhciByZXR1cm5Gb2N1cyA9XG4gICAgICBkZWFjdGl2YXRlT3B0aW9ucyAmJiBkZWFjdGl2YXRlT3B0aW9ucy5yZXR1cm5Gb2N1cyAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZGVhY3RpdmF0ZU9wdGlvbnMucmV0dXJuRm9jdXNcbiAgICAgICAgOiBjb25maWcucmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU7XG4gICAgaWYgKHJldHVybkZvY3VzKSB7XG4gICAgICBkZWxheShmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5Rm9jdXMoc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgaWYgKHN0YXRlLnBhdXNlZCB8fCAhc3RhdGUuYWN0aXZlKSByZXR1cm47XG4gICAgc3RhdGUucGF1c2VkID0gdHJ1ZTtcbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVucGF1c2UoKSB7XG4gICAgaWYgKCFzdGF0ZS5wYXVzZWQgfHwgIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgIGFkZExpc3RlbmVycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICAvLyBUaGVyZSBjYW4gYmUgb25seSBvbmUgbGlzdGVuaW5nIGZvY3VzIHRyYXAgYXQgYSB0aW1lXG4gICAgYWN0aXZlRm9jdXNUcmFwcy5hY3RpdmF0ZVRyYXAodHJhcCk7XG5cbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG5cbiAgICAvLyBEZWxheSBlbnN1cmVzIHRoYXQgdGhlIGZvY3VzZWQgZWxlbWVudCBkb2Vzbid0IGNhcHR1cmUgdGhlIGV2ZW50XG4gICAgLy8gdGhhdCBjYXVzZWQgdGhlIGZvY3VzIHRyYXAgYWN0aXZhdGlvbi5cbiAgICBkZWxheShmdW5jdGlvbigpIHtcbiAgICAgIHRyeUZvY3VzKGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBjaGVja0ZvY3VzSW4sIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2ssIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXksIHRydWUpO1xuXG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgY2hlY2tGb2N1c0luLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB0cnVlKTtcblxuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Tm9kZUZvck9wdGlvbihvcHRpb25OYW1lKSB7XG4gICAgdmFyIG9wdGlvblZhbHVlID0gY29uZmlnW29wdGlvbk5hbWVdO1xuICAgIHZhciBub2RlID0gb3B0aW9uVmFsdWU7XG4gICAgaWYgKCFvcHRpb25WYWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBub2RlID0gZG9jLnF1ZXJ5U2VsZWN0b3Iob3B0aW9uVmFsdWUpO1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBvcHRpb25OYW1lICsgJ2AgcmVmZXJzIHRvIG5vIGtub3duIG5vZGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbm9kZSA9IG9wdGlvblZhbHVlKCk7XG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgJyArIG9wdGlvbk5hbWUgKyAnYCBkaWQgbm90IHJldHVybiBhIG5vZGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbml0aWFsRm9jdXNOb2RlKCkge1xuICAgIHZhciBub2RlO1xuICAgIGlmIChnZXROb2RlRm9yT3B0aW9uKCdpbml0aWFsRm9jdXMnKSAhPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IGdldE5vZGVGb3JPcHRpb24oJ2luaXRpYWxGb2N1cycpO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGRvYy5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgbm9kZSA9IGRvYy5hY3RpdmVFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlID0gc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUgfHwgZ2V0Tm9kZUZvck9wdGlvbignZmFsbGJhY2tGb2N1cycpO1xuICAgIH1cblxuICAgIGlmICghbm9kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIllvdSBjYW4ndCBoYXZlIGEgZm9jdXMtdHJhcCB3aXRob3V0IGF0IGxlYXN0IG9uZSBmb2N1c2FibGUgZWxlbWVudFwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgLy8gVGhpcyBuZWVkcyB0byBiZSBkb25lIG9uIG1vdXNlZG93biBhbmQgdG91Y2hzdGFydCBpbnN0ZWFkIG9mIGNsaWNrXG4gIC8vIHNvIHRoYXQgaXQgcHJlY2VkZXMgdGhlIGZvY3VzIGV2ZW50LlxuICBmdW5jdGlvbiBjaGVja1BvaW50ZXJEb3duKGUpIHtcbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkgcmV0dXJuO1xuICAgIGlmIChjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMpIHtcbiAgICAgIGRlYWN0aXZhdGUoe1xuICAgICAgICByZXR1cm5Gb2N1czogIXRhYmJhYmxlLmlzRm9jdXNhYmxlKGUudGFyZ2V0KVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICAvLyBJbiBjYXNlIGZvY3VzIGVzY2FwZXMgdGhlIHRyYXAgZm9yIHNvbWUgc3RyYW5nZSByZWFzb24sIHB1bGwgaXQgYmFjayBpbi5cbiAgZnVuY3Rpb24gY2hlY2tGb2N1c0luKGUpIHtcbiAgICAvLyBJbiBGaXJlZm94IHdoZW4geW91IFRhYiBvdXQgb2YgYW4gaWZyYW1lIHRoZSBEb2N1bWVudCBpcyBicmllZmx5IGZvY3VzZWQuXG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkgfHwgZS50YXJnZXQgaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHRyeUZvY3VzKHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlIHx8IGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0tleShlKSB7XG4gICAgaWYgKGNvbmZpZy5lc2NhcGVEZWFjdGl2YXRlcyAhPT0gZmFsc2UgJiYgaXNFc2NhcGVFdmVudChlKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZGVhY3RpdmF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNUYWJFdmVudChlKSkge1xuICAgICAgY2hlY2tUYWIoZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgLy8gSGlqYWNrIFRhYiBldmVudHMgb24gdGhlIGZpcnN0IGFuZCBsYXN0IGZvY3VzYWJsZSBub2RlcyBvZiB0aGUgdHJhcCxcbiAgLy8gaW4gb3JkZXIgdG8gcHJldmVudCBmb2N1cyBmcm9tIGVzY2FwaW5nLiBJZiBpdCBlc2NhcGVzIGZvciBldmVuIGFcbiAgLy8gbW9tZW50IGl0IGNhbiBlbmQgdXAgc2Nyb2xsaW5nIHRoZSBwYWdlIGFuZCBjYXVzaW5nIGNvbmZ1c2lvbiBzbyB3ZVxuICAvLyBraW5kIG9mIG5lZWQgdG8gY2FwdHVyZSB0aGUgYWN0aW9uIGF0IHRoZSBrZXlkb3duIHBoYXNlLlxuICBmdW5jdGlvbiBjaGVja1RhYihlKSB7XG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgIGlmIChlLnNoaWZ0S2V5ICYmIGUudGFyZ2V0ID09PSBzdGF0ZS5maXJzdFRhYmJhYmxlTm9kZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdHJ5Rm9jdXMoc3RhdGUubGFzdFRhYmJhYmxlTm9kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghZS5zaGlmdEtleSAmJiBlLnRhcmdldCA9PT0gc3RhdGUubGFzdFRhYmJhYmxlTm9kZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdHJ5Rm9jdXMoc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQ2xpY2soZSkge1xuICAgIGlmIChjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMpIHJldHVybjtcbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkgcmV0dXJuO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVGFiYmFibGVOb2RlcygpIHtcbiAgICB2YXIgdGFiYmFibGVOb2RlcyA9IHRhYmJhYmxlKGNvbnRhaW5lcik7XG4gICAgc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUgPSB0YWJiYWJsZU5vZGVzWzBdIHx8IGdldEluaXRpYWxGb2N1c05vZGUoKTtcbiAgICBzdGF0ZS5sYXN0VGFiYmFibGVOb2RlID1cbiAgICAgIHRhYmJhYmxlTm9kZXNbdGFiYmFibGVOb2Rlcy5sZW5ndGggLSAxXSB8fCBnZXRJbml0aWFsRm9jdXNOb2RlKCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cnlGb2N1cyhub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IGRvYy5hY3RpdmVFbGVtZW50KSByZXR1cm47XG4gICAgaWYgKCFub2RlIHx8ICFub2RlLmZvY3VzKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5vZGUuZm9jdXMoKTtcbiAgICBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSA9IG5vZGU7XG4gICAgaWYgKGlzU2VsZWN0YWJsZUlucHV0KG5vZGUpKSB7XG4gICAgICBub2RlLnNlbGVjdCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc1NlbGVjdGFibGVJbnB1dChub2RlKSB7XG4gIHJldHVybiAoXG4gICAgbm9kZS50YWdOYW1lICYmXG4gICAgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcgJiZcbiAgICB0eXBlb2Ygbm9kZS5zZWxlY3QgPT09ICdmdW5jdGlvbidcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNFc2NhcGVFdmVudChlKSB7XG4gIHJldHVybiBlLmtleSA9PT0gJ0VzY2FwZScgfHwgZS5rZXkgPT09ICdFc2MnIHx8IGUua2V5Q29kZSA9PT0gMjc7XG59XG5cbmZ1bmN0aW9uIGlzVGFiRXZlbnQoZSkge1xuICByZXR1cm4gZS5rZXkgPT09ICdUYWInIHx8IGUua2V5Q29kZSA9PT0gOTtcbn1cblxuZnVuY3Rpb24gZGVsYXkoZm4pIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvY3VzVHJhcDtcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIHJlZj1cInJvb3RcIlxuICAgIDpjbGFzcz1cImNsYXNzZXNcIlxuICAgIDpzdHlsZT1cInN0eWxlc1wiXG4gICAgYXJpYS1tb2RhbD1cInRydWVcIlxuICAgIDphcmlhLWxhYmVsbGVkYnk9XCInbGFiZWwnICsgdm1hX3VpZF9cIlxuICAgIDphcmlhLWRlc2NyaWJlZGJ5PVwiJ2Rlc2MnICsgdm1hX3VpZF9cIlxuICAgIGNsYXNzPVwibWRjLWRpYWxvZ1wiXG4gICAgcm9sZT1cImFsZXJ0ZGlhbG9nXCJcbiAgICBAY2xpY2s9XCJvbkNsaWNrXCJcbiAgICBAa2V5ZG93bj1cIm9uQ2xpY2tcIlxuICA+XG4gICAgPGRpdiByZWY9XCJjb250YWluZXJcIiBjbGFzcz1cIm1kYy1kaWFsb2dfX2NvbnRhaW5lclwiPlxuICAgICAgPGRpdiByZWY9XCJzdXJmYWNlXCIgOmNsYXNzPVwic3VyZmFjZUNsYXNzZXNcIiBjbGFzcz1cIm1kYy1kaWFsb2dfX3N1cmZhY2VcIj5cbiAgICAgICAgPGgyIHYtaWY9XCJ0aXRsZVwiIGNsYXNzPVwibWRjLWRpYWxvZ19fdGl0bGVcIiA6aWQ9XCInbGFiZWwnICsgdm1hX3VpZF9cIj5cbiAgICAgICAgICA8IS0tXG4gICAgICAgICAgLS0+e3sgdGl0bGVcbiAgICAgICAgICB9fTwhLS0tLT5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdiByZWY9XCJjb250ZW50XCIgY2xhc3M9XCJtZGMtZGlhbG9nX19jb250ZW50XCIgOmlkPVwiJ2Rlc2MnICsgdm1hX3VpZF9cIj5cbiAgICAgICAgICA8c2xvdCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvb3RlciB2LWlmPVwiYWNjZXB0IHx8IGNhbmNlbFwiIGNsYXNzPVwibWRjLWRpYWxvZ19fYWN0aW9uc1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdi1pZj1cImNhbmNlbFwiXG4gICAgICAgICAgICBjbGFzcz1cIm1kYy1idXR0b24gbWRjLWRpYWxvZ19fYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtbWRjLWRpYWxvZy1hY3Rpb249XCJub1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgY2FuY2VsIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICByZWY9XCJkZWZhdWx0QnV0dG9uXCJcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cImFjY2VwdERpc2FibGVkXCJcbiAgICAgICAgICAgIGNsYXNzPVwibWRjLWJ1dHRvbiBtZGMtZGlhbG9nX19idXR0b24gXCJcbiAgICAgICAgICAgIGRhdGEtbWRjLWRpYWxvZy1hY3Rpb249XCJ5ZXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGFjY2VwdCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZGMtZGlhbG9nX19zY3JpbVwiIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENEaWFsb2dGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9kaWFsb2cvZm91bmRhdGlvbidcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnQG1hdGVyaWFsL2RpYWxvZy91dGlsJ1xuaW1wb3J0IHsgbWRjQnV0dG9uIH0gZnJvbSAnLi4vYnV0dG9uJ1xuaW1wb3J0IHsgVk1BVW5pcXVlSWRNaXhpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgeyBjbG9zZXN0LCBtYXRjaGVzIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9wb255ZmlsbCdcbmltcG9ydCBjcmVhdGVGb2N1c1RyYXAgZnJvbSAnZm9jdXMtdHJhcCdcbmNvbnN0IHN0cmluZ3MgPSBNRENEaWFsb2dGb3VuZGF0aW9uLnN0cmluZ3NcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWRpYWxvZycsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBtZGNCdXR0b246IG1kY0J1dHRvblxuICB9LFxuICBtaXhpbnM6IFtWTUFVbmlxdWVJZE1peGluXSxcbiAgbW9kZWw6IHtcbiAgICBwcm9wOiAnb3BlbicsXG4gICAgZXZlbnQ6ICdjaGFuZ2UnXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgYWNjZXB0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnT2snXG4gICAgfSxcbiAgICBhY2NlcHREaXNhYmxlZDogQm9vbGVhbixcbiAgICBhY2NlcHRSYWlzZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgY2FuY2VsOiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIGNhbmNlbFJhaXNlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBhY2NlbnQ6IEJvb2xlYW4sXG4gICAgc2Nyb2xsYWJsZTogQm9vbGVhbixcbiAgICBvcGVuOiBCb29sZWFuXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgJ21kYy10aGVtZS0tZGFyayc6IHRoaXMuZGFya1xuICAgICAgfSxcbiAgICAgIHN0eWxlczoge30sXG4gICAgICBzdXJmYWNlQ2xhc3Nlczoge30sXG4gICAgICBib2R5Q2xhc3Nlczoge1xuICAgICAgICAnbWRjLWRpYWxvZ19fYm9keS0tc2Nyb2xsYWJsZSc6IHRoaXMuc2Nyb2xsYWJsZVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBvcGVuOiAnb25PcGVuXydcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBpZiAodGhpcy5hY2NlcHQpIHtcbiAgICAgIHRoaXMuZm9jdXNUcmFwID0gdXRpbC5jcmVhdGVGb2N1c1RyYXBJbnN0YW5jZShcbiAgICAgICAgdGhpcy4kcmVmcy5jb250YWluZXIsXG4gICAgICAgIGNyZWF0ZUZvY3VzVHJhcFxuICAgICAgKVxuICAgIH1cblxuICAgIHRoaXMuYnV0dG9uc18gPSBbXS5zbGljZS5jYWxsKFxuICAgICAgdGhpcy4kZWwucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkJVVFRPTl9TRUxFQ1RPUilcbiAgICApXG5cbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDRGlhbG9nRm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSksXG4gICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGRlbGV0ZSh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSksXG4gICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgYWRkQm9keUNsYXNzOiBjbGFzc05hbWUgPT4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVCb2R5Q2xhc3M6IGNsYXNzTmFtZSA9PiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIGV2ZW50VGFyZ2V0TWF0Y2hlczogKHRhcmdldCwgc2VsZWN0b3IpID0+IG1hdGNoZXModGFyZ2V0LCBzZWxlY3RvciksXG4gICAgICB0cmFwRm9jdXM6ICgpID0+IHRoaXMuZm9jdXNUcmFwICYmIHRoaXMuZm9jdXNUcmFwLmFjdGl2YXRlKCksXG4gICAgICByZWxlYXNlRm9jdXM6ICgpID0+IHRoaXMuZm9jdXNUcmFwICYmIHRoaXMuZm9jdXNUcmFwLmRlYWN0aXZhdGUoKSxcbiAgICAgIGlzQ29udGVudFNjcm9sbGFibGU6ICgpID0+XG4gICAgICAgICEhdGhpcy4kcmVmcy5jb250ZW50ICYmIHV0aWwuaXNTY3JvbGxhYmxlKHRoaXMuJHJlZnMuY29udGVudCksXG4gICAgICBhcmVCdXR0b25zU3RhY2tlZDogKCkgPT4gdXRpbC5hcmVUb3BzTWlzYWxpZ25lZCh0aGlzLmJ1dHRvbnNfKSxcblxuICAgICAgZ2V0QWN0aW9uRnJvbUV2ZW50OiBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjbG9zZXN0KGV2ZW50LnRhcmdldCwgYFske3N0cmluZ3MuQUNUSU9OX0FUVFJJQlVURX1dYClcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoc3RyaW5ncy5BQ1RJT05fQVRUUklCVVRFKVxuICAgICAgfSxcbiAgICAgIGNsaWNrRGVmYXVsdEJ1dHRvbjogKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy4kcmVmcy5kZWZhdWx0QnV0dG9uKSB7XG4gICAgICAgICAgdGhpcy4kcmVmcy5kZWZhdWx0QnV0dG9uLmNsaWNrKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJldmVyc2VCdXR0b25zOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuYnV0dG9uc18ucmV2ZXJzZSgpXG4gICAgICAgIHRoaXMuYnV0dG9uc18uZm9yRWFjaChidXR0b24gPT5cbiAgICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICBub3RpZnlPcGVuaW5nOiAoKSA9PiB0aGlzLiRlbWl0KHN0cmluZ3MuT1BFTklOR19FVkVOVCwge30pLFxuICAgICAgbm90aWZ5T3BlbmVkOiAoKSA9PiB0aGlzLiRlbWl0KHN0cmluZ3MuT1BFTkVEX0VWRU5ULCB7fSksXG4gICAgICBub3RpZnlDbG9zaW5nOiBhY3Rpb24gPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBmYWxzZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aW9uKVxuICAgICAgICB0aGlzLiRlbWl0KHN0cmluZ3MuQ0xPU0lOR19FVkVOVCwgYWN0aW9uID8geyBhY3Rpb24gfSA6IHt9KVxuICAgICAgfSxcbiAgICAgIG5vdGlmeUNsb3NlZDogYWN0aW9uID0+XG4gICAgICAgIHRoaXMuJGVtaXQoc3RyaW5ncy5DTE9TRURfRVZFTlQsIGFjdGlvbiA/IHsgYWN0aW9uIH0gOiB7fSlcbiAgICB9KVxuXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuICAgIHRoaXMub3BlbiAmJiB0aGlzLmZvdW5kYXRpb24ub3BlbigpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25PcGVuXyh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5vcGVuKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5jbG9zZSgpXG4gICAgICB9XG4gICAgfSxcblxuICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVJbnRlcmFjdGlvbihldmVudClcbiAgICB9LFxuICAgIG9uQ2FuY2VsKCkge1xuICAgICAgaWYgKHRoaXMuJGxpc3RlbmVyc1sndmFsaWRhdGVDYW5jZWwnXSkge1xuICAgICAgICB0aGlzLiRlbWl0KCd2YWxpZGF0ZUNhbmNlbCcsIHtcbiAgICAgICAgICBjYW5jZWw6IChub3RpZnkgPSB0cnVlKSA9PiB7XG4gICAgICAgICAgICAvLyBpZiBub3RpZnkgPSBmYWxzZSwgdGhlIGRpYWxvZyB3aWxsIGNsb3NlXG4gICAgICAgICAgICAvLyBidXQgdGhlIG5vdGlmeUFjY2VwdCBtZXRob2Qgd2lsbCBub3QgYmUgY2FsbGVkXG4gICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIG5vdGlmeSBsaXN0ZW5lcnMgdGhlIG9wZW4gc3RhdGVcbiAgICAgICAgICAgIC8vIGlzIGNoYW5naW5nLlxuICAgICAgICAgICAgaWYgKCFub3RpZnkpIHtcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb24uY2FuY2VsKG5vdGlmeSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uY2FuY2VsKHRydWUpXG4gICAgICB9XG4gICAgfSxcbiAgICBvbkFjY2VwdCgpIHtcbiAgICAgIGlmICh0aGlzLiRsaXN0ZW5lcnNbJ3ZhbGlkYXRlJ10pIHtcbiAgICAgICAgdGhpcy4kZW1pdCgndmFsaWRhdGUnLCB7XG4gICAgICAgICAgYWNjZXB0OiAobm90aWZ5ID0gdHJ1ZSkgPT4ge1xuICAgICAgICAgICAgLy8gaWYgbm90aWZ5ID0gZmFsc2UsIHRoZSBkaWFsb2cgd2lsbCBjbG9zZVxuICAgICAgICAgICAgLy8gYnV0IHRoZSBub3RpZnlBY2NlcHQgbWV0aG9kIHdpbGwgbm90IGJlIGNhbGxlZFxuICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBub3RpZnkgbGlzdGVuZXJzIHRoZSBvcGVuIHN0YXRlXG4gICAgICAgICAgICAvLyBpcyBjaGFuZ2luZy5cbiAgICAgICAgICAgIGlmICghbm90aWZ5KSB7XG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmFjY2VwdChub3RpZnkpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmFjY2VwdCh0cnVlKVxuICAgICAgfVxuICAgIH0sXG4gICAgc2hvdygpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5vcGVuKClcbiAgICB9LFxuICAgIGNsb3NlKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmNsb3NlKClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgbWRjRGlhbG9nIGZyb20gJy4vbWRjLWRpYWxvZy52dWUnXG5cbmV4cG9ydCB7IG1kY0RpYWxvZyB9XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VQbHVnaW4oe1xuICBtZGNEaWFsb2dcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJDdXN0b21FbGVtZW50IiwiZnVuY3Rpb25hbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwicHJvcHMiLCJpcyIsInRhZyIsImRhdGEiLCJjaGlsZHJlbiIsIkN1c3RvbUVsZW1lbnRNaXhpbiIsIkN1c3RvbUJ1dHRvbiIsImxpbmsiLCJPYmplY3QiLCJoIiwiZWxlbWVudCIsInBhcmVudCIsIiRyb3V0ZXIiLCIkcm9vdCIsIiRvcHRpb25zIiwiYXR0cnMiLCJyb2xlIiwib24iLCJjbGljayIsIm5hdGl2ZU9uIiwiaHJlZiIsIkN1c3RvbUJ1dHRvbk1peGluIiwiU3RyaW5nIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwidG8iLCJleGFjdCIsImFwcGVuZCIsInJlcGxhY2UiLCJhY3RpdmVDbGFzcyIsImV4YWN0QWN0aXZlQ2xhc3MiLCJjb21wdXRlZCIsIkRpc3BhdGNoRXZlbnRNaXhpbiIsImV2ZW50IiwiQXJyYXkiLCJtZXRob2RzIiwiZGlzcGF0Y2hFdmVudCIsImV2dCIsIiRlbWl0IiwidHlwZSIsInRhcmdldCIsImV2ZW50VGFyZ2V0IiwiYXJncyIsImV2ZW50QXJncyIsImxpc3RlbmVycyIsIiRsaXN0ZW5lcnMiLCJlIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIlZNQVVuaXF1ZUlkTWl4aW4iLCJiZWZvcmVDcmVhdGUiLCJ2bWFfdWlkXyIsIl91aWQiLCJNRENGb3VuZGF0aW9uIiwiYWRhcHRlciIsImFkYXB0ZXJfIiwiTURDQ29tcG9uZW50Iiwicm9vdCIsImZvdW5kYXRpb24iLCJ1bmRlZmluZWQiLCJyb290XyIsImluaXRpYWxpemUiLCJmb3VuZGF0aW9uXyIsImdldERlZmF1bHRGb3VuZGF0aW9uIiwiaW5pdCIsImluaXRpYWxTeW5jV2l0aERPTSIsIkVycm9yIiwiZGVzdHJveSIsImV2dFR5cGUiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldnREYXRhIiwic2hvdWxkQnViYmxlIiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsIk1EQ0RpYWxvZ0FkYXB0ZXIiLCJjbGFzc05hbWUiLCJzZWxlY3RvciIsImFjdGlvbiIsImNzc0NsYXNzZXMiLCJPUEVOIiwiT1BFTklORyIsIkNMT1NJTkciLCJTQ1JPTExBQkxFIiwiU1RBQ0tFRCIsIlNDUk9MTF9MT0NLIiwic3RyaW5ncyIsIlNDUklNX1NFTEVDVE9SIiwiQ09OVEFJTkVSX1NFTEVDVE9SIiwiU1VSRkFDRV9TRUxFQ1RPUiIsIkNPTlRFTlRfU0VMRUNUT1IiLCJCVVRUT05fU0VMRUNUT1IiLCJERUZBVUxUX0JVVFRPTl9TRUxFQ1RPUiIsIlNVUFBSRVNTX0RFRkFVTFRfUFJFU1NfU0VMRUNUT1IiLCJqb2luIiwiT1BFTklOR19FVkVOVCIsIk9QRU5FRF9FVkVOVCIsIkNMT1NJTkdfRVZFTlQiLCJDTE9TRURfRVZFTlQiLCJBQ1RJT05fQVRUUklCVVRFIiwiQ0xPU0VfQUNUSU9OIiwiREVTVFJPWV9BQ1RJT04iLCJudW1iZXJzIiwiRElBTE9HX0FOSU1BVElPTl9PUEVOX1RJTUVfTVMiLCJESUFMT0dfQU5JTUFUSU9OX0NMT1NFX1RJTUVfTVMiLCJNRENEaWFsb2dGb3VuZGF0aW9uIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwiYWRkQm9keUNsYXNzIiwicmVtb3ZlQm9keUNsYXNzIiwiZXZlbnRUYXJnZXRNYXRjaGVzIiwidHJhcEZvY3VzIiwicmVsZWFzZUZvY3VzIiwiaXNDb250ZW50U2Nyb2xsYWJsZSIsImFyZUJ1dHRvbnNTdGFja2VkIiwiZ2V0QWN0aW9uRnJvbUV2ZW50IiwiY2xpY2tEZWZhdWx0QnV0dG9uIiwicmV2ZXJzZUJ1dHRvbnMiLCJub3RpZnlPcGVuaW5nIiwibm90aWZ5T3BlbmVkIiwibm90aWZ5Q2xvc2luZyIsIm5vdGlmeUNsb3NlZCIsImRlZmF1bHRBZGFwdGVyIiwiaXNPcGVuXyIsImFuaW1hdGlvbkZyYW1lXyIsImFuaW1hdGlvblRpbWVyXyIsImxheW91dEZyYW1lXyIsImVzY2FwZUtleUFjdGlvbl8iLCJzY3JpbUNsaWNrQWN0aW9uXyIsImF1dG9TdGFja0J1dHRvbnNfIiwiYXJlQnV0dG9uc1N0YWNrZWRfIiwic2V0QXV0b1N0YWNrQnV0dG9ucyIsImNsb3NlIiwiY2xlYXJUaW1lb3V0IiwiaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJydW5OZXh0QW5pbWF0aW9uRnJhbWVfIiwibGF5b3V0Iiwic2V0VGltZW91dCIsImF1dG9TdGFjayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxheW91dEludGVybmFsXyIsImRldGVjdFN0YWNrZWRCdXR0b25zXyIsImRldGVjdFNjcm9sbGFibGVDb250ZW50XyIsImlzQ2xpY2siLCJpc0VudGVyIiwia2V5Q29kZSIsImNhbGxiYWNrIiwibW9kdWxlIiwiZWwiLCJvcHRpb25zIiwiZWxlbWVudERvY3VtZW50Iiwib3duZXJEb2N1bWVudCIsImJhc2ljVGFiYmFibGVzIiwib3JkZXJlZFRhYmJhYmxlcyIsImlzVW5hdmFpbGFibGUiLCJjcmVhdGVJc1VuYXZhaWxhYmxlIiwiY2FuZGlkYXRlU2VsZWN0b3JzIiwiY2FuZGlkYXRlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmNsdWRlQ29udGFpbmVyIiwibWF0Y2hlcyIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJtc01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsInNvbWUiLCJjYW5kaWRhdGVTZWxlY3RvciIsImNhbGwiLCJzbGljZSIsImFwcGx5IiwidW5zaGlmdCIsImNhbmRpZGF0ZSIsImNhbmRpZGF0ZUluZGV4QXR0ciIsImNhbmRpZGF0ZUluZGV4IiwiaSIsImwiLCJsZW5ndGgiLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImlzTmFOIiwidGFiSW5kZXgiLCJ0YWdOYW1lIiwicHVzaCIsImluZGV4Iiwibm9kZSIsInRhYmJhYmxlTm9kZXMiLCJzb3J0IiwiYSIsImIiLCJtYXAiLCJpc09mZkNhY2hlIiwiaXNPZmYiLCJub2RlQ29tcHV0ZWRTdHlsZSIsImRvY3VtZW50RWxlbWVudCIsImRlZmF1bHRWaWV3IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInJlc3VsdCIsImRpc3BsYXkiLCJwYXJlbnROb2RlIiwiY29tcHV0ZWRTdHlsZSIsInZpc2liaWxpdHkiLCJsaXN0ZW5pbmdGb2N1c1RyYXAiLCJmb2N1c1RyYXAiLCJ1c2VyT3B0aW9ucyIsImZpcnN0VGFiYmFibGVOb2RlIiwibGFzdFRhYmJhYmxlTm9kZSIsIm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbiIsImFjdGl2ZSIsInBhdXNlZCIsInRhYkV2ZW50IiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImNvbmZpZyIsInJldHVybkZvY3VzT25EZWFjdGl2YXRlIiwiZXNjYXBlRGVhY3RpdmF0ZXMiLCJ0cmFwIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwicGF1c2UiLCJ1bnBhdXNlIiwiYWN0aXZhdGVPcHRpb25zIiwiZGVmYXVsdGVkQWN0aXZhdGVPcHRpb25zIiwib25BY3RpdmF0ZSIsImFjdGl2ZUVsZW1lbnQiLCJhZGRMaXN0ZW5lcnMiLCJkZWFjdGl2YXRlT3B0aW9ucyIsImRlZmF1bHRlZERlYWN0aXZhdGVPcHRpb25zIiwicmV0dXJuRm9jdXMiLCJvbkRlYWN0aXZhdGUiLCJyZW1vdmVMaXN0ZW5lcnMiLCJ0cnlGb2N1cyIsInVwZGF0ZVRhYmJhYmxlTm9kZXMiLCJmaXJzdEZvY3VzTm9kZSIsImNoZWNrRm9jdXMiLCJjaGVja0NsaWNrIiwiY2hlY2tQb2ludGVyRG93biIsImNoZWNrS2V5IiwiZ2V0Tm9kZUZvck9wdGlvbiIsIm9wdGlvbk5hbWUiLCJvcHRpb25WYWx1ZSIsImNvbnRhaW5zIiwiY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImJsdXIiLCJyZWFkanVzdEZvY3VzIiwiaGFuZGxlVGFiIiwiaXNFc2NhcGVFdmVudCIsImhhc0F0dHJpYnV0ZSIsIk51bWJlciIsImN1cnJlbnRGb2N1c0luZGV4IiwiaW5kZXhPZiIsInNoaWZ0S2V5IiwidGFiYmFibGUiLCJmb2N1cyIsInRvTG93ZXJDYXNlIiwic2VsZWN0IiwiY3JlYXRlRm9jdXNUcmFwSW5zdGFuY2UiLCJzdXJmYWNlRWwiLCJmb2N1c1RyYXBGYWN0b3J5IiwiY3JlYXRlRm9jdXNUcmFwIiwiaW5pdGlhbEZvY3VzRWwiLCJpbml0aWFsRm9jdXMiLCJpc1Njcm9sbGFibGUiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJhcmVUb3BzTWlzYWxpZ25lZCIsImVscyIsInRvcHMiLCJTZXQiLCJmb3JFYWNoIiwiYWRkIiwib2Zmc2V0VG9wIiwic2l6ZSIsIk1EQ1JpcHBsZUFkYXB0ZXIiLCJ2YXJOYW1lIiwidmFsdWUiLCJST09UIiwiVU5CT1VOREVEIiwiQkdfRk9DVVNFRCIsIkZHX0FDVElWQVRJT04iLCJGR19ERUFDVElWQVRJT04iLCJWQVJfTEVGVCIsIlZBUl9UT1AiLCJWQVJfRkdfU0laRSIsIlZBUl9GR19TQ0FMRSIsIlZBUl9GR19UUkFOU0xBVEVfU1RBUlQiLCJWQVJfRkdfVFJBTlNMQVRFX0VORCIsIlBBRERJTkciLCJJTklUSUFMX09SSUdJTl9TQ0FMRSIsIkRFQUNUSVZBVElPTl9USU1FT1VUX01TIiwiRkdfREVBQ1RJVkFUSU9OX01TIiwiVEFQX0RFTEFZX01TIiwic3VwcG9ydHNDc3NWYXJpYWJsZXNfIiwic3VwcG9ydHNQYXNzaXZlXyIsImRldGVjdEVkZ2VQc2V1ZG9WYXJCdWciLCJ3aW5kb3dPYmoiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJoYXNQc2V1ZG9WYXJCdWciLCJib3JkZXJUb3BTdHlsZSIsInJlbW92ZSIsInN1cHBvcnRzQ3NzVmFyaWFibGVzIiwiZm9yY2VSZWZyZXNoIiwic3VwcG9ydHNGdW5jdGlvblByZXNlbnQiLCJDU1MiLCJzdXBwb3J0cyIsImV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMiLCJ3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMiLCJhcHBseVBhc3NpdmUiLCJnbG9iYWxPYmoiLCJpc1N1cHBvcnRlZCIsInBhc3NpdmUiLCJnZXRNYXRjaGVzUHJvcGVydHkiLCJIVE1MRWxlbWVudFByb3RvdHlwZSIsIm1hdGNoZXNNZXRob2RzIiwibWV0aG9kIiwibWF0Y2hlc01ldGhvZCIsImdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyIsImV2IiwicGFnZU9mZnNldCIsImNsaWVudFJlY3QiLCJ4IiwieSIsImRvY3VtZW50WCIsImxlZnQiLCJkb2N1bWVudFkiLCJ0b3AiLCJub3JtYWxpemVkWCIsIm5vcm1hbGl6ZWRZIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiQUNUSVZBVElPTl9FVkVOVF9UWVBFUyIsIlBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTIiwiYWN0aXZhdGVkVGFyZ2V0cyIsIk1EQ1JpcHBsZUZvdW5kYXRpb24iLCJicm93c2VyU3VwcG9ydHNDc3NWYXJzIiwiaXNVbmJvdW5kZWQiLCJpc1N1cmZhY2VBY3RpdmUiLCJpc1N1cmZhY2VEaXNhYmxlZCIsImNvbnRhaW5zRXZlbnRUYXJnZXQiLCJyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyIiwiZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwiZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJ1cGRhdGVDc3NWYXJpYWJsZSIsImNvbXB1dGVCb3VuZGluZ1JlY3QiLCJnZXRXaW5kb3dQYWdlT2Zmc2V0IiwiZnJhbWVfIiwid2lkdGgiLCJoZWlnaHQiLCJhY3RpdmF0aW9uU3RhdGVfIiwiZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8iLCJpbml0aWFsU2l6ZV8iLCJtYXhSYWRpdXNfIiwiYWN0aXZhdGVIYW5kbGVyXyIsImFjdGl2YXRlXyIsImRlYWN0aXZhdGVIYW5kbGVyXyIsImRlYWN0aXZhdGVfIiwiZm9jdXNIYW5kbGVyXyIsImhhbmRsZUZvY3VzIiwiYmx1ckhhbmRsZXJfIiwiaGFuZGxlQmx1ciIsInJlc2l6ZUhhbmRsZXJfIiwidW5ib3VuZGVkQ29vcmRzXyIsImZnU2NhbGVfIiwiYWN0aXZhdGlvblRpbWVyXyIsImZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyIsImFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8iLCJhY3RpdmF0aW9uVGltZXJDYWxsYmFja18iLCJydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8iLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudF8iLCJpc0FjdGl2YXRlZCIsImhhc0RlYWN0aXZhdGlvblVYUnVuIiwid2FzQWN0aXZhdGVkQnlQb2ludGVyIiwid2FzRWxlbWVudE1hZGVBY3RpdmUiLCJhY3RpdmF0aW9uRXZlbnQiLCJpc1Byb2dyYW1tYXRpYyIsInN1cHBvcnRzUHJlc3NSaXBwbGUiLCJzdXBwb3J0c1ByZXNzUmlwcGxlXyIsInJlZ2lzdGVyUm9vdEhhbmRsZXJzXyIsInJlbW92ZUNzc1ZhcnNfIiwiZGVyZWdpc3RlclJvb3RIYW5kbGVyc18iLCJkZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfIiwia2V5cyIsImsiLCJhY3RpdmF0aW9uU3RhdGUiLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudCIsImlzU2FtZUludGVyYWN0aW9uIiwiaGFzQWN0aXZhdGVkQ2hpbGQiLCJyZXNldEFjdGl2YXRpb25TdGF0ZV8iLCJyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyIsImNoZWNrRWxlbWVudE1hZGVBY3RpdmVfIiwiYW5pbWF0ZUFjdGl2YXRpb25fIiwidHJhbnNsYXRlU3RhcnQiLCJ0cmFuc2xhdGVFbmQiLCJnZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwicm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfIiwiYWN0aXZhdGlvbkhhc0VuZGVkIiwic3RhdGUiLCJhbmltYXRlRGVhY3RpdmF0aW9uXyIsIm1heERpbSIsIm1heCIsImdldEJvdW5kZWRSYWRpdXMiLCJoeXBvdGVudXNlIiwic3FydCIsInBvdyIsInVwZGF0ZUxheW91dENzc1ZhcnNfIiwicm91bmQiLCJ1bmJvdW5kZWQiLCJNRENSaXBwbGUiLCJ1bmJvdW5kZWRfIiwic2V0VW5ib3VuZGVkIiwiY3JlYXRlQWRhcHRlciIsImRhdGFzZXQiLCJzZXRVbmJvdW5kZWRfIiwicmlwcGxlIiwiaW5zdGFuY2UiLCJNQVRDSEVTIiwidXRpbCIsIkhUTUxFbGVtZW50IiwiY2xhc3NMaXN0Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJSaXBwbGVDYXBhYmxlU3VyZmFjZSIsIlJpcHBsZUJhc2UiLCJyZWYiLCJfbWF0Y2hlcyIsIiRlbCIsIiRzZXQiLCJjbGFzc2VzIiwiJGRlbGV0ZSIsInN0eWxlcyIsIlJpcHBsZU1peGluIiwibW91bnRlZCIsImJlZm9yZURlc3Ryb3kiLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsIm5hdGl2ZU1hdGNoZXMiLCJyZWd1bGFyVGFiYmFibGVzIiwidW50b3VjaGFiaWxpdHlDaGVja2VyIiwiVW50b3VjaGFiaWxpdHlDaGVja2VyIiwiY2FuZGlkYXRlVGFiaW5kZXgiLCJpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUiLCJnZXRUYWJpbmRleCIsImRvY3VtZW50T3JkZXIiLCJzb3J0T3JkZXJlZFRhYmJhYmxlcyIsImNvbmNhdCIsImlzVGFiYmFibGUiLCJpc0ZvY3VzYWJsZSIsImlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUiLCJpc05vblRhYmJhYmxlUmFkaW8iLCJpc0hpZGRlbklucHV0IiwiaXNVbnRvdWNoYWJsZSIsImZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yIiwidGFiaW5kZXhBdHRyIiwiaXNDb250ZW50RWRpdGFibGUiLCJmaW5kIiwibGlzdCIsInByZWRpY2F0ZSIsImNvbnRlbnRFZGl0YWJsZSIsImlzSW5wdXQiLCJpc1JhZGlvIiwiaXNUYWJiYWJsZVJhZGlvIiwiZ2V0Q2hlY2tlZFJhZGlvIiwibm9kZXMiLCJjaGVja2VkIiwicmFkaW9TZXQiLCJkb2MiLCJjYWNoZSIsImhhc0Rpc3BsYXlOb25lIiwiY2FjaGVkIiwiaXRlbSIsImV4dGVuZCIsImhhc093blByb3BlcnR5IiwiYXJndW1lbnRzIiwic291cmNlIiwiYWN0aXZlRm9jdXNUcmFwcyIsInRyYXBRdWV1ZSIsImFjdGl2YXRlVHJhcCIsImFjdGl2ZVRyYXAiLCJ0cmFwSW5kZXgiLCJzcGxpY2UiLCJkZWFjdGl2YXRlVHJhcCIsInh0ZW5kIiwibW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUiLCJkZWxheSIsImdldEluaXRpYWxGb2N1c05vZGUiLCJjaGVja0ZvY3VzSW4iLCJEb2N1bWVudCIsImlzVGFiRXZlbnQiLCJjaGVja1RhYiIsImlzU2VsZWN0YWJsZUlucHV0IiwiZm4iLCJtZGNEaWFsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtJQUMvQjtJQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztJQUNBLE1BQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztJQUNqQ0QsSUFBQUEsSUFBSSxHQUFHQyxNQUFNLENBQUNDLEdBQWQ7SUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0lBQ3hDO0lBQ0FILElBQUFBLElBQUksR0FBR0csTUFBTSxDQUFDRCxHQUFkO0lBQ0Q7O0lBQ0QsTUFBSUYsSUFBSixFQUFVO0lBQ1JBLElBQUFBLElBQUksQ0FBQ0ksR0FBTCxDQUFTTCxNQUFUO0lBQ0Q7SUFDRjs7SUNaTSxTQUFTTSxVQUFULENBQW9CQyxVQUFwQixFQUFnQztJQUNyQyxTQUFPO0lBQ0xDLElBQUFBLE9BQU8sRUFBRSxhQURKO0lBRUxDLElBQUFBLE9BQU8sRUFBRSxpQkFBQUMsRUFBRSxFQUFJO0lBQ2IsV0FBSyxJQUFJQyxHQUFULElBQWdCSixVQUFoQixFQUE0QjtJQUMxQixZQUFJSyxTQUFTLEdBQUdMLFVBQVUsQ0FBQ0ksR0FBRCxDQUExQjtJQUNBRCxRQUFBQSxFQUFFLENBQUNFLFNBQUgsQ0FBYUEsU0FBUyxD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
