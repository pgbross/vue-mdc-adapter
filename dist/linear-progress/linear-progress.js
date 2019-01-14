/**
* @module vue-mdc-adapterlinear-progress 0.19.0-beta
* @exports VueMDCLinearProgress
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.42.0","material-components-web":"^0.42.1"}
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
     * @template F
     */

    var MDCComponent =
    /*#__PURE__*/
    function () {
      _createClass(MDCComponent, null, [{
        key: "attachTo",

        /**
         * @param {!Element} root
         * @return {!MDCComponent}
         */
        value: function attachTo(root) {
          // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
          // returns an instantiated component with its root set to that element. Also note that in the cases of
          // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
          // from getDefaultFoundation().
          return new MDCComponent(root, new MDCFoundation());
        }
        /**
         * @param {!Element} root
         * @param {F=} foundation
         * @param {...?} args
         */

      }]);

      function MDCComponent(root) {
        var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

        _classCallCheck(this, MDCComponent);

        /** @protected {!Element} */
        this.root_ = root;

        for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        this.initialize.apply(this, args); // Note that we initialize foundation here and not within the constructor's default param so that
        // this.root_ is defined and can be used within the foundation class.

        /** @protected {!F} */

        this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation_.init();
        this.initialSyncWithDOM();
      }

      _createClass(MDCComponent, [{
        key: "initialize",
        value: function initialize()
        /* ...args */
        {} // Subclasses can override this to do any additional setup work that would be considered part of a
        // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
        // initialized. Any additional arguments besides root and foundation will be passed in here.

        /**
         * @return {!F} foundation
         */

      }, {
        key: "getDefaultFoundation",
        value: function getDefaultFoundation() {
          // Subclasses must override this method to return a properly configured foundation class for the
          // component.
          throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
        }
      }, {
        key: "initialSyncWithDOM",
        value: function initialSyncWithDOM() {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
          // object. An example of this would be a form control wrapper that needs to synchronize its internal state
          // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
          // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
        }
      }, {
        key: "destroy",
        value: function destroy() {
          // Subclasses may implement this method to release any resources / deregister any listeners they have
          // attached. An example of this might be deregistering a resize event from the window object.
          this.foundation_.destroy();
        }
        /**
         * Wrapper method to add an event listener to the component's root element. This is most useful when
         * listening for custom events.
         * @param {string} evtType
         * @param {!Function} handler
         */

      }, {
        key: "listen",
        value: function listen(evtType, handler) {
          this.root_.addEventListener(evtType, handler);
        }
        /**
         * Wrapper method to remove an event listener to the component's root element. This is most useful when
         * unlistening for custom events.
         * @param {string} evtType
         * @param {!Function} handler
         */

      }, {
        key: "unlisten",
        value: function unlisten(evtType, handler) {
          this.root_.removeEventListener(evtType, handler);
        }
        /**
         * Fires a cross-browser-compatible custom event from the component root of the given type,
         * with the given data.
         * @param {string} evtType
         * @param {!Object} evtData
         * @param {boolean=} shouldBubble
         */

      }, {
        key: "emit",
        value: function emit(evtType, evtData) {
          var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var evt;

          if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
              detail: evtData,
              bubbles: shouldBubble
            });
          } else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
          }

          this.root_.dispatchEvent(evt);
        }
      }]);

      return MDCComponent;
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
      /* component normalizer */
      function __vue_normalize__(
        template, style, script$$1,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "/ddata/extra/vma/components/linear-progress/mdc-linear-progress.vue";

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
      

      
      var mdcLinearProgress = __vue_normalize__(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZWFyLXByb2dyZXNzLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXV0by1pbml0LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Jhc2UtcGx1Z2luLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1ldmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS91bmlxdWVpZC1taXhpbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYW5pbWF0aW9uL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saW5lYXItcHJvZ3Jlc3MvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saW5lYXItcHJvZ3Jlc3MvZm91bmRhdGlvbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvbGluZWFyLXByb2dyZXNzL21kYy1saW5lYXItcHJvZ3Jlc3MudnVlIiwiLi4vLi4vY29tcG9uZW50cy9saW5lYXItcHJvZ3Jlc3MvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL2xpbmVhci1wcm9ncmVzcy9lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXV0b0luaXQocGx1Z2luKSB7XG4gIC8vIEF1dG8taW5zdGFsbFxuICBsZXQgX1Z1ZSA9IG51bGxcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgX1Z1ZSA9IHdpbmRvdy5WdWVcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8qZ2xvYmFsIGdsb2JhbCovXG4gICAgX1Z1ZSA9IGdsb2JhbC5WdWVcbiAgfVxuICBpZiAoX1Z1ZSkge1xuICAgIF9WdWUudXNlKHBsdWdpbilcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIEJhc2VQbHVnaW4oY29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICdfX1ZFUlNJT05fXycsXG4gICAgaW5zdGFsbDogdm0gPT4ge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNba2V5XVxuICAgICAgICB2bS5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHNcbiAgfVxufVxuIiwiLyogZ2xvYmFsIEN1c3RvbUV2ZW50ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Q3VzdG9tRXZlbnQoZWwsIGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gIGxldCBldnRcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICBidWJibGVzOiBzaG91bGRCdWJibGVcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKVxuICB9XG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBBXG4gKi9cbmNsYXNzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVte2Nzc0NsYXNzZXN9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtzdHJpbmdzfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtudW1iZXJzfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshT2JqZWN0fSAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAvLyB2YWxpZGF0aW9uLlxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0E9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyID0ge30pIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUF9ICovXG4gICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAdGVtcGxhdGUgRlxuICovXG5jbGFzcyBNRENDb21wb25lbnQge1xuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcmV0dXJuIHshTURDQ29tcG9uZW50fVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHdoaWNoIGV4dGVuZCBNRENCYXNlIHNob3VsZCBwcm92aWRlIGFuIGF0dGFjaFRvKCkgbWV0aG9kIHRoYXQgdGFrZXMgYSByb290IGVsZW1lbnQgYW5kXG4gICAgLy8gcmV0dXJucyBhbiBpbnN0YW50aWF0ZWQgY29tcG9uZW50IHdpdGggaXRzIHJvb3Qgc2V0IHRvIHRoYXQgZWxlbWVudC4gQWxzbyBub3RlIHRoYXQgaW4gdGhlIGNhc2VzIG9mXG4gICAgLy8gc3ViY2xhc3NlcywgYW4gZXhwbGljaXQgZm91bmRhdGlvbiBjbGFzcyB3aWxsIG5vdCBoYXZlIHRvIGJlIHBhc3NlZCBpbjsgaXQgd2lsbCBzaW1wbHkgYmUgaW5pdGlhbGl6ZWRcbiAgICAvLyBmcm9tIGdldERlZmF1bHRGb3VuZGF0aW9uKCkuXG4gICAgcmV0dXJuIG5ldyBNRENDb21wb25lbnQocm9vdCwgbmV3IE1EQ0ZvdW5kYXRpb24oKSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcGFyYW0ge0Y9fSBmb3VuZGF0aW9uXG4gICAqIEBwYXJhbSB7Li4uP30gYXJnc1xuICAgKi9cbiAgY29uc3RydWN0b3Iocm9vdCwgZm91bmRhdGlvbiA9IHVuZGVmaW5lZCwgLi4uYXJncykge1xuICAgIC8qKiBAcHJvdGVjdGVkIHshRWxlbWVudH0gKi9cbiAgICB0aGlzLnJvb3RfID0gcm9vdDtcbiAgICB0aGlzLmluaXRpYWxpemUoLi4uYXJncyk7XG4gICAgLy8gTm90ZSB0aGF0IHdlIGluaXRpYWxpemUgZm91bmRhdGlvbiBoZXJlIGFuZCBub3Qgd2l0aGluIHRoZSBjb25zdHJ1Y3RvcidzIGRlZmF1bHQgcGFyYW0gc28gdGhhdFxuICAgIC8vIHRoaXMucm9vdF8gaXMgZGVmaW5lZCBhbmQgY2FuIGJlIHVzZWQgd2l0aGluIHRoZSBmb3VuZGF0aW9uIGNsYXNzLlxuICAgIC8qKiBAcHJvdGVjdGVkIHshRn0gKi9cbiAgICB0aGlzLmZvdW5kYXRpb25fID0gZm91bmRhdGlvbiA9PT0gdW5kZWZpbmVkID8gdGhpcy5nZXREZWZhdWx0Rm91bmRhdGlvbigpIDogZm91bmRhdGlvbjtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmluaXQoKTtcbiAgICB0aGlzLmluaXRpYWxTeW5jV2l0aERPTSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgvKiAuLi5hcmdzICovKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBjYW4gb3ZlcnJpZGUgdGhpcyB0byBkbyBhbnkgYWRkaXRpb25hbCBzZXR1cCB3b3JrIHRoYXQgd291bGQgYmUgY29uc2lkZXJlZCBwYXJ0IG9mIGFcbiAgICAvLyBcImNvbnN0cnVjdG9yXCIuIEVzc2VudGlhbGx5LCBpdCBpcyBhIGhvb2sgaW50byB0aGUgcGFyZW50IGNvbnN0cnVjdG9yIGJlZm9yZSB0aGUgZm91bmRhdGlvbiBpc1xuICAgIC8vIGluaXRpYWxpemVkLiBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgYmVzaWRlcyByb290IGFuZCBmb3VuZGF0aW9uIHdpbGwgYmUgcGFzc2VkIGluIGhlcmUuXG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUZ9IGZvdW5kYXRpb25cbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkIGZvdW5kYXRpb24gY2xhc3MgZm9yIHRoZVxuICAgIC8vIGNvbXBvbmVudC5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSBnZXREZWZhdWx0Rm91bmRhdGlvbiB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkICcgK1xuICAgICAgJ2ZvdW5kYXRpb24gY2xhc3MnKTtcbiAgfVxuXG4gIGluaXRpYWxTeW5jV2l0aERPTSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCBpZiB0aGV5IG5lZWQgdG8gcGVyZm9ybSB3b3JrIHRvIHN5bmNocm9uaXplIHdpdGggYSBob3N0IERPTVxuICAgIC8vIG9iamVjdC4gQW4gZXhhbXBsZSBvZiB0aGlzIHdvdWxkIGJlIGEgZm9ybSBjb250cm9sIHdyYXBwZXIgdGhhdCBuZWVkcyB0byBzeW5jaHJvbml6ZSBpdHMgaW50ZXJuYWwgc3RhdGVcbiAgICAvLyB0byBzb21lIHByb3BlcnR5IG9yIGF0dHJpYnV0ZSBvZiB0aGUgaG9zdCBET00uIFBsZWFzZSBub3RlOiB0aGlzIGlzICpub3QqIHRoZSBwbGFjZSB0byBwZXJmb3JtIERPTVxuICAgIC8vIHJlYWRzL3dyaXRlcyB0aGF0IHdvdWxkIGNhdXNlIGxheW91dCAvIHBhaW50LCBhcyB0aGlzIGlzIGNhbGxlZCBzeW5jaHJvbm91c2x5IGZyb20gd2l0aGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtYXkgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJlbGVhc2UgYW55IHJlc291cmNlcyAvIGRlcmVnaXN0ZXIgYW55IGxpc3RlbmVycyB0aGV5IGhhdmVcbiAgICAvLyBhdHRhY2hlZC4gQW4gZXhhbXBsZSBvZiB0aGlzIG1pZ2h0IGJlIGRlcmVnaXN0ZXJpbmcgYSByZXNpemUgZXZlbnQgZnJvbSB0aGUgd2luZG93IG9iamVjdC5cbiAgICB0aGlzLmZvdW5kYXRpb25fLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIG1ldGhvZCB0byBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudC4gVGhpcyBpcyBtb3N0IHVzZWZ1bCB3aGVuXG4gICAqIGxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGxpc3RlbihldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIHJlbW92ZSBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogdW5saXN0ZW5pbmcgZm9yIGN1c3RvbSBldmVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bmxpc3RlbihldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGEgY3Jvc3MtYnJvd3Nlci1jb21wYXRpYmxlIGN1c3RvbSBldmVudCBmcm9tIHRoZSBjb21wb25lbnQgcm9vdCBvZiB0aGUgZ2l2ZW4gdHlwZSxcbiAgICogd2l0aCB0aGUgZ2l2ZW4gZGF0YS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshT2JqZWN0fSBldnREYXRhXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IHNob3VsZEJ1YmJsZVxuICAgKi9cbiAgZW1pdChldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICAgIGxldCBldnQ7XG4gICAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgICBidWJibGVzOiBzaG91bGRCdWJibGUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpO1xuICAgIH1cblxuICAgIHRoaXMucm9vdF8uZGlzcGF0Y2hFdmVudChldnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0NvbXBvbmVudDtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmV4cG9ydCB7TURDRm91bmRhdGlvbiwgTURDQ29tcG9uZW50fTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIG5vUHJlZml4OiBzdHJpbmcsXG4gKiAgIHdlYmtpdFByZWZpeDogc3RyaW5nLFxuICogICBzdHlsZVByb3BlcnR5OiBzdHJpbmdcbiAqIH19XG4gKi9cbmxldCBWZW5kb3JQcm9wZXJ0eU1hcFR5cGU7XG5cbi8qKiBAY29uc3Qge09iamVjdDxzdHJpbmcsICFWZW5kb3JQcm9wZXJ0eU1hcFR5cGU+fSAqL1xuY29uc3QgZXZlbnRUeXBlTWFwID0ge1xuICAnYW5pbWF0aW9uc3RhcnQnOiB7XG4gICAgbm9QcmVmaXg6ICdhbmltYXRpb25zdGFydCcsXG4gICAgd2Via2l0UHJlZml4OiAnd2Via2l0QW5pbWF0aW9uU3RhcnQnLFxuICAgIHN0eWxlUHJvcGVydHk6ICdhbmltYXRpb24nLFxuICB9LFxuICAnYW5pbWF0aW9uZW5kJzoge1xuICAgIG5vUHJlZml4OiAnYW5pbWF0aW9uZW5kJyxcbiAgICB3ZWJraXRQcmVmaXg6ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgIHN0eWxlUHJvcGVydHk6ICdhbmltYXRpb24nLFxuICB9LFxuICAnYW5pbWF0aW9uaXRlcmF0aW9uJzoge1xuICAgIG5vUHJlZml4OiAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgICB3ZWJraXRQcmVmaXg6ICd3ZWJraXRBbmltYXRpb25JdGVyYXRpb24nLFxuICAgIHN0eWxlUHJvcGVydHk6ICdhbmltYXRpb24nLFxuICB9LFxuICAndHJhbnNpdGlvbmVuZCc6IHtcbiAgICBub1ByZWZpeDogJ3RyYW5zaXRpb25lbmQnLFxuICAgIHdlYmtpdFByZWZpeDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIHN0eWxlUHJvcGVydHk6ICd0cmFuc2l0aW9uJyxcbiAgfSxcbn07XG5cbi8qKiBAY29uc3Qge09iamVjdDxzdHJpbmcsICFWZW5kb3JQcm9wZXJ0eU1hcFR5cGU+fSAqL1xuY29uc3QgY3NzUHJvcGVydHlNYXAgPSB7XG4gICdhbmltYXRpb24nOiB7XG4gICAgbm9QcmVmaXg6ICdhbmltYXRpb24nLFxuICAgIHdlYmtpdFByZWZpeDogJy13ZWJraXQtYW5pbWF0aW9uJyxcbiAgfSxcbiAgJ3RyYW5zZm9ybSc6IHtcbiAgICBub1ByZWZpeDogJ3RyYW5zZm9ybScsXG4gICAgd2Via2l0UHJlZml4OiAnLXdlYmtpdC10cmFuc2Zvcm0nLFxuICB9LFxuICAndHJhbnNpdGlvbic6IHtcbiAgICBub1ByZWZpeDogJ3RyYW5zaXRpb24nLFxuICAgIHdlYmtpdFByZWZpeDogJy13ZWJraXQtdHJhbnNpdGlvbicsXG4gIH0sXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gd2luZG93T2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBoYXNQcm9wZXJTaGFwZSh3aW5kb3dPYmopIHtcbiAgcmV0dXJuICh3aW5kb3dPYmpbJ2RvY3VtZW50J10gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd2luZG93T2JqWydkb2N1bWVudCddWydjcmVhdGVFbGVtZW50J10gPT09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGV2ZW50Rm91bmRJbk1hcHMoZXZlbnRUeXBlKSB7XG4gIHJldHVybiAoZXZlbnRUeXBlIGluIGV2ZW50VHlwZU1hcCB8fCBldmVudFR5cGUgaW4gY3NzUHJvcGVydHlNYXApO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGVcbiAqIEBwYXJhbSB7IU9iamVjdDxzdHJpbmcsICFWZW5kb3JQcm9wZXJ0eU1hcFR5cGU+fSBtYXBcbiAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEphdmFTY3JpcHRFdmVudE5hbWUoZXZlbnRUeXBlLCBtYXAsIGVsKSB7XG4gIHJldHVybiBtYXBbZXZlbnRUeXBlXS5zdHlsZVByb3BlcnR5IGluIGVsLnN0eWxlID8gbWFwW2V2ZW50VHlwZV0ubm9QcmVmaXggOiBtYXBbZXZlbnRUeXBlXS53ZWJraXRQcmVmaXg7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGRldGVybWluZSBicm93c2VyIHByZWZpeCBmb3IgQ1NTMyBhbmltYXRpb24gZXZlbnRzXG4gKiBhbmQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcGFyYW0geyFPYmplY3R9IHdpbmRvd09ialxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRBbmltYXRpb25OYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKSB7XG4gIGlmICghaGFzUHJvcGVyU2hhcGUod2luZG93T2JqKSB8fCAhZXZlbnRGb3VuZEluTWFwcyhldmVudFR5cGUpKSB7XG4gICAgcmV0dXJuIGV2ZW50VHlwZTtcbiAgfVxuXG4gIGNvbnN0IG1hcCA9IC8qKiBAdHlwZSB7IU9iamVjdDxzdHJpbmcsICFWZW5kb3JQcm9wZXJ0eU1hcFR5cGU+fSAqLyAoXG4gICAgZXZlbnRUeXBlIGluIGV2ZW50VHlwZU1hcCA/IGV2ZW50VHlwZU1hcCA6IGNzc1Byb3BlcnR5TWFwXG4gICk7XG4gIGNvbnN0IGVsID0gd2luZG93T2JqWydkb2N1bWVudCddWydjcmVhdGVFbGVtZW50J10oJ2RpdicpO1xuICBsZXQgZXZlbnROYW1lID0gJyc7XG5cbiAgaWYgKG1hcCA9PT0gZXZlbnRUeXBlTWFwKSB7XG4gICAgZXZlbnROYW1lID0gZ2V0SmF2YVNjcmlwdEV2ZW50TmFtZShldmVudFR5cGUsIG1hcCwgZWwpO1xuICB9IGVsc2Uge1xuICAgIGV2ZW50TmFtZSA9IG1hcFtldmVudFR5cGVdLm5vUHJlZml4IGluIGVsLnN0eWxlID8gbWFwW2V2ZW50VHlwZV0ubm9QcmVmaXggOiBtYXBbZXZlbnRUeXBlXS53ZWJraXRQcmVmaXg7XG4gIH1cblxuICByZXR1cm4gZXZlbnROYW1lO1xufVxuXG4vLyBQdWJsaWMgZnVuY3Rpb25zIHRvIGFjY2VzcyBnZXRBbmltYXRpb25OYW1lKCkgZm9yIEphdmFTY3JpcHQgZXZlbnRzIG9yIENTU1xuLy8gcHJvcGVydHkgbmFtZXMuXG5cbmNvbnN0IHRyYW5zZm9ybVN0eWxlUHJvcGVydGllcyA9IFsndHJhbnNmb3JtJywgJ1dlYmtpdFRyYW5zZm9ybScsICdNb3pUcmFuc2Zvcm0nLCAnT1RyYW5zZm9ybScsICdNU1RyYW5zZm9ybSddO1xuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gd2luZG93T2JqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldENvcnJlY3RFdmVudE5hbWUod2luZG93T2JqLCBldmVudFR5cGUpIHtcbiAgcmV0dXJuIGdldEFuaW1hdGlvbk5hbWUod2luZG93T2JqLCBldmVudFR5cGUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gd2luZG93T2JqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldENvcnJlY3RQcm9wZXJ0eU5hbWUod2luZG93T2JqLCBldmVudFR5cGUpIHtcbiAgcmV0dXJuIGdldEFuaW1hdGlvbk5hbWUod2luZG93T2JqLCBldmVudFR5cGUpO1xufVxuXG5leHBvcnQge3RyYW5zZm9ybVN0eWxlUHJvcGVydGllcywgZ2V0Q29ycmVjdEV2ZW50TmFtZSwgZ2V0Q29ycmVjdFByb3BlcnR5TmFtZX07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIENMT1NFRF9DTEFTUzogJ21kYy1saW5lYXItcHJvZ3Jlc3MtLWNsb3NlZCcsXG4gIElOREVURVJNSU5BVEVfQ0xBU1M6ICdtZGMtbGluZWFyLXByb2dyZXNzLS1pbmRldGVybWluYXRlJyxcbiAgUkVWRVJTRURfQ0xBU1M6ICdtZGMtbGluZWFyLXByb2dyZXNzLS1yZXZlcnNlZCcsXG59O1xuXG5leHBvcnQgY29uc3Qgc3RyaW5ncyA9IHtcbiAgUFJJTUFSWV9CQVJfU0VMRUNUT1I6ICcubWRjLWxpbmVhci1wcm9ncmVzc19fcHJpbWFyeS1iYXInLFxuICBCVUZGRVJfU0VMRUNUT1I6ICcubWRjLWxpbmVhci1wcm9ncmVzc19fYnVmZmVyJyxcbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHtNRENGb3VuZGF0aW9ufSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9pbmRleCc7XG5pbXBvcnQge3RyYW5zZm9ybVN0eWxlUHJvcGVydGllc30gZnJvbSAnQG1hdGVyaWFsL2FuaW1hdGlvbi9pbmRleCc7XG5cbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5nc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBnZXRQcmltYXJ5QmFyOiAoKSA9PiAvKiBlbDogRWxlbWVudCAqLyB7fSxcbiAgICAgIGdldEJ1ZmZlcjogKCkgPT4gLyogZWw6IEVsZW1lbnQgKi8ge30sXG4gICAgICBoYXNDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiBmYWxzZSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgc2V0U3R5bGU6ICgvKiBlbDogRWxlbWVudCwgc3R5bGVQcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZGV0ZXJtaW5hdGVfID0gIXRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5JTkRFVEVSTUlOQVRFX0NMQVNTKTtcbiAgICB0aGlzLnJldmVyc2VfID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLlJFVkVSU0VEX0NMQVNTKTtcbiAgICB0aGlzLnByb2dyZXNzXyA9IDA7XG4gIH1cblxuICBzZXREZXRlcm1pbmF0ZShpc0RldGVybWluYXRlKSB7XG4gICAgdGhpcy5kZXRlcm1pbmF0ZV8gPSBpc0RldGVybWluYXRlO1xuICAgIGlmICh0aGlzLmRldGVybWluYXRlXykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLklOREVURVJNSU5BVEVfQ0xBU1MpO1xuICAgICAgdGhpcy5zZXRTY2FsZV8odGhpcy5hZGFwdGVyXy5nZXRQcmltYXJ5QmFyKCksIHRoaXMucHJvZ3Jlc3NfKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLklOREVURVJNSU5BVEVfQ0xBU1MpO1xuICAgICAgdGhpcy5zZXRTY2FsZV8odGhpcy5hZGFwdGVyXy5nZXRQcmltYXJ5QmFyKCksIDEpO1xuICAgICAgdGhpcy5zZXRTY2FsZV8odGhpcy5hZGFwdGVyXy5nZXRCdWZmZXIoKSwgMSk7XG4gICAgfVxuICB9XG5cbiAgc2V0UHJvZ3Jlc3ModmFsdWUpIHtcbiAgICB0aGlzLnByb2dyZXNzXyA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmRldGVybWluYXRlXykge1xuICAgICAgdGhpcy5zZXRTY2FsZV8odGhpcy5hZGFwdGVyXy5nZXRQcmltYXJ5QmFyKCksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBzZXRCdWZmZXIodmFsdWUpIHtcbiAgICBpZiAodGhpcy5kZXRlcm1pbmF0ZV8pIHtcbiAgICAgIHRoaXMuc2V0U2NhbGVfKHRoaXMuYWRhcHRlcl8uZ2V0QnVmZmVyKCksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBzZXRSZXZlcnNlKGlzUmV2ZXJzZWQpIHtcbiAgICB0aGlzLnJldmVyc2VfID0gaXNSZXZlcnNlZDtcbiAgICBpZiAodGhpcy5yZXZlcnNlXykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLlJFVkVSU0VEX0NMQVNTKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLlJFVkVSU0VEX0NMQVNTKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5DTE9TRURfQ0xBU1MpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkNMT1NFRF9DTEFTUyk7XG4gIH1cblxuICBzZXRTY2FsZV8oZWwsIHNjYWxlVmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9ICdzY2FsZVgoJyArIHNjYWxlVmFsdWUgKyAnKSc7XG4gICAgdHJhbnNmb3JtU3R5bGVQcm9wZXJ0aWVzLmZvckVhY2goKHRyYW5zZm9ybVN0eWxlUHJvcGVydHkpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U3R5bGUoZWwsIHRyYW5zZm9ybVN0eWxlUHJvcGVydHksIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IFxuICAgIDpjbGFzcz1cImNsYXNzZXNcIiBcbiAgICA6c3R5bGU9XCJzdHlsZXNcIiBcbiAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIiBcbiAgICBjbGFzcz1cIm1kYy1saW5lYXItcHJvZ3Jlc3NcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWRjLWxpbmVhci1wcm9ncmVzc19fYnVmZmVyaW5nLWRvdHNcIi8+XG4gICAgPGRpdiBcbiAgICAgIHJlZj1cImJ1ZmZlclwiIFxuICAgICAgY2xhc3M9XCJtZGMtbGluZWFyLXByb2dyZXNzX19idWZmZXJcIi8+XG4gICAgPGRpdiBcbiAgICAgIHJlZj1cInByaW1hcnlcIiBcbiAgICAgIGNsYXNzPVwibWRjLWxpbmVhci1wcm9ncmVzc19fYmFyIG1kYy1saW5lYXItcHJvZ3Jlc3NfX3ByaW1hcnktYmFyXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cIm1kYy1saW5lYXItcHJvZ3Jlc3NfX2Jhci1pbm5lclwiLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWRjLWxpbmVhci1wcm9ncmVzc19fYmFyIG1kYy1saW5lYXItcHJvZ3Jlc3NfX3NlY29uZGFyeS1iYXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibWRjLWxpbmVhci1wcm9ncmVzc19fYmFyLWlubmVyXCIvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj4gIFxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2xpbmVhci1wcm9ncmVzcy9mb3VuZGF0aW9uJ1xuXG5jb25zdCBQcm9ncmVzc1Byb3BUeXBlID0ge1xuICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICB2YWxpZGF0b3IodmFsdWUpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlKSA+PSAwICYmIE51bWJlcih2YWx1ZSkgPD0gMVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1saW5lYXItcHJvZ3Jlc3MnLFxuICBwcm9wczoge1xuICAgIG9wZW46IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdHJ1ZSB9LFxuICAgIGluZGV0ZXJtaW5hdGU6IEJvb2xlYW4sXG4gICAgcmV2ZXJzZTogQm9vbGVhbixcbiAgICBhY2NlbnQ6IEJvb2xlYW4sXG4gICAgcHJvZ3Jlc3M6IFByb2dyZXNzUHJvcFR5cGUsXG4gICAgYnVmZmVyOiBQcm9ncmVzc1Byb3BUeXBlXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHsgJ21kYy1saW5lYXItcHJvZ3Jlc3MtLWFjY2VudCc6IHRoaXMuYWNjZW50IH0sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIG9wZW4oKSB7XG4gICAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5vcGVuKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5jbG9zZSgpXG4gICAgICB9XG4gICAgfSxcbiAgICBwcm9ncmVzcygpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRQcm9ncmVzcyhOdW1iZXIodGhpcy5wcm9ncmVzcykpXG4gICAgfSxcbiAgICBidWZmZXIoKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0QnVmZmVyKE51bWJlcih0aGlzLmJ1ZmZlcikpXG4gICAgfSxcbiAgICBpbmRldGVybWluYXRlKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldERldGVybWluYXRlKCF0aGlzLmluZGV0ZXJtaW5hdGUpXG4gICAgfSxcbiAgICByZXZlcnNlKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldFJldmVyc2UodGhpcy5yZXZlcnNlKVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICB9LFxuICAgICAgZ2V0UHJpbWFyeUJhcjogKCkgPT4gLyogZWw6IEVsZW1lbnQgKi8ge1xuICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5wcmltYXJ5XG4gICAgICB9LFxuICAgICAgZ2V0QnVmZmVyOiAoKSA9PiAvKiBlbDogRWxlbWVudCAqLyB7XG4gICAgICAgIHJldHVybiB0aGlzLiRyZWZzLmJ1ZmZlclxuICAgICAgfSxcbiAgICAgIGhhc0NsYXNzOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICB0aGlzLiRlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKVxuICAgICAgfSxcbiAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICB0aGlzLiRkZWxldGUodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUpXG4gICAgICB9LFxuICAgICAgc2V0U3R5bGU6IChlbCwgc3R5bGVQcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgICAgICAgZWwuc3R5bGVbc3R5bGVQcm9wZXJ0eV0gPSB2YWx1ZVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuXG4gICAgdGhpcy5mb3VuZGF0aW9uLnNldFJldmVyc2UodGhpcy5yZXZlcnNlKVxuICAgIHRoaXMuZm91bmRhdGlvbi5zZXRQcm9ncmVzcyhOdW1iZXIodGhpcy5wcm9ncmVzcykpXG4gICAgdGhpcy5mb3VuZGF0aW9uLnNldEJ1ZmZlcihOdW1iZXIodGhpcy5idWZmZXIpKVxuICAgIHRoaXMuZm91bmRhdGlvbi5zZXREZXRlcm1pbmF0ZSghdGhpcy5pbmRldGVybWluYXRlKVxuICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5vcGVuKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmNsb3NlKClcbiAgICB9XG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9XG59XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IG1kY0xpbmVhclByb2dyZXNzIGZyb20gJy4vbWRjLWxpbmVhci1wcm9ncmVzcy52dWUnXG5cbmV4cG9ydCB7IG1kY0xpbmVhclByb2dyZXNzIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY0xpbmVhclByb2dyZXNzXG59KVxuIiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJ1xuaW1wb3J0IHsgYXV0b0luaXQgfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHBsdWdpbiBmcm9tICcuL2luZGV4LmpzJ1xuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXG5cbmF1dG9Jbml0KHBsdWdpbilcbiJdLCJuYW1lcyI6WyJhdXRvSW5pdCIsInBsdWdpbiIsIl9WdWUiLCJ3aW5kb3ciLCJWdWUiLCJnbG9iYWwiLCJ1c2UiLCJCYXNlUGx1Z2luIiwiY29tcG9uZW50cyIsInZlcnNpb24iLCJpbnN0YWxsIiwidm0iLCJrZXkiLCJjb21wb25lbnQiLCJuYW1lIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIk1EQ0ZvdW5kYXRpb24iLCJhZGFwdGVyIiwiYWRhcHRlcl8iLCJNRENDb21wb25lbnQiLCJyb290IiwiZm91bmRhdGlvbiIsInVuZGVmaW5lZCIsInJvb3RfIiwiYXJncyIsImluaXRpYWxpemUiLCJmb3VuZGF0aW9uXyIsImdldERlZmF1bHRGb3VuZGF0aW9uIiwiaW5pdCIsImluaXRpYWxTeW5jV2l0aERPTSIsIkVycm9yIiwiZGVzdHJveSIsImV2dFR5cGUiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldnREYXRhIiwic2hvdWxkQnViYmxlIiwiZXZ0IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJ0cmFuc2Zvcm1TdHlsZVByb3BlcnRpZXMiLCJjc3NDbGFzc2VzIiwiQ0xPU0VEX0NMQVNTIiwiSU5ERVRFUk1JTkFURV9DTEFTUyIsIlJFVkVSU0VEX0NMQVNTIiwic3RyaW5ncyIsIlBSSU1BUllfQkFSX1NFTEVDVE9SIiwiQlVGRkVSX1NFTEVDVE9SIiwiTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uIiwiYWRkQ2xhc3MiLCJnZXRQcmltYXJ5QmFyIiwiZ2V0QnVmZmVyIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNldFN0eWxlIiwiZGVmYXVsdEFkYXB0ZXIiLCJkZXRlcm1pbmF0ZV8iLCJyZXZlcnNlXyIsInByb2dyZXNzXyIsImlzRGV0ZXJtaW5hdGUiLCJzZXRTY2FsZV8iLCJ2YWx1ZSIsImlzUmV2ZXJzZWQiLCJlbCIsInNjYWxlVmFsdWUiLCJmb3JFYWNoIiwidHJhbnNmb3JtU3R5bGVQcm9wZXJ0eSIsIm1kY0xpbmVhclByb2dyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQU8sU0FBU0EsUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEI7SUFDL0I7SUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7SUFDQSxNQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7SUFDakNELElBQUFBLElBQUksR0FBR0MsTUFBTSxDQUFDQyxHQUFkO0lBQ0QsR0FGRCxNQUVPLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztJQUN4QztJQUNBSCxJQUFBQSxJQUFJLEdBQUdHLE1BQU0sQ0FBQ0QsR0FBZDtJQUNEOztJQUNELE1BQUlGLElBQUosRUFBVTtJQUNSQSxJQUFBQSxJQUFJLENBQUNJLEdBQUwsQ0FBU0wsTUFBVDtJQUNEO0lBQ0Y7O0lDWk0sU0FBU00sVUFBVCxDQUFvQkMsVUFBcEIsRUFBZ0M7SUFDckMsU0FBTztJQUNMQyxJQUFBQSxPQUFPLEVBQUUsYUFESjtJQUVMQyxJQUFBQSxPQUFPLEVBQUUsaUJBQUFDLEVBQUUsRUFBSTtJQUNiLFdBQUssSUFBSUMsR0FBVCxJQUFnQkosVUFBaEIsRUFBNEI7SUFDMUIsWUFBSUssU0FB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
