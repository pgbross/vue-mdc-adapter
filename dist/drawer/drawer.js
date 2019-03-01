/**
* @module vue-mdc-adapterdrawer 0.19.4-beta
* @exports VueMDCDrawer
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^1.0.0-0","material-components-web":"^1.0.0-0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.VueMDCDrawer = factory());
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
          element = context.parent.$root.$options.components['RouterLink'];
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
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
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
      ANIMATE: 'mdc-drawer--animate',
      CLOSING: 'mdc-drawer--closing',
      DISMISSIBLE: 'mdc-drawer--dismissible',
      MODAL: 'mdc-drawer--modal',
      OPEN: 'mdc-drawer--open',
      OPENING: 'mdc-drawer--opening',
      ROOT: 'mdc-drawer'
    };
    var strings = {
      APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
      CLOSE_EVENT: 'MDCDrawer:closed',
      OPEN_EVENT: 'MDCDrawer:opened',
      SCRIM_SELECTOR: '.mdc-drawer-scrim'
    };

    /**
     * @license
     * Copyright 2018 Google Inc.
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

    var MDCDismissibleDrawerFoundation =
    /** @class */
    function (_super) {
      __extends(MDCDismissibleDrawerFoundation, _super);

      function MDCDismissibleDrawerFoundation(adapter) {
        var _this = _super.call(this, _assign({}, MDCDismissibleDrawerFoundation.defaultAdapter, adapter)) || this;

        _this.animationFrame_ = 0;
        _this.animationTimer_ = 0;
        return _this;
      }

      Object.defineProperty(MDCDismissibleDrawerFoundation, "strings", {
        get: function get() {
          return strings;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCDismissibleDrawerFoundation, "cssClasses", {
        get: function get() {
          return cssClasses;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCDismissibleDrawerFoundation, "defaultAdapter", {
        get: function get() {
          // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
          return {
            addClass: function addClass() {
              return undefined;
            },
            removeClass: function removeClass() {
              return undefined;
            },
            hasClass: function hasClass() {
              return false;
            },
            elementHasClass: function elementHasClass() {
              return false;
            },
            notifyClose: function notifyClose() {
              return undefined;
            },
            notifyOpen: function notifyOpen() {
              return undefined;
            },
            saveFocus: function saveFocus() {
              return undefined;
            },
            restoreFocus: function restoreFocus() {
              return undefined;
            },
            focusActiveNavigationItem: function focusActiveNavigationItem() {
              return undefined;
            },
            trapFocus: function trapFocus() {
              return undefined;
            },
            releaseFocus: function releaseFocus() {
              return undefined;
            }
          }; // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
      });

      MDCDismissibleDrawerFoundation.prototype.destroy = function () {
        if (this.animationFrame_) {
          cancelAnimationFrame(this.animationFrame_);
        }

        if (this.animationTimer_) {
          clearTimeout(this.animationTimer_);
        }
      };

      MDCDismissibleDrawerFoundation.prototype.open = function () {
        var _this = this;

        if (this.isOpen() || this.isOpening() || this.isClosing()) {
          return;
        }

        this.adapter_.addClass(cssClasses.OPEN);
        this.adapter_.addClass(cssClasses.ANIMATE); // Wait a frame once display is no longer "none", to establish basis for animation

        this.runNextAnimationFrame_(function () {
          _this.adapter_.addClass(cssClasses.OPENING);
        });
        this.adapter_.saveFocus();
      };

      MDCDismissibleDrawerFoundation.prototype.close = function () {
        if (!this.isOpen() || this.isOpening() || this.isClosing()) {
          return;
        }

        this.adapter_.addClass(cssClasses.CLOSING);
      };
      /**
       * @return true if drawer is in open state.
       */


      MDCDismissibleDrawerFoundation.prototype.isOpen = function () {
        return this.adapter_.hasClass(cssClasses.OPEN);
      };
      /**
       * @return true if drawer is animating open.
       */


      MDCDismissibleDrawerFoundation.prototype.isOpening = function () {
        return this.adapter_.hasClass(cssClasses.OPENING) || this.adapter_.hasClass(cssClasses.ANIMATE);
      };
      /**
       * @return true if drawer is animating closed.
       */


      MDCDismissibleDrawerFoundation.prototype.isClosing = function () {
        return this.adapter_.hasClass(cssClasses.CLOSING);
      };
      /**
       * Keydown handler to close drawer when key is escape.
       */


      MDCDismissibleDrawerFoundation.prototype.handleKeydown = function (evt) {
        var keyCode = evt.keyCode,
            key = evt.key;
        var isEscape = key === 'Escape' || keyCode === 27;

        if (isEscape) {
          this.close();
        }
      };
      /**
       * Handles a transition end event on the root element.
       */


      MDCDismissibleDrawerFoundation.prototype.handleTransitionEnd = function (evt) {
        var OPENING = cssClasses.OPENING,
            CLOSING = cssClasses.CLOSING,
            OPEN = cssClasses.OPEN,
            ANIMATE = cssClasses.ANIMATE,
            ROOT = cssClasses.ROOT; // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.

        var isRootElement = this.isElement_(evt.target) && this.adapter_.elementHasClass(evt.target, ROOT);

        if (!isRootElement) {
          return;
        }

        if (this.isClosing()) {
          this.adapter_.removeClass(OPEN);
          this.closed();
          this.adapter_.restoreFocus();
          this.adapter_.notifyClose();
        } else {
          this.adapter_.focusActiveNavigationItem();
          this.opened();
          this.adapter_.notifyOpen();
        }

        this.adapter_.removeClass(ANIMATE);
        this.adapter_.removeClass(OPENING);
        this.adapter_.removeClass(CLOSING);
      };
      /**
       * Extension point for when drawer finishes open animation.
       */


      MDCDismissibleDrawerFoundation.prototype.opened = function () {}; // tslint:disable-line:no-empty

      /**
       * Extension point for when drawer finishes close animation.
       */


      MDCDismissibleDrawerFoundation.prototype.closed = function () {}; // tslint:disable-line:no-empty

      /**
       * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
       */


      MDCDismissibleDrawerFoundation.prototype.runNextAnimationFrame_ = function (callback) {
        var _this = this;

        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = requestAnimationFrame(function () {
          _this.animationFrame_ = 0;
          clearTimeout(_this.animationTimer_);
          _this.animationTimer_ = setTimeout(callback, 0);
        });
      };

      MDCDismissibleDrawerFoundation.prototype.isElement_ = function (element) {
        // In Edge, transitionend on ripple pseudo-elements yields a target without classList.
        return Boolean(element.classList);
      };

      return MDCDismissibleDrawerFoundation;
    }(MDCFoundation);

    /**
     * @license
     * Copyright 2018 Google Inc.
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
    /* istanbul ignore next: subclass is not a branch statement */

    var MDCModalDrawerFoundation =
    /** @class */
    function (_super) {
      __extends(MDCModalDrawerFoundation, _super);

      function MDCModalDrawerFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      /**
       * Called when drawer finishes open animation.
       */


      MDCModalDrawerFoundation.prototype.opened = function () {
        this.adapter_.trapFocus();
      };
      /**
       * Called when drawer finishes close animation.
       */


      MDCModalDrawerFoundation.prototype.closed = function () {
        this.adapter_.releaseFocus();
      };
      /**
       * Handles click event on scrim.
       */


      MDCModalDrawerFoundation.prototype.handleScrimClick = function () {
        this.close();
      };

      return MDCModalDrawerFoundation;
    }(MDCDismissibleDrawerFoundation);

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

    var MDCComponent =
    /** @class */
    function () {
      function MDCComponent(root, foundation) {
        var args = [];

        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }

        this.root_ = root;
        this.initialize.apply(this, __spread(args)); // Note that we initialize foundation here and not within the constructor's default param so that
        // this.root_ is defined and can be used within the foundation class.

        this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation_.init();
        this.initialSyncWithDOM();
      }

      MDCComponent.attachTo = function (root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent(root, new MDCFoundation({}));
      };
      /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */


      MDCComponent.prototype.initialize = function () {
        var _args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          _args[_i] = arguments[_i];
        } // Subclasses can override this to do any additional setup work that would be considered part of a
        // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
        // initialized. Any additional arguments besides root and foundation will be passed in here.

      };

      MDCComponent.prototype.getDefaultFoundation = function () {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
      };

      MDCComponent.prototype.initialSyncWithDOM = function () {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
        // object. An example of this would be a form control wrapper that needs to synchronize its internal state
        // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
        // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
      };

      MDCComponent.prototype.destroy = function () {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation_.destroy();
      };

      MDCComponent.prototype.listen = function (evtType, handler) {
        this.root_.addEventListener(evtType, handler);
      };

      MDCComponent.prototype.unlisten = function (evtType, handler) {
        this.root_.removeEventListener(evtType, handler);
      };
      /**
       * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
       */


      MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) {
          shouldBubble = false;
        }

        var evt;

        if (typeof CustomEvent === 'function') {
          evt = new CustomEvent(evtType, {
            bubbles: shouldBubble,
            detail: evtData
          });
        } else {
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }

        this.root_.dispatchEvent(evt);
      };

      return MDCComponent;
    }();

    /**
     * @license
     * Copyright 2018 Google Inc.
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
     * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
     * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
     */
    function closest(element, selector) {
      if (element.closest) {
        return element.closest(selector);
      }

      var el = element;

      while (el) {
        if (matches(el, selector)) {
          return el;
        }

        el = el.parentElement;
      }

      return null;
    }
    function matches(element, selector) {
      var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
      return nativeMatches.call(element, selector);
    }

    /**
     * @license
     * Copyright 2018 Google Inc.
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
     * Copyright 2018 Google Inc.
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
      LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
      LIST_ITEM_CLASS: 'mdc-list-item',
      LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
      ROOT: 'mdc-list'
    };
    var strings$1 = {
      ACTION_EVENT: 'MDCList:action',
      ARIA_CHECKED: 'aria-checked',
      ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
      ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
      ARIA_ORIENTATION: 'aria-orientation',
      ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
      ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
      ARIA_SELECTED: 'aria-selected',
      CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
      CHECKBOX_SELECTOR: 'input[type="checkbox"]:not(:disabled)',
      CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses$1.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$1.LIST_ITEM_CLASS + " a\n  ",
      ENABLED_ITEMS_SELECTOR: '.mdc-list-item:not(.mdc-list-item--disabled)',
      FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses$1.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$1.LIST_ITEM_CLASS + " a,\n    ." + cssClasses$1.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses$1.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled)\n  ",
      RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)'
    };

    /**
     * @license
     * Copyright 2018 Google Inc.
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
    var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];

    function isNumberArray(selectedIndex) {
      return selectedIndex instanceof Array;
    }

    var MDCListFoundation =
    /** @class */
    function (_super) {
      __extends(MDCListFoundation, _super);

      function MDCListFoundation(adapter) {
        var _this = _super.call(this, _assign({}, MDCListFoundation.defaultAdapter, adapter)) || this;

        _this.wrapFocus_ = false;
        _this.isVertical_ = true;
        _this.isSingleSelectionList_ = false;
        _this.selectedIndex_ = -1;
        _this.focusedItemIndex_ = -1;
        _this.useActivatedClass_ = false;
        _this.isCheckboxList_ = false;
        _this.isRadioList_ = false;
        return _this;
      }

      Object.defineProperty(MDCListFoundation, "strings", {
        get: function get() {
          return strings$1;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCListFoundation, "cssClasses", {
        get: function get() {
          return cssClasses$1;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCListFoundation, "defaultAdapter", {
        get: function get() {
          return {
            addClassForElementIndex: function addClassForElementIndex() {
              return undefined;
            },
            focusItemAtIndex: function focusItemAtIndex() {
              return undefined;
            },
            getFocusedElementIndex: function getFocusedElementIndex() {
              return 0;
            },
            getListItemCount: function getListItemCount() {
              return 0;
            },
            hasCheckboxAtIndex: function hasCheckboxAtIndex() {
              return false;
            },
            hasRadioAtIndex: function hasRadioAtIndex() {
              return false;
            },
            isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex() {
              return false;
            },
            isFocusInsideList: function isFocusInsideList() {
              return false;
            },
            notifyAction: function notifyAction() {
              return undefined;
            },
            removeAttributeForElementIndex: function removeAttributeForElementIndex() {
              return undefined;
            },
            removeClassForElementIndex: function removeClassForElementIndex() {
              return undefined;
            },
            setAttributeForElementIndex: function setAttributeForElementIndex() {
              return undefined;
            },
            setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex() {
              return undefined;
            },
            setTabIndexForListItemChildren: function setTabIndexForListItemChildren() {
              return undefined;
            }
          };
        },
        enumerable: true,
        configurable: true
      });

      MDCListFoundation.prototype.layout = function () {
        if (this.adapter_.getListItemCount() === 0) return;

        if (this.adapter_.hasCheckboxAtIndex(0)) {
          this.isCheckboxList_ = true;
        } else if (this.adapter_.hasRadioAtIndex(0)) {
          this.isRadioList_ = true;
        }
      };
      /**
       * Sets the private wrapFocus_ variable.
       */


      MDCListFoundation.prototype.setWrapFocus = function (value) {
        this.wrapFocus_ = value;
      };
      /**
       * Sets the isVertical_ private variable.
       */


      MDCListFoundation.prototype.setVerticalOrientation = function (value) {
        this.isVertical_ = value;
      };
      /**
       * Sets the isSingleSelectionList_ private variable.
       */


      MDCListFoundation.prototype.setSingleSelection = function (value) {
        this.isSingleSelectionList_ = value;
      };
      /**
       * Sets the useActivatedClass_ private variable.
       */


      MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
        this.useActivatedClass_ = useActivated;
      };

      MDCListFoundation.prototype.getSelectedIndex = function () {
        return this.selectedIndex_;
      };

      MDCListFoundation.prototype.setSelectedIndex = function (index) {
        if (!this.isIndexValid_(index)) {
          return;
        }

        if (this.isCheckboxList_) {
          this.setCheckboxAtIndex_(index);
        } else if (this.isRadioList_) {
          this.setRadioAtIndex_(index);
        } else {
          this.setSingleSelectionAtIndex_(index);
        }
      };
      /**
       * Focus in handler for the list items.
       */


      MDCListFoundation.prototype.handleFocusIn = function (_, listItemIndex) {
        if (listItemIndex >= 0) {
          this.adapter_.setTabIndexForListItemChildren(listItemIndex, '0');
        }
      };
      /**
       * Focus out handler for the list items.
       */


      MDCListFoundation.prototype.handleFocusOut = function (_, listItemIndex) {
        var _this = this;

        if (listItemIndex >= 0) {
          this.adapter_.setTabIndexForListItemChildren(listItemIndex, '-1');
        }
        /**
         * Between Focusout & Focusin some browsers do not have focus on any element. Setting a delay to wait till the focus
         * is moved to next element.
         */


        setTimeout(function () {
          if (!_this.adapter_.isFocusInsideList()) {
            _this.setTabindexToFirstSelectedItem_();
          }
        }, 0);
      };
      /**
       * Key handler for the list.
       */


      MDCListFoundation.prototype.handleKeydown = function (evt, isRootListItem, listItemIndex) {
        var arrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
        var arrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
        var arrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
        var arrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
        var isHome = evt.key === 'Home' || evt.keyCode === 36;
        var isEnd = evt.key === 'End' || evt.keyCode === 35;
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        var isSpace = evt.key === 'Space' || evt.keyCode === 32;
        var currentIndex = this.adapter_.getFocusedElementIndex();
        var nextIndex = -1;

        if (currentIndex === -1) {
          currentIndex = listItemIndex;

          if (currentIndex < 0) {
            // If this event doesn't have a mdc-list-item ancestor from the
            // current list (not from a sublist), return early.
            return;
          }
        }

        if (this.isVertical_ && arrowDown || !this.isVertical_ && arrowRight) {
          this.preventDefaultEvent_(evt);
          nextIndex = this.focusNextElement(currentIndex);
        } else if (this.isVertical_ && arrowUp || !this.isVertical_ && arrowLeft) {
          this.preventDefaultEvent_(evt);
          nextIndex = this.focusPrevElement(currentIndex);
        } else if (isHome) {
          this.preventDefaultEvent_(evt);
          nextIndex = this.focusFirstElement();
        } else if (isEnd) {
          this.preventDefaultEvent_(evt);
          nextIndex = this.focusLastElement();
        } else if (isEnter || isSpace) {
          if (isRootListItem) {
            // Return early if enter key is pressed on anchor element which triggers synthetic MouseEvent event.
            var target = evt.target;

            if (target && target.tagName === 'A' && isEnter) {
              return;
            }

            this.preventDefaultEvent_(evt);

            if (this.isSelectableList_()) {
              this.setSelectedIndexOnAction_(currentIndex);
            }

            this.adapter_.notifyAction(currentIndex);
          }
        }

        this.focusedItemIndex_ = currentIndex;

        if (nextIndex >= 0) {
          this.setTabindexAtIndex_(nextIndex);
          this.focusedItemIndex_ = nextIndex;
        }
      };
      /**
       * Click handler for the list.
       */


      MDCListFoundation.prototype.handleClick = function (index, toggleCheckbox) {
        if (index === -1) return;

        if (this.isSelectableList_()) {
          this.setSelectedIndexOnAction_(index, toggleCheckbox);
        }

        this.adapter_.notifyAction(index);
        this.setTabindexAtIndex_(index);
        this.focusedItemIndex_ = index;
      };
      /**
       * Focuses the next element on the list.
       */


      MDCListFoundation.prototype.focusNextElement = function (index) {
        var count = this.adapter_.getListItemCount();
        var nextIndex = index + 1;

        if (nextIndex >= count) {
          if (this.wrapFocus_) {
            nextIndex = 0;
          } else {
            // Return early because last item is already focused.
            return index;
          }
        }

        this.adapter_.focusItemAtIndex(nextIndex);
        return nextIndex;
      };
      /**
       * Focuses the previous element on the list.
       */


      MDCListFoundation.prototype.focusPrevElement = function (index) {
        var prevIndex = index - 1;

        if (prevIndex < 0) {
          if (this.wrapFocus_) {
            prevIndex = this.adapter_.getListItemCount() - 1;
          } else {
            // Return early because first item is already focused.
            return index;
          }
        }

        this.adapter_.focusItemAtIndex(prevIndex);
        return prevIndex;
      };

      MDCListFoundation.prototype.focusFirstElement = function () {
        this.adapter_.focusItemAtIndex(0);
        return 0;
      };

      MDCListFoundation.prototype.focusLastElement = function () {
        var lastIndex = this.adapter_.getListItemCount() - 1;
        this.adapter_.focusItemAtIndex(lastIndex);
        return lastIndex;
      };
      /**
       * Ensures that preventDefault is only called if the containing element doesn't
       * consume the event, and it will cause an unintended scroll.
       */


      MDCListFoundation.prototype.preventDefaultEvent_ = function (evt) {
        var target = evt.target;
        var tagName = ("" + target.tagName).toLowerCase();

        if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
          evt.preventDefault();
        }
      };

      MDCListFoundation.prototype.setSingleSelectionAtIndex_ = function (index) {
        var selectedClassName = cssClasses$1.LIST_ITEM_SELECTED_CLASS;

        if (this.useActivatedClass_) {
          selectedClassName = cssClasses$1.LIST_ITEM_ACTIVATED_CLASS;
        }

        if (this.selectedIndex_ >= 0 && this.selectedIndex_ !== index) {
          this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
          this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings$1.ARIA_SELECTED, 'false');
        }

        this.adapter_.addClassForElementIndex(index, selectedClassName);
        this.adapter_.setAttributeForElementIndex(index, strings$1.ARIA_SELECTED, 'true');
        this.selectedIndex_ = index;
      };
      /**
       * Toggles radio at give index. Radio doesn't change the checked state if it is already checked.
       */


      MDCListFoundation.prototype.setRadioAtIndex_ = function (index) {
        this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, true);

        if (this.selectedIndex_ >= 0) {
          this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings$1.ARIA_CHECKED, 'false');
        }

        this.adapter_.setAttributeForElementIndex(index, strings$1.ARIA_CHECKED, 'true');
        this.selectedIndex_ = index;
      };

      MDCListFoundation.prototype.setCheckboxAtIndex_ = function (index) {
        for (var i = 0; i < this.adapter_.getListItemCount(); i++) {
          var isChecked = false;

          if (index.indexOf(i) >= 0) {
            isChecked = true;
          }

          this.adapter_.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
          this.adapter_.setAttributeForElementIndex(i, strings$1.ARIA_CHECKED, isChecked ? 'true' : 'false');
        }

        this.selectedIndex_ = index;
      };

      MDCListFoundation.prototype.setTabindexAtIndex_ = function (index) {
        if (this.focusedItemIndex_ === -1 && index !== 0) {
          // If no list item was selected set first list item's tabindex to -1.
          // Generally, tabindex is set to 0 on first list item of list that has no preselected items.
          this.adapter_.setAttributeForElementIndex(0, 'tabindex', '-1');
        } else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
          this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, 'tabindex', '-1');
        }

        this.adapter_.setAttributeForElementIndex(index, 'tabindex', '0');
      };
      /**
       * @return Return true if it is single selectin list, checkbox list or radio list.
       */


      MDCListFoundation.prototype.isSelectableList_ = function () {
        return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
      };

      MDCListFoundation.prototype.setTabindexToFirstSelectedItem_ = function () {
        var targetIndex = 0;

        if (this.isSelectableList_()) {
          if (typeof this.selectedIndex_ === 'number' && this.selectedIndex_ !== -1) {
            targetIndex = this.selectedIndex_;
          } else if (isNumberArray(this.selectedIndex_) && this.selectedIndex_.length > 0) {
            targetIndex = this.selectedIndex_.reduce(function (currentIndex, minIndex) {
              return Math.min(currentIndex, minIndex);
            });
          }
        }

        this.setTabindexAtIndex_(targetIndex);
      };

      MDCListFoundation.prototype.isIndexValid_ = function (index) {
        var _this = this;

        if (index instanceof Array) {
          if (!this.isCheckboxList_) {
            throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
          }

          if (index.length === 0) {
            return true;
          } else {
            return index.some(function (i) {
              return _this.isIndexInRange_(i);
            });
          }
        } else if (typeof index === 'number') {
          if (this.isCheckboxList_) {
            throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' + index);
          }

          return this.isIndexInRange_(index);
        } else {
          return false;
        }
      };

      MDCListFoundation.prototype.isIndexInRange_ = function (index) {
        var listSize = this.adapter_.getListItemCount();
        return index >= 0 && index < listSize;
      };

      MDCListFoundation.prototype.setSelectedIndexOnAction_ = function (index, toggleCheckbox) {
        if (toggleCheckbox === void 0) {
          toggleCheckbox = true;
        }

        if (this.isCheckboxList_) {
          this.toggleCheckboxAtIndex_(index, toggleCheckbox);
        } else {
          this.setSelectedIndex(index);
        }
      };

      MDCListFoundation.prototype.toggleCheckboxAtIndex_ = function (index, toggleCheckbox) {
        var isChecked = this.adapter_.isCheckboxCheckedAtIndex(index);

        if (toggleCheckbox) {
          isChecked = !isChecked;
          this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
        }

        this.adapter_.setAttributeForElementIndex(index, strings$1.ARIA_CHECKED, isChecked ? 'true' : 'false'); // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.

        var selectedIndexes = this.selectedIndex_ === -1 ? [] : this.selectedIndex_.slice();

        if (isChecked) {
          selectedIndexes.push(index);
        } else {
          selectedIndexes = selectedIndexes.filter(function (i) {
            return i !== index;
          });
        }

        this.selectedIndex_ = selectedIndexes;
      };

      return MDCListFoundation;
    }(MDCFoundation);

    /**
     * @license
     * Copyright 2018 Google Inc.
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

    var MDCList =
    /** @class */
    function (_super) {
      __extends(MDCList, _super);

      function MDCList() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      Object.defineProperty(MDCList.prototype, "vertical", {
        set: function set(value) {
          this.foundation_.setVerticalOrientation(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCList.prototype, "listElements", {
        get: function get() {
          return [].slice.call(this.root_.querySelectorAll(strings$1.ENABLED_ITEMS_SELECTOR));
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCList.prototype, "wrapFocus", {
        set: function set(value) {
          this.foundation_.setWrapFocus(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCList.prototype, "singleSelection", {
        set: function set(isSingleSelectionList) {
          this.foundation_.setSingleSelection(isSingleSelectionList);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCList.prototype, "selectedIndex", {
        get: function get() {
          return this.foundation_.getSelectedIndex();
        },
        set: function set(index) {
          this.foundation_.setSelectedIndex(index);
        },
        enumerable: true,
        configurable: true
      });

      MDCList.attachTo = function (root) {
        return new MDCList(root);
      };

      MDCList.prototype.initialSyncWithDOM = function () {
        this.handleClick_ = this.handleClickEvent_.bind(this);
        this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
        this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
        this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
        this.listen('keydown', this.handleKeydown_);
        this.listen('click', this.handleClick_);
        this.listen('focusin', this.focusInEventListener_);
        this.listen('focusout', this.focusOutEventListener_);
        this.layout();
        this.initializeListType();
      };

      MDCList.prototype.destroy = function () {
        this.unlisten('keydown', this.handleKeydown_);
        this.unlisten('click', this.handleClick_);
        this.unlisten('focusin', this.focusInEventListener_);
        this.unlisten('focusout', this.focusOutEventListener_);
      };

      MDCList.prototype.layout = function () {
        var direction = this.root_.getAttribute(strings$1.ARIA_ORIENTATION);
        this.vertical = direction !== strings$1.ARIA_ORIENTATION_HORIZONTAL; // List items need to have at least tabindex=-1 to be focusable.

        [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (el) {
          el.setAttribute('tabindex', '-1');
        }); // Child button/a elements are not tabbable until the list item is focused.

        [].slice.call(this.root_.querySelectorAll(strings$1.FOCUSABLE_CHILD_ELEMENTS)).forEach(function (el) {
          return el.setAttribute('tabindex', '-1');
        });
        this.foundation_.layout();
      };
      /**
       * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
       */


      MDCList.prototype.initializeListType = function () {
        var _this = this;

        var checkboxListItems = this.root_.querySelectorAll(strings$1.ARIA_ROLE_CHECKBOX_SELECTOR);
        var singleSelectedListItem = this.root_.querySelector("\n      ." + cssClasses$1.LIST_ITEM_ACTIVATED_CLASS + ",\n      ." + cssClasses$1.LIST_ITEM_SELECTED_CLASS + "\n    ");
        var radioSelectedListItem = this.root_.querySelector(strings$1.ARIA_CHECKED_RADIO_SELECTOR);

        if (checkboxListItems.length) {
          var preselectedItems = this.root_.querySelectorAll(strings$1.ARIA_CHECKED_CHECKBOX_SELECTOR);
          this.selectedIndex = [].map.call(preselectedItems, function (listItem) {
            return _this.listElements.indexOf(listItem);
          });
        } else if (singleSelectedListItem) {
          if (singleSelectedListItem.classList.contains(cssClasses$1.LIST_ITEM_ACTIVATED_CLASS)) {
            this.foundation_.setUseActivatedClass(true);
          }

          this.singleSelection = true;
          this.selectedIndex = this.listElements.indexOf(singleSelectedListItem);
        } else if (radioSelectedListItem) {
          this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
        }
      };

      MDCList.prototype.getDefaultFoundation = function () {
        var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


        var adapter = {
          addClassForElementIndex: function addClassForElementIndex(index, className) {
            var element = _this.listElements[index];

            if (element) {
              element.classList.add(className);
            }
          },
          focusItemAtIndex: function focusItemAtIndex(index) {
            var element = _this.listElements[index];

            if (element) {
              element.focus();
            }
          },
          getFocusedElementIndex: function getFocusedElementIndex() {
            return _this.listElements.indexOf(document.activeElement);
          },
          getListItemCount: function getListItemCount() {
            return _this.listElements.length;
          },
          hasCheckboxAtIndex: function hasCheckboxAtIndex(index) {
            var listItem = _this.listElements[index];
            return !!listItem.querySelector(strings$1.CHECKBOX_SELECTOR);
          },
          hasRadioAtIndex: function hasRadioAtIndex(index) {
            var listItem = _this.listElements[index];
            return !!listItem.querySelector(strings$1.RADIO_SELECTOR);
          },
          isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
            var listItem = _this.listElements[index];
            var toggleEl = listItem.querySelector(strings$1.CHECKBOX_SELECTOR);
            return toggleEl.checked;
          },
          isFocusInsideList: function isFocusInsideList() {
            return _this.root_.contains(document.activeElement);
          },
          notifyAction: function notifyAction(index) {
            _this.emit(strings$1.ACTION_EVENT, {
              index: index
            },
            /** shouldBubble */
            true);
          },
          removeAttributeForElementIndex: function removeAttributeForElementIndex(index, attr) {
            var element = _this.listElements[index];

            if (element) {
              element.removeAttribute(attr);
            }
          },
          removeClassForElementIndex: function removeClassForElementIndex(index, className) {
            var element = _this.listElements[index];

            if (element) {
              element.classList.remove(className);
            }
          },
          setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
            var element = _this.listElements[index];

            if (element) {
              element.setAttribute(attr, value);
            }
          },
          setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
            var listItem = _this.listElements[index];
            var toggleEl = listItem.querySelector(strings$1.CHECKBOX_RADIO_SELECTOR);
            toggleEl.checked = isChecked;
            var event = document.createEvent('Event');
            event.initEvent('change', true, true);
            toggleEl.dispatchEvent(event);
          },
          setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
            var element = _this.listElements[listItemIndex];
            var listItemChildren = [].slice.call(element.querySelectorAll(strings$1.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
            listItemChildren.forEach(function (el) {
              return el.setAttribute('tabindex', tabIndexValue);
            });
          }
        };
        return new MDCListFoundation(adapter);
      };
      /**
       * Used to figure out which list item this event is targetting. Or returns -1 if
       * there is no list item
       */


      MDCList.prototype.getListItemIndex_ = function (evt) {
        var eventTarget = evt.target;
        var nearestParent = closest(eventTarget, "." + cssClasses$1.LIST_ITEM_CLASS + ", ." + cssClasses$1.ROOT); // Get the index of the element if it is a list item.

        if (nearestParent && matches(nearestParent, "." + cssClasses$1.LIST_ITEM_CLASS)) {
          return this.listElements.indexOf(nearestParent);
        }

        return -1;
      };
      /**
       * Used to figure out which element was clicked before sending the event to the foundation.
       */


      MDCList.prototype.handleFocusInEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        this.foundation_.handleFocusIn(evt, index);
      };
      /**
       * Used to figure out which element was clicked before sending the event to the foundation.
       */


      MDCList.prototype.handleFocusOutEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        this.foundation_.handleFocusOut(evt, index);
      };
      /**
       * Used to figure out which element was focused when keydown event occurred before sending the event to the
       * foundation.
       */


      MDCList.prototype.handleKeydownEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        var target = evt.target;

        if (index >= 0) {
          this.foundation_.handleKeydown(evt, target.classList.contains(cssClasses$1.LIST_ITEM_CLASS), index);
        }
      };
      /**
       * Used to figure out which element was clicked before sending the event to the foundation.
       */


      MDCList.prototype.handleClickEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        var target = evt.target; // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.

        var toggleCheckbox = !matches(target, strings$1.CHECKBOX_RADIO_SELECTOR);
        this.foundation_.handleClick(index, toggleCheckbox);
      };

      return MDCList;
    }(MDCComponent);

    /**
     * @license
     * Copyright 2019 Google Inc.
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

    var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
    var candidateSelector = candidateSelectors.join(',');
    var matches$1 = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

    function tabbable(el, options) {
      options = options || {};
      var elementDocument = el.ownerDocument || el;
      var regularTabbables = [];
      var orderedTabbables = [];
      var untouchabilityChecker = new UntouchabilityChecker(elementDocument);
      var candidates = el.querySelectorAll(candidateSelector);

      if (options.includeContainer) {
        if (matches$1.call(el, candidateSelector)) {
          candidates = Array.prototype.slice.apply(candidates);
          candidates.unshift(el);
        }
      }

      var i, candidate, candidateTabindex;

      for (i = 0; i < candidates.length; i++) {
        candidate = candidates[i];
        if (!isNodeMatchingSelectorTabbable(candidate, untouchabilityChecker)) continue;
        candidateTabindex = getTabindex(candidate);

        if (candidateTabindex === 0) {
          regularTabbables.push(candidate);
        } else {
          orderedTabbables.push({
            documentOrder: i,
            tabIndex: candidateTabindex,
            node: candidate
          });
        }
      }

      var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
        return a.node;
      }).concat(regularTabbables);
      return tabbableNodes;
    }

    tabbable.isTabbable = isTabbable;
    tabbable.isFocusable = isFocusable;

    function isNodeMatchingSelectorTabbable(node, untouchabilityChecker) {
      if (!isNodeMatchingSelectorFocusable(node, untouchabilityChecker) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
        return false;
      }

      return true;
    }

    function isTabbable(node, untouchabilityChecker) {
      if (!node) throw new Error('No node provided');
      if (matches$1.call(node, candidateSelector) === false) return false;
      return isNodeMatchingSelectorTabbable(node, untouchabilityChecker);
    }

    function isNodeMatchingSelectorFocusable(node, untouchabilityChecker) {
      untouchabilityChecker = untouchabilityChecker || new UntouchabilityChecker(node.ownerDocument || node);

      if (node.disabled || isHiddenInput(node) || untouchabilityChecker.isUntouchable(node)) {
        return false;
      }

      return true;
    }

    var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');

    function isFocusable(node, untouchabilityChecker) {
      if (!node) throw new Error('No node provided');
      if (matches$1.call(node, focusableCandidateSelector) === false) return false;
      return isNodeMatchingSelectorFocusable(node, untouchabilityChecker);
    }

    function getTabindex(node) {
      var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
      if (!isNaN(tabindexAttr)) return tabindexAttr; // Browsers do not return `tabIndex` correctly for contentEditable nodes;
      // so if they don't have a tabindex attribute specifically set, assume it's 0.

      if (isContentEditable(node)) return 0;
      return node.tabIndex;
    }

    function sortOrderedTabbables(a, b) {
      return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
    } // Array.prototype.find not available in IE.


    function find(list, predicate) {
      for (var i = 0, length = list.length; i < length; i++) {
        if (predicate(list[i])) return list[i];
      }
    }

    function isContentEditable(node) {
      return node.contentEditable === 'true';
    }

    function isInput(node) {
      return node.tagName === 'INPUT';
    }

    function isHiddenInput(node) {
      return isInput(node) && node.type === 'hidden';
    }

    function isRadio(node) {
      return isInput(node) && node.type === 'radio';
    }

    function isNonTabbableRadio(node) {
      return isRadio(node) && !isTabbableRadio(node);
    }

    function getCheckedRadio(nodes) {
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].checked) {
          return nodes[i];
        }
      }
    }

    function isTabbableRadio(node) {
      if (!node.name) return true; // This won't account for the edge case where you have radio groups with the same
      // in separate forms on the same page.

      var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
      var checked = getCheckedRadio(radioSet);
      return !checked || checked === node;
    } // An element is "untouchable" if *it or one of its ancestors* has
    // `visibility: hidden` or `display: none`.


    function UntouchabilityChecker(elementDocument) {
      this.doc = elementDocument; // Node cache must be refreshed on every check, in case
      // the content of the element has changed. The cache contains tuples
      // mapping nodes to their boolean result.

      this.cache = [];
    } // getComputedStyle accurately reflects `visibility: hidden` of ancestors
    // but not `display: none`, so we need to recursively check parents.


    UntouchabilityChecker.prototype.hasDisplayNone = function hasDisplayNone(node, nodeComputedStyle) {
      if (node.nodeType !== Node.ELEMENT_NODE) return false; // Search for a cached result.

      var cached = find(this.cache, function (item) {
        return item === node;
      });
      if (cached) return cached[1];
      nodeComputedStyle = nodeComputedStyle || this.doc.defaultView.getComputedStyle(node);
      var result = false;

      if (nodeComputedStyle.display === 'none') {
        result = true;
      } else if (node.parentNode) {
        result = this.hasDisplayNone(node.parentNode);
      }

      this.cache.push([node, result]);
      return result;
    };

    UntouchabilityChecker.prototype.isUntouchable = function isUntouchable(node) {
      if (node === this.doc.documentElement) return false;
      var computedStyle = this.doc.defaultView.getComputedStyle(node);
      if (this.hasDisplayNone(node, computedStyle)) return true;
      return computedStyle.visibility === 'hidden';
    };

    var tabbable_1 = tabbable;

    var immutable = extend;
    var hasOwnProperty = Object.prototype.hasOwnProperty;

    function extend() {
      var target = {};

      for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    }

    var activeFocusTraps = function () {
      var trapQueue = [];
      return {
        activateTrap: function activateTrap(trap) {
          if (trapQueue.length > 0) {
            var activeTrap = trapQueue[trapQueue.length - 1];

            if (activeTrap !== trap) {
              activeTrap.pause();
            }
          }

          var trapIndex = trapQueue.indexOf(trap);

          if (trapIndex === -1) {
            trapQueue.push(trap);
          } else {
            // move this existing trap to the front of the queue
            trapQueue.splice(trapIndex, 1);
            trapQueue.push(trap);
          }
        },
        deactivateTrap: function deactivateTrap(trap) {
          var trapIndex = trapQueue.indexOf(trap);

          if (trapIndex !== -1) {
            trapQueue.splice(trapIndex, 1);
          }

          if (trapQueue.length > 0) {
            trapQueue[trapQueue.length - 1].unpause();
          }
        }
      };
    }();

    function focusTrap(element, userOptions) {
      var doc = document;
      var container = typeof element === 'string' ? doc.querySelector(element) : element;
      var config = immutable({
        returnFocusOnDeactivate: true,
        escapeDeactivates: true
      }, userOptions);
      var state = {
        firstTabbableNode: null,
        lastTabbableNode: null,
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: false,
        paused: false
      };
      var trap = {
        activate: activate,
        deactivate: deactivate,
        pause: pause,
        unpause: unpause
      };
      return trap;

      function activate(activateOptions) {
        if (state.active) return;
        updateTabbableNodes();
        state.active = true;
        state.paused = false;
        state.nodeFocusedBeforeActivation = doc.activeElement;
        var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;

        if (onActivate) {
          onActivate();
        }

        addListeners();
        return trap;
      }

      function deactivate(deactivateOptions) {
        if (!state.active) return;
        removeListeners();
        state.active = false;
        state.paused = false;
        activeFocusTraps.deactivateTrap(trap);
        var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;

        if (onDeactivate) {
          onDeactivate();
        }

        var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;

        if (returnFocus) {
          delay(function () {
            tryFocus(state.nodeFocusedBeforeActivation);
          });
        }

        return trap;
      }

      function pause() {
        if (state.paused || !state.active) return;
        state.paused = true;
        removeListeners();
      }

      function unpause() {
        if (!state.paused || !state.active) return;
        state.paused = false;
        addListeners();
      }

      function addListeners() {
        if (!state.active) return; // There can be only one listening focus trap at a time

        activeFocusTraps.activateTrap(trap);
        updateTabbableNodes(); // Delay ensures that the focused element doesn't capture the event
        // that caused the focus trap activation.

        delay(function () {
          tryFocus(getInitialFocusNode());
        });
        doc.addEventListener('focusin', checkFocusIn, true);
        doc.addEventListener('mousedown', checkPointerDown, true);
        doc.addEventListener('touchstart', checkPointerDown, true);
        doc.addEventListener('click', checkClick, true);
        doc.addEventListener('keydown', checkKey, true);
        return trap;
      }

      function removeListeners() {
        if (!state.active) return;
        doc.removeEventListener('focusin', checkFocusIn, true);
        doc.removeEventListener('mousedown', checkPointerDown, true);
        doc.removeEventListener('touchstart', checkPointerDown, true);
        doc.removeEventListener('click', checkClick, true);
        doc.removeEventListener('keydown', checkKey, true);
        return trap;
      }

      function getNodeForOption(optionName) {
        var optionValue = config[optionName];
        var node = optionValue;

        if (!optionValue) {
          return null;
        }

        if (typeof optionValue === 'string') {
          node = doc.querySelector(optionValue);

          if (!node) {
            throw new Error('`' + optionName + '` refers to no known node');
          }
        }

        if (typeof optionValue === 'function') {
          node = optionValue();

          if (!node) {
            throw new Error('`' + optionName + '` did not return a node');
          }
        }

        return node;
      }

      function getInitialFocusNode() {
        var node;

        if (getNodeForOption('initialFocus') !== null) {
          node = getNodeForOption('initialFocus');
        } else if (container.contains(doc.activeElement)) {
          node = doc.activeElement;
        } else {
          node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
        }

        if (!node) {
          throw new Error("You can't have a focus-trap without at least one focusable element");
        }

        return node;
      } // This needs to be done on mousedown and touchstart instead of click
      // so that it precedes the focus event.


      function checkPointerDown(e) {
        if (container.contains(e.target)) return;

        if (config.clickOutsideDeactivates) {
          deactivate({
            returnFocus: !tabbable_1.isFocusable(e.target)
          });
        } else {
          e.preventDefault();
        }
      } // In case focus escapes the trap for some strange reason, pull it back in.


      function checkFocusIn(e) {
        // In Firefox when you Tab out of an iframe the Document is briefly focused.
        if (container.contains(e.target) || e.target instanceof Document) {
          return;
        }

        e.stopImmediatePropagation();
        tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
      }

      function checkKey(e) {
        if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
          e.preventDefault();
          deactivate();
          return;
        }

        if (isTabEvent(e)) {
          checkTab(e);
          return;
        }
      } // Hijack Tab events on the first and last focusable nodes of the trap,
      // in order to prevent focus from escaping. If it escapes for even a
      // moment it can end up scrolling the page and causing confusion so we
      // kind of need to capture the action at the keydown phase.


      function checkTab(e) {
        updateTabbableNodes();

        if (e.shiftKey && e.target === state.firstTabbableNode) {
          e.preventDefault();
          tryFocus(state.lastTabbableNode);
          return;
        }

        if (!e.shiftKey && e.target === state.lastTabbableNode) {
          e.preventDefault();
          tryFocus(state.firstTabbableNode);
          return;
        }
      }

      function checkClick(e) {
        if (config.clickOutsideDeactivates) return;
        if (container.contains(e.target)) return;
        e.preventDefault();
        e.stopImmediatePropagation();
      }

      function updateTabbableNodes() {
        var tabbableNodes = tabbable_1(container);
        state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
        state.lastTabbableNode = tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
      }

      function tryFocus(node) {
        if (node === doc.activeElement) return;

        if (!node || !node.focus) {
          tryFocus(getInitialFocusNode());
          return;
        }

        node.focus();
        state.mostRecentlyFocusedNode = node;

        if (isSelectableInput(node)) {
          node.select();
        }
      }
    }

    function isSelectableInput(node) {
      return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
    }

    function isEscapeEvent(e) {
      return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
    }

    function isTabEvent(e) {
      return e.key === 'Tab' || e.keyCode === 9;
    }

    function delay(fn) {
      return setTimeout(fn, 0);
    }

    var focusTrap_1 = focusTrap;

    var media = new (
    /*#__PURE__*/
    function () {
      function _class() {
        _classCallCheck(this, _class);
      }

      _createClass(_class, [{
        key: "small",
        get: function get() {
          return this._small || (this._small = window.matchMedia('(max-width: 839px)'));
        }
      }, {
        key: "large",
        get: function get() {
          return this._large || (this._large = window.matchMedia('(min-width: 1200px)'));
        }
      }]);

      return _class;
    }())();
    var script = {
      name: 'mdc-drawer',
      model: {
        prop: 'open',
        event: 'change'
      },
      props: {
        modal: Boolean,
        open: Boolean,
        toolbarSpacer: Boolean,
        toggleOn: String,
        toggleOnSource: {
          type: Object,
          required: false
        },
        openOn: String,
        openOnSource: {
          type: Object,
          required: false
        },
        closeOn: String,
        closeOnSource: {
          type: Object,
          required: false
        }
      },
      provide: function provide() {
        return {
          mdcDrawer: this
        };
      },
      data: function data() {
        return {
          // open_: false,
          classes: {}
        };
      },
      computed: {
        type: function type() {},
        isModal: function isModal() {
          return this.modal;
        }
      },
      watch: {
        open: 'onOpen_'
      },
      mounted: function mounted() {
        var _this = this;

        this.drawer_ = this.$refs.drawer;
        var adapter = {
          addClass: function addClass(className) {
            return _this.$set(_this.classes, className, true);
          },
          removeClass: function removeClass(className) {
            return _this.$delete(_this.classes, className);
          },
          hasClass: function hasClass(className) {
            return _this.drawer_.classList.contains(className);
          },
          elementHasClass: function elementHasClass(element, className) {
            return element.classList.contains(className);
          },
          saveFocus: function saveFocus() {
            _this.previousFocus_ = document.activeElement;
          },
          restoreFocus: function restoreFocus() {
            var previousFocus = _this.previousFocus_ && _this.previousFocus_.focus;

            if (_this.drawer_.contains(document.activeElement) && previousFocus) {
              _this.previousFocus_.focus();
            }
          },
          focusActiveNavigationItem: function focusActiveNavigationItem() {
            var activeNavItemEl = _this.drawer_.querySelector(".".concat(MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS));

            if (activeNavItemEl) {
              activeNavItemEl.focus();
            }
          },
          notifyClose: function notifyClose() {
            _this.$emit('change', false);

            _this.$emit('close');
          },
          notifyOpen: function notifyOpen() {
            _this.$emit('change', true);

            _this.$emit('open');
          },
          trapFocus: function trapFocus() {
            return _this.focusTrap_.activate();
          },
          releaseFocus: function releaseFocus() {
            return _this.focusTrap_.deactivate();
          }
        };
        var _MDCDismissibleDrawer = MDCDismissibleDrawerFoundation.cssClasses,
            DISMISSIBLE = _MDCDismissibleDrawer.DISMISSIBLE,
            MODAL = _MDCDismissibleDrawer.MODAL;

        if (this.drawer_.classList.contains(DISMISSIBLE)) {
          this.foundation = new MDCDismissibleDrawerFoundation(adapter);
        } else if (this.drawer_.classList.contains(MODAL)) {
          this.foundation = new MDCModalDrawerFoundation(adapter);
        } else {
          throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are ".concat(DISMISSIBLE, " and ").concat(MODAL, "."));
        }

        this.foundation && this.foundation.init();
        this.initialSyncWithDOM();

        if (this.toggleOn) {
          this.toggleOnEventSource = this.toggleOnSource || this.$root;
          this.toggleOnEventSource.$on(this.toggleOn, this.toggle);
        }

        if (this.openOn) {
          this.openOnEventSource = this.openOnSource || this.$root;
          this.openOnEventSource.$on(this.openOn, this.show);
        }

        if (this.closeOn) {
          this.closeOnEventSource = this.closeOnSource || this.$root;
          this.closeOnEventSource.$on(this.closeOn, this.close);
        } // media.small.addListener(this.refreshMedia)
        // media.large.addListener(this.refreshMedia)
        // this.$nextTick(() => this.refreshMedia())

      },
      beforeDestroy: function beforeDestroy() {
        this.foundation && this.foundation.destroy();
        this.foundation = null; // media.small.removeListener(this.refreshMedia)
        // media.large.removeListener(this.refreshMedia)

        if (this.toggleOnEventSource) {
          this.toggleOnEventSource.$off(this.toggleOn, this.toggle);
        }

        if (this.openOnEventSource) {
          this.openOnEventSource.$off(this.openOn, this.show);
        }

        if (this.closeOnEventSource) {
          this.closeOnEventSource.$off(this.closeOn, this.close);
        }
      },
      methods: {
        initialSyncWithDOM: function initialSyncWithDOM() {
          var _this2 = this;

          var MODAL = MDCDismissibleDrawerFoundation.cssClasses.MODAL;

          if (this.drawer_.classList.contains(MODAL)) {
            var SCRIM_SELECTOR = MDCDismissibleDrawerFoundation.strings.SCRIM_SELECTOR;
            this.scrim_ = this.drawer_.parentElement.querySelector(SCRIM_SELECTOR);

            this.handleScrimClick_ = function () {
              return _this2.foundation.handleScrimClick();
            };

            this.scrim_.addEventListener('click', this.handleScrimClick_);
            this.focusTrap_ = createFocusTrapInstance(this.drawer_, this.focusTrapFactory_);
          }

          this.handleKeydown_ = function (evt) {
            return _this2.foundation.handleKeydown(evt);
          };

          this.handleTransitionEnd_ = function (evt) {
            return _this2.foundation.handleTransitionEnd(evt);
          };

          this.$el.addEventListener('keydown', this.handleKeydown_);
          this.$el.addEventListener('transitionend', this.handleTransitionEnd_);
        },
        onOpen_: function onOpen_(value) {
          if (this.open) {
            this.foundation && this.foundation.open();
          } else {
            this.foundation && this.foundation.close();
          }
        },
        onChange: function onChange(event) {
          this.$emit('change', event);
          this.$root.$emit('vma:layout');
        },
        show: function show() {
          this.foundation.open();
        },
        close: function close() {
          this.foundation.close();
        },
        toggle: function toggle() {
          this.foundation.isOpen() ? this.foundation.close() : this.foundation.open();
        },
        isOpen: function isOpen() {
          return this.foundation.isOpen();
        },
        refreshMedia: function refreshMedia() {// this.small = media.small.matches
          // this.large = media.large.matches
          // if (this.isResponsive) {
          //   if (this.large) {
          //     this.show()
          //   } else {
          //     this.close()
          //   }
          // }
        }
      }
    };

    function createFocusTrapInstance(surfaceEl) {
      var focusTrapFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : focusTrap_1;
      return focusTrapFactory(surfaceEl, {
        clickOutsideDeactivates: true,
        initialFocus: false,
        // Navigation drawer handles focusing on active nav item.
        escapeDeactivates: false,
        // Navigation drawer handles ESC.
        returnFocusOnDeactivate: false // Navigation drawer handles restore focus.

      });
    }

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
      return _c("div", [
        _c(
          "aside",
          {
            ref: "drawer",
            staticClass: "mdc-drawer mdc-drawer--modal",
            class: _vm.classes
          },
          [
            _vm.$slots["header"] ? _vm._t("header") : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mdc-drawer__content" },
              [_vm._t("default")],
              2
            )
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "mdc-drawer-scrim" }),
        _vm._v(" "),
        _vm.toolbarSpacer
          ? _c("div", { staticClass: "mdc-top-app-bar--fixed-adjust" })
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
      

      
      var mdcDrawer = normalizeComponent_1(
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
      name: 'mdc-drawer-header'
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
        { staticClass: "mdc-drawer-header mdc-drawer__header" },
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
      

      
      var mdcDrawerHeader = normalizeComponent_1(
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
      name: 'mdc-drawer-list',
      props: {
        dense: Boolean
      },
      data: function data() {
        return {
          classes: {
            'mdc-list--dense': this.dense
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
        "nav",
        { staticClass: "mdc-drawer-list mdc-list", class: _vm.classes },
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
      

      
      var mdcDrawerList = normalizeComponent_1(
        { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
        __vue_inject_styles__$2,
        __vue_script__$2,
        __vue_scope_id__$2,
        __vue_is_functional_template__$2,
        __vue_module_identifier__$2,
        undefined,
        undefined
      );

    /**
     * Stores result from supportsCssVariables to avoid redundant processing to
     * detect CSS custom variable support.
     */
    var supportsCssVariables_;
    /**
     * Stores result from applyPassive to avoid redundant processing to detect
     * passive event listener support.
     */

    var supportsPassive_;

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

    function supportsCssVariables(windowObj, forceRefresh) {
      if (forceRefresh === void 0) {
        forceRefresh = false;
      }

      var CSS = windowObj.CSS;
      var supportsCssVars = supportsCssVariables_;

      if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables_;
      }

      var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';

      if (!supportsFunctionPresent) {
        return false;
      }

      var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669
      // See: README section on Safari

      var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');

      if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
        supportsCssVars = !detectEdgePseudoVarBug(windowObj);
      } else {
        supportsCssVars = false;
      }

      if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVars;
      }

      return supportsCssVars;
    }
    /**
     * Determine whether the current browser supports passive event listeners, and
     * if so, use them.
     */

    function applyPassive(globalObj, forceRefresh) {
      if (globalObj === void 0) {
        globalObj = window;
      }

      if (forceRefresh === void 0) {
        forceRefresh = false;
      }

      if (supportsPassive_ === undefined || forceRefresh) {
        var isSupported_1 = false;

        try {
          globalObj.document.addEventListener('test', function () {
            return undefined;
          }, {
            get passive() {
              isSupported_1 = true;
              return isSupported_1;
            }

          });
        } catch (e) {} // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.


        supportsPassive_ = isSupported_1;
      }

      return supportsPassive_ ? {
        passive: true
      } : false;
    }
    function getNormalizedEventCoords(evt, pageOffset, clientRect) {
      if (!evt) {
        return {
          x: 0,
          y: 0
        };
      }

      var x = pageOffset.x,
          y = pageOffset.y;
      var documentX = x + clientRect.left;
      var documentY = y + clientRect.top;
      var normalizedX;
      var normalizedY; // Determine touch point relative to the ripple container.

      if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
      } else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
      }

      return {
        x: normalizedX,
        y: normalizedY
      };
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
    var cssClasses$2 = {
      // Ripple is a special case where the "root" component is really a "mixin" of sorts,
      // given that it's an 'upgrade' to an existing component. That being said it is the root
      // CSS class that all other CSS classes derive from.
      BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
      FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
      FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
      ROOT: 'mdc-ripple-upgraded',
      UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
    };
    var strings$2 = {
      VAR_FG_SCALE: '--mdc-ripple-fg-scale',
      VAR_FG_SIZE: '--mdc-ripple-fg-size',
      VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
      VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
      VAR_LEFT: '--mdc-ripple-left',
      VAR_TOP: '--mdc-ripple-top'
    };
    var numbers = {
      DEACTIVATION_TIMEOUT_MS: 225,
      FG_DEACTIVATION_MS: 150,
      INITIAL_ORIGIN_SCALE: 0.6,
      PADDING: 10,
      TAP_DELAY_MS: 300
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

    var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs

    var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu']; // simultaneous nested activations

    var activatedTargets = [];

    var MDCRippleFoundation =
    /** @class */
    function (_super) {
      __extends(MDCRippleFoundation, _super);

      function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, _assign({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;

        _this.activationAnimationHasEnded_ = false;
        _this.activationTimer_ = 0;
        _this.fgDeactivationRemovalTimer_ = 0;
        _this.fgScale_ = '0';
        _this.frame_ = {
          width: 0,
          height: 0
        };
        _this.initialSize_ = 0;
        _this.layoutFrame_ = 0;
        _this.maxRadius_ = 0;
        _this.unboundedCoords_ = {
          left: 0,
          top: 0
        };
        _this.activationState_ = _this.defaultActivationState_();

        _this.activationTimerCallback_ = function () {
          _this.activationAnimationHasEnded_ = true;

          _this.runDeactivationUXLogicIfReady_();
        };

        _this.activateHandler_ = function (e) {
          return _this.activate_(e);
        };

        _this.deactivateHandler_ = function () {
          return _this.deactivate_();
        };

        _this.focusHandler_ = function () {
          return _this.handleFocus();
        };

        _this.blurHandler_ = function () {
          return _this.handleBlur();
        };

        _this.resizeHandler_ = function () {
          return _this.layout();
        };

        return _this;
      }

      Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function get() {
          return cssClasses$2;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function get() {
          return strings$2;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function get() {
          return numbers;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function get() {
          return {
            addClass: function addClass() {
              return undefined;
            },
            browserSupportsCssVars: function browserSupportsCssVars() {
              return true;
            },
            computeBoundingRect: function computeBoundingRect() {
              return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0
              };
            },
            containsEventTarget: function containsEventTarget() {
              return true;
            },
            deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {
              return undefined;
            },
            deregisterInteractionHandler: function deregisterInteractionHandler() {
              return undefined;
            },
            deregisterResizeHandler: function deregisterResizeHandler() {
              return undefined;
            },
            getWindowPageOffset: function getWindowPageOffset() {
              return {
                x: 0,
                y: 0
              };
            },
            isSurfaceActive: function isSurfaceActive() {
              return true;
            },
            isSurfaceDisabled: function isSurfaceDisabled() {
              return true;
            },
            isUnbounded: function isUnbounded() {
              return true;
            },
            registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {
              return undefined;
            },
            registerInteractionHandler: function registerInteractionHandler() {
              return undefined;
            },
            registerResizeHandler: function registerResizeHandler() {
              return undefined;
            },
            removeClass: function removeClass() {
              return undefined;
            },
            updateCssVariable: function updateCssVariable() {
              return undefined;
            }
          };
        },
        enumerable: true,
        configurable: true
      });

      MDCRippleFoundation.prototype.init = function () {
        var _this = this;

        var supportsPressRipple = this.supportsPressRipple_();
        this.registerRootHandlers_(supportsPressRipple);

        if (supportsPressRipple) {
          var _a = MDCRippleFoundation.cssClasses,
              ROOT_1 = _a.ROOT,
              UNBOUNDED_1 = _a.UNBOUNDED;
          requestAnimationFrame(function () {
            _this.adapter_.addClass(ROOT_1);

            if (_this.adapter_.isUnbounded()) {
              _this.adapter_.addClass(UNBOUNDED_1); // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple


              _this.layoutInternal_();
            }
          });
        }
      };

      MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;

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

          var _a = MDCRippleFoundation.cssClasses,
              ROOT_2 = _a.ROOT,
              UNBOUNDED_2 = _a.UNBOUNDED;
          requestAnimationFrame(function () {
            _this.adapter_.removeClass(ROOT_2);

            _this.adapter_.removeClass(UNBOUNDED_2);

            _this.removeCssVars_();
          });
        }

        this.deregisterRootHandlers_();
        this.deregisterDeactivationHandlers_();
      };
      /**
       * @param evt Optional event containing position information.
       */


      MDCRippleFoundation.prototype.activate = function (evt) {
        this.activate_(evt);
      };

      MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivate_();
      };

      MDCRippleFoundation.prototype.layout = function () {
        var _this = this;

        if (this.layoutFrame_) {
          cancelAnimationFrame(this.layoutFrame_);
        }

        this.layoutFrame_ = requestAnimationFrame(function () {
          _this.layoutInternal_();

          _this.layoutFrame_ = 0;
        });
      };

      MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

        if (unbounded) {
          this.adapter_.addClass(UNBOUNDED);
        } else {
          this.adapter_.removeClass(UNBOUNDED);
        }
      };

      MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;

        requestAnimationFrame(function () {
          return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      };

      MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;

        requestAnimationFrame(function () {
          return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      };
      /**
       * We compute this property so that we are not querying information about the client
       * until the point in time where the foundation requests it. This prevents scenarios where
       * client-side feature-detection may happen too early, such as when components are rendered on the server
       * and then initialized at mount time on the client.
       */


      MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
        return this.adapter_.browserSupportsCssVars();
      };

      MDCRippleFoundation.prototype.defaultActivationState_ = function () {
        return {
          activationEvent: undefined,
          hasDeactivationUXRun: false,
          isActivated: false,
          isProgrammatic: false,
          wasActivatedByPointer: false,
          wasElementMadeActive: false
        };
      };
      /**
       * supportsPressRipple Passed from init to save a redundant function call
       */


      MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
        var _this = this;

        if (supportsPressRipple) {
          ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
          });

          if (this.adapter_.isUnbounded()) {
            this.adapter_.registerResizeHandler(this.resizeHandler_);
          }
        }

        this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
      };

      MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
        var _this = this;

        if (evt.type === 'keydown') {
          this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
        } else {
          POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
          });
        }
      };

      MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
        var _this = this;

        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
          _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
        });
        this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

        if (this.adapter_.isUnbounded()) {
          this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        }
      };

      MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
        var _this = this;

        this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
          _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
        });
      };

      MDCRippleFoundation.prototype.removeCssVars_ = function () {
        var _this = this;

        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
          if (key.indexOf('VAR_') === 0) {
            _this.adapter_.updateCssVariable(rippleStrings[key], null);
          }
        });
      };

      MDCRippleFoundation.prototype.activate_ = function (evt) {
        var _this = this;

        if (this.adapter_.isSurfaceDisabled()) {
          return;
        }

        var activationState = this.activationState_;

        if (activationState.isActivated) {
          return;
        } // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction


        var previousActivationEvent = this.previousActivationEvent_;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;

        if (isSameInteraction) {
          return;
        }

        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
          return _this.adapter_.containsEventTarget(target);
        });

        if (hasActivatedChild) {
          // Immediately reset activation state, while preserving logic that prevents touch follow-on events
          this.resetActivationState_();
          return;
        }

        if (evt !== undefined) {
          activatedTargets.push(evt.target);
          this.registerDeactivationHandlers_(evt);
        }

        activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);

        if (activationState.wasElementMadeActive) {
          this.animateActivation_();
        }

        requestAnimationFrame(function () {
          // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
          activatedTargets = [];

          if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
            // If space was pressed, try again within an rAF call to detect :active, because different UAs report
            // active states inconsistently when they're called within event handling code:
            // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
            // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
            // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
            // variable is set within a rAF callback for a submit button interaction (#2241).
            activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);

            if (activationState.wasElementMadeActive) {
              _this.animateActivation_();
            }
          }

          if (!activationState.wasElementMadeActive) {
            // Reset activation state immediately if element was not made active.
            _this.activationState_ = _this.defaultActivationState_();
          }
        });
      };

      MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
        return evt !== undefined && evt.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
      };

      MDCRippleFoundation.prototype.animateActivation_ = function () {
        var _this = this;

        var _a = MDCRippleFoundation.strings,
            VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
            VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses,
            FG_DEACTIVATION = _b.FG_DEACTIVATION,
            FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var translateStart = '';
        var translateEnd = '';

        if (!this.adapter_.isUnbounded()) {
          var _c = this.getFgTranslationCoordinates_(),
              startPoint = _c.startPoint,
              endPoint = _c.endPoint;

          translateStart = startPoint.x + "px, " + startPoint.y + "px";
          translateEnd = endPoint.x + "px, " + endPoint.y + "px";
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
          return _this.activationTimerCallback_();
        }, DEACTIVATION_TIMEOUT_MS);
      };

      MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
        var _a = this.activationState_,
            activationEvent = _a.activationEvent,
            wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;

        if (wasActivatedByPointer) {
          startPoint = getNormalizedEventCoords(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
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
      };

      MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
        var _this = this; // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.


        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState_,
            hasDeactivationUXRun = _a.hasDeactivationUXRun,
            isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;

        if (activationHasEnded && this.activationAnimationHasEnded_) {
          this.rmBoundedActivationClasses_();
          this.adapter_.addClass(FG_DEACTIVATION);
          this.fgDeactivationRemovalTimer_ = setTimeout(function () {
            _this.adapter_.removeClass(FG_DEACTIVATION);
          }, numbers.FG_DEACTIVATION_MS);
        }
      };

      MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter_.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded_ = false;
        this.adapter_.computeBoundingRect();
      };

      MDCRippleFoundation.prototype.resetActivationState_ = function () {
        var _this = this;

        this.previousActivationEvent_ = this.activationState_.activationEvent;
        this.activationState_ = this.defaultActivationState_(); // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.

        setTimeout(function () {
          return _this.previousActivationEvent_ = undefined;
        }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
      };

      MDCRippleFoundation.prototype.deactivate_ = function () {
        var _this = this;

        var activationState = this.activationState_; // This can happen in scenarios such as when you have a keyup event that blurs the element.

        if (!activationState.isActivated) {
          return;
        }

        var state = _assign({}, activationState);

        if (activationState.isProgrammatic) {
          requestAnimationFrame(function () {
            return _this.animateDeactivation_(state);
          });
          this.resetActivationState_();
        } else {
          this.deregisterDeactivationHandlers_();
          requestAnimationFrame(function () {
            _this.activationState_.hasDeactivationUXRun = true;

            _this.animateDeactivation_(state);

            _this.resetActivationState_();
          });
        }
      };

      MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer,
            wasElementMadeActive = _a.wasElementMadeActive;

        if (wasActivatedByPointer || wasElementMadeActive) {
          this.runDeactivationUXLogicIfReady_();
        }
      };

      MDCRippleFoundation.prototype.layoutInternal_ = function () {
        var _this = this;

        this.frame_ = this.adapter_.computeBoundingRect();
        var maxDim = Math.max(this.frame_.height, this.frame_.width); // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.

        var getBoundedRadius = function getBoundedRadius() {
          var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
          return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };

        this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius(); // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform

        this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
        this.updateLayoutCssVars_();
      };

      MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
        var _a = MDCRippleFoundation.strings,
            VAR_FG_SIZE = _a.VAR_FG_SIZE,
            VAR_LEFT = _a.VAR_LEFT,
            VAR_TOP = _a.VAR_TOP,
            VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
        this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

        if (this.adapter_.isUnbounded()) {
          this.unboundedCoords_ = {
            left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
            top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
          };
          this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
          this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
        }
      };

      return MDCRippleFoundation;
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

    var MDCRipple =
    /** @class */
    function (_super) {
      __extends(MDCRipple, _super);

      function MDCRipple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.disabled = false;
        return _this;
      }

      MDCRipple.attachTo = function (root, opts) {
        if (opts === void 0) {
          opts = {
            isUnbounded: undefined
          };
        }

        var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

        if (opts.isUnbounded !== undefined) {
          ripple.unbounded = opts.isUnbounded;
        }

        return ripple;
      };

      MDCRipple.createAdapter = function (instance) {
        return {
          addClass: function addClass(className) {
            return instance.root_.classList.add(className);
          },
          browserSupportsCssVars: function browserSupportsCssVars() {
            return supportsCssVariables(window);
          },
          computeBoundingRect: function computeBoundingRect() {
            return instance.root_.getBoundingClientRect();
          },
          containsEventTarget: function containsEventTarget(target) {
            return instance.root_.contains(target);
          },
          deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
            return document.documentElement.removeEventListener(evtType, handler, applyPassive());
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
            return instance.root_.removeEventListener(evtType, handler, applyPassive());
          },
          deregisterResizeHandler: function deregisterResizeHandler(handler) {
            return window.removeEventListener('resize', handler);
          },
          getWindowPageOffset: function getWindowPageOffset() {
            return {
              x: window.pageXOffset,
              y: window.pageYOffset
            };
          },
          isSurfaceActive: function isSurfaceActive() {
            return matches(instance.root_, ':active');
          },
          isSurfaceDisabled: function isSurfaceDisabled() {
            return Boolean(instance.disabled);
          },
          isUnbounded: function isUnbounded() {
            return Boolean(instance.unbounded);
          },
          registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
            return document.documentElement.addEventListener(evtType, handler, applyPassive());
          },
          registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
            return instance.root_.addEventListener(evtType, handler, applyPassive());
          },
          registerResizeHandler: function registerResizeHandler(handler) {
            return window.addEventListener('resize', handler);
          },
          removeClass: function removeClass(className) {
            return instance.root_.classList.remove(className);
          },
          updateCssVariable: function updateCssVariable(varName, value) {
            return instance.root_.style.setProperty(varName, value);
          }
        };
      };

      Object.defineProperty(MDCRipple.prototype, "unbounded", {
        get: function get() {
          return Boolean(this.unbounded_);
        },
        set: function set(unbounded) {
          this.unbounded_ = Boolean(unbounded);
          this.setUnbounded_();
        },
        enumerable: true,
        configurable: true
      });

      MDCRipple.prototype.activate = function () {
        this.foundation_.activate();
      };

      MDCRipple.prototype.deactivate = function () {
        this.foundation_.deactivate();
      };

      MDCRipple.prototype.layout = function () {
        this.foundation_.layout();
      };

      MDCRipple.prototype.getDefaultFoundation = function () {
        return new MDCRippleFoundation(MDCRipple.createAdapter(this));
      };

      MDCRipple.prototype.initialSyncWithDOM = function () {
        var root = this.root_;
        this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
      };
      /**
       * Closure Compiler throws an access control error when directly accessing a
       * protected or private property inside a getter/setter, like unbounded above.
       * By accessing the protected property inside a method, we solve that problem.
       * That's why this function exists.
       */


      MDCRipple.prototype.setUnbounded_ = function () {
        this.foundation_.setUnbounded(Boolean(this.unbounded_));
      };

      return MDCRipple;
    }(MDCComponent);

    /**
     * @license
     * Copyright 2019 Google Inc.
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
          return RippleBase._matches || (RippleBase._matches = matches(HTMLElement.prototype));
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
            vm.$el.addEventListener(evt, handler, applyPassive());
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
            vm.$el.removeEventListener(evt, handler, applyPassive());
          },
          registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
            return document.documentElement.addEventListener(evtType, handler, applyPassive());
          },
          deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
            return document.documentElement.removeEventListener(evtType, handler, applyPassive());
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
    var script$3 = {
      name: 'mdc-ripple',
      mixins: [CustomElementMixin, RippleMixin],
      props: {
        tag: String
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
        "custom-element",
        {
          staticClass: "mdc-ripple",
          attrs: { tag: _vm.tag, classes: _vm.classes, styles: _vm.styles }
        },
        [_vm._t("default")],
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
      

      
      normalizeComponent_1(
        { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
        __vue_inject_styles__$3,
        __vue_script__$3,
        __vue_scope_id__$3,
        __vue_is_functional_template__$3,
        __vue_module_identifier__$3,
        undefined,
        undefined
      );

    var script$4 = {
      name: 'mdc-drawer-item',
      inject: ['mdcDrawer'],
      mixins: [DispatchEventMixin, CustomLinkMixin],
      props: {
        startIcon: String,
        modalClose: {
          type: Boolean,
          default: true
        },
        activated: Boolean,
        exactActiveClass: {
          type: String,
          default: 'mdc-list-item--activated'
        }
      },
      data: function data() {
        return {
          classes: {},
          styles: {}
        };
      },
      computed: {
        mylisteners: function mylisteners() {
          var _this = this;

          return _objectSpread({}, this.$listeners, {
            click: function click(e) {
              _this.mdcDrawer.isModal && _this.modalClose && _this.mdcDrawer.close();

              _this.dispatchEvent(e);
            }
          });
        },
        itemClasses: function itemClasses() {
          return {
            'mdc-list-item--activated': this.activated
          };
        },
        hasStartDetail: function hasStartDetail() {
          return this.startIcon || this.$slots['start-detail'];
        }
      },
      mounted: function mounted() {
        this.ripple = new RippleBase(this);
        this.ripple.init();
      },
      beforeDestroy: function beforeDestroy() {
        this.ripple && this.ripple.destroy();
        this.ripple = null;
      }
    };

    /* script */
    const __vue_script__$4 = script$4;

    /* template */
    var __vue_render__$4 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "custom-link",
        _vm._g(
          {
            staticClass: "mdc-drawer-item mdc-list-item",
            class: [_vm.classes, _vm.itemClasses],
            style: _vm.styles,
            attrs: { link: _vm.link }
          },
          _vm.mylisteners
        ),
        [
          _vm.hasStartDetail
            ? _c(
                "span",
                { staticClass: "mdc-list-item__graphic" },
                [
                  _vm._t("start-detail", [
                    _c(
                      "i",
                      {
                        staticClass: "material-icons",
                        attrs: { "aria-hidden": "true" }
                      },
                      [_vm._v(_vm._s(_vm.startIcon))]
                    )
                  ])
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._t("default")
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
      

      
      var mdcDrawerItem = normalizeComponent_1(
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
    var script$5 = {
      name: 'mdc-drawer-divider'
    };

    /* script */
    const __vue_script__$5 = script$5;

    /* template */
    var __vue_render__$5 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("hr", { staticClass: "mdc-list-divider" })
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
      

      
      var mdcDrawerDivider = normalizeComponent_1(
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
      mdcDrawer: mdcDrawer,
      mdcDrawerHeader: mdcDrawerHeader,
      mdcDrawerList: mdcDrawerList,
      mdcDrawerItem: mdcDrawerItem,
      mdcDrawerDivider: mdcDrawerDivider
    });

    autoInit(plugin);

    return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXV0by1pbml0LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Jhc2UtcGx1Z2luLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1lbGVtZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1saW5rLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1ldmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9kaXNwYXRjaC1ldmVudC1taXhpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS91bmlxdWVpZC1taXhpbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZHJhd2VyL2Rpc21pc3NpYmxlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RyYXdlci9tb2RhbC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZG9tL3BvbnlmaWxsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpc3QvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpc3QvY29tcG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3RhYmJhYmxlL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9mb2N1cy10cmFwL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9kcmF3ZXIvbWRjLWRyYXdlci52dWUiLCIuLi8uLi9jb21wb25lbnRzL2RyYXdlci9tZGMtZHJhd2VyLWhlYWRlci52dWUiLCIuLi8uLi9jb21wb25lbnRzL2RyYXdlci9tZGMtZHJhd2VyLWxpc3QudnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb21wb25lbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUtYmFzZS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUudnVlIiwiLi4vLi4vY29tcG9uZW50cy9kcmF3ZXIvbWRjLWRyYXdlci1pdGVtLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL21kYy1kcmF3ZXItZGl2aWRlci52dWUiLCIuLi8uLi9jb21wb25lbnRzL2RyYXdlci9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvZHJhd2VyL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHtcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIGNvbnRleHQucHJvcHMuaXMgfHwgY29udGV4dC5wcm9wcy50YWcgfHwgJ2RpdicsXG4gICAgICBjb250ZXh0LmRhdGEsXG4gICAgICBjb250ZXh0LmNoaWxkcmVuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50TWl4aW4gPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21FbGVtZW50XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDdXN0b21MaW5rID0ge1xuICBuYW1lOiAnY3VzdG9tLWxpbmsnLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIHRhZzogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdhJyB9LFxuICAgIGxpbms6IE9iamVjdFxuICB9LFxuICByZW5kZXIoaCwgY29udGV4dCkge1xuICAgIGxldCBlbGVtZW50XG4gICAgbGV0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LmRhdGEpXG5cbiAgICBpZiAoY29udGV4dC5wcm9wcy5saW5rICYmIGNvbnRleHQucGFyZW50LiRyb3V0ZXIpIHtcbiAgICAgIC8vIHJvdXRlci1saW5rIGNhc2VcbiAgICAgIGVsZW1lbnQgPSBjb250ZXh0LnBhcmVudC4kcm9vdC4kb3B0aW9ucy5jb21wb25lbnRzWydSb3V0ZXJMaW5rJ11cbiAgICAgIGRhdGEucHJvcHMgPSBPYmplY3QuYXNzaWduKHsgdGFnOiBjb250ZXh0LnByb3BzLnRhZyB9LCBjb250ZXh0LnByb3BzLmxpbmspXG4gICAgICBpZiAoZGF0YS5vbi5jbGljaykge1xuICAgICAgICBkYXRhLm5hdGl2ZU9uID0geyBjbGljazogZGF0YS5vbi5jbGljayB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVsZW1lbnQgZmFsbGJhY2tcbiAgICAgIGVsZW1lbnQgPSBjb250ZXh0LnByb3BzLnRhZ1xuICAgIH1cblxuICAgIHJldHVybiBoKGVsZW1lbnQsIGRhdGEsIGNvbnRleHQuY2hpbGRyZW4pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUxpbmtNaXhpbiA9IHtcbiAgcHJvcHM6IHtcbiAgICB0bzogW1N0cmluZywgT2JqZWN0XSxcbiAgICBleGFjdDogQm9vbGVhbixcbiAgICBhcHBlbmQ6IEJvb2xlYW4sXG4gICAgcmVwbGFjZTogQm9vbGVhbixcbiAgICBhY3RpdmVDbGFzczogU3RyaW5nLFxuICAgIGV4YWN0QWN0aXZlQ2xhc3M6IFN0cmluZ1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpbmsoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLnRvICYmIHtcbiAgICAgICAgICB0bzogdGhpcy50byxcbiAgICAgICAgICBleGFjdDogdGhpcy5leGFjdCxcbiAgICAgICAgICBhcHBlbmQ6IHRoaXMuYXBwZW5kLFxuICAgICAgICAgIHJlcGxhY2U6IHRoaXMucmVwbGFjZSxcbiAgICAgICAgICBhY3RpdmVDbGFzczogdGhpcy5hY3RpdmVDbGFzcyxcbiAgICAgICAgICBleGFjdEFjdGl2ZUNsYXNzOiB0aGlzLmV4YWN0QWN0aXZlQ2xhc3NcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUxpbmtcbiAgfVxufVxuIiwiLyogZ2xvYmFsIEN1c3RvbUV2ZW50ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Q3VzdG9tRXZlbnQoZWwsIGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gIGxldCBldnRcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICBidWJibGVzOiBzaG91bGRCdWJibGVcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKVxuICB9XG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxufVxuIiwiZXhwb3J0IGNvbnN0IERpc3BhdGNoRXZlbnRNaXhpbiA9IHtcbiAgcHJvcHM6IHtcbiAgICBldmVudDogU3RyaW5nLFxuICAgICdldmVudC10YXJnZXQnOiBPYmplY3QsXG4gICAgJ2V2ZW50LWFyZ3MnOiBBcnJheVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZGlzcGF0Y2hFdmVudChldnQpIHtcbiAgICAgIGV2dCAmJiB0aGlzLiRlbWl0KGV2dC50eXBlLCBldnQpXG4gICAgICBpZiAodGhpcy5ldmVudCkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5ldmVudFRhcmdldCB8fCB0aGlzLiRyb290XG4gICAgICAgIGxldCBhcmdzID0gdGhpcy5ldmVudEFyZ3MgfHwgW11cbiAgICAgICAgdGFyZ2V0LiRlbWl0KHRoaXMuZXZlbnQsIC4uLmFyZ3MpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpc3RlbmVycygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMuJGxpc3RlbmVycyxcbiAgICAgICAgY2xpY2s6IGUgPT4gdGhpcy5kaXNwYXRjaEV2ZW50KGUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBzY29wZSA9XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMHgxMDAwMDAwMCkpLnRvU3RyaW5nKCkgKyAnLSdcblxuZXhwb3J0IGNvbnN0IFZNQVVuaXF1ZUlkTWl4aW4gPSB7XG4gIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICB0aGlzLnZtYV91aWRfID0gc2NvcGUgKyB0aGlzLl91aWRcbiAgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBNRENGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1EQ0ZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICBpZiAoYWRhcHRlciA9PT0gdm9pZCAwKSB7IGFkYXB0ZXIgPSB7fTsgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgICAgICAgICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgICAgICAgICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgICAgICAgICAvLyB2YWxpZGF0aW9uLlxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICByZXR1cm4gTURDRm91bmRhdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBNRENGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBBTklNQVRFOiAnbWRjLWRyYXdlci0tYW5pbWF0ZScsXG4gICAgQ0xPU0lORzogJ21kYy1kcmF3ZXItLWNsb3NpbmcnLFxuICAgIERJU01JU1NJQkxFOiAnbWRjLWRyYXdlci0tZGlzbWlzc2libGUnLFxuICAgIE1PREFMOiAnbWRjLWRyYXdlci0tbW9kYWwnLFxuICAgIE9QRU46ICdtZGMtZHJhd2VyLS1vcGVuJyxcbiAgICBPUEVOSU5HOiAnbWRjLWRyYXdlci0tb3BlbmluZycsXG4gICAgUk9PVDogJ21kYy1kcmF3ZXInLFxufTtcbnZhciBzdHJpbmdzID0ge1xuICAgIEFQUF9DT05URU5UX1NFTEVDVE9SOiAnLm1kYy1kcmF3ZXItYXBwLWNvbnRlbnQnLFxuICAgIENMT1NFX0VWRU5UOiAnTURDRHJhd2VyOmNsb3NlZCcsXG4gICAgT1BFTl9FVkVOVDogJ01EQ0RyYXdlcjpvcGVuZWQnLFxuICAgIFNDUklNX1NFTEVDVE9SOiAnLm1kYy1kcmF3ZXItc2NyaW0nLFxufTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbnZhciBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmFuaW1hdGlvbkZyYW1lXyA9IDA7XG4gICAgICAgIF90aGlzLmFuaW1hdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBlbGVtZW50SGFzQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeUNsb3NlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5T3BlbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNhdmVGb2N1czogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlc3RvcmVGb2N1czogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGZvY3VzQWN0aXZlTmF2aWdhdGlvbkl0ZW06IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICB0cmFwRm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWxlYXNlRm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbkZyYW1lXykge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZV8pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvblRpbWVyXykge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0aW9uVGltZXJfKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5pc09wZW4oKSB8fCB0aGlzLmlzT3BlbmluZygpIHx8IHRoaXMuaXNDbG9zaW5nKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuT1BFTik7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5BTklNQVRFKTtcbiAgICAgICAgLy8gV2FpdCBhIGZyYW1lIG9uY2UgZGlzcGxheSBpcyBubyBsb25nZXIgXCJub25lXCIsIHRvIGVzdGFibGlzaCBiYXNpcyBmb3IgYW5pbWF0aW9uXG4gICAgICAgIHRoaXMucnVuTmV4dEFuaW1hdGlvbkZyYW1lXyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLk9QRU5JTkcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zYXZlRm9jdXMoKTtcbiAgICB9O1xuICAgIE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4oKSB8fCB0aGlzLmlzT3BlbmluZygpIHx8IHRoaXMuaXNDbG9zaW5nKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQ0xPU0lORyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHRydWUgaWYgZHJhd2VyIGlzIGluIG9wZW4gc3RhdGUuXG4gICAgICovXG4gICAgTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuT1BFTik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHRydWUgaWYgZHJhd2VyIGlzIGFuaW1hdGluZyBvcGVuLlxuICAgICAqL1xuICAgIE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5wcm90b3R5cGUuaXNPcGVuaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLk9QRU5JTkcpIHx8IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5BTklNQVRFKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gdHJ1ZSBpZiBkcmF3ZXIgaXMgYW5pbWF0aW5nIGNsb3NlZC5cbiAgICAgKi9cbiAgICBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24ucHJvdG90eXBlLmlzQ2xvc2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5DTE9TSU5HKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEtleWRvd24gaGFuZGxlciB0byBjbG9zZSBkcmF3ZXIgd2hlbiBrZXkgaXMgZXNjYXBlLlxuICAgICAqL1xuICAgIE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlS2V5ZG93biA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGtleUNvZGUgPSBldnQua2V5Q29kZSwga2V5ID0gZXZ0LmtleTtcbiAgICAgICAgdmFyIGlzRXNjYXBlID0ga2V5ID09PSAnRXNjYXBlJyB8fCBrZXlDb2RlID09PSAyNztcbiAgICAgICAgaWYgKGlzRXNjYXBlKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgYSB0cmFuc2l0aW9uIGVuZCBldmVudCBvbiB0aGUgcm9vdCBlbGVtZW50LlxuICAgICAqL1xuICAgIE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIE9QRU5JTkcgPSBjc3NDbGFzc2VzLk9QRU5JTkcsIENMT1NJTkcgPSBjc3NDbGFzc2VzLkNMT1NJTkcsIE9QRU4gPSBjc3NDbGFzc2VzLk9QRU4sIEFOSU1BVEUgPSBjc3NDbGFzc2VzLkFOSU1BVEUsIFJPT1QgPSBjc3NDbGFzc2VzLlJPT1Q7XG4gICAgICAgIC8vIEluIEVkZ2UsIHRyYW5zaXRpb25lbmQgb24gcmlwcGxlIHBzZXVkby1lbGVtZW50cyB5aWVsZHMgYSB0YXJnZXQgd2l0aG91dCBjbGFzc0xpc3QsIHNvIGNoZWNrIGZvciBFbGVtZW50IGZpcnN0LlxuICAgICAgICB2YXIgaXNSb290RWxlbWVudCA9IHRoaXMuaXNFbGVtZW50XyhldnQudGFyZ2V0KSAmJiB0aGlzLmFkYXB0ZXJfLmVsZW1lbnRIYXNDbGFzcyhldnQudGFyZ2V0LCBST09UKTtcbiAgICAgICAgaWYgKCFpc1Jvb3RFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNDbG9zaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoT1BFTik7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZCgpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZXN0b3JlRm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNBY3RpdmVOYXZpZ2F0aW9uSXRlbSgpO1xuICAgICAgICAgICAgdGhpcy5vcGVuZWQoKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5T3BlbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoQU5JTUFURSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoT1BFTklORyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoQ0xPU0lORyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeHRlbnNpb24gcG9pbnQgZm9yIHdoZW4gZHJhd2VyIGZpbmlzaGVzIG9wZW4gYW5pbWF0aW9uLlxuICAgICAqL1xuICAgIE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5wcm90b3R5cGUub3BlbmVkID0gZnVuY3Rpb24gKCkgeyB9OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWVtcHR5XG4gICAgLyoqXG4gICAgICogRXh0ZW5zaW9uIHBvaW50IGZvciB3aGVuIGRyYXdlciBmaW5pc2hlcyBjbG9zZSBhbmltYXRpb24uXG4gICAgICovXG4gICAgTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5jbG9zZWQgPSBmdW5jdGlvbiAoKSB7IH07IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZW1wdHlcbiAgICAvKipcbiAgICAgKiBSdW5zIHRoZSBnaXZlbiBsb2dpYyBvbiB0aGUgbmV4dCBhbmltYXRpb24gZnJhbWUsIHVzaW5nIHNldFRpbWVvdXQgdG8gZmFjdG9yIGluIEZpcmVmb3ggcmVmbG93IGJlaGF2aW9yLlxuICAgICAqL1xuICAgIE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5wcm90b3R5cGUucnVuTmV4dEFuaW1hdGlvbkZyYW1lXyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lXyk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFuaW1hdGlvbkZyYW1lXyA9IDA7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuYW5pbWF0aW9uVGltZXJfKTtcbiAgICAgICAgICAgIF90aGlzLmFuaW1hdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5wcm90b3R5cGUuaXNFbGVtZW50XyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIC8vIEluIEVkZ2UsIHRyYW5zaXRpb25lbmQgb24gcmlwcGxlIHBzZXVkby1lbGVtZW50cyB5aWVsZHMgYSB0YXJnZXQgd2l0aG91dCBjbGFzc0xpc3QuXG4gICAgICAgIHJldHVybiBCb29sZWFuKGVsZW1lbnQuY2xhc3NMaXN0KTtcbiAgICB9O1xuICAgIHJldHVybiBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uIH0gZnJvbSAnLi4vZGlzbWlzc2libGUvZm91bmRhdGlvbic7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogc3ViY2xhc3MgaXMgbm90IGEgYnJhbmNoIHN0YXRlbWVudCAqL1xudmFyIE1EQ01vZGFsRHJhd2VyRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENNb2RhbERyYXdlckZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTW9kYWxEcmF3ZXJGb3VuZGF0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGRyYXdlciBmaW5pc2hlcyBvcGVuIGFuaW1hdGlvbi5cbiAgICAgKi9cbiAgICBNRENNb2RhbERyYXdlckZvdW5kYXRpb24ucHJvdG90eXBlLm9wZW5lZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy50cmFwRm9jdXMoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGRyYXdlciBmaW5pc2hlcyBjbG9zZSBhbmltYXRpb24uXG4gICAgICovXG4gICAgTURDTW9kYWxEcmF3ZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5jbG9zZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVsZWFzZUZvY3VzKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGNsaWNrIGV2ZW50IG9uIHNjcmltLlxuICAgICAqL1xuICAgIE1EQ01vZGFsRHJhd2VyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlU2NyaW1DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ01vZGFsRHJhd2VyRm91bmRhdGlvbjtcbn0oTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENNb2RhbERyYXdlckZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENNb2RhbERyYXdlckZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENDb21wb25lbnQocm9vdCwgZm91bmRhdGlvbikge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3RfID0gcm9vdDtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIHRzbGliXzEuX19zcHJlYWQoYXJncykpO1xuICAgICAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgICAgIC8vIHRoaXMucm9vdF8gaXMgZGVmaW5lZCBhbmQgY2FuIGJlIHVzZWQgd2l0aGluIHRoZSBmb3VuZGF0aW9uIGNsYXNzLlxuICAgICAgICB0aGlzLmZvdW5kYXRpb25fID0gZm91bmRhdGlvbiA9PT0gdW5kZWZpbmVkID8gdGhpcy5nZXREZWZhdWx0Rm91bmRhdGlvbigpIDogZm91bmRhdGlvbjtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5pbml0KCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gICAgfVxuICAgIE1EQ0NvbXBvbmVudC5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAgICAgLy8gcmV0dXJucyBhbiBpbnN0YW50aWF0ZWQgY29tcG9uZW50IHdpdGggaXRzIHJvb3Qgc2V0IHRvIHRoYXQgZWxlbWVudC4gQWxzbyBub3RlIHRoYXQgaW4gdGhlIGNhc2VzIG9mXG4gICAgICAgIC8vIHN1YmNsYXNzZXMsIGFuIGV4cGxpY2l0IGZvdW5kYXRpb24gY2xhc3Mgd2lsbCBub3QgaGF2ZSB0byBiZSBwYXNzZWQgaW47IGl0IHdpbGwgc2ltcGx5IGJlIGluaXRpYWxpemVkXG4gICAgICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICAgICAgcmV0dXJuIG5ldyBNRENDb21wb25lbnQocm9vdCwgbmV3IE1EQ0ZvdW5kYXRpb24oe30pKTtcbiAgICB9O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBtZXRob2QgcGFyYW0gb25seSBleGlzdHMgZm9yIHR5cGluZyBwdXJwb3NlczsgaXQgZG9lcyBub3QgbmVlZCB0byBiZSB1bml0IHRlc3RlZCAqL1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBfYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoaXMgdG8gZG8gYW55IGFkZGl0aW9uYWwgc2V0dXAgd29yayB0aGF0IHdvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiBhXG4gICAgICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgICAgIC8vIGluaXRpYWxpemVkLiBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgYmVzaWRlcyByb290IGFuZCBmb3VuZGF0aW9uIHdpbGwgYmUgcGFzc2VkIGluIGhlcmUuXG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCBmb3VuZGF0aW9uIGNsYXNzIGZvciB0aGVcbiAgICAgICAgLy8gY29tcG9uZW50LlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSBnZXREZWZhdWx0Rm91bmRhdGlvbiB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkICcgK1xuICAgICAgICAgICAgJ2ZvdW5kYXRpb24gY2xhc3MnKTtcbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCBpZiB0aGV5IG5lZWQgdG8gcGVyZm9ybSB3b3JrIHRvIHN5bmNocm9uaXplIHdpdGggYSBob3N0IERPTVxuICAgICAgICAvLyBvYmplY3QuIEFuIGV4YW1wbGUgb2YgdGhpcyB3b3VsZCBiZSBhIGZvcm0gY29udHJvbCB3cmFwcGVyIHRoYXQgbmVlZHMgdG8gc3luY2hyb25pemUgaXRzIGludGVybmFsIHN0YXRlXG4gICAgICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgICAgIC8vIHJlYWRzL3dyaXRlcyB0aGF0IHdvdWxkIGNhdXNlIGxheW91dCAvIHBhaW50LCBhcyB0aGlzIGlzIGNhbGxlZCBzeW5jaHJvbm91c2x5IGZyb20gd2l0aGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBtYXkgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJlbGVhc2UgYW55IHJlc291cmNlcyAvIGRlcmVnaXN0ZXIgYW55IGxpc3RlbmVycyB0aGV5IGhhdmVcbiAgICAgICAgLy8gYXR0YWNoZWQuIEFuIGV4YW1wbGUgb2YgdGhpcyBtaWdodCBiZSBkZXJlZ2lzdGVyaW5nIGEgcmVzaXplIGV2ZW50IGZyb20gdGhlIHdpbmRvdyBvYmplY3QuXG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLnVubGlzdGVuID0gZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLCB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgICAqL1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIChldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUpIHtcbiAgICAgICAgaWYgKHNob3VsZEJ1YmJsZSA9PT0gdm9pZCAwKSB7IHNob3VsZEJ1YmJsZSA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBldnQ7XG4gICAgICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlLFxuICAgICAgICAgICAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICAgICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vdF8uZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0NvbXBvbmVudDtcbn0oKSk7XG5leHBvcnQgeyBNRENDb21wb25lbnQgfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENDb21wb25lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBcInBvbnlmaWxsXCIgaXMgYSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgbW9kaWZ5IHRoZSBnbG9iYWwgcHJvdG90eXBlIGNoYWluLlxuICogVGhpcyBtYWtlcyBwb255ZmlsbHMgc2FmZXIgdGhhbiB0cmFkaXRpb25hbCBwb2x5ZmlsbHMsIGVzcGVjaWFsbHkgZm9yIGxpYnJhcmllcyBsaWtlIE1EQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgIH1cbiAgICB2YXIgZWwgPSBlbGVtZW50O1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgdmFyIG5hdGl2ZU1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXNcbiAgICAgICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcjtcbiAgICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbnlmaWxsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgcG9ueWZpbGwgZnJvbSAnLi9wb255ZmlsbCc7XG5leHBvcnQgeyBwb255ZmlsbCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBMSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTOiAnbWRjLWxpc3QtaXRlbS0tYWN0aXZhdGVkJyxcbiAgICBMSVNUX0lURU1fQ0xBU1M6ICdtZGMtbGlzdC1pdGVtJyxcbiAgICBMSVNUX0lURU1fU0VMRUNURURfQ0xBU1M6ICdtZGMtbGlzdC1pdGVtLS1zZWxlY3RlZCcsXG4gICAgUk9PVDogJ21kYy1saXN0Jyxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBBQ1RJT05fRVZFTlQ6ICdNRENMaXN0OmFjdGlvbicsXG4gICAgQVJJQV9DSEVDS0VEOiAnYXJpYS1jaGVja2VkJyxcbiAgICBBUklBX0NIRUNLRURfQ0hFQ0tCT1hfU0VMRUNUT1I6ICdbcm9sZT1cImNoZWNrYm94XCJdW2FyaWEtY2hlY2tlZD1cInRydWVcIl0nLFxuICAgIEFSSUFfQ0hFQ0tFRF9SQURJT19TRUxFQ1RPUjogJ1tyb2xlPVwicmFkaW9cIl1bYXJpYS1jaGVja2VkPVwidHJ1ZVwiXScsXG4gICAgQVJJQV9PUklFTlRBVElPTjogJ2FyaWEtb3JpZW50YXRpb24nLFxuICAgIEFSSUFfT1JJRU5UQVRJT05fSE9SSVpPTlRBTDogJ2hvcml6b250YWwnLFxuICAgIEFSSUFfUk9MRV9DSEVDS0JPWF9TRUxFQ1RPUjogJ1tyb2xlPVwiY2hlY2tib3hcIl0nLFxuICAgIEFSSUFfU0VMRUNURUQ6ICdhcmlhLXNlbGVjdGVkJyxcbiAgICBDSEVDS0JPWF9SQURJT19TRUxFQ1RPUjogJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmRpc2FibGVkKSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6ZGlzYWJsZWQpJyxcbiAgICBDSEVDS0JPWF9TRUxFQ1RPUjogJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmRpc2FibGVkKScsXG4gICAgQ0hJTERfRUxFTUVOVFNfVE9fVE9HR0xFX1RBQklOREVYOiBcIlxcbiAgICAuXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUyArIFwiIGJ1dHRvbjpub3QoOmRpc2FibGVkKSxcXG4gICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MgKyBcIiBhXFxuICBcIixcbiAgICBFTkFCTEVEX0lURU1TX1NFTEVDVE9SOiAnLm1kYy1saXN0LWl0ZW06bm90KC5tZGMtbGlzdC1pdGVtLS1kaXNhYmxlZCknLFxuICAgIEZPQ1VTQUJMRV9DSElMRF9FTEVNRU5UUzogXCJcXG4gICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MgKyBcIiBidXR0b246bm90KDpkaXNhYmxlZCksXFxuICAgIC5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTICsgXCIgYSxcXG4gICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MgKyBcIiBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOm5vdCg6ZGlzYWJsZWQpLFxcbiAgICAuXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUyArIFwiIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06bm90KDpkaXNhYmxlZClcXG4gIFwiLFxuICAgIFJBRElPX1NFTEVDVE9SOiAnaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6ZGlzYWJsZWQpJyxcbn07XG5leHBvcnQgeyBzdHJpbmdzLCBjc3NDbGFzc2VzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBFTEVNRU5UU19LRVlfQUxMT1dFRF9JTiA9IFsnaW5wdXQnLCAnYnV0dG9uJywgJ3RleHRhcmVhJywgJ3NlbGVjdCddO1xuZnVuY3Rpb24gaXNOdW1iZXJBcnJheShzZWxlY3RlZEluZGV4KSB7XG4gICAgcmV0dXJuIHNlbGVjdGVkSW5kZXggaW5zdGFuY2VvZiBBcnJheTtcbn1cbnZhciBNRENMaXN0Rm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENMaXN0Rm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENMaXN0Rm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ0xpc3RGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMud3JhcEZvY3VzXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc1ZlcnRpY2FsXyA9IHRydWU7XG4gICAgICAgIF90aGlzLmlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc2VsZWN0ZWRJbmRleF8gPSAtMTtcbiAgICAgICAgX3RoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPSAtMTtcbiAgICAgICAgX3RoaXMudXNlQWN0aXZhdGVkQ2xhc3NfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzQ2hlY2tib3hMaXN0XyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc1JhZGlvTGlzdF8gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTGlzdEZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaXN0Rm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpc3RGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzRm9yRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZm9jdXNJdGVtQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldEZvY3VzZWRFbGVtZW50SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgZ2V0TGlzdEl0ZW1Db3VudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDaGVja2JveEF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGhhc1JhZGlvQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNDaGVja2JveENoZWNrZWRBdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc0ZvY3VzSW5zaWRlTGlzdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5QWN0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQXR0cmlidXRlRm9yRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3NGb3JFbGVtZW50SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNDaGVja2JveEF0SW5kZXgoMCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNDaGVja2JveExpc3RfID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmFkYXB0ZXJfLmhhc1JhZGlvQXRJbmRleCgwKSkge1xuICAgICAgICAgICAgdGhpcy5pc1JhZGlvTGlzdF8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcml2YXRlIHdyYXBGb2N1c18gdmFyaWFibGUuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFdyYXBGb2N1cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLndyYXBGb2N1c18gPSB2YWx1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGlzVmVydGljYWxfIHByaXZhdGUgdmFyaWFibGUuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFZlcnRpY2FsT3JpZW50YXRpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5pc1ZlcnRpY2FsXyA9IHZhbHVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgaXNTaW5nbGVTZWxlY3Rpb25MaXN0XyBwcml2YXRlIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTaW5nbGVTZWxlY3Rpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5pc1NpbmdsZVNlbGVjdGlvbkxpc3RfID0gdmFsdWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB1c2VBY3RpdmF0ZWRDbGFzc18gcHJpdmF0ZSB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VXNlQWN0aXZhdGVkQ2xhc3MgPSBmdW5jdGlvbiAodXNlQWN0aXZhdGVkKSB7XG4gICAgICAgIHRoaXMudXNlQWN0aXZhdGVkQ2xhc3NfID0gdXNlQWN0aXZhdGVkO1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmdldFNlbGVjdGVkSW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSW5kZXhfO1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFNlbGVjdGVkSW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzSW5kZXhWYWxpZF8oaW5kZXgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNDaGVja2JveExpc3RfKSB7XG4gICAgICAgICAgICB0aGlzLnNldENoZWNrYm94QXRJbmRleF8oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNSYWRpb0xpc3RfKSB7XG4gICAgICAgICAgICB0aGlzLnNldFJhZGlvQXRJbmRleF8oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTaW5nbGVTZWxlY3Rpb25BdEluZGV4XyhpbmRleCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZvY3VzIGluIGhhbmRsZXIgZm9yIHRoZSBsaXN0IGl0ZW1zLlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVGb2N1c0luID0gZnVuY3Rpb24gKF8sIGxpc3RJdGVtSW5kZXgpIHtcbiAgICAgICAgaWYgKGxpc3RJdGVtSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW4obGlzdEl0ZW1JbmRleCwgJzAnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRm9jdXMgb3V0IGhhbmRsZXIgZm9yIHRoZSBsaXN0IGl0ZW1zLlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVGb2N1c091dCA9IGZ1bmN0aW9uIChfLCBsaXN0SXRlbUluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChsaXN0SXRlbUluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuKGxpc3RJdGVtSW5kZXgsICctMScpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCZXR3ZWVuIEZvY3Vzb3V0ICYgRm9jdXNpbiBzb21lIGJyb3dzZXJzIGRvIG5vdCBoYXZlIGZvY3VzIG9uIGFueSBlbGVtZW50LiBTZXR0aW5nIGEgZGVsYXkgdG8gd2FpdCB0aWxsIHRoZSBmb2N1c1xuICAgICAgICAgKiBpcyBtb3ZlZCB0byBuZXh0IGVsZW1lbnQuXG4gICAgICAgICAqL1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghX3RoaXMuYWRhcHRlcl8uaXNGb2N1c0luc2lkZUxpc3QoKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFRhYmluZGV4VG9GaXJzdFNlbGVjdGVkSXRlbV8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBLZXkgaGFuZGxlciBmb3IgdGhlIGxpc3QuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUtleWRvd24gPSBmdW5jdGlvbiAoZXZ0LCBpc1Jvb3RMaXN0SXRlbSwgbGlzdEl0ZW1JbmRleCkge1xuICAgICAgICB2YXIgYXJyb3dMZWZ0ID0gZXZ0LmtleSA9PT0gJ0Fycm93TGVmdCcgfHwgZXZ0LmtleUNvZGUgPT09IDM3O1xuICAgICAgICB2YXIgYXJyb3dVcCA9IGV2dC5rZXkgPT09ICdBcnJvd1VwJyB8fCBldnQua2V5Q29kZSA9PT0gMzg7XG4gICAgICAgIHZhciBhcnJvd1JpZ2h0ID0gZXZ0LmtleSA9PT0gJ0Fycm93UmlnaHQnIHx8IGV2dC5rZXlDb2RlID09PSAzOTtcbiAgICAgICAgdmFyIGFycm93RG93biA9IGV2dC5rZXkgPT09ICdBcnJvd0Rvd24nIHx8IGV2dC5rZXlDb2RlID09PSA0MDtcbiAgICAgICAgdmFyIGlzSG9tZSA9IGV2dC5rZXkgPT09ICdIb21lJyB8fCBldnQua2V5Q29kZSA9PT0gMzY7XG4gICAgICAgIHZhciBpc0VuZCA9IGV2dC5rZXkgPT09ICdFbmQnIHx8IGV2dC5rZXlDb2RlID09PSAzNTtcbiAgICAgICAgdmFyIGlzRW50ZXIgPSBldnQua2V5ID09PSAnRW50ZXInIHx8IGV2dC5rZXlDb2RlID09PSAxMztcbiAgICAgICAgdmFyIGlzU3BhY2UgPSBldnQua2V5ID09PSAnU3BhY2UnIHx8IGV2dC5rZXlDb2RlID09PSAzMjtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0Rm9jdXNlZEVsZW1lbnRJbmRleCgpO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gLTE7XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSBsaXN0SXRlbUluZGV4O1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGV2ZW50IGRvZXNuJ3QgaGF2ZSBhIG1kYy1saXN0LWl0ZW0gYW5jZXN0b3IgZnJvbSB0aGVcbiAgICAgICAgICAgICAgICAvLyBjdXJyZW50IGxpc3QgKG5vdCBmcm9tIGEgc3VibGlzdCksIHJldHVybiBlYXJseS5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0aGlzLmlzVmVydGljYWxfICYmIGFycm93RG93bikgfHwgKCF0aGlzLmlzVmVydGljYWxfICYmIGFycm93UmlnaHQpKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICAgICAgICBuZXh0SW5kZXggPSB0aGlzLmZvY3VzTmV4dEVsZW1lbnQoY3VycmVudEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgodGhpcy5pc1ZlcnRpY2FsXyAmJiBhcnJvd1VwKSB8fCAoIXRoaXMuaXNWZXJ0aWNhbF8gJiYgYXJyb3dMZWZ0KSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgICAgICAgbmV4dEluZGV4ID0gdGhpcy5mb2N1c1ByZXZFbGVtZW50KGN1cnJlbnRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNIb21lKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICAgICAgICBuZXh0SW5kZXggPSB0aGlzLmZvY3VzRmlyc3RFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNFbmQpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgICAgICAgIG5leHRJbmRleCA9IHRoaXMuZm9jdXNMYXN0RWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzRW50ZXIgfHwgaXNTcGFjZSkge1xuICAgICAgICAgICAgaWYgKGlzUm9vdExpc3RJdGVtKSB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGlmIGVudGVyIGtleSBpcyBwcmVzc2VkIG9uIGFuY2hvciBlbGVtZW50IHdoaWNoIHRyaWdnZXJzIHN5bnRoZXRpYyBNb3VzZUV2ZW50IGV2ZW50LlxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnRhZ05hbWUgPT09ICdBJyAmJiBpc0VudGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2VsZWN0YWJsZUxpc3RfKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4T25BY3Rpb25fKGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5QWN0aW9uKGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4XyA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgaWYgKG5leHRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFRhYmluZGV4QXRJbmRleF8obmV4dEluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPSBuZXh0SW5kZXg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsaWNrIGhhbmRsZXIgZm9yIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIChpbmRleCwgdG9nZ2xlQ2hlY2tib3gpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RhYmxlTGlzdF8oKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4T25BY3Rpb25fKGluZGV4LCB0b2dnbGVDaGVja2JveCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlBY3Rpb24oaW5kZXgpO1xuICAgICAgICB0aGlzLnNldFRhYmluZGV4QXRJbmRleF8oaW5kZXgpO1xuICAgICAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID0gaW5kZXg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGb2N1c2VzIHRoZSBuZXh0IGVsZW1lbnQgb24gdGhlIGxpc3QuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmZvY3VzTmV4dEVsZW1lbnQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIGNvdW50ID0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCk7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSBpbmRleCArIDE7XG4gICAgICAgIGlmIChuZXh0SW5kZXggPj0gY291bnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLndyYXBGb2N1c18pIHtcbiAgICAgICAgICAgICAgICBuZXh0SW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGJlY2F1c2UgbGFzdCBpdGVtIGlzIGFscmVhZHkgZm9jdXNlZC5cbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KG5leHRJbmRleCk7XG4gICAgICAgIHJldHVybiBuZXh0SW5kZXg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGb2N1c2VzIHRoZSBwcmV2aW91cyBlbGVtZW50IG9uIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5mb2N1c1ByZXZFbGVtZW50ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBpbmRleCAtIDE7XG4gICAgICAgIGlmIChwcmV2SW5kZXggPCAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy53cmFwRm9jdXNfKSB7XG4gICAgICAgICAgICAgICAgcHJldkluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCkgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGJlY2F1c2UgZmlyc3QgaXRlbSBpcyBhbHJlYWR5IGZvY3VzZWQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleChwcmV2SW5kZXgpO1xuICAgICAgICByZXR1cm4gcHJldkluZGV4O1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmZvY3VzRmlyc3RFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgoMCk7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmZvY3VzTGFzdEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsYXN0SW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKSAtIDE7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleChsYXN0SW5kZXgpO1xuICAgICAgICByZXR1cm4gbGFzdEluZGV4O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRW5zdXJlcyB0aGF0IHByZXZlbnREZWZhdWx0IGlzIG9ubHkgY2FsbGVkIGlmIHRoZSBjb250YWluaW5nIGVsZW1lbnQgZG9lc24ndFxuICAgICAqIGNvbnN1bWUgdGhlIGV2ZW50LCBhbmQgaXQgd2lsbCBjYXVzZSBhbiB1bmludGVuZGVkIHNjcm9sbC5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUucHJldmVudERlZmF1bHRFdmVudF8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldnQudGFyZ2V0O1xuICAgICAgICB2YXIgdGFnTmFtZSA9IChcIlwiICsgdGFyZ2V0LnRhZ05hbWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChFTEVNRU5UU19LRVlfQUxMT1dFRF9JTi5pbmRleE9mKHRhZ05hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTaW5nbGVTZWxlY3Rpb25BdEluZGV4XyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgc2VsZWN0ZWRDbGFzc05hbWUgPSBjc3NDbGFzc2VzLkxJU1RfSVRFTV9TRUxFQ1RFRF9DTEFTUztcbiAgICAgICAgaWYgKHRoaXMudXNlQWN0aXZhdGVkQ2xhc3NfKSB7XG4gICAgICAgICAgICBzZWxlY3RlZENsYXNzTmFtZSA9IGNzc0NsYXNzZXMuTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTUztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4XyA+PSAwICYmIHRoaXMuc2VsZWN0ZWRJbmRleF8gIT09IGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleF8sIHNlbGVjdGVkQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleF8sIHN0cmluZ3MuQVJJQV9TRUxFQ1RFRCwgJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzc0ZvckVsZW1lbnRJbmRleChpbmRleCwgc2VsZWN0ZWRDbGFzc05hbWUpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgc3RyaW5ncy5BUklBX1NFTEVDVEVELCAndHJ1ZScpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gaW5kZXg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHJhZGlvIGF0IGdpdmUgaW5kZXguIFJhZGlvIGRvZXNuJ3QgY2hhbmdlIHRoZSBjaGVja2VkIHN0YXRlIGlmIGl0IGlzIGFscmVhZHkgY2hlY2tlZC5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0UmFkaW9BdEluZGV4XyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4KGluZGV4LCB0cnVlKTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4Xywgc3RyaW5ncy5BUklBX0NIRUNLRUQsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgJ3RydWUnKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IGluZGV4O1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldENoZWNrYm94QXRJbmRleF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKTsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoaW5kZXguaW5kZXhPZihpKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXgoaSwgaXNDaGVja2VkKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGksIHN0cmluZ3MuQVJJQV9DSEVDS0VELCBpc0NoZWNrZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gaW5kZXg7XG4gICAgfTtcbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VGFiaW5kZXhBdEluZGV4XyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkSXRlbUluZGV4XyA9PT0gLTEgJiYgaW5kZXggIT09IDApIHtcbiAgICAgICAgICAgIC8vIElmIG5vIGxpc3QgaXRlbSB3YXMgc2VsZWN0ZWQgc2V0IGZpcnN0IGxpc3QgaXRlbSdzIHRhYmluZGV4IHRvIC0xLlxuICAgICAgICAgICAgLy8gR2VuZXJhbGx5LCB0YWJpbmRleCBpcyBzZXQgdG8gMCBvbiBmaXJzdCBsaXN0IGl0ZW0gb2YgbGlzdCB0aGF0IGhhcyBubyBwcmVzZWxlY3RlZCBpdGVtcy5cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KDAsICd0YWJpbmRleCcsICctMScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPj0gMCAmJiB0aGlzLmZvY3VzZWRJdGVtSW5kZXhfICE9PSBpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgodGhpcy5mb2N1c2VkSXRlbUluZGV4XywgJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsICd0YWJpbmRleCcsICcwJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIFJldHVybiB0cnVlIGlmIGl0IGlzIHNpbmdsZSBzZWxlY3RpbiBsaXN0LCBjaGVja2JveCBsaXN0IG9yIHJhZGlvIGxpc3QuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmlzU2VsZWN0YWJsZUxpc3RfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1NpbmdsZVNlbGVjdGlvbkxpc3RfIHx8IHRoaXMuaXNDaGVja2JveExpc3RfIHx8IHRoaXMuaXNSYWRpb0xpc3RfO1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFRhYmluZGV4VG9GaXJzdFNlbGVjdGVkSXRlbV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0YXJnZXRJbmRleCA9IDA7XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0YWJsZUxpc3RfKCkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3RlZEluZGV4XyA9PT0gJ251bWJlcicgJiYgdGhpcy5zZWxlY3RlZEluZGV4XyAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleF87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc051bWJlckFycmF5KHRoaXMuc2VsZWN0ZWRJbmRleF8pICYmIHRoaXMuc2VsZWN0ZWRJbmRleF8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRhcmdldEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4Xy5yZWR1Y2UoZnVuY3Rpb24gKGN1cnJlbnRJbmRleCwgbWluSW5kZXgpIHsgcmV0dXJuIE1hdGgubWluKGN1cnJlbnRJbmRleCwgbWluSW5kZXgpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFRhYmluZGV4QXRJbmRleF8odGFyZ2V0SW5kZXgpO1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmlzSW5kZXhWYWxpZF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGluZGV4IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0NoZWNrYm94TGlzdF8pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01EQ0xpc3RGb3VuZGF0aW9uOiBBcnJheSBvZiBpbmRleCBpcyBvbmx5IHN1cHBvcnRlZCBmb3IgY2hlY2tib3ggYmFzZWQgbGlzdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZGV4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4LnNvbWUoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIF90aGlzLmlzSW5kZXhJblJhbmdlXyhpKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDaGVja2JveExpc3RfKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNRENMaXN0Rm91bmRhdGlvbjogRXhwZWN0ZWQgYXJyYXkgb2YgaW5kZXggZm9yIGNoZWNrYm94IGJhc2VkIGxpc3QgYnV0IGdvdCBudW1iZXI6ICcgKyBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0luZGV4SW5SYW5nZV8oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuaXNJbmRleEluUmFuZ2VfID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBsaXN0U2l6ZSA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpO1xuICAgICAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IGxpc3RTaXplO1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFNlbGVjdGVkSW5kZXhPbkFjdGlvbl8gPSBmdW5jdGlvbiAoaW5kZXgsIHRvZ2dsZUNoZWNrYm94KSB7XG4gICAgICAgIGlmICh0b2dnbGVDaGVja2JveCA9PT0gdm9pZCAwKSB7IHRvZ2dsZUNoZWNrYm94ID0gdHJ1ZTsgfVxuICAgICAgICBpZiAodGhpcy5pc0NoZWNrYm94TGlzdF8pIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2hlY2tib3hBdEluZGV4XyhpbmRleCwgdG9nZ2xlQ2hlY2tib3gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnRvZ2dsZUNoZWNrYm94QXRJbmRleF8gPSBmdW5jdGlvbiAoaW5kZXgsIHRvZ2dsZUNoZWNrYm94KSB7XG4gICAgICAgIHZhciBpc0NoZWNrZWQgPSB0aGlzLmFkYXB0ZXJfLmlzQ2hlY2tib3hDaGVja2VkQXRJbmRleChpbmRleCk7XG4gICAgICAgIGlmICh0b2dnbGVDaGVja2JveCkge1xuICAgICAgICAgICAgaXNDaGVja2VkID0gIWlzQ2hlY2tlZDtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXgoaW5kZXgsIGlzQ2hlY2tlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9DSEVDS0VELCBpc0NoZWNrZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICAgICAgLy8gSWYgbm9uZSBvZiB0aGUgY2hlY2tib3ggaXRlbXMgYXJlIHNlbGVjdGVkIGFuZCBzZWxlY3RlZEluZGV4IGlzIG5vdCBpbml0aWFsaXplZCB0aGVuIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlLlxuICAgICAgICB2YXIgc2VsZWN0ZWRJbmRleGVzID0gdGhpcy5zZWxlY3RlZEluZGV4XyA9PT0gLTEgPyBbXSA6IHRoaXMuc2VsZWN0ZWRJbmRleF8uc2xpY2UoKTtcbiAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleGVzLnB1c2goaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleGVzID0gc2VsZWN0ZWRJbmRleGVzLmZpbHRlcihmdW5jdGlvbiAoaSkgeyByZXR1cm4gaSAhPT0gaW5kZXg7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8gPSBzZWxlY3RlZEluZGV4ZXM7XG4gICAgfTtcbiAgICByZXR1cm4gTURDTGlzdEZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0xpc3RGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDTGlzdEZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBwb255ZmlsbCB9IGZyb20gJ0BtYXRlcmlhbC9kb20vaW5kZXgnO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1EQ0xpc3RGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbnZhciBNRENMaXN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ0xpc3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTGlzdC5wcm90b3R5cGUsIFwidmVydGljYWxcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRWZXJ0aWNhbE9yaWVudGF0aW9uKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpc3QucHJvdG90eXBlLCBcImxpc3RFbGVtZW50c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuRU5BQkxFRF9JVEVNU19TRUxFQ1RPUikpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTGlzdC5wcm90b3R5cGUsIFwid3JhcEZvY3VzXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0V3JhcEZvY3VzKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpc3QucHJvdG90eXBlLCBcInNpbmdsZVNlbGVjdGlvblwiLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKGlzU2luZ2xlU2VsZWN0aW9uTGlzdCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRTaW5nbGVTZWxlY3Rpb24oaXNTaW5nbGVTZWxlY3Rpb25MaXN0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpc3QucHJvdG90eXBlLCBcInNlbGVjdGVkSW5kZXhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb25fLmdldFNlbGVjdGVkSW5kZXgoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0xpc3QuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ0xpc3Qocm9vdCk7XG4gICAgfTtcbiAgICBNRENMaXN0LnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2tfID0gdGhpcy5oYW5kbGVDbGlja0V2ZW50Xy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUtleWRvd25fID0gdGhpcy5oYW5kbGVLZXlkb3duRXZlbnRfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZm9jdXNJbkV2ZW50TGlzdGVuZXJfID0gdGhpcy5oYW5kbGVGb2N1c0luRXZlbnRfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZm9jdXNPdXRFdmVudExpc3RlbmVyXyA9IHRoaXMuaGFuZGxlRm9jdXNPdXRFdmVudF8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5saXN0ZW4oJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25fKTtcbiAgICAgICAgdGhpcy5saXN0ZW4oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja18pO1xuICAgICAgICB0aGlzLmxpc3RlbignZm9jdXNpbicsIHRoaXMuZm9jdXNJbkV2ZW50TGlzdGVuZXJfKTtcbiAgICAgICAgdGhpcy5saXN0ZW4oJ2ZvY3Vzb3V0JywgdGhpcy5mb2N1c091dEV2ZW50TGlzdGVuZXJfKTtcbiAgICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplTGlzdFR5cGUoKTtcbiAgICB9O1xuICAgIE1EQ0xpc3QucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5saXN0ZW4oJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25fKTtcbiAgICAgICAgdGhpcy51bmxpc3RlbignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrXyk7XG4gICAgICAgIHRoaXMudW5saXN0ZW4oJ2ZvY3VzaW4nLCB0aGlzLmZvY3VzSW5FdmVudExpc3RlbmVyXyk7XG4gICAgICAgIHRoaXMudW5saXN0ZW4oJ2ZvY3Vzb3V0JywgdGhpcy5mb2N1c091dEV2ZW50TGlzdGVuZXJfKTtcbiAgICB9O1xuICAgIE1EQ0xpc3QucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IHRoaXMucm9vdF8uZ2V0QXR0cmlidXRlKHN0cmluZ3MuQVJJQV9PUklFTlRBVElPTik7XG4gICAgICAgIHRoaXMudmVydGljYWwgPSBkaXJlY3Rpb24gIT09IHN0cmluZ3MuQVJJQV9PUklFTlRBVElPTl9IT1JJWk9OVEFMO1xuICAgICAgICAvLyBMaXN0IGl0ZW1zIG5lZWQgdG8gaGF2ZSBhdCBsZWFzdCB0YWJpbmRleD0tMSB0byBiZSBmb2N1c2FibGUuXG4gICAgICAgIFtdLnNsaWNlLmNhbGwodGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKCcubWRjLWxpc3QtaXRlbTpub3QoW3RhYmluZGV4XSknKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQ2hpbGQgYnV0dG9uL2EgZWxlbWVudHMgYXJlIG5vdCB0YWJiYWJsZSB1bnRpbCB0aGUgbGlzdCBpdGVtIGlzIGZvY3VzZWQuXG4gICAgICAgIFtdLnNsaWNlLmNhbGwodGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yQWxsKHN0cmluZ3MuRk9DVVNBQkxFX0NISUxEX0VMRU1FTlRTKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpOyB9KTtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5sYXlvdXQoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgc2VsZWN0ZWRJbmRleCB2YWx1ZSBiYXNlZCBvbiBwcmUtc2VsZWN0ZWQgY2hlY2tib3ggbGlzdCBpdGVtcywgc2luZ2xlIHNlbGVjdGlvbiBvciByYWRpby5cbiAgICAgKi9cbiAgICBNRENMaXN0LnByb3RvdHlwZS5pbml0aWFsaXplTGlzdFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjaGVja2JveExpc3RJdGVtcyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkFSSUFfUk9MRV9DSEVDS0JPWF9TRUxFQ1RPUik7XG4gICAgICAgIHZhciBzaW5nbGVTZWxlY3RlZExpc3RJdGVtID0gdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKFwiXFxuICAgICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTICsgXCIsXFxuICAgICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fU0VMRUNURURfQ0xBU1MgKyBcIlxcbiAgICBcIik7XG4gICAgICAgIHZhciByYWRpb1NlbGVjdGVkTGlzdEl0ZW0gPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5BUklBX0NIRUNLRURfUkFESU9fU0VMRUNUT1IpO1xuICAgICAgICBpZiAoY2hlY2tib3hMaXN0SXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgcHJlc2VsZWN0ZWRJdGVtcyA9IHRoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkFSSUFfQ0hFQ0tFRF9DSEVDS0JPWF9TRUxFQ1RPUik7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPVxuICAgICAgICAgICAgICAgIFtdLm1hcC5jYWxsKHByZXNlbGVjdGVkSXRlbXMsIGZ1bmN0aW9uIChsaXN0SXRlbSkgeyByZXR1cm4gX3RoaXMubGlzdEVsZW1lbnRzLmluZGV4T2YobGlzdEl0ZW0pOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaW5nbGVTZWxlY3RlZExpc3RJdGVtKSB7XG4gICAgICAgICAgICBpZiAoc2luZ2xlU2VsZWN0ZWRMaXN0SXRlbS5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VXNlQWN0aXZhdGVkQ2xhc3ModHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNpbmdsZVNlbGVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmxpc3RFbGVtZW50cy5pbmRleE9mKHNpbmdsZVNlbGVjdGVkTGlzdEl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJhZGlvU2VsZWN0ZWRMaXN0SXRlbSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5saXN0RWxlbWVudHMuaW5kZXhPZihyYWRpb1NlbGVjdGVkTGlzdEl0ZW0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENMaXN0LnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gRE8gTk9UIElOTElORSB0aGlzIHZhcmlhYmxlLiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgZm91bmRhdGlvbnMgdGFrZSBhIFBhcnRpYWw8TURDRm9vQWRhcHRlcj4uXG4gICAgICAgIC8vIFRvIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgb21pdCBhbnkgbWV0aG9kcywgd2UgbmVlZCBhIHNlcGFyYXRlLCBzdHJvbmdseSB0eXBlZCBhZGFwdGVyIHZhcmlhYmxlLlxuICAgICAgICB2YXIgYWRhcHRlciA9IHtcbiAgICAgICAgICAgIGFkZENsYXNzRm9yRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX3RoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9jdXNJdGVtQXRJbmRleDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBfdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0Rm9jdXNlZEVsZW1lbnRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubGlzdEVsZW1lbnRzLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7IH0sXG4gICAgICAgICAgICBnZXRMaXN0SXRlbUNvdW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5saXN0RWxlbWVudHMubGVuZ3RoOyB9LFxuICAgICAgICAgICAgaGFzQ2hlY2tib3hBdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdEl0ZW0gPSBfdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHJldHVybiAhIWxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5DSEVDS0JPWF9TRUxFQ1RPUik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFzUmFkaW9BdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdEl0ZW0gPSBfdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHJldHVybiAhIWxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5SQURJT19TRUxFQ1RPUik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNDaGVja2JveENoZWNrZWRBdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdEl0ZW0gPSBfdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHZhciB0b2dnbGVFbCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5DSEVDS0JPWF9TRUxFQ1RPUik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvZ2dsZUVsLmNoZWNrZWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNGb2N1c0luc2lkZUxpc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucm9vdF8uY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm90aWZ5QWN0aW9uOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KHN0cmluZ3MuQUNUSU9OX0VWRU5ULCB7IGluZGV4OiBpbmRleCB9LCAvKiogc2hvdWxkQnViYmxlICovIHRydWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZUF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleDogZnVuY3Rpb24gKGluZGV4LCBhdHRyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBfdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IF90aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleDogZnVuY3Rpb24gKGluZGV4LCBhdHRyLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX3RoaXMubGlzdEVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4OiBmdW5jdGlvbiAoaW5kZXgsIGlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0SXRlbSA9IF90aGlzLmxpc3RFbGVtZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgdmFyIHRvZ2dsZUVsID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcihzdHJpbmdzLkNIRUNLQk9YX1JBRElPX1NFTEVDVE9SKTtcbiAgICAgICAgICAgICAgICB0b2dnbGVFbC5jaGVja2VkID0gaXNDaGVja2VkO1xuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICAgICAgICAgIGV2ZW50LmluaXRFdmVudCgnY2hhbmdlJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlRWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuOiBmdW5jdGlvbiAobGlzdEl0ZW1JbmRleCwgdGFiSW5kZXhWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX3RoaXMubGlzdEVsZW1lbnRzW2xpc3RJdGVtSW5kZXhdO1xuICAgICAgICAgICAgICAgIHZhciBsaXN0SXRlbUNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5DSElMRF9FTEVNRU5UU19UT19UT0dHTEVfVEFCSU5ERVgpKTtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbUNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdGFiSW5kZXhWYWx1ZSk7IH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENMaXN0Rm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gZmlndXJlIG91dCB3aGljaCBsaXN0IGl0ZW0gdGhpcyBldmVudCBpcyB0YXJnZXR0aW5nLiBPciByZXR1cm5zIC0xIGlmXG4gICAgICogdGhlcmUgaXMgbm8gbGlzdCBpdGVtXG4gICAgICovXG4gICAgTURDTGlzdC5wcm90b3R5cGUuZ2V0TGlzdEl0ZW1JbmRleF8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBldmVudFRhcmdldCA9IGV2dC50YXJnZXQ7XG4gICAgICAgIHZhciBuZWFyZXN0UGFyZW50ID0gcG9ueWZpbGwuY2xvc2VzdChldmVudFRhcmdldCwgXCIuXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUyArIFwiLCAuXCIgKyBjc3NDbGFzc2VzLlJPT1QpO1xuICAgICAgICAvLyBHZXQgdGhlIGluZGV4IG9mIHRoZSBlbGVtZW50IGlmIGl0IGlzIGEgbGlzdCBpdGVtLlxuICAgICAgICBpZiAobmVhcmVzdFBhcmVudCAmJiBwb255ZmlsbC5tYXRjaGVzKG5lYXJlc3RQYXJlbnQsIFwiLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0RWxlbWVudHMuaW5kZXhPZihuZWFyZXN0UGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggZWxlbWVudCB3YXMgY2xpY2tlZCBiZWZvcmUgc2VuZGluZyB0aGUgZXZlbnQgdG8gdGhlIGZvdW5kYXRpb24uXG4gICAgICovXG4gICAgTURDTGlzdC5wcm90b3R5cGUuaGFuZGxlRm9jdXNJbkV2ZW50XyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRMaXN0SXRlbUluZGV4XyhldnQpO1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZUZvY3VzSW4oZXZ0LCBpbmRleCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggZWxlbWVudCB3YXMgY2xpY2tlZCBiZWZvcmUgc2VuZGluZyB0aGUgZXZlbnQgdG8gdGhlIGZvdW5kYXRpb24uXG4gICAgICovXG4gICAgTURDTGlzdC5wcm90b3R5cGUuaGFuZGxlRm9jdXNPdXRFdmVudF8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0TGlzdEl0ZW1JbmRleF8oZXZ0KTtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVGb2N1c091dChldnQsIGluZGV4KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gZmlndXJlIG91dCB3aGljaCBlbGVtZW50IHdhcyBmb2N1c2VkIHdoZW4ga2V5ZG93biBldmVudCBvY2N1cnJlZCBiZWZvcmUgc2VuZGluZyB0aGUgZXZlbnQgdG8gdGhlXG4gICAgICogZm91bmRhdGlvbi5cbiAgICAgKi9cbiAgICBNRENMaXN0LnByb3RvdHlwZS5oYW5kbGVLZXlkb3duRXZlbnRfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldExpc3RJdGVtSW5kZXhfKGV2dCk7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldnQudGFyZ2V0O1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVLZXlkb3duKGV2dCwgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUyksIGluZGV4KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVXNlZCB0byBmaWd1cmUgb3V0IHdoaWNoIGVsZW1lbnQgd2FzIGNsaWNrZWQgYmVmb3JlIHNlbmRpbmcgdGhlIGV2ZW50IHRvIHRoZSBmb3VuZGF0aW9uLlxuICAgICAqL1xuICAgIE1EQ0xpc3QucHJvdG90eXBlLmhhbmRsZUNsaWNrRXZlbnRfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldExpc3RJdGVtSW5kZXhfKGV2dCk7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldnQudGFyZ2V0O1xuICAgICAgICAvLyBUb2dnbGUgdGhlIGNoZWNrYm94IG9ubHkgaWYgaXQncyBub3QgdGhlIHRhcmdldCBvZiB0aGUgZXZlbnQsIG9yIHRoZSBjaGVja2JveCB3aWxsIGhhdmUgMiBjaGFuZ2UgZXZlbnRzLlxuICAgICAgICB2YXIgdG9nZ2xlQ2hlY2tib3ggPSAhcG9ueWZpbGwubWF0Y2hlcyh0YXJnZXQsIHN0cmluZ3MuQ0hFQ0tCT1hfUkFESU9fU0VMRUNUT1IpO1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmhhbmRsZUNsaWNrKGluZGV4LCB0b2dnbGVDaGVja2JveCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDTGlzdDtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENMaXN0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwidmFyIGNhbmRpZGF0ZVNlbGVjdG9ycyA9IFtcbiAgJ2lucHV0JyxcbiAgJ3NlbGVjdCcsXG4gICd0ZXh0YXJlYScsXG4gICdhW2hyZWZdJyxcbiAgJ2J1dHRvbicsXG4gICdbdGFiaW5kZXhdJyxcbiAgJ2F1ZGlvW2NvbnRyb2xzXScsXG4gICd2aWRlb1tjb250cm9sc10nLFxuICAnW2NvbnRlbnRlZGl0YWJsZV06bm90KFtjb250ZW50ZWRpdGFibGU9XCJmYWxzZVwiXSknLFxuXTtcbnZhciBjYW5kaWRhdGVTZWxlY3RvciA9IGNhbmRpZGF0ZVNlbGVjdG9ycy5qb2luKCcsJyk7XG5cbnZhciBtYXRjaGVzID0gdHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnXG4gID8gZnVuY3Rpb24gKCkge31cbiAgOiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcblxuZnVuY3Rpb24gdGFiYmFibGUoZWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIGVsZW1lbnREb2N1bWVudCA9IGVsLm93bmVyRG9jdW1lbnQgfHwgZWw7XG4gIHZhciByZWd1bGFyVGFiYmFibGVzID0gW107XG4gIHZhciBvcmRlcmVkVGFiYmFibGVzID0gW107XG5cbiAgdmFyIHVudG91Y2hhYmlsaXR5Q2hlY2tlciA9IG5ldyBVbnRvdWNoYWJpbGl0eUNoZWNrZXIoZWxlbWVudERvY3VtZW50KTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKGNhbmRpZGF0ZVNlbGVjdG9yKTtcblxuICBpZiAob3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyKSB7XG4gICAgaWYgKG1hdGNoZXMuY2FsbChlbCwgY2FuZGlkYXRlU2VsZWN0b3IpKSB7XG4gICAgICBjYW5kaWRhdGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGNhbmRpZGF0ZXMpO1xuICAgICAgY2FuZGlkYXRlcy51bnNoaWZ0KGVsKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaSwgY2FuZGlkYXRlLCBjYW5kaWRhdGVUYWJpbmRleDtcbiAgZm9yIChpID0gMDsgaSA8IGNhbmRpZGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjYW5kaWRhdGUgPSBjYW5kaWRhdGVzW2ldO1xuXG4gICAgaWYgKCFpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUoY2FuZGlkYXRlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpKSBjb250aW51ZTtcblxuICAgIGNhbmRpZGF0ZVRhYmluZGV4ID0gZ2V0VGFiaW5kZXgoY2FuZGlkYXRlKTtcbiAgICBpZiAoY2FuZGlkYXRlVGFiaW5kZXggPT09IDApIHtcbiAgICAgIHJlZ3VsYXJUYWJiYWJsZXMucHVzaChjYW5kaWRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcmRlcmVkVGFiYmFibGVzLnB1c2goe1xuICAgICAgICBkb2N1bWVudE9yZGVyOiBpLFxuICAgICAgICB0YWJJbmRleDogY2FuZGlkYXRlVGFiaW5kZXgsXG4gICAgICAgIG5vZGU6IGNhbmRpZGF0ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0YWJiYWJsZU5vZGVzID0gb3JkZXJlZFRhYmJhYmxlc1xuICAgIC5zb3J0KHNvcnRPcmRlcmVkVGFiYmFibGVzKVxuICAgIC5tYXAoZnVuY3Rpb24oYSkgeyByZXR1cm4gYS5ub2RlIH0pXG4gICAgLmNvbmNhdChyZWd1bGFyVGFiYmFibGVzKTtcblxuICByZXR1cm4gdGFiYmFibGVOb2Rlcztcbn1cblxudGFiYmFibGUuaXNUYWJiYWJsZSA9IGlzVGFiYmFibGU7XG50YWJiYWJsZS5pc0ZvY3VzYWJsZSA9IGlzRm9jdXNhYmxlO1xuXG5mdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKSB7XG4gIGlmIChcbiAgICAhaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpXG4gICAgfHwgaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpXG4gICAgfHwgZ2V0VGFiaW5kZXgobm9kZSkgPCAwXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNUYWJiYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpIHtcbiAgaWYgKCFub2RlKSB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBjYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKTtcbn1cblxuZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpIHtcbiAgdW50b3VjaGFiaWxpdHlDaGVja2VyID0gdW50b3VjaGFiaWxpdHlDaGVja2VyIHx8IG5ldyBVbnRvdWNoYWJpbGl0eUNoZWNrZXIobm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGUpO1xuICBpZiAoXG4gICAgbm9kZS5kaXNhYmxlZFxuICAgIHx8IGlzSGlkZGVuSW5wdXQobm9kZSlcbiAgICB8fCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIuaXNVbnRvdWNoYWJsZShub2RlKVxuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbnZhciBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvciA9IGNhbmRpZGF0ZVNlbGVjdG9ycy5jb25jYXQoJ2lmcmFtZScpLmpvaW4oJywnKTtcbmZ1bmN0aW9uIGlzRm9jdXNhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcikge1xuICBpZiAoIW5vZGUpIHRocm93IG5ldyBFcnJvcignTm8gbm9kZSBwcm92aWRlZCcpO1xuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFiaW5kZXgobm9kZSkge1xuICB2YXIgdGFiaW5kZXhBdHRyID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwKTtcbiAgaWYgKCFpc05hTih0YWJpbmRleEF0dHIpKSByZXR1cm4gdGFiaW5kZXhBdHRyO1xuICAvLyBCcm93c2VycyBkbyBub3QgcmV0dXJuIGB0YWJJbmRleGAgY29ycmVjdGx5IGZvciBjb250ZW50RWRpdGFibGUgbm9kZXM7XG4gIC8vIHNvIGlmIHRoZXkgZG9uJ3QgaGF2ZSBhIHRhYmluZGV4IGF0dHJpYnV0ZSBzcGVjaWZpY2FsbHkgc2V0LCBhc3N1bWUgaXQncyAwLlxuICBpZiAoaXNDb250ZW50RWRpdGFibGUobm9kZSkpIHJldHVybiAwO1xuICByZXR1cm4gbm9kZS50YWJJbmRleDtcbn1cblxuZnVuY3Rpb24gc29ydE9yZGVyZWRUYWJiYWJsZXMoYSwgYikge1xuICByZXR1cm4gYS50YWJJbmRleCA9PT0gYi50YWJJbmRleCA/IGEuZG9jdW1lbnRPcmRlciAtIGIuZG9jdW1lbnRPcmRlciA6IGEudGFiSW5kZXggLSBiLnRhYkluZGV4O1xufVxuXG4vLyBBcnJheS5wcm90b3R5cGUuZmluZCBub3QgYXZhaWxhYmxlIGluIElFLlxuZnVuY3Rpb24gZmluZChsaXN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJlZGljYXRlKGxpc3RbaV0pKSByZXR1cm4gbGlzdFtpXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0NvbnRlbnRFZGl0YWJsZShub2RlKSB7XG4gIHJldHVybiBub2RlLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnO1xufVxuXG5mdW5jdGlvbiBpc0lucHV0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJztcbn1cblxuZnVuY3Rpb24gaXNIaWRkZW5JbnB1dChub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ2hpZGRlbic7XG59XG5cbmZ1bmN0aW9uIGlzUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdyYWRpbyc7XG59XG5cbmZ1bmN0aW9uIGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc1JhZGlvKG5vZGUpICYmICFpc1RhYmJhYmxlUmFkaW8obm9kZSk7XG59XG5cbmZ1bmN0aW9uIGdldENoZWNrZWRSYWRpbyhub2Rlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5vZGVzW2ldLmNoZWNrZWQpIHtcbiAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNUYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHJldHVybiB0cnVlO1xuICAvLyBUaGlzIHdvbid0IGFjY291bnQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgeW91IGhhdmUgcmFkaW8gZ3JvdXBzIHdpdGggdGhlIHNhbWVcbiAgLy8gaW4gc2VwYXJhdGUgZm9ybXMgb24gdGhlIHNhbWUgcGFnZS5cbiAgdmFyIHJhZGlvU2V0ID0gbm9kZS5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJyArIG5vZGUubmFtZSArICdcIl0nKTtcbiAgdmFyIGNoZWNrZWQgPSBnZXRDaGVja2VkUmFkaW8ocmFkaW9TZXQpO1xuICByZXR1cm4gIWNoZWNrZWQgfHwgY2hlY2tlZCA9PT0gbm9kZTtcbn1cblxuLy8gQW4gZWxlbWVudCBpcyBcInVudG91Y2hhYmxlXCIgaWYgKml0IG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzKiBoYXNcbi8vIGB2aXNpYmlsaXR5OiBoaWRkZW5gIG9yIGBkaXNwbGF5OiBub25lYC5cbmZ1bmN0aW9uIFVudG91Y2hhYmlsaXR5Q2hlY2tlcihlbGVtZW50RG9jdW1lbnQpIHtcbiAgdGhpcy5kb2MgPSBlbGVtZW50RG9jdW1lbnQ7XG4gIC8vIE5vZGUgY2FjaGUgbXVzdCBiZSByZWZyZXNoZWQgb24gZXZlcnkgY2hlY2ssIGluIGNhc2VcbiAgLy8gdGhlIGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQgaGFzIGNoYW5nZWQuIFRoZSBjYWNoZSBjb250YWlucyB0dXBsZXNcbiAgLy8gbWFwcGluZyBub2RlcyB0byB0aGVpciBib29sZWFuIHJlc3VsdC5cbiAgdGhpcy5jYWNoZSA9IFtdO1xufVxuXG4vLyBnZXRDb21wdXRlZFN0eWxlIGFjY3VyYXRlbHkgcmVmbGVjdHMgYHZpc2liaWxpdHk6IGhpZGRlbmAgb2YgYW5jZXN0b3JzXG4vLyBidXQgbm90IGBkaXNwbGF5OiBub25lYCwgc28gd2UgbmVlZCB0byByZWN1cnNpdmVseSBjaGVjayBwYXJlbnRzLlxuVW50b3VjaGFiaWxpdHlDaGVja2VyLnByb3RvdHlwZS5oYXNEaXNwbGF5Tm9uZSA9IGZ1bmN0aW9uIGhhc0Rpc3BsYXlOb25lKG5vZGUsIG5vZGVDb21wdXRlZFN0eWxlKSB7XG4gIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gU2VhcmNoIGZvciBhIGNhY2hlZCByZXN1bHQuXG4gICAgdmFyIGNhY2hlZCA9IGZpbmQodGhpcy5jYWNoZSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0gPT09IG5vZGU7XG4gICAgfSk7XG4gICAgaWYgKGNhY2hlZCkgcmV0dXJuIGNhY2hlZFsxXTtcblxuICAgIG5vZGVDb21wdXRlZFN0eWxlID0gbm9kZUNvbXB1dGVkU3R5bGUgfHwgdGhpcy5kb2MuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblxuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICAgIGlmIChub2RlQ29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaGFzRGlzcGxheU5vbmUobm9kZS5wYXJlbnROb2RlKTtcbiAgICB9XG5cbiAgICB0aGlzLmNhY2hlLnB1c2goW25vZGUsIHJlc3VsdF0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuVW50b3VjaGFiaWxpdHlDaGVja2VyLnByb3RvdHlwZS5pc1VudG91Y2hhYmxlID0gZnVuY3Rpb24gaXNVbnRvdWNoYWJsZShub2RlKSB7XG4gIGlmIChub2RlID09PSB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQpIHJldHVybiBmYWxzZTtcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSB0aGlzLmRvYy5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBpZiAodGhpcy5oYXNEaXNwbGF5Tm9uZShub2RlLCBjb21wdXRlZFN0eWxlKSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBjb21wdXRlZFN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYmJhYmxlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cbiIsInZhciB0YWJiYWJsZSA9IHJlcXVpcmUoJ3RhYmJhYmxlJyk7XG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpO1xuXG52YXIgYWN0aXZlRm9jdXNUcmFwcyA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHRyYXBRdWV1ZSA9IFtdO1xuICByZXR1cm4ge1xuICAgIGFjdGl2YXRlVHJhcDogZnVuY3Rpb24odHJhcCkge1xuICAgICAgaWYgKHRyYXBRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBhY3RpdmVUcmFwID0gdHJhcFF1ZXVlW3RyYXBRdWV1ZS5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGFjdGl2ZVRyYXAgIT09IHRyYXApIHtcbiAgICAgICAgICBhY3RpdmVUcmFwLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHRyYXBJbmRleCA9IHRyYXBRdWV1ZS5pbmRleE9mKHRyYXApO1xuICAgICAgaWYgKHRyYXBJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdHJhcFF1ZXVlLnB1c2godHJhcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBtb3ZlIHRoaXMgZXhpc3RpbmcgdHJhcCB0byB0aGUgZnJvbnQgb2YgdGhlIHF1ZXVlXG4gICAgICAgIHRyYXBRdWV1ZS5zcGxpY2UodHJhcEluZGV4LCAxKTtcbiAgICAgICAgdHJhcFF1ZXVlLnB1c2godHJhcCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRlYWN0aXZhdGVUcmFwOiBmdW5jdGlvbih0cmFwKSB7XG4gICAgICB2YXIgdHJhcEluZGV4ID0gdHJhcFF1ZXVlLmluZGV4T2YodHJhcCk7XG4gICAgICBpZiAodHJhcEluZGV4ICE9PSAtMSkge1xuICAgICAgICB0cmFwUXVldWUuc3BsaWNlKHRyYXBJbmRleCwgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmFwUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICB0cmFwUXVldWVbdHJhcFF1ZXVlLmxlbmd0aCAtIDFdLnVucGF1c2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KSgpO1xuXG5mdW5jdGlvbiBmb2N1c1RyYXAoZWxlbWVudCwgdXNlck9wdGlvbnMpIHtcbiAgdmFyIGRvYyA9IGRvY3VtZW50O1xuICB2YXIgY29udGFpbmVyID1cbiAgICB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBkb2MucXVlcnlTZWxlY3RvcihlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgdmFyIGNvbmZpZyA9IHh0ZW5kKFxuICAgIHtcbiAgICAgIHJldHVybkZvY3VzT25EZWFjdGl2YXRlOiB0cnVlLFxuICAgICAgZXNjYXBlRGVhY3RpdmF0ZXM6IHRydWVcbiAgICB9LFxuICAgIHVzZXJPcHRpb25zXG4gICk7XG5cbiAgdmFyIHN0YXRlID0ge1xuICAgIGZpcnN0VGFiYmFibGVOb2RlOiBudWxsLFxuICAgIGxhc3RUYWJiYWJsZU5vZGU6IG51bGwsXG4gICAgbm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uOiBudWxsLFxuICAgIG1vc3RSZWNlbnRseUZvY3VzZWROb2RlOiBudWxsLFxuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgcGF1c2VkOiBmYWxzZVxuICB9O1xuXG4gIHZhciB0cmFwID0ge1xuICAgIGFjdGl2YXRlOiBhY3RpdmF0ZSxcbiAgICBkZWFjdGl2YXRlOiBkZWFjdGl2YXRlLFxuICAgIHBhdXNlOiBwYXVzZSxcbiAgICB1bnBhdXNlOiB1bnBhdXNlXG4gIH07XG5cbiAgcmV0dXJuIHRyYXA7XG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgaWYgKHN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuXG4gICAgc3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICBzdGF0ZS5ub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24gPSBkb2MuYWN0aXZlRWxlbWVudDtcblxuICAgIHZhciBvbkFjdGl2YXRlID1cbiAgICAgIGFjdGl2YXRlT3B0aW9ucyAmJiBhY3RpdmF0ZU9wdGlvbnMub25BY3RpdmF0ZVxuICAgICAgICA/IGFjdGl2YXRlT3B0aW9ucy5vbkFjdGl2YXRlXG4gICAgICAgIDogY29uZmlnLm9uQWN0aXZhdGU7XG4gICAgaWYgKG9uQWN0aXZhdGUpIHtcbiAgICAgIG9uQWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYWN0aXZhdGUoZGVhY3RpdmF0ZU9wdGlvbnMpIHtcbiAgICBpZiAoIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgc3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG5cbiAgICBhY3RpdmVGb2N1c1RyYXBzLmRlYWN0aXZhdGVUcmFwKHRyYXApO1xuXG4gICAgdmFyIG9uRGVhY3RpdmF0ZSA9XG4gICAgICBkZWFjdGl2YXRlT3B0aW9ucyAmJiBkZWFjdGl2YXRlT3B0aW9ucy5vbkRlYWN0aXZhdGUgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGRlYWN0aXZhdGVPcHRpb25zLm9uRGVhY3RpdmF0ZVxuICAgICAgICA6IGNvbmZpZy5vbkRlYWN0aXZhdGU7XG4gICAgaWYgKG9uRGVhY3RpdmF0ZSkge1xuICAgICAgb25EZWFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgdmFyIHJldHVybkZvY3VzID1cbiAgICAgIGRlYWN0aXZhdGVPcHRpb25zICYmIGRlYWN0aXZhdGVPcHRpb25zLnJldHVybkZvY3VzICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBkZWFjdGl2YXRlT3B0aW9ucy5yZXR1cm5Gb2N1c1xuICAgICAgICA6IGNvbmZpZy5yZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTtcbiAgICBpZiAocmV0dXJuRm9jdXMpIHtcbiAgICAgIGRlbGF5KGZ1bmN0aW9uKCkge1xuICAgICAgICB0cnlGb2N1cyhzdGF0ZS5ub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICBpZiAoc3RhdGUucGF1c2VkIHx8ICFzdGF0ZS5hY3RpdmUpIHJldHVybjtcbiAgICBzdGF0ZS5wYXVzZWQgPSB0cnVlO1xuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5wYXVzZSgpIHtcbiAgICBpZiAoIXN0YXRlLnBhdXNlZCB8fCAhc3RhdGUuYWN0aXZlKSByZXR1cm47XG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgYWRkTGlzdGVuZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIC8vIFRoZXJlIGNhbiBiZSBvbmx5IG9uZSBsaXN0ZW5pbmcgZm9jdXMgdHJhcCBhdCBhIHRpbWVcbiAgICBhY3RpdmVGb2N1c1RyYXBzLmFjdGl2YXRlVHJhcCh0cmFwKTtcblxuICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcblxuICAgIC8vIERlbGF5IGVuc3VyZXMgdGhhdCB0aGUgZm9jdXNlZCBlbGVtZW50IGRvZXNuJ3QgY2FwdHVyZSB0aGUgZXZlbnRcbiAgICAvLyB0aGF0IGNhdXNlZCB0aGUgZm9jdXMgdHJhcCBhY3RpdmF0aW9uLlxuICAgIGRlbGF5KGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICB9KTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGNoZWNrRm9jdXNJbiwgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDbGljaywgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGVja0tleSwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBpZiAoIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBjaGVja0ZvY3VzSW4sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2ssIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXksIHRydWUpO1xuXG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXROb2RlRm9yT3B0aW9uKG9wdGlvbk5hbWUpIHtcbiAgICB2YXIgb3B0aW9uVmFsdWUgPSBjb25maWdbb3B0aW9uTmFtZV07XG4gICAgdmFyIG5vZGUgPSBvcHRpb25WYWx1ZTtcbiAgICBpZiAoIW9wdGlvblZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5vZGUgPSBkb2MucXVlcnlTZWxlY3RvcihvcHRpb25WYWx1ZSk7XG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgJyArIG9wdGlvbk5hbWUgKyAnYCByZWZlcnMgdG8gbm8ga25vd24gbm9kZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBub2RlID0gb3B0aW9uVmFsdWUoKTtcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2AnICsgb3B0aW9uTmFtZSArICdgIGRpZCBub3QgcmV0dXJuIGEgbm9kZScpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEluaXRpYWxGb2N1c05vZGUoKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKGdldE5vZGVGb3JPcHRpb24oJ2luaXRpYWxGb2N1cycpICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gZ2V0Tm9kZUZvck9wdGlvbignaW5pdGlhbEZvY3VzJyk7XG4gICAgfSBlbHNlIGlmIChjb250YWluZXIuY29udGFpbnMoZG9jLmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBub2RlID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUgPSBzdGF0ZS5maXJzdFRhYmJhYmxlTm9kZSB8fCBnZXROb2RlRm9yT3B0aW9uKCdmYWxsYmFja0ZvY3VzJyk7XG4gICAgfVxuXG4gICAgaWYgKCFub2RlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiWW91IGNhbid0IGhhdmUgYSBmb2N1cy10cmFwIHdpdGhvdXQgYXQgbGVhc3Qgb25lIGZvY3VzYWJsZSBlbGVtZW50XCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICAvLyBUaGlzIG5lZWRzIHRvIGJlIGRvbmUgb24gbW91c2Vkb3duIGFuZCB0b3VjaHN0YXJ0IGluc3RlYWQgb2YgY2xpY2tcbiAgLy8gc28gdGhhdCBpdCBwcmVjZWRlcyB0aGUgZm9jdXMgZXZlbnQuXG4gIGZ1bmN0aW9uIGNoZWNrUG9pbnRlckRvd24oZSkge1xuICAgIGlmIChjb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpKSByZXR1cm47XG4gICAgaWYgKGNvbmZpZy5jbGlja091dHNpZGVEZWFjdGl2YXRlcykge1xuICAgICAgZGVhY3RpdmF0ZSh7XG4gICAgICAgIHJldHVybkZvY3VzOiAhdGFiYmFibGUuaXNGb2N1c2FibGUoZS50YXJnZXQpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEluIGNhc2UgZm9jdXMgZXNjYXBlcyB0aGUgdHJhcCBmb3Igc29tZSBzdHJhbmdlIHJlYXNvbiwgcHVsbCBpdCBiYWNrIGluLlxuICBmdW5jdGlvbiBjaGVja0ZvY3VzSW4oZSkge1xuICAgIC8vIEluIEZpcmVmb3ggd2hlbiB5b3UgVGFiIG91dCBvZiBhbiBpZnJhbWUgdGhlIERvY3VtZW50IGlzIGJyaWVmbHkgZm9jdXNlZC5cbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSB8fCBlLnRhcmdldCBpbnN0YW5jZW9mIERvY3VtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgdHJ5Rm9jdXMoc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgfHwgZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrS2V5KGUpIHtcbiAgICBpZiAoY29uZmlnLmVzY2FwZURlYWN0aXZhdGVzICE9PSBmYWxzZSAmJiBpc0VzY2FwZUV2ZW50KGUpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkZWFjdGl2YXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc1RhYkV2ZW50KGUpKSB7XG4gICAgICBjaGVja1RhYihlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICAvLyBIaWphY2sgVGFiIGV2ZW50cyBvbiB0aGUgZmlyc3QgYW5kIGxhc3QgZm9jdXNhYmxlIG5vZGVzIG9mIHRoZSB0cmFwLFxuICAvLyBpbiBvcmRlciB0byBwcmV2ZW50IGZvY3VzIGZyb20gZXNjYXBpbmcuIElmIGl0IGVzY2FwZXMgZm9yIGV2ZW4gYVxuICAvLyBtb21lbnQgaXQgY2FuIGVuZCB1cCBzY3JvbGxpbmcgdGhlIHBhZ2UgYW5kIGNhdXNpbmcgY29uZnVzaW9uIHNvIHdlXG4gIC8vIGtpbmQgb2YgbmVlZCB0byBjYXB0dXJlIHRoZSBhY3Rpb24gYXQgdGhlIGtleWRvd24gcGhhc2UuXG4gIGZ1bmN0aW9uIGNoZWNrVGFiKGUpIHtcbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgaWYgKGUuc2hpZnRLZXkgJiYgZS50YXJnZXQgPT09IHN0YXRlLmZpcnN0VGFiYmFibGVOb2RlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0cnlGb2N1cyhzdGF0ZS5sYXN0VGFiYmFibGVOb2RlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFlLnNoaWZ0S2V5ICYmIGUudGFyZ2V0ID09PSBzdGF0ZS5sYXN0VGFiYmFibGVOb2RlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0cnlGb2N1cyhzdGF0ZS5maXJzdFRhYmJhYmxlTm9kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tDbGljayhlKSB7XG4gICAgaWYgKGNvbmZpZy5jbGlja091dHNpZGVEZWFjdGl2YXRlcykgcmV0dXJuO1xuICAgIGlmIChjb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpKSByZXR1cm47XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVUYWJiYWJsZU5vZGVzKCkge1xuICAgIHZhciB0YWJiYWJsZU5vZGVzID0gdGFiYmFibGUoY29udGFpbmVyKTtcbiAgICBzdGF0ZS5maXJzdFRhYmJhYmxlTm9kZSA9IHRhYmJhYmxlTm9kZXNbMF0gfHwgZ2V0SW5pdGlhbEZvY3VzTm9kZSgpO1xuICAgIHN0YXRlLmxhc3RUYWJiYWJsZU5vZGUgPVxuICAgICAgdGFiYmFibGVOb2Rlc1t0YWJiYWJsZU5vZGVzLmxlbmd0aCAtIDFdIHx8IGdldEluaXRpYWxGb2N1c05vZGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeUZvY3VzKG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gZG9jLmFjdGl2ZUVsZW1lbnQpIHJldHVybjtcbiAgICBpZiAoIW5vZGUgfHwgIW5vZGUuZm9jdXMpIHtcbiAgICAgIHRyeUZvY3VzKGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbm9kZS5mb2N1cygpO1xuICAgIHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlID0gbm9kZTtcbiAgICBpZiAoaXNTZWxlY3RhYmxlSW5wdXQobm9kZSkpIHtcbiAgICAgIG5vZGUuc2VsZWN0KCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzU2VsZWN0YWJsZUlucHV0KG5vZGUpIHtcbiAgcmV0dXJuIChcbiAgICBub2RlLnRhZ05hbWUgJiZcbiAgICBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0JyAmJlxuICAgIHR5cGVvZiBub2RlLnNlbGVjdCA9PT0gJ2Z1bmN0aW9uJ1xuICApO1xufVxuXG5mdW5jdGlvbiBpc0VzY2FwZUV2ZW50KGUpIHtcbiAgcmV0dXJuIGUua2V5ID09PSAnRXNjYXBlJyB8fCBlLmtleSA9PT0gJ0VzYycgfHwgZS5rZXlDb2RlID09PSAyNztcbn1cblxuZnVuY3Rpb24gaXNUYWJFdmVudChlKSB7XG4gIHJldHVybiBlLmtleSA9PT0gJ1RhYicgfHwgZS5rZXlDb2RlID09PSA5O1xufVxuXG5mdW5jdGlvbiBkZWxheShmbikge1xuICByZXR1cm4gc2V0VGltZW91dChmbiwgMCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZm9jdXNUcmFwO1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxhc2lkZSByZWY9XCJkcmF3ZXJcIiA6Y2xhc3M9XCJjbGFzc2VzXCIgY2xhc3M9XCJtZGMtZHJhd2VyIG1kYy1kcmF3ZXItLW1vZGFsXCI+XG4gICAgICA8c2xvdCB2LWlmPVwiJHNsb3RzWydoZWFkZXInXVwiIG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+XG4gICAgICA8IS0tIDxkaXYgdi1pZj1cIiRzbG90c1snaGVhZGVyJ11cIiBjbGFzcz1cIm1kYy1kcmF3ZXJfX2hlYWRlclwiPjw8L2Rpdj4gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwibWRjLWRyYXdlcl9fY29udGVudFwiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgICA8L2FzaWRlPlxuICAgIDxkaXYgY2xhc3M9XCJtZGMtZHJhd2VyLXNjcmltXCI+PC9kaXY+XG5cbiAgICA8ZGl2IHYtaWY9XCJ0b29sYmFyU3BhY2VyXCIgY2xhc3M9XCJtZGMtdG9wLWFwcC1iYXItLWZpeGVkLWFkanVzdFwiIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2RyYXdlci9kaXNtaXNzaWJsZS9mb3VuZGF0aW9uJ1xuaW1wb3J0IE1EQ01vZGFsRHJhd2VyRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvZHJhd2VyL21vZGFsL2ZvdW5kYXRpb24nXG5pbXBvcnQgeyBNRENMaXN0IH0gZnJvbSAnQG1hdGVyaWFsL2xpc3QvaW5kZXgnXG5pbXBvcnQgTURDTGlzdEZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2xpc3QvZm91bmRhdGlvbidcbmltcG9ydCBjcmVhdGVGb2N1c1RyYXAgZnJvbSAnZm9jdXMtdHJhcCdcblxuY29uc3QgbWVkaWEgPSBuZXcgY2xhc3Mge1xuICBnZXQgc21hbGwoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX3NtYWxsIHx8ICh0aGlzLl9zbWFsbCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA4MzlweCknKSlcbiAgICApXG4gIH1cblxuICBnZXQgbGFyZ2UoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX2xhcmdlIHx8ICh0aGlzLl9sYXJnZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMjAwcHgpJykpXG4gICAgKVxuICB9XG59KClcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWRyYXdlcicsXG4gIG1vZGVsOiB7XG4gICAgcHJvcDogJ29wZW4nLFxuICAgIGV2ZW50OiAnY2hhbmdlJ1xuICB9LFxuICBwcm9wczoge1xuICAgIG1vZGFsOiBCb29sZWFuLFxuICAgIG9wZW46IEJvb2xlYW4sXG4gICAgdG9vbGJhclNwYWNlcjogQm9vbGVhbixcbiAgICB0b2dnbGVPbjogU3RyaW5nLFxuICAgIHRvZ2dsZU9uU291cmNlOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogZmFsc2VcbiAgICB9LFxuICAgIG9wZW5PbjogU3RyaW5nLFxuICAgIG9wZW5PblNvdXJjZToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgfSxcbiAgICBjbG9zZU9uOiBTdHJpbmcsXG4gICAgY2xvc2VPblNvdXJjZToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBwcm92aWRlKCkge1xuICAgIHJldHVybiB7IG1kY0RyYXdlcjogdGhpcyB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIG9wZW5fOiBmYWxzZSxcbiAgICAgIGNsYXNzZXM6IHt9XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHR5cGUoKSB7fSxcbiAgICBpc01vZGFsKCkge1xuICAgICAgcmV0dXJuIHRoaXMubW9kYWxcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgb3BlbjogJ29uT3Blbl8nXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5kcmF3ZXJfID0gdGhpcy4kcmVmcy5kcmF3ZXJcbiAgICBjb25zdCBhZGFwdGVyID0ge1xuICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRkZWxldGUodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUpLFxuICAgICAgaGFzQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICBlbGVtZW50SGFzQ2xhc3M6IChlbGVtZW50LCBjbGFzc05hbWUpID0+XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICBzYXZlRm9jdXM6ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcmV2aW91c0ZvY3VzXyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgIH0sXG4gICAgICByZXN0b3JlRm9jdXM6ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNGb2N1cyA9IHRoaXMucHJldmlvdXNGb2N1c18gJiYgdGhpcy5wcmV2aW91c0ZvY3VzXy5mb2N1c1xuICAgICAgICBpZiAodGhpcy5kcmF3ZXJfLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpICYmIHByZXZpb3VzRm9jdXMpIHtcbiAgICAgICAgICB0aGlzLnByZXZpb3VzRm9jdXNfLmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZvY3VzQWN0aXZlTmF2aWdhdGlvbkl0ZW06ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlTmF2SXRlbUVsID0gdGhpcy5kcmF3ZXJfLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC4ke01EQ0xpc3RGb3VuZGF0aW9uLmNzc0NsYXNzZXMuTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTU31gXG4gICAgICAgIClcbiAgICAgICAgaWYgKGFjdGl2ZU5hdkl0ZW1FbCkge1xuICAgICAgICAgIGFjdGl2ZU5hdkl0ZW1FbC5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBub3RpZnlDbG9zZTogKCkgPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBmYWxzZSlcbiAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxuICAgICAgfSxcbiAgICAgIG5vdGlmeU9wZW46ICgpID0+IHtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdHJ1ZSlcbiAgICAgICAgdGhpcy4kZW1pdCgnb3BlbicpXG4gICAgICB9LFxuICAgICAgdHJhcEZvY3VzOiAoKSA9PiB0aGlzLmZvY3VzVHJhcF8uYWN0aXZhdGUoKSxcbiAgICAgIHJlbGVhc2VGb2N1czogKCkgPT4gdGhpcy5mb2N1c1RyYXBfLmRlYWN0aXZhdGUoKVxuICAgIH1cblxuICAgIGNvbnN0IHsgRElTTUlTU0lCTEUsIE1PREFMIH0gPSBNRENEaXNtaXNzaWJsZURyYXdlckZvdW5kYXRpb24uY3NzQ2xhc3Nlc1xuICAgIGlmICh0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKERJU01JU1NJQkxFKSkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbihhZGFwdGVyKVxuICAgIH0gZWxzZSBpZiAodGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC5jb250YWlucyhNT0RBTCkpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENNb2RhbERyYXdlckZvdW5kYXRpb24oYWRhcHRlcilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTURDRHJhd2VyOiBGYWlsZWQgdG8gaW5zdGFudGlhdGUgY29tcG9uZW50LiBTdXBwb3J0ZWQgdmFyaWFudHMgYXJlICR7RElTTUlTU0lCTEV9IGFuZCAke01PREFMfS5gXG4gICAgICApXG4gICAgfVxuICAgIHRoaXMuZm91bmRhdGlvbiAmJiB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gICAgdGhpcy5pbml0aWFsU3luY1dpdGhET00oKVxuXG4gICAgaWYgKHRoaXMudG9nZ2xlT24pIHtcbiAgICAgIHRoaXMudG9nZ2xlT25FdmVudFNvdXJjZSA9IHRoaXMudG9nZ2xlT25Tb3VyY2UgfHwgdGhpcy4kcm9vdFxuICAgICAgdGhpcy50b2dnbGVPbkV2ZW50U291cmNlLiRvbih0aGlzLnRvZ2dsZU9uLCB0aGlzLnRvZ2dsZSlcbiAgICB9XG4gICAgaWYgKHRoaXMub3Blbk9uKSB7XG4gICAgICB0aGlzLm9wZW5PbkV2ZW50U291cmNlID0gdGhpcy5vcGVuT25Tb3VyY2UgfHwgdGhpcy4kcm9vdFxuICAgICAgdGhpcy5vcGVuT25FdmVudFNvdXJjZS4kb24odGhpcy5vcGVuT24sIHRoaXMuc2hvdylcbiAgICB9XG4gICAgaWYgKHRoaXMuY2xvc2VPbikge1xuICAgICAgdGhpcy5jbG9zZU9uRXZlbnRTb3VyY2UgPSB0aGlzLmNsb3NlT25Tb3VyY2UgfHwgdGhpcy4kcm9vdFxuICAgICAgdGhpcy5jbG9zZU9uRXZlbnRTb3VyY2UuJG9uKHRoaXMuY2xvc2VPbiwgdGhpcy5jbG9zZSlcbiAgICB9XG4gICAgLy8gbWVkaWEuc21hbGwuYWRkTGlzdGVuZXIodGhpcy5yZWZyZXNoTWVkaWEpXG4gICAgLy8gbWVkaWEubGFyZ2UuYWRkTGlzdGVuZXIodGhpcy5yZWZyZXNoTWVkaWEpXG4gICAgLy8gdGhpcy4kbmV4dFRpY2soKCkgPT4gdGhpcy5yZWZyZXNoTWVkaWEoKSlcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24gJiYgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICAgIHRoaXMuZm91bmRhdGlvbiA9IG51bGxcbiAgICAvLyBtZWRpYS5zbWFsbC5yZW1vdmVMaXN0ZW5lcih0aGlzLnJlZnJlc2hNZWRpYSlcbiAgICAvLyBtZWRpYS5sYXJnZS5yZW1vdmVMaXN0ZW5lcih0aGlzLnJlZnJlc2hNZWRpYSlcblxuICAgIGlmICh0aGlzLnRvZ2dsZU9uRXZlbnRTb3VyY2UpIHtcbiAgICAgIHRoaXMudG9nZ2xlT25FdmVudFNvdXJjZS4kb2ZmKHRoaXMudG9nZ2xlT24sIHRoaXMudG9nZ2xlKVxuICAgIH1cbiAgICBpZiAodGhpcy5vcGVuT25FdmVudFNvdXJjZSkge1xuICAgICAgdGhpcy5vcGVuT25FdmVudFNvdXJjZS4kb2ZmKHRoaXMub3Blbk9uLCB0aGlzLnNob3cpXG4gICAgfVxuICAgIGlmICh0aGlzLmNsb3NlT25FdmVudFNvdXJjZSkge1xuICAgICAgdGhpcy5jbG9zZU9uRXZlbnRTb3VyY2UuJG9mZih0aGlzLmNsb3NlT24sIHRoaXMuY2xvc2UpXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgICAgY29uc3QgeyBNT0RBTCB9ID0gTURDRGlzbWlzc2libGVEcmF3ZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXNcblxuICAgICAgaWYgKHRoaXMuZHJhd2VyXy5jbGFzc0xpc3QuY29udGFpbnMoTU9EQUwpKSB7XG4gICAgICAgIGNvbnN0IHsgU0NSSU1fU0VMRUNUT1IgfSA9IE1EQ0Rpc21pc3NpYmxlRHJhd2VyRm91bmRhdGlvbi5zdHJpbmdzXG4gICAgICAgIHRoaXMuc2NyaW1fID0gdGhpcy5kcmF3ZXJfLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihTQ1JJTV9TRUxFQ1RPUilcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JpbUNsaWNrXyA9ICgpID0+IHRoaXMuZm91bmRhdGlvbi5oYW5kbGVTY3JpbUNsaWNrKClcbiAgICAgICAgdGhpcy5zY3JpbV8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVNjcmltQ2xpY2tfKVxuICAgICAgICB0aGlzLmZvY3VzVHJhcF8gPSBjcmVhdGVGb2N1c1RyYXBJbnN0YW5jZShcbiAgICAgICAgICB0aGlzLmRyYXdlcl8sXG4gICAgICAgICAgdGhpcy5mb2N1c1RyYXBGYWN0b3J5X1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGFuZGxlS2V5ZG93bl8gPSBldnQgPT4gdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUtleWRvd24oZXZ0KVxuICAgICAgdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kXyA9IGV2dCA9PlxuICAgICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlVHJhbnNpdGlvbkVuZChldnQpXG5cbiAgICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25fKVxuICAgICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkVuZF8pXG4gICAgfSxcbiAgICBvbk9wZW5fKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbiAmJiB0aGlzLmZvdW5kYXRpb24ub3BlbigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24gJiYgdGhpcy5mb3VuZGF0aW9uLmNsb3NlKClcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBldmVudClcbiAgICAgIHRoaXMuJHJvb3QuJGVtaXQoJ3ZtYTpsYXlvdXQnKVxuICAgIH0sXG4gICAgc2hvdygpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5vcGVuKClcbiAgICB9LFxuICAgIGNsb3NlKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmNsb3NlKClcbiAgICB9LFxuICAgIHRvZ2dsZSgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5pc09wZW4oKVxuICAgICAgICA/IHRoaXMuZm91bmRhdGlvbi5jbG9zZSgpXG4gICAgICAgIDogdGhpcy5mb3VuZGF0aW9uLm9wZW4oKVxuICAgIH0sXG4gICAgaXNPcGVuKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbi5pc09wZW4oKVxuICAgIH0sXG4gICAgcmVmcmVzaE1lZGlhKCkge1xuICAgICAgLy8gdGhpcy5zbWFsbCA9IG1lZGlhLnNtYWxsLm1hdGNoZXNcbiAgICAgIC8vIHRoaXMubGFyZ2UgPSBtZWRpYS5sYXJnZS5tYXRjaGVzXG4gICAgICAvLyBpZiAodGhpcy5pc1Jlc3BvbnNpdmUpIHtcbiAgICAgIC8vICAgaWYgKHRoaXMubGFyZ2UpIHtcbiAgICAgIC8vICAgICB0aGlzLnNob3coKVxuICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgLy8gICAgIHRoaXMuY2xvc2UoKVxuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvY3VzVHJhcEluc3RhbmNlKFxuICBzdXJmYWNlRWwsXG4gIGZvY3VzVHJhcEZhY3RvcnkgPSBjcmVhdGVGb2N1c1RyYXBcbikge1xuICByZXR1cm4gZm9jdXNUcmFwRmFjdG9yeShzdXJmYWNlRWwsIHtcbiAgICBjbGlja091dHNpZGVEZWFjdGl2YXRlczogdHJ1ZSxcbiAgICBpbml0aWFsRm9jdXM6IGZhbHNlLCAvLyBOYXZpZ2F0aW9uIGRyYXdlciBoYW5kbGVzIGZvY3VzaW5nIG9uIGFjdGl2ZSBuYXYgaXRlbS5cbiAgICBlc2NhcGVEZWFjdGl2YXRlczogZmFsc2UsIC8vIE5hdmlnYXRpb24gZHJhd2VyIGhhbmRsZXMgRVNDLlxuICAgIHJldHVybkZvY3VzT25EZWFjdGl2YXRlOiBmYWxzZSAvLyBOYXZpZ2F0aW9uIGRyYXdlciBoYW5kbGVzIHJlc3RvcmUgZm9jdXMuXG4gIH0pXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1kYy1kcmF3ZXItaGVhZGVyIG1kYy1kcmF3ZXJfX2hlYWRlclwiPlxuICAgICAgPHNsb3QgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWRyYXdlci1oZWFkZXInXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPG5hdiBcbiAgICA6Y2xhc3M9XCJjbGFzc2VzXCIgXG4gICAgY2xhc3M9XCJtZGMtZHJhd2VyLWxpc3QgbWRjLWxpc3RcIj5cbiAgICA8c2xvdC8+XG4gIDwvbmF2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1kcmF3ZXItbGlzdCcsXG4gIHByb3BzOiB7XG4gICAgZGVuc2U6IEJvb2xlYW5cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICAnbWRjLWxpc3QtLWRlbnNlJzogdGhpcy5kZW5zZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCIvKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0b1xuICogZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqL1xudmFyIHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGFwcGx5UGFzc2l2ZSB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3RcbiAqIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgc3VwcG9ydC5cbiAqL1xudmFyIHN1cHBvcnRzUGFzc2l2ZV87XG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAgIC8vIERldGVjdCB2ZXJzaW9ucyBvZiBFZGdlIHdpdGggYnVnZ3kgdmFyKCkgc3VwcG9ydFxuICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTE0OTU0NDgvXG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93T2JqLmRvY3VtZW50O1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAvLyBUaGUgYnVnIGV4aXN0cyBpZiA6OmJlZm9yZSBzdHlsZSBlbmRzIHVwIHByb3BhZ2F0aW5nIHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICAvLyBBZGRpdGlvbmFsbHksIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBudWxsIGluIGlmcmFtZXMgd2l0aCBkaXNwbGF5OiBcIm5vbmVcIiBpbiBGaXJlZm94LFxuICAgIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93T2JqLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgdmFyIGhhc1BzZXVkb1ZhckJ1ZyA9IGNvbXB1dGVkU3R5bGUgIT09IG51bGwgJiYgY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BTdHlsZSA9PT0gJ3NvbGlkJztcbiAgICBub2RlLnJlbW92ZSgpO1xuICAgIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2gpIHtcbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICB2YXIgQ1NTID0gd2luZG93T2JqLkNTUztcbiAgICB2YXIgc3VwcG9ydHNDc3NWYXJzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIH1cbiAgICB2YXIgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSBDU1MgJiYgdHlwZW9mIENTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSBDU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gICAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgICB2YXIgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKENTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgICAgICBDU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpKTtcbiAgICBpZiAoZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyB8fCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMpIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFycyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcnM7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcnM7XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZFxuICogaWYgc28sIHVzZSB0aGVtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiwgZm9yY2VSZWZyZXNoKSB7XG4gICAgaWYgKGdsb2JhbE9iaiA9PT0gdm9pZCAwKSB7IGdsb2JhbE9iaiA9IHdpbmRvdzsgfVxuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxuICAgIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHZhciBpc1N1cHBvcnRlZF8xID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSwge1xuICAgICAgICAgICAgICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgICAgICAgICAgICAgICBpc1N1cHBvcnRlZF8xID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkXzE7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH0gLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1lbXB0eSBjYW5ub3QgdGhyb3cgZXJyb3IgZHVlIHRvIHRlc3RzLiB0c2xpbnQgYWxzbyBkaXNhYmxlcyBjb25zb2xlLmxvZy5cbiAgICAgICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkXzE7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXZ0LCBwYWdlT2Zmc2V0LCBjbGllbnRSZWN0KSB7XG4gICAgaWYgKCFldnQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICB2YXIgeCA9IHBhZ2VPZmZzZXQueCwgeSA9IHBhZ2VPZmZzZXQueTtcbiAgICB2YXIgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgICB2YXIgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuICAgIHZhciBub3JtYWxpemVkWDtcbiAgICB2YXIgbm9ybWFsaXplZFk7XG4gICAgLy8gRGV0ZXJtaW5lIHRvdWNoIHBvaW50IHJlbGF0aXZlIHRvIHRoZSByaXBwbGUgY29udGFpbmVyLlxuICAgIGlmIChldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIHZhciB0b3VjaEV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBtb3VzZUV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IG1vdXNlRXZlbnQucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gbW91c2VFdmVudC5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgcmV0dXJuIHsgeDogbm9ybWFsaXplZFgsIHk6IG5vcm1hbGl6ZWRZIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0IHZhciBjc3NDbGFzc2VzID0ge1xuICAgIC8vIFJpcHBsZSBpcyBhIHNwZWNpYWwgY2FzZSB3aGVyZSB0aGUgXCJyb290XCIgY29tcG9uZW50IGlzIHJlYWxseSBhIFwibWl4aW5cIiBvZiBzb3J0cyxcbiAgICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gICAgLy8gQ1NTIGNsYXNzIHRoYXQgYWxsIG90aGVyIENTUyBjbGFzc2VzIGRlcml2ZSBmcm9tLlxuICAgIEJHX0ZPQ1VTRUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQnLFxuICAgIEZHX0FDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb24nLFxuICAgIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbiAgICBST09UOiAnbWRjLXJpcHBsZS11cGdyYWRlZCcsXG4gICAgVU5CT1VOREVEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkJyxcbn07XG5leHBvcnQgdmFyIHN0cmluZ3MgPSB7XG4gICAgVkFSX0ZHX1NDQUxFOiAnLS1tZGMtcmlwcGxlLWZnLXNjYWxlJyxcbiAgICBWQVJfRkdfU0laRTogJy0tbWRjLXJpcHBsZS1mZy1zaXplJyxcbiAgICBWQVJfRkdfVFJBTlNMQVRFX0VORDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kJyxcbiAgICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gICAgVkFSX0xFRlQ6ICctLW1kYy1yaXBwbGUtbGVmdCcsXG4gICAgVkFSX1RPUDogJy0tbWRjLXJpcHBsZS10b3AnLFxufTtcbmV4cG9ydCB2YXIgbnVtYmVycyA9IHtcbiAgICBERUFDVElWQVRJT05fVElNRU9VVF9NUzogMjI1LFxuICAgIEZHX0RFQUNUSVZBVElPTl9NUzogMTUwLFxuICAgIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gICAgUEFERElORzogMTAsXG4gICAgVEFQX0RFTEFZX01TOiAzMDAsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMgfSBmcm9tICcuL3V0aWwnO1xuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbnZhciBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gW1xuICAgICd0b3VjaHN0YXJ0JywgJ3BvaW50ZXJkb3duJywgJ21vdXNlZG93bicsICdrZXlkb3duJyxcbl07XG4vLyBEZWFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gZG9jdW1lbnRFbGVtZW50IHdoZW4gYSBwb2ludGVyLXJlbGF0ZWQgZG93biBldmVudCBvY2N1cnNcbnZhciBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFtcbiAgICAndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnLFxuXTtcbi8vIHNpbXVsdGFuZW91cyBuZXN0ZWQgYWN0aXZhdGlvbnNcbnZhciBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG52YXIgTURDUmlwcGxlRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENSaXBwbGVGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1JpcHBsZUZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZmdTY2FsZV8gPSAnMCc7XG4gICAgICAgIF90aGlzLmZyYW1lXyA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuICAgICAgICBfdGhpcy5pbml0aWFsU2l6ZV8gPSAwO1xuICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICBfdGhpcy5tYXhSYWRpdXNfID0gMDtcbiAgICAgICAgX3RoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHsgbGVmdDogMCwgdG9wOiAwIH07XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSBfdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLmFjdGl2YXRlXyhlKTsgfTtcbiAgICAgICAgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZGVhY3RpdmF0ZV8oKTsgfTtcbiAgICAgICAgX3RoaXMuZm9jdXNIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUZvY3VzKCk7IH07XG4gICAgICAgIF90aGlzLmJsdXJIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUJsdXIoKTsgfTtcbiAgICAgICAgX3RoaXMucmVzaXplSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5sYXlvdXQoKTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgeDogMCwgeTogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgaXNVbmJvdW5kZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN1cHBvcnRzUHJlc3NSaXBwbGUgPSB0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpO1xuICAgICAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBST09UXzEgPSBfYS5ST09ULCBVTkJPVU5ERURfMSA9IF9hLlVOQk9VTkRFRDtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoUk9PVF8xKTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERURfMSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGVzIG5lZWQgbGF5b3V0IGxvZ2ljIGFwcGxpZWQgaW1tZWRpYXRlbHkgdG8gc2V0IGNvb3JkaW5hdGVzIGZvciBib3RoIHNoYWRlIGFuZCByaXBwbGVcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2YXRpb25UaW1lcl8pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVF8yID0gX2EuUk9PVCwgVU5CT1VOREVEXzIgPSBfYS5VTkJPVU5ERUQ7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFJPT1RfMik7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEXzIpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZUNzc1ZhcnNfKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCk7XG4gICAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGV2dCBPcHRpb25hbCBldmVudCBjb250YWluaW5nIHBvc2l0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB0aGlzLmFjdGl2YXRlXyhldnQpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgICAgIF90aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VW5ib3VuZGVkID0gZnVuY3Rpb24gKHVuYm91bmRlZCkge1xuICAgICAgICB2YXIgVU5CT1VOREVEID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLlVOQk9VTkRFRDtcbiAgICAgICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogV2UgY29tcHV0ZSB0aGlzIHByb3BlcnR5IHNvIHRoYXQgd2UgYXJlIG5vdCBxdWVyeWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2xpZW50XG4gICAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAgICogY2xpZW50LXNpZGUgZmVhdHVyZS1kZXRlY3Rpb24gbWF5IGhhcHBlbiB0b28gZWFybHksIHN1Y2ggYXMgd2hlbiBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyXG4gICAgICogYW5kIHRoZW4gaW5pdGlhbGl6ZWQgYXQgbW91bnQgdGltZSBvbiB0aGUgY2xpZW50LlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnN1cHBvcnRzUHJlc3NSaXBwbGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgICAgICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgICAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHN1cHBvcnRzUHJlc3NSaXBwbGUgUGFzc2VkIGZyb20gaW5pdCB0byBzYXZlIGEgcmVkdW5kYW50IGZ1bmN0aW9uIGNhbGxcbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZWdpc3RlclJvb3RIYW5kbGVyc18gPSBmdW5jdGlvbiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGV2dC50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVtb3ZlQ3NzVmFyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByaXBwbGVTdHJpbmdzID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJpcHBsZVN0cmluZ3MpO1xuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShyaXBwbGVTdHJpbmdzW2tleV0sIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdm9pZCByZWFjdGluZyB0byBmb2xsb3ctb24gZXZlbnRzIGZpcmVkIGJ5IHRvdWNoIGRldmljZSBhZnRlciBhbiBhbHJlYWR5LXByb2Nlc3NlZCB1c2VyIGludGVyYWN0aW9uXG4gICAgICAgIHZhciBwcmV2aW91c0FjdGl2YXRpb25FdmVudCA9IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICAgICAgICB2YXIgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBldnQgIT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c0FjdGl2YXRpb25FdmVudC50eXBlICE9PSBldnQudHlwZTtcbiAgICAgICAgaWYgKGlzU2FtZUludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZXZ0ID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBldnQ7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IGV2dCAhPT0gdW5kZWZpbmVkICYmIChldnQudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZXZ0LnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBldnQudHlwZSA9PT0gJ3BvaW50ZXJkb3duJyk7XG4gICAgICAgIHZhciBoYXNBY3RpdmF0ZWRDaGlsZCA9IGV2dCAhPT0gdW5kZWZpbmVkICYmIGFjdGl2YXRlZFRhcmdldHMubGVuZ3RoID4gMCAmJiBhY3RpdmF0ZWRUYXJnZXRzLnNvbWUoZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gX3RoaXMuYWRhcHRlcl8uY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpOyB9KTtcbiAgICAgICAgaWYgKGhhc0FjdGl2YXRlZENoaWxkKSB7XG4gICAgICAgICAgICAvLyBJbW1lZGlhdGVseSByZXNldCBhY3RpdmF0aW9uIHN0YXRlLCB3aGlsZSBwcmVzZXJ2aW5nIGxvZ2ljIHRoYXQgcHJldmVudHMgdG91Y2ggZm9sbG93LW9uIGV2ZW50c1xuICAgICAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMucHVzaChldnQudGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZXZ0KTtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGV2dCk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IGFycmF5IG9uIG5leHQgZnJhbWUgYWZ0ZXIgdGhlIGN1cnJlbnQgZXZlbnQgaGFzIGhhZCBhIGNoYW5jZSB0byBidWJibGUgdG8gcHJldmVudCBhbmNlc3RvciByaXBwbGVzXG4gICAgICAgICAgICBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG4gICAgICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZVxuICAgICAgICAgICAgICAgICYmIGV2dCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgJiYgKGV2dC5rZXkgPT09ICcgJyB8fCBldnQua2V5Q29kZSA9PT0gMzIpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgICAgICAgICAvLyBhY3RpdmUgc3RhdGVzIGluY29uc2lzdGVudGx5IHdoZW4gdGhleSdyZSBjYWxsZWQgd2l0aGluIGV2ZW50IGhhbmRsaW5nIGNvZGU6XG4gICAgICAgICAgICAgICAgLy8gLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02MzU5NzFcbiAgICAgICAgICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgICAgICAgICAvLyBXZSB0cnkgZmlyc3Qgb3V0c2lkZSByQUYgdG8gc3VwcG9ydCBFZGdlLCB3aGljaCBkb2VzIG5vdCBleGhpYml0IHRoaXMgcHJvYmxlbSwgYnV0IHdpbGwgY3Jhc2ggaWYgYSBDU1NcbiAgICAgICAgICAgICAgICAvLyB2YXJpYWJsZSBpcyBzZXQgd2l0aGluIGEgckFGIGNhbGxiYWNrIGZvciBhIHN1Ym1pdCBidXR0b24gaW50ZXJhY3Rpb24gKCMyMjQxKS5cbiAgICAgICAgICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSBfdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhldnQpO1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gX3RoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgcmV0dXJuIChldnQgIT09IHVuZGVmaW5lZCAmJiBldnQudHlwZSA9PT0gJ2tleWRvd24nKSA/IHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlQWN0aXZlKCkgOiB0cnVlO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYW5pbWF0ZUFjdGl2YXRpb25fID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3MsIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQgPSBfYS5WQVJfRkdfVFJBTlNMQVRFX1NUQVJULCBWQVJfRkdfVFJBTlNMQVRFX0VORCA9IF9hLlZBUl9GR19UUkFOU0xBVEVfRU5EO1xuICAgICAgICB2YXIgX2IgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIEZHX0RFQUNUSVZBVElPTiA9IF9iLkZHX0RFQUNUSVZBVElPTiwgRkdfQUNUSVZBVElPTiA9IF9iLkZHX0FDVElWQVRJT047XG4gICAgICAgIHZhciBERUFDVElWQVRJT05fVElNRU9VVF9NUyA9IE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5ERUFDVElWQVRJT05fVElNRU9VVF9NUztcbiAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgICAgIHZhciB0cmFuc2xhdGVFbmQgPSAnJztcbiAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHZhciBfYyA9IHRoaXMuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpLCBzdGFydFBvaW50ID0gX2Muc3RhcnRQb2ludCwgZW5kUG9pbnQgPSBfYy5lbmRQb2ludDtcbiAgICAgICAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gc3RhcnRQb2ludC54ICsgXCJweCwgXCIgKyBzdGFydFBvaW50LnkgKyBcInB4XCI7XG4gICAgICAgICAgICB0cmFuc2xhdGVFbmQgPSBlbmRQb2ludC54ICsgXCJweCwgXCIgKyBlbmRQb2ludC55ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfRU5ELCB0cmFuc2xhdGVFbmQpO1xuICAgICAgICAvLyBDYW5jZWwgYW55IG9uZ29pbmcgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5pbWF0aW9uc1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAvLyBGb3JjZSBsYXlvdXQgaW4gb3JkZXIgdG8gcmUtdHJpZ2dlciB0aGUgYW5pbWF0aW9uLlxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKTsgfSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLCBhY3RpdmF0aW9uRXZlbnQgPSBfYS5hY3RpdmF0aW9uRXZlbnQsIHdhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IF9hLndhc0FjdGl2YXRlZEJ5UG9pbnRlcjtcbiAgICAgICAgdmFyIHN0YXJ0UG9pbnQ7XG4gICAgICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIpIHtcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoYWN0aXZhdGlvbkV2ZW50LCB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmZyYW1lXy53aWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2VudGVyIHRoZSBlbGVtZW50IGFyb3VuZCB0aGUgc3RhcnQgcG9pbnQuXG4gICAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgZW5kUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiAodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICAgICAgeTogKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IHN0YXJ0UG9pbnQ6IHN0YXJ0UG9pbnQsIGVuZFBvaW50OiBlbmRQb2ludCB9O1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYm90aCB3aGVuIGEgcG9pbnRpbmcgZGV2aWNlIGlzIHJlbGVhc2VkLCBhbmQgd2hlbiB0aGUgYWN0aXZhdGlvbiBhbmltYXRpb24gZW5kcy5cbiAgICAgICAgLy8gVGhlIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gc2hvdWxkIG9ubHkgcnVuIGFmdGVyIGJvdGggb2YgdGhvc2Ugb2NjdXIuXG4gICAgICAgIHZhciBGR19ERUFDVElWQVRJT04gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8sIGhhc0RlYWN0aXZhdGlvblVYUnVuID0gX2EuaGFzRGVhY3RpdmF0aW9uVVhSdW4sIGlzQWN0aXZhdGVkID0gX2EuaXNBY3RpdmF0ZWQ7XG4gICAgICAgIHZhciBhY3RpdmF0aW9uSGFzRW5kZWQgPSBoYXNEZWFjdGl2YXRpb25VWFJ1biB8fCAhaXNBY3RpdmF0ZWQ7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICAgICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBGR19BQ1RJVkFUSU9OID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT047XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlc2V0QWN0aXZhdGlvblN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIC8vIFRvdWNoIGRldmljZXMgbWF5IGZpcmUgYWRkaXRpb25hbCBldmVudHMgZm9yIHRoZSBzYW1lIGludGVyYWN0aW9uIHdpdGhpbiBhIHNob3J0IHRpbWUuXG4gICAgICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHVuZGVmaW5lZDsgfSwgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlRBUF9ERUxBWV9NUyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWFjdGl2YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGF0ZSA9IHRzbGliXzEuX19hc3NpZ24oe30sIGFjdGl2YXRpb25TdGF0ZSk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7IH0pO1xuICAgICAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmhhc0RlYWN0aXZhdGlvblVYUnVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYW5pbWF0ZURlYWN0aXZhdGlvbl8gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHdhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IF9hLndhc0FjdGl2YXRlZEJ5UG9pbnRlciwgd2FzRWxlbWVudE1hZGVBY3RpdmUgPSBfYS53YXNFbGVtZW50TWFkZUFjdGl2ZTtcbiAgICAgICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlciB8fCB3YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0SW50ZXJuYWxfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgICAgICB2YXIgbWF4RGltID0gTWF0aC5tYXgodGhpcy5mcmFtZV8uaGVpZ2h0LCB0aGlzLmZyYW1lXy53aWR0aCk7XG4gICAgICAgIC8vIFN1cmZhY2UgZGlhbWV0ZXIgaXMgdHJlYXRlZCBkaWZmZXJlbnRseSBmb3IgdW5ib3VuZGVkIHZzLiBib3VuZGVkIHJpcHBsZXMuXG4gICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGUgZGlhbWV0ZXIgaXMgY2FsY3VsYXRlZCBzbWFsbGVyIHNpbmNlIHRoZSBzdXJmYWNlIGlzIGV4cGVjdGVkIHRvIGFscmVhZHkgYmUgcGFkZGVkIGFwcHJvcHJpYXRlbHlcbiAgICAgICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAgICAgLy8gc3F1YXJlKS4gQm91bmRlZCByaXBwbGVzLCBvbiB0aGUgb3RoZXIgaGFuZCwgYXJlIGZ1bGx5IGV4cGVjdGVkIHRvIGV4cGFuZCBiZXlvbmQgdGhlIHN1cmZhY2UncyBsb25nZXN0IGRpYW1ldGVyXG4gICAgICAgIC8vIChjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBkaWFnb25hbCBwbHVzIGEgY29uc3RhbnQgcGFkZGluZyksIGFuZCBhcmUgY2xpcHBlZCBhdCB0aGUgc3VyZmFjZSdzIGJvcmRlciB2aWFcbiAgICAgICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgICAgICB2YXIgZ2V0Qm91bmRlZFJhZGl1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KF90aGlzLmZyYW1lXy53aWR0aCwgMikgKyBNYXRoLnBvdyhfdGhpcy5mcmFtZV8uaGVpZ2h0LCAyKSk7XG4gICAgICAgICAgICByZXR1cm4gaHlwb3RlbnVzZSArIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5QQURESU5HO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1heFJhZGl1c18gPSB0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkgPyBtYXhEaW0gOiBnZXRCb3VuZGVkUmFkaXVzKCk7XG4gICAgICAgIC8vIFJpcHBsZSBpcyBzaXplZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiBvZiB0aGUgc3VyZmFjZSwgdGhlbiBzY2FsZXMgdXAgdXNpbmcgYSBDU1Mgc2NhbGUgdHJhbnNmb3JtXG4gICAgICAgIHRoaXMuaW5pdGlhbFNpemVfID0gTWF0aC5mbG9vcihtYXhEaW0gKiBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuSU5JVElBTF9PUklHSU5fU0NBTEUpO1xuICAgICAgICB0aGlzLmZnU2NhbGVfID0gXCJcIiArIHRoaXMubWF4UmFkaXVzXyAvIHRoaXMuaW5pdGlhbFNpemVfO1xuICAgICAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVMYXlvdXRDc3NWYXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzLCBWQVJfRkdfU0laRSA9IF9hLlZBUl9GR19TSVpFLCBWQVJfTEVGVCA9IF9hLlZBUl9MRUZULCBWQVJfVE9QID0gX2EuVkFSX1RPUCwgVkFSX0ZHX1NDQUxFID0gX2EuVkFSX0ZHX1NDQUxFO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TSVpFLCB0aGlzLmluaXRpYWxTaXplXyArIFwicHhcIik7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NDQUxFLCB0aGlzLmZnU2NhbGVfKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgICAgICAgICAgdG9wOiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9MRUZULCB0aGlzLnVuYm91bmRlZENvb3Jkc18ubGVmdCArIFwicHhcIik7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9UT1AsIHRoaXMudW5ib3VuZGVkQ29vcmRzXy50b3AgKyBcInB4XCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDUmlwcGxlRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0NvbXBvbmVudCB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBwb255ZmlsbCB9IGZyb20gJ0BtYXRlcmlhbC9kb20vaW5kZXgnO1xuaW1wb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG52YXIgTURDUmlwcGxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1JpcHBsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENSaXBwbGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE1EQ1JpcHBsZS5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290LCBvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHsgaXNVbmJvdW5kZWQ6IHVuZGVmaW5lZCB9OyB9XG4gICAgICAgIHZhciByaXBwbGUgPSBuZXcgTURDUmlwcGxlKHJvb3QpO1xuICAgICAgICAvLyBPbmx5IG92ZXJyaWRlIHVuYm91bmRlZCBiZWhhdmlvciBpZiBvcHRpb24gaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcbiAgICAgICAgaWYgKG9wdHMuaXNVbmJvdW5kZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmlwcGxlLnVuYm91bmRlZCA9IG9wdHMuaXNVbmJvdW5kZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJpcHBsZTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdXRpbC5zdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpOyB9LFxuICAgICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IH0sXG4gICAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5jb250YWlucyh0YXJnZXQpOyB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfSk7IH0sXG4gICAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBvbnlmaWxsLm1hdGNoZXMoaW5zdGFuY2Uucm9vdF8sICc6YWN0aXZlJyk7IH0sXG4gICAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQm9vbGVhbihpbnN0YW5jZS5kaXNhYmxlZCk7IH0sXG4gICAgICAgICAgICBpc1VuYm91bmRlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQm9vbGVhbihpbnN0YW5jZS51bmJvdW5kZWQpOyB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiBmdW5jdGlvbiAodmFyTmFtZSwgdmFsdWUpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLnN0eWxlLnNldFByb3BlcnR5KHZhck5hbWUsIHZhbHVlKTsgfSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGUucHJvdG90eXBlLCBcInVuYm91bmRlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy51bmJvdW5kZWRfKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodW5ib3VuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVuYm91bmRlZF8gPSBCb29sZWFuKHVuYm91bmRlZCk7XG4gICAgICAgICAgICB0aGlzLnNldFVuYm91bmRlZF8oKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5hY3RpdmF0ZSgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmRlYWN0aXZhdGUoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmxheW91dCgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcm9vdCA9IHRoaXMucm9vdF87XG4gICAgICAgIHRoaXMudW5ib3VuZGVkID0gJ21kY1JpcHBsZUlzVW5ib3VuZGVkJyBpbiByb290LmRhdGFzZXQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbG9zdXJlIENvbXBpbGVyIHRocm93cyBhbiBhY2Nlc3MgY29udHJvbCBlcnJvciB3aGVuIGRpcmVjdGx5IGFjY2Vzc2luZyBhXG4gICAgICogcHJvdGVjdGVkIG9yIHByaXZhdGUgcHJvcGVydHkgaW5zaWRlIGEgZ2V0dGVyL3NldHRlciwgbGlrZSB1bmJvdW5kZWQgYWJvdmUuXG4gICAgICogQnkgYWNjZXNzaW5nIHRoZSBwcm90ZWN0ZWQgcHJvcGVydHkgaW5zaWRlIGEgbWV0aG9kLCB3ZSBzb2x2ZSB0aGF0IHByb2JsZW0uXG4gICAgICogVGhhdCdzIHdoeSB0aGlzIGZ1bmN0aW9uIGV4aXN0cy5cbiAgICAgKi9cbiAgICBNRENSaXBwbGUucHJvdG90eXBlLnNldFVuYm91bmRlZF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VW5ib3VuZGVkKEJvb2xlYW4odGhpcy51bmJvdW5kZWRfKSk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDUmlwcGxlO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ1JpcHBsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuZXhwb3J0IHsgdXRpbCB9O1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3VuZGF0aW9uJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2luZGV4J1xuaW1wb3J0IHsgc3VwcG9ydHNDc3NWYXJpYWJsZXMsIGFwcGx5UGFzc2l2ZSB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvdXRpbCdcbmltcG9ydCB7IG1hdGNoZXMgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJ1xuXG5leHBvcnQgY2xhc3MgUmlwcGxlQmFzZSBleHRlbmRzIE1EQ1JpcHBsZUZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IE1BVENIRVMoKSB7XG4gICAgLyogZ2xvYmFsIEhUTUxFbGVtZW50ICovXG4gICAgcmV0dXJuIChcbiAgICAgIFJpcHBsZUJhc2UuX21hdGNoZXMgfHxcbiAgICAgIChSaXBwbGVCYXNlLl9tYXRjaGVzID0gbWF0Y2hlcyhIVE1MRWxlbWVudC5wcm90b3R5cGUpKVxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cmZhY2VBY3RpdmUocmVmKSB7XG4gICAgcmV0dXJuIHJlZltSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZtLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbFtSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRkZWxldGUodm0uY2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogdGFyZ2V0ID0+IHZtLiRlbC5jb250YWlucyh0YXJnZXQpLFxuICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uc3R5bGVzLCB2YXJOYW1lLCB2YWx1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFJpcHBsZU1peGluID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzKVxuICAgIHRoaXMucmlwcGxlLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxjdXN0b20tZWxlbWVudCBcbiAgICA6dGFnPVwidGFnXCIgXG4gICAgOmNsYXNzZXM9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGVzPVwic3R5bGVzXCIgXG4gICAgY2xhc3M9XCJtZGMtcmlwcGxlXCI+XG4gICAgPHNsb3QgLz5cbiAgPC9jdXN0b20tZWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBDdXN0b21FbGVtZW50TWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlTWl4aW4gfSBmcm9tICcuL21kYy1yaXBwbGUtYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXJpcHBsZScsXG4gIG1peGluczogW0N1c3RvbUVsZW1lbnRNaXhpbiwgUmlwcGxlTWl4aW5dLFxuICBwcm9wczoge1xuICAgIHRhZzogU3RyaW5nXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8Y3VzdG9tLWxpbmtcbiAgICA6bGluaz1cImxpbmtcIlxuICAgIDpjbGFzcz1cIltjbGFzc2VzLCBpdGVtQ2xhc3Nlc11cIlxuICAgIDpzdHlsZT1cInN0eWxlc1wiXG4gICAgY2xhc3M9XCJtZGMtZHJhd2VyLWl0ZW0gbWRjLWxpc3QtaXRlbVwiXG4gICAgdi1vbj1cIm15bGlzdGVuZXJzXCJcbiAgPlxuICAgIDxzcGFuIHYtaWY9XCJoYXNTdGFydERldGFpbFwiIGNsYXNzPVwibWRjLWxpc3QtaXRlbV9fZ3JhcGhpY1wiPlxuICAgICAgPHNsb3QgbmFtZT1cInN0YXJ0LWRldGFpbFwiPlxuICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+e3sgc3RhcnRJY29uIH19PC9pPlxuICAgICAgPC9zbG90PlxuICAgIDwvc3Bhbj5cbiAgICA8c2xvdCAvPlxuICA8L2N1c3RvbS1saW5rPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IERpc3BhdGNoRXZlbnRNaXhpbiwgQ3VzdG9tTGlua01peGluIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IFJpcHBsZUJhc2UgfSBmcm9tICcuLi9yaXBwbGUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1kcmF3ZXItaXRlbScsXG4gIGluamVjdDogWydtZGNEcmF3ZXInXSxcbiAgbWl4aW5zOiBbRGlzcGF0Y2hFdmVudE1peGluLCBDdXN0b21MaW5rTWl4aW5dLFxuICBwcm9wczoge1xuICAgIHN0YXJ0SWNvbjogU3RyaW5nLFxuICAgIG1vZGFsQ2xvc2U6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICBhY3RpdmF0ZWQ6IEJvb2xlYW4sXG4gICAgZXhhY3RBY3RpdmVDbGFzczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ21kYy1saXN0LWl0ZW0tLWFjdGl2YXRlZCdcbiAgICB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBteWxpc3RlbmVycygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRoaXMuJGxpc3RlbmVycyxcbiAgICAgICAgY2xpY2s6IGUgPT4ge1xuICAgICAgICAgIHRoaXMubWRjRHJhd2VyLmlzTW9kYWwgJiYgdGhpcy5tb2RhbENsb3NlICYmIHRoaXMubWRjRHJhd2VyLmNsb3NlKClcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgaXRlbUNsYXNzZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnbWRjLWxpc3QtaXRlbS0tYWN0aXZhdGVkJzogdGhpcy5hY3RpdmF0ZWRcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhc1N0YXJ0RGV0YWlsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhcnRJY29uIHx8IHRoaXMuJHNsb3RzWydzdGFydC1kZXRhaWwnXVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5yaXBwbGUgJiYgdGhpcy5yaXBwbGUuZGVzdHJveSgpXG4gICAgdGhpcy5yaXBwbGUgPSBudWxsXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8aHIgY2xhc3M9XCJtZGMtbGlzdC1kaXZpZGVyXCI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWRyYXdlci1kaXZpZGVyJ1xufVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBtZGNEcmF3ZXIgZnJvbSAnLi9tZGMtZHJhd2VyLnZ1ZSdcbmltcG9ydCBtZGNEcmF3ZXJIZWFkZXIgZnJvbSAnLi9tZGMtZHJhd2VyLWhlYWRlci52dWUnXG5pbXBvcnQgbWRjRHJhd2VyTGlzdCBmcm9tICcuL21kYy1kcmF3ZXItbGlzdC52dWUnXG5pbXBvcnQgbWRjRHJhd2VySXRlbSBmcm9tICcuL21kYy1kcmF3ZXItaXRlbS52dWUnXG5pbXBvcnQgbWRjRHJhd2VyRGl2aWRlciBmcm9tICcuL21kYy1kcmF3ZXItZGl2aWRlci52dWUnXG5cbmV4cG9ydCB7XG4gIG1kY0RyYXdlcixcbiAgbWRjRHJhd2VySGVhZGVyLFxuICBtZGNEcmF3ZXJMaXN0LFxuICBtZGNEcmF3ZXJJdGVtLFxuICBtZGNEcmF3ZXJEaXZpZGVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VQbHVnaW4oe1xuICBtZGNEcmF3ZXIsXG4gIG1kY0RyYXdlckhlYWRlcixcbiAgbWRjRHJhd2VyTGlzdCxcbiAgbWRjRHJhd2VySXRlbSxcbiAgbWRjRHJhd2VyRGl2aWRlclxufSlcbiIsImltcG9ydCAnLi9zdHlsZXMuc2NzcydcbmltcG9ydCB7IGF1dG9Jbml0IH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBwbHVnaW4gZnJvbSAnLi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG5hdXRvSW5pdChwbHVnaW4pXG4iXSwibmFtZXMiOlsiYXV0b0luaXQiLCJwbHVnaW4iLCJfVnVlIiwid2luZG93IiwiVnVlIiwiZ2xvYmFsIiwidXNlIiwiQmFzZVBsdWdpbiIsImNvbXBvbmVudHMiLCJ2ZXJzaW9uIiwiaW5zdGFsbCIsInZtIiwia2V5IiwiY29tcG9uZW50IiwibmFtZSIsIkN1c3RvbUVsZW1lbnQiLCJmdW5jdGlvbmFsIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJwcm9wcyIsImlzIiwidGFnIiwiZGF0YSIsImNoaWxkcmVuIiwiQ3VzdG9tRWxlbWVudE1peGluIiwiQ3VzdG9tTGluayIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwibGluayIsIk9iamVjdCIsImgiLCJlbGVtZW50IiwicGFyZW50IiwiJHJvdXRlciIsIiRyb290IiwiJG9wdGlvbnMiLCJvbiIsImNsaWNrIiwibmF0aXZlT24iLCJDdXN0b21MaW5rTWl4aW4iLCJ0byIsImV4YWN0IiwiQm9vbGVhbiIsImFwcGVuZCIsInJlcGxhY2UiLCJhY3RpdmVDbGFzcyIsImV4YWN0QWN0aXZlQ2xhc3MiLCJjb21wdXRlZCIsIkRpc3BhdGNoRXZlbnRNaXhpbiIsImV2ZW50IiwiQXJyYXkiLCJtZXRob2RzIiwiZGlzcGF0Y2hFdmVudCIsImV2dCIsIiRlbWl0IiwidGFyZ2V0IiwiZXZlbnRUYXJnZXQiLCJhcmdzIiwiZXZlbnRBcmdzIiwibGlzdGVuZXJzIiwiJGxpc3RlbmVycyIsImUiLCJzY29wZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJwIiwiaGFzT3duUHJvcGVydHkiLCJfX2V4dGVuZHMiLCJfXyIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiY3JlYXRlIiwiX19hc3NpZ24iLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY2FsbCIsImFwcGx5IiwiX19yZWFkIiwibyIsIm0iLCJTeW1ib2wiLCJpdGVyYXRvciIsInIiLCJhciIsIm5leHQiLCJkb25lIiwicHVzaCIsInZhbHVlIiwiZXJyb3IiLCJfX3NwcmVhZCIsImNvbmNhdCIsInRzbGliXzEuX19leHRlbmRzIiwidHNsaWJfMS5fX2Fzc2lnbiIsInRzbGliXzEuX19zcHJlYWQiLCJjc3NDbGFzc2VzIiwic3RyaW5ncyIsInBvbnlmaWxsLmNsb3Nlc3QiLCJwb255ZmlsbC5tYXRjaGVzIiwiY2FuZGlkYXRlU2VsZWN0b3JzIiwiY2FuZGlkYXRlU2VsZWN0b3IiLCJqb2luIiwibWF0Y2hlcyIsIkVsZW1lbnQiLCJtc01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsInRhYmJhYmxlIiwiZWwiLCJvcHRpb25zIiwiZWxlbWVudERvY3VtZW50Iiwib3duZXJEb2N1bWVudCIsInJlZ3VsYXJUYWJiYWJsZXMiLCJvcmRlcmVkVGFiYmFibGVzIiwidW50b3VjaGFiaWxpdHlDaGVja2VyIiwiVW50b3VjaGFiaWxpdHlDaGVja2VyIiwiY2FuZGlkYXRlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmNsdWRlQ29udGFpbmVyIiwic2xpY2UiLCJ1bnNoaWZ0IiwiY2FuZGlkYXRlIiwiY2FuZGlkYXRlVGFiaW5kZXgiLCJpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUiLCJnZXRUYWJpbmRleCIsImRvY3VtZW50T3JkZXIiLCJ0YWJJbmRleCIsIm5vZGUiLCJ0YWJiYWJsZU5vZGVzIiwic29ydCIsInNvcnRPcmRlcmVkVGFiYmFibGVzIiwibWFwIiwiYSIsImlzVGFiYmFibGUiLCJpc0ZvY3VzYWJsZSIsImlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUiLCJpc05vblRhYmJhYmxlUmFkaW8iLCJFcnJvciIsImRpc2FibGVkIiwiaXNIaWRkZW5JbnB1dCIsImlzVW50b3VjaGFibGUiLCJmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvciIsInRhYmluZGV4QXR0ciIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiaXNOYU4iLCJpc0NvbnRlbnRFZGl0YWJsZSIsImZpbmQiLCJsaXN0IiwicHJlZGljYXRlIiwiY29udGVudEVkaXRhYmxlIiwiaXNJbnB1dCIsInRhZ05hbWUiLCJpc1JhZGlvIiwiaXNUYWJiYWJsZVJhZGlvIiwiZ2V0Q2hlY2tlZFJhZGlvIiwibm9kZXMiLCJjaGVja2VkIiwicmFkaW9TZXQiLCJkb2MiLCJjYWNoZSIsImhhc0Rpc3BsYXlOb25lIiwibm9kZUNvbXB1dGVkU3R5bGUiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJjYWNoZWQiLCJpdGVtIiwiZGVmYXVsdFZpZXciLCJnZXRDb21wdXRlZFN0eWxlIiwicmVzdWx0IiwiZGlzcGxheSIsInBhcmVudE5vZGUiLCJkb2N1bWVudEVsZW1lbnQiLCJjb21wdXRlZFN0eWxlIiwidmlzaWJpbGl0eSIsIm1vZHVsZSIsImV4dGVuZCIsInNvdXJjZSIsImFjdGl2ZUZvY3VzVHJhcHMiLCJ0cmFwUXVldWUiLCJhY3RpdmF0ZVRyYXAiLCJ0cmFwIiwiYWN0aXZlVHJhcCIsInBhdXNlIiwidHJhcEluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImRlYWN0aXZhdGVUcmFwIiwidW5wYXVzZSIsImZvY3VzVHJhcCIsInVzZXJPcHRpb25zIiwiZG9jdW1lbnQiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiY29uZmlnIiwieHRlbmQiLCJyZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZSIsImVzY2FwZURlYWN0aXZhdGVzIiwic3RhdGUiLCJmaXJzdFRhYmJhYmxlTm9kZSIsImxhc3RUYWJiYWJsZU5vZGUiLCJub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24iLCJtb3N0UmVjZW50bHlGb2N1c2VkTm9kZSIsImFjdGl2ZSIsInBhdXNlZCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImFjdGl2YXRlT3B0aW9ucyIsInVwZGF0ZVRhYmJhYmxlTm9kZXMiLCJhY3RpdmVFbGVtZW50Iiwib25BY3RpdmF0ZSIsImFkZExpc3RlbmVycyIsImRlYWN0aXZhdGVPcHRpb25zIiwicmVtb3ZlTGlzdGVuZXJzIiwib25EZWFjdGl2YXRlIiwidW5kZWZpbmVkIiwicmV0dXJuRm9jdXMiLCJkZWxheSIsInRyeUZvY3VzIiwiZ2V0SW5pdGlhbEZvY3VzTm9kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja0ZvY3VzSW4iLCJjaGVja1BvaW50ZXJEb3duIiwiY2hlY2tDbGljayIsImNoZWNrS2V5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldE5vZGVGb3JPcHRpb24iLCJvcHRpb25OYW1lIiwib3B0aW9uVmFsdWUiLCJjb250YWlucyIsImNsaWNrT3V0c2lkZURlYWN0aXZhdGVzIiwicHJldmVudERlZmF1bHQiLCJEb2N1bWVudCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImlzRXNjYXBlRXZlbnQiLCJpc1RhYkV2ZW50IiwiY2hlY2tUYWIiLCJzaGlmdEtleSIsImZvY3VzIiwiaXNTZWxlY3RhYmxlSW5wdXQiLCJzZWxlY3QiLCJ0b0xvd2VyQ2FzZSIsImtleUNvZGUiLCJmbiIsInNldFRpbWVvdXQiLCJ1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzIiwidXRpbC5hcHBseVBhc3NpdmUiLCJSaXBwbGVCYXNlIiwicmVmIiwiTUFUQ0hFUyIsIl9tYXRjaGVzIiwiSFRNTEVsZW1lbnQiLCJicm93c2VyU3VwcG9ydHNDc3NWYXJzIiwic3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJpc1VuYm91bmRlZCIsImlzU3VyZmFjZUFjdGl2ZSIsIiRlbCIsImlzU3VyZmFjZURpc2FibGVkIiwiYWRkQ2xhc3MiLCJjbGFzc05hbWUiLCIkc2V0IiwiY2xhc3NlcyIsInJlbW92ZUNsYXNzIiwiJGRlbGV0ZSIsImNvbnRhaW5zRXZlbnRUYXJnZXQiLCJyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsImhhbmRsZXIiLCJhcHBseVBhc3NpdmUiLCJkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsImV2dFR5cGUiLCJkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJkZXJlZ2lzdGVyUmVzaXplSGFuZGxlciIsInVwZGF0ZUNzc1ZhcmlhYmxlIiwidmFyTmFtZSIsInN0eWxlcyIsImNvbXB1dGVCb3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRXaW5kb3dQYWdlT2Zmc2V0IiwieCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwiTURDUmlwcGxlRm91bmRhdGlvbiIsIlJpcHBsZU1peGluIiwibW91bnRlZCIsInJpcHBsZSIsImluaXQiLCJiZWZvcmVEZXN0cm95IiwiZGVzdHJveSIsIm1kY0RyYXdlciIsIm1kY0RyYXdlckhlYWRlciIsIm1kY0RyYXdlckxpc3QiLCJtZGNEcmF3ZXJJdGVtIiwibWRjRHJhd2VyRGl2aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUFPLFNBQVNBLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0lBQy9CO0lBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0lBQ0EsTUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0lBQ2pDRCxJQUFBQSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBZDtJQUNELEdBRkQsTUFFTyxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7SUFDeEM7SUFDQUgsSUFBQUEsSUFBSSxHQUFHRyxNQUFNLENBQUNELEdBQWQ7SUFDRDs7SUFDRCxNQUFJRixJQUFKLEVBQVU7SUFDUkEsSUFBQUEsSUFBSSxDQUFDSSxHQUFMLENBQVNMLE1BQVQ7SUFDRDtJQUNGOztJQ1pNLFNBQVNNLFVBQVQsQ0FBb0JDLFVBQXBCLEVBQWdDO0lBQ3JDLFNBQU87SUFDTEMsSUFBQUEsT0FBTyxFQUFFLGFBREo7SUFFTEMsSUFBQUEsT0FBTyxFQUFFLGlCQUFBQyxFQUFFLEVBQUk7SUFDYixXQUFLLElBQUlDLEdBQVQsSUFBZ0JKLFVBQWhCLEVBQTRCO0lBQzFCLFlBQUlLLFNBQVMsR0FBR0wsVUFBVSxDQUFDSSxHQUFELENBQTFCO0lBQ0FELFFBQUFBLEVBQUUsQ0FBQ0UsU0FBSCxDQUFhQSxTQUFTLENBQUNDLElBQXZCLEVBQTZCRCxTQUE3QjtJQUNEO0lBQ0YsS0FQSTtJQVFMTCxJQUFBQSxVQUFVLEVBQVZBO0lBUkssR0FBUDtJQVVEOztJQ1hNLElBQU1PLGFBQWEsR0FBRztJQUMzQkMsRUFBQUEsVUFBVSxFQUFFLElBRGU7SUFFM0JDLEVBQUFBLE1BRjJCLGtCQUVwQkMsYUFGb0IsRUFFTEMsT0FGSyxFQUVJ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
