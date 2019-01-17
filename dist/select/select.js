/**
* @module vue-mdc-adapterselect 0.19.0-beta
* @exports VueMDCSelect
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueMDCSelect = factory());
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
    name: 'mdc-select',
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
          'mdc-select': true,
          'mdc-select--outlined': this.outlined
        }, this.classes);
      },
      listeners: function listeners() {
        var _this = this;

        return _objectSpread({}, this.$listeners, {
          change: function change(event) {
            return _this.handleChange(event);
          },
          blur: function blur(event) {
            return _this.handleBlur(event);
          },
          focus: function focus(event) {
            return _this.handleFocus(event);
          },
          mousedown: function mousedown(event) {
            return _this.handleClick(event);
          },
          touchstart: function touchstart(event) {
            return _this.handleClick(event);
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
        // common methods
        addClass: function addClass(className) {
          return _this2.$set(_this2.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this2.$delete(_this2.classes, className);
        },
        hasClass: function hasClass(className) {
          return Boolean(_this2.classes[className]);
        },
        setRippleCenter: function setRippleCenter(normalizedX) {
          return _this2.$refs.lineRippleEl && _this2.$refs.lineRippleEl.setRippleCenter(normalizedX);
        },
        activateBottomLine: function activateBottomLine() {
          if (_this2.$refs.lineRippleEl) {
            _this2.$refs.lineRippleEl.foundation.activate();
          }
        },
        deactivateBottomLine: function deactivateBottomLine() {
          if (_this2.$refs.lineRippleEl) {
            _this2.$refs.lineRippleEl.foundation.deactivate();
          }
        },
        notifyChange: function notifyChange(value) {
          var index$$1 = _this2.selectedIndex;
          emitCustomEvent(_this2.$el, MDCSelectFoundation.strings.CHANGE_EVENT, {
            value: value,
            index: index$$1
          }, true
          /* shouldBubble  */
          );

          _this2.$emit('change', value);
        },
        // native methods
        getValue: function getValue() {
          return _this2.$refs.native_control.value;
        },
        setValue: function setValue(value) {
          return _this2.$refs.native_control.value = value;
        },
        openMenu: function openMenu() {},
        closeMenu: function closeMenu() {},
        isMenuOpen: function isMenuOpen() {
          return false;
        },
        setSelectedIndex: function setSelectedIndex(index$$1) {
          _this2.$refs.native_control.selectedIndex = index$$1;
        },
        setDisabled: function setDisabled(isDisabled) {
          return _this2.$refs.native_control.disabled = isDisabled;
        },
        setValid: function setValid(isValid) {
          isValid ? _this2.$delete(_this2.classes, MDCSelectFoundation.cssClasses.INVALID) : _this2.set(_this2.classes, MDCSelectFoundation.cssClasses.INVALID);
        },
        checkValidity: function checkValidity() {
          return _this2.$refs.native_control.checkValidity();
        },
        // outline methods
        hasOutline: function hasOutline() {
          return _this2.outlined;
        },
        notchOutline: function notchOutline(labelWidth) {
          if (_this2.$refs.outlineEl) {
            _this2.$refs.outlineEl.notch(labelWidth);
          }
        },
        closeOutline: function closeOutline() {
          if (_this2.$refs.outlineEl) {
            _this2.$refs.outlineEl.closeNotch();
          }
        },
        // label methods
        floatLabel: function floatLabel(value) {
          if (_this2.$refs.labelEl) {
            _this2.$refs.labelEl.float(value);
          } else {
            _this2.$refs.outlineEl.float(value);
          }
        },
        getLabelWidth: function getLabelWidth() {
          if (_this2.$refs.labelEl) {
            return _this2.$refs.labelEl.getWidth();
          }
        }
      });
      this.foundation.init();
      this.foundation.handleChange(false); // initial sync with DOM

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
      handleChange: function handleChange() {
        this.foundation.handleChange(true);
      },
      handleFocus: function handleFocus() {
        this.foundation.handleFocus();
      },
      handleBlur: function handleBlur() {
        this.foundation.handleBlur();
      },
      handleClick: function handleClick(evt) {
        this.foundation.handleClick(this.getNormalizedXCoordinate(evt));
      },
      refreshIndex: function refreshIndex() {
        var _this3 = this;

        var options = _toConsumableArray(this.$refs.native_control.querySelectorAll('option'));

        var idx = options.findIndex(function (_ref) {
          var value = _ref.value;
          return _this3.value === value;
        });

        if (this.$refs.native_control.selectedIndex !== idx) {
          this.$refs.native_control.selectedIndex = idx;
          this.foundation.handleChange(false);
        }
      },
      getNormalizedXCoordinate: function getNormalizedXCoordinate(evt) {
        var targetClientRect = evt.target.getBoundingClientRect();
        var xCoordinate = evt.clientX;
        return xCoordinate - targetClientRect.left;
      }
    }
  };

  /* script */
  const __vue_script__$1 = script$1;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$1.__file = "/ddata/extra/vma/components/select/mdc-select.vue";

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { class: _vm.rootClasses, style: _vm.styles, attrs: { id: _vm.id } },
      [
        _c("i", { staticClass: "mdc-select__dropdown-icon" }),
        _vm._v(" "),
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
            !_vm.value
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
        !_vm.outlined
          ? _c("mdc-floating-label", { ref: "labelEl" }, [
              _vm._v(_vm._s(_vm.label))
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.outlined ? _c("mdc-line-ripple", { ref: "lineRippleEl" }) : _vm._e(),
        _vm._v(" "),
        _vm.outlined
          ? _c("mdc-notched-outline", { ref: "outlineEl" }, [
              _vm._v(_vm._s(_vm.label))
            ])
          : _vm._e()
      ],
      1
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
    

    
    var mdcSelect = normalizeComponent(
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
    mdcSelect: mdcSelect
  });

  autoInit(plugin);

  return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXV0by1pbml0LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Jhc2UtcGx1Z2luLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1lbGVtZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1ldmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS91bmlxdWVpZC1taXhpbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L2ljb24vYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L2ljb24vY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3QvaWNvbi9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3QvaWNvbi9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L2hlbHBlci10ZXh0L2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9oZWxwZXItdGV4dC9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9oZWxwZXItdGV4dC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3QvaGVscGVyLXRleHQvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3QvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3QvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS91dGlsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS1iYXNlLmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXJ1bnRpbWUtaGVscGVycy9ub3JtYWxpemUtY29tcG9uZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9zZWxlY3QvbWRjLXNlbGVjdC52dWUiLCIuLi8uLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvc2VsZWN0L2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHtcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIGNvbnRleHQucHJvcHMuaXMgfHwgY29udGV4dC5wcm9wcy50YWcgfHwgJ2RpdicsXG4gICAgICBjb250ZXh0LmRhdGEsXG4gICAgICBjb250ZXh0LmNoaWxkcmVuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50TWl4aW4gPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21FbGVtZW50XG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImNvbnN0IHNjb3BlID1cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigweDEwMDAwMDAwKSkudG9TdHJpbmcoKSArICctJ1xuXG5leHBvcnQgY29uc3QgVk1BVW5pcXVlSWRNaXhpbiA9IHtcbiAgYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMudm1hX3VpZF8gPSBzY29wZSArIHRoaXMuX3VpZFxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgQVxuICovXG5jbGFzcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bXtjc3NDbGFzc2VzfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17bnVtYmVyc30gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiB7IU9iamVjdH0gKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgLy8gdmFsaWRhdGlvbi5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciA9IHt9KSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFBfSAqL1xuICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbi8qKlxuICogQHRlbXBsYXRlIEZcbiAqL1xuY2xhc3MgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ0NvbXBvbmVudH1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgLy8gU3ViY2xhc3NlcyB3aGljaCBleHRlbmQgTURDQmFzZSBzaG91bGQgcHJvdmlkZSBhbiBhdHRhY2hUbygpIG1ldGhvZCB0aGF0IHRha2VzIGEgcm9vdCBlbGVtZW50IGFuZFxuICAgIC8vIHJldHVybnMgYW4gaW5zdGFudGlhdGVkIGNvbXBvbmVudCB3aXRoIGl0cyByb290IHNldCB0byB0aGF0IGVsZW1lbnQuIEFsc28gbm90ZSB0aGF0IGluIHRoZSBjYXNlcyBvZlxuICAgIC8vIHN1YmNsYXNzZXMsIGFuIGV4cGxpY2l0IGZvdW5kYXRpb24gY2xhc3Mgd2lsbCBub3QgaGF2ZSB0byBiZSBwYXNzZWQgaW47IGl0IHdpbGwgc2ltcGx5IGJlIGluaXRpYWxpemVkXG4gICAgLy8gZnJvbSBnZXREZWZhdWx0Rm91bmRhdGlvbigpLlxuICAgIHJldHVybiBuZXcgTURDQ29tcG9uZW50KHJvb3QsIG5ldyBNRENGb3VuZGF0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHtGPX0gZm91bmRhdGlvblxuICAgKiBAcGFyYW0gey4uLj99IGFyZ3NcbiAgICovXG4gIGNvbnN0cnVjdG9yKHJvb3QsIGZvdW5kYXRpb24gPSB1bmRlZmluZWQsIC4uLmFyZ3MpIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG4gICAgdGhpcy5yb290XyA9IHJvb3Q7XG4gICAgdGhpcy5pbml0aWFsaXplKC4uLmFyZ3MpO1xuICAgIC8vIE5vdGUgdGhhdCB3ZSBpbml0aWFsaXplIGZvdW5kYXRpb24gaGVyZSBhbmQgbm90IHdpdGhpbiB0aGUgY29uc3RydWN0b3IncyBkZWZhdWx0IHBhcmFtIHNvIHRoYXRcbiAgICAvLyB0aGlzLnJvb3RfIGlzIGRlZmluZWQgYW5kIGNhbiBiZSB1c2VkIHdpdGhpbiB0aGUgZm91bmRhdGlvbiBjbGFzcy5cbiAgICAvKiogQHByb3RlY3RlZCB7IUZ9ICovXG4gICAgdGhpcy5mb3VuZGF0aW9uXyA9IGZvdW5kYXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSA6IGZvdW5kYXRpb247XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5pbml0KCk7XG4gICAgdGhpcy5pbml0aWFsU3luY1dpdGhET00oKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoLyogLi4uYXJncyAqLykge1xuICAgIC8vIFN1YmNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoaXMgdG8gZG8gYW55IGFkZGl0aW9uYWwgc2V0dXAgd29yayB0aGF0IHdvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiBhXG4gICAgLy8gXCJjb25zdHJ1Y3RvclwiLiBFc3NlbnRpYWxseSwgaXQgaXMgYSBob29rIGludG8gdGhlIHBhcmVudCBjb25zdHJ1Y3RvciBiZWZvcmUgdGhlIGZvdW5kYXRpb24gaXNcbiAgICAvLyBpbml0aWFsaXplZC4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIGJlc2lkZXMgcm9vdCBhbmQgZm91bmRhdGlvbiB3aWxsIGJlIHBhc3NlZCBpbiBoZXJlLlxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFGfSBmb3VuZGF0aW9uXG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCBmb3VuZGF0aW9uIGNsYXNzIGZvciB0aGVcbiAgICAvLyBjb21wb25lbnQuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgZ2V0RGVmYXVsdEZvdW5kYXRpb24gdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCAnICtcbiAgICAgICdmb3VuZGF0aW9uIGNsYXNzJyk7XG4gIH1cblxuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgdGhleSBuZWVkIHRvIHBlcmZvcm0gd29yayB0byBzeW5jaHJvbml6ZSB3aXRoIGEgaG9zdCBET01cbiAgICAvLyBvYmplY3QuIEFuIGV4YW1wbGUgb2YgdGhpcyB3b3VsZCBiZSBhIGZvcm0gY29udHJvbCB3cmFwcGVyIHRoYXQgbmVlZHMgdG8gc3luY2hyb25pemUgaXRzIGludGVybmFsIHN0YXRlXG4gICAgLy8gdG8gc29tZSBwcm9wZXJ0eSBvciBhdHRyaWJ1dGUgb2YgdGhlIGhvc3QgRE9NLiBQbGVhc2Ugbm90ZTogdGhpcyBpcyAqbm90KiB0aGUgcGxhY2UgdG8gcGVyZm9ybSBET01cbiAgICAvLyByZWFkcy93cml0ZXMgdGhhdCB3b3VsZCBjYXVzZSBsYXlvdXQgLyBwYWludCwgYXMgdGhpcyBpcyBjYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIHdpdGhpbiB0aGUgY29uc3RydWN0b3IuXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgbWF5IGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZWxlYXNlIGFueSByZXNvdXJjZXMgLyBkZXJlZ2lzdGVyIGFueSBsaXN0ZW5lcnMgdGhleSBoYXZlXG4gICAgLy8gYXR0YWNoZWQuIEFuIGV4YW1wbGUgb2YgdGhpcyBtaWdodCBiZSBkZXJlZ2lzdGVyaW5nIGEgcmVzaXplIGV2ZW50IGZyb20gdGhlIHdpbmRvdyBvYmplY3QuXG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiBsaXN0ZW5pbmcgZm9yIGN1c3RvbSBldmVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBsaXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIG1ldGhvZCB0byByZW1vdmUgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudC4gVGhpcyBpcyBtb3N0IHVzZWZ1bCB3aGVuXG4gICAqIHVubGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgdW5saXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBhIGNyb3NzLWJyb3dzZXItY29tcGF0aWJsZSBjdXN0b20gZXZlbnQgZnJvbSB0aGUgY29tcG9uZW50IHJvb3Qgb2YgdGhlIGdpdmVuIHR5cGUsXG4gICAqIHdpdGggdGhlIGdpdmVuIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IU9iamVjdH0gZXZ0RGF0YVxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBzaG91bGRCdWJibGVcbiAgICovXG4gIGVtaXQoZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgICBsZXQgZXZ0O1xuICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvb3RfLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENDb21wb25lbnQ7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFNlbGVjdCBJY29uLlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIHNlbGVjdCBpY29uIGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENTZWxlY3RJY29uQWRhcHRlciB7XG4gIC8qKlxuICAgKiBHZXRzIHRoZSB2YWx1ZSBvZiBhbiBhdHRyaWJ1dGUgb24gdGhlIGljb24gZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0QXR0cihhdHRyKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIGFuIGF0dHJpYnV0ZSBvbiB0aGUgaWNvbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHNldEF0dHIoYXR0ciwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gYXR0cmlidXRlIGZyb20gdGhlIGljb24gZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJcbiAgICovXG4gIHJlbW92ZUF0dHIoYXR0cikge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBpY29uIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gICAqL1xuICBzZXRDb250ZW50KGNvbnRlbnQpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBvbiB0aGUgaWNvbiBlbGVtZW50IGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogRGVyZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIGljb24gZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogRW1pdHMgYSBjdXN0b20gZXZlbnQgXCJNRENTZWxlY3Q6aWNvblwiIGRlbm90aW5nIGEgdXNlciBoYXMgY2xpY2tlZCB0aGUgaWNvbi5cbiAgICovXG4gIG5vdGlmeUljb25BY3Rpb24oKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENTZWxlY3RJY29uQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIElDT05fRVZFTlQ6ICdNRENTZWxlY3Q6aWNvbicsXG4gIElDT05fUk9MRTogJ2J1dHRvbicsXG59O1xuXG5leHBvcnQge3N0cmluZ3N9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1NlbGVjdEljb25BZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge3N0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcblxuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENTZWxlY3RJY29uQWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDU2VsZWN0SWNvbkZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDU2VsZWN0SWNvbkFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuXG4gICAqIHR5cGVzLlxuICAgKiBAcmV0dXJuIHshTURDU2VsZWN0SWNvbkFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENTZWxlY3RJY29uQWRhcHRlcn0gKi8gKHtcbiAgICAgIGdldEF0dHI6ICgpID0+IHt9LFxuICAgICAgc2V0QXR0cjogKCkgPT4ge30sXG4gICAgICByZW1vdmVBdHRyOiAoKSA9PiB7fSxcbiAgICAgIHNldENvbnRlbnQ6ICgpID0+IHt9LFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKCkgPT4ge30sXG4gICAgICBub3RpZnlJY29uQWN0aW9uOiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENTZWxlY3RJY29uQWRhcHRlcn0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDU2VsZWN0SWNvbkZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7c3RyaW5nP30gKi9cbiAgICB0aGlzLnNhdmVkVGFiSW5kZXhfID0gbnVsbDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuaW50ZXJhY3Rpb25IYW5kbGVyXyA9IChldnQpID0+IHRoaXMuaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zYXZlZFRhYkluZGV4XyA9IHRoaXMuYWRhcHRlcl8uZ2V0QXR0cigndGFiaW5kZXgnKTtcblxuICAgIFsnY2xpY2snLCAna2V5ZG93biddLmZvckVhY2goKGV2dFR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgWydjbGljaycsICdrZXlkb3duJ10uZm9yRWFjaCgoZXZ0VHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIHRoaXMuaW50ZXJhY3Rpb25IYW5kbGVyXyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZCAqL1xuICBzZXREaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIGlmICghdGhpcy5zYXZlZFRhYkluZGV4Xykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVBdHRyKCdyb2xlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cigndGFiaW5kZXgnLCB0aGlzLnNhdmVkVGFiSW5kZXhfKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cigncm9sZScsIHN0cmluZ3MuSUNPTl9ST0xFKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGxhYmVsICovXG4gIHNldEFyaWFMYWJlbChsYWJlbCkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cignYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCAqL1xuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldENvbnRlbnQoY29udGVudCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhbiBpbnRlcmFjdGlvbiBldmVudFxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqL1xuICBoYW5kbGVJbnRlcmFjdGlvbihldnQpIHtcbiAgICBpZiAoZXZ0LnR5cGUgPT09ICdjbGljaycgfHwgZXZ0LmtleSA9PT0gJ0VudGVyJyB8fCBldnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5SWNvbkFjdGlvbigpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENTZWxlY3RJY29uRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5cbmltcG9ydCBNRENTZWxlY3RJY29uQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1NlbGVjdEljb25Gb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0NvbXBvbmVudDwhTURDU2VsZWN0SWNvbkZvdW5kYXRpb24+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1NlbGVjdEljb24gZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcmV0dXJuIHshTURDU2VsZWN0SWNvbn1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgcmV0dXJuIG5ldyBNRENTZWxlY3RJY29uKHJvb3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENTZWxlY3RJY29uRm91bmRhdGlvbn1cbiAgICovXG4gIGdldCBmb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENTZWxlY3RJY29uRm91bmRhdGlvbn1cbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDU2VsZWN0SWNvbkZvdW5kYXRpb24oLyoqIEB0eXBlIHshTURDU2VsZWN0SWNvbkFkYXB0ZXJ9ICovIChPYmplY3QuYXNzaWduKHtcbiAgICAgIGdldEF0dHI6IChhdHRyKSA9PiB0aGlzLnJvb3RfLmdldEF0dHJpYnV0ZShhdHRyKSxcbiAgICAgIHNldEF0dHI6IChhdHRyLCB2YWx1ZSkgPT4gdGhpcy5yb290Xy5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpLFxuICAgICAgcmVtb3ZlQXR0cjogKGF0dHIpID0+IHRoaXMucm9vdF8ucmVtb3ZlQXR0cmlidXRlKGF0dHIpLFxuICAgICAgc2V0Q29udGVudDogKGNvbnRlbnQpID0+IHtcbiAgICAgICAgdGhpcy5yb290Xy50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PiB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4gdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgICAgbm90aWZ5SWNvbkFjdGlvbjogKCkgPT4gdGhpcy5lbWl0KFxuICAgICAgICBNRENTZWxlY3RJY29uRm91bmRhdGlvbi5zdHJpbmdzLklDT05fRVZFTlQsIHt9IC8qIGV2dERhdGEgKi8sIHRydWUgLyogc2hvdWxkQnViYmxlICovKSxcbiAgICB9KSkpO1xuICB9XG59XG5cbmV4cG9ydCB7TURDU2VsZWN0SWNvbiwgTURDU2VsZWN0SWNvbkZvdW5kYXRpb259O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBTZWxlY3QgSGVscGVyIFRleHQuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgU2VsZWN0IGhlbHBlciB0ZXh0IGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENTZWxlY3RIZWxwZXJUZXh0QWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIGEgY2xhc3MgdG8gdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGNsYXNzIGZyb20gdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgaGVscGVyIHRleHQgZWxlbWVudCBjb250YWlucyB0aGUgZ2l2ZW4gY2xhc3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogU2V0cyBhbiBhdHRyaWJ1dGUgd2l0aCBhIGdpdmVuIHZhbHVlIG9uIHRoZSBoZWxwZXIgdGV4dCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHNldEF0dHIoYXR0ciwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gYXR0cmlidXRlIGZyb20gdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyXG4gICAqL1xuICByZW1vdmVBdHRyKGF0dHIpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRleHQgY29udGVudCBmb3IgdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gICAqL1xuICBzZXRDb250ZW50KGNvbnRlbnQpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1NlbGVjdEhlbHBlclRleHRBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQVJJQV9ISURERU46ICdhcmlhLWhpZGRlbicsXG4gIFJPTEU6ICdyb2xlJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgSEVMUEVSX1RFWFRfUEVSU0lTVEVOVDogJ21kYy1zZWxlY3QtaGVscGVyLXRleHQtLXBlcnNpc3RlbnQnLFxuICBIRUxQRVJfVEVYVF9WQUxJREFUSU9OX01TRzogJ21kYy1zZWxlY3QtaGVscGVyLXRleHQtLXZhbGlkYXRpb24tbXNnJyxcbn07XG5cbmV4cG9ydCB7c3RyaW5ncywgY3NzQ2xhc3Nlc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDU2VsZWN0SGVscGVyVGV4dEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5nc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1NlbGVjdEhlbHBlclRleHRBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENTZWxlY3RIZWxwZXJUZXh0Rm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAc2VlIE1EQ1NlbGVjdEhlbHBlclRleHRBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ1NlbGVjdEhlbHBlclRleHRBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDU2VsZWN0SGVscGVyVGV4dEFkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBoYXNDbGFzczogKCkgPT4ge30sXG4gICAgICBzZXRBdHRyOiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUF0dHI6ICgpID0+IHt9LFxuICAgICAgc2V0Q29udGVudDogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDU2VsZWN0SGVscGVyVGV4dEFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1NlbGVjdEhlbHBlclRleHRGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY29udGVudCBvZiB0aGUgaGVscGVyIHRleHQgZmllbGQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gICAqL1xuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldENvbnRlbnQoY29udGVudCk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSBpc1BlcnNpc3RlbnQgU2V0cyB0aGUgcGVyc2lzdGVuY3kgb2YgdGhlIGhlbHBlciB0ZXh0LiAqL1xuICBzZXRQZXJzaXN0ZW50KGlzUGVyc2lzdGVudCkge1xuICAgIGlmIChpc1BlcnNpc3RlbnQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9QRVJTSVNURU5UKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1BFUlNJU1RFTlQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmFsaWRhdGlvbiBUcnVlIHRvIG1ha2UgdGhlIGhlbHBlciB0ZXh0IGFjdCBhcyBhblxuICAgKiAgIGVycm9yIHZhbGlkYXRpb24gbWVzc2FnZS5cbiAgICovXG4gIHNldFZhbGlkYXRpb24oaXNWYWxpZGF0aW9uKSB7XG4gICAgaWYgKGlzVmFsaWRhdGlvbikge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHKTtcbiAgICB9XG4gIH1cblxuICAvKiogTWFrZXMgdGhlIGhlbHBlciB0ZXh0IHZpc2libGUgdG8gdGhlIHNjcmVlbiByZWFkZXIuICovXG4gIHNob3dUb1NjcmVlblJlYWRlcigpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHIoc3RyaW5ncy5BUklBX0hJRERFTik7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsaWRpdHkgb2YgdGhlIGhlbHBlciB0ZXh0IGJhc2VkIG9uIHRoZSBzZWxlY3QgdmFsaWRpdHkuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2VsZWN0SXNWYWxpZFxuICAgKi9cbiAgc2V0VmFsaWRpdHkoc2VsZWN0SXNWYWxpZCkge1xuICAgIGNvbnN0IGhlbHBlclRleHRJc1BlcnNpc3RlbnQgPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfUEVSU0lTVEVOVCk7XG4gICAgY29uc3QgaGVscGVyVGV4dElzVmFsaWRhdGlvbk1zZyA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9WQUxJREFUSU9OX01TRyk7XG4gICAgY29uc3QgdmFsaWRhdGlvbk1zZ05lZWRzRGlzcGxheSA9IGhlbHBlclRleHRJc1ZhbGlkYXRpb25Nc2cgJiYgIXNlbGVjdElzVmFsaWQ7XG5cbiAgICBpZiAodmFsaWRhdGlvbk1zZ05lZWRzRGlzcGxheSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKHN0cmluZ3MuUk9MRSwgJ2FsZXJ0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQXR0cihzdHJpbmdzLlJPTEUpO1xuICAgIH1cblxuICAgIGlmICghaGVscGVyVGV4dElzUGVyc2lzdGVudCAmJiAhdmFsaWRhdGlvbk1zZ05lZWRzRGlzcGxheSkge1xuICAgICAgdGhpcy5oaWRlXygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgaGVscCB0ZXh0IGZyb20gc2NyZWVuIHJlYWRlcnMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoaWRlXygpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5BUklBX0hJRERFTiwgJ3RydWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENTZWxlY3RIZWxwZXJUZXh0Rm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5cbmltcG9ydCBNRENTZWxlY3RIZWxwZXJUZXh0QWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1NlbGVjdEhlbHBlclRleHRGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0NvbXBvbmVudDwhTURDU2VsZWN0SGVscGVyVGV4dEZvdW5kYXRpb24+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1NlbGVjdEhlbHBlclRleHQgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcmV0dXJuIHshTURDU2VsZWN0SGVscGVyVGV4dH1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgcmV0dXJuIG5ldyBNRENTZWxlY3RIZWxwZXJUZXh0KHJvb3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENTZWxlY3RIZWxwZXJUZXh0Rm91bmRhdGlvbn1cbiAgICovXG4gIGdldCBmb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENTZWxlY3RIZWxwZXJUZXh0Rm91bmRhdGlvbn1cbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDU2VsZWN0SGVscGVyVGV4dEZvdW5kYXRpb24oLyoqIEB0eXBlIHshTURDU2VsZWN0SGVscGVyVGV4dEFkYXB0ZXJ9ICovIChPYmplY3QuYXNzaWduKHtcbiAgICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIGhhc0NsYXNzOiAoY2xhc3NOYW1lKSA9PiB0aGlzLnJvb3RfLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgc2V0QXR0cjogKGF0dHIsIHZhbHVlKSA9PiB0aGlzLnJvb3RfLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSksXG4gICAgICByZW1vdmVBdHRyOiAoYXR0cikgPT4gdGhpcy5yb290Xy5yZW1vdmVBdHRyaWJ1dGUoYXR0ciksXG4gICAgICBzZXRDb250ZW50OiAoY29udGVudCkgPT4ge1xuICAgICAgICB0aGlzLnJvb3RfLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgIH0sXG4gICAgfSkpKTtcbiAgfVxufVxuXG5leHBvcnQge01EQ1NlbGVjdEhlbHBlclRleHQsIE1EQ1NlbGVjdEhlbHBlclRleHRGb3VuZGF0aW9ufTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ1NlbGVjdEljb25Gb3VuZGF0aW9ufSBmcm9tICcuL2ljb24vaW5kZXgnO1xuaW1wb3J0IHtNRENTZWxlY3RIZWxwZXJUZXh0Rm91bmRhdGlvbn0gZnJvbSAnLi9oZWxwZXItdGV4dC9pbmRleCc7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgbGVhZGluZ0ljb246ICghTURDU2VsZWN0SWNvbkZvdW5kYXRpb258dW5kZWZpbmVkKSxcbiAqICAgaGVscGVyVGV4dDogKCFNRENTZWxlY3RIZWxwZXJUZXh0Rm91bmRhdGlvbnx1bmRlZmluZWQpLFxuICogfX1cbiAqL1xubGV0IEZvdW5kYXRpb25NYXBUeXBlO1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBTZWxlY3QuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmdcbiAqIC0gY2xhc3Nlc1xuICogLSBkb21cbiAqIC0gZXZlbnQgaGFuZGxlcnNcbiAqXG4gKiBBZGRpdGlvbmFsbHksIHByb3ZpZGVzIHR5cGUgaW5mb3JtYXRpb24gZm9yIHRoZSBhZGFwdGVyIHRvIHRoZSBDbG9zdXJlXG4gKiBjb21waWxlci5cbiAqXG4gKiBJbXBsZW1lbnQgdGhpcyBhZGFwdGVyIGZvciB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UgdG8gZGVsZWdhdGUgdXBkYXRlcyB0b1xuICogdGhlIGNvbXBvbmVudCBpbiB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UuIFNlZSBhcmNoaXRlY3R1cmUgZG9jdW1lbnRhdGlvblxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvY29kZS9hcmNoaXRlY3R1cmUubWRcbiAqXG4gKiBAcmVjb3JkXG4gKi9cblxuY2xhc3MgTURDU2VsZWN0QWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIGNsYXNzIHRvIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2xhc3MgZnJvbSB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcm9vdCBlbGVtZW50IGNvbnRhaW5zIHRoZSBnaXZlbiBjbGFzcyBuYW1lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgYm90dG9tIGxpbmUsIHNob3dpbmcgYSBmb2N1c2VkIHN0YXRlLlxuICAgKi9cbiAgYWN0aXZhdGVCb3R0b21MaW5lKCkge31cblxuICAvKipcbiAgICogRGVhY3RpdmF0ZXMgdGhlIGJvdHRvbSBsaW5lLlxuICAgKi9cbiAgZGVhY3RpdmF0ZUJvdHRvbUxpbmUoKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgc2VsZWN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHNldFZhbHVlKHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzZWxlY3RlZCB2YWx1ZSBvZiB0aGUgc2VsZWN0IGVsZW1lbnQuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldFZhbHVlKCkge31cblxuICAvKipcbiAgICogRmxvYXRzIGxhYmVsIGRldGVybWluZWQgYmFzZWQgb2ZmIG9mIHRoZSBzaG91bGRGbG9hdCBhcmd1bWVudC5cbiAgICogQHBhcmFtIHtib29sZWFufSBzaG91bGRGbG9hdFxuICAgKi9cbiAgZmxvYXRMYWJlbChzaG91bGRGbG9hdCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB3aWR0aCBvZiBsYWJlbCBpbiBwaXhlbHMsIGlmIHRoZSBsYWJlbCBleGlzdHMuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldExhYmVsV2lkdGgoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgb3V0bGluZSBlbGVtZW50IGV4aXN0cywgZmFsc2UgaWYgaXQgZG9lc24ndC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc091dGxpbmUoKSB7fVxuXG4gIC8qKlxuICAgKiBPbmx5IGltcGxlbWVudCBpZiBvdXRsaW5lIGVsZW1lbnQgZXhpc3RzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGFiZWxXaWR0aFxuICAgKi9cbiAgbm90Y2hPdXRsaW5lKGxhYmVsV2lkdGgpIHt9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBub3RjaCBpbiBvdXRsaW5lIGVsZW1lbnQsIGlmIHRoZSBvdXRsaW5lIGV4aXN0cy5cbiAgICovXG4gIGNsb3NlT3V0bGluZSgpIHt9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBtZW51LlxuICAgKi9cbiAgb3Blbk1lbnUoKSB7fVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIG1lbnUuXG4gICAqL1xuICBjbG9zZU1lbnUoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG1lbnUgaXMgY3VycmVudGx5IG9wZW4uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc01lbnVPcGVuKCkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgc2VsZWN0ZWQgaW5kZXggb2YgdGhlIHNlbGVjdCB0byB0aGUgaW5kZXggcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKi9cbiAgc2V0U2VsZWN0ZWRJbmRleChpbmRleCkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgc2VsZWN0IHRvIGRpc2FibGVkLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzRGlzYWJsZWRcbiAgICovXG4gIHNldERpc2FibGVkKGlzRGlzYWJsZWQpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGxpbmUgcmlwcGxlIHRyYW5zZm9ybSBvcmlnaW4gY2VudGVyLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbm9ybWFsaXplZFhcbiAgICovXG4gIHNldFJpcHBsZUNlbnRlcihub3JtYWxpemVkWCkge31cblxuICAvKipcbiAgICogRW1pdHMgYSBjaGFuZ2UgZXZlbnQgd2hlbiBhbiBlbGVtZW50IGlzIHNlbGVjdGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIG5vdGlmeUNoYW5nZSh2YWx1ZSkge31cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBzZWxlY3QgaXMgY3VycmVudGx5IHZhbGlkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBpc1ZhbGlkXG4gICAqL1xuICBjaGVja1ZhbGlkaXR5KCkge31cblxuICAvKipcbiAgICogQWRkcy9SZW1vdmVzIHRoZSBpbnZhbGlkIGNsYXNzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmFsaWRcbiAgICovXG4gIHNldFZhbGlkKGlzVmFsaWQpIHt9XG59XG5cbmV4cG9ydCB7TURDU2VsZWN0QWRhcHRlciwgRm91bmRhdGlvbk1hcFR5cGV9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgRElTQUJMRUQ6ICdtZGMtc2VsZWN0LS1kaXNhYmxlZCcsXG4gIFJPT1Q6ICdtZGMtc2VsZWN0JyxcbiAgT1VUTElORUQ6ICdtZGMtc2VsZWN0LS1vdXRsaW5lZCcsXG4gIEZPQ1VTRUQ6ICdtZGMtc2VsZWN0LS1mb2N1c2VkJyxcbiAgU0VMRUNURURfSVRFTV9DTEFTUzogJ21kYy1saXN0LWl0ZW0tLXNlbGVjdGVkJyxcbiAgV0lUSF9MRUFESU5HX0lDT046ICdtZGMtc2VsZWN0LS13aXRoLWxlYWRpbmctaWNvbicsXG4gIElOVkFMSUQ6ICdtZGMtc2VsZWN0LS1pbnZhbGlkJyxcbiAgUkVRVUlSRUQ6ICdtZGMtc2VsZWN0LS1yZXF1aXJlZCcsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIEFSSUFfQ09OVFJPTFM6ICdhcmlhLWNvbnRyb2xzJyxcbiAgQ0hBTkdFX0VWRU5UOiAnTURDU2VsZWN0OmNoYW5nZScsXG4gIFNFTEVDVEVEX0lURU1fU0VMRUNUT1I6IGAuJHtjc3NDbGFzc2VzLlNFTEVDVEVEX0lURU1fQ0xBU1N9YCxcbiAgTEVBRElOR19JQ09OX1NFTEVDVE9SOiAnLm1kYy1zZWxlY3RfX2ljb24nLFxuICBTRUxFQ1RFRF9URVhUX1NFTEVDVE9SOiAnLm1kYy1zZWxlY3RfX3NlbGVjdGVkLXRleHQnLFxuICBISURERU5fSU5QVVRfU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwiaGlkZGVuXCJdJyxcbiAgTUVOVV9TRUxFQ1RPUjogJy5tZGMtc2VsZWN0X19tZW51JyxcbiAgTElORV9SSVBQTEVfU0VMRUNUT1I6ICcubWRjLWxpbmUtcmlwcGxlJyxcbiAgTEFCRUxfU0VMRUNUT1I6ICcubWRjLWZsb2F0aW5nLWxhYmVsJyxcbiAgTkFUSVZFX0NPTlRST0xfU0VMRUNUT1I6ICcubWRjLXNlbGVjdF9fbmF0aXZlLWNvbnRyb2wnLFxuICBPVVRMSU5FX1NFTEVDVE9SOiAnLm1kYy1ub3RjaGVkLW91dGxpbmUnLFxuICBFTkhBTkNFRF9WQUxVRV9BVFRSOiAnZGF0YS12YWx1ZScsXG4gIEFSSUFfU0VMRUNURURfQVRUUjogJ2FyaWEtc2VsZWN0ZWQnLFxufTtcblxuLyoqIEBlbnVtIHtudW1iZXJ9ICovXG5jb25zdCBudW1iZXJzID0ge1xuICBMQUJFTF9TQ0FMRTogMC43NSxcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtNRENTZWxlY3RBZGFwdGVyLCBGb3VuZGF0aW9uTWFwVHlwZX0gZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7TURDU2VsZWN0SWNvbkZvdW5kYXRpb259IGZyb20gJy4vaWNvbi9pbmRleCc7XG5pbXBvcnQge01EQ1NlbGVjdEhlbHBlclRleHRGb3VuZGF0aW9ufSBmcm9tICcuL2hlbHBlci10ZXh0L2luZGV4Jztcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENTZWxlY3RBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENTZWxlY3RGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7bnVtYmVyfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QHNlZSBNRENTZWxlY3RBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ1NlbGVjdEFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENTZWxlY3RBZGFwdGVyfSAqLyAoe1xuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGhhc0NsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IGZhbHNlLFxuICAgICAgYWN0aXZhdGVCb3R0b21MaW5lOiAoKSA9PiB7fSxcbiAgICAgIGRlYWN0aXZhdGVCb3R0b21MaW5lOiAoKSA9PiB7fSxcbiAgICAgIHNldFZhbHVlOiAoKSA9PiB7fSxcbiAgICAgIGdldFZhbHVlOiAoKSA9PiB7fSxcbiAgICAgIGZsb2F0TGFiZWw6ICgvKiB2YWx1ZTogYm9vbGVhbiAqLykgPT4ge30sXG4gICAgICBnZXRMYWJlbFdpZHRoOiAoKSA9PiB7fSxcbiAgICAgIGhhc091dGxpbmU6ICgpID0+IGZhbHNlLFxuICAgICAgbm90Y2hPdXRsaW5lOiAoLyogbGFiZWxXaWR0aDogbnVtYmVyLCAqLykgPT4ge30sXG4gICAgICBjbG9zZU91dGxpbmU6ICgpID0+IHt9LFxuICAgICAgb3Blbk1lbnU6ICgpID0+IHt9LFxuICAgICAgY2xvc2VNZW51OiAoKSA9PiB7fSxcbiAgICAgIGlzTWVudU9wZW46ICgpID0+IHt9LFxuICAgICAgc2V0U2VsZWN0ZWRJbmRleDogKCkgPT4ge30sXG4gICAgICBzZXREaXNhYmxlZDogKCkgPT4ge30sXG4gICAgICBzZXRSaXBwbGVDZW50ZXI6ICgpID0+IHt9LFxuICAgICAgbm90aWZ5Q2hhbmdlOiAoKSA9PiB7fSxcbiAgICAgIGNoZWNrVmFsaWRpdHk6ICgpID0+IHt9LFxuICAgICAgc2V0VmFsaWQ6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ1NlbGVjdEFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICogQHBhcmFtIHshRm91bmRhdGlvbk1hcFR5cGU9fSBmb3VuZGF0aW9uTWFwIE1hcCBmcm9tIHN1YmNvbXBvbmVudCBuYW1lcyB0byB0aGVpciBzdWJmb3VuZGF0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIsIGZvdW5kYXRpb25NYXAgPSAvKiogQHR5cGUgeyFGb3VuZGF0aW9uTWFwVHlwZX0gKi8gKHt9KSkge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDU2VsZWN0Rm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEB0eXBlIHshTURDU2VsZWN0SWNvbkZvdW5kYXRpb258dW5kZWZpbmVkfSAqL1xuICAgIHRoaXMubGVhZGluZ0ljb25fID0gZm91bmRhdGlvbk1hcC5sZWFkaW5nSWNvbjtcbiAgICAvKiogQHR5cGUgeyFNRENTZWxlY3RIZWxwZXJUZXh0Rm91bmRhdGlvbnx1bmRlZmluZWR9ICovXG4gICAgdGhpcy5oZWxwZXJUZXh0XyA9IGZvdW5kYXRpb25NYXAuaGVscGVyVGV4dDtcbiAgfVxuXG4gIHNldFNlbGVjdGVkSW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFNlbGVjdGVkSW5kZXgoaW5kZXgpO1xuICAgIHRoaXMuYWRhcHRlcl8uY2xvc2VNZW51KCk7XG4gICAgY29uc3QgZGlkQ2hhbmdlID0gdHJ1ZTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZShkaWRDaGFuZ2UpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFZhbHVlKHZhbHVlKTtcbiAgICBjb25zdCBkaWRDaGFuZ2UgPSB0cnVlO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGRpZENoYW5nZSk7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgc2V0RGlzYWJsZWQoaXNEaXNhYmxlZCkge1xuICAgIGlzRGlzYWJsZWQgPyB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuRElTQUJMRUQpIDogdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkRJU0FCTEVEKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldERpc2FibGVkKGlzRGlzYWJsZWQpO1xuICAgIHRoaXMuYWRhcHRlcl8uY2xvc2VNZW51KCk7XG5cbiAgICBpZiAodGhpcy5sZWFkaW5nSWNvbl8pIHtcbiAgICAgIHRoaXMubGVhZGluZ0ljb25fLnNldERpc2FibGVkKGlzRGlzYWJsZWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCBTZXRzIHRoZSBjb250ZW50IG9mIHRoZSBoZWxwZXIgdGV4dC5cbiAgICovXG4gIHNldEhlbHBlclRleHRDb250ZW50KGNvbnRlbnQpIHtcbiAgICBpZiAodGhpcy5oZWxwZXJUZXh0Xykge1xuICAgICAgdGhpcy5oZWxwZXJUZXh0Xy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICBjb25zdCBvcGVuTm90Y2ggPSB0aGlzLmdldFZhbHVlKCkubGVuZ3RoID4gMDtcbiAgICB0aGlzLm5vdGNoT3V0bGluZShvcGVuTm90Y2gpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdmFsdWUgY2hhbmdlcywgdmlhIGNoYW5nZSBldmVudCBvciBwcm9ncmFtbWF0aWMgdXBkYXRlcy5cbiAgICovXG4gIGhhbmRsZUNoYW5nZShkaWRDaGFuZ2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgY29uc3Qgb3B0aW9uSGFzVmFsdWUgPSB2YWx1ZS5sZW5ndGggPiAwO1xuICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuUkVRVUlSRUQpO1xuXG4gICAgdGhpcy5ub3RjaE91dGxpbmUob3B0aW9uSGFzVmFsdWUpO1xuXG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuRk9DVVNFRCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZmxvYXRMYWJlbChvcHRpb25IYXNWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGRpZENoYW5nZSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDaGFuZ2UodmFsdWUpO1xuXG4gICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICB0aGlzLnNldFZhbGlkKHRoaXMuaXNWYWxpZCgpKTtcbiAgICAgICAgaWYgKHRoaXMuaGVscGVyVGV4dF8pIHtcbiAgICAgICAgICB0aGlzLmhlbHBlclRleHRfLnNldFZhbGlkaXR5KHRoaXMuaXNWYWxpZCgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGZvY3VzIGV2ZW50cyBmcm9tIHNlbGVjdCBlbGVtZW50LlxuICAgKi9cbiAgaGFuZGxlRm9jdXMoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkZPQ1VTRUQpO1xuICAgIHRoaXMuYWRhcHRlcl8uZmxvYXRMYWJlbCh0cnVlKTtcbiAgICB0aGlzLm5vdGNoT3V0bGluZSh0cnVlKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFjdGl2YXRlQm90dG9tTGluZSgpO1xuICAgIGlmICh0aGlzLmhlbHBlclRleHRfKSB7XG4gICAgICB0aGlzLmhlbHBlclRleHRfLnNob3dUb1NjcmVlblJlYWRlcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGJsdXIgZXZlbnRzIGZyb20gc2VsZWN0IGVsZW1lbnQuXG4gICAqL1xuICBoYW5kbGVCbHVyKCkge1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzTWVudU9wZW4oKSkgcmV0dXJuO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5GT0NVU0VEKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZShmYWxzZSk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZWFjdGl2YXRlQm90dG9tTGluZSgpO1xuXG4gICAgY29uc3QgaXNSZXF1aXJlZCA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5SRVFVSVJFRCk7XG5cbiAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgdGhpcy5zZXRWYWxpZCh0aGlzLmlzVmFsaWQoKSk7XG4gICAgICBpZiAodGhpcy5oZWxwZXJUZXh0Xykge1xuICAgICAgICB0aGlzLmhlbHBlclRleHRfLnNldFZhbGlkaXR5KHRoaXMuaXNWYWxpZCgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVDbGljayhub3JtYWxpemVkWCkge1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzTWVudU9wZW4oKSkgcmV0dXJuO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0UmlwcGxlQ2VudGVyKG5vcm1hbGl6ZWRYKTtcblxuICAgIHRoaXMuYWRhcHRlcl8ub3Blbk1lbnUoKTtcbiAgfVxuXG4gIGhhbmRsZUtleWRvd24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc01lbnVPcGVuKCkpIHJldHVybjtcblxuICAgIGNvbnN0IGlzRW50ZXIgPSBldmVudC5rZXkgPT09ICdFbnRlcicgfHwgZXZlbnQua2V5Q29kZSA9PT0gMTM7XG4gICAgY29uc3QgaXNTcGFjZSA9IGV2ZW50LmtleSA9PT0gJ1NwYWNlJyB8fCBldmVudC5rZXlDb2RlID09PSAzMjtcbiAgICBjb25zdCBhcnJvd1VwID0gZXZlbnQua2V5ID09PSAnQXJyb3dVcCcgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzg7XG4gICAgY29uc3QgYXJyb3dEb3duID0gZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldmVudC5rZXlDb2RlID09PSA0MDtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuRk9DVVNFRCkgJiYgKGlzRW50ZXIgfHwgaXNTcGFjZSB8fCBhcnJvd1VwIHx8IGFycm93RG93bikpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ub3Blbk1lbnUoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zL2Nsb3NlcyB0aGUgbm90Y2hlZCBvdXRsaW5lLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wZW5Ob3RjaFxuICAgKi9cbiAgbm90Y2hPdXRsaW5lKG9wZW5Ob3RjaCkge1xuICAgIGlmICghdGhpcy5hZGFwdGVyXy5oYXNPdXRsaW5lKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXNGb2N1c2VkID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkZPQ1VTRUQpO1xuXG4gICAgaWYgKG9wZW5Ob3RjaCkge1xuICAgICAgY29uc3QgbGFiZWxTY2FsZSA9IG51bWJlcnMuTEFCRUxfU0NBTEU7XG4gICAgICBjb25zdCBsYWJlbFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRMYWJlbFdpZHRoKCkgKiBsYWJlbFNjYWxlO1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RjaE91dGxpbmUobGFiZWxXaWR0aCk7XG4gICAgfSBlbHNlIGlmICghaXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmNsb3NlT3V0bGluZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBhcmlhIGxhYmVsIG9mIHRoZSBsZWFkaW5nIGljb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFxuICAgKi9cbiAgc2V0TGVhZGluZ0ljb25BcmlhTGFiZWwobGFiZWwpIHtcbiAgICBpZiAodGhpcy5sZWFkaW5nSWNvbl8pIHtcbiAgICAgIHRoaXMubGVhZGluZ0ljb25fLnNldEFyaWFMYWJlbChsYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgbGVhZGluZyBpY29uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICAgKi9cbiAgc2V0TGVhZGluZ0ljb25Db250ZW50KGNvbnRlbnQpIHtcbiAgICBpZiAodGhpcy5sZWFkaW5nSWNvbl8pIHtcbiAgICAgIHRoaXMubGVhZGluZ0ljb25fLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsaWQoaXNWYWxpZCkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0VmFsaWQoaXNWYWxpZCk7XG4gIH1cblxuICBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmNoZWNrVmFsaWRpdHkoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENTZWxlY3RGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBSaXBwbGUuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmdcbiAqIC0gY2xhc3Nlc1xuICogLSBkb21cbiAqIC0gQ1NTIHZhcmlhYmxlc1xuICogLSBwb3NpdGlvblxuICogLSBkaW1lbnNpb25zXG4gKiAtIHNjcm9sbCBwb3NpdGlvblxuICogLSBldmVudCBoYW5kbGVyc1xuICogLSB1bmJvdW5kZWQsIGFjdGl2ZSBhbmQgZGlzYWJsZWQgc3RhdGVzXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENSaXBwbGVBZGFwdGVyIHtcbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1VuYm91bmRlZCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZUFjdGl2ZSgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZURpc2FibGVkKCkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0geyFFdmVudFRhcmdldH0gdGFyZ2V0ICovXG4gIGNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFyTmFtZVxuICAgKiBAcGFyYW0gez9udW1iZXJ8c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgdXBkYXRlQ3NzVmFyaWFibGUodmFyTmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqIEByZXR1cm4geyFDbGllbnRSZWN0fSAqL1xuICBjb21wdXRlQm91bmRpbmdSZWN0KCkge31cblxuICAvKiogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gKi9cbiAgZ2V0V2luZG93UGFnZU9mZnNldCgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxuICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbn07XG5cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG4gIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxufTtcblxuY29uc3QgbnVtYmVycyA9IHtcbiAgUEFERElORzogMTAsXG4gIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLXRyYW5zbGF0ZS1kdXJhdGlvbiAoaS5lLiBhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLWZhZGUtb3V0LWR1cmF0aW9uIChpLmUuIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIFRBUF9ERUxBWV9NUzogMzAwLCAvLyBEZWxheSBiZXR3ZWVuIHRvdWNoIGFuZCBzaW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXNcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gYXBwbHlQYXNzaXZlIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c1Bhc3NpdmVfO1xuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAvLyBEZXRlY3QgdmVyc2lvbnMgb2YgRWRnZSB3aXRoIGJ1Z2d5IHZhcigpIHN1cHBvcnRcbiAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMTQ5NTQ0OC9cbiAgY29uc3QgZG9jdW1lbnQgPSB3aW5kb3dPYmouZG9jdW1lbnQ7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgLy8gVGhlIGJ1ZyBleGlzdHMgaWYgOjpiZWZvcmUgc3R5bGUgZW5kcyB1cCBwcm9wYWdhdGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gIC8vIEFkZGl0aW9uYWxseSwgZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIG51bGwgaW4gaWZyYW1lcyB3aXRoIGRpc3BsYXk6IFwibm9uZVwiIGluIEZpcmVmb3gsXG4gIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvd09iai5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBjb25zdCBoYXNQc2V1ZG9WYXJCdWcgPSBjb21wdXRlZFN0eWxlICE9PSBudWxsICYmIGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wU3R5bGUgPT09ICdzb2xpZCc7XG4gIG5vZGUucmVtb3ZlKCk7XG4gIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBsZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuXG4gIGNvbnN0IHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gd2luZG93T2JqLkNTUyAmJiB0eXBlb2Ygd2luZG93T2JqLkNTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTQ2NjlcbiAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgY29uc3Qgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKFxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKVxuICApO1xuXG4gIGlmIChleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cykge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgfSBlbHNlIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG59XG5cbi8vXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZCBpZiBzbywgdXNlIHRoZW0uXG4gKiBAcGFyYW0geyFXaW5kb3c9fSBnbG9iYWxPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnwhRXZlbnRMaXN0ZW5lck9wdGlvbnN9XG4gKi9cbmZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmogPSB3aW5kb3csIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwge2dldCBwYXNzaXZlKCkge1xuICAgICAgICBpc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBpc1N1cHBvcnRlZDtcbiAgICAgIH19KTtcbiAgICB9IGNhdGNoIChlKSB7IH1cblxuICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZDtcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfXG4gICAgPyAvKiogQHR5cGUgeyFFdmVudExpc3RlbmVyT3B0aW9uc30gKi8gKHtwYXNzaXZlOiB0cnVlfSlcbiAgICA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gSFRNTEVsZW1lbnRQcm90b3R5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gIC8qKlxuICAgKiBPcmRlciBpcyBpbXBvcnRhbnQgYmVjYXVzZSB3ZSByZXR1cm4gdGhlIGZpcnN0IGV4aXN0aW5nIG1ldGhvZCB3ZSBmaW5kLlxuICAgKiBEbyBub3QgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgaXRlbXMgaW4gdGhlIGJlbG93IGFycmF5LlxuICAgKi9cbiAgY29uc3QgbWF0Y2hlc01ldGhvZHMgPSBbJ21hdGNoZXMnLCAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJywgJ21zTWF0Y2hlc1NlbGVjdG9yJ107XG4gIGxldCBtZXRob2QgPSAnbWF0Y2hlcyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlc01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0aG9kID0gbWF0Y2hlc01ldGhvZHNbaV07XG4gICAgaWYgKG1hdGNoZXNNZXRob2QgaW4gSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgICAgIG1ldGhvZCA9IG1hdGNoZXNNZXRob2Q7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0aG9kO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUV2ZW50fSBldlxuICogQHBhcmFtIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSBwYWdlT2Zmc2V0XG4gKiBAcGFyYW0geyFDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXYsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgY29uc3Qge3gsIHl9ID0gcGFnZU9mZnNldDtcbiAgY29uc3QgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgY29uc3QgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuXG4gIGxldCBub3JtYWxpemVkWDtcbiAgbGV0IG5vcm1hbGl6ZWRZO1xuICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gIGlmIChldi50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICBldiA9IC8qKiBAdHlwZSB7IVRvdWNoRXZlbnR9ICovIChldik7XG4gICAgbm9ybWFsaXplZFggPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9IGVsc2Uge1xuICAgIGV2ID0gLyoqIEB0eXBlIHshTW91c2VFdmVudH0gKi8gKGV2KTtcbiAgICBub3JtYWxpemVkWCA9IGV2LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYucGFnZVkgLSBkb2N1bWVudFk7XG4gIH1cblxuICByZXR1cm4ge3g6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWX07XG59XG5cbmV4cG9ydCB7c3VwcG9ydHNDc3NWYXJpYWJsZXMsIGFwcGx5UGFzc2l2ZSwgZ2V0TWF0Y2hlc1Byb3BlcnR5LCBnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgaXNBY3RpdmF0ZWQ6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBhY3RpdmF0aW9uRXZlbnQ6ICghRXZlbnR8dW5kZWZpbmVkKSxcbiAqICAgaXNQcm9ncmFtbWF0aWM6IChib29sZWFufHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBBY3RpdmF0aW9uU3RhdGVUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGRlYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZm9jdXM6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgYmx1cjogKHN0cmluZ3x1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJJbmZvVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50KSxcbiAqICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50PSksXG4gKiAgIGZvY3VzOiBmdW5jdGlvbigpLFxuICogICBibHVyOiBmdW5jdGlvbigpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJzVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICB4OiBudW1iZXIsXG4gKiAgIHk6IG51bWJlclxuICogfX1cbiAqL1xubGV0IFBvaW50VHlwZTtcblxuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbmNvbnN0IEFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nLCAnbW91c2Vkb3duJywgJ2tleWRvd24nXTtcblxuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG5jb25zdCBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnXTtcblxuLy8gVHJhY2tzIGFjdGl2YXRpb25zIHRoYXQgaGF2ZSBvY2N1cnJlZCBvbiB0aGUgY3VycmVudCBmcmFtZSwgdG8gYXZvaWQgc2ltdWx0YW5lb3VzIG5lc3RlZCBhY3RpdmF0aW9uc1xuLyoqIEB0eXBlIHshQXJyYXk8IUV2ZW50VGFyZ2V0Pn0gKi9cbmxldCBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1JpcHBsZUFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENSaXBwbGVGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gbnVtYmVycztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IC8qIGJvb2xlYW4gLSBjYWNoZWQgKi8ge30sXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICgvKiB0YXJnZXQ6ICFFdmVudFRhcmdldCAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAoLyogdmFyTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IC8qIENsaWVudFJlY3QgKi8ge30sXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAvKiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9ICovIHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUgeyFDbGllbnRSZWN0fSAqL1xuICAgIHRoaXMuZnJhbWVfID0gLyoqIEB0eXBlIHshQ2xpZW50UmVjdH0gKi8gKHt3aWR0aDogMCwgaGVpZ2h0OiAwfSk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubWF4UmFkaXVzXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCl9ICovXG4gICAgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gKGUpID0+IHRoaXMuYWN0aXZhdGVfKGUpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9ICgpID0+IHRoaXMuZGVhY3RpdmF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5mb2N1c0hhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVGb2N1cygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmJsdXJIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlQmx1cigpO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyXyA9ICgpID0+IHRoaXMubGF5b3V0KCk7XG5cbiAgICAvKiogQHByaXZhdGUge3tsZWZ0OiBudW1iZXIsIHRvcDpudW1iZXJ9fSAqL1xuICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdTY2FsZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUV2ZW50fHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdXBwb3J0c1ByZXNzUmlwcGxlXygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9XG4gICAqL1xuICBkZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcblxuICAgIHRoaXMucmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpO1xuXG4gICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhST09UKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlcyBuZWVkIGxheW91dCBsb2dpYyBhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIHNldCBjb29yZGluYXRlcyBmb3IgYm90aCBzaGFkZSBhbmQgcmlwcGxlXG4gICAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCkpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2YXRpb25UaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoUk9PVCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudH0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSkge1xuICAgIGlmIChlLnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpIHtcbiAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcmVtb3ZlQ3NzVmFyc18oKSB7XG4gICAgY29uc3Qge3N0cmluZ3N9ID0gTURDUmlwcGxlRm91bmRhdGlvbjtcbiAgICBPYmplY3Qua2V5cyhzdHJpbmdzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBpZiAoay5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShzdHJpbmdzW2tdLCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFjdGl2YXRlXyhlKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgIGNvbnN0IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgY29uc3QgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBlICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZS50eXBlO1xuICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZSA9PT0gdW5kZWZpbmVkO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IGUgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICBlLnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3BvaW50ZXJkb3duJ1xuICAgICk7XG5cbiAgICBjb25zdCBoYXNBY3RpdmF0ZWRDaGlsZCA9IGUgIT09IHVuZGVmaW5lZCAmJiBhY3RpdmF0ZWRUYXJnZXRzLmxlbmd0aCA+IDAgJiYgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKFxuICAgICAgKHRhcmdldCkgPT4gdGhpcy5hZGFwdGVyXy5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkpO1xuICAgIGlmIChoYXNBY3RpdmF0ZWRDaGlsZCkge1xuICAgICAgLy8gSW1tZWRpYXRlbHkgcmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSwgd2hpbGUgcHJlc2VydmluZyBsb2dpYyB0aGF0IHByZXZlbnRzIHRvdWNoIGZvbGxvdy1vbiBldmVudHNcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKC8qKiBAdHlwZSB7IUV2ZW50VGFyZ2V0fSAqLyAoZS50YXJnZXQpKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSAmJiBlICE9PSB1bmRlZmluZWQgJiYgKGUua2V5ID09PSAnICcgfHwgZS5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgLy8gYWN0aXZlIHN0YXRlcyBpbmNvbnNpc3RlbnRseSB3aGVuIHRoZXkncmUgY2FsbGVkIHdpdGhpbiBldmVudCBoYW5kbGluZyBjb2RlOlxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgLy8gV2UgdHJ5IGZpcnN0IG91dHNpZGUgckFGIHRvIHN1cHBvcnQgRWRnZSwgd2hpY2ggZG9lcyBub3QgZXhoaWJpdCB0aGlzIHByb2JsZW0sIGJ1dCB3aWxsIGNyYXNoIGlmIGEgQ1NTXG4gICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSkge1xuICAgIHJldHVybiAoZSAhPT0gdW5kZWZpbmVkICYmIGUudHlwZSA9PT0gJ2tleWRvd24nKSA/IHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlQWN0aXZlKCkgOiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZXZlbnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICovXG4gIGFjdGl2YXRlKGV2ZW50KSB7XG4gICAgdGhpcy5hY3RpdmF0ZV8oZXZlbnQpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGFuaW1hdGVBY3RpdmF0aW9uXygpIHtcbiAgICBjb25zdCB7VkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtERUFDVElWQVRJT05fVElNRU9VVF9NU30gPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnM7XG5cbiAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuXG4gICAgbGV0IHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgbGV0IHRyYW5zbGF0ZUVuZCA9ICcnO1xuXG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIGNvbnN0IHtzdGFydFBvaW50LCBlbmRQb2ludH0gPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKTtcbiAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gYCR7c3RhcnRQb2ludC54fXB4LCAke3N0YXJ0UG9pbnQueX1weGA7XG4gICAgICB0cmFuc2xhdGVFbmQgPSBgJHtlbmRQb2ludC54fXB4LCAke2VuZFBvaW50Lnl9cHhgO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuXG4gICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm4ge3tzdGFydFBvaW50OiBQb2ludFR5cGUsIGVuZFBvaW50OiBQb2ludFR5cGV9fVxuICAgKi9cbiAgZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpIHtcbiAgICBjb25zdCB7YWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXJ9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuXG4gICAgbGV0IHN0YXJ0UG9pbnQ7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhcbiAgICAgICAgLyoqIEB0eXBlIHshRXZlbnR9ICovIChhY3RpdmF0aW9uRXZlbnQpLFxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICBjb25zdCBlbmRQb2ludCA9IHtcbiAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtzdGFydFBvaW50LCBlbmRQb2ludH07XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCkge1xuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtoYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWR9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGNvbnN0IGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcblxuICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKSB7XG4gICAgY29uc3Qge0ZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gIH1cblxuICByZXNldEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQsIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZWFjdGl2YXRlXygpIHtcbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSAvKiogQHR5cGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqLyAoT2JqZWN0LmFzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKSk7XG5cbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSkpO1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9IG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFuaW1hdGVEZWFjdGl2YXRpb25fKHt3YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlfSkge1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfVxuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgIH1cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGxheW91dEludGVybmFsXygpIHtcbiAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIGNvbnN0IG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuXG4gICAgLy8gU3VyZmFjZSBkaWFtZXRlciBpcyB0cmVhdGVkIGRpZmZlcmVudGx5IGZvciB1bmJvdW5kZWQgdnMuIGJvdW5kZWQgcmlwcGxlcy5cbiAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAvLyBzcXVhcmUpLiBCb3VuZGVkIHJpcHBsZXMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgZnVsbHkgZXhwZWN0ZWQgdG8gZXhwYW5kIGJleW9uZCB0aGUgc3VyZmFjZSdzIGxvbmdlc3QgZGlhbWV0ZXJcbiAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgIGNvbnN0IGdldEJvdW5kZWRSYWRpdXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMuZnJhbWVfLndpZHRoLCAyKSArIE1hdGgucG93KHRoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICB9O1xuXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpID8gbWF4RGltIDogZ2V0Qm91bmRlZFJhZGl1cygpO1xuXG4gICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICB0aGlzLmluaXRpYWxTaXplXyA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICB0aGlzLmZnU2NhbGVfID0gdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG5cbiAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgdXBkYXRlTGF5b3V0Q3NzVmFyc18oKSB7XG4gICAgY29uc3Qge1xuICAgICAgVkFSX0ZHX1NJWkUsIFZBUl9MRUZULCBWQVJfVE9QLCBWQVJfRkdfU0NBTEUsXG4gICAgfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIGAke3RoaXMuaW5pdGlhbFNpemVffXB4YCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnR9cHhgKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcH1weGApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXRVbmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgY29uc3Qge1VOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRm9jdXMoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKSk7XG4gIH1cblxuICBoYW5kbGVCbHVyKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCBNRENSaXBwbGVGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQGV4dGVuZHMgTURDQ29tcG9uZW50PCFNRENSaXBwbGVGb3VuZGF0aW9uPlxuICovXG5jbGFzcyBNRENSaXBwbGUgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKiogQHBhcmFtIHsuLi4/fSBhcmdzICovXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHt7aXNVbmJvdW5kZWQ6IChib29sZWFufHVuZGVmaW5lZCl9PX0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QsIHtpc1VuYm91bmRlZCA9IHVuZGVmaW5lZH0gPSB7fSkge1xuICAgIGNvbnN0IHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgLy8gT25seSBvdmVycmlkZSB1bmJvdW5kZWQgYmVoYXZpb3IgaWYgb3B0aW9uIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgaWYgKGlzVW5ib3VuZGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSAvKiogQHR5cGUge2Jvb2xlYW59ICovIChpc1VuYm91bmRlZCk7XG4gICAgfVxuICAgIHJldHVybiByaXBwbGU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshUmlwcGxlQ2FwYWJsZVN1cmZhY2V9IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUFkYXB0ZXIoaW5zdGFuY2UpIHtcbiAgICBjb25zdCBNQVRDSEVTID0gdXRpbC5nZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyksXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gaW5zdGFuY2UudW5ib3VuZGVkLFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiBpbnN0YW5jZS5yb290X1tNQVRDSEVTXSgnOmFjdGl2ZScpLFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IGluc3RhbmNlLmRpc2FibGVkLFxuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiAodGFyZ2V0KSA9PiBpbnN0YW5jZS5yb290Xy5jb250YWlucyh0YXJnZXQpLFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpLFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gaW5zdGFuY2Uucm9vdF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAoe3g6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0fSksXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgdW5ib3VuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0IHVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICB0aGlzLnVuYm91bmRlZF8gPSBCb29sZWFuKHVuYm91bmRlZCk7XG4gICAgdGhpcy5zZXRVbmJvdW5kZWRfKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc3VyZSBDb21waWxlciB0aHJvd3MgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3Igd2hlbiBkaXJlY3RseSBhY2Nlc3NpbmcgYVxuICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICogQnkgYWNjZXNzaW5nIHRoZSBwcm90ZWN0ZWQgcHJvcGVydHkgaW5zaWRlIGEgbWV0aG9kLCB3ZSBzb2x2ZSB0aGF0IHByb2JsZW0uXG4gICAqIFRoYXQncyB3aHkgdGhpcyBmdW5jdGlvbiBleGlzdHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRVbmJvdW5kZWRfKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VW5ib3VuZGVkKHRoaXMudW5ib3VuZGVkXyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUZvdW5kYXRpb259XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMudW5ib3VuZGVkID0gJ21kY1JpcHBsZUlzVW5ib3VuZGVkJyBpbiB0aGlzLnJvb3RfLmRhdGFzZXQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTZWUgTWF0ZXJpYWwgRGVzaWduIHNwZWMgZm9yIG1vcmUgZGV0YWlscyBvbiB3aGVuIHRvIHVzZSByaXBwbGVzLlxuICogaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL21vdGlvbi9jaG9yZW9ncmFwaHkuaHRtbCNjaG9yZW9ncmFwaHktY3JlYXRpb25cbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgUmlwcGxlQ2FwYWJsZVN1cmZhY2Uge31cblxuLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLnJvb3RfO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgYmxlZWRzIG91dCBvZiB0aGUgYm91bmRzIG9mIHRoZSBlbGVtZW50LlxuICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUudW5ib3VuZGVkO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgaXMgYXR0YWNoZWQgdG8gYSBkaXNhYmxlZCBjb21wb25lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS5kaXNhYmxlZDtcblxuZXhwb3J0IHtNRENSaXBwbGUsIE1EQ1JpcHBsZUZvdW5kYXRpb24sIFJpcHBsZUNhcGFibGVTdXJmYWNlLCB1dGlsfTtcbiIsImltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2luZGV4J1xuaW1wb3J0IHtcbiAgc3VwcG9ydHNDc3NWYXJpYWJsZXMsXG4gIGdldE1hdGNoZXNQcm9wZXJ0eSxcbiAgYXBwbHlQYXNzaXZlXG59IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvdXRpbCdcblxuZXhwb3J0IGNsYXNzIFJpcHBsZUJhc2UgZXh0ZW5kcyBNRENSaXBwbGVGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBNQVRDSEVTKCkge1xuICAgIC8qIGdsb2JhbCBIVE1MRWxlbWVudCAqL1xuICAgIHJldHVybiAoXG4gICAgICBSaXBwbGVCYXNlLl9tYXRjaGVzIHx8XG4gICAgICAoUmlwcGxlQmFzZS5fbWF0Y2hlcyA9IGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpKVxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cmZhY2VBY3RpdmUocmVmKSB7XG4gICAgcmV0dXJuIHJlZltSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZtLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbFtSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRkZWxldGUodm0uY2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogdGFyZ2V0ID0+IHZtLiRlbC5jb250YWlucyh0YXJnZXQpLFxuICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uc3R5bGVzLCB2YXJOYW1lLCB2YWx1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFJpcHBsZU1peGluID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzKVxuICAgIHRoaXMucmlwcGxlLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxjdXN0b20tZWxlbWVudCBcbiAgICA6dGFnPVwidGFnXCIgXG4gICAgOmNsYXNzZXM9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGVzPVwic3R5bGVzXCIgXG4gICAgY2xhc3M9XCJtZGMtcmlwcGxlXCI+XG4gICAgPHNsb3QgLz5cbiAgPC9jdXN0b20tZWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBDdXN0b21FbGVtZW50TWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlTWl4aW4gfSBmcm9tICcuL21kYy1yaXBwbGUtYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXJpcHBsZScsXG4gIG1peGluczogW0N1c3RvbUVsZW1lbnRNaXhpbiwgUmlwcGxlTWl4aW5dLFxuICBwcm9wczoge1xuICAgIHRhZzogU3RyaW5nXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50KGNvbXBpbGVkVGVtcGxhdGUsIGluamVjdFN0eWxlLCBkZWZhdWx0RXhwb3J0LCBzY29wZUlkLCBpc0Z1bmN0aW9uYWxUZW1wbGF0ZSwgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLywgaXNTaGFkb3dNb2RlLCBjcmVhdGVJbmplY3RvciwgY3JlYXRlSW5qZWN0b3JTU1IsIGNyZWF0ZUluamVjdG9yU2hhZG93KSB7XG4gICAgaWYgKHR5cGVvZiBpc1NoYWRvd01vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3JTU1IgPSBjcmVhdGVJbmplY3RvcjtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3IgPSBpc1NoYWRvd01vZGU7XG4gICAgICAgIGlzU2hhZG93TW9kZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gICAgY29uc3Qgb3B0aW9ucyA9IHR5cGVvZiBkZWZhdWx0RXhwb3J0ID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdEV4cG9ydC5vcHRpb25zIDogZGVmYXVsdEV4cG9ydDtcbiAgICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gICAgaWYgKGNvbXBpbGVkVGVtcGxhdGUgJiYgY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXIpIHtcbiAgICAgICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlcjtcbiAgICAgICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgICAgICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlO1xuICAgICAgICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzY29wZWRJZFxuICAgIGlmIChzY29wZUlkKSB7XG4gICAgICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkO1xuICAgIH1cbiAgICBsZXQgaG9vaztcbiAgICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgICAgICAvLyBzZXJ2ZXIgYnVpbGRcbiAgICAgICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICAgICAgICBjb250ZXh0ID1cbiAgICAgICAgICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KTsgLy8gZnVuY3Rpb25hbFxuICAgICAgICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICAgICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX187XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgICAgICAgaWYgKGluamVjdFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNTUihjb250ZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVyZW5jZVxuICAgICAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9vaztcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5qZWN0U3R5bGUpIHtcbiAgICAgICAgaG9vayA9IGlzU2hhZG93TW9kZVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNoYWRvdyh0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH07XG4gICAgfVxuICAgIGlmIChob29rKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcbiAgICAgICAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBob29rLmNhbGwoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlO1xuICAgICAgICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRFeHBvcnQ7XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgOmlkPVwiaWRcIiA6Y2xhc3M9XCJyb290Q2xhc3Nlc1wiIDpzdHlsZT1cInN0eWxlc1wiPlxuICAgIDxpIGNsYXNzPVwibWRjLXNlbGVjdF9fZHJvcGRvd24taWNvblwiPjwvaT5cbiAgICA8c2VsZWN0XG4gICAgICByZWY9XCJuYXRpdmVfY29udHJvbFwiXG4gICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICB2LWJpbmQ9XCIkYXR0cnNcIlxuICAgICAgY2xhc3M9XCJtZGMtc2VsZWN0X19uYXRpdmUtY29udHJvbFwiXG4gICAgICB2LW9uPVwibGlzdGVuZXJzXCJcbiAgICA+XG4gICAgICA8b3B0aW9uIHYtaWY9XCIhdmFsdWVcIiBjbGFzcz1cIm1kYy1vcHRpb25cIiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkIC8+XG4gICAgICA8c2xvdCAvPlxuICAgIDwvc2VsZWN0PlxuICAgIDxtZGMtZmxvYXRpbmctbGFiZWwgdi1pZj1cIiFvdXRsaW5lZFwiIHJlZj1cImxhYmVsRWxcIj57e1xuICAgICAgbGFiZWxcbiAgICB9fTwvbWRjLWZsb2F0aW5nLWxhYmVsPlxuICAgIDxtZGMtbGluZS1yaXBwbGUgdi1pZj1cIiFvdXRsaW5lZFwiIHJlZj1cImxpbmVSaXBwbGVFbFwiIC8+XG4gICAgPG1kYy1ub3RjaGVkLW91dGxpbmUgdi1pZj1cIm91dGxpbmVkXCIgcmVmPVwib3V0bGluZUVsXCI+e3tcbiAgICAgIGxhYmVsXG4gICAgfX08L21kYy1ub3RjaGVkLW91dGxpbmU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENTZWxlY3RGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9zZWxlY3QvZm91bmRhdGlvbidcbmltcG9ydCB7IFJpcHBsZUJhc2UgfSBmcm9tICcuLi9yaXBwbGUnXG5cbmltcG9ydCB7IGVtaXRDdXN0b21FdmVudCB9IGZyb20gJy4uL2Jhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1zZWxlY3QnLFxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuICBtb2RlbDoge1xuICAgIHByb3A6ICd2YWx1ZScsXG4gICAgZXZlbnQ6ICdjaGFuZ2UnXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IFN0cmluZyxcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIG91dGxpbmVkOiBCb29sZWFuLFxuICAgIGlkOiB7IHR5cGU6IFN0cmluZyB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0eWxlczoge30sXG4gICAgICBjbGFzc2VzOiB7fVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICByb290Q2xhc3NlcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdtZGMtc2VsZWN0JzogdHJ1ZSxcbiAgICAgICAgJ21kYy1zZWxlY3QtLW91dGxpbmVkJzogdGhpcy5vdXRsaW5lZCxcbiAgICAgICAgLi4udGhpcy5jbGFzc2VzXG4gICAgICB9XG4gICAgfSxcbiAgICBsaXN0ZW5lcnMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLiRsaXN0ZW5lcnMsXG4gICAgICAgIGNoYW5nZTogZXZlbnQgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpLFxuICAgICAgICBibHVyOiBldmVudCA9PiB0aGlzLmhhbmRsZUJsdXIoZXZlbnQpLFxuICAgICAgICBmb2N1czogZXZlbnQgPT4gdGhpcy5oYW5kbGVGb2N1cyhldmVudCksXG4gICAgICAgIG1vdXNlZG93bjogZXZlbnQgPT4gdGhpcy5oYW5kbGVDbGljayhldmVudCksXG4gICAgICAgIHRvdWNoc3RhcnQ6IGV2ZW50ID0+IHRoaXMuaGFuZGxlQ2xpY2soZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGRpc2FibGVkKHZhbHVlKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24gJiYgdGhpcy5mb3VuZGF0aW9uLnVwZGF0ZURpc2FibGVkU3R5bGUodmFsdWUpXG4gICAgfSxcbiAgICB2YWx1ZTogJ3JlZnJlc2hJbmRleCdcbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENTZWxlY3RGb3VuZGF0aW9uKHtcbiAgICAgIC8vIGNvbW1vbiBtZXRob2RzXG4gICAgICBhZGRDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSksXG4gICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGRlbGV0ZSh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSksXG4gICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IEJvb2xlYW4odGhpcy5jbGFzc2VzW2NsYXNzTmFtZV0pLFxuICAgICAgc2V0UmlwcGxlQ2VudGVyOiBub3JtYWxpemVkWCA9PlxuICAgICAgICB0aGlzLiRyZWZzLmxpbmVSaXBwbGVFbCAmJlxuICAgICAgICB0aGlzLiRyZWZzLmxpbmVSaXBwbGVFbC5zZXRSaXBwbGVDZW50ZXIobm9ybWFsaXplZFgpLFxuICAgICAgYWN0aXZhdGVCb3R0b21MaW5lOiAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiRyZWZzLmxpbmVSaXBwbGVFbCkge1xuICAgICAgICAgIHRoaXMuJHJlZnMubGluZVJpcHBsZUVsLmZvdW5kYXRpb24uYWN0aXZhdGUoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVhY3RpdmF0ZUJvdHRvbUxpbmU6ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuJHJlZnMubGluZVJpcHBsZUVsKSB7XG4gICAgICAgICAgdGhpcy4kcmVmcy5saW5lUmlwcGxlRWwuZm91bmRhdGlvbi5kZWFjdGl2YXRlKClcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgbm90aWZ5Q2hhbmdlOiB2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4XG4gICAgICAgIGVtaXRDdXN0b21FdmVudChcbiAgICAgICAgICB0aGlzLiRlbCxcbiAgICAgICAgICBNRENTZWxlY3RGb3VuZGF0aW9uLnN0cmluZ3MuQ0hBTkdFX0VWRU5ULFxuICAgICAgICAgIHsgdmFsdWUsIGluZGV4IH0sXG4gICAgICAgICAgdHJ1ZSAvKiBzaG91bGRCdWJibGUgICovXG4gICAgICAgIClcblxuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB2YWx1ZSlcbiAgICAgIH0sXG5cbiAgICAgIC8vIG5hdGl2ZSBtZXRob2RzXG4gICAgICBnZXRWYWx1ZTogKCkgPT4gdGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbC52YWx1ZSxcbiAgICAgIHNldFZhbHVlOiB2YWx1ZSA9PiAodGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbC52YWx1ZSA9IHZhbHVlKSxcbiAgICAgIG9wZW5NZW51OiAoKSA9PiB7fSxcbiAgICAgIGNsb3NlTWVudTogKCkgPT4ge30sXG4gICAgICBpc01lbnVPcGVuOiAoKSA9PiBmYWxzZSxcbiAgICAgIHNldFNlbGVjdGVkSW5kZXg6IGluZGV4ID0+IHtcbiAgICAgICAgdGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbC5zZWxlY3RlZEluZGV4ID0gaW5kZXhcbiAgICAgIH0sXG4gICAgICBzZXREaXNhYmxlZDogaXNEaXNhYmxlZCA9PlxuICAgICAgICAodGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbC5kaXNhYmxlZCA9IGlzRGlzYWJsZWQpLFxuICAgICAgc2V0VmFsaWQ6IGlzVmFsaWQgPT4ge1xuICAgICAgICBpc1ZhbGlkXG4gICAgICAgICAgPyB0aGlzLiRkZWxldGUodGhpcy5jbGFzc2VzLCBNRENTZWxlY3RGb3VuZGF0aW9uLmNzc0NsYXNzZXMuSU5WQUxJRClcbiAgICAgICAgICA6IHRoaXMuc2V0KHRoaXMuY2xhc3NlcywgTURDU2VsZWN0Rm91bmRhdGlvbi5jc3NDbGFzc2VzLklOVkFMSUQpXG4gICAgICB9LFxuICAgICAgY2hlY2tWYWxpZGl0eTogKCkgPT4gdGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbC5jaGVja1ZhbGlkaXR5KCksXG5cbiAgICAgIC8vIG91dGxpbmUgbWV0aG9kc1xuXG4gICAgICBoYXNPdXRsaW5lOiAoKSA9PiB0aGlzLm91dGxpbmVkLFxuICAgICAgbm90Y2hPdXRsaW5lOiBsYWJlbFdpZHRoID0+IHtcbiAgICAgICAgaWYgKHRoaXMuJHJlZnMub3V0bGluZUVsKSB7XG4gICAgICAgICAgdGhpcy4kcmVmcy5vdXRsaW5lRWwubm90Y2gobGFiZWxXaWR0aClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNsb3NlT3V0bGluZTogKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy4kcmVmcy5vdXRsaW5lRWwpIHtcbiAgICAgICAgICB0aGlzLiRyZWZzLm91dGxpbmVFbC5jbG9zZU5vdGNoKClcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLy8gbGFiZWwgbWV0aG9kc1xuICAgICAgZmxvYXRMYWJlbDogdmFsdWUgPT4ge1xuICAgICAgICBpZiAodGhpcy4kcmVmcy5sYWJlbEVsKSB7XG4gICAgICAgICAgdGhpcy4kcmVmcy5sYWJlbEVsLmZsb2F0KHZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJHJlZnMub3V0bGluZUVsLmZsb2F0KHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBnZXRMYWJlbFdpZHRoOiAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiRyZWZzLmxhYmVsRWwpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5sYWJlbEVsLmdldFdpZHRoKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUNoYW5nZShmYWxzZSlcblxuICAgIC8vIGluaXRpYWwgc3luYyB3aXRoIERPTVxuICAgIHRoaXMucmVmcmVzaEluZGV4KClcbiAgICB0aGlzLnNsb3RPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHRoaXMucmVmcmVzaEluZGV4KCkpXG4gICAgdGhpcy5zbG90T2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiRyZWZzLm5hdGl2ZV9jb250cm9sLCB7XG4gICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgfSlcblxuICAgIHRoaXMucmlwcGxlID0gbmV3IFJpcHBsZUJhc2UodGhpcylcbiAgICB0aGlzLnJpcHBsZS5pbml0KClcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuc2xvdE9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuXG4gICAgbGV0IGZvdW5kYXRpb24gPSB0aGlzLmZvdW5kYXRpb25cbiAgICB0aGlzLmZvdW5kYXRpb24gPSBudWxsXG4gICAgZm91bmRhdGlvbi5kZXN0cm95KClcblxuICAgIHRoaXMucmlwcGxlICYmIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlQ2hhbmdlKHRydWUpXG4gICAgfSxcblxuICAgIGhhbmRsZUZvY3VzKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUZvY3VzKClcbiAgICB9LFxuXG4gICAgaGFuZGxlQmx1cigpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVCbHVyKClcbiAgICB9LFxuXG4gICAgaGFuZGxlQ2xpY2soZXZ0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlQ2xpY2sodGhpcy5nZXROb3JtYWxpemVkWENvb3JkaW5hdGUoZXZ0KSlcbiAgICB9LFxuICAgIHJlZnJlc2hJbmRleCgpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBbLi4udGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKV1cblxuICAgICAgY29uc3QgaWR4ID0gb3B0aW9ucy5maW5kSW5kZXgoKHsgdmFsdWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gdmFsdWVcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLiRyZWZzLm5hdGl2ZV9jb250cm9sLnNlbGVjdGVkSW5kZXggIT09IGlkeCkge1xuICAgICAgICB0aGlzLiRyZWZzLm5hdGl2ZV9jb250cm9sLnNlbGVjdGVkSW5kZXggPSBpZHhcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUNoYW5nZShmYWxzZSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0Tm9ybWFsaXplZFhDb29yZGluYXRlKGV2dCkge1xuICAgICAgY29uc3QgdGFyZ2V0Q2xpZW50UmVjdCA9IGV2dC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGNvbnN0IHhDb29yZGluYXRlID0gZXZ0LmNsaWVudFhcbiAgICAgIHJldHVybiB4Q29vcmRpbmF0ZSAtIHRhcmdldENsaWVudFJlY3QubGVmdFxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBtZGNTZWxlY3QgZnJvbSAnLi9tZGMtc2VsZWN0LnZ1ZSdcblxuZXhwb3J0IHsgbWRjU2VsZWN0IH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY1NlbGVjdFxufSlcbiIsImltcG9ydCAnLi9zdHlsZXMuc2NzcydcbmltcG9ydCB7IGF1dG9Jbml0IH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBwbHVnaW4gZnJvbSAnLi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG5hdXRvSW5pdChwbHVnaW4pXG4iXSwibmFtZXMiOlsiYXV0b0luaXQiLCJwbHVnaW4iLCJfVnVlIiwid2luZG93IiwiVnVlIiwiZ2xvYmFsIiwidXNlIiwiQmFzZVBsdWdpbiIsImNvbXBvbmVudHMiLCJ2ZXJzaW9uIiwiaW5zdGFsbCIsInZtIiwia2V5IiwiY29tcG9uZW50IiwibmFtZSIsIkN1c3RvbUVsZW1lbnQiLCJmdW5jdGlvbmFsIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJwcm9wcyIsImlzIiwidGFnIiwiZGF0YSIsImNoaWxkcmVuIiwiQ3VzdG9tRWxlbWVudE1peGluIiwiZW1pdEN1c3RvbUV2ZW50IiwiZWwiLCJldnRUeXBlIiwiZXZ0RGF0YSIsInNob3VsZEJ1YmJsZSIsImV2dCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiYnViYmxlcyIsImRvY3VtZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50Iiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIk1EQ0ZvdW5kYXRpb24iLCJhZGFwdGVyIiwiYWRhcHRlcl8iLCJNRENDb21wb25lbnQiLCJyb290IiwiZm91bmRhdGlvbiIsInVuZGVmaW5lZCIsInJvb3RfIiwiYXJncyIsImluaXRpYWxpemUiLCJmb3VuZGF0aW9uXyIsImdldERlZmF1bHRGb3VuZGF0aW9uIiwiaW5pdCIsImluaXRpYWxTeW5jV2l0aERPTSIsIkVycm9yIiwiZGVzdHJveSIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1EQ1NlbGVjdEljb25BZGFwdGVyIiwiYXR0ciIsInZhbHVlIiwiY29udGVudCIsInN0cmluZ3MiLCJJQ09OX0VWRU5UIiwiSUNPTl9ST0xFIiwiTURDU2VsZWN0SWNvbkZvdW5kYXRpb24iLCJnZXRBdHRyIiwic2V0QXR0ciIsInJlbW92ZUF0dHIiLCJzZXRDb250ZW50IiwicmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwibm90aWZ5SWNvbkFjdGlvbiIsImRlZmF1bHRBZGFwdGVyIiwic2F2ZWRUYWJJbmRleF8iLCJpbnRlcmFjdGlvbkhhbmRsZXJfIiwiaGFuZGxlSW50ZXJhY3Rpb24iLCJmb3JFYWNoIiwiZGlzYWJsZWQiLCJsYWJlbCIsInR5cGUiLCJrZXlDb2RlIiwiTURDU2VsZWN0SWNvbiIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiZW1pdCIsIk1EQ1NlbGVjdEhlbHBlclRleHRBZGFwdGVyIiwiY2xhc3NOYW1lIiwiQVJJQV9ISURERU4iLCJST0xFIiwiY3NzQ2xhc3NlcyIsIkhFTFBFUl9URVhUX1BFUlNJU1RFTlQiLCJIRUxQRVJfVEVYVF9WQUxJREFUSU9OX01TRyIsIk1EQ1NlbGVjdEhlbHBlclRleHRGb3VuZGF0aW9uIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwiaXNQZXJzaXN0ZW50IiwiaXNWYWxpZGF0aW9uIiwic2VsZWN0SXNWYWxpZCIsImhlbHBlclRleHRJc1BlcnNpc3RlbnQiLCJoZWxwZXJUZXh0SXNWYWxpZGF0aW9uTXNnIiwidmFsaWRhdGlvbk1zZ05lZWRzRGlzcGxheSIsImhpZGVfIiwiTURDU2VsZWN0SGVscGVyVGV4dCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNvbnRhaW5zIiwiTURDU2VsZWN0QWRhcHRlciIsInNob3VsZEZsb2F0IiwibGFiZWxXaWR0aCIsImluZGV4IiwiaXNEaXNhYmxlZCIsIm5vcm1hbGl6ZWRYIiwiaXNWYWxpZCIsIkRJU0FCTEVEIiwiUk9PVCIsIk9VVExJTkVEIiwiRk9DVVNFRCIsIlNFTEVDVEVEX0lURU1fQ0xBU1MiLCJXSVRIX0xFQURJTkdfSUNPTiIsIklOVkFMSUQiLCJSRVFVSVJFRCIsIkFSSUFfQ09OVFJPTFMiLCJDSEFOR0VfRVZFTlQiLCJTRUxFQ1RFRF9JVEVNX1NFTEVDVE9SIiwiTEVBRElOR19JQ09OX1NFTEVDVE9SIiwiU0VMRUNURURfVEVYVF9TRUxFQ1RPUiIsIkhJRERFTl9JTlBVVF9TRUxFQ1RPUiIsIk1FTlVfU0VMRUNUT1IiLCJMSU5FX1JJUFBMRV9TRUxFQ1RPUiIsIkxBQkVMX1NFTEVDVE9SIiwiTkFUSVZFX0NPTlRST0xfU0VMRUNUT1IiLCJPVVRMSU5FX1NFTEVDVE9SIiwiRU5IQU5DRURfVkFMVUVfQVRUUiIsIkFSSUFfU0VMRUNURURfQVRUUiIsIm51bWJlcnMiLCJMQUJFTF9TQ0FMRSIsIk1EQ1NlbGVjdEZvdW5kYXRpb24iLCJhY3RpdmF0ZUJvdHRvbUxpbmUiLCJkZWFjdGl2YXRlQm90dG9tTGluZSIsInNldFZhbHVlIiwiZ2V0VmFsdWUiLCJmbG9hdExhYmVsIiwiZ2V0TGFiZWxXaWR0aCIsImhhc091dGxpbmUiLCJub3RjaE91dGxpbmUiLCJjbG9zZU91dGxpbmUiLCJvcGVuTWVudSIsImNsb3NlTWVudSIsImlzTWVudU9wZW4iLCJzZXRTZWxlY3RlZEluZGV4Iiwic2V0RGlzYWJsZWQiLCJzZXRSaXBwbGVDZW50ZXIiLCJub3RpZnlDaGFuZ2UiLCJjaGVja1ZhbGlkaXR5Iiwic2V0VmFsaWQiLCJmb3VuZGF0aW9uTWFwIiwibGVhZGluZ0ljb25fIiwibGVhZGluZ0ljb24iLCJoZWxwZXJUZXh0XyIsImhlbHBlclRleHQiLCJkaWRDaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJvcGVuTm90Y2giLCJsZW5ndGgiLCJvcHRpb25IYXNWYWx1ZSIsImlzUmVxdWlyZWQiLCJzZXRWYWxpZGl0eSIsInNob3dUb1NjcmVlblJlYWRlciIsImV2ZW50IiwiaXNFbnRlciIsImlzU3BhY2UiLCJhcnJvd1VwIiwiYXJyb3dEb3duIiwicHJldmVudERlZmF1bHQiLCJpc0ZvY3VzZWQiLCJsYWJlbFNjYWxlIiwic2V0QXJpYUxhYmVsIiwiTURDUmlwcGxlQWRhcHRlciIsInRhcmdldCIsInZhck5hbWUiLCJVTkJPVU5ERUQiLCJCR19GT0NVU0VEIiwiRkdfQUNUSVZBVElPTiIsIkZHX0RFQUNUSVZBVElPTiIsIlZBUl9MRUZUIiwiVkFSX1RPUCIsIlZBUl9GR19TSVpFIiwiVkFSX0ZHX1NDQUxFIiwiVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCIsIlZBUl9GR19UUkFOU0xBVEVfRU5EIiwiUEFERElORyIsIklOSVRJQUxfT1JJR0lOX1NDQUxFIiwiREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMiLCJGR19ERUFDVElWQVRJT05fTVMiLCJUQVBfREVMQVlfTVMiLCJzdXBwb3J0c0Nzc1ZhcmlhYmxlc18iLCJzdXBwb3J0c1Bhc3NpdmVfIiwiZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1ZyIsIndpbmRvd09iaiIsIm5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImhhc1BzZXVkb1ZhckJ1ZyIsImJvcmRlclRvcFN0eWxlIiwic3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJmb3JjZVJlZnJlc2giLCJzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCIsIkNTUyIsInN1cHBvcnRzIiwiZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyIsIndlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyIsImFwcGx5UGFzc2l2ZSIsImdsb2JhbE9iaiIsImlzU3VwcG9ydGVkIiwicGFzc2l2ZSIsImUiLCJnZXRNYXRjaGVzUHJvcGVydHkiLCJIVE1MRWxlbWVudFByb3RvdHlwZSIsIm1hdGNoZXNNZXRob2RzIiwibWV0aG9kIiwiaSIsIm1hdGNoZXNNZXRob2QiLCJnZXROb3JtYWxpemVkRXZlbnRDb29yZHMiLCJldiIsInBhZ2VPZmZzZXQiLCJjbGllbnRSZWN0IiwieCIsInkiLCJkb2N1bWVudFgiLCJsZWZ0IiwiZG9jdW1lbnRZIiwidG9wIiwibm9ybWFsaXplZFkiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTIiwiUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMiLCJhY3RpdmF0ZWRUYXJnZXRzIiwiTURDUmlwcGxlRm91bmRhdGlvbiIsImJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMiLCJpc1VuYm91bmRlZCIsImlzU3VyZmFjZUFjdGl2ZSIsImlzU3VyZmFjZURpc2FibGVkIiwiY29udGFpbnNFdmVudFRhcmdldCIsInJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJkZXJlZ2lzdGVyUmVzaXplSGFuZGxlciIsInVwZGF0ZUNzc1ZhcmlhYmxlIiwiY29tcHV0ZUJvdW5kaW5nUmVjdCIsImdldFdpbmRvd1BhZ2VPZmZzZXQiLCJsYXlvdXRGcmFtZV8iLCJmcmFtZV8iLCJ3aWR0aCIsImhlaWdodCIsImFjdGl2YXRpb25TdGF0ZV8iLCJkZWZhdWx0QWN0aXZhdGlvblN0YXRlXyIsImluaXRpYWxTaXplXyIsIm1heFJhZGl1c18iLCJhY3RpdmF0ZUhhbmRsZXJfIiwiYWN0aXZhdGVfIiwiZGVhY3RpdmF0ZUhhbmRsZXJfIiwiZGVhY3RpdmF0ZV8iLCJmb2N1c0hhbmRsZXJfIiwiaGFuZGxlRm9jdXMiLCJibHVySGFuZGxlcl8iLCJoYW5kbGVCbHVyIiwicmVzaXplSGFuZGxlcl8iLCJsYXlvdXQiLCJ1bmJvdW5kZWRDb29yZHNfIiwiZmdTY2FsZV8iLCJhY3RpdmF0aW9uVGltZXJfIiwiZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfIiwiYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyIsImFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyIsInJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XyIsInByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyIsImlzQWN0aXZhdGVkIiwiaGFzRGVhY3RpdmF0aW9uVVhSdW4iLCJ3YXNBY3RpdmF0ZWRCeVBvaW50ZXIiLCJ3YXNFbGVtZW50TWFkZUFjdGl2ZSIsImFjdGl2YXRpb25FdmVudCIsImlzUHJvZ3JhbW1hdGljIiwic3VwcG9ydHNQcmVzc1JpcHBsZSIsInN1cHBvcnRzUHJlc3NSaXBwbGVfIiwicmVnaXN0ZXJSb290SGFuZGxlcnNfIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibGF5b3V0SW50ZXJuYWxfIiwiY2xlYXJUaW1lb3V0IiwicmVtb3ZlQ3NzVmFyc18iLCJkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXyIsImRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18iLCJPYmplY3QiLCJrZXlzIiwiayIsImluZGV4T2YiLCJhY3RpdmF0aW9uU3RhdGUiLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudCIsImlzU2FtZUludGVyYWN0aW9uIiwiaGFzQWN0aXZhdGVkQ2hpbGQiLCJzb21lIiwicmVzZXRBY3RpdmF0aW9uU3RhdGVfIiwicHVzaCIsInJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfIiwiY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8iLCJhbmltYXRlQWN0aXZhdGlvbl8iLCJ0cmFuc2xhdGVTdGFydCIsInRyYW5zbGF0ZUVuZCIsImdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18iLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18iLCJzZXRUaW1lb3V0IiwiYWN0aXZhdGlvbkhhc0VuZGVkIiwic3RhdGUiLCJhbmltYXRlRGVhY3RpdmF0aW9uXyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibWF4RGltIiwibWF4IiwiZ2V0Qm91bmRlZFJhZGl1cyIsImh5cG90ZW51c2UiLCJzcXJ0IiwicG93IiwidXBkYXRlTGF5b3V0Q3NzVmFyc18iLCJyb3VuZCIsInVuYm91bmRlZCIsIk1EQ1JpcHBsZSIsInVuYm91bmRlZF8iLCJzZXRVbmJvdW5kZWQiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJjcmVhdGVBZGFwdGVyIiwiZGF0YXNldCIsIkJvb2xlYW4iLCJzZXRVbmJvdW5kZWRfIiwicmlwcGxlIiwiaW5zdGFuY2UiLCJNQVRDSEVTIiwidXRpbCIsIkhUTUxFbGVtZW50IiwicHJvdG90eXBlIiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJSaXBwbGVDYXBhYmxlU3VyZmFjZSIsIlJpcHBsZUJhc2UiLCJyZWYiLCJfbWF0Y2hlcyIsIm9wdGlvbnMiLCIkZWwiLCIkc2V0IiwiY2xhc3NlcyIsIiRkZWxldGUiLCJzdHlsZXMiLCJSaXBwbGVNaXhpbiIsIm1vdW50ZWQiLCJiZWZvcmVEZXN0cm95Iiwibm9ybWFsaXplQ29tcG9uZW50IiwiY29tcGlsZWRUZW1wbGF0ZSIsImluamVjdFN0eWxlIiwiZGVmYXVsdEV4cG9ydCIsInNjb3BlSWQiLCJpc0Z1bmN0aW9uYWxUZW1wbGF0ZSIsIm1vZHVsZUlkZW50aWZpZXIiLCJpc1NoYWRvd01vZGUiLCJjcmVhdGVJbmplY3RvciIsImNyZWF0ZUluamVjdG9yU1NSIiwiY3JlYXRlSW5qZWN0b3JTaGFkb3ciLCJzdGF0aWNSZW5kZXJGbnMiLCJfY29tcGlsZWQiLCJfc2NvcGVJZCIsImhvb2siLCIkdm5vZGUiLCJzc3JDb250ZXh0IiwicGFyZW50IiwiX19WVUVfU1NSX0NPTlRFWFRfXyIsImNhbGwiLCJfcmVnaXN0ZXJlZENvbXBvbmVudHMiLCJfc3NyUmVnaXN0ZXIiLCIkcm9vdCIsIiRvcHRpb25zIiwic2hhZG93Um9vdCIsIm9yaWdpbmFsUmVuZGVyIiwicmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIiwiaCIsImV4aXN0aW5nIiwiYmVmb3JlQ3JlYXRlIiwiY29uY2F0Iiwic2NyaXB0IiwibWRjU2VsZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0VBQU8sU0FBU0EsUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEI7RUFDL0I7RUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7RUFDQSxNQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7RUFDakNELElBQUFBLElBQUksR0FBR0MsTUFBTSxDQUFDQyxHQUFkO0VBQ0QsR0FGRCxNQUVPLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztFQUN4QztFQUNBSCxJQUFBQSxJQUFJLEdBQUdHLE1BQU0sQ0FBQ0QsR0FBZDtFQUNEOztFQUNELE1BQUlGLElBQUosRUFBVTtFQUNSQSxJQUFBQSxJQUFJLENBQUNJLEdBQUwsQ0FBU0wsTUFBVDtFQUNEO0VBQ0Y7O0VDWk0sU0FBU00sVUFBVCxDQUFvQkMsVUFBcEIsRUFBZ0M7RUFDckMsU0FBTztFQUNMQyxJQUFBQSxPQUFPLEVBQUUsYUFESjtFQUVMQyxJQUFBQSxPQUFPLEVBQUUsaUJBQUFDLEVBQUUsRUFBSTtFQUNiLFdBQUssSUFBSUMsR0FBVCxJQUFnQkosVUFBaEIsRUFBNEI7RUFDMUIsWUFBSUssU0FBUyxHQUFHTCxVQUFVLENBQUNJLEdBQUQsQ0FBMUI7RUFDQUQsUUFBQUEsRUFBRSxDQUFDRSxTQUFILENBQWFBLFNBQVMsQ0FBQ0MsSUFBdkIsRUFB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
