/**
* @module vue-mdc-adapternotched-outline 0.19.2-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

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
var strings = {
  NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch'
};
/** @enum {number} */

var numbers = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
};
/** @enum {string} */

var cssClasses = {
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
      return strings;
    }
    /** @return enum {string} */

  }, {
    key: "cssClasses",
    get: function get() {
      return cssClasses;
    }
    /** @return enum {number} */

  }, {
    key: "numbers",
    get: function get() {
      return numbers;
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
        notchWidth += numbers.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
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
var script = {
  name: 'mdc-notched-outline',
  data: function data() {
    return {
      outlinedClasses: {
        'mdc-notched-outline': true
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCNotchedOutlineFoundation({
      addClass: function addClass(className) {
        _this.$set(_this.outlinedClasses, className, true);
      },
      removeClass: function removeClass(className) {
        _this.$delete(_this.outlinedClasses, className);
      },
      setNotchWidthProperty: function setNotchWidthProperty(width) {
        return _this.$refs.notchEl.style.setProperty('width', width + 'px');
      },
      removeNotchWidthProperty: function removeNotchWidthProperty() {
        return _this.$refs.notchEl.style.removeProperty('width');
      }
    });
    this.foundation.init();

    if (this.$slots.default) {
      // this.$refs.labelEl.style.transitionDuration = '0s'
      this.$set(this.outlinedClasses, MDCNotchedOutlineFoundation.cssClasses.OUTLINE_UPGRADED, true); // requestAnimationFrame(() => {
      //   this.$refs.labelEl.style.transitionDuration = ''
      // })
    } else {
      this.$set(this.outlinedClasses, MDCNotchedOutlineFoundation.cssClasses.NO_LABEL, true);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var foundation = this.foundation;
    this.foundation = null;
    foundation.destroy();
  },
  methods: {
    notch: function notch(notchWidth) {
      this.foundation.notch(notchWidth);
    },
    closeNotch: function closeNotch() {
      this.foundation.closeNotch();
    },
    float: function float(shouldFloat) {
      this.$refs.labelEl && this.$refs.labelEl.float(shouldFloat);
    },
    shake: function shake(shouldShake) {
      this.$refs.labelEl && this.$refs.labelEl.shake(shouldShake);
    },
    getWidth: function getWidth() {
      return this.$refs.labelEl.getWidth();
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
script.__file = "/ddata/extra/vma/components/notched-outline/mdc-notched-outline.vue";

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "outlined", class: _vm.outlinedClasses }, [
    _c("div", { staticClass: "mdc-notched-outline__leading" }),
    _vm._v(" "),
    _c(
      "div",
      { ref: "notchEl", staticClass: "mdc-notched-outline__notch" },
      [
        _vm.$slots.default
          ? _c("mdc-floating-label", { ref: "labelEl" }, [_vm._t("default")], 2)
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "mdc-notched-outline__trailing" })
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
  

  
  var mdcNotchedOutline = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var index = BasePlugin({
  mdcNotchedOutline: mdcNotchedOutline
});

export default index;
export { mdcNotchedOutline };
//# sourceMappingURL=index.js.map
