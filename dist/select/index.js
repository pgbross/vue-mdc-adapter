/**
* @module vue-mdc-adapterselect 0.19.0-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

import { RippleBase } from '../ripple';

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

var scope = Math.floor(Math.random() * Math.floor(0x10000000)).toString() + '-';

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
 * Adapter for MDC Select Icon.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the select icon into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCSelectIconAdapter =
/*#__PURE__*/
function () {
  function MDCSelectIconAdapter() {
    _classCallCheck(this, MDCSelectIconAdapter);
  }

  _createClass(MDCSelectIconAdapter, [{
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
     * Emits a custom event "MDCSelect:icon" denoting a user has clicked the icon.
     */

  }, {
    key: "notifyIconAction",
    value: function notifyIconAction() {}
  }]);

  return MDCSelectIconAdapter;
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
var strings = {
  ICON_EVENT: 'MDCSelect:icon',
  ICON_ROLE: 'button'
};

/**
 * @extends {MDCFoundation<!MDCSelectIconAdapter>}
 * @final
 */

var MDCSelectIconFoundation =
/*#__PURE__*/
function (_MDCFoundation) {
  _inherits(MDCSelectIconFoundation, _MDCFoundation);

  _createClass(MDCSelectIconFoundation, null, [{
    key: "strings",

    /** @return enum {string} */
    get: function get() {
      return strings;
    }
    /**
     * {@see MDCSelectIconAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCSelectIconAdapter}
     */

  }, {
    key: "defaultAdapter",
    get: function get() {
      return (
        /** @type {!MDCSelectIconAdapter} */
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
     * @param {!MDCSelectIconAdapter} adapter
     */

  }]);

  function MDCSelectIconFoundation(adapter) {
    var _this;

    _classCallCheck(this, MDCSelectIconFoundation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCSelectIconFoundation).call(this, _extends(MDCSelectIconFoundation.defaultAdapter, adapter)));
    /** @private {string?} */

    _this.savedTabIndex_ = null;
    /** @private {function(!Event): undefined} */

    _this.interactionHandler_ = function (evt) {
      return _this.handleInteraction(evt);
    };

    return _this;
  }

  _createClass(MDCSelectIconFoundation, [{
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
        this.adapter_.setAttr('role', strings.ICON_ROLE);
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

  return MDCSelectIconFoundation;
}(MDCFoundation);

/**
 * @extends {MDCComponent<!MDCSelectIconFoundation>}
 * @final
 */

var MDCSelectIcon =
/*#__PURE__*/
function (_MDCComponent) {
  _inherits(MDCSelectIcon, _MDCComponent);

  function MDCSelectIcon() {
    _classCallCheck(this, MDCSelectIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(MDCSelectIcon).apply(this, arguments));
  }

  _createClass(MDCSelectIcon, [{
    key: "getDefaultFoundation",

    /**
     * @return {!MDCSelectIconFoundation}
     */
    value: function getDefaultFoundation() {
      var _this = this;

      return new MDCSelectIconFoundation(
      /** @type {!MDCSelectIconAdapter} */
      _extends({
        getAttr: function getAttr(attr) {
          return _this.root_.getAttribute(attr);
        },
        setAttr: function setAttr(attr, value) {
          return _this.root_.setAttribute(attr, value);
        },
        removeAttr: function removeAttr(attr) {
          return _this.root_.removeAttribute(attr);
        },
        setContent: function setContent(content) {
          _this.root_.textContent = content;
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return _this.root_.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return _this.root_.removeEventListener(evtType, handler);
        },
        notifyIconAction: function notifyIconAction() {
          return _this.emit(MDCSelectIconFoundation.strings.ICON_EVENT, {}
          /* evtData */
          , true
          /* shouldBubble */
          );
        }
      }));
    }
  }, {
    key: "foundation",

    /**
     * @return {!MDCSelectIconFoundation}
     */
    get: function get() {
      return this.foundation_;
    }
  }], [{
    key: "attachTo",

    /**
     * @param {!Element} root
     * @return {!MDCSelectIcon}
     */
    value: function attachTo(root) {
      return new MDCSelectIcon(root);
    }
  }]);

  return MDCSelectIcon;
}(MDCComponent);

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
 * Adapter for MDC Select Helper Text.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Select helper text into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCSelectHelperTextAdapter =
/*#__PURE__*/
function () {
  function MDCSelectHelperTextAdapter() {
    _classCallCheck(this, MDCSelectHelperTextAdapter);
  }

  _createClass(MDCSelectHelperTextAdapter, [{
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

  return MDCSelectHelperTextAdapter;
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
var strings$1 = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role'
};
/** @enum {string} */

var cssClasses = {
  HELPER_TEXT_PERSISTENT: 'mdc-select-helper-text--persistent',
  HELPER_TEXT_VALIDATION_MSG: 'mdc-select-helper-text--validation-msg'
};

/**
 * @extends {MDCFoundation<!MDCSelectHelperTextAdapter>}
 * @final
 */

var MDCSelectHelperTextFoundation =
/*#__PURE__*/
function (_MDCFoundation) {
  _inherits(MDCSelectHelperTextFoundation, _MDCFoundation);

  _createClass(MDCSelectHelperTextFoundation, null, [{
    key: "cssClasses",

    /** @return enum {string} */
    get: function get() {
      return cssClasses;
    }
    /** @return enum {string} */

  }, {
    key: "strings",
    get: function get() {
      return strings$1;
    }
    /**
     * {@see MDCSelectHelperTextAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCSelectHelperTextAdapter}
     */

  }, {
    key: "defaultAdapter",
    get: function get() {
      return (
        /** @type {!MDCSelectHelperTextAdapter} */
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
     * @param {!MDCSelectHelperTextAdapter} adapter
     */

  }]);

  function MDCSelectHelperTextFoundation(adapter) {
    _classCallCheck(this, MDCSelectHelperTextFoundation);

    return _possibleConstructorReturn(this, _getPrototypeOf(MDCSelectHelperTextFoundation).call(this, _extends(MDCSelectHelperTextFoundation.defaultAdapter, adapter)));
  }
  /**
   * Sets the content of the helper text field.
   * @param {string} content
   */


  _createClass(MDCSelectHelperTextFoundation, [{
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
      this.adapter_.removeAttr(strings$1.ARIA_HIDDEN);
    }
    /**
     * Sets the validity of the helper text based on the select validity.
     * @param {boolean} selectIsValid
     */

  }, {
    key: "setValidity",
    value: function setValidity(selectIsValid) {
      var helperTextIsPersistent = this.adapter_.hasClass(cssClasses.HELPER_TEXT_PERSISTENT);
      var helperTextIsValidationMsg = this.adapter_.hasClass(cssClasses.HELPER_TEXT_VALIDATION_MSG);
      var validationMsgNeedsDisplay = helperTextIsValidationMsg && !selectIsValid;

      if (validationMsgNeedsDisplay) {
        this.adapter_.setAttr(strings$1.ROLE, 'alert');
      } else {
        this.adapter_.removeAttr(strings$1.ROLE);
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
      this.adapter_.setAttr(strings$1.ARIA_HIDDEN, 'true');
    }
  }]);

  return MDCSelectHelperTextFoundation;
}(MDCFoundation);

/**
 * @extends {MDCComponent<!MDCSelectHelperTextFoundation>}
 * @final
 */

var MDCSelectHelperText =
/*#__PURE__*/
function (_MDCComponent) {
  _inherits(MDCSelectHelperText, _MDCComponent);

  function MDCSelectHelperText() {
    _classCallCheck(this, MDCSelectHelperText);

    return _possibleConstructorReturn(this, _getPrototypeOf(MDCSelectHelperText).apply(this, arguments));
  }

  _createClass(MDCSelectHelperText, [{
    key: "getDefaultFoundation",

    /**
     * @return {!MDCSelectHelperTextFoundation}
     */
    value: function getDefaultFoundation() {
      var _this = this;

      return new MDCSelectHelperTextFoundation(
      /** @type {!MDCSelectHelperTextAdapter} */
      _extends({
        addClass: function addClass(className) {
          return _this.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this.root_.classList.contains(className);
        },
        setAttr: function setAttr(attr, value) {
          return _this.root_.setAttribute(attr, value);
        },
        removeAttr: function removeAttr(attr) {
          return _this.root_.removeAttribute(attr);
        },
        setContent: function setContent(content) {
          _this.root_.textContent = content;
        }
      }));
    }
  }, {
    key: "foundation",

    /**
     * @return {!MDCSelectHelperTextFoundation}
     */
    get: function get() {
      return this.foundation_;
    }
  }], [{
    key: "attachTo",

    /**
     * @param {!Element} root
     * @return {!MDCSelectHelperText}
     */
    value: function attachTo(root) {
      return new MDCSelectHelperText(root);
    }
  }]);

  return MDCSelectHelperText;
}(MDCComponent);

/**
 * Adapter for MDC Select. Provides an interface for managing
 * - classes
 * - dom
 * - event handlers
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

var MDCSelectAdapter =
/*#__PURE__*/
function () {
  function MDCSelectAdapter() {
    _classCallCheck(this, MDCSelectAdapter);
  }

  _createClass(MDCSelectAdapter, [{
    key: "addClass",

    /**
     * Adds class to root element.
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
     * Returns true if the root element contains the given class name.
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}
    /**
     * Activates the bottom line, showing a focused state.
     */

  }, {
    key: "activateBottomLine",
    value: function activateBottomLine() {}
    /**
     * Deactivates the bottom line.
     */

  }, {
    key: "deactivateBottomLine",
    value: function deactivateBottomLine() {}
    /**
     * Sets the value of the select.
     * @param {string} value
     */

  }, {
    key: "setValue",
    value: function setValue(value) {}
    /**
     * Returns the selected value of the select element.
     * @return {string}
     */

  }, {
    key: "getValue",
    value: function getValue() {}
    /**
     * Floats label determined based off of the shouldFloat argument.
     * @param {boolean} shouldFloat
     */

  }, {
    key: "floatLabel",
    value: function floatLabel(shouldFloat) {}
    /**
     * Returns width of label in pixels, if the label exists.
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
     * Closes notch in outline element, if the outline exists.
     */

  }, {
    key: "closeOutline",
    value: function closeOutline() {}
    /**
     * Opens the menu.
     */

  }, {
    key: "openMenu",
    value: function openMenu() {}
    /**
     * Closes the menu.
     */

  }, {
    key: "closeMenu",
    value: function closeMenu() {}
    /**
     * Returns true if the menu is currently open.
     * @return {boolean}
     */

  }, {
    key: "isMenuOpen",
    value: function isMenuOpen() {}
    /**
     * Sets the selected index of the select to the index provided.
     * @param {number} index
     */

  }, {
    key: "setSelectedIndex",
    value: function setSelectedIndex(index) {}
    /**
     * Sets the select to disabled.
     * @param {boolean} isDisabled
     */

  }, {
    key: "setDisabled",
    value: function setDisabled(isDisabled) {}
    /**
     * Sets the line ripple transform origin center.
     * @param {number} normalizedX
     */

  }, {
    key: "setRippleCenter",
    value: function setRippleCenter(normalizedX) {}
    /**
     * Emits a change event when an element is selected.
     * @param {string} value
     */

  }, {
    key: "notifyChange",
    value: function notifyChange(value) {}
    /**
     * Checks if the select is currently valid.
     * @return {boolean} isValid
     */

  }, {
    key: "checkValidity",
    value: function checkValidity() {}
    /**
     * Adds/Removes the invalid class.
     * @param {boolean} isValid
     */

  }, {
    key: "setValid",
    value: function setValid(isValid) {}
  }]);

  return MDCSelectAdapter;
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
var cssClasses$1 = {
  DISABLED: 'mdc-select--disabled',
  ROOT: 'mdc-select',
  OUTLINED: 'mdc-select--outlined',
  FOCUSED: 'mdc-select--focused',
  SELECTED_ITEM_CLASS: 'mdc-list-item--selected',
  WITH_LEADING_ICON: 'mdc-select--with-leading-icon',
  INVALID: 'mdc-select--invalid',
  REQUIRED: 'mdc-select--required'
};
/** @enum {string} */

var strings$2 = {
  ARIA_CONTROLS: 'aria-controls',
  CHANGE_EVENT: 'MDCSelect:change',
  SELECTED_ITEM_SELECTOR: ".".concat(cssClasses$1.SELECTED_ITEM_CLASS),
  LEADING_ICON_SELECTOR: '.mdc-select__icon',
  SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text',
  HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
  MENU_SELECTOR: '.mdc-select__menu',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
  LABEL_SELECTOR: '.mdc-floating-label',
  NATIVE_CONTROL_SELECTOR: '.mdc-select__native-control',
  OUTLINE_SELECTOR: '.mdc-notched-outline',
  ENHANCED_VALUE_ATTR: 'data-value',
  ARIA_SELECTED_ATTR: 'aria-selected'
};
/** @enum {number} */

var numbers = {
  LABEL_SCALE: 0.75
};

/**
 * @extends {MDCFoundation<!MDCSelectAdapter>}
 * @final
 */

var MDCSelectFoundation =
/*#__PURE__*/
function (_MDCFoundation) {
  _inherits(MDCSelectFoundation, _MDCFoundation);

  _createClass(MDCSelectFoundation, null, [{
    key: "cssClasses",

    /** @return enum {string} */
    get: function get() {
      return cssClasses$1;
    }
    /** @return enum {number} */

  }, {
    key: "numbers",
    get: function get() {
      return numbers;
    }
    /** @return enum {string} */

  }, {
    key: "strings",
    get: function get() {
      return strings$2;
    }
    /**
     * {@see MDCSelectAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCSelectAdapter}
     */

  }, {
    key: "defaultAdapter",
    get: function get() {
      return (
        /** @type {!MDCSelectAdapter} */
        {
          addClass: function addClass()
          /* className: string */
          {},
          removeClass: function removeClass()
          /* className: string */
          {},
          hasClass: function hasClass() {
            return (
              /* className: string */
              false
            );
          },
          activateBottomLine: function activateBottomLine() {},
          deactivateBottomLine: function deactivateBottomLine() {},
          setValue: function setValue() {},
          getValue: function getValue() {},
          floatLabel: function floatLabel()
          /* value: boolean */
          {},
          getLabelWidth: function getLabelWidth() {},
          hasOutline: function hasOutline() {
            return false;
          },
          notchOutline: function notchOutline()
          /* labelWidth: number, */
          {},
          closeOutline: function closeOutline() {},
          openMenu: function openMenu() {},
          closeMenu: function closeMenu() {},
          isMenuOpen: function isMenuOpen() {},
          setSelectedIndex: function setSelectedIndex() {},
          setDisabled: function setDisabled() {},
          setRippleCenter: function setRippleCenter() {},
          notifyChange: function notifyChange() {},
          checkValidity: function checkValidity() {},
          setValid: function setValid() {}
        }
      );
    }
    /**
     * @param {!MDCSelectAdapter} adapter
     * @param {!FoundationMapType=} foundationMap Map from subcomponent names to their subfoundations.
     */

  }]);

  function MDCSelectFoundation(adapter) {
    var _this;

    var foundationMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] :
    /** @type {!FoundationMapType} */
    {};

    _classCallCheck(this, MDCSelectFoundation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCSelectFoundation).call(this, _extends(MDCSelectFoundation.defaultAdapter, adapter)));
    /** @type {!MDCSelectIconFoundation|undefined} */

    _this.leadingIcon_ = foundationMap.leadingIcon;
    /** @type {!MDCSelectHelperTextFoundation|undefined} */

    _this.helperText_ = foundationMap.helperText;
    return _this;
  }

  _createClass(MDCSelectFoundation, [{
    key: "setSelectedIndex",
    value: function setSelectedIndex(index) {
      this.adapter_.setSelectedIndex(index);
      this.adapter_.closeMenu();
      var didChange = true;
      this.handleChange(didChange);
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.adapter_.setValue(value);
      var didChange = true;
      this.handleChange(didChange);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.adapter_.getValue();
    }
  }, {
    key: "setDisabled",
    value: function setDisabled(isDisabled) {
      isDisabled ? this.adapter_.addClass(cssClasses$1.DISABLED) : this.adapter_.removeClass(cssClasses$1.DISABLED);
      this.adapter_.setDisabled(isDisabled);
      this.adapter_.closeMenu();

      if (this.leadingIcon_) {
        this.leadingIcon_.setDisabled(isDisabled);
      }
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
  }, {
    key: "layout",
    value: function layout() {
      var openNotch = this.getValue().length > 0;
      this.notchOutline(openNotch);
    }
    /**
     * Handles value changes, via change event or programmatic updates.
     */

  }, {
    key: "handleChange",
    value: function handleChange() {
      var didChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var value = this.getValue();
      var optionHasValue = value.length > 0;
      var isRequired = this.adapter_.hasClass(cssClasses$1.REQUIRED);
      this.notchOutline(optionHasValue);

      if (!this.adapter_.hasClass(cssClasses$1.FOCUSED)) {
        this.adapter_.floatLabel(optionHasValue);
      }

      if (didChange) {
        this.adapter_.notifyChange(value);

        if (isRequired) {
          this.setValid(this.isValid());

          if (this.helperText_) {
            this.helperText_.setValidity(this.isValid());
          }
        }
      }
    }
    /**
     * Handles focus events from select element.
     */

  }, {
    key: "handleFocus",
    value: function handleFocus() {
      this.adapter_.addClass(cssClasses$1.FOCUSED);
      this.adapter_.floatLabel(true);
      this.notchOutline(true);
      this.adapter_.activateBottomLine();

      if (this.helperText_) {
        this.helperText_.showToScreenReader();
      }
    }
    /**
     * Handles blur events from select element.
     */

  }, {
    key: "handleBlur",
    value: function handleBlur() {
      if (this.adapter_.isMenuOpen()) return;
      this.adapter_.removeClass(cssClasses$1.FOCUSED);
      this.handleChange(false);
      this.adapter_.deactivateBottomLine();
      var isRequired = this.adapter_.hasClass(cssClasses$1.REQUIRED);

      if (isRequired) {
        this.setValid(this.isValid());

        if (this.helperText_) {
          this.helperText_.setValidity(this.isValid());
        }
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(normalizedX) {
      if (this.adapter_.isMenuOpen()) return;
      this.adapter_.setRippleCenter(normalizedX);
      this.adapter_.openMenu();
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown(event) {
      if (this.adapter_.isMenuOpen()) return;
      var isEnter = event.key === 'Enter' || event.keyCode === 13;
      var isSpace = event.key === 'Space' || event.keyCode === 32;
      var arrowUp = event.key === 'ArrowUp' || event.keyCode === 38;
      var arrowDown = event.key === 'ArrowDown' || event.keyCode === 40;

      if (this.adapter_.hasClass(cssClasses$1.FOCUSED) && (isEnter || isSpace || arrowUp || arrowDown)) {
        this.adapter_.openMenu();
        event.preventDefault();
      }
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

      var isFocused = this.adapter_.hasClass(cssClasses$1.FOCUSED);

      if (openNotch) {
        var labelScale = numbers.LABEL_SCALE;
        var labelWidth = this.adapter_.getLabelWidth() * labelScale;
        this.adapter_.notchOutline(labelWidth);
      } else if (!isFocused) {
        this.adapter_.closeOutline();
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
  }, {
    key: "setValid",
    value: function setValid(isValid) {
      this.adapter_.setValid(isValid);
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return this.adapter_.checkValidity();
    }
  }]);

  return MDCSelectFoundation;
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
var cssClasses$2 = {
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
      return cssClasses$2;
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

//
var script = {
  name: 'mdc-select-label',
  data: function data() {
    return {
      labelClasses: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCFloatingLabelFoundation({
      addClass: function addClass(className) {
        _this.$set(_this.labelClasses, className, true);
      },
      removeClass: function removeClass(className) {
        _this.$delete(_this.labelClasses, className);
      },
      getWidth: function getWidth() {
        return _this.$el.offsetWidth;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        _this.$el.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        _this.$el.removeEventListener(evtType, handler);
      }
    });
    this.foundation.init();
  },
  beforeDestroy: function beforeDestroy() {
    var foundation = this.foundation;
    this.foundation = null;
    foundation.destroy();
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
script.__file = "/ddata/extra/vma/components/select/mdc-select-label.vue";

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "label",
    { staticClass: "mdc-floating-label", class: _vm.labelClasses },
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
  

  
  var SelectLabel = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
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
var cssClasses$3 = {
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
      return cssClasses$3;
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
      this.adapter_.removeClass(cssClasses$3.LINE_RIPPLE_DEACTIVATING);
      this.adapter_.addClass(cssClasses$3.LINE_RIPPLE_ACTIVE);
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
      this.adapter_.addClass(cssClasses$3.LINE_RIPPLE_DEACTIVATING);
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
      var isDeactivating = this.adapter_.hasClass(cssClasses$3.LINE_RIPPLE_DEACTIVATING);

      if (evt.propertyName === 'opacity') {
        if (isDeactivating) {
          this.adapter_.removeClass(cssClasses$3.LINE_RIPPLE_ACTIVE);
          this.adapter_.removeClass(cssClasses$3.LINE_RIPPLE_DEACTIVATING);
        }
      }
    }
  }]);

  return MDCLineRippleFoundation;
}(MDCFoundation);

//
var script$1 = {
  name: 'mdc-select-line-ripple',
  data: function data() {
    return {
      lineClasses: {},
      lineStyles: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCLineRippleFoundation({
      addClass: function addClass(className) {
        _this.$set(_this.lineClasses, className, true);
      },
      removeClass: function removeClass(className) {
        _this.$delete(_this.lineClasses, className);
      },
      hasClass: function hasClass(className) {
        _this.$el.classList.contains(className);
      },
      setStyle: function setStyle(name, value) {
        _this.$set(_this.lineStyles, name, value);
      },
      registerEventHandler: function registerEventHandler(evtType, handler) {
        _this.$el.addEventListener(evtType, handler);
      },
      deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
        _this.$el.removeEventListener(evtType, handler);
      }
    });
    this.foundation.init();
  },
  beforeDestroy: function beforeDestroy() {
    var foundation = this.foundation;
    this.foundation = null;
    foundation.destroy();
  }
};

/* script */
const __vue_script__$1 = script$1;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$1.__file = "/ddata/extra/vma/components/select/mdc-select-line-ripple.vue";

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "mdc-line-ripple",
    class: _vm.lineClasses,
    style: _vm.lineStyles
  })
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
  

  
  var SelectLineRiple = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

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

//
var script$2 = {
  name: 'mdc-select-notched-outline',
  data: function data() {
    return {
      outlinedClasses: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCNotchedOutlineFoundation({
      getWidth: function getWidth() {
        return _this.$refs.outlined.offsetWidth;
      },
      getHeight: function getHeight() {
        return _this.$refs.outlined.offsetHeight;
      },
      addClass: function addClass(className) {
        _this.$set(_this.outlinedClasses, className, true);
      },
      removeClass: function removeClass(className) {
        _this.$delete(_this.outlinedClasses, className);
      },
      setOutlinePathAttr: function setOutlinePathAttr(value) {
        var path = _this.$refs.outlinedPath;
        path.setAttribute('d', value);
      },
      getIdleOutlineStyleValue: function getIdleOutlineStyleValue(propertyName) {
        return window.getComputedStyle(_this.$refs.outlinedIdle).getPropertyValue(propertyName);
      }
    });
    this.foundation.init();
  },
  beforeDestroy: function beforeDestroy() {
    var foundation = this.foundation;
    this.foundation = null;
    foundation.destroy();
  }
};

/* script */
const __vue_script__$2 = script$2;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$2.__file = "/ddata/extra/vma/components/select/mdc-select-notched-outline.vue";

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [
    _c(
      "div",
      {
        ref: "outlined",
        staticClass: "mdc-notched-outline",
        class: _vm.outlinedClasses
      },
      [
        _c("svg", [
          _c("path", {
            ref: "outlinedPath",
            staticClass: "mdc-notched-outline__path"
          })
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { ref: "outlinedIdle", staticClass: "mdc-notched-outline__idle" })
  ])
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
  

  
  var SelectNotchedOutline = normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

var script$3 = {
  name: 'mdc-select',
  components: {
    SelectLabel: SelectLabel,
    SelectLineRiple: SelectLineRiple,
    SelectNotchedOutline: SelectNotchedOutline
  },
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: String,
    disabled: Boolean,
    label: String,
    outlined: Boolean,
    id: {
      type: String
    }
  },
  data: function data() {
    return {
      styles: {},
      classes: {}
    };
  },
  computed: {
    rootClasses: function rootClasses() {
      return _objectSpread({
        'mdc-select--box': !this.outlined,
        'mdc-select--outlined': this.outlined
      }, this.classes);
    },
    listeners: function listeners() {
      var _this = this;

      return _objectSpread({}, this.$listeners, {
        change: function change(event) {
          return _this.onChange(event);
        }
      });
    }
  },
  watch: {
    disabled: function disabled(value) {
      this.foundation && this.foundation.updateDisabledStyle(value);
    },
    value: 'refreshIndex'
  },
  mounted: function mounted() {
    var _this2 = this;

    this.foundation = new MDCSelectFoundation({
      addClass: function addClass(className) {
        return _this2.$set(_this2.classes, className, true);
      },
      removeClass: function removeClass(className) {
        return _this2.$delete(_this2.classes, className);
      },
      hasClass: function hasClass(className) {
        return _this2.$el.classList.contains(className);
      },
      activateBottomLine: function activateBottomLine() {
        if (_this2.$refs.line) {
          _this2.$refs.line.foundation.activate();
        }
      },
      deactivateBottomLine: function deactivateBottomLine() {
        if (_this2.$refs.line) {
          _this2.$refs.line.foundation.deactivate();
        }
      },
      getValue: function getValue() {
        return _this2.$refs.native_control.value;
      },
      isRtl: function isRtl() {
        return window.getComputedStyle(_this2.$el).getPropertyValue('direction') === 'rtl';
      },
      notchOutline: function notchOutline(labelWidth, isRtl) {
        if (_this2.$refs.outline) {
          _this2.$refs.outline.foundation.notch(labelWidth, isRtl);
        }
      },
      closeOutline: function closeOutline() {
        if (_this2.$refs.outline) {
          _this2.$refs.outline.foundation.closeNotch();
        }
      },
      hasOutline: function hasOutline() {
        return !!_this2.$refs.outline;
      },
      floatLabel: function floatLabel(value) {
        if (_this2.$refs.label) {
          _this2.$refs.label.foundation.float(value);
        }
      },
      hasLabel: function hasLabel() {
        return !!_this2.$refs.label;
      },
      getLabelWidth: function getLabelWidth() {
        if (_this2.$refs.label) {
          return _this2.$refs.label.foundation.getWidth();
        }
      }
    });
    this.foundation.init();
    this.foundation.handleChange(); // initial sync with DOM

    this.refreshIndex();
    this.slotObserver = new MutationObserver(function () {
      return _this2.refreshIndex();
    });
    this.slotObserver.observe(this.$refs.native_control, {
      childList: true,
      subtree: true
    });
    this.ripple = new RippleBase(this);
    this.ripple.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.slotObserver.disconnect();
    var foundation = this.foundation;
    this.foundation = null;
    foundation.destroy();
    this.ripple && this.ripple.destroy();
  },
  methods: {
    refreshIndex: function refreshIndex() {
      var _this3 = this;

      var options = _toConsumableArray(this.$refs.native_control.querySelectorAll('option'));

      var idx = options.findIndex(function (_ref) {
        var value = _ref.value;
        return _this3.value === value;
      });

      if (this.$refs.native_control.selectedIndex !== idx) {
        this.$refs.native_control.selectedIndex = idx;
        this.foundation.handleChange();
      }
    },
    onChange: function onChange(event) {
      this.foundation.handleChange();
      this.$emit('change', event.target.value);
    }
  }
};

/* script */
const __vue_script__$3 = script$3;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$3.__file = "/ddata/extra/vma/components/select/mdc-select.vue";

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "mdc-select",
      class: _vm.rootClasses,
      style: _vm.styles,
      attrs: { id: _vm.id }
    },
    [
      _c(
        "select",
        _vm._g(
          _vm._b(
            {
              ref: "native_control",
              staticClass: "mdc-select__native-control",
              attrs: { disabled: _vm.disabled }
            },
            "select",
            _vm.$attrs,
            false
          ),
          _vm.listeners
        ),
        [
          !!_vm.label
            ? _c("option", {
                staticClass: "mdc-option",
                attrs: { value: "", disabled: "", selected: "" }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm._t("default")
        ],
        2
      ),
      _vm._v(" "),
      _vm.label
        ? _c("select-label", { ref: "label" }, [_vm._v(_vm._s(_vm.label))])
        : _vm._e(),
      _vm._v(" "),
      !_vm.outlined ? _c("select-line-riple", { ref: "line" }) : _vm._e(),
      _vm._v(" "),
      _vm.outlined ? _c("select-notched-outline", { ref: "outline" }) : _vm._e()
    ],
    1
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
  

  
  var mdcSelect = normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

var index = BasePlugin({
  mdcSelect: mdcSelect
});

export default index;
export { mdcSelect };
//# sourceMappingURL=index.js.map
