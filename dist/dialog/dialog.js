/**
* @module vue-mdc-adapterdialog 0.19.4-beta
* @exports VueMDCDialog
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.44.0","material-components-web":"^0.44.0"}
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
          element = context.parent.$root.$options.components['RouterLink'];
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
      

      
      var mdcButtonBase = normalizeComponent_1(
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
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcButton = normalizeComponent_1(
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
          this.focusTrap = createFocusTrapInstance(this.$refs.container, focusTrap_1);
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
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcDialog = normalizeComponent_1(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXV0by1pbml0LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Jhc2UtcGx1Z2luLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1lbGVtZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1ldmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tYnV0dG9uLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Rpc3BhdGNoLWV2ZW50LW1peGluLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RpYWxvZy9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kaWFsb2cvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kaWFsb2cvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy90YWJiYWJsZS9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZm9jdXMtdHJhcC9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZGlhbG9nL3V0aWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLWJhc2UuanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL21kYy1idXR0b24tYmFzZS52dWUiLCIuLi8uLi9jb21wb25lbnRzL2J1dHRvbi9tZGMtYnV0dG9uLnZ1ZSIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZG9tL3BvbnlmaWxsLmpzIiwiLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvbWRjLWRpYWxvZy52dWUiLCIuLi8uLi9jb21wb25lbnRzL2RpYWxvZy9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHtcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIGNvbnRleHQucHJvcHMuaXMgfHwgY29udGV4dC5wcm9wcy50YWcgfHwgJ2RpdicsXG4gICAgICBjb250ZXh0LmRhdGEsXG4gICAgICBjb250ZXh0LmNoaWxkcmVuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50TWl4aW4gPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21FbGVtZW50XG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImV4cG9ydCBjb25zdCBDdXN0b21CdXR0b24gPSB7XG4gIG5hbWU6ICdjdXN0b20tYnV0dG9uJyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICBsaW5rOiBPYmplY3RcbiAgfSxcbiAgcmVuZGVyKGgsIGNvbnRleHQpIHtcbiAgICBsZXQgZWxlbWVudFxuICAgIGxldCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dC5kYXRhKVxuXG4gICAgaWYgKGNvbnRleHQucHJvcHMubGluayAmJiBjb250ZXh0LnBhcmVudC4kcm91dGVyKSB7XG4gICAgICAvLyByb3V0ZXItbGluayBjYXNlXG4gICAgICBlbGVtZW50ID0gY29udGV4dC5wYXJlbnQuJHJvb3QuJG9wdGlvbnMuY29tcG9uZW50c1snUm91dGVyTGluayddXG4gICAgICBkYXRhLnByb3BzID0gT2JqZWN0LmFzc2lnbih7IHRhZzogY29udGV4dC5wcm9wcy50YWcgfSwgY29udGV4dC5wcm9wcy5saW5rKVxuICAgICAgZGF0YS5hdHRycy5yb2xlID0gJ2J1dHRvbidcbiAgICAgIGlmIChkYXRhLm9uLmNsaWNrKSB7XG4gICAgICAgIGRhdGEubmF0aXZlT24gPSB7IGNsaWNrOiBkYXRhLm9uLmNsaWNrIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy5ocmVmKSB7XG4gICAgICAvLyBocmVmIGNhc2VcbiAgICAgIGVsZW1lbnQgPSAnYSdcbiAgICAgIGRhdGEuYXR0cnMucm9sZSA9ICdidXR0b24nXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGJ1dHRvbiBmYWxsYmFja1xuICAgICAgZWxlbWVudCA9ICdidXR0b24nXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoZWxlbWVudCwgZGF0YSwgY29udGV4dC5jaGlsZHJlbilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9tQnV0dG9uTWl4aW4gPSB7XG4gIHByb3BzOiB7XG4gICAgaHJlZjogU3RyaW5nLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIHRvOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgIGV4YWN0OiBCb29sZWFuLFxuICAgIGFwcGVuZDogQm9vbGVhbixcbiAgICByZXBsYWNlOiBCb29sZWFuLFxuICAgIGFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gICAgZXhhY3RBY3RpdmVDbGFzczogU3RyaW5nXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbGluaygpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMudG8gJiYge1xuICAgICAgICAgIHRvOiB0aGlzLnRvLFxuICAgICAgICAgIGV4YWN0OiB0aGlzLmV4YWN0LFxuICAgICAgICAgIGFwcGVuZDogdGhpcy5hcHBlbmQsXG4gICAgICAgICAgcmVwbGFjZTogdGhpcy5yZXBsYWNlLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzOiB0aGlzLmFjdGl2ZUNsYXNzLFxuICAgICAgICAgIGV4YWN0QWN0aXZlQ2xhc3M6IHRoaXMuZXhhY3RBY3RpdmVDbGFzc1xuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgQ3VzdG9tQnV0dG9uXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBEaXNwYXRjaEV2ZW50TWl4aW4gPSB7XG4gIHByb3BzOiB7XG4gICAgZXZlbnQ6IFN0cmluZyxcbiAgICAnZXZlbnQtdGFyZ2V0JzogT2JqZWN0LFxuICAgICdldmVudC1hcmdzJzogQXJyYXlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRpc3BhdGNoRXZlbnQoZXZ0KSB7XG4gICAgICBldnQgJiYgdGhpcy4kZW1pdChldnQudHlwZSwgZXZ0KVxuICAgICAgaWYgKHRoaXMuZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZXZlbnRUYXJnZXQgfHwgdGhpcy4kcm9vdFxuICAgICAgICBsZXQgYXJncyA9IHRoaXMuZXZlbnRBcmdzIHx8IFtdXG4gICAgICAgIHRhcmdldC4kZW1pdCh0aGlzLmV2ZW50LCAuLi5hcmdzKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaXN0ZW5lcnMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLiRsaXN0ZW5lcnMsXG4gICAgICAgIGNsaWNrOiBlID0+IHRoaXMuZGlzcGF0Y2hFdmVudChlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBBXG4gKi9cbmNsYXNzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVte2Nzc0NsYXNzZXN9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtzdHJpbmdzfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtudW1iZXJzfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshT2JqZWN0fSAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAvLyB2YWxpZGF0aW9uLlxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0E9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyID0ge30pIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUF9ICovXG4gICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIERpYWxvZy4gUHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBtYW5hZ2luZzpcbiAqIC0gQ1NTIGNsYXNzZXNcbiAqIC0gRE9NXG4gKiAtIEV2ZW50IGhhbmRsZXJzXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENEaWFsb2dBZGFwdGVyIHtcbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIGFkZEJvZHlDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgcmVtb3ZlQm9keUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnRUYXJnZXR9IHRhcmdldFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGV2ZW50VGFyZ2V0TWF0Y2hlcyh0YXJnZXQsIHNlbGVjdG9yKSB7fVxuXG4gIHRyYXBGb2N1cygpIHt9XG4gIHJlbGVhc2VGb2N1cygpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzQ29udGVudFNjcm9sbGFibGUoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBhcmVCdXR0b25zU3RhY2tlZCgpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldmVudFxuICAgKiBAcmV0dXJuIHs/c3RyaW5nfVxuICAgKi9cbiAgZ2V0QWN0aW9uRnJvbUV2ZW50KGV2ZW50KSB7fVxuXG4gIGNsaWNrRGVmYXVsdEJ1dHRvbigpIHt9XG4gIHJldmVyc2VCdXR0b25zKCkge31cblxuICBub3RpZnlPcGVuaW5nKCkge31cbiAgbm90aWZ5T3BlbmVkKCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvblxuICAgKi9cbiAgbm90aWZ5Q2xvc2luZyhhY3Rpb24pIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25cbiAgICovXG4gIG5vdGlmeUNsb3NlZChhY3Rpb24pIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0RpYWxvZ0FkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgT1BFTjogJ21kYy1kaWFsb2ctLW9wZW4nLFxuICBPUEVOSU5HOiAnbWRjLWRpYWxvZy0tb3BlbmluZycsXG4gIENMT1NJTkc6ICdtZGMtZGlhbG9nLS1jbG9zaW5nJyxcbiAgU0NST0xMQUJMRTogJ21kYy1kaWFsb2ctLXNjcm9sbGFibGUnLFxuICBTVEFDS0VEOiAnbWRjLWRpYWxvZy0tc3RhY2tlZCcsXG4gIFNDUk9MTF9MT0NLOiAnbWRjLWRpYWxvZy1zY3JvbGwtbG9jaycsXG59O1xuXG5jb25zdCBzdHJpbmdzID0ge1xuICBTQ1JJTV9TRUxFQ1RPUjogJy5tZGMtZGlhbG9nX19zY3JpbScsXG4gIENPTlRBSU5FUl9TRUxFQ1RPUjogJy5tZGMtZGlhbG9nX19jb250YWluZXInLFxuICBTVVJGQUNFX1NFTEVDVE9SOiAnLm1kYy1kaWFsb2dfX3N1cmZhY2UnLFxuICBDT05URU5UX1NFTEVDVE9SOiAnLm1kYy1kaWFsb2dfX2NvbnRlbnQnLFxuICBCVVRUT05fU0VMRUNUT1I6ICcubWRjLWRpYWxvZ19fYnV0dG9uJyxcbiAgREVGQVVMVF9CVVRUT05fU0VMRUNUT1I6ICcubWRjLWRpYWxvZ19fYnV0dG9uLS1kZWZhdWx0JyxcbiAgU1VQUFJFU1NfREVGQVVMVF9QUkVTU19TRUxFQ1RPUjogW1xuICAgICd0ZXh0YXJlYScsXG4gICAgJy5tZGMtbWVudSAubWRjLWxpc3QtaXRlbScsXG4gIF0uam9pbignLCAnKSxcblxuICBPUEVOSU5HX0VWRU5UOiAnTURDRGlhbG9nOm9wZW5pbmcnLFxuICBPUEVORURfRVZFTlQ6ICdNRENEaWFsb2c6b3BlbmVkJyxcbiAgQ0xPU0lOR19FVkVOVDogJ01EQ0RpYWxvZzpjbG9zaW5nJyxcbiAgQ0xPU0VEX0VWRU5UOiAnTURDRGlhbG9nOmNsb3NlZCcsXG5cbiAgQUNUSU9OX0FUVFJJQlVURTogJ2RhdGEtbWRjLWRpYWxvZy1hY3Rpb24nLFxuXG4gIENMT1NFX0FDVElPTjogJ2Nsb3NlJyxcbiAgREVTVFJPWV9BQ1RJT046ICdkZXN0cm95Jyxcbn07XG5cbmNvbnN0IG51bWJlcnMgPSB7XG4gIERJQUxPR19BTklNQVRJT05fT1BFTl9USU1FX01TOiAxNTAsXG4gIERJQUxPR19BTklNQVRJT05fQ0xPU0VfVElNRV9NUzogNzUsXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ0RpYWxvZ0FkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5nc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBNRENEaWFsb2dGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gbnVtYmVycztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ0RpYWxvZ0FkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgaGFzQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBhZGRCb2R5Q2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVCb2R5Q2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBldmVudFRhcmdldE1hdGNoZXM6ICgvKiB0YXJnZXQ6ICFFdmVudFRhcmdldCwgc2VsZWN0b3I6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICB0cmFwRm9jdXM6ICgpID0+IHt9LFxuICAgICAgcmVsZWFzZUZvY3VzOiAoKSA9PiB7fSxcbiAgICAgIGlzQ29udGVudFNjcm9sbGFibGU6ICgpID0+IHt9LFxuICAgICAgYXJlQnV0dG9uc1N0YWNrZWQ6ICgpID0+IHt9LFxuICAgICAgZ2V0QWN0aW9uRnJvbUV2ZW50OiAoLyogZXZlbnQ6ICFFdmVudCAqLykgPT4ge30sXG4gICAgICBjbGlja0RlZmF1bHRCdXR0b246ICgpID0+IHt9LFxuICAgICAgcmV2ZXJzZUJ1dHRvbnM6ICgpID0+IHt9LFxuICAgICAgbm90aWZ5T3BlbmluZzogKCkgPT4ge30sXG4gICAgICBub3RpZnlPcGVuZWQ6ICgpID0+IHt9LFxuICAgICAgbm90aWZ5Q2xvc2luZzogKC8qIGFjdGlvbjogP3N0cmluZyAqLykgPT4ge30sXG4gICAgICBub3RpZnlDbG9zZWQ6ICgvKiBhY3Rpb246ID9zdHJpbmcgKi8pID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ0RpYWxvZ0FkYXB0ZXI9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENEaWFsb2dGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5pc09wZW5fID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge3N0cmluZ30gKi9cbiAgICB0aGlzLmVzY2FwZUtleUFjdGlvbl8gPSBzdHJpbmdzLkNMT1NFX0FDVElPTjtcblxuICAgIC8qKiBAcHJpdmF0ZSB7c3RyaW5nfSAqL1xuICAgIHRoaXMuc2NyaW1DbGlja0FjdGlvbl8gPSBzdHJpbmdzLkNMT1NFX0FDVElPTjtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmF1dG9TdGFja0J1dHRvbnNfID0gdHJ1ZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmFyZUJ1dHRvbnNTdGFja2VkXyA9IGZhbHNlO1xuICB9O1xuXG4gIGluaXQoKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5TVEFDS0VEKSkge1xuICAgICAgdGhpcy5zZXRBdXRvU3RhY2tCdXR0b25zKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5pc09wZW5fKSB7XG4gICAgICB0aGlzLmNsb3NlKHN0cmluZ3MuREVTVFJPWV9BQ1RJT04pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFuaW1hdGlvblRpbWVyXykge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0aW9uVGltZXJfKTtcbiAgICAgIHRoaXMuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLmlzT3Blbl8gPSB0cnVlO1xuICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5T3BlbmluZygpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOSU5HKTtcblxuICAgIC8vIFdhaXQgYSBmcmFtZSBvbmNlIGRpc3BsYXkgaXMgbm8gbG9uZ2VyIFwibm9uZVwiLCB0byBlc3RhYmxpc2ggYmFzaXMgZm9yIGFuaW1hdGlvblxuICAgIHRoaXMucnVuTmV4dEFuaW1hdGlvbkZyYW1lXygoKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuT1BFTik7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZEJvZHlDbGFzcyhjc3NDbGFzc2VzLlNDUk9MTF9MT0NLKTtcblxuICAgICAgdGhpcy5sYXlvdXQoKTtcblxuICAgICAgdGhpcy5hbmltYXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVBbmltYXRpb25UaW1lckVuZF8oKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy50cmFwRm9jdXMoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlPcGVuZWQoKTtcbiAgICAgIH0sIG51bWJlcnMuRElBTE9HX0FOSU1BVElPTl9PUEVOX1RJTUVfTVMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAqL1xuICBjbG9zZShhY3Rpb24gPSAnJykge1xuICAgIGlmICghdGhpcy5pc09wZW5fKSB7XG4gICAgICAvLyBBdm9pZCByZWR1bmRhbnQgY2xvc2UgY2FsbHMgKGFuZCBldmVudHMpLCBlLmcuIGZyb20ga2V5ZG93biBvbiBlbGVtZW50cyB0aGF0IGluaGVyZW50bHkgZW1pdCBjbGlja1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXNPcGVuXyA9IGZhbHNlO1xuICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5Q2xvc2luZyhhY3Rpb24pO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5DTE9TSU5HKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuT1BFTik7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVCb2R5Q2xhc3MoY3NzQ2xhc3Nlcy5TQ1JPTExfTE9DSyk7XG5cbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lXyk7XG4gICAgdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0aW9uVGltZXJfKTtcbiAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWxlYXNlRm9jdXMoKTtcbiAgICAgIHRoaXMuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfKCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUNsb3NlZChhY3Rpb24pO1xuICAgIH0sIG51bWJlcnMuRElBTE9HX0FOSU1BVElPTl9DTE9TRV9USU1FX01TKTtcbiAgfVxuXG4gIGlzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5pc09wZW5fO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge3N0cmluZ30gKi9cbiAgZ2V0RXNjYXBlS2V5QWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmVzY2FwZUtleUFjdGlvbl87XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiAqL1xuICBzZXRFc2NhcGVLZXlBY3Rpb24oYWN0aW9uKSB7XG4gICAgdGhpcy5lc2NhcGVLZXlBY3Rpb25fID0gYWN0aW9uO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge3N0cmluZ30gKi9cbiAgZ2V0U2NyaW1DbGlja0FjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zY3JpbUNsaWNrQWN0aW9uXztcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uICovXG4gIHNldFNjcmltQ2xpY2tBY3Rpb24oYWN0aW9uKSB7XG4gICAgdGhpcy5zY3JpbUNsaWNrQWN0aW9uXyA9IGFjdGlvbjtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXRBdXRvU3RhY2tCdXR0b25zKCkge1xuICAgIHJldHVybiB0aGlzLmF1dG9TdGFja0J1dHRvbnNfO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gYXV0b1N0YWNrICovXG4gIHNldEF1dG9TdGFja0J1dHRvbnMoYXV0b1N0YWNrKSB7XG4gICAgdGhpcy5hdXRvU3RhY2tCdXR0b25zXyA9IGF1dG9TdGFjaztcbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICB9XG4gICAgdGhpcy5sYXlvdXRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIGxheW91dEludGVybmFsXygpIHtcbiAgICBpZiAodGhpcy5hdXRvU3RhY2tCdXR0b25zXykge1xuICAgICAgdGhpcy5kZXRlY3RTdGFja2VkQnV0dG9uc18oKTtcbiAgICB9XG4gICAgdGhpcy5kZXRlY3RTY3JvbGxhYmxlQ29udGVudF8oKTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXRlY3RTdGFja2VkQnV0dG9uc18oKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBjbGFzcyBmaXJzdCB0byBsZXQgdXMgbWVhc3VyZSB0aGUgYnV0dG9ucycgbmF0dXJhbCBwb3NpdGlvbnMuXG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLlNUQUNLRUQpO1xuXG4gICAgY29uc3QgYXJlQnV0dG9uc1N0YWNrZWQgPSB0aGlzLmFkYXB0ZXJfLmFyZUJ1dHRvbnNTdGFja2VkKCk7XG5cbiAgICBpZiAoYXJlQnV0dG9uc1N0YWNrZWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5TVEFDS0VEKTtcbiAgICB9XG5cbiAgICBpZiAoYXJlQnV0dG9uc1N0YWNrZWQgIT09IHRoaXMuYXJlQnV0dG9uc1N0YWNrZWRfKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJldmVyc2VCdXR0b25zKCk7XG4gICAgICB0aGlzLmFyZUJ1dHRvbnNTdGFja2VkXyA9IGFyZUJ1dHRvbnNTdGFja2VkO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXRlY3RTY3JvbGxhYmxlQ29udGVudF8oKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBjbGFzcyBmaXJzdCB0byBsZXQgdXMgbWVhc3VyZSB0aGUgbmF0dXJhbCBoZWlnaHQgb2YgdGhlIGNvbnRlbnQuXG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLlNDUk9MTEFCTEUpO1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzQ29udGVudFNjcm9sbGFibGUoKSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLlNDUk9MTEFCTEUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoYW5kbGVJbnRlcmFjdGlvbihldnQpIHtcbiAgICBjb25zdCBpc0NsaWNrID0gZXZ0LnR5cGUgPT09ICdjbGljayc7XG4gICAgY29uc3QgaXNFbnRlciA9IGV2dC5rZXkgPT09ICdFbnRlcicgfHwgZXZ0LmtleUNvZGUgPT09IDEzO1xuXG4gICAgLy8gQ2hlY2sgZm9yIHNjcmltIGNsaWNrIGZpcnN0IHNpbmNlIGl0IGRvZXNuJ3QgcmVxdWlyZSBxdWVyeWluZyBhbmNlc3RvcnNcbiAgICBpZiAoaXNDbGljayAmJiB0aGlzLmFkYXB0ZXJfLmV2ZW50VGFyZ2V0TWF0Y2hlcyhldnQudGFyZ2V0LCBzdHJpbmdzLlNDUklNX1NFTEVDVE9SKSAmJlxuICAgICAgdGhpcy5zY3JpbUNsaWNrQWN0aW9uXyAhPT0gJycpIHtcbiAgICAgIHRoaXMuY2xvc2UodGhpcy5zY3JpbUNsaWNrQWN0aW9uXyk7XG4gICAgfSBlbHNlIGlmIChpc0NsaWNrIHx8IGV2dC5rZXkgPT09ICdTcGFjZScgfHwgZXZ0LmtleUNvZGUgPT09IDMyIHx8IGlzRW50ZXIpIHtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWRhcHRlcl8uZ2V0QWN0aW9uRnJvbUV2ZW50KGV2dCk7XG4gICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoYWN0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNFbnRlciAmJiAhdGhpcy5hZGFwdGVyXy5ldmVudFRhcmdldE1hdGNoZXMoZXZ0LnRhcmdldCwgc3RyaW5ncy5TVVBQUkVTU19ERUZBVUxUX1BSRVNTX1NFTEVDVE9SKSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmNsaWNrRGVmYXVsdEJ1dHRvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFLZXlib2FyZEV2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhbmRsZURvY3VtZW50S2V5ZG93bihldnQpIHtcbiAgICBpZiAoKGV2dC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2dC5rZXlDb2RlID09PSAyNykgJiYgdGhpcy5lc2NhcGVLZXlBY3Rpb25fICE9PSAnJykge1xuICAgICAgdGhpcy5jbG9zZSh0aGlzLmVzY2FwZUtleUFjdGlvbl8pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBoYW5kbGVBbmltYXRpb25UaW1lckVuZF8oKSB7XG4gICAgdGhpcy5hbmltYXRpb25UaW1lcl8gPSAwO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOSU5HKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuQ0xPU0lORyk7XG4gIH1cblxuICAvKipcbiAgICogUnVucyB0aGUgZ2l2ZW4gbG9naWMgb24gdGhlIG5leHQgYW5pbWF0aW9uIGZyYW1lLCB1c2luZyBzZXRUaW1lb3V0IHRvIGZhY3RvciBpbiBGaXJlZm94IHJlZmxvdyBiZWhhdmlvci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJ1bk5leHRBbmltYXRpb25GcmFtZV8oY2FsbGJhY2spIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lXyk7XG4gICAgdGhpcy5hbmltYXRpb25GcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0aW9uVGltZXJfKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDRGlhbG9nRm91bmRhdGlvbjtcbiIsInZhciBjYW5kaWRhdGVTZWxlY3RvcnMgPSBbXG4gICdpbnB1dCcsXG4gICdzZWxlY3QnLFxuICAndGV4dGFyZWEnLFxuICAnYVtocmVmXScsXG4gICdidXR0b24nLFxuICAnW3RhYmluZGV4XScsXG4gICdhdWRpb1tjb250cm9sc10nLFxuICAndmlkZW9bY29udHJvbHNdJyxcbiAgJ1tjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIl0pJyxcbl07XG52YXIgY2FuZGlkYXRlU2VsZWN0b3IgPSBjYW5kaWRhdGVTZWxlY3RvcnMuam9pbignLCcpO1xuXG52YXIgbWF0Y2hlcyA9IHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJ1xuICA/IGZ1bmN0aW9uICgpIHt9XG4gIDogRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cbmZ1bmN0aW9uIHRhYmJhYmxlKGVsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBlbGVtZW50RG9jdW1lbnQgPSBlbC5vd25lckRvY3VtZW50IHx8IGVsO1xuICB2YXIgcmVndWxhclRhYmJhYmxlcyA9IFtdO1xuICB2YXIgb3JkZXJlZFRhYmJhYmxlcyA9IFtdO1xuXG4gIHZhciB1bnRvdWNoYWJpbGl0eUNoZWNrZXIgPSBuZXcgVW50b3VjaGFiaWxpdHlDaGVja2VyKGVsZW1lbnREb2N1bWVudCk7XG4gIHZhciBjYW5kaWRhdGVzID0gZWwucXVlcnlTZWxlY3RvckFsbChjYW5kaWRhdGVTZWxlY3Rvcik7XG5cbiAgaWYgKG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lcikge1xuICAgIGlmIChtYXRjaGVzLmNhbGwoZWwsIGNhbmRpZGF0ZVNlbGVjdG9yKSkge1xuICAgICAgY2FuZGlkYXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShjYW5kaWRhdGVzKTtcbiAgICAgIGNhbmRpZGF0ZXMudW5zaGlmdChlbCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGksIGNhbmRpZGF0ZSwgY2FuZGlkYXRlVGFiaW5kZXg7XG4gIGZvciAoaSA9IDA7IGkgPCBjYW5kaWRhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2FuZGlkYXRlID0gY2FuZGlkYXRlc1tpXTtcblxuICAgIGlmICghaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKGNhbmRpZGF0ZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKSkgY29udGludWU7XG5cbiAgICBjYW5kaWRhdGVUYWJpbmRleCA9IGdldFRhYmluZGV4KGNhbmRpZGF0ZSk7XG4gICAgaWYgKGNhbmRpZGF0ZVRhYmluZGV4ID09PSAwKSB7XG4gICAgICByZWd1bGFyVGFiYmFibGVzLnB1c2goY2FuZGlkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXJlZFRhYmJhYmxlcy5wdXNoKHtcbiAgICAgICAgZG9jdW1lbnRPcmRlcjogaSxcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZVRhYmluZGV4LFxuICAgICAgICBub2RlOiBjYW5kaWRhdGUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YXIgdGFiYmFibGVOb2RlcyA9IG9yZGVyZWRUYWJiYWJsZXNcbiAgICAuc29ydChzb3J0T3JkZXJlZFRhYmJhYmxlcylcbiAgICAubWFwKGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGEubm9kZSB9KVxuICAgIC5jb25jYXQocmVndWxhclRhYmJhYmxlcyk7XG5cbiAgcmV0dXJuIHRhYmJhYmxlTm9kZXM7XG59XG5cbnRhYmJhYmxlLmlzVGFiYmFibGUgPSBpc1RhYmJhYmxlO1xudGFiYmFibGUuaXNGb2N1c2FibGUgPSBpc0ZvY3VzYWJsZTtcblxuZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcikge1xuICBpZiAoXG4gICAgIWlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKVxuICAgIHx8IGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKVxuICAgIHx8IGdldFRhYmluZGV4KG5vZGUpIDwgMFxuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzVGFiYmFibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKSB7XG4gIGlmICghbm9kZSkgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgY2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcik7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKSB7XG4gIHVudG91Y2hhYmlsaXR5Q2hlY2tlciA9IHVudG91Y2hhYmlsaXR5Q2hlY2tlciB8fCBuZXcgVW50b3VjaGFiaWxpdHlDaGVja2VyKG5vZGUub3duZXJEb2N1bWVudCB8fCBub2RlKTtcbiAgaWYgKFxuICAgIG5vZGUuZGlzYWJsZWRcbiAgICB8fCBpc0hpZGRlbklucHV0KG5vZGUpXG4gICAgfHwgdW50b3VjaGFiaWxpdHlDaGVja2VyLmlzVW50b3VjaGFibGUobm9kZSlcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG52YXIgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IgPSBjYW5kaWRhdGVTZWxlY3RvcnMuY29uY2F0KCdpZnJhbWUnKS5qb2luKCcsJyk7XG5mdW5jdGlvbiBpc0ZvY3VzYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpIHtcbiAgaWYgKCFub2RlKSB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcik7XG59XG5cbmZ1bmN0aW9uIGdldFRhYmluZGV4KG5vZGUpIHtcbiAgdmFyIHRhYmluZGV4QXR0ciA9IHBhcnNlSW50KG5vZGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpLCAxMCk7XG4gIGlmICghaXNOYU4odGFiaW5kZXhBdHRyKSkgcmV0dXJuIHRhYmluZGV4QXR0cjtcbiAgLy8gQnJvd3NlcnMgZG8gbm90IHJldHVybiBgdGFiSW5kZXhgIGNvcnJlY3RseSBmb3IgY29udGVudEVkaXRhYmxlIG5vZGVzO1xuICAvLyBzbyBpZiB0aGV5IGRvbid0IGhhdmUgYSB0YWJpbmRleCBhdHRyaWJ1dGUgc3BlY2lmaWNhbGx5IHNldCwgYXNzdW1lIGl0J3MgMC5cbiAgaWYgKGlzQ29udGVudEVkaXRhYmxlKG5vZGUpKSByZXR1cm4gMDtcbiAgcmV0dXJuIG5vZGUudGFiSW5kZXg7XG59XG5cbmZ1bmN0aW9uIHNvcnRPcmRlcmVkVGFiYmFibGVzKGEsIGIpIHtcbiAgcmV0dXJuIGEudGFiSW5kZXggPT09IGIudGFiSW5kZXggPyBhLmRvY3VtZW50T3JkZXIgLSBiLmRvY3VtZW50T3JkZXIgOiBhLnRhYkluZGV4IC0gYi50YWJJbmRleDtcbn1cblxuLy8gQXJyYXkucHJvdG90eXBlLmZpbmQgbm90IGF2YWlsYWJsZSBpbiBJRS5cbmZ1bmN0aW9uIGZpbmQobGlzdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShsaXN0W2ldKSkgcmV0dXJuIGxpc3RbaV07XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNDb250ZW50RWRpdGFibGUobm9kZSkge1xuICByZXR1cm4gbm9kZS5jb250ZW50RWRpdGFibGUgPT09ICd0cnVlJztcbn1cblxuZnVuY3Rpb24gaXNJbnB1dChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgPT09ICdJTlBVVCc7XG59XG5cbmZ1bmN0aW9uIGlzSGlkZGVuSW5wdXQobm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdoaWRkZW4nO1xufVxuXG5mdW5jdGlvbiBpc1JhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAncmFkaW8nO1xufVxuXG5mdW5jdGlvbiBpc05vblRhYmJhYmxlUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNSYWRpbyhub2RlKSAmJiAhaXNUYWJiYWJsZVJhZGlvKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBnZXRDaGVja2VkUmFkaW8obm9kZXMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub2Rlc1tpXS5jaGVja2VkKSB7XG4gICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIGlmICghbm9kZS5uYW1lKSByZXR1cm4gdHJ1ZTtcbiAgLy8gVGhpcyB3b24ndCBhY2NvdW50IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHlvdSBoYXZlIHJhZGlvIGdyb3VwcyB3aXRoIHRoZSBzYW1lXG4gIC8vIGluIHNlcGFyYXRlIGZvcm1zIG9uIHRoZSBzYW1lIHBhZ2UuXG4gIHZhciByYWRpb1NldCA9IG5vZGUub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIicgKyBub2RlLm5hbWUgKyAnXCJdJyk7XG4gIHZhciBjaGVja2VkID0gZ2V0Q2hlY2tlZFJhZGlvKHJhZGlvU2V0KTtcbiAgcmV0dXJuICFjaGVja2VkIHx8IGNoZWNrZWQgPT09IG5vZGU7XG59XG5cbi8vIEFuIGVsZW1lbnQgaXMgXCJ1bnRvdWNoYWJsZVwiIGlmICppdCBvciBvbmUgb2YgaXRzIGFuY2VzdG9ycyogaGFzXG4vLyBgdmlzaWJpbGl0eTogaGlkZGVuYCBvciBgZGlzcGxheTogbm9uZWAuXG5mdW5jdGlvbiBVbnRvdWNoYWJpbGl0eUNoZWNrZXIoZWxlbWVudERvY3VtZW50KSB7XG4gIHRoaXMuZG9jID0gZWxlbWVudERvY3VtZW50O1xuICAvLyBOb2RlIGNhY2hlIG11c3QgYmUgcmVmcmVzaGVkIG9uIGV2ZXJ5IGNoZWNrLCBpbiBjYXNlXG4gIC8vIHRoZSBjb250ZW50IG9mIHRoZSBlbGVtZW50IGhhcyBjaGFuZ2VkLiBUaGUgY2FjaGUgY29udGFpbnMgdHVwbGVzXG4gIC8vIG1hcHBpbmcgbm9kZXMgdG8gdGhlaXIgYm9vbGVhbiByZXN1bHQuXG4gIHRoaXMuY2FjaGUgPSBbXTtcbn1cblxuLy8gZ2V0Q29tcHV0ZWRTdHlsZSBhY2N1cmF0ZWx5IHJlZmxlY3RzIGB2aXNpYmlsaXR5OiBoaWRkZW5gIG9mIGFuY2VzdG9yc1xuLy8gYnV0IG5vdCBgZGlzcGxheTogbm9uZWAsIHNvIHdlIG5lZWQgdG8gcmVjdXJzaXZlbHkgY2hlY2sgcGFyZW50cy5cblVudG91Y2hhYmlsaXR5Q2hlY2tlci5wcm90b3R5cGUuaGFzRGlzcGxheU5vbmUgPSBmdW5jdGlvbiBoYXNEaXNwbGF5Tm9uZShub2RlLCBub2RlQ29tcHV0ZWRTdHlsZSkge1xuICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIFNlYXJjaCBmb3IgYSBjYWNoZWQgcmVzdWx0LlxuICAgIHZhciBjYWNoZWQgPSBmaW5kKHRoaXMuY2FjaGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtID09PSBub2RlO1xuICAgIH0pO1xuICAgIGlmIChjYWNoZWQpIHJldHVybiBjYWNoZWRbMV07XG5cbiAgICBub2RlQ29tcHV0ZWRTdHlsZSA9IG5vZGVDb21wdXRlZFN0eWxlIHx8IHRoaXMuZG9jLmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICBpZiAobm9kZUNvbXB1dGVkU3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmhhc0Rpc3BsYXlOb25lKG5vZGUucGFyZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jYWNoZS5wdXNoKFtub2RlLCByZXN1bHRdKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblVudG91Y2hhYmlsaXR5Q2hlY2tlci5wcm90b3R5cGUuaXNVbnRvdWNoYWJsZSA9IGZ1bmN0aW9uIGlzVW50b3VjaGFibGUobm9kZSkge1xuICBpZiAobm9kZSA9PT0gdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50KSByZXR1cm4gZmFsc2U7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gdGhpcy5kb2MuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgaWYgKHRoaXMuaGFzRGlzcGxheU5vbmUobm9kZSwgY29tcHV0ZWRTdHlsZSkpIHJldHVybiB0cnVlO1xuICByZXR1cm4gY29tcHV0ZWRTdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0YWJiYWJsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG4iLCJ2YXIgdGFiYmFibGUgPSByZXF1aXJlKCd0YWJiYWJsZScpO1xudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKTtcblxudmFyIGFjdGl2ZUZvY3VzVHJhcHMgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB0cmFwUXVldWUgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmF0ZVRyYXA6IGZ1bmN0aW9uKHRyYXApIHtcbiAgICAgIGlmICh0cmFwUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgYWN0aXZlVHJhcCA9IHRyYXBRdWV1ZVt0cmFwUXVldWUubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChhY3RpdmVUcmFwICE9PSB0cmFwKSB7XG4gICAgICAgICAgYWN0aXZlVHJhcC5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB0cmFwSW5kZXggPSB0cmFwUXVldWUuaW5kZXhPZih0cmFwKTtcbiAgICAgIGlmICh0cmFwSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRyYXBRdWV1ZS5wdXNoKHRyYXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbW92ZSB0aGlzIGV4aXN0aW5nIHRyYXAgdG8gdGhlIGZyb250IG9mIHRoZSBxdWV1ZVxuICAgICAgICB0cmFwUXVldWUuc3BsaWNlKHRyYXBJbmRleCwgMSk7XG4gICAgICAgIHRyYXBRdWV1ZS5wdXNoKHRyYXApO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBkZWFjdGl2YXRlVHJhcDogZnVuY3Rpb24odHJhcCkge1xuICAgICAgdmFyIHRyYXBJbmRleCA9IHRyYXBRdWV1ZS5pbmRleE9mKHRyYXApO1xuICAgICAgaWYgKHRyYXBJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdHJhcFF1ZXVlLnNwbGljZSh0cmFwSW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJhcFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdHJhcFF1ZXVlW3RyYXBRdWV1ZS5sZW5ndGggLSAxXS51bnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSkoKTtcblxuZnVuY3Rpb24gZm9jdXNUcmFwKGVsZW1lbnQsIHVzZXJPcHRpb25zKSB7XG4gIHZhciBkb2MgPSBkb2N1bWVudDtcbiAgdmFyIGNvbnRhaW5lciA9XG4gICAgdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gZG9jLnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIHZhciBjb25maWcgPSB4dGVuZChcbiAgICB7XG4gICAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogdHJ1ZSxcbiAgICAgIGVzY2FwZURlYWN0aXZhdGVzOiB0cnVlXG4gICAgfSxcbiAgICB1c2VyT3B0aW9uc1xuICApO1xuXG4gIHZhciBzdGF0ZSA9IHtcbiAgICBmaXJzdFRhYmJhYmxlTm9kZTogbnVsbCxcbiAgICBsYXN0VGFiYmFibGVOb2RlOiBudWxsLFxuICAgIG5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbjogbnVsbCxcbiAgICBtb3N0UmVjZW50bHlGb2N1c2VkTm9kZTogbnVsbCxcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIHBhdXNlZDogZmFsc2VcbiAgfTtcblxuICB2YXIgdHJhcCA9IHtcbiAgICBhY3RpdmF0ZTogYWN0aXZhdGUsXG4gICAgZGVhY3RpdmF0ZTogZGVhY3RpdmF0ZSxcbiAgICBwYXVzZTogcGF1c2UsXG4gICAgdW5wYXVzZTogdW5wYXVzZVxuICB9O1xuXG4gIHJldHVybiB0cmFwO1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKGFjdGl2YXRlT3B0aW9ucykge1xuICAgIGlmIChzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcblxuICAgIHN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICB2YXIgb25BY3RpdmF0ZSA9XG4gICAgICBhY3RpdmF0ZU9wdGlvbnMgJiYgYWN0aXZhdGVPcHRpb25zLm9uQWN0aXZhdGVcbiAgICAgICAgPyBhY3RpdmF0ZU9wdGlvbnMub25BY3RpdmF0ZVxuICAgICAgICA6IGNvbmZpZy5vbkFjdGl2YXRlO1xuICAgIGlmIChvbkFjdGl2YXRlKSB7XG4gICAgICBvbkFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiBkZWFjdGl2YXRlKGRlYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgIHN0YXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuXG4gICAgYWN0aXZlRm9jdXNUcmFwcy5kZWFjdGl2YXRlVHJhcCh0cmFwKTtcblxuICAgIHZhciBvbkRlYWN0aXZhdGUgPVxuICAgICAgZGVhY3RpdmF0ZU9wdGlvbnMgJiYgZGVhY3RpdmF0ZU9wdGlvbnMub25EZWFjdGl2YXRlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBkZWFjdGl2YXRlT3B0aW9ucy5vbkRlYWN0aXZhdGVcbiAgICAgICAgOiBjb25maWcub25EZWFjdGl2YXRlO1xuICAgIGlmIChvbkRlYWN0aXZhdGUpIHtcbiAgICAgIG9uRGVhY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIHZhciByZXR1cm5Gb2N1cyA9XG4gICAgICBkZWFjdGl2YXRlT3B0aW9ucyAmJiBkZWFjdGl2YXRlT3B0aW9ucy5yZXR1cm5Gb2N1cyAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZGVhY3RpdmF0ZU9wdGlvbnMucmV0dXJuRm9jdXNcbiAgICAgICAgOiBjb25maWcucmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU7XG4gICAgaWYgKHJldHVybkZvY3VzKSB7XG4gICAgICBkZWxheShmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5Rm9jdXMoc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgaWYgKHN0YXRlLnBhdXNlZCB8fCAhc3RhdGUuYWN0aXZlKSByZXR1cm47XG4gICAgc3RhdGUucGF1c2VkID0gdHJ1ZTtcbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVucGF1c2UoKSB7XG4gICAgaWYgKCFzdGF0ZS5wYXVzZWQgfHwgIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgIGFkZExpc3RlbmVycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICAvLyBUaGVyZSBjYW4gYmUgb25seSBvbmUgbGlzdGVuaW5nIGZvY3VzIHRyYXAgYXQgYSB0aW1lXG4gICAgYWN0aXZlRm9jdXNUcmFwcy5hY3RpdmF0ZVRyYXAodHJhcCk7XG5cbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG5cbiAgICAvLyBEZWxheSBlbnN1cmVzIHRoYXQgdGhlIGZvY3VzZWQgZWxlbWVudCBkb2Vzbid0IGNhcHR1cmUgdGhlIGV2ZW50XG4gICAgLy8gdGhhdCBjYXVzZWQgdGhlIGZvY3VzIHRyYXAgYWN0aXZhdGlvbi5cbiAgICBkZWxheShmdW5jdGlvbigpIHtcbiAgICAgIHRyeUZvY3VzKGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBjaGVja0ZvY3VzSW4sIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2ssIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXksIHRydWUpO1xuXG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgY2hlY2tGb2N1c0luLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB0cnVlKTtcblxuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Tm9kZUZvck9wdGlvbihvcHRpb25OYW1lKSB7XG4gICAgdmFyIG9wdGlvblZhbHVlID0gY29uZmlnW29wdGlvbk5hbWVdO1xuICAgIHZhciBub2RlID0gb3B0aW9uVmFsdWU7XG4gICAgaWYgKCFvcHRpb25WYWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBub2RlID0gZG9jLnF1ZXJ5U2VsZWN0b3Iob3B0aW9uVmFsdWUpO1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBvcHRpb25OYW1lICsgJ2AgcmVmZXJzIHRvIG5vIGtub3duIG5vZGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbm9kZSA9IG9wdGlvblZhbHVlKCk7XG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgJyArIG9wdGlvbk5hbWUgKyAnYCBkaWQgbm90IHJldHVybiBhIG5vZGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbml0aWFsRm9jdXNOb2RlKCkge1xuICAgIHZhciBub2RlO1xuICAgIGlmIChnZXROb2RlRm9yT3B0aW9uKCdpbml0aWFsRm9jdXMnKSAhPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IGdldE5vZGVGb3JPcHRpb24oJ2luaXRpYWxGb2N1cycpO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGRvYy5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgbm9kZSA9IGRvYy5hY3RpdmVFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlID0gc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUgfHwgZ2V0Tm9kZUZvck9wdGlvbignZmFsbGJhY2tGb2N1cycpO1xuICAgIH1cblxuICAgIGlmICghbm9kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIllvdSBjYW4ndCBoYXZlIGEgZm9jdXMtdHJhcCB3aXRob3V0IGF0IGxlYXN0IG9uZSBmb2N1c2FibGUgZWxlbWVudFwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgLy8gVGhpcyBuZWVkcyB0byBiZSBkb25lIG9uIG1vdXNlZG93biBhbmQgdG91Y2hzdGFydCBpbnN0ZWFkIG9mIGNsaWNrXG4gIC8vIHNvIHRoYXQgaXQgcHJlY2VkZXMgdGhlIGZvY3VzIGV2ZW50LlxuICBmdW5jdGlvbiBjaGVja1BvaW50ZXJEb3duKGUpIHtcbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkgcmV0dXJuO1xuICAgIGlmIChjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMpIHtcbiAgICAgIGRlYWN0aXZhdGUoe1xuICAgICAgICByZXR1cm5Gb2N1czogIXRhYmJhYmxlLmlzRm9jdXNhYmxlKGUudGFyZ2V0KVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICAvLyBJbiBjYXNlIGZvY3VzIGVzY2FwZXMgdGhlIHRyYXAgZm9yIHNvbWUgc3RyYW5nZSByZWFzb24sIHB1bGwgaXQgYmFjayBpbi5cbiAgZnVuY3Rpb24gY2hlY2tGb2N1c0luKGUpIHtcbiAgICAvLyBJbiBGaXJlZm94IHdoZW4geW91IFRhYiBvdXQgb2YgYW4gaWZyYW1lIHRoZSBEb2N1bWVudCBpcyBicmllZmx5IGZvY3VzZWQuXG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkgfHwgZS50YXJnZXQgaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHRyeUZvY3VzKHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlIHx8IGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0tleShlKSB7XG4gICAgaWYgKGNvbmZpZy5lc2NhcGVEZWFjdGl2YXRlcyAhPT0gZmFsc2UgJiYgaXNFc2NhcGVFdmVudChlKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZGVhY3RpdmF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNUYWJFdmVudChlKSkge1xuICAgICAgY2hlY2tUYWIoZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgLy8gSGlqYWNrIFRhYiBldmVudHMgb24gdGhlIGZpcnN0IGFuZCBsYXN0IGZvY3VzYWJsZSBub2RlcyBvZiB0aGUgdHJhcCxcbiAgLy8gaW4gb3JkZXIgdG8gcHJldmVudCBmb2N1cyBmcm9tIGVzY2FwaW5nLiBJZiBpdCBlc2NhcGVzIGZvciBldmVuIGFcbiAgLy8gbW9tZW50IGl0IGNhbiBlbmQgdXAgc2Nyb2xsaW5nIHRoZSBwYWdlIGFuZCBjYXVzaW5nIGNvbmZ1c2lvbiBzbyB3ZVxuICAvLyBraW5kIG9mIG5lZWQgdG8gY2FwdHVyZSB0aGUgYWN0aW9uIGF0IHRoZSBrZXlkb3duIHBoYXNlLlxuICBmdW5jdGlvbiBjaGVja1RhYihlKSB7XG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgIGlmIChlLnNoaWZ0S2V5ICYmIGUudGFyZ2V0ID09PSBzdGF0ZS5maXJzdFRhYmJhYmxlTm9kZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdHJ5Rm9jdXMoc3RhdGUubGFzdFRhYmJhYmxlTm9kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghZS5zaGlmdEtleSAmJiBlLnRhcmdldCA9PT0gc3RhdGUubGFzdFRhYmJhYmxlTm9kZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdHJ5Rm9jdXMoc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQ2xpY2soZSkge1xuICAgIGlmIChjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMpIHJldHVybjtcbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkgcmV0dXJuO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVGFiYmFibGVOb2RlcygpIHtcbiAgICB2YXIgdGFiYmFibGVOb2RlcyA9IHRhYmJhYmxlKGNvbnRhaW5lcik7XG4gICAgc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUgPSB0YWJiYWJsZU5vZGVzWzBdIHx8IGdldEluaXRpYWxGb2N1c05vZGUoKTtcbiAgICBzdGF0ZS5sYXN0VGFiYmFibGVOb2RlID1cbiAgICAgIHRhYmJhYmxlTm9kZXNbdGFiYmFibGVOb2Rlcy5sZW5ndGggLSAxXSB8fCBnZXRJbml0aWFsRm9jdXNOb2RlKCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cnlGb2N1cyhub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IGRvYy5hY3RpdmVFbGVtZW50KSByZXR1cm47XG4gICAgaWYgKCFub2RlIHx8ICFub2RlLmZvY3VzKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5vZGUuZm9jdXMoKTtcbiAgICBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSA9IG5vZGU7XG4gICAgaWYgKGlzU2VsZWN0YWJsZUlucHV0KG5vZGUpKSB7XG4gICAgICBub2RlLnNlbGVjdCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc1NlbGVjdGFibGVJbnB1dChub2RlKSB7XG4gIHJldHVybiAoXG4gICAgbm9kZS50YWdOYW1lICYmXG4gICAgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcgJiZcbiAgICB0eXBlb2Ygbm9kZS5zZWxlY3QgPT09ICdmdW5jdGlvbidcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNFc2NhcGVFdmVudChlKSB7XG4gIHJldHVybiBlLmtleSA9PT0gJ0VzY2FwZScgfHwgZS5rZXkgPT09ICdFc2MnIHx8IGUua2V5Q29kZSA9PT0gMjc7XG59XG5cbmZ1bmN0aW9uIGlzVGFiRXZlbnQoZSkge1xuICByZXR1cm4gZS5rZXkgPT09ICdUYWInIHx8IGUua2V5Q29kZSA9PT0gOTtcbn1cblxuZnVuY3Rpb24gZGVsYXkoZm4pIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvY3VzVHJhcDtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlRm9jdXNUcmFwIGZyb20gJ2ZvY3VzLXRyYXAnO1xuXG4vKipcbiAqIEBwYXJhbSB7IUVsZW1lbnR9IHN1cmZhY2VFbFxuICogQHBhcmFtIHs/RWxlbWVudD19IGluaXRpYWxGb2N1c0VsXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCFFbGVtZW50LCAhRm9jdXNUcmFwQ3JlYXRlT3B0aW9ucyk6ICFGb2N1c1RyYXBJbnN0YW5jZX0gZm9jdXNUcmFwRmFjdG9yeVxuICogQHJldHVybiB7IUZvY3VzVHJhcEluc3RhbmNlfVxuICovXG5mdW5jdGlvbiBjcmVhdGVGb2N1c1RyYXBJbnN0YW5jZShzdXJmYWNlRWwsIGZvY3VzVHJhcEZhY3RvcnkgPSBjcmVhdGVGb2N1c1RyYXAsIGluaXRpYWxGb2N1c0VsID0gbnVsbCkge1xuICByZXR1cm4gZm9jdXNUcmFwRmFjdG9yeShzdXJmYWNlRWwsIHtcbiAgICBpbml0aWFsRm9jdXM6IGluaXRpYWxGb2N1c0VsLFxuICAgIGVzY2FwZURlYWN0aXZhdGVzOiBmYWxzZSwgLy8gRGlhbG9nIGZvdW5kYXRpb24gaGFuZGxlcyBlc2NhcGUga2V5XG4gICAgY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXM6IHRydWUsIC8vIEFsbG93IGhhbmRsaW5nIG9mIHNjcmltIGNsaWNrc1xuICB9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFFbGVtZW50fSBlbFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNTY3JvbGxhYmxlKGVsKSB7XG4gIHJldHVybiBlbC5zY3JvbGxIZWlnaHQgPiBlbC5vZmZzZXRIZWlnaHQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHshQXJyYXk8IUVsZW1lbnQ+fCFOb2RlTGlzdH0gZWxzXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBhcmVUb3BzTWlzYWxpZ25lZChlbHMpIHtcbiAgY29uc3QgdG9wcyA9IG5ldyBTZXQoKTtcbiAgW10uZm9yRWFjaC5jYWxsKGVscywgKGVsKSA9PiB0b3BzLmFkZChlbC5vZmZzZXRUb3ApKTtcbiAgcmV0dXJuIHRvcHMuc2l6ZSA+IDE7XG59XG5cbmV4cG9ydCB7Y3JlYXRlRm9jdXNUcmFwSW5zdGFuY2UsIGlzU2Nyb2xsYWJsZSwgYXJlVG9wc01pc2FsaWduZWR9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbi8qKlxuICogQHRlbXBsYXRlIEZcbiAqL1xuY2xhc3MgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ0NvbXBvbmVudH1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgLy8gU3ViY2xhc3NlcyB3aGljaCBleHRlbmQgTURDQmFzZSBzaG91bGQgcHJvdmlkZSBhbiBhdHRhY2hUbygpIG1ldGhvZCB0aGF0IHRha2VzIGEgcm9vdCBlbGVtZW50IGFuZFxuICAgIC8vIHJldHVybnMgYW4gaW5zdGFudGlhdGVkIGNvbXBvbmVudCB3aXRoIGl0cyByb290IHNldCB0byB0aGF0IGVsZW1lbnQuIEFsc28gbm90ZSB0aGF0IGluIHRoZSBjYXNlcyBvZlxuICAgIC8vIHN1YmNsYXNzZXMsIGFuIGV4cGxpY2l0IGZvdW5kYXRpb24gY2xhc3Mgd2lsbCBub3QgaGF2ZSB0byBiZSBwYXNzZWQgaW47IGl0IHdpbGwgc2ltcGx5IGJlIGluaXRpYWxpemVkXG4gICAgLy8gZnJvbSBnZXREZWZhdWx0Rm91bmRhdGlvbigpLlxuICAgIHJldHVybiBuZXcgTURDQ29tcG9uZW50KHJvb3QsIG5ldyBNRENGb3VuZGF0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHtGPX0gZm91bmRhdGlvblxuICAgKiBAcGFyYW0gey4uLj99IGFyZ3NcbiAgICovXG4gIGNvbnN0cnVjdG9yKHJvb3QsIGZvdW5kYXRpb24gPSB1bmRlZmluZWQsIC4uLmFyZ3MpIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG4gICAgdGhpcy5yb290XyA9IHJvb3Q7XG4gICAgdGhpcy5pbml0aWFsaXplKC4uLmFyZ3MpO1xuICAgIC8vIE5vdGUgdGhhdCB3ZSBpbml0aWFsaXplIGZvdW5kYXRpb24gaGVyZSBhbmQgbm90IHdpdGhpbiB0aGUgY29uc3RydWN0b3IncyBkZWZhdWx0IHBhcmFtIHNvIHRoYXRcbiAgICAvLyB0aGlzLnJvb3RfIGlzIGRlZmluZWQgYW5kIGNhbiBiZSB1c2VkIHdpdGhpbiB0aGUgZm91bmRhdGlvbiBjbGFzcy5cbiAgICAvKiogQHByb3RlY3RlZCB7IUZ9ICovXG4gICAgdGhpcy5mb3VuZGF0aW9uXyA9IGZvdW5kYXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSA6IGZvdW5kYXRpb247XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5pbml0KCk7XG4gICAgdGhpcy5pbml0aWFsU3luY1dpdGhET00oKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoLyogLi4uYXJncyAqLykge1xuICAgIC8vIFN1YmNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoaXMgdG8gZG8gYW55IGFkZGl0aW9uYWwgc2V0dXAgd29yayB0aGF0IHdvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiBhXG4gICAgLy8gXCJjb25zdHJ1Y3RvclwiLiBFc3NlbnRpYWxseSwgaXQgaXMgYSBob29rIGludG8gdGhlIHBhcmVudCBjb25zdHJ1Y3RvciBiZWZvcmUgdGhlIGZvdW5kYXRpb24gaXNcbiAgICAvLyBpbml0aWFsaXplZC4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIGJlc2lkZXMgcm9vdCBhbmQgZm91bmRhdGlvbiB3aWxsIGJlIHBhc3NlZCBpbiBoZXJlLlxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFGfSBmb3VuZGF0aW9uXG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCBmb3VuZGF0aW9uIGNsYXNzIGZvciB0aGVcbiAgICAvLyBjb21wb25lbnQuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgZ2V0RGVmYXVsdEZvdW5kYXRpb24gdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCAnICtcbiAgICAgICdmb3VuZGF0aW9uIGNsYXNzJyk7XG4gIH1cblxuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgdGhleSBuZWVkIHRvIHBlcmZvcm0gd29yayB0byBzeW5jaHJvbml6ZSB3aXRoIGEgaG9zdCBET01cbiAgICAvLyBvYmplY3QuIEFuIGV4YW1wbGUgb2YgdGhpcyB3b3VsZCBiZSBhIGZvcm0gY29udHJvbCB3cmFwcGVyIHRoYXQgbmVlZHMgdG8gc3luY2hyb25pemUgaXRzIGludGVybmFsIHN0YXRlXG4gICAgLy8gdG8gc29tZSBwcm9wZXJ0eSBvciBhdHRyaWJ1dGUgb2YgdGhlIGhvc3QgRE9NLiBQbGVhc2Ugbm90ZTogdGhpcyBpcyAqbm90KiB0aGUgcGxhY2UgdG8gcGVyZm9ybSBET01cbiAgICAvLyByZWFkcy93cml0ZXMgdGhhdCB3b3VsZCBjYXVzZSBsYXlvdXQgLyBwYWludCwgYXMgdGhpcyBpcyBjYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIHdpdGhpbiB0aGUgY29uc3RydWN0b3IuXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgbWF5IGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZWxlYXNlIGFueSByZXNvdXJjZXMgLyBkZXJlZ2lzdGVyIGFueSBsaXN0ZW5lcnMgdGhleSBoYXZlXG4gICAgLy8gYXR0YWNoZWQuIEFuIGV4YW1wbGUgb2YgdGhpcyBtaWdodCBiZSBkZXJlZ2lzdGVyaW5nIGEgcmVzaXplIGV2ZW50IGZyb20gdGhlIHdpbmRvdyBvYmplY3QuXG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiBsaXN0ZW5pbmcgZm9yIGN1c3RvbSBldmVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBsaXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIG1ldGhvZCB0byByZW1vdmUgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudC4gVGhpcyBpcyBtb3N0IHVzZWZ1bCB3aGVuXG4gICAqIHVubGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgdW5saXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBhIGNyb3NzLWJyb3dzZXItY29tcGF0aWJsZSBjdXN0b20gZXZlbnQgZnJvbSB0aGUgY29tcG9uZW50IHJvb3Qgb2YgdGhlIGdpdmVuIHR5cGUsXG4gICAqIHdpdGggdGhlIGdpdmVuIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IU9iamVjdH0gZXZ0RGF0YVxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBzaG91bGRCdWJibGVcbiAgICovXG4gIGVtaXQoZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgICBsZXQgZXZ0O1xuICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvb3RfLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENDb21wb25lbnQ7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFJpcHBsZS4gUHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBtYW5hZ2luZ1xuICogLSBjbGFzc2VzXG4gKiAtIGRvbVxuICogLSBDU1MgdmFyaWFibGVzXG4gKiAtIHBvc2l0aW9uXG4gKiAtIGRpbWVuc2lvbnNcbiAqIC0gc2Nyb2xsIHBvc2l0aW9uXG4gKiAtIGV2ZW50IGhhbmRsZXJzXG4gKiAtIHVuYm91bmRlZCwgYWN0aXZlIGFuZCBkaXNhYmxlZCBzdGF0ZXNcbiAqXG4gKiBBZGRpdGlvbmFsbHksIHByb3ZpZGVzIHR5cGUgaW5mb3JtYXRpb24gZm9yIHRoZSBhZGFwdGVyIHRvIHRoZSBDbG9zdXJlXG4gKiBjb21waWxlci5cbiAqXG4gKiBJbXBsZW1lbnQgdGhpcyBhZGFwdGVyIGZvciB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UgdG8gZGVsZWdhdGUgdXBkYXRlcyB0b1xuICogdGhlIGNvbXBvbmVudCBpbiB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UuIFNlZSBhcmNoaXRlY3R1cmUgZG9jdW1lbnRhdGlvblxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvY29kZS9hcmNoaXRlY3R1cmUubWRcbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1JpcHBsZUFkYXB0ZXIge1xuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzVW5ib3VuZGVkKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNTdXJmYWNlQWN0aXZlKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNTdXJmYWNlRGlzYWJsZWQoKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7IUV2ZW50VGFyZ2V0fSB0YXJnZXQgKi9cbiAgY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlclJlc2l6ZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YXJOYW1lXG4gICAqIEBwYXJhbSB7P251bWJlcnxzdHJpbmd9IHZhbHVlXG4gICAqL1xuICB1cGRhdGVDc3NWYXJpYWJsZSh2YXJOYW1lLCB2YWx1ZSkge31cblxuICAvKiogQHJldHVybiB7IUNsaWVudFJlY3R9ICovXG4gIGNvbXB1dGVCb3VuZGluZ1JlY3QoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSAqL1xuICBnZXRXaW5kb3dQYWdlT2Zmc2V0KCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICAvLyBSaXBwbGUgaXMgYSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIFwicm9vdFwiIGNvbXBvbmVudCBpcyByZWFsbHkgYSBcIm1peGluXCIgb2Ygc29ydHMsXG4gIC8vIGdpdmVuIHRoYXQgaXQncyBhbiAndXBncmFkZScgdG8gYW4gZXhpc3RpbmcgY29tcG9uZW50LiBUaGF0IGJlaW5nIHNhaWQgaXQgaXMgdGhlIHJvb3RcbiAgLy8gQ1NTIGNsYXNzIHRoYXQgYWxsIG90aGVyIENTUyBjbGFzc2VzIGRlcml2ZSBmcm9tLlxuICBST09UOiAnbWRjLXJpcHBsZS11cGdyYWRlZCcsXG4gIFVOQk9VTkRFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZCcsXG4gIEJHX0ZPQ1VTRUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQnLFxuICBGR19BQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uJyxcbiAgRkdfREVBQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1kZWFjdGl2YXRpb24nLFxufTtcblxuY29uc3Qgc3RyaW5ncyA9IHtcbiAgVkFSX0xFRlQ6ICctLW1kYy1yaXBwbGUtbGVmdCcsXG4gIFZBUl9UT1A6ICctLW1kYy1yaXBwbGUtdG9wJyxcbiAgVkFSX0ZHX1NJWkU6ICctLW1kYy1yaXBwbGUtZmctc2l6ZScsXG4gIFZBUl9GR19TQ0FMRTogJy0tbWRjLXJpcHBsZS1mZy1zY2FsZScsXG4gIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0JyxcbiAgVkFSX0ZHX1RSQU5TTEFURV9FTkQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCcsXG59O1xuXG5jb25zdCBudW1iZXJzID0ge1xuICBQQURESU5HOiAxMCxcbiAgSU5JVElBTF9PUklHSU5fU0NBTEU6IDAuNixcbiAgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM6IDIyNSwgLy8gQ29ycmVzcG9uZHMgdG8gJG1kYy1yaXBwbGUtdHJhbnNsYXRlLWR1cmF0aW9uIChpLmUuIGFjdGl2YXRpb24gYW5pbWF0aW9uIGR1cmF0aW9uKVxuICBGR19ERUFDVElWQVRJT05fTVM6IDE1MCwgLy8gQ29ycmVzcG9uZHMgdG8gJG1kYy1yaXBwbGUtZmFkZS1vdXQtZHVyYXRpb24gKGkuZS4gZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgVEFQX0RFTEFZX01TOiAzMDAsIC8vIERlbGF5IGJldHdlZW4gdG91Y2ggYW5kIHNpbXVsYXRlZCBtb3VzZSBldmVudHMgb24gdG91Y2ggZGV2aWNlc1xufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3QgQ1NTIGN1c3RvbSB2YXJpYWJsZSBzdXBwb3J0LlxuICogQHByaXZhdGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5sZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBhcHBseVBhc3NpdmUgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzUGFzc2l2ZV87XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKSB7XG4gIC8vIERldGVjdCB2ZXJzaW9ucyBvZiBFZGdlIHdpdGggYnVnZ3kgdmFyKCkgc3VwcG9ydFxuICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzExNDk1NDQ4L1xuICBjb25zdCBkb2N1bWVudCA9IHdpbmRvd09iai5kb2N1bWVudDtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub2RlLmNsYXNzTmFtZSA9ICdtZGMtcmlwcGxlLXN1cmZhY2UtLXRlc3QtZWRnZS12YXItYnVnJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcblxuICAvLyBUaGUgYnVnIGV4aXN0cyBpZiA6OmJlZm9yZSBzdHlsZSBlbmRzIHVwIHByb3BhZ2F0aW5nIHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgLy8gQWRkaXRpb25hbGx5LCBnZXRDb21wdXRlZFN0eWxlIHJldHVybnMgbnVsbCBpbiBpZnJhbWVzIHdpdGggZGlzcGxheTogXCJub25lXCIgaW4gRmlyZWZveCxcbiAgLy8gYnV0IEZpcmVmb3ggaXMga25vd24gdG8gc3VwcG9ydCBDU1MgY3VzdG9tIHByb3BlcnRpZXMgY29ycmVjdGx5LlxuICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93T2JqLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIGNvbnN0IGhhc1BzZXVkb1ZhckJ1ZyA9IGNvbXB1dGVkU3R5bGUgIT09IG51bGwgJiYgY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BTdHlsZSA9PT0gJ3NvbGlkJztcbiAgbm9kZS5yZW1vdmUoKTtcbiAgcmV0dXJuIGhhc1BzZXVkb1ZhckJ1Zztcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFXaW5kb3d9IHdpbmRvd09ialxuICogQHBhcmFtIHtib29sZWFuPX0gZm9yY2VSZWZyZXNoXG4gKiBAcmV0dXJuIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3dPYmosIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGxldCBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgaWYgKHR5cGVvZiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPT09ICdib29sZWFuJyAmJiAhZm9yY2VSZWZyZXNoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xuICB9XG5cbiAgY29uc3Qgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSB3aW5kb3dPYmouQ1NTICYmIHR5cGVvZiB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzID09PSAnZnVuY3Rpb24nO1xuICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyA9IHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NDY2OVxuICAvLyBTZWU6IFJFQURNRSBzZWN0aW9uIG9uIFNhZmFyaVxuICBjb25zdCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMgPSAoXG4gICAgd2luZG93T2JqLkNTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpXG4gICk7XG5cbiAgaWYgKGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgfHwgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzKSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSAhZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopO1xuICB9IGVsc2Uge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gZmFsc2U7XG4gIH1cblxuICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xuICB9XG4gIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbn1cblxuLy9cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycywgYW5kIGlmIHNvLCB1c2UgdGhlbS5cbiAqIEBwYXJhbSB7IVdpbmRvdz19IGdsb2JhbE9ialxuICogQHBhcmFtIHtib29sZWFuPX0gZm9yY2VSZWZyZXNoXG4gKiBAcmV0dXJuIHtib29sZWFufCFFdmVudExpc3RlbmVyT3B0aW9uc31cbiAqL1xuZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiA9IHdpbmRvdywgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgaWYgKHN1cHBvcnRzUGFzc2l2ZV8gPT09IHVuZGVmaW5lZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgZ2xvYmFsT2JqLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCB7Z2V0IHBhc3NpdmUoKSB7XG4gICAgICAgIGlzU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkO1xuICAgICAgfX0pO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuXG4gICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkO1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZV9cbiAgICA/IC8qKiBAdHlwZSB7IUV2ZW50TGlzdGVuZXJPcHRpb25zfSAqLyAoe3Bhc3NpdmU6IHRydWV9KVxuICAgIDogZmFsc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHshT2JqZWN0fSBIVE1MRWxlbWVudFByb3RvdHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgLyoqXG4gICAqIE9yZGVyIGlzIGltcG9ydGFudCBiZWNhdXNlIHdlIHJldHVybiB0aGUgZmlyc3QgZXhpc3RpbmcgbWV0aG9kIHdlIGZpbmQuXG4gICAqIERvIG5vdCBjaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBpdGVtcyBpbiB0aGUgYmVsb3cgYXJyYXkuXG4gICAqL1xuICBjb25zdCBtYXRjaGVzTWV0aG9kcyA9IFsnbWF0Y2hlcycsICd3ZWJraXRNYXRjaGVzU2VsZWN0b3InLCAnbXNNYXRjaGVzU2VsZWN0b3InXTtcbiAgbGV0IG1ldGhvZCA9ICdtYXRjaGVzJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaGVzTWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1hdGNoZXNNZXRob2QgPSBtYXRjaGVzTWV0aG9kc1tpXTtcbiAgICBpZiAobWF0Y2hlc01ldGhvZCBpbiBIVE1MRWxlbWVudFByb3RvdHlwZSkge1xuICAgICAgbWV0aG9kID0gbWF0Y2hlc01ldGhvZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXRob2Q7XG59XG5cbi8qKlxuICogQHBhcmFtIHshRXZlbnR9IGV2XG4gKiBAcGFyYW0ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19IHBhZ2VPZmZzZXRcbiAqIEBwYXJhbSB7IUNsaWVudFJlY3R9IGNsaWVudFJlY3RcbiAqIEByZXR1cm4ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19XG4gKi9cbmZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhldiwgcGFnZU9mZnNldCwgY2xpZW50UmVjdCkge1xuICBjb25zdCB7eCwgeX0gPSBwYWdlT2Zmc2V0O1xuICBjb25zdCBkb2N1bWVudFggPSB4ICsgY2xpZW50UmVjdC5sZWZ0O1xuICBjb25zdCBkb2N1bWVudFkgPSB5ICsgY2xpZW50UmVjdC50b3A7XG5cbiAgbGV0IG5vcm1hbGl6ZWRYO1xuICBsZXQgbm9ybWFsaXplZFk7XG4gIC8vIERldGVybWluZSB0b3VjaCBwb2ludCByZWxhdGl2ZSB0byB0aGUgcmlwcGxlIGNvbnRhaW5lci5cbiAgaWYgKGV2LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgIGV2ID0gLyoqIEB0eXBlIHshVG91Y2hFdmVudH0gKi8gKGV2KTtcbiAgICBub3JtYWxpemVkWCA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSBkb2N1bWVudFk7XG4gIH0gZWxzZSB7XG4gICAgZXYgPSAvKiogQHR5cGUgeyFNb3VzZUV2ZW50fSAqLyAoZXYpO1xuICAgIG5vcm1hbGl6ZWRYID0gZXYucGFnZVggLSBkb2N1bWVudFg7XG4gICAgbm9ybWFsaXplZFkgPSBldi5wYWdlWSAtIGRvY3VtZW50WTtcbiAgfVxuXG4gIHJldHVybiB7eDogbm9ybWFsaXplZFgsIHk6IG5vcm1hbGl6ZWRZfTtcbn1cblxuZXhwb3J0IHtzdXBwb3J0c0Nzc1ZhcmlhYmxlcywgYXBwbHlQYXNzaXZlLCBnZXRNYXRjaGVzUHJvcGVydHksIGdldE5vcm1hbGl6ZWRFdmVudENvb3Jkc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDUmlwcGxlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge2dldE5vcm1hbGl6ZWRFdmVudENvb3Jkc30gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBpc0FjdGl2YXRlZDogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGFjdGl2YXRpb25FdmVudDogKCFFdmVudHx1bmRlZmluZWQpLFxuICogICBpc1Byb2dyYW1tYXRpYzogKGJvb2xlYW58dW5kZWZpbmVkKVxuICogfX1cbiAqL1xubGV0IEFjdGl2YXRpb25TdGF0ZVR5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZGVhY3RpdmF0ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBmb2N1czogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBibHVyOiAoc3RyaW5nfHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBMaXN0ZW5lckluZm9UeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiBmdW5jdGlvbighRXZlbnQpLFxuICogICBkZWFjdGl2YXRlOiBmdW5jdGlvbighRXZlbnQ9KSxcbiAqICAgZm9jdXM6IGZ1bmN0aW9uKCksXG4gKiAgIGJsdXI6IGZ1bmN0aW9uKClcbiAqIH19XG4gKi9cbmxldCBMaXN0ZW5lcnNUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIHg6IG51bWJlcixcbiAqICAgeTogbnVtYmVyXG4gKiB9fVxuICovXG5sZXQgUG9pbnRUeXBlO1xuXG4vLyBBY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIHRoZSByb290IGVsZW1lbnQgb2YgZWFjaCBpbnN0YW5jZSBmb3IgYWN0aXZhdGlvblxuY29uc3QgQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hzdGFydCcsICdwb2ludGVyZG93bicsICdtb3VzZWRvd24nLCAna2V5ZG93biddO1xuXG4vLyBEZWFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gZG9jdW1lbnRFbGVtZW50IHdoZW4gYSBwb2ludGVyLXJlbGF0ZWQgZG93biBldmVudCBvY2N1cnNcbmNvbnN0IFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gWyd0b3VjaGVuZCcsICdwb2ludGVydXAnLCAnbW91c2V1cCcsICdjb250ZXh0bWVudSddO1xuXG4vLyBUcmFja3MgYWN0aXZhdGlvbnMgdGhhdCBoYXZlIG9jY3VycmVkIG9uIHRoZSBjdXJyZW50IGZyYW1lLCB0byBhdm9pZCBzaW11bHRhbmVvdXMgbmVzdGVkIGFjdGl2YXRpb25zXG4vKiogQHR5cGUgeyFBcnJheTwhRXZlbnRUYXJnZXQ+fSAqL1xubGV0IGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDUmlwcGxlQWRhcHRlcj59XG4gKi9cbmNsYXNzIE1EQ1JpcHBsZUZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4gLyogYm9vbGVhbiAtIGNhY2hlZCAqLyB7fSxcbiAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBhZGRDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgY29udGFpbnNFdmVudFRhcmdldDogKC8qIHRhcmdldDogIUV2ZW50VGFyZ2V0ICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICgvKiB2YXJOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gLyogQ2xpZW50UmVjdCAqLyB7fSxcbiAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IC8qIHt4OiBudW1iZXIsIHk6IG51bWJlcn0gKi8ge30sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1JpcHBsZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUNsaWVudFJlY3R9ICovXG4gICAgdGhpcy5mcmFtZV8gPSAvKiogQHR5cGUgeyFDbGllbnRSZWN0fSAqLyAoe3dpZHRoOiAwLCBoZWlnaHQ6IDB9KTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5pbml0aWFsU2l6ZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50KX0gKi9cbiAgICB0aGlzLmFjdGl2YXRlSGFuZGxlcl8gPSAoZSkgPT4gdGhpcy5hY3RpdmF0ZV8oZSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudD0pfSAqL1xuICAgIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfID0gKCkgPT4gdGhpcy5kZWFjdGl2YXRlXygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmZvY3VzSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmhhbmRsZUZvY3VzKCk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudD0pfSAqL1xuICAgIHRoaXMuYmx1ckhhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVCbHVyKCk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXJfID0gKCkgPT4gdGhpcy5sYXlvdXQoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7e2xlZnQ6IG51bWJlciwgdG9wOm51bWJlcn19ICovXG4gICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICB9O1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5mZ1NjYWxlXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18gPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSB0cnVlO1xuICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICB9O1xuXG4gICAgLyoqIEBwcml2YXRlIHshRXZlbnR8dW5kZWZpbmVkfSAqL1xuICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICB9XG5cbiAgLyoqXG4gICAqIFdlIGNvbXB1dGUgdGhpcyBwcm9wZXJ0eSBzbyB0aGF0IHdlIGFyZSBub3QgcXVlcnlpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNsaWVudFxuICAgKiB1bnRpbCB0aGUgcG9pbnQgaW4gdGltZSB3aGVyZSB0aGUgZm91bmRhdGlvbiByZXF1ZXN0cyBpdC4gVGhpcyBwcmV2ZW50cyBzY2VuYXJpb3Mgd2hlcmVcbiAgICogY2xpZW50LXNpZGUgZmVhdHVyZS1kZXRlY3Rpb24gbWF5IGhhcHBlbiB0b28gZWFybHksIHN1Y2ggYXMgd2hlbiBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyXG4gICAqIGFuZCB0aGVuIGluaXRpYWxpemVkIGF0IG1vdW50IHRpbWUgb24gdGhlIGNsaWVudC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN1cHBvcnRzUHJlc3NSaXBwbGVfKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshQWN0aXZhdGlvblN0YXRlVHlwZX1cbiAgICovXG4gIGRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2YXRlZDogZmFsc2UsXG4gICAgICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogZmFsc2UsXG4gICAgICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IGZhbHNlLFxuICAgICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IGZhbHNlLFxuICAgICAgYWN0aXZhdGlvbkV2ZW50OiB1bmRlZmluZWQsXG4gICAgICBpc1Byb2dyYW1tYXRpYzogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBzdXBwb3J0c1ByZXNzUmlwcGxlID0gdGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpO1xuXG4gICAgdGhpcy5yZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSk7XG5cbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgY29uc3Qge1JPT1QsIFVOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFJPT1QpO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGVzIG5lZWQgbGF5b3V0IGxvZ2ljIGFwcGxpZWQgaW1tZWRpYXRlbHkgdG8gc2V0IGNvb3JkaW5hdGVzIGZvciBib3RoIHNoYWRlIGFuZCByaXBwbGVcbiAgICAgICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZhdGlvblRpbWVyXykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhST09UKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB0aGlzLnJlbW92ZUNzc1ZhcnNfKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCk7XG4gICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSBzdXBwb3J0c1ByZXNzUmlwcGxlIFBhc3NlZCBmcm9tIGluaXQgdG8gc2F2ZSBhIHJlZHVuZGFudCBmdW5jdGlvbiBjYWxsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhlKSB7XG4gICAgaWYgKGUudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCkge1xuICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICByZW1vdmVDc3NWYXJzXygpIHtcbiAgICBjb25zdCB7c3RyaW5nc30gPSBNRENSaXBwbGVGb3VuZGF0aW9uO1xuICAgIE9iamVjdC5rZXlzKHN0cmluZ3MpLmZvckVhY2goKGspID0+IHtcbiAgICAgIGlmIChrLmluZGV4T2YoJ1ZBUl8nKSA9PT0gMCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKHN0cmluZ3Nba10sIG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWN0aXZhdGVfKGUpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VEaXNhYmxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBdm9pZCByZWFjdGluZyB0byBmb2xsb3ctb24gZXZlbnRzIGZpcmVkIGJ5IHRvdWNoIGRldmljZSBhZnRlciBhbiBhbHJlYWR5LXByb2Nlc3NlZCB1c2VyIGludGVyYWN0aW9uXG4gICAgY29uc3QgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgPSB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgICBjb25zdCBpc1NhbWVJbnRlcmFjdGlvbiA9IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ICYmIGUgIT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c0FjdGl2YXRpb25FdmVudC50eXBlICE9PSBlLnR5cGU7XG4gICAgaWYgKGlzU2FtZUludGVyYWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPSBlID09PSB1bmRlZmluZWQ7XG4gICAgYWN0aXZhdGlvblN0YXRlLmFjdGl2YXRpb25FdmVudCA9IGU7XG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA/IGZhbHNlIDogZSAhPT0gdW5kZWZpbmVkICYmIChcbiAgICAgIGUudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAncG9pbnRlcmRvd24nXG4gICAgKTtcblxuICAgIGNvbnN0IGhhc0FjdGl2YXRlZENoaWxkID0gZSAhPT0gdW5kZWZpbmVkICYmIGFjdGl2YXRlZFRhcmdldHMubGVuZ3RoID4gMCAmJiBhY3RpdmF0ZWRUYXJnZXRzLnNvbWUoXG4gICAgICAodGFyZ2V0KSA9PiB0aGlzLmFkYXB0ZXJfLmNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSk7XG4gICAgaWYgKGhhc0FjdGl2YXRlZENoaWxkKSB7XG4gICAgICAvLyBJbW1lZGlhdGVseSByZXNldCBhY3RpdmF0aW9uIHN0YXRlLCB3aGlsZSBwcmVzZXJ2aW5nIGxvZ2ljIHRoYXQgcHJldmVudHMgdG91Y2ggZm9sbG93LW9uIGV2ZW50c1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhY3RpdmF0ZWRUYXJnZXRzLnB1c2goLyoqIEB0eXBlIHshRXZlbnRUYXJnZXR9ICovIChlLnRhcmdldCkpO1xuICAgICAgdGhpcy5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhlKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIC8vIFJlc2V0IGFycmF5IG9uIG5leHQgZnJhbWUgYWZ0ZXIgdGhlIGN1cnJlbnQgZXZlbnQgaGFzIGhhZCBhIGNoYW5jZSB0byBidWJibGUgdG8gcHJldmVudCBhbmNlc3RvciByaXBwbGVzXG4gICAgICBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbiAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlICYmIGUgIT09IHVuZGVmaW5lZCAmJiAoZS5rZXkgPT09ICcgJyB8fCBlLmtleUNvZGUgPT09IDMyKSkge1xuICAgICAgICAvLyBJZiBzcGFjZSB3YXMgcHJlc3NlZCwgdHJ5IGFnYWluIHdpdGhpbiBhbiByQUYgY2FsbCB0byBkZXRlY3QgOmFjdGl2ZSwgYmVjYXVzZSBkaWZmZXJlbnQgVUFzIHJlcG9ydFxuICAgICAgICAvLyBhY3RpdmUgc3RhdGVzIGluY29uc2lzdGVudGx5IHdoZW4gdGhleSdyZSBjYWxsZWQgd2l0aGluIGV2ZW50IGhhbmRsaW5nIGNvZGU6XG4gICAgICAgIC8vIC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjM1OTcxXG4gICAgICAgIC8vIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTI5Mzc0MVxuICAgICAgICAvLyBXZSB0cnkgZmlyc3Qgb3V0c2lkZSByQUYgdG8gc3VwcG9ydCBFZGdlLCB3aGljaCBkb2VzIG5vdCBleGhpYml0IHRoaXMgcHJvYmxlbSwgYnV0IHdpbGwgY3Jhc2ggaWYgYSBDU1NcbiAgICAgICAgLy8gdmFyaWFibGUgaXMgc2V0IHdpdGhpbiBhIHJBRiBjYWxsYmFjayBmb3IgYSBzdWJtaXQgYnV0dG9uIGludGVyYWN0aW9uICgjMjI0MSkuXG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgIC8vIFJlc2V0IGFjdGl2YXRpb24gc3RhdGUgaW1tZWRpYXRlbHkgaWYgZWxlbWVudCB3YXMgbm90IG1hZGUgYWN0aXZlLlxuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnQ9fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKSB7XG4gICAgcmV0dXJuIChlICE9PSB1bmRlZmluZWQgJiYgZS50eXBlID09PSAna2V5ZG93bicpID8gdGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VBY3RpdmUoKSA6IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnQ9fSBldmVudCBPcHRpb25hbCBldmVudCBjb250YWluaW5nIHBvc2l0aW9uIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgYWN0aXZhdGUoZXZlbnQpIHtcbiAgICB0aGlzLmFjdGl2YXRlXyhldmVudCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgYW5pbWF0ZUFjdGl2YXRpb25fKCkge1xuICAgIGNvbnN0IHtWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCBWQVJfRkdfVFJBTlNMQVRFX0VORH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG4gICAgY29uc3Qge0ZHX0RFQUNUSVZBVElPTiwgRkdfQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgY29uc3Qge0RFQUNUSVZBVElPTl9USU1FT1VUX01TfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycztcblxuICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG5cbiAgICBsZXQgdHJhbnNsYXRlU3RhcnQgPSAnJztcbiAgICBsZXQgdHJhbnNsYXRlRW5kID0gJyc7XG5cbiAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgY29uc3Qge3N0YXJ0UG9pbnQsIGVuZFBvaW50fSA9IHRoaXMuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpO1xuICAgICAgdHJhbnNsYXRlU3RhcnQgPSBgJHtzdGFydFBvaW50Lnh9cHgsICR7c3RhcnRQb2ludC55fXB4YDtcbiAgICAgIHRyYW5zbGF0ZUVuZCA9IGAke2VuZFBvaW50Lnh9cHgsICR7ZW5kUG9pbnQueX1weGA7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCB0cmFuc2xhdGVTdGFydCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX0VORCwgdHJhbnNsYXRlRW5kKTtcbiAgICAvLyBDYW5jZWwgYW55IG9uZ29pbmcgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5pbWF0aW9uc1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG5cbiAgICAvLyBGb3JjZSBsYXlvdXQgaW4gb3JkZXIgdG8gcmUtdHJpZ2dlciB0aGUgYW5pbWF0aW9uLlxuICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXygpLCBERUFDVElWQVRJT05fVElNRU9VVF9NUyk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHJldHVybiB7e3N0YXJ0UG9pbnQ6IFBvaW50VHlwZSwgZW5kUG9pbnQ6IFBvaW50VHlwZX19XG4gICAqL1xuICBnZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCkge1xuICAgIGNvbnN0IHthY3RpdmF0aW9uRXZlbnQsIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcn0gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG5cbiAgICBsZXQgc3RhcnRQb2ludDtcbiAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyKSB7XG4gICAgICBzdGFydFBvaW50ID0gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKFxuICAgICAgICAvKiogQHR5cGUgeyFFdmVudH0gKi8gKGFjdGl2YXRpb25FdmVudCksXG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZ2V0V2luZG93UGFnZU9mZnNldCgpLCB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgeDogdGhpcy5mcmFtZV8ud2lkdGggLyAyLFxuICAgICAgICB5OiB0aGlzLmZyYW1lXy5oZWlnaHQgLyAyLFxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gQ2VudGVyIHRoZSBlbGVtZW50IGFyb3VuZCB0aGUgc3RhcnQgcG9pbnQuXG4gICAgc3RhcnRQb2ludCA9IHtcbiAgICAgIHg6IHN0YXJ0UG9pbnQueCAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgeTogc3RhcnRQb2ludC55IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgfTtcblxuICAgIGNvbnN0IGVuZFBvaW50ID0ge1xuICAgICAgeDogKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6ICh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICByZXR1cm4ge3N0YXJ0UG9pbnQsIGVuZFBvaW50fTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKSB7XG4gICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJvdGggd2hlbiBhIHBvaW50aW5nIGRldmljZSBpcyByZWxlYXNlZCwgYW5kIHdoZW4gdGhlIGFjdGl2YXRpb24gYW5pbWF0aW9uIGVuZHMuXG4gICAgLy8gVGhlIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gc2hvdWxkIG9ubHkgcnVuIGFmdGVyIGJvdGggb2YgdGhvc2Ugb2NjdXIuXG4gICAgY29uc3Qge0ZHX0RFQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgY29uc3Qge2hhc0RlYWN0aXZhdGlvblVYUnVuLCBpc0FjdGl2YXRlZH0gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgY29uc3QgYWN0aXZhdGlvbkhhc0VuZGVkID0gaGFzRGVhY3RpdmF0aW9uVVhSdW4gfHwgIWlzQWN0aXZhdGVkO1xuXG4gICAgaWYgKGFjdGl2YXRpb25IYXNFbmRlZCAmJiB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8pIHtcbiAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICB9LCBudW1iZXJzLkZHX0RFQUNUSVZBVElPTl9NUyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpIHtcbiAgICBjb25zdCB7RkdfQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgfVxuXG4gIHJlc2V0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXy5hY3RpdmF0aW9uRXZlbnQ7XG4gICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgIC8vIFRvdWNoIGRldmljZXMgbWF5IGZpcmUgYWRkaXRpb25hbCBldmVudHMgZm9yIHRoZSBzYW1lIGludGVyYWN0aW9uIHdpdGhpbiBhIHNob3J0IHRpbWUuXG4gICAgLy8gU3RvcmUgdGhlIHByZXZpb3VzIGV2ZW50IHVudGlsIGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhhdCBzdWJzZXF1ZW50IGV2ZW50cyBhcmUgZm9yIG5ldyBpbnRlcmFjdGlvbnMuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHVuZGVmaW5lZCwgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlRBUF9ERUxBWV9NUyk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlYWN0aXZhdGVfKCkge1xuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gc2NlbmFyaW9zIHN1Y2ggYXMgd2hlbiB5b3UgaGF2ZSBhIGtleXVwIGV2ZW50IHRoYXQgYmx1cnMgdGhlIGVsZW1lbnQuXG4gICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZSA9IC8qKiBAdHlwZSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9ICovIChPYmplY3QuYXNzaWduKHt9LCBhY3RpdmF0aW9uU3RhdGUpKTtcblxuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKSk7XG4gICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXy5oYXNEZWFjdGl2YXRpb25VWFJ1biA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpO1xuICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmRlYWN0aXZhdGVfKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gb3B0aW9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYW5pbWF0ZURlYWN0aXZhdGlvbl8oe3dhc0FjdGl2YXRlZEJ5UG9pbnRlciwgd2FzRWxlbWVudE1hZGVBY3RpdmV9KSB7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlciB8fCB3YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICB9XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0RnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgbGF5b3V0SW50ZXJuYWxfKCkge1xuICAgIHRoaXMuZnJhbWVfID0gdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgY29uc3QgbWF4RGltID0gTWF0aC5tYXgodGhpcy5mcmFtZV8uaGVpZ2h0LCB0aGlzLmZyYW1lXy53aWR0aCk7XG5cbiAgICAvLyBTdXJmYWNlIGRpYW1ldGVyIGlzIHRyZWF0ZWQgZGlmZmVyZW50bHkgZm9yIHVuYm91bmRlZCB2cy4gYm91bmRlZCByaXBwbGVzLlxuICAgIC8vIFVuYm91bmRlZCByaXBwbGUgZGlhbWV0ZXIgaXMgY2FsY3VsYXRlZCBzbWFsbGVyIHNpbmNlIHRoZSBzdXJmYWNlIGlzIGV4cGVjdGVkIHRvIGFscmVhZHkgYmUgcGFkZGVkIGFwcHJvcHJpYXRlbHlcbiAgICAvLyB0byBleHRlbmQgdGhlIGhpdGJveCwgYW5kIHRoZSByaXBwbGUgaXMgZXhwZWN0ZWQgdG8gbWVldCB0aGUgZWRnZXMgb2YgdGhlIHBhZGRlZCBoaXRib3ggKHdoaWNoIGlzIHR5cGljYWxseVxuICAgIC8vIHNxdWFyZSkuIEJvdW5kZWQgcmlwcGxlcywgb24gdGhlIG90aGVyIGhhbmQsIGFyZSBmdWxseSBleHBlY3RlZCB0byBleHBhbmQgYmV5b25kIHRoZSBzdXJmYWNlJ3MgbG9uZ2VzdCBkaWFtZXRlclxuICAgIC8vIChjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBkaWFnb25hbCBwbHVzIGEgY29uc3RhbnQgcGFkZGluZyksIGFuZCBhcmUgY2xpcHBlZCBhdCB0aGUgc3VyZmFjZSdzIGJvcmRlciB2aWFcbiAgICAvLyBgb3ZlcmZsb3c6IGhpZGRlbmAuXG4gICAgY29uc3QgZ2V0Qm91bmRlZFJhZGl1cyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGh5cG90ZW51c2UgPSBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy5mcmFtZV8ud2lkdGgsIDIpICsgTWF0aC5wb3codGhpcy5mcmFtZV8uaGVpZ2h0LCAyKSk7XG4gICAgICByZXR1cm4gaHlwb3RlbnVzZSArIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5QQURESU5HO1xuICAgIH07XG5cbiAgICB0aGlzLm1heFJhZGl1c18gPSB0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkgPyBtYXhEaW0gOiBnZXRCb3VuZGVkUmFkaXVzKCk7XG5cbiAgICAvLyBSaXBwbGUgaXMgc2l6ZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgbGFyZ2VzdCBkaW1lbnNpb24gb2YgdGhlIHN1cmZhY2UsIHRoZW4gc2NhbGVzIHVwIHVzaW5nIGEgQ1NTIHNjYWxlIHRyYW5zZm9ybVxuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gTWF0aC5mbG9vcihtYXhEaW0gKiBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuSU5JVElBTF9PUklHSU5fU0NBTEUpO1xuICAgIHRoaXMuZmdTY2FsZV8gPSB0aGlzLm1heFJhZGl1c18gLyB0aGlzLmluaXRpYWxTaXplXztcblxuICAgIHRoaXMudXBkYXRlTGF5b3V0Q3NzVmFyc18oKTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICB1cGRhdGVMYXlvdXRDc3NWYXJzXygpIHtcbiAgICBjb25zdCB7XG4gICAgICBWQVJfRkdfU0laRSwgVkFSX0xFRlQsIFZBUl9UT1AsIFZBUl9GR19TQ0FMRSxcbiAgICB9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuXG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0laRSwgYCR7dGhpcy5pbml0aWFsU2l6ZV99cHhgKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TQ0FMRSwgdGhpcy5mZ1NjYWxlXyk7XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICAgIGxlZnQ6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgIHRvcDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9MRUZULCBgJHt0aGlzLnVuYm91bmRlZENvb3Jkc18ubGVmdH1weGApO1xuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfVE9QLCBgJHt0aGlzLnVuYm91bmRlZENvb3Jkc18udG9wfXB4YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdW5ib3VuZGVkICovXG4gIHNldFVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICBjb25zdCB7VU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBpZiAodW5ib3VuZGVkKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGb2N1cygpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpKTtcbiAgfVxuXG4gIGhhbmRsZUJsdXIoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgTURDUmlwcGxlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1JpcHBsZUZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBNRENDb21wb25lbnQ8IU1EQ1JpcHBsZUZvdW5kYXRpb24+XG4gKi9cbmNsYXNzIE1EQ1JpcHBsZSBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKiBAcGFyYW0gey4uLj99IGFyZ3MgKi9cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcGFyYW0ge3tpc1VuYm91bmRlZDogKGJvb2xlYW58dW5kZWZpbmVkKX09fSBvcHRpb25zXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGV9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCwge2lzVW5ib3VuZGVkID0gdW5kZWZpbmVkfSA9IHt9KSB7XG4gICAgY29uc3QgcmlwcGxlID0gbmV3IE1EQ1JpcHBsZShyb290KTtcbiAgICAvLyBPbmx5IG92ZXJyaWRlIHVuYm91bmRlZCBiZWhhdmlvciBpZiBvcHRpb24gaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcbiAgICBpZiAoaXNVbmJvdW5kZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmlwcGxlLnVuYm91bmRlZCA9IC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi8gKGlzVW5ib3VuZGVkKTtcbiAgICB9XG4gICAgcmV0dXJuIHJpcHBsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFSaXBwbGVDYXBhYmxlU3VyZmFjZX0gaW5zdGFuY2VcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlQWRhcHRlcihpbnN0YW5jZSkge1xuICAgIGNvbnN0IE1BVENIRVMgPSB1dGlsLmdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IHV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KSxcbiAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiBpbnN0YW5jZS51bmJvdW5kZWQsXG4gICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IGluc3RhbmNlLnJvb3RfW01BVENIRVNdKCc6YWN0aXZlJyksXG4gICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4gaW5zdGFuY2UuZGlzYWJsZWQsXG4gICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICh0YXJnZXQpID0+IGluc3RhbmNlLnJvb3RfLmNvbnRhaW5zKHRhcmdldCksXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgaW5zdGFuY2Uucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IChoYW5kbGVyKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKHZhck5hbWUsIHZhbHVlKSA9PiBpbnN0YW5jZS5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSksXG4gICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiBpbnN0YW5jZS5yb290Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+ICh7eDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXR9KSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGdldCB1bmJvdW5kZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5ib3VuZGVkXztcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXQgdW5ib3VuZGVkKHVuYm91bmRlZCkge1xuICAgIHRoaXMudW5ib3VuZGVkXyA9IEJvb2xlYW4odW5ib3VuZGVkKTtcbiAgICB0aGlzLnNldFVuYm91bmRlZF8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zdXJlIENvbXBpbGVyIHRocm93cyBhbiBhY2Nlc3MgY29udHJvbCBlcnJvciB3aGVuIGRpcmVjdGx5IGFjY2Vzc2luZyBhXG4gICAqIHByb3RlY3RlZCBvciBwcml2YXRlIHByb3BlcnR5IGluc2lkZSBhIGdldHRlci9zZXR0ZXIsIGxpa2UgdW5ib3VuZGVkIGFib3ZlLlxuICAgKiBCeSBhY2Nlc3NpbmcgdGhlIHByb3RlY3RlZCBwcm9wZXJ0eSBpbnNpZGUgYSBtZXRob2QsIHdlIHNvbHZlIHRoYXQgcHJvYmxlbS5cbiAgICogVGhhdCdzIHdoeSB0aGlzIGZ1bmN0aW9uIGV4aXN0cy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFVuYm91bmRlZF8oKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVbmJvdW5kZWQodGhpcy51bmJvdW5kZWRfKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZWFjdGl2YXRlKCk7XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5sYXlvdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlRm91bmRhdGlvbn1cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIodGhpcykpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgdGhpcy51bmJvdW5kZWQgPSAnbWRjUmlwcGxlSXNVbmJvdW5kZWQnIGluIHRoaXMucm9vdF8uZGF0YXNldDtcbiAgfVxufVxuXG4vKipcbiAqIFNlZSBNYXRlcmlhbCBEZXNpZ24gc3BlYyBmb3IgbW9yZSBkZXRhaWxzIG9uIHdoZW4gdG8gdXNlIHJpcHBsZXMuXG4gKiBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvbW90aW9uL2Nob3Jlb2dyYXBoeS5odG1sI2Nob3Jlb2dyYXBoeS1jcmVhdGlvblxuICogQHJlY29yZFxuICovXG5jbGFzcyBSaXBwbGVDYXBhYmxlU3VyZmFjZSB7fVxuXG4vKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUucm9vdF87XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHJpcHBsZSBibGVlZHMgb3V0IG9mIHRoZSBib3VuZHMgb2YgdGhlIGVsZW1lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS51bmJvdW5kZWQ7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHJpcHBsZSBpcyBhdHRhY2hlZCB0byBhIGRpc2FibGVkIGNvbXBvbmVudC5cbiAqIEB0eXBlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLmRpc2FibGVkO1xuXG5leHBvcnQge01EQ1JpcHBsZSwgTURDUmlwcGxlRm91bmRhdGlvbiwgUmlwcGxlQ2FwYWJsZVN1cmZhY2UsIHV0aWx9O1xuIiwiaW1wb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvaW5kZXgnXG5pbXBvcnQge1xuICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyxcbiAgZ2V0TWF0Y2hlc1Byb3BlcnR5LFxuICBhcHBseVBhc3NpdmVcbn0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS91dGlsJ1xuXG5leHBvcnQgY2xhc3MgUmlwcGxlQmFzZSBleHRlbmRzIE1EQ1JpcHBsZUZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IE1BVENIRVMoKSB7XG4gICAgLyogZ2xvYmFsIEhUTUxFbGVtZW50ICovXG4gICAgcmV0dXJuIChcbiAgICAgIFJpcHBsZUJhc2UuX21hdGNoZXMgfHxcbiAgICAgIChSaXBwbGVCYXNlLl9tYXRjaGVzID0gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSkpXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGlzU3VyZmFjZUFjdGl2ZShyZWYpIHtcbiAgICByZXR1cm4gcmVmW1JpcHBsZUJhc2UuTUFUQ0hFU10oJzphY3RpdmUnKVxuICB9XG5cbiAgY29uc3RydWN0b3Iodm0sIG9wdGlvbnMpIHtcbiAgICBzdXBlcihcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uJGVsW1JpcHBsZUJhc2UuTUFUQ0hFU10oJzphY3RpdmUnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS5kaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2bS4kc2V0KHZtLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJGRlbGV0ZSh2bS5jbGFzc2VzLCBjbGFzc05hbWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiB0YXJnZXQgPT4gdm0uJGVsLmNvbnRhaW5zKHRhcmdldCksXG4gICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHZtLiRlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5zdHlsZXMsIHZhck5hbWUsIHZhbHVlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgUmlwcGxlTWl4aW4gPSB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5yaXBwbGUuZGVzdHJveSgpXG4gIH1cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGN1c3RvbS1lbGVtZW50IFxuICAgIDp0YWc9XCJ0YWdcIiBcbiAgICA6Y2xhc3Nlcz1cImNsYXNzZXNcIlxuICAgIDpzdHlsZXM9XCJzdHlsZXNcIiBcbiAgICBjbGFzcz1cIm1kYy1yaXBwbGVcIj5cbiAgICA8c2xvdCAvPlxuICA8L2N1c3RvbS1lbGVtZW50PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnRNaXhpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgeyBSaXBwbGVNaXhpbiB9IGZyb20gJy4vbWRjLXJpcHBsZS1iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtcmlwcGxlJyxcbiAgbWl4aW5zOiBbQ3VzdG9tRWxlbWVudE1peGluLCBSaXBwbGVNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgdGFnOiBTdHJpbmdcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxjdXN0b20tYnV0dG9uXG4gICAgcmVmPVwicm9vdFwiXG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiXG4gICAgOnN0eWxlPVwic3R5bGVzXCJcbiAgICA6aHJlZj1cImhyZWZcIlxuICAgIDpsaW5rPVwibGlua1wiXG4gICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgIHYtb249XCJsaXN0ZW5lcnNcIlxuICA+XG4gICAgPHNwYW4gY2xhc3M9XCJtZGMtYnV0dG9uX19sYWJlbFwiPiA8c2xvdCAvPiA8L3NwYW4+XG4gIDwvY3VzdG9tLWJ1dHRvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBEaXNwYXRjaEV2ZW50TWl4aW4sIEN1c3RvbUJ1dHRvbk1peGluIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IFJpcHBsZU1peGluIH0gZnJvbSAnLi4vcmlwcGxlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtYnV0dG9uLWJhc2UnLFxuICBtaXhpbnM6IFtEaXNwYXRjaEV2ZW50TWl4aW4sIEN1c3RvbUJ1dHRvbk1peGluLCBSaXBwbGVNaXhpbl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8c2NyaXB0PlxuaW1wb3J0IG1kY0J1dHRvbkJhc2UgZnJvbSAnLi9tZGMtYnV0dG9uLWJhc2UudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtYnV0dG9uJyxcbiAgZXh0ZW5kczogbWRjQnV0dG9uQmFzZSxcbiAgcHJvcHM6IHtcbiAgICByYWlzZWQ6IEJvb2xlYW4sXG4gICAgdW5lbGV2YXRlZDogQm9vbGVhbixcbiAgICBvdXRsaW5lZDogQm9vbGVhbixcbiAgICBkZW5zZTogQm9vbGVhblxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgICdtZGMtYnV0dG9uJzogdHJ1ZSxcbiAgICAgICAgJ21kYy1idXR0b24tLXJhaXNlZCc6IHRoaXMucmFpc2VkLFxuICAgICAgICAnbWRjLWJ1dHRvbi0tdW5lbGV2YXRlZCc6IHRoaXMudW5lbGV2YXRlZCxcbiAgICAgICAgJ21kYy1idXR0b24tLW91dGxpbmVkJzogdGhpcy5vdXRsaW5lZCxcbiAgICAgICAgJ21kYy1idXR0b24tLWRlbnNlJzogdGhpcy5kZW5zZVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICByYWlzZWQoKSB7XG4gICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCAnbWRjLWJ1dHRvbi0tcmFpc2VkJywgdGhpcy5yYWlzZWQpXG4gICAgfSxcbiAgICB1bmVsZXZhdGVkKCkge1xuICAgICAgdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgJ21kYy1idXR0b24tLXVuZWxldmF0ZWQnLCB0aGlzLnVuZWxldmF0ZWQpXG4gICAgfSxcbiAgICBvdXRsaW5lZCgpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsICdtZGMtYnV0dG9uLS1vdXRsaW5lZCcsIHRoaXMub3V0bGluZWQpXG4gICAgfSxcbiAgICBkZW5zZSgpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsICdtZGMtYnV0dG9uLS1kZW5zZScsIHRoaXMuZGVuc2UpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBcInBvbnlmaWxsXCIgaXMgYSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgbW9kaWZ5IHRoZSBnbG9iYWwgcHJvdG90eXBlIGNoYWluLlxuICogVGhpcyBtYWtlcyBwb255ZmlsbHMgc2FmZXIgdGhhbiB0cmFkaXRpb25hbCBwb2x5ZmlsbHMsIGVzcGVjaWFsbHkgZm9yIGxpYnJhcmllcyBsaWtlIE1EQy5cbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7P0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgaWYgKGVsZW1lbnQuY2xvc2VzdCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICB9XG5cbiAgbGV0IGVsID0gZWxlbWVudDtcbiAgd2hpbGUgKGVsKSB7XG4gICAgaWYgKG1hdGNoZXMoZWwsIHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IG5hdGl2ZU1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXNcbiAgICB8fCBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvclxuICAgIHx8IGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3I7XG4gIHJldHVybiBuYXRpdmVNYXRjaGVzLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xufVxuXG5leHBvcnQge2Nsb3Nlc3QsIG1hdGNoZXN9O1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgcmVmPVwicm9vdFwiXG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiXG4gICAgOnN0eWxlPVwic3R5bGVzXCJcbiAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiXG4gICAgOmFyaWEtbGFiZWxsZWRieT1cIidsYWJlbCcgKyB2bWFfdWlkX1wiXG4gICAgOmFyaWEtZGVzY3JpYmVkYnk9XCInZGVzYycgKyB2bWFfdWlkX1wiXG4gICAgY2xhc3M9XCJtZGMtZGlhbG9nXCJcbiAgICByb2xlPVwiYWxlcnRkaWFsb2dcIlxuICAgIEBjbGljaz1cIm9uQ2xpY2tcIlxuICAgIEBrZXlkb3duPVwib25DbGlja1wiXG4gID5cbiAgICA8ZGl2IHJlZj1cImNvbnRhaW5lclwiIGNsYXNzPVwibWRjLWRpYWxvZ19fY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IHJlZj1cInN1cmZhY2VcIiA6Y2xhc3M9XCJzdXJmYWNlQ2xhc3Nlc1wiIGNsYXNzPVwibWRjLWRpYWxvZ19fc3VyZmFjZVwiPlxuICAgICAgICA8aDIgdi1pZj1cInRpdGxlXCIgY2xhc3M9XCJtZGMtZGlhbG9nX190aXRsZVwiIDppZD1cIidsYWJlbCcgKyB2bWFfdWlkX1wiPlxuICAgICAgICAgIDwhLS1cbiAgICAgICAgICAtLT57eyB0aXRsZVxuICAgICAgICAgIH19PCEtLS0tPlxuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IHJlZj1cImNvbnRlbnRcIiBjbGFzcz1cIm1kYy1kaWFsb2dfX2NvbnRlbnRcIiA6aWQ9XCInZGVzYycgKyB2bWFfdWlkX1wiPlxuICAgICAgICAgIDxzbG90IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9vdGVyIHYtaWY9XCJhY2NlcHQgfHwgY2FuY2VsXCIgY2xhc3M9XCJtZGMtZGlhbG9nX19hY3Rpb25zXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB2LWlmPVwiY2FuY2VsXCJcbiAgICAgICAgICAgIGNsYXNzPVwibWRjLWJ1dHRvbiBtZGMtZGlhbG9nX19idXR0b25cIlxuICAgICAgICAgICAgZGF0YS1tZGMtZGlhbG9nLWFjdGlvbj1cIm5vXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBjYW5jZWwgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHJlZj1cImRlZmF1bHRCdXR0b25cIlxuICAgICAgICAgICAgOmRpc2FibGVkPVwiYWNjZXB0RGlzYWJsZWRcIlxuICAgICAgICAgICAgY2xhc3M9XCJtZGMtYnV0dG9uIG1kYy1kaWFsb2dfX2J1dHRvbiBcIlxuICAgICAgICAgICAgZGF0YS1tZGMtZGlhbG9nLWFjdGlvbj1cInllc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgYWNjZXB0IH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1kYy1kaWFsb2dfX3NjcmltXCIgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1EQ0RpYWxvZ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2RpYWxvZy9mb3VuZGF0aW9uJ1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICdAbWF0ZXJpYWwvZGlhbG9nL3V0aWwnXG5pbXBvcnQgeyBtZGNCdXR0b24gfSBmcm9tICcuLi9idXR0b24nXG5pbXBvcnQgeyBWTUFVbmlxdWVJZE1peGluIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IGNsb3Nlc3QsIG1hdGNoZXMgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJ1xuaW1wb3J0IGNyZWF0ZUZvY3VzVHJhcCBmcm9tICdmb2N1cy10cmFwJ1xuY29uc3Qgc3RyaW5ncyA9IE1EQ0RpYWxvZ0ZvdW5kYXRpb24uc3RyaW5nc1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtZGlhbG9nJyxcbiAgY29tcG9uZW50czoge1xuICAgIG1kY0J1dHRvbjogbWRjQnV0dG9uXG4gIH0sXG4gIG1peGluczogW1ZNQVVuaXF1ZUlkTWl4aW5dLFxuICBtb2RlbDoge1xuICAgIHByb3A6ICdvcGVuJyxcbiAgICBldmVudDogJ2NoYW5nZSdcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBhY2NlcHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdPaydcbiAgICB9LFxuICAgIGFjY2VwdERpc2FibGVkOiBCb29sZWFuLFxuICAgIGFjY2VwdFJhaXNlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBjYW5jZWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgY2FuY2VsUmFpc2VkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGFjY2VudDogQm9vbGVhbixcbiAgICBzY3JvbGxhYmxlOiBCb29sZWFuLFxuICAgIG9wZW46IEJvb2xlYW5cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICAnbWRjLXRoZW1lLS1kYXJrJzogdGhpcy5kYXJrXG4gICAgICB9LFxuICAgICAgc3R5bGVzOiB7fSxcbiAgICAgIHN1cmZhY2VDbGFzc2VzOiB7fSxcbiAgICAgIGJvZHlDbGFzc2VzOiB7XG4gICAgICAgICdtZGMtZGlhbG9nX19ib2R5LS1zY3JvbGxhYmxlJzogdGhpcy5zY3JvbGxhYmxlXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIG9wZW46ICdvbk9wZW5fJ1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGlmICh0aGlzLmFjY2VwdCkge1xuICAgICAgdGhpcy5mb2N1c1RyYXAgPSB1dGlsLmNyZWF0ZUZvY3VzVHJhcEluc3RhbmNlKFxuICAgICAgICB0aGlzLiRyZWZzLmNvbnRhaW5lcixcbiAgICAgICAgY3JlYXRlRm9jdXNUcmFwXG4gICAgICApXG4gICAgfVxuXG4gICAgdGhpcy5idXR0b25zXyA9IFtdLnNsaWNlLmNhbGwoXG4gICAgICB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuQlVUVE9OX1NFTEVDVE9SKVxuICAgIClcblxuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENEaWFsb2dGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKSxcbiAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZGVsZXRlKHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lKSxcbiAgICAgIGhhc0NsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICBhZGRCb2R5Q2xhc3M6IGNsYXNzTmFtZSA9PiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUJvZHlDbGFzczogY2xhc3NOYW1lID0+IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgZXZlbnRUYXJnZXRNYXRjaGVzOiAodGFyZ2V0LCBzZWxlY3RvcikgPT4gbWF0Y2hlcyh0YXJnZXQsIHNlbGVjdG9yKSxcbiAgICAgIHRyYXBGb2N1czogKCkgPT4gdGhpcy5mb2N1c1RyYXAgJiYgdGhpcy5mb2N1c1RyYXAuYWN0aXZhdGUoKSxcbiAgICAgIHJlbGVhc2VGb2N1czogKCkgPT4gdGhpcy5mb2N1c1RyYXAgJiYgdGhpcy5mb2N1c1RyYXAuZGVhY3RpdmF0ZSgpLFxuICAgICAgaXNDb250ZW50U2Nyb2xsYWJsZTogKCkgPT5cbiAgICAgICAgISF0aGlzLiRyZWZzLmNvbnRlbnQgJiYgdXRpbC5pc1Njcm9sbGFibGUodGhpcy4kcmVmcy5jb250ZW50KSxcbiAgICAgIGFyZUJ1dHRvbnNTdGFja2VkOiAoKSA9PiB1dGlsLmFyZVRvcHNNaXNhbGlnbmVkKHRoaXMuYnV0dG9uc18pLFxuXG4gICAgICBnZXRBY3Rpb25Gcm9tRXZlbnQ6IGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCBgWyR7c3RyaW5ncy5BQ1RJT05fQVRUUklCVVRFfV1gKVxuICAgICAgICByZXR1cm4gZWxlbWVudCAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZShzdHJpbmdzLkFDVElPTl9BVFRSSUJVVEUpXG4gICAgICB9LFxuICAgICAgY2xpY2tEZWZhdWx0QnV0dG9uOiAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiRyZWZzLmRlZmF1bHRCdXR0b24pIHtcbiAgICAgICAgICB0aGlzLiRyZWZzLmRlZmF1bHRCdXR0b24uY2xpY2soKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmV2ZXJzZUJ1dHRvbnM6ICgpID0+IHtcbiAgICAgICAgdGhpcy5idXR0b25zXy5yZXZlcnNlKClcbiAgICAgICAgdGhpcy5idXR0b25zXy5mb3JFYWNoKGJ1dHRvbiA9PlxuICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIG5vdGlmeU9wZW5pbmc6ICgpID0+IHRoaXMuJGVtaXQoc3RyaW5ncy5PUEVOSU5HX0VWRU5ULCB7fSksXG4gICAgICBub3RpZnlPcGVuZWQ6ICgpID0+IHRoaXMuJGVtaXQoc3RyaW5ncy5PUEVORURfRVZFTlQsIHt9KSxcbiAgICAgIG5vdGlmeUNsb3Npbmc6IGFjdGlvbiA9PiB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGZhbHNlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3Rpb24pXG4gICAgICAgIHRoaXMuJGVtaXQoc3RyaW5ncy5DTE9TSU5HX0VWRU5ULCBhY3Rpb24gPyB7IGFjdGlvbiB9IDoge30pXG4gICAgICB9LFxuICAgICAgbm90aWZ5Q2xvc2VkOiBhY3Rpb24gPT5cbiAgICAgICAgdGhpcy4kZW1pdChzdHJpbmdzLkNMT1NFRF9FVkVOVCwgYWN0aW9uID8geyBhY3Rpb24gfSA6IHt9KVxuICAgIH0pXG5cbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gICAgdGhpcy5vcGVuICYmIHRoaXMuZm91bmRhdGlvbi5vcGVuKClcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24uZGVzdHJveSgpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbk9wZW5fKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLm9wZW4oKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmNsb3NlKClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25DbGljayhldmVudCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUludGVyYWN0aW9uKGV2ZW50KVxuICAgIH0sXG4gICAgb25DYW5jZWwoKSB7XG4gICAgICBpZiAodGhpcy4kbGlzdGVuZXJzWyd2YWxpZGF0ZUNhbmNlbCddKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3ZhbGlkYXRlQ2FuY2VsJywge1xuICAgICAgICAgIGNhbmNlbDogKG5vdGlmeSA9IHRydWUpID0+IHtcbiAgICAgICAgICAgIC8vIGlmIG5vdGlmeSA9IGZhbHNlLCB0aGUgZGlhbG9nIHdpbGwgY2xvc2VcbiAgICAgICAgICAgIC8vIGJ1dCB0aGUgbm90aWZ5QWNjZXB0IG1ldGhvZCB3aWxsIG5vdCBiZSBjYWxsZWRcbiAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gbm90aWZ5IGxpc3RlbmVycyB0aGUgb3BlbiBzdGF0ZVxuICAgICAgICAgICAgLy8gaXMgY2hhbmdpbmcuXG4gICAgICAgICAgICBpZiAoIW5vdGlmeSkge1xuICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbi5jYW5jZWwobm90aWZ5KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5jYW5jZWwodHJ1ZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQWNjZXB0KCkge1xuICAgICAgaWYgKHRoaXMuJGxpc3RlbmVyc1sndmFsaWRhdGUnXSkge1xuICAgICAgICB0aGlzLiRlbWl0KCd2YWxpZGF0ZScsIHtcbiAgICAgICAgICBhY2NlcHQ6IChub3RpZnkgPSB0cnVlKSA9PiB7XG4gICAgICAgICAgICAvLyBpZiBub3RpZnkgPSBmYWxzZSwgdGhlIGRpYWxvZyB3aWxsIGNsb3NlXG4gICAgICAgICAgICAvLyBidXQgdGhlIG5vdGlmeUFjY2VwdCBtZXRob2Qgd2lsbCBub3QgYmUgY2FsbGVkXG4gICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIG5vdGlmeSBsaXN0ZW5lcnMgdGhlIG9wZW4gc3RhdGVcbiAgICAgICAgICAgIC8vIGlzIGNoYW5naW5nLlxuICAgICAgICAgICAgaWYgKCFub3RpZnkpIHtcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb24uYWNjZXB0KG5vdGlmeSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uYWNjZXB0KHRydWUpXG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93KCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLm9wZW4oKVxuICAgIH0sXG4gICAgY2xvc2UoKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uY2xvc2UoKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBtZGNEaWFsb2cgZnJvbSAnLi9tZGMtZGlhbG9nLnZ1ZSdcblxuZXhwb3J0IHsgbWRjRGlhbG9nIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY0RpYWxvZ1xufSlcbiIsImltcG9ydCAnLi9zdHlsZXMuc2NzcydcbmltcG9ydCB7IGF1dG9Jbml0IH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBwbHVnaW4gZnJvbSAnLi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG5hdXRvSW5pdChwbHVnaW4pXG4iXSwibmFtZXMiOlsiYXV0b0luaXQiLCJwbHVnaW4iLCJfVnVlIiwid2luZG93IiwiVnVlIiwiZ2xvYmFsIiwidXNlIiwiQmFzZVBsdWdpbiIsImNvbXBvbmVudHMiLCJ2ZXJzaW9uIiwiaW5zdGFsbCIsInZtIiwia2V5IiwiY29tcG9uZW50IiwibmFtZSIsIkN1c3RvbUVsZW1lbnQiLCJmdW5jdGlvbmFsIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJwcm9wcyIsImlzIiwidGFnIiwiZGF0YSIsImNoaWxkcmVuIiwiQ3VzdG9tRWxlbWVudE1peGluIiwiQ3VzdG9tQnV0dG9uIiwibGluayIsIk9iamVjdCIsImgiLCJlbGVtZW50IiwicGFyZW50IiwiJHJvdXRlciIsIiRyb290IiwiJG9wdGlvbnMiLCJhdHRycyIsInJvbGUiLCJvbiIsImNsaWNrIiwibmF0aXZlT24iLCJocmVmIiwiQ3VzdG9tQnV0dG9uTWl4aW4iLCJTdHJpbmciLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJ0byIsImV4YWN0IiwiYXBwZW5kIiwicmVwbGFjZSIsImFjdGl2ZUNsYXNzIiwiZXhhY3RBY3RpdmVDbGFzcyIsImNvbXB1dGVkIiwiRGlzcGF0Y2hFdmVudE1peGluIiwiZXZlbnQiLCJBcnJheSIsIm1ldGhvZHMiLCJkaXNwYXRjaEV2ZW50IiwiZXZ0IiwiJGVtaXQiLCJ0eXBlIiwidGFyZ2V0IiwiZXZlbnRUYXJnZXQiLCJhcmdzIiwiZXZlbnRBcmdzIiwibGlzdGVuZXJzIiwiJGxpc3RlbmVycyIsImUiLCJzY29wZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiVk1BVW5pcXVlSWRNaXhpbiIsImJlZm9yZUNyZWF0ZSIsInZtYV91aWRfIiwiX3VpZCIsIk1EQ0ZvdW5kYXRpb24iLCJhZGFwdGVyIiwiYWRhcHRlcl8iLCJNRENEaWFsb2dBZGFwdGVyIiwiY2xhc3NOYW1lIiwic2VsZWN0b3IiLCJhY3Rpb24iLCJjc3NDbGFzc2VzIiwiT1BFTiIsIk9QRU5JTkciLCJDTE9TSU5HIiwiU0NST0xMQUJMRSIsIlNUQUNLRUQiLCJTQ1JPTExfTE9DSyIsInN0cmluZ3MiLCJTQ1JJTV9TRUxFQ1RPUiIsIkNPTlRBSU5FUl9TRUxFQ1RPUiIsIlNVUkZBQ0VfU0VMRUNUT1IiLCJDT05URU5UX1NFTEVDVE9SIiwiQlVUVE9OX1NFTEVDVE9SIiwiREVGQVVMVF9CVVRUT05fU0VMRUNUT1IiLCJTVVBQUkVTU19ERUZBVUxUX1BSRVNTX1NFTEVDVE9SIiwiam9pbiIsIk9QRU5JTkdfRVZFTlQiLCJPUEVORURfRVZFTlQiLCJDTE9TSU5HX0VWRU5UIiwiQ0xPU0VEX0VWRU5UIiwiQUNUSU9OX0FUVFJJQlVURSIsIkNMT1NFX0FDVElPTiIsIkRFU1RST1lfQUNUSU9OIiwibnVtYmVycyIsIkRJQUxPR19BTklNQVRJT05fT1BFTl9USU1FX01TIiwiRElBTE9HX0FOSU1BVElPTl9DTE9TRV9USU1FX01TIiwiTURDRGlhbG9nRm91bmRhdGlvbiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsImFkZEJvZHlDbGFzcyIsInJlbW92ZUJvZHlDbGFzcyIsImV2ZW50VGFyZ2V0TWF0Y2hlcyIsInRyYXBGb2N1cyIsInJlbGVhc2VGb2N1cyIsImlzQ29udGVudFNjcm9sbGFibGUiLCJhcmVCdXR0b25zU3RhY2tlZCIsImdldEFjdGlvbkZyb21FdmVudCIsImNsaWNrRGVmYXVsdEJ1dHRvbiIsInJldmVyc2VCdXR0b25zIiwibm90aWZ5T3BlbmluZyIsIm5vdGlmeU9wZW5lZCIsIm5vdGlmeUNsb3NpbmciLCJub3RpZnlDbG9zZWQiLCJkZWZhdWx0QWRhcHRlciIsImlzT3Blbl8iLCJhbmltYXRpb25GcmFtZV8iLCJhbmltYXRpb25UaW1lcl8iLCJsYXlvdXRGcmFtZV8iLCJlc2NhcGVLZXlBY3Rpb25fIiwic2NyaW1DbGlja0FjdGlvbl8iLCJhdXRvU3RhY2tCdXR0b25zXyIsImFyZUJ1dHRvbnNTdGFja2VkXyIsInNldEF1dG9TdGFja0J1dHRvbnMiLCJjbG9zZSIsImNsZWFyVGltZW91dCIsImhhbmRsZUFuaW1hdGlvblRpbWVyRW5kXyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicnVuTmV4dEFuaW1hdGlvbkZyYW1lXyIsImxheW91dCIsInNldFRpbWVvdXQiLCJhdXRvU3RhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsYXlvdXRJbnRlcm5hbF8iLCJkZXRlY3RTdGFja2VkQnV0dG9uc18iLCJkZXRlY3RTY3JvbGxhYmxlQ29udGVudF8iLCJpc0NsaWNrIiwiaXNFbnRlciIsImtleUNvZGUiLCJjYWxsYmFjayIsImNhbmRpZGF0ZVNlbGVjdG9ycyIsImNhbmRpZGF0ZVNlbGVjdG9yIiwibWF0Y2hlcyIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJtc01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsInRhYmJhYmxlIiwiZWwiLCJvcHRpb25zIiwiZWxlbWVudERvY3VtZW50Iiwib3duZXJEb2N1bWVudCIsInJlZ3VsYXJUYWJiYWJsZXMiLCJvcmRlcmVkVGFiYmFibGVzIiwidW50b3VjaGFiaWxpdHlDaGVja2VyIiwiVW50b3VjaGFiaWxpdHlDaGVja2VyIiwiY2FuZGlkYXRlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmNsdWRlQ29udGFpbmVyIiwiY2FsbCIsInNsaWNlIiwiYXBwbHkiLCJ1bnNoaWZ0IiwiaSIsImNhbmRpZGF0ZSIsImNhbmRpZGF0ZVRhYmluZGV4IiwibGVuZ3RoIiwiaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlIiwiZ2V0VGFiaW5kZXgiLCJwdXNoIiwiZG9jdW1lbnRPcmRlciIsInRhYkluZGV4Iiwibm9kZSIsInRhYmJhYmxlTm9kZXMiLCJzb3J0Iiwic29ydE9yZGVyZWRUYWJiYWJsZXMiLCJtYXAiLCJhIiwiY29uY2F0IiwiaXNUYWJiYWJsZSIsImlzRm9jdXNhYmxlIiwiaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZSIsImlzTm9uVGFiYmFibGVSYWRpbyIsIkVycm9yIiwiaXNIaWRkZW5JbnB1dCIsImlzVW50b3VjaGFibGUiLCJmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvciIsInRhYmluZGV4QXR0ciIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiaXNOYU4iLCJpc0NvbnRlbnRFZGl0YWJsZSIsImIiLCJmaW5kIiwibGlzdCIsInByZWRpY2F0ZSIsImNvbnRlbnRFZGl0YWJsZSIsImlzSW5wdXQiLCJ0YWdOYW1lIiwiaXNSYWRpbyIsImlzVGFiYmFibGVSYWRpbyIsImdldENoZWNrZWRSYWRpbyIsIm5vZGVzIiwiY2hlY2tlZCIsInJhZGlvU2V0IiwiZG9jIiwiY2FjaGUiLCJoYXNEaXNwbGF5Tm9uZSIsIm5vZGVDb21wdXRlZFN0eWxlIiwibm9kZVR5cGUiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwiY2FjaGVkIiwiaXRlbSIsImRlZmF1bHRWaWV3IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInJlc3VsdCIsImRpc3BsYXkiLCJwYXJlbnROb2RlIiwiZG9jdW1lbnRFbGVtZW50IiwiY29tcHV0ZWRTdHlsZSIsInZpc2liaWxpdHkiLCJtb2R1bGUiLCJleHRlbmQiLCJoYXNPd25Qcm9wZXJ0eSIsImFyZ3VtZW50cyIsInNvdXJjZSIsImFjdGl2ZUZvY3VzVHJhcHMiLCJ0cmFwUXVldWUiLCJhY3RpdmF0ZVRyYXAiLCJ0cmFwIiwiYWN0aXZlVHJhcCIsInBhdXNlIiwidHJhcEluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImRlYWN0aXZhdGVUcmFwIiwidW5wYXVzZSIsImZvY3VzVHJhcCIsInVzZXJPcHRpb25zIiwiZG9jdW1lbnQiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiY29uZmlnIiwieHRlbmQiLCJyZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZSIsImVzY2FwZURlYWN0aXZhdGVzIiwic3RhdGUiLCJmaXJzdFRhYmJhYmxlTm9kZSIsImxhc3RUYWJiYWJsZU5vZGUiLCJub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24iLCJtb3N0UmVjZW50bHlGb2N1c2VkTm9kZSIsImFjdGl2ZSIsInBhdXNlZCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImFjdGl2YXRlT3B0aW9ucyIsInVwZGF0ZVRhYmJhYmxlTm9kZXMiLCJhY3RpdmVFbGVtZW50Iiwib25BY3RpdmF0ZSIsImFkZExpc3RlbmVycyIsImRlYWN0aXZhdGVPcHRpb25zIiwicmVtb3ZlTGlzdGVuZXJzIiwib25EZWFjdGl2YXRlIiwidW5kZWZpbmVkIiwicmV0dXJuRm9jdXMiLCJkZWxheSIsInRyeUZvY3VzIiwiZ2V0SW5pdGlhbEZvY3VzTm9kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja0ZvY3VzSW4iLCJjaGVja1BvaW50ZXJEb3duIiwiY2hlY2tDbGljayIsImNoZWNrS2V5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldE5vZGVGb3JPcHRpb24iLCJvcHRpb25OYW1lIiwib3B0aW9uVmFsdWUiLCJjb250YWlucyIsImNsaWNrT3V0c2lkZURlYWN0aXZhdGVzIiwicHJldmVudERlZmF1bHQiLCJEb2N1bWVudCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImlzRXNjYXBlRXZlbnQiLCJpc1RhYkV2ZW50IiwiY2hlY2tUYWIiLCJzaGlmdEtleSIsImZvY3VzIiwiaXNTZWxlY3RhYmxlSW5wdXQiLCJzZWxlY3QiLCJ0b0xvd2VyQ2FzZSIsImZuIiwiY3JlYXRlRm9jdXNUcmFwSW5zdGFuY2UiLCJzdXJmYWNlRWwiLCJmb2N1c1RyYXBGYWN0b3J5IiwiY3JlYXRlRm9jdXNUcmFwIiwiaW5pdGlhbEZvY3VzRWwiLCJpbml0aWFsRm9jdXMiLCJpc1Njcm9sbGFibGUiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJhcmVUb3BzTWlzYWxpZ25lZCIsImVscyIsInRvcHMiLCJTZXQiLCJmb3JFYWNoIiwiYWRkIiwib2Zmc2V0VG9wIiwic2l6ZSIsIk1EQ0NvbXBvbmVudCIsInJvb3QiLCJmb3VuZGF0aW9uIiwicm9vdF8iLCJpbml0aWFsaXplIiwiZm91bmRhdGlvbl8iLCJnZXREZWZhdWx0Rm91bmRhdGlvbiIsImluaXQiLCJpbml0aWFsU3luY1dpdGhET00iLCJkZXN0cm95IiwiZXZ0VHlwZSIsImhhbmRsZXIiLCJldnREYXRhIiwic2hvdWxkQnViYmxlIiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJNRENSaXBwbGVBZGFwdGVyIiwidmFyTmFtZSIsInZhbHVlIiwiUk9PVCIsIlVOQk9VTkRFRCIsIkJHX0ZPQ1VTRUQiLCJGR19BQ1RJVkFUSU9OIiwiRkdfREVBQ1RJVkFUSU9OIiwiVkFSX0xFRlQiLCJWQVJfVE9QIiwiVkFSX0ZHX1NJWkUiLCJWQVJfRkdfU0NBTEUiLCJWQVJfRkdfVFJBTlNMQVRFX1NUQVJUIiwiVkFSX0ZHX1RSQU5TTEFURV9FTkQiLCJQQURESU5HIiwiSU5JVElBTF9PUklHSU5fU0NBTEUiLCJERUFDVElWQVRJT05fVElNRU9VVF9NUyIsIkZHX0RFQUNUSVZBVElPTl9NUyIsIlRBUF9ERUxBWV9NUyIsInN1cHBvcnRzQ3NzVmFyaWFibGVzXyIsInN1cHBvcnRzUGFzc2l2ZV8iLCJkZXRlY3RFZGdlUHNldWRvVmFyQnVnIiwid2luZG93T2JqIiwiYm9keSIsImFwcGVuZENoaWxkIiwiaGFzUHNldWRvVmFyQnVnIiwiYm9yZGVyVG9wU3R5bGUiLCJyZW1vdmUiLCJzdXBwb3J0c0Nzc1ZhcmlhYmxlcyIsImZvcmNlUmVmcmVzaCIsInN1cHBvcnRzRnVuY3Rpb25QcmVzZW50IiwiQ1NTIiwic3VwcG9ydHMiLCJleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIiwid2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzIiwiYXBwbHlQYXNzaXZlIiwiZ2xvYmFsT2JqIiwiaXNTdXBwb3J0ZWQiLCJwYXNzaXZlIiwiZ2V0TWF0Y2hlc1Byb3BlcnR5IiwiSFRNTEVsZW1lbnRQcm90b3R5cGUiLCJtYXRjaGVzTWV0aG9kcyIsIm1ldGhvZCIsIm1hdGNoZXNNZXRob2QiLCJnZXROb3JtYWxpemVkRXZlbnRDb29yZHMiLCJldiIsInBhZ2VPZmZzZXQiLCJjbGllbnRSZWN0IiwieCIsInkiLCJkb2N1bWVudFgiLCJsZWZ0IiwiZG9jdW1lbnRZIiwidG9wIiwibm9ybWFsaXplZFgiLCJub3JtYWxpemVkWSIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIkFDVElWQVRJT05fRVZFTlRfVFlQRVMiLCJQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyIsImFjdGl2YXRlZFRhcmdldHMiLCJNRENSaXBwbGVGb3VuZGF0aW9uIiwiYnJvd3NlclN1cHBvcnRzQ3NzVmFycyIsImlzVW5ib3VuZGVkIiwiaXNTdXJmYWNlQWN0aXZlIiwiaXNTdXJmYWNlRGlzYWJsZWQiLCJjb250YWluc0V2ZW50VGFyZ2V0IiwicmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyUmVzaXplSGFuZGxlciIsImRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwidXBkYXRlQ3NzVmFyaWFibGUiLCJjb21wdXRlQm91bmRpbmdSZWN0IiwiZ2V0V2luZG93UGFnZU9mZnNldCIsImZyYW1lXyIsIndpZHRoIiwiaGVpZ2h0IiwiYWN0aXZhdGlvblN0YXRlXyIsImRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfIiwiaW5pdGlhbFNpemVfIiwibWF4UmFkaXVzXyIsImFjdGl2YXRlSGFuZGxlcl8iLCJhY3RpdmF0ZV8iLCJkZWFjdGl2YXRlSGFuZGxlcl8iLCJkZWFjdGl2YXRlXyIsImZvY3VzSGFuZGxlcl8iLCJoYW5kbGVGb2N1cyIsImJsdXJIYW5kbGVyXyIsImhhbmRsZUJsdXIiLCJyZXNpemVIYW5kbGVyXyIsInVuYm91bmRlZENvb3Jkc18iLCJmZ1NjYWxlXyIsImFjdGl2YXRpb25UaW1lcl8iLCJmZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8iLCJhY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfIiwiYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfIiwicnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfIiwicHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfIiwiaXNBY3RpdmF0ZWQiLCJoYXNEZWFjdGl2YXRpb25VWFJ1biIsIndhc0FjdGl2YXRlZEJ5UG9pbnRlciIsIndhc0VsZW1lbnRNYWRlQWN0aXZlIiwiYWN0aXZhdGlvbkV2ZW50IiwiaXNQcm9ncmFtbWF0aWMiLCJzdXBwb3J0c1ByZXNzUmlwcGxlIiwic3VwcG9ydHNQcmVzc1JpcHBsZV8iLCJyZWdpc3RlclJvb3RIYW5kbGVyc18iLCJyZW1vdmVDc3NWYXJzXyIsImRlcmVnaXN0ZXJSb290SGFuZGxlcnNfIiwiZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyIsImtleXMiLCJrIiwiYWN0aXZhdGlvblN0YXRlIiwicHJldmlvdXNBY3RpdmF0aW9uRXZlbnQiLCJpc1NhbWVJbnRlcmFjdGlvbiIsImhhc0FjdGl2YXRlZENoaWxkIiwic29tZSIsInJlc2V0QWN0aXZhdGlvblN0YXRlXyIsInJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfIiwiY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8iLCJhbmltYXRlQWN0aXZhdGlvbl8iLCJ0cmFuc2xhdGVTdGFydCIsInRyYW5zbGF0ZUVuZCIsImdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18iLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18iLCJhY3RpdmF0aW9uSGFzRW5kZWQiLCJhbmltYXRlRGVhY3RpdmF0aW9uXyIsIm1heERpbSIsIm1heCIsImdldEJvdW5kZWRSYWRpdXMiLCJoeXBvdGVudXNlIiwic3FydCIsInBvdyIsInVwZGF0ZUxheW91dENzc1ZhcnNfIiwicm91bmQiLCJ1bmJvdW5kZWQiLCJNRENSaXBwbGUiLCJ1bmJvdW5kZWRfIiwic2V0VW5ib3VuZGVkIiwiY3JlYXRlQWRhcHRlciIsImRhdGFzZXQiLCJzZXRVbmJvdW5kZWRfIiwicmlwcGxlIiwiaW5zdGFuY2UiLCJNQVRDSEVTIiwidXRpbCIsIkhUTUxFbGVtZW50IiwiY2xhc3NMaXN0Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJSaXBwbGVDYXBhYmxlU3VyZmFjZSIsIlJpcHBsZUJhc2UiLCJyZWYiLCJfbWF0Y2hlcyIsIiRlbCIsIiRzZXQiLCJjbGFzc2VzIiwiJGRlbGV0ZSIsInN0eWxlcyIsIlJpcHBsZU1peGluIiwibW91bnRlZCIsImJlZm9yZURlc3Ryb3kiLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsIm5hdGl2ZU1hdGNoZXMiLCJtZGNEaWFsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtJQUMvQjtJQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztJQUNBLE1BQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztJQUNqQ0QsSUFBQUEsSUFBSSxHQUFHQyxNQUFNLENBQUNDLEdBQWQ7SUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0lBQ3hDO0lBQ0FILElBQUFBLElBQUksR0FBR0csTUFBTSxDQUFDRCxHQUFkO0lBQ0Q7O0lBQ0QsTUFBSUYsSUFBSixFQUFVO0lBQ1JBLElBQUFBLElBQUksQ0FBQ0ksR0FBTCxDQUFTTCxNQUFUO0lB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
