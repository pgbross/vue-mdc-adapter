/**
* @module vue-mdc-adaptertabs 0.19.0-beta
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
      element = context.parent.$root.$options.components['router-link'];
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
 * Adapter for MDC Tab.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Tab  into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */

var MDCTabAdapter =
/*#__PURE__*/
function () {
  function MDCTabAdapter() {
    _classCallCheck(this, MDCTabAdapter);
  }

  _createClass(MDCTabAdapter, [{
    key: "addClass",

    /**
     * Adds the given className to the root element.
     * @param {string} className The className to add
     */
    value: function addClass(className) {}
    /**
     * Removes the given className from the root element.
     * @param {string} className The className to remove
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}
    /**
     * Returns whether the root element has the given className.
     * @param {string} className The className to remove
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}
    /**
     * Sets the given attrName of the root element to the given value.
     * @param {string} attr The attribute name to set
     * @param {string} value The value so give the attribute
     */

  }, {
    key: "setAttr",
    value: function setAttr(attr, value) {}
    /**
     * Activates the indicator element.
     * @param {!ClientRect=} previousIndicatorClientRect The client rect of the previously activated indicator
     */

  }, {
    key: "activateIndicator",
    value: function activateIndicator(previousIndicatorClientRect) {}
    /** Deactivates the indicator. */

  }, {
    key: "deactivateIndicator",
    value: function deactivateIndicator() {}
    /**
     * Emits the MDCTab:interacted event for use by parent components
     */

  }, {
    key: "notifyInteracted",
    value: function notifyInteracted() {}
    /**
     * Returns the offsetLeft value of the root element.
     * @return {number}
     */

  }, {
    key: "getOffsetLeft",
    value: function getOffsetLeft() {}
    /**
     * Returns the offsetWidth value of the root element.
     * @return {number}
     */

  }, {
    key: "getOffsetWidth",
    value: function getOffsetWidth() {}
    /**
     * Returns the offsetLeft of the content element.
     * @return {number}
     */

  }, {
    key: "getContentOffsetLeft",
    value: function getContentOffsetLeft() {}
    /**
     * Returns the offsetWidth of the content element.
     * @return {number}
     */

  }, {
    key: "getContentOffsetWidth",
    value: function getContentOffsetWidth() {}
    /**
     * Applies focus to the root element
     */

  }, {
    key: "focus",
    value: function focus() {}
  }]);

  return MDCTabAdapter;
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
  ACTIVE: 'mdc-tab--active'
};
/** @enum {string} */

var strings = {
  ARIA_SELECTED: 'aria-selected',
  RIPPLE_SELECTOR: '.mdc-tab__ripple',
  CONTENT_SELECTOR: '.mdc-tab__content',
  TAB_INDICATOR_SELECTOR: '.mdc-tab-indicator',
  TABINDEX: 'tabIndex',
  INTERACTED_EVENT: 'MDCTab:interacted'
};

/**
 * @extends {MDCFoundation<!MDCTabAdapter>}
 * @final
 */

var MDCTabFoundation =
/*#__PURE__*/
function (_MDCFoundation) {
  _inherits(MDCTabFoundation, _MDCFoundation);

  _createClass(MDCTabFoundation, null, [{
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
     * @see MDCTabAdapter for typing information
     * @return {!MDCTabAdapter}
     */

  }, {
    key: "defaultAdapter",
    get: function get() {
      return (
        /** @type {!MDCTabAdapter} */
        {
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          setAttr: function setAttr() {},
          activateIndicator: function activateIndicator() {},
          deactivateIndicator: function deactivateIndicator() {},
          notifyInteracted: function notifyInteracted() {},
          getOffsetLeft: function getOffsetLeft() {},
          getOffsetWidth: function getOffsetWidth() {},
          getContentOffsetLeft: function getContentOffsetLeft() {},
          getContentOffsetWidth: function getContentOffsetWidth() {},
          focus: function focus() {}
        }
      );
    }
    /** @param {!MDCTabAdapter} adapter */

  }]);

  function MDCTabFoundation(adapter) {
    var _this;

    _classCallCheck(this, MDCTabFoundation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCTabFoundation).call(this, _extends(MDCTabFoundation.defaultAdapter, adapter)));
    /** @private {boolean} */

    _this.focusOnActivate_ = true;
    return _this;
  }
  /**
   * Handles the "click" event
   */


  _createClass(MDCTabFoundation, [{
    key: "handleClick",
    value: function handleClick() {
      // It's up to the parent component to keep track of the active Tab and
      // ensure we don't activate a Tab that's already active.
      this.adapter_.notifyInteracted();
    }
    /**
     * Returns the Tab's active state
     * @return {boolean}
     */

  }, {
    key: "isActive",
    value: function isActive() {
      return this.adapter_.hasClass(cssClasses.ACTIVE);
    }
    /**
     * Sets whether the tab should focus itself when activated
     * @param {boolean} focusOnActivate
     */

  }, {
    key: "setFocusOnActivate",
    value: function setFocusOnActivate(focusOnActivate) {
      this.focusOnActivate_ = focusOnActivate;
    }
    /**
     * Activates the Tab
     * @param {!ClientRect=} previousIndicatorClientRect
     */

  }, {
    key: "activate",
    value: function activate(previousIndicatorClientRect) {
      this.adapter_.addClass(cssClasses.ACTIVE);
      this.adapter_.setAttr(strings.ARIA_SELECTED, 'true');
      this.adapter_.setAttr(strings.TABINDEX, '0');
      this.adapter_.activateIndicator(previousIndicatorClientRect);

      if (this.focusOnActivate_) {
        this.adapter_.focus();
      }
    }
    /**
     * Deactivates the Tab
     */

  }, {
    key: "deactivate",
    value: function deactivate() {
      // Early exit
      if (!this.isActive()) {
        return;
      }

      this.adapter_.removeClass(cssClasses.ACTIVE);
      this.adapter_.setAttr(strings.ARIA_SELECTED, 'false');
      this.adapter_.setAttr(strings.TABINDEX, '-1');
      this.adapter_.deactivateIndicator();
    }
    /**
     * Returns the dimensions of the Tab
     * @return {!MDCTabDimensions}
     */

  }, {
    key: "computeDimensions",
    value: function computeDimensions() {
      var rootWidth = this.adapter_.getOffsetWidth();
      var rootLeft = this.adapter_.getOffsetLeft();
      var contentWidth = this.adapter_.getContentOffsetWidth();
      var contentLeft = this.adapter_.getContentOffsetLeft();
      return {
        rootLeft: rootLeft,
        rootRight: rootLeft + rootWidth,
        contentLeft: rootLeft + contentLeft,
        contentRight: rootLeft + contentLeft + contentWidth
      };
    }
  }]);

  return MDCTabFoundation;
}(MDCFoundation);

//
var script = {
  name: 'mdc-tab',
  mixins: [CustomLinkMixin, DispatchEventMixin],
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
          tab: _this
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
script.__file = "/ddata/extra/vma/components/tabs/mdc-tab.vue";

/* template */
var __vue_render__ = function() {
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
  

  
  var mdcTab = normalizeComponent(
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

/** @enum {string} */
var strings$1 = {
  TAB_ACTIVATED_EVENT: 'MDCTabBar:activated',
  TAB_SCROLLER_SELECTOR: '.mdc-tab-scroller',
  TAB_SELECTOR: '.mdc-tab',
  ARROW_LEFT_KEY: 'ArrowLeft',
  ARROW_RIGHT_KEY: 'ArrowRight',
  END_KEY: 'End',
  HOME_KEY: 'Home',
  ENTER_KEY: 'Enter',
  SPACE_KEY: 'Space'
};
/** @enum {number} */

var numbers = {
  EXTRA_SCROLL_AMOUNT: 20,
  ARROW_LEFT_KEYCODE: 37,
  ARROW_RIGHT_KEYCODE: 39,
  END_KEYCODE: 35,
  HOME_KEYCODE: 36,
  ENTER_KEYCODE: 13,
  SPACE_KEYCODE: 32
};

/* eslint-enable no-unused-vars */

/**
 * Adapter for MDC Tab Bar.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Tab Bar into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */

var MDCTabBarAdapter =
/*#__PURE__*/
function () {
  function MDCTabBarAdapter() {
    _classCallCheck(this, MDCTabBarAdapter);
  }

  _createClass(MDCTabBarAdapter, [{
    key: "scrollTo",

    /**
     * Scrolls to the given position
     * @param {number} scrollX The position to scroll to
     */
    value: function scrollTo(scrollX) {}
    /**
     * Increments the current scroll position by the given amount
     * @param {number} scrollXIncrement The amount to increment scroll
     */

  }, {
    key: "incrementScroll",
    value: function incrementScroll(scrollXIncrement) {}
    /**
     * Returns the current scroll position
     * @return {number}
     */

  }, {
    key: "getScrollPosition",
    value: function getScrollPosition() {}
    /**
     * Returns the width of the scroll content
     * @return {number}
     */

  }, {
    key: "getScrollContentWidth",
    value: function getScrollContentWidth() {}
    /**
     * Returns the root element's offsetWidth
     * @return {number}
     */

  }, {
    key: "getOffsetWidth",
    value: function getOffsetWidth() {}
    /**
     * Returns if the Tab Bar language direction is RTL
     * @return {boolean}
     */

  }, {
    key: "isRTL",
    value: function isRTL() {}
    /**
     * Sets the tab at the given index to be activated
     * @param {number} index The index of the tab to activate
     */

  }, {
    key: "setActiveTab",
    value: function setActiveTab(index) {}
    /**
     * Activates the tab at the given index with the given client rect
     * @param {number} index The index of the tab to activate
     * @param {!ClientRect} clientRect The client rect of the previously active Tab Indicator
     */

  }, {
    key: "activateTabAtIndex",
    value: function activateTabAtIndex(index, clientRect) {}
    /**
     * Deactivates the tab at the given index
     * @param {number} index The index of the tab to deactivate
     */

  }, {
    key: "deactivateTabAtIndex",
    value: function deactivateTabAtIndex(index) {}
    /**
     * Focuses the tab at the given index
     * @param {number} index The index of the tab to focus
     */

  }, {
    key: "focusTabAtIndex",
    value: function focusTabAtIndex(index) {}
    /**
     * Returns the client rect of the tab's indicator
     * @param {number} index The index of the tab
     * @return {!ClientRect}
     */

  }, {
    key: "getTabIndicatorClientRectAtIndex",
    value: function getTabIndicatorClientRectAtIndex(index) {}
    /**
     * Returns the tab dimensions of the tab at the given index
     * @param {number} index The index of the tab
     * @return {!MDCTabDimensions}
     */

  }, {
    key: "getTabDimensionsAtIndex",
    value: function getTabDimensionsAtIndex(index) {}
    /**
     * Returns the length of the tab list
     * @return {number}
     */

  }, {
    key: "getTabListLength",
    value: function getTabListLength() {}
    /**
     * Returns the index of the previously active tab
     * @return {number}
     */

  }, {
    key: "getPreviousActiveTabIndex",
    value: function getPreviousActiveTabIndex() {}
    /**
     * Returns the index of the focused tab
     * @return {number}
     */

  }, {
    key: "getFocusedTabIndex",
    value: function getFocusedTabIndex() {}
    /**
     * Returns the index of the given tab
     * @param {string} id The ID of the tab whose index to determine
     * @return {number}
     */

  }, {
    key: "getIndexOfTabById",
    value: function getIndexOfTabById(id) {}
    /**
     * Emits the MDCTabBar:activated event
     * @param {number} index The index of the activated tab
     */

  }, {
    key: "notifyTabActivated",
    value: function notifyTabActivated(index) {}
  }]);

  return MDCTabBarAdapter;
}();

/* eslint-enable no-unused-vars */

/**
 * @type {Set<string>}
 */

var ACCEPTABLE_KEYS = new Set(); // IE11 has no support for new Set with iterable so we need to initialize this by hand

ACCEPTABLE_KEYS.add(strings$1.ARROW_LEFT_KEY);
ACCEPTABLE_KEYS.add(strings$1.ARROW_RIGHT_KEY);
ACCEPTABLE_KEYS.add(strings$1.END_KEY);
ACCEPTABLE_KEYS.add(strings$1.HOME_KEY);
ACCEPTABLE_KEYS.add(strings$1.ENTER_KEY);
ACCEPTABLE_KEYS.add(strings$1.SPACE_KEY);
/**
 * @type {Map<number, string>}
 */

var KEYCODE_MAP = new Map(); // IE11 has no support for new Map with iterable so we need to initialize this by hand

KEYCODE_MAP.set(numbers.ARROW_LEFT_KEYCODE, strings$1.ARROW_LEFT_KEY);
KEYCODE_MAP.set(numbers.ARROW_RIGHT_KEYCODE, strings$1.ARROW_RIGHT_KEY);
KEYCODE_MAP.set(numbers.END_KEYCODE, strings$1.END_KEY);
KEYCODE_MAP.set(numbers.HOME_KEYCODE, strings$1.HOME_KEY);
KEYCODE_MAP.set(numbers.ENTER_KEYCODE, strings$1.ENTER_KEY);
KEYCODE_MAP.set(numbers.SPACE_KEYCODE, strings$1.SPACE_KEY);
/**
 * @extends {MDCFoundation<!MDCTabBarAdapter>}
 * @final
 */

var MDCTabBarFoundation =
/*#__PURE__*/
function (_MDCFoundation) {
  _inherits(MDCTabBarFoundation, _MDCFoundation);

  _createClass(MDCTabBarFoundation, null, [{
    key: "strings",

    /** @return enum {string} */
    get: function get() {
      return strings$1;
    }
    /** @return enum {number} */

  }, {
    key: "numbers",
    get: function get() {
      return numbers;
    }
    /**
     * @see MDCTabBarAdapter for typing information
     * @return {!MDCTabBarAdapter}
     */

  }, {
    key: "defaultAdapter",
    get: function get() {
      return (
        /** @type {!MDCTabBarAdapter} */
        {
          scrollTo: function scrollTo() {},
          incrementScroll: function incrementScroll() {},
          getScrollPosition: function getScrollPosition() {},
          getScrollContentWidth: function getScrollContentWidth() {},
          getOffsetWidth: function getOffsetWidth() {},
          isRTL: function isRTL() {},
          setActiveTab: function setActiveTab() {},
          activateTabAtIndex: function activateTabAtIndex() {},
          deactivateTabAtIndex: function deactivateTabAtIndex() {},
          focusTabAtIndex: function focusTabAtIndex() {},
          getTabIndicatorClientRectAtIndex: function getTabIndicatorClientRectAtIndex() {},
          getTabDimensionsAtIndex: function getTabDimensionsAtIndex() {},
          getPreviousActiveTabIndex: function getPreviousActiveTabIndex() {},
          getFocusedTabIndex: function getFocusedTabIndex() {},
          getIndexOfTabById: function getIndexOfTabById() {},
          getTabListLength: function getTabListLength() {},
          notifyTabActivated: function notifyTabActivated() {}
        }
      );
    }
    /**
     * @param {!MDCTabBarAdapter} adapter
     * */

  }]);

  function MDCTabBarFoundation(adapter) {
    var _this;

    _classCallCheck(this, MDCTabBarFoundation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCTabBarFoundation).call(this, _extends(MDCTabBarFoundation.defaultAdapter, adapter)));
    /** @private {boolean} */

    _this.useAutomaticActivation_ = false;
    return _this;
  }
  /**
   * Switches between automatic and manual activation modes.
   * See https://www.w3.org/TR/wai-aria-practices/#tabpanel for examples.
   * @param {boolean} useAutomaticActivation
   */


  _createClass(MDCTabBarFoundation, [{
    key: "setUseAutomaticActivation",
    value: function setUseAutomaticActivation(useAutomaticActivation) {
      this.useAutomaticActivation_ = useAutomaticActivation;
    }
    /**
     * Activates the tab at the given index
     * @param {number} index
     */

  }, {
    key: "activateTab",
    value: function activateTab(index) {
      var previousActiveIndex = this.adapter_.getPreviousActiveTabIndex();

      if (!this.indexIsInRange_(index) || index === previousActiveIndex) {
        return;
      }

      this.adapter_.deactivateTabAtIndex(previousActiveIndex);
      this.adapter_.activateTabAtIndex(index, this.adapter_.getTabIndicatorClientRectAtIndex(previousActiveIndex));
      this.scrollIntoView(index);
      this.adapter_.notifyTabActivated(index);
    }
    /**
     * Handles the keydown event
     * @param {!Event} evt
     */

  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(evt) {
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
          var _index = this.determineTargetFromKey_(focusedTabIndex, key);

          this.adapter_.focusTabAtIndex(_index);
          this.scrollIntoView(_index);
        }
      }
    }
    /**
     * Handles the MDCTab:interacted event
     * @param {!Event} evt
     */

  }, {
    key: "handleTabInteraction",
    value: function handleTabInteraction(evt) {
      this.adapter_.setActiveTab(this.adapter_.getIndexOfTabById(evt.detail.tabId));
    }
    /**
     * Scrolls the tab at the given index into view
     * @param {number} index The tab index to make visible
     */

  }, {
    key: "scrollIntoView",
    value: function scrollIntoView(index) {
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
    }
    /**
     * Private method for determining the index of the destination tab based on what key was pressed
     * @param {number} origin The original index from which to determine the destination
     * @param {string} key The name of the key
     * @return {number}
     * @private
     */

  }, {
    key: "determineTargetFromKey_",
    value: function determineTargetFromKey_(origin, key) {
      var isRTL = this.isRTL_();
      var maxIndex = this.adapter_.getTabListLength() - 1;
      var shouldGoToEnd = key === strings$1.END_KEY;
      var shouldDecrement = key === strings$1.ARROW_LEFT_KEY && !isRTL || key === strings$1.ARROW_RIGHT_KEY && isRTL;
      var shouldIncrement = key === strings$1.ARROW_RIGHT_KEY && !isRTL || key === strings$1.ARROW_LEFT_KEY && isRTL;
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
    }
    /**
     * Calculates the scroll increment that will make the tab at the given index visible
     * @param {number} index The index of the tab
     * @param {number} nextIndex The index of the next tab
     * @param {number} scrollPosition The current scroll position
     * @param {number} barWidth The width of the Tab Bar
     * @return {number}
     * @private
     */

  }, {
    key: "calculateScrollIncrement_",
    value: function calculateScrollIncrement_(index, nextIndex, scrollPosition, barWidth) {
      var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
      var relativeContentLeft = nextTabDimensions.contentLeft - scrollPosition - barWidth;
      var relativeContentRight = nextTabDimensions.contentRight - scrollPosition;
      var leftIncrement = relativeContentRight - numbers.EXTRA_SCROLL_AMOUNT;
      var rightIncrement = relativeContentLeft + numbers.EXTRA_SCROLL_AMOUNT;

      if (nextIndex < index) {
        return Math.min(leftIncrement, 0);
      }

      return Math.max(rightIncrement, 0);
    }
    /**
     * Calculates the scroll increment that will make the tab at the given index visible in RTL
     * @param {number} index The index of the tab
     * @param {number} nextIndex The index of the next tab
     * @param {number} scrollPosition The current scroll position
     * @param {number} barWidth The width of the Tab Bar
     * @param {number} scrollContentWidth The width of the scroll content
     * @return {number}
     * @private
     */

  }, {
    key: "calculateScrollIncrementRTL_",
    value: function calculateScrollIncrementRTL_(index, nextIndex, scrollPosition, barWidth, scrollContentWidth) {
      var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
      var relativeContentLeft = scrollContentWidth - nextTabDimensions.contentLeft - scrollPosition;
      var relativeContentRight = scrollContentWidth - nextTabDimensions.contentRight - scrollPosition - barWidth;
      var leftIncrement = relativeContentRight + numbers.EXTRA_SCROLL_AMOUNT;
      var rightIncrement = relativeContentLeft - numbers.EXTRA_SCROLL_AMOUNT;

      if (nextIndex > index) {
        return Math.max(leftIncrement, 0);
      }

      return Math.min(rightIncrement, 0);
    }
    /**
     * Determines the index of the adjacent tab closest to either edge of the Tab Bar
     * @param {number} index The index of the tab
     * @param {!MDCTabDimensions} tabDimensions The dimensions of the tab
     * @param {number} scrollPosition The current scroll position
     * @param {number} barWidth The width of the tab bar
     * @return {number}
     * @private
     */

  }, {
    key: "findAdjacentTabIndexClosestToEdge_",
    value: function findAdjacentTabIndexClosestToEdge_(index, tabDimensions, scrollPosition, barWidth) {
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
    }
    /**
     * Determines the index of the adjacent tab closest to either edge of the Tab Bar in RTL
     * @param {number} index The index of the tab
     * @param {!MDCTabDimensions} tabDimensions The dimensions of the tab
     * @param {number} scrollPosition The current scroll position
     * @param {number} barWidth The width of the tab bar
     * @param {number} scrollContentWidth The width of the scroller content
     * @return {number}
     * @private
     */

  }, {
    key: "findAdjacentTabIndexClosestToEdgeRTL_",
    value: function findAdjacentTabIndexClosestToEdgeRTL_(index, tabDimensions, scrollPosition, barWidth, scrollContentWidth) {
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
    }
    /**
     * Returns the key associated with a keydown event
     * @param {!Event} evt The keydown event
     * @return {string}
     * @private
     */

  }, {
    key: "getKeyFromEvent_",
    value: function getKeyFromEvent_(evt) {
      if (ACCEPTABLE_KEYS.has(evt.key)) {
        return evt.key;
      }

      return KEYCODE_MAP.get(evt.keyCode);
    }
  }, {
    key: "isActivationKey_",
    value: function isActivationKey_(key) {
      return key === strings$1.SPACE_KEY || key === strings$1.ENTER_KEY;
    }
    /**
     * Returns whether a given index is inclusively between the ends
     * @param {number} index The index to test
     * @private
     */

  }, {
    key: "indexIsInRange_",
    value: function indexIsInRange_(index) {
      return index >= 0 && index < this.adapter_.getTabListLength();
    }
    /**
     * Returns the view's RTL property
     * @return {boolean}
     * @private
     */

  }, {
    key: "isRTL_",
    value: function isRTL_() {
      return this.adapter_.isRTL();
    }
    /**
     * Scrolls the tab at the given index into view for left-to-right useragents
     * @param {number} index The index of the tab to scroll into view
     * @private
     */

  }, {
    key: "scrollIntoView_",
    value: function scrollIntoView_(index) {
      var scrollPosition = this.adapter_.getScrollPosition();
      var barWidth = this.adapter_.getOffsetWidth();
      var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
      var nextIndex = this.findAdjacentTabIndexClosestToEdge_(index, tabDimensions, scrollPosition, barWidth);

      if (!this.indexIsInRange_(nextIndex)) {
        return;
      }

      var scrollIncrement = this.calculateScrollIncrement_(index, nextIndex, scrollPosition, barWidth);
      this.adapter_.incrementScroll(scrollIncrement);
    }
    /**
     * Scrolls the tab at the given index into view in RTL
     * @param {number} index The tab index to make visible
     * @private
     */

  }, {
    key: "scrollIntoViewRTL_",
    value: function scrollIntoViewRTL_(index) {
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
    }
  }]);

  return MDCTabBarFoundation;
}(MDCFoundation);

var script$1 = {
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
      getIndexOfTab: function getIndexOfTab(tabToFind) {
        return _this.tabList.indexOf(tabToFind);
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
        }
      });
    }
  },
  methods: {
    handleInteraction: function handleInteraction(evt) {
      this.foundation.handleTabInteraction(evt);
    }
  }
};

/* script */
const __vue_script__$1 = script$1;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$1.__file = "/ddata/extra/vma/components/tabs/mdc-tab-bar.vue";

/* template */
var __vue_render__$1 = function() {
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
  

  
  var mdcTabBar = normalizeComponent(
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

/** @enum {string} */
var cssClasses$1 = {
  ANIMATING: 'mdc-tab-scroller--animating',
  SCROLL_TEST: 'mdc-tab-scroller__test',
  SCROLL_AREA_SCROLL: 'mdc-tab-scroller__scroll-area--scroll'
};
/** @enum {string} */

var strings$2 = {
  AREA_SELECTOR: '.mdc-tab-scroller__scroll-area',
  CONTENT_SELECTOR: '.mdc-tab-scroller__scroll-content'
};

/**
 * Adapter for MDC Tab Scroller.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Tab  into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */

var MDCTabScrollerAdapter =
/*#__PURE__*/
function () {
  function MDCTabScrollerAdapter() {
    _classCallCheck(this, MDCTabScrollerAdapter);
  }

  _createClass(MDCTabScrollerAdapter, [{
    key: "addClass",

    /**
     * Adds the given className to the root element.
     * @param {string} className The className to add
     */
    value: function addClass(className) {}
    /**
     * Removes the given className from the root element.
     * @param {string} className The className to remove
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}
    /**
     * Adds the given className to the scroll area element.
     * @param {string} className The className to add
     */

  }, {
    key: "addScrollAreaClass",
    value: function addScrollAreaClass(className) {}
    /**
     * Returns whether the event target matches given className.
     * @param {EventTarget} evtTarget The event target
     * @param {string} selector The selector to check
     * @return {boolean}
     */

  }, {
    key: "eventTargetMatchesSelector",
    value: function eventTargetMatchesSelector(evtTarget, selector) {}
    /**
     * Sets a style property of the area element to the passed value.
     * @param {string} propName The style property name to set
     * @param {string} value The style property value
     */

  }, {
    key: "setScrollAreaStyleProperty",
    value: function setScrollAreaStyleProperty(propName, value) {}
    /**
     * Sets a style property of the content element to the passed value.
     * @param {string} propName The style property name to set
     * @param {string} value The style property value
     */

  }, {
    key: "setScrollContentStyleProperty",
    value: function setScrollContentStyleProperty(propName, value) {}
    /**
     * Returns the scroll content element's computed style value of the given css property `propertyName`.
     * We achieve this via `getComputedStyle(...).getPropertyValue(propertyName)`.
     * @param {string} propertyName
     * @return {string}
     */

  }, {
    key: "getScrollContentStyleValue",
    value: function getScrollContentStyleValue(propertyName) {}
    /**
     * Sets the scrollLeft value of the scroll area element to the passed value.
     * @param {number} scrollLeft The new scrollLeft value
     */

  }, {
    key: "setScrollAreaScrollLeft",
    value: function setScrollAreaScrollLeft(scrollLeft) {}
    /**
     * Returns the scrollLeft value of the scroll area element.
     * @return {number}
     */

  }, {
    key: "getScrollAreaScrollLeft",
    value: function getScrollAreaScrollLeft() {}
    /**
     * Returns the offsetWidth of the scroll content element.
     * @return {number}
     */

  }, {
    key: "getScrollContentOffsetWidth",
    value: function getScrollContentOffsetWidth() {}
    /**
     * Returns the offsetWitdth of the scroll area element.
     * @return {number}
     */

  }, {
    key: "getScrollAreaOffsetWidth",
    value: function getScrollAreaOffsetWidth() {}
    /**
     * Returns the bounding client rect of the scroll area element.
     * @return {!ClientRect}
     */

  }, {
    key: "computeScrollAreaClientRect",
    value: function computeScrollAreaClientRect() {}
    /**
     * Returns the bounding client rect of the scroll content element.
     * @return {!ClientRect}
     */

  }, {
    key: "computeScrollContentClientRect",
    value: function computeScrollContentClientRect() {}
    /**
     * Returns the height of the browser's horizontal scrollbars (in px).
     * @return {number}
     */

  }, {
    key: "computeHorizontalScrollbarHeight",
    value: function computeHorizontalScrollbarHeight() {}
  }]);

  return MDCTabScrollerAdapter;
}();

/* eslint-enable no-unused-vars */

/**
 * @abstract
 */

var MDCTabScrollerRTL =
/*#__PURE__*/
function () {
  /** @param {!MDCTabScrollerAdapter} adapter */
  function MDCTabScrollerRTL(adapter) {
    _classCallCheck(this, MDCTabScrollerRTL);

    /** @private */
    this.adapter_ = adapter;
  }
  /**
   * @param {number} translateX The current translateX position
   * @return {number}
   * @abstract
   */


  _createClass(MDCTabScrollerRTL, [{
    key: "getScrollPositionRTL",
    value: function getScrollPositionRTL(translateX) {}
    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     * @abstract
     */

  }, {
    key: "scrollToRTL",
    value: function scrollToRTL(scrollX) {}
    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     * @abstract
     */

  }, {
    key: "incrementScrollRTL",
    value: function incrementScrollRTL(scrollX) {}
    /**
     * @param {number} scrollX The current scrollX position
     * @param {number} translateX The current translateX position
     * @return {number}
     * @abstract
     */

  }, {
    key: "getAnimatingScrollPosition",
    value: function getAnimatingScrollPosition(scrollX, translateX) {}
  }]);

  return MDCTabScrollerRTL;
}();

/* eslint-enable no-unused-vars */

/**
 * @extends {MDCTabScrollerRTL}
 * @final
 */

var MDCTabScrollerRTLDefault =
/*#__PURE__*/
function (_MDCTabScrollerRTL) {
  _inherits(MDCTabScrollerRTLDefault, _MDCTabScrollerRTL);

  function MDCTabScrollerRTLDefault() {
    _classCallCheck(this, MDCTabScrollerRTLDefault);

    return _possibleConstructorReturn(this, _getPrototypeOf(MDCTabScrollerRTLDefault).apply(this, arguments));
  }

  _createClass(MDCTabScrollerRTLDefault, [{
    key: "getScrollPositionRTL",

    /**
     * @return {number}
     */
    value: function getScrollPositionRTL() {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();

      var _this$calculateScroll = this.calculateScrollEdges_(),
          right = _this$calculateScroll.right; // Scroll values on most browsers are ints instead of floats so we round


      return Math.round(right - currentScrollLeft);
    }
    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     */

  }, {
    key: "scrollToRTL",
    value: function scrollToRTL(scrollX) {
      var edges = this.calculateScrollEdges_();
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(edges.right - scrollX);
      return (
        /** @type {!MDCTabScrollerAnimation} */
        {
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: clampedScrollLeft - currentScrollLeft
        }
      );
    }
    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     */

  }, {
    key: "incrementScrollRTL",
    value: function incrementScrollRTL(scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
      return (
        /** @type {!MDCTabScrollerAnimation} */
        {
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: clampedScrollLeft - currentScrollLeft
        }
      );
    }
    /**
     * @param {number} scrollX
     * @return {number}
     */

  }, {
    key: "getAnimatingScrollPosition",
    value: function getAnimatingScrollPosition(scrollX) {
      return scrollX;
    }
    /**
     * @return {!MDCTabScrollerHorizontalEdges}
     * @private
     */

  }, {
    key: "calculateScrollEdges_",
    value: function calculateScrollEdges_() {
      var contentWidth = this.adapter_.getScrollContentOffsetWidth();
      var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
      return (
        /** @type {!MDCTabScrollerHorizontalEdges} */
        {
          left: 0,
          right: contentWidth - rootWidth
        }
      );
    }
    /**
     * @param {number} scrollX
     * @return {number}
     * @private
     */

  }, {
    key: "clampScrollValue_",
    value: function clampScrollValue_(scrollX) {
      var edges = this.calculateScrollEdges_();
      return Math.min(Math.max(edges.left, scrollX), edges.right);
    }
  }]);

  return MDCTabScrollerRTLDefault;
}(MDCTabScrollerRTL);

/* eslint-enable no-unused-vars */

/**
 * @extends {MDCTabScrollerRTL}
 * @final
 */

var MDCTabScrollerRTLNegative =
/*#__PURE__*/
function (_MDCTabScrollerRTL) {
  _inherits(MDCTabScrollerRTLNegative, _MDCTabScrollerRTL);

  function MDCTabScrollerRTLNegative() {
    _classCallCheck(this, MDCTabScrollerRTLNegative);

    return _possibleConstructorReturn(this, _getPrototypeOf(MDCTabScrollerRTLNegative).apply(this, arguments));
  }

  _createClass(MDCTabScrollerRTLNegative, [{
    key: "getScrollPositionRTL",

    /**
     * @param {number} translateX The current translateX position
     * @return {number}
     */
    value: function getScrollPositionRTL(translateX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      return Math.round(translateX - currentScrollLeft);
    }
    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     */

  }, {
    key: "scrollToRTL",
    value: function scrollToRTL(scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(-scrollX);
      return (
        /** @type {!MDCTabScrollerAnimation} */
        {
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: clampedScrollLeft - currentScrollLeft
        }
      );
    }
    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     */

  }, {
    key: "incrementScrollRTL",
    value: function incrementScrollRTL(scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
      return (
        /** @type {!MDCTabScrollerAnimation} */
        {
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: clampedScrollLeft - currentScrollLeft
        }
      );
    }
    /**
     * @param {number} scrollX
     * @param {number} translateX
     * @return {number}
     */

  }, {
    key: "getAnimatingScrollPosition",
    value: function getAnimatingScrollPosition(scrollX, translateX) {
      return scrollX - translateX;
    }
    /**
     * @return {!MDCTabScrollerHorizontalEdges}
     * @private
     */

  }, {
    key: "calculateScrollEdges_",
    value: function calculateScrollEdges_() {
      var contentWidth = this.adapter_.getScrollContentOffsetWidth();
      var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
      return (
        /** @type {!MDCTabScrollerHorizontalEdges} */
        {
          left: rootWidth - contentWidth,
          right: 0
        }
      );
    }
    /**
     * @param {number} scrollX
     * @return {number}
     * @private
     */

  }, {
    key: "clampScrollValue_",
    value: function clampScrollValue_(scrollX) {
      var edges = this.calculateScrollEdges_();
      return Math.max(Math.min(edges.right, scrollX), edges.left);
    }
  }]);

  return MDCTabScrollerRTLNegative;
}(MDCTabScrollerRTL);

/* eslint-enable no-unused-vars */

/**
 * @extends {MDCTabScrollerRTL}
 * @final
 */

var MDCTabScrollerRTLReverse =
/*#__PURE__*/
function (_MDCTabScrollerRTL) {
  _inherits(MDCTabScrollerRTLReverse, _MDCTabScrollerRTL);

  function MDCTabScrollerRTLReverse() {
    _classCallCheck(this, MDCTabScrollerRTLReverse);

    return _possibleConstructorReturn(this, _getPrototypeOf(MDCTabScrollerRTLReverse).apply(this, arguments));
  }

  _createClass(MDCTabScrollerRTLReverse, [{
    key: "getScrollPositionRTL",

    /**
     * @param {number} translateX
     * @return {number}
     */
    value: function getScrollPositionRTL(translateX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft(); // Scroll values on most browsers are ints instead of floats so we round

      return Math.round(currentScrollLeft - translateX);
    }
    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     */

  }, {
    key: "scrollToRTL",
    value: function scrollToRTL(scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(scrollX);
      return (
        /** @type {!MDCTabScrollerAnimation} */
        {
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: currentScrollLeft - clampedScrollLeft
        }
      );
    }
    /**
     * @param {number} scrollX
     * @return {!MDCTabScrollerAnimation}
     */

  }, {
    key: "incrementScrollRTL",
    value: function incrementScrollRTL(scrollX) {
      var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
      var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft + scrollX);
      return (
        /** @type {!MDCTabScrollerAnimation} */
        {
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: currentScrollLeft - clampedScrollLeft
        }
      );
    }
    /**
     * @param {number} scrollX
     * @return {number}
     */

  }, {
    key: "getAnimatingScrollPosition",
    value: function getAnimatingScrollPosition(scrollX, translateX) {
      return scrollX + translateX;
    }
    /**
     * @return {!MDCTabScrollerHorizontalEdges}
     * @private
     */

  }, {
    key: "calculateScrollEdges_",
    value: function calculateScrollEdges_() {
      var contentWidth = this.adapter_.getScrollContentOffsetWidth();
      var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
      return (
        /** @type {!MDCTabScrollerHorizontalEdges} */
        {
          left: contentWidth - rootWidth,
          right: 0
        }
      );
    }
    /**
     * @param {number} scrollX
     * @return {number}
     * @private
     */

  }, {
    key: "clampScrollValue_",
    value: function clampScrollValue_(scrollX) {
      var edges = this.calculateScrollEdges_();
      return Math.min(Math.max(edges.right, scrollX), edges.left);
    }
  }]);

  return MDCTabScrollerRTLReverse;
}(MDCTabScrollerRTL);

/**
 * @extends {MDCFoundation<!MDCTabScrollerAdapter>}
 * @final
 */

var MDCTabScrollerFoundation =
/*#__PURE__*/
function (_MDCFoundation) {
  _inherits(MDCTabScrollerFoundation, _MDCFoundation);

  _createClass(MDCTabScrollerFoundation, null, [{
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
    /**
     * @see MDCTabScrollerAdapter for typing information
     * @return {!MDCTabScrollerAdapter}
     */

  }, {
    key: "defaultAdapter",
    get: function get() {
      return (
        /** @type {!MDCTabScrollerAdapter} */
        {
          eventTargetMatchesSelector: function eventTargetMatchesSelector() {},
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          addScrollAreaClass: function addScrollAreaClass() {},
          setScrollAreaStyleProperty: function setScrollAreaStyleProperty() {},
          setScrollContentStyleProperty: function setScrollContentStyleProperty() {},
          getScrollContentStyleValue: function getScrollContentStyleValue() {},
          setScrollAreaScrollLeft: function setScrollAreaScrollLeft() {},
          getScrollAreaScrollLeft: function getScrollAreaScrollLeft() {},
          getScrollContentOffsetWidth: function getScrollContentOffsetWidth() {},
          getScrollAreaOffsetWidth: function getScrollAreaOffsetWidth() {},
          computeScrollAreaClientRect: function computeScrollAreaClientRect() {},
          computeScrollContentClientRect: function computeScrollContentClientRect() {},
          computeHorizontalScrollbarHeight: function computeHorizontalScrollbarHeight() {}
        }
      );
    }
    /** @param {!MDCTabScrollerAdapter} adapter */

  }]);

  function MDCTabScrollerFoundation(adapter) {
    var _this;

    _classCallCheck(this, MDCTabScrollerFoundation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCTabScrollerFoundation).call(this, _extends(MDCTabScrollerFoundation.defaultAdapter, adapter)));
    /**
     * This boolean controls whether we should handle the transitionend and interaction events during the animation.
     * @private {boolean}
     */

    _this.isAnimating_ = false;
    /**
     * The MDCTabScrollerRTL instance varies per browser and allows us to encapsulate the peculiar browser behavior
     * of RTL scrolling in it's own class.
     * @private {?MDCTabScrollerRTL}
     */

    _this.rtlScrollerInstance_;
    return _this;
  }

  _createClass(MDCTabScrollerFoundation, [{
    key: "init",
    value: function init() {
      // Compute horizontal scrollbar height on scroller with overflow initially hidden, then update overflow to scroll
      // and immediately adjust bottom margin to avoid the scrollbar initially appearing before JS runs.
      var horizontalScrollbarHeight = this.adapter_.computeHorizontalScrollbarHeight();
      this.adapter_.setScrollAreaStyleProperty('margin-bottom', -horizontalScrollbarHeight + 'px');
      this.adapter_.addScrollAreaClass(MDCTabScrollerFoundation.cssClasses.SCROLL_AREA_SCROLL);
    }
    /**
     * Computes the current visual scroll position
     * @return {number}
     */

  }, {
    key: "getScrollPosition",
    value: function getScrollPosition() {
      if (this.isRTL_()) {
        return this.computeCurrentScrollPositionRTL_();
      }

      var currentTranslateX = this.calculateCurrentTranslateX_();
      var scrollLeft = this.adapter_.getScrollAreaScrollLeft();
      return scrollLeft - currentTranslateX;
    }
    /**
     * Handles interaction events that occur during transition
     */

  }, {
    key: "handleInteraction",
    value: function handleInteraction() {
      // Early exit if we aren't animating
      if (!this.isAnimating_) {
        return;
      } // Prevent other event listeners from handling this event


      this.stopScrollAnimation_();
    }
    /**
     * Handles the transitionend event
     * @param {!Event} evt
     */

  }, {
    key: "handleTransitionEnd",
    value: function handleTransitionEnd(evt) {
      // Early exit if we aren't animating or the event was triggered by a different element.
      if (!this.isAnimating_ || !this.adapter_.eventTargetMatchesSelector(evt.target, MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)) {
        return;
      }

      this.isAnimating_ = false;
      this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
    }
    /**
     * Increment the scroll value by the scrollXIncrement
     * @param {number} scrollXIncrement The value by which to increment the scroll position
     */

  }, {
    key: "incrementScroll",
    value: function incrementScroll(scrollXIncrement) {
      // Early exit for non-operational increment values
      if (scrollXIncrement === 0) {
        return;
      }

      if (this.isRTL_()) {
        return this.incrementScrollRTL_(scrollXIncrement);
      }

      this.incrementScroll_(scrollXIncrement);
    }
    /**
     * Scrolls to the given scrollX value
     * @param {number} scrollX
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(scrollX) {
      if (this.isRTL_()) {
        return this.scrollToRTL_(scrollX);
      }

      this.scrollTo_(scrollX);
    }
    /**
     * Returns the appropriate version of the MDCTabScrollerRTL
     * @return {!MDCTabScrollerRTL}
     */

  }, {
    key: "getRTLScroller",
    value: function getRTLScroller() {
      if (!this.rtlScrollerInstance_) {
        this.rtlScrollerInstance_ = this.rtlScrollerFactory_();
      }

      return this.rtlScrollerInstance_;
    }
    /**
     * Returns the translateX value from a CSS matrix transform function string
     * @return {number}
     * @private
     */

  }, {
    key: "calculateCurrentTranslateX_",
    value: function calculateCurrentTranslateX_() {
      var transformValue = this.adapter_.getScrollContentStyleValue('transform'); // Early exit if no transform is present

      if (transformValue === 'none') {
        return 0;
      } // The transform value comes back as a matrix transformation in the form
      // of `matrix(a, b, c, d, tx, ty)`. We only care about tx (translateX) so
      // we're going to grab all the parenthesized values, strip out tx, and
      // parse it.


      var results = /\((.+)\)/.exec(transformValue)[1];
      var parts = results.split(',');
      return parseFloat(parts[4]);
    }
    /**
     * Calculates a safe scroll value that is > 0 and < the max scroll value
     * @param {number} scrollX The distance to scroll
     * @return {number}
     * @private
     */

  }, {
    key: "clampScrollValue_",
    value: function clampScrollValue_(scrollX) {
      var edges = this.calculateScrollEdges_();
      return Math.min(Math.max(edges.left, scrollX), edges.right);
    }
    /**
     * @return {number}
     * @private
     */

  }, {
    key: "computeCurrentScrollPositionRTL_",
    value: function computeCurrentScrollPositionRTL_() {
      var translateX = this.calculateCurrentTranslateX_();
      return this.getRTLScroller().getScrollPositionRTL(translateX);
    }
    /**
     * @return {!MDCTabScrollerHorizontalEdges}
     * @private
     */

  }, {
    key: "calculateScrollEdges_",
    value: function calculateScrollEdges_() {
      var contentWidth = this.adapter_.getScrollContentOffsetWidth();
      var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
      return (
        /** @type {!MDCTabScrollerHorizontalEdges} */
        {
          left: 0,
          right: contentWidth - rootWidth
        }
      );
    }
    /**
     * Internal scroll method
     * @param {number} scrollX The new scroll position
     * @private
     */

  }, {
    key: "scrollTo_",
    value: function scrollTo_(scrollX) {
      var currentScrollX = this.getScrollPosition();
      var safeScrollX = this.clampScrollValue_(scrollX);
      var scrollDelta = safeScrollX - currentScrollX;
      this.animate_(
      /** @type {!MDCTabScrollerAnimation} */
      {
        finalScrollPosition: safeScrollX,
        scrollDelta: scrollDelta
      });
    }
    /**
     * Internal RTL scroll method
     * @param {number} scrollX The new scroll position
     * @private
     */

  }, {
    key: "scrollToRTL_",
    value: function scrollToRTL_(scrollX) {
      var animation = this.getRTLScroller().scrollToRTL(scrollX);
      this.animate_(animation);
    }
    /**
     * Internal increment scroll method
     * @param {number} scrollX The new scroll position increment
     * @private
     */

  }, {
    key: "incrementScroll_",
    value: function incrementScroll_(scrollX) {
      var currentScrollX = this.getScrollPosition();
      var targetScrollX = scrollX + currentScrollX;
      var safeScrollX = this.clampScrollValue_(targetScrollX);
      var scrollDelta = safeScrollX - currentScrollX;
      this.animate_(
      /** @type {!MDCTabScrollerAnimation} */
      {
        finalScrollPosition: safeScrollX,
        scrollDelta: scrollDelta
      });
    }
    /**
     * Internal incremenet scroll RTL method
     * @param {number} scrollX The new scroll position RTL increment
     * @private
     */

  }, {
    key: "incrementScrollRTL_",
    value: function incrementScrollRTL_(scrollX) {
      var animation = this.getRTLScroller().incrementScrollRTL(scrollX);
      this.animate_(animation);
    }
    /**
     * Animates the tab scrolling
     * @param {!MDCTabScrollerAnimation} animation The animation to apply
     * @private
     */

  }, {
    key: "animate_",
    value: function animate_(animation) {
      var _this2 = this;

      // Early exit if translateX is 0, which means there's no animation to perform
      if (animation.scrollDelta === 0) {
        return;
      }

      this.stopScrollAnimation_(); // This animation uses the FLIP approach.
      // Read more here: https://aerotwist.com/blog/flip-your-animations/

      this.adapter_.setScrollAreaScrollLeft(animation.finalScrollPosition);
      this.adapter_.setScrollContentStyleProperty('transform', "translateX(".concat(animation.scrollDelta, "px)")); // Force repaint

      this.adapter_.computeScrollAreaClientRect();
      requestAnimationFrame(function () {
        _this2.adapter_.addClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);

        _this2.adapter_.setScrollContentStyleProperty('transform', 'none');
      });
      this.isAnimating_ = true;
    }
    /**
     * Stops scroll animation
     * @private
     */

  }, {
    key: "stopScrollAnimation_",
    value: function stopScrollAnimation_() {
      this.isAnimating_ = false;
      var currentScrollPosition = this.getAnimatingScrollPosition_();
      this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
      this.adapter_.setScrollContentStyleProperty('transform', 'translateX(0px)');
      this.adapter_.setScrollAreaScrollLeft(currentScrollPosition);
    }
    /**
     * Gets the current scroll position during animation
     * @return {number}
     * @private
     */

  }, {
    key: "getAnimatingScrollPosition_",
    value: function getAnimatingScrollPosition_() {
      var currentTranslateX = this.calculateCurrentTranslateX_();
      var scrollLeft = this.adapter_.getScrollAreaScrollLeft();

      if (this.isRTL_()) {
        return this.getRTLScroller().getAnimatingScrollPosition(scrollLeft, currentTranslateX);
      }

      return scrollLeft - currentTranslateX;
    }
    /**
     * Determines the RTL Scroller to use
     * @return {!MDCTabScrollerRTL}
     * @private
     */

  }, {
    key: "rtlScrollerFactory_",
    value: function rtlScrollerFactory_() {
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
    }
    /**
     * @return {boolean}
     * @private
     */

  }, {
    key: "isRTL_",
    value: function isRTL_() {
      return this.adapter_.getScrollContentStyleValue('direction') === 'rtl';
    }
  }]);

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
 * @private {number|undefined}
 */

var horizontalScrollbarHeight_;
/**
 * Computes the height of browser-rendered horizontal scrollbars using a self-created test element.
 * May return 0 (e.g. on OS X browsers under default configuration).
 * @param {!Document} documentObj
 * @param {boolean=} shouldCacheResult
 * @return {number}
 */

function computeHorizontalScrollbarHeight(documentObj) {
  var shouldCacheResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (shouldCacheResult && typeof horizontalScrollbarHeight_ !== 'undefined') {
    return horizontalScrollbarHeight_;
  }

  var el = documentObj.createElement('div');
  el.classList.add(cssClasses$1.SCROLL_TEST);
  documentObj.body.appendChild(el);
  var horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
  documentObj.body.removeChild(el);

  if (shouldCacheResult) {
    horizontalScrollbarHeight_ = horizontalScrollbarHeight;
  }

  return horizontalScrollbarHeight;
}
/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */


function getMatchesProperty(HTMLElementPrototype) {
  return ['msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

//
var script$2 = {
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
        var MATCHES = getMatchesProperty(HTMLElement.prototype);
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
      computeHorizontalScrollbarHeight: function computeHorizontalScrollbarHeight$$1() {
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
const __vue_script__$2 = script$2;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$2.__file = "/ddata/extra/vma/components/tabs/mdc-tab-scroller.vue";

/* template */
var __vue_render__$2 = function() {
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
  

  
  var mdcTabScroller = normalizeComponent(
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

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Tab Indicator.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Tab Indicator into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTabIndicatorAdapter =
/*#__PURE__*/
function () {
  function MDCTabIndicatorAdapter() {
    _classCallCheck(this, MDCTabIndicatorAdapter);
  }

  _createClass(MDCTabIndicatorAdapter, [{
    key: "addClass",

    /**
     * Adds the given className to the root element.
     * @param {string} className The className to add
     */
    value: function addClass(className) {}
    /**
     * Removes the given className from the root element.
     * @param {string} className The className to remove
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}
    /**
     * Returns the client rect of the content element.
     * @return {!ClientRect}
     */

  }, {
    key: "computeContentClientRect",
    value: function computeContentClientRect() {}
    /**
     * Sets a style property of the content element to the passed value
     * @param {string} propName The style property name to set
     * @param {string} value The style property value
     */

  }, {
    key: "setContentStyleProperty",
    value: function setContentStyleProperty(propName, value) {}
  }]);

  return MDCTabIndicatorAdapter;
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
var cssClasses$2 = {
  ACTIVE: 'mdc-tab-indicator--active',
  FADE: 'mdc-tab-indicator--fade',
  NO_TRANSITION: 'mdc-tab-indicator--no-transition'
};
/** @enum {string} */

var strings$3 = {
  CONTENT_SELECTOR: '.mdc-tab-indicator__content'
};

/**
 * @extends {MDCFoundation<!MDCTabIndicatorAdapter>}
 * @abstract
 */

var MDCTabIndicatorFoundation =
/*#__PURE__*/
function (_MDCFoundation) {
  _inherits(MDCTabIndicatorFoundation, _MDCFoundation);

  _createClass(MDCTabIndicatorFoundation, null, [{
    key: "cssClasses",

    /** @return enum {string} */
    get: function get() {
      return cssClasses$2;
    }
    /** @return enum {string} */

  }, {
    key: "strings",
    get: function get() {
      return strings$3;
    }
    /**
     * @see MDCTabIndicatorAdapter for typing information
     * @return {!MDCTabIndicatorAdapter}
     */

  }, {
    key: "defaultAdapter",
    get: function get() {
      return (
        /** @type {!MDCTabIndicatorAdapter} */
        {
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          computeContentClientRect: function computeContentClientRect() {},
          setContentStyleProperty: function setContentStyleProperty() {}
        }
      );
    }
    /** @param {!MDCTabIndicatorAdapter} adapter */

  }]);

  function MDCTabIndicatorFoundation(adapter) {
    _classCallCheck(this, MDCTabIndicatorFoundation);

    return _possibleConstructorReturn(this, _getPrototypeOf(MDCTabIndicatorFoundation).call(this, _extends(MDCTabIndicatorFoundation.defaultAdapter, adapter)));
  }
  /** @return {!ClientRect} */


  _createClass(MDCTabIndicatorFoundation, [{
    key: "computeContentClientRect",
    value: function computeContentClientRect() {
      return this.adapter_.computeContentClientRect();
    }
    /**
     * Activates the indicator
     * @param {!ClientRect=} previousIndicatorClientRect
     * @abstract
     */

  }, {
    key: "activate",
    value: function activate(previousIndicatorClientRect) {} // eslint-disable-line no-unused-vars

    /** @abstract */

  }, {
    key: "deactivate",
    value: function deactivate() {}
  }]);

  return MDCTabIndicatorFoundation;
}(MDCFoundation);

/**
 * @extends {MDCTabIndicatorFoundation}
 * @final
 */

var MDCSlidingTabIndicatorFoundation =
/*#__PURE__*/
function (_MDCTabIndicatorFound) {
  _inherits(MDCSlidingTabIndicatorFoundation, _MDCTabIndicatorFound);

  function MDCSlidingTabIndicatorFoundation() {
    _classCallCheck(this, MDCSlidingTabIndicatorFoundation);

    return _possibleConstructorReturn(this, _getPrototypeOf(MDCSlidingTabIndicatorFoundation).apply(this, arguments));
  }

  _createClass(MDCSlidingTabIndicatorFoundation, [{
    key: "activate",

    /** @param {!ClientRect=} previousIndicatorClientRect */
    value: function activate(previousIndicatorClientRect) {
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
      this.adapter_.setContentStyleProperty('transform', "translateX(".concat(xPosition, "px) scaleX(").concat(widthDelta, ")")); // Force repaint before updating classes and transform to ensure the transform properly takes effect

      this.computeContentClientRect();
      this.adapter_.removeClass(MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
      this.adapter_.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
      this.adapter_.setContentStyleProperty('transform', '');
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      this.adapter_.removeClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    }
  }]);

  return MDCSlidingTabIndicatorFoundation;
}(MDCTabIndicatorFoundation);

//
var script$3 = {
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
const __vue_script__$3 = script$3;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$3.__file = "/ddata/extra/vma/components/tabs/mdc-tab-indicator.vue";

/* template */
var __vue_render__$3 = function() {
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
  

  
  var mdcTabIndicator = normalizeComponent(
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
const __vue_script__$4 = script$4;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$4.__file = "/ddata/extra/vma/components/tabs/mdc-tab-ripple.vue";

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", {
    staticClass: "mdc-tab__ripple",
    class: _vm.classes,
    style: _vm.styles
  })
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
  

  
  var mdcTabRipple = normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );

var index = BasePlugin({
  mdcTab: mdcTab,
  mdcTabBar: mdcTabBar,
  mdcTabScroller: mdcTabScroller,
  mdcTabIndicator: mdcTabIndicator,
  mdcTabRipple: mdcTabRipple
});

export default index;
export { mdcTab, mdcTabBar, mdcTabScroller, mdcTabIndicator, mdcTabRipple };
//# sourceMappingURL=index.js.map
