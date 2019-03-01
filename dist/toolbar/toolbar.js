/**
* @module vue-mdc-adaptertoolbar 0.19.4-beta
* @exports VueMDCToolbar
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^1.0.0-0","material-components-web":"^1.0.0-0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.VueMDCToolbar = factory());
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

    var plugin = BasePlugin({
      mdcToolbar: mdcToolbar,
      mdcToolbarRow: mdcToolbarRow,
      mdcToolbarSection: mdcToolbarSection,
      mdcToolbarMenuIcon: mdcToolbarMenuIcon,
      mdcToolbarTitle: mdcToolbarTitle,
      mdcToolbarIcon: mdcToolbarIcon
    });

    autoInit(plugin);

    return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9iYXNlL2F1dG8taW5pdC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9iYXNlLXBsdWdpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZXZlbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvZGlzcGF0Y2gtZXZlbnQtbWl4aW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvdW5pcXVlaWQtbWl4aW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3Rvb2xiYXIvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90b29sYmFyL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9jb21wb25lbnRzL3Rvb2xiYXIvbWRjLXRvb2xiYXIudnVlIiwiLi4vLi4vY29tcG9uZW50cy90b29sYmFyL21kYy10b29sYmFyLXJvdy52dWUiLCIuLi8uLi9jb21wb25lbnRzL3Rvb2xiYXIvbWRjLXRvb2xiYXItc2VjdGlvbi52dWUiLCIuLi8uLi9jb21wb25lbnRzL3Rvb2xiYXIvbWRjLXRvb2xiYXItbWVudS1pY29uLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvdG9vbGJhci9tZGMtdG9vbGJhci10aXRsZS52dWUiLCIuLi8uLi9jb21wb25lbnRzL3Rvb2xiYXIvbWRjLXRvb2xiYXItaWNvbi52dWUiLCIuLi8uLi9jb21wb25lbnRzL3Rvb2xiYXIvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3Rvb2xiYXIvZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGF1dG9Jbml0KHBsdWdpbikge1xuICAvLyBBdXRvLWluc3RhbGxcbiAgbGV0IF9WdWUgPSBudWxsXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIF9WdWUgPSB3aW5kb3cuVnVlXG4gIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvKmdsb2JhbCBnbG9iYWwqL1xuICAgIF9WdWUgPSBnbG9iYWwuVnVlXG4gIH1cbiAgaWYgKF9WdWUpIHtcbiAgICBfVnVlLnVzZShwbHVnaW4pXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBCYXNlUGx1Z2luKGNvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnX19WRVJTSU9OX18nLFxuICAgIGluc3RhbGw6IHZtID0+IHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2tleV1cbiAgICAgICAgdm0uY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQpXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImV4cG9ydCBjb25zdCBEaXNwYXRjaEV2ZW50TWl4aW4gPSB7XG4gIHByb3BzOiB7XG4gICAgZXZlbnQ6IFN0cmluZyxcbiAgICAnZXZlbnQtdGFyZ2V0JzogT2JqZWN0LFxuICAgICdldmVudC1hcmdzJzogQXJyYXlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRpc3BhdGNoRXZlbnQoZXZ0KSB7XG4gICAgICBldnQgJiYgdGhpcy4kZW1pdChldnQudHlwZSwgZXZ0KVxuICAgICAgaWYgKHRoaXMuZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZXZlbnRUYXJnZXQgfHwgdGhpcy4kcm9vdFxuICAgICAgICBsZXQgYXJncyA9IHRoaXMuZXZlbnRBcmdzIHx8IFtdXG4gICAgICAgIHRhcmdldC4kZW1pdCh0aGlzLmV2ZW50LCAuLi5hcmdzKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaXN0ZW5lcnMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLiRsaXN0ZW5lcnMsXG4gICAgICAgIGNsaWNrOiBlID0+IHRoaXMuZGlzcGF0Y2hFdmVudChlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgTURDRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgaWYgKGFkYXB0ZXIgPT09IHZvaWQgMCkgeyBhZGFwdGVyID0ge307IH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAgICAgICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAgICAgICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0ZvdW5kYXRpb247XG59KCkpO1xuZXhwb3J0IHsgTURDRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0IHZhciBjc3NDbGFzc2VzID0ge1xuICAgIEZJWEVEOiAnbWRjLXRvb2xiYXItLWZpeGVkJyxcbiAgICBGSVhFRF9BVF9MQVNUX1JPVzogJ21kYy10b29sYmFyLS1maXhlZC1hdC1sYXN0LXJvdycsXG4gICAgRklYRURfTEFTVFJPVzogJ21kYy10b29sYmFyLS1maXhlZC1sYXN0cm93LW9ubHknLFxuICAgIEZMRVhJQkxFX0RFRkFVTFRfQkVIQVZJT1I6ICdtZGMtdG9vbGJhci0tZmxleGlibGUtZGVmYXVsdC1iZWhhdmlvcicsXG4gICAgRkxFWElCTEVfTUFYOiAnbWRjLXRvb2xiYXItLWZsZXhpYmxlLXNwYWNlLW1heGltaXplZCcsXG4gICAgRkxFWElCTEVfTUlOOiAnbWRjLXRvb2xiYXItLWZsZXhpYmxlLXNwYWNlLW1pbmltaXplZCcsXG4gICAgVE9PTEJBUl9ST1dfRkxFWElCTEU6ICdtZGMtdG9vbGJhci0tZmxleGlibGUnLFxufTtcbmV4cG9ydCB2YXIgc3RyaW5ncyA9IHtcbiAgICBDSEFOR0VfRVZFTlQ6ICdNRENUb29sYmFyOmNoYW5nZScsXG4gICAgRklSU1RfUk9XX1NFTEVDVE9SOiAnLm1kYy10b29sYmFyX19yb3c6Zmlyc3QtY2hpbGQnLFxuICAgIElDT05fU0VMRUNUT1I6ICcubWRjLXRvb2xiYXJfX2ljb24nLFxuICAgIFRJVExFX1NFTEVDVE9SOiAnLm1kYy10b29sYmFyX190aXRsZScsXG59O1xuZXhwb3J0IHZhciBudW1iZXJzID0ge1xuICAgIE1BWF9USVRMRV9TSVpFOiAyLjEyNSxcbiAgICBNSU5fVElUTEVfU0laRTogMS4yNSxcbiAgICBUT09MQkFSX01PQklMRV9CUkVBS1BPSU5UOiA2MDAsXG4gICAgVE9PTEJBUl9ST1dfSEVJR0hUOiA2NCxcbiAgICBUT09MQkFSX1JPV19NT0JJTEVfSEVJR0hUOiA1Nixcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENUb29sYmFyRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENUb29sYmFyRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENUb29sYmFyRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY2hlY2tSb3dIZWlnaHRGcmFtZV8gPSAwO1xuICAgICAgICBfdGhpcy5zY3JvbGxGcmFtZV8gPSAwO1xuICAgICAgICBfdGhpcy5leGVjdXRlZExhc3RDaGFuZ2VfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzRml4ZWRfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzRml4ZWRMYXN0Um93XyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5oYXNGbGV4aWJsZUZpcnN0Um93XyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy51c2VGbGV4RGVmYXVsdEJlaGF2aW9yXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5jYWxjdWxhdGlvbnNfID0ge1xuICAgICAgICAgICAgZmxleGlibGVFeHBhbnNpb25IZWlnaHQ6IDAsXG4gICAgICAgICAgICBmbGV4aWJsZUV4cGFuc2lvblJhdGlvOiAwLFxuICAgICAgICAgICAgbWF4VHJhbnNsYXRlWURpc3RhbmNlOiAwLFxuICAgICAgICAgICAgbWF4VHJhbnNsYXRlWVJhdGlvOiAwLFxuICAgICAgICAgICAgc2Nyb2xsVGhyZXNob2xkOiAwLFxuICAgICAgICAgICAgc2Nyb2xsVGhyZXNob2xkUmF0aW86IDAsXG4gICAgICAgICAgICB0b29sYmFySGVpZ2h0OiAwLFxuICAgICAgICAgICAgdG9vbGJhclJhdGlvOiAwLFxuICAgICAgICAgICAgdG9vbGJhclJvd0hlaWdodDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVG9vbGJhckZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUb29sYmFyRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVG9vbGJhckZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJTY3JvbGxIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlclNjcm9sbEhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFZpZXdwb3J0V2lkdGg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgZ2V0Vmlld3BvcnRTY3JvbGxZOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGdldE9mZnNldEhlaWdodDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBnZXRGaXJzdFJvd0VsZW1lbnRPZmZzZXRIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5Q2hhbmdlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0U3R5bGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRTdHlsZUZvclRpdGxlRWxlbWVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldFN0eWxlRm9yRmxleGlibGVSb3dFbGVtZW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0U3R5bGVGb3JGaXhlZEFkanVzdEVsZW1lbnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENUb29sYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5pc0ZpeGVkXyA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5GSVhFRCk7XG4gICAgICAgIHRoaXMuaXNGaXhlZExhc3RSb3dfID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkZJWEVEX0xBU1RST1cpICYmIHRoaXMuaXNGaXhlZF87XG4gICAgICAgIHRoaXMuaGFzRmxleGlibGVGaXJzdFJvd18gPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuVE9PTEJBUl9ST1dfRkxFWElCTEUpO1xuICAgICAgICBpZiAodGhpcy5oYXNGbGV4aWJsZUZpcnN0Um93Xykge1xuICAgICAgICAgICAgdGhpcy51c2VGbGV4RGVmYXVsdEJlaGF2aW9yXyA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5GTEVYSUJMRV9ERUZBVUxUX0JFSEFWSU9SKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2l6ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY2hlY2tSb3dIZWlnaHRfKCk7IH07XG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy51cGRhdGVUb29sYmFyU3R5bGVzXygpOyB9O1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclNjcm9sbEhhbmRsZXIodGhpcy5zY3JvbGxIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuaW5pdEtleVJhdGlvXygpO1xuICAgICAgICB0aGlzLnNldEtleUhlaWdodHNfKCk7XG4gICAgfTtcbiAgICBNRENUb29sYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyU2Nyb2xsSGFuZGxlcih0aGlzLnNjcm9sbEhhbmRsZXJfKTtcbiAgICB9O1xuICAgIE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVBZGp1c3RFbGVtZW50U3R5bGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0ZpeGVkXykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZUZvckZpeGVkQWRqdXN0RWxlbWVudCgnbWFyZ2luLXRvcCcsIHRoaXMuY2FsY3VsYXRpb25zXy50b29sYmFySGVpZ2h0ICsgXCJweFwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDVG9vbGJhckZvdW5kYXRpb24ucHJvdG90eXBlLmdldEZsZXhpYmxlRXhwYW5zaW9uUmF0aW9fID0gZnVuY3Rpb24gKHNjcm9sbFRvcCkge1xuICAgICAgICAvLyBUbyBwcmV2ZW50IGRpdmlzaW9uIGJ5IHplcm8gd2hlbiB0aGVyZSBpcyBubyBmbGV4aWJsZUV4cGFuc2lvbkhlaWdodFxuICAgICAgICB2YXIgZGVsdGEgPSAwLjAwMDE7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCgwLCAxIC0gc2Nyb2xsVG9wIC8gKHRoaXMuY2FsY3VsYXRpb25zXy5mbGV4aWJsZUV4cGFuc2lvbkhlaWdodCArIGRlbHRhKSk7XG4gICAgfTtcbiAgICBNRENUb29sYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuY2hlY2tSb3dIZWlnaHRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmNoZWNrUm93SGVpZ2h0RnJhbWVfKTtcbiAgICAgICAgdGhpcy5jaGVja1Jvd0hlaWdodEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zZXRLZXlIZWlnaHRzXygpOyB9KTtcbiAgICB9O1xuICAgIE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRLZXlIZWlnaHRzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5ld1Rvb2xiYXJSb3dIZWlnaHQgPSB0aGlzLmdldFJvd0hlaWdodF8oKTtcbiAgICAgICAgaWYgKG5ld1Rvb2xiYXJSb3dIZWlnaHQgIT09IHRoaXMuY2FsY3VsYXRpb25zXy50b29sYmFyUm93SGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhclJvd0hlaWdodCA9IG5ld1Rvb2xiYXJSb3dIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhckhlaWdodCA9IHRoaXMuY2FsY3VsYXRpb25zXy50b29sYmFyUmF0aW8gKiB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhclJvd0hlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRpb25zXy5mbGV4aWJsZUV4cGFuc2lvbkhlaWdodCA9XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGlvbnNfLmZsZXhpYmxlRXhwYW5zaW9uUmF0aW8gKiB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhclJvd0hlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRpb25zXy5tYXhUcmFuc2xhdGVZRGlzdGFuY2UgPVxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRpb25zXy5tYXhUcmFuc2xhdGVZUmF0aW8gKiB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhclJvd0hlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRpb25zXy5zY3JvbGxUaHJlc2hvbGQgPVxuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRpb25zXy5zY3JvbGxUaHJlc2hvbGRSYXRpbyAqIHRoaXMuY2FsY3VsYXRpb25zXy50b29sYmFyUm93SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBZGp1c3RFbGVtZW50U3R5bGVzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRvb2xiYXJTdHlsZXNfKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVUb29sYmFyU3R5bGVzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5zY3JvbGxGcmFtZV8pO1xuICAgICAgICB0aGlzLnNjcm9sbEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gX3RoaXMuYWRhcHRlcl8uZ2V0Vmlld3BvcnRTY3JvbGxZKCk7XG4gICAgICAgICAgICB2YXIgaGFzU2Nyb2xsZWRPdXRPZlRocmVzaG9sZCA9IF90aGlzLnNjcm9sbGVkT3V0T2ZUaHJlc2hvbGRfKHNjcm9sbFRvcCk7XG4gICAgICAgICAgICBpZiAoaGFzU2Nyb2xsZWRPdXRPZlRocmVzaG9sZCAmJiBfdGhpcy5leGVjdXRlZExhc3RDaGFuZ2VfKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZsZXhpYmxlRXhwYW5zaW9uUmF0aW8gPSBfdGhpcy5nZXRGbGV4aWJsZUV4cGFuc2lvblJhdGlvXyhzY3JvbGxUb3ApO1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlVG9vbGJhckZsZXhpYmxlU3RhdGVfKGZsZXhpYmxlRXhwYW5zaW9uUmF0aW8pO1xuICAgICAgICAgICAgaWYgKF90aGlzLmlzRml4ZWRMYXN0Um93Xykge1xuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVRvb2xiYXJGaXhlZFN0YXRlXyhzY3JvbGxUb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF90aGlzLmhhc0ZsZXhpYmxlRmlyc3RSb3dfKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlRmxleGlibGVSb3dFbGVtZW50U3R5bGVzXyhmbGV4aWJsZUV4cGFuc2lvblJhdGlvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmV4ZWN1dGVkTGFzdENoYW5nZV8gPSBoYXNTY3JvbGxlZE91dE9mVGhyZXNob2xkO1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ubm90aWZ5Q2hhbmdlKHsgZmxleGlibGVFeHBhbnNpb25SYXRpbzogZmxleGlibGVFeHBhbnNpb25SYXRpbyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENUb29sYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuc2Nyb2xsZWRPdXRPZlRocmVzaG9sZF8gPSBmdW5jdGlvbiAoc2Nyb2xsVG9wKSB7XG4gICAgICAgIHJldHVybiBzY3JvbGxUb3AgPiB0aGlzLmNhbGN1bGF0aW9uc18uc2Nyb2xsVGhyZXNob2xkO1xuICAgIH07XG4gICAgTURDVG9vbGJhckZvdW5kYXRpb24ucHJvdG90eXBlLmluaXRLZXlSYXRpb18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0b29sYmFyUm93SGVpZ2h0ID0gdGhpcy5nZXRSb3dIZWlnaHRfKCk7XG4gICAgICAgIHZhciBmaXJzdFJvd01heFJhdGlvID0gdGhpcy5hZGFwdGVyXy5nZXRGaXJzdFJvd0VsZW1lbnRPZmZzZXRIZWlnaHQoKSAvIHRvb2xiYXJSb3dIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRpb25zXy50b29sYmFyUmF0aW8gPSB0aGlzLmFkYXB0ZXJfLmdldE9mZnNldEhlaWdodCgpIC8gdG9vbGJhclJvd0hlaWdodDtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGlvbnNfLmZsZXhpYmxlRXhwYW5zaW9uUmF0aW8gPSBmaXJzdFJvd01heFJhdGlvIC0gMTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGlvbnNfLm1heFRyYW5zbGF0ZVlSYXRpbyA9XG4gICAgICAgICAgICB0aGlzLmlzRml4ZWRMYXN0Um93XyA/IHRoaXMuY2FsY3VsYXRpb25zXy50b29sYmFyUmF0aW8gLSBmaXJzdFJvd01heFJhdGlvIDogMDtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGlvbnNfLnNjcm9sbFRocmVzaG9sZFJhdGlvID1cbiAgICAgICAgICAgICh0aGlzLmlzRml4ZWRMYXN0Um93XyA/IHRoaXMuY2FsY3VsYXRpb25zXy50b29sYmFyUmF0aW8gOiBmaXJzdFJvd01heFJhdGlvKSAtIDE7XG4gICAgfTtcbiAgICBNRENUb29sYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0Um93SGVpZ2h0XyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJyZWFrcG9pbnQgPSBudW1iZXJzLlRPT0xCQVJfTU9CSUxFX0JSRUFLUE9JTlQ7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmdldFZpZXdwb3J0V2lkdGgoKSA8IGJyZWFrcG9pbnQgP1xuICAgICAgICAgICAgbnVtYmVycy5UT09MQkFSX1JPV19NT0JJTEVfSEVJR0hUIDogbnVtYmVycy5UT09MQkFSX1JPV19IRUlHSFQ7XG4gICAgfTtcbiAgICBNRENUb29sYmFyRm91bmRhdGlvbi5wcm90b3R5cGUudXBkYXRlVG9vbGJhckZsZXhpYmxlU3RhdGVfID0gZnVuY3Rpb24gKGZsZXhpYmxlRXhwYW5zaW9uUmF0aW8pIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkZMRVhJQkxFX01BWCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5GTEVYSUJMRV9NSU4pO1xuICAgICAgICBpZiAoZmxleGlibGVFeHBhbnNpb25SYXRpbyA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkZMRVhJQkxFX01BWCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmxleGlibGVFeHBhbnNpb25SYXRpbyA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkZMRVhJQkxFX01JTik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVUb29sYmFyRml4ZWRTdGF0ZV8gPSBmdW5jdGlvbiAoc2Nyb2xsVG9wKSB7XG4gICAgICAgIHZhciB0cmFuc2xhdGVEaXN0YW5jZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHNjcm9sbFRvcCAtIHRoaXMuY2FsY3VsYXRpb25zXy5mbGV4aWJsZUV4cGFuc2lvbkhlaWdodCwgdGhpcy5jYWxjdWxhdGlvbnNfLm1heFRyYW5zbGF0ZVlEaXN0YW5jZSkpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFN0eWxlKCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZVkoXCIgKyAtdHJhbnNsYXRlRGlzdGFuY2UgKyBcInB4KVwiKTtcbiAgICAgICAgaWYgKHRyYW5zbGF0ZURpc3RhbmNlID09PSB0aGlzLmNhbGN1bGF0aW9uc18ubWF4VHJhbnNsYXRlWURpc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuRklYRURfQVRfTEFTVF9ST1cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkZJWEVEX0FUX0xBU1RfUk9XKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDVG9vbGJhckZvdW5kYXRpb24ucHJvdG90eXBlLnVwZGF0ZUZsZXhpYmxlUm93RWxlbWVudFN0eWxlc18gPSBmdW5jdGlvbiAoZmxleGlibGVFeHBhbnNpb25SYXRpbykge1xuICAgICAgICBpZiAodGhpcy5pc0ZpeGVkXykge1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuY2FsY3VsYXRpb25zXy5mbGV4aWJsZUV4cGFuc2lvbkhlaWdodCAqIGZsZXhpYmxlRXhwYW5zaW9uUmF0aW87XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFN0eWxlRm9yRmxleGlibGVSb3dFbGVtZW50KCdoZWlnaHQnLCBoZWlnaHQgKyB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhclJvd0hlaWdodCArIFwicHhcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudXNlRmxleERlZmF1bHRCZWhhdmlvcl8pIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRWxlbWVudFN0eWxlc0RlZmF1bHRCZWhhdmlvcl8oZmxleGlibGVFeHBhbnNpb25SYXRpbyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVFbGVtZW50U3R5bGVzRGVmYXVsdEJlaGF2aW9yXyA9IGZ1bmN0aW9uIChmbGV4aWJsZUV4cGFuc2lvblJhdGlvKSB7XG4gICAgICAgIHZhciBtYXhUaXRsZVNpemUgPSBudW1iZXJzLk1BWF9USVRMRV9TSVpFO1xuICAgICAgICB2YXIgbWluVGl0bGVTaXplID0gbnVtYmVycy5NSU5fVElUTEVfU0laRTtcbiAgICAgICAgdmFyIGN1cnJlbnRUaXRsZVNpemUgPSAobWF4VGl0bGVTaXplIC0gbWluVGl0bGVTaXplKSAqIGZsZXhpYmxlRXhwYW5zaW9uUmF0aW8gKyBtaW5UaXRsZVNpemU7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U3R5bGVGb3JUaXRsZUVsZW1lbnQoJ2ZvbnQtc2l6ZScsIGN1cnJlbnRUaXRsZVNpemUgKyBcInJlbVwiKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUb29sYmFyRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDVG9vbGJhckZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENUb29sYmFyRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiPHRlbXBsYXRlPlxuICA8aGVhZGVyIGNsYXNzPVwibWRjLXRvb2xiYXItd3JhcHBlclwiPlxuICAgIDwhLS1Ub29sYmFyLS0+XG4gICAgPGRpdiBcbiAgICAgIHJlZj1cInJvb3RcIiBcbiAgICAgIDpjbGFzcz1cInJvb3RDbGFzc2VzXCIgXG4gICAgICA6c3R5bGU9XCJyb290U3R5bGVzXCI+XG4gICAgICA8c2xvdC8+XG4gICAgPC9kaXY+XG4gICAgPCEtLSBGaXhlZCBBZGp1c3QgRWxlbWVudC0tPlxuICAgIDxkaXYgXG4gICAgICB2LWlmPVwiZml4ZWQgfHwgd2F0ZXJmYWxsIHx8IGZpeGVkTGFzdHJvd1wiIFxuICAgICAgcmVmPVwiZml4ZWQtYWRqdXN0XCIgXG4gICAgICA6c3R5bGU9XCJhZGp1c3RTdHlsZXNcIlxuICAgICAgY2xhc3M9XCJtZGMtdG9vbGJhci1maXhlZC1hZGp1c3RcIi8+XG4gIDwvaGVhZGVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENUb29sYmFyRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvdG9vbGJhci9mb3VuZGF0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtdG9vbGJhcicsXG4gIHByb3BzOiB7XG4gICAgZml4ZWQ6IEJvb2xlYW4sXG4gICAgd2F0ZXJmYWxsOiBCb29sZWFuLFxuICAgICdmaXhlZC1sYXN0cm93JzogQm9vbGVhbixcbiAgICBmbGV4aWJsZTogQm9vbGVhbixcbiAgICAnZmxleGlibGUtZGVmYXVsdCc6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvb3RDbGFzc2VzOiB7XG4gICAgICAgICdtZGMtdG9vbGJhcic6IHRydWUsXG4gICAgICAgICdtZGMtdG9vbGJhci0tZml4ZWQnOiB0aGlzLmZpeGVkIHx8IHRoaXMud2F0ZXJmYWxsIHx8IHRoaXMuZml4ZWRMYXN0cm93LFxuICAgICAgICAnbWRjLXRvb2xiYXItLXdhdGVyZmFsbCc6IHRoaXMud2F0ZXJmYWxsLFxuICAgICAgICAnbWRjLXRvb2xiYXItLWZpeGVkLWxhc3Ryb3ctb25seSc6IHRoaXMuZml4ZWRMYXN0cm93LFxuICAgICAgICAnbWRjLXRvb2xiYXItLWZsZXhpYmxlJzogdGhpcy5mbGV4aWJsZSxcbiAgICAgICAgJ21kYy10b29sYmFyLS1mbGV4aWJsZS1kZWZhdWx0LWJlaGF2aW9yJzpcbiAgICAgICAgICB0aGlzLmZsZXhpYmxlICYmIHRoaXMuZmxleGlibGVEZWZhdWx0XG4gICAgICB9LFxuICAgICAgcm9vdFN0eWxlczoge30sXG4gICAgICBhZGp1c3RTdHlsZXM6IHtcbiAgICAgICAgLy8gdG8gYXZvaWQgdG9wIG1hcmdpbiBjb2xsYXBzZSB3aXRoIDphZnRlciBlbFxuICAgICAgICAvLyAwLjEgcHggc2hvdWxkIGJlIHJvdW5kZWQgdG8gMHB4XG4gICAgICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgdHJpY2tcbiAgICAgICAgLy8gaGVpZ2h0OiAnMC4xcHgnXG4gICAgICB9LFxuICAgICAgZm91bmRhdGlvbjogbnVsbFxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDVG9vbGJhckZvdW5kYXRpb24oe1xuICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLnJvb3RDbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICB9LFxuICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgIHRoaXMuJGRlbGV0ZSh0aGlzLnJvb3RDbGFzc2VzLCBjbGFzc05hbWUpXG4gICAgICB9LFxuICAgICAgaGFzQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLiRyZWZzLnJvb3QuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgICAgIH0sXG4gICAgICByZWdpc3RlclNjcm9sbEhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlcilcbiAgICAgIH0sXG4gICAgICBkZXJlZ2lzdGVyU2Nyb2xsSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKVxuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgfSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICB9LFxuICAgICAgZ2V0Vmlld3BvcnRXaWR0aDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGhcbiAgICAgIH0sXG4gICAgICBnZXRWaWV3cG9ydFNjcm9sbFk6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgfSxcbiAgICAgIGdldE9mZnNldEhlaWdodDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5yb290Lm9mZnNldEhlaWdodFxuICAgICAgfSxcbiAgICAgIGdldEZpcnN0Um93RWxlbWVudE9mZnNldEhlaWdodDogKCkgPT4ge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiRyZWZzLnJvb3QucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBNRENUb29sYmFyRm91bmRhdGlvbi5zdHJpbmdzLkZJUlNUX1JPV19TRUxFQ1RPUlxuICAgICAgICApXG4gICAgICAgIHJldHVybiBlbCA/IGVsLm9mZnNldEhlaWdodCA6IHVuZGVmaW5lZFxuICAgICAgfSxcbiAgICAgIG5vdGlmeUNoYW5nZTogZXZ0RGF0YSA9PiB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGV2dERhdGEpXG4gICAgICB9LFxuICAgICAgc2V0U3R5bGU6IChwcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMucm9vdFN0eWxlcywgcHJvcGVydHksIHZhbHVlKVxuICAgICAgfSxcbiAgICAgIHNldFN0eWxlRm9yVGl0bGVFbGVtZW50OiAocHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuJHJlZnMucm9vdC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLnN0cmluZ3MuVElUTEVfU0VMRUNUT1JcbiAgICAgICAgKVxuICAgICAgICBpZiAoZWwpIGVsLnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSlcbiAgICAgIH0sXG4gICAgICBzZXRTdHlsZUZvckZsZXhpYmxlUm93RWxlbWVudDogKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiRyZWZzLnJvb3QucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBNRENUb29sYmFyRm91bmRhdGlvbi5zdHJpbmdzLkZJUlNUX1JPV19TRUxFQ1RPUlxuICAgICAgICApXG4gICAgICAgIGlmIChlbCkgZWwuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKVxuICAgICAgfSxcbiAgICAgIHNldFN0eWxlRm9yRml4ZWRBZGp1c3RFbGVtZW50OiAocHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLmFkanVzdFN0eWxlcywgcHJvcGVydHksIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtZGMtdG9vbGJhci1yb3cgbWRjLXRvb2xiYXJfX3Jvd1wiPlxuICAgIDxzbG90Lz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRvb2xiYXItcm93J1xufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxzZWN0aW9uIFxuICAgIDpjbGFzcz1cImNsYXNzZXNcIiBcbiAgICBjbGFzcz1cIm1kYy10b29sYmFyLXNlY3Rpb24gbWRjLXRvb2xiYXJfX3NlY3Rpb25cIj5cbiAgICA8c2xvdC8+XG4gIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtdG9vbGJhci1zZWN0aW9uJyxcbiAgcHJvcHM6IHtcbiAgICAnYWxpZ24tc3RhcnQnOiBCb29sZWFuLFxuICAgICdhbGlnbi1lbmQnOiBCb29sZWFuLFxuICAgICdzaHJpbmstdG8tZml0JzogQm9vbGVhblxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgICdtZGMtdG9vbGJhcl9fc2VjdGlvbi0tYWxpZ24tc3RhcnQnOiB0aGlzLmFsaWduU3RhcnQsXG4gICAgICAgICdtZGMtdG9vbGJhcl9fc2VjdGlvbi0tYWxpZ24tZW5kJzogdGhpcy5hbGlnbkVuZCxcbiAgICAgICAgJ21kYy10b29sYmFyX19zZWN0aW9uLS1zaHJpbmstdG8tZml0JzogdGhpcy5zaHJpbmtUb0ZpdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxhIFxuICAgIDpjbGFzcz1cInsnbWF0ZXJpYWwtaWNvbnMnOiEhaWNvbn1cIlxuICAgIGNsYXNzPVwibWRjLXRvb2xiYXItbWVudS1pY29uIG1kYy10b29sYmFyX19tZW51LWljb25cIlxuICAgIHYtb249XCJsaXN0ZW5lcnNcIj5cbiAgICA8c2xvdD57eyBpY29uIH19PC9zbG90PlxuICA8L2E+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgRGlzcGF0Y2hFdmVudE1peGluIH0gZnJvbSAnLi4vYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRvb2xiYXItbWVudS1pY29uJyxcbiAgbWl4aW5zOiBbRGlzcGF0Y2hFdmVudE1peGluXSxcbiAgcHJvcHM6IHtcbiAgICBpY29uOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ21lbnUnIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxhIFxuICAgIGNsYXNzPVwibWRjLXRvb2xiYXItdGl0bGUgbWRjLXRvb2xiYXJfX3RpdGxlXCIgXG4gICAgdi1vbj1cImxpc3RlbmVyc1wiPlxuICAgIDxzbG90Lz5cbiAgPC9hPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IERpc3BhdGNoRXZlbnRNaXhpbiB9IGZyb20gJy4uL2Jhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy10b29sYmFyLXRpdGxlJyxcbiAgbWl4aW5zOiBbRGlzcGF0Y2hFdmVudE1peGluXVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxhIFxuICAgIDpjbGFzcz1cInsnbWF0ZXJpYWwtaWNvbnMnOiEhaWNvbn1cIiBcbiAgICBjbGFzcz1cIm1kYy10b29sYmFyLWljb24gbWRjLXRvb2xiYXJfX2ljb25cIlxuICAgIHYtb249XCJsaXN0ZW5lcnNcIj5cbiAgICA8c2xvdD57eyBpY29uIH19PC9zbG90PlxuICA8L2E+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgRGlzcGF0Y2hFdmVudE1peGluIH0gZnJvbSAnLi4vYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRvb2xiYXItaWNvbicsXG4gIG1peGluczogW0Rpc3BhdGNoRXZlbnRNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgaWNvbjogU3RyaW5nXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgbWRjVG9vbGJhciBmcm9tICcuL21kYy10b29sYmFyLnZ1ZSdcbmltcG9ydCBtZGNUb29sYmFyUm93IGZyb20gJy4vbWRjLXRvb2xiYXItcm93LnZ1ZSdcbmltcG9ydCBtZGNUb29sYmFyU2VjdGlvbiBmcm9tICcuL21kYy10b29sYmFyLXNlY3Rpb24udnVlJ1xuaW1wb3J0IG1kY1Rvb2xiYXJNZW51SWNvbiBmcm9tICcuL21kYy10b29sYmFyLW1lbnUtaWNvbi52dWUnXG5pbXBvcnQgbWRjVG9vbGJhclRpdGxlIGZyb20gJy4vbWRjLXRvb2xiYXItdGl0bGUudnVlJ1xuaW1wb3J0IG1kY1Rvb2xiYXJJY29uIGZyb20gJy4vbWRjLXRvb2xiYXItaWNvbi52dWUnXG5cbmV4cG9ydCB7XG4gIG1kY1Rvb2xiYXIsXG4gIG1kY1Rvb2xiYXJSb3csXG4gIG1kY1Rvb2xiYXJTZWN0aW9uLFxuICBtZGNUb29sYmFyTWVudUljb24sXG4gIG1kY1Rvb2xiYXJUaXRsZSxcbiAgbWRjVG9vbGJhckljb25cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY1Rvb2xiYXIsXG4gIG1kY1Rvb2xiYXJSb3csXG4gIG1kY1Rvb2xiYXJTZWN0aW9uLFxuICBtZGNUb29sYmFyTWVudUljb24sXG4gIG1kY1Rvb2xiYXJUaXRsZSxcbiAgbWRjVG9vbGJhckljb25cbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJEaXNwYXRjaEV2ZW50TWl4aW4iLCJwcm9wcyIsImV2ZW50IiwiU3RyaW5nIiwiT2JqZWN0IiwiQXJyYXkiLCJtZXRob2RzIiwiZGlzcGF0Y2hFdmVudCIsImV2dCIsIiRlbWl0IiwidHlwZSIsInRhcmdldCIsImV2ZW50VGFyZ2V0IiwiJHJvb3QiLCJhcmdzIiwiZXZlbnRBcmdzIiwiY29tcHV0ZWQiLCJsaXN0ZW5lcnMiLCIkbGlzdGVuZXJzIiwiY2xpY2siLCJlIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwicCIsImhhc093blByb3BlcnR5IiwiX19leHRlbmRzIiwiX18iLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImNyZWF0ZSIsIl9fYXNzaWduIiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNhbGwiLCJhcHBseSIsInRzbGliXzEuX19leHRlbmRzIiwidHNsaWJfMS5fX2Fzc2lnbiIsIm1kY1Rvb2xiYXIiLCJtZGNUb29sYmFyUm93IiwibWRjVG9vbGJhclNlY3Rpb24iLCJtZGNUb29sYmFyTWVudUljb24iLCJtZGNUb29sYmFyVGl0bGUiLCJtZGNUb29sYmFySWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUFPLFNBQVNBLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0lBQy9CO0lBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0lBQ0EsTUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0lBQ2pDRCxJQUFBQSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBZDtJQUNELEdBRkQsTUFFTyxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7SUFDeEM7SUFDQUgsSUFBQUEsSUFBSSxHQUFHRyxNQUFNLENBQUNELEdBQWQ7SUFDRDs7SUFDRCxNQUFJRixJQUFKLEVBQVU7SUFDUkEsSUFBQUEsSUFBSSxDQUFDSSxHQUFMLENBQVNMLE1BQVQ7SUFDRDtJQUNGOztJQ1pNLFNBQVNNLFVBQVQsQ0FBb0JDLFVBQXBCLEVBQWdDO0lBQ3JDLFNBQU87SUFDTEMsSUFBQUEsT0FBTyxFQUFFLGFBREo7SUFFTEMsSUFBQUEsT0FBTyxFQUFFLGlCQUFBQyxFQUFFLEVBQUk7SUFDYixXQUFLLElBQUlDLEdBQVQsSUFBZ0JKLFVBQWhCLEVBQTRCO0lBQzFCLFlBQUlLLFNBQVMsR0FBR0wsVUFBVSxDQUFDSSxHQUFELENBQTFCO0lBQ0FELFFBQUFBLEVBQUUsQ0FBQ0UsU0FBSCxDQUFhQSxTQUFTLENBQUNDLElBQXZCLEVBQTZCRCxTQUE3QjtJQUNEO0lBQ0YsS0FQSTtJQVFMTCxJQUFBQSxVQUFVLEVBQVZBO0lBUkssR0FBUDtJQVVEOzs7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
