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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXV0by1pbml0LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Jhc2UtcGx1Z2luLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1lbGVtZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1ldmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tYnV0dG9uLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Rpc3BhdGNoLWV2ZW50LW1peGluLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RpYWxvZy9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kaWFsb2cvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kaWFsb2cvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy90YWJiYWJsZS9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZm9jdXMtdHJhcC9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZGlhbG9nL3V0aWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLWJhc2UuanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL21kYy1idXR0b24tYmFzZS52dWUiLCIuLi8uLi9jb21wb25lbnRzL2J1dHRvbi9tZGMtYnV0dG9uLnZ1ZSIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZG9tL3BvbnlmaWxsLmpzIiwiLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvbWRjLWRpYWxvZy52dWUiLCIuLi8uLi9jb21wb25lbnRzL2RpYWxvZy9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHtcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIGNvbnRleHQucHJvcHMuaXMgfHwgY29udGV4dC5wcm9wcy50YWcgfHwgJ2RpdicsXG4gICAgICBjb250ZXh0LmRhdGEsXG4gICAgICBjb250ZXh0LmNoaWxkcmVuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50TWl4aW4gPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21FbGVtZW50XG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImV4cG9ydCBjb25zdCBDdXN0b21CdXR0b24gPSB7XG4gIG5hbWU6ICdjdXN0b20tYnV0dG9uJyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICBsaW5rOiBPYmplY3RcbiAgfSxcbiAgcmVuZGVyKGgsIGNvbnRleHQpIHtcbiAgICBsZXQgZWxlbWVudFxuICAgIGxldCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dC5kYXRhKVxuXG4gICAgaWYgKGNvbnRleHQucHJvcHMubGluayAmJiBjb250ZXh0LnBhcmVudC4kcm91dGVyKSB7XG4gICAgICAvLyByb3V0ZXItbGluayBjYXNlXG4gICAgICBlbGVtZW50ID0gY29udGV4dC5wYXJlbnQuJHJvb3QuJG9wdGlvbnMuY29tcG9uZW50c1sncm91dGVyLWxpbmsnXVxuICAgICAgZGF0YS5wcm9wcyA9IE9iamVjdC5hc3NpZ24oeyB0YWc6IGNvbnRleHQucHJvcHMudGFnIH0sIGNvbnRleHQucHJvcHMubGluaylcbiAgICAgIGRhdGEuYXR0cnMucm9sZSA9ICdidXR0b24nXG4gICAgICBpZiAoZGF0YS5vbi5jbGljaykge1xuICAgICAgICBkYXRhLm5hdGl2ZU9uID0geyBjbGljazogZGF0YS5vbi5jbGljayB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhLmF0dHJzICYmIGRhdGEuYXR0cnMuaHJlZikge1xuICAgICAgLy8gaHJlZiBjYXNlXG4gICAgICBlbGVtZW50ID0gJ2EnXG4gICAgICBkYXRhLmF0dHJzLnJvbGUgPSAnYnV0dG9uJ1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBidXR0b24gZmFsbGJhY2tcbiAgICAgIGVsZW1lbnQgPSAnYnV0dG9uJ1xuICAgIH1cblxuICAgIHJldHVybiBoKGVsZW1lbnQsIGRhdGEsIGNvbnRleHQuY2hpbGRyZW4pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUJ1dHRvbk1peGluID0ge1xuICBwcm9wczoge1xuICAgIGhyZWY6IFN0cmluZyxcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICB0bzogW1N0cmluZywgT2JqZWN0XSxcbiAgICBleGFjdDogQm9vbGVhbixcbiAgICBhcHBlbmQ6IEJvb2xlYW4sXG4gICAgcmVwbGFjZTogQm9vbGVhbixcbiAgICBhY3RpdmVDbGFzczogU3RyaW5nLFxuICAgIGV4YWN0QWN0aXZlQ2xhc3M6IFN0cmluZ1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpbmsoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLnRvICYmIHtcbiAgICAgICAgICB0bzogdGhpcy50byxcbiAgICAgICAgICBleGFjdDogdGhpcy5leGFjdCxcbiAgICAgICAgICBhcHBlbmQ6IHRoaXMuYXBwZW5kLFxuICAgICAgICAgIHJlcGxhY2U6IHRoaXMucmVwbGFjZSxcbiAgICAgICAgICBhY3RpdmVDbGFzczogdGhpcy5hY3RpdmVDbGFzcyxcbiAgICAgICAgICBleGFjdEFjdGl2ZUNsYXNzOiB0aGlzLmV4YWN0QWN0aXZlQ2xhc3NcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUJ1dHRvblxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgRGlzcGF0Y2hFdmVudE1peGluID0ge1xuICBwcm9wczoge1xuICAgIGV2ZW50OiBTdHJpbmcsXG4gICAgJ2V2ZW50LXRhcmdldCc6IE9iamVjdCxcbiAgICAnZXZlbnQtYXJncyc6IEFycmF5XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBkaXNwYXRjaEV2ZW50KGV2dCkge1xuICAgICAgZXZ0ICYmIHRoaXMuJGVtaXQoZXZ0LnR5cGUsIGV2dClcbiAgICAgIGlmICh0aGlzLmV2ZW50KSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmV2ZW50VGFyZ2V0IHx8IHRoaXMuJHJvb3RcbiAgICAgICAgbGV0IGFyZ3MgPSB0aGlzLmV2ZW50QXJncyB8fCBbXVxuICAgICAgICB0YXJnZXQuJGVtaXQodGhpcy5ldmVudCwgLi4uYXJncylcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbGlzdGVuZXJzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy4kbGlzdGVuZXJzLFxuICAgICAgICBjbGljazogZSA9PiB0aGlzLmRpc3BhdGNoRXZlbnQoZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0IHNjb3BlID1cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigweDEwMDAwMDAwKSkudG9TdHJpbmcoKSArICctJ1xuXG5leHBvcnQgY29uc3QgVk1BVW5pcXVlSWRNaXhpbiA9IHtcbiAgYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMudm1hX3VpZF8gPSBzY29wZSArIHRoaXMuX3VpZFxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgQVxuICovXG5jbGFzcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bXtjc3NDbGFzc2VzfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17bnVtYmVyc30gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiB7IU9iamVjdH0gKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgLy8gdmFsaWRhdGlvbi5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciA9IHt9KSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFBfSAqL1xuICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBEaWFsb2cuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmc6XG4gKiAtIENTUyBjbGFzc2VzXG4gKiAtIERPTVxuICogLSBFdmVudCBoYW5kbGVyc1xuICpcbiAqIEFkZGl0aW9uYWxseSwgcHJvdmlkZXMgdHlwZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGFkYXB0ZXIgdG8gdGhlIENsb3N1cmVcbiAqIGNvbXBpbGVyLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGFkYXB0ZXIgZm9yIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZSB0byBkZWxlZ2F0ZSB1cGRhdGVzIHRvXG4gKiB0aGUgY29tcG9uZW50IGluIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZS4gU2VlIGFyY2hpdGVjdHVyZSBkb2N1bWVudGF0aW9uXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9jb2RlL2FyY2hpdGVjdHVyZS5tZFxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDRGlhbG9nQWRhcHRlciB7XG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBhZGRCb2R5Q2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIHJlbW92ZUJvZHlDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50VGFyZ2V0fSB0YXJnZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBldmVudFRhcmdldE1hdGNoZXModGFyZ2V0LCBzZWxlY3Rvcikge31cblxuICB0cmFwRm9jdXMoKSB7fVxuICByZWxlYXNlRm9jdXMoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc0NvbnRlbnRTY3JvbGxhYmxlKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgYXJlQnV0dG9uc1N0YWNrZWQoKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAgICogQHJldHVybiB7P3N0cmluZ31cbiAgICovXG4gIGdldEFjdGlvbkZyb21FdmVudChldmVudCkge31cblxuICBjbGlja0RlZmF1bHRCdXR0b24oKSB7fVxuICByZXZlcnNlQnV0dG9ucygpIHt9XG5cbiAgbm90aWZ5T3BlbmluZygpIHt9XG4gIG5vdGlmeU9wZW5lZCgpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25cbiAgICovXG4gIG5vdGlmeUNsb3NpbmcoYWN0aW9uKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uXG4gICAqL1xuICBub3RpZnlDbG9zZWQoYWN0aW9uKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENEaWFsb2dBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIE9QRU46ICdtZGMtZGlhbG9nLS1vcGVuJyxcbiAgT1BFTklORzogJ21kYy1kaWFsb2ctLW9wZW5pbmcnLFxuICBDTE9TSU5HOiAnbWRjLWRpYWxvZy0tY2xvc2luZycsXG4gIFNDUk9MTEFCTEU6ICdtZGMtZGlhbG9nLS1zY3JvbGxhYmxlJyxcbiAgU1RBQ0tFRDogJ21kYy1kaWFsb2ctLXN0YWNrZWQnLFxuICBTQ1JPTExfTE9DSzogJ21kYy1kaWFsb2ctc2Nyb2xsLWxvY2snLFxufTtcblxuY29uc3Qgc3RyaW5ncyA9IHtcbiAgU0NSSU1fU0VMRUNUT1I6ICcubWRjLWRpYWxvZ19fc2NyaW0nLFxuICBDT05UQUlORVJfU0VMRUNUT1I6ICcubWRjLWRpYWxvZ19fY29udGFpbmVyJyxcbiAgU1VSRkFDRV9TRUxFQ1RPUjogJy5tZGMtZGlhbG9nX19zdXJmYWNlJyxcbiAgQ09OVEVOVF9TRUxFQ1RPUjogJy5tZGMtZGlhbG9nX19jb250ZW50JyxcbiAgQlVUVE9OX1NFTEVDVE9SOiAnLm1kYy1kaWFsb2dfX2J1dHRvbicsXG4gIERFRkFVTFRfQlVUVE9OX1NFTEVDVE9SOiAnLm1kYy1kaWFsb2dfX2J1dHRvbi0tZGVmYXVsdCcsXG4gIFNVUFBSRVNTX0RFRkFVTFRfUFJFU1NfU0VMRUNUT1I6IFtcbiAgICAndGV4dGFyZWEnLFxuICAgICcubWRjLW1lbnUgLm1kYy1saXN0LWl0ZW0nLFxuICBdLmpvaW4oJywgJyksXG5cbiAgT1BFTklOR19FVkVOVDogJ01EQ0RpYWxvZzpvcGVuaW5nJyxcbiAgT1BFTkVEX0VWRU5UOiAnTURDRGlhbG9nOm9wZW5lZCcsXG4gIENMT1NJTkdfRVZFTlQ6ICdNRENEaWFsb2c6Y2xvc2luZycsXG4gIENMT1NFRF9FVkVOVDogJ01EQ0RpYWxvZzpjbG9zZWQnLFxuXG4gIEFDVElPTl9BVFRSSUJVVEU6ICdkYXRhLW1kYy1kaWFsb2ctYWN0aW9uJyxcblxuICBDTE9TRV9BQ1RJT046ICdjbG9zZScsXG4gIERFU1RST1lfQUNUSU9OOiAnZGVzdHJveScsXG59O1xuXG5jb25zdCBudW1iZXJzID0ge1xuICBESUFMT0dfQU5JTUFUSU9OX09QRU5fVElNRV9NUzogMTUwLFxuICBESUFMT0dfQU5JTUFUSU9OX0NMT1NFX1RJTUVfTVM6IDc1LFxufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENEaWFsb2dBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY2xhc3MgTURDRGlhbG9nRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENEaWFsb2dBZGFwdGVyfSAqLyAoe1xuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGhhc0NsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgYWRkQm9keUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlQm9keUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgZXZlbnRUYXJnZXRNYXRjaGVzOiAoLyogdGFyZ2V0OiAhRXZlbnRUYXJnZXQsIHNlbGVjdG9yOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgdHJhcEZvY3VzOiAoKSA9PiB7fSxcbiAgICAgIHJlbGVhc2VGb2N1czogKCkgPT4ge30sXG4gICAgICBpc0NvbnRlbnRTY3JvbGxhYmxlOiAoKSA9PiB7fSxcbiAgICAgIGFyZUJ1dHRvbnNTdGFja2VkOiAoKSA9PiB7fSxcbiAgICAgIGdldEFjdGlvbkZyb21FdmVudDogKC8qIGV2ZW50OiAhRXZlbnQgKi8pID0+IHt9LFxuICAgICAgY2xpY2tEZWZhdWx0QnV0dG9uOiAoKSA9PiB7fSxcbiAgICAgIHJldmVyc2VCdXR0b25zOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeU9wZW5pbmc6ICgpID0+IHt9LFxuICAgICAgbm90aWZ5T3BlbmVkOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeUNsb3Npbmc6ICgvKiBhY3Rpb246ID9zdHJpbmcgKi8pID0+IHt9LFxuICAgICAgbm90aWZ5Q2xvc2VkOiAoLyogYWN0aW9uOiA/c3RyaW5nICovKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENEaWFsb2dBZGFwdGVyPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDRGlhbG9nRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuaXNPcGVuXyA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hbmltYXRpb25UaW1lcl8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtzdHJpbmd9ICovXG4gICAgdGhpcy5lc2NhcGVLZXlBY3Rpb25fID0gc3RyaW5ncy5DTE9TRV9BQ1RJT047XG5cbiAgICAvKiogQHByaXZhdGUge3N0cmluZ30gKi9cbiAgICB0aGlzLnNjcmltQ2xpY2tBY3Rpb25fID0gc3RyaW5ncy5DTE9TRV9BQ1RJT047XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5hdXRvU3RhY2tCdXR0b25zXyA9IHRydWU7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5hcmVCdXR0b25zU3RhY2tlZF8gPSBmYWxzZTtcbiAgfTtcblxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuU1RBQ0tFRCkpIHtcbiAgICAgIHRoaXMuc2V0QXV0b1N0YWNrQnV0dG9ucyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuaXNPcGVuXykge1xuICAgICAgdGhpcy5jbG9zZShzdHJpbmdzLkRFU1RST1lfQUNUSU9OKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hbmltYXRpb25UaW1lcl8pIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgICB0aGlzLmhhbmRsZUFuaW1hdGlvblRpbWVyRW5kXygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5pc09wZW5fID0gdHJ1ZTtcbiAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeU9wZW5pbmcoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuT1BFTklORyk7XG5cbiAgICAvLyBXYWl0IGEgZnJhbWUgb25jZSBkaXNwbGF5IGlzIG5vIGxvbmdlciBcIm5vbmVcIiwgdG8gZXN0YWJsaXNoIGJhc2lzIGZvciBhbmltYXRpb25cbiAgICB0aGlzLnJ1bk5leHRBbmltYXRpb25GcmFtZV8oKCkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLk9QRU4pO1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRCb2R5Q2xhc3MoY3NzQ2xhc3Nlcy5TQ1JPTExfTE9DSyk7XG5cbiAgICAgIHRoaXMubGF5b3V0KCk7XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udHJhcEZvY3VzKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5T3BlbmVkKCk7XG4gICAgICB9LCBudW1iZXJzLkRJQUxPR19BTklNQVRJT05fT1BFTl9USU1FX01TKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvblxuICAgKi9cbiAgY2xvc2UoYWN0aW9uID0gJycpIHtcbiAgICBpZiAoIXRoaXMuaXNPcGVuXykge1xuICAgICAgLy8gQXZvaWQgcmVkdW5kYW50IGNsb3NlIGNhbGxzIChhbmQgZXZlbnRzKSwgZS5nLiBmcm9tIGtleWRvd24gb24gZWxlbWVudHMgdGhhdCBpbmhlcmVudGx5IGVtaXQgY2xpY2tcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzT3Blbl8gPSBmYWxzZTtcbiAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUNsb3NpbmcoYWN0aW9uKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQ0xPU0lORyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLk9QRU4pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQm9keUNsYXNzKGNzc0NsYXNzZXMuU0NST0xMX0xPQ0spO1xuXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZV8pO1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcblxuICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgdGhpcy5hbmltYXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVsZWFzZUZvY3VzKCk7XG4gICAgICB0aGlzLmhhbmRsZUFuaW1hdGlvblRpbWVyRW5kXygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDbG9zZWQoYWN0aW9uKTtcbiAgICB9LCBudW1iZXJzLkRJQUxPR19BTklNQVRJT05fQ0xPU0VfVElNRV9NUyk7XG4gIH1cblxuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuXztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtzdHJpbmd9ICovXG4gIGdldEVzY2FwZUtleUFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5lc2NhcGVLZXlBY3Rpb25fO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gKi9cbiAgc2V0RXNjYXBlS2V5QWN0aW9uKGFjdGlvbikge1xuICAgIHRoaXMuZXNjYXBlS2V5QWN0aW9uXyA9IGFjdGlvbjtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtzdHJpbmd9ICovXG4gIGdldFNjcmltQ2xpY2tBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NyaW1DbGlja0FjdGlvbl87XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiAqL1xuICBzZXRTY3JpbUNsaWNrQWN0aW9uKGFjdGlvbikge1xuICAgIHRoaXMuc2NyaW1DbGlja0FjdGlvbl8gPSBhY3Rpb247XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgZ2V0QXV0b1N0YWNrQnV0dG9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRvU3RhY2tCdXR0b25zXztcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IGF1dG9TdGFjayAqL1xuICBzZXRBdXRvU3RhY2tCdXR0b25zKGF1dG9TdGFjaykge1xuICAgIHRoaXMuYXV0b1N0YWNrQnV0dG9uc18gPSBhdXRvU3RhY2s7XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0RnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgfSk7XG4gIH1cblxuICBsYXlvdXRJbnRlcm5hbF8oKSB7XG4gICAgaWYgKHRoaXMuYXV0b1N0YWNrQnV0dG9uc18pIHtcbiAgICAgIHRoaXMuZGV0ZWN0U3RhY2tlZEJ1dHRvbnNfKCk7XG4gICAgfVxuICAgIHRoaXMuZGV0ZWN0U2Nyb2xsYWJsZUNvbnRlbnRfKCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGV0ZWN0U3RhY2tlZEJ1dHRvbnNfKCkge1xuICAgIC8vIFJlbW92ZSB0aGUgY2xhc3MgZmlyc3QgdG8gbGV0IHVzIG1lYXN1cmUgdGhlIGJ1dHRvbnMnIG5hdHVyYWwgcG9zaXRpb25zLlxuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5TVEFDS0VEKTtcblxuICAgIGNvbnN0IGFyZUJ1dHRvbnNTdGFja2VkID0gdGhpcy5hZGFwdGVyXy5hcmVCdXR0b25zU3RhY2tlZCgpO1xuXG4gICAgaWYgKGFyZUJ1dHRvbnNTdGFja2VkKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuU1RBQ0tFRCk7XG4gICAgfVxuXG4gICAgaWYgKGFyZUJ1dHRvbnNTdGFja2VkICE9PSB0aGlzLmFyZUJ1dHRvbnNTdGFja2VkXykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZXZlcnNlQnV0dG9ucygpO1xuICAgICAgdGhpcy5hcmVCdXR0b25zU3RhY2tlZF8gPSBhcmVCdXR0b25zU3RhY2tlZDtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGV0ZWN0U2Nyb2xsYWJsZUNvbnRlbnRfKCkge1xuICAgIC8vIFJlbW92ZSB0aGUgY2xhc3MgZmlyc3QgdG8gbGV0IHVzIG1lYXN1cmUgdGhlIG5hdHVyYWwgaGVpZ2h0IG9mIHRoZSBjb250ZW50LlxuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5TQ1JPTExBQkxFKTtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc0NvbnRlbnRTY3JvbGxhYmxlKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5TQ1JPTExBQkxFKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KSB7XG4gICAgY29uc3QgaXNDbGljayA9IGV2dC50eXBlID09PSAnY2xpY2snO1xuICAgIGNvbnN0IGlzRW50ZXIgPSBldnQua2V5ID09PSAnRW50ZXInIHx8IGV2dC5rZXlDb2RlID09PSAxMztcblxuICAgIC8vIENoZWNrIGZvciBzY3JpbSBjbGljayBmaXJzdCBzaW5jZSBpdCBkb2Vzbid0IHJlcXVpcmUgcXVlcnlpbmcgYW5jZXN0b3JzXG4gICAgaWYgKGlzQ2xpY2sgJiYgdGhpcy5hZGFwdGVyXy5ldmVudFRhcmdldE1hdGNoZXMoZXZ0LnRhcmdldCwgc3RyaW5ncy5TQ1JJTV9TRUxFQ1RPUikgJiZcbiAgICAgIHRoaXMuc2NyaW1DbGlja0FjdGlvbl8gIT09ICcnKSB7XG4gICAgICB0aGlzLmNsb3NlKHRoaXMuc2NyaW1DbGlja0FjdGlvbl8pO1xuICAgIH0gZWxzZSBpZiAoaXNDbGljayB8fCBldnQua2V5ID09PSAnU3BhY2UnIHx8IGV2dC5rZXlDb2RlID09PSAzMiB8fCBpc0VudGVyKSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFkYXB0ZXJfLmdldEFjdGlvbkZyb21FdmVudChldnQpO1xuICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICB0aGlzLmNsb3NlKGFjdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKGlzRW50ZXIgJiYgIXRoaXMuYWRhcHRlcl8uZXZlbnRUYXJnZXRNYXRjaGVzKGV2dC50YXJnZXQsIHN0cmluZ3MuU1VQUFJFU1NfREVGQVVMVF9QUkVTU19TRUxFQ1RPUikpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5jbGlja0RlZmF1bHRCdXR0b24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshS2V5Ym9hcmRFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoYW5kbGVEb2N1bWVudEtleWRvd24oZXZ0KSB7XG4gICAgaWYgKChldnQua2V5ID09PSAnRXNjYXBlJyB8fCBldnQua2V5Q29kZSA9PT0gMjcpICYmIHRoaXMuZXNjYXBlS2V5QWN0aW9uXyAhPT0gJycpIHtcbiAgICAgIHRoaXMuY2xvc2UodGhpcy5lc2NhcGVLZXlBY3Rpb25fKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gMDtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuT1BFTklORyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkNMT1NJTkcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgdGhlIGdpdmVuIGxvZ2ljIG9uIHRoZSBuZXh0IGFuaW1hdGlvbiBmcmFtZSwgdXNpbmcgc2V0VGltZW91dCB0byBmYWN0b3IgaW4gRmlyZWZveCByZWZsb3cgYmVoYXZpb3IuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBydW5OZXh0QW5pbWF0aW9uRnJhbWVfKGNhbGxiYWNrKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZV8pO1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0RpYWxvZ0ZvdW5kYXRpb247XG4iLCJ2YXIgY2FuZGlkYXRlU2VsZWN0b3JzID0gW1xuICAnaW5wdXQnLFxuICAnc2VsZWN0JyxcbiAgJ3RleHRhcmVhJyxcbiAgJ2FbaHJlZl0nLFxuICAnYnV0dG9uJyxcbiAgJ1t0YWJpbmRleF0nLFxuICAnYXVkaW9bY29udHJvbHNdJyxcbiAgJ3ZpZGVvW2NvbnRyb2xzXScsXG4gICdbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCJdKScsXG5dO1xudmFyIGNhbmRpZGF0ZVNlbGVjdG9yID0gY2FuZGlkYXRlU2VsZWN0b3JzLmpvaW4oJywnKTtcblxudmFyIG1hdGNoZXMgPSB0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCdcbiAgPyBmdW5jdGlvbiAoKSB7fVxuICA6IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXG5mdW5jdGlvbiB0YWJiYWJsZShlbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgZWxlbWVudERvY3VtZW50ID0gZWwub3duZXJEb2N1bWVudCB8fCBlbDtcbiAgdmFyIHJlZ3VsYXJUYWJiYWJsZXMgPSBbXTtcbiAgdmFyIG9yZGVyZWRUYWJiYWJsZXMgPSBbXTtcblxuICB2YXIgdW50b3VjaGFiaWxpdHlDaGVja2VyID0gbmV3IFVudG91Y2hhYmlsaXR5Q2hlY2tlcihlbGVtZW50RG9jdW1lbnQpO1xuICB2YXIgY2FuZGlkYXRlcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2FuZGlkYXRlU2VsZWN0b3IpO1xuXG4gIGlmIChvcHRpb25zLmluY2x1ZGVDb250YWluZXIpIHtcbiAgICBpZiAobWF0Y2hlcy5jYWxsKGVsLCBjYW5kaWRhdGVTZWxlY3RvcikpIHtcbiAgICAgIGNhbmRpZGF0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoY2FuZGlkYXRlcyk7XG4gICAgICBjYW5kaWRhdGVzLnVuc2hpZnQoZWwpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpLCBjYW5kaWRhdGUsIGNhbmRpZGF0ZVRhYmluZGV4O1xuICBmb3IgKGkgPSAwOyBpIDwgY2FuZGlkYXRlcy5sZW5ndGg7IGkrKykge1xuICAgIGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZXNbaV07XG5cbiAgICBpZiAoIWlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShjYW5kaWRhdGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcikpIGNvbnRpbnVlO1xuXG4gICAgY2FuZGlkYXRlVGFiaW5kZXggPSBnZXRUYWJpbmRleChjYW5kaWRhdGUpO1xuICAgIGlmIChjYW5kaWRhdGVUYWJpbmRleCA9PT0gMCkge1xuICAgICAgcmVndWxhclRhYmJhYmxlcy5wdXNoKGNhbmRpZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yZGVyZWRUYWJiYWJsZXMucHVzaCh7XG4gICAgICAgIGRvY3VtZW50T3JkZXI6IGksXG4gICAgICAgIHRhYkluZGV4OiBjYW5kaWRhdGVUYWJpbmRleCxcbiAgICAgICAgbm9kZTogY2FuZGlkYXRlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHRhYmJhYmxlTm9kZXMgPSBvcmRlcmVkVGFiYmFibGVzXG4gICAgLnNvcnQoc29ydE9yZGVyZWRUYWJiYWJsZXMpXG4gICAgLm1hcChmdW5jdGlvbihhKSB7IHJldHVybiBhLm5vZGUgfSlcbiAgICAuY29uY2F0KHJlZ3VsYXJUYWJiYWJsZXMpO1xuXG4gIHJldHVybiB0YWJiYWJsZU5vZGVzO1xufVxuXG50YWJiYWJsZS5pc1RhYmJhYmxlID0gaXNUYWJiYWJsZTtcbnRhYmJhYmxlLmlzRm9jdXNhYmxlID0gaXNGb2N1c2FibGU7XG5cbmZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpIHtcbiAgaWYgKFxuICAgICFpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcilcbiAgICB8fCBpc05vblRhYmJhYmxlUmFkaW8obm9kZSlcbiAgICB8fCBnZXRUYWJpbmRleChub2RlKSA8IDBcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc1RhYmJhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcikge1xuICBpZiAoIW5vZGUpIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpO1xufVxuXG5mdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcikge1xuICB1bnRvdWNoYWJpbGl0eUNoZWNrZXIgPSB1bnRvdWNoYWJpbGl0eUNoZWNrZXIgfHwgbmV3IFVudG91Y2hhYmlsaXR5Q2hlY2tlcihub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZSk7XG4gIGlmIChcbiAgICBub2RlLmRpc2FibGVkXG4gICAgfHwgaXNIaWRkZW5JbnB1dChub2RlKVxuICAgIHx8IHVudG91Y2hhYmlsaXR5Q2hlY2tlci5pc1VudG91Y2hhYmxlKG5vZGUpXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxudmFyIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yID0gY2FuZGlkYXRlU2VsZWN0b3JzLmNvbmNhdCgnaWZyYW1lJykuam9pbignLCcpO1xuZnVuY3Rpb24gaXNGb2N1c2FibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKSB7XG4gIGlmICghbm9kZSkgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpO1xufVxuXG5mdW5jdGlvbiBnZXRUYWJpbmRleChub2RlKSB7XG4gIHZhciB0YWJpbmRleEF0dHIgPSBwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSwgMTApO1xuICBpZiAoIWlzTmFOKHRhYmluZGV4QXR0cikpIHJldHVybiB0YWJpbmRleEF0dHI7XG4gIC8vIEJyb3dzZXJzIGRvIG5vdCByZXR1cm4gYHRhYkluZGV4YCBjb3JyZWN0bHkgZm9yIGNvbnRlbnRFZGl0YWJsZSBub2RlcztcbiAgLy8gc28gaWYgdGhleSBkb24ndCBoYXZlIGEgdGFiaW5kZXggYXR0cmlidXRlIHNwZWNpZmljYWxseSBzZXQsIGFzc3VtZSBpdCdzIDAuXG4gIGlmIChpc0NvbnRlbnRFZGl0YWJsZShub2RlKSkgcmV0dXJuIDA7XG4gIHJldHVybiBub2RlLnRhYkluZGV4O1xufVxuXG5mdW5jdGlvbiBzb3J0T3JkZXJlZFRhYmJhYmxlcyhhLCBiKSB7XG4gIHJldHVybiBhLnRhYkluZGV4ID09PSBiLnRhYkluZGV4ID8gYS5kb2N1bWVudE9yZGVyIC0gYi5kb2N1bWVudE9yZGVyIDogYS50YWJJbmRleCAtIGIudGFiSW5kZXg7XG59XG5cbi8vIEFycmF5LnByb3RvdHlwZS5maW5kIG5vdCBhdmFpbGFibGUgaW4gSUUuXG5mdW5jdGlvbiBmaW5kKGxpc3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gbGlzdC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChwcmVkaWNhdGUobGlzdFtpXSkpIHJldHVybiBsaXN0W2ldO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQ29udGVudEVkaXRhYmxlKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZSc7XG59XG5cbmZ1bmN0aW9uIGlzSW5wdXQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lID09PSAnSU5QVVQnO1xufVxuXG5mdW5jdGlvbiBpc0hpZGRlbklucHV0KG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAnaGlkZGVuJztcbn1cblxuZnVuY3Rpb24gaXNSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ3JhZGlvJztcbn1cblxuZnVuY3Rpb24gaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzUmFkaW8obm9kZSkgJiYgIWlzVGFiYmFibGVSYWRpbyhub2RlKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2hlY2tlZFJhZGlvKG5vZGVzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobm9kZXNbaV0uY2hlY2tlZCkge1xuICAgICAgcmV0dXJuIG5vZGVzW2ldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc1RhYmJhYmxlUmFkaW8obm9kZSkge1xuICBpZiAoIW5vZGUubmFtZSkgcmV0dXJuIHRydWU7XG4gIC8vIFRoaXMgd29uJ3QgYWNjb3VudCBmb3IgdGhlIGVkZ2UgY2FzZSB3aGVyZSB5b3UgaGF2ZSByYWRpbyBncm91cHMgd2l0aCB0aGUgc2FtZVxuICAvLyBpbiBzZXBhcmF0ZSBmb3JtcyBvbiB0aGUgc2FtZSBwYWdlLlxuICB2YXIgcmFkaW9TZXQgPSBub2RlLm93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCInICsgbm9kZS5uYW1lICsgJ1wiXScpO1xuICB2YXIgY2hlY2tlZCA9IGdldENoZWNrZWRSYWRpbyhyYWRpb1NldCk7XG4gIHJldHVybiAhY2hlY2tlZCB8fCBjaGVja2VkID09PSBub2RlO1xufVxuXG4vLyBBbiBlbGVtZW50IGlzIFwidW50b3VjaGFibGVcIiBpZiAqaXQgb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMqIGhhc1xuLy8gYHZpc2liaWxpdHk6IGhpZGRlbmAgb3IgYGRpc3BsYXk6IG5vbmVgLlxuZnVuY3Rpb24gVW50b3VjaGFiaWxpdHlDaGVja2VyKGVsZW1lbnREb2N1bWVudCkge1xuICB0aGlzLmRvYyA9IGVsZW1lbnREb2N1bWVudDtcbiAgLy8gTm9kZSBjYWNoZSBtdXN0IGJlIHJlZnJlc2hlZCBvbiBldmVyeSBjaGVjaywgaW4gY2FzZVxuICAvLyB0aGUgY29udGVudCBvZiB0aGUgZWxlbWVudCBoYXMgY2hhbmdlZC4gVGhlIGNhY2hlIGNvbnRhaW5zIHR1cGxlc1xuICAvLyBtYXBwaW5nIG5vZGVzIHRvIHRoZWlyIGJvb2xlYW4gcmVzdWx0LlxuICB0aGlzLmNhY2hlID0gW107XG59XG5cbi8vIGdldENvbXB1dGVkU3R5bGUgYWNjdXJhdGVseSByZWZsZWN0cyBgdmlzaWJpbGl0eTogaGlkZGVuYCBvZiBhbmNlc3RvcnNcbi8vIGJ1dCBub3QgYGRpc3BsYXk6IG5vbmVgLCBzbyB3ZSBuZWVkIHRvIHJlY3Vyc2l2ZWx5IGNoZWNrIHBhcmVudHMuXG5VbnRvdWNoYWJpbGl0eUNoZWNrZXIucHJvdG90eXBlLmhhc0Rpc3BsYXlOb25lID0gZnVuY3Rpb24gaGFzRGlzcGxheU5vbmUobm9kZSwgbm9kZUNvbXB1dGVkU3R5bGUpIHtcbiAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBTZWFyY2ggZm9yIGEgY2FjaGVkIHJlc3VsdC5cbiAgICB2YXIgY2FjaGVkID0gZmluZCh0aGlzLmNhY2hlLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbSA9PT0gbm9kZTtcbiAgICB9KTtcbiAgICBpZiAoY2FjaGVkKSByZXR1cm4gY2FjaGVkWzFdO1xuXG4gICAgbm9kZUNvbXB1dGVkU3R5bGUgPSBub2RlQ29tcHV0ZWRTdHlsZSB8fCB0aGlzLmRvYy5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgaWYgKG5vZGVDb21wdXRlZFN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5oYXNEaXNwbGF5Tm9uZShub2RlLnBhcmVudE5vZGUpO1xuICAgIH1cblxuICAgIHRoaXMuY2FjaGUucHVzaChbbm9kZSwgcmVzdWx0XSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5VbnRvdWNoYWJpbGl0eUNoZWNrZXIucHJvdG90eXBlLmlzVW50b3VjaGFibGUgPSBmdW5jdGlvbiBpc1VudG91Y2hhYmxlKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudCkgcmV0dXJuIGZhbHNlO1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IHRoaXMuZG9jLmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIGlmICh0aGlzLmhhc0Rpc3BsYXlOb25lKG5vZGUsIGNvbXB1dGVkU3R5bGUpKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGNvbXB1dGVkU3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbic7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGFiYmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIiwidmFyIHRhYmJhYmxlID0gcmVxdWlyZSgndGFiYmFibGUnKTtcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG5cbnZhciBhY3RpdmVGb2N1c1RyYXBzID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdHJhcFF1ZXVlID0gW107XG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVUcmFwOiBmdW5jdGlvbih0cmFwKSB7XG4gICAgICBpZiAodHJhcFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGFjdGl2ZVRyYXAgPSB0cmFwUXVldWVbdHJhcFF1ZXVlLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoYWN0aXZlVHJhcCAhPT0gdHJhcCkge1xuICAgICAgICAgIGFjdGl2ZVRyYXAucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdHJhcEluZGV4ID0gdHJhcFF1ZXVlLmluZGV4T2YodHJhcCk7XG4gICAgICBpZiAodHJhcEluZGV4ID09PSAtMSkge1xuICAgICAgICB0cmFwUXVldWUucHVzaCh0cmFwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG1vdmUgdGhpcyBleGlzdGluZyB0cmFwIHRvIHRoZSBmcm9udCBvZiB0aGUgcXVldWVcbiAgICAgICAgdHJhcFF1ZXVlLnNwbGljZSh0cmFwSW5kZXgsIDEpO1xuICAgICAgICB0cmFwUXVldWUucHVzaCh0cmFwKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGVhY3RpdmF0ZVRyYXA6IGZ1bmN0aW9uKHRyYXApIHtcbiAgICAgIHZhciB0cmFwSW5kZXggPSB0cmFwUXVldWUuaW5kZXhPZih0cmFwKTtcbiAgICAgIGlmICh0cmFwSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRyYXBRdWV1ZS5zcGxpY2UodHJhcEluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRyYXBRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyYXBRdWV1ZVt0cmFwUXVldWUubGVuZ3RoIC0gMV0udW5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGZvY3VzVHJhcChlbGVtZW50LCB1c2VyT3B0aW9ucykge1xuICB2YXIgZG9jID0gZG9jdW1lbnQ7XG4gIHZhciBjb250YWluZXIgPVxuICAgIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IGRvYy5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpIDogZWxlbWVudDtcblxuICB2YXIgY29uZmlnID0geHRlbmQoXG4gICAge1xuICAgICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IHRydWUsXG4gICAgICBlc2NhcGVEZWFjdGl2YXRlczogdHJ1ZVxuICAgIH0sXG4gICAgdXNlck9wdGlvbnNcbiAgKTtcblxuICB2YXIgc3RhdGUgPSB7XG4gICAgZmlyc3RUYWJiYWJsZU5vZGU6IG51bGwsXG4gICAgbGFzdFRhYmJhYmxlTm9kZTogbnVsbCxcbiAgICBub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb246IG51bGwsXG4gICAgbW9zdFJlY2VudGx5Rm9jdXNlZE5vZGU6IG51bGwsXG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBwYXVzZWQ6IGZhbHNlXG4gIH07XG5cbiAgdmFyIHRyYXAgPSB7XG4gICAgYWN0aXZhdGU6IGFjdGl2YXRlLFxuICAgIGRlYWN0aXZhdGU6IGRlYWN0aXZhdGUsXG4gICAgcGF1c2U6IHBhdXNlLFxuICAgIHVucGF1c2U6IHVucGF1c2VcbiAgfTtcblxuICByZXR1cm4gdHJhcDtcblxuICBmdW5jdGlvbiBhY3RpdmF0ZShhY3RpdmF0ZU9wdGlvbnMpIHtcbiAgICBpZiAoc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG5cbiAgICBzdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgIHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbiA9IGRvYy5hY3RpdmVFbGVtZW50O1xuXG4gICAgdmFyIG9uQWN0aXZhdGUgPVxuICAgICAgYWN0aXZhdGVPcHRpb25zICYmIGFjdGl2YXRlT3B0aW9ucy5vbkFjdGl2YXRlXG4gICAgICAgID8gYWN0aXZhdGVPcHRpb25zLm9uQWN0aXZhdGVcbiAgICAgICAgOiBjb25maWcub25BY3RpdmF0ZTtcbiAgICBpZiAob25BY3RpdmF0ZSkge1xuICAgICAgb25BY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycygpO1xuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVhY3RpdmF0ZShkZWFjdGl2YXRlT3B0aW9ucykge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICBzdGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcblxuICAgIGFjdGl2ZUZvY3VzVHJhcHMuZGVhY3RpdmF0ZVRyYXAodHJhcCk7XG5cbiAgICB2YXIgb25EZWFjdGl2YXRlID1cbiAgICAgIGRlYWN0aXZhdGVPcHRpb25zICYmIGRlYWN0aXZhdGVPcHRpb25zLm9uRGVhY3RpdmF0ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZGVhY3RpdmF0ZU9wdGlvbnMub25EZWFjdGl2YXRlXG4gICAgICAgIDogY29uZmlnLm9uRGVhY3RpdmF0ZTtcbiAgICBpZiAob25EZWFjdGl2YXRlKSB7XG4gICAgICBvbkRlYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0dXJuRm9jdXMgPVxuICAgICAgZGVhY3RpdmF0ZU9wdGlvbnMgJiYgZGVhY3RpdmF0ZU9wdGlvbnMucmV0dXJuRm9jdXMgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGRlYWN0aXZhdGVPcHRpb25zLnJldHVybkZvY3VzXG4gICAgICAgIDogY29uZmlnLnJldHVybkZvY3VzT25EZWFjdGl2YXRlO1xuICAgIGlmIChyZXR1cm5Gb2N1cykge1xuICAgICAgZGVsYXkoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRyeUZvY3VzKHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgIGlmIChzdGF0ZS5wYXVzZWQgfHwgIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuICAgIHN0YXRlLnBhdXNlZCA9IHRydWU7XG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1bnBhdXNlKCkge1xuICAgIGlmICghc3RhdGUucGF1c2VkIHx8ICFzdGF0ZS5hY3RpdmUpIHJldHVybjtcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICBpZiAoIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgLy8gVGhlcmUgY2FuIGJlIG9ubHkgb25lIGxpc3RlbmluZyBmb2N1cyB0cmFwIGF0IGEgdGltZVxuICAgIGFjdGl2ZUZvY3VzVHJhcHMuYWN0aXZhdGVUcmFwKHRyYXApO1xuXG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuXG4gICAgLy8gRGVsYXkgZW5zdXJlcyB0aGF0IHRoZSBmb2N1c2VkIGVsZW1lbnQgZG9lc24ndCBjYXB0dXJlIHRoZSBldmVudFxuICAgIC8vIHRoYXQgY2F1c2VkIHRoZSBmb2N1cyB0cmFwIGFjdGl2YXRpb24uXG4gICAgZGVsYXkoZnVuY3Rpb24oKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgY2hlY2tGb2N1c0luLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB0cnVlKTtcblxuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGNoZWNrRm9jdXNJbiwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDbGljaywgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGVja0tleSwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5vZGVGb3JPcHRpb24ob3B0aW9uTmFtZSkge1xuICAgIHZhciBvcHRpb25WYWx1ZSA9IGNvbmZpZ1tvcHRpb25OYW1lXTtcbiAgICB2YXIgbm9kZSA9IG9wdGlvblZhbHVlO1xuICAgIGlmICghb3B0aW9uVmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgbm9kZSA9IGRvYy5xdWVyeVNlbGVjdG9yKG9wdGlvblZhbHVlKTtcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2AnICsgb3B0aW9uTmFtZSArICdgIHJlZmVycyB0byBubyBrbm93biBub2RlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5vZGUgPSBvcHRpb25WYWx1ZSgpO1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBvcHRpb25OYW1lICsgJ2AgZGlkIG5vdCByZXR1cm4gYSBub2RlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5pdGlhbEZvY3VzTm9kZSgpIHtcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAoZ2V0Tm9kZUZvck9wdGlvbignaW5pdGlhbEZvY3VzJykgIT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSBnZXROb2RlRm9yT3B0aW9uKCdpbml0aWFsRm9jdXMnKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5jb250YWlucyhkb2MuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIG5vZGUgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZSA9IHN0YXRlLmZpcnN0VGFiYmFibGVOb2RlIHx8IGdldE5vZGVGb3JPcHRpb24oJ2ZhbGxiYWNrRm9jdXMnKTtcbiAgICB9XG5cbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJZb3UgY2FuJ3QgaGF2ZSBhIGZvY3VzLXRyYXAgd2l0aG91dCBhdCBsZWFzdCBvbmUgZm9jdXNhYmxlIGVsZW1lbnRcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIC8vIFRoaXMgbmVlZHMgdG8gYmUgZG9uZSBvbiBtb3VzZWRvd24gYW5kIHRvdWNoc3RhcnQgaW5zdGVhZCBvZiBjbGlja1xuICAvLyBzbyB0aGF0IGl0IHByZWNlZGVzIHRoZSBmb2N1cyBldmVudC5cbiAgZnVuY3Rpb24gY2hlY2tQb2ludGVyRG93bihlKSB7XG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcbiAgICBpZiAoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzKSB7XG4gICAgICBkZWFjdGl2YXRlKHtcbiAgICAgICAgcmV0dXJuRm9jdXM6ICF0YWJiYWJsZS5pc0ZvY3VzYWJsZShlLnRhcmdldClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gSW4gY2FzZSBmb2N1cyBlc2NhcGVzIHRoZSB0cmFwIGZvciBzb21lIHN0cmFuZ2UgcmVhc29uLCBwdWxsIGl0IGJhY2sgaW4uXG4gIGZ1bmN0aW9uIGNoZWNrRm9jdXNJbihlKSB7XG4gICAgLy8gSW4gRmlyZWZveCB3aGVuIHlvdSBUYWIgb3V0IG9mIGFuIGlmcmFtZSB0aGUgRG9jdW1lbnQgaXMgYnJpZWZseSBmb2N1c2VkLlxuICAgIGlmIChjb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpIHx8IGUudGFyZ2V0IGluc3RhbmNlb2YgRG9jdW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB0cnlGb2N1cyhzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSB8fCBnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tLZXkoZSkge1xuICAgIGlmIChjb25maWcuZXNjYXBlRGVhY3RpdmF0ZXMgIT09IGZhbHNlICYmIGlzRXNjYXBlRXZlbnQoZSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRlYWN0aXZhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzVGFiRXZlbnQoZSkpIHtcbiAgICAgIGNoZWNrVGFiKGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhpamFjayBUYWIgZXZlbnRzIG9uIHRoZSBmaXJzdCBhbmQgbGFzdCBmb2N1c2FibGUgbm9kZXMgb2YgdGhlIHRyYXAsXG4gIC8vIGluIG9yZGVyIHRvIHByZXZlbnQgZm9jdXMgZnJvbSBlc2NhcGluZy4gSWYgaXQgZXNjYXBlcyBmb3IgZXZlbiBhXG4gIC8vIG1vbWVudCBpdCBjYW4gZW5kIHVwIHNjcm9sbGluZyB0aGUgcGFnZSBhbmQgY2F1c2luZyBjb25mdXNpb24gc28gd2VcbiAgLy8ga2luZCBvZiBuZWVkIHRvIGNhcHR1cmUgdGhlIGFjdGlvbiBhdCB0aGUga2V5ZG93biBwaGFzZS5cbiAgZnVuY3Rpb24gY2hlY2tUYWIoZSkge1xuICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICBpZiAoZS5zaGlmdEtleSAmJiBlLnRhcmdldCA9PT0gc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRyeUZvY3VzKHN0YXRlLmxhc3RUYWJiYWJsZU5vZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWUuc2hpZnRLZXkgJiYgZS50YXJnZXQgPT09IHN0YXRlLmxhc3RUYWJiYWJsZU5vZGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRyeUZvY3VzKHN0YXRlLmZpcnN0VGFiYmFibGVOb2RlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0NsaWNrKGUpIHtcbiAgICBpZiAoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzKSByZXR1cm47XG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKSB7XG4gICAgdmFyIHRhYmJhYmxlTm9kZXMgPSB0YWJiYWJsZShjb250YWluZXIpO1xuICAgIHN0YXRlLmZpcnN0VGFiYmFibGVOb2RlID0gdGFiYmFibGVOb2Rlc1swXSB8fCBnZXRJbml0aWFsRm9jdXNOb2RlKCk7XG4gICAgc3RhdGUubGFzdFRhYmJhYmxlTm9kZSA9XG4gICAgICB0YWJiYWJsZU5vZGVzW3RhYmJhYmxlTm9kZXMubGVuZ3RoIC0gMV0gfHwgZ2V0SW5pdGlhbEZvY3VzTm9kZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJ5Rm9jdXMobm9kZSkge1xuICAgIGlmIChub2RlID09PSBkb2MuYWN0aXZlRWxlbWVudCkgcmV0dXJuO1xuICAgIGlmICghbm9kZSB8fCAhbm9kZS5mb2N1cykge1xuICAgICAgdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBub2RlLmZvY3VzKCk7XG4gICAgc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgPSBub2RlO1xuICAgIGlmIChpc1NlbGVjdGFibGVJbnB1dChub2RlKSkge1xuICAgICAgbm9kZS5zZWxlY3QoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTZWxlY3RhYmxlSW5wdXQobm9kZSkge1xuICByZXR1cm4gKFxuICAgIG5vZGUudGFnTmFtZSAmJlxuICAgIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnICYmXG4gICAgdHlwZW9mIG5vZGUuc2VsZWN0ID09PSAnZnVuY3Rpb24nXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzRXNjYXBlRXZlbnQoZSkge1xuICByZXR1cm4gZS5rZXkgPT09ICdFc2NhcGUnIHx8IGUua2V5ID09PSAnRXNjJyB8fCBlLmtleUNvZGUgPT09IDI3O1xufVxuXG5mdW5jdGlvbiBpc1RhYkV2ZW50KGUpIHtcbiAgcmV0dXJuIGUua2V5ID09PSAnVGFiJyB8fCBlLmtleUNvZGUgPT09IDk7XG59XG5cbmZ1bmN0aW9uIGRlbGF5KGZuKSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KGZuLCAwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmb2N1c1RyYXA7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUZvY3VzVHJhcCBmcm9tICdmb2N1cy10cmFwJztcblxuLyoqXG4gKiBAcGFyYW0geyFFbGVtZW50fSBzdXJmYWNlRWxcbiAqIEBwYXJhbSB7P0VsZW1lbnQ9fSBpbml0aWFsRm9jdXNFbFxuICogQHBhcmFtIHtmdW5jdGlvbighRWxlbWVudCwgIUZvY3VzVHJhcENyZWF0ZU9wdGlvbnMpOiAhRm9jdXNUcmFwSW5zdGFuY2V9IGZvY3VzVHJhcEZhY3RvcnlcbiAqIEByZXR1cm4geyFGb2N1c1RyYXBJbnN0YW5jZX1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRm9jdXNUcmFwSW5zdGFuY2Uoc3VyZmFjZUVsLCBmb2N1c1RyYXBGYWN0b3J5ID0gY3JlYXRlRm9jdXNUcmFwLCBpbml0aWFsRm9jdXNFbCA9IG51bGwpIHtcbiAgcmV0dXJuIGZvY3VzVHJhcEZhY3Rvcnkoc3VyZmFjZUVsLCB7XG4gICAgaW5pdGlhbEZvY3VzOiBpbml0aWFsRm9jdXNFbCxcbiAgICBlc2NhcGVEZWFjdGl2YXRlczogZmFsc2UsIC8vIERpYWxvZyBmb3VuZGF0aW9uIGhhbmRsZXMgZXNjYXBlIGtleVxuICAgIGNsaWNrT3V0c2lkZURlYWN0aXZhdGVzOiB0cnVlLCAvLyBBbGxvdyBoYW5kbGluZyBvZiBzY3JpbSBjbGlja3NcbiAgfSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHshRWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbCkge1xuICByZXR1cm4gZWwuc2Nyb2xsSGVpZ2h0ID4gZWwub2Zmc2V0SGVpZ2h0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUFycmF5PCFFbGVtZW50PnwhTm9kZUxpc3R9IGVsc1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gYXJlVG9wc01pc2FsaWduZWQoZWxzKSB7XG4gIGNvbnN0IHRvcHMgPSBuZXcgU2V0KCk7XG4gIFtdLmZvckVhY2guY2FsbChlbHMsIChlbCkgPT4gdG9wcy5hZGQoZWwub2Zmc2V0VG9wKSk7XG4gIHJldHVybiB0b3BzLnNpemUgPiAxO1xufVxuXG5leHBvcnQge2NyZWF0ZUZvY3VzVHJhcEluc3RhbmNlLCBpc1Njcm9sbGFibGUsIGFyZVRvcHNNaXNhbGlnbmVkfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBGXG4gKi9cbmNsYXNzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENDb21wb25lbnR9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7Rj19IGZvdW5kYXRpb25cbiAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb290LCBmb3VuZGF0aW9uID0gdW5kZWZpbmVkLCAuLi5hcmdzKSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuICAgIHRoaXMucm9vdF8gPSByb290O1xuICAgIHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcbiAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgLy8gdGhpcy5yb290XyBpcyBkZWZpbmVkIGFuZCBjYW4gYmUgdXNlZCB3aXRoaW4gdGhlIGZvdW5kYXRpb24gY2xhc3MuXG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFGfSAqL1xuICAgIHRoaXMuZm91bmRhdGlvbl8gPSBmb3VuZGF0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmdldERlZmF1bHRGb3VuZGF0aW9uKCkgOiBmb3VuZGF0aW9uO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gIH1cblxuICBpbml0aWFsaXplKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshRn0gZm91bmRhdGlvblxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgLy8gY29tcG9uZW50LlxuICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogbGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgbGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gcmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiB1bmxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLFxuICAgKiB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFPYmplY3R9IGV2dERhdGFcbiAgICogQHBhcmFtIHtib29sZWFuPX0gc2hvdWxkQnViYmxlXG4gICAqL1xuICBlbWl0KGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gICAgbGV0IGV2dDtcbiAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5yb290Xy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBSaXBwbGUuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmdcbiAqIC0gY2xhc3Nlc1xuICogLSBkb21cbiAqIC0gQ1NTIHZhcmlhYmxlc1xuICogLSBwb3NpdGlvblxuICogLSBkaW1lbnNpb25zXG4gKiAtIHNjcm9sbCBwb3NpdGlvblxuICogLSBldmVudCBoYW5kbGVyc1xuICogLSB1bmJvdW5kZWQsIGFjdGl2ZSBhbmQgZGlzYWJsZWQgc3RhdGVzXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENSaXBwbGVBZGFwdGVyIHtcbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1VuYm91bmRlZCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZUFjdGl2ZSgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZURpc2FibGVkKCkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0geyFFdmVudFRhcmdldH0gdGFyZ2V0ICovXG4gIGNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFyTmFtZVxuICAgKiBAcGFyYW0gez9udW1iZXJ8c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgdXBkYXRlQ3NzVmFyaWFibGUodmFyTmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqIEByZXR1cm4geyFDbGllbnRSZWN0fSAqL1xuICBjb21wdXRlQm91bmRpbmdSZWN0KCkge31cblxuICAvKiogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gKi9cbiAgZ2V0V2luZG93UGFnZU9mZnNldCgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxuICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbn07XG5cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG4gIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxufTtcblxuY29uc3QgbnVtYmVycyA9IHtcbiAgUEFERElORzogMTAsXG4gIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLXRyYW5zbGF0ZS1kdXJhdGlvbiAoaS5lLiBhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLWZhZGUtb3V0LWR1cmF0aW9uIChpLmUuIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIFRBUF9ERUxBWV9NUzogMzAwLCAvLyBEZWxheSBiZXR3ZWVuIHRvdWNoIGFuZCBzaW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXNcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gYXBwbHlQYXNzaXZlIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c1Bhc3NpdmVfO1xuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAvLyBEZXRlY3QgdmVyc2lvbnMgb2YgRWRnZSB3aXRoIGJ1Z2d5IHZhcigpIHN1cHBvcnRcbiAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMTQ5NTQ0OC9cbiAgY29uc3QgZG9jdW1lbnQgPSB3aW5kb3dPYmouZG9jdW1lbnQ7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgLy8gVGhlIGJ1ZyBleGlzdHMgaWYgOjpiZWZvcmUgc3R5bGUgZW5kcyB1cCBwcm9wYWdhdGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gIC8vIEFkZGl0aW9uYWxseSwgZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIG51bGwgaW4gaWZyYW1lcyB3aXRoIGRpc3BsYXk6IFwibm9uZVwiIGluIEZpcmVmb3gsXG4gIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvd09iai5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBjb25zdCBoYXNQc2V1ZG9WYXJCdWcgPSBjb21wdXRlZFN0eWxlICE9PSBudWxsICYmIGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wU3R5bGUgPT09ICdzb2xpZCc7XG4gIG5vZGUucmVtb3ZlKCk7XG4gIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBsZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuXG4gIGNvbnN0IHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gd2luZG93T2JqLkNTUyAmJiB0eXBlb2Ygd2luZG93T2JqLkNTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTQ2NjlcbiAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgY29uc3Qgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKFxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKVxuICApO1xuXG4gIGlmIChleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cykge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgfSBlbHNlIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG59XG5cbi8vXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZCBpZiBzbywgdXNlIHRoZW0uXG4gKiBAcGFyYW0geyFXaW5kb3c9fSBnbG9iYWxPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnwhRXZlbnRMaXN0ZW5lck9wdGlvbnN9XG4gKi9cbmZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmogPSB3aW5kb3csIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwge2dldCBwYXNzaXZlKCkge1xuICAgICAgICBpc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBpc1N1cHBvcnRlZDtcbiAgICAgIH19KTtcbiAgICB9IGNhdGNoIChlKSB7IH1cblxuICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZDtcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfXG4gICAgPyAvKiogQHR5cGUgeyFFdmVudExpc3RlbmVyT3B0aW9uc30gKi8gKHtwYXNzaXZlOiB0cnVlfSlcbiAgICA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gSFRNTEVsZW1lbnRQcm90b3R5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gIC8qKlxuICAgKiBPcmRlciBpcyBpbXBvcnRhbnQgYmVjYXVzZSB3ZSByZXR1cm4gdGhlIGZpcnN0IGV4aXN0aW5nIG1ldGhvZCB3ZSBmaW5kLlxuICAgKiBEbyBub3QgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgaXRlbXMgaW4gdGhlIGJlbG93IGFycmF5LlxuICAgKi9cbiAgY29uc3QgbWF0Y2hlc01ldGhvZHMgPSBbJ21hdGNoZXMnLCAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJywgJ21zTWF0Y2hlc1NlbGVjdG9yJ107XG4gIGxldCBtZXRob2QgPSAnbWF0Y2hlcyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlc01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0aG9kID0gbWF0Y2hlc01ldGhvZHNbaV07XG4gICAgaWYgKG1hdGNoZXNNZXRob2QgaW4gSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgICAgIG1ldGhvZCA9IG1hdGNoZXNNZXRob2Q7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0aG9kO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUV2ZW50fSBldlxuICogQHBhcmFtIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSBwYWdlT2Zmc2V0XG4gKiBAcGFyYW0geyFDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXYsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgY29uc3Qge3gsIHl9ID0gcGFnZU9mZnNldDtcbiAgY29uc3QgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgY29uc3QgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuXG4gIGxldCBub3JtYWxpemVkWDtcbiAgbGV0IG5vcm1hbGl6ZWRZO1xuICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gIGlmIChldi50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICBldiA9IC8qKiBAdHlwZSB7IVRvdWNoRXZlbnR9ICovIChldik7XG4gICAgbm9ybWFsaXplZFggPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9IGVsc2Uge1xuICAgIGV2ID0gLyoqIEB0eXBlIHshTW91c2VFdmVudH0gKi8gKGV2KTtcbiAgICBub3JtYWxpemVkWCA9IGV2LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYucGFnZVkgLSBkb2N1bWVudFk7XG4gIH1cblxuICByZXR1cm4ge3g6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWX07XG59XG5cbmV4cG9ydCB7c3VwcG9ydHNDc3NWYXJpYWJsZXMsIGFwcGx5UGFzc2l2ZSwgZ2V0TWF0Y2hlc1Byb3BlcnR5LCBnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgaXNBY3RpdmF0ZWQ6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBhY3RpdmF0aW9uRXZlbnQ6ICghRXZlbnR8dW5kZWZpbmVkKSxcbiAqICAgaXNQcm9ncmFtbWF0aWM6IChib29sZWFufHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBBY3RpdmF0aW9uU3RhdGVUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGRlYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZm9jdXM6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgYmx1cjogKHN0cmluZ3x1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJJbmZvVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50KSxcbiAqICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50PSksXG4gKiAgIGZvY3VzOiBmdW5jdGlvbigpLFxuICogICBibHVyOiBmdW5jdGlvbigpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJzVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICB4OiBudW1iZXIsXG4gKiAgIHk6IG51bWJlclxuICogfX1cbiAqL1xubGV0IFBvaW50VHlwZTtcblxuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbmNvbnN0IEFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nLCAnbW91c2Vkb3duJywgJ2tleWRvd24nXTtcblxuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG5jb25zdCBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnXTtcblxuLy8gVHJhY2tzIGFjdGl2YXRpb25zIHRoYXQgaGF2ZSBvY2N1cnJlZCBvbiB0aGUgY3VycmVudCBmcmFtZSwgdG8gYXZvaWQgc2ltdWx0YW5lb3VzIG5lc3RlZCBhY3RpdmF0aW9uc1xuLyoqIEB0eXBlIHshQXJyYXk8IUV2ZW50VGFyZ2V0Pn0gKi9cbmxldCBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1JpcHBsZUFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENSaXBwbGVGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gbnVtYmVycztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IC8qIGJvb2xlYW4gLSBjYWNoZWQgKi8ge30sXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICgvKiB0YXJnZXQ6ICFFdmVudFRhcmdldCAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAoLyogdmFyTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IC8qIENsaWVudFJlY3QgKi8ge30sXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAvKiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9ICovIHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUgeyFDbGllbnRSZWN0fSAqL1xuICAgIHRoaXMuZnJhbWVfID0gLyoqIEB0eXBlIHshQ2xpZW50UmVjdH0gKi8gKHt3aWR0aDogMCwgaGVpZ2h0OiAwfSk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubWF4UmFkaXVzXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCl9ICovXG4gICAgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gKGUpID0+IHRoaXMuYWN0aXZhdGVfKGUpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9ICgpID0+IHRoaXMuZGVhY3RpdmF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5mb2N1c0hhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVGb2N1cygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmJsdXJIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlQmx1cigpO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyXyA9ICgpID0+IHRoaXMubGF5b3V0KCk7XG5cbiAgICAvKiogQHByaXZhdGUge3tsZWZ0OiBudW1iZXIsIHRvcDpudW1iZXJ9fSAqL1xuICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdTY2FsZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUV2ZW50fHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdXBwb3J0c1ByZXNzUmlwcGxlXygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9XG4gICAqL1xuICBkZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcblxuICAgIHRoaXMucmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpO1xuXG4gICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhST09UKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlcyBuZWVkIGxheW91dCBsb2dpYyBhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIHNldCBjb29yZGluYXRlcyBmb3IgYm90aCBzaGFkZSBhbmQgcmlwcGxlXG4gICAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCkpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2YXRpb25UaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoUk9PVCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudH0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSkge1xuICAgIGlmIChlLnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpIHtcbiAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcmVtb3ZlQ3NzVmFyc18oKSB7XG4gICAgY29uc3Qge3N0cmluZ3N9ID0gTURDUmlwcGxlRm91bmRhdGlvbjtcbiAgICBPYmplY3Qua2V5cyhzdHJpbmdzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBpZiAoay5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShzdHJpbmdzW2tdLCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFjdGl2YXRlXyhlKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgIGNvbnN0IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgY29uc3QgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBlICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZS50eXBlO1xuICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZSA9PT0gdW5kZWZpbmVkO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IGUgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICBlLnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3BvaW50ZXJkb3duJ1xuICAgICk7XG5cbiAgICBjb25zdCBoYXNBY3RpdmF0ZWRDaGlsZCA9IGUgIT09IHVuZGVmaW5lZCAmJiBhY3RpdmF0ZWRUYXJnZXRzLmxlbmd0aCA+IDAgJiYgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKFxuICAgICAgKHRhcmdldCkgPT4gdGhpcy5hZGFwdGVyXy5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkpO1xuICAgIGlmIChoYXNBY3RpdmF0ZWRDaGlsZCkge1xuICAgICAgLy8gSW1tZWRpYXRlbHkgcmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSwgd2hpbGUgcHJlc2VydmluZyBsb2dpYyB0aGF0IHByZXZlbnRzIHRvdWNoIGZvbGxvdy1vbiBldmVudHNcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKC8qKiBAdHlwZSB7IUV2ZW50VGFyZ2V0fSAqLyAoZS50YXJnZXQpKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSAmJiBlICE9PSB1bmRlZmluZWQgJiYgKGUua2V5ID09PSAnICcgfHwgZS5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgLy8gYWN0aXZlIHN0YXRlcyBpbmNvbnNpc3RlbnRseSB3aGVuIHRoZXkncmUgY2FsbGVkIHdpdGhpbiBldmVudCBoYW5kbGluZyBjb2RlOlxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgLy8gV2UgdHJ5IGZpcnN0IG91dHNpZGUgckFGIHRvIHN1cHBvcnQgRWRnZSwgd2hpY2ggZG9lcyBub3QgZXhoaWJpdCB0aGlzIHByb2JsZW0sIGJ1dCB3aWxsIGNyYXNoIGlmIGEgQ1NTXG4gICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSkge1xuICAgIHJldHVybiAoZSAhPT0gdW5kZWZpbmVkICYmIGUudHlwZSA9PT0gJ2tleWRvd24nKSA/IHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlQWN0aXZlKCkgOiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZXZlbnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICovXG4gIGFjdGl2YXRlKGV2ZW50KSB7XG4gICAgdGhpcy5hY3RpdmF0ZV8oZXZlbnQpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGFuaW1hdGVBY3RpdmF0aW9uXygpIHtcbiAgICBjb25zdCB7VkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtERUFDVElWQVRJT05fVElNRU9VVF9NU30gPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnM7XG5cbiAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuXG4gICAgbGV0IHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgbGV0IHRyYW5zbGF0ZUVuZCA9ICcnO1xuXG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIGNvbnN0IHtzdGFydFBvaW50LCBlbmRQb2ludH0gPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKTtcbiAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gYCR7c3RhcnRQb2ludC54fXB4LCAke3N0YXJ0UG9pbnQueX1weGA7XG4gICAgICB0cmFuc2xhdGVFbmQgPSBgJHtlbmRQb2ludC54fXB4LCAke2VuZFBvaW50Lnl9cHhgO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuXG4gICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm4ge3tzdGFydFBvaW50OiBQb2ludFR5cGUsIGVuZFBvaW50OiBQb2ludFR5cGV9fVxuICAgKi9cbiAgZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpIHtcbiAgICBjb25zdCB7YWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXJ9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuXG4gICAgbGV0IHN0YXJ0UG9pbnQ7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhcbiAgICAgICAgLyoqIEB0eXBlIHshRXZlbnR9ICovIChhY3RpdmF0aW9uRXZlbnQpLFxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICBjb25zdCBlbmRQb2ludCA9IHtcbiAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtzdGFydFBvaW50LCBlbmRQb2ludH07XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCkge1xuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtoYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWR9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGNvbnN0IGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcblxuICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKSB7XG4gICAgY29uc3Qge0ZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gIH1cblxuICByZXNldEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQsIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZWFjdGl2YXRlXygpIHtcbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSAvKiogQHR5cGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqLyAoT2JqZWN0LmFzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKSk7XG5cbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSkpO1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9IG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFuaW1hdGVEZWFjdGl2YXRpb25fKHt3YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlfSkge1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfVxuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgIH1cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGxheW91dEludGVybmFsXygpIHtcbiAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIGNvbnN0IG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuXG4gICAgLy8gU3VyZmFjZSBkaWFtZXRlciBpcyB0cmVhdGVkIGRpZmZlcmVudGx5IGZvciB1bmJvdW5kZWQgdnMuIGJvdW5kZWQgcmlwcGxlcy5cbiAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAvLyBzcXVhcmUpLiBCb3VuZGVkIHJpcHBsZXMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgZnVsbHkgZXhwZWN0ZWQgdG8gZXhwYW5kIGJleW9uZCB0aGUgc3VyZmFjZSdzIGxvbmdlc3QgZGlhbWV0ZXJcbiAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgIGNvbnN0IGdldEJvdW5kZWRSYWRpdXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMuZnJhbWVfLndpZHRoLCAyKSArIE1hdGgucG93KHRoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICB9O1xuXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpID8gbWF4RGltIDogZ2V0Qm91bmRlZFJhZGl1cygpO1xuXG4gICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICB0aGlzLmluaXRpYWxTaXplXyA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICB0aGlzLmZnU2NhbGVfID0gdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG5cbiAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgdXBkYXRlTGF5b3V0Q3NzVmFyc18oKSB7XG4gICAgY29uc3Qge1xuICAgICAgVkFSX0ZHX1NJWkUsIFZBUl9MRUZULCBWQVJfVE9QLCBWQVJfRkdfU0NBTEUsXG4gICAgfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIGAke3RoaXMuaW5pdGlhbFNpemVffXB4YCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnR9cHhgKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcH1weGApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXRVbmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgY29uc3Qge1VOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRm9jdXMoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKSk7XG4gIH1cblxuICBoYW5kbGVCbHVyKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCBNRENSaXBwbGVGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQGV4dGVuZHMgTURDQ29tcG9uZW50PCFNRENSaXBwbGVGb3VuZGF0aW9uPlxuICovXG5jbGFzcyBNRENSaXBwbGUgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKiogQHBhcmFtIHsuLi4/fSBhcmdzICovXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHt7aXNVbmJvdW5kZWQ6IChib29sZWFufHVuZGVmaW5lZCl9PX0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QsIHtpc1VuYm91bmRlZCA9IHVuZGVmaW5lZH0gPSB7fSkge1xuICAgIGNvbnN0IHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgLy8gT25seSBvdmVycmlkZSB1bmJvdW5kZWQgYmVoYXZpb3IgaWYgb3B0aW9uIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgaWYgKGlzVW5ib3VuZGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSAvKiogQHR5cGUge2Jvb2xlYW59ICovIChpc1VuYm91bmRlZCk7XG4gICAgfVxuICAgIHJldHVybiByaXBwbGU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshUmlwcGxlQ2FwYWJsZVN1cmZhY2V9IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUFkYXB0ZXIoaW5zdGFuY2UpIHtcbiAgICBjb25zdCBNQVRDSEVTID0gdXRpbC5nZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyksXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gaW5zdGFuY2UudW5ib3VuZGVkLFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiBpbnN0YW5jZS5yb290X1tNQVRDSEVTXSgnOmFjdGl2ZScpLFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IGluc3RhbmNlLmRpc2FibGVkLFxuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiAodGFyZ2V0KSA9PiBpbnN0YW5jZS5yb290Xy5jb250YWlucyh0YXJnZXQpLFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpLFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gaW5zdGFuY2Uucm9vdF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAoe3g6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0fSksXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgdW5ib3VuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0IHVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICB0aGlzLnVuYm91bmRlZF8gPSBCb29sZWFuKHVuYm91bmRlZCk7XG4gICAgdGhpcy5zZXRVbmJvdW5kZWRfKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc3VyZSBDb21waWxlciB0aHJvd3MgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3Igd2hlbiBkaXJlY3RseSBhY2Nlc3NpbmcgYVxuICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICogQnkgYWNjZXNzaW5nIHRoZSBwcm90ZWN0ZWQgcHJvcGVydHkgaW5zaWRlIGEgbWV0aG9kLCB3ZSBzb2x2ZSB0aGF0IHByb2JsZW0uXG4gICAqIFRoYXQncyB3aHkgdGhpcyBmdW5jdGlvbiBleGlzdHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRVbmJvdW5kZWRfKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VW5ib3VuZGVkKHRoaXMudW5ib3VuZGVkXyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUZvdW5kYXRpb259XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMudW5ib3VuZGVkID0gJ21kY1JpcHBsZUlzVW5ib3VuZGVkJyBpbiB0aGlzLnJvb3RfLmRhdGFzZXQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTZWUgTWF0ZXJpYWwgRGVzaWduIHNwZWMgZm9yIG1vcmUgZGV0YWlscyBvbiB3aGVuIHRvIHVzZSByaXBwbGVzLlxuICogaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL21vdGlvbi9jaG9yZW9ncmFwaHkuaHRtbCNjaG9yZW9ncmFwaHktY3JlYXRpb25cbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgUmlwcGxlQ2FwYWJsZVN1cmZhY2Uge31cblxuLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLnJvb3RfO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgYmxlZWRzIG91dCBvZiB0aGUgYm91bmRzIG9mIHRoZSBlbGVtZW50LlxuICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUudW5ib3VuZGVkO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgaXMgYXR0YWNoZWQgdG8gYSBkaXNhYmxlZCBjb21wb25lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS5kaXNhYmxlZDtcblxuZXhwb3J0IHtNRENSaXBwbGUsIE1EQ1JpcHBsZUZvdW5kYXRpb24sIFJpcHBsZUNhcGFibGVTdXJmYWNlLCB1dGlsfTtcbiIsImltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2luZGV4J1xuaW1wb3J0IHtcbiAgc3VwcG9ydHNDc3NWYXJpYWJsZXMsXG4gIGdldE1hdGNoZXNQcm9wZXJ0eSxcbiAgYXBwbHlQYXNzaXZlXG59IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvdXRpbCdcblxuZXhwb3J0IGNsYXNzIFJpcHBsZUJhc2UgZXh0ZW5kcyBNRENSaXBwbGVGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBNQVRDSEVTKCkge1xuICAgIC8qIGdsb2JhbCBIVE1MRWxlbWVudCAqL1xuICAgIHJldHVybiAoXG4gICAgICBSaXBwbGVCYXNlLl9tYXRjaGVzIHx8XG4gICAgICAoUmlwcGxlQmFzZS5fbWF0Y2hlcyA9IGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpKVxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cmZhY2VBY3RpdmUocmVmKSB7XG4gICAgcmV0dXJuIHJlZltSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZtLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbFtSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRkZWxldGUodm0uY2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogdGFyZ2V0ID0+IHZtLiRlbC5jb250YWlucyh0YXJnZXQpLFxuICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uc3R5bGVzLCB2YXJOYW1lLCB2YWx1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFJpcHBsZU1peGluID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzKVxuICAgIHRoaXMucmlwcGxlLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxjdXN0b20tZWxlbWVudCBcbiAgICA6dGFnPVwidGFnXCIgXG4gICAgOmNsYXNzZXM9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGVzPVwic3R5bGVzXCIgXG4gICAgY2xhc3M9XCJtZGMtcmlwcGxlXCI+XG4gICAgPHNsb3QgLz5cbiAgPC9jdXN0b20tZWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBDdXN0b21FbGVtZW50TWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlTWl4aW4gfSBmcm9tICcuL21kYy1yaXBwbGUtYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXJpcHBsZScsXG4gIG1peGluczogW0N1c3RvbUVsZW1lbnRNaXhpbiwgUmlwcGxlTWl4aW5dLFxuICBwcm9wczoge1xuICAgIHRhZzogU3RyaW5nXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8Y3VzdG9tLWJ1dHRvblxuICAgIHJlZj1cInJvb3RcIlxuICAgIDpjbGFzcz1cImNsYXNzZXNcIlxuICAgIDpzdHlsZT1cInN0eWxlc1wiXG4gICAgOmhyZWY9XCJocmVmXCJcbiAgICA6bGluaz1cImxpbmtcIlxuICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICB2LW9uPVwibGlzdGVuZXJzXCJcbiAgPlxuICAgIDxzcGFuIGNsYXNzPVwibWRjLWJ1dHRvbl9fbGFiZWxcIj4gPHNsb3QgLz4gPC9zcGFuPlxuICA8L2N1c3RvbS1idXR0b24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgRGlzcGF0Y2hFdmVudE1peGluLCBDdXN0b21CdXR0b25NaXhpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgeyBSaXBwbGVNaXhpbiB9IGZyb20gJy4uL3JpcHBsZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWJ1dHRvbi1iYXNlJyxcbiAgbWl4aW5zOiBbRGlzcGF0Y2hFdmVudE1peGluLCBDdXN0b21CdXR0b25NaXhpbiwgUmlwcGxlTWl4aW5dLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHNjcmlwdD5cbmltcG9ydCBtZGNCdXR0b25CYXNlIGZyb20gJy4vbWRjLWJ1dHRvbi1iYXNlLnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWJ1dHRvbicsXG4gIGV4dGVuZHM6IG1kY0J1dHRvbkJhc2UsXG4gIHByb3BzOiB7XG4gICAgcmFpc2VkOiBCb29sZWFuLFxuICAgIHVuZWxldmF0ZWQ6IEJvb2xlYW4sXG4gICAgb3V0bGluZWQ6IEJvb2xlYW4sXG4gICAgZGVuc2U6IEJvb2xlYW5cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICAnbWRjLWJ1dHRvbic6IHRydWUsXG4gICAgICAgICdtZGMtYnV0dG9uLS1yYWlzZWQnOiB0aGlzLnJhaXNlZCxcbiAgICAgICAgJ21kYy1idXR0b24tLXVuZWxldmF0ZWQnOiB0aGlzLnVuZWxldmF0ZWQsXG4gICAgICAgICdtZGMtYnV0dG9uLS1vdXRsaW5lZCc6IHRoaXMub3V0bGluZWQsXG4gICAgICAgICdtZGMtYnV0dG9uLS1kZW5zZSc6IHRoaXMuZGVuc2VcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgcmFpc2VkKCkge1xuICAgICAgdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgJ21kYy1idXR0b24tLXJhaXNlZCcsIHRoaXMucmFpc2VkKVxuICAgIH0sXG4gICAgdW5lbGV2YXRlZCgpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsICdtZGMtYnV0dG9uLS11bmVsZXZhdGVkJywgdGhpcy51bmVsZXZhdGVkKVxuICAgIH0sXG4gICAgb3V0bGluZWQoKSB7XG4gICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCAnbWRjLWJ1dHRvbi0tb3V0bGluZWQnLCB0aGlzLm91dGxpbmVkKVxuICAgIH0sXG4gICAgZGVuc2UoKSB7XG4gICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCAnbWRjLWJ1dHRvbi0tZGVuc2UnLCB0aGlzLmRlbnNlKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEEgXCJwb255ZmlsbFwiIGlzIGEgcG9seWZpbGwgdGhhdCBkb2Vzbid0IG1vZGlmeSB0aGUgZ2xvYmFsIHByb3RvdHlwZSBjaGFpbi5cbiAqIFRoaXMgbWFrZXMgcG9ueWZpbGxzIHNhZmVyIHRoYW4gdHJhZGl0aW9uYWwgcG9seWZpbGxzLCBlc3BlY2lhbGx5IGZvciBsaWJyYXJpZXMgbGlrZSBNREMuXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4gez9FbGVtZW50fVxuICovXG5mdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIGlmIChlbGVtZW50LmNsb3Nlc3QpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgfVxuXG4gIGxldCBlbCA9IGVsZW1lbnQ7XG4gIHdoaWxlIChlbCkge1xuICAgIGlmIChtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbWF0Y2hlcyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICBjb25zdCBuYXRpdmVNYXRjaGVzID0gZWxlbWVudC5tYXRjaGVzXG4gICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICB8fCBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cblxuZXhwb3J0IHtjbG9zZXN0LCBtYXRjaGVzfTtcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIHJlZj1cInJvb3RcIlxuICAgIDpjbGFzcz1cImNsYXNzZXNcIlxuICAgIDpzdHlsZT1cInN0eWxlc1wiXG4gICAgYXJpYS1tb2RhbD1cInRydWVcIlxuICAgIDphcmlhLWxhYmVsbGVkYnk9XCInbGFiZWwnICsgdm1hX3VpZF9cIlxuICAgIDphcmlhLWRlc2NyaWJlZGJ5PVwiJ2Rlc2MnICsgdm1hX3VpZF9cIlxuICAgIGNsYXNzPVwibWRjLWRpYWxvZ1wiXG4gICAgcm9sZT1cImFsZXJ0ZGlhbG9nXCJcbiAgICBAY2xpY2s9XCJvbkNsaWNrXCJcbiAgICBAa2V5ZG93bj1cIm9uQ2xpY2tcIlxuICA+XG4gICAgPGRpdiByZWY9XCJjb250YWluZXJcIiBjbGFzcz1cIm1kYy1kaWFsb2dfX2NvbnRhaW5lclwiPlxuICAgICAgPGRpdiByZWY9XCJzdXJmYWNlXCIgOmNsYXNzPVwic3VyZmFjZUNsYXNzZXNcIiBjbGFzcz1cIm1kYy1kaWFsb2dfX3N1cmZhY2VcIj5cbiAgICAgICAgPGgyIHYtaWY9XCJ0aXRsZVwiIGNsYXNzPVwibWRjLWRpYWxvZ19fdGl0bGVcIiA6aWQ9XCInbGFiZWwnICsgdm1hX3VpZF9cIj5cbiAgICAgICAgICA8IS0tXG4gICAgICAgICAgLS0+e3sgdGl0bGVcbiAgICAgICAgICB9fTwhLS0tLT5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdiByZWY9XCJjb250ZW50XCIgY2xhc3M9XCJtZGMtZGlhbG9nX19jb250ZW50XCIgOmlkPVwiJ2Rlc2MnICsgdm1hX3VpZF9cIj5cbiAgICAgICAgICA8c2xvdCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvb3RlciB2LWlmPVwiYWNjZXB0IHx8IGNhbmNlbFwiIGNsYXNzPVwibWRjLWRpYWxvZ19fYWN0aW9uc1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdi1pZj1cImNhbmNlbFwiXG4gICAgICAgICAgICBjbGFzcz1cIm1kYy1idXR0b24gbWRjLWRpYWxvZ19fYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtbWRjLWRpYWxvZy1hY3Rpb249XCJub1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgY2FuY2VsIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICByZWY9XCJkZWZhdWx0QnV0dG9uXCJcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cImFjY2VwdERpc2FibGVkXCJcbiAgICAgICAgICAgIGNsYXNzPVwibWRjLWJ1dHRvbiBtZGMtZGlhbG9nX19idXR0b24gXCJcbiAgICAgICAgICAgIGRhdGEtbWRjLWRpYWxvZy1hY3Rpb249XCJ5ZXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGFjY2VwdCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZGMtZGlhbG9nX19zY3JpbVwiIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENEaWFsb2dGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9kaWFsb2cvZm91bmRhdGlvbidcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnQG1hdGVyaWFsL2RpYWxvZy91dGlsJ1xuaW1wb3J0IHsgbWRjQnV0dG9uIH0gZnJvbSAnLi4vYnV0dG9uJ1xuaW1wb3J0IHsgVk1BVW5pcXVlSWRNaXhpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgeyBjbG9zZXN0LCBtYXRjaGVzIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9wb255ZmlsbCdcbmltcG9ydCBjcmVhdGVGb2N1c1RyYXAgZnJvbSAnZm9jdXMtdHJhcCdcbmNvbnN0IHN0cmluZ3MgPSBNRENEaWFsb2dGb3VuZGF0aW9uLnN0cmluZ3NcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWRpYWxvZycsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBtZGNCdXR0b246IG1kY0J1dHRvblxuICB9LFxuICBtaXhpbnM6IFtWTUFVbmlxdWVJZE1peGluXSxcbiAgbW9kZWw6IHtcbiAgICBwcm9wOiAnb3BlbicsXG4gICAgZXZlbnQ6ICdjaGFuZ2UnXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgYWNjZXB0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnT2snXG4gICAgfSxcbiAgICBhY2NlcHREaXNhYmxlZDogQm9vbGVhbixcbiAgICBhY2NlcHRSYWlzZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgY2FuY2VsOiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIGNhbmNlbFJhaXNlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBhY2NlbnQ6IEJvb2xlYW4sXG4gICAgc2Nyb2xsYWJsZTogQm9vbGVhbixcbiAgICBvcGVuOiBCb29sZWFuXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgJ21kYy10aGVtZS0tZGFyayc6IHRoaXMuZGFya1xuICAgICAgfSxcbiAgICAgIHN0eWxlczoge30sXG4gICAgICBzdXJmYWNlQ2xhc3Nlczoge30sXG4gICAgICBib2R5Q2xhc3Nlczoge1xuICAgICAgICAnbWRjLWRpYWxvZ19fYm9keS0tc2Nyb2xsYWJsZSc6IHRoaXMuc2Nyb2xsYWJsZVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBvcGVuOiAnb25PcGVuXydcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBpZiAodGhpcy5hY2NlcHQpIHtcbiAgICAgIHRoaXMuZm9jdXNUcmFwID0gdXRpbC5jcmVhdGVGb2N1c1RyYXBJbnN0YW5jZShcbiAgICAgICAgdGhpcy4kcmVmcy5jb250YWluZXIsXG4gICAgICAgIGNyZWF0ZUZvY3VzVHJhcFxuICAgICAgKVxuICAgIH1cblxuICAgIHRoaXMuYnV0dG9uc18gPSBbXS5zbGljZS5jYWxsKFxuICAgICAgdGhpcy4kZWwucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkJVVFRPTl9TRUxFQ1RPUilcbiAgICApXG5cbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDRGlhbG9nRm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSksXG4gICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGRlbGV0ZSh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSksXG4gICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgYWRkQm9keUNsYXNzOiBjbGFzc05hbWUgPT4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVCb2R5Q2xhc3M6IGNsYXNzTmFtZSA9PiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIGV2ZW50VGFyZ2V0TWF0Y2hlczogKHRhcmdldCwgc2VsZWN0b3IpID0+IG1hdGNoZXModGFyZ2V0LCBzZWxlY3RvciksXG4gICAgICB0cmFwRm9jdXM6ICgpID0+IHRoaXMuZm9jdXNUcmFwICYmIHRoaXMuZm9jdXNUcmFwLmFjdGl2YXRlKCksXG4gICAgICByZWxlYXNlRm9jdXM6ICgpID0+IHRoaXMuZm9jdXNUcmFwICYmIHRoaXMuZm9jdXNUcmFwLmRlYWN0aXZhdGUoKSxcbiAgICAgIGlzQ29udGVudFNjcm9sbGFibGU6ICgpID0+XG4gICAgICAgICEhdGhpcy4kcmVmcy5jb250ZW50ICYmIHV0aWwuaXNTY3JvbGxhYmxlKHRoaXMuJHJlZnMuY29udGVudCksXG4gICAgICBhcmVCdXR0b25zU3RhY2tlZDogKCkgPT4gdXRpbC5hcmVUb3BzTWlzYWxpZ25lZCh0aGlzLmJ1dHRvbnNfKSxcblxuICAgICAgZ2V0QWN0aW9uRnJvbUV2ZW50OiBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjbG9zZXN0KGV2ZW50LnRhcmdldCwgYFske3N0cmluZ3MuQUNUSU9OX0FUVFJJQlVURX1dYClcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoc3RyaW5ncy5BQ1RJT05fQVRUUklCVVRFKVxuICAgICAgfSxcbiAgICAgIGNsaWNrRGVmYXVsdEJ1dHRvbjogKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy4kcmVmcy5kZWZhdWx0QnV0dG9uKSB7XG4gICAgICAgICAgdGhpcy4kcmVmcy5kZWZhdWx0QnV0dG9uLmNsaWNrKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJldmVyc2VCdXR0b25zOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuYnV0dG9uc18ucmV2ZXJzZSgpXG4gICAgICAgIHRoaXMuYnV0dG9uc18uZm9yRWFjaChidXR0b24gPT5cbiAgICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICBub3RpZnlPcGVuaW5nOiAoKSA9PiB0aGlzLiRlbWl0KHN0cmluZ3MuT1BFTklOR19FVkVOVCwge30pLFxuICAgICAgbm90aWZ5T3BlbmVkOiAoKSA9PiB0aGlzLiRlbWl0KHN0cmluZ3MuT1BFTkVEX0VWRU5ULCB7fSksXG4gICAgICBub3RpZnlDbG9zaW5nOiBhY3Rpb24gPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBmYWxzZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aW9uKVxuICAgICAgICB0aGlzLiRlbWl0KHN0cmluZ3MuQ0xPU0lOR19FVkVOVCwgYWN0aW9uID8geyBhY3Rpb24gfSA6IHt9KVxuICAgICAgfSxcbiAgICAgIG5vdGlmeUNsb3NlZDogYWN0aW9uID0+XG4gICAgICAgIHRoaXMuJGVtaXQoc3RyaW5ncy5DTE9TRURfRVZFTlQsIGFjdGlvbiA/IHsgYWN0aW9uIH0gOiB7fSlcbiAgICB9KVxuXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuICAgIHRoaXMub3BlbiAmJiB0aGlzLmZvdW5kYXRpb24ub3BlbigpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25PcGVuXyh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5vcGVuKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5jbG9zZSgpXG4gICAgICB9XG4gICAgfSxcblxuICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVJbnRlcmFjdGlvbihldmVudClcbiAgICB9LFxuICAgIG9uQ2FuY2VsKCkge1xuICAgICAgaWYgKHRoaXMuJGxpc3RlbmVyc1sndmFsaWRhdGVDYW5jZWwnXSkge1xuICAgICAgICB0aGlzLiRlbWl0KCd2YWxpZGF0ZUNhbmNlbCcsIHtcbiAgICAgICAgICBjYW5jZWw6IChub3RpZnkgPSB0cnVlKSA9PiB7XG4gICAgICAgICAgICAvLyBpZiBub3RpZnkgPSBmYWxzZSwgdGhlIGRpYWxvZyB3aWxsIGNsb3NlXG4gICAgICAgICAgICAvLyBidXQgdGhlIG5vdGlmeUFjY2VwdCBtZXRob2Qgd2lsbCBub3QgYmUgY2FsbGVkXG4gICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIG5vdGlmeSBsaXN0ZW5lcnMgdGhlIG9wZW4gc3RhdGVcbiAgICAgICAgICAgIC8vIGlzIGNoYW5naW5nLlxuICAgICAgICAgICAgaWYgKCFub3RpZnkpIHtcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb24uY2FuY2VsKG5vdGlmeSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uY2FuY2VsKHRydWUpXG4gICAgICB9XG4gICAgfSxcbiAgICBvbkFjY2VwdCgpIHtcbiAgICAgIGlmICh0aGlzLiRsaXN0ZW5lcnNbJ3ZhbGlkYXRlJ10pIHtcbiAgICAgICAgdGhpcy4kZW1pdCgndmFsaWRhdGUnLCB7XG4gICAgICAgICAgYWNjZXB0OiAobm90aWZ5ID0gdHJ1ZSkgPT4ge1xuICAgICAgICAgICAgLy8gaWYgbm90aWZ5ID0gZmFsc2UsIHRoZSBkaWFsb2cgd2lsbCBjbG9zZVxuICAgICAgICAgICAgLy8gYnV0IHRoZSBub3RpZnlBY2NlcHQgbWV0aG9kIHdpbGwgbm90IGJlIGNhbGxlZFxuICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBub3RpZnkgbGlzdGVuZXJzIHRoZSBvcGVuIHN0YXRlXG4gICAgICAgICAgICAvLyBpcyBjaGFuZ2luZy5cbiAgICAgICAgICAgIGlmICghbm90aWZ5KSB7XG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmFjY2VwdChub3RpZnkpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmFjY2VwdCh0cnVlKVxuICAgICAgfVxuICAgIH0sXG4gICAgc2hvdygpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5vcGVuKClcbiAgICB9LFxuICAgIGNsb3NlKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmNsb3NlKClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgbWRjRGlhbG9nIGZyb20gJy4vbWRjLWRpYWxvZy52dWUnXG5cbmV4cG9ydCB7IG1kY0RpYWxvZyB9XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VQbHVnaW4oe1xuICBtZGNEaWFsb2dcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJDdXN0b21FbGVtZW50IiwiZnVuY3Rpb25hbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwicHJvcHMiLCJpcyIsInRhZyIsImRhdGEiLCJjaGlsZHJlbiIsIkN1c3RvbUVsZW1lbnRNaXhpbiIsIkN1c3RvbUJ1dHRvbiIsImxpbmsiLCJPYmplY3QiLCJoIiwiZWxlbWVudCIsInBhcmVudCIsIiRyb3V0ZXIiLCIkcm9vdCIsIiRvcHRpb25zIiwiYXR0cnMiLCJyb2xlIiwib24iLCJjbGljayIsIm5hdGl2ZU9uIiwiaHJlZiIsIkN1c3RvbUJ1dHRvbk1peGluIiwiU3RyaW5nIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwidG8iLCJleGFjdCIsImFwcGVuZCIsInJlcGxhY2UiLCJhY3RpdmVDbGFzcyIsImV4YWN0QWN0aXZlQ2xhc3MiLCJjb21wdXRlZCIsIkRpc3BhdGNoRXZlbnRNaXhpbiIsImV2ZW50IiwiQXJyYXkiLCJtZXRob2RzIiwiZGlzcGF0Y2hFdmVudCIsImV2dCIsIiRlbWl0IiwidHlwZSIsInRhcmdldCIsImV2ZW50VGFyZ2V0IiwiYXJncyIsImV2ZW50QXJncyIsImxpc3RlbmVycyIsIiRsaXN0ZW5lcnMiLCJlIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIlZNQVVuaXF1ZUlkTWl4aW4iLCJiZWZvcmVDcmVhdGUiLCJ2bWFfdWlkXyIsIl91aWQiLCJNRENGb3VuZGF0aW9uIiwiYWRhcHRlciIsImFkYXB0ZXJfIiwiTURDRGlhbG9nQWRhcHRlciIsImNsYXNzTmFtZSIsInNlbGVjdG9yIiwiYWN0aW9uIiwiY3NzQ2xhc3NlcyIsIk9QRU4iLCJPUEVOSU5HIiwiQ0xPU0lORyIsIlNDUk9MTEFCTEUiLCJTVEFDS0VEIiwiU0NST0xMX0xPQ0siLCJzdHJpbmdzIiwiU0NSSU1fU0VMRUNUT1IiLCJDT05UQUlORVJfU0VMRUNUT1IiLCJTVVJGQUNFX1NFTEVDVE9SIiwiQ09OVEVOVF9TRUxFQ1RPUiIsIkJVVFRPTl9TRUxFQ1RPUiIsIkRFRkFVTFRfQlVUVE9OX1NFTEVDVE9SIiwiU1VQUFJFU1NfREVGQVVMVF9QUkVTU19TRUxFQ1RPUiIsImpvaW4iLCJPUEVOSU5HX0VWRU5UIiwiT1BFTkVEX0VWRU5UIiwiQ0xPU0lOR19FVkVOVCIsIkNMT1NFRF9FVkVOVCIsIkFDVElPTl9BVFRSSUJVVEUiLCJDTE9TRV9BQ1RJT04iLCJERVNUUk9ZX0FDVElPTiIsIm51bWJlcnMiLCJESUFMT0dfQU5JTUFUSU9OX09QRU5fVElNRV9NUyIsIkRJQUxPR19BTklNQVRJT05fQ0xPU0VfVElNRV9NUyIsIk1EQ0RpYWxvZ0ZvdW5kYXRpb24iLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJhZGRCb2R5Q2xhc3MiLCJyZW1vdmVCb2R5Q2xhc3MiLCJldmVudFRhcmdldE1hdGNoZXMiLCJ0cmFwRm9jdXMiLCJyZWxlYXNlRm9jdXMiLCJpc0NvbnRlbnRTY3JvbGxhYmxlIiwiYXJlQnV0dG9uc1N0YWNrZWQiLCJnZXRBY3Rpb25Gcm9tRXZlbnQiLCJjbGlja0RlZmF1bHRCdXR0b24iLCJyZXZlcnNlQnV0dG9ucyIsIm5vdGlmeU9wZW5pbmciLCJub3RpZnlPcGVuZWQiLCJub3RpZnlDbG9zaW5nIiwibm90aWZ5Q2xvc2VkIiwiZGVmYXVsdEFkYXB0ZXIiLCJpc09wZW5fIiwiYW5pbWF0aW9uRnJhbWVfIiwiYW5pbWF0aW9uVGltZXJfIiwibGF5b3V0RnJhbWVfIiwiZXNjYXBlS2V5QWN0aW9uXyIsInNjcmltQ2xpY2tBY3Rpb25fIiwiYXV0b1N0YWNrQnV0dG9uc18iLCJhcmVCdXR0b25zU3RhY2tlZF8iLCJzZXRBdXRvU3RhY2tCdXR0b25zIiwiY2xvc2UiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVBbmltYXRpb25UaW1lckVuZF8iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJ1bk5leHRBbmltYXRpb25GcmFtZV8iLCJsYXlvdXQiLCJzZXRUaW1lb3V0IiwiYXV0b1N0YWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibGF5b3V0SW50ZXJuYWxfIiwiZGV0ZWN0U3RhY2tlZEJ1dHRvbnNfIiwiZGV0ZWN0U2Nyb2xsYWJsZUNvbnRlbnRfIiwiaXNDbGljayIsImlzRW50ZXIiLCJrZXlDb2RlIiwiY2FsbGJhY2siLCJjYW5kaWRhdGVTZWxlY3RvcnMiLCJjYW5kaWRhdGVTZWxlY3RvciIsIm1hdGNoZXMiLCJFbGVtZW50IiwicHJvdG90eXBlIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJ0YWJiYWJsZSIsImVsIiwib3B0aW9ucyIsImVsZW1lbnREb2N1bWVudCIsIm93bmVyRG9jdW1lbnQiLCJyZWd1bGFyVGFiYmFibGVzIiwib3JkZXJlZFRhYmJhYmxlcyIsInVudG91Y2hhYmlsaXR5Q2hlY2tlciIsIlVudG91Y2hhYmlsaXR5Q2hlY2tlciIsImNhbmRpZGF0ZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5jbHVkZUNvbnRhaW5lciIsImNhbGwiLCJzbGljZSIsImFwcGx5IiwidW5zaGlmdCIsImkiLCJjYW5kaWRhdGUiLCJjYW5kaWRhdGVUYWJpbmRleCIsImxlbmd0aCIsImlzTm9kZU1hdGNoaW5nU2VsZWN0b3JUYWJiYWJsZSIsImdldFRhYmluZGV4IiwicHVzaCIsImRvY3VtZW50T3JkZXIiLCJ0YWJJbmRleCIsIm5vZGUiLCJ0YWJiYWJsZU5vZGVzIiwic29ydCIsInNvcnRPcmRlcmVkVGFiYmFibGVzIiwibWFwIiwiYSIsImNvbmNhdCIsImlzVGFiYmFibGUiLCJpc0ZvY3VzYWJsZSIsImlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUiLCJpc05vblRhYmJhYmxlUmFkaW8iLCJFcnJvciIsImlzSGlkZGVuSW5wdXQiLCJpc1VudG91Y2hhYmxlIiwiZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IiLCJ0YWJpbmRleEF0dHIiLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImlzTmFOIiwiaXNDb250ZW50RWRpdGFibGUiLCJiIiwiZmluZCIsImxpc3QiLCJwcmVkaWNhdGUiLCJjb250ZW50RWRpdGFibGUiLCJpc0lucHV0IiwidGFnTmFtZSIsImlzUmFkaW8iLCJpc1RhYmJhYmxlUmFkaW8iLCJnZXRDaGVja2VkUmFkaW8iLCJub2RlcyIsImNoZWNrZWQiLCJyYWRpb1NldCIsImRvYyIsImNhY2hlIiwiaGFzRGlzcGxheU5vbmUiLCJub2RlQ29tcHV0ZWRTdHlsZSIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsImNhY2hlZCIsIml0ZW0iLCJkZWZhdWx0VmlldyIsImdldENvbXB1dGVkU3R5bGUiLCJyZXN1bHQiLCJkaXNwbGF5IiwicGFyZW50Tm9kZSIsImRvY3VtZW50RWxlbWVudCIsImNvbXB1dGVkU3R5bGUiLCJ2aXNpYmlsaXR5IiwibW9kdWxlIiwiZXh0ZW5kIiwiaGFzT3duUHJvcGVydHkiLCJhcmd1bWVudHMiLCJzb3VyY2UiLCJhY3RpdmVGb2N1c1RyYXBzIiwidHJhcFF1ZXVlIiwiYWN0aXZhdGVUcmFwIiwidHJhcCIsImFjdGl2ZVRyYXAiLCJwYXVzZSIsInRyYXBJbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJkZWFjdGl2YXRlVHJhcCIsInVucGF1c2UiLCJmb2N1c1RyYXAiLCJ1c2VyT3B0aW9ucyIsImRvY3VtZW50IiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImNvbmZpZyIsInh0ZW5kIiwicmV0dXJuRm9jdXNPbkRlYWN0aXZhdGUiLCJlc2NhcGVEZWFjdGl2YXRlcyIsInN0YXRlIiwiZmlyc3RUYWJiYWJsZU5vZGUiLCJsYXN0VGFiYmFibGVOb2RlIiwibm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uIiwibW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUiLCJhY3RpdmUiLCJwYXVzZWQiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJhY3RpdmF0ZU9wdGlvbnMiLCJ1cGRhdGVUYWJiYWJsZU5vZGVzIiwiYWN0aXZlRWxlbWVudCIsIm9uQWN0aXZhdGUiLCJhZGRMaXN0ZW5lcnMiLCJkZWFjdGl2YXRlT3B0aW9ucyIsInJlbW92ZUxpc3RlbmVycyIsIm9uRGVhY3RpdmF0ZSIsInVuZGVmaW5lZCIsInJldHVybkZvY3VzIiwiZGVsYXkiLCJ0cnlGb2N1cyIsImdldEluaXRpYWxGb2N1c05vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tGb2N1c0luIiwiY2hlY2tQb2ludGVyRG93biIsImNoZWNrQ2xpY2siLCJjaGVja0tleSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXROb2RlRm9yT3B0aW9uIiwib3B0aW9uTmFtZSIsIm9wdGlvblZhbHVlIiwiY29udGFpbnMiLCJjbGlja091dHNpZGVEZWFjdGl2YXRlcyIsInByZXZlbnREZWZhdWx0IiwiRG9jdW1lbnQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJpc0VzY2FwZUV2ZW50IiwiaXNUYWJFdmVudCIsImNoZWNrVGFiIiwic2hpZnRLZXkiLCJmb2N1cyIsImlzU2VsZWN0YWJsZUlucHV0Iiwic2VsZWN0IiwidG9Mb3dlckNhc2UiLCJmbiIsImNyZWF0ZUZvY3VzVHJhcEluc3RhbmNlIiwic3VyZmFjZUVsIiwiZm9jdXNUcmFwRmFjdG9yeSIsImNyZWF0ZUZvY3VzVHJhcCIsImluaXRpYWxGb2N1c0VsIiwiaW5pdGlhbEZvY3VzIiwiaXNTY3JvbGxhYmxlIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiYXJlVG9wc01pc2FsaWduZWQiLCJlbHMiLCJ0b3BzIiwiU2V0IiwiZm9yRWFjaCIsImFkZCIsIm9mZnNldFRvcCIsInNpemUiLCJNRENDb21wb25lbnQiLCJyb290IiwiZm91bmRhdGlvbiIsInJvb3RfIiwiaW5pdGlhbGl6ZSIsImZvdW5kYXRpb25fIiwiZ2V0RGVmYXVsdEZvdW5kYXRpb24iLCJpbml0IiwiaW5pdGlhbFN5bmNXaXRoRE9NIiwiZGVzdHJveSIsImV2dFR5cGUiLCJoYW5kbGVyIiwiZXZ0RGF0YSIsInNob3VsZEJ1YmJsZSIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiYnViYmxlcyIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiTURDUmlwcGxlQWRhcHRlciIsInZhck5hbWUiLCJ2YWx1ZSIsIlJPT1QiLCJVTkJPVU5ERUQiLCJCR19GT0NVU0VEIiwiRkdfQUNUSVZBVElPTiIsIkZHX0RFQUNUSVZBVElPTiIsIlZBUl9MRUZUIiwiVkFSX1RPUCIsIlZBUl9GR19TSVpFIiwiVkFSX0ZHX1NDQUxFIiwiVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCIsIlZBUl9GR19UUkFOU0xBVEVfRU5EIiwiUEFERElORyIsIklOSVRJQUxfT1JJR0lOX1NDQUxFIiwiREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMiLCJGR19ERUFDVElWQVRJT05fTVMiLCJUQVBfREVMQVlfTVMiLCJzdXBwb3J0c0Nzc1ZhcmlhYmxlc18iLCJzdXBwb3J0c1Bhc3NpdmVfIiwiZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1ZyIsIndpbmRvd09iaiIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImhhc1BzZXVkb1ZhckJ1ZyIsImJvcmRlclRvcFN0eWxlIiwicmVtb3ZlIiwic3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJmb3JjZVJlZnJlc2giLCJzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCIsIkNTUyIsInN1cHBvcnRzIiwiZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyIsIndlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyIsImFwcGx5UGFzc2l2ZSIsImdsb2JhbE9iaiIsImlzU3VwcG9ydGVkIiwicGFzc2l2ZSIsImdldE1hdGNoZXNQcm9wZXJ0eSIsIkhUTUxFbGVtZW50UHJvdG90eXBlIiwibWF0Y2hlc01ldGhvZHMiLCJtZXRob2QiLCJtYXRjaGVzTWV0aG9kIiwiZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzIiwiZXYiLCJwYWdlT2Zmc2V0IiwiY2xpZW50UmVjdCIsIngiLCJ5IiwiZG9jdW1lbnRYIiwibGVmdCIsImRvY3VtZW50WSIsInRvcCIsIm5vcm1hbGl6ZWRYIiwibm9ybWFsaXplZFkiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTIiwiUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMiLCJhY3RpdmF0ZWRUYXJnZXRzIiwiTURDUmlwcGxlRm91bmRhdGlvbiIsImJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMiLCJpc1VuYm91bmRlZCIsImlzU3VyZmFjZUFjdGl2ZSIsImlzU3VyZmFjZURpc2FibGVkIiwiY29udGFpbnNFdmVudFRhcmdldCIsInJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwiZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJkZXJlZ2lzdGVyUmVzaXplSGFuZGxlciIsInVwZGF0ZUNzc1ZhcmlhYmxlIiwiY29tcHV0ZUJvdW5kaW5nUmVjdCIsImdldFdpbmRvd1BhZ2VPZmZzZXQiLCJmcmFtZV8iLCJ3aWR0aCIsImhlaWdodCIsImFjdGl2YXRpb25TdGF0ZV8iLCJkZWZhdWx0QWN0aXZhdGlvblN0YXRlXyIsImluaXRpYWxTaXplXyIsIm1heFJhZGl1c18iLCJhY3RpdmF0ZUhhbmRsZXJfIiwiYWN0aXZhdGVfIiwiZGVhY3RpdmF0ZUhhbmRsZXJfIiwiZGVhY3RpdmF0ZV8iLCJmb2N1c0hhbmRsZXJfIiwiaGFuZGxlRm9jdXMiLCJibHVySGFuZGxlcl8iLCJoYW5kbGVCbHVyIiwicmVzaXplSGFuZGxlcl8iLCJ1bmJvdW5kZWRDb29yZHNfIiwiZmdTY2FsZV8iLCJhY3RpdmF0aW9uVGltZXJfIiwiZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfIiwiYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyIsImFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyIsInJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XyIsInByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyIsImlzQWN0aXZhdGVkIiwiaGFzRGVhY3RpdmF0aW9uVVhSdW4iLCJ3YXNBY3RpdmF0ZWRCeVBvaW50ZXIiLCJ3YXNFbGVtZW50TWFkZUFjdGl2ZSIsImFjdGl2YXRpb25FdmVudCIsImlzUHJvZ3JhbW1hdGljIiwic3VwcG9ydHNQcmVzc1JpcHBsZSIsInN1cHBvcnRzUHJlc3NSaXBwbGVfIiwicmVnaXN0ZXJSb290SGFuZGxlcnNfIiwicmVtb3ZlQ3NzVmFyc18iLCJkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXyIsImRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18iLCJrZXlzIiwiayIsImFjdGl2YXRpb25TdGF0ZSIsInByZXZpb3VzQWN0aXZhdGlvbkV2ZW50IiwiaXNTYW1lSW50ZXJhY3Rpb24iLCJoYXNBY3RpdmF0ZWRDaGlsZCIsInNvbWUiLCJyZXNldEFjdGl2YXRpb25TdGF0ZV8iLCJyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyIsImNoZWNrRWxlbWVudE1hZGVBY3RpdmVfIiwiYW5pbWF0ZUFjdGl2YXRpb25fIiwidHJhbnNsYXRlU3RhcnQiLCJ0cmFuc2xhdGVFbmQiLCJnZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwicm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfIiwiYWN0aXZhdGlvbkhhc0VuZGVkIiwiYW5pbWF0ZURlYWN0aXZhdGlvbl8iLCJtYXhEaW0iLCJtYXgiLCJnZXRCb3VuZGVkUmFkaXVzIiwiaHlwb3RlbnVzZSIsInNxcnQiLCJwb3ciLCJ1cGRhdGVMYXlvdXRDc3NWYXJzXyIsInJvdW5kIiwidW5ib3VuZGVkIiwiTURDUmlwcGxlIiwidW5ib3VuZGVkXyIsInNldFVuYm91bmRlZCIsImNyZWF0ZUFkYXB0ZXIiLCJkYXRhc2V0Iiwic2V0VW5ib3VuZGVkXyIsInJpcHBsZSIsImluc3RhbmNlIiwiTUFUQ0hFUyIsInV0aWwiLCJIVE1MRWxlbWVudCIsImNsYXNzTGlzdCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYWdlWE9mZnNldCIsInBhZ2VZT2Zmc2V0IiwiUmlwcGxlQ2FwYWJsZVN1cmZhY2UiLCJSaXBwbGVCYXNlIiwicmVmIiwiX21hdGNoZXMiLCIkZWwiLCIkc2V0IiwiY2xhc3NlcyIsIiRkZWxldGUiLCJzdHlsZXMiLCJSaXBwbGVNaXhpbiIsIm1vdW50ZWQiLCJiZWZvcmVEZXN0cm95IiwiY2xvc2VzdCIsInBhcmVudEVsZW1lbnQiLCJuYXRpdmVNYXRjaGVzIiwibWRjRGlhbG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQU8sU0FBU0EsUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEI7SUFDL0I7SUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7SUFDQSxNQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7SUFDakNELElBQUFBLElBQUksR0FBR0MsTUFBTSxDQUFDQyxHQUFkO0lBQ0QsR0FGRCxNQUVPLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztJQUN4QztJQUNBSCxJQUFBQSxJQUFJLEdBQUdHLE1BQU0sQ0FBQ0QsR0FBZDtJQUNEOztJQUNELE1BQUlGLElBQUosRUFBVTtJQUNSQSxJQUFBQSxJQUFJLENBQUNJLEdBQUwsQ0FBU0wsTUFBVDtJ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
