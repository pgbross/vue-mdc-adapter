/**
* @module vue-mdc-adaptersnackbar 0.19.0-beta
* @exports VueMDCSnackbar
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.42.0","material-components-web":"^0.42.1"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.VueMDCSnackbar = factory());
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
    var cssClasses = {
      ROOT: 'mdc-snackbar',
      TEXT: 'mdc-snackbar__text',
      ACTION_WRAPPER: 'mdc-snackbar__action-wrapper',
      ACTION_BUTTON: 'mdc-snackbar__action-button',
      ACTIVE: 'mdc-snackbar--active',
      MULTILINE: 'mdc-snackbar--multiline',
      ACTION_ON_BOTTOM: 'mdc-snackbar--action-on-bottom'
    };
    var strings = {
      TEXT_SELECTOR: '.mdc-snackbar__text',
      ACTION_WRAPPER_SELECTOR: '.mdc-snackbar__action-wrapper',
      ACTION_BUTTON_SELECTOR: '.mdc-snackbar__action-button',
      SHOW_EVENT: 'MDCSnackbar:show',
      HIDE_EVENT: 'MDCSnackbar:hide'
    };
    var numbers = {
      MESSAGE_TIMEOUT: 2750
    };

    var MDCSnackbarFoundation =
    /*#__PURE__*/
    function (_MDCFoundation) {
      _inherits(MDCSnackbarFoundation, _MDCFoundation);

      _createClass(MDCSnackbarFoundation, [{
        key: "active",
        get: function get() {
          return this.active_;
        }
      }], [{
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
            setAriaHidden: function setAriaHidden() {},
            unsetAriaHidden: function unsetAriaHidden() {},
            setActionAriaHidden: function setActionAriaHidden() {},
            unsetActionAriaHidden: function unsetActionAriaHidden() {},
            setActionText: function setActionText()
            /* actionText: string */
            {},
            setMessageText: function setMessageText()
            /* message: string */
            {},
            setFocus: function setFocus() {},
            isFocused: function isFocused() {
              return (
                /* boolean */
                false
              );
            },
            visibilityIsHidden: function visibilityIsHidden() {
              return (
                /* boolean */
                false
              );
            },
            registerCapturedBlurHandler: function registerCapturedBlurHandler()
            /* handler: EventListener */
            {},
            deregisterCapturedBlurHandler: function deregisterCapturedBlurHandler()
            /* handler: EventListener */
            {},
            registerVisibilityChangeHandler: function registerVisibilityChangeHandler()
            /* handler: EventListener */
            {},
            deregisterVisibilityChangeHandler: function deregisterVisibilityChangeHandler()
            /* handler: EventListener */
            {},
            registerCapturedInteractionHandler: function registerCapturedInteractionHandler()
            /* evtType: string, handler: EventListener */
            {},
            deregisterCapturedInteractionHandler: function deregisterCapturedInteractionHandler()
            /* evtType: string, handler: EventListener */
            {},
            registerActionClickHandler: function registerActionClickHandler()
            /* handler: EventListener */
            {},
            deregisterActionClickHandler: function deregisterActionClickHandler()
            /* handler: EventListener */
            {},
            registerTransitionEndHandler: function registerTransitionEndHandler()
            /* handler: EventListener */
            {},
            deregisterTransitionEndHandler: function deregisterTransitionEndHandler()
            /* handler: EventListener */
            {},
            notifyShow: function notifyShow() {},
            notifyHide: function notifyHide() {}
          };
        }
      }]);

      function MDCSnackbarFoundation(adapter) {
        var _this;

        _classCallCheck(this, MDCSnackbarFoundation);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCSnackbarFoundation).call(this, _extends(MDCSnackbarFoundation.defaultAdapter, adapter)));
        _this.active_ = false;
        _this.actionWasClicked_ = false;
        _this.dismissOnAction_ = true;
        _this.firstFocus_ = true;
        _this.pointerDownRecognized_ = false;
        _this.snackbarHasFocus_ = false;
        _this.snackbarData_ = null;
        _this.queue_ = [];

        _this.actionClickHandler_ = function () {
          _this.actionWasClicked_ = true;

          _this.invokeAction_();
        };

        _this.visibilitychangeHandler_ = function () {
          clearTimeout(_this.timeoutId_);
          _this.snackbarHasFocus_ = true;

          if (!_this.adapter_.visibilityIsHidden()) {
            setTimeout(_this.cleanup_.bind(_assertThisInitialized(_assertThisInitialized(_this))), _this.snackbarData_.timeout || numbers.MESSAGE_TIMEOUT);
          }
        };

        _this.interactionHandler_ = function (evt) {
          if (evt.type === 'focus' && !_this.adapter_.isFocused()) {
            return;
          }

          if (evt.type === 'touchstart' || evt.type === 'mousedown') {
            _this.pointerDownRecognized_ = true;
          }

          _this.handlePossibleTabKeyboardFocus_(evt);

          if (evt.type === 'focus') {
            _this.pointerDownRecognized_ = false;
          }
        };

        _this.blurHandler_ = function () {
          clearTimeout(_this.timeoutId_);
          _this.snackbarHasFocus_ = false;
          _this.timeoutId_ = setTimeout(_this.cleanup_.bind(_assertThisInitialized(_assertThisInitialized(_this))), _this.snackbarData_.timeout || numbers.MESSAGE_TIMEOUT);
        };

        return _this;
      }

      _createClass(MDCSnackbarFoundation, [{
        key: "init",
        value: function init() {
          this.adapter_.registerActionClickHandler(this.actionClickHandler_);
          this.adapter_.setAriaHidden();
          this.adapter_.setActionAriaHidden();
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var _this2 = this;

          this.adapter_.deregisterActionClickHandler(this.actionClickHandler_);
          this.adapter_.deregisterCapturedBlurHandler(this.blurHandler_);
          this.adapter_.deregisterVisibilityChangeHandler(this.visibilitychangeHandler_);
          ['touchstart', 'mousedown', 'focus'].forEach(function (evtType) {
            _this2.adapter_.deregisterCapturedInteractionHandler(evtType, _this2.interactionHandler_);
          });
        }
      }, {
        key: "dismissesOnAction",
        value: function dismissesOnAction() {
          return this.dismissOnAction_;
        }
      }, {
        key: "setDismissOnAction",
        value: function setDismissOnAction(dismissOnAction) {
          this.dismissOnAction_ = !!dismissOnAction;
        }
      }, {
        key: "show",
        value: function show(data) {
          var _this3 = this;

          if (!data) {
            throw new Error('Please provide a data object with at least a message to display.');
          }

          if (!data.message) {
            throw new Error('Please provide a message to be displayed.');
          }

          if (data.actionHandler && !data.actionText) {
            throw new Error('Please provide action text with the handler.');
          }

          if (this.active) {
            this.queue_.push(data);
            return;
          }

          clearTimeout(this.timeoutId_);
          this.snackbarData_ = data;
          this.firstFocus_ = true;
          this.adapter_.registerVisibilityChangeHandler(this.visibilitychangeHandler_);
          this.adapter_.registerCapturedBlurHandler(this.blurHandler_);
          ['touchstart', 'mousedown', 'focus'].forEach(function (evtType) {
            _this3.adapter_.registerCapturedInteractionHandler(evtType, _this3.interactionHandler_);
          });
          var ACTIVE = cssClasses.ACTIVE,
              MULTILINE = cssClasses.MULTILINE,
              ACTION_ON_BOTTOM = cssClasses.ACTION_ON_BOTTOM;
          this.adapter_.setMessageText(this.snackbarData_.message);

          if (this.snackbarData_.multiline) {
            this.adapter_.addClass(MULTILINE);

            if (this.snackbarData_.actionOnBottom) {
              this.adapter_.addClass(ACTION_ON_BOTTOM);
            }
          }

          if (this.snackbarData_.actionHandler) {
            this.adapter_.setActionText(this.snackbarData_.actionText);
            this.actionHandler_ = this.snackbarData_.actionHandler;
            this.setActionHidden_(false);
          } else {
            this.setActionHidden_(true);
            this.actionHandler_ = null;
            this.adapter_.setActionText(null);
          }

          this.active_ = true;
          this.adapter_.addClass(ACTIVE);
          this.adapter_.unsetAriaHidden();
          this.adapter_.notifyShow();
          this.timeoutId_ = setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || numbers.MESSAGE_TIMEOUT);
        }
      }, {
        key: "handlePossibleTabKeyboardFocus_",
        value: function handlePossibleTabKeyboardFocus_() {
          var hijackFocus = this.firstFocus_ && !this.pointerDownRecognized_;

          if (hijackFocus) {
            this.setFocusOnAction_();
          }

          this.firstFocus_ = false;
        }
      }, {
        key: "setFocusOnAction_",
        value: function setFocusOnAction_() {
          this.adapter_.setFocus();
          this.snackbarHasFocus_ = true;
          this.firstFocus_ = false;
        }
      }, {
        key: "invokeAction_",
        value: function invokeAction_() {
          try {
            if (!this.actionHandler_) {
              return;
            }

            this.actionHandler_();
          } finally {
            if (this.dismissOnAction_) {
              this.cleanup_();
            }
          }
        }
      }, {
        key: "cleanup_",
        value: function cleanup_() {
          var _this4 = this;

          var allowDismissal = !this.snackbarHasFocus_ || this.actionWasClicked_;

          if (allowDismissal) {
            var ACTIVE = cssClasses.ACTIVE,
                MULTILINE = cssClasses.MULTILINE,
                ACTION_ON_BOTTOM = cssClasses.ACTION_ON_BOTTOM;
            this.adapter_.removeClass(ACTIVE);

            var handler = function handler() {
              clearTimeout(_this4.timeoutId_);

              _this4.adapter_.deregisterTransitionEndHandler(handler);

              _this4.adapter_.removeClass(MULTILINE);

              _this4.adapter_.removeClass(ACTION_ON_BOTTOM);

              _this4.setActionHidden_(true);

              _this4.adapter_.setAriaHidden();

              _this4.active_ = false;
              _this4.snackbarHasFocus_ = false;

              _this4.adapter_.notifyHide();

              _this4.showNext_();
            };

            this.adapter_.registerTransitionEndHandler(handler);
          }
        }
      }, {
        key: "showNext_",
        value: function showNext_() {
          if (!this.queue_.length) {
            return;
          }

          this.show(this.queue_.shift());
        }
      }, {
        key: "setActionHidden_",
        value: function setActionHidden_(isHidden) {
          if (isHidden) {
            this.adapter_.setActionAriaHidden();
          } else {
            this.adapter_.unsetActionAriaHidden();
          }
        }
      }]);

      return MDCSnackbarFoundation;
    }(MDCFoundation);

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
    /** @const {Object<string, !VendorPropertyMapType>} */

    var eventTypeMap = {
      'animationstart': {
        noPrefix: 'animationstart',
        webkitPrefix: 'webkitAnimationStart',
        styleProperty: 'animation'
      },
      'animationend': {
        noPrefix: 'animationend',
        webkitPrefix: 'webkitAnimationEnd',
        styleProperty: 'animation'
      },
      'animationiteration': {
        noPrefix: 'animationiteration',
        webkitPrefix: 'webkitAnimationIteration',
        styleProperty: 'animation'
      },
      'transitionend': {
        noPrefix: 'transitionend',
        webkitPrefix: 'webkitTransitionEnd',
        styleProperty: 'transition'
      }
    };
    /** @const {Object<string, !VendorPropertyMapType>} */

    var cssPropertyMap = {
      'animation': {
        noPrefix: 'animation',
        webkitPrefix: '-webkit-animation'
      },
      'transform': {
        noPrefix: 'transform',
        webkitPrefix: '-webkit-transform'
      },
      'transition': {
        noPrefix: 'transition',
        webkitPrefix: '-webkit-transition'
      }
    };
    /**
     * @param {!Object} windowObj
     * @return {boolean}
     */

    function hasProperShape(windowObj) {
      return windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function';
    }
    /**
     * @param {string} eventType
     * @return {boolean}
     */


    function eventFoundInMaps(eventType) {
      return eventType in eventTypeMap || eventType in cssPropertyMap;
    }
    /**
     * @param {string} eventType
     * @param {!Object<string, !VendorPropertyMapType>} map
     * @param {!Element} el
     * @return {string}
     */


    function getJavaScriptEventName(eventType, map, el) {
      return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
    }
    /**
     * Helper function to determine browser prefix for CSS3 animation events
     * and property names.
     * @param {!Object} windowObj
     * @param {string} eventType
     * @return {string}
     */


    function getAnimationName(windowObj, eventType) {
      if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
        return eventType;
      }

      var map =
      /** @type {!Object<string, !VendorPropertyMapType>} */
      eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
      var el = windowObj['document']['createElement']('div');
      var eventName = '';

      if (map === eventTypeMap) {
        eventName = getJavaScriptEventName(eventType, map, el);
      } else {
        eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
      }

      return eventName;
    } // Public functions to access getAnimationName() for JavaScript events or CSS
    /**
     * @param {!Object} windowObj
     * @param {string} eventType
     * @return {string}
     */

    function getCorrectEventName(windowObj, eventType) {
      return getAnimationName(windowObj, eventType);
    }

    //
    var script = {
      name: 'mdc-snackbar',
      model: {
        prop: 'snack',
        event: 'queued'
      },
      props: {
        'align-start': Boolean,
        snack: Object,
        event: String,
        'event-source': {
          type: Object,
          required: false,
          default: function _default() {
            return this.$root;
          }
        },
        'dismisses-on-action': {
          type: Boolean,
          default: true
        }
      },
      data: function data() {
        return {
          classes: {
            'mdc-snackbar--align-start': this.alignStart
          },
          message: '',
          actionText: '',
          hidden: false,
          actionHidden: false
        };
      },
      watch: {
        snack: 'onSnack'
      },
      mounted: function mounted() {
        var _this = this;

        this.foundation = new MDCSnackbarFoundation({
          addClass: function addClass(className) {
            return _this.$set(_this.classes, className, true);
          },
          removeClass: function removeClass(className) {
            return _this.$delete(_this.classes, className);
          },
          setAriaHidden: function setAriaHidden() {
            return _this.hidden = true;
          },
          unsetAriaHidden: function unsetAriaHidden() {
            return _this.hidden = false;
          },
          setActionAriaHidden: function setActionAriaHidden() {
            return _this.actionHidden = true;
          },
          unsetActionAriaHidden: function unsetActionAriaHidden() {
            return _this.actionHidden = false;
          },
          setActionText: function setActionText(text) {
            _this.actionText = text;
          },
          setMessageText: function setMessageText(text) {
            _this.message = text;
          },
          setFocus: function setFocus() {
            return _this.$refs.button.focus();
          },
          isFocused: function isFocused() {
            return document.activeElement === _this.$refs.button;
          },
          visibilityIsHidden: function visibilityIsHidden() {
            return document.hidden;
          },
          registerCapturedBlurHandler: function registerCapturedBlurHandler(handler) {
            return _this.$refs.button.addEventListener('blur', handler, true);
          },
          deregisterCapturedBlurHandler: function deregisterCapturedBlurHandler(handler) {
            return _this.$refs.button.removeEventListener('blur', handler, true);
          },
          registerVisibilityChangeHandler: function registerVisibilityChangeHandler(handler) {
            return document.addEventListener('visibilitychange', handler);
          },
          deregisterVisibilityChangeHandler: function deregisterVisibilityChangeHandler(handler) {
            return document.removeEventListener('visibilitychange', handler);
          },
          registerCapturedInteractionHandler: function registerCapturedInteractionHandler(evt, handler) {
            return document.body.addEventListener(evt, handler, true);
          },
          deregisterCapturedInteractionHandler: function deregisterCapturedInteractionHandler(evt, handler) {
            return document.body.removeEventListener(evt, handler, true);
          },
          registerActionClickHandler: function registerActionClickHandler(handler) {
            return _this.$refs.button.addEventListener('click', handler);
          },
          deregisterActionClickHandler: function deregisterActionClickHandler(handler) {
            return _this.$refs.button.removeEventListener('click', handler);
          },
          registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
            var root = _this.$refs.root;
            root && root.addEventListener(getCorrectEventName(window, 'transitionend'), handler);
          },
          deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
            var root = _this.$refs.root;
            root && root.removeEventListener(getCorrectEventName(window, 'transitionend'), handler);
          },
          notifyShow: function notifyShow() {
            return _this.$emit('show');
          },
          notifyHide: function notifyHide() {
            return _this.$emit('hide');
          }
        });
        this.foundation.init(); // if event specified use it, else if no snack prop then use default.

        this.eventName = this.event || (this.snack === void 0 ? 'show-snackbar' : null);

        if (this.eventName) {
          this.eventSource.$on(this.eventName, this.show);
        }

        this.foundation.setDismissOnAction(this.dismissesOnAction);
      },
      beforeDestroy: function beforeDestroy() {
        if (this.eventSource) {
          this.eventSource.$off(this.eventName, this.show);
        }

        this.foundation.destroy();
      },
      methods: {
        onSnack: function onSnack(snack) {
          if (snack && snack.message) {
            this.foundation.show(snack);
            this.$emit('queued', snack);
          }
        },
        show: function show(data) {
          this.foundation.show(data);
        }
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
          ref: "root",
          staticClass: "mdc-snackbar",
          class: _vm.classes,
          attrs: {
            "aria-hidden": _vm.hidden,
            "aria-live": "assertive",
            "aria-atomic": "true"
          }
        },
        [
          _c("div", { staticClass: "mdc-snackbar__text" }, [
            _vm._v(_vm._s(_vm.message))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mdc-snackbar__action-wrapper" }, [
            _c(
              "button",
              {
                ref: "button",
                staticClass: "mdc-snackbar__action-button",
                attrs: { "aria-hidden": _vm.actionHidden, type: "button" }
              },
              [_vm._v("\n      " + _vm._s(_vm.actionText) + "\n    ")]
            )
          ])
        ]
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
      /* component normalizer */
      function __vue_normalize__(
        template, style, script$$1,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "/ddata/extra/vma/components/snackbar/mdc-snackbar.vue";

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
      

      
      var mdcSnackbar = __vue_normalize__(
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
      mdcSnackbar: mdcSnackbar
    });

    autoInit(plugin);

    return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2tiYXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9hdXRvLWluaXQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYmFzZS1wbHVnaW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWV2ZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zbmFja2Jhci9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NuYWNrYmFyL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2FuaW1hdGlvbi9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvc25hY2tiYXIvbWRjLXNuYWNrYmFyLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvc25hY2tiYXIvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3NuYWNrYmFyL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCIvKiBnbG9iYWwgQ3VzdG9tRXZlbnQgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXRDdXN0b21FdmVudChlbCwgZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgbGV0IGV2dFxuICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpXG4gIH1cbiAgZWwuZGlzcGF0Y2hFdmVudChldnQpXG59XG4iLCJjb25zdCBzY29wZSA9XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMHgxMDAwMDAwMCkpLnRvU3RyaW5nKCkgKyAnLSdcblxuZXhwb3J0IGNvbnN0IFZNQVVuaXF1ZUlkTWl4aW4gPSB7XG4gIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICB0aGlzLnZtYV91aWRfID0gc2NvcGUgKyB0aGlzLl91aWRcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIEFcbiAqL1xuY2xhc3MgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW17Y3NzQ2xhc3Nlc30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte3N0cmluZ3N9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte251bWJlcnN9ICovXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFPYmplY3R9ICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgIC8vIHZhbGlkYXRpb24uXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7QT19IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIgPSB7fSkge1xuICAgIC8qKiBAcHJvdGVjdGVkIHshQX0gKi9cbiAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBGXG4gKi9cbmNsYXNzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENDb21wb25lbnR9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7Rj19IGZvdW5kYXRpb25cbiAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb290LCBmb3VuZGF0aW9uID0gdW5kZWZpbmVkLCAuLi5hcmdzKSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuICAgIHRoaXMucm9vdF8gPSByb290O1xuICAgIHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcbiAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgLy8gdGhpcy5yb290XyBpcyBkZWZpbmVkIGFuZCBjYW4gYmUgdXNlZCB3aXRoaW4gdGhlIGZvdW5kYXRpb24gY2xhc3MuXG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFGfSAqL1xuICAgIHRoaXMuZm91bmRhdGlvbl8gPSBmb3VuZGF0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmdldERlZmF1bHRGb3VuZGF0aW9uKCkgOiBmb3VuZGF0aW9uO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gIH1cblxuICBpbml0aWFsaXplKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshRn0gZm91bmRhdGlvblxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgLy8gY29tcG9uZW50LlxuICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogbGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgbGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gcmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiB1bmxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLFxuICAgKiB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFPYmplY3R9IGV2dERhdGFcbiAgICogQHBhcmFtIHtib29sZWFuPX0gc2hvdWxkQnViYmxlXG4gICAqL1xuICBlbWl0KGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gICAgbGV0IGV2dDtcbiAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5yb290Xy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuZXhwb3J0IHtNRENGb3VuZGF0aW9uLCBNRENDb21wb25lbnR9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgUk9PVDogJ21kYy1zbmFja2JhcicsXG4gIFRFWFQ6ICdtZGMtc25hY2tiYXJfX3RleHQnLFxuICBBQ1RJT05fV1JBUFBFUjogJ21kYy1zbmFja2Jhcl9fYWN0aW9uLXdyYXBwZXInLFxuICBBQ1RJT05fQlVUVE9OOiAnbWRjLXNuYWNrYmFyX19hY3Rpb24tYnV0dG9uJyxcbiAgQUNUSVZFOiAnbWRjLXNuYWNrYmFyLS1hY3RpdmUnLFxuICBNVUxUSUxJTkU6ICdtZGMtc25hY2tiYXItLW11bHRpbGluZScsXG4gIEFDVElPTl9PTl9CT1RUT006ICdtZGMtc25hY2tiYXItLWFjdGlvbi1vbi1ib3R0b20nLFxufTtcblxuZXhwb3J0IGNvbnN0IHN0cmluZ3MgPSB7XG4gIFRFWFRfU0VMRUNUT1I6ICcubWRjLXNuYWNrYmFyX190ZXh0JyxcbiAgQUNUSU9OX1dSQVBQRVJfU0VMRUNUT1I6ICcubWRjLXNuYWNrYmFyX19hY3Rpb24td3JhcHBlcicsXG4gIEFDVElPTl9CVVRUT05fU0VMRUNUT1I6ICcubWRjLXNuYWNrYmFyX19hY3Rpb24tYnV0dG9uJyxcbiAgU0hPV19FVkVOVDogJ01EQ1NuYWNrYmFyOnNob3cnLFxuICBISURFX0VWRU5UOiAnTURDU25hY2tiYXI6aGlkZScsXG59O1xuXG5leHBvcnQgY29uc3QgbnVtYmVycyA9IHtcbiAgTUVTU0FHRV9USU1FT1VUOiAyNzUwLFxufTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQge01EQ0ZvdW5kYXRpb259IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2luZGV4JztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNRENTbmFja2JhckZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHNldEFyaWFIaWRkZW46ICgpID0+IHt9LFxuICAgICAgdW5zZXRBcmlhSGlkZGVuOiAoKSA9PiB7fSxcbiAgICAgIHNldEFjdGlvbkFyaWFIaWRkZW46ICgpID0+IHt9LFxuICAgICAgdW5zZXRBY3Rpb25BcmlhSGlkZGVuOiAoKSA9PiB7fSxcbiAgICAgIHNldEFjdGlvblRleHQ6ICgvKiBhY3Rpb25UZXh0OiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgc2V0TWVzc2FnZVRleHQ6ICgvKiBtZXNzYWdlOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgc2V0Rm9jdXM6ICgpID0+IHt9LFxuICAgICAgaXNGb2N1c2VkOiAoKSA9PiAvKiBib29sZWFuICovIGZhbHNlLFxuICAgICAgdmlzaWJpbGl0eUlzSGlkZGVuOiAoKSA9PiAvKiBib29sZWFuICovIGZhbHNlLFxuICAgICAgcmVnaXN0ZXJDYXB0dXJlZEJsdXJIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyQ2FwdHVyZWRCbHVySGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJWaXNpYmlsaXR5Q2hhbmdlSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclZpc2liaWxpdHlDaGFuZ2VIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckNhcHR1cmVkSW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJDYXB0dXJlZEludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckFjdGlvbkNsaWNrSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckFjdGlvbkNsaWNrSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJUcmFuc2l0aW9uRW5kSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclRyYW5zaXRpb25FbmRIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBub3RpZnlTaG93OiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeUhpZGU6ICgpID0+IHt9LFxuICAgIH07XG4gIH1cblxuICBnZXQgYWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZV87XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENTbmFja2JhckZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aW9uV2FzQ2xpY2tlZF8gPSBmYWxzZTtcbiAgICB0aGlzLmRpc21pc3NPbkFjdGlvbl8gPSB0cnVlO1xuICAgIHRoaXMuZmlyc3RGb2N1c18gPSB0cnVlO1xuICAgIHRoaXMucG9pbnRlckRvd25SZWNvZ25pemVkXyA9IGZhbHNlO1xuICAgIHRoaXMuc25hY2tiYXJIYXNGb2N1c18gPSBmYWxzZTtcbiAgICB0aGlzLnNuYWNrYmFyRGF0YV8gPSBudWxsO1xuICAgIHRoaXMucXVldWVfID0gW107XG4gICAgdGhpcy5hY3Rpb25DbGlja0hhbmRsZXJfID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3Rpb25XYXNDbGlja2VkXyA9IHRydWU7XG4gICAgICB0aGlzLmludm9rZUFjdGlvbl8oKTtcbiAgICB9O1xuICAgIHRoaXMudmlzaWJpbGl0eWNoYW5nZUhhbmRsZXJfID0gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkXyk7XG4gICAgICB0aGlzLnNuYWNrYmFySGFzRm9jdXNfID0gdHJ1ZTtcblxuICAgICAgaWYgKCF0aGlzLmFkYXB0ZXJfLnZpc2liaWxpdHlJc0hpZGRlbigpKSB7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5jbGVhbnVwXy5iaW5kKHRoaXMpLCB0aGlzLnNuYWNrYmFyRGF0YV8udGltZW91dCB8fCBudW1iZXJzLk1FU1NBR0VfVElNRU9VVCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmludGVyYWN0aW9uSGFuZGxlcl8gPSAoZXZ0KSA9PiB7XG4gICAgICBpZiAoZXZ0LnR5cGUgPT09ICdmb2N1cycgJiYgIXRoaXMuYWRhcHRlcl8uaXNGb2N1c2VkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGV2dC50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZXZ0LnR5cGUgPT09ICdtb3VzZWRvd24nKSB7XG4gICAgICAgIHRoaXMucG9pbnRlckRvd25SZWNvZ25pemVkXyA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLmhhbmRsZVBvc3NpYmxlVGFiS2V5Ym9hcmRGb2N1c18oZXZ0KTtcblxuICAgICAgaWYgKGV2dC50eXBlID09PSAnZm9jdXMnKSB7XG4gICAgICAgIHRoaXMucG9pbnRlckRvd25SZWNvZ25pemVkXyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5ibHVySGFuZGxlcl8gPSAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWRfKTtcbiAgICAgIHRoaXMuc25hY2tiYXJIYXNGb2N1c18gPSBmYWxzZTtcbiAgICAgIHRoaXMudGltZW91dElkXyA9IHNldFRpbWVvdXQodGhpcy5jbGVhbnVwXy5iaW5kKHRoaXMpLCB0aGlzLnNuYWNrYmFyRGF0YV8udGltZW91dCB8fCBudW1iZXJzLk1FU1NBR0VfVElNRU9VVCk7XG4gICAgfTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckFjdGlvbkNsaWNrSGFuZGxlcih0aGlzLmFjdGlvbkNsaWNrSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXJpYUhpZGRlbigpO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QWN0aW9uQXJpYUhpZGRlbigpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJBY3Rpb25DbGlja0hhbmRsZXIodGhpcy5hY3Rpb25DbGlja0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJDYXB0dXJlZEJsdXJIYW5kbGVyKHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJWaXNpYmlsaXR5Q2hhbmdlSGFuZGxlcih0aGlzLnZpc2liaWxpdHljaGFuZ2VIYW5kbGVyXyk7XG4gICAgWyd0b3VjaHN0YXJ0JywgJ21vdXNlZG93bicsICdmb2N1cyddLmZvckVhY2goKGV2dFR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckNhcHR1cmVkSW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIHRoaXMuaW50ZXJhY3Rpb25IYW5kbGVyXyk7XG4gICAgfSk7XG4gIH1cblxuICBkaXNtaXNzZXNPbkFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNtaXNzT25BY3Rpb25fO1xuICB9XG5cbiAgc2V0RGlzbWlzc09uQWN0aW9uKGRpc21pc3NPbkFjdGlvbikge1xuICAgIHRoaXMuZGlzbWlzc09uQWN0aW9uXyA9ICEhZGlzbWlzc09uQWN0aW9uO1xuICB9XG5cbiAgc2hvdyhkYXRhKSB7XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdQbGVhc2UgcHJvdmlkZSBhIGRhdGEgb2JqZWN0IHdpdGggYXQgbGVhc3QgYSBtZXNzYWdlIHRvIGRpc3BsYXkuJyk7XG4gICAgfVxuICAgIGlmICghZGF0YS5tZXNzYWdlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgbWVzc2FnZSB0byBiZSBkaXNwbGF5ZWQuJyk7XG4gICAgfVxuICAgIGlmIChkYXRhLmFjdGlvbkhhbmRsZXIgJiYgIWRhdGEuYWN0aW9uVGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBhY3Rpb24gdGV4dCB3aXRoIHRoZSBoYW5kbGVyLicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMucXVldWVfLnB1c2goZGF0YSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZF8pO1xuICAgIHRoaXMuc25hY2tiYXJEYXRhXyA9IGRhdGE7XG4gICAgdGhpcy5maXJzdEZvY3VzXyA9IHRydWU7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclZpc2liaWxpdHlDaGFuZ2VIYW5kbGVyKHRoaXMudmlzaWJpbGl0eWNoYW5nZUhhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyQ2FwdHVyZWRCbHVySGFuZGxlcih0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgWyd0b3VjaHN0YXJ0JywgJ21vdXNlZG93bicsICdmb2N1cyddLmZvckVhY2goKGV2dFR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJDYXB0dXJlZEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCB0aGlzLmludGVyYWN0aW9uSGFuZGxlcl8pO1xuICAgIH0pO1xuXG4gICAgY29uc3Qge0FDVElWRSwgTVVMVElMSU5FLCBBQ1RJT05fT05fQk9UVE9NfSA9IGNzc0NsYXNzZXM7XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnNldE1lc3NhZ2VUZXh0KHRoaXMuc25hY2tiYXJEYXRhXy5tZXNzYWdlKTtcblxuICAgIGlmICh0aGlzLnNuYWNrYmFyRGF0YV8ubXVsdGlsaW5lKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1VTFRJTElORSk7XG4gICAgICBpZiAodGhpcy5zbmFja2JhckRhdGFfLmFjdGlvbk9uQm90dG9tKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoQUNUSU9OX09OX0JPVFRPTSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc25hY2tiYXJEYXRhXy5hY3Rpb25IYW5kbGVyKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEFjdGlvblRleHQodGhpcy5zbmFja2JhckRhdGFfLmFjdGlvblRleHQpO1xuICAgICAgdGhpcy5hY3Rpb25IYW5kbGVyXyA9IHRoaXMuc25hY2tiYXJEYXRhXy5hY3Rpb25IYW5kbGVyO1xuICAgICAgdGhpcy5zZXRBY3Rpb25IaWRkZW5fKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRBY3Rpb25IaWRkZW5fKHRydWUpO1xuICAgICAgdGhpcy5hY3Rpb25IYW5kbGVyXyA9IG51bGw7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEFjdGlvblRleHQobnVsbCk7XG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVfID0gdHJ1ZTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEFDVElWRSk7XG4gICAgdGhpcy5hZGFwdGVyXy51bnNldEFyaWFIaWRkZW4oKTtcbiAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeVNob3coKTtcblxuICAgIHRoaXMudGltZW91dElkXyA9IHNldFRpbWVvdXQodGhpcy5jbGVhbnVwXy5iaW5kKHRoaXMpLCB0aGlzLnNuYWNrYmFyRGF0YV8udGltZW91dCB8fCBudW1iZXJzLk1FU1NBR0VfVElNRU9VVCk7XG4gIH1cblxuICBoYW5kbGVQb3NzaWJsZVRhYktleWJvYXJkRm9jdXNfKCkge1xuICAgIGNvbnN0IGhpamFja0ZvY3VzID1cbiAgICAgIHRoaXMuZmlyc3RGb2N1c18gJiYgIXRoaXMucG9pbnRlckRvd25SZWNvZ25pemVkXztcblxuICAgIGlmIChoaWphY2tGb2N1cykge1xuICAgICAgdGhpcy5zZXRGb2N1c09uQWN0aW9uXygpO1xuICAgIH1cblxuICAgIHRoaXMuZmlyc3RGb2N1c18gPSBmYWxzZTtcbiAgfVxuXG4gIHNldEZvY3VzT25BY3Rpb25fKCkge1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0Rm9jdXMoKTtcbiAgICB0aGlzLnNuYWNrYmFySGFzRm9jdXNfID0gdHJ1ZTtcbiAgICB0aGlzLmZpcnN0Rm9jdXNfID0gZmFsc2U7XG4gIH1cblxuICBpbnZva2VBY3Rpb25fKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXRoaXMuYWN0aW9uSGFuZGxlcl8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFjdGlvbkhhbmRsZXJfKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmICh0aGlzLmRpc21pc3NPbkFjdGlvbl8pIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwXygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsZWFudXBfKCkge1xuICAgIGNvbnN0IGFsbG93RGlzbWlzc2FsID0gIXRoaXMuc25hY2tiYXJIYXNGb2N1c18gfHwgdGhpcy5hY3Rpb25XYXNDbGlja2VkXztcblxuICAgIGlmIChhbGxvd0Rpc21pc3NhbCkge1xuICAgICAgY29uc3Qge0FDVElWRSwgTVVMVElMSU5FLCBBQ1RJT05fT05fQk9UVE9NfSA9IGNzc0NsYXNzZXM7XG5cbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoQUNUSVZFKTtcblxuICAgICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclRyYW5zaXRpb25FbmRIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1VTFRJTElORSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoQUNUSU9OX09OX0JPVFRPTSk7XG4gICAgICAgIHRoaXMuc2V0QWN0aW9uSGlkZGVuXyh0cnVlKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBcmlhSGlkZGVuKCk7XG4gICAgICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNuYWNrYmFySGFzRm9jdXNfID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5SGlkZSgpO1xuICAgICAgICB0aGlzLnNob3dOZXh0XygpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclRyYW5zaXRpb25FbmRIYW5kbGVyKGhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dOZXh0XygpIHtcbiAgICBpZiAoIXRoaXMucXVldWVfLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNob3codGhpcy5xdWV1ZV8uc2hpZnQoKSk7XG4gIH1cblxuICBzZXRBY3Rpb25IaWRkZW5fKGlzSGlkZGVuKSB7XG4gICAgaWYgKGlzSGlkZGVuKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEFjdGlvbkFyaWFIaWRkZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy51bnNldEFjdGlvbkFyaWFIaWRkZW4oKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIG5vUHJlZml4OiBzdHJpbmcsXG4gKiAgIHdlYmtpdFByZWZpeDogc3RyaW5nLFxuICogICBzdHlsZVByb3BlcnR5OiBzdHJpbmdcbiAqIH19XG4gKi9cbmxldCBWZW5kb3JQcm9wZXJ0eU1hcFR5cGU7XG5cbi8qKiBAY29uc3Qge09iamVjdDxzdHJpbmcsICFWZW5kb3JQcm9wZXJ0eU1hcFR5cGU+fSAqL1xuY29uc3QgZXZlbnRUeXBlTWFwID0ge1xuICAnYW5pbWF0aW9uc3RhcnQnOiB7XG4gICAgbm9QcmVmaXg6ICdhbmltYXRpb25zdGFydCcsXG4gICAgd2Via2l0UHJlZml4OiAnd2Via2l0QW5pbWF0aW9uU3RhcnQnLFxuICAgIHN0eWxlUHJvcGVydHk6ICdhbmltYXRpb24nLFxuICB9LFxuICAnYW5pbWF0aW9uZW5kJzoge1xuICAgIG5vUHJlZml4OiAnYW5pbWF0aW9uZW5kJyxcbiAgICB3ZWJraXRQcmVmaXg6ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgIHN0eWxlUHJvcGVydHk6ICdhbmltYXRpb24nLFxuICB9LFxuICAnYW5pbWF0aW9uaXRlcmF0aW9uJzoge1xuICAgIG5vUHJlZml4OiAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgICB3ZWJraXRQcmVmaXg6ICd3ZWJraXRBbmltYXRpb25JdGVyYXRpb24nLFxuICAgIHN0eWxlUHJvcGVydHk6ICdhbmltYXRpb24nLFxuICB9LFxuICAndHJhbnNpdGlvbmVuZCc6IHtcbiAgICBub1ByZWZpeDogJ3RyYW5zaXRpb25lbmQnLFxuICAgIHdlYmtpdFByZWZpeDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIHN0eWxlUHJvcGVydHk6ICd0cmFuc2l0aW9uJyxcbiAgfSxcbn07XG5cbi8qKiBAY29uc3Qge09iamVjdDxzdHJpbmcsICFWZW5kb3JQcm9wZXJ0eU1hcFR5cGU+fSAqL1xuY29uc3QgY3NzUHJvcGVydHlNYXAgPSB7XG4gICdhbmltYXRpb24nOiB7XG4gICAgbm9QcmVmaXg6ICdhbmltYXRpb24nLFxuICAgIHdlYmtpdFByZWZpeDogJy13ZWJraXQtYW5pbWF0aW9uJyxcbiAgfSxcbiAgJ3RyYW5zZm9ybSc6IHtcbiAgICBub1ByZWZpeDogJ3RyYW5zZm9ybScsXG4gICAgd2Via2l0UHJlZml4OiAnLXdlYmtpdC10cmFuc2Zvcm0nLFxuICB9LFxuICAndHJhbnNpdGlvbic6IHtcbiAgICBub1ByZWZpeDogJ3RyYW5zaXRpb24nLFxuICAgIHdlYmtpdFByZWZpeDogJy13ZWJraXQtdHJhbnNpdGlvbicsXG4gIH0sXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gd2luZG93T2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBoYXNQcm9wZXJTaGFwZSh3aW5kb3dPYmopIHtcbiAgcmV0dXJuICh3aW5kb3dPYmpbJ2RvY3VtZW50J10gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd2luZG93T2JqWydkb2N1bWVudCddWydjcmVhdGVFbGVtZW50J10gPT09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGV2ZW50Rm91bmRJbk1hcHMoZXZlbnRUeXBlKSB7XG4gIHJldHVybiAoZXZlbnRUeXBlIGluIGV2ZW50VHlwZU1hcCB8fCBldmVudFR5cGUgaW4gY3NzUHJvcGVydHlNYXApO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGVcbiAqIEBwYXJhbSB7IU9iamVjdDxzdHJpbmcsICFWZW5kb3JQcm9wZXJ0eU1hcFR5cGU+fSBtYXBcbiAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEphdmFTY3JpcHRFdmVudE5hbWUoZXZlbnRUeXBlLCBtYXAsIGVsKSB7XG4gIHJldHVybiBtYXBbZXZlbnRUeXBlXS5zdHlsZVByb3BlcnR5IGluIGVsLnN0eWxlID8gbWFwW2V2ZW50VHlwZV0ubm9QcmVmaXggOiBtYXBbZXZlbnRUeXBlXS53ZWJraXRQcmVmaXg7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGRldGVybWluZSBicm93c2VyIHByZWZpeCBmb3IgQ1NTMyBhbmltYXRpb24gZXZlbnRzXG4gKiBhbmQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcGFyYW0geyFPYmplY3R9IHdpbmRvd09ialxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRBbmltYXRpb25OYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKSB7XG4gIGlmICghaGFzUHJvcGVyU2hhcGUod2luZG93T2JqKSB8fCAhZXZlbnRGb3VuZEluTWFwcyhldmVudFR5cGUpKSB7XG4gICAgcmV0dXJuIGV2ZW50VHlwZTtcbiAgfVxuXG4gIGNvbnN0IG1hcCA9IC8qKiBAdHlwZSB7IU9iamVjdDxzdHJpbmcsICFWZW5kb3JQcm9wZXJ0eU1hcFR5cGU+fSAqLyAoXG4gICAgZXZlbnRUeXBlIGluIGV2ZW50VHlwZU1hcCA/IGV2ZW50VHlwZU1hcCA6IGNzc1Byb3BlcnR5TWFwXG4gICk7XG4gIGNvbnN0IGVsID0gd2luZG93T2JqWydkb2N1bWVudCddWydjcmVhdGVFbGVtZW50J10oJ2RpdicpO1xuICBsZXQgZXZlbnROYW1lID0gJyc7XG5cbiAgaWYgKG1hcCA9PT0gZXZlbnRUeXBlTWFwKSB7XG4gICAgZXZlbnROYW1lID0gZ2V0SmF2YVNjcmlwdEV2ZW50TmFtZShldmVudFR5cGUsIG1hcCwgZWwpO1xuICB9IGVsc2Uge1xuICAgIGV2ZW50TmFtZSA9IG1hcFtldmVudFR5cGVdLm5vUHJlZml4IGluIGVsLnN0eWxlID8gbWFwW2V2ZW50VHlwZV0ubm9QcmVmaXggOiBtYXBbZXZlbnRUeXBlXS53ZWJraXRQcmVmaXg7XG4gIH1cblxuICByZXR1cm4gZXZlbnROYW1lO1xufVxuXG4vLyBQdWJsaWMgZnVuY3Rpb25zIHRvIGFjY2VzcyBnZXRBbmltYXRpb25OYW1lKCkgZm9yIEphdmFTY3JpcHQgZXZlbnRzIG9yIENTU1xuLy8gcHJvcGVydHkgbmFtZXMuXG5cbmNvbnN0IHRyYW5zZm9ybVN0eWxlUHJvcGVydGllcyA9IFsndHJhbnNmb3JtJywgJ1dlYmtpdFRyYW5zZm9ybScsICdNb3pUcmFuc2Zvcm0nLCAnT1RyYW5zZm9ybScsICdNU1RyYW5zZm9ybSddO1xuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gd2luZG93T2JqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldENvcnJlY3RFdmVudE5hbWUod2luZG93T2JqLCBldmVudFR5cGUpIHtcbiAgcmV0dXJuIGdldEFuaW1hdGlvbk5hbWUod2luZG93T2JqLCBldmVudFR5cGUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gd2luZG93T2JqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldENvcnJlY3RQcm9wZXJ0eU5hbWUod2luZG93T2JqLCBldmVudFR5cGUpIHtcbiAgcmV0dXJuIGdldEFuaW1hdGlvbk5hbWUod2luZG93T2JqLCBldmVudFR5cGUpO1xufVxuXG5leHBvcnQge3RyYW5zZm9ybVN0eWxlUHJvcGVydGllcywgZ2V0Q29ycmVjdEV2ZW50TmFtZSwgZ2V0Q29ycmVjdFByb3BlcnR5TmFtZX07XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICByZWY9XCJyb290XCJcbiAgICA6Y2xhc3M9XCJjbGFzc2VzXCJcbiAgICA6YXJpYS1oaWRkZW49XCJoaWRkZW5cIlxuICAgIGNsYXNzPVwibWRjLXNuYWNrYmFyXCJcbiAgICBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIlxuICAgIGFyaWEtYXRvbWljPVwidHJ1ZVwiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwibWRjLXNuYWNrYmFyX190ZXh0XCI+e3sgbWVzc2FnZSB9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZGMtc25hY2tiYXJfX2FjdGlvbi13cmFwcGVyXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHJlZj1cImJ1dHRvblwiXG4gICAgICAgIDphcmlhLWhpZGRlbj1cImFjdGlvbkhpZGRlblwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cIm1kYy1zbmFja2Jhcl9fYWN0aW9uLWJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIHt7IGFjdGlvblRleHQgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTURDU25hY2tiYXJGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9zbmFja2Jhci9mb3VuZGF0aW9uJ1xuaW1wb3J0IHsgZ2V0Q29ycmVjdEV2ZW50TmFtZSB9IGZyb20gJ0BtYXRlcmlhbC9hbmltYXRpb24vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1zbmFja2JhcicsXG4gIG1vZGVsOiB7XG4gICAgcHJvcDogJ3NuYWNrJyxcbiAgICBldmVudDogJ3F1ZXVlZCdcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICAnYWxpZ24tc3RhcnQnOiBCb29sZWFuLFxuICAgIHNuYWNrOiBPYmplY3QsXG4gICAgZXZlbnQ6IFN0cmluZyxcbiAgICAnZXZlbnQtc291cmNlJzoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHJvb3RcbiAgICAgIH1cbiAgICB9LFxuICAgICdkaXNtaXNzZXMtb24tYWN0aW9uJzoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgJ21kYy1zbmFja2Jhci0tYWxpZ24tc3RhcnQnOiB0aGlzLmFsaWduU3RhcnRcbiAgICAgIH0sXG4gICAgICBtZXNzYWdlOiAnJyxcbiAgICAgIGFjdGlvblRleHQ6ICcnLFxuICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgIGFjdGlvbkhpZGRlbjogZmFsc2VcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgc25hY2s6ICdvblNuYWNrJ1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENTbmFja2JhckZvdW5kYXRpb24oe1xuICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRkZWxldGUodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUpLFxuICAgICAgc2V0QXJpYUhpZGRlbjogKCkgPT4gKHRoaXMuaGlkZGVuID0gdHJ1ZSksXG4gICAgICB1bnNldEFyaWFIaWRkZW46ICgpID0+ICh0aGlzLmhpZGRlbiA9IGZhbHNlKSxcbiAgICAgIHNldEFjdGlvbkFyaWFIaWRkZW46ICgpID0+ICh0aGlzLmFjdGlvbkhpZGRlbiA9IHRydWUpLFxuICAgICAgdW5zZXRBY3Rpb25BcmlhSGlkZGVuOiAoKSA9PiAodGhpcy5hY3Rpb25IaWRkZW4gPSBmYWxzZSksXG4gICAgICBzZXRBY3Rpb25UZXh0OiB0ZXh0ID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb25UZXh0ID0gdGV4dFxuICAgICAgfSxcbiAgICAgIHNldE1lc3NhZ2VUZXh0OiB0ZXh0ID0+IHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gdGV4dFxuICAgICAgfSxcbiAgICAgIHNldEZvY3VzOiAoKSA9PiB0aGlzLiRyZWZzLmJ1dHRvbi5mb2N1cygpLFxuICAgICAgaXNGb2N1c2VkOiAoKSA9PiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLiRyZWZzLmJ1dHRvbixcbiAgICAgIHZpc2liaWxpdHlJc0hpZGRlbjogKCkgPT4gZG9jdW1lbnQuaGlkZGVuLFxuICAgICAgcmVnaXN0ZXJDYXB0dXJlZEJsdXJIYW5kbGVyOiBoYW5kbGVyID0+XG4gICAgICAgIHRoaXMuJHJlZnMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVyLCB0cnVlKSxcbiAgICAgIGRlcmVnaXN0ZXJDYXB0dXJlZEJsdXJIYW5kbGVyOiBoYW5kbGVyID0+XG4gICAgICAgIHRoaXMuJHJlZnMuYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVyLCB0cnVlKSxcbiAgICAgIHJlZ2lzdGVyVmlzaWJpbGl0eUNoYW5nZUhhbmRsZXI6IGhhbmRsZXIgPT5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlclZpc2liaWxpdHlDaGFuZ2VIYW5kbGVyOiBoYW5kbGVyID0+XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBoYW5kbGVyKSxcbiAgICAgIHJlZ2lzdGVyQ2FwdHVyZWRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIHRydWUpLFxuICAgICAgZGVyZWdpc3RlckNhcHR1cmVkSW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCB0cnVlKSxcbiAgICAgIHJlZ2lzdGVyQWN0aW9uQ2xpY2tIYW5kbGVyOiBoYW5kbGVyID0+XG4gICAgICAgIHRoaXMuJHJlZnMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyQWN0aW9uQ2xpY2tIYW5kbGVyOiBoYW5kbGVyID0+XG4gICAgICAgIHRoaXMuJHJlZnMuYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlciksXG4gICAgICByZWdpc3RlclRyYW5zaXRpb25FbmRIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuJHJlZnMucm9vdFxuICAgICAgICByb290ICYmXG4gICAgICAgICAgcm9vdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgZ2V0Q29ycmVjdEV2ZW50TmFtZSh3aW5kb3csICd0cmFuc2l0aW9uZW5kJyksXG4gICAgICAgICAgICBoYW5kbGVyXG4gICAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIGRlcmVnaXN0ZXJUcmFuc2l0aW9uRW5kSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLiRyZWZzLnJvb3RcbiAgICAgICAgcm9vdCAmJlxuICAgICAgICAgIHJvb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGdldENvcnJlY3RFdmVudE5hbWUod2luZG93LCAndHJhbnNpdGlvbmVuZCcpLFxuICAgICAgICAgICAgaGFuZGxlclxuICAgICAgICAgIClcbiAgICAgIH0sXG4gICAgICBub3RpZnlTaG93OiAoKSA9PiB0aGlzLiRlbWl0KCdzaG93JyksXG4gICAgICBub3RpZnlIaWRlOiAoKSA9PiB0aGlzLiRlbWl0KCdoaWRlJylcbiAgICB9KVxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcblxuICAgIC8vIGlmIGV2ZW50IHNwZWNpZmllZCB1c2UgaXQsIGVsc2UgaWYgbm8gc25hY2sgcHJvcCB0aGVuIHVzZSBkZWZhdWx0LlxuICAgIHRoaXMuZXZlbnROYW1lID1cbiAgICAgIHRoaXMuZXZlbnQgfHwgKHRoaXMuc25hY2sgPT09IHZvaWQgMCA/ICdzaG93LXNuYWNrYmFyJyA6IG51bGwpXG4gICAgaWYgKHRoaXMuZXZlbnROYW1lKSB7XG4gICAgICB0aGlzLmV2ZW50U291cmNlLiRvbih0aGlzLmV2ZW50TmFtZSwgdGhpcy5zaG93KVxuICAgIH1cbiAgICB0aGlzLmZvdW5kYXRpb24uc2V0RGlzbWlzc09uQWN0aW9uKHRoaXMuZGlzbWlzc2VzT25BY3Rpb24pXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRTb3VyY2UpIHtcbiAgICAgIHRoaXMuZXZlbnRTb3VyY2UuJG9mZih0aGlzLmV2ZW50TmFtZSwgdGhpcy5zaG93KVxuICAgIH1cbiAgICB0aGlzLmZvdW5kYXRpb24uZGVzdHJveSgpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblNuYWNrKHNuYWNrKSB7XG4gICAgICBpZiAoc25hY2sgJiYgc25hY2subWVzc2FnZSkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uc2hvdyhzbmFjaylcbiAgICAgICAgdGhpcy4kZW1pdCgncXVldWVkJywgc25hY2spXG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93KGRhdGEpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zaG93KGRhdGEpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IG1kY1NuYWNrYmFyIGZyb20gJy4vbWRjLXNuYWNrYmFyLnZ1ZSdcblxuZXhwb3J0IHsgbWRjU25hY2tiYXIgfVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlUGx1Z2luKHtcbiAgbWRjU25hY2tiYXJcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJzY29wZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiTURDRm91bmRhdGlvbiIsImFkYXB0ZXIiLCJhZGFwdGVyXyIsIk1EQ0NvbXBvbmVudCIsInJvb3QiLCJmb3VuZGF0aW9uIiwidW5kZWZpbmVkIiwicm9vdF8iLCJhcmdzIiwiaW5pdGlhbGl6ZSIsImZvdW5kYXRpb25fIiwiZ2V0RGVmYXVsdEZvdW5kYXRpb24iLCJpbml0IiwiaW5pdGlhbFN5bmNXaXRoRE9NIiwiRXJyb3IiLCJkZXN0cm95IiwiZXZ0VHlwZSIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2dERhdGEiLCJzaG91bGRCdWJibGUiLCJldnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImJ1YmJsZXMiLCJkb2N1bWVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImNzc0NsYXNzZXMiLCJST09UIiwiVEVYVCIsIkFDVElPTl9XUkFQUEVSIiwiQUNUSU9OX0JVVFRPTiIsIkFDVElWRSIsIk1VTFRJTElORSIsIkFDVElPTl9PTl9CT1RUT00iLCJzdHJpbmdzIiwiVEVYVF9TRUxFQ1RPUiIsIkFDVElPTl9XUkFQUEVSX1NFTEVDVE9SIiwiQUNUSU9OX0JVVFRPTl9TRUxFQ1RPUiIsIlNIT1dfRVZFTlQiLCJISURFX0VWRU5UIiwibnVtYmVycyIsIk1FU1NBR0VfVElNRU9VVCIsIk1EQ1NuYWNrYmFyRm91bmRhdGlvbiIsImFjdGl2ZV8iLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwic2V0QXJpYUhpZGRlbiIsInVuc2V0QXJpYUhpZGRlbiIsInNldEFjdGlvbkFyaWFIaWRkZW4iLCJ1bnNldEFjdGlvbkFyaWFIaWRkZW4iLCJzZXRBY3Rpb25UZXh0Iiwic2V0TWVzc2FnZVRleHQiLCJzZXRGb2N1cyIsImlzRm9jdXNlZCIsInZpc2liaWxpdHlJc0hpZGRlbiIsInJlZ2lzdGVyQ2FwdHVyZWRCbHVySGFuZGxlciIsImRlcmVnaXN0ZXJDYXB0dXJlZEJsdXJIYW5kbGVyIiwicmVnaXN0ZXJWaXNpYmlsaXR5Q2hhbmdlSGFuZGxlciIsImRlcmVnaXN0ZXJWaXNpYmlsaXR5Q2hhbmdlSGFuZGxlciIsInJlZ2lzdGVyQ2FwdHVyZWRJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVyQ2FwdHVyZWRJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlckFjdGlvbkNsaWNrSGFuZGxlciIsImRlcmVnaXN0ZXJBY3Rpb25DbGlja0hhbmRsZXIiLCJyZWdpc3RlclRyYW5zaXRpb25FbmRIYW5kbGVyIiwiZGVyZWdpc3RlclRyYW5zaXRpb25FbmRIYW5kbGVyIiwibm90aWZ5U2hvdyIsIm5vdGlmeUhpZGUiLCJkZWZhdWx0QWRhcHRlciIsImFjdGlvbldhc0NsaWNrZWRfIiwiZGlzbWlzc09uQWN0aW9uXyIsImZpcnN0Rm9jdXNfIiwicG9pbnRlckRvd25SZWNvZ25pemVkXyIsInNuYWNrYmFySGFzRm9jdXNfIiwic25hY2tiYXJEYXRhXyIsInF1ZXVlXyIsImFjdGlvbkNsaWNrSGFuZGxlcl8iLCJpbnZva2VBY3Rpb25fIiwidmlzaWJpbGl0eWNoYW5nZUhhbmRsZXJfIiwiY2xlYXJUaW1lb3V0IiwidGltZW91dElkXyIsInNldFRpbWVvdXQiLCJjbGVhbnVwXyIsImJpbmQiLCJ0aW1lb3V0IiwiaW50ZXJhY3Rpb25IYW5kbGVyXyIsInR5cGUiLCJoYW5kbGVQb3NzaWJsZVRhYktleWJvYXJkRm9jdXNfIiwiYmx1ckhhbmRsZXJfIiwiZm9yRWFjaCIsImRpc21pc3NPbkFjdGlvbiIsImRhdGEiLCJtZXNzYWdlIiwiYWN0aW9uSGFuZGxlciIsImFjdGlvblRleHQiLCJhY3RpdmUiLCJwdXNoIiwibXVsdGlsaW5lIiwiYWN0aW9uT25Cb3R0b20iLCJhY3Rpb25IYW5kbGVyXyIsInNldEFjdGlvbkhpZGRlbl8iLCJoaWphY2tGb2N1cyIsInNldEZvY3VzT25BY3Rpb25fIiwiYWxsb3dEaXNtaXNzYWwiLCJzaG93TmV4dF8iLCJsZW5ndGgiLCJzaG93Iiwic2hpZnQiLCJpc0hpZGRlbiIsImV2ZW50VHlwZU1hcCIsIm5vUHJlZml4Iiwid2Via2l0UHJlZml4Iiwic3R5bGVQcm9wZXJ0eSIsImNzc1Byb3BlcnR5TWFwIiwiaGFzUHJvcGVyU2hhcGUiLCJ3aW5kb3dPYmoiLCJldmVudEZvdW5kSW5NYXBzIiwiZXZlbnRUeXBlIiwiZ2V0SmF2YVNjcmlwdEV2ZW50TmFtZSIsIm1hcCIsImVsIiwic3R5bGUiLCJnZXRBbmltYXRpb25OYW1lIiwiZXZlbnROYW1lIiwiZ2V0Q29ycmVjdEV2ZW50TmFtZSIsIm1kY1NuYWNrYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQU8sU0FBU0EsUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEI7SUFDL0I7SUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7SUFDQSxNQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7SUFDakNELElBQUFBLElBQUksR0FBR0MsTUFBTSxDQUFDQyxHQUFkO0lBQ0QsR0FGRCxNQUVPLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztJQUN4QztJQUNBSCxJQUFBQSxJQUFJLEdBQUdHLE1BQU0sQ0FBQ0QsR0FBZDtJQUNEOztJQUNELE1BQUlGLElBQUosRUFBVTtJQUNSQSxJQUFBQSxJQUFJLENBQUNJLEdBQUwsQ0FBU0wsTUFBVDtJQUNEO0lBQ0Y7O0lDWk0sU0FBU00sVUFBVCxDQUFvQkMsVUFBcEIsRUFBZ0M7SUFDckMsU0FBTztJQUNMQyxJQUFBQSxPQUFPLEVBQUUsYUFESjtJQUVMQyxJQUFBQSxPQUFPLEVBQUUsaUJBQUFDLEVBQUUsRUFBSTtJQUNiLFdBQUssSUFBSUMsR0FBVCxJQUFnQkosVUFBaEIsRUFBNEI7SUFDMUIsWUFBSUssU0FBUyxHQUFHTCxVQUFVLENBQUNJLEdBQUQsQ0FBMUI7SUFDQUQsUUFBQUEsRUFBRSxDQUFDRSxTQUFILENBQWFBLFNBQVMsQ0FBQ0MsSUFBdkIsRUFBNkJE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
