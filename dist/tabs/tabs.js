/**
* @module vue-mdc-adaptertabs 0.19.4-beta
* @exports VueMDCTabs
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^1.0.0-0","material-components-web":"^1.0.0-0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueMDCTabs = factory());
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

  var CustomLink = {
    name: 'custom-link',
    functional: true,
    props: {
      tag: {
        type: String,
        default: 'a'
      },
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

        if (data.on.click) {
          data.nativeOn = {
            click: data.on.click
          };
        }
      } else {
        // element fallback
        element = context.props.tag;
      }

      return h(element, data, context.children);
    }
  };
  var CustomLinkMixin = {
    props: {
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
      CustomLink: CustomLink
    }
  };

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
  var cssClasses = {
    ACTIVE: 'mdc-tab--active'
  };
  var strings = {
    ARIA_SELECTED: 'aria-selected',
    CONTENT_SELECTOR: '.mdc-tab__content',
    INTERACTED_EVENT: 'MDCTab:interacted',
    RIPPLE_SELECTOR: '.mdc-tab__ripple',
    TABINDEX: 'tabIndex',
    TAB_INDICATOR_SELECTOR: '.mdc-tab-indicator'
  };

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

  var MDCTabFoundation =
  /** @class */
  function (_super) {
    __extends(MDCTabFoundation, _super);

    function MDCTabFoundation(adapter) {
      var _this = _super.call(this, _assign({}, MDCTabFoundation.defaultAdapter, adapter)) || this;

      _this.focusOnActivate_ = true;
      return _this;
    }

    Object.defineProperty(MDCTabFoundation, "cssClasses", {
      get: function get() {
        return cssClasses;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCTabFoundation, "strings", {
      get: function get() {
        return strings;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCTabFoundation, "defaultAdapter", {
      get: function get() {
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
          addClass: function addClass() {
            return undefined;
          },
          removeClass: function removeClass() {
            return undefined;
          },
          hasClass: function hasClass() {
            return false;
          },
          setAttr: function setAttr() {
            return undefined;
          },
          activateIndicator: function activateIndicator() {
            return undefined;
          },
          deactivateIndicator: function deactivateIndicator() {
            return undefined;
          },
          notifyInteracted: function notifyInteracted() {
            return undefined;
          },
          getOffsetLeft: function getOffsetLeft() {
            return 0;
          },
          getOffsetWidth: function getOffsetWidth() {
            return 0;
          },
          getContentOffsetLeft: function getContentOffsetLeft() {
            return 0;
          },
          getContentOffsetWidth: function getContentOffsetWidth() {
            return 0;
          },
          focus: function focus() {
            return undefined;
          }
        }; // tslint:enable:object-literal-sort-keys
      },
      enumerable: true,
      configurable: true
    });

    MDCTabFoundation.prototype.handleClick = function () {
      // It's up to the parent component to keep track of the active Tab and
      // ensure we don't activate a Tab that's already active.
      this.adapter_.notifyInteracted();
    };

    MDCTabFoundation.prototype.isActive = function () {
      return this.adapter_.hasClass(cssClasses.ACTIVE);
    };
    /**
     * Sets whether the tab should focus itself when activated
     */


    MDCTabFoundation.prototype.setFocusOnActivate = function (focusOnActivate) {
      this.focusOnActivate_ = focusOnActivate;
    };
    /**
     * Activates the Tab
     */


    MDCTabFoundation.prototype.activate = function (previousIndicatorClientRect) {
      this.adapter_.addClass(cssClasses.ACTIVE);
      this.adapter_.setAttr(strings.ARIA_SELECTED, 'true');
      this.adapter_.setAttr(strings.TABINDEX, '0');
      this.adapter_.activateIndicator(previousIndicatorClientRect);

      if (this.focusOnActivate_) {
        this.adapter_.focus();
      }
    };
    /**
     * Deactivates the Tab
     */


    MDCTabFoundation.prototype.deactivate = function () {
      // Early exit
      if (!this.isActive()) {
        return;
      }

      this.adapter_.removeClass(cssClasses.ACTIVE);
      this.adapter_.setAttr(strings.ARIA_SELECTED, 'false');
      this.adapter_.setAttr(strings.TABINDEX, '-1');
      this.adapter_.deactivateIndicator();
    };
    /**
     * Returns the dimensions of the Tab
     */


    MDCTabFoundation.prototype.computeDimensions = function () {
      var rootWidth = this.adapter_.getOffsetWidth();
      var rootLeft = this.adapter_.getOffsetLeft();
      var contentWidth = this.adapter_.getContentOffsetWidth();
      var contentLeft = this.adapter_.getContentOffsetLeft();
      return {
        contentLeft: rootLeft + contentLeft,
        contentRight: rootLeft + contentLeft + contentWidth,
        rootLeft: rootLeft,
        rootRight: rootLeft + rootWidth
      };
    };

    return MDCTabFoundation;
  }(MDCFoundation);

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
  var cssClasses$1 = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
  };
  var strings$1 = {
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
        return cssClasses$1;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
      get: function get() {
        return strings$1;
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
    name: 'mdc-tab',
    mixins: [CustomLinkMixin, DispatchEventMixin, VMAUniqueIdMixin],
    props: {
      active: Boolean,
      icon: [String, Array, Object],
      stacked: Boolean,
      minWidth: Boolean
    },
    data: function data() {
      return {
        classes: {
          'mdc-tab--stacked': this.stacked,
          'mdc-tab--min-width': this.minWidth
        },
        styles: {}
      };
    },
    inject: ['mdcTabBar'],
    computed: {
      hasIcon: function hasIcon() {
        if (this.icon || this.$slots.icon) {
          return this.icon ? extractIconProp(this.icon) : {};
        }

        return false;
      },
      hasText: function hasText() {
        return !!this.$slots.default;
      }
    },
    watch: {
      active: function active(value) {}
    },
    mounted: function mounted() {
      var _this = this;

      this.id = this.vma_uid_;
      this.foundation = new MDCTabFoundation({
        setAttr: function setAttr(attr, value) {
          return _this.$el.setAttribute(attr, value);
        },
        addClass: function addClass(className) {
          return _this.$set(_this.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this.$delete(_this.classes, className);
        },
        hasClass: function hasClass(className) {
          return _this.$el.classList.contains(className);
        },
        activateIndicator: function activateIndicator(previousIndicatorClientRect) {
          _this.$refs.tabIndicator.activate(previousIndicatorClientRect);
        },
        deactivateIndicator: function deactivateIndicator() {
          _this.$refs.tabIndicator.deactivate();
        },
        notifyInteracted: function notifyInteracted() {
          return emitCustomEvent(_this.$el, MDCTabFoundation.strings.INTERACTED_EVENT, {
            tabId: _this.id
          }, true
          /* bubble */
          );
        },
        getOffsetLeft: function getOffsetLeft() {
          return _this.$el.offsetLeft;
        },
        getOffsetWidth: function getOffsetWidth() {
          return _this.$el.offsetWidth;
        },
        getContentOffsetLeft: function getContentOffsetLeft() {
          return _this.$refs.content.offsetLeft;
        },
        getContentOffsetWidth: function getContentOffsetWidth() {
          return _this.$refs.content.offsetWidth;
        },
        focus: function focus() {
          return _this.$el.focus();
        }
      });
      this.foundation.init(); // console.log('tab mounted')

      this.mdcTabBar.tabList.push(this); // this.setActive(this.active)
    },
    beforeDestroy: function beforeDestroy() {
      this.foundation.destroy();
    },
    methods: {
      activate: function activate(computeIndicatorClientRect) {
        this.foundation.activate(computeIndicatorClientRect);
      },
      deactivate: function deactivate() {
        this.foundation.deactivate();
      },
      handleClick: function handleClick(evt) {
        this.foundation.handleClick(evt);
      },
      isActive: function isActive() {
        return this.foundation.isActive();
      },
      setActive: function setActive(isActive) {
        if (isActive) {
          this.$set(this.classes, 'mdc-tab--active', true), this.$refs.tabIndicator.activate();
        }
      },
      computeIndicatorClientRect: function computeIndicatorClientRect() {
        return this.$refs.tabIndicator.computeContentClientRect();
      },
      computeDimensions: function computeDimensions() {
        return this.foundation.computeDimensions();
      },
      focus: function focus() {
        this.$el.focus();
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
      "custom-link",
      {
        staticClass: "mdc-tab",
        class: _vm.classes,
        style: _vm.styles,
        attrs: {
          link: _vm.link,
          role: "tab",
          "aria-selected": "false",
          tabindex: "-1"
        },
        on: { click: _vm.handleClick }
      },
      [
        _c("span", { ref: "content", staticClass: "mdc-tab__content" }, [
          !!_vm.hasIcon
            ? _c(
                "i",
                {
                  ref: "icon",
                  staticClass: "mdc-tab__icon",
                  class: _vm.hasIcon.classes,
                  attrs: { tabindex: "0", "aria-hidden": "true" }
                },
                [_vm._t("icon", [_vm._v(_vm._s(_vm.hasIcon.content))])],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.hasText
            ? _c(
                "span",
                { staticClass: "mdc-tab__text-label" },
                [_vm._t("default")],
                2
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("mdc-tab-indicator", { ref: "tabIndicator" }),
        _vm._v(" "),
        _c("mdc-tab-ripple")
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
    

    
    var mdcTab = normalizeComponent_1(
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
  var strings$2 = {
    ARROW_LEFT_KEY: 'ArrowLeft',
    ARROW_RIGHT_KEY: 'ArrowRight',
    END_KEY: 'End',
    ENTER_KEY: 'Enter',
    HOME_KEY: 'Home',
    SPACE_KEY: 'Space',
    TAB_ACTIVATED_EVENT: 'MDCTabBar:activated',
    TAB_SCROLLER_SELECTOR: '.mdc-tab-scroller',
    TAB_SELECTOR: '.mdc-tab'
  };
  var numbers$1 = {
    ARROW_LEFT_KEYCODE: 37,
    ARROW_RIGHT_KEYCODE: 39,
    END_KEYCODE: 35,
    ENTER_KEYCODE: 13,
    EXTRA_SCROLL_AMOUNT: 20,
    HOME_KEYCODE: 36,
    SPACE_KEYCODE: 32
  };

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
  var ACCEPTABLE_KEYS = new Set(); // IE11 has no support for new Set with iterable so we need to initialize this by hand

  ACCEPTABLE_KEYS.add(strings$2.ARROW_LEFT_KEY);
  ACCEPTABLE_KEYS.add(strings$2.ARROW_RIGHT_KEY);
  ACCEPTABLE_KEYS.add(strings$2.END_KEY);
  ACCEPTABLE_KEYS.add(strings$2.HOME_KEY);
  ACCEPTABLE_KEYS.add(strings$2.ENTER_KEY);
  ACCEPTABLE_KEYS.add(strings$2.SPACE_KEY);
  var KEYCODE_MAP = new Map(); // IE11 has no support for new Map with iterable so we need to initialize this by hand

  KEYCODE_MAP.set(numbers$1.ARROW_LEFT_KEYCODE, strings$2.ARROW_LEFT_KEY);
  KEYCODE_MAP.set(numbers$1.ARROW_RIGHT_KEYCODE, strings$2.ARROW_RIGHT_KEY);
  KEYCODE_MAP.set(numbers$1.END_KEYCODE, strings$2.END_KEY);
  KEYCODE_MAP.set(numbers$1.HOME_KEYCODE, strings$2.HOME_KEY);
  KEYCODE_MAP.set(numbers$1.ENTER_KEYCODE, strings$2.ENTER_KEY);
  KEYCODE_MAP.set(numbers$1.SPACE_KEYCODE, strings$2.SPACE_KEY);

  var MDCTabBarFoundation =
  /** @class */
  function (_super) {
    __extends(MDCTabBarFoundation, _super);

    function MDCTabBarFoundation(adapter) {
      var _this = _super.call(this, _assign({}, MDCTabBarFoundation.defaultAdapter, adapter)) || this;

      _this.useAutomaticActivation_ = false;
      return _this;
    }

    Object.defineProperty(MDCTabBarFoundation, "strings", {
      get: function get() {
        return strings$2;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCTabBarFoundation, "numbers", {
      get: function get() {
        return numbers$1;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCTabBarFoundation, "defaultAdapter", {
      get: function get() {
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
          scrollTo: function scrollTo() {
            return undefined;
          },
          incrementScroll: function incrementScroll() {
            return undefined;
          },
          getScrollPosition: function getScrollPosition() {
            return 0;
          },
          getScrollContentWidth: function getScrollContentWidth() {
            return 0;
          },
          getOffsetWidth: function getOffsetWidth() {
            return 0;
          },
          isRTL: function isRTL() {
            return false;
          },
          setActiveTab: function setActiveTab() {
            return undefined;
          },
          activateTabAtIndex: function activateTabAtIndex() {
            return undefined;
          },
          deactivateTabAtIndex: function deactivateTabAtIndex() {
            return undefined;
          },
          focusTabAtIndex: function focusTabAtIndex() {
            return undefined;
          },
          getTabIndicatorClientRectAtIndex: function getTabIndicatorClientRectAtIndex() {
            return {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: 0,
              height: 0
            };
          },
          getTabDimensionsAtIndex: function getTabDimensionsAtIndex() {
            return {
              rootLeft: 0,
              rootRight: 0,
              contentLeft: 0,
              contentRight: 0
            };
          },
          getPreviousActiveTabIndex: function getPreviousActiveTabIndex() {
            return -1;
          },
          getFocusedTabIndex: function getFocusedTabIndex() {
            return -1;
          },
          getIndexOfTabById: function getIndexOfTabById() {
            return -1;
          },
          getTabListLength: function getTabListLength() {
            return 0;
          },
          notifyTabActivated: function notifyTabActivated() {
            return undefined;
          }
        }; // tslint:enable:object-literal-sort-keys
      },
      enumerable: true,
      configurable: true
    });
    /**
     * Switches between automatic and manual activation modes.
     * See https://www.w3.org/TR/wai-aria-practices/#tabpanel for examples.
     */

    MDCTabBarFoundation.prototype.setUseAutomaticActivation = function (useAutomaticActivation) {
      this.useAutomaticActivation_ = useAutomaticActivation;
    };

    MDCTabBarFoundation.prototype.activateTab = function (index) {
      var previousActiveIndex = this.adapter_.getPreviousActiveTabIndex();

      if (!this.indexIsInRange_(index) || index === previousActiveIndex) {
        return;
      }

      this.adapter_.deactivateTabAtIndex(previousActiveIndex);
      this.adapter_.activateTabAtIndex(index, this.adapter_.getTabIndicatorClientRectAtIndex(previousActiveIndex));
      this.scrollIntoView(index);
      this.adapter_.notifyTabActivated(index);
    };

    MDCTabBarFoundation.prototype.handleKeyDown = function (evt) {
      // Get the key from the event
      var key = this.getKeyFromEvent_(evt); // Early exit if the event key isn't one of the keyboard navigation keys

      if (key === undefined) {
        return;
      } // Prevent default behavior for movement keys, but not for activation keys, since :active is used to apply ripple


      if (!this.isActivationKey_(key)) {
        evt.preventDefault();
      }

      if (this.useAutomaticActivation_) {
        if (this.isActivationKey_(key)) {
          return;
        }

        var index = this.determineTargetFromKey_(this.adapter_.getPreviousActiveTabIndex(), key);
        this.adapter_.setActiveTab(index);
        this.scrollIntoView(index);
      } else {
        var focusedTabIndex = this.adapter_.getFocusedTabIndex();

        if (this.isActivationKey_(key)) {
          this.adapter_.setActiveTab(focusedTabIndex);
        } else {
          var index = this.determineTargetFromKey_(focusedTabIndex, key);
          this.adapter_.focusTabAtIndex(index);
          this.scrollIntoView(index);
        }
      }
    };
    /**
     * Handles the MDCTab:interacted event
     */


    MDCTabBarFoundation.prototype.handleTabInteraction = function (evt) {
      this.adapter_.setActiveTab(this.adapter_.getIndexOfTabById(evt.detail.tabId));
    };
    /**
     * Scrolls the tab at the given index into view
     * @param index The tab index to make visible
     */


    MDCTabBarFoundation.prototype.scrollIntoView = function (index) {
      // Early exit if the index is out of range
      if (!this.indexIsInRange_(index)) {
        return;
      } // Always scroll to 0 if scrolling to the 0th index


      if (index === 0) {
        return this.adapter_.scrollTo(0);
      } // Always scroll to the max value if scrolling to the Nth index
      // MDCTabScroller.scrollTo() will never scroll past the max possible value


      if (index === this.adapter_.getTabListLength() - 1) {
        return this.adapter_.scrollTo(this.adapter_.getScrollContentWidth());
      }

      if (this.isRTL_()) {
        return this.scrollIntoViewRTL_(index);
      }

      this.scrollIntoView_(index);
    };
    /**
     * Private method for determining the index of the destination tab based on what key was pressed
     * @param origin The original index from which to determine the destination
     * @param key The name of the key
     */


    MDCTabBarFoundation.prototype.determineTargetFromKey_ = function (origin, key) {
      var isRTL = this.isRTL_();
      var maxIndex = this.adapter_.getTabListLength() - 1;
      var shouldGoToEnd = key === strings$2.END_KEY;
      var shouldDecrement = key === strings$2.ARROW_LEFT_KEY && !isRTL || key === strings$2.ARROW_RIGHT_KEY && isRTL;
      var shouldIncrement = key === strings$2.ARROW_RIGHT_KEY && !isRTL || key === strings$2.ARROW_LEFT_KEY && isRTL;
      var index = origin;

      if (shouldGoToEnd) {
        index = maxIndex;
      } else if (shouldDecrement) {
        index -= 1;
      } else if (shouldIncrement) {
        index += 1;
      } else {
        index = 0;
      }

      if (index < 0) {
        index = maxIndex;
      } else if (index > maxIndex) {
        index = 0;
      }

      return index;
    };
    /**
     * Calculates the scroll increment that will make the tab at the given index visible
     * @param index The index of the tab
     * @param nextIndex The index of the next tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the Tab Bar
     */


    MDCTabBarFoundation.prototype.calculateScrollIncrement_ = function (index, nextIndex, scrollPosition, barWidth) {
      var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
      var relativeContentLeft = nextTabDimensions.contentLeft - scrollPosition - barWidth;
      var relativeContentRight = nextTabDimensions.contentRight - scrollPosition;
      var leftIncrement = relativeContentRight - numbers$1.EXTRA_SCROLL_AMOUNT;
      var rightIncrement = relativeContentLeft + numbers$1.EXTRA_SCROLL_AMOUNT;

      if (nextIndex < index) {
        return Math.min(leftIncrement, 0);
      }

      return Math.max(rightIncrement, 0);
    };
    /**
     * Calculates the scroll increment that will make the tab at the given index visible in RTL
     * @param index The index of the tab
     * @param nextIndex The index of the next tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the Tab Bar
     * @param scrollContentWidth The width of the scroll content
     */


    MDCTabBarFoundation.prototype.calculateScrollIncrementRTL_ = function (index, nextIndex, scrollPosition, barWidth, scrollContentWidth) {
      var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
      var relativeContentLeft = scrollContentWidth - nextTabDimensions.contentLeft - scrollPosition;
      var relativeContentRight = scrollContentWidth - nextTabDimensions.contentRight - scrollPosition - barWidth;
      var leftIncrement = relativeContentRight + numbers$1.EXTRA_SCROLL_AMOUNT;
      var rightIncrement = relativeContentLeft - numbers$1.EXTRA_SCROLL_AMOUNT;

      if (nextIndex > index) {
        return Math.max(leftIncrement, 0);
      }

      return Math.min(rightIncrement, 0);
    };
    /**
     * Determines the index of the adjacent tab closest to either edge of the Tab Bar
     * @param index The index of the tab
     * @param tabDimensions The dimensions of the tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the tab bar
     */


    MDCTabBarFoundation.prototype.findAdjacentTabIndexClosestToEdge_ = function (index, tabDimensions, scrollPosition, barWidth) {
      /**
       * Tabs are laid out in the Tab Scroller like this:
       *
       *    Scroll Position
       *    +---+
       *    |   |   Bar Width
       *    |   +-----------------------------------+
       *    |   |                                   |
       *    |   V                                   V
       *    |   +-----------------------------------+
       *    V   |             Tab Scroller          |
       *    +------------+--------------+-------------------+
       *    |    Tab     |      Tab     |        Tab        |
       *    +------------+--------------+-------------------+
       *        |                                   |
       *        +-----------------------------------+
       *
       * To determine the next adjacent index, we look at the Tab root left and
       * Tab root right, both relative to the scroll position. If the Tab root
       * left is less than 0, then we know it's out of view to the left. If the
       * Tab root right minus the bar width is greater than 0, we know the Tab is
       * out of view to the right. From there, we either increment or decrement
       * the index.
       */
      var relativeRootLeft = tabDimensions.rootLeft - scrollPosition;
      var relativeRootRight = tabDimensions.rootRight - scrollPosition - barWidth;
      var relativeRootDelta = relativeRootLeft + relativeRootRight;
      var leftEdgeIsCloser = relativeRootLeft < 0 || relativeRootDelta < 0;
      var rightEdgeIsCloser = relativeRootRight > 0 || relativeRootDelta > 0;

      if (leftEdgeIsCloser) {
        return index - 1;
      }

      if (rightEdgeIsCloser) {
        return index + 1;
      }

      return -1;
    };
    /**
     * Determines the index of the adjacent tab closest to either edge of the Tab Bar in RTL
     * @param index The index of the tab
     * @param tabDimensions The dimensions of the tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the tab bar
     * @param scrollContentWidth The width of the scroller content
     */


    MDCTabBarFoundation.prototype.findAdjacentTabIndexClosestToEdgeRTL_ = function (index, tabDimensions, scrollPosition, barWidth, scrollContentWidth) {
      var rootLeft = scrollContentWidth - tabDimensions.rootLeft - barWidth - scrollPosition;
      var rootRight = scrollContentWidth - tabDimensions.rootRight - scrollPosition;
      var rootDelta = rootLeft + rootRight;
      var leftEdgeIsCloser = rootLeft > 0 || rootDelta > 0;
      var rightEdgeIsCloser = rootRight < 0 || rootDelta < 0;

      if (leftEdgeIsCloser) {
        return index + 1;
      }

      if (rightEdgeIsCloser) {
        return index - 1;
      }

      return -1;
    };
    /**
     * Returns the key associated with a keydown event
     * @param evt The keydown event
     */


    MDCTabBarFoundation.prototype.getKeyFromEvent_ = function (evt) {
      if (ACCEPTABLE_KEYS.has(evt.key)) {
        return evt.key;
      }

      return KEYCODE_MAP.get(evt.keyCode);
    };

    MDCTabBarFoundation.prototype.isActivationKey_ = function (key) {
      return key === strings$2.SPACE_KEY || key === strings$2.ENTER_KEY;
    };
    /**
     * Returns whether a given index is inclusively between the ends
     * @param index The index to test
     */


    MDCTabBarFoundation.prototype.indexIsInRange_ = function (index) {
      return index >= 0 && index < this.adapter_.getTabListLength();
    };
    /**
     * Returns the view's RTL property
     */


    MDCTabBarFoundation.prototype.isRTL_ = function () {
      return this.adapter_.isRTL();
    };
    /**
     * Scrolls the tab at the given index into view for left-to-right user agents.
     * @param index The index of the tab to scroll into view
     */


    MDCTabBarFoundation.prototype.scrollIntoView_ = function (index) {
      var scrollPosition = this.adapter_.getScrollPosition();
      var barWidth = this.adapter_.getOffsetWidth();
      var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
      var nextIndex = this.findAdjacentTabIndexClosestToEdge_(index, tabDimensions, scrollPosition, barWidth);

      if (!this.indexIsInRange_(nextIndex)) {
        return;
      }

      var scrollIncrement = this.calculateScrollIncrement_(index, nextIndex, scrollPosition, barWidth);
      this.adapter_.incrementScroll(scrollIncrement);
    };
    /**
     * Scrolls the tab at the given index into view in RTL
     * @param index The tab index to make visible
     */


    MDCTabBarFoundation.prototype.scrollIntoViewRTL_ = function (index) {
      var scrollPosition = this.adapter_.getScrollPosition();
      var barWidth = this.adapter_.getOffsetWidth();
      var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
      var scrollWidth = this.adapter_.getScrollContentWidth();
      var nextIndex = this.findAdjacentTabIndexClosestToEdgeRTL_(index, tabDimensions, scrollPosition, barWidth, scrollWidth);

      if (!this.indexIsInRange_(nextIndex)) {
        return;
      }

      var scrollIncrement = this.calculateScrollIncrementRTL_(index, nextIndex, scrollPosition, barWidth, scrollWidth);
      this.adapter_.incrementScroll(scrollIncrement);
    };

    return MDCTabBarFoundation;
  }(MDCFoundation);

  var script$2 = {
    name: 'mdc-tab-bar',
    data: function data() {
      return {
        classes: {},
        indicatorStyles: {},
        tabList: []
      };
    },
    props: {
      activeTabIndex: [Number, String]
    },
    provide: function provide() {
      return {
        mdcTabBar: this
      };
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCTabBarFoundation({
        scrollTo: function scrollTo(scrollX) {
          return _this.$refs.scroller.scrollTo(scrollX);
        },
        incrementScroll: function incrementScroll(scrollXIncrement) {
          return _this.$refs.scroller.incrementScroll(scrollXIncrement);
        },
        getScrollPosition: function getScrollPosition() {
          return _this.$refs.scroller.getScrollPosition();
        },
        getScrollContentWidth: function getScrollContentWidth() {
          return _this.$refs.scroller.getScrollContentWidth();
        },
        getOffsetWidth: function getOffsetWidth() {
          return _this.$el.offsetWidth;
        },
        isRTL: function isRTL() {
          return window.getComputedStyle(_this.$el).getPropertyValue('direction') === 'rtl';
        },
        setActiveTab: function setActiveTab(index) {
          _this.foundation.activateTab(index);
        },
        activateTabAtIndex: function activateTabAtIndex(index, clientRect) {
          _this.tabList[index].activate(clientRect);
        },
        deactivateTabAtIndex: function deactivateTabAtIndex(index) {
          _this.tabList[index] && _this.tabList[index].deactivate();
        },
        focusTabAtIndex: function focusTabAtIndex(index) {
          return _this.tabList[index].focus();
        },
        getTabIndicatorClientRectAtIndex: function getTabIndicatorClientRectAtIndex(index) {
          return _this.tabList[index] && _this.tabList[index].computeIndicatorClientRect();
        },
        getTabDimensionsAtIndex: function getTabDimensionsAtIndex(index) {
          return _this.tabList[index].computeDimensions();
        },
        getPreviousActiveTabIndex: function getPreviousActiveTabIndex() {
          for (var i = 0; i < _this.tabList.length; i++) {
            if (_this.tabList[i].isActive()) {
              return i;
            }
          }

          return -1;
        },
        getFocusedTabIndex: function getFocusedTabIndex() {
          var tabElements = _this.getTabElements_();

          var activeElement = document.activeElement;
          return tabElements.indexOf(activeElement);
        },
        getIndexOfTabById: function getIndexOfTabById(id) {
          for (var i = 0; i < _this.tabList.length; i++) {
            if (_this.tabList[i].id === id) {
              return i;
            }
          }

          return -1;
        },
        getTabListLength: function getTabListLength() {
          return _this.tabList.length;
        },
        notifyTabActivated: function notifyTabActivated(index) {
          emitCustomEvent(_this.$el, MDCTabBarFoundation.strings.TAB_ACTIVATED_EVENT, {
            index: index
          }, true);

          _this.$emit('change', index);
        }
      });
      this.foundation.init(); // ensure active tab

      this.foundation.activateTab(this.activeTabIndex || 0);
    },
    beforeDestroy: function beforeDestroy() {
      this.foundation.destroy();
    },
    computed: {
      listeners: function listeners() {
        var _this2 = this;

        return _objectSpread({}, this.$listeners, {
          'MDCTab:interacted': function MDCTabInteracted(event) {
            return _this2.handleInteraction(event);
          },
          keydown: function keydown(event) {
            return _this2.handleKeyDown(event);
          }
        });
      }
    },
    methods: {
      handleInteraction: function handleInteraction(evt) {
        this.foundation.handleTabInteraction(evt);
      },
      handleKeyDown: function handleKeyDown(evt) {
        this.foundation.handleKeyDown(evt);
      }
    }
  };

  /* script */
  const __vue_script__$2 = script$2;

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      _vm._g(
        {
          staticClass: "mdc-tab-bar",
          class: _vm.classes,
          attrs: { role: "tablist" }
        },
        _vm.listeners
      ),
      [_c("mdc-tab-scroller", { ref: "scroller" }, [_vm._t("default")], 2)],
      1
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
    

    
    var mdcTabBar = normalizeComponent_1(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
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
  var cssClasses$2 = {
    ANIMATING: 'mdc-tab-scroller--animating',
    SCROLL_AREA_SCROLL: 'mdc-tab-scroller__scroll-area--scroll',
    SCROLL_TEST: 'mdc-tab-scroller__test'
  };
  var strings$3 = {
    AREA_SELECTOR: '.mdc-tab-scroller__scroll-area',
    CONTENT_SELECTOR: '.mdc-tab-scroller__scroll-content'
  };

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
  var MDCTabScrollerRTL =
  /** @class */
  function () {
    function MDCTabScrollerRTL(adapter) {
      this.adapter_ = adapter;
    }

    return MDCTabScrollerRTL;
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

  var MDCTabScrollerRTLDefault =
  /** @class */
  function (_super) {
    __extends(MDCTabScrollerRTLDefault, _super);

    function MDCTabScrollerRTLDefault() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    MDCTabScrollerRTLDefault.prototype.getScrollPositionRTL = function () {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var right = this.calculateScrollEdges_().right; // Scroll values on most browsers are ints instead of floats so we round

      return Math.round(right - currentScrollLeft);
    };

    MDCTabScrollerRTLDefault.prototype.scrollToRTL = function (scrollX) {
      var edges = this.calculateScrollEdges_();
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(edges.right - scrollX);
      return {
        finalScrollPosition: clampedScrollLeft,
        scrollDelta: clampedScrollLeft - currentScrollLeft
      };
    };

    MDCTabScrollerRTLDefault.prototype.incrementScrollRTL = function (scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
      return {
        finalScrollPosition: clampedScrollLeft,
        scrollDelta: clampedScrollLeft - currentScrollLeft
      };
    };

    MDCTabScrollerRTLDefault.prototype.getAnimatingScrollPosition = function (scrollX) {
      return scrollX;
    };

    MDCTabScrollerRTLDefault.prototype.calculateScrollEdges_ = function () {
      var contentWidth = this.adapter_.getScrollContentOffsetWidth();
      var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
      return {
        left: 0,
        right: contentWidth - rootWidth
      };
    };

    MDCTabScrollerRTLDefault.prototype.clampScrollValue_ = function (scrollX) {
      var edges = this.calculateScrollEdges_();
      return Math.min(Math.max(edges.left, scrollX), edges.right);
    };

    return MDCTabScrollerRTLDefault;
  }(MDCTabScrollerRTL);

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

  var MDCTabScrollerRTLNegative =
  /** @class */
  function (_super) {
    __extends(MDCTabScrollerRTLNegative, _super);

    function MDCTabScrollerRTLNegative() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    MDCTabScrollerRTLNegative.prototype.getScrollPositionRTL = function (translateX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      return Math.round(translateX - currentScrollLeft);
    };

    MDCTabScrollerRTLNegative.prototype.scrollToRTL = function (scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(-scrollX);
      return {
        finalScrollPosition: clampedScrollLeft,
        scrollDelta: clampedScrollLeft - currentScrollLeft
      };
    };

    MDCTabScrollerRTLNegative.prototype.incrementScrollRTL = function (scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
      return {
        finalScrollPosition: clampedScrollLeft,
        scrollDelta: clampedScrollLeft - currentScrollLeft
      };
    };

    MDCTabScrollerRTLNegative.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
      return scrollX - translateX;
    };

    MDCTabScrollerRTLNegative.prototype.calculateScrollEdges_ = function () {
      var contentWidth = this.adapter_.getScrollContentOffsetWidth();
      var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
      return {
        left: rootWidth - contentWidth,
        right: 0
      };
    };

    MDCTabScrollerRTLNegative.prototype.clampScrollValue_ = function (scrollX) {
      var edges = this.calculateScrollEdges_();
      return Math.max(Math.min(edges.right, scrollX), edges.left);
    };

    return MDCTabScrollerRTLNegative;
  }(MDCTabScrollerRTL);

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

  var MDCTabScrollerRTLReverse =
  /** @class */
  function (_super) {
    __extends(MDCTabScrollerRTLReverse, _super);

    function MDCTabScrollerRTLReverse() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    MDCTabScrollerRTLReverse.prototype.getScrollPositionRTL = function (translateX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft(); // Scroll values on most browsers are ints instead of floats so we round

      return Math.round(currentScrollLeft - translateX);
    };

    MDCTabScrollerRTLReverse.prototype.scrollToRTL = function (scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(scrollX);
      return {
        finalScrollPosition: clampedScrollLeft,
        scrollDelta: currentScrollLeft - clampedScrollLeft
      };
    };

    MDCTabScrollerRTLReverse.prototype.incrementScrollRTL = function (scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft + scrollX);
      return {
        finalScrollPosition: clampedScrollLeft,
        scrollDelta: currentScrollLeft - clampedScrollLeft
      };
    };

    MDCTabScrollerRTLReverse.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
      return scrollX + translateX;
    };

    MDCTabScrollerRTLReverse.prototype.calculateScrollEdges_ = function () {
      var contentWidth = this.adapter_.getScrollContentOffsetWidth();
      var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
      return {
        left: contentWidth - rootWidth,
        right: 0
      };
    };

    MDCTabScrollerRTLReverse.prototype.clampScrollValue_ = function (scrollX) {
      var edges = this.calculateScrollEdges_();
      return Math.min(Math.max(edges.right, scrollX), edges.left);
    };

    return MDCTabScrollerRTLReverse;
  }(MDCTabScrollerRTL);

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

  var MDCTabScrollerFoundation =
  /** @class */
  function (_super) {
    __extends(MDCTabScrollerFoundation, _super);

    function MDCTabScrollerFoundation(adapter) {
      var _this = _super.call(this, _assign({}, MDCTabScrollerFoundation.defaultAdapter, adapter)) || this;
      /**
       * Controls whether we should handle the transitionend and interaction events during the animation.
       */


      _this.isAnimating_ = false;
      return _this;
    }

    Object.defineProperty(MDCTabScrollerFoundation, "cssClasses", {
      get: function get() {
        return cssClasses$2;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCTabScrollerFoundation, "strings", {
      get: function get() {
        return strings$3;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCTabScrollerFoundation, "defaultAdapter", {
      get: function get() {
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
          eventTargetMatchesSelector: function eventTargetMatchesSelector() {
            return false;
          },
          addClass: function addClass() {
            return undefined;
          },
          removeClass: function removeClass() {
            return undefined;
          },
          addScrollAreaClass: function addScrollAreaClass() {
            return undefined;
          },
          setScrollAreaStyleProperty: function setScrollAreaStyleProperty() {
            return undefined;
          },
          setScrollContentStyleProperty: function setScrollContentStyleProperty() {
            return undefined;
          },
          getScrollContentStyleValue: function getScrollContentStyleValue() {
            return '';
          },
          setScrollAreaScrollLeft: function setScrollAreaScrollLeft() {
            return undefined;
          },
          getScrollAreaScrollLeft: function getScrollAreaScrollLeft() {
            return 0;
          },
          getScrollContentOffsetWidth: function getScrollContentOffsetWidth() {
            return 0;
          },
          getScrollAreaOffsetWidth: function getScrollAreaOffsetWidth() {
            return 0;
          },
          computeScrollAreaClientRect: function computeScrollAreaClientRect() {
            return {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: 0,
              height: 0
            };
          },
          computeScrollContentClientRect: function computeScrollContentClientRect() {
            return {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: 0,
              height: 0
            };
          },
          computeHorizontalScrollbarHeight: function computeHorizontalScrollbarHeight() {
            return 0;
          }
        }; // tslint:enable:object-literal-sort-keys
      },
      enumerable: true,
      configurable: true
    });

    MDCTabScrollerFoundation.prototype.init = function () {
      // Compute horizontal scrollbar height on scroller with overflow initially hidden, then update overflow to scroll
      // and immediately adjust bottom margin to avoid the scrollbar initially appearing before JS runs.
      var horizontalScrollbarHeight = this.adapter_.computeHorizontalScrollbarHeight();
      this.adapter_.setScrollAreaStyleProperty('margin-bottom', -horizontalScrollbarHeight + 'px');
      this.adapter_.addScrollAreaClass(MDCTabScrollerFoundation.cssClasses.SCROLL_AREA_SCROLL);
    };
    /**
     * Computes the current visual scroll position
     */


    MDCTabScrollerFoundation.prototype.getScrollPosition = function () {
      if (this.isRTL_()) {
        return this.computeCurrentScrollPositionRTL_();
      }

      var currentTranslateX = this.calculateCurrentTranslateX_();
      var scrollLeft = this.adapter_.getScrollAreaScrollLeft();
      return scrollLeft - currentTranslateX;
    };
    /**
     * Handles interaction events that occur during transition
     */


    MDCTabScrollerFoundation.prototype.handleInteraction = function () {
      // Early exit if we aren't animating
      if (!this.isAnimating_) {
        return;
      } // Prevent other event listeners from handling this event


      this.stopScrollAnimation_();
    };
    /**
     * Handles the transitionend event
     */


    MDCTabScrollerFoundation.prototype.handleTransitionEnd = function (evt) {
      // Early exit if we aren't animating or the event was triggered by a different element.
      var evtTarget = evt.target;

      if (!this.isAnimating_ || !this.adapter_.eventTargetMatchesSelector(evtTarget, MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)) {
        return;
      }

      this.isAnimating_ = false;
      this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
    };
    /**
     * Increment the scroll value by the scrollXIncrement
     * @param scrollXIncrement The value by which to increment the scroll position
     */


    MDCTabScrollerFoundation.prototype.incrementScroll = function (scrollXIncrement) {
      // Early exit for non-operational increment values
      if (scrollXIncrement === 0) {
        return;
      }

      if (this.isRTL_()) {
        return this.incrementScrollRTL_(scrollXIncrement);
      }

      this.incrementScroll_(scrollXIncrement);
    };
    /**
     * Scrolls to the given scrollX value
     */


    MDCTabScrollerFoundation.prototype.scrollTo = function (scrollX) {
      if (this.isRTL_()) {
        return this.scrollToRTL_(scrollX);
      }

      this.scrollTo_(scrollX);
    };
    /**
     * Returns the appropriate version of the MDCTabScrollerRTL
     */


    MDCTabScrollerFoundation.prototype.getRTLScroller = function () {
      if (!this.rtlScrollerInstance_) {
        this.rtlScrollerInstance_ = this.rtlScrollerFactory_();
      }

      return this.rtlScrollerInstance_;
    };
    /**
     * Returns the translateX value from a CSS matrix transform function string
     */


    MDCTabScrollerFoundation.prototype.calculateCurrentTranslateX_ = function () {
      var transformValue = this.adapter_.getScrollContentStyleValue('transform'); // Early exit if no transform is present

      if (transformValue === 'none') {
        return 0;
      } // The transform value comes back as a matrix transformation in the form
      // of `matrix(a, b, c, d, tx, ty)`. We only care about tx (translateX) so
      // we're going to grab all the parenthesized values, strip out tx, and
      // parse it.


      var match = /\((.+?)\)/.exec(transformValue);

      if (!match) {
        return 0;
      }

      var matrixParams = match[1]; // tslint:disable-next-line:ban-ts-ignore "Unused vars" should be a linter warning, not a compiler error.
      // @ts-ignore These unused variables should retain their semantic names for clarity.

      var _a = __read(matrixParams.split(','), 6),
          a = _a[0],
          b = _a[1],
          c = _a[2],
          d = _a[3],
          tx = _a[4],
          ty = _a[5];

      return parseFloat(tx); // tslint:disable-line:ban
    };
    /**
     * Calculates a safe scroll value that is > 0 and < the max scroll value
     * @param scrollX The distance to scroll
     */


    MDCTabScrollerFoundation.prototype.clampScrollValue_ = function (scrollX) {
      var edges = this.calculateScrollEdges_();
      return Math.min(Math.max(edges.left, scrollX), edges.right);
    };

    MDCTabScrollerFoundation.prototype.computeCurrentScrollPositionRTL_ = function () {
      var translateX = this.calculateCurrentTranslateX_();
      return this.getRTLScroller().getScrollPositionRTL(translateX);
    };

    MDCTabScrollerFoundation.prototype.calculateScrollEdges_ = function () {
      var contentWidth = this.adapter_.getScrollContentOffsetWidth();
      var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
      return {
        left: 0,
        right: contentWidth - rootWidth
      };
    };
    /**
     * Internal scroll method
     * @param scrollX The new scroll position
     */


    MDCTabScrollerFoundation.prototype.scrollTo_ = function (scrollX) {
      var currentScrollX = this.getScrollPosition();
      var safeScrollX = this.clampScrollValue_(scrollX);
      var scrollDelta = safeScrollX - currentScrollX;
      this.animate_({
        finalScrollPosition: safeScrollX,
        scrollDelta: scrollDelta
      });
    };
    /**
     * Internal RTL scroll method
     * @param scrollX The new scroll position
     */


    MDCTabScrollerFoundation.prototype.scrollToRTL_ = function (scrollX) {
      var animation = this.getRTLScroller().scrollToRTL(scrollX);
      this.animate_(animation);
    };
    /**
     * Internal increment scroll method
     * @param scrollX The new scroll position increment
     */


    MDCTabScrollerFoundation.prototype.incrementScroll_ = function (scrollX) {
      var currentScrollX = this.getScrollPosition();
      var targetScrollX = scrollX + currentScrollX;
      var safeScrollX = this.clampScrollValue_(targetScrollX);
      var scrollDelta = safeScrollX - currentScrollX;
      this.animate_({
        finalScrollPosition: safeScrollX,
        scrollDelta: scrollDelta
      });
    };
    /**
     * Internal increment scroll RTL method
     * @param scrollX The new scroll position RTL increment
     */


    MDCTabScrollerFoundation.prototype.incrementScrollRTL_ = function (scrollX) {
      var animation = this.getRTLScroller().incrementScrollRTL(scrollX);
      this.animate_(animation);
    };
    /**
     * Animates the tab scrolling
     * @param animation The animation to apply
     */


    MDCTabScrollerFoundation.prototype.animate_ = function (animation) {
      var _this = this; // Early exit if translateX is 0, which means there's no animation to perform


      if (animation.scrollDelta === 0) {
        return;
      }

      this.stopScrollAnimation_(); // This animation uses the FLIP approach.
      // Read more here: https://aerotwist.com/blog/flip-your-animations/

      this.adapter_.setScrollAreaScrollLeft(animation.finalScrollPosition);
      this.adapter_.setScrollContentStyleProperty('transform', "translateX(" + animation.scrollDelta + "px)"); // Force repaint

      this.adapter_.computeScrollAreaClientRect();
      requestAnimationFrame(function () {
        _this.adapter_.addClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);

        _this.adapter_.setScrollContentStyleProperty('transform', 'none');
      });
      this.isAnimating_ = true;
    };
    /**
     * Stops scroll animation
     */


    MDCTabScrollerFoundation.prototype.stopScrollAnimation_ = function () {
      this.isAnimating_ = false;
      var currentScrollPosition = this.getAnimatingScrollPosition_();
      this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
      this.adapter_.setScrollContentStyleProperty('transform', 'translateX(0px)');
      this.adapter_.setScrollAreaScrollLeft(currentScrollPosition);
    };
    /**
     * Gets the current scroll position during animation
     */


    MDCTabScrollerFoundation.prototype.getAnimatingScrollPosition_ = function () {
      var currentTranslateX = this.calculateCurrentTranslateX_();
      var scrollLeft = this.adapter_.getScrollAreaScrollLeft();

      if (this.isRTL_()) {
        return this.getRTLScroller().getAnimatingScrollPosition(scrollLeft, currentTranslateX);
      }

      return scrollLeft - currentTranslateX;
    };
    /**
     * Determines the RTL Scroller to use
     */


    MDCTabScrollerFoundation.prototype.rtlScrollerFactory_ = function () {
      // Browsers have three different implementations of scrollLeft in RTL mode,
      // dependent on the browser. The behavior is based off the max LTR
      // scrollleft value and 0.
      //
      // * Default scrolling in RTL *
      //    - Left-most value: 0
      //    - Right-most value: Max LTR scrollLeft value
      //
      // * Negative scrolling in RTL *
      //    - Left-most value: Negated max LTR scrollLeft value
      //    - Right-most value: 0
      //
      // * Reverse scrolling in RTL *
      //    - Left-most value: Max LTR scrollLeft value
      //    - Right-most value: 0
      //
      // We use those principles below to determine which RTL scrollLeft
      // behavior is implemented in the current browser.
      var initialScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      this.adapter_.setScrollAreaScrollLeft(initialScrollLeft - 1);
      var newScrollLeft = this.adapter_.getScrollAreaScrollLeft(); // If the newScrollLeft value is negative,then we know that the browser has
      // implemented negative RTL scrolling, since all other implementations have
      // only positive values.

      if (newScrollLeft < 0) {
        // Undo the scrollLeft test check
        this.adapter_.setScrollAreaScrollLeft(initialScrollLeft);
        return new MDCTabScrollerRTLNegative(this.adapter_);
      }

      var rootClientRect = this.adapter_.computeScrollAreaClientRect();
      var contentClientRect = this.adapter_.computeScrollContentClientRect();
      var rightEdgeDelta = Math.round(contentClientRect.right - rootClientRect.right); // Undo the scrollLeft test check

      this.adapter_.setScrollAreaScrollLeft(initialScrollLeft); // By calculating the clientRect of the root element and the clientRect of
      // the content element, we can determine how much the scroll value changed
      // when we performed the scrollLeft subtraction above.

      if (rightEdgeDelta === newScrollLeft) {
        return new MDCTabScrollerRTLReverse(this.adapter_);
      }

      return new MDCTabScrollerRTLDefault(this.adapter_);
    };

    MDCTabScrollerFoundation.prototype.isRTL_ = function () {
      return this.adapter_.getScrollContentStyleValue('direction') === 'rtl';
    };

    return MDCTabScrollerFoundation;
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
  /**
   * Stores result from computeHorizontalScrollbarHeight to avoid redundant processing.
   */

  var horizontalScrollbarHeight_;
  /**
   * Computes the height of browser-rendered horizontal scrollbars using a self-created test element.
   * May return 0 (e.g. on OS X browsers under default configuration).
   */

  function computeHorizontalScrollbarHeight(documentObj, shouldCacheResult) {
    if (shouldCacheResult === void 0) {
      shouldCacheResult = true;
    }

    if (shouldCacheResult && typeof horizontalScrollbarHeight_ !== 'undefined') {
      return horizontalScrollbarHeight_;
    }

    var el = documentObj.createElement('div');
    el.classList.add(cssClasses$2.SCROLL_TEST);
    documentObj.body.appendChild(el);
    var horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
    documentObj.body.removeChild(el);

    if (shouldCacheResult) {
      horizontalScrollbarHeight_ = horizontalScrollbarHeight;
    }

    return horizontalScrollbarHeight;
  }

  //
  var script$3 = {
    name: 'mdc-tab-scroller',
    data: function data() {
      return {
        classes: {},
        areaClasses: {},
        areaStyles: {},
        contentStyles: {}
      };
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCTabScrollerFoundation({
        eventTargetMatchesSelector: function eventTargetMatchesSelector(evtTarget, selector) {
          var MATCHES = matches(HTMLElement.prototype);
          return evtTarget[MATCHES](selector);
        },
        addClass: function addClass(className) {
          return _this.$set(_this.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this.$delete(_this.classes, className);
        },
        addScrollAreaClass: function addScrollAreaClass(className) {
          return _this.$set(_this.areaClasses, className, true);
        },
        setScrollAreaStyleProperty: function setScrollAreaStyleProperty(prop, value) {
          return _this.$set(_this.areaStyles, prop, value);
        },
        setScrollContentStyleProperty: function setScrollContentStyleProperty(prop, value) {
          return _this.$set(_this.contentStyles, prop, value);
        },
        getScrollContentStyleValue: function getScrollContentStyleValue(propName) {
          return window.getComputedStyle(_this.$refs.content).getPropertyValue(propName);
        },
        setScrollAreaScrollLeft: function setScrollAreaScrollLeft(scrollX) {
          return _this.$refs.area.scrollLeft = scrollX;
        },
        getScrollAreaScrollLeft: function getScrollAreaScrollLeft() {
          return _this.$refs.area.scrollLeft;
        },
        getScrollContentOffsetWidth: function getScrollContentOffsetWidth() {
          return _this.$refs.content.offsetWidth;
        },
        getScrollAreaOffsetWidth: function getScrollAreaOffsetWidth() {
          return _this.$refs.area.offsetWidth;
        },
        computeScrollAreaClientRect: function computeScrollAreaClientRect() {
          return _this.$refs.area.getBoundingClientRect();
        },
        computeScrollContentClientRect: function computeScrollContentClientRect() {
          return _this.$refs.content.getBoundingClientRect();
        },
        computeHorizontalScrollbarHeight: function computeHorizontalScrollbarHeight$1() {
          return computeHorizontalScrollbarHeight(document);
        }
      });
      this.foundation.init();
    },
    beforeDestroy: function beforeDestroy() {
      this.foundation.destroy();
    },
    methods: {
      handleTransitionEnd: function handleTransitionEnd(evt) {
        this.foundation.handleTransitionEnd(evt);
      },
      handleInteraction: function handleInteraction(evt) {
        this.foundation.handleInteraction(evt);
      },
      getScrollPosition: function getScrollPosition() {
        return this.foundation.getScrollPosition();
      },
      getScrollContentWidth: function getScrollContentWidth() {
        return this.$refs.content.offsetWidth;
      },
      incrementScroll: function incrementScroll(scrollXIncrement) {
        this.foundation.incrementScroll(scrollXIncrement);
      },
      scrollTo: function scrollTo(scrollX) {
        this.foundation.scrollTo(scrollX);
      }
    }
  };

  /* script */
  const __vue_script__$3 = script$3;

  /* template */
  var __vue_render__$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "mdc-tab-scroller", class: _vm.classes }, [
      _c(
        "div",
        {
          ref: "area",
          staticClass: "mdc-tab-scroller__scroll-area",
          class: _vm.areaClasses,
          style: _vm.areaStyles,
          on: {
            mousedown: _vm.handleInteraction,
            wheel: _vm.handleInteraction,
            pointerdown: _vm.handleInteraction,
            touchstart: _vm.handleInteraction,
            keydown: _vm.handleInteraction
          }
        },
        [
          _c(
            "div",
            {
              ref: "content",
              staticClass: "mdc-tab-scroller__scroll-content",
              style: _vm.contentStyles,
              on: { transitionend: _vm.handleTransitionEnd }
            },
            [_vm._t("default")],
            2
          )
        ]
      )
    ])
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
    

    
    var mdcTabScroller = normalizeComponent_1(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
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
  var cssClasses$3 = {
    ACTIVE: 'mdc-tab-indicator--active',
    FADE: 'mdc-tab-indicator--fade',
    NO_TRANSITION: 'mdc-tab-indicator--no-transition'
  };
  var strings$4 = {
    CONTENT_SELECTOR: '.mdc-tab-indicator__content'
  };

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

  var MDCTabIndicatorFoundation =
  /** @class */
  function (_super) {
    __extends(MDCTabIndicatorFoundation, _super);

    function MDCTabIndicatorFoundation(adapter) {
      return _super.call(this, _assign({}, MDCTabIndicatorFoundation.defaultAdapter, adapter)) || this;
    }

    Object.defineProperty(MDCTabIndicatorFoundation, "cssClasses", {
      get: function get() {
        return cssClasses$3;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCTabIndicatorFoundation, "strings", {
      get: function get() {
        return strings$4;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCTabIndicatorFoundation, "defaultAdapter", {
      get: function get() {
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
          addClass: function addClass() {
            return undefined;
          },
          removeClass: function removeClass() {
            return undefined;
          },
          computeContentClientRect: function computeContentClientRect() {
            return {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: 0,
              height: 0
            };
          },
          setContentStyleProperty: function setContentStyleProperty() {
            return undefined;
          }
        }; // tslint:enable:object-literal-sort-keys
      },
      enumerable: true,
      configurable: true
    });

    MDCTabIndicatorFoundation.prototype.computeContentClientRect = function () {
      return this.adapter_.computeContentClientRect();
    };

    return MDCTabIndicatorFoundation;
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
  /* istanbul ignore next: subclass is not a branch statement */

  var MDCSlidingTabIndicatorFoundation =
  /** @class */
  function (_super) {
    __extends(MDCSlidingTabIndicatorFoundation, _super);

    function MDCSlidingTabIndicatorFoundation() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    MDCSlidingTabIndicatorFoundation.prototype.activate = function (previousIndicatorClientRect) {
      // Early exit if no indicator is present to handle cases where an indicator
      // may be activated without a prior indicator state
      if (!previousIndicatorClientRect) {
        this.adapter_.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
        return;
      } // This animation uses the FLIP approach. You can read more about it at the link below:
      // https://aerotwist.com/blog/flip-your-animations/
      // Calculate the dimensions based on the dimensions of the previous indicator


      var currentClientRect = this.computeContentClientRect();
      var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
      var xPosition = previousIndicatorClientRect.left - currentClientRect.left;
      this.adapter_.addClass(MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
      this.adapter_.setContentStyleProperty('transform', "translateX(" + xPosition + "px) scaleX(" + widthDelta + ")"); // Force repaint before updating classes and transform to ensure the transform properly takes effect

      this.computeContentClientRect();
      this.adapter_.removeClass(MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
      this.adapter_.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
      this.adapter_.setContentStyleProperty('transform', '');
    };

    MDCSlidingTabIndicatorFoundation.prototype.deactivate = function () {
      this.adapter_.removeClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    };

    return MDCSlidingTabIndicatorFoundation;
  }(MDCTabIndicatorFoundation);

  //
  var script$4 = {
    name: 'mdc-tab-indicator',
    data: function data() {
      return {
        classes: {},
        styles: {}
      };
    },
    mounted: function mounted() {
      var _this = this;

      this.foundation = new MDCSlidingTabIndicatorFoundation({
        addClass: function addClass(className) {
          return _this.$set(_this.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this.$delete(_this.classes, className);
        },
        computeContentClientRect: function computeContentClientRect() {
          return _this.$refs.content.getBoundingClientRect();
        },
        setContentStyleProperty: function setContentStyleProperty(prop, value) {
          _this.$set(_this.styles, prop, value);
        }
      });
      this.foundation.init();
    },
    beforeDestroy: function beforeDestroy() {
      this.foundation.destroy();
    },
    methods: {
      activate: function activate(previousIndicatorClientRect) {
        this.foundation.activate(previousIndicatorClientRect);
      },
      deactivate: function deactivate() {
        this.foundation.deactivate();
      },
      computeContentClientRect: function computeContentClientRect() {
        return this.foundation.computeContentClientRect();
      }
    }
  };

  /* script */
  const __vue_script__$4 = script$4;

  /* template */
  var __vue_render__$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", { staticClass: "mdc-tab-indicator", class: _vm.classes }, [
      _c("span", {
        ref: "content",
        staticClass:
          "mdc-tab-indicator__content mdc-tab-indicator__content--underline",
        style: _vm.styles
      })
    ])
  };
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

    /* style */
    const __vue_inject_styles__$4 = undefined;
    /* scoped */
    const __vue_scope_id__$4 = undefined;
    /* module identifier */
    const __vue_module_identifier__$4 = undefined;
    /* functional template */
    const __vue_is_functional_template__$4 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcTabIndicator = normalizeComponent_1(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      undefined,
      undefined
    );

  //
  var script$5 = {
    name: 'mdc-tab-ripple',
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

  /* script */
  const __vue_script__$5 = script$5;

  /* template */
  var __vue_render__$5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", {
      staticClass: "mdc-tab__ripple",
      class: _vm.classes,
      style: _vm.styles
    })
  };
  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;

    /* style */
    const __vue_inject_styles__$5 = undefined;
    /* scoped */
    const __vue_scope_id__$5 = undefined;
    /* module identifier */
    const __vue_module_identifier__$5 = undefined;
    /* functional template */
    const __vue_is_functional_template__$5 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcTabRipple = normalizeComponent_1(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      undefined,
      undefined
    );

  var plugin = BasePlugin({
    mdcTab: mdcTab,
    mdcTabBar: mdcTabBar,
    mdcTabScroller: mdcTabScroller,
    mdcTabIndicator: mdcTabIndicator,
    mdcTabRipple: mdcTabRipple
  });

  autoInit(plugin);

  return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9iYXNlL2F1dG8taW5pdC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9iYXNlLXBsdWdpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZWxlbWVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tbGluay5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZXZlbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWljb24uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvZGlzcGF0Y2gtZXZlbnQtbWl4aW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvdW5pcXVlaWQtbWl4aW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9wb255ZmlsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZG9tL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS1iYXNlLmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS52dWUiLCIuLi8uLi9jb21wb25lbnRzL3RhYnMvbWRjLXRhYi52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1iYXIvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9jb21wb25lbnRzL3RhYnMvbWRjLXRhYi1iYXIudnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvcnRsLXNjcm9sbGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvcnRsLWRlZmF1bHQtc2Nyb2xsZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtbmVnYXRpdmUtc2Nyb2xsZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtcmV2ZXJzZS1zY3JvbGxlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci91dGlsLmpzIiwiLi4vLi4vY29tcG9uZW50cy90YWJzL21kYy10YWItc2Nyb2xsZXIudnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWluZGljYXRvci9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL3NsaWRpbmctZm91bmRhdGlvbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvdGFicy9tZGMtdGFiLWluZGljYXRvci52dWUiLCIuLi8uLi9jb21wb25lbnRzL3RhYnMvbWRjLXRhYi1yaXBwbGUudnVlIiwiLi4vLi4vY29tcG9uZW50cy90YWJzL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy90YWJzL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHtcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIGNvbnRleHQucHJvcHMuaXMgfHwgY29udGV4dC5wcm9wcy50YWcgfHwgJ2RpdicsXG4gICAgICBjb250ZXh0LmRhdGEsXG4gICAgICBjb250ZXh0LmNoaWxkcmVuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50TWl4aW4gPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21FbGVtZW50XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDdXN0b21MaW5rID0ge1xuICBuYW1lOiAnY3VzdG9tLWxpbmsnLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIHRhZzogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdhJyB9LFxuICAgIGxpbms6IE9iamVjdFxuICB9LFxuICByZW5kZXIoaCwgY29udGV4dCkge1xuICAgIGxldCBlbGVtZW50XG4gICAgbGV0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LmRhdGEpXG5cbiAgICBpZiAoY29udGV4dC5wcm9wcy5saW5rICYmIGNvbnRleHQucGFyZW50LiRyb3V0ZXIpIHtcbiAgICAgIC8vIHJvdXRlci1saW5rIGNhc2VcbiAgICAgIGVsZW1lbnQgPSBjb250ZXh0LnBhcmVudC4kcm9vdC4kb3B0aW9ucy5jb21wb25lbnRzWydSb3V0ZXJMaW5rJ11cbiAgICAgIGRhdGEucHJvcHMgPSBPYmplY3QuYXNzaWduKHsgdGFnOiBjb250ZXh0LnByb3BzLnRhZyB9LCBjb250ZXh0LnByb3BzLmxpbmspXG4gICAgICBpZiAoZGF0YS5vbi5jbGljaykge1xuICAgICAgICBkYXRhLm5hdGl2ZU9uID0geyBjbGljazogZGF0YS5vbi5jbGljayB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVsZW1lbnQgZmFsbGJhY2tcbiAgICAgIGVsZW1lbnQgPSBjb250ZXh0LnByb3BzLnRhZ1xuICAgIH1cblxuICAgIHJldHVybiBoKGVsZW1lbnQsIGRhdGEsIGNvbnRleHQuY2hpbGRyZW4pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUxpbmtNaXhpbiA9IHtcbiAgcHJvcHM6IHtcbiAgICB0bzogW1N0cmluZywgT2JqZWN0XSxcbiAgICBleGFjdDogQm9vbGVhbixcbiAgICBhcHBlbmQ6IEJvb2xlYW4sXG4gICAgcmVwbGFjZTogQm9vbGVhbixcbiAgICBhY3RpdmVDbGFzczogU3RyaW5nLFxuICAgIGV4YWN0QWN0aXZlQ2xhc3M6IFN0cmluZ1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpbmsoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLnRvICYmIHtcbiAgICAgICAgICB0bzogdGhpcy50byxcbiAgICAgICAgICBleGFjdDogdGhpcy5leGFjdCxcbiAgICAgICAgICBhcHBlbmQ6IHRoaXMuYXBwZW5kLFxuICAgICAgICAgIHJlcGxhY2U6IHRoaXMucmVwbGFjZSxcbiAgICAgICAgICBhY3RpdmVDbGFzczogdGhpcy5hY3RpdmVDbGFzcyxcbiAgICAgICAgICBleGFjdEFjdGl2ZUNsYXNzOiB0aGlzLmV4YWN0QWN0aXZlQ2xhc3NcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUxpbmtcbiAgfVxufVxuIiwiLyogZ2xvYmFsIEN1c3RvbUV2ZW50ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Q3VzdG9tRXZlbnQoZWwsIGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gIGxldCBldnRcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICBidWJibGVzOiBzaG91bGRCdWJibGVcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKVxuICB9XG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RJY29uUHJvcChpY29uUHJvcCkge1xuICBpZiAodHlwZW9mIGljb25Qcm9wID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7ICdtYXRlcmlhbC1pY29ucyc6IHRydWUgfSxcbiAgICAgIGNvbnRlbnQ6IGljb25Qcm9wXG4gICAgfVxuICB9IGVsc2UgaWYgKGljb25Qcm9wIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3NlczogaWNvblByb3AucmVkdWNlKFxuICAgICAgICAocmVzdWx0LCB2YWx1ZSkgPT4gT2JqZWN0LmFzc2lnbihyZXN1bHQsIHsgW3ZhbHVlXTogdHJ1ZSB9KSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGljb25Qcm9wID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiBpY29uUHJvcC5jbGFzc05hbWVcbiAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgLnJlZHVjZShcbiAgICAgICAgICAocmVzdWx0LCB2YWx1ZSkgPT4gT2JqZWN0LmFzc2lnbihyZXN1bHQsIHsgW3ZhbHVlXTogdHJ1ZSB9KSxcbiAgICAgICAgICB7fVxuICAgICAgICApLFxuICAgICAgY29udGVudDogaWNvblByb3AudGV4dENvbnRlbnRcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBEaXNwYXRjaEV2ZW50TWl4aW4gPSB7XG4gIHByb3BzOiB7XG4gICAgZXZlbnQ6IFN0cmluZyxcbiAgICAnZXZlbnQtdGFyZ2V0JzogT2JqZWN0LFxuICAgICdldmVudC1hcmdzJzogQXJyYXlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRpc3BhdGNoRXZlbnQoZXZ0KSB7XG4gICAgICBldnQgJiYgdGhpcy4kZW1pdChldnQudHlwZSwgZXZ0KVxuICAgICAgaWYgKHRoaXMuZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZXZlbnRUYXJnZXQgfHwgdGhpcy4kcm9vdFxuICAgICAgICBsZXQgYXJncyA9IHRoaXMuZXZlbnRBcmdzIHx8IFtdXG4gICAgICAgIHRhcmdldC4kZW1pdCh0aGlzLmV2ZW50LCAuLi5hcmdzKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaXN0ZW5lcnMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLiRsaXN0ZW5lcnMsXG4gICAgICAgIGNsaWNrOiBlID0+IHRoaXMuZGlzcGF0Y2hFdmVudChlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgTURDRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgaWYgKGFkYXB0ZXIgPT09IHZvaWQgMCkgeyBhZGFwdGVyID0ge307IH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAgICAgICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAgICAgICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0ZvdW5kYXRpb247XG59KCkpO1xuZXhwb3J0IHsgTURDRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgQUNUSVZFOiAnbWRjLXRhYi0tYWN0aXZlJyxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBBUklBX1NFTEVDVEVEOiAnYXJpYS1zZWxlY3RlZCcsXG4gICAgQ09OVEVOVF9TRUxFQ1RPUjogJy5tZGMtdGFiX19jb250ZW50JyxcbiAgICBJTlRFUkFDVEVEX0VWRU5UOiAnTURDVGFiOmludGVyYWN0ZWQnLFxuICAgIFJJUFBMRV9TRUxFQ1RPUjogJy5tZGMtdGFiX19yaXBwbGUnLFxuICAgIFRBQklOREVYOiAndGFiSW5kZXgnLFxuICAgIFRBQl9JTkRJQ0FUT1JfU0VMRUNUT1I6ICcubWRjLXRhYi1pbmRpY2F0b3InLFxufTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MsIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENUYWJGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1RhYkZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGFiRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1RhYkZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5mb2N1c09uQWN0aXZhdGVfID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGFiRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RhYkZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUYWJGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIHNldEF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZUluZGljYXRvcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlYWN0aXZhdGVJbmRpY2F0b3I6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlJbnRlcmFjdGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0T2Zmc2V0TGVmdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBnZXRPZmZzZXRXaWR0aDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBnZXRDb250ZW50T2Zmc2V0TGVmdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBnZXRDb250ZW50T2Zmc2V0V2lkdGg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgZm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENUYWJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSXQncyB1cCB0byB0aGUgcGFyZW50IGNvbXBvbmVudCB0byBrZWVwIHRyYWNrIG9mIHRoZSBhY3RpdmUgVGFiIGFuZFxuICAgICAgICAvLyBlbnN1cmUgd2UgZG9uJ3QgYWN0aXZhdGUgYSBUYWIgdGhhdCdzIGFscmVhZHkgYWN0aXZlLlxuICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUludGVyYWN0ZWQoKTtcbiAgICB9O1xuICAgIE1EQ1RhYkZvdW5kYXRpb24ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkFDVElWRSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHdoZXRoZXIgdGhlIHRhYiBzaG91bGQgZm9jdXMgaXRzZWxmIHdoZW4gYWN0aXZhdGVkXG4gICAgICovXG4gICAgTURDVGFiRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0Rm9jdXNPbkFjdGl2YXRlID0gZnVuY3Rpb24gKGZvY3VzT25BY3RpdmF0ZSkge1xuICAgICAgICB0aGlzLmZvY3VzT25BY3RpdmF0ZV8gPSBmb2N1c09uQWN0aXZhdGU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBY3RpdmF0ZXMgdGhlIFRhYlxuICAgICAqL1xuICAgIE1EQ1RhYkZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKHN0cmluZ3MuQVJJQV9TRUxFQ1RFRCwgJ3RydWUnKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKHN0cmluZ3MuVEFCSU5ERVgsICcwJyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWN0aXZhdGVJbmRpY2F0b3IocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KTtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNPbkFjdGl2YXRlXykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZWFjdGl2YXRlcyB0aGUgVGFiXG4gICAgICovXG4gICAgTURDVGFiRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRWFybHkgZXhpdFxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoc3RyaW5ncy5BUklBX1NFTEVDVEVELCAnZmFsc2UnKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKHN0cmluZ3MuVEFCSU5ERVgsICctMScpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlYWN0aXZhdGVJbmRpY2F0b3IoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIFRhYlxuICAgICAqL1xuICAgIE1EQ1RhYkZvdW5kYXRpb24ucHJvdG90eXBlLmNvbXB1dGVEaW1lbnNpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcm9vdFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRPZmZzZXRXaWR0aCgpO1xuICAgICAgICB2YXIgcm9vdExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldE9mZnNldExlZnQoKTtcbiAgICAgICAgdmFyIGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0Q29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgICAgIHZhciBjb250ZW50TGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0Q29udGVudE9mZnNldExlZnQoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbnRlbnRMZWZ0OiByb290TGVmdCArIGNvbnRlbnRMZWZ0LFxuICAgICAgICAgICAgY29udGVudFJpZ2h0OiByb290TGVmdCArIGNvbnRlbnRMZWZ0ICsgY29udGVudFdpZHRoLFxuICAgICAgICAgICAgcm9vdExlZnQ6IHJvb3RMZWZ0LFxuICAgICAgICAgICAgcm9vdFJpZ2h0OiByb290TGVmdCArIHJvb3RXaWR0aCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUYWJGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENUYWJGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVGFiRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG9cbiAqIGRldGVjdCBDU1MgY3VzdG9tIHZhcmlhYmxlIHN1cHBvcnQuXG4gKi9cbnZhciBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBhcHBseVBhc3NpdmUgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0XG4gKiBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnQuXG4gKi9cbnZhciBzdXBwb3J0c1Bhc3NpdmVfO1xuZnVuY3Rpb24gZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopIHtcbiAgICAvLyBEZXRlY3QgdmVyc2lvbnMgb2YgRWRnZSB3aXRoIGJ1Z2d5IHZhcigpIHN1cHBvcnRcbiAgICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzExNDk1NDQ4L1xuICAgIHZhciBkb2N1bWVudCA9IHdpbmRvd09iai5kb2N1bWVudDtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vZGUuY2xhc3NOYW1lID0gJ21kYy1yaXBwbGUtc3VyZmFjZS0tdGVzdC1lZGdlLXZhci1idWcnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgLy8gVGhlIGJ1ZyBleGlzdHMgaWYgOjpiZWZvcmUgc3R5bGUgZW5kcyB1cCBwcm9wYWdhdGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gICAgLy8gQWRkaXRpb25hbGx5LCBnZXRDb21wdXRlZFN0eWxlIHJldHVybnMgbnVsbCBpbiBpZnJhbWVzIHdpdGggZGlzcGxheTogXCJub25lXCIgaW4gRmlyZWZveCxcbiAgICAvLyBidXQgRmlyZWZveCBpcyBrbm93biB0byBzdXBwb3J0IENTUyBjdXN0b20gcHJvcGVydGllcyBjb3JyZWN0bHkuXG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IHdpbmRvd09iai5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIHZhciBoYXNQc2V1ZG9WYXJCdWcgPSBjb21wdXRlZFN0eWxlICE9PSBudWxsICYmIGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wU3R5bGUgPT09ICdzb2xpZCc7XG4gICAgbm9kZS5yZW1vdmUoKTtcbiAgICByZXR1cm4gaGFzUHNldWRvVmFyQnVnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvd09iaiwgZm9yY2VSZWZyZXNoKSB7XG4gICAgaWYgKGZvcmNlUmVmcmVzaCA9PT0gdm9pZCAwKSB7IGZvcmNlUmVmcmVzaCA9IGZhbHNlOyB9XG4gICAgdmFyIENTUyA9IHdpbmRvd09iai5DU1M7XG4gICAgdmFyIHN1cHBvcnRzQ3NzVmFycyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgICBpZiAodHlwZW9mIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9PT0gJ2Jvb2xlYW4nICYmICFmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgICB9XG4gICAgdmFyIHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gQ1NTICYmIHR5cGVvZiBDU1Muc3VwcG9ydHMgPT09ICdmdW5jdGlvbic7XG4gICAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzID0gQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAgIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NDY2OVxuICAgIC8vIFNlZTogUkVBRE1FIHNlY3Rpb24gb24gU2FmYXJpXG4gICAgdmFyIHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyA9IChDU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICAgICAgQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKSk7XG4gICAgaWYgKGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgfHwgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzKSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFycyA9ICFkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcnMgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJpYWJsZXNfID0gc3VwcG9ydHNDc3NWYXJzO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJzO1xufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmRcbiAqIGlmIHNvLCB1c2UgdGhlbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmosIGZvcmNlUmVmcmVzaCkge1xuICAgIGlmIChnbG9iYWxPYmogPT09IHZvaWQgMCkgeyBnbG9iYWxPYmogPSB3aW5kb3c7IH1cbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICBpZiAoc3VwcG9ydHNQYXNzaXZlXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgICAgICB2YXIgaXNTdXBwb3J0ZWRfMSA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZ2xvYmFsT2JqLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sIHtcbiAgICAgICAgICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTdXBwb3J0ZWRfMSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1N1cHBvcnRlZF8xO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICB9IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZW1wdHkgY2Fubm90IHRocm93IGVycm9yIGR1ZSB0byB0ZXN0cy4gdHNsaW50IGFsc28gZGlzYWJsZXMgY29uc29sZS5sb2cuXG4gICAgICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZF8xO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlXyA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGV2dCwgcGFnZU9mZnNldCwgY2xpZW50UmVjdCkge1xuICAgIGlmICghZXZ0KSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgdmFyIHggPSBwYWdlT2Zmc2V0LngsIHkgPSBwYWdlT2Zmc2V0Lnk7XG4gICAgdmFyIGRvY3VtZW50WCA9IHggKyBjbGllbnRSZWN0LmxlZnQ7XG4gICAgdmFyIGRvY3VtZW50WSA9IHkgKyBjbGllbnRSZWN0LnRvcDtcbiAgICB2YXIgbm9ybWFsaXplZFg7XG4gICAgdmFyIG5vcm1hbGl6ZWRZO1xuICAgIC8vIERldGVybWluZSB0b3VjaCBwb2ludCByZWxhdGl2ZSB0byB0aGUgcmlwcGxlIGNvbnRhaW5lci5cbiAgICBpZiAoZXZ0LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICB2YXIgdG91Y2hFdmVudCA9IGV2dDtcbiAgICAgICAgbm9ybWFsaXplZFggPSB0b3VjaEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgICAgICBub3JtYWxpemVkWSA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSBkb2N1bWVudFk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgbW91c2VFdmVudCA9IGV2dDtcbiAgICAgICAgbm9ybWFsaXplZFggPSBtb3VzZUV2ZW50LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgICAgICBub3JtYWxpemVkWSA9IG1vdXNlRXZlbnQucGFnZVkgLSBkb2N1bWVudFk7XG4gICAgfVxuICAgIHJldHVybiB7IHg6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWSB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbnZhciBNRENDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDQ29tcG9uZW50KHJvb3QsIGZvdW5kYXRpb24pIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb290XyA9IHJvb3Q7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCB0c2xpYl8xLl9fc3ByZWFkKGFyZ3MpKTtcbiAgICAgICAgLy8gTm90ZSB0aGF0IHdlIGluaXRpYWxpemUgZm91bmRhdGlvbiBoZXJlIGFuZCBub3Qgd2l0aGluIHRoZSBjb25zdHJ1Y3RvcidzIGRlZmF1bHQgcGFyYW0gc28gdGhhdFxuICAgICAgICAvLyB0aGlzLnJvb3RfIGlzIGRlZmluZWQgYW5kIGNhbiBiZSB1c2VkIHdpdGhpbiB0aGUgZm91bmRhdGlvbiBjbGFzcy5cbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXyA9IGZvdW5kYXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSA6IGZvdW5kYXRpb247XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgICAgICB0aGlzLmluaXRpYWxTeW5jV2l0aERPTSgpO1xuICAgIH1cbiAgICBNRENDb21wb25lbnQuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHdoaWNoIGV4dGVuZCBNRENCYXNlIHNob3VsZCBwcm92aWRlIGFuIGF0dGFjaFRvKCkgbWV0aG9kIHRoYXQgdGFrZXMgYSByb290IGVsZW1lbnQgYW5kXG4gICAgICAgIC8vIHJldHVybnMgYW4gaW5zdGFudGlhdGVkIGNvbXBvbmVudCB3aXRoIGl0cyByb290IHNldCB0byB0aGF0IGVsZW1lbnQuIEFsc28gbm90ZSB0aGF0IGluIHRoZSBjYXNlcyBvZlxuICAgICAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgICAgICAvLyBmcm9tIGdldERlZmF1bHRGb3VuZGF0aW9uKCkuXG4gICAgICAgIHJldHVybiBuZXcgTURDQ29tcG9uZW50KHJvb3QsIG5ldyBNRENGb3VuZGF0aW9uKHt9KSk7XG4gICAgfTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogbWV0aG9kIHBhcmFtIG9ubHkgZXhpc3RzIGZvciB0eXBpbmcgcHVycG9zZXM7IGl0IGRvZXMgbm90IG5lZWQgdG8gYmUgdW5pdCB0ZXN0ZWQgKi9cbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgX2FyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgICAgICAvLyBcImNvbnN0cnVjdG9yXCIuIEVzc2VudGlhbGx5LCBpdCBpcyBhIGhvb2sgaW50byB0aGUgcGFyZW50IGNvbnN0cnVjdG9yIGJlZm9yZSB0aGUgZm91bmRhdGlvbiBpc1xuICAgICAgICAvLyBpbml0aWFsaXplZC4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIGJlc2lkZXMgcm9vdCBhbmQgZm91bmRhdGlvbiB3aWxsIGJlIHBhc3NlZCBpbiBoZXJlLlxuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgZ2V0RGVmYXVsdEZvdW5kYXRpb24gdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCAnICtcbiAgICAgICAgICAgICdmb3VuZGF0aW9uIGNsYXNzJyk7XG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgdGhleSBuZWVkIHRvIHBlcmZvcm0gd29yayB0byBzeW5jaHJvbml6ZSB3aXRoIGEgaG9zdCBET01cbiAgICAgICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgICAgICAvLyB0byBzb21lIHByb3BlcnR5IG9yIGF0dHJpYnV0ZSBvZiB0aGUgaG9zdCBET00uIFBsZWFzZSBub3RlOiB0aGlzIGlzICpub3QqIHRoZSBwbGFjZSB0byBwZXJmb3JtIERPTVxuICAgICAgICAvLyByZWFkcy93cml0ZXMgdGhhdCB3b3VsZCBjYXVzZSBsYXlvdXQgLyBwYWludCwgYXMgdGhpcyBpcyBjYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIHdpdGhpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgbWF5IGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZWxlYXNlIGFueSByZXNvdXJjZXMgLyBkZXJlZ2lzdGVyIGFueSBsaXN0ZW5lcnMgdGhleSBoYXZlXG4gICAgICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmRlc3Ryb3koKTtcbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS51bmxpc3RlbiA9IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZpcmVzIGEgY3Jvc3MtYnJvd3Nlci1jb21wYXRpYmxlIGN1c3RvbSBldmVudCBmcm9tIHRoZSBjb21wb25lbnQgcm9vdCBvZiB0aGUgZ2l2ZW4gdHlwZSwgd2l0aCB0aGUgZ2l2ZW4gZGF0YS5cbiAgICAgKi9cbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAoZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlKSB7XG4gICAgICAgIGlmIChzaG91bGRCdWJibGUgPT09IHZvaWQgMCkgeyBzaG91bGRCdWJibGUgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgZXZ0O1xuICAgICAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3RfLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9O1xuICAgIHJldHVybiBNRENDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0IHsgTURDQ29tcG9uZW50IH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEEgXCJwb255ZmlsbFwiIGlzIGEgcG9seWZpbGwgdGhhdCBkb2Vzbid0IG1vZGlmeSB0aGUgZ2xvYmFsIHByb3RvdHlwZSBjaGFpbi5cbiAqIFRoaXMgbWFrZXMgcG9ueWZpbGxzIHNhZmVyIHRoYW4gdHJhZGl0aW9uYWwgcG9seWZpbGxzLCBlc3BlY2lhbGx5IGZvciBsaWJyYXJpZXMgbGlrZSBNREMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xvc2VzdCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICB9XG4gICAgdmFyIGVsID0gZWxlbWVudDtcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKG1hdGNoZXMoZWwsIHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG4gICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hlcyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHZhciBuYXRpdmVNYXRjaGVzID0gZWxlbWVudC5tYXRjaGVzXG4gICAgICAgIHx8IGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yXG4gICAgICAgIHx8IGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3I7XG4gICAgcmV0dXJuIG5hdGl2ZU1hdGNoZXMuY2FsbChlbGVtZW50LCBzZWxlY3Rvcik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb255ZmlsbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHBvbnlmaWxsIGZyb20gJy4vcG9ueWZpbGwnO1xuZXhwb3J0IHsgcG9ueWZpbGwgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0IHZhciBjc3NDbGFzc2VzID0ge1xuICAgIC8vIFJpcHBsZSBpcyBhIHNwZWNpYWwgY2FzZSB3aGVyZSB0aGUgXCJyb290XCIgY29tcG9uZW50IGlzIHJlYWxseSBhIFwibWl4aW5cIiBvZiBzb3J0cyxcbiAgICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gICAgLy8gQ1NTIGNsYXNzIHRoYXQgYWxsIG90aGVyIENTUyBjbGFzc2VzIGRlcml2ZSBmcm9tLlxuICAgIEJHX0ZPQ1VTRUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQnLFxuICAgIEZHX0FDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb24nLFxuICAgIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbiAgICBST09UOiAnbWRjLXJpcHBsZS11cGdyYWRlZCcsXG4gICAgVU5CT1VOREVEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkJyxcbn07XG5leHBvcnQgdmFyIHN0cmluZ3MgPSB7XG4gICAgVkFSX0ZHX1NDQUxFOiAnLS1tZGMtcmlwcGxlLWZnLXNjYWxlJyxcbiAgICBWQVJfRkdfU0laRTogJy0tbWRjLXJpcHBsZS1mZy1zaXplJyxcbiAgICBWQVJfRkdfVFJBTlNMQVRFX0VORDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kJyxcbiAgICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gICAgVkFSX0xFRlQ6ICctLW1kYy1yaXBwbGUtbGVmdCcsXG4gICAgVkFSX1RPUDogJy0tbWRjLXJpcHBsZS10b3AnLFxufTtcbmV4cG9ydCB2YXIgbnVtYmVycyA9IHtcbiAgICBERUFDVElWQVRJT05fVElNRU9VVF9NUzogMjI1LFxuICAgIEZHX0RFQUNUSVZBVElPTl9NUzogMTUwLFxuICAgIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gICAgUEFERElORzogMTAsXG4gICAgVEFQX0RFTEFZX01TOiAzMDAsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMgfSBmcm9tICcuL3V0aWwnO1xuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbnZhciBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gW1xuICAgICd0b3VjaHN0YXJ0JywgJ3BvaW50ZXJkb3duJywgJ21vdXNlZG93bicsICdrZXlkb3duJyxcbl07XG4vLyBEZWFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gZG9jdW1lbnRFbGVtZW50IHdoZW4gYSBwb2ludGVyLXJlbGF0ZWQgZG93biBldmVudCBvY2N1cnNcbnZhciBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFtcbiAgICAndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnLFxuXTtcbi8vIHNpbXVsdGFuZW91cyBuZXN0ZWQgYWN0aXZhdGlvbnNcbnZhciBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG52YXIgTURDUmlwcGxlRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENSaXBwbGVGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1JpcHBsZUZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZmdTY2FsZV8gPSAnMCc7XG4gICAgICAgIF90aGlzLmZyYW1lXyA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuICAgICAgICBfdGhpcy5pbml0aWFsU2l6ZV8gPSAwO1xuICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICBfdGhpcy5tYXhSYWRpdXNfID0gMDtcbiAgICAgICAgX3RoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHsgbGVmdDogMCwgdG9wOiAwIH07XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSBfdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLmFjdGl2YXRlXyhlKTsgfTtcbiAgICAgICAgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZGVhY3RpdmF0ZV8oKTsgfTtcbiAgICAgICAgX3RoaXMuZm9jdXNIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUZvY3VzKCk7IH07XG4gICAgICAgIF90aGlzLmJsdXJIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUJsdXIoKTsgfTtcbiAgICAgICAgX3RoaXMucmVzaXplSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5sYXlvdXQoKTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgeDogMCwgeTogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgaXNVbmJvdW5kZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN1cHBvcnRzUHJlc3NSaXBwbGUgPSB0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpO1xuICAgICAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBST09UXzEgPSBfYS5ST09ULCBVTkJPVU5ERURfMSA9IF9hLlVOQk9VTkRFRDtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoUk9PVF8xKTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERURfMSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGVzIG5lZWQgbGF5b3V0IGxvZ2ljIGFwcGxpZWQgaW1tZWRpYXRlbHkgdG8gc2V0IGNvb3JkaW5hdGVzIGZvciBib3RoIHNoYWRlIGFuZCByaXBwbGVcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2YXRpb25UaW1lcl8pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVF8yID0gX2EuUk9PVCwgVU5CT1VOREVEXzIgPSBfYS5VTkJPVU5ERUQ7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFJPT1RfMik7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEXzIpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZUNzc1ZhcnNfKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCk7XG4gICAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGV2dCBPcHRpb25hbCBldmVudCBjb250YWluaW5nIHBvc2l0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB0aGlzLmFjdGl2YXRlXyhldnQpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgICAgIF90aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VW5ib3VuZGVkID0gZnVuY3Rpb24gKHVuYm91bmRlZCkge1xuICAgICAgICB2YXIgVU5CT1VOREVEID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLlVOQk9VTkRFRDtcbiAgICAgICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogV2UgY29tcHV0ZSB0aGlzIHByb3BlcnR5IHNvIHRoYXQgd2UgYXJlIG5vdCBxdWVyeWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2xpZW50XG4gICAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAgICogY2xpZW50LXNpZGUgZmVhdHVyZS1kZXRlY3Rpb24gbWF5IGhhcHBlbiB0b28gZWFybHksIHN1Y2ggYXMgd2hlbiBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyXG4gICAgICogYW5kIHRoZW4gaW5pdGlhbGl6ZWQgYXQgbW91bnQgdGltZSBvbiB0aGUgY2xpZW50LlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnN1cHBvcnRzUHJlc3NSaXBwbGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgICAgICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgICAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHN1cHBvcnRzUHJlc3NSaXBwbGUgUGFzc2VkIGZyb20gaW5pdCB0byBzYXZlIGEgcmVkdW5kYW50IGZ1bmN0aW9uIGNhbGxcbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZWdpc3RlclJvb3RIYW5kbGVyc18gPSBmdW5jdGlvbiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGV2dC50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVtb3ZlQ3NzVmFyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByaXBwbGVTdHJpbmdzID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJpcHBsZVN0cmluZ3MpO1xuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShyaXBwbGVTdHJpbmdzW2tleV0sIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdm9pZCByZWFjdGluZyB0byBmb2xsb3ctb24gZXZlbnRzIGZpcmVkIGJ5IHRvdWNoIGRldmljZSBhZnRlciBhbiBhbHJlYWR5LXByb2Nlc3NlZCB1c2VyIGludGVyYWN0aW9uXG4gICAgICAgIHZhciBwcmV2aW91c0FjdGl2YXRpb25FdmVudCA9IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICAgICAgICB2YXIgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBldnQgIT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c0FjdGl2YXRpb25FdmVudC50eXBlICE9PSBldnQudHlwZTtcbiAgICAgICAgaWYgKGlzU2FtZUludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZXZ0ID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBldnQ7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IGV2dCAhPT0gdW5kZWZpbmVkICYmIChldnQudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZXZ0LnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBldnQudHlwZSA9PT0gJ3BvaW50ZXJkb3duJyk7XG4gICAgICAgIHZhciBoYXNBY3RpdmF0ZWRDaGlsZCA9IGV2dCAhPT0gdW5kZWZpbmVkICYmIGFjdGl2YXRlZFRhcmdldHMubGVuZ3RoID4gMCAmJiBhY3RpdmF0ZWRUYXJnZXRzLnNvbWUoZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gX3RoaXMuYWRhcHRlcl8uY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpOyB9KTtcbiAgICAgICAgaWYgKGhhc0FjdGl2YXRlZENoaWxkKSB7XG4gICAgICAgICAgICAvLyBJbW1lZGlhdGVseSByZXNldCBhY3RpdmF0aW9uIHN0YXRlLCB3aGlsZSBwcmVzZXJ2aW5nIGxvZ2ljIHRoYXQgcHJldmVudHMgdG91Y2ggZm9sbG93LW9uIGV2ZW50c1xuICAgICAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMucHVzaChldnQudGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZXZ0KTtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGV2dCk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IGFycmF5IG9uIG5leHQgZnJhbWUgYWZ0ZXIgdGhlIGN1cnJlbnQgZXZlbnQgaGFzIGhhZCBhIGNoYW5jZSB0byBidWJibGUgdG8gcHJldmVudCBhbmNlc3RvciByaXBwbGVzXG4gICAgICAgICAgICBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG4gICAgICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZVxuICAgICAgICAgICAgICAgICYmIGV2dCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgJiYgKGV2dC5rZXkgPT09ICcgJyB8fCBldnQua2V5Q29kZSA9PT0gMzIpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgICAgICAgICAvLyBhY3RpdmUgc3RhdGVzIGluY29uc2lzdGVudGx5IHdoZW4gdGhleSdyZSBjYWxsZWQgd2l0aGluIGV2ZW50IGhhbmRsaW5nIGNvZGU6XG4gICAgICAgICAgICAgICAgLy8gLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02MzU5NzFcbiAgICAgICAgICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgICAgICAgICAvLyBXZSB0cnkgZmlyc3Qgb3V0c2lkZSByQUYgdG8gc3VwcG9ydCBFZGdlLCB3aGljaCBkb2VzIG5vdCBleGhpYml0IHRoaXMgcHJvYmxlbSwgYnV0IHdpbGwgY3Jhc2ggaWYgYSBDU1NcbiAgICAgICAgICAgICAgICAvLyB2YXJpYWJsZSBpcyBzZXQgd2l0aGluIGEgckFGIGNhbGxiYWNrIGZvciBhIHN1Ym1pdCBidXR0b24gaW50ZXJhY3Rpb24gKCMyMjQxKS5cbiAgICAgICAgICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSBfdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhldnQpO1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gX3RoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgcmV0dXJuIChldnQgIT09IHVuZGVmaW5lZCAmJiBldnQudHlwZSA9PT0gJ2tleWRvd24nKSA/IHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlQWN0aXZlKCkgOiB0cnVlO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYW5pbWF0ZUFjdGl2YXRpb25fID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3MsIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQgPSBfYS5WQVJfRkdfVFJBTlNMQVRFX1NUQVJULCBWQVJfRkdfVFJBTlNMQVRFX0VORCA9IF9hLlZBUl9GR19UUkFOU0xBVEVfRU5EO1xuICAgICAgICB2YXIgX2IgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIEZHX0RFQUNUSVZBVElPTiA9IF9iLkZHX0RFQUNUSVZBVElPTiwgRkdfQUNUSVZBVElPTiA9IF9iLkZHX0FDVElWQVRJT047XG4gICAgICAgIHZhciBERUFDVElWQVRJT05fVElNRU9VVF9NUyA9IE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5ERUFDVElWQVRJT05fVElNRU9VVF9NUztcbiAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgICAgIHZhciB0cmFuc2xhdGVFbmQgPSAnJztcbiAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHZhciBfYyA9IHRoaXMuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpLCBzdGFydFBvaW50ID0gX2Muc3RhcnRQb2ludCwgZW5kUG9pbnQgPSBfYy5lbmRQb2ludDtcbiAgICAgICAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gc3RhcnRQb2ludC54ICsgXCJweCwgXCIgKyBzdGFydFBvaW50LnkgKyBcInB4XCI7XG4gICAgICAgICAgICB0cmFuc2xhdGVFbmQgPSBlbmRQb2ludC54ICsgXCJweCwgXCIgKyBlbmRQb2ludC55ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfRU5ELCB0cmFuc2xhdGVFbmQpO1xuICAgICAgICAvLyBDYW5jZWwgYW55IG9uZ29pbmcgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5pbWF0aW9uc1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAvLyBGb3JjZSBsYXlvdXQgaW4gb3JkZXIgdG8gcmUtdHJpZ2dlciB0aGUgYW5pbWF0aW9uLlxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKTsgfSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLCBhY3RpdmF0aW9uRXZlbnQgPSBfYS5hY3RpdmF0aW9uRXZlbnQsIHdhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IF9hLndhc0FjdGl2YXRlZEJ5UG9pbnRlcjtcbiAgICAgICAgdmFyIHN0YXJ0UG9pbnQ7XG4gICAgICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIpIHtcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoYWN0aXZhdGlvbkV2ZW50LCB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmZyYW1lXy53aWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2VudGVyIHRoZSBlbGVtZW50IGFyb3VuZCB0aGUgc3RhcnQgcG9pbnQuXG4gICAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgZW5kUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiAodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICAgICAgeTogKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IHN0YXJ0UG9pbnQ6IHN0YXJ0UG9pbnQsIGVuZFBvaW50OiBlbmRQb2ludCB9O1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYm90aCB3aGVuIGEgcG9pbnRpbmcgZGV2aWNlIGlzIHJlbGVhc2VkLCBhbmQgd2hlbiB0aGUgYWN0aXZhdGlvbiBhbmltYXRpb24gZW5kcy5cbiAgICAgICAgLy8gVGhlIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gc2hvdWxkIG9ubHkgcnVuIGFmdGVyIGJvdGggb2YgdGhvc2Ugb2NjdXIuXG4gICAgICAgIHZhciBGR19ERUFDVElWQVRJT04gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8sIGhhc0RlYWN0aXZhdGlvblVYUnVuID0gX2EuaGFzRGVhY3RpdmF0aW9uVVhSdW4sIGlzQWN0aXZhdGVkID0gX2EuaXNBY3RpdmF0ZWQ7XG4gICAgICAgIHZhciBhY3RpdmF0aW9uSGFzRW5kZWQgPSBoYXNEZWFjdGl2YXRpb25VWFJ1biB8fCAhaXNBY3RpdmF0ZWQ7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICAgICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBGR19BQ1RJVkFUSU9OID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT047XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlc2V0QWN0aXZhdGlvblN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIC8vIFRvdWNoIGRldmljZXMgbWF5IGZpcmUgYWRkaXRpb25hbCBldmVudHMgZm9yIHRoZSBzYW1lIGludGVyYWN0aW9uIHdpdGhpbiBhIHNob3J0IHRpbWUuXG4gICAgICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHVuZGVmaW5lZDsgfSwgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlRBUF9ERUxBWV9NUyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWFjdGl2YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGF0ZSA9IHRzbGliXzEuX19hc3NpZ24oe30sIGFjdGl2YXRpb25TdGF0ZSk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7IH0pO1xuICAgICAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmhhc0RlYWN0aXZhdGlvblVYUnVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYW5pbWF0ZURlYWN0aXZhdGlvbl8gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHdhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IF9hLndhc0FjdGl2YXRlZEJ5UG9pbnRlciwgd2FzRWxlbWVudE1hZGVBY3RpdmUgPSBfYS53YXNFbGVtZW50TWFkZUFjdGl2ZTtcbiAgICAgICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlciB8fCB3YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0SW50ZXJuYWxfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgICAgICB2YXIgbWF4RGltID0gTWF0aC5tYXgodGhpcy5mcmFtZV8uaGVpZ2h0LCB0aGlzLmZyYW1lXy53aWR0aCk7XG4gICAgICAgIC8vIFN1cmZhY2UgZGlhbWV0ZXIgaXMgdHJlYXRlZCBkaWZmZXJlbnRseSBmb3IgdW5ib3VuZGVkIHZzLiBib3VuZGVkIHJpcHBsZXMuXG4gICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGUgZGlhbWV0ZXIgaXMgY2FsY3VsYXRlZCBzbWFsbGVyIHNpbmNlIHRoZSBzdXJmYWNlIGlzIGV4cGVjdGVkIHRvIGFscmVhZHkgYmUgcGFkZGVkIGFwcHJvcHJpYXRlbHlcbiAgICAgICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAgICAgLy8gc3F1YXJlKS4gQm91bmRlZCByaXBwbGVzLCBvbiB0aGUgb3RoZXIgaGFuZCwgYXJlIGZ1bGx5IGV4cGVjdGVkIHRvIGV4cGFuZCBiZXlvbmQgdGhlIHN1cmZhY2UncyBsb25nZXN0IGRpYW1ldGVyXG4gICAgICAgIC8vIChjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBkaWFnb25hbCBwbHVzIGEgY29uc3RhbnQgcGFkZGluZyksIGFuZCBhcmUgY2xpcHBlZCBhdCB0aGUgc3VyZmFjZSdzIGJvcmRlciB2aWFcbiAgICAgICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgICAgICB2YXIgZ2V0Qm91bmRlZFJhZGl1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KF90aGlzLmZyYW1lXy53aWR0aCwgMikgKyBNYXRoLnBvdyhfdGhpcy5mcmFtZV8uaGVpZ2h0LCAyKSk7XG4gICAgICAgICAgICByZXR1cm4gaHlwb3RlbnVzZSArIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5QQURESU5HO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1heFJhZGl1c18gPSB0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkgPyBtYXhEaW0gOiBnZXRCb3VuZGVkUmFkaXVzKCk7XG4gICAgICAgIC8vIFJpcHBsZSBpcyBzaXplZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiBvZiB0aGUgc3VyZmFjZSwgdGhlbiBzY2FsZXMgdXAgdXNpbmcgYSBDU1Mgc2NhbGUgdHJhbnNmb3JtXG4gICAgICAgIHRoaXMuaW5pdGlhbFNpemVfID0gTWF0aC5mbG9vcihtYXhEaW0gKiBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuSU5JVElBTF9PUklHSU5fU0NBTEUpO1xuICAgICAgICB0aGlzLmZnU2NhbGVfID0gXCJcIiArIHRoaXMubWF4UmFkaXVzXyAvIHRoaXMuaW5pdGlhbFNpemVfO1xuICAgICAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVMYXlvdXRDc3NWYXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzLCBWQVJfRkdfU0laRSA9IF9hLlZBUl9GR19TSVpFLCBWQVJfTEVGVCA9IF9hLlZBUl9MRUZULCBWQVJfVE9QID0gX2EuVkFSX1RPUCwgVkFSX0ZHX1NDQUxFID0gX2EuVkFSX0ZHX1NDQUxFO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TSVpFLCB0aGlzLmluaXRpYWxTaXplXyArIFwicHhcIik7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NDQUxFLCB0aGlzLmZnU2NhbGVfKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgICAgICAgICAgdG9wOiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9MRUZULCB0aGlzLnVuYm91bmRlZENvb3Jkc18ubGVmdCArIFwicHhcIik7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9UT1AsIHRoaXMudW5ib3VuZGVkQ29vcmRzXy50b3AgKyBcInB4XCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDUmlwcGxlRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBwb255ZmlsbCB9IGZyb20gJ0BtYXRlcmlhbC9kb20vaW5kZXgnO1xuaW1wb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG52YXIgTURDUmlwcGxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1JpcHBsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENSaXBwbGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE1EQ1JpcHBsZS5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290LCBvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHsgaXNVbmJvdW5kZWQ6IHVuZGVmaW5lZCB9OyB9XG4gICAgICAgIHZhciByaXBwbGUgPSBuZXcgTURDUmlwcGxlKHJvb3QpO1xuICAgICAgICAvLyBPbmx5IG92ZXJyaWRlIHVuYm91bmRlZCBiZWhhdmlvciBpZiBvcHRpb24gaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcbiAgICAgICAgaWYgKG9wdHMuaXNVbmJvdW5kZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmlwcGxlLnVuYm91bmRlZCA9IG9wdHMuaXNVbmJvdW5kZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJpcHBsZTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdXRpbC5zdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpOyB9LFxuICAgICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IH0sXG4gICAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5jb250YWlucyh0YXJnZXQpOyB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfSk7IH0sXG4gICAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBvbnlmaWxsLm1hdGNoZXMoaW5zdGFuY2Uucm9vdF8sICc6YWN0aXZlJyk7IH0sXG4gICAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQm9vbGVhbihpbnN0YW5jZS5kaXNhYmxlZCk7IH0sXG4gICAgICAgICAgICBpc1VuYm91bmRlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQm9vbGVhbihpbnN0YW5jZS51bmJvdW5kZWQpOyB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiBmdW5jdGlvbiAodmFyTmFtZSwgdmFsdWUpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLnN0eWxlLnNldFByb3BlcnR5KHZhck5hbWUsIHZhbHVlKTsgfSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGUucHJvdG90eXBlLCBcInVuYm91bmRlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy51bmJvdW5kZWRfKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodW5ib3VuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVuYm91bmRlZF8gPSBCb29sZWFuKHVuYm91bmRlZCk7XG4gICAgICAgICAgICB0aGlzLnNldFVuYm91bmRlZF8oKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5hY3RpdmF0ZSgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmRlYWN0aXZhdGUoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmxheW91dCgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcm9vdCA9IHRoaXMucm9vdF87XG4gICAgICAgIHRoaXMudW5ib3VuZGVkID0gJ21kY1JpcHBsZUlzVW5ib3VuZGVkJyBpbiByb290LmRhdGFzZXQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbG9zdXJlIENvbXBpbGVyIHRocm93cyBhbiBhY2Nlc3MgY29udHJvbCBlcnJvciB3aGVuIGRpcmVjdGx5IGFjY2Vzc2luZyBhXG4gICAgICogcHJvdGVjdGVkIG9yIHByaXZhdGUgcHJvcGVydHkgaW5zaWRlIGEgZ2V0dGVyL3NldHRlciwgbGlrZSB1bmJvdW5kZWQgYWJvdmUuXG4gICAgICogQnkgYWNjZXNzaW5nIHRoZSBwcm90ZWN0ZWQgcHJvcGVydHkgaW5zaWRlIGEgbWV0aG9kLCB3ZSBzb2x2ZSB0aGF0IHByb2JsZW0uXG4gICAgICogVGhhdCdzIHdoeSB0aGlzIGZ1bmN0aW9uIGV4aXN0cy5cbiAgICAgKi9cbiAgICBNRENSaXBwbGUucHJvdG90eXBlLnNldFVuYm91bmRlZF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VW5ib3VuZGVkKEJvb2xlYW4odGhpcy51bmJvdW5kZWRfKSk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDUmlwcGxlO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ1JpcHBsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuZXhwb3J0IHsgdXRpbCB9O1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3VuZGF0aW9uJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2luZGV4J1xuaW1wb3J0IHsgc3VwcG9ydHNDc3NWYXJpYWJsZXMsIGFwcGx5UGFzc2l2ZSB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvdXRpbCdcbmltcG9ydCB7IG1hdGNoZXMgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJ1xuXG5leHBvcnQgY2xhc3MgUmlwcGxlQmFzZSBleHRlbmRzIE1EQ1JpcHBsZUZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IE1BVENIRVMoKSB7XG4gICAgLyogZ2xvYmFsIEhUTUxFbGVtZW50ICovXG4gICAgcmV0dXJuIChcbiAgICAgIFJpcHBsZUJhc2UuX21hdGNoZXMgfHxcbiAgICAgIChSaXBwbGVCYXNlLl9tYXRjaGVzID0gbWF0Y2hlcyhIVE1MRWxlbWVudC5wcm90b3R5cGUpKVxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cmZhY2VBY3RpdmUocmVmKSB7XG4gICAgcmV0dXJuIHJlZltSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZtLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbFtSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRkZWxldGUodm0uY2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogdGFyZ2V0ID0+IHZtLiRlbC5jb250YWlucyh0YXJnZXQpLFxuICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uc3R5bGVzLCB2YXJOYW1lLCB2YWx1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFJpcHBsZU1peGluID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzKVxuICAgIHRoaXMucmlwcGxlLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxjdXN0b20tZWxlbWVudCBcbiAgICA6dGFnPVwidGFnXCIgXG4gICAgOmNsYXNzZXM9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGVzPVwic3R5bGVzXCIgXG4gICAgY2xhc3M9XCJtZGMtcmlwcGxlXCI+XG4gICAgPHNsb3QgLz5cbiAgPC9jdXN0b20tZWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBDdXN0b21FbGVtZW50TWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlTWl4aW4gfSBmcm9tICcuL21kYy1yaXBwbGUtYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXJpcHBsZScsXG4gIG1peGluczogW0N1c3RvbUVsZW1lbnRNaXhpbiwgUmlwcGxlTWl4aW5dLFxuICBwcm9wczoge1xuICAgIHRhZzogU3RyaW5nXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxyXG4gIDxjdXN0b20tbGlua1xyXG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiXHJcbiAgICA6c3R5bGU9XCJzdHlsZXNcIlxyXG4gICAgOmxpbms9XCJsaW5rXCJcclxuICAgIGNsYXNzPVwibWRjLXRhYlwiXHJcbiAgICBAY2xpY2s9XCJoYW5kbGVDbGlja1wiXHJcbiAgICByb2xlPVwidGFiXCJcclxuICAgIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiXHJcbiAgICB0YWJpbmRleD1cIi0xXCJcclxuICA+XHJcbiAgICA8c3BhbiByZWY9XCJjb250ZW50XCIgY2xhc3M9XCJtZGMtdGFiX19jb250ZW50XCI+XHJcbiAgICAgIDxpXHJcbiAgICAgICAgdi1pZj1cIiEhaGFzSWNvblwiXHJcbiAgICAgICAgcmVmPVwiaWNvblwiXHJcbiAgICAgICAgOmNsYXNzPVwiaGFzSWNvbi5jbGFzc2VzXCJcclxuICAgICAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgIGNsYXNzPVwibWRjLXRhYl9faWNvblwiXHJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzbG90IG5hbWU9XCJpY29uXCI+e3sgaGFzSWNvbi5jb250ZW50IH19PC9zbG90PlxyXG4gICAgICA8L2k+XHJcblxyXG4gICAgICA8c3BhbiB2LWlmPVwiaGFzVGV4dFwiIGNsYXNzPVwibWRjLXRhYl9fdGV4dC1sYWJlbFwiPiA8c2xvdCAvPiA8L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcblxyXG4gICAgPG1kYy10YWItaW5kaWNhdG9yIHJlZj1cInRhYkluZGljYXRvclwiPjwvbWRjLXRhYi1pbmRpY2F0b3I+XHJcbiAgICA8bWRjLXRhYi1yaXBwbGU+PC9tZGMtdGFiLXJpcHBsZT5cclxuICA8L2N1c3RvbS1saW5rPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IE1EQ1RhYkZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL3RhYi9mb3VuZGF0aW9uJ1xyXG5pbXBvcnQge1xyXG4gIEN1c3RvbUxpbmtNaXhpbixcclxuICBEaXNwYXRjaEV2ZW50TWl4aW4sXHJcbiAgZW1pdEN1c3RvbUV2ZW50LFxyXG4gIGV4dHJhY3RJY29uUHJvcCxcclxuICBWTUFVbmlxdWVJZE1peGluXHJcbn0gZnJvbSAnLi4vYmFzZSdcclxuaW1wb3J0IHsgUmlwcGxlQmFzZSB9IGZyb20gJy4uL3JpcHBsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnbWRjLXRhYicsXHJcbiAgbWl4aW5zOiBbQ3VzdG9tTGlua01peGluLCBEaXNwYXRjaEV2ZW50TWl4aW4sIFZNQVVuaXF1ZUlkTWl4aW5dLFxyXG4gIHByb3BzOiB7XHJcbiAgICBhY3RpdmU6IEJvb2xlYW4sXHJcbiAgICBpY29uOiBbU3RyaW5nLCBBcnJheSwgT2JqZWN0XSxcclxuICAgIHN0YWNrZWQ6IEJvb2xlYW4sXHJcbiAgICBtaW5XaWR0aDogQm9vbGVhblxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNsYXNzZXM6IHtcclxuICAgICAgICAnbWRjLXRhYi0tc3RhY2tlZCc6IHRoaXMuc3RhY2tlZCxcclxuICAgICAgICAnbWRjLXRhYi0tbWluLXdpZHRoJzogdGhpcy5taW5XaWR0aFxyXG4gICAgICB9LFxyXG4gICAgICBzdHlsZXM6IHt9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgaW5qZWN0OiBbJ21kY1RhYkJhciddLFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBoYXNJY29uKCkge1xyXG4gICAgICBpZiAodGhpcy5pY29uIHx8IHRoaXMuJHNsb3RzLmljb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pY29uID8gZXh0cmFjdEljb25Qcm9wKHRoaXMuaWNvbikgOiB7fVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGhhc1RleHQoKSB7XHJcbiAgICAgIHJldHVybiAhIXRoaXMuJHNsb3RzLmRlZmF1bHRcclxuICAgIH1cclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBhY3RpdmUodmFsdWUpIHt9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy5pZCA9IHRoaXMudm1hX3VpZF9cclxuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENUYWJGb3VuZGF0aW9uKHtcclxuICAgICAgc2V0QXR0cjogKGF0dHIsIHZhbHVlKSA9PiB0aGlzLiRlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpLFxyXG4gICAgICBhZGRDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSksXHJcbiAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZGVsZXRlKHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lKSxcclxuICAgICAgaGFzQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcclxuICAgICAgYWN0aXZhdGVJbmRpY2F0b3I6IHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCA9PiB7XHJcbiAgICAgICAgdGhpcy4kcmVmcy50YWJJbmRpY2F0b3IuYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KVxyXG4gICAgICB9LFxyXG4gICAgICBkZWFjdGl2YXRlSW5kaWNhdG9yOiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4kcmVmcy50YWJJbmRpY2F0b3IuZGVhY3RpdmF0ZSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIG5vdGlmeUludGVyYWN0ZWQ6ICgpID0+XHJcbiAgICAgICAgZW1pdEN1c3RvbUV2ZW50KFxyXG4gICAgICAgICAgdGhpcy4kZWwsXHJcbiAgICAgICAgICBNRENUYWJGb3VuZGF0aW9uLnN0cmluZ3MuSU5URVJBQ1RFRF9FVkVOVCxcclxuICAgICAgICAgIHsgdGFiSWQ6IHRoaXMuaWQgfSxcclxuICAgICAgICAgIHRydWUgLyogYnViYmxlICovXHJcbiAgICAgICAgKSxcclxuICAgICAgZ2V0T2Zmc2V0TGVmdDogKCkgPT4gdGhpcy4kZWwub2Zmc2V0TGVmdCxcclxuICAgICAgZ2V0T2Zmc2V0V2lkdGg6ICgpID0+IHRoaXMuJGVsLm9mZnNldFdpZHRoLFxyXG4gICAgICBnZXRDb250ZW50T2Zmc2V0TGVmdDogKCkgPT4gdGhpcy4kcmVmcy5jb250ZW50Lm9mZnNldExlZnQsXHJcbiAgICAgIGdldENvbnRlbnRPZmZzZXRXaWR0aDogKCkgPT4gdGhpcy4kcmVmcy5jb250ZW50Lm9mZnNldFdpZHRoLFxyXG4gICAgICBmb2N1czogKCkgPT4gdGhpcy4kZWwuZm9jdXMoKVxyXG4gICAgfSlcclxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygndGFiIG1vdW50ZWQnKVxyXG5cclxuICAgIHRoaXMubWRjVGFiQmFyLnRhYkxpc3QucHVzaCh0aGlzKVxyXG5cclxuICAgIC8vIHRoaXMuc2V0QWN0aXZlKHRoaXMuYWN0aXZlKVxyXG4gIH0sXHJcbiAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFjdGl2YXRlKGNvbXB1dGVJbmRpY2F0b3JDbGllbnRSZWN0KSB7XHJcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5hY3RpdmF0ZShjb21wdXRlSW5kaWNhdG9yQ2xpZW50UmVjdClcclxuICAgIH0sXHJcblxyXG4gICAgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgdGhpcy5mb3VuZGF0aW9uLmRlYWN0aXZhdGUoKVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUNsaWNrKGV2dCkge1xyXG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlQ2xpY2soZXZ0KVxyXG4gICAgfSxcclxuICAgIGlzQWN0aXZlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uLmlzQWN0aXZlKClcclxuICAgIH0sXHJcbiAgICBzZXRBY3RpdmUoaXNBY3RpdmUpIHtcclxuICAgICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgJ21kYy10YWItLWFjdGl2ZScsIHRydWUpLFxyXG4gICAgICAgICAgdGhpcy4kcmVmcy50YWJJbmRpY2F0b3IuYWN0aXZhdGUoKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZUluZGljYXRvckNsaWVudFJlY3QoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiRyZWZzLnRhYkluZGljYXRvci5jb21wdXRlQ29udGVudENsaWVudFJlY3QoKVxyXG4gICAgfSxcclxuXHJcbiAgICBjb21wdXRlRGltZW5zaW9ucygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbi5jb21wdXRlRGltZW5zaW9ucygpXHJcbiAgICB9LFxyXG5cclxuICAgIGZvY3VzKCkge1xyXG4gICAgICB0aGlzLiRlbC5mb2N1cygpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBzdHJpbmdzID0ge1xuICAgIEFSUk9XX0xFRlRfS0VZOiAnQXJyb3dMZWZ0JyxcbiAgICBBUlJPV19SSUdIVF9LRVk6ICdBcnJvd1JpZ2h0JyxcbiAgICBFTkRfS0VZOiAnRW5kJyxcbiAgICBFTlRFUl9LRVk6ICdFbnRlcicsXG4gICAgSE9NRV9LRVk6ICdIb21lJyxcbiAgICBTUEFDRV9LRVk6ICdTcGFjZScsXG4gICAgVEFCX0FDVElWQVRFRF9FVkVOVDogJ01EQ1RhYkJhcjphY3RpdmF0ZWQnLFxuICAgIFRBQl9TQ1JPTExFUl9TRUxFQ1RPUjogJy5tZGMtdGFiLXNjcm9sbGVyJyxcbiAgICBUQUJfU0VMRUNUT1I6ICcubWRjLXRhYicsXG59O1xudmFyIG51bWJlcnMgPSB7XG4gICAgQVJST1dfTEVGVF9LRVlDT0RFOiAzNyxcbiAgICBBUlJPV19SSUdIVF9LRVlDT0RFOiAzOSxcbiAgICBFTkRfS0VZQ09ERTogMzUsXG4gICAgRU5URVJfS0VZQ09ERTogMTMsXG4gICAgRVhUUkFfU0NST0xMX0FNT1VOVDogMjAsXG4gICAgSE9NRV9LRVlDT0RFOiAzNixcbiAgICBTUEFDRV9LRVlDT0RFOiAzMixcbn07XG5leHBvcnQgeyBudW1iZXJzLCBzdHJpbmdzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBBQ0NFUFRBQkxFX0tFWVMgPSBuZXcgU2V0KCk7XG4vLyBJRTExIGhhcyBubyBzdXBwb3J0IGZvciBuZXcgU2V0IHdpdGggaXRlcmFibGUgc28gd2UgbmVlZCB0byBpbml0aWFsaXplIHRoaXMgYnkgaGFuZFxuQUNDRVBUQUJMRV9LRVlTLmFkZChzdHJpbmdzLkFSUk9XX0xFRlRfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5BUlJPV19SSUdIVF9LRVkpO1xuQUNDRVBUQUJMRV9LRVlTLmFkZChzdHJpbmdzLkVORF9LRVkpO1xuQUNDRVBUQUJMRV9LRVlTLmFkZChzdHJpbmdzLkhPTUVfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5FTlRFUl9LRVkpO1xuQUNDRVBUQUJMRV9LRVlTLmFkZChzdHJpbmdzLlNQQUNFX0tFWSk7XG52YXIgS0VZQ09ERV9NQVAgPSBuZXcgTWFwKCk7XG4vLyBJRTExIGhhcyBubyBzdXBwb3J0IGZvciBuZXcgTWFwIHdpdGggaXRlcmFibGUgc28gd2UgbmVlZCB0byBpbml0aWFsaXplIHRoaXMgYnkgaGFuZFxuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuQVJST1dfTEVGVF9LRVlDT0RFLCBzdHJpbmdzLkFSUk9XX0xFRlRfS0VZKTtcbktFWUNPREVfTUFQLnNldChudW1iZXJzLkFSUk9XX1JJR0hUX0tFWUNPREUsIHN0cmluZ3MuQVJST1dfUklHSFRfS0VZKTtcbktFWUNPREVfTUFQLnNldChudW1iZXJzLkVORF9LRVlDT0RFLCBzdHJpbmdzLkVORF9LRVkpO1xuS0VZQ09ERV9NQVAuc2V0KG51bWJlcnMuSE9NRV9LRVlDT0RFLCBzdHJpbmdzLkhPTUVfS0VZKTtcbktFWUNPREVfTUFQLnNldChudW1iZXJzLkVOVEVSX0tFWUNPREUsIHN0cmluZ3MuRU5URVJfS0VZKTtcbktFWUNPREVfTUFQLnNldChudW1iZXJzLlNQQUNFX0tFWUNPREUsIHN0cmluZ3MuU1BBQ0VfS0VZKTtcbnZhciBNRENUYWJCYXJGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1RhYkJhckZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGFiQmFyRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1RhYkJhckZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy51c2VBdXRvbWF0aWNBY3RpdmF0aW9uXyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUYWJCYXJGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGFiQmFyRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RhYkJhckZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50U2Nyb2xsOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0U2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgZ2V0U2Nyb2xsQ29udGVudFdpZHRoOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGdldE9mZnNldFdpZHRoOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGlzUlRMOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVUYWI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVRhYkF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZWFjdGl2YXRlVGFiQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGZvY3VzVGFiQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFRhYkluZGljYXRvckNsaWVudFJlY3RBdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHJvb3RMZWZ0OiAwLCByb290UmlnaHQ6IDAsIGNvbnRlbnRMZWZ0OiAwLCBjb250ZW50UmlnaHQ6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgZ2V0UHJldmlvdXNBY3RpdmVUYWJJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gLTE7IH0sXG4gICAgICAgICAgICAgICAgZ2V0Rm9jdXNlZFRhYkluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiAtMTsgfSxcbiAgICAgICAgICAgICAgICBnZXRJbmRleE9mVGFiQnlJZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gLTE7IH0sXG4gICAgICAgICAgICAgICAgZ2V0VGFiTGlzdExlbmd0aDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlUYWJBY3RpdmF0ZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBTd2l0Y2hlcyBiZXR3ZWVuIGF1dG9tYXRpYyBhbmQgbWFudWFsIGFjdGl2YXRpb24gbW9kZXMuXG4gICAgICogU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMvI3RhYnBhbmVsIGZvciBleGFtcGxlcy5cbiAgICAgKi9cbiAgICBNRENUYWJCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRVc2VBdXRvbWF0aWNBY3RpdmF0aW9uID0gZnVuY3Rpb24gKHVzZUF1dG9tYXRpY0FjdGl2YXRpb24pIHtcbiAgICAgICAgdGhpcy51c2VBdXRvbWF0aWNBY3RpdmF0aW9uXyA9IHVzZUF1dG9tYXRpY0FjdGl2YXRpb247XG4gICAgfTtcbiAgICBNRENUYWJCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZVRhYiA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgcHJldmlvdXNBY3RpdmVJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0UHJldmlvdXNBY3RpdmVUYWJJbmRleCgpO1xuICAgICAgICBpZiAoIXRoaXMuaW5kZXhJc0luUmFuZ2VfKGluZGV4KSB8fCBpbmRleCA9PT0gcHJldmlvdXNBY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVhY3RpdmF0ZVRhYkF0SW5kZXgocHJldmlvdXNBY3RpdmVJbmRleCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWN0aXZhdGVUYWJBdEluZGV4KGluZGV4LCB0aGlzLmFkYXB0ZXJfLmdldFRhYkluZGljYXRvckNsaWVudFJlY3RBdEluZGV4KHByZXZpb3VzQWN0aXZlSW5kZXgpKTtcbiAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldyhpbmRleCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5VGFiQWN0aXZhdGVkKGluZGV4KTtcbiAgICB9O1xuICAgIE1EQ1RhYkJhckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIC8vIEdldCB0aGUga2V5IGZyb20gdGhlIGV2ZW50XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmdldEtleUZyb21FdmVudF8oZXZ0KTtcbiAgICAgICAgLy8gRWFybHkgZXhpdCBpZiB0aGUgZXZlbnQga2V5IGlzbid0IG9uZSBvZiB0aGUga2V5Ym9hcmQgbmF2aWdhdGlvbiBrZXlzXG4gICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBiZWhhdmlvciBmb3IgbW92ZW1lbnQga2V5cywgYnV0IG5vdCBmb3IgYWN0aXZhdGlvbiBrZXlzLCBzaW5jZSA6YWN0aXZlIGlzIHVzZWQgdG8gYXBwbHkgcmlwcGxlXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2YXRpb25LZXlfKGtleSkpIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnVzZUF1dG9tYXRpY0FjdGl2YXRpb25fKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0FjdGl2YXRpb25LZXlfKGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmRldGVybWluZVRhcmdldEZyb21LZXlfKHRoaXMuYWRhcHRlcl8uZ2V0UHJldmlvdXNBY3RpdmVUYWJJbmRleCgpLCBrZXkpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBY3RpdmVUYWIoaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldyhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZm9jdXNlZFRhYkluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRGb2N1c2VkVGFiSW5kZXgoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQWN0aXZhdGlvbktleV8oa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QWN0aXZlVGFiKGZvY3VzZWRUYWJJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmRldGVybWluZVRhcmdldEZyb21LZXlfKGZvY3VzZWRUYWJJbmRleCwga2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzVGFiQXRJbmRleChpbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldyhpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIE1EQ1RhYjppbnRlcmFjdGVkIGV2ZW50XG4gICAgICovXG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlVGFiSW50ZXJhY3Rpb24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QWN0aXZlVGFiKHRoaXMuYWRhcHRlcl8uZ2V0SW5kZXhPZlRhYkJ5SWQoZXZ0LmRldGFpbC50YWJJZCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2Nyb2xscyB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCBpbnRvIHZpZXdcbiAgICAgKiBAcGFyYW0gaW5kZXggVGhlIHRhYiBpbmRleCB0byBtYWtlIHZpc2libGVcbiAgICAgKi9cbiAgICBNRENUYWJCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zY3JvbGxJbnRvVmlldyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAvLyBFYXJseSBleGl0IGlmIHRoZSBpbmRleCBpcyBvdXQgb2YgcmFuZ2VcbiAgICAgICAgaWYgKCF0aGlzLmluZGV4SXNJblJhbmdlXyhpbmRleCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBbHdheXMgc2Nyb2xsIHRvIDAgaWYgc2Nyb2xsaW5nIHRvIHRoZSAwdGggaW5kZXhcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5zY3JvbGxUbygwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBbHdheXMgc2Nyb2xsIHRvIHRoZSBtYXggdmFsdWUgaWYgc2Nyb2xsaW5nIHRvIHRoZSBOdGggaW5kZXhcbiAgICAgICAgLy8gTURDVGFiU2Nyb2xsZXIuc2Nyb2xsVG8oKSB3aWxsIG5ldmVyIHNjcm9sbCBwYXN0IHRoZSBtYXggcG9zc2libGUgdmFsdWVcbiAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmFkYXB0ZXJfLmdldFRhYkxpc3RMZW5ndGgoKSAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLnNjcm9sbFRvKHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudFdpZHRoKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxJbnRvVmlld1JUTF8oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXdfKGluZGV4KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFByaXZhdGUgbWV0aG9kIGZvciBkZXRlcm1pbmluZyB0aGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHRhYiBiYXNlZCBvbiB3aGF0IGtleSB3YXMgcHJlc3NlZFxuICAgICAqIEBwYXJhbSBvcmlnaW4gVGhlIG9yaWdpbmFsIGluZGV4IGZyb20gd2hpY2ggdG8gZGV0ZXJtaW5lIHRoZSBkZXN0aW5hdGlvblxuICAgICAqIEBwYXJhbSBrZXkgVGhlIG5hbWUgb2YgdGhlIGtleVxuICAgICAqL1xuICAgIE1EQ1RhYkJhckZvdW5kYXRpb24ucHJvdG90eXBlLmRldGVybWluZVRhcmdldEZyb21LZXlfID0gZnVuY3Rpb24gKG9yaWdpbiwga2V5KSB7XG4gICAgICAgIHZhciBpc1JUTCA9IHRoaXMuaXNSVExfKCk7XG4gICAgICAgIHZhciBtYXhJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiTGlzdExlbmd0aCgpIC0gMTtcbiAgICAgICAgdmFyIHNob3VsZEdvVG9FbmQgPSBrZXkgPT09IHN0cmluZ3MuRU5EX0tFWTtcbiAgICAgICAgdmFyIHNob3VsZERlY3JlbWVudCA9IGtleSA9PT0gc3RyaW5ncy5BUlJPV19MRUZUX0tFWSAmJiAhaXNSVEwgfHwga2V5ID09PSBzdHJpbmdzLkFSUk9XX1JJR0hUX0tFWSAmJiBpc1JUTDtcbiAgICAgICAgdmFyIHNob3VsZEluY3JlbWVudCA9IGtleSA9PT0gc3RyaW5ncy5BUlJPV19SSUdIVF9LRVkgJiYgIWlzUlRMIHx8IGtleSA9PT0gc3RyaW5ncy5BUlJPV19MRUZUX0tFWSAmJiBpc1JUTDtcbiAgICAgICAgdmFyIGluZGV4ID0gb3JpZ2luO1xuICAgICAgICBpZiAoc2hvdWxkR29Ub0VuZCkge1xuICAgICAgICAgICAgaW5kZXggPSBtYXhJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaG91bGREZWNyZW1lbnQpIHtcbiAgICAgICAgICAgIGluZGV4IC09IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2hvdWxkSW5jcmVtZW50KSB7XG4gICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGluZGV4ID0gbWF4SW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPiBtYXhJbmRleCkge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHNjcm9sbCBpbmNyZW1lbnQgdGhhdCB3aWxsIG1ha2UgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggdmlzaWJsZVxuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYlxuICAgICAqIEBwYXJhbSBuZXh0SW5kZXggVGhlIGluZGV4IG9mIHRoZSBuZXh0IHRhYlxuICAgICAqIEBwYXJhbSBzY3JvbGxQb3NpdGlvbiBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gYmFyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSBUYWIgQmFyXG4gICAgICovXG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuY2FsY3VsYXRlU2Nyb2xsSW5jcmVtZW50XyA9IGZ1bmN0aW9uIChpbmRleCwgbmV4dEluZGV4LCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgpIHtcbiAgICAgICAgdmFyIG5leHRUYWJEaW1lbnNpb25zID0gdGhpcy5hZGFwdGVyXy5nZXRUYWJEaW1lbnNpb25zQXRJbmRleChuZXh0SW5kZXgpO1xuICAgICAgICB2YXIgcmVsYXRpdmVDb250ZW50TGVmdCA9IG5leHRUYWJEaW1lbnNpb25zLmNvbnRlbnRMZWZ0IC0gc2Nyb2xsUG9zaXRpb24gLSBiYXJXaWR0aDtcbiAgICAgICAgdmFyIHJlbGF0aXZlQ29udGVudFJpZ2h0ID0gbmV4dFRhYkRpbWVuc2lvbnMuY29udGVudFJpZ2h0IC0gc2Nyb2xsUG9zaXRpb247XG4gICAgICAgIHZhciBsZWZ0SW5jcmVtZW50ID0gcmVsYXRpdmVDb250ZW50UmlnaHQgLSBudW1iZXJzLkVYVFJBX1NDUk9MTF9BTU9VTlQ7XG4gICAgICAgIHZhciByaWdodEluY3JlbWVudCA9IHJlbGF0aXZlQ29udGVudExlZnQgKyBudW1iZXJzLkVYVFJBX1NDUk9MTF9BTU9VTlQ7XG4gICAgICAgIGlmIChuZXh0SW5kZXggPCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKGxlZnRJbmNyZW1lbnQsIDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLm1heChyaWdodEluY3JlbWVudCwgMCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIHRoZSBzY3JvbGwgaW5jcmVtZW50IHRoYXQgd2lsbCBtYWtlIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4IHZpc2libGUgaW4gUlRMXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiXG4gICAgICogQHBhcmFtIG5leHRJbmRleCBUaGUgaW5kZXggb2YgdGhlIG5leHQgdGFiXG4gICAgICogQHBhcmFtIHNjcm9sbFBvc2l0aW9uIFRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgICAqIEBwYXJhbSBiYXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIFRhYiBCYXJcbiAgICAgKiBAcGFyYW0gc2Nyb2xsQ29udGVudFdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsIGNvbnRlbnRcbiAgICAgKi9cbiAgICBNRENUYWJCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5jYWxjdWxhdGVTY3JvbGxJbmNyZW1lbnRSVExfID0gZnVuY3Rpb24gKGluZGV4LCBuZXh0SW5kZXgsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCwgc2Nyb2xsQ29udGVudFdpZHRoKSB7XG4gICAgICAgIHZhciBuZXh0VGFiRGltZW5zaW9ucyA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgobmV4dEluZGV4KTtcbiAgICAgICAgdmFyIHJlbGF0aXZlQ29udGVudExlZnQgPSBzY3JvbGxDb250ZW50V2lkdGggLSBuZXh0VGFiRGltZW5zaW9ucy5jb250ZW50TGVmdCAtIHNjcm9sbFBvc2l0aW9uO1xuICAgICAgICB2YXIgcmVsYXRpdmVDb250ZW50UmlnaHQgPSBzY3JvbGxDb250ZW50V2lkdGggLSBuZXh0VGFiRGltZW5zaW9ucy5jb250ZW50UmlnaHQgLSBzY3JvbGxQb3NpdGlvbiAtIGJhcldpZHRoO1xuICAgICAgICB2YXIgbGVmdEluY3JlbWVudCA9IHJlbGF0aXZlQ29udGVudFJpZ2h0ICsgbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuICAgICAgICB2YXIgcmlnaHRJbmNyZW1lbnQgPSByZWxhdGl2ZUNvbnRlbnRMZWZ0IC0gbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuICAgICAgICBpZiAobmV4dEluZGV4ID4gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChsZWZ0SW5jcmVtZW50LCAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5taW4ocmlnaHRJbmNyZW1lbnQsIDApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB0aGUgaW5kZXggb2YgdGhlIGFkamFjZW50IHRhYiBjbG9zZXN0IHRvIGVpdGhlciBlZGdlIG9mIHRoZSBUYWIgQmFyXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiXG4gICAgICogQHBhcmFtIHRhYkRpbWVuc2lvbnMgVGhlIGRpbWVuc2lvbnMgb2YgdGhlIHRhYlxuICAgICAqIEBwYXJhbSBzY3JvbGxQb3NpdGlvbiBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gYmFyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSB0YWIgYmFyXG4gICAgICovXG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuZmluZEFkamFjZW50VGFiSW5kZXhDbG9zZXN0VG9FZGdlXyA9IGZ1bmN0aW9uIChpbmRleCwgdGFiRGltZW5zaW9ucywgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUYWJzIGFyZSBsYWlkIG91dCBpbiB0aGUgVGFiIFNjcm9sbGVyIGxpa2UgdGhpczpcbiAgICAgICAgICpcbiAgICAgICAgICogICAgU2Nyb2xsIFBvc2l0aW9uXG4gICAgICAgICAqICAgICstLS0rXG4gICAgICAgICAqICAgIHwgICB8ICAgQmFyIFdpZHRoXG4gICAgICAgICAqICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICAgICAqICAgIHwgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgICAgICAqICAgIHwgICBWICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWXG4gICAgICAgICAqICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICAgICAqICAgIFYgICB8ICAgICAgICAgICAgIFRhYiBTY3JvbGxlciAgICAgICAgICB8XG4gICAgICAgICAqICAgICstLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAgICAgICogICAgfCAgICBUYWIgICAgIHwgICAgICBUYWIgICAgIHwgICAgICAgIFRhYiAgICAgICAgfFxuICAgICAgICAgKiAgICArLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICAgICAqICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgICAgICAqICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICAgICAqXG4gICAgICAgICAqIFRvIGRldGVybWluZSB0aGUgbmV4dCBhZGphY2VudCBpbmRleCwgd2UgbG9vayBhdCB0aGUgVGFiIHJvb3QgbGVmdCBhbmRcbiAgICAgICAgICogVGFiIHJvb3QgcmlnaHQsIGJvdGggcmVsYXRpdmUgdG8gdGhlIHNjcm9sbCBwb3NpdGlvbi4gSWYgdGhlIFRhYiByb290XG4gICAgICAgICAqIGxlZnQgaXMgbGVzcyB0aGFuIDAsIHRoZW4gd2Uga25vdyBpdCdzIG91dCBvZiB2aWV3IHRvIHRoZSBsZWZ0LiBJZiB0aGVcbiAgICAgICAgICogVGFiIHJvb3QgcmlnaHQgbWludXMgdGhlIGJhciB3aWR0aCBpcyBncmVhdGVyIHRoYW4gMCwgd2Uga25vdyB0aGUgVGFiIGlzXG4gICAgICAgICAqIG91dCBvZiB2aWV3IHRvIHRoZSByaWdodC4gRnJvbSB0aGVyZSwgd2UgZWl0aGVyIGluY3JlbWVudCBvciBkZWNyZW1lbnRcbiAgICAgICAgICogdGhlIGluZGV4LlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHJlbGF0aXZlUm9vdExlZnQgPSB0YWJEaW1lbnNpb25zLnJvb3RMZWZ0IC0gc2Nyb2xsUG9zaXRpb247XG4gICAgICAgIHZhciByZWxhdGl2ZVJvb3RSaWdodCA9IHRhYkRpbWVuc2lvbnMucm9vdFJpZ2h0IC0gc2Nyb2xsUG9zaXRpb24gLSBiYXJXaWR0aDtcbiAgICAgICAgdmFyIHJlbGF0aXZlUm9vdERlbHRhID0gcmVsYXRpdmVSb290TGVmdCArIHJlbGF0aXZlUm9vdFJpZ2h0O1xuICAgICAgICB2YXIgbGVmdEVkZ2VJc0Nsb3NlciA9IHJlbGF0aXZlUm9vdExlZnQgPCAwIHx8IHJlbGF0aXZlUm9vdERlbHRhIDwgMDtcbiAgICAgICAgdmFyIHJpZ2h0RWRnZUlzQ2xvc2VyID0gcmVsYXRpdmVSb290UmlnaHQgPiAwIHx8IHJlbGF0aXZlUm9vdERlbHRhID4gMDtcbiAgICAgICAgaWYgKGxlZnRFZGdlSXNDbG9zZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0RWRnZUlzQ2xvc2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgdGhlIGluZGV4IG9mIHRoZSBhZGphY2VudCB0YWIgY2xvc2VzdCB0byBlaXRoZXIgZWRnZSBvZiB0aGUgVGFiIEJhciBpbiBSVExcbiAgICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICAgKiBAcGFyYW0gdGFiRGltZW5zaW9ucyBUaGUgZGltZW5zaW9ucyBvZiB0aGUgdGFiXG4gICAgICogQHBhcmFtIHNjcm9sbFBvc2l0aW9uIFRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgICAqIEBwYXJhbSBiYXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIHRhYiBiYXJcbiAgICAgKiBAcGFyYW0gc2Nyb2xsQ29udGVudFdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsZXIgY29udGVudFxuICAgICAqL1xuICAgIE1EQ1RhYkJhckZvdW5kYXRpb24ucHJvdG90eXBlLmZpbmRBZGphY2VudFRhYkluZGV4Q2xvc2VzdFRvRWRnZVJUTF8gPSBmdW5jdGlvbiAoaW5kZXgsIHRhYkRpbWVuc2lvbnMsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCwgc2Nyb2xsQ29udGVudFdpZHRoKSB7XG4gICAgICAgIHZhciByb290TGVmdCA9IHNjcm9sbENvbnRlbnRXaWR0aCAtIHRhYkRpbWVuc2lvbnMucm9vdExlZnQgLSBiYXJXaWR0aCAtIHNjcm9sbFBvc2l0aW9uO1xuICAgICAgICB2YXIgcm9vdFJpZ2h0ID0gc2Nyb2xsQ29udGVudFdpZHRoIC0gdGFiRGltZW5zaW9ucy5yb290UmlnaHQgLSBzY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgdmFyIHJvb3REZWx0YSA9IHJvb3RMZWZ0ICsgcm9vdFJpZ2h0O1xuICAgICAgICB2YXIgbGVmdEVkZ2VJc0Nsb3NlciA9IHJvb3RMZWZ0ID4gMCB8fCByb290RGVsdGEgPiAwO1xuICAgICAgICB2YXIgcmlnaHRFZGdlSXNDbG9zZXIgPSByb290UmlnaHQgPCAwIHx8IHJvb3REZWx0YSA8IDA7XG4gICAgICAgIGlmIChsZWZ0RWRnZUlzQ2xvc2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodEVkZ2VJc0Nsb3Nlcikge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4IC0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBrZXkgYXNzb2NpYXRlZCB3aXRoIGEga2V5ZG93biBldmVudFxuICAgICAqIEBwYXJhbSBldnQgVGhlIGtleWRvd24gZXZlbnRcbiAgICAgKi9cbiAgICBNRENUYWJCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRLZXlGcm9tRXZlbnRfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBpZiAoQUNDRVBUQUJMRV9LRVlTLmhhcyhldnQua2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGV2dC5rZXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEtFWUNPREVfTUFQLmdldChldnQua2V5Q29kZSk7XG4gICAgfTtcbiAgICBNRENUYWJCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5pc0FjdGl2YXRpb25LZXlfID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ID09PSBzdHJpbmdzLlNQQUNFX0tFWSB8fCBrZXkgPT09IHN0cmluZ3MuRU5URVJfS0VZO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIGEgZ2l2ZW4gaW5kZXggaXMgaW5jbHVzaXZlbHkgYmV0d2VlbiB0aGUgZW5kc1xuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggdG8gdGVzdFxuICAgICAqL1xuICAgIE1EQ1RhYkJhckZvdW5kYXRpb24ucHJvdG90eXBlLmluZGV4SXNJblJhbmdlXyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuYWRhcHRlcl8uZ2V0VGFiTGlzdExlbmd0aCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmlldydzIFJUTCBwcm9wZXJ0eVxuICAgICAqL1xuICAgIE1EQ1RhYkJhckZvdW5kYXRpb24ucHJvdG90eXBlLmlzUlRMXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uaXNSVEwoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNjcm9sbHMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggaW50byB2aWV3IGZvciBsZWZ0LXRvLXJpZ2h0IHVzZXIgYWdlbnRzLlxuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYiB0byBzY3JvbGwgaW50byB2aWV3XG4gICAgICovXG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXdfID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICAgICAgdmFyIGJhcldpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRPZmZzZXRXaWR0aCgpO1xuICAgICAgICB2YXIgdGFiRGltZW5zaW9ucyA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgoaW5kZXgpO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gdGhpcy5maW5kQWRqYWNlbnRUYWJJbmRleENsb3Nlc3RUb0VkZ2VfKGluZGV4LCB0YWJEaW1lbnNpb25zLCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgpO1xuICAgICAgICBpZiAoIXRoaXMuaW5kZXhJc0luUmFuZ2VfKG5leHRJbmRleCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2Nyb2xsSW5jcmVtZW50ID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxJbmNyZW1lbnRfKGluZGV4LCBuZXh0SW5kZXgsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uaW5jcmVtZW50U2Nyb2xsKHNjcm9sbEluY3JlbWVudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTY3JvbGxzIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4IGludG8gdmlldyBpbiBSVExcbiAgICAgKiBAcGFyYW0gaW5kZXggVGhlIHRhYiBpbmRleCB0byBtYWtlIHZpc2libGVcbiAgICAgKi9cbiAgICBNRENUYWJCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1JUTF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgICAgICB2YXIgYmFyV2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldE9mZnNldFdpZHRoKCk7XG4gICAgICAgIHZhciB0YWJEaW1lbnNpb25zID0gdGhpcy5hZGFwdGVyXy5nZXRUYWJEaW1lbnNpb25zQXRJbmRleChpbmRleCk7XG4gICAgICAgIHZhciBzY3JvbGxXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudFdpZHRoKCk7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSB0aGlzLmZpbmRBZGphY2VudFRhYkluZGV4Q2xvc2VzdFRvRWRnZVJUTF8oaW5kZXgsIHRhYkRpbWVuc2lvbnMsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCwgc2Nyb2xsV2lkdGgpO1xuICAgICAgICBpZiAoIXRoaXMuaW5kZXhJc0luUmFuZ2VfKG5leHRJbmRleCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2Nyb2xsSW5jcmVtZW50ID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxJbmNyZW1lbnRSVExfKGluZGV4LCBuZXh0SW5kZXgsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCwgc2Nyb2xsV2lkdGgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmluY3JlbWVudFNjcm9sbChzY3JvbGxJbmNyZW1lbnQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RhYkJhckZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1RhYkJhckZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJCYXJGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgOmNsYXNzPVwiY2xhc3Nlc1wiIGNsYXNzPVwibWRjLXRhYi1iYXJcIiB2LW9uPVwibGlzdGVuZXJzXCIgcm9sZT1cInRhYmxpc3RcIj5cbiAgICA8bWRjLXRhYi1zY3JvbGxlciByZWY9XCJzY3JvbGxlclwiPiA8c2xvdD48L3Nsb3Q+IDwvbWRjLXRhYi1zY3JvbGxlcj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1EQ1RhYkJhckZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL3RhYi1iYXIvZm91bmRhdGlvbidcbmltcG9ydCB7IGVtaXRDdXN0b21FdmVudCB9IGZyb20gJy4uL2Jhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy10YWItYmFyJyxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBpbmRpY2F0b3JTdHlsZXM6IHt9LFxuICAgICAgdGFiTGlzdDogW11cbiAgICB9XG4gIH0sXG4gIHByb3BzOiB7IGFjdGl2ZVRhYkluZGV4OiBbTnVtYmVyLCBTdHJpbmddIH0sXG4gIHByb3ZpZGUoKSB7XG4gICAgcmV0dXJuIHsgbWRjVGFiQmFyOiB0aGlzIH1cbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENUYWJCYXJGb3VuZGF0aW9uKHtcbiAgICAgIHNjcm9sbFRvOiBzY3JvbGxYID0+IHRoaXMuJHJlZnMuc2Nyb2xsZXIuc2Nyb2xsVG8oc2Nyb2xsWCksXG4gICAgICBpbmNyZW1lbnRTY3JvbGw6IHNjcm9sbFhJbmNyZW1lbnQgPT5cbiAgICAgICAgdGhpcy4kcmVmcy5zY3JvbGxlci5pbmNyZW1lbnRTY3JvbGwoc2Nyb2xsWEluY3JlbWVudCksXG4gICAgICBnZXRTY3JvbGxQb3NpdGlvbjogKCkgPT4gdGhpcy4kcmVmcy5zY3JvbGxlci5nZXRTY3JvbGxQb3NpdGlvbigpLFxuICAgICAgZ2V0U2Nyb2xsQ29udGVudFdpZHRoOiAoKSA9PiB0aGlzLiRyZWZzLnNjcm9sbGVyLmdldFNjcm9sbENvbnRlbnRXaWR0aCgpLFxuICAgICAgZ2V0T2Zmc2V0V2lkdGg6ICgpID0+IHRoaXMuJGVsLm9mZnNldFdpZHRoLFxuICAgICAgaXNSVEw6ICgpID0+XG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuJGVsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKSA9PT1cbiAgICAgICAgJ3J0bCcsXG4gICAgICBzZXRBY3RpdmVUYWI6IGluZGV4ID0+IHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmFjdGl2YXRlVGFiKGluZGV4KVxuICAgICAgfSxcbiAgICAgIGFjdGl2YXRlVGFiQXRJbmRleDogKGluZGV4LCBjbGllbnRSZWN0KSA9PiB7XG4gICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0uYWN0aXZhdGUoY2xpZW50UmVjdClcbiAgICAgIH0sXG4gICAgICBkZWFjdGl2YXRlVGFiQXRJbmRleDogaW5kZXggPT4ge1xuICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdICYmIHRoaXMudGFiTGlzdFtpbmRleF0uZGVhY3RpdmF0ZSgpXG4gICAgICB9LFxuICAgICAgZm9jdXNUYWJBdEluZGV4OiBpbmRleCA9PiB0aGlzLnRhYkxpc3RbaW5kZXhdLmZvY3VzKCksXG4gICAgICBnZXRUYWJJbmRpY2F0b3JDbGllbnRSZWN0QXRJbmRleDogaW5kZXggPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHRoaXMudGFiTGlzdFtpbmRleF0gJiZcbiAgICAgICAgICB0aGlzLnRhYkxpc3RbaW5kZXhdLmNvbXB1dGVJbmRpY2F0b3JDbGllbnRSZWN0KClcbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIGdldFRhYkRpbWVuc2lvbnNBdEluZGV4OiBpbmRleCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYkxpc3RbaW5kZXhdLmNvbXB1dGVEaW1lbnNpb25zKClcbiAgICAgIH0sXG4gICAgICBnZXRQcmV2aW91c0FjdGl2ZVRhYkluZGV4OiAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMudGFiTGlzdFtpXS5pc0FjdGl2ZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gaVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH0sXG4gICAgICBnZXRGb2N1c2VkVGFiSW5kZXg6ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFiRWxlbWVudHMgPSB0aGlzLmdldFRhYkVsZW1lbnRzXygpXG4gICAgICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICAgIHJldHVybiB0YWJFbGVtZW50cy5pbmRleE9mKGFjdGl2ZUVsZW1lbnQpXG4gICAgICB9LFxuICAgICAgZ2V0SW5kZXhPZlRhYkJ5SWQ6IGlkID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGhpcy50YWJMaXN0W2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9LFxuICAgICAgZ2V0VGFiTGlzdExlbmd0aDogKCkgPT4gdGhpcy50YWJMaXN0Lmxlbmd0aCxcbiAgICAgIG5vdGlmeVRhYkFjdGl2YXRlZDogaW5kZXggPT4ge1xuICAgICAgICBlbWl0Q3VzdG9tRXZlbnQoXG4gICAgICAgICAgdGhpcy4kZWwsXG4gICAgICAgICAgTURDVGFiQmFyRm91bmRhdGlvbi5zdHJpbmdzLlRBQl9BQ1RJVkFURURfRVZFTlQsXG4gICAgICAgICAgeyBpbmRleCB9LFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKVxuXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuICAgIC8vIGVuc3VyZSBhY3RpdmUgdGFiXG4gICAgdGhpcy5mb3VuZGF0aW9uLmFjdGl2YXRlVGFiKHRoaXMuYWN0aXZlVGFiSW5kZXggfHwgMClcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24uZGVzdHJveSgpXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbGlzdGVuZXJzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy4kbGlzdGVuZXJzLFxuICAgICAgICAnTURDVGFiOmludGVyYWN0ZWQnOiBldmVudCA9PiB0aGlzLmhhbmRsZUludGVyYWN0aW9uKGV2ZW50KSxcbiAgICAgICAga2V5ZG93bjogZXZlbnQgPT4gdGhpcy5oYW5kbGVLZXlEb3duKGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZUludGVyYWN0aW9uKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZVRhYkludGVyYWN0aW9uKGV2dClcbiAgICB9LFxuXG4gICAgaGFuZGxlS2V5RG93bihldnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVLZXlEb3duKGV2dClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBBTklNQVRJTkc6ICdtZGMtdGFiLXNjcm9sbGVyLS1hbmltYXRpbmcnLFxuICAgIFNDUk9MTF9BUkVBX1NDUk9MTDogJ21kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhLS1zY3JvbGwnLFxuICAgIFNDUk9MTF9URVNUOiAnbWRjLXRhYi1zY3JvbGxlcl9fdGVzdCcsXG59O1xudmFyIHN0cmluZ3MgPSB7XG4gICAgQVJFQV9TRUxFQ1RPUjogJy5tZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtYXJlYScsXG4gICAgQ09OVEVOVF9TRUxFQ1RPUjogJy5tZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtY29udGVudCcsXG59O1xuZXhwb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncywgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBNRENUYWJTY3JvbGxlclJUTCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENUYWJTY3JvbGxlclJUTChhZGFwdGVyKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICAgIH1cbiAgICByZXR1cm4gTURDVGFiU2Nyb2xsZXJSVEw7XG59KCkpO1xuZXhwb3J0IHsgTURDVGFiU2Nyb2xsZXJSVEwgfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJTY3JvbGxlclJUTDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJ0bC1zY3JvbGxlci5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENUYWJTY3JvbGxlclJUTCB9IGZyb20gJy4vcnRsLXNjcm9sbGVyJztcbnZhciBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQucHJvdG90eXBlLmdldFNjcm9sbFBvc2l0aW9uUlRMID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgICAgIHZhciByaWdodCA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCkucmlnaHQ7XG4gICAgICAgIC8vIFNjcm9sbCB2YWx1ZXMgb24gbW9zdCBicm93c2VycyBhcmUgaW50cyBpbnN0ZWFkIG9mIGZsb2F0cyBzbyB3ZSByb3VuZFxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChyaWdodCAtIGN1cnJlbnRTY3JvbGxMZWZ0KTtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdC5wcm90b3R5cGUuc2Nyb2xsVG9SVEwgPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICB2YXIgZWRnZXMgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpO1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgICAgIHZhciBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oZWRnZXMucmlnaHQgLSBzY3JvbGxYKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsRGVsdGE6IGNsYW1wZWRTY3JvbGxMZWZ0IC0gY3VycmVudFNjcm9sbExlZnQsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQucHJvdG90eXBlLmluY3JlbWVudFNjcm9sbFJUTCA9IGZ1bmN0aW9uIChzY3JvbGxYKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICAgICAgdmFyIGNsYW1wZWRTY3JvbGxMZWZ0ID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXyhjdXJyZW50U2Nyb2xsTGVmdCAtIHNjcm9sbFgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICAgICAgICBzY3JvbGxEZWx0YTogY2xhbXBlZFNjcm9sbExlZnQgLSBjdXJyZW50U2Nyb2xsTGVmdCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdC5wcm90b3R5cGUuZ2V0QW5pbWF0aW5nU2Nyb2xsUG9zaXRpb24gPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICByZXR1cm4gc2Nyb2xsWDtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdC5wcm90b3R5cGUuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29udGVudFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGgoKTtcbiAgICAgICAgdmFyIHJvb3RXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYU9mZnNldFdpZHRoKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgcmlnaHQ6IGNvbnRlbnRXaWR0aCAtIHJvb3RXaWR0aCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdC5wcm90b3R5cGUuY2xhbXBTY3JvbGxWYWx1ZV8gPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICB2YXIgZWRnZXMgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpO1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoZWRnZXMubGVmdCwgc2Nyb2xsWCksIGVkZ2VzLnJpZ2h0KTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQ7XG59KE1EQ1RhYlNjcm9sbGVyUlRMKSk7XG5leHBvcnQgeyBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQgfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ydGwtZGVmYXVsdC1zY3JvbGxlci5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENUYWJTY3JvbGxlclJUTCB9IGZyb20gJy4vcnRsLXNjcm9sbGVyJztcbnZhciBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGFiU2Nyb2xsZXJSVExOZWdhdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlLnByb3RvdHlwZS5nZXRTY3JvbGxQb3NpdGlvblJUTCA9IGZ1bmN0aW9uICh0cmFuc2xhdGVYKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodHJhbnNsYXRlWCAtIGN1cnJlbnRTY3JvbGxMZWZ0KTtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUucHJvdG90eXBlLnNjcm9sbFRvUlRMID0gZnVuY3Rpb24gKHNjcm9sbFgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgICAgICB2YXIgY2xhbXBlZFNjcm9sbExlZnQgPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKC1zY3JvbGxYKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsRGVsdGE6IGNsYW1wZWRTY3JvbGxMZWZ0IC0gY3VycmVudFNjcm9sbExlZnQsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlLnByb3RvdHlwZS5pbmNyZW1lbnRTY3JvbGxSVEwgPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgICAgIHZhciBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oY3VycmVudFNjcm9sbExlZnQgLSBzY3JvbGxYKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsRGVsdGE6IGNsYW1wZWRTY3JvbGxMZWZ0IC0gY3VycmVudFNjcm9sbExlZnQsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlLnByb3RvdHlwZS5nZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbiA9IGZ1bmN0aW9uIChzY3JvbGxYLCB0cmFuc2xhdGVYKSB7XG4gICAgICAgIHJldHVybiBzY3JvbGxYIC0gdHJhbnNsYXRlWDtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUucHJvdG90eXBlLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgICAgIHZhciByb290V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFPZmZzZXRXaWR0aCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogcm9vdFdpZHRoIC0gY29udGVudFdpZHRoLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlLnByb3RvdHlwZS5jbGFtcFNjcm9sbFZhbHVlXyA9IGZ1bmN0aW9uIChzY3JvbGxYKSB7XG4gICAgICAgIHZhciBlZGdlcyA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCk7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihlZGdlcy5yaWdodCwgc2Nyb2xsWCksIGVkZ2VzLmxlZnQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmU7XG59KE1EQ1RhYlNjcm9sbGVyUlRMKSk7XG5leHBvcnQgeyBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVGFiU2Nyb2xsZXJSVExOZWdhdGl2ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJ0bC1uZWdhdGl2ZS1zY3JvbGxlci5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENUYWJTY3JvbGxlclJUTCB9IGZyb20gJy4vcnRsLXNjcm9sbGVyJztcbnZhciBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UucHJvdG90eXBlLmdldFNjcm9sbFBvc2l0aW9uUlRMID0gZnVuY3Rpb24gKHRyYW5zbGF0ZVgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgICAgICAvLyBTY3JvbGwgdmFsdWVzIG9uIG1vc3QgYnJvd3NlcnMgYXJlIGludHMgaW5zdGVhZCBvZiBmbG9hdHMgc28gd2Ugcm91bmRcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoY3VycmVudFNjcm9sbExlZnQgLSB0cmFuc2xhdGVYKTtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZS5wcm90b3R5cGUuc2Nyb2xsVG9SVEwgPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgICAgIHZhciBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oc2Nyb2xsWCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIHNjcm9sbERlbHRhOiBjdXJyZW50U2Nyb2xsTGVmdCAtIGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlLnByb3RvdHlwZS5pbmNyZW1lbnRTY3JvbGxSVEwgPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgICAgIHZhciBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oY3VycmVudFNjcm9sbExlZnQgKyBzY3JvbGxYKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsRGVsdGE6IGN1cnJlbnRTY3JvbGxMZWZ0IC0gY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UucHJvdG90eXBlLmdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uID0gZnVuY3Rpb24gKHNjcm9sbFgsIHRyYW5zbGF0ZVgpIHtcbiAgICAgICAgcmV0dXJuIHNjcm9sbFggKyB0cmFuc2xhdGVYO1xuICAgIH07XG4gICAgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlLnByb3RvdHlwZS5jYWxjdWxhdGVTY3JvbGxFZGdlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb250ZW50V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aCgpO1xuICAgICAgICB2YXIgcm9vdFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IGNvbnRlbnRXaWR0aCAtIHJvb3RXaWR0aCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlLnByb3RvdHlwZS5jbGFtcFNjcm9sbFZhbHVlXyA9IGZ1bmN0aW9uIChzY3JvbGxYKSB7XG4gICAgICAgIHZhciBlZGdlcyA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCk7XG4gICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChlZGdlcy5yaWdodCwgc2Nyb2xsWCksIGVkZ2VzLmxlZnQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZTtcbn0oTURDVGFiU2Nyb2xsZXJSVEwpKTtcbmV4cG9ydCB7IE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZSB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJ0bC1yZXZlcnNlLXNjcm9sbGVyLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQgfSBmcm9tICcuL3J0bC1kZWZhdWx0LXNjcm9sbGVyJztcbmltcG9ydCB7IE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUgfSBmcm9tICcuL3J0bC1uZWdhdGl2ZS1zY3JvbGxlcic7XG5pbXBvcnQgeyBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UgfSBmcm9tICcuL3J0bC1yZXZlcnNlLXNjcm9sbGVyJztcbnZhciBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb250cm9scyB3aGV0aGVyIHdlIHNob3VsZCBoYW5kbGUgdGhlIHRyYW5zaXRpb25lbmQgYW5kIGludGVyYWN0aW9uIGV2ZW50cyBkdXJpbmcgdGhlIGFuaW1hdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLmlzQW5pbWF0aW5nXyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUYWJTY3JvbGxlckZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUYWJTY3JvbGxlckZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUYWJTY3JvbGxlckZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0TWF0Y2hlc1NlbGVjdG9yOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYWRkU2Nyb2xsQXJlYUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0U2Nyb2xsQXJlYVN0eWxlUHJvcGVydHk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRTY3JvbGxDb250ZW50U3R5bGVQcm9wZXJ0eTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFNjcm9sbENvbnRlbnRTdHlsZVZhbHVlOiBmdW5jdGlvbiAoKSB7IHJldHVybiAnJzsgfSxcbiAgICAgICAgICAgICAgICBzZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBnZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgY29tcHV0ZVNjcm9sbENvbnRlbnRDbGllbnRSZWN0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgY29tcHV0ZUhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBDb21wdXRlIGhvcml6b250YWwgc2Nyb2xsYmFyIGhlaWdodCBvbiBzY3JvbGxlciB3aXRoIG92ZXJmbG93IGluaXRpYWxseSBoaWRkZW4sIHRoZW4gdXBkYXRlIG92ZXJmbG93IHRvIHNjcm9sbFxuICAgICAgICAvLyBhbmQgaW1tZWRpYXRlbHkgYWRqdXN0IGJvdHRvbSBtYXJnaW4gdG8gYXZvaWQgdGhlIHNjcm9sbGJhciBpbml0aWFsbHkgYXBwZWFyaW5nIGJlZm9yZSBKUyBydW5zLlxuICAgICAgICB2YXIgaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodCA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxBcmVhU3R5bGVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScsIC1ob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkU2Nyb2xsQXJlYUNsYXNzKE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5jc3NDbGFzc2VzLlNDUk9MTF9BUkVBX1NDUk9MTCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgY3VycmVudCB2aXN1YWwgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICovXG4gICAgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRTY3JvbGxQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSVExfKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVDdXJyZW50U2Nyb2xsUG9zaXRpb25SVExfKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGN1cnJlbnRUcmFuc2xhdGVYID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50VHJhbnNsYXRlWF8oKTtcbiAgICAgICAgdmFyIHNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgICAgIHJldHVybiBzY3JvbGxMZWZ0IC0gY3VycmVudFRyYW5zbGF0ZVg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGludGVyYWN0aW9uIGV2ZW50cyB0aGF0IG9jY3VyIGR1cmluZyB0cmFuc2l0aW9uXG4gICAgICovXG4gICAgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRWFybHkgZXhpdCBpZiB3ZSBhcmVuJ3QgYW5pbWF0aW5nXG4gICAgICAgIGlmICghdGhpcy5pc0FuaW1hdGluZ18pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcmV2ZW50IG90aGVyIGV2ZW50IGxpc3RlbmVycyBmcm9tIGhhbmRsaW5nIHRoaXMgZXZlbnRcbiAgICAgICAgdGhpcy5zdG9wU2Nyb2xsQW5pbWF0aW9uXygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgdHJhbnNpdGlvbmVuZCBldmVudFxuICAgICAqL1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgLy8gRWFybHkgZXhpdCBpZiB3ZSBhcmVuJ3QgYW5pbWF0aW5nIG9yIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkIGJ5IGEgZGlmZmVyZW50IGVsZW1lbnQuXG4gICAgICAgIHZhciBldnRUYXJnZXQgPSBldnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRoaXMuaXNBbmltYXRpbmdfIHx8XG4gICAgICAgICAgICAhdGhpcy5hZGFwdGVyXy5ldmVudFRhcmdldE1hdGNoZXNTZWxlY3RvcihldnRUYXJnZXQsIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5zdHJpbmdzLkNPTlRFTlRfU0VMRUNUT1IpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZ18gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENUYWJTY3JvbGxlckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW5jcmVtZW50IHRoZSBzY3JvbGwgdmFsdWUgYnkgdGhlIHNjcm9sbFhJbmNyZW1lbnRcbiAgICAgKiBAcGFyYW0gc2Nyb2xsWEluY3JlbWVudCBUaGUgdmFsdWUgYnkgd2hpY2ggdG8gaW5jcmVtZW50IHRoZSBzY3JvbGwgcG9zaXRpb25cbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmluY3JlbWVudFNjcm9sbCA9IGZ1bmN0aW9uIChzY3JvbGxYSW5jcmVtZW50KSB7XG4gICAgICAgIC8vIEVhcmx5IGV4aXQgZm9yIG5vbi1vcGVyYXRpb25hbCBpbmNyZW1lbnQgdmFsdWVzXG4gICAgICAgIGlmIChzY3JvbGxYSW5jcmVtZW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNSVExfKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluY3JlbWVudFNjcm9sbFJUTF8oc2Nyb2xsWEluY3JlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmNyZW1lbnRTY3JvbGxfKHNjcm9sbFhJbmNyZW1lbnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2Nyb2xscyB0byB0aGUgZ2l2ZW4gc2Nyb2xsWCB2YWx1ZVxuICAgICAqL1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICBpZiAodGhpcy5pc1JUTF8oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG9SVExfKHNjcm9sbFgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9fKHNjcm9sbFgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgdmVyc2lvbiBvZiB0aGUgTURDVGFiU2Nyb2xsZXJSVExcbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmdldFJUTFNjcm9sbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMucnRsU2Nyb2xsZXJJbnN0YW5jZV8pIHtcbiAgICAgICAgICAgIHRoaXMucnRsU2Nyb2xsZXJJbnN0YW5jZV8gPSB0aGlzLnJ0bFNjcm9sbGVyRmFjdG9yeV8oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ydGxTY3JvbGxlckluc3RhbmNlXztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRyYW5zbGF0ZVggdmFsdWUgZnJvbSBhIENTUyBtYXRyaXggdHJhbnNmb3JtIGZ1bmN0aW9uIHN0cmluZ1xuICAgICAqL1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuY2FsY3VsYXRlQ3VycmVudFRyYW5zbGF0ZVhfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdHJhbnNmb3JtVmFsdWUgPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbENvbnRlbnRTdHlsZVZhbHVlKCd0cmFuc2Zvcm0nKTtcbiAgICAgICAgLy8gRWFybHkgZXhpdCBpZiBubyB0cmFuc2Zvcm0gaXMgcHJlc2VudFxuICAgICAgICBpZiAodHJhbnNmb3JtVmFsdWUgPT09ICdub25lJykge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHRyYW5zZm9ybSB2YWx1ZSBjb21lcyBiYWNrIGFzIGEgbWF0cml4IHRyYW5zZm9ybWF0aW9uIGluIHRoZSBmb3JtXG4gICAgICAgIC8vIG9mIGBtYXRyaXgoYSwgYiwgYywgZCwgdHgsIHR5KWAuIFdlIG9ubHkgY2FyZSBhYm91dCB0eCAodHJhbnNsYXRlWCkgc29cbiAgICAgICAgLy8gd2UncmUgZ29pbmcgdG8gZ3JhYiBhbGwgdGhlIHBhcmVudGhlc2l6ZWQgdmFsdWVzLCBzdHJpcCBvdXQgdHgsIGFuZFxuICAgICAgICAvLyBwYXJzZSBpdC5cbiAgICAgICAgdmFyIG1hdGNoID0gL1xcKCguKz8pXFwpLy5leGVjKHRyYW5zZm9ybVZhbHVlKTtcbiAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1hdHJpeFBhcmFtcyA9IG1hdGNoWzFdO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6YmFuLXRzLWlnbm9yZSBcIlVudXNlZCB2YXJzXCIgc2hvdWxkIGJlIGEgbGludGVyIHdhcm5pbmcsIG5vdCBhIGNvbXBpbGVyIGVycm9yLlxuICAgICAgICAvLyBAdHMtaWdub3JlIFRoZXNlIHVudXNlZCB2YXJpYWJsZXMgc2hvdWxkIHJldGFpbiB0aGVpciBzZW1hbnRpYyBuYW1lcyBmb3IgY2xhcml0eS5cbiAgICAgICAgdmFyIF9hID0gdHNsaWJfMS5fX3JlYWQobWF0cml4UGFyYW1zLnNwbGl0KCcsJyksIDYpLCBhID0gX2FbMF0sIGIgPSBfYVsxXSwgYyA9IF9hWzJdLCBkID0gX2FbM10sIHR4ID0gX2FbNF0sIHR5ID0gX2FbNV07XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHR4KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpiYW5cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgYSBzYWZlIHNjcm9sbCB2YWx1ZSB0aGF0IGlzID4gMCBhbmQgPCB0aGUgbWF4IHNjcm9sbCB2YWx1ZVxuICAgICAqIEBwYXJhbSBzY3JvbGxYIFRoZSBkaXN0YW5jZSB0byBzY3JvbGxcbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmNsYW1wU2Nyb2xsVmFsdWVfID0gZnVuY3Rpb24gKHNjcm9sbFgpIHtcbiAgICAgICAgdmFyIGVkZ2VzID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxFZGdlc18oKTtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGVkZ2VzLmxlZnQsIHNjcm9sbFgpLCBlZGdlcy5yaWdodCk7XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmNvbXB1dGVDdXJyZW50U2Nyb2xsUG9zaXRpb25SVExfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdHJhbnNsYXRlWCA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudFRyYW5zbGF0ZVhfKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJUTFNjcm9sbGVyKCkuZ2V0U2Nyb2xsUG9zaXRpb25SVEwodHJhbnNsYXRlWCk7XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgICAgIHZhciByb290V2lkdGggPSB0aGlzLmFkYXB0ZXJfLmdldFNjcm9sbEFyZWFPZmZzZXRXaWR0aCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHJpZ2h0OiBjb250ZW50V2lkdGggLSByb290V2lkdGgsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBzY3JvbGwgbWV0aG9kXG4gICAgICogQHBhcmFtIHNjcm9sbFggVGhlIG5ldyBzY3JvbGwgcG9zaXRpb25cbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLnNjcm9sbFRvXyA9IGZ1bmN0aW9uIChzY3JvbGxYKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsWCA9IHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICAgICAgdmFyIHNhZmVTY3JvbGxYID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXyhzY3JvbGxYKTtcbiAgICAgICAgdmFyIHNjcm9sbERlbHRhID0gc2FmZVNjcm9sbFggLSBjdXJyZW50U2Nyb2xsWDtcbiAgICAgICAgdGhpcy5hbmltYXRlXyh7XG4gICAgICAgICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBzYWZlU2Nyb2xsWCxcbiAgICAgICAgICAgIHNjcm9sbERlbHRhOiBzY3JvbGxEZWx0YSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBSVEwgc2Nyb2xsIG1ldGhvZFxuICAgICAqIEBwYXJhbSBzY3JvbGxYIFRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICovXG4gICAgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zY3JvbGxUb1JUTF8gPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5nZXRSVExTY3JvbGxlcigpLnNjcm9sbFRvUlRMKHNjcm9sbFgpO1xuICAgICAgICB0aGlzLmFuaW1hdGVfKGFuaW1hdGlvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBpbmNyZW1lbnQgc2Nyb2xsIG1ldGhvZFxuICAgICAqIEBwYXJhbSBzY3JvbGxYIFRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uIGluY3JlbWVudFxuICAgICAqL1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuaW5jcmVtZW50U2Nyb2xsXyA9IGZ1bmN0aW9uIChzY3JvbGxYKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsWCA9IHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICAgICAgdmFyIHRhcmdldFNjcm9sbFggPSBzY3JvbGxYICsgY3VycmVudFNjcm9sbFg7XG4gICAgICAgIHZhciBzYWZlU2Nyb2xsWCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8odGFyZ2V0U2Nyb2xsWCk7XG4gICAgICAgIHZhciBzY3JvbGxEZWx0YSA9IHNhZmVTY3JvbGxYIC0gY3VycmVudFNjcm9sbFg7XG4gICAgICAgIHRoaXMuYW5pbWF0ZV8oe1xuICAgICAgICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogc2FmZVNjcm9sbFgsXG4gICAgICAgICAgICBzY3JvbGxEZWx0YTogc2Nyb2xsRGVsdGEsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgaW5jcmVtZW50IHNjcm9sbCBSVEwgbWV0aG9kXG4gICAgICogQHBhcmFtIHNjcm9sbFggVGhlIG5ldyBzY3JvbGwgcG9zaXRpb24gUlRMIGluY3JlbWVudFxuICAgICAqL1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuaW5jcmVtZW50U2Nyb2xsUlRMXyA9IGZ1bmN0aW9uIChzY3JvbGxYKSB7XG4gICAgICAgIHZhciBhbmltYXRpb24gPSB0aGlzLmdldFJUTFNjcm9sbGVyKCkuaW5jcmVtZW50U2Nyb2xsUlRMKHNjcm9sbFgpO1xuICAgICAgICB0aGlzLmFuaW1hdGVfKGFuaW1hdGlvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBbmltYXRlcyB0aGUgdGFiIHNjcm9sbGluZ1xuICAgICAqIEBwYXJhbSBhbmltYXRpb24gVGhlIGFuaW1hdGlvbiB0byBhcHBseVxuICAgICAqL1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuYW5pbWF0ZV8gPSBmdW5jdGlvbiAoYW5pbWF0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIEVhcmx5IGV4aXQgaWYgdHJhbnNsYXRlWCBpcyAwLCB3aGljaCBtZWFucyB0aGVyZSdzIG5vIGFuaW1hdGlvbiB0byBwZXJmb3JtXG4gICAgICAgIGlmIChhbmltYXRpb24uc2Nyb2xsRGVsdGEgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3BTY3JvbGxBbmltYXRpb25fKCk7XG4gICAgICAgIC8vIFRoaXMgYW5pbWF0aW9uIHVzZXMgdGhlIEZMSVAgYXBwcm9hY2guXG4gICAgICAgIC8vIFJlYWQgbW9yZSBoZXJlOiBodHRwczovL2Flcm90d2lzdC5jb20vYmxvZy9mbGlwLXlvdXItYW5pbWF0aW9ucy9cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdChhbmltYXRpb24uZmluYWxTY3JvbGxQb3NpdGlvbik7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScsIFwidHJhbnNsYXRlWChcIiArIGFuaW1hdGlvbi5zY3JvbGxEZWx0YSArIFwicHgpXCIpO1xuICAgICAgICAvLyBGb3JjZSByZXBhaW50XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0KCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENUYWJTY3JvbGxlckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkcpO1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScsICdub25lJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nXyA9IHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdG9wcyBzY3JvbGwgYW5pbWF0aW9uXG4gICAgICovXG4gICAgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zdG9wU2Nyb2xsQW5pbWF0aW9uXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZ18gPSBmYWxzZTtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGxQb3NpdGlvbiA9IHRoaXMuZ2V0QW5pbWF0aW5nU2Nyb2xsUG9zaXRpb25fKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxDb250ZW50U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMHB4KScpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KGN1cnJlbnRTY3JvbGxQb3NpdGlvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBkdXJpbmcgYW5pbWF0aW9uXG4gICAgICovXG4gICAgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyZW50VHJhbnNsYXRlWCA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudFRyYW5zbGF0ZVhfKCk7XG4gICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyXy5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgICAgICBpZiAodGhpcy5pc1JUTF8oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UlRMU2Nyb2xsZXIoKS5nZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbihzY3JvbGxMZWZ0LCBjdXJyZW50VHJhbnNsYXRlWCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjcm9sbExlZnQgLSBjdXJyZW50VHJhbnNsYXRlWDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgdGhlIFJUTCBTY3JvbGxlciB0byB1c2VcbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLnJ0bFNjcm9sbGVyRmFjdG9yeV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEJyb3dzZXJzIGhhdmUgdGhyZWUgZGlmZmVyZW50IGltcGxlbWVudGF0aW9ucyBvZiBzY3JvbGxMZWZ0IGluIFJUTCBtb2RlLFxuICAgICAgICAvLyBkZXBlbmRlbnQgb24gdGhlIGJyb3dzZXIuIFRoZSBiZWhhdmlvciBpcyBiYXNlZCBvZmYgdGhlIG1heCBMVFJcbiAgICAgICAgLy8gc2Nyb2xsbGVmdCB2YWx1ZSBhbmQgMC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gKiBEZWZhdWx0IHNjcm9sbGluZyBpbiBSVEwgKlxuICAgICAgICAvLyAgICAtIExlZnQtbW9zdCB2YWx1ZTogMFxuICAgICAgICAvLyAgICAtIFJpZ2h0LW1vc3QgdmFsdWU6IE1heCBMVFIgc2Nyb2xsTGVmdCB2YWx1ZVxuICAgICAgICAvL1xuICAgICAgICAvLyAqIE5lZ2F0aXZlIHNjcm9sbGluZyBpbiBSVEwgKlxuICAgICAgICAvLyAgICAtIExlZnQtbW9zdCB2YWx1ZTogTmVnYXRlZCBtYXggTFRSIHNjcm9sbExlZnQgdmFsdWVcbiAgICAgICAgLy8gICAgLSBSaWdodC1tb3N0IHZhbHVlOiAwXG4gICAgICAgIC8vXG4gICAgICAgIC8vICogUmV2ZXJzZSBzY3JvbGxpbmcgaW4gUlRMICpcbiAgICAgICAgLy8gICAgLSBMZWZ0LW1vc3QgdmFsdWU6IE1heCBMVFIgc2Nyb2xsTGVmdCB2YWx1ZVxuICAgICAgICAvLyAgICAtIFJpZ2h0LW1vc3QgdmFsdWU6IDBcbiAgICAgICAgLy9cbiAgICAgICAgLy8gV2UgdXNlIHRob3NlIHByaW5jaXBsZXMgYmVsb3cgdG8gZGV0ZXJtaW5lIHdoaWNoIFJUTCBzY3JvbGxMZWZ0XG4gICAgICAgIC8vIGJlaGF2aW9yIGlzIGltcGxlbWVudGVkIGluIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gICAgICAgIHZhciBpbml0aWFsU2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdChpbml0aWFsU2Nyb2xsTGVmdCAtIDEpO1xuICAgICAgICB2YXIgbmV3U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICAgICAgLy8gSWYgdGhlIG5ld1Njcm9sbExlZnQgdmFsdWUgaXMgbmVnYXRpdmUsdGhlbiB3ZSBrbm93IHRoYXQgdGhlIGJyb3dzZXIgaGFzXG4gICAgICAgIC8vIGltcGxlbWVudGVkIG5lZ2F0aXZlIFJUTCBzY3JvbGxpbmcsIHNpbmNlIGFsbCBvdGhlciBpbXBsZW1lbnRhdGlvbnMgaGF2ZVxuICAgICAgICAvLyBvbmx5IHBvc2l0aXZlIHZhbHVlcy5cbiAgICAgICAgaWYgKG5ld1Njcm9sbExlZnQgPCAwKSB7XG4gICAgICAgICAgICAvLyBVbmRvIHRoZSBzY3JvbGxMZWZ0IHRlc3QgY2hlY2tcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoaW5pdGlhbFNjcm9sbExlZnQpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlKHRoaXMuYWRhcHRlcl8pO1xuICAgICAgICB9XG4gICAgICAgIHZhciByb290Q2xpZW50UmVjdCA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBjb250ZW50Q2xpZW50UmVjdCA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZVNjcm9sbENvbnRlbnRDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciByaWdodEVkZ2VEZWx0YSA9IE1hdGgucm91bmQoY29udGVudENsaWVudFJlY3QucmlnaHQgLSByb290Q2xpZW50UmVjdC5yaWdodCk7XG4gICAgICAgIC8vIFVuZG8gdGhlIHNjcm9sbExlZnQgdGVzdCBjaGVja1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KGluaXRpYWxTY3JvbGxMZWZ0KTtcbiAgICAgICAgLy8gQnkgY2FsY3VsYXRpbmcgdGhlIGNsaWVudFJlY3Qgb2YgdGhlIHJvb3QgZWxlbWVudCBhbmQgdGhlIGNsaWVudFJlY3Qgb2ZcbiAgICAgICAgLy8gdGhlIGNvbnRlbnQgZWxlbWVudCwgd2UgY2FuIGRldGVybWluZSBob3cgbXVjaCB0aGUgc2Nyb2xsIHZhbHVlIGNoYW5nZWRcbiAgICAgICAgLy8gd2hlbiB3ZSBwZXJmb3JtZWQgdGhlIHNjcm9sbExlZnQgc3VidHJhY3Rpb24gYWJvdmUuXG4gICAgICAgIGlmIChyaWdodEVkZ2VEZWx0YSA9PT0gbmV3U2Nyb2xsTGVmdCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UodGhpcy5hZGFwdGVyXyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQodGhpcy5hZGFwdGVyXyk7XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmlzUlRMXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uZ2V0U2Nyb2xsQ29udGVudFN0eWxlVmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJztcbiAgICB9O1xuICAgIHJldHVybiBNRENUYWJTY3JvbGxlckZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgeyBjc3NDbGFzc2VzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gY29tcHV0ZUhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcuXG4gKi9cbnZhciBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0Xztcbi8qKlxuICogQ29tcHV0ZXMgdGhlIGhlaWdodCBvZiBicm93c2VyLXJlbmRlcmVkIGhvcml6b250YWwgc2Nyb2xsYmFycyB1c2luZyBhIHNlbGYtY3JlYXRlZCB0ZXN0IGVsZW1lbnQuXG4gKiBNYXkgcmV0dXJuIDAgKGUuZy4gb24gT1MgWCBicm93c2VycyB1bmRlciBkZWZhdWx0IGNvbmZpZ3VyYXRpb24pLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZUhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQoZG9jdW1lbnRPYmosIHNob3VsZENhY2hlUmVzdWx0KSB7XG4gICAgaWYgKHNob3VsZENhY2hlUmVzdWx0ID09PSB2b2lkIDApIHsgc2hvdWxkQ2FjaGVSZXN1bHQgPSB0cnVlOyB9XG4gICAgaWYgKHNob3VsZENhY2hlUmVzdWx0ICYmIHR5cGVvZiBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0XyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHRfO1xuICAgIH1cbiAgICB2YXIgZWwgPSBkb2N1bWVudE9iai5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzZXMuU0NST0xMX1RFU1QpO1xuICAgIGRvY3VtZW50T2JqLmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIHZhciBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0IC0gZWwuY2xpZW50SGVpZ2h0O1xuICAgIGRvY3VtZW50T2JqLmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIGlmIChzaG91bGRDYWNoZVJlc3VsdCkge1xuICAgICAgICBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0XyA9IGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtZGMtdGFiLXNjcm9sbGVyXCIgOmNsYXNzPVwiY2xhc3Nlc1wiPlxuICAgIDxkaXZcbiAgICAgIHJlZj1cImFyZWFcIlxuICAgICAgY2xhc3M9XCJtZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtYXJlYVwiXG4gICAgICBAbW91c2Vkb3duPVwiaGFuZGxlSW50ZXJhY3Rpb25cIlxuICAgICAgQHdoZWVsPVwiaGFuZGxlSW50ZXJhY3Rpb25cIlxuICAgICAgQHBvaW50ZXJkb3duPVwiaGFuZGxlSW50ZXJhY3Rpb25cIlxuICAgICAgQHRvdWNoc3RhcnQ9XCJoYW5kbGVJbnRlcmFjdGlvblwiXG4gICAgICBAa2V5ZG93bj1cImhhbmRsZUludGVyYWN0aW9uXCJcbiAgICAgIDpjbGFzcz1cImFyZWFDbGFzc2VzXCJcbiAgICAgIDpzdHlsZT1cImFyZWFTdHlsZXNcIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPVwiY29udGVudFwiXG4gICAgICAgIGNsYXNzPVwibWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWNvbnRlbnRcIlxuICAgICAgICA6c3R5bGU9XCJjb250ZW50U3R5bGVzXCJcbiAgICAgICAgQHRyYW5zaXRpb25lbmQ9XCJoYW5kbGVUcmFuc2l0aW9uRW5kXCJcbiAgICAgID5cbiAgICAgICAgPHNsb3QgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvZm91bmRhdGlvbidcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnQG1hdGVyaWFsL3RhYi1zY3JvbGxlci91dGlsJ1xuaW1wb3J0IHsgbWF0Y2hlcyB9IGZyb20gJ0BtYXRlcmlhbC9kb20vcG9ueWZpbGwnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy10YWItc2Nyb2xsZXInLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7IGNsYXNzZXM6IHt9LCBhcmVhQ2xhc3Nlczoge30sIGFyZWFTdHlsZXM6IHt9LCBjb250ZW50U3R5bGVzOiB7fSB9XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uKHtcbiAgICAgIGV2ZW50VGFyZ2V0TWF0Y2hlc1NlbGVjdG9yOiAoZXZ0VGFyZ2V0LCBzZWxlY3RvcikgPT4ge1xuICAgICAgICBjb25zdCBNQVRDSEVTID0gbWF0Y2hlcyhIVE1MRWxlbWVudC5wcm90b3R5cGUpXG4gICAgICAgIHJldHVybiBldnRUYXJnZXRbTUFUQ0hFU10oc2VsZWN0b3IpXG4gICAgICB9LFxuICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpLFxuXG4gICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGRlbGV0ZSh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSksXG4gICAgICBhZGRTY3JvbGxBcmVhQ2xhc3M6IGNsYXNzTmFtZSA9PlxuICAgICAgICB0aGlzLiRzZXQodGhpcy5hcmVhQ2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKSxcbiAgICAgIHNldFNjcm9sbEFyZWFTdHlsZVByb3BlcnR5OiAocHJvcCwgdmFsdWUpID0+XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLmFyZWFTdHlsZXMsIHByb3AsIHZhbHVlKSxcbiAgICAgIHNldFNjcm9sbENvbnRlbnRTdHlsZVByb3BlcnR5OiAocHJvcCwgdmFsdWUpID0+XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLmNvbnRlbnRTdHlsZXMsIHByb3AsIHZhbHVlKSxcbiAgICAgIGdldFNjcm9sbENvbnRlbnRTdHlsZVZhbHVlOiBwcm9wTmFtZSA9PlxuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiRyZWZzLmNvbnRlbnQpLmdldFByb3BlcnR5VmFsdWUocHJvcE5hbWUpLFxuICAgICAgc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQ6IHNjcm9sbFggPT5cbiAgICAgICAgKHRoaXMuJHJlZnMuYXJlYS5zY3JvbGxMZWZ0ID0gc2Nyb2xsWCksXG4gICAgICBnZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdDogKCkgPT4gdGhpcy4kcmVmcy5hcmVhLnNjcm9sbExlZnQsXG4gICAgICBnZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGg6ICgpID0+IHRoaXMuJHJlZnMuY29udGVudC5vZmZzZXRXaWR0aCxcbiAgICAgIGdldFNjcm9sbEFyZWFPZmZzZXRXaWR0aDogKCkgPT4gdGhpcy4kcmVmcy5hcmVhLm9mZnNldFdpZHRoLFxuICAgICAgY29tcHV0ZVNjcm9sbEFyZWFDbGllbnRSZWN0OiAoKSA9PlxuICAgICAgICB0aGlzLiRyZWZzLmFyZWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjb21wdXRlU2Nyb2xsQ29udGVudENsaWVudFJlY3Q6ICgpID0+XG4gICAgICAgIHRoaXMuJHJlZnMuY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0OiAoKSA9PlxuICAgICAgICB1dGlsLmNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0KGRvY3VtZW50KVxuICAgIH0pXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlVHJhbnNpdGlvbkVuZChldnQpXG4gICAgfSxcbiAgICBoYW5kbGVJbnRlcmFjdGlvbihldnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVJbnRlcmFjdGlvbihldnQpXG4gICAgfSxcbiAgICBnZXRTY3JvbGxQb3NpdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb24uZ2V0U2Nyb2xsUG9zaXRpb24oKVxuICAgIH0sXG4gICAgZ2V0U2Nyb2xsQ29udGVudFdpZHRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuY29udGVudC5vZmZzZXRXaWR0aFxuICAgIH0sXG4gICAgaW5jcmVtZW50U2Nyb2xsKHNjcm9sbFhJbmNyZW1lbnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5pbmNyZW1lbnRTY3JvbGwoc2Nyb2xsWEluY3JlbWVudClcbiAgICB9LFxuICAgIHNjcm9sbFRvKHNjcm9sbFgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zY3JvbGxUbyhzY3JvbGxYKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIEFDVElWRTogJ21kYy10YWItaW5kaWNhdG9yLS1hY3RpdmUnLFxuICAgIEZBREU6ICdtZGMtdGFiLWluZGljYXRvci0tZmFkZScsXG4gICAgTk9fVFJBTlNJVElPTjogJ21kYy10YWItaW5kaWNhdG9yLS1uby10cmFuc2l0aW9uJyxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBDT05URU5UX1NFTEVDVE9SOiAnLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50Jyxcbn07XG5leHBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzLCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBjb21wdXRlQ29udGVudENsaWVudFJlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBzZXRDb250ZW50U3R5bGVQcm9wZXJ0eTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24ucHJvdG90eXBlLmNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IHN1YmNsYXNzIGlzIG5vdCBhIGJyYW5jaCBzdGF0ZW1lbnQgKi9cbnZhciBNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7XG4gICAgICAgIC8vIEVhcmx5IGV4aXQgaWYgbm8gaW5kaWNhdG9yIGlzIHByZXNlbnQgdG8gaGFuZGxlIGNhc2VzIHdoZXJlIGFuIGluZGljYXRvclxuICAgICAgICAvLyBtYXkgYmUgYWN0aXZhdGVkIHdpdGhvdXQgYSBwcmlvciBpbmRpY2F0b3Igc3RhdGVcbiAgICAgICAgaWYgKCFwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFDVElWRSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhpcyBhbmltYXRpb24gdXNlcyB0aGUgRkxJUCBhcHByb2FjaC4gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgaXQgYXQgdGhlIGxpbmsgYmVsb3c6XG4gICAgICAgIC8vIGh0dHBzOi8vYWVyb3R3aXN0LmNvbS9ibG9nL2ZsaXAteW91ci1hbmltYXRpb25zL1xuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRpbWVuc2lvbnMgYmFzZWQgb24gdGhlIGRpbWVuc2lvbnMgb2YgdGhlIHByZXZpb3VzIGluZGljYXRvclxuICAgICAgICB2YXIgY3VycmVudENsaWVudFJlY3QgPSB0aGlzLmNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgd2lkdGhEZWx0YSA9IHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdC53aWR0aCAvIGN1cnJlbnRDbGllbnRSZWN0LndpZHRoO1xuICAgICAgICB2YXIgeFBvc2l0aW9uID0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0LmxlZnQgLSBjdXJyZW50Q2xpZW50UmVjdC5sZWZ0O1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5OT19UUkFOU0lUSU9OKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRDb250ZW50U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGVYKFwiICsgeFBvc2l0aW9uICsgXCJweCkgc2NhbGVYKFwiICsgd2lkdGhEZWx0YSArIFwiKVwiKTtcbiAgICAgICAgLy8gRm9yY2UgcmVwYWludCBiZWZvcmUgdXBkYXRpbmcgY2xhc3NlcyBhbmQgdHJhbnNmb3JtIHRvIGVuc3VyZSB0aGUgdHJhbnNmb3JtIHByb3Blcmx5IHRha2VzIGVmZmVjdFxuICAgICAgICB0aGlzLmNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5OT19UUkFOU0lUSU9OKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRDb250ZW50U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJywgJycpO1xuICAgIH07XG4gICAgTURDU2xpZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFDVElWRSk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDU2xpZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb247XG59KE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDU2xpZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zbGlkaW5nLWZvdW5kYXRpb24uanMubWFwIiwiPHRlbXBsYXRlPlxuICA8c3BhbiBjbGFzcz1cIm1kYy10YWItaW5kaWNhdG9yXCIgOmNsYXNzPVwiY2xhc3Nlc1wiPlxuICAgIDxzcGFuXG4gICAgICByZWY9XCJjb250ZW50XCJcbiAgICAgIDpzdHlsZT1cInN0eWxlc1wiXG4gICAgICBjbGFzcz1cIm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50IG1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmVcIlxuICAgID48L3NwYW4+XG4gIDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTURDU2xpZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL3RhYi1pbmRpY2F0b3Ivc2xpZGluZy1mb3VuZGF0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtdGFiLWluZGljYXRvcicsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHsgY2xhc3Nlczoge30sIHN0eWxlczoge30gfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKSxcbiAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZGVsZXRlKHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lKSxcbiAgICAgIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdDogKCkgPT5cbiAgICAgICAgdGhpcy4kcmVmcy5jb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgc2V0Q29udGVudFN0eWxlUHJvcGVydHk6IChwcm9wLCB2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLiRzZXQodGhpcy5zdHlsZXMsIHByb3AsIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uYWN0aXZhdGUocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KVxuICAgIH0sXG4gICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5kZWFjdGl2YXRlKClcbiAgICB9LFxuICAgIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb24uY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8c3BhbiBjbGFzcz1cIm1kYy10YWJfX3JpcHBsZVwiIDpjbGFzcz1cImNsYXNzZXNcIiA6c3R5bGU9XCJzdHlsZXNcIj48L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgUmlwcGxlQmFzZSB9IGZyb20gJy4uL3JpcHBsZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRhYi1yaXBwbGUnLFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHsgY2xhc3Nlczoge30sIHN0eWxlczoge30gfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMucmlwcGxlID0gbmV3IFJpcHBsZUJhc2UodGhpcylcbiAgICB0aGlzLnJpcHBsZS5pbml0KClcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IG1kY1RhYiBmcm9tICcuL21kYy10YWIudnVlJ1xuaW1wb3J0IG1kY1RhYkJhciBmcm9tICcuL21kYy10YWItYmFyLnZ1ZSdcbmltcG9ydCBtZGNUYWJTY3JvbGxlciBmcm9tICcuL21kYy10YWItc2Nyb2xsZXIudnVlJ1xuaW1wb3J0IG1kY1RhYkluZGljYXRvciBmcm9tICcuL21kYy10YWItaW5kaWNhdG9yLnZ1ZSdcbmltcG9ydCBtZGNUYWJSaXBwbGUgZnJvbSAnLi9tZGMtdGFiLXJpcHBsZS52dWUnXG5leHBvcnQgeyBtZGNUYWIsIG1kY1RhYkJhciwgbWRjVGFiU2Nyb2xsZXIsIG1kY1RhYkluZGljYXRvciwgbWRjVGFiUmlwcGxlIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY1RhYixcbiAgbWRjVGFiQmFyLFxuICBtZGNUYWJTY3JvbGxlcixcbiAgbWRjVGFiSW5kaWNhdG9yLFxuICBtZGNUYWJSaXBwbGVcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJDdXN0b21FbGVtZW50IiwiZnVuY3Rpb25hbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwicHJvcHMiLCJpcyIsInRhZyIsImRhdGEiLCJjaGlsZHJlbiIsIkN1c3RvbUVsZW1lbnRNaXhpbiIsIkN1c3RvbUxpbmsiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImxpbmsiLCJPYmplY3QiLCJoIiwiZWxlbWVudCIsInBhcmVudCIsIiRyb3V0ZXIiLCIkcm9vdCIsIiRvcHRpb25zIiwib24iLCJjbGljayIsIm5hdGl2ZU9uIiwiQ3VzdG9tTGlua01peGluIiwidG8iLCJleGFjdCIsIkJvb2xlYW4iLCJhcHBlbmQiLCJyZXBsYWNlIiwiYWN0aXZlQ2xhc3MiLCJleGFjdEFjdGl2ZUNsYXNzIiwiY29tcHV0ZWQiLCJlbWl0Q3VzdG9tRXZlbnQiLCJlbCIsImV2dFR5cGUiLCJldnREYXRhIiwic2hvdWxkQnViYmxlIiwiZXZ0IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJleHRyYWN0SWNvblByb3AiLCJpY29uUHJvcCIsImNsYXNzZXMiLCJjb250ZW50IiwiQXJyYXkiLCJyZWR1Y2UiLCJyZXN1bHQiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsInNwbGl0IiwidGV4dENvbnRlbnQiLCJEaXNwYXRjaEV2ZW50TWl4aW4iLCJldmVudCIsIm1ldGhvZHMiLCIkZW1pdCIsInRhcmdldCIsImV2ZW50VGFyZ2V0IiwiYXJncyIsImV2ZW50QXJncyIsImxpc3RlbmVycyIsIiRsaXN0ZW5lcnMiLCJlIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIlZNQVVuaXF1ZUlkTWl4aW4iLCJiZWZvcmVDcmVhdGUiLCJ2bWFfdWlkXyIsIl91aWQiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fZXh0ZW5kcyIsIl9fIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJfX2Fzc2lnbiIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjYWxsIiwiYXBwbHkiLCJfX3JlYWQiLCJvIiwibSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiciIsImFyIiwibmV4dCIsImRvbmUiLCJwdXNoIiwiZXJyb3IiLCJfX3NwcmVhZCIsImNvbmNhdCIsInRzbGliXzEuX19leHRlbmRzIiwidHNsaWJfMS5fX2Fzc2lnbiIsInRzbGliXzEuX19zcHJlYWQiLCJjc3NDbGFzc2VzIiwic3RyaW5ncyIsInV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJ1dGlsLmFwcGx5UGFzc2l2ZSIsInBvbnlmaWxsLm1hdGNoZXMiLCJSaXBwbGVCYXNlIiwicmVmIiwiTUFUQ0hFUyIsIl9tYXRjaGVzIiwibWF0Y2hlcyIsIkhUTUxFbGVtZW50Iiwib3B0aW9ucyIsImJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMiLCJzdXBwb3J0c0Nzc1ZhcmlhYmxlcyIsImlzVW5ib3VuZGVkIiwiaXNTdXJmYWNlQWN0aXZlIiwiJGVsIiwiaXNTdXJmYWNlRGlzYWJsZWQiLCJkaXNhYmxlZCIsImFkZENsYXNzIiwiJHNldCIsInJlbW92ZUNsYXNzIiwiJGRlbGV0ZSIsImNvbnRhaW5zRXZlbnRUYXJnZXQiLCJjb250YWlucyIsInJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBseVBhc3NpdmUiLCJkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJkb2N1bWVudEVsZW1lbnQiLCJkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJkZXJlZ2lzdGVyUmVzaXplSGFuZGxlciIsInVwZGF0ZUNzc1ZhcmlhYmxlIiwidmFyTmFtZSIsInN0eWxlcyIsImNvbXB1dGVCb3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRXaW5kb3dQYWdlT2Zmc2V0IiwieCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwiTURDUmlwcGxlRm91bmRhdGlvbiIsIlJpcHBsZU1peGluIiwibW91bnRlZCIsInJpcHBsZSIsImluaXQiLCJiZWZvcmVEZXN0cm95IiwiZGVzdHJveSIsIm51bWJlcnMiLCJ0c2xpYl8xLl9fcmVhZCIsIm1kY1RhYiIsIm1kY1RhYkJhciIsIm1kY1RhYlNjcm9sbGVyIiwibWRjVGFiSW5kaWNhdG9yIiwibWRjVGFiUmlwcGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0VBQU8sU0FBU0EsUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEI7RUFDL0I7RUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7RUFDQSxNQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7RUFDakNELElBQUFBLElBQUksR0FBR0MsTUFBTSxDQUFDQyxHQUFkO0VBQ0QsR0FGRCxNQUVPLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztFQUN4QztFQUNBSCxJQUFBQSxJQUFJLEdBQUdHLE1BQU0sQ0FBQ0QsR0FBZDtFQUNEOztFQUNELE1BQUlGLElBQUosRUFBVTtFQUNSQSxJQUFBQSxJQUFJLENBQUNJLEdBQUwsQ0FBU0wsTUFBVDtFQUNEO0VBQ0Y7O0VDWk0sU0FBU00sVUFBVCxDQUFvQkMsVUFBcEIsRUFBZ0M7RUFDckMsU0FBTztFQUNMQyxJQUFBQSxPQUFPLEVBQUUsYUFESjtFQUVMQyxJQUFBQSxPQUFPLEVBQUUsaUJBQUFDLEVBQUUsRUFBSTtFQUNiLFdBQUssSUFBSUMsR0FBVCxJQUFnQkosVUFBaEIsRUFBNEI7RUFDMUIsWUFBSUssU0FBUyxHQUFHTCxVQUFVLENBQUNJLEdBQUQsQ0FBMUI7RUFDQUQsUUFBQUEsRUFBRSxDQUFDRSxT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
