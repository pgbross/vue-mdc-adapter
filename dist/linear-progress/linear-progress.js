/**
* @module vue-mdc-adapterlinear-progress 0.19.4-beta
* @exports VueMDCLinearProgress
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^1.0.0-0","material-components-web":"^1.0.0-0"}
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
    var cssPropertyNameMap = {
      animation: {
        prefixed: '-webkit-animation',
        standard: 'animation'
      },
      transform: {
        prefixed: '-webkit-transform',
        standard: 'transform'
      },
      transition: {
        prefixed: '-webkit-transition',
        standard: 'transition'
      }
    };

    function isWindow(windowObj) {
      return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
    }

    function getCorrectPropertyName(windowObj, cssProperty) {
      if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
        var el = windowObj.document.createElement('div');
        var _a = cssPropertyNameMap[cssProperty],
            standard = _a.standard,
            prefixed = _a.prefixed;
        var isStandard = standard in el.style;
        return isStandard ? standard : prefixed;
      }

      return cssProperty;
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
      BUFFER_SELECTOR: '.mdc-linear-progress__buffer',
      PRIMARY_BAR_SELECTOR: '.mdc-linear-progress__primary-bar'
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

    var MDCLinearProgressFoundation =
    /** @class */
    function (_super) {
      __extends(MDCLinearProgressFoundation, _super);

      function MDCLinearProgressFoundation(adapter) {
        return _super.call(this, _assign({}, MDCLinearProgressFoundation.defaultAdapter, adapter)) || this;
      }

      Object.defineProperty(MDCLinearProgressFoundation, "cssClasses", {
        get: function get() {
          return cssClasses;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCLinearProgressFoundation, "strings", {
        get: function get() {
          return strings;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCLinearProgressFoundation, "defaultAdapter", {
        get: function get() {
          return {
            addClass: function addClass() {
              return undefined;
            },
            getBuffer: function getBuffer() {
              return null;
            },
            getPrimaryBar: function getPrimaryBar() {
              return null;
            },
            hasClass: function hasClass() {
              return false;
            },
            removeClass: function removeClass() {
              return undefined;
            },
            setStyle: function setStyle() {
              return undefined;
            }
          };
        },
        enumerable: true,
        configurable: true
      });

      MDCLinearProgressFoundation.prototype.init = function () {
        this.isDeterminate_ = !this.adapter_.hasClass(cssClasses.INDETERMINATE_CLASS);
        this.isReversed_ = this.adapter_.hasClass(cssClasses.REVERSED_CLASS);
        this.progress_ = 0;
      };

      MDCLinearProgressFoundation.prototype.setDeterminate = function (isDeterminate) {
        this.isDeterminate_ = isDeterminate;

        if (this.isDeterminate_) {
          this.adapter_.removeClass(cssClasses.INDETERMINATE_CLASS);
          this.setScale_(this.adapter_.getPrimaryBar(), this.progress_);
        } else {
          this.adapter_.addClass(cssClasses.INDETERMINATE_CLASS);
          this.setScale_(this.adapter_.getPrimaryBar(), 1);
          this.setScale_(this.adapter_.getBuffer(), 1);
        }
      };

      MDCLinearProgressFoundation.prototype.setProgress = function (value) {
        this.progress_ = value;

        if (this.isDeterminate_) {
          this.setScale_(this.adapter_.getPrimaryBar(), value);
        }
      };

      MDCLinearProgressFoundation.prototype.setBuffer = function (value) {
        if (this.isDeterminate_) {
          this.setScale_(this.adapter_.getBuffer(), value);
        }
      };

      MDCLinearProgressFoundation.prototype.setReverse = function (isReversed) {
        this.isReversed_ = isReversed;

        if (this.isReversed_) {
          this.adapter_.addClass(cssClasses.REVERSED_CLASS);
        } else {
          this.adapter_.removeClass(cssClasses.REVERSED_CLASS);
        }
      };

      MDCLinearProgressFoundation.prototype.open = function () {
        this.adapter_.removeClass(cssClasses.CLOSED_CLASS);
      };

      MDCLinearProgressFoundation.prototype.close = function () {
        this.adapter_.addClass(cssClasses.CLOSED_CLASS);
      };

      MDCLinearProgressFoundation.prototype.setScale_ = function (el, scaleValue) {
        if (!el) {
          return;
        }

        var value = "scaleX(" + scaleValue + ")";
        this.adapter_.setStyle(el, getCorrectPropertyName(window, 'transform'), value);
      };

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
      

      
      var mdcLinearProgress = normalizeComponent_1(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZWFyLXByb2dyZXNzLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXV0by1pbml0LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Jhc2UtcGx1Z2luLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1ldmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS91bmlxdWVpZC1taXhpbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2FuaW1hdGlvbi91dGlsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpbmVhci1wcm9ncmVzcy9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpbmVhci1wcm9ncmVzcy9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vY29tcG9uZW50cy9saW5lYXItcHJvZ3Jlc3MvbWRjLWxpbmVhci1wcm9ncmVzcy52dWUiLCIuLi8uLi9jb21wb25lbnRzL2xpbmVhci1wcm9ncmVzcy9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvbGluZWFyLXByb2dyZXNzL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCIvKiBnbG9iYWwgQ3VzdG9tRXZlbnQgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXRDdXN0b21FdmVudChlbCwgZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgbGV0IGV2dFxuICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpXG4gIH1cbiAgZWwuZGlzcGF0Y2hFdmVudChldnQpXG59XG4iLCJjb25zdCBzY29wZSA9XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMHgxMDAwMDAwMCkpLnRvU3RyaW5nKCkgKyAnLSdcblxuZXhwb3J0IGNvbnN0IFZNQVVuaXF1ZUlkTWl4aW4gPSB7XG4gIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICB0aGlzLnZtYV91aWRfID0gc2NvcGUgKyB0aGlzLl91aWRcbiAgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NQcm9wZXJ0eU5hbWVNYXAgPSB7XG4gICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIHByZWZpeGVkOiAnLXdlYmtpdC1hbmltYXRpb24nLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbicsXG4gICAgfSxcbiAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgcHJlZml4ZWQ6ICctd2Via2l0LXRyYW5zZm9ybScsXG4gICAgICAgIHN0YW5kYXJkOiAndHJhbnNmb3JtJyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgcHJlZml4ZWQ6ICctd2Via2l0LXRyYW5zaXRpb24nLFxuICAgICAgICBzdGFuZGFyZDogJ3RyYW5zaXRpb24nLFxuICAgIH0sXG59O1xudmFyIGpzRXZlbnRUeXBlTWFwID0ge1xuICAgIGFuaW1hdGlvbmVuZDoge1xuICAgICAgICBjc3NQcm9wZXJ0eTogJ2FuaW1hdGlvbicsXG4gICAgICAgIHByZWZpeGVkOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAgICAgc3RhbmRhcmQ6ICdhbmltYXRpb25lbmQnLFxuICAgIH0sXG4gICAgYW5pbWF0aW9uaXRlcmF0aW9uOiB7XG4gICAgICAgIGNzc1Byb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRBbmltYXRpb25JdGVyYXRpb24nLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbml0ZXJhdGlvbicsXG4gICAgfSxcbiAgICBhbmltYXRpb25zdGFydDoge1xuICAgICAgICBjc3NQcm9wZXJ0eTogJ2FuaW1hdGlvbicsXG4gICAgICAgIHByZWZpeGVkOiAnd2Via2l0QW5pbWF0aW9uU3RhcnQnLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbnN0YXJ0JyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb25lbmQ6IHtcbiAgICAgICAgY3NzUHJvcGVydHk6ICd0cmFuc2l0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgc3RhbmRhcmQ6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGlzV2luZG93KHdpbmRvd09iaikge1xuICAgIHJldHVybiBCb29sZWFuKHdpbmRvd09iai5kb2N1bWVudCkgJiYgdHlwZW9mIHdpbmRvd09iai5kb2N1bWVudC5jcmVhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcnJlY3RQcm9wZXJ0eU5hbWUod2luZG93T2JqLCBjc3NQcm9wZXJ0eSkge1xuICAgIGlmIChpc1dpbmRvdyh3aW5kb3dPYmopICYmIGNzc1Byb3BlcnR5IGluIGNzc1Byb3BlcnR5TmFtZU1hcCkge1xuICAgICAgICB2YXIgZWwgPSB3aW5kb3dPYmouZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciBfYSA9IGNzc1Byb3BlcnR5TmFtZU1hcFtjc3NQcm9wZXJ0eV0sIHN0YW5kYXJkID0gX2Euc3RhbmRhcmQsIHByZWZpeGVkID0gX2EucHJlZml4ZWQ7XG4gICAgICAgIHZhciBpc1N0YW5kYXJkID0gc3RhbmRhcmQgaW4gZWwuc3R5bGU7XG4gICAgICAgIHJldHVybiBpc1N0YW5kYXJkID8gc3RhbmRhcmQgOiBwcmVmaXhlZDtcbiAgICB9XG4gICAgcmV0dXJuIGNzc1Byb3BlcnR5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcnJlY3RFdmVudE5hbWUod2luZG93T2JqLCBldmVudFR5cGUpIHtcbiAgICBpZiAoaXNXaW5kb3cod2luZG93T2JqKSAmJiBldmVudFR5cGUgaW4ganNFdmVudFR5cGVNYXApIHtcbiAgICAgICAgdmFyIGVsID0gd2luZG93T2JqLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgX2EgPSBqc0V2ZW50VHlwZU1hcFtldmVudFR5cGVdLCBzdGFuZGFyZCA9IF9hLnN0YW5kYXJkLCBwcmVmaXhlZCA9IF9hLnByZWZpeGVkLCBjc3NQcm9wZXJ0eSA9IF9hLmNzc1Byb3BlcnR5O1xuICAgICAgICB2YXIgaXNTdGFuZGFyZCA9IGNzc1Byb3BlcnR5IGluIGVsLnN0eWxlO1xuICAgICAgICByZXR1cm4gaXNTdGFuZGFyZCA/IHN0YW5kYXJkIDogcHJlZml4ZWQ7XG4gICAgfVxuICAgIHJldHVybiBldmVudFR5cGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIE1EQ0ZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIGlmIChhZGFwdGVyID09PSB2b2lkIDApIHsgYWRhcHRlciA9IHt9OyB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgICAgICAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgICAgICAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRpb24uXG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIHJldHVybiBNRENGb3VuZGF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IE1EQ0ZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBDTE9TRURfQ0xBU1M6ICdtZGMtbGluZWFyLXByb2dyZXNzLS1jbG9zZWQnLFxuICAgIElOREVURVJNSU5BVEVfQ0xBU1M6ICdtZGMtbGluZWFyLXByb2dyZXNzLS1pbmRldGVybWluYXRlJyxcbiAgICBSRVZFUlNFRF9DTEFTUzogJ21kYy1saW5lYXItcHJvZ3Jlc3MtLXJldmVyc2VkJyxcbn07XG5leHBvcnQgdmFyIHN0cmluZ3MgPSB7XG4gICAgQlVGRkVSX1NFTEVDVE9SOiAnLm1kYy1saW5lYXItcHJvZ3Jlc3NfX2J1ZmZlcicsXG4gICAgUFJJTUFSWV9CQVJfU0VMRUNUT1I6ICcubWRjLWxpbmVhci1wcm9ncmVzc19fcHJpbWFyeS1iYXInLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBnZXRDb3JyZWN0UHJvcGVydHlOYW1lIH0gZnJvbSAnQG1hdGVyaWFsL2FuaW1hdGlvbi91dGlsJztcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldEJ1ZmZlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgICAgICBnZXRQcmltYXJ5QmFyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldFN0eWxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNEZXRlcm1pbmF0ZV8gPSAhdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLklOREVURVJNSU5BVEVfQ0xBU1MpO1xuICAgICAgICB0aGlzLmlzUmV2ZXJzZWRfID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLlJFVkVSU0VEX0NMQVNTKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc18gPSAwO1xuICAgIH07XG4gICAgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXREZXRlcm1pbmF0ZSA9IGZ1bmN0aW9uIChpc0RldGVybWluYXRlKSB7XG4gICAgICAgIHRoaXMuaXNEZXRlcm1pbmF0ZV8gPSBpc0RldGVybWluYXRlO1xuICAgICAgICBpZiAodGhpcy5pc0RldGVybWluYXRlXykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLklOREVURVJNSU5BVEVfQ0xBU1MpO1xuICAgICAgICAgICAgdGhpcy5zZXRTY2FsZV8odGhpcy5hZGFwdGVyXy5nZXRQcmltYXJ5QmFyKCksIHRoaXMucHJvZ3Jlc3NfKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5JTkRFVEVSTUlOQVRFX0NMQVNTKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2NhbGVfKHRoaXMuYWRhcHRlcl8uZ2V0UHJpbWFyeUJhcigpLCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2NhbGVfKHRoaXMuYWRhcHRlcl8uZ2V0QnVmZmVyKCksIDEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLnNldFByb2dyZXNzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NfID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmlzRGV0ZXJtaW5hdGVfKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNjYWxlXyh0aGlzLmFkYXB0ZXJfLmdldFByaW1hcnlCYXIoKSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLnNldEJ1ZmZlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5pc0RldGVybWluYXRlXykge1xuICAgICAgICAgICAgdGhpcy5zZXRTY2FsZV8odGhpcy5hZGFwdGVyXy5nZXRCdWZmZXIoKSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLnNldFJldmVyc2UgPSBmdW5jdGlvbiAoaXNSZXZlcnNlZCkge1xuICAgICAgICB0aGlzLmlzUmV2ZXJzZWRfID0gaXNSZXZlcnNlZDtcbiAgICAgICAgaWYgKHRoaXMuaXNSZXZlcnNlZF8pIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5SRVZFUlNFRF9DTEFTUyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuUkVWRVJTRURfQ0xBU1MpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5DTE9TRURfQ0xBU1MpO1xuICAgIH07XG4gICAgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkNMT1NFRF9DTEFTUyk7XG4gICAgfTtcbiAgICBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLnNldFNjYWxlXyA9IGZ1bmN0aW9uIChlbCwgc2NhbGVWYWx1ZSkge1xuICAgICAgICBpZiAoIWVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gXCJzY2FsZVgoXCIgKyBzY2FsZVZhbHVlICsgXCIpXCI7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U3R5bGUoZWwsIGdldENvcnJlY3RQcm9wZXJ0eU5hbWUod2luZG93LCAndHJhbnNmb3JtJyksIHZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IFxuICAgIDpjbGFzcz1cImNsYXNzZXNcIiBcbiAgICA6c3R5bGU9XCJzdHlsZXNcIiBcbiAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIiBcbiAgICBjbGFzcz1cIm1kYy1saW5lYXItcHJvZ3Jlc3NcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWRjLWxpbmVhci1wcm9ncmVzc19fYnVmZmVyaW5nLWRvdHNcIi8+XG4gICAgPGRpdiBcbiAgICAgIHJlZj1cImJ1ZmZlclwiIFxuICAgICAgY2xhc3M9XCJtZGMtbGluZWFyLXByb2dyZXNzX19idWZmZXJcIi8+XG4gICAgPGRpdiBcbiAgICAgIHJlZj1cInByaW1hcnlcIiBcbiAgICAgIGNsYXNzPVwibWRjLWxpbmVhci1wcm9ncmVzc19fYmFyIG1kYy1saW5lYXItcHJvZ3Jlc3NfX3ByaW1hcnktYmFyXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cIm1kYy1saW5lYXItcHJvZ3Jlc3NfX2Jhci1pbm5lclwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWRjLWxpbmVhci1wcm9ncmVzc19fYmFyIG1kYy1saW5lYXItcHJvZ3Jlc3NfX3NlY29uZGFyeS1iYXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibWRjLWxpbmVhci1wcm9ncmVzc19fYmFyLWlubmVyXCIvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj4gIFxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2xpbmVhci1wcm9ncmVzcy9mb3VuZGF0aW9uJ1xuXG5jb25zdCBQcm9ncmVzc1Byb3BUeXBlID0ge1xuICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICB2YWxpZGF0b3IodmFsdWUpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlKSA+PSAwICYmIE51bWJlcih2YWx1ZSkgPD0gMVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1saW5lYXItcHJvZ3Jlc3MnLFxuICBwcm9wczoge1xuICAgIG9wZW46IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxuICAgIGluZGV0ZXJtaW5hdGU6IEJvb2xlYW4sXG4gICAgcmV2ZXJzZTogQm9vbGVhbixcbiAgICBhY2NlbnQ6IEJvb2xlYW4sXG4gICAgcHJvZ3Jlc3M6IFByb2dyZXNzUHJvcFR5cGUsXG4gICAgYnVmZmVyOiBQcm9ncmVzc1Byb3BUeXBlXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHsgJ21kYy1saW5lYXItcHJvZ3Jlc3MtLWFjY2VudCc6IHRoaXMuYWNjZW50IH0sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIG9wZW4oKSB7XG4gICAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5vcGVuKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5jbG9zZSgpXG4gICAgICB9XG4gICAgfSxcbiAgICBwcm9ncmVzcygpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRQcm9ncmVzcyhOdW1iZXIodGhpcy5wcm9ncmVzcykpXG4gICAgfSxcbiAgICBidWZmZXIoKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0QnVmZmVyKE51bWJlcih0aGlzLmJ1ZmZlcikpXG4gICAgfSxcbiAgICBpbmRldGVybWluYXRlKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldERldGVybWluYXRlKCF0aGlzLmluZGV0ZXJtaW5hdGUpXG4gICAgfSxcbiAgICByZXZlcnNlKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldFJldmVyc2UodGhpcy5yZXZlcnNlKVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICB9LFxuICAgICAgZ2V0UHJpbWFyeUJhcjogKCkgPT4gLyogZWw6IEVsZW1lbnQgKi8ge1xuICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5wcmltYXJ5XG4gICAgICB9LFxuICAgICAgZ2V0QnVmZmVyOiAoKSA9PiAvKiBlbDogRWxlbWVudCAqLyB7XG4gICAgICAgIHJldHVybiB0aGlzLiRyZWZzLmJ1ZmZlclxuICAgICAgfSxcbiAgICAgIGhhc0NsYXNzOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICB0aGlzLiRlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKVxuICAgICAgfSxcbiAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICB0aGlzLiRkZWxldGUodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUpXG4gICAgICB9LFxuICAgICAgc2V0U3R5bGU6IChlbCwgc3R5bGVQcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgICAgICAgZWwuc3R5bGVbc3R5bGVQcm9wZXJ0eV0gPSB2YWx1ZVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuXG4gICAgdGhpcy5mb3VuZGF0aW9uLnNldFJldmVyc2UodGhpcy5yZXZlcnNlKVxuICAgIHRoaXMuZm91bmRhdGlvbi5zZXRQcm9ncmVzcyhOdW1iZXIodGhpcy5wcm9ncmVzcykpXG4gICAgdGhpcy5mb3VuZGF0aW9uLnNldEJ1ZmZlcihOdW1iZXIodGhpcy5idWZmZXIpKVxuICAgIHRoaXMuZm91bmRhdGlvbi5zZXREZXRlcm1pbmF0ZSghdGhpcy5pbmRldGVybWluYXRlKVxuICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5vcGVuKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmNsb3NlKClcbiAgICB9XG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9XG59XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IG1kY0xpbmVhclByb2dyZXNzIGZyb20gJy4vbWRjLWxpbmVhci1wcm9ncmVzcy52dWUnXG5cbmV4cG9ydCB7IG1kY0xpbmVhclByb2dyZXNzIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY0xpbmVhclByb2dyZXNzXG59KVxuIiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJ1xuaW1wb3J0IHsgYXV0b0luaXQgfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHBsdWdpbiBmcm9tICcuL2luZGV4LmpzJ1xuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXG5cbmF1dG9Jbml0KHBsdWdpbilcbiJdLCJuYW1lcyI6WyJhdXRvSW5pdCIsInBsdWdpbiIsIl9WdWUiLCJ3aW5kb3ciLCJWdWUiLCJnbG9iYWwiLCJ1c2UiLCJCYXNlUGx1Z2luIiwiY29tcG9uZW50cyIsInZlcnNpb24iLCJpbnN0YWxsIiwidm0iLCJrZXkiLCJjb21wb25lbnQiLCJuYW1lIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJfX2V4dGVuZHMiLCJfXyIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiY3JlYXRlIiwiX19hc3NpZ24iLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY2FsbCIsImFwcGx5IiwidHNsaWJfMS5fX2V4dGVuZHMiLCJ0c2xpYl8xLl9fYXNzaWduIiwibWRjTGluZWFyUHJvZ3Jlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtJQUMvQjtJQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztJQUNBLE1BQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztJQUNqQ0QsSUFBQUEsSUFBSSxHQUFHQyxNQUFNLENBQUNDLEdBQWQ7SUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0lBQ3hDO0lBQ0FILElBQUFBLElBQUksR0FBR0csTUFBTSxDQUFDRCxHQUFkO0lBQ0Q7O0lBQ0QsTUFBSUYsSUFBSixFQUFVO0lBQ1JBLElBQUFBLElBQUksQ0FBQ0ksR0FBTCxDQUFTTCxNQUFUO0lBQ0Q7SUFDRjs7SUNaTSxTQUFTTSxVQUFULENBQW9CQyxVQUFwQixFQUFnQztJQUNyQyxTQUFPO0lBQ0xDLElBQUFBLE9BQU8sRUFBRSxhQURKO0lBRUxDLElBQUFBLE9BQU8sRUFBRSxpQkFBQUMsRUFBRSxFQUFJO0lBQ2IsV0FBSyxJQUFJQyxHQUFULElBQWdCSixVQUFoQixFQUE0QjtJQUMxQixZQUFJSyxTQUFTLEdBQUdMLFVBQVUsQ0FBQ0ksR0FBRCxDQUExQjtJQUNBRCxRQUFBQSxFQUFFLENBQUNFLFNBQUgsQ0FBYUEsU0FBUyxDQUFDQyxJQUF2QixFQUE2QkQsU0FBN0I7SUFDRDtJQUNG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
