/**
* @module vue-mdc-adaptericon-toggle 0.19.0-beta
* @exports VueMDCIconToggle
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.VueMDCIconToggle = factory());
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

    /* eslint no-unused-vars: [2, {"args": "none"}] */

    /**
     * Adapter for MDC Icon Toggle. Provides an interface for managing
     * - classes
     * - dom
     * - inner text
     * - event handlers
     * - event dispatch
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
    var MDCIconToggleAdapter =
    /*#__PURE__*/
    function () {
      function MDCIconToggleAdapter() {
        _classCallCheck(this, MDCIconToggleAdapter);
      }

      _createClass(MDCIconToggleAdapter, [{
        key: "addClass",

        /** @param {string} className */
        value: function addClass(className) {}
        /** @param {string} className */

      }, {
        key: "removeClass",
        value: function removeClass(className) {}
        /**
         * @param {string} type
         * @param {!EventListener} handler
         */

      }, {
        key: "registerInteractionHandler",
        value: function registerInteractionHandler(type, handler) {}
        /**
         * @param {string} type
         * @param {!EventListener} handler
         */

      }, {
        key: "deregisterInteractionHandler",
        value: function deregisterInteractionHandler(type, handler) {}
        /** @param {string} text */

      }, {
        key: "setText",
        value: function setText(text) {}
        /** @return {number} */

      }, {
        key: "getTabIndex",
        value: function getTabIndex() {}
        /** @param {number} tabIndex */

      }, {
        key: "setTabIndex",
        value: function setTabIndex(tabIndex) {}
        /**
         * @param {string} name
         * @return {string}
         */

      }, {
        key: "getAttr",
        value: function getAttr(name) {}
        /**
         * @param {string} name
         * @param {string} value
         */

      }, {
        key: "setAttr",
        value: function setAttr(name, value) {}
        /** @param {string} name */

      }, {
        key: "rmAttr",
        value: function rmAttr(name) {}
        /** @param {!IconToggleEvent} evtData */

      }, {
        key: "notifyChange",
        value: function notifyChange(evtData) {}
      }]);

      return MDCIconToggleAdapter;
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

    /** @enum {string} */
    var cssClasses = {
      ROOT: 'mdc-icon-toggle',
      DISABLED: 'mdc-icon-toggle--disabled'
    };
    /** @enum {string} */

    var strings = {
      DATA_TOGGLE_ON: 'data-toggle-on',
      DATA_TOGGLE_OFF: 'data-toggle-off',
      ARIA_PRESSED: 'aria-pressed',
      ARIA_DISABLED: 'aria-disabled',
      ARIA_LABEL: 'aria-label',
      CHANGE_EVENT: 'MDCIconToggle:change'
    };

    /**
     * @extends {MDCFoundation<!MDCIconToggleAdapter>}
     */

    var MDCIconToggleFoundation =
    /*#__PURE__*/
    function (_MDCFoundation) {
      _inherits(MDCIconToggleFoundation, _MDCFoundation);

      _createClass(MDCIconToggleFoundation, null, [{
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
            removeClass: function removeClass()
            /* className: string */
            {},
            registerInteractionHandler: function registerInteractionHandler()
            /* type: string, handler: EventListener */
            {},
            deregisterInteractionHandler: function deregisterInteractionHandler()
            /* type: string, handler: EventListener */
            {},
            setText: function setText()
            /* text: string */
            {},
            getTabIndex: function getTabIndex() {
              return (
                /* number */
                0
              );
            },
            setTabIndex: function setTabIndex()
            /* tabIndex: number */
            {},
            getAttr: function getAttr() {
              return (
                /* name: string */

                /* string */
                ''
              );
            },
            setAttr: function setAttr()
            /* name: string, value: string */
            {},
            rmAttr: function rmAttr()
            /* name: string */
            {},
            notifyChange: function notifyChange()
            /* evtData: IconToggleEvent */
            {}
          };
        }
      }]);

      function MDCIconToggleFoundation(adapter) {
        var _this;

        _classCallCheck(this, MDCIconToggleFoundation);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCIconToggleFoundation).call(this, _extends(MDCIconToggleFoundation.defaultAdapter, adapter)));
        /** @private {boolean} */

        _this.on_ = false;
        /** @private {boolean} */

        _this.disabled_ = false;
        /** @private {number} */

        _this.savedTabIndex_ = -1;
        /** @private {?IconToggleState} */

        _this.toggleOnData_ = null;
        /** @private {?IconToggleState} */

        _this.toggleOffData_ = null;

        _this.clickHandler_ =
        /** @private {!EventListener} */
        function () {
          return _this.toggleFromEvt_();
        };
        /** @private {boolean} */


        _this.isHandlingKeydown_ = false;

        _this.keydownHandler_ =
        /** @private {!EventListener} */
        function (
        /** @type {!KeyboardKey} */
        evt) {
          if (isSpace(evt)) {
            _this.isHandlingKeydown_ = true;
            return evt.preventDefault();
          }
        };

        _this.keyupHandler_ =
        /** @private {!EventListener} */
        function (
        /** @type {!KeyboardKey} */
        evt) {
          if (isSpace(evt)) {
            _this.isHandlingKeydown_ = false;

            _this.toggleFromEvt_();
          }
        };

        return _this;
      }

      _createClass(MDCIconToggleFoundation, [{
        key: "init",
        value: function init() {
          this.refreshToggleData();
          this.savedTabIndex_ = this.adapter_.getTabIndex();
          this.adapter_.registerInteractionHandler('click', this.clickHandler_);
          this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
          this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
        }
      }, {
        key: "refreshToggleData",
        value: function refreshToggleData() {
          var _MDCIconToggleFoundat = MDCIconToggleFoundation.strings,
              DATA_TOGGLE_ON = _MDCIconToggleFoundat.DATA_TOGGLE_ON,
              DATA_TOGGLE_OFF = _MDCIconToggleFoundat.DATA_TOGGLE_OFF;
          this.toggleOnData_ = this.parseJsonDataAttr_(DATA_TOGGLE_ON);
          this.toggleOffData_ = this.parseJsonDataAttr_(DATA_TOGGLE_OFF);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
          this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
          this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
        }
        /** @private */

      }, {
        key: "toggleFromEvt_",
        value: function toggleFromEvt_() {
          this.toggle();
          var isOn = this.on_;
          this.adapter_.notifyChange(
          /** @type {!IconToggleEvent} */
          {
            isOn: isOn
          });
        }
        /** @return {boolean} */

      }, {
        key: "isOn",
        value: function isOn() {
          return this.on_;
        }
        /** @param {boolean=} isOn */

      }, {
        key: "toggle",
        value: function toggle() {
          var isOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.on_;
          this.on_ = isOn;
          var _MDCIconToggleFoundat2 = MDCIconToggleFoundation.strings,
              ARIA_LABEL = _MDCIconToggleFoundat2.ARIA_LABEL,
              ARIA_PRESSED = _MDCIconToggleFoundat2.ARIA_PRESSED;

          if (this.on_) {
            this.adapter_.setAttr(ARIA_PRESSED, 'true');
          } else {
            this.adapter_.setAttr(ARIA_PRESSED, 'false');
          }

          var _ref = this.on_ ? this.toggleOffData_ : this.toggleOnData_,
              classToRemove = _ref.cssClass;

          if (classToRemove) {
            this.adapter_.removeClass(classToRemove);
          }

          var _ref2 = this.on_ ? this.toggleOnData_ : this.toggleOffData_,
              content = _ref2.content,
              label = _ref2.label,
              cssClass = _ref2.cssClass;

          if (cssClass) {
            this.adapter_.addClass(cssClass);
          }

          if (content) {
            this.adapter_.setText(content);
          }

          if (label) {
            this.adapter_.setAttr(ARIA_LABEL, label);
          }
        }
        /**
         * @param {string} dataAttr
         * @return {!IconToggleState}
         */

      }, {
        key: "parseJsonDataAttr_",
        value: function parseJsonDataAttr_(dataAttr) {
          var val = this.adapter_.getAttr(dataAttr);

          if (!val) {
            return {};
          }

          return (
            /** @type {!IconToggleState} */
            JSON.parse(val)
          );
        }
        /** @return {boolean} */

      }, {
        key: "isDisabled",
        value: function isDisabled() {
          return this.disabled_;
        }
        /** @param {boolean} isDisabled */

      }, {
        key: "setDisabled",
        value: function setDisabled(isDisabled) {
          this.disabled_ = isDisabled;
          var DISABLED = MDCIconToggleFoundation.cssClasses.DISABLED;
          var ARIA_DISABLED = MDCIconToggleFoundation.strings.ARIA_DISABLED;

          if (this.disabled_) {
            this.savedTabIndex_ = this.adapter_.getTabIndex();
            this.adapter_.setTabIndex(-1);
            this.adapter_.setAttr(ARIA_DISABLED, 'true');
            this.adapter_.addClass(DISABLED);
          } else {
            this.adapter_.setTabIndex(this.savedTabIndex_);
            this.adapter_.rmAttr(ARIA_DISABLED);
            this.adapter_.removeClass(DISABLED);
          }
        }
        /** @return {boolean} */

      }, {
        key: "isKeyboardActivated",
        value: function isKeyboardActivated() {
          return this.isHandlingKeydown_;
        }
      }]);

      return MDCIconToggleFoundation;
    }(MDCFoundation);
    /**
     * @param {!KeyboardKey} keyboardKey
     * @return {boolean}
     */

    function isSpace(keyboardKey) {
      return keyboardKey.key === 'Space' || keyboardKey.keyCode === 32;
    }
    /** @record */


    var IconToggleState = function IconToggleState() {
      _classCallCheck(this, IconToggleState);
    };
    /**
     * The aria-label value of the icon toggle, or undefined if there is no aria-label.
     * @export {string|undefined}
     */


    IconToggleState.prototype.label;
    /**
     * The text for the icon toggle, or undefined if there is no text.
     * @export {string|undefined}
     */

    IconToggleState.prototype.content;
    /**
     * The CSS class to add to the icon toggle, or undefined if there is no CSS class.
     * @export {string|undefined}
     */

    IconToggleState.prototype.cssClass;

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
    var cssClasses$1 = {
      // Ripple is a special case where the "root" component is really a "mixin" of sorts,
      // given that it's an 'upgrade' to an existing component. That being said it is the root
      // CSS class that all other CSS classes derive from.
      ROOT: 'mdc-ripple-upgraded',
      UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
      BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
      FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
      FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
    };
    var strings$1 = {
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
          return cssClasses$1;
        }
      }, {
        key: "strings",
        get: function get() {
          return strings$1;
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

          var strings = MDCRippleFoundation.strings;
          Object.keys(strings).forEach(function (k) {
            if (k.indexOf('VAR_') === 0) {
              _this8.adapter_.updateCssVariable(strings[k], null);
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
    var script = {
      name: 'mdc-ripple',
      mixins: [CustomElementMixin, RippleMixin],
      props: {
        tag: String
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
    script.__file = "/ddata/extra/vma/components/ripple/mdc-ripple.vue";

    /* template */
    var __vue_render__ = function() {
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
      

      
      normalizeComponent(
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
      name: 'mdc-icon-toggle',
      props: {
        toggleOn: [String, Object],
        toggleOff: [String, Object],
        value: Boolean,
        disabled: Boolean,
        accent: Boolean
      },
      data: function data() {
        return {
          classes: {
            'mdc-icon-toggle--accent': this.accent
          },
          styles: {},
          iconClasses: {},
          tabIndex: 0,
          text: ''
        };
      },
      computed: {
        toggleOnData: function toggleOnData() {
          var toggle = this.toggleOn;
          return toggle && JSON.stringify(typeof toggle === 'string' ? {
            content: toggle,
            cssClass: 'material-icons'
          } : {
            content: toggle.icon || toggle.content,
            label: toggle.label,
            cssClass: toggle.icon ? 'material-icons' : toggle.cssClass
          });
        },
        toggleOffData: function toggleOffData() {
          var toggle = this.toggleOff;
          return toggle && JSON.stringify(typeof toggle === 'string' ? {
            content: toggle,
            cssClass: 'material-icons'
          } : {
            content: toggle.icon || toggle.content,
            label: toggle.label,
            cssClass: toggle.icon ? 'material-icons' : toggle.cssClass
          });
        }
      },
      watch: {
        value: function value(_value) {
          this.foundation && this.foundation.toggle(_value);
        },
        disabled: function disabled(_disabled) {
          this.foundation && this.foundation.setDisabled(_disabled);
        },
        toggleOnData: function toggleOnData() {
          this.foundation && this.foundation.refreshToggleData();
        },
        toggleOffData: function toggleOffData() {
          this.foundation && this.foundation.refreshToggleData();
        },
        accent: function accent(value) {
          this.$set(this.classes, 'mdc-icon-toggle--secondary', value);
        }
      },
      mounted: function mounted() {
        var _this = this;

        this.foundation = new MDCIconToggleFoundation({
          addClass: function addClass(className) {
            return _this.$set(_this.iconClasses, className, true);
          },
          removeClass: function removeClass(className) {
            return _this.$delete(_this.iconClasses, className);
          },
          registerInteractionHandler: function registerInteractionHandler(evt, handler) {
            return _this.$el.addEventListener(evt, handler);
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
            return _this.$el.removeEventListener(evt, handler);
          },
          setText: function setText(text) {
            _this.text = text;
          },
          getTabIndex: function getTabIndex() {
            return _this.tabIndex;
          },
          setTabIndex: function setTabIndex(tabIndex) {
            _this.tabIndex = tabIndex;
          },
          getAttr: function getAttr(name, value) {
            return _this.$el.getAttribute(name, value);
          },
          setAttr: function setAttr(name, value) {
            _this.$el.setAttribute(name, value);
          },
          rmAttr: function rmAttr(name) {
            _this.$el.removeAttribute(name);
          },
          notifyChange: function notifyChange(evtData) {
            _this.$emit('input', evtData.isOn);
          }
        });
        this.foundation.init();
        this.foundation.toggle(this.value);
        this.foundation.setDisabled(this.disabled);
        this.ripple = new RippleBase(this, {
          isUnbounded: function isUnbounded() {
            return true;
          },
          isSurfaceActive: function isSurfaceActive() {
            return _this.foundation.isKeyboardActivated();
          }
        });
        this.ripple.init();
      },
      beforeDestroy: function beforeDestroy() {
        this.foundation.destroy();
        this.ripple.destroy();
      }
    };

    /* script */
    const __vue_script__$1 = script$1;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$1.__file = "/ddata/extra/vma/components/icon-toggle/mdc-icon-toggle.vue";

    /* template */
    var __vue_render__$1 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "span",
        {
          staticClass: "mdc-icon-toggle",
          class: _vm.classes,
          style: _vm.styles,
          attrs: {
            tabindex: _vm.tabIndex,
            "data-toggle-on": _vm.toggleOnData,
            "data-toggle-off": _vm.toggleOffData,
            role: "button",
            "aria-pressed": "false"
          }
        },
        [
          _c("i", { class: _vm.iconClasses, attrs: { "aria-hidden": "true" } }, [
            _vm._v(_vm._s(_vm.text))
          ])
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
      

      
      var mdcIConToggle = normalizeComponent(
        { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
        __vue_inject_styles__$1,
        __vue_script__$1,
        __vue_scope_id__$1,
        __vue_is_functional_template__$1,
        __vue_module_identifier__$1,
        undefined,
        undefined
      );

    var plugin = BasePlugin({
      mdcIConToggle: mdcIConToggle
    });

    autoInit(plugin);

    return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi10b2dnbGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9hdXRvLWluaXQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYmFzZS1wbHVnaW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWVsZW1lbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWV2ZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2ljb24tdG9nZ2xlL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2ljb24tdG9nZ2xlL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvaWNvbi10b2dnbGUvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUtYmFzZS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUudnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1ydW50aW1lLWhlbHBlcnMvbm9ybWFsaXplLWNvbXBvbmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvaWNvbi10b2dnbGUvbWRjLWljb24tdG9nZ2xlLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvaWNvbi10b2dnbGUvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL2ljb24tdG9nZ2xlL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHtcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIGNvbnRleHQucHJvcHMuaXMgfHwgY29udGV4dC5wcm9wcy50YWcgfHwgJ2RpdicsXG4gICAgICBjb250ZXh0LmRhdGEsXG4gICAgICBjb250ZXh0LmNoaWxkcmVuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50TWl4aW4gPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21FbGVtZW50XG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImNvbnN0IHNjb3BlID1cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigweDEwMDAwMDAwKSkudG9TdHJpbmcoKSArICctJ1xuXG5leHBvcnQgY29uc3QgVk1BVW5pcXVlSWRNaXhpbiA9IHtcbiAgYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMudm1hX3VpZF8gPSBzY29wZSArIHRoaXMuX3VpZFxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgQVxuICovXG5jbGFzcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bXtjc3NDbGFzc2VzfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17bnVtYmVyc30gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiB7IU9iamVjdH0gKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgLy8gdmFsaWRhdGlvbi5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciA9IHt9KSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFBfSAqL1xuICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBJY29uIFRvZ2dsZS4gUHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBtYW5hZ2luZ1xuICogLSBjbGFzc2VzXG4gKiAtIGRvbVxuICogLSBpbm5lciB0ZXh0XG4gKiAtIGV2ZW50IGhhbmRsZXJzXG4gKiAtIGV2ZW50IGRpc3BhdGNoXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5cbmNsYXNzIE1EQ0ljb25Ub2dnbGVBZGFwdGVyIHtcbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHshRXZlbnRMaXN0ZW5lcn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHshRXZlbnRMaXN0ZW5lcn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAqL1xuICBzZXRUZXh0KHRleHQpIHt9XG5cbiAgLyoqIEByZXR1cm4ge251bWJlcn0gKi9cbiAgZ2V0VGFiSW5kZXgoKSB7fVxuXG4gIC8qKiBAcGFyYW0ge251bWJlcn0gdGFiSW5kZXggKi9cbiAgc2V0VGFiSW5kZXgodGFiSW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldEF0dHIobmFtZSkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXRBdHRyKG5hbWUsIHZhbHVlKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAqL1xuICBybUF0dHIobmFtZSkge31cblxuICAvKiogQHBhcmFtIHshSWNvblRvZ2dsZUV2ZW50fSBldnREYXRhICovXG4gIG5vdGlmeUNoYW5nZShldnREYXRhKSB7fVxufVxuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGlzT246IGJvb2xlYW4sXG4gKiB9fVxuICovXG5sZXQgSWNvblRvZ2dsZUV2ZW50O1xuXG5leHBvcnQge01EQ0ljb25Ub2dnbGVBZGFwdGVyLCBJY29uVG9nZ2xlRXZlbnR9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgUk9PVDogJ21kYy1pY29uLXRvZ2dsZScsXG4gIERJU0FCTEVEOiAnbWRjLWljb24tdG9nZ2xlLS1kaXNhYmxlZCcsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIERBVEFfVE9HR0xFX09OOiAnZGF0YS10b2dnbGUtb24nLFxuICBEQVRBX1RPR0dMRV9PRkY6ICdkYXRhLXRvZ2dsZS1vZmYnLFxuICBBUklBX1BSRVNTRUQ6ICdhcmlhLXByZXNzZWQnLFxuICBBUklBX0RJU0FCTEVEOiAnYXJpYS1kaXNhYmxlZCcsXG4gIEFSSUFfTEFCRUw6ICdhcmlhLWxhYmVsJyxcbiAgQ0hBTkdFX0VWRU5UOiAnTURDSWNvblRvZ2dsZTpjaGFuZ2UnLFxufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQge01EQ0ljb25Ub2dnbGVBZGFwdGVyLCBJY29uVG9nZ2xlRXZlbnR9IGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDSWNvblRvZ2dsZUFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENJY29uVG9nZ2xlRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZGRDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiB0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIHR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBzZXRUZXh0OiAoLyogdGV4dDogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGdldFRhYkluZGV4OiAoKSA9PiAvKiBudW1iZXIgKi8gMCxcbiAgICAgIHNldFRhYkluZGV4OiAoLyogdGFiSW5kZXg6IG51bWJlciAqLykgPT4ge30sXG4gICAgICBnZXRBdHRyOiAoLyogbmFtZTogc3RyaW5nICovKSA9PiAvKiBzdHJpbmcgKi8gJycsXG4gICAgICBzZXRBdHRyOiAoLyogbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJtQXR0cjogKC8qIG5hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBub3RpZnlDaGFuZ2U6ICgvKiBldnREYXRhOiBJY29uVG9nZ2xlRXZlbnQgKi8pID0+IHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENJY29uVG9nZ2xlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMub25fID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5kaXNhYmxlZF8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuc2F2ZWRUYWJJbmRleF8gPSAtMTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7P0ljb25Ub2dnbGVTdGF0ZX0gKi9cbiAgICB0aGlzLnRvZ2dsZU9uRGF0YV8gPSBudWxsO1xuXG4gICAgLyoqIEBwcml2YXRlIHs/SWNvblRvZ2dsZVN0YXRlfSAqL1xuICAgIHRoaXMudG9nZ2xlT2ZmRGF0YV8gPSBudWxsO1xuXG4gICAgdGhpcy5jbGlja0hhbmRsZXJfID0gLyoqIEBwcml2YXRlIHshRXZlbnRMaXN0ZW5lcn0gKi8gKFxuICAgICAgKCkgPT4gdGhpcy50b2dnbGVGcm9tRXZ0XygpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzSGFuZGxpbmdLZXlkb3duXyA9IGZhbHNlO1xuXG4gICAgdGhpcy5rZXlkb3duSGFuZGxlcl8gPSAvKiogQHByaXZhdGUgeyFFdmVudExpc3RlbmVyfSAqLyAoKC8qKiBAdHlwZSB7IUtleWJvYXJkS2V5fSAqLyBldnQpID0+IHtcbiAgICAgIGlmIChpc1NwYWNlKGV2dCkpIHtcbiAgICAgICAgdGhpcy5pc0hhbmRsaW5nS2V5ZG93bl8gPSB0cnVlO1xuICAgICAgICByZXR1cm4gZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmtleXVwSGFuZGxlcl8gPSAvKiogQHByaXZhdGUgeyFFdmVudExpc3RlbmVyfSAqLyAoKC8qKiBAdHlwZSB7IUtleWJvYXJkS2V5fSAqLyBldnQpID0+IHtcbiAgICAgIGlmIChpc1NwYWNlKGV2dCkpIHtcbiAgICAgICAgdGhpcy5pc0hhbmRsaW5nS2V5ZG93bl8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b2dnbGVGcm9tRXZ0XygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnJlZnJlc2hUb2dnbGVEYXRhKCk7XG4gICAgdGhpcy5zYXZlZFRhYkluZGV4XyA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiSW5kZXgoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5ZG93bicsIHRoaXMua2V5ZG93bkhhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMua2V5dXBIYW5kbGVyXyk7XG4gIH1cblxuICByZWZyZXNoVG9nZ2xlRGF0YSgpIHtcbiAgICBjb25zdCB7REFUQV9UT0dHTEVfT04sIERBVEFfVE9HR0xFX09GRn0gPSBNRENJY29uVG9nZ2xlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgIHRoaXMudG9nZ2xlT25EYXRhXyA9IHRoaXMucGFyc2VKc29uRGF0YUF0dHJfKERBVEFfVE9HR0xFX09OKTtcbiAgICB0aGlzLnRvZ2dsZU9mZkRhdGFfID0gdGhpcy5wYXJzZUpzb25EYXRhQXR0cl8oREFUQV9UT0dHTEVfT0ZGKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXlkb3duJywgdGhpcy5rZXlkb3duSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmtleXVwSGFuZGxlcl8pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHRvZ2dsZUZyb21FdnRfKCkge1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgY29uc3Qge29uXzogaXNPbn0gPSB0aGlzO1xuICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5Q2hhbmdlKC8qKiBAdHlwZSB7IUljb25Ub2dnbGVFdmVudH0gKi8gKHtpc09ufSkpO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzT24oKSB7XG4gICAgcmV0dXJuIHRoaXMub25fO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbj19IGlzT24gKi9cbiAgdG9nZ2xlKGlzT24gPSAhdGhpcy5vbl8pIHtcbiAgICB0aGlzLm9uXyA9IGlzT247XG5cbiAgICBjb25zdCB7QVJJQV9MQUJFTCwgQVJJQV9QUkVTU0VEfSA9IE1EQ0ljb25Ub2dnbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG5cbiAgICBpZiAodGhpcy5vbl8pIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihBUklBX1BSRVNTRUQsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cihBUklBX1BSRVNTRUQsICdmYWxzZScpO1xuICAgIH1cblxuICAgIGNvbnN0IHtjc3NDbGFzczogY2xhc3NUb1JlbW92ZX0gPVxuICAgICAgICB0aGlzLm9uXyA/IHRoaXMudG9nZ2xlT2ZmRGF0YV8gOiB0aGlzLnRvZ2dsZU9uRGF0YV87XG5cbiAgICBpZiAoY2xhc3NUb1JlbW92ZSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjbGFzc1RvUmVtb3ZlKTtcbiAgICB9XG5cbiAgICBjb25zdCB7Y29udGVudCwgbGFiZWwsIGNzc0NsYXNzfSA9IHRoaXMub25fID8gdGhpcy50b2dnbGVPbkRhdGFfIDogdGhpcy50b2dnbGVPZmZEYXRhXztcblxuICAgIGlmIChjc3NDbGFzcykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzcyk7XG4gICAgfVxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldFRleHQoY29udGVudCk7XG4gICAgfVxuICAgIGlmIChsYWJlbCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKEFSSUFfTEFCRUwsIGxhYmVsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFBdHRyXG4gICAqIEByZXR1cm4geyFJY29uVG9nZ2xlU3RhdGV9XG4gICAqL1xuICBwYXJzZUpzb25EYXRhQXR0cl8oZGF0YUF0dHIpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLmFkYXB0ZXJfLmdldEF0dHIoZGF0YUF0dHIpO1xuICAgIGlmICghdmFsKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHJldHVybiAvKiogQHR5cGUgeyFJY29uVG9nZ2xlU3RhdGV9ICovIChKU09OLnBhcnNlKHZhbCkpO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWRfO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gaXNEaXNhYmxlZCAqL1xuICBzZXREaXNhYmxlZChpc0Rpc2FibGVkKSB7XG4gICAgdGhpcy5kaXNhYmxlZF8gPSBpc0Rpc2FibGVkO1xuXG4gICAgY29uc3Qge0RJU0FCTEVEfSA9IE1EQ0ljb25Ub2dnbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgY29uc3Qge0FSSUFfRElTQUJMRUR9ID0gTURDSWNvblRvZ2dsZUZvdW5kYXRpb24uc3RyaW5ncztcblxuICAgIGlmICh0aGlzLmRpc2FibGVkXykge1xuICAgICAgdGhpcy5zYXZlZFRhYkluZGV4XyA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiSW5kZXgoKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0VGFiSW5kZXgoLTEpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyKEFSSUFfRElTQUJMRUQsICd0cnVlJyk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKERJU0FCTEVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRUYWJJbmRleCh0aGlzLnNhdmVkVGFiSW5kZXhfKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucm1BdHRyKEFSSUFfRElTQUJMRUQpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhESVNBQkxFRCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzS2V5Ym9hcmRBY3RpdmF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNIYW5kbGluZ0tleWRvd25fO1xuICB9XG59XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAga2V5OiBzdHJpbmcsXG4gKiAgIGtleUNvZGU6IG51bWJlclxuICogfX1cbiAqL1xubGV0IEtleWJvYXJkS2V5O1xuXG4vKipcbiAqIEBwYXJhbSB7IUtleWJvYXJkS2V5fSBrZXlib2FyZEtleVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNTcGFjZShrZXlib2FyZEtleSkge1xuICByZXR1cm4ga2V5Ym9hcmRLZXkua2V5ID09PSAnU3BhY2UnIHx8IGtleWJvYXJkS2V5LmtleUNvZGUgPT09IDMyO1xufVxuXG5cbi8qKiBAcmVjb3JkICovXG5jbGFzcyBJY29uVG9nZ2xlU3RhdGUge31cblxuLyoqXG4gKiBUaGUgYXJpYS1sYWJlbCB2YWx1ZSBvZiB0aGUgaWNvbiB0b2dnbGUsIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBpcyBubyBhcmlhLWxhYmVsLlxuICogQGV4cG9ydCB7c3RyaW5nfHVuZGVmaW5lZH1cbiAqL1xuSWNvblRvZ2dsZVN0YXRlLnByb3RvdHlwZS5sYWJlbDtcblxuLyoqXG4gKiBUaGUgdGV4dCBmb3IgdGhlIGljb24gdG9nZ2xlLCBvciB1bmRlZmluZWQgaWYgdGhlcmUgaXMgbm8gdGV4dC5cbiAqIEBleHBvcnQge3N0cmluZ3x1bmRlZmluZWR9XG4gKi9cbkljb25Ub2dnbGVTdGF0ZS5wcm90b3R5cGUuY29udGVudDtcblxuLyoqXG4gKiBUaGUgQ1NTIGNsYXNzIHRvIGFkZCB0byB0aGUgaWNvbiB0b2dnbGUsIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBpcyBubyBDU1MgY2xhc3MuXG4gKiBAZXhwb3J0IHtzdHJpbmd8dW5kZWZpbmVkfVxuICovXG5JY29uVG9nZ2xlU3RhdGUucHJvdG90eXBlLmNzc0NsYXNzO1xuXG5leHBvcnQgZGVmYXVsdCBNRENJY29uVG9nZ2xlRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBGXG4gKi9cbmNsYXNzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENDb21wb25lbnR9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7Rj19IGZvdW5kYXRpb25cbiAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb290LCBmb3VuZGF0aW9uID0gdW5kZWZpbmVkLCAuLi5hcmdzKSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuICAgIHRoaXMucm9vdF8gPSByb290O1xuICAgIHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcbiAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgLy8gdGhpcy5yb290XyBpcyBkZWZpbmVkIGFuZCBjYW4gYmUgdXNlZCB3aXRoaW4gdGhlIGZvdW5kYXRpb24gY2xhc3MuXG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFGfSAqL1xuICAgIHRoaXMuZm91bmRhdGlvbl8gPSBmb3VuZGF0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmdldERlZmF1bHRGb3VuZGF0aW9uKCkgOiBmb3VuZGF0aW9uO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gIH1cblxuICBpbml0aWFsaXplKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshRn0gZm91bmRhdGlvblxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgLy8gY29tcG9uZW50LlxuICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogbGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgbGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gcmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiB1bmxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLFxuICAgKiB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFPYmplY3R9IGV2dERhdGFcbiAgICogQHBhcmFtIHtib29sZWFuPX0gc2hvdWxkQnViYmxlXG4gICAqL1xuICBlbWl0KGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gICAgbGV0IGV2dDtcbiAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5yb290Xy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBSaXBwbGUuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmdcbiAqIC0gY2xhc3Nlc1xuICogLSBkb21cbiAqIC0gQ1NTIHZhcmlhYmxlc1xuICogLSBwb3NpdGlvblxuICogLSBkaW1lbnNpb25zXG4gKiAtIHNjcm9sbCBwb3NpdGlvblxuICogLSBldmVudCBoYW5kbGVyc1xuICogLSB1bmJvdW5kZWQsIGFjdGl2ZSBhbmQgZGlzYWJsZWQgc3RhdGVzXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENSaXBwbGVBZGFwdGVyIHtcbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1VuYm91bmRlZCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZUFjdGl2ZSgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZURpc2FibGVkKCkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0geyFFdmVudFRhcmdldH0gdGFyZ2V0ICovXG4gIGNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFyTmFtZVxuICAgKiBAcGFyYW0gez9udW1iZXJ8c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgdXBkYXRlQ3NzVmFyaWFibGUodmFyTmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqIEByZXR1cm4geyFDbGllbnRSZWN0fSAqL1xuICBjb21wdXRlQm91bmRpbmdSZWN0KCkge31cblxuICAvKiogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gKi9cbiAgZ2V0V2luZG93UGFnZU9mZnNldCgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxuICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbn07XG5cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG4gIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxufTtcblxuY29uc3QgbnVtYmVycyA9IHtcbiAgUEFERElORzogMTAsXG4gIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLXRyYW5zbGF0ZS1kdXJhdGlvbiAoaS5lLiBhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLWZhZGUtb3V0LWR1cmF0aW9uIChpLmUuIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIFRBUF9ERUxBWV9NUzogMzAwLCAvLyBEZWxheSBiZXR3ZWVuIHRvdWNoIGFuZCBzaW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXNcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gYXBwbHlQYXNzaXZlIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c1Bhc3NpdmVfO1xuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAvLyBEZXRlY3QgdmVyc2lvbnMgb2YgRWRnZSB3aXRoIGJ1Z2d5IHZhcigpIHN1cHBvcnRcbiAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMTQ5NTQ0OC9cbiAgY29uc3QgZG9jdW1lbnQgPSB3aW5kb3dPYmouZG9jdW1lbnQ7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgLy8gVGhlIGJ1ZyBleGlzdHMgaWYgOjpiZWZvcmUgc3R5bGUgZW5kcyB1cCBwcm9wYWdhdGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gIC8vIEFkZGl0aW9uYWxseSwgZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIG51bGwgaW4gaWZyYW1lcyB3aXRoIGRpc3BsYXk6IFwibm9uZVwiIGluIEZpcmVmb3gsXG4gIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvd09iai5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBjb25zdCBoYXNQc2V1ZG9WYXJCdWcgPSBjb21wdXRlZFN0eWxlICE9PSBudWxsICYmIGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wU3R5bGUgPT09ICdzb2xpZCc7XG4gIG5vZGUucmVtb3ZlKCk7XG4gIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBsZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuXG4gIGNvbnN0IHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gd2luZG93T2JqLkNTUyAmJiB0eXBlb2Ygd2luZG93T2JqLkNTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTQ2NjlcbiAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgY29uc3Qgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKFxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKVxuICApO1xuXG4gIGlmIChleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cykge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgfSBlbHNlIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG59XG5cbi8vXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZCBpZiBzbywgdXNlIHRoZW0uXG4gKiBAcGFyYW0geyFXaW5kb3c9fSBnbG9iYWxPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnwhRXZlbnRMaXN0ZW5lck9wdGlvbnN9XG4gKi9cbmZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmogPSB3aW5kb3csIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwge2dldCBwYXNzaXZlKCkge1xuICAgICAgICBpc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBpc1N1cHBvcnRlZDtcbiAgICAgIH19KTtcbiAgICB9IGNhdGNoIChlKSB7IH1cblxuICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZDtcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfXG4gICAgPyAvKiogQHR5cGUgeyFFdmVudExpc3RlbmVyT3B0aW9uc30gKi8gKHtwYXNzaXZlOiB0cnVlfSlcbiAgICA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gSFRNTEVsZW1lbnRQcm90b3R5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gIC8qKlxuICAgKiBPcmRlciBpcyBpbXBvcnRhbnQgYmVjYXVzZSB3ZSByZXR1cm4gdGhlIGZpcnN0IGV4aXN0aW5nIG1ldGhvZCB3ZSBmaW5kLlxuICAgKiBEbyBub3QgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgaXRlbXMgaW4gdGhlIGJlbG93IGFycmF5LlxuICAgKi9cbiAgY29uc3QgbWF0Y2hlc01ldGhvZHMgPSBbJ21hdGNoZXMnLCAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJywgJ21zTWF0Y2hlc1NlbGVjdG9yJ107XG4gIGxldCBtZXRob2QgPSAnbWF0Y2hlcyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlc01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0aG9kID0gbWF0Y2hlc01ldGhvZHNbaV07XG4gICAgaWYgKG1hdGNoZXNNZXRob2QgaW4gSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgICAgIG1ldGhvZCA9IG1hdGNoZXNNZXRob2Q7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0aG9kO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUV2ZW50fSBldlxuICogQHBhcmFtIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSBwYWdlT2Zmc2V0XG4gKiBAcGFyYW0geyFDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXYsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgY29uc3Qge3gsIHl9ID0gcGFnZU9mZnNldDtcbiAgY29uc3QgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgY29uc3QgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuXG4gIGxldCBub3JtYWxpemVkWDtcbiAgbGV0IG5vcm1hbGl6ZWRZO1xuICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gIGlmIChldi50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICBldiA9IC8qKiBAdHlwZSB7IVRvdWNoRXZlbnR9ICovIChldik7XG4gICAgbm9ybWFsaXplZFggPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9IGVsc2Uge1xuICAgIGV2ID0gLyoqIEB0eXBlIHshTW91c2VFdmVudH0gKi8gKGV2KTtcbiAgICBub3JtYWxpemVkWCA9IGV2LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYucGFnZVkgLSBkb2N1bWVudFk7XG4gIH1cblxuICByZXR1cm4ge3g6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWX07XG59XG5cbmV4cG9ydCB7c3VwcG9ydHNDc3NWYXJpYWJsZXMsIGFwcGx5UGFzc2l2ZSwgZ2V0TWF0Y2hlc1Byb3BlcnR5LCBnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgaXNBY3RpdmF0ZWQ6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBhY3RpdmF0aW9uRXZlbnQ6ICghRXZlbnR8dW5kZWZpbmVkKSxcbiAqICAgaXNQcm9ncmFtbWF0aWM6IChib29sZWFufHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBBY3RpdmF0aW9uU3RhdGVUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGRlYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZm9jdXM6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgYmx1cjogKHN0cmluZ3x1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJJbmZvVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50KSxcbiAqICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50PSksXG4gKiAgIGZvY3VzOiBmdW5jdGlvbigpLFxuICogICBibHVyOiBmdW5jdGlvbigpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJzVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICB4OiBudW1iZXIsXG4gKiAgIHk6IG51bWJlclxuICogfX1cbiAqL1xubGV0IFBvaW50VHlwZTtcblxuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbmNvbnN0IEFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nLCAnbW91c2Vkb3duJywgJ2tleWRvd24nXTtcblxuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG5jb25zdCBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnXTtcblxuLy8gVHJhY2tzIGFjdGl2YXRpb25zIHRoYXQgaGF2ZSBvY2N1cnJlZCBvbiB0aGUgY3VycmVudCBmcmFtZSwgdG8gYXZvaWQgc2ltdWx0YW5lb3VzIG5lc3RlZCBhY3RpdmF0aW9uc1xuLyoqIEB0eXBlIHshQXJyYXk8IUV2ZW50VGFyZ2V0Pn0gKi9cbmxldCBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1JpcHBsZUFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENSaXBwbGVGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gbnVtYmVycztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IC8qIGJvb2xlYW4gLSBjYWNoZWQgKi8ge30sXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICgvKiB0YXJnZXQ6ICFFdmVudFRhcmdldCAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAoLyogdmFyTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IC8qIENsaWVudFJlY3QgKi8ge30sXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAvKiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9ICovIHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUgeyFDbGllbnRSZWN0fSAqL1xuICAgIHRoaXMuZnJhbWVfID0gLyoqIEB0eXBlIHshQ2xpZW50UmVjdH0gKi8gKHt3aWR0aDogMCwgaGVpZ2h0OiAwfSk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubWF4UmFkaXVzXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCl9ICovXG4gICAgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gKGUpID0+IHRoaXMuYWN0aXZhdGVfKGUpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9ICgpID0+IHRoaXMuZGVhY3RpdmF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5mb2N1c0hhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVGb2N1cygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmJsdXJIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlQmx1cigpO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyXyA9ICgpID0+IHRoaXMubGF5b3V0KCk7XG5cbiAgICAvKiogQHByaXZhdGUge3tsZWZ0OiBudW1iZXIsIHRvcDpudW1iZXJ9fSAqL1xuICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdTY2FsZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUV2ZW50fHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdXBwb3J0c1ByZXNzUmlwcGxlXygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9XG4gICAqL1xuICBkZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcblxuICAgIHRoaXMucmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpO1xuXG4gICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhST09UKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlcyBuZWVkIGxheW91dCBsb2dpYyBhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIHNldCBjb29yZGluYXRlcyBmb3IgYm90aCBzaGFkZSBhbmQgcmlwcGxlXG4gICAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCkpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2YXRpb25UaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoUk9PVCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudH0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSkge1xuICAgIGlmIChlLnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpIHtcbiAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcmVtb3ZlQ3NzVmFyc18oKSB7XG4gICAgY29uc3Qge3N0cmluZ3N9ID0gTURDUmlwcGxlRm91bmRhdGlvbjtcbiAgICBPYmplY3Qua2V5cyhzdHJpbmdzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBpZiAoay5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShzdHJpbmdzW2tdLCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFjdGl2YXRlXyhlKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgIGNvbnN0IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgY29uc3QgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBlICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZS50eXBlO1xuICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZSA9PT0gdW5kZWZpbmVkO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IGUgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICBlLnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3BvaW50ZXJkb3duJ1xuICAgICk7XG5cbiAgICBjb25zdCBoYXNBY3RpdmF0ZWRDaGlsZCA9IGUgIT09IHVuZGVmaW5lZCAmJiBhY3RpdmF0ZWRUYXJnZXRzLmxlbmd0aCA+IDAgJiYgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKFxuICAgICAgKHRhcmdldCkgPT4gdGhpcy5hZGFwdGVyXy5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkpO1xuICAgIGlmIChoYXNBY3RpdmF0ZWRDaGlsZCkge1xuICAgICAgLy8gSW1tZWRpYXRlbHkgcmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSwgd2hpbGUgcHJlc2VydmluZyBsb2dpYyB0aGF0IHByZXZlbnRzIHRvdWNoIGZvbGxvdy1vbiBldmVudHNcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKC8qKiBAdHlwZSB7IUV2ZW50VGFyZ2V0fSAqLyAoZS50YXJnZXQpKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSAmJiBlICE9PSB1bmRlZmluZWQgJiYgKGUua2V5ID09PSAnICcgfHwgZS5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgLy8gYWN0aXZlIHN0YXRlcyBpbmNvbnNpc3RlbnRseSB3aGVuIHRoZXkncmUgY2FsbGVkIHdpdGhpbiBldmVudCBoYW5kbGluZyBjb2RlOlxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgLy8gV2UgdHJ5IGZpcnN0IG91dHNpZGUgckFGIHRvIHN1cHBvcnQgRWRnZSwgd2hpY2ggZG9lcyBub3QgZXhoaWJpdCB0aGlzIHByb2JsZW0sIGJ1dCB3aWxsIGNyYXNoIGlmIGEgQ1NTXG4gICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSkge1xuICAgIHJldHVybiAoZSAhPT0gdW5kZWZpbmVkICYmIGUudHlwZSA9PT0gJ2tleWRvd24nKSA/IHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlQWN0aXZlKCkgOiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZXZlbnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICovXG4gIGFjdGl2YXRlKGV2ZW50KSB7XG4gICAgdGhpcy5hY3RpdmF0ZV8oZXZlbnQpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGFuaW1hdGVBY3RpdmF0aW9uXygpIHtcbiAgICBjb25zdCB7VkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtERUFDVElWQVRJT05fVElNRU9VVF9NU30gPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnM7XG5cbiAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuXG4gICAgbGV0IHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgbGV0IHRyYW5zbGF0ZUVuZCA9ICcnO1xuXG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIGNvbnN0IHtzdGFydFBvaW50LCBlbmRQb2ludH0gPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKTtcbiAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gYCR7c3RhcnRQb2ludC54fXB4LCAke3N0YXJ0UG9pbnQueX1weGA7XG4gICAgICB0cmFuc2xhdGVFbmQgPSBgJHtlbmRQb2ludC54fXB4LCAke2VuZFBvaW50Lnl9cHhgO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuXG4gICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm4ge3tzdGFydFBvaW50OiBQb2ludFR5cGUsIGVuZFBvaW50OiBQb2ludFR5cGV9fVxuICAgKi9cbiAgZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpIHtcbiAgICBjb25zdCB7YWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXJ9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuXG4gICAgbGV0IHN0YXJ0UG9pbnQ7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhcbiAgICAgICAgLyoqIEB0eXBlIHshRXZlbnR9ICovIChhY3RpdmF0aW9uRXZlbnQpLFxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICBjb25zdCBlbmRQb2ludCA9IHtcbiAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtzdGFydFBvaW50LCBlbmRQb2ludH07XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCkge1xuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtoYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWR9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGNvbnN0IGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcblxuICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKSB7XG4gICAgY29uc3Qge0ZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gIH1cblxuICByZXNldEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQsIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZWFjdGl2YXRlXygpIHtcbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSAvKiogQHR5cGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqLyAoT2JqZWN0LmFzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKSk7XG5cbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSkpO1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9IG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFuaW1hdGVEZWFjdGl2YXRpb25fKHt3YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlfSkge1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfVxuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgIH1cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGxheW91dEludGVybmFsXygpIHtcbiAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIGNvbnN0IG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuXG4gICAgLy8gU3VyZmFjZSBkaWFtZXRlciBpcyB0cmVhdGVkIGRpZmZlcmVudGx5IGZvciB1bmJvdW5kZWQgdnMuIGJvdW5kZWQgcmlwcGxlcy5cbiAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAvLyBzcXVhcmUpLiBCb3VuZGVkIHJpcHBsZXMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgZnVsbHkgZXhwZWN0ZWQgdG8gZXhwYW5kIGJleW9uZCB0aGUgc3VyZmFjZSdzIGxvbmdlc3QgZGlhbWV0ZXJcbiAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgIGNvbnN0IGdldEJvdW5kZWRSYWRpdXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMuZnJhbWVfLndpZHRoLCAyKSArIE1hdGgucG93KHRoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICB9O1xuXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpID8gbWF4RGltIDogZ2V0Qm91bmRlZFJhZGl1cygpO1xuXG4gICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICB0aGlzLmluaXRpYWxTaXplXyA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICB0aGlzLmZnU2NhbGVfID0gdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG5cbiAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgdXBkYXRlTGF5b3V0Q3NzVmFyc18oKSB7XG4gICAgY29uc3Qge1xuICAgICAgVkFSX0ZHX1NJWkUsIFZBUl9MRUZULCBWQVJfVE9QLCBWQVJfRkdfU0NBTEUsXG4gICAgfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIGAke3RoaXMuaW5pdGlhbFNpemVffXB4YCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnR9cHhgKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcH1weGApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXRVbmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgY29uc3Qge1VOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRm9jdXMoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKSk7XG4gIH1cblxuICBoYW5kbGVCbHVyKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCBNRENSaXBwbGVGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQGV4dGVuZHMgTURDQ29tcG9uZW50PCFNRENSaXBwbGVGb3VuZGF0aW9uPlxuICovXG5jbGFzcyBNRENSaXBwbGUgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKiogQHBhcmFtIHsuLi4/fSBhcmdzICovXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHt7aXNVbmJvdW5kZWQ6IChib29sZWFufHVuZGVmaW5lZCl9PX0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QsIHtpc1VuYm91bmRlZCA9IHVuZGVmaW5lZH0gPSB7fSkge1xuICAgIGNvbnN0IHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgLy8gT25seSBvdmVycmlkZSB1bmJvdW5kZWQgYmVoYXZpb3IgaWYgb3B0aW9uIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgaWYgKGlzVW5ib3VuZGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSAvKiogQHR5cGUge2Jvb2xlYW59ICovIChpc1VuYm91bmRlZCk7XG4gICAgfVxuICAgIHJldHVybiByaXBwbGU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshUmlwcGxlQ2FwYWJsZVN1cmZhY2V9IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUFkYXB0ZXIoaW5zdGFuY2UpIHtcbiAgICBjb25zdCBNQVRDSEVTID0gdXRpbC5nZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyksXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gaW5zdGFuY2UudW5ib3VuZGVkLFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiBpbnN0YW5jZS5yb290X1tNQVRDSEVTXSgnOmFjdGl2ZScpLFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IGluc3RhbmNlLmRpc2FibGVkLFxuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiAodGFyZ2V0KSA9PiBpbnN0YW5jZS5yb290Xy5jb250YWlucyh0YXJnZXQpLFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpLFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gaW5zdGFuY2Uucm9vdF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAoe3g6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0fSksXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgdW5ib3VuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0IHVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICB0aGlzLnVuYm91bmRlZF8gPSBCb29sZWFuKHVuYm91bmRlZCk7XG4gICAgdGhpcy5zZXRVbmJvdW5kZWRfKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc3VyZSBDb21waWxlciB0aHJvd3MgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3Igd2hlbiBkaXJlY3RseSBhY2Nlc3NpbmcgYVxuICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICogQnkgYWNjZXNzaW5nIHRoZSBwcm90ZWN0ZWQgcHJvcGVydHkgaW5zaWRlIGEgbWV0aG9kLCB3ZSBzb2x2ZSB0aGF0IHByb2JsZW0uXG4gICAqIFRoYXQncyB3aHkgdGhpcyBmdW5jdGlvbiBleGlzdHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRVbmJvdW5kZWRfKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VW5ib3VuZGVkKHRoaXMudW5ib3VuZGVkXyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUZvdW5kYXRpb259XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMudW5ib3VuZGVkID0gJ21kY1JpcHBsZUlzVW5ib3VuZGVkJyBpbiB0aGlzLnJvb3RfLmRhdGFzZXQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTZWUgTWF0ZXJpYWwgRGVzaWduIHNwZWMgZm9yIG1vcmUgZGV0YWlscyBvbiB3aGVuIHRvIHVzZSByaXBwbGVzLlxuICogaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL21vdGlvbi9jaG9yZW9ncmFwaHkuaHRtbCNjaG9yZW9ncmFwaHktY3JlYXRpb25cbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgUmlwcGxlQ2FwYWJsZVN1cmZhY2Uge31cblxuLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLnJvb3RfO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgYmxlZWRzIG91dCBvZiB0aGUgYm91bmRzIG9mIHRoZSBlbGVtZW50LlxuICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUudW5ib3VuZGVkO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgaXMgYXR0YWNoZWQgdG8gYSBkaXNhYmxlZCBjb21wb25lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS5kaXNhYmxlZDtcblxuZXhwb3J0IHtNRENSaXBwbGUsIE1EQ1JpcHBsZUZvdW5kYXRpb24sIFJpcHBsZUNhcGFibGVTdXJmYWNlLCB1dGlsfTtcbiIsImltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2luZGV4J1xuaW1wb3J0IHtcbiAgc3VwcG9ydHNDc3NWYXJpYWJsZXMsXG4gIGdldE1hdGNoZXNQcm9wZXJ0eSxcbiAgYXBwbHlQYXNzaXZlXG59IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvdXRpbCdcblxuZXhwb3J0IGNsYXNzIFJpcHBsZUJhc2UgZXh0ZW5kcyBNRENSaXBwbGVGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBNQVRDSEVTKCkge1xuICAgIC8qIGdsb2JhbCBIVE1MRWxlbWVudCAqL1xuICAgIHJldHVybiAoXG4gICAgICBSaXBwbGVCYXNlLl9tYXRjaGVzIHx8XG4gICAgICAoUmlwcGxlQmFzZS5fbWF0Y2hlcyA9IGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpKVxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cmZhY2VBY3RpdmUocmVmKSB7XG4gICAgcmV0dXJuIHJlZltSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZtLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbFtSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRkZWxldGUodm0uY2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogdGFyZ2V0ID0+IHZtLiRlbC5jb250YWlucyh0YXJnZXQpLFxuICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uc3R5bGVzLCB2YXJOYW1lLCB2YWx1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFJpcHBsZU1peGluID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzKVxuICAgIHRoaXMucmlwcGxlLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxjdXN0b20tZWxlbWVudCBcbiAgICA6dGFnPVwidGFnXCIgXG4gICAgOmNsYXNzZXM9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGVzPVwic3R5bGVzXCIgXG4gICAgY2xhc3M9XCJtZGMtcmlwcGxlXCI+XG4gICAgPHNsb3QgLz5cbiAgPC9jdXN0b20tZWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBDdXN0b21FbGVtZW50TWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlTWl4aW4gfSBmcm9tICcuL21kYy1yaXBwbGUtYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXJpcHBsZScsXG4gIG1peGluczogW0N1c3RvbUVsZW1lbnRNaXhpbiwgUmlwcGxlTWl4aW5dLFxuICBwcm9wczoge1xuICAgIHRhZzogU3RyaW5nXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50KGNvbXBpbGVkVGVtcGxhdGUsIGluamVjdFN0eWxlLCBkZWZhdWx0RXhwb3J0LCBzY29wZUlkLCBpc0Z1bmN0aW9uYWxUZW1wbGF0ZSwgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLywgaXNTaGFkb3dNb2RlLCBjcmVhdGVJbmplY3RvciwgY3JlYXRlSW5qZWN0b3JTU1IsIGNyZWF0ZUluamVjdG9yU2hhZG93KSB7XG4gICAgaWYgKHR5cGVvZiBpc1NoYWRvd01vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3JTU1IgPSBjcmVhdGVJbmplY3RvcjtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3IgPSBpc1NoYWRvd01vZGU7XG4gICAgICAgIGlzU2hhZG93TW9kZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gICAgY29uc3Qgb3B0aW9ucyA9IHR5cGVvZiBkZWZhdWx0RXhwb3J0ID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdEV4cG9ydC5vcHRpb25zIDogZGVmYXVsdEV4cG9ydDtcbiAgICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gICAgaWYgKGNvbXBpbGVkVGVtcGxhdGUgJiYgY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXIpIHtcbiAgICAgICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlcjtcbiAgICAgICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgICAgICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlO1xuICAgICAgICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzY29wZWRJZFxuICAgIGlmIChzY29wZUlkKSB7XG4gICAgICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkO1xuICAgIH1cbiAgICBsZXQgaG9vaztcbiAgICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgICAgICAvLyBzZXJ2ZXIgYnVpbGRcbiAgICAgICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICAgICAgICBjb250ZXh0ID1cbiAgICAgICAgICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KTsgLy8gZnVuY3Rpb25hbFxuICAgICAgICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICAgICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX187XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgICAgICAgaWYgKGluamVjdFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNTUihjb250ZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVyZW5jZVxuICAgICAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9vaztcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5qZWN0U3R5bGUpIHtcbiAgICAgICAgaG9vayA9IGlzU2hhZG93TW9kZVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNoYWRvdyh0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH07XG4gICAgfVxuICAgIGlmIChob29rKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcbiAgICAgICAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBob29rLmNhbGwoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlO1xuICAgICAgICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRFeHBvcnQ7XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxzcGFuIFxuICAgIDpjbGFzcz1cImNsYXNzZXNcIiBcbiAgICA6c3R5bGU9XCJzdHlsZXNcIiBcbiAgICA6dGFiaW5kZXg9XCJ0YWJJbmRleFwiXG4gICAgOmRhdGEtdG9nZ2xlLW9uPVwidG9nZ2xlT25EYXRhXCIgXG4gICAgOmRhdGEtdG9nZ2xlLW9mZj1cInRvZ2dsZU9mZkRhdGFcIlxuICAgIGNsYXNzPVwibWRjLWljb24tdG9nZ2xlXCJcbiAgICByb2xlPVwiYnV0dG9uXCJcbiAgICBhcmlhLXByZXNzZWQ9XCJmYWxzZVwiPlxuICAgIDxpIFxuICAgICAgOmNsYXNzPVwiaWNvbkNsYXNzZXNcIiBcbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnt7IHRleHQgfX08L2k+XG4gIDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTURDSWNvblRvZ2dsZUZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2ljb24tdG9nZ2xlL2ZvdW5kYXRpb24nXG5pbXBvcnQgeyBSaXBwbGVCYXNlIH0gZnJvbSAnLi4vcmlwcGxlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtaWNvbi10b2dnbGUnLFxuICBwcm9wczoge1xuICAgIHRvZ2dsZU9uOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgIHRvZ2dsZU9mZjogW1N0cmluZywgT2JqZWN0XSxcbiAgICB2YWx1ZTogQm9vbGVhbixcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBhY2NlbnQ6IEJvb2xlYW5cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICAnbWRjLWljb24tdG9nZ2xlLS1hY2NlbnQnOiB0aGlzLmFjY2VudFxuICAgICAgfSxcbiAgICAgIHN0eWxlczoge30sXG4gICAgICBpY29uQ2xhc3Nlczoge30sXG4gICAgICB0YWJJbmRleDogMCxcbiAgICAgIHRleHQ6ICcnXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHRvZ2dsZU9uRGF0YSgpIHtcbiAgICAgIGxldCB0b2dnbGUgPSB0aGlzLnRvZ2dsZU9uXG4gICAgICByZXR1cm4gKFxuICAgICAgICB0b2dnbGUgJiZcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgdHlwZW9mIHRvZ2dsZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRvZ2dsZSxcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ21hdGVyaWFsLWljb25zJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0b2dnbGUuaWNvbiB8fCB0b2dnbGUuY29udGVudCxcbiAgICAgICAgICAgICAgICBsYWJlbDogdG9nZ2xlLmxhYmVsLFxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiB0b2dnbGUuaWNvbiA/ICdtYXRlcmlhbC1pY29ucycgOiB0b2dnbGUuY3NzQ2xhc3NcbiAgICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICApXG4gICAgfSxcbiAgICB0b2dnbGVPZmZEYXRhKCkge1xuICAgICAgbGV0IHRvZ2dsZSA9IHRoaXMudG9nZ2xlT2ZmXG4gICAgICByZXR1cm4gKFxuICAgICAgICB0b2dnbGUgJiZcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgdHlwZW9mIHRvZ2dsZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRvZ2dsZSxcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ21hdGVyaWFsLWljb25zJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0b2dnbGUuaWNvbiB8fCB0b2dnbGUuY29udGVudCxcbiAgICAgICAgICAgICAgICBsYWJlbDogdG9nZ2xlLmxhYmVsLFxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiB0b2dnbGUuaWNvbiA/ICdtYXRlcmlhbC1pY29ucycgOiB0b2dnbGUuY3NzQ2xhc3NcbiAgICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICApXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIHZhbHVlKHZhbHVlKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24gJiYgdGhpcy5mb3VuZGF0aW9uLnRvZ2dsZSh2YWx1ZSlcbiAgICB9LFxuICAgIGRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24gJiYgdGhpcy5mb3VuZGF0aW9uLnNldERpc2FibGVkKGRpc2FibGVkKVxuICAgIH0sXG4gICAgdG9nZ2xlT25EYXRhKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uICYmIHRoaXMuZm91bmRhdGlvbi5yZWZyZXNoVG9nZ2xlRGF0YSgpXG4gICAgfSxcbiAgICB0b2dnbGVPZmZEYXRhKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uICYmIHRoaXMuZm91bmRhdGlvbi5yZWZyZXNoVG9nZ2xlRGF0YSgpXG4gICAgfSxcbiAgICBhY2NlbnQodmFsdWUpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsICdtZGMtaWNvbi10b2dnbGUtLXNlY29uZGFyeScsIHZhbHVlKVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDSWNvblRvZ2dsZUZvdW5kYXRpb24oe1xuICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRzZXQodGhpcy5pY29uQ2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKSxcbiAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZGVsZXRlKHRoaXMuaWNvbkNsYXNzZXMsIGNsYXNzTmFtZSksXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT5cbiAgICAgICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT5cbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpLFxuICAgICAgc2V0VGV4dDogdGV4dCA9PiB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHRcbiAgICAgIH0sXG4gICAgICBnZXRUYWJJbmRleDogKCkgPT4gdGhpcy50YWJJbmRleCxcbiAgICAgIHNldFRhYkluZGV4OiB0YWJJbmRleCA9PiB7XG4gICAgICAgIHRoaXMudGFiSW5kZXggPSB0YWJJbmRleFxuICAgICAgfSxcbiAgICAgIGdldEF0dHI6IChuYW1lLCB2YWx1ZSkgPT4gdGhpcy4kZWwuZ2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSxcbiAgICAgIHNldEF0dHI6IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLiRlbC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpXG4gICAgICB9LFxuICAgICAgcm1BdHRyOiBuYW1lID0+IHtcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQXR0cmlidXRlKG5hbWUpXG4gICAgICB9LFxuICAgICAgbm90aWZ5Q2hhbmdlOiBldnREYXRhID0+IHtcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBldnREYXRhLmlzT24pXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gICAgdGhpcy5mb3VuZGF0aW9uLnRvZ2dsZSh0aGlzLnZhbHVlKVxuICAgIHRoaXMuZm91bmRhdGlvbi5zZXREaXNhYmxlZCh0aGlzLmRpc2FibGVkKVxuXG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzLCB7XG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gdHJ1ZSxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gdGhpcy5mb3VuZGF0aW9uLmlzS2V5Ym9hcmRBY3RpdmF0ZWQoKVxuICAgIH0pXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IG1kY0lDb25Ub2dnbGUgZnJvbSAnLi9tZGMtaWNvbi10b2dnbGUudnVlJ1xuXG5leHBvcnQgeyBtZGNJQ29uVG9nZ2xlIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY0lDb25Ub2dnbGVcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJDdXN0b21FbGVtZW50IiwiZnVuY3Rpb25hbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwicHJvcHMiLCJpcyIsInRhZyIsImRhdGEiLCJjaGlsZHJlbiIsIkN1c3RvbUVsZW1lbnRNaXhpbiIsInNjb3BlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJNRENGb3VuZGF0aW9uIiwiYWRhcHRlciIsImFkYXB0ZXJfIiwiTURDSWNvblRvZ2dsZUFkYXB0ZXIiLCJjbGFzc05hbWUiLCJ0eXBlIiwiaGFuZGxlciIsInRleHQiLCJ0YWJJbmRleCIsInZhbHVlIiwiZXZ0RGF0YSIsImNzc0NsYXNzZXMiLCJST09UIiwiRElTQUJMRUQiLCJzdHJpbmdzIiwiREFUQV9UT0dHTEVfT04iLCJEQVRBX1RPR0dMRV9PRkYiLCJBUklBX1BSRVNTRUQiLCJBUklBX0RJU0FCTEVEIiwiQVJJQV9MQUJFTCIsIkNIQU5HRV9FVkVOVCIsIk1EQ0ljb25Ub2dnbGVGb3VuZGF0aW9uIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwiZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsInNldFRleHQiLCJnZXRUYWJJbmRleCIsInNldFRhYkluZGV4IiwiZ2V0QXR0ciIsInNldEF0dHIiLCJybUF0dHIiLCJub3RpZnlDaGFuZ2UiLCJkZWZhdWx0QWRhcHRlciIsIm9uXyIsImRpc2FibGVkXyIsInNhdmVkVGFiSW5kZXhfIiwidG9nZ2xlT25EYXRhXyIsInRvZ2dsZU9mZkRhdGFfIiwiY2xpY2tIYW5kbGVyXyIsInRvZ2dsZUZyb21FdnRfIiwiaXNIYW5kbGluZ0tleWRvd25fIiwia2V5ZG93bkhhbmRsZXJfIiwiZXZ0IiwiaXNTcGFjZSIsInByZXZlbnREZWZhdWx0Iiwia2V5dXBIYW5kbGVyXyIsInJlZnJlc2hUb2dnbGVEYXRhIiwicGFyc2VKc29uRGF0YUF0dHJfIiwidG9nZ2xlIiwiaXNPbiIsImNsYXNzVG9SZW1vdmUiLCJjc3NDbGFzcyIsImNvbnRlbnQiLCJsYWJlbCIsImRhdGFBdHRyIiwidmFsIiwiSlNPTiIsInBhcnNlIiwiaXNEaXNhYmxlZCIsImtleWJvYXJkS2V5Iiwia2V5Q29kZSIsIkljb25Ub2dnbGVTdGF0ZSIsInByb3RvdHlwZSIsIk1EQ0NvbXBvbmVudCIsInJvb3QiLCJmb3VuZGF0aW9uIiwidW5kZWZpbmVkIiwicm9vdF8iLCJhcmdzIiwiaW5pdGlhbGl6ZSIsImZvdW5kYXRpb25fIiwiZ2V0RGVmYXVsdEZvdW5kYXRpb24iLCJpbml0IiwiaW5pdGlhbFN5bmNXaXRoRE9NIiwiRXJyb3IiLCJkZXN0cm95IiwiZXZ0VHlwZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2hvdWxkQnViYmxlIiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJNRENSaXBwbGVBZGFwdGVyIiwidGFyZ2V0IiwidmFyTmFtZSIsIlVOQk9VTkRFRCIsIkJHX0ZPQ1VTRUQiLCJGR19BQ1RJVkFUSU9OIiwiRkdfREVBQ1RJVkFUSU9OIiwiVkFSX0xFRlQiLCJWQVJfVE9QIiwiVkFSX0ZHX1NJWkUiLCJWQVJfRkdfU0NBTEUiLCJWQVJfRkdfVFJBTlNMQVRFX1NUQVJUIiwiVkFSX0ZHX1RSQU5TTEFURV9FTkQiLCJudW1iZXJzIiwiUEFERElORyIsIklOSVRJQUxfT1JJR0lOX1NDQUxFIiwiREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMiLCJGR19ERUFDVElWQVRJT05fTVMiLCJUQVBfREVMQVlfTVMiLCJzdXBwb3J0c0Nzc1ZhcmlhYmxlc18iLCJzdXBwb3J0c1Bhc3NpdmVfIiwiZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1ZyIsIndpbmRvd09iaiIsIm5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImhhc1BzZXVkb1ZhckJ1ZyIsImJvcmRlclRvcFN0eWxlIiwicmVtb3ZlIiwic3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJmb3JjZVJlZnJlc2giLCJzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCIsIkNTUyIsInN1cHBvcnRzIiwiZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyIsIndlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyIsImFwcGx5UGFzc2l2ZSIsImdsb2JhbE9iaiIsImlzU3VwcG9ydGVkIiwicGFzc2l2ZSIsImUiLCJnZXRNYXRjaGVzUHJvcGVydHkiLCJIVE1MRWxlbWVudFByb3RvdHlwZSIsIm1hdGNoZXNNZXRob2RzIiwibWV0aG9kIiwiaSIsImxlbmd0aCIsIm1hdGNoZXNNZXRob2QiLCJnZXROb3JtYWxpemVkRXZlbnRDb29yZHMiLCJldiIsInBhZ2VPZmZzZXQiLCJjbGllbnRSZWN0IiwieCIsInkiLCJkb2N1bWVudFgiLCJsZWZ0IiwiZG9jdW1lbnRZIiwidG9wIiwibm9ybWFsaXplZFgiLCJub3JtYWxpemVkWSIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIkFDVElWQVRJT05fRVZFTlRfVFlQRVMiLCJQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyIsImFjdGl2YXRlZFRhcmdldHMiLCJNRENSaXBwbGVGb3VuZGF0aW9uIiwiYnJvd3NlclN1cHBvcnRzQ3NzVmFycyIsImlzVW5ib3VuZGVkIiwiaXNTdXJmYWNlQWN0aXZlIiwiaXNTdXJmYWNlRGlzYWJsZWQiLCJjb250YWluc0V2ZW50VGFyZ2V0IiwicmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyUmVzaXplSGFuZGxlciIsImRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwidXBkYXRlQ3NzVmFyaWFibGUiLCJjb21wdXRlQm91bmRpbmdSZWN0IiwiZ2V0V2luZG93UGFnZU9mZnNldCIsImxheW91dEZyYW1lXyIsImZyYW1lXyIsIndpZHRoIiwiaGVpZ2h0IiwiYWN0aXZhdGlvblN0YXRlXyIsImRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfIiwiaW5pdGlhbFNpemVfIiwibWF4UmFkaXVzXyIsImFjdGl2YXRlSGFuZGxlcl8iLCJhY3RpdmF0ZV8iLCJkZWFjdGl2YXRlSGFuZGxlcl8iLCJkZWFjdGl2YXRlXyIsImZvY3VzSGFuZGxlcl8iLCJoYW5kbGVGb2N1cyIsImJsdXJIYW5kbGVyXyIsImhhbmRsZUJsdXIiLCJyZXNpemVIYW5kbGVyXyIsImxheW91dCIsInVuYm91bmRlZENvb3Jkc18iLCJmZ1NjYWxlXyIsImFjdGl2YXRpb25UaW1lcl8iLCJmZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8iLCJhY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfIiwiYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfIiwicnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfIiwicHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfIiwiaXNBY3RpdmF0ZWQiLCJoYXNEZWFjdGl2YXRpb25VWFJ1biIsIndhc0FjdGl2YXRlZEJ5UG9pbnRlciIsIndhc0VsZW1lbnRNYWRlQWN0aXZlIiwiYWN0aXZhdGlvbkV2ZW50IiwiaXNQcm9ncmFtbWF0aWMiLCJzdXBwb3J0c1ByZXNzUmlwcGxlIiwic3VwcG9ydHNQcmVzc1JpcHBsZV8iLCJyZWdpc3RlclJvb3RIYW5kbGVyc18iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsYXlvdXRJbnRlcm5hbF8iLCJjbGVhclRpbWVvdXQiLCJyZW1vdmVDc3NWYXJzXyIsImRlcmVnaXN0ZXJSb290SGFuZGxlcnNfIiwiZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyIsImZvckVhY2giLCJPYmplY3QiLCJrZXlzIiwiayIsImluZGV4T2YiLCJhY3RpdmF0aW9uU3RhdGUiLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudCIsImlzU2FtZUludGVyYWN0aW9uIiwiaGFzQWN0aXZhdGVkQ2hpbGQiLCJzb21lIiwicmVzZXRBY3RpdmF0aW9uU3RhdGVfIiwicHVzaCIsInJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfIiwiY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8iLCJhbmltYXRlQWN0aXZhdGlvbl8iLCJldmVudCIsInRyYW5zbGF0ZVN0YXJ0IiwidHJhbnNsYXRlRW5kIiwiZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXyIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXyIsInNldFRpbWVvdXQiLCJhY3RpdmF0aW9uSGFzRW5kZWQiLCJzdGF0ZSIsImFuaW1hdGVEZWFjdGl2YXRpb25fIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtYXhEaW0iLCJtYXgiLCJnZXRCb3VuZGVkUmFkaXVzIiwiaHlwb3RlbnVzZSIsInNxcnQiLCJwb3ciLCJ1cGRhdGVMYXlvdXRDc3NWYXJzXyIsInJvdW5kIiwidW5ib3VuZGVkIiwiTURDUmlwcGxlIiwiZGlzYWJsZWQiLCJ1bmJvdW5kZWRfIiwic2V0VW5ib3VuZGVkIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiY3JlYXRlQWRhcHRlciIsImRhdGFzZXQiLCJCb29sZWFuIiwic2V0VW5ib3VuZGVkXyIsInJpcHBsZSIsImluc3RhbmNlIiwiTUFUQ0hFUyIsInV0aWwiLCJIVE1MRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImNvbnRhaW5zIiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJSaXBwbGVDYXBhYmxlU3VyZmFjZSIsIlJpcHBsZUJhc2UiLCJyZWYiLCJfbWF0Y2hlcyIsIm9wdGlvbnMiLCIkZWwiLCIkc2V0IiwiY2xhc3NlcyIsIiRkZWxldGUiLCJzdHlsZXMiLCJSaXBwbGVNaXhpbiIsIm1vdW50ZWQiLCJiZWZvcmVEZXN0cm95Iiwibm9ybWFsaXplQ29tcG9uZW50IiwiY29tcGlsZWRUZW1wbGF0ZSIsImluamVjdFN0eWxlIiwiZGVmYXVsdEV4cG9ydCIsInNjb3BlSWQiLCJpc0Z1bmN0aW9uYWxUZW1wbGF0ZSIsIm1vZHVsZUlkZW50aWZpZXIiLCJpc1NoYWRvd01vZGUiLCJjcmVhdGVJbmplY3RvciIsImNyZWF0ZUluamVjdG9yU1NSIiwiY3JlYXRlSW5qZWN0b3JTaGFkb3ciLCJzdGF0aWNSZW5kZXJGbnMiLCJfY29tcGlsZWQiLCJfc2NvcGVJZCIsImhvb2siLCIkdm5vZGUiLCJzc3JDb250ZXh0IiwicGFyZW50IiwiX19WVUVfU1NSX0NPTlRFWFRfXyIsImNhbGwiLCJfcmVnaXN0ZXJlZENvbXBvbmVudHMiLCJfc3NyUmVnaXN0ZXIiLCIkcm9vdCIsIiRvcHRpb25zIiwic2hhZG93Um9vdCIsIm9yaWdpbmFsUmVuZGVyIiwicmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIiwiaCIsImV4aXN0aW5nIiwiYmVmb3JlQ3JlYXRlIiwiY29uY2F0Iiwic2NyaXB0IiwibWRjSUNvblRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUFPLFNBQVNBLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0lBQy9CO0lBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0lBQ0EsTUFBSSxPQUFPQyxNQUFQ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
