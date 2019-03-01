/**
* @module vue-mdc-adapterfab 0.19.4-beta
* @exports VueMDCFab
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^1.0.0-0","material-components-web":"^1.0.0-0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueMDCFab = factory());
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
        element = context.parent.$root.$options.components['RouterLink'];
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

  /**
   * Stores result from supportsCssVariables to avoid redundant processing to
   * detect CSS custom variable support.
   */
  var supportsCssVariables_;
  /**
   * Stores result from applyPassive to avoid redundant processing to detect
   * passive event listener support.
   */

  var supportsPassive_;

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

  function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) {
      forceRefresh = false;
    }

    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;

    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
      return supportsCssVariables_;
    }

    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';

    if (!supportsFunctionPresent) {
      return false;
    }

    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari

    var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');

    if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
      supportsCssVars = !detectEdgePseudoVarBug(windowObj);
    } else {
      supportsCssVars = false;
    }

    if (!forceRefresh) {
      supportsCssVariables_ = supportsCssVars;
    }

    return supportsCssVars;
  }
  /**
   * Determine whether the current browser supports passive event listeners, and
   * if so, use them.
   */

  function applyPassive(globalObj, forceRefresh) {
    if (globalObj === void 0) {
      globalObj = window;
    }

    if (forceRefresh === void 0) {
      forceRefresh = false;
    }

    if (supportsPassive_ === undefined || forceRefresh) {
      var isSupported_1 = false;

      try {
        globalObj.document.addEventListener('test', function () {
          return undefined;
        }, {
          get passive() {
            isSupported_1 = true;
            return isSupported_1;
          }

        });
      } catch (e) {} // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.


      supportsPassive_ = isSupported_1;
    }

    return supportsPassive_ ? {
      passive: true
    } : false;
  }
  function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
      return {
        x: 0,
        y: 0
      };
    }

    var x = pageOffset.x,
        y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY; // Determine touch point relative to the ripple container.

    if (evt.type === 'touchstart') {
      var touchEvent = evt;
      normalizedX = touchEvent.changedTouches[0].pageX - documentX;
      normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    } else {
      var mouseEvent = evt;
      normalizedX = mouseEvent.pageX - documentX;
      normalizedY = mouseEvent.pageY - documentY;
    }

    return {
      x: normalizedX,
      y: normalizedY
    };
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  /* global Reflect, Promise */
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  function __extends(d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return _assign.apply(this, arguments);
  };
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;

    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
        ar.push(r.value);
      }
    } catch (error) {
      e = {
        error: error
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }

    return ar;
  }
  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) {
      ar = ar.concat(__read(arguments[i]));
    }

    return ar;
  }

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
  var MDCFoundation =
  /** @class */
  function () {
    function MDCFoundation(adapter) {
      if (adapter === void 0) {
        adapter = {};
      }

      this.adapter_ = adapter;
    }

    Object.defineProperty(MDCFoundation, "cssClasses", {
      get: function get() {
        // Classes extending MDCFoundation should implement this method to return an object which exports every
        // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
        return {};
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
      get: function get() {
        // Classes extending MDCFoundation should implement this method to return an object which exports all
        // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
        return {};
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
      get: function get() {
        // Classes extending MDCFoundation should implement this method to return an object which exports all
        // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
        return {};
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
      get: function get() {
        // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
        // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
        // validation.
        return {};
      },
      enumerable: true,
      configurable: true
    });

    MDCFoundation.prototype.init = function () {// Subclasses should override this method to perform initialization routines (registering events, etc.)
    };

    MDCFoundation.prototype.destroy = function () {// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };

    return MDCFoundation;
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

  var MDCComponent =
  /** @class */
  function () {
    function MDCComponent(root, foundation) {
      var args = [];

      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }

      this.root_ = root;
      this.initialize.apply(this, __spread(args)); // Note that we initialize foundation here and not within the constructor's default param so that
      // this.root_ is defined and can be used within the foundation class.

      this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
      this.foundation_.init();
      this.initialSyncWithDOM();
    }

    MDCComponent.attachTo = function (root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new MDCFoundation({}));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */


    MDCComponent.prototype.initialize = function () {
      var _args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        _args[_i] = arguments[_i];
      } // Subclasses can override this to do any additional setup work that would be considered part of a
      // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
      // initialized. Any additional arguments besides root and foundation will be passed in here.

    };

    MDCComponent.prototype.getDefaultFoundation = function () {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    };

    MDCComponent.prototype.initialSyncWithDOM = function () {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    };

    MDCComponent.prototype.destroy = function () {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    };

    MDCComponent.prototype.listen = function (evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    };

    MDCComponent.prototype.unlisten = function (evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */


    MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
      if (shouldBubble === void 0) {
        shouldBubble = false;
      }

      var evt;

      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, {
          bubbles: shouldBubble,
          detail: evtData
        });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    };

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
  function matches(element, selector) {
    var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
  }

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
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
  };
  var strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top'
  };
  var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300
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

  var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs

  var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu']; // simultaneous nested activations

  var activatedTargets = [];

  var MDCRippleFoundation =
  /** @class */
  function (_super) {
    __extends(MDCRippleFoundation, _super);

    function MDCRippleFoundation(adapter) {
      var _this = _super.call(this, _assign({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;

      _this.activationAnimationHasEnded_ = false;
      _this.activationTimer_ = 0;
      _this.fgDeactivationRemovalTimer_ = 0;
      _this.fgScale_ = '0';
      _this.frame_ = {
        width: 0,
        height: 0
      };
      _this.initialSize_ = 0;
      _this.layoutFrame_ = 0;
      _this.maxRadius_ = 0;
      _this.unboundedCoords_ = {
        left: 0,
        top: 0
      };
      _this.activationState_ = _this.defaultActivationState_();

      _this.activationTimerCallback_ = function () {
        _this.activationAnimationHasEnded_ = true;

        _this.runDeactivationUXLogicIfReady_();
      };

      _this.activateHandler_ = function (e) {
        return _this.activate_(e);
      };

      _this.deactivateHandler_ = function () {
        return _this.deactivate_();
      };

      _this.focusHandler_ = function () {
        return _this.handleFocus();
      };

      _this.blurHandler_ = function () {
        return _this.handleBlur();
      };

      _this.resizeHandler_ = function () {
        return _this.layout();
      };

      return _this;
    }

    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
      get: function get() {
        return cssClasses;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
      get: function get() {
        return strings;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
      get: function get() {
        return numbers;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
      get: function get() {
        return {
          addClass: function addClass() {
            return undefined;
          },
          browserSupportsCssVars: function browserSupportsCssVars() {
            return true;
          },
          computeBoundingRect: function computeBoundingRect() {
            return {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: 0,
              height: 0
            };
          },
          containsEventTarget: function containsEventTarget() {
            return true;
          },
          deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {
            return undefined;
          },
          deregisterInteractionHandler: function deregisterInteractionHandler() {
            return undefined;
          },
          deregisterResizeHandler: function deregisterResizeHandler() {
            return undefined;
          },
          getWindowPageOffset: function getWindowPageOffset() {
            return {
              x: 0,
              y: 0
            };
          },
          isSurfaceActive: function isSurfaceActive() {
            return true;
          },
          isSurfaceDisabled: function isSurfaceDisabled() {
            return true;
          },
          isUnbounded: function isUnbounded() {
            return true;
          },
          registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {
            return undefined;
          },
          registerInteractionHandler: function registerInteractionHandler() {
            return undefined;
          },
          registerResizeHandler: function registerResizeHandler() {
            return undefined;
          },
          removeClass: function removeClass() {
            return undefined;
          },
          updateCssVariable: function updateCssVariable() {
            return undefined;
          }
        };
      },
      enumerable: true,
      configurable: true
    });

    MDCRippleFoundation.prototype.init = function () {
      var _this = this;

      var supportsPressRipple = this.supportsPressRipple_();
      this.registerRootHandlers_(supportsPressRipple);

      if (supportsPressRipple) {
        var _a = MDCRippleFoundation.cssClasses,
            ROOT_1 = _a.ROOT,
            UNBOUNDED_1 = _a.UNBOUNDED;
        requestAnimationFrame(function () {
          _this.adapter_.addClass(ROOT_1);

          if (_this.adapter_.isUnbounded()) {
            _this.adapter_.addClass(UNBOUNDED_1); // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple


            _this.layoutInternal_();
          }
        });
      }
    };

    MDCRippleFoundation.prototype.destroy = function () {
      var _this = this;

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

        var _a = MDCRippleFoundation.cssClasses,
            ROOT_2 = _a.ROOT,
            UNBOUNDED_2 = _a.UNBOUNDED;
        requestAnimationFrame(function () {
          _this.adapter_.removeClass(ROOT_2);

          _this.adapter_.removeClass(UNBOUNDED_2);

          _this.removeCssVars_();
        });
      }

      this.deregisterRootHandlers_();
      this.deregisterDeactivationHandlers_();
    };
    /**
     * @param evt Optional event containing position information.
     */


    MDCRippleFoundation.prototype.activate = function (evt) {
      this.activate_(evt);
    };

    MDCRippleFoundation.prototype.deactivate = function () {
      this.deactivate_();
    };

    MDCRippleFoundation.prototype.layout = function () {
      var _this = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }

      this.layoutFrame_ = requestAnimationFrame(function () {
        _this.layoutInternal_();

        _this.layoutFrame_ = 0;
      });
    };

    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
      var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

      if (unbounded) {
        this.adapter_.addClass(UNBOUNDED);
      } else {
        this.adapter_.removeClass(UNBOUNDED);
      }
    };

    MDCRippleFoundation.prototype.handleFocus = function () {
      var _this = this;

      requestAnimationFrame(function () {
        return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    };

    MDCRippleFoundation.prototype.handleBlur = function () {
      var _this = this;

      requestAnimationFrame(function () {
        return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */


    MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
      return this.adapter_.browserSupportsCssVars();
    };

    MDCRippleFoundation.prototype.defaultActivationState_ = function () {
      return {
        activationEvent: undefined,
        hasDeactivationUXRun: false,
        isActivated: false,
        isProgrammatic: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false
      };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */


    MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
      var _this = this;

      if (supportsPressRipple) {
        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
          _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
        });

        if (this.adapter_.isUnbounded()) {
          this.adapter_.registerResizeHandler(this.resizeHandler_);
        }
      }

      this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
      this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    };

    MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
      var _this = this;

      if (evt.type === 'keydown') {
        this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
      } else {
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
          _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
        });
      }
    };

    MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
      var _this = this;

      ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
      });
      this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
      this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

      if (this.adapter_.isUnbounded()) {
        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      }
    };

    MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
      var _this = this;

      this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
      });
    };

    MDCRippleFoundation.prototype.removeCssVars_ = function () {
      var _this = this;

      var rippleStrings = MDCRippleFoundation.strings;
      var keys = Object.keys(rippleStrings);
      keys.forEach(function (key) {
        if (key.indexOf('VAR_') === 0) {
          _this.adapter_.updateCssVariable(rippleStrings[key], null);
        }
      });
    };

    MDCRippleFoundation.prototype.activate_ = function (evt) {
      var _this = this;

      if (this.adapter_.isSurfaceDisabled()) {
        return;
      }

      var activationState = this.activationState_;

      if (activationState.isActivated) {
        return;
      } // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction


      var previousActivationEvent = this.previousActivationEvent_;
      var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;

      if (isSameInteraction) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = evt === undefined;
      activationState.activationEvent = evt;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
      var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
        return _this.adapter_.containsEventTarget(target);
      });

      if (hasActivatedChild) {
        // Immediately reset activation state, while preserving logic that prevents touch follow-on events
        this.resetActivationState_();
        return;
      }

      if (evt !== undefined) {
        activatedTargets.push(evt.target);
        this.registerDeactivationHandlers_(evt);
      }

      activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);

      if (activationState.wasElementMadeActive) {
        this.animateActivation_();
      }

      requestAnimationFrame(function () {
        // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
        activatedTargets = [];

        if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
          // If space was pressed, try again within an rAF call to detect :active, because different UAs report
          // active states inconsistently when they're called within event handling code:
          // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
          // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
          // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
          // variable is set within a rAF callback for a submit button interaction (#2241).
          activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);

          if (activationState.wasElementMadeActive) {
            _this.animateActivation_();
          }
        }

        if (!activationState.wasElementMadeActive) {
          // Reset activation state immediately if element was not made active.
          _this.activationState_ = _this.defaultActivationState_();
        }
      });
    };

    MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
      return evt !== undefined && evt.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
    };

    MDCRippleFoundation.prototype.animateActivation_ = function () {
      var _this = this;

      var _a = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
      var _b = MDCRippleFoundation.cssClasses,
          FG_DEACTIVATION = _b.FG_DEACTIVATION,
          FG_ACTIVATION = _b.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal_();
      var translateStart = '';
      var translateEnd = '';

      if (!this.adapter_.isUnbounded()) {
        var _c = this.getFgTranslationCoordinates_(),
            startPoint = _c.startPoint,
            endPoint = _c.endPoint;

        translateStart = startPoint.x + "px, " + startPoint.y + "px";
        translateEnd = endPoint.x + "px, " + endPoint.y + "px";
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
        return _this.activationTimerCallback_();
      }, DEACTIVATION_TIMEOUT_MS);
    };

    MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
      var _a = this.activationState_,
          activationEvent = _a.activationEvent,
          wasActivatedByPointer = _a.wasActivatedByPointer;
      var startPoint;

      if (wasActivatedByPointer) {
        startPoint = getNormalizedEventCoords(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
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
    };

    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
      var _this = this; // This method is called both when a pointing device is released, and when the activation animation ends.
      // The deactivation animation should only run after both of those occur.


      var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
      var _a = this.activationState_,
          hasDeactivationUXRun = _a.hasDeactivationUXRun,
          isActivated = _a.isActivated;
      var activationHasEnded = hasDeactivationUXRun || !isActivated;

      if (activationHasEnded && this.activationAnimationHasEnded_) {
        this.rmBoundedActivationClasses_();
        this.adapter_.addClass(FG_DEACTIVATION);
        this.fgDeactivationRemovalTimer_ = setTimeout(function () {
          _this.adapter_.removeClass(FG_DEACTIVATION);
        }, numbers.FG_DEACTIVATION_MS);
      }
    };

    MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
      var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
      this.adapter_.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded_ = false;
      this.adapter_.computeBoundingRect();
    };

    MDCRippleFoundation.prototype.resetActivationState_ = function () {
      var _this = this;

      this.previousActivationEvent_ = this.activationState_.activationEvent;
      this.activationState_ = this.defaultActivationState_(); // Touch devices may fire additional events for the same interaction within a short time.
      // Store the previous event until it's safe to assume that subsequent events are for new interactions.

      setTimeout(function () {
        return _this.previousActivationEvent_ = undefined;
      }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };

    MDCRippleFoundation.prototype.deactivate_ = function () {
      var _this = this;

      var activationState = this.activationState_; // This can happen in scenarios such as when you have a keyup event that blurs the element.

      if (!activationState.isActivated) {
        return;
      }

      var state = _assign({}, activationState);

      if (activationState.isProgrammatic) {
        requestAnimationFrame(function () {
          return _this.animateDeactivation_(state);
        });
        this.resetActivationState_();
      } else {
        this.deregisterDeactivationHandlers_();
        requestAnimationFrame(function () {
          _this.activationState_.hasDeactivationUXRun = true;

          _this.animateDeactivation_(state);

          _this.resetActivationState_();
        });
      }
    };

    MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
      var wasActivatedByPointer = _a.wasActivatedByPointer,
          wasElementMadeActive = _a.wasElementMadeActive;

      if (wasActivatedByPointer || wasElementMadeActive) {
        this.runDeactivationUXLogicIfReady_();
      }
    };

    MDCRippleFoundation.prototype.layoutInternal_ = function () {
      var _this = this;

      this.frame_ = this.adapter_.computeBoundingRect();
      var maxDim = Math.max(this.frame_.height, this.frame_.width); // Surface diameter is treated differently for unbounded vs. bounded ripples.
      // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
      // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
      // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
      // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
      // `overflow: hidden`.

      var getBoundedRadius = function getBoundedRadius() {
        var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
      };

      this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius(); // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform

      this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
      this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
      this.updateLayoutCssVars_();
    };

    MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
      var _a = MDCRippleFoundation.strings,
          VAR_FG_SIZE = _a.VAR_FG_SIZE,
          VAR_LEFT = _a.VAR_LEFT,
          VAR_TOP = _a.VAR_TOP,
          VAR_FG_SCALE = _a.VAR_FG_SCALE;
      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };
        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
      }
    };

    return MDCRippleFoundation;
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

  var MDCRipple =
  /** @class */
  function (_super) {
    __extends(MDCRipple, _super);

    function MDCRipple() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.disabled = false;
      return _this;
    }

    MDCRipple.attachTo = function (root, opts) {
      if (opts === void 0) {
        opts = {
          isUnbounded: undefined
        };
      }

      var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

      if (opts.isUnbounded !== undefined) {
        ripple.unbounded = opts.isUnbounded;
      }

      return ripple;
    };

    MDCRipple.createAdapter = function (instance) {
      return {
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        browserSupportsCssVars: function browserSupportsCssVars() {
          return supportsCssVariables(window);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        containsEventTarget: function containsEventTarget(target) {
          return instance.root_.contains(target);
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.removeEventListener(evtType, handler, applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler, applyPassive());
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return {
            x: window.pageXOffset,
            y: window.pageYOffset
          };
        },
        isSurfaceActive: function isSurfaceActive() {
          return matches(instance.root_, ':active');
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return Boolean(instance.disabled);
        },
        isUnbounded: function isUnbounded() {
          return Boolean(instance.unbounded);
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.addEventListener(evtType, handler, applyPassive());
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler, applyPassive());
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        }
      };
    };

    Object.defineProperty(MDCRipple.prototype, "unbounded", {
      get: function get() {
        return Boolean(this.unbounded_);
      },
      set: function set(unbounded) {
        this.unbounded_ = Boolean(unbounded);
        this.setUnbounded_();
      },
      enumerable: true,
      configurable: true
    });

    MDCRipple.prototype.activate = function () {
      this.foundation_.activate();
    };

    MDCRipple.prototype.deactivate = function () {
      this.foundation_.deactivate();
    };

    MDCRipple.prototype.layout = function () {
      this.foundation_.layout();
    };

    MDCRipple.prototype.getDefaultFoundation = function () {
      return new MDCRippleFoundation(MDCRipple.createAdapter(this));
    };

    MDCRipple.prototype.initialSyncWithDOM = function () {
      var root = this.root_;
      this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
    };
    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     */


    MDCRipple.prototype.setUnbounded_ = function () {
      this.foundation_.setUnbounded(Boolean(this.unbounded_));
    };

    return MDCRipple;
  }(MDCComponent);

  /**
   * @license
   * Copyright 2019 Google Inc.
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
        return RippleBase._matches || (RippleBase._matches = matches(HTMLElement.prototype));
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
          vm.$el.addEventListener(evt, handler, applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          vm.$el.removeEventListener(evt, handler, applyPassive());
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.addEventListener(evtType, handler, applyPassive());
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.removeEventListener(evtType, handler, applyPassive());
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
    name: 'mdc-fab',
    mixins: [DispatchEventMixin, CustomButtonMixin, RippleMixin],
    props: {
      icon: String,
      mini: Boolean,
      absolute: Boolean,
      fixed: Boolean
    },
    data: function data() {
      return {
        classes: {
          'material-icons': this.icon,
          'mdc-fab--mini': this.mini,
          'mdc-fab--absolute': this.absolute,
          'mdc-fab--fixed': this.fixed
        },
        styles: {}
      };
    },
    watch: {
      icon: function icon() {
        this.$set(this.classes, 'material-icons', this.icon);
      },
      mini: function mini() {
        this.$set(this.classes, 'mdc-fab--mini', this.mini);
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
      "custom-button",
      _vm._g(
        {
          staticClass: "mdc-fab",
          class: _vm.classes,
          style: _vm.styles,
          attrs: { href: _vm.href, link: _vm.link }
        },
        _vm.listeners
      ),
      [
        _c(
          "span",
          { staticClass: "mdc-fab__icon" },
          [_vm._t("default", [_vm._v(_vm._s(_vm.icon))])],
          2
        )
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
    

    
    var mdcFAB = normalizeComponent_1(
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
    mdcFAB: mdcFAB
  });

  autoInit(plugin);

  return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFiLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXV0by1pbml0LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Jhc2UtcGx1Z2luLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1lbGVtZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1ldmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tYnV0dG9uLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Rpc3BhdGNoLWV2ZW50LW1peGluLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9wb255ZmlsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZG9tL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS1iYXNlLmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS52dWUiLCIuLi8uLi9jb21wb25lbnRzL2ZhYi9tZGMtZmFiLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvZmFiL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9mYWIvZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGF1dG9Jbml0KHBsdWdpbikge1xuICAvLyBBdXRvLWluc3RhbGxcbiAgbGV0IF9WdWUgPSBudWxsXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIF9WdWUgPSB3aW5kb3cuVnVlXG4gIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvKmdsb2JhbCBnbG9iYWwqL1xuICAgIF9WdWUgPSBnbG9iYWwuVnVlXG4gIH1cbiAgaWYgKF9WdWUpIHtcbiAgICBfVnVlLnVzZShwbHVnaW4pXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBCYXNlUGx1Z2luKGNvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnX19WRVJTSU9OX18nLFxuICAgIGluc3RhbGw6IHZtID0+IHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2tleV1cbiAgICAgICAgdm0uY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQpXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50ID0ge1xuICBmdW5jdGlvbmFsOiB0cnVlLFxuICByZW5kZXIoY3JlYXRlRWxlbWVudCwgY29udGV4dCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFxuICAgICAgY29udGV4dC5wcm9wcy5pcyB8fCBjb250ZXh0LnByb3BzLnRhZyB8fCAnZGl2JyxcbiAgICAgIGNvbnRleHQuZGF0YSxcbiAgICAgIGNvbnRleHQuY2hpbGRyZW5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUVsZW1lbnRNaXhpbiA9IHtcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUVsZW1lbnRcbiAgfVxufVxuIiwiLyogZ2xvYmFsIEN1c3RvbUV2ZW50ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Q3VzdG9tRXZlbnQoZWwsIGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gIGxldCBldnRcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICBidWJibGVzOiBzaG91bGRCdWJibGVcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKVxuICB9XG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxufVxuIiwiZXhwb3J0IGNvbnN0IEN1c3RvbUJ1dHRvbiA9IHtcbiAgbmFtZTogJ2N1c3RvbS1idXR0b24nLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIGxpbms6IE9iamVjdFxuICB9LFxuICByZW5kZXIoaCwgY29udGV4dCkge1xuICAgIGxldCBlbGVtZW50XG4gICAgbGV0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LmRhdGEpXG5cbiAgICBpZiAoY29udGV4dC5wcm9wcy5saW5rICYmIGNvbnRleHQucGFyZW50LiRyb3V0ZXIpIHtcbiAgICAgIC8vIHJvdXRlci1saW5rIGNhc2VcbiAgICAgIGVsZW1lbnQgPSBjb250ZXh0LnBhcmVudC4kcm9vdC4kb3B0aW9ucy5jb21wb25lbnRzWydSb3V0ZXJMaW5rJ11cbiAgICAgIGRhdGEucHJvcHMgPSBPYmplY3QuYXNzaWduKHsgdGFnOiBjb250ZXh0LnByb3BzLnRhZyB9LCBjb250ZXh0LnByb3BzLmxpbmspXG4gICAgICBkYXRhLmF0dHJzLnJvbGUgPSAnYnV0dG9uJ1xuICAgICAgaWYgKGRhdGEub24uY2xpY2spIHtcbiAgICAgICAgZGF0YS5uYXRpdmVPbiA9IHsgY2xpY2s6IGRhdGEub24uY2xpY2sgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGF0YS5hdHRycyAmJiBkYXRhLmF0dHJzLmhyZWYpIHtcbiAgICAgIC8vIGhyZWYgY2FzZVxuICAgICAgZWxlbWVudCA9ICdhJ1xuICAgICAgZGF0YS5hdHRycy5yb2xlID0gJ2J1dHRvbidcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYnV0dG9uIGZhbGxiYWNrXG4gICAgICBlbGVtZW50ID0gJ2J1dHRvbidcbiAgICB9XG5cbiAgICByZXR1cm4gaChlbGVtZW50LCBkYXRhLCBjb250ZXh0LmNoaWxkcmVuKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21CdXR0b25NaXhpbiA9IHtcbiAgcHJvcHM6IHtcbiAgICBocmVmOiBTdHJpbmcsXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgdG86IFtTdHJpbmcsIE9iamVjdF0sXG4gICAgZXhhY3Q6IEJvb2xlYW4sXG4gICAgYXBwZW5kOiBCb29sZWFuLFxuICAgIHJlcGxhY2U6IEJvb2xlYW4sXG4gICAgYWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgICBleGFjdEFjdGl2ZUNsYXNzOiBTdHJpbmdcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaW5rKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy50byAmJiB7XG4gICAgICAgICAgdG86IHRoaXMudG8sXG4gICAgICAgICAgZXhhY3Q6IHRoaXMuZXhhY3QsXG4gICAgICAgICAgYXBwZW5kOiB0aGlzLmFwcGVuZCxcbiAgICAgICAgICByZXBsYWNlOiB0aGlzLnJlcGxhY2UsXG4gICAgICAgICAgYWN0aXZlQ2xhc3M6IHRoaXMuYWN0aXZlQ2xhc3MsXG4gICAgICAgICAgZXhhY3RBY3RpdmVDbGFzczogdGhpcy5leGFjdEFjdGl2ZUNsYXNzXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21CdXR0b25cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IERpc3BhdGNoRXZlbnRNaXhpbiA9IHtcbiAgcHJvcHM6IHtcbiAgICBldmVudDogU3RyaW5nLFxuICAgICdldmVudC10YXJnZXQnOiBPYmplY3QsXG4gICAgJ2V2ZW50LWFyZ3MnOiBBcnJheVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZGlzcGF0Y2hFdmVudChldnQpIHtcbiAgICAgIGV2dCAmJiB0aGlzLiRlbWl0KGV2dC50eXBlLCBldnQpXG4gICAgICBpZiAodGhpcy5ldmVudCkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5ldmVudFRhcmdldCB8fCB0aGlzLiRyb290XG4gICAgICAgIGxldCBhcmdzID0gdGhpcy5ldmVudEFyZ3MgfHwgW11cbiAgICAgICAgdGFyZ2V0LiRlbWl0KHRoaXMuZXZlbnQsIC4uLmFyZ3MpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpc3RlbmVycygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMuJGxpc3RlbmVycyxcbiAgICAgICAgY2xpY2s6IGUgPT4gdGhpcy5kaXNwYXRjaEV2ZW50KGUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBzY29wZSA9XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMHgxMDAwMDAwMCkpLnRvU3RyaW5nKCkgKyAnLSdcblxuZXhwb3J0IGNvbnN0IFZNQVVuaXF1ZUlkTWl4aW4gPSB7XG4gIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICB0aGlzLnZtYV91aWRfID0gc2NvcGUgKyB0aGlzLl91aWRcbiAgfVxufVxuIiwiLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG9cbiAqIGRldGVjdCBDU1MgY3VzdG9tIHZhcmlhYmxlIHN1cHBvcnQuXG4gKi9cbnZhciBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBhcHBseVBhc3NpdmUgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0XG4gKiBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnQuXG4gKi9cbnZhciBzdXBwb3J0c1Bhc3NpdmVfO1xuZnVuY3Rpb24gZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopIHtcbiAgICAvLyBEZXRlY3QgdmVyc2lvbnMgb2YgRWRnZSB3aXRoIGJ1Z2d5IHZhcigpIHN1cHBvcnRcbiAgICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzExNDk1NDQ4L1xuICAgIHZhciBkb2N1bWVudCA9IHdpbmRvd09iai5kb2N1bWVudDtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vZGUuY2xhc3NOYW1lID0gJ21kYy1yaXBwbGUtc3VyZmFjZS0tdGVzdC1lZGdlLXZhci1idWcnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgLy8gVGhlIGJ1ZyBleGlzdHMgaWYgOjpiZWZvcmUgc3R5bGUgZW5kcyB1cCBwcm9wYWdhdGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gICAgLy8gQWRkaXRpb25hbGx5LCBnZXRDb21wdXRlZFN0eWxlIHJldHVybnMgbnVsbCBpbiBpZnJhbWVzIHdpdGggZGlzcGxheTogXCJub25lXCIgaW4gRmlyZWZveCxcbiAgICAvLyBidXQgRmlyZWZveCBpcyBrbm93biB0byBzdXBwb3J0IENTUyBjdXN0b20gcHJvcGVydGllcyBjb3JyZWN0bHkuXG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IHdpbmRvd09iai5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIHZhciBoYXNQc2V1ZG9WYXJCdWcgPSBjb21wdXRlZFN0eWxlICE9PSBudWxsICYmIGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wU3R5bGUgPT09ICdzb2xpZCc7XG4gICAgbm9kZS5yZW1vdmUoKTtcbiAgICByZXR1cm4gaGFzUHNldWRvVmFyQnVnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvd09iaiwgZm9yY2VSZWZyZXNoKSB7XG4gICAgaWYgKGZvcmNlUmVmcmVzaCA9PT0gdm9pZCAwKSB7IGZvcmNlUmVmcmVzaCA9IGZhbHNlOyB9XG4gICAgdmFyIENTUyA9IHdpbmRvd09iai5DU1M7XG4gICAgdmFyIHN1cHBvcnRzQ3NzVmFycyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgICBpZiAodHlwZW9mIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9PT0gJ2Jvb2xlYW4nICYmICFmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgICB9XG4gICAgdmFyIHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gQ1NTICYmIHR5cGVvZiBDU1Muc3VwcG9ydHMgPT09ICdmdW5jdGlvbic7XG4gICAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzID0gQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAgIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NDY2OVxuICAgIC8vIFNlZTogUkVBRE1FIHNlY3Rpb24gb24gU2FmYXJpXG4gICAgdmFyIHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyA9IChDU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICAgICAgQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKSk7XG4gICAgaWYgKGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgfHwgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzKSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFycyA9ICFkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcnMgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJpYWJsZXNfID0gc3VwcG9ydHNDc3NWYXJzO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJzO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmRcbiAqIGlmIHNvLCB1c2UgdGhlbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmosIGZvcmNlUmVmcmVzaCkge1xuICAgIGlmIChnbG9iYWxPYmogPT09IHZvaWQgMCkgeyBnbG9iYWxPYmogPSB3aW5kb3c7IH1cbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICBpZiAoc3VwcG9ydHNQYXNzaXZlXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICB2YXIgaXNTdXBwb3J0ZWRfMSA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZ2xvYmFsT2JqLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sIHtcbiAgICAgICAgICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTdXBwb3J0ZWRfMSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1N1cHBvcnRlZF8xO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICB9IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZW1wdHkgY2Fubm90IHRocm93IGVycm9yIGR1ZSB0byB0ZXN0cy4gdHNsaW50IGFsc28gZGlzYWJsZXMgY29uc29sZS5sb2cuXG4gICAgICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZF8xO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlXyA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGV2dCwgcGFnZU9mZnNldCwgY2xpZW50UmVjdCkge1xuICAgIGlmICghZXZ0KSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgdmFyIHggPSBwYWdlT2Zmc2V0LngsIHkgPSBwYWdlT2Zmc2V0Lnk7XG4gICAgdmFyIGRvY3VtZW50WCA9IHggKyBjbGllbnRSZWN0LmxlZnQ7XG4gICAgdmFyIGRvY3VtZW50WSA9IHkgKyBjbGllbnRSZWN0LnRvcDtcbiAgICB2YXIgbm9ybWFsaXplZFg7XG4gICAgdmFyIG5vcm1hbGl6ZWRZO1xuICAgIC8vIERldGVybWluZSB0b3VjaCBwb2ludCByZWxhdGl2ZSB0byB0aGUgcmlwcGxlIGNvbnRhaW5lci5cbiAgICBpZiAoZXZ0LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICB2YXIgdG91Y2hFdmVudCA9IGV2dDtcbiAgICAgICAgbm9ybWFsaXplZFggPSB0b3VjaEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgICAgICBub3JtYWxpemVkWSA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSBkb2N1bWVudFk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgbW91c2VFdmVudCA9IGV2dDtcbiAgICAgICAgbm9ybWFsaXplZFggPSBtb3VzZUV2ZW50LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgICAgICBub3JtYWxpemVkWSA9IG1vdXNlRXZlbnQucGFnZVkgLSBkb2N1bWVudFk7XG4gICAgfVxuICAgIHJldHVybiB7IHg6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWSB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXAiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIE1EQ0ZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIGlmIChhZGFwdGVyID09PSB2b2lkIDApIHsgYWRhcHRlciA9IHt9OyB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgICAgICAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgICAgICAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRpb24uXG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIHJldHVybiBNRENGb3VuZGF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IE1EQ0ZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbnZhciBNRENDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDQ29tcG9uZW50KHJvb3QsIGZvdW5kYXRpb24pIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb290XyA9IHJvb3Q7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCB0c2xpYl8xLl9fc3ByZWFkKGFyZ3MpKTtcbiAgICAgICAgLy8gTm90ZSB0aGF0IHdlIGluaXRpYWxpemUgZm91bmRhdGlvbiBoZXJlIGFuZCBub3Qgd2l0aGluIHRoZSBjb25zdHJ1Y3RvcidzIGRlZmF1bHQgcGFyYW0gc28gdGhhdFxuICAgICAgICAvLyB0aGlzLnJvb3RfIGlzIGRlZmluZWQgYW5kIGNhbiBiZSB1c2VkIHdpdGhpbiB0aGUgZm91bmRhdGlvbiBjbGFzcy5cbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXyA9IGZvdW5kYXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSA6IGZvdW5kYXRpb247XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgICAgICB0aGlzLmluaXRpYWxTeW5jV2l0aERPTSgpO1xuICAgIH1cbiAgICBNRENDb21wb25lbnQuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHdoaWNoIGV4dGVuZCBNRENCYXNlIHNob3VsZCBwcm92aWRlIGFuIGF0dGFjaFRvKCkgbWV0aG9kIHRoYXQgdGFrZXMgYSByb290IGVsZW1lbnQgYW5kXG4gICAgICAgIC8vIHJldHVybnMgYW4gaW5zdGFudGlhdGVkIGNvbXBvbmVudCB3aXRoIGl0cyByb290IHNldCB0byB0aGF0IGVsZW1lbnQuIEFsc28gbm90ZSB0aGF0IGluIHRoZSBjYXNlcyBvZlxuICAgICAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgICAgICAvLyBmcm9tIGdldERlZmF1bHRGb3VuZGF0aW9uKCkuXG4gICAgICAgIHJldHVybiBuZXcgTURDQ29tcG9uZW50KHJvb3QsIG5ldyBNRENGb3VuZGF0aW9uKHt9KSk7XG4gICAgfTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogbWV0aG9kIHBhcmFtIG9ubHkgZXhpc3RzIGZvciB0eXBpbmcgcHVycG9zZXM7IGl0IGRvZXMgbm90IG5lZWQgdG8gYmUgdW5pdCB0ZXN0ZWQgKi9cbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgX2FyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgICAgICAvLyBcImNvbnN0cnVjdG9yXCIuIEVzc2VudGlhbGx5LCBpdCBpcyBhIGhvb2sgaW50byB0aGUgcGFyZW50IGNvbnN0cnVjdG9yIGJlZm9yZSB0aGUgZm91bmRhdGlvbiBpc1xuICAgICAgICAvLyBpbml0aWFsaXplZC4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIGJlc2lkZXMgcm9vdCBhbmQgZm91bmRhdGlvbiB3aWxsIGJlIHBhc3NlZCBpbiBoZXJlLlxuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgZ2V0RGVmYXVsdEZvdW5kYXRpb24gdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCAnICtcbiAgICAgICAgICAgICdmb3VuZGF0aW9uIGNsYXNzJyk7XG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgdGhleSBuZWVkIHRvIHBlcmZvcm0gd29yayB0byBzeW5jaHJvbml6ZSB3aXRoIGEgaG9zdCBET01cbiAgICAgICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgICAgICAvLyB0byBzb21lIHByb3BlcnR5IG9yIGF0dHJpYnV0ZSBvZiB0aGUgaG9zdCBET00uIFBsZWFzZSBub3RlOiB0aGlzIGlzICpub3QqIHRoZSBwbGFjZSB0byBwZXJmb3JtIERPTVxuICAgICAgICAvLyByZWFkcy93cml0ZXMgdGhhdCB3b3VsZCBjYXVzZSBsYXlvdXQgLyBwYWludCwgYXMgdGhpcyBpcyBjYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIHdpdGhpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgbWF5IGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZWxlYXNlIGFueSByZXNvdXJjZXMgLyBkZXJlZ2lzdGVyIGFueSBsaXN0ZW5lcnMgdGhleSBoYXZlXG4gICAgICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmRlc3Ryb3koKTtcbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS51bmxpc3RlbiA9IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZpcmVzIGEgY3Jvc3MtYnJvd3Nlci1jb21wYXRpYmxlIGN1c3RvbSBldmVudCBmcm9tIHRoZSBjb21wb25lbnQgcm9vdCBvZiB0aGUgZ2l2ZW4gdHlwZSwgd2l0aCB0aGUgZ2l2ZW4gZGF0YS5cbiAgICAgKi9cbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAoZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlKSB7XG4gICAgICAgIGlmIChzaG91bGRCdWJibGUgPT09IHZvaWQgMCkgeyBzaG91bGRCdWJibGUgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgZXZ0O1xuICAgICAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3RfLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9O1xuICAgIHJldHVybiBNRENDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0IHsgTURDQ29tcG9uZW50IH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEEgXCJwb255ZmlsbFwiIGlzIGEgcG9seWZpbGwgdGhhdCBkb2Vzbid0IG1vZGlmeSB0aGUgZ2xvYmFsIHByb3RvdHlwZSBjaGFpbi5cbiAqIFRoaXMgbWFrZXMgcG9ueWZpbGxzIHNhZmVyIHRoYW4gdHJhZGl0aW9uYWwgcG9seWZpbGxzLCBlc3BlY2lhbGx5IGZvciBsaWJyYXJpZXMgbGlrZSBNREMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xvc2VzdCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICB9XG4gICAgdmFyIGVsID0gZWxlbWVudDtcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKG1hdGNoZXMoZWwsIHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG4gICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hlcyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHZhciBuYXRpdmVNYXRjaGVzID0gZWxlbWVudC5tYXRjaGVzXG4gICAgICAgIHx8IGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yXG4gICAgICAgIHx8IGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3I7XG4gICAgcmV0dXJuIG5hdGl2ZU1hdGNoZXMuY2FsbChlbGVtZW50LCBzZWxlY3Rvcik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb255ZmlsbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHBvbnlmaWxsIGZyb20gJy4vcG9ueWZpbGwnO1xuZXhwb3J0IHsgcG9ueWZpbGwgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0IHZhciBjc3NDbGFzc2VzID0ge1xuICAgIC8vIFJpcHBsZSBpcyBhIHNwZWNpYWwgY2FzZSB3aGVyZSB0aGUgXCJyb290XCIgY29tcG9uZW50IGlzIHJlYWxseSBhIFwibWl4aW5cIiBvZiBzb3J0cyxcbiAgICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gICAgLy8gQ1NTIGNsYXNzIHRoYXQgYWxsIG90aGVyIENTUyBjbGFzc2VzIGRlcml2ZSBmcm9tLlxuICAgIEJHX0ZPQ1VTRUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQnLFxuICAgIEZHX0FDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb24nLFxuICAgIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbiAgICBST09UOiAnbWRjLXJpcHBsZS11cGdyYWRlZCcsXG4gICAgVU5CT1VOREVEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkJyxcbn07XG5leHBvcnQgdmFyIHN0cmluZ3MgPSB7XG4gICAgVkFSX0ZHX1NDQUxFOiAnLS1tZGMtcmlwcGxlLWZnLXNjYWxlJyxcbiAgICBWQVJfRkdfU0laRTogJy0tbWRjLXJpcHBsZS1mZy1zaXplJyxcbiAgICBWQVJfRkdfVFJBTlNMQVRFX0VORDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kJyxcbiAgICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gICAgVkFSX0xFRlQ6ICctLW1kYy1yaXBwbGUtbGVmdCcsXG4gICAgVkFSX1RPUDogJy0tbWRjLXJpcHBsZS10b3AnLFxufTtcbmV4cG9ydCB2YXIgbnVtYmVycyA9IHtcbiAgICBERUFDVElWQVRJT05fVElNRU9VVF9NUzogMjI1LFxuICAgIEZHX0RFQUNUSVZBVElPTl9NUzogMTUwLFxuICAgIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gICAgUEFERElORzogMTAsXG4gICAgVEFQX0RFTEFZX01TOiAzMDAsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMgfSBmcm9tICcuL3V0aWwnO1xuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbnZhciBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gW1xuICAgICd0b3VjaHN0YXJ0JywgJ3BvaW50ZXJkb3duJywgJ21vdXNlZG93bicsICdrZXlkb3duJyxcbl07XG4vLyBEZWFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gZG9jdW1lbnRFbGVtZW50IHdoZW4gYSBwb2ludGVyLXJlbGF0ZWQgZG93biBldmVudCBvY2N1cnNcbnZhciBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFtcbiAgICAndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnLFxuXTtcbi8vIHNpbXVsdGFuZW91cyBuZXN0ZWQgYWN0aXZhdGlvbnNcbnZhciBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG52YXIgTURDUmlwcGxlRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENSaXBwbGVGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1JpcHBsZUZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZmdTY2FsZV8gPSAnMCc7XG4gICAgICAgIF90aGlzLmZyYW1lXyA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuICAgICAgICBfdGhpcy5pbml0aWFsU2l6ZV8gPSAwO1xuICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICBfdGhpcy5tYXhSYWRpdXNfID0gMDtcbiAgICAgICAgX3RoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHsgbGVmdDogMCwgdG9wOiAwIH07XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSBfdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLmFjdGl2YXRlXyhlKTsgfTtcbiAgICAgICAgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZGVhY3RpdmF0ZV8oKTsgfTtcbiAgICAgICAgX3RoaXMuZm9jdXNIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUZvY3VzKCk7IH07XG4gICAgICAgIF90aGlzLmJsdXJIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUJsdXIoKTsgfTtcbiAgICAgICAgX3RoaXMucmVzaXplSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5sYXlvdXQoKTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgeDogMCwgeTogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgaXNVbmJvdW5kZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN1cHBvcnRzUHJlc3NSaXBwbGUgPSB0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpO1xuICAgICAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBST09UXzEgPSBfYS5ST09ULCBVTkJPVU5ERURfMSA9IF9hLlVOQk9VTkRFRDtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoUk9PVF8xKTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERURfMSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGVzIG5lZWQgbGF5b3V0IGxvZ2ljIGFwcGxpZWQgaW1tZWRpYXRlbHkgdG8gc2V0IGNvb3JkaW5hdGVzIGZvciBib3RoIHNoYWRlIGFuZCByaXBwbGVcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2YXRpb25UaW1lcl8pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVF8yID0gX2EuUk9PVCwgVU5CT1VOREVEXzIgPSBfYS5VTkJPVU5ERUQ7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFJPT1RfMik7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEXzIpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZUNzc1ZhcnNfKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCk7XG4gICAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGV2dCBPcHRpb25hbCBldmVudCBjb250YWluaW5nIHBvc2l0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB0aGlzLmFjdGl2YXRlXyhldnQpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgICAgIF90aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VW5ib3VuZGVkID0gZnVuY3Rpb24gKHVuYm91bmRlZCkge1xuICAgICAgICB2YXIgVU5CT1VOREVEID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLlVOQk9VTkRFRDtcbiAgICAgICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogV2UgY29tcHV0ZSB0aGlzIHByb3BlcnR5IHNvIHRoYXQgd2UgYXJlIG5vdCBxdWVyeWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2xpZW50XG4gICAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAgICogY2xpZW50LXNpZGUgZmVhdHVyZS1kZXRlY3Rpb24gbWF5IGhhcHBlbiB0b28gZWFybHksIHN1Y2ggYXMgd2hlbiBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyXG4gICAgICogYW5kIHRoZW4gaW5pdGlhbGl6ZWQgYXQgbW91bnQgdGltZSBvbiB0aGUgY2xpZW50LlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnN1cHBvcnRzUHJlc3NSaXBwbGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgICAgICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgICAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHN1cHBvcnRzUHJlc3NSaXBwbGUgUGFzc2VkIGZyb20gaW5pdCB0byBzYXZlIGEgcmVkdW5kYW50IGZ1bmN0aW9uIGNhbGxcbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZWdpc3RlclJvb3RIYW5kbGVyc18gPSBmdW5jdGlvbiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGV2dC50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVtb3ZlQ3NzVmFyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByaXBwbGVTdHJpbmdzID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJpcHBsZVN0cmluZ3MpO1xuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShyaXBwbGVTdHJpbmdzW2tleV0sIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdm9pZCByZWFjdGluZyB0byBmb2xsb3ctb24gZXZlbnRzIGZpcmVkIGJ5IHRvdWNoIGRldmljZSBhZnRlciBhbiBhbHJlYWR5LXByb2Nlc3NlZCB1c2VyIGludGVyYWN0aW9uXG4gICAgICAgIHZhciBwcmV2aW91c0FjdGl2YXRpb25FdmVudCA9IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICAgICAgICB2YXIgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBldnQgIT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c0FjdGl2YXRpb25FdmVudC50eXBlICE9PSBldnQudHlwZTtcbiAgICAgICAgaWYgKGlzU2FtZUludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZXZ0ID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBldnQ7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IGV2dCAhPT0gdW5kZWZpbmVkICYmIChldnQudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZXZ0LnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBldnQudHlwZSA9PT0gJ3BvaW50ZXJkb3duJyk7XG4gICAgICAgIHZhciBoYXNBY3RpdmF0ZWRDaGlsZCA9IGV2dCAhPT0gdW5kZWZpbmVkICYmIGFjdGl2YXRlZFRhcmdldHMubGVuZ3RoID4gMCAmJiBhY3RpdmF0ZWRUYXJnZXRzLnNvbWUoZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gX3RoaXMuYWRhcHRlcl8uY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpOyB9KTtcbiAgICAgICAgaWYgKGhhc0FjdGl2YXRlZENoaWxkKSB7XG4gICAgICAgICAgICAvLyBJbW1lZGlhdGVseSByZXNldCBhY3RpdmF0aW9uIHN0YXRlLCB3aGlsZSBwcmVzZXJ2aW5nIGxvZ2ljIHRoYXQgcHJldmVudHMgdG91Y2ggZm9sbG93LW9uIGV2ZW50c1xuICAgICAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMucHVzaChldnQudGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZXZ0KTtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGV2dCk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IGFycmF5IG9uIG5leHQgZnJhbWUgYWZ0ZXIgdGhlIGN1cnJlbnQgZXZlbnQgaGFzIGhhZCBhIGNoYW5jZSB0byBidWJibGUgdG8gcHJldmVudCBhbmNlc3RvciByaXBwbGVzXG4gICAgICAgICAgICBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG4gICAgICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZVxuICAgICAgICAgICAgICAgICYmIGV2dCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgJiYgKGV2dC5rZXkgPT09ICcgJyB8fCBldnQua2V5Q29kZSA9PT0gMzIpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgICAgICAgICAvLyBhY3RpdmUgc3RhdGVzIGluY29uc2lzdGVudGx5IHdoZW4gdGhleSdyZSBjYWxsZWQgd2l0aGluIGV2ZW50IGhhbmRsaW5nIGNvZGU6XG4gICAgICAgICAgICAgICAgLy8gLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02MzU5NzFcbiAgICAgICAgICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgICAgICAgICAvLyBXZSB0cnkgZmlyc3Qgb3V0c2lkZSByQUYgdG8gc3VwcG9ydCBFZGdlLCB3aGljaCBkb2VzIG5vdCBleGhpYml0IHRoaXMgcHJvYmxlbSwgYnV0IHdpbGwgY3Jhc2ggaWYgYSBDU1NcbiAgICAgICAgICAgICAgICAvLyB2YXJpYWJsZSBpcyBzZXQgd2l0aGluIGEgckFGIGNhbGxiYWNrIGZvciBhIHN1Ym1pdCBidXR0b24gaW50ZXJhY3Rpb24gKCMyMjQxKS5cbiAgICAgICAgICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSBfdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhldnQpO1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gX3RoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgcmV0dXJuIChldnQgIT09IHVuZGVmaW5lZCAmJiBldnQudHlwZSA9PT0gJ2tleWRvd24nKSA/IHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlQWN0aXZlKCkgOiB0cnVlO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYW5pbWF0ZUFjdGl2YXRpb25fID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3MsIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQgPSBfYS5WQVJfRkdfVFJBTlNMQVRFX1NUQVJULCBWQVJfRkdfVFJBTlNMQVRFX0VORCA9IF9hLlZBUl9GR19UUkFOU0xBVEVfRU5EO1xuICAgICAgICB2YXIgX2IgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIEZHX0RFQUNUSVZBVElPTiA9IF9iLkZHX0RFQUNUSVZBVElPTiwgRkdfQUNUSVZBVElPTiA9IF9iLkZHX0FDVElWQVRJT047XG4gICAgICAgIHZhciBERUFDVElWQVRJT05fVElNRU9VVF9NUyA9IE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5ERUFDVElWQVRJT05fVElNRU9VVF9NUztcbiAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgICAgIHZhciB0cmFuc2xhdGVFbmQgPSAnJztcbiAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHZhciBfYyA9IHRoaXMuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpLCBzdGFydFBvaW50ID0gX2Muc3RhcnRQb2ludCwgZW5kUG9pbnQgPSBfYy5lbmRQb2ludDtcbiAgICAgICAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gc3RhcnRQb2ludC54ICsgXCJweCwgXCIgKyBzdGFydFBvaW50LnkgKyBcInB4XCI7XG4gICAgICAgICAgICB0cmFuc2xhdGVFbmQgPSBlbmRQb2ludC54ICsgXCJweCwgXCIgKyBlbmRQb2ludC55ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfRU5ELCB0cmFuc2xhdGVFbmQpO1xuICAgICAgICAvLyBDYW5jZWwgYW55IG9uZ29pbmcgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5pbWF0aW9uc1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAvLyBGb3JjZSBsYXlvdXQgaW4gb3JkZXIgdG8gcmUtdHJpZ2dlciB0aGUgYW5pbWF0aW9uLlxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKTsgfSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLCBhY3RpdmF0aW9uRXZlbnQgPSBfYS5hY3RpdmF0aW9uRXZlbnQsIHdhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IF9hLndhc0FjdGl2YXRlZEJ5UG9pbnRlcjtcbiAgICAgICAgdmFyIHN0YXJ0UG9pbnQ7XG4gICAgICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIpIHtcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoYWN0aXZhdGlvbkV2ZW50LCB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmZyYW1lXy53aWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2VudGVyIHRoZSBlbGVtZW50IGFyb3VuZCB0aGUgc3RhcnQgcG9pbnQuXG4gICAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgZW5kUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiAodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICAgICAgeTogKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IHN0YXJ0UG9pbnQ6IHN0YXJ0UG9pbnQsIGVuZFBvaW50OiBlbmRQb2ludCB9O1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYm90aCB3aGVuIGEgcG9pbnRpbmcgZGV2aWNlIGlzIHJlbGVhc2VkLCBhbmQgd2hlbiB0aGUgYWN0aXZhdGlvbiBhbmltYXRpb24gZW5kcy5cbiAgICAgICAgLy8gVGhlIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gc2hvdWxkIG9ubHkgcnVuIGFmdGVyIGJvdGggb2YgdGhvc2Ugb2NjdXIuXG4gICAgICAgIHZhciBGR19ERUFDVElWQVRJT04gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8sIGhhc0RlYWN0aXZhdGlvblVYUnVuID0gX2EuaGFzRGVhY3RpdmF0aW9uVVhSdW4sIGlzQWN0aXZhdGVkID0gX2EuaXNBY3RpdmF0ZWQ7XG4gICAgICAgIHZhciBhY3RpdmF0aW9uSGFzRW5kZWQgPSBoYXNEZWFjdGl2YXRpb25VWFJ1biB8fCAhaXNBY3RpdmF0ZWQ7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICAgICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBGR19BQ1RJVkFUSU9OID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT047XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlc2V0QWN0aXZhdGlvblN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIC8vIFRvdWNoIGRldmljZXMgbWF5IGZpcmUgYWRkaXRpb25hbCBldmVudHMgZm9yIHRoZSBzYW1lIGludGVyYWN0aW9uIHdpdGhpbiBhIHNob3J0IHRpbWUuXG4gICAgICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHVuZGVmaW5lZDsgfSwgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlRBUF9ERUxBWV9NUyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWFjdGl2YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGF0ZSA9IHRzbGliXzEuX19hc3NpZ24oe30sIGFjdGl2YXRpb25TdGF0ZSk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7IH0pO1xuICAgICAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmhhc0RlYWN0aXZhdGlvblVYUnVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYW5pbWF0ZURlYWN0aXZhdGlvbl8gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHdhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IF9hLndhc0FjdGl2YXRlZEJ5UG9pbnRlciwgd2FzRWxlbWVudE1hZGVBY3RpdmUgPSBfYS53YXNFbGVtZW50TWFkZUFjdGl2ZTtcbiAgICAgICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlciB8fCB3YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0SW50ZXJuYWxfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgICAgICB2YXIgbWF4RGltID0gTWF0aC5tYXgodGhpcy5mcmFtZV8uaGVpZ2h0LCB0aGlzLmZyYW1lXy53aWR0aCk7XG4gICAgICAgIC8vIFN1cmZhY2UgZGlhbWV0ZXIgaXMgdHJlYXRlZCBkaWZmZXJlbnRseSBmb3IgdW5ib3VuZGVkIHZzLiBib3VuZGVkIHJpcHBsZXMuXG4gICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGUgZGlhbWV0ZXIgaXMgY2FsY3VsYXRlZCBzbWFsbGVyIHNpbmNlIHRoZSBzdXJmYWNlIGlzIGV4cGVjdGVkIHRvIGFscmVhZHkgYmUgcGFkZGVkIGFwcHJvcHJpYXRlbHlcbiAgICAgICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAgICAgLy8gc3F1YXJlKS4gQm91bmRlZCByaXBwbGVzLCBvbiB0aGUgb3RoZXIgaGFuZCwgYXJlIGZ1bGx5IGV4cGVjdGVkIHRvIGV4cGFuZCBiZXlvbmQgdGhlIHN1cmZhY2UncyBsb25nZXN0IGRpYW1ldGVyXG4gICAgICAgIC8vIChjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBkaWFnb25hbCBwbHVzIGEgY29uc3RhbnQgcGFkZGluZyksIGFuZCBhcmUgY2xpcHBlZCBhdCB0aGUgc3VyZmFjZSdzIGJvcmRlciB2aWFcbiAgICAgICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgICAgICB2YXIgZ2V0Qm91bmRlZFJhZGl1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KF90aGlzLmZyYW1lXy53aWR0aCwgMikgKyBNYXRoLnBvdyhfdGhpcy5mcmFtZV8uaGVpZ2h0LCAyKSk7XG4gICAgICAgICAgICByZXR1cm4gaHlwb3RlbnVzZSArIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5QQURESU5HO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1heFJhZGl1c18gPSB0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkgPyBtYXhEaW0gOiBnZXRCb3VuZGVkUmFkaXVzKCk7XG4gICAgICAgIC8vIFJpcHBsZSBpcyBzaXplZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiBvZiB0aGUgc3VyZmFjZSwgdGhlbiBzY2FsZXMgdXAgdXNpbmcgYSBDU1Mgc2NhbGUgdHJhbnNmb3JtXG4gICAgICAgIHRoaXMuaW5pdGlhbFNpemVfID0gTWF0aC5mbG9vcihtYXhEaW0gKiBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuSU5JVElBTF9PUklHSU5fU0NBTEUpO1xuICAgICAgICB0aGlzLmZnU2NhbGVfID0gXCJcIiArIHRoaXMubWF4UmFkaXVzXyAvIHRoaXMuaW5pdGlhbFNpemVfO1xuICAgICAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVMYXlvdXRDc3NWYXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzLCBWQVJfRkdfU0laRSA9IF9hLlZBUl9GR19TSVpFLCBWQVJfTEVGVCA9IF9hLlZBUl9MRUZULCBWQVJfVE9QID0gX2EuVkFSX1RPUCwgVkFSX0ZHX1NDQUxFID0gX2EuVkFSX0ZHX1NDQUxFO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TSVpFLCB0aGlzLmluaXRpYWxTaXplXyArIFwicHhcIik7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NDQUxFLCB0aGlzLmZnU2NhbGVfKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgICAgICAgICAgdG9wOiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9MRUZULCB0aGlzLnVuYm91bmRlZENvb3Jkc18ubGVmdCArIFwicHhcIik7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9UT1AsIHRoaXMudW5ib3VuZGVkQ29vcmRzXy50b3AgKyBcInB4XCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDUmlwcGxlRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBwb255ZmlsbCB9IGZyb20gJ0BtYXRlcmlhbC9kb20vaW5kZXgnO1xuaW1wb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG52YXIgTURDUmlwcGxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1JpcHBsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENSaXBwbGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE1EQ1JpcHBsZS5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290LCBvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHsgaXNVbmJvdW5kZWQ6IHVuZGVmaW5lZCB9OyB9XG4gICAgICAgIHZhciByaXBwbGUgPSBuZXcgTURDUmlwcGxlKHJvb3QpO1xuICAgICAgICAvLyBPbmx5IG92ZXJyaWRlIHVuYm91bmRlZCBiZWhhdmlvciBpZiBvcHRpb24gaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcbiAgICAgICAgaWYgKG9wdHMuaXNVbmJvdW5kZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmlwcGxlLnVuYm91bmRlZCA9IG9wdHMuaXNVbmJvdW5kZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJpcHBsZTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdXRpbC5zdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpOyB9LFxuICAgICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IH0sXG4gICAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5jb250YWlucyh0YXJnZXQpOyB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfSk7IH0sXG4gICAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBvbnlmaWxsLm1hdGNoZXMoaW5zdGFuY2Uucm9vdF8sICc6YWN0aXZlJyk7IH0sXG4gICAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQm9vbGVhbihpbnN0YW5jZS5kaXNhYmxlZCk7IH0sXG4gICAgICAgICAgICBpc1VuYm91bmRlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQm9vbGVhbihpbnN0YW5jZS51bmJvdW5kZWQpOyB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiBmdW5jdGlvbiAodmFyTmFtZSwgdmFsdWUpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLnN0eWxlLnNldFByb3BlcnR5KHZhck5hbWUsIHZhbHVlKTsgfSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGUucHJvdG90eXBlLCBcInVuYm91bmRlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy51bmJvdW5kZWRfKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodW5ib3VuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVuYm91bmRlZF8gPSBCb29sZWFuKHVuYm91bmRlZCk7XG4gICAgICAgICAgICB0aGlzLnNldFVuYm91bmRlZF8oKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5hY3RpdmF0ZSgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmRlYWN0aXZhdGUoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmxheW91dCgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcm9vdCA9IHRoaXMucm9vdF87XG4gICAgICAgIHRoaXMudW5ib3VuZGVkID0gJ21kY1JpcHBsZUlzVW5ib3VuZGVkJyBpbiByb290LmRhdGFzZXQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbG9zdXJlIENvbXBpbGVyIHRocm93cyBhbiBhY2Nlc3MgY29udHJvbCBlcnJvciB3aGVuIGRpcmVjdGx5IGFjY2Vzc2luZyBhXG4gICAgICogcHJvdGVjdGVkIG9yIHByaXZhdGUgcHJvcGVydHkgaW5zaWRlIGEgZ2V0dGVyL3NldHRlciwgbGlrZSB1bmJvdW5kZWQgYWJvdmUuXG4gICAgICogQnkgYWNjZXNzaW5nIHRoZSBwcm90ZWN0ZWQgcHJvcGVydHkgaW5zaWRlIGEgbWV0aG9kLCB3ZSBzb2x2ZSB0aGF0IHByb2JsZW0uXG4gICAgICogVGhhdCdzIHdoeSB0aGlzIGZ1bmN0aW9uIGV4aXN0cy5cbiAgICAgKi9cbiAgICBNRENSaXBwbGUucHJvdG90eXBlLnNldFVuYm91bmRlZF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VW5ib3VuZGVkKEJvb2xlYW4odGhpcy51bmJvdW5kZWRfKSk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDUmlwcGxlO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ1JpcHBsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuZXhwb3J0IHsgdXRpbCB9O1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3VuZGF0aW9uJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2luZGV4J1xuaW1wb3J0IHsgc3VwcG9ydHNDc3NWYXJpYWJsZXMsIGFwcGx5UGFzc2l2ZSB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvdXRpbCdcbmltcG9ydCB7IG1hdGNoZXMgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJ1xuXG5leHBvcnQgY2xhc3MgUmlwcGxlQmFzZSBleHRlbmRzIE1EQ1JpcHBsZUZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IE1BVENIRVMoKSB7XG4gICAgLyogZ2xvYmFsIEhUTUxFbGVtZW50ICovXG4gICAgcmV0dXJuIChcbiAgICAgIFJpcHBsZUJhc2UuX21hdGNoZXMgfHxcbiAgICAgIChSaXBwbGVCYXNlLl9tYXRjaGVzID0gbWF0Y2hlcyhIVE1MRWxlbWVudC5wcm90b3R5cGUpKVxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cmZhY2VBY3RpdmUocmVmKSB7XG4gICAgcmV0dXJuIHJlZltSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZtLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbFtSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRkZWxldGUodm0uY2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogdGFyZ2V0ID0+IHZtLiRlbC5jb250YWlucyh0YXJnZXQpLFxuICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uc3R5bGVzLCB2YXJOYW1lLCB2YWx1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFJpcHBsZU1peGluID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzKVxuICAgIHRoaXMucmlwcGxlLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxjdXN0b20tZWxlbWVudCBcbiAgICA6dGFnPVwidGFnXCIgXG4gICAgOmNsYXNzZXM9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGVzPVwic3R5bGVzXCIgXG4gICAgY2xhc3M9XCJtZGMtcmlwcGxlXCI+XG4gICAgPHNsb3QgLz5cbiAgPC9jdXN0b20tZWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBDdXN0b21FbGVtZW50TWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlTWl4aW4gfSBmcm9tICcuL21kYy1yaXBwbGUtYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXJpcHBsZScsXG4gIG1peGluczogW0N1c3RvbUVsZW1lbnRNaXhpbiwgUmlwcGxlTWl4aW5dLFxuICBwcm9wczoge1xuICAgIHRhZzogU3RyaW5nXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8Y3VzdG9tLWJ1dHRvbiBcbiAgICA6Y2xhc3M9XCJjbGFzc2VzXCIgXG4gICAgOnN0eWxlPVwic3R5bGVzXCIgXG4gICAgOmhyZWY9XCJocmVmXCJcbiAgICA6bGluaz1cImxpbmtcIiBcbiAgICBjbGFzcz1cIm1kYy1mYWJcIiBcbiAgICB2LW9uPVwibGlzdGVuZXJzXCIgPlxuICAgIDxzcGFuIGNsYXNzPVwibWRjLWZhYl9faWNvblwiPlxuICAgICAgPHNsb3Q+e3sgaWNvbiB9fTwvc2xvdD5cbiAgICA8L3NwYW4+XG4gIDwvY3VzdG9tLWJ1dHRvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBEaXNwYXRjaEV2ZW50TWl4aW4sIEN1c3RvbUJ1dHRvbk1peGluIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IFJpcHBsZU1peGluIH0gZnJvbSAnLi4vcmlwcGxlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtZmFiJyxcbiAgbWl4aW5zOiBbRGlzcGF0Y2hFdmVudE1peGluLCBDdXN0b21CdXR0b25NaXhpbiwgUmlwcGxlTWl4aW5dLFxuICBwcm9wczoge1xuICAgIGljb246IFN0cmluZyxcbiAgICBtaW5pOiBCb29sZWFuLFxuICAgIGFic29sdXRlOiBCb29sZWFuLFxuICAgIGZpeGVkOiBCb29sZWFuXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgJ21hdGVyaWFsLWljb25zJzogdGhpcy5pY29uLFxuICAgICAgICAnbWRjLWZhYi0tbWluaSc6IHRoaXMubWluaSxcbiAgICAgICAgJ21kYy1mYWItLWFic29sdXRlJzogdGhpcy5hYnNvbHV0ZSxcbiAgICAgICAgJ21kYy1mYWItLWZpeGVkJzogdGhpcy5maXhlZFxuICAgICAgfSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaWNvbigpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsICdtYXRlcmlhbC1pY29ucycsIHRoaXMuaWNvbilcbiAgICB9LFxuICAgIG1pbmkoKSB7XG4gICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCAnbWRjLWZhYi0tbWluaScsIHRoaXMubWluaSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgbWRjRkFCIGZyb20gJy4vbWRjLWZhYi52dWUnXG5cbmV4cG9ydCB7IG1kY0ZBQiB9XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VQbHVnaW4oe1xuICBtZGNGQUJcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJDdXN0b21FbGVtZW50IiwiZnVuY3Rpb25hbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwicHJvcHMiLCJpcyIsInRhZyIsImRhdGEiLCJjaGlsZHJlbiIsIkN1c3RvbUVsZW1lbnRNaXhpbiIsIkN1c3RvbUJ1dHRvbiIsImxpbmsiLCJPYmplY3QiLCJoIiwiZWxlbWVudCIsInBhcmVudCIsIiRyb3V0ZXIiLCIkcm9vdCIsIiRvcHRpb25zIiwiYXR0cnMiLCJyb2xlIiwib24iLCJjbGljayIsIm5hdGl2ZU9uIiwiaHJlZiIsIkN1c3RvbUJ1dHRvbk1peGluIiwiU3RyaW5nIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwidG8iLCJleGFjdCIsImFwcGVuZCIsInJlcGxhY2UiLCJhY3RpdmVDbGFzcyIsImV4YWN0QWN0aXZlQ2xhc3MiLCJjb21wdXRlZCIsIkRpc3BhdGNoRXZlbnRNaXhpbiIsImV2ZW50IiwiQXJyYXkiLCJtZXRob2RzIiwiZGlzcGF0Y2hFdmVudCIsImV2dCIsIiRlbWl0IiwidHlwZSIsInRhcmdldCIsImV2ZW50VGFyZ2V0IiwiYXJncyIsImV2ZW50QXJncyIsImxpc3RlbmVycyIsIiRsaXN0ZW5lcnMiLCJlIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwicCIsImhhc093blByb3BlcnR5IiwiX19leHRlbmRzIiwiX18iLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImNyZWF0ZSIsIl9fYXNzaWduIiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNhbGwiLCJhcHBseSIsIl9fcmVhZCIsIm8iLCJtIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJyIiwiYXIiLCJuZXh0IiwiZG9uZSIsInB1c2giLCJ2YWx1ZSIsImVycm9yIiwiX19zcHJlYWQiLCJjb25jYXQiLCJ0c2xpYl8xLl9fc3ByZWFkIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJ0c2xpYl8xLl9fYXNzaWduIiwidXRpbC5zdXBwb3J0c0Nzc1ZhcmlhYmxlcyIsInV0aWwuYXBwbHlQYXNzaXZlIiwicG9ueWZpbGwubWF0Y2hlcyIsIlJpcHBsZUJhc2UiLCJyZWYiLCJNQVRDSEVTIiwiX21hdGNoZXMiLCJtYXRjaGVzIiwiSFRNTEVsZW1lbnQiLCJvcHRpb25zIiwiYnJvd3NlclN1cHBvcnRzQ3NzVmFycyIsInN1cHBvcnRzQ3NzVmFyaWFibGVzIiwiaXNVbmJvdW5kZWQiLCJpc1N1cmZhY2VBY3RpdmUiLCIkZWwiLCJpc1N1cmZhY2VEaXNhYmxlZCIsImFkZENsYXNzIiwiY2xhc3NOYW1lIiwiJHNldCIsImNsYXNzZXMiLCJyZW1vdmVDbGFzcyIsIiRkZWxldGUiLCJjb250YWluc0V2ZW50VGFyZ2V0IiwiY29udGFpbnMiLCJyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwbHlQYXNzaXZlIiwiZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyIiwiZXZ0VHlwZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwiZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJ1cGRhdGVDc3NWYXJpYWJsZSIsInZhck5hbWUiLCJzdHlsZXMiLCJjb21wdXRlQm91bmRpbmdSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0V2luZG93UGFnZU9mZnNldCIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsIk1EQ1JpcHBsZUZvdW5kYXRpb24iLCJSaXBwbGVN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
