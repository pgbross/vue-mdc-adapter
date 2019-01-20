/**
* @module vue-mdc-adapterlayout-grid 0.19.2-beta
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

/* global CustomEvent */

var scope = Math.floor(Math.random() * Math.floor(0x10000000)).toString() + '-';

//
//
//
//
//
//
//
//
var script = {
  name: 'mdc-layout-grid',
  props: {
    'fixed-column-width': Boolean,
    'align-left': Boolean,
    'align-right': Boolean
  },
  computed: {
    classes: function classes() {
      return {
        'mdc-layout-grid': true,
        'mdc-layout-grid--fixed-column-width': this.fixedColumnWidth,
        'mdc-layout-grid--align-left': this.alignLeft,
        'mdc-layout-grid--align-right': this.alignRight
      };
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
script.__file = "/ddata/extra/vma/components/layout-grid/mdc-layout-grid.vue";

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classes }, [
    _c("div", { staticClass: "mdc-layout-grid__inner" }, [_vm._t("default")], 2)
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
  

  
  var mdcLayoutGrid = normalizeComponent(
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
//
//
var spanOptions = {
  type: [String, Number],
  default: null,
  validator: function validator(value) {
    var num = Number(value);
    return isFinite(num) && num <= 12 && num > 0;
  }
};
var script$1 = {
  name: 'mdc-layout-cell',
  props: {
    span: spanOptions,
    order: spanOptions,
    phone: spanOptions,
    tablet: spanOptions,
    desktop: spanOptions,
    align: {
      type: String,
      validator: function validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    classes: function classes() {
      var classes = [];

      if (this.span) {
        classes.push("mdc-layout-grid__cell--span-".concat(this.span));
      }

      if (this.order) {
        classes.push("mdc-layout-grid__cell--order-".concat(this.order));
      }

      if (this.phone) {
        classes.push("mdc-layout-grid__cell--span-".concat(this.phone, "-phone"));
      }

      if (this.tablet) {
        classes.push("mdc-layout-grid__cell--span-".concat(this.tablet, "-tablet"));
      }

      if (this.desktop) {
        classes.push("mdc-layout-grid__cell--span-".concat(this.desktop, "-desktop"));
      }

      if (this.align) {
        classes.push("mdc-layout-grid__cell--align-".concat(this.align));
      }

      return classes;
    }
  }
};

/* script */
const __vue_script__$1 = script$1;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$1.__file = "/ddata/extra/vma/components/layout-grid/mdc-layout-cell.vue";

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "mdc-layout-cell mdc-layout-grid__cell",
      class: _vm.classes
    },
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
  

  
  var mdcLayoutCell = normalizeComponent(
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
var script$2 = {
  name: 'mdc-layout-inner-grid'
};

/* script */
const __vue_script__$2 = script$2;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$2.__file = "/ddata/extra/vma/components/layout-grid/mdc-layout-inner-grid.vue";

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "mdc-layout-inner-grid mdc-layout-grid__inner" },
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
  

  
  var mdcLayoutInnerGrid = normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

var index = BasePlugin({
  mdcLayoutGrid: mdcLayoutGrid,
  mdcLayoutCell: mdcLayoutCell,
  mdcLayoutInnerGrid: mdcLayoutInnerGrid
});

export default index;
export { mdcLayoutGrid, mdcLayoutCell, mdcLayoutInnerGrid };
//# sourceMappingURL=index.js.map
