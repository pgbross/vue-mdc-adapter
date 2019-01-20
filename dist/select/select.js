/**
* @module vue-mdc-adapterselect 0.19.2-beta
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

  //
  var script$1 = {
    name: 'select-helper-text',
    props: {
      helptextPersistent: Boolean,
      helptextValidation: Boolean
    },
    data: function data() {
      return {
        classes: {
          'mdc-select-helper-text': true,
          'mdc-select-helper-text--persistent': this.helptextPersistent,
          'mdc-select-helper-text--validation-msg': this.helptextValidation
        }
      };
    },
    watch: {
      helptextPersistent: function helptextPersistent() {
        this.foundation.setPersistent(this.helptextPersistent);
      },
      helptextValidation: function helptextValidation() {
        this.foundation.setValidation(this.helptextValidation);
      }
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCSelectHelperTextFoundation({
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

  /* script */
  const __vue_script__$1 = script$1;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$1.__file = "/ddata/extra/vma/components/select/select-helper-text.vue";

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "p",
      { ref: "helptextEl", class: _vm.classes, attrs: { "aria-hidden": "true" } },
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
    /* style inject */
    
    /* style inject SSR */
    

    
    var SelectHelperText = normalizeComponent(
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
    name: 'select-icon',
    props: {
      icon: String
    },
    data: function data() {
      return {
        classes: {
          'material-icons': true,
          'mdc-select__icon': true
        },
        styles: {}
      };
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCSelectIconFoundation(_extends({
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

          emitCustomEvent(_this.$el, MDCSelectIconFoundation.strings.ICON_EVENT, {}, true
          /* shouldBubble  */
          );
        }
      }));
      this.foundation.init();
    },
    beforeDestroy: function beforeDestroy() {
      this.foundation.destroy();
    }
  };

  /* script */
  const __vue_script__$2 = script$2;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$2.__file = "/ddata/extra/vma/components/select/select-icon.vue";

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "i",
      _vm._g(
        _vm._b({ class: _vm.classes, style: _vm.styles }, "i", _vm.$attrs, false),
        _vm.$listeners
      ),
      [_vm._v("\n  " + _vm._s(_vm.icon) + "\n")]
    )
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
    

    
    var SelectIcon = normalizeComponent(
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
    inheritAttrs: false,
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: String,
      helptext: String,
      leadingIcon: String,
      icon: String,
      helptextPersistent: Boolean,
      helptextValidation: Boolean,
      disabled: Boolean,
      label: String,
      outlined: Boolean,
      id: {
        type: String
      }
    },
    mixins: [VMAUniqueIdMixin],
    data: function data() {
      return {
        styles: {},
        classes: {}
      };
    },
    components: {
      SelectHelperText: SelectHelperText,
      SelectIcon: SelectIcon
    },
    computed: {
      rootClasses: function rootClasses() {
        return _objectSpread({
          'mdc-select': true,
          'mdc-select--outlined': this.outlined,
          'mdc-select--with-leading-icon': this.leadingIcon
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
      },
      selectAriaControls: function selectAriaControls() {
        return this.helptext ? 'help-' + this.vma_uid_ : undefined;
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

      this.foundation = new MDCSelectFoundation(_extends({
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
          emitCustomEvent(_this2.$refs.root, MDCSelectFoundation.strings.CHANGE_EVENT, {
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
      }), {
        helperText: this.$refs.helpertextEl ? this.$refs.helpertextEl.foundation : void 0,
        leadingIcon: this.$refs.leadingIconEl ? this.$refs.leadingIconEl.foundation : undefined
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
      [
        _c(
          "div",
          {
            ref: "root",
            class: _vm.rootClasses,
            style: _vm.styles,
            attrs: { id: _vm.id }
          },
          [
            _vm.leadingIcon
              ? _c("select-icon", {
                  ref: "leadingIconEl",
                  attrs: {
                    icon: _vm.leadingIcon,
                    "tab-index": "0",
                    role: "button"
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("i", { staticClass: "mdc-select__dropdown-icon" }),
            _vm._v(" "),
            _c(
              "select",
              _vm._g(
                _vm._b(
                  {
                    ref: "native_control",
                    staticClass: "mdc-select__native-control",
                    attrs: {
                      disabled: _vm.disabled,
                      "aria-controls": _vm.selectAriaControls
                    }
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
            !_vm.outlined
              ? _c("mdc-line-ripple", { ref: "lineRippleEl" })
              : _vm._e(),
            _vm._v(" "),
            _vm.outlined
              ? _c("mdc-notched-outline", { ref: "outlineEl" }, [
                  _vm._v(_vm._s(_vm.label))
                ])
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _vm.helptext
          ? _c(
              "select-helper-text",
              {
                ref: "helpertextEl",
                attrs: {
                  helptextPersistent: _vm.helptextPersistent,
                  helptextValidation: _vm.helptextValidation,
                  id: "help-" + _vm.vma_uid_
                }
              },
              [_vm._v("\n    " + _vm._s(_vm.helptext) + "\n  ")]
            )
          : _vm._e()
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

  var plugin = BasePlugin({
    mdcSelect: mdcSelect
  });

  autoInit(plugin);

  return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXV0by1pbml0LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Jhc2UtcGx1Z2luLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1lbGVtZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1ldmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS91bmlxdWVpZC1taXhpbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L2ljb24vYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L2ljb24vY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3QvaWNvbi9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3QvaWNvbi9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L2hlbHBlci10ZXh0L2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9oZWxwZXItdGV4dC9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9oZWxwZXItdGV4dC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3QvaGVscGVyLXRleHQvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3QvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3QvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS91dGlsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS1iYXNlLmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXJ1bnRpbWUtaGVscGVycy9ub3JtYWxpemUtY29tcG9uZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LWhlbHBlci10ZXh0LnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC1pY29uLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvc2VsZWN0L21kYy1zZWxlY3QudnVlIiwiLi4vLi4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3NlbGVjdC9lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXV0b0luaXQocGx1Z2luKSB7XG4gIC8vIEF1dG8taW5zdGFsbFxuICBsZXQgX1Z1ZSA9IG51bGxcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgX1Z1ZSA9IHdpbmRvdy5WdWVcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8qZ2xvYmFsIGdsb2JhbCovXG4gICAgX1Z1ZSA9IGdsb2JhbC5WdWVcbiAgfVxuICBpZiAoX1Z1ZSkge1xuICAgIF9WdWUudXNlKHBsdWdpbilcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIEJhc2VQbHVnaW4oY29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICdfX1ZFUlNJT05fXycsXG4gICAgaW5zdGFsbDogdm0gPT4ge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNba2V5XVxuICAgICAgICB2bS5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHNcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEN1c3RvbUVsZW1lbnQgPSB7XG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHJlbmRlcihjcmVhdGVFbGVtZW50LCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBjb250ZXh0LnByb3BzLmlzIHx8IGNvbnRleHQucHJvcHMudGFnIHx8ICdkaXYnLFxuICAgICAgY29udGV4dC5kYXRhLFxuICAgICAgY29udGV4dC5jaGlsZHJlblxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudE1peGluID0ge1xuICBjb21wb25lbnRzOiB7XG4gICAgQ3VzdG9tRWxlbWVudFxuICB9XG59XG4iLCIvKiBnbG9iYWwgQ3VzdG9tRXZlbnQgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXRDdXN0b21FdmVudChlbCwgZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgbGV0IGV2dFxuICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpXG4gIH1cbiAgZWwuZGlzcGF0Y2hFdmVudChldnQpXG59XG4iLCJjb25zdCBzY29wZSA9XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMHgxMDAwMDAwMCkpLnRvU3RyaW5nKCkgKyAnLSdcblxuZXhwb3J0IGNvbnN0IFZNQVVuaXF1ZUlkTWl4aW4gPSB7XG4gIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICB0aGlzLnZtYV91aWRfID0gc2NvcGUgKyB0aGlzLl91aWRcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIEFcbiAqL1xuY2xhc3MgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW17Y3NzQ2xhc3Nlc30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte3N0cmluZ3N9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte251bWJlcnN9ICovXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFPYmplY3R9ICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgIC8vIHZhbGlkYXRpb24uXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7QT19IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIgPSB7fSkge1xuICAgIC8qKiBAcHJvdGVjdGVkIHshQX0gKi9cbiAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBGXG4gKi9cbmNsYXNzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENDb21wb25lbnR9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7Rj19IGZvdW5kYXRpb25cbiAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb290LCBmb3VuZGF0aW9uID0gdW5kZWZpbmVkLCAuLi5hcmdzKSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuICAgIHRoaXMucm9vdF8gPSByb290O1xuICAgIHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcbiAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgLy8gdGhpcy5yb290XyBpcyBkZWZpbmVkIGFuZCBjYW4gYmUgdXNlZCB3aXRoaW4gdGhlIGZvdW5kYXRpb24gY2xhc3MuXG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFGfSAqL1xuICAgIHRoaXMuZm91bmRhdGlvbl8gPSBmb3VuZGF0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmdldERlZmF1bHRGb3VuZGF0aW9uKCkgOiBmb3VuZGF0aW9uO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gIH1cblxuICBpbml0aWFsaXplKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshRn0gZm91bmRhdGlvblxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgLy8gY29tcG9uZW50LlxuICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogbGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgbGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gcmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiB1bmxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLFxuICAgKiB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFPYmplY3R9IGV2dERhdGFcbiAgICogQHBhcmFtIHtib29sZWFuPX0gc2hvdWxkQnViYmxlXG4gICAqL1xuICBlbWl0KGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gICAgbGV0IGV2dDtcbiAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5yb290Xy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBTZWxlY3QgSWNvbi5cbiAqXG4gKiBEZWZpbmVzIHRoZSBzaGFwZSBvZiB0aGUgYWRhcHRlciBleHBlY3RlZCBieSB0aGUgZm91bmRhdGlvbi4gSW1wbGVtZW50IHRoaXNcbiAqIGFkYXB0ZXIgdG8gaW50ZWdyYXRlIHRoZSBzZWxlY3QgaWNvbiBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDU2VsZWN0SWNvbkFkYXB0ZXIge1xuICAvKipcbiAgICogR2V0cyB0aGUgdmFsdWUgb2YgYW4gYXR0cmlidXRlIG9uIHRoZSBpY29uIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldEF0dHIoYXR0cikge31cblxuICAvKipcbiAgICogU2V0cyBhbiBhdHRyaWJ1dGUgb24gdGhlIGljb24gZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXRBdHRyKGF0dHIsIHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGF0dHJpYnV0ZSBmcm9tIHRoZSBpY29uIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyXG4gICAqL1xuICByZW1vdmVBdHRyKGF0dHIpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgaWNvbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICAgKi9cbiAgc2V0Q29udGVudChjb250ZW50KSB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIGljb24gZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBpY29uIGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGEgY3VzdG9tIGV2ZW50IFwiTURDU2VsZWN0Omljb25cIiBkZW5vdGluZyBhIHVzZXIgaGFzIGNsaWNrZWQgdGhlIGljb24uXG4gICAqL1xuICBub3RpZnlJY29uQWN0aW9uKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDU2VsZWN0SWNvbkFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBzdHJpbmdzID0ge1xuICBJQ09OX0VWRU5UOiAnTURDU2VsZWN0Omljb24nLFxuICBJQ09OX1JPTEU6ICdidXR0b24nLFxufTtcblxuZXhwb3J0IHtzdHJpbmdzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENTZWxlY3RJY29uQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtzdHJpbmdzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDU2VsZWN0SWNvbkFkYXB0ZXI+fVxuICogQGZpbmFsXG4gKi9cbmNsYXNzIE1EQ1NlbGVjdEljb25Gb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAc2VlIE1EQ1NlbGVjdEljb25BZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ1NlbGVjdEljb25BZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDU2VsZWN0SWNvbkFkYXB0ZXJ9ICovICh7XG4gICAgICBnZXRBdHRyOiAoKSA9PiB7fSxcbiAgICAgIHNldEF0dHI6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQXR0cjogKCkgPT4ge30sXG4gICAgICBzZXRDb250ZW50OiAoKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgpID0+IHt9LFxuICAgICAgbm90aWZ5SWNvbkFjdGlvbjogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDU2VsZWN0SWNvbkFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1NlbGVjdEljb25Gb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge3N0cmluZz99ICovXG4gICAgdGhpcy5zYXZlZFRhYkluZGV4XyA9IG51bGw7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLmludGVyYWN0aW9uSGFuZGxlcl8gPSAoZXZ0KSA9PiB0aGlzLmhhbmRsZUludGVyYWN0aW9uKGV2dCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc2F2ZWRUYWJJbmRleF8gPSB0aGlzLmFkYXB0ZXJfLmdldEF0dHIoJ3RhYmluZGV4Jyk7XG5cbiAgICBbJ2NsaWNrJywgJ2tleWRvd24nXS5mb3JFYWNoKChldnRUeXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIHRoaXMuaW50ZXJhY3Rpb25IYW5kbGVyXyk7XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIFsnY2xpY2snLCAna2V5ZG93biddLmZvckVhY2goKGV2dFR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCB0aGlzLmludGVyYWN0aW9uSGFuZGxlcl8pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzYWJsZWQgKi9cbiAgc2V0RGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICBpZiAoIXRoaXMuc2F2ZWRUYWJJbmRleF8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQXR0cigncm9sZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoJ3RhYmluZGV4JywgdGhpcy5zYXZlZFRhYkluZGV4Xyk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoJ3JvbGUnLCBzdHJpbmdzLklDT05fUk9MRSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCAqL1xuICBzZXRBcmlhTGFiZWwobGFiZWwpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgKi9cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYW4gaW50ZXJhY3Rpb24gZXZlbnRcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KSB7XG4gICAgaWYgKGV2dC50eXBlID09PSAnY2xpY2snIHx8IGV2dC5rZXkgPT09ICdFbnRlcicgfHwgZXZ0LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUljb25BY3Rpb24oKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDU2VsZWN0SWNvbkZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuXG5pbXBvcnQgTURDU2VsZWN0SWNvbkFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCBNRENTZWxlY3RJY29uRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENDb21wb25lbnQ8IU1EQ1NlbGVjdEljb25Gb3VuZGF0aW9uPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENTZWxlY3RJY29uIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ1NlbGVjdEljb259XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIHJldHVybiBuZXcgTURDU2VsZWN0SWNvbihyb290KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDU2VsZWN0SWNvbkZvdW5kYXRpb259XG4gICAqL1xuICBnZXQgZm91bmRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDU2VsZWN0SWNvbkZvdW5kYXRpb259XG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1NlbGVjdEljb25Gb3VuZGF0aW9uKC8qKiBAdHlwZSB7IU1EQ1NlbGVjdEljb25BZGFwdGVyfSAqLyAoT2JqZWN0LmFzc2lnbih7XG4gICAgICBnZXRBdHRyOiAoYXR0cikgPT4gdGhpcy5yb290Xy5nZXRBdHRyaWJ1dGUoYXR0ciksXG4gICAgICBzZXRBdHRyOiAoYXR0ciwgdmFsdWUpID0+IHRoaXMucm9vdF8uc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKSxcbiAgICAgIHJlbW92ZUF0dHI6IChhdHRyKSA9PiB0aGlzLnJvb3RfLnJlbW92ZUF0dHJpYnV0ZShhdHRyKSxcbiAgICAgIHNldENvbnRlbnQ6IChjb250ZW50KSA9PiB7XG4gICAgICAgIHRoaXMucm9vdF8udGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4gdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKSxcbiAgICAgIG5vdGlmeUljb25BY3Rpb246ICgpID0+IHRoaXMuZW1pdChcbiAgICAgICAgTURDU2VsZWN0SWNvbkZvdW5kYXRpb24uc3RyaW5ncy5JQ09OX0VWRU5ULCB7fSAvKiBldnREYXRhICovLCB0cnVlIC8qIHNob3VsZEJ1YmJsZSAqLyksXG4gICAgfSkpKTtcbiAgfVxufVxuXG5leHBvcnQge01EQ1NlbGVjdEljb24sIE1EQ1NlbGVjdEljb25Gb3VuZGF0aW9ufTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgU2VsZWN0IEhlbHBlciBUZXh0LlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIFNlbGVjdCBoZWxwZXIgdGV4dCBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDU2VsZWN0SGVscGVyVGV4dEFkYXB0ZXIge1xuICAvKipcbiAgICogQWRkcyBhIGNsYXNzIHRvIHRoZSBoZWxwZXIgdGV4dCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjbGFzcyBmcm9tIHRoZSBoZWxwZXIgdGV4dCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGhlbHBlciB0ZXh0IGVsZW1lbnQgY29udGFpbnMgdGhlIGdpdmVuIGNsYXNzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgYW4gYXR0cmlidXRlIHdpdGggYSBnaXZlbiB2YWx1ZSBvbiB0aGUgaGVscGVyIHRleHQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXRBdHRyKGF0dHIsIHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuIGF0dHJpYnV0ZSBmcm9tIHRoZSBoZWxwZXIgdGV4dCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKi9cbiAgcmVtb3ZlQXR0cihhdHRyKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZXh0IGNvbnRlbnQgZm9yIHRoZSBoZWxwZXIgdGV4dCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICAgKi9cbiAgc2V0Q29udGVudChjb250ZW50KSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENTZWxlY3RIZWxwZXJUZXh0QWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIEFSSUFfSElEREVOOiAnYXJpYS1oaWRkZW4nLFxuICBST0xFOiAncm9sZScsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIEhFTFBFUl9URVhUX1BFUlNJU1RFTlQ6ICdtZGMtc2VsZWN0LWhlbHBlci10ZXh0LS1wZXJzaXN0ZW50JyxcbiAgSEVMUEVSX1RFWFRfVkFMSURBVElPTl9NU0c6ICdtZGMtc2VsZWN0LWhlbHBlci10ZXh0LS12YWxpZGF0aW9uLW1zZycsXG59O1xuXG5leHBvcnQge3N0cmluZ3MsIGNzc0NsYXNzZXN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1NlbGVjdEhlbHBlclRleHRBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcblxuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENTZWxlY3RIZWxwZXJUZXh0QWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDU2VsZWN0SGVscGVyVGV4dEZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QHNlZSBNRENTZWxlY3RIZWxwZXJUZXh0QWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5cbiAgICogdHlwZXMuXG4gICAqIEByZXR1cm4geyFNRENTZWxlY3RIZWxwZXJUZXh0QWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1NlbGVjdEhlbHBlclRleHRBZGFwdGVyfSAqLyAoe1xuICAgICAgYWRkQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgaGFzQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgc2V0QXR0cjogKCkgPT4ge30sXG4gICAgICByZW1vdmVBdHRyOiAoKSA9PiB7fSxcbiAgICAgIHNldENvbnRlbnQ6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ1NlbGVjdEhlbHBlclRleHRBZGFwdGVyfSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENTZWxlY3RIZWxwZXJUZXh0Rm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNvbnRlbnQgb2YgdGhlIGhlbHBlciB0ZXh0IGZpZWxkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICAgKi9cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gaXNQZXJzaXN0ZW50IFNldHMgdGhlIHBlcnNpc3RlbmN5IG9mIHRoZSBoZWxwZXIgdGV4dC4gKi9cbiAgc2V0UGVyc2lzdGVudChpc1BlcnNpc3RlbnQpIHtcbiAgICBpZiAoaXNQZXJzaXN0ZW50KSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfUEVSU0lTVEVOVCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9QRVJTSVNURU5UKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSBpc1ZhbGlkYXRpb24gVHJ1ZSB0byBtYWtlIHRoZSBoZWxwZXIgdGV4dCBhY3QgYXMgYW5cbiAgICogICBlcnJvciB2YWxpZGF0aW9uIG1lc3NhZ2UuXG4gICAqL1xuICBzZXRWYWxpZGF0aW9uKGlzVmFsaWRhdGlvbikge1xuICAgIGlmIChpc1ZhbGlkYXRpb24pIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9WQUxJREFUSU9OX01TRyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9WQUxJREFUSU9OX01TRyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIE1ha2VzIHRoZSBoZWxwZXIgdGV4dCB2aXNpYmxlIHRvIHRoZSBzY3JlZW4gcmVhZGVyLiAqL1xuICBzaG93VG9TY3JlZW5SZWFkZXIoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVBdHRyKHN0cmluZ3MuQVJJQV9ISURERU4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHZhbGlkaXR5IG9mIHRoZSBoZWxwZXIgdGV4dCBiYXNlZCBvbiB0aGUgc2VsZWN0IHZhbGlkaXR5LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdElzVmFsaWRcbiAgICovXG4gIHNldFZhbGlkaXR5KHNlbGVjdElzVmFsaWQpIHtcbiAgICBjb25zdCBoZWxwZXJUZXh0SXNQZXJzaXN0ZW50ID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1BFUlNJU1RFTlQpO1xuICAgIGNvbnN0IGhlbHBlclRleHRJc1ZhbGlkYXRpb25Nc2cgPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfVkFMSURBVElPTl9NU0cpO1xuICAgIGNvbnN0IHZhbGlkYXRpb25Nc2dOZWVkc0Rpc3BsYXkgPSBoZWxwZXJUZXh0SXNWYWxpZGF0aW9uTXNnICYmICFzZWxlY3RJc1ZhbGlkO1xuXG4gICAgaWYgKHZhbGlkYXRpb25Nc2dOZWVkc0Rpc3BsYXkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihzdHJpbmdzLlJPTEUsICdhbGVydCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHIoc3RyaW5ncy5ST0xFKTtcbiAgICB9XG5cbiAgICBpZiAoIWhlbHBlclRleHRJc1BlcnNpc3RlbnQgJiYgIXZhbGlkYXRpb25Nc2dOZWVkc0Rpc3BsYXkpIHtcbiAgICAgIHRoaXMuaGlkZV8oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgdGhlIGhlbHAgdGV4dCBmcm9tIHNjcmVlbiByZWFkZXJzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGlkZV8oKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKHN0cmluZ3MuQVJJQV9ISURERU4sICd0cnVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDU2VsZWN0SGVscGVyVGV4dEZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuXG5pbXBvcnQgTURDU2VsZWN0SGVscGVyVGV4dEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCBNRENTZWxlY3RIZWxwZXJUZXh0Rm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENDb21wb25lbnQ8IU1EQ1NlbGVjdEhlbHBlclRleHRGb3VuZGF0aW9uPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENTZWxlY3RIZWxwZXJUZXh0IGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ1NlbGVjdEhlbHBlclRleHR9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIHJldHVybiBuZXcgTURDU2VsZWN0SGVscGVyVGV4dChyb290KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDU2VsZWN0SGVscGVyVGV4dEZvdW5kYXRpb259XG4gICAqL1xuICBnZXQgZm91bmRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDU2VsZWN0SGVscGVyVGV4dEZvdW5kYXRpb259XG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1NlbGVjdEhlbHBlclRleHRGb3VuZGF0aW9uKC8qKiBAdHlwZSB7IU1EQ1NlbGVjdEhlbHBlclRleHRBZGFwdGVyfSAqLyAoT2JqZWN0LmFzc2lnbih7XG4gICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBoYXNDbGFzczogKGNsYXNzTmFtZSkgPT4gdGhpcy5yb290Xy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcbiAgICAgIHNldEF0dHI6IChhdHRyLCB2YWx1ZSkgPT4gdGhpcy5yb290Xy5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpLFxuICAgICAgcmVtb3ZlQXR0cjogKGF0dHIpID0+IHRoaXMucm9vdF8ucmVtb3ZlQXR0cmlidXRlKGF0dHIpLFxuICAgICAgc2V0Q29udGVudDogKGNvbnRlbnQpID0+IHtcbiAgICAgICAgdGhpcy5yb290Xy50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICB9LFxuICAgIH0pKSk7XG4gIH1cbn1cblxuZXhwb3J0IHtNRENTZWxlY3RIZWxwZXJUZXh0LCBNRENTZWxlY3RIZWxwZXJUZXh0Rm91bmRhdGlvbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHtNRENTZWxlY3RJY29uRm91bmRhdGlvbn0gZnJvbSAnLi9pY29uL2luZGV4JztcbmltcG9ydCB7TURDU2VsZWN0SGVscGVyVGV4dEZvdW5kYXRpb259IGZyb20gJy4vaGVscGVyLXRleHQvaW5kZXgnO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGxlYWRpbmdJY29uOiAoIU1EQ1NlbGVjdEljb25Gb3VuZGF0aW9ufHVuZGVmaW5lZCksXG4gKiAgIGhlbHBlclRleHQ6ICghTURDU2VsZWN0SGVscGVyVGV4dEZvdW5kYXRpb258dW5kZWZpbmVkKSxcbiAqIH19XG4gKi9cbmxldCBGb3VuZGF0aW9uTWFwVHlwZTtcblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgU2VsZWN0LiBQcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIG1hbmFnaW5nXG4gKiAtIGNsYXNzZXNcbiAqIC0gZG9tXG4gKiAtIGV2ZW50IGhhbmRsZXJzXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5cbmNsYXNzIE1EQ1NlbGVjdEFkYXB0ZXIge1xuICAvKipcbiAgICogQWRkcyBjbGFzcyB0byByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGNsYXNzIGZyb20gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHJvb3QgZWxlbWVudCBjb250YWlucyB0aGUgZ2l2ZW4gY2xhc3MgbmFtZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGJvdHRvbSBsaW5lLCBzaG93aW5nIGEgZm9jdXNlZCBzdGF0ZS5cbiAgICovXG4gIGFjdGl2YXRlQm90dG9tTGluZSgpIHt9XG5cbiAgLyoqXG4gICAqIERlYWN0aXZhdGVzIHRoZSBib3R0b20gbGluZS5cbiAgICovXG4gIGRlYWN0aXZhdGVCb3R0b21MaW5lKCkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHNlbGVjdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZSh2YWx1ZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2VsZWN0ZWQgdmFsdWUgb2YgdGhlIHNlbGVjdCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXRWYWx1ZSgpIHt9XG5cbiAgLyoqXG4gICAqIEZsb2F0cyBsYWJlbCBkZXRlcm1pbmVkIGJhc2VkIG9mZiBvZiB0aGUgc2hvdWxkRmxvYXQgYXJndW1lbnQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkRmxvYXRcbiAgICovXG4gIGZsb2F0TGFiZWwoc2hvdWxkRmxvYXQpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2lkdGggb2YgbGFiZWwgaW4gcGl4ZWxzLCBpZiB0aGUgbGFiZWwgZXhpc3RzLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRMYWJlbFdpZHRoKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIG91dGxpbmUgZWxlbWVudCBleGlzdHMsIGZhbHNlIGlmIGl0IGRvZXNuJ3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNPdXRsaW5lKCkge31cblxuICAvKipcbiAgICogT25seSBpbXBsZW1lbnQgaWYgb3V0bGluZSBlbGVtZW50IGV4aXN0cy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxhYmVsV2lkdGhcbiAgICovXG4gIG5vdGNoT3V0bGluZShsYWJlbFdpZHRoKSB7fVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgbm90Y2ggaW4gb3V0bGluZSBlbGVtZW50LCBpZiB0aGUgb3V0bGluZSBleGlzdHMuXG4gICAqL1xuICBjbG9zZU91dGxpbmUoKSB7fVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgbWVudS5cbiAgICovXG4gIG9wZW5NZW51KCkge31cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBtZW51LlxuICAgKi9cbiAgY2xvc2VNZW51KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBtZW51IGlzIGN1cnJlbnRseSBvcGVuLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNNZW51T3BlbigpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNlbGVjdGVkIGluZGV4IG9mIHRoZSBzZWxlY3QgdG8gdGhlIGluZGV4IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICovXG4gIHNldFNlbGVjdGVkSW5kZXgoaW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNlbGVjdCB0byBkaXNhYmxlZC5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc0Rpc2FibGVkXG4gICAqL1xuICBzZXREaXNhYmxlZChpc0Rpc2FibGVkKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBsaW5lIHJpcHBsZSB0cmFuc2Zvcm0gb3JpZ2luIGNlbnRlci5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG5vcm1hbGl6ZWRYXG4gICAqL1xuICBzZXRSaXBwbGVDZW50ZXIobm9ybWFsaXplZFgpIHt9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGEgY2hhbmdlIGV2ZW50IHdoZW4gYW4gZWxlbWVudCBpcyBzZWxlY3RlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBub3RpZnlDaGFuZ2UodmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgc2VsZWN0IGlzIGN1cnJlbnRseSB2YWxpZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gaXNWYWxpZFxuICAgKi9cbiAgY2hlY2tWYWxpZGl0eSgpIHt9XG5cbiAgLyoqXG4gICAqIEFkZHMvUmVtb3ZlcyB0aGUgaW52YWxpZCBjbGFzcy5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc1ZhbGlkXG4gICAqL1xuICBzZXRWYWxpZChpc1ZhbGlkKSB7fVxufVxuXG5leHBvcnQge01EQ1NlbGVjdEFkYXB0ZXIsIEZvdW5kYXRpb25NYXBUeXBlfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIERJU0FCTEVEOiAnbWRjLXNlbGVjdC0tZGlzYWJsZWQnLFxuICBST09UOiAnbWRjLXNlbGVjdCcsXG4gIE9VVExJTkVEOiAnbWRjLXNlbGVjdC0tb3V0bGluZWQnLFxuICBGT0NVU0VEOiAnbWRjLXNlbGVjdC0tZm9jdXNlZCcsXG4gIFNFTEVDVEVEX0lURU1fQ0xBU1M6ICdtZGMtbGlzdC1pdGVtLS1zZWxlY3RlZCcsXG4gIFdJVEhfTEVBRElOR19JQ09OOiAnbWRjLXNlbGVjdC0td2l0aC1sZWFkaW5nLWljb24nLFxuICBJTlZBTElEOiAnbWRjLXNlbGVjdC0taW52YWxpZCcsXG4gIFJFUVVJUkVEOiAnbWRjLXNlbGVjdC0tcmVxdWlyZWQnLFxufTtcblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBzdHJpbmdzID0ge1xuICBBUklBX0NPTlRST0xTOiAnYXJpYS1jb250cm9scycsXG4gIENIQU5HRV9FVkVOVDogJ01EQ1NlbGVjdDpjaGFuZ2UnLFxuICBTRUxFQ1RFRF9JVEVNX1NFTEVDVE9SOiBgLiR7Y3NzQ2xhc3Nlcy5TRUxFQ1RFRF9JVEVNX0NMQVNTfWAsXG4gIExFQURJTkdfSUNPTl9TRUxFQ1RPUjogJy5tZGMtc2VsZWN0X19pY29uJyxcbiAgU0VMRUNURURfVEVYVF9TRUxFQ1RPUjogJy5tZGMtc2VsZWN0X19zZWxlY3RlZC10ZXh0JyxcbiAgSElEREVOX0lOUFVUX1NFTEVDVE9SOiAnaW5wdXRbdHlwZT1cImhpZGRlblwiXScsXG4gIE1FTlVfU0VMRUNUT1I6ICcubWRjLXNlbGVjdF9fbWVudScsXG4gIExJTkVfUklQUExFX1NFTEVDVE9SOiAnLm1kYy1saW5lLXJpcHBsZScsXG4gIExBQkVMX1NFTEVDVE9SOiAnLm1kYy1mbG9hdGluZy1sYWJlbCcsXG4gIE5BVElWRV9DT05UUk9MX1NFTEVDVE9SOiAnLm1kYy1zZWxlY3RfX25hdGl2ZS1jb250cm9sJyxcbiAgT1VUTElORV9TRUxFQ1RPUjogJy5tZGMtbm90Y2hlZC1vdXRsaW5lJyxcbiAgRU5IQU5DRURfVkFMVUVfQVRUUjogJ2RhdGEtdmFsdWUnLFxuICBBUklBX1NFTEVDVEVEX0FUVFI6ICdhcmlhLXNlbGVjdGVkJyxcbn07XG5cbi8qKiBAZW51bSB7bnVtYmVyfSAqL1xuY29uc3QgbnVtYmVycyA9IHtcbiAgTEFCRUxfU0NBTEU6IDAuNzUsXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7TURDU2VsZWN0QWRhcHRlciwgRm91bmRhdGlvbk1hcFR5cGV9IGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge01EQ1NlbGVjdEljb25Gb3VuZGF0aW9ufSBmcm9tICcuL2ljb24vaW5kZXgnO1xuaW1wb3J0IHtNRENTZWxlY3RIZWxwZXJUZXh0Rm91bmRhdGlvbn0gZnJvbSAnLi9oZWxwZXItdGV4dC9pbmRleCc7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDU2VsZWN0QWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDU2VsZWN0Rm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge251bWJlcn0gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDU2VsZWN0QWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5cbiAgICogdHlwZXMuXG4gICAqIEByZXR1cm4geyFNRENTZWxlY3RBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDU2VsZWN0QWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBoYXNDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiBmYWxzZSxcbiAgICAgIGFjdGl2YXRlQm90dG9tTGluZTogKCkgPT4ge30sXG4gICAgICBkZWFjdGl2YXRlQm90dG9tTGluZTogKCkgPT4ge30sXG4gICAgICBzZXRWYWx1ZTogKCkgPT4ge30sXG4gICAgICBnZXRWYWx1ZTogKCkgPT4ge30sXG4gICAgICBmbG9hdExhYmVsOiAoLyogdmFsdWU6IGJvb2xlYW4gKi8pID0+IHt9LFxuICAgICAgZ2V0TGFiZWxXaWR0aDogKCkgPT4ge30sXG4gICAgICBoYXNPdXRsaW5lOiAoKSA9PiBmYWxzZSxcbiAgICAgIG5vdGNoT3V0bGluZTogKC8qIGxhYmVsV2lkdGg6IG51bWJlciwgKi8pID0+IHt9LFxuICAgICAgY2xvc2VPdXRsaW5lOiAoKSA9PiB7fSxcbiAgICAgIG9wZW5NZW51OiAoKSA9PiB7fSxcbiAgICAgIGNsb3NlTWVudTogKCkgPT4ge30sXG4gICAgICBpc01lbnVPcGVuOiAoKSA9PiB7fSxcbiAgICAgIHNldFNlbGVjdGVkSW5kZXg6ICgpID0+IHt9LFxuICAgICAgc2V0RGlzYWJsZWQ6ICgpID0+IHt9LFxuICAgICAgc2V0UmlwcGxlQ2VudGVyOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeUNoYW5nZTogKCkgPT4ge30sXG4gICAgICBjaGVja1ZhbGlkaXR5OiAoKSA9PiB7fSxcbiAgICAgIHNldFZhbGlkOiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENTZWxlY3RBZGFwdGVyfSBhZGFwdGVyXG4gICAqIEBwYXJhbSB7IUZvdW5kYXRpb25NYXBUeXBlPX0gZm91bmRhdGlvbk1hcCBNYXAgZnJvbSBzdWJjb21wb25lbnQgbmFtZXMgdG8gdGhlaXIgc3ViZm91bmRhdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyLCBmb3VuZGF0aW9uTWFwID0gLyoqIEB0eXBlIHshRm91bmRhdGlvbk1hcFR5cGV9ICovICh7fSkpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1NlbGVjdEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAdHlwZSB7IU1EQ1NlbGVjdEljb25Gb3VuZGF0aW9ufHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLmxlYWRpbmdJY29uXyA9IGZvdW5kYXRpb25NYXAubGVhZGluZ0ljb247XG4gICAgLyoqIEB0eXBlIHshTURDU2VsZWN0SGVscGVyVGV4dEZvdW5kYXRpb258dW5kZWZpbmVkfSAqL1xuICAgIHRoaXMuaGVscGVyVGV4dF8gPSBmb3VuZGF0aW9uTWFwLmhlbHBlclRleHQ7XG4gIH1cblxuICBzZXRTZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgICB0aGlzLmFkYXB0ZXJfLmNsb3NlTWVudSgpO1xuICAgIGNvbnN0IGRpZENoYW5nZSA9IHRydWU7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoZGlkQ2hhbmdlKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgY29uc3QgZGlkQ2hhbmdlID0gdHJ1ZTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZShkaWRDaGFuZ2UpO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIHNldERpc2FibGVkKGlzRGlzYWJsZWQpIHtcbiAgICBpc0Rpc2FibGVkID8gdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkRJU0FCTEVEKSA6IHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5ESVNBQkxFRCk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXREaXNhYmxlZChpc0Rpc2FibGVkKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmNsb3NlTWVudSgpO1xuXG4gICAgaWYgKHRoaXMubGVhZGluZ0ljb25fKSB7XG4gICAgICB0aGlzLmxlYWRpbmdJY29uXy5zZXREaXNhYmxlZChpc0Rpc2FibGVkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgU2V0cyB0aGUgY29udGVudCBvZiB0aGUgaGVscGVyIHRleHQuXG4gICAqL1xuICBzZXRIZWxwZXJUZXh0Q29udGVudChjb250ZW50KSB7XG4gICAgaWYgKHRoaXMuaGVscGVyVGV4dF8pIHtcbiAgICAgIHRoaXMuaGVscGVyVGV4dF8uc2V0Q29udGVudChjb250ZW50KTtcbiAgICB9XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgY29uc3Qgb3Blbk5vdGNoID0gdGhpcy5nZXRWYWx1ZSgpLmxlbmd0aCA+IDA7XG4gICAgdGhpcy5ub3RjaE91dGxpbmUob3Blbk5vdGNoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHZhbHVlIGNoYW5nZXMsIHZpYSBjaGFuZ2UgZXZlbnQgb3IgcHJvZ3JhbW1hdGljIHVwZGF0ZXMuXG4gICAqL1xuICBoYW5kbGVDaGFuZ2UoZGlkQ2hhbmdlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgIGNvbnN0IG9wdGlvbkhhc1ZhbHVlID0gdmFsdWUubGVuZ3RoID4gMDtcbiAgICBjb25zdCBpc1JlcXVpcmVkID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLlJFUVVJUkVEKTtcblxuICAgIHRoaXMubm90Y2hPdXRsaW5lKG9wdGlvbkhhc1ZhbHVlKTtcblxuICAgIGlmICghdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkZPQ1VTRUQpKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmZsb2F0TGFiZWwob3B0aW9uSGFzVmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChkaWRDaGFuZ2UpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5Q2hhbmdlKHZhbHVlKTtcblxuICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgdGhpcy5zZXRWYWxpZCh0aGlzLmlzVmFsaWQoKSk7XG4gICAgICAgIGlmICh0aGlzLmhlbHBlclRleHRfKSB7XG4gICAgICAgICAgdGhpcy5oZWxwZXJUZXh0Xy5zZXRWYWxpZGl0eSh0aGlzLmlzVmFsaWQoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBmb2N1cyBldmVudHMgZnJvbSBzZWxlY3QgZWxlbWVudC5cbiAgICovXG4gIGhhbmRsZUZvY3VzKCkge1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5GT0NVU0VEKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmZsb2F0TGFiZWwodHJ1ZSk7XG4gICAgdGhpcy5ub3RjaE91dGxpbmUodHJ1ZSk7XG4gICAgdGhpcy5hZGFwdGVyXy5hY3RpdmF0ZUJvdHRvbUxpbmUoKTtcbiAgICBpZiAodGhpcy5oZWxwZXJUZXh0Xykge1xuICAgICAgdGhpcy5oZWxwZXJUZXh0Xy5zaG93VG9TY3JlZW5SZWFkZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBibHVyIGV2ZW50cyBmcm9tIHNlbGVjdCBlbGVtZW50LlxuICAgKi9cbiAgaGFuZGxlQmx1cigpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc01lbnVPcGVuKCkpIHJldHVybjtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuRk9DVVNFRCk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoZmFsc2UpO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVhY3RpdmF0ZUJvdHRvbUxpbmUoKTtcblxuICAgIGNvbnN0IGlzUmVxdWlyZWQgPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuUkVRVUlSRUQpO1xuXG4gICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgIHRoaXMuc2V0VmFsaWQodGhpcy5pc1ZhbGlkKCkpO1xuICAgICAgaWYgKHRoaXMuaGVscGVyVGV4dF8pIHtcbiAgICAgICAgdGhpcy5oZWxwZXJUZXh0Xy5zZXRWYWxpZGl0eSh0aGlzLmlzVmFsaWQoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sobm9ybWFsaXplZFgpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc01lbnVPcGVuKCkpIHJldHVybjtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFJpcHBsZUNlbnRlcihub3JtYWxpemVkWCk7XG5cbiAgICB0aGlzLmFkYXB0ZXJfLm9wZW5NZW51KCk7XG4gIH1cblxuICBoYW5kbGVLZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNNZW51T3BlbigpKSByZXR1cm47XG5cbiAgICBjb25zdCBpc0VudGVyID0gZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IGV2ZW50LmtleUNvZGUgPT09IDEzO1xuICAgIGNvbnN0IGlzU3BhY2UgPSBldmVudC5rZXkgPT09ICdTcGFjZScgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzI7XG4gICAgY29uc3QgYXJyb3dVcCA9IGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnIHx8IGV2ZW50LmtleUNvZGUgPT09IDM4O1xuICAgIGNvbnN0IGFycm93RG93biA9IGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicgfHwgZXZlbnQua2V5Q29kZSA9PT0gNDA7XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkZPQ1VTRUQpICYmIChpc0VudGVyIHx8IGlzU3BhY2UgfHwgYXJyb3dVcCB8fCBhcnJvd0Rvd24pKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLm9wZW5NZW51KCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucy9jbG9zZXMgdGhlIG5vdGNoZWQgb3V0bGluZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBvcGVuTm90Y2hcbiAgICovXG4gIG5vdGNoT3V0bGluZShvcGVuTm90Y2gpIHtcbiAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaGFzT3V0bGluZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGlzRm9jdXNlZCA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5GT0NVU0VEKTtcblxuICAgIGlmIChvcGVuTm90Y2gpIHtcbiAgICAgIGNvbnN0IGxhYmVsU2NhbGUgPSBudW1iZXJzLkxBQkVMX1NDQUxFO1xuICAgICAgY29uc3QgbGFiZWxXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGFiZWxXaWR0aCgpICogbGFiZWxTY2FsZTtcbiAgICAgIHRoaXMuYWRhcHRlcl8ubm90Y2hPdXRsaW5lKGxhYmVsV2lkdGgpO1xuICAgIH0gZWxzZSBpZiAoIWlzRm9jdXNlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5jbG9zZU91dGxpbmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgYXJpYSBsYWJlbCBvZiB0aGUgbGVhZGluZyBpY29uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxcbiAgICovXG4gIHNldExlYWRpbmdJY29uQXJpYUxhYmVsKGxhYmVsKSB7XG4gICAgaWYgKHRoaXMubGVhZGluZ0ljb25fKSB7XG4gICAgICB0aGlzLmxlYWRpbmdJY29uXy5zZXRBcmlhTGFiZWwobGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGxlYWRpbmcgaWNvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAgICovXG4gIHNldExlYWRpbmdJY29uQ29udGVudChjb250ZW50KSB7XG4gICAgaWYgKHRoaXMubGVhZGluZ0ljb25fKSB7XG4gICAgICB0aGlzLmxlYWRpbmdJY29uXy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbGlkKGlzVmFsaWQpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFZhbGlkKGlzVmFsaWQpO1xuICB9XG5cbiAgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5jaGVja1ZhbGlkaXR5KCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDU2VsZWN0Rm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgUmlwcGxlLiBQcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIG1hbmFnaW5nXG4gKiAtIGNsYXNzZXNcbiAqIC0gZG9tXG4gKiAtIENTUyB2YXJpYWJsZXNcbiAqIC0gcG9zaXRpb25cbiAqIC0gZGltZW5zaW9uc1xuICogLSBzY3JvbGwgcG9zaXRpb25cbiAqIC0gZXZlbnQgaGFuZGxlcnNcbiAqIC0gdW5ib3VuZGVkLCBhY3RpdmUgYW5kIGRpc2FibGVkIHN0YXRlc1xuICpcbiAqIEFkZGl0aW9uYWxseSwgcHJvdmlkZXMgdHlwZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGFkYXB0ZXIgdG8gdGhlIENsb3N1cmVcbiAqIGNvbXBpbGVyLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGFkYXB0ZXIgZm9yIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZSB0byBkZWxlZ2F0ZSB1cGRhdGVzIHRvXG4gKiB0aGUgY29tcG9uZW50IGluIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZS4gU2VlIGFyY2hpdGVjdHVyZSBkb2N1bWVudGF0aW9uXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9jb2RlL2FyY2hpdGVjdHVyZS5tZFxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDUmlwcGxlQWRhcHRlciB7XG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBicm93c2VyU3VwcG9ydHNDc3NWYXJzKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNVbmJvdW5kZWQoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1N1cmZhY2VBY3RpdmUoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1N1cmZhY2VEaXNhYmxlZCgpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHshRXZlbnRUYXJnZXR9IHRhcmdldCAqL1xuICBjb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhck5hbWVcbiAgICogQHBhcmFtIHs/bnVtYmVyfHN0cmluZ30gdmFsdWVcbiAgICovXG4gIHVwZGF0ZUNzc1ZhcmlhYmxlKHZhck5hbWUsIHZhbHVlKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHshQ2xpZW50UmVjdH0gKi9cbiAgY29tcHV0ZUJvdW5kaW5nUmVjdCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19ICovXG4gIGdldFdpbmRvd1BhZ2VPZmZzZXQoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIC8vIFJpcHBsZSBpcyBhIHNwZWNpYWwgY2FzZSB3aGVyZSB0aGUgXCJyb290XCIgY29tcG9uZW50IGlzIHJlYWxseSBhIFwibWl4aW5cIiBvZiBzb3J0cyxcbiAgLy8gZ2l2ZW4gdGhhdCBpdCdzIGFuICd1cGdyYWRlJyB0byBhbiBleGlzdGluZyBjb21wb25lbnQuIFRoYXQgYmVpbmcgc2FpZCBpdCBpcyB0aGUgcm9vdFxuICAvLyBDU1MgY2xhc3MgdGhhdCBhbGwgb3RoZXIgQ1NTIGNsYXNzZXMgZGVyaXZlIGZyb20uXG4gIFJPT1Q6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkJyxcbiAgVU5CT1VOREVEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkJyxcbiAgQkdfRk9DVVNFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZCcsXG4gIEZHX0FDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb24nLFxuICBGR19ERUFDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbicsXG59O1xuXG5jb25zdCBzdHJpbmdzID0ge1xuICBWQVJfTEVGVDogJy0tbWRjLXJpcHBsZS1sZWZ0JyxcbiAgVkFSX1RPUDogJy0tbWRjLXJpcHBsZS10b3AnLFxuICBWQVJfRkdfU0laRTogJy0tbWRjLXJpcHBsZS1mZy1zaXplJyxcbiAgVkFSX0ZHX1NDQUxFOiAnLS1tZGMtcmlwcGxlLWZnLXNjYWxlJyxcbiAgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQnLFxuICBWQVJfRkdfVFJBTlNMQVRFX0VORDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kJyxcbn07XG5cbmNvbnN0IG51bWJlcnMgPSB7XG4gIFBBRERJTkc6IDEwLFxuICBJTklUSUFMX09SSUdJTl9TQ0FMRTogMC42LFxuICBERUFDVElWQVRJT05fVElNRU9VVF9NUzogMjI1LCAvLyBDb3JyZXNwb25kcyB0byAkbWRjLXJpcHBsZS10cmFuc2xhdGUtZHVyYXRpb24gKGkuZS4gYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIEZHX0RFQUNUSVZBVElPTl9NUzogMTUwLCAvLyBDb3JyZXNwb25kcyB0byAkbWRjLXJpcHBsZS1mYWRlLW91dC1kdXJhdGlvbiAoaS5lLiBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIGR1cmF0aW9uKVxuICBUQVBfREVMQVlfTVM6IDMwMCwgLy8gRGVsYXkgYmV0d2VlbiB0b3VjaCBhbmQgc2ltdWxhdGVkIG1vdXNlIGV2ZW50cyBvbiB0b3VjaCBkZXZpY2VzXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIHN1cHBvcnRzQ3NzVmFyaWFibGVzIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBDU1MgY3VzdG9tIHZhcmlhYmxlIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGFwcGx5UGFzc2l2ZSB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3QgcGFzc2l2ZSBldmVudCBsaXN0ZW5lciBzdXBwb3J0LlxuICogQHByaXZhdGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5sZXQgc3VwcG9ydHNQYXNzaXZlXztcblxuLyoqXG4gKiBAcGFyYW0geyFXaW5kb3d9IHdpbmRvd09ialxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopIHtcbiAgLy8gRGV0ZWN0IHZlcnNpb25zIG9mIEVkZ2Ugd2l0aCBidWdneSB2YXIoKSBzdXBwb3J0XG4gIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTE0OTU0NDgvXG4gIGNvbnN0IGRvY3VtZW50ID0gd2luZG93T2JqLmRvY3VtZW50O1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vZGUuY2xhc3NOYW1lID0gJ21kYy1yaXBwbGUtc3VyZmFjZS0tdGVzdC1lZGdlLXZhci1idWcnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gIC8vIFRoZSBidWcgZXhpc3RzIGlmIDo6YmVmb3JlIHN0eWxlIGVuZHMgdXAgcHJvcGFnYXRpbmcgdG8gdGhlIHBhcmVudCBlbGVtZW50LlxuICAvLyBBZGRpdGlvbmFsbHksIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBudWxsIGluIGlmcmFtZXMgd2l0aCBkaXNwbGF5OiBcIm5vbmVcIiBpbiBGaXJlZm94LFxuICAvLyBidXQgRmlyZWZveCBpcyBrbm93biB0byBzdXBwb3J0IENTUyBjdXN0b20gcHJvcGVydGllcyBjb3JyZWN0bHkuXG4gIC8vIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3dPYmouZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgY29uc3QgaGFzUHNldWRvVmFyQnVnID0gY29tcHV0ZWRTdHlsZSAhPT0gbnVsbCAmJiBjb21wdXRlZFN0eWxlLmJvcmRlclRvcFN0eWxlID09PSAnc29saWQnO1xuICBub2RlLnJlbW92ZSgpO1xuICByZXR1cm4gaGFzUHNldWRvVmFyQnVnO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvd09iaiwgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgbGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICBpZiAodHlwZW9mIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9PT0gJ2Jvb2xlYW4nICYmICFmb3JjZVJlZnJlc2gpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG4gIH1cblxuICBjb25zdCBzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCA9IHdpbmRvd09iai5DU1MgJiYgdHlwZW9mIHdpbmRvd09iai5DU1Muc3VwcG9ydHMgPT09ICdmdW5jdGlvbic7XG4gIGlmICghc3VwcG9ydHNGdW5jdGlvblByZXNlbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzID0gd2luZG93T2JqLkNTUy5zdXBwb3J0cygnLS1jc3MtdmFycycsICd5ZXMnKTtcbiAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gIC8vIFNlZTogUkVBRE1FIHNlY3Rpb24gb24gU2FmYXJpXG4gIGNvbnN0IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyA9IChcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCcoLS1jc3MtdmFyczogeWVzKScpICYmXG4gICAgd2luZG93T2JqLkNTUy5zdXBwb3J0cygnY29sb3InLCAnIzAwMDAwMDAwJylcbiAgKTtcblxuICBpZiAoZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyB8fCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9ICFkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaik7XG4gIH0gZWxzZSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICghZm9yY2VSZWZyZXNoKSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXNfID0gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG4gIH1cbiAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xufVxuXG4vL1xuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmQgaWYgc28sIHVzZSB0aGVtLlxuICogQHBhcmFtIHshV2luZG93PX0gZ2xvYmFsT2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58IUV2ZW50TGlzdGVuZXJPcHRpb25zfVxuICovXG5mdW5jdGlvbiBhcHBseVBhc3NpdmUoZ2xvYmFsT2JqID0gd2luZG93LCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBpZiAoc3VwcG9ydHNQYXNzaXZlXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgIGxldCBpc1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIHtnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgaXNTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gaXNTdXBwb3J0ZWQ7XG4gICAgICB9fSk7XG4gICAgfSBjYXRjaCAoZSkgeyB9XG5cbiAgICBzdXBwb3J0c1Bhc3NpdmVfID0gaXNTdXBwb3J0ZWQ7XG4gIH1cblxuICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlX1xuICAgID8gLyoqIEB0eXBlIHshRXZlbnRMaXN0ZW5lck9wdGlvbnN9ICovICh7cGFzc2l2ZTogdHJ1ZX0pXG4gICAgOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IEhUTUxFbGVtZW50UHJvdG90eXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudFByb3RvdHlwZSkge1xuICAvKipcbiAgICogT3JkZXIgaXMgaW1wb3J0YW50IGJlY2F1c2Ugd2UgcmV0dXJuIHRoZSBmaXJzdCBleGlzdGluZyBtZXRob2Qgd2UgZmluZC5cbiAgICogRG8gbm90IGNoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIGl0ZW1zIGluIHRoZSBiZWxvdyBhcnJheS5cbiAgICovXG4gIGNvbnN0IG1hdGNoZXNNZXRob2RzID0gWydtYXRjaGVzJywgJ3dlYmtpdE1hdGNoZXNTZWxlY3RvcicsICdtc01hdGNoZXNTZWxlY3RvciddO1xuICBsZXQgbWV0aG9kID0gJ21hdGNoZXMnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZXNNZXRob2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbWF0Y2hlc01ldGhvZCA9IG1hdGNoZXNNZXRob2RzW2ldO1xuICAgIGlmIChtYXRjaGVzTWV0aG9kIGluIEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gICAgICBtZXRob2QgPSBtYXRjaGVzTWV0aG9kO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ldGhvZDtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFFdmVudH0gZXZcbiAqIEBwYXJhbSB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gcGFnZU9mZnNldFxuICogQHBhcmFtIHshQ2xpZW50UmVjdH0gY2xpZW50UmVjdFxuICogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX1cbiAqL1xuZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGV2LCBwYWdlT2Zmc2V0LCBjbGllbnRSZWN0KSB7XG4gIGNvbnN0IHt4LCB5fSA9IHBhZ2VPZmZzZXQ7XG4gIGNvbnN0IGRvY3VtZW50WCA9IHggKyBjbGllbnRSZWN0LmxlZnQ7XG4gIGNvbnN0IGRvY3VtZW50WSA9IHkgKyBjbGllbnRSZWN0LnRvcDtcblxuICBsZXQgbm9ybWFsaXplZFg7XG4gIGxldCBub3JtYWxpemVkWTtcbiAgLy8gRGV0ZXJtaW5lIHRvdWNoIHBvaW50IHJlbGF0aXZlIHRvIHRoZSByaXBwbGUgY29udGFpbmVyLlxuICBpZiAoZXYudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgZXYgPSAvKiogQHR5cGUgeyFUb3VjaEV2ZW50fSAqLyAoZXYpO1xuICAgIG5vcm1hbGl6ZWRYID0gZXYuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBkb2N1bWVudFg7XG4gICAgbm9ybWFsaXplZFkgPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGRvY3VtZW50WTtcbiAgfSBlbHNlIHtcbiAgICBldiA9IC8qKiBAdHlwZSB7IU1vdXNlRXZlbnR9ICovIChldik7XG4gICAgbm9ybWFsaXplZFggPSBldi5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9XG5cbiAgcmV0dXJuIHt4OiBub3JtYWxpemVkWCwgeTogbm9ybWFsaXplZFl9O1xufVxuXG5leHBvcnQge3N1cHBvcnRzQ3NzVmFyaWFibGVzLCBhcHBseVBhc3NpdmUsIGdldE1hdGNoZXNQcm9wZXJ0eSwgZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENSaXBwbGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7Z2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGlzQWN0aXZhdGVkOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgYWN0aXZhdGlvbkV2ZW50OiAoIUV2ZW50fHVuZGVmaW5lZCksXG4gKiAgIGlzUHJvZ3JhbW1hdGljOiAoYm9vbGVhbnx1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgQWN0aXZhdGlvblN0YXRlVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBkZWFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGZvY3VzOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGJsdXI6IChzdHJpbmd8dW5kZWZpbmVkKVxuICogfX1cbiAqL1xubGV0IExpc3RlbmVySW5mb1R5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgYWN0aXZhdGU6IGZ1bmN0aW9uKCFFdmVudCksXG4gKiAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uKCFFdmVudD0pLFxuICogICBmb2N1czogZnVuY3Rpb24oKSxcbiAqICAgYmx1cjogZnVuY3Rpb24oKVxuICogfX1cbiAqL1xubGV0IExpc3RlbmVyc1R5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgeDogbnVtYmVyLFxuICogICB5OiBudW1iZXJcbiAqIH19XG4gKi9cbmxldCBQb2ludFR5cGU7XG5cbi8vIEFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gdGhlIHJvb3QgZWxlbWVudCBvZiBlYWNoIGluc3RhbmNlIGZvciBhY3RpdmF0aW9uXG5jb25zdCBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gWyd0b3VjaHN0YXJ0JywgJ3BvaW50ZXJkb3duJywgJ21vdXNlZG93bicsICdrZXlkb3duJ107XG5cbi8vIERlYWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiBkb2N1bWVudEVsZW1lbnQgd2hlbiBhIHBvaW50ZXItcmVsYXRlZCBkb3duIGV2ZW50IG9jY3Vyc1xuY29uc3QgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoZW5kJywgJ3BvaW50ZXJ1cCcsICdtb3VzZXVwJywgJ2NvbnRleHRtZW51J107XG5cbi8vIFRyYWNrcyBhY3RpdmF0aW9ucyB0aGF0IGhhdmUgb2NjdXJyZWQgb24gdGhlIGN1cnJlbnQgZnJhbWUsIHRvIGF2b2lkIHNpbXVsdGFuZW91cyBuZXN0ZWQgYWN0aXZhdGlvbnNcbi8qKiBAdHlwZSB7IUFycmF5PCFFdmVudFRhcmdldD59ICovXG5sZXQgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENSaXBwbGVBZGFwdGVyPn1cbiAqL1xuY2xhc3MgTURDUmlwcGxlRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiAvKiBib29sZWFuIC0gY2FjaGVkICovIHt9LFxuICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGFkZENsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiAoLyogdGFyZ2V0OiAhRXZlbnRUYXJnZXQgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKC8qIHZhck5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiAvKiBDbGllbnRSZWN0ICovIHt9LFxuICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4gLyoge3g6IG51bWJlciwgeTogbnVtYmVyfSAqLyB7fSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDUmlwcGxlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHshQ2xpZW50UmVjdH0gKi9cbiAgICB0aGlzLmZyYW1lXyA9IC8qKiBAdHlwZSB7IUNsaWVudFJlY3R9ICovICh7d2lkdGg6IDAsIGhlaWdodDogMH0pO1xuXG4gICAgLyoqIEBwcml2YXRlIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmluaXRpYWxTaXplXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLm1heFJhZGl1c18gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQpfSAqL1xuICAgIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyA9IChlKSA9PiB0aGlzLmFjdGl2YXRlXyhlKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmRlYWN0aXZhdGVfKCk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudD0pfSAqL1xuICAgIHRoaXMuZm9jdXNIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlRm9jdXMoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5ibHVySGFuZGxlcl8gPSAoKSA9PiB0aGlzLmhhbmRsZUJsdXIoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMucmVzaXplSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmxheW91dCgpO1xuXG4gICAgLyoqIEBwcml2YXRlIHt7bGVmdDogbnVtYmVyLCB0b3A6bnVtYmVyfX0gKi9cbiAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgIH07XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmZnU2NhbGVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IHRydWU7XG4gICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgIH07XG5cbiAgICAvKiogQHByaXZhdGUgeyFFdmVudHx1bmRlZmluZWR9ICovXG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gIH1cblxuICAvKipcbiAgICogV2UgY29tcHV0ZSB0aGlzIHByb3BlcnR5IHNvIHRoYXQgd2UgYXJlIG5vdCBxdWVyeWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2xpZW50XG4gICAqIHVudGlsIHRoZSBwb2ludCBpbiB0aW1lIHdoZXJlIHRoZSBmb3VuZGF0aW9uIHJlcXVlc3RzIGl0LiBUaGlzIHByZXZlbnRzIHNjZW5hcmlvcyB3aGVyZVxuICAgKiBjbGllbnQtc2lkZSBmZWF0dXJlLWRldGVjdGlvbiBtYXkgaGFwcGVuIHRvbyBlYXJseSwgc3VjaCBhcyB3aGVuIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXJcbiAgICogYW5kIHRoZW4gaW5pdGlhbGl6ZWQgYXQgbW91bnQgdGltZSBvbiB0aGUgY2xpZW50LlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFBY3RpdmF0aW9uU3RhdGVUeXBlfVxuICAgKi9cbiAgZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZhdGVkOiBmYWxzZSxcbiAgICAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiBmYWxzZSxcbiAgICAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogZmFsc2UsXG4gICAgICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogZmFsc2UsXG4gICAgICBhY3RpdmF0aW9uRXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgIGlzUHJvZ3JhbW1hdGljOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBpbml0KCkge1xuICAgIGNvbnN0IHN1cHBvcnRzUHJlc3NSaXBwbGUgPSB0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKTtcblxuICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoUk9PVCk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZXMgbmVlZCBsYXlvdXQgbG9naWMgYXBwbGllZCBpbW1lZGlhdGVseSB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGJvdGggc2hhZGUgYW5kIHJpcHBsZVxuICAgICAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmF0aW9uVGltZXJfKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1JPT1QsIFVOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFJPT1QpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIHRoaXMucmVtb3ZlQ3NzVmFyc18oKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKTtcbiAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN1cHBvcnRzUHJlc3NSaXBwbGUgUGFzc2VkIGZyb20gaW5pdCB0byBzYXZlIGEgcmVkdW5kYW50IGZ1bmN0aW9uIGNhbGxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnR9IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGUpIHtcbiAgICBpZiAoZS50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKSB7XG4gICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9KTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJlbW92ZUNzc1ZhcnNfKCkge1xuICAgIGNvbnN0IHtzdHJpbmdzfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4gICAgT2JqZWN0LmtleXMoc3RyaW5ncykuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgaWYgKGsuaW5kZXhPZignVkFSXycpID09PSAwKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoc3RyaW5nc1trXSwgbnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnQ9fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhY3RpdmF0ZV8oZSkge1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZURpc2FibGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEF2b2lkIHJlYWN0aW5nIHRvIGZvbGxvdy1vbiBldmVudHMgZmlyZWQgYnkgdG91Y2ggZGV2aWNlIGFmdGVyIGFuIGFscmVhZHktcHJvY2Vzc2VkIHVzZXIgaW50ZXJhY3Rpb25cbiAgICBjb25zdCBwcmV2aW91c0FjdGl2YXRpb25FdmVudCA9IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICAgIGNvbnN0IGlzU2FtZUludGVyYWN0aW9uID0gcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgJiYgZSAhPT0gdW5kZWZpbmVkICYmIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50LnR5cGUgIT09IGUudHlwZTtcbiAgICBpZiAoaXNTYW1lSW50ZXJhY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQgPSB0cnVlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA9IGUgPT09IHVuZGVmaW5lZDtcbiAgICBhY3RpdmF0aW9uU3RhdGUuYWN0aXZhdGlvbkV2ZW50ID0gZTtcbiAgICBhY3RpdmF0aW9uU3RhdGUud2FzQWN0aXZhdGVkQnlQb2ludGVyID0gYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID8gZmFsc2UgOiBlICE9PSB1bmRlZmluZWQgJiYgKFxuICAgICAgZS50eXBlID09PSAnbW91c2Vkb3duJyB8fCBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICdwb2ludGVyZG93bidcbiAgICApO1xuXG4gICAgY29uc3QgaGFzQWN0aXZhdGVkQ2hpbGQgPSBlICE9PSB1bmRlZmluZWQgJiYgYWN0aXZhdGVkVGFyZ2V0cy5sZW5ndGggPiAwICYmIGFjdGl2YXRlZFRhcmdldHMuc29tZShcbiAgICAgICh0YXJnZXQpID0+IHRoaXMuYWRhcHRlcl8uY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpKTtcbiAgICBpZiAoaGFzQWN0aXZhdGVkQ2hpbGQpIHtcbiAgICAgIC8vIEltbWVkaWF0ZWx5IHJlc2V0IGFjdGl2YXRpb24gc3RhdGUsIHdoaWxlIHByZXNlcnZpbmcgbG9naWMgdGhhdCBwcmV2ZW50cyB0b3VjaCBmb2xsb3ctb24gZXZlbnRzXG4gICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFjdGl2YXRlZFRhcmdldHMucHVzaCgvKiogQHR5cGUgeyFFdmVudFRhcmdldH0gKi8gKGUudGFyZ2V0KSk7XG4gICAgICB0aGlzLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGUpO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSk7XG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgLy8gUmVzZXQgYXJyYXkgb24gbmV4dCBmcmFtZSBhZnRlciB0aGUgY3VycmVudCBldmVudCBoYXMgaGFkIGEgY2hhbmNlIHRvIGJ1YmJsZSB0byBwcmV2ZW50IGFuY2VzdG9yIHJpcHBsZXNcbiAgICAgIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcblxuICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgJiYgZSAhPT0gdW5kZWZpbmVkICYmIChlLmtleSA9PT0gJyAnIHx8IGUua2V5Q29kZSA9PT0gMzIpKSB7XG4gICAgICAgIC8vIElmIHNwYWNlIHdhcyBwcmVzc2VkLCB0cnkgYWdhaW4gd2l0aGluIGFuIHJBRiBjYWxsIHRvIGRldGVjdCA6YWN0aXZlLCBiZWNhdXNlIGRpZmZlcmVudCBVQXMgcmVwb3J0XG4gICAgICAgIC8vIGFjdGl2ZSBzdGF0ZXMgaW5jb25zaXN0ZW50bHkgd2hlbiB0aGV5J3JlIGNhbGxlZCB3aXRoaW4gZXZlbnQgaGFuZGxpbmcgY29kZTpcbiAgICAgICAgLy8gLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02MzU5NzFcbiAgICAgICAgLy8gLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjkzNzQxXG4gICAgICAgIC8vIFdlIHRyeSBmaXJzdCBvdXRzaWRlIHJBRiB0byBzdXBwb3J0IEVkZ2UsIHdoaWNoIGRvZXMgbm90IGV4aGliaXQgdGhpcyBwcm9ibGVtLCBidXQgd2lsbCBjcmFzaCBpZiBhIENTU1xuICAgICAgICAvLyB2YXJpYWJsZSBpcyBzZXQgd2l0aGluIGEgckFGIGNhbGxiYWNrIGZvciBhIHN1Ym1pdCBidXR0b24gaW50ZXJhY3Rpb24gKCMyMjQxKS5cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgLy8gUmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSBpbW1lZGlhdGVseSBpZiBlbGVtZW50IHdhcyBub3QgbWFkZSBhY3RpdmUuXG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpIHtcbiAgICByZXR1cm4gKGUgIT09IHVuZGVmaW5lZCAmJiBlLnR5cGUgPT09ICdrZXlkb3duJykgPyB0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZUFjdGl2ZSgpIDogdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGV2ZW50IE9wdGlvbmFsIGV2ZW50IGNvbnRhaW5pbmcgcG9zaXRpb24gaW5mb3JtYXRpb24uXG4gICAqL1xuICBhY3RpdmF0ZShldmVudCkge1xuICAgIHRoaXMuYWN0aXZhdGVfKGV2ZW50KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBhbmltYXRlQWN0aXZhdGlvbl8oKSB7XG4gICAgY29uc3Qge1ZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIFZBUl9GR19UUkFOU0xBVEVfRU5EfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcbiAgICBjb25zdCB7RkdfREVBQ1RJVkFUSU9OLCBGR19BQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBjb25zdCB7REVBQ1RJVkFUSU9OX1RJTUVPVVRfTVN9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzO1xuXG4gICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcblxuICAgIGxldCB0cmFuc2xhdGVTdGFydCA9ICcnO1xuICAgIGxldCB0cmFuc2xhdGVFbmQgPSAnJztcblxuICAgIGlmICghdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICBjb25zdCB7c3RhcnRQb2ludCwgZW5kUG9pbnR9ID0gdGhpcy5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCk7XG4gICAgICB0cmFuc2xhdGVTdGFydCA9IGAke3N0YXJ0UG9pbnQueH1weCwgJHtzdGFydFBvaW50Lnl9cHhgO1xuICAgICAgdHJhbnNsYXRlRW5kID0gYCR7ZW5kUG9pbnQueH1weCwgJHtlbmRQb2ludC55fXB4YDtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIHRyYW5zbGF0ZVN0YXJ0KTtcbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfRU5ELCB0cmFuc2xhdGVFbmQpO1xuICAgIC8vIENhbmNlbCBhbnkgb25nb2luZyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBhbmltYXRpb25zXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcblxuICAgIC8vIEZvcmNlIGxheW91dCBpbiBvcmRlciB0byByZS10cmlnZ2VyIHRoZSBhbmltYXRpb24uXG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfKCksIERFQUNUSVZBVElPTl9USU1FT1VUX01TKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJuIHt7c3RhcnRQb2ludDogUG9pbnRUeXBlLCBlbmRQb2ludDogUG9pbnRUeXBlfX1cbiAgICovXG4gIGdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKSB7XG4gICAgY29uc3Qge2FjdGl2YXRpb25FdmVudCwgd2FzQWN0aXZhdGVkQnlQb2ludGVyfSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcblxuICAgIGxldCBzdGFydFBvaW50O1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIpIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoXG4gICAgICAgIC8qKiBAdHlwZSB7IUV2ZW50fSAqLyAoYWN0aXZhdGlvbkV2ZW50KSxcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5nZXRXaW5kb3dQYWdlT2Zmc2V0KCksIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICB4OiB0aGlzLmZyYW1lXy53aWR0aCAvIDIsXG4gICAgICAgIHk6IHRoaXMuZnJhbWVfLmhlaWdodCAvIDIsXG4gICAgICB9O1xuICAgIH1cbiAgICAvLyBDZW50ZXIgdGhlIGVsZW1lbnQgYXJvdW5kIHRoZSBzdGFydCBwb2ludC5cbiAgICBzdGFydFBvaW50ID0ge1xuICAgICAgeDogc3RhcnRQb2ludC54IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiBzdGFydFBvaW50LnkgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgY29uc3QgZW5kUG9pbnQgPSB7XG4gICAgICB4OiAodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgeTogKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgfTtcblxuICAgIHJldHVybiB7c3RhcnRQb2ludCwgZW5kUG9pbnR9O1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpIHtcbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYm90aCB3aGVuIGEgcG9pbnRpbmcgZGV2aWNlIGlzIHJlbGVhc2VkLCBhbmQgd2hlbiB0aGUgYWN0aXZhdGlvbiBhbmltYXRpb24gZW5kcy5cbiAgICAvLyBUaGUgZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBzaG91bGQgb25seSBydW4gYWZ0ZXIgYm90aCBvZiB0aG9zZSBvY2N1ci5cbiAgICBjb25zdCB7RkdfREVBQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBjb25zdCB7aGFzRGVhY3RpdmF0aW9uVVhSdW4sIGlzQWN0aXZhdGVkfSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBjb25zdCBhY3RpdmF0aW9uSGFzRW5kZWQgPSBoYXNEZWFjdGl2YXRpb25VWFJ1biB8fCAhaXNBY3RpdmF0ZWQ7XG5cbiAgICBpZiAoYWN0aXZhdGlvbkhhc0VuZGVkICYmIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXykge1xuICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIH0sIG51bWJlcnMuRkdfREVBQ1RJVkFUSU9OX01TKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCkge1xuICAgIGNvbnN0IHtGR19BQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICB9XG5cbiAgcmVzZXRBY3RpdmF0aW9uU3RhdGVfKCkge1xuICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmFjdGl2YXRpb25FdmVudDtcbiAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgLy8gVG91Y2ggZGV2aWNlcyBtYXkgZmlyZSBhZGRpdGlvbmFsIGV2ZW50cyBmb3IgdGhlIHNhbWUgaW50ZXJhY3Rpb24gd2l0aGluIGEgc2hvcnQgdGltZS5cbiAgICAvLyBTdG9yZSB0aGUgcHJldmlvdXMgZXZlbnQgdW50aWwgaXQncyBzYWZlIHRvIGFzc3VtZSB0aGF0IHN1YnNlcXVlbnQgZXZlbnRzIGFyZSBmb3IgbmV3IGludGVyYWN0aW9ucy5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdW5kZWZpbmVkLCBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuVEFQX0RFTEFZX01TKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVhY3RpdmF0ZV8oKSB7XG4gICAgY29uc3QgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBzY2VuYXJpb3Mgc3VjaCBhcyB3aGVuIHlvdSBoYXZlIGEga2V5dXAgZXZlbnQgdGhhdCBibHVycyB0aGUgZWxlbWVudC5cbiAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlID0gLyoqIEB0eXBlIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gKi8gKE9iamVjdC5hc3NpZ24oe30sIGFjdGl2YXRpb25TdGF0ZSkpO1xuXG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYykge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpKTtcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmhhc0RlYWN0aXZhdGlvblVYUnVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7XG4gICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZGVhY3RpdmF0ZV8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFBY3RpdmF0aW9uU3RhdGVUeXBlfSBvcHRpb25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhbmltYXRlRGVhY3RpdmF0aW9uXyh7d2FzQWN0aXZhdGVkQnlQb2ludGVyLCB3YXNFbGVtZW50TWFkZUFjdGl2ZX0pIHtcbiAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyIHx8IHdhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgIH1cbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICB9XG4gICAgdGhpcy5sYXlvdXRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBsYXlvdXRJbnRlcm5hbF8oKSB7XG4gICAgdGhpcy5mcmFtZV8gPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICBjb25zdCBtYXhEaW0gPSBNYXRoLm1heCh0aGlzLmZyYW1lXy5oZWlnaHQsIHRoaXMuZnJhbWVfLndpZHRoKTtcblxuICAgIC8vIFN1cmZhY2UgZGlhbWV0ZXIgaXMgdHJlYXRlZCBkaWZmZXJlbnRseSBmb3IgdW5ib3VuZGVkIHZzLiBib3VuZGVkIHJpcHBsZXMuXG4gICAgLy8gVW5ib3VuZGVkIHJpcHBsZSBkaWFtZXRlciBpcyBjYWxjdWxhdGVkIHNtYWxsZXIgc2luY2UgdGhlIHN1cmZhY2UgaXMgZXhwZWN0ZWQgdG8gYWxyZWFkeSBiZSBwYWRkZWQgYXBwcm9wcmlhdGVseVxuICAgIC8vIHRvIGV4dGVuZCB0aGUgaGl0Ym94LCBhbmQgdGhlIHJpcHBsZSBpcyBleHBlY3RlZCB0byBtZWV0IHRoZSBlZGdlcyBvZiB0aGUgcGFkZGVkIGhpdGJveCAod2hpY2ggaXMgdHlwaWNhbGx5XG4gICAgLy8gc3F1YXJlKS4gQm91bmRlZCByaXBwbGVzLCBvbiB0aGUgb3RoZXIgaGFuZCwgYXJlIGZ1bGx5IGV4cGVjdGVkIHRvIGV4cGFuZCBiZXlvbmQgdGhlIHN1cmZhY2UncyBsb25nZXN0IGRpYW1ldGVyXG4gICAgLy8gKGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGRpYWdvbmFsIHBsdXMgYSBjb25zdGFudCBwYWRkaW5nKSwgYW5kIGFyZSBjbGlwcGVkIGF0IHRoZSBzdXJmYWNlJ3MgYm9yZGVyIHZpYVxuICAgIC8vIGBvdmVyZmxvdzogaGlkZGVuYC5cbiAgICBjb25zdCBnZXRCb3VuZGVkUmFkaXVzID0gKCkgPT4ge1xuICAgICAgY29uc3QgaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdyh0aGlzLmZyYW1lXy53aWR0aCwgMikgKyBNYXRoLnBvdyh0aGlzLmZyYW1lXy5oZWlnaHQsIDIpKTtcbiAgICAgIHJldHVybiBoeXBvdGVudXNlICsgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlBBRERJTkc7XG4gICAgfTtcblxuICAgIHRoaXMubWF4UmFkaXVzXyA9IHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSA/IG1heERpbSA6IGdldEJvdW5kZWRSYWRpdXMoKTtcblxuICAgIC8vIFJpcHBsZSBpcyBzaXplZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiBvZiB0aGUgc3VyZmFjZSwgdGhlbiBzY2FsZXMgdXAgdXNpbmcgYSBDU1Mgc2NhbGUgdHJhbnNmb3JtXG4gICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBNYXRoLmZsb29yKG1heERpbSAqIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5JTklUSUFMX09SSUdJTl9TQ0FMRSk7XG4gICAgdGhpcy5mZ1NjYWxlXyA9IHRoaXMubWF4UmFkaXVzXyAvIHRoaXMuaW5pdGlhbFNpemVfO1xuXG4gICAgdGhpcy51cGRhdGVMYXlvdXRDc3NWYXJzXygpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHVwZGF0ZUxheW91dENzc1ZhcnNfKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIFZBUl9GR19TSVpFLCBWQVJfTEVGVCwgVkFSX1RPUCwgVkFSX0ZHX1NDQUxFLFxuICAgIH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TSVpFLCBgJHt0aGlzLmluaXRpYWxTaXplX31weGApO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NDQUxFLCB0aGlzLmZnU2NhbGVfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgICAgbGVmdDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0xFRlQsIGAke3RoaXMudW5ib3VuZGVkQ29vcmRzXy5sZWZ0fXB4YCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9UT1AsIGAke3RoaXMudW5ib3VuZGVkQ29vcmRzXy50b3B9cHhgKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0VW5ib3VuZGVkKHVuYm91bmRlZCkge1xuICAgIGNvbnN0IHtVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGlmICh1bmJvdW5kZWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZvY3VzKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG5cbiAgaGFuZGxlQmx1cigpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCBNRENSaXBwbGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDUmlwcGxlRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEBleHRlbmRzIE1EQ0NvbXBvbmVudDwhTURDUmlwcGxlRm91bmRhdGlvbj5cbiAqL1xuY2xhc3MgTURDUmlwcGxlIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqIEBwYXJhbSB7Li4uP30gYXJncyAqL1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMudW5ib3VuZGVkXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7e2lzVW5ib3VuZGVkOiAoYm9vbGVhbnx1bmRlZmluZWQpfT19IG9wdGlvbnNcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZX1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290LCB7aXNVbmJvdW5kZWQgPSB1bmRlZmluZWR9ID0ge30pIHtcbiAgICBjb25zdCByaXBwbGUgPSBuZXcgTURDUmlwcGxlKHJvb3QpO1xuICAgIC8vIE9ubHkgb3ZlcnJpZGUgdW5ib3VuZGVkIGJlaGF2aW9yIGlmIG9wdGlvbiBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxuICAgIGlmIChpc1VuYm91bmRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByaXBwbGUudW5ib3VuZGVkID0gLyoqIEB0eXBlIHtib29sZWFufSAqLyAoaXNVbmJvdW5kZWQpO1xuICAgIH1cbiAgICByZXR1cm4gcmlwcGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IVJpcHBsZUNhcGFibGVTdXJmYWNlfSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVBZGFwdGVyKGluc3RhbmNlKSB7XG4gICAgY29uc3QgTUFUQ0hFUyA9IHV0aWwuZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4gdXRpbC5zdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpLFxuICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IGluc3RhbmNlLnVuYm91bmRlZCxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gaW5zdGFuY2Uucm9vdF9bTUFUQ0hFU10oJzphY3RpdmUnKSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiBpbnN0YW5jZS5kaXNhYmxlZCxcbiAgICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgY29udGFpbnNFdmVudFRhcmdldDogKHRhcmdldCkgPT4gaW5zdGFuY2Uucm9vdF8uY29udGFpbnModGFyZ2V0KSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgaW5zdGFuY2Uucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IChoYW5kbGVyKSA9PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IGluc3RhbmNlLnJvb3RfLnN0eWxlLnNldFByb3BlcnR5KHZhck5hbWUsIHZhbHVlKSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IGluc3RhbmNlLnJvb3RfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4gKHt4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldH0pLFxuICAgIH07XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgZ2V0IHVuYm91bmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdW5ib3VuZGVkICovXG4gIHNldCB1bmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgdGhpcy51bmJvdW5kZWRfID0gQm9vbGVhbih1bmJvdW5kZWQpO1xuICAgIHRoaXMuc2V0VW5ib3VuZGVkXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3N1cmUgQ29tcGlsZXIgdGhyb3dzIGFuIGFjY2VzcyBjb250cm9sIGVycm9yIHdoZW4gZGlyZWN0bHkgYWNjZXNzaW5nIGFcbiAgICogcHJvdGVjdGVkIG9yIHByaXZhdGUgcHJvcGVydHkgaW5zaWRlIGEgZ2V0dGVyL3NldHRlciwgbGlrZSB1bmJvdW5kZWQgYWJvdmUuXG4gICAqIEJ5IGFjY2Vzc2luZyB0aGUgcHJvdGVjdGVkIHByb3BlcnR5IGluc2lkZSBhIG1ldGhvZCwgd2Ugc29sdmUgdGhhdCBwcm9ibGVtLlxuICAgKiBUaGF0J3Mgd2h5IHRoaXMgZnVuY3Rpb24gZXhpc3RzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0VW5ib3VuZGVkXygpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldFVuYm91bmRlZCh0aGlzLnVuYm91bmRlZF8pO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5hY3RpdmF0ZSgpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmRlYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmxheW91dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVGb3VuZGF0aW9ufVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDUmlwcGxlRm91bmRhdGlvbihNRENSaXBwbGUuY3JlYXRlQWRhcHRlcih0aGlzKSk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGluaXRpYWxTeW5jV2l0aERPTSgpIHtcbiAgICB0aGlzLnVuYm91bmRlZCA9ICdtZGNSaXBwbGVJc1VuYm91bmRlZCcgaW4gdGhpcy5yb290Xy5kYXRhc2V0O1xuICB9XG59XG5cbi8qKlxuICogU2VlIE1hdGVyaWFsIERlc2lnbiBzcGVjIGZvciBtb3JlIGRldGFpbHMgb24gd2hlbiB0byB1c2UgcmlwcGxlcy5cbiAqIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9tb3Rpb24vY2hvcmVvZ3JhcGh5Lmh0bWwjY2hvcmVvZ3JhcGh5LWNyZWF0aW9uXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIFJpcHBsZUNhcGFibGVTdXJmYWNlIHt9XG5cbi8qKiBAcHJvdGVjdGVkIHshRWxlbWVudH0gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS5yb290XztcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgcmlwcGxlIGJsZWVkcyBvdXQgb2YgdGhlIGJvdW5kcyBvZiB0aGUgZWxlbWVudC5cbiAqIEB0eXBlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLnVuYm91bmRlZDtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgcmlwcGxlIGlzIGF0dGFjaGVkIHRvIGEgZGlzYWJsZWQgY29tcG9uZW50LlxuICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUuZGlzYWJsZWQ7XG5cbmV4cG9ydCB7TURDUmlwcGxlLCBNRENSaXBwbGVGb3VuZGF0aW9uLCBSaXBwbGVDYXBhYmxlU3VyZmFjZSwgdXRpbH07XG4iLCJpbXBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9pbmRleCdcbmltcG9ydCB7XG4gIHN1cHBvcnRzQ3NzVmFyaWFibGVzLFxuICBnZXRNYXRjaGVzUHJvcGVydHksXG4gIGFwcGx5UGFzc2l2ZVxufSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL3V0aWwnXG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVCYXNlIGV4dGVuZHMgTURDUmlwcGxlRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgTUFUQ0hFUygpIHtcbiAgICAvKiBnbG9iYWwgSFRNTEVsZW1lbnQgKi9cbiAgICByZXR1cm4gKFxuICAgICAgUmlwcGxlQmFzZS5fbWF0Y2hlcyB8fFxuICAgICAgKFJpcHBsZUJhc2UuX21hdGNoZXMgPSBnZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKSlcbiAgICApXG4gIH1cblxuICBzdGF0aWMgaXNTdXJmYWNlQWN0aXZlKHJlZikge1xuICAgIHJldHVybiByZWZbUmlwcGxlQmFzZS5NQVRDSEVTXSgnOmFjdGl2ZScpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcih2bSwgb3B0aW9ucykge1xuICAgIHN1cGVyKFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1VuYm91bmRlZDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWxbUmlwcGxlQmFzZS5NQVRDSEVTXSgnOmFjdGl2ZScpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2bS4kZGVsZXRlKHZtLmNsYXNzZXMsIGNsYXNzTmFtZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IHRhcmdldCA9PiB2bS4kZWwuY29udGFpbnModGFyZ2V0KSxcbiAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHZtLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKHZhck5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2bS4kc2V0KHZtLnN0eWxlcywgdmFyTmFtZSwgdmFsdWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyB4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBSaXBwbGVNaXhpbiA9IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMucmlwcGxlID0gbmV3IFJpcHBsZUJhc2UodGhpcylcbiAgICB0aGlzLnJpcHBsZS5pbml0KClcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnJpcHBsZS5kZXN0cm95KClcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICA8Y3VzdG9tLWVsZW1lbnQgXG4gICAgOnRhZz1cInRhZ1wiIFxuICAgIDpjbGFzc2VzPVwiY2xhc3Nlc1wiXG4gICAgOnN0eWxlcz1cInN0eWxlc1wiIFxuICAgIGNsYXNzPVwibWRjLXJpcHBsZVwiPlxuICAgIDxzbG90IC8+XG4gIDwvY3VzdG9tLWVsZW1lbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudE1peGluIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IFJpcHBsZU1peGluIH0gZnJvbSAnLi9tZGMtcmlwcGxlLWJhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1yaXBwbGUnLFxuICBtaXhpbnM6IFtDdXN0b21FbGVtZW50TWl4aW4sIFJpcHBsZU1peGluXSxcbiAgcHJvcHM6IHtcbiAgICB0YWc6IFN0cmluZ1xuICB9XG59XG48L3NjcmlwdD5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudChjb21waWxlZFRlbXBsYXRlLCBpbmplY3RTdHlsZSwgZGVmYXVsdEV4cG9ydCwgc2NvcGVJZCwgaXNGdW5jdGlvbmFsVGVtcGxhdGUsIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi8sIGlzU2hhZG93TW9kZSwgY3JlYXRlSW5qZWN0b3IsIGNyZWF0ZUluamVjdG9yU1NSLCBjcmVhdGVJbmplY3RvclNoYWRvdykge1xuICAgIGlmICh0eXBlb2YgaXNTaGFkb3dNb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNyZWF0ZUluamVjdG9yU1NSID0gY3JlYXRlSW5qZWN0b3I7XG4gICAgICAgIGNyZWF0ZUluamVjdG9yID0gaXNTaGFkb3dNb2RlO1xuICAgICAgICBpc1NoYWRvd01vZGUgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICAgIGNvbnN0IG9wdGlvbnMgPSB0eXBlb2YgZGVmYXVsdEV4cG9ydCA9PT0gJ2Z1bmN0aW9uJyA/IGRlZmF1bHRFeHBvcnQub3B0aW9ucyA6IGRlZmF1bHRFeHBvcnQ7XG4gICAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICAgIGlmIChjb21waWxlZFRlbXBsYXRlICYmIGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyKSB7XG4gICAgICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXI7XG4gICAgICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnM7XG4gICAgICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICAgICAgICBpZiAoaXNGdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gc2NvcGVkSWRcbiAgICBpZiAoc2NvcGVJZCkge1xuICAgICAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZDtcbiAgICB9XG4gICAgbGV0IGhvb2s7XG4gICAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgLy8gc2VydmVyIGJ1aWxkXG4gICAgICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgICAgICAgY29udGV4dCA9XG4gICAgICAgICAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAgICAgICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCk7IC8vIGZ1bmN0aW9uYWxcbiAgICAgICAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgICAgICAgIGlmIChpbmplY3RTdHlsZSkge1xuICAgICAgICAgICAgICAgIGluamVjdFN0eWxlLmNhbGwodGhpcywgY3JlYXRlSW5qZWN0b3JTU1IoY29udGV4dCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcmVuY2VcbiAgICAgICAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgICAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgICAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2s7XG4gICAgfVxuICAgIGVsc2UgaWYgKGluamVjdFN0eWxlKSB7XG4gICAgICAgIGhvb2sgPSBpc1NoYWRvd01vZGVcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGluamVjdFN0eWxlLmNhbGwodGhpcywgY3JlYXRlSW5qZWN0b3JTaGFkb3codGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3Rvcihjb250ZXh0KSk7XG4gICAgICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoaG9vaykge1xuICAgICAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAgICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXI7XG4gICAgICAgICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbihoLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0RXhwb3J0O1xufVxuIiwiPHRlbXBsYXRlPlxuICA8cCByZWY9XCJoZWxwdGV4dEVsXCIgOmNsYXNzPVwiY2xhc3Nlc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzbG90IC8+PC9wPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENTZWxlY3RIZWxwZXJUZXh0Rm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvc2VsZWN0L2hlbHBlci10ZXh0L2ZvdW5kYXRpb24uanMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3NlbGVjdC1oZWxwZXItdGV4dCcsXG4gIHByb3BzOiB7XG4gICAgaGVscHRleHRQZXJzaXN0ZW50OiBCb29sZWFuLFxuICAgIGhlbHB0ZXh0VmFsaWRhdGlvbjogQm9vbGVhblxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgICdtZGMtc2VsZWN0LWhlbHBlci10ZXh0JzogdHJ1ZSxcbiAgICAgICAgJ21kYy1zZWxlY3QtaGVscGVyLXRleHQtLXBlcnNpc3RlbnQnOiB0aGlzLmhlbHB0ZXh0UGVyc2lzdGVudCxcbiAgICAgICAgJ21kYy1zZWxlY3QtaGVscGVyLXRleHQtLXZhbGlkYXRpb24tbXNnJzogdGhpcy5oZWxwdGV4dFZhbGlkYXRpb25cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaGVscHRleHRQZXJzaXN0ZW50KCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldFBlcnNpc3RlbnQodGhpcy5oZWxwdGV4dFBlcnNpc3RlbnQpXG4gICAgfSxcbiAgICBoZWxwdGV4dFZhbGlkYXRpb24oKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0VmFsaWRhdGlvbih0aGlzLmhlbHB0ZXh0VmFsaWRhdGlvbilcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ1NlbGVjdEhlbHBlclRleHRGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKSxcbiAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZGVsZXRlKHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lKSxcblxuICAgICAgaGFzQ2xhc3M6IGNsYXNzTmFtZSA9PiBCb29sZWFuKHRoaXMuY2xhc3Nlc1tjbGFzc05hbWVdKSxcblxuICAgICAgc2V0QXR0cjogKGF0dHIsIHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuJGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgICAgIH0sXG4gICAgICByZW1vdmVBdHRyOiBhdHRyID0+IHtcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIpXG4gICAgICB9LFxuXG4gICAgICBzZXRDb250ZW50OiAoLypjb250ZW50Ki8pID0+IHtcbiAgICAgICAgLy8gaGVscCB0ZXh0IGdldCdzIHVwZGF0ZWQgZnJvbSB7e2hlbHB0ZXh0fX1cbiAgICAgICAgLy8gY2YuIHRoaXMuJGVsLnRleHRDb250ZW50ID0gY29udGVudFxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24uZGVzdHJveSgpXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8aSA6Y2xhc3M9XCJjbGFzc2VzXCIgdi1vbj1cIiRsaXN0ZW5lcnNcIiA6c3R5bGU9XCJzdHlsZXNcIiB2LWJpbmQ9XCIkYXR0cnNcIj5cbiAgICB7eyBpY29uIH19XG4gIDwvaT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTURDU2VsZWN0SWNvbkZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL3NlbGVjdC9pY29uL2ZvdW5kYXRpb24uanMnXG5pbXBvcnQgeyBlbWl0Q3VzdG9tRXZlbnQgfSBmcm9tICcuLi9iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdzZWxlY3QtaWNvbicsXG4gIHByb3BzOiB7XG4gICAgaWNvbjogU3RyaW5nXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgJ21hdGVyaWFsLWljb25zJzogdHJ1ZSxcbiAgICAgICAgJ21kYy1zZWxlY3RfX2ljb24nOiB0cnVlXG4gICAgICB9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENTZWxlY3RJY29uRm91bmRhdGlvbihcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBnZXRBdHRyOiBhdHRyID0+IHRoaXMuJGVsLmdldEF0dHJpYnV0ZShhdHRyKSxcbiAgICAgICAgc2V0QXR0cjogKGF0dHIsIHZhbHVlKSA9PiB0aGlzLiRlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpLFxuICAgICAgICByZW1vdmVBdHRyOiBhdHRyID0+IHRoaXMuJGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyKSxcbiAgICAgICAgc2V0Q29udGVudDogY29udGVudCA9PiB7XG4gICAgICAgICAgdGhpcy4kZWwudGV4dENvbnRlbnQgPSBjb250ZW50XG4gICAgICAgIH0sXG4gICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICB0aGlzLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgICAgICBub3RpZnlJY29uQWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKVxuXG4gICAgICAgICAgZW1pdEN1c3RvbUV2ZW50KFxuICAgICAgICAgICAgdGhpcy4kZWwsXG4gICAgICAgICAgICBNRENTZWxlY3RJY29uRm91bmRhdGlvbi5zdHJpbmdzLklDT05fRVZFTlQsXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIHRydWUgLyogc2hvdWxkQnViYmxlICAqL1xuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApXG5cbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24uZGVzdHJveSgpXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxkaXYgcmVmPVwicm9vdFwiIDppZD1cImlkXCIgOmNsYXNzPVwicm9vdENsYXNzZXNcIiA6c3R5bGU9XCJzdHlsZXNcIj5cbiAgICAgIDxzZWxlY3QtaWNvblxuICAgICAgICByZWY9XCJsZWFkaW5nSWNvbkVsXCJcbiAgICAgICAgdi1pZj1cImxlYWRpbmdJY29uXCJcbiAgICAgICAgOmljb249XCJsZWFkaW5nSWNvblwiXG4gICAgICAgIHRhYi1pbmRleD1cIjBcIlxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgID48L3NlbGVjdC1pY29uPlxuICAgICAgPGkgY2xhc3M9XCJtZGMtc2VsZWN0X19kcm9wZG93bi1pY29uXCI+PC9pPlxuICAgICAgPHNlbGVjdFxuICAgICAgICByZWY9XCJuYXRpdmVfY29udHJvbFwiXG4gICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgICAgdi1iaW5kPVwiJGF0dHJzXCJcbiAgICAgICAgY2xhc3M9XCJtZGMtc2VsZWN0X19uYXRpdmUtY29udHJvbFwiXG4gICAgICAgIDphcmlhLWNvbnRyb2xzPVwic2VsZWN0QXJpYUNvbnRyb2xzXCJcbiAgICAgICAgdi1vbj1cImxpc3RlbmVyc1wiXG4gICAgICA+XG4gICAgICAgIDxvcHRpb24gdi1pZj1cIiF2YWx1ZVwiIGNsYXNzPVwibWRjLW9wdGlvblwiIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQgLz5cbiAgICAgICAgPHNsb3QgLz5cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPG1kYy1mbG9hdGluZy1sYWJlbCB2LWlmPVwiIW91dGxpbmVkXCIgcmVmPVwibGFiZWxFbFwiPnt7XG4gICAgICAgIGxhYmVsXG4gICAgICB9fTwvbWRjLWZsb2F0aW5nLWxhYmVsPlxuICAgICAgPG1kYy1saW5lLXJpcHBsZSB2LWlmPVwiIW91dGxpbmVkXCIgcmVmPVwibGluZVJpcHBsZUVsXCIgLz5cbiAgICAgIDxtZGMtbm90Y2hlZC1vdXRsaW5lIHYtaWY9XCJvdXRsaW5lZFwiIHJlZj1cIm91dGxpbmVFbFwiPnt7XG4gICAgICAgIGxhYmVsXG4gICAgICB9fTwvbWRjLW5vdGNoZWQtb3V0bGluZT5cbiAgICA8L2Rpdj5cblxuICAgIDxzZWxlY3QtaGVscGVyLXRleHRcbiAgICAgIDpoZWxwdGV4dFBlcnNpc3RlbnQ9XCJoZWxwdGV4dFBlcnNpc3RlbnRcIlxuICAgICAgOmhlbHB0ZXh0VmFsaWRhdGlvbj1cImhlbHB0ZXh0VmFsaWRhdGlvblwiXG4gICAgICByZWY9XCJoZWxwZXJ0ZXh0RWxcIlxuICAgICAgdi1pZj1cImhlbHB0ZXh0XCJcbiAgICAgIDppZD1cIidoZWxwLScgKyB2bWFfdWlkX1wiXG4gICAgPlxuICAgICAge3sgaGVscHRleHQgfX1cbiAgICA8L3NlbGVjdC1oZWxwZXItdGV4dD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1EQ1NlbGVjdEZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL3NlbGVjdC9mb3VuZGF0aW9uJ1xuaW1wb3J0IHsgUmlwcGxlQmFzZSB9IGZyb20gJy4uL3JpcHBsZSdcbmltcG9ydCBTZWxlY3RIZWxwZXJUZXh0IGZyb20gJy4vc2VsZWN0LWhlbHBlci10ZXh0LnZ1ZSdcblxuaW1wb3J0IFNlbGVjdEljb24gZnJvbSAnLi9zZWxlY3QtaWNvbi52dWUnXG5pbXBvcnQgeyBlbWl0Q3VzdG9tRXZlbnQsIFZNQVVuaXF1ZUlkTWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtc2VsZWN0JyxcbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcbiAgbW9kZWw6IHtcbiAgICBwcm9wOiAndmFsdWUnLFxuICAgIGV2ZW50OiAnY2hhbmdlJ1xuICB9LFxuICBwcm9wczoge1xuICAgIHZhbHVlOiBTdHJpbmcsXG4gICAgaGVscHRleHQ6IFN0cmluZyxcblxuICAgIGxlYWRpbmdJY29uOiBTdHJpbmcsXG4gICAgaWNvbjogU3RyaW5nLFxuICAgIGhlbHB0ZXh0UGVyc2lzdGVudDogQm9vbGVhbixcbiAgICBoZWxwdGV4dFZhbGlkYXRpb246IEJvb2xlYW4sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgICBvdXRsaW5lZDogQm9vbGVhbixcbiAgICBpZDogeyB0eXBlOiBTdHJpbmcgfVxuICB9LFxuICBtaXhpbnM6IFtWTUFVbmlxdWVJZE1peGluXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3R5bGVzOiB7fSxcbiAgICAgIGNsYXNzZXM6IHt9XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudHM6IHsgU2VsZWN0SGVscGVyVGV4dCwgU2VsZWN0SWNvbiB9LFxuICBjb21wdXRlZDoge1xuICAgIHJvb3RDbGFzc2VzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ21kYy1zZWxlY3QnOiB0cnVlLFxuICAgICAgICAnbWRjLXNlbGVjdC0tb3V0bGluZWQnOiB0aGlzLm91dGxpbmVkLFxuXG4gICAgICAgICdtZGMtc2VsZWN0LS13aXRoLWxlYWRpbmctaWNvbic6IHRoaXMubGVhZGluZ0ljb24sXG4gICAgICAgIC4uLnRoaXMuY2xhc3Nlc1xuICAgICAgfVxuICAgIH0sXG4gICAgbGlzdGVuZXJzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy4kbGlzdGVuZXJzLFxuICAgICAgICBjaGFuZ2U6IGV2ZW50ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KSxcbiAgICAgICAgYmx1cjogZXZlbnQgPT4gdGhpcy5oYW5kbGVCbHVyKGV2ZW50KSxcbiAgICAgICAgZm9jdXM6IGV2ZW50ID0+IHRoaXMuaGFuZGxlRm9jdXMoZXZlbnQpLFxuICAgICAgICBtb3VzZWRvd246IGV2ZW50ID0+IHRoaXMuaGFuZGxlQ2xpY2soZXZlbnQpLFxuICAgICAgICB0b3VjaHN0YXJ0OiBldmVudCA9PiB0aGlzLmhhbmRsZUNsaWNrKGV2ZW50KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzZWxlY3RBcmlhQ29udHJvbHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oZWxwdGV4dCA/ICdoZWxwLScgKyB0aGlzLnZtYV91aWRfIDogdW5kZWZpbmVkXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGRpc2FibGVkKHZhbHVlKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24gJiYgdGhpcy5mb3VuZGF0aW9uLnVwZGF0ZURpc2FibGVkU3R5bGUodmFsdWUpXG4gICAgfSxcbiAgICB2YWx1ZTogJ3JlZnJlc2hJbmRleCdcbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENTZWxlY3RGb3VuZGF0aW9uKFxuICAgICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIC8vIGNvbW1vbiBtZXRob2RzXG4gICAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKSxcbiAgICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRkZWxldGUodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUpLFxuICAgICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IEJvb2xlYW4odGhpcy5jbGFzc2VzW2NsYXNzTmFtZV0pLFxuICAgICAgICBzZXRSaXBwbGVDZW50ZXI6IG5vcm1hbGl6ZWRYID0+XG4gICAgICAgICAgdGhpcy4kcmVmcy5saW5lUmlwcGxlRWwgJiZcbiAgICAgICAgICB0aGlzLiRyZWZzLmxpbmVSaXBwbGVFbC5zZXRSaXBwbGVDZW50ZXIobm9ybWFsaXplZFgpLFxuICAgICAgICBhY3RpdmF0ZUJvdHRvbUxpbmU6ICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy4kcmVmcy5saW5lUmlwcGxlRWwpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMubGluZVJpcHBsZUVsLmZvdW5kYXRpb24uYWN0aXZhdGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVhY3RpdmF0ZUJvdHRvbUxpbmU6ICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy4kcmVmcy5saW5lUmlwcGxlRWwpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMubGluZVJpcHBsZUVsLmZvdW5kYXRpb24uZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG5vdGlmeUNoYW5nZTogdmFsdWUgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4XG4gICAgICAgICAgZW1pdEN1c3RvbUV2ZW50KFxuICAgICAgICAgICAgdGhpcy4kcmVmcy5yb290LFxuICAgICAgICAgICAgTURDU2VsZWN0Rm91bmRhdGlvbi5zdHJpbmdzLkNIQU5HRV9FVkVOVCxcbiAgICAgICAgICAgIHsgdmFsdWUsIGluZGV4IH0sXG4gICAgICAgICAgICB0cnVlIC8qIHNob3VsZEJ1YmJsZSAgKi9cbiAgICAgICAgICApXG5cbiAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB2YWx1ZSlcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBuYXRpdmUgbWV0aG9kc1xuICAgICAgICBnZXRWYWx1ZTogKCkgPT4gdGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbC52YWx1ZSxcbiAgICAgICAgc2V0VmFsdWU6IHZhbHVlID0+ICh0aGlzLiRyZWZzLm5hdGl2ZV9jb250cm9sLnZhbHVlID0gdmFsdWUpLFxuICAgICAgICBvcGVuTWVudTogKCkgPT4ge30sXG4gICAgICAgIGNsb3NlTWVudTogKCkgPT4ge30sXG4gICAgICAgIGlzTWVudU9wZW46ICgpID0+IGZhbHNlLFxuICAgICAgICBzZXRTZWxlY3RlZEluZGV4OiBpbmRleCA9PiB7XG4gICAgICAgICAgdGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbC5zZWxlY3RlZEluZGV4ID0gaW5kZXhcbiAgICAgICAgfSxcbiAgICAgICAgc2V0RGlzYWJsZWQ6IGlzRGlzYWJsZWQgPT5cbiAgICAgICAgICAodGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbC5kaXNhYmxlZCA9IGlzRGlzYWJsZWQpLFxuICAgICAgICBzZXRWYWxpZDogaXNWYWxpZCA9PiB7XG4gICAgICAgICAgaXNWYWxpZFxuICAgICAgICAgICAgPyB0aGlzLiRkZWxldGUodGhpcy5jbGFzc2VzLCBNRENTZWxlY3RGb3VuZGF0aW9uLmNzc0NsYXNzZXMuSU5WQUxJRClcbiAgICAgICAgICAgIDogdGhpcy5zZXQodGhpcy5jbGFzc2VzLCBNRENTZWxlY3RGb3VuZGF0aW9uLmNzc0NsYXNzZXMuSU5WQUxJRClcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tWYWxpZGl0eTogKCkgPT4gdGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbC5jaGVja1ZhbGlkaXR5KCksXG5cbiAgICAgICAgLy8gb3V0bGluZSBtZXRob2RzXG5cbiAgICAgICAgaGFzT3V0bGluZTogKCkgPT4gdGhpcy5vdXRsaW5lZCxcbiAgICAgICAgbm90Y2hPdXRsaW5lOiBsYWJlbFdpZHRoID0+IHtcbiAgICAgICAgICBpZiAodGhpcy4kcmVmcy5vdXRsaW5lRWwpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMub3V0bGluZUVsLm5vdGNoKGxhYmVsV2lkdGgpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjbG9zZU91dGxpbmU6ICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy4kcmVmcy5vdXRsaW5lRWwpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMub3V0bGluZUVsLmNsb3NlTm90Y2goKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBsYWJlbCBtZXRob2RzXG4gICAgICAgIGZsb2F0TGFiZWw6IHZhbHVlID0+IHtcbiAgICAgICAgICBpZiAodGhpcy4kcmVmcy5sYWJlbEVsKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLmxhYmVsRWwuZmxvYXQodmFsdWUpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMub3V0bGluZUVsLmZsb2F0KHZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBnZXRMYWJlbFdpZHRoOiAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuJHJlZnMubGFiZWxFbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMubGFiZWxFbC5nZXRXaWR0aCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgaGVscGVyVGV4dDogdGhpcy4kcmVmcy5oZWxwZXJ0ZXh0RWxcbiAgICAgICAgICA/IHRoaXMuJHJlZnMuaGVscGVydGV4dEVsLmZvdW5kYXRpb25cbiAgICAgICAgICA6IHZvaWQgMCxcblxuICAgICAgICBsZWFkaW5nSWNvbjogdGhpcy4kcmVmcy5sZWFkaW5nSWNvbkVsXG4gICAgICAgICAgPyB0aGlzLiRyZWZzLmxlYWRpbmdJY29uRWwuZm91bmRhdGlvblxuICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVDaGFuZ2UoZmFsc2UpXG5cbiAgICAvLyBpbml0aWFsIHN5bmMgd2l0aCBET01cbiAgICB0aGlzLnJlZnJlc2hJbmRleCgpXG4gICAgdGhpcy5zbG90T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB0aGlzLnJlZnJlc2hJbmRleCgpKVxuICAgIHRoaXMuc2xvdE9ic2VydmVyLm9ic2VydmUodGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbCwge1xuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgc3VidHJlZTogdHJ1ZVxuICAgIH0pXG5cbiAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnNsb3RPYnNlcnZlci5kaXNjb25uZWN0KClcblxuICAgIGxldCBmb3VuZGF0aW9uID0gdGhpcy5mb3VuZGF0aW9uXG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbnVsbFxuICAgIGZvdW5kYXRpb24uZGVzdHJveSgpXG5cbiAgICB0aGlzLnJpcHBsZSAmJiB0aGlzLnJpcHBsZS5kZXN0cm95KClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlQ2hhbmdlKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUNoYW5nZSh0cnVlKVxuICAgIH0sXG5cbiAgICBoYW5kbGVGb2N1cygpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVGb2N1cygpXG4gICAgfSxcblxuICAgIGhhbmRsZUJsdXIoKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlQmx1cigpXG4gICAgfSxcblxuICAgIGhhbmRsZUNsaWNrKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUNsaWNrKHRoaXMuZ2V0Tm9ybWFsaXplZFhDb29yZGluYXRlKGV2dCkpXG4gICAgfSxcbiAgICByZWZyZXNoSW5kZXgoKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0gWy4uLnRoaXMuJHJlZnMubmF0aXZlX2NvbnRyb2wucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyldXG5cbiAgICAgIGNvbnN0IGlkeCA9IG9wdGlvbnMuZmluZEluZGV4KCh7IHZhbHVlIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IHZhbHVlXG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbC5zZWxlY3RlZEluZGV4ICE9PSBpZHgpIHtcbiAgICAgICAgdGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbC5zZWxlY3RlZEluZGV4ID0gaWR4XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVDaGFuZ2UoZmFsc2UpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGdldE5vcm1hbGl6ZWRYQ29vcmRpbmF0ZShldnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldENsaWVudFJlY3QgPSBldnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBjb25zdCB4Q29vcmRpbmF0ZSA9IGV2dC5jbGllbnRYXG4gICAgICByZXR1cm4geENvb3JkaW5hdGUgLSB0YXJnZXRDbGllbnRSZWN0LmxlZnRcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgbWRjU2VsZWN0IGZyb20gJy4vbWRjLXNlbGVjdC52dWUnXG5cbmV4cG9ydCB7IG1kY1NlbGVjdCB9XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VQbHVnaW4oe1xuICBtZGNTZWxlY3Rcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJDdXN0b21FbGVtZW50IiwiZnVuY3Rpb25hbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwicHJvcHMiLCJpcyIsInRhZyIsImRhdGEiLCJjaGlsZHJlbiIsIkN1c3RvbUVsZW1lbnRNaXhpbiIsImVtaXRDdXN0b21FdmVudCIsImVsIiwiZXZ0VHlwZSIsImV2dERhdGEiLCJzaG91bGRCdWJibGUiLCJldnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImJ1YmJsZXMiLCJkb2N1bWVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInNjb3BlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJWTUFVbmlxdWVJZE1peGluIiwiYmVmb3JlQ3JlYXRlIiwidm1hX3VpZF8iLCJfdWlkIiwiTURDRm91bmRhdGlvbiIsImFkYXB0ZXIiLCJhZGFwdGVyXyIsIk1EQ0NvbXBvbmVudCIsInJvb3QiLCJmb3VuZGF0aW9uIiwidW5kZWZpbmVkIiwicm9vdF8iLCJhcmdzIiwiaW5pdGlhbGl6ZSIsImZvdW5kYXRpb25fIiwiZ2V0RGVmYXVsdEZvdW5kYXRpb24iLCJpbml0IiwiaW5pdGlhbFN5bmNXaXRoRE9NIiwiRXJyb3IiLCJkZXN0cm95IiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTURDU2VsZWN0SWNvbkFkYXB0ZXIiLCJhdHRyIiwidmFsdWUiLCJjb250ZW50Iiwic3RyaW5ncyIsIklDT05fRVZFTlQiLCJJQ09OX1JPTEUiLCJNRENTZWxlY3RJY29uRm91bmRhdGlvbiIsImdldEF0dHIiLCJzZXRBdHRyIiwicmVtb3ZlQXR0ciIsInNldENvbnRlbnQiLCJyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJub3RpZnlJY29uQWN0aW9uIiwiZGVmYXVsdEFkYXB0ZXIiLCJzYXZlZFRhYkluZGV4XyIsImludGVyYWN0aW9uSGFuZGxlcl8iLCJoYW5kbGVJbnRlcmFjdGlvbiIsImZvckVhY2giLCJkaXNhYmxlZCIsImxhYmVsIiwidHlwZSIsImtleUNvZGUiLCJNRENTZWxlY3RJY29uIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJlbWl0IiwiTURDU2VsZWN0SGVscGVyVGV4dEFkYXB0ZXIiLCJjbGFzc05hbWUiLCJBUklBX0hJRERFTiIsIlJPTEUiLCJjc3NDbGFzc2VzIiwiSEVMUEVSX1RFWFRfUEVSU0lTVEVOVCIsIkhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHIiwiTURDU2VsZWN0SGVscGVyVGV4dEZvdW5kYXRpb24iLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJpc1BlcnNpc3RlbnQiLCJpc1ZhbGlkYXRpb24iLCJzZWxlY3RJc1ZhbGlkIiwiaGVscGVyVGV4dElzUGVyc2lzdGVudCIsImhlbHBlclRleHRJc1ZhbGlkYXRpb25Nc2ciLCJ2YWxpZGF0aW9uTXNnTmVlZHNEaXNwbGF5IiwiaGlkZV8iLCJNRENTZWxlY3RIZWxwZXJUZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY29udGFpbnMiLCJNRENTZWxlY3RBZGFwdGVyIiwic2hvdWxkRmxvYXQiLCJsYWJlbFdpZHRoIiwiaW5kZXgiLCJpc0Rpc2FibGVkIiwibm9ybWFsaXplZFgiLCJpc1ZhbGlkIiwiRElTQUJMRUQiLCJST09UIiwiT1VUTElORUQiLCJGT0NVU0VEIiwiU0VMRUNURURfSVRFTV9DTEFTUyIsIldJVEhfTEVBRElOR19JQ09OIiwiSU5WQUxJRCIsIlJFUVVJUkVEIiwiQVJJQV9DT05UUk9MUyIsIkNIQU5HRV9FVkVOVCIsIlNFTEVDVEVEX0lURU1fU0VMRUNUT1IiLCJMRUFESU5HX0lDT05fU0VMRUNUT1IiLCJTRUxFQ1RFRF9URVhUX1NFTEVDVE9SIiwiSElEREVOX0lOUFVUX1NFTEVDVE9SIiwiTUVOVV9TRUxFQ1RPUiIsIkxJTkVfUklQUExFX1NFTEVDVE9SIiwiTEFCRUxfU0VMRUNUT1IiLCJOQVRJVkVfQ09OVFJPTF9TRUxFQ1RPUiIsIk9VVExJTkVfU0VMRUNUT1IiLCJFTkhBTkNFRF9WQUxVRV9BVFRSIiwiQVJJQV9TRUxFQ1RFRF9BVFRSIiwibnVtYmVycyIsIkxBQkVMX1NDQUxFIiwiTURDU2VsZWN0Rm91bmRhdGlvbiIsImFjdGl2YXRlQm90dG9tTGluZSIsImRlYWN0aXZhdGVCb3R0b21MaW5lIiwic2V0VmFsdWUiLCJnZXRWYWx1ZSIsImZsb2F0TGFiZWwiLCJnZXRMYWJlbFdpZHRoIiwiaGFzT3V0bGluZSIsIm5vdGNoT3V0bGluZSIsImNsb3NlT3V0bGluZSIsIm9wZW5NZW51IiwiY2xvc2VNZW51IiwiaXNNZW51T3BlbiIsInNldFNlbGVjdGVkSW5kZXgiLCJzZXREaXNhYmxlZCIsInNldFJpcHBsZUNlbnRlciIsIm5vdGlmeUNoYW5nZSIsImNoZWNrVmFsaWRpdHkiLCJzZXRWYWxpZCIsImZvdW5kYXRpb25NYXAiLCJsZWFkaW5nSWNvbl8iLCJsZWFkaW5nSWNvbiIsImhlbHBlclRleHRfIiwiaGVscGVyVGV4dCIsImRpZENoYW5nZSIsImhhbmRsZUNoYW5nZSIsIm9wZW5Ob3RjaCIsImxlbmd0aCIsIm9wdGlvbkhhc1ZhbHVlIiwiaXNSZXF1aXJlZCIsInNldFZhbGlkaXR5Iiwic2hvd1RvU2NyZWVuUmVhZGVyIiwiZXZlbnQiLCJpc0VudGVyIiwiaXNTcGFjZSIsImFycm93VXAiLCJhcnJvd0Rvd24iLCJwcmV2ZW50RGVmYXVsdCIsImlzRm9jdXNlZCIsImxhYmVsU2NhbGUiLCJzZXRBcmlhTGFiZWwiLCJNRENSaXBwbGVBZGFwdGVyIiwidGFyZ2V0IiwidmFyTmFtZSIsIlVOQk9VTkRFRCIsIkJHX0ZPQ1VTRUQiLCJGR19BQ1RJVkFUSU9OIiwiRkdfREVBQ1RJVkFUSU9OIiwiVkFSX0xFRlQiLCJWQVJfVE9QIiwiVkFSX0ZHX1NJWkUiLCJWQVJfRkdfU0NBTEUiLCJWQVJfRkdfVFJBTlNMQVRFX1NUQVJUIiwiVkFSX0ZHX1RSQU5TTEFURV9FTkQiLCJQQURESU5HIiwiSU5JVElBTF9PUklHSU5fU0NBTEUiLCJERUFDVElWQVRJT05fVElNRU9VVF9NUyIsIkZHX0RFQUNUSVZBVElPTl9NUyIsIlRBUF9ERUxBWV9NUyIsInN1cHBvcnRzQ3NzVmFyaWFibGVzXyIsInN1cHBvcnRzUGFzc2l2ZV8iLCJkZXRlY3RFZGdlUHNldWRvVmFyQnVnIiwid2luZG93T2JqIiwibm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaGFzUHNldWRvVmFyQnVnIiwiYm9yZGVyVG9wU3R5bGUiLCJzdXBwb3J0c0Nzc1ZhcmlhYmxlcyIsImZvcmNlUmVmcmVzaCIsInN1cHBvcnRzRnVuY3Rpb25QcmVzZW50IiwiQ1NTIiwic3VwcG9ydHMiLCJleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIiwid2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzIiwiYXBwbHlQYXNzaXZlIiwiZ2xvYmFsT2JqIiwiaXNTdXBwb3J0ZWQiLCJwYXNzaXZlIiwiZSIsImdldE1hdGNoZXNQcm9wZXJ0eSIsIkhUTUxFbGVtZW50UHJvdG90eXBlIiwibWF0Y2hlc01ldGhvZHMiLCJtZXRob2QiLCJpIiwibWF0Y2hlc01ldGhvZCIsImdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyIsImV2IiwicGFnZU9mZnNldCIsImNsaWVudFJlY3QiLCJ4IiwieSIsImRvY3VtZW50WCIsImxlZnQiLCJkb2N1bWVudFkiLCJ0b3AiLCJub3JtYWxpemVkWSIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIkFDVElWQVRJT05fRVZFTlRfVFlQRVMiLCJQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyIsImFjdGl2YXRlZFRhcmdldHMiLCJNRENSaXBwbGVGb3VuZGF0aW9uIiwiYnJvd3NlclN1cHBvcnRzQ3NzVmFycyIsImlzVW5ib3VuZGVkIiwiaXNTdXJmYWNlQWN0aXZlIiwiaXNTdXJmYWNlRGlzYWJsZWQiLCJjb250YWluc0V2ZW50VGFyZ2V0IiwicmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyUmVzaXplSGFuZGxlciIsImRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwidXBkYXRlQ3NzVmFyaWFibGUiLCJjb21wdXRlQm91bmRpbmdSZWN0IiwiZ2V0V2luZG93UGFnZU9mZnNldCIsImxheW91dEZyYW1lXyIsImZyYW1lXyIsIndpZHRoIiwiaGVpZ2h0IiwiYWN0aXZhdGlvblN0YXRlXyIsImRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfIiwiaW5pdGlhbFNpemVfIiwibWF4UmFkaXVzXyIsImFjdGl2YXRlSGFuZGxlcl8iLCJhY3RpdmF0ZV8iLCJkZWFjdGl2YXRlSGFuZGxlcl8iLCJkZWFjdGl2YXRlXyIsImZvY3VzSGFuZGxlcl8iLCJoYW5kbGVGb2N1cyIsImJsdXJIYW5kbGVyXyIsImhhbmRsZUJsdXIiLCJyZXNpemVIYW5kbGVyXyIsImxheW91dCIsInVuYm91bmRlZENvb3Jkc18iLCJmZ1NjYWxlXyIsImFjdGl2YXRpb25UaW1lcl8iLCJmZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8iLCJhY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfIiwiYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfIiwicnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfIiwicHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfIiwiaXNBY3RpdmF0ZWQiLCJoYXNEZWFjdGl2YXRpb25VWFJ1biIsIndhc0FjdGl2YXRlZEJ5UG9pbnRlciIsIndhc0VsZW1lbnRNYWRlQWN0aXZlIiwiYWN0aXZhdGlvbkV2ZW50IiwiaXNQcm9ncmFtbWF0aWMiLCJzdXBwb3J0c1ByZXNzUmlwcGxlIiwic3VwcG9ydHNQcmVzc1JpcHBsZV8iLCJyZWdpc3RlclJvb3RIYW5kbGVyc18iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsYXlvdXRJbnRlcm5hbF8iLCJjbGVhclRpbWVvdXQiLCJyZW1vdmVDc3NWYXJzXyIsImRlcmVnaXN0ZXJSb290SGFuZGxlcnNfIiwiZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyIsIk9iamVjdCIsImtleXMiLCJrIiwiaW5kZXhPZiIsImFjdGl2YXRpb25TdGF0ZSIsInByZXZpb3VzQWN0aXZhdGlvbkV2ZW50IiwiaXNTYW1lSW50ZXJhY3Rpb24iLCJoYXNBY3RpdmF0ZWRDaGlsZCIsInNvbWUiLCJyZXNldEFjdGl2YXRpb25TdGF0ZV8iLCJwdXNoIiwicmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18iLCJjaGVja0VsZW1lbnRNYWRlQWN0aXZlXyIsImFuaW1hdGVBY3RpdmF0aW9uXyIsInRyYW5zbGF0ZVN0YXJ0IiwidHJhbnNsYXRlRW5kIiwiZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXyIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXyIsInNldFRpbWVvdXQiLCJhY3RpdmF0aW9uSGFzRW5kZWQiLCJzdGF0ZSIsImFuaW1hdGVEZWFjdGl2YXRpb25fIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtYXhEaW0iLCJtYXgiLCJnZXRCb3VuZGVkUmFkaXVzIiwiaHlwb3RlbnVzZSIsInNxcnQiLCJwb3ciLCJ1cGRhdGVMYXlvdXRDc3NWYXJzXyIsInJvdW5kIiwidW5ib3VuZGVkIiwiTURDUmlwcGxlIiwidW5ib3VuZGVkXyIsInNldFVuYm91bmRlZCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImNyZWF0ZUFkYXB0ZXIiLCJkYXRhc2V0IiwiQm9vbGVhbiIsInNldFVuYm91bmRlZF8iLCJyaXBwbGUiLCJpbnN0YW5jZSIsIk1BVENIRVMiLCJ1dGlsIiwiSFRNTEVsZW1lbnQiLCJwcm90b3R5cGUiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsIlJpcHBsZUNhcGFibGVTdXJmYWNlIiwiUmlwcGxlQmFzZSIsInJlZiIsIl9tYXRjaGVzIiwib3B0aW9ucyIsIiRlbCIsIiRzZXQiLCJjbGFzc2VzIiwiJGRlbGV0ZSIsInN0eWxlcyIsIlJpcHBsZU1peGluIiwibW91bnRlZCIsImJlZm9yZURlc3Ryb3kiLCJub3JtYWxpemVDb21wb25lbnQiLCJjb21waWxlZFRlbXBsYXRlIiwiaW5qZWN0U3R5bGUiLCJkZWZhdWx0RXhwb3J0Iiwic2NvcGVJZCIsImlzRnVuY3Rpb25hbFRlbXBsYXRlIiwibW9kdWxlSWRlbnRpZmllciIsImlzU2hhZG93TW9kZSIsImNyZWF0ZUluamVjdG9yIiwiY3JlYXRlSW5qZWN0b3JTU1IiLCJjcmVhdGVJbmplY3RvclNoYWRvdyIsInN0YXRpY1JlbmRlckZucyIsIl9jb21waWxlZCIsIl9zY29wZUlkIiwiaG9vayIsIiR2bm9kZSIsInNzckNvbnRleHQiLCJwYXJlbnQiLCJfX1ZVRV9TU1JfQ09OVEVYVF9fIiwiY2FsbCIsIl9yZWdpc3RlcmVkQ29tcG9uZW50cyIsIl9zc3JSZWdpc3RlciIsIiRyb290IiwiJG9wdGlvbnMiLCJzaGFkb3dSb290Iiwib3JpZ2luYWxSZW5kZXIiLCJyZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24iLCJoIiwiZXhpc3RpbmciLCJjb25jYXQiLCJzY3JpcHQiLCJtZGNTZWxlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtFQUMvQjtFQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztFQUNBLE1BQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztFQUNqQ0QsSUFBQUEsSUFBSSxHQUFHQyxNQUFNLENBQUNDLEdBQWQ7RUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0VBQ3hDO0VBQ0FILElBQUFBLElBQUksR0FBR0csTUFBTSxDQUFDRCxHQUFkO0VBQ0Q7O0VBQ0QsTUFBSUYsSUFBSixFQUFVO0VBQ1JBLElBQUFBLElBQUksQ0FBQ0ksR0FBTCxDQUFTTCxNQUFUO0VBQ0Q7RUFDRjs7RUNaTSxTQUFTTSxVQUFULENBQW9CQyxVQUFwQixFQUFnQztFQUNyQyxTQUFPO0VBQ0xDLElBQUFBLE9BQU8sRUFBRSxhQURKO0VBRUxDLElBQUFBLE9BQU8sRUFBRSxpQkFBQUMsRUFB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O0FBQ0EyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FBQTs7O0FBVkEsRUFFQTtFQUNBO0FBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQytDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUE7OztBQW5EQSxFQUVBO0VBQ0E7QUFDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0EsZUFBZWhaLFVBQVUsQ0FBQztFQUN4QmlaLEVBQUFBLFNBQVMsRUFBVEE7RUFEd0IsQ0FBRCxDQUF6Qjs7RUNBQXhaLFFBQVEsQ0FBQ0MsTUFBRCxDQUFSOzs7Ozs7OzsifQ==
