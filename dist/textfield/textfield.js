/**
* @module vue-mdc-adaptertextfield 0.19.0-beta
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
        /**
         * Removes the width style property from the notch element.
         */

      }, {
        key: "removeNotchWidthProperty",
        value: function removeNotchWidthProperty() {}
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
              setNotchWidthProperty: function setNotchWidthProperty() {},
              removeNotchWidthProperty: function removeNotchWidthProperty() {}
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
          this.adapter_.removeNotchWidthProperty();
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
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$1.__file = "/ddata/extra/vma/components/textfield/mdc-textfield.vue";

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
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcTextField = normalizeComponent(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGZpZWxkLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXBwbHktcGFzc2l2ZS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9hdXRvLWluaXQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYmFzZS1wbHVnaW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWVsZW1lbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWV2ZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1pY29uLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Rpc3BhdGNoLWZvY3VzLW1peGluLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9oZWxwZXItdGV4dC9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaGVscGVyLXRleHQvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaGVscGVyLXRleHQvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2ljb24vYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2ljb24vY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGV4dGZpZWxkL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpbmUtcmlwcGxlL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpbmUtcmlwcGxlL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGluZS1yaXBwbGUvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZmxvYXRpbmctbGFiZWwvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZmxvYXRpbmctbGFiZWwvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9ub3RjaGVkLW91dGxpbmUvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLWJhc2UuanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLnZ1ZSIsIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtcnVudGltZS1oZWxwZXJzL25vcm1hbGl6ZS1jb21wb25lbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL3RleHRmaWVsZC9tZGMtdGV4dGZpZWxkLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvdGV4dGZpZWxkL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy90ZXh0ZmllbGQvZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHN1cHBvcnRzUGFzc2l2ZV9cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmQgaWYgc28sIHVzZSB0aGVtLlxuICogQHBhcmFtIHshV2luZG93PX0gZ2xvYmFsT2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58e3Bhc3NpdmU6IGJvb2xlYW59fVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiA9IHdpbmRvdywgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgaWYgKHN1cHBvcnRzUGFzc2l2ZV8gPT09IHVuZGVmaW5lZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWQgPSBmYWxzZVxuICAgIHRyeSB7XG4gICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIHtcbiAgICAgICAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgICAgICAgaXNTdXBwb3J0ZWQgPSB7IHBhc3NpdmU6IHRydWUgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vZW1wdHlcbiAgICB9XG5cbiAgICBzdXBwb3J0c1Bhc3NpdmVfID0gaXNTdXBwb3J0ZWRcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYXV0b0luaXQocGx1Z2luKSB7XG4gIC8vIEF1dG8taW5zdGFsbFxuICBsZXQgX1Z1ZSA9IG51bGxcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgX1Z1ZSA9IHdpbmRvdy5WdWVcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8qZ2xvYmFsIGdsb2JhbCovXG4gICAgX1Z1ZSA9IGdsb2JhbC5WdWVcbiAgfVxuICBpZiAoX1Z1ZSkge1xuICAgIF9WdWUudXNlKHBsdWdpbilcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIEJhc2VQbHVnaW4oY29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICdfX1ZFUlNJT05fXycsXG4gICAgaW5zdGFsbDogdm0gPT4ge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNba2V5XVxuICAgICAgICB2bS5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHNcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEN1c3RvbUVsZW1lbnQgPSB7XG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHJlbmRlcihjcmVhdGVFbGVtZW50LCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBjb250ZXh0LnByb3BzLmlzIHx8IGNvbnRleHQucHJvcHMudGFnIHx8ICdkaXYnLFxuICAgICAgY29udGV4dC5kYXRhLFxuICAgICAgY29udGV4dC5jaGlsZHJlblxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudE1peGluID0ge1xuICBjb21wb25lbnRzOiB7XG4gICAgQ3VzdG9tRWxlbWVudFxuICB9XG59XG4iLCIvKiBnbG9iYWwgQ3VzdG9tRXZlbnQgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXRDdXN0b21FdmVudChlbCwgZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgbGV0IGV2dFxuICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpXG4gIH1cbiAgZWwuZGlzcGF0Y2hFdmVudChldnQpXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZXh0cmFjdEljb25Qcm9wKGljb25Qcm9wKSB7XG4gIGlmICh0eXBlb2YgaWNvblByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHsgJ21hdGVyaWFsLWljb25zJzogdHJ1ZSB9LFxuICAgICAgY29udGVudDogaWNvblByb3BcbiAgICB9XG4gIH0gZWxzZSBpZiAoaWNvblByb3AgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiBpY29uUHJvcC5yZWR1Y2UoXG4gICAgICAgIChyZXN1bHQsIHZhbHVlKSA9PiBPYmplY3QuYXNzaWduKHJlc3VsdCwgeyBbdmFsdWVdOiB0cnVlIH0pLFxuICAgICAgICB7fVxuICAgICAgKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgaWNvblByb3AgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IGljb25Qcm9wLmNsYXNzTmFtZVxuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAucmVkdWNlKFxuICAgICAgICAgIChyZXN1bHQsIHZhbHVlKSA9PiBPYmplY3QuYXNzaWduKHJlc3VsdCwgeyBbdmFsdWVdOiB0cnVlIH0pLFxuICAgICAgICAgIHt9XG4gICAgICAgICksXG4gICAgICBjb250ZW50OiBpY29uUHJvcC50ZXh0Q29udGVudFxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IERpc3BhdGNoRm9jdXNNaXhpbiA9IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4geyBoYXNGb2N1czogZmFsc2UgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25Nb3VzZURvd24oKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlXG4gICAgfSxcbiAgICBvbk1vdXNlVXAoKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZVxuICAgIH0sXG4gICAgb25Gb2N1c0V2ZW50KCkge1xuICAgICAgLy8gZGlzcGF0Y2ggYXN5bmMgdG8gbGV0IHRpbWUgdG8gb3RoZXIgZm9jdXMgZXZlbnQgdG8gcHJvcGFnYXRlXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGlzcGF0Y2hGb2N1c0V2ZW50KCksIDApXG4gICAgfSxcbiAgICBvbkJsdXJFdmVudCgpIHtcbiAgICAgIC8vIGRpc3BhdGNoIGFzeW5jIHRvIGxldCB0aW1lIHRvIG90aGVyIGZvY3VzIGV2ZW50IHRvIHByb3BhZ2F0ZVxuICAgICAgLy8gYWxzbyBmaWx0dXIgYmx1ciBpZiBtb3VzZWRvd25cbiAgICAgIHRoaXMuX2FjdGl2ZSB8fCBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGlzcGF0Y2hGb2N1c0V2ZW50KCksIDApXG4gICAgfSxcbiAgICBkaXNwYXRjaEZvY3VzRXZlbnQoKSB7XG4gICAgICBsZXQgaGFzRm9jdXMgPVxuICAgICAgICB0aGlzLiRlbCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCB8fFxuICAgICAgICB0aGlzLiRlbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KVxuICAgICAgaWYgKGhhc0ZvY3VzICE9IHRoaXMuaGFzRm9jdXMpIHtcbiAgICAgICAgdGhpcy4kZW1pdChoYXNGb2N1cyA/ICdmb2N1cycgOiAnYmx1cicpXG4gICAgICAgIHRoaXMuaGFzRm9jdXMgPSBoYXNGb2N1c1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5vbkZvY3VzRXZlbnQpXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB0aGlzLm9uQmx1ckV2ZW50KVxuICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24pXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLm9uRm9jdXNFdmVudClcbiAgICB0aGlzLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMub25CbHVyRXZlbnQpXG4gICAgdGhpcy4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bilcbiAgICB0aGlzLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApXG4gIH1cbn1cbiIsImNvbnN0IHNjb3BlID1cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigweDEwMDAwMDAwKSkudG9TdHJpbmcoKSArICctJ1xuXG5leHBvcnQgY29uc3QgVk1BVW5pcXVlSWRNaXhpbiA9IHtcbiAgYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMudm1hX3VpZF8gPSBzY29wZSArIHRoaXMuX3VpZFxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgQVxuICovXG5jbGFzcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bXtjc3NDbGFzc2VzfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17bnVtYmVyc30gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiB7IU9iamVjdH0gKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgLy8gdmFsaWRhdGlvbi5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciA9IHt9KSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFBfSAqL1xuICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBUZXh0IEZpZWxkIEhlbHBlciBUZXh0LlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIFRleHRGaWVsZCBoZWxwZXIgdGV4dCBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXIge1xuICAvKipcbiAgICogQWRkcyBhIGNsYXNzIHRvIHRoZSBoZWxwZXIgdGV4dCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjbGFzcyBmcm9tIHRoZSBoZWxwZXIgdGV4dCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQgY29udGFpbnMgdGhlIGdpdmVuIGNsYXNzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgYW4gYXR0cmlidXRlIHdpdGggYSBnaXZlbiB2YWx1ZSBvbiB0aGUgaGVscGVyIHRleHQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXRBdHRyKGF0dHIsIHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGF0dHJpYnV0ZSBmcm9tIHRoZSBoZWxwZXIgdGV4dCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKi9cbiAgcmVtb3ZlQXR0cihhdHRyKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZXh0IGNvbnRlbnQgZm9yIHRoZSBoZWxwZXIgdGV4dCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICAgKi9cbiAgc2V0Q29udGVudChjb250ZW50KSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUZXh0RmllbGRIZWxwZXJUZXh0QWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIEFSSUFfSElEREVOOiAnYXJpYS1oaWRkZW4nLFxuICBST0xFOiAncm9sZScsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIEhFTFBFUl9URVhUX1BFUlNJU1RFTlQ6ICdtZGMtdGV4dC1maWVsZC1oZWxwZXItdGV4dC0tcGVyc2lzdGVudCcsXG4gIEhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHOiAnbWRjLXRleHQtZmllbGQtaGVscGVyLXRleHQtLXZhbGlkYXRpb24tbXNnJyxcbn07XG5cbmV4cG9ydCB7c3RyaW5ncywgY3NzQ2xhc3Nlc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5nc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1RleHRGaWVsZEhlbHBlclRleHRBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAc2VlIE1EQ1RleHRGaWVsZEhlbHBlclRleHRBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ1RleHRGaWVsZEhlbHBlclRleHRBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBoYXNDbGFzczogKCkgPT4ge30sXG4gICAgICBzZXRBdHRyOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUF0dHI6ICgpID0+IHt9LFxuICAgICAgc2V0Q29udGVudDogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDVGV4dEZpZWxkSGVscGVyVGV4dEFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY29udGVudCBvZiB0aGUgaGVscGVyIHRleHQgZmllbGQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gICAqL1xuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldENvbnRlbnQoY29udGVudCk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSBpc1BlcnNpc3RlbnQgU2V0cyB0aGUgcGVyc2lzdGVuY3kgb2YgdGhlIGhlbHBlciB0ZXh0LiAqL1xuICBzZXRQZXJzaXN0ZW50KGlzUGVyc2lzdGVudCkge1xuICAgIGlmIChpc1BlcnNpc3RlbnQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9QRVJTSVNURU5UKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1BFUlNJU1RFTlQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmFsaWRhdGlvbiBUcnVlIHRvIG1ha2UgdGhlIGhlbHBlciB0ZXh0IGFjdCBhcyBhblxuICAgKiAgIGVycm9yIHZhbGlkYXRpb24gbWVzc2FnZS5cbiAgICovXG4gIHNldFZhbGlkYXRpb24oaXNWYWxpZGF0aW9uKSB7XG4gICAgaWYgKGlzVmFsaWRhdGlvbikge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHKTtcbiAgICB9XG4gIH1cblxuICAvKiogTWFrZXMgdGhlIGhlbHBlciB0ZXh0IHZpc2libGUgdG8gdGhlIHNjcmVlbiByZWFkZXIuICovXG4gIHNob3dUb1NjcmVlblJlYWRlcigpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHIoc3RyaW5ncy5BUklBX0hJRERFTik7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsaWRpdHkgb2YgdGhlIGhlbHBlciB0ZXh0IGJhc2VkIG9uIHRoZSBpbnB1dCB2YWxpZGl0eS5cbiAgICogQHBhcmFtIHtib29sZWFufSBpbnB1dElzVmFsaWRcbiAgICovXG4gIHNldFZhbGlkaXR5KGlucHV0SXNWYWxpZCkge1xuICAgIGNvbnN0IGhlbHBlclRleHRJc1BlcnNpc3RlbnQgPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfUEVSU0lTVEVOVCk7XG4gICAgY29uc3QgaGVscGVyVGV4dElzVmFsaWRhdGlvbk1zZyA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9WQUxJREFUSU9OX01TRyk7XG4gICAgY29uc3QgdmFsaWRhdGlvbk1zZ05lZWRzRGlzcGxheSA9IGhlbHBlclRleHRJc1ZhbGlkYXRpb25Nc2cgJiYgIWlucHV0SXNWYWxpZDtcblxuICAgIGlmICh2YWxpZGF0aW9uTXNnTmVlZHNEaXNwbGF5KSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5ST0xFLCAnYWxlcnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVBdHRyKHN0cmluZ3MuUk9MRSk7XG4gICAgfVxuXG4gICAgaWYgKCFoZWxwZXJUZXh0SXNQZXJzaXN0ZW50ICYmICF2YWxpZGF0aW9uTXNnTmVlZHNEaXNwbGF5KSB7XG4gICAgICB0aGlzLmhpZGVfKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBoZWxwIHRleHQgZnJvbSBzY3JlZW4gcmVhZGVycy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhpZGVfKCkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihzdHJpbmdzLkFSSUFfSElEREVOLCAndHJ1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBUZXh0IEZpZWxkIEljb24uXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgdGV4dCBmaWVsZCBpY29uIGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENUZXh0RmllbGRJY29uQWRhcHRlciB7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSB2YWx1ZSBvZiBhbiBhdHRyaWJ1dGUgb24gdGhlIGljb24gZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0QXR0cihhdHRyKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIGFuIGF0dHJpYnV0ZSBvbiB0aGUgaWNvbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHNldEF0dHIoYXR0ciwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gYXR0cmlidXRlIGZyb20gdGhlIGljb24gZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJcbiAgICovXG4gIHJlbW92ZUF0dHIoYXR0cikge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBpY29uIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gICAqL1xuICBzZXRDb250ZW50KGNvbnRlbnQpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBvbiB0aGUgaWNvbiBlbGVtZW50IGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogRGVyZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIGljb24gZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogRW1pdHMgYSBjdXN0b20gZXZlbnQgXCJNRENUZXh0RmllbGQ6aWNvblwiIGRlbm90aW5nIGEgdXNlciBoYXMgY2xpY2tlZCB0aGUgaWNvbi5cbiAgICovXG4gIG5vdGlmeUljb25BY3Rpb24oKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUZXh0RmllbGRJY29uQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIElDT05fRVZFTlQ6ICdNRENUZXh0RmllbGQ6aWNvbicsXG4gIElDT05fUk9MRTogJ2J1dHRvbicsXG59O1xuXG5leHBvcnQge3N0cmluZ3N9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1RleHRGaWVsZEljb25BZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge3N0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcblxuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENUZXh0RmllbGRJY29uQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDVGV4dEZpZWxkSWNvbkFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuXG4gICAqIHR5cGVzLlxuICAgKiBAcmV0dXJuIHshTURDVGV4dEZpZWxkSWNvbkFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENUZXh0RmllbGRJY29uQWRhcHRlcn0gKi8gKHtcbiAgICAgIGdldEF0dHI6ICgpID0+IHt9LFxuICAgICAgc2V0QXR0cjogKCkgPT4ge30sXG4gICAgICByZW1vdmVBdHRyOiAoKSA9PiB7fSxcbiAgICAgIHNldENvbnRlbnQ6ICgpID0+IHt9LFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBub3RpZnlJY29uQWN0aW9uOiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENUZXh0RmllbGRJY29uQWRhcHRlcn0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7c3RyaW5nP30gKi9cbiAgICB0aGlzLnNhdmVkVGFiSW5kZXhfID0gbnVsbDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuaW50ZXJhY3Rpb25IYW5kbGVyXyA9IChldnQpID0+IHRoaXMuaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zYXZlZFRhYkluZGV4XyA9IHRoaXMuYWRhcHRlcl8uZ2V0QXR0cigndGFiaW5kZXgnKTtcblxuICAgIFsnY2xpY2snLCAna2V5ZG93biddLmZvckVhY2goKGV2dFR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgWydjbGljaycsICdrZXlkb3duJ10uZm9yRWFjaCgoZXZ0VHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIHRoaXMuaW50ZXJhY3Rpb25IYW5kbGVyXyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZCAqL1xuICBzZXREaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIGlmICghdGhpcy5zYXZlZFRhYkluZGV4Xykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVBdHRyKCdyb2xlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cigndGFiaW5kZXgnLCB0aGlzLnNhdmVkVGFiSW5kZXhfKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cigncm9sZScsIHN0cmluZ3MuSUNPTl9ST0xFKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGxhYmVsICovXG4gIHNldEFyaWFMYWJlbChsYWJlbCkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cignYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCAqL1xuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldENvbnRlbnQoY29udGVudCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhbiBpbnRlcmFjdGlvbiBldmVudFxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqL1xuICBoYW5kbGVJbnRlcmFjdGlvbihldnQpIHtcbiAgICBpZiAoZXZ0LnR5cGUgPT09ICdjbGljaycgfHwgZXZ0LmtleSA9PT0gJ0VudGVyJyB8fCBldnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5SWNvbkFjdGlvbigpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uIGZyb20gJy4vaGVscGVyLXRleHQvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24gZnJvbSAnLi9pY29uL2ZvdW5kYXRpb24nO1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICB2YWx1ZTogc3RyaW5nLFxuICogICBkaXNhYmxlZDogYm9vbGVhbixcbiAqICAgYmFkSW5wdXQ6IGJvb2xlYW4sXG4gKiAgIHZhbGlkaXR5OiB7XG4gKiAgICAgYmFkSW5wdXQ6IGJvb2xlYW4sXG4gKiAgICAgdmFsaWQ6IGJvb2xlYW4sXG4gKiAgIH0sXG4gKiB9fVxuICovXG5sZXQgTmF0aXZlSW5wdXRUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGhlbHBlclRleHQ6ICghTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb258dW5kZWZpbmVkKSxcbiAqICAgbGVhZGluZ0ljb246ICghTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb258dW5kZWZpbmVkKSxcbiAqICAgdHJhaWxpbmdJY29uOiAoIU1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9ufHVuZGVmaW5lZCksXG4gKiB9fVxuICovXG5sZXQgRm91bmRhdGlvbk1hcFR5cGU7XG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFRleHQgRmllbGQuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgVGV4dCBGaWVsZCBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDVGV4dEZpZWxkQWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIGEgY2xhc3MgdG8gdGhlIHJvb3QgRWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2xhc3MgZnJvbSB0aGUgcm9vdCBFbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcm9vdCBlbGVtZW50IGNvbnRhaW5zIHRoZSBnaXZlbiBjbGFzcyBuYW1lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBoYW5kbGVyIG9uIHRoZSByb290IGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEZXJlZ2lzdGVycyBhbiBldmVudCBoYW5kbGVyIG9uIHRoZSByb290IGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBvbiB0aGUgbmF0aXZlIGlucHV0IGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBuYXRpdmUgaW5wdXQgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSB2YWxpZGF0aW9uIGF0dHJpYnV0ZSBjaGFuZ2UgbGlzdGVuZXIgb24gdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqIEhhbmRsZXIgYWNjZXB0cyBsaXN0IG9mIGF0dHJpYnV0ZSBuYW1lcy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbighQXJyYXk8c3RyaW5nPik6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKiBAcmV0dXJuIHshTXV0YXRpb25PYnNlcnZlcn1cbiAgICovXG4gIHJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKipcbiAgICogRGlzY29ubmVjdHMgYSB2YWxpZGF0aW9uIGF0dHJpYnV0ZSBvYnNlcnZlciBvbiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gb2JzZXJ2ZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcihvYnNlcnZlcikge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuYXRpdmUgdGV4dCBpbnB1dCBlbGVtZW50LCB3aXRoIGFcbiAgICogc2ltaWxhciBBUEkgc2hhcGUuIFRoZSBvYmplY3QgcmV0dXJuZWQgc2hvdWxkIGluY2x1ZGUgdGhlIHZhbHVlLCBkaXNhYmxlZFxuICAgKiBhbmQgYmFkSW5wdXQgcHJvcGVydGllcywgYXMgd2VsbCBhcyB0aGUgY2hlY2tWYWxpZGl0eSgpIGZ1bmN0aW9uLiBXZSBuZXZlclxuICAgKiBhbHRlciB0aGUgdmFsdWUgd2l0aGluIG91ciBjb2RlLCBob3dldmVyIHdlIGRvIHVwZGF0ZSB0aGUgZGlzYWJsZWRcbiAgICogcHJvcGVydHksIHNvIGlmIHlvdSBjaG9vc2UgdG8gZHVjay10eXBlIHRoZSByZXR1cm4gdmFsdWUgZm9yIHRoaXMgbWV0aG9kXG4gICAqIGluIHlvdXIgaW1wbGVtZW50YXRpb24gaXQncyBpbXBvcnRhbnQgdG8ga2VlcCB0aGlzIGluIG1pbmQuIEFsc28gbm90ZSB0aGF0XG4gICAqIHRoaXMgbWV0aG9kIGNhbiByZXR1cm4gbnVsbCwgd2hpY2ggdGhlIGZvdW5kYXRpb24gd2lsbCBoYW5kbGUgZ3JhY2VmdWxseS5cbiAgICogQHJldHVybiB7P0VsZW1lbnR8P05hdGl2ZUlucHV0VHlwZX1cbiAgICovXG4gIGdldE5hdGl2ZUlucHV0KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSB0ZXh0ZmllbGQgaXMgZm9jdXNlZC5cbiAgICogV2UgYWNoaWV2ZSB0aGlzIHZpYSBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5yb290X2AuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0ZvY3VzZWQoKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGxpbmUgcmlwcGxlLlxuICAgKi9cbiAgYWN0aXZhdGVMaW5lUmlwcGxlKCkge31cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIGxpbmUgcmlwcGxlLlxuICAgKi9cbiAgZGVhY3RpdmF0ZUxpbmVSaXBwbGUoKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0cmFuc2Zvcm0gb3JpZ2luIG9mIHRoZSBsaW5lIHJpcHBsZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG5vcm1hbGl6ZWRYXG4gICAqL1xuICBzZXRMaW5lUmlwcGxlVHJhbnNmb3JtT3JpZ2luKG5vcm1hbGl6ZWRYKSB7fVxuXG4gIC8qKlxuICAgKiBPbmx5IGltcGxlbWVudCBpZiBsYWJlbCBleGlzdHMuXG4gICAqIFNoYWtlcyBsYWJlbCBpZiBzaG91bGRTaGFrZSBpcyB0cnVlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZFNoYWtlXG4gICAqL1xuICBzaGFrZUxhYmVsKHNob3VsZFNoYWtlKSB7fVxuXG4gIC8qKlxuICAgKiBPbmx5IGltcGxlbWVudCBpZiBsYWJlbCBleGlzdHMuXG4gICAqIEZsb2F0cyB0aGUgbGFiZWwgYWJvdmUgdGhlIGlucHV0IGVsZW1lbnQgaWYgc2hvdWxkRmxvYXQgaXMgdHJ1ZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBzaG91bGRGbG9hdFxuICAgKi9cbiAgZmxvYXRMYWJlbChzaG91bGRGbG9hdCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGxhYmVsIGVsZW1lbnQgZXhpc3RzLCBmYWxzZSBpZiBpdCBkb2Vzbid0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzTGFiZWwoKSB7fVxuXG4gIC8qKlxuICAgKiBPbmx5IGltcGxlbWVudCBpZiBsYWJlbCBleGlzdHMuXG4gICAqIFJldHVybnMgd2lkdGggb2YgbGFiZWwgaW4gcGl4ZWxzLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRMYWJlbFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIG91dGxpbmUgZWxlbWVudCBleGlzdHMsIGZhbHNlIGlmIGl0IGRvZXNuJ3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNPdXRsaW5lKCkge31cblxuICAvKipcbiAgICogT25seSBpbXBsZW1lbnQgaWYgb3V0bGluZSBlbGVtZW50IGV4aXN0cy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxhYmVsV2lkdGhcbiAgICovXG4gIG5vdGNoT3V0bGluZShsYWJlbFdpZHRoKSB7fVxuXG4gIC8qKlxuICAgKiBPbmx5IGltcGxlbWVudCBpZiBvdXRsaW5lIGVsZW1lbnQgZXhpc3RzLlxuICAgKiBDbG9zZXMgbm90Y2ggaW4gb3V0bGluZSBlbGVtZW50LlxuICAgKi9cbiAgY2xvc2VPdXRsaW5lKCkge31cbn1cblxuZXhwb3J0IHtNRENUZXh0RmllbGRBZGFwdGVyLCBOYXRpdmVJbnB1dFR5cGUsIEZvdW5kYXRpb25NYXBUeXBlfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIEFSSUFfQ09OVFJPTFM6ICdhcmlhLWNvbnRyb2xzJyxcbiAgSU5QVVRfU0VMRUNUT1I6ICcubWRjLXRleHQtZmllbGRfX2lucHV0JyxcbiAgTEFCRUxfU0VMRUNUT1I6ICcubWRjLWZsb2F0aW5nLWxhYmVsJyxcbiAgSUNPTl9TRUxFQ1RPUjogJy5tZGMtdGV4dC1maWVsZF9faWNvbicsXG4gIE9VVExJTkVfU0VMRUNUT1I6ICcubWRjLW5vdGNoZWQtb3V0bGluZScsXG4gIExJTkVfUklQUExFX1NFTEVDVE9SOiAnLm1kYy1saW5lLXJpcHBsZScsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIFJPT1Q6ICdtZGMtdGV4dC1maWVsZCcsXG4gIERJU0FCTEVEOiAnbWRjLXRleHQtZmllbGQtLWRpc2FibGVkJyxcbiAgREVOU0U6ICdtZGMtdGV4dC1maWVsZC0tZGVuc2UnLFxuICBGT0NVU0VEOiAnbWRjLXRleHQtZmllbGQtLWZvY3VzZWQnLFxuICBJTlZBTElEOiAnbWRjLXRleHQtZmllbGQtLWludmFsaWQnLFxuICBURVhUQVJFQTogJ21kYy10ZXh0LWZpZWxkLS10ZXh0YXJlYScsXG4gIE9VVExJTkVEOiAnbWRjLXRleHQtZmllbGQtLW91dGxpbmVkJyxcbiAgV0lUSF9MRUFESU5HX0lDT046ICdtZGMtdGV4dC1maWVsZC0td2l0aC1sZWFkaW5nLWljb24nLFxufTtcblxuLyoqIEBlbnVtIHtudW1iZXJ9ICovXG5jb25zdCBudW1iZXJzID0ge1xuICBMQUJFTF9TQ0FMRTogMC43NSxcbiAgREVOU0VfTEFCRUxfU0NBTEU6IDAuOTIzLFxufTtcblxuLy8gd2hpdGVsaXN0IGJhc2VkIG9mZiBvZiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9HdWlkZS9IVE1ML0hUTUw1L0NvbnN0cmFpbnRfdmFsaWRhdGlvblxuLy8gdW5kZXIgc2VjdGlvbjogYFZhbGlkYXRpb24tcmVsYXRlZCBhdHRyaWJ1dGVzYFxuY29uc3QgVkFMSURBVElPTl9BVFRSX1dISVRFTElTVCA9IFtcbiAgJ3BhdHRlcm4nLCAnbWluJywgJ21heCcsICdyZXF1aXJlZCcsICdzdGVwJywgJ21pbmxlbmd0aCcsICdtYXhsZW5ndGgnLFxuXTtcblxuLy8gTGFiZWwgc2hvdWxkIGFsd2F5cyBmbG9hdCBmb3IgdGhlc2UgdHlwZXMgYXMgdGhleSBzaG93IHNvbWUgVUkgZXZlbiBpZiB2YWx1ZSBpcyBlbXB0eS5cbmNvbnN0IEFMV0FZU19GTE9BVF9UWVBFUyA9IFtcbiAgJ2NvbG9yJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnLCAnbW9udGgnLCAncmFuZ2UnLCAndGltZScsICd3ZWVrJyxcbl07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVycywgVkFMSURBVElPTl9BVFRSX1dISVRFTElTVCwgQUxXQVlTX0ZMT0FUX1RZUEVTfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24gZnJvbSAnLi9oZWxwZXItdGV4dC9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiBmcm9tICcuL2ljb24vZm91bmRhdGlvbic7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1RleHRGaWVsZEFkYXB0ZXIsIE5hdGl2ZUlucHV0VHlwZSwgRm91bmRhdGlvbk1hcFR5cGV9IGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnMsIFZBTElEQVRJT05fQVRUUl9XSElURUxJU1QsIEFMV0FZU19GTE9BVF9UWVBFU30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENUZXh0RmllbGRBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENUZXh0RmllbGRGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gbnVtYmVycztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgc2hvdWxkU2hha2UoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzVmFsaWQoKSAmJiAhdGhpcy5pc0ZvY3VzZWRfICYmICEhdGhpcy5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXQgc2hvdWxkQWx3YXlzRmxvYXRfKCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldE5hdGl2ZUlucHV0XygpLnR5cGU7XG4gICAgcmV0dXJuIEFMV0FZU19GTE9BVF9UWVBFUy5pbmRleE9mKHR5cGUpID49IDA7XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgZ2V0IHNob3VsZEZsb2F0KCkge1xuICAgIHJldHVybiB0aGlzLnNob3VsZEFsd2F5c0Zsb2F0XyB8fCB0aGlzLmlzRm9jdXNlZF8gfHwgISF0aGlzLmdldFZhbHVlKCkgfHwgdGhpcy5pc0JhZElucHV0XygpO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAc2VlIE1EQ1RleHRGaWVsZEFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuXG4gICAqIHR5cGVzLlxuICAgKiBAcmV0dXJuIHshTURDVGV4dEZpZWxkQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1RleHRGaWVsZEFkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBoYXNDbGFzczogKCkgPT4ge30sXG4gICAgICByZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyOiAoKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyOiAoKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyOiAoKSA9PiB7fSxcbiAgICAgIGdldE5hdGl2ZUlucHV0OiAoKSA9PiB7fSxcbiAgICAgIGlzRm9jdXNlZDogKCkgPT4ge30sXG4gICAgICBhY3RpdmF0ZUxpbmVSaXBwbGU6ICgpID0+IHt9LFxuICAgICAgZGVhY3RpdmF0ZUxpbmVSaXBwbGU6ICgpID0+IHt9LFxuICAgICAgc2V0TGluZVJpcHBsZVRyYW5zZm9ybU9yaWdpbjogKCkgPT4ge30sXG4gICAgICBzaGFrZUxhYmVsOiAoKSA9PiB7fSxcbiAgICAgIGZsb2F0TGFiZWw6ICgpID0+IHt9LFxuICAgICAgaGFzTGFiZWw6ICgpID0+IHt9LFxuICAgICAgZ2V0TGFiZWxXaWR0aDogKCkgPT4ge30sXG4gICAgICBoYXNPdXRsaW5lOiAoKSA9PiB7fSxcbiAgICAgIG5vdGNoT3V0bGluZTogKCkgPT4ge30sXG4gICAgICBjbG9zZU91dGxpbmU6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ1RleHRGaWVsZEFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICogQHBhcmFtIHshRm91bmRhdGlvbk1hcFR5cGU9fSBmb3VuZGF0aW9uTWFwIE1hcCBmcm9tIHN1YmNvbXBvbmVudCBuYW1lcyB0byB0aGVpciBzdWJmb3VuZGF0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIsIGZvdW5kYXRpb25NYXAgPSAvKiogQHR5cGUgeyFGb3VuZGF0aW9uTWFwVHlwZX0gKi8gKHt9KSkge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDVGV4dEZpZWxkRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEB0eXBlIHshTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb258dW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuaGVscGVyVGV4dF8gPSBmb3VuZGF0aW9uTWFwLmhlbHBlclRleHQ7XG4gICAgLyoqIEB0eXBlIHshTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb258dW5kZWZpbmVkfSAqL1xuICAgIHRoaXMubGVhZGluZ0ljb25fID0gZm91bmRhdGlvbk1hcC5sZWFkaW5nSWNvbjtcbiAgICAvKiogQHR5cGUgeyFNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbnx1bmRlZmluZWR9ICovXG4gICAgdGhpcy50cmFpbGluZ0ljb25fID0gZm91bmRhdGlvbk1hcC50cmFpbGluZ0ljb247XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5pc0ZvY3VzZWRfID0gZmFsc2U7XG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMucmVjZWl2ZWRVc2VySW5wdXRfID0gZmFsc2U7XG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMudXNlQ3VzdG9tVmFsaWRpdHlDaGVja2luZ18gPSBmYWxzZTtcbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5pc1ZhbGlkXyA9IHRydWU7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51c2VOYXRpdmVWYWxpZGF0aW9uXyA9IHRydWU7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCk6IHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLmlucHV0Rm9jdXNIYW5kbGVyXyA9ICgpID0+IHRoaXMuYWN0aXZhdGVGb2N1cygpO1xuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oKTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuaW5wdXRCbHVySGFuZGxlcl8gPSAoKSA9PiB0aGlzLmRlYWN0aXZhdGVGb2N1cygpO1xuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oKTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuaW5wdXRJbnB1dEhhbmRsZXJfID0gKCkgPT4gdGhpcy5hdXRvQ29tcGxldGVGb2N1cygpO1xuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuc2V0UG9pbnRlclhPZmZzZXRfID0gKGV2dCkgPT4gdGhpcy5zZXRUcmFuc2Zvcm1PcmlnaW4oZXZ0KTtcbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmhhbmRsZVRleHRGaWVsZEludGVyYWN0aW9uKCk7XG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighQXJyYXkpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy52YWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcl8gPSAoYXR0cmlidXRlc0xpc3QpID0+IHRoaXMuaGFuZGxlVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZShhdHRyaWJ1dGVzTGlzdCk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFNdXRhdGlvbk9ic2VydmVyfSAqL1xuICAgIHRoaXMudmFsaWRhdGlvbk9ic2VydmVyXztcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNGb2N1c2VkKCkpIHtcbiAgICAgIHRoaXMuaW5wdXRGb2N1c0hhbmRsZXJfKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0xhYmVsKCkgJiYgdGhpcy5zaG91bGRGbG9hdCkge1xuICAgICAgdGhpcy5ub3RjaE91dGxpbmUodHJ1ZSk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmZsb2F0TGFiZWwodHJ1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuaW5wdXRGb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmlucHV0Qmx1ckhhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoJ2lucHV0JywgdGhpcy5pbnB1dElucHV0SGFuZGxlcl8pO1xuICAgIFsnbW91c2Vkb3duJywgJ3RvdWNoc3RhcnQnXS5mb3JFYWNoKChldnRUeXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgdGhpcy5zZXRQb2ludGVyWE9mZnNldF8pO1xuICAgIH0pO1xuICAgIFsnY2xpY2snLCAna2V5ZG93biddLmZvckVhY2goKGV2dFR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgdGhpcy50ZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICB9KTtcbiAgICB0aGlzLnZhbGlkYXRpb25PYnNlcnZlcl8gPVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXIodGhpcy52YWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcl8pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmlucHV0Rm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmlucHV0Qmx1ckhhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnB1dEludGVyYWN0aW9uSGFuZGxlcignaW5wdXQnLCB0aGlzLmlucHV0SW5wdXRIYW5kbGVyXyk7XG4gICAgWydtb3VzZWRvd24nLCAndG91Y2hzdGFydCddLmZvckVhY2goKGV2dFR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlcklucHV0SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIHRoaXMuc2V0UG9pbnRlclhPZmZzZXRfKTtcbiAgICB9KTtcbiAgICBbJ2NsaWNrJywgJ2tleWRvd24nXS5mb3JFYWNoKChldnRUeXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJUZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgdGhpcy50ZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICB9KTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcih0aGlzLnZhbGlkYXRpb25PYnNlcnZlcl8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdXNlciBpbnRlcmFjdGlvbnMgd2l0aCB0aGUgVGV4dCBGaWVsZC5cbiAgICovXG4gIGhhbmRsZVRleHRGaWVsZEludGVyYWN0aW9uKCkge1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmdldE5hdGl2ZUlucHV0KCkuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZWNlaXZlZFVzZXJJbnB1dF8gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdmFsaWRhdGlvbiBhdHRyaWJ1dGUgY2hhbmdlc1xuICAgKiBAcGFyYW0geyFBcnJheTxzdHJpbmc+fSBhdHRyaWJ1dGVzTGlzdFxuICAgKi9cbiAgaGFuZGxlVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZShhdHRyaWJ1dGVzTGlzdCkge1xuICAgIGF0dHJpYnV0ZXNMaXN0LnNvbWUoKGF0dHJpYnV0ZU5hbWUpID0+IHtcbiAgICAgIGlmIChWQUxJREFUSU9OX0FUVFJfV0hJVEVMSVNULmluZGV4T2YoYXR0cmlidXRlTmFtZSkgPiAtMSkge1xuICAgICAgICB0aGlzLnN0eWxlVmFsaWRpdHlfKHRydWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucy9jbG9zZXMgdGhlIG5vdGNoZWQgb3V0bGluZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBvcGVuTm90Y2hcbiAgICovXG4gIG5vdGNoT3V0bGluZShvcGVuTm90Y2gpIHtcbiAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaGFzT3V0bGluZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9wZW5Ob3RjaCkge1xuICAgICAgY29uc3QgaXNEZW5zZSA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5ERU5TRSk7XG4gICAgICBjb25zdCBsYWJlbFNjYWxlID0gaXNEZW5zZSA/IG51bWJlcnMuREVOU0VfTEFCRUxfU0NBTEUgOiBudW1iZXJzLkxBQkVMX1NDQUxFO1xuICAgICAgY29uc3QgbGFiZWxXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGFiZWxXaWR0aCgpICogbGFiZWxTY2FsZTtcbiAgICAgIHRoaXMuYWRhcHRlcl8ubm90Y2hPdXRsaW5lKGxhYmVsV2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmNsb3NlT3V0bGluZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIHRleHQgZmllbGQgZm9jdXMgc3RhdGUuXG4gICAqL1xuICBhY3RpdmF0ZUZvY3VzKCkge1xuICAgIHRoaXMuaXNGb2N1c2VkXyA9IHRydWU7XG4gICAgdGhpcy5zdHlsZUZvY3VzZWRfKHRoaXMuaXNGb2N1c2VkXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5hY3RpdmF0ZUxpbmVSaXBwbGUoKTtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNMYWJlbCgpKSB7XG4gICAgICB0aGlzLm5vdGNoT3V0bGluZSh0aGlzLnNob3VsZEZsb2F0KTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZmxvYXRMYWJlbCh0aGlzLnNob3VsZEZsb2F0KTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2hha2VMYWJlbCh0aGlzLnNob3VsZFNoYWtlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGVscGVyVGV4dF8pIHtcbiAgICAgIHRoaXMuaGVscGVyVGV4dF8uc2hvd1RvU2NyZWVuUmVhZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGxpbmUgcmlwcGxlJ3MgdHJhbnNmb3JtIG9yaWdpbiwgc28gdGhhdCB0aGUgbGluZSByaXBwbGUgYWN0aXZhdGVcbiAgICogYW5pbWF0aW9uIHdpbGwgYW5pbWF0ZSBvdXQgZnJvbSB0aGUgdXNlcidzIGNsaWNrIGxvY2F0aW9uLlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqL1xuICBzZXRUcmFuc2Zvcm1PcmlnaW4oZXZ0KSB7XG4gICAgbGV0IHRhcmdldEV2ZW50O1xuICAgIGlmIChldnQudG91Y2hlcykge1xuICAgICAgdGFyZ2V0RXZlbnQgPSBldnQudG91Y2hlc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0RXZlbnQgPSBldnQ7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldENsaWVudFJlY3QgPSB0YXJnZXRFdmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgbm9ybWFsaXplZFggPSB0YXJnZXRFdmVudC5jbGllbnRYIC0gdGFyZ2V0Q2xpZW50UmVjdC5sZWZ0O1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0TGluZVJpcHBsZVRyYW5zZm9ybU9yaWdpbihub3JtYWxpemVkWCk7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBUZXh0IEZpZWxkJ3MgZm9jdXMgc3RhdGUgaW4gY2FzZXMgd2hlbiB0aGUgaW5wdXQgdmFsdWVcbiAgICogY2hhbmdlcyB3aXRob3V0IHVzZXIgaW5wdXQgKGUuZy4gcHJvZ3JhbWF0aWNhbGx5KS5cbiAgICovXG4gIGF1dG9Db21wbGV0ZUZvY3VzKCkge1xuICAgIGlmICghdGhpcy5yZWNlaXZlZFVzZXJJbnB1dF8pIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVGb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgVGV4dCBGaWVsZCdzIGZvY3VzIHN0YXRlLlxuICAgKi9cbiAgZGVhY3RpdmF0ZUZvY3VzKCkge1xuICAgIHRoaXMuaXNGb2N1c2VkXyA9IGZhbHNlO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVhY3RpdmF0ZUxpbmVSaXBwbGUoKTtcbiAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy5pc1ZhbGlkKCk7XG4gICAgdGhpcy5zdHlsZVZhbGlkaXR5Xyhpc1ZhbGlkKTtcbiAgICB0aGlzLnN0eWxlRm9jdXNlZF8odGhpcy5pc0ZvY3VzZWRfKTtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNMYWJlbCgpKSB7XG4gICAgICB0aGlzLm5vdGNoT3V0bGluZSh0aGlzLnNob3VsZEZsb2F0KTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZmxvYXRMYWJlbCh0aGlzLnNob3VsZEZsb2F0KTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2hha2VMYWJlbCh0aGlzLnNob3VsZFNoYWtlKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnNob3VsZEZsb2F0KSB7XG4gICAgICB0aGlzLnJlY2VpdmVkVXNlcklucHV0XyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgRWxlbWVudC5cbiAgICovXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE5hdGl2ZUlucHV0XygpLnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0IG9uIHRoZSBpbnB1dCBFbGVtZW50LlxuICAgKi9cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAvLyBQcmV2ZW50IFNhZmFyaSBmcm9tIG1vdmluZyB0aGUgY2FyZXQgdG8gdGhlIGVuZCBvZiB0aGUgaW5wdXQgd2hlbiB0aGUgdmFsdWUgaGFzIG5vdCBjaGFuZ2VkLlxuICAgIGlmICh0aGlzLmdldFZhbHVlKCkgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLmdldE5hdGl2ZUlucHV0XygpLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLmlzVmFsaWQoKTtcbiAgICB0aGlzLnN0eWxlVmFsaWRpdHlfKGlzVmFsaWQpO1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0xhYmVsKCkpIHtcbiAgICAgIHRoaXMubm90Y2hPdXRsaW5lKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5mbG9hdExhYmVsKHRoaXMuc2hvdWxkRmxvYXQpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zaGFrZUxhYmVsKHRoaXMuc2hvdWxkU2hha2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBJZiBhIGN1c3RvbSB2YWxpZGl0eSBpcyBzZXQsIHJldHVybnMgdGhhdCB2YWx1ZS5cbiAgICogICAgIE90aGVyd2lzZSwgcmV0dXJucyB0aGUgcmVzdWx0IG9mIG5hdGl2ZSB2YWxpZGl0eSBjaGVja3MuXG4gICAqL1xuICBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLnVzZU5hdGl2ZVZhbGlkYXRpb25fXG4gICAgICA/IHRoaXMuaXNOYXRpdmVJbnB1dFZhbGlkXygpIDogdGhpcy5pc1ZhbGlkXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmFsaWQgU2V0cyB0aGUgdmFsaWRpdHkgc3RhdGUgb2YgdGhlIFRleHQgRmllbGQuXG4gICAqL1xuICBzZXRWYWxpZChpc1ZhbGlkKSB7XG4gICAgdGhpcy5pc1ZhbGlkXyA9IGlzVmFsaWQ7XG4gICAgdGhpcy5zdHlsZVZhbGlkaXR5Xyhpc1ZhbGlkKTtcblxuICAgIGNvbnN0IHNob3VsZFNoYWtlID0gIWlzVmFsaWQgJiYgIXRoaXMuaXNGb2N1c2VkXztcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNMYWJlbCgpKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNoYWtlTGFiZWwoc2hvdWxkU2hha2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIG9yIGRpc2FibGVzIHRoZSB1c2Ugb2YgbmF0aXZlIHZhbGlkYXRpb24uIFVzZSB0aGlzIGZvciBjdXN0b20gdmFsaWRhdGlvbi5cbiAgICogQHBhcmFtIHtib29sZWFufSB1c2VOYXRpdmVWYWxpZGF0aW9uIFNldCB0aGlzIHRvIGZhbHNlIHRvIGlnbm9yZSBuYXRpdmUgaW5wdXQgdmFsaWRhdGlvbi5cbiAgICovXG4gIHNldFVzZU5hdGl2ZVZhbGlkYXRpb24odXNlTmF0aXZlVmFsaWRhdGlvbikge1xuICAgIHRoaXMudXNlTmF0aXZlVmFsaWRhdGlvbl8gPSB1c2VOYXRpdmVWYWxpZGF0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIFRleHQgRmllbGQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldE5hdGl2ZUlucHV0XygpLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzYWJsZWQgU2V0cyB0aGUgdGV4dC1maWVsZCBkaXNhYmxlZCBvciBlbmFibGVkLlxuICAgKi9cbiAgc2V0RGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLmdldE5hdGl2ZUlucHV0XygpLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgdGhpcy5zdHlsZURpc2FibGVkXyhkaXNhYmxlZCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgU2V0cyB0aGUgY29udGVudCBvZiB0aGUgaGVscGVyIHRleHQuXG4gICAqL1xuICBzZXRIZWxwZXJUZXh0Q29udGVudChjb250ZW50KSB7XG4gICAgaWYgKHRoaXMuaGVscGVyVGV4dF8pIHtcbiAgICAgIHRoaXMuaGVscGVyVGV4dF8uc2V0Q29udGVudChjb250ZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgYXJpYSBsYWJlbCBvZiB0aGUgbGVhZGluZyBpY29uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxcbiAgICovXG4gIHNldExlYWRpbmdJY29uQXJpYUxhYmVsKGxhYmVsKSB7XG4gICAgaWYgKHRoaXMubGVhZGluZ0ljb25fKSB7XG4gICAgICB0aGlzLmxlYWRpbmdJY29uXy5zZXRBcmlhTGFiZWwobGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGxlYWRpbmcgaWNvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAgICovXG4gIHNldExlYWRpbmdJY29uQ29udGVudChjb250ZW50KSB7XG4gICAgaWYgKHRoaXMubGVhZGluZ0ljb25fKSB7XG4gICAgICB0aGlzLmxlYWRpbmdJY29uXy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBhcmlhIGxhYmVsIG9mIHRoZSB0cmFpbGluZyBpY29uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxcbiAgICovXG4gIHNldFRyYWlsaW5nSWNvbkFyaWFMYWJlbChsYWJlbCkge1xuICAgIGlmICh0aGlzLnRyYWlsaW5nSWNvbl8pIHtcbiAgICAgIHRoaXMudHJhaWxpbmdJY29uXy5zZXRBcmlhTGFiZWwobGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIHRyYWlsaW5nIGljb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gICAqL1xuICBzZXRUcmFpbGluZ0ljb25Db250ZW50KGNvbnRlbnQpIHtcbiAgICBpZiAodGhpcy50cmFpbGluZ0ljb25fKSB7XG4gICAgICB0aGlzLnRyYWlsaW5nSWNvbl8uc2V0Q29udGVudChjb250ZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgVGV4dCBGaWVsZCBpbnB1dCBmYWlscyBpbiBjb252ZXJ0aW5nIHRoZVxuICAgKiAgICAgdXNlci1zdXBwbGllZCB2YWx1ZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzQmFkSW5wdXRfKCkge1xuICAgIHJldHVybiB0aGlzLmdldE5hdGl2ZUlucHV0XygpLnZhbGlkaXR5LmJhZElucHV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRoZSByZXN1bHQgb2YgbmF0aXZlIHZhbGlkaXR5IGNoZWNraW5nXG4gICAqICAgICAoVmFsaWRpdHlTdGF0ZS52YWxpZCkuXG4gICAqL1xuICBpc05hdGl2ZUlucHV0VmFsaWRfKCkge1xuICAgIHJldHVybiB0aGlzLmdldE5hdGl2ZUlucHV0XygpLnZhbGlkaXR5LnZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0eWxlcyB0aGUgY29tcG9uZW50IGJhc2VkIG9uIHRoZSB2YWxpZGl0eSBzdGF0ZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc1ZhbGlkXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdHlsZVZhbGlkaXR5Xyhpc1ZhbGlkKSB7XG4gICAgY29uc3Qge0lOVkFMSUR9ID0gTURDVGV4dEZpZWxkRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKElOVkFMSUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKElOVkFMSUQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5oZWxwZXJUZXh0Xykge1xuICAgICAgdGhpcy5oZWxwZXJUZXh0Xy5zZXRWYWxpZGl0eShpc1ZhbGlkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3R5bGVzIHRoZSBjb21wb25lbnQgYmFzZWQgb24gdGhlIGZvY3VzZWQgc3RhdGUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNGb2N1c2VkXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdHlsZUZvY3VzZWRfKGlzRm9jdXNlZCkge1xuICAgIGNvbnN0IHtGT0NVU0VEfSA9IE1EQ1RleHRGaWVsZEZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBpZiAoaXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZPQ1VTRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZPQ1VTRUQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdHlsZXMgdGhlIGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgZGlzYWJsZWQgc3RhdGUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNEaXNhYmxlZFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3R5bGVEaXNhYmxlZF8oaXNEaXNhYmxlZCkge1xuICAgIGNvbnN0IHtESVNBQkxFRCwgSU5WQUxJRH0gPSBNRENUZXh0RmllbGRGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRElTQUJMRUQpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhJTlZBTElEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhESVNBQkxFRCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGVhZGluZ0ljb25fKSB7XG4gICAgICB0aGlzLmxlYWRpbmdJY29uXy5zZXREaXNhYmxlZChpc0Rpc2FibGVkKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50cmFpbGluZ0ljb25fKSB7XG4gICAgICB0aGlzLnRyYWlsaW5nSWNvbl8uc2V0RGlzYWJsZWQoaXNEaXNhYmxlZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFFbGVtZW50fCFOYXRpdmVJbnB1dFR5cGV9IFRoZSBuYXRpdmUgdGV4dCBpbnB1dCBmcm9tIHRoZVxuICAgKiBob3N0IGVudmlyb25tZW50LCBvciBhIGR1bW15IGlmIG5vbmUgZXhpc3RzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0TmF0aXZlSW5wdXRfKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmdldE5hdGl2ZUlucHV0KCkgfHxcbiAgICAvKiogQHR5cGUgeyFOYXRpdmVJbnB1dFR5cGV9ICovICh7XG4gICAgICB2YWx1ZTogJycsXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICB2YWxpZGl0eToge1xuICAgICAgICBiYWRJbnB1dDogZmFsc2UsXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENUZXh0RmllbGRGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBUZXh0RmllbGQgTGluZSBSaXBwbGUuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgbGluZSByaXBwbGUgaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ0xpbmVSaXBwbGVBZGFwdGVyIHtcbiAgLyoqXG4gICAqIEFkZHMgYSBjbGFzcyB0byB0aGUgbGluZSByaXBwbGUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2xhc3MgZnJvbSB0aGUgbGluZSByaXBwbGUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHN0eWxlIHByb3BlcnR5IHdpdGggcHJvcGVydHlOYW1lIHRvIHZhbHVlIG9uIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXRTdHlsZShwcm9wZXJ0eU5hbWUsIHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIGxpbmUgcmlwcGxlIGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckV2ZW50SGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEZXJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBvbiB0aGUgbGluZSByaXBwbGUgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJFdmVudEhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDTGluZVJpcHBsZUFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICBMSU5FX1JJUFBMRV9BQ1RJVkU6ICdtZGMtbGluZS1yaXBwbGUtLWFjdGl2ZScsXG4gIExJTkVfUklQUExFX0RFQUNUSVZBVElORzogJ21kYy1saW5lLXJpcHBsZS0tZGVhY3RpdmF0aW5nJyxcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDTGluZVJpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ0xpbmVSaXBwbGVBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENMaW5lUmlwcGxlRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QHNlZSBNRENMaW5lUmlwcGxlQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5cbiAgICogdHlwZXMuXG4gICAqIEByZXR1cm4geyFNRENMaW5lUmlwcGxlQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ0xpbmVSaXBwbGVBZGFwdGVyfSAqLyAoe1xuICAgICAgYWRkQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgaGFzQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgc2V0U3R5bGU6ICgpID0+IHt9LFxuICAgICAgcmVnaXN0ZXJFdmVudEhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckV2ZW50SGFuZGxlcjogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDTGluZVJpcHBsZUFkYXB0ZXI9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENMaW5lUmlwcGxlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9ICovXG4gICAgdGhpcy50cmFuc2l0aW9uRW5kSGFuZGxlcl8gPSAoZXZ0KSA9PiB0aGlzLmhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckV2ZW50SGFuZGxlcigndHJhbnNpdGlvbmVuZCcsIHRoaXMudHJhbnNpdGlvbkVuZEhhbmRsZXJfKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyRXZlbnRIYW5kbGVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy50cmFuc2l0aW9uRW5kSGFuZGxlcl8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgbGluZSByaXBwbGVcbiAgICovXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5MSU5FX1JJUFBMRV9ERUFDVElWQVRJTkcpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5MSU5FX1JJUFBMRV9BQ1RJVkUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNlbnRlciBvZiB0aGUgcmlwcGxlIGFuaW1hdGlvbiB0byB0aGUgZ2l2ZW4gWCBjb29yZGluYXRlLlxuICAgKiBAcGFyYW0ge251bWJlcn0geENvb3JkaW5hdGVcbiAgICovXG4gIHNldFJpcHBsZUNlbnRlcih4Q29vcmRpbmF0ZSkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0U3R5bGUoJ3RyYW5zZm9ybS1vcmlnaW4nLCBgJHt4Q29vcmRpbmF0ZX1weCBjZW50ZXJgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWFjdGl2YXRlcyB0aGUgbGluZSByaXBwbGVcbiAgICovXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkxJTkVfUklQUExFX0RFQUNUSVZBVElORyk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhIHRyYW5zaXRpb24gZW5kIGV2ZW50XG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KSB7XG4gICAgLy8gV2FpdCBmb3IgdGhlIGxpbmUgcmlwcGxlIHRvIGJlIGVpdGhlciB0cmFuc3BhcmVudCBvciBvcGFxdWVcbiAgICAvLyBiZWZvcmUgZW1pdHRpbmcgdGhlIGFuaW1hdGlvbiBlbmQgZXZlbnRcbiAgICBjb25zdCBpc0RlYWN0aXZhdGluZyA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5MSU5FX1JJUFBMRV9ERUFDVElWQVRJTkcpO1xuXG4gICAgaWYgKGV2dC5wcm9wZXJ0eU5hbWUgPT09ICdvcGFjaXR5Jykge1xuICAgICAgaWYgKGlzRGVhY3RpdmF0aW5nKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5MSU5FX1JJUFBMRV9BQ1RJVkUpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuTElORV9SSVBQTEVfREVBQ1RJVkFUSU5HKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDTGluZVJpcHBsZUZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIEZsb2F0aW5nIExhYmVsLlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIGZsb2F0aW5nIGxhYmVsIGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENGbG9hdGluZ0xhYmVsQWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIGEgY2xhc3MgdG8gdGhlIGxhYmVsIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGNsYXNzIGZyb20gdGhlIGxhYmVsIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd2lkdGggb2YgdGhlIGxhYmVsIGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSByb290IGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEZXJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBvbiB0aGUgcm9vdCBlbGVtZW50IGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGbG9hdGluZ0xhYmVsQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIExBQkVMX0ZMT0FUX0FCT1ZFOiAnbWRjLWZsb2F0aW5nLWxhYmVsLS1mbG9hdC1hYm92ZScsXG4gIExBQkVMX1NIQUtFOiAnbWRjLWZsb2F0aW5nLWxhYmVsLS1zaGFrZScsXG4gIFJPT1Q6ICdtZGMtZmxvYXRpbmctbGFiZWwnLFxufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENGbG9hdGluZ0xhYmVsQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QHNlZSBNRENGbG9hdGluZ0xhYmVsQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5cbiAgICogdHlwZXMuXG4gICAqIEByZXR1cm4geyFNRENGbG9hdGluZ0xhYmVsQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyfSAqLyAoe1xuICAgICAgYWRkQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgZ2V0V2lkdGg6ICgpID0+IHt9LFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDRmxvYXRpbmdMYWJlbEFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnNoYWtlQW5pbWF0aW9uRW5kSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmhhbmRsZVNoYWtlQW5pbWF0aW9uRW5kXygpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdhbmltYXRpb25lbmQnLCB0aGlzLnNoYWtlQW5pbWF0aW9uRW5kSGFuZGxlcl8pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2FuaW1hdGlvbmVuZCcsIHRoaXMuc2hha2VBbmltYXRpb25FbmRIYW5kbGVyXyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd2lkdGggb2YgdGhlIGxhYmVsIGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmdldFdpZHRoKCk7XG4gIH1cblxuICAvKipcbiAgICogU3R5bGVzIHRoZSBsYWJlbCB0byBwcm9kdWNlIHRoZSBsYWJlbCBzaGFrZSBmb3IgZXJyb3JzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZFNoYWtlIGFkZHMgc2hha2UgY2xhc3MgaWYgdHJ1ZSxcbiAgICogb3RoZXJ3aXNlIHJlbW92ZXMgc2hha2UgY2xhc3MuXG4gICAqL1xuICBzaGFrZShzaG91bGRTaGFrZSkge1xuICAgIGNvbnN0IHtMQUJFTF9TSEFLRX0gPSBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGlmIChzaG91bGRTaGFrZSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhMQUJFTF9TSEFLRSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTEFCRUxfU0hBS0UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdHlsZXMgdGhlIGxhYmVsIHRvIGZsb2F0IG9yIGRvY2suXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkRmxvYXQgYWRkcyBmbG9hdCBjbGFzcyBpZiB0cnVlLCBvdGhlcndpc2UgcmVtb3ZlXG4gICAqIGZsb2F0IGFuZCBzaGFrZSBjbGFzcyB0byBkb2NrIGxhYmVsLlxuICAgKi9cbiAgZmxvYXQoc2hvdWxkRmxvYXQpIHtcbiAgICBjb25zdCB7TEFCRUxfRkxPQVRfQUJPVkUsIExBQkVMX1NIQUtFfSA9IE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKHNob3VsZEZsb2F0KSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKExBQkVMX0ZMT0FUX0FCT1ZFKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhMQUJFTF9GTE9BVF9BQk9WRSk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKExBQkVMX1NIQUtFKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhbiBpbnRlcmFjdGlvbiBldmVudCBvbiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgaGFuZGxlU2hha2VBbmltYXRpb25FbmRfKCkge1xuICAgIGNvbnN0IHtMQUJFTF9TSEFLRX0gPSBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTEFCRUxfU0hBS0UpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBOb3RjaGVkIE91dGxpbmUuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgTm90Y2hlZCBPdXRsaW5lIGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENOb3RjaGVkT3V0bGluZUFkYXB0ZXIge1xuICAvKipcbiAgICogQWRkcyBhIGNsYXNzIHRvIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGNsYXNzIGZyb20gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB3aWR0aCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgbm90Y2ggZWxlbWVudC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gICAqL1xuICBzZXROb3RjaFdpZHRoUHJvcGVydHkod2lkdGgpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIHdpZHRoIHN0eWxlIHByb3BlcnR5IGZyb20gdGhlIG5vdGNoIGVsZW1lbnQuXG4gICAqL1xuICByZW1vdmVOb3RjaFdpZHRoUHJvcGVydHkoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENOb3RjaGVkT3V0bGluZUFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBzdHJpbmdzID0ge1xuICBOT1RDSF9FTEVNRU5UX1NFTEVDVE9SOiAnLm1kYy1ub3RjaGVkLW91dGxpbmVfX25vdGNoJyxcbn07XG5cbi8qKiBAZW51bSB7bnVtYmVyfSAqL1xuY29uc3QgbnVtYmVycyA9IHtcbiAgLy8gVGhpcyBzaG91bGQgc3RheSBpbiBzeW5jIHdpdGggJG1kYy1ub3RjaGVkLW91dGxpbmUtcGFkZGluZyAqIDIuXG4gIE5PVENIX0VMRU1FTlRfUEFERElORzogOCxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgT1VUTElORV9OT1RDSEVEOiAnbWRjLW5vdGNoZWQtb3V0bGluZS0tbm90Y2hlZCcsXG4gIE9VVExJTkVfVVBHUkFERUQ6ICdtZGMtbm90Y2hlZC1vdXRsaW5lLS11cGdyYWRlZCcsXG4gIE5PX0xBQkVMOiAnbWRjLW5vdGNoZWQtb3V0bGluZS0tbm8tbGFiZWwnLFxufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENOb3RjaGVkT3V0bGluZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENOb3RjaGVkT3V0bGluZUFkYXB0ZXI+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7bnVtYmVyfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDTm90Y2hlZE91dGxpbmVBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoKSA9PiB7fSxcbiAgICAgIHNldE5vdGNoV2lkdGhQcm9wZXJ0eTogKCkgPT4ge30sXG4gICAgICByZW1vdmVOb3RjaFdpZHRoUHJvcGVydHk6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlcn0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgb3V0bGluZSBub3RjaGVkIHNlbGVjdG9yIGFuZCB1cGRhdGVzIHRoZSBub3RjaCB3aWR0aFxuICAgKiBjYWxjdWxhdGVkIGJhc2VkIG9mZiBvZiBub3RjaFdpZHRoLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbm90Y2hXaWR0aFxuICAgKi9cbiAgbm90Y2gobm90Y2hXaWR0aCkge1xuICAgIGNvbnN0IHtPVVRMSU5FX05PVENIRUR9ID0gTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG5cbiAgICBpZiAobm90Y2hXaWR0aCA+IDApIHtcbiAgICAgIG5vdGNoV2lkdGggKz0gbnVtYmVycy5OT1RDSF9FTEVNRU5UX1BBRERJTkc7IC8vIEFkZCBwYWRkaW5nIGZyb20gbGVmdC9yaWdodC5cbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnNldE5vdGNoV2lkdGhQcm9wZXJ0eShub3RjaFdpZHRoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE9VVExJTkVfTk9UQ0hFRCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBub3RjaGVkIG91dGxpbmUgc2VsZWN0b3IgdG8gY2xvc2UgdGhlIG5vdGNoIGluIHRoZSBvdXRsaW5lLlxuICAgKi9cbiAgY2xvc2VOb3RjaCgpIHtcbiAgICBjb25zdCB7T1VUTElORV9OT1RDSEVEfSA9IE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoT1VUTElORV9OT1RDSEVEKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZU5vdGNoV2lkdGhQcm9wZXJ0eSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBGXG4gKi9cbmNsYXNzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENDb21wb25lbnR9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7Rj19IGZvdW5kYXRpb25cbiAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb290LCBmb3VuZGF0aW9uID0gdW5kZWZpbmVkLCAuLi5hcmdzKSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuICAgIHRoaXMucm9vdF8gPSByb290O1xuICAgIHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcbiAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgLy8gdGhpcy5yb290XyBpcyBkZWZpbmVkIGFuZCBjYW4gYmUgdXNlZCB3aXRoaW4gdGhlIGZvdW5kYXRpb24gY2xhc3MuXG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFGfSAqL1xuICAgIHRoaXMuZm91bmRhdGlvbl8gPSBmb3VuZGF0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmdldERlZmF1bHRGb3VuZGF0aW9uKCkgOiBmb3VuZGF0aW9uO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gIH1cblxuICBpbml0aWFsaXplKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshRn0gZm91bmRhdGlvblxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgLy8gY29tcG9uZW50LlxuICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogbGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgbGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gcmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiB1bmxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLFxuICAgKiB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFPYmplY3R9IGV2dERhdGFcbiAgICogQHBhcmFtIHtib29sZWFuPX0gc2hvdWxkQnViYmxlXG4gICAqL1xuICBlbWl0KGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gICAgbGV0IGV2dDtcbiAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5yb290Xy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBSaXBwbGUuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmdcbiAqIC0gY2xhc3Nlc1xuICogLSBkb21cbiAqIC0gQ1NTIHZhcmlhYmxlc1xuICogLSBwb3NpdGlvblxuICogLSBkaW1lbnNpb25zXG4gKiAtIHNjcm9sbCBwb3NpdGlvblxuICogLSBldmVudCBoYW5kbGVyc1xuICogLSB1bmJvdW5kZWQsIGFjdGl2ZSBhbmQgZGlzYWJsZWQgc3RhdGVzXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENSaXBwbGVBZGFwdGVyIHtcbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1VuYm91bmRlZCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZUFjdGl2ZSgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZURpc2FibGVkKCkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0geyFFdmVudFRhcmdldH0gdGFyZ2V0ICovXG4gIGNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFyTmFtZVxuICAgKiBAcGFyYW0gez9udW1iZXJ8c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgdXBkYXRlQ3NzVmFyaWFibGUodmFyTmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqIEByZXR1cm4geyFDbGllbnRSZWN0fSAqL1xuICBjb21wdXRlQm91bmRpbmdSZWN0KCkge31cblxuICAvKiogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gKi9cbiAgZ2V0V2luZG93UGFnZU9mZnNldCgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxuICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbn07XG5cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG4gIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxufTtcblxuY29uc3QgbnVtYmVycyA9IHtcbiAgUEFERElORzogMTAsXG4gIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLXRyYW5zbGF0ZS1kdXJhdGlvbiAoaS5lLiBhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLWZhZGUtb3V0LWR1cmF0aW9uIChpLmUuIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIFRBUF9ERUxBWV9NUzogMzAwLCAvLyBEZWxheSBiZXR3ZWVuIHRvdWNoIGFuZCBzaW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXNcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gYXBwbHlQYXNzaXZlIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c1Bhc3NpdmVfO1xuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAvLyBEZXRlY3QgdmVyc2lvbnMgb2YgRWRnZSB3aXRoIGJ1Z2d5IHZhcigpIHN1cHBvcnRcbiAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMTQ5NTQ0OC9cbiAgY29uc3QgZG9jdW1lbnQgPSB3aW5kb3dPYmouZG9jdW1lbnQ7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgLy8gVGhlIGJ1ZyBleGlzdHMgaWYgOjpiZWZvcmUgc3R5bGUgZW5kcyB1cCBwcm9wYWdhdGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gIC8vIEFkZGl0aW9uYWxseSwgZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIG51bGwgaW4gaWZyYW1lcyB3aXRoIGRpc3BsYXk6IFwibm9uZVwiIGluIEZpcmVmb3gsXG4gIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvd09iai5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBjb25zdCBoYXNQc2V1ZG9WYXJCdWcgPSBjb21wdXRlZFN0eWxlICE9PSBudWxsICYmIGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wU3R5bGUgPT09ICdzb2xpZCc7XG4gIG5vZGUucmVtb3ZlKCk7XG4gIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBsZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuXG4gIGNvbnN0IHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gd2luZG93T2JqLkNTUyAmJiB0eXBlb2Ygd2luZG93T2JqLkNTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTQ2NjlcbiAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgY29uc3Qgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKFxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKVxuICApO1xuXG4gIGlmIChleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cykge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgfSBlbHNlIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG59XG5cbi8vXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZCBpZiBzbywgdXNlIHRoZW0uXG4gKiBAcGFyYW0geyFXaW5kb3c9fSBnbG9iYWxPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnwhRXZlbnRMaXN0ZW5lck9wdGlvbnN9XG4gKi9cbmZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmogPSB3aW5kb3csIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwge2dldCBwYXNzaXZlKCkge1xuICAgICAgICBpc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBpc1N1cHBvcnRlZDtcbiAgICAgIH19KTtcbiAgICB9IGNhdGNoIChlKSB7IH1cblxuICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZDtcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfXG4gICAgPyAvKiogQHR5cGUgeyFFdmVudExpc3RlbmVyT3B0aW9uc30gKi8gKHtwYXNzaXZlOiB0cnVlfSlcbiAgICA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gSFRNTEVsZW1lbnRQcm90b3R5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gIC8qKlxuICAgKiBPcmRlciBpcyBpbXBvcnRhbnQgYmVjYXVzZSB3ZSByZXR1cm4gdGhlIGZpcnN0IGV4aXN0aW5nIG1ldGhvZCB3ZSBmaW5kLlxuICAgKiBEbyBub3QgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgaXRlbXMgaW4gdGhlIGJlbG93IGFycmF5LlxuICAgKi9cbiAgY29uc3QgbWF0Y2hlc01ldGhvZHMgPSBbJ21hdGNoZXMnLCAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJywgJ21zTWF0Y2hlc1NlbGVjdG9yJ107XG4gIGxldCBtZXRob2QgPSAnbWF0Y2hlcyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlc01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0aG9kID0gbWF0Y2hlc01ldGhvZHNbaV07XG4gICAgaWYgKG1hdGNoZXNNZXRob2QgaW4gSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgICAgIG1ldGhvZCA9IG1hdGNoZXNNZXRob2Q7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0aG9kO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUV2ZW50fSBldlxuICogQHBhcmFtIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSBwYWdlT2Zmc2V0XG4gKiBAcGFyYW0geyFDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXYsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgY29uc3Qge3gsIHl9ID0gcGFnZU9mZnNldDtcbiAgY29uc3QgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgY29uc3QgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuXG4gIGxldCBub3JtYWxpemVkWDtcbiAgbGV0IG5vcm1hbGl6ZWRZO1xuICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gIGlmIChldi50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICBldiA9IC8qKiBAdHlwZSB7IVRvdWNoRXZlbnR9ICovIChldik7XG4gICAgbm9ybWFsaXplZFggPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9IGVsc2Uge1xuICAgIGV2ID0gLyoqIEB0eXBlIHshTW91c2VFdmVudH0gKi8gKGV2KTtcbiAgICBub3JtYWxpemVkWCA9IGV2LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYucGFnZVkgLSBkb2N1bWVudFk7XG4gIH1cblxuICByZXR1cm4ge3g6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWX07XG59XG5cbmV4cG9ydCB7c3VwcG9ydHNDc3NWYXJpYWJsZXMsIGFwcGx5UGFzc2l2ZSwgZ2V0TWF0Y2hlc1Byb3BlcnR5LCBnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgaXNBY3RpdmF0ZWQ6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBhY3RpdmF0aW9uRXZlbnQ6ICghRXZlbnR8dW5kZWZpbmVkKSxcbiAqICAgaXNQcm9ncmFtbWF0aWM6IChib29sZWFufHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBBY3RpdmF0aW9uU3RhdGVUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGRlYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZm9jdXM6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgYmx1cjogKHN0cmluZ3x1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJJbmZvVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50KSxcbiAqICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50PSksXG4gKiAgIGZvY3VzOiBmdW5jdGlvbigpLFxuICogICBibHVyOiBmdW5jdGlvbigpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJzVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICB4OiBudW1iZXIsXG4gKiAgIHk6IG51bWJlclxuICogfX1cbiAqL1xubGV0IFBvaW50VHlwZTtcblxuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbmNvbnN0IEFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nLCAnbW91c2Vkb3duJywgJ2tleWRvd24nXTtcblxuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG5jb25zdCBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnXTtcblxuLy8gVHJhY2tzIGFjdGl2YXRpb25zIHRoYXQgaGF2ZSBvY2N1cnJlZCBvbiB0aGUgY3VycmVudCBmcmFtZSwgdG8gYXZvaWQgc2ltdWx0YW5lb3VzIG5lc3RlZCBhY3RpdmF0aW9uc1xuLyoqIEB0eXBlIHshQXJyYXk8IUV2ZW50VGFyZ2V0Pn0gKi9cbmxldCBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1JpcHBsZUFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENSaXBwbGVGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gbnVtYmVycztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IC8qIGJvb2xlYW4gLSBjYWNoZWQgKi8ge30sXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICgvKiB0YXJnZXQ6ICFFdmVudFRhcmdldCAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAoLyogdmFyTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IC8qIENsaWVudFJlY3QgKi8ge30sXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAvKiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9ICovIHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUgeyFDbGllbnRSZWN0fSAqL1xuICAgIHRoaXMuZnJhbWVfID0gLyoqIEB0eXBlIHshQ2xpZW50UmVjdH0gKi8gKHt3aWR0aDogMCwgaGVpZ2h0OiAwfSk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubWF4UmFkaXVzXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCl9ICovXG4gICAgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gKGUpID0+IHRoaXMuYWN0aXZhdGVfKGUpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9ICgpID0+IHRoaXMuZGVhY3RpdmF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5mb2N1c0hhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVGb2N1cygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmJsdXJIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlQmx1cigpO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyXyA9ICgpID0+IHRoaXMubGF5b3V0KCk7XG5cbiAgICAvKiogQHByaXZhdGUge3tsZWZ0OiBudW1iZXIsIHRvcDpudW1iZXJ9fSAqL1xuICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdTY2FsZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUV2ZW50fHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdXBwb3J0c1ByZXNzUmlwcGxlXygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9XG4gICAqL1xuICBkZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcblxuICAgIHRoaXMucmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpO1xuXG4gICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhST09UKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlcyBuZWVkIGxheW91dCBsb2dpYyBhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIHNldCBjb29yZGluYXRlcyBmb3IgYm90aCBzaGFkZSBhbmQgcmlwcGxlXG4gICAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCkpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2YXRpb25UaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoUk9PVCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudH0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSkge1xuICAgIGlmIChlLnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpIHtcbiAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcmVtb3ZlQ3NzVmFyc18oKSB7XG4gICAgY29uc3Qge3N0cmluZ3N9ID0gTURDUmlwcGxlRm91bmRhdGlvbjtcbiAgICBPYmplY3Qua2V5cyhzdHJpbmdzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBpZiAoay5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShzdHJpbmdzW2tdLCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFjdGl2YXRlXyhlKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgIGNvbnN0IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgY29uc3QgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBlICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZS50eXBlO1xuICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZSA9PT0gdW5kZWZpbmVkO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IGUgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICBlLnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3BvaW50ZXJkb3duJ1xuICAgICk7XG5cbiAgICBjb25zdCBoYXNBY3RpdmF0ZWRDaGlsZCA9IGUgIT09IHVuZGVmaW5lZCAmJiBhY3RpdmF0ZWRUYXJnZXRzLmxlbmd0aCA+IDAgJiYgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKFxuICAgICAgKHRhcmdldCkgPT4gdGhpcy5hZGFwdGVyXy5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkpO1xuICAgIGlmIChoYXNBY3RpdmF0ZWRDaGlsZCkge1xuICAgICAgLy8gSW1tZWRpYXRlbHkgcmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSwgd2hpbGUgcHJlc2VydmluZyBsb2dpYyB0aGF0IHByZXZlbnRzIHRvdWNoIGZvbGxvdy1vbiBldmVudHNcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKC8qKiBAdHlwZSB7IUV2ZW50VGFyZ2V0fSAqLyAoZS50YXJnZXQpKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSAmJiBlICE9PSB1bmRlZmluZWQgJiYgKGUua2V5ID09PSAnICcgfHwgZS5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgLy8gYWN0aXZlIHN0YXRlcyBpbmNvbnNpc3RlbnRseSB3aGVuIHRoZXkncmUgY2FsbGVkIHdpdGhpbiBldmVudCBoYW5kbGluZyBjb2RlOlxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgLy8gV2UgdHJ5IGZpcnN0IG91dHNpZGUgckFGIHRvIHN1cHBvcnQgRWRnZSwgd2hpY2ggZG9lcyBub3QgZXhoaWJpdCB0aGlzIHByb2JsZW0sIGJ1dCB3aWxsIGNyYXNoIGlmIGEgQ1NTXG4gICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSkge1xuICAgIHJldHVybiAoZSAhPT0gdW5kZWZpbmVkICYmIGUudHlwZSA9PT0gJ2tleWRvd24nKSA/IHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlQWN0aXZlKCkgOiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZXZlbnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICovXG4gIGFjdGl2YXRlKGV2ZW50KSB7XG4gICAgdGhpcy5hY3RpdmF0ZV8oZXZlbnQpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGFuaW1hdGVBY3RpdmF0aW9uXygpIHtcbiAgICBjb25zdCB7VkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtERUFDVElWQVRJT05fVElNRU9VVF9NU30gPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnM7XG5cbiAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuXG4gICAgbGV0IHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgbGV0IHRyYW5zbGF0ZUVuZCA9ICcnO1xuXG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIGNvbnN0IHtzdGFydFBvaW50LCBlbmRQb2ludH0gPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKTtcbiAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gYCR7c3RhcnRQb2ludC54fXB4LCAke3N0YXJ0UG9pbnQueX1weGA7XG4gICAgICB0cmFuc2xhdGVFbmQgPSBgJHtlbmRQb2ludC54fXB4LCAke2VuZFBvaW50Lnl9cHhgO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuXG4gICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm4ge3tzdGFydFBvaW50OiBQb2ludFR5cGUsIGVuZFBvaW50OiBQb2ludFR5cGV9fVxuICAgKi9cbiAgZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpIHtcbiAgICBjb25zdCB7YWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXJ9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuXG4gICAgbGV0IHN0YXJ0UG9pbnQ7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhcbiAgICAgICAgLyoqIEB0eXBlIHshRXZlbnR9ICovIChhY3RpdmF0aW9uRXZlbnQpLFxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICBjb25zdCBlbmRQb2ludCA9IHtcbiAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtzdGFydFBvaW50LCBlbmRQb2ludH07XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCkge1xuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtoYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWR9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGNvbnN0IGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcblxuICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKSB7XG4gICAgY29uc3Qge0ZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gIH1cblxuICByZXNldEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQsIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZWFjdGl2YXRlXygpIHtcbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSAvKiogQHR5cGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqLyAoT2JqZWN0LmFzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKSk7XG5cbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSkpO1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9IG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFuaW1hdGVEZWFjdGl2YXRpb25fKHt3YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlfSkge1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfVxuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgIH1cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGxheW91dEludGVybmFsXygpIHtcbiAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIGNvbnN0IG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuXG4gICAgLy8gU3VyZmFjZSBkaWFtZXRlciBpcyB0cmVhdGVkIGRpZmZlcmVudGx5IGZvciB1bmJvdW5kZWQgdnMuIGJvdW5kZWQgcmlwcGxlcy5cbiAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAvLyBzcXVhcmUpLiBCb3VuZGVkIHJpcHBsZXMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgZnVsbHkgZXhwZWN0ZWQgdG8gZXhwYW5kIGJleW9uZCB0aGUgc3VyZmFjZSdzIGxvbmdlc3QgZGlhbWV0ZXJcbiAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgIGNvbnN0IGdldEJvdW5kZWRSYWRpdXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMuZnJhbWVfLndpZHRoLCAyKSArIE1hdGgucG93KHRoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICB9O1xuXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpID8gbWF4RGltIDogZ2V0Qm91bmRlZFJhZGl1cygpO1xuXG4gICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICB0aGlzLmluaXRpYWxTaXplXyA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICB0aGlzLmZnU2NhbGVfID0gdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG5cbiAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgdXBkYXRlTGF5b3V0Q3NzVmFyc18oKSB7XG4gICAgY29uc3Qge1xuICAgICAgVkFSX0ZHX1NJWkUsIFZBUl9MRUZULCBWQVJfVE9QLCBWQVJfRkdfU0NBTEUsXG4gICAgfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIGAke3RoaXMuaW5pdGlhbFNpemVffXB4YCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnR9cHhgKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcH1weGApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXRVbmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgY29uc3Qge1VOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRm9jdXMoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKSk7XG4gIH1cblxuICBoYW5kbGVCbHVyKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCBNRENSaXBwbGVGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQGV4dGVuZHMgTURDQ29tcG9uZW50PCFNRENSaXBwbGVGb3VuZGF0aW9uPlxuICovXG5jbGFzcyBNRENSaXBwbGUgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKiogQHBhcmFtIHsuLi4/fSBhcmdzICovXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHt7aXNVbmJvdW5kZWQ6IChib29sZWFufHVuZGVmaW5lZCl9PX0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QsIHtpc1VuYm91bmRlZCA9IHVuZGVmaW5lZH0gPSB7fSkge1xuICAgIGNvbnN0IHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgLy8gT25seSBvdmVycmlkZSB1bmJvdW5kZWQgYmVoYXZpb3IgaWYgb3B0aW9uIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgaWYgKGlzVW5ib3VuZGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSAvKiogQHR5cGUge2Jvb2xlYW59ICovIChpc1VuYm91bmRlZCk7XG4gICAgfVxuICAgIHJldHVybiByaXBwbGU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshUmlwcGxlQ2FwYWJsZVN1cmZhY2V9IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUFkYXB0ZXIoaW5zdGFuY2UpIHtcbiAgICBjb25zdCBNQVRDSEVTID0gdXRpbC5nZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyksXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gaW5zdGFuY2UudW5ib3VuZGVkLFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiBpbnN0YW5jZS5yb290X1tNQVRDSEVTXSgnOmFjdGl2ZScpLFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IGluc3RhbmNlLmRpc2FibGVkLFxuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiAodGFyZ2V0KSA9PiBpbnN0YW5jZS5yb290Xy5jb250YWlucyh0YXJnZXQpLFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpLFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gaW5zdGFuY2Uucm9vdF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAoe3g6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0fSksXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgdW5ib3VuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0IHVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICB0aGlzLnVuYm91bmRlZF8gPSBCb29sZWFuKHVuYm91bmRlZCk7XG4gICAgdGhpcy5zZXRVbmJvdW5kZWRfKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc3VyZSBDb21waWxlciB0aHJvd3MgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3Igd2hlbiBkaXJlY3RseSBhY2Nlc3NpbmcgYVxuICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICogQnkgYWNjZXNzaW5nIHRoZSBwcm90ZWN0ZWQgcHJvcGVydHkgaW5zaWRlIGEgbWV0aG9kLCB3ZSBzb2x2ZSB0aGF0IHByb2JsZW0uXG4gICAqIFRoYXQncyB3aHkgdGhpcyBmdW5jdGlvbiBleGlzdHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRVbmJvdW5kZWRfKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VW5ib3VuZGVkKHRoaXMudW5ib3VuZGVkXyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUZvdW5kYXRpb259XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMudW5ib3VuZGVkID0gJ21kY1JpcHBsZUlzVW5ib3VuZGVkJyBpbiB0aGlzLnJvb3RfLmRhdGFzZXQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTZWUgTWF0ZXJpYWwgRGVzaWduIHNwZWMgZm9yIG1vcmUgZGV0YWlscyBvbiB3aGVuIHRvIHVzZSByaXBwbGVzLlxuICogaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL21vdGlvbi9jaG9yZW9ncmFwaHkuaHRtbCNjaG9yZW9ncmFwaHktY3JlYXRpb25cbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgUmlwcGxlQ2FwYWJsZVN1cmZhY2Uge31cblxuLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLnJvb3RfO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgYmxlZWRzIG91dCBvZiB0aGUgYm91bmRzIG9mIHRoZSBlbGVtZW50LlxuICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUudW5ib3VuZGVkO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgaXMgYXR0YWNoZWQgdG8gYSBkaXNhYmxlZCBjb21wb25lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS5kaXNhYmxlZDtcblxuZXhwb3J0IHtNRENSaXBwbGUsIE1EQ1JpcHBsZUZvdW5kYXRpb24sIFJpcHBsZUNhcGFibGVTdXJmYWNlLCB1dGlsfTtcbiIsImltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2luZGV4J1xuaW1wb3J0IHtcbiAgc3VwcG9ydHNDc3NWYXJpYWJsZXMsXG4gIGdldE1hdGNoZXNQcm9wZXJ0eSxcbiAgYXBwbHlQYXNzaXZlXG59IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvdXRpbCdcblxuZXhwb3J0IGNsYXNzIFJpcHBsZUJhc2UgZXh0ZW5kcyBNRENSaXBwbGVGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBNQVRDSEVTKCkge1xuICAgIC8qIGdsb2JhbCBIVE1MRWxlbWVudCAqL1xuICAgIHJldHVybiAoXG4gICAgICBSaXBwbGVCYXNlLl9tYXRjaGVzIHx8XG4gICAgICAoUmlwcGxlQmFzZS5fbWF0Y2hlcyA9IGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpKVxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cmZhY2VBY3RpdmUocmVmKSB7XG4gICAgcmV0dXJuIHJlZltSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZtLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbFtSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRkZWxldGUodm0uY2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogdGFyZ2V0ID0+IHZtLiRlbC5jb250YWlucyh0YXJnZXQpLFxuICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uc3R5bGVzLCB2YXJOYW1lLCB2YWx1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFJpcHBsZU1peGluID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzKVxuICAgIHRoaXMucmlwcGxlLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxjdXN0b20tZWxlbWVudCBcbiAgICA6dGFnPVwidGFnXCIgXG4gICAgOmNsYXNzZXM9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGVzPVwic3R5bGVzXCIgXG4gICAgY2xhc3M9XCJtZGMtcmlwcGxlXCI+XG4gICAgPHNsb3QgLz5cbiAgPC9jdXN0b20tZWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBDdXN0b21FbGVtZW50TWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlTWl4aW4gfSBmcm9tICcuL21kYy1yaXBwbGUtYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXJpcHBsZScsXG4gIG1peGluczogW0N1c3RvbUVsZW1lbnRNaXhpbiwgUmlwcGxlTWl4aW5dLFxuICBwcm9wczoge1xuICAgIHRhZzogU3RyaW5nXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50KGNvbXBpbGVkVGVtcGxhdGUsIGluamVjdFN0eWxlLCBkZWZhdWx0RXhwb3J0LCBzY29wZUlkLCBpc0Z1bmN0aW9uYWxUZW1wbGF0ZSwgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLywgaXNTaGFkb3dNb2RlLCBjcmVhdGVJbmplY3RvciwgY3JlYXRlSW5qZWN0b3JTU1IsIGNyZWF0ZUluamVjdG9yU2hhZG93KSB7XG4gICAgaWYgKHR5cGVvZiBpc1NoYWRvd01vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3JTU1IgPSBjcmVhdGVJbmplY3RvcjtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3IgPSBpc1NoYWRvd01vZGU7XG4gICAgICAgIGlzU2hhZG93TW9kZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gICAgY29uc3Qgb3B0aW9ucyA9IHR5cGVvZiBkZWZhdWx0RXhwb3J0ID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdEV4cG9ydC5vcHRpb25zIDogZGVmYXVsdEV4cG9ydDtcbiAgICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gICAgaWYgKGNvbXBpbGVkVGVtcGxhdGUgJiYgY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXIpIHtcbiAgICAgICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlcjtcbiAgICAgICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgICAgICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlO1xuICAgICAgICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzY29wZWRJZFxuICAgIGlmIChzY29wZUlkKSB7XG4gICAgICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkO1xuICAgIH1cbiAgICBsZXQgaG9vaztcbiAgICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgICAgICAvLyBzZXJ2ZXIgYnVpbGRcbiAgICAgICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICAgICAgICBjb250ZXh0ID1cbiAgICAgICAgICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KTsgLy8gZnVuY3Rpb25hbFxuICAgICAgICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICAgICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX187XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgICAgICAgaWYgKGluamVjdFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNTUihjb250ZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVyZW5jZVxuICAgICAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9vaztcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5qZWN0U3R5bGUpIHtcbiAgICAgICAgaG9vayA9IGlzU2hhZG93TW9kZVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNoYWRvdyh0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH07XG4gICAgfVxuICAgIGlmIChob29rKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcbiAgICAgICAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBob29rLmNhbGwoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlO1xuICAgICAgICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRFeHBvcnQ7XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICA6c3R5bGU9XCJ7IHdpZHRoOiBmdWxsd2lkdGggPyAnMTAwJScgOiB1bmRlZmluZWQgfVwiXG4gICAgOmlkPVwiaWRcIlxuICAgIGNsYXNzPVwibWRjLXRleHRmaWVsZC13cmFwcGVyXCJcbiAgPlxuICAgIDxkaXYgcmVmPVwicm9vdFwiIDpjbGFzcz1cInJvb3RDbGFzc2VzXCI+XG4gICAgICA8aVxuICAgICAgICB2LWlmPVwiISFoYXNMZWFkaW5nSWNvblwiXG4gICAgICAgIHJlZj1cImxlYWRpbmdJY29uXCJcbiAgICAgICAgOmNsYXNzPVwiaGFzTGVhZGluZ0ljb24uY2xhc3Nlc1wiXG4gICAgICAgIDp0YWJpbmRleD1cImxlYWRpbmdUYWJpbmRleFwiXG4gICAgICAgIDpyb2xlPVwibGVhZGluZ1JvbGVcIlxuICAgICAgICBjbGFzcz1cIm1kYy10ZXh0LWZpZWxkX19pY29uXCJcbiAgICAgID5cbiAgICAgICAgPHNsb3QgbmFtZT1cImxlYWRpbmctaWNvblwiPnt7IGhhc0xlYWRpbmdJY29uLmNvbnRlbnQgfX08L3Nsb3Q+XG4gICAgICA8L2k+XG5cbiAgICAgIDwhLS1cbiAgICAgICAgd29ya2Fycm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy9yb2xsdXAtcGx1Z2luLXZ1ZS9pc3N1ZXMvMTc0XG4gICAgICAtLT5cbiAgICAgIDwhLS0gZXNsaW50LWRpc2FibGUgdnVlL2h0bWwtc2VsZi1jbG9zaW5nIC0tPlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIHYtaWY9XCJtdWx0aWxpbmVcIlxuICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgIHYtYmluZD1cIiRhdHRyc1wiXG4gICAgICAgIDppZD1cInZtYV91aWRfXCJcbiAgICAgICAgOmNsYXNzPVwiaW5wdXRDbGFzc2VzXCJcbiAgICAgICAgOm1pbmxlbmd0aD1cIm1pbmxlbmd0aFwiXG4gICAgICAgIDptYXhsZW5ndGg9XCJtYXhsZW5ndGhcIlxuICAgICAgICA6cGxhY2Vob2xkZXI9XCJpbnB1dFBsYWNlSG9sZGVyXCJcbiAgICAgICAgOmFyaWEtbGFiZWw9XCJpbnB1dFBsYWNlSG9sZGVyXCJcbiAgICAgICAgOmFyaWEtY29udHJvbHM9XCJpbnB1dEFyaWFDb250cm9sc1wiXG4gICAgICAgIDpyb3dzPVwicm93c1wiXG4gICAgICAgIDpjb2xzPVwiY29sc1wiXG4gICAgICAgIHYtb249XCIkbGlzdGVuZXJzXCJcbiAgICAgICAgQGlucHV0PVwidXBkYXRlVmFsdWUoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgPjwvdGV4dGFyZWE+XG5cbiAgICAgIDxpbnB1dFxuICAgICAgICB2LWVsc2VcbiAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICB2LWJpbmQ9XCIkYXR0cnNcIlxuICAgICAgICA6aWQ9XCJ2bWFfdWlkX1wiXG4gICAgICAgIDpjbGFzcz1cImlucHV0Q2xhc3Nlc1wiXG4gICAgICAgIDp0eXBlPVwidHlwZVwiXG4gICAgICAgIDptaW5sZW5ndGg9XCJtaW5sZW5ndGhcIlxuICAgICAgICA6bWF4bGVuZ3RoPVwibWF4bGVuZ3RoXCJcbiAgICAgICAgOnBsYWNlaG9sZGVyPVwiaW5wdXRQbGFjZUhvbGRlclwiXG4gICAgICAgIDphcmlhLWxhYmVsPVwiaW5wdXRQbGFjZUhvbGRlclwiXG4gICAgICAgIDphcmlhLWNvbnRyb2xzPVwiaW5wdXRBcmlhQ29udHJvbHNcIlxuICAgICAgICB2LW9uPVwiJGxpc3RlbmVyc1wiXG4gICAgICAgIEBpbnB1dD1cInVwZGF0ZVZhbHVlKCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgIC8+XG5cbiAgICAgIDxsYWJlbFxuICAgICAgICB2LWlmPVwiaGFzTGFiZWxcIlxuICAgICAgICByZWY9XCJsYWJlbFwiXG4gICAgICAgIDpjbGFzcz1cImxhYmVsQ2xhc3Nlc1VwZ3JhZGVkXCJcbiAgICAgICAgOmZvcj1cInZtYV91aWRfXCJcbiAgICAgID5cbiAgICAgICAge3sgbGFiZWwgfX1cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxpXG4gICAgICAgIHYtaWY9XCIhIWhhc1RyYWlsaW5nSWNvblwiXG4gICAgICAgIHJlZj1cInRyYWlsaW5nSWNvblwiXG4gICAgICAgIDpjbGFzcz1cImhhc1RyYWlsaW5nSWNvbi5jbGFzc2VzXCJcbiAgICAgICAgOnRhYmluZGV4PVwidHJhaWxpbmdUYWJpbmRleFwiXG4gICAgICAgIDpyb2xlPVwidHJhaWxpbmdSb2xlXCJcbiAgICAgICAgY2xhc3M9XCJtZGMtdGV4dC1maWVsZF9faWNvblwiXG4gICAgICA+XG4gICAgICAgIDxzbG90IG5hbWU9XCJ0cmFpbGluZy1pY29uXCI+e3sgaGFzVHJhaWxpbmdJY29uLmNvbnRlbnQgfX08L3Nsb3Q+XG4gICAgICA8L2k+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgdi1pZj1cImhhc091dGxpbmVcIlxuICAgICAgICByZWY9XCJvdXRsaW5lXCJcbiAgICAgICAgOmNsYXNzPVwib3V0bGluZUNsYXNzZXNcIlxuICAgICAgICBjbGFzcz1cIm1kYy1ub3RjaGVkLW91dGxpbmVcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLW5vdGNoZWQtb3V0bGluZV9fbGVhZGluZ1wiPjwvZGl2PlxuICAgICAgICA8ZGl2IDpzdHlsZT1cIm5vdGNoU3R5bGVzXCIgY2xhc3M9XCJtZGMtbm90Y2hlZC1vdXRsaW5lX19ub3RjaFwiPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgdi1pZj1cImhhc091dGxpbmVMYWJlbFwiXG4gICAgICAgICAgICByZWY9XCJsYWJlbC1vdXRsaW5lXCJcbiAgICAgICAgICAgIDpjbGFzcz1cImxhYmVsQ2xhc3Nlc1VwZ3JhZGVkXCJcbiAgICAgICAgICAgIDpmb3I9XCJ2bWFfdWlkX1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgbGFiZWwgfX1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1kYy1mbG9hdGluZy1sYWJlbFwiPjwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLW5vdGNoZWQtb3V0bGluZV9fdHJhaWxpbmdcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLSA8ZGl2XG4gICAgICAgIHYtaWY9XCJoYXNPdXRsaW5lXCJcbiAgICAgICAgcmVmPVwib3V0bGluZUlkbGVcIlxuICAgICAgICBjbGFzcz1cIm1kYy1ub3RjaGVkLW91dGxpbmVfX2lkbGVcIlxuICAgICAgLz4gLS0+XG4gICAgICA8ZGl2XG4gICAgICAgIHYtaWY9XCJoYXNMaW5lUmlwcGxlXCJcbiAgICAgICAgcmVmPVwibGluZVJpcHBsZVwiXG4gICAgICAgIDpjbGFzcz1cImxpbmVSaXBwbGVDbGFzc2VzXCJcbiAgICAgICAgOnN0eWxlPVwibGluZVJpcHBsZVN0eWxlc1wiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHBcbiAgICAgIHYtaWY9XCJoZWxwdGV4dFwiXG4gICAgICByZWY9XCJoZWxwXCJcbiAgICAgIDppZD1cIidoZWxwLScgKyB2bWFfdWlkX1wiXG4gICAgICA6Y2xhc3M9XCJoZWxwQ2xhc3Nlc1wiXG4gICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgID5cbiAgICAgIHt7IGhlbHB0ZXh0IH19XG4gICAgPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTURDVGV4dGZpZWxkRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvdGV4dGZpZWxkL2ZvdW5kYXRpb24nXG5pbXBvcnQgTURDTGluZVJpcHBsZUZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2xpbmUtcmlwcGxlL2ZvdW5kYXRpb24nXG5pbXBvcnQgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL3RleHRmaWVsZC9oZWxwZXItdGV4dC9mb3VuZGF0aW9uJ1xuaW1wb3J0IE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9mb3VuZGF0aW9uJ1xuaW1wb3J0IE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9mb3VuZGF0aW9uJ1xuaW1wb3J0IE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvbm90Y2hlZC1vdXRsaW5lL2ZvdW5kYXRpb24nXG5cbmltcG9ydCB7XG4gIGV4dHJhY3RJY29uUHJvcCxcbiAgRGlzcGF0Y2hGb2N1c01peGluLFxuICBDdXN0b21FbGVtZW50TWl4aW4sXG4gIFZNQVVuaXF1ZUlkTWl4aW4sXG4gIGFwcGx5UGFzc2l2ZVxufSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlQmFzZSB9IGZyb20gJy4uL3JpcHBsZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRleHRmaWVsZCcsXG4gIG1peGluczogW0N1c3RvbUVsZW1lbnRNaXhpbiwgRGlzcGF0Y2hGb2N1c01peGluLCBWTUFVbmlxdWVJZE1peGluXSxcbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcbiAgbW9kZWw6IHtcbiAgICBwcm9wOiAndmFsdWUnLFxuICAgIGV2ZW50OiAnbW9kZWwnXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RleHQnLFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIFtcbiAgICAgICAgICAgICd0ZXh0JyxcbiAgICAgICAgICAgICdlbWFpbCcsXG4gICAgICAgICAgICAnc2VhcmNoJyxcbiAgICAgICAgICAgICdwYXNzd29yZCcsXG4gICAgICAgICAgICAndGVsJyxcbiAgICAgICAgICAgICd1cmwnLFxuICAgICAgICAgICAgJ251bWJlcidcbiAgICAgICAgICBdLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBkZW5zZTogQm9vbGVhbixcbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIGhlbHB0ZXh0OiBTdHJpbmcsXG4gICAgaGVscHRleHRQZXJzaXN0ZW50OiBCb29sZWFuLFxuICAgIGhlbHB0ZXh0VmFsaWRhdGlvbjogQm9vbGVhbixcbiAgICBvdXRsaW5lOiBCb29sZWFuLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIHJlcXVpcmVkOiBCb29sZWFuLFxuICAgIHZhbGlkOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxuICAgIGZ1bGx3aWR0aDogQm9vbGVhbixcbiAgICBtdWx0aWxpbmU6IEJvb2xlYW4sXG4gICAgbGVhZGluZ0ljb246IFtTdHJpbmcsIEFycmF5LCBPYmplY3RdLFxuICAgIHRyYWlsaW5nTm9uSW50ZXJhY3RpdmU6IEJvb2xlYW4sXG4gICAgbGVhZGluZ05vbkludGVyYWN0aXZlOiBCb29sZWFuLFxuICAgIHRyYWlsaW5nSWNvbjogW1N0cmluZywgQXJyYXksIE9iamVjdF0sXG4gICAgc2l6ZTogeyB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLCBkZWZhdWx0OiAyMCB9LFxuICAgIG1pbmxlbmd0aDogeyB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcbiAgICBtYXhsZW5ndGg6IHsgdHlwZTogW051bWJlciwgU3RyaW5nXSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXG4gICAgcm93czogeyB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLCBkZWZhdWx0OiA4IH0sXG4gICAgY29sczogeyB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLCBkZWZhdWx0OiA0MCB9LFxuICAgIGlkOiB7IHR5cGU6IFN0cmluZyB9XG4gIH0sXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0aGlzLnZhbHVlLFxuICAgICAgcm9vdENsYXNzZXM6IHtcbiAgICAgICAgJ21kYy10ZXh0ZmllbGQnOiB0cnVlLFxuICAgICAgICAnbWRjLXRleHQtZmllbGQnOiB0cnVlLFxuICAgICAgICAnbWRjLXRleHQtZmllbGQtLXVwZ3JhZGVkJzogdHJ1ZSxcbiAgICAgICAgJ21kYy10ZXh0LWZpZWxkLS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICdtZGMtdGV4dC1maWVsZC0tZGVuc2UnOiB0aGlzLmRlbnNlLFxuICAgICAgICAnbWRjLXRleHQtZmllbGQtLWZ1bGx3aWR0aCc6IHRoaXMuZnVsbHdpZHRoLFxuICAgICAgICAnbWRjLXRleHQtZmllbGQtLXRleHRhcmVhJzogdGhpcy5tdWx0aWxpbmUsXG4gICAgICAgICdtZGMtdGV4dC1maWVsZC0tb3V0bGluZWQnOiAhdGhpcy5mdWxsd2lkdGggJiYgdGhpcy5vdXRsaW5lXG4gICAgICB9LFxuICAgICAgaW5wdXRDbGFzc2VzOiB7XG4gICAgICAgICdtZGMtdGV4dC1maWVsZF9faW5wdXQnOiB0cnVlXG4gICAgICB9LFxuICAgICAgbGFiZWxDbGFzc2VzOiB7XG4gICAgICAgICdtZGMtZmxvYXRpbmctbGFiZWwnOiB0cnVlXG4gICAgICB9LFxuICAgICAgbGluZVJpcHBsZUNsYXNzZXM6IHtcbiAgICAgICAgJ21kYy1saW5lLXJpcHBsZSc6IHRydWVcbiAgICAgIH0sXG4gICAgICBsaW5lUmlwcGxlU3R5bGVzOiB7fSxcbiAgICAgIGhlbHBDbGFzc2VzOiB7XG4gICAgICAgICdtZGMtdGV4dC1maWVsZC1oZWxwZXItdGV4dCc6IHRydWUsXG4gICAgICAgICdtZGMtdGV4dC1maWVsZC1oZWxwZXItdGV4dC0tcGVyc2lzdGVudCc6IHRoaXMuaGVscHRleHRQZXJzaXN0ZW50LFxuICAgICAgICAnbWRjLXRleHQtZmllbGQtaGVscGVyLXRleHQtLXZhbGlkYXRpb24tbXNnJzogdGhpcy5oZWxwdGV4dFZhbGlkYXRpb25cbiAgICAgIH0sXG4gICAgICBvdXRsaW5lQ2xhc3Nlczoge30sXG4gICAgICBub3RjaFN0eWxlczoge31cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbGVhZGluZ1RhYmluZGV4KCkge1xuICAgICAgaWYgKCF0aGlzLmxlYWRpbmdOb25JbnRlcmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gJzAnXG4gICAgICB9XG4gICAgfSxcblxuICAgIGxlYWRpbmdSb2xlKCkge1xuICAgICAgaWYgKCF0aGlzLmxlYWRpbmdOb25JbnRlcmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gJ2J1dHRvbidcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdHJhaWxpbmdUYWJpbmRleCgpIHtcbiAgICAgIGlmICghdGhpcy50cmFpbGluZ05vbkludGVyYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiAnMCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdHJhaWxpbmdSb2xlKCkge1xuICAgICAgaWYgKCF0aGlzLnRyYWlsaW5nTm9uSW50ZXJhY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuICdidXR0b24nXG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dFBsYWNlSG9sZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZnVsbHdpZHRoID8gdGhpcy5sYWJlbCA6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgaW5wdXRBcmlhQ29udHJvbHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oZWxwID8gJ2hlbHAtJyArIHRoaXMudm1hX3VpZF8gOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGhhc0xhYmVsKCkge1xuICAgICAgcmV0dXJuICF0aGlzLmZ1bGx3aWR0aCAmJiAhdGhpcy5vdXRsaW5lICYmIHRoaXMubGFiZWxcbiAgICB9LFxuXG4gICAgaGFzT3V0bGluZUxhYmVsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGFzT3V0bGluZSAmJiB0aGlzLmxhYmVsXG4gICAgfSxcbiAgICBoYXNPdXRsaW5lKCkge1xuICAgICAgcmV0dXJuICF0aGlzLmZ1bGx3aWR0aCAmJiB0aGlzLm91dGxpbmVcbiAgICB9LFxuICAgIGhhc0xpbmVSaXBwbGUoKSB7XG4gICAgICByZXR1cm4gIXRoaXMuaGFzT3V0bGluZSAmJiAhdGhpcy5tdWx0aWxpbmVcbiAgICB9LFxuICAgIGhhc0xlYWRpbmdJY29uKCkge1xuICAgICAgaWYgKHRoaXMubGVhZGluZ0ljb24gfHwgdGhpcy4kc2xvdHNbJ2xlYWRpbmctaWNvbiddKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlYWRpbmdJY29uID8gZXh0cmFjdEljb25Qcm9wKHRoaXMubGVhZGluZ0ljb24pIDoge31cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0sXG4gICAgaGFzVHJhaWxpbmdJY29uKCkge1xuICAgICAgaWYgKHRoaXMudHJhaWxpbmdJY29uIHx8IHRoaXMuJHNsb3RzWyd0cmFpbGluZy1pY29uJ10pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhaWxpbmdJY29uID8gZXh0cmFjdEljb25Qcm9wKHRoaXMudHJhaWxpbmdJY29uKSA6IHt9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9LFxuICAgIGxhYmVsQ2xhc3Nlc1VwZ3JhZGVkKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcy5sYWJlbENsYXNzZXMsIHtcbiAgICAgICAgJ21kYy1mbG9hdGluZy1sYWJlbC0tZmxvYXQtYWJvdmUnOiB0aGlzLnZhbHVlXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBkaXNhYmxlZCgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbiAmJiB0aGlzLmZvdW5kYXRpb24uc2V0RGlzYWJsZWQodGhpcy5kaXNhYmxlZClcbiAgICB9LFxuICAgIHJlcXVpcmVkKCkge1xuICAgICAgdGhpcy4kcmVmcy5pbnB1dCAmJiAodGhpcy4kcmVmcy5pbnB1dC5yZXF1aXJlZCA9IHRoaXMucmVxdWlyZWQpXG4gICAgfSxcbiAgICB2YWxpZCgpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy52YWxpZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uICYmIHRoaXMuZm91bmRhdGlvbi5zZXRWYWxpZCh0aGlzLnZhbGlkKVxuICAgICAgfVxuICAgIH0sXG4gICAgZGVuc2UoKSB7XG4gICAgICB0aGlzLiRzZXQodGhpcy5yb290Q2xhc3NlcywgJ21kYy10ZXh0LWZpZWxkLS1kZW5zZScsIHRoaXMuZGVuc2UpXG4gICAgfSxcbiAgICBoZWxwdGV4dFBlcnNpc3RlbnQoKSB7XG4gICAgICB0aGlzLmhlbHBlclRleHRGb3VuZGF0aW9uICYmXG4gICAgICAgIHRoaXMuaGVscGVyVGV4dEZvdW5kYXRpb24uc2V0UGVyc2lzdGVudCh0aGlzLmhlbHB0ZXh0UGVyc2lzdGVudClcbiAgICB9LFxuICAgIGhlbHB0ZXh0VmFsaWRhdGlvbigpIHtcbiAgICAgIHRoaXMuaGVscGVyVGV4dEZvdW5kYXRpb24gJiZcbiAgICAgICAgdGhpcy5oZWxwZXJUZXh0Rm91bmRhdGlvbi5zZXRWYWxpZGF0aW9uKHRoaXMuaGVscHRleHRWYWxpZGF0aW9uKVxuICAgIH0sXG4gICAgdmFsdWUodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmZvdW5kYXRpb24pIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLmZvdW5kYXRpb24uZ2V0VmFsdWUoKSkge1xuICAgICAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRWYWx1ZSh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBpZiAodGhpcy4kcmVmcy5saW5lUmlwcGxlKSB7XG4gICAgICB0aGlzLmxpbmVSaXBwbGVGb3VuZGF0aW9uID0gbmV3IE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uKHtcbiAgICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgICAgdGhpcy4kc2V0KHRoaXMubGluZVJpcHBsZUNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgICAgdGhpcy4kZGVsZXRlKHRoaXMubGluZVJpcHBsZUNsYXNzZXMsIGNsYXNzTmFtZSlcbiAgICAgICAgfSxcbiAgICAgICAgaGFzQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgICAgdGhpcy4kcmVmcy5saW5lUmlwcGxlLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXG4gICAgICAgIH0sXG4gICAgICAgIHNldFN0eWxlOiAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLiRzZXQodGhpcy5saW5lUmlwcGxlU3R5bGVzLCBuYW1lLCB2YWx1ZSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVnaXN0ZXJFdmVudEhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgdGhpcy4kcmVmcy5saW5lUmlwcGxlLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcilcbiAgICAgICAgfSxcbiAgICAgICAgZGVyZWdpc3RlckV2ZW50SGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICB0aGlzLiRyZWZzLmxpbmVSaXBwbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy5saW5lUmlwcGxlRm91bmRhdGlvbi5pbml0KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy4kcmVmcy5oZWxwKSB7XG4gICAgICB0aGlzLmhlbHBlclRleHRGb3VuZGF0aW9uID0gbmV3IE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uKHtcbiAgICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgICAgdGhpcy4kc2V0KHRoaXMuaGVscENsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgICAgdGhpcy4kZGVsZXRlKHRoaXMuaGVscENsYXNzZXMsIGNsYXNzTmFtZSlcbiAgICAgICAgfSxcbiAgICAgICAgaGFzQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuaGVscC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKVxuICAgICAgICB9LFxuICAgICAgICBzZXRBdHRyOiAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLiRyZWZzLmhlbHAuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICB9LFxuICAgICAgICByZW1vdmVBdHRyOiBuYW1lID0+IHtcbiAgICAgICAgICB0aGlzLiRyZWZzLmhlbHAucmVtb3ZlQXR0cmlidXRlKG5hbWUpXG4gICAgICAgIH0sXG4gICAgICAgIHNldENvbnRlbnQ6ICgvKmNvbnRlbnQqLykgPT4ge1xuICAgICAgICAgIC8vIGhlbHAgdGV4dCBnZXQncyB1cGRhdGVkIGZyb20ge3toZWxwdGV4dH19XG4gICAgICAgICAgLy8gdGhpcy4kcmVmcy5oZWxwLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMuaGVscGVyVGV4dEZvdW5kYXRpb24uaW5pdCgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzTGVhZGluZ0ljb24pIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLnJvb3RDbGFzc2VzLCAnbWRjLXRleHQtZmllbGQtLXdpdGgtbGVhZGluZy1pY29uJywgdHJ1ZSlcbiAgICAgIHRoaXMubGVhZGluZ0ljb25Gb3VuZGF0aW9uID0gbmV3IE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uKHtcbiAgICAgICAgc2V0QXR0cjogKGF0dHIsIHZhbHVlKSA9PlxuICAgICAgICAgIHRoaXMuJHJlZnMubGVhZGluZ0ljb24uc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKSxcbiAgICAgICAgZ2V0QXR0cjogYXR0ciA9PiB0aGlzLiRyZWZzLmxlYWRpbmdJY29uLmdldEF0dHJpYnV0ZShhdHRyKSxcbiAgICAgICAgcmVtb3ZlQXR0cjogYXR0ciA9PiB0aGlzLiRyZWZzLmxlYWRpbmdJY29uLnJlbW92ZUF0dHJpYnV0ZShhdHRyKSxcbiAgICAgICAgc2V0Q29udGVudDogKC8qY29udGVudCovKSA9PiB7XG4gICAgICAgICAgLy8gaWNvbiB0ZXh0IGdldCdzIHVwZGF0ZWQgZnJvbSB7e3t7IGhhc1RyYWlsaW5nSWNvbi5jb250ZW50IH19fX1cbiAgICAgICAgICAvLyB0aGlzLiRyZWZzLmljb24udGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB9LFxuICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICB0aGlzLiRyZWZzLmxlYWRpbmdJY29uLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcilcbiAgICAgICAgfSxcbiAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICB0aGlzLiRyZWZzLmxlYWRpbmdJY29uLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcilcbiAgICAgICAgfSxcbiAgICAgICAgbm90aWZ5SWNvbkFjdGlvbjogKCkgPT4gdGhpcy4kZW1pdCgnbGVhZGluZ2ljb24tYWN0aW9uJylcbiAgICAgIH0pXG4gICAgICB0aGlzLmxlYWRpbmdJY29uRm91bmRhdGlvbi5pbml0KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNUcmFpbGluZ0ljb24pIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLnJvb3RDbGFzc2VzLCAnbWRjLXRleHQtZmllbGQtLXdpdGgtdHJhaWxpbmctaWNvbicsIHRydWUpXG4gICAgICB0aGlzLnRyYWlsaW5nSWNvbkZvdW5kYXRpb24gPSBuZXcgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24oe1xuICAgICAgICBzZXRBdHRyOiAoYXR0ciwgdmFsdWUpID0+XG4gICAgICAgICAgdGhpcy4kcmVmcy50cmFpbGluZ0ljb24uc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKSxcbiAgICAgICAgZ2V0QXR0cjogYXR0ciA9PiB0aGlzLiRyZWZzLnRyYWlsaW5nSWNvbi5nZXRBdHRyaWJ1dGUoYXR0ciksXG4gICAgICAgIHJlbW92ZUF0dHI6IGF0dHIgPT4gdGhpcy4kcmVmcy50cmFpbGluZ0ljb24ucmVtb3ZlQXR0cmlidXRlKGF0dHIpLFxuICAgICAgICBzZXRDb250ZW50OiAoLypjb250ZW50Ki8pID0+IHtcbiAgICAgICAgICAvLyBpY29uIHRleHQgZ2V0J3MgdXBkYXRlZCBmcm9tIHt7e3sgaGFzVHJhaWxpbmdJY29uLmNvbnRlbnQgfX19fVxuICAgICAgICAgIC8vIHRoaXMuJHJlZnMuaWNvbi50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgIHRoaXMuJHJlZnMudHJhaWxpbmdJY29uLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcilcbiAgICAgICAgfSxcbiAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICB0aGlzLiRyZWZzLnRyYWlsaW5nSWNvbi5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpXG4gICAgICAgIH0sXG4gICAgICAgIG5vdGlmeUljb25BY3Rpb246ICgpID0+IHRoaXMuJGVtaXQoJ3RyYWlubGluZ2ljb24tYWN0aW9uJylcbiAgICAgIH0pXG4gICAgICB0aGlzLnRyYWlsaW5nSWNvbkZvdW5kYXRpb24uaW5pdCgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuJHJlZnMubGFiZWwgfHwgdGhpcy4kcmVmc1snbGFiZWwtb3V0bGluZSddKSB7XG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMuJHJlZnMubGFiZWwgfHwgdGhpcy4kcmVmc1snbGFiZWwtb3V0bGluZSddXG4gICAgICB0aGlzLmxhYmVsRm91bmRhdGlvbiA9IG5ldyBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbih7XG4gICAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmxhYmVsQ2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKVxuICAgICAgICB9LFxuICAgICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICB0aGlzLiRkZWxldGUodGhpcy5sYWJlbENsYXNzZXMsIGNsYXNzTmFtZSlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0V2lkdGg6ICgpID0+IGxhYmVsLm9mZnNldFdpZHRoLFxuICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpXG4gICAgICAgIH0sXG4gICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgbGFiZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy5sYWJlbEZvdW5kYXRpb24uaW5pdCgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuJHJlZnMub3V0bGluZSkge1xuICAgICAgdGhpcy5vdXRsaW5lRm91bmRhdGlvbiA9IG5ldyBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24oe1xuICAgICAgICBhZGRDbGFzczogY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICB0aGlzLiRzZXQodGhpcy5vdXRsaW5lQ2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKVxuICAgICAgICB9LFxuICAgICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICB0aGlzLiRkZWxldGUodGhpcy5vdXRsaW5lQ2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICB9LFxuICAgICAgICBzZXROb3RjaFdpZHRoUHJvcGVydHk6IHdpZHRoID0+XG4gICAgICAgICAgdGhpcy4kc2V0KHRoaXMubm90Y2hTdHlsZXMsICd3aWR0aCcsIHdpZHRoID4gMCA/IHdpZHRoICsgJ3B4JyA6ICcwJylcbiAgICAgIH0pXG4gICAgICB0aGlzLm91dGxpbmVGb3VuZGF0aW9uLmluaXQoKVxuICAgIH1cblxuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENUZXh0ZmllbGRGb3VuZGF0aW9uKFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucm9vdENsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICAgICAgdGhpcy4kZGVsZXRlKHRoaXMucm9vdENsYXNzZXMsIGNsYXNzTmFtZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhhc0NsYXNzOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5yb290LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMucm9vdC5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5yb290LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzRm9jdXNlZDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuJHJlZnMuaW5wdXRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzUnRsOiAoKSA9PlxuICAgICAgICAgICAgd2luZG93XG4gICAgICAgICAgICAgIC5nZXRDb21wdXRlZFN0eWxlKHRoaXMuJHJlZnMucm9vdClcbiAgICAgICAgICAgICAgLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJyxcblxuICAgICAgICAgIHJlZ2lzdGVyVmFsaWRhdGlvbkF0dHJpYnV0ZUNoYW5nZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2V0QXR0cmlidXRlc0xpc3QgPSBtdXRhdGlvbnNMaXN0ID0+XG4gICAgICAgICAgICAgIG11dGF0aW9uc0xpc3QubWFwKG11dGF0aW9uID0+IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUpXG4gICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9uc0xpc3QgPT5cbiAgICAgICAgICAgICAgaGFuZGxlcihnZXRBdHRyaWJ1dGVzTGlzdChtdXRhdGlvbnNMaXN0KSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSB0aGlzLiRyZWZzLmlucHV0XG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUgfVxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCBjb25maWcpXG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJWYWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcjogb2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0aGlzLmdldElucHV0QWRhcHRlck1ldGhvZHMoKSxcbiAgICAgICAgdGhpcy5nZXRMYWJlbEFkYXB0ZXJNZXRob2RzKCksXG4gICAgICAgIHRoaXMuZ2V0TGluZVJpcHBsZUFkYXB0ZXJNZXRob2RzKCksXG4gICAgICAgIHRoaXMuZ2V0T3V0bGluZUFkYXB0ZXJNZXRob2RzKClcbiAgICAgICksXG4gICAgICB7XG4gICAgICAgIGhlbHBlclRleHQ6IHRoaXMuaGVscGVyVGV4dEZvdW5kYXRpb24sXG4gICAgICAgIGxlYWRpbmdJY29uOiB0aGlzLmxlYWRpbmdJY29uRm91bmRhdGlvbixcbiAgICAgICAgdHJhaWxpbmdJY29uOiB0aGlzLnRyYWlsaW5nRm91bmRhdGlvblxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcbiAgICB0aGlzLmZvdW5kYXRpb24uc2V0VmFsdWUodGhpcy52YWx1ZSlcbiAgICB0aGlzLmZvdW5kYXRpb24uc2V0RGlzYWJsZWQodGhpcy5kaXNhYmxlZClcbiAgICB0aGlzLiRyZWZzLmlucHV0ICYmICh0aGlzLiRyZWZzLmlucHV0LnJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZClcbiAgICBpZiAodHlwZW9mIHRoaXMudmFsaWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0VmFsaWQodGhpcy52YWxpZClcbiAgICB9XG5cbiAgICBpZiAodGhpcy50ZXh0Ym94KSB7XG4gICAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgICB0aGlzLnJpcHBsZS5pbml0KClcbiAgICB9XG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uICYmIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgICB0aGlzLmxpbmVSaXBwbGVGb3VuZGF0aW9uICYmIHRoaXMubGluZVJpcHBsZUZvdW5kYXRpb24uZGVzdHJveSgpXG4gICAgdGhpcy5oZWxwZXJUZXh0Rm91bmRhdGlvbiAmJiB0aGlzLmhlbHBlclRleHRGb3VuZGF0aW9uLmRlc3Ryb3koKVxuICAgIHRoaXMubGVhZGluZ0ljb25Gb3VuZGF0aW9uICYmIHRoaXMubGVhZGluZ0ljb25Gb3VuZGF0aW9uLmRlc3Ryb3koKVxuICAgIHRoaXMudHJhaWxpbmdJY29uRm91bmRhdGlvbiAmJiB0aGlzLnRyYWlsaW5nSWNvbkZvdW5kYXRpb24uZGVzdHJveSgpXG4gICAgdGhpcy5sYWJlbEZvdW5kYXRpb24gJiYgdGhpcy5sYWJlbEZvdW5kYXRpb24uZGVzdHJveSgpXG4gICAgdGhpcy5vdXRsaW5lRm91bmRhdGlvbiAmJiB0aGlzLm91dGxpbmVGb3VuZGF0aW9uLmRlc3Ryb3koKVxuICAgIHRoaXMucmlwcGxlICYmIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0SW5wdXRBZGFwdGVyTWV0aG9kcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgdGhpcy4kcmVmcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICB9LFxuICAgICAgICBkZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgdGhpcy4kcmVmcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICB9LFxuICAgICAgICBnZXROYXRpdmVJbnB1dDogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLmlucHV0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGdldExhYmVsQWRhcHRlck1ldGhvZHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaGFrZUxhYmVsOiBzaG91bGRTaGFrZSA9PiB7XG4gICAgICAgICAgdGhpcy5sYWJlbEZvdW5kYXRpb24uc2hha2Uoc2hvdWxkU2hha2UpXG4gICAgICAgIH0sXG4gICAgICAgIGZsb2F0TGFiZWw6IHNob3VsZEZsb2F0ID0+IHtcbiAgICAgICAgICB0aGlzLmxhYmVsRm91bmRhdGlvbi5mbG9hdChzaG91bGRGbG9hdClcbiAgICAgICAgfSxcbiAgICAgICAgaGFzTGFiZWw6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gISF0aGlzLiRyZWZzLmxhYmVsIHx8ICEhdGhpcy4kcmVmc1snbGFiZWwtb3V0bGluZSddXG4gICAgICAgIH0sXG4gICAgICAgIGdldExhYmVsV2lkdGg6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5sYWJlbEZvdW5kYXRpb24uZ2V0V2lkdGgoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRMaW5lUmlwcGxlQWRhcHRlck1ldGhvZHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZWFjdGl2YXRlTGluZVJpcHBsZTogKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmxpbmVSaXBwbGVGb3VuZGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVSaXBwbGVGb3VuZGF0aW9uLmRlYWN0aXZhdGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZhdGVMaW5lUmlwcGxlOiAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMubGluZVJpcHBsZUZvdW5kYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMubGluZVJpcHBsZUZvdW5kYXRpb24uYWN0aXZhdGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0TGluZVJpcHBsZVRyYW5zZm9ybU9yaWdpbjogbm9ybWFsaXplZFggPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmxpbmVSaXBwbGVGb3VuZGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVSaXBwbGVGb3VuZGF0aW9uLnNldFJpcHBsZUNlbnRlcihub3JtYWxpemVkWClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGdldE91dGxpbmVBZGFwdGVyTWV0aG9kcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhhc091dGxpbmU6ICgpID0+ICEhdGhpcy5oYXNPdXRsaW5lLFxuICAgICAgICBub3RjaE91dGxpbmU6IChub3RjaFdpZHRoLCBpc1J0bCkgPT5cbiAgICAgICAgICB0aGlzLm91dGxpbmVGb3VuZGF0aW9uLm5vdGNoKG5vdGNoV2lkdGgsIGlzUnRsKSxcbiAgICAgICAgY2xvc2VPdXRsaW5lOiAoKSA9PiB0aGlzLm91dGxpbmVGb3VuZGF0aW9uLmNsb3NlTm90Y2goKVxuICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlVmFsdWUodmFsdWUpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ21vZGVsJywgdmFsdWUpXG4gICAgfSxcbiAgICBmb2N1cygpIHtcbiAgICAgIHRoaXMuJHJlZnMuaW5wdXQgJiYgdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpXG4gICAgfSxcbiAgICBibHVyKCkge1xuICAgICAgdGhpcy4kcmVmcy5pbnB1dCAmJiB0aGlzLiRyZWZzLmlucHV0LmJsdXIoKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBtZGNUZXh0RmllbGQgZnJvbSAnLi9tZGMtdGV4dGZpZWxkLnZ1ZSdcblxuZXhwb3J0IHsgbWRjVGV4dEZpZWxkIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY1RleHRGaWVsZFxufSlcbiIsImltcG9ydCAnLi9zdHlsZXMuc2NzcydcbmltcG9ydCB7IGF1dG9Jbml0IH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBwbHVnaW4gZnJvbSAnLi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG5hdXRvSW5pdChwbHVnaW4pXG4iXSwibmFtZXMiOlsic3VwcG9ydHNQYXNzaXZlXyIsImFwcGx5UGFzc2l2ZSIsImdsb2JhbE9iaiIsIndpbmRvdyIsImZvcmNlUmVmcmVzaCIsInVuZGVmaW5lZCIsImlzU3VwcG9ydGVkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsImUiLCJhdXRvSW5pdCIsInBsdWdpbiIsIl9WdWUiLCJWdWUiLCJnbG9iYWwiLCJ1c2UiLCJCYXNlUGx1Z2luIiwiY29tcG9uZW50cyIsInZlcnNpb24iLCJpbnN0YWxsIiwidm0iLCJrZXkiLCJjb21wb25lbnQiLCJuYW1lIiwiQ3VzdG9tRWxlbWVudCIsImZ1bmN0aW9uYWwiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsInByb3BzIiwiaXMiLCJ0YWciLCJkYXRhIiwiY2hpbGRyZW4iLCJDdXN0b21FbGVtZW50TWl4aW4iLCJleHRyYWN0SWNvblByb3AiLCJpY29uUHJvcCIsImNsYXNzZXMiLCJjb250ZW50IiwiQXJyYXkiLCJyZWR1Y2UiLCJyZXN1bHQiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsInNwbGl0IiwidGV4dENvbnRlbnQiLCJEaXNwYXRjaEZvY3VzTWl4aW4iLCJoYXNGb2N1cyIsIm1ldGhvZHMiLCJvbk1vdXNlRG93biIsIl9hY3RpdmUiLCJvbk1vdXNlVXAiLCJvbkZvY3VzRXZlbnQiLCJzZXRUaW1lb3V0IiwiZGlzcGF0Y2hGb2N1c0V2ZW50Iiwib25CbHVyRXZlbnQiLCIkZWwiLCJhY3RpdmVFbGVtZW50IiwiY29udGFpbnMiLCIkZW1pdCIsIm1vdW50ZWQiLCJiZWZvcmVEZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjb3BlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJWTUFVbmlxdWVJZE1peGluIiwiYmVmb3JlQ3JlYXRlIiwidm1hX3VpZF8iLCJfdWlkIiwiTURDRm91bmRhdGlvbiIsImFkYXB0ZXIiLCJhZGFwdGVyXyIsIk1EQ1RleHRGaWVsZEhlbHBlclRleHRBZGFwdGVyIiwiYXR0ciIsInN0cmluZ3MiLCJBUklBX0hJRERFTiIsIlJPTEUiLCJjc3NDbGFzc2VzIiwiSEVMUEVSX1RFWFRfUEVSU0lTVEVOVCIsIkhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHIiwiTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24iLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJzZXRBdHRyIiwicmVtb3ZlQXR0ciIsInNldENvbnRlbnQiLCJkZWZhdWx0QWRhcHRlciIsImlzUGVyc2lzdGVudCIsImlzVmFsaWRhdGlvbiIsImlucHV0SXNWYWxpZCIsImhlbHBlclRleHRJc1BlcnNpc3RlbnQiLCJoZWxwZXJUZXh0SXNWYWxpZGF0aW9uTXNnIiwidmFsaWRhdGlvbk1zZ05lZWRzRGlzcGxheSIsImhpZGVfIiwiTURDVGV4dEZpZWxkSWNvbkFkYXB0ZXIiLCJldnRUeXBlIiwiaGFuZGxlciIsIklDT05fRVZFTlQiLCJJQ09OX1JPTEUiLCJNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiIsImdldEF0dHIiLCJyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJub3RpZnlJY29uQWN0aW9uIiwic2F2ZWRUYWJJbmRleF8iLCJpbnRlcmFjdGlvbkhhbmRsZXJfIiwiZXZ0IiwiaGFuZGxlSW50ZXJhY3Rpb24iLCJmb3JFYWNoIiwiZGlzYWJsZWQiLCJsYWJlbCIsInR5cGUiLCJrZXlDb2RlIiwiTURDVGV4dEZpZWxkQWRhcHRlciIsIm9ic2VydmVyIiwibm9ybWFsaXplZFgiLCJzaG91bGRTaGFrZSIsInNob3VsZEZsb2F0IiwibGFiZWxXaWR0aCIsIkFSSUFfQ09OVFJPTFMiLCJJTlBVVF9TRUxFQ1RPUiIsIkxBQkVMX1NFTEVDVE9SIiwiSUNPTl9TRUxFQ1RPUiIsIk9VVExJTkVfU0VMRUNUT1IiLCJMSU5FX1JJUFBMRV9TRUxFQ1RPUiIsIlJPT1QiLCJESVNBQkxFRCIsIkRFTlNFIiwiRk9DVVNFRCIsIklOVkFMSUQiLCJURVhUQVJFQSIsIk9VVExJTkVEIiwiV0lUSF9MRUFESU5HX0lDT04iLCJudW1iZXJzIiwiTEFCRUxfU0NBTEUiLCJERU5TRV9MQUJFTF9TQ0FMRSIsIlZBTElEQVRJT05fQVRUUl9XSElURUxJU1QiLCJBTFdBWVNfRkxPQVRfVFlQRVMiLCJNRENUZXh0RmllbGRGb3VuZGF0aW9uIiwiaXNWYWxpZCIsImlzRm9jdXNlZF8iLCJnZXRWYWx1ZSIsImdldE5hdGl2ZUlucHV0XyIsImluZGV4T2YiLCJzaG91bGRBbHdheXNGbG9hdF8iLCJpc0JhZElucHV0XyIsInJlZ2lzdGVyVGV4dEZpZWxkSW50ZXJhY3Rpb25IYW5kbGVyIiwiZGVyZWdpc3RlclRleHRGaWVsZEludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVySW5wdXRJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyIiwiZGVyZWdpc3RlclZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2VIYW5kbGVyIiwiZ2V0TmF0aXZlSW5wdXQiLCJpc0ZvY3VzZWQiLCJhY3RpdmF0ZUxpbmVSaXBwbGUiLCJkZWFjdGl2YXRlTGluZVJpcHBsZSIsInNldExpbmVSaXBwbGVUcmFuc2Zvcm1PcmlnaW4iLCJzaGFrZUxhYmVsIiwiZmxvYXRMYWJlbCIsImhhc0xhYmVsIiwiZ2V0TGFiZWxXaWR0aCIsImhhc091dGxpbmUiLCJub3RjaE91dGxpbmUiLCJjbG9zZU91dGxpbmUiLCJmb3VuZGF0aW9uTWFwIiwiaGVscGVyVGV4dF8iLCJoZWxwZXJUZXh0IiwibGVhZGluZ0ljb25fIiwibGVhZGluZ0ljb24iLCJ0cmFpbGluZ0ljb25fIiwidHJhaWxpbmdJY29uIiwicmVjZWl2ZWRVc2VySW5wdXRfIiwidXNlQ3VzdG9tVmFsaWRpdHlDaGVja2luZ18iLCJpc1ZhbGlkXyIsInVzZU5hdGl2ZVZhbGlkYXRpb25fIiwiaW5wdXRGb2N1c0hhbmRsZXJfIiwiYWN0aXZhdGVGb2N1cyIsImlucHV0Qmx1ckhhbmRsZXJfIiwiZGVhY3RpdmF0ZUZvY3VzIiwiaW5wdXRJbnB1dEhhbmRsZXJfIiwiYXV0b0NvbXBsZXRlRm9jdXMiLCJzZXRQb2ludGVyWE9mZnNldF8iLCJzZXRUcmFuc2Zvcm1PcmlnaW4iLCJ0ZXh0RmllbGRJbnRlcmFjdGlvbkhhbmRsZXJfIiwiaGFuZGxlVGV4dEZpZWxkSW50ZXJhY3Rpb24iLCJ2YWxpZGF0aW9uQXR0cmlidXRlQ2hhbmdlSGFuZGxlcl8iLCJhdHRyaWJ1dGVzTGlzdCIsImhhbmRsZVZhbGlkYXRpb25BdHRyaWJ1dGVDaGFuZ2UiLCJ2YWxpZGF0aW9uT2JzZXJ2ZXJfIiwic29tZSIsImF0dHJpYnV0ZU5hbWUiLCJzdHlsZVZhbGlkaXR5XyIsIm9wZW5Ob3RjaCIsImlzRGVuc2UiLCJsYWJlbFNjYWxlIiwic3R5bGVGb2N1c2VkXyIsInNob3dUb1NjcmVlblJlYWRlciIsInRhcmdldEV2ZW50IiwidG91Y2hlcyIsInRhcmdldENsaWVudFJlY3QiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsImlzTmF0aXZlSW5wdXRWYWxpZF8iLCJ1c2VOYXRpdmVWYWxpZGF0aW9uIiwic3R5bGVEaXNhYmxlZF8iLCJzZXRBcmlhTGFiZWwiLCJ2YWxpZGl0eSIsImJhZElucHV0IiwidmFsaWQiLCJzZXRWYWxpZGl0eSIsImlzRGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsIk1EQ0xpbmVSaXBwbGVBZGFwdGVyIiwicHJvcGVydHlOYW1lIiwiTElORV9SSVBQTEVfQUNUSVZFIiwiTElORV9SSVBQTEVfREVBQ1RJVkFUSU5HIiwiTURDTGluZVJpcHBsZUZvdW5kYXRpb24iLCJzZXRTdHlsZSIsInJlZ2lzdGVyRXZlbnRIYW5kbGVyIiwiZGVyZWdpc3RlckV2ZW50SGFuZGxlciIsInRyYW5zaXRpb25FbmRIYW5kbGVyXyIsImhhbmRsZVRyYW5zaXRpb25FbmQiLCJ4Q29vcmRpbmF0ZSIsImlzRGVhY3RpdmF0aW5nIiwiTURDRmxvYXRpbmdMYWJlbEFkYXB0ZXIiLCJMQUJFTF9GTE9BVF9BQk9WRSIsIkxBQkVMX1NIQUtFIiwiTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24iLCJnZXRXaWR0aCIsInNoYWtlQW5pbWF0aW9uRW5kSGFuZGxlcl8iLCJoYW5kbGVTaGFrZUFuaW1hdGlvbkVuZF8iLCJNRENOb3RjaGVkT3V0bGluZUFkYXB0ZXIiLCJ3aWR0aCIsIk5PVENIX0VMRU1FTlRfU0VMRUNUT1IiLCJOT1RDSF9FTEVNRU5UX1BBRERJTkciLCJPVVRMSU5FX05PVENIRUQiLCJPVVRMSU5FX1VQR1JBREVEIiwiTk9fTEFCRUwiLCJNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24iLCJzZXROb3RjaFdpZHRoUHJvcGVydHkiLCJyZW1vdmVOb3RjaFdpZHRoUHJvcGVydHkiLCJub3RjaFdpZHRoIiwiTURDQ29tcG9uZW50Iiwicm9vdCIsImZvdW5kYXRpb24iLCJyb290XyIsImFyZ3MiLCJpbml0aWFsaXplIiwiZm91bmRhdGlvbl8iLCJnZXREZWZhdWx0Rm91bmRhdGlvbiIsImluaXQiLCJpbml0aWFsU3luY1dpdGhET00iLCJFcnJvciIsImRlc3Ryb3kiLCJldnREYXRhIiwic2hvdWxkQnViYmxlIiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiTURDUmlwcGxlQWRhcHRlciIsInZhck5hbWUiLCJVTkJPVU5ERUQiLCJCR19GT0NVU0VEIiwiRkdfQUNUSVZBVElPTiIsIkZHX0RFQUNUSVZBVElPTiIsIlZBUl9MRUZUIiwiVkFSX1RPUCIsIlZBUl9GR19TSVpFIiwiVkFSX0ZHX1NDQUxFIiwiVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCIsIlZBUl9GR19UUkFOU0xBVEVfRU5EIiwiUEFERElORyIsIklOSVRJQUxfT1JJR0lOX1NDQUxFIiwiREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMiLCJGR19ERUFDVElWQVRJT05fTVMiLCJUQVBfREVMQVlfTVMiLCJzdXBwb3J0c0Nzc1ZhcmlhYmxlc18iLCJkZXRlY3RFZGdlUHNldWRvVmFyQnVnIiwid2luZG93T2JqIiwibm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaGFzUHNldWRvVmFyQnVnIiwiYm9yZGVyVG9wU3R5bGUiLCJyZW1vdmUiLCJzdXBwb3J0c0Nzc1ZhcmlhYmxlcyIsInN1cHBvcnRzRnVuY3Rpb25QcmVzZW50IiwiQ1NTIiwic3VwcG9ydHMiLCJleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIiwid2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzIiwiZ2V0TWF0Y2hlc1Byb3BlcnR5IiwiSFRNTEVsZW1lbnRQcm90b3R5cGUiLCJtYXRjaGVzTWV0aG9kcyIsIm1ldGhvZCIsImkiLCJsZW5ndGgiLCJtYXRjaGVzTWV0aG9kIiwiZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzIiwiZXYiLCJwYWdlT2Zmc2V0IiwiY2xpZW50UmVjdCIsIngiLCJ5IiwiZG9jdW1lbnRYIiwiZG9jdW1lbnRZIiwidG9wIiwibm9ybWFsaXplZFkiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTIiwiUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMiLCJhY3RpdmF0ZWRUYXJnZXRzIiwiTURDUmlwcGxlRm91bmRhdGlvbiIsImJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMiLCJpc1VuYm91bmRlZCIsImlzU3VyZmFjZUFjdGl2ZSIsImlzU3VyZmFjZURpc2FibGVkIiwiY29udGFpbnNFdmVudFRhcmdldCIsInJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJkZXJlZ2lzdGVyUmVzaXplSGFuZGxlciIsInVwZGF0ZUNzc1ZhcmlhYmxlIiwiY29tcHV0ZUJvdW5kaW5nUmVjdCIsImdldFdpbmRvd1BhZ2VPZmZzZXQiLCJsYXlvdXRGcmFtZV8iLCJmcmFtZV8iLCJoZWlnaHQiLCJhY3RpdmF0aW9uU3RhdGVfIiwiZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8iLCJpbml0aWFsU2l6ZV8iLCJtYXhSYWRpdXNfIiwiYWN0aXZhdGVIYW5kbGVyXyIsImFjdGl2YXRlXyIsImRlYWN0aXZhdGVIYW5kbGVyXyIsImRlYWN0aXZhdGVfIiwiZm9jdXNIYW5kbGVyXyIsImhhbmRsZUZvY3VzIiwiYmx1ckhhbmRsZXJfIiwiaGFuZGxlQmx1ciIsInJlc2l6ZUhhbmRsZXJfIiwibGF5b3V0IiwidW5ib3VuZGVkQ29vcmRzXyIsImZnU2NhbGVfIiwiYWN0aXZhdGlvblRpbWVyXyIsImZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyIsImFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8iLCJhY3RpdmF0aW9uVGltZXJDYWxsYmFja18iLCJydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8iLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudF8iLCJpc0FjdGl2YXRlZCIsImhhc0RlYWN0aXZhdGlvblVYUnVuIiwid2FzQWN0aXZhdGVkQnlQb2ludGVyIiwid2FzRWxlbWVudE1hZGVBY3RpdmUiLCJhY3RpdmF0aW9uRXZlbnQiLCJpc1Byb2dyYW1tYXRpYyIsInN1cHBvcnRzUHJlc3NSaXBwbGUiLCJzdXBwb3J0c1ByZXNzUmlwcGxlXyIsInJlZ2lzdGVyUm9vdEhhbmRsZXJzXyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxheW91dEludGVybmFsXyIsImNsZWFyVGltZW91dCIsInJlbW92ZUNzc1ZhcnNfIiwiZGVyZWdpc3RlclJvb3RIYW5kbGVyc18iLCJkZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfIiwiT2JqZWN0Iiwia2V5cyIsImsiLCJhY3RpdmF0aW9uU3RhdGUiLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudCIsImlzU2FtZUludGVyYWN0aW9uIiwiaGFzQWN0aXZhdGVkQ2hpbGQiLCJyZXNldEFjdGl2YXRpb25TdGF0ZV8iLCJwdXNoIiwicmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18iLCJjaGVja0VsZW1lbnRNYWRlQWN0aXZlXyIsImFuaW1hdGVBY3RpdmF0aW9uXyIsImV2ZW50IiwidHJhbnNsYXRlU3RhcnQiLCJ0cmFuc2xhdGVFbmQiLCJnZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwicm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfIiwiYWN0aXZhdGlvbkhhc0VuZGVkIiwic3RhdGUiLCJhbmltYXRlRGVhY3RpdmF0aW9uXyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibWF4RGltIiwibWF4IiwiZ2V0Qm91bmRlZFJhZGl1cyIsImh5cG90ZW51c2UiLCJzcXJ0IiwicG93IiwidXBkYXRlTGF5b3V0Q3NzVmFyc18iLCJyb3VuZCIsInVuYm91bmRlZCIsIk1EQ1JpcHBsZSIsInVuYm91bmRlZF8iLCJzZXRVbmJvdW5kZWQiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJjcmVhdGVBZGFwdGVyIiwiZGF0YXNldCIsIkJvb2xlYW4iLCJzZXRVbmJvdW5kZWRfIiwicmlwcGxlIiwiaW5zdGFuY2UiLCJNQVRDSEVTIiwidXRpbCIsIkhUTUxFbGVtZW50IiwicHJvdG90eXBlIiwiY2xhc3NMaXN0IiwiYWRkIiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJSaXBwbGVDYXBhYmxlU3VyZmFjZSIsIlJpcHBsZUJhc2UiLCJyZWYiLCJfbWF0Y2hlcyIsIm9wdGlvbnMiLCIkc2V0IiwiJGRlbGV0ZSIsInN0eWxlcyIsIlJpcHBsZU1peGluIiwibm9ybWFsaXplQ29tcG9uZW50IiwiY29tcGlsZWRUZW1wbGF0ZSIsImluamVjdFN0eWxlIiwiZGVmYXVsdEV4cG9ydCIsInNjb3BlSWQiLCJpc0Z1bmN0aW9uYWxUZW1wbGF0ZSIsIm1vZHVsZUlkZW50aWZpZXIiLCJpc1NoYWRvd01vZGUiLCJjcmVhdGVJbmplY3RvciIsImNyZWF0ZUluamVjdG9yU1NSIiwiY3JlYXRlSW5qZWN0b3JTaGFkb3ciLCJzdGF0aWNSZW5kZXJGbnMiLCJfY29tcGlsZWQiLCJfc2NvcGVJZCIsImhvb2siLCIkdm5vZGUiLCJzc3JDb250ZXh0IiwicGFyZW50IiwiX19WVUVfU1NSX0NPTlRFWFRfXyIsImNhbGwiLCJfcmVnaXN0ZXJlZENvbXBvbmVudHMiLCJfc3NyUmVnaXN0ZXIiLCIkcm9vdCIsIiRvcHRpb25zIiwic2hhZG93Um9vdCIsIm9yaWdpbmFsUmVuZGVyIiwicmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIiwiaCIsImV4aXN0aW5nIiwiY29uY2F0Iiwic2NyaXB0IiwibWRjVGV4dEZpZWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBSUEsZ0JBQUo7SUFFQTs7Ozs7OztBQU1BLElBQU8sU0FBU0MsWUFBVCxHQUFnRTtJQUFBLE1BQTFDQyxTQUEwQyx1RUFBOUJDLE1BQThCO0lBQUEsTUFBdEJDLFlBQXNCLHVFQUFQLEtBQU87O0lBQ3JFLE1BQUlKLGdCQUFnQixLQUFLSyxTQUFyQixJQUFrQ0QsWUFBdEMsRUFBb0Q7SUFDbEQsUUFBSUUsV0FBVyxHQUFHLEtBQWxCOztJQUNBLFFBQUk7SUFDRkosTUFBQUEsU0FBUyxDQUFDSyxRQUFWLENBQW1CQyxnQkFBbkIsQ0FBb0MsTUFBcEMsRUFBNEMsSUFBNUMsRUFBa0Q7SUFDaEQsWUFBSUMsT0FBSixHQUFjO0lBQ1pILFVBQUFBLFdBQVcsR0FBRztJQUFFRyxZQUFBQSxPQUFPLEVBQUU7SUFBWCxXQUFkO0lBQ0Q7O0lBSCtDLE9BQWxEO0lBS0QsS0FORCxDQU1FLE9BQU9DLENBQVAsRUFBVTtJQUVYOztJQUVEVixJQUFBQSxnQkFBZ0IsR0FBR00sV0FBbkI7SUFDRDs7SUFFRCxTQUFPTixnQkFBUDtJQUNEOztJQ3pCTSxTQUFTVyxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtJQUMvQjtJQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztJQUNBLE1BQUksT0FBT1YsTUFBUCxLQUFrQixXQUF0QixFQUFtQztJQUNqQ1UsSUFBQUEsSUFBSSxHQUFHVixNQUFNLENBQUNXLEdBQWQ7SUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0lBQ3hDO0lBQ0FGLElBQUFBLElBQUksR0FBR0UsTUFBTSxDQUFDRCxHQUFk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
