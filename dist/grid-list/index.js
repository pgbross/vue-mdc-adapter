/**
* @module vue-mdc-adaptergrid-list 0.19.2-beta
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
var strings = {
  TILES_SELECTOR: '.mdc-grid-list__tiles',
  TILE_SELECTOR: '.mdc-grid-tile'
};

var MDCGridListFoundation =
/*#__PURE__*/
function (_MDCFoundation) {
  _inherits(MDCGridListFoundation, _MDCFoundation);

  _createClass(MDCGridListFoundation, null, [{
    key: "strings",
    get: function get() {
      return strings;
    }
  }, {
    key: "defaultAdapter",
    get: function get() {
      return {
        getOffsetWidth: function getOffsetWidth() {
          return (
            /* number */
            0
          );
        },
        getNumberOfTiles: function getNumberOfTiles() {
          return (
            /* number */
            0
          );
        },
        getOffsetWidthForTileAtIndex: function getOffsetWidthForTileAtIndex() {
          return (
            /* index: number */

            /* number */
            0
          );
        },
        setStyleForTilesElement: function setStyleForTilesElement()
        /* property: string, value: string */
        {},
        registerResizeHandler: function registerResizeHandler()
        /* handler: EventListener */
        {},
        deregisterResizeHandler: function deregisterResizeHandler()
        /* handler: EventListener */
        {}
      };
    }
  }]);

  function MDCGridListFoundation(adapter) {
    var _this;

    _classCallCheck(this, MDCGridListFoundation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCGridListFoundation).call(this, _extends(MDCGridListFoundation.defaultAdapter, adapter)));

    _this.resizeHandler_ = function () {
      return _this.alignCenter();
    };

    _this.resizeFrame_ = 0;
    return _this;
  }

  _createClass(MDCGridListFoundation, [{
    key: "init",
    value: function init() {
      this.alignCenter();
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }, {
    key: "alignCenter",
    value: function alignCenter() {
      var _this2 = this;

      if (this.resizeFrame_ !== 0) {
        cancelAnimationFrame(this.resizeFrame_);
      }

      this.resizeFrame_ = requestAnimationFrame(function () {
        _this2.alignCenter_();

        _this2.resizeFrame_ = 0;
      });
    }
  }, {
    key: "alignCenter_",
    value: function alignCenter_() {
      if (this.adapter_.getNumberOfTiles() == 0) {
        return;
      }

      var gridWidth = this.adapter_.getOffsetWidth();
      var itemWidth = this.adapter_.getOffsetWidthForTileAtIndex(0);
      var tilesWidth = itemWidth * Math.floor(gridWidth / itemWidth);
      this.adapter_.setStyleForTilesElement('width', "".concat(tilesWidth, "px"));
    }
  }]);

  return MDCGridListFoundation;
}(MDCFoundation);

//
var script = {
  name: 'mdc-grid-list',
  props: {
    width: [String, Number],
    ratio: String,
    'narrow-gutter': Boolean,
    'header-caption': Boolean,
    'icon-align-start': Boolean,
    'icon-align-end': Boolean,
    'with-support-text': Boolean,
    interactive: Boolean
  },
  provide: function provide() {
    return {
      mdcGrid: this
    };
  },
  computed: {
    classes: function classes() {
      var classes = {};
      classes['mdc-grid-list--tile-gutter-1'] = this.narrowGutter;
      classes['mdc-grid-list--header-caption'] = this.headerCaption;
      classes["mdc-grid-list--tile-aspect-".concat(this.ratio)] = this.ratio;
      classes['mdc-grid-list--with-icon-align-start'] = this.iconAlignStart;
      classes['mdc-grid-list--with-icon-align-end'] = this.iconAlignEnd;
      classes['mdc-grid-list--twoline-caption'] = this.withSupportText;
      classes['mdc-grid-list--non-interactive'] = !this.interactive;
      return classes;
    },
    styles: function styles() {
      var defaultWidth = 200;
      return {
        '--mdc-grid-list-tile-width': "".concat(this.width || defaultWidth, "px")
      };
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCGridListFoundation({
      getOffsetWidth: function getOffsetWidth() {
        return _this.$el.offsetWidth;
      },
      getNumberOfTiles: function getNumberOfTiles() {
        return _this.$el.querySelectorAll(MDCGridListFoundation.strings.TILE_SELECTOR).length;
      },
      getOffsetWidthForTileAtIndex: function getOffsetWidthForTileAtIndex(index) {
        return _this.$el.querySelectorAll(MDCGridListFoundation.strings.TILE_SELECTOR)[index].offsetWidth;
      },
      setStyleForTilesElement: function setStyleForTilesElement(property, value) {
        _this.$el.querySelector(MDCGridListFoundation.strings.TILES_SELECTOR).style[property] = value;
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        window.removeEventListener('resize', handler);
      }
    });
    this.foundation.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
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
script.__file = "/ddata/extra/vma/components/grid-list/mdc-grid-list.vue";

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "mdc-grid-list" }, [
    _c(
      "ul",
      {
        staticClass: "mdc-grid-list__tiles",
        class: _vm.classes,
        style: _vm.styles
      },
      [_vm._t("default")],
      2
    )
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
  

  
  var mdcGridList = normalizeComponent(
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
  name: 'mdc-grid-tile',
  inject: ['mdcGrid'],
  mixins: [DispatchEventMixin],
  props: {
    src: String,
    cover: Boolean,
    icon: String,
    title: String,
    'support-text': String,
    selected: Boolean,
    activated: Boolean
  },
  data: function data() {
    return {
      classes: {},
      styles: {}
    };
  },
  computed: {
    clickListener: function clickListener() {
      var _this = this;

      return {
        click: function click(e) {
          return _this.dispatchEvent(e);
        }
      };
    },
    itemClasses: function itemClasses() {
      return {
        'mdc-grid-tile--selected': this.selected,
        'mdc-grid-tile--activated': this.activated
      };
    },
    isInteractive: function isInteractive() {
      return this.mdcGrid && this.mdcGrid.interactive;
    },
    hasStartDetail: function hasStartDetail() {
      return this.startIcon || this.$slots['start-detail'];
    },
    hasEndDetail: function hasEndDetail() {
      return this.endIcon || this.$slots['end-detail'];
    }
  },
  watch: {
    isInteractive: function isInteractive(value) {
      if (value) {
        this.addRipple();
      } else {
        this.removeRipple();
      }
    }
  },
  mounted: function mounted() {
    this.isInteractive && this.addRipple();
  },
  beforeDestroy: function beforeDestroy() {
    this.removeRipple();
  },
  methods: {
    addRipple: function addRipple() {
      if (!this.ripple) {
        var ripple = new RippleBase(this);
        ripple.init();
        this.ripple = ripple;
      }
    },
    removeRipple: function removeRipple() {
      if (this.ripple) {
        var ripple = this.ripple;
        this.ripple = null;
        ripple.destroy();
      }
    }
  }
};

/* script */
const __vue_script__$1 = script$1;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$1.__file = "/ddata/extra/vma/components/grid-list/mdc-grid-tile.vue";

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "li",
    _vm._g(
      {
        staticClass: "mdc-grid-tile",
        class: [_vm.classes, _vm.itemClasses],
        style: _vm.styles,
        attrs: { tabindex: _vm.isInteractive ? "0" : undefined }
      },
      _vm.isInteractive ? _vm.listeners : _vm.clickListener
    ),
    [
      _vm.cover
        ? _c("div", { staticClass: "mdc-grid-tile__primary" }, [
            _c("div", {
              staticClass: "mdc-grid-tile__primary-content",
              style: { backgroundImage: "url(" + _vm.src + ")" }
            })
          ])
        : _c("div", { staticClass: "mdc-grid-tile__primary" }, [
            _c("img", {
              staticClass: "mdc-grid-tile__primary-content",
              attrs: { src: _vm.src }
            })
          ]),
      _vm._v(" "),
      _vm.title || _vm.supportText
        ? _c("span", { staticClass: "mdc-grid-tile__secondary" }, [
            _vm.icon
              ? _c("i", { staticClass: "mdc-grid-tile__icon material-icons" }, [
                  _vm._v(_vm._s(_vm.icon))
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.title
              ? _c("span", { staticClass: "mdc-grid-tile__title" }, [
                  _vm._v(_vm._s(_vm.title))
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.supportText
              ? _c("span", { staticClass: "mdc-grid-tile__support-text" }, [
                  _vm._v(_vm._s(_vm.supportText))
                ])
              : _vm._e()
          ])
        : _vm._e()
    ]
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
  

  
  var mdcGridTile = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

var index = BasePlugin({
  mdcGridList: mdcGridList,
  mdcGridTile: mdcGridTile
});

export default index;
export { mdcGridList, mdcGridTile };
//# sourceMappingURL=index.js.map
