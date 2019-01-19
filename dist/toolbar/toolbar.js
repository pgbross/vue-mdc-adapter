/**
* @module vue-mdc-adaptertoolbar 0.19.1-beta
* @exports VueMDCToolbar
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
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
        version: '0.19.1-beta',
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
    script.__file = "/ddata/extra/vma/components/toolbar/mdc-toolbar.vue";

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
      

      
      var mdcToolbar = normalizeComponent(
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
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$1.__file = "/ddata/extra/vma/components/toolbar/mdc-toolbar-row.vue";

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
      

      
      var mdcToolbarRow = normalizeComponent(
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
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$2.__file = "/ddata/extra/vma/components/toolbar/mdc-toolbar-section.vue";

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
      

      
      var mdcToolbarSection = normalizeComponent(
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
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$3.__file = "/ddata/extra/vma/components/toolbar/mdc-toolbar-menu-icon.vue";

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
      

      
      var mdcToolbarMenuIcon = normalizeComponent(
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
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$4.__file = "/ddata/extra/vma/components/toolbar/mdc-toolbar-title.vue";

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
      

      
      var mdcToolbarTitle = normalizeComponent(
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
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$5.__file = "/ddata/extra/vma/components/toolbar/mdc-toolbar-icon.vue";

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
      

      
      var mdcToolbarIcon = normalizeComponent(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9iYXNlL2F1dG8taW5pdC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9iYXNlLXBsdWdpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZXZlbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvZGlzcGF0Y2gtZXZlbnQtbWl4aW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvdW5pcXVlaWQtbWl4aW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdG9vbGJhci9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3Rvb2xiYXIvZm91bmRhdGlvbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvdG9vbGJhci9tZGMtdG9vbGJhci52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXJ1bnRpbWUtaGVscGVycy9ub3JtYWxpemUtY29tcG9uZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy90b29sYmFyL21kYy10b29sYmFyLXJvdy52dWUiLCIuLi8uLi9jb21wb25lbnRzL3Rvb2xiYXIvbWRjLXRvb2xiYXItc2VjdGlvbi52dWUiLCIuLi8uLi9jb21wb25lbnRzL3Rvb2xiYXIvbWRjLXRvb2xiYXItbWVudS1pY29uLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvdG9vbGJhci9tZGMtdG9vbGJhci10aXRsZS52dWUiLCIuLi8uLi9jb21wb25lbnRzL3Rvb2xiYXIvbWRjLXRvb2xiYXItaWNvbi52dWUiLCIuLi8uLi9jb21wb25lbnRzL3Rvb2xiYXIvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3Rvb2xiYXIvZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGF1dG9Jbml0KHBsdWdpbikge1xuICAvLyBBdXRvLWluc3RhbGxcbiAgbGV0IF9WdWUgPSBudWxsXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIF9WdWUgPSB3aW5kb3cuVnVlXG4gIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvKmdsb2JhbCBnbG9iYWwqL1xuICAgIF9WdWUgPSBnbG9iYWwuVnVlXG4gIH1cbiAgaWYgKF9WdWUpIHtcbiAgICBfVnVlLnVzZShwbHVnaW4pXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBCYXNlUGx1Z2luKGNvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnX19WRVJTSU9OX18nLFxuICAgIGluc3RhbGw6IHZtID0+IHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2tleV1cbiAgICAgICAgdm0uY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQpXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImV4cG9ydCBjb25zdCBEaXNwYXRjaEV2ZW50TWl4aW4gPSB7XG4gIHByb3BzOiB7XG4gICAgZXZlbnQ6IFN0cmluZyxcbiAgICAnZXZlbnQtdGFyZ2V0JzogT2JqZWN0LFxuICAgICdldmVudC1hcmdzJzogQXJyYXlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRpc3BhdGNoRXZlbnQoZXZ0KSB7XG4gICAgICBldnQgJiYgdGhpcy4kZW1pdChldnQudHlwZSwgZXZ0KVxuICAgICAgaWYgKHRoaXMuZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZXZlbnRUYXJnZXQgfHwgdGhpcy4kcm9vdFxuICAgICAgICBsZXQgYXJncyA9IHRoaXMuZXZlbnRBcmdzIHx8IFtdXG4gICAgICAgIHRhcmdldC4kZW1pdCh0aGlzLmV2ZW50LCAuLi5hcmdzKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaXN0ZW5lcnMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLiRsaXN0ZW5lcnMsXG4gICAgICAgIGNsaWNrOiBlID0+IHRoaXMuZGlzcGF0Y2hFdmVudChlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBBXG4gKi9cbmNsYXNzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVte2Nzc0NsYXNzZXN9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtzdHJpbmdzfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtudW1iZXJzfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshT2JqZWN0fSAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAvLyB2YWxpZGF0aW9uLlxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0E9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyID0ge30pIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUF9ICovXG4gICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIEZJWEVEOiAnbWRjLXRvb2xiYXItLWZpeGVkJyxcbiAgRklYRURfTEFTVFJPVzogJ21kYy10b29sYmFyLS1maXhlZC1sYXN0cm93LW9ubHknLFxuICBGSVhFRF9BVF9MQVNUX1JPVzogJ21kYy10b29sYmFyLS1maXhlZC1hdC1sYXN0LXJvdycsXG4gIFRPT0xCQVJfUk9XX0ZMRVhJQkxFOiAnbWRjLXRvb2xiYXItLWZsZXhpYmxlJyxcbiAgRkxFWElCTEVfREVGQVVMVF9CRUhBVklPUjogJ21kYy10b29sYmFyLS1mbGV4aWJsZS1kZWZhdWx0LWJlaGF2aW9yJyxcbiAgRkxFWElCTEVfTUFYOiAnbWRjLXRvb2xiYXItLWZsZXhpYmxlLXNwYWNlLW1heGltaXplZCcsXG4gIEZMRVhJQkxFX01JTjogJ21kYy10b29sYmFyLS1mbGV4aWJsZS1zcGFjZS1taW5pbWl6ZWQnLFxufTtcblxuZXhwb3J0IGNvbnN0IHN0cmluZ3MgPSB7XG4gIFRJVExFX1NFTEVDVE9SOiAnLm1kYy10b29sYmFyX190aXRsZScsXG4gIElDT05fU0VMRUNUT1I6ICcubWRjLXRvb2xiYXJfX2ljb24nLFxuICBGSVJTVF9ST1dfU0VMRUNUT1I6ICcubWRjLXRvb2xiYXJfX3JvdzpmaXJzdC1jaGlsZCcsXG4gIENIQU5HRV9FVkVOVDogJ01EQ1Rvb2xiYXI6Y2hhbmdlJyxcbn07XG5cbmV4cG9ydCBjb25zdCBudW1iZXJzID0ge1xuICBNQVhfVElUTEVfU0laRTogMi4xMjUsXG4gIE1JTl9USVRMRV9TSVpFOiAxLjI1LFxuICBUT09MQkFSX1JPV19IRUlHSFQ6IDY0LFxuICBUT09MQkFSX1JPV19NT0JJTEVfSEVJR0hUOiA1NixcbiAgVE9PTEJBUl9NT0JJTEVfQlJFQUtQT0lOVDogNjAwLFxufTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTURDVG9vbGJhckZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4gLyogYm9vbGVhbiAqLyBmYWxzZSxcbiAgICAgIGFkZENsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZWdpc3RlclNjcm9sbEhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJTY3JvbGxIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBnZXRWaWV3cG9ydFdpZHRoOiAoKSA9PiAvKiBudW1iZXIgKi8gMCxcbiAgICAgIGdldFZpZXdwb3J0U2Nyb2xsWTogKCkgPT4gLyogbnVtYmVyICovIDAsXG4gICAgICBnZXRPZmZzZXRIZWlnaHQ6ICgpID0+IC8qIG51bWJlciAqLyAwLFxuICAgICAgZ2V0Rmlyc3RSb3dFbGVtZW50T2Zmc2V0SGVpZ2h0OiAoKSA9PiAvKiBudW1iZXIgKi8gMCxcbiAgICAgIG5vdGlmeUNoYW5nZTogKC8qIGV2dERhdGE6IHtmbGV4aWJsZUV4cGFuc2lvblJhdGlvOiBudW1iZXJ9ICovKSA9PiB7fSxcbiAgICAgIHNldFN0eWxlOiAoLyogcHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBzZXRTdHlsZUZvclRpdGxlRWxlbWVudDogKC8qIHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgc2V0U3R5bGVGb3JGbGV4aWJsZVJvd0VsZW1lbnQ6ICgvKiBwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHNldFN0eWxlRm9yRml4ZWRBZGp1c3RFbGVtZW50OiAoLyogcHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG4gICAgdGhpcy5yZXNpemVIYW5kbGVyXyA9ICgpID0+IHRoaXMuY2hlY2tSb3dIZWlnaHRfKCk7XG4gICAgdGhpcy5zY3JvbGxIYW5kbGVyXyA9ICgpID0+IHRoaXMudXBkYXRlVG9vbGJhclN0eWxlc18oKTtcbiAgICB0aGlzLmNoZWNrUm93SGVpZ2h0RnJhbWVfID0gMDtcbiAgICB0aGlzLnNjcm9sbEZyYW1lXyA9IDA7XG4gICAgdGhpcy5leGVjdXRlZExhc3RDaGFuZ2VfID0gZmFsc2U7XG5cbiAgICB0aGlzLmNhbGN1bGF0aW9uc18gPSB7XG4gICAgICB0b29sYmFyUm93SGVpZ2h0OiAwLFxuICAgICAgLy8gQ2FsY3VsYXRlZCBIZWlnaHQgcmF0aW8uIFdlIHVzZSByYXRpbyB0byBjYWxjdWxhdGUgY29ycmVzcG9uZGluZyBoZWlnaHRzIGluIHJlc2l6ZSBldmVudC5cbiAgICAgIHRvb2xiYXJSYXRpbzogMCwgLy8gVGhlIHJhdGlvIG9mIHRvb2xiYXIgaGVpZ2h0IHRvIHJvdyBoZWlnaHRcbiAgICAgIGZsZXhpYmxlRXhwYW5zaW9uUmF0aW86IDAsIC8vIFRoZSByYXRpbyBvZiBmbGV4aWJsZSBzcGFjZSBoZWlnaHQgdG8gcm93IGhlaWdodFxuICAgICAgbWF4VHJhbnNsYXRlWVJhdGlvOiAwLCAvLyBUaGUgcmF0aW8gb2YgbWF4IHRvb2xiYXIgbW92ZSB1cCBkaXN0YW5jZSB0byByb3cgaGVpZ2h0XG4gICAgICBzY3JvbGxUaHJlc2hvbGRSYXRpbzogMCwgLy8gVGhlIHJhdGlvIG9mIG1heCBzY3JvbGxUb3AgdGhhdCB3ZSBzaG91bGQgbGlzdGVuIHRvIHRvIHJvdyBoZWlnaHRcbiAgICAgIC8vIERlcml2ZWQgSGVpZ2h0cyBiYXNlZCBvbiB0aGUgYWJvdmUga2V5IHJhdGlvcy5cbiAgICAgIHRvb2xiYXJIZWlnaHQ6IDAsXG4gICAgICBmbGV4aWJsZUV4cGFuc2lvbkhlaWdodDogMCwgLy8gRmxleGlibGUgcm93IG1pbnVzIHRvb2xiYXIgaGVpZ2h0IChkZXJpdmVkKVxuICAgICAgbWF4VHJhbnNsYXRlWURpc3RhbmNlOiAwLCAvLyBXaGVuIHRvb2xiYXIgb25seSBmaXggbGFzdCByb3cgKGRlcml2ZWQpXG4gICAgICBzY3JvbGxUaHJlc2hvbGQ6IDAsXG4gICAgfTtcbiAgICAvLyBUb29sYmFyIGZpeGVkIGJlaGF2aW9yXG4gICAgLy8gSWYgdG9vbGJhciBpcyBmaXhlZFxuICAgIHRoaXMuZml4ZWRfID0gZmFsc2U7XG4gICAgLy8gSWYgZml4ZWQgaXMgdGFyZ2V0ZWQgb25seSBhdCB0aGUgbGFzdCByb3dcbiAgICB0aGlzLmZpeGVkTGFzdHJvd18gPSBmYWxzZTtcbiAgICAvLyBUb29sYmFyIGZsZXhpYmxlIGJlaGF2aW9yXG4gICAgLy8gSWYgdGhlIGZpcnN0IHJvdyBpcyBmbGV4aWJsZVxuICAgIHRoaXMuaGFzRmxleGlibGVSb3dfID0gZmFsc2U7XG4gICAgLy8gSWYgdXNlIHRoZSBkZWZhdWx0IGJlaGF2aW9yXG4gICAgdGhpcy51c2VGbGV4RGVmYXVsdEJlaGF2aW9yXyA9IGZhbHNlO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmZpeGVkXyA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoTURDVG9vbGJhckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GSVhFRCk7XG4gICAgdGhpcy5maXhlZExhc3Ryb3dfID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhNRENUb29sYmFyRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZJWEVEX0xBU1RST1cpICYgdGhpcy5maXhlZF87XG4gICAgdGhpcy5oYXNGbGV4aWJsZVJvd18gPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuVE9PTEJBUl9ST1dfRkxFWElCTEUpO1xuICAgIGlmICh0aGlzLmhhc0ZsZXhpYmxlUm93Xykge1xuICAgICAgdGhpcy51c2VGbGV4RGVmYXVsdEJlaGF2aW9yXyA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoTURDVG9vbGJhckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GTEVYSUJMRV9ERUZBVUxUX0JFSEFWSU9SKTtcbiAgICB9XG4gICAgdGhpcy5pbml0S2V5UmF0aW9fKCk7XG4gICAgdGhpcy5zZXRLZXlIZWlnaHRzXygpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJTY3JvbGxIYW5kbGVyKHRoaXMuc2Nyb2xsSGFuZGxlcl8pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclNjcm9sbEhhbmRsZXIodGhpcy5zY3JvbGxIYW5kbGVyXyk7XG4gIH1cblxuICB1cGRhdGVBZGp1c3RFbGVtZW50U3R5bGVzKCkge1xuICAgIGlmICh0aGlzLmZpeGVkXykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZUZvckZpeGVkQWRqdXN0RWxlbWVudCgnbWFyZ2luLXRvcCcsIGAke3RoaXMuY2FsY3VsYXRpb25zXy50b29sYmFySGVpZ2h0fXB4YCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RmxleGlibGVFeHBhbnNpb25SYXRpb18oc2Nyb2xsVG9wKSB7XG4gICAgLy8gVG8gcHJldmVudCBkaXZpc2lvbiBieSB6ZXJvIHdoZW4gdGhlcmUgaXMgbm8gZmxleGlibGVFeHBhbnNpb25IZWlnaHRcbiAgICBjb25zdCBkZWx0YSA9IDAuMDAwMTtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgMSAtIHNjcm9sbFRvcCAvICh0aGlzLmNhbGN1bGF0aW9uc18uZmxleGlibGVFeHBhbnNpb25IZWlnaHQgKyBkZWx0YSkpO1xuICB9XG5cbiAgY2hlY2tSb3dIZWlnaHRfKCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuY2hlY2tSb3dIZWlnaHRGcmFtZV8pO1xuICAgIHRoaXMuY2hlY2tSb3dIZWlnaHRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5zZXRLZXlIZWlnaHRzXygpKTtcbiAgfVxuXG4gIHNldEtleUhlaWdodHNfKCkge1xuICAgIGNvbnN0IG5ld1Rvb2xiYXJSb3dIZWlnaHQgPSB0aGlzLmdldFJvd0hlaWdodF8oKTtcbiAgICBpZiAobmV3VG9vbGJhclJvd0hlaWdodCAhPT0gdGhpcy5jYWxjdWxhdGlvbnNfLnRvb2xiYXJSb3dIZWlnaHQpIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRpb25zXy50b29sYmFyUm93SGVpZ2h0ID0gbmV3VG9vbGJhclJvd0hlaWdodDtcbiAgICAgIHRoaXMuY2FsY3VsYXRpb25zXy50b29sYmFySGVpZ2h0ID0gdGhpcy5jYWxjdWxhdGlvbnNfLnRvb2xiYXJSYXRpbyAqIHRoaXMuY2FsY3VsYXRpb25zXy50b29sYmFyUm93SGVpZ2h0O1xuICAgICAgdGhpcy5jYWxjdWxhdGlvbnNfLmZsZXhpYmxlRXhwYW5zaW9uSGVpZ2h0ID1cbiAgICAgICAgdGhpcy5jYWxjdWxhdGlvbnNfLmZsZXhpYmxlRXhwYW5zaW9uUmF0aW8gKiB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhclJvd0hlaWdodDtcbiAgICAgIHRoaXMuY2FsY3VsYXRpb25zXy5tYXhUcmFuc2xhdGVZRGlzdGFuY2UgPVxuICAgICAgICB0aGlzLmNhbGN1bGF0aW9uc18ubWF4VHJhbnNsYXRlWVJhdGlvICogdGhpcy5jYWxjdWxhdGlvbnNfLnRvb2xiYXJSb3dIZWlnaHQ7XG4gICAgICB0aGlzLmNhbGN1bGF0aW9uc18uc2Nyb2xsVGhyZXNob2xkID1cbiAgICAgICAgdGhpcy5jYWxjdWxhdGlvbnNfLnNjcm9sbFRocmVzaG9sZFJhdGlvICogdGhpcy5jYWxjdWxhdGlvbnNfLnRvb2xiYXJSb3dIZWlnaHQ7XG4gICAgICB0aGlzLnVwZGF0ZUFkanVzdEVsZW1lbnRTdHlsZXMoKTtcbiAgICAgIHRoaXMudXBkYXRlVG9vbGJhclN0eWxlc18oKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUb29sYmFyU3R5bGVzXygpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjcm9sbEZyYW1lXyk7XG4gICAgdGhpcy5zY3JvbGxGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5hZGFwdGVyXy5nZXRWaWV3cG9ydFNjcm9sbFkoKTtcbiAgICAgIGNvbnN0IGhhc1Njcm9sbGVkT3V0T2ZUaHJlc2hvbGQgPSB0aGlzLnNjcm9sbGVkT3V0T2ZUaHJlc2hvbGRfKHNjcm9sbFRvcCk7XG5cbiAgICAgIGlmIChoYXNTY3JvbGxlZE91dE9mVGhyZXNob2xkICYmIHRoaXMuZXhlY3V0ZWRMYXN0Q2hhbmdlXykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZsZXhpYmxlRXhwYW5zaW9uUmF0aW8gPSB0aGlzLmdldEZsZXhpYmxlRXhwYW5zaW9uUmF0aW9fKHNjcm9sbFRvcCk7XG5cbiAgICAgIHRoaXMudXBkYXRlVG9vbGJhckZsZXhpYmxlU3RhdGVfKGZsZXhpYmxlRXhwYW5zaW9uUmF0aW8pO1xuICAgICAgaWYgKHRoaXMuZml4ZWRMYXN0cm93Xykge1xuICAgICAgICB0aGlzLnVwZGF0ZVRvb2xiYXJGaXhlZFN0YXRlXyhzY3JvbGxUb3ApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaGFzRmxleGlibGVSb3dfKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRmxleGlibGVSb3dFbGVtZW50U3R5bGVzXyhmbGV4aWJsZUV4cGFuc2lvblJhdGlvKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZXhlY3V0ZWRMYXN0Q2hhbmdlXyA9IGhhc1Njcm9sbGVkT3V0T2ZUaHJlc2hvbGQ7XG4gICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUNoYW5nZSh7ZmxleGlibGVFeHBhbnNpb25SYXRpbzogZmxleGlibGVFeHBhbnNpb25SYXRpb30pO1xuICAgIH0pO1xuICB9XG5cbiAgc2Nyb2xsZWRPdXRPZlRocmVzaG9sZF8oc2Nyb2xsVG9wKSB7XG4gICAgcmV0dXJuIHNjcm9sbFRvcCA+IHRoaXMuY2FsY3VsYXRpb25zXy5zY3JvbGxUaHJlc2hvbGQ7XG4gIH1cblxuICBpbml0S2V5UmF0aW9fKCkge1xuICAgIGNvbnN0IHRvb2xiYXJSb3dIZWlnaHQgPSB0aGlzLmdldFJvd0hlaWdodF8oKTtcbiAgICBjb25zdCBmaXJzdFJvd01heFJhdGlvID0gdGhpcy5hZGFwdGVyXy5nZXRGaXJzdFJvd0VsZW1lbnRPZmZzZXRIZWlnaHQoKSAvIHRvb2xiYXJSb3dIZWlnaHQ7XG4gICAgdGhpcy5jYWxjdWxhdGlvbnNfLnRvb2xiYXJSYXRpbyA9IHRoaXMuYWRhcHRlcl8uZ2V0T2Zmc2V0SGVpZ2h0KCkgLyB0b29sYmFyUm93SGVpZ2h0O1xuICAgIHRoaXMuY2FsY3VsYXRpb25zXy5mbGV4aWJsZUV4cGFuc2lvblJhdGlvID0gZmlyc3RSb3dNYXhSYXRpbyAtIDE7XG4gICAgdGhpcy5jYWxjdWxhdGlvbnNfLm1heFRyYW5zbGF0ZVlSYXRpbyA9XG4gICAgICB0aGlzLmZpeGVkTGFzdHJvd18gPyB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhclJhdGlvIC0gZmlyc3RSb3dNYXhSYXRpbyA6IDA7XG4gICAgdGhpcy5jYWxjdWxhdGlvbnNfLnNjcm9sbFRocmVzaG9sZFJhdGlvID1cbiAgICAgICh0aGlzLmZpeGVkTGFzdHJvd18gPyB0aGlzLmNhbGN1bGF0aW9uc18udG9vbGJhclJhdGlvIDogZmlyc3RSb3dNYXhSYXRpbykgLSAxO1xuICB9XG5cbiAgZ2V0Um93SGVpZ2h0XygpIHtcbiAgICBjb25zdCBicmVha3BvaW50ID0gTURDVG9vbGJhckZvdW5kYXRpb24ubnVtYmVycy5UT09MQkFSX01PQklMRV9CUkVBS1BPSU5UO1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmdldFZpZXdwb3J0V2lkdGgoKSA8IGJyZWFrcG9pbnQgP1xuICAgICAgTURDVG9vbGJhckZvdW5kYXRpb24ubnVtYmVycy5UT09MQkFSX1JPV19NT0JJTEVfSEVJR0hUIDogTURDVG9vbGJhckZvdW5kYXRpb24ubnVtYmVycy5UT09MQkFSX1JPV19IRUlHSFQ7XG4gIH1cblxuICB1cGRhdGVUb29sYmFyRmxleGlibGVTdGF0ZV8oZmxleGlibGVFeHBhbnNpb25SYXRpbykge1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVG9vbGJhckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GTEVYSUJMRV9NQVgpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDVG9vbGJhckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GTEVYSUJMRV9NSU4pO1xuICAgIGlmIChmbGV4aWJsZUV4cGFuc2lvblJhdGlvID09PSAxKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkxFWElCTEVfTUFYKTtcbiAgICB9IGVsc2UgaWYgKGZsZXhpYmxlRXhwYW5zaW9uUmF0aW8gPT09IDApIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDVG9vbGJhckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GTEVYSUJMRV9NSU4pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVRvb2xiYXJGaXhlZFN0YXRlXyhzY3JvbGxUb3ApIHtcbiAgICBjb25zdCB0cmFuc2xhdGVEaXN0YW5jZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKFxuICAgICAgc2Nyb2xsVG9wIC0gdGhpcy5jYWxjdWxhdGlvbnNfLmZsZXhpYmxlRXhwYW5zaW9uSGVpZ2h0LFxuICAgICAgdGhpcy5jYWxjdWxhdGlvbnNfLm1heFRyYW5zbGF0ZVlEaXN0YW5jZSkpO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0U3R5bGUoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7LXRyYW5zbGF0ZURpc3RhbmNlfXB4KWApO1xuXG4gICAgaWYgKHRyYW5zbGF0ZURpc3RhbmNlID09PSB0aGlzLmNhbGN1bGF0aW9uc18ubWF4VHJhbnNsYXRlWURpc3RhbmNlKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRklYRURfQVRfTEFTVF9ST1cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRklYRURfQVRfTEFTVF9ST1cpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUZsZXhpYmxlUm93RWxlbWVudFN0eWxlc18oZmxleGlibGVFeHBhbnNpb25SYXRpbykge1xuICAgIGlmICh0aGlzLmZpeGVkXykge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jYWxjdWxhdGlvbnNfLmZsZXhpYmxlRXhwYW5zaW9uSGVpZ2h0ICogZmxleGlibGVFeHBhbnNpb25SYXRpbztcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U3R5bGVGb3JGbGV4aWJsZVJvd0VsZW1lbnQoJ2hlaWdodCcsXG4gICAgICAgIGAke2hlaWdodCArIHRoaXMuY2FsY3VsYXRpb25zXy50b29sYmFyUm93SGVpZ2h0fXB4YCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnVzZUZsZXhEZWZhdWx0QmVoYXZpb3JfKSB7XG4gICAgICB0aGlzLnVwZGF0ZUVsZW1lbnRTdHlsZXNEZWZhdWx0QmVoYXZpb3JfKGZsZXhpYmxlRXhwYW5zaW9uUmF0aW8pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUVsZW1lbnRTdHlsZXNEZWZhdWx0QmVoYXZpb3JfKGZsZXhpYmxlRXhwYW5zaW9uUmF0aW8pIHtcbiAgICBjb25zdCBtYXhUaXRsZVNpemUgPSBNRENUb29sYmFyRm91bmRhdGlvbi5udW1iZXJzLk1BWF9USVRMRV9TSVpFO1xuICAgIGNvbnN0IG1pblRpdGxlU2l6ZSA9IE1EQ1Rvb2xiYXJGb3VuZGF0aW9uLm51bWJlcnMuTUlOX1RJVExFX1NJWkU7XG4gICAgY29uc3QgY3VycmVudFRpdGxlU2l6ZSA9IChtYXhUaXRsZVNpemUgLSBtaW5UaXRsZVNpemUpICogZmxleGlibGVFeHBhbnNpb25SYXRpbyArIG1pblRpdGxlU2l6ZTtcblxuICAgIHRoaXMuYWRhcHRlcl8uc2V0U3R5bGVGb3JUaXRsZUVsZW1lbnQoJ2ZvbnQtc2l6ZScsIGAke2N1cnJlbnRUaXRsZVNpemV9cmVtYCk7XG4gIH1cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGhlYWRlciBjbGFzcz1cIm1kYy10b29sYmFyLXdyYXBwZXJcIj5cbiAgICA8IS0tVG9vbGJhci0tPlxuICAgIDxkaXYgXG4gICAgICByZWY9XCJyb290XCIgXG4gICAgICA6Y2xhc3M9XCJyb290Q2xhc3Nlc1wiIFxuICAgICAgOnN0eWxlPVwicm9vdFN0eWxlc1wiPlxuICAgICAgPHNsb3QvPlxuICAgIDwvZGl2PlxuICAgIDwhLS0gRml4ZWQgQWRqdXN0IEVsZW1lbnQtLT5cbiAgICA8ZGl2IFxuICAgICAgdi1pZj1cImZpeGVkIHx8IHdhdGVyZmFsbCB8fCBmaXhlZExhc3Ryb3dcIiBcbiAgICAgIHJlZj1cImZpeGVkLWFkanVzdFwiIFxuICAgICAgOnN0eWxlPVwiYWRqdXN0U3R5bGVzXCJcbiAgICAgIGNsYXNzPVwibWRjLXRvb2xiYXItZml4ZWQtYWRqdXN0XCIvPlxuICA8L2hlYWRlcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTURDVG9vbGJhckZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL3Rvb2xiYXIvZm91bmRhdGlvbidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRvb2xiYXInLFxuICBwcm9wczoge1xuICAgIGZpeGVkOiBCb29sZWFuLFxuICAgIHdhdGVyZmFsbDogQm9vbGVhbixcbiAgICAnZml4ZWQtbGFzdHJvdyc6IEJvb2xlYW4sXG4gICAgZmxleGlibGU6IEJvb2xlYW4sXG4gICAgJ2ZsZXhpYmxlLWRlZmF1bHQnOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICByb290Q2xhc3Nlczoge1xuICAgICAgICAnbWRjLXRvb2xiYXInOiB0cnVlLFxuICAgICAgICAnbWRjLXRvb2xiYXItLWZpeGVkJzogdGhpcy5maXhlZCB8fCB0aGlzLndhdGVyZmFsbCB8fCB0aGlzLmZpeGVkTGFzdHJvdyxcbiAgICAgICAgJ21kYy10b29sYmFyLS13YXRlcmZhbGwnOiB0aGlzLndhdGVyZmFsbCxcbiAgICAgICAgJ21kYy10b29sYmFyLS1maXhlZC1sYXN0cm93LW9ubHknOiB0aGlzLmZpeGVkTGFzdHJvdyxcbiAgICAgICAgJ21kYy10b29sYmFyLS1mbGV4aWJsZSc6IHRoaXMuZmxleGlibGUsXG4gICAgICAgICdtZGMtdG9vbGJhci0tZmxleGlibGUtZGVmYXVsdC1iZWhhdmlvcic6XG4gICAgICAgICAgdGhpcy5mbGV4aWJsZSAmJiB0aGlzLmZsZXhpYmxlRGVmYXVsdFxuICAgICAgfSxcbiAgICAgIHJvb3RTdHlsZXM6IHt9LFxuICAgICAgYWRqdXN0U3R5bGVzOiB7XG4gICAgICAgIC8vIHRvIGF2b2lkIHRvcCBtYXJnaW4gY29sbGFwc2Ugd2l0aCA6YWZ0ZXIgZWxcbiAgICAgICAgLy8gMC4xIHB4IHNob3VsZCBiZSByb3VuZGVkIHRvIDBweFxuICAgICAgICAvLyBUT0RPOiBmaW5kIGEgYmV0dGVyIHRyaWNrXG4gICAgICAgIC8vIGhlaWdodDogJzAuMXB4J1xuICAgICAgfSxcbiAgICAgIGZvdW5kYXRpb246IG51bGxcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ1Rvb2xiYXJGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICB0aGlzLiRzZXQodGhpcy5yb290Q2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKVxuICAgICAgfSxcbiAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICB0aGlzLiRkZWxldGUodGhpcy5yb290Q2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgfSxcbiAgICAgIGhhc0NsYXNzOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5yb290LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXJTY3JvbGxIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIpXG4gICAgICB9LFxuICAgICAgZGVyZWdpc3RlclNjcm9sbEhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlcilcbiAgICAgIH0sXG4gICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgIH0sXG4gICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgfSxcbiAgICAgIGdldFZpZXdwb3J0V2lkdGg6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICB9LFxuICAgICAgZ2V0Vmlld3BvcnRTY3JvbGxZOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgIH0sXG4gICAgICBnZXRPZmZzZXRIZWlnaHQ6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMucm9vdC5vZmZzZXRIZWlnaHRcbiAgICAgIH0sXG4gICAgICBnZXRGaXJzdFJvd0VsZW1lbnRPZmZzZXRIZWlnaHQ6ICgpID0+IHtcbiAgICAgICAgbGV0IGVsID0gdGhpcy4kcmVmcy5yb290LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgTURDVG9vbGJhckZvdW5kYXRpb24uc3RyaW5ncy5GSVJTVF9ST1dfU0VMRUNUT1JcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gZWwgPyBlbC5vZmZzZXRIZWlnaHQgOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICBub3RpZnlDaGFuZ2U6IGV2dERhdGEgPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBldnREYXRhKVxuICAgICAgfSxcbiAgICAgIHNldFN0eWxlOiAocHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLnJvb3RTdHlsZXMsIHByb3BlcnR5LCB2YWx1ZSlcbiAgICAgIH0sXG4gICAgICBzZXRTdHlsZUZvclRpdGxlRWxlbWVudDogKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgZWwgPSB0aGlzLiRyZWZzLnJvb3QucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBNRENUb29sYmFyRm91bmRhdGlvbi5zdHJpbmdzLlRJVExFX1NFTEVDVE9SXG4gICAgICAgIClcbiAgICAgICAgaWYgKGVsKSBlbC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpXG4gICAgICB9LFxuICAgICAgc2V0U3R5bGVGb3JGbGV4aWJsZVJvd0VsZW1lbnQ6IChwcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGVsID0gdGhpcy4kcmVmcy5yb290LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgTURDVG9vbGJhckZvdW5kYXRpb24uc3RyaW5ncy5GSVJTVF9ST1dfU0VMRUNUT1JcbiAgICAgICAgKVxuICAgICAgICBpZiAoZWwpIGVsLnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSlcbiAgICAgIH0sXG4gICAgICBzZXRTdHlsZUZvckZpeGVkQWRqdXN0RWxlbWVudDogKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLiRzZXQodGhpcy5hZGp1c3RTdHlsZXMsIHByb3BlcnR5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24uZGVzdHJveSgpXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50KGNvbXBpbGVkVGVtcGxhdGUsIGluamVjdFN0eWxlLCBkZWZhdWx0RXhwb3J0LCBzY29wZUlkLCBpc0Z1bmN0aW9uYWxUZW1wbGF0ZSwgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLywgaXNTaGFkb3dNb2RlLCBjcmVhdGVJbmplY3RvciwgY3JlYXRlSW5qZWN0b3JTU1IsIGNyZWF0ZUluamVjdG9yU2hhZG93KSB7XG4gICAgaWYgKHR5cGVvZiBpc1NoYWRvd01vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3JTU1IgPSBjcmVhdGVJbmplY3RvcjtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3IgPSBpc1NoYWRvd01vZGU7XG4gICAgICAgIGlzU2hhZG93TW9kZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gICAgY29uc3Qgb3B0aW9ucyA9IHR5cGVvZiBkZWZhdWx0RXhwb3J0ID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdEV4cG9ydC5vcHRpb25zIDogZGVmYXVsdEV4cG9ydDtcbiAgICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gICAgaWYgKGNvbXBpbGVkVGVtcGxhdGUgJiYgY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXIpIHtcbiAgICAgICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlcjtcbiAgICAgICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgICAgICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlO1xuICAgICAgICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzY29wZWRJZFxuICAgIGlmIChzY29wZUlkKSB7XG4gICAgICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkO1xuICAgIH1cbiAgICBsZXQgaG9vaztcbiAgICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgICAgICAvLyBzZXJ2ZXIgYnVpbGRcbiAgICAgICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICAgICAgICBjb250ZXh0ID1cbiAgICAgICAgICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KTsgLy8gZnVuY3Rpb25hbFxuICAgICAgICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICAgICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX187XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgICAgICAgaWYgKGluamVjdFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNTUihjb250ZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVyZW5jZVxuICAgICAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9vaztcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5qZWN0U3R5bGUpIHtcbiAgICAgICAgaG9vayA9IGlzU2hhZG93TW9kZVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNoYWRvdyh0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH07XG4gICAgfVxuICAgIGlmIChob29rKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcbiAgICAgICAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBob29rLmNhbGwoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlO1xuICAgICAgICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRFeHBvcnQ7XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtZGMtdG9vbGJhci1yb3cgbWRjLXRvb2xiYXJfX3Jvd1wiPlxuICAgIDxzbG90Lz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRvb2xiYXItcm93J1xufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxzZWN0aW9uIFxuICAgIDpjbGFzcz1cImNsYXNzZXNcIiBcbiAgICBjbGFzcz1cIm1kYy10b29sYmFyLXNlY3Rpb24gbWRjLXRvb2xiYXJfX3NlY3Rpb25cIj5cbiAgICA8c2xvdC8+XG4gIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtdG9vbGJhci1zZWN0aW9uJyxcbiAgcHJvcHM6IHtcbiAgICAnYWxpZ24tc3RhcnQnOiBCb29sZWFuLFxuICAgICdhbGlnbi1lbmQnOiBCb29sZWFuLFxuICAgICdzaHJpbmstdG8tZml0JzogQm9vbGVhblxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgICdtZGMtdG9vbGJhcl9fc2VjdGlvbi0tYWxpZ24tc3RhcnQnOiB0aGlzLmFsaWduU3RhcnQsXG4gICAgICAgICdtZGMtdG9vbGJhcl9fc2VjdGlvbi0tYWxpZ24tZW5kJzogdGhpcy5hbGlnbkVuZCxcbiAgICAgICAgJ21kYy10b29sYmFyX19zZWN0aW9uLS1zaHJpbmstdG8tZml0JzogdGhpcy5zaHJpbmtUb0ZpdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxhIFxuICAgIDpjbGFzcz1cInsnbWF0ZXJpYWwtaWNvbnMnOiEhaWNvbn1cIlxuICAgIGNsYXNzPVwibWRjLXRvb2xiYXItbWVudS1pY29uIG1kYy10b29sYmFyX19tZW51LWljb25cIlxuICAgIHYtb249XCJsaXN0ZW5lcnNcIj5cbiAgICA8c2xvdD57eyBpY29uIH19PC9zbG90PlxuICA8L2E+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgRGlzcGF0Y2hFdmVudE1peGluIH0gZnJvbSAnLi4vYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRvb2xiYXItbWVudS1pY29uJyxcbiAgbWl4aW5zOiBbRGlzcGF0Y2hFdmVudE1peGluXSxcbiAgcHJvcHM6IHtcbiAgICBpY29uOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ21lbnUnIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxhIFxuICAgIGNsYXNzPVwibWRjLXRvb2xiYXItdGl0bGUgbWRjLXRvb2xiYXJfX3RpdGxlXCIgXG4gICAgdi1vbj1cImxpc3RlbmVyc1wiPlxuICAgIDxzbG90Lz5cbiAgPC9hPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IERpc3BhdGNoRXZlbnRNaXhpbiB9IGZyb20gJy4uL2Jhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy10b29sYmFyLXRpdGxlJyxcbiAgbWl4aW5zOiBbRGlzcGF0Y2hFdmVudE1peGluXVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxhIFxuICAgIDpjbGFzcz1cInsnbWF0ZXJpYWwtaWNvbnMnOiEhaWNvbn1cIiBcbiAgICBjbGFzcz1cIm1kYy10b29sYmFyLWljb24gbWRjLXRvb2xiYXJfX2ljb25cIlxuICAgIHYtb249XCJsaXN0ZW5lcnNcIj5cbiAgICA8c2xvdD57eyBpY29uIH19PC9zbG90PlxuICA8L2E+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgRGlzcGF0Y2hFdmVudE1peGluIH0gZnJvbSAnLi4vYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXRvb2xiYXItaWNvbicsXG4gIG1peGluczogW0Rpc3BhdGNoRXZlbnRNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgaWNvbjogU3RyaW5nXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgbWRjVG9vbGJhciBmcm9tICcuL21kYy10b29sYmFyLnZ1ZSdcbmltcG9ydCBtZGNUb29sYmFyUm93IGZyb20gJy4vbWRjLXRvb2xiYXItcm93LnZ1ZSdcbmltcG9ydCBtZGNUb29sYmFyU2VjdGlvbiBmcm9tICcuL21kYy10b29sYmFyLXNlY3Rpb24udnVlJ1xuaW1wb3J0IG1kY1Rvb2xiYXJNZW51SWNvbiBmcm9tICcuL21kYy10b29sYmFyLW1lbnUtaWNvbi52dWUnXG5pbXBvcnQgbWRjVG9vbGJhclRpdGxlIGZyb20gJy4vbWRjLXRvb2xiYXItdGl0bGUudnVlJ1xuaW1wb3J0IG1kY1Rvb2xiYXJJY29uIGZyb20gJy4vbWRjLXRvb2xiYXItaWNvbi52dWUnXG5cbmV4cG9ydCB7XG4gIG1kY1Rvb2xiYXIsXG4gIG1kY1Rvb2xiYXJSb3csXG4gIG1kY1Rvb2xiYXJTZWN0aW9uLFxuICBtZGNUb29sYmFyTWVudUljb24sXG4gIG1kY1Rvb2xiYXJUaXRsZSxcbiAgbWRjVG9vbGJhckljb25cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY1Rvb2xiYXIsXG4gIG1kY1Rvb2xiYXJSb3csXG4gIG1kY1Rvb2xiYXJTZWN0aW9uLFxuICBtZGNUb29sYmFyTWVudUljb24sXG4gIG1kY1Rvb2xiYXJUaXRsZSxcbiAgbWRjVG9vbGJhckljb25cbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJEaXNwYXRjaEV2ZW50TWl4aW4iLCJwcm9wcyIsImV2ZW50IiwiU3RyaW5nIiwiT2JqZWN0IiwiQXJyYXkiLCJtZXRob2RzIiwiZGlzcGF0Y2hFdmVudCIsImV2dCIsIiRlbWl0IiwidHlwZSIsInRhcmdldCIsImV2ZW50VGFyZ2V0IiwiJHJvb3QiLCJhcmdzIiwiZXZlbnRBcmdzIiwiY29tcHV0ZWQiLCJsaXN0ZW5lcnMiLCIkbGlzdGVuZXJzIiwiY2xpY2siLCJlIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIk1EQ0ZvdW5kYXRpb24iLCJhZGFwdGVyIiwiYWRhcHRlcl8iLCJjc3NDbGFzc2VzIiwiRklYRUQiLCJGSVhFRF9MQVNUUk9XIiwiRklYRURfQVRfTEFTVF9ST1ciLCJUT09MQkFSX1JPV19GTEVYSUJMRSIsIkZMRVhJQkxFX0RFRkFVTFRfQkVIQVZJT1IiLCJGTEVYSUJMRV9NQVgiLCJGTEVYSUJMRV9NSU4iLCJzdHJpbmdzIiwiVElUTEVfU0VMRUNUT1IiLCJJQ09OX1NFTEVDVE9SIiwiRklSU1RfUk9XX1NFTEVDVE9SIiwiQ0hBTkdFX0VWRU5UIiwibnVtYmVycyIsIk1BWF9USVRMRV9TSVpFIiwiTUlOX1RJVExFX1NJWkUiLCJUT09MQkFSX1JPV19IRUlHSFQiLCJUT09MQkFSX1JPV19NT0JJTEVfSEVJR0hUIiwiVE9PTEJBUl9NT0JJTEVfQlJFQUtQT0lOVCIsIk1EQ1Rvb2xiYXJGb3VuZGF0aW9uIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicmVnaXN0ZXJTY3JvbGxIYW5kbGVyIiwiZGVyZWdpc3RlclNjcm9sbEhhbmRsZXIiLCJyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJkZXJlZ2lzdGVyUmVzaXplSGFuZGxlciIsImdldFZpZXdwb3J0V2lkdGgiLCJnZXRWaWV3cG9ydFNjcm9sbFkiLCJnZXRPZmZzZXRIZWlnaHQiLCJnZXRGaXJzdFJvd0VsZW1lbnRPZmZzZXRIZWlnaHQiLCJub3RpZnlDaGFuZ2UiLCJzZXRTdHlsZSIsInNldFN0eWxlRm9yVGl0bGVFbGVtZW50Iiwic2V0U3R5bGVGb3JGbGV4aWJsZVJvd0VsZW1lbnQiLCJzZXRTdHlsZUZvckZpeGVkQWRqdXN0RWxlbWVudCIsImRlZmF1bHRBZGFwdGVyIiwicmVzaXplSGFuZGxlcl8iLCJjaGVja1Jvd0hlaWdodF8iLCJzY3JvbGxIYW5kbGVyXyIsInVwZGF0ZVRvb2xiYXJTdHlsZXNfIiwiY2hlY2tSb3dIZWlnaHRGcmFtZV8iLCJzY3JvbGxGcmFtZV8iLCJleGVjdXRlZExhc3RDaGFuZ2VfIiwiY2FsY3VsYXRpb25zXyIsInRvb2xiYXJSb3dIZWlnaHQiLCJ0b29sYmFyUmF0aW8iLCJmbGV4aWJsZUV4cGFuc2lvblJhdGlvIiwibWF4VHJhbnNsYXRlWVJhdGlvIiwic2Nyb2xsVGhyZXNob2xkUmF0aW8iLCJ0b29sYmFySGVpZ2h0IiwiZmxleGlibGVFeHBhbnNpb25IZWlnaHQiLCJtYXhUcmFuc2xhdGVZRGlzdGFuY2UiLCJzY3JvbGxUaHJlc2hvbGQiLCJmaXhlZF8iLCJmaXhlZExhc3Ryb3dfIiwiaGFzRmxleGlibGVSb3dfIiwidXNlRmxleERlZmF1bHRCZWhhdmlvcl8iLCJpbml0S2V5UmF0aW9fIiwic2V0S2V5SGVpZ2h0c18iLCJzY3JvbGxUb3AiLCJkZWx0YSIsIm1heCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibmV3VG9vbGJhclJvd0hlaWdodCIsImdldFJvd0hlaWdodF8iLCJ1cGRhdGVBZGp1c3RFbGVtZW50U3R5bGVzIiwiaGFzU2Nyb2xsZWRPdXRPZlRocmVzaG9sZCIsInNjcm9sbGVkT3V0T2ZUaHJlc2hvbGRfIiwiZ2V0RmxleGlibGVFeHBhbnNpb25SYXRpb18iLCJ1cGRhdGVUb29sYmFyRmxleGlibGVTdGF0ZV8iLCJ1cGRhdGVUb29sYmFyRml4ZWRTdGF0ZV8iLCJ1cGRhdGVGbGV4aWJsZVJvd0VsZW1lbnRTdHlsZXNfIiwiZmlyc3RSb3dNYXhSYXRpbyIsImJyZWFrcG9pbnQiLCJ0cmFuc2xhdGVEaXN0YW5jZSIsIm1pbiIsImhlaWdodCIsInVwZGF0ZUVsZW1lbnRTdHlsZXNEZWZhdWx0QmVoYXZpb3JfIiwibWF4VGl0bGVTaXplIiwibWluVGl0bGVTaXplIiwiY3VycmVudFRpdGxlU2l6ZSIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsImNvbXBpbGVkVGVtcGxhdGUiLCJpbmplY3RTdHlsZSIsImRlZmF1bHRFeHBvcnQiLCJzY29wZUlkIiwiaXNGdW5jdGlvbmFsVGVtcGxhdGUiLCJtb2R1bGVJZGVudGlmaWVyIiwiaXNTaGFkb3dNb2RlIiwiY3JlYXRlSW5qZWN0b3IiLCJjcmVhdGVJbmplY3RvclNTUiIsImNyZWF0ZUluamVjdG9yU2hhZG93Iiwib3B0aW9ucyIsInJlbmRlciIsInN0YXRpY1JlbmRlckZucyIsIl9jb21waWxlZCIsImZ1bmN0aW9uYWwiLCJfc2NvcGVJZCIsImhvb2siLCJjb250ZXh0IiwiJHZub2RlIiwic3NyQ29udGV4dCIsInBhcmVudCIsIl9fVlVFX1NTUl9DT05URVhUX18iLCJjYWxsIiwiX3JlZ2lzdGVyZWRDb21wb25lbnRzIiwiYWRkIiwiX3NzclJlZ2lzdGVyIiwiJG9wdGlvbnMiLCJzaGFkb3dSb290Iiwib3JpZ2luYWxSZW5kZXIiLCJyZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24iLCJoIiwiZXhpc3RpbmciLCJiZWZvcmVDcmVhdGUiLCJjb25jYXQiLCJzY3JpcHQiLCJtZGNUb29sYmFyIiwibWRjVG9vbGJhclJvdyIsIm1kY1Rvb2xiYXJTZWN0aW9uIiwibWRjVG9vbGJhck1lbnVJY29uIiwibWRjVG9vbGJhclRpdGxlIiwibWRjVG9vbGJhckljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtJQUMvQjtJQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztJQUNBLE1BQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztJQUNqQ0QsSUFBQUEsSUFBSSxHQUFHQyxNQUFNLENBQUNDLEdBQWQ7SUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0lBQ3hDO0lBQ0FILElBQUFBLElBQUksR0FBR0csTUFBTSxDQUFDRCxHQUFkO0lBQ0Q7O0lBQ0QsTUFBSUYsSUFBSixFQUFVO0lBQ1JBLElBQUFBLElBQUksQ0FBQ0ksR0FBTCxDQUFTTCxNQUFUO0lBQ0Q7SUFDRjs7SUNaTSxTQUFTTSxVQUFULENBQW9CQyxVQUFwQixFQUFnQztJQUNyQyxTQUFPO0lBQ0xDLElBQUFBLE9BQU8sRUFBRSxhQURKO0lBRUxDLElB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
