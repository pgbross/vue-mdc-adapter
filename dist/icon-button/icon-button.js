/**
* @module vue-mdc-adaptericon-button 0.19.4-beta
* @exports VueMDCIconButton
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^1.0.0-0","material-components-web":"^1.0.0-0"}
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
    ICON_BUTTON_ON: 'mdc-icon-button--on',
    ROOT: 'mdc-icon-button'
  };
  var strings = {
    ARIA_PRESSED: 'aria-pressed',
    CHANGE_EVENT: 'MDCIconButtonToggle:change'
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

  var MDCIconButtonToggleFoundation =
  /** @class */
  function (_super) {
    __extends(MDCIconButtonToggleFoundation, _super);

    function MDCIconButtonToggleFoundation(adapter) {
      return _super.call(this, _assign({}, MDCIconButtonToggleFoundation.defaultAdapter, adapter)) || this;
    }

    Object.defineProperty(MDCIconButtonToggleFoundation, "cssClasses", {
      get: function get() {
        return cssClasses;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCIconButtonToggleFoundation, "strings", {
      get: function get() {
        return strings;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCIconButtonToggleFoundation, "defaultAdapter", {
      get: function get() {
        return {
          addClass: function addClass() {
            return undefined;
          },
          hasClass: function hasClass() {
            return false;
          },
          notifyChange: function notifyChange() {
            return undefined;
          },
          removeClass: function removeClass() {
            return undefined;
          },
          setAttr: function setAttr() {
            return undefined;
          }
        };
      },
      enumerable: true,
      configurable: true
    });

    MDCIconButtonToggleFoundation.prototype.init = function () {
      this.adapter_.setAttr(strings.ARIA_PRESSED, "" + this.isOn());
    };

    MDCIconButtonToggleFoundation.prototype.handleClick = function () {
      this.toggle();
      this.adapter_.notifyChange({
        isOn: this.isOn()
      });
    };

    MDCIconButtonToggleFoundation.prototype.isOn = function () {
      return this.adapter_.hasClass(cssClasses.ICON_BUTTON_ON);
    };

    MDCIconButtonToggleFoundation.prototype.toggle = function (isOn) {
      if (isOn === void 0) {
        isOn = !this.isOn();
      }

      if (isOn) {
        this.adapter_.addClass(cssClasses.ICON_BUTTON_ON);
      } else {
        this.adapter_.removeClass(cssClasses.ICON_BUTTON_ON);
      }

      this.adapter_.setAttr(strings.ARIA_PRESSED, "" + isOn);
    };

    return MDCIconButtonToggleFoundation;
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
          return Boolean(_this.classes[className]);
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
              attrs: { "aria-pressed": "false" },
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
              attrs: { "aria-pressed": "false" },
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
    

    
    var mdcIconButton = normalizeComponent_1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      undefined,
      undefined
    );

  //
  //
  //
  //
  var script$2 = {
    name: 'mdc-icon-toggle',
    props: {
      isOn: Boolean
    },
    data: function data() {
      return {
        classes: {
          'mdc-icon-button__icon': true,
          'mdc-icon-button__icon--on': this.isOn
        }
      };
    },
    mounted: function mounted() {},
    beforeDestroy: function beforeDestroy() {},
    methods: {},
    computed: {}
  };

  /* script */
  const __vue_script__$2 = script$2;

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { class: _vm.classes }, [_vm._t("default")], 2)
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
    

    
    var mdcIconToggle = normalizeComponent_1(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      undefined,
      undefined
    );

  var plugin = BasePlugin({
    mdcIconButton: mdcIconButton,
    mdcIconToggle: mdcIconToggle
  });

  autoInit(plugin);

  return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1idXR0b24uanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9hdXRvLWluaXQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYmFzZS1wbHVnaW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWVsZW1lbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWV2ZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9pY29uLWJ1dHRvbi9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2ljb24tYnV0dG9uL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS91dGlsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZG9tL3BvbnlmaWxsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29tcG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLWJhc2UuanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvaWNvbi1idXR0b24vbWRjLWljb24tYnV0dG9uLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvaWNvbi1idXR0b24vbWRjLWljb24tdG9nZ2xlLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvaWNvbi1idXR0b24vaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL2ljb24tYnV0dG9uL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHtcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIGNvbnRleHQucHJvcHMuaXMgfHwgY29udGV4dC5wcm9wcy50YWcgfHwgJ2RpdicsXG4gICAgICBjb250ZXh0LmRhdGEsXG4gICAgICBjb250ZXh0LmNoaWxkcmVuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50TWl4aW4gPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21FbGVtZW50XG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImNvbnN0IHNjb3BlID1cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigweDEwMDAwMDAwKSkudG9TdHJpbmcoKSArICctJ1xuXG5leHBvcnQgY29uc3QgVk1BVW5pcXVlSWRNaXhpbiA9IHtcbiAgYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMudm1hX3VpZF8gPSBzY29wZSArIHRoaXMuX3VpZFxuICB9XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIE1EQ0ZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIGlmIChhZGFwdGVyID09PSB2b2lkIDApIHsgYWRhcHRlciA9IHt9OyB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgICAgICAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgICAgICAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRpb24uXG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIHJldHVybiBNRENGb3VuZGF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IE1EQ0ZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBJQ09OX0JVVFRPTl9PTjogJ21kYy1pY29uLWJ1dHRvbi0tb24nLFxuICAgIFJPT1Q6ICdtZGMtaWNvbi1idXR0b24nLFxufTtcbmV4cG9ydCB2YXIgc3RyaW5ncyA9IHtcbiAgICBBUklBX1BSRVNTRUQ6ICdhcmlhLXByZXNzZWQnLFxuICAgIENIQU5HRV9FVkVOVDogJ01EQ0ljb25CdXR0b25Ub2dnbGU6Y2hhbmdlJyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ljb25CdXR0b25Ub2dnbGVGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDSWNvbkJ1dHRvblRvZ2dsZUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5Q2hhbmdlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRBdHRyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKHN0cmluZ3MuQVJJQV9QUkVTU0VELCBcIlwiICsgdGhpcy5pc09uKCkpO1xuICAgIH07XG4gICAgTURDSWNvbkJ1dHRvblRvZ2dsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUNoYW5nZSh7IGlzT246IHRoaXMuaXNPbigpIH0pO1xuICAgIH07XG4gICAgTURDSWNvbkJ1dHRvblRvZ2dsZUZvdW5kYXRpb24ucHJvdG90eXBlLmlzT24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuSUNPTl9CVVRUT05fT04pO1xuICAgIH07XG4gICAgTURDSWNvbkJ1dHRvblRvZ2dsZUZvdW5kYXRpb24ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uIChpc09uKSB7XG4gICAgICAgIGlmIChpc09uID09PSB2b2lkIDApIHsgaXNPbiA9ICF0aGlzLmlzT24oKTsgfVxuICAgICAgICBpZiAoaXNPbikge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLklDT05fQlVUVE9OX09OKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5JQ09OX0JVVFRPTl9PTik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKHN0cmluZ3MuQVJJQV9QUkVTU0VELCBcIlwiICsgaXNPbik7XG4gICAgfTtcbiAgICByZXR1cm4gTURDSWNvbkJ1dHRvblRvZ2dsZUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0ljb25CdXR0b25Ub2dnbGVGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDSWNvbkJ1dHRvblRvZ2dsZUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIHN1cHBvcnRzQ3NzVmFyaWFibGVzIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvXG4gKiBkZXRlY3QgQ1NTIGN1c3RvbSB2YXJpYWJsZSBzdXBwb3J0LlxuICovXG52YXIgc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gYXBwbHlQYXNzaXZlIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdFxuICogcGFzc2l2ZSBldmVudCBsaXN0ZW5lciBzdXBwb3J0LlxuICovXG52YXIgc3VwcG9ydHNQYXNzaXZlXztcbmZ1bmN0aW9uIGRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKSB7XG4gICAgLy8gRGV0ZWN0IHZlcnNpb25zIG9mIEVkZ2Ugd2l0aCBidWdneSB2YXIoKSBzdXBwb3J0XG4gICAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMTQ5NTQ0OC9cbiAgICB2YXIgZG9jdW1lbnQgPSB3aW5kb3dPYmouZG9jdW1lbnQ7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub2RlLmNsYXNzTmFtZSA9ICdtZGMtcmlwcGxlLXN1cmZhY2UtLXRlc3QtZWRnZS12YXItYnVnJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIC8vIFRoZSBidWcgZXhpc3RzIGlmIDo6YmVmb3JlIHN0eWxlIGVuZHMgdXAgcHJvcGFnYXRpbmcgdG8gdGhlIHBhcmVudCBlbGVtZW50LlxuICAgIC8vIEFkZGl0aW9uYWxseSwgZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIG51bGwgaW4gaWZyYW1lcyB3aXRoIGRpc3BsYXk6IFwibm9uZVwiIGluIEZpcmVmb3gsXG4gICAgLy8gYnV0IEZpcmVmb3ggaXMga25vd24gdG8gc3VwcG9ydCBDU1MgY3VzdG9tIHByb3BlcnRpZXMgY29ycmVjdGx5LlxuICAgIC8vIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gICAgdmFyIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3dPYmouZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICB2YXIgaGFzUHNldWRvVmFyQnVnID0gY29tcHV0ZWRTdHlsZSAhPT0gbnVsbCAmJiBjb21wdXRlZFN0eWxlLmJvcmRlclRvcFN0eWxlID09PSAnc29saWQnO1xuICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgcmV0dXJuIGhhc1BzZXVkb1ZhckJ1Zztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3dPYmosIGZvcmNlUmVmcmVzaCkge1xuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxuICAgIHZhciBDU1MgPSB3aW5kb3dPYmouQ1NTO1xuICAgIHZhciBzdXBwb3J0c0Nzc1ZhcnMgPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gICAgaWYgKHR5cGVvZiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPT09ICdib29sZWFuJyAmJiAhZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gICAgfVxuICAgIHZhciBzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCA9IENTUyAmJiB0eXBlb2YgQ1NTLnN1cHBvcnRzID09PSAnZnVuY3Rpb24nO1xuICAgIGlmICghc3VwcG9ydHNGdW5jdGlvblByZXNlbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyA9IENTUy5zdXBwb3J0cygnLS1jc3MtdmFycycsICd5ZXMnKTtcbiAgICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTQ2NjlcbiAgICAvLyBTZWU6IFJFQURNRSBzZWN0aW9uIG9uIFNhZmFyaVxuICAgIHZhciB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMgPSAoQ1NTLnN1cHBvcnRzKCcoLS1jc3MtdmFyczogeWVzKScpICYmXG4gICAgICAgIENTUy5zdXBwb3J0cygnY29sb3InLCAnIzAwMDAwMDAwJykpO1xuICAgIGlmIChleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cykge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcnMgPSAhZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJzID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICghZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9IHN1cHBvcnRzQ3NzVmFycztcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFycztcbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycywgYW5kXG4gKiBpZiBzbywgdXNlIHRoZW0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBhc3NpdmUoZ2xvYmFsT2JqLCBmb3JjZVJlZnJlc2gpIHtcbiAgICBpZiAoZ2xvYmFsT2JqID09PSB2b2lkIDApIHsgZ2xvYmFsT2JqID0gd2luZG93OyB9XG4gICAgaWYgKGZvcmNlUmVmcmVzaCA9PT0gdm9pZCAwKSB7IGZvcmNlUmVmcmVzaCA9IGZhbHNlOyB9XG4gICAgaWYgKHN1cHBvcnRzUGFzc2l2ZV8gPT09IHVuZGVmaW5lZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgdmFyIGlzU3VwcG9ydGVkXzEgPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LCB7XG4gICAgICAgICAgICAgICAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU3VwcG9ydGVkXzEgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNTdXBwb3J0ZWRfMTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWVtcHR5IGNhbm5vdCB0aHJvdyBlcnJvciBkdWUgdG8gdGVzdHMuIHRzbGludCBhbHNvIGRpc2FibGVzIGNvbnNvbGUubG9nLlxuICAgICAgICBzdXBwb3J0c1Bhc3NpdmVfID0gaXNTdXBwb3J0ZWRfMTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZV8gPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhldnQsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgICBpZiAoIWV2dCkge1xuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIHZhciB4ID0gcGFnZU9mZnNldC54LCB5ID0gcGFnZU9mZnNldC55O1xuICAgIHZhciBkb2N1bWVudFggPSB4ICsgY2xpZW50UmVjdC5sZWZ0O1xuICAgIHZhciBkb2N1bWVudFkgPSB5ICsgY2xpZW50UmVjdC50b3A7XG4gICAgdmFyIG5vcm1hbGl6ZWRYO1xuICAgIHZhciBub3JtYWxpemVkWTtcbiAgICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gICAgaWYgKGV2dC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgdmFyIHRvdWNoRXZlbnQgPSBldnQ7XG4gICAgICAgIG5vcm1hbGl6ZWRYID0gdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICAgICAgbm9ybWFsaXplZFkgPSB0b3VjaEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gZG9jdW1lbnRZO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIG1vdXNlRXZlbnQgPSBldnQ7XG4gICAgICAgIG5vcm1hbGl6ZWRYID0gbW91c2VFdmVudC5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICAgICAgbm9ybWFsaXplZFkgPSBtb3VzZUV2ZW50LnBhZ2VZIC0gZG9jdW1lbnRZO1xuICAgIH1cbiAgICByZXR1cm4geyB4OiBub3JtYWxpemVkWCwgeTogbm9ybWFsaXplZFkgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG52YXIgTURDQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1EQ0NvbXBvbmVudChyb290LCBmb3VuZGF0aW9uKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vdF8gPSByb290O1xuICAgICAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgdHNsaWJfMS5fX3NwcmVhZChhcmdzKSk7XG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBpbml0aWFsaXplIGZvdW5kYXRpb24gaGVyZSBhbmQgbm90IHdpdGhpbiB0aGUgY29uc3RydWN0b3IncyBkZWZhdWx0IHBhcmFtIHNvIHRoYXRcbiAgICAgICAgLy8gdGhpcy5yb290XyBpcyBkZWZpbmVkIGFuZCBjYW4gYmUgdXNlZCB3aXRoaW4gdGhlIGZvdW5kYXRpb24gY2xhc3MuXG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8gPSBmb3VuZGF0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmdldERlZmF1bHRGb3VuZGF0aW9uKCkgOiBmb3VuZGF0aW9uO1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmluaXQoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsU3luY1dpdGhET00oKTtcbiAgICB9XG4gICAgTURDQ29tcG9uZW50LmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyB3aGljaCBleHRlbmQgTURDQmFzZSBzaG91bGQgcHJvdmlkZSBhbiBhdHRhY2hUbygpIG1ldGhvZCB0aGF0IHRha2VzIGEgcm9vdCBlbGVtZW50IGFuZFxuICAgICAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAgICAgLy8gc3ViY2xhc3NlcywgYW4gZXhwbGljaXQgZm91bmRhdGlvbiBjbGFzcyB3aWxsIG5vdCBoYXZlIHRvIGJlIHBhc3NlZCBpbjsgaXQgd2lsbCBzaW1wbHkgYmUgaW5pdGlhbGl6ZWRcbiAgICAgICAgLy8gZnJvbSBnZXREZWZhdWx0Rm91bmRhdGlvbigpLlxuICAgICAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbih7fSkpO1xuICAgIH07XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IG1ldGhvZCBwYXJhbSBvbmx5IGV4aXN0cyBmb3IgdHlwaW5nIHB1cnBvc2VzOyBpdCBkb2VzIG5vdCBuZWVkIHRvIGJlIHVuaXQgdGVzdGVkICovXG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2FyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIF9hcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3ViY2xhc3NlcyBjYW4gb3ZlcnJpZGUgdGhpcyB0byBkbyBhbnkgYWRkaXRpb25hbCBzZXR1cCB3b3JrIHRoYXQgd291bGQgYmUgY29uc2lkZXJlZCBwYXJ0IG9mIGFcbiAgICAgICAgLy8gXCJjb25zdHJ1Y3RvclwiLiBFc3NlbnRpYWxseSwgaXQgaXMgYSBob29rIGludG8gdGhlIHBhcmVudCBjb25zdHJ1Y3RvciBiZWZvcmUgdGhlIGZvdW5kYXRpb24gaXNcbiAgICAgICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkIGZvdW5kYXRpb24gY2xhc3MgZm9yIHRoZVxuICAgICAgICAvLyBjb21wb25lbnQuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAgICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgICAgIC8vIG9iamVjdC4gQW4gZXhhbXBsZSBvZiB0aGlzIHdvdWxkIGJlIGEgZm9ybSBjb250cm9sIHdyYXBwZXIgdGhhdCBuZWVkcyB0byBzeW5jaHJvbml6ZSBpdHMgaW50ZXJuYWwgc3RhdGVcbiAgICAgICAgLy8gdG8gc29tZSBwcm9wZXJ0eSBvciBhdHRyaWJ1dGUgb2YgdGhlIGhvc3QgRE9NLiBQbGVhc2Ugbm90ZTogdGhpcyBpcyAqbm90KiB0aGUgcGxhY2UgdG8gcGVyZm9ybSBET01cbiAgICAgICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgICAgICAvLyBhdHRhY2hlZC4gQW4gZXhhbXBsZSBvZiB0aGlzIG1pZ2h0IGJlIGRlcmVnaXN0ZXJpbmcgYSByZXNpemUgZXZlbnQgZnJvbSB0aGUgd2luZG93IG9iamVjdC5cbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5kZXN0cm95KCk7XG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUudW5saXN0ZW4gPSBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGaXJlcyBhIGNyb3NzLWJyb3dzZXItY29tcGF0aWJsZSBjdXN0b20gZXZlbnQgZnJvbSB0aGUgY29tcG9uZW50IHJvb3Qgb2YgdGhlIGdpdmVuIHR5cGUsIHdpdGggdGhlIGdpdmVuIGRhdGEuXG4gICAgICovXG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSkge1xuICAgICAgICBpZiAoc2hvdWxkQnViYmxlID09PSB2b2lkIDApIHsgc2hvdWxkQnViYmxlID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIGV2dDtcbiAgICAgICAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgICAgICAgICAgICBidWJibGVzOiBzaG91bGRCdWJibGUsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb290Xy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDQ29tcG9uZW50O1xufSgpKTtcbmV4cG9ydCB7IE1EQ0NvbXBvbmVudCB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0NvbXBvbmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlldyBBIFwicG9ueWZpbGxcIiBpcyBhIHBvbHlmaWxsIHRoYXQgZG9lc24ndCBtb2RpZnkgdGhlIGdsb2JhbCBwcm90b3R5cGUgY2hhaW4uXG4gKiBUaGlzIG1ha2VzIHBvbnlmaWxscyBzYWZlciB0aGFuIHRyYWRpdGlvbmFsIHBvbHlmaWxscywgZXNwZWNpYWxseSBmb3IgbGlicmFyaWVzIGxpa2UgTURDLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGlmIChlbGVtZW50LmNsb3Nlc3QpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgfVxuICAgIHZhciBlbCA9IGVsZW1lbnQ7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB2YXIgbmF0aXZlTWF0Y2hlcyA9IGVsZW1lbnQubWF0Y2hlc1xuICAgICAgICB8fCBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvclxuICAgICAgICB8fCBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuICAgIHJldHVybiBuYXRpdmVNYXRjaGVzLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9ueWZpbGwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyBwb255ZmlsbCBmcm9tICcuL3BvbnlmaWxsJztcbmV4cG9ydCB7IHBvbnlmaWxsIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICAvLyBSaXBwbGUgaXMgYSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIFwicm9vdFwiIGNvbXBvbmVudCBpcyByZWFsbHkgYSBcIm1peGluXCIgb2Ygc29ydHMsXG4gICAgLy8gZ2l2ZW4gdGhhdCBpdCdzIGFuICd1cGdyYWRlJyB0byBhbiBleGlzdGluZyBjb21wb25lbnQuIFRoYXQgYmVpbmcgc2FpZCBpdCBpcyB0aGUgcm9vdFxuICAgIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgICBGR19BQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uJyxcbiAgICBGR19ERUFDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbicsXG4gICAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICAgIFVOQk9VTkRFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZCcsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIFZBUl9GR19TQ0FMRTogJy0tbWRjLXJpcHBsZS1mZy1zY2FsZScsXG4gICAgVkFSX0ZHX1NJWkU6ICctLW1kYy1yaXBwbGUtZmctc2l6ZScsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9FTkQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCcsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQnLFxuICAgIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICAgIFZBUl9UT1A6ICctLW1kYy1yaXBwbGUtdG9wJyxcbn07XG5leHBvcnQgdmFyIG51bWJlcnMgPSB7XG4gICAgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM6IDIyNSxcbiAgICBGR19ERUFDVElWQVRJT05fTVM6IDE1MCxcbiAgICBJTklUSUFMX09SSUdJTl9TQ0FMRTogMC42LFxuICAgIFBBRERJTkc6IDEwLFxuICAgIFRBUF9ERUxBWV9NUzogMzAwLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzIH0gZnJvbSAnLi91dGlsJztcbi8vIEFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gdGhlIHJvb3QgZWxlbWVudCBvZiBlYWNoIGluc3RhbmNlIGZvciBhY3RpdmF0aW9uXG52YXIgQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFtcbiAgICAndG91Y2hzdGFydCcsICdwb2ludGVyZG93bicsICdtb3VzZWRvd24nLCAna2V5ZG93bicsXG5dO1xuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG52YXIgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbXG4gICAgJ3RvdWNoZW5kJywgJ3BvaW50ZXJ1cCcsICdtb3VzZXVwJywgJ2NvbnRleHRtZW51Jyxcbl07XG4vLyBzaW11bHRhbmVvdXMgbmVzdGVkIGFjdGl2YXRpb25zXG52YXIgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xudmFyIE1EQ1JpcHBsZUZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDUmlwcGxlRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENSaXBwbGVGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDUmlwcGxlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmZnU2NhbGVfID0gJzAnO1xuICAgICAgICBfdGhpcy5mcmFtZV8gPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgICAgICAgX3RoaXMuaW5pdGlhbFNpemVfID0gMDtcbiAgICAgICAgX3RoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgX3RoaXMubWF4UmFkaXVzXyA9IDA7XG4gICAgICAgIF90aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7IGxlZnQ6IDAsIHRvcDogMCB9O1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gX3RoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IHRydWU7XG4gICAgICAgICAgICBfdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5hY3RpdmF0ZV8oZSk7IH07XG4gICAgICAgIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmRlYWN0aXZhdGVfKCk7IH07XG4gICAgICAgIF90aGlzLmZvY3VzSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVGb2N1cygpOyB9O1xuICAgICAgICBfdGhpcy5ibHVySGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVCbHVyKCk7IH07XG4gICAgICAgIF90aGlzLnJlc2l6ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubGF5b3V0KCk7IH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHg6IDAsIHk6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGlzVW5ib3VuZGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdXBwb3J0c1ByZXNzUmlwcGxlID0gdGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKTtcbiAgICAgICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVF8xID0gX2EuUk9PVCwgVU5CT1VOREVEXzEgPSBfYS5VTkJPVU5ERUQ7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFJPT1RfMSk7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEXzEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlcyBuZWVkIGxheW91dCBsb2dpYyBhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIHNldCBjb29yZGluYXRlcyBmb3IgYm90aCBzaGFkZSBhbmQgcmlwcGxlXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmF0aW9uVGltZXJfKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgICAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIFJPT1RfMiA9IF9hLlJPT1QsIFVOQk9VTkRFRF8yID0gX2EuVU5CT1VOREVEO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhST09UXzIpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRF8yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBldnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZV8oZXZ0KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZV8oKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldFVuYm91bmRlZCA9IGZ1bmN0aW9uICh1bmJvdW5kZWQpIHtcbiAgICAgICAgdmFyIFVOQk9VTkRFRCA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5VTkJPVU5ERUQ7XG4gICAgICAgIGlmICh1bmJvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdlIGNvbXB1dGUgdGhpcyBwcm9wZXJ0eSBzbyB0aGF0IHdlIGFyZSBub3QgcXVlcnlpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNsaWVudFxuICAgICAqIHVudGlsIHRoZSBwb2ludCBpbiB0aW1lIHdoZXJlIHRoZSBmb3VuZGF0aW9uIHJlcXVlc3RzIGl0LiBUaGlzIHByZXZlbnRzIHNjZW5hcmlvcyB3aGVyZVxuICAgICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgICAqIGFuZCB0aGVuIGluaXRpYWxpemVkIGF0IG1vdW50IHRpbWUgb24gdGhlIGNsaWVudC5cbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zdXBwb3J0c1ByZXNzUmlwcGxlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3RpdmF0aW9uRXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiBmYWxzZSxcbiAgICAgICAgICAgIGlzQWN0aXZhdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzUHJvZ3JhbW1hdGljOiBmYWxzZSxcbiAgICAgICAgICAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogZmFsc2UsXG4gICAgICAgICAgICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBzdXBwb3J0c1ByZXNzUmlwcGxlIFBhc3NlZCBmcm9tIGluaXQgdG8gc2F2ZSBhIHJlZHVuZGFudCBmdW5jdGlvbiBjYWxsXG4gICAgICovXG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVnaXN0ZXJSb290SGFuZGxlcnNfID0gZnVuY3Rpb24gKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlbW92ZUNzc1ZhcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmlwcGxlU3RyaW5ncyA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhyaXBwbGVTdHJpbmdzKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignVkFSXycpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUocmlwcGxlU3RyaW5nc1trZXldLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZV8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZURpc2FibGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgICAgICB2YXIgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgPSB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgICAgICAgdmFyIGlzU2FtZUludGVyYWN0aW9uID0gcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgJiYgZXZ0ICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZXZ0LnR5cGU7XG4gICAgICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA9IGV2dCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuYWN0aXZhdGlvbkV2ZW50ID0gZXZ0O1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzQWN0aXZhdGVkQnlQb2ludGVyID0gYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID8gZmFsc2UgOiBldnQgIT09IHVuZGVmaW5lZCAmJiAoZXZ0LnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGV2dC50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZXZ0LnR5cGUgPT09ICdwb2ludGVyZG93bicpO1xuICAgICAgICB2YXIgaGFzQWN0aXZhdGVkQ2hpbGQgPSBldnQgIT09IHVuZGVmaW5lZCAmJiBhY3RpdmF0ZWRUYXJnZXRzLmxlbmd0aCA+IDAgJiYgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIF90aGlzLmFkYXB0ZXJfLmNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KTsgfSk7XG4gICAgICAgIGlmIChoYXNBY3RpdmF0ZWRDaGlsZCkge1xuICAgICAgICAgICAgLy8gSW1tZWRpYXRlbHkgcmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSwgd2hpbGUgcHJlc2VydmluZyBsb2dpYyB0aGF0IHByZXZlbnRzIHRvdWNoIGZvbGxvdy1vbiBldmVudHNcbiAgICAgICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhY3RpdmF0ZWRUYXJnZXRzLnB1c2goZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGV2dCk7XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhldnQpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuICAgICAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmVcbiAgICAgICAgICAgICAgICAmJiBldnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICYmIChldnQua2V5ID09PSAnICcgfHwgZXZ0LmtleUNvZGUgPT09IDMyKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHNwYWNlIHdhcyBwcmVzc2VkLCB0cnkgYWdhaW4gd2l0aGluIGFuIHJBRiBjYWxsIHRvIGRldGVjdCA6YWN0aXZlLCBiZWNhdXNlIGRpZmZlcmVudCBVQXMgcmVwb3J0XG4gICAgICAgICAgICAgICAgLy8gYWN0aXZlIHN0YXRlcyBpbmNvbnNpc3RlbnRseSB3aGVuIHRoZXkncmUgY2FsbGVkIHdpdGhpbiBldmVudCBoYW5kbGluZyBjb2RlOlxuICAgICAgICAgICAgICAgIC8vIC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjM1OTcxXG4gICAgICAgICAgICAgICAgLy8gLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjkzNzQxXG4gICAgICAgICAgICAgICAgLy8gV2UgdHJ5IGZpcnN0IG91dHNpZGUgckFGIHRvIHN1cHBvcnQgRWRnZSwgd2hpY2ggZG9lcyBub3QgZXhoaWJpdCB0aGlzIHByb2JsZW0sIGJ1dCB3aWxsIGNyYXNoIGlmIGEgQ1NTXG4gICAgICAgICAgICAgICAgLy8gdmFyaWFibGUgaXMgc2V0IHdpdGhpbiBhIHJBRiBjYWxsYmFjayBmb3IgYSBzdWJtaXQgYnV0dG9uIGludGVyYWN0aW9uICgjMjI0MSkuXG4gICAgICAgICAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gX3RoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZXZ0KTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSBpbW1lZGlhdGVseSBpZiBlbGVtZW50IHdhcyBub3QgbWFkZSBhY3RpdmUuXG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvblN0YXRlXyA9IF90aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHJldHVybiAoZXZ0ICE9PSB1bmRlZmluZWQgJiYgZXZ0LnR5cGUgPT09ICdrZXlkb3duJykgPyB0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZUFjdGl2ZSgpIDogdHJ1ZTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFuaW1hdGVBY3RpdmF0aW9uXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzLCBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUID0gX2EuVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkQgPSBfYS5WQVJfRkdfVFJBTlNMQVRFX0VORDtcbiAgICAgICAgdmFyIF9iID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBGR19ERUFDVElWQVRJT04gPSBfYi5GR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT04gPSBfYi5GR19BQ1RJVkFUSU9OO1xuICAgICAgICB2YXIgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMgPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM7XG4gICAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgIHZhciB0cmFuc2xhdGVTdGFydCA9ICcnO1xuICAgICAgICB2YXIgdHJhbnNsYXRlRW5kID0gJyc7XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB2YXIgX2MgPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKSwgc3RhcnRQb2ludCA9IF9jLnN0YXJ0UG9pbnQsIGVuZFBvaW50ID0gX2MuZW5kUG9pbnQ7XG4gICAgICAgICAgICB0cmFuc2xhdGVTdGFydCA9IHN0YXJ0UG9pbnQueCArIFwicHgsIFwiICsgc3RhcnRQb2ludC55ICsgXCJweFwiO1xuICAgICAgICAgICAgdHJhbnNsYXRlRW5kID0gZW5kUG9pbnQueCArIFwicHgsIFwiICsgZW5kUG9pbnQueSArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIHRyYW5zbGF0ZVN0YXJ0KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX0VORCwgdHJhbnNsYXRlRW5kKTtcbiAgICAgICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfKCk7IH0sIERFQUNUSVZBVElPTl9USU1FT1VUX01TKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXywgYWN0aXZhdGlvbkV2ZW50ID0gX2EuYWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBfYS53YXNBY3RpdmF0ZWRCeVBvaW50ZXI7XG4gICAgICAgIHZhciBzdGFydFBvaW50O1xuICAgICAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyKSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGFjdGl2YXRpb25FdmVudCwgdGhpcy5hZGFwdGVyXy5nZXRXaW5kb3dQYWdlT2Zmc2V0KCksIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5mcmFtZV8ud2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuZnJhbWVfLmhlaWdodCAvIDIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICAgICAgeDogc3RhcnRQb2ludC54IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgICAgICB5OiBzdGFydFBvaW50LnkgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGVuZFBvaW50ID0ge1xuICAgICAgICAgICAgeDogKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgICAgIHk6ICh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBzdGFydFBvaW50OiBzdGFydFBvaW50LCBlbmRQb2ludDogZW5kUG9pbnQgfTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJvdGggd2hlbiBhIHBvaW50aW5nIGRldmljZSBpcyByZWxlYXNlZCwgYW5kIHdoZW4gdGhlIGFjdGl2YXRpb24gYW5pbWF0aW9uIGVuZHMuXG4gICAgICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgICAgICB2YXIgRkdfREVBQ1RJVkFUSU9OID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTjtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLCBoYXNEZWFjdGl2YXRpb25VWFJ1biA9IF9hLmhhc0RlYWN0aXZhdGlvblVYUnVuLCBpc0FjdGl2YXRlZCA9IF9hLmlzQWN0aXZhdGVkO1xuICAgICAgICB2YXIgYWN0aXZhdGlvbkhhc0VuZGVkID0gaGFzRGVhY3RpdmF0aW9uVVhSdW4gfHwgIWlzQWN0aXZhdGVkO1xuICAgICAgICBpZiAoYWN0aXZhdGlvbkhhc0VuZGVkICYmIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXykge1xuICAgICAgICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH0sIG51bWJlcnMuRkdfREVBQ1RJVkFUSU9OX01TKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgRkdfQUNUSVZBVElPTiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZXNldEFjdGl2YXRpb25TdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmFjdGl2YXRpb25FdmVudDtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgICAgICAvLyBTdG9yZSB0aGUgcHJldmlvdXMgZXZlbnQgdW50aWwgaXQncyBzYWZlIHRvIGFzc3VtZSB0aGF0IHN1YnNlcXVlbnQgZXZlbnRzIGFyZSBmb3IgbmV3IGludGVyYWN0aW9ucy5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQ7IH0sIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBzY2VuYXJpb3Mgc3VjaCBhcyB3aGVuIHlvdSBoYXZlIGEga2V5dXAgZXZlbnQgdGhhdCBibHVycyB0aGUgZWxlbWVudC5cbiAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhdGUgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCBhY3RpdmF0aW9uU3RhdGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpOyB9KTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvblN0YXRlXy5oYXNEZWFjdGl2YXRpb25VWFJ1biA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFuaW1hdGVEZWFjdGl2YXRpb25fID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciB3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBfYS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlID0gX2Eud2FzRWxlbWVudE1hZGVBY3RpdmU7XG4gICAgICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dEludGVybmFsXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5mcmFtZV8gPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICAgICAgdmFyIG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuICAgICAgICAvLyBTdXJmYWNlIGRpYW1ldGVyIGlzIHRyZWF0ZWQgZGlmZmVyZW50bHkgZm9yIHVuYm91bmRlZCB2cy4gYm91bmRlZCByaXBwbGVzLlxuICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgICAgIC8vIHRvIGV4dGVuZCB0aGUgaGl0Ym94LCBhbmQgdGhlIHJpcHBsZSBpcyBleHBlY3RlZCB0byBtZWV0IHRoZSBlZGdlcyBvZiB0aGUgcGFkZGVkIGhpdGJveCAod2hpY2ggaXMgdHlwaWNhbGx5XG4gICAgICAgIC8vIHNxdWFyZSkuIEJvdW5kZWQgcmlwcGxlcywgb24gdGhlIG90aGVyIGhhbmQsIGFyZSBmdWxseSBleHBlY3RlZCB0byBleHBhbmQgYmV5b25kIHRoZSBzdXJmYWNlJ3MgbG9uZ2VzdCBkaWFtZXRlclxuICAgICAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgICAgIC8vIGBvdmVyZmxvdzogaGlkZGVuYC5cbiAgICAgICAgdmFyIGdldEJvdW5kZWRSYWRpdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdyhfdGhpcy5mcmFtZV8ud2lkdGgsIDIpICsgTWF0aC5wb3coX3RoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpID8gbWF4RGltIDogZ2V0Qm91bmRlZFJhZGl1cygpO1xuICAgICAgICAvLyBSaXBwbGUgaXMgc2l6ZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgbGFyZ2VzdCBkaW1lbnNpb24gb2YgdGhlIHN1cmZhY2UsIHRoZW4gc2NhbGVzIHVwIHVzaW5nIGEgQ1NTIHNjYWxlIHRyYW5zZm9ybVxuICAgICAgICB0aGlzLmluaXRpYWxTaXplXyA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICAgICAgdGhpcy5mZ1NjYWxlXyA9IFwiXCIgKyB0aGlzLm1heFJhZGl1c18gLyB0aGlzLmluaXRpYWxTaXplXztcbiAgICAgICAgdGhpcy51cGRhdGVMYXlvdXRDc3NWYXJzXygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUudXBkYXRlTGF5b3V0Q3NzVmFyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncywgVkFSX0ZHX1NJWkUgPSBfYS5WQVJfRkdfU0laRSwgVkFSX0xFRlQgPSBfYS5WQVJfTEVGVCwgVkFSX1RPUCA9IF9hLlZBUl9UT1AsIFZBUl9GR19TQ0FMRSA9IF9hLlZBUl9GR19TQ0FMRTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0laRSwgdGhpcy5pbml0aWFsU2l6ZV8gKyBcInB4XCIpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TQ0FMRSwgdGhpcy5mZ1NjYWxlXyk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICAgICAgICAgIHRvcDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgdGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnQgKyBcInB4XCIpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfVE9QLCB0aGlzLnVuYm91bmRlZENvb3Jkc18udG9wICsgXCJweFwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ1JpcHBsZUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgcG9ueWZpbGwgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL2luZGV4JztcbmltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xudmFyIE1EQ1JpcHBsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENSaXBwbGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDUmlwcGxlKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBNRENSaXBwbGUuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCwgb3B0cykge1xuICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7IGlzVW5ib3VuZGVkOiB1bmRlZmluZWQgfTsgfVxuICAgICAgICB2YXIgcmlwcGxlID0gbmV3IE1EQ1JpcHBsZShyb290KTtcbiAgICAgICAgLy8gT25seSBvdmVycmlkZSB1bmJvdW5kZWQgYmVoYXZpb3IgaWYgb3B0aW9uIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgICAgIGlmIChvcHRzLmlzVW5ib3VuZGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSBvcHRzLmlzVW5ib3VuZGVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByaXBwbGU7XG4gICAgfTtcbiAgICBNRENSaXBwbGUuY3JlYXRlQWRhcHRlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KTsgfSxcbiAgICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyB9LFxuICAgICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uY29udGFpbnModGFyZ2V0KTsgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2Uucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH0pOyB9LFxuICAgICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBwb255ZmlsbC5tYXRjaGVzKGluc3RhbmNlLnJvb3RfLCAnOmFjdGl2ZScpOyB9LFxuICAgICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEJvb2xlYW4oaW5zdGFuY2UuZGlzYWJsZWQpOyB9LFxuICAgICAgICAgICAgaXNVbmJvdW5kZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEJvb2xlYW4oaW5zdGFuY2UudW5ib3VuZGVkKTsgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogZnVuY3Rpb24gKHZhck5hbWUsIHZhbHVlKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSk7IH0sXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlLnByb3RvdHlwZSwgXCJ1bmJvdW5kZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMudW5ib3VuZGVkXyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHVuYm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy51bmJvdW5kZWRfID0gQm9vbGVhbih1bmJvdW5kZWQpO1xuICAgICAgICAgICAgdGhpcy5zZXRVbmJvdW5kZWRfKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uYWN0aXZhdGUoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5kZWFjdGl2YXRlKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5sYXlvdXQoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDUmlwcGxlRm91bmRhdGlvbihNRENSaXBwbGUuY3JlYXRlQWRhcHRlcih0aGlzKSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJvb3QgPSB0aGlzLnJvb3RfO1xuICAgICAgICB0aGlzLnVuYm91bmRlZCA9ICdtZGNSaXBwbGVJc1VuYm91bmRlZCcgaW4gcm9vdC5kYXRhc2V0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xvc3VyZSBDb21waWxlciB0aHJvd3MgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3Igd2hlbiBkaXJlY3RseSBhY2Nlc3NpbmcgYVxuICAgICAqIHByb3RlY3RlZCBvciBwcml2YXRlIHByb3BlcnR5IGluc2lkZSBhIGdldHRlci9zZXR0ZXIsIGxpa2UgdW5ib3VuZGVkIGFib3ZlLlxuICAgICAqIEJ5IGFjY2Vzc2luZyB0aGUgcHJvdGVjdGVkIHByb3BlcnR5IGluc2lkZSBhIG1ldGhvZCwgd2Ugc29sdmUgdGhhdCBwcm9ibGVtLlxuICAgICAqIFRoYXQncyB3aHkgdGhpcyBmdW5jdGlvbiBleGlzdHMuXG4gICAgICovXG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5zZXRVbmJvdW5kZWRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFVuYm91bmRlZChCb29sZWFuKHRoaXMudW5ib3VuZGVkXykpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1JpcHBsZTtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENSaXBwbGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcbmV4cG9ydCB7IHV0aWwgfTtcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZm91bmRhdGlvbic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9pbmRleCdcbmltcG9ydCB7IHN1cHBvcnRzQ3NzVmFyaWFibGVzLCBhcHBseVBhc3NpdmUgfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL3V0aWwnXG5pbXBvcnQgeyBtYXRjaGVzIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9wb255ZmlsbCdcblxuZXhwb3J0IGNsYXNzIFJpcHBsZUJhc2UgZXh0ZW5kcyBNRENSaXBwbGVGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBNQVRDSEVTKCkge1xuICAgIC8qIGdsb2JhbCBIVE1MRWxlbWVudCAqL1xuICAgIHJldHVybiAoXG4gICAgICBSaXBwbGVCYXNlLl9tYXRjaGVzIHx8XG4gICAgICAoUmlwcGxlQmFzZS5fbWF0Y2hlcyA9IG1hdGNoZXMoSFRNTEVsZW1lbnQucHJvdG90eXBlKSlcbiAgICApXG4gIH1cblxuICBzdGF0aWMgaXNTdXJmYWNlQWN0aXZlKHJlZikge1xuICAgIHJldHVybiByZWZbUmlwcGxlQmFzZS5NQVRDSEVTXSgnOmFjdGl2ZScpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcih2bSwgb3B0aW9ucykge1xuICAgIHN1cGVyKFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1VuYm91bmRlZDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWxbUmlwcGxlQmFzZS5NQVRDSEVTXSgnOmFjdGl2ZScpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2bS4kZGVsZXRlKHZtLmNsYXNzZXMsIGNsYXNzTmFtZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IHRhcmdldCA9PiB2bS4kZWwuY29udGFpbnModGFyZ2V0KSxcbiAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHZtLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKHZhck5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2bS4kc2V0KHZtLnN0eWxlcywgdmFyTmFtZSwgdmFsdWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyB4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBSaXBwbGVNaXhpbiA9IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMucmlwcGxlID0gbmV3IFJpcHBsZUJhc2UodGhpcylcbiAgICB0aGlzLnJpcHBsZS5pbml0KClcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnJpcHBsZS5kZXN0cm95KClcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICA8Y3VzdG9tLWVsZW1lbnQgXG4gICAgOnRhZz1cInRhZ1wiIFxuICAgIDpjbGFzc2VzPVwiY2xhc3Nlc1wiXG4gICAgOnN0eWxlcz1cInN0eWxlc1wiIFxuICAgIGNsYXNzPVwibWRjLXJpcHBsZVwiPlxuICAgIDxzbG90IC8+XG4gIDwvY3VzdG9tLWVsZW1lbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudE1peGluIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IFJpcHBsZU1peGluIH0gZnJvbSAnLi9tZGMtcmlwcGxlLWJhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1yaXBwbGUnLFxuICBtaXhpbnM6IFtDdXN0b21FbGVtZW50TWl4aW4sIFJpcHBsZU1peGluXSxcbiAgcHJvcHM6IHtcbiAgICB0YWc6IFN0cmluZ1xuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGFcbiAgICA6Y2xhc3M9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGU9XCJzdHlsZXNcIlxuICAgIGNsYXNzPVwibWRjLWljb24tYnV0dG9uIG1hdGVyaWFsLWljb25zXCJcbiAgICBAY2xpY2s9XCJvbkNsaWNrXCJcbiAgICB2LWlmPVwiaXNMaW5rXCJcbiAgICB2LWJpbmQ9XCIkYXR0cnNcIlxuICAgIGFyaWEtcHJlc3NlZD1cImZhbHNlXCJcbiAgPlxuICAgIDxzbG90IC8+XG4gIDwvYT5cbiAgPGJ1dHRvblxuICAgIDpjbGFzcz1cImNsYXNzZXNcIlxuICAgIDpzdHlsZT1cInN0eWxlc1wiXG4gICAgY2xhc3M9XCJtZGMtaWNvbi1idXR0b24gbWF0ZXJpYWwtaWNvbnNcIlxuICAgIEBjbGljaz1cIm9uQ2xpY2tcIlxuICAgIHYtYmluZD1cIiRhdHRyc1wiXG4gICAgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIlxuICAgIHYtZWxzZVxuICA+XG4gICAgPHNsb3QgLz5cbiAgPC9idXR0b24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1EQ0ljb25CdXR0b25Ub2dnbGVGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9pY29uLWJ1dHRvbi9mb3VuZGF0aW9uJ1xuaW1wb3J0IHsgUmlwcGxlQmFzZSB9IGZyb20gJy4uL3JpcHBsZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWljb24tYnV0dG9uJyxcbiAgbW9kZWw6IHtcbiAgICBwcm9wOiAnaXNPbicsXG4gICAgZXZlbnQ6ICdjaGFuZ2UnXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgaXNPbjogQm9vbGVhblxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBpc09uOiAnb25Pbl8nXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ0ljb25CdXR0b25Ub2dnbGVGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKSxcbiAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZGVsZXRlKHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lKSxcbiAgICAgIGhhc0NsYXNzOiBjbGFzc05hbWUgPT4gQm9vbGVhbih0aGlzLmNsYXNzZXNbY2xhc3NOYW1lXSksXG4gICAgICBzZXRBdHRyOiAoYXR0ck5hbWUsIGF0dHJWYWx1ZSkgPT5cbiAgICAgICAgdGhpcy4kZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyVmFsdWUpLFxuICAgICAgbm90aWZ5Q2hhbmdlOiBldnREYXRhID0+IHtcbiAgICAgICAgdGhpcy4kZW1pdChNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbi5zdHJpbmdzLkNIQU5HRV9FVkVOVCwgZXZ0RGF0YSlcblxuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBldnREYXRhLmlzT24pXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG5cbiAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMsIHtcbiAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiB0cnVlXG4gICAgfSlcbiAgICB0aGlzLnJpcHBsZS5pbml0KClcblxuICAgIHRoaXMuZm91bmRhdGlvbi50b2dnbGUodGhpcy5pc09uKVxuICB9LFxuXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5yaXBwbGUuZGVzdHJveSgpXG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25Pbl8oaXNPbikge1xuICAgICAgaWYgKHRoaXMuaXNPbiAhPT0gaXNPbikge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24udG9nZ2xlKGlzT24pXG4gICAgICB9XG4gICAgfSxcblxuICAgIG9uQ2xpY2soZXZ0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlQ2xpY2soZXZ0KVxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGlzTGluaygpIHtcbiAgICAgIHJldHVybiB0aGlzLiRlbCAmJiBCb29sZWFuKHRoaXMuJGVsLmdldEF0dHJpYnV0ZSgnaHJlZicpKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgOmNsYXNzPVwiY2xhc3Nlc1wiPjxzbG90IC8+PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWljb24tdG9nZ2xlJyxcbiAgcHJvcHM6IHtcbiAgICBpc09uOiBCb29sZWFuXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgJ21kYy1pY29uLWJ1dHRvbl9faWNvbic6IHRydWUsXG4gICAgICAgICdtZGMtaWNvbi1idXR0b25fX2ljb24tLW9uJzogdGhpcy5pc09uXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge30sXG5cbiAgYmVmb3JlRGVzdHJveSgpIHt9LFxuICBtZXRob2RzOiB7fSxcblxuICBjb21wdXRlZDoge31cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgbWRjSWNvbkJ1dHRvbiBmcm9tICcuL21kYy1pY29uLWJ1dHRvbi52dWUnXG5pbXBvcnQgbWRjSWNvblRvZ2dsZSBmcm9tICcuL21kYy1pY29uLXRvZ2dsZS52dWUnXG5cbmV4cG9ydCB7IG1kY0ljb25CdXR0b24sIG1kY0ljb25Ub2dnbGUgfVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlUGx1Z2luKHtcbiAgbWRjSWNvbkJ1dHRvbixcbiAgbWRjSWNvblRvZ2dsZVxufSlcbiIsImltcG9ydCAnLi9zdHlsZXMuc2NzcydcbmltcG9ydCB7IGF1dG9Jbml0IH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBwbHVnaW4gZnJvbSAnLi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG5hdXRvSW5pdChwbHVnaW4pXG4iXSwibmFtZXMiOlsiYXV0b0luaXQiLCJwbHVnaW4iLCJfVnVlIiwid2luZG93IiwiVnVlIiwiZ2xvYmFsIiwidXNlIiwiQmFzZVBsdWdpbiIsImNvbXBvbmVudHMiLCJ2ZXJzaW9uIiwiaW5zdGFsbCIsInZtIiwia2V5IiwiY29tcG9uZW50IiwibmFtZSIsIkN1c3RvbUVsZW1lbnQiLCJmdW5jdGlvbmFsIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJwcm9wcyIsImlzIiwidGFnIiwiZGF0YSIsImNoaWxkcmVuIiwiQ3VzdG9tRWxlbWVudE1peGluIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJfX2V4dGVuZHMiLCJfXyIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiY3JlYXRlIiwiX19hc3NpZ24iLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY2FsbCIsImFwcGx5IiwiX19yZWFkIiwibyIsIm0iLCJTeW1ib2wiLCJpdGVyYXRvciIsInIiLCJhciIsImUiLCJuZXh0IiwiZG9uZSIsInB1c2giLCJ2YWx1ZSIsImVycm9yIiwiX19zcHJlYWQiLCJjb25jYXQiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsInRzbGliXzEuX19hc3NpZ24iLCJ0c2xpYl8xLl9fc3ByZWFkIiwiY3NzQ2xhc3NlcyIsInN0cmluZ3MiLCJ1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzIiwidXRpbC5hcHBseVBhc3NpdmUiLCJwb255ZmlsbC5tYXRjaGVzIiwiUmlwcGxlQmFzZSIsInJlZiIsIk1BVENIRVMiLCJfbWF0Y2hlcyIsIm1hdGNoZXMiLCJIVE1MRWxlbWVudCIsIm9wdGlvbnMiLCJicm93c2VyU3VwcG9ydHNDc3NWYXJzIiwic3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJpc1VuYm91bmRlZCIsImlzU3VyZmFjZUFjdGl2ZSIsIiRlbCIsImlzU3VyZmFjZURpc2FibGVkIiwiZGlzYWJsZWQiLCJhZGRDbGFzcyIsImNsYXNzTmFtZSIsIiRzZXQiLCJjbGFzc2VzIiwicmVtb3ZlQ2xhc3MiLCIkZGVsZXRlIiwiY29udGFpbnNFdmVudFRhcmdldCIsInRhcmdldCIsImNvbnRhaW5zIiwicmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJldnQiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGx5UGFzc2l2ZSIsImRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsImV2dFR5cGUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyUmVzaXplSGFuZGxlciIsImRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwidXBkYXRlQ3NzVmFyaWFibGUiLCJ2YXJOYW1lIiwic3R5bGVzIiwiY29tcHV0ZUJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdldFdpbmRvd1BhZ2VPZmZzZXQiLCJ4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJNRENSaXBwbGVGb3VuZGF0aW9uIiwiUmlwcGxlTWl4aW4iLCJtb3VudGVkIiwicmlwcGxlIiwiaW5pdCIsImJlZm9yZURlc3Ryb3kiLCJkZXN0cm95IiwibWRjSWNvbkJ1dHRvbiIsIm1kY0lj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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWRBLEVBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUE7OztBQTdCQSxFQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FBQTs7O0FBTEEsRUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0lBLGVBQWU1SCxVQUFVLENBQUM7RUFDeEI2SCxFQUFBQSxhQUFhLEVBQWJBLGFBRHdCO0VBRXhCQyxFQUFBQSxhQUFhLEVBQWJBO0VBRndCLENBQUQsQ0FBekI7O0VDREFySSxRQUFRLENBQUNDLE1BQUQsQ0FBUjs7Ozs7Ozs7In0=
