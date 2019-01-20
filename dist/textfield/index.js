/**
* @module vue-mdc-adaptertextfield 0.19.2-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

import { RippleBase } from '../ripple';

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

function BasePlugin(components) {
  return {
    version: '0.19.2-beta',
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
    node.data.class = classNames(this.classes);
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
}; // ===
// Private functions
// ===

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

var script$2 = {
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
const __vue_script__$2 = script$2;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$2.__file = "/ddata/extra/vma/components/textfield/mdc-textfield.vue";

/* template */
var __vue_render__ = function() {
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
  

  
  var mdcTextField = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

var index = BasePlugin({
  mdcTextField: mdcTextField
});

export default index;
export { mdcTextField };
//# sourceMappingURL=index.js.map
