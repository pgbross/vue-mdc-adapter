/**
* @module vue-mdc-adapterselect 0.19.4-beta
* @exports VueMDCSelect
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^1.0.0-0","material-components-web":"^1.0.0-0"}
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
  var cssClasses = {
    DISABLED: 'mdc-select--disabled',
    FOCUSED: 'mdc-select--focused',
    INVALID: 'mdc-select--invalid',
    OUTLINED: 'mdc-select--outlined',
    REQUIRED: 'mdc-select--required',
    ROOT: 'mdc-select',
    SELECTED_ITEM_CLASS: 'mdc-list-item--selected',
    WITH_LEADING_ICON: 'mdc-select--with-leading-icon'
  };
  var strings = {
    ARIA_CONTROLS: 'aria-controls',
    ARIA_SELECTED_ATTR: 'aria-selected',
    CHANGE_EVENT: 'MDCSelect:change',
    ENHANCED_VALUE_ATTR: 'data-value',
    HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
    LABEL_SELECTOR: '.mdc-floating-label',
    LEADING_ICON_SELECTOR: '.mdc-select__icon',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    MENU_SELECTOR: '.mdc-select__menu',
    NATIVE_CONTROL_SELECTOR: '.mdc-select__native-control',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    SELECTED_ITEM_SELECTOR: "." + cssClasses.SELECTED_ITEM_CLASS,
    SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text'
  };
  var numbers = {
    LABEL_SCALE: 0.75
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

  var MDCSelectFoundation =
  /** @class */
  function (_super) {
    __extends(MDCSelectFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */

    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */


    function MDCSelectFoundation(adapter, foundationMap) {
      if (foundationMap === void 0) {
        foundationMap = {};
      }

      var _this = _super.call(this, _assign({}, MDCSelectFoundation.defaultAdapter, adapter)) || this;

      _this.leadingIcon_ = foundationMap.leadingIcon;
      _this.helperText_ = foundationMap.helperText;
      return _this;
    }

    Object.defineProperty(MDCSelectFoundation, "cssClasses", {
      get: function get() {
        return cssClasses;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "numbers", {
      get: function get() {
        return numbers;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "strings", {
      get: function get() {
        return strings;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "defaultAdapter", {
      /**
       * See {@link MDCSelectAdapter} for typing information on parameters and return types.
       */
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
          activateBottomLine: function activateBottomLine() {
            return undefined;
          },
          deactivateBottomLine: function deactivateBottomLine() {
            return undefined;
          },
          setValue: function setValue() {
            return undefined;
          },
          getValue: function getValue() {
            return '';
          },
          floatLabel: function floatLabel() {
            return undefined;
          },
          getLabelWidth: function getLabelWidth() {
            return 0;
          },
          hasOutline: function hasOutline() {
            return false;
          },
          notchOutline: function notchOutline() {
            return undefined;
          },
          closeOutline: function closeOutline() {
            return undefined;
          },
          openMenu: function openMenu() {
            return undefined;
          },
          closeMenu: function closeMenu() {
            return undefined;
          },
          isMenuOpen: function isMenuOpen() {
            return false;
          },
          setSelectedIndex: function setSelectedIndex() {
            return undefined;
          },
          setDisabled: function setDisabled() {
            return undefined;
          },
          setRippleCenter: function setRippleCenter() {
            return undefined;
          },
          notifyChange: function notifyChange() {
            return undefined;
          },
          checkValidity: function checkValidity() {
            return false;
          },
          setValid: function setValid() {
            return undefined;
          }
        }; // tslint:enable:object-literal-sort-keys
      },
      enumerable: true,
      configurable: true
    });

    MDCSelectFoundation.prototype.setSelectedIndex = function (index) {
      this.adapter_.setSelectedIndex(index);
      this.adapter_.closeMenu();
      var didChange = true;
      this.handleChange(didChange);
    };

    MDCSelectFoundation.prototype.setValue = function (value) {
      this.adapter_.setValue(value);
      var didChange = true;
      this.handleChange(didChange);
    };

    MDCSelectFoundation.prototype.getValue = function () {
      return this.adapter_.getValue();
    };

    MDCSelectFoundation.prototype.setDisabled = function (isDisabled) {
      if (isDisabled) {
        this.adapter_.addClass(cssClasses.DISABLED);
      } else {
        this.adapter_.removeClass(cssClasses.DISABLED);
      }

      this.adapter_.setDisabled(isDisabled);
      this.adapter_.closeMenu();

      if (this.leadingIcon_) {
        this.leadingIcon_.setDisabled(isDisabled);
      }
    };
    /**
     * @param content Sets the content of the helper text.
     */


    MDCSelectFoundation.prototype.setHelperTextContent = function (content) {
      if (this.helperText_) {
        this.helperText_.setContent(content);
      }
    };

    MDCSelectFoundation.prototype.layout = function () {
      var openNotch = this.getValue().length > 0;
      this.notchOutline(openNotch);
    };
    /**
     * Handles value changes, via change event or programmatic updates.
     */


    MDCSelectFoundation.prototype.handleChange = function (didChange) {
      if (didChange === void 0) {
        didChange = true;
      }

      var value = this.getValue();
      var optionHasValue = value.length > 0;
      var isRequired = this.adapter_.hasClass(cssClasses.REQUIRED);
      this.notchOutline(optionHasValue);

      if (!this.adapter_.hasClass(cssClasses.FOCUSED)) {
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
    };
    /**
     * Handles focus events from select element.
     */


    MDCSelectFoundation.prototype.handleFocus = function () {
      this.adapter_.addClass(cssClasses.FOCUSED);
      this.adapter_.floatLabel(true);
      this.notchOutline(true);
      this.adapter_.activateBottomLine();

      if (this.helperText_) {
        this.helperText_.showToScreenReader();
      }
    };
    /**
     * Handles blur events from select element.
     */


    MDCSelectFoundation.prototype.handleBlur = function () {
      if (this.adapter_.isMenuOpen()) {
        return;
      }

      this.adapter_.removeClass(cssClasses.FOCUSED);
      this.handleChange(false);
      this.adapter_.deactivateBottomLine();
      var isRequired = this.adapter_.hasClass(cssClasses.REQUIRED);

      if (isRequired) {
        this.setValid(this.isValid());

        if (this.helperText_) {
          this.helperText_.setValidity(this.isValid());
        }
      }
    };

    MDCSelectFoundation.prototype.handleClick = function (normalizedX) {
      if (this.adapter_.isMenuOpen()) {
        return;
      }

      this.adapter_.setRippleCenter(normalizedX);
      this.adapter_.openMenu();
    };

    MDCSelectFoundation.prototype.handleKeydown = function (event) {
      if (this.adapter_.isMenuOpen()) {
        return;
      }

      var isEnter = event.key === 'Enter' || event.keyCode === 13;
      var isSpace = event.key === 'Space' || event.keyCode === 32;
      var arrowUp = event.key === 'ArrowUp' || event.keyCode === 38;
      var arrowDown = event.key === 'ArrowDown' || event.keyCode === 40;

      if (this.adapter_.hasClass(cssClasses.FOCUSED) && (isEnter || isSpace || arrowUp || arrowDown)) {
        this.adapter_.openMenu();
        event.preventDefault();
      }
    };
    /**
     * Opens/closes the notched outline.
     */


    MDCSelectFoundation.prototype.notchOutline = function (openNotch) {
      if (!this.adapter_.hasOutline()) {
        return;
      }

      var isFocused = this.adapter_.hasClass(cssClasses.FOCUSED);

      if (openNotch) {
        var labelScale = numbers.LABEL_SCALE;
        var labelWidth = this.adapter_.getLabelWidth() * labelScale;
        this.adapter_.notchOutline(labelWidth);
      } else if (!isFocused) {
        this.adapter_.closeOutline();
      }
    };
    /**
     * Sets the aria label of the leading icon.
     */


    MDCSelectFoundation.prototype.setLeadingIconAriaLabel = function (label) {
      if (this.leadingIcon_) {
        this.leadingIcon_.setAriaLabel(label);
      }
    };
    /**
     * Sets the text content of the leading icon.
     */


    MDCSelectFoundation.prototype.setLeadingIconContent = function (content) {
      if (this.leadingIcon_) {
        this.leadingIcon_.setContent(content);
      }
    };

    MDCSelectFoundation.prototype.setValid = function (isValid) {
      this.adapter_.setValid(isValid);
    };

    MDCSelectFoundation.prototype.isValid = function () {
      return this.adapter_.checkValidity();
    };

    return MDCSelectFoundation;
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
  var numbers$1 = {
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
        return numbers$1;
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
        }, numbers$1.FG_DEACTIVATION_MS);
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
    ARIA_HIDDEN: 'aria-hidden',
    ROLE: 'role'
  };
  var cssClasses$2 = {
    HELPER_TEXT_PERSISTENT: 'mdc-select-helper-text--persistent',
    HELPER_TEXT_VALIDATION_MSG: 'mdc-select-helper-text--validation-msg'
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

  var MDCSelectHelperTextFoundation =
  /** @class */
  function (_super) {
    __extends(MDCSelectHelperTextFoundation, _super);

    function MDCSelectHelperTextFoundation(adapter) {
      return _super.call(this, _assign({}, MDCSelectHelperTextFoundation.defaultAdapter, adapter)) || this;
    }

    Object.defineProperty(MDCSelectHelperTextFoundation, "cssClasses", {
      get: function get() {
        return cssClasses$2;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelectHelperTextFoundation, "strings", {
      get: function get() {
        return strings$2;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelectHelperTextFoundation, "defaultAdapter", {
      /**
       * See {@link MDCSelectHelperTextAdapter} for typing information on parameters and return types.
       */
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
          removeAttr: function removeAttr() {
            return undefined;
          },
          setContent: function setContent() {
            return undefined;
          }
        }; // tslint:enable:object-literal-sort-keys
      },
      enumerable: true,
      configurable: true
    });
    /**
     * Sets the content of the helper text field.
     */

    MDCSelectHelperTextFoundation.prototype.setContent = function (content) {
      this.adapter_.setContent(content);
    };
    /**
     *  Sets the persistency of the helper text.
     */


    MDCSelectHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
      if (isPersistent) {
        this.adapter_.addClass(cssClasses$2.HELPER_TEXT_PERSISTENT);
      } else {
        this.adapter_.removeClass(cssClasses$2.HELPER_TEXT_PERSISTENT);
      }
    };
    /**
     * @param isValidation True to make the helper text act as an error validation message.
     */


    MDCSelectHelperTextFoundation.prototype.setValidation = function (isValidation) {
      if (isValidation) {
        this.adapter_.addClass(cssClasses$2.HELPER_TEXT_VALIDATION_MSG);
      } else {
        this.adapter_.removeClass(cssClasses$2.HELPER_TEXT_VALIDATION_MSG);
      }
    };
    /**
     * Makes the helper text visible to screen readers.
     */


    MDCSelectHelperTextFoundation.prototype.showToScreenReader = function () {
      this.adapter_.removeAttr(strings$2.ARIA_HIDDEN);
    };
    /**
     * Sets the validity of the helper text based on the select validity.
     */


    MDCSelectHelperTextFoundation.prototype.setValidity = function (selectIsValid) {
      var helperTextIsPersistent = this.adapter_.hasClass(cssClasses$2.HELPER_TEXT_PERSISTENT);
      var helperTextIsValidationMsg = this.adapter_.hasClass(cssClasses$2.HELPER_TEXT_VALIDATION_MSG);
      var validationMsgNeedsDisplay = helperTextIsValidationMsg && !selectIsValid;

      if (validationMsgNeedsDisplay) {
        this.adapter_.setAttr(strings$2.ROLE, 'alert');
      } else {
        this.adapter_.removeAttr(strings$2.ROLE);
      }

      if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
        this.hide_();
      }
    };
    /**
     * Hides the help text from screen readers.
     */


    MDCSelectHelperTextFoundation.prototype.hide_ = function () {
      this.adapter_.setAttr(strings$2.ARIA_HIDDEN, 'true');
    };

    return MDCSelectHelperTextFoundation;
  }(MDCFoundation);

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
    

    
    var SelectHelperText = normalizeComponent_1(
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
  var strings$3 = {
    ICON_EVENT: 'MDCSelect:icon',
    ICON_ROLE: 'button'
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
  var INTERACTION_EVENTS = ['click', 'keydown'];

  var MDCSelectIconFoundation =
  /** @class */
  function (_super) {
    __extends(MDCSelectIconFoundation, _super);

    function MDCSelectIconFoundation(adapter) {
      var _this = _super.call(this, _assign({}, MDCSelectIconFoundation.defaultAdapter, adapter)) || this;

      _this.savedTabIndex_ = null;

      _this.interactionHandler_ = function (evt) {
        return _this.handleInteraction(evt);
      };

      return _this;
    }

    Object.defineProperty(MDCSelectIconFoundation, "strings", {
      get: function get() {
        return strings$3;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelectIconFoundation, "defaultAdapter", {
      /**
       * See {@link MDCSelectIconAdapter} for typing information on parameters and return types.
       */
      get: function get() {
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
          getAttr: function getAttr() {
            return null;
          },
          setAttr: function setAttr() {
            return undefined;
          },
          removeAttr: function removeAttr() {
            return undefined;
          },
          setContent: function setContent() {
            return undefined;
          },
          registerInteractionHandler: function registerInteractionHandler() {
            return undefined;
          },
          deregisterInteractionHandler: function deregisterInteractionHandler() {
            return undefined;
          },
          notifyIconAction: function notifyIconAction() {
            return undefined;
          }
        }; // tslint:enable:object-literal-sort-keys
      },
      enumerable: true,
      configurable: true
    });

    MDCSelectIconFoundation.prototype.init = function () {
      var _this = this;

      this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
      INTERACTION_EVENTS.forEach(function (evtType) {
        _this.adapter_.registerInteractionHandler(evtType, _this.interactionHandler_);
      });
    };

    MDCSelectIconFoundation.prototype.destroy = function () {
      var _this = this;

      INTERACTION_EVENTS.forEach(function (evtType) {
        _this.adapter_.deregisterInteractionHandler(evtType, _this.interactionHandler_);
      });
    };

    MDCSelectIconFoundation.prototype.setDisabled = function (disabled) {
      if (!this.savedTabIndex_) {
        return;
      }

      if (disabled) {
        this.adapter_.setAttr('tabindex', '-1');
        this.adapter_.removeAttr('role');
      } else {
        this.adapter_.setAttr('tabindex', this.savedTabIndex_);
        this.adapter_.setAttr('role', strings$3.ICON_ROLE);
      }
    };

    MDCSelectIconFoundation.prototype.setAriaLabel = function (label) {
      this.adapter_.setAttr('aria-label', label);
    };

    MDCSelectIconFoundation.prototype.setContent = function (content) {
      this.adapter_.setContent(content);
    };

    MDCSelectIconFoundation.prototype.handleInteraction = function (evt) {
      var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;

      if (evt.type === 'click' || isEnterKey) {
        this.adapter_.notifyIconAction();
      }
    };

    return MDCSelectIconFoundation;
  }(MDCFoundation);

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
    

    
    var SelectIcon = normalizeComponent_1(
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
          'mdc-select--with-leading-icon': this.leadingIcon,
          'mdc-select--disabled': this.disabled
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
          var index = _this2.selectedIndex;
          emitCustomEvent(_this2.$refs.root, MDCSelectFoundation.strings.CHANGE_EVENT, {
            value: value,
            index: index
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
        setSelectedIndex: function setSelectedIndex(index) {
          _this2.$refs.native_control.selectedIndex = index;
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
    

    
    var mdcSelect = normalizeComponent_1(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXV0by1pbml0LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Jhc2UtcGx1Z2luLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1lbGVtZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1ldmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS91bmlxdWVpZC1taXhpbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS91dGlsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZG9tL3BvbnlmaWxsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29tcG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLWJhc2UuanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLnZ1ZSIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L2hlbHBlci10ZXh0L2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VsZWN0L2hlbHBlci10ZXh0L2ZvdW5kYXRpb24uanMiLCIuLi8uLi9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QtaGVscGVyLXRleHQudnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWxlY3QvaWNvbi9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9pY29uL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QtaWNvbi52dWUiLCIuLi8uLi9jb21wb25lbnRzL3NlbGVjdC9tZGMtc2VsZWN0LnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9zZWxlY3QvZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGF1dG9Jbml0KHBsdWdpbikge1xuICAvLyBBdXRvLWluc3RhbGxcbiAgbGV0IF9WdWUgPSBudWxsXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIF9WdWUgPSB3aW5kb3cuVnVlXG4gIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvKmdsb2JhbCBnbG9iYWwqL1xuICAgIF9WdWUgPSBnbG9iYWwuVnVlXG4gIH1cbiAgaWYgKF9WdWUpIHtcbiAgICBfVnVlLnVzZShwbHVnaW4pXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBCYXNlUGx1Z2luKGNvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnX19WRVJTSU9OX18nLFxuICAgIGluc3RhbGw6IHZtID0+IHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2tleV1cbiAgICAgICAgdm0uY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQpXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50ID0ge1xuICBmdW5jdGlvbmFsOiB0cnVlLFxuICByZW5kZXIoY3JlYXRlRWxlbWVudCwgY29udGV4dCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFxuICAgICAgY29udGV4dC5wcm9wcy5pcyB8fCBjb250ZXh0LnByb3BzLnRhZyB8fCAnZGl2JyxcbiAgICAgIGNvbnRleHQuZGF0YSxcbiAgICAgIGNvbnRleHQuY2hpbGRyZW5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUVsZW1lbnRNaXhpbiA9IHtcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUVsZW1lbnRcbiAgfVxufVxuIiwiLyogZ2xvYmFsIEN1c3RvbUV2ZW50ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Q3VzdG9tRXZlbnQoZWwsIGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gIGxldCBldnRcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICBidWJibGVzOiBzaG91bGRCdWJibGVcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKVxuICB9XG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgTURDRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgaWYgKGFkYXB0ZXIgPT09IHZvaWQgMCkgeyBhZGFwdGVyID0ge307IH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAgICAgICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAgICAgICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0ZvdW5kYXRpb247XG59KCkpO1xuZXhwb3J0IHsgTURDRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgRElTQUJMRUQ6ICdtZGMtc2VsZWN0LS1kaXNhYmxlZCcsXG4gICAgRk9DVVNFRDogJ21kYy1zZWxlY3QtLWZvY3VzZWQnLFxuICAgIElOVkFMSUQ6ICdtZGMtc2VsZWN0LS1pbnZhbGlkJyxcbiAgICBPVVRMSU5FRDogJ21kYy1zZWxlY3QtLW91dGxpbmVkJyxcbiAgICBSRVFVSVJFRDogJ21kYy1zZWxlY3QtLXJlcXVpcmVkJyxcbiAgICBST09UOiAnbWRjLXNlbGVjdCcsXG4gICAgU0VMRUNURURfSVRFTV9DTEFTUzogJ21kYy1saXN0LWl0ZW0tLXNlbGVjdGVkJyxcbiAgICBXSVRIX0xFQURJTkdfSUNPTjogJ21kYy1zZWxlY3QtLXdpdGgtbGVhZGluZy1pY29uJyxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBBUklBX0NPTlRST0xTOiAnYXJpYS1jb250cm9scycsXG4gICAgQVJJQV9TRUxFQ1RFRF9BVFRSOiAnYXJpYS1zZWxlY3RlZCcsXG4gICAgQ0hBTkdFX0VWRU5UOiAnTURDU2VsZWN0OmNoYW5nZScsXG4gICAgRU5IQU5DRURfVkFMVUVfQVRUUjogJ2RhdGEtdmFsdWUnLFxuICAgIEhJRERFTl9JTlBVVF9TRUxFQ1RPUjogJ2lucHV0W3R5cGU9XCJoaWRkZW5cIl0nLFxuICAgIExBQkVMX1NFTEVDVE9SOiAnLm1kYy1mbG9hdGluZy1sYWJlbCcsXG4gICAgTEVBRElOR19JQ09OX1NFTEVDVE9SOiAnLm1kYy1zZWxlY3RfX2ljb24nLFxuICAgIExJTkVfUklQUExFX1NFTEVDVE9SOiAnLm1kYy1saW5lLXJpcHBsZScsXG4gICAgTUVOVV9TRUxFQ1RPUjogJy5tZGMtc2VsZWN0X19tZW51JyxcbiAgICBOQVRJVkVfQ09OVFJPTF9TRUxFQ1RPUjogJy5tZGMtc2VsZWN0X19uYXRpdmUtY29udHJvbCcsXG4gICAgT1VUTElORV9TRUxFQ1RPUjogJy5tZGMtbm90Y2hlZC1vdXRsaW5lJyxcbiAgICBTRUxFQ1RFRF9JVEVNX1NFTEVDVE9SOiBcIi5cIiArIGNzc0NsYXNzZXMuU0VMRUNURURfSVRFTV9DTEFTUyxcbiAgICBTRUxFQ1RFRF9URVhUX1NFTEVDVE9SOiAnLm1kYy1zZWxlY3RfX3NlbGVjdGVkLXRleHQnLFxufTtcbnZhciBudW1iZXJzID0ge1xuICAgIExBQkVMX1NDQUxFOiAwLjc1LFxufTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ1NlbGVjdEZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDU2VsZWN0Rm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogb3B0aW9uYWwgYXJndW1lbnQgaXMgbm90IGEgYnJhbmNoIHN0YXRlbWVudCAqL1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBhZGFwdGVyXG4gICAgICogQHBhcmFtIGZvdW5kYXRpb25NYXAgTWFwIGZyb20gc3ViY29tcG9uZW50IG5hbWVzIHRvIHRoZWlyIHN1YmZvdW5kYXRpb25zLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE1EQ1NlbGVjdEZvdW5kYXRpb24oYWRhcHRlciwgZm91bmRhdGlvbk1hcCkge1xuICAgICAgICBpZiAoZm91bmRhdGlvbk1hcCA9PT0gdm9pZCAwKSB7IGZvdW5kYXRpb25NYXAgPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENTZWxlY3RGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubGVhZGluZ0ljb25fID0gZm91bmRhdGlvbk1hcC5sZWFkaW5nSWNvbjtcbiAgICAgICAgX3RoaXMuaGVscGVyVGV4dF8gPSBmb3VuZGF0aW9uTWFwLmhlbHBlclRleHQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1NlbGVjdEZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENTZWxlY3RGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDU2VsZWN0Rm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1NlbGVjdEZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2VlIHtAbGluayBNRENTZWxlY3RBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVybiB0eXBlcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZUJvdHRvbUxpbmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZWFjdGl2YXRlQm90dG9tTGluZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0VmFsdWU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcnOyB9LFxuICAgICAgICAgICAgICAgIGZsb2F0TGFiZWw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRMYWJlbFdpZHRoOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGhhc091dGxpbmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIG5vdGNoT3V0bGluZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGNsb3NlT3V0bGluZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG9wZW5NZW51OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgY2xvc2VNZW51OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgaXNNZW51T3BlbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldERpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0UmlwcGxlQ2VudGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5Q2hhbmdlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgY2hlY2tWYWxpZGl0eTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgc2V0VmFsaWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENTZWxlY3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTZWxlY3RlZEluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uY2xvc2VNZW51KCk7XG4gICAgICAgIHZhciBkaWRDaGFuZ2UgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZShkaWRDaGFuZ2UpO1xuICAgIH07XG4gICAgTURDU2VsZWN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHZhciBkaWRDaGFuZ2UgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZShkaWRDaGFuZ2UpO1xuICAgIH07XG4gICAgTURDU2VsZWN0Rm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmdldFZhbHVlKCk7XG4gICAgfTtcbiAgICBNRENTZWxlY3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXREaXNhYmxlZCA9IGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7XG4gICAgICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuRElTQUJMRUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkRJU0FCTEVEKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldERpc2FibGVkKGlzRGlzYWJsZWQpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmNsb3NlTWVudSgpO1xuICAgICAgICBpZiAodGhpcy5sZWFkaW5nSWNvbl8pIHtcbiAgICAgICAgICAgIHRoaXMubGVhZGluZ0ljb25fLnNldERpc2FibGVkKGlzRGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29udGVudCBTZXRzIHRoZSBjb250ZW50IG9mIHRoZSBoZWxwZXIgdGV4dC5cbiAgICAgKi9cbiAgICBNRENTZWxlY3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRIZWxwZXJUZXh0Q29udGVudCA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmhlbHBlclRleHRfKSB7XG4gICAgICAgICAgICB0aGlzLmhlbHBlclRleHRfLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1NlbGVjdEZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wZW5Ob3RjaCA9IHRoaXMuZ2V0VmFsdWUoKS5sZW5ndGggPiAwO1xuICAgICAgICB0aGlzLm5vdGNoT3V0bGluZShvcGVuTm90Y2gpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB2YWx1ZSBjaGFuZ2VzLCB2aWEgY2hhbmdlIGV2ZW50IG9yIHByb2dyYW1tYXRpYyB1cGRhdGVzLlxuICAgICAqL1xuICAgIE1EQ1NlbGVjdEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChkaWRDaGFuZ2UpIHtcbiAgICAgICAgaWYgKGRpZENoYW5nZSA9PT0gdm9pZCAwKSB7IGRpZENoYW5nZSA9IHRydWU7IH1cbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgICB2YXIgb3B0aW9uSGFzVmFsdWUgPSB2YWx1ZS5sZW5ndGggPiAwO1xuICAgICAgICB2YXIgaXNSZXF1aXJlZCA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5SRVFVSVJFRCk7XG4gICAgICAgIHRoaXMubm90Y2hPdXRsaW5lKG9wdGlvbkhhc1ZhbHVlKTtcbiAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuRk9DVVNFRCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uZmxvYXRMYWJlbChvcHRpb25IYXNWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpZENoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbGlkKHRoaXMuaXNWYWxpZCgpKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWxwZXJUZXh0Xykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlbHBlclRleHRfLnNldFZhbGlkaXR5KHRoaXMuaXNWYWxpZCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgZm9jdXMgZXZlbnRzIGZyb20gc2VsZWN0IGVsZW1lbnQuXG4gICAgICovXG4gICAgTURDU2VsZWN0Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5GT0NVU0VEKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5mbG9hdExhYmVsKHRydWUpO1xuICAgICAgICB0aGlzLm5vdGNoT3V0bGluZSh0cnVlKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hY3RpdmF0ZUJvdHRvbUxpbmUoKTtcbiAgICAgICAgaWYgKHRoaXMuaGVscGVyVGV4dF8pIHtcbiAgICAgICAgICAgIHRoaXMuaGVscGVyVGV4dF8uc2hvd1RvU2NyZWVuUmVhZGVyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgYmx1ciBldmVudHMgZnJvbSBzZWxlY3QgZWxlbWVudC5cbiAgICAgKi9cbiAgICBNRENTZWxlY3RGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc01lbnVPcGVuKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuRk9DVVNFRCk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZWFjdGl2YXRlQm90dG9tTGluZSgpO1xuICAgICAgICB2YXIgaXNSZXF1aXJlZCA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5SRVFVSVJFRCk7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbGlkKHRoaXMuaXNWYWxpZCgpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhlbHBlclRleHRfKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWxwZXJUZXh0Xy5zZXRWYWxpZGl0eSh0aGlzLmlzVmFsaWQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1NlbGVjdEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKG5vcm1hbGl6ZWRYKSB7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzTWVudU9wZW4oKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0UmlwcGxlQ2VudGVyKG5vcm1hbGl6ZWRYKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5vcGVuTWVudSgpO1xuICAgIH07XG4gICAgTURDU2VsZWN0Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlS2V5ZG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc01lbnVPcGVuKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNFbnRlciA9IGV2ZW50LmtleSA9PT0gJ0VudGVyJyB8fCBldmVudC5rZXlDb2RlID09PSAxMztcbiAgICAgICAgdmFyIGlzU3BhY2UgPSBldmVudC5rZXkgPT09ICdTcGFjZScgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzI7XG4gICAgICAgIHZhciBhcnJvd1VwID0gZXZlbnQua2V5ID09PSAnQXJyb3dVcCcgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzg7XG4gICAgICAgIHZhciBhcnJvd0Rvd24gPSBldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nIHx8IGV2ZW50LmtleUNvZGUgPT09IDQwO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkZPQ1VTRUQpICYmIChpc0VudGVyIHx8IGlzU3BhY2UgfHwgYXJyb3dVcCB8fCBhcnJvd0Rvd24pKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLm9wZW5NZW51KCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBPcGVucy9jbG9zZXMgdGhlIG5vdGNoZWQgb3V0bGluZS5cbiAgICAgKi9cbiAgICBNRENTZWxlY3RGb3VuZGF0aW9uLnByb3RvdHlwZS5ub3RjaE91dGxpbmUgPSBmdW5jdGlvbiAob3Blbk5vdGNoKSB7XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyXy5oYXNPdXRsaW5lKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkZPQ1VTRUQpO1xuICAgICAgICBpZiAob3Blbk5vdGNoKSB7XG4gICAgICAgICAgICB2YXIgbGFiZWxTY2FsZSA9IG51bWJlcnMuTEFCRUxfU0NBTEU7XG4gICAgICAgICAgICB2YXIgbGFiZWxXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGFiZWxXaWR0aCgpICogbGFiZWxTY2FsZTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ubm90Y2hPdXRsaW5lKGxhYmVsV2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFpc0ZvY3VzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uY2xvc2VPdXRsaW5lKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGFyaWEgbGFiZWwgb2YgdGhlIGxlYWRpbmcgaWNvbi5cbiAgICAgKi9cbiAgICBNRENTZWxlY3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRMZWFkaW5nSWNvbkFyaWFMYWJlbCA9IGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICBpZiAodGhpcy5sZWFkaW5nSWNvbl8pIHtcbiAgICAgICAgICAgIHRoaXMubGVhZGluZ0ljb25fLnNldEFyaWFMYWJlbChsYWJlbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgbGVhZGluZyBpY29uLlxuICAgICAqL1xuICAgIE1EQ1NlbGVjdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldExlYWRpbmdJY29uQ29udGVudCA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmxlYWRpbmdJY29uXykge1xuICAgICAgICAgICAgdGhpcy5sZWFkaW5nSWNvbl8uc2V0Q29udGVudChjb250ZW50KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDU2VsZWN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VmFsaWQgPSBmdW5jdGlvbiAoaXNWYWxpZCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFZhbGlkKGlzVmFsaWQpO1xuICAgIH07XG4gICAgTURDU2VsZWN0Rm91bmRhdGlvbi5wcm90b3R5cGUuaXNWYWxpZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uY2hlY2tWYWxpZGl0eSgpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1NlbGVjdEZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1NlbGVjdEZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENTZWxlY3RGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0b1xuICogZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqL1xudmFyIHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGFwcGx5UGFzc2l2ZSB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3RcbiAqIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgc3VwcG9ydC5cbiAqL1xudmFyIHN1cHBvcnRzUGFzc2l2ZV87XG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAgIC8vIERldGVjdCB2ZXJzaW9ucyBvZiBFZGdlIHdpdGggYnVnZ3kgdmFyKCkgc3VwcG9ydFxuICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTE0OTU0NDgvXG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93T2JqLmRvY3VtZW50O1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAvLyBUaGUgYnVnIGV4aXN0cyBpZiA6OmJlZm9yZSBzdHlsZSBlbmRzIHVwIHByb3BhZ2F0aW5nIHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICAvLyBBZGRpdGlvbmFsbHksIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBudWxsIGluIGlmcmFtZXMgd2l0aCBkaXNwbGF5OiBcIm5vbmVcIiBpbiBGaXJlZm94LFxuICAgIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93T2JqLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgdmFyIGhhc1BzZXVkb1ZhckJ1ZyA9IGNvbXB1dGVkU3R5bGUgIT09IG51bGwgJiYgY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BTdHlsZSA9PT0gJ3NvbGlkJztcbiAgICBub2RlLnJlbW92ZSgpO1xuICAgIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2gpIHtcbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICB2YXIgQ1NTID0gd2luZG93T2JqLkNTUztcbiAgICB2YXIgc3VwcG9ydHNDc3NWYXJzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIH1cbiAgICB2YXIgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSBDU1MgJiYgdHlwZW9mIENTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSBDU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gICAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgICB2YXIgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKENTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgICAgICBDU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpKTtcbiAgICBpZiAoZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyB8fCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMpIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFycyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcnM7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcnM7XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZFxuICogaWYgc28sIHVzZSB0aGVtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiwgZm9yY2VSZWZyZXNoKSB7XG4gICAgaWYgKGdsb2JhbE9iaiA9PT0gdm9pZCAwKSB7IGdsb2JhbE9iaiA9IHdpbmRvdzsgfVxuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxuICAgIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHZhciBpc1N1cHBvcnRlZF8xID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSwge1xuICAgICAgICAgICAgICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgICAgICAgICAgICAgICBpc1N1cHBvcnRlZF8xID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkXzE7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH0gLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1lbXB0eSBjYW5ub3QgdGhyb3cgZXJyb3IgZHVlIHRvIHRlc3RzLiB0c2xpbnQgYWxzbyBkaXNhYmxlcyBjb25zb2xlLmxvZy5cbiAgICAgICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkXzE7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXZ0LCBwYWdlT2Zmc2V0LCBjbGllbnRSZWN0KSB7XG4gICAgaWYgKCFldnQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICB2YXIgeCA9IHBhZ2VPZmZzZXQueCwgeSA9IHBhZ2VPZmZzZXQueTtcbiAgICB2YXIgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgICB2YXIgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuICAgIHZhciBub3JtYWxpemVkWDtcbiAgICB2YXIgbm9ybWFsaXplZFk7XG4gICAgLy8gRGV0ZXJtaW5lIHRvdWNoIHBvaW50IHJlbGF0aXZlIHRvIHRoZSByaXBwbGUgY29udGFpbmVyLlxuICAgIGlmIChldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIHZhciB0b3VjaEV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBtb3VzZUV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IG1vdXNlRXZlbnQucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gbW91c2VFdmVudC5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgcmV0dXJuIHsgeDogbm9ybWFsaXplZFgsIHk6IG5vcm1hbGl6ZWRZIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENDb21wb25lbnQocm9vdCwgZm91bmRhdGlvbikge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3RfID0gcm9vdDtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIHRzbGliXzEuX19zcHJlYWQoYXJncykpO1xuICAgICAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgICAgIC8vIHRoaXMucm9vdF8gaXMgZGVmaW5lZCBhbmQgY2FuIGJlIHVzZWQgd2l0aGluIHRoZSBmb3VuZGF0aW9uIGNsYXNzLlxuICAgICAgICB0aGlzLmZvdW5kYXRpb25fID0gZm91bmRhdGlvbiA9PT0gdW5kZWZpbmVkID8gdGhpcy5nZXREZWZhdWx0Rm91bmRhdGlvbigpIDogZm91bmRhdGlvbjtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5pbml0KCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gICAgfVxuICAgIE1EQ0NvbXBvbmVudC5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAgICAgLy8gcmV0dXJucyBhbiBpbnN0YW50aWF0ZWQgY29tcG9uZW50IHdpdGggaXRzIHJvb3Qgc2V0IHRvIHRoYXQgZWxlbWVudC4gQWxzbyBub3RlIHRoYXQgaW4gdGhlIGNhc2VzIG9mXG4gICAgICAgIC8vIHN1YmNsYXNzZXMsIGFuIGV4cGxpY2l0IGZvdW5kYXRpb24gY2xhc3Mgd2lsbCBub3QgaGF2ZSB0byBiZSBwYXNzZWQgaW47IGl0IHdpbGwgc2ltcGx5IGJlIGluaXRpYWxpemVkXG4gICAgICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICAgICAgcmV0dXJuIG5ldyBNRENDb21wb25lbnQocm9vdCwgbmV3IE1EQ0ZvdW5kYXRpb24oe30pKTtcbiAgICB9O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBtZXRob2QgcGFyYW0gb25seSBleGlzdHMgZm9yIHR5cGluZyBwdXJwb3NlczsgaXQgZG9lcyBub3QgbmVlZCB0byBiZSB1bml0IHRlc3RlZCAqL1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBfYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoaXMgdG8gZG8gYW55IGFkZGl0aW9uYWwgc2V0dXAgd29yayB0aGF0IHdvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiBhXG4gICAgICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgICAgIC8vIGluaXRpYWxpemVkLiBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgYmVzaWRlcyByb290IGFuZCBmb3VuZGF0aW9uIHdpbGwgYmUgcGFzc2VkIGluIGhlcmUuXG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCBmb3VuZGF0aW9uIGNsYXNzIGZvciB0aGVcbiAgICAgICAgLy8gY29tcG9uZW50LlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSBnZXREZWZhdWx0Rm91bmRhdGlvbiB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkICcgK1xuICAgICAgICAgICAgJ2ZvdW5kYXRpb24gY2xhc3MnKTtcbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCBpZiB0aGV5IG5lZWQgdG8gcGVyZm9ybSB3b3JrIHRvIHN5bmNocm9uaXplIHdpdGggYSBob3N0IERPTVxuICAgICAgICAvLyBvYmplY3QuIEFuIGV4YW1wbGUgb2YgdGhpcyB3b3VsZCBiZSBhIGZvcm0gY29udHJvbCB3cmFwcGVyIHRoYXQgbmVlZHMgdG8gc3luY2hyb25pemUgaXRzIGludGVybmFsIHN0YXRlXG4gICAgICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgICAgIC8vIHJlYWRzL3dyaXRlcyB0aGF0IHdvdWxkIGNhdXNlIGxheW91dCAvIHBhaW50LCBhcyB0aGlzIGlzIGNhbGxlZCBzeW5jaHJvbm91c2x5IGZyb20gd2l0aGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBtYXkgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJlbGVhc2UgYW55IHJlc291cmNlcyAvIGRlcmVnaXN0ZXIgYW55IGxpc3RlbmVycyB0aGV5IGhhdmVcbiAgICAgICAgLy8gYXR0YWNoZWQuIEFuIGV4YW1wbGUgb2YgdGhpcyBtaWdodCBiZSBkZXJlZ2lzdGVyaW5nIGEgcmVzaXplIGV2ZW50IGZyb20gdGhlIHdpbmRvdyBvYmplY3QuXG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLnVubGlzdGVuID0gZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLCB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgICAqL1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIChldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUpIHtcbiAgICAgICAgaWYgKHNob3VsZEJ1YmJsZSA9PT0gdm9pZCAwKSB7IHNob3VsZEJ1YmJsZSA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBldnQ7XG4gICAgICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlLFxuICAgICAgICAgICAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICAgICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vdF8uZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0NvbXBvbmVudDtcbn0oKSk7XG5leHBvcnQgeyBNRENDb21wb25lbnQgfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENDb21wb25lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBcInBvbnlmaWxsXCIgaXMgYSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgbW9kaWZ5IHRoZSBnbG9iYWwgcHJvdG90eXBlIGNoYWluLlxuICogVGhpcyBtYWtlcyBwb255ZmlsbHMgc2FmZXIgdGhhbiB0cmFkaXRpb25hbCBwb2x5ZmlsbHMsIGVzcGVjaWFsbHkgZm9yIGxpYnJhcmllcyBsaWtlIE1EQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgIH1cbiAgICB2YXIgZWwgPSBlbGVtZW50O1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgdmFyIG5hdGl2ZU1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXNcbiAgICAgICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcjtcbiAgICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbnlmaWxsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgcG9ueWZpbGwgZnJvbSAnLi9wb255ZmlsbCc7XG5leHBvcnQgeyBwb255ZmlsbCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAgIC8vIGdpdmVuIHRoYXQgaXQncyBhbiAndXBncmFkZScgdG8gYW4gZXhpc3RpbmcgY29tcG9uZW50LiBUaGF0IGJlaW5nIHNhaWQgaXQgaXMgdGhlIHJvb3RcbiAgICAvLyBDU1MgY2xhc3MgdGhhdCBhbGwgb3RoZXIgQ1NTIGNsYXNzZXMgZGVyaXZlIGZyb20uXG4gICAgQkdfRk9DVVNFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZCcsXG4gICAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gICAgRkdfREVBQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1kZWFjdGl2YXRpb24nLFxuICAgIFJPT1Q6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkJyxcbiAgICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxufTtcbmV4cG9ydCB2YXIgc3RyaW5ncyA9IHtcbiAgICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICAgIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICAgIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxuICAgIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0JyxcbiAgICBWQVJfTEVGVDogJy0tbWRjLXJpcHBsZS1sZWZ0JyxcbiAgICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG59O1xuZXhwb3J0IHZhciBudW1iZXJzID0ge1xuICAgIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsXG4gICAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsXG4gICAgSU5JVElBTF9PUklHSU5fU0NBTEU6IDAuNixcbiAgICBQQURESU5HOiAxMCxcbiAgICBUQVBfREVMQVlfTVM6IDMwMCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyB9IGZyb20gJy4vdXRpbCc7XG4vLyBBY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIHRoZSByb290IGVsZW1lbnQgb2YgZWFjaCBpbnN0YW5jZSBmb3IgYWN0aXZhdGlvblxudmFyIEFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbXG4gICAgJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nLCAnbW91c2Vkb3duJywgJ2tleWRvd24nLFxuXTtcbi8vIERlYWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiBkb2N1bWVudEVsZW1lbnQgd2hlbiBhIHBvaW50ZXItcmVsYXRlZCBkb3duIGV2ZW50IG9jY3Vyc1xudmFyIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gW1xuICAgICd0b3VjaGVuZCcsICdwb2ludGVydXAnLCAnbW91c2V1cCcsICdjb250ZXh0bWVudScsXG5dO1xuLy8gc2ltdWx0YW5lb3VzIG5lc3RlZCBhY3RpdmF0aW9uc1xudmFyIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcbnZhciBNRENSaXBwbGVGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1JpcHBsZUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDUmlwcGxlRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1JpcHBsZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICBfdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICBfdGhpcy5mZ1NjYWxlXyA9ICcwJztcbiAgICAgICAgX3RoaXMuZnJhbWVfID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XG4gICAgICAgIF90aGlzLmluaXRpYWxTaXplXyA9IDA7XG4gICAgICAgIF90aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgICAgIF90aGlzLm1heFJhZGl1c18gPSAwO1xuICAgICAgICBfdGhpcy51bmJvdW5kZWRDb29yZHNfID0geyBsZWZ0OiAwLCB0b3A6IDAgfTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblN0YXRlXyA9IF90aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSB0cnVlO1xuICAgICAgICAgICAgX3RoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8gPSBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMuYWN0aXZhdGVfKGUpOyB9O1xuICAgICAgICBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5kZWFjdGl2YXRlXygpOyB9O1xuICAgICAgICBfdGhpcy5mb2N1c0hhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlRm9jdXMoKTsgfTtcbiAgICAgICAgX3RoaXMuYmx1ckhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlQmx1cigpOyB9O1xuICAgICAgICBfdGhpcy5yZXNpemVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmxheW91dCgpOyB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB4OiAwLCB5OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBpc1VuYm91bmRlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSk7XG4gICAgICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIFJPT1RfMSA9IF9hLlJPT1QsIFVOQk9VTkRFRF8xID0gX2EuVU5CT1VOREVEO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhST09UXzEpO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRF8xKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZXMgbmVlZCBsYXlvdXQgbG9naWMgYXBwbGllZCBpbW1lZGlhdGVseSB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGJvdGggc2hhZGUgYW5kIHJpcHBsZVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZhdGlvblRpbWVyXykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgICAgICAgICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBST09UXzIgPSBfYS5ST09ULCBVTkJPVU5ERURfMiA9IF9hLlVOQk9VTkRFRDtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoUk9PVF8yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERURfMik7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlQ3NzVmFyc18oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKTtcbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZXZ0IE9wdGlvbmFsIGV2ZW50IGNvbnRhaW5pbmcgcG9zaXRpb24gaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVfKGV2dCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGVfKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRVbmJvdW5kZWQgPSBmdW5jdGlvbiAodW5ib3VuZGVkKSB7XG4gICAgICAgIHZhciBVTkJPVU5ERUQgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuVU5CT1VOREVEO1xuICAgICAgICBpZiAodW5ib3VuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICAgKiB1bnRpbCB0aGUgcG9pbnQgaW4gdGltZSB3aGVyZSB0aGUgZm91bmRhdGlvbiByZXF1ZXN0cyBpdC4gVGhpcyBwcmV2ZW50cyBzY2VuYXJpb3Mgd2hlcmVcbiAgICAgKiBjbGllbnQtc2lkZSBmZWF0dXJlLWRldGVjdGlvbiBtYXkgaGFwcGVuIHRvbyBlYXJseSwgc3VjaCBhcyB3aGVuIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXJcbiAgICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAgICovXG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuc3VwcG9ydHNQcmVzc1JpcHBsZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZhdGlvbkV2ZW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogZmFsc2UsXG4gICAgICAgICAgICBpc0FjdGl2YXRlZDogZmFsc2UsXG4gICAgICAgICAgICBpc1Byb2dyYW1tYXRpYzogZmFsc2UsXG4gICAgICAgICAgICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyA9IGZ1bmN0aW9uIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoZXZ0LnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZW1vdmVDc3NWYXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJpcHBsZVN0cmluZ3MgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocmlwcGxlU3RyaW5ncyk7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ1ZBUl8nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKHJpcHBsZVN0cmluZ3Nba2V5XSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGVfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VEaXNhYmxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF2b2lkIHJlYWN0aW5nIHRvIGZvbGxvdy1vbiBldmVudHMgZmlyZWQgYnkgdG91Y2ggZGV2aWNlIGFmdGVyIGFuIGFscmVhZHktcHJvY2Vzc2VkIHVzZXIgaW50ZXJhY3Rpb25cbiAgICAgICAgdmFyIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgICAgIHZhciBpc1NhbWVJbnRlcmFjdGlvbiA9IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ICYmIGV2dCAhPT0gdW5kZWZpbmVkICYmIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50LnR5cGUgIT09IGV2dC50eXBlO1xuICAgICAgICBpZiAoaXNTYW1lSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPSBldnQgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmFjdGl2YXRpb25FdmVudCA9IGV2dDtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA/IGZhbHNlIDogZXZ0ICE9PSB1bmRlZmluZWQgJiYgKGV2dC50eXBlID09PSAnbW91c2Vkb3duJyB8fCBldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGV2dC50eXBlID09PSAncG9pbnRlcmRvd24nKTtcbiAgICAgICAgdmFyIGhhc0FjdGl2YXRlZENoaWxkID0gZXZ0ICE9PSB1bmRlZmluZWQgJiYgYWN0aXZhdGVkVGFyZ2V0cy5sZW5ndGggPiAwICYmIGFjdGl2YXRlZFRhcmdldHMuc29tZShmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiBfdGhpcy5hZGFwdGVyXy5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCk7IH0pO1xuICAgICAgICBpZiAoaGFzQWN0aXZhdGVkQ2hpbGQpIHtcbiAgICAgICAgICAgIC8vIEltbWVkaWF0ZWx5IHJlc2V0IGFjdGl2YXRpb24gc3RhdGUsIHdoaWxlIHByZXNlcnZpbmcgbG9naWMgdGhhdCBwcmV2ZW50cyB0b3VjaCBmb2xsb3ctb24gZXZlbnRzXG4gICAgICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKGV2dC50YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhldnQpO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZXZ0KTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUmVzZXQgYXJyYXkgb24gbmV4dCBmcmFtZSBhZnRlciB0aGUgY3VycmVudCBldmVudCBoYXMgaGFkIGEgY2hhbmNlIHRvIGJ1YmJsZSB0byBwcmV2ZW50IGFuY2VzdG9yIHJpcHBsZXNcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcbiAgICAgICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlXG4gICAgICAgICAgICAgICAgJiYgZXZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAmJiAoZXZ0LmtleSA9PT0gJyAnIHx8IGV2dC5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzcGFjZSB3YXMgcHJlc3NlZCwgdHJ5IGFnYWluIHdpdGhpbiBhbiByQUYgY2FsbCB0byBkZXRlY3QgOmFjdGl2ZSwgYmVjYXVzZSBkaWZmZXJlbnQgVUFzIHJlcG9ydFxuICAgICAgICAgICAgICAgIC8vIGFjdGl2ZSBzdGF0ZXMgaW5jb25zaXN0ZW50bHkgd2hlbiB0aGV5J3JlIGNhbGxlZCB3aXRoaW4gZXZlbnQgaGFuZGxpbmcgY29kZTpcbiAgICAgICAgICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAgICAgICAgIC8vIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTI5Mzc0MVxuICAgICAgICAgICAgICAgIC8vIFdlIHRyeSBmaXJzdCBvdXRzaWRlIHJBRiB0byBzdXBwb3J0IEVkZ2UsIHdoaWNoIGRvZXMgbm90IGV4aGliaXQgdGhpcyBwcm9ibGVtLCBidXQgd2lsbCBjcmFzaCBpZiBhIENTU1xuICAgICAgICAgICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICAgICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IF90aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGV2dCk7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IGFjdGl2YXRpb24gc3RhdGUgaW1tZWRpYXRlbHkgaWYgZWxlbWVudCB3YXMgbm90IG1hZGUgYWN0aXZlLlxuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSBfdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICByZXR1cm4gKGV2dCAhPT0gdW5kZWZpbmVkICYmIGV2dC50eXBlID09PSAna2V5ZG93bicpID8gdGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VBY3RpdmUoKSA6IHRydWU7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hbmltYXRlQWN0aXZhdGlvbl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncywgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCA9IF9hLlZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIFZBUl9GR19UUkFOU0xBVEVfRU5EID0gX2EuVkFSX0ZHX1RSQU5TTEFURV9FTkQ7XG4gICAgICAgIHZhciBfYiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgRkdfREVBQ1RJVkFUSU9OID0gX2IuRkdfREVBQ1RJVkFUSU9OLCBGR19BQ1RJVkFUSU9OID0gX2IuRkdfQUNUSVZBVElPTjtcbiAgICAgICAgdmFyIERFQUNUSVZBVElPTl9USU1FT1VUX01TID0gTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLkRFQUNUSVZBVElPTl9USU1FT1VUX01TO1xuICAgICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICB2YXIgdHJhbnNsYXRlU3RhcnQgPSAnJztcbiAgICAgICAgdmFyIHRyYW5zbGF0ZUVuZCA9ICcnO1xuICAgICAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdmFyIF9jID0gdGhpcy5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCksIHN0YXJ0UG9pbnQgPSBfYy5zdGFydFBvaW50LCBlbmRQb2ludCA9IF9jLmVuZFBvaW50O1xuICAgICAgICAgICAgdHJhbnNsYXRlU3RhcnQgPSBzdGFydFBvaW50LnggKyBcInB4LCBcIiArIHN0YXJ0UG9pbnQueSArIFwicHhcIjtcbiAgICAgICAgICAgIHRyYW5zbGF0ZUVuZCA9IGVuZFBvaW50LnggKyBcInB4LCBcIiArIGVuZFBvaW50LnkgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCB0cmFuc2xhdGVTdGFydCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgICAgIC8vIENhbmNlbCBhbnkgb25nb2luZyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBhbmltYXRpb25zXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgIC8vIEZvcmNlIGxheW91dCBpbiBvcmRlciB0byByZS10cmlnZ2VyIHRoZSBhbmltYXRpb24uXG4gICAgICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXygpOyB9LCBERUFDVElWQVRJT05fVElNRU9VVF9NUyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8sIGFjdGl2YXRpb25FdmVudCA9IF9hLmFjdGl2YXRpb25FdmVudCwgd2FzQWN0aXZhdGVkQnlQb2ludGVyID0gX2Eud2FzQWN0aXZhdGVkQnlQb2ludGVyO1xuICAgICAgICB2YXIgc3RhcnRQb2ludDtcbiAgICAgICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhhY3RpdmF0aW9uRXZlbnQsIHRoaXMuYWRhcHRlcl8uZ2V0V2luZG93UGFnZU9mZnNldCgpLCB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgICAgICAgICB5OiB0aGlzLmZyYW1lXy5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDZW50ZXIgdGhlIGVsZW1lbnQgYXJvdW5kIHRoZSBzdGFydCBwb2ludC5cbiAgICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IHN0YXJ0UG9pbnQueCAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICAgICAgeTogc3RhcnRQb2ludC55IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgIH07XG4gICAgICAgIHZhciBlbmRQb2ludCA9IHtcbiAgICAgICAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgc3RhcnRQb2ludDogc3RhcnRQb2ludCwgZW5kUG9pbnQ6IGVuZFBvaW50IH07XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgICAgICAvLyBUaGUgZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBzaG91bGQgb25seSBydW4gYWZ0ZXIgYm90aCBvZiB0aG9zZSBvY2N1ci5cbiAgICAgICAgdmFyIEZHX0RFQUNUSVZBVElPTiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT047XG4gICAgICAgIHZhciBfYSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXywgaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSBfYS5oYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWQgPSBfYS5pc0FjdGl2YXRlZDtcbiAgICAgICAgdmFyIGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25IYXNFbmRlZCAmJiB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8pIHtcbiAgICAgICAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9LCBudW1iZXJzLkZHX0RFQUNUSVZBVElPTl9NUyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIEZHX0FDVElWQVRJT04gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTjtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVzZXRBY3RpdmF0aW9uU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXy5hY3RpdmF0aW9uRXZlbnQ7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgLy8gVG91Y2ggZGV2aWNlcyBtYXkgZmlyZSBhZGRpdGlvbmFsIGV2ZW50cyBmb3IgdGhlIHNhbWUgaW50ZXJhY3Rpb24gd2l0aGluIGEgc2hvcnQgdGltZS5cbiAgICAgICAgLy8gU3RvcmUgdGhlIHByZXZpb3VzIGV2ZW50IHVudGlsIGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhhdCBzdWJzZXF1ZW50IGV2ZW50cyBhcmUgZm9yIG5ldyBpbnRlcmFjdGlvbnMuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdW5kZWZpbmVkOyB9LCBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuVEFQX0RFTEFZX01TKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gc2NlbmFyaW9zIHN1Y2ggYXMgd2hlbiB5b3UgaGF2ZSBhIGtleXVwIGV2ZW50IHRoYXQgYmx1cnMgdGhlIGVsZW1lbnQuXG4gICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0YXRlID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYykge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTsgfSk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hbmltYXRlRGVhY3RpdmF0aW9uXyA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgd2FzQWN0aXZhdGVkQnlQb2ludGVyID0gX2Eud2FzQWN0aXZhdGVkQnlQb2ludGVyLCB3YXNFbGVtZW50TWFkZUFjdGl2ZSA9IF9hLndhc0VsZW1lbnRNYWRlQWN0aXZlO1xuICAgICAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyIHx8IHdhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXRJbnRlcm5hbF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZnJhbWVfID0gdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgICAgIHZhciBtYXhEaW0gPSBNYXRoLm1heCh0aGlzLmZyYW1lXy5oZWlnaHQsIHRoaXMuZnJhbWVfLndpZHRoKTtcbiAgICAgICAgLy8gU3VyZmFjZSBkaWFtZXRlciBpcyB0cmVhdGVkIGRpZmZlcmVudGx5IGZvciB1bmJvdW5kZWQgdnMuIGJvdW5kZWQgcmlwcGxlcy5cbiAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZSBkaWFtZXRlciBpcyBjYWxjdWxhdGVkIHNtYWxsZXIgc2luY2UgdGhlIHN1cmZhY2UgaXMgZXhwZWN0ZWQgdG8gYWxyZWFkeSBiZSBwYWRkZWQgYXBwcm9wcmlhdGVseVxuICAgICAgICAvLyB0byBleHRlbmQgdGhlIGhpdGJveCwgYW5kIHRoZSByaXBwbGUgaXMgZXhwZWN0ZWQgdG8gbWVldCB0aGUgZWRnZXMgb2YgdGhlIHBhZGRlZCBoaXRib3ggKHdoaWNoIGlzIHR5cGljYWxseVxuICAgICAgICAvLyBzcXVhcmUpLiBCb3VuZGVkIHJpcHBsZXMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgZnVsbHkgZXhwZWN0ZWQgdG8gZXhwYW5kIGJleW9uZCB0aGUgc3VyZmFjZSdzIGxvbmdlc3QgZGlhbWV0ZXJcbiAgICAgICAgLy8gKGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGRpYWdvbmFsIHBsdXMgYSBjb25zdGFudCBwYWRkaW5nKSwgYW5kIGFyZSBjbGlwcGVkIGF0IHRoZSBzdXJmYWNlJ3MgYm9yZGVyIHZpYVxuICAgICAgICAvLyBgb3ZlcmZsb3c6IGhpZGRlbmAuXG4gICAgICAgIHZhciBnZXRCb3VuZGVkUmFkaXVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGh5cG90ZW51c2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coX3RoaXMuZnJhbWVfLndpZHRoLCAyKSArIE1hdGgucG93KF90aGlzLmZyYW1lXy5oZWlnaHQsIDIpKTtcbiAgICAgICAgICAgIHJldHVybiBoeXBvdGVudXNlICsgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlBBRERJTkc7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWF4UmFkaXVzXyA9IHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSA/IG1heERpbSA6IGdldEJvdW5kZWRSYWRpdXMoKTtcbiAgICAgICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICAgICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBNYXRoLmZsb29yKG1heERpbSAqIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5JTklUSUFMX09SSUdJTl9TQ0FMRSk7XG4gICAgICAgIHRoaXMuZmdTY2FsZV8gPSBcIlwiICsgdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG4gICAgICAgIHRoaXMudXBkYXRlTGF5b3V0Q3NzVmFyc18oKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnVwZGF0ZUxheW91dENzc1ZhcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3MsIFZBUl9GR19TSVpFID0gX2EuVkFSX0ZHX1NJWkUsIFZBUl9MRUZUID0gX2EuVkFSX0xFRlQsIFZBUl9UT1AgPSBfYS5WQVJfVE9QLCBWQVJfRkdfU0NBTEUgPSBfYS5WQVJfRkdfU0NBTEU7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIHRoaXMuaW5pdGlhbFNpemVfICsgXCJweFwiKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0xFRlQsIHRoaXMudW5ib3VuZGVkQ29vcmRzXy5sZWZ0ICsgXCJweFwiKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgdGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcCArIFwicHhcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENSaXBwbGVGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IHBvbnlmaWxsIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9pbmRleCc7XG5pbXBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcbnZhciBNRENSaXBwbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDUmlwcGxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1JpcHBsZSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTURDUmlwcGxlLmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QsIG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0geyBpc1VuYm91bmRlZDogdW5kZWZpbmVkIH07IH1cbiAgICAgICAgdmFyIHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgICAgIC8vIE9ubHkgb3ZlcnJpZGUgdW5ib3VuZGVkIGJlaGF2aW9yIGlmIG9wdGlvbiBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxuICAgICAgICBpZiAob3B0cy5pc1VuYm91bmRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByaXBwbGUudW5ib3VuZGVkID0gb3B0cy5pc1VuYm91bmRlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmlwcGxlO1xuICAgIH07XG4gICAgTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyk7IH0sXG4gICAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmNvbnRhaW5zKHRhcmdldCk7IH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB9KTsgfSxcbiAgICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gcG9ueWZpbGwubWF0Y2hlcyhpbnN0YW5jZS5yb290XywgJzphY3RpdmUnKTsgfSxcbiAgICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBCb29sZWFuKGluc3RhbmNlLmRpc2FibGVkKTsgfSxcbiAgICAgICAgICAgIGlzVW5ib3VuZGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBCb29sZWFuKGluc3RhbmNlLnVuYm91bmRlZCk7IH0sXG4gICAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2Uucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6IGZ1bmN0aW9uICh2YXJOYW1lLCB2YWx1ZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpOyB9LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZS5wcm90b3R5cGUsIFwidW5ib3VuZGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLnVuYm91bmRlZF8pO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh1bmJvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5ib3VuZGVkXyA9IEJvb2xlYW4odW5ib3VuZGVkKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VW5ib3VuZGVkXygpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIodGhpcykpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByb290ID0gdGhpcy5yb290XztcbiAgICAgICAgdGhpcy51bmJvdW5kZWQgPSAnbWRjUmlwcGxlSXNVbmJvdW5kZWQnIGluIHJvb3QuZGF0YXNldDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb3N1cmUgQ29tcGlsZXIgdGhyb3dzIGFuIGFjY2VzcyBjb250cm9sIGVycm9yIHdoZW4gZGlyZWN0bHkgYWNjZXNzaW5nIGFcbiAgICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICAgKiBCeSBhY2Nlc3NpbmcgdGhlIHByb3RlY3RlZCBwcm9wZXJ0eSBpbnNpZGUgYSBtZXRob2QsIHdlIHNvbHZlIHRoYXQgcHJvYmxlbS5cbiAgICAgKiBUaGF0J3Mgd2h5IHRoaXMgZnVuY3Rpb24gZXhpc3RzLlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuc2V0VW5ib3VuZGVkXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVbmJvdW5kZWQoQm9vbGVhbih0aGlzLnVuYm91bmRlZF8pKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENSaXBwbGU7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDUmlwcGxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5leHBvcnQgeyB1dGlsIH07XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvaW5kZXgnXG5pbXBvcnQgeyBzdXBwb3J0c0Nzc1ZhcmlhYmxlcywgYXBwbHlQYXNzaXZlIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS91dGlsJ1xuaW1wb3J0IHsgbWF0Y2hlcyB9IGZyb20gJ0BtYXRlcmlhbC9kb20vcG9ueWZpbGwnXG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVCYXNlIGV4dGVuZHMgTURDUmlwcGxlRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgTUFUQ0hFUygpIHtcbiAgICAvKiBnbG9iYWwgSFRNTEVsZW1lbnQgKi9cbiAgICByZXR1cm4gKFxuICAgICAgUmlwcGxlQmFzZS5fbWF0Y2hlcyB8fFxuICAgICAgKFJpcHBsZUJhc2UuX21hdGNoZXMgPSBtYXRjaGVzKEhUTUxFbGVtZW50LnByb3RvdHlwZSkpXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGlzU3VyZmFjZUFjdGl2ZShyZWYpIHtcbiAgICByZXR1cm4gcmVmW1JpcHBsZUJhc2UuTUFUQ0hFU10oJzphY3RpdmUnKVxuICB9XG5cbiAgY29uc3RydWN0b3Iodm0sIG9wdGlvbnMpIHtcbiAgICBzdXBlcihcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uJGVsW1JpcHBsZUJhc2UuTUFUQ0hFU10oJzphY3RpdmUnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS5kaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2bS4kc2V0KHZtLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJGRlbGV0ZSh2bS5jbGFzc2VzLCBjbGFzc05hbWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiB0YXJnZXQgPT4gdm0uJGVsLmNvbnRhaW5zKHRhcmdldCksXG4gICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHZtLiRlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5zdHlsZXMsIHZhck5hbWUsIHZhbHVlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgUmlwcGxlTWl4aW4gPSB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5yaXBwbGUuZGVzdHJveSgpXG4gIH1cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGN1c3RvbS1lbGVtZW50IFxuICAgIDp0YWc9XCJ0YWdcIiBcbiAgICA6Y2xhc3Nlcz1cImNsYXNzZXNcIlxuICAgIDpzdHlsZXM9XCJzdHlsZXNcIiBcbiAgICBjbGFzcz1cIm1kYy1yaXBwbGVcIj5cbiAgICA8c2xvdCAvPlxuICA8L2N1c3RvbS1lbGVtZW50PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnRNaXhpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgeyBSaXBwbGVNaXhpbiB9IGZyb20gJy4vbWRjLXJpcHBsZS1iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtcmlwcGxlJyxcbiAgbWl4aW5zOiBbQ3VzdG9tRWxlbWVudE1peGluLCBSaXBwbGVNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgdGFnOiBTdHJpbmdcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBzdHJpbmdzID0ge1xuICAgIEFSSUFfSElEREVOOiAnYXJpYS1oaWRkZW4nLFxuICAgIFJPTEU6ICdyb2xlJyxcbn07XG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBIRUxQRVJfVEVYVF9QRVJTSVNURU5UOiAnbWRjLXNlbGVjdC1oZWxwZXItdGV4dC0tcGVyc2lzdGVudCcsXG4gICAgSEVMUEVSX1RFWFRfVkFMSURBVElPTl9NU0c6ICdtZGMtc2VsZWN0LWhlbHBlci10ZXh0LS12YWxpZGF0aW9uLW1zZycsXG59O1xuZXhwb3J0IHsgc3RyaW5ncywgY3NzQ2xhc3NlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDU2VsZWN0SGVscGVyVGV4dEZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDU2VsZWN0SGVscGVyVGV4dEZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDU2VsZWN0SGVscGVyVGV4dEZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDU2VsZWN0SGVscGVyVGV4dEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDU2VsZWN0SGVscGVyVGV4dEZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENTZWxlY3RIZWxwZXJUZXh0Rm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1NlbGVjdEhlbHBlclRleHRGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlZSB7QGxpbmsgTURDU2VsZWN0SGVscGVyVGV4dEFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHR5cGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIHNldEF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVBdHRyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0Q29udGVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNvbnRlbnQgb2YgdGhlIGhlbHBlciB0ZXh0IGZpZWxkLlxuICAgICAqL1xuICAgIE1EQ1NlbGVjdEhlbHBlclRleHRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRDb250ZW50ID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogIFNldHMgdGhlIHBlcnNpc3RlbmN5IG9mIHRoZSBoZWxwZXIgdGV4dC5cbiAgICAgKi9cbiAgICBNRENTZWxlY3RIZWxwZXJUZXh0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0UGVyc2lzdGVudCA9IGZ1bmN0aW9uIChpc1BlcnNpc3RlbnQpIHtcbiAgICAgICAgaWYgKGlzUGVyc2lzdGVudCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1BFUlNJU1RFTlQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1BFUlNJU1RFTlQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gaXNWYWxpZGF0aW9uIFRydWUgdG8gbWFrZSB0aGUgaGVscGVyIHRleHQgYWN0IGFzIGFuIGVycm9yIHZhbGlkYXRpb24gbWVzc2FnZS5cbiAgICAgKi9cbiAgICBNRENTZWxlY3RIZWxwZXJUZXh0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VmFsaWRhdGlvbiA9IGZ1bmN0aW9uIChpc1ZhbGlkYXRpb24pIHtcbiAgICAgICAgaWYgKGlzVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9WQUxJREFUSU9OX01TRyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBoZWxwZXIgdGV4dCB2aXNpYmxlIHRvIHNjcmVlbiByZWFkZXJzLlxuICAgICAqL1xuICAgIE1EQ1NlbGVjdEhlbHBlclRleHRGb3VuZGF0aW9uLnByb3RvdHlwZS5zaG93VG9TY3JlZW5SZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQXR0cihzdHJpbmdzLkFSSUFfSElEREVOKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbGlkaXR5IG9mIHRoZSBoZWxwZXIgdGV4dCBiYXNlZCBvbiB0aGUgc2VsZWN0IHZhbGlkaXR5LlxuICAgICAqL1xuICAgIE1EQ1NlbGVjdEhlbHBlclRleHRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRWYWxpZGl0eSA9IGZ1bmN0aW9uIChzZWxlY3RJc1ZhbGlkKSB7XG4gICAgICAgIHZhciBoZWxwZXJUZXh0SXNQZXJzaXN0ZW50ID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1BFUlNJU1RFTlQpO1xuICAgICAgICB2YXIgaGVscGVyVGV4dElzVmFsaWRhdGlvbk1zZyA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9WQUxJREFUSU9OX01TRyk7XG4gICAgICAgIHZhciB2YWxpZGF0aW9uTXNnTmVlZHNEaXNwbGF5ID0gaGVscGVyVGV4dElzVmFsaWRhdGlvbk1zZyAmJiAhc2VsZWN0SXNWYWxpZDtcbiAgICAgICAgaWYgKHZhbGlkYXRpb25Nc2dOZWVkc0Rpc3BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihzdHJpbmdzLlJPTEUsICdhbGVydCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVBdHRyKHN0cmluZ3MuUk9MRSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoZWxwZXJUZXh0SXNQZXJzaXN0ZW50ICYmICF2YWxpZGF0aW9uTXNnTmVlZHNEaXNwbGF5KSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVfKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhpZGVzIHRoZSBoZWxwIHRleHQgZnJvbSBzY3JlZW4gcmVhZGVycy5cbiAgICAgKi9cbiAgICBNRENTZWxlY3RIZWxwZXJUZXh0Rm91bmRhdGlvbi5wcm90b3R5cGUuaGlkZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihzdHJpbmdzLkFSSUFfSElEREVOLCAndHJ1ZScpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1NlbGVjdEhlbHBlclRleHRGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENTZWxlY3RIZWxwZXJUZXh0Rm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1NlbGVjdEhlbHBlclRleHRGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCI8dGVtcGxhdGU+XG4gIDxwIHJlZj1cImhlbHB0ZXh0RWxcIiA6Y2xhc3M9XCJjbGFzc2VzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHNsb3QgLz48L3A+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1EQ1NlbGVjdEhlbHBlclRleHRGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9zZWxlY3QvaGVscGVyLXRleHQvZm91bmRhdGlvbi5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnc2VsZWN0LWhlbHBlci10ZXh0JyxcbiAgcHJvcHM6IHtcbiAgICBoZWxwdGV4dFBlcnNpc3RlbnQ6IEJvb2xlYW4sXG4gICAgaGVscHRleHRWYWxpZGF0aW9uOiBCb29sZWFuXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgJ21kYy1zZWxlY3QtaGVscGVyLXRleHQnOiB0cnVlLFxuICAgICAgICAnbWRjLXNlbGVjdC1oZWxwZXItdGV4dC0tcGVyc2lzdGVudCc6IHRoaXMuaGVscHRleHRQZXJzaXN0ZW50LFxuICAgICAgICAnbWRjLXNlbGVjdC1oZWxwZXItdGV4dC0tdmFsaWRhdGlvbi1tc2cnOiB0aGlzLmhlbHB0ZXh0VmFsaWRhdGlvblxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBoZWxwdGV4dFBlcnNpc3RlbnQoKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0UGVyc2lzdGVudCh0aGlzLmhlbHB0ZXh0UGVyc2lzdGVudClcbiAgICB9LFxuICAgIGhlbHB0ZXh0VmFsaWRhdGlvbigpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRWYWxpZGF0aW9uKHRoaXMuaGVscHRleHRWYWxpZGF0aW9uKVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDU2VsZWN0SGVscGVyVGV4dEZvdW5kYXRpb24oe1xuICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRkZWxldGUodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUpLFxuXG4gICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IEJvb2xlYW4odGhpcy5jbGFzc2VzW2NsYXNzTmFtZV0pLFxuXG4gICAgICBzZXRBdHRyOiAoYXR0ciwgdmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy4kZWwuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgICAgfSxcbiAgICAgIHJlbW92ZUF0dHI6IGF0dHIgPT4ge1xuICAgICAgICB0aGlzLiRlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0cilcbiAgICAgIH0sXG5cbiAgICAgIHNldENvbnRlbnQ6ICgvKmNvbnRlbnQqLykgPT4ge1xuICAgICAgICAvLyBoZWxwIHRleHQgZ2V0J3MgdXBkYXRlZCBmcm9tIHt7aGVscHRleHR9fVxuICAgICAgICAvLyBjZi4gdGhpcy4kZWwudGV4dENvbnRlbnQgPSBjb250ZW50XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBzdHJpbmdzID0ge1xuICAgIElDT05fRVZFTlQ6ICdNRENTZWxlY3Q6aWNvbicsXG4gICAgSUNPTl9ST0xFOiAnYnV0dG9uJyxcbn07XG5leHBvcnQgeyBzdHJpbmdzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBJTlRFUkFDVElPTl9FVkVOVFMgPSBbJ2NsaWNrJywgJ2tleWRvd24nXTtcbnZhciBNRENTZWxlY3RJY29uRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENTZWxlY3RJY29uRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENTZWxlY3RJY29uRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1NlbGVjdEljb25Gb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2F2ZWRUYWJJbmRleF8gPSBudWxsO1xuICAgICAgICBfdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfID0gZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDU2VsZWN0SWNvbkZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENTZWxlY3RJY29uRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWUge0BsaW5rIE1EQ1NlbGVjdEljb25BZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVybiB0eXBlcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZ2V0QXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgICAgICBzZXRBdHRyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldENvbnRlbnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlJY29uQWN0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDU2VsZWN0SWNvbkZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2F2ZWRUYWJJbmRleF8gPSB0aGlzLmFkYXB0ZXJfLmdldEF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgICAgIElOVEVSQUNUSU9OX0VWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENTZWxlY3RJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgSU5URVJBQ1RJT05fRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuaW50ZXJhY3Rpb25IYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDU2VsZWN0SWNvbkZvdW5kYXRpb24ucHJvdG90eXBlLnNldERpc2FibGVkID0gZnVuY3Rpb24gKGRpc2FibGVkKSB7XG4gICAgICAgIGlmICghdGhpcy5zYXZlZFRhYkluZGV4Xykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVBdHRyKCdyb2xlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoJ3RhYmluZGV4JywgdGhpcy5zYXZlZFRhYkluZGV4Xyk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHIoJ3JvbGUnLCBzdHJpbmdzLklDT05fUk9MRSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1NlbGVjdEljb25Gb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRBcmlhTGFiZWwgPSBmdW5jdGlvbiAobGFiZWwpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgIH07XG4gICAgTURDU2VsZWN0SWNvbkZvdW5kYXRpb24ucHJvdG90eXBlLnNldENvbnRlbnQgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgfTtcbiAgICBNRENTZWxlY3RJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlSW50ZXJhY3Rpb24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBpc0VudGVyS2V5ID0gZXZ0LmtleSA9PT0gJ0VudGVyJyB8fCBldnQua2V5Q29kZSA9PT0gMTM7XG4gICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2NsaWNrJyB8fCBpc0VudGVyS2V5KSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUljb25BY3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ1NlbGVjdEljb25Gb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENTZWxlY3RJY29uRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1NlbGVjdEljb25Gb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCI8dGVtcGxhdGU+XG4gIDxpIDpjbGFzcz1cImNsYXNzZXNcIiB2LW9uPVwiJGxpc3RlbmVyc1wiIDpzdHlsZT1cInN0eWxlc1wiIHYtYmluZD1cIiRhdHRyc1wiPlxuICAgIHt7IGljb24gfX1cbiAgPC9pPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENTZWxlY3RJY29uRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvc2VsZWN0L2ljb24vZm91bmRhdGlvbi5qcydcbmltcG9ydCB7IGVtaXRDdXN0b21FdmVudCB9IGZyb20gJy4uL2Jhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3NlbGVjdC1pY29uJyxcbiAgcHJvcHM6IHtcbiAgICBpY29uOiBTdHJpbmdcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICAnbWF0ZXJpYWwtaWNvbnMnOiB0cnVlLFxuICAgICAgICAnbWRjLXNlbGVjdF9faWNvbic6IHRydWVcbiAgICAgIH0sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ1NlbGVjdEljb25Gb3VuZGF0aW9uKFxuICAgICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGdldEF0dHI6IGF0dHIgPT4gdGhpcy4kZWwuZ2V0QXR0cmlidXRlKGF0dHIpLFxuICAgICAgICBzZXRBdHRyOiAoYXR0ciwgdmFsdWUpID0+IHRoaXMuJGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSksXG4gICAgICAgIHJlbW92ZUF0dHI6IGF0dHIgPT4gdGhpcy4kZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIpLFxuICAgICAgICBzZXRDb250ZW50OiBjb250ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLiRlbC50ZXh0Q29udGVudCA9IGNvbnRlbnRcbiAgICAgICAgfSxcbiAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciksXG4gICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgIHRoaXMuJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciksXG4gICAgICAgIG5vdGlmeUljb25BY3Rpb246ICgpID0+IHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycpXG5cbiAgICAgICAgICBlbWl0Q3VzdG9tRXZlbnQoXG4gICAgICAgICAgICB0aGlzLiRlbCxcbiAgICAgICAgICAgIE1EQ1NlbGVjdEljb25Gb3VuZGF0aW9uLnN0cmluZ3MuSUNPTl9FVkVOVCxcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgdHJ1ZSAvKiBzaG91bGRCdWJibGUgICovXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIClcblxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiByZWY9XCJyb290XCIgOmlkPVwiaWRcIiA6Y2xhc3M9XCJyb290Q2xhc3Nlc1wiIDpzdHlsZT1cInN0eWxlc1wiPlxuICAgICAgPHNlbGVjdC1pY29uXG4gICAgICAgIHJlZj1cImxlYWRpbmdJY29uRWxcIlxuICAgICAgICB2LWlmPVwibGVhZGluZ0ljb25cIlxuICAgICAgICA6aWNvbj1cImxlYWRpbmdJY29uXCJcbiAgICAgICAgdGFiLWluZGV4PVwiMFwiXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgPjwvc2VsZWN0LWljb24+XG4gICAgICA8aSBjbGFzcz1cIm1kYy1zZWxlY3RfX2Ryb3Bkb3duLWljb25cIj48L2k+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIHJlZj1cIm5hdGl2ZV9jb250cm9sXCJcbiAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgICAgICB2LWJpbmQ9XCIkYXR0cnNcIlxuICAgICAgICBjbGFzcz1cIm1kYy1zZWxlY3RfX25hdGl2ZS1jb250cm9sXCJcbiAgICAgICAgOmFyaWEtY29udHJvbHM9XCJzZWxlY3RBcmlhQ29udHJvbHNcIlxuICAgICAgICB2LW9uPVwibGlzdGVuZXJzXCJcbiAgICAgID5cbiAgICAgICAgPG9wdGlvbiB2LWlmPVwiIXZhbHVlXCIgY2xhc3M9XCJtZGMtb3B0aW9uXCIgdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZCAvPlxuICAgICAgICA8c2xvdCAvPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8bWRjLWZsb2F0aW5nLWxhYmVsIHYtaWY9XCIhb3V0bGluZWRcIiByZWY9XCJsYWJlbEVsXCI+e3tcbiAgICAgICAgbGFiZWxcbiAgICAgIH19PC9tZGMtZmxvYXRpbmctbGFiZWw+XG4gICAgICA8bWRjLWxpbmUtcmlwcGxlIHYtaWY9XCIhb3V0bGluZWRcIiByZWY9XCJsaW5lUmlwcGxlRWxcIiAvPlxuICAgICAgPG1kYy1ub3RjaGVkLW91dGxpbmUgdi1pZj1cIm91dGxpbmVkXCIgcmVmPVwib3V0bGluZUVsXCI+e3tcbiAgICAgICAgbGFiZWxcbiAgICAgIH19PC9tZGMtbm90Y2hlZC1vdXRsaW5lPlxuICAgIDwvZGl2PlxuXG4gICAgPHNlbGVjdC1oZWxwZXItdGV4dFxuICAgICAgOmhlbHB0ZXh0UGVyc2lzdGVudD1cImhlbHB0ZXh0UGVyc2lzdGVudFwiXG4gICAgICA6aGVscHRleHRWYWxpZGF0aW9uPVwiaGVscHRleHRWYWxpZGF0aW9uXCJcbiAgICAgIHJlZj1cImhlbHBlcnRleHRFbFwiXG4gICAgICB2LWlmPVwiaGVscHRleHRcIlxuICAgICAgOmlkPVwiJ2hlbHAtJyArIHZtYV91aWRfXCJcbiAgICA+XG4gICAgICB7eyBoZWxwdGV4dCB9fVxuICAgIDwvc2VsZWN0LWhlbHBlci10ZXh0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTURDU2VsZWN0Rm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvc2VsZWN0L2ZvdW5kYXRpb24nXG5pbXBvcnQgeyBSaXBwbGVCYXNlIH0gZnJvbSAnLi4vcmlwcGxlJ1xuaW1wb3J0IFNlbGVjdEhlbHBlclRleHQgZnJvbSAnLi9zZWxlY3QtaGVscGVyLXRleHQudnVlJ1xuXG5pbXBvcnQgU2VsZWN0SWNvbiBmcm9tICcuL3NlbGVjdC1pY29uLnZ1ZSdcbmltcG9ydCB7IGVtaXRDdXN0b21FdmVudCwgVk1BVW5pcXVlSWRNaXhpbiB9IGZyb20gJy4uL2Jhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1zZWxlY3QnLFxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuICBtb2RlbDoge1xuICAgIHByb3A6ICd2YWx1ZScsXG4gICAgZXZlbnQ6ICdjaGFuZ2UnXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IFN0cmluZyxcbiAgICBoZWxwdGV4dDogU3RyaW5nLFxuXG4gICAgbGVhZGluZ0ljb246IFN0cmluZyxcbiAgICBpY29uOiBTdHJpbmcsXG4gICAgaGVscHRleHRQZXJzaXN0ZW50OiBCb29sZWFuLFxuICAgIGhlbHB0ZXh0VmFsaWRhdGlvbjogQm9vbGVhbixcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIG91dGxpbmVkOiBCb29sZWFuLFxuICAgIGlkOiB7IHR5cGU6IFN0cmluZyB9XG4gIH0sXG4gIG1peGluczogW1ZNQVVuaXF1ZUlkTWl4aW5dLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdHlsZXM6IHt9LFxuICAgICAgY2xhc3Nlczoge31cbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50czogeyBTZWxlY3RIZWxwZXJUZXh0LCBTZWxlY3RJY29uIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgcm9vdENsYXNzZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnbWRjLXNlbGVjdCc6IHRydWUsXG4gICAgICAgICdtZGMtc2VsZWN0LS1vdXRsaW5lZCc6IHRoaXMub3V0bGluZWQsXG4gICAgICAgICdtZGMtc2VsZWN0LS13aXRoLWxlYWRpbmctaWNvbic6IHRoaXMubGVhZGluZ0ljb24sXG4gICAgICAgICdtZGMtc2VsZWN0LS1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgIC4uLnRoaXMuY2xhc3Nlc1xuICAgICAgfVxuICAgIH0sXG4gICAgbGlzdGVuZXJzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy4kbGlzdGVuZXJzLFxuICAgICAgICBjaGFuZ2U6IGV2ZW50ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KSxcbiAgICAgICAgYmx1cjogZXZlbnQgPT4gdGhpcy5oYW5kbGVCbHVyKGV2ZW50KSxcbiAgICAgICAgZm9jdXM6IGV2ZW50ID0+IHRoaXMuaGFuZGxlRm9jdXMoZXZlbnQpLFxuICAgICAgICBtb3VzZWRvd246IGV2ZW50ID0+IHRoaXMuaGFuZGxlQ2xpY2soZXZlbnQpLFxuICAgICAgICB0b3VjaHN0YXJ0OiBldmVudCA9PiB0aGlzLmhhbmRsZUNsaWNrKGV2ZW50KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzZWxlY3RBcmlhQ29udHJvbHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oZWxwdGV4dCA/ICdoZWxwLScgKyB0aGlzLnZtYV91aWRfIDogdW5kZWZpbmVkXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGRpc2FibGVkKHZhbHVlKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24gJiYgdGhpcy5mb3VuZGF0aW9uLnVwZGF0ZURpc2FibGVkU3R5bGUodmFsdWUpXG4gICAgfSxcbiAgICB2YWx1ZTogJ3JlZnJlc2hJbmRleCdcbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENTZWxlY3RGb3VuZGF0aW9uKFxuICAgICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIC8vIGNvbW1vbiBtZXRob2RzXG4gICAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKSxcbiAgICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRkZWxldGUodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUpLFxuICAgICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IEJvb2xlYW4odGhpcy5jbGFzc2VzW2NsYXNzTmFtZV0pLFxuICAgICAgICBzZXRSaXBwbGVDZW50ZXI6IG5vcm1hbGl6ZWRYID0+XG4gICAgICAgICAgdGhpcy4kcmVmcy5saW5lUmlwcGxlRWwgJiZcbiAgICAgICAgICB0aGlzLiRyZWZzLmxpbmVSaXBwbGVFbC5zZXRSaXBwbGVDZW50ZXIobm9ybWFsaXplZFgpLFxuICAgICAgICBhY3RpdmF0ZUJvdHRvbUxpbmU6ICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy4kcmVmcy5saW5lUmlwcGxlRWwpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMubGluZVJpcHBsZUVsLmZvdW5kYXRpb24uYWN0aXZhdGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVhY3RpdmF0ZUJvdHRvbUxpbmU6ICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy4kcmVmcy5saW5lUmlwcGxlRWwpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMubGluZVJpcHBsZUVsLmZvdW5kYXRpb24uZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG5vdGlmeUNoYW5nZTogdmFsdWUgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4XG4gICAgICAgICAgZW1pdEN1c3RvbUV2ZW50KFxuICAgICAgICAgICAgdGhpcy4kcmVmcy5yb290LFxuICAgICAgICAgICAgTURDU2VsZWN0Rm91bmRhdGlvbi5zdHJpbmdzLkNIQU5HRV9FVkVOVCxcbiAgICAgICAgICAgIHsgdmFsdWUsIGluZGV4IH0sXG4gICAgICAgICAgICB0cnVlIC8qIHNob3VsZEJ1YmJsZSAgKi9cbiAgICAgICAgICApXG5cbiAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB2YWx1ZSlcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBuYXRpdmUgbWV0aG9kc1xuICAgICAgICBnZXRWYWx1ZTogKCkgPT4gdGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbC52YWx1ZSxcbiAgICAgICAgc2V0VmFsdWU6IHZhbHVlID0+ICh0aGlzLiRyZWZzLm5hdGl2ZV9jb250cm9sLnZhbHVlID0gdmFsdWUpLFxuICAgICAgICBvcGVuTWVudTogKCkgPT4ge30sXG4gICAgICAgIGNsb3NlTWVudTogKCkgPT4ge30sXG4gICAgICAgIGlzTWVudU9wZW46ICgpID0+IGZhbHNlLFxuICAgICAgICBzZXRTZWxlY3RlZEluZGV4OiBpbmRleCA9PiB7XG4gICAgICAgICAgdGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbC5zZWxlY3RlZEluZGV4ID0gaW5kZXhcbiAgICAgICAgfSxcbiAgICAgICAgc2V0RGlzYWJsZWQ6IGlzRGlzYWJsZWQgPT5cbiAgICAgICAgICAodGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbC5kaXNhYmxlZCA9IGlzRGlzYWJsZWQpLFxuICAgICAgICBzZXRWYWxpZDogaXNWYWxpZCA9PiB7XG4gICAgICAgICAgaXNWYWxpZFxuICAgICAgICAgICAgPyB0aGlzLiRkZWxldGUodGhpcy5jbGFzc2VzLCBNRENTZWxlY3RGb3VuZGF0aW9uLmNzc0NsYXNzZXMuSU5WQUxJRClcbiAgICAgICAgICAgIDogdGhpcy5zZXQodGhpcy5jbGFzc2VzLCBNRENTZWxlY3RGb3VuZGF0aW9uLmNzc0NsYXNzZXMuSU5WQUxJRClcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tWYWxpZGl0eTogKCkgPT4gdGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbC5jaGVja1ZhbGlkaXR5KCksXG5cbiAgICAgICAgLy8gb3V0bGluZSBtZXRob2RzXG5cbiAgICAgICAgaGFzT3V0bGluZTogKCkgPT4gdGhpcy5vdXRsaW5lZCxcbiAgICAgICAgbm90Y2hPdXRsaW5lOiBsYWJlbFdpZHRoID0+IHtcbiAgICAgICAgICBpZiAodGhpcy4kcmVmcy5vdXRsaW5lRWwpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMub3V0bGluZUVsLm5vdGNoKGxhYmVsV2lkdGgpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjbG9zZU91dGxpbmU6ICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy4kcmVmcy5vdXRsaW5lRWwpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMub3V0bGluZUVsLmNsb3NlTm90Y2goKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBsYWJlbCBtZXRob2RzXG4gICAgICAgIGZsb2F0TGFiZWw6IHZhbHVlID0+IHtcbiAgICAgICAgICBpZiAodGhpcy4kcmVmcy5sYWJlbEVsKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLmxhYmVsRWwuZmxvYXQodmFsdWUpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMub3V0bGluZUVsLmZsb2F0KHZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBnZXRMYWJlbFdpZHRoOiAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuJHJlZnMubGFiZWxFbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMubGFiZWxFbC5nZXRXaWR0aCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgaGVscGVyVGV4dDogdGhpcy4kcmVmcy5oZWxwZXJ0ZXh0RWxcbiAgICAgICAgICA/IHRoaXMuJHJlZnMuaGVscGVydGV4dEVsLmZvdW5kYXRpb25cbiAgICAgICAgICA6IHZvaWQgMCxcblxuICAgICAgICBsZWFkaW5nSWNvbjogdGhpcy4kcmVmcy5sZWFkaW5nSWNvbkVsXG4gICAgICAgICAgPyB0aGlzLiRyZWZzLmxlYWRpbmdJY29uRWwuZm91bmRhdGlvblxuICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVDaGFuZ2UoZmFsc2UpXG5cbiAgICAvLyBpbml0aWFsIHN5bmMgd2l0aCBET01cbiAgICB0aGlzLnJlZnJlc2hJbmRleCgpXG4gICAgdGhpcy5zbG90T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB0aGlzLnJlZnJlc2hJbmRleCgpKVxuICAgIHRoaXMuc2xvdE9ic2VydmVyLm9ic2VydmUodGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbCwge1xuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgc3VidHJlZTogdHJ1ZVxuICAgIH0pXG5cbiAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnNsb3RPYnNlcnZlci5kaXNjb25uZWN0KClcblxuICAgIGxldCBmb3VuZGF0aW9uID0gdGhpcy5mb3VuZGF0aW9uXG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbnVsbFxuICAgIGZvdW5kYXRpb24uZGVzdHJveSgpXG5cbiAgICB0aGlzLnJpcHBsZSAmJiB0aGlzLnJpcHBsZS5kZXN0cm95KClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlQ2hhbmdlKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUNoYW5nZSh0cnVlKVxuICAgIH0sXG5cbiAgICBoYW5kbGVGb2N1cygpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVGb2N1cygpXG4gICAgfSxcblxuICAgIGhhbmRsZUJsdXIoKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlQmx1cigpXG4gICAgfSxcblxuICAgIGhhbmRsZUNsaWNrKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUNsaWNrKHRoaXMuZ2V0Tm9ybWFsaXplZFhDb29yZGluYXRlKGV2dCkpXG4gICAgfSxcbiAgICByZWZyZXNoSW5kZXgoKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0gWy4uLnRoaXMuJHJlZnMubmF0aXZlX2NvbnRyb2wucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyldXG5cbiAgICAgIGNvbnN0IGlkeCA9IG9wdGlvbnMuZmluZEluZGV4KCh7IHZhbHVlIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IHZhbHVlXG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbC5zZWxlY3RlZEluZGV4ICE9PSBpZHgpIHtcbiAgICAgICAgdGhpcy4kcmVmcy5uYXRpdmVfY29udHJvbC5zZWxlY3RlZEluZGV4ID0gaWR4XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVDaGFuZ2UoZmFsc2UpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGdldE5vcm1hbGl6ZWRYQ29vcmRpbmF0ZShldnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldENsaWVudFJlY3QgPSBldnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBjb25zdCB4Q29vcmRpbmF0ZSA9IGV2dC5jbGllbnRYXG4gICAgICByZXR1cm4geENvb3JkaW5hdGUgLSB0YXJnZXRDbGllbnRSZWN0LmxlZnRcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgbWRjU2VsZWN0IGZyb20gJy4vbWRjLXNlbGVjdC52dWUnXG5cbmV4cG9ydCB7IG1kY1NlbGVjdCB9XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VQbHVnaW4oe1xuICBtZGNTZWxlY3Rcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJDdXN0b21FbGVtZW50IiwiZnVuY3Rpb25hbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwicHJvcHMiLCJpcyIsInRhZyIsImRhdGEiLCJjaGlsZHJlbiIsIkN1c3RvbUVsZW1lbnRNaXhpbiIsImVtaXRDdXN0b21FdmVudCIsImVsIiwiZXZ0VHlwZSIsImV2dERhdGEiLCJzaG91bGRCdWJibGUiLCJldnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImJ1YmJsZXMiLCJkb2N1bWVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInNjb3BlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJWTUFVbmlxdWVJZE1peGluIiwiYmVmb3JlQ3JlYXRlIiwidm1hX3VpZF8iLCJfdWlkIiwiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fZXh0ZW5kcyIsIl9fIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJfX2Fzc2lnbiIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjYWxsIiwiYXBwbHkiLCJfX3JlYWQiLCJvIiwibSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiciIsImFyIiwiZSIsIm5leHQiLCJkb25lIiwicHVzaCIsInZhbHVlIiwiZXJyb3IiLCJfX3NwcmVhZCIsImNvbmNhdCIsInRzbGliXzEuX19leHRlbmRzIiwidHNsaWJfMS5fX2Fzc2lnbiIsInRzbGliXzEuX19zcHJlYWQiLCJjc3NDbGFzc2VzIiwic3RyaW5ncyIsIm51bWJlcnMiLCJ1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzIiwidXRpbC5hcHBseVBhc3NpdmUiLCJwb255ZmlsbC5tYXRjaGVzIiwiUmlwcGxlQmFzZSIsInJlZiIsIk1BVENIRVMiLCJfbWF0Y2hlcyIsIm1hdGNoZXMiLCJIVE1MRWxlbWVudCIsIm9wdGlvbnMiLCJicm93c2VyU3VwcG9ydHNDc3NWYXJzIiwic3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJpc1VuYm91bmRlZCIsImlzU3VyZmFjZUFjdGl2ZSIsIiRlbCIsImlzU3VyZmFjZURpc2FibGVkIiwiZGlzYWJsZWQiLCJhZGRDbGFzcyIsImNsYXNzTmFtZSIsIiRzZXQiLCJjbGFzc2VzIiwicmVtb3ZlQ2xhc3MiLCIkZGVsZXRlIiwiY29udGFpbnNFdmVudFRhcmdldCIsInRhcmdldCIsImNvbnRhaW5zIiwicmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGx5UGFzc2l2ZSIsImRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsImRvY3VtZW50RWxlbWVudCIsImRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyUmVzaXplSGFuZGxlciIsImRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwidXBkYXRlQ3NzVmFyaWFibGUiLCJ2YXJOYW1lIiwic3R5bGVzIiwiY29tcHV0ZUJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdldFdpbmRvd1BhZ2VPZmZzZXQiLCJ4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJNRENSaXBwbGVGb3VuZGF0aW9uIiwiUmlwcGxlTWl4aW4iLCJtb3VudGVkIiwicmlwcGxlIiwiaW5pdCIsImJlZm9yZURlc3Ryb3kiLCJkZXN0cm95IiwibWRjU2VsZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0VBQU8sU0FBU0EsUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEI7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
