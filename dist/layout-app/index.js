/**
* @module vue-mdc-adapterlayout-app 0.19.0-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.42.0","material-components-web":"^0.42.1"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

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
//
//
//
//
//
//
var script = {
  name: 'mdc-layout-app'
};

/* script */
            const __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "mdc-layout-app" }, [
    _c(
      "div",
      { staticClass: "mdc-layout-app--topappbar-wrapper" },
      [_vm._t("topappbar")],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "mdc-layout-app--main-container" }, [
      _c(
        "div",
        { staticClass: "mdc-layout-app--drawer-wrapper" },
        [_vm._t("drawer")],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mdc-layout-app--content-wrapper" },
        [_vm._t("default")],
        2
      )
    ])
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
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/ddata/extra/vma/components/layout-app/mdc-layout-app.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var mdcLayoutApp = __vue_normalize__(
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
  mdcLayoutApp: mdcLayoutApp
});

export default index;
export { mdcLayoutApp };
//# sourceMappingURL=index.js.map
