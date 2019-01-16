/**
* @module vue-mdc-adapterlinear-progress 0.19.0-beta
* @exports VueMDCLinearProgress
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.VueMDCLinearProgress = factory());
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
    // property names.


    var transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];

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
      CLOSED_CLASS: 'mdc-linear-progress--closed',
      INDETERMINATE_CLASS: 'mdc-linear-progress--indeterminate',
      REVERSED_CLASS: 'mdc-linear-progress--reversed'
    };
    var strings = {
      PRIMARY_BAR_SELECTOR: '.mdc-linear-progress__primary-bar',
      BUFFER_SELECTOR: '.mdc-linear-progress__buffer'
    };

    var MDCLinearProgressFoundation =
    /*#__PURE__*/
    function (_MDCFoundation) {
      _inherits(MDCLinearProgressFoundation, _MDCFoundation);

      _createClass(MDCLinearProgressFoundation, null, [{
        key: "cssClasses",
        get: function get() {
          return cssClasses;
        }
      }, {
        key: "strings",
        get: function get() {
          return strings;
        }
      }, {
        key: "defaultAdapter",
        get: function get() {
          return {
            addClass: function addClass()
            /* className: string */
            {},
            getPrimaryBar: function getPrimaryBar()
            /* el: Element */
            {},
            getBuffer: function getBuffer()
            /* el: Element */
            {},
            hasClass: function hasClass() {
              return (
                /* className: string */
                false
              );
            },
            removeClass: function removeClass()
            /* className: string */
            {},
            setStyle: function setStyle()
            /* el: Element, styleProperty: string, value: string */
            {}
          };
        }
      }]);

      function MDCLinearProgressFoundation(adapter) {
        _classCallCheck(this, MDCLinearProgressFoundation);

        return _possibleConstructorReturn(this, _getPrototypeOf(MDCLinearProgressFoundation).call(this, _extends(MDCLinearProgressFoundation.defaultAdapter, adapter)));
      }

      _createClass(MDCLinearProgressFoundation, [{
        key: "init",
        value: function init() {
          this.determinate_ = !this.adapter_.hasClass(cssClasses.INDETERMINATE_CLASS);
          this.reverse_ = this.adapter_.hasClass(cssClasses.REVERSED_CLASS);
          this.progress_ = 0;
        }
      }, {
        key: "setDeterminate",
        value: function setDeterminate(isDeterminate) {
          this.determinate_ = isDeterminate;

          if (this.determinate_) {
            this.adapter_.removeClass(cssClasses.INDETERMINATE_CLASS);
            this.setScale_(this.adapter_.getPrimaryBar(), this.progress_);
          } else {
            this.adapter_.addClass(cssClasses.INDETERMINATE_CLASS);
            this.setScale_(this.adapter_.getPrimaryBar(), 1);
            this.setScale_(this.adapter_.getBuffer(), 1);
          }
        }
      }, {
        key: "setProgress",
        value: function setProgress(value) {
          this.progress_ = value;

          if (this.determinate_) {
            this.setScale_(this.adapter_.getPrimaryBar(), value);
          }
        }
      }, {
        key: "setBuffer",
        value: function setBuffer(value) {
          if (this.determinate_) {
            this.setScale_(this.adapter_.getBuffer(), value);
          }
        }
      }, {
        key: "setReverse",
        value: function setReverse(isReversed) {
          this.reverse_ = isReversed;

          if (this.reverse_) {
            this.adapter_.addClass(cssClasses.REVERSED_CLASS);
          } else {
            this.adapter_.removeClass(cssClasses.REVERSED_CLASS);
          }
        }
      }, {
        key: "open",
        value: function open() {
          this.adapter_.removeClass(cssClasses.CLOSED_CLASS);
        }
      }, {
        key: "close",
        value: function close() {
          this.adapter_.addClass(cssClasses.CLOSED_CLASS);
        }
      }, {
        key: "setScale_",
        value: function setScale_(el, scaleValue) {
          var _this = this;

          var value = 'scaleX(' + scaleValue + ')';
          transformStyleProperties.forEach(function (transformStyleProperty) {
            _this.adapter_.setStyle(el, transformStyleProperty, value);
          });
        }
      }]);

      return MDCLinearProgressFoundation;
    }(MDCFoundation);

    //
    var ProgressPropType = {
      type: [Number, String],
      validator: function validator(value) {
        return Number(value) >= 0 && Number(value) <= 1;
      }
    };
    var script = {
      name: 'mdc-linear-progress',
      props: {
        open: {
          type: Boolean,
          default: true
        },
        indeterminate: Boolean,
        reverse: Boolean,
        accent: Boolean,
        progress: ProgressPropType,
        buffer: ProgressPropType
      },
      data: function data() {
        return {
          classes: {
            'mdc-linear-progress--accent': this.accent
          },
          styles: {}
        };
      },
      watch: {
        open: function open() {
          if (this.open) {
            this.foundation.open();
          } else {
            this.foundation.close();
          }
        },
        progress: function progress() {
          this.foundation.setProgress(Number(this.progress));
        },
        buffer: function buffer() {
          this.foundation.setBuffer(Number(this.buffer));
        },
        indeterminate: function indeterminate() {
          this.foundation.setDeterminate(!this.indeterminate);
        },
        reverse: function reverse() {
          this.foundation.setReverse(this.reverse);
        }
      },
      mounted: function mounted() {
        var _this = this;

        this.foundation = new MDCLinearProgressFoundation({
          addClass: function addClass(className) {
            _this.$set(_this.classes, className, true);
          },
          getPrimaryBar: function getPrimaryBar()
          /* el: Element */
          {
            return _this.$refs.primary;
          },
          getBuffer: function getBuffer()
          /* el: Element */
          {
            return _this.$refs.buffer;
          },
          hasClass: function hasClass(className) {
            _this.$el.classList.contains(className);
          },
          removeClass: function removeClass(className) {
            _this.$delete(_this.classes, className);
          },
          setStyle: function setStyle(el, styleProperty, value) {
            el.style[styleProperty] = value;
          }
        });
        this.foundation.init();
        this.foundation.setReverse(this.reverse);
        this.foundation.setProgress(Number(this.progress));
        this.foundation.setBuffer(Number(this.buffer));
        this.foundation.setDeterminate(!this.indeterminate);

        if (this.open) {
          this.foundation.open();
        } else {
          this.foundation.close();
        }
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
    script.__file = "/ddata/extra/vma/components/linear-progress/mdc-linear-progress.vue";

    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        {
          staticClass: "mdc-linear-progress",
          class: _vm.classes,
          style: _vm.styles,
          attrs: { role: "progressbar" }
        },
        [
          _c("div", { staticClass: "mdc-linear-progress__buffering-dots" }),
          _vm._v(" "),
          _c("div", { ref: "buffer", staticClass: "mdc-linear-progress__buffer" }),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "primary",
              staticClass:
                "mdc-linear-progress__bar mdc-linear-progress__primary-bar"
            },
            [_c("span", { staticClass: "mdc-linear-progress__bar-inner" })]
          ),
          _vm._v(" "),
          _vm._m(0)
        ]
      )
    };
    var __vue_staticRenderFns__ = [
      function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
          "div",
          {
            staticClass:
              "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"
          },
          [_c("span", { staticClass: "mdc-linear-progress__bar-inner" })]
        )
      }
    ];
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
      

      
      var mdcLinearProgress = normalizeComponent(
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
      mdcLinearProgress: mdcLinearProgress
    });

    autoInit(plugin);

    return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZWFyLXByb2dyZXNzLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXV0by1pbml0LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Jhc2UtcGx1Z2luLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1ldmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS91bmlxdWVpZC1taXhpbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9hbmltYXRpb24vaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpbmVhci1wcm9ncmVzcy9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpbmVhci1wcm9ncmVzcy9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vY29tcG9uZW50cy9saW5lYXItcHJvZ3Jlc3MvbWRjLWxpbmVhci1wcm9ncmVzcy52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXJ1bnRpbWUtaGVscGVycy9ub3JtYWxpemUtY29tcG9uZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9saW5lYXItcHJvZ3Jlc3MvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL2xpbmVhci1wcm9ncmVzcy9lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXV0b0luaXQocGx1Z2luKSB7XG4gIC8vIEF1dG8taW5zdGFsbFxuICBsZXQgX1Z1ZSA9IG51bGxcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgX1Z1ZSA9IHdpbmRvdy5WdWVcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8qZ2xvYmFsIGdsb2JhbCovXG4gICAgX1Z1ZSA9IGdsb2JhbC5WdWVcbiAgfVxuICBpZiAoX1Z1ZSkge1xuICAgIF9WdWUudXNlKHBsdWdpbilcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIEJhc2VQbHVnaW4oY29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICdfX1ZFUlNJT05fXycsXG4gICAgaW5zdGFsbDogdm0gPT4ge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNba2V5XVxuICAgICAgICB2bS5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHNcbiAgfVxufVxuIiwiLyogZ2xvYmFsIEN1c3RvbUV2ZW50ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Q3VzdG9tRXZlbnQoZWwsIGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gIGxldCBldnRcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICBidWJibGVzOiBzaG91bGRCdWJibGVcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKVxuICB9XG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBBXG4gKi9cbmNsYXNzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVte2Nzc0NsYXNzZXN9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtzdHJpbmdzfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtudW1iZXJzfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshT2JqZWN0fSAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAvLyB2YWxpZGF0aW9uLlxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0E9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyID0ge30pIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUF9ICovXG4gICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBub1ByZWZpeDogc3RyaW5nLFxuICogICB3ZWJraXRQcmVmaXg6IHN0cmluZyxcbiAqICAgc3R5bGVQcm9wZXJ0eTogc3RyaW5nXG4gKiB9fVxuICovXG5sZXQgVmVuZG9yUHJvcGVydHlNYXBUeXBlO1xuXG4vKiogQGNvbnN0IHtPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gKi9cbmNvbnN0IGV2ZW50VHlwZU1hcCA9IHtcbiAgJ2FuaW1hdGlvbnN0YXJ0Jzoge1xuICAgIG5vUHJlZml4OiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIHdlYmtpdFByZWZpeDogJ3dlYmtpdEFuaW1hdGlvblN0YXJ0JyxcbiAgICBzdHlsZVByb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgfSxcbiAgJ2FuaW1hdGlvbmVuZCc6IHtcbiAgICBub1ByZWZpeDogJ2FuaW1hdGlvbmVuZCcsXG4gICAgd2Via2l0UHJlZml4OiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICBzdHlsZVByb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgfSxcbiAgJ2FuaW1hdGlvbml0ZXJhdGlvbic6IHtcbiAgICBub1ByZWZpeDogJ2FuaW1hdGlvbml0ZXJhdGlvbicsXG4gICAgd2Via2l0UHJlZml4OiAnd2Via2l0QW5pbWF0aW9uSXRlcmF0aW9uJyxcbiAgICBzdHlsZVByb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgfSxcbiAgJ3RyYW5zaXRpb25lbmQnOiB7XG4gICAgbm9QcmVmaXg6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICB3ZWJraXRQcmVmaXg6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBzdHlsZVByb3BlcnR5OiAndHJhbnNpdGlvbicsXG4gIH0sXG59O1xuXG4vKiogQGNvbnN0IHtPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gKi9cbmNvbnN0IGNzc1Byb3BlcnR5TWFwID0ge1xuICAnYW5pbWF0aW9uJzoge1xuICAgIG5vUHJlZml4OiAnYW5pbWF0aW9uJyxcbiAgICB3ZWJraXRQcmVmaXg6ICctd2Via2l0LWFuaW1hdGlvbicsXG4gIH0sXG4gICd0cmFuc2Zvcm0nOiB7XG4gICAgbm9QcmVmaXg6ICd0cmFuc2Zvcm0nLFxuICAgIHdlYmtpdFByZWZpeDogJy13ZWJraXQtdHJhbnNmb3JtJyxcbiAgfSxcbiAgJ3RyYW5zaXRpb24nOiB7XG4gICAgbm9QcmVmaXg6ICd0cmFuc2l0aW9uJyxcbiAgICB3ZWJraXRQcmVmaXg6ICctd2Via2l0LXRyYW5zaXRpb24nLFxuICB9LFxufTtcblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IHdpbmRvd09ialxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaGFzUHJvcGVyU2hhcGUod2luZG93T2JqKSB7XG4gIHJldHVybiAod2luZG93T2JqWydkb2N1bWVudCddICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHdpbmRvd09ialsnZG9jdW1lbnQnXVsnY3JlYXRlRWxlbWVudCddID09PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBldmVudEZvdW5kSW5NYXBzKGV2ZW50VHlwZSkge1xuICByZXR1cm4gKGV2ZW50VHlwZSBpbiBldmVudFR5cGVNYXAgfHwgZXZlbnRUeXBlIGluIGNzc1Byb3BlcnR5TWFwKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiBAcGFyYW0geyFPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gbWFwXG4gKiBAcGFyYW0geyFFbGVtZW50fSBlbFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRKYXZhU2NyaXB0RXZlbnROYW1lKGV2ZW50VHlwZSwgbWFwLCBlbCkge1xuICByZXR1cm4gbWFwW2V2ZW50VHlwZV0uc3R5bGVQcm9wZXJ0eSBpbiBlbC5zdHlsZSA/IG1hcFtldmVudFR5cGVdLm5vUHJlZml4IDogbWFwW2V2ZW50VHlwZV0ud2Via2l0UHJlZml4O1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBkZXRlcm1pbmUgYnJvd3NlciBwcmVmaXggZm9yIENTUzMgYW5pbWF0aW9uIGV2ZW50c1xuICogYW5kIHByb3BlcnR5IG5hbWVzLlxuICogQHBhcmFtIHshT2JqZWN0fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uTmFtZSh3aW5kb3dPYmosIGV2ZW50VHlwZSkge1xuICBpZiAoIWhhc1Byb3BlclNoYXBlKHdpbmRvd09iaikgfHwgIWV2ZW50Rm91bmRJbk1hcHMoZXZlbnRUeXBlKSkge1xuICAgIHJldHVybiBldmVudFR5cGU7XG4gIH1cblxuICBjb25zdCBtYXAgPSAvKiogQHR5cGUgeyFPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gKi8gKFxuICAgIGV2ZW50VHlwZSBpbiBldmVudFR5cGVNYXAgPyBldmVudFR5cGVNYXAgOiBjc3NQcm9wZXJ0eU1hcFxuICApO1xuICBjb25zdCBlbCA9IHdpbmRvd09ialsnZG9jdW1lbnQnXVsnY3JlYXRlRWxlbWVudCddKCdkaXYnKTtcbiAgbGV0IGV2ZW50TmFtZSA9ICcnO1xuXG4gIGlmIChtYXAgPT09IGV2ZW50VHlwZU1hcCkge1xuICAgIGV2ZW50TmFtZSA9IGdldEphdmFTY3JpcHRFdmVudE5hbWUoZXZlbnRUeXBlLCBtYXAsIGVsKTtcbiAgfSBlbHNlIHtcbiAgICBldmVudE5hbWUgPSBtYXBbZXZlbnRUeXBlXS5ub1ByZWZpeCBpbiBlbC5zdHlsZSA/IG1hcFtldmVudFR5cGVdLm5vUHJlZml4IDogbWFwW2V2ZW50VHlwZV0ud2Via2l0UHJlZml4O1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TmFtZTtcbn1cblxuLy8gUHVibGljIGZ1bmN0aW9ucyB0byBhY2Nlc3MgZ2V0QW5pbWF0aW9uTmFtZSgpIGZvciBKYXZhU2NyaXB0IGV2ZW50cyBvciBDU1Ncbi8vIHByb3BlcnR5IG5hbWVzLlxuXG5jb25zdCB0cmFuc2Zvcm1TdHlsZVByb3BlcnRpZXMgPSBbJ3RyYW5zZm9ybScsICdXZWJraXRUcmFuc2Zvcm0nLCAnTW96VHJhbnNmb3JtJywgJ09UcmFuc2Zvcm0nLCAnTVNUcmFuc2Zvcm0nXTtcblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IHdpbmRvd09ialxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb3JyZWN0RXZlbnROYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKSB7XG4gIHJldHVybiBnZXRBbmltYXRpb25OYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IHdpbmRvd09ialxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb3JyZWN0UHJvcGVydHlOYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKSB7XG4gIHJldHVybiBnZXRBbmltYXRpb25OYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKTtcbn1cblxuZXhwb3J0IHt0cmFuc2Zvcm1TdHlsZVByb3BlcnRpZXMsIGdldENvcnJlY3RFdmVudE5hbWUsIGdldENvcnJlY3RQcm9wZXJ0eU5hbWV9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmV4cG9ydCBjb25zdCBjc3NDbGFzc2VzID0ge1xuICBDTE9TRURfQ0xBU1M6ICdtZGMtbGluZWFyLXByb2dyZXNzLS1jbG9zZWQnLFxuICBJTkRFVEVSTUlOQVRFX0NMQVNTOiAnbWRjLWxpbmVhci1wcm9ncmVzcy0taW5kZXRlcm1pbmF0ZScsXG4gIFJFVkVSU0VEX0NMQVNTOiAnbWRjLWxpbmVhci1wcm9ncmVzcy0tcmV2ZXJzZWQnLFxufTtcblxuZXhwb3J0IGNvbnN0IHN0cmluZ3MgPSB7XG4gIFBSSU1BUllfQkFSX1NFTEVDVE9SOiAnLm1kYy1saW5lYXItcHJvZ3Jlc3NfX3ByaW1hcnktYmFyJyxcbiAgQlVGRkVSX1NFTEVDVE9SOiAnLm1kYy1saW5lYXItcHJvZ3Jlc3NfX2J1ZmZlcicsXG59O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHt0cmFuc2Zvcm1TdHlsZVByb3BlcnRpZXN9IGZyb20gJ0BtYXRlcmlhbC9hbmltYXRpb24vaW5kZXgnO1xuXG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZENsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgZ2V0UHJpbWFyeUJhcjogKCkgPT4gLyogZWw6IEVsZW1lbnQgKi8ge30sXG4gICAgICBnZXRCdWZmZXI6ICgpID0+IC8qIGVsOiBFbGVtZW50ICovIHt9LFxuICAgICAgaGFzQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4gZmFsc2UsXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHNldFN0eWxlOiAoLyogZWw6IEVsZW1lbnQsIHN0eWxlUHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRldGVybWluYXRlXyA9ICF0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuSU5ERVRFUk1JTkFURV9DTEFTUyk7XG4gICAgdGhpcy5yZXZlcnNlXyA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5SRVZFUlNFRF9DTEFTUyk7XG4gICAgdGhpcy5wcm9ncmVzc18gPSAwO1xuICB9XG5cbiAgc2V0RGV0ZXJtaW5hdGUoaXNEZXRlcm1pbmF0ZSkge1xuICAgIHRoaXMuZGV0ZXJtaW5hdGVfID0gaXNEZXRlcm1pbmF0ZTtcbiAgICBpZiAodGhpcy5kZXRlcm1pbmF0ZV8pIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5JTkRFVEVSTUlOQVRFX0NMQVNTKTtcbiAgICAgIHRoaXMuc2V0U2NhbGVfKHRoaXMuYWRhcHRlcl8uZ2V0UHJpbWFyeUJhcigpLCB0aGlzLnByb2dyZXNzXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5JTkRFVEVSTUlOQVRFX0NMQVNTKTtcbiAgICAgIHRoaXMuc2V0U2NhbGVfKHRoaXMuYWRhcHRlcl8uZ2V0UHJpbWFyeUJhcigpLCAxKTtcbiAgICAgIHRoaXMuc2V0U2NhbGVfKHRoaXMuYWRhcHRlcl8uZ2V0QnVmZmVyKCksIDEpO1xuICAgIH1cbiAgfVxuXG4gIHNldFByb2dyZXNzKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9ncmVzc18gPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5kZXRlcm1pbmF0ZV8pIHtcbiAgICAgIHRoaXMuc2V0U2NhbGVfKHRoaXMuYWRhcHRlcl8uZ2V0UHJpbWFyeUJhcigpLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0QnVmZmVyKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuZGV0ZXJtaW5hdGVfKSB7XG4gICAgICB0aGlzLnNldFNjYWxlXyh0aGlzLmFkYXB0ZXJfLmdldEJ1ZmZlcigpLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0UmV2ZXJzZShpc1JldmVyc2VkKSB7XG4gICAgdGhpcy5yZXZlcnNlXyA9IGlzUmV2ZXJzZWQ7XG4gICAgaWYgKHRoaXMucmV2ZXJzZV8pIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5SRVZFUlNFRF9DTEFTUyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5SRVZFUlNFRF9DTEFTUyk7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuQ0xPU0VEX0NMQVNTKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5DTE9TRURfQ0xBU1MpO1xuICB9XG5cbiAgc2V0U2NhbGVfKGVsLCBzY2FsZVZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWUgPSAnc2NhbGVYKCcgKyBzY2FsZVZhbHVlICsgJyknO1xuICAgIHRyYW5zZm9ybVN0eWxlUHJvcGVydGllcy5mb3JFYWNoKCh0cmFuc2Zvcm1TdHlsZVByb3BlcnR5KSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldFN0eWxlKGVsLCB0cmFuc2Zvcm1TdHlsZVByb3BlcnR5LCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBcbiAgICA6Y2xhc3M9XCJjbGFzc2VzXCIgXG4gICAgOnN0eWxlPVwic3R5bGVzXCIgXG4gICAgcm9sZT1cInByb2dyZXNzYmFyXCIgXG4gICAgY2xhc3M9XCJtZGMtbGluZWFyLXByb2dyZXNzXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1kYy1saW5lYXItcHJvZ3Jlc3NfX2J1ZmZlcmluZy1kb3RzXCIvPlxuICAgIDxkaXYgXG4gICAgICByZWY9XCJidWZmZXJcIiBcbiAgICAgIGNsYXNzPVwibWRjLWxpbmVhci1wcm9ncmVzc19fYnVmZmVyXCIvPlxuICAgIDxkaXYgXG4gICAgICByZWY9XCJwcmltYXJ5XCIgXG4gICAgICBjbGFzcz1cIm1kYy1saW5lYXItcHJvZ3Jlc3NfX2JhciBtZGMtbGluZWFyLXByb2dyZXNzX19wcmltYXJ5LWJhclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtbGluZWFyLXByb2dyZXNzX19iYXItaW5uZXJcIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1kYy1saW5lYXItcHJvZ3Jlc3NfX2JhciBtZGMtbGluZWFyLXByb2dyZXNzX19zZWNvbmRhcnktYmFyXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cIm1kYy1saW5lYXItcHJvZ3Jlc3NfX2Jhci1pbm5lclwiLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+ICBcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9saW5lYXItcHJvZ3Jlc3MvZm91bmRhdGlvbidcblxuY29uc3QgUHJvZ3Jlc3NQcm9wVHlwZSA9IHtcbiAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgdmFsaWRhdG9yKHZhbHVlKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSkgPj0gMCAmJiBOdW1iZXIodmFsdWUpIDw9IDFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtbGluZWFyLXByb2dyZXNzJyxcbiAgcHJvcHM6IHtcbiAgICBvcGVuOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfSxcbiAgICBpbmRldGVybWluYXRlOiBCb29sZWFuLFxuICAgIHJldmVyc2U6IEJvb2xlYW4sXG4gICAgYWNjZW50OiBCb29sZWFuLFxuICAgIHByb2dyZXNzOiBQcm9ncmVzc1Byb3BUeXBlLFxuICAgIGJ1ZmZlcjogUHJvZ3Jlc3NQcm9wVHlwZVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7ICdtZGMtbGluZWFyLXByb2dyZXNzLS1hY2NlbnQnOiB0aGlzLmFjY2VudCB9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBvcGVuKCkge1xuICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24ub3BlbigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uY2xvc2UoKVxuICAgICAgfVxuICAgIH0sXG4gICAgcHJvZ3Jlc3MoKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0UHJvZ3Jlc3MoTnVtYmVyKHRoaXMucHJvZ3Jlc3MpKVxuICAgIH0sXG4gICAgYnVmZmVyKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldEJ1ZmZlcihOdW1iZXIodGhpcy5idWZmZXIpKVxuICAgIH0sXG4gICAgaW5kZXRlcm1pbmF0ZSgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXREZXRlcm1pbmF0ZSghdGhpcy5pbmRldGVybWluYXRlKVxuICAgIH0sXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRSZXZlcnNlKHRoaXMucmV2ZXJzZSlcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzczogY2xhc3NOYW1lID0+IHtcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKVxuICAgICAgfSxcbiAgICAgIGdldFByaW1hcnlCYXI6ICgpID0+IC8qIGVsOiBFbGVtZW50ICovIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMucHJpbWFyeVxuICAgICAgfSxcbiAgICAgIGdldEJ1ZmZlcjogKCkgPT4gLyogZWw6IEVsZW1lbnQgKi8ge1xuICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5idWZmZXJcbiAgICAgIH0sXG4gICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IHtcbiAgICAgICAgdGhpcy4kZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgICAgIH0sXG4gICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHtcbiAgICAgICAgdGhpcy4kZGVsZXRlKHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgfSxcbiAgICAgIHNldFN0eWxlOiAoZWwsIHN0eWxlUHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlW3N0eWxlUHJvcGVydHldID0gdmFsdWVcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcblxuICAgIHRoaXMuZm91bmRhdGlvbi5zZXRSZXZlcnNlKHRoaXMucmV2ZXJzZSlcbiAgICB0aGlzLmZvdW5kYXRpb24uc2V0UHJvZ3Jlc3MoTnVtYmVyKHRoaXMucHJvZ3Jlc3MpKVxuICAgIHRoaXMuZm91bmRhdGlvbi5zZXRCdWZmZXIoTnVtYmVyKHRoaXMuYnVmZmVyKSlcbiAgICB0aGlzLmZvdW5kYXRpb24uc2V0RGV0ZXJtaW5hdGUoIXRoaXMuaW5kZXRlcm1pbmF0ZSlcbiAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24ub3BlbigpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5jbG9zZSgpXG4gICAgfVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoY29tcGlsZWRUZW1wbGF0ZSwgaW5qZWN0U3R5bGUsIGRlZmF1bHRFeHBvcnQsIHNjb3BlSWQsIGlzRnVuY3Rpb25hbFRlbXBsYXRlLCBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovLCBpc1NoYWRvd01vZGUsIGNyZWF0ZUluamVjdG9yLCBjcmVhdGVJbmplY3RvclNTUiwgY3JlYXRlSW5qZWN0b3JTaGFkb3cpIHtcbiAgICBpZiAodHlwZW9mIGlzU2hhZG93TW9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjcmVhdGVJbmplY3RvclNTUiA9IGNyZWF0ZUluamVjdG9yO1xuICAgICAgICBjcmVhdGVJbmplY3RvciA9IGlzU2hhZG93TW9kZTtcbiAgICAgICAgaXNTaGFkb3dNb2RlID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgICBjb25zdCBvcHRpb25zID0gdHlwZW9mIGRlZmF1bHRFeHBvcnQgPT09ICdmdW5jdGlvbicgPyBkZWZhdWx0RXhwb3J0Lm9wdGlvbnMgOiBkZWZhdWx0RXhwb3J0O1xuICAgIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgICBpZiAoY29tcGlsZWRUZW1wbGF0ZSAmJiBjb21waWxlZFRlbXBsYXRlLnJlbmRlcikge1xuICAgICAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyO1xuICAgICAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zO1xuICAgICAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWU7XG4gICAgICAgIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgICAgICAgaWYgKGlzRnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNjb3BlZElkXG4gICAgaWYgKHNjb3BlSWQpIHtcbiAgICAgICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWQ7XG4gICAgfVxuICAgIGxldCBob29rO1xuICAgIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7XG4gICAgICAgIC8vIHNlcnZlciBidWlsZFxuICAgICAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgICAgICAgIGNvbnRleHQgPVxuICAgICAgICAgICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpOyAvLyBmdW5jdGlvbmFsXG4gICAgICAgICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgICAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfXztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICAgICAgICBpZiAoaW5qZWN0U3R5bGUpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yU1NSKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJlbmNlXG4gICAgICAgICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAgICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICAgICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmplY3RTdHlsZSkge1xuICAgICAgICBob29rID0gaXNTaGFkb3dNb2RlXG4gICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yU2hhZG93KHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGluamVjdFN0eWxlLmNhbGwodGhpcywgY3JlYXRlSW5qZWN0b3IoY29udGV4dCkpO1xuICAgICAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGhvb2spIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyO1xuICAgICAgICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24oaCwgY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGhvb2suY2FsbChjb250ZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGU7XG4gICAgICAgICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKSA6IFtob29rXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdEV4cG9ydDtcbn1cbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IG1kY0xpbmVhclByb2dyZXNzIGZyb20gJy4vbWRjLWxpbmVhci1wcm9ncmVzcy52dWUnXG5cbmV4cG9ydCB7IG1kY0xpbmVhclByb2dyZXNzIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY0xpbmVhclByb2dyZXNzXG59KVxuIiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJ1xuaW1wb3J0IHsgYXV0b0luaXQgfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHBsdWdpbiBmcm9tICcuL2luZGV4LmpzJ1xuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXG5cbmF1dG9Jbml0KHBsdWdpbilcbiJdLCJuYW1lcyI6WyJhdXRvSW5pdCIsInBsdWdpbiIsIl9WdWUiLCJ3aW5kb3ciLCJWdWUiLCJnbG9iYWwiLCJ1c2UiLCJCYXNlUGx1Z2luIiwiY29tcG9uZW50cyIsInZlcnNpb24iLCJpbnN0YWxsIiwidm0iLCJrZXkiLCJjb21wb25lbnQiLCJuYW1lIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIk1EQ0ZvdW5kYXRpb24iLCJhZGFwdGVyIiwiYWRhcHRlcl8iLCJ0cmFuc2Zvcm1TdHlsZVByb3BlcnRpZXMiLCJjc3NDbGFzc2VzIiwiQ0xPU0VEX0NMQVNTIiwiSU5ERVRFUk1JTkFURV9DTEFTUyIsIlJFVkVSU0VEX0NMQVNTIiwic3RyaW5ncyIsIlBSSU1BUllfQkFSX1NFTEVDVE9SIiwiQlVGRkVSX1NFTEVDVE9SIiwiTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uIiwiYWRkQ2xhc3MiLCJnZXRQcmltYXJ5QmFyIiwiZ2V0QnVmZmVyIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNldFN0eWxlIiwiZGVmYXVsdEFkYXB0ZXIiLCJkZXRlcm1pbmF0ZV8iLCJyZXZlcnNlXyIsInByb2dyZXNzXyIsImlzRGV0ZXJtaW5hdGUiLCJzZXRTY2FsZV8iLCJ2YWx1ZSIsImlzUmV2ZXJzZWQiLCJlbCIsInNjYWxlVmFsdWUiLCJmb3JFYWNoIiwidHJhbnNmb3JtU3R5bGVQcm9wZXJ0eSIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsImNvbXBpbGVkVGVtcGxhdGUiLCJpbmplY3RTdHlsZSIsImRlZmF1bHRFeHBvcnQiLCJzY29wZUlkIiwiaXNGdW5jdGlvbmFsVGVtcGxhdGUiLCJtb2R1bGVJZGVudGlmaWVyIiwiaXNTaGFkb3dNb2RlIiwiY3JlYXRlSW5qZWN0b3IiLCJjcmVhdGVJbmplY3RvclNTUiIsImNyZWF0ZUluamVjdG9yU2hhZG93Iiwib3B0aW9ucyIsInJlbmRlciIsInN0YXRpY1JlbmRlckZucyIsIl9jb21waWxlZCIsImZ1bmN0aW9uYWwiLCJfc2NvcGVJZCIsImhvb2siLCJjb250ZXh0IiwiJHZub2RlIiwic3NyQ29udGV4dCIsInBhcmVudCIsIl9fVlVFX1NTUl9DT05URVhUX18iLCJjYWxsIiwiX3JlZ2lzdGVyZWRDb21wb25lbnRzIiwiYWRkIiwiX3NzclJlZ2lzdGVyIiwiJHJvb3QiLCIkb3B0aW9ucyIsInNoYWRvd1Jvb3QiLCJvcmlnaW5hbFJlbmRlciIsInJlbmRlcldpdGhTdHlsZUluamVjdGlvbiIsImgiLCJleGlzdGluZyIsImJlZm9yZUNyZWF0ZSIsImNvbmNhdCIsIm1kY0xpbmVhclByb2dyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQU8sU0FBU0EsUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEI7SUFDL0I7SUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7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
