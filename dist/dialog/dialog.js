/**
* @module vue-mdc-adapterdialog 0.19.3-beta
* @exports VueMDCDialog
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
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
        version: '0.19.3-beta',
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
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$3.__file = "/ddata/extra/vma/components/dialog/mdc-dialog.vue";

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
      

      
      var mdcDialog = normalizeComponent(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXV0by1pbml0LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Jhc2UtcGx1Z2luLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1lbGVtZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1ldmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tYnV0dG9uLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Rpc3BhdGNoLWV2ZW50LW1peGluLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RpYWxvZy9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kaWFsb2cvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kaWFsb2cvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy90YWJiYWJsZS9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RpYWxvZy9ub2RlX21vZHVsZXMvZm9jdXMtdHJhcC9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZGlhbG9nL3V0aWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLWJhc2UuanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLnZ1ZSIsIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtcnVudGltZS1oZWxwZXJzL25vcm1hbGl6ZS1jb21wb25lbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2J1dHRvbi9tZGMtYnV0dG9uLWJhc2UudnVlIiwiLi4vLi4vY29tcG9uZW50cy9idXR0b24vbWRjLWJ1dHRvbi52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9wb255ZmlsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9mb2N1cy10cmFwL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvbWRjLWRpYWxvZy52dWUiLCIuLi8uLi9jb21wb25lbnRzL2RpYWxvZy9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHtcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIGNvbnRleHQucHJvcHMuaXMgfHwgY29udGV4dC5wcm9wcy50YWcgfHwgJ2RpdicsXG4gICAgICBjb250ZXh0LmRhdGEsXG4gICAgICBjb250ZXh0LmNoaWxkcmVuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50TWl4aW4gPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21FbGVtZW50XG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImV4cG9ydCBjb25zdCBDdXN0b21CdXR0b24gPSB7XG4gIG5hbWU6ICdjdXN0b20tYnV0dG9uJyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICBsaW5rOiBPYmplY3RcbiAgfSxcbiAgcmVuZGVyKGgsIGNvbnRleHQpIHtcbiAgICBsZXQgZWxlbWVudFxuICAgIGxldCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dC5kYXRhKVxuXG4gICAgaWYgKGNvbnRleHQucHJvcHMubGluayAmJiBjb250ZXh0LnBhcmVudC4kcm91dGVyKSB7XG4gICAgICAvLyByb3V0ZXItbGluayBjYXNlXG4gICAgICBlbGVtZW50ID0gY29udGV4dC5wYXJlbnQuJHJvb3QuJG9wdGlvbnMuY29tcG9uZW50c1sncm91dGVyLWxpbmsnXVxuICAgICAgZGF0YS5wcm9wcyA9IE9iamVjdC5hc3NpZ24oeyB0YWc6IGNvbnRleHQucHJvcHMudGFnIH0sIGNvbnRleHQucHJvcHMubGluaylcbiAgICAgIGRhdGEuYXR0cnMucm9sZSA9ICdidXR0b24nXG4gICAgICBpZiAoZGF0YS5vbi5jbGljaykge1xuICAgICAgICBkYXRhLm5hdGl2ZU9uID0geyBjbGljazogZGF0YS5vbi5jbGljayB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhLmF0dHJzICYmIGRhdGEuYXR0cnMuaHJlZikge1xuICAgICAgLy8gaHJlZiBjYXNlXG4gICAgICBlbGVtZW50ID0gJ2EnXG4gICAgICBkYXRhLmF0dHJzLnJvbGUgPSAnYnV0dG9uJ1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBidXR0b24gZmFsbGJhY2tcbiAgICAgIGVsZW1lbnQgPSAnYnV0dG9uJ1xuICAgIH1cblxuICAgIHJldHVybiBoKGVsZW1lbnQsIGRhdGEsIGNvbnRleHQuY2hpbGRyZW4pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUJ1dHRvbk1peGluID0ge1xuICBwcm9wczoge1xuICAgIGhyZWY6IFN0cmluZyxcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICB0bzogW1N0cmluZywgT2JqZWN0XSxcbiAgICBleGFjdDogQm9vbGVhbixcbiAgICBhcHBlbmQ6IEJvb2xlYW4sXG4gICAgcmVwbGFjZTogQm9vbGVhbixcbiAgICBhY3RpdmVDbGFzczogU3RyaW5nLFxuICAgIGV4YWN0QWN0aXZlQ2xhc3M6IFN0cmluZ1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpbmsoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLnRvICYmIHtcbiAgICAgICAgICB0bzogdGhpcy50byxcbiAgICAgICAgICBleGFjdDogdGhpcy5leGFjdCxcbiAgICAgICAgICBhcHBlbmQ6IHRoaXMuYXBwZW5kLFxuICAgICAgICAgIHJlcGxhY2U6IHRoaXMucmVwbGFjZSxcbiAgICAgICAgICBhY3RpdmVDbGFzczogdGhpcy5hY3RpdmVDbGFzcyxcbiAgICAgICAgICBleGFjdEFjdGl2ZUNsYXNzOiB0aGlzLmV4YWN0QWN0aXZlQ2xhc3NcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUJ1dHRvblxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgRGlzcGF0Y2hFdmVudE1peGluID0ge1xuICBwcm9wczoge1xuICAgIGV2ZW50OiBTdHJpbmcsXG4gICAgJ2V2ZW50LXRhcmdldCc6IE9iamVjdCxcbiAgICAnZXZlbnQtYXJncyc6IEFycmF5XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBkaXNwYXRjaEV2ZW50KGV2dCkge1xuICAgICAgZXZ0ICYmIHRoaXMuJGVtaXQoZXZ0LnR5cGUsIGV2dClcbiAgICAgIGlmICh0aGlzLmV2ZW50KSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmV2ZW50VGFyZ2V0IHx8IHRoaXMuJHJvb3RcbiAgICAgICAgbGV0IGFyZ3MgPSB0aGlzLmV2ZW50QXJncyB8fCBbXVxuICAgICAgICB0YXJnZXQuJGVtaXQodGhpcy5ldmVudCwgLi4uYXJncylcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbGlzdGVuZXJzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy4kbGlzdGVuZXJzLFxuICAgICAgICBjbGljazogZSA9PiB0aGlzLmRpc3BhdGNoRXZlbnQoZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0IHNjb3BlID1cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigweDEwMDAwMDAwKSkudG9TdHJpbmcoKSArICctJ1xuXG5leHBvcnQgY29uc3QgVk1BVW5pcXVlSWRNaXhpbiA9IHtcbiAgYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMudm1hX3VpZF8gPSBzY29wZSArIHRoaXMuX3VpZFxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgQVxuICovXG5jbGFzcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bXtjc3NDbGFzc2VzfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17bnVtYmVyc30gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiB7IU9iamVjdH0gKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgLy8gdmFsaWRhdGlvbi5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciA9IHt9KSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFBfSAqL1xuICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBEaWFsb2cuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmc6XG4gKiAtIENTUyBjbGFzc2VzXG4gKiAtIERPTVxuICogLSBFdmVudCBoYW5kbGVyc1xuICpcbiAqIEFkZGl0aW9uYWxseSwgcHJvdmlkZXMgdHlwZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGFkYXB0ZXIgdG8gdGhlIENsb3N1cmVcbiAqIGNvbXBpbGVyLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGFkYXB0ZXIgZm9yIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZSB0byBkZWxlZ2F0ZSB1cGRhdGVzIHRvXG4gKiB0aGUgY29tcG9uZW50IGluIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZS4gU2VlIGFyY2hpdGVjdHVyZSBkb2N1bWVudGF0aW9uXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9jb2RlL2FyY2hpdGVjdHVyZS5tZFxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDRGlhbG9nQWRhcHRlciB7XG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBhZGRCb2R5Q2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIHJlbW92ZUJvZHlDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50VGFyZ2V0fSB0YXJnZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBldmVudFRhcmdldE1hdGNoZXModGFyZ2V0LCBzZWxlY3Rvcikge31cblxuICB0cmFwRm9jdXMoKSB7fVxuICByZWxlYXNlRm9jdXMoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc0NvbnRlbnRTY3JvbGxhYmxlKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgYXJlQnV0dG9uc1N0YWNrZWQoKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAgICogQHJldHVybiB7P3N0cmluZ31cbiAgICovXG4gIGdldEFjdGlvbkZyb21FdmVudChldmVudCkge31cblxuICBjbGlja0RlZmF1bHRCdXR0b24oKSB7fVxuICByZXZlcnNlQnV0dG9ucygpIHt9XG5cbiAgbm90aWZ5T3BlbmluZygpIHt9XG4gIG5vdGlmeU9wZW5lZCgpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25cbiAgICovXG4gIG5vdGlmeUNsb3NpbmcoYWN0aW9uKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uXG4gICAqL1xuICBub3RpZnlDbG9zZWQoYWN0aW9uKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENEaWFsb2dBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIE9QRU46ICdtZGMtZGlhbG9nLS1vcGVuJyxcbiAgT1BFTklORzogJ21kYy1kaWFsb2ctLW9wZW5pbmcnLFxuICBDTE9TSU5HOiAnbWRjLWRpYWxvZy0tY2xvc2luZycsXG4gIFNDUk9MTEFCTEU6ICdtZGMtZGlhbG9nLS1zY3JvbGxhYmxlJyxcbiAgU1RBQ0tFRDogJ21kYy1kaWFsb2ctLXN0YWNrZWQnLFxuICBTQ1JPTExfTE9DSzogJ21kYy1kaWFsb2ctc2Nyb2xsLWxvY2snLFxufTtcblxuY29uc3Qgc3RyaW5ncyA9IHtcbiAgU0NSSU1fU0VMRUNUT1I6ICcubWRjLWRpYWxvZ19fc2NyaW0nLFxuICBDT05UQUlORVJfU0VMRUNUT1I6ICcubWRjLWRpYWxvZ19fY29udGFpbmVyJyxcbiAgU1VSRkFDRV9TRUxFQ1RPUjogJy5tZGMtZGlhbG9nX19zdXJmYWNlJyxcbiAgQ09OVEVOVF9TRUxFQ1RPUjogJy5tZGMtZGlhbG9nX19jb250ZW50JyxcbiAgQlVUVE9OX1NFTEVDVE9SOiAnLm1kYy1kaWFsb2dfX2J1dHRvbicsXG4gIERFRkFVTFRfQlVUVE9OX1NFTEVDVE9SOiAnLm1kYy1kaWFsb2dfX2J1dHRvbi0tZGVmYXVsdCcsXG4gIFNVUFBSRVNTX0RFRkFVTFRfUFJFU1NfU0VMRUNUT1I6IFtcbiAgICAndGV4dGFyZWEnLFxuICAgICcubWRjLW1lbnUgLm1kYy1saXN0LWl0ZW0nLFxuICBdLmpvaW4oJywgJyksXG5cbiAgT1BFTklOR19FVkVOVDogJ01EQ0RpYWxvZzpvcGVuaW5nJyxcbiAgT1BFTkVEX0VWRU5UOiAnTURDRGlhbG9nOm9wZW5lZCcsXG4gIENMT1NJTkdfRVZFTlQ6ICdNRENEaWFsb2c6Y2xvc2luZycsXG4gIENMT1NFRF9FVkVOVDogJ01EQ0RpYWxvZzpjbG9zZWQnLFxuXG4gIEFDVElPTl9BVFRSSUJVVEU6ICdkYXRhLW1kYy1kaWFsb2ctYWN0aW9uJyxcblxuICBDTE9TRV9BQ1RJT046ICdjbG9zZScsXG4gIERFU1RST1lfQUNUSU9OOiAnZGVzdHJveScsXG59O1xuXG5jb25zdCBudW1iZXJzID0ge1xuICBESUFMT0dfQU5JTUFUSU9OX09QRU5fVElNRV9NUzogMTUwLFxuICBESUFMT0dfQU5JTUFUSU9OX0NMT1NFX1RJTUVfTVM6IDc1LFxufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENEaWFsb2dBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY2xhc3MgTURDRGlhbG9nRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENEaWFsb2dBZGFwdGVyfSAqLyAoe1xuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGhhc0NsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgYWRkQm9keUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlQm9keUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgZXZlbnRUYXJnZXRNYXRjaGVzOiAoLyogdGFyZ2V0OiAhRXZlbnRUYXJnZXQsIHNlbGVjdG9yOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgdHJhcEZvY3VzOiAoKSA9PiB7fSxcbiAgICAgIHJlbGVhc2VGb2N1czogKCkgPT4ge30sXG4gICAgICBpc0NvbnRlbnRTY3JvbGxhYmxlOiAoKSA9PiB7fSxcbiAgICAgIGFyZUJ1dHRvbnNTdGFja2VkOiAoKSA9PiB7fSxcbiAgICAgIGdldEFjdGlvbkZyb21FdmVudDogKC8qIGV2ZW50OiAhRXZlbnQgKi8pID0+IHt9LFxuICAgICAgY2xpY2tEZWZhdWx0QnV0dG9uOiAoKSA9PiB7fSxcbiAgICAgIHJldmVyc2VCdXR0b25zOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeU9wZW5pbmc6ICgpID0+IHt9LFxuICAgICAgbm90aWZ5T3BlbmVkOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeUNsb3Npbmc6ICgvKiBhY3Rpb246ID9zdHJpbmcgKi8pID0+IHt9LFxuICAgICAgbm90aWZ5Q2xvc2VkOiAoLyogYWN0aW9uOiA/c3RyaW5nICovKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENEaWFsb2dBZGFwdGVyPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDRGlhbG9nRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuaXNPcGVuXyA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hbmltYXRpb25UaW1lcl8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtzdHJpbmd9ICovXG4gICAgdGhpcy5lc2NhcGVLZXlBY3Rpb25fID0gc3RyaW5ncy5DTE9TRV9BQ1RJT047XG5cbiAgICAvKiogQHByaXZhdGUge3N0cmluZ30gKi9cbiAgICB0aGlzLnNjcmltQ2xpY2tBY3Rpb25fID0gc3RyaW5ncy5DTE9TRV9BQ1RJT047XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5hdXRvU3RhY2tCdXR0b25zXyA9IHRydWU7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5hcmVCdXR0b25zU3RhY2tlZF8gPSBmYWxzZTtcbiAgfTtcblxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuU1RBQ0tFRCkpIHtcbiAgICAgIHRoaXMuc2V0QXV0b1N0YWNrQnV0dG9ucyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuXykge1xuICAgICAgdGhpcy5jbG9zZShzdHJpbmdzLkRFU1RST1lfQUNUSU9OKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hbmltYXRpb25UaW1lcl8pIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgICB0aGlzLmhhbmRsZUFuaW1hdGlvblRpbWVyRW5kXygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5pc09wZW5fID0gdHJ1ZTtcbiAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeU9wZW5pbmcoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuT1BFTklORyk7XG5cbiAgICAvLyBXYWl0IGEgZnJhbWUgb25jZSBkaXNwbGF5IGlzIG5vIGxvbmdlciBcIm5vbmVcIiwgdG8gZXN0YWJsaXNoIGJhc2lzIGZvciBhbmltYXRpb25cbiAgICB0aGlzLnJ1bk5leHRBbmltYXRpb25GcmFtZV8oKCkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLk9QRU4pO1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRCb2R5Q2xhc3MoY3NzQ2xhc3Nlcy5TQ1JPTExfTE9DSyk7XG5cbiAgICAgIHRoaXMubGF5b3V0KCk7XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udHJhcEZvY3VzKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5T3BlbmVkKCk7XG4gICAgICB9LCBudW1iZXJzLkRJQUxPR19BTklNQVRJT05fT1BFTl9USU1FX01TKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvblxuICAgKi9cbiAgY2xvc2UoYWN0aW9uID0gJycpIHtcbiAgICBpZiAoIXRoaXMuaXNPcGVuXykge1xuICAgICAgLy8gQXZvaWQgcmVkdW5kYW50IGNsb3NlIGNhbGxzIChhbmQgZXZlbnRzKSwgZS5nLiBmcm9tIGtleWRvd24gb24gZWxlbWVudHMgdGhhdCBpbmhlcmVudGx5IGVtaXQgY2xpY2tcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzT3Blbl8gPSBmYWxzZTtcbiAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUNsb3NpbmcoYWN0aW9uKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQ0xPU0lORyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLk9QRU4pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQm9keUNsYXNzKGNzc0NsYXNzZXMuU0NST0xMX0xPQ0spO1xuXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZV8pO1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcblxuICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgdGhpcy5hbmltYXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVsZWFzZUZvY3VzKCk7XG4gICAgICB0aGlzLmhhbmRsZUFuaW1hdGlvblRpbWVyRW5kXygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDbG9zZWQoYWN0aW9uKTtcbiAgICB9LCBudW1iZXJzLkRJQUxPR19BTklNQVRJT05fQ0xPU0VfVElNRV9NUyk7XG4gIH1cblxuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuXztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtzdHJpbmd9ICovXG4gIGdldEVzY2FwZUtleUFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5lc2NhcGVLZXlBY3Rpb25fO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gKi9cbiAgc2V0RXNjYXBlS2V5QWN0aW9uKGFjdGlvbikge1xuICAgIHRoaXMuZXNjYXBlS2V5QWN0aW9uXyA9IGFjdGlvbjtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtzdHJpbmd9ICovXG4gIGdldFNjcmltQ2xpY2tBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NyaW1DbGlja0FjdGlvbl87XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiAqL1xuICBzZXRTY3JpbUNsaWNrQWN0aW9uKGFjdGlvbikge1xuICAgIHRoaXMuc2NyaW1DbGlja0FjdGlvbl8gPSBhY3Rpb247XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgZ2V0QXV0b1N0YWNrQnV0dG9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRvU3RhY2tCdXR0b25zXztcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IGF1dG9TdGFjayAqL1xuICBzZXRBdXRvU3RhY2tCdXR0b25zKGF1dG9TdGFjaykge1xuICAgIHRoaXMuYXV0b1N0YWNrQnV0dG9uc18gPSBhdXRvU3RhY2s7XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0RnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgfSk7XG4gIH1cblxuICBsYXlvdXRJbnRlcm5hbF8oKSB7XG4gICAgaWYgKHRoaXMuYXV0b1N0YWNrQnV0dG9uc18pIHtcbiAgICAgIHRoaXMuZGV0ZWN0U3RhY2tlZEJ1dHRvbnNfKCk7XG4gICAgfVxuICAgIHRoaXMuZGV0ZWN0U2Nyb2xsYWJsZUNvbnRlbnRfKCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGV0ZWN0U3RhY2tlZEJ1dHRvbnNfKCkge1xuICAgIC8vIFJlbW92ZSB0aGUgY2xhc3MgZmlyc3QgdG8gbGV0IHVzIG1lYXN1cmUgdGhlIGJ1dHRvbnMnIG5hdHVyYWwgcG9zaXRpb25zLlxuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5TVEFDS0VEKTtcblxuICAgIGNvbnN0IGFyZUJ1dHRvbnNTdGFja2VkID0gdGhpcy5hZGFwdGVyXy5hcmVCdXR0b25zU3RhY2tlZCgpO1xuXG4gICAgaWYgKGFyZUJ1dHRvbnNTdGFja2VkKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuU1RBQ0tFRCk7XG4gICAgfVxuXG4gICAgaWYgKGFyZUJ1dHRvbnNTdGFja2VkICE9PSB0aGlzLmFyZUJ1dHRvbnNTdGFja2VkXykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZXZlcnNlQnV0dG9ucygpO1xuICAgICAgdGhpcy5hcmVCdXR0b25zU3RhY2tlZF8gPSBhcmVCdXR0b25zU3RhY2tlZDtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGV0ZWN0U2Nyb2xsYWJsZUNvbnRlbnRfKCkge1xuICAgIC8vIFJlbW92ZSB0aGUgY2xhc3MgZmlyc3QgdG8gbGV0IHVzIG1lYXN1cmUgdGhlIG5hdHVyYWwgaGVpZ2h0IG9mIHRoZSBjb250ZW50LlxuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5TQ1JPTExBQkxFKTtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc0NvbnRlbnRTY3JvbGxhYmxlKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5TQ1JPTExBQkxFKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KSB7XG4gICAgY29uc3QgaXNDbGljayA9IGV2dC50eXBlID09PSAnY2xpY2snO1xuICAgIGNvbnN0IGlzRW50ZXIgPSBldnQua2V5ID09PSAnRW50ZXInIHx8IGV2dC5rZXlDb2RlID09PSAxMztcblxuICAgIC8vIENoZWNrIGZvciBzY3JpbSBjbGljayBmaXJzdCBzaW5jZSBpdCBkb2Vzbid0IHJlcXVpcmUgcXVlcnlpbmcgYW5jZXN0b3JzXG4gICAgaWYgKGlzQ2xpY2sgJiYgdGhpcy5hZGFwdGVyXy5ldmVudFRhcmdldE1hdGNoZXMoZXZ0LnRhcmdldCwgc3RyaW5ncy5TQ1JJTV9TRUxFQ1RPUikgJiZcbiAgICAgIHRoaXMuc2NyaW1DbGlja0FjdGlvbl8gIT09ICcnKSB7XG4gICAgICB0aGlzLmNsb3NlKHRoaXMuc2NyaW1DbGlja0FjdGlvbl8pO1xuICAgIH0gZWxzZSBpZiAoaXNDbGljayB8fCBldnQua2V5ID09PSAnU3BhY2UnIHx8IGV2dC5rZXlDb2RlID09PSAzMiB8fCBpc0VudGVyKSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFkYXB0ZXJfLmdldEFjdGlvbkZyb21FdmVudChldnQpO1xuICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICB0aGlzLmNsb3NlKGFjdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKGlzRW50ZXIgJiYgIXRoaXMuYWRhcHRlcl8uZXZlbnRUYXJnZXRNYXRjaGVzKGV2dC50YXJnZXQsIHN0cmluZ3MuU1VQUFJFU1NfREVGQVVMVF9QUkVTU19TRUxFQ1RPUikpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5jbGlja0RlZmF1bHRCdXR0b24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshS2V5Ym9hcmRFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoYW5kbGVEb2N1bWVudEtleWRvd24oZXZ0KSB7XG4gICAgaWYgKChldnQua2V5ID09PSAnRXNjYXBlJyB8fCBldnQua2V5Q29kZSA9PT0gMjcpICYmIHRoaXMuZXNjYXBlS2V5QWN0aW9uXyAhPT0gJycpIHtcbiAgICAgIHRoaXMuY2xvc2UodGhpcy5lc2NhcGVLZXlBY3Rpb25fKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gMDtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuT1BFTklORyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkNMT1NJTkcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgdGhlIGdpdmVuIGxvZ2ljIG9uIHRoZSBuZXh0IGFuaW1hdGlvbiBmcmFtZSwgdXNpbmcgc2V0VGltZW91dCB0byBmYWN0b3IgaW4gRmlyZWZveCByZWZsb3cgYmVoYXZpb3IuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBydW5OZXh0QW5pbWF0aW9uRnJhbWVfKGNhbGxiYWNrKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZV8pO1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0RpYWxvZ0ZvdW5kYXRpb247XG4iLCJ2YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gW1xuICAnaW5wdXQnLFxuICAnc2VsZWN0JyxcbiAgJ3RleHRhcmVhJyxcbiAgJ2FbaHJlZl0nLFxuICAnYnV0dG9uJyxcbiAgJ1t0YWJpbmRleF0nLFxuICAnYXVkaW9bY29udHJvbHNdJyxcbiAgJ3ZpZGVvW2NvbnRyb2xzXScsXG4gICdbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCJdKScsXG5dO1xudmFyIGNhbmRpZGF0ZVNlbGVjdG9yID0gY2FuZGlkYXRlU2VsZWN0b3JzLmpvaW4oJywnKTtcblxudmFyIG1hdGNoZXMgPSB0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCdcbiAgPyBmdW5jdGlvbiAoKSB7fVxuICA6IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXG5mdW5jdGlvbiB0YWJiYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgZWxlbWVudERvY3VtZW50ID0gZWwub3duZXJEb2N1bWVudCB8fCBlbDtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcblxuICB2YXIgdW50b3VjaGFiaWxpdHlDaGVja2VyID0gbmV3IFVudG91Y2hhYmlsaXR5Q2hlY2tlcihlbGVtZW50RG9jdW1lbnQpO1xuICB2YXIgY2FuZGlkYXRlcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2FuZGlkYXRlU2VsZWN0b3IpO1xuXG4gIGlmIChvcHRpb25zLmluY2x1ZGVDb250YWluZXIpIHtcbiAgICBpZiAobWF0Y2hlcy5jYWxsKGVsLCBjYW5kaWRhdGVTZWxlY3RvcikpIHtcbiAgICAgIGNhbmRpZGF0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoY2FuZGlkYXRlcyk7XG4gICAgICBjYW5kaWRhdGVzLnVuc2hpZnQoZWwpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpLCBjYW5kaWRhdGUsIGNhbmRpZGF0ZVRhYmluZGV4O1xuICBmb3IgKGkgPSAwOyBpIDwgY2FuZGlkYXRlcy5sZW5ndGg7IGkrKykge1xuICAgIGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZXNbaV07XG5cbiAgICBpZiAoIWlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShjYW5kaWRhdGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcikpIGNvbnRpbnVlO1xuXG4gICAgY2FuZGlkYXRlVGFiaW5kZXggPSBnZXRUYWJpbmRleChjYW5kaWRhdGUpO1xuICAgIGlmIChjYW5kaWRhdGVUYWJpbmRleCA9PT0gMCkge1xuICAgICAgcmVndWxhclRhYmJhYmxlcy5wdXNoKGNhbmRpZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yZGVyZWRUYWJiYWJsZXMucHVzaCh7XG4gICAgICAgIGRvY3VtZW50T3JkZXI6IGksXG4gICAgICAgIHRhYkluZGV4OiBjYW5kaWRhdGVUYWJpbmRleCxcbiAgICAgICAgbm9kZTogY2FuZGlkYXRlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHRhYmJhYmxlTm9kZXMgPSBvcmRlcmVkVGFiYmFibGVzXG4gICAgLnNvcnQoc29ydE9yZGVyZWRUYWJiYWJsZXMpXG4gICAgLm1hcChmdW5jdGlvbihhKSB7IHJldHVybiBhLm5vZGUgfSlcbiAgICAuY29uY2F0KHJlZ3VsYXJUYWJiYWJsZXMpO1xuXG4gIHJldHVybiB0YWJiYWJsZU5vZGVzO1xufVxuXG50YWJiYWJsZS5pc1RhYmJhYmxlID0gaXNUYWJiYWJsZTtcbnRhYmJhYmxlLmlzRm9jdXNhYmxlID0gaXNGb2N1c2FibGU7XG5cbmZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpIHtcbiAgaWYgKFxuICAgICFpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcilcbiAgICB8fCBpc05vblRhYmJhYmxlUmFkaW8obm9kZSlcbiAgICB8fCBnZXRUYWJpbmRleChub2RlKSA8IDBcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc1RhYmJhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcikge1xuICBpZiAoIW5vZGUpIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpO1xufVxuXG5mdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcikge1xuICB1bnRvdWNoYWJpbGl0eUNoZWNrZXIgPSB1bnRvdWNoYWJpbGl0eUNoZWNrZXIgfHwgbmV3IFVudG91Y2hhYmlsaXR5Q2hlY2tlcihub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZSk7XG4gIGlmIChcbiAgICBub2RlLmRpc2FibGVkXG4gICAgfHwgaXNIaWRkZW5JbnB1dChub2RlKVxuICAgIHx8IHVudG91Y2hhYmlsaXR5Q2hlY2tlci5pc1VudG91Y2hhYmxlKG5vZGUpXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxudmFyIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yID0gY2FuZGlkYXRlU2VsZWN0b3JzLmNvbmNhdCgnaWZyYW1lJykuam9pbignLCcpO1xuZnVuY3Rpb24gaXNGb2N1c2FibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKSB7XG4gIGlmICghbm9kZSkgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpO1xufVxuXG5mdW5jdGlvbiBnZXRUYWJpbmRleChub2RlKSB7XG4gIHZhciB0YWJpbmRleEF0dHIgPSBwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSwgMTApO1xuICBpZiAoIWlzTmFOKHRhYmluZGV4QXR0cikpIHJldHVybiB0YWJpbmRleEF0dHI7XG4gIC8vIEJyb3dzZXJzIGRvIG5vdCByZXR1cm4gYHRhYkluZGV4YCBjb3JyZWN0bHkgZm9yIGNvbnRlbnRFZGl0YWJsZSBub2RlcztcbiAgLy8gc28gaWYgdGhleSBkb24ndCBoYXZlIGEgdGFiaW5kZXggYXR0cmlidXRlIHNwZWNpZmljYWxseSBzZXQsIGFzc3VtZSBpdCdzIDAuXG4gIGlmIChpc0NvbnRlbnRFZGl0YWJsZShub2RlKSkgcmV0dXJuIDA7XG4gIHJldHVybiBub2RlLnRhYkluZGV4O1xufVxuXG5mdW5jdGlvbiBzb3J0T3JkZXJlZFRhYmJhYmxlcyhhLCBiKSB7XG4gIHJldHVybiBhLnRhYkluZGV4ID09PSBiLnRhYkluZGV4ID8gYS5kb2N1bWVudE9yZGVyIC0gYi5kb2N1bWVudE9yZGVyIDogYS50YWJJbmRleCAtIGIudGFiSW5kZXg7XG59XG5cbi8vIEFycmF5LnByb3RvdHlwZS5maW5kIG5vdCBhdmFpbGFibGUgaW4gSUUuXG5mdW5jdGlvbiBmaW5kKGxpc3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gbGlzdC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChwcmVkaWNhdGUobGlzdFtpXSkpIHJldHVybiBsaXN0W2ldO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQ29udGVudEVkaXRhYmxlKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZSc7XG59XG5cbmZ1bmN0aW9uIGlzSW5wdXQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU5QVVQnO1xufVxuXG5mdW5jdGlvbiBpc0hpZGRlbklucHV0KG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAnaGlkZGVuJztcbn1cblxuZnVuY3Rpb24gaXNSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ3JhZGlvJztcbn1cblxuZnVuY3Rpb24gaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzUmFkaW8obm9kZSkgJiYgIWlzVGFiYmFibGVSYWRpbyhub2RlKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2hlY2tlZFJhZGlvKG5vZGVzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm9kZXNbaV0uY2hlY2tlZCkge1xuICAgICAgcmV0dXJuIG5vZGVzW2ldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc1RhYmJhYmxlUmFkaW8obm9kZSkge1xuICBpZiAoIW5vZGUubmFtZSkgcmV0dXJuIHRydWU7XG4gIC8vIFRoaXMgd29uJ3QgYWNjb3VudCBmb3IgdGhlIGVkZ2UgY2FzZSB3aGVyZSB5b3UgaGF2ZSByYWRpbyBncm91cHMgd2l0aCB0aGUgc2FtZVxuICAvLyBpbiBzZXBhcmF0ZSBmb3JtcyBvbiB0aGUgc2FtZSBwYWdlLlxuICB2YXIgcmFkaW9TZXQgPSBub2RlLm93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCInICsgbm9kZS5uYW1lICsgJ1wiXScpO1xuICB2YXIgY2hlY2tlZCA9IGdldENoZWNrZWRSYWRpbyhyYWRpb1NldCk7XG4gIHJldHVybiAhY2hlY2tlZCB8fCBjaGVja2VkID09PSBub2RlO1xufVxuXG4vLyBBbiBlbGVtZW50IGlzIFwidW50b3VjaGFibGVcIiBpZiAqaXQgb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMqIGhhc1xuLy8gYHZpc2liaWxpdHk6IGhpZGRlbmAgb3IgYGRpc3BsYXk6IG5vbmVgLlxuZnVuY3Rpb24gVW50b3VjaGFiaWxpdHlDaGVja2VyKGVsZW1lbnREb2N1bWVudCkge1xuICB0aGlzLmRvYyA9IGVsZW1lbnREb2N1bWVudDtcbiAgLy8gTm9kZSBjYWNoZSBtdXN0IGJlIHJlZnJlc2hlZCBvbiBldmVyeSBjaGVjaywgaW4gY2FzZVxuICAvLyB0aGUgY29udGVudCBvZiB0aGUgZWxlbWVudCBoYXMgY2hhbmdlZC4gVGhlIGNhY2hlIGNvbnRhaW5zIHR1cGxlc1xuICAvLyBtYXBwaW5nIG5vZGVzIHRvIHRoZWlyIGJvb2xlYW4gcmVzdWx0LlxuICB0aGlzLmNhY2hlID0gW107XG59XG5cbi8vIGdldENvbXB1dGVkU3R5bGUgYWNjdXJhdGVseSByZWZsZWN0cyBgdmlzaWJpbGl0eTogaGlkZGVuYCBvZiBhbmNlc3RvcnNcbi8vIGJ1dCBub3QgYGRpc3BsYXk6IG5vbmVgLCBzbyB3ZSBuZWVkIHRvIHJlY3Vyc2l2ZWx5IGNoZWNrIHBhcmVudHMuXG5VbnRvdWNoYWJpbGl0eUNoZWNrZXIucHJvdG90eXBlLmhhc0Rpc3BsYXlOb25lID0gZnVuY3Rpb24gaGFzRGlzcGxheU5vbmUobm9kZSwgbm9kZUNvbXB1dGVkU3R5bGUpIHtcbiAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBTZWFyY2ggZm9yIGEgY2FjaGVkIHJlc3VsdC5cbiAgICB2YXIgY2FjaGVkID0gZmluZCh0aGlzLmNhY2hlLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbSA9PT0gbm9kZTtcbiAgICB9KTtcbiAgICBpZiAoY2FjaGVkKSByZXR1cm4gY2FjaGVkWzFdO1xuXG4gICAgbm9kZUNvbXB1dGVkU3R5bGUgPSBub2RlQ29tcHV0ZWRTdHlsZSB8fCB0aGlzLmRvYy5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgaWYgKG5vZGVDb21wdXRlZFN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5oYXNEaXNwbGF5Tm9uZShub2RlLnBhcmVudE5vZGUpO1xuICAgIH1cblxuICAgIHRoaXMuY2FjaGUucHVzaChbbm9kZSwgcmVzdWx0XSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5VbnRvdWNoYWJpbGl0eUNoZWNrZXIucHJvdG90eXBlLmlzVW50b3VjaGFibGUgPSBmdW5jdGlvbiBpc1VudG91Y2hhYmxlKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IHRoaXMuZG9jLmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIGlmICh0aGlzLmhhc0Rpc3BsYXlOb25lKG5vZGUsIGNvbXB1dGVkU3R5bGUpKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGNvbXB1dGVkU3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbic7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGFiYmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIiwidmFyIHRhYmJhYmxlID0gcmVxdWlyZSgndGFiYmFibGUnKTtcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG5cbnZhciBhY3RpdmVGb2N1c1RyYXBzID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdHJhcFF1ZXVlID0gW107XG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVUcmFwOiBmdW5jdGlvbih0cmFwKSB7XG4gICAgICBpZiAodHJhcFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGFjdGl2ZVRyYXAgPSB0cmFwUXVldWVbdHJhcFF1ZXVlLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoYWN0aXZlVHJhcCAhPT0gdHJhcCkge1xuICAgICAgICAgIGFjdGl2ZVRyYXAucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdHJhcEluZGV4ID0gdHJhcFF1ZXVlLmluZGV4T2YodHJhcCk7XG4gICAgICBpZiAodHJhcEluZGV4ID09PSAtMSkge1xuICAgICAgICB0cmFwUXVldWUucHVzaCh0cmFwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG1vdmUgdGhpcyBleGlzdGluZyB0cmFwIHRvIHRoZSBmcm9udCBvZiB0aGUgcXVldWVcbiAgICAgICAgdHJhcFF1ZXVlLnNwbGljZSh0cmFwSW5kZXgsIDEpO1xuICAgICAgICB0cmFwUXVldWUucHVzaCh0cmFwKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGVhY3RpdmF0ZVRyYXA6IGZ1bmN0aW9uKHRyYXApIHtcbiAgICAgIHZhciB0cmFwSW5kZXggPSB0cmFwUXVldWUuaW5kZXhPZih0cmFwKTtcbiAgICAgIGlmICh0cmFwSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRyYXBRdWV1ZS5zcGxpY2UodHJhcEluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRyYXBRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyYXBRdWV1ZVt0cmFwUXVldWUubGVuZ3RoIC0gMV0udW5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGZvY3VzVHJhcChlbGVtZW50LCB1c2VyT3B0aW9ucykge1xuICB2YXIgZG9jID0gZG9jdW1lbnQ7XG4gIHZhciBjb250YWluZXIgPVxuICAgIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IGRvYy5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpIDogZWxlbWVudDtcblxuICB2YXIgY29uZmlnID0geHRlbmQoXG4gICAge1xuICAgICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IHRydWUsXG4gICAgICBlc2NhcGVEZWFjdGl2YXRlczogdHJ1ZVxuICAgIH0sXG4gICAgdXNlck9wdGlvbnNcbiAgKTtcblxuICB2YXIgc3RhdGUgPSB7XG4gICAgZmlyc3RUYWJiYWJsZU5vZGU6IG51bGwsXG4gICAgbGFzdFRhYmJhYmxlTm9kZTogbnVsbCxcbiAgICBub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb246IG51bGwsXG4gICAgbW9zdFJlY2VudGx5Rm9jdXNlZE5vZGU6IG51bGwsXG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBwYXVzZWQ6IGZhbHNlXG4gIH07XG5cbiAgdmFyIHRyYXAgPSB7XG4gICAgYWN0aXZhdGU6IGFjdGl2YXRlLFxuICAgIGRlYWN0aXZhdGU6IGRlYWN0aXZhdGUsXG4gICAgcGF1c2U6IHBhdXNlLFxuICAgIHVucGF1c2U6IHVucGF1c2VcbiAgfTtcblxuICByZXR1cm4gdHJhcDtcblxuICBmdW5jdGlvbiBhY3RpdmF0ZShhY3RpdmF0ZU9wdGlvbnMpIHtcbiAgICBpZiAoc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG5cbiAgICBzdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgIHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbiA9IGRvYy5hY3RpdmVFbGVtZW50O1xuXG4gICAgdmFyIG9uQWN0aXZhdGUgPVxuICAgICAgYWN0aXZhdGVPcHRpb25zICYmIGFjdGl2YXRlT3B0aW9ucy5vbkFjdGl2YXRlXG4gICAgICAgID8gYWN0aXZhdGVPcHRpb25zLm9uQWN0aXZhdGVcbiAgICAgICAgOiBjb25maWcub25BY3RpdmF0ZTtcbiAgICBpZiAob25BY3RpdmF0ZSkge1xuICAgICAgb25BY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycygpO1xuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVhY3RpdmF0ZShkZWFjdGl2YXRlT3B0aW9ucykge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICBzdGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcblxuICAgIGFjdGl2ZUZvY3VzVHJhcHMuZGVhY3RpdmF0ZVRyYXAodHJhcCk7XG5cbiAgICB2YXIgb25EZWFjdGl2YXRlID1cbiAgICAgIGRlYWN0aXZhdGVPcHRpb25zICYmIGRlYWN0aXZhdGVPcHRpb25zLm9uRGVhY3RpdmF0ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZGVhY3RpdmF0ZU9wdGlvbnMub25EZWFjdGl2YXRlXG4gICAgICAgIDogY29uZmlnLm9uRGVhY3RpdmF0ZTtcbiAgICBpZiAob25EZWFjdGl2YXRlKSB7XG4gICAgICBvbkRlYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0dXJuRm9jdXMgPVxuICAgICAgZGVhY3RpdmF0ZU9wdGlvbnMgJiYgZGVhY3RpdmF0ZU9wdGlvbnMucmV0dXJuRm9jdXMgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGRlYWN0aXZhdGVPcHRpb25zLnJldHVybkZvY3VzXG4gICAgICAgIDogY29uZmlnLnJldHVybkZvY3VzT25EZWFjdGl2YXRlO1xuICAgIGlmIChyZXR1cm5Gb2N1cykge1xuICAgICAgZGVsYXkoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRyeUZvY3VzKHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgIGlmIChzdGF0ZS5wYXVzZWQgfHwgIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuICAgIHN0YXRlLnBhdXNlZCA9IHRydWU7XG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1bnBhdXNlKCkge1xuICAgIGlmICghc3RhdGUucGF1c2VkIHx8ICFzdGF0ZS5hY3RpdmUpIHJldHVybjtcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICBpZiAoIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgLy8gVGhlcmUgY2FuIGJlIG9ubHkgb25lIGxpc3RlbmluZyBmb2N1cyB0cmFwIGF0IGEgdGltZVxuICAgIGFjdGl2ZUZvY3VzVHJhcHMuYWN0aXZhdGVUcmFwKHRyYXApO1xuXG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuXG4gICAgLy8gRGVsYXkgZW5zdXJlcyB0aGF0IHRoZSBmb2N1c2VkIGVsZW1lbnQgZG9lc24ndCBjYXB0dXJlIHRoZSBldmVudFxuICAgIC8vIHRoYXQgY2F1c2VkIHRoZSBmb2N1cyB0cmFwIGFjdGl2YXRpb24uXG4gICAgZGVsYXkoZnVuY3Rpb24oKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgY2hlY2tGb2N1c0luLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB0cnVlKTtcblxuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGNoZWNrRm9jdXNJbiwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDbGljaywgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGVja0tleSwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5vZGVGb3JPcHRpb24ob3B0aW9uTmFtZSkge1xuICAgIHZhciBvcHRpb25WYWx1ZSA9IGNvbmZpZ1tvcHRpb25OYW1lXTtcbiAgICB2YXIgbm9kZSA9IG9wdGlvblZhbHVlO1xuICAgIGlmICghb3B0aW9uVmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgbm9kZSA9IGRvYy5xdWVyeVNlbGVjdG9yKG9wdGlvblZhbHVlKTtcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2AnICsgb3B0aW9uTmFtZSArICdgIHJlZmVycyB0byBubyBrbm93biBub2RlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5vZGUgPSBvcHRpb25WYWx1ZSgpO1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBvcHRpb25OYW1lICsgJ2AgZGlkIG5vdCByZXR1cm4gYSBub2RlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5pdGlhbEZvY3VzTm9kZSgpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAoZ2V0Tm9kZUZvck9wdGlvbignaW5pdGlhbEZvY3VzJykgIT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSBnZXROb2RlRm9yT3B0aW9uKCdpbml0aWFsRm9jdXMnKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5jb250YWlucyhkb2MuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIG5vZGUgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZSA9IHN0YXRlLmZpcnN0VGFiYmFibGVOb2RlIHx8IGdldE5vZGVGb3JPcHRpb24oJ2ZhbGxiYWNrRm9jdXMnKTtcbiAgICB9XG5cbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJZb3UgY2FuJ3QgaGF2ZSBhIGZvY3VzLXRyYXAgd2l0aG91dCBhdCBsZWFzdCBvbmUgZm9jdXNhYmxlIGVsZW1lbnRcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIC8vIFRoaXMgbmVlZHMgdG8gYmUgZG9uZSBvbiBtb3VzZWRvd24gYW5kIHRvdWNoc3RhcnQgaW5zdGVhZCBvZiBjbGlja1xuICAvLyBzbyB0aGF0IGl0IHByZWNlZGVzIHRoZSBmb2N1cyBldmVudC5cbiAgZnVuY3Rpb24gY2hlY2tQb2ludGVyRG93bihlKSB7XG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcbiAgICBpZiAoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzKSB7XG4gICAgICBkZWFjdGl2YXRlKHtcbiAgICAgICAgcmV0dXJuRm9jdXM6ICF0YWJiYWJsZS5pc0ZvY3VzYWJsZShlLnRhcmdldClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gSW4gY2FzZSBmb2N1cyBlc2NhcGVzIHRoZSB0cmFwIGZvciBzb21lIHN0cmFuZ2UgcmVhc29uLCBwdWxsIGl0IGJhY2sgaW4uXG4gIGZ1bmN0aW9uIGNoZWNrRm9jdXNJbihlKSB7XG4gICAgLy8gSW4gRmlyZWZveCB3aGVuIHlvdSBUYWIgb3V0IG9mIGFuIGlmcmFtZSB0aGUgRG9jdW1lbnQgaXMgYnJpZWZseSBmb2N1c2VkLlxuICAgIGlmIChjb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpIHx8IGUudGFyZ2V0IGluc3RhbmNlb2YgRG9jdW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB0cnlGb2N1cyhzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSB8fCBnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tLZXkoZSkge1xuICAgIGlmIChjb25maWcuZXNjYXBlRGVhY3RpdmF0ZXMgIT09IGZhbHNlICYmIGlzRXNjYXBlRXZlbnQoZSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRlYWN0aXZhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzVGFiRXZlbnQoZSkpIHtcbiAgICAgIGNoZWNrVGFiKGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhpamFjayBUYWIgZXZlbnRzIG9uIHRoZSBmaXJzdCBhbmQgbGFzdCBmb2N1c2FibGUgbm9kZXMgb2YgdGhlIHRyYXAsXG4gIC8vIGluIG9yZGVyIHRvIHByZXZlbnQgZm9jdXMgZnJvbSBlc2NhcGluZy4gSWYgaXQgZXNjYXBlcyBmb3IgZXZlbiBhXG4gIC8vIG1vbWVudCBpdCBjYW4gZW5kIHVwIHNjcm9sbGluZyB0aGUgcGFnZSBhbmQgY2F1c2luZyBjb25mdXNpb24gc28gd2VcbiAgLy8ga2luZCBvZiBuZWVkIHRvIGNhcHR1cmUgdGhlIGFjdGlvbiBhdCB0aGUga2V5ZG93biBwaGFzZS5cbiAgZnVuY3Rpb24gY2hlY2tUYWIoZSkge1xuICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICBpZiAoZS5zaGlmdEtleSAmJiBlLnRhcmdldCA9PT0gc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRyeUZvY3VzKHN0YXRlLmxhc3RUYWJiYWJsZU5vZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWUuc2hpZnRLZXkgJiYgZS50YXJnZXQgPT09IHN0YXRlLmxhc3RUYWJiYWJsZU5vZGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRyeUZvY3VzKHN0YXRlLmZpcnN0VGFiYmFibGVOb2RlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0NsaWNrKGUpIHtcbiAgICBpZiAoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzKSByZXR1cm47XG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKSB7XG4gICAgdmFyIHRhYmJhYmxlTm9kZXMgPSB0YWJiYWJsZShjb250YWluZXIpO1xuICAgIHN0YXRlLmZpcnN0VGFiYmFibGVOb2RlID0gdGFiYmFibGVOb2Rlc1swXSB8fCBnZXRJbml0aWFsRm9jdXNOb2RlKCk7XG4gICAgc3RhdGUubGFzdFRhYmJhYmxlTm9kZSA9XG4gICAgICB0YWJiYWJsZU5vZGVzW3RhYmJhYmxlTm9kZXMubGVuZ3RoIC0gMV0gfHwgZ2V0SW5pdGlhbEZvY3VzTm9kZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJ5Rm9jdXMobm9kZSkge1xuICAgIGlmIChub2RlID09PSBkb2MuYWN0aXZlRWxlbWVudCkgcmV0dXJuO1xuICAgIGlmICghbm9kZSB8fCAhbm9kZS5mb2N1cykge1xuICAgICAgdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBub2RlLmZvY3VzKCk7XG4gICAgc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgPSBub2RlO1xuICAgIGlmIChpc1NlbGVjdGFibGVJbnB1dChub2RlKSkge1xuICAgICAgbm9kZS5zZWxlY3QoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTZWxlY3RhYmxlSW5wdXQobm9kZSkge1xuICByZXR1cm4gKFxuICAgIG5vZGUudGFnTmFtZSAmJlxuICAgIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnICYmXG4gICAgdHlwZW9mIG5vZGUuc2VsZWN0ID09PSAnZnVuY3Rpb24nXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzRXNjYXBlRXZlbnQoZSkge1xuICByZXR1cm4gZS5rZXkgPT09ICdFc2NhcGUnIHx8IGUua2V5ID09PSAnRXNjJyB8fCBlLmtleUNvZGUgPT09IDI3O1xufVxuXG5mdW5jdGlvbiBpc1RhYkV2ZW50KGUpIHtcbiAgcmV0dXJuIGUua2V5ID09PSAnVGFiJyB8fCBlLmtleUNvZGUgPT09IDk7XG59XG5cbmZ1bmN0aW9uIGRlbGF5KGZuKSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KGZuLCAwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmb2N1c1RyYXA7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUZvY3VzVHJhcCBmcm9tICdmb2N1cy10cmFwJztcblxuLyoqXG4gKiBAcGFyYW0geyFFbGVtZW50fSBzdXJmYWNlRWxcbiAqIEBwYXJhbSB7P0VsZW1lbnQ9fSBpbml0aWFsRm9jdXNFbFxuICogQHBhcmFtIHtmdW5jdGlvbighRWxlbWVudCwgIUZvY3VzVHJhcENyZWF0ZU9wdGlvbnMpOiAhRm9jdXNUcmFwSW5zdGFuY2V9IGZvY3VzVHJhcEZhY3RvcnlcbiAqIEByZXR1cm4geyFGb2N1c1RyYXBJbnN0YW5jZX1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRm9jdXNUcmFwSW5zdGFuY2Uoc3VyZmFjZUVsLCBmb2N1c1RyYXBGYWN0b3J5ID0gY3JlYXRlRm9jdXNUcmFwLCBpbml0aWFsRm9jdXNFbCA9IG51bGwpIHtcbiAgcmV0dXJuIGZvY3VzVHJhcEZhY3Rvcnkoc3VyZmFjZUVsLCB7XG4gICAgaW5pdGlhbEZvY3VzOiBpbml0aWFsRm9jdXNFbCxcbiAgICBlc2NhcGVEZWFjdGl2YXRlczogZmFsc2UsIC8vIERpYWxvZyBmb3VuZGF0aW9uIGhhbmRsZXMgZXNjYXBlIGtleVxuICAgIGNsaWNrT3V0c2lkZURlYWN0aXZhdGVzOiB0cnVlLCAvLyBBbGxvdyBoYW5kbGluZyBvZiBzY3JpbSBjbGlja3NcbiAgfSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHshRWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbCkge1xuICByZXR1cm4gZWwuc2Nyb2xsSGVpZ2h0ID4gZWwub2Zmc2V0SGVpZ2h0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUFycmF5PCFFbGVtZW50PnwhTm9kZUxpc3R9IGVsc1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gYXJlVG9wc01pc2FsaWduZWQoZWxzKSB7XG4gIGNvbnN0IHRvcHMgPSBuZXcgU2V0KCk7XG4gIFtdLmZvckVhY2guY2FsbChlbHMsIChlbCkgPT4gdG9wcy5hZGQoZWwub2Zmc2V0VG9wKSk7XG4gIHJldHVybiB0b3BzLnNpemUgPiAxO1xufVxuXG5leHBvcnQge2NyZWF0ZUZvY3VzVHJhcEluc3RhbmNlLCBpc1Njcm9sbGFibGUsIGFyZVRvcHNNaXNhbGlnbmVkfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBGXG4gKi9cbmNsYXNzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENDb21wb25lbnR9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7Rj19IGZvdW5kYXRpb25cbiAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb290LCBmb3VuZGF0aW9uID0gdW5kZWZpbmVkLCAuLi5hcmdzKSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuICAgIHRoaXMucm9vdF8gPSByb290O1xuICAgIHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcbiAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgLy8gdGhpcy5yb290XyBpcyBkZWZpbmVkIGFuZCBjYW4gYmUgdXNlZCB3aXRoaW4gdGhlIGZvdW5kYXRpb24gY2xhc3MuXG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFGfSAqL1xuICAgIHRoaXMuZm91bmRhdGlvbl8gPSBmb3VuZGF0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmdldERlZmF1bHRGb3VuZGF0aW9uKCkgOiBmb3VuZGF0aW9uO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gIH1cblxuICBpbml0aWFsaXplKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshRn0gZm91bmRhdGlvblxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgLy8gY29tcG9uZW50LlxuICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogbGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgbGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gcmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiB1bmxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLFxuICAgKiB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFPYmplY3R9IGV2dERhdGFcbiAgICogQHBhcmFtIHtib29sZWFuPX0gc2hvdWxkQnViYmxlXG4gICAqL1xuICBlbWl0KGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gICAgbGV0IGV2dDtcbiAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5yb290Xy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBSaXBwbGUuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmdcbiAqIC0gY2xhc3Nlc1xuICogLSBkb21cbiAqIC0gQ1NTIHZhcmlhYmxlc1xuICogLSBwb3NpdGlvblxuICogLSBkaW1lbnNpb25zXG4gKiAtIHNjcm9sbCBwb3NpdGlvblxuICogLSBldmVudCBoYW5kbGVyc1xuICogLSB1bmJvdW5kZWQsIGFjdGl2ZSBhbmQgZGlzYWJsZWQgc3RhdGVzXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENSaXBwbGVBZGFwdGVyIHtcbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1VuYm91bmRlZCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZUFjdGl2ZSgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZURpc2FibGVkKCkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0geyFFdmVudFRhcmdldH0gdGFyZ2V0ICovXG4gIGNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFyTmFtZVxuICAgKiBAcGFyYW0gez9udW1iZXJ8c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgdXBkYXRlQ3NzVmFyaWFibGUodmFyTmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqIEByZXR1cm4geyFDbGllbnRSZWN0fSAqL1xuICBjb21wdXRlQm91bmRpbmdSZWN0KCkge31cblxuICAvKiogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gKi9cbiAgZ2V0V2luZG93UGFnZU9mZnNldCgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxuICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbn07XG5cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG4gIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxufTtcblxuY29uc3QgbnVtYmVycyA9IHtcbiAgUEFERElORzogMTAsXG4gIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLXRyYW5zbGF0ZS1kdXJhdGlvbiAoaS5lLiBhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLWZhZGUtb3V0LWR1cmF0aW9uIChpLmUuIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIFRBUF9ERUxBWV9NUzogMzAwLCAvLyBEZWxheSBiZXR3ZWVuIHRvdWNoIGFuZCBzaW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXNcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gYXBwbHlQYXNzaXZlIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c1Bhc3NpdmVfO1xuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAvLyBEZXRlY3QgdmVyc2lvbnMgb2YgRWRnZSB3aXRoIGJ1Z2d5IHZhcigpIHN1cHBvcnRcbiAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMTQ5NTQ0OC9cbiAgY29uc3QgZG9jdW1lbnQgPSB3aW5kb3dPYmouZG9jdW1lbnQ7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgLy8gVGhlIGJ1ZyBleGlzdHMgaWYgOjpiZWZvcmUgc3R5bGUgZW5kcyB1cCBwcm9wYWdhdGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gIC8vIEFkZGl0aW9uYWxseSwgZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIG51bGwgaW4gaWZyYW1lcyB3aXRoIGRpc3BsYXk6IFwibm9uZVwiIGluIEZpcmVmb3gsXG4gIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvd09iai5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBjb25zdCBoYXNQc2V1ZG9WYXJCdWcgPSBjb21wdXRlZFN0eWxlICE9PSBudWxsICYmIGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wU3R5bGUgPT09ICdzb2xpZCc7XG4gIG5vZGUucmVtb3ZlKCk7XG4gIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBsZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuXG4gIGNvbnN0IHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gd2luZG93T2JqLkNTUyAmJiB0eXBlb2Ygd2luZG93T2JqLkNTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTQ2NjlcbiAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgY29uc3Qgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKFxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKVxuICApO1xuXG4gIGlmIChleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cykge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgfSBlbHNlIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG59XG5cbi8vXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZCBpZiBzbywgdXNlIHRoZW0uXG4gKiBAcGFyYW0geyFXaW5kb3c9fSBnbG9iYWxPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnwhRXZlbnRMaXN0ZW5lck9wdGlvbnN9XG4gKi9cbmZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmogPSB3aW5kb3csIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwge2dldCBwYXNzaXZlKCkge1xuICAgICAgICBpc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBpc1N1cHBvcnRlZDtcbiAgICAgIH19KTtcbiAgICB9IGNhdGNoIChlKSB7IH1cblxuICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZDtcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfXG4gICAgPyAvKiogQHR5cGUgeyFFdmVudExpc3RlbmVyT3B0aW9uc30gKi8gKHtwYXNzaXZlOiB0cnVlfSlcbiAgICA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gSFRNTEVsZW1lbnRQcm90b3R5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gIC8qKlxuICAgKiBPcmRlciBpcyBpbXBvcnRhbnQgYmVjYXVzZSB3ZSByZXR1cm4gdGhlIGZpcnN0IGV4aXN0aW5nIG1ldGhvZCB3ZSBmaW5kLlxuICAgKiBEbyBub3QgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgaXRlbXMgaW4gdGhlIGJlbG93IGFycmF5LlxuICAgKi9cbiAgY29uc3QgbWF0Y2hlc01ldGhvZHMgPSBbJ21hdGNoZXMnLCAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJywgJ21zTWF0Y2hlc1NlbGVjdG9yJ107XG4gIGxldCBtZXRob2QgPSAnbWF0Y2hlcyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlc01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0aG9kID0gbWF0Y2hlc01ldGhvZHNbaV07XG4gICAgaWYgKG1hdGNoZXNNZXRob2QgaW4gSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgICAgIG1ldGhvZCA9IG1hdGNoZXNNZXRob2Q7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0aG9kO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUV2ZW50fSBldlxuICogQHBhcmFtIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSBwYWdlT2Zmc2V0XG4gKiBAcGFyYW0geyFDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXYsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgY29uc3Qge3gsIHl9ID0gcGFnZU9mZnNldDtcbiAgY29uc3QgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgY29uc3QgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuXG4gIGxldCBub3JtYWxpemVkWDtcbiAgbGV0IG5vcm1hbGl6ZWRZO1xuICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gIGlmIChldi50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICBldiA9IC8qKiBAdHlwZSB7IVRvdWNoRXZlbnR9ICovIChldik7XG4gICAgbm9ybWFsaXplZFggPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9IGVsc2Uge1xuICAgIGV2ID0gLyoqIEB0eXBlIHshTW91c2VFdmVudH0gKi8gKGV2KTtcbiAgICBub3JtYWxpemVkWCA9IGV2LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYucGFnZVkgLSBkb2N1bWVudFk7XG4gIH1cblxuICByZXR1cm4ge3g6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWX07XG59XG5cbmV4cG9ydCB7c3VwcG9ydHNDc3NWYXJpYWJsZXMsIGFwcGx5UGFzc2l2ZSwgZ2V0TWF0Y2hlc1Byb3BlcnR5LCBnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgaXNBY3RpdmF0ZWQ6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBhY3RpdmF0aW9uRXZlbnQ6ICghRXZlbnR8dW5kZWZpbmVkKSxcbiAqICAgaXNQcm9ncmFtbWF0aWM6IChib29sZWFufHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBBY3RpdmF0aW9uU3RhdGVUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGRlYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZm9jdXM6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgYmx1cjogKHN0cmluZ3x1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJJbmZvVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50KSxcbiAqICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50PSksXG4gKiAgIGZvY3VzOiBmdW5jdGlvbigpLFxuICogICBibHVyOiBmdW5jdGlvbigpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJzVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICB4OiBudW1iZXIsXG4gKiAgIHk6IG51bWJlclxuICogfX1cbiAqL1xubGV0IFBvaW50VHlwZTtcblxuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbmNvbnN0IEFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nLCAnbW91c2Vkb3duJywgJ2tleWRvd24nXTtcblxuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG5jb25zdCBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnXTtcblxuLy8gVHJhY2tzIGFjdGl2YXRpb25zIHRoYXQgaGF2ZSBvY2N1cnJlZCBvbiB0aGUgY3VycmVudCBmcmFtZSwgdG8gYXZvaWQgc2ltdWx0YW5lb3VzIG5lc3RlZCBhY3RpdmF0aW9uc1xuLyoqIEB0eXBlIHshQXJyYXk8IUV2ZW50VGFyZ2V0Pn0gKi9cbmxldCBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1JpcHBsZUFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENSaXBwbGVGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gbnVtYmVycztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IC8qIGJvb2xlYW4gLSBjYWNoZWQgKi8ge30sXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICgvKiB0YXJnZXQ6ICFFdmVudFRhcmdldCAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAoLyogdmFyTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IC8qIENsaWVudFJlY3QgKi8ge30sXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAvKiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9ICovIHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUgeyFDbGllbnRSZWN0fSAqL1xuICAgIHRoaXMuZnJhbWVfID0gLyoqIEB0eXBlIHshQ2xpZW50UmVjdH0gKi8gKHt3aWR0aDogMCwgaGVpZ2h0OiAwfSk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubWF4UmFkaXVzXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCl9ICovXG4gICAgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gKGUpID0+IHRoaXMuYWN0aXZhdGVfKGUpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9ICgpID0+IHRoaXMuZGVhY3RpdmF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5mb2N1c0hhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVGb2N1cygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmJsdXJIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlQmx1cigpO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyXyA9ICgpID0+IHRoaXMubGF5b3V0KCk7XG5cbiAgICAvKiogQHByaXZhdGUge3tsZWZ0OiBudW1iZXIsIHRvcDpudW1iZXJ9fSAqL1xuICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdTY2FsZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUV2ZW50fHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdXBwb3J0c1ByZXNzUmlwcGxlXygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9XG4gICAqL1xuICBkZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcblxuICAgIHRoaXMucmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpO1xuXG4gICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhST09UKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlcyBuZWVkIGxheW91dCBsb2dpYyBhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIHNldCBjb29yZGluYXRlcyBmb3IgYm90aCBzaGFkZSBhbmQgcmlwcGxlXG4gICAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCkpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2YXRpb25UaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoUk9PVCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudH0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSkge1xuICAgIGlmIChlLnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpIHtcbiAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcmVtb3ZlQ3NzVmFyc18oKSB7XG4gICAgY29uc3Qge3N0cmluZ3N9ID0gTURDUmlwcGxlRm91bmRhdGlvbjtcbiAgICBPYmplY3Qua2V5cyhzdHJpbmdzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBpZiAoay5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShzdHJpbmdzW2tdLCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFjdGl2YXRlXyhlKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgIGNvbnN0IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgY29uc3QgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBlICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZS50eXBlO1xuICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZSA9PT0gdW5kZWZpbmVkO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IGUgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICBlLnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3BvaW50ZXJkb3duJ1xuICAgICk7XG5cbiAgICBjb25zdCBoYXNBY3RpdmF0ZWRDaGlsZCA9IGUgIT09IHVuZGVmaW5lZCAmJiBhY3RpdmF0ZWRUYXJnZXRzLmxlbmd0aCA+IDAgJiYgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKFxuICAgICAgKHRhcmdldCkgPT4gdGhpcy5hZGFwdGVyXy5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkpO1xuICAgIGlmIChoYXNBY3RpdmF0ZWRDaGlsZCkge1xuICAgICAgLy8gSW1tZWRpYXRlbHkgcmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSwgd2hpbGUgcHJlc2VydmluZyBsb2dpYyB0aGF0IHByZXZlbnRzIHRvdWNoIGZvbGxvdy1vbiBldmVudHNcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKC8qKiBAdHlwZSB7IUV2ZW50VGFyZ2V0fSAqLyAoZS50YXJnZXQpKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSAmJiBlICE9PSB1bmRlZmluZWQgJiYgKGUua2V5ID09PSAnICcgfHwgZS5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgLy8gYWN0aXZlIHN0YXRlcyBpbmNvbnNpc3RlbnRseSB3aGVuIHRoZXkncmUgY2FsbGVkIHdpdGhpbiBldmVudCBoYW5kbGluZyBjb2RlOlxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgLy8gV2UgdHJ5IGZpcnN0IG91dHNpZGUgckFGIHRvIHN1cHBvcnQgRWRnZSwgd2hpY2ggZG9lcyBub3QgZXhoaWJpdCB0aGlzIHByb2JsZW0sIGJ1dCB3aWxsIGNyYXNoIGlmIGEgQ1NTXG4gICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSkge1xuICAgIHJldHVybiAoZSAhPT0gdW5kZWZpbmVkICYmIGUudHlwZSA9PT0gJ2tleWRvd24nKSA/IHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlQWN0aXZlKCkgOiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZXZlbnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICovXG4gIGFjdGl2YXRlKGV2ZW50KSB7XG4gICAgdGhpcy5hY3RpdmF0ZV8oZXZlbnQpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGFuaW1hdGVBY3RpdmF0aW9uXygpIHtcbiAgICBjb25zdCB7VkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtERUFDVElWQVRJT05fVElNRU9VVF9NU30gPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnM7XG5cbiAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuXG4gICAgbGV0IHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgbGV0IHRyYW5zbGF0ZUVuZCA9ICcnO1xuXG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIGNvbnN0IHtzdGFydFBvaW50LCBlbmRQb2ludH0gPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKTtcbiAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gYCR7c3RhcnRQb2ludC54fXB4LCAke3N0YXJ0UG9pbnQueX1weGA7XG4gICAgICB0cmFuc2xhdGVFbmQgPSBgJHtlbmRQb2ludC54fXB4LCAke2VuZFBvaW50Lnl9cHhgO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuXG4gICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm4ge3tzdGFydFBvaW50OiBQb2ludFR5cGUsIGVuZFBvaW50OiBQb2ludFR5cGV9fVxuICAgKi9cbiAgZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpIHtcbiAgICBjb25zdCB7YWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXJ9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuXG4gICAgbGV0IHN0YXJ0UG9pbnQ7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhcbiAgICAgICAgLyoqIEB0eXBlIHshRXZlbnR9ICovIChhY3RpdmF0aW9uRXZlbnQpLFxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICBjb25zdCBlbmRQb2ludCA9IHtcbiAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtzdGFydFBvaW50LCBlbmRQb2ludH07XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCkge1xuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtoYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWR9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGNvbnN0IGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcblxuICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKSB7XG4gICAgY29uc3Qge0ZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gIH1cblxuICByZXNldEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQsIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZWFjdGl2YXRlXygpIHtcbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSAvKiogQHR5cGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqLyAoT2JqZWN0LmFzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKSk7XG5cbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSkpO1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9IG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFuaW1hdGVEZWFjdGl2YXRpb25fKHt3YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlfSkge1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfVxuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgIH1cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGxheW91dEludGVybmFsXygpIHtcbiAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIGNvbnN0IG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuXG4gICAgLy8gU3VyZmFjZSBkaWFtZXRlciBpcyB0cmVhdGVkIGRpZmZlcmVudGx5IGZvciB1bmJvdW5kZWQgdnMuIGJvdW5kZWQgcmlwcGxlcy5cbiAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAvLyBzcXVhcmUpLiBCb3VuZGVkIHJpcHBsZXMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgZnVsbHkgZXhwZWN0ZWQgdG8gZXhwYW5kIGJleW9uZCB0aGUgc3VyZmFjZSdzIGxvbmdlc3QgZGlhbWV0ZXJcbiAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgIGNvbnN0IGdldEJvdW5kZWRSYWRpdXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMuZnJhbWVfLndpZHRoLCAyKSArIE1hdGgucG93KHRoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICB9O1xuXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpID8gbWF4RGltIDogZ2V0Qm91bmRlZFJhZGl1cygpO1xuXG4gICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICB0aGlzLmluaXRpYWxTaXplXyA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICB0aGlzLmZnU2NhbGVfID0gdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG5cbiAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgdXBkYXRlTGF5b3V0Q3NzVmFyc18oKSB7XG4gICAgY29uc3Qge1xuICAgICAgVkFSX0ZHX1NJWkUsIFZBUl9MRUZULCBWQVJfVE9QLCBWQVJfRkdfU0NBTEUsXG4gICAgfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIGAke3RoaXMuaW5pdGlhbFNpemVffXB4YCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnR9cHhgKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcH1weGApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXRVbmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgY29uc3Qge1VOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRm9jdXMoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKSk7XG4gIH1cblxuICBoYW5kbGVCbHVyKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCBNRENSaXBwbGVGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQGV4dGVuZHMgTURDQ29tcG9uZW50PCFNRENSaXBwbGVGb3VuZGF0aW9uPlxuICovXG5jbGFzcyBNRENSaXBwbGUgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKiogQHBhcmFtIHsuLi4/fSBhcmdzICovXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHt7aXNVbmJvdW5kZWQ6IChib29sZWFufHVuZGVmaW5lZCl9PX0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QsIHtpc1VuYm91bmRlZCA9IHVuZGVmaW5lZH0gPSB7fSkge1xuICAgIGNvbnN0IHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgLy8gT25seSBvdmVycmlkZSB1bmJvdW5kZWQgYmVoYXZpb3IgaWYgb3B0aW9uIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgaWYgKGlzVW5ib3VuZGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSAvKiogQHR5cGUge2Jvb2xlYW59ICovIChpc1VuYm91bmRlZCk7XG4gICAgfVxuICAgIHJldHVybiByaXBwbGU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshUmlwcGxlQ2FwYWJsZVN1cmZhY2V9IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUFkYXB0ZXIoaW5zdGFuY2UpIHtcbiAgICBjb25zdCBNQVRDSEVTID0gdXRpbC5nZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyksXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gaW5zdGFuY2UudW5ib3VuZGVkLFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiBpbnN0YW5jZS5yb290X1tNQVRDSEVTXSgnOmFjdGl2ZScpLFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IGluc3RhbmNlLmRpc2FibGVkLFxuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiAodGFyZ2V0KSA9PiBpbnN0YW5jZS5yb290Xy5jb250YWlucyh0YXJnZXQpLFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpLFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gaW5zdGFuY2Uucm9vdF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAoe3g6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0fSksXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgdW5ib3VuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0IHVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICB0aGlzLnVuYm91bmRlZF8gPSBCb29sZWFuKHVuYm91bmRlZCk7XG4gICAgdGhpcy5zZXRVbmJvdW5kZWRfKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc3VyZSBDb21waWxlciB0aHJvd3MgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3Igd2hlbiBkaXJlY3RseSBhY2Nlc3NpbmcgYVxuICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICogQnkgYWNjZXNzaW5nIHRoZSBwcm90ZWN0ZWQgcHJvcGVydHkgaW5zaWRlIGEgbWV0aG9kLCB3ZSBzb2x2ZSB0aGF0IHByb2JsZW0uXG4gICAqIFRoYXQncyB3aHkgdGhpcyBmdW5jdGlvbiBleGlzdHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRVbmJvdW5kZWRfKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VW5ib3VuZGVkKHRoaXMudW5ib3VuZGVkXyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUZvdW5kYXRpb259XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMudW5ib3VuZGVkID0gJ21kY1JpcHBsZUlzVW5ib3VuZGVkJyBpbiB0aGlzLnJvb3RfLmRhdGFzZXQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTZWUgTWF0ZXJpYWwgRGVzaWduIHNwZWMgZm9yIG1vcmUgZGV0YWlscyBvbiB3aGVuIHRvIHVzZSByaXBwbGVzLlxuICogaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL21vdGlvbi9jaG9yZW9ncmFwaHkuaHRtbCNjaG9yZW9ncmFwaHktY3JlYXRpb25cbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgUmlwcGxlQ2FwYWJsZVN1cmZhY2Uge31cblxuLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLnJvb3RfO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgYmxlZWRzIG91dCBvZiB0aGUgYm91bmRzIG9mIHRoZSBlbGVtZW50LlxuICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUudW5ib3VuZGVkO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgaXMgYXR0YWNoZWQgdG8gYSBkaXNhYmxlZCBjb21wb25lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS5kaXNhYmxlZDtcblxuZXhwb3J0IHtNRENSaXBwbGUsIE1EQ1JpcHBsZUZvdW5kYXRpb24sIFJpcHBsZUNhcGFibGVTdXJmYWNlLCB1dGlsfTtcbiIsImltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2luZGV4J1xuaW1wb3J0IHtcbiAgc3VwcG9ydHNDc3NWYXJpYWJsZXMsXG4gIGdldE1hdGNoZXNQcm9wZXJ0eSxcbiAgYXBwbHlQYXNzaXZlXG59IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvdXRpbCdcblxuZXhwb3J0IGNsYXNzIFJpcHBsZUJhc2UgZXh0ZW5kcyBNRENSaXBwbGVGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBNQVRDSEVTKCkge1xuICAgIC8qIGdsb2JhbCBIVE1MRWxlbWVudCAqL1xuICAgIHJldHVybiAoXG4gICAgICBSaXBwbGVCYXNlLl9tYXRjaGVzIHx8XG4gICAgICAoUmlwcGxlQmFzZS5fbWF0Y2hlcyA9IGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpKVxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cmZhY2VBY3RpdmUocmVmKSB7XG4gICAgcmV0dXJuIHJlZltSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZtLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbFtSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRkZWxldGUodm0uY2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogdGFyZ2V0ID0+IHZtLiRlbC5jb250YWlucyh0YXJnZXQpLFxuICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uc3R5bGVzLCB2YXJOYW1lLCB2YWx1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFJpcHBsZU1peGluID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzKVxuICAgIHRoaXMucmlwcGxlLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxjdXN0b20tZWxlbWVudCBcbiAgICA6dGFnPVwidGFnXCIgXG4gICAgOmNsYXNzZXM9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGVzPVwic3R5bGVzXCIgXG4gICAgY2xhc3M9XCJtZGMtcmlwcGxlXCI+XG4gICAgPHNsb3QgLz5cbiAgPC9jdXN0b20tZWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBDdXN0b21FbGVtZW50TWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlTWl4aW4gfSBmcm9tICcuL21kYy1yaXBwbGUtYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXJpcHBsZScsXG4gIG1peGluczogW0N1c3RvbUVsZW1lbnRNaXhpbiwgUmlwcGxlTWl4aW5dLFxuICBwcm9wczoge1xuICAgIHRhZzogU3RyaW5nXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50KGNvbXBpbGVkVGVtcGxhdGUsIGluamVjdFN0eWxlLCBkZWZhdWx0RXhwb3J0LCBzY29wZUlkLCBpc0Z1bmN0aW9uYWxUZW1wbGF0ZSwgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLywgaXNTaGFkb3dNb2RlLCBjcmVhdGVJbmplY3RvciwgY3JlYXRlSW5qZWN0b3JTU1IsIGNyZWF0ZUluamVjdG9yU2hhZG93KSB7XG4gICAgaWYgKHR5cGVvZiBpc1NoYWRvd01vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3JTU1IgPSBjcmVhdGVJbmplY3RvcjtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3IgPSBpc1NoYWRvd01vZGU7XG4gICAgICAgIGlzU2hhZG93TW9kZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gICAgY29uc3Qgb3B0aW9ucyA9IHR5cGVvZiBkZWZhdWx0RXhwb3J0ID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdEV4cG9ydC5vcHRpb25zIDogZGVmYXVsdEV4cG9ydDtcbiAgICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gICAgaWYgKGNvbXBpbGVkVGVtcGxhdGUgJiYgY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXIpIHtcbiAgICAgICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlcjtcbiAgICAgICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgICAgICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlO1xuICAgICAgICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzY29wZWRJZFxuICAgIGlmIChzY29wZUlkKSB7XG4gICAgICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkO1xuICAgIH1cbiAgICBsZXQgaG9vaztcbiAgICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgICAgICAvLyBzZXJ2ZXIgYnVpbGRcbiAgICAgICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICAgICAgICBjb250ZXh0ID1cbiAgICAgICAgICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KTsgLy8gZnVuY3Rpb25hbFxuICAgICAgICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICAgICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX187XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgICAgICAgaWYgKGluamVjdFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNTUihjb250ZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVyZW5jZVxuICAgICAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9vaztcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5qZWN0U3R5bGUpIHtcbiAgICAgICAgaG9vayA9IGlzU2hhZG93TW9kZVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNoYWRvdyh0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH07XG4gICAgfVxuICAgIGlmIChob29rKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcbiAgICAgICAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBob29rLmNhbGwoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlO1xuICAgICAgICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRFeHBvcnQ7XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxjdXN0b20tYnV0dG9uXG4gICAgcmVmPVwicm9vdFwiXG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiXG4gICAgOnN0eWxlPVwic3R5bGVzXCJcbiAgICA6aHJlZj1cImhyZWZcIlxuICAgIDpsaW5rPVwibGlua1wiXG4gICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgIHYtb249XCJsaXN0ZW5lcnNcIlxuICA+XG4gICAgPHNwYW4gY2xhc3M9XCJtZGMtYnV0dG9uX19sYWJlbFwiPiA8c2xvdCAvPiA8L3NwYW4+XG4gIDwvY3VzdG9tLWJ1dHRvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBEaXNwYXRjaEV2ZW50TWl4aW4sIEN1c3RvbUJ1dHRvbk1peGluIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IFJpcHBsZU1peGluIH0gZnJvbSAnLi4vcmlwcGxlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtYnV0dG9uLWJhc2UnLFxuICBtaXhpbnM6IFtEaXNwYXRjaEV2ZW50TWl4aW4sIEN1c3RvbUJ1dHRvbk1peGluLCBSaXBwbGVNaXhpbl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8c2NyaXB0PlxuaW1wb3J0IG1kY0J1dHRvbkJhc2UgZnJvbSAnLi9tZGMtYnV0dG9uLWJhc2UudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtYnV0dG9uJyxcbiAgZXh0ZW5kczogbWRjQnV0dG9uQmFzZSxcbiAgcHJvcHM6IHtcbiAgICByYWlzZWQ6IEJvb2xlYW4sXG4gICAgdW5lbGV2YXRlZDogQm9vbGVhbixcbiAgICBvdXRsaW5lZDogQm9vbGVhbixcbiAgICBkZW5zZTogQm9vbGVhblxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgICdtZGMtYnV0dG9uJzogdHJ1ZSxcbiAgICAgICAgJ21kYy1idXR0b24tLXJhaXNlZCc6IHRoaXMucmFpc2VkLFxuICAgICAgICAnbWRjLWJ1dHRvbi0tdW5lbGV2YXRlZCc6IHRoaXMudW5lbGV2YXRlZCxcbiAgICAgICAgJ21kYy1idXR0b24tLW91dGxpbmVkJzogdGhpcy5vdXRsaW5lZCxcbiAgICAgICAgJ21kYy1idXR0b24tLWRlbnNlJzogdGhpcy5kZW5zZVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICByYWlzZWQoKSB7XG4gICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCAnbWRjLWJ1dHRvbi0tcmFpc2VkJywgdGhpcy5yYWlzZWQpXG4gICAgfSxcbiAgICB1bmVsZXZhdGVkKCkge1xuICAgICAgdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgJ21kYy1idXR0b24tLXVuZWxldmF0ZWQnLCB0aGlzLnVuZWxldmF0ZWQpXG4gICAgfSxcbiAgICBvdXRsaW5lZCgpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsICdtZGMtYnV0dG9uLS1vdXRsaW5lZCcsIHRoaXMub3V0bGluZWQpXG4gICAgfSxcbiAgICBkZW5zZSgpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsICdtZGMtYnV0dG9uLS1kZW5zZScsIHRoaXMuZGVuc2UpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBcInBvbnlmaWxsXCIgaXMgYSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgbW9kaWZ5IHRoZSBnbG9iYWwgcHJvdG90eXBlIGNoYWluLlxuICogVGhpcyBtYWtlcyBwb255ZmlsbHMgc2FmZXIgdGhhbiB0cmFkaXRpb25hbCBwb2x5ZmlsbHMsIGVzcGVjaWFsbHkgZm9yIGxpYnJhcmllcyBsaWtlIE1EQy5cbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7P0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgaWYgKGVsZW1lbnQuY2xvc2VzdCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICB9XG5cbiAgbGV0IGVsID0gZWxlbWVudDtcbiAgd2hpbGUgKGVsKSB7XG4gICAgaWYgKG1hdGNoZXMoZWwsIHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IG5hdGl2ZU1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXNcbiAgICB8fCBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvclxuICAgIHx8IGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3I7XG4gIHJldHVybiBuYXRpdmVNYXRjaGVzLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xufVxuXG5leHBvcnQge2Nsb3Nlc3QsIG1hdGNoZXN9O1xuIiwidmFyIHRhYmJhYmxlID0gcmVxdWlyZSgndGFiYmFibGUnKTtcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG5cbnZhciBhY3RpdmVGb2N1c1RyYXBzID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdHJhcFF1ZXVlID0gW107XG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVUcmFwOiBmdW5jdGlvbih0cmFwKSB7XG4gICAgICBpZiAodHJhcFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGFjdGl2ZVRyYXAgPSB0cmFwUXVldWVbdHJhcFF1ZXVlLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoYWN0aXZlVHJhcCAhPT0gdHJhcCkge1xuICAgICAgICAgIGFjdGl2ZVRyYXAucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdHJhcEluZGV4ID0gdHJhcFF1ZXVlLmluZGV4T2YodHJhcCk7XG4gICAgICBpZiAodHJhcEluZGV4ID09PSAtMSkge1xuICAgICAgICB0cmFwUXVldWUucHVzaCh0cmFwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG1vdmUgdGhpcyBleGlzdGluZyB0cmFwIHRvIHRoZSBmcm9udCBvZiB0aGUgcXVldWVcbiAgICAgICAgdHJhcFF1ZXVlLnNwbGljZSh0cmFwSW5kZXgsIDEpO1xuICAgICAgICB0cmFwUXVldWUucHVzaCh0cmFwKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGVhY3RpdmF0ZVRyYXA6IGZ1bmN0aW9uKHRyYXApIHtcbiAgICAgIHZhciB0cmFwSW5kZXggPSB0cmFwUXVldWUuaW5kZXhPZih0cmFwKTtcbiAgICAgIGlmICh0cmFwSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRyYXBRdWV1ZS5zcGxpY2UodHJhcEluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRyYXBRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyYXBRdWV1ZVt0cmFwUXVldWUubGVuZ3RoIC0gMV0udW5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGZvY3VzVHJhcChlbGVtZW50LCB1c2VyT3B0aW9ucykge1xuICB2YXIgZG9jID0gZG9jdW1lbnQ7XG4gIHZhciBjb250YWluZXIgPVxuICAgIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IGRvYy5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpIDogZWxlbWVudDtcblxuICB2YXIgY29uZmlnID0geHRlbmQoXG4gICAge1xuICAgICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IHRydWUsXG4gICAgICBlc2NhcGVEZWFjdGl2YXRlczogdHJ1ZVxuICAgIH0sXG4gICAgdXNlck9wdGlvbnNcbiAgKTtcblxuICB2YXIgc3RhdGUgPSB7XG4gICAgZmlyc3RUYWJiYWJsZU5vZGU6IG51bGwsXG4gICAgbGFzdFRhYmJhYmxlTm9kZTogbnVsbCxcbiAgICBub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb246IG51bGwsXG4gICAgbW9zdFJlY2VudGx5Rm9jdXNlZE5vZGU6IG51bGwsXG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBwYXVzZWQ6IGZhbHNlXG4gIH07XG5cbiAgdmFyIHRyYXAgPSB7XG4gICAgYWN0aXZhdGU6IGFjdGl2YXRlLFxuICAgIGRlYWN0aXZhdGU6IGRlYWN0aXZhdGUsXG4gICAgcGF1c2U6IHBhdXNlLFxuICAgIHVucGF1c2U6IHVucGF1c2VcbiAgfTtcblxuICByZXR1cm4gdHJhcDtcblxuICBmdW5jdGlvbiBhY3RpdmF0ZShhY3RpdmF0ZU9wdGlvbnMpIHtcbiAgICBpZiAoc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG5cbiAgICBzdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgIHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbiA9IGRvYy5hY3RpdmVFbGVtZW50O1xuXG4gICAgdmFyIG9uQWN0aXZhdGUgPVxuICAgICAgYWN0aXZhdGVPcHRpb25zICYmIGFjdGl2YXRlT3B0aW9ucy5vbkFjdGl2YXRlXG4gICAgICAgID8gYWN0aXZhdGVPcHRpb25zLm9uQWN0aXZhdGVcbiAgICAgICAgOiBjb25maWcub25BY3RpdmF0ZTtcbiAgICBpZiAob25BY3RpdmF0ZSkge1xuICAgICAgb25BY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycygpO1xuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVhY3RpdmF0ZShkZWFjdGl2YXRlT3B0aW9ucykge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICBzdGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcblxuICAgIGFjdGl2ZUZvY3VzVHJhcHMuZGVhY3RpdmF0ZVRyYXAodHJhcCk7XG5cbiAgICB2YXIgb25EZWFjdGl2YXRlID1cbiAgICAgIGRlYWN0aXZhdGVPcHRpb25zICYmIGRlYWN0aXZhdGVPcHRpb25zLm9uRGVhY3RpdmF0ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZGVhY3RpdmF0ZU9wdGlvbnMub25EZWFjdGl2YXRlXG4gICAgICAgIDogY29uZmlnLm9uRGVhY3RpdmF0ZTtcbiAgICBpZiAob25EZWFjdGl2YXRlKSB7XG4gICAgICBvbkRlYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0dXJuRm9jdXMgPVxuICAgICAgZGVhY3RpdmF0ZU9wdGlvbnMgJiYgZGVhY3RpdmF0ZU9wdGlvbnMucmV0dXJuRm9jdXMgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGRlYWN0aXZhdGVPcHRpb25zLnJldHVybkZvY3VzXG4gICAgICAgIDogY29uZmlnLnJldHVybkZvY3VzT25EZWFjdGl2YXRlO1xuICAgIGlmIChyZXR1cm5Gb2N1cykge1xuICAgICAgZGVsYXkoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRyeUZvY3VzKHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgIGlmIChzdGF0ZS5wYXVzZWQgfHwgIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuICAgIHN0YXRlLnBhdXNlZCA9IHRydWU7XG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1bnBhdXNlKCkge1xuICAgIGlmICghc3RhdGUucGF1c2VkIHx8ICFzdGF0ZS5hY3RpdmUpIHJldHVybjtcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICBpZiAoIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgLy8gVGhlcmUgY2FuIGJlIG9ubHkgb25lIGxpc3RlbmluZyBmb2N1cyB0cmFwIGF0IGEgdGltZVxuICAgIGFjdGl2ZUZvY3VzVHJhcHMuYWN0aXZhdGVUcmFwKHRyYXApO1xuXG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuXG4gICAgLy8gRGVsYXkgZW5zdXJlcyB0aGF0IHRoZSBmb2N1c2VkIGVsZW1lbnQgZG9lc24ndCBjYXB0dXJlIHRoZSBldmVudFxuICAgIC8vIHRoYXQgY2F1c2VkIHRoZSBmb2N1cyB0cmFwIGFjdGl2YXRpb24uXG4gICAgZGVsYXkoZnVuY3Rpb24oKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgY2hlY2tGb2N1c0luLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB0cnVlKTtcblxuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGNoZWNrRm9jdXNJbiwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDbGljaywgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGVja0tleSwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5vZGVGb3JPcHRpb24ob3B0aW9uTmFtZSkge1xuICAgIHZhciBvcHRpb25WYWx1ZSA9IGNvbmZpZ1tvcHRpb25OYW1lXTtcbiAgICB2YXIgbm9kZSA9IG9wdGlvblZhbHVlO1xuICAgIGlmICghb3B0aW9uVmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgbm9kZSA9IGRvYy5xdWVyeVNlbGVjdG9yKG9wdGlvblZhbHVlKTtcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2AnICsgb3B0aW9uTmFtZSArICdgIHJlZmVycyB0byBubyBrbm93biBub2RlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5vZGUgPSBvcHRpb25WYWx1ZSgpO1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBvcHRpb25OYW1lICsgJ2AgZGlkIG5vdCByZXR1cm4gYSBub2RlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5pdGlhbEZvY3VzTm9kZSgpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAoZ2V0Tm9kZUZvck9wdGlvbignaW5pdGlhbEZvY3VzJykgIT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSBnZXROb2RlRm9yT3B0aW9uKCdpbml0aWFsRm9jdXMnKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5jb250YWlucyhkb2MuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIG5vZGUgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZSA9IHN0YXRlLmZpcnN0VGFiYmFibGVOb2RlIHx8IGdldE5vZGVGb3JPcHRpb24oJ2ZhbGxiYWNrRm9jdXMnKTtcbiAgICB9XG5cbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJZb3UgY2FuJ3QgaGF2ZSBhIGZvY3VzLXRyYXAgd2l0aG91dCBhdCBsZWFzdCBvbmUgZm9jdXNhYmxlIGVsZW1lbnRcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIC8vIFRoaXMgbmVlZHMgdG8gYmUgZG9uZSBvbiBtb3VzZWRvd24gYW5kIHRvdWNoc3RhcnQgaW5zdGVhZCBvZiBjbGlja1xuICAvLyBzbyB0aGF0IGl0IHByZWNlZGVzIHRoZSBmb2N1cyBldmVudC5cbiAgZnVuY3Rpb24gY2hlY2tQb2ludGVyRG93bihlKSB7XG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcbiAgICBpZiAoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzKSB7XG4gICAgICBkZWFjdGl2YXRlKHtcbiAgICAgICAgcmV0dXJuRm9jdXM6ICF0YWJiYWJsZS5pc0ZvY3VzYWJsZShlLnRhcmdldClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gSW4gY2FzZSBmb2N1cyBlc2NhcGVzIHRoZSB0cmFwIGZvciBzb21lIHN0cmFuZ2UgcmVhc29uLCBwdWxsIGl0IGJhY2sgaW4uXG4gIGZ1bmN0aW9uIGNoZWNrRm9jdXNJbihlKSB7XG4gICAgLy8gSW4gRmlyZWZveCB3aGVuIHlvdSBUYWIgb3V0IG9mIGFuIGlmcmFtZSB0aGUgRG9jdW1lbnQgaXMgYnJpZWZseSBmb2N1c2VkLlxuICAgIGlmIChjb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpIHx8IGUudGFyZ2V0IGluc3RhbmNlb2YgRG9jdW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB0cnlGb2N1cyhzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSB8fCBnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tLZXkoZSkge1xuICAgIGlmIChjb25maWcuZXNjYXBlRGVhY3RpdmF0ZXMgIT09IGZhbHNlICYmIGlzRXNjYXBlRXZlbnQoZSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRlYWN0aXZhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzVGFiRXZlbnQoZSkpIHtcbiAgICAgIGNoZWNrVGFiKGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhpamFjayBUYWIgZXZlbnRzIG9uIHRoZSBmaXJzdCBhbmQgbGFzdCBmb2N1c2FibGUgbm9kZXMgb2YgdGhlIHRyYXAsXG4gIC8vIGluIG9yZGVyIHRvIHByZXZlbnQgZm9jdXMgZnJvbSBlc2NhcGluZy4gSWYgaXQgZXNjYXBlcyBmb3IgZXZlbiBhXG4gIC8vIG1vbWVudCBpdCBjYW4gZW5kIHVwIHNjcm9sbGluZyB0aGUgcGFnZSBhbmQgY2F1c2luZyBjb25mdXNpb24gc28gd2VcbiAgLy8ga2luZCBvZiBuZWVkIHRvIGNhcHR1cmUgdGhlIGFjdGlvbiBhdCB0aGUga2V5ZG93biBwaGFzZS5cbiAgZnVuY3Rpb24gY2hlY2tUYWIoZSkge1xuICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICBpZiAoZS5zaGlmdEtleSAmJiBlLnRhcmdldCA9PT0gc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRyeUZvY3VzKHN0YXRlLmxhc3RUYWJiYWJsZU5vZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWUuc2hpZnRLZXkgJiYgZS50YXJnZXQgPT09IHN0YXRlLmxhc3RUYWJiYWJsZU5vZGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRyeUZvY3VzKHN0YXRlLmZpcnN0VGFiYmFibGVOb2RlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0NsaWNrKGUpIHtcbiAgICBpZiAoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzKSByZXR1cm47XG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKSB7XG4gICAgdmFyIHRhYmJhYmxlTm9kZXMgPSB0YWJiYWJsZShjb250YWluZXIpO1xuICAgIHN0YXRlLmZpcnN0VGFiYmFibGVOb2RlID0gdGFiYmFibGVOb2Rlc1swXSB8fCBnZXRJbml0aWFsRm9jdXNOb2RlKCk7XG4gICAgc3RhdGUubGFzdFRhYmJhYmxlTm9kZSA9XG4gICAgICB0YWJiYWJsZU5vZGVzW3RhYmJhYmxlTm9kZXMubGVuZ3RoIC0gMV0gfHwgZ2V0SW5pdGlhbEZvY3VzTm9kZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJ5Rm9jdXMobm9kZSkge1xuICAgIGlmIChub2RlID09PSBkb2MuYWN0aXZlRWxlbWVudCkgcmV0dXJuO1xuICAgIGlmICghbm9kZSB8fCAhbm9kZS5mb2N1cykge1xuICAgICAgdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBub2RlLmZvY3VzKCk7XG4gICAgc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgPSBub2RlO1xuICAgIGlmIChpc1NlbGVjdGFibGVJbnB1dChub2RlKSkge1xuICAgICAgbm9kZS5zZWxlY3QoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTZWxlY3RhYmxlSW5wdXQobm9kZSkge1xuICByZXR1cm4gKFxuICAgIG5vZGUudGFnTmFtZSAmJlxuICAgIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnICYmXG4gICAgdHlwZW9mIG5vZGUuc2VsZWN0ID09PSAnZnVuY3Rpb24nXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzRXNjYXBlRXZlbnQoZSkge1xuICByZXR1cm4gZS5rZXkgPT09ICdFc2NhcGUnIHx8IGUua2V5ID09PSAnRXNjJyB8fCBlLmtleUNvZGUgPT09IDI3O1xufVxuXG5mdW5jdGlvbiBpc1RhYkV2ZW50KGUpIHtcbiAgcmV0dXJuIGUua2V5ID09PSAnVGFiJyB8fCBlLmtleUNvZGUgPT09IDk7XG59XG5cbmZ1bmN0aW9uIGRlbGF5KGZuKSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KGZuLCAwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmb2N1c1RyYXA7XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICByZWY9XCJyb290XCJcbiAgICA6Y2xhc3M9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGU9XCJzdHlsZXNcIlxuICAgIGFyaWEtbW9kYWw9XCJ0cnVlXCJcbiAgICA6YXJpYS1sYWJlbGxlZGJ5PVwiJ2xhYmVsJyArIHZtYV91aWRfXCJcbiAgICA6YXJpYS1kZXNjcmliZWRieT1cIidkZXNjJyArIHZtYV91aWRfXCJcbiAgICBjbGFzcz1cIm1kYy1kaWFsb2dcIlxuICAgIHJvbGU9XCJhbGVydGRpYWxvZ1wiXG4gICAgQGNsaWNrPVwib25DbGlja1wiXG4gICAgQGtleWRvd249XCJvbkNsaWNrXCJcbiAgPlxuICAgIDxkaXYgcmVmPVwiY29udGFpbmVyXCIgY2xhc3M9XCJtZGMtZGlhbG9nX19jb250YWluZXJcIj5cbiAgICAgIDxkaXYgcmVmPVwic3VyZmFjZVwiIDpjbGFzcz1cInN1cmZhY2VDbGFzc2VzXCIgY2xhc3M9XCJtZGMtZGlhbG9nX19zdXJmYWNlXCI+XG4gICAgICAgIDxoMiB2LWlmPVwidGl0bGVcIiBjbGFzcz1cIm1kYy1kaWFsb2dfX3RpdGxlXCIgOmlkPVwiJ2xhYmVsJyArIHZtYV91aWRfXCI+XG4gICAgICAgICAgPCEtLVxuICAgICAgICAgIC0tPnt7IHRpdGxlXG4gICAgICAgICAgfX08IS0tLS0+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxkaXYgcmVmPVwiY29udGVudFwiIGNsYXNzPVwibWRjLWRpYWxvZ19fY29udGVudFwiIDppZD1cIidkZXNjJyArIHZtYV91aWRfXCI+XG4gICAgICAgICAgPHNsb3QgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb290ZXIgdi1pZj1cImFjY2VwdCB8fCBjYW5jZWxcIiBjbGFzcz1cIm1kYy1kaWFsb2dfX2FjdGlvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHYtaWY9XCJjYW5jZWxcIlxuICAgICAgICAgICAgY2xhc3M9XCJtZGMtYnV0dG9uIG1kYy1kaWFsb2dfX2J1dHRvblwiXG4gICAgICAgICAgICBkYXRhLW1kYy1kaWFsb2ctYWN0aW9uPVwibm9cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGNhbmNlbCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgcmVmPVwiZGVmYXVsdEJ1dHRvblwiXG4gICAgICAgICAgICA6ZGlzYWJsZWQ9XCJhY2NlcHREaXNhYmxlZFwiXG4gICAgICAgICAgICBjbGFzcz1cIm1kYy1idXR0b24gbWRjLWRpYWxvZ19fYnV0dG9uIFwiXG4gICAgICAgICAgICBkYXRhLW1kYy1kaWFsb2ctYWN0aW9uPVwieWVzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBhY2NlcHQgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWRjLWRpYWxvZ19fc2NyaW1cIiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTURDRGlhbG9nRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvZGlhbG9nL2ZvdW5kYXRpb24nXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJ0BtYXRlcmlhbC9kaWFsb2cvdXRpbCdcbmltcG9ydCB7IG1kY0J1dHRvbiB9IGZyb20gJy4uL2J1dHRvbidcbmltcG9ydCB7IFZNQVVuaXF1ZUlkTWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgY2xvc2VzdCwgbWF0Y2hlcyB9IGZyb20gJ0BtYXRlcmlhbC9kb20vcG9ueWZpbGwnXG5pbXBvcnQgY3JlYXRlRm9jdXNUcmFwIGZyb20gJ2ZvY3VzLXRyYXAnXG5jb25zdCBzdHJpbmdzID0gTURDRGlhbG9nRm91bmRhdGlvbi5zdHJpbmdzXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1kaWFsb2cnLFxuICBjb21wb25lbnRzOiB7XG4gICAgbWRjQnV0dG9uOiBtZGNCdXR0b25cbiAgfSxcbiAgbWl4aW5zOiBbVk1BVW5pcXVlSWRNaXhpbl0sXG4gIG1vZGVsOiB7XG4gICAgcHJvcDogJ29wZW4nLFxuICAgIGV2ZW50OiAnY2hhbmdlJ1xuICB9LFxuICBwcm9wczoge1xuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIGFjY2VwdDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ09rJ1xuICAgIH0sXG4gICAgYWNjZXB0RGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgYWNjZXB0UmFpc2VkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGNhbmNlbDoge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBjYW5jZWxSYWlzZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgYWNjZW50OiBCb29sZWFuLFxuICAgIHNjcm9sbGFibGU6IEJvb2xlYW4sXG4gICAgb3BlbjogQm9vbGVhblxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgICdtZGMtdGhlbWUtLWRhcmsnOiB0aGlzLmRhcmtcbiAgICAgIH0sXG4gICAgICBzdHlsZXM6IHt9LFxuICAgICAgc3VyZmFjZUNsYXNzZXM6IHt9LFxuICAgICAgYm9keUNsYXNzZXM6IHtcbiAgICAgICAgJ21kYy1kaWFsb2dfX2JvZHktLXNjcm9sbGFibGUnOiB0aGlzLnNjcm9sbGFibGVcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgb3BlbjogJ29uT3Blbl8nXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgaWYgKHRoaXMuYWNjZXB0KSB7XG4gICAgICB0aGlzLmZvY3VzVHJhcCA9IHV0aWwuY3JlYXRlRm9jdXNUcmFwSW5zdGFuY2UoXG4gICAgICAgIHRoaXMuJHJlZnMuY29udGFpbmVyLFxuICAgICAgICBjcmVhdGVGb2N1c1RyYXBcbiAgICAgIClcbiAgICB9XG5cbiAgICB0aGlzLmJ1dHRvbnNfID0gW10uc2xpY2UuY2FsbChcbiAgICAgIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5CVVRUT05fU0VMRUNUT1IpXG4gICAgKVxuXG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ0RpYWxvZ0ZvdW5kYXRpb24oe1xuICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRkZWxldGUodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUpLFxuICAgICAgaGFzQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcbiAgICAgIGFkZEJvZHlDbGFzczogY2xhc3NOYW1lID0+IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQm9keUNsYXNzOiBjbGFzc05hbWUgPT4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBldmVudFRhcmdldE1hdGNoZXM6ICh0YXJnZXQsIHNlbGVjdG9yKSA9PiBtYXRjaGVzKHRhcmdldCwgc2VsZWN0b3IpLFxuICAgICAgdHJhcEZvY3VzOiAoKSA9PiB0aGlzLmZvY3VzVHJhcCAmJiB0aGlzLmZvY3VzVHJhcC5hY3RpdmF0ZSgpLFxuICAgICAgcmVsZWFzZUZvY3VzOiAoKSA9PiB0aGlzLmZvY3VzVHJhcCAmJiB0aGlzLmZvY3VzVHJhcC5kZWFjdGl2YXRlKCksXG4gICAgICBpc0NvbnRlbnRTY3JvbGxhYmxlOiAoKSA9PlxuICAgICAgICAhIXRoaXMuJHJlZnMuY29udGVudCAmJiB1dGlsLmlzU2Nyb2xsYWJsZSh0aGlzLiRyZWZzLmNvbnRlbnQpLFxuICAgICAgYXJlQnV0dG9uc1N0YWNrZWQ6ICgpID0+IHV0aWwuYXJlVG9wc01pc2FsaWduZWQodGhpcy5idXR0b25zXyksXG5cbiAgICAgIGdldEFjdGlvbkZyb21FdmVudDogZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY2xvc2VzdChldmVudC50YXJnZXQsIGBbJHtzdHJpbmdzLkFDVElPTl9BVFRSSUJVVEV9XWApXG4gICAgICAgIHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKHN0cmluZ3MuQUNUSU9OX0FUVFJJQlVURSlcbiAgICAgIH0sXG4gICAgICBjbGlja0RlZmF1bHRCdXR0b246ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuJHJlZnMuZGVmYXVsdEJ1dHRvbikge1xuICAgICAgICAgIHRoaXMuJHJlZnMuZGVmYXVsdEJ1dHRvbi5jbGljaygpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZXZlcnNlQnV0dG9uczogKCkgPT4ge1xuICAgICAgICB0aGlzLmJ1dHRvbnNfLnJldmVyc2UoKVxuICAgICAgICB0aGlzLmJ1dHRvbnNfLmZvckVhY2goYnV0dG9uID0+XG4gICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgICAgICApXG4gICAgICB9LFxuICAgICAgbm90aWZ5T3BlbmluZzogKCkgPT4gdGhpcy4kZW1pdChzdHJpbmdzLk9QRU5JTkdfRVZFTlQsIHt9KSxcbiAgICAgIG5vdGlmeU9wZW5lZDogKCkgPT4gdGhpcy4kZW1pdChzdHJpbmdzLk9QRU5FRF9FVkVOVCwge30pLFxuICAgICAgbm90aWZ5Q2xvc2luZzogYWN0aW9uID0+IHtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZmFsc2UpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGlvbilcbiAgICAgICAgdGhpcy4kZW1pdChzdHJpbmdzLkNMT1NJTkdfRVZFTlQsIGFjdGlvbiA/IHsgYWN0aW9uIH0gOiB7fSlcbiAgICAgIH0sXG4gICAgICBub3RpZnlDbG9zZWQ6IGFjdGlvbiA9PlxuICAgICAgICB0aGlzLiRlbWl0KHN0cmluZ3MuQ0xPU0VEX0VWRU5ULCBhY3Rpb24gPyB7IGFjdGlvbiB9IDoge30pXG4gICAgfSlcblxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcbiAgICB0aGlzLm9wZW4gJiYgdGhpcy5mb3VuZGF0aW9uLm9wZW4oKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uT3Blbl8odmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24ub3BlbigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uY2xvc2UoKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlSW50ZXJhY3Rpb24oZXZlbnQpXG4gICAgfSxcbiAgICBvbkNhbmNlbCgpIHtcbiAgICAgIGlmICh0aGlzLiRsaXN0ZW5lcnNbJ3ZhbGlkYXRlQ2FuY2VsJ10pIHtcbiAgICAgICAgdGhpcy4kZW1pdCgndmFsaWRhdGVDYW5jZWwnLCB7XG4gICAgICAgICAgY2FuY2VsOiAobm90aWZ5ID0gdHJ1ZSkgPT4ge1xuICAgICAgICAgICAgLy8gaWYgbm90aWZ5ID0gZmFsc2UsIHRoZSBkaWFsb2cgd2lsbCBjbG9zZVxuICAgICAgICAgICAgLy8gYnV0IHRoZSBub3RpZnlBY2NlcHQgbWV0aG9kIHdpbGwgbm90IGJlIGNhbGxlZFxuICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBub3RpZnkgbGlzdGVuZXJzIHRoZSBvcGVuIHN0YXRlXG4gICAgICAgICAgICAvLyBpcyBjaGFuZ2luZy5cbiAgICAgICAgICAgIGlmICghbm90aWZ5KSB7XG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmNhbmNlbChub3RpZnkpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmNhbmNlbCh0cnVlKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25BY2NlcHQoKSB7XG4gICAgICBpZiAodGhpcy4kbGlzdGVuZXJzWyd2YWxpZGF0ZSddKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3ZhbGlkYXRlJywge1xuICAgICAgICAgIGFjY2VwdDogKG5vdGlmeSA9IHRydWUpID0+IHtcbiAgICAgICAgICAgIC8vIGlmIG5vdGlmeSA9IGZhbHNlLCB0aGUgZGlhbG9nIHdpbGwgY2xvc2VcbiAgICAgICAgICAgIC8vIGJ1dCB0aGUgbm90aWZ5QWNjZXB0IG1ldGhvZCB3aWxsIG5vdCBiZSBjYWxsZWRcbiAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gbm90aWZ5IGxpc3RlbmVycyB0aGUgb3BlbiBzdGF0ZVxuICAgICAgICAgICAgLy8gaXMgY2hhbmdpbmcuXG4gICAgICAgICAgICBpZiAoIW5vdGlmeSkge1xuICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbi5hY2NlcHQobm90aWZ5KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5hY2NlcHQodHJ1ZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3coKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24ub3BlbigpXG4gICAgfSxcbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5jbG9zZSgpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IG1kY0RpYWxvZyBmcm9tICcuL21kYy1kaWFsb2cudnVlJ1xuXG5leHBvcnQgeyBtZGNEaWFsb2cgfVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlUGx1Z2luKHtcbiAgbWRjRGlhbG9nXG59KVxuIiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJ1xuaW1wb3J0IHsgYXV0b0luaXQgfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHBsdWdpbiBmcm9tICcuL2luZGV4LmpzJ1xuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXG5cbmF1dG9Jbml0KHBsdWdpbilcbiJdLCJuYW1lcyI6WyJhdXRvSW5pdCIsInBsdWdpbiIsIl9WdWUiLCJ3aW5kb3ciLCJWdWUiLCJnbG9iYWwiLCJ1c2UiLCJCYXNlUGx1Z2luIiwiY29tcG9uZW50cyIsInZlcnNpb24iLCJpbnN0YWxsIiwidm0iLCJrZXkiLCJjb21wb25lbnQiLCJuYW1lIiwiQ3VzdG9tRWxlbWVudCIsImZ1bmN0aW9uYWwiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsInByb3BzIiwiaXMiLCJ0YWciLCJkYXRhIiwiY2hpbGRyZW4iLCJDdXN0b21FbGVtZW50TWl4aW4iLCJDdXN0b21CdXR0b24iLCJsaW5rIiwiT2JqZWN0IiwiaCIsImVsZW1lbnQiLCJwYXJlbnQiLCIkcm91dGVyIiwiJHJvb3QiLCIkb3B0aW9ucyIsImF0dHJzIiwicm9sZSIsIm9uIiwiY2xpY2siLCJuYXRpdmVPbiIsImhyZWYiLCJDdXN0b21CdXR0b25NaXhpbiIsIlN0cmluZyIsImRpc2FibGVkIiwiQm9vbGVhbiIsInRvIiwiZXhhY3QiLCJhcHBlbmQiLCJyZXBsYWNlIiwiYWN0aXZlQ2xhc3MiLCJleGFjdEFjdGl2ZUNsYXNzIiwiY29tcHV0ZWQiLCJEaXNwYXRjaEV2ZW50TWl4aW4iLCJldmVudCIsIkFycmF5IiwibWV0aG9kcyIsImRpc3BhdGNoRXZlbnQiLCJldnQiLCIkZW1pdCIsInR5cGUiLCJ0YXJnZXQiLCJldmVudFRhcmdldCIsImFyZ3MiLCJldmVudEFyZ3MiLCJsaXN0ZW5lcnMiLCIkbGlzdGVuZXJzIiwiZSIsInNjb3BlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJWTUFVbmlxdWVJZE1peGluIiwiYmVmb3JlQ3JlYXRlIiwidm1hX3VpZF8iLCJfdWlkIiwiTURDRm91bmRhdGlvbiIsImFkYXB0ZXIiLCJhZGFwdGVyXyIsIk1EQ0RpYWxvZ0FkYXB0ZXIiLCJjbGFzc05hbWUiLCJzZWxlY3RvciIsImFjdGlvbiIsImNzc0NsYXNzZXMiLCJPUEVOIiwiT1BFTklORyIsIkNMT1NJTkciLCJTQ1JPTExBQkxFIiwiU1RBQ0tFRCIsIlNDUk9MTF9MT0NLIiwic3RyaW5ncyIsIlNDUklNX1NFTEVDVE9SIiwiQ09OVEFJTkVSX1NFTEVDVE9SIiwiU1VSRkFDRV9TRUxFQ1RPUiIsIkNPTlRFTlRfU0VMRUNUT1IiLCJCVVRUT05fU0VMRUNUT1IiLCJERUZBVUxUX0JVVFRPTl9TRUxFQ1RPUiIsIlNVUFBSRVNTX0RFRkFVTFRfUFJFU1NfU0VMRUNUT1IiLCJqb2luIiwiT1BFTklOR19FVkVOVCIsIk9QRU5FRF9FVkVOVCIsIkNMT1NJTkdfRVZFTlQiLCJDTE9TRURfRVZFTlQiLCJBQ1RJT05fQVRUUklCVVRFIiwiQ0xPU0VfQUNUSU9OIiwiREVTVFJPWV9BQ1RJT04iLCJudW1iZXJzIiwiRElBTE9HX0FOSU1BVElPTl9PUEVOX1RJTUVfTVMiLCJESUFMT0dfQU5JTUFUSU9OX0NMT1NFX1RJTUVfTVMiLCJNRENEaWFsb2dGb3VuZGF0aW9uIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwiYWRkQm9keUNsYXNzIiwicmVtb3ZlQm9keUNsYXNzIiwiZXZlbnRUYXJnZXRNYXRjaGVzIiwidHJhcEZvY3VzIiwicmVsZWFzZUZvY3VzIiwiaXNDb250ZW50U2Nyb2xsYWJsZSIsImFyZUJ1dHRvbnNTdGFja2VkIiwiZ2V0QWN0aW9uRnJvbUV2ZW50IiwiY2xpY2tEZWZhdWx0QnV0dG9uIiwicmV2ZXJzZUJ1dHRvbnMiLCJub3RpZnlPcGVuaW5nIiwibm90aWZ5T3BlbmVkIiwibm90aWZ5Q2xvc2luZyIsIm5vdGlmeUNsb3NlZCIsImRlZmF1bHRBZGFwdGVyIiwiaXNPcGVuXyIsImFuaW1hdGlvbkZyYW1lXyIsImFuaW1hdGlvblRpbWVyXyIsImxheW91dEZyYW1lXyIsImVzY2FwZUtleUFjdGlvbl8iLCJzY3JpbUNsaWNrQWN0aW9uXyIsImF1dG9TdGFja0J1dHRvbnNfIiwiYXJlQnV0dG9uc1N0YWNrZWRfIiwic2V0QXV0b1N0YWNrQnV0dG9ucyIsImNsb3NlIiwiY2xlYXJUaW1lb3V0IiwiaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJydW5OZXh0QW5pbWF0aW9uRnJhbWVfIiwibGF5b3V0Iiwic2V0VGltZW91dCIsImF1dG9TdGFjayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxheW91dEludGVybmFsXyIsImRldGVjdFN0YWNrZWRCdXR0b25zXyIsImRldGVjdFNjcm9sbGFibGVDb250ZW50XyIsImlzQ2xpY2siLCJpc0VudGVyIiwia2V5Q29kZSIsImNhbGxiYWNrIiwiY2FuZGlkYXRlU2VsZWN0b3JzIiwiY2FuZGlkYXRlU2VsZWN0b3IiLCJtYXRjaGVzIiwiRWxlbWVudCIsInByb3RvdHlwZSIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwidGFiYmFibGUiLCJlbCIsIm9wdGlvbnMiLCJlbGVtZW50RG9jdW1lbnQiLCJvd25lckRvY3VtZW50IiwicmVndWxhclRhYmJhYmxlcyIsIm9yZGVyZWRUYWJiYWJsZXMiLCJ1bnRvdWNoYWJpbGl0eUNoZWNrZXIiLCJVbnRvdWNoYWJpbGl0eUNoZWNrZXIiLCJjYW5kaWRhdGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImluY2x1ZGVDb250YWluZXIiLCJjYWxsIiwic2xpY2UiLCJhcHBseSIsInVuc2hpZnQiLCJpIiwiY2FuZGlkYXRlIiwiY2FuZGlkYXRlVGFiaW5kZXgiLCJsZW5ndGgiLCJpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUiLCJnZXRUYWJpbmRleCIsInB1c2giLCJkb2N1bWVudE9yZGVyIiwidGFiSW5kZXgiLCJub2RlIiwidGFiYmFibGVOb2RlcyIsInNvcnQiLCJzb3J0T3JkZXJlZFRhYmJhYmxlcyIsIm1hcCIsImEiLCJjb25jYXQiLCJpc1RhYmJhYmxlIiwiaXNGb2N1c2FibGUiLCJpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlIiwiaXNOb25UYWJiYWJsZVJhZGlvIiwiRXJyb3IiLCJpc0hpZGRlbklucHV0IiwiaXNVbnRvdWNoYWJsZSIsImZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yIiwidGFiaW5kZXhBdHRyIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJpc05hTiIsImlzQ29udGVudEVkaXRhYmxlIiwiYiIsImZpbmQiLCJsaXN0IiwicHJlZGljYXRlIiwiY29udGVudEVkaXRhYmxlIiwiaXNJbnB1dCIsInRhZ05hbWUiLCJpc1JhZGlvIiwiaXNUYWJiYWJsZVJhZGlvIiwiZ2V0Q2hlY2tlZFJhZGlvIiwibm9kZXMiLCJjaGVja2VkIiwicmFkaW9TZXQiLCJkb2MiLCJjYWNoZSIsImhhc0Rpc3BsYXlOb25lIiwibm9kZUNvbXB1dGVkU3R5bGUiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJjYWNoZWQiLCJpdGVtIiwiZGVmYXVsdFZpZXciLCJnZXRDb21wdXRlZFN0eWxlIiwicmVzdWx0IiwiZGlzcGxheSIsInBhcmVudE5vZGUiLCJkb2N1bWVudEVsZW1lbnQiLCJjb21wdXRlZFN0eWxlIiwidmlzaWJpbGl0eSIsIm1vZHVsZSIsImV4dGVuZCIsImhhc093blByb3BlcnR5IiwiYXJndW1lbnRzIiwic291cmNlIiwiYWN0aXZlRm9jdXNUcmFwcyIsInRyYXBRdWV1ZSIsImFjdGl2YXRlVHJhcCIsInRyYXAiLCJhY3RpdmVUcmFwIiwicGF1c2UiLCJ0cmFwSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZGVhY3RpdmF0ZVRyYXAiLCJ1bnBhdXNlIiwiZm9jdXNUcmFwIiwidXNlck9wdGlvbnMiLCJkb2N1bWVudCIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJjb25maWciLCJ4dGVuZCIsInJldHVybkZvY3VzT25EZWFjdGl2YXRlIiwiZXNjYXBlRGVhY3RpdmF0ZXMiLCJzdGF0ZSIsImZpcnN0VGFiYmFibGVOb2RlIiwibGFzdFRhYmJhYmxlTm9kZSIsIm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbiIsIm1vc3RSZWNlbnRseUZvY3VzZWROb2RlIiwiYWN0aXZlIiwicGF1c2VkIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiYWN0aXZhdGVPcHRpb25zIiwidXBkYXRlVGFiYmFibGVOb2RlcyIsImFjdGl2ZUVsZW1lbnQiLCJvbkFjdGl2YXRlIiwiYWRkTGlzdGVuZXJzIiwiZGVhY3RpdmF0ZU9wdGlvbnMiLCJyZW1vdmVMaXN0ZW5lcnMiLCJvbkRlYWN0aXZhdGUiLCJ1bmRlZmluZWQiLCJyZXR1cm5Gb2N1cyIsImRlbGF5IiwidHJ5Rm9jdXMiLCJnZXRJbml0aWFsRm9jdXNOb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrRm9jdXNJbiIsImNoZWNrUG9pbnRlckRvd24iLCJjaGVja0NsaWNrIiwiY2hlY2tLZXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0Tm9kZUZvck9wdGlvbiIsIm9wdGlvbk5hbWUiLCJvcHRpb25WYWx1ZSIsImNvbnRhaW5zIiwiY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMiLCJwcmV2ZW50RGVmYXVsdCIsIkRvY3VtZW50Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiaXNFc2NhcGVFdmVudCIsImlzVGFiRXZlbnQiLCJjaGVja1RhYiIsInNoaWZ0S2V5IiwiZm9jdXMiLCJpc1NlbGVjdGFibGVJbnB1dCIsInNlbGVjdCIsInRvTG93ZXJDYXNlIiwiZm4iLCJjcmVhdGVGb2N1c1RyYXBJbnN0YW5jZSIsInN1cmZhY2VFbCIsImZvY3VzVHJhcEZhY3RvcnkiLCJjcmVhdGVGb2N1c1RyYXAiLCJpbml0aWFsRm9jdXNFbCIsImluaXRpYWxGb2N1cyIsImlzU2Nyb2xsYWJsZSIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImFyZVRvcHNNaXNhbGlnbmVkIiwiZWxzIiwidG9wcyIsIlNldCIsImZvckVhY2giLCJhZGQiLCJvZmZzZXRUb3AiLCJzaXplIiwiTURDQ29tcG9uZW50Iiwicm9vdCIsImZvdW5kYXRpb24iLCJyb290XyIsImluaXRpYWxpemUiLCJmb3VuZGF0aW9uXyIsImdldERlZmF1bHRGb3VuZGF0aW9uIiwiaW5pdCIsImluaXRpYWxTeW5jV2l0aERPTSIsImRlc3Ryb3kiLCJldnRUeXBlIiwiaGFuZGxlciIsImV2dERhdGEiLCJzaG91bGRCdWJibGUiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImJ1YmJsZXMiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsIk1EQ1JpcHBsZUFkYXB0ZXIiLCJ2YXJOYW1lIiwidmFsdWUiLCJST09UIiwiVU5CT1VOREVEIiwiQkdfRk9DVVNFRCIsIkZHX0FDVElWQVRJT04iLCJGR19ERUFDVElWQVRJT04iLCJWQVJfTEVGVCIsIlZBUl9UT1AiLCJWQVJfRkdfU0laRSIsIlZBUl9GR19TQ0FMRSIsIlZBUl9GR19UUkFOU0xBVEVfU1RBUlQiLCJWQVJfRkdfVFJBTlNMQVRFX0VORCIsIlBBRERJTkciLCJJTklUSUFMX09SSUdJTl9TQ0FMRSIsIkRFQUNUSVZBVElPTl9USU1FT1VUX01TIiwiRkdfREVBQ1RJVkFUSU9OX01TIiwiVEFQX0RFTEFZX01TIiwic3VwcG9ydHNDc3NWYXJpYWJsZXNfIiwic3VwcG9ydHNQYXNzaXZlXyIsImRldGVjdEVkZ2VQc2V1ZG9WYXJCdWciLCJ3aW5kb3dPYmoiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJoYXNQc2V1ZG9WYXJCdWciLCJib3JkZXJUb3BTdHlsZSIsInJlbW92ZSIsInN1cHBvcnRzQ3NzVmFyaWFibGVzIiwiZm9yY2VSZWZyZXNoIiwic3VwcG9ydHNGdW5jdGlvblByZXNlbnQiLCJDU1MiLCJzdXBwb3J0cyIsImV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMiLCJ3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMiLCJhcHBseVBhc3NpdmUiLCJnbG9iYWxPYmoiLCJpc1N1cHBvcnRlZCIsInBhc3NpdmUiLCJnZXRNYXRjaGVzUHJvcGVydHkiLCJIVE1MRWxlbWVudFByb3RvdHlwZSIsIm1hdGNoZXNNZXRob2RzIiwibWV0aG9kIiwibWF0Y2hlc01ldGhvZCIsImdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyIsImV2IiwicGFnZU9mZnNldCIsImNsaWVudFJlY3QiLCJ4IiwieSIsImRvY3VtZW50WCIsImxlZnQiLCJkb2N1bWVudFkiLCJ0b3AiLCJub3JtYWxpemVkWCIsIm5vcm1hbGl6ZWRZIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiQUNUSVZBVElPTl9FVkVOVF9UWVBFUyIsIlBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTIiwiYWN0aXZhdGVkVGFyZ2V0cyIsIk1EQ1JpcHBsZUZvdW5kYXRpb24iLCJicm93c2VyU3VwcG9ydHNDc3NWYXJzIiwiaXNVbmJvdW5kZWQiLCJpc1N1cmZhY2VBY3RpdmUiLCJpc1N1cmZhY2VEaXNhYmxlZCIsImNvbnRhaW5zRXZlbnRUYXJnZXQiLCJyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyIiwiZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwiZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJ1cGRhdGVDc3NWYXJpYWJsZSIsImNvbXB1dGVCb3VuZGluZ1JlY3QiLCJnZXRXaW5kb3dQYWdlT2Zmc2V0IiwiZnJhbWVfIiwid2lkdGgiLCJoZWlnaHQiLCJhY3RpdmF0aW9uU3RhdGVfIiwiZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8iLCJpbml0aWFsU2l6ZV8iLCJtYXhSYWRpdXNfIiwiYWN0aXZhdGVIYW5kbGVyXyIsImFjdGl2YXRlXyIsImRlYWN0aXZhdGVIYW5kbGVyXyIsImRlYWN0aXZhdGVfIiwiZm9jdXNIYW5kbGVyXyIsImhhbmRsZUZvY3VzIiwiYmx1ckhhbmRsZXJfIiwiaGFuZGxlQmx1ciIsInJlc2l6ZUhhbmRsZXJfIiwidW5ib3VuZGVkQ29vcmRzXyIsImZnU2NhbGVfIiwiYWN0aXZhdGlvblRpbWVyXyIsImZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyIsImFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8iLCJhY3RpdmF0aW9uVGltZXJDYWxsYmFja18iLCJydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8iLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudF8iLCJpc0FjdGl2YXRlZCIsImhhc0RlYWN0aXZhdGlvblVYUnVuIiwid2FzQWN0aXZhdGVkQnlQb2ludGVyIiwid2FzRWxlbWVudE1hZGVBY3RpdmUiLCJhY3RpdmF0aW9uRXZlbnQiLCJpc1Byb2dyYW1tYXRpYyIsInN1cHBvcnRzUHJlc3NSaXBwbGUiLCJzdXBwb3J0c1ByZXNzUmlwcGxlXyIsInJlZ2lzdGVyUm9vdEhhbmRsZXJzXyIsInJlbW92ZUNzc1ZhcnNfIiwiZGVyZWdpc3RlclJvb3RIYW5kbGVyc18iLCJkZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfIiwia2V5cyIsImsiLCJhY3RpdmF0aW9uU3RhdGUiLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudCIsImlzU2FtZUludGVyYWN0aW9uIiwiaGFzQWN0aXZhdGVkQ2hpbGQiLCJzb21lIiwicmVzZXRBY3RpdmF0aW9uU3RhdGVfIiwicmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18iLCJjaGVja0VsZW1lbnRNYWRlQWN0aXZlXyIsImFuaW1hdGVBY3RpdmF0aW9uXyIsInRyYW5zbGF0ZVN0YXJ0IiwidHJhbnNsYXRlRW5kIiwiZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXyIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXyIsImFjdGl2YXRpb25IYXNFbmRlZCIsImFuaW1hdGVEZWFjdGl2YXRpb25fIiwibWF4RGltIiwibWF4IiwiZ2V0Qm91bmRlZFJhZGl1cyIsImh5cG90ZW51c2UiLCJzcXJ0IiwicG93IiwidXBkYXRlTGF5b3V0Q3NzVmFyc18iLCJyb3VuZCIsInVuYm91bmRlZCIsIk1EQ1JpcHBsZSIsInVuYm91bmRlZF8iLCJzZXRVbmJvdW5kZWQiLCJjcmVhdGVBZGFwdGVyIiwiZGF0YXNldCIsInNldFVuYm91bmRlZF8iLCJyaXBwbGUiLCJpbnN0YW5jZSIsIk1BVENIRVMiLCJ1dGlsIiwiSFRNTEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsIlJpcHBsZUNhcGFibGVTdXJmYWNlIiwiUmlwcGxlQmFzZSIsInJlZiIsIl9tYXRjaGVzIiwiJGVsIiwiJHNldCIsImNsYXNzZXMiLCIkZGVsZXRlIiwic3R5bGVzIiwiUmlwcGxlTWl4aW4iLCJtb3VudGVkIiwiYmVmb3JlRGVzdHJveSIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsImNvbXBpbGVkVGVtcGxhdGUiLCJpbmplY3RTdHlsZSIsImRlZmF1bHRFeHBvcnQiLCJzY29wZUlkIiwiaXNGdW5jdGlvbmFsVGVtcGxhdGUiLCJtb2R1bGVJZGVudGlmaWVyIiwiaXNTaGFkb3dNb2RlIiwiY3JlYXRlSW5qZWN0b3IiLCJjcmVhdGVJbmplY3RvclNTUiIsImNyZWF0ZUluamVjdG9yU2hhZG93Iiwic3RhdGljUmVuZGVyRm5zIiwiX2NvbXBpbGVkIiwiX3Njb3BlSWQiLCJob29rIiwiJHZub2RlIiwic3NyQ29udGV4dCIsIl9fVlVFX1NTUl9DT05URVhUX18iLCJfcmVnaXN0ZXJlZENvbXBvbmVudHMiLCJfc3NyUmVnaXN0ZXIiLCJzaGFkb3dSb290Iiwib3JpZ2luYWxSZW5kZXIiLCJyZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24iLCJleGlzdGluZyIsInNjcmlwdCIsImNsb3Nlc3QiLCJwYXJlbnRFbGVtZW50IiwibmF0aXZlTWF0Y2hlcyIsIm1kY0RpYWxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUFPLFNBQVNBLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0lBQy9CO0lBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0lBQ0EsTUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0lBQ2pDRCxJQUFBQSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBZDtJQUNELEdBRkQsTUFFTyxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7SUFDeEM7SUFDQUgsSUFBQUEsSUFBSSxHQUFHRyxNQUFNLENBQUNELEdBQWQ7SUFDRDs7SUFDRCxNQUFJRixJQUFKLEVBQVU7SUFDUkEsSUFBQUEsSUFBSSxDQUFDSSxHQUFMLENBQVNMLE1BQVQ7SUFDRDtJQUNGOztJQ1pNLFNB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
