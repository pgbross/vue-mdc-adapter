/**
* @module vue-mdc-adaptertextfield 0.19.1-beta
* @exports VueMDCTextfield
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.VueMDCTextfield = factory());
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
    var strings = {
      ARIA_HIDDEN: 'aria-hidden',
      ROLE: 'role'
    };
    /** @enum {string} */

    var cssClasses = {
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
          return cssClasses;
        }
        /** @return enum {string} */

      }, {
        key: "strings",
        get: function get() {
          return strings;
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
            this.adapter_.addClass(cssClasses.HELPER_TEXT_PERSISTENT);
          } else {
            this.adapter_.removeClass(cssClasses.HELPER_TEXT_PERSISTENT);
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
            this.adapter_.addClass(cssClasses.HELPER_TEXT_VALIDATION_MSG);
          } else {
            this.adapter_.removeClass(cssClasses.HELPER_TEXT_VALIDATION_MSG);
          }
        }
        /** Makes the helper text visible to the screen reader. */

      }, {
        key: "showToScreenReader",
        value: function showToScreenReader() {
          this.adapter_.removeAttr(strings.ARIA_HIDDEN);
        }
        /**
         * Sets the validity of the helper text based on the input validity.
         * @param {boolean} inputIsValid
         */

      }, {
        key: "setValidity",
        value: function setValidity(inputIsValid) {
          var helperTextIsPersistent = this.adapter_.hasClass(cssClasses.HELPER_TEXT_PERSISTENT);
          var helperTextIsValidationMsg = this.adapter_.hasClass(cssClasses.HELPER_TEXT_VALIDATION_MSG);
          var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;

          if (validationMsgNeedsDisplay) {
            this.adapter_.setAttr(strings.ROLE, 'alert');
          } else {
            this.adapter_.removeAttr(strings.ROLE);
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
          this.adapter_.setAttr(strings.ARIA_HIDDEN, 'true');
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
    var strings$1 = {
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
          return strings$1;
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
            this.adapter_.setAttr('role', strings$1.ICON_ROLE);
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
    var strings$2 = {
      ARIA_CONTROLS: 'aria-controls',
      INPUT_SELECTOR: '.mdc-text-field__input',
      LABEL_SELECTOR: '.mdc-floating-label',
      ICON_SELECTOR: '.mdc-text-field__icon',
      OUTLINE_SELECTOR: '.mdc-notched-outline',
      LINE_RIPPLE_SELECTOR: '.mdc-line-ripple'
    };
    /** @enum {string} */

    var cssClasses$1 = {
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

    var numbers = {
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
          return cssClasses$1;
        }
        /** @return enum {string} */

      }, {
        key: "strings",
        get: function get() {
          return strings$2;
        }
        /** @return enum {string} */

      }, {
        key: "numbers",
        get: function get() {
          return numbers;
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
            var isDense = this.adapter_.hasClass(cssClasses$1.DENSE);
            var labelScale = isDense ? numbers.DENSE_LABEL_SCALE : numbers.LABEL_SCALE;
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

    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */

    /* global define */
    (function () {

      var hasOwn = {}.hasOwnProperty;

      function classNames() {
        var classes = [];

        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg) continue;

          var argType = _typeof(arg);

          if (argType === 'string' || argType === 'number') {
            classes.push(arg);
          } else if (Array.isArray(arg) && arg.length) {
            var inner = classNames.apply(null, arg);

            if (inner) {
              classes.push(inner);
            }
          } else if (argType === 'object') {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }

        return classes.join(' ');
      }

      if (typeof module !== 'undefined' && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === 'function' && _typeof(define.amd) === 'object' && define.amd) {
        // register as 'classnames', consistent with npm package name
        define('classnames', [], function () {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();

    var classnames_ = /*#__PURE__*/Object.freeze({

    });

    //
    var classnames = classnames_;
    var script = {
      name: 'textfield-helper-text',
      // functional: true,
      props: {
        persistent: Boolean,
        validation: Boolean
      },
      data: function data() {
        var node = this.$slots.default[0];
        return {
          classes: {
            'mdc-text-field-helper-text': true,
            'mdc-text-field-helper-text--persistent': node.data.attrs.persistent,
            'mdc-text-field-helper-text--validation-msg': node.data.attrs.validation
          }
        };
      },
      render: function render(h) {
        var node = this.$slots.default[0];
        node.data.class = classnames(this.classes);
        return node;
      },
      watch: {
        persistent: function persistent() {
          this.foundation.setPersistent(this.persistent);
        },
        validation: function validation() {
          this.foundation.setValidation(this.validation);
        }
      },
      mounted: function mounted() {
        var _this = this;

        this.foundation = new MDCTextFieldHelperTextFoundation({
          addClass: function addClass(className) {
            return _this.$set(_this.classes, className, true);
          },
          removeClass: function removeClass(className) {
            return _this.$delete(_this.classes, className);
          },
          hasClass: function hasClass(className) {
            return Boolean(_this.classes[className]);
          },
          setAttr: function setAttr(attr, value) {
            _this.$el.setAttribute(attr, value);
          },
          removeAttr: function removeAttr(attr) {
            _this.$el.removeAttribute(attr);
          },
          setContent: function setContent()
          /*content*/
          {// help text get's updated from {{helptext}}
            // cf. this.$el.textContent = content
          }
        });
        this.foundation.init();
      },
      beforeDestroy: function beforeDestroy() {
        this.foundation.destroy();
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
    script.__file = "/ddata/extra/vma/components/textfield/textfield-helper-text.vue";

    /* template */

      /* style */
      const __vue_inject_styles__ = undefined;
      /* scoped */
      const __vue_scope_id__ = undefined;
      /* module identifier */
      const __vue_module_identifier__ = undefined;
      /* functional template */
      const __vue_is_functional_template__ = undefined;
      /* style inject */
      
      /* style inject SSR */
      

      
      var TextfieldHelperText = normalizeComponent(
        {},
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        undefined,
        undefined
      );

    var script$1 = {
      name: 'textfield-icon',
      functional: true,
      props: {
        disabled: Boolean
      },
      mounted: function mounted() {
        var _this = this;

        this.foundation = new MDCTextFieldIconFoundation(_extends({
          getAttr: function getAttr(attr) {
            return _this.$el.getAttribute(attr);
          },
          setAttr: function setAttr(attr, value) {
            return _this.$el.setAttribute(attr, value);
          },
          removeAttr: function removeAttr(attr) {
            return _this.$el.removeAttribute(attr);
          },
          setContent: function setContent(content) {
            _this.$el.textContent = content;
          },
          registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
            return _this.$el.addEventListener(evtType, handler);
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
            return _this.$el.removeEventListener(evtType, handler);
          },
          notifyIconAction: function notifyIconAction() {
            _this.$emit('click');

            emitCustomEvent(_this.$el, MDCTextFieldIconFoundation.strings.ICON_EVENT, {}, true
            /* shouldBubble  */
            );
          }
        }));
        this.foundation.init();
      },
      render: function render(h, context) {
        var node = context.children[0];
        node.data.class = 'mdc-text-field__icon';
        return node;
      },
      beforeDestroy: function beforeDestroy() {
        this.foundation.destroy();
      }
    };

    /* script */
    const __vue_script__$1 = script$1;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$1.__file = "/ddata/extra/vma/components/textfield/textfield-icon.vue";

    /* template */

      /* style */
      const __vue_inject_styles__$1 = undefined;
      /* scoped */
      const __vue_scope_id__$1 = undefined;
      /* module identifier */
      const __vue_module_identifier__$1 = undefined;
      /* functional template */
      const __vue_is_functional_template__$1 = undefined;
      /* style inject */
      
      /* style inject SSR */
      

      
      var TextfieldIcon = normalizeComponent(
        {},
        __vue_inject_styles__$1,
        __vue_script__$1,
        __vue_scope_id__$1,
        __vue_is_functional_template__$1,
        __vue_module_identifier__$1,
        undefined,
        undefined
      );

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
    var strings$3 = {
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
          return cssClasses$2;
        }
      }, {
        key: "strings",
        get: function get() {
          return strings$3;
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
    var script$2 = {
      name: 'mdc-ripple',
      mixins: [CustomElementMixin, RippleMixin],
      props: {
        tag: String
      }
    };

    /* script */
    const __vue_script__$2 = script$2;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$2.__file = "/ddata/extra/vma/components/ripple/mdc-ripple.vue";

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
      const __vue_inject_styles__$2 = undefined;
      /* scoped */
      const __vue_scope_id__$2 = undefined;
      /* module identifier */
      const __vue_module_identifier__$2 = undefined;
      /* functional template */
      const __vue_is_functional_template__$2 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      normalizeComponent(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__$2,
        __vue_script__$2,
        __vue_scope_id__$2,
        __vue_is_functional_template__$2,
        __vue_module_identifier__$2,
        undefined,
        undefined
      );

    var script$3 = {
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
        outline: Boolean,
        disabled: Boolean,
        required: Boolean,
        valid: {
          type: Boolean,
          default: undefined
        },
        fullwidth: Boolean,
        multiline: Boolean,
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
            'mdc-text-field--outlined': !this.fullwidth && this.outline,
            'mdc-text-field--with-leading-icon': Boolean(this.$slots.leadingIcon),
            'mdc-text-field--with-trailing-icon': Boolean(this.$slots.trailingIcon)
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
          outlineClasses: {},
          notchStyles: {}
        };
      },
      components: {
        TextfieldHelperText: TextfieldHelperText,
        TextfieldIcon: TextfieldIcon
      },
      computed: {
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
          helperText: this.$refs.helpertextEl ? this.$refs.helpertextEl.foundation : void 0,
          leadingIcon: this.$refs.leadingIconEl ? this.$refs.leadingIconEl.foundation : void 0,
          trailingIcon: this.$refs.trailingIconEl ? this.$refs.trailingIconEl.foundation : void 0
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
              _this3.$refs.labelEl && _this3.$refs.labelEl.shake(shouldShake);
            },
            floatLabel: function floatLabel(shouldFloat) {
              _this3.$refs.labelEl && _this3.$refs.labelEl.float(shouldFloat);
            },
            hasLabel: function hasLabel() {
              return !!_this3.$refs.labelEl || !!_this3.$refs.notchedEl;
            },
            getLabelWidth: function getLabelWidth() {
              return _this3.$refs.labelEl && _this3.$refs.labelEl.getWidth();
            }
          };
        },
        getLineRippleAdapterMethods: function getLineRippleAdapterMethods() {
          var _this4 = this;

          return {
            deactivateLineRipple: function deactivateLineRipple() {
              if (_this4.$refs.lineRippleEl) {
                _this4.$refs.lineRippleEl.deactivate();
              }
            },
            activateLineRipple: function activateLineRipple() {
              if (_this4.$refs.lineRippleEl) {
                _this4.$refs.lineRippleEl.activate();
              }
            },
            setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {
              if (_this4.$refs.lineRippleEl) {
                _this4.$refs.lineRippleEl.setRippleCenter(normalizedX);
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
              return _this5.$refs.labelEl.notch(notchWidth, isRtl);
            },
            closeOutline: function closeOutline() {
              return _this5.$refs.labelEl.closeNotch();
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
    const __vue_script__$3 = script$3;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$3.__file = "/ddata/extra/vma/components/textfield/mdc-textfield.vue";

    /* template */
    var __vue_render__$1 = function() {
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
          _c(
            "div",
            { ref: "root", class: _vm.rootClasses },
            [
              _vm.$slots.leadingIcon
                ? _c(
                    "textfield-icon",
                    { ref: "leadingIconEl" },
                    [_vm._t("leadingIcon")],
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
                    "mdc-floating-label",
                    { ref: "labelEl", attrs: { for: _vm.vma_uid_ } },
                    [_vm._v(_vm._s(_vm.label))]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$slots.trailingIcon
                ? _c(
                    "textfield-icon",
                    { ref: "trailingIconEl" },
                    [_vm._t("trailingIcon")],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.hasOutline
                ? _c("mdc-notched-outline", { ref: "labelEl" }, [
                    _vm._v(_vm._s(_vm.label))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.hasLineRipple
                ? _c("mdc-line-ripple", { ref: "lineRippleEl" })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _vm.$slots.helpText
            ? _c(
                "textfield-helper-text",
                { ref: "helpertextEl", attrs: { id: "help-" + _vm.vma_uid_ } },
                [_vm._t("helpText")],
                2
              )
            : _vm._e()
        ],
        1
      )
    };
    var __vue_staticRenderFns__$1 = [];
    __vue_render__$1._withStripped = true;

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
      

      
      var mdcTextField = normalizeComponent(
        { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
        __vue_inject_styles__$3,
        __vue_script__$3,
        __vue_scope_id__$3,
        __vue_is_functional_template__$3,
        __vue_module_identifier__$3,
        undefined,
        undefined
      );

    var plugin = BasePlugin({
      mdcTextField: mdcTextField
    });

    autoInit(plugin);

    return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGZpZWxkLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXBwbHktcGFzc2l2ZS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9hdXRvLWluaXQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYmFzZS1wbHVnaW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWVsZW1lbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWV2ZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Rpc3BhdGNoLWZvY3VzLW1peGluLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9oZWxwZXItdGV4dC9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaGVscGVyLXRleHQvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaGVscGVyLXRleHQvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2ljb24vYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2ljb24vY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvdGV4dGZpZWxkL3RleHRmaWVsZC1oZWxwZXItdGV4dC52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXJ1bnRpbWUtaGVscGVycy9ub3JtYWxpemUtY29tcG9uZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy90ZXh0ZmllbGQvdGV4dGZpZWxkLWljb24udnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS91dGlsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS1iYXNlLmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS52dWUiLCIuLi8uLi9jb21wb25lbnRzL3RleHRmaWVsZC9tZGMtdGV4dGZpZWxkLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvdGV4dGZpZWxkL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy90ZXh0ZmllbGQvZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHN1cHBvcnRzUGFzc2l2ZV9cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmQgaWYgc28sIHVzZSB0aGVtLlxuICogQHBhcmFtIHshV2luZG93PX0gZ2xvYmFsT2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58e3Bhc3NpdmU6IGJvb2xlYW59fVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiA9IHdpbmRvdywgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgaWYgKHN1cHBvcnRzUGFzc2l2ZV8gPT09IHVuZGVmaW5lZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWQgPSBmYWxzZVxuICAgIHRyeSB7XG4gICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIHtcbiAgICAgICAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgICAgICAgaXNTdXBwb3J0ZWQgPSB7IHBhc3NpdmU6IHRydWUgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vZW1wdHlcbiAgICB9XG5cbiAgICBzdXBwb3J0c1Bhc3NpdmVfID0gaXNTdXBwb3J0ZWRcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYXV0b0luaXQocGx1Z2luKSB7XG4gIC8vIEF1dG8taW5zdGFsbFxuICBsZXQgX1Z1ZSA9IG51bGxcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgX1Z1ZSA9IHdpbmRvdy5WdWVcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8qZ2xvYmFsIGdsb2JhbCovXG4gICAgX1Z1ZSA9IGdsb2JhbC5WdWVcbiAgfVxuICBpZiAoX1Z1ZSkge1xuICAgIF9WdWUudXNlKHBsdWdpbilcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIEJhc2VQbHVnaW4oY29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICdfX1ZFUlNJT05fXycsXG4gICAgaW5zdGFsbDogdm0gPT4ge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNba2V5XVxuICAgICAgICB2bS5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHNcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEN1c3RvbUVsZW1lbnQgPSB7XG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHJlbmRlcihjcmVhdGVFbGVtZW50LCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBjb250ZXh0LnByb3BzLmlzIHx8IGNvbnRleHQucHJvcHMudGFnIHx8ICdkaXYnLFxuICAgICAgY29udGV4dC5kYXRhLFxuICAgICAgY29udGV4dC5jaGlsZHJlblxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudE1peGluID0ge1xuICBjb21wb25lbnRzOiB7XG4gICAgQ3VzdG9tRWxlbWVudFxuICB9XG59XG4iLCIvKiBnbG9iYWwgQ3VzdG9tRXZlbnQgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXRDdXN0b21FdmVudChlbCwgZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgbGV0IGV2dFxuICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpXG4gIH1cbiAgZWwuZGlzcGF0Y2hFdmVudChldnQpXG59XG4iLCJleHBvcnQgY29uc3QgRGlzcGF0Y2hGb2N1c01peGluID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7IGhhc0ZvY3VzOiBmYWxzZSB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbk1vdXNlRG93bigpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IHRydWVcbiAgICB9LFxuICAgIG9uTW91c2VVcCgpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlXG4gICAgfSxcbiAgICBvbkZvY3VzRXZlbnQoKSB7XG4gICAgICAvLyBkaXNwYXRjaCBhc3luYyB0byBsZXQgdGltZSB0byBvdGhlciBmb2N1cyBldmVudCB0byBwcm9wYWdhdGVcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kaXNwYXRjaEZvY3VzRXZlbnQoKSwgMClcbiAgICB9LFxuICAgIG9uQmx1ckV2ZW50KCkge1xuICAgICAgLy8gZGlzcGF0Y2ggYXN5bmMgdG8gbGV0IHRpbWUgdG8gb3RoZXIgZm9jdXMgZXZlbnQgdG8gcHJvcGFnYXRlXG4gICAgICAvLyBhbHNvIGZpbHR1ciBibHVyIGlmIG1vdXNlZG93blxuICAgICAgdGhpcy5fYWN0aXZlIHx8IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kaXNwYXRjaEZvY3VzRXZlbnQoKSwgMClcbiAgICB9LFxuICAgIGRpc3BhdGNoRm9jdXNFdmVudCgpIHtcbiAgICAgIGxldCBoYXNGb2N1cyA9XG4gICAgICAgIHRoaXMuJGVsID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50IHx8XG4gICAgICAgIHRoaXMuJGVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpXG4gICAgICBpZiAoaGFzRm9jdXMgIT0gdGhpcy5oYXNGb2N1cykge1xuICAgICAgICB0aGlzLiRlbWl0KGhhc0ZvY3VzID8gJ2ZvY3VzJyA6ICdibHVyJylcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGhhc0ZvY3VzXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLm9uRm9jdXNFdmVudClcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMub25CbHVyRXZlbnQpXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bilcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMub25Gb2N1c0V2ZW50KVxuICAgIHRoaXMuJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdGhpcy5vbkJsdXJFdmVudClcbiAgICB0aGlzLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duKVxuICAgIHRoaXMuJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcClcbiAgfVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBBXG4gKi9cbmNsYXNzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVte2Nzc0NsYXNzZXN9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtzdHJpbmdzfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtudW1iZXJzfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshT2JqZWN0fSAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAvLyB2YWxpZGF0aW9uLlxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0E9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyID0ge30pIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUF9ICovXG4gICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRleHQgRmllbGQgSGVscGVyIFRleHQuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGV4dEZpZWxkIGhlbHBlciB0ZXh0IGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENUZXh0RmllbGRIZWxwZXJUZXh0QWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIGEgY2xhc3MgdG8gdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGNsYXNzIGZyb20gdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgaGVscGVyIHRleHQgZWxlbWVudCBjb250YWlucyB0aGUgZ2l2ZW4gY2xhc3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogU2V0cyBhbiBhdHRyaWJ1dGUgd2l0aCBhIGdpdmVuIHZhbHVlIG9uIHRoZSBoZWxwZXIgdGV4dCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHNldEF0dHIoYXR0ciwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gYXR0cmlidXRlIGZyb20gdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyXG4gICAqL1xuICByZW1vdmVBdHRyKGF0dHIpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRleHQgY29udGVudCBmb3IgdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gICAqL1xuICBzZXRDb250ZW50KGNvbnRlbnQpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEhlbHBlclRleHRBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQVJJQV9ISURERU46ICdhcmlhLWhpZGRlbicsXG4gIFJPTEU6ICdyb2xlJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgSEVMUEVSX1RFWFRfUEVSU0lTVEVOVDogJ21kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0LS1wZXJzaXN0ZW50JyxcbiAgSEVMUEVSX1RFWFRfVkFMSURBVElPTl9NU0c6ICdtZGMtdGV4dC1maWVsZC1oZWxwZXItdGV4dC0tdmFsaWRhdGlvbi1tc2cnLFxufTtcblxuZXhwb3J0IHtzdHJpbmdzLCBjc3NDbGFzc2VzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENUZXh0RmllbGRIZWxwZXJUZXh0QWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXI+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuXG4gICAqIHR5cGVzLlxuICAgKiBAcmV0dXJuIHshTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUZXh0RmllbGRIZWxwZXJUZXh0QWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIGhhc0NsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHNldEF0dHI6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQXR0cjogKCkgPT4ge30sXG4gICAgICBzZXRDb250ZW50OiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENUZXh0RmllbGRIZWxwZXJUZXh0QWRhcHRlcn0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjb250ZW50IG9mIHRoZSBoZWxwZXIgdGV4dCBmaWVsZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAgICovXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0Q29udGVudChjb250ZW50KTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IGlzUGVyc2lzdGVudCBTZXRzIHRoZSBwZXJzaXN0ZW5jeSBvZiB0aGUgaGVscGVyIHRleHQuICovXG4gIHNldFBlcnNpc3RlbnQoaXNQZXJzaXN0ZW50KSB7XG4gICAgaWYgKGlzUGVyc2lzdGVudCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1BFUlNJU1RFTlQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfUEVSU0lTVEVOVCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWYWxpZGF0aW9uIFRydWUgdG8gbWFrZSB0aGUgaGVscGVyIHRleHQgYWN0IGFzIGFuXG4gICAqICAgZXJyb3IgdmFsaWRhdGlvbiBtZXNzYWdlLlxuICAgKi9cbiAgc2V0VmFsaWRhdGlvbihpc1ZhbGlkYXRpb24pIHtcbiAgICBpZiAoaXNWYWxpZGF0aW9uKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfVkFMSURBVElPTl9NU0cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfVkFMSURBVElPTl9NU0cpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBNYWtlcyB0aGUgaGVscGVyIHRleHQgdmlzaWJsZSB0byB0aGUgc2NyZWVuIHJlYWRlci4gKi9cbiAgc2hvd1RvU2NyZWVuUmVhZGVyKCkge1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQXR0cihzdHJpbmdzLkFSSUFfSElEREVOKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWxpZGl0eSBvZiB0aGUgaGVscGVyIHRleHQgYmFzZWQgb24gdGhlIGlucHV0IHZhbGlkaXR5LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlucHV0SXNWYWxpZFxuICAgKi9cbiAgc2V0VmFsaWRpdHkoaW5wdXRJc1ZhbGlkKSB7XG4gICAgY29uc3QgaGVscGVyVGV4dElzUGVyc2lzdGVudCA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9QRVJTSVNURU5UKTtcbiAgICBjb25zdCBoZWxwZXJUZXh0SXNWYWxpZGF0aW9uTXNnID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHKTtcbiAgICBjb25zdCB2YWxpZGF0aW9uTXNnTmVlZHNEaXNwbGF5ID0gaGVscGVyVGV4dElzVmFsaWRhdGlvbk1zZyAmJiAhaW5wdXRJc1ZhbGlkO1xuXG4gICAgaWYgKHZhbGlkYXRpb25Nc2dOZWVkc0Rpc3BsYXkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihzdHJpbmdzLlJPTEUsICdhbGVydCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHIoc3RyaW5ncy5ST0xFKTtcbiAgICB9XG5cbiAgICBpZiAoIWhlbHBlclRleHRJc1BlcnNpc3RlbnQgJiYgIXZhbGlkYXRpb25Nc2dOZWVkc0Rpc3BsYXkpIHtcbiAgICAgIHRoaXMuaGlkZV8oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgdGhlIGhlbHAgdGV4dCBmcm9tIHNjcmVlbiByZWFkZXJzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGlkZV8oKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKHN0cmluZ3MuQVJJQV9ISURERU4sICd0cnVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRleHQgRmllbGQgSWNvbi5cbiAqXG4gKiBEZWZpbmVzIHRoZSBzaGFwZSBvZiB0aGUgYWRhcHRlciBleHBlY3RlZCBieSB0aGUgZm91bmRhdGlvbi4gSW1wbGVtZW50IHRoaXNcbiAqIGFkYXB0ZXIgdG8gaW50ZWdyYXRlIHRoZSB0ZXh0IGZpZWxkIGljb24gaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1RleHRGaWVsZEljb25BZGFwdGVyIHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIHZhbHVlIG9mIGFuIGF0dHJpYnV0ZSBvbiB0aGUgaWNvbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXRBdHRyKGF0dHIpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgYW4gYXR0cmlidXRlIG9uIHRoZSBpY29uIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgc2V0QXR0cihhdHRyLCB2YWx1ZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBhdHRyaWJ1dGUgZnJvbSB0aGUgaWNvbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKi9cbiAgcmVtb3ZlQXR0cihhdHRyKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGljb24gZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAgICovXG4gIHNldENvbnRlbnQoY29udGVudCkge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBpY29uIGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEZXJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBvbiB0aGUgaWNvbiBlbGVtZW50IGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhIGN1c3RvbSBldmVudCBcIk1EQ1RleHRGaWVsZDppY29uXCIgZGVub3RpbmcgYSB1c2VyIGhhcyBjbGlja2VkIHRoZSBpY29uLlxuICAgKi9cbiAgbm90aWZ5SWNvbkFjdGlvbigpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEljb25BZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgSUNPTl9FVkVOVDogJ01EQ1RleHRGaWVsZDppY29uJyxcbiAgSUNPTl9ST0xFOiAnYnV0dG9uJyxcbn07XG5cbmV4cG9ydCB7c3RyaW5nc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDVGV4dEZpZWxkSWNvbkFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7c3RyaW5nc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1RleHRGaWVsZEljb25BZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QHNlZSBNRENUZXh0RmllbGRJY29uQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5cbiAgICogdHlwZXMuXG4gICAqIEByZXR1cm4geyFNRENUZXh0RmllbGRJY29uQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RleHRGaWVsZEljb25BZGFwdGVyfSAqLyAoe1xuICAgICAgZ2V0QXR0cjogKCkgPT4ge30sXG4gICAgICBzZXRBdHRyOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUF0dHI6ICgpID0+IHt9LFxuICAgICAgc2V0Q29udGVudDogKCkgPT4ge30sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeUljb25BY3Rpb246ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ1RleHRGaWVsZEljb25BZGFwdGVyfSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtzdHJpbmc/fSAqL1xuICAgIHRoaXMuc2F2ZWRUYWJJbmRleF8gPSBudWxsO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfID0gKGV2dCkgPT4gdGhpcy5oYW5kbGVJbnRlcmFjdGlvbihldnQpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnNhdmVkVGFiSW5kZXhfID0gdGhpcy5hZGFwdGVyXy5nZXRBdHRyKCd0YWJpbmRleCcpO1xuXG4gICAgWydjbGljaycsICdrZXlkb3duJ10uZm9yRWFjaCgoZXZ0VHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCB0aGlzLmludGVyYWN0aW9uSGFuZGxlcl8pO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBbJ2NsaWNrJywgJ2tleWRvd24nXS5mb3JFYWNoKChldnRUeXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IGRpc2FibGVkICovXG4gIHNldERpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgaWYgKCF0aGlzLnNhdmVkVGFiSW5kZXhfKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHIoJ3JvbGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCd0YWJpbmRleCcsIHRoaXMuc2F2ZWRUYWJJbmRleF8pO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCdyb2xlJywgc3RyaW5ncy5JQ09OX1JPTEUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgKi9cbiAgc2V0QXJpYUxhYmVsKGxhYmVsKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50ICovXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0Q29udGVudChjb250ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGFuIGludGVyYWN0aW9uIGV2ZW50XG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZUludGVyYWN0aW9uKGV2dCkge1xuICAgIGlmIChldnQudHlwZSA9PT0gJ2NsaWNrJyB8fCBldnQua2V5ID09PSAnRW50ZXInIHx8IGV2dC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlJY29uQWN0aW9uKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24gZnJvbSAnLi9oZWxwZXItdGV4dC9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiBmcm9tICcuL2ljb24vZm91bmRhdGlvbic7XG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIHZhbHVlOiBzdHJpbmcsXG4gKiAgIGRpc2FibGVkOiBib29sZWFuLFxuICogICBiYWRJbnB1dDogYm9vbGVhbixcbiAqICAgdmFsaWRpdHk6IHtcbiAqICAgICBiYWRJbnB1dDogYm9vbGVhbixcbiAqICAgICB2YWxpZDogYm9vbGVhbixcbiAqICAgfSxcbiAqIH19XG4gKi9cbmxldCBOYXRpdmVJbnB1dFR5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgaGVscGVyVGV4dDogKCFNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbnx1bmRlZmluZWQpLFxuICogICBsZWFkaW5nSWNvbjogKCFNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbnx1bmRlZmluZWQpLFxuICogICB0cmFpbGluZ0ljb246ICghTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb258dW5kZWZpbmVkKSxcbiAqIH19XG4gKi9cbmxldCBGb3VuZGF0aW9uTWFwVHlwZTtcblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgVGV4dCBGaWVsZC5cbiAqXG4gKiBEZWZpbmVzIHRoZSBzaGFwZSBvZiB0aGUgYWRhcHRlciBleHBlY3RlZCBieSB0aGUgZm91bmRhdGlvbi4gSW1wbGVtZW50IHRoaXNcbiAqIGFkYXB0ZXIgdG8gaW50ZWdyYXRlIHRoZSBUZXh0IEZpZWxkIGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENUZXh0RmllbGRBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFkZHMgYSBjbGFzcyB0byB0aGUgcm9vdCBFbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjbGFzcyBmcm9tIHRoZSByb290IEVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSByb290IGVsZW1lbnQgY29udGFpbnMgdGhlIGdpdmVuIGNsYXNzIG5hbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXIgb24gdGhlIHJvb3QgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXIgb24gdGhlIHJvb3QgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBuYXRpdmUgaW5wdXQgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogRGVyZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIG5hdGl2ZSBpbnB1dCBlbGVtZW50IGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIHZhbGlkYXRpb24gYXR0cmlidXRlIGNoYW5nZSBsaXN0ZW5lciBvbiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICogSGFuZGxlciBhY2NlcHRzIGxpc3Qgb2YgYXR0cmlidXRlIG5hbWVzLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFBcnJheTxzdHJpbmc+KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqIEByZXR1cm4geyFNdXRhdGlvbk9ic2VydmVyfVxuICAgKi9cbiAgcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEaXNjb25uZWN0cyBhIHZhbGlkYXRpb24gYXR0cmlidXRlIG9ic2VydmVyIG9uIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBvYnNlcnZlclxuICAgKi9cbiAgZGVyZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyKG9ic2VydmVyKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIG5hdGl2ZSB0ZXh0IGlucHV0IGVsZW1lbnQsIHdpdGggYVxuICAgKiBzaW1pbGFyIEFQSSBzaGFwZS4gVGhlIG9iamVjdCByZXR1cm5lZCBzaG91bGQgaW5jbHVkZSB0aGUgdmFsdWUsIGRpc2FibGVkXG4gICAqIGFuZCBiYWRJbnB1dCBwcm9wZXJ0aWVzLCBhcyB3ZWxsIGFzIHRoZSBjaGVja1ZhbGlkaXR5KCkgZnVuY3Rpb24uIFdlIG5ldmVyXG4gICAqIGFsdGVyIHRoZSB2YWx1ZSB3aXRoaW4gb3VyIGNvZGUsIGhvd2V2ZXIgd2UgZG8gdXBkYXRlIHRoZSBkaXNhYmxlZFxuICAgKiBwcm9wZXJ0eSwgc28gaWYgeW91IGNob29zZSB0byBkdWNrLXR5cGUgdGhlIHJldHVybiB2YWx1ZSBmb3IgdGhpcyBtZXRob2RcbiAgICogaW4geW91ciBpbXBsZW1lbnRhdGlvbiBpdCdzIGltcG9ydGFudCB0byBrZWVwIHRoaXMgaW4gbWluZC4gQWxzbyBub3RlIHRoYXRcbiAgICogdGhpcyBtZXRob2QgY2FuIHJldHVybiBudWxsLCB3aGljaCB0aGUgZm91bmRhdGlvbiB3aWxsIGhhbmRsZSBncmFjZWZ1bGx5LlxuICAgKiBAcmV0dXJuIHs/RWxlbWVudHw/TmF0aXZlSW5wdXRUeXBlfVxuICAgKi9cbiAgZ2V0TmF0aXZlSW5wdXQoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHRleHRmaWVsZCBpcyBmb2N1c2VkLlxuICAgKiBXZSBhY2hpZXZlIHRoaXMgdmlhIGBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLnJvb3RfYC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRm9jdXNlZCgpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgbGluZSByaXBwbGUuXG4gICAqL1xuICBhY3RpdmF0ZUxpbmVSaXBwbGUoKSB7fVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgbGluZSByaXBwbGUuXG4gICAqL1xuICBkZWFjdGl2YXRlTGluZVJpcHBsZSgpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRyYW5zZm9ybSBvcmlnaW4gb2YgdGhlIGxpbmUgcmlwcGxlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbm9ybWFsaXplZFhcbiAgICovXG4gIHNldExpbmVSaXBwbGVUcmFuc2Zvcm1PcmlnaW4obm9ybWFsaXplZFgpIHt9XG5cbiAgLyoqXG4gICAqIE9ubHkgaW1wbGVtZW50IGlmIGxhYmVsIGV4aXN0cy5cbiAgICogU2hha2VzIGxhYmVsIGlmIHNob3VsZFNoYWtlIGlzIHRydWUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkU2hha2VcbiAgICovXG4gIHNoYWtlTGFiZWwoc2hvdWxkU2hha2UpIHt9XG5cbiAgLyoqXG4gICAqIE9ubHkgaW1wbGVtZW50IGlmIGxhYmVsIGV4aXN0cy5cbiAgICogRmxvYXRzIHRoZSBsYWJlbCBhYm92ZSB0aGUgaW5wdXQgZWxlbWVudCBpZiBzaG91bGRGbG9hdCBpcyB0cnVlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZEZsb2F0XG4gICAqL1xuICBmbG9hdExhYmVsKHNob3VsZEZsb2F0KSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgbGFiZWwgZWxlbWVudCBleGlzdHMsIGZhbHNlIGlmIGl0IGRvZXNuJ3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNMYWJlbCgpIHt9XG5cbiAgLyoqXG4gICAqIE9ubHkgaW1wbGVtZW50IGlmIGxhYmVsIGV4aXN0cy5cbiAgICogUmV0dXJucyB3aWR0aCBvZiBsYWJlbCBpbiBwaXhlbHMuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldExhYmVsV2lkdGgoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgb3V0bGluZSBlbGVtZW50IGV4aXN0cywgZmFsc2UgaWYgaXQgZG9lc24ndC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc091dGxpbmUoKSB7fVxuXG4gIC8qKlxuICAgKiBPbmx5IGltcGxlbWVudCBpZiBvdXRsaW5lIGVsZW1lbnQgZXhpc3RzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGFiZWxXaWR0aFxuICAgKi9cbiAgbm90Y2hPdXRsaW5lKGxhYmVsV2lkdGgpIHt9XG5cbiAgLyoqXG4gICAqIE9ubHkgaW1wbGVtZW50IGlmIG91dGxpbmUgZWxlbWVudCBleGlzdHMuXG4gICAqIENsb3NlcyBub3RjaCBpbiBvdXRsaW5lIGVsZW1lbnQuXG4gICAqL1xuICBjbG9zZU91dGxpbmUoKSB7fVxufVxuXG5leHBvcnQge01EQ1RleHRGaWVsZEFkYXB0ZXIsIE5hdGl2ZUlucHV0VHlwZSwgRm91bmRhdGlvbk1hcFR5cGV9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQVJJQV9DT05UUk9MUzogJ2FyaWEtY29udHJvbHMnLFxuICBJTlBVVF9TRUxFQ1RPUjogJy5tZGMtdGV4dC1maWVsZF9faW5wdXQnLFxuICBMQUJFTF9TRUxFQ1RPUjogJy5tZGMtZmxvYXRpbmctbGFiZWwnLFxuICBJQ09OX1NFTEVDVE9SOiAnLm1kYy10ZXh0LWZpZWxkX19pY29uJyxcbiAgT1VUTElORV9TRUxFQ1RPUjogJy5tZGMtbm90Y2hlZC1vdXRsaW5lJyxcbiAgTElORV9SSVBQTEVfU0VMRUNUT1I6ICcubWRjLWxpbmUtcmlwcGxlJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgUk9PVDogJ21kYy10ZXh0LWZpZWxkJyxcbiAgRElTQUJMRUQ6ICdtZGMtdGV4dC1maWVsZC0tZGlzYWJsZWQnLFxuICBERU5TRTogJ21kYy10ZXh0LWZpZWxkLS1kZW5zZScsXG4gIEZPQ1VTRUQ6ICdtZGMtdGV4dC1maWVsZC0tZm9jdXNlZCcsXG4gIElOVkFMSUQ6ICdtZGMtdGV4dC1maWVsZC0taW52YWxpZCcsXG4gIFRFWFRBUkVBOiAnbWRjLXRleHQtZmllbGQtLXRleHRhcmVhJyxcbiAgT1VUTElORUQ6ICdtZGMtdGV4dC1maWVsZC0tb3V0bGluZWQnLFxuICBXSVRIX0xFQURJTkdfSUNPTjogJ21kYy10ZXh0LWZpZWxkLS13aXRoLWxlYWRpbmctaWNvbicsXG59O1xuXG4vKiogQGVudW0ge251bWJlcn0gKi9cbmNvbnN0IG51bWJlcnMgPSB7XG4gIExBQkVMX1NDQUxFOiAwLjc1LFxuICBERU5TRV9MQUJFTF9TQ0FMRTogMC45MjMsXG59O1xuXG4vLyB3aGl0ZWxpc3QgYmFzZWQgb2ZmIG9mIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0d1aWRlL0hUTUwvSFRNTDUvQ29uc3RyYWludF92YWxpZGF0aW9uXG4vLyB1bmRlciBzZWN0aW9uOiBgVmFsaWRhdGlvbi1yZWxhdGVkIGF0dHJpYnV0ZXNgXG5jb25zdCBWQUxJREFUSU9OX0FUVFJfV0hJVEVMSVNUID0gW1xuICAncGF0dGVybicsICdtaW4nLCAnbWF4JywgJ3JlcXVpcmVkJywgJ3N0ZXAnLCAnbWlubGVuZ3RoJywgJ21heGxlbmd0aCcsXG5dO1xuXG4vLyBMYWJlbCBzaG91bGQgYWx3YXlzIGZsb2F0IGZvciB0aGVzZSB0eXBlcyBhcyB0aGV5IHNob3cgc29tZSBVSSBldmVuIGlmIHZhbHVlIGlzIGVtcHR5LlxuY29uc3QgQUxXQVlTX0ZMT0FUX1RZUEVTID0gW1xuICAnY29sb3InLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcsICdtb250aCcsICdyYW5nZScsICd0aW1lJywgJ3dlZWsnLFxuXTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzLCBWQUxJREFUSU9OX0FUVFJfV0hJVEVMSVNULCBBTFdBWVNfRkxPQVRfVFlQRVN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiBmcm9tICcuL2hlbHBlci10ZXh0L2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uIGZyb20gJy4vaWNvbi9mb3VuZGF0aW9uJztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGV4dEZpZWxkQWRhcHRlciwgTmF0aXZlSW5wdXRUeXBlLCBGb3VuZGF0aW9uTWFwVHlwZX0gZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVycywgVkFMSURBVElPTl9BVFRSX1dISVRFTElTVCwgQUxXQVlTX0ZMT0FUX1RZUEVTfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1RleHRGaWVsZEFkYXB0ZXI+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGdldCBzaG91bGRTaGFrZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNWYWxpZCgpICYmICF0aGlzLmlzRm9jdXNlZF8gJiYgISF0aGlzLmdldFZhbHVlKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldCBzaG91bGRBbHdheXNGbG9hdF8oKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkudHlwZTtcbiAgICByZXR1cm4gQUxXQVlTX0ZMT0FUX1RZUEVTLmluZGV4T2YodHlwZSkgPj0gMDtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgc2hvdWxkRmxvYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hvdWxkQWx3YXlzRmxvYXRfIHx8IHRoaXMuaXNGb2N1c2VkXyB8fCAhIXRoaXMuZ2V0VmFsdWUoKSB8fCB0aGlzLmlzQmFkSW5wdXRfKCk7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDVGV4dEZpZWxkQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5cbiAgICogdHlwZXMuXG4gICAqIEByZXR1cm4geyFNRENUZXh0RmllbGRBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGV4dEZpZWxkQWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIGhhc0NsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyOiAoKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgZ2V0TmF0aXZlSW5wdXQ6ICgpID0+IHt9LFxuICAgICAgaXNGb2N1c2VkOiAoKSA9PiB7fSxcbiAgICAgIGFjdGl2YXRlTGluZVJpcHBsZTogKCkgPT4ge30sXG4gICAgICBkZWFjdGl2YXRlTGluZVJpcHBsZTogKCkgPT4ge30sXG4gICAgICBzZXRMaW5lUmlwcGxlVHJhbnNmb3JtT3JpZ2luOiAoKSA9PiB7fSxcbiAgICAgIHNoYWtlTGFiZWw6ICgpID0+IHt9LFxuICAgICAgZmxvYXRMYWJlbDogKCkgPT4ge30sXG4gICAgICBoYXNMYWJlbDogKCkgPT4ge30sXG4gICAgICBnZXRMYWJlbFdpZHRoOiAoKSA9PiB7fSxcbiAgICAgIGhhc091dGxpbmU6ICgpID0+IHt9LFxuICAgICAgbm90Y2hPdXRsaW5lOiAoKSA9PiB7fSxcbiAgICAgIGNsb3NlT3V0bGluZTogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDVGV4dEZpZWxkQWRhcHRlcn0gYWRhcHRlclxuICAgKiBAcGFyYW0geyFGb3VuZGF0aW9uTWFwVHlwZT19IGZvdW5kYXRpb25NYXAgTWFwIGZyb20gc3ViY29tcG9uZW50IG5hbWVzIHRvIHRoZWlyIHN1YmZvdW5kYXRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciwgZm91bmRhdGlvbk1hcCA9IC8qKiBAdHlwZSB7IUZvdW5kYXRpb25NYXBUeXBlfSAqLyAoe30pKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENUZXh0RmllbGRGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHR5cGUgeyFNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbnx1bmRlZmluZWR9ICovXG4gICAgdGhpcy5oZWxwZXJUZXh0XyA9IGZvdW5kYXRpb25NYXAuaGVscGVyVGV4dDtcbiAgICAvKiogQHR5cGUgeyFNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbnx1bmRlZmluZWR9ICovXG4gICAgdGhpcy5sZWFkaW5nSWNvbl8gPSBmb3VuZGF0aW9uTWFwLmxlYWRpbmdJY29uO1xuICAgIC8qKiBAdHlwZSB7IU1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9ufHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnRyYWlsaW5nSWNvbl8gPSBmb3VuZGF0aW9uTWFwLnRyYWlsaW5nSWNvbjtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzRm9jdXNlZF8gPSBmYWxzZTtcbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5yZWNlaXZlZFVzZXJJbnB1dF8gPSBmYWxzZTtcbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51c2VDdXN0b21WYWxpZGl0eUNoZWNraW5nXyA9IGZhbHNlO1xuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzVmFsaWRfID0gdHJ1ZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLnVzZU5hdGl2ZVZhbGlkYXRpb25fID0gdHJ1ZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oKTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuaW5wdXRGb2N1c0hhbmRsZXJfID0gKCkgPT4gdGhpcy5hY3RpdmF0ZUZvY3VzKCk7XG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbigpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5pbnB1dEJsdXJIYW5kbGVyXyA9ICgpID0+IHRoaXMuZGVhY3RpdmF0ZUZvY3VzKCk7XG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbigpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5pbnB1dElucHV0SGFuZGxlcl8gPSAoKSA9PiB0aGlzLmF1dG9Db21wbGV0ZUZvY3VzKCk7XG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5zZXRQb2ludGVyWE9mZnNldF8gPSAoZXZ0KSA9PiB0aGlzLnNldFRyYW5zZm9ybU9yaWdpbihldnQpO1xuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMudGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlVGV4dEZpZWxkSW50ZXJhY3Rpb24oKTtcbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFBcnJheSk6IHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyXyA9IChhdHRyaWJ1dGVzTGlzdCkgPT4gdGhpcy5oYW5kbGVWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlKGF0dHJpYnV0ZXNMaXN0KTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IU11dGF0aW9uT2JzZXJ2ZXJ9ICovXG4gICAgdGhpcy52YWxpZGF0aW9uT2JzZXJ2ZXJfO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc0ZvY3VzZWQoKSkge1xuICAgICAgdGhpcy5pbnB1dEZvY3VzSGFuZGxlcl8oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWRhcHRlcl8uaGFzTGFiZWwoKSAmJiB0aGlzLnNob3VsZEZsb2F0KSB7XG4gICAgICB0aGlzLm5vdGNoT3V0bGluZSh0cnVlKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZmxvYXRMYWJlbCh0cnVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5pbnB1dEZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuaW5wdXRCbHVySGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcignaW5wdXQnLCB0aGlzLmlucHV0SW5wdXRIYW5kbGVyXyk7XG4gICAgWydtb3VzZWRvd24nLCAndG91Y2hzdGFydCddLmZvckVhY2goKGV2dFR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCB0aGlzLnNldFBvaW50ZXJYT2Zmc2V0Xyk7XG4gICAgfSk7XG4gICAgWydjbGljaycsICdrZXlkb3duJ10uZm9yRWFjaCgoZXZ0VHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCB0aGlzLnRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMudmFsaWRhdGlvbk9ic2VydmVyXyA9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcih0aGlzLnZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyXyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuaW5wdXRGb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuaW5wdXRCbHVySGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKCdpbnB1dCcsIHRoaXMuaW5wdXRJbnB1dEhhbmRsZXJfKTtcbiAgICBbJ21vdXNlZG93bicsICd0b3VjaHN0YXJ0J10uZm9yRWFjaCgoZXZ0VHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgdGhpcy5zZXRQb2ludGVyWE9mZnNldF8pO1xuICAgIH0pO1xuICAgIFsnY2xpY2snLCAna2V5ZG93biddLmZvckVhY2goKGV2dFR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCB0aGlzLnRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyKHRoaXMudmFsaWRhdGlvbk9ic2VydmVyXyk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB1c2VyIGludGVyYWN0aW9ucyB3aXRoIHRoZSBUZXh0IEZpZWxkLlxuICAgKi9cbiAgaGFuZGxlVGV4dEZpZWxkSW50ZXJhY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uZ2V0TmF0aXZlSW5wdXQoKS5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlY2VpdmVkVXNlcklucHV0XyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB2YWxpZGF0aW9uIGF0dHJpYnV0ZSBjaGFuZ2VzXG4gICAqIEBwYXJhbSB7IUFycmF5PHN0cmluZz59IGF0dHJpYnV0ZXNMaXN0XG4gICAqL1xuICBoYW5kbGVWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlKGF0dHJpYnV0ZXNMaXN0KSB7XG4gICAgYXR0cmlidXRlc0xpc3Quc29tZSgoYXR0cmlidXRlTmFtZSkgPT4ge1xuICAgICAgaWYgKFZBTElEQVRJT05fQVRUUl9XSElURUxJU1QuaW5kZXhPZihhdHRyaWJ1dGVOYW1lKSA+IC0xKSB7XG4gICAgICAgIHRoaXMuc3R5bGVWYWxpZGl0eV8odHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zL2Nsb3NlcyB0aGUgbm90Y2hlZCBvdXRsaW5lLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wZW5Ob3RjaFxuICAgKi9cbiAgbm90Y2hPdXRsaW5lKG9wZW5Ob3RjaCkge1xuICAgIGlmICghdGhpcy5hZGFwdGVyXy5oYXNPdXRsaW5lKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob3Blbk5vdGNoKSB7XG4gICAgICBjb25zdCBpc0RlbnNlID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkRFTlNFKTtcbiAgICAgIGNvbnN0IGxhYmVsU2NhbGUgPSBpc0RlbnNlID8gbnVtYmVycy5ERU5TRV9MQUJFTF9TQ0FMRSA6IG51bWJlcnMuTEFCRUxfU0NBTEU7XG4gICAgICBjb25zdCBsYWJlbFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRMYWJlbFdpZHRoKCkgKiBsYWJlbFNjYWxlO1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RjaE91dGxpbmUobGFiZWxXaWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uY2xvc2VPdXRsaW5lKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgdGV4dCBmaWVsZCBmb2N1cyBzdGF0ZS5cbiAgICovXG4gIGFjdGl2YXRlRm9jdXMoKSB7XG4gICAgdGhpcy5pc0ZvY3VzZWRfID0gdHJ1ZTtcbiAgICB0aGlzLnN0eWxlRm9jdXNlZF8odGhpcy5pc0ZvY3VzZWRfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFjdGl2YXRlTGluZVJpcHBsZSgpO1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0xhYmVsKCkpIHtcbiAgICAgIHRoaXMubm90Y2hPdXRsaW5lKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5mbG9hdExhYmVsKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zaGFrZUxhYmVsKHRoaXMuc2hvdWxkU2hha2UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5oZWxwZXJUZXh0Xykge1xuICAgICAgdGhpcy5oZWxwZXJUZXh0Xy5zaG93VG9TY3JlZW5SZWFkZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgbGluZSByaXBwbGUncyB0cmFuc2Zvcm0gb3JpZ2luLCBzbyB0aGF0IHRoZSBsaW5lIHJpcHBsZSBhY3RpdmF0ZVxuICAgKiBhbmltYXRpb24gd2lsbCBhbmltYXRlIG91dCBmcm9tIHRoZSB1c2VyJ3MgY2xpY2sgbG9jYXRpb24uXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIHNldFRyYW5zZm9ybU9yaWdpbihldnQpIHtcbiAgICBsZXQgdGFyZ2V0RXZlbnQ7XG4gICAgaWYgKGV2dC50b3VjaGVzKSB7XG4gICAgICB0YXJnZXRFdmVudCA9IGV2dC50b3VjaGVzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRFdmVudCA9IGV2dDtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0Q2xpZW50UmVjdCA9IHRhcmdldEV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBub3JtYWxpemVkWCA9IHRhcmdldEV2ZW50LmNsaWVudFggLSB0YXJnZXRDbGllbnRSZWN0LmxlZnQ7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRMaW5lUmlwcGxlVHJhbnNmb3JtT3JpZ2luKG5vcm1hbGl6ZWRYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIFRleHQgRmllbGQncyBmb2N1cyBzdGF0ZSBpbiBjYXNlcyB3aGVuIHRoZSBpbnB1dCB2YWx1ZVxuICAgKiBjaGFuZ2VzIHdpdGhvdXQgdXNlciBpbnB1dCAoZS5nLiBwcm9ncmFtYXRpY2FsbHkpLlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlRm9jdXMoKSB7XG4gICAgaWYgKCF0aGlzLnJlY2VpdmVkVXNlcklucHV0Xykge1xuICAgICAgdGhpcy5hY3RpdmF0ZUZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBUZXh0IEZpZWxkJ3MgZm9jdXMgc3RhdGUuXG4gICAqL1xuICBkZWFjdGl2YXRlRm9jdXMoKSB7XG4gICAgdGhpcy5pc0ZvY3VzZWRfID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5kZWFjdGl2YXRlTGluZVJpcHBsZSgpO1xuICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLmlzVmFsaWQoKTtcbiAgICB0aGlzLnN0eWxlVmFsaWRpdHlfKGlzVmFsaWQpO1xuICAgIHRoaXMuc3R5bGVGb2N1c2VkXyh0aGlzLmlzRm9jdXNlZF8pO1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0xhYmVsKCkpIHtcbiAgICAgIHRoaXMubm90Y2hPdXRsaW5lKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5mbG9hdExhYmVsKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zaGFrZUxhYmVsKHRoaXMuc2hvdWxkU2hha2UpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc2hvdWxkRmxvYXQpIHtcbiAgICAgIHRoaXMucmVjZWl2ZWRVc2VySW5wdXRfID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBFbGVtZW50LlxuICAgKi9cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgb24gdGhlIGlucHV0IEVsZW1lbnQuXG4gICAqL1xuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIC8vIFByZXZlbnQgU2FmYXJpIGZyb20gbW92aW5nIHRoZSBjYXJldCB0byB0aGUgZW5kIG9mIHRoZSBpbnB1dCB3aGVuIHRoZSB2YWx1ZSBoYXMgbm90IGNoYW5nZWQuXG4gICAgaWYgKHRoaXMuZ2V0VmFsdWUoKSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMuaXNWYWxpZCgpO1xuICAgIHRoaXMuc3R5bGVWYWxpZGl0eV8oaXNWYWxpZCk7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzTGFiZWwoKSkge1xuICAgICAgdGhpcy5ub3RjaE91dGxpbmUodGhpcy5zaG91bGRGbG9hdCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmZsb2F0TGFiZWwodGhpcy5zaG91bGRGbG9hdCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNoYWtlTGFiZWwodGhpcy5zaG91bGRTaGFrZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IElmIGEgY3VzdG9tIHZhbGlkaXR5IGlzIHNldCwgcmV0dXJucyB0aGF0IHZhbHVlLlxuICAgKiAgICAgT3RoZXJ3aXNlLCByZXR1cm5zIHRoZSByZXN1bHQgb2YgbmF0aXZlIHZhbGlkaXR5IGNoZWNrcy5cbiAgICovXG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlTmF0aXZlVmFsaWRhdGlvbl9cbiAgICAgID8gdGhpcy5pc05hdGl2ZUlucHV0VmFsaWRfKCkgOiB0aGlzLmlzVmFsaWRfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWYWxpZCBTZXRzIHRoZSB2YWxpZGl0eSBzdGF0ZSBvZiB0aGUgVGV4dCBGaWVsZC5cbiAgICovXG4gIHNldFZhbGlkKGlzVmFsaWQpIHtcbiAgICB0aGlzLmlzVmFsaWRfID0gaXNWYWxpZDtcbiAgICB0aGlzLnN0eWxlVmFsaWRpdHlfKGlzVmFsaWQpO1xuXG4gICAgY29uc3Qgc2hvdWxkU2hha2UgPSAhaXNWYWxpZCAmJiAhdGhpcy5pc0ZvY3VzZWRfO1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0xhYmVsKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2hha2VMYWJlbChzaG91bGRTaGFrZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIHVzZSBvZiBuYXRpdmUgdmFsaWRhdGlvbi4gVXNlIHRoaXMgZm9yIGN1c3RvbSB2YWxpZGF0aW9uLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZU5hdGl2ZVZhbGlkYXRpb24gU2V0IHRoaXMgdG8gZmFsc2UgdG8gaWdub3JlIG5hdGl2ZSBpbnB1dCB2YWxpZGF0aW9uLlxuICAgKi9cbiAgc2V0VXNlTmF0aXZlVmFsaWRhdGlvbih1c2VOYXRpdmVWYWxpZGF0aW9uKSB7XG4gICAgdGhpcy51c2VOYXRpdmVWYWxpZGF0aW9uXyA9IHVzZU5hdGl2ZVZhbGlkYXRpb247XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgVGV4dCBGaWVsZCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkuZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZCBTZXRzIHRoZSB0ZXh0LWZpZWxkIGRpc2FibGVkIG9yIGVuYWJsZWQuXG4gICAqL1xuICBzZXREaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICB0aGlzLnN0eWxlRGlzYWJsZWRfKGRpc2FibGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCBTZXRzIHRoZSBjb250ZW50IG9mIHRoZSBoZWxwZXIgdGV4dC5cbiAgICovXG4gIHNldEhlbHBlclRleHRDb250ZW50KGNvbnRlbnQpIHtcbiAgICBpZiAodGhpcy5oZWxwZXJUZXh0Xykge1xuICAgICAgdGhpcy5oZWxwZXJUZXh0Xy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBhcmlhIGxhYmVsIG9mIHRoZSBsZWFkaW5nIGljb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFxuICAgKi9cbiAgc2V0TGVhZGluZ0ljb25BcmlhTGFiZWwobGFiZWwpIHtcbiAgICBpZiAodGhpcy5sZWFkaW5nSWNvbl8pIHtcbiAgICAgIHRoaXMubGVhZGluZ0ljb25fLnNldEFyaWFMYWJlbChsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgbGVhZGluZyBpY29uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICAgKi9cbiAgc2V0TGVhZGluZ0ljb25Db250ZW50KGNvbnRlbnQpIHtcbiAgICBpZiAodGhpcy5sZWFkaW5nSWNvbl8pIHtcbiAgICAgIHRoaXMubGVhZGluZ0ljb25fLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFyaWEgbGFiZWwgb2YgdGhlIHRyYWlsaW5nIGljb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFxuICAgKi9cbiAgc2V0VHJhaWxpbmdJY29uQXJpYUxhYmVsKGxhYmVsKSB7XG4gICAgaWYgKHRoaXMudHJhaWxpbmdJY29uXykge1xuICAgICAgdGhpcy50cmFpbGluZ0ljb25fLnNldEFyaWFMYWJlbChsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgdHJhaWxpbmcgaWNvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAgICovXG4gIHNldFRyYWlsaW5nSWNvbkNvbnRlbnQoY29udGVudCkge1xuICAgIGlmICh0aGlzLnRyYWlsaW5nSWNvbl8pIHtcbiAgICAgIHRoaXMudHJhaWxpbmdJY29uXy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBUZXh0IEZpZWxkIGlucHV0IGZhaWxzIGluIGNvbnZlcnRpbmcgdGhlXG4gICAqICAgICB1c2VyLXN1cHBsaWVkIHZhbHVlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNCYWRJbnB1dF8oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkudmFsaWRpdHkuYmFkSW5wdXQ7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIHJlc3VsdCBvZiBuYXRpdmUgdmFsaWRpdHkgY2hlY2tpbmdcbiAgICogICAgIChWYWxpZGl0eVN0YXRlLnZhbGlkKS5cbiAgICovXG4gIGlzTmF0aXZlSW5wdXRWYWxpZF8oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkudmFsaWRpdHkudmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogU3R5bGVzIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIHZhbGlkaXR5IHN0YXRlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmFsaWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0eWxlVmFsaWRpdHlfKGlzVmFsaWQpIHtcbiAgICBjb25zdCB7SU5WQUxJRH0gPSBNRENUZXh0RmllbGRGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoSU5WQUxJRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoSU5WQUxJRCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmhlbHBlclRleHRfKSB7XG4gICAgICB0aGlzLmhlbHBlclRleHRfLnNldFZhbGlkaXR5KGlzVmFsaWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdHlsZXMgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgZm9jdXNlZCBzdGF0ZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc0ZvY3VzZWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0eWxlRm9jdXNlZF8oaXNGb2N1c2VkKSB7XG4gICAgY29uc3Qge0ZPQ1VTRUR9ID0gTURDVGV4dEZpZWxkRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGlmIChpc0ZvY3VzZWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRk9DVVNFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRk9DVVNFRCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0eWxlcyB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBkaXNhYmxlZCBzdGF0ZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc0Rpc2FibGVkXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdHlsZURpc2FibGVkXyhpc0Rpc2FibGVkKSB7XG4gICAgY29uc3Qge0RJU0FCTEVELCBJTlZBTElEfSA9IE1EQ1RleHRGaWVsZEZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhESVNBQkxFRCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKElOVkFMSUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKERJU0FCTEVEKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sZWFkaW5nSWNvbl8pIHtcbiAgICAgIHRoaXMubGVhZGluZ0ljb25fLnNldERpc2FibGVkKGlzRGlzYWJsZWQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRyYWlsaW5nSWNvbl8pIHtcbiAgICAgIHRoaXMudHJhaWxpbmdJY29uXy5zZXREaXNhYmxlZChpc0Rpc2FibGVkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUVsZW1lbnR8IU5hdGl2ZUlucHV0VHlwZX0gVGhlIG5hdGl2ZSB0ZXh0IGlucHV0IGZyb20gdGhlXG4gICAqIGhvc3QgZW52aXJvbm1lbnQsIG9yIGEgZHVtbXkgaWYgbm9uZSBleGlzdHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXROYXRpdmVJbnB1dF8oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uZ2V0TmF0aXZlSW5wdXQoKSB8fFxuICAgIC8qKiBAdHlwZSB7IU5hdGl2ZUlucHV0VHlwZX0gKi8gKHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIHZhbGlkaXR5OiB7XG4gICAgICAgIGJhZElucHV0OiBmYWxzZSxcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEZvdW5kYXRpb247XG4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCI8IS0tIDx0ZW1wbGF0ZT5cbiAgPHAgcmVmPVwiaGVscHRleHRFbFwiIDpjbGFzcz1cImNsYXNzZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c2xvdCAvPjwvcD5cbjwvdGVtcGxhdGU+IC0tPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC90ZXh0ZmllbGQvaGVscGVyLXRleHQvZm91bmRhdGlvbidcbmltcG9ydCAqIGFzIGNsYXNzbmFtZXNfIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmxldCBjbGFzc25hbWVzID0gY2xhc3NuYW1lc19cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAndGV4dGZpZWxkLWhlbHBlci10ZXh0JyxcblxuICAvLyBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIHBlcnNpc3RlbnQ6IEJvb2xlYW4sXG4gICAgdmFsaWRhdGlvbjogQm9vbGVhblxuICB9LFxuICBkYXRhKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLiRzbG90cy5kZWZhdWx0WzBdXG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgJ21kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0JzogdHJ1ZSxcbiAgICAgICAgJ21kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0LS1wZXJzaXN0ZW50Jzogbm9kZS5kYXRhLmF0dHJzLnBlcnNpc3RlbnQsXG4gICAgICAgICdtZGMtdGV4dC1maWVsZC1oZWxwZXItdGV4dC0tdmFsaWRhdGlvbi1tc2cnOiBub2RlLmRhdGEuYXR0cnMudmFsaWRhdGlvblxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIoaCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLiRzbG90cy5kZWZhdWx0WzBdXG4gICAgbm9kZS5kYXRhLmNsYXNzID0gY2xhc3NuYW1lcyh0aGlzLmNsYXNzZXMpXG4gICAgcmV0dXJuIG5vZGVcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBwZXJzaXN0ZW50KCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldFBlcnNpc3RlbnQodGhpcy5wZXJzaXN0ZW50KVxuICAgIH0sXG4gICAgdmFsaWRhdGlvbigpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRWYWxpZGF0aW9uKHRoaXMudmFsaWRhdGlvbilcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKSxcbiAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZGVsZXRlKHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lKSxcblxuICAgICAgaGFzQ2xhc3M6IGNsYXNzTmFtZSA9PiBCb29sZWFuKHRoaXMuY2xhc3Nlc1tjbGFzc05hbWVdKSxcblxuICAgICAgc2V0QXR0cjogKGF0dHIsIHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuJGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgICAgIH0sXG4gICAgICByZW1vdmVBdHRyOiBhdHRyID0+IHtcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIpXG4gICAgICB9LFxuICAgICAgc2V0Q29udGVudDogKC8qY29udGVudCovKSA9PiB7XG4gICAgICAgIC8vIGhlbHAgdGV4dCBnZXQncyB1cGRhdGVkIGZyb20ge3toZWxwdGV4dH19XG4gICAgICAgIC8vIGNmLiB0aGlzLiRlbC50ZXh0Q29udGVudCA9IGNvbnRlbnRcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuICB9LFxuXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9XG59XG48L3NjcmlwdD5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudChjb21waWxlZFRlbXBsYXRlLCBpbmplY3RTdHlsZSwgZGVmYXVsdEV4cG9ydCwgc2NvcGVJZCwgaXNGdW5jdGlvbmFsVGVtcGxhdGUsIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi8sIGlzU2hhZG93TW9kZSwgY3JlYXRlSW5qZWN0b3IsIGNyZWF0ZUluamVjdG9yU1NSLCBjcmVhdGVJbmplY3RvclNoYWRvdykge1xuICAgIGlmICh0eXBlb2YgaXNTaGFkb3dNb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNyZWF0ZUluamVjdG9yU1NSID0gY3JlYXRlSW5qZWN0b3I7XG4gICAgICAgIGNyZWF0ZUluamVjdG9yID0gaXNTaGFkb3dNb2RlO1xuICAgICAgICBpc1NoYWRvd01vZGUgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICAgIGNvbnN0IG9wdGlvbnMgPSB0eXBlb2YgZGVmYXVsdEV4cG9ydCA9PT0gJ2Z1bmN0aW9uJyA/IGRlZmF1bHRFeHBvcnQub3B0aW9ucyA6IGRlZmF1bHRFeHBvcnQ7XG4gICAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICAgIGlmIChjb21waWxlZFRlbXBsYXRlICYmIGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyKSB7XG4gICAgICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXI7XG4gICAgICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnM7XG4gICAgICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICAgICAgICBpZiAoaXNGdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gc2NvcGVkSWRcbiAgICBpZiAoc2NvcGVJZCkge1xuICAgICAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZDtcbiAgICB9XG4gICAgbGV0IGhvb2s7XG4gICAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgLy8gc2VydmVyIGJ1aWxkXG4gICAgICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgICAgICAgY29udGV4dCA9XG4gICAgICAgICAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAgICAgICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCk7IC8vIGZ1bmN0aW9uYWxcbiAgICAgICAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgICAgICAgIGlmIChpbmplY3RTdHlsZSkge1xuICAgICAgICAgICAgICAgIGluamVjdFN0eWxlLmNhbGwodGhpcywgY3JlYXRlSW5qZWN0b3JTU1IoY29udGV4dCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcmVuY2VcbiAgICAgICAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgICAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgICAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2s7XG4gICAgfVxuICAgIGVsc2UgaWYgKGluamVjdFN0eWxlKSB7XG4gICAgICAgIGhvb2sgPSBpc1NoYWRvd01vZGVcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGluamVjdFN0eWxlLmNhbGwodGhpcywgY3JlYXRlSW5qZWN0b3JTaGFkb3codGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3Rvcihjb250ZXh0KSk7XG4gICAgICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoaG9vaykge1xuICAgICAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAgICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXI7XG4gICAgICAgICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbihoLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0RXhwb3J0O1xufVxuIiwiPHNjcmlwdD5cbmltcG9ydCBNRENUZXh0ZmllbGRJY29uRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvdGV4dGZpZWxkL2ljb24vZm91bmRhdGlvbi5qcydcbmltcG9ydCB7IGVtaXRDdXN0b21FdmVudCB9IGZyb20gJy4uL2Jhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3RleHRmaWVsZC1pY29uJyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICBkaXNhYmxlZDogQm9vbGVhblxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ1RleHRmaWVsZEljb25Gb3VuZGF0aW9uKFxuICAgICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGdldEF0dHI6IGF0dHIgPT4gdGhpcy4kZWwuZ2V0QXR0cmlidXRlKGF0dHIpLFxuICAgICAgICBzZXRBdHRyOiAoYXR0ciwgdmFsdWUpID0+IHRoaXMuJGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSksXG4gICAgICAgIHJlbW92ZUF0dHI6IGF0dHIgPT4gdGhpcy4kZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIpLFxuICAgICAgICBzZXRDb250ZW50OiBjb250ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLiRlbC50ZXh0Q29udGVudCA9IGNvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciksXG4gICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgIHRoaXMuJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciksXG4gICAgICAgIG5vdGlmeUljb25BY3Rpb246ICgpID0+IHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycpXG4gICAgICAgICAgZW1pdEN1c3RvbUV2ZW50KFxuICAgICAgICAgICAgdGhpcy4kZWwsXG4gICAgICAgICAgICBNRENUZXh0ZmllbGRJY29uRm91bmRhdGlvbi5zdHJpbmdzLklDT05fRVZFTlQsXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIHRydWUgLyogc2hvdWxkQnViYmxlICAqL1xuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApXG5cbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gIH0sXG5cbiAgcmVuZGVyKGgsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gY29udGV4dC5jaGlsZHJlblswXVxuICAgIG5vZGUuZGF0YS5jbGFzcyA9ICdtZGMtdGV4dC1maWVsZF9faWNvbidcbiAgICByZXR1cm4gbm9kZVxuICB9LFxuXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9XG59XG48L3NjcmlwdD5cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBGXG4gKi9cbmNsYXNzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENDb21wb25lbnR9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7Rj19IGZvdW5kYXRpb25cbiAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb290LCBmb3VuZGF0aW9uID0gdW5kZWZpbmVkLCAuLi5hcmdzKSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuICAgIHRoaXMucm9vdF8gPSByb290O1xuICAgIHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcbiAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgLy8gdGhpcy5yb290XyBpcyBkZWZpbmVkIGFuZCBjYW4gYmUgdXNlZCB3aXRoaW4gdGhlIGZvdW5kYXRpb24gY2xhc3MuXG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFGfSAqL1xuICAgIHRoaXMuZm91bmRhdGlvbl8gPSBmb3VuZGF0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmdldERlZmF1bHRGb3VuZGF0aW9uKCkgOiBmb3VuZGF0aW9uO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gIH1cblxuICBpbml0aWFsaXplKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshRn0gZm91bmRhdGlvblxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgLy8gY29tcG9uZW50LlxuICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogbGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgbGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gcmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiB1bmxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLFxuICAgKiB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFPYmplY3R9IGV2dERhdGFcbiAgICogQHBhcmFtIHtib29sZWFuPX0gc2hvdWxkQnViYmxlXG4gICAqL1xuICBlbWl0KGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gICAgbGV0IGV2dDtcbiAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5yb290Xy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBSaXBwbGUuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmdcbiAqIC0gY2xhc3Nlc1xuICogLSBkb21cbiAqIC0gQ1NTIHZhcmlhYmxlc1xuICogLSBwb3NpdGlvblxuICogLSBkaW1lbnNpb25zXG4gKiAtIHNjcm9sbCBwb3NpdGlvblxuICogLSBldmVudCBoYW5kbGVyc1xuICogLSB1bmJvdW5kZWQsIGFjdGl2ZSBhbmQgZGlzYWJsZWQgc3RhdGVzXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENSaXBwbGVBZGFwdGVyIHtcbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1VuYm91bmRlZCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZUFjdGl2ZSgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZURpc2FibGVkKCkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0geyFFdmVudFRhcmdldH0gdGFyZ2V0ICovXG4gIGNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFyTmFtZVxuICAgKiBAcGFyYW0gez9udW1iZXJ8c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgdXBkYXRlQ3NzVmFyaWFibGUodmFyTmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqIEByZXR1cm4geyFDbGllbnRSZWN0fSAqL1xuICBjb21wdXRlQm91bmRpbmdSZWN0KCkge31cblxuICAvKiogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gKi9cbiAgZ2V0V2luZG93UGFnZU9mZnNldCgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxuICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbn07XG5cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG4gIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxufTtcblxuY29uc3QgbnVtYmVycyA9IHtcbiAgUEFERElORzogMTAsXG4gIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLXRyYW5zbGF0ZS1kdXJhdGlvbiAoaS5lLiBhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLWZhZGUtb3V0LWR1cmF0aW9uIChpLmUuIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIFRBUF9ERUxBWV9NUzogMzAwLCAvLyBEZWxheSBiZXR3ZWVuIHRvdWNoIGFuZCBzaW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXNcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gYXBwbHlQYXNzaXZlIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c1Bhc3NpdmVfO1xuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAvLyBEZXRlY3QgdmVyc2lvbnMgb2YgRWRnZSB3aXRoIGJ1Z2d5IHZhcigpIHN1cHBvcnRcbiAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMTQ5NTQ0OC9cbiAgY29uc3QgZG9jdW1lbnQgPSB3aW5kb3dPYmouZG9jdW1lbnQ7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgLy8gVGhlIGJ1ZyBleGlzdHMgaWYgOjpiZWZvcmUgc3R5bGUgZW5kcyB1cCBwcm9wYWdhdGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gIC8vIEFkZGl0aW9uYWxseSwgZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIG51bGwgaW4gaWZyYW1lcyB3aXRoIGRpc3BsYXk6IFwibm9uZVwiIGluIEZpcmVmb3gsXG4gIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvd09iai5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBjb25zdCBoYXNQc2V1ZG9WYXJCdWcgPSBjb21wdXRlZFN0eWxlICE9PSBudWxsICYmIGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wU3R5bGUgPT09ICdzb2xpZCc7XG4gIG5vZGUucmVtb3ZlKCk7XG4gIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBsZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuXG4gIGNvbnN0IHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gd2luZG93T2JqLkNTUyAmJiB0eXBlb2Ygd2luZG93T2JqLkNTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTQ2NjlcbiAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgY29uc3Qgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKFxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKVxuICApO1xuXG4gIGlmIChleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cykge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgfSBlbHNlIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG59XG5cbi8vXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZCBpZiBzbywgdXNlIHRoZW0uXG4gKiBAcGFyYW0geyFXaW5kb3c9fSBnbG9iYWxPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnwhRXZlbnRMaXN0ZW5lck9wdGlvbnN9XG4gKi9cbmZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmogPSB3aW5kb3csIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwge2dldCBwYXNzaXZlKCkge1xuICAgICAgICBpc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBpc1N1cHBvcnRlZDtcbiAgICAgIH19KTtcbiAgICB9IGNhdGNoIChlKSB7IH1cblxuICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZDtcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfXG4gICAgPyAvKiogQHR5cGUgeyFFdmVudExpc3RlbmVyT3B0aW9uc30gKi8gKHtwYXNzaXZlOiB0cnVlfSlcbiAgICA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gSFRNTEVsZW1lbnRQcm90b3R5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gIC8qKlxuICAgKiBPcmRlciBpcyBpbXBvcnRhbnQgYmVjYXVzZSB3ZSByZXR1cm4gdGhlIGZpcnN0IGV4aXN0aW5nIG1ldGhvZCB3ZSBmaW5kLlxuICAgKiBEbyBub3QgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgaXRlbXMgaW4gdGhlIGJlbG93IGFycmF5LlxuICAgKi9cbiAgY29uc3QgbWF0Y2hlc01ldGhvZHMgPSBbJ21hdGNoZXMnLCAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJywgJ21zTWF0Y2hlc1NlbGVjdG9yJ107XG4gIGxldCBtZXRob2QgPSAnbWF0Y2hlcyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlc01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0aG9kID0gbWF0Y2hlc01ldGhvZHNbaV07XG4gICAgaWYgKG1hdGNoZXNNZXRob2QgaW4gSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgICAgIG1ldGhvZCA9IG1hdGNoZXNNZXRob2Q7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0aG9kO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUV2ZW50fSBldlxuICogQHBhcmFtIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSBwYWdlT2Zmc2V0XG4gKiBAcGFyYW0geyFDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXYsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgY29uc3Qge3gsIHl9ID0gcGFnZU9mZnNldDtcbiAgY29uc3QgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgY29uc3QgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuXG4gIGxldCBub3JtYWxpemVkWDtcbiAgbGV0IG5vcm1hbGl6ZWRZO1xuICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gIGlmIChldi50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICBldiA9IC8qKiBAdHlwZSB7IVRvdWNoRXZlbnR9ICovIChldik7XG4gICAgbm9ybWFsaXplZFggPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9IGVsc2Uge1xuICAgIGV2ID0gLyoqIEB0eXBlIHshTW91c2VFdmVudH0gKi8gKGV2KTtcbiAgICBub3JtYWxpemVkWCA9IGV2LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYucGFnZVkgLSBkb2N1bWVudFk7XG4gIH1cblxuICByZXR1cm4ge3g6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWX07XG59XG5cbmV4cG9ydCB7c3VwcG9ydHNDc3NWYXJpYWJsZXMsIGFwcGx5UGFzc2l2ZSwgZ2V0TWF0Y2hlc1Byb3BlcnR5LCBnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgaXNBY3RpdmF0ZWQ6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBhY3RpdmF0aW9uRXZlbnQ6ICghRXZlbnR8dW5kZWZpbmVkKSxcbiAqICAgaXNQcm9ncmFtbWF0aWM6IChib29sZWFufHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBBY3RpdmF0aW9uU3RhdGVUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGRlYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZm9jdXM6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgYmx1cjogKHN0cmluZ3x1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJJbmZvVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50KSxcbiAqICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50PSksXG4gKiAgIGZvY3VzOiBmdW5jdGlvbigpLFxuICogICBibHVyOiBmdW5jdGlvbigpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJzVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICB4OiBudW1iZXIsXG4gKiAgIHk6IG51bWJlclxuICogfX1cbiAqL1xubGV0IFBvaW50VHlwZTtcblxuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbmNvbnN0IEFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nLCAnbW91c2Vkb3duJywgJ2tleWRvd24nXTtcblxuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG5jb25zdCBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnXTtcblxuLy8gVHJhY2tzIGFjdGl2YXRpb25zIHRoYXQgaGF2ZSBvY2N1cnJlZCBvbiB0aGUgY3VycmVudCBmcmFtZSwgdG8gYXZvaWQgc2ltdWx0YW5lb3VzIG5lc3RlZCBhY3RpdmF0aW9uc1xuLyoqIEB0eXBlIHshQXJyYXk8IUV2ZW50VGFyZ2V0Pn0gKi9cbmxldCBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1JpcHBsZUFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENSaXBwbGVGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gbnVtYmVycztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IC8qIGJvb2xlYW4gLSBjYWNoZWQgKi8ge30sXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICgvKiB0YXJnZXQ6ICFFdmVudFRhcmdldCAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAoLyogdmFyTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IC8qIENsaWVudFJlY3QgKi8ge30sXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAvKiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9ICovIHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUgeyFDbGllbnRSZWN0fSAqL1xuICAgIHRoaXMuZnJhbWVfID0gLyoqIEB0eXBlIHshQ2xpZW50UmVjdH0gKi8gKHt3aWR0aDogMCwgaGVpZ2h0OiAwfSk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubWF4UmFkaXVzXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCl9ICovXG4gICAgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gKGUpID0+IHRoaXMuYWN0aXZhdGVfKGUpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9ICgpID0+IHRoaXMuZGVhY3RpdmF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5mb2N1c0hhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVGb2N1cygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmJsdXJIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlQmx1cigpO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyXyA9ICgpID0+IHRoaXMubGF5b3V0KCk7XG5cbiAgICAvKiogQHByaXZhdGUge3tsZWZ0OiBudW1iZXIsIHRvcDpudW1iZXJ9fSAqL1xuICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdTY2FsZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUV2ZW50fHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdXBwb3J0c1ByZXNzUmlwcGxlXygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9XG4gICAqL1xuICBkZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcblxuICAgIHRoaXMucmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpO1xuXG4gICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhST09UKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlcyBuZWVkIGxheW91dCBsb2dpYyBhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIHNldCBjb29yZGluYXRlcyBmb3IgYm90aCBzaGFkZSBhbmQgcmlwcGxlXG4gICAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCkpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2YXRpb25UaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoUk9PVCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudH0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSkge1xuICAgIGlmIChlLnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpIHtcbiAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcmVtb3ZlQ3NzVmFyc18oKSB7XG4gICAgY29uc3Qge3N0cmluZ3N9ID0gTURDUmlwcGxlRm91bmRhdGlvbjtcbiAgICBPYmplY3Qua2V5cyhzdHJpbmdzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBpZiAoay5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShzdHJpbmdzW2tdLCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFjdGl2YXRlXyhlKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgIGNvbnN0IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgY29uc3QgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBlICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZS50eXBlO1xuICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZSA9PT0gdW5kZWZpbmVkO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IGUgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICBlLnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3BvaW50ZXJkb3duJ1xuICAgICk7XG5cbiAgICBjb25zdCBoYXNBY3RpdmF0ZWRDaGlsZCA9IGUgIT09IHVuZGVmaW5lZCAmJiBhY3RpdmF0ZWRUYXJnZXRzLmxlbmd0aCA+IDAgJiYgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKFxuICAgICAgKHRhcmdldCkgPT4gdGhpcy5hZGFwdGVyXy5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkpO1xuICAgIGlmIChoYXNBY3RpdmF0ZWRDaGlsZCkge1xuICAgICAgLy8gSW1tZWRpYXRlbHkgcmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSwgd2hpbGUgcHJlc2VydmluZyBsb2dpYyB0aGF0IHByZXZlbnRzIHRvdWNoIGZvbGxvdy1vbiBldmVudHNcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKC8qKiBAdHlwZSB7IUV2ZW50VGFyZ2V0fSAqLyAoZS50YXJnZXQpKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSAmJiBlICE9PSB1bmRlZmluZWQgJiYgKGUua2V5ID09PSAnICcgfHwgZS5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgLy8gYWN0aXZlIHN0YXRlcyBpbmNvbnNpc3RlbnRseSB3aGVuIHRoZXkncmUgY2FsbGVkIHdpdGhpbiBldmVudCBoYW5kbGluZyBjb2RlOlxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgLy8gV2UgdHJ5IGZpcnN0IG91dHNpZGUgckFGIHRvIHN1cHBvcnQgRWRnZSwgd2hpY2ggZG9lcyBub3QgZXhoaWJpdCB0aGlzIHByb2JsZW0sIGJ1dCB3aWxsIGNyYXNoIGlmIGEgQ1NTXG4gICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSkge1xuICAgIHJldHVybiAoZSAhPT0gdW5kZWZpbmVkICYmIGUudHlwZSA9PT0gJ2tleWRvd24nKSA/IHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlQWN0aXZlKCkgOiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZXZlbnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICovXG4gIGFjdGl2YXRlKGV2ZW50KSB7XG4gICAgdGhpcy5hY3RpdmF0ZV8oZXZlbnQpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGFuaW1hdGVBY3RpdmF0aW9uXygpIHtcbiAgICBjb25zdCB7VkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtERUFDVElWQVRJT05fVElNRU9VVF9NU30gPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnM7XG5cbiAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuXG4gICAgbGV0IHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgbGV0IHRyYW5zbGF0ZUVuZCA9ICcnO1xuXG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIGNvbnN0IHtzdGFydFBvaW50LCBlbmRQb2ludH0gPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKTtcbiAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gYCR7c3RhcnRQb2ludC54fXB4LCAke3N0YXJ0UG9pbnQueX1weGA7XG4gICAgICB0cmFuc2xhdGVFbmQgPSBgJHtlbmRQb2ludC54fXB4LCAke2VuZFBvaW50Lnl9cHhgO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuXG4gICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm4ge3tzdGFydFBvaW50OiBQb2ludFR5cGUsIGVuZFBvaW50OiBQb2ludFR5cGV9fVxuICAgKi9cbiAgZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpIHtcbiAgICBjb25zdCB7YWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXJ9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuXG4gICAgbGV0IHN0YXJ0UG9pbnQ7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhcbiAgICAgICAgLyoqIEB0eXBlIHshRXZlbnR9ICovIChhY3RpdmF0aW9uRXZlbnQpLFxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICBjb25zdCBlbmRQb2ludCA9IHtcbiAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtzdGFydFBvaW50LCBlbmRQb2ludH07XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCkge1xuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtoYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWR9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGNvbnN0IGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcblxuICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKSB7XG4gICAgY29uc3Qge0ZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gIH1cblxuICByZXNldEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQsIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZWFjdGl2YXRlXygpIHtcbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSAvKiogQHR5cGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqLyAoT2JqZWN0LmFzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKSk7XG5cbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSkpO1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9IG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFuaW1hdGVEZWFjdGl2YXRpb25fKHt3YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlfSkge1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfVxuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgIH1cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGxheW91dEludGVybmFsXygpIHtcbiAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIGNvbnN0IG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuXG4gICAgLy8gU3VyZmFjZSBkaWFtZXRlciBpcyB0cmVhdGVkIGRpZmZlcmVudGx5IGZvciB1bmJvdW5kZWQgdnMuIGJvdW5kZWQgcmlwcGxlcy5cbiAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAvLyBzcXVhcmUpLiBCb3VuZGVkIHJpcHBsZXMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgZnVsbHkgZXhwZWN0ZWQgdG8gZXhwYW5kIGJleW9uZCB0aGUgc3VyZmFjZSdzIGxvbmdlc3QgZGlhbWV0ZXJcbiAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgIGNvbnN0IGdldEJvdW5kZWRSYWRpdXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMuZnJhbWVfLndpZHRoLCAyKSArIE1hdGgucG93KHRoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICB9O1xuXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpID8gbWF4RGltIDogZ2V0Qm91bmRlZFJhZGl1cygpO1xuXG4gICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICB0aGlzLmluaXRpYWxTaXplXyA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICB0aGlzLmZnU2NhbGVfID0gdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG5cbiAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgdXBkYXRlTGF5b3V0Q3NzVmFyc18oKSB7XG4gICAgY29uc3Qge1xuICAgICAgVkFSX0ZHX1NJWkUsIFZBUl9MRUZULCBWQVJfVE9QLCBWQVJfRkdfU0NBTEUsXG4gICAgfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIGAke3RoaXMuaW5pdGlhbFNpemVffXB4YCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnR9cHhgKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcH1weGApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXRVbmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgY29uc3Qge1VOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRm9jdXMoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKSk7XG4gIH1cblxuICBoYW5kbGVCbHVyKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCBNRENSaXBwbGVGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQGV4dGVuZHMgTURDQ29tcG9uZW50PCFNRENSaXBwbGVGb3VuZGF0aW9uPlxuICovXG5jbGFzcyBNRENSaXBwbGUgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKiogQHBhcmFtIHsuLi4/fSBhcmdzICovXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHt7aXNVbmJvdW5kZWQ6IChib29sZWFufHVuZGVmaW5lZCl9PX0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QsIHtpc1VuYm91bmRlZCA9IHVuZGVmaW5lZH0gPSB7fSkge1xuICAgIGNvbnN0IHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgLy8gT25seSBvdmVycmlkZSB1bmJvdW5kZWQgYmVoYXZpb3IgaWYgb3B0aW9uIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgaWYgKGlzVW5ib3VuZGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSAvKiogQHR5cGUge2Jvb2xlYW59ICovIChpc1VuYm91bmRlZCk7XG4gICAgfVxuICAgIHJldHVybiByaXBwbGU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshUmlwcGxlQ2FwYWJsZVN1cmZhY2V9IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUFkYXB0ZXIoaW5zdGFuY2UpIHtcbiAgICBjb25zdCBNQVRDSEVTID0gdXRpbC5nZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyksXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gaW5zdGFuY2UudW5ib3VuZGVkLFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiBpbnN0YW5jZS5yb290X1tNQVRDSEVTXSgnOmFjdGl2ZScpLFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IGluc3RhbmNlLmRpc2FibGVkLFxuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiAodGFyZ2V0KSA9PiBpbnN0YW5jZS5yb290Xy5jb250YWlucyh0YXJnZXQpLFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpLFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gaW5zdGFuY2Uucm9vdF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAoe3g6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0fSksXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgdW5ib3VuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0IHVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICB0aGlzLnVuYm91bmRlZF8gPSBCb29sZWFuKHVuYm91bmRlZCk7XG4gICAgdGhpcy5zZXRVbmJvdW5kZWRfKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc3VyZSBDb21waWxlciB0aHJvd3MgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3Igd2hlbiBkaXJlY3RseSBhY2Nlc3NpbmcgYVxuICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICogQnkgYWNjZXNzaW5nIHRoZSBwcm90ZWN0ZWQgcHJvcGVydHkgaW5zaWRlIGEgbWV0aG9kLCB3ZSBzb2x2ZSB0aGF0IHByb2JsZW0uXG4gICAqIFRoYXQncyB3aHkgdGhpcyBmdW5jdGlvbiBleGlzdHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRVbmJvdW5kZWRfKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VW5ib3VuZGVkKHRoaXMudW5ib3VuZGVkXyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUZvdW5kYXRpb259XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMudW5ib3VuZGVkID0gJ21kY1JpcHBsZUlzVW5ib3VuZGVkJyBpbiB0aGlzLnJvb3RfLmRhdGFzZXQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTZWUgTWF0ZXJpYWwgRGVzaWduIHNwZWMgZm9yIG1vcmUgZGV0YWlscyBvbiB3aGVuIHRvIHVzZSByaXBwbGVzLlxuICogaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL21vdGlvbi9jaG9yZW9ncmFwaHkuaHRtbCNjaG9yZW9ncmFwaHktY3JlYXRpb25cbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgUmlwcGxlQ2FwYWJsZVN1cmZhY2Uge31cblxuLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLnJvb3RfO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgYmxlZWRzIG91dCBvZiB0aGUgYm91bmRzIG9mIHRoZSBlbGVtZW50LlxuICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUudW5ib3VuZGVkO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgaXMgYXR0YWNoZWQgdG8gYSBkaXNhYmxlZCBjb21wb25lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS5kaXNhYmxlZDtcblxuZXhwb3J0IHtNRENSaXBwbGUsIE1EQ1JpcHBsZUZvdW5kYXRpb24sIFJpcHBsZUNhcGFibGVTdXJmYWNlLCB1dGlsfTtcbiIsImltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2luZGV4J1xuaW1wb3J0IHtcbiAgc3VwcG9ydHNDc3NWYXJpYWJsZXMsXG4gIGdldE1hdGNoZXNQcm9wZXJ0eSxcbiAgYXBwbHlQYXNzaXZlXG59IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvdXRpbCdcblxuZXhwb3J0IGNsYXNzIFJpcHBsZUJhc2UgZXh0ZW5kcyBNRENSaXBwbGVGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBNQVRDSEVTKCkge1xuICAgIC8qIGdsb2JhbCBIVE1MRWxlbWVudCAqL1xuICAgIHJldHVybiAoXG4gICAgICBSaXBwbGVCYXNlLl9tYXRjaGVzIHx8XG4gICAgICAoUmlwcGxlQmFzZS5fbWF0Y2hlcyA9IGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpKVxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cmZhY2VBY3RpdmUocmVmKSB7XG4gICAgcmV0dXJuIHJlZltSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZtLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbFtSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRkZWxldGUodm0uY2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogdGFyZ2V0ID0+IHZtLiRlbC5jb250YWlucyh0YXJnZXQpLFxuICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uc3R5bGVzLCB2YXJOYW1lLCB2YWx1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFJpcHBsZU1peGluID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzKVxuICAgIHRoaXMucmlwcGxlLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxjdXN0b20tZWxlbWVudCBcbiAgICA6dGFnPVwidGFnXCIgXG4gICAgOmNsYXNzZXM9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGVzPVwic3R5bGVzXCIgXG4gICAgY2xhc3M9XCJtZGMtcmlwcGxlXCI+XG4gICAgPHNsb3QgLz5cbiAgPC9jdXN0b20tZWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBDdXN0b21FbGVtZW50TWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlTWl4aW4gfSBmcm9tICcuL21kYy1yaXBwbGUtYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXJpcHBsZScsXG4gIG1peGluczogW0N1c3RvbUVsZW1lbnRNaXhpbiwgUmlwcGxlTWl4aW5dLFxuICBwcm9wczoge1xuICAgIHRhZzogU3RyaW5nXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgOnN0eWxlPVwieyB3aWR0aDogZnVsbHdpZHRoID8gJzEwMCUnIDogdW5kZWZpbmVkIH1cIlxuICAgIDppZD1cImlkXCJcbiAgICBjbGFzcz1cIm1kYy10ZXh0ZmllbGQtd3JhcHBlclwiXG4gID5cbiAgICA8ZGl2IHJlZj1cInJvb3RcIiA6Y2xhc3M9XCJyb290Q2xhc3Nlc1wiPlxuICAgICAgPHRleHRmaWVsZC1pY29uIHJlZj1cImxlYWRpbmdJY29uRWxcIiB2LWlmPVwiJHNsb3RzLmxlYWRpbmdJY29uXCI+XG4gICAgICAgIDxzbG90IG5hbWU9XCJsZWFkaW5nSWNvblwiPjwvc2xvdD5cbiAgICAgIDwvdGV4dGZpZWxkLWljb24+XG4gICAgICA8IS0tXG4gICAgICAgIHdvcmthcnJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvcm9sbHVwLXBsdWdpbi12dWUvaXNzdWVzLzE3NFxuICAgICAgLS0+XG4gICAgICA8IS0tIGVzbGludC1kaXNhYmxlIHZ1ZS9odG1sLXNlbGYtY2xvc2luZyAtLT5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICB2LWlmPVwibXVsdGlsaW5lXCJcbiAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICB2LWJpbmQ9XCIkYXR0cnNcIlxuICAgICAgICA6aWQ9XCJ2bWFfdWlkX1wiXG4gICAgICAgIDpjbGFzcz1cImlucHV0Q2xhc3Nlc1wiXG4gICAgICAgIDptaW5sZW5ndGg9XCJtaW5sZW5ndGhcIlxuICAgICAgICA6bWF4bGVuZ3RoPVwibWF4bGVuZ3RoXCJcbiAgICAgICAgOnBsYWNlaG9sZGVyPVwiaW5wdXRQbGFjZUhvbGRlclwiXG4gICAgICAgIDphcmlhLWxhYmVsPVwiaW5wdXRQbGFjZUhvbGRlclwiXG4gICAgICAgIDphcmlhLWNvbnRyb2xzPVwiaW5wdXRBcmlhQ29udHJvbHNcIlxuICAgICAgICA6cm93cz1cInJvd3NcIlxuICAgICAgICA6Y29scz1cImNvbHNcIlxuICAgICAgICB2LW9uPVwiJGxpc3RlbmVyc1wiXG4gICAgICAgIEBpbnB1dD1cInVwZGF0ZVZhbHVlKCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgID48L3RleHRhcmVhPlxuXG4gICAgICA8aW5wdXRcbiAgICAgICAgdi1lbHNlXG4gICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgdi1iaW5kPVwiJGF0dHJzXCJcbiAgICAgICAgOmlkPVwidm1hX3VpZF9cIlxuICAgICAgICA6Y2xhc3M9XCJpbnB1dENsYXNzZXNcIlxuICAgICAgICA6dHlwZT1cInR5cGVcIlxuICAgICAgICA6bWlubGVuZ3RoPVwibWlubGVuZ3RoXCJcbiAgICAgICAgOm1heGxlbmd0aD1cIm1heGxlbmd0aFwiXG4gICAgICAgIDpwbGFjZWhvbGRlcj1cImlucHV0UGxhY2VIb2xkZXJcIlxuICAgICAgICA6YXJpYS1sYWJlbD1cImlucHV0UGxhY2VIb2xkZXJcIlxuICAgICAgICA6YXJpYS1jb250cm9scz1cImlucHV0QXJpYUNvbnRyb2xzXCJcbiAgICAgICAgdi1vbj1cIiRsaXN0ZW5lcnNcIlxuICAgICAgICBAaW5wdXQ9XCJ1cGRhdGVWYWx1ZSgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAvPlxuXG4gICAgICA8bWRjLWZsb2F0aW5nLWxhYmVsIHYtaWY9XCJoYXNMYWJlbFwiIHJlZj1cImxhYmVsRWxcIiA6Zm9yPVwidm1hX3VpZF9cIj57e1xuICAgICAgICBsYWJlbFxuICAgICAgfX08L21kYy1mbG9hdGluZy1sYWJlbD5cblxuICAgICAgPHRleHRmaWVsZC1pY29uIHJlZj1cInRyYWlsaW5nSWNvbkVsXCIgdi1pZj1cIiRzbG90cy50cmFpbGluZ0ljb25cIj5cbiAgICAgICAgPHNsb3QgbmFtZT1cInRyYWlsaW5nSWNvblwiPjwvc2xvdD5cbiAgICAgIDwvdGV4dGZpZWxkLWljb24+XG5cbiAgICAgIDxtZGMtbm90Y2hlZC1vdXRsaW5lIHYtaWY9XCJoYXNPdXRsaW5lXCIgcmVmPVwibGFiZWxFbFwiPnt7XG4gICAgICAgIGxhYmVsXG4gICAgICB9fTwvbWRjLW5vdGNoZWQtb3V0bGluZT5cblxuICAgICAgPG1kYy1saW5lLXJpcHBsZSB2LWlmPVwiaGFzTGluZVJpcHBsZVwiIHJlZj1cImxpbmVSaXBwbGVFbFwiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8dGV4dGZpZWxkLWhlbHBlci10ZXh0XG4gICAgICByZWY9XCJoZWxwZXJ0ZXh0RWxcIlxuICAgICAgdi1pZj1cIiRzbG90cy5oZWxwVGV4dFwiXG4gICAgICA6aWQ9XCInaGVscC0nICsgdm1hX3VpZF9cIlxuICAgID5cbiAgICAgIDxzbG90IG5hbWU9XCJoZWxwVGV4dFwiPjwvc2xvdD5cbiAgICA8L3RleHRmaWVsZC1oZWxwZXItdGV4dD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1EQ1RleHRmaWVsZEZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL3RleHRmaWVsZC9mb3VuZGF0aW9uJ1xuaW1wb3J0IFRleHRmaWVsZEhlbHBlclRleHQgZnJvbSAnLi90ZXh0ZmllbGQtaGVscGVyLXRleHQudnVlJ1xuaW1wb3J0IFRleHRmaWVsZEljb24gZnJvbSAnLi90ZXh0ZmllbGQtaWNvbi52dWUnXG5cbmltcG9ydCB7XG4gIGV4dHJhY3RJY29uUHJvcCxcbiAgRGlzcGF0Y2hGb2N1c01peGluLFxuICBDdXN0b21FbGVtZW50TWl4aW4sXG4gIFZNQVVuaXF1ZUlkTWl4aW4sXG4gIGFwcGx5UGFzc2l2ZVxufSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlQmFzZSB9IGZyb20gJy4uL3JpcHBsZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRleHRmaWVsZCcsXG4gIG1peGluczogW0N1c3RvbUVsZW1lbnRNaXhpbiwgRGlzcGF0Y2hGb2N1c01peGluLCBWTUFVbmlxdWVJZE1peGluXSxcbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcbiAgbW9kZWw6IHtcbiAgICBwcm9wOiAndmFsdWUnLFxuICAgIGV2ZW50OiAnbW9kZWwnXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RleHQnLFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIFtcbiAgICAgICAgICAgICd0ZXh0JyxcbiAgICAgICAgICAgICdlbWFpbCcsXG4gICAgICAgICAgICAnc2VhcmNoJyxcbiAgICAgICAgICAgICdwYXNzd29yZCcsXG4gICAgICAgICAgICAndGVsJyxcbiAgICAgICAgICAgICd1cmwnLFxuICAgICAgICAgICAgJ251bWJlcidcbiAgICAgICAgICBdLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBkZW5zZTogQm9vbGVhbixcbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIG91dGxpbmU6IEJvb2xlYW4sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgcmVxdWlyZWQ6IEJvb2xlYW4sXG4gICAgdmFsaWQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXG4gICAgZnVsbHdpZHRoOiBCb29sZWFuLFxuICAgIG11bHRpbGluZTogQm9vbGVhbixcbiAgICBzaXplOiB7IHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sIGRlZmF1bHQ6IDIwIH0sXG4gICAgbWlubGVuZ3RoOiB7IHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxuICAgIG1heGxlbmd0aDogeyB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcbiAgICByb3dzOiB7IHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sIGRlZmF1bHQ6IDggfSxcbiAgICBjb2xzOiB7IHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sIGRlZmF1bHQ6IDQwIH0sXG4gICAgaWQ6IHsgdHlwZTogU3RyaW5nIH1cbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IHRoaXMudmFsdWUsXG4gICAgICByb290Q2xhc3Nlczoge1xuICAgICAgICAnbWRjLXRleHRmaWVsZCc6IHRydWUsXG4gICAgICAgICdtZGMtdGV4dC1maWVsZCc6IHRydWUsXG4gICAgICAgICdtZGMtdGV4dC1maWVsZC0tdXBncmFkZWQnOiB0cnVlLFxuICAgICAgICAnbWRjLXRleHQtZmllbGQtLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgJ21kYy10ZXh0LWZpZWxkLS1kZW5zZSc6IHRoaXMuZGVuc2UsXG4gICAgICAgICdtZGMtdGV4dC1maWVsZC0tZnVsbHdpZHRoJzogdGhpcy5mdWxsd2lkdGgsXG4gICAgICAgICdtZGMtdGV4dC1maWVsZC0tdGV4dGFyZWEnOiB0aGlzLm11bHRpbGluZSxcbiAgICAgICAgJ21kYy10ZXh0LWZpZWxkLS1vdXRsaW5lZCc6ICF0aGlzLmZ1bGx3aWR0aCAmJiB0aGlzLm91dGxpbmUsXG4gICAgICAgICdtZGMtdGV4dC1maWVsZC0td2l0aC1sZWFkaW5nLWljb24nOiBCb29sZWFuKHRoaXMuJHNsb3RzLmxlYWRpbmdJY29uKSxcbiAgICAgICAgJ21kYy10ZXh0LWZpZWxkLS13aXRoLXRyYWlsaW5nLWljb24nOiBCb29sZWFuKHRoaXMuJHNsb3RzLnRyYWlsaW5nSWNvbilcbiAgICAgIH0sXG4gICAgICBpbnB1dENsYXNzZXM6IHtcbiAgICAgICAgJ21kYy10ZXh0LWZpZWxkX19pbnB1dCc6IHRydWVcbiAgICAgIH0sXG4gICAgICBsYWJlbENsYXNzZXM6IHtcbiAgICAgICAgJ21kYy1mbG9hdGluZy1sYWJlbCc6IHRydWVcbiAgICAgIH0sXG4gICAgICBsaW5lUmlwcGxlQ2xhc3Nlczoge1xuICAgICAgICAnbWRjLWxpbmUtcmlwcGxlJzogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGxpbmVSaXBwbGVTdHlsZXM6IHt9LFxuICAgICAgb3V0bGluZUNsYXNzZXM6IHt9LFxuICAgICAgbm90Y2hTdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7IFRleHRmaWVsZEhlbHBlclRleHQsIFRleHRmaWVsZEljb24gfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpbnB1dFBsYWNlSG9sZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZnVsbHdpZHRoID8gdGhpcy5sYWJlbCA6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgaW5wdXRBcmlhQ29udHJvbHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oZWxwID8gJ2hlbHAtJyArIHRoaXMudm1hX3VpZF8gOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGhhc0xhYmVsKCkge1xuICAgICAgcmV0dXJuICF0aGlzLmZ1bGx3aWR0aCAmJiAhdGhpcy5vdXRsaW5lICYmIHRoaXMubGFiZWxcbiAgICB9LFxuXG4gICAgaGFzT3V0bGluZUxhYmVsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzT3V0bGluZSAmJiB0aGlzLmxhYmVsXG4gICAgfSxcbiAgICBoYXNPdXRsaW5lKCkge1xuICAgICAgcmV0dXJuICF0aGlzLmZ1bGx3aWR0aCAmJiB0aGlzLm91dGxpbmVcbiAgICB9LFxuICAgIGhhc0xpbmVSaXBwbGUoKSB7XG4gICAgICByZXR1cm4gIXRoaXMuaGFzT3V0bGluZSAmJiAhdGhpcy5tdWx0aWxpbmVcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgZGlzYWJsZWQoKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24gJiYgdGhpcy5mb3VuZGF0aW9uLnNldERpc2FibGVkKHRoaXMuZGlzYWJsZWQpXG4gICAgfSxcbiAgICByZXF1aXJlZCgpIHtcbiAgICAgIHRoaXMuJHJlZnMuaW5wdXQgJiYgKHRoaXMuJHJlZnMuaW5wdXQucmVxdWlyZWQgPSB0aGlzLnJlcXVpcmVkKVxuICAgIH0sXG4gICAgdmFsaWQoKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMudmFsaWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbiAmJiB0aGlzLmZvdW5kYXRpb24uc2V0VmFsaWQodGhpcy52YWxpZClcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlbnNlKCkge1xuICAgICAgdGhpcy4kc2V0KHRoaXMucm9vdENsYXNzZXMsICdtZGMtdGV4dC1maWVsZC0tZGVuc2UnLCB0aGlzLmRlbnNlKVxuICAgIH0sXG4gICAgdmFsdWUodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmZvdW5kYXRpb24pIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLmZvdW5kYXRpb24uZ2V0VmFsdWUoKSkge1xuICAgICAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDVGV4dGZpZWxkRm91bmRhdGlvbihcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBhZGRDbGFzczogY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnJvb3RDbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGRlbGV0ZSh0aGlzLnJvb3RDbGFzc2VzLCBjbGFzc05hbWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMucm9vdC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLnJvb3QuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMucm9vdC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc0ZvY3VzZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLiRyZWZzLmlucHV0XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1J0bDogKCkgPT5cbiAgICAgICAgICAgIHdpbmRvd1xuICAgICAgICAgICAgICAuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiRyZWZzLnJvb3QpXG4gICAgICAgICAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcsXG5cbiAgICAgICAgICByZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdldEF0dHJpYnV0ZXNMaXN0ID0gbXV0YXRpb25zTGlzdCA9PlxuICAgICAgICAgICAgICBtdXRhdGlvbnNMaXN0Lm1hcChtdXRhdGlvbiA9PiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKVxuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnNMaXN0ID0+XG4gICAgICAgICAgICAgIGhhbmRsZXIoZ2V0QXR0cmlidXRlc0xpc3QobXV0YXRpb25zTGlzdCkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gdGhpcy4kcmVmcy5pbnB1dFxuICAgICAgICAgICAgY29uc3QgY29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlIH1cbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgY29uZmlnKVxuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXI6IG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5nZXRJbnB1dEFkYXB0ZXJNZXRob2RzKCksXG4gICAgICAgIHRoaXMuZ2V0TGFiZWxBZGFwdGVyTWV0aG9kcygpLFxuICAgICAgICB0aGlzLmdldExpbmVSaXBwbGVBZGFwdGVyTWV0aG9kcygpLFxuICAgICAgICB0aGlzLmdldE91dGxpbmVBZGFwdGVyTWV0aG9kcygpXG4gICAgICApLFxuICAgICAge1xuICAgICAgICBoZWxwZXJUZXh0OiB0aGlzLiRyZWZzLmhlbHBlcnRleHRFbFxuICAgICAgICAgID8gdGhpcy4kcmVmcy5oZWxwZXJ0ZXh0RWwuZm91bmRhdGlvblxuICAgICAgICAgIDogdm9pZCAwLFxuICAgICAgICBsZWFkaW5nSWNvbjogdGhpcy4kcmVmcy5sZWFkaW5nSWNvbkVsXG4gICAgICAgICAgPyB0aGlzLiRyZWZzLmxlYWRpbmdJY29uRWwuZm91bmRhdGlvblxuICAgICAgICAgIDogdm9pZCAwLFxuICAgICAgICB0cmFpbGluZ0ljb246IHRoaXMuJHJlZnMudHJhaWxpbmdJY29uRWxcbiAgICAgICAgICA/IHRoaXMuJHJlZnMudHJhaWxpbmdJY29uRWwuZm91bmRhdGlvblxuICAgICAgICAgIDogdm9pZCAwXG4gICAgICB9XG4gICAgKVxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcbiAgICB0aGlzLmZvdW5kYXRpb24uc2V0VmFsdWUodGhpcy52YWx1ZSlcbiAgICB0aGlzLmZvdW5kYXRpb24uc2V0RGlzYWJsZWQodGhpcy5kaXNhYmxlZClcbiAgICB0aGlzLiRyZWZzLmlucHV0ICYmICh0aGlzLiRyZWZzLmlucHV0LnJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZClcbiAgICBpZiAodHlwZW9mIHRoaXMudmFsaWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0VmFsaWQodGhpcy52YWxpZClcbiAgICB9XG5cbiAgICBpZiAodGhpcy50ZXh0Ym94KSB7XG4gICAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgICB0aGlzLnJpcHBsZS5pbml0KClcbiAgICB9XG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uICYmIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgICB0aGlzLnJpcHBsZSAmJiB0aGlzLnJpcHBsZS5kZXN0cm95KClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldElucHV0QWRhcHRlck1ldGhvZHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgIHRoaXMuJHJlZnMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgfSxcbiAgICAgICAgZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgIHRoaXMuJHJlZnMuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0TmF0aXZlSW5wdXQ6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5pbnB1dFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRMYWJlbEFkYXB0ZXJNZXRob2RzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hha2VMYWJlbDogc2hvdWxkU2hha2UgPT4ge1xuICAgICAgICAgIHRoaXMuJHJlZnMubGFiZWxFbCAmJiB0aGlzLiRyZWZzLmxhYmVsRWwuc2hha2Uoc2hvdWxkU2hha2UpXG4gICAgICAgIH0sXG4gICAgICAgIGZsb2F0TGFiZWw6IHNob3VsZEZsb2F0ID0+IHtcbiAgICAgICAgICB0aGlzLiRyZWZzLmxhYmVsRWwgJiYgdGhpcy4kcmVmcy5sYWJlbEVsLmZsb2F0KHNob3VsZEZsb2F0KVxuICAgICAgICB9LFxuICAgICAgICBoYXNMYWJlbDogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiAhIXRoaXMuJHJlZnMubGFiZWxFbCB8fCAhIXRoaXMuJHJlZnMubm90Y2hlZEVsXG4gICAgICAgIH0sXG4gICAgICAgIGdldExhYmVsV2lkdGg6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5sYWJlbEVsICYmIHRoaXMuJHJlZnMubGFiZWxFbC5nZXRXaWR0aCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGdldExpbmVSaXBwbGVBZGFwdGVyTWV0aG9kcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRlYWN0aXZhdGVMaW5lUmlwcGxlOiAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuJHJlZnMubGluZVJpcHBsZUVsKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLmxpbmVSaXBwbGVFbC5kZWFjdGl2YXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2YXRlTGluZVJpcHBsZTogKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLiRyZWZzLmxpbmVSaXBwbGVFbCkge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5saW5lUmlwcGxlRWwuYWN0aXZhdGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0TGluZVJpcHBsZVRyYW5zZm9ybU9yaWdpbjogbm9ybWFsaXplZFggPT4ge1xuICAgICAgICAgIGlmICh0aGlzLiRyZWZzLmxpbmVSaXBwbGVFbCkge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5saW5lUmlwcGxlRWwuc2V0UmlwcGxlQ2VudGVyKG5vcm1hbGl6ZWRYKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0T3V0bGluZUFkYXB0ZXJNZXRob2RzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGFzT3V0bGluZTogKCkgPT4gISF0aGlzLmhhc091dGxpbmUsXG4gICAgICAgIG5vdGNoT3V0bGluZTogKG5vdGNoV2lkdGgsIGlzUnRsKSA9PlxuICAgICAgICAgIHRoaXMuJHJlZnMubGFiZWxFbC5ub3RjaChub3RjaFdpZHRoLCBpc1J0bCksXG4gICAgICAgIGNsb3NlT3V0bGluZTogKCkgPT4gdGhpcy4kcmVmcy5sYWJlbEVsLmNsb3NlTm90Y2goKVxuICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlVmFsdWUodmFsdWUpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ21vZGVsJywgdmFsdWUpXG4gICAgfSxcbiAgICBmb2N1cygpIHtcbiAgICAgIHRoaXMuJHJlZnMuaW5wdXQgJiYgdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpXG4gICAgfSxcbiAgICBibHVyKCkge1xuICAgICAgdGhpcy4kcmVmcy5pbnB1dCAmJiB0aGlzLiRyZWZzLmlucHV0LmJsdXIoKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBtZGNUZXh0RmllbGQgZnJvbSAnLi9tZGMtdGV4dGZpZWxkLnZ1ZSdcblxuZXhwb3J0IHsgbWRjVGV4dEZpZWxkIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY1RleHRGaWVsZFxufSlcbiIsImltcG9ydCAnLi9zdHlsZXMuc2NzcydcbmltcG9ydCB7IGF1dG9Jbml0IH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBwbHVnaW4gZnJvbSAnLi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG5hdXRvSW5pdChwbHVnaW4pXG4iXSwibmFtZXMiOlsic3VwcG9ydHNQYXNzaXZlXyIsImFwcGx5UGFzc2l2ZSIsImdsb2JhbE9iaiIsIndpbmRvdyIsImZvcmNlUmVmcmVzaCIsInVuZGVmaW5lZCIsImlzU3VwcG9ydGVkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsImUiLCJhdXRvSW5pdCIsInBsdWdpbiIsIl9WdWUiLCJWdWUiLCJnbG9iYWwiLCJ1c2UiLCJCYXNlUGx1Z2luIiwiY29tcG9uZW50cyIsInZlcnNpb24iLCJpbnN0YWxsIiwidm0iLCJrZXkiLCJjb21wb25lbnQiLCJuYW1lIiwiQ3VzdG9tRWxlbWVudCIsImZ1bmN0aW9uYWwiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsInByb3BzIiwiaXMiLCJ0YWciLCJkYXRhIiwiY2hpbGRyZW4iLCJDdXN0b21FbGVtZW50TWl4aW4iLCJlbWl0Q3VzdG9tRXZlbnQiLCJlbCIsImV2dFR5cGUiLCJldnREYXRhIiwic2hvdWxkQnViYmxlIiwiZXZ0IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiRGlzcGF0Y2hGb2N1c01peGluIiwiaGFzRm9jdXMiLCJtZXRob2RzIiwib25Nb3VzZURvd24iLCJfYWN0aXZlIiwib25Nb3VzZVVwIiwib25Gb2N1c0V2ZW50Iiwic2V0VGltZW91dCIsImRpc3BhdGNoRm9jdXNFdmVudCIsIm9uQmx1ckV2ZW50IiwiJGVsIiwiYWN0aXZlRWxlbWVudCIsImNvbnRhaW5zIiwiJGVtaXQiLCJtb3VudGVkIiwiYmVmb3JlRGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY29wZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiVk1BVW5pcXVlSWRNaXhpbiIsImJlZm9yZUNyZWF0ZSIsInZtYV91aWRfIiwiX3VpZCIsIk1EQ0ZvdW5kYXRpb24iLCJhZGFwdGVyIiwiYWRhcHRlcl8iLCJNRENUZXh0RmllbGRIZWxwZXJUZXh0QWRhcHRlciIsImNsYXNzTmFtZSIsImF0dHIiLCJ2YWx1ZSIsImNvbnRlbnQiLCJzdHJpbmdzIiwiQVJJQV9ISURERU4iLCJST0xFIiwiY3NzQ2xhc3NlcyIsIkhFTFBFUl9URVhUX1BFUlNJU1RFTlQiLCJIRUxQRVJfVEVYVF9WQUxJREFUSU9OX01TRyIsIk1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwic2V0QXR0ciIsInJlbW92ZUF0dHIiLCJzZXRDb250ZW50IiwiZGVmYXVsdEFkYXB0ZXIiLCJpc1BlcnNpc3RlbnQiLCJpc1ZhbGlkYXRpb24iLCJpbnB1dElzVmFsaWQiLCJoZWxwZXJUZXh0SXNQZXJzaXN0ZW50IiwiaGVscGVyVGV4dElzVmFsaWRhdGlvbk1zZyIsInZhbGlkYXRpb25Nc2dOZWVkc0Rpc3BsYXkiLCJoaWRlXyIsIk1EQ1RleHRGaWVsZEljb25BZGFwdGVyIiwiaGFuZGxlciIsIklDT05fRVZFTlQiLCJJQ09OX1JPTEUiLCJNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiIsImdldEF0dHIiLCJyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJub3RpZnlJY29uQWN0aW9uIiwic2F2ZWRUYWJJbmRleF8iLCJpbnRlcmFjdGlvbkhhbmRsZXJfIiwiaGFuZGxlSW50ZXJhY3Rpb24iLCJmb3JFYWNoIiwiZGlzYWJsZWQiLCJsYWJlbCIsInR5cGUiLCJrZXlDb2RlIiwiTURDVGV4dEZpZWxkQWRhcHRlciIsIm9ic2VydmVyIiwibm9ybWFsaXplZFgiLCJzaG91bGRTaGFrZSIsInNob3VsZEZsb2F0IiwibGFiZWxXaWR0aCIsIkFSSUFfQ09OVFJPTFMiLCJJTlBVVF9TRUxFQ1RPUiIsIkxBQkVMX1NFTEVDVE9SIiwiSUNPTl9TRUxFQ1RPUiIsIk9VVExJTkVfU0VMRUNUT1IiLCJMSU5FX1JJUFBMRV9TRUxFQ1RPUiIsIlJPT1QiLCJESVNBQkxFRCIsIkRFTlNFIiwiRk9DVVNFRCIsIklOVkFMSUQiLCJURVhUQVJFQSIsIk9VVExJTkVEIiwiV0lUSF9MRUFESU5HX0lDT04iLCJudW1iZXJzIiwiTEFCRUxfU0NBTEUiLCJERU5TRV9MQUJFTF9TQ0FMRSIsIlZBTElEQVRJT05fQVRUUl9XSElURUxJU1QiLCJBTFdBWVNfRkxPQVRfVFlQRVMiLCJNRENUZXh0RmllbGRGb3VuZGF0aW9uIiwiaXNWYWxpZCIsImlzRm9jdXNlZF8iLCJnZXRWYWx1ZSIsImdldE5hdGl2ZUlucHV0XyIsImluZGV4T2YiLCJzaG91bGRBbHdheXNGbG9hdF8iLCJpc0JhZElucHV0XyIsInJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyIiwiZGVyZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyIiwiZGVyZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyIiwiZ2V0TmF0aXZlSW5wdXQiLCJpc0ZvY3VzZWQiLCJhY3RpdmF0ZUxpbmVSaXBwbGUiLCJkZWFjdGl2YXRlTGluZVJpcHBsZSIsInNldExpbmVSaXBwbGVUcmFuc2Zvcm1PcmlnaW4iLCJzaGFrZUxhYmVsIiwiZmxvYXRMYWJlbCIsImhhc0xhYmVsIiwiZ2V0TGFiZWxXaWR0aCIsImhhc091dGxpbmUiLCJub3RjaE91dGxpbmUiLCJjbG9zZU91dGxpbmUiLCJmb3VuZGF0aW9uTWFwIiwiaGVscGVyVGV4dF8iLCJoZWxwZXJUZXh0IiwibGVhZGluZ0ljb25fIiwibGVhZGluZ0ljb24iLCJ0cmFpbGluZ0ljb25fIiwidHJhaWxpbmdJY29uIiwicmVjZWl2ZWRVc2VySW5wdXRfIiwidXNlQ3VzdG9tVmFsaWRpdHlDaGVja2luZ18iLCJpc1ZhbGlkXyIsInVzZU5hdGl2ZVZhbGlkYXRpb25fIiwiaW5wdXRGb2N1c0hhbmRsZXJfIiwiYWN0aXZhdGVGb2N1cyIsImlucHV0Qmx1ckhhbmRsZXJfIiwiZGVhY3RpdmF0ZUZvY3VzIiwiaW5wdXRJbnB1dEhhbmRsZXJfIiwiYXV0b0NvbXBsZXRlRm9jdXMiLCJzZXRQb2ludGVyWE9mZnNldF8iLCJzZXRUcmFuc2Zvcm1PcmlnaW4iLCJ0ZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXJfIiwiaGFuZGxlVGV4dEZpZWxkSW50ZXJhY3Rpb24iLCJ2YWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcl8iLCJhdHRyaWJ1dGVzTGlzdCIsImhhbmRsZVZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2UiLCJ2YWxpZGF0aW9uT2JzZXJ2ZXJfIiwic29tZSIsImF0dHJpYnV0ZU5hbWUiLCJzdHlsZVZhbGlkaXR5XyIsIm9wZW5Ob3RjaCIsImlzRGVuc2UiLCJsYWJlbFNjYWxlIiwic3R5bGVGb2N1c2VkXyIsInNob3dUb1NjcmVlblJlYWRlciIsInRhcmdldEV2ZW50IiwidG91Y2hlcyIsInRhcmdldENsaWVudFJlY3QiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsImlzTmF0aXZlSW5wdXRWYWxpZF8iLCJ1c2VOYXRpdmVWYWxpZGF0aW9uIiwic3R5bGVEaXNhYmxlZF8iLCJzZXRBcmlhTGFiZWwiLCJ2YWxpZGl0eSIsImJhZElucHV0IiwidmFsaWQiLCJzZXRWYWxpZGl0eSIsImlzRGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsImhhc093biIsImhhc093blByb3BlcnR5IiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJnIiwiYXJnVHlwZSIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJpbm5lciIsImFwcGx5IiwiY2FsbCIsImpvaW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdCIsImRlZmluZSIsImFtZCIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsImNvbXBpbGVkVGVtcGxhdGUiLCJpbmplY3RTdHlsZSIsImRlZmF1bHRFeHBvcnQiLCJzY29wZUlkIiwiaXNGdW5jdGlvbmFsVGVtcGxhdGUiLCJtb2R1bGVJZGVudGlmaWVyIiwiaXNTaGFkb3dNb2RlIiwiY3JlYXRlSW5qZWN0b3IiLCJjcmVhdGVJbmplY3RvclNTUiIsImNyZWF0ZUluamVjdG9yU2hhZG93Iiwib3B0aW9ucyIsInN0YXRpY1JlbmRlckZucyIsIl9jb21waWxlZCIsIl9zY29wZUlkIiwiaG9vayIsIiR2bm9kZSIsInNzckNvbnRleHQiLCJwYXJlbnQiLCJfX1ZVRV9TU1JfQ09OVEVYVF9fIiwiX3JlZ2lzdGVyZWRDb21wb25lbnRzIiwiYWRkIiwiX3NzclJlZ2lzdGVyIiwiJHJvb3QiLCIkb3B0aW9ucyIsInNoYWRvd1Jvb3QiLCJvcmlnaW5hbFJlbmRlciIsInJlbmRlcldpdGhTdHlsZUluamVjdGlvbiIsImgiLCJleGlzdGluZyIsImNvbmNhdCIsInNjcmlwdCIsIk1EQ0NvbXBvbmVudCIsInJvb3QiLCJmb3VuZGF0aW9uIiwicm9vdF8iLCJhcmdzIiwiaW5pdGlhbGl6ZSIsImZvdW5kYXRpb25fIiwiZ2V0RGVmYXVsdEZvdW5kYXRpb24iLCJpbml0IiwiaW5pdGlhbFN5bmNXaXRoRE9NIiwiRXJyb3IiLCJkZXN0cm95IiwiTURDUmlwcGxlQWRhcHRlciIsInZhck5hbWUiLCJVTkJPVU5ERUQiLCJCR19GT0NVU0VEIiwiRkdfQUNUSVZBVElPTiIsIkZHX0RFQUNUSVZBVElPTiIsIlZBUl9MRUZUIiwiVkFSX1RPUCIsIlZBUl9GR19TSVpFIiwiVkFSX0ZHX1NDQUxFIiwiVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCIsIlZBUl9GR19UUkFOU0xBVEVfRU5EIiwiUEFERElORyIsIklOSVRJQUxfT1JJR0lOX1NDQUxFIiwiREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMiLCJGR19ERUFDVElWQVRJT05fTVMiLCJUQVBfREVMQVlfTVMiLCJzdXBwb3J0c0Nzc1ZhcmlhYmxlc18iLCJkZXRlY3RFZGdlUHNldWRvVmFyQnVnIiwid2luZG93T2JqIiwibm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaGFzUHNldWRvVmFyQnVnIiwiYm9yZGVyVG9wU3R5bGUiLCJyZW1vdmUiLCJzdXBwb3J0c0Nzc1ZhcmlhYmxlcyIsInN1cHBvcnRzRnVuY3Rpb25QcmVzZW50IiwiQ1NTIiwic3VwcG9ydHMiLCJleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIiwid2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzIiwiZ2V0TWF0Y2hlc1Byb3BlcnR5IiwiSFRNTEVsZW1lbnRQcm90b3R5cGUiLCJtYXRjaGVzTWV0aG9kcyIsIm1ldGhvZCIsIm1hdGNoZXNNZXRob2QiLCJnZXROb3JtYWxpemVkRXZlbnRDb29yZHMiLCJldiIsInBhZ2VPZmZzZXQiLCJjbGllbnRSZWN0IiwieCIsInkiLCJkb2N1bWVudFgiLCJkb2N1bWVudFkiLCJ0b3AiLCJub3JtYWxpemVkWSIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIkFDVElWQVRJT05fRVZFTlRfVFlQRVMiLCJQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyIsImFjdGl2YXRlZFRhcmdldHMiLCJNRENSaXBwbGVGb3VuZGF0aW9uIiwiYnJvd3NlclN1cHBvcnRzQ3NzVmFycyIsImlzVW5ib3VuZGVkIiwiaXNTdXJmYWNlQWN0aXZlIiwiaXNTdXJmYWNlRGlzYWJsZWQiLCJjb250YWluc0V2ZW50VGFyZ2V0IiwicmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyUmVzaXplSGFuZGxlciIsImRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwidXBkYXRlQ3NzVmFyaWFibGUiLCJjb21wdXRlQm91bmRpbmdSZWN0IiwiZ2V0V2luZG93UGFnZU9mZnNldCIsImxheW91dEZyYW1lXyIsImZyYW1lXyIsIndpZHRoIiwiaGVpZ2h0IiwiYWN0aXZhdGlvblN0YXRlXyIsImRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfIiwiaW5pdGlhbFNpemVfIiwibWF4UmFkaXVzXyIsImFjdGl2YXRlSGFuZGxlcl8iLCJhY3RpdmF0ZV8iLCJkZWFjdGl2YXRlSGFuZGxlcl8iLCJkZWFjdGl2YXRlXyIsImZvY3VzSGFuZGxlcl8iLCJoYW5kbGVGb2N1cyIsImJsdXJIYW5kbGVyXyIsImhhbmRsZUJsdXIiLCJyZXNpemVIYW5kbGVyXyIsImxheW91dCIsInVuYm91bmRlZENvb3Jkc18iLCJmZ1NjYWxlXyIsImFjdGl2YXRpb25UaW1lcl8iLCJmZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8iLCJhY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfIiwiYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfIiwicnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfIiwicHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfIiwiaXNBY3RpdmF0ZWQiLCJoYXNEZWFjdGl2YXRpb25VWFJ1biIsIndhc0FjdGl2YXRlZEJ5UG9pbnRlciIsIndhc0VsZW1lbnRNYWRlQWN0aXZlIiwiYWN0aXZhdGlvbkV2ZW50IiwiaXNQcm9ncmFtbWF0aWMiLCJzdXBwb3J0c1ByZXNzUmlwcGxlIiwic3VwcG9ydHNQcmVzc1JpcHBsZV8iLCJyZWdpc3RlclJvb3RIYW5kbGVyc18iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsYXlvdXRJbnRlcm5hbF8iLCJjbGVhclRpbWVvdXQiLCJyZW1vdmVDc3NWYXJzXyIsImRlcmVnaXN0ZXJSb290SGFuZGxlcnNfIiwiZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyIsIk9iamVjdCIsImtleXMiLCJrIiwiYWN0aXZhdGlvblN0YXRlIiwicHJldmlvdXNBY3RpdmF0aW9uRXZlbnQiLCJpc1NhbWVJbnRlcmFjdGlvbiIsImhhc0FjdGl2YXRlZENoaWxkIiwicmVzZXRBY3RpdmF0aW9uU3RhdGVfIiwicmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18iLCJjaGVja0VsZW1lbnRNYWRlQWN0aXZlXyIsImFuaW1hdGVBY3RpdmF0aW9uXyIsImV2ZW50IiwidHJhbnNsYXRlU3RhcnQiLCJ0cmFuc2xhdGVFbmQiLCJnZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwicm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfIiwiYWN0aXZhdGlvbkhhc0VuZGVkIiwic3RhdGUiLCJhbmltYXRlRGVhY3RpdmF0aW9uXyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibWF4RGltIiwibWF4IiwiZ2V0Qm91bmRlZFJhZGl1cyIsImh5cG90ZW51c2UiLCJzcXJ0IiwicG93IiwidXBkYXRlTGF5b3V0Q3NzVmFyc18iLCJyb3VuZCIsInVuYm91bmRlZCIsIk1EQ1JpcHBsZSIsInVuYm91bmRlZF8iLCJzZXRVbmJvdW5kZWQiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJjcmVhdGVBZGFwdGVyIiwiZGF0YXNldCIsIkJvb2xlYW4iLCJzZXRVbmJvdW5kZWRfIiwicmlwcGxlIiwiaW5zdGFuY2UiLCJNQVRDSEVTIiwidXRpbCIsIkhUTUxFbGVtZW50IiwicHJvdG90eXBlIiwiY2xhc3NMaXN0IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJSaXBwbGVDYXBhYmxlU3VyZmFjZSIsIlJpcHBsZUJhc2UiLCJyZWYiLCJfbWF0Y2hlcyIsIiRzZXQiLCIkZGVsZXRlIiwic3R5bGVzIiwiUmlwcGxlTWl4aW4iLCJtZGNUZXh0RmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxJQUFJQSxnQkFBSjtJQUVBOzs7Ozs7O0FBTUEsSUFBTyxTQUFTQyxZQUFULEdBQWdFO0lBQUEsTUFBMUNDLFNBQTBDLHVFQUE5QkMsTUFBOEI7SUFBQSxNQUF0QkMsWUFBc0IsdUVBQVAsS0FB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
