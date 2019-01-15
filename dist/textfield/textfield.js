/**
* @module vue-mdc-adaptertextfield 0.19.0-beta
* @exports VueMDCTextfield
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.42.0","material-components-web":"^0.42.1"}
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
    var cssClasses$2 = {
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
          return cssClasses$2;
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
          this.adapter_.removeClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
          this.adapter_.addClass(cssClasses$2.LINE_RIPPLE_ACTIVE);
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
          this.adapter_.addClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
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
          var isDeactivating = this.adapter_.hasClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);

          if (evt.propertyName === 'opacity') {
            if (isDeactivating) {
              this.adapter_.removeClass(cssClasses$2.LINE_RIPPLE_ACTIVE);
              this.adapter_.removeClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
            }
          }
        }
      }]);

      return MDCLineRippleFoundation;
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
    var cssClasses$3 = {
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
          return cssClasses$3;
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
    var strings$3 = {
      NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch'
    };
    /** @enum {number} */

    var numbers$1 = {
      // This should stay in sync with $mdc-notched-outline-padding * 2.
      NOTCH_ELEMENT_PADDING: 8
    };
    /** @enum {string} */

    var cssClasses$4 = {
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
          return strings$3;
        }
        /** @return enum {string} */

      }, {
        key: "cssClasses",
        get: function get() {
          return cssClasses$4;
        }
        /** @return enum {number} */

      }, {
        key: "numbers",
        get: function get() {
          return numbers$1;
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
              setNotchWidthProperty: function setNotchWidthProperty() {}
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
            notchWidth += numbers$1.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
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
          this.adapter_.setNotchWidthProperty(0);
        }
      }]);

      return MDCNotchedOutlineFoundation;
    }(MDCFoundation);

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
    var cssClasses$5 = {
      // Ripple is a special case where the "root" component is really a "mixin" of sorts,
      // given that it's an 'upgrade' to an existing component. That being said it is the root
      // CSS class that all other CSS classes derive from.
      ROOT: 'mdc-ripple-upgraded',
      UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
      BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
      FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
      FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
    };
    var strings$4 = {
      VAR_LEFT: '--mdc-ripple-left',
      VAR_TOP: '--mdc-ripple-top',
      VAR_FG_SIZE: '--mdc-ripple-fg-size',
      VAR_FG_SCALE: '--mdc-ripple-fg-scale',
      VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
      VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
    };
    var numbers$2 = {
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
          return cssClasses$5;
        }
      }, {
        key: "strings",
        get: function get() {
          return strings$4;
        }
      }, {
        key: "numbers",
        get: function get() {
          return numbers$2;
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
            }, numbers$2.FG_DEACTIVATION_MS);
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

    var script$1 = {
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
                const __vue_script__$1 = script$1;
                
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
        component.__file = "/ddata/extra/vma/components/textfield/mdc-textfield.vue";

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
      

      
      var mdcTextField = __vue_normalize__$1(
        { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
        __vue_inject_styles__$1,
        __vue_script__$1,
        __vue_scope_id__$1,
        __vue_is_functional_template__$1,
        __vue_module_identifier__$1,
        undefined,
        undefined
      );

    var plugin = BasePlugin({
      mdcTextField: mdcTextField
    });

    autoInit(plugin);

    return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGZpZWxkLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXBwbHktcGFzc2l2ZS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9hdXRvLWluaXQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYmFzZS1wbHVnaW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWVsZW1lbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWV2ZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1pY29uLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Rpc3BhdGNoLWZvY3VzLW1peGluLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9oZWxwZXItdGV4dC9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaGVscGVyLXRleHQvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaGVscGVyLXRleHQvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2ljb24vYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2ljb24vY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpbmUtcmlwcGxlL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpbmUtcmlwcGxlL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGluZS1yaXBwbGUvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZmxvYXRpbmctbGFiZWwvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZmxvYXRpbmctbGFiZWwvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9ub3RjaGVkLW91dGxpbmUvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLWJhc2UuanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvdGV4dGZpZWxkL21kYy10ZXh0ZmllbGQudnVlIiwiLi4vLi4vY29tcG9uZW50cy90ZXh0ZmllbGQvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3RleHRmaWVsZC9lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc3VwcG9ydHNQYXNzaXZlX1xuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZCBpZiBzbywgdXNlIHRoZW0uXG4gKiBAcGFyYW0geyFXaW5kb3c9fSBnbG9iYWxPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnx7cGFzc2l2ZTogYm9vbGVhbn19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBhc3NpdmUoZ2xvYmFsT2JqID0gd2luZG93LCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBpZiAoc3VwcG9ydHNQYXNzaXZlXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgIGxldCBpc1N1cHBvcnRlZCA9IGZhbHNlXG4gICAgdHJ5IHtcbiAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwge1xuICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICBpc1N1cHBvcnRlZCA9IHsgcGFzc2l2ZTogdHJ1ZSB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy9lbXB0eVxuICAgIH1cblxuICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZFxuICB9XG5cbiAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZV9cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHtcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIGNvbnRleHQucHJvcHMuaXMgfHwgY29udGV4dC5wcm9wcy50YWcgfHwgJ2RpdicsXG4gICAgICBjb250ZXh0LmRhdGEsXG4gICAgICBjb250ZXh0LmNoaWxkcmVuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50TWl4aW4gPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21FbGVtZW50XG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBleHRyYWN0SWNvblByb3AoaWNvblByb3ApIHtcbiAgaWYgKHR5cGVvZiBpY29uUHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3NlczogeyAnbWF0ZXJpYWwtaWNvbnMnOiB0cnVlIH0sXG4gICAgICBjb250ZW50OiBpY29uUHJvcFxuICAgIH1cbiAgfSBlbHNlIGlmIChpY29uUHJvcCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IGljb25Qcm9wLnJlZHVjZShcbiAgICAgICAgKHJlc3VsdCwgdmFsdWUpID0+IE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7IFt2YWx1ZV06IHRydWUgfSksXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBpY29uUHJvcCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3NlczogaWNvblByb3AuY2xhc3NOYW1lXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgKHJlc3VsdCwgdmFsdWUpID0+IE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7IFt2YWx1ZV06IHRydWUgfSksXG4gICAgICAgICAge31cbiAgICAgICAgKSxcbiAgICAgIGNvbnRlbnQ6IGljb25Qcm9wLnRleHRDb250ZW50XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgRGlzcGF0Y2hGb2N1c01peGluID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7IGhhc0ZvY3VzOiBmYWxzZSB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbk1vdXNlRG93bigpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IHRydWVcbiAgICB9LFxuICAgIG9uTW91c2VVcCgpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlXG4gICAgfSxcbiAgICBvbkZvY3VzRXZlbnQoKSB7XG4gICAgICAvLyBkaXNwYXRjaCBhc3luYyB0byBsZXQgdGltZSB0byBvdGhlciBmb2N1cyBldmVudCB0byBwcm9wYWdhdGVcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kaXNwYXRjaEZvY3VzRXZlbnQoKSwgMClcbiAgICB9LFxuICAgIG9uQmx1ckV2ZW50KCkge1xuICAgICAgLy8gZGlzcGF0Y2ggYXN5bmMgdG8gbGV0IHRpbWUgdG8gb3RoZXIgZm9jdXMgZXZlbnQgdG8gcHJvcGFnYXRlXG4gICAgICAvLyBhbHNvIGZpbHR1ciBibHVyIGlmIG1vdXNlZG93blxuICAgICAgdGhpcy5fYWN0aXZlIHx8IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kaXNwYXRjaEZvY3VzRXZlbnQoKSwgMClcbiAgICB9LFxuICAgIGRpc3BhdGNoRm9jdXNFdmVudCgpIHtcbiAgICAgIGxldCBoYXNGb2N1cyA9XG4gICAgICAgIHRoaXMuJGVsID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50IHx8XG4gICAgICAgIHRoaXMuJGVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpXG4gICAgICBpZiAoaGFzRm9jdXMgIT0gdGhpcy5oYXNGb2N1cykge1xuICAgICAgICB0aGlzLiRlbWl0KGhhc0ZvY3VzID8gJ2ZvY3VzJyA6ICdibHVyJylcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGhhc0ZvY3VzXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLm9uRm9jdXNFdmVudClcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMub25CbHVyRXZlbnQpXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bilcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMub25Gb2N1c0V2ZW50KVxuICAgIHRoaXMuJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdGhpcy5vbkJsdXJFdmVudClcbiAgICB0aGlzLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duKVxuICAgIHRoaXMuJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcClcbiAgfVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBBXG4gKi9cbmNsYXNzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVte2Nzc0NsYXNzZXN9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtzdHJpbmdzfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtudW1iZXJzfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshT2JqZWN0fSAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAvLyB2YWxpZGF0aW9uLlxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0E9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyID0ge30pIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUF9ICovXG4gICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRleHQgRmllbGQgSGVscGVyIFRleHQuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGV4dEZpZWxkIGhlbHBlciB0ZXh0IGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENUZXh0RmllbGRIZWxwZXJUZXh0QWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIGEgY2xhc3MgdG8gdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGNsYXNzIGZyb20gdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgaGVscGVyIHRleHQgZWxlbWVudCBjb250YWlucyB0aGUgZ2l2ZW4gY2xhc3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogU2V0cyBhbiBhdHRyaWJ1dGUgd2l0aCBhIGdpdmVuIHZhbHVlIG9uIHRoZSBoZWxwZXIgdGV4dCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHNldEF0dHIoYXR0ciwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gYXR0cmlidXRlIGZyb20gdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyXG4gICAqL1xuICByZW1vdmVBdHRyKGF0dHIpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRleHQgY29udGVudCBmb3IgdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gICAqL1xuICBzZXRDb250ZW50KGNvbnRlbnQpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEhlbHBlclRleHRBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQVJJQV9ISURERU46ICdhcmlhLWhpZGRlbicsXG4gIFJPTEU6ICdyb2xlJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgSEVMUEVSX1RFWFRfUEVSU0lTVEVOVDogJ21kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0LS1wZXJzaXN0ZW50JyxcbiAgSEVMUEVSX1RFWFRfVkFMSURBVElPTl9NU0c6ICdtZGMtdGV4dC1maWVsZC1oZWxwZXItdGV4dC0tdmFsaWRhdGlvbi1tc2cnLFxufTtcblxuZXhwb3J0IHtzdHJpbmdzLCBjc3NDbGFzc2VzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENUZXh0RmllbGRIZWxwZXJUZXh0QWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXI+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuXG4gICAqIHR5cGVzLlxuICAgKiBAcmV0dXJuIHshTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUZXh0RmllbGRIZWxwZXJUZXh0QWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIGhhc0NsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHNldEF0dHI6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQXR0cjogKCkgPT4ge30sXG4gICAgICBzZXRDb250ZW50OiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENUZXh0RmllbGRIZWxwZXJUZXh0QWRhcHRlcn0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjb250ZW50IG9mIHRoZSBoZWxwZXIgdGV4dCBmaWVsZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAgICovXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0Q29udGVudChjb250ZW50KTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IGlzUGVyc2lzdGVudCBTZXRzIHRoZSBwZXJzaXN0ZW5jeSBvZiB0aGUgaGVscGVyIHRleHQuICovXG4gIHNldFBlcnNpc3RlbnQoaXNQZXJzaXN0ZW50KSB7XG4gICAgaWYgKGlzUGVyc2lzdGVudCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1BFUlNJU1RFTlQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfUEVSU0lTVEVOVCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWYWxpZGF0aW9uIFRydWUgdG8gbWFrZSB0aGUgaGVscGVyIHRleHQgYWN0IGFzIGFuXG4gICAqICAgZXJyb3IgdmFsaWRhdGlvbiBtZXNzYWdlLlxuICAgKi9cbiAgc2V0VmFsaWRhdGlvbihpc1ZhbGlkYXRpb24pIHtcbiAgICBpZiAoaXNWYWxpZGF0aW9uKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfVkFMSURBVElPTl9NU0cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfVkFMSURBVElPTl9NU0cpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBNYWtlcyB0aGUgaGVscGVyIHRleHQgdmlzaWJsZSB0byB0aGUgc2NyZWVuIHJlYWRlci4gKi9cbiAgc2hvd1RvU2NyZWVuUmVhZGVyKCkge1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQXR0cihzdHJpbmdzLkFSSUFfSElEREVOKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWxpZGl0eSBvZiB0aGUgaGVscGVyIHRleHQgYmFzZWQgb24gdGhlIGlucHV0IHZhbGlkaXR5LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlucHV0SXNWYWxpZFxuICAgKi9cbiAgc2V0VmFsaWRpdHkoaW5wdXRJc1ZhbGlkKSB7XG4gICAgY29uc3QgaGVscGVyVGV4dElzUGVyc2lzdGVudCA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9QRVJTSVNURU5UKTtcbiAgICBjb25zdCBoZWxwZXJUZXh0SXNWYWxpZGF0aW9uTXNnID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHKTtcbiAgICBjb25zdCB2YWxpZGF0aW9uTXNnTmVlZHNEaXNwbGF5ID0gaGVscGVyVGV4dElzVmFsaWRhdGlvbk1zZyAmJiAhaW5wdXRJc1ZhbGlkO1xuXG4gICAgaWYgKHZhbGlkYXRpb25Nc2dOZWVkc0Rpc3BsYXkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihzdHJpbmdzLlJPTEUsICdhbGVydCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHIoc3RyaW5ncy5ST0xFKTtcbiAgICB9XG5cbiAgICBpZiAoIWhlbHBlclRleHRJc1BlcnNpc3RlbnQgJiYgIXZhbGlkYXRpb25Nc2dOZWVkc0Rpc3BsYXkpIHtcbiAgICAgIHRoaXMuaGlkZV8oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgdGhlIGhlbHAgdGV4dCBmcm9tIHNjcmVlbiByZWFkZXJzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGlkZV8oKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKHN0cmluZ3MuQVJJQV9ISURERU4sICd0cnVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRleHQgRmllbGQgSWNvbi5cbiAqXG4gKiBEZWZpbmVzIHRoZSBzaGFwZSBvZiB0aGUgYWRhcHRlciBleHBlY3RlZCBieSB0aGUgZm91bmRhdGlvbi4gSW1wbGVtZW50IHRoaXNcbiAqIGFkYXB0ZXIgdG8gaW50ZWdyYXRlIHRoZSB0ZXh0IGZpZWxkIGljb24gaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1RleHRGaWVsZEljb25BZGFwdGVyIHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIHZhbHVlIG9mIGFuIGF0dHJpYnV0ZSBvbiB0aGUgaWNvbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXRBdHRyKGF0dHIpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgYW4gYXR0cmlidXRlIG9uIHRoZSBpY29uIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgc2V0QXR0cihhdHRyLCB2YWx1ZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBhdHRyaWJ1dGUgZnJvbSB0aGUgaWNvbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKi9cbiAgcmVtb3ZlQXR0cihhdHRyKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGljb24gZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAgICovXG4gIHNldENvbnRlbnQoY29udGVudCkge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBpY29uIGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEZXJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBvbiB0aGUgaWNvbiBlbGVtZW50IGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhIGN1c3RvbSBldmVudCBcIk1EQ1RleHRGaWVsZDppY29uXCIgZGVub3RpbmcgYSB1c2VyIGhhcyBjbGlja2VkIHRoZSBpY29uLlxuICAgKi9cbiAgbm90aWZ5SWNvbkFjdGlvbigpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEljb25BZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgSUNPTl9FVkVOVDogJ01EQ1RleHRGaWVsZDppY29uJyxcbiAgSUNPTl9ST0xFOiAnYnV0dG9uJyxcbn07XG5cbmV4cG9ydCB7c3RyaW5nc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDVGV4dEZpZWxkSWNvbkFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7c3RyaW5nc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1RleHRGaWVsZEljb25BZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QHNlZSBNRENUZXh0RmllbGRJY29uQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5cbiAgICogdHlwZXMuXG4gICAqIEByZXR1cm4geyFNRENUZXh0RmllbGRJY29uQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RleHRGaWVsZEljb25BZGFwdGVyfSAqLyAoe1xuICAgICAgZ2V0QXR0cjogKCkgPT4ge30sXG4gICAgICBzZXRBdHRyOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUF0dHI6ICgpID0+IHt9LFxuICAgICAgc2V0Q29udGVudDogKCkgPT4ge30sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeUljb25BY3Rpb246ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ1RleHRGaWVsZEljb25BZGFwdGVyfSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtzdHJpbmc/fSAqL1xuICAgIHRoaXMuc2F2ZWRUYWJJbmRleF8gPSBudWxsO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfID0gKGV2dCkgPT4gdGhpcy5oYW5kbGVJbnRlcmFjdGlvbihldnQpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnNhdmVkVGFiSW5kZXhfID0gdGhpcy5hZGFwdGVyXy5nZXRBdHRyKCd0YWJpbmRleCcpO1xuXG4gICAgWydjbGljaycsICdrZXlkb3duJ10uZm9yRWFjaCgoZXZ0VHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCB0aGlzLmludGVyYWN0aW9uSGFuZGxlcl8pO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBbJ2NsaWNrJywgJ2tleWRvd24nXS5mb3JFYWNoKChldnRUeXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IGRpc2FibGVkICovXG4gIHNldERpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgaWYgKCF0aGlzLnNhdmVkVGFiSW5kZXhfKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHIoJ3JvbGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCd0YWJpbmRleCcsIHRoaXMuc2F2ZWRUYWJJbmRleF8pO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCdyb2xlJywgc3RyaW5ncy5JQ09OX1JPTEUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgKi9cbiAgc2V0QXJpYUxhYmVsKGxhYmVsKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50ICovXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0Q29udGVudChjb250ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGFuIGludGVyYWN0aW9uIGV2ZW50XG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZUludGVyYWN0aW9uKGV2dCkge1xuICAgIGlmIChldnQudHlwZSA9PT0gJ2NsaWNrJyB8fCBldnQua2V5ID09PSAnRW50ZXInIHx8IGV2dC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlJY29uQWN0aW9uKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24gZnJvbSAnLi9oZWxwZXItdGV4dC9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiBmcm9tICcuL2ljb24vZm91bmRhdGlvbic7XG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIHZhbHVlOiBzdHJpbmcsXG4gKiAgIGRpc2FibGVkOiBib29sZWFuLFxuICogICBiYWRJbnB1dDogYm9vbGVhbixcbiAqICAgdmFsaWRpdHk6IHtcbiAqICAgICBiYWRJbnB1dDogYm9vbGVhbixcbiAqICAgICB2YWxpZDogYm9vbGVhbixcbiAqICAgfSxcbiAqIH19XG4gKi9cbmxldCBOYXRpdmVJbnB1dFR5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgaGVscGVyVGV4dDogKCFNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbnx1bmRlZmluZWQpLFxuICogICBsZWFkaW5nSWNvbjogKCFNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbnx1bmRlZmluZWQpLFxuICogICB0cmFpbGluZ0ljb246ICghTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb258dW5kZWZpbmVkKSxcbiAqIH19XG4gKi9cbmxldCBGb3VuZGF0aW9uTWFwVHlwZTtcblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgVGV4dCBGaWVsZC5cbiAqXG4gKiBEZWZpbmVzIHRoZSBzaGFwZSBvZiB0aGUgYWRhcHRlciBleHBlY3RlZCBieSB0aGUgZm91bmRhdGlvbi4gSW1wbGVtZW50IHRoaXNcbiAqIGFkYXB0ZXIgdG8gaW50ZWdyYXRlIHRoZSBUZXh0IEZpZWxkIGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENUZXh0RmllbGRBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFkZHMgYSBjbGFzcyB0byB0aGUgcm9vdCBFbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjbGFzcyBmcm9tIHRoZSByb290IEVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSByb290IGVsZW1lbnQgY29udGFpbnMgdGhlIGdpdmVuIGNsYXNzIG5hbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXIgb24gdGhlIHJvb3QgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXIgb24gdGhlIHJvb3QgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBuYXRpdmUgaW5wdXQgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogRGVyZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIG5hdGl2ZSBpbnB1dCBlbGVtZW50IGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIHZhbGlkYXRpb24gYXR0cmlidXRlIGNoYW5nZSBsaXN0ZW5lciBvbiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICogSGFuZGxlciBhY2NlcHRzIGxpc3Qgb2YgYXR0cmlidXRlIG5hbWVzLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFBcnJheTxzdHJpbmc+KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqIEByZXR1cm4geyFNdXRhdGlvbk9ic2VydmVyfVxuICAgKi9cbiAgcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEaXNjb25uZWN0cyBhIHZhbGlkYXRpb24gYXR0cmlidXRlIG9ic2VydmVyIG9uIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBvYnNlcnZlclxuICAgKi9cbiAgZGVyZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyKG9ic2VydmVyKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIG5hdGl2ZSB0ZXh0IGlucHV0IGVsZW1lbnQsIHdpdGggYVxuICAgKiBzaW1pbGFyIEFQSSBzaGFwZS4gVGhlIG9iamVjdCByZXR1cm5lZCBzaG91bGQgaW5jbHVkZSB0aGUgdmFsdWUsIGRpc2FibGVkXG4gICAqIGFuZCBiYWRJbnB1dCBwcm9wZXJ0aWVzLCBhcyB3ZWxsIGFzIHRoZSBjaGVja1ZhbGlkaXR5KCkgZnVuY3Rpb24uIFdlIG5ldmVyXG4gICAqIGFsdGVyIHRoZSB2YWx1ZSB3aXRoaW4gb3VyIGNvZGUsIGhvd2V2ZXIgd2UgZG8gdXBkYXRlIHRoZSBkaXNhYmxlZFxuICAgKiBwcm9wZXJ0eSwgc28gaWYgeW91IGNob29zZSB0byBkdWNrLXR5cGUgdGhlIHJldHVybiB2YWx1ZSBmb3IgdGhpcyBtZXRob2RcbiAgICogaW4geW91ciBpbXBsZW1lbnRhdGlvbiBpdCdzIGltcG9ydGFudCB0byBrZWVwIHRoaXMgaW4gbWluZC4gQWxzbyBub3RlIHRoYXRcbiAgICogdGhpcyBtZXRob2QgY2FuIHJldHVybiBudWxsLCB3aGljaCB0aGUgZm91bmRhdGlvbiB3aWxsIGhhbmRsZSBncmFjZWZ1bGx5LlxuICAgKiBAcmV0dXJuIHs/RWxlbWVudHw/TmF0aXZlSW5wdXRUeXBlfVxuICAgKi9cbiAgZ2V0TmF0aXZlSW5wdXQoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHRleHRmaWVsZCBpcyBmb2N1c2VkLlxuICAgKiBXZSBhY2hpZXZlIHRoaXMgdmlhIGBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLnJvb3RfYC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRm9jdXNlZCgpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgbGluZSByaXBwbGUuXG4gICAqL1xuICBhY3RpdmF0ZUxpbmVSaXBwbGUoKSB7fVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgbGluZSByaXBwbGUuXG4gICAqL1xuICBkZWFjdGl2YXRlTGluZVJpcHBsZSgpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRyYW5zZm9ybSBvcmlnaW4gb2YgdGhlIGxpbmUgcmlwcGxlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbm9ybWFsaXplZFhcbiAgICovXG4gIHNldExpbmVSaXBwbGVUcmFuc2Zvcm1PcmlnaW4obm9ybWFsaXplZFgpIHt9XG5cbiAgLyoqXG4gICAqIE9ubHkgaW1wbGVtZW50IGlmIGxhYmVsIGV4aXN0cy5cbiAgICogU2hha2VzIGxhYmVsIGlmIHNob3VsZFNoYWtlIGlzIHRydWUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkU2hha2VcbiAgICovXG4gIHNoYWtlTGFiZWwoc2hvdWxkU2hha2UpIHt9XG5cbiAgLyoqXG4gICAqIE9ubHkgaW1wbGVtZW50IGlmIGxhYmVsIGV4aXN0cy5cbiAgICogRmxvYXRzIHRoZSBsYWJlbCBhYm92ZSB0aGUgaW5wdXQgZWxlbWVudCBpZiBzaG91bGRGbG9hdCBpcyB0cnVlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZEZsb2F0XG4gICAqL1xuICBmbG9hdExhYmVsKHNob3VsZEZsb2F0KSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgbGFiZWwgZWxlbWVudCBleGlzdHMsIGZhbHNlIGlmIGl0IGRvZXNuJ3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNMYWJlbCgpIHt9XG5cbiAgLyoqXG4gICAqIE9ubHkgaW1wbGVtZW50IGlmIGxhYmVsIGV4aXN0cy5cbiAgICogUmV0dXJucyB3aWR0aCBvZiBsYWJlbCBpbiBwaXhlbHMuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldExhYmVsV2lkdGgoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgb3V0bGluZSBlbGVtZW50IGV4aXN0cywgZmFsc2UgaWYgaXQgZG9lc24ndC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc091dGxpbmUoKSB7fVxuXG4gIC8qKlxuICAgKiBPbmx5IGltcGxlbWVudCBpZiBvdXRsaW5lIGVsZW1lbnQgZXhpc3RzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGFiZWxXaWR0aFxuICAgKi9cbiAgbm90Y2hPdXRsaW5lKGxhYmVsV2lkdGgpIHt9XG5cbiAgLyoqXG4gICAqIE9ubHkgaW1wbGVtZW50IGlmIG91dGxpbmUgZWxlbWVudCBleGlzdHMuXG4gICAqIENsb3NlcyBub3RjaCBpbiBvdXRsaW5lIGVsZW1lbnQuXG4gICAqL1xuICBjbG9zZU91dGxpbmUoKSB7fVxufVxuXG5leHBvcnQge01EQ1RleHRGaWVsZEFkYXB0ZXIsIE5hdGl2ZUlucHV0VHlwZSwgRm91bmRhdGlvbk1hcFR5cGV9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQVJJQV9DT05UUk9MUzogJ2FyaWEtY29udHJvbHMnLFxuICBJTlBVVF9TRUxFQ1RPUjogJy5tZGMtdGV4dC1maWVsZF9faW5wdXQnLFxuICBMQUJFTF9TRUxFQ1RPUjogJy5tZGMtZmxvYXRpbmctbGFiZWwnLFxuICBJQ09OX1NFTEVDVE9SOiAnLm1kYy10ZXh0LWZpZWxkX19pY29uJyxcbiAgT1VUTElORV9TRUxFQ1RPUjogJy5tZGMtbm90Y2hlZC1vdXRsaW5lJyxcbiAgTElORV9SSVBQTEVfU0VMRUNUT1I6ICcubWRjLWxpbmUtcmlwcGxlJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgUk9PVDogJ21kYy10ZXh0LWZpZWxkJyxcbiAgRElTQUJMRUQ6ICdtZGMtdGV4dC1maWVsZC0tZGlzYWJsZWQnLFxuICBERU5TRTogJ21kYy10ZXh0LWZpZWxkLS1kZW5zZScsXG4gIEZPQ1VTRUQ6ICdtZGMtdGV4dC1maWVsZC0tZm9jdXNlZCcsXG4gIElOVkFMSUQ6ICdtZGMtdGV4dC1maWVsZC0taW52YWxpZCcsXG4gIFRFWFRBUkVBOiAnbWRjLXRleHQtZmllbGQtLXRleHRhcmVhJyxcbiAgT1VUTElORUQ6ICdtZGMtdGV4dC1maWVsZC0tb3V0bGluZWQnLFxuICBXSVRIX0xFQURJTkdfSUNPTjogJ21kYy10ZXh0LWZpZWxkLS13aXRoLWxlYWRpbmctaWNvbicsXG59O1xuXG4vKiogQGVudW0ge251bWJlcn0gKi9cbmNvbnN0IG51bWJlcnMgPSB7XG4gIExBQkVMX1NDQUxFOiAwLjc1LFxuICBERU5TRV9MQUJFTF9TQ0FMRTogMC45MjMsXG59O1xuXG4vLyB3aGl0ZWxpc3QgYmFzZWQgb2ZmIG9mIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0d1aWRlL0hUTUwvSFRNTDUvQ29uc3RyYWludF92YWxpZGF0aW9uXG4vLyB1bmRlciBzZWN0aW9uOiBgVmFsaWRhdGlvbi1yZWxhdGVkIGF0dHJpYnV0ZXNgXG5jb25zdCBWQUxJREFUSU9OX0FUVFJfV0hJVEVMSVNUID0gW1xuICAncGF0dGVybicsICdtaW4nLCAnbWF4JywgJ3JlcXVpcmVkJywgJ3N0ZXAnLCAnbWlubGVuZ3RoJywgJ21heGxlbmd0aCcsXG5dO1xuXG4vLyBMYWJlbCBzaG91bGQgYWx3YXlzIGZsb2F0IGZvciB0aGVzZSB0eXBlcyBhcyB0aGV5IHNob3cgc29tZSBVSSBldmVuIGlmIHZhbHVlIGlzIGVtcHR5LlxuY29uc3QgQUxXQVlTX0ZMT0FUX1RZUEVTID0gW1xuICAnY29sb3InLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcsICdtb250aCcsICdyYW5nZScsICd0aW1lJywgJ3dlZWsnLFxuXTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzLCBWQUxJREFUSU9OX0FUVFJfV0hJVEVMSVNULCBBTFdBWVNfRkxPQVRfVFlQRVN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiBmcm9tICcuL2hlbHBlci10ZXh0L2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uIGZyb20gJy4vaWNvbi9mb3VuZGF0aW9uJztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDVGV4dEZpZWxkQWRhcHRlciwgTmF0aXZlSW5wdXRUeXBlLCBGb3VuZGF0aW9uTWFwVHlwZX0gZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVycywgVkFMSURBVElPTl9BVFRSX1dISVRFTElTVCwgQUxXQVlTX0ZMT0FUX1RZUEVTfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1RleHRGaWVsZEFkYXB0ZXI+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1RleHRGaWVsZEZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGdldCBzaG91bGRTaGFrZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNWYWxpZCgpICYmICF0aGlzLmlzRm9jdXNlZF8gJiYgISF0aGlzLmdldFZhbHVlKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldCBzaG91bGRBbHdheXNGbG9hdF8oKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkudHlwZTtcbiAgICByZXR1cm4gQUxXQVlTX0ZMT0FUX1RZUEVTLmluZGV4T2YodHlwZSkgPj0gMDtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgc2hvdWxkRmxvYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hvdWxkQWx3YXlzRmxvYXRfIHx8IHRoaXMuaXNGb2N1c2VkXyB8fCAhIXRoaXMuZ2V0VmFsdWUoKSB8fCB0aGlzLmlzQmFkSW5wdXRfKCk7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDVGV4dEZpZWxkQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5cbiAgICogdHlwZXMuXG4gICAqIEByZXR1cm4geyFNRENUZXh0RmllbGRBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGV4dEZpZWxkQWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIGhhc0NsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyOiAoKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgZ2V0TmF0aXZlSW5wdXQ6ICgpID0+IHt9LFxuICAgICAgaXNGb2N1c2VkOiAoKSA9PiB7fSxcbiAgICAgIGFjdGl2YXRlTGluZVJpcHBsZTogKCkgPT4ge30sXG4gICAgICBkZWFjdGl2YXRlTGluZVJpcHBsZTogKCkgPT4ge30sXG4gICAgICBzZXRMaW5lUmlwcGxlVHJhbnNmb3JtT3JpZ2luOiAoKSA9PiB7fSxcbiAgICAgIHNoYWtlTGFiZWw6ICgpID0+IHt9LFxuICAgICAgZmxvYXRMYWJlbDogKCkgPT4ge30sXG4gICAgICBoYXNMYWJlbDogKCkgPT4ge30sXG4gICAgICBnZXRMYWJlbFdpZHRoOiAoKSA9PiB7fSxcbiAgICAgIGhhc091dGxpbmU6ICgpID0+IHt9LFxuICAgICAgbm90Y2hPdXRsaW5lOiAoKSA9PiB7fSxcbiAgICAgIGNsb3NlT3V0bGluZTogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDVGV4dEZpZWxkQWRhcHRlcn0gYWRhcHRlclxuICAgKiBAcGFyYW0geyFGb3VuZGF0aW9uTWFwVHlwZT19IGZvdW5kYXRpb25NYXAgTWFwIGZyb20gc3ViY29tcG9uZW50IG5hbWVzIHRvIHRoZWlyIHN1YmZvdW5kYXRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciwgZm91bmRhdGlvbk1hcCA9IC8qKiBAdHlwZSB7IUZvdW5kYXRpb25NYXBUeXBlfSAqLyAoe30pKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENUZXh0RmllbGRGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHR5cGUgeyFNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbnx1bmRlZmluZWR9ICovXG4gICAgdGhpcy5oZWxwZXJUZXh0XyA9IGZvdW5kYXRpb25NYXAuaGVscGVyVGV4dDtcbiAgICAvKiogQHR5cGUgeyFNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbnx1bmRlZmluZWR9ICovXG4gICAgdGhpcy5sZWFkaW5nSWNvbl8gPSBmb3VuZGF0aW9uTWFwLmxlYWRpbmdJY29uO1xuICAgIC8qKiBAdHlwZSB7IU1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9ufHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnRyYWlsaW5nSWNvbl8gPSBmb3VuZGF0aW9uTWFwLnRyYWlsaW5nSWNvbjtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzRm9jdXNlZF8gPSBmYWxzZTtcbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5yZWNlaXZlZFVzZXJJbnB1dF8gPSBmYWxzZTtcbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51c2VDdXN0b21WYWxpZGl0eUNoZWNraW5nXyA9IGZhbHNlO1xuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzVmFsaWRfID0gdHJ1ZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLnVzZU5hdGl2ZVZhbGlkYXRpb25fID0gdHJ1ZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oKTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuaW5wdXRGb2N1c0hhbmRsZXJfID0gKCkgPT4gdGhpcy5hY3RpdmF0ZUZvY3VzKCk7XG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbigpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5pbnB1dEJsdXJIYW5kbGVyXyA9ICgpID0+IHRoaXMuZGVhY3RpdmF0ZUZvY3VzKCk7XG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbigpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5pbnB1dElucHV0SGFuZGxlcl8gPSAoKSA9PiB0aGlzLmF1dG9Db21wbGV0ZUZvY3VzKCk7XG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy5zZXRQb2ludGVyWE9mZnNldF8gPSAoZXZ0KSA9PiB0aGlzLnNldFRyYW5zZm9ybU9yaWdpbihldnQpO1xuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMudGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlVGV4dEZpZWxkSW50ZXJhY3Rpb24oKTtcbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFBcnJheSk6IHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyXyA9IChhdHRyaWJ1dGVzTGlzdCkgPT4gdGhpcy5oYW5kbGVWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlKGF0dHJpYnV0ZXNMaXN0KTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IU11dGF0aW9uT2JzZXJ2ZXJ9ICovXG4gICAgdGhpcy52YWxpZGF0aW9uT2JzZXJ2ZXJfO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc0ZvY3VzZWQoKSkge1xuICAgICAgdGhpcy5pbnB1dEZvY3VzSGFuZGxlcl8oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWRhcHRlcl8uaGFzTGFiZWwoKSAmJiB0aGlzLnNob3VsZEZsb2F0KSB7XG4gICAgICB0aGlzLm5vdGNoT3V0bGluZSh0cnVlKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZmxvYXRMYWJlbCh0cnVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5pbnB1dEZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuaW5wdXRCbHVySGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcignaW5wdXQnLCB0aGlzLmlucHV0SW5wdXRIYW5kbGVyXyk7XG4gICAgWydtb3VzZWRvd24nLCAndG91Y2hzdGFydCddLmZvckVhY2goKGV2dFR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCB0aGlzLnNldFBvaW50ZXJYT2Zmc2V0Xyk7XG4gICAgfSk7XG4gICAgWydjbGljaycsICdrZXlkb3duJ10uZm9yRWFjaCgoZXZ0VHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCB0aGlzLnRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMudmFsaWRhdGlvbk9ic2VydmVyXyA9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcih0aGlzLnZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyXyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuaW5wdXRGb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuaW5wdXRCbHVySGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKCdpbnB1dCcsIHRoaXMuaW5wdXRJbnB1dEhhbmRsZXJfKTtcbiAgICBbJ21vdXNlZG93bicsICd0b3VjaHN0YXJ0J10uZm9yRWFjaCgoZXZ0VHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgdGhpcy5zZXRQb2ludGVyWE9mZnNldF8pO1xuICAgIH0pO1xuICAgIFsnY2xpY2snLCAna2V5ZG93biddLmZvckVhY2goKGV2dFR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCB0aGlzLnRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyKHRoaXMudmFsaWRhdGlvbk9ic2VydmVyXyk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB1c2VyIGludGVyYWN0aW9ucyB3aXRoIHRoZSBUZXh0IEZpZWxkLlxuICAgKi9cbiAgaGFuZGxlVGV4dEZpZWxkSW50ZXJhY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uZ2V0TmF0aXZlSW5wdXQoKS5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlY2VpdmVkVXNlcklucHV0XyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB2YWxpZGF0aW9uIGF0dHJpYnV0ZSBjaGFuZ2VzXG4gICAqIEBwYXJhbSB7IUFycmF5PHN0cmluZz59IGF0dHJpYnV0ZXNMaXN0XG4gICAqL1xuICBoYW5kbGVWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlKGF0dHJpYnV0ZXNMaXN0KSB7XG4gICAgYXR0cmlidXRlc0xpc3Quc29tZSgoYXR0cmlidXRlTmFtZSkgPT4ge1xuICAgICAgaWYgKFZBTElEQVRJT05fQVRUUl9XSElURUxJU1QuaW5kZXhPZihhdHRyaWJ1dGVOYW1lKSA+IC0xKSB7XG4gICAgICAgIHRoaXMuc3R5bGVWYWxpZGl0eV8odHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zL2Nsb3NlcyB0aGUgbm90Y2hlZCBvdXRsaW5lLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wZW5Ob3RjaFxuICAgKi9cbiAgbm90Y2hPdXRsaW5lKG9wZW5Ob3RjaCkge1xuICAgIGlmICghdGhpcy5hZGFwdGVyXy5oYXNPdXRsaW5lKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob3Blbk5vdGNoKSB7XG4gICAgICBjb25zdCBpc0RlbnNlID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkRFTlNFKTtcbiAgICAgIGNvbnN0IGxhYmVsU2NhbGUgPSBpc0RlbnNlID8gbnVtYmVycy5ERU5TRV9MQUJFTF9TQ0FMRSA6IG51bWJlcnMuTEFCRUxfU0NBTEU7XG4gICAgICBjb25zdCBsYWJlbFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRMYWJlbFdpZHRoKCkgKiBsYWJlbFNjYWxlO1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RjaE91dGxpbmUobGFiZWxXaWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uY2xvc2VPdXRsaW5lKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgdGV4dCBmaWVsZCBmb2N1cyBzdGF0ZS5cbiAgICovXG4gIGFjdGl2YXRlRm9jdXMoKSB7XG4gICAgdGhpcy5pc0ZvY3VzZWRfID0gdHJ1ZTtcbiAgICB0aGlzLnN0eWxlRm9jdXNlZF8odGhpcy5pc0ZvY3VzZWRfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFjdGl2YXRlTGluZVJpcHBsZSgpO1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0xhYmVsKCkpIHtcbiAgICAgIHRoaXMubm90Y2hPdXRsaW5lKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5mbG9hdExhYmVsKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zaGFrZUxhYmVsKHRoaXMuc2hvdWxkU2hha2UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5oZWxwZXJUZXh0Xykge1xuICAgICAgdGhpcy5oZWxwZXJUZXh0Xy5zaG93VG9TY3JlZW5SZWFkZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgbGluZSByaXBwbGUncyB0cmFuc2Zvcm0gb3JpZ2luLCBzbyB0aGF0IHRoZSBsaW5lIHJpcHBsZSBhY3RpdmF0ZVxuICAgKiBhbmltYXRpb24gd2lsbCBhbmltYXRlIG91dCBmcm9tIHRoZSB1c2VyJ3MgY2xpY2sgbG9jYXRpb24uXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIHNldFRyYW5zZm9ybU9yaWdpbihldnQpIHtcbiAgICBsZXQgdGFyZ2V0RXZlbnQ7XG4gICAgaWYgKGV2dC50b3VjaGVzKSB7XG4gICAgICB0YXJnZXRFdmVudCA9IGV2dC50b3VjaGVzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRFdmVudCA9IGV2dDtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0Q2xpZW50UmVjdCA9IHRhcmdldEV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBub3JtYWxpemVkWCA9IHRhcmdldEV2ZW50LmNsaWVudFggLSB0YXJnZXRDbGllbnRSZWN0LmxlZnQ7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRMaW5lUmlwcGxlVHJhbnNmb3JtT3JpZ2luKG5vcm1hbGl6ZWRYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIFRleHQgRmllbGQncyBmb2N1cyBzdGF0ZSBpbiBjYXNlcyB3aGVuIHRoZSBpbnB1dCB2YWx1ZVxuICAgKiBjaGFuZ2VzIHdpdGhvdXQgdXNlciBpbnB1dCAoZS5nLiBwcm9ncmFtYXRpY2FsbHkpLlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlRm9jdXMoKSB7XG4gICAgaWYgKCF0aGlzLnJlY2VpdmVkVXNlcklucHV0Xykge1xuICAgICAgdGhpcy5hY3RpdmF0ZUZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBUZXh0IEZpZWxkJ3MgZm9jdXMgc3RhdGUuXG4gICAqL1xuICBkZWFjdGl2YXRlRm9jdXMoKSB7XG4gICAgdGhpcy5pc0ZvY3VzZWRfID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5kZWFjdGl2YXRlTGluZVJpcHBsZSgpO1xuICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLmlzVmFsaWQoKTtcbiAgICB0aGlzLnN0eWxlVmFsaWRpdHlfKGlzVmFsaWQpO1xuICAgIHRoaXMuc3R5bGVGb2N1c2VkXyh0aGlzLmlzRm9jdXNlZF8pO1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0xhYmVsKCkpIHtcbiAgICAgIHRoaXMubm90Y2hPdXRsaW5lKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5mbG9hdExhYmVsKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zaGFrZUxhYmVsKHRoaXMuc2hvdWxkU2hha2UpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc2hvdWxkRmxvYXQpIHtcbiAgICAgIHRoaXMucmVjZWl2ZWRVc2VySW5wdXRfID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBFbGVtZW50LlxuICAgKi9cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgb24gdGhlIGlucHV0IEVsZW1lbnQuXG4gICAqL1xuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIC8vIFByZXZlbnQgU2FmYXJpIGZyb20gbW92aW5nIHRoZSBjYXJldCB0byB0aGUgZW5kIG9mIHRoZSBpbnB1dCB3aGVuIHRoZSB2YWx1ZSBoYXMgbm90IGNoYW5nZWQuXG4gICAgaWYgKHRoaXMuZ2V0VmFsdWUoKSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMuaXNWYWxpZCgpO1xuICAgIHRoaXMuc3R5bGVWYWxpZGl0eV8oaXNWYWxpZCk7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzTGFiZWwoKSkge1xuICAgICAgdGhpcy5ub3RjaE91dGxpbmUodGhpcy5zaG91bGRGbG9hdCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmZsb2F0TGFiZWwodGhpcy5zaG91bGRGbG9hdCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNoYWtlTGFiZWwodGhpcy5zaG91bGRTaGFrZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IElmIGEgY3VzdG9tIHZhbGlkaXR5IGlzIHNldCwgcmV0dXJucyB0aGF0IHZhbHVlLlxuICAgKiAgICAgT3RoZXJ3aXNlLCByZXR1cm5zIHRoZSByZXN1bHQgb2YgbmF0aXZlIHZhbGlkaXR5IGNoZWNrcy5cbiAgICovXG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlTmF0aXZlVmFsaWRhdGlvbl9cbiAgICAgID8gdGhpcy5pc05hdGl2ZUlucHV0VmFsaWRfKCkgOiB0aGlzLmlzVmFsaWRfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWYWxpZCBTZXRzIHRoZSB2YWxpZGl0eSBzdGF0ZSBvZiB0aGUgVGV4dCBGaWVsZC5cbiAgICovXG4gIHNldFZhbGlkKGlzVmFsaWQpIHtcbiAgICB0aGlzLmlzVmFsaWRfID0gaXNWYWxpZDtcbiAgICB0aGlzLnN0eWxlVmFsaWRpdHlfKGlzVmFsaWQpO1xuXG4gICAgY29uc3Qgc2hvdWxkU2hha2UgPSAhaXNWYWxpZCAmJiAhdGhpcy5pc0ZvY3VzZWRfO1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0xhYmVsKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2hha2VMYWJlbChzaG91bGRTaGFrZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgdGhlIHVzZSBvZiBuYXRpdmUgdmFsaWRhdGlvbi4gVXNlIHRoaXMgZm9yIGN1c3RvbSB2YWxpZGF0aW9uLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZU5hdGl2ZVZhbGlkYXRpb24gU2V0IHRoaXMgdG8gZmFsc2UgdG8gaWdub3JlIG5hdGl2ZSBpbnB1dCB2YWxpZGF0aW9uLlxuICAgKi9cbiAgc2V0VXNlTmF0aXZlVmFsaWRhdGlvbih1c2VOYXRpdmVWYWxpZGF0aW9uKSB7XG4gICAgdGhpcy51c2VOYXRpdmVWYWxpZGF0aW9uXyA9IHVzZU5hdGl2ZVZhbGlkYXRpb247XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgVGV4dCBGaWVsZCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkuZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZCBTZXRzIHRoZSB0ZXh0LWZpZWxkIGRpc2FibGVkIG9yIGVuYWJsZWQuXG4gICAqL1xuICBzZXREaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICB0aGlzLnN0eWxlRGlzYWJsZWRfKGRpc2FibGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCBTZXRzIHRoZSBjb250ZW50IG9mIHRoZSBoZWxwZXIgdGV4dC5cbiAgICovXG4gIHNldEhlbHBlclRleHRDb250ZW50KGNvbnRlbnQpIHtcbiAgICBpZiAodGhpcy5oZWxwZXJUZXh0Xykge1xuICAgICAgdGhpcy5oZWxwZXJUZXh0Xy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBhcmlhIGxhYmVsIG9mIHRoZSBsZWFkaW5nIGljb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFxuICAgKi9cbiAgc2V0TGVhZGluZ0ljb25BcmlhTGFiZWwobGFiZWwpIHtcbiAgICBpZiAodGhpcy5sZWFkaW5nSWNvbl8pIHtcbiAgICAgIHRoaXMubGVhZGluZ0ljb25fLnNldEFyaWFMYWJlbChsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgbGVhZGluZyBpY29uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICAgKi9cbiAgc2V0TGVhZGluZ0ljb25Db250ZW50KGNvbnRlbnQpIHtcbiAgICBpZiAodGhpcy5sZWFkaW5nSWNvbl8pIHtcbiAgICAgIHRoaXMubGVhZGluZ0ljb25fLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFyaWEgbGFiZWwgb2YgdGhlIHRyYWlsaW5nIGljb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFxuICAgKi9cbiAgc2V0VHJhaWxpbmdJY29uQXJpYUxhYmVsKGxhYmVsKSB7XG4gICAgaWYgKHRoaXMudHJhaWxpbmdJY29uXykge1xuICAgICAgdGhpcy50cmFpbGluZ0ljb25fLnNldEFyaWFMYWJlbChsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgdHJhaWxpbmcgaWNvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAgICovXG4gIHNldFRyYWlsaW5nSWNvbkNvbnRlbnQoY29udGVudCkge1xuICAgIGlmICh0aGlzLnRyYWlsaW5nSWNvbl8pIHtcbiAgICAgIHRoaXMudHJhaWxpbmdJY29uXy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBUZXh0IEZpZWxkIGlucHV0IGZhaWxzIGluIGNvbnZlcnRpbmcgdGhlXG4gICAqICAgICB1c2VyLXN1cHBsaWVkIHZhbHVlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNCYWRJbnB1dF8oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkudmFsaWRpdHkuYmFkSW5wdXQ7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIHJlc3VsdCBvZiBuYXRpdmUgdmFsaWRpdHkgY2hlY2tpbmdcbiAgICogICAgIChWYWxpZGl0eVN0YXRlLnZhbGlkKS5cbiAgICovXG4gIGlzTmF0aXZlSW5wdXRWYWxpZF8oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmF0aXZlSW5wdXRfKCkudmFsaWRpdHkudmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogU3R5bGVzIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIHZhbGlkaXR5IHN0YXRlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmFsaWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0eWxlVmFsaWRpdHlfKGlzVmFsaWQpIHtcbiAgICBjb25zdCB7SU5WQUxJRH0gPSBNRENUZXh0RmllbGRGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoSU5WQUxJRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoSU5WQUxJRCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmhlbHBlclRleHRfKSB7XG4gICAgICB0aGlzLmhlbHBlclRleHRfLnNldFZhbGlkaXR5KGlzVmFsaWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdHlsZXMgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgZm9jdXNlZCBzdGF0ZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc0ZvY3VzZWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0eWxlRm9jdXNlZF8oaXNGb2N1c2VkKSB7XG4gICAgY29uc3Qge0ZPQ1VTRUR9ID0gTURDVGV4dEZpZWxkRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGlmIChpc0ZvY3VzZWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRk9DVVNFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRk9DVVNFRCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0eWxlcyB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBkaXNhYmxlZCBzdGF0ZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc0Rpc2FibGVkXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdHlsZURpc2FibGVkXyhpc0Rpc2FibGVkKSB7XG4gICAgY29uc3Qge0RJU0FCTEVELCBJTlZBTElEfSA9IE1EQ1RleHRGaWVsZEZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhESVNBQkxFRCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKElOVkFMSUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKERJU0FCTEVEKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sZWFkaW5nSWNvbl8pIHtcbiAgICAgIHRoaXMubGVhZGluZ0ljb25fLnNldERpc2FibGVkKGlzRGlzYWJsZWQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRyYWlsaW5nSWNvbl8pIHtcbiAgICAgIHRoaXMudHJhaWxpbmdJY29uXy5zZXREaXNhYmxlZChpc0Rpc2FibGVkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUVsZW1lbnR8IU5hdGl2ZUlucHV0VHlwZX0gVGhlIG5hdGl2ZSB0ZXh0IGlucHV0IGZyb20gdGhlXG4gICAqIGhvc3QgZW52aXJvbm1lbnQsIG9yIGEgZHVtbXkgaWYgbm9uZSBleGlzdHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXROYXRpdmVJbnB1dF8oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uZ2V0TmF0aXZlSW5wdXQoKSB8fFxuICAgIC8qKiBAdHlwZSB7IU5hdGl2ZUlucHV0VHlwZX0gKi8gKHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIHZhbGlkaXR5OiB7XG4gICAgICAgIGJhZElucHV0OiBmYWxzZSxcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRleHRGaWVsZCBMaW5lIFJpcHBsZS5cbiAqXG4gKiBEZWZpbmVzIHRoZSBzaGFwZSBvZiB0aGUgYWRhcHRlciBleHBlY3RlZCBieSB0aGUgZm91bmRhdGlvbi4gSW1wbGVtZW50IHRoaXNcbiAqIGFkYXB0ZXIgdG8gaW50ZWdyYXRlIHRoZSBsaW5lIHJpcHBsZSBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDTGluZVJpcHBsZUFkYXB0ZXIge1xuICAvKipcbiAgICogQWRkcyBhIGNsYXNzIHRvIHRoZSBsaW5lIHJpcHBsZSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjbGFzcyBmcm9tIHRoZSBsaW5lIHJpcHBsZSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgc3R5bGUgcHJvcGVydHkgd2l0aCBwcm9wZXJ0eU5hbWUgdG8gdmFsdWUgb24gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5TmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHNldFN0eWxlKHByb3BlcnR5TmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBvbiB0aGUgbGluZSByaXBwbGUgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyRXZlbnRIYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBsaW5lIHJpcHBsZSBlbGVtZW50IGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckV2ZW50SGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENMaW5lUmlwcGxlQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIExJTkVfUklQUExFX0FDVElWRTogJ21kYy1saW5lLXJpcHBsZS0tYWN0aXZlJyxcbiAgTElORV9SSVBQTEVfREVBQ1RJVkFUSU5HOiAnbWRjLWxpbmUtcmlwcGxlLS1kZWFjdGl2YXRpbmcnLFxufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENMaW5lUmlwcGxlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDTGluZVJpcHBsZUFkYXB0ZXI+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAc2VlIE1EQ0xpbmVSaXBwbGVBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ0xpbmVSaXBwbGVBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDTGluZVJpcHBsZUFkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBoYXNDbGFzczogKCkgPT4ge30sXG4gICAgICBzZXRTdHlsZTogKCkgPT4ge30sXG4gICAgICByZWdpc3RlckV2ZW50SGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyRXZlbnRIYW5kbGVyOiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENMaW5lUmlwcGxlQWRhcHRlcj19IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnRyYW5zaXRpb25FbmRIYW5kbGVyXyA9IChldnQpID0+IHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZChldnQpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy50cmFuc2l0aW9uRW5kSGFuZGxlcl8pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJFdmVudEhhbmRsZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRyYW5zaXRpb25FbmRIYW5kbGVyXyk7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBsaW5lIHJpcHBsZVxuICAgKi9cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkxJTkVfUklQUExFX0RFQUNUSVZBVElORyk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkxJTkVfUklQUExFX0FDVElWRSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY2VudGVyIG9mIHRoZSByaXBwbGUgYW5pbWF0aW9uIHRvIHRoZSBnaXZlbiBYIGNvb3JkaW5hdGUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4Q29vcmRpbmF0ZVxuICAgKi9cbiAgc2V0UmlwcGxlQ2VudGVyKHhDb29yZGluYXRlKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZSgndHJhbnNmb3JtLW9yaWdpbicsIGAke3hDb29yZGluYXRlfXB4IGNlbnRlcmApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBsaW5lIHJpcHBsZVxuICAgKi9cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuTElORV9SSVBQTEVfREVBQ1RJVkFUSU5HKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgdHJhbnNpdGlvbiBlbmQgZXZlbnRcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlVHJhbnNpdGlvbkVuZChldnQpIHtcbiAgICAvLyBXYWl0IGZvciB0aGUgbGluZSByaXBwbGUgdG8gYmUgZWl0aGVyIHRyYW5zcGFyZW50IG9yIG9wYXF1ZVxuICAgIC8vIGJlZm9yZSBlbWl0dGluZyB0aGUgYW5pbWF0aW9uIGVuZCBldmVudFxuICAgIGNvbnN0IGlzRGVhY3RpdmF0aW5nID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkxJTkVfUklQUExFX0RFQUNUSVZBVElORyk7XG5cbiAgICBpZiAoZXZ0LnByb3BlcnR5TmFtZSA9PT0gJ29wYWNpdHknKSB7XG4gICAgICBpZiAoaXNEZWFjdGl2YXRpbmcpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkxJTkVfUklQUExFX0FDVElWRSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5MSU5FX1JJUFBMRV9ERUFDVElWQVRJTkcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENMaW5lUmlwcGxlRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgRmxvYXRpbmcgTGFiZWwuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgZmxvYXRpbmcgbGFiZWwgaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFkZHMgYSBjbGFzcyB0byB0aGUgbGFiZWwgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2xhc3MgZnJvbSB0aGUgbGFiZWwgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aWR0aCBvZiB0aGUgbGFiZWwgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0V2lkdGgoKSB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIHJvb3QgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSByb290IGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgTEFCRUxfRkxPQVRfQUJPVkU6ICdtZGMtZmxvYXRpbmctbGFiZWwtLWZsb2F0LWFib3ZlJyxcbiAgTEFCRUxfU0hBS0U6ICdtZGMtZmxvYXRpbmctbGFiZWwtLXNoYWtlJyxcbiAgUk9PVDogJ21kYy1mbG9hdGluZy1sYWJlbCcsXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXN9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDRmxvYXRpbmdMYWJlbEFkYXB0ZXI+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAc2VlIE1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDRmxvYXRpbmdMYWJlbEFkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBnZXRXaWR0aDogKCkgPT4ge30sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENGbG9hdGluZ0xhYmVsQWRhcHRlcn0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuc2hha2VBbmltYXRpb25FbmRIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlU2hha2VBbmltYXRpb25FbmRfKCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2FuaW1hdGlvbmVuZCcsIHRoaXMuc2hha2VBbmltYXRpb25FbmRIYW5kbGVyXyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYW5pbWF0aW9uZW5kJywgdGhpcy5zaGFrZUFuaW1hdGlvbkVuZEhhbmRsZXJfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB3aWR0aCBvZiB0aGUgbGFiZWwgZWxlbWVudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uZ2V0V2lkdGgoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdHlsZXMgdGhlIGxhYmVsIHRvIHByb2R1Y2UgdGhlIGxhYmVsIHNoYWtlIGZvciBlcnJvcnMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkU2hha2UgYWRkcyBzaGFrZSBjbGFzcyBpZiB0cnVlLFxuICAgKiBvdGhlcndpc2UgcmVtb3ZlcyBzaGFrZSBjbGFzcy5cbiAgICovXG4gIHNoYWtlKHNob3VsZFNoYWtlKSB7XG4gICAgY29uc3Qge0xBQkVMX1NIQUtFfSA9IE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKHNob3VsZFNoYWtlKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKExBQkVMX1NIQUtFKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhMQUJFTF9TSEFLRSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0eWxlcyB0aGUgbGFiZWwgdG8gZmxvYXQgb3IgZG9jay5cbiAgICogQHBhcmFtIHtib29sZWFufSBzaG91bGRGbG9hdCBhZGRzIGZsb2F0IGNsYXNzIGlmIHRydWUsIG90aGVyd2lzZSByZW1vdmVcbiAgICogZmxvYXQgYW5kIHNoYWtlIGNsYXNzIHRvIGRvY2sgbGFiZWwuXG4gICAqL1xuICBmbG9hdChzaG91bGRGbG9hdCkge1xuICAgIGNvbnN0IHtMQUJFTF9GTE9BVF9BQk9WRSwgTEFCRUxfU0hBS0V9ID0gTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBpZiAoc2hvdWxkRmxvYXQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTEFCRUxfRkxPQVRfQUJPVkUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKExBQkVMX0ZMT0FUX0FCT1ZFKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTEFCRUxfU0hBS0UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGFuIGludGVyYWN0aW9uIGV2ZW50IG9uIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBoYW5kbGVTaGFrZUFuaW1hdGlvbkVuZF8oKSB7XG4gICAgY29uc3Qge0xBQkVMX1NIQUtFfSA9IE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhMQUJFTF9TSEFLRSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIE5vdGNoZWQgT3V0bGluZS5cbiAqXG4gKiBEZWZpbmVzIHRoZSBzaGFwZSBvZiB0aGUgYWRhcHRlciBleHBlY3RlZCBieSB0aGUgZm91bmRhdGlvbi4gSW1wbGVtZW50IHRoaXNcbiAqIGFkYXB0ZXIgdG8gaW50ZWdyYXRlIHRoZSBOb3RjaGVkIE91dGxpbmUgaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIGEgY2xhc3MgdG8gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2xhc3MgZnJvbSB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHdpZHRoIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBub3RjaCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAgICovXG4gIHNldE5vdGNoV2lkdGhQcm9wZXJ0eSh3aWR0aCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDTm90Y2hlZE91dGxpbmVBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgTk9UQ0hfRUxFTUVOVF9TRUxFQ1RPUjogJy5tZGMtbm90Y2hlZC1vdXRsaW5lX19ub3RjaCcsXG59O1xuXG4vKiogQGVudW0ge251bWJlcn0gKi9cbmNvbnN0IG51bWJlcnMgPSB7XG4gIC8vIFRoaXMgc2hvdWxkIHN0YXkgaW4gc3luYyB3aXRoICRtZGMtbm90Y2hlZC1vdXRsaW5lLXBhZGRpbmcgKiAyLlxuICBOT1RDSF9FTEVNRU5UX1BBRERJTkc6IDgsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIE9VVExJTkVfTk9UQ0hFRDogJ21kYy1ub3RjaGVkLW91dGxpbmUtLW5vdGNoZWQnLFxuICBPVVRMSU5FX1VQR1JBREVEOiAnbWRjLW5vdGNoZWQtb3V0bGluZS0tdXBncmFkZWQnLFxuICBOT19MQUJFTDogJ21kYy1ub3RjaGVkLW91dGxpbmUtLW5vLWxhYmVsJyxcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5nc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDTm90Y2hlZE91dGxpbmVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDTm90Y2hlZE91dGxpbmVBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge251bWJlcn0gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAc2VlIE1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5cbiAgICogdHlwZXMuXG4gICAqIEByZXR1cm4geyFNRENOb3RjaGVkT3V0bGluZUFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENOb3RjaGVkT3V0bGluZUFkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBzZXROb3RjaFdpZHRoUHJvcGVydHk6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlcn0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgb3V0bGluZSBub3RjaGVkIHNlbGVjdG9yIGFuZCB1cGRhdGVzIHRoZSBub3RjaCB3aWR0aFxuICAgKiBjYWxjdWxhdGVkIGJhc2VkIG9mZiBvZiBub3RjaFdpZHRoLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbm90Y2hXaWR0aFxuICAgKi9cbiAgbm90Y2gobm90Y2hXaWR0aCkge1xuICAgIGNvbnN0IHtPVVRMSU5FX05PVENIRUR9ID0gTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG5cbiAgICBpZiAobm90Y2hXaWR0aCA+IDApIHtcbiAgICAgIG5vdGNoV2lkdGggKz0gbnVtYmVycy5OT1RDSF9FTEVNRU5UX1BBRERJTkc7IC8vIEFkZCBwYWRkaW5nIGZyb20gbGVmdC9yaWdodC5cbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnNldE5vdGNoV2lkdGhQcm9wZXJ0eShub3RjaFdpZHRoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE9VVExJTkVfTk9UQ0hFRCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBub3RjaGVkIG91dGxpbmUgc2VsZWN0b3IgdG8gY2xvc2UgdGhlIG5vdGNoIGluIHRoZSBvdXRsaW5lLlxuICAgKi9cbiAgY2xvc2VOb3RjaCgpIHtcbiAgICBjb25zdCB7T1VUTElORV9OT1RDSEVEfSA9IE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoT1VUTElORV9OT1RDSEVEKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldE5vdGNoV2lkdGhQcm9wZXJ0eSgwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAdGVtcGxhdGUgRlxuICovXG5jbGFzcyBNRENDb21wb25lbnQge1xuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcmV0dXJuIHshTURDQ29tcG9uZW50fVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHdoaWNoIGV4dGVuZCBNRENCYXNlIHNob3VsZCBwcm92aWRlIGFuIGF0dGFjaFRvKCkgbWV0aG9kIHRoYXQgdGFrZXMgYSByb290IGVsZW1lbnQgYW5kXG4gICAgLy8gcmV0dXJucyBhbiBpbnN0YW50aWF0ZWQgY29tcG9uZW50IHdpdGggaXRzIHJvb3Qgc2V0IHRvIHRoYXQgZWxlbWVudC4gQWxzbyBub3RlIHRoYXQgaW4gdGhlIGNhc2VzIG9mXG4gICAgLy8gc3ViY2xhc3NlcywgYW4gZXhwbGljaXQgZm91bmRhdGlvbiBjbGFzcyB3aWxsIG5vdCBoYXZlIHRvIGJlIHBhc3NlZCBpbjsgaXQgd2lsbCBzaW1wbHkgYmUgaW5pdGlhbGl6ZWRcbiAgICAvLyBmcm9tIGdldERlZmF1bHRGb3VuZGF0aW9uKCkuXG4gICAgcmV0dXJuIG5ldyBNRENDb21wb25lbnQocm9vdCwgbmV3IE1EQ0ZvdW5kYXRpb24oKSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcGFyYW0ge0Y9fSBmb3VuZGF0aW9uXG4gICAqIEBwYXJhbSB7Li4uP30gYXJnc1xuICAgKi9cbiAgY29uc3RydWN0b3Iocm9vdCwgZm91bmRhdGlvbiA9IHVuZGVmaW5lZCwgLi4uYXJncykge1xuICAgIC8qKiBAcHJvdGVjdGVkIHshRWxlbWVudH0gKi9cbiAgICB0aGlzLnJvb3RfID0gcm9vdDtcbiAgICB0aGlzLmluaXRpYWxpemUoLi4uYXJncyk7XG4gICAgLy8gTm90ZSB0aGF0IHdlIGluaXRpYWxpemUgZm91bmRhdGlvbiBoZXJlIGFuZCBub3Qgd2l0aGluIHRoZSBjb25zdHJ1Y3RvcidzIGRlZmF1bHQgcGFyYW0gc28gdGhhdFxuICAgIC8vIHRoaXMucm9vdF8gaXMgZGVmaW5lZCBhbmQgY2FuIGJlIHVzZWQgd2l0aGluIHRoZSBmb3VuZGF0aW9uIGNsYXNzLlxuICAgIC8qKiBAcHJvdGVjdGVkIHshRn0gKi9cbiAgICB0aGlzLmZvdW5kYXRpb25fID0gZm91bmRhdGlvbiA9PT0gdW5kZWZpbmVkID8gdGhpcy5nZXREZWZhdWx0Rm91bmRhdGlvbigpIDogZm91bmRhdGlvbjtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmluaXQoKTtcbiAgICB0aGlzLmluaXRpYWxTeW5jV2l0aERPTSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgvKiAuLi5hcmdzICovKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBjYW4gb3ZlcnJpZGUgdGhpcyB0byBkbyBhbnkgYWRkaXRpb25hbCBzZXR1cCB3b3JrIHRoYXQgd291bGQgYmUgY29uc2lkZXJlZCBwYXJ0IG9mIGFcbiAgICAvLyBcImNvbnN0cnVjdG9yXCIuIEVzc2VudGlhbGx5LCBpdCBpcyBhIGhvb2sgaW50byB0aGUgcGFyZW50IGNvbnN0cnVjdG9yIGJlZm9yZSB0aGUgZm91bmRhdGlvbiBpc1xuICAgIC8vIGluaXRpYWxpemVkLiBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgYmVzaWRlcyByb290IGFuZCBmb3VuZGF0aW9uIHdpbGwgYmUgcGFzc2VkIGluIGhlcmUuXG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUZ9IGZvdW5kYXRpb25cbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkIGZvdW5kYXRpb24gY2xhc3MgZm9yIHRoZVxuICAgIC8vIGNvbXBvbmVudC5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSBnZXREZWZhdWx0Rm91bmRhdGlvbiB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkICcgK1xuICAgICAgJ2ZvdW5kYXRpb24gY2xhc3MnKTtcbiAgfVxuXG4gIGluaXRpYWxTeW5jV2l0aERPTSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCBpZiB0aGV5IG5lZWQgdG8gcGVyZm9ybSB3b3JrIHRvIHN5bmNocm9uaXplIHdpdGggYSBob3N0IERPTVxuICAgIC8vIG9iamVjdC4gQW4gZXhhbXBsZSBvZiB0aGlzIHdvdWxkIGJlIGEgZm9ybSBjb250cm9sIHdyYXBwZXIgdGhhdCBuZWVkcyB0byBzeW5jaHJvbml6ZSBpdHMgaW50ZXJuYWwgc3RhdGVcbiAgICAvLyB0byBzb21lIHByb3BlcnR5IG9yIGF0dHJpYnV0ZSBvZiB0aGUgaG9zdCBET00uIFBsZWFzZSBub3RlOiB0aGlzIGlzICpub3QqIHRoZSBwbGFjZSB0byBwZXJmb3JtIERPTVxuICAgIC8vIHJlYWRzL3dyaXRlcyB0aGF0IHdvdWxkIGNhdXNlIGxheW91dCAvIHBhaW50LCBhcyB0aGlzIGlzIGNhbGxlZCBzeW5jaHJvbm91c2x5IGZyb20gd2l0aGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtYXkgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJlbGVhc2UgYW55IHJlc291cmNlcyAvIGRlcmVnaXN0ZXIgYW55IGxpc3RlbmVycyB0aGV5IGhhdmVcbiAgICAvLyBhdHRhY2hlZC4gQW4gZXhhbXBsZSBvZiB0aGlzIG1pZ2h0IGJlIGRlcmVnaXN0ZXJpbmcgYSByZXNpemUgZXZlbnQgZnJvbSB0aGUgd2luZG93IG9iamVjdC5cbiAgICB0aGlzLmZvdW5kYXRpb25fLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIG1ldGhvZCB0byBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudC4gVGhpcyBpcyBtb3N0IHVzZWZ1bCB3aGVuXG4gICAqIGxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGxpc3RlbihldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIHJlbW92ZSBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogdW5saXN0ZW5pbmcgZm9yIGN1c3RvbSBldmVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bmxpc3RlbihldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGEgY3Jvc3MtYnJvd3Nlci1jb21wYXRpYmxlIGN1c3RvbSBldmVudCBmcm9tIHRoZSBjb21wb25lbnQgcm9vdCBvZiB0aGUgZ2l2ZW4gdHlwZSxcbiAgICogd2l0aCB0aGUgZ2l2ZW4gZGF0YS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshT2JqZWN0fSBldnREYXRhXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IHNob3VsZEJ1YmJsZVxuICAgKi9cbiAgZW1pdChldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICAgIGxldCBldnQ7XG4gICAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgICBidWJibGVzOiBzaG91bGRCdWJibGUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpO1xuICAgIH1cblxuICAgIHRoaXMucm9vdF8uZGlzcGF0Y2hFdmVudChldnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0NvbXBvbmVudDtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgUmlwcGxlLiBQcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIG1hbmFnaW5nXG4gKiAtIGNsYXNzZXNcbiAqIC0gZG9tXG4gKiAtIENTUyB2YXJpYWJsZXNcbiAqIC0gcG9zaXRpb25cbiAqIC0gZGltZW5zaW9uc1xuICogLSBzY3JvbGwgcG9zaXRpb25cbiAqIC0gZXZlbnQgaGFuZGxlcnNcbiAqIC0gdW5ib3VuZGVkLCBhY3RpdmUgYW5kIGRpc2FibGVkIHN0YXRlc1xuICpcbiAqIEFkZGl0aW9uYWxseSwgcHJvdmlkZXMgdHlwZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGFkYXB0ZXIgdG8gdGhlIENsb3N1cmVcbiAqIGNvbXBpbGVyLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGFkYXB0ZXIgZm9yIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZSB0byBkZWxlZ2F0ZSB1cGRhdGVzIHRvXG4gKiB0aGUgY29tcG9uZW50IGluIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZS4gU2VlIGFyY2hpdGVjdHVyZSBkb2N1bWVudGF0aW9uXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9jb2RlL2FyY2hpdGVjdHVyZS5tZFxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDUmlwcGxlQWRhcHRlciB7XG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBicm93c2VyU3VwcG9ydHNDc3NWYXJzKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNVbmJvdW5kZWQoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1N1cmZhY2VBY3RpdmUoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1N1cmZhY2VEaXNhYmxlZCgpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHshRXZlbnRUYXJnZXR9IHRhcmdldCAqL1xuICBjb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhck5hbWVcbiAgICogQHBhcmFtIHs/bnVtYmVyfHN0cmluZ30gdmFsdWVcbiAgICovXG4gIHVwZGF0ZUNzc1ZhcmlhYmxlKHZhck5hbWUsIHZhbHVlKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHshQ2xpZW50UmVjdH0gKi9cbiAgY29tcHV0ZUJvdW5kaW5nUmVjdCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19ICovXG4gIGdldFdpbmRvd1BhZ2VPZmZzZXQoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIC8vIFJpcHBsZSBpcyBhIHNwZWNpYWwgY2FzZSB3aGVyZSB0aGUgXCJyb290XCIgY29tcG9uZW50IGlzIHJlYWxseSBhIFwibWl4aW5cIiBvZiBzb3J0cyxcbiAgLy8gZ2l2ZW4gdGhhdCBpdCdzIGFuICd1cGdyYWRlJyB0byBhbiBleGlzdGluZyBjb21wb25lbnQuIFRoYXQgYmVpbmcgc2FpZCBpdCBpcyB0aGUgcm9vdFxuICAvLyBDU1MgY2xhc3MgdGhhdCBhbGwgb3RoZXIgQ1NTIGNsYXNzZXMgZGVyaXZlIGZyb20uXG4gIFJPT1Q6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkJyxcbiAgVU5CT1VOREVEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkJyxcbiAgQkdfRk9DVVNFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZCcsXG4gIEZHX0FDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb24nLFxuICBGR19ERUFDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbicsXG59O1xuXG5jb25zdCBzdHJpbmdzID0ge1xuICBWQVJfTEVGVDogJy0tbWRjLXJpcHBsZS1sZWZ0JyxcbiAgVkFSX1RPUDogJy0tbWRjLXJpcHBsZS10b3AnLFxuICBWQVJfRkdfU0laRTogJy0tbWRjLXJpcHBsZS1mZy1zaXplJyxcbiAgVkFSX0ZHX1NDQUxFOiAnLS1tZGMtcmlwcGxlLWZnLXNjYWxlJyxcbiAgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQnLFxuICBWQVJfRkdfVFJBTlNMQVRFX0VORDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kJyxcbn07XG5cbmNvbnN0IG51bWJlcnMgPSB7XG4gIFBBRERJTkc6IDEwLFxuICBJTklUSUFMX09SSUdJTl9TQ0FMRTogMC42LFxuICBERUFDVElWQVRJT05fVElNRU9VVF9NUzogMjI1LCAvLyBDb3JyZXNwb25kcyB0byAkbWRjLXJpcHBsZS10cmFuc2xhdGUtZHVyYXRpb24gKGkuZS4gYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIEZHX0RFQUNUSVZBVElPTl9NUzogMTUwLCAvLyBDb3JyZXNwb25kcyB0byAkbWRjLXJpcHBsZS1mYWRlLW91dC1kdXJhdGlvbiAoaS5lLiBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIGR1cmF0aW9uKVxuICBUQVBfREVMQVlfTVM6IDMwMCwgLy8gRGVsYXkgYmV0d2VlbiB0b3VjaCBhbmQgc2ltdWxhdGVkIG1vdXNlIGV2ZW50cyBvbiB0b3VjaCBkZXZpY2VzXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIHN1cHBvcnRzQ3NzVmFyaWFibGVzIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBDU1MgY3VzdG9tIHZhcmlhYmxlIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGFwcGx5UGFzc2l2ZSB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3QgcGFzc2l2ZSBldmVudCBsaXN0ZW5lciBzdXBwb3J0LlxuICogQHByaXZhdGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5sZXQgc3VwcG9ydHNQYXNzaXZlXztcblxuLyoqXG4gKiBAcGFyYW0geyFXaW5kb3d9IHdpbmRvd09ialxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopIHtcbiAgLy8gRGV0ZWN0IHZlcnNpb25zIG9mIEVkZ2Ugd2l0aCBidWdneSB2YXIoKSBzdXBwb3J0XG4gIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTE0OTU0NDgvXG4gIGNvbnN0IGRvY3VtZW50ID0gd2luZG93T2JqLmRvY3VtZW50O1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vZGUuY2xhc3NOYW1lID0gJ21kYy1yaXBwbGUtc3VyZmFjZS0tdGVzdC1lZGdlLXZhci1idWcnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gIC8vIFRoZSBidWcgZXhpc3RzIGlmIDo6YmVmb3JlIHN0eWxlIGVuZHMgdXAgcHJvcGFnYXRpbmcgdG8gdGhlIHBhcmVudCBlbGVtZW50LlxuICAvLyBBZGRpdGlvbmFsbHksIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBudWxsIGluIGlmcmFtZXMgd2l0aCBkaXNwbGF5OiBcIm5vbmVcIiBpbiBGaXJlZm94LFxuICAvLyBidXQgRmlyZWZveCBpcyBrbm93biB0byBzdXBwb3J0IENTUyBjdXN0b20gcHJvcGVydGllcyBjb3JyZWN0bHkuXG4gIC8vIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3dPYmouZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgY29uc3QgaGFzUHNldWRvVmFyQnVnID0gY29tcHV0ZWRTdHlsZSAhPT0gbnVsbCAmJiBjb21wdXRlZFN0eWxlLmJvcmRlclRvcFN0eWxlID09PSAnc29saWQnO1xuICBub2RlLnJlbW92ZSgpO1xuICByZXR1cm4gaGFzUHNldWRvVmFyQnVnO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvd09iaiwgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgbGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICBpZiAodHlwZW9mIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9PT0gJ2Jvb2xlYW4nICYmICFmb3JjZVJlZnJlc2gpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG4gIH1cblxuICBjb25zdCBzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCA9IHdpbmRvd09iai5DU1MgJiYgdHlwZW9mIHdpbmRvd09iai5DU1Muc3VwcG9ydHMgPT09ICdmdW5jdGlvbic7XG4gIGlmICghc3VwcG9ydHNGdW5jdGlvblByZXNlbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzID0gd2luZG93T2JqLkNTUy5zdXBwb3J0cygnLS1jc3MtdmFycycsICd5ZXMnKTtcbiAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gIC8vIFNlZTogUkVBRE1FIHNlY3Rpb24gb24gU2FmYXJpXG4gIGNvbnN0IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyA9IChcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCcoLS1jc3MtdmFyczogeWVzKScpICYmXG4gICAgd2luZG93T2JqLkNTUy5zdXBwb3J0cygnY29sb3InLCAnIzAwMDAwMDAwJylcbiAgKTtcblxuICBpZiAoZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyB8fCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9ICFkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaik7XG4gIH0gZWxzZSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICghZm9yY2VSZWZyZXNoKSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXNfID0gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG4gIH1cbiAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xufVxuXG4vL1xuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmQgaWYgc28sIHVzZSB0aGVtLlxuICogQHBhcmFtIHshV2luZG93PX0gZ2xvYmFsT2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58IUV2ZW50TGlzdGVuZXJPcHRpb25zfVxuICovXG5mdW5jdGlvbiBhcHBseVBhc3NpdmUoZ2xvYmFsT2JqID0gd2luZG93LCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBpZiAoc3VwcG9ydHNQYXNzaXZlXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgIGxldCBpc1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIHtnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgaXNTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gaXNTdXBwb3J0ZWQ7XG4gICAgICB9fSk7XG4gICAgfSBjYXRjaCAoZSkgeyB9XG5cbiAgICBzdXBwb3J0c1Bhc3NpdmVfID0gaXNTdXBwb3J0ZWQ7XG4gIH1cblxuICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlX1xuICAgID8gLyoqIEB0eXBlIHshRXZlbnRMaXN0ZW5lck9wdGlvbnN9ICovICh7cGFzc2l2ZTogdHJ1ZX0pXG4gICAgOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IEhUTUxFbGVtZW50UHJvdG90eXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudFByb3RvdHlwZSkge1xuICAvKipcbiAgICogT3JkZXIgaXMgaW1wb3J0YW50IGJlY2F1c2Ugd2UgcmV0dXJuIHRoZSBmaXJzdCBleGlzdGluZyBtZXRob2Qgd2UgZmluZC5cbiAgICogRG8gbm90IGNoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIGl0ZW1zIGluIHRoZSBiZWxvdyBhcnJheS5cbiAgICovXG4gIGNvbnN0IG1hdGNoZXNNZXRob2RzID0gWydtYXRjaGVzJywgJ3dlYmtpdE1hdGNoZXNTZWxlY3RvcicsICdtc01hdGNoZXNTZWxlY3RvciddO1xuICBsZXQgbWV0aG9kID0gJ21hdGNoZXMnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZXNNZXRob2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbWF0Y2hlc01ldGhvZCA9IG1hdGNoZXNNZXRob2RzW2ldO1xuICAgIGlmIChtYXRjaGVzTWV0aG9kIGluIEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gICAgICBtZXRob2QgPSBtYXRjaGVzTWV0aG9kO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ldGhvZDtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFFdmVudH0gZXZcbiAqIEBwYXJhbSB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gcGFnZU9mZnNldFxuICogQHBhcmFtIHshQ2xpZW50UmVjdH0gY2xpZW50UmVjdFxuICogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX1cbiAqL1xuZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGV2LCBwYWdlT2Zmc2V0LCBjbGllbnRSZWN0KSB7XG4gIGNvbnN0IHt4LCB5fSA9IHBhZ2VPZmZzZXQ7XG4gIGNvbnN0IGRvY3VtZW50WCA9IHggKyBjbGllbnRSZWN0LmxlZnQ7XG4gIGNvbnN0IGRvY3VtZW50WSA9IHkgKyBjbGllbnRSZWN0LnRvcDtcblxuICBsZXQgbm9ybWFsaXplZFg7XG4gIGxldCBub3JtYWxpemVkWTtcbiAgLy8gRGV0ZXJtaW5lIHRvdWNoIHBvaW50IHJlbGF0aXZlIHRvIHRoZSByaXBwbGUgY29udGFpbmVyLlxuICBpZiAoZXYudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgZXYgPSAvKiogQHR5cGUgeyFUb3VjaEV2ZW50fSAqLyAoZXYpO1xuICAgIG5vcm1hbGl6ZWRYID0gZXYuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBkb2N1bWVudFg7XG4gICAgbm9ybWFsaXplZFkgPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGRvY3VtZW50WTtcbiAgfSBlbHNlIHtcbiAgICBldiA9IC8qKiBAdHlwZSB7IU1vdXNlRXZlbnR9ICovIChldik7XG4gICAgbm9ybWFsaXplZFggPSBldi5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9XG5cbiAgcmV0dXJuIHt4OiBub3JtYWxpemVkWCwgeTogbm9ybWFsaXplZFl9O1xufVxuXG5leHBvcnQge3N1cHBvcnRzQ3NzVmFyaWFibGVzLCBhcHBseVBhc3NpdmUsIGdldE1hdGNoZXNQcm9wZXJ0eSwgZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENSaXBwbGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7Z2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGlzQWN0aXZhdGVkOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgYWN0aXZhdGlvbkV2ZW50OiAoIUV2ZW50fHVuZGVmaW5lZCksXG4gKiAgIGlzUHJvZ3JhbW1hdGljOiAoYm9vbGVhbnx1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgQWN0aXZhdGlvblN0YXRlVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBkZWFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGZvY3VzOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGJsdXI6IChzdHJpbmd8dW5kZWZpbmVkKVxuICogfX1cbiAqL1xubGV0IExpc3RlbmVySW5mb1R5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgYWN0aXZhdGU6IGZ1bmN0aW9uKCFFdmVudCksXG4gKiAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uKCFFdmVudD0pLFxuICogICBmb2N1czogZnVuY3Rpb24oKSxcbiAqICAgYmx1cjogZnVuY3Rpb24oKVxuICogfX1cbiAqL1xubGV0IExpc3RlbmVyc1R5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgeDogbnVtYmVyLFxuICogICB5OiBudW1iZXJcbiAqIH19XG4gKi9cbmxldCBQb2ludFR5cGU7XG5cbi8vIEFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gdGhlIHJvb3QgZWxlbWVudCBvZiBlYWNoIGluc3RhbmNlIGZvciBhY3RpdmF0aW9uXG5jb25zdCBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gWyd0b3VjaHN0YXJ0JywgJ3BvaW50ZXJkb3duJywgJ21vdXNlZG93bicsICdrZXlkb3duJ107XG5cbi8vIERlYWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiBkb2N1bWVudEVsZW1lbnQgd2hlbiBhIHBvaW50ZXItcmVsYXRlZCBkb3duIGV2ZW50IG9jY3Vyc1xuY29uc3QgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoZW5kJywgJ3BvaW50ZXJ1cCcsICdtb3VzZXVwJywgJ2NvbnRleHRtZW51J107XG5cbi8vIFRyYWNrcyBhY3RpdmF0aW9ucyB0aGF0IGhhdmUgb2NjdXJyZWQgb24gdGhlIGN1cnJlbnQgZnJhbWUsIHRvIGF2b2lkIHNpbXVsdGFuZW91cyBuZXN0ZWQgYWN0aXZhdGlvbnNcbi8qKiBAdHlwZSB7IUFycmF5PCFFdmVudFRhcmdldD59ICovXG5sZXQgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENSaXBwbGVBZGFwdGVyPn1cbiAqL1xuY2xhc3MgTURDUmlwcGxlRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiAvKiBib29sZWFuIC0gY2FjaGVkICovIHt9LFxuICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGFkZENsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiAoLyogdGFyZ2V0OiAhRXZlbnRUYXJnZXQgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKC8qIHZhck5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiAvKiBDbGllbnRSZWN0ICovIHt9LFxuICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4gLyoge3g6IG51bWJlciwgeTogbnVtYmVyfSAqLyB7fSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDUmlwcGxlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHshQ2xpZW50UmVjdH0gKi9cbiAgICB0aGlzLmZyYW1lXyA9IC8qKiBAdHlwZSB7IUNsaWVudFJlY3R9ICovICh7d2lkdGg6IDAsIGhlaWdodDogMH0pO1xuXG4gICAgLyoqIEBwcml2YXRlIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmluaXRpYWxTaXplXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLm1heFJhZGl1c18gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQpfSAqL1xuICAgIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyA9IChlKSA9PiB0aGlzLmFjdGl2YXRlXyhlKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmRlYWN0aXZhdGVfKCk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudD0pfSAqL1xuICAgIHRoaXMuZm9jdXNIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlRm9jdXMoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5ibHVySGFuZGxlcl8gPSAoKSA9PiB0aGlzLmhhbmRsZUJsdXIoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMucmVzaXplSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmxheW91dCgpO1xuXG4gICAgLyoqIEBwcml2YXRlIHt7bGVmdDogbnVtYmVyLCB0b3A6bnVtYmVyfX0gKi9cbiAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgIH07XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmZnU2NhbGVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IHRydWU7XG4gICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgIH07XG5cbiAgICAvKiogQHByaXZhdGUgeyFFdmVudHx1bmRlZmluZWR9ICovXG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gIH1cblxuICAvKipcbiAgICogV2UgY29tcHV0ZSB0aGlzIHByb3BlcnR5IHNvIHRoYXQgd2UgYXJlIG5vdCBxdWVyeWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2xpZW50XG4gICAqIHVudGlsIHRoZSBwb2ludCBpbiB0aW1lIHdoZXJlIHRoZSBmb3VuZGF0aW9uIHJlcXVlc3RzIGl0LiBUaGlzIHByZXZlbnRzIHNjZW5hcmlvcyB3aGVyZVxuICAgKiBjbGllbnQtc2lkZSBmZWF0dXJlLWRldGVjdGlvbiBtYXkgaGFwcGVuIHRvbyBlYXJseSwgc3VjaCBhcyB3aGVuIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXJcbiAgICogYW5kIHRoZW4gaW5pdGlhbGl6ZWQgYXQgbW91bnQgdGltZSBvbiB0aGUgY2xpZW50LlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFBY3RpdmF0aW9uU3RhdGVUeXBlfVxuICAgKi9cbiAgZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZhdGVkOiBmYWxzZSxcbiAgICAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiBmYWxzZSxcbiAgICAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogZmFsc2UsXG4gICAgICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogZmFsc2UsXG4gICAgICBhY3RpdmF0aW9uRXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgIGlzUHJvZ3JhbW1hdGljOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBpbml0KCkge1xuICAgIGNvbnN0IHN1cHBvcnRzUHJlc3NSaXBwbGUgPSB0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKTtcblxuICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoUk9PVCk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZXMgbmVlZCBsYXlvdXQgbG9naWMgYXBwbGllZCBpbW1lZGlhdGVseSB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGJvdGggc2hhZGUgYW5kIHJpcHBsZVxuICAgICAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmF0aW9uVGltZXJfKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1JPT1QsIFVOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFJPT1QpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIHRoaXMucmVtb3ZlQ3NzVmFyc18oKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKTtcbiAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN1cHBvcnRzUHJlc3NSaXBwbGUgUGFzc2VkIGZyb20gaW5pdCB0byBzYXZlIGEgcmVkdW5kYW50IGZ1bmN0aW9uIGNhbGxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnR9IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGUpIHtcbiAgICBpZiAoZS50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKSB7XG4gICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9KTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJlbW92ZUNzc1ZhcnNfKCkge1xuICAgIGNvbnN0IHtzdHJpbmdzfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4gICAgT2JqZWN0LmtleXMoc3RyaW5ncykuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgaWYgKGsuaW5kZXhPZignVkFSXycpID09PSAwKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoc3RyaW5nc1trXSwgbnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnQ9fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhY3RpdmF0ZV8oZSkge1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZURpc2FibGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEF2b2lkIHJlYWN0aW5nIHRvIGZvbGxvdy1vbiBldmVudHMgZmlyZWQgYnkgdG91Y2ggZGV2aWNlIGFmdGVyIGFuIGFscmVhZHktcHJvY2Vzc2VkIHVzZXIgaW50ZXJhY3Rpb25cbiAgICBjb25zdCBwcmV2aW91c0FjdGl2YXRpb25FdmVudCA9IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICAgIGNvbnN0IGlzU2FtZUludGVyYWN0aW9uID0gcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgJiYgZSAhPT0gdW5kZWZpbmVkICYmIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50LnR5cGUgIT09IGUudHlwZTtcbiAgICBpZiAoaXNTYW1lSW50ZXJhY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQgPSB0cnVlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA9IGUgPT09IHVuZGVmaW5lZDtcbiAgICBhY3RpdmF0aW9uU3RhdGUuYWN0aXZhdGlvbkV2ZW50ID0gZTtcbiAgICBhY3RpdmF0aW9uU3RhdGUud2FzQWN0aXZhdGVkQnlQb2ludGVyID0gYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID8gZmFsc2UgOiBlICE9PSB1bmRlZmluZWQgJiYgKFxuICAgICAgZS50eXBlID09PSAnbW91c2Vkb3duJyB8fCBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICdwb2ludGVyZG93bidcbiAgICApO1xuXG4gICAgY29uc3QgaGFzQWN0aXZhdGVkQ2hpbGQgPSBlICE9PSB1bmRlZmluZWQgJiYgYWN0aXZhdGVkVGFyZ2V0cy5sZW5ndGggPiAwICYmIGFjdGl2YXRlZFRhcmdldHMuc29tZShcbiAgICAgICh0YXJnZXQpID0+IHRoaXMuYWRhcHRlcl8uY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpKTtcbiAgICBpZiAoaGFzQWN0aXZhdGVkQ2hpbGQpIHtcbiAgICAgIC8vIEltbWVkaWF0ZWx5IHJlc2V0IGFjdGl2YXRpb24gc3RhdGUsIHdoaWxlIHByZXNlcnZpbmcgbG9naWMgdGhhdCBwcmV2ZW50cyB0b3VjaCBmb2xsb3ctb24gZXZlbnRzXG4gICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFjdGl2YXRlZFRhcmdldHMucHVzaCgvKiogQHR5cGUgeyFFdmVudFRhcmdldH0gKi8gKGUudGFyZ2V0KSk7XG4gICAgICB0aGlzLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGUpO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSk7XG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgLy8gUmVzZXQgYXJyYXkgb24gbmV4dCBmcmFtZSBhZnRlciB0aGUgY3VycmVudCBldmVudCBoYXMgaGFkIGEgY2hhbmNlIHRvIGJ1YmJsZSB0byBwcmV2ZW50IGFuY2VzdG9yIHJpcHBsZXNcbiAgICAgIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcblxuICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgJiYgZSAhPT0gdW5kZWZpbmVkICYmIChlLmtleSA9PT0gJyAnIHx8IGUua2V5Q29kZSA9PT0gMzIpKSB7XG4gICAgICAgIC8vIElmIHNwYWNlIHdhcyBwcmVzc2VkLCB0cnkgYWdhaW4gd2l0aGluIGFuIHJBRiBjYWxsIHRvIGRldGVjdCA6YWN0aXZlLCBiZWNhdXNlIGRpZmZlcmVudCBVQXMgcmVwb3J0XG4gICAgICAgIC8vIGFjdGl2ZSBzdGF0ZXMgaW5jb25zaXN0ZW50bHkgd2hlbiB0aGV5J3JlIGNhbGxlZCB3aXRoaW4gZXZlbnQgaGFuZGxpbmcgY29kZTpcbiAgICAgICAgLy8gLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02MzU5NzFcbiAgICAgICAgLy8gLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjkzNzQxXG4gICAgICAgIC8vIFdlIHRyeSBmaXJzdCBvdXRzaWRlIHJBRiB0byBzdXBwb3J0IEVkZ2UsIHdoaWNoIGRvZXMgbm90IGV4aGliaXQgdGhpcyBwcm9ibGVtLCBidXQgd2lsbCBjcmFzaCBpZiBhIENTU1xuICAgICAgICAvLyB2YXJpYWJsZSBpcyBzZXQgd2l0aGluIGEgckFGIGNhbGxiYWNrIGZvciBhIHN1Ym1pdCBidXR0b24gaW50ZXJhY3Rpb24gKCMyMjQxKS5cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgLy8gUmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSBpbW1lZGlhdGVseSBpZiBlbGVtZW50IHdhcyBub3QgbWFkZSBhY3RpdmUuXG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpIHtcbiAgICByZXR1cm4gKGUgIT09IHVuZGVmaW5lZCAmJiBlLnR5cGUgPT09ICdrZXlkb3duJykgPyB0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZUFjdGl2ZSgpIDogdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGV2ZW50IE9wdGlvbmFsIGV2ZW50IGNvbnRhaW5pbmcgcG9zaXRpb24gaW5mb3JtYXRpb24uXG4gICAqL1xuICBhY3RpdmF0ZShldmVudCkge1xuICAgIHRoaXMuYWN0aXZhdGVfKGV2ZW50KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBhbmltYXRlQWN0aXZhdGlvbl8oKSB7XG4gICAgY29uc3Qge1ZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIFZBUl9GR19UUkFOU0xBVEVfRU5EfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcbiAgICBjb25zdCB7RkdfREVBQ1RJVkFUSU9OLCBGR19BQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBjb25zdCB7REVBQ1RJVkFUSU9OX1RJTUVPVVRfTVN9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzO1xuXG4gICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcblxuICAgIGxldCB0cmFuc2xhdGVTdGFydCA9ICcnO1xuICAgIGxldCB0cmFuc2xhdGVFbmQgPSAnJztcblxuICAgIGlmICghdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICBjb25zdCB7c3RhcnRQb2ludCwgZW5kUG9pbnR9ID0gdGhpcy5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCk7XG4gICAgICB0cmFuc2xhdGVTdGFydCA9IGAke3N0YXJ0UG9pbnQueH1weCwgJHtzdGFydFBvaW50Lnl9cHhgO1xuICAgICAgdHJhbnNsYXRlRW5kID0gYCR7ZW5kUG9pbnQueH1weCwgJHtlbmRQb2ludC55fXB4YDtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIHRyYW5zbGF0ZVN0YXJ0KTtcbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfRU5ELCB0cmFuc2xhdGVFbmQpO1xuICAgIC8vIENhbmNlbCBhbnkgb25nb2luZyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBhbmltYXRpb25zXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcblxuICAgIC8vIEZvcmNlIGxheW91dCBpbiBvcmRlciB0byByZS10cmlnZ2VyIHRoZSBhbmltYXRpb24uXG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfKCksIERFQUNUSVZBVElPTl9USU1FT1VUX01TKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJuIHt7c3RhcnRQb2ludDogUG9pbnRUeXBlLCBlbmRQb2ludDogUG9pbnRUeXBlfX1cbiAgICovXG4gIGdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKSB7XG4gICAgY29uc3Qge2FjdGl2YXRpb25FdmVudCwgd2FzQWN0aXZhdGVkQnlQb2ludGVyfSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcblxuICAgIGxldCBzdGFydFBvaW50O1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIpIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoXG4gICAgICAgIC8qKiBAdHlwZSB7IUV2ZW50fSAqLyAoYWN0aXZhdGlvbkV2ZW50KSxcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5nZXRXaW5kb3dQYWdlT2Zmc2V0KCksIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICB4OiB0aGlzLmZyYW1lXy53aWR0aCAvIDIsXG4gICAgICAgIHk6IHRoaXMuZnJhbWVfLmhlaWdodCAvIDIsXG4gICAgICB9O1xuICAgIH1cbiAgICAvLyBDZW50ZXIgdGhlIGVsZW1lbnQgYXJvdW5kIHRoZSBzdGFydCBwb2ludC5cbiAgICBzdGFydFBvaW50ID0ge1xuICAgICAgeDogc3RhcnRQb2ludC54IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiBzdGFydFBvaW50LnkgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgY29uc3QgZW5kUG9pbnQgPSB7XG4gICAgICB4OiAodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgeTogKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgfTtcblxuICAgIHJldHVybiB7c3RhcnRQb2ludCwgZW5kUG9pbnR9O1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpIHtcbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYm90aCB3aGVuIGEgcG9pbnRpbmcgZGV2aWNlIGlzIHJlbGVhc2VkLCBhbmQgd2hlbiB0aGUgYWN0aXZhdGlvbiBhbmltYXRpb24gZW5kcy5cbiAgICAvLyBUaGUgZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBzaG91bGQgb25seSBydW4gYWZ0ZXIgYm90aCBvZiB0aG9zZSBvY2N1ci5cbiAgICBjb25zdCB7RkdfREVBQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBjb25zdCB7aGFzRGVhY3RpdmF0aW9uVVhSdW4sIGlzQWN0aXZhdGVkfSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBjb25zdCBhY3RpdmF0aW9uSGFzRW5kZWQgPSBoYXNEZWFjdGl2YXRpb25VWFJ1biB8fCAhaXNBY3RpdmF0ZWQ7XG5cbiAgICBpZiAoYWN0aXZhdGlvbkhhc0VuZGVkICYmIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXykge1xuICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIH0sIG51bWJlcnMuRkdfREVBQ1RJVkFUSU9OX01TKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCkge1xuICAgIGNvbnN0IHtGR19BQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICB9XG5cbiAgcmVzZXRBY3RpdmF0aW9uU3RhdGVfKCkge1xuICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmFjdGl2YXRpb25FdmVudDtcbiAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgLy8gVG91Y2ggZGV2aWNlcyBtYXkgZmlyZSBhZGRpdGlvbmFsIGV2ZW50cyBmb3IgdGhlIHNhbWUgaW50ZXJhY3Rpb24gd2l0aGluIGEgc2hvcnQgdGltZS5cbiAgICAvLyBTdG9yZSB0aGUgcHJldmlvdXMgZXZlbnQgdW50aWwgaXQncyBzYWZlIHRvIGFzc3VtZSB0aGF0IHN1YnNlcXVlbnQgZXZlbnRzIGFyZSBmb3IgbmV3IGludGVyYWN0aW9ucy5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdW5kZWZpbmVkLCBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuVEFQX0RFTEFZX01TKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVhY3RpdmF0ZV8oKSB7XG4gICAgY29uc3QgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBzY2VuYXJpb3Mgc3VjaCBhcyB3aGVuIHlvdSBoYXZlIGEga2V5dXAgZXZlbnQgdGhhdCBibHVycyB0aGUgZWxlbWVudC5cbiAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlID0gLyoqIEB0eXBlIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gKi8gKE9iamVjdC5hc3NpZ24oe30sIGFjdGl2YXRpb25TdGF0ZSkpO1xuXG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYykge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpKTtcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmhhc0RlYWN0aXZhdGlvblVYUnVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7XG4gICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZGVhY3RpdmF0ZV8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFBY3RpdmF0aW9uU3RhdGVUeXBlfSBvcHRpb25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhbmltYXRlRGVhY3RpdmF0aW9uXyh7d2FzQWN0aXZhdGVkQnlQb2ludGVyLCB3YXNFbGVtZW50TWFkZUFjdGl2ZX0pIHtcbiAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyIHx8IHdhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgIH1cbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICB9XG4gICAgdGhpcy5sYXlvdXRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBsYXlvdXRJbnRlcm5hbF8oKSB7XG4gICAgdGhpcy5mcmFtZV8gPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICBjb25zdCBtYXhEaW0gPSBNYXRoLm1heCh0aGlzLmZyYW1lXy5oZWlnaHQsIHRoaXMuZnJhbWVfLndpZHRoKTtcblxuICAgIC8vIFN1cmZhY2UgZGlhbWV0ZXIgaXMgdHJlYXRlZCBkaWZmZXJlbnRseSBmb3IgdW5ib3VuZGVkIHZzLiBib3VuZGVkIHJpcHBsZXMuXG4gICAgLy8gVW5ib3VuZGVkIHJpcHBsZSBkaWFtZXRlciBpcyBjYWxjdWxhdGVkIHNtYWxsZXIgc2luY2UgdGhlIHN1cmZhY2UgaXMgZXhwZWN0ZWQgdG8gYWxyZWFkeSBiZSBwYWRkZWQgYXBwcm9wcmlhdGVseVxuICAgIC8vIHRvIGV4dGVuZCB0aGUgaGl0Ym94LCBhbmQgdGhlIHJpcHBsZSBpcyBleHBlY3RlZCB0byBtZWV0IHRoZSBlZGdlcyBvZiB0aGUgcGFkZGVkIGhpdGJveCAod2hpY2ggaXMgdHlwaWNhbGx5XG4gICAgLy8gc3F1YXJlKS4gQm91bmRlZCByaXBwbGVzLCBvbiB0aGUgb3RoZXIgaGFuZCwgYXJlIGZ1bGx5IGV4cGVjdGVkIHRvIGV4cGFuZCBiZXlvbmQgdGhlIHN1cmZhY2UncyBsb25nZXN0IGRpYW1ldGVyXG4gICAgLy8gKGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGRpYWdvbmFsIHBsdXMgYSBjb25zdGFudCBwYWRkaW5nKSwgYW5kIGFyZSBjbGlwcGVkIGF0IHRoZSBzdXJmYWNlJ3MgYm9yZGVyIHZpYVxuICAgIC8vIGBvdmVyZmxvdzogaGlkZGVuYC5cbiAgICBjb25zdCBnZXRCb3VuZGVkUmFkaXVzID0gKCkgPT4ge1xuICAgICAgY29uc3QgaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdyh0aGlzLmZyYW1lXy53aWR0aCwgMikgKyBNYXRoLnBvdyh0aGlzLmZyYW1lXy5oZWlnaHQsIDIpKTtcbiAgICAgIHJldHVybiBoeXBvdGVudXNlICsgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlBBRERJTkc7XG4gICAgfTtcblxuICAgIHRoaXMubWF4UmFkaXVzXyA9IHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSA/IG1heERpbSA6IGdldEJvdW5kZWRSYWRpdXMoKTtcblxuICAgIC8vIFJpcHBsZSBpcyBzaXplZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiBvZiB0aGUgc3VyZmFjZSwgdGhlbiBzY2FsZXMgdXAgdXNpbmcgYSBDU1Mgc2NhbGUgdHJhbnNmb3JtXG4gICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBNYXRoLmZsb29yKG1heERpbSAqIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5JTklUSUFMX09SSUdJTl9TQ0FMRSk7XG4gICAgdGhpcy5mZ1NjYWxlXyA9IHRoaXMubWF4UmFkaXVzXyAvIHRoaXMuaW5pdGlhbFNpemVfO1xuXG4gICAgdGhpcy51cGRhdGVMYXlvdXRDc3NWYXJzXygpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHVwZGF0ZUxheW91dENzc1ZhcnNfKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIFZBUl9GR19TSVpFLCBWQVJfTEVGVCwgVkFSX1RPUCwgVkFSX0ZHX1NDQUxFLFxuICAgIH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TSVpFLCBgJHt0aGlzLmluaXRpYWxTaXplX31weGApO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NDQUxFLCB0aGlzLmZnU2NhbGVfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgICAgbGVmdDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0xFRlQsIGAke3RoaXMudW5ib3VuZGVkQ29vcmRzXy5sZWZ0fXB4YCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9UT1AsIGAke3RoaXMudW5ib3VuZGVkQ29vcmRzXy50b3B9cHhgKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0VW5ib3VuZGVkKHVuYm91bmRlZCkge1xuICAgIGNvbnN0IHtVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGlmICh1bmJvdW5kZWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZvY3VzKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG5cbiAgaGFuZGxlQmx1cigpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCBNRENSaXBwbGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDUmlwcGxlRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEBleHRlbmRzIE1EQ0NvbXBvbmVudDwhTURDUmlwcGxlRm91bmRhdGlvbj5cbiAqL1xuY2xhc3MgTURDUmlwcGxlIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqIEBwYXJhbSB7Li4uP30gYXJncyAqL1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMudW5ib3VuZGVkXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7e2lzVW5ib3VuZGVkOiAoYm9vbGVhbnx1bmRlZmluZWQpfT19IG9wdGlvbnNcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZX1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290LCB7aXNVbmJvdW5kZWQgPSB1bmRlZmluZWR9ID0ge30pIHtcbiAgICBjb25zdCByaXBwbGUgPSBuZXcgTURDUmlwcGxlKHJvb3QpO1xuICAgIC8vIE9ubHkgb3ZlcnJpZGUgdW5ib3VuZGVkIGJlaGF2aW9yIGlmIG9wdGlvbiBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxuICAgIGlmIChpc1VuYm91bmRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByaXBwbGUudW5ib3VuZGVkID0gLyoqIEB0eXBlIHtib29sZWFufSAqLyAoaXNVbmJvdW5kZWQpO1xuICAgIH1cbiAgICByZXR1cm4gcmlwcGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IVJpcHBsZUNhcGFibGVTdXJmYWNlfSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVBZGFwdGVyKGluc3RhbmNlKSB7XG4gICAgY29uc3QgTUFUQ0hFUyA9IHV0aWwuZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4gdXRpbC5zdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpLFxuICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IGluc3RhbmNlLnVuYm91bmRlZCxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gaW5zdGFuY2Uucm9vdF9bTUFUQ0hFU10oJzphY3RpdmUnKSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiBpbnN0YW5jZS5kaXNhYmxlZCxcbiAgICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgY29udGFpbnNFdmVudFRhcmdldDogKHRhcmdldCkgPT4gaW5zdGFuY2Uucm9vdF8uY29udGFpbnModGFyZ2V0KSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgaW5zdGFuY2Uucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IChoYW5kbGVyKSA9PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IGluc3RhbmNlLnJvb3RfLnN0eWxlLnNldFByb3BlcnR5KHZhck5hbWUsIHZhbHVlKSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IGluc3RhbmNlLnJvb3RfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4gKHt4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldH0pLFxuICAgIH07XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgZ2V0IHVuYm91bmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdW5ib3VuZGVkICovXG4gIHNldCB1bmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgdGhpcy51bmJvdW5kZWRfID0gQm9vbGVhbih1bmJvdW5kZWQpO1xuICAgIHRoaXMuc2V0VW5ib3VuZGVkXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3N1cmUgQ29tcGlsZXIgdGhyb3dzIGFuIGFjY2VzcyBjb250cm9sIGVycm9yIHdoZW4gZGlyZWN0bHkgYWNjZXNzaW5nIGFcbiAgICogcHJvdGVjdGVkIG9yIHByaXZhdGUgcHJvcGVydHkgaW5zaWRlIGEgZ2V0dGVyL3NldHRlciwgbGlrZSB1bmJvdW5kZWQgYWJvdmUuXG4gICAqIEJ5IGFjY2Vzc2luZyB0aGUgcHJvdGVjdGVkIHByb3BlcnR5IGluc2lkZSBhIG1ldGhvZCwgd2Ugc29sdmUgdGhhdCBwcm9ibGVtLlxuICAgKiBUaGF0J3Mgd2h5IHRoaXMgZnVuY3Rpb24gZXhpc3RzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0VW5ib3VuZGVkXygpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldFVuYm91bmRlZCh0aGlzLnVuYm91bmRlZF8pO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5hY3RpdmF0ZSgpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmRlYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmxheW91dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVGb3VuZGF0aW9ufVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDUmlwcGxlRm91bmRhdGlvbihNRENSaXBwbGUuY3JlYXRlQWRhcHRlcih0aGlzKSk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGluaXRpYWxTeW5jV2l0aERPTSgpIHtcbiAgICB0aGlzLnVuYm91bmRlZCA9ICdtZGNSaXBwbGVJc1VuYm91bmRlZCcgaW4gdGhpcy5yb290Xy5kYXRhc2V0O1xuICB9XG59XG5cbi8qKlxuICogU2VlIE1hdGVyaWFsIERlc2lnbiBzcGVjIGZvciBtb3JlIGRldGFpbHMgb24gd2hlbiB0byB1c2UgcmlwcGxlcy5cbiAqIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9tb3Rpb24vY2hvcmVvZ3JhcGh5Lmh0bWwjY2hvcmVvZ3JhcGh5LWNyZWF0aW9uXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIFJpcHBsZUNhcGFibGVTdXJmYWNlIHt9XG5cbi8qKiBAcHJvdGVjdGVkIHshRWxlbWVudH0gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS5yb290XztcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgcmlwcGxlIGJsZWVkcyBvdXQgb2YgdGhlIGJvdW5kcyBvZiB0aGUgZWxlbWVudC5cbiAqIEB0eXBlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLnVuYm91bmRlZDtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgcmlwcGxlIGlzIGF0dGFjaGVkIHRvIGEgZGlzYWJsZWQgY29tcG9uZW50LlxuICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUuZGlzYWJsZWQ7XG5cbmV4cG9ydCB7TURDUmlwcGxlLCBNRENSaXBwbGVGb3VuZGF0aW9uLCBSaXBwbGVDYXBhYmxlU3VyZmFjZSwgdXRpbH07XG4iLCJpbXBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9pbmRleCdcbmltcG9ydCB7XG4gIHN1cHBvcnRzQ3NzVmFyaWFibGVzLFxuICBnZXRNYXRjaGVzUHJvcGVydHksXG4gIGFwcGx5UGFzc2l2ZVxufSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL3V0aWwnXG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVCYXNlIGV4dGVuZHMgTURDUmlwcGxlRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgTUFUQ0hFUygpIHtcbiAgICAvKiBnbG9iYWwgSFRNTEVsZW1lbnQgKi9cbiAgICByZXR1cm4gKFxuICAgICAgUmlwcGxlQmFzZS5fbWF0Y2hlcyB8fFxuICAgICAgKFJpcHBsZUJhc2UuX21hdGNoZXMgPSBnZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKSlcbiAgICApXG4gIH1cblxuICBzdGF0aWMgaXNTdXJmYWNlQWN0aXZlKHJlZikge1xuICAgIHJldHVybiByZWZbUmlwcGxlQmFzZS5NQVRDSEVTXSgnOmFjdGl2ZScpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcih2bSwgb3B0aW9ucykge1xuICAgIHN1cGVyKFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1VuYm91bmRlZDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWxbUmlwcGxlQmFzZS5NQVRDSEVTXSgnOmFjdGl2ZScpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2bS4kZGVsZXRlKHZtLmNsYXNzZXMsIGNsYXNzTmFtZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IHRhcmdldCA9PiB2bS4kZWwuY29udGFpbnModGFyZ2V0KSxcbiAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHZtLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKHZhck5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2bS4kc2V0KHZtLnN0eWxlcywgdmFyTmFtZSwgdmFsdWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyB4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBSaXBwbGVNaXhpbiA9IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMucmlwcGxlID0gbmV3IFJpcHBsZUJhc2UodGhpcylcbiAgICB0aGlzLnJpcHBsZS5pbml0KClcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnJpcHBsZS5kZXN0cm95KClcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICA8Y3VzdG9tLWVsZW1lbnQgXG4gICAgOnRhZz1cInRhZ1wiIFxuICAgIDpjbGFzc2VzPVwiY2xhc3Nlc1wiXG4gICAgOnN0eWxlcz1cInN0eWxlc1wiIFxuICAgIGNsYXNzPVwibWRjLXJpcHBsZVwiPlxuICAgIDxzbG90IC8+XG4gIDwvY3VzdG9tLWVsZW1lbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudE1peGluIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IFJpcHBsZU1peGluIH0gZnJvbSAnLi9tZGMtcmlwcGxlLWJhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1yaXBwbGUnLFxuICBtaXhpbnM6IFtDdXN0b21FbGVtZW50TWl4aW4sIFJpcHBsZU1peGluXSxcbiAgcHJvcHM6IHtcbiAgICB0YWc6IFN0cmluZ1xuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIDpzdHlsZT1cInsgd2lkdGg6IGZ1bGx3aWR0aCA/ICcxMDAlJyA6IHVuZGVmaW5lZCB9XCJcbiAgICA6aWQ9XCJpZFwiXG4gICAgY2xhc3M9XCJtZGMtdGV4dGZpZWxkLXdyYXBwZXJcIlxuICA+XG4gICAgPGRpdiByZWY9XCJyb290XCIgOmNsYXNzPVwicm9vdENsYXNzZXNcIj5cbiAgICAgIDxpXG4gICAgICAgIHYtaWY9XCIhIWhhc0xlYWRpbmdJY29uXCJcbiAgICAgICAgcmVmPVwibGVhZGluZ0ljb25cIlxuICAgICAgICA6Y2xhc3M9XCJoYXNMZWFkaW5nSWNvbi5jbGFzc2VzXCJcbiAgICAgICAgOnRhYmluZGV4PVwibGVhZGluZ1RhYmluZGV4XCJcbiAgICAgICAgOnJvbGU9XCJsZWFkaW5nUm9sZVwiXG4gICAgICAgIGNsYXNzPVwibWRjLXRleHQtZmllbGRfX2ljb25cIlxuICAgICAgPlxuICAgICAgICA8c2xvdCBuYW1lPVwibGVhZGluZy1pY29uXCI+e3sgaGFzTGVhZGluZ0ljb24uY29udGVudCB9fTwvc2xvdD5cbiAgICAgIDwvaT5cblxuICAgICAgPCEtLVxuICAgICAgICB3b3JrYXJyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3JvbGx1cC1wbHVnaW4tdnVlL2lzc3Vlcy8xNzRcbiAgICAgIC0tPlxuICAgICAgPCEtLSBlc2xpbnQtZGlzYWJsZSB2dWUvaHRtbC1zZWxmLWNsb3NpbmcgLS0+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgdi1pZj1cIm11bHRpbGluZVwiXG4gICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgdi1iaW5kPVwiJGF0dHJzXCJcbiAgICAgICAgOmlkPVwidm1hX3VpZF9cIlxuICAgICAgICA6Y2xhc3M9XCJpbnB1dENsYXNzZXNcIlxuICAgICAgICA6bWlubGVuZ3RoPVwibWlubGVuZ3RoXCJcbiAgICAgICAgOm1heGxlbmd0aD1cIm1heGxlbmd0aFwiXG4gICAgICAgIDpwbGFjZWhvbGRlcj1cImlucHV0UGxhY2VIb2xkZXJcIlxuICAgICAgICA6YXJpYS1sYWJlbD1cImlucHV0UGxhY2VIb2xkZXJcIlxuICAgICAgICA6YXJpYS1jb250cm9scz1cImlucHV0QXJpYUNvbnRyb2xzXCJcbiAgICAgICAgOnJvd3M9XCJyb3dzXCJcbiAgICAgICAgOmNvbHM9XCJjb2xzXCJcbiAgICAgICAgdi1vbj1cIiRsaXN0ZW5lcnNcIlxuICAgICAgICBAaW5wdXQ9XCJ1cGRhdGVWYWx1ZSgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICA+PC90ZXh0YXJlYT5cblxuICAgICAgPGlucHV0XG4gICAgICAgIHYtZWxzZVxuICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgIHYtYmluZD1cIiRhdHRyc1wiXG4gICAgICAgIDppZD1cInZtYV91aWRfXCJcbiAgICAgICAgOmNsYXNzPVwiaW5wdXRDbGFzc2VzXCJcbiAgICAgICAgOnR5cGU9XCJ0eXBlXCJcbiAgICAgICAgOm1pbmxlbmd0aD1cIm1pbmxlbmd0aFwiXG4gICAgICAgIDptYXhsZW5ndGg9XCJtYXhsZW5ndGhcIlxuICAgICAgICA6cGxhY2Vob2xkZXI9XCJpbnB1dFBsYWNlSG9sZGVyXCJcbiAgICAgICAgOmFyaWEtbGFiZWw9XCJpbnB1dFBsYWNlSG9sZGVyXCJcbiAgICAgICAgOmFyaWEtY29udHJvbHM9XCJpbnB1dEFyaWFDb250cm9sc1wiXG4gICAgICAgIHYtb249XCIkbGlzdGVuZXJzXCJcbiAgICAgICAgQGlucHV0PVwidXBkYXRlVmFsdWUoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgLz5cblxuICAgICAgPGxhYmVsXG4gICAgICAgIHYtaWY9XCJoYXNMYWJlbFwiXG4gICAgICAgIHJlZj1cImxhYmVsXCJcbiAgICAgICAgOmNsYXNzPVwibGFiZWxDbGFzc2VzVXBncmFkZWRcIlxuICAgICAgICA6Zm9yPVwidm1hX3VpZF9cIlxuICAgICAgPlxuICAgICAgICB7eyBsYWJlbCB9fVxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGlcbiAgICAgICAgdi1pZj1cIiEhaGFzVHJhaWxpbmdJY29uXCJcbiAgICAgICAgcmVmPVwidHJhaWxpbmdJY29uXCJcbiAgICAgICAgOmNsYXNzPVwiaGFzVHJhaWxpbmdJY29uLmNsYXNzZXNcIlxuICAgICAgICA6dGFiaW5kZXg9XCJ0cmFpbGluZ1RhYmluZGV4XCJcbiAgICAgICAgOnJvbGU9XCJ0cmFpbGluZ1JvbGVcIlxuICAgICAgICBjbGFzcz1cIm1kYy10ZXh0LWZpZWxkX19pY29uXCJcbiAgICAgID5cbiAgICAgICAgPHNsb3QgbmFtZT1cInRyYWlsaW5nLWljb25cIj57eyBoYXNUcmFpbGluZ0ljb24uY29udGVudCB9fTwvc2xvdD5cbiAgICAgIDwvaT5cblxuICAgICAgPGRpdlxuICAgICAgICB2LWlmPVwiaGFzT3V0bGluZVwiXG4gICAgICAgIHJlZj1cIm91dGxpbmVcIlxuICAgICAgICA6Y2xhc3M9XCJvdXRsaW5lQ2xhc3Nlc1wiXG4gICAgICAgIGNsYXNzPVwibWRjLW5vdGNoZWQtb3V0bGluZVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtbm90Y2hlZC1vdXRsaW5lX19sZWFkaW5nXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgOnN0eWxlPVwibm90Y2hTdHlsZXNcIiBjbGFzcz1cIm1kYy1ub3RjaGVkLW91dGxpbmVfX25vdGNoXCI+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICB2LWlmPVwiaGFzT3V0bGluZUxhYmVsXCJcbiAgICAgICAgICAgIHJlZj1cImxhYmVsLW91dGxpbmVcIlxuICAgICAgICAgICAgOmNsYXNzPVwibGFiZWxDbGFzc2VzVXBncmFkZWRcIlxuICAgICAgICAgICAgOmZvcj1cInZtYV91aWRfXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBsYWJlbCB9fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWRjLWZsb2F0aW5nLWxhYmVsXCI+PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtbm90Y2hlZC1vdXRsaW5lX190cmFpbGluZ1wiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8IS0tIDxkaXZcbiAgICAgICAgdi1pZj1cImhhc091dGxpbmVcIlxuICAgICAgICByZWY9XCJvdXRsaW5lSWRsZVwiXG4gICAgICAgIGNsYXNzPVwibWRjLW5vdGNoZWQtb3V0bGluZV9faWRsZVwiXG4gICAgICAvPiAtLT5cbiAgICAgIDxkaXZcbiAgICAgICAgdi1pZj1cImhhc0xpbmVSaXBwbGVcIlxuICAgICAgICByZWY9XCJsaW5lUmlwcGxlXCJcbiAgICAgICAgOmNsYXNzPVwibGluZVJpcHBsZUNsYXNzZXNcIlxuICAgICAgICA6c3R5bGU9XCJsaW5lUmlwcGxlU3R5bGVzXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8cFxuICAgICAgdi1pZj1cImhlbHB0ZXh0XCJcbiAgICAgIHJlZj1cImhlbHBcIlxuICAgICAgOmlkPVwiJ2hlbHAtJyArIHZtYV91aWRfXCJcbiAgICAgIDpjbGFzcz1cImhlbHBDbGFzc2VzXCJcbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgPlxuICAgICAge3sgaGVscHRleHQgfX1cbiAgICA8L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENUZXh0ZmllbGRGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC90ZXh0ZmllbGQvZm91bmRhdGlvbidcbmltcG9ydCBNRENMaW5lUmlwcGxlRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvbGluZS1yaXBwbGUvZm91bmRhdGlvbidcbmltcG9ydCBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvdGV4dGZpZWxkL2hlbHBlci10ZXh0L2ZvdW5kYXRpb24nXG5pbXBvcnQgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL3RleHRmaWVsZC9pY29uL2ZvdW5kYXRpb24nXG5pbXBvcnQgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Zsb2F0aW5nLWxhYmVsL2ZvdW5kYXRpb24nXG5pbXBvcnQgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9ub3RjaGVkLW91dGxpbmUvZm91bmRhdGlvbidcblxuaW1wb3J0IHtcbiAgZXh0cmFjdEljb25Qcm9wLFxuICBEaXNwYXRjaEZvY3VzTWl4aW4sXG4gIEN1c3RvbUVsZW1lbnRNaXhpbixcbiAgVk1BVW5pcXVlSWRNaXhpbixcbiAgYXBwbHlQYXNzaXZlXG59IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgeyBSaXBwbGVCYXNlIH0gZnJvbSAnLi4vcmlwcGxlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtdGV4dGZpZWxkJyxcbiAgbWl4aW5zOiBbQ3VzdG9tRWxlbWVudE1peGluLCBEaXNwYXRjaEZvY3VzTWl4aW4sIFZNQVVuaXF1ZUlkTWl4aW5dLFxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuICBtb2RlbDoge1xuICAgIHByb3A6ICd2YWx1ZScsXG4gICAgZXZlbnQ6ICdtb2RlbCdcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICB2YWx1ZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndGV4dCcsXG4gICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgW1xuICAgICAgICAgICAgJ3RleHQnLFxuICAgICAgICAgICAgJ2VtYWlsJyxcbiAgICAgICAgICAgICdzZWFyY2gnLFxuICAgICAgICAgICAgJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICd0ZWwnLFxuICAgICAgICAgICAgJ3VybCcsXG4gICAgICAgICAgICAnbnVtYmVyJ1xuICAgICAgICAgIF0uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgaGVscHRleHQ6IFN0cmluZyxcbiAgICBoZWxwdGV4dFBlcnNpc3RlbnQ6IEJvb2xlYW4sXG4gICAgaGVscHRleHRWYWxpZGF0aW9uOiBCb29sZWFuLFxuICAgIG91dGxpbmU6IEJvb2xlYW4sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgcmVxdWlyZWQ6IEJvb2xlYW4sXG4gICAgdmFsaWQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXG4gICAgZnVsbHdpZHRoOiBCb29sZWFuLFxuICAgIG11bHRpbGluZTogQm9vbGVhbixcbiAgICBsZWFkaW5nSWNvbjogW1N0cmluZywgQXJyYXksIE9iamVjdF0sXG4gICAgdHJhaWxpbmdOb25JbnRlcmFjdGl2ZTogQm9vbGVhbixcbiAgICBsZWFkaW5nTm9uSW50ZXJhY3RpdmU6IEJvb2xlYW4sXG4gICAgdHJhaWxpbmdJY29uOiBbU3RyaW5nLCBBcnJheSwgT2JqZWN0XSxcbiAgICBzaXplOiB7IHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sIGRlZmF1bHQ6IDIwIH0sXG4gICAgbWlubGVuZ3RoOiB7IHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxuICAgIG1heGxlbmd0aDogeyB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcbiAgICByb3dzOiB7IHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sIGRlZmF1bHQ6IDggfSxcbiAgICBjb2xzOiB7IHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sIGRlZmF1bHQ6IDQwIH0sXG4gICAgaWQ6IHsgdHlwZTogU3RyaW5nIH1cbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IHRoaXMudmFsdWUsXG4gICAgICByb290Q2xhc3Nlczoge1xuICAgICAgICAnbWRjLXRleHRmaWVsZCc6IHRydWUsXG4gICAgICAgICdtZGMtdGV4dC1maWVsZCc6IHRydWUsXG4gICAgICAgICdtZGMtdGV4dC1maWVsZC0tdXBncmFkZWQnOiB0cnVlLFxuICAgICAgICAnbWRjLXRleHQtZmllbGQtLWRpc2FibGVkJzogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgJ21kYy10ZXh0LWZpZWxkLS1kZW5zZSc6IHRoaXMuZGVuc2UsXG4gICAgICAgICdtZGMtdGV4dC1maWVsZC0tZnVsbHdpZHRoJzogdGhpcy5mdWxsd2lkdGgsXG4gICAgICAgICdtZGMtdGV4dC1maWVsZC0tdGV4dGFyZWEnOiB0aGlzLm11bHRpbGluZSxcbiAgICAgICAgJ21kYy10ZXh0LWZpZWxkLS1vdXRsaW5lZCc6ICF0aGlzLmZ1bGx3aWR0aCAmJiB0aGlzLm91dGxpbmVcbiAgICAgIH0sXG4gICAgICBpbnB1dENsYXNzZXM6IHtcbiAgICAgICAgJ21kYy10ZXh0LWZpZWxkX19pbnB1dCc6IHRydWVcbiAgICAgIH0sXG4gICAgICBsYWJlbENsYXNzZXM6IHtcbiAgICAgICAgJ21kYy1mbG9hdGluZy1sYWJlbCc6IHRydWVcbiAgICAgIH0sXG4gICAgICBsaW5lUmlwcGxlQ2xhc3Nlczoge1xuICAgICAgICAnbWRjLWxpbmUtcmlwcGxlJzogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGxpbmVSaXBwbGVTdHlsZXM6IHt9LFxuICAgICAgaGVscENsYXNzZXM6IHtcbiAgICAgICAgJ21kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0JzogdHJ1ZSxcbiAgICAgICAgJ21kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0LS1wZXJzaXN0ZW50JzogdGhpcy5oZWxwdGV4dFBlcnNpc3RlbnQsXG4gICAgICAgICdtZGMtdGV4dC1maWVsZC1oZWxwZXItdGV4dC0tdmFsaWRhdGlvbi1tc2cnOiB0aGlzLmhlbHB0ZXh0VmFsaWRhdGlvblxuICAgICAgfSxcbiAgICAgIG91dGxpbmVDbGFzc2VzOiB7fSxcbiAgICAgIG5vdGNoU3R5bGVzOiB7fVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsZWFkaW5nVGFiaW5kZXgoKSB7XG4gICAgICBpZiAoIXRoaXMubGVhZGluZ05vbkludGVyYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiAnMCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbGVhZGluZ1JvbGUoKSB7XG4gICAgICBpZiAoIXRoaXMubGVhZGluZ05vbkludGVyYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiAnYnV0dG9uJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICB0cmFpbGluZ1RhYmluZGV4KCkge1xuICAgICAgaWYgKCF0aGlzLnRyYWlsaW5nTm9uSW50ZXJhY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuICcwJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICB0cmFpbGluZ1JvbGUoKSB7XG4gICAgICBpZiAoIXRoaXMudHJhaWxpbmdOb25JbnRlcmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gJ2J1dHRvbidcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0UGxhY2VIb2xkZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5mdWxsd2lkdGggPyB0aGlzLmxhYmVsIDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBpbnB1dEFyaWFDb250cm9scygpIHtcbiAgICAgIHJldHVybiB0aGlzLmhlbHAgPyAnaGVscC0nICsgdGhpcy52bWFfdWlkXyA6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgaGFzTGFiZWwoKSB7XG4gICAgICByZXR1cm4gIXRoaXMuZnVsbHdpZHRoICYmICF0aGlzLm91dGxpbmUgJiYgdGhpcy5sYWJlbFxuICAgIH0sXG5cbiAgICBoYXNPdXRsaW5lTGFiZWwoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNPdXRsaW5lICYmIHRoaXMubGFiZWxcbiAgICB9LFxuICAgIGhhc091dGxpbmUoKSB7XG4gICAgICByZXR1cm4gIXRoaXMuZnVsbHdpZHRoICYmIHRoaXMub3V0bGluZVxuICAgIH0sXG4gICAgaGFzTGluZVJpcHBsZSgpIHtcbiAgICAgIHJldHVybiAhdGhpcy5oYXNPdXRsaW5lICYmICF0aGlzLm11bHRpbGluZVxuICAgIH0sXG4gICAgaGFzTGVhZGluZ0ljb24oKSB7XG4gICAgICBpZiAodGhpcy5sZWFkaW5nSWNvbiB8fCB0aGlzLiRzbG90c1snbGVhZGluZy1pY29uJ10pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVhZGluZ0ljb24gPyBleHRyYWN0SWNvblByb3AodGhpcy5sZWFkaW5nSWNvbikgOiB7fVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSxcbiAgICBoYXNUcmFpbGluZ0ljb24oKSB7XG4gICAgICBpZiAodGhpcy50cmFpbGluZ0ljb24gfHwgdGhpcy4kc2xvdHNbJ3RyYWlsaW5nLWljb24nXSkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFpbGluZ0ljb24gPyBleHRyYWN0SWNvblByb3AodGhpcy50cmFpbGluZ0ljb24pIDoge31cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0sXG4gICAgbGFiZWxDbGFzc2VzVXBncmFkZWQoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLmxhYmVsQ2xhc3Nlcywge1xuICAgICAgICAnbWRjLWZsb2F0aW5nLWxhYmVsLS1mbG9hdC1hYm92ZSc6IHRoaXMudmFsdWVcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGRpc2FibGVkKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uICYmIHRoaXMuZm91bmRhdGlvbi5zZXREaXNhYmxlZCh0aGlzLmRpc2FibGVkKVxuICAgIH0sXG4gICAgcmVxdWlyZWQoKSB7XG4gICAgICB0aGlzLiRyZWZzLmlucHV0ICYmICh0aGlzLiRyZWZzLmlucHV0LnJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZClcbiAgICB9LFxuICAgIHZhbGlkKCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnZhbGlkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24gJiYgdGhpcy5mb3VuZGF0aW9uLnNldFZhbGlkKHRoaXMudmFsaWQpXG4gICAgICB9XG4gICAgfSxcbiAgICBkZW5zZSgpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLnJvb3RDbGFzc2VzLCAnbWRjLXRleHQtZmllbGQtLWRlbnNlJywgdGhpcy5kZW5zZSlcbiAgICB9LFxuICAgIGhlbHB0ZXh0UGVyc2lzdGVudCgpIHtcbiAgICAgIHRoaXMuaGVscGVyVGV4dEZvdW5kYXRpb24gJiZcbiAgICAgICAgdGhpcy5oZWxwZXJUZXh0Rm91bmRhdGlvbi5zZXRQZXJzaXN0ZW50KHRoaXMuaGVscHRleHRQZXJzaXN0ZW50KVxuICAgIH0sXG4gICAgaGVscHRleHRWYWxpZGF0aW9uKCkge1xuICAgICAgdGhpcy5oZWxwZXJUZXh0Rm91bmRhdGlvbiAmJlxuICAgICAgICB0aGlzLmhlbHBlclRleHRGb3VuZGF0aW9uLnNldFZhbGlkYXRpb24odGhpcy5oZWxwdGV4dFZhbGlkYXRpb24pXG4gICAgfSxcbiAgICB2YWx1ZSh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuZm91bmRhdGlvbikge1xuICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuZm91bmRhdGlvbi5nZXRWYWx1ZSgpKSB7XG4gICAgICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldFZhbHVlKHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGlmICh0aGlzLiRyZWZzLmxpbmVSaXBwbGUpIHtcbiAgICAgIHRoaXMubGluZVJpcHBsZUZvdW5kYXRpb24gPSBuZXcgTURDTGluZVJpcHBsZUZvdW5kYXRpb24oe1xuICAgICAgICBhZGRDbGFzczogY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICB0aGlzLiRzZXQodGhpcy5saW5lUmlwcGxlQ2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKVxuICAgICAgICB9LFxuICAgICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICB0aGlzLiRkZWxldGUodGhpcy5saW5lUmlwcGxlQ2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICB9LFxuICAgICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICB0aGlzLiRyZWZzLmxpbmVSaXBwbGUuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgICAgICAgfSxcbiAgICAgICAgc2V0U3R5bGU6IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmxpbmVSaXBwbGVTdHlsZXMsIG5hbWUsIHZhbHVlKVxuICAgICAgICB9LFxuICAgICAgICByZWdpc3RlckV2ZW50SGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICB0aGlzLiRyZWZzLmxpbmVSaXBwbGUuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKVxuICAgICAgICB9LFxuICAgICAgICBkZXJlZ2lzdGVyRXZlbnRIYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgIHRoaXMuJHJlZnMubGluZVJpcHBsZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLmxpbmVSaXBwbGVGb3VuZGF0aW9uLmluaXQoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLiRyZWZzLmhlbHApIHtcbiAgICAgIHRoaXMuaGVscGVyVGV4dEZvdW5kYXRpb24gPSBuZXcgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24oe1xuICAgICAgICBhZGRDbGFzczogY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICB0aGlzLiRzZXQodGhpcy5oZWxwQ2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKVxuICAgICAgICB9LFxuICAgICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICB0aGlzLiRkZWxldGUodGhpcy5oZWxwQ2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICB9LFxuICAgICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5oZWxwLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXG4gICAgICAgIH0sXG4gICAgICAgIHNldEF0dHI6IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMuJHJlZnMuaGVscC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUF0dHI6IG5hbWUgPT4ge1xuICAgICAgICAgIHRoaXMuJHJlZnMuaGVscC5yZW1vdmVBdHRyaWJ1dGUobmFtZSlcbiAgICAgICAgfSxcbiAgICAgICAgc2V0Q29udGVudDogKC8qY29udGVudCovKSA9PiB7XG4gICAgICAgICAgLy8gaGVscCB0ZXh0IGdldCdzIHVwZGF0ZWQgZnJvbSB7e2hlbHB0ZXh0fX1cbiAgICAgICAgICAvLyB0aGlzLiRyZWZzLmhlbHAudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy5oZWxwZXJUZXh0Rm91bmRhdGlvbi5pbml0KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNMZWFkaW5nSWNvbikge1xuICAgICAgdGhpcy4kc2V0KHRoaXMucm9vdENsYXNzZXMsICdtZGMtdGV4dC1maWVsZC0td2l0aC1sZWFkaW5nLWljb24nLCB0cnVlKVxuICAgICAgdGhpcy5sZWFkaW5nSWNvbkZvdW5kYXRpb24gPSBuZXcgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24oe1xuICAgICAgICBzZXRBdHRyOiAoYXR0ciwgdmFsdWUpID0+XG4gICAgICAgICAgdGhpcy4kcmVmcy5sZWFkaW5nSWNvbi5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpLFxuICAgICAgICBnZXRBdHRyOiBhdHRyID0+IHRoaXMuJHJlZnMubGVhZGluZ0ljb24uZ2V0QXR0cmlidXRlKGF0dHIpLFxuICAgICAgICByZW1vdmVBdHRyOiBhdHRyID0+IHRoaXMuJHJlZnMubGVhZGluZ0ljb24ucmVtb3ZlQXR0cmlidXRlKGF0dHIpLFxuICAgICAgICBzZXRDb250ZW50OiAoLypjb250ZW50Ki8pID0+IHtcbiAgICAgICAgICAvLyBpY29uIHRleHQgZ2V0J3MgdXBkYXRlZCBmcm9tIHt7e3sgaGFzVHJhaWxpbmdJY29uLmNvbnRlbnQgfX19fVxuICAgICAgICAgIC8vIHRoaXMuJHJlZnMuaWNvbi50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgIHRoaXMuJHJlZnMubGVhZGluZ0ljb24uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKVxuICAgICAgICB9LFxuICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgIHRoaXMuJHJlZnMubGVhZGluZ0ljb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKVxuICAgICAgICB9LFxuICAgICAgICBub3RpZnlJY29uQWN0aW9uOiAoKSA9PiB0aGlzLiRlbWl0KCdsZWFkaW5naWNvbi1hY3Rpb24nKVxuICAgICAgfSlcbiAgICAgIHRoaXMubGVhZGluZ0ljb25Gb3VuZGF0aW9uLmluaXQoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc1RyYWlsaW5nSWNvbikge1xuICAgICAgdGhpcy4kc2V0KHRoaXMucm9vdENsYXNzZXMsICdtZGMtdGV4dC1maWVsZC0td2l0aC10cmFpbGluZy1pY29uJywgdHJ1ZSlcbiAgICAgIHRoaXMudHJhaWxpbmdJY29uRm91bmRhdGlvbiA9IG5ldyBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbih7XG4gICAgICAgIHNldEF0dHI6IChhdHRyLCB2YWx1ZSkgPT5cbiAgICAgICAgICB0aGlzLiRyZWZzLnRyYWlsaW5nSWNvbi5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpLFxuICAgICAgICBnZXRBdHRyOiBhdHRyID0+IHRoaXMuJHJlZnMudHJhaWxpbmdJY29uLmdldEF0dHJpYnV0ZShhdHRyKSxcbiAgICAgICAgcmVtb3ZlQXR0cjogYXR0ciA9PiB0aGlzLiRyZWZzLnRyYWlsaW5nSWNvbi5yZW1vdmVBdHRyaWJ1dGUoYXR0ciksXG4gICAgICAgIHNldENvbnRlbnQ6ICgvKmNvbnRlbnQqLykgPT4ge1xuICAgICAgICAgIC8vIGljb24gdGV4dCBnZXQncyB1cGRhdGVkIGZyb20ge3t7eyBoYXNUcmFpbGluZ0ljb24uY29udGVudCB9fX19XG4gICAgICAgICAgLy8gdGhpcy4kcmVmcy5pY29uLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgdGhpcy4kcmVmcy50cmFpbGluZ0ljb24uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKVxuICAgICAgICB9LFxuICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgIHRoaXMuJHJlZnMudHJhaWxpbmdJY29uLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcilcbiAgICAgICAgfSxcbiAgICAgICAgbm90aWZ5SWNvbkFjdGlvbjogKCkgPT4gdGhpcy4kZW1pdCgndHJhaW5saW5naWNvbi1hY3Rpb24nKVxuICAgICAgfSlcbiAgICAgIHRoaXMudHJhaWxpbmdJY29uRm91bmRhdGlvbi5pbml0KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy4kcmVmcy5sYWJlbCB8fCB0aGlzLiRyZWZzWydsYWJlbC1vdXRsaW5lJ10pIHtcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy4kcmVmcy5sYWJlbCB8fCB0aGlzLiRyZWZzWydsYWJlbC1vdXRsaW5lJ11cbiAgICAgIHRoaXMubGFiZWxGb3VuZGF0aW9uID0gbmV3IE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uKHtcbiAgICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgICAgdGhpcy4kc2V0KHRoaXMubGFiZWxDbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICAgIHRoaXMuJGRlbGV0ZSh0aGlzLmxhYmVsQ2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICB9LFxuICAgICAgICBnZXRXaWR0aDogKCkgPT4gbGFiZWwub2Zmc2V0V2lkdGgsXG4gICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcilcbiAgICAgICAgfSxcbiAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICBsYWJlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLmxhYmVsRm91bmRhdGlvbi5pbml0KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy4kcmVmcy5vdXRsaW5lKSB7XG4gICAgICB0aGlzLm91dGxpbmVGb3VuZGF0aW9uID0gbmV3IE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbih7XG4gICAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICAgIHRoaXMuJHNldCh0aGlzLm91dGxpbmVDbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICAgIHRoaXMuJGRlbGV0ZSh0aGlzLm91dGxpbmVDbGFzc2VzLCBjbGFzc05hbWUpXG4gICAgICAgIH0sXG4gICAgICAgIHNldE5vdGNoV2lkdGhQcm9wZXJ0eTogd2lkdGggPT5cbiAgICAgICAgICB0aGlzLiRzZXQodGhpcy5ub3RjaFN0eWxlcywgJ3dpZHRoJywgd2lkdGggPiAwID8gd2lkdGggKyAncHgnIDogJzAnKVxuICAgICAgfSlcbiAgICAgIHRoaXMub3V0bGluZUZvdW5kYXRpb24uaW5pdCgpXG4gICAgfVxuXG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ1RleHRmaWVsZEZvdW5kYXRpb24oXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5yb290Q2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRkZWxldGUodGhpcy5yb290Q2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGFzQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLnJvb3QuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5yb290LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLnJvb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNGb2N1c2VkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy4kcmVmcy5pbnB1dFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNSdGw6ICgpID0+XG4gICAgICAgICAgICB3aW5kb3dcbiAgICAgICAgICAgICAgLmdldENvbXB1dGVkU3R5bGUodGhpcy4kcmVmcy5yb290KVxuICAgICAgICAgICAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgPT09ICdydGwnLFxuXG4gICAgICAgICAgcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgICAgICBjb25zdCBnZXRBdHRyaWJ1dGVzTGlzdCA9IG11dGF0aW9uc0xpc3QgPT5cbiAgICAgICAgICAgICAgbXV0YXRpb25zTGlzdC5tYXAobXV0YXRpb24gPT4gbXV0YXRpb24uYXR0cmlidXRlTmFtZSlcbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zTGlzdCA9PlxuICAgICAgICAgICAgICBoYW5kbGVyKGdldEF0dHJpYnV0ZXNMaXN0KG11dGF0aW9uc0xpc3QpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMuJHJlZnMuaW5wdXRcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSB9XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIGNvbmZpZylcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZlclxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyOiBvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuZ2V0SW5wdXRBZGFwdGVyTWV0aG9kcygpLFxuICAgICAgICB0aGlzLmdldExhYmVsQWRhcHRlck1ldGhvZHMoKSxcbiAgICAgICAgdGhpcy5nZXRMaW5lUmlwcGxlQWRhcHRlck1ldGhvZHMoKSxcbiAgICAgICAgdGhpcy5nZXRPdXRsaW5lQWRhcHRlck1ldGhvZHMoKVxuICAgICAgKSxcbiAgICAgIHtcbiAgICAgICAgaGVscGVyVGV4dDogdGhpcy5oZWxwZXJUZXh0Rm91bmRhdGlvbixcbiAgICAgICAgbGVhZGluZ0ljb246IHRoaXMubGVhZGluZ0ljb25Gb3VuZGF0aW9uLFxuICAgICAgICB0cmFpbGluZ0ljb246IHRoaXMudHJhaWxpbmdGb3VuZGF0aW9uXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuICAgIHRoaXMuZm91bmRhdGlvbi5zZXRWYWx1ZSh0aGlzLnZhbHVlKVxuICAgIHRoaXMuZm91bmRhdGlvbi5zZXREaXNhYmxlZCh0aGlzLmRpc2FibGVkKVxuICAgIHRoaXMuJHJlZnMuaW5wdXQgJiYgKHRoaXMuJHJlZnMuaW5wdXQucmVxdWlyZWQgPSB0aGlzLnJlcXVpcmVkKVxuICAgIGlmICh0eXBlb2YgdGhpcy52YWxpZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRWYWxpZCh0aGlzLnZhbGlkKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnRleHRib3gpIHtcbiAgICAgIHRoaXMucmlwcGxlID0gbmV3IFJpcHBsZUJhc2UodGhpcylcbiAgICAgIHRoaXMucmlwcGxlLmluaXQoKVxuICAgIH1cbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24gJiYgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICAgIHRoaXMubGluZVJpcHBsZUZvdW5kYXRpb24gJiYgdGhpcy5saW5lUmlwcGxlRm91bmRhdGlvbi5kZXN0cm95KClcbiAgICB0aGlzLmhlbHBlclRleHRGb3VuZGF0aW9uICYmIHRoaXMuaGVscGVyVGV4dEZvdW5kYXRpb24uZGVzdHJveSgpXG4gICAgdGhpcy5sZWFkaW5nSWNvbkZvdW5kYXRpb24gJiYgdGhpcy5sZWFkaW5nSWNvbkZvdW5kYXRpb24uZGVzdHJveSgpXG4gICAgdGhpcy50cmFpbGluZ0ljb25Gb3VuZGF0aW9uICYmIHRoaXMudHJhaWxpbmdJY29uRm91bmRhdGlvbi5kZXN0cm95KClcbiAgICB0aGlzLmxhYmVsRm91bmRhdGlvbiAmJiB0aGlzLmxhYmVsRm91bmRhdGlvbi5kZXN0cm95KClcbiAgICB0aGlzLm91dGxpbmVGb3VuZGF0aW9uICYmIHRoaXMub3V0bGluZUZvdW5kYXRpb24uZGVzdHJveSgpXG4gICAgdGhpcy5yaXBwbGUgJiYgdGhpcy5yaXBwbGUuZGVzdHJveSgpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRJbnB1dEFkYXB0ZXJNZXRob2RzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICB0aGlzLiRyZWZzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgIH0sXG4gICAgICAgIGRlcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICB0aGlzLiRyZWZzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgIH0sXG4gICAgICAgIGdldE5hdGl2ZUlucHV0OiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuaW5wdXRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0TGFiZWxBZGFwdGVyTWV0aG9kcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNoYWtlTGFiZWw6IHNob3VsZFNoYWtlID0+IHtcbiAgICAgICAgICB0aGlzLmxhYmVsRm91bmRhdGlvbi5zaGFrZShzaG91bGRTaGFrZSlcbiAgICAgICAgfSxcbiAgICAgICAgZmxvYXRMYWJlbDogc2hvdWxkRmxvYXQgPT4ge1xuICAgICAgICAgIHRoaXMubGFiZWxGb3VuZGF0aW9uLmZsb2F0KHNob3VsZEZsb2F0KVxuICAgICAgICB9LFxuICAgICAgICBoYXNMYWJlbDogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiAhIXRoaXMuJHJlZnMubGFiZWwgfHwgISF0aGlzLiRyZWZzWydsYWJlbC1vdXRsaW5lJ11cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0TGFiZWxXaWR0aDogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmxhYmVsRm91bmRhdGlvbi5nZXRXaWR0aCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGdldExpbmVSaXBwbGVBZGFwdGVyTWV0aG9kcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRlYWN0aXZhdGVMaW5lUmlwcGxlOiAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMubGluZVJpcHBsZUZvdW5kYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMubGluZVJpcHBsZUZvdW5kYXRpb24uZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhY3RpdmF0ZUxpbmVSaXBwbGU6ICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5saW5lUmlwcGxlRm91bmRhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5saW5lUmlwcGxlRm91bmRhdGlvbi5hY3RpdmF0ZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXRMaW5lUmlwcGxlVHJhbnNmb3JtT3JpZ2luOiBub3JtYWxpemVkWCA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMubGluZVJpcHBsZUZvdW5kYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMubGluZVJpcHBsZUZvdW5kYXRpb24uc2V0UmlwcGxlQ2VudGVyKG5vcm1hbGl6ZWRYKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0T3V0bGluZUFkYXB0ZXJNZXRob2RzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGFzT3V0bGluZTogKCkgPT4gISF0aGlzLmhhc091dGxpbmUsXG4gICAgICAgIG5vdGNoT3V0bGluZTogKG5vdGNoV2lkdGgsIGlzUnRsKSA9PlxuICAgICAgICAgIHRoaXMub3V0bGluZUZvdW5kYXRpb24ubm90Y2gobm90Y2hXaWR0aCwgaXNSdGwpLFxuICAgICAgICBjbG9zZU91dGxpbmU6ICgpID0+IHRoaXMub3V0bGluZUZvdW5kYXRpb24uY2xvc2VOb3RjaCgpXG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVWYWx1ZSh2YWx1ZSkge1xuICAgICAgdGhpcy4kZW1pdCgnbW9kZWwnLCB2YWx1ZSlcbiAgICB9LFxuICAgIGZvY3VzKCkge1xuICAgICAgdGhpcy4kcmVmcy5pbnB1dCAmJiB0aGlzLiRyZWZzLmlucHV0LmZvY3VzKClcbiAgICB9LFxuICAgIGJsdXIoKSB7XG4gICAgICB0aGlzLiRyZWZzLmlucHV0ICYmIHRoaXMuJHJlZnMuaW5wdXQuYmx1cigpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IG1kY1RleHRGaWVsZCBmcm9tICcuL21kYy10ZXh0ZmllbGQudnVlJ1xuXG5leHBvcnQgeyBtZGNUZXh0RmllbGQgfVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlUGx1Z2luKHtcbiAgbWRjVGV4dEZpZWxkXG59KVxuIiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJ1xuaW1wb3J0IHsgYXV0b0luaXQgfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHBsdWdpbiBmcm9tICcuL2luZGV4LmpzJ1xuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXG5cbmF1dG9Jbml0KHBsdWdpbilcbiJdLCJuYW1lcyI6WyJzdXBwb3J0c1Bhc3NpdmVfIiwiYXBwbHlQYXNzaXZlIiwiZ2xvYmFsT2JqIiwid2luZG93IiwiZm9yY2VSZWZyZXNoIiwidW5kZWZpbmVkIiwiaXNTdXBwb3J0ZWQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwiZSIsImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJDdXN0b21FbGVtZW50IiwiZnVuY3Rpb25hbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwicHJvcHMiLCJpcyIsInRhZyIsImRhdGEiLCJjaGlsZHJlbiIsIkN1c3RvbUVsZW1lbnRNaXhpbiIsImV4dHJhY3RJY29uUHJvcCIsImljb25Qcm9wIiwiY2xhc3NlcyIsImNvbnRlbnQiLCJBcnJheSIsInJlZHVjZSIsInJlc3VsdCIsInZhbHVlIiwiY2xhc3NOYW1lIiwic3BsaXQiLCJ0ZXh0Q29udGVudCIsIkRpc3BhdGNoRm9jdXNNaXhpbiIsImhhc0ZvY3VzIiwibWV0aG9kcyIsIm9uTW91c2VEb3duIiwiX2FjdGl2ZSIsIm9uTW91c2VVcCIsIm9uRm9jdXNFdmVudCIsInNldFRpbWVvdXQiLCJkaXNwYXRjaEZvY3VzRXZlbnQiLCJvbkJsdXJFdmVudCIsIiRlbCIsImFjdGl2ZUVsZW1lbnQiLCJjb250YWlucyIsIiRlbWl0IiwibW91bnRlZCIsImJlZm9yZURlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIlZNQVVuaXF1ZUlkTWl4aW4iLCJiZWZvcmVDcmVhdGUiLCJ2bWFfdWlkXyIsIl91aWQiLCJNRENGb3VuZGF0aW9uIiwiYWRhcHRlciIsImFkYXB0ZXJfIiwiTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXIiLCJhdHRyIiwic3RyaW5ncyIsIkFSSUFfSElEREVOIiwiUk9MRSIsImNzc0NsYXNzZXMiLCJIRUxQRVJfVEVYVF9QRVJTSVNURU5UIiwiSEVMUEVSX1RFWFRfVkFMSURBVElPTl9NU0ciLCJNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsInNldEF0dHIiLCJyZW1vdmVBdHRyIiwic2V0Q29udGVudCIsImRlZmF1bHRBZGFwdGVyIiwiaXNQZXJzaXN0ZW50IiwiaXNWYWxpZGF0aW9uIiwiaW5wdXRJc1ZhbGlkIiwiaGVscGVyVGV4dElzUGVyc2lzdGVudCIsImhlbHBlclRleHRJc1ZhbGlkYXRpb25Nc2ciLCJ2YWxpZGF0aW9uTXNnTmVlZHNEaXNwbGF5IiwiaGlkZV8iLCJNRENUZXh0RmllbGRJY29uQWRhcHRlciIsImV2dFR5cGUiLCJoYW5kbGVyIiwiSUNPTl9FVkVOVCIsIklDT05fUk9MRSIsIk1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uIiwiZ2V0QXR0ciIsInJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwiZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsIm5vdGlmeUljb25BY3Rpb24iLCJzYXZlZFRhYkluZGV4XyIsImludGVyYWN0aW9uSGFuZGxlcl8iLCJldnQiLCJoYW5kbGVJbnRlcmFjdGlvbiIsImZvckVhY2giLCJkaXNhYmxlZCIsImxhYmVsIiwidHlwZSIsImtleUNvZGUiLCJNRENUZXh0RmllbGRBZGFwdGVyIiwib2JzZXJ2ZXIiLCJub3JtYWxpemVkWCIsInNob3VsZFNoYWtlIiwic2hvdWxkRmxvYXQiLCJsYWJlbFdpZHRoIiwiQVJJQV9DT05UUk9MUyIsIklOUFVUX1NFTEVDVE9SIiwiTEFCRUxfU0VMRUNUT1IiLCJJQ09OX1NFTEVDVE9SIiwiT1VUTElORV9TRUxFQ1RPUiIsIkxJTkVfUklQUExFX1NFTEVDVE9SIiwiUk9PVCIsIkRJU0FCTEVEIiwiREVOU0UiLCJGT0NVU0VEIiwiSU5WQUxJRCIsIlRFWFRBUkVBIiwiT1VUTElORUQiLCJXSVRIX0xFQURJTkdfSUNPTiIsIm51bWJlcnMiLCJMQUJFTF9TQ0FMRSIsIkRFTlNFX0xBQkVMX1NDQUxFIiwiVkFMSURBVElPTl9BVFRSX1dISVRFTElTVCIsIkFMV0FZU19GTE9BVF9UWVBFUyIsIk1EQ1RleHRGaWVsZEZvdW5kYXRpb24iLCJpc1ZhbGlkIiwiaXNGb2N1c2VkXyIsImdldFZhbHVlIiwiZ2V0TmF0aXZlSW5wdXRfIiwiaW5kZXhPZiIsInNob3VsZEFsd2F5c0Zsb2F0XyIsImlzQmFkSW5wdXRfIiwicmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXIiLCJkZXJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXIiLCJnZXROYXRpdmVJbnB1dCIsImlzRm9jdXNlZCIsImFjdGl2YXRlTGluZVJpcHBsZSIsImRlYWN0aXZhdGVMaW5lUmlwcGxlIiwic2V0TGluZVJpcHBsZVRyYW5zZm9ybU9yaWdpbiIsInNoYWtlTGFiZWwiLCJmbG9hdExhYmVsIiwiaGFzTGFiZWwiLCJnZXRMYWJlbFdpZHRoIiwiaGFzT3V0bGluZSIsIm5vdGNoT3V0bGluZSIsImNsb3NlT3V0bGluZSIsImZvdW5kYXRpb25NYXAiLCJoZWxwZXJUZXh0XyIsImhlbHBlclRleHQiLCJsZWFkaW5nSWNvbl8iLCJsZWFkaW5nSWNvbiIsInRyYWlsaW5nSWNvbl8iLCJ0cmFpbGluZ0ljb24iLCJyZWNlaXZlZFVzZXJJbnB1dF8iLCJ1c2VDdXN0b21WYWxpZGl0eUNoZWNraW5nXyIsImlzVmFsaWRfIiwidXNlTmF0aXZlVmFsaWRhdGlvbl8iLCJpbnB1dEZvY3VzSGFuZGxlcl8iLCJhY3RpdmF0ZUZvY3VzIiwiaW5wdXRCbHVySGFuZGxlcl8iLCJkZWFjdGl2YXRlRm9jdXMiLCJpbnB1dElucHV0SGFuZGxlcl8iLCJhdXRvQ29tcGxldGVGb2N1cyIsInNldFBvaW50ZXJYT2Zmc2V0XyIsInNldFRyYW5zZm9ybU9yaWdpbiIsInRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcl8iLCJoYW5kbGVUZXh0RmllbGRJbnRlcmFjdGlvbiIsInZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyXyIsImF0dHJpYnV0ZXNMaXN0IiwiaGFuZGxlVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZSIsInZhbGlkYXRpb25PYnNlcnZlcl8iLCJzb21lIiwiYXR0cmlidXRlTmFtZSIsInN0eWxlVmFsaWRpdHlfIiwib3Blbk5vdGNoIiwiaXNEZW5zZSIsImxhYmVsU2NhbGUiLCJzdHlsZUZvY3VzZWRfIiwic2hvd1RvU2NyZWVuUmVhZGVyIiwidGFyZ2V0RXZlbnQiLCJ0b3VjaGVzIiwidGFyZ2V0Q2xpZW50UmVjdCIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiaXNOYXRpdmVJbnB1dFZhbGlkXyIsInVzZU5hdGl2ZVZhbGlkYXRpb24iLCJzdHlsZURpc2FibGVkXyIsInNldEFyaWFMYWJlbCIsInZhbGlkaXR5IiwiYmFkSW5wdXQiLCJ2YWxpZCIsInNldFZhbGlkaXR5IiwiaXNEaXNhYmxlZCIsInNldERpc2FibGVkIiwiTURDTGluZVJpcHBsZUFkYXB0ZXIiLCJwcm9wZXJ0eU5hbWUiLCJMSU5FX1JJUFBMRV9BQ1RJVkUiLCJMSU5FX1JJUFBMRV9ERUFDVElWQVRJTkciLCJNRENMaW5lUmlwcGxlRm91bmRhdGlvbiIsInNldFN0eWxlIiwicmVnaXN0ZXJFdmVudEhhbmRsZXIiLCJkZXJlZ2lzdGVyRXZlbnRIYW5kbGVyIiwidHJhbnNpdGlvbkVuZEhhbmRsZXJfIiwiaGFuZGxlVHJhbnNpdGlvbkVuZCIsInhDb29yZGluYXRlIiwiaXNEZWFjdGl2YXRpbmciLCJNRENGbG9hdGluZ0xhYmVsQWRhcHRlciIsIkxBQkVMX0ZMT0FUX0FCT1ZFIiwiTEFCRUxfU0hBS0UiLCJNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbiIsImdldFdpZHRoIiwic2hha2VBbmltYXRpb25FbmRIYW5kbGVyXyIsImhhbmRsZVNoYWtlQW5pbWF0aW9uRW5kXyIsIk1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlciIsIndpZHRoIiwiTk9UQ0hfRUxFTUVOVF9TRUxFQ1RPUiIsIk5PVENIX0VMRU1FTlRfUEFERElORyIsIk9VVExJTkVfTk9UQ0hFRCIsIk9VVExJTkVfVVBHUkFERUQiLCJOT19MQUJFTCIsIk1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbiIsInNldE5vdGNoV2lkdGhQcm9wZXJ0eSIsIm5vdGNoV2lkdGgiLCJNRENDb21wb25lbnQiLCJyb290IiwiZm91bmRhdGlvbiIsInJvb3RfIiwiYXJncyIsImluaXRpYWxpemUiLCJmb3VuZGF0aW9uXyIsImdldERlZmF1bHRGb3VuZGF0aW9uIiwiaW5pdCIsImluaXRpYWxTeW5jV2l0aERPTSIsIkVycm9yIiwiZGVzdHJveSIsImV2dERhdGEiLCJzaG91bGRCdWJibGUiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImJ1YmJsZXMiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJNRENSaXBwbGVBZGFwdGVyIiwidmFyTmFtZSIsIlVOQk9VTkRFRCIsIkJHX0ZPQ1VTRUQiLCJGR19BQ1RJVkFUSU9OIiwiRkdfREVBQ1RJVkFUSU9OIiwiVkFSX0xFRlQiLCJWQVJfVE9QIiwiVkFSX0ZHX1NJWkUiLCJWQVJfRkdfU0NBTEUiLCJWQVJfRkdfVFJBTlNMQVRFX1NUQVJUIiwiVkFSX0ZHX1RSQU5TTEFURV9FTkQiLCJQQURESU5HIiwiSU5JVElBTF9PUklHSU5fU0NBTEUiLCJERUFDVElWQVRJT05fVElNRU9VVF9NUyIsIkZHX0RFQUNUSVZBVElPTl9NUyIsIlRBUF9ERUxBWV9NUyIsInN1cHBvcnRzQ3NzVmFyaWFibGVzXyIsImRldGVjdEVkZ2VQc2V1ZG9WYXJCdWciLCJ3aW5kb3dPYmoiLCJub2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJoYXNQc2V1ZG9WYXJCdWciLCJib3JkZXJUb3BTdHlsZSIsInJlbW92ZSIsInN1cHBvcnRzQ3NzVmFyaWFibGVzIiwic3VwcG9ydHNGdW5jdGlvblByZXNlbnQiLCJDU1MiLCJzdXBwb3J0cyIsImV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMiLCJ3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMiLCJnZXRNYXRjaGVzUHJvcGVydHkiLCJIVE1MRWxlbWVudFByb3RvdHlwZSIsIm1hdGNoZXNNZXRob2RzIiwibWV0aG9kIiwiaSIsImxlbmd0aCIsIm1hdGNoZXNNZXRob2QiLCJnZXROb3JtYWxpemVkRXZlbnRDb29yZHMiLCJldiIsInBhZ2VPZmZzZXQiLCJjbGllbnRSZWN0IiwieCIsInkiLCJkb2N1bWVudFgiLCJkb2N1bWVudFkiLCJ0b3AiLCJub3JtYWxpemVkWSIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIkFDVElWQVRJT05fRVZFTlRfVFlQRVMiLCJQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyIsImFjdGl2YXRlZFRhcmdldHMiLCJNRENSaXBwbGVGb3VuZGF0aW9uIiwiYnJvd3NlclN1cHBvcnRzQ3NzVmFycyIsImlzVW5ib3VuZGVkIiwiaXNTdXJmYWNlQWN0aXZlIiwiaXNTdXJmYWNlRGlzYWJsZWQiLCJjb250YWluc0V2ZW50VGFyZ2V0IiwicmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyUmVzaXplSGFuZGxlciIsImRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwidXBkYXRlQ3NzVmFyaWFibGUiLCJjb21wdXRlQm91bmRpbmdSZWN0IiwiZ2V0V2luZG93UGFnZU9mZnNldCIsImxheW91dEZyYW1lXyIsImZyYW1lXyIsImhlaWdodCIsImFjdGl2YXRpb25TdGF0ZV8iLCJkZWZhdWx0QWN0aXZhdGlvblN0YXRlXyIsImluaXRpYWxTaXplXyIsIm1heFJhZGl1c18iLCJhY3RpdmF0ZUhhbmRsZXJfIiwiYWN0aXZhdGVfIiwiZGVhY3RpdmF0ZUhhbmRsZXJfIiwiZGVhY3RpdmF0ZV8iLCJmb2N1c0hhbmRsZXJfIiwiaGFuZGxlRm9jdXMiLCJibHVySGFuZGxlcl8iLCJoYW5kbGVCbHVyIiwicmVzaXplSGFuZGxlcl8iLCJsYXlvdXQiLCJ1bmJvdW5kZWRDb29yZHNfIiwiZmdTY2FsZV8iLCJhY3RpdmF0aW9uVGltZXJfIiwiZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfIiwiYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyIsImFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyIsInJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XyIsInByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyIsImlzQWN0aXZhdGVkIiwiaGFzRGVhY3RpdmF0aW9uVVhSdW4iLCJ3YXNBY3RpdmF0ZWRCeVBvaW50ZXIiLCJ3YXNFbGVtZW50TWFkZUFjdGl2ZSIsImFjdGl2YXRpb25FdmVudCIsImlzUHJvZ3JhbW1hdGljIiwic3VwcG9ydHNQcmVzc1JpcHBsZSIsInN1cHBvcnRzUHJlc3NSaXBwbGVfIiwicmVnaXN0ZXJSb290SGFuZGxlcnNfIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibGF5b3V0SW50ZXJuYWxfIiwiY2xlYXJUaW1lb3V0IiwicmVtb3ZlQ3NzVmFyc18iLCJkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXyIsImRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18iLCJPYmplY3QiLCJrZXlzIiwiayIsImFjdGl2YXRpb25TdGF0ZSIsInByZXZpb3VzQWN0aXZhdGlvbkV2ZW50IiwiaXNTYW1lSW50ZXJhY3Rpb24iLCJoYXNBY3RpdmF0ZWRDaGlsZCIsInJlc2V0QWN0aXZhdGlvblN0YXRlXyIsInB1c2giLCJyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyIsImNoZWNrRWxlbWVudE1hZGVBY3RpdmVfIiwiYW5pbWF0ZUFjdGl2YXRpb25fIiwiZXZlbnQiLCJ0cmFuc2xhdGVTdGFydCIsInRyYW5zbGF0ZUVuZCIsImdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18iLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18iLCJhY3RpdmF0aW9uSGFzRW5kZWQiLCJzdGF0ZSIsImFuaW1hdGVEZWFjdGl2YXRpb25fIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtYXhEaW0iLCJtYXgiLCJnZXRCb3VuZGVkUmFkaXVzIiwiaHlwb3RlbnVzZSIsInNxcnQiLCJwb3ciLCJ1cGRhdGVMYXlvdXRDc3NWYXJzXyIsInJvdW5kIiwidW5ib3VuZGVkIiwiTURDUmlwcGxlIiwidW5ib3VuZGVkXyIsInNldFVuYm91bmRlZCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImNyZWF0ZUFkYXB0ZXIiLCJkYXRhc2V0IiwiQm9vbGVhbiIsInNldFVuYm91bmRlZF8iLCJyaXBwbGUiLCJpbnN0YW5jZSIsIk1BVENIRVMiLCJ1dGlsIiwiSFRNTEVsZW1lbnQiLCJwcm90b3R5cGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsIlJpcHBsZUNhcGFibGVTdXJmYWNlIiwiUmlwcGxlQmFzZSIsInJlZiIsIl9tYXRjaGVzIiwib3B0aW9ucyIsIiRzZXQiLCIkZGVsZXRlIiwic3R5bGVzIiwiUmlwcGxlTWl4aW4i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
