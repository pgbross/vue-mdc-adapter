/**
* @module vue-mdc-adaptertoolbar 0.19.0-beta
* @exports VueMDCToolbar
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.42.0","material-components-web":"^0.42.1"}
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
      FIXED_LASTROW: 'mdc-toolbar--fixed-lastrow-only',
      FIXED_AT_LAST_ROW: 'mdc-toolbar--fixed-at-last-row',
      TOOLBAR_ROW_FLEXIBLE: 'mdc-toolbar--flexible',
      FLEXIBLE_DEFAULT_BEHAVIOR: 'mdc-toolbar--flexible-default-behavior',
      FLEXIBLE_MAX: 'mdc-toolbar--flexible-space-maximized',
      FLEXIBLE_MIN: 'mdc-toolbar--flexible-space-minimized'
    };
    var strings = {
      TITLE_SELECTOR: '.mdc-toolbar__title',
      ICON_SELECTOR: '.mdc-toolbar__icon',
      FIRST_ROW_SELECTOR: '.mdc-toolbar__row:first-child',
      CHANGE_EVENT: 'MDCToolbar:change'
    };
    var numbers = {
      MAX_TITLE_SIZE: 2.125,
      MIN_TITLE_SIZE: 1.25,
      TOOLBAR_ROW_HEIGHT: 64,
      TOOLBAR_ROW_MOBILE_HEIGHT: 56,
      TOOLBAR_MOBILE_BREAKPOINT: 600
    };

    var MDCToolbarFoundation =
    /*#__PURE__*/
    function (_MDCFoundation) {
      _inherits(MDCToolbarFoundation, _MDCFoundation);

      _createClass(MDCToolbarFoundation, null, [{
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
        key: "numbers",
        get: function get() {
          return numbers;
        }
      }, {
        key: "defaultAdapter",
        get: function get() {
          return {
            hasClass: function hasClass() {
              return (
                /* className: string */

                /* boolean */
                false
              );
            },
            addClass: function addClass()
            /* className: string */
            {},
            removeClass: function removeClass()
            /* className: string */
            {},
            registerScrollHandler: function registerScrollHandler()
            /* handler: EventListener */
            {},
            deregisterScrollHandler: function deregisterScrollHandler()
            /* handler: EventListener */
            {},
            registerResizeHandler: function registerResizeHandler()
            /* handler: EventListener */
            {},
            deregisterResizeHandler: function deregisterResizeHandler()
            /* handler: EventListener */
            {},
            getViewportWidth: function getViewportWidth() {
              return (
                /* number */
                0
              );
            },
            getViewportScrollY: function getViewportScrollY() {
              return (
                /* number */
                0
              );
            },
            getOffsetHeight: function getOffsetHeight() {
              return (
                /* number */
                0
              );
            },
            getFirstRowElementOffsetHeight: function getFirstRowElementOffsetHeight() {
              return (
                /* number */
                0
              );
            },
            notifyChange: function notifyChange()
            /* evtData: {flexibleExpansionRatio: number} */
            {},
            setStyle: function setStyle()
            /* property: string, value: string */
            {},
            setStyleForTitleElement: function setStyleForTitleElement()
            /* property: string, value: string */
            {},
            setStyleForFlexibleRowElement: function setStyleForFlexibleRowElement()
            /* property: string, value: string */
            {},
            setStyleForFixedAdjustElement: function setStyleForFixedAdjustElement()
            /* property: string, value: string */
            {}
          };
        }
      }]);

      function MDCToolbarFoundation(adapter) {
        var _this;

        _classCallCheck(this, MDCToolbarFoundation);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCToolbarFoundation).call(this, _extends(MDCToolbarFoundation.defaultAdapter, adapter)));

        _this.resizeHandler_ = function () {
          return _this.checkRowHeight_();
        };

        _this.scrollHandler_ = function () {
          return _this.updateToolbarStyles_();
        };

        _this.checkRowHeightFrame_ = 0;
        _this.scrollFrame_ = 0;
        _this.executedLastChange_ = false;
        _this.calculations_ = {
          toolbarRowHeight: 0,
          // Calculated Height ratio. We use ratio to calculate corresponding heights in resize event.
          toolbarRatio: 0,
          // The ratio of toolbar height to row height
          flexibleExpansionRatio: 0,
          // The ratio of flexible space height to row height
          maxTranslateYRatio: 0,
          // The ratio of max toolbar move up distance to row height
          scrollThresholdRatio: 0,
          // The ratio of max scrollTop that we should listen to to row height
          // Derived Heights based on the above key ratios.
          toolbarHeight: 0,
          flexibleExpansionHeight: 0,
          // Flexible row minus toolbar height (derived)
          maxTranslateYDistance: 0,
          // When toolbar only fix last row (derived)
          scrollThreshold: 0
        }; // Toolbar fixed behavior
        // If toolbar is fixed

        _this.fixed_ = false; // If fixed is targeted only at the last row

        _this.fixedLastrow_ = false; // Toolbar flexible behavior
        // If the first row is flexible

        _this.hasFlexibleRow_ = false; // If use the default behavior

        _this.useFlexDefaultBehavior_ = false;
        return _this;
      }

      _createClass(MDCToolbarFoundation, [{
        key: "init",
        value: function init() {
          this.fixed_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED);
          this.fixedLastrow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED_LASTROW) & this.fixed_;
          this.hasFlexibleRow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.TOOLBAR_ROW_FLEXIBLE);

          if (this.hasFlexibleRow_) {
            this.useFlexDefaultBehavior_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_DEFAULT_BEHAVIOR);
          }

          this.initKeyRatio_();
          this.setKeyHeights_();
          this.adapter_.registerResizeHandler(this.resizeHandler_);
          this.adapter_.registerScrollHandler(this.scrollHandler_);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.adapter_.deregisterResizeHandler(this.resizeHandler_);
          this.adapter_.deregisterScrollHandler(this.scrollHandler_);
        }
      }, {
        key: "updateAdjustElementStyles",
        value: function updateAdjustElementStyles() {
          if (this.fixed_) {
            this.adapter_.setStyleForFixedAdjustElement('margin-top', "".concat(this.calculations_.toolbarHeight, "px"));
          }
        }
      }, {
        key: "getFlexibleExpansionRatio_",
        value: function getFlexibleExpansionRatio_(scrollTop) {
          // To prevent division by zero when there is no flexibleExpansionHeight
          var delta = 0.0001;
          return Math.max(0, 1 - scrollTop / (this.calculations_.flexibleExpansionHeight + delta));
        }
      }, {
        key: "checkRowHeight_",
        value: function checkRowHeight_() {
          var _this2 = this;

          cancelAnimationFrame(this.checkRowHeightFrame_);
          this.checkRowHeightFrame_ = requestAnimationFrame(function () {
            return _this2.setKeyHeights_();
          });
        }
      }, {
        key: "setKeyHeights_",
        value: function setKeyHeights_() {
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
        }
      }, {
        key: "updateToolbarStyles_",
        value: function updateToolbarStyles_() {
          var _this3 = this;

          cancelAnimationFrame(this.scrollFrame_);
          this.scrollFrame_ = requestAnimationFrame(function () {
            var scrollTop = _this3.adapter_.getViewportScrollY();

            var hasScrolledOutOfThreshold = _this3.scrolledOutOfThreshold_(scrollTop);

            if (hasScrolledOutOfThreshold && _this3.executedLastChange_) {
              return;
            }

            var flexibleExpansionRatio = _this3.getFlexibleExpansionRatio_(scrollTop);

            _this3.updateToolbarFlexibleState_(flexibleExpansionRatio);

            if (_this3.fixedLastrow_) {
              _this3.updateToolbarFixedState_(scrollTop);
            }

            if (_this3.hasFlexibleRow_) {
              _this3.updateFlexibleRowElementStyles_(flexibleExpansionRatio);
            }

            _this3.executedLastChange_ = hasScrolledOutOfThreshold;

            _this3.adapter_.notifyChange({
              flexibleExpansionRatio: flexibleExpansionRatio
            });
          });
        }
      }, {
        key: "scrolledOutOfThreshold_",
        value: function scrolledOutOfThreshold_(scrollTop) {
          return scrollTop > this.calculations_.scrollThreshold;
        }
      }, {
        key: "initKeyRatio_",
        value: function initKeyRatio_() {
          var toolbarRowHeight = this.getRowHeight_();
          var firstRowMaxRatio = this.adapter_.getFirstRowElementOffsetHeight() / toolbarRowHeight;
          this.calculations_.toolbarRatio = this.adapter_.getOffsetHeight() / toolbarRowHeight;
          this.calculations_.flexibleExpansionRatio = firstRowMaxRatio - 1;
          this.calculations_.maxTranslateYRatio = this.fixedLastrow_ ? this.calculations_.toolbarRatio - firstRowMaxRatio : 0;
          this.calculations_.scrollThresholdRatio = (this.fixedLastrow_ ? this.calculations_.toolbarRatio : firstRowMaxRatio) - 1;
        }
      }, {
        key: "getRowHeight_",
        value: function getRowHeight_() {
          var breakpoint = MDCToolbarFoundation.numbers.TOOLBAR_MOBILE_BREAKPOINT;
          return this.adapter_.getViewportWidth() < breakpoint ? MDCToolbarFoundation.numbers.TOOLBAR_ROW_MOBILE_HEIGHT : MDCToolbarFoundation.numbers.TOOLBAR_ROW_HEIGHT;
        }
      }, {
        key: "updateToolbarFlexibleState_",
        value: function updateToolbarFlexibleState_(flexibleExpansionRatio) {
          this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
          this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);

          if (flexibleExpansionRatio === 1) {
            this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
          } else if (flexibleExpansionRatio === 0) {
            this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);
          }
        }
      }, {
        key: "updateToolbarFixedState_",
        value: function updateToolbarFixedState_(scrollTop) {
          var translateDistance = Math.max(0, Math.min(scrollTop - this.calculations_.flexibleExpansionHeight, this.calculations_.maxTranslateYDistance));
          this.adapter_.setStyle('transform', "translateY(".concat(-translateDistance, "px)"));

          if (translateDistance === this.calculations_.maxTranslateYDistance) {
            this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
          } else {
            this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
          }
        }
      }, {
        key: "updateFlexibleRowElementStyles_",
        value: function updateFlexibleRowElementStyles_(flexibleExpansionRatio) {
          if (this.fixed_) {
            var height = this.calculations_.flexibleExpansionHeight * flexibleExpansionRatio;
            this.adapter_.setStyleForFlexibleRowElement('height', "".concat(height + this.calculations_.toolbarRowHeight, "px"));
          }

          if (this.useFlexDefaultBehavior_) {
            this.updateElementStylesDefaultBehavior_(flexibleExpansionRatio);
          }
        }
      }, {
        key: "updateElementStylesDefaultBehavior_",
        value: function updateElementStylesDefaultBehavior_(flexibleExpansionRatio) {
          var maxTitleSize = MDCToolbarFoundation.numbers.MAX_TITLE_SIZE;
          var minTitleSize = MDCToolbarFoundation.numbers.MIN_TITLE_SIZE;
          var currentTitleSize = (maxTitleSize - minTitleSize) * flexibleExpansionRatio + minTitleSize;
          this.adapter_.setStyleForTitleElement('font-size', "".concat(currentTitleSize, "rem"));
        }
      }]);

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
      /* component normalizer */
      function __vue_normalize__(
        template, style, script$$1,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "/ddata/extra/vma/components/toolbar/mdc-toolbar.vue";

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
      

      
      var mdcToolbar = __vue_normalize__(
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
      /* component normalizer */
      function __vue_normalize__$1(
        template, style, script,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        const component = (typeof script === 'function' ? script.options : script) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "/ddata/extra/vma/components/toolbar/mdc-toolbar-row.vue";

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
      

      
      var mdcToolbarRow = __vue_normalize__$1(
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
      /* component normalizer */
      function __vue_normalize__$2(
        template, style, script,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        const component = (typeof script === 'function' ? script.options : script) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "/ddata/extra/vma/components/toolbar/mdc-toolbar-section.vue";

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
      

      
      var mdcToolbarSection = __vue_normalize__$2(
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
      /* component normalizer */
      function __vue_normalize__$3(
        template, style, script,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        const component = (typeof script === 'function' ? script.options : script) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "/ddata/extra/vma/components/toolbar/mdc-toolbar-menu-icon.vue";

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
      

      
      var mdcToolbarMenuIcon = __vue_normalize__$3(
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
      /* component normalizer */
      function __vue_normalize__$4(
        template, style, script,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        const component = (typeof script === 'function' ? script.options : script) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "/ddata/extra/vma/components/toolbar/mdc-toolbar-title.vue";

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
      

      
      var mdcToolbarTitle = __vue_normalize__$4(
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
      /* component normalizer */
      function __vue_normalize__$5(
        template, style, script,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        const component = (typeof script === 'function' ? script.options : script) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "/ddata/extra/vma/components/toolbar/mdc-toolbar-icon.vue";

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
      

      
      var mdcToolbarIcon = __vue_normalize__$5(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9iYXNlL2F1dG8taW5pdC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9iYXNlLXBsdWdpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZXZlbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvZGlzcGF0Y2gtZXZlbnQtbWl4aW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvdW5pcXVlaWQtbWl4aW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9vbGJhci9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3Rvb2xiYXIvZm91bmRhdGlvbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvdG9vbGJhci9tZGMtdG9vbGJhci52dWUiLCIuLi8uLi9jb21wb25lbnRzL3Rvb2xiYXIvbWRjLXRvb2xiYXItcm93LnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvdG9vbGJhci9tZGMtdG9vbGJhci1zZWN0aW9uLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvdG9vbGJhci9tZGMtdG9vbGJhci1tZW51LWljb24udnVlIiwiLi4vLi4vY29tcG9uZW50cy90b29sYmFyL21kYy10b29sYmFyLXRpdGxlLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvdG9vbGJhci9tZGMtdG9vbGJhci1pY29uLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvdG9vbGJhci9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvdG9vbGJhci9lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXV0b0luaXQocGx1Z2luKSB7XG4gIC8vIEF1dG8taW5zdGFsbFxuICBsZXQgX1Z1ZSA9IG51bGxcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgX1Z1ZSA9IHdpbmRvdy5WdWVcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8qZ2xvYmFsIGdsb2JhbCovXG4gICAgX1Z1ZSA9IGdsb2JhbC5WdWVcbiAgfVxuICBpZiAoX1Z1ZSkge1xuICAgIF9WdWUudXNlKHBsdWdpbilcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIEJhc2VQbHVnaW4oY29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICdfX1ZFUlNJT05fXycsXG4gICAgaW5zdGFsbDogdm0gPT4ge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNba2V5XVxuICAgICAgICB2bS5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHNcbiAgfVxufVxuIiwiLyogZ2xvYmFsIEN1c3RvbUV2ZW50ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Q3VzdG9tRXZlbnQoZWwsIGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gIGxldCBldnRcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICBidWJibGVzOiBzaG91bGRCdWJibGVcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKVxuICB9XG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxufVxuIiwiZXhwb3J0IGNvbnN0IERpc3BhdGNoRXZlbnRNaXhpbiA9IHtcbiAgcHJvcHM6IHtcbiAgICBldmVudDogU3RyaW5nLFxuICAgICdldmVudC10YXJnZXQnOiBPYmplY3QsXG4gICAgJ2V2ZW50LWFyZ3MnOiBBcnJheVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZGlzcGF0Y2hFdmVudChldnQpIHtcbiAgICAgIGV2dCAmJiB0aGlzLiRlbWl0KGV2dC50eXBlLCBldnQpXG4gICAgICBpZiAodGhpcy5ldmVudCkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5ldmVudFRhcmdldCB8fCB0aGlzLiRyb290XG4gICAgICAgIGxldCBhcmdzID0gdGhpcy5ldmVudEFyZ3MgfHwgW11cbiAgICAgICAgdGFyZ2V0LiRlbWl0KHRoaXMuZXZlbnQsIC4uLmFyZ3MpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpc3RlbmVycygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMuJGxpc3RlbmVycyxcbiAgICAgICAgY2xpY2s6IGUgPT4gdGhpcy5kaXNwYXRjaEV2ZW50KGUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBzY29wZSA9XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMHgxMDAwMDAwMCkpLnRvU3RyaW5nKCkgKyAnLSdcblxuZXhwb3J0IGNvbnN0IFZNQVVuaXF1ZUlkTWl4aW4gPSB7XG4gIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICB0aGlzLnZtYV91aWRfID0gc2NvcGUgKyB0aGlzLl91aWRcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIEFcbiAqL1xuY2xhc3MgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW17Y3NzQ2xhc3Nlc30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte3N0cmluZ3N9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte251bWJlcnN9ICovXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFPYmplY3R9ICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgIC8vIHZhbGlkYXRpb24uXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7QT19IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIgPSB7fSkge1xuICAgIC8qKiBAcHJvdGVjdGVkIHshQX0gKi9cbiAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5leHBvcnQgY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgRklYRUQ6ICdtZGMtdG9vbGJhci0tZml4ZWQnLFxuICBGSVhFRF9MQVNUUk9XOiAnbWRjLXRvb2xiYXItLWZpeGVkLWxhc3Ryb3ctb25seScsXG4gIEZJWEVEX0FUX0xBU1RfUk9XOiAnbWRjLXRvb2xiYXItLWZpeGVkLWF0LWxhc3Qtcm93JyxcbiAgVE9PTEJBUl9ST1dfRkxFWElCTEU6ICdtZGMtdG9vbGJhci0tZmxleGlibGUnLFxuICBGTEVYSUJMRV9ERUZBVUxUX0JFSEFWSU9SOiAnbWRjLXRvb2xiYXItLWZsZXhpYmxlLWRlZmF1bHQtYmVoYXZpb3InLFxuICBGTEVYSUJMRV9NQVg6ICdtZGMtdG9vbGJhci0tZmxleGlibGUtc3BhY2UtbWF4aW1pemVkJyxcbiAgRkxFWElCTEVfTUlOOiAnbWRjLXRvb2xiYXItLWZsZXhpYmxlLXNwYWNlLW1pbmltaXplZCcsXG59O1xuXG5leHBvcnQgY29uc3Qgc3RyaW5ncyA9IHtcbiAgVElUTEVfU0VMRUNUT1I6ICcubWRjLXRvb2xiYXJfX3RpdGxlJyxcbiAgSUNPTl9TRUxFQ1RPUjogJy5tZGMtdG9vbGJhcl9faWNvbicsXG4gIEZJUlNUX1JPV19TRUxFQ1RPUjogJy5tZGMtdG9vbGJhcl9fcm93OmZpcnN0LWNoaWxkJyxcbiAgQ0hBTkdFX0VWRU5UOiAnTURDVG9vbGJhcjpjaGFuZ2UnLFxufTtcblxuZXhwb3J0IGNvbnN0IG51bWJlcnMgPSB7XG4gIE1BWF9USVRMRV9TSVpFOiAyLjEyNSxcbiAgTUlOX1RJVExFX1NJWkU6IDEuMjUsXG4gIFRPT0xCQVJfUk9XX0hFSUdIVDogNjQsXG4gIFRPT0xCQVJfUk9XX01PQklMRV9IRUlHSFQ6IDU2LFxuICBUT09MQkFSX01PQklMRV9CUkVBS1BPSU5UOiA2MDAsXG59O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNRENUb29sYmFyRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiAvKiBib29sZWFuICovIGZhbHNlLFxuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyU2Nyb2xsSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclNjcm9sbEhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGdldFZpZXdwb3J0V2lkdGg6ICgpID0+IC8qIG51bWJlciAqLyAwLFxuICAgICAgZ2V0Vmlld3BvcnRTY3JvbGxZOiAoKSA9PiAvKiBudW1iZXIgKi8gMCxcbiAgICAgIGdldE9mZnNldEhlaWdodDogKCkgPT4gLyogbnVtYmVyICovIDAsXG4gICAgICBnZXRGaXJzdFJvd0VsZW1lbnRPZmZzZXRIZWlnaHQ6ICgpID0+IC8qIG51bWJlciAqLyAwLFxuICAgICAgbm90aWZ5Q2hhbmdlOiAoLyogZXZ0RGF0YToge2ZsZXhpYmxlRXhwYW5zaW9uUmF0aW86IG51bWJlcn0gKi8pID0+IHt9LFxuICAgICAgc2V0U3R5bGU6ICgvKiBwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHNldFN0eWxlRm9yVGl0bGVFbGVtZW50OiAoLyogcHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBzZXRTdHlsZUZvckZsZXhpYmxlUm93RWxlbWVudDogKC8qIHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgc2V0U3R5bGVGb3JGaXhlZEFkanVzdEVsZW1lbnQ6ICgvKiBwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDVG9vbGJhckZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXJfID0gKCkgPT4gdGhpcy5jaGVja1Jvd0hlaWdodF8oKTtcbiAgICB0aGlzLnNjcm9sbEhhbmRsZXJfID0gKCkgPT4gdGhpcy51cGRhdGVUb29sYmFyU3R5bGVzXygpO1xuICAgIHRoaXMuY2hlY2tSb3dIZWlnaHRGcmFtZV8gPSAwO1xuICAgIHRoaXMuc2Nyb2xsRnJhbWVfID0gMDtcbiAgICB0aGlzLmV4ZWN1dGVkTGFzdENoYW5nZV8gPSBmYWxzZTtcblxuICAgIHRoaXMuY2FsY3VsYXRpb25zXyA9IHtcbiAgICAgIHRvb2xiYXJSb3dIZWlnaHQ6IDAsXG4gICAgICAvLyBDYWxjdWxhdGVkIEhlaWdodCByYXRpby4gV2UgdXNlIHJhdGlvIHRvIGNhbGN1bGF0ZSBjb3JyZXNwb25kaW5nIGhlaWdodHMgaW4gcmVzaXplIGV2ZW50LlxuICAgICAgdG9vbGJhclJhdGlvOiAwLCAvLyBUaGUgcmF0aW8gb2YgdG9vbGJhciBoZWlnaHQgdG8gcm93IGhlaWdodFxuICAgICAgZmxleGlibGVFeHBhbnNpb25SYXRpbzogMCwgLy8gVGhlIHJhdGlvIG9mIGZsZXhpYmxlIHNwYWNlIGhlaWdodCB0byByb3cgaGVpZ2h0XG4gICAgICBtYXhUcmFuc2xhdGVZUmF0aW86IDAsIC8vIFRoZSByYXRpbyBvZiBtYXggdG9vbGJhciBtb3ZlIHVwIGRpc3RhbmNlIHRvIHJvdyBoZWlnaHRcbiAgICAgIHNjcm9sbFRocmVzaG9sZFJhdGlvOiAwLCAvLyBUaGUgcmF0aW8gb2YgbWF4IHNjcm9sbFRvcCB0aGF0IHdlIHNob3VsZCBsaXN0ZW4gdG8gdG8gcm93IGhlaWdodFxuICAgICAgLy8gRGVyaXZlZCBIZWlnaHRzIGJhc2VkIG9uIHRoZSBhYm92ZSBrZXkgcmF0aW9zLlxuICAgICAgdG9vbGJhckhlaWdodDogMCxcbiAgICAgIGZsZXhpYmxlRXhwYW5zaW9uSGVpZ2h0OiAwLCAvLyBGbGV4aWJsZSByb3cgbWludXMgdG9vbGJhciBoZWlnaHQgKGRlcml2ZWQpXG4gICAgICBtYXhUcmFuc2xhdGVZRGlzdGFuY2U6IDAsIC8vIFdoZW4gdG9vbGJhciBvbmx5IGZpeCBsYXN0IHJvdyAoZGVyaXZlZClcbiAgICAgIHNjcm9sbFRocmVzaG9sZDogMCxcbiAgICB9O1xuICAgIC8vIFRvb2xiYXIgZml4ZWQgYmVoYXZpb3JcbiAgICAvLyBJZiB0b29sYmFyIGlzIGZpeGVkXG4gICAgdGhpcy5maXhlZF8gPSBmYWxzZTtcbiAgICAvLyBJZiBmaXhlZCBpcyB0YXJnZXRlZCBvbmx5IGF0IHRoZSBsYXN0IHJvd1xuICAgIHRoaXMuZml4ZWRMYXN0cm93XyA9IGZhbHNlO1xuICAgIC8vIFRvb2xiYXIgZmxleGlibGUgYmVoYXZpb3JcbiAgICAvLyBJZiB0aGUgZmlyc3Qgcm93IGlzIGZsZXhpYmxlXG4gICAgdGhpcy5oYXNGbGV4aWJsZVJvd18gPSBmYWxzZTtcbiAgICAvLyBJZiB1c2UgdGhlIGRlZmF1bHQgYmVoYXZpb3JcbiAgICB0aGlzLnVzZUZsZXhEZWZhdWx0QmVoYXZpb3JfID0gZmFsc2U7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZml4ZWRfID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhNRENUb29sYmFyRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZJWEVEKTtcbiAgICB0aGlzLmZpeGVkTGFzdHJvd18gPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRklYRURfTEFTVFJPVykgJiB0aGlzLmZpeGVkXztcbiAgICB0aGlzLmhhc0ZsZXhpYmxlUm93XyA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoTURDVG9vbGJhckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5UT09MQkFSX1JPV19GTEVYSUJMRSk7XG4gICAgaWYgKHRoaXMuaGFzRmxleGlibGVSb3dfKSB7XG4gICAgICB0aGlzLnVzZUZsZXhEZWZhdWx0QmVoYXZpb3JfID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhNRENUb29sYmFyRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZMRVhJQkxFX0RFRkFVTFRfQkVIQVZJT1IpO1xuICAgIH1cbiAgICB0aGlzLmluaXRLZXlSYXRpb18oKTtcbiAgICB0aGlzLnNldEtleUhlaWdodHNfKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclNjcm9sbEhhbmRsZXIodGhpcy5zY3JvbGxIYW5kbGVyXyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyU2Nyb2xsSGFuZGxlcih0aGlzLnNjcm9sbEhhbmRsZXJfKTtcbiAgfVxuXG4gIHVwZGF0ZUFkanVzdEVsZW1lbnRTdHlsZXMoKSB7XG4gICAgaWYgKHRoaXMuZml4ZWRfKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldFN0eWxlRm9yRml4ZWRBZGp1c3RFbGVtZW50KCdtYXJnaW4tdG9wJywgYCR7dGhpcy5jYWxjdWxhdGlvbnNfLnRvb2xiYXJIZWlnaHR9cHhgKTtcbiAgICB9XG4gIH1cblxuICBnZXRGbGV4aWJsZUV4cGFuc2lvblJhdGlvXyhzY3JvbGxUb3ApIHtcbiAgICAvLyBUbyBwcmV2ZW50IGRpdmlzaW9uIGJ5IHplcm8gd2hlbiB0aGVyZSBpcyBubyBmbGV4aWJsZUV4cGFuc2lvbkhlaWdodFxuICAgIGNvbnN0IGRlbHRhID0gMC4wMDAxO1xuICAgIHJldHVybiBNYXRoLm1heCgwLCAxIC0gc2Nyb2xsVG9wIC8gKHRoaXMuY2FsY3VsYXRpb25zXy5mbGV4aWJsZUV4cGFuc2lvbkhlaWdodCArIGRlbHRhKSk7XG4gIH1cblxuICBjaGVja1Jvd0hlaWdodF8oKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5jaGVja1Jvd0hlaWdodEZyYW1lXyk7XG4gICAgdGhpcy5jaGVja1Jvd0hlaWdodEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnNldEtleUhlaWdodHNfKCkpO1xuICB9XG5cbiAgc2V0S2V5SGVpZ2h0c18oKSB7XG4gICAgY29uc3QgbmV3VG9vbGJhclJvd0hlaWdodCA9IHRoaXMuZ2V0Um93SGVpZ2h0XygpO1xuICAgIGlmIChuZXdUb29sYmFyUm93SGVpZ2h0ICE9PSB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhclJvd0hlaWdodCkge1xuICAgICAgdGhpcy5jYWxjdWxhdGlvbnNfLnRvb2xiYXJSb3dIZWlnaHQgPSBuZXdUb29sYmFyUm93SGVpZ2h0O1xuICAgICAgdGhpcy5jYWxjdWxhdGlvbnNfLnRvb2xiYXJIZWlnaHQgPSB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhclJhdGlvICogdGhpcy5jYWxjdWxhdGlvbnNfLnRvb2xiYXJSb3dIZWlnaHQ7XG4gICAgICB0aGlzLmNhbGN1bGF0aW9uc18uZmxleGlibGVFeHBhbnNpb25IZWlnaHQgPVxuICAgICAgICB0aGlzLmNhbGN1bGF0aW9uc18uZmxleGlibGVFeHBhbnNpb25SYXRpbyAqIHRoaXMuY2FsY3VsYXRpb25zXy50b29sYmFyUm93SGVpZ2h0O1xuICAgICAgdGhpcy5jYWxjdWxhdGlvbnNfLm1heFRyYW5zbGF0ZVlEaXN0YW5jZSA9XG4gICAgICAgIHRoaXMuY2FsY3VsYXRpb25zXy5tYXhUcmFuc2xhdGVZUmF0aW8gKiB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhclJvd0hlaWdodDtcbiAgICAgIHRoaXMuY2FsY3VsYXRpb25zXy5zY3JvbGxUaHJlc2hvbGQgPVxuICAgICAgICB0aGlzLmNhbGN1bGF0aW9uc18uc2Nyb2xsVGhyZXNob2xkUmF0aW8gKiB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhclJvd0hlaWdodDtcbiAgICAgIHRoaXMudXBkYXRlQWRqdXN0RWxlbWVudFN0eWxlcygpO1xuICAgICAgdGhpcy51cGRhdGVUb29sYmFyU3R5bGVzXygpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVRvb2xiYXJTdHlsZXNfKCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc2Nyb2xsRnJhbWVfKTtcbiAgICB0aGlzLnNjcm9sbEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmFkYXB0ZXJfLmdldFZpZXdwb3J0U2Nyb2xsWSgpO1xuICAgICAgY29uc3QgaGFzU2Nyb2xsZWRPdXRPZlRocmVzaG9sZCA9IHRoaXMuc2Nyb2xsZWRPdXRPZlRocmVzaG9sZF8oc2Nyb2xsVG9wKTtcblxuICAgICAgaWYgKGhhc1Njcm9sbGVkT3V0T2ZUaHJlc2hvbGQgJiYgdGhpcy5leGVjdXRlZExhc3RDaGFuZ2VfKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmxleGlibGVFeHBhbnNpb25SYXRpbyA9IHRoaXMuZ2V0RmxleGlibGVFeHBhbnNpb25SYXRpb18oc2Nyb2xsVG9wKTtcblxuICAgICAgdGhpcy51cGRhdGVUb29sYmFyRmxleGlibGVTdGF0ZV8oZmxleGlibGVFeHBhbnNpb25SYXRpbyk7XG4gICAgICBpZiAodGhpcy5maXhlZExhc3Ryb3dfKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVG9vbGJhckZpeGVkU3RhdGVfKHNjcm9sbFRvcCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5oYXNGbGV4aWJsZVJvd18pIHtcbiAgICAgICAgdGhpcy51cGRhdGVGbGV4aWJsZVJvd0VsZW1lbnRTdHlsZXNfKGZsZXhpYmxlRXhwYW5zaW9uUmF0aW8pO1xuICAgICAgfVxuICAgICAgdGhpcy5leGVjdXRlZExhc3RDaGFuZ2VfID0gaGFzU2Nyb2xsZWRPdXRPZlRocmVzaG9sZDtcbiAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5Q2hhbmdlKHtmbGV4aWJsZUV4cGFuc2lvblJhdGlvOiBmbGV4aWJsZUV4cGFuc2lvblJhdGlvfSk7XG4gICAgfSk7XG4gIH1cblxuICBzY3JvbGxlZE91dE9mVGhyZXNob2xkXyhzY3JvbGxUb3ApIHtcbiAgICByZXR1cm4gc2Nyb2xsVG9wID4gdGhpcy5jYWxjdWxhdGlvbnNfLnNjcm9sbFRocmVzaG9sZDtcbiAgfVxuXG4gIGluaXRLZXlSYXRpb18oKSB7XG4gICAgY29uc3QgdG9vbGJhclJvd0hlaWdodCA9IHRoaXMuZ2V0Um93SGVpZ2h0XygpO1xuICAgIGNvbnN0IGZpcnN0Um93TWF4UmF0aW8gPSB0aGlzLmFkYXB0ZXJfLmdldEZpcnN0Um93RWxlbWVudE9mZnNldEhlaWdodCgpIC8gdG9vbGJhclJvd0hlaWdodDtcbiAgICB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhclJhdGlvID0gdGhpcy5hZGFwdGVyXy5nZXRPZmZzZXRIZWlnaHQoKSAvIHRvb2xiYXJSb3dIZWlnaHQ7XG4gICAgdGhpcy5jYWxjdWxhdGlvbnNfLmZsZXhpYmxlRXhwYW5zaW9uUmF0aW8gPSBmaXJzdFJvd01heFJhdGlvIC0gMTtcbiAgICB0aGlzLmNhbGN1bGF0aW9uc18ubWF4VHJhbnNsYXRlWVJhdGlvID1cbiAgICAgIHRoaXMuZml4ZWRMYXN0cm93XyA/IHRoaXMuY2FsY3VsYXRpb25zXy50b29sYmFyUmF0aW8gLSBmaXJzdFJvd01heFJhdGlvIDogMDtcbiAgICB0aGlzLmNhbGN1bGF0aW9uc18uc2Nyb2xsVGhyZXNob2xkUmF0aW8gPVxuICAgICAgKHRoaXMuZml4ZWRMYXN0cm93XyA/IHRoaXMuY2FsY3VsYXRpb25zXy50b29sYmFyUmF0aW8gOiBmaXJzdFJvd01heFJhdGlvKSAtIDE7XG4gIH1cblxuICBnZXRSb3dIZWlnaHRfKCkge1xuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSBNRENUb29sYmFyRm91bmRhdGlvbi5udW1iZXJzLlRPT0xCQVJfTU9CSUxFX0JSRUFLUE9JTlQ7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uZ2V0Vmlld3BvcnRXaWR0aCgpIDwgYnJlYWtwb2ludCA/XG4gICAgICBNRENUb29sYmFyRm91bmRhdGlvbi5udW1iZXJzLlRPT0xCQVJfUk9XX01PQklMRV9IRUlHSFQgOiBNRENUb29sYmFyRm91bmRhdGlvbi5udW1iZXJzLlRPT0xCQVJfUk9XX0hFSUdIVDtcbiAgfVxuXG4gIHVwZGF0ZVRvb2xiYXJGbGV4aWJsZVN0YXRlXyhmbGV4aWJsZUV4cGFuc2lvblJhdGlvKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENUb29sYmFyRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZMRVhJQkxFX01BWCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENUb29sYmFyRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZMRVhJQkxFX01JTik7XG4gICAgaWYgKGZsZXhpYmxlRXhwYW5zaW9uUmF0aW8gPT09IDEpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDVG9vbGJhckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GTEVYSUJMRV9NQVgpO1xuICAgIH0gZWxzZSBpZiAoZmxleGlibGVFeHBhbnNpb25SYXRpbyA9PT0gMCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENUb29sYmFyRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZMRVhJQkxFX01JTik7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVG9vbGJhckZpeGVkU3RhdGVfKHNjcm9sbFRvcCkge1xuICAgIGNvbnN0IHRyYW5zbGF0ZURpc3RhbmNlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oXG4gICAgICBzY3JvbGxUb3AgLSB0aGlzLmNhbGN1bGF0aW9uc18uZmxleGlibGVFeHBhbnNpb25IZWlnaHQsXG4gICAgICB0aGlzLmNhbGN1bGF0aW9uc18ubWF4VHJhbnNsYXRlWURpc3RhbmNlKSk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHstdHJhbnNsYXRlRGlzdGFuY2V9cHgpYCk7XG5cbiAgICBpZiAodHJhbnNsYXRlRGlzdGFuY2UgPT09IHRoaXMuY2FsY3VsYXRpb25zXy5tYXhUcmFuc2xhdGVZRGlzdGFuY2UpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDVG9vbGJhckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GSVhFRF9BVF9MQVNUX1JPVyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVG9vbGJhckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GSVhFRF9BVF9MQVNUX1JPVyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRmxleGlibGVSb3dFbGVtZW50U3R5bGVzXyhmbGV4aWJsZUV4cGFuc2lvblJhdGlvKSB7XG4gICAgaWYgKHRoaXMuZml4ZWRfKSB7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNhbGN1bGF0aW9uc18uZmxleGlibGVFeHBhbnNpb25IZWlnaHQgKiBmbGV4aWJsZUV4cGFuc2lvblJhdGlvO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZUZvckZsZXhpYmxlUm93RWxlbWVudCgnaGVpZ2h0JyxcbiAgICAgICAgYCR7aGVpZ2h0ICsgdGhpcy5jYWxjdWxhdGlvbnNfLnRvb2xiYXJSb3dIZWlnaHR9cHhgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudXNlRmxleERlZmF1bHRCZWhhdmlvcl8pIHtcbiAgICAgIHRoaXMudXBkYXRlRWxlbWVudFN0eWxlc0RlZmF1bHRCZWhhdmlvcl8oZmxleGlibGVFeHBhbnNpb25SYXRpbyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRWxlbWVudFN0eWxlc0RlZmF1bHRCZWhhdmlvcl8oZmxleGlibGVFeHBhbnNpb25SYXRpbykge1xuICAgIGNvbnN0IG1heFRpdGxlU2l6ZSA9IE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLm51bWJlcnMuTUFYX1RJVExFX1NJWkU7XG4gICAgY29uc3QgbWluVGl0bGVTaXplID0gTURDVG9vbGJhckZvdW5kYXRpb24ubnVtYmVycy5NSU5fVElUTEVfU0laRTtcbiAgICBjb25zdCBjdXJyZW50VGl0bGVTaXplID0gKG1heFRpdGxlU2l6ZSAtIG1pblRpdGxlU2l6ZSkgKiBmbGV4aWJsZUV4cGFuc2lvblJhdGlvICsgbWluVGl0bGVTaXplO1xuXG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZUZvclRpdGxlRWxlbWVudCgnZm9udC1zaXplJywgYCR7Y3VycmVudFRpdGxlU2l6ZX1yZW1gKTtcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICA8aGVhZGVyIGNsYXNzPVwibWRjLXRvb2xiYXItd3JhcHBlclwiPlxuICAgIDwhLS1Ub29sYmFyLS0+XG4gICAgPGRpdiBcbiAgICAgIHJlZj1cInJvb3RcIiBcbiAgICAgIDpjbGFzcz1cInJvb3RDbGFzc2VzXCIgXG4gICAgICA6c3R5bGU9XCJyb290U3R5bGVzXCI+XG4gICAgICA8c2xvdC8+XG4gICAgPC9kaXY+XG4gICAgPCEtLSBGaXhlZCBBZGp1c3QgRWxlbWVudC0tPlxuICAgIDxkaXYgXG4gICAgICB2LWlmPVwiZml4ZWQgfHwgd2F0ZXJmYWxsIHx8IGZpeGVkTGFzdHJvd1wiIFxuICAgICAgcmVmPVwiZml4ZWQtYWRqdXN0XCIgXG4gICAgICA6c3R5bGU9XCJhZGp1c3RTdHlsZXNcIlxuICAgICAgY2xhc3M9XCJtZGMtdG9vbGJhci1maXhlZC1hZGp1c3RcIi8+XG4gIDwvaGVhZGVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENUb29sYmFyRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvdG9vbGJhci9mb3VuZGF0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtdG9vbGJhcicsXG4gIHByb3BzOiB7XG4gICAgZml4ZWQ6IEJvb2xlYW4sXG4gICAgd2F0ZXJmYWxsOiBCb29sZWFuLFxuICAgICdmaXhlZC1sYXN0cm93JzogQm9vbGVhbixcbiAgICBmbGV4aWJsZTogQm9vbGVhbixcbiAgICAnZmxleGlibGUtZGVmYXVsdCc6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvb3RDbGFzc2VzOiB7XG4gICAgICAgICdtZGMtdG9vbGJhcic6IHRydWUsXG4gICAgICAgICdtZGMtdG9vbGJhci0tZml4ZWQnOiB0aGlzLmZpeGVkIHx8IHRoaXMud2F0ZXJmYWxsIHx8IHRoaXMuZml4ZWRMYXN0cm93LFxuICAgICAgICAnbWRjLXRvb2xiYXItLXdhdGVyZmFsbCc6IHRoaXMud2F0ZXJmYWxsLFxuICAgICAgICAnbWRjLXRvb2xiYXItLWZpeGVkLWxhc3Ryb3ctb25seSc6IHRoaXMuZml4ZWRMYXN0cm93LFxuICAgICAgICAnbWRjLXRvb2xiYXItLWZsZXhpYmxlJzogdGhpcy5mbGV4aWJsZSxcbiAgICAgICAgJ21kYy10b29sYmFyLS1mbGV4aWJsZS1kZWZhdWx0LWJlaGF2aW9yJzpcbiAgICAgICAgICB0aGlzLmZsZXhpYmxlICYmIHRoaXMuZmxleGlibGVEZWZhdWx0XG4gICAgICB9LFxuICAgICAgcm9vdFN0eWxlczoge30sXG4gICAgICBhZGp1c3RTdHlsZXM6IHtcbiAgICAgICAgLy8gdG8gYXZvaWQgdG9wIG1hcmdpbiBjb2xsYXBzZSB3aXRoIDphZnRlciBlbFxuICAgICAgICAvLyAwLjEgcHggc2hvdWxkIGJlIHJvdW5kZWQgdG8gMHB4XG4gICAgICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgdHJpY2tcbiAgICAgICAgLy8gaGVpZ2h0OiAnMC4xcHgnXG4gICAgICB9LFxuICAgICAgZm91bmRhdGlvbjogbnVsbFxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDVG9vbGJhckZvdW5kYXRpb24oe1xuICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLnJvb3RDbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICB9LFxuICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgIHRoaXMuJGRlbGV0ZSh0aGlzLnJvb3RDbGFzc2VzLCBjbGFzc05hbWUpXG4gICAgICB9LFxuICAgICAgaGFzQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLiRyZWZzLnJvb3QuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgICAgIH0sXG4gICAgICByZWdpc3RlclNjcm9sbEhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlcilcbiAgICAgIH0sXG4gICAgICBkZXJlZ2lzdGVyU2Nyb2xsSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKVxuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgfSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICB9LFxuICAgICAgZ2V0Vmlld3BvcnRXaWR0aDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGhcbiAgICAgIH0sXG4gICAgICBnZXRWaWV3cG9ydFNjcm9sbFk6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgfSxcbiAgICAgIGdldE9mZnNldEhlaWdodDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5yb290Lm9mZnNldEhlaWdodFxuICAgICAgfSxcbiAgICAgIGdldEZpcnN0Um93RWxlbWVudE9mZnNldEhlaWdodDogKCkgPT4ge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiRyZWZzLnJvb3QucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBNRENUb29sYmFyRm91bmRhdGlvbi5zdHJpbmdzLkZJUlNUX1JPV19TRUxFQ1RPUlxuICAgICAgICApXG4gICAgICAgIHJldHVybiBlbCA/IGVsLm9mZnNldEhlaWdodCA6IHVuZGVmaW5lZFxuICAgICAgfSxcbiAgICAgIG5vdGlmeUNoYW5nZTogZXZ0RGF0YSA9PiB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGV2dERhdGEpXG4gICAgICB9LFxuICAgICAgc2V0U3R5bGU6IChwcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMucm9vdFN0eWxlcywgcHJvcGVydHksIHZhbHVlKVxuICAgICAgfSxcbiAgICAgIHNldFN0eWxlRm9yVGl0bGVFbGVtZW50OiAocHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBlbCA9IHRoaXMuJHJlZnMucm9vdC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLnN0cmluZ3MuVElUTEVfU0VMRUNUT1JcbiAgICAgICAgKVxuICAgICAgICBpZiAoZWwpIGVsLnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSlcbiAgICAgIH0sXG4gICAgICBzZXRTdHlsZUZvckZsZXhpYmxlUm93RWxlbWVudDogKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiRyZWZzLnJvb3QucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBNRENUb29sYmFyRm91bmRhdGlvbi5zdHJpbmdzLkZJUlNUX1JPV19TRUxFQ1RPUlxuICAgICAgICApXG4gICAgICAgIGlmIChlbCkgZWwuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKVxuICAgICAgfSxcbiAgICAgIHNldFN0eWxlRm9yRml4ZWRBZGp1c3RFbGVtZW50OiAocHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLmFkanVzdFN0eWxlcywgcHJvcGVydHksIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtZGMtdG9vbGJhci1yb3cgbWRjLXRvb2xiYXJfX3Jvd1wiPlxuICAgIDxzbG90Lz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRvb2xiYXItcm93J1xufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxzZWN0aW9uIFxuICAgIDpjbGFzcz1cImNsYXNzZXNcIiBcbiAgICBjbGFzcz1cIm1kYy10b29sYmFyLXNlY3Rpb24gbWRjLXRvb2xiYXJfX3NlY3Rpb25cIj5cbiAgICA8c2xvdC8+XG4gIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtdG9vbGJhci1zZWN0aW9uJyxcbiAgcHJvcHM6IHtcbiAgICAnYWxpZ24tc3RhcnQnOiBCb29sZWFuLFxuICAgICdhbGlnbi1lbmQnOiBCb29sZWFuLFxuICAgICdzaHJpbmstdG8tZml0JzogQm9vbGVhblxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgICdtZGMtdG9vbGJhcl9fc2VjdGlvbi0tYWxpZ24tc3RhcnQnOiB0aGlzLmFsaWduU3RhcnQsXG4gICAgICAgICdtZGMtdG9vbGJhcl9fc2VjdGlvbi0tYWxpZ24tZW5kJzogdGhpcy5hbGlnbkVuZCxcbiAgICAgICAgJ21kYy10b29sYmFyX19zZWN0aW9uLS1zaHJpbmstdG8tZml0JzogdGhpcy5zaHJpbmtUb0ZpdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxhIFxuICAgIDpjbGFzcz1cInsnbWF0ZXJpYWwtaWNvbnMnOiEhaWNvbn1cIlxuICAgIGNsYXNzPVwibWRjLXRvb2xiYXItbWVudS1pY29uIG1kYy10b29sYmFyX19tZW51LWljb25cIlxuICAgIHYtb249XCJsaXN0ZW5lcnNcIj5cbiAgICA8c2xvdD57eyBpY29uIH19PC9zbG90PlxuICA8L2E+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgRGlzcGF0Y2hFdmVudE1peGluIH0gZnJvbSAnLi4vYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRvb2xiYXItbWVudS1pY29uJyxcbiAgbWl4aW5zOiBbRGlzcGF0Y2hFdmVudE1peGluXSxcbiAgcHJvcHM6IHtcbiAgICBpY29uOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ21lbnUnIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxhIFxuICAgIGNsYXNzPVwibWRjLXRvb2xiYXItdGl0bGUgbWRjLXRvb2xiYXJfX3RpdGxlXCIgXG4gICAgdi1vbj1cImxpc3RlbmVyc1wiPlxuICAgIDxzbG90Lz5cbiAgPC9hPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IERpc3BhdGNoRXZlbnRNaXhpbiB9IGZyb20gJy4uL2Jhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy10b29sYmFyLXRpdGxlJyxcbiAgbWl4aW5zOiBbRGlzcGF0Y2hFdmVudE1peGluXVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxhIFxuICAgIDpjbGFzcz1cInsnbWF0ZXJpYWwtaWNvbnMnOiEhaWNvbn1cIiBcbiAgICBjbGFzcz1cIm1kYy10b29sYmFyLWljb24gbWRjLXRvb2xiYXJfX2ljb25cIlxuICAgIHYtb249XCJsaXN0ZW5lcnNcIj5cbiAgICA8c2xvdD57eyBpY29uIH19PC9zbG90PlxuICA8L2E+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgRGlzcGF0Y2hFdmVudE1peGluIH0gZnJvbSAnLi4vYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRvb2xiYXItaWNvbicsXG4gIG1peGluczogW0Rpc3BhdGNoRXZlbnRNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgaWNvbjogU3RyaW5nXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgbWRjVG9vbGJhciBmcm9tICcuL21kYy10b29sYmFyLnZ1ZSdcbmltcG9ydCBtZGNUb29sYmFyUm93IGZyb20gJy4vbWRjLXRvb2xiYXItcm93LnZ1ZSdcbmltcG9ydCBtZGNUb29sYmFyU2VjdGlvbiBmcm9tICcuL21kYy10b29sYmFyLXNlY3Rpb24udnVlJ1xuaW1wb3J0IG1kY1Rvb2xiYXJNZW51SWNvbiBmcm9tICcuL21kYy10b29sYmFyLW1lbnUtaWNvbi52dWUnXG5pbXBvcnQgbWRjVG9vbGJhclRpdGxlIGZyb20gJy4vbWRjLXRvb2xiYXItdGl0bGUudnVlJ1xuaW1wb3J0IG1kY1Rvb2xiYXJJY29uIGZyb20gJy4vbWRjLXRvb2xiYXItaWNvbi52dWUnXG5cbmV4cG9ydCB7XG4gIG1kY1Rvb2xiYXIsXG4gIG1kY1Rvb2xiYXJSb3csXG4gIG1kY1Rvb2xiYXJTZWN0aW9uLFxuICBtZGNUb29sYmFyTWVudUljb24sXG4gIG1kY1Rvb2xiYXJUaXRsZSxcbiAgbWRjVG9vbGJhckljb25cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY1Rvb2xiYXIsXG4gIG1kY1Rvb2xiYXJSb3csXG4gIG1kY1Rvb2xiYXJTZWN0aW9uLFxuICBtZGNUb29sYmFyTWVudUljb24sXG4gIG1kY1Rvb2xiYXJUaXRsZSxcbiAgbWRjVG9vbGJhckljb25cbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJEaXNwYXRjaEV2ZW50TWl4aW4iLCJwcm9wcyIsImV2ZW50IiwiU3RyaW5nIiwiT2JqZWN0IiwiQXJyYXkiLCJtZXRob2RzIiwiZGlzcGF0Y2hFdmVudCIsImV2dCIsIiRlbWl0IiwidHlwZSIsInRhcmdldCIsImV2ZW50VGFyZ2V0IiwiJHJvb3QiLCJhcmdzIiwiZXZlbnRBcmdzIiwiY29tcHV0ZWQiLCJsaXN0ZW5lcnMiLCIkbGlzdGVuZXJzIiwiY2xpY2siLCJlIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIk1EQ0ZvdW5kYXRpb24iLCJhZGFwdGVyIiwiYWRhcHRlcl8iLCJjc3NDbGFzc2VzIiwiRklYRUQiLCJGSVhFRF9MQVNUUk9XIiwiRklYRURfQVRfTEFTVF9ST1ciLCJUT09MQkFSX1JPV19GTEVYSUJMRSIsIkZMRVhJQkxFX0RFRkFVTFRfQkVIQVZJT1IiLCJGTEVYSUJMRV9NQVgiLCJGTEVYSUJMRV9NSU4iLCJzdHJpbmdzIiwiVElUTEVfU0VMRUNUT1IiLCJJQ09OX1NFTEVDVE9SIiwiRklSU1RfUk9XX1NFTEVDVE9SIiwiQ0hBTkdFX0VWRU5UIiwibnVtYmVycyIsIk1BWF9USVRMRV9TSVpFIiwiTUlOX1RJVExFX1NJWkUiLCJUT09MQkFSX1JPV19IRUlHSFQiLCJUT09MQkFSX1JPV19NT0JJTEVfSEVJR0hUIiwiVE9PTEJBUl9NT0JJTEVfQlJFQUtQT0lOVCIsIk1EQ1Rvb2xiYXJGb3VuZGF0aW9uIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicmVnaXN0ZXJTY3JvbGxIYW5kbGVyIiwiZGVyZWdpc3RlclNjcm9sbEhhbmRsZXIiLCJyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJkZXJlZ2lzdGVyUmVzaXplSGFuZGxlciIsImdldFZpZXdwb3J0V2lkdGgiLCJnZXRWaWV3cG9ydFNjcm9sbFkiLCJnZXRPZmZzZXRIZWlnaHQiLCJnZXRGaXJzdFJvd0VsZW1lbnRPZmZzZXRIZWlnaHQiLCJub3RpZnlDaGFuZ2UiLCJzZXRTdHlsZSIsInNldFN0eWxlRm9yVGl0bGVFbGVtZW50Iiwic2V0U3R5bGVGb3JGbGV4aWJsZVJvd0VsZW1lbnQiLCJzZXRTdHlsZUZvckZpeGVkQWRqdXN0RWxlbWVudCIsImRlZmF1bHRBZGFwdGVyIiwicmVzaXplSGFuZGxlcl8iLCJjaGVja1Jvd0hlaWdodF8iLCJzY3JvbGxIYW5kbGVyXyIsInVwZGF0ZVRvb2xiYXJTdHlsZXNfIiwiY2hlY2tSb3dIZWlnaHRGcmFtZV8iLCJzY3JvbGxGcmFtZV8iLCJleGVjdXRlZExhc3RDaGFuZ2VfIiwiY2FsY3VsYXRpb25zXyIsInRvb2xiYXJSb3dIZWlnaHQiLCJ0b29sYmFyUmF0aW8iLCJmbGV4aWJsZUV4cGFuc2lvblJhdGlvIiwibWF4VHJhbnNsYXRlWVJhdGlvIiwic2Nyb2xsVGhyZXNob2xkUmF0aW8iLCJ0b29sYmFySGVpZ2h0IiwiZmxleGlibGVFeHBhbnNpb25IZWlnaHQiLCJtYXhUcmFuc2xhdGVZRGlzdGFuY2UiLCJzY3JvbGxUaHJlc2hvbGQiLCJmaXhlZF8iLCJmaXhlZExhc3Ryb3dfIiwiaGFzRmxleGlibGVSb3dfIiwidXNlRmxleERlZmF1bHRCZWhhdmlvcl8iLCJpbml0S2V5UmF0aW9fIiwic2V0S2V5SGVpZ2h0c18iLCJzY3JvbGxUb3AiLCJkZWx0YSIsIm1heCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibmV3VG9vbGJhclJvd0hlaWdodCIsImdldFJvd0hlaWdodF8iLCJ1cGRhdGVBZGp1c3RFbGVtZW50U3R5bGVzIiwiaGFzU2Nyb2xsZWRPdXRPZlRocmVzaG9sZCIsInNjcm9sbGVkT3V0T2ZUaHJlc2hvbGRfIiwiZ2V0RmxleGlibGVFeHBhbnNpb25SYXRpb18iLCJ1cGRhdGVUb29sYmFyRmxleGlibGVTdGF0ZV8iLCJ1cGRhdGVUb29sYmFyRml4ZWRTdGF0ZV8iLCJ1cGRhdGVGbGV4aWJsZVJvd0VsZW1lbnRTdHlsZXNfIiwiZmlyc3RSb3dNYXhSYXRpbyIsImJyZWFrcG9pbnQiLCJ0cmFuc2xhdGVEaXN0YW5jZSIsIm1pbiIsImhlaWdodCIsInVwZGF0ZUVsZW1lbnRTdHlsZXNEZWZhdWx0QmVoYXZpb3JfIiwibWF4VGl0bGVTaXplIiwibWluVGl0bGVTaXplIiwiY3VycmVudFRpdGxlU2l6ZSIsIm1kY1Rvb2xiYXIiLCJtZGNUb29sYmFyUm93IiwibWRjVG9vbGJhclNlY3Rpb24iLCJtZGNUb29sYmFyTWVudUljb24iLCJtZGNUb29sYmFyVGl0bGUiLCJtZGNUb29sYmFySWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUFPLFNBQVNBLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0lBQy9CO0lBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0lBQ0EsTUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0lBQ2pDRCxJQUFBQSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBZDtJQUNELEdBRkQsTUFFTyxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7SUFDeEM7SUFDQUgsSUFBQUEsSUFBSSxHQUFHRyxNQUFNLENBQUNELEdBQWQ7SUFDRDs7SUFDRCxNQUFJRixJQUFKLEVBQVU7SUFDUkEsSUFBQUEsSUFBSSxDQUFDSSxHQUFMLENBQVNMLE1BQVQ7SUFDRDtJQUNGOztJQ1pNLFNBQVNNLFVBQVQsQ0FBb0JDLFVBQXBCLEVBQWdDO0lBQ3JDLFNBQU87SUFDTEMsSUFBQUEsT0FBTyxFQUFFLGFBREo7SUFFTEMsSUFBQUEsT0FBTyxFQUFFLGlC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
