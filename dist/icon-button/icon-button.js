/**
* @module vue-mdc-adaptericon-button 0.19.0-beta
* @exports VueMDCIconButton
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueMDCIconButton = factory());
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
   * Adapter for MDC Icon Button Toggle. Provides an interface for managing
   * - classes
   * - dom
   * - inner text
   * - event handlers
   * - event dispatch
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
  var MDCIconButtonToggleAdapter =
  /*#__PURE__*/
  function () {
    function MDCIconButtonToggleAdapter() {
      _classCallCheck(this, MDCIconButtonToggleAdapter);
    }

    _createClass(MDCIconButtonToggleAdapter, [{
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
       * */

    }, {
      key: "hasClass",
      value: function hasClass(className) {}
      /**
       * @param {string} attrName
       * @param {string} attrValue
       */

    }, {
      key: "setAttr",
      value: function setAttr(attrName, attrValue) {}
      /** @param {!IconButtonToggleEvent} evtData */

    }, {
      key: "notifyChange",
      value: function notifyChange(evtData) {}
    }]);

    return MDCIconButtonToggleAdapter;
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
  var cssClasses = {
    ROOT: 'mdc-icon-button',
    ICON_BUTTON_ON: 'mdc-icon-button--on'
  };
  /** @enum {string} */

  var strings = {
    ARIA_PRESSED: 'aria-pressed',
    CHANGE_EVENT: 'MDCIconButtonToggle:change'
  };

  /**
   * @extends {MDCFoundation<!MDCIconButtonToggleAdapter>}
   */

  var MDCIconButtonToggleFoundation =
  /*#__PURE__*/
  function (_MDCFoundation) {
    _inherits(MDCIconButtonToggleFoundation, _MDCFoundation);

    _createClass(MDCIconButtonToggleFoundation, null, [{
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
      key: "defaultAdapter",
      get: function get() {
        return {
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          setAttr: function setAttr() {},
          notifyChange: function notifyChange() {}
        };
      }
    }]);

    function MDCIconButtonToggleFoundation(adapter) {
      var _this;

      _classCallCheck(this, MDCIconButtonToggleFoundation);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCIconButtonToggleFoundation).call(this, _extends(MDCIconButtonToggleFoundation.defaultAdapter, adapter)));
      /** @private {boolean} */

      _this.disabled_ = false;
      return _this;
    }

    _createClass(MDCIconButtonToggleFoundation, [{
      key: "init",
      value: function init() {
        this.adapter_.setAttr(strings.ARIA_PRESSED, "".concat(this.isOn()));
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        this.toggle();
        this.adapter_.notifyChange(
        /** @type {!IconButtonToggleEvent} */
        {
          isOn: this.isOn()
        });
      }
      /** @return {boolean} */

    }, {
      key: "isOn",
      value: function isOn() {
        return this.adapter_.hasClass(cssClasses.ICON_BUTTON_ON);
      }
      /** @param {boolean=} isOn */

    }, {
      key: "toggle",
      value: function toggle() {
        var isOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.isOn();

        if (isOn) {
          this.adapter_.addClass(cssClasses.ICON_BUTTON_ON);
        } else {
          this.adapter_.removeClass(cssClasses.ICON_BUTTON_ON);
        }

        this.adapter_.setAttr(strings.ARIA_PRESSED, "".concat(isOn));
      }
    }]);

    return MDCIconButtonToggleFoundation;
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
  var numbers = {
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
        return numbers;
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
          }, numbers.FG_DEACTIVATION_MS);
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
    name: 'mdc-icon-button',
    model: {
      prop: 'isOn',
      event: 'change'
    },
    props: {
      isOn: Boolean
    },
    data: function data() {
      return {
        classes: {},
        styles: {}
      };
    },
    watch: {
      isOn: 'onOn_'
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCIconButtonToggleFoundation({
        addClass: function addClass(className) {
          return _this.$set(_this.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this.$delete(_this.classes, className);
        },
        hasClass: function hasClass(className) {
          return _this.$el.classList.contains(className);
        },
        setAttr: function setAttr(attrName, attrValue) {
          return _this.$el.setAttribute(attrName, attrValue);
        },
        notifyChange: function notifyChange(evtData) {
          _this.$emit(MDCIconButtonToggleFoundation.strings.CHANGE_EVENT, evtData);

          _this.$emit('change', evtData.isOn);
        }
      });
      this.foundation.init();
      this.ripple = new RippleBase(this, {
        isUnbounded: function isUnbounded() {
          return true;
        }
      });
      this.ripple.init();
      this.foundation.toggle(this.isOn);
    },
    beforeDestroy: function beforeDestroy() {
      this.ripple.destroy();
      this.foundation.destroy();
    },
    methods: {
      onOn_: function onOn_(isOn) {
        if (this.isOn !== isOn) {
          this.foundation.toggle(isOn);
        }
      },
      onClick: function onClick(evt) {
        this.foundation.handleClick(evt);
      }
    },
    computed: {
      isLink: function isLink() {
        return this.$el && Boolean(this.$el.getAttribute('href'));
      }
    }
  };

  /* script */
  const __vue_script__$1 = script$1;
  // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
  script$1.__file = "/ddata/extra/vma/components/icon-button/mdc-icon-button.vue";

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.isLink
      ? _c(
          "a",
          _vm._b(
            {
              staticClass: "mdc-icon-button material-icons",
              class: _vm.classes,
              style: _vm.styles,
              on: { click: _vm.onClick }
            },
            "a",
            _vm.$attrs,
            false
          ),
          [_vm._t("default")],
          2
        )
      : _c(
          "button",
          _vm._b(
            {
              staticClass: "mdc-icon-button material-icons",
              class: _vm.classes,
              style: _vm.styles,
              on: { click: _vm.onClick }
            },
            "button",
            _vm.$attrs,
            false
          ),
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
    

    
    var mdcIconButton = normalizeComponent(
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
    mdcIconButton: mdcIconButton
  });

  autoInit(plugin);

  return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24uanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9hdXRvLWluaXQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYmFzZS1wbHVnaW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWVsZW1lbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWV2ZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2ljb24tYnV0dG9uL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2ljb24tYnV0dG9uL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvaWNvbi1idXR0b24vZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUtYmFzZS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUudnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1ydW50aW1lLWhlbHBlcnMvbm9ybWFsaXplLWNvbXBvbmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvaWNvbi1idXR0b24vbWRjLWljb24tYnV0dG9uLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvaWNvbi1idXR0b24vaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL2ljb24tYnV0dG9uL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHtcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIGNvbnRleHQucHJvcHMuaXMgfHwgY29udGV4dC5wcm9wcy50YWcgfHwgJ2RpdicsXG4gICAgICBjb250ZXh0LmRhdGEsXG4gICAgICBjb250ZXh0LmNoaWxkcmVuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50TWl4aW4gPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21FbGVtZW50XG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImNvbnN0IHNjb3BlID1cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigweDEwMDAwMDAwKSkudG9TdHJpbmcoKSArICctJ1xuXG5leHBvcnQgY29uc3QgVk1BVW5pcXVlSWRNaXhpbiA9IHtcbiAgYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMudm1hX3VpZF8gPSBzY29wZSArIHRoaXMuX3VpZFxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgQVxuICovXG5jbGFzcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bXtjc3NDbGFzc2VzfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17bnVtYmVyc30gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiB7IU9iamVjdH0gKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgLy8gdmFsaWRhdGlvbi5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciA9IHt9KSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFBfSAqL1xuICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBJY29uIEJ1dHRvbiBUb2dnbGUuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmdcbiAqIC0gY2xhc3Nlc1xuICogLSBkb21cbiAqIC0gaW5uZXIgdGV4dFxuICogLSBldmVudCBoYW5kbGVyc1xuICogLSBldmVudCBkaXNwYXRjaFxuICpcbiAqIEFkZGl0aW9uYWxseSwgcHJvdmlkZXMgdHlwZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGFkYXB0ZXIgdG8gdGhlIENsb3N1cmVcbiAqIGNvbXBpbGVyLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGFkYXB0ZXIgZm9yIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZSB0byBkZWxlZ2F0ZSB1cGRhdGVzIHRvXG4gKiB0aGUgY29tcG9uZW50IGluIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZS4gU2VlIGFyY2hpdGVjdHVyZSBkb2N1bWVudGF0aW9uXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9jb2RlL2FyY2hpdGVjdHVyZS5tZFxuICpcbiAqIEByZWNvcmRcbiAqL1xuXG5jbGFzcyBNRENJY29uQnV0dG9uVG9nZ2xlQWRhcHRlciB7XG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogKi9cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0ck5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJWYWx1ZVxuICAgKi9cbiAgc2V0QXR0cihhdHRyTmFtZSwgYXR0clZhbHVlKSB7fVxuXG4gIC8qKiBAcGFyYW0geyFJY29uQnV0dG9uVG9nZ2xlRXZlbnR9IGV2dERhdGEgKi9cbiAgbm90aWZ5Q2hhbmdlKGV2dERhdGEpIHt9XG59XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgaXNPbjogYm9vbGVhbixcbiAqIH19XG4gKi9cbmxldCBJY29uQnV0dG9uVG9nZ2xlRXZlbnQ7XG5cbmV4cG9ydCB7TURDSWNvbkJ1dHRvblRvZ2dsZUFkYXB0ZXIsIEljb25CdXR0b25Ub2dnbGVFdmVudH07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICBST09UOiAnbWRjLWljb24tYnV0dG9uJyxcbiAgSUNPTl9CVVRUT05fT046ICdtZGMtaWNvbi1idXR0b24tLW9uJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQVJJQV9QUkVTU0VEOiAnYXJpYS1wcmVzc2VkJyxcbiAgQ0hBTkdFX0VWRU5UOiAnTURDSWNvbkJ1dHRvblRvZ2dsZTpjaGFuZ2UnLFxufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ0ljb25CdXR0b25Ub2dnbGVBZGFwdGVyLCBJY29uQnV0dG9uVG9nZ2xlRXZlbnR9IGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDSWNvbkJ1dHRvblRvZ2dsZUFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBoYXNDbGFzczogKCkgPT4ge30sXG4gICAgICBzZXRBdHRyOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeUNoYW5nZTogKCkgPT4ge30sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ0ljb25CdXR0b25Ub2dnbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5kaXNhYmxlZF8gPSBmYWxzZTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKHN0cmluZ3MuQVJJQV9QUkVTU0VELCBgJHt0aGlzLmlzT24oKX1gKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDaGFuZ2UoLyoqIEB0eXBlIHshSWNvbkJ1dHRvblRvZ2dsZUV2ZW50fSAqLyAoe2lzT246IHRoaXMuaXNPbigpfSkpO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzT24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5JQ09OX0JVVFRPTl9PTik7XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFuPX0gaXNPbiAqL1xuICB0b2dnbGUoaXNPbiA9ICF0aGlzLmlzT24oKSkge1xuICAgIGlmIChpc09uKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuSUNPTl9CVVRUT05fT04pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuSUNPTl9CVVRUT05fT04pO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihzdHJpbmdzLkFSSUFfUFJFU1NFRCwgYCR7aXNPbn1gKTtcbiAgfVxufVxuXG4vKiogQHJlY29yZCAqL1xuY2xhc3MgSWNvbkJ1dHRvblRvZ2dsZVN0YXRlIHt9XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ljb25CdXR0b25Ub2dnbGVGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbi8qKlxuICogQHRlbXBsYXRlIEZcbiAqL1xuY2xhc3MgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ0NvbXBvbmVudH1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgLy8gU3ViY2xhc3NlcyB3aGljaCBleHRlbmQgTURDQmFzZSBzaG91bGQgcHJvdmlkZSBhbiBhdHRhY2hUbygpIG1ldGhvZCB0aGF0IHRha2VzIGEgcm9vdCBlbGVtZW50IGFuZFxuICAgIC8vIHJldHVybnMgYW4gaW5zdGFudGlhdGVkIGNvbXBvbmVudCB3aXRoIGl0cyByb290IHNldCB0byB0aGF0IGVsZW1lbnQuIEFsc28gbm90ZSB0aGF0IGluIHRoZSBjYXNlcyBvZlxuICAgIC8vIHN1YmNsYXNzZXMsIGFuIGV4cGxpY2l0IGZvdW5kYXRpb24gY2xhc3Mgd2lsbCBub3QgaGF2ZSB0byBiZSBwYXNzZWQgaW47IGl0IHdpbGwgc2ltcGx5IGJlIGluaXRpYWxpemVkXG4gICAgLy8gZnJvbSBnZXREZWZhdWx0Rm91bmRhdGlvbigpLlxuICAgIHJldHVybiBuZXcgTURDQ29tcG9uZW50KHJvb3QsIG5ldyBNRENGb3VuZGF0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHtGPX0gZm91bmRhdGlvblxuICAgKiBAcGFyYW0gey4uLj99IGFyZ3NcbiAgICovXG4gIGNvbnN0cnVjdG9yKHJvb3QsIGZvdW5kYXRpb24gPSB1bmRlZmluZWQsIC4uLmFyZ3MpIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG4gICAgdGhpcy5yb290XyA9IHJvb3Q7XG4gICAgdGhpcy5pbml0aWFsaXplKC4uLmFyZ3MpO1xuICAgIC8vIE5vdGUgdGhhdCB3ZSBpbml0aWFsaXplIGZvdW5kYXRpb24gaGVyZSBhbmQgbm90IHdpdGhpbiB0aGUgY29uc3RydWN0b3IncyBkZWZhdWx0IHBhcmFtIHNvIHRoYXRcbiAgICAvLyB0aGlzLnJvb3RfIGlzIGRlZmluZWQgYW5kIGNhbiBiZSB1c2VkIHdpdGhpbiB0aGUgZm91bmRhdGlvbiBjbGFzcy5cbiAgICAvKiogQHByb3RlY3RlZCB7IUZ9ICovXG4gICAgdGhpcy5mb3VuZGF0aW9uXyA9IGZvdW5kYXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSA6IGZvdW5kYXRpb247XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5pbml0KCk7XG4gICAgdGhpcy5pbml0aWFsU3luY1dpdGhET00oKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoLyogLi4uYXJncyAqLykge1xuICAgIC8vIFN1YmNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoaXMgdG8gZG8gYW55IGFkZGl0aW9uYWwgc2V0dXAgd29yayB0aGF0IHdvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiBhXG4gICAgLy8gXCJjb25zdHJ1Y3RvclwiLiBFc3NlbnRpYWxseSwgaXQgaXMgYSBob29rIGludG8gdGhlIHBhcmVudCBjb25zdHJ1Y3RvciBiZWZvcmUgdGhlIGZvdW5kYXRpb24gaXNcbiAgICAvLyBpbml0aWFsaXplZC4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIGJlc2lkZXMgcm9vdCBhbmQgZm91bmRhdGlvbiB3aWxsIGJlIHBhc3NlZCBpbiBoZXJlLlxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFGfSBmb3VuZGF0aW9uXG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCBmb3VuZGF0aW9uIGNsYXNzIGZvciB0aGVcbiAgICAvLyBjb21wb25lbnQuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgZ2V0RGVmYXVsdEZvdW5kYXRpb24gdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCAnICtcbiAgICAgICdmb3VuZGF0aW9uIGNsYXNzJyk7XG4gIH1cblxuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgdGhleSBuZWVkIHRvIHBlcmZvcm0gd29yayB0byBzeW5jaHJvbml6ZSB3aXRoIGEgaG9zdCBET01cbiAgICAvLyBvYmplY3QuIEFuIGV4YW1wbGUgb2YgdGhpcyB3b3VsZCBiZSBhIGZvcm0gY29udHJvbCB3cmFwcGVyIHRoYXQgbmVlZHMgdG8gc3luY2hyb25pemUgaXRzIGludGVybmFsIHN0YXRlXG4gICAgLy8gdG8gc29tZSBwcm9wZXJ0eSBvciBhdHRyaWJ1dGUgb2YgdGhlIGhvc3QgRE9NLiBQbGVhc2Ugbm90ZTogdGhpcyBpcyAqbm90KiB0aGUgcGxhY2UgdG8gcGVyZm9ybSBET01cbiAgICAvLyByZWFkcy93cml0ZXMgdGhhdCB3b3VsZCBjYXVzZSBsYXlvdXQgLyBwYWludCwgYXMgdGhpcyBpcyBjYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIHdpdGhpbiB0aGUgY29uc3RydWN0b3IuXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgbWF5IGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZWxlYXNlIGFueSByZXNvdXJjZXMgLyBkZXJlZ2lzdGVyIGFueSBsaXN0ZW5lcnMgdGhleSBoYXZlXG4gICAgLy8gYXR0YWNoZWQuIEFuIGV4YW1wbGUgb2YgdGhpcyBtaWdodCBiZSBkZXJlZ2lzdGVyaW5nIGEgcmVzaXplIGV2ZW50IGZyb20gdGhlIHdpbmRvdyBvYmplY3QuXG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiBsaXN0ZW5pbmcgZm9yIGN1c3RvbSBldmVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBsaXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIG1ldGhvZCB0byByZW1vdmUgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudC4gVGhpcyBpcyBtb3N0IHVzZWZ1bCB3aGVuXG4gICAqIHVubGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgdW5saXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBhIGNyb3NzLWJyb3dzZXItY29tcGF0aWJsZSBjdXN0b20gZXZlbnQgZnJvbSB0aGUgY29tcG9uZW50IHJvb3Qgb2YgdGhlIGdpdmVuIHR5cGUsXG4gICAqIHdpdGggdGhlIGdpdmVuIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IU9iamVjdH0gZXZ0RGF0YVxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBzaG91bGRCdWJibGVcbiAgICovXG4gIGVtaXQoZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgICBsZXQgZXZ0O1xuICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvb3RfLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENDb21wb25lbnQ7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFJpcHBsZS4gUHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBtYW5hZ2luZ1xuICogLSBjbGFzc2VzXG4gKiAtIGRvbVxuICogLSBDU1MgdmFyaWFibGVzXG4gKiAtIHBvc2l0aW9uXG4gKiAtIGRpbWVuc2lvbnNcbiAqIC0gc2Nyb2xsIHBvc2l0aW9uXG4gKiAtIGV2ZW50IGhhbmRsZXJzXG4gKiAtIHVuYm91bmRlZCwgYWN0aXZlIGFuZCBkaXNhYmxlZCBzdGF0ZXNcbiAqXG4gKiBBZGRpdGlvbmFsbHksIHByb3ZpZGVzIHR5cGUgaW5mb3JtYXRpb24gZm9yIHRoZSBhZGFwdGVyIHRvIHRoZSBDbG9zdXJlXG4gKiBjb21waWxlci5cbiAqXG4gKiBJbXBsZW1lbnQgdGhpcyBhZGFwdGVyIGZvciB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UgdG8gZGVsZWdhdGUgdXBkYXRlcyB0b1xuICogdGhlIGNvbXBvbmVudCBpbiB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UuIFNlZSBhcmNoaXRlY3R1cmUgZG9jdW1lbnRhdGlvblxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvY29kZS9hcmNoaXRlY3R1cmUubWRcbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1JpcHBsZUFkYXB0ZXIge1xuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzVW5ib3VuZGVkKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNTdXJmYWNlQWN0aXZlKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNTdXJmYWNlRGlzYWJsZWQoKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7IUV2ZW50VGFyZ2V0fSB0YXJnZXQgKi9cbiAgY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlclJlc2l6ZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YXJOYW1lXG4gICAqIEBwYXJhbSB7P251bWJlcnxzdHJpbmd9IHZhbHVlXG4gICAqL1xuICB1cGRhdGVDc3NWYXJpYWJsZSh2YXJOYW1lLCB2YWx1ZSkge31cblxuICAvKiogQHJldHVybiB7IUNsaWVudFJlY3R9ICovXG4gIGNvbXB1dGVCb3VuZGluZ1JlY3QoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSAqL1xuICBnZXRXaW5kb3dQYWdlT2Zmc2V0KCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICAvLyBSaXBwbGUgaXMgYSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIFwicm9vdFwiIGNvbXBvbmVudCBpcyByZWFsbHkgYSBcIm1peGluXCIgb2Ygc29ydHMsXG4gIC8vIGdpdmVuIHRoYXQgaXQncyBhbiAndXBncmFkZScgdG8gYW4gZXhpc3RpbmcgY29tcG9uZW50LiBUaGF0IGJlaW5nIHNhaWQgaXQgaXMgdGhlIHJvb3RcbiAgLy8gQ1NTIGNsYXNzIHRoYXQgYWxsIG90aGVyIENTUyBjbGFzc2VzIGRlcml2ZSBmcm9tLlxuICBST09UOiAnbWRjLXJpcHBsZS11cGdyYWRlZCcsXG4gIFVOQk9VTkRFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZCcsXG4gIEJHX0ZPQ1VTRUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQnLFxuICBGR19BQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uJyxcbiAgRkdfREVBQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1kZWFjdGl2YXRpb24nLFxufTtcblxuY29uc3Qgc3RyaW5ncyA9IHtcbiAgVkFSX0xFRlQ6ICctLW1kYy1yaXBwbGUtbGVmdCcsXG4gIFZBUl9UT1A6ICctLW1kYy1yaXBwbGUtdG9wJyxcbiAgVkFSX0ZHX1NJWkU6ICctLW1kYy1yaXBwbGUtZmctc2l6ZScsXG4gIFZBUl9GR19TQ0FMRTogJy0tbWRjLXJpcHBsZS1mZy1zY2FsZScsXG4gIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0JyxcbiAgVkFSX0ZHX1RSQU5TTEFURV9FTkQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCcsXG59O1xuXG5jb25zdCBudW1iZXJzID0ge1xuICBQQURESU5HOiAxMCxcbiAgSU5JVElBTF9PUklHSU5fU0NBTEU6IDAuNixcbiAgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM6IDIyNSwgLy8gQ29ycmVzcG9uZHMgdG8gJG1kYy1yaXBwbGUtdHJhbnNsYXRlLWR1cmF0aW9uIChpLmUuIGFjdGl2YXRpb24gYW5pbWF0aW9uIGR1cmF0aW9uKVxuICBGR19ERUFDVElWQVRJT05fTVM6IDE1MCwgLy8gQ29ycmVzcG9uZHMgdG8gJG1kYy1yaXBwbGUtZmFkZS1vdXQtZHVyYXRpb24gKGkuZS4gZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgVEFQX0RFTEFZX01TOiAzMDAsIC8vIERlbGF5IGJldHdlZW4gdG91Y2ggYW5kIHNpbXVsYXRlZCBtb3VzZSBldmVudHMgb24gdG91Y2ggZGV2aWNlc1xufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3QgQ1NTIGN1c3RvbSB2YXJpYWJsZSBzdXBwb3J0LlxuICogQHByaXZhdGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5sZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBhcHBseVBhc3NpdmUgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzUGFzc2l2ZV87XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKSB7XG4gIC8vIERldGVjdCB2ZXJzaW9ucyBvZiBFZGdlIHdpdGggYnVnZ3kgdmFyKCkgc3VwcG9ydFxuICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzExNDk1NDQ4L1xuICBjb25zdCBkb2N1bWVudCA9IHdpbmRvd09iai5kb2N1bWVudDtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub2RlLmNsYXNzTmFtZSA9ICdtZGMtcmlwcGxlLXN1cmZhY2UtLXRlc3QtZWRnZS12YXItYnVnJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcblxuICAvLyBUaGUgYnVnIGV4aXN0cyBpZiA6OmJlZm9yZSBzdHlsZSBlbmRzIHVwIHByb3BhZ2F0aW5nIHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgLy8gQWRkaXRpb25hbGx5LCBnZXRDb21wdXRlZFN0eWxlIHJldHVybnMgbnVsbCBpbiBpZnJhbWVzIHdpdGggZGlzcGxheTogXCJub25lXCIgaW4gRmlyZWZveCxcbiAgLy8gYnV0IEZpcmVmb3ggaXMga25vd24gdG8gc3VwcG9ydCBDU1MgY3VzdG9tIHByb3BlcnRpZXMgY29ycmVjdGx5LlxuICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93T2JqLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIGNvbnN0IGhhc1BzZXVkb1ZhckJ1ZyA9IGNvbXB1dGVkU3R5bGUgIT09IG51bGwgJiYgY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BTdHlsZSA9PT0gJ3NvbGlkJztcbiAgbm9kZS5yZW1vdmUoKTtcbiAgcmV0dXJuIGhhc1BzZXVkb1ZhckJ1Zztcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFXaW5kb3d9IHdpbmRvd09ialxuICogQHBhcmFtIHtib29sZWFuPX0gZm9yY2VSZWZyZXNoXG4gKiBAcmV0dXJuIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3dPYmosIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGxldCBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgaWYgKHR5cGVvZiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPT09ICdib29sZWFuJyAmJiAhZm9yY2VSZWZyZXNoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xuICB9XG5cbiAgY29uc3Qgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSB3aW5kb3dPYmouQ1NTICYmIHR5cGVvZiB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzID09PSAnZnVuY3Rpb24nO1xuICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyA9IHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NDY2OVxuICAvLyBTZWU6IFJFQURNRSBzZWN0aW9uIG9uIFNhZmFyaVxuICBjb25zdCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMgPSAoXG4gICAgd2luZG93T2JqLkNTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpXG4gICk7XG5cbiAgaWYgKGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgfHwgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzKSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSAhZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopO1xuICB9IGVsc2Uge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gZmFsc2U7XG4gIH1cblxuICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xuICB9XG4gIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbn1cblxuLy9cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycywgYW5kIGlmIHNvLCB1c2UgdGhlbS5cbiAqIEBwYXJhbSB7IVdpbmRvdz19IGdsb2JhbE9ialxuICogQHBhcmFtIHtib29sZWFuPX0gZm9yY2VSZWZyZXNoXG4gKiBAcmV0dXJuIHtib29sZWFufCFFdmVudExpc3RlbmVyT3B0aW9uc31cbiAqL1xuZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiA9IHdpbmRvdywgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgaWYgKHN1cHBvcnRzUGFzc2l2ZV8gPT09IHVuZGVmaW5lZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgZ2xvYmFsT2JqLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCB7Z2V0IHBhc3NpdmUoKSB7XG4gICAgICAgIGlzU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkO1xuICAgICAgfX0pO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuXG4gICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkO1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZV9cbiAgICA/IC8qKiBAdHlwZSB7IUV2ZW50TGlzdGVuZXJPcHRpb25zfSAqLyAoe3Bhc3NpdmU6IHRydWV9KVxuICAgIDogZmFsc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHshT2JqZWN0fSBIVE1MRWxlbWVudFByb3RvdHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgLyoqXG4gICAqIE9yZGVyIGlzIGltcG9ydGFudCBiZWNhdXNlIHdlIHJldHVybiB0aGUgZmlyc3QgZXhpc3RpbmcgbWV0aG9kIHdlIGZpbmQuXG4gICAqIERvIG5vdCBjaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBpdGVtcyBpbiB0aGUgYmVsb3cgYXJyYXkuXG4gICAqL1xuICBjb25zdCBtYXRjaGVzTWV0aG9kcyA9IFsnbWF0Y2hlcycsICd3ZWJraXRNYXRjaGVzU2VsZWN0b3InLCAnbXNNYXRjaGVzU2VsZWN0b3InXTtcbiAgbGV0IG1ldGhvZCA9ICdtYXRjaGVzJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaGVzTWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1hdGNoZXNNZXRob2QgPSBtYXRjaGVzTWV0aG9kc1tpXTtcbiAgICBpZiAobWF0Y2hlc01ldGhvZCBpbiBIVE1MRWxlbWVudFByb3RvdHlwZSkge1xuICAgICAgbWV0aG9kID0gbWF0Y2hlc01ldGhvZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXRob2Q7XG59XG5cbi8qKlxuICogQHBhcmFtIHshRXZlbnR9IGV2XG4gKiBAcGFyYW0ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19IHBhZ2VPZmZzZXRcbiAqIEBwYXJhbSB7IUNsaWVudFJlY3R9IGNsaWVudFJlY3RcbiAqIEByZXR1cm4ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19XG4gKi9cbmZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhldiwgcGFnZU9mZnNldCwgY2xpZW50UmVjdCkge1xuICBjb25zdCB7eCwgeX0gPSBwYWdlT2Zmc2V0O1xuICBjb25zdCBkb2N1bWVudFggPSB4ICsgY2xpZW50UmVjdC5sZWZ0O1xuICBjb25zdCBkb2N1bWVudFkgPSB5ICsgY2xpZW50UmVjdC50b3A7XG5cbiAgbGV0IG5vcm1hbGl6ZWRYO1xuICBsZXQgbm9ybWFsaXplZFk7XG4gIC8vIERldGVybWluZSB0b3VjaCBwb2ludCByZWxhdGl2ZSB0byB0aGUgcmlwcGxlIGNvbnRhaW5lci5cbiAgaWYgKGV2LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgIGV2ID0gLyoqIEB0eXBlIHshVG91Y2hFdmVudH0gKi8gKGV2KTtcbiAgICBub3JtYWxpemVkWCA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSBkb2N1bWVudFk7XG4gIH0gZWxzZSB7XG4gICAgZXYgPSAvKiogQHR5cGUgeyFNb3VzZUV2ZW50fSAqLyAoZXYpO1xuICAgIG5vcm1hbGl6ZWRYID0gZXYucGFnZVggLSBkb2N1bWVudFg7XG4gICAgbm9ybWFsaXplZFkgPSBldi5wYWdlWSAtIGRvY3VtZW50WTtcbiAgfVxuXG4gIHJldHVybiB7eDogbm9ybWFsaXplZFgsIHk6IG5vcm1hbGl6ZWRZfTtcbn1cblxuZXhwb3J0IHtzdXBwb3J0c0Nzc1ZhcmlhYmxlcywgYXBwbHlQYXNzaXZlLCBnZXRNYXRjaGVzUHJvcGVydHksIGdldE5vcm1hbGl6ZWRFdmVudENvb3Jkc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDUmlwcGxlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge2dldE5vcm1hbGl6ZWRFdmVudENvb3Jkc30gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBpc0FjdGl2YXRlZDogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGFjdGl2YXRpb25FdmVudDogKCFFdmVudHx1bmRlZmluZWQpLFxuICogICBpc1Byb2dyYW1tYXRpYzogKGJvb2xlYW58dW5kZWZpbmVkKVxuICogfX1cbiAqL1xubGV0IEFjdGl2YXRpb25TdGF0ZVR5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZGVhY3RpdmF0ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBmb2N1czogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBibHVyOiAoc3RyaW5nfHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBMaXN0ZW5lckluZm9UeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiBmdW5jdGlvbighRXZlbnQpLFxuICogICBkZWFjdGl2YXRlOiBmdW5jdGlvbighRXZlbnQ9KSxcbiAqICAgZm9jdXM6IGZ1bmN0aW9uKCksXG4gKiAgIGJsdXI6IGZ1bmN0aW9uKClcbiAqIH19XG4gKi9cbmxldCBMaXN0ZW5lcnNUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIHg6IG51bWJlcixcbiAqICAgeTogbnVtYmVyXG4gKiB9fVxuICovXG5sZXQgUG9pbnRUeXBlO1xuXG4vLyBBY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIHRoZSByb290IGVsZW1lbnQgb2YgZWFjaCBpbnN0YW5jZSBmb3IgYWN0aXZhdGlvblxuY29uc3QgQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hzdGFydCcsICdwb2ludGVyZG93bicsICdtb3VzZWRvd24nLCAna2V5ZG93biddO1xuXG4vLyBEZWFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gZG9jdW1lbnRFbGVtZW50IHdoZW4gYSBwb2ludGVyLXJlbGF0ZWQgZG93biBldmVudCBvY2N1cnNcbmNvbnN0IFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gWyd0b3VjaGVuZCcsICdwb2ludGVydXAnLCAnbW91c2V1cCcsICdjb250ZXh0bWVudSddO1xuXG4vLyBUcmFja3MgYWN0aXZhdGlvbnMgdGhhdCBoYXZlIG9jY3VycmVkIG9uIHRoZSBjdXJyZW50IGZyYW1lLCB0byBhdm9pZCBzaW11bHRhbmVvdXMgbmVzdGVkIGFjdGl2YXRpb25zXG4vKiogQHR5cGUgeyFBcnJheTwhRXZlbnRUYXJnZXQ+fSAqL1xubGV0IGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDUmlwcGxlQWRhcHRlcj59XG4gKi9cbmNsYXNzIE1EQ1JpcHBsZUZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4gLyogYm9vbGVhbiAtIGNhY2hlZCAqLyB7fSxcbiAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBhZGRDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgY29udGFpbnNFdmVudFRhcmdldDogKC8qIHRhcmdldDogIUV2ZW50VGFyZ2V0ICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICgvKiB2YXJOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gLyogQ2xpZW50UmVjdCAqLyB7fSxcbiAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IC8qIHt4OiBudW1iZXIsIHk6IG51bWJlcn0gKi8ge30sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1JpcHBsZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUNsaWVudFJlY3R9ICovXG4gICAgdGhpcy5mcmFtZV8gPSAvKiogQHR5cGUgeyFDbGllbnRSZWN0fSAqLyAoe3dpZHRoOiAwLCBoZWlnaHQ6IDB9KTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5pbml0aWFsU2l6ZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50KX0gKi9cbiAgICB0aGlzLmFjdGl2YXRlSGFuZGxlcl8gPSAoZSkgPT4gdGhpcy5hY3RpdmF0ZV8oZSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudD0pfSAqL1xuICAgIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfID0gKCkgPT4gdGhpcy5kZWFjdGl2YXRlXygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmZvY3VzSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmhhbmRsZUZvY3VzKCk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudD0pfSAqL1xuICAgIHRoaXMuYmx1ckhhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVCbHVyKCk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXJfID0gKCkgPT4gdGhpcy5sYXlvdXQoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7e2xlZnQ6IG51bWJlciwgdG9wOm51bWJlcn19ICovXG4gICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICB9O1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5mZ1NjYWxlXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18gPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSB0cnVlO1xuICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICB9O1xuXG4gICAgLyoqIEBwcml2YXRlIHshRXZlbnR8dW5kZWZpbmVkfSAqL1xuICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICB9XG5cbiAgLyoqXG4gICAqIFdlIGNvbXB1dGUgdGhpcyBwcm9wZXJ0eSBzbyB0aGF0IHdlIGFyZSBub3QgcXVlcnlpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNsaWVudFxuICAgKiB1bnRpbCB0aGUgcG9pbnQgaW4gdGltZSB3aGVyZSB0aGUgZm91bmRhdGlvbiByZXF1ZXN0cyBpdC4gVGhpcyBwcmV2ZW50cyBzY2VuYXJpb3Mgd2hlcmVcbiAgICogY2xpZW50LXNpZGUgZmVhdHVyZS1kZXRlY3Rpb24gbWF5IGhhcHBlbiB0b28gZWFybHksIHN1Y2ggYXMgd2hlbiBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyXG4gICAqIGFuZCB0aGVuIGluaXRpYWxpemVkIGF0IG1vdW50IHRpbWUgb24gdGhlIGNsaWVudC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN1cHBvcnRzUHJlc3NSaXBwbGVfKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshQWN0aXZhdGlvblN0YXRlVHlwZX1cbiAgICovXG4gIGRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2YXRlZDogZmFsc2UsXG4gICAgICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogZmFsc2UsXG4gICAgICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IGZhbHNlLFxuICAgICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IGZhbHNlLFxuICAgICAgYWN0aXZhdGlvbkV2ZW50OiB1bmRlZmluZWQsXG4gICAgICBpc1Byb2dyYW1tYXRpYzogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBzdXBwb3J0c1ByZXNzUmlwcGxlID0gdGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpO1xuXG4gICAgdGhpcy5yZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSk7XG5cbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgY29uc3Qge1JPT1QsIFVOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFJPT1QpO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGVzIG5lZWQgbGF5b3V0IGxvZ2ljIGFwcGxpZWQgaW1tZWRpYXRlbHkgdG8gc2V0IGNvb3JkaW5hdGVzIGZvciBib3RoIHNoYWRlIGFuZCByaXBwbGVcbiAgICAgICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZhdGlvblRpbWVyXykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhST09UKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB0aGlzLnJlbW92ZUNzc1ZhcnNfKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCk7XG4gICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSBzdXBwb3J0c1ByZXNzUmlwcGxlIFBhc3NlZCBmcm9tIGluaXQgdG8gc2F2ZSBhIHJlZHVuZGFudCBmdW5jdGlvbiBjYWxsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhlKSB7XG4gICAgaWYgKGUudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCkge1xuICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICByZW1vdmVDc3NWYXJzXygpIHtcbiAgICBjb25zdCB7c3RyaW5nc30gPSBNRENSaXBwbGVGb3VuZGF0aW9uO1xuICAgIE9iamVjdC5rZXlzKHN0cmluZ3MpLmZvckVhY2goKGspID0+IHtcbiAgICAgIGlmIChrLmluZGV4T2YoJ1ZBUl8nKSA9PT0gMCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKHN0cmluZ3Nba10sIG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWN0aXZhdGVfKGUpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VEaXNhYmxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBdm9pZCByZWFjdGluZyB0byBmb2xsb3ctb24gZXZlbnRzIGZpcmVkIGJ5IHRvdWNoIGRldmljZSBhZnRlciBhbiBhbHJlYWR5LXByb2Nlc3NlZCB1c2VyIGludGVyYWN0aW9uXG4gICAgY29uc3QgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgPSB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgICBjb25zdCBpc1NhbWVJbnRlcmFjdGlvbiA9IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ICYmIGUgIT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c0FjdGl2YXRpb25FdmVudC50eXBlICE9PSBlLnR5cGU7XG4gICAgaWYgKGlzU2FtZUludGVyYWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPSBlID09PSB1bmRlZmluZWQ7XG4gICAgYWN0aXZhdGlvblN0YXRlLmFjdGl2YXRpb25FdmVudCA9IGU7XG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA/IGZhbHNlIDogZSAhPT0gdW5kZWZpbmVkICYmIChcbiAgICAgIGUudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAncG9pbnRlcmRvd24nXG4gICAgKTtcblxuICAgIGNvbnN0IGhhc0FjdGl2YXRlZENoaWxkID0gZSAhPT0gdW5kZWZpbmVkICYmIGFjdGl2YXRlZFRhcmdldHMubGVuZ3RoID4gMCAmJiBhY3RpdmF0ZWRUYXJnZXRzLnNvbWUoXG4gICAgICAodGFyZ2V0KSA9PiB0aGlzLmFkYXB0ZXJfLmNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSk7XG4gICAgaWYgKGhhc0FjdGl2YXRlZENoaWxkKSB7XG4gICAgICAvLyBJbW1lZGlhdGVseSByZXNldCBhY3RpdmF0aW9uIHN0YXRlLCB3aGlsZSBwcmVzZXJ2aW5nIGxvZ2ljIHRoYXQgcHJldmVudHMgdG91Y2ggZm9sbG93LW9uIGV2ZW50c1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhY3RpdmF0ZWRUYXJnZXRzLnB1c2goLyoqIEB0eXBlIHshRXZlbnRUYXJnZXR9ICovIChlLnRhcmdldCkpO1xuICAgICAgdGhpcy5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhlKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIC8vIFJlc2V0IGFycmF5IG9uIG5leHQgZnJhbWUgYWZ0ZXIgdGhlIGN1cnJlbnQgZXZlbnQgaGFzIGhhZCBhIGNoYW5jZSB0byBidWJibGUgdG8gcHJldmVudCBhbmNlc3RvciByaXBwbGVzXG4gICAgICBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbiAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlICYmIGUgIT09IHVuZGVmaW5lZCAmJiAoZS5rZXkgPT09ICcgJyB8fCBlLmtleUNvZGUgPT09IDMyKSkge1xuICAgICAgICAvLyBJZiBzcGFjZSB3YXMgcHJlc3NlZCwgdHJ5IGFnYWluIHdpdGhpbiBhbiByQUYgY2FsbCB0byBkZXRlY3QgOmFjdGl2ZSwgYmVjYXVzZSBkaWZmZXJlbnQgVUFzIHJlcG9ydFxuICAgICAgICAvLyBhY3RpdmUgc3RhdGVzIGluY29uc2lzdGVudGx5IHdoZW4gdGhleSdyZSBjYWxsZWQgd2l0aGluIGV2ZW50IGhhbmRsaW5nIGNvZGU6XG4gICAgICAgIC8vIC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjM1OTcxXG4gICAgICAgIC8vIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTI5Mzc0MVxuICAgICAgICAvLyBXZSB0cnkgZmlyc3Qgb3V0c2lkZSByQUYgdG8gc3VwcG9ydCBFZGdlLCB3aGljaCBkb2VzIG5vdCBleGhpYml0IHRoaXMgcHJvYmxlbSwgYnV0IHdpbGwgY3Jhc2ggaWYgYSBDU1NcbiAgICAgICAgLy8gdmFyaWFibGUgaXMgc2V0IHdpdGhpbiBhIHJBRiBjYWxsYmFjayBmb3IgYSBzdWJtaXQgYnV0dG9uIGludGVyYWN0aW9uICgjMjI0MSkuXG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgIC8vIFJlc2V0IGFjdGl2YXRpb24gc3RhdGUgaW1tZWRpYXRlbHkgaWYgZWxlbWVudCB3YXMgbm90IG1hZGUgYWN0aXZlLlxuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnQ9fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKSB7XG4gICAgcmV0dXJuIChlICE9PSB1bmRlZmluZWQgJiYgZS50eXBlID09PSAna2V5ZG93bicpID8gdGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VBY3RpdmUoKSA6IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnQ9fSBldmVudCBPcHRpb25hbCBldmVudCBjb250YWluaW5nIHBvc2l0aW9uIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgYWN0aXZhdGUoZXZlbnQpIHtcbiAgICB0aGlzLmFjdGl2YXRlXyhldmVudCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgYW5pbWF0ZUFjdGl2YXRpb25fKCkge1xuICAgIGNvbnN0IHtWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCBWQVJfRkdfVFJBTlNMQVRFX0VORH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG4gICAgY29uc3Qge0ZHX0RFQUNUSVZBVElPTiwgRkdfQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgY29uc3Qge0RFQUNUSVZBVElPTl9USU1FT1VUX01TfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycztcblxuICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG5cbiAgICBsZXQgdHJhbnNsYXRlU3RhcnQgPSAnJztcbiAgICBsZXQgdHJhbnNsYXRlRW5kID0gJyc7XG5cbiAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgY29uc3Qge3N0YXJ0UG9pbnQsIGVuZFBvaW50fSA9IHRoaXMuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpO1xuICAgICAgdHJhbnNsYXRlU3RhcnQgPSBgJHtzdGFydFBvaW50Lnh9cHgsICR7c3RhcnRQb2ludC55fXB4YDtcbiAgICAgIHRyYW5zbGF0ZUVuZCA9IGAke2VuZFBvaW50Lnh9cHgsICR7ZW5kUG9pbnQueX1weGA7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCB0cmFuc2xhdGVTdGFydCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX0VORCwgdHJhbnNsYXRlRW5kKTtcbiAgICAvLyBDYW5jZWwgYW55IG9uZ29pbmcgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5pbWF0aW9uc1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG5cbiAgICAvLyBGb3JjZSBsYXlvdXQgaW4gb3JkZXIgdG8gcmUtdHJpZ2dlciB0aGUgYW5pbWF0aW9uLlxuICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXygpLCBERUFDVElWQVRJT05fVElNRU9VVF9NUyk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHJldHVybiB7e3N0YXJ0UG9pbnQ6IFBvaW50VHlwZSwgZW5kUG9pbnQ6IFBvaW50VHlwZX19XG4gICAqL1xuICBnZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCkge1xuICAgIGNvbnN0IHthY3RpdmF0aW9uRXZlbnQsIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcn0gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG5cbiAgICBsZXQgc3RhcnRQb2ludDtcbiAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyKSB7XG4gICAgICBzdGFydFBvaW50ID0gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKFxuICAgICAgICAvKiogQHR5cGUgeyFFdmVudH0gKi8gKGFjdGl2YXRpb25FdmVudCksXG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZ2V0V2luZG93UGFnZU9mZnNldCgpLCB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgeDogdGhpcy5mcmFtZV8ud2lkdGggLyAyLFxuICAgICAgICB5OiB0aGlzLmZyYW1lXy5oZWlnaHQgLyAyLFxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gQ2VudGVyIHRoZSBlbGVtZW50IGFyb3VuZCB0aGUgc3RhcnQgcG9pbnQuXG4gICAgc3RhcnRQb2ludCA9IHtcbiAgICAgIHg6IHN0YXJ0UG9pbnQueCAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgeTogc3RhcnRQb2ludC55IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgfTtcblxuICAgIGNvbnN0IGVuZFBvaW50ID0ge1xuICAgICAgeDogKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6ICh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICByZXR1cm4ge3N0YXJ0UG9pbnQsIGVuZFBvaW50fTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKSB7XG4gICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJvdGggd2hlbiBhIHBvaW50aW5nIGRldmljZSBpcyByZWxlYXNlZCwgYW5kIHdoZW4gdGhlIGFjdGl2YXRpb24gYW5pbWF0aW9uIGVuZHMuXG4gICAgLy8gVGhlIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gc2hvdWxkIG9ubHkgcnVuIGFmdGVyIGJvdGggb2YgdGhvc2Ugb2NjdXIuXG4gICAgY29uc3Qge0ZHX0RFQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgY29uc3Qge2hhc0RlYWN0aXZhdGlvblVYUnVuLCBpc0FjdGl2YXRlZH0gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgY29uc3QgYWN0aXZhdGlvbkhhc0VuZGVkID0gaGFzRGVhY3RpdmF0aW9uVVhSdW4gfHwgIWlzQWN0aXZhdGVkO1xuXG4gICAgaWYgKGFjdGl2YXRpb25IYXNFbmRlZCAmJiB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8pIHtcbiAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICB9LCBudW1iZXJzLkZHX0RFQUNUSVZBVElPTl9NUyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpIHtcbiAgICBjb25zdCB7RkdfQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgfVxuXG4gIHJlc2V0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXy5hY3RpdmF0aW9uRXZlbnQ7XG4gICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgIC8vIFRvdWNoIGRldmljZXMgbWF5IGZpcmUgYWRkaXRpb25hbCBldmVudHMgZm9yIHRoZSBzYW1lIGludGVyYWN0aW9uIHdpdGhpbiBhIHNob3J0IHRpbWUuXG4gICAgLy8gU3RvcmUgdGhlIHByZXZpb3VzIGV2ZW50IHVudGlsIGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhhdCBzdWJzZXF1ZW50IGV2ZW50cyBhcmUgZm9yIG5ldyBpbnRlcmFjdGlvbnMuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHVuZGVmaW5lZCwgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlRBUF9ERUxBWV9NUyk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlYWN0aXZhdGVfKCkge1xuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gc2NlbmFyaW9zIHN1Y2ggYXMgd2hlbiB5b3UgaGF2ZSBhIGtleXVwIGV2ZW50IHRoYXQgYmx1cnMgdGhlIGVsZW1lbnQuXG4gICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZSA9IC8qKiBAdHlwZSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9ICovIChPYmplY3QuYXNzaWduKHt9LCBhY3RpdmF0aW9uU3RhdGUpKTtcblxuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKSk7XG4gICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXy5oYXNEZWFjdGl2YXRpb25VWFJ1biA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpO1xuICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmRlYWN0aXZhdGVfKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gb3B0aW9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYW5pbWF0ZURlYWN0aXZhdGlvbl8oe3dhc0FjdGl2YXRlZEJ5UG9pbnRlciwgd2FzRWxlbWVudE1hZGVBY3RpdmV9KSB7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlciB8fCB3YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICB9XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0RnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgbGF5b3V0SW50ZXJuYWxfKCkge1xuICAgIHRoaXMuZnJhbWVfID0gdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgY29uc3QgbWF4RGltID0gTWF0aC5tYXgodGhpcy5mcmFtZV8uaGVpZ2h0LCB0aGlzLmZyYW1lXy53aWR0aCk7XG5cbiAgICAvLyBTdXJmYWNlIGRpYW1ldGVyIGlzIHRyZWF0ZWQgZGlmZmVyZW50bHkgZm9yIHVuYm91bmRlZCB2cy4gYm91bmRlZCByaXBwbGVzLlxuICAgIC8vIFVuYm91bmRlZCByaXBwbGUgZGlhbWV0ZXIgaXMgY2FsY3VsYXRlZCBzbWFsbGVyIHNpbmNlIHRoZSBzdXJmYWNlIGlzIGV4cGVjdGVkIHRvIGFscmVhZHkgYmUgcGFkZGVkIGFwcHJvcHJpYXRlbHlcbiAgICAvLyB0byBleHRlbmQgdGhlIGhpdGJveCwgYW5kIHRoZSByaXBwbGUgaXMgZXhwZWN0ZWQgdG8gbWVldCB0aGUgZWRnZXMgb2YgdGhlIHBhZGRlZCBoaXRib3ggKHdoaWNoIGlzIHR5cGljYWxseVxuICAgIC8vIHNxdWFyZSkuIEJvdW5kZWQgcmlwcGxlcywgb24gdGhlIG90aGVyIGhhbmQsIGFyZSBmdWxseSBleHBlY3RlZCB0byBleHBhbmQgYmV5b25kIHRoZSBzdXJmYWNlJ3MgbG9uZ2VzdCBkaWFtZXRlclxuICAgIC8vIChjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBkaWFnb25hbCBwbHVzIGEgY29uc3RhbnQgcGFkZGluZyksIGFuZCBhcmUgY2xpcHBlZCBhdCB0aGUgc3VyZmFjZSdzIGJvcmRlciB2aWFcbiAgICAvLyBgb3ZlcmZsb3c6IGhpZGRlbmAuXG4gICAgY29uc3QgZ2V0Qm91bmRlZFJhZGl1cyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGh5cG90ZW51c2UgPSBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy5mcmFtZV8ud2lkdGgsIDIpICsgTWF0aC5wb3codGhpcy5mcmFtZV8uaGVpZ2h0LCAyKSk7XG4gICAgICByZXR1cm4gaHlwb3RlbnVzZSArIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5QQURESU5HO1xuICAgIH07XG5cbiAgICB0aGlzLm1heFJhZGl1c18gPSB0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkgPyBtYXhEaW0gOiBnZXRCb3VuZGVkUmFkaXVzKCk7XG5cbiAgICAvLyBSaXBwbGUgaXMgc2l6ZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgbGFyZ2VzdCBkaW1lbnNpb24gb2YgdGhlIHN1cmZhY2UsIHRoZW4gc2NhbGVzIHVwIHVzaW5nIGEgQ1NTIHNjYWxlIHRyYW5zZm9ybVxuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gTWF0aC5mbG9vcihtYXhEaW0gKiBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuSU5JVElBTF9PUklHSU5fU0NBTEUpO1xuICAgIHRoaXMuZmdTY2FsZV8gPSB0aGlzLm1heFJhZGl1c18gLyB0aGlzLmluaXRpYWxTaXplXztcblxuICAgIHRoaXMudXBkYXRlTGF5b3V0Q3NzVmFyc18oKTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICB1cGRhdGVMYXlvdXRDc3NWYXJzXygpIHtcbiAgICBjb25zdCB7XG4gICAgICBWQVJfRkdfU0laRSwgVkFSX0xFRlQsIFZBUl9UT1AsIFZBUl9GR19TQ0FMRSxcbiAgICB9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuXG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0laRSwgYCR7dGhpcy5pbml0aWFsU2l6ZV99cHhgKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TQ0FMRSwgdGhpcy5mZ1NjYWxlXyk7XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICAgIGxlZnQ6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgIHRvcDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9MRUZULCBgJHt0aGlzLnVuYm91bmRlZENvb3Jkc18ubGVmdH1weGApO1xuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfVE9QLCBgJHt0aGlzLnVuYm91bmRlZENvb3Jkc18udG9wfXB4YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdW5ib3VuZGVkICovXG4gIHNldFVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICBjb25zdCB7VU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBpZiAodW5ib3VuZGVkKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGb2N1cygpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpKTtcbiAgfVxuXG4gIGhhbmRsZUJsdXIoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgTURDUmlwcGxlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1JpcHBsZUZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBNRENDb21wb25lbnQ8IU1EQ1JpcHBsZUZvdW5kYXRpb24+XG4gKi9cbmNsYXNzIE1EQ1JpcHBsZSBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKiBAcGFyYW0gey4uLj99IGFyZ3MgKi9cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcGFyYW0ge3tpc1VuYm91bmRlZDogKGJvb2xlYW58dW5kZWZpbmVkKX09fSBvcHRpb25zXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGV9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCwge2lzVW5ib3VuZGVkID0gdW5kZWZpbmVkfSA9IHt9KSB7XG4gICAgY29uc3QgcmlwcGxlID0gbmV3IE1EQ1JpcHBsZShyb290KTtcbiAgICAvLyBPbmx5IG92ZXJyaWRlIHVuYm91bmRlZCBiZWhhdmlvciBpZiBvcHRpb24gaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcbiAgICBpZiAoaXNVbmJvdW5kZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmlwcGxlLnVuYm91bmRlZCA9IC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi8gKGlzVW5ib3VuZGVkKTtcbiAgICB9XG4gICAgcmV0dXJuIHJpcHBsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFSaXBwbGVDYXBhYmxlU3VyZmFjZX0gaW5zdGFuY2VcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlQWRhcHRlcihpbnN0YW5jZSkge1xuICAgIGNvbnN0IE1BVENIRVMgPSB1dGlsLmdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IHV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KSxcbiAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiBpbnN0YW5jZS51bmJvdW5kZWQsXG4gICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IGluc3RhbmNlLnJvb3RfW01BVENIRVNdKCc6YWN0aXZlJyksXG4gICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4gaW5zdGFuY2UuZGlzYWJsZWQsXG4gICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICh0YXJnZXQpID0+IGluc3RhbmNlLnJvb3RfLmNvbnRhaW5zKHRhcmdldCksXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgaW5zdGFuY2Uucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IChoYW5kbGVyKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKHZhck5hbWUsIHZhbHVlKSA9PiBpbnN0YW5jZS5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSksXG4gICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiBpbnN0YW5jZS5yb290Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+ICh7eDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXR9KSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGdldCB1bmJvdW5kZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5ib3VuZGVkXztcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXQgdW5ib3VuZGVkKHVuYm91bmRlZCkge1xuICAgIHRoaXMudW5ib3VuZGVkXyA9IEJvb2xlYW4odW5ib3VuZGVkKTtcbiAgICB0aGlzLnNldFVuYm91bmRlZF8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zdXJlIENvbXBpbGVyIHRocm93cyBhbiBhY2Nlc3MgY29udHJvbCBlcnJvciB3aGVuIGRpcmVjdGx5IGFjY2Vzc2luZyBhXG4gICAqIHByb3RlY3RlZCBvciBwcml2YXRlIHByb3BlcnR5IGluc2lkZSBhIGdldHRlci9zZXR0ZXIsIGxpa2UgdW5ib3VuZGVkIGFib3ZlLlxuICAgKiBCeSBhY2Nlc3NpbmcgdGhlIHByb3RlY3RlZCBwcm9wZXJ0eSBpbnNpZGUgYSBtZXRob2QsIHdlIHNvbHZlIHRoYXQgcHJvYmxlbS5cbiAgICogVGhhdCdzIHdoeSB0aGlzIGZ1bmN0aW9uIGV4aXN0cy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFVuYm91bmRlZF8oKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVbmJvdW5kZWQodGhpcy51bmJvdW5kZWRfKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZWFjdGl2YXRlKCk7XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5sYXlvdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlRm91bmRhdGlvbn1cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIodGhpcykpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgdGhpcy51bmJvdW5kZWQgPSAnbWRjUmlwcGxlSXNVbmJvdW5kZWQnIGluIHRoaXMucm9vdF8uZGF0YXNldDtcbiAgfVxufVxuXG4vKipcbiAqIFNlZSBNYXRlcmlhbCBEZXNpZ24gc3BlYyBmb3IgbW9yZSBkZXRhaWxzIG9uIHdoZW4gdG8gdXNlIHJpcHBsZXMuXG4gKiBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvbW90aW9uL2Nob3Jlb2dyYXBoeS5odG1sI2Nob3Jlb2dyYXBoeS1jcmVhdGlvblxuICogQHJlY29yZFxuICovXG5jbGFzcyBSaXBwbGVDYXBhYmxlU3VyZmFjZSB7fVxuXG4vKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUucm9vdF87XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHJpcHBsZSBibGVlZHMgb3V0IG9mIHRoZSBib3VuZHMgb2YgdGhlIGVsZW1lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS51bmJvdW5kZWQ7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHJpcHBsZSBpcyBhdHRhY2hlZCB0byBhIGRpc2FibGVkIGNvbXBvbmVudC5cbiAqIEB0eXBlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLmRpc2FibGVkO1xuXG5leHBvcnQge01EQ1JpcHBsZSwgTURDUmlwcGxlRm91bmRhdGlvbiwgUmlwcGxlQ2FwYWJsZVN1cmZhY2UsIHV0aWx9O1xuIiwiaW1wb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvaW5kZXgnXG5pbXBvcnQge1xuICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyxcbiAgZ2V0TWF0Y2hlc1Byb3BlcnR5LFxuICBhcHBseVBhc3NpdmVcbn0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS91dGlsJ1xuXG5leHBvcnQgY2xhc3MgUmlwcGxlQmFzZSBleHRlbmRzIE1EQ1JpcHBsZUZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IE1BVENIRVMoKSB7XG4gICAgLyogZ2xvYmFsIEhUTUxFbGVtZW50ICovXG4gICAgcmV0dXJuIChcbiAgICAgIFJpcHBsZUJhc2UuX21hdGNoZXMgfHxcbiAgICAgIChSaXBwbGVCYXNlLl9tYXRjaGVzID0gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSkpXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGlzU3VyZmFjZUFjdGl2ZShyZWYpIHtcbiAgICByZXR1cm4gcmVmW1JpcHBsZUJhc2UuTUFUQ0hFU10oJzphY3RpdmUnKVxuICB9XG5cbiAgY29uc3RydWN0b3Iodm0sIG9wdGlvbnMpIHtcbiAgICBzdXBlcihcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uJGVsW1JpcHBsZUJhc2UuTUFUQ0hFU10oJzphY3RpdmUnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS5kaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2bS4kc2V0KHZtLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJGRlbGV0ZSh2bS5jbGFzc2VzLCBjbGFzc05hbWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiB0YXJnZXQgPT4gdm0uJGVsLmNvbnRhaW5zKHRhcmdldCksXG4gICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHZtLiRlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5zdHlsZXMsIHZhck5hbWUsIHZhbHVlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgUmlwcGxlTWl4aW4gPSB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5yaXBwbGUuZGVzdHJveSgpXG4gIH1cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGN1c3RvbS1lbGVtZW50IFxuICAgIDp0YWc9XCJ0YWdcIiBcbiAgICA6Y2xhc3Nlcz1cImNsYXNzZXNcIlxuICAgIDpzdHlsZXM9XCJzdHlsZXNcIiBcbiAgICBjbGFzcz1cIm1kYy1yaXBwbGVcIj5cbiAgICA8c2xvdCAvPlxuICA8L2N1c3RvbS1lbGVtZW50PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnRNaXhpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgeyBSaXBwbGVNaXhpbiB9IGZyb20gJy4vbWRjLXJpcHBsZS1iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtcmlwcGxlJyxcbiAgbWl4aW5zOiBbQ3VzdG9tRWxlbWVudE1peGluLCBSaXBwbGVNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgdGFnOiBTdHJpbmdcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoY29tcGlsZWRUZW1wbGF0ZSwgaW5qZWN0U3R5bGUsIGRlZmF1bHRFeHBvcnQsIHNjb3BlSWQsIGlzRnVuY3Rpb25hbFRlbXBsYXRlLCBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovLCBpc1NoYWRvd01vZGUsIGNyZWF0ZUluamVjdG9yLCBjcmVhdGVJbmplY3RvclNTUiwgY3JlYXRlSW5qZWN0b3JTaGFkb3cpIHtcbiAgICBpZiAodHlwZW9mIGlzU2hhZG93TW9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjcmVhdGVJbmplY3RvclNTUiA9IGNyZWF0ZUluamVjdG9yO1xuICAgICAgICBjcmVhdGVJbmplY3RvciA9IGlzU2hhZG93TW9kZTtcbiAgICAgICAgaXNTaGFkb3dNb2RlID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgICBjb25zdCBvcHRpb25zID0gdHlwZW9mIGRlZmF1bHRFeHBvcnQgPT09ICdmdW5jdGlvbicgPyBkZWZhdWx0RXhwb3J0Lm9wdGlvbnMgOiBkZWZhdWx0RXhwb3J0O1xuICAgIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgICBpZiAoY29tcGlsZWRUZW1wbGF0ZSAmJiBjb21waWxlZFRlbXBsYXRlLnJlbmRlcikge1xuICAgICAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyO1xuICAgICAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zO1xuICAgICAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWU7XG4gICAgICAgIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgICAgICAgaWYgKGlzRnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNjb3BlZElkXG4gICAgaWYgKHNjb3BlSWQpIHtcbiAgICAgICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWQ7XG4gICAgfVxuICAgIGxldCBob29rO1xuICAgIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7XG4gICAgICAgIC8vIHNlcnZlciBidWlsZFxuICAgICAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgICAgICAgIGNvbnRleHQgPVxuICAgICAgICAgICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpOyAvLyBmdW5jdGlvbmFsXG4gICAgICAgICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgICAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfXztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICAgICAgICBpZiAoaW5qZWN0U3R5bGUpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yU1NSKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJlbmNlXG4gICAgICAgICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAgICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICAgICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmplY3RTdHlsZSkge1xuICAgICAgICBob29rID0gaXNTaGFkb3dNb2RlXG4gICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yU2hhZG93KHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGluamVjdFN0eWxlLmNhbGwodGhpcywgY3JlYXRlSW5qZWN0b3IoY29udGV4dCkpO1xuICAgICAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGhvb2spIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyO1xuICAgICAgICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24oaCwgY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGhvb2suY2FsbChjb250ZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGU7XG4gICAgICAgICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKSA6IFtob29rXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdEV4cG9ydDtcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGFcbiAgICA6Y2xhc3M9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGU9XCJzdHlsZXNcIlxuICAgIGNsYXNzPVwibWRjLWljb24tYnV0dG9uIG1hdGVyaWFsLWljb25zXCJcbiAgICBAY2xpY2s9XCJvbkNsaWNrXCJcbiAgICB2LWlmPVwiaXNMaW5rXCJcbiAgICB2LWJpbmQ9XCIkYXR0cnNcIlxuICA+XG4gICAgPHNsb3QgLz5cbiAgPC9hPlxuICA8YnV0dG9uXG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiXG4gICAgOnN0eWxlPVwic3R5bGVzXCJcbiAgICBjbGFzcz1cIm1kYy1pY29uLWJ1dHRvbiBtYXRlcmlhbC1pY29uc1wiXG4gICAgQGNsaWNrPVwib25DbGlja1wiXG4gICAgdi1iaW5kPVwiJGF0dHJzXCJcbiAgICB2LWVsc2VcbiAgPlxuICAgIDxzbG90IC8+XG4gIDwvYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvaWNvbi1idXR0b24vZm91bmRhdGlvbidcbmltcG9ydCB7IFJpcHBsZUJhc2UgfSBmcm9tICcuLi9yaXBwbGUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1pY29uLWJ1dHRvbicsXG4gIG1vZGVsOiB7XG4gICAgcHJvcDogJ2lzT24nLFxuICAgIGV2ZW50OiAnY2hhbmdlJ1xuICB9LFxuICBwcm9wczoge1xuICAgIGlzT246IEJvb2xlYW5cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgaXNPbjogJ29uT25fJ1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSksXG4gICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGRlbGV0ZSh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSksXG4gICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgc2V0QXR0cjogKGF0dHJOYW1lLCBhdHRyVmFsdWUpID0+XG4gICAgICAgIHRoaXMuJGVsLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0clZhbHVlKSxcbiAgICAgIG5vdGlmeUNoYW5nZTogZXZ0RGF0YSA9PiB7XG4gICAgICAgIHRoaXMuJGVtaXQoTURDSWNvbkJ1dHRvblRvZ2dsZUZvdW5kYXRpb24uc3RyaW5ncy5DSEFOR0VfRVZFTlQsIGV2dERhdGEpXG5cbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZXZ0RGF0YS5pc09uKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuXG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzLCB7XG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gdHJ1ZVxuICAgIH0pXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG5cbiAgICB0aGlzLmZvdW5kYXRpb24udG9nZ2xlKHRoaXMuaXNPbilcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uT25fKGlzT24pIHtcbiAgICAgIGlmICh0aGlzLmlzT24gIT09IGlzT24pIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLnRvZ2dsZShpc09uKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkNsaWNrKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUNsaWNrKGV2dClcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBpc0xpbmsoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kZWwgJiYgQm9vbGVhbih0aGlzLiRlbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgbWRjSWNvbkJ1dHRvbiBmcm9tICcuL21kYy1pY29uLWJ1dHRvbi52dWUnXG5cbmV4cG9ydCB7IG1kY0ljb25CdXR0b24gfVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlUGx1Z2luKHtcbiAgbWRjSWNvbkJ1dHRvblxufSlcbiIsImltcG9ydCAnLi9zdHlsZXMuc2NzcydcbmltcG9ydCB7IGF1dG9Jbml0IH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBwbHVnaW4gZnJvbSAnLi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG5hdXRvSW5pdChwbHVnaW4pXG4iXSwibmFtZXMiOlsiYXV0b0luaXQiLCJwbHVnaW4iLCJfVnVlIiwid2luZG93IiwiVnVlIiwiZ2xvYmFsIiwidXNlIiwiQmFzZVBsdWdpbiIsImNvbXBvbmVudHMiLCJ2ZXJzaW9uIiwiaW5zdGFsbCIsInZtIiwia2V5IiwiY29tcG9uZW50IiwibmFtZSIsIkN1c3RvbUVsZW1lbnQiLCJmdW5jdGlvbmFsIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJwcm9wcyIsImlzIiwidGFnIiwiZGF0YSIsImNoaWxkcmVuIiwiQ3VzdG9tRWxlbWVudE1peGluIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIk1EQ0ZvdW5kYXRpb24iLCJhZGFwdGVyIiwiYWRhcHRlcl8iLCJNRENJY29uQnV0dG9uVG9nZ2xlQWRhcHRlciIsImNsYXNzTmFtZSIsImF0dHJOYW1lIiwiYXR0clZhbHVlIiwiZXZ0RGF0YSIsImNzc0NsYXNzZXMiLCJST09UIiwiSUNPTl9CVVRUT05fT04iLCJzdHJpbmdzIiwiQVJJQV9QUkVTU0VEIiwiQ0hBTkdFX0VWRU5UIiwiTURDSWNvbkJ1dHRvblRvZ2dsZUZvdW5kYXRpb24iLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJzZXRBdHRyIiwibm90aWZ5Q2hhbmdlIiwiZGVmYXVsdEFkYXB0ZXIiLCJkaXNhYmxlZF8iLCJpc09uIiwidG9nZ2xlIiwiTURDQ29tcG9uZW50Iiwicm9vdCIsImZvdW5kYXRpb24iLCJ1bmRlZmluZWQiLCJyb290XyIsImFyZ3MiLCJpbml0aWFsaXplIiwiZm91bmRhdGlvbl8iLCJnZXREZWZhdWx0Rm91bmRhdGlvbiIsImluaXQiLCJpbml0aWFsU3luY1dpdGhET00iLCJFcnJvciIsImRlc3Ryb3kiLCJldnRUeXBlIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2hvdWxkQnViYmxlIiwiZXZ0IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJNRENSaXBwbGVBZGFwdGVyIiwidGFyZ2V0IiwidmFyTmFtZSIsInZhbHVlIiwiVU5CT1VOREVEIiwiQkdfRk9DVVNFRCIsIkZHX0FDVElWQVRJT04iLCJGR19ERUFDVElWQVRJT04iLCJWQVJfTEVGVCIsIlZBUl9UT1AiLCJWQVJfRkdfU0laRSIsIlZBUl9GR19TQ0FMRSIsIlZBUl9GR19UUkFOU0xBVEVfU1RBUlQiLCJWQVJfRkdfVFJBTlNMQVRFX0VORCIsIm51bWJlcnMiLCJQQURESU5HIiwiSU5JVElBTF9PUklHSU5fU0NBTEUiLCJERUFDVElWQVRJT05fVElNRU9VVF9NUyIsIkZHX0RFQUNUSVZBVElPTl9NUyIsIlRBUF9ERUxBWV9NUyIsInN1cHBvcnRzQ3NzVmFyaWFibGVzXyIsInN1cHBvcnRzUGFzc2l2ZV8iLCJkZXRlY3RFZGdlUHNldWRvVmFyQnVnIiwid2luZG93T2JqIiwibm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaGFzUHNldWRvVmFyQnVnIiwiYm9yZGVyVG9wU3R5bGUiLCJyZW1vdmUiLCJzdXBwb3J0c0Nzc1ZhcmlhYmxlcyIsImZvcmNlUmVmcmVzaCIsInN1cHBvcnRzRnVuY3Rpb25QcmVzZW50IiwiQ1NTIiwic3VwcG9ydHMiLCJleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIiwid2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzIiwiYXBwbHlQYXNzaXZlIiwiZ2xvYmFsT2JqIiwiaXNTdXBwb3J0ZWQiLCJwYXNzaXZlIiwiZSIsImdldE1hdGNoZXNQcm9wZXJ0eSIsIkhUTUxFbGVtZW50UHJvdG90eXBlIiwibWF0Y2hlc01ldGhvZHMiLCJtZXRob2QiLCJpIiwibGVuZ3RoIiwibWF0Y2hlc01ldGhvZCIsImdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyIsImV2IiwicGFnZU9mZnNldCIsImNsaWVudFJlY3QiLCJ4IiwieSIsImRvY3VtZW50WCIsImxlZnQiLCJkb2N1bWVudFkiLCJ0b3AiLCJub3JtYWxpemVkWCIsIm5vcm1hbGl6ZWRZIiwidHlwZSIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIkFDVElWQVRJT05fRVZFTlRfVFlQRVMiLCJQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyIsImFjdGl2YXRlZFRhcmdldHMiLCJNRENSaXBwbGVGb3VuZGF0aW9uIiwiYnJvd3NlclN1cHBvcnRzQ3NzVmFycyIsImlzVW5ib3VuZGVkIiwiaXNTdXJmYWNlQWN0aXZlIiwiaXNTdXJmYWNlRGlzYWJsZWQiLCJjb250YWluc0V2ZW50VGFyZ2V0IiwicmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyUmVzaXplSGFuZGxlciIsImRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwidXBkYXRlQ3NzVmFyaWFibGUiLCJjb21wdXRlQm91bmRpbmdSZWN0IiwiZ2V0V2luZG93UGFnZU9mZnNldCIsImxheW91dEZyYW1lXyIsImZyYW1lXyIsIndpZHRoIiwiaGVpZ2h0IiwiYWN0aXZhdGlvblN0YXRlXyIsImRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfIiwiaW5pdGlhbFNpemVfIiwibWF4UmFkaXVzXyIsImFjdGl2YXRlSGFuZGxlcl8iLCJhY3RpdmF0ZV8iLCJkZWFjdGl2YXRlSGFuZGxlcl8iLCJkZWFjdGl2YXRlXyIsImZvY3VzSGFuZGxlcl8iLCJoYW5kbGVGb2N1cyIsImJsdXJIYW5kbGVyXyIsImhhbmRsZUJsdXIiLCJyZXNpemVIYW5kbGVyXyIsImxheW91dCIsInVuYm91bmRlZENvb3Jkc18iLCJmZ1NjYWxlXyIsImFjdGl2YXRpb25UaW1lcl8iLCJmZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8iLCJhY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfIiwiYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfIiwicnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfIiwicHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfIiwiaXNBY3RpdmF0ZWQiLCJoYXNEZWFjdGl2YXRpb25VWFJ1biIsIndhc0FjdGl2YXRlZEJ5UG9pbnRlciIsIndhc0VsZW1lbnRNYWRlQWN0aXZlIiwiYWN0aXZhdGlvbkV2ZW50IiwiaXNQcm9ncmFtbWF0aWMiLCJzdXBwb3J0c1ByZXNzUmlwcGxlIiwic3VwcG9ydHNQcmVzc1JpcHBsZV8iLCJyZWdpc3RlclJvb3RIYW5kbGVyc18iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsYXlvdXRJbnRlcm5hbF8iLCJjbGVhclRpbWVvdXQiLCJyZW1vdmVDc3NWYXJzXyIsImRlcmVnaXN0ZXJSb290SGFuZGxlcnNfIiwiZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyIsImZvckVhY2giLCJPYmplY3QiLCJrZXlzIiwiayIsImluZGV4T2YiLCJhY3RpdmF0aW9uU3RhdGUiLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudCIsImlzU2FtZUludGVyYWN0aW9uIiwiaGFzQWN0aXZhdGVkQ2hpbGQiLCJzb21lIiwicmVzZXRBY3RpdmF0aW9uU3RhdGVfIiwicHVzaCIsInJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfIiwiY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8iLCJhbmltYXRlQWN0aXZhdGlvbl8iLCJrZXlDb2RlIiwiZXZlbnQiLCJ0cmFuc2xhdGVTdGFydCIsInRyYW5zbGF0ZUVuZCIsImdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18iLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18iLCJzZXRUaW1lb3V0IiwiYWN0aXZhdGlvbkhhc0VuZGVkIiwic3RhdGUiLCJhbmltYXRlRGVhY3RpdmF0aW9uXyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibWF4RGltIiwibWF4IiwiZ2V0Qm91bmRlZFJhZGl1cyIsImh5cG90ZW51c2UiLCJzcXJ0IiwicG93IiwidXBkYXRlTGF5b3V0Q3NzVmFyc18iLCJyb3VuZCIsInVuYm91bmRlZCIsIk1EQ1JpcHBsZSIsImRpc2FibGVkIiwidW5ib3VuZGVkXyIsInNldFVuYm91bmRlZCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImNyZWF0ZUFkYXB0ZXIiLCJkYXRhc2V0IiwiQm9vbGVhbiIsInNldFVuYm91bmRlZF8iLCJyaXBwbGUiLCJpbnN0YW5jZSIsIk1BVENIRVMiLCJ1dGlsIiwiSFRNTEVsZW1lbnQiLCJwcm90b3R5cGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYWdlWE9mZnNldCIsInBhZ2VZT2Zmc2V0IiwiUmlwcGxlQ2FwYWJsZVN1cmZhY2UiLCJSaXBwbGVCYXNlIiwicmVmIiwiX21hdGNoZXMiLCJvcHRpb25zIiwiJGVsIiwiJHNldCIsImNsYXNzZXMiLCIkZGVsZXRlIiwic3R5bGVzIiwiUmlwcGxlTWl4aW4iLCJtb3VudGVkIiwiYmVmb3JlRGVzdHJveSIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsImNvbXBpbGVkVGVtcGxhdGUiLCJpbmplY3RTdHlsZSIsImRlZmF1bHRFeHBvcnQiLCJzY29wZUlkIiwiaXNGdW5jdGlvbmFsVGVtcGxhdGUiLCJtb2R1bGVJZGVudGlmaWVyIiwiaXNTaGFkb3dNb2RlIiwiY3JlYXRlSW5qZWN0b3IiLCJjcmVhdGVJbmplY3RvclNTUiIsImNyZWF0ZUluamVjdG9yU2hhZG93Iiwic3RhdGljUmVuZGVyRm5zIiwiX2NvbXBpbGVkIiwiX3Njb3BlSWQiLCJob29rIiwiJHZub2RlIiwic3NyQ29udGV4dCIsInBhcmVudCIsIl9fVlVFX1NTUl9DT05URVhUX18iLCJjYWxsIiwiX3JlZ2lzdGVyZWRDb21wb25lbnRzIiwiX3NzclJlZ2lzdGVyIiwiJHJvb3QiLCIkb3B0aW9ucyIsInNoYWRvd1Jvb3QiLCJvcmlnaW5hbFJlbmRlciIsInJlbmRlcldpdGhTdHlsZUluamVjdGlvbiIsImgiLCJleGlzdGluZyIsImJlZm9yZUNyZWF0ZSIsImNvbmNhdCIsInNjcmlwdCIsIm1kY0ljb25CdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtFQUMvQjtFQUNB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
