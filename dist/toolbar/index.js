/**
* @module vue-mdc-adaptertoolbar 0.19.4-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^1.0.0-0","material-components-web":"^1.0.0-0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

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
var cssClasses = {
  FIXED: 'mdc-toolbar--fixed',
  FIXED_AT_LAST_ROW: 'mdc-toolbar--fixed-at-last-row',
  FIXED_LASTROW: 'mdc-toolbar--fixed-lastrow-only',
  FLEXIBLE_DEFAULT_BEHAVIOR: 'mdc-toolbar--flexible-default-behavior',
  FLEXIBLE_MAX: 'mdc-toolbar--flexible-space-maximized',
  FLEXIBLE_MIN: 'mdc-toolbar--flexible-space-minimized',
  TOOLBAR_ROW_FLEXIBLE: 'mdc-toolbar--flexible'
};
var strings = {
  CHANGE_EVENT: 'MDCToolbar:change',
  FIRST_ROW_SELECTOR: '.mdc-toolbar__row:first-child',
  ICON_SELECTOR: '.mdc-toolbar__icon',
  TITLE_SELECTOR: '.mdc-toolbar__title'
};
var numbers = {
  MAX_TITLE_SIZE: 2.125,
  MIN_TITLE_SIZE: 1.25,
  TOOLBAR_MOBILE_BREAKPOINT: 600,
  TOOLBAR_ROW_HEIGHT: 64,
  TOOLBAR_ROW_MOBILE_HEIGHT: 56
};

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

var MDCToolbarFoundation =
/** @class */
function (_super) {
  __extends(MDCToolbarFoundation, _super);

  function MDCToolbarFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCToolbarFoundation.defaultAdapter, adapter)) || this;

    _this.checkRowHeightFrame_ = 0;
    _this.scrollFrame_ = 0;
    _this.executedLastChange_ = false;
    _this.isFixed_ = false;
    _this.isFixedLastRow_ = false;
    _this.hasFlexibleFirstRow_ = false;
    _this.useFlexDefaultBehavior_ = false;
    _this.calculations_ = {
      flexibleExpansionHeight: 0,
      flexibleExpansionRatio: 0,
      maxTranslateYDistance: 0,
      maxTranslateYRatio: 0,
      scrollThreshold: 0,
      scrollThresholdRatio: 0,
      toolbarHeight: 0,
      toolbarRatio: 0,
      toolbarRowHeight: 0
    };
    return _this;
  }

  Object.defineProperty(MDCToolbarFoundation, "cssClasses", {
    get: function get() {
      return cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCToolbarFoundation, "strings", {
    get: function get() {
      return strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCToolbarFoundation, "numbers", {
    get: function get() {
      return numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCToolbarFoundation, "defaultAdapter", {
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        hasClass: function hasClass() {
          return false;
        },
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        registerScrollHandler: function registerScrollHandler() {
          return undefined;
        },
        deregisterScrollHandler: function deregisterScrollHandler() {
          return undefined;
        },
        registerResizeHandler: function registerResizeHandler() {
          return undefined;
        },
        deregisterResizeHandler: function deregisterResizeHandler() {
          return undefined;
        },
        getViewportWidth: function getViewportWidth() {
          return 0;
        },
        getViewportScrollY: function getViewportScrollY() {
          return 0;
        },
        getOffsetHeight: function getOffsetHeight() {
          return 0;
        },
        getFirstRowElementOffsetHeight: function getFirstRowElementOffsetHeight() {
          return 0;
        },
        notifyChange: function notifyChange() {
          return undefined;
        },
        setStyle: function setStyle() {
          return undefined;
        },
        setStyleForTitleElement: function setStyleForTitleElement() {
          return undefined;
        },
        setStyleForFlexibleRowElement: function setStyleForFlexibleRowElement() {
          return undefined;
        },
        setStyleForFixedAdjustElement: function setStyleForFixedAdjustElement() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCToolbarFoundation.prototype.init = function () {
    var _this = this;

    this.isFixed_ = this.adapter_.hasClass(cssClasses.FIXED);
    this.isFixedLastRow_ = this.adapter_.hasClass(cssClasses.FIXED_LASTROW) && this.isFixed_;
    this.hasFlexibleFirstRow_ = this.adapter_.hasClass(cssClasses.TOOLBAR_ROW_FLEXIBLE);

    if (this.hasFlexibleFirstRow_) {
      this.useFlexDefaultBehavior_ = this.adapter_.hasClass(cssClasses.FLEXIBLE_DEFAULT_BEHAVIOR);
    }

    this.resizeHandler_ = function () {
      return _this.checkRowHeight_();
    };

    this.scrollHandler_ = function () {
      return _this.updateToolbarStyles_();
    };

    this.adapter_.registerResizeHandler(this.resizeHandler_);
    this.adapter_.registerScrollHandler(this.scrollHandler_);
    this.initKeyRatio_();
    this.setKeyHeights_();
  };

  MDCToolbarFoundation.prototype.destroy = function () {
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    this.adapter_.deregisterScrollHandler(this.scrollHandler_);
  };

  MDCToolbarFoundation.prototype.updateAdjustElementStyles = function () {
    if (this.isFixed_) {
      this.adapter_.setStyleForFixedAdjustElement('margin-top', this.calculations_.toolbarHeight + "px");
    }
  };

  MDCToolbarFoundation.prototype.getFlexibleExpansionRatio_ = function (scrollTop) {
    // To prevent division by zero when there is no flexibleExpansionHeight
    var delta = 0.0001;
    return Math.max(0, 1 - scrollTop / (this.calculations_.flexibleExpansionHeight + delta));
  };

  MDCToolbarFoundation.prototype.checkRowHeight_ = function () {
    var _this = this;

    cancelAnimationFrame(this.checkRowHeightFrame_);
    this.checkRowHeightFrame_ = requestAnimationFrame(function () {
      return _this.setKeyHeights_();
    });
  };

  MDCToolbarFoundation.prototype.setKeyHeights_ = function () {
    var newToolbarRowHeight = this.getRowHeight_();

    if (newToolbarRowHeight !== this.calculations_.toolbarRowHeight) {
      this.calculations_.toolbarRowHeight = newToolbarRowHeight;
      this.calculations_.toolbarHeight = this.calculations_.toolbarRatio * this.calculations_.toolbarRowHeight;
      this.calculations_.flexibleExpansionHeight = this.calculations_.flexibleExpansionRatio * this.calculations_.toolbarRowHeight;
      this.calculations_.maxTranslateYDistance = this.calculations_.maxTranslateYRatio * this.calculations_.toolbarRowHeight;
      this.calculations_.scrollThreshold = this.calculations_.scrollThresholdRatio * this.calculations_.toolbarRowHeight;
      this.updateAdjustElementStyles();
      this.updateToolbarStyles_();
    }
  };

  MDCToolbarFoundation.prototype.updateToolbarStyles_ = function () {
    var _this = this;

    cancelAnimationFrame(this.scrollFrame_);
    this.scrollFrame_ = requestAnimationFrame(function () {
      var scrollTop = _this.adapter_.getViewportScrollY();

      var hasScrolledOutOfThreshold = _this.scrolledOutOfThreshold_(scrollTop);

      if (hasScrolledOutOfThreshold && _this.executedLastChange_) {
        return;
      }

      var flexibleExpansionRatio = _this.getFlexibleExpansionRatio_(scrollTop);

      _this.updateToolbarFlexibleState_(flexibleExpansionRatio);

      if (_this.isFixedLastRow_) {
        _this.updateToolbarFixedState_(scrollTop);
      }

      if (_this.hasFlexibleFirstRow_) {
        _this.updateFlexibleRowElementStyles_(flexibleExpansionRatio);
      }

      _this.executedLastChange_ = hasScrolledOutOfThreshold;

      _this.adapter_.notifyChange({
        flexibleExpansionRatio: flexibleExpansionRatio
      });
    });
  };

  MDCToolbarFoundation.prototype.scrolledOutOfThreshold_ = function (scrollTop) {
    return scrollTop > this.calculations_.scrollThreshold;
  };

  MDCToolbarFoundation.prototype.initKeyRatio_ = function () {
    var toolbarRowHeight = this.getRowHeight_();
    var firstRowMaxRatio = this.adapter_.getFirstRowElementOffsetHeight() / toolbarRowHeight;
    this.calculations_.toolbarRatio = this.adapter_.getOffsetHeight() / toolbarRowHeight;
    this.calculations_.flexibleExpansionRatio = firstRowMaxRatio - 1;
    this.calculations_.maxTranslateYRatio = this.isFixedLastRow_ ? this.calculations_.toolbarRatio - firstRowMaxRatio : 0;
    this.calculations_.scrollThresholdRatio = (this.isFixedLastRow_ ? this.calculations_.toolbarRatio : firstRowMaxRatio) - 1;
  };

  MDCToolbarFoundation.prototype.getRowHeight_ = function () {
    var breakpoint = numbers.TOOLBAR_MOBILE_BREAKPOINT;
    return this.adapter_.getViewportWidth() < breakpoint ? numbers.TOOLBAR_ROW_MOBILE_HEIGHT : numbers.TOOLBAR_ROW_HEIGHT;
  };

  MDCToolbarFoundation.prototype.updateToolbarFlexibleState_ = function (flexibleExpansionRatio) {
    this.adapter_.removeClass(cssClasses.FLEXIBLE_MAX);
    this.adapter_.removeClass(cssClasses.FLEXIBLE_MIN);

    if (flexibleExpansionRatio === 1) {
      this.adapter_.addClass(cssClasses.FLEXIBLE_MAX);
    } else if (flexibleExpansionRatio === 0) {
      this.adapter_.addClass(cssClasses.FLEXIBLE_MIN);
    }
  };

  MDCToolbarFoundation.prototype.updateToolbarFixedState_ = function (scrollTop) {
    var translateDistance = Math.max(0, Math.min(scrollTop - this.calculations_.flexibleExpansionHeight, this.calculations_.maxTranslateYDistance));
    this.adapter_.setStyle('transform', "translateY(" + -translateDistance + "px)");

    if (translateDistance === this.calculations_.maxTranslateYDistance) {
      this.adapter_.addClass(cssClasses.FIXED_AT_LAST_ROW);
    } else {
      this.adapter_.removeClass(cssClasses.FIXED_AT_LAST_ROW);
    }
  };

  MDCToolbarFoundation.prototype.updateFlexibleRowElementStyles_ = function (flexibleExpansionRatio) {
    if (this.isFixed_) {
      var height = this.calculations_.flexibleExpansionHeight * flexibleExpansionRatio;
      this.adapter_.setStyleForFlexibleRowElement('height', height + this.calculations_.toolbarRowHeight + "px");
    }

    if (this.useFlexDefaultBehavior_) {
      this.updateElementStylesDefaultBehavior_(flexibleExpansionRatio);
    }
  };

  MDCToolbarFoundation.prototype.updateElementStylesDefaultBehavior_ = function (flexibleExpansionRatio) {
    var maxTitleSize = numbers.MAX_TITLE_SIZE;
    var minTitleSize = numbers.MIN_TITLE_SIZE;
    var currentTitleSize = (maxTitleSize - minTitleSize) * flexibleExpansionRatio + minTitleSize;
    this.adapter_.setStyleForTitleElement('font-size', currentTitleSize + "rem");
  };

  return MDCToolbarFoundation;
}(MDCFoundation);

//
var script = {
  name: 'mdc-toolbar',
  props: {
    fixed: Boolean,
    waterfall: Boolean,
    'fixed-lastrow': Boolean,
    flexible: Boolean,
    'flexible-default': {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      rootClasses: {
        'mdc-toolbar': true,
        'mdc-toolbar--fixed': this.fixed || this.waterfall || this.fixedLastrow,
        'mdc-toolbar--waterfall': this.waterfall,
        'mdc-toolbar--fixed-lastrow-only': this.fixedLastrow,
        'mdc-toolbar--flexible': this.flexible,
        'mdc-toolbar--flexible-default-behavior': this.flexible && this.flexibleDefault
      },
      rootStyles: {},
      adjustStyles: {// to avoid top margin collapse with :after el
        // 0.1 px should be rounded to 0px
        // TODO: find a better trick
        // height: '0.1px'
      },
      foundation: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCToolbarFoundation({
      addClass: function addClass(className) {
        _this.$set(_this.rootClasses, className, true);
      },
      removeClass: function removeClass(className) {
        _this.$delete(_this.rootClasses, className);
      },
      hasClass: function hasClass(className) {
        return _this.$refs.root.classList.contains(className);
      },
      registerScrollHandler: function registerScrollHandler(handler) {
        window.addEventListener('scroll', handler);
      },
      deregisterScrollHandler: function deregisterScrollHandler(handler) {
        window.removeEventListener('scroll', handler);
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        window.removeEventListener('resize', handler);
      },
      getViewportWidth: function getViewportWidth() {
        return window.innerWidth;
      },
      getViewportScrollY: function getViewportScrollY() {
        return window.pageYOffset;
      },
      getOffsetHeight: function getOffsetHeight() {
        return _this.$refs.root.offsetHeight;
      },
      getFirstRowElementOffsetHeight: function getFirstRowElementOffsetHeight() {
        var el = _this.$refs.root.querySelector(MDCToolbarFoundation.strings.FIRST_ROW_SELECTOR);

        return el ? el.offsetHeight : undefined;
      },
      notifyChange: function notifyChange(evtData) {
        _this.$emit('change', evtData);
      },
      setStyle: function setStyle(property, value) {
        _this.$set(_this.rootStyles, property, value);
      },
      setStyleForTitleElement: function setStyleForTitleElement(property, value) {
        var el = _this.$refs.root.querySelector(MDCToolbarFoundation.strings.TITLE_SELECTOR);

        if (el) el.style.setProperty(property, value);
      },
      setStyleForFlexibleRowElement: function setStyleForFlexibleRowElement(property, value) {
        var el = _this.$refs.root.querySelector(MDCToolbarFoundation.strings.FIRST_ROW_SELECTOR);

        if (el) el.style.setProperty(property, value);
      },
      setStyleForFixedAdjustElement: function setStyleForFixedAdjustElement(property, value) {
        _this.$set(_this.adjustStyles, property, value);
      }
    });
    this.foundation.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
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
  return _c("header", { staticClass: "mdc-toolbar-wrapper" }, [
    _c(
      "div",
      { ref: "root", class: _vm.rootClasses, style: _vm.rootStyles },
      [_vm._t("default")],
      2
    ),
    _vm._v(" "),
    _vm.fixed || _vm.waterfall || _vm.fixedLastrow
      ? _c("div", {
          ref: "fixed-adjust",
          staticClass: "mdc-toolbar-fixed-adjust",
          style: _vm.adjustStyles
        })
      : _vm._e()
  ])
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
  

  
  var mdcToolbar = normalizeComponent_1(
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
//
//
//
//
//
var script$1 = {
  name: 'mdc-toolbar-row'
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "mdc-toolbar-row mdc-toolbar__row" },
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
  

  
  var mdcToolbarRow = normalizeComponent_1(
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
//
//
//
//
var script$2 = {
  name: 'mdc-toolbar-section',
  props: {
    'align-start': Boolean,
    'align-end': Boolean,
    'shrink-to-fit': Boolean
  },
  data: function data() {
    return {
      classes: {
        'mdc-toolbar__section--align-start': this.alignStart,
        'mdc-toolbar__section--align-end': this.alignEnd,
        'mdc-toolbar__section--shrink-to-fit': this.shrinkToFit
      }
    };
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
    "section",
    {
      staticClass: "mdc-toolbar-section mdc-toolbar__section",
      class: _vm.classes
    },
    [_vm._t("default")],
    2
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
  

  
  var mdcToolbarSection = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

//
var script$3 = {
  name: 'mdc-toolbar-menu-icon',
  mixins: [DispatchEventMixin],
  props: {
    icon: {
      type: String,
      default: 'menu'
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
    "a",
    _vm._g(
      {
        staticClass: "mdc-toolbar-menu-icon mdc-toolbar__menu-icon",
        class: { "material-icons": !!_vm.icon }
      },
      _vm.listeners
    ),
    [_vm._t("default", [_vm._v(_vm._s(_vm.icon))])],
    2
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
  

  
  var mdcToolbarMenuIcon = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

//
var script$4 = {
  name: 'mdc-toolbar-title',
  mixins: [DispatchEventMixin]
};

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "a",
    _vm._g(
      { staticClass: "mdc-toolbar-title mdc-toolbar__title" },
      _vm.listeners
    ),
    [_vm._t("default")],
    2
  )
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
  

  
  var mdcToolbarTitle = normalizeComponent_1(
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
  name: 'mdc-toolbar-icon',
  mixins: [DispatchEventMixin],
  props: {
    icon: String
  }
};

/* script */
const __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "a",
    _vm._g(
      {
        staticClass: "mdc-toolbar-icon mdc-toolbar__icon",
        class: { "material-icons": !!_vm.icon }
      },
      _vm.listeners
    ),
    [_vm._t("default", [_vm._v(_vm._s(_vm.icon))])],
    2
  )
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
  

  
  var mdcToolbarIcon = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    undefined,
    undefined
  );

var index = BasePlugin({
  mdcToolbar: mdcToolbar,
  mdcToolbarRow: mdcToolbarRow,
  mdcToolbarSection: mdcToolbarSection,
  mdcToolbarMenuIcon: mdcToolbarMenuIcon,
  mdcToolbarTitle: mdcToolbarTitle,
  mdcToolbarIcon: mdcToolbarIcon
});

export default index;
export { mdcToolbar, mdcToolbarRow, mdcToolbarSection, mdcToolbarMenuIcon, mdcToolbarTitle, mdcToolbarIcon };
//# sourceMappingURL=index.js.map
