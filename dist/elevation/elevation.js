/**
* @module vue-mdc-adapterelevation 0.19.0-beta
* @exports VueMDCElevation
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueMDCElevation = factory());
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
    name: 'mdc-elevation',
    props: {
      z: {
        type: [Number, String],
        default: function _default() {
          return 1;
        }
      }
    },
    data: function data() {
      var elevationClasses = {};
      elevationClasses["mdc-elevation--z".concat(this.z)] = true;
      return {
        classes: elevationClasses
      };
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
  script.__file = "/ddata/extra/vma/components/elevation/mdc-elevation.vue";

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mdc-elevation", class: _vm.classes },
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
    

    
    var mdcElevation = normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  var plugin = BasePlugin({
    mdcElevation: mdcElevation
  });

  autoInit(plugin);

  return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXV0by1pbml0LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Jhc2UtcGx1Z2luLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1ldmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS91bmlxdWVpZC1taXhpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvZWxldmF0aW9uL21kYy1lbGV2YXRpb24udnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1ydW50aW1lLWhlbHBlcnMvbm9ybWFsaXplLWNvbXBvbmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvZWxldmF0aW9uL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9lbGV2YXRpb24vZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGF1dG9Jbml0KHBsdWdpbikge1xuICAvLyBBdXRvLWluc3RhbGxcbiAgbGV0IF9WdWUgPSBudWxsXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIF9WdWUgPSB3aW5kb3cuVnVlXG4gIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvKmdsb2JhbCBnbG9iYWwqL1xuICAgIF9WdWUgPSBnbG9iYWwuVnVlXG4gIH1cbiAgaWYgKF9WdWUpIHtcbiAgICBfVnVlLnVzZShwbHVnaW4pXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBCYXNlUGx1Z2luKGNvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnX19WRVJTSU9OX18nLFxuICAgIGluc3RhbGw6IHZtID0+IHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2tleV1cbiAgICAgICAgdm0uY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQpXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImNvbnN0IHNjb3BlID1cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigweDEwMDAwMDAwKSkudG9TdHJpbmcoKSArICctJ1xuXG5leHBvcnQgY29uc3QgVk1BVW5pcXVlSWRNaXhpbiA9IHtcbiAgYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMudm1hX3VpZF8gPSBzY29wZSArIHRoaXMuX3VpZFxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICA6Y2xhc3M9XCJjbGFzc2VzXCJcbiAgICBjbGFzcz1cIm1kYy1lbGV2YXRpb25cIj5cbiAgICA8c2xvdC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1lbGV2YXRpb24nLFxuICBwcm9wczoge1xuICAgIHo6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICBkZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gMVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICBsZXQgZWxldmF0aW9uQ2xhc3NlcyA9IHt9XG4gICAgZWxldmF0aW9uQ2xhc3Nlc1tgbWRjLWVsZXZhdGlvbi0teiR7dGhpcy56fWBdID0gdHJ1ZVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IGVsZXZhdGlvbkNsYXNzZXNcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50KGNvbXBpbGVkVGVtcGxhdGUsIGluamVjdFN0eWxlLCBkZWZhdWx0RXhwb3J0LCBzY29wZUlkLCBpc0Z1bmN0aW9uYWxUZW1wbGF0ZSwgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLywgaXNTaGFkb3dNb2RlLCBjcmVhdGVJbmplY3RvciwgY3JlYXRlSW5qZWN0b3JTU1IsIGNyZWF0ZUluamVjdG9yU2hhZG93KSB7XG4gICAgaWYgKHR5cGVvZiBpc1NoYWRvd01vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3JTU1IgPSBjcmVhdGVJbmplY3RvcjtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3IgPSBpc1NoYWRvd01vZGU7XG4gICAgICAgIGlzU2hhZG93TW9kZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gICAgY29uc3Qgb3B0aW9ucyA9IHR5cGVvZiBkZWZhdWx0RXhwb3J0ID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdEV4cG9ydC5vcHRpb25zIDogZGVmYXVsdEV4cG9ydDtcbiAgICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gICAgaWYgKGNvbXBpbGVkVGVtcGxhdGUgJiYgY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXIpIHtcbiAgICAgICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlcjtcbiAgICAgICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgICAgICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlO1xuICAgICAgICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzY29wZWRJZFxuICAgIGlmIChzY29wZUlkKSB7XG4gICAgICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkO1xuICAgIH1cbiAgICBsZXQgaG9vaztcbiAgICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgICAgICAvLyBzZXJ2ZXIgYnVpbGRcbiAgICAgICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICAgICAgICBjb250ZXh0ID1cbiAgICAgICAgICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KTsgLy8gZnVuY3Rpb25hbFxuICAgICAgICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICAgICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX187XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgICAgICAgaWYgKGluamVjdFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNTUihjb250ZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVyZW5jZVxuICAgICAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9vaztcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5qZWN0U3R5bGUpIHtcbiAgICAgICAgaG9vayA9IGlzU2hhZG93TW9kZVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNoYWRvdyh0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH07XG4gICAgfVxuICAgIGlmIChob29rKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcbiAgICAgICAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBob29rLmNhbGwoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlO1xuICAgICAgICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRFeHBvcnQ7XG59XG4iLCJpbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBtZGNFbGV2YXRpb24gZnJvbSAnLi9tZGMtZWxldmF0aW9uLnZ1ZSdcblxuZXhwb3J0IHsgbWRjRWxldmF0aW9uIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY0VsZXZhdGlvblxufSlcbiIsImltcG9ydCAnLi9zdHlsZXMuc2NzcydcbmltcG9ydCB7IGF1dG9Jbml0IH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBwbHVnaW4gZnJvbSAnLi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG5hdXRvSW5pdChwbHVnaW4pXG4iXSwibmFtZXMiOlsiYXV0b0luaXQiLCJwbHVnaW4iLCJfVnVlIiwid2luZG93IiwiVnVlIiwiZ2xvYmFsIiwidXNlIiwiQmFzZVBsdWdpbiIsImNvbXBvbmVudHMiLCJ2ZXJzaW9uIiwiaW5zdGFsbCIsInZtIiwia2V5IiwiY29tcG9uZW50IiwibmFtZSIsInNjb3BlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJub3JtYWxpemVDb21wb25lbnQiLCJjb21waWxlZFRlbXBsYXRlIiwiaW5qZWN0U3R5bGUiLCJkZWZhdWx0RXhwb3J0Iiwic2NvcGVJZCIsImlzRnVuY3Rpb25hbFRlbXBsYXRlIiwibW9kdWxlSWRlbnRpZmllciIsImlzU2hhZG93TW9kZSIsImNyZWF0ZUluamVjdG9yIiwiY3JlYXRlSW5qZWN0b3JTU1IiLCJjcmVhdGVJbmplY3RvclNoYWRvdyIsIm9wdGlvbnMiLCJyZW5kZXIiLCJzdGF0aWNSZW5kZXJGbnMiLCJfY29tcGlsZWQiLCJmdW5jdGlvbmFsIiwiX3Njb3BlSWQiLCJob29rIiwiY29udGV4dCIsIiR2bm9kZSIsInNzckNvbnRleHQiLCJwYXJlbnQiLCJfX1ZVRV9TU1JfQ09OVEVYVF9fIiwiY2FsbCIsIl9yZWdpc3RlcmVkQ29tcG9uZW50cyIsImFkZCIsIl9zc3JSZWdpc3RlciIsIiRyb290IiwiJG9wdGlvbnMiLCJzaGFkb3dSb290Iiwib3JpZ2luYWxSZW5kZXIiLCJyZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24iLCJoIiwiZXhpc3RpbmciLCJiZWZvcmVDcmVhdGUiLCJjb25jYXQiLCJtZGNFbGV2YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtFQUMvQjtFQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztFQUNBLE1BQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztFQUNqQ0QsSUFBQUEsSUFBSSxHQUFHQyxNQUFNLENBQUNDLEdBQWQ7RUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPQyxN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
