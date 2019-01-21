/**
* @module vue-mdc-adapterlayout-grid 0.19.4-beta
* @exports VueMDCLayoutGrid
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueMDCLayoutGrid = factory());
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

  var plugin = BasePlugin({
    mdcLayoutGrid: mdcLayoutGrid,
    mdcLayoutCell: mdcLayoutCell,
    mdcLayoutInnerGrid: mdcLayoutInnerGrid
  });

  autoInit(plugin);

  return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWdyaWQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9hdXRvLWluaXQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYmFzZS1wbHVnaW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWV2ZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXQtZ3JpZC9tZGMtbGF5b3V0LWdyaWQudnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1ydW50aW1lLWhlbHBlcnMvbm9ybWFsaXplLWNvbXBvbmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0LWdyaWQvbWRjLWxheW91dC1jZWxsLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0LWdyaWQvbWRjLWxheW91dC1pbm5lci1ncmlkLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0LWdyaWQvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL2xheW91dC1ncmlkL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCIvKiBnbG9iYWwgQ3VzdG9tRXZlbnQgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXRDdXN0b21FdmVudChlbCwgZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgbGV0IGV2dFxuICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpXG4gIH1cbiAgZWwuZGlzcGF0Y2hFdmVudChldnQpXG59XG4iLCJjb25zdCBzY29wZSA9XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMHgxMDAwMDAwMCkpLnRvU3RyaW5nKCkgKyAnLSdcblxuZXhwb3J0IGNvbnN0IFZNQVVuaXF1ZUlkTWl4aW4gPSB7XG4gIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICB0aGlzLnZtYV91aWRfID0gc2NvcGUgKyB0aGlzLl91aWRcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IDpjbGFzcz1cImNsYXNzZXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWRjLWxheW91dC1ncmlkX19pbm5lclwiPlxuICAgICAgPHNsb3QvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtbGF5b3V0LWdyaWQnLFxuICBwcm9wczoge1xuICAgICdmaXhlZC1jb2x1bW4td2lkdGgnOiBCb29sZWFuLFxuICAgICdhbGlnbi1sZWZ0JzogQm9vbGVhbixcbiAgICAnYWxpZ24tcmlnaHQnOiBCb29sZWFuXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdtZGMtbGF5b3V0LWdyaWQnOiB0cnVlLFxuICAgICAgICAnbWRjLWxheW91dC1ncmlkLS1maXhlZC1jb2x1bW4td2lkdGgnOiB0aGlzLmZpeGVkQ29sdW1uV2lkdGgsXG4gICAgICAgICdtZGMtbGF5b3V0LWdyaWQtLWFsaWduLWxlZnQnOiB0aGlzLmFsaWduTGVmdCxcbiAgICAgICAgJ21kYy1sYXlvdXQtZ3JpZC0tYWxpZ24tcmlnaHQnOiB0aGlzLmFsaWduUmlnaHRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50KGNvbXBpbGVkVGVtcGxhdGUsIGluamVjdFN0eWxlLCBkZWZhdWx0RXhwb3J0LCBzY29wZUlkLCBpc0Z1bmN0aW9uYWxUZW1wbGF0ZSwgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLywgaXNTaGFkb3dNb2RlLCBjcmVhdGVJbmplY3RvciwgY3JlYXRlSW5qZWN0b3JTU1IsIGNyZWF0ZUluamVjdG9yU2hhZG93KSB7XG4gICAgaWYgKHR5cGVvZiBpc1NoYWRvd01vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3JTU1IgPSBjcmVhdGVJbmplY3RvcjtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3IgPSBpc1NoYWRvd01vZGU7XG4gICAgICAgIGlzU2hhZG93TW9kZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gICAgY29uc3Qgb3B0aW9ucyA9IHR5cGVvZiBkZWZhdWx0RXhwb3J0ID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdEV4cG9ydC5vcHRpb25zIDogZGVmYXVsdEV4cG9ydDtcbiAgICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gICAgaWYgKGNvbXBpbGVkVGVtcGxhdGUgJiYgY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXIpIHtcbiAgICAgICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlcjtcbiAgICAgICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgICAgICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlO1xuICAgICAgICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzY29wZWRJZFxuICAgIGlmIChzY29wZUlkKSB7XG4gICAgICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkO1xuICAgIH1cbiAgICBsZXQgaG9vaztcbiAgICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgICAgICAvLyBzZXJ2ZXIgYnVpbGRcbiAgICAgICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICAgICAgICBjb250ZXh0ID1cbiAgICAgICAgICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KTsgLy8gZnVuY3Rpb25hbFxuICAgICAgICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICAgICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX187XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgICAgICAgaWYgKGluamVjdFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNTUihjb250ZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVyZW5jZVxuICAgICAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9vaztcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5qZWN0U3R5bGUpIHtcbiAgICAgICAgaG9vayA9IGlzU2hhZG93TW9kZVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNoYWRvdyh0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH07XG4gICAgfVxuICAgIGlmIChob29rKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcbiAgICAgICAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBob29rLmNhbGwoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlO1xuICAgICAgICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRFeHBvcnQ7XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgXG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiIFxuICAgIGNsYXNzPVwibWRjLWxheW91dC1jZWxsIG1kYy1sYXlvdXQtZ3JpZF9fY2VsbFwiPlxuICAgIDxzbG90Lz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuY29uc3Qgc3Bhbk9wdGlvbnMgPSB7XG4gIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gIGRlZmF1bHQ6IG51bGwsXG4gIHZhbGlkYXRvcjogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgbnVtID0gTnVtYmVyKHZhbHVlKVxuICAgIHJldHVybiBpc0Zpbml0ZShudW0pICYmIG51bSA8PSAxMiAmJiBudW0gPiAwXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWxheW91dC1jZWxsJyxcbiAgcHJvcHM6IHtcbiAgICBzcGFuOiBzcGFuT3B0aW9ucyxcbiAgICBvcmRlcjogc3Bhbk9wdGlvbnMsXG4gICAgcGhvbmU6IHNwYW5PcHRpb25zLFxuICAgIHRhYmxldDogc3Bhbk9wdGlvbnMsXG4gICAgZGVza3RvcDogc3Bhbk9wdGlvbnMsXG4gICAgYWxpZ246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbScsICdtaWRkbGUnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcygpIHtcbiAgICAgIGxldCBjbGFzc2VzID0gW11cblxuICAgICAgaWYgKHRoaXMuc3Bhbikge1xuICAgICAgICBjbGFzc2VzLnB1c2goYG1kYy1sYXlvdXQtZ3JpZF9fY2VsbC0tc3Bhbi0ke3RoaXMuc3Bhbn1gKVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcmRlcikge1xuICAgICAgICBjbGFzc2VzLnB1c2goYG1kYy1sYXlvdXQtZ3JpZF9fY2VsbC0tb3JkZXItJHt0aGlzLm9yZGVyfWApXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnBob25lKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaChgbWRjLWxheW91dC1ncmlkX19jZWxsLS1zcGFuLSR7dGhpcy5waG9uZX0tcGhvbmVgKVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy50YWJsZXQpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKGBtZGMtbGF5b3V0LWdyaWRfX2NlbGwtLXNwYW4tJHt0aGlzLnRhYmxldH0tdGFibGV0YClcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZGVza3RvcCkge1xuICAgICAgICBjbGFzc2VzLnB1c2goYG1kYy1sYXlvdXQtZ3JpZF9fY2VsbC0tc3Bhbi0ke3RoaXMuZGVza3RvcH0tZGVza3RvcGApXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmFsaWduKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaChgbWRjLWxheW91dC1ncmlkX19jZWxsLS1hbGlnbi0ke3RoaXMuYWxpZ259YClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsYXNzZXNcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibWRjLWxheW91dC1pbm5lci1ncmlkIG1kYy1sYXlvdXQtZ3JpZF9faW5uZXJcIj5cbiAgICA8c2xvdC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1sYXlvdXQtaW5uZXItZ3JpZCdcbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgbWRjTGF5b3V0R3JpZCBmcm9tICcuL21kYy1sYXlvdXQtZ3JpZC52dWUnXG5pbXBvcnQgbWRjTGF5b3V0Q2VsbCBmcm9tICcuL21kYy1sYXlvdXQtY2VsbC52dWUnXG5pbXBvcnQgbWRjTGF5b3V0SW5uZXJHcmlkIGZyb20gJy4vbWRjLWxheW91dC1pbm5lci1ncmlkLnZ1ZSdcblxuZXhwb3J0IHsgbWRjTGF5b3V0R3JpZCwgbWRjTGF5b3V0Q2VsbCwgbWRjTGF5b3V0SW5uZXJHcmlkIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY0xheW91dEdyaWQsXG4gIG1kY0xheW91dENlbGwsXG4gIG1kY0xheW91dElubmVyR3JpZFxufSlcbiIsImltcG9ydCAnLi9zdHlsZXMuc2NzcydcbmltcG9ydCB7IGF1dG9Jbml0IH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBwbHVnaW4gZnJvbSAnLi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG5hdXRvSW5pdChwbHVnaW4pXG4iXSwibmFtZXMiOlsiYXV0b0luaXQiLCJwbHVnaW4iLCJfVnVlIiwid2luZG93IiwiVnVlIiwiZ2xvYmFsIiwidXNlIiwiQmFzZVBsdWdpbiIsImNvbXBvbmVudHMiLCJ2ZXJzaW9uIiwiaW5zdGFsbCIsInZtIiwia2V5IiwiY29tcG9uZW50IiwibmFtZSIsInNjb3BlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJub3JtYWxpemVDb21wb25lbnQiLCJjb21waWxlZFRlbXBsYXRlIiwiaW5qZWN0U3R5bGUiLCJkZWZhdWx0RXhwb3J0Iiwic2NvcGVJZCIsImlzRnVuY3Rpb25hbFRlbXBsYXRlIiwibW9kdWxlSWRlbnRpZmllciIsImlzU2hhZG93TW9kZSIsImNyZWF0ZUluamVjdG9yIiwiY3JlYXRlSW5qZWN0b3JTU1IiLCJjcmVhdGVJbmplY3RvclNoYWRvdyIsIm9wdGlvbnMiLCJyZW5kZXIiLCJzdGF0aWNSZW5kZXJGbnMiLCJfY29tcGlsZWQiLCJmdW5jdGlvbmFsIiwiX3Njb3BlSWQiLCJob29rIiwiY29udGV4dCIsIiR2bm9kZSIsInNzckNvbnRleHQiLCJwYXJlbnQiLCJfX1ZVRV9TU1JfQ09OVEVYVF9fIiwiY2FsbCIsIl9yZWdpc3RlcmVkQ29tcG9uZW50cyIsImFkZCIsIl9zc3JSZWdpc3RlciIsIiRyb290IiwiJG9wdGlvbnMiLCJzaGFkb3dSb290Iiwib3JpZ2luYWxSZW5kZXIiLCJyZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24iLCJoIiwiZXhpc3RpbmciLCJiZWZvcmVDcmVhdGUiLCJjb25jYXQiLCJzY3JpcHQiLCJtZGNMYXlvdXRHcmlkIiwibWRjTGF5b3V0Q2VsbCIsIm1kY0xheW91dElubmVyR3JpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztFQUFPLFNBQVNBLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0VBQy9CO0VBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0VBQ0EsTUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0VBQ2pDRCxJQUFBQSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBZDtFQUNELEdBRkQsTUFFTyxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7RUFDeEM7RUFDQUgsSUFBQUEsSUFBSSxHQUFHRyxNQUFNLENBQUNELEdBQWQ7RUFDRDs7RUFDRCxNQUFJRixJQUFKLEVBQVU7RUFDUkEsSUFBQUEsSUFBSSxDQUFDSSxHQUFMLENBQVNMLE1BQVQ7RUFDRDtFQUNGOztFQ1pNLFNBQVNNLFVBQVQsQ0FBb0JDLFVBQXBCLEVBQWdDO0VBQ3JDLFNBQU87RUFDTEMsSUFBQUEsT0FBTyxFQUFFLGFBREo7RUFFTEMsSUFBQUEsT0FBTyxFQUFFLGlCQUFBQyxFQUFFLEVBQUk7RUFDYixXQUFLLElBQUlDLEdBQVQsSUFBZ0JKLFVBQWhCLEVBQTRCO0VBQzFCLFlBQUlLLFNBQVMsR0FBR0wsVUFBVSxDQUFDSSxHQUFELENBQTFCO0VBQ0FELFFBQUFBLEVBQUUsQ0FBQ0UsU0FBSCxDQUFhQSxTQUFTLENBQUNDLElBQXZCLEVBQTZCRCxTQUE3QjtFQUNEO0VBQ0YsS0FQSTtFQVFMTCxJQUFBQSxVQUFVLEVBQVZBO0VBUkssR0FBUDtFQVVEOztFQ1hEOztFQ0FBLElBQU1PLEtBQUssR0FDVEMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkYsSUFBSSxDQUFDQyxLQUFMLENBQVcsVUFBWCxDQUEzQixF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
