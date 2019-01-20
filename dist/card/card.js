/**
* @module vue-mdc-adaptercard 0.19.2-beta
* @exports VueMDCCard
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.VueMDCCard = factory());
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

    var CustomElement = {
      functional: true,
      render: function render(createElement, context) {
        return createElement(context.props.is || context.props.tag || 'div', context.data, context.children);
      }
    };
    var CustomElementMixin = {
      components: {
        CustomElement: CustomElement
      }
    };

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

    var CustomLink = {
      name: 'custom-link',
      functional: true,
      props: {
        tag: {
          type: String,
          default: 'a'
        },
        link: Object
      },
      render: function render(h, context) {
        var element;

        var data = _extends({}, context.data);

        if (context.props.link && context.parent.$router) {
          // router-link case
          element = context.parent.$root.$options.components['router-link'];
          data.props = _extends({
            tag: context.props.tag
          }, context.props.link);

          if (data.on.click) {
            data.nativeOn = {
              click: data.on.click
            };
          }
        } else {
          // element fallback
          element = context.props.tag;
        }

        return h(element, data, context.children);
      }
    };
    var CustomLinkMixin = {
      props: {
        to: [String, Object],
        exact: Boolean,
        append: Boolean,
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String
      },
      computed: {
        link: function link() {
          return this.to && {
            to: this.to,
            exact: this.exact,
            append: this.append,
            replace: this.replace,
            activeClass: this.activeClass,
            exactActiveClass: this.exactActiveClass
          };
        }
      },
      components: {
        CustomLink: CustomLink
      }
    };

    /* global CustomEvent */

    var CustomButton = {
      name: 'custom-button',
      functional: true,
      props: {
        link: Object
      },
      render: function render(h, context) {
        var element;

        var data = _extends({}, context.data);

        if (context.props.link && context.parent.$router) {
          // router-link case
          element = context.parent.$root.$options.components['router-link'];
          data.props = _extends({
            tag: context.props.tag
          }, context.props.link);
          data.attrs.role = 'button';

          if (data.on.click) {
            data.nativeOn = {
              click: data.on.click
            };
          }
        } else if (data.attrs && data.attrs.href) {
          // href case
          element = 'a';
          data.attrs.role = 'button';
        } else {
          // button fallback
          element = 'button';
        }

        return h(element, data, context.children);
      }
    };
    var CustomButtonMixin = {
      props: {
        href: String,
        disabled: Boolean,
        to: [String, Object],
        exact: Boolean,
        append: Boolean,
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String
      },
      computed: {
        link: function link() {
          return this.to && {
            to: this.to,
            exact: this.exact,
            append: this.append,
            replace: this.replace,
            activeClass: this.activeClass,
            exactActiveClass: this.exactActiveClass
          };
        }
      },
      components: {
        CustomButton: CustomButton
      }
    };

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

    //
    //
    //
    //
    //
    //
    //
    //
    var script = {
      name: 'mdc-card',
      props: {
        outlined: Boolean
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
    script.__file = "/ddata/extra/vma/components/card/mdc-card.vue";

    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        { staticClass: "mdc-card", class: { "mdc-card--outlined": _vm.outlined } },
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
      

      
      var mdcCard = normalizeComponent(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        undefined,
        undefined
      );

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

    /* eslint no-unused-vars: [2, {"args": "none"}] */

    /**
     * Adapter for MDC Ripple. Provides an interface for managing
     * - classes
     * - dom
     * - CSS variables
     * - position
     * - dimensions
     * - scroll position
     * - event handlers
     * - unbounded, active and disabled states
     *
     * Additionally, provides type information for the adapter to the Closure
     * compiler.
     *
     * Implement this adapter for your framework of choice to delegate updates to
     * the component in your framework of choice. See architecture documentation
     * for more details.
     * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
     *
     * @record
     */
    var MDCRippleAdapter =
    /*#__PURE__*/
    function () {
      function MDCRippleAdapter() {
        _classCallCheck(this, MDCRippleAdapter);
      }

      _createClass(MDCRippleAdapter, [{
        key: "browserSupportsCssVars",

        /** @return {boolean} */
        value: function browserSupportsCssVars() {}
        /** @return {boolean} */

      }, {
        key: "isUnbounded",
        value: function isUnbounded() {}
        /** @return {boolean} */

      }, {
        key: "isSurfaceActive",
        value: function isSurfaceActive() {}
        /** @return {boolean} */

      }, {
        key: "isSurfaceDisabled",
        value: function isSurfaceDisabled() {}
        /** @param {string} className */

      }, {
        key: "addClass",
        value: function addClass(className) {}
        /** @param {string} className */

      }, {
        key: "removeClass",
        value: function removeClass(className) {}
        /** @param {!EventTarget} target */

      }, {
        key: "containsEventTarget",
        value: function containsEventTarget(target) {}
        /**
         * @param {string} evtType
         * @param {!Function} handler
         */

      }, {
        key: "registerInteractionHandler",
        value: function registerInteractionHandler(evtType, handler) {}
        /**
         * @param {string} evtType
         * @param {!Function} handler
         */

      }, {
        key: "deregisterInteractionHandler",
        value: function deregisterInteractionHandler(evtType, handler) {}
        /**
         * @param {string} evtType
         * @param {!Function} handler
         */

      }, {
        key: "registerDocumentInteractionHandler",
        value: function registerDocumentInteractionHandler(evtType, handler) {}
        /**
         * @param {string} evtType
         * @param {!Function} handler
         */

      }, {
        key: "deregisterDocumentInteractionHandler",
        value: function deregisterDocumentInteractionHandler(evtType, handler) {}
        /**
         * @param {!Function} handler
         */

      }, {
        key: "registerResizeHandler",
        value: function registerResizeHandler(handler) {}
        /**
         * @param {!Function} handler
         */

      }, {
        key: "deregisterResizeHandler",
        value: function deregisterResizeHandler(handler) {}
        /**
         * @param {string} varName
         * @param {?number|string} value
         */

      }, {
        key: "updateCssVariable",
        value: function updateCssVariable(varName, value) {}
        /** @return {!ClientRect} */

      }, {
        key: "computeBoundingRect",
        value: function computeBoundingRect() {}
        /** @return {{x: number, y: number}} */

      }, {
        key: "getWindowPageOffset",
        value: function getWindowPageOffset() {}
      }]);

      return MDCRippleAdapter;
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
    var cssClasses = {
      // Ripple is a special case where the "root" component is really a "mixin" of sorts,
      // given that it's an 'upgrade' to an existing component. That being said it is the root
      // CSS class that all other CSS classes derive from.
      ROOT: 'mdc-ripple-upgraded',
      UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
      BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
      FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
      FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
    };
    var strings = {
      VAR_LEFT: '--mdc-ripple-left',
      VAR_TOP: '--mdc-ripple-top',
      VAR_FG_SIZE: '--mdc-ripple-fg-size',
      VAR_FG_SCALE: '--mdc-ripple-fg-scale',
      VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
      VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
    };
    var numbers = {
      PADDING: 10,
      INITIAL_ORIGIN_SCALE: 0.6,
      DEACTIVATION_TIMEOUT_MS: 225,
      // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
      FG_DEACTIVATION_MS: 150,
      // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
      TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices

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

    /**
     * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
     * @private {boolean|undefined}
     */
    var supportsCssVariables_;
    /**
     * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
     * @private {boolean|undefined}
     */

    var supportsPassive_$1;
    /**
     * @param {!Window} windowObj
     * @return {boolean}
     */

    function detectEdgePseudoVarBug(windowObj) {
      // Detect versions of Edge with buggy var() support
      // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
      var document = windowObj.document;
      var node = document.createElement('div');
      node.className = 'mdc-ripple-surface--test-edge-var-bug';
      document.body.appendChild(node); // The bug exists if ::before style ends up propagating to the parent element.
      // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
      // but Firefox is known to support CSS custom properties correctly.
      // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

      var computedStyle = windowObj.getComputedStyle(node);
      var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
      node.remove();
      return hasPseudoVarBug;
    }
    /**
     * @param {!Window} windowObj
     * @param {boolean=} forceRefresh
     * @return {boolean|undefined}
     */


    function supportsCssVariables(windowObj) {
      var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var supportsCssVariables = supportsCssVariables_;

      if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables;
      }

      var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';

      if (!supportsFunctionPresent) {
        return;
      }

      var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669
      // See: README section on Safari

      var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

      if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
        supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
      } else {
        supportsCssVariables = false;
      }

      if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVariables;
      }

      return supportsCssVariables;
    } //

    /**
     * Determine whether the current browser supports passive event listeners, and if so, use them.
     * @param {!Window=} globalObj
     * @param {boolean=} forceRefresh
     * @return {boolean|!EventListenerOptions}
     */


    function applyPassive$1() {
      var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
      var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (supportsPassive_$1 === undefined || forceRefresh) {
        var isSupported = false;

        try {
          globalObj.document.addEventListener('test', null, {
            get passive() {
              isSupported = true;
              return isSupported;
            }

          });
        } catch (e) {}

        supportsPassive_$1 = isSupported;
      }

      return supportsPassive_$1 ?
      /** @type {!EventListenerOptions} */
      {
        passive: true
      } : false;
    }
    /**
     * @param {!Object} HTMLElementPrototype
     * @return {string}
     */


    function getMatchesProperty(HTMLElementPrototype) {
      /**
       * Order is important because we return the first existing method we find.
       * Do not change the order of the items in the below array.
       */
      var matchesMethods = ['matches', 'webkitMatchesSelector', 'msMatchesSelector'];
      var method = 'matches';

      for (var i = 0; i < matchesMethods.length; i++) {
        var matchesMethod = matchesMethods[i];

        if (matchesMethod in HTMLElementPrototype) {
          method = matchesMethod;
          break;
        }
      }

      return method;
    }
    /**
     * @param {!Event} ev
     * @param {{x: number, y: number}} pageOffset
     * @param {!ClientRect} clientRect
     * @return {{x: number, y: number}}
     */


    function getNormalizedEventCoords(ev, pageOffset, clientRect) {
      var x = pageOffset.x,
          y = pageOffset.y;
      var documentX = x + clientRect.left;
      var documentY = y + clientRect.top;
      var normalizedX;
      var normalizedY; // Determine touch point relative to the ripple container.

      if (ev.type === 'touchstart') {
        ev =
        /** @type {!TouchEvent} */
        ev;
        normalizedX = ev.changedTouches[0].pageX - documentX;
        normalizedY = ev.changedTouches[0].pageY - documentY;
      } else {
        ev =
        /** @type {!MouseEvent} */
        ev;
        normalizedX = ev.pageX - documentX;
        normalizedY = ev.pageY - documentY;
      }

      return {
        x: normalizedX,
        y: normalizedY
      };
    }

    var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs

    var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu']; // Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations

    /** @type {!Array<!EventTarget>} */

    var activatedTargets = [];
    /**
     * @extends {MDCFoundation<!MDCRippleAdapter>}
     */

    var MDCRippleFoundation =
    /*#__PURE__*/
    function (_MDCFoundation) {
      _inherits(MDCRippleFoundation, _MDCFoundation);

      _createClass(MDCRippleFoundation, null, [{
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
            browserSupportsCssVars: function browserSupportsCssVars()
            /* boolean - cached */
            {},
            isUnbounded: function isUnbounded()
            /* boolean */
            {},
            isSurfaceActive: function isSurfaceActive()
            /* boolean */
            {},
            isSurfaceDisabled: function isSurfaceDisabled()
            /* boolean */
            {},
            addClass: function addClass()
            /* className: string */
            {},
            removeClass: function removeClass()
            /* className: string */
            {},
            containsEventTarget: function containsEventTarget()
            /* target: !EventTarget */
            {},
            registerInteractionHandler: function registerInteractionHandler()
            /* evtType: string, handler: EventListener */
            {},
            deregisterInteractionHandler: function deregisterInteractionHandler()
            /* evtType: string, handler: EventListener */
            {},
            registerDocumentInteractionHandler: function registerDocumentInteractionHandler()
            /* evtType: string, handler: EventListener */
            {},
            deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler()
            /* evtType: string, handler: EventListener */
            {},
            registerResizeHandler: function registerResizeHandler()
            /* handler: EventListener */
            {},
            deregisterResizeHandler: function deregisterResizeHandler()
            /* handler: EventListener */
            {},
            updateCssVariable: function updateCssVariable()
            /* varName: string, value: string */
            {},
            computeBoundingRect: function computeBoundingRect()
            /* ClientRect */
            {},
            getWindowPageOffset: function getWindowPageOffset()
            /* {x: number, y: number} */
            {}
          };
        }
      }]);

      function MDCRippleFoundation(adapter) {
        var _this;

        _classCallCheck(this, MDCRippleFoundation);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCRippleFoundation).call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));
        /** @private {number} */

        _this.layoutFrame_ = 0;
        /** @private {!ClientRect} */

        _this.frame_ =
        /** @type {!ClientRect} */
        {
          width: 0,
          height: 0
        };
        /** @private {!ActivationStateType} */

        _this.activationState_ = _this.defaultActivationState_();
        /** @private {number} */

        _this.initialSize_ = 0;
        /** @private {number} */

        _this.maxRadius_ = 0;
        /** @private {function(!Event)} */

        _this.activateHandler_ = function (e) {
          return _this.activate_(e);
        };
        /** @private {function(!Event=)} */


        _this.deactivateHandler_ = function () {
          return _this.deactivate_();
        };
        /** @private {function(!Event=)} */


        _this.focusHandler_ = function () {
          return _this.handleFocus();
        };
        /** @private {function(!Event=)} */


        _this.blurHandler_ = function () {
          return _this.handleBlur();
        };
        /** @private {!Function} */


        _this.resizeHandler_ = function () {
          return _this.layout();
        };
        /** @private {{left: number, top:number}} */


        _this.unboundedCoords_ = {
          left: 0,
          top: 0
        };
        /** @private {number} */

        _this.fgScale_ = 0;
        /** @private {number} */

        _this.activationTimer_ = 0;
        /** @private {number} */

        _this.fgDeactivationRemovalTimer_ = 0;
        /** @private {boolean} */

        _this.activationAnimationHasEnded_ = false;
        /** @private {!Function} */

        _this.activationTimerCallback_ = function () {
          _this.activationAnimationHasEnded_ = true;

          _this.runDeactivationUXLogicIfReady_();
        };
        /** @private {!Event|undefined} */


        _this.previousActivationEvent_;
        return _this;
      }
      /**
       * We compute this property so that we are not querying information about the client
       * until the point in time where the foundation requests it. This prevents scenarios where
       * client-side feature-detection may happen too early, such as when components are rendered on the server
       * and then initialized at mount time on the client.
       * @return {boolean}
       * @private
       */


      _createClass(MDCRippleFoundation, [{
        key: "supportsPressRipple_",
        value: function supportsPressRipple_() {
          return this.adapter_.browserSupportsCssVars();
        }
        /**
         * @return {!ActivationStateType}
         */

      }, {
        key: "defaultActivationState_",
        value: function defaultActivationState_() {
          return {
            isActivated: false,
            hasDeactivationUXRun: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
            activationEvent: undefined,
            isProgrammatic: false
          };
        }
        /** @override */

      }, {
        key: "init",
        value: function init() {
          var _this2 = this;

          var supportsPressRipple = this.supportsPressRipple_();
          this.registerRootHandlers_(supportsPressRipple);

          if (supportsPressRipple) {
            var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
                ROOT = _MDCRippleFoundation$.ROOT,
                UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;
            requestAnimationFrame(function () {
              _this2.adapter_.addClass(ROOT);

              if (_this2.adapter_.isUnbounded()) {
                _this2.adapter_.addClass(UNBOUNDED); // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple


                _this2.layoutInternal_();
              }
            });
          }
        }
        /** @override */

      }, {
        key: "destroy",
        value: function destroy() {
          var _this3 = this;

          if (this.supportsPressRipple_()) {
            if (this.activationTimer_) {
              clearTimeout(this.activationTimer_);
              this.activationTimer_ = 0;
              this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }

            if (this.fgDeactivationRemovalTimer_) {
              clearTimeout(this.fgDeactivationRemovalTimer_);
              this.fgDeactivationRemovalTimer_ = 0;
              this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }

            var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
                ROOT = _MDCRippleFoundation$2.ROOT,
                UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;
            requestAnimationFrame(function () {
              _this3.adapter_.removeClass(ROOT);

              _this3.adapter_.removeClass(UNBOUNDED);

              _this3.removeCssVars_();
            });
          }

          this.deregisterRootHandlers_();
          this.deregisterDeactivationHandlers_();
        }
        /**
         * @param {boolean} supportsPressRipple Passed from init to save a redundant function call
         * @private
         */

      }, {
        key: "registerRootHandlers_",
        value: function registerRootHandlers_(supportsPressRipple) {
          var _this4 = this;

          if (supportsPressRipple) {
            ACTIVATION_EVENT_TYPES.forEach(function (type) {
              _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
            });

            if (this.adapter_.isUnbounded()) {
              this.adapter_.registerResizeHandler(this.resizeHandler_);
            }
          }

          this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
          this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
        }
        /**
         * @param {!Event} e
         * @private
         */

      }, {
        key: "registerDeactivationHandlers_",
        value: function registerDeactivationHandlers_(e) {
          var _this5 = this;

          if (e.type === 'keydown') {
            this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
          } else {
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
              _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
            });
          }
        }
        /** @private */

      }, {
        key: "deregisterRootHandlers_",
        value: function deregisterRootHandlers_() {
          var _this6 = this;

          ACTIVATION_EVENT_TYPES.forEach(function (type) {
            _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
          });
          this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
          this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

          if (this.adapter_.isUnbounded()) {
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
          }
        }
        /** @private */

      }, {
        key: "deregisterDeactivationHandlers_",
        value: function deregisterDeactivationHandlers_() {
          var _this7 = this;

          this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
          POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
            _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
          });
        }
        /** @private */

      }, {
        key: "removeCssVars_",
        value: function removeCssVars_() {
          var _this8 = this;

          var strings$$1 = MDCRippleFoundation.strings;
          Object.keys(strings$$1).forEach(function (k) {
            if (k.indexOf('VAR_') === 0) {
              _this8.adapter_.updateCssVariable(strings$$1[k], null);
            }
          });
        }
        /**
         * @param {!Event=} e
         * @private
         */

      }, {
        key: "activate_",
        value: function activate_(e) {
          var _this9 = this;

          if (this.adapter_.isSurfaceDisabled()) {
            return;
          }

          var activationState = this.activationState_;

          if (activationState.isActivated) {
            return;
          } // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction


          var previousActivationEvent = this.previousActivationEvent_;
          var isSameInteraction = previousActivationEvent && e !== undefined && previousActivationEvent.type !== e.type;

          if (isSameInteraction) {
            return;
          }

          activationState.isActivated = true;
          activationState.isProgrammatic = e === undefined;
          activationState.activationEvent = e;
          activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e !== undefined && (e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown');
          var hasActivatedChild = e !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
            return _this9.adapter_.containsEventTarget(target);
          });

          if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState_();
            return;
          }

          if (e !== undefined) {
            activatedTargets.push(
            /** @type {!EventTarget} */
            e.target);
            this.registerDeactivationHandlers_(e);
          }

          activationState.wasElementMadeActive = this.checkElementMadeActive_(e);

          if (activationState.wasElementMadeActive) {
            this.animateActivation_();
          }

          requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];

            if (!activationState.wasElementMadeActive && e !== undefined && (e.key === ' ' || e.keyCode === 32)) {
              // If space was pressed, try again within an rAF call to detect :active, because different UAs report
              // active states inconsistently when they're called within event handling code:
              // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
              // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
              // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
              // variable is set within a rAF callback for a submit button interaction (#2241).
              activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);

              if (activationState.wasElementMadeActive) {
                _this9.animateActivation_();
              }
            }

            if (!activationState.wasElementMadeActive) {
              // Reset activation state immediately if element was not made active.
              _this9.activationState_ = _this9.defaultActivationState_();
            }
          });
        }
        /**
         * @param {!Event=} e
         * @private
         */

      }, {
        key: "checkElementMadeActive_",
        value: function checkElementMadeActive_(e) {
          return e !== undefined && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
        }
        /**
         * @param {!Event=} event Optional event containing position information.
         */

      }, {
        key: "activate",
        value: function activate(event) {
          this.activate_(event);
        }
        /** @private */

      }, {
        key: "animateActivation_",
        value: function animateActivation_() {
          var _this10 = this;

          var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
              VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
              VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
          var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
              FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
              FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
          var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
          this.layoutInternal_();
          var translateStart = '';
          var translateEnd = '';

          if (!this.adapter_.isUnbounded()) {
            var _this$getFgTranslatio = this.getFgTranslationCoordinates_(),
                startPoint = _this$getFgTranslatio.startPoint,
                endPoint = _this$getFgTranslatio.endPoint;

            translateStart = "".concat(startPoint.x, "px, ").concat(startPoint.y, "px");
            translateEnd = "".concat(endPoint.x, "px, ").concat(endPoint.y, "px");
          }

          this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
          this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd); // Cancel any ongoing activation/deactivation animations

          clearTimeout(this.activationTimer_);
          clearTimeout(this.fgDeactivationRemovalTimer_);
          this.rmBoundedActivationClasses_();
          this.adapter_.removeClass(FG_DEACTIVATION); // Force layout in order to re-trigger the animation.

          this.adapter_.computeBoundingRect();
          this.adapter_.addClass(FG_ACTIVATION);
          this.activationTimer_ = setTimeout(function () {
            return _this10.activationTimerCallback_();
          }, DEACTIVATION_TIMEOUT_MS);
        }
        /**
         * @private
         * @return {{startPoint: PointType, endPoint: PointType}}
         */

      }, {
        key: "getFgTranslationCoordinates_",
        value: function getFgTranslationCoordinates_() {
          var _this$activationState = this.activationState_,
              activationEvent = _this$activationState.activationEvent,
              wasActivatedByPointer = _this$activationState.wasActivatedByPointer;
          var startPoint;

          if (wasActivatedByPointer) {
            startPoint = getNormalizedEventCoords(
            /** @type {!Event} */
            activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
          } else {
            startPoint = {
              x: this.frame_.width / 2,
              y: this.frame_.height / 2
            };
          } // Center the element around the start point.


          startPoint = {
            x: startPoint.x - this.initialSize_ / 2,
            y: startPoint.y - this.initialSize_ / 2
          };
          var endPoint = {
            x: this.frame_.width / 2 - this.initialSize_ / 2,
            y: this.frame_.height / 2 - this.initialSize_ / 2
          };
          return {
            startPoint: startPoint,
            endPoint: endPoint
          };
        }
        /** @private */

      }, {
        key: "runDeactivationUXLogicIfReady_",
        value: function runDeactivationUXLogicIfReady_() {
          var _this11 = this;

          // This method is called both when a pointing device is released, and when the activation animation ends.
          // The deactivation animation should only run after both of those occur.
          var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
          var _this$activationState2 = this.activationState_,
              hasDeactivationUXRun = _this$activationState2.hasDeactivationUXRun,
              isActivated = _this$activationState2.isActivated;
          var activationHasEnded = hasDeactivationUXRun || !isActivated;

          if (activationHasEnded && this.activationAnimationHasEnded_) {
            this.rmBoundedActivationClasses_();
            this.adapter_.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer_ = setTimeout(function () {
              _this11.adapter_.removeClass(FG_DEACTIVATION);
            }, numbers.FG_DEACTIVATION_MS);
          }
        }
        /** @private */

      }, {
        key: "rmBoundedActivationClasses_",
        value: function rmBoundedActivationClasses_() {
          var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
          this.adapter_.removeClass(FG_ACTIVATION);
          this.activationAnimationHasEnded_ = false;
          this.adapter_.computeBoundingRect();
        }
      }, {
        key: "resetActivationState_",
        value: function resetActivationState_() {
          var _this12 = this;

          this.previousActivationEvent_ = this.activationState_.activationEvent;
          this.activationState_ = this.defaultActivationState_(); // Touch devices may fire additional events for the same interaction within a short time.
          // Store the previous event until it's safe to assume that subsequent events are for new interactions.

          setTimeout(function () {
            return _this12.previousActivationEvent_ = undefined;
          }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
        }
        /**
         * @private
         */

      }, {
        key: "deactivate_",
        value: function deactivate_() {
          var _this13 = this;

          var activationState = this.activationState_; // This can happen in scenarios such as when you have a keyup event that blurs the element.

          if (!activationState.isActivated) {
            return;
          }

          var state =
          /** @type {!ActivationStateType} */
          _extends({}, activationState);

          if (activationState.isProgrammatic) {
            requestAnimationFrame(function () {
              return _this13.animateDeactivation_(state);
            });
            this.resetActivationState_();
          } else {
            this.deregisterDeactivationHandlers_();
            requestAnimationFrame(function () {
              _this13.activationState_.hasDeactivationUXRun = true;

              _this13.animateDeactivation_(state);

              _this13.resetActivationState_();
            });
          }
        }
      }, {
        key: "deactivate",
        value: function deactivate() {
          this.deactivate_();
        }
        /**
         * @param {!ActivationStateType} options
         * @private
         */

      }, {
        key: "animateDeactivation_",
        value: function animateDeactivation_(_ref) {
          var wasActivatedByPointer = _ref.wasActivatedByPointer,
              wasElementMadeActive = _ref.wasElementMadeActive;

          if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady_();
          }
        }
      }, {
        key: "layout",
        value: function layout() {
          var _this14 = this;

          if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
          }

          this.layoutFrame_ = requestAnimationFrame(function () {
            _this14.layoutInternal_();

            _this14.layoutFrame_ = 0;
          });
        }
        /** @private */

      }, {
        key: "layoutInternal_",
        value: function layoutInternal_() {
          var _this15 = this;

          this.frame_ = this.adapter_.computeBoundingRect();
          var maxDim = Math.max(this.frame_.height, this.frame_.width); // Surface diameter is treated differently for unbounded vs. bounded ripples.
          // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
          // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
          // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
          // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
          // `overflow: hidden`.

          var getBoundedRadius = function getBoundedRadius() {
            var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
          };

          this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius(); // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform

          this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
          this.fgScale_ = this.maxRadius_ / this.initialSize_;
          this.updateLayoutCssVars_();
        }
        /** @private */

      }, {
        key: "updateLayoutCssVars_",
        value: function updateLayoutCssVars_() {
          var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
              VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
              VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
              VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
              VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;
          this.adapter_.updateCssVariable(VAR_FG_SIZE, "".concat(this.initialSize_, "px"));
          this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

          if (this.adapter_.isUnbounded()) {
            this.unboundedCoords_ = {
              left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
              top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
            };
            this.adapter_.updateCssVariable(VAR_LEFT, "".concat(this.unboundedCoords_.left, "px"));
            this.adapter_.updateCssVariable(VAR_TOP, "".concat(this.unboundedCoords_.top, "px"));
          }
        }
        /** @param {boolean} unbounded */

      }, {
        key: "setUnbounded",
        value: function setUnbounded(unbounded) {
          var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

          if (unbounded) {
            this.adapter_.addClass(UNBOUNDED);
          } else {
            this.adapter_.removeClass(UNBOUNDED);
          }
        }
      }, {
        key: "handleFocus",
        value: function handleFocus() {
          var _this16 = this;

          requestAnimationFrame(function () {
            return _this16.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
          });
        }
      }, {
        key: "handleBlur",
        value: function handleBlur() {
          var _this17 = this;

          requestAnimationFrame(function () {
            return _this17.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
          });
        }
      }]);

      return MDCRippleFoundation;
    }(MDCFoundation);

    /**
     * @extends MDCComponent<!MDCRippleFoundation>
     */

    var MDCRipple =
    /*#__PURE__*/
    function (_MDCComponent) {
      _inherits(MDCRipple, _MDCComponent);

      /** @param {...?} args */
      function MDCRipple() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, MDCRipple);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MDCRipple)).call.apply(_getPrototypeOf2, [this].concat(args)));
        /** @type {boolean} */

        _this.disabled = false;
        /** @private {boolean} */

        _this.unbounded_;
        return _this;
      }
      /**
       * @param {!Element} root
       * @param {{isUnbounded: (boolean|undefined)}=} options
       * @return {!MDCRipple}
       */


      _createClass(MDCRipple, [{
        key: "setUnbounded_",

        /**
         * Closure Compiler throws an access control error when directly accessing a
         * protected or private property inside a getter/setter, like unbounded above.
         * By accessing the protected property inside a method, we solve that problem.
         * That's why this function exists.
         * @private
         */
        value: function setUnbounded_() {
          this.foundation_.setUnbounded(this.unbounded_);
        }
      }, {
        key: "activate",
        value: function activate() {
          this.foundation_.activate();
        }
      }, {
        key: "deactivate",
        value: function deactivate() {
          this.foundation_.deactivate();
        }
      }, {
        key: "layout",
        value: function layout() {
          this.foundation_.layout();
        }
        /**
         * @return {!MDCRippleFoundation}
         * @override
         */

      }, {
        key: "getDefaultFoundation",
        value: function getDefaultFoundation() {
          return new MDCRippleFoundation(MDCRipple.createAdapter(this));
        }
        /** @override */

      }, {
        key: "initialSyncWithDOM",
        value: function initialSyncWithDOM() {
          this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
        }
      }, {
        key: "unbounded",

        /** @return {boolean} */
        get: function get() {
          return this.unbounded_;
        }
        /** @param {boolean} unbounded */
        ,
        set: function set(unbounded) {
          this.unbounded_ = Boolean(unbounded);
          this.setUnbounded_();
        }
      }], [{
        key: "attachTo",
        value: function attachTo(root) {
          var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref$isUnbounded = _ref.isUnbounded,
              isUnbounded = _ref$isUnbounded === void 0 ? undefined : _ref$isUnbounded;

          var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

          if (isUnbounded !== undefined) {
            ripple.unbounded =
            /** @type {boolean} */
            isUnbounded;
          }

          return ripple;
        }
        /**
         * @param {!RippleCapableSurface} instance
         * @return {!MDCRippleAdapter}
         */

      }, {
        key: "createAdapter",
        value: function createAdapter(instance) {
          var MATCHES = getMatchesProperty(HTMLElement.prototype);
          return {
            browserSupportsCssVars: function browserSupportsCssVars() {
              return supportsCssVariables(window);
            },
            isUnbounded: function isUnbounded() {
              return instance.unbounded;
            },
            isSurfaceActive: function isSurfaceActive() {
              return instance.root_[MATCHES](':active');
            },
            isSurfaceDisabled: function isSurfaceDisabled() {
              return instance.disabled;
            },
            addClass: function addClass(className) {
              return instance.root_.classList.add(className);
            },
            removeClass: function removeClass(className) {
              return instance.root_.classList.remove(className);
            },
            containsEventTarget: function containsEventTarget(target) {
              return instance.root_.contains(target);
            },
            registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
              return instance.root_.addEventListener(evtType, handler, applyPassive$1());
            },
            deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
              return instance.root_.removeEventListener(evtType, handler, applyPassive$1());
            },
            registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
              return document.documentElement.addEventListener(evtType, handler, applyPassive$1());
            },
            deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
              return document.documentElement.removeEventListener(evtType, handler, applyPassive$1());
            },
            registerResizeHandler: function registerResizeHandler(handler) {
              return window.addEventListener('resize', handler);
            },
            deregisterResizeHandler: function deregisterResizeHandler(handler) {
              return window.removeEventListener('resize', handler);
            },
            updateCssVariable: function updateCssVariable(varName, value) {
              return instance.root_.style.setProperty(varName, value);
            },
            computeBoundingRect: function computeBoundingRect() {
              return instance.root_.getBoundingClientRect();
            },
            getWindowPageOffset: function getWindowPageOffset() {
              return {
                x: window.pageXOffset,
                y: window.pageYOffset
              };
            }
          };
        }
      }]);

      return MDCRipple;
    }(MDCComponent);
    /**
     * See Material Design spec for more details on when to use ripples.
     * https://material.io/guidelines/motion/choreography.html#choreography-creation
     * @record
     */


    var RippleCapableSurface = function RippleCapableSurface() {
      _classCallCheck(this, RippleCapableSurface);
    };
    /** @protected {!Element} */


    RippleCapableSurface.prototype.root_;
    /**
     * Whether or not the ripple bleeds out of the bounds of the element.
     * @type {boolean|undefined}
     */

    RippleCapableSurface.prototype.unbounded;
    /**
     * Whether or not the ripple is attached to a disabled component.
     * @type {boolean|undefined}
     */

    RippleCapableSurface.prototype.disabled;

    var RippleBase =
    /*#__PURE__*/
    function (_MDCRippleFoundation) {
      _inherits(RippleBase, _MDCRippleFoundation);

      _createClass(RippleBase, null, [{
        key: "isSurfaceActive",
        value: function isSurfaceActive(ref) {
          return ref[RippleBase.MATCHES](':active');
        }
      }, {
        key: "MATCHES",
        get: function get() {
          /* global HTMLElement */
          return RippleBase._matches || (RippleBase._matches = getMatchesProperty(HTMLElement.prototype));
        }
      }]);

      function RippleBase(vm, options) {
        _classCallCheck(this, RippleBase);

        return _possibleConstructorReturn(this, _getPrototypeOf(RippleBase).call(this, _extends({
          browserSupportsCssVars: function browserSupportsCssVars() {
            return supportsCssVariables(window);
          },
          isUnbounded: function isUnbounded() {
            return false;
          },
          isSurfaceActive: function isSurfaceActive() {
            return vm.$el[RippleBase.MATCHES](':active');
          },
          isSurfaceDisabled: function isSurfaceDisabled() {
            return vm.disabled;
          },
          addClass: function addClass(className) {
            vm.$set(vm.classes, className, true);
          },
          removeClass: function removeClass(className) {
            vm.$delete(vm.classes, className);
          },
          containsEventTarget: function containsEventTarget(target) {
            return vm.$el.contains(target);
          },
          registerInteractionHandler: function registerInteractionHandler(evt, handler) {
            vm.$el.addEventListener(evt, handler, applyPassive$1());
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
            vm.$el.removeEventListener(evt, handler, applyPassive$1());
          },
          registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
            return document.documentElement.addEventListener(evtType, handler, applyPassive$1());
          },
          deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
            return document.documentElement.removeEventListener(evtType, handler, applyPassive$1());
          },
          registerResizeHandler: function registerResizeHandler(handler) {
            return window.addEventListener('resize', handler);
          },
          deregisterResizeHandler: function deregisterResizeHandler(handler) {
            return window.removeEventListener('resize', handler);
          },
          updateCssVariable: function updateCssVariable(varName, value) {
            vm.$set(vm.styles, varName, value);
          },
          computeBoundingRect: function computeBoundingRect() {
            return vm.$el.getBoundingClientRect();
          },
          getWindowPageOffset: function getWindowPageOffset() {
            return {
              x: window.pageXOffset,
              y: window.pageYOffset
            };
          }
        }, options)));
      }

      return RippleBase;
    }(MDCRippleFoundation);
    var RippleMixin = {
      data: function data() {
        return {
          classes: {},
          styles: {}
        };
      },
      mounted: function mounted() {
        this.ripple = new RippleBase(this);
        this.ripple.init();
      },
      beforeDestroy: function beforeDestroy() {
        this.ripple.destroy();
      }
    };

    //
    var script$1 = {
      name: 'mdc-ripple',
      mixins: [CustomElementMixin, RippleMixin],
      props: {
        tag: String
      }
    };

    /* script */
    const __vue_script__$1 = script$1;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$1.__file = "/ddata/extra/vma/components/ripple/mdc-ripple.vue";

    /* template */
    var __vue_render__$1 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "custom-element",
        {
          staticClass: "mdc-ripple",
          attrs: { tag: _vm.tag, classes: _vm.classes, styles: _vm.styles }
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
      

      
      normalizeComponent(
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
    var script$2 = {
      name: 'mdc-card-primary-action',
      mixins: [DispatchEventMixin, CustomLinkMixin, RippleMixin],
      data: function data() {
        return {
          classes: {},
          styles: {}
        };
      }
    };

    /* script */
    const __vue_script__$2 = script$2;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$2.__file = "/ddata/extra/vma/components/card/mdc-card-primary-action.vue";

    /* template */
    var __vue_render__$2 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "custom-link",
        _vm._g(
          {
            staticClass: "mdc-card-primary-action mdc-card__primary-action",
            class: _vm.classes,
            style: _vm.styles,
            attrs: { link: _vm.link }
          },
          _vm.listeners
        ),
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
      

      
      var mdcCardPrimaryAction = normalizeComponent(
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
    var script$3 = {
      name: 'mdc-card-media',
      props: {
        src: String,
        square: Boolean
      },
      computed: {
        styles: function styles() {
          var styles = {
            backgroundImage: "url(".concat(this.src, ")")
          };
          return styles;
        },
        classes: function classes() {
          return this.square ? 'mdc-card__media--square' : 'mdc-card__media--16-9';
        }
      }
    };

    /* script */
    const __vue_script__$3 = script$3;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$3.__file = "/ddata/extra/vma/components/card/mdc-card-media.vue";

    /* template */
    var __vue_render__$3 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "section",
        {
          staticClass: "mdc-card-media mdc-card__media",
          class: _vm.classes,
          style: _vm.styles
        },
        [
          _vm.$slots.default
            ? _c(
                "div",
                { staticClass: "mdc-card__media-content" },
                [_vm._t("default")],
                2
              )
            : _vm._e()
        ]
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
      

      
      var mdcCardMedia = normalizeComponent(
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
    //
    //
    //
    //
    //
    var script$4 = {
      name: 'mdc-card-header',
      props: {
        title: String,
        subtitle: String,
        'large-title': {
          type: Boolean,
          default: true
        }
      }
    };

    /* script */
    const __vue_script__$4 = script$4;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$4.__file = "/ddata/extra/vma/components/card/mdc-card-header.vue";

    /* template */
    var __vue_render__$4 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "section",
        { staticClass: "mdc-card-header mdc-card__primary" },
        [
          _vm._t("default", [
            _vm.title
              ? _c(
                  "h1",
                  {
                    staticClass: "mdc-card__title",
                    class: { "mdc-card__title--large": _vm.largeTitle }
                  },
                  [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.subtitle
              ? _c("h2", { staticClass: "mdc-card__subtitle" }, [
                  _vm._v("\n      " + _vm._s(_vm.subtitle) + " \n    ")
                ])
              : _vm._e()
          ])
        ],
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
      

      
      var mdcCardHeader = normalizeComponent(
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
    //
    //
    //
    //
    //
    //
    //
    var script$5 = {
      name: 'mdc-card-title',
      props: {
        large: Boolean
      }
    };

    /* script */
    const __vue_script__$5 = script$5;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$5.__file = "/ddata/extra/vma/components/card/mdc-card-title.vue";

    /* template */
    var __vue_render__$5 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "h1",
        {
          staticClass: "mdc-card-title mdc-card__title",
          class: { "mdc-card__title--large": _vm.large }
        },
        [_vm._t("default")],
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
      

      
      var mdcCardTitle = normalizeComponent(
        { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
        __vue_inject_styles__$5,
        __vue_script__$5,
        __vue_scope_id__$5,
        __vue_is_functional_template__$5,
        __vue_module_identifier__$5,
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
    var script$6 = {
      name: 'mdc-card-subtitle'
    };

    /* script */
    const __vue_script__$6 = script$6;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$6.__file = "/ddata/extra/vma/components/card/mdc-card-subtitle.vue";

    /* template */
    var __vue_render__$6 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "h2",
        { staticClass: "mdc-card-subtitle mdc-card__subtitle" },
        [_vm._t("default")],
        2
      )
    };
    var __vue_staticRenderFns__$6 = [];
    __vue_render__$6._withStripped = true;

      /* style */
      const __vue_inject_styles__$6 = undefined;
      /* scoped */
      const __vue_scope_id__$6 = undefined;
      /* module identifier */
      const __vue_module_identifier__$6 = undefined;
      /* functional template */
      const __vue_is_functional_template__$6 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcCardSubtitle = normalizeComponent(
        { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
        __vue_inject_styles__$6,
        __vue_script__$6,
        __vue_scope_id__$6,
        __vue_is_functional_template__$6,
        __vue_module_identifier__$6,
        undefined,
        undefined
      );

    //
    //
    //
    //
    //
    //
    var script$7 = {
      name: 'mdc-card-text'
    };

    /* script */
    const __vue_script__$7 = script$7;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$7.__file = "/ddata/extra/vma/components/card/mdc-card-text.vue";

    /* template */
    var __vue_render__$7 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "section",
        { staticClass: "mdc-card-text mdc-card__supporting-text" },
        [_vm._t("default")],
        2
      )
    };
    var __vue_staticRenderFns__$7 = [];
    __vue_render__$7._withStripped = true;

      /* style */
      const __vue_inject_styles__$7 = undefined;
      /* scoped */
      const __vue_scope_id__$7 = undefined;
      /* module identifier */
      const __vue_module_identifier__$7 = undefined;
      /* functional template */
      const __vue_is_functional_template__$7 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcCardText = normalizeComponent(
        { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
        __vue_inject_styles__$7,
        __vue_script__$7,
        __vue_scope_id__$7,
        __vue_is_functional_template__$7,
        __vue_module_identifier__$7,
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
    var script$8 = {
      name: 'mdc-card-actions',
      props: {
        fullBleed: Boolean
      },
      computed: {
        classes: function classes() {
          return {
            'mdc-card__actions--full-bleed': this.fullBleed
          };
        }
      }
    };

    /* script */
    const __vue_script__$8 = script$8;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$8.__file = "/ddata/extra/vma/components/card/mdc-card-actions.vue";

    /* template */
    var __vue_render__$8 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "section",
        { staticClass: "mdc-card-actions mdc-card__actions", class: _vm.classes },
        [_vm._t("default")],
        2
      )
    };
    var __vue_staticRenderFns__$8 = [];
    __vue_render__$8._withStripped = true;

      /* style */
      const __vue_inject_styles__$8 = undefined;
      /* scoped */
      const __vue_scope_id__$8 = undefined;
      /* module identifier */
      const __vue_module_identifier__$8 = undefined;
      /* functional template */
      const __vue_is_functional_template__$8 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcCardActions = normalizeComponent(
        { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
        __vue_inject_styles__$8,
        __vue_script__$8,
        __vue_scope_id__$8,
        __vue_is_functional_template__$8,
        __vue_module_identifier__$8,
        undefined,
        undefined
      );

    //
    //
    //
    //
    //
    //
    var script$9 = {
      name: 'mdc-card-action-buttons'
    };

    /* script */
    const __vue_script__$9 = script$9;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$9.__file = "/ddata/extra/vma/components/card/mdc-card-action-buttons.vue";

    /* template */
    var __vue_render__$9 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        { staticClass: "mdc-card-action-buttons mdc-card__action-buttons" },
        [_vm._t("default")],
        2
      )
    };
    var __vue_staticRenderFns__$9 = [];
    __vue_render__$9._withStripped = true;

      /* style */
      const __vue_inject_styles__$9 = undefined;
      /* scoped */
      const __vue_scope_id__$9 = undefined;
      /* module identifier */
      const __vue_module_identifier__$9 = undefined;
      /* functional template */
      const __vue_is_functional_template__$9 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcCardActionButtons = normalizeComponent(
        { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
        __vue_inject_styles__$9,
        __vue_script__$9,
        __vue_scope_id__$9,
        __vue_is_functional_template__$9,
        __vue_module_identifier__$9,
        undefined,
        undefined
      );

    //
    var script$a = {
      name: 'mdc-button-base',
      mixins: [DispatchEventMixin, CustomButtonMixin, RippleMixin],
      data: function data() {
        return {
          classes: {},
          styles: {}
        };
      }
    };

    /* script */
    const __vue_script__$a = script$a;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$a.__file = "/ddata/extra/vma/components/button/mdc-button-base.vue";

    /* template */
    var __vue_render__$a = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "custom-button",
        _vm._g(
          {
            ref: "root",
            class: _vm.classes,
            style: _vm.styles,
            attrs: { href: _vm.href, link: _vm.link, disabled: _vm.disabled }
          },
          _vm.listeners
        ),
        [_c("span", { staticClass: "mdc-button__label" }, [_vm._t("default")], 2)]
      )
    };
    var __vue_staticRenderFns__$a = [];
    __vue_render__$a._withStripped = true;

      /* style */
      const __vue_inject_styles__$a = undefined;
      /* scoped */
      const __vue_scope_id__$a = undefined;
      /* module identifier */
      const __vue_module_identifier__$a = undefined;
      /* functional template */
      const __vue_is_functional_template__$a = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcButtonBase = normalizeComponent(
        { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
        __vue_inject_styles__$a,
        __vue_script__$a,
        __vue_scope_id__$a,
        __vue_is_functional_template__$a,
        __vue_module_identifier__$a,
        undefined,
        undefined
      );

    var script$b = {
      name: 'mdc-button',
      extends: mdcButtonBase,
      props: {
        raised: Boolean,
        unelevated: Boolean,
        outlined: Boolean,
        dense: Boolean
      },
      data: function data() {
        return {
          classes: {
            'mdc-button': true,
            'mdc-button--raised': this.raised,
            'mdc-button--unelevated': this.unelevated,
            'mdc-button--outlined': this.outlined,
            'mdc-button--dense': this.dense
          }
        };
      },
      watch: {
        raised: function raised() {
          this.$set(this.classes, 'mdc-button--raised', this.raised);
        },
        unelevated: function unelevated() {
          this.$set(this.classes, 'mdc-button--unelevated', this.unelevated);
        },
        outlined: function outlined() {
          this.$set(this.classes, 'mdc-button--outlined', this.outlined);
        },
        dense: function dense() {
          this.$set(this.classes, 'mdc-button--dense', this.dense);
        }
      }
    };

    /* script */
    const __vue_script__$b = script$b;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$b.__file = "/ddata/extra/vma/components/button/mdc-button.vue";

    /* template */

      /* style */
      const __vue_inject_styles__$b = undefined;
      /* scoped */
      const __vue_scope_id__$b = undefined;
      /* module identifier */
      const __vue_module_identifier__$b = undefined;
      /* functional template */
      const __vue_is_functional_template__$b = undefined;
      /* style inject */
      
      /* style inject SSR */
      

      
      normalizeComponent(
        {},
        __vue_inject_styles__$b,
        __vue_script__$b,
        __vue_scope_id__$b,
        __vue_is_functional_template__$b,
        __vue_module_identifier__$b,
        undefined,
        undefined
      );

    var script$c = {
      name: 'mdc-card-action-button',
      extends: mdcButtonBase,
      data: function data() {
        return {
          classes: {
            'mdc-button': true,
            'mdc-card__action': true,
            'mdc-card-action-button': true
          }
        };
      }
    };

    /* script */
    const __vue_script__$c = script$c;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$c.__file = "/ddata/extra/vma/components/card/mdc-card-action-button.vue";

    /* template */

      /* style */
      const __vue_inject_styles__$c = undefined;
      /* scoped */
      const __vue_scope_id__$c = undefined;
      /* module identifier */
      const __vue_module_identifier__$c = undefined;
      /* functional template */
      const __vue_is_functional_template__$c = undefined;
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcCardActionButton = normalizeComponent(
        {},
        __vue_inject_styles__$c,
        __vue_script__$c,
        __vue_scope_id__$c,
        __vue_is_functional_template__$c,
        __vue_module_identifier__$c,
        undefined,
        undefined
      );

    //
    //
    //
    //
    //
    //
    var script$d = {
      name: 'mdc-card-action-icons'
    };

    /* script */
    const __vue_script__$d = script$d;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$d.__file = "/ddata/extra/vma/components/card/mdc-card-action-icons.vue";

    /* template */
    var __vue_render__$b = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        { staticClass: "mdc-card-action-icons mdc-card__action-icons" },
        [_vm._t("default")],
        2
      )
    };
    var __vue_staticRenderFns__$b = [];
    __vue_render__$b._withStripped = true;

      /* style */
      const __vue_inject_styles__$d = undefined;
      /* scoped */
      const __vue_scope_id__$d = undefined;
      /* module identifier */
      const __vue_module_identifier__$d = undefined;
      /* functional template */
      const __vue_is_functional_template__$d = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcCardActionIcons = normalizeComponent(
        { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
        __vue_inject_styles__$d,
        __vue_script__$d,
        __vue_scope_id__$d,
        __vue_is_functional_template__$d,
        __vue_module_identifier__$d,
        undefined,
        undefined
      );

    //
    var script$e = {
      name: 'mdc-card-action-icon',
      mixins: [DispatchEventMixin],
      props: {
        icon: String
      },
      data: function data() {
        return {
          classes: {
            'mdc-card-action-icon': true,
            'material-icons': !!this.icon,
            'mdc-card__action': true,
            'mdc-card__action--icon': true,
            'mdc-icon-toggle': true
          },
          styles: {}
        };
      },
      watch: {
        icon: function icon() {
          this.$set(this.classes, 'material-icons', !!this.icon);
        }
      },
      mounted: function mounted() {
        this.ripple = new RippleBase(this, {
          isUnbounded: function isUnbounded() {
            return true;
          }
        });
        this.ripple.init();
      },
      beforeDestroy: function beforeDestroy() {
        this.ripple.destroy();
      }
    };

    /* script */
    const __vue_script__$e = script$e;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$e.__file = "/ddata/extra/vma/components/card/mdc-card-action-icon.vue";

    /* template */
    var __vue_render__$c = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "span",
        _vm._g({ class: _vm.classes, style: _vm.styles }, _vm.listeners),
        [_vm._t("default", [_vm._v(_vm._s(_vm.icon))])],
        2
      )
    };
    var __vue_staticRenderFns__$c = [];
    __vue_render__$c._withStripped = true;

      /* style */
      const __vue_inject_styles__$e = undefined;
      /* scoped */
      const __vue_scope_id__$e = undefined;
      /* module identifier */
      const __vue_module_identifier__$e = undefined;
      /* functional template */
      const __vue_is_functional_template__$e = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcCardActionIcon = normalizeComponent(
        { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
        __vue_inject_styles__$e,
        __vue_script__$e,
        __vue_scope_id__$e,
        __vue_is_functional_template__$e,
        __vue_module_identifier__$e,
        undefined,
        undefined
      );

    var plugin = BasePlugin({
      mdcCard: mdcCard,
      mdcCardPrimaryAction: mdcCardPrimaryAction,
      mdcCardMedia: mdcCardMedia,
      mdcCardHeader: mdcCardHeader,
      mdcCardTitle: mdcCardTitle,
      mdcCardSubtitle: mdcCardSubtitle,
      mdcCardText: mdcCardText,
      mdcCardActions: mdcCardActions,
      mdcCardActionButtons: mdcCardActionButtons,
      mdcCardActionButton: mdcCardActionButton,
      mdcCardActionIcons: mdcCardActionIcons,
      mdcCardActionIcon: mdcCardActionIcon
    });

    autoInit(plugin);

    return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9iYXNlL2F1dG8taW5pdC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9iYXNlLXBsdWdpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZWxlbWVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tbGluay5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZXZlbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWJ1dHRvbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9kaXNwYXRjaC1ldmVudC1taXhpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS91bmlxdWVpZC1taXhpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvY2FyZC9tZGMtY2FyZC52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXJ1bnRpbWUtaGVscGVycy9ub3JtYWxpemUtY29tcG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLWJhc2UuanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvY2FyZC9tZGMtY2FyZC1wcmltYXJ5LWFjdGlvbi52dWUiLCIuLi8uLi9jb21wb25lbnRzL2NhcmQvbWRjLWNhcmQtbWVkaWEudnVlIiwiLi4vLi4vY29tcG9uZW50cy9jYXJkL21kYy1jYXJkLWhlYWRlci52dWUiLCIuLi8uLi9jb21wb25lbnRzL2NhcmQvbWRjLWNhcmQtdGl0bGUudnVlIiwiLi4vLi4vY29tcG9uZW50cy9jYXJkL21kYy1jYXJkLXN1YnRpdGxlLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvY2FyZC9tZGMtY2FyZC10ZXh0LnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvY2FyZC9tZGMtY2FyZC1hY3Rpb25zLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvY2FyZC9tZGMtY2FyZC1hY3Rpb24tYnV0dG9ucy52dWUiLCIuLi8uLi9jb21wb25lbnRzL2J1dHRvbi9tZGMtYnV0dG9uLWJhc2UudnVlIiwiLi4vLi4vY29tcG9uZW50cy9idXR0b24vbWRjLWJ1dHRvbi52dWUiLCIuLi8uLi9jb21wb25lbnRzL2NhcmQvbWRjLWNhcmQtYWN0aW9uLWJ1dHRvbi52dWUiLCIuLi8uLi9jb21wb25lbnRzL2NhcmQvbWRjLWNhcmQtYWN0aW9uLWljb25zLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvY2FyZC9tZGMtY2FyZC1hY3Rpb24taWNvbi52dWUiLCIuLi8uLi9jb21wb25lbnRzL2NhcmQvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL2NhcmQvZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGF1dG9Jbml0KHBsdWdpbikge1xuICAvLyBBdXRvLWluc3RhbGxcbiAgbGV0IF9WdWUgPSBudWxsXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIF9WdWUgPSB3aW5kb3cuVnVlXG4gIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvKmdsb2JhbCBnbG9iYWwqL1xuICAgIF9WdWUgPSBnbG9iYWwuVnVlXG4gIH1cbiAgaWYgKF9WdWUpIHtcbiAgICBfVnVlLnVzZShwbHVnaW4pXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBCYXNlUGx1Z2luKGNvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnX19WRVJTSU9OX18nLFxuICAgIGluc3RhbGw6IHZtID0+IHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2tleV1cbiAgICAgICAgdm0uY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQpXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50ID0ge1xuICBmdW5jdGlvbmFsOiB0cnVlLFxuICByZW5kZXIoY3JlYXRlRWxlbWVudCwgY29udGV4dCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFxuICAgICAgY29udGV4dC5wcm9wcy5pcyB8fCBjb250ZXh0LnByb3BzLnRhZyB8fCAnZGl2JyxcbiAgICAgIGNvbnRleHQuZGF0YSxcbiAgICAgIGNvbnRleHQuY2hpbGRyZW5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUVsZW1lbnRNaXhpbiA9IHtcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUVsZW1lbnRcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEN1c3RvbUxpbmsgPSB7XG4gIG5hbWU6ICdjdXN0b20tbGluaycsXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgdGFnOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ2EnIH0sXG4gICAgbGluazogT2JqZWN0XG4gIH0sXG4gIHJlbmRlcihoLCBjb250ZXh0KSB7XG4gICAgbGV0IGVsZW1lbnRcbiAgICBsZXQgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQuZGF0YSlcblxuICAgIGlmIChjb250ZXh0LnByb3BzLmxpbmsgJiYgY29udGV4dC5wYXJlbnQuJHJvdXRlcikge1xuICAgICAgLy8gcm91dGVyLWxpbmsgY2FzZVxuICAgICAgZWxlbWVudCA9IGNvbnRleHQucGFyZW50LiRyb290LiRvcHRpb25zLmNvbXBvbmVudHNbJ3JvdXRlci1saW5rJ11cbiAgICAgIGRhdGEucHJvcHMgPSBPYmplY3QuYXNzaWduKHsgdGFnOiBjb250ZXh0LnByb3BzLnRhZyB9LCBjb250ZXh0LnByb3BzLmxpbmspXG4gICAgICBpZiAoZGF0YS5vbi5jbGljaykge1xuICAgICAgICBkYXRhLm5hdGl2ZU9uID0geyBjbGljazogZGF0YS5vbi5jbGljayB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVsZW1lbnQgZmFsbGJhY2tcbiAgICAgIGVsZW1lbnQgPSBjb250ZXh0LnByb3BzLnRhZ1xuICAgIH1cblxuICAgIHJldHVybiBoKGVsZW1lbnQsIGRhdGEsIGNvbnRleHQuY2hpbGRyZW4pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUxpbmtNaXhpbiA9IHtcbiAgcHJvcHM6IHtcbiAgICB0bzogW1N0cmluZywgT2JqZWN0XSxcbiAgICBleGFjdDogQm9vbGVhbixcbiAgICBhcHBlbmQ6IEJvb2xlYW4sXG4gICAgcmVwbGFjZTogQm9vbGVhbixcbiAgICBhY3RpdmVDbGFzczogU3RyaW5nLFxuICAgIGV4YWN0QWN0aXZlQ2xhc3M6IFN0cmluZ1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpbmsoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLnRvICYmIHtcbiAgICAgICAgICB0bzogdGhpcy50byxcbiAgICAgICAgICBleGFjdDogdGhpcy5leGFjdCxcbiAgICAgICAgICBhcHBlbmQ6IHRoaXMuYXBwZW5kLFxuICAgICAgICAgIHJlcGxhY2U6IHRoaXMucmVwbGFjZSxcbiAgICAgICAgICBhY3RpdmVDbGFzczogdGhpcy5hY3RpdmVDbGFzcyxcbiAgICAgICAgICBleGFjdEFjdGl2ZUNsYXNzOiB0aGlzLmV4YWN0QWN0aXZlQ2xhc3NcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUxpbmtcbiAgfVxufVxuIiwiLyogZ2xvYmFsIEN1c3RvbUV2ZW50ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Q3VzdG9tRXZlbnQoZWwsIGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gIGxldCBldnRcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICBidWJibGVzOiBzaG91bGRCdWJibGVcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKVxuICB9XG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxufVxuIiwiZXhwb3J0IGNvbnN0IEN1c3RvbUJ1dHRvbiA9IHtcbiAgbmFtZTogJ2N1c3RvbS1idXR0b24nLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIGxpbms6IE9iamVjdFxuICB9LFxuICByZW5kZXIoaCwgY29udGV4dCkge1xuICAgIGxldCBlbGVtZW50XG4gICAgbGV0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LmRhdGEpXG5cbiAgICBpZiAoY29udGV4dC5wcm9wcy5saW5rICYmIGNvbnRleHQucGFyZW50LiRyb3V0ZXIpIHtcbiAgICAgIC8vIHJvdXRlci1saW5rIGNhc2VcbiAgICAgIGVsZW1lbnQgPSBjb250ZXh0LnBhcmVudC4kcm9vdC4kb3B0aW9ucy5jb21wb25lbnRzWydyb3V0ZXItbGluayddXG4gICAgICBkYXRhLnByb3BzID0gT2JqZWN0LmFzc2lnbih7IHRhZzogY29udGV4dC5wcm9wcy50YWcgfSwgY29udGV4dC5wcm9wcy5saW5rKVxuICAgICAgZGF0YS5hdHRycy5yb2xlID0gJ2J1dHRvbidcbiAgICAgIGlmIChkYXRhLm9uLmNsaWNrKSB7XG4gICAgICAgIGRhdGEubmF0aXZlT24gPSB7IGNsaWNrOiBkYXRhLm9uLmNsaWNrIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy5ocmVmKSB7XG4gICAgICAvLyBocmVmIGNhc2VcbiAgICAgIGVsZW1lbnQgPSAnYSdcbiAgICAgIGRhdGEuYXR0cnMucm9sZSA9ICdidXR0b24nXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGJ1dHRvbiBmYWxsYmFja1xuICAgICAgZWxlbWVudCA9ICdidXR0b24nXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoZWxlbWVudCwgZGF0YSwgY29udGV4dC5jaGlsZHJlbilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9tQnV0dG9uTWl4aW4gPSB7XG4gIHByb3BzOiB7XG4gICAgaHJlZjogU3RyaW5nLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIHRvOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgIGV4YWN0OiBCb29sZWFuLFxuICAgIGFwcGVuZDogQm9vbGVhbixcbiAgICByZXBsYWNlOiBCb29sZWFuLFxuICAgIGFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gICAgZXhhY3RBY3RpdmVDbGFzczogU3RyaW5nXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbGluaygpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMudG8gJiYge1xuICAgICAgICAgIHRvOiB0aGlzLnRvLFxuICAgICAgICAgIGV4YWN0OiB0aGlzLmV4YWN0LFxuICAgICAgICAgIGFwcGVuZDogdGhpcy5hcHBlbmQsXG4gICAgICAgICAgcmVwbGFjZTogdGhpcy5yZXBsYWNlLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzOiB0aGlzLmFjdGl2ZUNsYXNzLFxuICAgICAgICAgIGV4YWN0QWN0aXZlQ2xhc3M6IHRoaXMuZXhhY3RBY3RpdmVDbGFzc1xuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgQ3VzdG9tQnV0dG9uXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBEaXNwYXRjaEV2ZW50TWl4aW4gPSB7XG4gIHByb3BzOiB7XG4gICAgZXZlbnQ6IFN0cmluZyxcbiAgICAnZXZlbnQtdGFyZ2V0JzogT2JqZWN0LFxuICAgICdldmVudC1hcmdzJzogQXJyYXlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRpc3BhdGNoRXZlbnQoZXZ0KSB7XG4gICAgICBldnQgJiYgdGhpcy4kZW1pdChldnQudHlwZSwgZXZ0KVxuICAgICAgaWYgKHRoaXMuZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuZXZlbnRUYXJnZXQgfHwgdGhpcy4kcm9vdFxuICAgICAgICBsZXQgYXJncyA9IHRoaXMuZXZlbnRBcmdzIHx8IFtdXG4gICAgICAgIHRhcmdldC4kZW1pdCh0aGlzLmV2ZW50LCAuLi5hcmdzKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsaXN0ZW5lcnMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLiRsaXN0ZW5lcnMsXG4gICAgICAgIGNsaWNrOiBlID0+IHRoaXMuZGlzcGF0Y2hFdmVudChlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIDpjbGFzcz1cInsnbWRjLWNhcmQtLW91dGxpbmVkJzogb3V0bGluZWR9XCJcbiAgICBjbGFzcz1cIm1kYy1jYXJkXCI+XG4gICAgPHNsb3QvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtY2FyZCcsXG4gIHByb3BzOiB7XG4gICAgb3V0bGluZWQ6IEJvb2xlYW5cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoY29tcGlsZWRUZW1wbGF0ZSwgaW5qZWN0U3R5bGUsIGRlZmF1bHRFeHBvcnQsIHNjb3BlSWQsIGlzRnVuY3Rpb25hbFRlbXBsYXRlLCBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovLCBpc1NoYWRvd01vZGUsIGNyZWF0ZUluamVjdG9yLCBjcmVhdGVJbmplY3RvclNTUiwgY3JlYXRlSW5qZWN0b3JTaGFkb3cpIHtcbiAgICBpZiAodHlwZW9mIGlzU2hhZG93TW9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjcmVhdGVJbmplY3RvclNTUiA9IGNyZWF0ZUluamVjdG9yO1xuICAgICAgICBjcmVhdGVJbmplY3RvciA9IGlzU2hhZG93TW9kZTtcbiAgICAgICAgaXNTaGFkb3dNb2RlID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgICBjb25zdCBvcHRpb25zID0gdHlwZW9mIGRlZmF1bHRFeHBvcnQgPT09ICdmdW5jdGlvbicgPyBkZWZhdWx0RXhwb3J0Lm9wdGlvbnMgOiBkZWZhdWx0RXhwb3J0O1xuICAgIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgICBpZiAoY29tcGlsZWRUZW1wbGF0ZSAmJiBjb21waWxlZFRlbXBsYXRlLnJlbmRlcikge1xuICAgICAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyO1xuICAgICAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zO1xuICAgICAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWU7XG4gICAgICAgIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgICAgICAgaWYgKGlzRnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNjb3BlZElkXG4gICAgaWYgKHNjb3BlSWQpIHtcbiAgICAgICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWQ7XG4gICAgfVxuICAgIGxldCBob29rO1xuICAgIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7XG4gICAgICAgIC8vIHNlcnZlciBidWlsZFxuICAgICAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgICAgICAgIGNvbnRleHQgPVxuICAgICAgICAgICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpOyAvLyBmdW5jdGlvbmFsXG4gICAgICAgICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgICAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfXztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICAgICAgICBpZiAoaW5qZWN0U3R5bGUpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yU1NSKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJlbmNlXG4gICAgICAgICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAgICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICAgICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmplY3RTdHlsZSkge1xuICAgICAgICBob29rID0gaXNTaGFkb3dNb2RlXG4gICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yU2hhZG93KHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGluamVjdFN0eWxlLmNhbGwodGhpcywgY3JlYXRlSW5qZWN0b3IoY29udGV4dCkpO1xuICAgICAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGhvb2spIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyO1xuICAgICAgICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24oaCwgY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGhvb2suY2FsbChjb250ZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGU7XG4gICAgICAgICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKSA6IFtob29rXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdEV4cG9ydDtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBBXG4gKi9cbmNsYXNzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVte2Nzc0NsYXNzZXN9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtzdHJpbmdzfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtudW1iZXJzfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshT2JqZWN0fSAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAvLyB2YWxpZGF0aW9uLlxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0E9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyID0ge30pIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUF9ICovXG4gICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAdGVtcGxhdGUgRlxuICovXG5jbGFzcyBNRENDb21wb25lbnQge1xuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcmV0dXJuIHshTURDQ29tcG9uZW50fVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHdoaWNoIGV4dGVuZCBNRENCYXNlIHNob3VsZCBwcm92aWRlIGFuIGF0dGFjaFRvKCkgbWV0aG9kIHRoYXQgdGFrZXMgYSByb290IGVsZW1lbnQgYW5kXG4gICAgLy8gcmV0dXJucyBhbiBpbnN0YW50aWF0ZWQgY29tcG9uZW50IHdpdGggaXRzIHJvb3Qgc2V0IHRvIHRoYXQgZWxlbWVudC4gQWxzbyBub3RlIHRoYXQgaW4gdGhlIGNhc2VzIG9mXG4gICAgLy8gc3ViY2xhc3NlcywgYW4gZXhwbGljaXQgZm91bmRhdGlvbiBjbGFzcyB3aWxsIG5vdCBoYXZlIHRvIGJlIHBhc3NlZCBpbjsgaXQgd2lsbCBzaW1wbHkgYmUgaW5pdGlhbGl6ZWRcbiAgICAvLyBmcm9tIGdldERlZmF1bHRGb3VuZGF0aW9uKCkuXG4gICAgcmV0dXJuIG5ldyBNRENDb21wb25lbnQocm9vdCwgbmV3IE1EQ0ZvdW5kYXRpb24oKSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcGFyYW0ge0Y9fSBmb3VuZGF0aW9uXG4gICAqIEBwYXJhbSB7Li4uP30gYXJnc1xuICAgKi9cbiAgY29uc3RydWN0b3Iocm9vdCwgZm91bmRhdGlvbiA9IHVuZGVmaW5lZCwgLi4uYXJncykge1xuICAgIC8qKiBAcHJvdGVjdGVkIHshRWxlbWVudH0gKi9cbiAgICB0aGlzLnJvb3RfID0gcm9vdDtcbiAgICB0aGlzLmluaXRpYWxpemUoLi4uYXJncyk7XG4gICAgLy8gTm90ZSB0aGF0IHdlIGluaXRpYWxpemUgZm91bmRhdGlvbiBoZXJlIGFuZCBub3Qgd2l0aGluIHRoZSBjb25zdHJ1Y3RvcidzIGRlZmF1bHQgcGFyYW0gc28gdGhhdFxuICAgIC8vIHRoaXMucm9vdF8gaXMgZGVmaW5lZCBhbmQgY2FuIGJlIHVzZWQgd2l0aGluIHRoZSBmb3VuZGF0aW9uIGNsYXNzLlxuICAgIC8qKiBAcHJvdGVjdGVkIHshRn0gKi9cbiAgICB0aGlzLmZvdW5kYXRpb25fID0gZm91bmRhdGlvbiA9PT0gdW5kZWZpbmVkID8gdGhpcy5nZXREZWZhdWx0Rm91bmRhdGlvbigpIDogZm91bmRhdGlvbjtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmluaXQoKTtcbiAgICB0aGlzLmluaXRpYWxTeW5jV2l0aERPTSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgvKiAuLi5hcmdzICovKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBjYW4gb3ZlcnJpZGUgdGhpcyB0byBkbyBhbnkgYWRkaXRpb25hbCBzZXR1cCB3b3JrIHRoYXQgd291bGQgYmUgY29uc2lkZXJlZCBwYXJ0IG9mIGFcbiAgICAvLyBcImNvbnN0cnVjdG9yXCIuIEVzc2VudGlhbGx5LCBpdCBpcyBhIGhvb2sgaW50byB0aGUgcGFyZW50IGNvbnN0cnVjdG9yIGJlZm9yZSB0aGUgZm91bmRhdGlvbiBpc1xuICAgIC8vIGluaXRpYWxpemVkLiBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgYmVzaWRlcyByb290IGFuZCBmb3VuZGF0aW9uIHdpbGwgYmUgcGFzc2VkIGluIGhlcmUuXG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUZ9IGZvdW5kYXRpb25cbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkIGZvdW5kYXRpb24gY2xhc3MgZm9yIHRoZVxuICAgIC8vIGNvbXBvbmVudC5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSBnZXREZWZhdWx0Rm91bmRhdGlvbiB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkICcgK1xuICAgICAgJ2ZvdW5kYXRpb24gY2xhc3MnKTtcbiAgfVxuXG4gIGluaXRpYWxTeW5jV2l0aERPTSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCBpZiB0aGV5IG5lZWQgdG8gcGVyZm9ybSB3b3JrIHRvIHN5bmNocm9uaXplIHdpdGggYSBob3N0IERPTVxuICAgIC8vIG9iamVjdC4gQW4gZXhhbXBsZSBvZiB0aGlzIHdvdWxkIGJlIGEgZm9ybSBjb250cm9sIHdyYXBwZXIgdGhhdCBuZWVkcyB0byBzeW5jaHJvbml6ZSBpdHMgaW50ZXJuYWwgc3RhdGVcbiAgICAvLyB0byBzb21lIHByb3BlcnR5IG9yIGF0dHJpYnV0ZSBvZiB0aGUgaG9zdCBET00uIFBsZWFzZSBub3RlOiB0aGlzIGlzICpub3QqIHRoZSBwbGFjZSB0byBwZXJmb3JtIERPTVxuICAgIC8vIHJlYWRzL3dyaXRlcyB0aGF0IHdvdWxkIGNhdXNlIGxheW91dCAvIHBhaW50LCBhcyB0aGlzIGlzIGNhbGxlZCBzeW5jaHJvbm91c2x5IGZyb20gd2l0aGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtYXkgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJlbGVhc2UgYW55IHJlc291cmNlcyAvIGRlcmVnaXN0ZXIgYW55IGxpc3RlbmVycyB0aGV5IGhhdmVcbiAgICAvLyBhdHRhY2hlZC4gQW4gZXhhbXBsZSBvZiB0aGlzIG1pZ2h0IGJlIGRlcmVnaXN0ZXJpbmcgYSByZXNpemUgZXZlbnQgZnJvbSB0aGUgd2luZG93IG9iamVjdC5cbiAgICB0aGlzLmZvdW5kYXRpb25fLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIG1ldGhvZCB0byBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudC4gVGhpcyBpcyBtb3N0IHVzZWZ1bCB3aGVuXG4gICAqIGxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGxpc3RlbihldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIHJlbW92ZSBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogdW5saXN0ZW5pbmcgZm9yIGN1c3RvbSBldmVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bmxpc3RlbihldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGEgY3Jvc3MtYnJvd3Nlci1jb21wYXRpYmxlIGN1c3RvbSBldmVudCBmcm9tIHRoZSBjb21wb25lbnQgcm9vdCBvZiB0aGUgZ2l2ZW4gdHlwZSxcbiAgICogd2l0aCB0aGUgZ2l2ZW4gZGF0YS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshT2JqZWN0fSBldnREYXRhXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IHNob3VsZEJ1YmJsZVxuICAgKi9cbiAgZW1pdChldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICAgIGxldCBldnQ7XG4gICAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgICBidWJibGVzOiBzaG91bGRCdWJibGUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpO1xuICAgIH1cblxuICAgIHRoaXMucm9vdF8uZGlzcGF0Y2hFdmVudChldnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0NvbXBvbmVudDtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgUmlwcGxlLiBQcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIG1hbmFnaW5nXG4gKiAtIGNsYXNzZXNcbiAqIC0gZG9tXG4gKiAtIENTUyB2YXJpYWJsZXNcbiAqIC0gcG9zaXRpb25cbiAqIC0gZGltZW5zaW9uc1xuICogLSBzY3JvbGwgcG9zaXRpb25cbiAqIC0gZXZlbnQgaGFuZGxlcnNcbiAqIC0gdW5ib3VuZGVkLCBhY3RpdmUgYW5kIGRpc2FibGVkIHN0YXRlc1xuICpcbiAqIEFkZGl0aW9uYWxseSwgcHJvdmlkZXMgdHlwZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGFkYXB0ZXIgdG8gdGhlIENsb3N1cmVcbiAqIGNvbXBpbGVyLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGFkYXB0ZXIgZm9yIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZSB0byBkZWxlZ2F0ZSB1cGRhdGVzIHRvXG4gKiB0aGUgY29tcG9uZW50IGluIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZS4gU2VlIGFyY2hpdGVjdHVyZSBkb2N1bWVudGF0aW9uXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9jb2RlL2FyY2hpdGVjdHVyZS5tZFxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDUmlwcGxlQWRhcHRlciB7XG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBicm93c2VyU3VwcG9ydHNDc3NWYXJzKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNVbmJvdW5kZWQoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1N1cmZhY2VBY3RpdmUoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1N1cmZhY2VEaXNhYmxlZCgpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHshRXZlbnRUYXJnZXR9IHRhcmdldCAqL1xuICBjb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhck5hbWVcbiAgICogQHBhcmFtIHs/bnVtYmVyfHN0cmluZ30gdmFsdWVcbiAgICovXG4gIHVwZGF0ZUNzc1ZhcmlhYmxlKHZhck5hbWUsIHZhbHVlKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHshQ2xpZW50UmVjdH0gKi9cbiAgY29tcHV0ZUJvdW5kaW5nUmVjdCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19ICovXG4gIGdldFdpbmRvd1BhZ2VPZmZzZXQoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIC8vIFJpcHBsZSBpcyBhIHNwZWNpYWwgY2FzZSB3aGVyZSB0aGUgXCJyb290XCIgY29tcG9uZW50IGlzIHJlYWxseSBhIFwibWl4aW5cIiBvZiBzb3J0cyxcbiAgLy8gZ2l2ZW4gdGhhdCBpdCdzIGFuICd1cGdyYWRlJyB0byBhbiBleGlzdGluZyBjb21wb25lbnQuIFRoYXQgYmVpbmcgc2FpZCBpdCBpcyB0aGUgcm9vdFxuICAvLyBDU1MgY2xhc3MgdGhhdCBhbGwgb3RoZXIgQ1NTIGNsYXNzZXMgZGVyaXZlIGZyb20uXG4gIFJPT1Q6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkJyxcbiAgVU5CT1VOREVEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkJyxcbiAgQkdfRk9DVVNFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZCcsXG4gIEZHX0FDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb24nLFxuICBGR19ERUFDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbicsXG59O1xuXG5jb25zdCBzdHJpbmdzID0ge1xuICBWQVJfTEVGVDogJy0tbWRjLXJpcHBsZS1sZWZ0JyxcbiAgVkFSX1RPUDogJy0tbWRjLXJpcHBsZS10b3AnLFxuICBWQVJfRkdfU0laRTogJy0tbWRjLXJpcHBsZS1mZy1zaXplJyxcbiAgVkFSX0ZHX1NDQUxFOiAnLS1tZGMtcmlwcGxlLWZnLXNjYWxlJyxcbiAgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQnLFxuICBWQVJfRkdfVFJBTlNMQVRFX0VORDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kJyxcbn07XG5cbmNvbnN0IG51bWJlcnMgPSB7XG4gIFBBRERJTkc6IDEwLFxuICBJTklUSUFMX09SSUdJTl9TQ0FMRTogMC42LFxuICBERUFDVElWQVRJT05fVElNRU9VVF9NUzogMjI1LCAvLyBDb3JyZXNwb25kcyB0byAkbWRjLXJpcHBsZS10cmFuc2xhdGUtZHVyYXRpb24gKGkuZS4gYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIEZHX0RFQUNUSVZBVElPTl9NUzogMTUwLCAvLyBDb3JyZXNwb25kcyB0byAkbWRjLXJpcHBsZS1mYWRlLW91dC1kdXJhdGlvbiAoaS5lLiBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIGR1cmF0aW9uKVxuICBUQVBfREVMQVlfTVM6IDMwMCwgLy8gRGVsYXkgYmV0d2VlbiB0b3VjaCBhbmQgc2ltdWxhdGVkIG1vdXNlIGV2ZW50cyBvbiB0b3VjaCBkZXZpY2VzXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIHN1cHBvcnRzQ3NzVmFyaWFibGVzIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBDU1MgY3VzdG9tIHZhcmlhYmxlIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGFwcGx5UGFzc2l2ZSB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3QgcGFzc2l2ZSBldmVudCBsaXN0ZW5lciBzdXBwb3J0LlxuICogQHByaXZhdGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5sZXQgc3VwcG9ydHNQYXNzaXZlXztcblxuLyoqXG4gKiBAcGFyYW0geyFXaW5kb3d9IHdpbmRvd09ialxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopIHtcbiAgLy8gRGV0ZWN0IHZlcnNpb25zIG9mIEVkZ2Ugd2l0aCBidWdneSB2YXIoKSBzdXBwb3J0XG4gIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTE0OTU0NDgvXG4gIGNvbnN0IGRvY3VtZW50ID0gd2luZG93T2JqLmRvY3VtZW50O1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vZGUuY2xhc3NOYW1lID0gJ21kYy1yaXBwbGUtc3VyZmFjZS0tdGVzdC1lZGdlLXZhci1idWcnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gIC8vIFRoZSBidWcgZXhpc3RzIGlmIDo6YmVmb3JlIHN0eWxlIGVuZHMgdXAgcHJvcGFnYXRpbmcgdG8gdGhlIHBhcmVudCBlbGVtZW50LlxuICAvLyBBZGRpdGlvbmFsbHksIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBudWxsIGluIGlmcmFtZXMgd2l0aCBkaXNwbGF5OiBcIm5vbmVcIiBpbiBGaXJlZm94LFxuICAvLyBidXQgRmlyZWZveCBpcyBrbm93biB0byBzdXBwb3J0IENTUyBjdXN0b20gcHJvcGVydGllcyBjb3JyZWN0bHkuXG4gIC8vIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3dPYmouZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgY29uc3QgaGFzUHNldWRvVmFyQnVnID0gY29tcHV0ZWRTdHlsZSAhPT0gbnVsbCAmJiBjb21wdXRlZFN0eWxlLmJvcmRlclRvcFN0eWxlID09PSAnc29saWQnO1xuICBub2RlLnJlbW92ZSgpO1xuICByZXR1cm4gaGFzUHNldWRvVmFyQnVnO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvd09iaiwgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgbGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICBpZiAodHlwZW9mIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9PT0gJ2Jvb2xlYW4nICYmICFmb3JjZVJlZnJlc2gpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG4gIH1cblxuICBjb25zdCBzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCA9IHdpbmRvd09iai5DU1MgJiYgdHlwZW9mIHdpbmRvd09iai5DU1Muc3VwcG9ydHMgPT09ICdmdW5jdGlvbic7XG4gIGlmICghc3VwcG9ydHNGdW5jdGlvblByZXNlbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzID0gd2luZG93T2JqLkNTUy5zdXBwb3J0cygnLS1jc3MtdmFycycsICd5ZXMnKTtcbiAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gIC8vIFNlZTogUkVBRE1FIHNlY3Rpb24gb24gU2FmYXJpXG4gIGNvbnN0IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyA9IChcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCcoLS1jc3MtdmFyczogeWVzKScpICYmXG4gICAgd2luZG93T2JqLkNTUy5zdXBwb3J0cygnY29sb3InLCAnIzAwMDAwMDAwJylcbiAgKTtcblxuICBpZiAoZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyB8fCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9ICFkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaik7XG4gIH0gZWxzZSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICghZm9yY2VSZWZyZXNoKSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXNfID0gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG4gIH1cbiAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xufVxuXG4vL1xuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmQgaWYgc28sIHVzZSB0aGVtLlxuICogQHBhcmFtIHshV2luZG93PX0gZ2xvYmFsT2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58IUV2ZW50TGlzdGVuZXJPcHRpb25zfVxuICovXG5mdW5jdGlvbiBhcHBseVBhc3NpdmUoZ2xvYmFsT2JqID0gd2luZG93LCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBpZiAoc3VwcG9ydHNQYXNzaXZlXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgIGxldCBpc1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIHtnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgaXNTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gaXNTdXBwb3J0ZWQ7XG4gICAgICB9fSk7XG4gICAgfSBjYXRjaCAoZSkgeyB9XG5cbiAgICBzdXBwb3J0c1Bhc3NpdmVfID0gaXNTdXBwb3J0ZWQ7XG4gIH1cblxuICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlX1xuICAgID8gLyoqIEB0eXBlIHshRXZlbnRMaXN0ZW5lck9wdGlvbnN9ICovICh7cGFzc2l2ZTogdHJ1ZX0pXG4gICAgOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IEhUTUxFbGVtZW50UHJvdG90eXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudFByb3RvdHlwZSkge1xuICAvKipcbiAgICogT3JkZXIgaXMgaW1wb3J0YW50IGJlY2F1c2Ugd2UgcmV0dXJuIHRoZSBmaXJzdCBleGlzdGluZyBtZXRob2Qgd2UgZmluZC5cbiAgICogRG8gbm90IGNoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIGl0ZW1zIGluIHRoZSBiZWxvdyBhcnJheS5cbiAgICovXG4gIGNvbnN0IG1hdGNoZXNNZXRob2RzID0gWydtYXRjaGVzJywgJ3dlYmtpdE1hdGNoZXNTZWxlY3RvcicsICdtc01hdGNoZXNTZWxlY3RvciddO1xuICBsZXQgbWV0aG9kID0gJ21hdGNoZXMnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZXNNZXRob2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbWF0Y2hlc01ldGhvZCA9IG1hdGNoZXNNZXRob2RzW2ldO1xuICAgIGlmIChtYXRjaGVzTWV0aG9kIGluIEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gICAgICBtZXRob2QgPSBtYXRjaGVzTWV0aG9kO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ldGhvZDtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFFdmVudH0gZXZcbiAqIEBwYXJhbSB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gcGFnZU9mZnNldFxuICogQHBhcmFtIHshQ2xpZW50UmVjdH0gY2xpZW50UmVjdFxuICogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX1cbiAqL1xuZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGV2LCBwYWdlT2Zmc2V0LCBjbGllbnRSZWN0KSB7XG4gIGNvbnN0IHt4LCB5fSA9IHBhZ2VPZmZzZXQ7XG4gIGNvbnN0IGRvY3VtZW50WCA9IHggKyBjbGllbnRSZWN0LmxlZnQ7XG4gIGNvbnN0IGRvY3VtZW50WSA9IHkgKyBjbGllbnRSZWN0LnRvcDtcblxuICBsZXQgbm9ybWFsaXplZFg7XG4gIGxldCBub3JtYWxpemVkWTtcbiAgLy8gRGV0ZXJtaW5lIHRvdWNoIHBvaW50IHJlbGF0aXZlIHRvIHRoZSByaXBwbGUgY29udGFpbmVyLlxuICBpZiAoZXYudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgZXYgPSAvKiogQHR5cGUgeyFUb3VjaEV2ZW50fSAqLyAoZXYpO1xuICAgIG5vcm1hbGl6ZWRYID0gZXYuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBkb2N1bWVudFg7XG4gICAgbm9ybWFsaXplZFkgPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGRvY3VtZW50WTtcbiAgfSBlbHNlIHtcbiAgICBldiA9IC8qKiBAdHlwZSB7IU1vdXNlRXZlbnR9ICovIChldik7XG4gICAgbm9ybWFsaXplZFggPSBldi5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9XG5cbiAgcmV0dXJuIHt4OiBub3JtYWxpemVkWCwgeTogbm9ybWFsaXplZFl9O1xufVxuXG5leHBvcnQge3N1cHBvcnRzQ3NzVmFyaWFibGVzLCBhcHBseVBhc3NpdmUsIGdldE1hdGNoZXNQcm9wZXJ0eSwgZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENSaXBwbGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7Z2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGlzQWN0aXZhdGVkOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgYWN0aXZhdGlvbkV2ZW50OiAoIUV2ZW50fHVuZGVmaW5lZCksXG4gKiAgIGlzUHJvZ3JhbW1hdGljOiAoYm9vbGVhbnx1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgQWN0aXZhdGlvblN0YXRlVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBkZWFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGZvY3VzOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGJsdXI6IChzdHJpbmd8dW5kZWZpbmVkKVxuICogfX1cbiAqL1xubGV0IExpc3RlbmVySW5mb1R5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgYWN0aXZhdGU6IGZ1bmN0aW9uKCFFdmVudCksXG4gKiAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uKCFFdmVudD0pLFxuICogICBmb2N1czogZnVuY3Rpb24oKSxcbiAqICAgYmx1cjogZnVuY3Rpb24oKVxuICogfX1cbiAqL1xubGV0IExpc3RlbmVyc1R5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgeDogbnVtYmVyLFxuICogICB5OiBudW1iZXJcbiAqIH19XG4gKi9cbmxldCBQb2ludFR5cGU7XG5cbi8vIEFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gdGhlIHJvb3QgZWxlbWVudCBvZiBlYWNoIGluc3RhbmNlIGZvciBhY3RpdmF0aW9uXG5jb25zdCBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gWyd0b3VjaHN0YXJ0JywgJ3BvaW50ZXJkb3duJywgJ21vdXNlZG93bicsICdrZXlkb3duJ107XG5cbi8vIERlYWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiBkb2N1bWVudEVsZW1lbnQgd2hlbiBhIHBvaW50ZXItcmVsYXRlZCBkb3duIGV2ZW50IG9jY3Vyc1xuY29uc3QgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoZW5kJywgJ3BvaW50ZXJ1cCcsICdtb3VzZXVwJywgJ2NvbnRleHRtZW51J107XG5cbi8vIFRyYWNrcyBhY3RpdmF0aW9ucyB0aGF0IGhhdmUgb2NjdXJyZWQgb24gdGhlIGN1cnJlbnQgZnJhbWUsIHRvIGF2b2lkIHNpbXVsdGFuZW91cyBuZXN0ZWQgYWN0aXZhdGlvbnNcbi8qKiBAdHlwZSB7IUFycmF5PCFFdmVudFRhcmdldD59ICovXG5sZXQgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENSaXBwbGVBZGFwdGVyPn1cbiAqL1xuY2xhc3MgTURDUmlwcGxlRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiAvKiBib29sZWFuIC0gY2FjaGVkICovIHt9LFxuICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGFkZENsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiAoLyogdGFyZ2V0OiAhRXZlbnRUYXJnZXQgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKC8qIHZhck5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiAvKiBDbGllbnRSZWN0ICovIHt9LFxuICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4gLyoge3g6IG51bWJlciwgeTogbnVtYmVyfSAqLyB7fSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDUmlwcGxlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHshQ2xpZW50UmVjdH0gKi9cbiAgICB0aGlzLmZyYW1lXyA9IC8qKiBAdHlwZSB7IUNsaWVudFJlY3R9ICovICh7d2lkdGg6IDAsIGhlaWdodDogMH0pO1xuXG4gICAgLyoqIEBwcml2YXRlIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmluaXRpYWxTaXplXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLm1heFJhZGl1c18gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQpfSAqL1xuICAgIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyA9IChlKSA9PiB0aGlzLmFjdGl2YXRlXyhlKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmRlYWN0aXZhdGVfKCk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudD0pfSAqL1xuICAgIHRoaXMuZm9jdXNIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlRm9jdXMoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5ibHVySGFuZGxlcl8gPSAoKSA9PiB0aGlzLmhhbmRsZUJsdXIoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMucmVzaXplSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmxheW91dCgpO1xuXG4gICAgLyoqIEBwcml2YXRlIHt7bGVmdDogbnVtYmVyLCB0b3A6bnVtYmVyfX0gKi9cbiAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgIH07XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmZnU2NhbGVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IHRydWU7XG4gICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgIH07XG5cbiAgICAvKiogQHByaXZhdGUgeyFFdmVudHx1bmRlZmluZWR9ICovXG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gIH1cblxuICAvKipcbiAgICogV2UgY29tcHV0ZSB0aGlzIHByb3BlcnR5IHNvIHRoYXQgd2UgYXJlIG5vdCBxdWVyeWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2xpZW50XG4gICAqIHVudGlsIHRoZSBwb2ludCBpbiB0aW1lIHdoZXJlIHRoZSBmb3VuZGF0aW9uIHJlcXVlc3RzIGl0LiBUaGlzIHByZXZlbnRzIHNjZW5hcmlvcyB3aGVyZVxuICAgKiBjbGllbnQtc2lkZSBmZWF0dXJlLWRldGVjdGlvbiBtYXkgaGFwcGVuIHRvbyBlYXJseSwgc3VjaCBhcyB3aGVuIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXJcbiAgICogYW5kIHRoZW4gaW5pdGlhbGl6ZWQgYXQgbW91bnQgdGltZSBvbiB0aGUgY2xpZW50LlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFBY3RpdmF0aW9uU3RhdGVUeXBlfVxuICAgKi9cbiAgZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZhdGVkOiBmYWxzZSxcbiAgICAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiBmYWxzZSxcbiAgICAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogZmFsc2UsXG4gICAgICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogZmFsc2UsXG4gICAgICBhY3RpdmF0aW9uRXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgIGlzUHJvZ3JhbW1hdGljOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBpbml0KCkge1xuICAgIGNvbnN0IHN1cHBvcnRzUHJlc3NSaXBwbGUgPSB0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKTtcblxuICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoUk9PVCk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZXMgbmVlZCBsYXlvdXQgbG9naWMgYXBwbGllZCBpbW1lZGlhdGVseSB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGJvdGggc2hhZGUgYW5kIHJpcHBsZVxuICAgICAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmF0aW9uVGltZXJfKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1JPT1QsIFVOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFJPT1QpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIHRoaXMucmVtb3ZlQ3NzVmFyc18oKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKTtcbiAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN1cHBvcnRzUHJlc3NSaXBwbGUgUGFzc2VkIGZyb20gaW5pdCB0byBzYXZlIGEgcmVkdW5kYW50IGZ1bmN0aW9uIGNhbGxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnR9IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGUpIHtcbiAgICBpZiAoZS50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKSB7XG4gICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9KTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJlbW92ZUNzc1ZhcnNfKCkge1xuICAgIGNvbnN0IHtzdHJpbmdzfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4gICAgT2JqZWN0LmtleXMoc3RyaW5ncykuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgaWYgKGsuaW5kZXhPZignVkFSXycpID09PSAwKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoc3RyaW5nc1trXSwgbnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnQ9fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhY3RpdmF0ZV8oZSkge1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZURpc2FibGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEF2b2lkIHJlYWN0aW5nIHRvIGZvbGxvdy1vbiBldmVudHMgZmlyZWQgYnkgdG91Y2ggZGV2aWNlIGFmdGVyIGFuIGFscmVhZHktcHJvY2Vzc2VkIHVzZXIgaW50ZXJhY3Rpb25cbiAgICBjb25zdCBwcmV2aW91c0FjdGl2YXRpb25FdmVudCA9IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICAgIGNvbnN0IGlzU2FtZUludGVyYWN0aW9uID0gcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgJiYgZSAhPT0gdW5kZWZpbmVkICYmIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50LnR5cGUgIT09IGUudHlwZTtcbiAgICBpZiAoaXNTYW1lSW50ZXJhY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQgPSB0cnVlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA9IGUgPT09IHVuZGVmaW5lZDtcbiAgICBhY3RpdmF0aW9uU3RhdGUuYWN0aXZhdGlvbkV2ZW50ID0gZTtcbiAgICBhY3RpdmF0aW9uU3RhdGUud2FzQWN0aXZhdGVkQnlQb2ludGVyID0gYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID8gZmFsc2UgOiBlICE9PSB1bmRlZmluZWQgJiYgKFxuICAgICAgZS50eXBlID09PSAnbW91c2Vkb3duJyB8fCBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICdwb2ludGVyZG93bidcbiAgICApO1xuXG4gICAgY29uc3QgaGFzQWN0aXZhdGVkQ2hpbGQgPSBlICE9PSB1bmRlZmluZWQgJiYgYWN0aXZhdGVkVGFyZ2V0cy5sZW5ndGggPiAwICYmIGFjdGl2YXRlZFRhcmdldHMuc29tZShcbiAgICAgICh0YXJnZXQpID0+IHRoaXMuYWRhcHRlcl8uY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpKTtcbiAgICBpZiAoaGFzQWN0aXZhdGVkQ2hpbGQpIHtcbiAgICAgIC8vIEltbWVkaWF0ZWx5IHJlc2V0IGFjdGl2YXRpb24gc3RhdGUsIHdoaWxlIHByZXNlcnZpbmcgbG9naWMgdGhhdCBwcmV2ZW50cyB0b3VjaCBmb2xsb3ctb24gZXZlbnRzXG4gICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFjdGl2YXRlZFRhcmdldHMucHVzaCgvKiogQHR5cGUgeyFFdmVudFRhcmdldH0gKi8gKGUudGFyZ2V0KSk7XG4gICAgICB0aGlzLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGUpO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSk7XG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgLy8gUmVzZXQgYXJyYXkgb24gbmV4dCBmcmFtZSBhZnRlciB0aGUgY3VycmVudCBldmVudCBoYXMgaGFkIGEgY2hhbmNlIHRvIGJ1YmJsZSB0byBwcmV2ZW50IGFuY2VzdG9yIHJpcHBsZXNcbiAgICAgIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcblxuICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgJiYgZSAhPT0gdW5kZWZpbmVkICYmIChlLmtleSA9PT0gJyAnIHx8IGUua2V5Q29kZSA9PT0gMzIpKSB7XG4gICAgICAgIC8vIElmIHNwYWNlIHdhcyBwcmVzc2VkLCB0cnkgYWdhaW4gd2l0aGluIGFuIHJBRiBjYWxsIHRvIGRldGVjdCA6YWN0aXZlLCBiZWNhdXNlIGRpZmZlcmVudCBVQXMgcmVwb3J0XG4gICAgICAgIC8vIGFjdGl2ZSBzdGF0ZXMgaW5jb25zaXN0ZW50bHkgd2hlbiB0aGV5J3JlIGNhbGxlZCB3aXRoaW4gZXZlbnQgaGFuZGxpbmcgY29kZTpcbiAgICAgICAgLy8gLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02MzU5NzFcbiAgICAgICAgLy8gLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjkzNzQxXG4gICAgICAgIC8vIFdlIHRyeSBmaXJzdCBvdXRzaWRlIHJBRiB0byBzdXBwb3J0IEVkZ2UsIHdoaWNoIGRvZXMgbm90IGV4aGliaXQgdGhpcyBwcm9ibGVtLCBidXQgd2lsbCBjcmFzaCBpZiBhIENTU1xuICAgICAgICAvLyB2YXJpYWJsZSBpcyBzZXQgd2l0aGluIGEgckFGIGNhbGxiYWNrIGZvciBhIHN1Ym1pdCBidXR0b24gaW50ZXJhY3Rpb24gKCMyMjQxKS5cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgLy8gUmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSBpbW1lZGlhdGVseSBpZiBlbGVtZW50IHdhcyBub3QgbWFkZSBhY3RpdmUuXG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpIHtcbiAgICByZXR1cm4gKGUgIT09IHVuZGVmaW5lZCAmJiBlLnR5cGUgPT09ICdrZXlkb3duJykgPyB0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZUFjdGl2ZSgpIDogdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGV2ZW50IE9wdGlvbmFsIGV2ZW50IGNvbnRhaW5pbmcgcG9zaXRpb24gaW5mb3JtYXRpb24uXG4gICAqL1xuICBhY3RpdmF0ZShldmVudCkge1xuICAgIHRoaXMuYWN0aXZhdGVfKGV2ZW50KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBhbmltYXRlQWN0aXZhdGlvbl8oKSB7XG4gICAgY29uc3Qge1ZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIFZBUl9GR19UUkFOU0xBVEVfRU5EfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcbiAgICBjb25zdCB7RkdfREVBQ1RJVkFUSU9OLCBGR19BQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBjb25zdCB7REVBQ1RJVkFUSU9OX1RJTUVPVVRfTVN9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzO1xuXG4gICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcblxuICAgIGxldCB0cmFuc2xhdGVTdGFydCA9ICcnO1xuICAgIGxldCB0cmFuc2xhdGVFbmQgPSAnJztcblxuICAgIGlmICghdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICBjb25zdCB7c3RhcnRQb2ludCwgZW5kUG9pbnR9ID0gdGhpcy5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCk7XG4gICAgICB0cmFuc2xhdGVTdGFydCA9IGAke3N0YXJ0UG9pbnQueH1weCwgJHtzdGFydFBvaW50Lnl9cHhgO1xuICAgICAgdHJhbnNsYXRlRW5kID0gYCR7ZW5kUG9pbnQueH1weCwgJHtlbmRQb2ludC55fXB4YDtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIHRyYW5zbGF0ZVN0YXJ0KTtcbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfRU5ELCB0cmFuc2xhdGVFbmQpO1xuICAgIC8vIENhbmNlbCBhbnkgb25nb2luZyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBhbmltYXRpb25zXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcblxuICAgIC8vIEZvcmNlIGxheW91dCBpbiBvcmRlciB0byByZS10cmlnZ2VyIHRoZSBhbmltYXRpb24uXG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfKCksIERFQUNUSVZBVElPTl9USU1FT1VUX01TKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJuIHt7c3RhcnRQb2ludDogUG9pbnRUeXBlLCBlbmRQb2ludDogUG9pbnRUeXBlfX1cbiAgICovXG4gIGdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKSB7XG4gICAgY29uc3Qge2FjdGl2YXRpb25FdmVudCwgd2FzQWN0aXZhdGVkQnlQb2ludGVyfSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcblxuICAgIGxldCBzdGFydFBvaW50O1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIpIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoXG4gICAgICAgIC8qKiBAdHlwZSB7IUV2ZW50fSAqLyAoYWN0aXZhdGlvbkV2ZW50KSxcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5nZXRXaW5kb3dQYWdlT2Zmc2V0KCksIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICB4OiB0aGlzLmZyYW1lXy53aWR0aCAvIDIsXG4gICAgICAgIHk6IHRoaXMuZnJhbWVfLmhlaWdodCAvIDIsXG4gICAgICB9O1xuICAgIH1cbiAgICAvLyBDZW50ZXIgdGhlIGVsZW1lbnQgYXJvdW5kIHRoZSBzdGFydCBwb2ludC5cbiAgICBzdGFydFBvaW50ID0ge1xuICAgICAgeDogc3RhcnRQb2ludC54IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiBzdGFydFBvaW50LnkgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgY29uc3QgZW5kUG9pbnQgPSB7XG4gICAgICB4OiAodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgeTogKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgfTtcblxuICAgIHJldHVybiB7c3RhcnRQb2ludCwgZW5kUG9pbnR9O1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpIHtcbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYm90aCB3aGVuIGEgcG9pbnRpbmcgZGV2aWNlIGlzIHJlbGVhc2VkLCBhbmQgd2hlbiB0aGUgYWN0aXZhdGlvbiBhbmltYXRpb24gZW5kcy5cbiAgICAvLyBUaGUgZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBzaG91bGQgb25seSBydW4gYWZ0ZXIgYm90aCBvZiB0aG9zZSBvY2N1ci5cbiAgICBjb25zdCB7RkdfREVBQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBjb25zdCB7aGFzRGVhY3RpdmF0aW9uVVhSdW4sIGlzQWN0aXZhdGVkfSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBjb25zdCBhY3RpdmF0aW9uSGFzRW5kZWQgPSBoYXNEZWFjdGl2YXRpb25VWFJ1biB8fCAhaXNBY3RpdmF0ZWQ7XG5cbiAgICBpZiAoYWN0aXZhdGlvbkhhc0VuZGVkICYmIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXykge1xuICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIH0sIG51bWJlcnMuRkdfREVBQ1RJVkFUSU9OX01TKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCkge1xuICAgIGNvbnN0IHtGR19BQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICB9XG5cbiAgcmVzZXRBY3RpdmF0aW9uU3RhdGVfKCkge1xuICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmFjdGl2YXRpb25FdmVudDtcbiAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgLy8gVG91Y2ggZGV2aWNlcyBtYXkgZmlyZSBhZGRpdGlvbmFsIGV2ZW50cyBmb3IgdGhlIHNhbWUgaW50ZXJhY3Rpb24gd2l0aGluIGEgc2hvcnQgdGltZS5cbiAgICAvLyBTdG9yZSB0aGUgcHJldmlvdXMgZXZlbnQgdW50aWwgaXQncyBzYWZlIHRvIGFzc3VtZSB0aGF0IHN1YnNlcXVlbnQgZXZlbnRzIGFyZSBmb3IgbmV3IGludGVyYWN0aW9ucy5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdW5kZWZpbmVkLCBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuVEFQX0RFTEFZX01TKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVhY3RpdmF0ZV8oKSB7XG4gICAgY29uc3QgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBzY2VuYXJpb3Mgc3VjaCBhcyB3aGVuIHlvdSBoYXZlIGEga2V5dXAgZXZlbnQgdGhhdCBibHVycyB0aGUgZWxlbWVudC5cbiAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlID0gLyoqIEB0eXBlIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gKi8gKE9iamVjdC5hc3NpZ24oe30sIGFjdGl2YXRpb25TdGF0ZSkpO1xuXG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYykge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpKTtcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmhhc0RlYWN0aXZhdGlvblVYUnVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7XG4gICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZGVhY3RpdmF0ZV8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFBY3RpdmF0aW9uU3RhdGVUeXBlfSBvcHRpb25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhbmltYXRlRGVhY3RpdmF0aW9uXyh7d2FzQWN0aXZhdGVkQnlQb2ludGVyLCB3YXNFbGVtZW50TWFkZUFjdGl2ZX0pIHtcbiAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyIHx8IHdhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgIH1cbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICB9XG4gICAgdGhpcy5sYXlvdXRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBsYXlvdXRJbnRlcm5hbF8oKSB7XG4gICAgdGhpcy5mcmFtZV8gPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICBjb25zdCBtYXhEaW0gPSBNYXRoLm1heCh0aGlzLmZyYW1lXy5oZWlnaHQsIHRoaXMuZnJhbWVfLndpZHRoKTtcblxuICAgIC8vIFN1cmZhY2UgZGlhbWV0ZXIgaXMgdHJlYXRlZCBkaWZmZXJlbnRseSBmb3IgdW5ib3VuZGVkIHZzLiBib3VuZGVkIHJpcHBsZXMuXG4gICAgLy8gVW5ib3VuZGVkIHJpcHBsZSBkaWFtZXRlciBpcyBjYWxjdWxhdGVkIHNtYWxsZXIgc2luY2UgdGhlIHN1cmZhY2UgaXMgZXhwZWN0ZWQgdG8gYWxyZWFkeSBiZSBwYWRkZWQgYXBwcm9wcmlhdGVseVxuICAgIC8vIHRvIGV4dGVuZCB0aGUgaGl0Ym94LCBhbmQgdGhlIHJpcHBsZSBpcyBleHBlY3RlZCB0byBtZWV0IHRoZSBlZGdlcyBvZiB0aGUgcGFkZGVkIGhpdGJveCAod2hpY2ggaXMgdHlwaWNhbGx5XG4gICAgLy8gc3F1YXJlKS4gQm91bmRlZCByaXBwbGVzLCBvbiB0aGUgb3RoZXIgaGFuZCwgYXJlIGZ1bGx5IGV4cGVjdGVkIHRvIGV4cGFuZCBiZXlvbmQgdGhlIHN1cmZhY2UncyBsb25nZXN0IGRpYW1ldGVyXG4gICAgLy8gKGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGRpYWdvbmFsIHBsdXMgYSBjb25zdGFudCBwYWRkaW5nKSwgYW5kIGFyZSBjbGlwcGVkIGF0IHRoZSBzdXJmYWNlJ3MgYm9yZGVyIHZpYVxuICAgIC8vIGBvdmVyZmxvdzogaGlkZGVuYC5cbiAgICBjb25zdCBnZXRCb3VuZGVkUmFkaXVzID0gKCkgPT4ge1xuICAgICAgY29uc3QgaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdyh0aGlzLmZyYW1lXy53aWR0aCwgMikgKyBNYXRoLnBvdyh0aGlzLmZyYW1lXy5oZWlnaHQsIDIpKTtcbiAgICAgIHJldHVybiBoeXBvdGVudXNlICsgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlBBRERJTkc7XG4gICAgfTtcblxuICAgIHRoaXMubWF4UmFkaXVzXyA9IHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSA/IG1heERpbSA6IGdldEJvdW5kZWRSYWRpdXMoKTtcblxuICAgIC8vIFJpcHBsZSBpcyBzaXplZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiBvZiB0aGUgc3VyZmFjZSwgdGhlbiBzY2FsZXMgdXAgdXNpbmcgYSBDU1Mgc2NhbGUgdHJhbnNmb3JtXG4gICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBNYXRoLmZsb29yKG1heERpbSAqIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5JTklUSUFMX09SSUdJTl9TQ0FMRSk7XG4gICAgdGhpcy5mZ1NjYWxlXyA9IHRoaXMubWF4UmFkaXVzXyAvIHRoaXMuaW5pdGlhbFNpemVfO1xuXG4gICAgdGhpcy51cGRhdGVMYXlvdXRDc3NWYXJzXygpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHVwZGF0ZUxheW91dENzc1ZhcnNfKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIFZBUl9GR19TSVpFLCBWQVJfTEVGVCwgVkFSX1RPUCwgVkFSX0ZHX1NDQUxFLFxuICAgIH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TSVpFLCBgJHt0aGlzLmluaXRpYWxTaXplX31weGApO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NDQUxFLCB0aGlzLmZnU2NhbGVfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgICAgbGVmdDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0xFRlQsIGAke3RoaXMudW5ib3VuZGVkQ29vcmRzXy5sZWZ0fXB4YCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9UT1AsIGAke3RoaXMudW5ib3VuZGVkQ29vcmRzXy50b3B9cHhgKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0VW5ib3VuZGVkKHVuYm91bmRlZCkge1xuICAgIGNvbnN0IHtVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGlmICh1bmJvdW5kZWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZvY3VzKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG5cbiAgaGFuZGxlQmx1cigpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCBNRENSaXBwbGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDUmlwcGxlRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEBleHRlbmRzIE1EQ0NvbXBvbmVudDwhTURDUmlwcGxlRm91bmRhdGlvbj5cbiAqL1xuY2xhc3MgTURDUmlwcGxlIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqIEBwYXJhbSB7Li4uP30gYXJncyAqL1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMudW5ib3VuZGVkXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7e2lzVW5ib3VuZGVkOiAoYm9vbGVhbnx1bmRlZmluZWQpfT19IG9wdGlvbnNcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZX1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290LCB7aXNVbmJvdW5kZWQgPSB1bmRlZmluZWR9ID0ge30pIHtcbiAgICBjb25zdCByaXBwbGUgPSBuZXcgTURDUmlwcGxlKHJvb3QpO1xuICAgIC8vIE9ubHkgb3ZlcnJpZGUgdW5ib3VuZGVkIGJlaGF2aW9yIGlmIG9wdGlvbiBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxuICAgIGlmIChpc1VuYm91bmRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByaXBwbGUudW5ib3VuZGVkID0gLyoqIEB0eXBlIHtib29sZWFufSAqLyAoaXNVbmJvdW5kZWQpO1xuICAgIH1cbiAgICByZXR1cm4gcmlwcGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IVJpcHBsZUNhcGFibGVTdXJmYWNlfSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVBZGFwdGVyKGluc3RhbmNlKSB7XG4gICAgY29uc3QgTUFUQ0hFUyA9IHV0aWwuZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4gdXRpbC5zdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpLFxuICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IGluc3RhbmNlLnVuYm91bmRlZCxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gaW5zdGFuY2Uucm9vdF9bTUFUQ0hFU10oJzphY3RpdmUnKSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiBpbnN0YW5jZS5kaXNhYmxlZCxcbiAgICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgY29udGFpbnNFdmVudFRhcmdldDogKHRhcmdldCkgPT4gaW5zdGFuY2Uucm9vdF8uY29udGFpbnModGFyZ2V0KSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgaW5zdGFuY2Uucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IChoYW5kbGVyKSA9PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IGluc3RhbmNlLnJvb3RfLnN0eWxlLnNldFByb3BlcnR5KHZhck5hbWUsIHZhbHVlKSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IGluc3RhbmNlLnJvb3RfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4gKHt4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldH0pLFxuICAgIH07XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgZ2V0IHVuYm91bmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdW5ib3VuZGVkICovXG4gIHNldCB1bmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgdGhpcy51bmJvdW5kZWRfID0gQm9vbGVhbih1bmJvdW5kZWQpO1xuICAgIHRoaXMuc2V0VW5ib3VuZGVkXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3N1cmUgQ29tcGlsZXIgdGhyb3dzIGFuIGFjY2VzcyBjb250cm9sIGVycm9yIHdoZW4gZGlyZWN0bHkgYWNjZXNzaW5nIGFcbiAgICogcHJvdGVjdGVkIG9yIHByaXZhdGUgcHJvcGVydHkgaW5zaWRlIGEgZ2V0dGVyL3NldHRlciwgbGlrZSB1bmJvdW5kZWQgYWJvdmUuXG4gICAqIEJ5IGFjY2Vzc2luZyB0aGUgcHJvdGVjdGVkIHByb3BlcnR5IGluc2lkZSBhIG1ldGhvZCwgd2Ugc29sdmUgdGhhdCBwcm9ibGVtLlxuICAgKiBUaGF0J3Mgd2h5IHRoaXMgZnVuY3Rpb24gZXhpc3RzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0VW5ib3VuZGVkXygpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldFVuYm91bmRlZCh0aGlzLnVuYm91bmRlZF8pO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5hY3RpdmF0ZSgpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmRlYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmxheW91dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVGb3VuZGF0aW9ufVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDUmlwcGxlRm91bmRhdGlvbihNRENSaXBwbGUuY3JlYXRlQWRhcHRlcih0aGlzKSk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGluaXRpYWxTeW5jV2l0aERPTSgpIHtcbiAgICB0aGlzLnVuYm91bmRlZCA9ICdtZGNSaXBwbGVJc1VuYm91bmRlZCcgaW4gdGhpcy5yb290Xy5kYXRhc2V0O1xuICB9XG59XG5cbi8qKlxuICogU2VlIE1hdGVyaWFsIERlc2lnbiBzcGVjIGZvciBtb3JlIGRldGFpbHMgb24gd2hlbiB0byB1c2UgcmlwcGxlcy5cbiAqIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9tb3Rpb24vY2hvcmVvZ3JhcGh5Lmh0bWwjY2hvcmVvZ3JhcGh5LWNyZWF0aW9uXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIFJpcHBsZUNhcGFibGVTdXJmYWNlIHt9XG5cbi8qKiBAcHJvdGVjdGVkIHshRWxlbWVudH0gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS5yb290XztcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgcmlwcGxlIGJsZWVkcyBvdXQgb2YgdGhlIGJvdW5kcyBvZiB0aGUgZWxlbWVudC5cbiAqIEB0eXBlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLnVuYm91bmRlZDtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgcmlwcGxlIGlzIGF0dGFjaGVkIHRvIGEgZGlzYWJsZWQgY29tcG9uZW50LlxuICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUuZGlzYWJsZWQ7XG5cbmV4cG9ydCB7TURDUmlwcGxlLCBNRENSaXBwbGVGb3VuZGF0aW9uLCBSaXBwbGVDYXBhYmxlU3VyZmFjZSwgdXRpbH07XG4iLCJpbXBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9pbmRleCdcbmltcG9ydCB7XG4gIHN1cHBvcnRzQ3NzVmFyaWFibGVzLFxuICBnZXRNYXRjaGVzUHJvcGVydHksXG4gIGFwcGx5UGFzc2l2ZVxufSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL3V0aWwnXG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVCYXNlIGV4dGVuZHMgTURDUmlwcGxlRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgTUFUQ0hFUygpIHtcbiAgICAvKiBnbG9iYWwgSFRNTEVsZW1lbnQgKi9cbiAgICByZXR1cm4gKFxuICAgICAgUmlwcGxlQmFzZS5fbWF0Y2hlcyB8fFxuICAgICAgKFJpcHBsZUJhc2UuX21hdGNoZXMgPSBnZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKSlcbiAgICApXG4gIH1cblxuICBzdGF0aWMgaXNTdXJmYWNlQWN0aXZlKHJlZikge1xuICAgIHJldHVybiByZWZbUmlwcGxlQmFzZS5NQVRDSEVTXSgnOmFjdGl2ZScpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcih2bSwgb3B0aW9ucykge1xuICAgIHN1cGVyKFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1VuYm91bmRlZDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWxbUmlwcGxlQmFzZS5NQVRDSEVTXSgnOmFjdGl2ZScpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2bS4kZGVsZXRlKHZtLmNsYXNzZXMsIGNsYXNzTmFtZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IHRhcmdldCA9PiB2bS4kZWwuY29udGFpbnModGFyZ2V0KSxcbiAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHZtLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKHZhck5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2bS4kc2V0KHZtLnN0eWxlcywgdmFyTmFtZSwgdmFsdWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyB4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBSaXBwbGVNaXhpbiA9IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMucmlwcGxlID0gbmV3IFJpcHBsZUJhc2UodGhpcylcbiAgICB0aGlzLnJpcHBsZS5pbml0KClcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnJpcHBsZS5kZXN0cm95KClcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICA8Y3VzdG9tLWVsZW1lbnQgXG4gICAgOnRhZz1cInRhZ1wiIFxuICAgIDpjbGFzc2VzPVwiY2xhc3Nlc1wiXG4gICAgOnN0eWxlcz1cInN0eWxlc1wiIFxuICAgIGNsYXNzPVwibWRjLXJpcHBsZVwiPlxuICAgIDxzbG90IC8+XG4gIDwvY3VzdG9tLWVsZW1lbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudE1peGluIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IFJpcHBsZU1peGluIH0gZnJvbSAnLi9tZGMtcmlwcGxlLWJhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1yaXBwbGUnLFxuICBtaXhpbnM6IFtDdXN0b21FbGVtZW50TWl4aW4sIFJpcHBsZU1peGluXSxcbiAgcHJvcHM6IHtcbiAgICB0YWc6IFN0cmluZ1xuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cclxuICA8Y3VzdG9tLWxpbmsgXHJcbiAgICA6Y2xhc3M9XCJjbGFzc2VzXCJcclxuICAgIDpzdHlsZT1cInN0eWxlc1wiIFxuICAgIDpsaW5rPVwibGlua1wiIFxyXG4gICAgY2xhc3M9XCJtZGMtY2FyZC1wcmltYXJ5LWFjdGlvbiBtZGMtY2FyZF9fcHJpbWFyeS1hY3Rpb25cIiBcclxuICAgIHYtb249XCJsaXN0ZW5lcnNcIj5cclxuICAgIDxzbG90IC8+XHJcbiAgPC9jdXN0b20tbGluaz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IERpc3BhdGNoRXZlbnRNaXhpbiwgQ3VzdG9tTGlua01peGluIH0gZnJvbSAnLi4vYmFzZSdcclxuaW1wb3J0IHsgUmlwcGxlTWl4aW4gfSBmcm9tICcuLi9yaXBwbGUvaW5kZXgnXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnbWRjLWNhcmQtcHJpbWFyeS1hY3Rpb24nLFxyXG4gIG1peGluczogW0Rpc3BhdGNoRXZlbnRNaXhpbiwgQ3VzdG9tTGlua01peGluLCBSaXBwbGVNaXhpbl0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNsYXNzZXM6IHt9LFxyXG4gICAgICBzdHlsZXM6IHt9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPHNlY3Rpb24gXG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiIFxyXG4gICAgOnN0eWxlPVwic3R5bGVzXCIgXG4gICAgY2xhc3M9XCJtZGMtY2FyZC1tZWRpYSBtZGMtY2FyZF9fbWVkaWFcIj5cclxuICAgIDxkaXYgXG4gICAgICB2LWlmPVwiJHNsb3RzLmRlZmF1bHRcIiBcbiAgICAgIGNsYXNzPVwibWRjLWNhcmRfX21lZGlhLWNvbnRlbnRcIj5cclxuICAgICAgPHNsb3QvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdtZGMtY2FyZC1tZWRpYScsXHJcbiAgcHJvcHM6IHtcclxuICAgIHNyYzogU3RyaW5nLFxyXG4gICAgc3F1YXJlOiBCb29sZWFuXHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgc3R5bGVzKCkge1xyXG4gICAgICB2YXIgc3R5bGVzID0ge1xyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3RoaXMuc3JjfSlgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBzdHlsZXNcclxuICAgIH0sXHJcbiAgICBjbGFzc2VzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zcXVhcmUgPyAnbWRjLWNhcmRfX21lZGlhLS1zcXVhcmUnIDogJ21kYy1jYXJkX19tZWRpYS0tMTYtOSdcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cbiAgPHNlY3Rpb24gY2xhc3M9XCJtZGMtY2FyZC1oZWFkZXIgbWRjLWNhcmRfX3ByaW1hcnlcIj5cbiAgICA8c2xvdD5cbiAgICAgIDxoMSBcbiAgICAgICAgdi1pZj1cInRpdGxlXCJcbiAgICAgICAgOmNsYXNzPVwieydtZGMtY2FyZF9fdGl0bGUtLWxhcmdlJzogbGFyZ2VUaXRsZX1cIlxuICAgICAgICBjbGFzcz1cIm1kYy1jYXJkX190aXRsZVwiXG4gICAgICA+XG4gICAgICAgIHt7IHRpdGxlIH19XG4gICAgICA8L2gxPlxuICAgICAgPGgyIFxuICAgICAgICB2LWlmPVwic3VidGl0bGVcIlxuICAgICAgICBjbGFzcz1cIm1kYy1jYXJkX19zdWJ0aXRsZVwiXG4gICAgICA+XG4gICAgICAgIHt7IHN1YnRpdGxlIH19IFxuICAgICAgPC9oMj5cbiAgICA8L3Nsb3Q+XG4gIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtY2FyZC1oZWFkZXInLFxuICBwcm9wczoge1xuICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgc3VidGl0bGU6IFN0cmluZyxcbiAgICAnbGFyZ2UtdGl0bGUnOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGgxIFxuICAgIDpjbGFzcz1cInsnbWRjLWNhcmRfX3RpdGxlLS1sYXJnZSc6IGxhcmdlfVwiXG4gICAgY2xhc3M9XCJtZGMtY2FyZC10aXRsZSBtZGMtY2FyZF9fdGl0bGVcIj5cbiAgICA8c2xvdC8+XG4gIDwvaDE+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWNhcmQtdGl0bGUnLFxuICBwcm9wczoge1xuICAgIGxhcmdlOiBCb29sZWFuXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8aDIgY2xhc3M9XCJtZGMtY2FyZC1zdWJ0aXRsZSBtZGMtY2FyZF9fc3VidGl0bGVcIj5cbiAgICA8c2xvdC8+XG4gIDwvaDI+XG48L3RlbXBsYXRlPlxuXG5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1jYXJkLXN1YnRpdGxlJ1xufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxzZWN0aW9uIGNsYXNzPVwibWRjLWNhcmQtdGV4dCBtZGMtY2FyZF9fc3VwcG9ydGluZy10ZXh0XCI+XG4gICAgPHNsb3QvPlxuICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWNhcmQtdGV4dCdcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxyXG4gIDxzZWN0aW9uIFxuICAgIDpjbGFzcz1cImNsYXNzZXNcIiBcclxuICAgIGNsYXNzPVwibWRjLWNhcmQtYWN0aW9ucyBtZGMtY2FyZF9fYWN0aW9uc1wiPlxyXG4gICAgPHNsb3QvPlxyXG4gIDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnbWRjLWNhcmQtYWN0aW9ucycsXHJcbiAgcHJvcHM6IHtcclxuICAgIGZ1bGxCbGVlZDogQm9vbGVhblxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGNsYXNzZXMoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgJ21kYy1jYXJkX19hY3Rpb25zLS1mdWxsLWJsZWVkJzogdGhpcy5mdWxsQmxlZWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJtZGMtY2FyZC1hY3Rpb24tYnV0dG9ucyBtZGMtY2FyZF9fYWN0aW9uLWJ1dHRvbnNcIj5cclxuICAgIDxzbG90Lz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnbWRjLWNhcmQtYWN0aW9uLWJ1dHRvbnMnXHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cbiAgPGN1c3RvbS1idXR0b25cbiAgICByZWY9XCJyb290XCJcbiAgICA6Y2xhc3M9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGU9XCJzdHlsZXNcIlxuICAgIDpocmVmPVwiaHJlZlwiXG4gICAgOmxpbms9XCJsaW5rXCJcbiAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgdi1vbj1cImxpc3RlbmVyc1wiXG4gID5cbiAgICA8c3BhbiBjbGFzcz1cIm1kYy1idXR0b25fX2xhYmVsXCI+IDxzbG90IC8+IDwvc3Bhbj5cbiAgPC9jdXN0b20tYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IERpc3BhdGNoRXZlbnRNaXhpbiwgQ3VzdG9tQnV0dG9uTWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlTWl4aW4gfSBmcm9tICcuLi9yaXBwbGUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1idXR0b24tYmFzZScsXG4gIG1peGluczogW0Rpc3BhdGNoRXZlbnRNaXhpbiwgQ3VzdG9tQnV0dG9uTWl4aW4sIFJpcHBsZU1peGluXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIjxzY3JpcHQ+XG5pbXBvcnQgbWRjQnV0dG9uQmFzZSBmcm9tICcuL21kYy1idXR0b24tYmFzZS52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1idXR0b24nLFxuICBleHRlbmRzOiBtZGNCdXR0b25CYXNlLFxuICBwcm9wczoge1xuICAgIHJhaXNlZDogQm9vbGVhbixcbiAgICB1bmVsZXZhdGVkOiBCb29sZWFuLFxuICAgIG91dGxpbmVkOiBCb29sZWFuLFxuICAgIGRlbnNlOiBCb29sZWFuXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgJ21kYy1idXR0b24nOiB0cnVlLFxuICAgICAgICAnbWRjLWJ1dHRvbi0tcmFpc2VkJzogdGhpcy5yYWlzZWQsXG4gICAgICAgICdtZGMtYnV0dG9uLS11bmVsZXZhdGVkJzogdGhpcy51bmVsZXZhdGVkLFxuICAgICAgICAnbWRjLWJ1dHRvbi0tb3V0bGluZWQnOiB0aGlzLm91dGxpbmVkLFxuICAgICAgICAnbWRjLWJ1dHRvbi0tZGVuc2UnOiB0aGlzLmRlbnNlXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIHJhaXNlZCgpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsICdtZGMtYnV0dG9uLS1yYWlzZWQnLCB0aGlzLnJhaXNlZClcbiAgICB9LFxuICAgIHVuZWxldmF0ZWQoKSB7XG4gICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCAnbWRjLWJ1dHRvbi0tdW5lbGV2YXRlZCcsIHRoaXMudW5lbGV2YXRlZClcbiAgICB9LFxuICAgIG91dGxpbmVkKCkge1xuICAgICAgdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgJ21kYy1idXR0b24tLW91dGxpbmVkJywgdGhpcy5vdXRsaW5lZClcbiAgICB9LFxuICAgIGRlbnNlKCkge1xuICAgICAgdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgJ21kYy1idXR0b24tLWRlbnNlJywgdGhpcy5kZW5zZSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHNjcmlwdD5cclxuaW1wb3J0IHsgbWRjQnV0dG9uQmFzZSB9IGZyb20gJy4uL2J1dHRvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnbWRjLWNhcmQtYWN0aW9uLWJ1dHRvbicsXHJcbiAgZXh0ZW5kczogbWRjQnV0dG9uQmFzZSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2xhc3Nlczoge1xyXG4gICAgICAgICdtZGMtYnV0dG9uJzogdHJ1ZSxcclxuICAgICAgICAnbWRjLWNhcmRfX2FjdGlvbic6IHRydWUsXHJcbiAgICAgICAgJ21kYy1jYXJkLWFjdGlvbi1idXR0b24nOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibWRjLWNhcmQtYWN0aW9uLWljb25zIG1kYy1jYXJkX19hY3Rpb24taWNvbnNcIj5cclxuICAgIDxzbG90Lz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnbWRjLWNhcmQtYWN0aW9uLWljb25zJ1xyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPHNwYW4gXG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiIFxuICAgIDpzdHlsZT1cInN0eWxlc1wiIFxyXG4gICAgdi1vbj1cImxpc3RlbmVyc1wiPlxyXG4gICAgPHNsb3Q+e3sgaWNvbiB9fTwvc2xvdD5cclxuICA8L3NwYW4+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBEaXNwYXRjaEV2ZW50TWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xyXG5pbXBvcnQgeyBSaXBwbGVCYXNlIH0gZnJvbSAnLi4vcmlwcGxlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdtZGMtY2FyZC1hY3Rpb24taWNvbicsXHJcbiAgbWl4aW5zOiBbRGlzcGF0Y2hFdmVudE1peGluXSxcclxuICBwcm9wczoge1xyXG4gICAgaWNvbjogU3RyaW5nXHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2xhc3Nlczoge1xyXG4gICAgICAgICdtZGMtY2FyZC1hY3Rpb24taWNvbic6IHRydWUsXHJcbiAgICAgICAgJ21hdGVyaWFsLWljb25zJzogISF0aGlzLmljb24sXHJcbiAgICAgICAgJ21kYy1jYXJkX19hY3Rpb24nOiB0cnVlLFxyXG4gICAgICAgICdtZGMtY2FyZF9fYWN0aW9uLS1pY29uJzogdHJ1ZSxcclxuICAgICAgICAnbWRjLWljb24tdG9nZ2xlJzogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBzdHlsZXM6IHt9XHJcbiAgICB9XHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgaWNvbigpIHtcclxuICAgICAgdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgJ21hdGVyaWFsLWljb25zJywgISF0aGlzLmljb24pXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzLCB7XHJcbiAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiB0cnVlXHJcbiAgICB9KVxyXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXHJcbiAgfSxcclxuICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgdGhpcy5yaXBwbGUuZGVzdHJveSgpXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCJpbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnLi4vYmFzZSdcclxuaW1wb3J0IG1kY0NhcmQgZnJvbSAnLi9tZGMtY2FyZC52dWUnXHJcbmltcG9ydCBtZGNDYXJkUHJpbWFyeUFjdGlvbiBmcm9tICcuL21kYy1jYXJkLXByaW1hcnktYWN0aW9uLnZ1ZSdcclxuaW1wb3J0IG1kY0NhcmRNZWRpYSBmcm9tICcuL21kYy1jYXJkLW1lZGlhLnZ1ZSdcclxuaW1wb3J0IG1kY0NhcmRIZWFkZXIgZnJvbSAnLi9tZGMtY2FyZC1oZWFkZXIudnVlJ1xyXG5pbXBvcnQgbWRjQ2FyZFRpdGxlIGZyb20gJy4vbWRjLWNhcmQtdGl0bGUudnVlJ1xyXG5pbXBvcnQgbWRjQ2FyZFN1YnRpdGxlIGZyb20gJy4vbWRjLWNhcmQtc3VidGl0bGUudnVlJ1xyXG5pbXBvcnQgbWRjQ2FyZFRleHQgZnJvbSAnLi9tZGMtY2FyZC10ZXh0LnZ1ZSdcclxuaW1wb3J0IG1kY0NhcmRBY3Rpb25zIGZyb20gJy4vbWRjLWNhcmQtYWN0aW9ucy52dWUnXHJcbmltcG9ydCBtZGNDYXJkQWN0aW9uQnV0dG9ucyBmcm9tICcuL21kYy1jYXJkLWFjdGlvbi1idXR0b25zLnZ1ZSdcclxuaW1wb3J0IG1kY0NhcmRBY3Rpb25CdXR0b24gZnJvbSAnLi9tZGMtY2FyZC1hY3Rpb24tYnV0dG9uLnZ1ZSdcclxuaW1wb3J0IG1kY0NhcmRBY3Rpb25JY29ucyBmcm9tICcuL21kYy1jYXJkLWFjdGlvbi1pY29ucy52dWUnXHJcbmltcG9ydCBtZGNDYXJkQWN0aW9uSWNvbiBmcm9tICcuL21kYy1jYXJkLWFjdGlvbi1pY29uLnZ1ZSdcclxuXHJcbmV4cG9ydCB7XHJcbiAgbWRjQ2FyZCxcclxuICBtZGNDYXJkUHJpbWFyeUFjdGlvbixcclxuICBtZGNDYXJkTWVkaWEsXHJcbiAgbWRjQ2FyZEhlYWRlcixcclxuICBtZGNDYXJkVGl0bGUsXHJcbiAgbWRjQ2FyZFN1YnRpdGxlLFxyXG4gIG1kY0NhcmRUZXh0LFxyXG4gIG1kY0NhcmRBY3Rpb25zLFxyXG4gIG1kY0NhcmRBY3Rpb25CdXR0b25zLFxyXG4gIG1kY0NhcmRBY3Rpb25CdXR0b24sXHJcbiAgbWRjQ2FyZEFjdGlvbkljb25zLFxyXG4gIG1kY0NhcmRBY3Rpb25JY29uXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VQbHVnaW4oe1xyXG4gIG1kY0NhcmQsXHJcbiAgbWRjQ2FyZFByaW1hcnlBY3Rpb24sXHJcbiAgbWRjQ2FyZE1lZGlhLFxyXG4gIG1kY0NhcmRIZWFkZXIsXHJcbiAgbWRjQ2FyZFRpdGxlLFxyXG4gIG1kY0NhcmRTdWJ0aXRsZSxcclxuICBtZGNDYXJkVGV4dCxcclxuICBtZGNDYXJkQWN0aW9ucyxcclxuICBtZGNDYXJkQWN0aW9uQnV0dG9ucyxcclxuICBtZGNDYXJkQWN0aW9uQnV0dG9uLFxyXG4gIG1kY0NhcmRBY3Rpb25JY29ucyxcclxuICBtZGNDYXJkQWN0aW9uSWNvblxyXG59KVxyXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJDdXN0b21FbGVtZW50IiwiZnVuY3Rpb25hbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwicHJvcHMiLCJpcyIsInRhZyIsImRhdGEiLCJjaGlsZHJlbiIsIkN1c3RvbUVsZW1lbnRNaXhpbiIsIkN1c3RvbUxpbmsiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImxpbmsiLCJPYmplY3QiLCJoIiwiZWxlbWVudCIsInBhcmVudCIsIiRyb3V0ZXIiLCIkcm9vdCIsIiRvcHRpb25zIiwib24iLCJjbGljayIsIm5hdGl2ZU9uIiwiQ3VzdG9tTGlua01peGluIiwidG8iLCJleGFjdCIsIkJvb2xlYW4iLCJhcHBlbmQiLCJyZXBsYWNlIiwiYWN0aXZlQ2xhc3MiLCJleGFjdEFjdGl2ZUNsYXNzIiwiY29tcHV0ZWQiLCJDdXN0b21CdXR0b24iLCJhdHRycyIsInJvbGUiLCJocmVmIiwiQ3VzdG9tQnV0dG9uTWl4aW4iLCJkaXNhYmxlZCIsIkRpc3BhdGNoRXZlbnRNaXhpbiIsImV2ZW50IiwiQXJyYXkiLCJtZXRob2RzIiwiZGlzcGF0Y2hFdmVudCIsImV2dCIsIiRlbWl0IiwidGFyZ2V0IiwiZXZlbnRUYXJnZXQiLCJhcmdzIiwiZXZlbnRBcmdzIiwibGlzdGVuZXJzIiwiJGxpc3RlbmVycyIsImUiLCJzY29wZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwibm9ybWFsaXplQ29tcG9uZW50IiwiY29tcGlsZWRUZW1wbGF0ZSIsImluamVjdFN0eWxlIiwiZGVmYXVsdEV4cG9ydCIsInNjb3BlSWQiLCJpc0Z1bmN0aW9uYWxUZW1wbGF0ZSIsIm1vZHVsZUlkZW50aWZpZXIiLCJpc1NoYWRvd01vZGUiLCJjcmVhdGVJbmplY3RvciIsImNyZWF0ZUluamVjdG9yU1NSIiwiY3JlYXRlSW5qZWN0b3JTaGFkb3ciLCJvcHRpb25zIiwic3RhdGljUmVuZGVyRm5zIiwiX2NvbXBpbGVkIiwiX3Njb3BlSWQiLCJob29rIiwiJHZub2RlIiwic3NyQ29udGV4dCIsIl9fVlVFX1NTUl9DT05URVhUX18iLCJjYWxsIiwiX3JlZ2lzdGVyZWRDb21wb25lbnRzIiwiYWRkIiwiX3NzclJlZ2lzdGVyIiwic2hhZG93Um9vdCIsIm9yaWdpbmFsUmVuZGVyIiwicmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIiwiZXhpc3RpbmciLCJiZWZvcmVDcmVhdGUiLCJjb25jYXQiLCJNRENGb3VuZGF0aW9uIiwiYWRhcHRlciIsImFkYXB0ZXJfIiwiTURDQ29tcG9uZW50Iiwicm9vdCIsImZvdW5kYXRpb24iLCJ1bmRlZmluZWQiLCJyb290XyIsImluaXRpYWxpemUiLCJmb3VuZGF0aW9uXyIsImdldERlZmF1bHRGb3VuZGF0aW9uIiwiaW5pdCIsImluaXRpYWxTeW5jV2l0aERPTSIsIkVycm9yIiwiZGVzdHJveSIsImV2dFR5cGUiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldnREYXRhIiwic2hvdWxkQnViYmxlIiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsIk1EQ1JpcHBsZUFkYXB0ZXIiLCJjbGFzc05hbWUiLCJ2YXJOYW1lIiwidmFsdWUiLCJjc3NDbGFzc2VzIiwiUk9PVCIsIlVOQk9VTkRFRCIsIkJHX0ZPQ1VTRUQiLCJGR19BQ1RJVkFUSU9OIiwiRkdfREVBQ1RJVkFUSU9OIiwic3RyaW5ncyIsIlZBUl9MRUZUIiwiVkFSX1RPUCIsIlZBUl9GR19TSVpFIiwiVkFSX0ZHX1NDQUxFIiwiVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCIsIlZBUl9GR19UUkFOU0xBVEVfRU5EIiwibnVtYmVycyIsIlBBRERJTkciLCJJTklUSUFMX09SSUdJTl9TQ0FMRSIsIkRFQUNUSVZBVElPTl9USU1FT1VUX01TIiwiRkdfREVBQ1RJVkFUSU9OX01TIiwiVEFQX0RFTEFZX01TIiwic3VwcG9ydHNDc3NWYXJpYWJsZXNfIiwic3VwcG9ydHNQYXNzaXZlXyIsImRldGVjdEVkZ2VQc2V1ZG9WYXJCdWciLCJ3aW5kb3dPYmoiLCJub2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJoYXNQc2V1ZG9WYXJCdWciLCJib3JkZXJUb3BTdHlsZSIsInJlbW92ZSIsInN1cHBvcnRzQ3NzVmFyaWFibGVzIiwiZm9yY2VSZWZyZXNoIiwic3VwcG9ydHNGdW5jdGlvblByZXNlbnQiLCJDU1MiLCJzdXBwb3J0cyIsImV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMiLCJ3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMiLCJhcHBseVBhc3NpdmUiLCJnbG9iYWxPYmoiLCJpc1N1cHBvcnRlZCIsInBhc3NpdmUiLCJnZXRNYXRjaGVzUHJvcGVydHkiLCJIVE1MRWxlbWVudFByb3RvdHlwZSIsIm1hdGNoZXNNZXRob2RzIiwibWV0aG9kIiwiaSIsImxlbmd0aCIsIm1hdGNoZXNNZXRob2QiLCJnZXROb3JtYWxpemVkRXZlbnRDb29yZHMiLCJldiIsInBhZ2VPZmZzZXQiLCJjbGllbnRSZWN0IiwieCIsInkiLCJkb2N1bWVudFgiLCJsZWZ0IiwiZG9jdW1lbnRZIiwidG9wIiwibm9ybWFsaXplZFgiLCJub3JtYWxpemVkWSIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIkFDVElWQVRJT05fRVZFTlRfVFlQRVMiLCJQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyIsImFjdGl2YXRlZFRhcmdldHMiLCJNRENSaXBwbGVGb3VuZGF0aW9uIiwiYnJvd3NlclN1cHBvcnRzQ3NzVmFycyIsImlzVW5ib3VuZGVkIiwiaXNTdXJmYWNlQWN0aXZlIiwiaXNTdXJmYWNlRGlzYWJsZWQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiY29udGFpbnNFdmVudFRhcmdldCIsInJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwiZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJkZXJlZ2lzdGVyUmVzaXplSGFuZGxlciIsInVwZGF0ZUNzc1ZhcmlhYmxlIiwiY29tcHV0ZUJvdW5kaW5nUmVjdCIsImdldFdpbmRvd1BhZ2VPZmZzZXQiLCJkZWZhdWx0QWRhcHRlciIsImxheW91dEZyYW1lXyIsImZyYW1lXyIsIndpZHRoIiwiaGVpZ2h0IiwiYWN0aXZhdGlvblN0YXRlXyIsImRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfIiwiaW5pdGlhbFNpemVfIiwibWF4UmFkaXVzXyIsImFjdGl2YXRlSGFuZGxlcl8iLCJhY3RpdmF0ZV8iLCJkZWFjdGl2YXRlSGFuZGxlcl8iLCJkZWFjdGl2YXRlXyIsImZvY3VzSGFuZGxlcl8iLCJoYW5kbGVGb2N1cyIsImJsdXJIYW5kbGVyXyIsImhhbmRsZUJsdXIiLCJyZXNpemVIYW5kbGVyXyIsImxheW91dCIsInVuYm91bmRlZENvb3Jkc18iLCJmZ1NjYWxlXyIsImFjdGl2YXRpb25UaW1lcl8iLCJmZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8iLCJhY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfIiwiYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfIiwicnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfIiwicHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfIiwiaXNBY3RpdmF0ZWQiLCJoYXNEZWFjdGl2YXRpb25VWFJ1biIsIndhc0FjdGl2YXRlZEJ5UG9pbnRlciIsIndhc0VsZW1lbnRNYWRlQWN0aXZlIiwiYWN0aXZhdGlvbkV2ZW50IiwiaXNQcm9ncmFtbWF0aWMiLCJzdXBwb3J0c1ByZXNzUmlwcGxlIiwic3VwcG9ydHNQcmVzc1JpcHBsZV8iLCJyZWdpc3RlclJvb3RIYW5kbGVyc18iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsYXlvdXRJbnRlcm5hbF8iLCJjbGVhclRpbWVvdXQiLCJyZW1vdmVDc3NWYXJzXyIsImRlcmVnaXN0ZXJSb290SGFuZGxlcnNfIiwiZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyIsImZvckVhY2giLCJrZXlzIiwiayIsImluZGV4T2YiLCJhY3RpdmF0aW9uU3RhdGUiLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudCIsImlzU2FtZUludGVyYWN0aW9uIiwiaGFzQWN0aXZhdGVkQ2hpbGQiLCJzb21lIiwicmVzZXRBY3RpdmF0aW9uU3RhdGVfIiwicHVzaCIsInJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfIiwiY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8iLCJhbmltYXRlQWN0aXZhdGlvbl8iLCJrZXlDb2RlIiwidHJhbnNsYXRlU3RhcnQiLCJ0cmFuc2xhdGVFbmQiLCJnZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwicm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfIiwic2V0VGltZW91dCIsImFjdGl2YXRpb25IYXNFbmRlZCIsInN0YXRlIiwiYW5pbWF0ZURlYWN0aXZhdGlvbl8iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm1heERpbSIsIm1heCIsImdldEJvdW5kZWRSYWRpdXMiLCJoeXBvdGVudXNlIiwic3FydCIsInBvdyIsInVwZGF0ZUxheW91dENzc1ZhcnNfIiwicm91bmQiLCJ1bmJvdW5kZWQiLCJNRENSaXBwbGUiLCJ1bmJvdW5kZWRfIiwic2V0VW5ib3VuZGVkIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiY3JlYXRlQWRhcHRlciIsImRhdGFzZXQiLCJzZXRVbmJvdW5kZWRfIiwicmlwcGxlIiwiaW5zdGFuY2UiLCJNQVRDSEVTIiwidXRpbCIsIkhUTUxFbGVtZW50IiwicHJvdG90eXBlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsIlJpcHBsZUNhcGFibGVTdXJmYWNlIiwiUmlwcGxlQmFzZSIsInJlZiIsIl9tYXRjaGVzIiwiJGVsIiwiJHNldCIsImNsYXNzZXMiLCIkZGVsZXRlIiwic3R5bGVzIiwiUmlwcGxlTWl4aW4iLCJtb3VudGVkIiwiYmVmb3JlRGVzdHJveSIsInNjcmlwdCIsIm1kY0NhcmQiLCJtZGNDYXJkUHJpbWFyeUFjdGlvbiIsIm1kY0NhcmRNZWRpYSIsIm1kY0NhcmRIZWFkZXIiLCJtZGNDYXJkVGl0bGUiLCJtZGNDYXJkU3VidGl0bGUiLCJtZGNDYXJkVGV4dCIsIm1kY0NhcmRBY3Rpb25zIiwibWRjQ2FyZEFjdGlvbkJ1dHRvbnMiLCJtZGNDYXJkQWN0aW9uQnV0dG9uIiwibWRjQ2FyZEFjdGlvbkljb25zIiwibWRjQ2FyZEFjdGlvbkljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtJQUMvQjtJQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztJQUNBLE1BQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztJQUNqQ0QsSUFBQUEsSUFBSSxHQUFHQyxNQUFNLENBQUNDLEdBQWQ7SUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0lBQ3hDO0lBQ0FILElBQUFBLElBQUksR0FBR0csTUFBTSxDQUFDRCxHQUFkO0lBQ0Q7O0lBQ0QsTUFBSUYsSUFBSixFQUFVO0lBQ1JBLElBQUFBLElBQUksQ0FBQ0ksR0FBTCxDQUFTTCxNQUFUO0lBQ0Q7SUFDRjs7SUNaTSxTQUFTTSxVQUFULENBQW9CQyxVQUFwQixFQUFnQztJQUNyQyxTQUFPO0lBQ0xDLElBQUFBLE9BQU8sRUFBRSxhQURKO0lBRUxDLElBQUFBLE9BQU8sRUFBRSxpQkFBQUMsRUFBRSxFQUFJO0lBQ2IsV0FBSyxJQUFJQyxHQUFULElBQWdCSixVQUFoQixFQUE0QjtJQUMxQixZQUFJSyxTQUFTLEdBQUdMLFVBQVUsQ0FBQ0ksR0FBRCxDQUExQjtJQUNBRCxRQUFBQSxFQUFFLENBQUNFLFNBQUgsQ0FBYUEsU0FBUyxDQUFDQyxJQUF2QixFQUE2QkQsU0FBN0I7SUFDRDtJQUNGLEtBUEk7SUFRTEwsSUFBQUEsVUFBVSxFQUFWQTtJQVJLLEdBQVA7SUFVRDs7SUNYTSxJQUFNTyxhQUFhLEdBQUc7SUFDM0JDLEVBQUFBLFVBQVUsRUFBRSxJQURlO0lBRTNCQyxFQUFBQSxNQUYyQixrQkFFcEJDLGFBRm9CLEVBRUxDLE9BRkssRUFFSTtJQUM3QixXQUFPRCxhQUFhLENBQ2xCQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsRUFBZCxJQUFvQkYsT0FBTyxDQUFDQyxLQUFSLENBQWNFLEdBQWxDLElBQXlDLEtBRHZCLEVBRWxCSCxPQUFPLENBQUNJLElBRlUsRUFHbEJKLE9BQU8sQ0FBQ0ssUUFIVSxDQUFwQjtJQUtEO0lBUjBCLENBQXRCO0FBV1AsSUFBTyxJQUFNQyxrQkFBa0IsR0FBRztJQUNoQ2pCLEVBQUFBLFVBQVUsRUFBRTtJQUNWTyxJQUFBQSxhQUFhLEVBQWJBO0lBRFU7SUFEb0IsQ0FBM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDWEEsSUFBTVcsVUFBVSxHQUFHO0lBQ3hCWixFQUFBQSxJQUFJLEVBQUUsYUFEa0I7SUFFeEJFLEVBQUFBLFVBQVUsRUFBRSxJQUZZO0lBR3hCSSxFQUFBQSxLQUFLLEVBQUU7SUFDTEUsSUFBQUEsR0FBRyxFQUFFO0lBQUVLLE1BQUFBLElBQUksRUFBRUMsTUFBUjtJQUFnQkMsTUFBQUEsT0FBTyxFQUFFO0lBQXpCLEtBREE7SUFFTEMsSUFBQUEsSUFBSSxFQUFFQztJQUZELEdBSGlCO0lBT3hCZCxFQUFBQSxNQVB3QixrQkFPakJlLENBUGlCLEVBT2RiLE9BUGMsRUFPTDtJQUNqQixRQUFJYyxPQUFKOztJQUNBLFFBQUlWLElBQUksR0FBRyxTQUFjLEVBQWQsRUFBa0JKLE9BQU8sQ0FBQ0ksSUFBMUIsQ0FBWDs7SUFFQSxRQUFJSixPQUFPLENBQUNDLEtBQVIsQ0FBY1UsSUFBZCxJQUFzQlgsT0FBTyxDQUFDZSxNQUFSLENBQWVDLE9BQXpDLEVBQWtEO0lBQ2hEO0lBQ0FGLE1BQUFBLE9BQU8sR0FBR2QsT0FBTyxDQUFDZSxNQUFSLENBQWVFLEtBQWYsQ0FBcUJDLFFBQXJCLENBQThCN0IsVUFBOUIsQ0FBeUMsYUFBekMsQ0FBVjtJQUNBZSxNQUFBQSxJQUFJLENBQUNILEtBQUwsR0FBYSxTQUFjO0lBQUVFLFFBQUFBLEdBQUcsRUFBRUgsT0FBTyxDQUFDQyxLQUFSLENBQWNFO0lBQXJCLE9BQWQsRUFBMENILE9BQU8sQ0FBQ0MsS0FBUixDQUFjVSxJQUF4RCxDQUFiOztJQUNBLFVBQUlQLElBQUksQ0FBQ2UsRUFBTCxDQUFRQyxLQUFaLEVBQW1CO0lBQ2pCaEIsUUFBQUEsSUFBSSxDQUFDaUIsUUFBTCxHQUFnQjtJQUFFRCxVQUFBQSxLQUFLLEVBQUVoQixJQUFJLENBQUNlLEVBQUwsQ0FBUUM7SUFBakIsU0FBaEI7SUFDRDtJQUNGLEtBUEQsTUFPTztJQUNMO0lBQ0FOLE1BQUFBLE9BQU8sR0FBR2QsT0FBTyxDQUFDQyxLQUFSLENBQWNFLEdBQXhCO0lBQ0Q7O0lBRUQsV0FBT1UsQ0FBQyxDQUFDQyxPQUFELEVBQVVWLElBQVYsRUFBZ0JKLE9BQU8sQ0FBQ0ssUUFBeEIsQ0FBUjtJQUNEO0lBeEJ1QixDQUFuQjtBQTJCUCxJQUFPLElBQU1pQixlQUFlLEdBQUc7SUFDN0JyQixFQUFBQSxLQUFLLEVBQUU7SUFDTHNCLElBQUFBLEVBQUUsRUFBRSxDQUFDZCxNQUFELEVBQVNHLE1BQVQsQ0FEQztJQUVMWSxJQUFBQSxLQUFLLEVBQUVDLE9BRkY7SUFHTEMsSUFBQUEsTUFBTSxFQUFFRCxPQUhIO0lBSUxFLElBQUFBLE9BQU8sRUFBRUYsT0FKSjtJQUtMRyxJQUFBQSxXQUFXLEVBQUVuQixNQUxSO0lBTUxvQixJQUFBQSxnQkFBZ0IsRUFBRXBCO0lBTmIsR0FEc0I7SUFTN0JxQixFQUFBQSxRQUFRLEVBQUU7SUFDUm5CLElBQUFBLElBRFEsa0JBQ0Q7SUFDTCxhQUNFLEtBQUtZLEVBQUwsSUFBVztJQUNUQSxRQUFBQSxFQUFFLEVBQUUsS0FBS0EsRUFEQTtJQUVUQyxRQUFBQSxLQUFLLEVBQUUsS0FBS0EsS0FGSDtJQUdURSxRQUFBQSxNQUFNLEVBQUUsS0FBS0EsTUFISjtJQUlUQyxRQUFBQSxPQUFPLEVBQUUsS0FBS0EsT0FKTDtJQUtUQyxRQUFBQSxXQUFXLEVBQUUsS0FBS0EsV0FMVDtJQU1UQyxRQUFBQSxnQkFBZ0IsRUFBRSxLQUFLQTtJQU5kLE9BRGI7SUFVRDtJQVpPLEdBVG1CO0lBdUI3QnhDLEVBQUFBLFVBQVUsRUFBRTtJQUNWa0IsSUFBQUEsVUFBVSxFQUFWQTtJQURVO0lBdkJpQixDQUF4Qjs7SUMzQlA7O0lDQU8sSUFBTXdCLFlBQVksR0FBRztJQUMxQnBDLEVBQUFBLElBQUksRUFBRSxlQURvQjtJQUUxQkUsRUFBQUEsVUFBVSxFQUFFLElBRmM7SUFHMUJJLEVBQUFBLEtBQUssRUFBRTtJQUNMVSxJQUFBQSxJQUFJLEVBQUVDO0lBREQsR0FIbUI7SUFNMUJkLEVBQUFBLE1BTjBCLGtCQU1uQmUsQ0FObUIsRUFNaEJiLE9BTmdCLEVBTVA7SUFDakIsUUFBSWMsT0FBSjs7SUFDQSxRQUFJVixJQUFJLEdBQUcsU0FBYyxFQUFkLEVBQWtCSixPQUFPLENBQUNJLElBQTFCLENBQVg7O0lBRUEsUUFBSUosT0FBTyxDQUFDQyxLQUFSLENBQWNVLElBQWQsSUFBc0JYLE9BQU8sQ0FBQ2UsTUFBUixDQUFlQyxPQUF6QyxFQUFrRDtJQUNoRDtJQUNBRixNQUFBQSxPQUFPLEdBQUdkLE9BQU8sQ0FBQ2UsTUFBUixDQUFlRSxLQUFmLENBQXFCQyxRQUFyQixDQUE4QjdCLFVBQTlCLENBQXlDLGFBQXpDLENBQVY7SUFDQWUsTUFBQUEsSUFBSSxDQUFDSCxLQUFMLEdBQWEsU0FBYztJQUFFRSxRQUFBQSxHQUFHLEVBQUVILE9BQU8sQ0FBQ0MsS0FBUixDQUFjRTtJQUFyQixPQUFkLEVBQTBDSCxPQUFPLENBQUNDLEtBQVIsQ0FBY1UsSUFBeEQsQ0FBYjtJQUNBUCxNQUFBQSxJQUFJLENBQUM0QixLQUFMLENBQVdDLElBQVgsR0FBa0IsUUFBbEI7O0lBQ0EsVUFBSTdCLElBQUksQ0FBQ2UsRUFBTCxDQUFRQyxLQUFaLEVBQW1CO0lBQ2pCaEIsUUFBQUEsSUFBSSxDQUFDaUIsUUFBTCxHQUFnQjtJQUFFRCxVQUFBQSxLQUFLLEVBQUVoQixJQUFJLENBQUNlLEVBQUwsQ0FBUUM7SUFBakIsU0FBaEI7SUFDRDtJQUNGLEtBUkQsTUFRTyxJQUFJaEIsSUFBSSxDQUFDNEIsS0FBTCxJQUFjNUIsSUFBSSxDQUFDNEIsS0FBTCxDQUFXRSxJQUE3QixFQUFtQztJQUN4QztJQUNBcEIsTUFBQUEsT0FBTyxHQUFHLEdBQVY7SUFDQVYsTUFBQUEsSUFBSSxDQUFDNEIsS0FBTCxDQUFXQyxJQUFYLEdBQWtCLFFBQWxCO0lBQ0QsS0FKTSxNQUlBO0lBQ0w7SUFDQW5CLE1BQUFBLE9BQU8sR0FBRyxRQUFWO0lBQ0Q7O0lBRUQsV0FBT0QsQ0FBQyxDQUFDQyxPQUFELEVBQVVWLElBQVYsRUFBZ0JKLE9BQU8sQ0FBQ0ssUUFBeEIsQ0FBUjtJQUNEO0lBNUJ5QixDQUFyQjtBQStCUCxJQUFPLElBQU04QixpQkFBaUIsR0FBRztJQUMvQmxDLEVBQUFBLEtBQUssRUFBRTtJQUNMaUMsSUFBQUEsSUFBSSxFQUFFekIsTUFERDtJQUVMMkIsSUFBQUEsUUFBUSxFQUFFWCxPQUZMO0lBR0xGLElBQUFBLEVBQUUsRUFBRSxDQUFDZCxNQUFELEVBQVNHLE1BQVQsQ0FIQztJQUlMWSxJQUFBQSxLQUFLLEVBQUVDLE9BSkY7SUFLTEMsSUFBQUEsTUFBTSxFQUFFRCxPQUxIO0lBTUxFLElBQUFBLE9BQU8sRUFBRUYsT0FOSjtJQU9MRyxJQUFBQSxXQUFXLEVBQUVuQixNQVBSO0lBUUxvQixJQUFBQSxnQkFBZ0IsRUFBRXBCO0lBUmIsR0FEd0I7SUFXL0JxQixFQUFBQSxRQUFRLEVBQUU7SUFDUm5CLElBQUFBLElBRFEsa0JBQ0Q7SUFDTCxhQUNFLEtBQUtZLEVBQUwsSUFBVztJQUNUQSxRQUFBQSxFQUFFLEVBQUUsS0FBS0EsRUFEQTtJQUVUQyxRQUFBQSxLQUFLLEVBQUUsS0FBS0EsS0FGSDtJQUdURSxRQUFBQSxNQUFNLEVBQUUsS0FBS0EsTUFISjtJQUlUQyxRQUFBQSxPQUFPLEVBQUUsS0FBS0EsT0FKTDtJQUtUQyxRQUFBQSxXQUFXLEVBQUUsS0FBS0EsV0FMVDtJQU1UQyxRQUFBQSxnQkFBZ0IsRUFBRSxLQUFLQTtJQU5kLE9BRGI7SUFVRDtJQVpPLEdBWHFCO0lBeUIvQnhDLEVBQUFBLFVBQVUsRUFBRTtJQUNWMEMsSUFBQUEsWUFBWSxFQUFaQTtJQURVO0lBekJtQixDQUExQjs7SUMvQkEsSUFBTU0sa0JBQWtCLEdBQUc7SUFDaENwQyxFQUFBQSxLQUFLLEVBQUU7SUFDTHFDLElBQUFBLEtBQUssRUFBRTdCLE1BREY7SUFFTCxvQkFBZ0JHLE1BRlg7SUFHTCxrQkFBYzJCO0lBSFQsR0FEeUI7SUFNaENDLEVBQUFBLE9BQU8sRUFBRTtJQUNQQyxJQUFBQSxhQURPLHlCQUNPQyxHQURQLEVBQ1k7SUFDakJBLE1BQUFBLEdBQUcsSUFBSSxLQUFLQyxLQUFMLENBQVdELEdBQUcsQ0FBQ2xDLElBQWYsRUFBcUJrQyxHQUFyQixDQUFQOztJQUNBLFVBQUksS0FBS0osS0FBVCxFQUFnQjtJQUNkLFlBQUlNLE1BQU0sR0FBRyxLQUFLQyxXQUFMLElBQW9CLEtBQUs1QixLQUF0QztJQUNBLFlBQUk2QixJQUFJLEdBQUcsS0FBS0MsU0FBTCxJQUFrQixFQUE3QjtJQUNBSCxRQUFBQSxNQUFNLENBQUNELEtBQVAsT0FBQUMsTUFBTSxHQUFPLEtBQUtOLEtBQVosNEJBQXNCUSxJQUF0QixHQUFOO0lBQ0Q7SUFDRjtJQVJNLEdBTnVCO0lBZ0JoQ2hCLEVBQUFBLFFBQVEsRUFBRTtJQUNSa0IsSUFBQUEsU0FEUSx1QkFDSTtJQUFBOztJQUNWLCtCQUNLLEtBQUtDLFVBRFY7SUFFRTdCLFFBQUFBLEtBQUssRUFBRSxlQUFBOEIsQ0FBQztJQUFBLGlCQUFJLEtBQUksQ0FBQ1QsYUFBTCxDQUFtQlMsQ0FBbkIsQ0FBSjtJQUFBO0lBRlY7SUFJRDtJQU5PO0lBaEJzQixDQUEzQjs7SUNBUCxJQUFNQyxLQUFLLEdBQ1RDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JGLElBQUksQ0FBQ0MsS0FBTCxDQUFXLFVBQVgsQ0FBM0IsRUFBbURFLFFBQW5ELEtBQWdFLEdBRGxFOzs7Ozs7Ozs7O0FDU0E7Ozs7O0tBQUE7O0lDVGUsU0FBU0Msa0JBQVQsQ0FBNEJDLGdCQUE1QixFQUE4Q0MsV0FBOUMsRUFBMkRDLGFBQTNELEVBQTBFQyxPQUExRSxFQUFtRkMsb0JBQW5GLEVBQXlHQztJQUFpQjtJQUExSCxFQUE2SUMsWUFBN0ksRUFBMkpDLGNBQTNKLEVBQTJLQyxpQkFBM0ssRUFBOExDLG9CQUE5TCxFQUFvTjtJQUMvTixNQUFJLE9BQU9ILFlBQVAsS0FBd0IsVUFBNUIsRUFBd0M7SUFDcENFLElBQUFBLGlCQUFpQixHQUFHRCxjQUFwQjtJQUNBQSxJQUFBQSxjQUFjLEdBQUdELFlBQWpCO0lBQ0FBLElBQUFBLFlBQVksR0FBRyxLQUFmO0lBQ0gsR0FMOE47OztJQU8vTixNQUFNSSxPQUFPLEdBQUcsT0FBT1IsYUFBUCxLQUF5QixVQUF6QixHQUFzQ0EsYUFBYSxDQUFDUSxPQUFwRCxHQUE4RFIsYUFBOUUsQ0FQK047O0lBUy9OLE1BQUlGLGdCQUFnQixJQUFJQSxnQkFBZ0IsQ0FBQzNELE1BQXpDLEVBQWlEO0lBQzdDcUUsSUFBQUEsT0FBTyxDQUFDckUsTUFBUixHQUFpQjJELGdCQUFnQixDQUFDM0QsTUFBbEM7SUFDQXFFLElBQUFBLE9BQU8sQ0FBQ0MsZUFBUixHQUEwQlgsZ0JBQWdCLENBQUNXLGVBQTNDO0lBQ0FELElBQUFBLE9BQU8sQ0FBQ0UsU0FBUixHQUFvQixJQUFwQixDQUg2Qzs7SUFLN0MsUUFBSVIsb0JBQUosRUFBMEI7SUFDdEJNLE1BQUFBLE9BQU8sQ0FBQ3RFLFVBQVIsR0FBcUIsSUFBckI7SUFDSDtJQUNKLEdBakI4Tjs7O0lBbUIvTixNQUFJK0QsT0FBSixFQUFhO0lBQ1RPLElBQUFBLE9BQU8sQ0FBQ0csUUFBUixHQUFtQlYsT0FBbkI7SUFDSDs7SUFDRCxNQUFJVyxJQUFKOztJQUNBLE1BQUlULGdCQUFKLEVBQXNCO0lBQ2xCO0lBQ0FTLElBQUFBLElBQUksR0FBRyxjQUFVdkUsT0FBVixFQUFtQjtJQUN0QjtJQUNBQSxNQUFBQSxPQUFPLEdBQ0hBLE9BQU87SUFDRixXQUFLd0UsTUFBTCxJQUFlLEtBQUtBLE1BQUwsQ0FBWUMsVUFEaEM7SUFFSyxXQUFLMUQsTUFBTCxJQUFlLEtBQUtBLE1BQUwsQ0FBWXlELE1BQTNCLElBQXFDLEtBQUt6RCxNQUFMLENBQVl5RCxNQUFaLENBQW1CQyxVQUhqRSxDQUZzQjtJQU10Qjs7SUFDQSxVQUFJLENBQUN6RSxPQUFELElBQVksT0FBTzBFLG1CQUFQLEtBQStCLFdBQS9DLEVBQTREO0lBQ3hEMUUsUUFBQUEsT0FBTyxHQUFHMEUsbUJBQVY7SUFDSCxPQVRxQjs7O0lBV3RCLFVBQUloQixXQUFKLEVBQWlCO0lBQ2JBLFFBQUFBLFdBQVcsQ0FBQ2lCLElBQVosQ0FBaUIsSUFBakIsRUFBdUJWLGlCQUFpQixDQUFDakUsT0FBRCxDQUF4QztJQUNILE9BYnFCOzs7SUFldEIsVUFBSUEsT0FBTyxJQUFJQSxPQUFPLENBQUM0RSxxQkFBdkIsRUFBOEM7SUFDMUM1RSxRQUFBQSxPQUFPLENBQUM0RSxxQkFBUixDQUE4QkMsR0FBOUIsQ0FBa0NmLGdCQUFsQztJQUNIO0lBQ0osS0FsQkQsQ0FGa0I7SUFzQmxCOzs7SUFDQUssSUFBQUEsT0FBTyxDQUFDVyxZQUFSLEdBQXVCUCxJQUF2QjtJQUNILEdBeEJELE1BeUJLLElBQUliLFdBQUosRUFBaUI7SUFDbEJhLElBQUFBLElBQUksR0FBR1IsWUFBWSxHQUNiLFlBQVk7SUFDVkwsTUFBQUEsV0FBVyxDQUFDaUIsSUFBWixDQUFpQixJQUFqQixFQUF1QlQsb0JBQW9CLENBQUMsS0FBS2pELEtBQUwsQ0FBV0MsUUFBWCxDQUFvQjZELFVBQXJCLENBQTNDO0lBQ0gsS0FIYyxHQUliLFVBQVUvRSxPQUFWLEVBQW1CO0lBQ2pCMEQsTUFBQUEsV0FBVyxDQUFDaUIsSUFBWixDQUFpQixJQUFqQixFQUF1QlgsY0FBYyxDQUFDaEUsT0FBRCxDQUFyQztJQUNILEtBTkw7SUFPSDs7SUFDRCxNQUFJdUUsSUFBSixFQUFVO0lBQ04sUUFBSUosT0FBTyxDQUFDdEUsVUFBWixFQUF3QjtJQUNwQjtJQUNBLFVBQU1tRixjQUFjLEdBQUdiLE9BQU8sQ0FBQ3JFLE1BQS9COztJQUNBcUUsTUFBQUEsT0FBTyxDQUFDckUsTUFBUixHQUFpQixTQUFTbUYsd0JBQVQsQ0FBa0NwRSxDQUFsQyxFQUFxQ2IsT0FBckMsRUFBOEM7SUFDM0R1RSxRQUFBQSxJQUFJLENBQUNJLElBQUwsQ0FBVTNFLE9BQVY7SUFDQSxlQUFPZ0YsY0FBYyxDQUFDbkUsQ0FBRCxFQUFJYixPQUFKLENBQXJCO0lBQ0gsT0FIRDtJQUlILEtBUEQsTUFRSztJQUNEO0lBQ0EsVUFBTWtGLFFBQVEsR0FBR2YsT0FBTyxDQUFDZ0IsWUFBekI7SUFDQWhCLE1BQUFBLE9BQU8sQ0FBQ2dCLFlBQVIsR0FBdUJELFFBQVEsR0FBRyxHQUFHRSxNQUFILENBQVVGLFFBQVYsRUFBb0JYLElBQXBCLENBQUgsR0FBK0IsQ0FBQ0EsSUFBRCxDQUE5RDtJQUNIO0lBQ0o7O0lBQ0QsU0FBT1osYUFBUDtJQUNIOzs7QUR6RUQsSUFFQTtJQUNBO0lBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJRUpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCQTs7O1FBR00wQjs7Ozs7O0lBQ0o7NEJBQ3dCO0lBQ3RCO0lBQ0E7SUFDQSxhQUFPLEVBQVA7SUFDRDtJQUVEOzs7OzRCQUNxQjtJQUNuQjtJQUNBO0lBQ0EsYUFBTyxFQUFQO0lBQ0Q7SUFFRDs7Ozs0QkFDcUI7SUFDbkI7SUFDQTtJQUNBLGFBQU8sRUFBUDtJQUNEO0lBRUQ7Ozs7NEJBQzRCO0lBQzFCO0lBQ0E7SUFDQTtJQUNBLGFBQU8sRUFBUDtJQUNEO0lBRUQ7Ozs7OztJQUdBLDJCQUEwQjtJQUFBLFFBQWRDLE9BQWMsdUVBQUosRUFBSTs7SUFBQTs7SUFDeEI7SUFDQSxTQUFLQyxRQUFMLEdBQWdCRCxPQUFoQjtJQUNEOzs7OytCQUVNO0lBRU47OztrQ0FFUztJQUVUOzs7Ozs7SUM3Q0g7Ozs7UUFHTUU7Ozs7OztJQUNKOzs7O2lDQUlnQkMsTUFBTTtJQUNwQjtJQUNBO0lBQ0E7SUFDQTtJQUNBLGFBQU8sSUFBSUQsWUFBSixDQUFpQkMsSUFBakIsRUFBdUIsSUFBSUosYUFBSixFQUF2QixDQUFQO0lBQ0Q7SUFFRDs7Ozs7Ozs7SUFLQSx3QkFBWUksSUFBWixFQUFtRDtJQUFBLFFBQWpDQyxVQUFpQyx1RUFBcEJDLFNBQW9COztJQUFBOztJQUNqRDtJQUNBLFNBQUtDLEtBQUwsR0FBYUgsSUFBYjs7SUFGaUQsc0NBQU4zQyxJQUFNO0lBQU5BLE1BQUFBLElBQU07SUFBQTs7SUFHakQsU0FBSytDLFVBQUwsYUFBbUIvQyxJQUFuQixFQUhpRDtJQUtqRDs7SUFDQTs7SUFDQSxTQUFLZ0QsV0FBTCxHQUFtQkosVUFBVSxLQUFLQyxTQUFmLEdBQTJCLEtBQUtJLG9CQUFMLEVBQTNCLEdBQXlETCxVQUE1RTtJQUNBLFNBQUtJLFdBQUwsQ0FBaUJFLElBQWpCO0lBQ0EsU0FBS0Msa0JBQUw7SUFDRDs7Ozs7SUFFVTtJQUFlO0lBRXhCO0lBQ0E7O0lBR0Y7Ozs7OzsrQ0FHdUI7SUFDckI7SUFDQTtJQUNBLFlBQU0sSUFBSUMsS0FBSixDQUFVLG1GQUNkLGtCQURJLENBQU47SUFFRDs7OzZDQUVvQjtJQUVuQjtJQUNBO0lBQ0E7SUFDRDs7O2tDQUVTO0lBQ1I7SUFDQTtJQUNBLFdBQUtKLFdBQUwsQ0FBaUJLLE9BQWpCO0lBQ0Q7SUFFRDs7Ozs7Ozs7OytCQU1PQyxTQUFTQyxTQUFTO0lBQ3ZCLFdBQUtULEtBQUwsQ0FBV1UsZ0JBQVgsQ0FBNEJGLE9BQTVCLEVBQXFDQyxPQUFyQztJQUNEO0lBRUQ7Ozs7Ozs7OztpQ0FNU0QsU0FBU0MsU0FBUztJQUN6QixXQUFLVCxLQUFMLENBQVdXLG1CQUFYLENBQStCSCxPQUEvQixFQUF3Q0MsT0FBeEM7SUFDRDtJQUVEOzs7Ozs7Ozs7OzZCQU9LRCxTQUFTSSxTQUErQjtJQUFBLFVBQXRCQyxZQUFzQix1RUFBUCxLQUFPO0lBQzNDLFVBQUkvRCxHQUFKOztJQUNBLFVBQUksT0FBT2dFLFdBQVAsS0FBdUIsVUFBM0IsRUFBdUM7SUFDckNoRSxRQUFBQSxHQUFHLEdBQUcsSUFBSWdFLFdBQUosQ0FBZ0JOLE9BQWhCLEVBQXlCO0lBQzdCTyxVQUFBQSxNQUFNLEVBQUVILE9BRHFCO0lBRTdCSSxVQUFBQSxPQUFPLEVBQUVIO0lBRm9CLFNBQXpCLENBQU47SUFJRCxPQUxELE1BS087SUFDTC9ELFFBQUFBLEdBQUcsR0FBR21FLFFBQVEsQ0FBQ0MsV0FBVCxDQUFxQixhQUFyQixDQUFOO0lBQ0FwRSxRQUFBQSxHQUFHLENBQUNxRSxlQUFKLENBQW9CWCxPQUFwQixFQUE2QkssWUFBN0IsRUFBMkMsS0FBM0MsRUFBa0RELE9BQWxEO0lBQ0Q7O0lBRUQsV0FBS1osS0FBTCxDQUFXbkQsYUFBWCxDQUF5QkMsR0FBekI7SUFDRDs7Ozs7O0lDL0hIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCQTs7SUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBcUJNc0U7Ozs7Ozs7Ozs7SUFDSjtpREFDeUI7SUFFekI7Ozs7c0NBQ2M7SUFFZDs7OzswQ0FDa0I7SUFFbEI7Ozs7NENBQ29CO0lBRXBCOzs7O2lDQUNTQyxXQUFXO0lBRXBCOzs7O29DQUNZQSxXQUFXO0lBRXZCOzs7OzRDQUNvQnJFLFFBQVE7SUFFNUI7Ozs7Ozs7bURBSTJCd0QsU0FBU0MsU0FBUztJQUU3Qzs7Ozs7OztxREFJNkJELFNBQVNDLFNBQVM7SUFFL0M7Ozs7Ozs7MkRBSW1DRCxTQUFTQyxTQUFTO0lBRXJEOzs7Ozs7OzZEQUlxQ0QsU0FBU0MsU0FBUztJQUV2RDs7Ozs7OzhDQUdzQkEsU0FBUztJQUUvQjs7Ozs7O2dEQUd3QkEsU0FBUztJQUVqQzs7Ozs7OzswQ0FJa0JhLFNBQVNDLE9BQU87SUFFbEM7Ozs7OENBQ3NCO0lBRXRCOzs7OzhDQUNzQjs7Ozs7O0lDaEh4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCQSxJQUFNQyxVQUFVLEdBQUc7SUFDakI7SUFDQTtJQUNBO0lBQ0FDLEVBQUFBLElBQUksRUFBRSxxQkFKVztJQUtqQkMsRUFBQUEsU0FBUyxFQUFFLGdDQUxNO0lBTWpCQyxFQUFBQSxVQUFVLEVBQUUseUNBTks7SUFPakJDLEVBQUFBLGFBQWEsRUFBRSw0Q0FQRTtJQVFqQkMsRUFBQUEsZUFBZSxFQUFFO0lBUkEsQ0FBbkI7SUFXQSxJQUFNQyxPQUFPLEdBQUc7SUFDZEMsRUFBQUEsUUFBUSxFQUFFLG1CQURJO0lBRWRDLEVBQUFBLE9BQU8sRUFBRSxrQkFGSztJQUdkQyxFQUFBQSxXQUFXLEVBQUUsc0JBSEM7SUFJZEMsRUFBQUEsWUFBWSxFQUFFLHVCQUpBO0lBS2RDLEVBQUFBLHNCQUFzQixFQUFFLGlDQUxWO0lBTWRDLEVBQUFBLG9CQUFvQixFQUFFO0lBTlIsQ0FBaEI7SUFTQSxJQUFNQyxPQUFPLEdBQUc7SUFDZEMsRUFBQUEsT0FBTyxFQUFFLEVBREs7SUFFZEMsRUFBQUEsb0JBQW9CLEVBQUUsR0FGUjtJQUdkQyxFQUFBQSx1QkFBdUIsRUFBRSxHQUhYO0lBR2dCO0lBQzlCQyxFQUFBQSxrQkFBa0IsRUFBRSxHQUpOO0lBSVc7SUFDekJDLEVBQUFBLFlBQVksRUFBRSxHQUxBOztJQUFBLENBQWhCOztJQzNDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1QkE7Ozs7SUFJQSxJQUFJQyxxQkFBSjtJQUVBOzs7OztJQUlBLElBQUlDLGtCQUFKO0lBRUE7Ozs7O0lBSUEsU0FBU0Msc0JBQVQsQ0FBZ0NDLFNBQWhDLEVBQTJDO0lBQ3pDO0lBQ0E7SUFDQSxNQUFNN0IsUUFBUSxHQUFHNkIsU0FBUyxDQUFDN0IsUUFBM0I7SUFDQSxNQUFNOEIsSUFBSSxHQUFHOUIsUUFBUSxDQUFDOUcsYUFBVCxDQUF1QixLQUF2QixDQUFiO0lBQ0E0SSxFQUFBQSxJQUFJLENBQUMxQixTQUFMLEdBQWlCLHVDQUFqQjtJQUNBSixFQUFBQSxRQUFRLENBQUMrQixJQUFULENBQWNDLFdBQWQsQ0FBMEJGLElBQTFCLEVBTnlDO0lBU3pDO0lBQ0E7SUFDQTs7SUFDQSxNQUFNRyxhQUFhLEdBQUdKLFNBQVMsQ0FBQ0ssZ0JBQVYsQ0FBMkJKLElBQTNCLENBQXRCO0lBQ0EsTUFBTUssZUFBZSxHQUFHRixhQUFhLEtBQUssSUFBbEIsSUFBMEJBLGFBQWEsQ0FBQ0csY0FBZCxLQUFpQyxPQUFuRjtJQUNBTixFQUFBQSxJQUFJLENBQUNPLE1BQUw7SUFDQSxTQUFPRixlQUFQO0lBQ0Q7SUFFRDs7Ozs7OztJQU1BLFNBQVNHLG9CQUFULENBQThCVCxTQUE5QixFQUErRDtJQUFBLE1BQXRCVSxZQUFzQix1RUFBUCxLQUFPO0lBQzdELE1BQUlELG9CQUFvQixHQUFHWixxQkFBM0I7O0lBQ0EsTUFBSSxPQUFPQSxxQkFBUCxLQUFpQyxTQUFqQyxJQUE4QyxDQUFDYSxZQUFuRCxFQUFpRTtJQUMvRCxXQUFPRCxvQkFBUDtJQUNEOztJQUVELE1BQU1FLHVCQUF1QixHQUFHWCxTQUFTLENBQUNZLEdBQVYsSUFBaUIsT0FBT1osU0FBUyxDQUFDWSxHQUFWLENBQWNDLFFBQXJCLEtBQWtDLFVBQW5GOztJQUNBLE1BQUksQ0FBQ0YsdUJBQUwsRUFBOEI7SUFDNUI7SUFDRDs7SUFFRCxNQUFNRyx5QkFBeUIsR0FBR2QsU0FBUyxDQUFDWSxHQUFWLENBQWNDLFFBQWQsQ0FBdUIsWUFBdkIsRUFBcUMsS0FBckMsQ0FBbEMsQ0FYNkQ7SUFhN0Q7O0lBQ0EsTUFBTUUsaUNBQWlDLEdBQ3JDZixTQUFTLENBQUNZLEdBQVYsQ0FBY0MsUUFBZCxDQUF1QixtQkFBdkIsS0FDQWIsU0FBUyxDQUFDWSxHQUFWLENBQWNDLFFBQWQsQ0FBdUIsT0FBdkIsRUFBZ0MsV0FBaEMsQ0FGRjs7SUFLQSxNQUFJQyx5QkFBeUIsSUFBSUMsaUNBQWpDLEVBQW9FO0lBQ2xFTixJQUFBQSxvQkFBb0IsR0FBRyxDQUFDVixzQkFBc0IsQ0FBQ0MsU0FBRCxDQUE5QztJQUNELEdBRkQsTUFFTztJQUNMUyxJQUFBQSxvQkFBb0IsR0FBRyxLQUF2QjtJQUNEOztJQUVELE1BQUksQ0FBQ0MsWUFBTCxFQUFtQjtJQUNqQmIsSUFBQUEscUJBQXFCLEdBQUdZLG9CQUF4QjtJQUNEOztJQUNELFNBQU9BLG9CQUFQO0lBQ0Q7O0lBR0Q7Ozs7Ozs7O0lBTUEsU0FBU08sY0FBVCxHQUFnRTtJQUFBLE1BQTFDQyxTQUEwQyx1RUFBOUIzSyxNQUE4QjtJQUFBLE1BQXRCb0ssWUFBc0IsdUVBQVAsS0FBTzs7SUFDOUQsTUFBSVosa0JBQWdCLEtBQUs3QyxTQUFyQixJQUFrQ3lELFlBQXRDLEVBQW9EO0lBQ2xELFFBQUlRLFdBQVcsR0FBRyxLQUFsQjs7SUFDQSxRQUFJO0lBQ0ZELE1BQUFBLFNBQVMsQ0FBQzlDLFFBQVYsQ0FBbUJQLGdCQUFuQixDQUFvQyxNQUFwQyxFQUE0QyxJQUE1QyxFQUFrRDtJQUFDLFlBQUl1RCxPQUFKLEdBQWM7SUFDL0RELFVBQUFBLFdBQVcsR0FBRyxJQUFkO0lBQ0EsaUJBQU9BLFdBQVA7SUFDRDs7SUFIaUQsT0FBbEQ7SUFJRCxLQUxELENBS0UsT0FBTzFHLENBQVAsRUFBVTs7SUFFWnNGLElBQUFBLGtCQUFnQixHQUFHb0IsV0FBbkI7SUFDRDs7SUFFRCxTQUFPcEIsa0JBQWdCO0lBQ25CO0lBQXNDO0lBQUNxQixJQUFBQSxPQUFPLEVBQUU7SUFBVixHQURuQixHQUVuQixLQUZKO0lBR0Q7SUFFRDs7Ozs7O0lBSUEsU0FBU0Msa0JBQVQsQ0FBNEJDLG9CQUE1QixFQUFrRDtJQUNoRDs7OztJQUlBLE1BQU1DLGNBQWMsR0FBRyxDQUFDLFNBQUQsRUFBWSx1QkFBWixFQUFxQyxtQkFBckMsQ0FBdkI7SUFDQSxNQUFJQyxNQUFNLEdBQUcsU0FBYjs7SUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLGNBQWMsQ0FBQ0csTUFBbkMsRUFBMkNELENBQUMsRUFBNUMsRUFBZ0Q7SUFDOUMsUUFBTUUsYUFBYSxHQUFHSixjQUFjLENBQUNFLENBQUQsQ0FBcEM7O0lBQ0EsUUFBSUUsYUFBYSxJQUFJTCxvQkFBckIsRUFBMkM7SUFDekNFLE1BQUFBLE1BQU0sR0FBR0csYUFBVDtJQUNBO0lBQ0Q7SUFDRjs7SUFFRCxTQUFPSCxNQUFQO0lBQ0Q7SUFFRDs7Ozs7Ozs7SUFNQSxTQUFTSSx3QkFBVCxDQUFrQ0MsRUFBbEMsRUFBc0NDLFVBQXRDLEVBQWtEQyxVQUFsRCxFQUE4RDtJQUFBLE1BQ3JEQyxDQURxRCxHQUM3Q0YsVUFENkMsQ0FDckRFLENBRHFEO0lBQUEsTUFDbERDLENBRGtELEdBQzdDSCxVQUQ2QyxDQUNsREcsQ0FEa0Q7SUFFNUQsTUFBTUMsU0FBUyxHQUFHRixDQUFDLEdBQUdELFVBQVUsQ0FBQ0ksSUFBakM7SUFDQSxNQUFNQyxTQUFTLEdBQUdILENBQUMsR0FBR0YsVUFBVSxDQUFDTSxHQUFqQztJQUVBLE1BQUlDLFdBQUo7SUFDQSxNQUFJQyxXQUFKLENBTjREOztJQVE1RCxNQUFJVixFQUFFLENBQUM5SixJQUFILEtBQVksWUFBaEIsRUFBOEI7SUFDNUI4SixJQUFBQSxFQUFFO0lBQUc7SUFBNEJBLElBQUFBLEVBQWpDO0lBQ0FTLElBQUFBLFdBQVcsR0FBR1QsRUFBRSxDQUFDVyxjQUFILENBQWtCLENBQWxCLEVBQXFCQyxLQUFyQixHQUE2QlAsU0FBM0M7SUFDQUssSUFBQUEsV0FBVyxHQUFHVixFQUFFLENBQUNXLGNBQUgsQ0FBa0IsQ0FBbEIsRUFBcUJFLEtBQXJCLEdBQTZCTixTQUEzQztJQUNELEdBSkQsTUFJTztJQUNMUCxJQUFBQSxFQUFFO0lBQUc7SUFBNEJBLElBQUFBLEVBQWpDO0lBQ0FTLElBQUFBLFdBQVcsR0FBR1QsRUFBRSxDQUFDWSxLQUFILEdBQVdQLFNBQXpCO0lBQ0FLLElBQUFBLFdBQVcsR0FBR1YsRUFBRSxDQUFDYSxLQUFILEdBQVdOLFNBQXpCO0lBQ0Q7O0lBRUQsU0FBTztJQUFDSixJQUFBQSxDQUFDLEVBQUVNLFdBQUo7SUFBaUJMLElBQUFBLENBQUMsRUFBRU07SUFBcEIsR0FBUDtJQUNEOztJQ2pHRCxJQUFNSSxzQkFBc0IsR0FBRyxDQUFDLFlBQUQsRUFBZSxhQUFmLEVBQThCLFdBQTlCLEVBQTJDLFNBQTNDLENBQS9COztJQUdBLElBQU1DLGdDQUFnQyxHQUFHLENBQUMsVUFBRCxFQUFhLFdBQWIsRUFBMEIsU0FBMUIsRUFBcUMsYUFBckMsQ0FBekM7O0lBR0E7O0lBQ0EsSUFBSUMsZ0JBQWdCLEdBQUcsRUFBdkI7SUFFQTs7OztRQUdNQzs7Ozs7Ozs0QkFDb0I7SUFDdEIsYUFBT25FLFVBQVA7SUFDRDs7OzRCQUVvQjtJQUNuQixhQUFPTSxPQUFQO0lBQ0Q7Ozs0QkFFb0I7SUFDbkIsYUFBT08sT0FBUDtJQUNEOzs7NEJBRTJCO0lBQzFCLGFBQU87SUFDTHVELFFBQUFBLHNCQUFzQixFQUFFO0lBQU07SUFBdUIsVUFEaEQ7SUFFTEMsUUFBQUEsV0FBVyxFQUFFO0lBQU07SUFBYyxVQUY1QjtJQUdMQyxRQUFBQSxlQUFlLEVBQUU7SUFBTTtJQUFjLFVBSGhDO0lBSUxDLFFBQUFBLGlCQUFpQixFQUFFO0lBQU07SUFBYyxVQUpsQztJQUtMQyxRQUFBQSxRQUFRLEVBQUU7SUFBQztJQUE0QixVQUxsQztJQU1MQyxRQUFBQSxXQUFXLEVBQUU7SUFBQztJQUE0QixVQU5yQztJQU9MQyxRQUFBQSxtQkFBbUIsRUFBRTtJQUFDO0lBQStCLFVBUGhEO0lBUUxDLFFBQUFBLDBCQUEwQixFQUFFO0lBQUM7SUFBa0QsVUFSMUU7SUFTTEMsUUFBQUEsNEJBQTRCLEVBQUU7SUFBQztJQUFrRCxVQVQ1RTtJQVVMQyxRQUFBQSxrQ0FBa0MsRUFBRTtJQUFDO0lBQWtELFVBVmxGO0lBV0xDLFFBQUFBLG9DQUFvQyxFQUFFO0lBQUM7SUFBa0QsVUFYcEY7SUFZTEMsUUFBQUEscUJBQXFCLEVBQUU7SUFBQztJQUFpQyxVQVpwRDtJQWFMQyxRQUFBQSx1QkFBdUIsRUFBRTtJQUFDO0lBQWlDLFVBYnREO0lBY0xDLFFBQUFBLGlCQUFpQixFQUFFO0lBQUM7SUFBeUMsVUFkeEQ7SUFlTEMsUUFBQUEsbUJBQW1CLEVBQUU7SUFBTTtJQUFpQixVQWZ2QztJQWdCTEMsUUFBQUEsbUJBQW1CLEVBQUU7SUFBTTtJQUE2QjtJQWhCbkQsT0FBUDtJQWtCRDs7O0lBRUQsK0JBQVlqSCxPQUFaLEVBQXFCO0lBQUE7O0lBQUE7O0lBQ25CLDZGQUFNLFNBQWNpRyxtQkFBbUIsQ0FBQ2lCLGNBQWxDLEVBQWtEbEgsT0FBbEQsQ0FBTjtJQUVBOztJQUNBLFVBQUttSCxZQUFMLEdBQW9CLENBQXBCO0lBRUE7O0lBQ0EsVUFBS0MsTUFBTDtJQUFjO0lBQTRCO0lBQUNDLE1BQUFBLEtBQUssRUFBRSxDQUFSO0lBQVdDLE1BQUFBLE1BQU0sRUFBRTtJQUFuQixLQUExQztJQUVBOztJQUNBLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtDLHVCQUFMLEVBQXhCO0lBRUE7O0lBQ0EsVUFBS0MsWUFBTCxHQUFvQixDQUFwQjtJQUVBOztJQUNBLFVBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7SUFFQTs7SUFDQSxVQUFLQyxnQkFBTCxHQUF3QixVQUFDL0osQ0FBRDtJQUFBLGFBQU8sTUFBS2dLLFNBQUwsQ0FBZWhLLENBQWYsQ0FBUDtJQUFBLEtBQXhCO0lBRUE7OztJQUNBLFVBQUtpSyxrQkFBTCxHQUEwQjtJQUFBLGFBQU0sTUFBS0MsV0FBTCxFQUFOO0lBQUEsS0FBMUI7SUFFQTs7O0lBQ0EsVUFBS0MsYUFBTCxHQUFxQjtJQUFBLGFBQU0sTUFBS0MsV0FBTCxFQUFOO0lBQUEsS0FBckI7SUFFQTs7O0lBQ0EsVUFBS0MsWUFBTCxHQUFvQjtJQUFBLGFBQU0sTUFBS0MsVUFBTCxFQUFOO0lBQUEsS0FBcEI7SUFFQTs7O0lBQ0EsVUFBS0MsY0FBTCxHQUFzQjtJQUFBLGFBQU0sTUFBS0MsTUFBTCxFQUFOO0lBQUEsS0FBdEI7SUFFQTs7O0lBQ0EsVUFBS0MsZ0JBQUwsR0FBd0I7SUFDdEIvQyxNQUFBQSxJQUFJLEVBQUUsQ0FEZ0I7SUFFdEJFLE1BQUFBLEdBQUcsRUFBRTtJQUZpQixLQUF4QjtJQUtBOztJQUNBLFVBQUs4QyxRQUFMLEdBQWdCLENBQWhCO0lBRUE7O0lBQ0EsVUFBS0MsZ0JBQUwsR0FBd0IsQ0FBeEI7SUFFQTs7SUFDQSxVQUFLQywyQkFBTCxHQUFtQyxDQUFuQztJQUVBOztJQUNBLFVBQUtDLDRCQUFMLEdBQW9DLEtBQXBDO0lBRUE7O0lBQ0EsVUFBS0Msd0JBQUwsR0FBZ0MsWUFBTTtJQUNwQyxZQUFLRCw0QkFBTCxHQUFvQyxJQUFwQzs7SUFDQSxZQUFLRSw4QkFBTDtJQUNELEtBSEQ7SUFLQTs7O0lBQ0EsVUFBS0Msd0JBQUw7SUExRG1CO0lBMkRwQjtJQUVEOzs7Ozs7Ozs7Ozs7K0NBUXVCO0lBQ3JCLGFBQU8sS0FBSzNJLFFBQUwsQ0FBY2lHLHNCQUFkLEVBQVA7SUFDRDtJQUVEOzs7Ozs7a0RBRzBCO0lBQ3hCLGFBQU87SUFDTDJDLFFBQUFBLFdBQVcsRUFBRSxLQURSO0lBRUxDLFFBQUFBLG9CQUFvQixFQUFFLEtBRmpCO0lBR0xDLFFBQUFBLHFCQUFxQixFQUFFLEtBSGxCO0lBSUxDLFFBQUFBLG9CQUFvQixFQUFFLEtBSmpCO0lBS0xDLFFBQUFBLGVBQWUsRUFBRTVJLFNBTFo7SUFNTDZJLFFBQUFBLGNBQWMsRUFBRTtJQU5YLE9BQVA7SUFRRDtJQUVEOzs7OytCQUNPO0lBQUE7O0lBQ0wsVUFBTUMsbUJBQW1CLEdBQUcsS0FBS0Msb0JBQUwsRUFBNUI7SUFFQSxXQUFLQyxxQkFBTCxDQUEyQkYsbUJBQTNCOztJQUVBLFVBQUlBLG1CQUFKLEVBQXlCO0lBQUEsb0NBQ0dsRCxtQkFBbUIsQ0FBQ25FLFVBRHZCO0lBQUEsWUFDaEJDLElBRGdCLHlCQUNoQkEsSUFEZ0I7SUFBQSxZQUNWQyxTQURVLHlCQUNWQSxTQURVO0lBRXZCc0gsUUFBQUEscUJBQXFCLENBQUMsWUFBTTtJQUMxQixVQUFBLE1BQUksQ0FBQ3JKLFFBQUwsQ0FBY3FHLFFBQWQsQ0FBdUJ2RSxJQUF2Qjs7SUFDQSxjQUFJLE1BQUksQ0FBQzlCLFFBQUwsQ0FBY2tHLFdBQWQsRUFBSixFQUFpQztJQUMvQixZQUFBLE1BQUksQ0FBQ2xHLFFBQUwsQ0FBY3FHLFFBQWQsQ0FBdUJ0RSxTQUF2QixFQUQrQjs7O0lBRy9CLFlBQUEsTUFBSSxDQUFDdUgsZUFBTDtJQUNEO0lBQ0YsU0FQb0IsQ0FBckI7SUFRRDtJQUNGO0lBRUQ7Ozs7a0NBQ1U7SUFBQTs7SUFDUixVQUFJLEtBQUtILG9CQUFMLEVBQUosRUFBaUM7SUFDL0IsWUFBSSxLQUFLYixnQkFBVCxFQUEyQjtJQUN6QmlCLFVBQUFBLFlBQVksQ0FBQyxLQUFLakIsZ0JBQU4sQ0FBWjtJQUNBLGVBQUtBLGdCQUFMLEdBQXdCLENBQXhCO0lBQ0EsZUFBS3RJLFFBQUwsQ0FBY3NHLFdBQWQsQ0FBMEJOLG1CQUFtQixDQUFDbkUsVUFBcEIsQ0FBK0JJLGFBQXpEO0lBQ0Q7O0lBRUQsWUFBSSxLQUFLc0csMkJBQVQsRUFBc0M7SUFDcENnQixVQUFBQSxZQUFZLENBQUMsS0FBS2hCLDJCQUFOLENBQVo7SUFDQSxlQUFLQSwyQkFBTCxHQUFtQyxDQUFuQztJQUNBLGVBQUt2SSxRQUFMLENBQWNzRyxXQUFkLENBQTBCTixtQkFBbUIsQ0FBQ25FLFVBQXBCLENBQStCSyxlQUF6RDtJQUNEOztJQVg4QixxQ0FhTDhELG1CQUFtQixDQUFDbkUsVUFiZjtJQUFBLFlBYXhCQyxJQWJ3QiwwQkFheEJBLElBYndCO0lBQUEsWUFhbEJDLFNBYmtCLDBCQWFsQkEsU0Fia0I7SUFjL0JzSCxRQUFBQSxxQkFBcUIsQ0FBQyxZQUFNO0lBQzFCLFVBQUEsTUFBSSxDQUFDckosUUFBTCxDQUFjc0csV0FBZCxDQUEwQnhFLElBQTFCOztJQUNBLFVBQUEsTUFBSSxDQUFDOUIsUUFBTCxDQUFjc0csV0FBZCxDQUEwQnZFLFNBQTFCOztJQUNBLFVBQUEsTUFBSSxDQUFDeUgsY0FBTDtJQUNELFNBSm9CLENBQXJCO0lBS0Q7O0lBRUQsV0FBS0MsdUJBQUw7SUFDQSxXQUFLQywrQkFBTDtJQUNEO0lBRUQ7Ozs7Ozs7OENBSXNCUixxQkFBcUI7SUFBQTs7SUFDekMsVUFBSUEsbUJBQUosRUFBeUI7SUFDdkJyRCxRQUFBQSxzQkFBc0IsQ0FBQzhELE9BQXZCLENBQStCLFVBQUMxTyxJQUFELEVBQVU7SUFDdkMsVUFBQSxNQUFJLENBQUMrRSxRQUFMLENBQWN3RywwQkFBZCxDQUF5Q3ZMLElBQXpDLEVBQStDLE1BQUksQ0FBQ3lNLGdCQUFwRDtJQUNELFNBRkQ7O0lBR0EsWUFBSSxLQUFLMUgsUUFBTCxDQUFja0csV0FBZCxFQUFKLEVBQWlDO0lBQy9CLGVBQUtsRyxRQUFMLENBQWM0RyxxQkFBZCxDQUFvQyxLQUFLc0IsY0FBekM7SUFDRDtJQUNGOztJQUVELFdBQUtsSSxRQUFMLENBQWN3RywwQkFBZCxDQUF5QyxPQUF6QyxFQUFrRCxLQUFLc0IsYUFBdkQ7SUFDQSxXQUFLOUgsUUFBTCxDQUFjd0csMEJBQWQsQ0FBeUMsTUFBekMsRUFBaUQsS0FBS3dCLFlBQXREO0lBQ0Q7SUFFRDs7Ozs7OztzREFJOEJySyxHQUFHO0lBQUE7O0lBQy9CLFVBQUlBLENBQUMsQ0FBQzFDLElBQUYsS0FBVyxTQUFmLEVBQTBCO0lBQ3hCLGFBQUsrRSxRQUFMLENBQWN3RywwQkFBZCxDQUF5QyxPQUF6QyxFQUFrRCxLQUFLb0Isa0JBQXZEO0lBQ0QsT0FGRCxNQUVPO0lBQ0w5QixRQUFBQSxnQ0FBZ0MsQ0FBQzZELE9BQWpDLENBQXlDLFVBQUMxTyxJQUFELEVBQVU7SUFDakQsVUFBQSxNQUFJLENBQUMrRSxRQUFMLENBQWMwRyxrQ0FBZCxDQUFpRHpMLElBQWpELEVBQXVELE1BQUksQ0FBQzJNLGtCQUE1RDtJQUNELFNBRkQ7SUFHRDtJQUNGO0lBRUQ7Ozs7a0RBQzBCO0lBQUE7O0lBQ3hCL0IsTUFBQUEsc0JBQXNCLENBQUM4RCxPQUF2QixDQUErQixVQUFDMU8sSUFBRCxFQUFVO0lBQ3ZDLFFBQUEsTUFBSSxDQUFDK0UsUUFBTCxDQUFjeUcsNEJBQWQsQ0FBMkN4TCxJQUEzQyxFQUFpRCxNQUFJLENBQUN5TSxnQkFBdEQ7SUFDRCxPQUZEO0lBR0EsV0FBSzFILFFBQUwsQ0FBY3lHLDRCQUFkLENBQTJDLE9BQTNDLEVBQW9ELEtBQUtxQixhQUF6RDtJQUNBLFdBQUs5SCxRQUFMLENBQWN5Ryw0QkFBZCxDQUEyQyxNQUEzQyxFQUFtRCxLQUFLdUIsWUFBeEQ7O0lBRUEsVUFBSSxLQUFLaEksUUFBTCxDQUFja0csV0FBZCxFQUFKLEVBQWlDO0lBQy9CLGFBQUtsRyxRQUFMLENBQWM2Ryx1QkFBZCxDQUFzQyxLQUFLcUIsY0FBM0M7SUFDRDtJQUNGO0lBRUQ7Ozs7MERBQ2tDO0lBQUE7O0lBQ2hDLFdBQUtsSSxRQUFMLENBQWN5Ryw0QkFBZCxDQUEyQyxPQUEzQyxFQUFvRCxLQUFLbUIsa0JBQXpEO0lBQ0E5QixNQUFBQSxnQ0FBZ0MsQ0FBQzZELE9BQWpDLENBQXlDLFVBQUMxTyxJQUFELEVBQVU7SUFDakQsUUFBQSxNQUFJLENBQUMrRSxRQUFMLENBQWMyRyxvQ0FBZCxDQUFtRDFMLElBQW5ELEVBQXlELE1BQUksQ0FBQzJNLGtCQUE5RDtJQUNELE9BRkQ7SUFHRDtJQUVEOzs7O3lDQUNpQjtJQUFBOztJQUFBLFVBQ1J6RixVQURRLEdBQ0c2RCxtQkFESCxDQUNSN0QsT0FEUTtJQUVmOUcsTUFBQUEsTUFBTSxDQUFDdU8sSUFBUCxDQUFZekgsVUFBWixFQUFxQndILE9BQXJCLENBQTZCLFVBQUNFLENBQUQsRUFBTztJQUNsQyxZQUFJQSxDQUFDLENBQUNDLE9BQUYsQ0FBVSxNQUFWLE1BQXNCLENBQTFCLEVBQTZCO0lBQzNCLFVBQUEsTUFBSSxDQUFDOUosUUFBTCxDQUFjOEcsaUJBQWQsQ0FBZ0MzRSxVQUFPLENBQUMwSCxDQUFELENBQXZDLEVBQTRDLElBQTVDO0lBQ0Q7SUFDRixPQUpEO0lBS0Q7SUFFRDs7Ozs7OztrQ0FJVWxNLEdBQUc7SUFBQTs7SUFDWCxVQUFJLEtBQUtxQyxRQUFMLENBQWNvRyxpQkFBZCxFQUFKLEVBQXVDO0lBQ3JDO0lBQ0Q7O0lBRUQsVUFBTTJELGVBQWUsR0FBRyxLQUFLekMsZ0JBQTdCOztJQUNBLFVBQUl5QyxlQUFlLENBQUNuQixXQUFwQixFQUFpQztJQUMvQjtJQUNELE9BUlU7OztJQVdYLFVBQU1vQix1QkFBdUIsR0FBRyxLQUFLckIsd0JBQXJDO0lBQ0EsVUFBTXNCLGlCQUFpQixHQUFHRCx1QkFBdUIsSUFBSXJNLENBQUMsS0FBS3lDLFNBQWpDLElBQThDNEosdUJBQXVCLENBQUMvTyxJQUF4QixLQUFpQzBDLENBQUMsQ0FBQzFDLElBQTNHOztJQUNBLFVBQUlnUCxpQkFBSixFQUF1QjtJQUNyQjtJQUNEOztJQUVERixNQUFBQSxlQUFlLENBQUNuQixXQUFoQixHQUE4QixJQUE5QjtJQUNBbUIsTUFBQUEsZUFBZSxDQUFDZCxjQUFoQixHQUFpQ3RMLENBQUMsS0FBS3lDLFNBQXZDO0lBQ0EySixNQUFBQSxlQUFlLENBQUNmLGVBQWhCLEdBQWtDckwsQ0FBbEM7SUFDQW9NLE1BQUFBLGVBQWUsQ0FBQ2pCLHFCQUFoQixHQUF3Q2lCLGVBQWUsQ0FBQ2QsY0FBaEIsR0FBaUMsS0FBakMsR0FBeUN0TCxDQUFDLEtBQUt5QyxTQUFOLEtBQy9FekMsQ0FBQyxDQUFDMUMsSUFBRixLQUFXLFdBQVgsSUFBMEIwQyxDQUFDLENBQUMxQyxJQUFGLEtBQVcsWUFBckMsSUFBcUQwQyxDQUFDLENBQUMxQyxJQUFGLEtBQVcsYUFEZSxDQUFqRjtJQUlBLFVBQU1pUCxpQkFBaUIsR0FBR3ZNLENBQUMsS0FBS3lDLFNBQU4sSUFBbUIyRixnQkFBZ0IsQ0FBQ25CLE1BQWpCLEdBQTBCLENBQTdDLElBQWtEbUIsZ0JBQWdCLENBQUNvRSxJQUFqQixDQUMxRSxVQUFDOU0sTUFBRDtJQUFBLGVBQVksTUFBSSxDQUFDMkMsUUFBTCxDQUFjdUcsbUJBQWQsQ0FBa0NsSixNQUFsQyxDQUFaO0lBQUEsT0FEMEUsQ0FBNUU7O0lBRUEsVUFBSTZNLGlCQUFKLEVBQXVCO0lBQ3JCO0lBQ0EsYUFBS0UscUJBQUw7SUFDQTtJQUNEOztJQUVELFVBQUl6TSxDQUFDLEtBQUt5QyxTQUFWLEVBQXFCO0lBQ25CMkYsUUFBQUEsZ0JBQWdCLENBQUNzRSxJQUFqQjtJQUFzQjtJQUE2QjFNLFFBQUFBLENBQUMsQ0FBQ04sTUFBckQ7SUFDQSxhQUFLaU4sNkJBQUwsQ0FBbUMzTSxDQUFuQztJQUNEOztJQUVEb00sTUFBQUEsZUFBZSxDQUFDaEIsb0JBQWhCLEdBQXVDLEtBQUt3Qix1QkFBTCxDQUE2QjVNLENBQTdCLENBQXZDOztJQUNBLFVBQUlvTSxlQUFlLENBQUNoQixvQkFBcEIsRUFBMEM7SUFDeEMsYUFBS3lCLGtCQUFMO0lBQ0Q7O0lBRURuQixNQUFBQSxxQkFBcUIsQ0FBQyxZQUFNO0lBQzFCO0lBQ0F0RCxRQUFBQSxnQkFBZ0IsR0FBRyxFQUFuQjs7SUFFQSxZQUFJLENBQUNnRSxlQUFlLENBQUNoQixvQkFBakIsSUFBeUNwTCxDQUFDLEtBQUt5QyxTQUEvQyxLQUE2RHpDLENBQUMsQ0FBQ3pELEdBQUYsS0FBVSxHQUFWLElBQWlCeUQsQ0FBQyxDQUFDOE0sT0FBRixLQUFjLEVBQTVGLENBQUosRUFBcUc7SUFDbkc7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0FWLFVBQUFBLGVBQWUsQ0FBQ2hCLG9CQUFoQixHQUF1QyxNQUFJLENBQUN3Qix1QkFBTCxDQUE2QjVNLENBQTdCLENBQXZDOztJQUNBLGNBQUlvTSxlQUFlLENBQUNoQixvQkFBcEIsRUFBMEM7SUFDeEMsWUFBQSxNQUFJLENBQUN5QixrQkFBTDtJQUNEO0lBQ0Y7O0lBRUQsWUFBSSxDQUFDVCxlQUFlLENBQUNoQixvQkFBckIsRUFBMkM7SUFDekM7SUFDQSxVQUFBLE1BQUksQ0FBQ3pCLGdCQUFMLEdBQXdCLE1BQUksQ0FBQ0MsdUJBQUwsRUFBeEI7SUFDRDtJQUNGLE9BckJvQixDQUFyQjtJQXNCRDtJQUVEOzs7Ozs7O2dEQUl3QjVKLEdBQUc7SUFDekIsYUFBUUEsQ0FBQyxLQUFLeUMsU0FBTixJQUFtQnpDLENBQUMsQ0FBQzFDLElBQUYsS0FBVyxTQUEvQixHQUE0QyxLQUFLK0UsUUFBTCxDQUFjbUcsZUFBZCxFQUE1QyxHQUE4RSxJQUFyRjtJQUNEO0lBRUQ7Ozs7OztpQ0FHU3BKLE9BQU87SUFDZCxXQUFLNEssU0FBTCxDQUFlNUssS0FBZjtJQUNEO0lBRUQ7Ozs7NkNBQ3FCO0lBQUE7O0lBQUEsbUNBQ29DaUosbUJBQW1CLENBQUM3RCxPQUR4RDtJQUFBLFVBQ1pLLHNCQURZLDBCQUNaQSxzQkFEWTtJQUFBLFVBQ1lDLG9CQURaLDBCQUNZQSxvQkFEWjtJQUFBLG1DQUVzQnVELG1CQUFtQixDQUFDbkUsVUFGMUM7SUFBQSxVQUVaSyxlQUZZLDBCQUVaQSxlQUZZO0lBQUEsVUFFS0QsYUFGTCwwQkFFS0EsYUFGTDtJQUFBLFVBR1pZLHVCQUhZLEdBR2VtRCxtQkFBbUIsQ0FBQ3RELE9BSG5DLENBR1pHLHVCQUhZO0lBS25CLFdBQUt5RyxlQUFMO0lBRUEsVUFBSW9CLGNBQWMsR0FBRyxFQUFyQjtJQUNBLFVBQUlDLFlBQVksR0FBRyxFQUFuQjs7SUFFQSxVQUFJLENBQUMsS0FBSzNLLFFBQUwsQ0FBY2tHLFdBQWQsRUFBTCxFQUFrQztJQUFBLG9DQUNELEtBQUswRSw0QkFBTCxFQURDO0lBQUEsWUFDekJDLFVBRHlCLHlCQUN6QkEsVUFEeUI7SUFBQSxZQUNiQyxRQURhLHlCQUNiQSxRQURhOztJQUVoQ0osUUFBQUEsY0FBYyxhQUFNRyxVQUFVLENBQUMzRixDQUFqQixpQkFBeUIyRixVQUFVLENBQUMxRixDQUFwQyxPQUFkO0lBQ0F3RixRQUFBQSxZQUFZLGFBQU1HLFFBQVEsQ0FBQzVGLENBQWYsaUJBQXVCNEYsUUFBUSxDQUFDM0YsQ0FBaEMsT0FBWjtJQUNEOztJQUVELFdBQUtuRixRQUFMLENBQWM4RyxpQkFBZCxDQUFnQ3RFLHNCQUFoQyxFQUF3RGtJLGNBQXhEO0lBQ0EsV0FBSzFLLFFBQUwsQ0FBYzhHLGlCQUFkLENBQWdDckUsb0JBQWhDLEVBQXNEa0ksWUFBdEQsRUFqQm1COztJQW1CbkJwQixNQUFBQSxZQUFZLENBQUMsS0FBS2pCLGdCQUFOLENBQVo7SUFDQWlCLE1BQUFBLFlBQVksQ0FBQyxLQUFLaEIsMkJBQU4sQ0FBWjtJQUNBLFdBQUt3QywyQkFBTDtJQUNBLFdBQUsvSyxRQUFMLENBQWNzRyxXQUFkLENBQTBCcEUsZUFBMUIsRUF0Qm1COztJQXlCbkIsV0FBS2xDLFFBQUwsQ0FBYytHLG1CQUFkO0lBQ0EsV0FBSy9HLFFBQUwsQ0FBY3FHLFFBQWQsQ0FBdUJwRSxhQUF2QjtJQUNBLFdBQUtxRyxnQkFBTCxHQUF3QjBDLFVBQVUsQ0FBQztJQUFBLGVBQU0sT0FBSSxDQUFDdkMsd0JBQUwsRUFBTjtJQUFBLE9BQUQsRUFBd0M1Rix1QkFBeEMsQ0FBbEM7SUFDRDtJQUVEOzs7Ozs7O3VEQUkrQjtJQUFBLGtDQUNvQixLQUFLeUUsZ0JBRHpCO0lBQUEsVUFDdEIwQixlQURzQix5QkFDdEJBLGVBRHNCO0lBQUEsVUFDTEYscUJBREsseUJBQ0xBLHFCQURLO0lBRzdCLFVBQUkrQixVQUFKOztJQUNBLFVBQUkvQixxQkFBSixFQUEyQjtJQUN6QitCLFFBQUFBLFVBQVUsR0FBRy9GLHdCQUF3QjtJQUNuQztJQUF1QmtFLFFBQUFBLGVBRFksRUFFbkMsS0FBS2hKLFFBQUwsQ0FBY2dILG1CQUFkLEVBRm1DLEVBRUUsS0FBS2hILFFBQUwsQ0FBYytHLG1CQUFkLEVBRkYsQ0FBckM7SUFJRCxPQUxELE1BS087SUFDTDhELFFBQUFBLFVBQVUsR0FBRztJQUNYM0YsVUFBQUEsQ0FBQyxFQUFFLEtBQUtpQyxNQUFMLENBQVlDLEtBQVosR0FBb0IsQ0FEWjtJQUVYakMsVUFBQUEsQ0FBQyxFQUFFLEtBQUtnQyxNQUFMLENBQVlFLE1BQVosR0FBcUI7SUFGYixTQUFiO0lBSUQsT0FkNEI7OztJQWdCN0J3RCxNQUFBQSxVQUFVLEdBQUc7SUFDWDNGLFFBQUFBLENBQUMsRUFBRTJGLFVBQVUsQ0FBQzNGLENBQVgsR0FBZ0IsS0FBS3NDLFlBQUwsR0FBb0IsQ0FENUI7SUFFWHJDLFFBQUFBLENBQUMsRUFBRTBGLFVBQVUsQ0FBQzFGLENBQVgsR0FBZ0IsS0FBS3FDLFlBQUwsR0FBb0I7SUFGNUIsT0FBYjtJQUtBLFVBQU1zRCxRQUFRLEdBQUc7SUFDZjVGLFFBQUFBLENBQUMsRUFBRyxLQUFLaUMsTUFBTCxDQUFZQyxLQUFaLEdBQW9CLENBQXJCLEdBQTJCLEtBQUtJLFlBQUwsR0FBb0IsQ0FEbkM7SUFFZnJDLFFBQUFBLENBQUMsRUFBRyxLQUFLZ0MsTUFBTCxDQUFZRSxNQUFaLEdBQXFCLENBQXRCLEdBQTRCLEtBQUtHLFlBQUwsR0FBb0I7SUFGcEMsT0FBakI7SUFLQSxhQUFPO0lBQUNxRCxRQUFBQSxVQUFVLEVBQVZBLFVBQUQ7SUFBYUMsUUFBQUEsUUFBUSxFQUFSQTtJQUFiLE9BQVA7SUFDRDtJQUVEOzs7O3lEQUNpQztJQUFBOztJQUMvQjtJQUNBO0lBRitCLFVBR3hCNUksZUFId0IsR0FHTDhELG1CQUFtQixDQUFDbkUsVUFIZixDQUd4QkssZUFId0I7SUFBQSxtQ0FJYSxLQUFLb0YsZ0JBSmxCO0lBQUEsVUFJeEJ1QixvQkFKd0IsMEJBSXhCQSxvQkFKd0I7SUFBQSxVQUlGRCxXQUpFLDBCQUlGQSxXQUpFO0lBSy9CLFVBQU1xQyxrQkFBa0IsR0FBR3BDLG9CQUFvQixJQUFJLENBQUNELFdBQXBEOztJQUVBLFVBQUlxQyxrQkFBa0IsSUFBSSxLQUFLekMsNEJBQS9CLEVBQTZEO0lBQzNELGFBQUt1QywyQkFBTDtJQUNBLGFBQUsvSyxRQUFMLENBQWNxRyxRQUFkLENBQXVCbkUsZUFBdkI7SUFDQSxhQUFLcUcsMkJBQUwsR0FBbUN5QyxVQUFVLENBQUMsWUFBTTtJQUNsRCxVQUFBLE9BQUksQ0FBQ2hMLFFBQUwsQ0FBY3NHLFdBQWQsQ0FBMEJwRSxlQUExQjtJQUNELFNBRjRDLEVBRTFDUSxPQUFPLENBQUNJLGtCQUZrQyxDQUE3QztJQUdEO0lBQ0Y7SUFFRDs7OztzREFDOEI7SUFBQSxVQUNyQmIsYUFEcUIsR0FDSitELG1CQUFtQixDQUFDbkUsVUFEaEIsQ0FDckJJLGFBRHFCO0lBRTVCLFdBQUtqQyxRQUFMLENBQWNzRyxXQUFkLENBQTBCckUsYUFBMUI7SUFDQSxXQUFLdUcsNEJBQUwsR0FBb0MsS0FBcEM7SUFDQSxXQUFLeEksUUFBTCxDQUFjK0csbUJBQWQ7SUFDRDs7O2dEQUV1QjtJQUFBOztJQUN0QixXQUFLNEIsd0JBQUwsR0FBZ0MsS0FBS3JCLGdCQUFMLENBQXNCMEIsZUFBdEQ7SUFDQSxXQUFLMUIsZ0JBQUwsR0FBd0IsS0FBS0MsdUJBQUwsRUFBeEIsQ0FGc0I7SUFJdEI7O0lBQ0F5RCxNQUFBQSxVQUFVLENBQUM7SUFBQSxlQUFNLE9BQUksQ0FBQ3JDLHdCQUFMLEdBQWdDdkksU0FBdEM7SUFBQSxPQUFELEVBQWtENEYsbUJBQW1CLENBQUN0RCxPQUFwQixDQUE0QkssWUFBOUUsQ0FBVjtJQUNEO0lBRUQ7Ozs7OztzQ0FHYztJQUFBOztJQUNaLFVBQU1nSCxlQUFlLEdBQUcsS0FBS3pDLGdCQUE3QixDQURZOztJQUdaLFVBQUksQ0FBQ3lDLGVBQWUsQ0FBQ25CLFdBQXJCLEVBQWtDO0lBQ2hDO0lBQ0Q7O0lBRUQsVUFBTXNDLEtBQUs7SUFBRztJQUFxQyxlQUFjLEVBQWQsRUFBa0JuQixlQUFsQixDQUFuRDs7SUFFQSxVQUFJQSxlQUFlLENBQUNkLGNBQXBCLEVBQW9DO0lBQ2xDSSxRQUFBQSxxQkFBcUIsQ0FBQztJQUFBLGlCQUFNLE9BQUksQ0FBQzhCLG9CQUFMLENBQTBCRCxLQUExQixDQUFOO0lBQUEsU0FBRCxDQUFyQjtJQUNBLGFBQUtkLHFCQUFMO0lBQ0QsT0FIRCxNQUdPO0lBQ0wsYUFBS1YsK0JBQUw7SUFDQUwsUUFBQUEscUJBQXFCLENBQUMsWUFBTTtJQUMxQixVQUFBLE9BQUksQ0FBQy9CLGdCQUFMLENBQXNCdUIsb0JBQXRCLEdBQTZDLElBQTdDOztJQUNBLFVBQUEsT0FBSSxDQUFDc0Msb0JBQUwsQ0FBMEJELEtBQTFCOztJQUNBLFVBQUEsT0FBSSxDQUFDZCxxQkFBTDtJQUNELFNBSm9CLENBQXJCO0lBS0Q7SUFDRjs7O3FDQUVZO0lBQ1gsV0FBS3ZDLFdBQUw7SUFDRDtJQUVEOzs7Ozs7O21EQUlvRTtJQUFBLFVBQTlDaUIscUJBQThDLFFBQTlDQSxxQkFBOEM7SUFBQSxVQUF2QkMsb0JBQXVCLFFBQXZCQSxvQkFBdUI7O0lBQ2xFLFVBQUlELHFCQUFxQixJQUFJQyxvQkFBN0IsRUFBbUQ7SUFDakQsYUFBS0wsOEJBQUw7SUFDRDtJQUNGOzs7aUNBRVE7SUFBQTs7SUFDUCxVQUFJLEtBQUt4QixZQUFULEVBQXVCO0lBQ3JCa0UsUUFBQUEsb0JBQW9CLENBQUMsS0FBS2xFLFlBQU4sQ0FBcEI7SUFDRDs7SUFDRCxXQUFLQSxZQUFMLEdBQW9CbUMscUJBQXFCLENBQUMsWUFBTTtJQUM5QyxRQUFBLE9BQUksQ0FBQ0MsZUFBTDs7SUFDQSxRQUFBLE9BQUksQ0FBQ3BDLFlBQUwsR0FBb0IsQ0FBcEI7SUFDRCxPQUh3QyxDQUF6QztJQUlEO0lBRUQ7Ozs7MENBQ2tCO0lBQUE7O0lBQ2hCLFdBQUtDLE1BQUwsR0FBYyxLQUFLbkgsUUFBTCxDQUFjK0csbUJBQWQsRUFBZDtJQUNBLFVBQU1zRSxNQUFNLEdBQUd4TixJQUFJLENBQUN5TixHQUFMLENBQVMsS0FBS25FLE1BQUwsQ0FBWUUsTUFBckIsRUFBNkIsS0FBS0YsTUFBTCxDQUFZQyxLQUF6QyxDQUFmLENBRmdCO0lBS2hCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBQ0EsVUFBTW1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtJQUM3QixZQUFNQyxVQUFVLEdBQUczTixJQUFJLENBQUM0TixJQUFMLENBQVU1TixJQUFJLENBQUM2TixHQUFMLENBQVMsT0FBSSxDQUFDdkUsTUFBTCxDQUFZQyxLQUFyQixFQUE0QixDQUE1QixJQUFpQ3ZKLElBQUksQ0FBQzZOLEdBQUwsQ0FBUyxPQUFJLENBQUN2RSxNQUFMLENBQVlFLE1BQXJCLEVBQTZCLENBQTdCLENBQTNDLENBQW5CO0lBQ0EsZUFBT21FLFVBQVUsR0FBR3hGLG1CQUFtQixDQUFDdEQsT0FBcEIsQ0FBNEJDLE9BQWhEO0lBQ0QsT0FIRDs7SUFLQSxXQUFLOEUsVUFBTCxHQUFrQixLQUFLekgsUUFBTCxDQUFja0csV0FBZCxLQUE4Qm1GLE1BQTlCLEdBQXVDRSxnQkFBZ0IsRUFBekUsQ0FmZ0I7O0lBa0JoQixXQUFLL0QsWUFBTCxHQUFvQjNKLElBQUksQ0FBQ0MsS0FBTCxDQUFXdU4sTUFBTSxHQUFHckYsbUJBQW1CLENBQUN0RCxPQUFwQixDQUE0QkUsb0JBQWhELENBQXBCO0lBQ0EsV0FBS3lGLFFBQUwsR0FBZ0IsS0FBS1osVUFBTCxHQUFrQixLQUFLRCxZQUF2QztJQUVBLFdBQUttRSxvQkFBTDtJQUNEO0lBRUQ7Ozs7K0NBQ3VCO0lBQUEsbUNBR2pCM0YsbUJBQW1CLENBQUM3RCxPQUhIO0lBQUEsVUFFbkJHLFdBRm1CLDBCQUVuQkEsV0FGbUI7SUFBQSxVQUVORixRQUZNLDBCQUVOQSxRQUZNO0lBQUEsVUFFSUMsT0FGSiwwQkFFSUEsT0FGSjtJQUFBLFVBRWFFLFlBRmIsMEJBRWFBLFlBRmI7SUFLckIsV0FBS3ZDLFFBQUwsQ0FBYzhHLGlCQUFkLENBQWdDeEUsV0FBaEMsWUFBZ0QsS0FBS2tGLFlBQXJEO0lBQ0EsV0FBS3hILFFBQUwsQ0FBYzhHLGlCQUFkLENBQWdDdkUsWUFBaEMsRUFBOEMsS0FBSzhGLFFBQW5EOztJQUVBLFVBQUksS0FBS3JJLFFBQUwsQ0FBY2tHLFdBQWQsRUFBSixFQUFpQztJQUMvQixhQUFLa0MsZ0JBQUwsR0FBd0I7SUFDdEIvQyxVQUFBQSxJQUFJLEVBQUV4SCxJQUFJLENBQUMrTixLQUFMLENBQVksS0FBS3pFLE1BQUwsQ0FBWUMsS0FBWixHQUFvQixDQUFyQixHQUEyQixLQUFLSSxZQUFMLEdBQW9CLENBQTFELENBRGdCO0lBRXRCakMsVUFBQUEsR0FBRyxFQUFFMUgsSUFBSSxDQUFDK04sS0FBTCxDQUFZLEtBQUt6RSxNQUFMLENBQVlFLE1BQVosR0FBcUIsQ0FBdEIsR0FBNEIsS0FBS0csWUFBTCxHQUFvQixDQUEzRDtJQUZpQixTQUF4QjtJQUtBLGFBQUt4SCxRQUFMLENBQWM4RyxpQkFBZCxDQUFnQzFFLFFBQWhDLFlBQTZDLEtBQUtnRyxnQkFBTCxDQUFzQi9DLElBQW5FO0lBQ0EsYUFBS3JGLFFBQUwsQ0FBYzhHLGlCQUFkLENBQWdDekUsT0FBaEMsWUFBNEMsS0FBSytGLGdCQUFMLENBQXNCN0MsR0FBbEU7SUFDRDtJQUNGO0lBRUQ7Ozs7cUNBQ2FzRyxXQUFXO0lBQUEsVUFDZjlKLFNBRGUsR0FDRmlFLG1CQUFtQixDQUFDbkUsVUFEbEIsQ0FDZkUsU0FEZTs7SUFFdEIsVUFBSThKLFNBQUosRUFBZTtJQUNiLGFBQUs3TCxRQUFMLENBQWNxRyxRQUFkLENBQXVCdEUsU0FBdkI7SUFDRCxPQUZELE1BRU87SUFDTCxhQUFLL0IsUUFBTCxDQUFjc0csV0FBZCxDQUEwQnZFLFNBQTFCO0lBQ0Q7SUFDRjs7O3NDQUVhO0lBQUE7O0lBQ1pzSCxNQUFBQSxxQkFBcUIsQ0FBQztJQUFBLGVBQ3BCLE9BQUksQ0FBQ3JKLFFBQUwsQ0FBY3FHLFFBQWQsQ0FBdUJMLG1CQUFtQixDQUFDbkUsVUFBcEIsQ0FBK0JHLFVBQXRELENBRG9CO0lBQUEsT0FBRCxDQUFyQjtJQUVEOzs7cUNBRVk7SUFBQTs7SUFDWHFILE1BQUFBLHFCQUFxQixDQUFDO0lBQUEsZUFDcEIsT0FBSSxDQUFDckosUUFBTCxDQUFjc0csV0FBZCxDQUEwQk4sbUJBQW1CLENBQUNuRSxVQUFwQixDQUErQkcsVUFBekQsQ0FEb0I7SUFBQSxPQUFELENBQXJCO0lBRUQ7Ozs7TUE1Z0IrQmxDOztJQ3JEbEM7Ozs7UUFHTWdNOzs7OztJQUNKO0lBQ0EsdUJBQXFCO0lBQUE7O0lBQUE7O0lBQUE7O0lBQUEsc0NBQU52TyxJQUFNO0lBQU5BLE1BQUFBLElBQU07SUFBQTs7SUFDbkIsd0lBQVNBLElBQVQ7SUFFQTs7SUFDQSxVQUFLVixRQUFMLEdBQWdCLEtBQWhCO0lBRUE7O0lBQ0EsVUFBS2tQLFVBQUw7SUFQbUI7SUFRcEI7SUFFRDs7Ozs7Ozs7OztJQXdEQTs7Ozs7Ozt3Q0FPZ0I7SUFDZCxXQUFLeEwsV0FBTCxDQUFpQnlMLFlBQWpCLENBQThCLEtBQUtELFVBQW5DO0lBQ0Q7OzttQ0FFVTtJQUNULFdBQUt4TCxXQUFMLENBQWlCMEwsUUFBakI7SUFDRDs7O3FDQUVZO0lBQ1gsV0FBSzFMLFdBQUwsQ0FBaUIyTCxVQUFqQjtJQUNEOzs7aUNBRVE7SUFDUCxXQUFLM0wsV0FBTCxDQUFpQjRILE1BQWpCO0lBQ0Q7SUFFRDs7Ozs7OzsrQ0FJdUI7SUFDckIsYUFBTyxJQUFJbkMsbUJBQUosQ0FBd0I4RixTQUFTLENBQUNLLGFBQVYsQ0FBd0IsSUFBeEIsQ0FBeEIsQ0FBUDtJQUNEO0lBRUQ7Ozs7NkNBQ3FCO0lBQ25CLFdBQUtOLFNBQUwsR0FBaUIsMEJBQTBCLEtBQUt4TCxLQUFMLENBQVcrTCxPQUF0RDtJQUNEOzs7O0lBN0NEOzRCQUNnQjtJQUNkLGFBQU8sS0FBS0wsVUFBWjtJQUNEO0lBRUQ7OzBCQUNjRixXQUFXO0lBQ3ZCLFdBQUtFLFVBQUwsR0FBa0I3UCxPQUFPLENBQUMyUCxTQUFELENBQXpCO0lBQ0EsV0FBS1EsYUFBTDtJQUNEOzs7aUNBakRlbk0sTUFBc0M7SUFBQSxxRkFBSixFQUFJO0lBQUEsa0NBQS9CZ0csV0FBK0I7SUFBQSxVQUEvQkEsV0FBK0IsaUNBQWpCOUYsU0FBaUI7O0lBQ3BELFVBQU1rTSxNQUFNLEdBQUcsSUFBSVIsU0FBSixDQUFjNUwsSUFBZCxDQUFmLENBRG9EOztJQUdwRCxVQUFJZ0csV0FBVyxLQUFLOUYsU0FBcEIsRUFBK0I7SUFDN0JrTSxRQUFBQSxNQUFNLENBQUNULFNBQVA7SUFBbUI7SUFBd0IzRixRQUFBQSxXQUEzQztJQUNEOztJQUNELGFBQU9vRyxNQUFQO0lBQ0Q7SUFFRDs7Ozs7OztzQ0FJcUJDLFVBQVU7SUFDN0IsVUFBTUMsT0FBTyxHQUFHQyxrQkFBQSxDQUF3QkMsV0FBVyxDQUFDQyxTQUFwQyxDQUFoQjtJQUVBLGFBQU87SUFDTDFHLFFBQUFBLHNCQUFzQixFQUFFO0lBQUEsaUJBQU13RyxvQkFBQSxDQUEwQmhULE1BQTFCLENBQU47SUFBQSxTQURuQjtJQUVMeU0sUUFBQUEsV0FBVyxFQUFFO0lBQUEsaUJBQU1xRyxRQUFRLENBQUNWLFNBQWY7SUFBQSxTQUZSO0lBR0wxRixRQUFBQSxlQUFlLEVBQUU7SUFBQSxpQkFBTW9HLFFBQVEsQ0FBQ2xNLEtBQVQsQ0FBZW1NLE9BQWYsRUFBd0IsU0FBeEIsQ0FBTjtJQUFBLFNBSFo7SUFJTHBHLFFBQUFBLGlCQUFpQixFQUFFO0lBQUEsaUJBQU1tRyxRQUFRLENBQUMxUCxRQUFmO0lBQUEsU0FKZDtJQUtMd0osUUFBQUEsUUFBUSxFQUFFLGtCQUFDM0UsU0FBRDtJQUFBLGlCQUFlNkssUUFBUSxDQUFDbE0sS0FBVCxDQUFldU0sU0FBZixDQUF5QnROLEdBQXpCLENBQTZCb0MsU0FBN0IsQ0FBZjtJQUFBLFNBTEw7SUFNTDRFLFFBQUFBLFdBQVcsRUFBRSxxQkFBQzVFLFNBQUQ7SUFBQSxpQkFBZTZLLFFBQVEsQ0FBQ2xNLEtBQVQsQ0FBZXVNLFNBQWYsQ0FBeUJqSixNQUF6QixDQUFnQ2pDLFNBQWhDLENBQWY7SUFBQSxTQU5SO0lBT0w2RSxRQUFBQSxtQkFBbUIsRUFBRSw2QkFBQ2xKLE1BQUQ7SUFBQSxpQkFBWWtQLFFBQVEsQ0FBQ2xNLEtBQVQsQ0FBZXdNLFFBQWYsQ0FBd0J4UCxNQUF4QixDQUFaO0lBQUEsU0FQaEI7SUFRTG1KLFFBQUFBLDBCQUEwQixFQUFFLG9DQUFDM0YsT0FBRCxFQUFVQyxPQUFWO0lBQUEsaUJBQzFCeUwsUUFBUSxDQUFDbE0sS0FBVCxDQUFlVSxnQkFBZixDQUFnQ0YsT0FBaEMsRUFBeUNDLE9BQXpDLEVBQWtEMkwsY0FBQSxFQUFsRCxDQUQwQjtJQUFBLFNBUnZCO0lBVUxoRyxRQUFBQSw0QkFBNEIsRUFBRSxzQ0FBQzVGLE9BQUQsRUFBVUMsT0FBVjtJQUFBLGlCQUM1QnlMLFFBQVEsQ0FBQ2xNLEtBQVQsQ0FBZVcsbUJBQWYsQ0FBbUNILE9BQW5DLEVBQTRDQyxPQUE1QyxFQUFxRDJMLGNBQUEsRUFBckQsQ0FENEI7SUFBQSxTQVZ6QjtJQVlML0YsUUFBQUEsa0NBQWtDLEVBQUUsNENBQUM3RixPQUFELEVBQVVDLE9BQVY7SUFBQSxpQkFDbENRLFFBQVEsQ0FBQ3dMLGVBQVQsQ0FBeUIvTCxnQkFBekIsQ0FBMENGLE9BQTFDLEVBQW1EQyxPQUFuRCxFQUE0RDJMLGNBQUEsRUFBNUQsQ0FEa0M7SUFBQSxTQVovQjtJQWNMOUYsUUFBQUEsb0NBQW9DLEVBQUUsOENBQUM5RixPQUFELEVBQVVDLE9BQVY7SUFBQSxpQkFDcENRLFFBQVEsQ0FBQ3dMLGVBQVQsQ0FBeUI5TCxtQkFBekIsQ0FBNkNILE9BQTdDLEVBQXNEQyxPQUF0RCxFQUErRDJMLGNBQUEsRUFBL0QsQ0FEb0M7SUFBQSxTQWRqQztJQWdCTDdGLFFBQUFBLHFCQUFxQixFQUFFLCtCQUFDOUYsT0FBRDtJQUFBLGlCQUFhckgsTUFBTSxDQUFDc0gsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NELE9BQWxDLENBQWI7SUFBQSxTQWhCbEI7SUFpQkwrRixRQUFBQSx1QkFBdUIsRUFBRSxpQ0FBQy9GLE9BQUQ7SUFBQSxpQkFBYXJILE1BQU0sQ0FBQ3VILG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRixPQUFyQyxDQUFiO0lBQUEsU0FqQnBCO0lBa0JMZ0csUUFBQUEsaUJBQWlCLEVBQUUsMkJBQUNuRixPQUFELEVBQVVDLEtBQVY7SUFBQSxpQkFBb0IySyxRQUFRLENBQUNsTSxLQUFULENBQWUwTSxLQUFmLENBQXFCQyxXQUFyQixDQUFpQ3JMLE9BQWpDLEVBQTBDQyxLQUExQyxDQUFwQjtJQUFBLFNBbEJkO0lBbUJMbUYsUUFBQUEsbUJBQW1CLEVBQUU7SUFBQSxpQkFBTXdGLFFBQVEsQ0FBQ2xNLEtBQVQsQ0FBZTRNLHFCQUFmLEVBQU47SUFBQSxTQW5CaEI7SUFvQkxqRyxRQUFBQSxtQkFBbUIsRUFBRTtJQUFBLGlCQUFPO0lBQUM5QixZQUFBQSxDQUFDLEVBQUV6TCxNQUFNLENBQUN5VCxXQUFYO0lBQXdCL0gsWUFBQUEsQ0FBQyxFQUFFMUwsTUFBTSxDQUFDMFQ7SUFBbEMsV0FBUDtJQUFBO0lBcEJoQixPQUFQO0lBc0JEOzs7O01BdkRxQmxOO0lBeUd4Qjs7Ozs7OztRQUtNbU47OztJQUVOOzs7SUFDQUEsb0JBQW9CLENBQUNULFNBQXJCLENBQStCdE0sS0FBL0I7SUFFQTs7Ozs7SUFJQStNLG9CQUFvQixDQUFDVCxTQUFyQixDQUErQmQsU0FBL0I7SUFFQTs7Ozs7SUFJQXVCLG9CQUFvQixDQUFDVCxTQUFyQixDQUErQjlQLFFBQS9COztRQ3JKYXdRLFVBQWI7SUFBQTtJQUFBO0lBQUE7O0lBQUE7SUFBQTtJQUFBLG9DQVN5QkMsR0FUekIsRUFTOEI7SUFDMUIsYUFBT0EsR0FBRyxDQUFDRCxVQUFVLENBQUNiLE9BQVosQ0FBSCxDQUF3QixTQUF4QixDQUFQO0lBQ0Q7SUFYSDtJQUFBO0lBQUEsd0JBQ3VCO0lBQ25CO0lBQ0EsYUFDRWEsVUFBVSxDQUFDRSxRQUFYLEtBQ0NGLFVBQVUsQ0FBQ0UsUUFBWCxHQUFzQmhKLGtCQUFrQixDQUFDbUksV0FBVyxDQUFDQyxTQUFiLENBRHpDLENBREY7SUFJRDtJQVBIOztJQWFFLHNCQUFZMVMsRUFBWixFQUFnQjJFLE9BQWhCLEVBQXlCO0lBQUE7O0lBQUEsbUZBRXJCLFNBQ0U7SUFDRXFILE1BQUFBLHNCQUFzQixFQUFFLGtDQUFNO0lBQzVCLGVBQU9yQyxvQkFBb0IsQ0FBQ25LLE1BQUQsQ0FBM0I7SUFDRCxPQUhIO0lBSUV5TSxNQUFBQSxXQUFXLEVBQUUsdUJBQU07SUFDakIsZUFBTyxLQUFQO0lBQ0QsT0FOSDtJQU9FQyxNQUFBQSxlQUFlLEVBQUUsMkJBQU07SUFDckIsZUFBT2xNLEVBQUUsQ0FBQ3VULEdBQUgsQ0FBT0gsVUFBVSxDQUFDYixPQUFsQixFQUEyQixTQUEzQixDQUFQO0lBQ0QsT0FUSDtJQVVFcEcsTUFBQUEsaUJBQWlCLEVBQUUsNkJBQU07SUFDdkIsZUFBT25NLEVBQUUsQ0FBQzRDLFFBQVY7SUFDRCxPQVpIO0lBYUV3SixNQUFBQSxRQWJGLG9CQWFXM0UsU0FiWCxFQWFzQjtJQUNsQnpILFFBQUFBLEVBQUUsQ0FBQ3dULElBQUgsQ0FBUXhULEVBQUUsQ0FBQ3lULE9BQVgsRUFBb0JoTSxTQUFwQixFQUErQixJQUEvQjtJQUNELE9BZkg7SUFnQkU0RSxNQUFBQSxXQWhCRix1QkFnQmM1RSxTQWhCZCxFQWdCeUI7SUFDckJ6SCxRQUFBQSxFQUFFLENBQUMwVCxPQUFILENBQVcxVCxFQUFFLENBQUN5VCxPQUFkLEVBQXVCaE0sU0FBdkI7SUFDRCxPQWxCSDtJQW1CRTZFLE1BQUFBLG1CQUFtQixFQUFFLDZCQUFBbEosTUFBTTtJQUFBLGVBQUlwRCxFQUFFLENBQUN1VCxHQUFILENBQU9YLFFBQVAsQ0FBZ0J4UCxNQUFoQixDQUFKO0lBQUEsT0FuQjdCO0lBb0JFbUosTUFBQUEsMEJBQTBCLEVBQUUsb0NBQUNySixHQUFELEVBQU0yRCxPQUFOLEVBQWtCO0lBQzVDN0csUUFBQUEsRUFBRSxDQUFDdVQsR0FBSCxDQUFPek0sZ0JBQVAsQ0FBd0I1RCxHQUF4QixFQUE2QjJELE9BQTdCLEVBQXNDcUQsY0FBWSxFQUFsRDtJQUNELE9BdEJIO0lBdUJFc0MsTUFBQUEsNEJBQTRCLEVBQUUsc0NBQUN0SixHQUFELEVBQU0yRCxPQUFOLEVBQWtCO0lBQzlDN0csUUFBQUEsRUFBRSxDQUFDdVQsR0FBSCxDQUFPeE0sbUJBQVAsQ0FBMkI3RCxHQUEzQixFQUFnQzJELE9BQWhDLEVBQXlDcUQsY0FBWSxFQUFyRDtJQUNELE9BekJIO0lBMEJFdUMsTUFBQUEsa0NBQWtDLEVBQUUsNENBQUM3RixPQUFELEVBQVVDLE9BQVY7SUFBQSxlQUNsQ1EsUUFBUSxDQUFDd0wsZUFBVCxDQUF5Qi9MLGdCQUF6QixDQUNFRixPQURGLEVBRUVDLE9BRkYsRUFHRXFELGNBQVksRUFIZCxDQURrQztJQUFBLE9BMUJ0QztJQWdDRXdDLE1BQUFBLG9DQUFvQyxFQUFFLDhDQUFDOUYsT0FBRCxFQUFVQyxPQUFWO0lBQUEsZUFDcENRLFFBQVEsQ0FBQ3dMLGVBQVQsQ0FBeUI5TCxtQkFBekIsQ0FDRUgsT0FERixFQUVFQyxPQUZGLEVBR0VxRCxjQUFZLEVBSGQsQ0FEb0M7SUFBQSxPQWhDeEM7SUFzQ0V5QyxNQUFBQSxxQkFBcUIsRUFBRSwrQkFBQTlGLE9BQU8sRUFBSTtJQUNoQyxlQUFPckgsTUFBTSxDQUFDc0gsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NELE9BQWxDLENBQVA7SUFDRCxPQXhDSDtJQXlDRStGLE1BQUFBLHVCQUF1QixFQUFFLGlDQUFBL0YsT0FBTyxFQUFJO0lBQ2xDLGVBQU9ySCxNQUFNLENBQUN1SCxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0YsT0FBckMsQ0FBUDtJQUNELE9BM0NIO0lBNENFZ0csTUFBQUEsaUJBQWlCLEVBQUUsMkJBQUNuRixPQUFELEVBQVVDLEtBQVYsRUFBb0I7SUFDckMzSCxRQUFBQSxFQUFFLENBQUN3VCxJQUFILENBQVF4VCxFQUFFLENBQUMyVCxNQUFYLEVBQW1Cak0sT0FBbkIsRUFBNEJDLEtBQTVCO0lBQ0QsT0E5Q0g7SUErQ0VtRixNQUFBQSxtQkFBbUIsRUFBRSwrQkFBTTtJQUN6QixlQUFPOU0sRUFBRSxDQUFDdVQsR0FBSCxDQUFPUCxxQkFBUCxFQUFQO0lBQ0QsT0FqREg7SUFrREVqRyxNQUFBQSxtQkFBbUIsRUFBRSwrQkFBTTtJQUN6QixlQUFPO0lBQUU5QixVQUFBQSxDQUFDLEVBQUV6TCxNQUFNLENBQUN5VCxXQUFaO0lBQXlCL0gsVUFBQUEsQ0FBQyxFQUFFMUwsTUFBTSxDQUFDMFQ7SUFBbkMsU0FBUDtJQUNEO0lBcERILEtBREYsRUF1REV2TyxPQXZERixDQUZxQjtJQTREeEI7O0lBekVIO0lBQUEsRUFBZ0NvSCxtQkFBaEM7QUE0RUEsSUFBTyxJQUFNNkgsV0FBVyxHQUFHO0lBQ3pCaFQsRUFBQUEsSUFEeUIsa0JBQ2xCO0lBQ0wsV0FBTztJQUNMNlMsTUFBQUEsT0FBTyxFQUFFLEVBREo7SUFFTEUsTUFBQUEsTUFBTSxFQUFFO0lBRkgsS0FBUDtJQUlELEdBTndCO0lBT3pCRSxFQUFBQSxPQVB5QixxQkFPZjtJQUNSLFNBQUt4QixNQUFMLEdBQWMsSUFBSWUsVUFBSixDQUFlLElBQWYsQ0FBZDtJQUNBLFNBQUtmLE1BQUwsQ0FBWTdMLElBQVo7SUFDRCxHQVZ3QjtJQVd6QnNOLEVBQUFBLGFBWHlCLDJCQVdUO0lBQ2QsU0FBS3pCLE1BQUwsQ0FBWTFMLE9BQVo7SUFDRDtJQWJ3QixDQUFwQjs7O0FDckVQOzs7Ozs7S0FBQTs7O0FBZEEsSUFFQTtJQUNBO0FBQ0FvTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1VBOzs7Ozs7Ozs7S0FBQTs7O0FBZEEsSUFFQTtJQUNBO0FBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FBQTs7O0FBZEEsSUFFQTtJQUNBO0FBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2lCQTs7Ozs7Ozs7OztLQUFBOzs7QUFyQkEsSUFFQTtJQUNBO0FBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNLQTs7Ozs7S0FBQTs7O0FBVEEsSUFFQTtJQUNBO0FBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0tBOztLQUFBOzs7QUFUQSxJQUVBO0lBQ0E7QUFDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0dBOztLQUFBOzs7QUFQQSxJQUVBO0lBQ0E7QUFDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDS0E7Ozs7Ozs7Ozs7OztLQUFBOzs7QUFUQSxJQUVBO0lBQ0E7QUFDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0dBOztLQUFBOzs7QUFQQSxJQUVBO0lBQ0E7QUFDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNjQTs7Ozs7Ozs7O0tBQUE7OztBQWxCQSxJQUVBO0lBQ0E7QUFDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUFBOzs7QUFIQSxJQUVBO0lBQ0E7QUFDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7Ozs7Ozs7Ozs7OztLQUFBOzs7QUFIQSxJQUVBO0lBQ0E7QUFDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDR0E7O0tBQUE7OztBQVBBLElBRUE7SUFDQTtBQUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBQUE7OztBQWJBLElBRUE7SUFDQTtBQUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeUJBLGlCQUFlblUsVUFBVSxDQUFDO0lBQ3hCb1UsRUFBQUEsT0FBTyxFQUFQQSxPQUR3QjtJQUV4QkMsRUFBQUEsb0JBQW9CLEVBQXBCQSxvQkFGd0I7SUFHeEJDLEVBQUFBLFlBQVksRUFBWkEsWUFId0I7SUFJeEJDLEVBQUFBLGFBQWEsRUFBYkEsYUFKd0I7SUFLeEJDLEVBQUFBLFlBQVksRUFBWkEsWUFMd0I7SUFNeEJDLEVBQUFBLGVBQWUsRUFBZkEsZUFOd0I7SUFPeEJDLEVBQUFBLFdBQVcsRUFBWEEsV0FQd0I7SUFReEJDLEVBQUFBLGNBQWMsRUFBZEEsY0FSd0I7SUFTeEJDLEVBQUFBLG9CQUFvQixFQUFwQkEsb0JBVHdCO0lBVXhCQyxFQUFBQSxtQkFBbUIsRUFBbkJBLG1CQVZ3QjtJQVd4QkMsRUFBQUEsa0JBQWtCLEVBQWxCQSxrQkFYd0I7SUFZeEJDLEVBQUFBLGlCQUFpQixFQUFqQkE7SUFad0IsQ0FBRCxDQUF6Qjs7SUN4QkF0VixRQUFRLENBQUNDLE1BQUQsQ0FBUjs7Ozs7Ozs7In0=
