/**
* @module vue-mdc-adapterdialog 0.19.4-beta
* @exports VueMDCDialog
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^1.0.0-0","material-components-web":"^1.0.0-0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.VueMDCDialog = factory());
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
          element = context.parent.$root.$options.components['RouterLink'];
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
    var VMAUniqueIdMixin = {
      beforeCreate: function beforeCreate() {
        this.vma_uid_ = scope + this._uid;
      }
    };

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
      CLOSING: 'mdc-dialog--closing',
      OPEN: 'mdc-dialog--open',
      OPENING: 'mdc-dialog--opening',
      SCROLLABLE: 'mdc-dialog--scrollable',
      SCROLL_LOCK: 'mdc-dialog-scroll-lock',
      STACKED: 'mdc-dialog--stacked'
    };
    var strings = {
      ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
      BUTTON_SELECTOR: '.mdc-dialog__button',
      CLOSED_EVENT: 'MDCDialog:closed',
      CLOSE_ACTION: 'close',
      CLOSING_EVENT: 'MDCDialog:closing',
      CONTAINER_SELECTOR: '.mdc-dialog__container',
      CONTENT_SELECTOR: '.mdc-dialog__content',
      DEFAULT_BUTTON_SELECTOR: '.mdc-dialog__button--default',
      DESTROY_ACTION: 'destroy',
      OPENED_EVENT: 'MDCDialog:opened',
      OPENING_EVENT: 'MDCDialog:opening',
      SCRIM_SELECTOR: '.mdc-dialog__scrim',
      SUPPRESS_DEFAULT_PRESS_SELECTOR: ['textarea', '.mdc-menu .mdc-list-item'].join(', '),
      SURFACE_SELECTOR: '.mdc-dialog__surface'
    };
    var numbers = {
      DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
      DIALOG_ANIMATION_OPEN_TIME_MS: 150
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

    var MDCDialogFoundation =
    /** @class */
    function (_super) {
      __extends(MDCDialogFoundation, _super);

      function MDCDialogFoundation(adapter) {
        var _this = _super.call(this, _assign({}, MDCDialogFoundation.defaultAdapter, adapter)) || this;

        _this.isOpen_ = false;
        _this.animationFrame_ = 0;
        _this.animationTimer_ = 0;
        _this.layoutFrame_ = 0;
        _this.escapeKeyAction_ = strings.CLOSE_ACTION;
        _this.scrimClickAction_ = strings.CLOSE_ACTION;
        _this.autoStackButtons_ = true;
        _this.areButtonsStacked_ = false;
        return _this;
      }

      Object.defineProperty(MDCDialogFoundation, "cssClasses", {
        get: function get() {
          return cssClasses;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCDialogFoundation, "strings", {
        get: function get() {
          return strings;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCDialogFoundation, "numbers", {
        get: function get() {
          return numbers;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCDialogFoundation, "defaultAdapter", {
        get: function get() {
          return {
            addBodyClass: function addBodyClass() {
              return undefined;
            },
            addClass: function addClass() {
              return undefined;
            },
            areButtonsStacked: function areButtonsStacked() {
              return false;
            },
            clickDefaultButton: function clickDefaultButton() {
              return undefined;
            },
            eventTargetMatches: function eventTargetMatches() {
              return false;
            },
            getActionFromEvent: function getActionFromEvent() {
              return '';
            },
            hasClass: function hasClass() {
              return false;
            },
            isContentScrollable: function isContentScrollable() {
              return false;
            },
            notifyClosed: function notifyClosed() {
              return undefined;
            },
            notifyClosing: function notifyClosing() {
              return undefined;
            },
            notifyOpened: function notifyOpened() {
              return undefined;
            },
            notifyOpening: function notifyOpening() {
              return undefined;
            },
            releaseFocus: function releaseFocus() {
              return undefined;
            },
            removeBodyClass: function removeBodyClass() {
              return undefined;
            },
            removeClass: function removeClass() {
              return undefined;
            },
            reverseButtons: function reverseButtons() {
              return undefined;
            },
            trapFocus: function trapFocus() {
              return undefined;
            }
          };
        },
        enumerable: true,
        configurable: true
      });

      MDCDialogFoundation.prototype.init = function () {
        if (this.adapter_.hasClass(cssClasses.STACKED)) {
          this.setAutoStackButtons(false);
        }
      };

      MDCDialogFoundation.prototype.destroy = function () {
        if (this.isOpen_) {
          this.close(strings.DESTROY_ACTION);
        }

        if (this.animationTimer_) {
          clearTimeout(this.animationTimer_);
          this.handleAnimationTimerEnd_();
        }

        if (this.layoutFrame_) {
          cancelAnimationFrame(this.layoutFrame_);
          this.layoutFrame_ = 0;
        }
      };

      MDCDialogFoundation.prototype.open = function () {
        var _this = this;

        this.isOpen_ = true;
        this.adapter_.notifyOpening();
        this.adapter_.addClass(cssClasses.OPENING); // Wait a frame once display is no longer "none", to establish basis for animation

        this.runNextAnimationFrame_(function () {
          _this.adapter_.addClass(cssClasses.OPEN);

          _this.adapter_.addBodyClass(cssClasses.SCROLL_LOCK);

          _this.layout();

          _this.animationTimer_ = setTimeout(function () {
            _this.handleAnimationTimerEnd_();

            _this.adapter_.trapFocus();

            _this.adapter_.notifyOpened();
          }, numbers.DIALOG_ANIMATION_OPEN_TIME_MS);
        });
      };

      MDCDialogFoundation.prototype.close = function (action) {
        var _this = this;

        if (action === void 0) {
          action = '';
        }

        if (!this.isOpen_) {
          // Avoid redundant close calls (and events), e.g. from keydown on elements that inherently emit click
          return;
        }

        this.isOpen_ = false;
        this.adapter_.notifyClosing(action);
        this.adapter_.addClass(cssClasses.CLOSING);
        this.adapter_.removeClass(cssClasses.OPEN);
        this.adapter_.removeBodyClass(cssClasses.SCROLL_LOCK);
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = 0;
        clearTimeout(this.animationTimer_);
        this.animationTimer_ = setTimeout(function () {
          _this.adapter_.releaseFocus();

          _this.handleAnimationTimerEnd_();

          _this.adapter_.notifyClosed(action);
        }, numbers.DIALOG_ANIMATION_CLOSE_TIME_MS);
      };

      MDCDialogFoundation.prototype.isOpen = function () {
        return this.isOpen_;
      };

      MDCDialogFoundation.prototype.getEscapeKeyAction = function () {
        return this.escapeKeyAction_;
      };

      MDCDialogFoundation.prototype.setEscapeKeyAction = function (action) {
        this.escapeKeyAction_ = action;
      };

      MDCDialogFoundation.prototype.getScrimClickAction = function () {
        return this.scrimClickAction_;
      };

      MDCDialogFoundation.prototype.setScrimClickAction = function (action) {
        this.scrimClickAction_ = action;
      };

      MDCDialogFoundation.prototype.getAutoStackButtons = function () {
        return this.autoStackButtons_;
      };

      MDCDialogFoundation.prototype.setAutoStackButtons = function (autoStack) {
        this.autoStackButtons_ = autoStack;
      };

      MDCDialogFoundation.prototype.layout = function () {
        var _this = this;

        if (this.layoutFrame_) {
          cancelAnimationFrame(this.layoutFrame_);
        }

        this.layoutFrame_ = requestAnimationFrame(function () {
          _this.layoutInternal_();

          _this.layoutFrame_ = 0;
        });
      };

      MDCDialogFoundation.prototype.layoutInternal_ = function () {
        if (this.autoStackButtons_) {
          this.detectStackedButtons_();
        }

        this.detectScrollableContent_();
      };

      MDCDialogFoundation.prototype.handleInteraction = function (evt) {
        var isClick = evt.type === 'click';
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        var isSpace = evt.key === 'Space' || evt.keyCode === 32;
        var isScrim = this.adapter_.eventTargetMatches(evt.target, strings.SCRIM_SELECTOR);
        var isDefault = !this.adapter_.eventTargetMatches(evt.target, strings.SUPPRESS_DEFAULT_PRESS_SELECTOR); // Check for scrim click first since it doesn't require querying ancestors

        if (isClick && isScrim && this.scrimClickAction_ !== '') {
          this.close(this.scrimClickAction_);
        } else if (isClick || isSpace || isEnter) {
          var action = this.adapter_.getActionFromEvent(evt);

          if (action) {
            this.close(action);
          } else if (isEnter && isDefault) {
            this.adapter_.clickDefaultButton();
          }
        }
      };

      MDCDialogFoundation.prototype.handleDocumentKeydown = function (evt) {
        var isEscape = evt.key === 'Escape' || evt.keyCode === 27;

        if (isEscape && this.escapeKeyAction_ !== '') {
          this.close(this.escapeKeyAction_);
        }
      };

      MDCDialogFoundation.prototype.handleAnimationTimerEnd_ = function () {
        this.animationTimer_ = 0;
        this.adapter_.removeClass(cssClasses.OPENING);
        this.adapter_.removeClass(cssClasses.CLOSING);
      };
      /**
       * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
       */


      MDCDialogFoundation.prototype.runNextAnimationFrame_ = function (callback) {
        var _this = this;

        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = requestAnimationFrame(function () {
          _this.animationFrame_ = 0;
          clearTimeout(_this.animationTimer_);
          _this.animationTimer_ = setTimeout(callback, 0);
        });
      };

      MDCDialogFoundation.prototype.detectStackedButtons_ = function () {
        // Remove the class first to let us measure the buttons' natural positions.
        this.adapter_.removeClass(cssClasses.STACKED);
        var areButtonsStacked = this.adapter_.areButtonsStacked();

        if (areButtonsStacked) {
          this.adapter_.addClass(cssClasses.STACKED);
        }

        if (areButtonsStacked !== this.areButtonsStacked_) {
          this.adapter_.reverseButtons();
          this.areButtonsStacked_ = areButtonsStacked;
        }
      };

      MDCDialogFoundation.prototype.detectScrollableContent_ = function () {
        // Remove the class first to let us measure the natural height of the content.
        this.adapter_.removeClass(cssClasses.SCROLLABLE);

        if (this.adapter_.isContentScrollable()) {
          this.adapter_.addClass(cssClasses.SCROLLABLE);
        }
      };

      return MDCDialogFoundation;
    }(MDCFoundation);

    var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
    var candidateSelector = candidateSelectors.join(',');
    var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

    function tabbable(el, options) {
      options = options || {};
      var elementDocument = el.ownerDocument || el;
      var regularTabbables = [];
      var orderedTabbables = [];
      var untouchabilityChecker = new UntouchabilityChecker(elementDocument);
      var candidates = el.querySelectorAll(candidateSelector);

      if (options.includeContainer) {
        if (matches.call(el, candidateSelector)) {
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
      if (matches.call(node, candidateSelector) === false) return false;
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
      if (matches.call(node, focusableCandidateSelector) === false) return false;
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

    var createFocusTrap = /*#__PURE__*/Object.freeze({
        default: focusTrap_1,
        __moduleExports: focusTrap_1
    });

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
    function createFocusTrapInstance(surfaceEl, focusTrapFactory, initialFocusEl) {
      if (focusTrapFactory === void 0) {
        focusTrapFactory = createFocusTrap;
      }

      return focusTrapFactory(surfaceEl, {
        clickOutsideDeactivates: true,
        escapeDeactivates: false,
        initialFocus: initialFocusEl
      });
    }
    function isScrollable(el) {
      return el ? el.scrollHeight > el.offsetHeight : false;
    }
    function areTopsMisaligned(els) {
      var tops = new Set();
      [].forEach.call(els, function (el) {
        return tops.add(el.offsetTop);
      });
      return tops.size > 1;
    }

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
        if (matches$1(el, selector)) {
          return el;
        }

        el = el.parentElement;
      }

      return null;
    }
    function matches$1(element, selector) {
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
      BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
      FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
      FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
      ROOT: 'mdc-ripple-upgraded',
      UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
    };
    var strings$1 = {
      VAR_FG_SCALE: '--mdc-ripple-fg-scale',
      VAR_FG_SIZE: '--mdc-ripple-fg-size',
      VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
      VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
      VAR_LEFT: '--mdc-ripple-left',
      VAR_TOP: '--mdc-ripple-top'
    };
    var numbers$1 = {
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
          return cssClasses$1;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function get() {
          return strings$1;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function get() {
          return numbers$1;
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
          }, numbers$1.FG_DEACTIVATION_MS);
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
            return matches$1(instance.root_, ':active');
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
          return RippleBase._matches || (RippleBase._matches = matches$1(HTMLElement.prototype));
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
    var script = {
      name: 'mdc-ripple',
      mixins: [CustomElementMixin, RippleMixin],
      props: {
        tag: String
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
      

      
      normalizeComponent_1(
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
    const __vue_script__$1 = script$1;

    /* template */
    var __vue_render__$1 = function() {
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
      

      
      var mdcButtonBase = normalizeComponent_1(
        { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
        __vue_inject_styles__$1,
        __vue_script__$1,
        __vue_scope_id__$1,
        __vue_is_functional_template__$1,
        __vue_module_identifier__$1,
        undefined,
        undefined
      );

    var script$2 = {
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
    const __vue_script__$2 = script$2;

    /* template */

      /* style */
      const __vue_inject_styles__$2 = undefined;
      /* scoped */
      const __vue_scope_id__$2 = undefined;
      /* module identifier */
      const __vue_module_identifier__$2 = undefined;
      /* functional template */
      const __vue_is_functional_template__$2 = undefined;
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcButton = normalizeComponent_1(
        {},
        __vue_inject_styles__$2,
        __vue_script__$2,
        __vue_scope_id__$2,
        __vue_is_functional_template__$2,
        __vue_module_identifier__$2,
        undefined,
        undefined
      );

    //
    var strings$2 = MDCDialogFoundation.strings;
    var script$3 = {
      name: 'mdc-dialog',
      components: {
        mdcButton: mdcButton
      },
      mixins: [VMAUniqueIdMixin],
      model: {
        prop: 'open',
        event: 'change'
      },
      props: {
        title: {
          type: String
        },
        accept: {
          type: String,
          default: 'Ok'
        },
        acceptDisabled: Boolean,
        acceptRaised: {
          type: Boolean,
          default: false
        },
        cancel: {
          type: String
        },
        cancelRaised: {
          type: Boolean,
          default: false
        },
        accent: Boolean,
        scrollable: Boolean,
        open: Boolean
      },
      data: function data() {
        return {
          classes: {
            'mdc-theme--dark': this.dark
          },
          styles: {},
          surfaceClasses: {},
          bodyClasses: {
            'mdc-dialog__body--scrollable': this.scrollable
          }
        };
      },
      watch: {
        open: 'onOpen_'
      },
      mounted: function mounted() {
        var _this = this;

        if (this.accept) {
          this.focusTrap = createFocusTrapInstance(this.$refs.container, focusTrap_1);
        }

        this.buttons_ = [].slice.call(this.$el.querySelectorAll(strings$2.BUTTON_SELECTOR));
        this.foundation = new MDCDialogFoundation({
          addClass: function addClass(className) {
            return _this.$set(_this.classes, className, true);
          },
          removeClass: function removeClass(className) {
            return _this.$delete(_this.classes, className);
          },
          hasClass: function hasClass(className) {
            return _this.$el.classList.contains(className);
          },
          addBodyClass: function addBodyClass(className) {
            return document.body.classList.add(className);
          },
          removeBodyClass: function removeBodyClass(className) {
            return document.body.classList.remove(className);
          },
          eventTargetMatches: function eventTargetMatches(target, selector) {
            return matches$1(target, selector);
          },
          trapFocus: function trapFocus() {
            return _this.focusTrap && _this.focusTrap.activate();
          },
          releaseFocus: function releaseFocus() {
            return _this.focusTrap && _this.focusTrap.deactivate();
          },
          isContentScrollable: function isContentScrollable() {
            return !!_this.$refs.content && isScrollable(_this.$refs.content);
          },
          areButtonsStacked: function areButtonsStacked() {
            return areTopsMisaligned(_this.buttons_);
          },
          getActionFromEvent: function getActionFromEvent(event) {
            var element = closest(event.target, "[".concat(strings$2.ACTION_ATTRIBUTE, "]"));
            return element && element.getAttribute(strings$2.ACTION_ATTRIBUTE);
          },
          clickDefaultButton: function clickDefaultButton() {
            if (_this.$refs.defaultButton) {
              _this.$refs.defaultButton.click();
            }
          },
          reverseButtons: function reverseButtons() {
            _this.buttons_.reverse();

            _this.buttons_.forEach(function (button) {
              return button.parentElement.appendChild(button);
            });
          },
          notifyOpening: function notifyOpening() {
            return _this.$emit(strings$2.OPENING_EVENT, {});
          },
          notifyOpened: function notifyOpened() {
            return _this.$emit(strings$2.OPENED_EVENT, {});
          },
          notifyClosing: function notifyClosing(action) {
            _this.$emit('change', false); // console.log(action)


            _this.$emit(strings$2.CLOSING_EVENT, action ? {
              action: action
            } : {});
          },
          notifyClosed: function notifyClosed(action) {
            return _this.$emit(strings$2.CLOSED_EVENT, action ? {
              action: action
            } : {});
          }
        });
        this.foundation.init();
        this.open && this.foundation.open();
      },
      beforeDestroy: function beforeDestroy() {
        this.foundation.destroy();
      },
      methods: {
        onOpen_: function onOpen_(value) {
          if (value) {
            this.foundation.open();
          } else {
            this.foundation.close();
          }
        },
        onClick: function onClick(event) {
          this.foundation.handleInteraction(event);
        },
        onCancel: function onCancel() {
          var _this2 = this;

          if (this.$listeners['validateCancel']) {
            this.$emit('validateCancel', {
              cancel: function cancel() {
                var notify = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                // if notify = false, the dialog will close
                // but the notifyAccept method will not be called
                // so we need to notify listeners the open state
                // is changing.
                if (!notify) {
                  _this2.$emit('change', false);
                }

                _this2.foundation.cancel(notify);
              }
            });
          } else {
            this.foundation.cancel(true);
          }
        },
        onAccept: function onAccept() {
          var _this3 = this;

          if (this.$listeners['validate']) {
            this.$emit('validate', {
              accept: function accept() {
                var notify = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                // if notify = false, the dialog will close
                // but the notifyAccept method will not be called
                // so we need to notify listeners the open state
                // is changing.
                if (!notify) {
                  _this3.$emit('change', false);
                }

                _this3.foundation.accept(notify);
              }
            });
          } else {
            this.foundation.accept(true);
          }
        },
        show: function show() {
          this.foundation.open();
        },
        close: function close() {
          this.foundation.close();
        }
      }
    };

    /* script */
    const __vue_script__$3 = script$3;

    /* template */
    var __vue_render__$2 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        {
          ref: "root",
          staticClass: "mdc-dialog",
          class: _vm.classes,
          style: _vm.styles,
          attrs: {
            "aria-modal": "true",
            "aria-labelledby": "label" + _vm.vma_uid_,
            "aria-describedby": "desc" + _vm.vma_uid_,
            role: "alertdialog"
          },
          on: { click: _vm.onClick, keydown: _vm.onClick }
        },
        [
          _c("div", { ref: "container", staticClass: "mdc-dialog__container" }, [
            _c(
              "div",
              {
                ref: "surface",
                staticClass: "mdc-dialog__surface",
                class: _vm.surfaceClasses
              },
              [
                _vm.title
                  ? _c(
                      "h2",
                      {
                        staticClass: "mdc-dialog__title",
                        attrs: { id: "label" + _vm.vma_uid_ }
                      },
                      [_vm._v(_vm._s(_vm.title))]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    ref: "content",
                    staticClass: "mdc-dialog__content",
                    attrs: { id: "desc" + _vm.vma_uid_ }
                  },
                  [_vm._t("default")],
                  2
                ),
                _vm._v(" "),
                _vm.accept || _vm.cancel
                  ? _c("footer", { staticClass: "mdc-dialog__actions" }, [
                      _vm.cancel
                        ? _c(
                            "button",
                            {
                              staticClass: "mdc-button mdc-dialog__button",
                              attrs: {
                                type: "button",
                                "data-mdc-dialog-action": "no"
                              }
                            },
                            [
                              _vm._v(
                                "\n          " + _vm._s(_vm.cancel) + "\n        "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          ref: "defaultButton",
                          staticClass: "mdc-button mdc-dialog__button ",
                          attrs: {
                            type: "button",
                            disabled: _vm.acceptDisabled,
                            "data-mdc-dialog-action": "yes"
                          }
                        },
                        [_vm._v("\n          " + _vm._s(_vm.accept) + "\n        ")]
                      )
                    ])
                  : _vm._e()
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mdc-dialog__scrim" })
        ]
      )
    };
    var __vue_staticRenderFns__$2 = [];
    __vue_render__$2._withStripped = true;

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
      

      
      var mdcDialog = normalizeComponent_1(
        { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
        __vue_inject_styles__$3,
        __vue_script__$3,
        __vue_scope_id__$3,
        __vue_is_functional_template__$3,
        __vue_module_identifier__$3,
        undefined,
        undefined
      );

    var plugin = BasePlugin({
      mdcDialog: mdcDialog
    });

    autoInit(plugin);

    return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXV0by1pbml0LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Jhc2UtcGx1Z2luLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1lbGVtZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2N1c3RvbS1ldmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tYnV0dG9uLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Rpc3BhdGNoLWV2ZW50LW1peGluLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kaWFsb2cvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kaWFsb2cvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy90YWJiYWJsZS9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZm9jdXMtdHJhcC9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZGlhbG9nL3V0aWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS91dGlsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZG9tL3BvbnlmaWxsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29tcG9uZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLWJhc2UuanMiLCIuLi8uLi9jb21wb25lbnRzL3JpcHBsZS9tZGMtcmlwcGxlLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL21kYy1idXR0b24tYmFzZS52dWUiLCIuLi8uLi9jb21wb25lbnRzL2J1dHRvbi9tZGMtYnV0dG9uLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL21kYy1kaWFsb2cudnVlIiwiLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL2RpYWxvZy9lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXV0b0luaXQocGx1Z2luKSB7XG4gIC8vIEF1dG8taW5zdGFsbFxuICBsZXQgX1Z1ZSA9IG51bGxcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgX1Z1ZSA9IHdpbmRvdy5WdWVcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8qZ2xvYmFsIGdsb2JhbCovXG4gICAgX1Z1ZSA9IGdsb2JhbC5WdWVcbiAgfVxuICBpZiAoX1Z1ZSkge1xuICAgIF9WdWUudXNlKHBsdWdpbilcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIEJhc2VQbHVnaW4oY29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICdfX1ZFUlNJT05fXycsXG4gICAgaW5zdGFsbDogdm0gPT4ge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNba2V5XVxuICAgICAgICB2bS5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHNcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEN1c3RvbUVsZW1lbnQgPSB7XG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHJlbmRlcihjcmVhdGVFbGVtZW50LCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBjb250ZXh0LnByb3BzLmlzIHx8IGNvbnRleHQucHJvcHMudGFnIHx8ICdkaXYnLFxuICAgICAgY29udGV4dC5kYXRhLFxuICAgICAgY29udGV4dC5jaGlsZHJlblxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudE1peGluID0ge1xuICBjb21wb25lbnRzOiB7XG4gICAgQ3VzdG9tRWxlbWVudFxuICB9XG59XG4iLCIvKiBnbG9iYWwgQ3VzdG9tRXZlbnQgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXRDdXN0b21FdmVudChlbCwgZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgbGV0IGV2dFxuICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpXG4gIH1cbiAgZWwuZGlzcGF0Y2hFdmVudChldnQpXG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tQnV0dG9uID0ge1xuICBuYW1lOiAnY3VzdG9tLWJ1dHRvbicsXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgbGluazogT2JqZWN0XG4gIH0sXG4gIHJlbmRlcihoLCBjb250ZXh0KSB7XG4gICAgbGV0IGVsZW1lbnRcbiAgICBsZXQgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQuZGF0YSlcblxuICAgIGlmIChjb250ZXh0LnByb3BzLmxpbmsgJiYgY29udGV4dC5wYXJlbnQuJHJvdXRlcikge1xuICAgICAgLy8gcm91dGVyLWxpbmsgY2FzZVxuICAgICAgZWxlbWVudCA9IGNvbnRleHQucGFyZW50LiRyb290LiRvcHRpb25zLmNvbXBvbmVudHNbJ1JvdXRlckxpbmsnXVxuICAgICAgZGF0YS5wcm9wcyA9IE9iamVjdC5hc3NpZ24oeyB0YWc6IGNvbnRleHQucHJvcHMudGFnIH0sIGNvbnRleHQucHJvcHMubGluaylcbiAgICAgIGRhdGEuYXR0cnMucm9sZSA9ICdidXR0b24nXG4gICAgICBpZiAoZGF0YS5vbi5jbGljaykge1xuICAgICAgICBkYXRhLm5hdGl2ZU9uID0geyBjbGljazogZGF0YS5vbi5jbGljayB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhLmF0dHJzICYmIGRhdGEuYXR0cnMuaHJlZikge1xuICAgICAgLy8gaHJlZiBjYXNlXG4gICAgICBlbGVtZW50ID0gJ2EnXG4gICAgICBkYXRhLmF0dHJzLnJvbGUgPSAnYnV0dG9uJ1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBidXR0b24gZmFsbGJhY2tcbiAgICAgIGVsZW1lbnQgPSAnYnV0dG9uJ1xuICAgIH1cblxuICAgIHJldHVybiBoKGVsZW1lbnQsIGRhdGEsIGNvbnRleHQuY2hpbGRyZW4pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUJ1dHRvbk1peGluID0ge1xuICBwcm9wczoge1xuICAgIGhyZWY6IFN0cmluZyxcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICB0bzogW1N0cmluZywgT2JqZWN0XSxcbiAgICBleGFjdDogQm9vbGVhbixcbiAgICBhcHBlbmQ6IEJvb2xlYW4sXG4gICAgcmVwbGFjZTogQm9vbGVhbixcbiAgICBhY3RpdmVDbGFzczogU3RyaW5nLFxuICAgIGV4YWN0QWN0aXZlQ2xhc3M6IFN0cmluZ1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpbmsoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLnRvICYmIHtcbiAgICAgICAgICB0bzogdGhpcy50byxcbiAgICAgICAgICBleGFjdDogdGhpcy5leGFjdCxcbiAgICAgICAgICBhcHBlbmQ6IHRoaXMuYXBwZW5kLFxuICAgICAgICAgIHJlcGxhY2U6IHRoaXMucmVwbGFjZSxcbiAgICAgICAgICBhY3RpdmVDbGFzczogdGhpcy5hY3RpdmVDbGFzcyxcbiAgICAgICAgICBleGFjdEFjdGl2ZUNsYXNzOiB0aGlzLmV4YWN0QWN0aXZlQ2xhc3NcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUJ1dHRvblxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgRGlzcGF0Y2hFdmVudE1peGluID0ge1xuICBwcm9wczoge1xuICAgIGV2ZW50OiBTdHJpbmcsXG4gICAgJ2V2ZW50LXRhcmdldCc6IE9iamVjdCxcbiAgICAnZXZlbnQtYXJncyc6IEFycmF5XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBkaXNwYXRjaEV2ZW50KGV2dCkge1xuICAgICAgZXZ0ICYmIHRoaXMuJGVtaXQoZXZ0LnR5cGUsIGV2dClcbiAgICAgIGlmICh0aGlzLmV2ZW50KSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmV2ZW50VGFyZ2V0IHx8IHRoaXMuJHJvb3RcbiAgICAgICAgbGV0IGFyZ3MgPSB0aGlzLmV2ZW50QXJncyB8fCBbXVxuICAgICAgICB0YXJnZXQuJGVtaXQodGhpcy5ldmVudCwgLi4uYXJncylcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbGlzdGVuZXJzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGhpcy4kbGlzdGVuZXJzLFxuICAgICAgICBjbGljazogZSA9PiB0aGlzLmRpc3BhdGNoRXZlbnQoZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0IHNjb3BlID1cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigweDEwMDAwMDAwKSkudG9TdHJpbmcoKSArICctJ1xuXG5leHBvcnQgY29uc3QgVk1BVW5pcXVlSWRNaXhpbiA9IHtcbiAgYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMudm1hX3VpZF8gPSBzY29wZSArIHRoaXMuX3VpZFxuICB9XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIE1EQ0ZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIGlmIChhZGFwdGVyID09PSB2b2lkIDApIHsgYWRhcHRlciA9IHt9OyB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgICAgICAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgICAgICAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRpb24uXG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIHJldHVybiBNRENGb3VuZGF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IE1EQ0ZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBDTE9TSU5HOiAnbWRjLWRpYWxvZy0tY2xvc2luZycsXG4gICAgT1BFTjogJ21kYy1kaWFsb2ctLW9wZW4nLFxuICAgIE9QRU5JTkc6ICdtZGMtZGlhbG9nLS1vcGVuaW5nJyxcbiAgICBTQ1JPTExBQkxFOiAnbWRjLWRpYWxvZy0tc2Nyb2xsYWJsZScsXG4gICAgU0NST0xMX0xPQ0s6ICdtZGMtZGlhbG9nLXNjcm9sbC1sb2NrJyxcbiAgICBTVEFDS0VEOiAnbWRjLWRpYWxvZy0tc3RhY2tlZCcsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIEFDVElPTl9BVFRSSUJVVEU6ICdkYXRhLW1kYy1kaWFsb2ctYWN0aW9uJyxcbiAgICBCVVRUT05fU0VMRUNUT1I6ICcubWRjLWRpYWxvZ19fYnV0dG9uJyxcbiAgICBDTE9TRURfRVZFTlQ6ICdNRENEaWFsb2c6Y2xvc2VkJyxcbiAgICBDTE9TRV9BQ1RJT046ICdjbG9zZScsXG4gICAgQ0xPU0lOR19FVkVOVDogJ01EQ0RpYWxvZzpjbG9zaW5nJyxcbiAgICBDT05UQUlORVJfU0VMRUNUT1I6ICcubWRjLWRpYWxvZ19fY29udGFpbmVyJyxcbiAgICBDT05URU5UX1NFTEVDVE9SOiAnLm1kYy1kaWFsb2dfX2NvbnRlbnQnLFxuICAgIERFRkFVTFRfQlVUVE9OX1NFTEVDVE9SOiAnLm1kYy1kaWFsb2dfX2J1dHRvbi0tZGVmYXVsdCcsXG4gICAgREVTVFJPWV9BQ1RJT046ICdkZXN0cm95JyxcbiAgICBPUEVORURfRVZFTlQ6ICdNRENEaWFsb2c6b3BlbmVkJyxcbiAgICBPUEVOSU5HX0VWRU5UOiAnTURDRGlhbG9nOm9wZW5pbmcnLFxuICAgIFNDUklNX1NFTEVDVE9SOiAnLm1kYy1kaWFsb2dfX3NjcmltJyxcbiAgICBTVVBQUkVTU19ERUZBVUxUX1BSRVNTX1NFTEVDVE9SOiBbXG4gICAgICAgICd0ZXh0YXJlYScsXG4gICAgICAgICcubWRjLW1lbnUgLm1kYy1saXN0LWl0ZW0nLFxuICAgIF0uam9pbignLCAnKSxcbiAgICBTVVJGQUNFX1NFTEVDVE9SOiAnLm1kYy1kaWFsb2dfX3N1cmZhY2UnLFxufTtcbmV4cG9ydCB2YXIgbnVtYmVycyA9IHtcbiAgICBESUFMT0dfQU5JTUFUSU9OX0NMT1NFX1RJTUVfTVM6IDc1LFxuICAgIERJQUxPR19BTklNQVRJT05fT1BFTl9USU1FX01TOiAxNTAsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDRGlhbG9nRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENEaWFsb2dGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0RpYWxvZ0ZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENEaWFsb2dGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaXNPcGVuXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25UaW1lcl8gPSAwO1xuICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICBfdGhpcy5lc2NhcGVLZXlBY3Rpb25fID0gc3RyaW5ncy5DTE9TRV9BQ1RJT047XG4gICAgICAgIF90aGlzLnNjcmltQ2xpY2tBY3Rpb25fID0gc3RyaW5ncy5DTE9TRV9BQ1RJT047XG4gICAgICAgIF90aGlzLmF1dG9TdGFja0J1dHRvbnNfID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuYXJlQnV0dG9uc1N0YWNrZWRfID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0RpYWxvZ0ZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENEaWFsb2dGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRGlhbG9nRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0RpYWxvZ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQm9keUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBhcmVCdXR0b25zU3RhY2tlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgY2xpY2tEZWZhdWx0QnV0dG9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZXZlbnRUYXJnZXRNYXRjaGVzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBnZXRBY3Rpb25Gcm9tRXZlbnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcnOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc0NvbnRlbnRTY3JvbGxhYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlDbG9zZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlDbG9zaW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5T3BlbmVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5T3BlbmluZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbGVhc2VGb2N1czogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUJvZHlDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmV2ZXJzZUJ1dHRvbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICB0cmFwRm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuU1RBQ0tFRCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXV0b1N0YWNrQnV0dG9ucyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbl8pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2Uoc3RyaW5ncy5ERVNUUk9ZX0FDVElPTik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uVGltZXJfKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25UaW1lcl8pO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVBbmltYXRpb25UaW1lckVuZF8oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICAgICAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5pc09wZW5fID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlPcGVuaW5nKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOSU5HKTtcbiAgICAgICAgLy8gV2FpdCBhIGZyYW1lIG9uY2UgZGlzcGxheSBpcyBubyBsb25nZXIgXCJub25lXCIsIHRvIGVzdGFibGlzaCBiYXNpcyBmb3IgYW5pbWF0aW9uXG4gICAgICAgIHRoaXMucnVuTmV4dEFuaW1hdGlvbkZyYW1lXyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLk9QRU4pO1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uYWRkQm9keUNsYXNzKGNzc0NsYXNzZXMuU0NST0xMX0xPQ0spO1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0KCk7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVBbmltYXRpb25UaW1lckVuZF8oKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy50cmFwRm9jdXMoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5ub3RpZnlPcGVuZWQoKTtcbiAgICAgICAgICAgIH0sIG51bWJlcnMuRElBTE9HX0FOSU1BVElPTl9PUEVOX1RJTUVfTVMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoYWN0aW9uID09PSB2b2lkIDApIHsgYWN0aW9uID0gJyc7IH1cbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbl8pIHtcbiAgICAgICAgICAgIC8vIEF2b2lkIHJlZHVuZGFudCBjbG9zZSBjYWxscyAoYW5kIGV2ZW50cyksIGUuZy4gZnJvbSBrZXlkb3duIG9uIGVsZW1lbnRzIHRoYXQgaW5oZXJlbnRseSBlbWl0IGNsaWNrXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc09wZW5fID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5Q2xvc2luZyhhY3Rpb24pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQ0xPU0lORyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVCb2R5Q2xhc3MoY3NzQ2xhc3Nlcy5TQ1JPTExfTE9DSyk7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWVfKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25UaW1lcl8pO1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVsZWFzZUZvY3VzKCk7XG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVBbmltYXRpb25UaW1lckVuZF8oKTtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLm5vdGlmeUNsb3NlZChhY3Rpb24pO1xuICAgICAgICB9LCBudW1iZXJzLkRJQUxPR19BTklNQVRJT05fQ0xPU0VfVElNRV9NUyk7XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzT3Blbl87XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRFc2NhcGVLZXlBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVzY2FwZUtleUFjdGlvbl87XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRFc2NhcGVLZXlBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZXNjYXBlS2V5QWN0aW9uXyA9IGFjdGlvbjtcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmdldFNjcmltQ2xpY2tBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjcmltQ2xpY2tBY3Rpb25fO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0U2NyaW1DbGlja0FjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zY3JpbUNsaWNrQWN0aW9uXyA9IGFjdGlvbjtcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmdldEF1dG9TdGFja0J1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dG9TdGFja0J1dHRvbnNfO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0QXV0b1N0YWNrQnV0dG9ucyA9IGZ1bmN0aW9uIChhdXRvU3RhY2spIHtcbiAgICAgICAgdGhpcy5hdXRvU3RhY2tCdXR0b25zXyA9IGF1dG9TdGFjaztcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dEludGVybmFsXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b1N0YWNrQnV0dG9uc18pIHtcbiAgICAgICAgICAgIHRoaXMuZGV0ZWN0U3RhY2tlZEJ1dHRvbnNfKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXRlY3RTY3JvbGxhYmxlQ29udGVudF8oKTtcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUludGVyYWN0aW9uID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgaXNDbGljayA9IGV2dC50eXBlID09PSAnY2xpY2snO1xuICAgICAgICB2YXIgaXNFbnRlciA9IGV2dC5rZXkgPT09ICdFbnRlcicgfHwgZXZ0LmtleUNvZGUgPT09IDEzO1xuICAgICAgICB2YXIgaXNTcGFjZSA9IGV2dC5rZXkgPT09ICdTcGFjZScgfHwgZXZ0LmtleUNvZGUgPT09IDMyO1xuICAgICAgICB2YXIgaXNTY3JpbSA9IHRoaXMuYWRhcHRlcl8uZXZlbnRUYXJnZXRNYXRjaGVzKGV2dC50YXJnZXQsIHN0cmluZ3MuU0NSSU1fU0VMRUNUT1IpO1xuICAgICAgICB2YXIgaXNEZWZhdWx0ID0gIXRoaXMuYWRhcHRlcl8uZXZlbnRUYXJnZXRNYXRjaGVzKGV2dC50YXJnZXQsIHN0cmluZ3MuU1VQUFJFU1NfREVGQVVMVF9QUkVTU19TRUxFQ1RPUik7XG4gICAgICAgIC8vIENoZWNrIGZvciBzY3JpbSBjbGljayBmaXJzdCBzaW5jZSBpdCBkb2Vzbid0IHJlcXVpcmUgcXVlcnlpbmcgYW5jZXN0b3JzXG4gICAgICAgIGlmIChpc0NsaWNrICYmIGlzU2NyaW0gJiYgdGhpcy5zY3JpbUNsaWNrQWN0aW9uXyAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UodGhpcy5zY3JpbUNsaWNrQWN0aW9uXyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNDbGljayB8fCBpc1NwYWNlIHx8IGlzRW50ZXIpIHtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLmFkYXB0ZXJfLmdldEFjdGlvbkZyb21FdmVudChldnQpO1xuICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzRW50ZXIgJiYgaXNEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5jbGlja0RlZmF1bHRCdXR0b24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlRG9jdW1lbnRLZXlkb3duID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgaXNFc2NhcGUgPSBldnQua2V5ID09PSAnRXNjYXBlJyB8fCBldnQua2V5Q29kZSA9PT0gMjc7XG4gICAgICAgIGlmIChpc0VzY2FwZSAmJiB0aGlzLmVzY2FwZUtleUFjdGlvbl8gIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKHRoaXMuZXNjYXBlS2V5QWN0aW9uXyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUFuaW1hdGlvblRpbWVyRW5kXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuT1BFTklORyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5DTE9TSU5HKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJ1bnMgdGhlIGdpdmVuIGxvZ2ljIG9uIHRoZSBuZXh0IGFuaW1hdGlvbiBmcmFtZSwgdXNpbmcgc2V0VGltZW91dCB0byBmYWN0b3IgaW4gRmlyZWZveCByZWZsb3cgYmVoYXZpb3IuXG4gICAgICovXG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUucnVuTmV4dEFuaW1hdGlvbkZyYW1lXyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lXyk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFuaW1hdGlvbkZyYW1lXyA9IDA7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuYW5pbWF0aW9uVGltZXJfKTtcbiAgICAgICAgICAgIF90aGlzLmFuaW1hdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRldGVjdFN0YWNrZWRCdXR0b25zXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjbGFzcyBmaXJzdCB0byBsZXQgdXMgbWVhc3VyZSB0aGUgYnV0dG9ucycgbmF0dXJhbCBwb3NpdGlvbnMuXG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5TVEFDS0VEKTtcbiAgICAgICAgdmFyIGFyZUJ1dHRvbnNTdGFja2VkID0gdGhpcy5hZGFwdGVyXy5hcmVCdXR0b25zU3RhY2tlZCgpO1xuICAgICAgICBpZiAoYXJlQnV0dG9uc1N0YWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5TVEFDS0VEKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJlQnV0dG9uc1N0YWNrZWQgIT09IHRoaXMuYXJlQnV0dG9uc1N0YWNrZWRfKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJldmVyc2VCdXR0b25zKCk7XG4gICAgICAgICAgICB0aGlzLmFyZUJ1dHRvbnNTdGFja2VkXyA9IGFyZUJ1dHRvbnNTdGFja2VkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXRlY3RTY3JvbGxhYmxlQ29udGVudF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgY2xhc3MgZmlyc3QgdG8gbGV0IHVzIG1lYXN1cmUgdGhlIG5hdHVyYWwgaGVpZ2h0IG9mIHRoZSBjb250ZW50LlxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuU0NST0xMQUJMRSk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzQ29udGVudFNjcm9sbGFibGUoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLlNDUk9MTEFCTEUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDRGlhbG9nRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDRGlhbG9nRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0RpYWxvZ0ZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsInZhciBjYW5kaWRhdGVTZWxlY3RvcnMgPSBbXG4gICdpbnB1dCcsXG4gICdzZWxlY3QnLFxuICAndGV4dGFyZWEnLFxuICAnYVtocmVmXScsXG4gICdidXR0b24nLFxuICAnW3RhYmluZGV4XScsXG4gICdhdWRpb1tjb250cm9sc10nLFxuICAndmlkZW9bY29udHJvbHNdJyxcbiAgJ1tjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIl0pJyxcbl07XG52YXIgY2FuZGlkYXRlU2VsZWN0b3IgPSBjYW5kaWRhdGVTZWxlY3RvcnMuam9pbignLCcpO1xuXG52YXIgbWF0Y2hlcyA9IHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJ1xuICA/IGZ1bmN0aW9uICgpIHt9XG4gIDogRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cbmZ1bmN0aW9uIHRhYmJhYmxlKGVsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBlbGVtZW50RG9jdW1lbnQgPSBlbC5vd25lckRvY3VtZW50IHx8IGVsO1xuICB2YXIgcmVndWxhclRhYmJhYmxlcyA9IFtdO1xuICB2YXIgb3JkZXJlZFRhYmJhYmxlcyA9IFtdO1xuXG4gIHZhciB1bnRvdWNoYWJpbGl0eUNoZWNrZXIgPSBuZXcgVW50b3VjaGFiaWxpdHlDaGVja2VyKGVsZW1lbnREb2N1bWVudCk7XG4gIHZhciBjYW5kaWRhdGVzID0gZWwucXVlcnlTZWxlY3RvckFsbChjYW5kaWRhdGVTZWxlY3Rvcik7XG5cbiAgaWYgKG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lcikge1xuICAgIGlmIChtYXRjaGVzLmNhbGwoZWwsIGNhbmRpZGF0ZVNlbGVjdG9yKSkge1xuICAgICAgY2FuZGlkYXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShjYW5kaWRhdGVzKTtcbiAgICAgIGNhbmRpZGF0ZXMudW5zaGlmdChlbCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGksIGNhbmRpZGF0ZSwgY2FuZGlkYXRlVGFiaW5kZXg7XG4gIGZvciAoaSA9IDA7IGkgPCBjYW5kaWRhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2FuZGlkYXRlID0gY2FuZGlkYXRlc1tpXTtcblxuICAgIGlmICghaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKGNhbmRpZGF0ZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKSkgY29udGludWU7XG5cbiAgICBjYW5kaWRhdGVUYWJpbmRleCA9IGdldFRhYmluZGV4KGNhbmRpZGF0ZSk7XG4gICAgaWYgKGNhbmRpZGF0ZVRhYmluZGV4ID09PSAwKSB7XG4gICAgICByZWd1bGFyVGFiYmFibGVzLnB1c2goY2FuZGlkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXJlZFRhYmJhYmxlcy5wdXNoKHtcbiAgICAgICAgZG9jdW1lbnRPcmRlcjogaSxcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZVRhYmluZGV4LFxuICAgICAgICBub2RlOiBjYW5kaWRhdGUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YXIgdGFiYmFibGVOb2RlcyA9IG9yZGVyZWRUYWJiYWJsZXNcbiAgICAuc29ydChzb3J0T3JkZXJlZFRhYmJhYmxlcylcbiAgICAubWFwKGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGEubm9kZSB9KVxuICAgIC5jb25jYXQocmVndWxhclRhYmJhYmxlcyk7XG5cbiAgcmV0dXJuIHRhYmJhYmxlTm9kZXM7XG59XG5cbnRhYmJhYmxlLmlzVGFiYmFibGUgPSBpc1RhYmJhYmxlO1xudGFiYmFibGUuaXNGb2N1c2FibGUgPSBpc0ZvY3VzYWJsZTtcblxuZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcikge1xuICBpZiAoXG4gICAgIWlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKVxuICAgIHx8IGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKVxuICAgIHx8IGdldFRhYmluZGV4KG5vZGUpIDwgMFxuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzVGFiYmFibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKSB7XG4gIGlmICghbm9kZSkgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgY2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcik7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUobm9kZSwgdW50b3VjaGFiaWxpdHlDaGVja2VyKSB7XG4gIHVudG91Y2hhYmlsaXR5Q2hlY2tlciA9IHVudG91Y2hhYmlsaXR5Q2hlY2tlciB8fCBuZXcgVW50b3VjaGFiaWxpdHlDaGVja2VyKG5vZGUub3duZXJEb2N1bWVudCB8fCBub2RlKTtcbiAgaWYgKFxuICAgIG5vZGUuZGlzYWJsZWRcbiAgICB8fCBpc0hpZGRlbklucHV0KG5vZGUpXG4gICAgfHwgdW50b3VjaGFiaWxpdHlDaGVja2VyLmlzVW50b3VjaGFibGUobm9kZSlcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG52YXIgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IgPSBjYW5kaWRhdGVTZWxlY3RvcnMuY29uY2F0KCdpZnJhbWUnKS5qb2luKCcsJyk7XG5mdW5jdGlvbiBpc0ZvY3VzYWJsZShub2RlLCB1bnRvdWNoYWJpbGl0eUNoZWNrZXIpIHtcbiAgaWYgKCFub2RlKSB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCBmb2N1c2FibGVDYW5kaWRhdGVTZWxlY3RvcikgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG5vZGUsIHVudG91Y2hhYmlsaXR5Q2hlY2tlcik7XG59XG5cbmZ1bmN0aW9uIGdldFRhYmluZGV4KG5vZGUpIHtcbiAgdmFyIHRhYmluZGV4QXR0ciA9IHBhcnNlSW50KG5vZGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpLCAxMCk7XG4gIGlmICghaXNOYU4odGFiaW5kZXhBdHRyKSkgcmV0dXJuIHRhYmluZGV4QXR0cjtcbiAgLy8gQnJvd3NlcnMgZG8gbm90IHJldHVybiBgdGFiSW5kZXhgIGNvcnJlY3RseSBmb3IgY29udGVudEVkaXRhYmxlIG5vZGVzO1xuICAvLyBzbyBpZiB0aGV5IGRvbid0IGhhdmUgYSB0YWJpbmRleCBhdHRyaWJ1dGUgc3BlY2lmaWNhbGx5IHNldCwgYXNzdW1lIGl0J3MgMC5cbiAgaWYgKGlzQ29udGVudEVkaXRhYmxlKG5vZGUpKSByZXR1cm4gMDtcbiAgcmV0dXJuIG5vZGUudGFiSW5kZXg7XG59XG5cbmZ1bmN0aW9uIHNvcnRPcmRlcmVkVGFiYmFibGVzKGEsIGIpIHtcbiAgcmV0dXJuIGEudGFiSW5kZXggPT09IGIudGFiSW5kZXggPyBhLmRvY3VtZW50T3JkZXIgLSBiLmRvY3VtZW50T3JkZXIgOiBhLnRhYkluZGV4IC0gYi50YWJJbmRleDtcbn1cblxuLy8gQXJyYXkucHJvdG90eXBlLmZpbmQgbm90IGF2YWlsYWJsZSBpbiBJRS5cbmZ1bmN0aW9uIGZpbmQobGlzdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShsaXN0W2ldKSkgcmV0dXJuIGxpc3RbaV07XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNDb250ZW50RWRpdGFibGUobm9kZSkge1xuICByZXR1cm4gbm9kZS5jb250ZW50RWRpdGFibGUgPT09ICd0cnVlJztcbn1cblxuZnVuY3Rpb24gaXNJbnB1dChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgPT09ICdJTlBVVCc7XG59XG5cbmZ1bmN0aW9uIGlzSGlkZGVuSW5wdXQobm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdoaWRkZW4nO1xufVxuXG5mdW5jdGlvbiBpc1JhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAncmFkaW8nO1xufVxuXG5mdW5jdGlvbiBpc05vblRhYmJhYmxlUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNSYWRpbyhub2RlKSAmJiAhaXNUYWJiYWJsZVJhZGlvKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBnZXRDaGVja2VkUmFkaW8obm9kZXMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChub2Rlc1tpXS5jaGVja2VkKSB7XG4gICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIGlmICghbm9kZS5uYW1lKSByZXR1cm4gdHJ1ZTtcbiAgLy8gVGhpcyB3b24ndCBhY2NvdW50IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHlvdSBoYXZlIHJhZGlvIGdyb3VwcyB3aXRoIHRoZSBzYW1lXG4gIC8vIGluIHNlcGFyYXRlIGZvcm1zIG9uIHRoZSBzYW1lIHBhZ2UuXG4gIHZhciByYWRpb1NldCA9IG5vZGUub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIicgKyBub2RlLm5hbWUgKyAnXCJdJyk7XG4gIHZhciBjaGVja2VkID0gZ2V0Q2hlY2tlZFJhZGlvKHJhZGlvU2V0KTtcbiAgcmV0dXJuICFjaGVja2VkIHx8IGNoZWNrZWQgPT09IG5vZGU7XG59XG5cbi8vIEFuIGVsZW1lbnQgaXMgXCJ1bnRvdWNoYWJsZVwiIGlmICppdCBvciBvbmUgb2YgaXRzIGFuY2VzdG9ycyogaGFzXG4vLyBgdmlzaWJpbGl0eTogaGlkZGVuYCBvciBgZGlzcGxheTogbm9uZWAuXG5mdW5jdGlvbiBVbnRvdWNoYWJpbGl0eUNoZWNrZXIoZWxlbWVudERvY3VtZW50KSB7XG4gIHRoaXMuZG9jID0gZWxlbWVudERvY3VtZW50O1xuICAvLyBOb2RlIGNhY2hlIG11c3QgYmUgcmVmcmVzaGVkIG9uIGV2ZXJ5IGNoZWNrLCBpbiBjYXNlXG4gIC8vIHRoZSBjb250ZW50IG9mIHRoZSBlbGVtZW50IGhhcyBjaGFuZ2VkLiBUaGUgY2FjaGUgY29udGFpbnMgdHVwbGVzXG4gIC8vIG1hcHBpbmcgbm9kZXMgdG8gdGhlaXIgYm9vbGVhbiByZXN1bHQuXG4gIHRoaXMuY2FjaGUgPSBbXTtcbn1cblxuLy8gZ2V0Q29tcHV0ZWRTdHlsZSBhY2N1cmF0ZWx5IHJlZmxlY3RzIGB2aXNpYmlsaXR5OiBoaWRkZW5gIG9mIGFuY2VzdG9yc1xuLy8gYnV0IG5vdCBgZGlzcGxheTogbm9uZWAsIHNvIHdlIG5lZWQgdG8gcmVjdXJzaXZlbHkgY2hlY2sgcGFyZW50cy5cblVudG91Y2hhYmlsaXR5Q2hlY2tlci5wcm90b3R5cGUuaGFzRGlzcGxheU5vbmUgPSBmdW5jdGlvbiBoYXNEaXNwbGF5Tm9uZShub2RlLCBub2RlQ29tcHV0ZWRTdHlsZSkge1xuICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIFNlYXJjaCBmb3IgYSBjYWNoZWQgcmVzdWx0LlxuICAgIHZhciBjYWNoZWQgPSBmaW5kKHRoaXMuY2FjaGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtID09PSBub2RlO1xuICAgIH0pO1xuICAgIGlmIChjYWNoZWQpIHJldHVybiBjYWNoZWRbMV07XG5cbiAgICBub2RlQ29tcHV0ZWRTdHlsZSA9IG5vZGVDb21wdXRlZFN0eWxlIHx8IHRoaXMuZG9jLmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cbiAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICBpZiAobm9kZUNvbXB1dGVkU3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmhhc0Rpc3BsYXlOb25lKG5vZGUucGFyZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jYWNoZS5wdXNoKFtub2RlLCByZXN1bHRdKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblVudG91Y2hhYmlsaXR5Q2hlY2tlci5wcm90b3R5cGUuaXNVbnRvdWNoYWJsZSA9IGZ1bmN0aW9uIGlzVW50b3VjaGFibGUobm9kZSkge1xuICBpZiAobm9kZSA9PT0gdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50KSByZXR1cm4gZmFsc2U7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gdGhpcy5kb2MuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgaWYgKHRoaXMuaGFzRGlzcGxheU5vbmUobm9kZSwgY29tcHV0ZWRTdHlsZSkpIHJldHVybiB0cnVlO1xuICByZXR1cm4gY29tcHV0ZWRTdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0YWJiYWJsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG4iLCJ2YXIgdGFiYmFibGUgPSByZXF1aXJlKCd0YWJiYWJsZScpO1xudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKTtcblxudmFyIGFjdGl2ZUZvY3VzVHJhcHMgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB0cmFwUXVldWUgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmF0ZVRyYXA6IGZ1bmN0aW9uKHRyYXApIHtcbiAgICAgIGlmICh0cmFwUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgYWN0aXZlVHJhcCA9IHRyYXBRdWV1ZVt0cmFwUXVldWUubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChhY3RpdmVUcmFwICE9PSB0cmFwKSB7XG4gICAgICAgICAgYWN0aXZlVHJhcC5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB0cmFwSW5kZXggPSB0cmFwUXVldWUuaW5kZXhPZih0cmFwKTtcbiAgICAgIGlmICh0cmFwSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRyYXBRdWV1ZS5wdXNoKHRyYXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbW92ZSB0aGlzIGV4aXN0aW5nIHRyYXAgdG8gdGhlIGZyb250IG9mIHRoZSBxdWV1ZVxuICAgICAgICB0cmFwUXVldWUuc3BsaWNlKHRyYXBJbmRleCwgMSk7XG4gICAgICAgIHRyYXBRdWV1ZS5wdXNoKHRyYXApO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBkZWFjdGl2YXRlVHJhcDogZnVuY3Rpb24odHJhcCkge1xuICAgICAgdmFyIHRyYXBJbmRleCA9IHRyYXBRdWV1ZS5pbmRleE9mKHRyYXApO1xuICAgICAgaWYgKHRyYXBJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdHJhcFF1ZXVlLnNwbGljZSh0cmFwSW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJhcFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdHJhcFF1ZXVlW3RyYXBRdWV1ZS5sZW5ndGggLSAxXS51bnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSkoKTtcblxuZnVuY3Rpb24gZm9jdXNUcmFwKGVsZW1lbnQsIHVzZXJPcHRpb25zKSB7XG4gIHZhciBkb2MgPSBkb2N1bWVudDtcbiAgdmFyIGNvbnRhaW5lciA9XG4gICAgdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gZG9jLnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIHZhciBjb25maWcgPSB4dGVuZChcbiAgICB7XG4gICAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogdHJ1ZSxcbiAgICAgIGVzY2FwZURlYWN0aXZhdGVzOiB0cnVlXG4gICAgfSxcbiAgICB1c2VyT3B0aW9uc1xuICApO1xuXG4gIHZhciBzdGF0ZSA9IHtcbiAgICBmaXJzdFRhYmJhYmxlTm9kZTogbnVsbCxcbiAgICBsYXN0VGFiYmFibGVOb2RlOiBudWxsLFxuICAgIG5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbjogbnVsbCxcbiAgICBtb3N0UmVjZW50bHlGb2N1c2VkTm9kZTogbnVsbCxcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIHBhdXNlZDogZmFsc2VcbiAgfTtcblxuICB2YXIgdHJhcCA9IHtcbiAgICBhY3RpdmF0ZTogYWN0aXZhdGUsXG4gICAgZGVhY3RpdmF0ZTogZGVhY3RpdmF0ZSxcbiAgICBwYXVzZTogcGF1c2UsXG4gICAgdW5wYXVzZTogdW5wYXVzZVxuICB9O1xuXG4gIHJldHVybiB0cmFwO1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKGFjdGl2YXRlT3B0aW9ucykge1xuICAgIGlmIChzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcblxuICAgIHN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICB2YXIgb25BY3RpdmF0ZSA9XG4gICAgICBhY3RpdmF0ZU9wdGlvbnMgJiYgYWN0aXZhdGVPcHRpb25zLm9uQWN0aXZhdGVcbiAgICAgICAgPyBhY3RpdmF0ZU9wdGlvbnMub25BY3RpdmF0ZVxuICAgICAgICA6IGNvbmZpZy5vbkFjdGl2YXRlO1xuICAgIGlmIChvbkFjdGl2YXRlKSB7XG4gICAgICBvbkFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiBkZWFjdGl2YXRlKGRlYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgIHN0YXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuXG4gICAgYWN0aXZlRm9jdXNUcmFwcy5kZWFjdGl2YXRlVHJhcCh0cmFwKTtcblxuICAgIHZhciBvbkRlYWN0aXZhdGUgPVxuICAgICAgZGVhY3RpdmF0ZU9wdGlvbnMgJiYgZGVhY3RpdmF0ZU9wdGlvbnMub25EZWFjdGl2YXRlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBkZWFjdGl2YXRlT3B0aW9ucy5vbkRlYWN0aXZhdGVcbiAgICAgICAgOiBjb25maWcub25EZWFjdGl2YXRlO1xuICAgIGlmIChvbkRlYWN0aXZhdGUpIHtcbiAgICAgIG9uRGVhY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIHZhciByZXR1cm5Gb2N1cyA9XG4gICAgICBkZWFjdGl2YXRlT3B0aW9ucyAmJiBkZWFjdGl2YXRlT3B0aW9ucy5yZXR1cm5Gb2N1cyAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZGVhY3RpdmF0ZU9wdGlvbnMucmV0dXJuRm9jdXNcbiAgICAgICAgOiBjb25maWcucmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU7XG4gICAgaWYgKHJldHVybkZvY3VzKSB7XG4gICAgICBkZWxheShmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5Rm9jdXMoc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgaWYgKHN0YXRlLnBhdXNlZCB8fCAhc3RhdGUuYWN0aXZlKSByZXR1cm47XG4gICAgc3RhdGUucGF1c2VkID0gdHJ1ZTtcbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVucGF1c2UoKSB7XG4gICAgaWYgKCFzdGF0ZS5wYXVzZWQgfHwgIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgIGFkZExpc3RlbmVycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICAvLyBUaGVyZSBjYW4gYmUgb25seSBvbmUgbGlzdGVuaW5nIGZvY3VzIHRyYXAgYXQgYSB0aW1lXG4gICAgYWN0aXZlRm9jdXNUcmFwcy5hY3RpdmF0ZVRyYXAodHJhcCk7XG5cbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG5cbiAgICAvLyBEZWxheSBlbnN1cmVzIHRoYXQgdGhlIGZvY3VzZWQgZWxlbWVudCBkb2Vzbid0IGNhcHR1cmUgdGhlIGV2ZW50XG4gICAgLy8gdGhhdCBjYXVzZWQgdGhlIGZvY3VzIHRyYXAgYWN0aXZhdGlvbi5cbiAgICBkZWxheShmdW5jdGlvbigpIHtcbiAgICAgIHRyeUZvY3VzKGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBjaGVja0ZvY3VzSW4sIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2ssIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXksIHRydWUpO1xuXG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgY2hlY2tGb2N1c0luLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB0cnVlKTtcblxuICAgIHJldHVybiB0cmFwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Tm9kZUZvck9wdGlvbihvcHRpb25OYW1lKSB7XG4gICAgdmFyIG9wdGlvblZhbHVlID0gY29uZmlnW29wdGlvbk5hbWVdO1xuICAgIHZhciBub2RlID0gb3B0aW9uVmFsdWU7XG4gICAgaWYgKCFvcHRpb25WYWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBub2RlID0gZG9jLnF1ZXJ5U2VsZWN0b3Iob3B0aW9uVmFsdWUpO1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBvcHRpb25OYW1lICsgJ2AgcmVmZXJzIHRvIG5vIGtub3duIG5vZGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbm9kZSA9IG9wdGlvblZhbHVlKCk7XG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgJyArIG9wdGlvbk5hbWUgKyAnYCBkaWQgbm90IHJldHVybiBhIG5vZGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbml0aWFsRm9jdXNOb2RlKCkge1xuICAgIHZhciBub2RlO1xuICAgIGlmIChnZXROb2RlRm9yT3B0aW9uKCdpbml0aWFsRm9jdXMnKSAhPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IGdldE5vZGVGb3JPcHRpb24oJ2luaXRpYWxGb2N1cycpO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGRvYy5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgbm9kZSA9IGRvYy5hY3RpdmVFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlID0gc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUgfHwgZ2V0Tm9kZUZvck9wdGlvbignZmFsbGJhY2tGb2N1cycpO1xuICAgIH1cblxuICAgIGlmICghbm9kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIllvdSBjYW4ndCBoYXZlIGEgZm9jdXMtdHJhcCB3aXRob3V0IGF0IGxlYXN0IG9uZSBmb2N1c2FibGUgZWxlbWVudFwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgLy8gVGhpcyBuZWVkcyB0byBiZSBkb25lIG9uIG1vdXNlZG93biBhbmQgdG91Y2hzdGFydCBpbnN0ZWFkIG9mIGNsaWNrXG4gIC8vIHNvIHRoYXQgaXQgcHJlY2VkZXMgdGhlIGZvY3VzIGV2ZW50LlxuICBmdW5jdGlvbiBjaGVja1BvaW50ZXJEb3duKGUpIHtcbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkgcmV0dXJuO1xuICAgIGlmIChjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMpIHtcbiAgICAgIGRlYWN0aXZhdGUoe1xuICAgICAgICByZXR1cm5Gb2N1czogIXRhYmJhYmxlLmlzRm9jdXNhYmxlKGUudGFyZ2V0KVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICAvLyBJbiBjYXNlIGZvY3VzIGVzY2FwZXMgdGhlIHRyYXAgZm9yIHNvbWUgc3RyYW5nZSByZWFzb24sIHB1bGwgaXQgYmFjayBpbi5cbiAgZnVuY3Rpb24gY2hlY2tGb2N1c0luKGUpIHtcbiAgICAvLyBJbiBGaXJlZm94IHdoZW4geW91IFRhYiBvdXQgb2YgYW4gaWZyYW1lIHRoZSBEb2N1bWVudCBpcyBicmllZmx5IGZvY3VzZWQuXG4gICAgaWYgKGNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkgfHwgZS50YXJnZXQgaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHRyeUZvY3VzKHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlIHx8IGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0tleShlKSB7XG4gICAgaWYgKGNvbmZpZy5lc2NhcGVEZWFjdGl2YXRlcyAhPT0gZmFsc2UgJiYgaXNFc2NhcGVFdmVudChlKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZGVhY3RpdmF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNUYWJFdmVudChlKSkge1xuICAgICAgY2hlY2tUYWIoZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgLy8gSGlqYWNrIFRhYiBldmVudHMgb24gdGhlIGZpcnN0IGFuZCBsYXN0IGZvY3VzYWJsZSBub2RlcyBvZiB0aGUgdHJhcCxcbiAgLy8gaW4gb3JkZXIgdG8gcHJldmVudCBmb2N1cyBmcm9tIGVzY2FwaW5nLiBJZiBpdCBlc2NhcGVzIGZvciBldmVuIGFcbiAgLy8gbW9tZW50IGl0IGNhbiBlbmQgdXAgc2Nyb2xsaW5nIHRoZSBwYWdlIGFuZCBjYXVzaW5nIGNvbmZ1c2lvbiBzbyB3ZVxuICAvLyBraW5kIG9mIG5lZWQgdG8gY2FwdHVyZSB0aGUgYWN0aW9uIGF0IHRoZSBrZXlkb3duIHBoYXNlLlxuICBmdW5jdGlvbiBjaGVja1RhYihlKSB7XG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgIGlmIChlLnNoaWZ0S2V5ICYmIGUudGFyZ2V0ID09PSBzdGF0ZS5maXJzdFRhYmJhYmxlTm9kZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdHJ5Rm9jdXMoc3RhdGUubGFzdFRhYmJhYmxlTm9kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghZS5zaGlmdEtleSAmJiBlLnRhcmdldCA9PT0gc3RhdGUubGFzdFRhYmJhYmxlTm9kZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdHJ5Rm9jdXMoc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQ2xpY2soZSkge1xuICAgIGlmIChjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMpIHJldHVybjtcbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkgcmV0dXJuO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVGFiYmFibGVOb2RlcygpIHtcbiAgICB2YXIgdGFiYmFibGVOb2RlcyA9IHRhYmJhYmxlKGNvbnRhaW5lcik7XG4gICAgc3RhdGUuZmlyc3RUYWJiYWJsZU5vZGUgPSB0YWJiYWJsZU5vZGVzWzBdIHx8IGdldEluaXRpYWxGb2N1c05vZGUoKTtcbiAgICBzdGF0ZS5sYXN0VGFiYmFibGVOb2RlID1cbiAgICAgIHRhYmJhYmxlTm9kZXNbdGFiYmFibGVOb2Rlcy5sZW5ndGggLSAxXSB8fCBnZXRJbml0aWFsRm9jdXNOb2RlKCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cnlGb2N1cyhub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IGRvYy5hY3RpdmVFbGVtZW50KSByZXR1cm47XG4gICAgaWYgKCFub2RlIHx8ICFub2RlLmZvY3VzKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5vZGUuZm9jdXMoKTtcbiAgICBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSA9IG5vZGU7XG4gICAgaWYgKGlzU2VsZWN0YWJsZUlucHV0KG5vZGUpKSB7XG4gICAgICBub2RlLnNlbGVjdCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc1NlbGVjdGFibGVJbnB1dChub2RlKSB7XG4gIHJldHVybiAoXG4gICAgbm9kZS50YWdOYW1lICYmXG4gICAgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcgJiZcbiAgICB0eXBlb2Ygbm9kZS5zZWxlY3QgPT09ICdmdW5jdGlvbidcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNFc2NhcGVFdmVudChlKSB7XG4gIHJldHVybiBlLmtleSA9PT0gJ0VzY2FwZScgfHwgZS5rZXkgPT09ICdFc2MnIHx8IGUua2V5Q29kZSA9PT0gMjc7XG59XG5cbmZ1bmN0aW9uIGlzVGFiRXZlbnQoZSkge1xuICByZXR1cm4gZS5rZXkgPT09ICdUYWInIHx8IGUua2V5Q29kZSA9PT0gOTtcbn1cblxuZnVuY3Rpb24gZGVsYXkoZm4pIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvY3VzVHJhcDtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgY3JlYXRlRm9jdXNUcmFwIGZyb20gJ2ZvY3VzLXRyYXAnO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvY3VzVHJhcEluc3RhbmNlKHN1cmZhY2VFbCwgZm9jdXNUcmFwRmFjdG9yeSwgaW5pdGlhbEZvY3VzRWwpIHtcbiAgICBpZiAoZm9jdXNUcmFwRmFjdG9yeSA9PT0gdm9pZCAwKSB7IGZvY3VzVHJhcEZhY3RvcnkgPSBjcmVhdGVGb2N1c1RyYXA7IH1cbiAgICByZXR1cm4gZm9jdXNUcmFwRmFjdG9yeShzdXJmYWNlRWwsIHtcbiAgICAgICAgY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXM6IHRydWUsXG4gICAgICAgIGVzY2FwZURlYWN0aXZhdGVzOiBmYWxzZSxcbiAgICAgICAgaW5pdGlhbEZvY3VzOiBpbml0aWFsRm9jdXNFbCxcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Njcm9sbGFibGUoZWwpIHtcbiAgICByZXR1cm4gZWwgPyBlbC5zY3JvbGxIZWlnaHQgPiBlbC5vZmZzZXRIZWlnaHQgOiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcmVUb3BzTWlzYWxpZ25lZChlbHMpIHtcbiAgICB2YXIgdG9wcyA9IG5ldyBTZXQoKTtcbiAgICBbXS5mb3JFYWNoLmNhbGwoZWxzLCBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIHRvcHMuYWRkKGVsLm9mZnNldFRvcCk7IH0pO1xuICAgIHJldHVybiB0b3BzLnNpemUgPiAxO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXAiLCIvKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0b1xuICogZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqL1xudmFyIHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGFwcGx5UGFzc2l2ZSB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3RcbiAqIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgc3VwcG9ydC5cbiAqL1xudmFyIHN1cHBvcnRzUGFzc2l2ZV87XG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAgIC8vIERldGVjdCB2ZXJzaW9ucyBvZiBFZGdlIHdpdGggYnVnZ3kgdmFyKCkgc3VwcG9ydFxuICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTE0OTU0NDgvXG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93T2JqLmRvY3VtZW50O1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAvLyBUaGUgYnVnIGV4aXN0cyBpZiA6OmJlZm9yZSBzdHlsZSBlbmRzIHVwIHByb3BhZ2F0aW5nIHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICAvLyBBZGRpdGlvbmFsbHksIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBudWxsIGluIGlmcmFtZXMgd2l0aCBkaXNwbGF5OiBcIm5vbmVcIiBpbiBGaXJlZm94LFxuICAgIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93T2JqLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgdmFyIGhhc1BzZXVkb1ZhckJ1ZyA9IGNvbXB1dGVkU3R5bGUgIT09IG51bGwgJiYgY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BTdHlsZSA9PT0gJ3NvbGlkJztcbiAgICBub2RlLnJlbW92ZSgpO1xuICAgIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2gpIHtcbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICB2YXIgQ1NTID0gd2luZG93T2JqLkNTUztcbiAgICB2YXIgc3VwcG9ydHNDc3NWYXJzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIH1cbiAgICB2YXIgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSBDU1MgJiYgdHlwZW9mIENTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSBDU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gICAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgICB2YXIgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKENTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgICAgICBDU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpKTtcbiAgICBpZiAoZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyB8fCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMpIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFycyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcnM7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcnM7XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZFxuICogaWYgc28sIHVzZSB0aGVtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiwgZm9yY2VSZWZyZXNoKSB7XG4gICAgaWYgKGdsb2JhbE9iaiA9PT0gdm9pZCAwKSB7IGdsb2JhbE9iaiA9IHdpbmRvdzsgfVxuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxuICAgIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHZhciBpc1N1cHBvcnRlZF8xID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSwge1xuICAgICAgICAgICAgICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgICAgICAgICAgICAgICBpc1N1cHBvcnRlZF8xID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkXzE7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH0gLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1lbXB0eSBjYW5ub3QgdGhyb3cgZXJyb3IgZHVlIHRvIHRlc3RzLiB0c2xpbnQgYWxzbyBkaXNhYmxlcyBjb25zb2xlLmxvZy5cbiAgICAgICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkXzE7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXZ0LCBwYWdlT2Zmc2V0LCBjbGllbnRSZWN0KSB7XG4gICAgaWYgKCFldnQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICB2YXIgeCA9IHBhZ2VPZmZzZXQueCwgeSA9IHBhZ2VPZmZzZXQueTtcbiAgICB2YXIgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgICB2YXIgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuICAgIHZhciBub3JtYWxpemVkWDtcbiAgICB2YXIgbm9ybWFsaXplZFk7XG4gICAgLy8gRGV0ZXJtaW5lIHRvdWNoIHBvaW50IHJlbGF0aXZlIHRvIHRoZSByaXBwbGUgY29udGFpbmVyLlxuICAgIGlmIChldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIHZhciB0b3VjaEV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBtb3VzZUV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IG1vdXNlRXZlbnQucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gbW91c2VFdmVudC5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgcmV0dXJuIHsgeDogbm9ybWFsaXplZFgsIHk6IG5vcm1hbGl6ZWRZIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENDb21wb25lbnQocm9vdCwgZm91bmRhdGlvbikge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3RfID0gcm9vdDtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIHRzbGliXzEuX19zcHJlYWQoYXJncykpO1xuICAgICAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgICAgIC8vIHRoaXMucm9vdF8gaXMgZGVmaW5lZCBhbmQgY2FuIGJlIHVzZWQgd2l0aGluIHRoZSBmb3VuZGF0aW9uIGNsYXNzLlxuICAgICAgICB0aGlzLmZvdW5kYXRpb25fID0gZm91bmRhdGlvbiA9PT0gdW5kZWZpbmVkID8gdGhpcy5nZXREZWZhdWx0Rm91bmRhdGlvbigpIDogZm91bmRhdGlvbjtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5pbml0KCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gICAgfVxuICAgIE1EQ0NvbXBvbmVudC5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAgICAgLy8gcmV0dXJucyBhbiBpbnN0YW50aWF0ZWQgY29tcG9uZW50IHdpdGggaXRzIHJvb3Qgc2V0IHRvIHRoYXQgZWxlbWVudC4gQWxzbyBub3RlIHRoYXQgaW4gdGhlIGNhc2VzIG9mXG4gICAgICAgIC8vIHN1YmNsYXNzZXMsIGFuIGV4cGxpY2l0IGZvdW5kYXRpb24gY2xhc3Mgd2lsbCBub3QgaGF2ZSB0byBiZSBwYXNzZWQgaW47IGl0IHdpbGwgc2ltcGx5IGJlIGluaXRpYWxpemVkXG4gICAgICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICAgICAgcmV0dXJuIG5ldyBNRENDb21wb25lbnQocm9vdCwgbmV3IE1EQ0ZvdW5kYXRpb24oe30pKTtcbiAgICB9O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBtZXRob2QgcGFyYW0gb25seSBleGlzdHMgZm9yIHR5cGluZyBwdXJwb3NlczsgaXQgZG9lcyBub3QgbmVlZCB0byBiZSB1bml0IHRlc3RlZCAqL1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBfYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoaXMgdG8gZG8gYW55IGFkZGl0aW9uYWwgc2V0dXAgd29yayB0aGF0IHdvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiBhXG4gICAgICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgICAgIC8vIGluaXRpYWxpemVkLiBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgYmVzaWRlcyByb290IGFuZCBmb3VuZGF0aW9uIHdpbGwgYmUgcGFzc2VkIGluIGhlcmUuXG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCBmb3VuZGF0aW9uIGNsYXNzIGZvciB0aGVcbiAgICAgICAgLy8gY29tcG9uZW50LlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSBnZXREZWZhdWx0Rm91bmRhdGlvbiB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkICcgK1xuICAgICAgICAgICAgJ2ZvdW5kYXRpb24gY2xhc3MnKTtcbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCBpZiB0aGV5IG5lZWQgdG8gcGVyZm9ybSB3b3JrIHRvIHN5bmNocm9uaXplIHdpdGggYSBob3N0IERPTVxuICAgICAgICAvLyBvYmplY3QuIEFuIGV4YW1wbGUgb2YgdGhpcyB3b3VsZCBiZSBhIGZvcm0gY29udHJvbCB3cmFwcGVyIHRoYXQgbmVlZHMgdG8gc3luY2hyb25pemUgaXRzIGludGVybmFsIHN0YXRlXG4gICAgICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgICAgIC8vIHJlYWRzL3dyaXRlcyB0aGF0IHdvdWxkIGNhdXNlIGxheW91dCAvIHBhaW50LCBhcyB0aGlzIGlzIGNhbGxlZCBzeW5jaHJvbm91c2x5IGZyb20gd2l0aGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBtYXkgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJlbGVhc2UgYW55IHJlc291cmNlcyAvIGRlcmVnaXN0ZXIgYW55IGxpc3RlbmVycyB0aGV5IGhhdmVcbiAgICAgICAgLy8gYXR0YWNoZWQuIEFuIGV4YW1wbGUgb2YgdGhpcyBtaWdodCBiZSBkZXJlZ2lzdGVyaW5nIGEgcmVzaXplIGV2ZW50IGZyb20gdGhlIHdpbmRvdyBvYmplY3QuXG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLnVubGlzdGVuID0gZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLCB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgICAqL1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIChldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUpIHtcbiAgICAgICAgaWYgKHNob3VsZEJ1YmJsZSA9PT0gdm9pZCAwKSB7IHNob3VsZEJ1YmJsZSA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBldnQ7XG4gICAgICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlLFxuICAgICAgICAgICAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICAgICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vdF8uZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0NvbXBvbmVudDtcbn0oKSk7XG5leHBvcnQgeyBNRENDb21wb25lbnQgfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENDb21wb25lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBcInBvbnlmaWxsXCIgaXMgYSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgbW9kaWZ5IHRoZSBnbG9iYWwgcHJvdG90eXBlIGNoYWluLlxuICogVGhpcyBtYWtlcyBwb255ZmlsbHMgc2FmZXIgdGhhbiB0cmFkaXRpb25hbCBwb2x5ZmlsbHMsIGVzcGVjaWFsbHkgZm9yIGxpYnJhcmllcyBsaWtlIE1EQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgIH1cbiAgICB2YXIgZWwgPSBlbGVtZW50O1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgdmFyIG5hdGl2ZU1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXNcbiAgICAgICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcjtcbiAgICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbnlmaWxsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgcG9ueWZpbGwgZnJvbSAnLi9wb255ZmlsbCc7XG5leHBvcnQgeyBwb255ZmlsbCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAgIC8vIGdpdmVuIHRoYXQgaXQncyBhbiAndXBncmFkZScgdG8gYW4gZXhpc3RpbmcgY29tcG9uZW50LiBUaGF0IGJlaW5nIHNhaWQgaXQgaXMgdGhlIHJvb3RcbiAgICAvLyBDU1MgY2xhc3MgdGhhdCBhbGwgb3RoZXIgQ1NTIGNsYXNzZXMgZGVyaXZlIGZyb20uXG4gICAgQkdfRk9DVVNFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZCcsXG4gICAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gICAgRkdfREVBQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1kZWFjdGl2YXRpb24nLFxuICAgIFJPT1Q6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkJyxcbiAgICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxufTtcbmV4cG9ydCB2YXIgc3RyaW5ncyA9IHtcbiAgICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICAgIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICAgIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxuICAgIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0JyxcbiAgICBWQVJfTEVGVDogJy0tbWRjLXJpcHBsZS1sZWZ0JyxcbiAgICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG59O1xuZXhwb3J0IHZhciBudW1iZXJzID0ge1xuICAgIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsXG4gICAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsXG4gICAgSU5JVElBTF9PUklHSU5fU0NBTEU6IDAuNixcbiAgICBQQURESU5HOiAxMCxcbiAgICBUQVBfREVMQVlfTVM6IDMwMCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyB9IGZyb20gJy4vdXRpbCc7XG4vLyBBY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIHRoZSByb290IGVsZW1lbnQgb2YgZWFjaCBpbnN0YW5jZSBmb3IgYWN0aXZhdGlvblxudmFyIEFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbXG4gICAgJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nLCAnbW91c2Vkb3duJywgJ2tleWRvd24nLFxuXTtcbi8vIERlYWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiBkb2N1bWVudEVsZW1lbnQgd2hlbiBhIHBvaW50ZXItcmVsYXRlZCBkb3duIGV2ZW50IG9jY3Vyc1xudmFyIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gW1xuICAgICd0b3VjaGVuZCcsICdwb2ludGVydXAnLCAnbW91c2V1cCcsICdjb250ZXh0bWVudScsXG5dO1xuLy8gc2ltdWx0YW5lb3VzIG5lc3RlZCBhY3RpdmF0aW9uc1xudmFyIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcbnZhciBNRENSaXBwbGVGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1JpcHBsZUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDUmlwcGxlRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1JpcHBsZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICBfdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICBfdGhpcy5mZ1NjYWxlXyA9ICcwJztcbiAgICAgICAgX3RoaXMuZnJhbWVfID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XG4gICAgICAgIF90aGlzLmluaXRpYWxTaXplXyA9IDA7XG4gICAgICAgIF90aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgICAgIF90aGlzLm1heFJhZGl1c18gPSAwO1xuICAgICAgICBfdGhpcy51bmJvdW5kZWRDb29yZHNfID0geyBsZWZ0OiAwLCB0b3A6IDAgfTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblN0YXRlXyA9IF90aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSB0cnVlO1xuICAgICAgICAgICAgX3RoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8gPSBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMuYWN0aXZhdGVfKGUpOyB9O1xuICAgICAgICBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5kZWFjdGl2YXRlXygpOyB9O1xuICAgICAgICBfdGhpcy5mb2N1c0hhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlRm9jdXMoKTsgfTtcbiAgICAgICAgX3RoaXMuYmx1ckhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlQmx1cigpOyB9O1xuICAgICAgICBfdGhpcy5yZXNpemVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmxheW91dCgpOyB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB4OiAwLCB5OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBpc1VuYm91bmRlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSk7XG4gICAgICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIFJPT1RfMSA9IF9hLlJPT1QsIFVOQk9VTkRFRF8xID0gX2EuVU5CT1VOREVEO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhST09UXzEpO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRF8xKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZXMgbmVlZCBsYXlvdXQgbG9naWMgYXBwbGllZCBpbW1lZGlhdGVseSB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGJvdGggc2hhZGUgYW5kIHJpcHBsZVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZhdGlvblRpbWVyXykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgICAgICAgICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBST09UXzIgPSBfYS5ST09ULCBVTkJPVU5ERURfMiA9IF9hLlVOQk9VTkRFRDtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoUk9PVF8yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERURfMik7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlQ3NzVmFyc18oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKTtcbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZXZ0IE9wdGlvbmFsIGV2ZW50IGNvbnRhaW5pbmcgcG9zaXRpb24gaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVfKGV2dCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGVfKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRVbmJvdW5kZWQgPSBmdW5jdGlvbiAodW5ib3VuZGVkKSB7XG4gICAgICAgIHZhciBVTkJPVU5ERUQgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuVU5CT1VOREVEO1xuICAgICAgICBpZiAodW5ib3VuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICAgKiB1bnRpbCB0aGUgcG9pbnQgaW4gdGltZSB3aGVyZSB0aGUgZm91bmRhdGlvbiByZXF1ZXN0cyBpdC4gVGhpcyBwcmV2ZW50cyBzY2VuYXJpb3Mgd2hlcmVcbiAgICAgKiBjbGllbnQtc2lkZSBmZWF0dXJlLWRldGVjdGlvbiBtYXkgaGFwcGVuIHRvbyBlYXJseSwgc3VjaCBhcyB3aGVuIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXJcbiAgICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAgICovXG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuc3VwcG9ydHNQcmVzc1JpcHBsZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZhdGlvbkV2ZW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogZmFsc2UsXG4gICAgICAgICAgICBpc0FjdGl2YXRlZDogZmFsc2UsXG4gICAgICAgICAgICBpc1Byb2dyYW1tYXRpYzogZmFsc2UsXG4gICAgICAgICAgICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyA9IGZ1bmN0aW9uIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoZXZ0LnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZW1vdmVDc3NWYXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJpcHBsZVN0cmluZ3MgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocmlwcGxlU3RyaW5ncyk7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ1ZBUl8nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKHJpcHBsZVN0cmluZ3Nba2V5XSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGVfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VEaXNhYmxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF2b2lkIHJlYWN0aW5nIHRvIGZvbGxvdy1vbiBldmVudHMgZmlyZWQgYnkgdG91Y2ggZGV2aWNlIGFmdGVyIGFuIGFscmVhZHktcHJvY2Vzc2VkIHVzZXIgaW50ZXJhY3Rpb25cbiAgICAgICAgdmFyIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgICAgIHZhciBpc1NhbWVJbnRlcmFjdGlvbiA9IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ICYmIGV2dCAhPT0gdW5kZWZpbmVkICYmIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50LnR5cGUgIT09IGV2dC50eXBlO1xuICAgICAgICBpZiAoaXNTYW1lSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPSBldnQgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmFjdGl2YXRpb25FdmVudCA9IGV2dDtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA/IGZhbHNlIDogZXZ0ICE9PSB1bmRlZmluZWQgJiYgKGV2dC50eXBlID09PSAnbW91c2Vkb3duJyB8fCBldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGV2dC50eXBlID09PSAncG9pbnRlcmRvd24nKTtcbiAgICAgICAgdmFyIGhhc0FjdGl2YXRlZENoaWxkID0gZXZ0ICE9PSB1bmRlZmluZWQgJiYgYWN0aXZhdGVkVGFyZ2V0cy5sZW5ndGggPiAwICYmIGFjdGl2YXRlZFRhcmdldHMuc29tZShmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiBfdGhpcy5hZGFwdGVyXy5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCk7IH0pO1xuICAgICAgICBpZiAoaGFzQWN0aXZhdGVkQ2hpbGQpIHtcbiAgICAgICAgICAgIC8vIEltbWVkaWF0ZWx5IHJlc2V0IGFjdGl2YXRpb24gc3RhdGUsIHdoaWxlIHByZXNlcnZpbmcgbG9naWMgdGhhdCBwcmV2ZW50cyB0b3VjaCBmb2xsb3ctb24gZXZlbnRzXG4gICAgICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKGV2dC50YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhldnQpO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZXZ0KTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUmVzZXQgYXJyYXkgb24gbmV4dCBmcmFtZSBhZnRlciB0aGUgY3VycmVudCBldmVudCBoYXMgaGFkIGEgY2hhbmNlIHRvIGJ1YmJsZSB0byBwcmV2ZW50IGFuY2VzdG9yIHJpcHBsZXNcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcbiAgICAgICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlXG4gICAgICAgICAgICAgICAgJiYgZXZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAmJiAoZXZ0LmtleSA9PT0gJyAnIHx8IGV2dC5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzcGFjZSB3YXMgcHJlc3NlZCwgdHJ5IGFnYWluIHdpdGhpbiBhbiByQUYgY2FsbCB0byBkZXRlY3QgOmFjdGl2ZSwgYmVjYXVzZSBkaWZmZXJlbnQgVUFzIHJlcG9ydFxuICAgICAgICAgICAgICAgIC8vIGFjdGl2ZSBzdGF0ZXMgaW5jb25zaXN0ZW50bHkgd2hlbiB0aGV5J3JlIGNhbGxlZCB3aXRoaW4gZXZlbnQgaGFuZGxpbmcgY29kZTpcbiAgICAgICAgICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAgICAgICAgIC8vIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTI5Mzc0MVxuICAgICAgICAgICAgICAgIC8vIFdlIHRyeSBmaXJzdCBvdXRzaWRlIHJBRiB0byBzdXBwb3J0IEVkZ2UsIHdoaWNoIGRvZXMgbm90IGV4aGliaXQgdGhpcyBwcm9ibGVtLCBidXQgd2lsbCBjcmFzaCBpZiBhIENTU1xuICAgICAgICAgICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICAgICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IF90aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGV2dCk7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IGFjdGl2YXRpb24gc3RhdGUgaW1tZWRpYXRlbHkgaWYgZWxlbWVudCB3YXMgbm90IG1hZGUgYWN0aXZlLlxuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSBfdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICByZXR1cm4gKGV2dCAhPT0gdW5kZWZpbmVkICYmIGV2dC50eXBlID09PSAna2V5ZG93bicpID8gdGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VBY3RpdmUoKSA6IHRydWU7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hbmltYXRlQWN0aXZhdGlvbl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncywgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCA9IF9hLlZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIFZBUl9GR19UUkFOU0xBVEVfRU5EID0gX2EuVkFSX0ZHX1RSQU5TTEFURV9FTkQ7XG4gICAgICAgIHZhciBfYiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgRkdfREVBQ1RJVkFUSU9OID0gX2IuRkdfREVBQ1RJVkFUSU9OLCBGR19BQ1RJVkFUSU9OID0gX2IuRkdfQUNUSVZBVElPTjtcbiAgICAgICAgdmFyIERFQUNUSVZBVElPTl9USU1FT1VUX01TID0gTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLkRFQUNUSVZBVElPTl9USU1FT1VUX01TO1xuICAgICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICB2YXIgdHJhbnNsYXRlU3RhcnQgPSAnJztcbiAgICAgICAgdmFyIHRyYW5zbGF0ZUVuZCA9ICcnO1xuICAgICAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdmFyIF9jID0gdGhpcy5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCksIHN0YXJ0UG9pbnQgPSBfYy5zdGFydFBvaW50LCBlbmRQb2ludCA9IF9jLmVuZFBvaW50O1xuICAgICAgICAgICAgdHJhbnNsYXRlU3RhcnQgPSBzdGFydFBvaW50LnggKyBcInB4LCBcIiArIHN0YXJ0UG9pbnQueSArIFwicHhcIjtcbiAgICAgICAgICAgIHRyYW5zbGF0ZUVuZCA9IGVuZFBvaW50LnggKyBcInB4LCBcIiArIGVuZFBvaW50LnkgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCB0cmFuc2xhdGVTdGFydCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgICAgIC8vIENhbmNlbCBhbnkgb25nb2luZyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBhbmltYXRpb25zXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgIC8vIEZvcmNlIGxheW91dCBpbiBvcmRlciB0byByZS10cmlnZ2VyIHRoZSBhbmltYXRpb24uXG4gICAgICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXygpOyB9LCBERUFDVElWQVRJT05fVElNRU9VVF9NUyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8sIGFjdGl2YXRpb25FdmVudCA9IF9hLmFjdGl2YXRpb25FdmVudCwgd2FzQWN0aXZhdGVkQnlQb2ludGVyID0gX2Eud2FzQWN0aXZhdGVkQnlQb2ludGVyO1xuICAgICAgICB2YXIgc3RhcnRQb2ludDtcbiAgICAgICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhhY3RpdmF0aW9uRXZlbnQsIHRoaXMuYWRhcHRlcl8uZ2V0V2luZG93UGFnZU9mZnNldCgpLCB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgICAgICAgICB5OiB0aGlzLmZyYW1lXy5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDZW50ZXIgdGhlIGVsZW1lbnQgYXJvdW5kIHRoZSBzdGFydCBwb2ludC5cbiAgICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IHN0YXJ0UG9pbnQueCAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICAgICAgeTogc3RhcnRQb2ludC55IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgIH07XG4gICAgICAgIHZhciBlbmRQb2ludCA9IHtcbiAgICAgICAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgc3RhcnRQb2ludDogc3RhcnRQb2ludCwgZW5kUG9pbnQ6IGVuZFBvaW50IH07XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgICAgICAvLyBUaGUgZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBzaG91bGQgb25seSBydW4gYWZ0ZXIgYm90aCBvZiB0aG9zZSBvY2N1ci5cbiAgICAgICAgdmFyIEZHX0RFQUNUSVZBVElPTiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT047XG4gICAgICAgIHZhciBfYSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXywgaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSBfYS5oYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWQgPSBfYS5pc0FjdGl2YXRlZDtcbiAgICAgICAgdmFyIGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25IYXNFbmRlZCAmJiB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8pIHtcbiAgICAgICAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9LCBudW1iZXJzLkZHX0RFQUNUSVZBVElPTl9NUyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIEZHX0FDVElWQVRJT04gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTjtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVzZXRBY3RpdmF0aW9uU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXy5hY3RpdmF0aW9uRXZlbnQ7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgLy8gVG91Y2ggZGV2aWNlcyBtYXkgZmlyZSBhZGRpdGlvbmFsIGV2ZW50cyBmb3IgdGhlIHNhbWUgaW50ZXJhY3Rpb24gd2l0aGluIGEgc2hvcnQgdGltZS5cbiAgICAgICAgLy8gU3RvcmUgdGhlIHByZXZpb3VzIGV2ZW50IHVudGlsIGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhhdCBzdWJzZXF1ZW50IGV2ZW50cyBhcmUgZm9yIG5ldyBpbnRlcmFjdGlvbnMuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdW5kZWZpbmVkOyB9LCBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuVEFQX0RFTEFZX01TKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gc2NlbmFyaW9zIHN1Y2ggYXMgd2hlbiB5b3UgaGF2ZSBhIGtleXVwIGV2ZW50IHRoYXQgYmx1cnMgdGhlIGVsZW1lbnQuXG4gICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0YXRlID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYykge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTsgfSk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hbmltYXRlRGVhY3RpdmF0aW9uXyA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgd2FzQWN0aXZhdGVkQnlQb2ludGVyID0gX2Eud2FzQWN0aXZhdGVkQnlQb2ludGVyLCB3YXNFbGVtZW50TWFkZUFjdGl2ZSA9IF9hLndhc0VsZW1lbnRNYWRlQWN0aXZlO1xuICAgICAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyIHx8IHdhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXRJbnRlcm5hbF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZnJhbWVfID0gdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgICAgIHZhciBtYXhEaW0gPSBNYXRoLm1heCh0aGlzLmZyYW1lXy5oZWlnaHQsIHRoaXMuZnJhbWVfLndpZHRoKTtcbiAgICAgICAgLy8gU3VyZmFjZSBkaWFtZXRlciBpcyB0cmVhdGVkIGRpZmZlcmVudGx5IGZvciB1bmJvdW5kZWQgdnMuIGJvdW5kZWQgcmlwcGxlcy5cbiAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZSBkaWFtZXRlciBpcyBjYWxjdWxhdGVkIHNtYWxsZXIgc2luY2UgdGhlIHN1cmZhY2UgaXMgZXhwZWN0ZWQgdG8gYWxyZWFkeSBiZSBwYWRkZWQgYXBwcm9wcmlhdGVseVxuICAgICAgICAvLyB0byBleHRlbmQgdGhlIGhpdGJveCwgYW5kIHRoZSByaXBwbGUgaXMgZXhwZWN0ZWQgdG8gbWVldCB0aGUgZWRnZXMgb2YgdGhlIHBhZGRlZCBoaXRib3ggKHdoaWNoIGlzIHR5cGljYWxseVxuICAgICAgICAvLyBzcXVhcmUpLiBCb3VuZGVkIHJpcHBsZXMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgZnVsbHkgZXhwZWN0ZWQgdG8gZXhwYW5kIGJleW9uZCB0aGUgc3VyZmFjZSdzIGxvbmdlc3QgZGlhbWV0ZXJcbiAgICAgICAgLy8gKGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGRpYWdvbmFsIHBsdXMgYSBjb25zdGFudCBwYWRkaW5nKSwgYW5kIGFyZSBjbGlwcGVkIGF0IHRoZSBzdXJmYWNlJ3MgYm9yZGVyIHZpYVxuICAgICAgICAvLyBgb3ZlcmZsb3c6IGhpZGRlbmAuXG4gICAgICAgIHZhciBnZXRCb3VuZGVkUmFkaXVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGh5cG90ZW51c2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coX3RoaXMuZnJhbWVfLndpZHRoLCAyKSArIE1hdGgucG93KF90aGlzLmZyYW1lXy5oZWlnaHQsIDIpKTtcbiAgICAgICAgICAgIHJldHVybiBoeXBvdGVudXNlICsgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlBBRERJTkc7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWF4UmFkaXVzXyA9IHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSA/IG1heERpbSA6IGdldEJvdW5kZWRSYWRpdXMoKTtcbiAgICAgICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICAgICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBNYXRoLmZsb29yKG1heERpbSAqIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5JTklUSUFMX09SSUdJTl9TQ0FMRSk7XG4gICAgICAgIHRoaXMuZmdTY2FsZV8gPSBcIlwiICsgdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG4gICAgICAgIHRoaXMudXBkYXRlTGF5b3V0Q3NzVmFyc18oKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnVwZGF0ZUxheW91dENzc1ZhcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3MsIFZBUl9GR19TSVpFID0gX2EuVkFSX0ZHX1NJWkUsIFZBUl9MRUZUID0gX2EuVkFSX0xFRlQsIFZBUl9UT1AgPSBfYS5WQVJfVE9QLCBWQVJfRkdfU0NBTEUgPSBfYS5WQVJfRkdfU0NBTEU7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIHRoaXMuaW5pdGlhbFNpemVfICsgXCJweFwiKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0xFRlQsIHRoaXMudW5ib3VuZGVkQ29vcmRzXy5sZWZ0ICsgXCJweFwiKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgdGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcCArIFwicHhcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENSaXBwbGVGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IHBvbnlmaWxsIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9pbmRleCc7XG5pbXBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcbnZhciBNRENSaXBwbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDUmlwcGxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1JpcHBsZSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTURDUmlwcGxlLmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QsIG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0geyBpc1VuYm91bmRlZDogdW5kZWZpbmVkIH07IH1cbiAgICAgICAgdmFyIHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgICAgIC8vIE9ubHkgb3ZlcnJpZGUgdW5ib3VuZGVkIGJlaGF2aW9yIGlmIG9wdGlvbiBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxuICAgICAgICBpZiAob3B0cy5pc1VuYm91bmRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByaXBwbGUudW5ib3VuZGVkID0gb3B0cy5pc1VuYm91bmRlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmlwcGxlO1xuICAgIH07XG4gICAgTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyk7IH0sXG4gICAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmNvbnRhaW5zKHRhcmdldCk7IH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB9KTsgfSxcbiAgICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gcG9ueWZpbGwubWF0Y2hlcyhpbnN0YW5jZS5yb290XywgJzphY3RpdmUnKTsgfSxcbiAgICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBCb29sZWFuKGluc3RhbmNlLmRpc2FibGVkKTsgfSxcbiAgICAgICAgICAgIGlzVW5ib3VuZGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBCb29sZWFuKGluc3RhbmNlLnVuYm91bmRlZCk7IH0sXG4gICAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2Uucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6IGZ1bmN0aW9uICh2YXJOYW1lLCB2YWx1ZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpOyB9LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZS5wcm90b3R5cGUsIFwidW5ib3VuZGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLnVuYm91bmRlZF8pO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh1bmJvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5ib3VuZGVkXyA9IEJvb2xlYW4odW5ib3VuZGVkKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VW5ib3VuZGVkXygpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIodGhpcykpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByb290ID0gdGhpcy5yb290XztcbiAgICAgICAgdGhpcy51bmJvdW5kZWQgPSAnbWRjUmlwcGxlSXNVbmJvdW5kZWQnIGluIHJvb3QuZGF0YXNldDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb3N1cmUgQ29tcGlsZXIgdGhyb3dzIGFuIGFjY2VzcyBjb250cm9sIGVycm9yIHdoZW4gZGlyZWN0bHkgYWNjZXNzaW5nIGFcbiAgICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICAgKiBCeSBhY2Nlc3NpbmcgdGhlIHByb3RlY3RlZCBwcm9wZXJ0eSBpbnNpZGUgYSBtZXRob2QsIHdlIHNvbHZlIHRoYXQgcHJvYmxlbS5cbiAgICAgKiBUaGF0J3Mgd2h5IHRoaXMgZnVuY3Rpb24gZXhpc3RzLlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuc2V0VW5ib3VuZGVkXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVbmJvdW5kZWQoQm9vbGVhbih0aGlzLnVuYm91bmRlZF8pKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENSaXBwbGU7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDUmlwcGxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5leHBvcnQgeyB1dGlsIH07XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvaW5kZXgnXG5pbXBvcnQgeyBzdXBwb3J0c0Nzc1ZhcmlhYmxlcywgYXBwbHlQYXNzaXZlIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS91dGlsJ1xuaW1wb3J0IHsgbWF0Y2hlcyB9IGZyb20gJ0BtYXRlcmlhbC9kb20vcG9ueWZpbGwnXG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVCYXNlIGV4dGVuZHMgTURDUmlwcGxlRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgTUFUQ0hFUygpIHtcbiAgICAvKiBnbG9iYWwgSFRNTEVsZW1lbnQgKi9cbiAgICByZXR1cm4gKFxuICAgICAgUmlwcGxlQmFzZS5fbWF0Y2hlcyB8fFxuICAgICAgKFJpcHBsZUJhc2UuX21hdGNoZXMgPSBtYXRjaGVzKEhUTUxFbGVtZW50LnByb3RvdHlwZSkpXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGlzU3VyZmFjZUFjdGl2ZShyZWYpIHtcbiAgICByZXR1cm4gcmVmW1JpcHBsZUJhc2UuTUFUQ0hFU10oJzphY3RpdmUnKVxuICB9XG5cbiAgY29uc3RydWN0b3Iodm0sIG9wdGlvbnMpIHtcbiAgICBzdXBlcihcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uJGVsW1JpcHBsZUJhc2UuTUFUQ0hFU10oJzphY3RpdmUnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS5kaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2bS4kc2V0KHZtLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJGRlbGV0ZSh2bS5jbGFzc2VzLCBjbGFzc05hbWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiB0YXJnZXQgPT4gdm0uJGVsLmNvbnRhaW5zKHRhcmdldCksXG4gICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHZtLiRlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5zdHlsZXMsIHZhck5hbWUsIHZhbHVlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgUmlwcGxlTWl4aW4gPSB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5yaXBwbGUuZGVzdHJveSgpXG4gIH1cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGN1c3RvbS1lbGVtZW50IFxuICAgIDp0YWc9XCJ0YWdcIiBcbiAgICA6Y2xhc3Nlcz1cImNsYXNzZXNcIlxuICAgIDpzdHlsZXM9XCJzdHlsZXNcIiBcbiAgICBjbGFzcz1cIm1kYy1yaXBwbGVcIj5cbiAgICA8c2xvdCAvPlxuICA8L2N1c3RvbS1lbGVtZW50PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnRNaXhpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgeyBSaXBwbGVNaXhpbiB9IGZyb20gJy4vbWRjLXJpcHBsZS1iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtcmlwcGxlJyxcbiAgbWl4aW5zOiBbQ3VzdG9tRWxlbWVudE1peGluLCBSaXBwbGVNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgdGFnOiBTdHJpbmdcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxjdXN0b20tYnV0dG9uXG4gICAgcmVmPVwicm9vdFwiXG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiXG4gICAgOnN0eWxlPVwic3R5bGVzXCJcbiAgICA6aHJlZj1cImhyZWZcIlxuICAgIDpsaW5rPVwibGlua1wiXG4gICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgIHYtb249XCJsaXN0ZW5lcnNcIlxuICA+XG4gICAgPHNwYW4gY2xhc3M9XCJtZGMtYnV0dG9uX19sYWJlbFwiPiA8c2xvdCAvPiA8L3NwYW4+XG4gIDwvY3VzdG9tLWJ1dHRvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBEaXNwYXRjaEV2ZW50TWl4aW4sIEN1c3RvbUJ1dHRvbk1peGluIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IFJpcHBsZU1peGluIH0gZnJvbSAnLi4vcmlwcGxlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtYnV0dG9uLWJhc2UnLFxuICBtaXhpbnM6IFtEaXNwYXRjaEV2ZW50TWl4aW4sIEN1c3RvbUJ1dHRvbk1peGluLCBSaXBwbGVNaXhpbl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8c2NyaXB0PlxuaW1wb3J0IG1kY0J1dHRvbkJhc2UgZnJvbSAnLi9tZGMtYnV0dG9uLWJhc2UudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtYnV0dG9uJyxcbiAgZXh0ZW5kczogbWRjQnV0dG9uQmFzZSxcbiAgcHJvcHM6IHtcbiAgICByYWlzZWQ6IEJvb2xlYW4sXG4gICAgdW5lbGV2YXRlZDogQm9vbGVhbixcbiAgICBvdXRsaW5lZDogQm9vbGVhbixcbiAgICBkZW5zZTogQm9vbGVhblxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgICdtZGMtYnV0dG9uJzogdHJ1ZSxcbiAgICAgICAgJ21kYy1idXR0b24tLXJhaXNlZCc6IHRoaXMucmFpc2VkLFxuICAgICAgICAnbWRjLWJ1dHRvbi0tdW5lbGV2YXRlZCc6IHRoaXMudW5lbGV2YXRlZCxcbiAgICAgICAgJ21kYy1idXR0b24tLW91dGxpbmVkJzogdGhpcy5vdXRsaW5lZCxcbiAgICAgICAgJ21kYy1idXR0b24tLWRlbnNlJzogdGhpcy5kZW5zZVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICByYWlzZWQoKSB7XG4gICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCAnbWRjLWJ1dHRvbi0tcmFpc2VkJywgdGhpcy5yYWlzZWQpXG4gICAgfSxcbiAgICB1bmVsZXZhdGVkKCkge1xuICAgICAgdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgJ21kYy1idXR0b24tLXVuZWxldmF0ZWQnLCB0aGlzLnVuZWxldmF0ZWQpXG4gICAgfSxcbiAgICBvdXRsaW5lZCgpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsICdtZGMtYnV0dG9uLS1vdXRsaW5lZCcsIHRoaXMub3V0bGluZWQpXG4gICAgfSxcbiAgICBkZW5zZSgpIHtcbiAgICAgIHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsICdtZGMtYnV0dG9uLS1kZW5zZScsIHRoaXMuZGVuc2UpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIHJlZj1cInJvb3RcIlxuICAgIDpjbGFzcz1cImNsYXNzZXNcIlxuICAgIDpzdHlsZT1cInN0eWxlc1wiXG4gICAgYXJpYS1tb2RhbD1cInRydWVcIlxuICAgIDphcmlhLWxhYmVsbGVkYnk9XCInbGFiZWwnICsgdm1hX3VpZF9cIlxuICAgIDphcmlhLWRlc2NyaWJlZGJ5PVwiJ2Rlc2MnICsgdm1hX3VpZF9cIlxuICAgIGNsYXNzPVwibWRjLWRpYWxvZ1wiXG4gICAgcm9sZT1cImFsZXJ0ZGlhbG9nXCJcbiAgICBAY2xpY2s9XCJvbkNsaWNrXCJcbiAgICBAa2V5ZG93bj1cIm9uQ2xpY2tcIlxuICA+XG4gICAgPGRpdiByZWY9XCJjb250YWluZXJcIiBjbGFzcz1cIm1kYy1kaWFsb2dfX2NvbnRhaW5lclwiPlxuICAgICAgPGRpdiByZWY9XCJzdXJmYWNlXCIgOmNsYXNzPVwic3VyZmFjZUNsYXNzZXNcIiBjbGFzcz1cIm1kYy1kaWFsb2dfX3N1cmZhY2VcIj5cbiAgICAgICAgPGgyIHYtaWY9XCJ0aXRsZVwiIGNsYXNzPVwibWRjLWRpYWxvZ19fdGl0bGVcIiA6aWQ9XCInbGFiZWwnICsgdm1hX3VpZF9cIj5cbiAgICAgICAgICA8IS0tXG4gICAgICAgICAgLS0+e3sgdGl0bGVcbiAgICAgICAgICB9fTwhLS0tLT5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdiByZWY9XCJjb250ZW50XCIgY2xhc3M9XCJtZGMtZGlhbG9nX19jb250ZW50XCIgOmlkPVwiJ2Rlc2MnICsgdm1hX3VpZF9cIj5cbiAgICAgICAgICA8c2xvdCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvb3RlciB2LWlmPVwiYWNjZXB0IHx8IGNhbmNlbFwiIGNsYXNzPVwibWRjLWRpYWxvZ19fYWN0aW9uc1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdi1pZj1cImNhbmNlbFwiXG4gICAgICAgICAgICBjbGFzcz1cIm1kYy1idXR0b24gbWRjLWRpYWxvZ19fYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtbWRjLWRpYWxvZy1hY3Rpb249XCJub1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgY2FuY2VsIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICByZWY9XCJkZWZhdWx0QnV0dG9uXCJcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cImFjY2VwdERpc2FibGVkXCJcbiAgICAgICAgICAgIGNsYXNzPVwibWRjLWJ1dHRvbiBtZGMtZGlhbG9nX19idXR0b24gXCJcbiAgICAgICAgICAgIGRhdGEtbWRjLWRpYWxvZy1hY3Rpb249XCJ5ZXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGFjY2VwdCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZGMtZGlhbG9nX19zY3JpbVwiIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENEaWFsb2dGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9kaWFsb2cvZm91bmRhdGlvbidcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnQG1hdGVyaWFsL2RpYWxvZy91dGlsJ1xuaW1wb3J0IHsgbWRjQnV0dG9uIH0gZnJvbSAnLi4vYnV0dG9uJ1xuaW1wb3J0IHsgVk1BVW5pcXVlSWRNaXhpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgeyBjbG9zZXN0LCBtYXRjaGVzIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9wb255ZmlsbCdcbmltcG9ydCBjcmVhdGVGb2N1c1RyYXAgZnJvbSAnZm9jdXMtdHJhcCdcbmNvbnN0IHN0cmluZ3MgPSBNRENEaWFsb2dGb3VuZGF0aW9uLnN0cmluZ3NcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWRpYWxvZycsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBtZGNCdXR0b246IG1kY0J1dHRvblxuICB9LFxuICBtaXhpbnM6IFtWTUFVbmlxdWVJZE1peGluXSxcbiAgbW9kZWw6IHtcbiAgICBwcm9wOiAnb3BlbicsXG4gICAgZXZlbnQ6ICdjaGFuZ2UnXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgYWNjZXB0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnT2snXG4gICAgfSxcbiAgICBhY2NlcHREaXNhYmxlZDogQm9vbGVhbixcbiAgICBhY2NlcHRSYWlzZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgY2FuY2VsOiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIGNhbmNlbFJhaXNlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBhY2NlbnQ6IEJvb2xlYW4sXG4gICAgc2Nyb2xsYWJsZTogQm9vbGVhbixcbiAgICBvcGVuOiBCb29sZWFuXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgJ21kYy10aGVtZS0tZGFyayc6IHRoaXMuZGFya1xuICAgICAgfSxcbiAgICAgIHN0eWxlczoge30sXG4gICAgICBzdXJmYWNlQ2xhc3Nlczoge30sXG4gICAgICBib2R5Q2xhc3Nlczoge1xuICAgICAgICAnbWRjLWRpYWxvZ19fYm9keS0tc2Nyb2xsYWJsZSc6IHRoaXMuc2Nyb2xsYWJsZVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBvcGVuOiAnb25PcGVuXydcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBpZiAodGhpcy5hY2NlcHQpIHtcbiAgICAgIHRoaXMuZm9jdXNUcmFwID0gdXRpbC5jcmVhdGVGb2N1c1RyYXBJbnN0YW5jZShcbiAgICAgICAgdGhpcy4kcmVmcy5jb250YWluZXIsXG4gICAgICAgIGNyZWF0ZUZvY3VzVHJhcFxuICAgICAgKVxuICAgIH1cblxuICAgIHRoaXMuYnV0dG9uc18gPSBbXS5zbGljZS5jYWxsKFxuICAgICAgdGhpcy4kZWwucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLkJVVFRPTl9TRUxFQ1RPUilcbiAgICApXG5cbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDRGlhbG9nRm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSksXG4gICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGRlbGV0ZSh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSksXG4gICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgYWRkQm9keUNsYXNzOiBjbGFzc05hbWUgPT4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVCb2R5Q2xhc3M6IGNsYXNzTmFtZSA9PiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIGV2ZW50VGFyZ2V0TWF0Y2hlczogKHRhcmdldCwgc2VsZWN0b3IpID0+IG1hdGNoZXModGFyZ2V0LCBzZWxlY3RvciksXG4gICAgICB0cmFwRm9jdXM6ICgpID0+IHRoaXMuZm9jdXNUcmFwICYmIHRoaXMuZm9jdXNUcmFwLmFjdGl2YXRlKCksXG4gICAgICByZWxlYXNlRm9jdXM6ICgpID0+IHRoaXMuZm9jdXNUcmFwICYmIHRoaXMuZm9jdXNUcmFwLmRlYWN0aXZhdGUoKSxcbiAgICAgIGlzQ29udGVudFNjcm9sbGFibGU6ICgpID0+XG4gICAgICAgICEhdGhpcy4kcmVmcy5jb250ZW50ICYmIHV0aWwuaXNTY3JvbGxhYmxlKHRoaXMuJHJlZnMuY29udGVudCksXG4gICAgICBhcmVCdXR0b25zU3RhY2tlZDogKCkgPT4gdXRpbC5hcmVUb3BzTWlzYWxpZ25lZCh0aGlzLmJ1dHRvbnNfKSxcblxuICAgICAgZ2V0QWN0aW9uRnJvbUV2ZW50OiBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjbG9zZXN0KGV2ZW50LnRhcmdldCwgYFske3N0cmluZ3MuQUNUSU9OX0FUVFJJQlVURX1dYClcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoc3RyaW5ncy5BQ1RJT05fQVRUUklCVVRFKVxuICAgICAgfSxcbiAgICAgIGNsaWNrRGVmYXVsdEJ1dHRvbjogKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy4kcmVmcy5kZWZhdWx0QnV0dG9uKSB7XG4gICAgICAgICAgdGhpcy4kcmVmcy5kZWZhdWx0QnV0dG9uLmNsaWNrKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJldmVyc2VCdXR0b25zOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuYnV0dG9uc18ucmV2ZXJzZSgpXG4gICAgICAgIHRoaXMuYnV0dG9uc18uZm9yRWFjaChidXR0b24gPT5cbiAgICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICBub3RpZnlPcGVuaW5nOiAoKSA9PiB0aGlzLiRlbWl0KHN0cmluZ3MuT1BFTklOR19FVkVOVCwge30pLFxuICAgICAgbm90aWZ5T3BlbmVkOiAoKSA9PiB0aGlzLiRlbWl0KHN0cmluZ3MuT1BFTkVEX0VWRU5ULCB7fSksXG4gICAgICBub3RpZnlDbG9zaW5nOiBhY3Rpb24gPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBmYWxzZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aW9uKVxuICAgICAgICB0aGlzLiRlbWl0KHN0cmluZ3MuQ0xPU0lOR19FVkVOVCwgYWN0aW9uID8geyBhY3Rpb24gfSA6IHt9KVxuICAgICAgfSxcbiAgICAgIG5vdGlmeUNsb3NlZDogYWN0aW9uID0+XG4gICAgICAgIHRoaXMuJGVtaXQoc3RyaW5ncy5DTE9TRURfRVZFTlQsIGFjdGlvbiA/IHsgYWN0aW9uIH0gOiB7fSlcbiAgICB9KVxuXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuICAgIHRoaXMub3BlbiAmJiB0aGlzLmZvdW5kYXRpb24ub3BlbigpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25PcGVuXyh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5vcGVuKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5jbG9zZSgpXG4gICAgICB9XG4gICAgfSxcblxuICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVJbnRlcmFjdGlvbihldmVudClcbiAgICB9LFxuICAgIG9uQ2FuY2VsKCkge1xuICAgICAgaWYgKHRoaXMuJGxpc3RlbmVyc1sndmFsaWRhdGVDYW5jZWwnXSkge1xuICAgICAgICB0aGlzLiRlbWl0KCd2YWxpZGF0ZUNhbmNlbCcsIHtcbiAgICAgICAgICBjYW5jZWw6IChub3RpZnkgPSB0cnVlKSA9PiB7XG4gICAgICAgICAgICAvLyBpZiBub3RpZnkgPSBmYWxzZSwgdGhlIGRpYWxvZyB3aWxsIGNsb3NlXG4gICAgICAgICAgICAvLyBidXQgdGhlIG5vdGlmeUFjY2VwdCBtZXRob2Qgd2lsbCBub3QgYmUgY2FsbGVkXG4gICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIG5vdGlmeSBsaXN0ZW5lcnMgdGhlIG9wZW4gc3RhdGVcbiAgICAgICAgICAgIC8vIGlzIGNoYW5naW5nLlxuICAgICAgICAgICAgaWYgKCFub3RpZnkpIHtcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb24uY2FuY2VsKG5vdGlmeSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uY2FuY2VsKHRydWUpXG4gICAgICB9XG4gICAgfSxcbiAgICBvbkFjY2VwdCgpIHtcbiAgICAgIGlmICh0aGlzLiRsaXN0ZW5lcnNbJ3ZhbGlkYXRlJ10pIHtcbiAgICAgICAgdGhpcy4kZW1pdCgndmFsaWRhdGUnLCB7XG4gICAgICAgICAgYWNjZXB0OiAobm90aWZ5ID0gdHJ1ZSkgPT4ge1xuICAgICAgICAgICAgLy8gaWYgbm90aWZ5ID0gZmFsc2UsIHRoZSBkaWFsb2cgd2lsbCBjbG9zZVxuICAgICAgICAgICAgLy8gYnV0IHRoZSBub3RpZnlBY2NlcHQgbWV0aG9kIHdpbGwgbm90IGJlIGNhbGxlZFxuICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBub3RpZnkgbGlzdGVuZXJzIHRoZSBvcGVuIHN0YXRlXG4gICAgICAgICAgICAvLyBpcyBjaGFuZ2luZy5cbiAgICAgICAgICAgIGlmICghbm90aWZ5KSB7XG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmFjY2VwdChub3RpZnkpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmFjY2VwdCh0cnVlKVxuICAgICAgfVxuICAgIH0sXG4gICAgc2hvdygpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5vcGVuKClcbiAgICB9LFxuICAgIGNsb3NlKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmNsb3NlKClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgbWRjRGlhbG9nIGZyb20gJy4vbWRjLWRpYWxvZy52dWUnXG5cbmV4cG9ydCB7IG1kY0RpYWxvZyB9XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VQbHVnaW4oe1xuICBtZGNEaWFsb2dcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJDdXN0b21FbGVtZW50IiwiZnVuY3Rpb25hbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwicHJvcHMiLCJpcyIsInRhZyIsImRhdGEiLCJjaGlsZHJlbiIsIkN1c3RvbUVsZW1lbnRNaXhpbiIsIkN1c3RvbUJ1dHRvbiIsImxpbmsiLCJPYmplY3QiLCJoIiwiZWxlbWVudCIsInBhcmVudCIsIiRyb3V0ZXIiLCIkcm9vdCIsIiRvcHRpb25zIiwiYXR0cnMiLCJyb2xlIiwib24iLCJjbGljayIsIm5hdGl2ZU9uIiwiaHJlZiIsIkN1c3RvbUJ1dHRvbk1peGluIiwiU3RyaW5nIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwidG8iLCJleGFjdCIsImFwcGVuZCIsInJlcGxhY2UiLCJhY3RpdmVDbGFzcyIsImV4YWN0QWN0aXZlQ2xhc3MiLCJjb21wdXRlZCIsIkRpc3BhdGNoRXZlbnRNaXhpbiIsImV2ZW50IiwiQXJyYXkiLCJtZXRob2RzIiwiZGlzcGF0Y2hFdmVudCIsImV2dCIsIiRlbWl0IiwidHlwZSIsInRhcmdldCIsImV2ZW50VGFyZ2V0IiwiYXJncyIsImV2ZW50QXJncyIsImxpc3RlbmVycyIsIiRsaXN0ZW5lcnMiLCJlIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIlZNQVVuaXF1ZUlkTWl4aW4iLCJiZWZvcmVDcmVhdGUiLCJ2bWFfdWlkXyIsIl91aWQiLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fZXh0ZW5kcyIsIl9fIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJfX2Fzc2lnbiIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjYWxsIiwiYXBwbHkiLCJfX3JlYWQiLCJvIiwibSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiciIsImFyIiwibmV4dCIsImRvbmUiLCJwdXNoIiwidmFsdWUiLCJlcnJvciIsIl9fc3ByZWFkIiwiY29uY2F0IiwidHNsaWJfMS5fX2V4dGVuZHMiLCJ0c2xpYl8xLl9fYXNzaWduIiwiY2FuZGlkYXRlU2VsZWN0b3JzIiwiY2FuZGlkYXRlU2VsZWN0b3IiLCJqb2luIiwibWF0Y2hlcyIsIkVsZW1lbnQiLCJtc01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsInRhYmJhYmxlIiwiZWwiLCJvcHRpb25zIiwiZWxlbWVudERvY3VtZW50Iiwib3duZXJEb2N1bWVudCIsInJlZ3VsYXJUYWJiYWJsZXMiLCJvcmRlcmVkVGFiYmFibGVzIiwidW50b3VjaGFiaWxpdHlDaGVja2VyIiwiVW50b3VjaGFiaWxpdHlDaGVja2VyIiwiY2FuZGlkYXRlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmNsdWRlQ29udGFpbmVyIiwic2xpY2UiLCJ1bnNoaWZ0IiwiY2FuZGlkYXRlIiwiY2FuZGlkYXRlVGFiaW5kZXgiLCJpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUiLCJnZXRUYWJpbmRleCIsImRvY3VtZW50T3JkZXIiLCJ0YWJJbmRleCIsIm5vZGUiLCJ0YWJiYWJsZU5vZGVzIiwic29ydCIsInNvcnRPcmRlcmVkVGFiYmFibGVzIiwibWFwIiwiYSIsImlzVGFiYmFibGUiLCJpc0ZvY3VzYWJsZSIsImlzTm9kZU1hdGNoaW5nU2VsZWN0b3JGb2N1c2FibGUiLCJpc05vblRhYmJhYmxlUmFkaW8iLCJFcnJvciIsImlzSGlkZGVuSW5wdXQiLCJpc1VudG91Y2hhYmxlIiwiZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IiLCJ0YWJpbmRleEF0dHIiLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImlzTmFOIiwiaXNDb250ZW50RWRpdGFibGUiLCJmaW5kIiwibGlzdCIsInByZWRpY2F0ZSIsImNvbnRlbnRFZGl0YWJsZSIsImlzSW5wdXQiLCJ0YWdOYW1lIiwiaXNSYWRpbyIsImlzVGFiYmFibGVSYWRpbyIsImdldENoZWNrZWRSYWRpbyIsIm5vZGVzIiwiY2hlY2tlZCIsInJhZGlvU2V0IiwiZG9jIiwiY2FjaGUiLCJoYXNEaXNwbGF5Tm9uZSIsIm5vZGVDb21wdXRlZFN0eWxlIiwibm9kZVR5cGUiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwiY2FjaGVkIiwiaXRlbSIsImRlZmF1bHRWaWV3IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInJlc3VsdCIsImRpc3BsYXkiLCJwYXJlbnROb2RlIiwiZG9jdW1lbnRFbGVtZW50IiwiY29tcHV0ZWRTdHlsZSIsInZpc2liaWxpdHkiLCJtb2R1bGUiLCJleHRlbmQiLCJzb3VyY2UiLCJhY3RpdmVGb2N1c1RyYXBzIiwidHJhcFF1ZXVlIiwiYWN0aXZhdGVUcmFwIiwidHJhcCIsImFjdGl2ZVRyYXAiLCJwYXVzZSIsInRyYXBJbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJkZWFjdGl2YXRlVHJhcCIsInVucGF1c2UiLCJmb2N1c1RyYXAiLCJ1c2VyT3B0aW9ucyIsImRvY3VtZW50IiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImNvbmZpZyIsInh0ZW5kIiwicmV0dXJuRm9jdXNPbkRlYWN0aXZhdGUiLCJlc2NhcGVEZWFjdGl2YXRlcyIsInN0YXRlIiwiZmlyc3RUYWJiYWJsZU5vZGUiLCJsYXN0VGFiYmFibGVOb2RlIiwibm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uIiwibW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUiLCJhY3RpdmUiLCJwYXVzZWQiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJhY3RpdmF0ZU9wdGlvbnMiLCJ1cGRhdGVUYWJiYWJsZU5vZGVzIiwiYWN0aXZlRWxlbWVudCIsIm9uQWN0aXZhdGUiLCJhZGRMaXN0ZW5lcnMiLCJkZWFjdGl2YXRlT3B0aW9ucyIsInJlbW92ZUxpc3RlbmVycyIsIm9uRGVhY3RpdmF0ZSIsInVuZGVmaW5lZCIsInJldHVybkZvY3VzIiwiZGVsYXkiLCJ0cnlGb2N1cyIsImdldEluaXRpYWxGb2N1c05vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tGb2N1c0luIiwiY2hlY2tQb2ludGVyRG93biIsImNoZWNrQ2xpY2siLCJjaGVja0tleSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXROb2RlRm9yT3B0aW9uIiwib3B0aW9uTmFtZSIsIm9wdGlvblZhbHVlIiwiY29udGFpbnMiLCJjbGlja091dHNpZGVEZWFjdGl2YXRlcyIsInByZXZlbnREZWZhdWx0IiwiRG9jdW1lbnQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJpc0VzY2FwZUV2ZW50IiwiaXNUYWJFdmVudCIsImNoZWNrVGFiIiwic2hpZnRLZXkiLCJmb2N1cyIsImlzU2VsZWN0YWJsZUlucHV0Iiwic2VsZWN0IiwidG9Mb3dlckNhc2UiLCJrZXlDb2RlIiwiZm4iLCJzZXRUaW1lb3V0IiwidHNsaWJfMS5fX3NwcmVhZCIsImNzc0NsYXNzZXMiLCJzdHJpbmdzIiwibnVtYmVycyIsInV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJ1dGlsLmFwcGx5UGFzc2l2ZSIsInBvbnlmaWxsLm1hdGNoZXMiLCJSaXBwbGVCYXNlIiwicmVmIiwiTUFUQ0hFUyIsIl9tYXRjaGVzIiwiSFRNTEVsZW1lbnQiLCJicm93c2VyU3VwcG9ydHNDc3NWYXJzIiwic3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJpc1VuYm91bmRlZCIsImlzU3VyZmFjZUFjdGl2ZSIsIiRlbCIsImlzU3VyZmFjZURpc2FibGVkIiwiYWRkQ2xhc3MiLCJjbGFzc05hbWUiLCIkc2V0IiwiY2xhc3NlcyIsInJlbW92ZUNsYXNzIiwiJGRlbGV0ZSIsImNvbnRhaW5zRXZlbnRUYXJnZXQiLCJyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsImhhbmRsZXIiLCJhcHBseVBhc3NpdmUiLCJkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsImV2dFR5cGUiLCJkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJkZXJlZ2lzdGVyUmVzaXplSGFuZGxlciIsInVwZGF0ZUNzc1ZhcmlhYmxlIiwidmFyTmFtZSIsInN0eWxlcyIsImNvbXB1dGVCb3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRXaW5kb3dQYWdlT2Zmc2V0IiwieCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwiTURDUmlwcGxlRm91bmRhdGlvbiIsIlJpcHBsZU1peGluIiwibW91bnRlZCIsInJpcHBsZSIsImluaXQiLCJiZWZvcmVEZXN0cm95IiwiZGVzdHJveSIsIm1kY0RpYWxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUFPLFNBQVNBLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0lBQy9CO0lBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0lBQ0EsTUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0lBQ2pDRCxJQUFBQSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBZDtJQUNELEdBRkQsTUFFTyxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7SUFDeEM7SUFDQUgsSUFBQUEsSUFBSSxHQUFHRyxNQUFNLENBQUNELEdBQWQ7SUFDRDs7SUFDRCxNQUFJRixJQUFKLEVBQVU7SUFDUkEsSUFBQUEsSUFBSSxDQUFDSSxHQUFMLENBQVNMLE1BQVQ7SUFDRDtJQUNGOztJQ1pNLFNBQVNNLFVBQVQsQ0FBb0JDLFVBQXBCLEVBQWdDO0lBQ3JDLFNBQU87SUFDTEMsSUFBQUEsT0FBTyxFQUFFLGFBREo7SUFFTEMsSUFBQUEsT0FBTyxFQUFFLGlCQUFBQyxFQUFFLEVBQUk7SUFDYixXQUFLLElBQUlDLEdBQVQsSUFBZ0JKLFVBQWhCLEVBQTRCO0lBQzFCLFlBQUlLLFNBQVMsR0FBR0wsVUFBVSxDQUFDSSxHQUFELENBQTFCO0lBQ0FELFFBQUFBLEVBQUUsQ0FBQ0UsU0FBSCxDQUFhQSxTQUFTLENBQUNDLElBQXZCLEVBQTZCRCxTQUE3QjtJQUNEO0lBQ0YsS0FQSTtJQVFMTCxJQUFBQSxVQUFVLEVBQVZBO0lBUkssR0FBUDtJQVVEOztJQ1hNLElBQU1PLGFBQWEsR0FBRztJQUMzQkMsRUFBQUEsVUFBVSxFQUFFLElBRGU7SUFFM0JDLEVBQUFBLE1BRjJCLGtCQUVwQkMsYUFGb0IsRUFFTEMsT0FGSyxFQUVJO0lBQzdCLFdBQU9ELGFBQWEsQ0FDbEJDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjQyxFQUFkLElBQW9CRixPQUFPLENBQUNDLEtBQVIsQ0FBY0UsR0FBbEMsSUFBeUMsS0FEdkIsRUFFbEJILE9BQU8sQ0FBQ0ksSUFGVSxFQUdsQkosT0FBTyxDQUFDSyxRQUhVLENBQXBCO0lBS0Q7SUFSMEIsQ0FBdEI7QUFXUCxJQUFPLElBQU1DLGtCQUFrQixHQUFHO0lBQ2hDakIsRUFBQUEsVUFBVSxFQUFFO0lBQ1ZPLElBQUFBLGFBQWEsRUFBYkE7SUFEVTtJQURvQixDQUEzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNYUDs7SUNBTyxJQUFNVyxZQUFZLEdBQUc7SUFDMUJaLEVBQUFBLElBQUksRUFBRSxlQURvQjtJQUUxQkUsRUFBQUEsVUFBVSxFQUFFLElBRmM7SUFHMUJJLEVBQUFBLEtBQUssRUFBRTtJQUNMTyxJQUFBQSxJQUFJLEVBQUVDO0lBREQsR0FIbUI7SUFNMUJYLEVBQUFBLE1BTjBCLGtCQU1uQlksQ0FObUIsRUFNaEJWLE9BTmdCLEVBTVA7SUFDakIsUUFBSVcsT0FBSjs7SUFDQSxRQUFJUCxJQUFJLEdBQUcsU0FBYyxFQUFkLEVBQWtCSixPQUFPLENBQUNJLElBQTFCLENBQVg7O0lBRUEsUUFBSUosT0FBTyxDQUFDQyxLQUFSLENBQWNPLElBQWQsSUFBc0JSLE9BQU8sQ0FBQ1ksTUFBUixDQUFlQyxPQUF6QyxFQUFrRDtJQUNoRDtJQUNBRixNQUFBQSxPQUFPLEdBQUdYLE9BQU8sQ0FBQ1ksTUFBUixDQUFlRSxLQUFmLENBQXFCQyxRQUFyQixDQUE4QjFCLFVBQTlCLENBQXlDLFlBQXpDLENBQVY7SUFDQWUsTUFBQUEsSUFBSSxDQUFDSCxLQUFMLEdBQWEsU0FBYztJQUFFRSxRQUFBQSxHQUFHLEVBQUVILE9BQU8sQ0FBQ0MsS0FBUixDQUFjRTtJQUFyQixPQUFkLEVBQTBDSCxPQUFPLENBQUNDLEtBQVIsQ0FBY08sSUFBeEQsQ0FBYjtJQUNBSixNQUFBQSxJQUFJLENBQUNZLEtBQUwsQ0FBV0MsSUFBWCxHQUFrQixRQUFsQjs7SUFDQSxVQUFJYixJQUFJLENBQUNjLEVBQUwsQ0FBUUMsS0FBWixFQUFtQjtJQUNqQmYsUUFBQUEsSUFBSSxDQUFDZ0IsUUFBTCxHQUFnQjtJQUFFRCxVQUFBQSxLQUFLLEVBQUVmLElBQUksQ0FBQ2MsRUFBTCxDQUFRQztJQUFqQixTQUFoQjtJQUNEO0lBQ0YsS0FSRCxNQVFPLElBQUlmLElBQUksQ0FBQ1ksS0FBTCxJQUFjWixJQUFJLENBQUNZLEtBQUwsQ0FBV0ssSUFBN0IsRUFBbUM7SUFDeEM7SUFDQVYsTUFBQUEsT0FBTyxHQUFHLEdBQVY7SUFDQVAsTUFBQUEsSUFBSSxDQUFDWSxLQUFMLENBQVdDLElBQVgsR0FBa0IsUUFBbEI7SUFDRCxLQUpNLE1BSUE7SUFDTDtJQUNBTixNQUFBQSxPQUFPLEdBQUcsUUFBVjtJQUNEOztJQUVELFdBQU9ELENBQUMsQ0FBQ0MsT0FBRCxFQUFVUCxJQUFWLEVBQWdCSixPQUFPLENBQUNLLFFBQXhCLENBQVI7SUFDRDtJQTVCeUIsQ0FBckI7QUErQlAsSUFBTyxJQUFNaUIsaUJBQWlCLEdBQUc7SUFDL0JyQixFQUFBQSxLQUFLLEVBQUU7SUFDTG9CLElBQUFBLElBQUksRUFBRUUsTUFERDtJQUVMQyxJQUFBQSxRQUFRLEVBQUVDLE9BRkw7SUFHTEMsSUFBQUEsRUFBRSxFQUFFLENBQUNILE1BQUQsRUFBU2QsTUFBVCxDQUhDO0lBSUxrQixJQUFBQSxLQUFLLEVBQUVGLE9BSkY7SUFLTEcsSUFBQUEsTUFBTSxFQUFFSCxPQUxIO0lBTUxJLElBQUFBLE9BQU8sRUFBRUosT0FOSjtJQU9MSyxJQUFBQSxXQUFXLEVBQUVQLE1BUFI7SUFRTFEsSUFBQUEsZ0JBQWdCLEVBQUVSO0lBUmIsR0FEd0I7SUFXL0JTLEVBQUFBLFFBQVEsRUFBRTtJQUNSeEIsSUFBQUEsSUFEUSxrQkFDRDtJQUNMLGFBQ0UsS0FBS2tCLEVBQUwsSUFBVztJQUNUQSxRQUFBQSxFQUFFLEVBQUUsS0FBS0EsRUFEQTtJQUVUQyxRQUFBQSxLQUFLLEVBQUUsS0FBS0EsS0FGSDtJQUdUQyxRQUFBQSxNQUFNLEVBQUUsS0FBS0EsTUFISjtJQUlUQyxRQUFBQSxPQUFPLEVBQUUsS0FBS0EsT0FKTDtJQUtUQyxRQUFBQSxXQUFXLEVBQUUsS0FBS0EsV0FMVDtJQU1UQyxRQUFBQSxnQkFBZ0IsRUFBRSxLQUFLQTtJQU5kLE9BRGI7SUFVRDtJQVpPLEdBWHFCO0lBeUIvQjFDLEVBQUFBLFVBQVUsRUFBRTtJQUNWa0IsSUFBQUEsWUFBWSxFQUFaQTtJQURVO0lBekJtQixDQUExQjs7SUMvQkEsSUFBTTBCLGtCQUFrQixHQUFHO0lBQ2hDaEMsRUFBQUEsS0FBSyxFQUFFO0lBQ0xpQyxJQUFBQSxLQUFLLEVBQUVYLE1BREY7SUFFTCxvQkFBZ0JkLE1BRlg7SUFHTCxrQkFBYzBCO0lBSFQsR0FEeUI7SUFNaENDLEVBQUFBLE9BQU8sRUFBRTtJQUNQQyxJQUFBQSxhQURPLHlCQUNPQyxHQURQLEVBQ1k7SUFDakJBLE1BQUFBLEdBQUcsSUFBSSxLQUFLQyxLQUFMLENBQVdELEdBQUcsQ0FBQ0UsSUFBZixFQUFxQkYsR0FBckIsQ0FBUDs7SUFDQSxVQUFJLEtBQUtKLEtBQVQsRUFBZ0I7SUFDZCxZQUFJTyxNQUFNLEdBQUcsS0FBS0MsV0FBTCxJQUFvQixLQUFLNUIsS0FBdEM7SUFDQSxZQUFJNkIsSUFBSSxHQUFHLEtBQUtDLFNBQUwsSUFBa0IsRUFBN0I7SUFDQUgsUUFBQUEsTUFBTSxDQUFDRixLQUFQLE9BQUFFLE1BQU0sR0FBTyxLQUFLUCxLQUFaLDRCQUFzQlMsSUFBdEIsR0FBTjtJQUNEO0lBQ0Y7SUFSTSxHQU51QjtJQWdCaENYLEVBQUFBLFFBQVEsRUFBRTtJQUNSYSxJQUFBQSxTQURRLHVCQUNJO0lBQUE7O0lBQ1YsK0JBQ0ssS0FBS0MsVUFEVjtJQUVFM0IsUUFBQUEsS0FBSyxFQUFFLGVBQUE0QixDQUFDO0lBQUEsaUJBQUksS0FBSSxDQUFDVixhQUFMLENBQW1CVSxDQUFuQixDQUFKO0lBQUE7SUFGVjtJQUlEO0lBTk87SUFoQnNCLENBQTNCOztJQ0FQLElBQU1DLEtBQUssR0FDVEMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkYsSUFBSSxDQUFDQyxLQUFMLENBQVcsVUFBWCxDQUEzQixFQUFtREUsUUFBbkQsS0FBZ0UsR0FEbEU7QUFHQSxJQUFPLElBQU1DLGdCQUFnQixHQUFHO0lBQzlCQyxFQUFBQSxZQUQ4QiwwQkFDZjtJQUNiLFNBQUtDLFFBQUwsR0FBZ0JQLEtBQUssR0FBRyxLQUFLUSxJQUE3QjtJQUNEO0lBSDZCLENBQXpCOztJQ0hQOzs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUlDLGNBQWEsR0FBRyx1QkFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWU7SUFDL0JGLEVBQUFBLGNBQWEsR0FBR2hELE1BQU0sQ0FBQ21ELGNBQVAsSUFDWDtJQUFFQyxJQUFBQSxTQUFTLEVBQUU7SUFBYixlQUE2QjFCLEtBQTdCLElBQXNDLFVBQVV1QixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFBRUQsSUFBQUEsQ0FBQyxDQUFDRyxTQUFGLEdBQWNGLENBQWQ7SUFBa0IsR0FEL0QsSUFFWixVQUFVRCxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7SUFBRSxTQUFLLElBQUlHLENBQVQsSUFBY0gsQ0FBZDtJQUFpQixVQUFJQSxDQUFDLENBQUNJLGNBQUYsQ0FBaUJELENBQWpCLENBQUosRUFBeUJKLENBQUMsQ0FBQ0ksQ0FBRCxDQUFELEdBQU9ILENBQUMsQ0FBQ0csQ0FBRCxDQUFSO0lBQTFDO0lBQXdELEdBRjlFOztJQUdBLFNBQU9MLGNBQWEsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQXBCO0lBQ0gsQ0FMRDs7QUFPQSxJQUFPLFNBQVNLLFNBQVQsQ0FBbUJOLENBQW5CLEVBQXNCQyxDQUF0QixFQUF5QjtJQUM1QkYsRUFBQUEsY0FBYSxDQUFDQyxDQUFELEVBQUlDLENBQUosQ0FBYjs7SUFDQSxXQUFTTSxFQUFULEdBQWM7SUFBRSxTQUFLQyxXQUFMLEdBQW1CUixDQUFuQjtJQUF1Qjs7SUFDdkNBLEVBQUFBLENBQUMsQ0FBQ1MsU0FBRixHQUFjUixDQUFDLEtBQUssSUFBTixHQUFhbEQsTUFBTSxDQUFDMkQsTUFBUCxDQUFjVCxDQUFkLENBQWIsSUFBaUNNLEVBQUUsQ0FBQ0UsU0FBSCxHQUFlUixDQUFDLENBQUNRLFNBQWpCLEVBQTRCLElBQUlGLEVBQUosRUFBN0QsQ0FBZDtJQUNIOztJQUVNLElBQUlJLE9BQVEsR0FBRyxvQkFBVztJQUM3QkEsRUFBQUEsT0FBUSxHQUFHNUQsTUFBTSxDQUFDNkQsTUFBUCxJQUFpQixTQUFTRCxRQUFULENBQWtCRSxDQUFsQixFQUFxQjtJQUM3QyxTQUFLLElBQUlDLENBQUosRUFBT0MsQ0FBQyxHQUFHLENBQVgsRUFBY0MsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQWpDLEVBQXlDSCxDQUFDLEdBQUdDLENBQTdDLEVBQWdERCxDQUFDLEVBQWpELEVBQXFEO0lBQ2pERCxNQUFBQSxDQUFDLEdBQUdHLFNBQVMsQ0FBQ0YsQ0FBRCxDQUFiOztJQUNBLFdBQUssSUFBSVgsQ0FBVCxJQUFjVSxDQUFkO0lBQWlCLFlBQUkvRCxNQUFNLENBQUMwRCxTQUFQLENBQWlCSixjQUFqQixDQUFnQ2MsSUFBaEMsQ0FBcUNMLENBQXJDLEVBQXdDVixDQUF4QyxDQUFKLEVBQWdEUyxDQUFDLENBQUNULENBQUQsQ0FBRCxHQUFPVSxDQUFDLENBQUNWLENBQUQsQ0FBUjtJQUFqRTtJQUNIOztJQUNELFdBQU9TLENBQVA7SUFDSCxHQU5EOztJQU9BLFNBQU9GLE9BQVEsQ0FBQ1MsS0FBVCxDQUFlLElBQWYsRUFBcUJILFNBQXJCLENBQVA7SUFDSCxDQVRNO0lBd0ZBLFNBQVNJLE1BQVQsQ0FBZ0JDLENBQWhCLEVBQW1CTixDQUFuQixFQUFzQjtJQUN6QixNQUFJTyxDQUFDLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixVQUFsQixJQUFnQ0YsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLFFBQVIsQ0FBekM7SUFDQSxNQUFJLENBQUNGLENBQUwsRUFBUSxPQUFPRCxDQUFQO0lBQ1IsTUFBSVAsQ0FBQyxHQUFHUSxDQUFDLENBQUNKLElBQUYsQ0FBT0csQ0FBUCxDQUFSO0lBQUEsTUFBbUJJLENBQW5CO0lBQUEsTUFBc0JDLEVBQUUsR0FBRyxFQUEzQjtJQUFBLE1BQStCdEMsQ0FBL0I7O0lBQ0EsTUFBSTtJQUNBLFdBQU8sQ0FBQzJCLENBQUMsS0FBSyxLQUFLLENBQVgsSUFBZ0JBLENBQUMsS0FBSyxDQUF2QixLQUE2QixDQUFDLENBQUNVLENBQUMsR0FBR1gsQ0FBQyxDQUFDYSxJQUFGLEVBQUwsRUFBZUMsSUFBcEQ7SUFBMERGLE1BQUFBLEVBQUUsQ0FBQ0csSUFBSCxDQUFRSixDQUFDLENBQUNLLEtBQVY7SUFBMUQ7SUFDSCxHQUZELENBR0EsT0FBT0MsS0FBUCxFQUFjO0lBQUUzQyxJQUFBQSxDQUFDLEdBQUc7SUFBRTJDLE1BQUFBLEtBQUssRUFBRUE7SUFBVCxLQUFKO0lBQXVCLEdBSHZDLFNBSVE7SUFDSixRQUFJO0lBQ0EsVUFBSU4sQ0FBQyxJQUFJLENBQUNBLENBQUMsQ0FBQ0csSUFBUixLQUFpQk4sQ0FBQyxHQUFHUixDQUFDLENBQUMsUUFBRCxDQUF0QixDQUFKLEVBQXVDUSxDQUFDLENBQUNKLElBQUYsQ0FBT0osQ0FBUDtJQUMxQyxLQUZELFNBR1E7SUFBRSxVQUFJMUIsQ0FBSixFQUFPLE1BQU1BLENBQUMsQ0FBQzJDLEtBQVI7SUFBZ0I7SUFDcEM7O0lBQ0QsU0FBT0wsRUFBUDtJQUNIO0FBRUQsSUFBTyxTQUFTTSxRQUFULEdBQW9CO0lBQ3ZCLE9BQUssSUFBSU4sRUFBRSxHQUFHLEVBQVQsRUFBYVosQ0FBQyxHQUFHLENBQXRCLEVBQXlCQSxDQUFDLEdBQUdFLFNBQVMsQ0FBQ0MsTUFBdkMsRUFBK0NILENBQUMsRUFBaEQ7SUFDSVksSUFBQUEsRUFBRSxHQUFHQSxFQUFFLENBQUNPLE1BQUgsQ0FBVWIsTUFBTSxDQUFDSixTQUFTLENBQUNGLENBQUQsQ0FBVixDQUFoQixDQUFMO0lBREo7O0lBRUEsU0FBT1ksRUFBUDtJQUNIOztJQzFJRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCQSxJQUFBLGFBQUE7SUFBQTtJQUFBLFlBQUE7SUE0QkUsV0FBQSxhQUFBLENBQVksT0FBWixFQUFvRDtJQUF4QyxRQUFBLE9BQUEsS0FBQSxLQUFBLENBQUEsRUFBQTtJQUFBLE1BQUEsT0FBQSxHQUF1QixFQUF2QjtJQUF3Qzs7SUFDbEQsU0FBSyxRQUFMLEdBQWdCLE9BQWhCO0lBQ0Q7O0lBN0JELEVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBVyxhQUFYLEVBQVcsWUFBWCxFQUFxQjthQUFyQixlQUFBO0lBQ0U7SUFDQTtJQUNBLGFBQU8sRUFBUDtJQUNELEtBSm9CO3dCQUFBOztJQUFBLEdBQXJCO0lBTUEsRUFBQSxNQUFBLENBQUEsY0FBQSxDQUFXLGFBQVgsRUFBVyxTQUFYLEVBQWtCO2FBQWxCLGVBQUE7SUFDRTtJQUNBO0lBQ0EsYUFBTyxFQUFQO0lBQ0QsS0FKaUI7d0JBQUE7O0lBQUEsR0FBbEI7SUFNQSxFQUFBLE1BQUEsQ0FBQSxjQUFBLENBQVcsYUFBWCxFQUFXLFNBQVgsRUFBa0I7YUFBbEIsZUFBQTtJQUNFO0lBQ0E7SUFDQSxhQUFPLEVBQVA7SUFDRCxLQUppQjt3QkFBQTs7SUFBQSxHQUFsQjtJQU1BLEVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBVyxhQUFYLEVBQVcsZ0JBQVgsRUFBeUI7YUFBekIsZUFBQTtJQUNFO0lBQ0E7SUFDQTtJQUNBLGFBQU8sRUFBUDtJQUNELEtBTHdCO3dCQUFBOztJQUFBLEdBQXpCOztJQWFBLEVBQUEsYUFBQSxDQUFBLFNBQUEsQ0FBQSxJQUFBLEdBQUEsWUFBQTtJQUVDLEdBRkQ7O0lBSUEsRUFBQSxhQUFBLENBQUEsU0FBQSxDQUFBLE9BQUEsR0FBQSxZQUFBO0lBRUMsR0FGRDs7SUFHRixTQUFBLGFBQUE7SUFBQyxDQXZDRCxFQUFBOztJQ3ZCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSxJQUFPLElBQU0sVUFBVSxHQUFHO0lBQ3hCLEVBQUEsT0FBTyxFQUFFLHFCQURlO0lBRXhCLEVBQUEsSUFBSSxFQUFFLGtCQUZrQjtJQUd4QixFQUFBLE9BQU8sRUFBRSxxQkFIZTtJQUl4QixFQUFBLFVBQVUsRUFBRSx3QkFKWTtJQUt4QixFQUFBLFdBQVcsRUFBRSx3QkFMVztJQU14QixFQUFBLE9BQU8sRUFBRTtJQU5lLENBQW5CO0FBU1AsSUFBTyxJQUFNLE9BQU8sR0FBRztJQUNyQixFQUFBLGdCQUFnQixFQUFFLHdCQURHO0lBRXJCLEVBQUEsZUFBZSxFQUFFLHFCQUZJO0lBR3JCLEVBQUEsWUFBWSxFQUFFLGtCQUhPO0lBSXJCLEVBQUEsWUFBWSxFQUFFLE9BSk87SUFLckIsRUFBQSxhQUFhLEVBQUUsbUJBTE07SUFNckIsRUFBQSxrQkFBa0IsRUFBRSx3QkFOQztJQU9yQixFQUFBLGdCQUFnQixFQUFFLHNCQVBHO0lBUXJCLEVBQUEsdUJBQXVCLEVBQUUsOEJBUko7SUFTckIsRUFBQSxjQUFjLEVBQUUsU0FUSztJQVVyQixFQUFBLFlBQVksRUFBRSxrQkFWTztJQVdyQixFQUFBLGFBQWEsRUFBRSxtQkFYTTtJQVlyQixFQUFBLGNBQWMsRUFBRSxvQkFaSztJQWFyQixFQUFBLCtCQUErQixFQUFFLENBQy9CLFVBRCtCLEVBRS9CLDBCQUYrQixFQUcvQixJQUgrQixDQUcxQixJQUgwQixDQWJaO0lBaUJyQixFQUFBLGdCQUFnQixFQUFFO0lBakJHLENBQWhCO0FBb0JQLElBQU8sSUFBTSxPQUFPLEdBQUc7SUFDckIsRUFBQSw4QkFBOEIsRUFBRSxFQURYO0lBRXJCLEVBQUEsNkJBQTZCLEVBQUU7SUFGVixDQUFoQjs7SUNwRFA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMkJBLElBQUEsbUJBQUE7SUFBQTtJQUFBLFVBQUEsTUFBQSxFQUFBO0lBQXlDLEVBQUFRLFNBQUEsQ0FBQSxtQkFBQSxFQUFBLE1BQUE7O0lBNEN2QyxXQUFBLG1CQUFBLENBQVksT0FBWixFQUErQztJQUEvQyxRQUFBLEtBQUEsR0FDRSxNQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsRUFBQUMsT0FBQSxDQUFBLEVBQUEsRUFBVSxtQkFBbUIsQ0FBQyxjQUE5QixFQUFpRCxPQUFqRCxDQUFBLEtBQTBELElBRDVEOztJQVRRLElBQUEsS0FBQSxDQUFBLE9BQUEsR0FBVSxLQUFWO0lBQ0EsSUFBQSxLQUFBLENBQUEsZUFBQSxHQUFrQixDQUFsQjtJQUNBLElBQUEsS0FBQSxDQUFBLGVBQUEsR0FBa0IsQ0FBbEI7SUFDQSxJQUFBLEtBQUEsQ0FBQSxZQUFBLEdBQWUsQ0FBZjtJQUNBLElBQUEsS0FBQSxDQUFBLGdCQUFBLEdBQW1CLE9BQU8sQ0FBQyxZQUEzQjtJQUNBLElBQUEsS0FBQSxDQUFBLGlCQUFBLEdBQW9CLE9BQU8sQ0FBQyxZQUE1QjtJQUNBLElBQUEsS0FBQSxDQUFBLGlCQUFBLEdBQW9CLElBQXBCO0lBQ0EsSUFBQSxLQUFBLENBQUEsa0JBQUEsR0FBcUIsS0FBckI7O0lBSVA7O0lBN0NELEVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBVyxtQkFBWCxFQUFXLFlBQVgsRUFBcUI7YUFBckIsZUFBQTtJQUNFLGFBQU8sVUFBUDtJQUNELEtBRm9CO3dCQUFBOztJQUFBLEdBQXJCO0lBSUEsRUFBQSxNQUFBLENBQUEsY0FBQSxDQUFXLG1CQUFYLEVBQVcsU0FBWCxFQUFrQjthQUFsQixlQUFBO0lBQ0UsYUFBTyxPQUFQO0lBQ0QsS0FGaUI7d0JBQUE7O0lBQUEsR0FBbEI7SUFJQSxFQUFBLE1BQUEsQ0FBQSxjQUFBLENBQVcsbUJBQVgsRUFBVyxTQUFYLEVBQWtCO2FBQWxCLGVBQUE7SUFDRSxhQUFPLE9BQVA7SUFDRCxLQUZpQjt3QkFBQTs7SUFBQSxHQUFsQjtJQUlBLEVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBVyxtQkFBWCxFQUFXLGdCQUFYLEVBQXlCO2FBQXpCLGVBQUE7SUFDRSxhQUFPO0lBQ0wsUUFBQSxZQUFZLEVBQUUsd0JBQUE7SUFBTSxpQkFBQSxTQUFBO0lBQVMsU0FEeEI7SUFFTCxRQUFBLFFBQVEsRUFBRSxvQkFBQTtJQUFNLGlCQUFBLFNBQUE7SUFBUyxTQUZwQjtJQUdMLFFBQUEsaUJBQWlCLEVBQUUsNkJBQUE7SUFBTSxpQkFBQSxLQUFBO0lBQUssU0FIekI7SUFJTCxRQUFBLGtCQUFrQixFQUFFLDhCQUFBO0lBQU0saUJBQUEsU0FBQTtJQUFTLFNBSjlCO0lBS0wsUUFBQSxrQkFBa0IsRUFBRSw4QkFBQTtJQUFNLGlCQUFBLEtBQUE7SUFBSyxTQUwxQjtJQU1MLFFBQUEsa0JBQWtCLEVBQUUsOEJBQUE7SUFBTSxpQkFBQSxFQUFBO0lBQUUsU0FOdkI7SUFPTCxRQUFBLFFBQVEsRUFBRSxvQkFBQTtJQUFNLGlCQUFBLEtBQUE7SUFBSyxTQVBoQjtJQVFMLFFBQUEsbUJBQW1CLEVBQUUsK0JBQUE7SUFBTSxpQkFBQSxLQUFBO0lBQUssU0FSM0I7SUFTTCxRQUFBLFlBQVksRUFBRSx3QkFBQTtJQUFNLGlCQUFBLFNBQUE7SUFBUyxTQVR4QjtJQVVMLFFBQUEsYUFBYSxFQUFFLHlCQUFBO0lBQU0saUJBQUEsU0FBQTtJQUFTLFNBVnpCO0lBV0wsUUFBQSxZQUFZLEVBQUUsd0JBQUE7SUFBTSxpQkFBQSxTQUFBO0lBQVMsU0FYeEI7SUFZTCxRQUFBLGFBQWEsRUFBRSx5QkFBQTtJQUFNLGlCQUFBLFNBQUE7SUFBUyxTQVp6QjtJQWFMLFFBQUEsWUFBWSxFQUFFLHdCQUFBO0lBQU0saUJBQUEsU0FBQTtJQUFTLFNBYnhCO0lBY0wsUUFBQSxlQUFlLEVBQUUsMkJBQUE7SUFBTSxpQkFBQSxTQUFBO0lBQVMsU0FkM0I7SUFlTCxRQUFBLFdBQVcsRUFBRSx1QkFBQTtJQUFNLGlCQUFBLFNBQUE7SUFBUyxTQWZ2QjtJQWdCTCxRQUFBLGNBQWMsRUFBRSwwQkFBQTtJQUFNLGlCQUFBLFNBQUE7SUFBUyxTQWhCMUI7SUFpQkwsUUFBQSxTQUFTLEVBQUUscUJBQUE7SUFBTSxpQkFBQSxTQUFBO0lBQVM7SUFqQnJCLE9BQVA7SUFtQkQsS0FwQndCO3dCQUFBOztJQUFBLEdBQXpCOztJQW1DQSxFQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLElBQUEsR0FBQSxZQUFBO0lBQ0UsUUFBSSxLQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLFVBQVUsQ0FBQyxPQUFsQyxDQUFKLEVBQWdEO0lBQzlDLFdBQUssbUJBQUwsQ0FBeUIsS0FBekI7SUFDRDtJQUNGLEdBSkQ7O0lBTUEsRUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxPQUFBLEdBQUEsWUFBQTtJQUNFLFFBQUksS0FBSyxPQUFULEVBQWtCO0lBQ2hCLFdBQUssS0FBTCxDQUFXLE9BQU8sQ0FBQyxjQUFuQjtJQUNEOztJQUVELFFBQUksS0FBSyxlQUFULEVBQTBCO0lBQ3hCLE1BQUEsWUFBWSxDQUFDLEtBQUssZUFBTixDQUFaO0lBQ0EsV0FBSyx3QkFBTDtJQUNEOztJQUVELFFBQUksS0FBSyxZQUFULEVBQXVCO0lBQ3JCLE1BQUEsb0JBQW9CLENBQUMsS0FBSyxZQUFOLENBQXBCO0lBQ0EsV0FBSyxZQUFMLEdBQW9CLENBQXBCO0lBQ0Q7SUFDRixHQWREOztJQWdCQSxFQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLElBQUEsR0FBQSxZQUFBO0lBQUEsUUFBQSxLQUFBLEdBQUEsSUFBQTs7SUFDRSxTQUFLLE9BQUwsR0FBZSxJQUFmO0lBQ0EsU0FBSyxRQUFMLENBQWMsYUFBZDtJQUNBLFNBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsVUFBVSxDQUFDLE9BQWxDLEVBSEY7O0lBTUUsU0FBSyxzQkFBTCxDQUE0QixZQUFBO0lBQzFCLE1BQUEsS0FBSSxDQUFDLFFBQUwsQ0FBYyxRQUFkLENBQXVCLFVBQVUsQ0FBQyxJQUFsQzs7SUFDQSxNQUFBLEtBQUksQ0FBQyxRQUFMLENBQWMsWUFBZCxDQUEyQixVQUFVLENBQUMsV0FBdEM7O0lBRUEsTUFBQSxLQUFJLENBQUMsTUFBTDs7SUFFQSxNQUFBLEtBQUksQ0FBQyxlQUFMLEdBQXVCLFVBQVUsQ0FBQyxZQUFBO0lBQ2hDLFFBQUEsS0FBSSxDQUFDLHdCQUFMOztJQUNBLFFBQUEsS0FBSSxDQUFDLFFBQUwsQ0FBYyxTQUFkOztJQUNBLFFBQUEsS0FBSSxDQUFDLFFBQUwsQ0FBYyxZQUFkO0lBQ0QsT0FKZ0MsRUFJOUIsT0FBTyxDQUFDLDZCQUpzQixDQUFqQztJQUtELEtBWEQ7SUFZRCxHQWxCRDs7SUFvQkEsRUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxLQUFBLEdBQUEsVUFBTSxNQUFOLEVBQWlCO0lBQWpCLFFBQUEsS0FBQSxHQUFBLElBQUE7O0lBQU0sUUFBQSxNQUFBLEtBQUEsS0FBQSxDQUFBLEVBQUE7SUFBQSxNQUFBLE1BQUEsR0FBQSxFQUFBO0lBQVc7O0lBQ2YsUUFBSSxDQUFDLEtBQUssT0FBVixFQUFtQjtJQUNqQjtJQUNBO0lBQ0Q7O0lBRUQsU0FBSyxPQUFMLEdBQWUsS0FBZjtJQUNBLFNBQUssUUFBTCxDQUFjLGFBQWQsQ0FBNEIsTUFBNUI7SUFDQSxTQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLFVBQVUsQ0FBQyxPQUFsQztJQUNBLFNBQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsVUFBVSxDQUFDLElBQXJDO0lBQ0EsU0FBSyxRQUFMLENBQWMsZUFBZCxDQUE4QixVQUFVLENBQUMsV0FBekM7SUFFQSxJQUFBLG9CQUFvQixDQUFDLEtBQUssZUFBTixDQUFwQjtJQUNBLFNBQUssZUFBTCxHQUF1QixDQUF2QjtJQUVBLElBQUEsWUFBWSxDQUFDLEtBQUssZUFBTixDQUFaO0lBQ0EsU0FBSyxlQUFMLEdBQXVCLFVBQVUsQ0FBQyxZQUFBO0lBQ2hDLE1BQUEsS0FBSSxDQUFDLFFBQUwsQ0FBYyxZQUFkOztJQUNBLE1BQUEsS0FBSSxDQUFDLHdCQUFMOztJQUNBLE1BQUEsS0FBSSxDQUFDLFFBQUwsQ0FBYyxZQUFkLENBQTJCLE1BQTNCO0lBQ0QsS0FKZ0MsRUFJOUIsT0FBTyxDQUFDLDhCQUpzQixDQUFqQztJQUtELEdBckJEOztJQXVCQSxFQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsR0FBQSxZQUFBO0lBQ0UsV0FBTyxLQUFLLE9BQVo7SUFDRCxHQUZEOztJQUlBLEVBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsa0JBQUEsR0FBQSxZQUFBO0lBQ0UsV0FBTyxLQUFLLGdCQUFaO0lBQ0QsR0FGRDs7SUFJQSxFQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLGtCQUFBLEdBQUEsVUFBbUIsTUFBbkIsRUFBaUM7SUFDL0IsU0FBSyxnQkFBTCxHQUF3QixNQUF4QjtJQUNELEdBRkQ7O0lBSUEsRUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxtQkFBQSxHQUFBLFlBQUE7SUFDRSxXQUFPLEtBQUssaUJBQVo7SUFDRCxHQUZEOztJQUlBLEVBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsbUJBQUEsR0FBQSxVQUFvQixNQUFwQixFQUFrQztJQUNoQyxTQUFLLGlCQUFMLEdBQXlCLE1BQXpCO0lBQ0QsR0FGRDs7SUFJQSxFQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLG1CQUFBLEdBQUEsWUFBQTtJQUNFLFdBQU8sS0FBSyxpQkFBWjtJQUNELEdBRkQ7O0lBSUEsRUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxtQkFBQSxHQUFBLFVBQW9CLFNBQXBCLEVBQXNDO0lBQ3BDLFNBQUssaUJBQUwsR0FBeUIsU0FBekI7SUFDRCxHQUZEOztJQUlBLEVBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxHQUFBLFlBQUE7SUFBQSxRQUFBLEtBQUEsR0FBQSxJQUFBOztJQUNFLFFBQUksS0FBSyxZQUFULEVBQXVCO0lBQ3JCLE1BQUEsb0JBQW9CLENBQUMsS0FBSyxZQUFOLENBQXBCO0lBQ0Q7O0lBQ0QsU0FBSyxZQUFMLEdBQW9CLHFCQUFxQixDQUFDLFlBQUE7SUFDeEMsTUFBQSxLQUFJLENBQUMsZUFBTDs7SUFDQSxNQUFBLEtBQUksQ0FBQyxZQUFMLEdBQW9CLENBQXBCO0lBQ0QsS0FId0MsQ0FBekM7SUFJRCxHQVJEOztJQVVBLEVBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsZUFBQSxHQUFBLFlBQUE7SUFDRSxRQUFJLEtBQUssaUJBQVQsRUFBNEI7SUFDMUIsV0FBSyxxQkFBTDtJQUNEOztJQUNELFNBQUssd0JBQUw7SUFDRCxHQUxEOztJQU9BLEVBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsaUJBQUEsR0FBQSxVQUFrQixHQUFsQixFQUFpRDtJQUMvQyxRQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSixLQUFhLE9BQTdCO0lBQ0EsUUFBTSxPQUFPLEdBQUksR0FBcUIsQ0FBQyxHQUF0QixLQUE4QixPQUE5QixJQUEwQyxHQUFxQixDQUFDLE9BQXRCLEtBQWtDLEVBQTdGO0lBQ0EsUUFBTSxPQUFPLEdBQUksR0FBcUIsQ0FBQyxHQUF0QixLQUE4QixPQUE5QixJQUEwQyxHQUFxQixDQUFDLE9BQXRCLEtBQWtDLEVBQTdGO0lBQ0EsUUFBTSxPQUFPLEdBQUcsS0FBSyxRQUFMLENBQWMsa0JBQWQsQ0FBaUMsR0FBRyxDQUFDLE1BQXJDLEVBQTZDLE9BQU8sQ0FBQyxjQUFyRCxDQUFoQjtJQUNBLFFBQU0sU0FBUyxHQUFHLENBQUMsS0FBSyxRQUFMLENBQWMsa0JBQWQsQ0FBaUMsR0FBRyxDQUFDLE1BQXJDLEVBQTZDLE9BQU8sQ0FBQywrQkFBckQsQ0FBbkIsQ0FMK0M7O0lBUS9DLFFBQUksT0FBTyxJQUFJLE9BQVgsSUFBc0IsS0FBSyxpQkFBTCxLQUEyQixFQUFyRCxFQUF5RDtJQUN2RCxXQUFLLEtBQUwsQ0FBVyxLQUFLLGlCQUFoQjtJQUNELEtBRkQsTUFFTyxJQUFJLE9BQU8sSUFBSSxPQUFYLElBQXNCLE9BQTFCLEVBQW1DO0lBQ3hDLFVBQU0sTUFBTSxHQUFHLEtBQUssUUFBTCxDQUFjLGtCQUFkLENBQWlDLEdBQWpDLENBQWY7O0lBQ0EsVUFBSSxNQUFKLEVBQVk7SUFDVixhQUFLLEtBQUwsQ0FBVyxNQUFYO0lBQ0QsT0FGRCxNQUVPLElBQUksT0FBTyxJQUFJLFNBQWYsRUFBMEI7SUFDL0IsYUFBSyxRQUFMLENBQWMsa0JBQWQ7SUFDRDtJQUNGO0lBQ0YsR0FsQkQ7O0lBb0JBLEVBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEscUJBQUEsR0FBQSxVQUFzQixHQUF0QixFQUF3QztJQUN0QyxRQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsR0FBSixLQUFZLFFBQVosSUFBd0IsR0FBRyxDQUFDLE9BQUosS0FBZ0IsRUFBekQ7O0lBQ0EsUUFBSSxRQUFRLElBQUksS0FBSyxnQkFBTCxLQUEwQixFQUExQyxFQUE4QztJQUM1QyxXQUFLLEtBQUwsQ0FBVyxLQUFLLGdCQUFoQjtJQUNEO0lBQ0YsR0FMRDs7SUFPUSxFQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLHdCQUFBLEdBQVIsWUFBQTtJQUNFLFNBQUssZUFBTCxHQUF1QixDQUF2QjtJQUNBLFNBQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsVUFBVSxDQUFDLE9BQXJDO0lBQ0EsU0FBSyxRQUFMLENBQWMsV0FBZCxDQUEwQixVQUFVLENBQUMsT0FBckM7SUFDRCxHQUpPO0lBTVI7Ozs7O0lBR1EsRUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxzQkFBQSxHQUFSLFVBQStCLFFBQS9CLEVBQW1EO0lBQW5ELFFBQUEsS0FBQSxHQUFBLElBQUE7O0lBQ0UsSUFBQSxvQkFBb0IsQ0FBQyxLQUFLLGVBQU4sQ0FBcEI7SUFDQSxTQUFLLGVBQUwsR0FBdUIscUJBQXFCLENBQUMsWUFBQTtJQUMzQyxNQUFBLEtBQUksQ0FBQyxlQUFMLEdBQXVCLENBQXZCO0lBQ0EsTUFBQSxZQUFZLENBQUMsS0FBSSxDQUFDLGVBQU4sQ0FBWjtJQUNBLE1BQUEsS0FBSSxDQUFDLGVBQUwsR0FBdUIsVUFBVSxDQUFDLFFBQUQsRUFBVyxDQUFYLENBQWpDO0lBQ0QsS0FKMkMsQ0FBNUM7SUFLRCxHQVBPOztJQVNBLEVBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEscUJBQUEsR0FBUixZQUFBO0lBQ0U7SUFDQSxTQUFLLFFBQUwsQ0FBYyxXQUFkLENBQTBCLFVBQVUsQ0FBQyxPQUFyQztJQUVBLFFBQU0saUJBQWlCLEdBQUcsS0FBSyxRQUFMLENBQWMsaUJBQWQsRUFBMUI7O0lBRUEsUUFBSSxpQkFBSixFQUF1QjtJQUNyQixXQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLFVBQVUsQ0FBQyxPQUFsQztJQUNEOztJQUVELFFBQUksaUJBQWlCLEtBQUssS0FBSyxrQkFBL0IsRUFBbUQ7SUFDakQsV0FBSyxRQUFMLENBQWMsY0FBZDtJQUNBLFdBQUssa0JBQUwsR0FBMEIsaUJBQTFCO0lBQ0Q7SUFDRixHQWRPOztJQWdCQSxFQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLHdCQUFBLEdBQVIsWUFBQTtJQUNFO0lBQ0EsU0FBSyxRQUFMLENBQWMsV0FBZCxDQUEwQixVQUFVLENBQUMsVUFBckM7O0lBQ0EsUUFBSSxLQUFLLFFBQUwsQ0FBYyxtQkFBZCxFQUFKLEVBQXlDO0lBQ3ZDLFdBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsVUFBVSxDQUFDLFVBQWxDO0lBQ0Q7SUFDRixHQU5POztJQU9WLFNBQUEsbUJBQUE7SUFBQyxDQWxPRCxDQUF5QyxhQUF6QyxDQUFBOztJQzNCQSxJQUFJQyxrQkFBa0IsR0FBRyxDQUN2QixPQUR1QixFQUV2QixRQUZ1QixFQUd2QixVQUh1QixFQUl2QixTQUp1QixFQUt2QixRQUx1QixFQU12QixZQU51QixFQU92QixpQkFQdUIsRUFRdkIsaUJBUnVCLEVBU3ZCLGtEQVR1QixDQUF6QjtJQVdBLElBQUlDLGlCQUFpQixHQUFHRCxrQkFBa0IsQ0FBQ0UsSUFBbkIsQ0FBd0IsR0FBeEIsQ0FBeEI7SUFFQSxJQUFJQyxPQUFPLEdBQUcsT0FBT0MsT0FBUCxLQUFtQixXQUFuQixHQUNWLFlBQVksRUFERixHQUVWQSxPQUFPLENBQUNoQyxTQUFSLENBQWtCK0IsT0FBbEIsSUFBNkJDLE9BQU8sQ0FBQ2hDLFNBQVIsQ0FBa0JpQyxpQkFBL0MsSUFBb0VELE9BQU8sQ0FBQ2hDLFNBQVIsQ0FBa0JrQyxxQkFGMUY7O0lBSUEsU0FBU0MsUUFBVCxDQUFrQkMsRUFBbEIsRUFBc0JDLE9BQXRCLEVBQStCO01BQzdCQSxPQUFPLEdBQUdBLE9BQU8sSUFBSSxFQUFyQjtVQUVJQyxlQUFlLEdBQUdGLEVBQUUsQ0FBQ0csYUFBSCxJQUFvQkgsRUFBMUM7VUFDSUksZ0JBQWdCLEdBQUcsRUFBdkI7VUFDSUMsZ0JBQWdCLEdBQUcsRUFBdkI7VUFFSUMscUJBQXFCLEdBQUcsSUFBSUMscUJBQUosQ0FBMEJMLGVBQTFCLENBQTVCO1VBQ0lNLFVBQVUsR0FBR1IsRUFBRSxDQUFDUyxnQkFBSCxDQUFvQmhCLGlCQUFwQixDQUFqQjs7VUFFSVEsT0FBTyxDQUFDUyxnQkFBWixFQUE4QjtZQUN4QmYsT0FBTyxDQUFDckIsSUFBUixDQUFhMEIsRUFBYixFQUFpQlAsaUJBQWpCLENBQUosRUFBeUM7VUFDdkNlLFVBQVUsR0FBRzVFLEtBQUssQ0FBQ2dDLFNBQU4sQ0FBZ0IrQyxLQUFoQixDQUFzQnBDLEtBQXRCLENBQTRCaUMsVUFBNUIsQ0FBYjtVQUNBQSxVQUFVLENBQUNJLE9BQVgsQ0FBbUJaLEVBQW5COzs7O1VBSUE5QixDQUFKLEVBQU8yQyxTQUFQLEVBQWtCQyxpQkFBbEI7O1dBQ0s1QyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdzQyxVQUFVLENBQUNuQyxNQUEzQixFQUFtQ0gsQ0FBQyxFQUFwQyxFQUF3QztRQUN0QzJDLFNBQVMsR0FBR0wsVUFBVSxDQUFDdEMsQ0FBRCxDQUF0QjtZQUVJLENBQUM2Qyw4QkFBOEIsQ0FBQ0YsU0FBRCxFQUFZUCxxQkFBWixDQUFuQyxFQUF1RTtRQUV2RVEsaUJBQWlCLEdBQUdFLFdBQVcsQ0FBQ0gsU0FBRCxDQUEvQjs7WUFDSUMsaUJBQWlCLEtBQUssQ0FBMUIsRUFBNkI7VUFDM0JWLGdCQUFnQixDQUFDbkIsSUFBakIsQ0FBc0I0QixTQUF0QjtTQURGLE1BRU87VUFDTFIsZ0JBQWdCLENBQUNwQixJQUFqQixDQUFzQjtZQUNwQmdDLGFBQWEsRUFBRS9DLENBREs7WUFFcEJnRCxRQUFRLEVBQUVKLGlCQUZVO1lBR3BCSyxJQUFJLEVBQUVOO1dBSFI7Ozs7VUFRQU8sYUFBYSxHQUFHZixnQkFBZ0IsQ0FDakNnQixJQURpQixDQUNaQyxvQkFEWSxFQUVqQkMsR0FGaUIsQ0FFYixVQUFTQyxDQUFULEVBQVk7ZUFBU0EsQ0FBQyxDQUFDTCxJQUFUO09BRkQsRUFHakI5QixNQUhpQixDQUdWZSxnQkFIVSxDQUFwQjthQUtPZ0IsYUFBUDs7O0lBR0ZyQixRQUFRLENBQUMwQixVQUFULEdBQXNCQSxVQUF0QjtJQUNBMUIsUUFBUSxDQUFDMkIsV0FBVCxHQUF1QkEsV0FBdkI7O0lBRUEsU0FBU1gsOEJBQVQsQ0FBd0NJLElBQXhDLEVBQThDYixxQkFBOUMsRUFBcUU7VUFFakUsQ0FBQ3FCLCtCQUErQixDQUFDUixJQUFELEVBQU9iLHFCQUFQLENBQWhDLElBQ0dzQixrQkFBa0IsQ0FBQ1QsSUFBRCxDQURyQixJQUVHSCxXQUFXLENBQUNHLElBQUQsQ0FBWCxHQUFvQixDQUh6QixFQUlFO2VBQ08sS0FBUDs7O2FBRUssSUFBUDs7O0lBR0YsU0FBU00sVUFBVCxDQUFvQk4sSUFBcEIsRUFBMEJiLHFCQUExQixFQUFpRDtVQUMzQyxDQUFDYSxJQUFMLEVBQVcsTUFBTSxJQUFJVSxLQUFKLENBQVUsa0JBQVYsQ0FBTjtVQUNQbEMsT0FBTyxDQUFDckIsSUFBUixDQUFhNkMsSUFBYixFQUFtQjFCLGlCQUFuQixNQUEwQyxLQUE5QyxFQUFxRCxPQUFPLEtBQVA7YUFDOUNzQiw4QkFBOEIsQ0FBQ0ksSUFBRCxFQUFPYixxQkFBUCxDQUFyQzs7O0lBR0YsU0FBU3FCLCtCQUFULENBQXlDUixJQUF6QyxFQUErQ2IscUJBQS9DLEVBQXNFO01BQ3BFQSxxQkFBcUIsR0FBR0EscUJBQXFCLElBQUksSUFBSUMscUJBQUosQ0FBMEJZLElBQUksQ0FBQ2hCLGFBQUwsSUFBc0JnQixJQUFoRCxDQUFqRDs7VUFFRUEsSUFBSSxDQUFDbEcsUUFBTCxJQUNHNkcsYUFBYSxDQUFDWCxJQUFELENBRGhCLElBRUdiLHFCQUFxQixDQUFDeUIsYUFBdEIsQ0FBb0NaLElBQXBDLENBSEwsRUFJRTtlQUNPLEtBQVA7OzthQUVLLElBQVA7OztJQUdGLElBQUlhLDBCQUEwQixHQUFHeEMsa0JBQWtCLENBQUNILE1BQW5CLENBQTBCLFFBQTFCLEVBQW9DSyxJQUFwQyxDQUF5QyxHQUF6QyxDQUFqQzs7SUFDQSxTQUFTZ0MsV0FBVCxDQUFxQlAsSUFBckIsRUFBMkJiLHFCQUEzQixFQUFrRDtVQUM1QyxDQUFDYSxJQUFMLEVBQVcsTUFBTSxJQUFJVSxLQUFKLENBQVUsa0JBQVYsQ0FBTjtVQUNQbEMsT0FBTyxDQUFDckIsSUFBUixDQUFhNkMsSUFBYixFQUFtQmEsMEJBQW5CLE1BQW1ELEtBQXZELEVBQThELE9BQU8sS0FBUDthQUN2REwsK0JBQStCLENBQUNSLElBQUQsRUFBT2IscUJBQVAsQ0FBdEM7OztJQUdGLFNBQVNVLFdBQVQsQ0FBcUJHLElBQXJCLEVBQTJCO1VBQ3JCYyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ2YsSUFBSSxDQUFDZ0IsWUFBTCxDQUFrQixVQUFsQixDQUFELEVBQWdDLEVBQWhDLENBQTNCO1VBQ0ksQ0FBQ0MsS0FBSyxDQUFDSCxZQUFELENBQVYsRUFBMEIsT0FBT0EsWUFBUCxDQUZEOzs7VUFLckJJLGlCQUFpQixDQUFDbEIsSUFBRCxDQUFyQixFQUE2QixPQUFPLENBQVA7YUFDdEJBLElBQUksQ0FBQ0QsUUFBWjs7O0lBR0YsU0FBU0ksb0JBQVQsQ0FBOEJFLENBQTlCLEVBQWlDcEUsQ0FBakMsRUFBb0M7YUFDM0JvRSxDQUFDLENBQUNOLFFBQUYsS0FBZTlELENBQUMsQ0FBQzhELFFBQWpCLEdBQTRCTSxDQUFDLENBQUNQLGFBQUYsR0FBa0I3RCxDQUFDLENBQUM2RCxhQUFoRCxHQUFnRU8sQ0FBQyxDQUFDTixRQUFGLEdBQWE5RCxDQUFDLENBQUM4RCxRQUF0Rjs7OztJQUlGLFNBQVNvQixJQUFULENBQWNDLElBQWQsRUFBb0JDLFNBQXBCLEVBQStCO1dBQ3hCLElBQUl0RSxDQUFDLEdBQUcsQ0FBUixFQUFXRyxNQUFNLEdBQUdrRSxJQUFJLENBQUNsRSxNQUE5QixFQUFzQ0gsQ0FBQyxHQUFHRyxNQUExQyxFQUFrREgsQ0FBQyxFQUFuRCxFQUF1RDtZQUNqRHNFLFNBQVMsQ0FBQ0QsSUFBSSxDQUFDckUsQ0FBRCxDQUFMLENBQWIsRUFBd0IsT0FBT3FFLElBQUksQ0FBQ3JFLENBQUQsQ0FBWDs7OztJQUk1QixTQUFTbUUsaUJBQVQsQ0FBMkJsQixJQUEzQixFQUFpQzthQUN4QkEsSUFBSSxDQUFDc0IsZUFBTCxLQUF5QixNQUFoQzs7O0lBR0YsU0FBU0MsT0FBVCxDQUFpQnZCLElBQWpCLEVBQXVCO2FBQ2RBLElBQUksQ0FBQ3dCLE9BQUwsS0FBaUIsT0FBeEI7OztJQUdGLFNBQVNiLGFBQVQsQ0FBdUJYLElBQXZCLEVBQTZCO2FBQ3BCdUIsT0FBTyxDQUFDdkIsSUFBRCxDQUFQLElBQWlCQSxJQUFJLENBQUNsRixJQUFMLEtBQWMsUUFBdEM7OztJQUdGLFNBQVMyRyxPQUFULENBQWlCekIsSUFBakIsRUFBdUI7YUFDZHVCLE9BQU8sQ0FBQ3ZCLElBQUQsQ0FBUCxJQUFpQkEsSUFBSSxDQUFDbEYsSUFBTCxLQUFjLE9BQXRDOzs7SUFHRixTQUFTMkYsa0JBQVQsQ0FBNEJULElBQTVCLEVBQWtDO2FBQ3pCeUIsT0FBTyxDQUFDekIsSUFBRCxDQUFQLElBQWlCLENBQUMwQixlQUFlLENBQUMxQixJQUFELENBQXhDOzs7SUFHRixTQUFTMkIsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7V0FDekIsSUFBSTdFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc2RSxLQUFLLENBQUMxRSxNQUExQixFQUFrQ0gsQ0FBQyxFQUFuQyxFQUF1QztZQUNqQzZFLEtBQUssQ0FBQzdFLENBQUQsQ0FBTCxDQUFTOEUsT0FBYixFQUFzQjtpQkFDYkQsS0FBSyxDQUFDN0UsQ0FBRCxDQUFaOzs7OztJQUtOLFNBQVMyRSxlQUFULENBQXlCMUIsSUFBekIsRUFBK0I7VUFDekIsQ0FBQ0EsSUFBSSxDQUFDL0gsSUFBVixFQUFnQixPQUFPLElBQVAsQ0FEYTs7O1VBSXpCNkosUUFBUSxHQUFHOUIsSUFBSSxDQUFDaEIsYUFBTCxDQUFtQk0sZ0JBQW5CLENBQW9DLCtCQUErQlUsSUFBSSxDQUFDL0gsSUFBcEMsR0FBMkMsSUFBL0UsQ0FBZjtVQUNJNEosT0FBTyxHQUFHRixlQUFlLENBQUNHLFFBQUQsQ0FBN0I7YUFDTyxDQUFDRCxPQUFELElBQVlBLE9BQU8sS0FBSzdCLElBQS9COzs7OztJQUtGLFNBQVNaLHFCQUFULENBQStCTCxlQUEvQixFQUFnRDtXQUN6Q2dELEdBQUwsR0FBV2hELGVBQVgsQ0FEOEM7Ozs7V0FLekNpRCxLQUFMLEdBQWEsRUFBYjs7Ozs7SUFLRjVDLHFCQUFxQixDQUFDM0MsU0FBdEIsQ0FBZ0N3RixjQUFoQyxHQUFpRCxTQUFTQSxjQUFULENBQXdCakMsSUFBeEIsRUFBOEJrQyxpQkFBOUIsRUFBaUQ7VUFDNUZsQyxJQUFJLENBQUNtQyxRQUFMLEtBQWtCQyxJQUFJLENBQUNDLFlBQTNCLEVBQXlDLE9BQU8sS0FBUCxDQUR1RDs7VUFJMUZDLE1BQU0sR0FBR25CLElBQUksQ0FBQyxLQUFLYSxLQUFOLEVBQWEsVUFBU08sSUFBVCxFQUFlO2VBQ3BDQSxJQUFJLEtBQUt2QyxJQUFoQjtPQURlLENBQWpCO1VBR0lzQyxNQUFKLEVBQVksT0FBT0EsTUFBTSxDQUFDLENBQUQsQ0FBYjtNQUVaSixpQkFBaUIsR0FBR0EsaUJBQWlCLElBQUksS0FBS0gsR0FBTCxDQUFTUyxXQUFULENBQXFCQyxnQkFBckIsQ0FBc0N6QyxJQUF0QyxDQUF6QztVQUVJMEMsTUFBTSxHQUFHLEtBQWI7O1VBRUlSLGlCQUFpQixDQUFDUyxPQUFsQixLQUE4QixNQUFsQyxFQUEwQztRQUN4Q0QsTUFBTSxHQUFHLElBQVQ7T0FERixNQUVPLElBQUkxQyxJQUFJLENBQUM0QyxVQUFULEVBQXFCO1FBQzFCRixNQUFNLEdBQUcsS0FBS1QsY0FBTCxDQUFvQmpDLElBQUksQ0FBQzRDLFVBQXpCLENBQVQ7OztXQUdHWixLQUFMLENBQVdsRSxJQUFYLENBQWdCLENBQUNrQyxJQUFELEVBQU8wQyxNQUFQLENBQWhCO2FBRU9BLE1BQVA7S0FyQko7O0lBd0JBdEQscUJBQXFCLENBQUMzQyxTQUF0QixDQUFnQ21FLGFBQWhDLEdBQWdELFNBQVNBLGFBQVQsQ0FBdUJaLElBQXZCLEVBQTZCO1VBQ3ZFQSxJQUFJLEtBQUssS0FBSytCLEdBQUwsQ0FBU2MsZUFBdEIsRUFBdUMsT0FBTyxLQUFQO1VBQ25DQyxhQUFhLEdBQUcsS0FBS2YsR0FBTCxDQUFTUyxXQUFULENBQXFCQyxnQkFBckIsQ0FBc0N6QyxJQUF0QyxDQUFwQjtVQUNJLEtBQUtpQyxjQUFMLENBQW9CakMsSUFBcEIsRUFBMEI4QyxhQUExQixDQUFKLEVBQThDLE9BQU8sSUFBUDthQUN2Q0EsYUFBYSxDQUFDQyxVQUFkLEtBQTZCLFFBQXBDO0tBSkY7O0lBT0FDLGNBQUEsR0FBaUJwRSxRQUFqQjs7SUN2TUFvRSxhQUFBLEdBQWlCQyxNQUFqQjtJQUVBLElBQUk1RyxjQUFjLEdBQUd0RCxNQUFNLENBQUMwRCxTQUFQLENBQWlCSixjQUF0Qzs7SUFFQSxTQUFTNEcsTUFBVCxHQUFrQjtVQUNWbEksTUFBTSxHQUFHLEVBQWI7O1dBRUssSUFBSWdDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdFLFNBQVMsQ0FBQ0MsTUFBOUIsRUFBc0NILENBQUMsRUFBdkMsRUFBMkM7WUFDbkNtRyxNQUFNLEdBQUdqRyxTQUFTLENBQUNGLENBQUQsQ0FBdEI7O2FBRUssSUFBSWhGLEdBQVQsSUFBZ0JtTCxNQUFoQixFQUF3QjtjQUNoQjdHLGNBQWMsQ0FBQ2MsSUFBZixDQUFvQitGLE1BQXBCLEVBQTRCbkwsR0FBNUIsQ0FBSixFQUFzQztZQUNsQ2dELE1BQU0sQ0FBQ2hELEdBQUQsQ0FBTixHQUFjbUwsTUFBTSxDQUFDbkwsR0FBRCxDQUFwQjs7Ozs7YUFLTGdELE1BQVA7OztJQ2RKLElBQUlvSSxnQkFBZ0IsR0FBSSxZQUFXO1VBQzdCQyxTQUFTLEdBQUcsRUFBaEI7YUFDTztRQUNMQyxZQUFZLEVBQUUsc0JBQVNDLElBQVQsRUFBZTtjQUN2QkYsU0FBUyxDQUFDbEcsTUFBVixHQUFtQixDQUF2QixFQUEwQjtnQkFDcEJxRyxVQUFVLEdBQUdILFNBQVMsQ0FBQ0EsU0FBUyxDQUFDbEcsTUFBVixHQUFtQixDQUFwQixDQUExQjs7Z0JBQ0lxRyxVQUFVLEtBQUtELElBQW5CLEVBQXlCO2NBQ3ZCQyxVQUFVLENBQUNDLEtBQVg7Ozs7Y0FJQUMsU0FBUyxHQUFHTCxTQUFTLENBQUNNLE9BQVYsQ0FBa0JKLElBQWxCLENBQWhCOztjQUNJRyxTQUFTLEtBQUssQ0FBQyxDQUFuQixFQUFzQjtZQUNwQkwsU0FBUyxDQUFDdEYsSUFBVixDQUFld0YsSUFBZjtXQURGLE1BRU87O1lBRUxGLFNBQVMsQ0FBQ08sTUFBVixDQUFpQkYsU0FBakIsRUFBNEIsQ0FBNUI7WUFDQUwsU0FBUyxDQUFDdEYsSUFBVixDQUFld0YsSUFBZjs7U0FmQztRQW1CTE0sY0FBYyxFQUFFLHdCQUFTTixJQUFULEVBQWU7Y0FDekJHLFNBQVMsR0FBR0wsU0FBUyxDQUFDTSxPQUFWLENBQWtCSixJQUFsQixDQUFoQjs7Y0FDSUcsU0FBUyxLQUFLLENBQUMsQ0FBbkIsRUFBc0I7WUFDcEJMLFNBQVMsQ0FBQ08sTUFBVixDQUFpQkYsU0FBakIsRUFBNEIsQ0FBNUI7OztjQUdFTCxTQUFTLENBQUNsRyxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO1lBQ3hCa0csU0FBUyxDQUFDQSxTQUFTLENBQUNsRyxNQUFWLEdBQW1CLENBQXBCLENBQVQsQ0FBZ0MyRyxPQUFoQzs7O09BMUJOO0tBRnFCLEVBQXZCOztJQWtDQSxTQUFTQyxTQUFULENBQW1CN0ssT0FBbkIsRUFBNEI4SyxXQUE1QixFQUF5QztVQUNuQ2hDLEdBQUcsR0FBR2lDLFFBQVY7VUFDSUMsU0FBUyxHQUNYLE9BQU9oTCxPQUFQLEtBQW1CLFFBQW5CLEdBQThCOEksR0FBRyxDQUFDbUMsYUFBSixDQUFrQmpMLE9BQWxCLENBQTlCLEdBQTJEQSxPQUQ3RDtVQUdJa0wsTUFBTSxHQUFHQyxTQUFLLENBQ2hCO1FBQ0VDLHVCQUF1QixFQUFFLElBRDNCO1FBRUVDLGlCQUFpQixFQUFFO09BSEwsRUFLaEJQLFdBTGdCLENBQWxCO1VBUUlRLEtBQUssR0FBRztRQUNWQyxpQkFBaUIsRUFBRSxJQURUO1FBRVZDLGdCQUFnQixFQUFFLElBRlI7UUFHVkMsMkJBQTJCLEVBQUUsSUFIbkI7UUFJVkMsdUJBQXVCLEVBQUUsSUFKZjtRQUtWQyxNQUFNLEVBQUUsS0FMRTtRQU1WQyxNQUFNLEVBQUU7T0FOVjtVQVNJdkIsSUFBSSxHQUFHO1FBQ1R3QixRQUFRLEVBQUVBLFFBREQ7UUFFVEMsVUFBVSxFQUFFQSxVQUZIO1FBR1R2QixLQUFLLEVBQUVBLEtBSEU7UUFJVEssT0FBTyxFQUFFQTtPQUpYO2FBT09QLElBQVA7O2VBRVN3QixRQUFULENBQWtCRSxlQUFsQixFQUFtQztZQUM3QlQsS0FBSyxDQUFDSyxNQUFWLEVBQWtCO1FBRWxCSyxtQkFBbUI7UUFFbkJWLEtBQUssQ0FBQ0ssTUFBTixHQUFlLElBQWY7UUFDQUwsS0FBSyxDQUFDTSxNQUFOLEdBQWUsS0FBZjtRQUNBTixLQUFLLENBQUNHLDJCQUFOLEdBQW9DM0MsR0FBRyxDQUFDbUQsYUFBeEM7WUFFSUMsVUFBVSxHQUNaSCxlQUFlLElBQUlBLGVBQWUsQ0FBQ0csVUFBbkMsR0FDSUgsZUFBZSxDQUFDRyxVQURwQixHQUVJaEIsTUFBTSxDQUFDZ0IsVUFIYjs7WUFJSUEsVUFBSixFQUFnQjtVQUNkQSxVQUFVOzs7UUFHWkMsWUFBWTtlQUNMOUIsSUFBUDs7O2VBR095QixVQUFULENBQW9CTSxpQkFBcEIsRUFBdUM7WUFDakMsQ0FBQ2QsS0FBSyxDQUFDSyxNQUFYLEVBQW1CO1FBRW5CVSxlQUFlO1FBQ2ZmLEtBQUssQ0FBQ0ssTUFBTixHQUFlLEtBQWY7UUFDQUwsS0FBSyxDQUFDTSxNQUFOLEdBQWUsS0FBZjtRQUVBMUIsZ0JBQWdCLENBQUNTLGNBQWpCLENBQWdDTixJQUFoQztZQUVJaUMsWUFBWSxHQUNkRixpQkFBaUIsSUFBSUEsaUJBQWlCLENBQUNFLFlBQWxCLEtBQW1DQyxTQUF4RCxHQUNJSCxpQkFBaUIsQ0FBQ0UsWUFEdEIsR0FFSXBCLE1BQU0sQ0FBQ29CLFlBSGI7O1lBSUlBLFlBQUosRUFBa0I7VUFDaEJBLFlBQVk7OztZQUdWRSxXQUFXLEdBQ2JKLGlCQUFpQixJQUFJQSxpQkFBaUIsQ0FBQ0ksV0FBbEIsS0FBa0NELFNBQXZELEdBQ0lILGlCQUFpQixDQUFDSSxXQUR0QixHQUVJdEIsTUFBTSxDQUFDRSx1QkFIYjs7WUFJSW9CLFdBQUosRUFBaUI7VUFDZkMsS0FBSyxDQUFDLFlBQVc7WUFDZkMsUUFBUSxDQUFDcEIsS0FBSyxDQUFDRywyQkFBUCxDQUFSO1dBREcsQ0FBTDs7O2VBS0twQixJQUFQOzs7ZUFHT0UsS0FBVCxHQUFpQjtZQUNYZSxLQUFLLENBQUNNLE1BQU4sSUFBZ0IsQ0FBQ04sS0FBSyxDQUFDSyxNQUEzQixFQUFtQztRQUNuQ0wsS0FBSyxDQUFDTSxNQUFOLEdBQWUsSUFBZjtRQUNBUyxlQUFlOzs7ZUFHUnpCLE9BQVQsR0FBbUI7WUFDYixDQUFDVSxLQUFLLENBQUNNLE1BQVAsSUFBaUIsQ0FBQ04sS0FBSyxDQUFDSyxNQUE1QixFQUFvQztRQUNwQ0wsS0FBSyxDQUFDTSxNQUFOLEdBQWUsS0FBZjtRQUNBTyxZQUFZOzs7ZUFHTEEsWUFBVCxHQUF3QjtZQUNsQixDQUFDYixLQUFLLENBQUNLLE1BQVgsRUFBbUIsT0FERzs7UUFJdEJ6QixnQkFBZ0IsQ0FBQ0UsWUFBakIsQ0FBOEJDLElBQTlCO1FBRUEyQixtQkFBbUIsR0FORzs7O1FBVXRCUyxLQUFLLENBQUMsWUFBVztVQUNmQyxRQUFRLENBQUNDLG1CQUFtQixFQUFwQixDQUFSO1NBREcsQ0FBTDtRQUdBN0QsR0FBRyxDQUFDOEQsZ0JBQUosQ0FBcUIsU0FBckIsRUFBZ0NDLFlBQWhDLEVBQThDLElBQTlDO1FBQ0EvRCxHQUFHLENBQUM4RCxnQkFBSixDQUFxQixXQUFyQixFQUFrQ0UsZ0JBQWxDLEVBQW9ELElBQXBEO1FBQ0FoRSxHQUFHLENBQUM4RCxnQkFBSixDQUFxQixZQUFyQixFQUFtQ0UsZ0JBQW5DLEVBQXFELElBQXJEO1FBQ0FoRSxHQUFHLENBQUM4RCxnQkFBSixDQUFxQixPQUFyQixFQUE4QkcsVUFBOUIsRUFBMEMsSUFBMUM7UUFDQWpFLEdBQUcsQ0FBQzhELGdCQUFKLENBQXFCLFNBQXJCLEVBQWdDSSxRQUFoQyxFQUEwQyxJQUExQztlQUVPM0MsSUFBUDs7O2VBR09nQyxlQUFULEdBQTJCO1lBQ3JCLENBQUNmLEtBQUssQ0FBQ0ssTUFBWCxFQUFtQjtRQUVuQjdDLEdBQUcsQ0FBQ21FLG1CQUFKLENBQXdCLFNBQXhCLEVBQW1DSixZQUFuQyxFQUFpRCxJQUFqRDtRQUNBL0QsR0FBRyxDQUFDbUUsbUJBQUosQ0FBd0IsV0FBeEIsRUFBcUNILGdCQUFyQyxFQUF1RCxJQUF2RDtRQUNBaEUsR0FBRyxDQUFDbUUsbUJBQUosQ0FBd0IsWUFBeEIsRUFBc0NILGdCQUF0QyxFQUF3RCxJQUF4RDtRQUNBaEUsR0FBRyxDQUFDbUUsbUJBQUosQ0FBd0IsT0FBeEIsRUFBaUNGLFVBQWpDLEVBQTZDLElBQTdDO1FBQ0FqRSxHQUFHLENBQUNtRSxtQkFBSixDQUF3QixTQUF4QixFQUFtQ0QsUUFBbkMsRUFBNkMsSUFBN0M7ZUFFTzNDLElBQVA7OztlQUdPNkMsZ0JBQVQsQ0FBMEJDLFVBQTFCLEVBQXNDO1lBQ2hDQyxXQUFXLEdBQUdsQyxNQUFNLENBQUNpQyxVQUFELENBQXhCO1lBQ0lwRyxJQUFJLEdBQUdxRyxXQUFYOztZQUNJLENBQUNBLFdBQUwsRUFBa0I7aUJBQ1QsSUFBUDs7O1lBRUUsT0FBT0EsV0FBUCxLQUF1QixRQUEzQixFQUFxQztVQUNuQ3JHLElBQUksR0FBRytCLEdBQUcsQ0FBQ21DLGFBQUosQ0FBa0JtQyxXQUFsQixDQUFQOztjQUNJLENBQUNyRyxJQUFMLEVBQVc7a0JBQ0gsSUFBSVUsS0FBSixDQUFVLE1BQU0wRixVQUFOLEdBQW1CLDJCQUE3QixDQUFOOzs7O1lBR0EsT0FBT0MsV0FBUCxLQUF1QixVQUEzQixFQUF1QztVQUNyQ3JHLElBQUksR0FBR3FHLFdBQVcsRUFBbEI7O2NBQ0ksQ0FBQ3JHLElBQUwsRUFBVztrQkFDSCxJQUFJVSxLQUFKLENBQVUsTUFBTTBGLFVBQU4sR0FBbUIseUJBQTdCLENBQU47Ozs7ZUFHR3BHLElBQVA7OztlQUdPNEYsbUJBQVQsR0FBK0I7WUFDekI1RixJQUFKOztZQUNJbUcsZ0JBQWdCLENBQUMsY0FBRCxDQUFoQixLQUFxQyxJQUF6QyxFQUErQztVQUM3Q25HLElBQUksR0FBR21HLGdCQUFnQixDQUFDLGNBQUQsQ0FBdkI7U0FERixNQUVPLElBQUlsQyxTQUFTLENBQUNxQyxRQUFWLENBQW1CdkUsR0FBRyxDQUFDbUQsYUFBdkIsQ0FBSixFQUEyQztVQUNoRGxGLElBQUksR0FBRytCLEdBQUcsQ0FBQ21ELGFBQVg7U0FESyxNQUVBO1VBQ0xsRixJQUFJLEdBQUd1RSxLQUFLLENBQUNDLGlCQUFOLElBQTJCMkIsZ0JBQWdCLENBQUMsZUFBRCxDQUFsRDs7O1lBR0UsQ0FBQ25HLElBQUwsRUFBVztnQkFDSCxJQUFJVSxLQUFKLENBQ0osb0VBREksQ0FBTjs7O2VBS0tWLElBQVA7T0FyS3FDOzs7O2VBMEs5QitGLGdCQUFULENBQTBCMUssQ0FBMUIsRUFBNkI7WUFDdkI0SSxTQUFTLENBQUNxQyxRQUFWLENBQW1CakwsQ0FBQyxDQUFDTixNQUFyQixDQUFKLEVBQWtDOztZQUM5Qm9KLE1BQU0sQ0FBQ29DLHVCQUFYLEVBQW9DO1VBQ2xDeEIsVUFBVSxDQUFDO1lBQ1RVLFdBQVcsRUFBRSxDQUFDN0csVUFBUSxDQUFDMkIsV0FBVCxDQUFxQmxGLENBQUMsQ0FBQ04sTUFBdkI7V0FETixDQUFWO1NBREYsTUFJTztVQUNMTSxDQUFDLENBQUNtTCxjQUFGOztPQWpMbUM7OztlQXNMOUJWLFlBQVQsQ0FBc0J6SyxDQUF0QixFQUF5Qjs7WUFFbkI0SSxTQUFTLENBQUNxQyxRQUFWLENBQW1CakwsQ0FBQyxDQUFDTixNQUFyQixLQUFnQ00sQ0FBQyxDQUFDTixNQUFGLFlBQW9CMEwsUUFBeEQsRUFBa0U7Ozs7UUFHbEVwTCxDQUFDLENBQUNxTCx3QkFBRjtRQUNBZixRQUFRLENBQUNwQixLQUFLLENBQUNJLHVCQUFOLElBQWlDaUIsbUJBQW1CLEVBQXJELENBQVI7OztlQUdPSyxRQUFULENBQWtCNUssQ0FBbEIsRUFBcUI7WUFDZjhJLE1BQU0sQ0FBQ0csaUJBQVAsS0FBNkIsS0FBN0IsSUFBc0NxQyxhQUFhLENBQUN0TCxDQUFELENBQXZELEVBQTREO1VBQzFEQSxDQUFDLENBQUNtTCxjQUFGO1VBQ0F6QixVQUFVOzs7O1lBR1I2QixVQUFVLENBQUN2TCxDQUFELENBQWQsRUFBbUI7VUFDakJ3TCxRQUFRLENBQUN4TCxDQUFELENBQVI7OztPQXRNbUM7Ozs7OztlQStNOUJ3TCxRQUFULENBQWtCeEwsQ0FBbEIsRUFBcUI7UUFDbkI0SixtQkFBbUI7O1lBQ2Y1SixDQUFDLENBQUN5TCxRQUFGLElBQWN6TCxDQUFDLENBQUNOLE1BQUYsS0FBYXdKLEtBQUssQ0FBQ0MsaUJBQXJDLEVBQXdEO1VBQ3REbkosQ0FBQyxDQUFDbUwsY0FBRjtVQUNBYixRQUFRLENBQUNwQixLQUFLLENBQUNFLGdCQUFQLENBQVI7Ozs7WUFHRSxDQUFDcEosQ0FBQyxDQUFDeUwsUUFBSCxJQUFlekwsQ0FBQyxDQUFDTixNQUFGLEtBQWF3SixLQUFLLENBQUNFLGdCQUF0QyxFQUF3RDtVQUN0RHBKLENBQUMsQ0FBQ21MLGNBQUY7VUFDQWIsUUFBUSxDQUFDcEIsS0FBSyxDQUFDQyxpQkFBUCxDQUFSOzs7OztlQUtLd0IsVUFBVCxDQUFvQjNLLENBQXBCLEVBQXVCO1lBQ2pCOEksTUFBTSxDQUFDb0MsdUJBQVgsRUFBb0M7WUFDaEN0QyxTQUFTLENBQUNxQyxRQUFWLENBQW1CakwsQ0FBQyxDQUFDTixNQUFyQixDQUFKLEVBQWtDO1FBQ2xDTSxDQUFDLENBQUNtTCxjQUFGO1FBQ0FuTCxDQUFDLENBQUNxTCx3QkFBRjs7O2VBR096QixtQkFBVCxHQUErQjtZQUN6QmhGLGFBQWEsR0FBR3JCLFVBQVEsQ0FBQ3FGLFNBQUQsQ0FBNUI7UUFDQU0sS0FBSyxDQUFDQyxpQkFBTixHQUEwQnZFLGFBQWEsQ0FBQyxDQUFELENBQWIsSUFBb0IyRixtQkFBbUIsRUFBakU7UUFDQXJCLEtBQUssQ0FBQ0UsZ0JBQU4sR0FDRXhFLGFBQWEsQ0FBQ0EsYUFBYSxDQUFDL0MsTUFBZCxHQUF1QixDQUF4QixDQUFiLElBQTJDMEksbUJBQW1CLEVBRGhFOzs7ZUFJT0QsUUFBVCxDQUFrQjNGLElBQWxCLEVBQXdCO1lBQ2xCQSxJQUFJLEtBQUsrQixHQUFHLENBQUNtRCxhQUFqQixFQUFnQzs7WUFDNUIsQ0FBQ2xGLElBQUQsSUFBUyxDQUFDQSxJQUFJLENBQUMrRyxLQUFuQixFQUEwQjtVQUN4QnBCLFFBQVEsQ0FBQ0MsbUJBQW1CLEVBQXBCLENBQVI7Ozs7UUFJRjVGLElBQUksQ0FBQytHLEtBQUw7UUFDQXhDLEtBQUssQ0FBQ0ksdUJBQU4sR0FBZ0MzRSxJQUFoQzs7WUFDSWdILGlCQUFpQixDQUFDaEgsSUFBRCxDQUFyQixFQUE2QjtVQUMzQkEsSUFBSSxDQUFDaUgsTUFBTDs7Ozs7SUFLTixTQUFTRCxpQkFBVCxDQUEyQmhILElBQTNCLEVBQWlDO2FBRTdCQSxJQUFJLENBQUN3QixPQUFMLElBQ0F4QixJQUFJLENBQUN3QixPQUFMLENBQWEwRixXQUFiLE9BQStCLE9BRC9CLElBRUEsT0FBT2xILElBQUksQ0FBQ2lILE1BQVosS0FBdUIsVUFIekI7OztJQU9GLFNBQVNOLGFBQVQsQ0FBdUJ0TCxDQUF2QixFQUEwQjthQUNqQkEsQ0FBQyxDQUFDdEQsR0FBRixLQUFVLFFBQVYsSUFBc0JzRCxDQUFDLENBQUN0RCxHQUFGLEtBQVUsS0FBaEMsSUFBeUNzRCxDQUFDLENBQUM4TCxPQUFGLEtBQWMsRUFBOUQ7OztJQUdGLFNBQVNQLFVBQVQsQ0FBb0J2TCxDQUFwQixFQUF1QjthQUNkQSxDQUFDLENBQUN0RCxHQUFGLEtBQVUsS0FBVixJQUFtQnNELENBQUMsQ0FBQzhMLE9BQUYsS0FBYyxDQUF4Qzs7O0lBR0YsU0FBU3pCLEtBQVQsQ0FBZTBCLEVBQWYsRUFBbUI7YUFDVkMsVUFBVSxDQUFDRCxFQUFELEVBQUssQ0FBTCxDQUFqQjs7O0lBR0ZwRSxlQUFBLEdBQWlCYyxTQUFqQjs7Ozs7OztJQ25UQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSxJQU9NLFNBQVUsdUJBQVYsQ0FDRixTQURFLEVBRUYsZ0JBRkUsRUFHRixjQUhFLEVBRzBDO0lBRDVDLE1BQUEsZ0JBQUEsS0FBQSxLQUFBLENBQUEsRUFBQTtJQUFBLElBQUEsZ0JBQUEsR0FBOEMsZUFBOUM7SUFBcUc7O0lBR3ZHLFNBQU8sZ0JBQWdCLENBQUMsU0FBRCxFQUFZO0lBQ2pDLElBQUEsdUJBQXVCLEVBQUUsSUFEUTtJQUVqQyxJQUFBLGlCQUFpQixFQUFFLEtBRmM7SUFHakMsSUFBQSxZQUFZLEVBQUU7SUFIbUIsR0FBWixDQUF2QjtJQUtEO0FBRUQsSUFBTSxTQUFVLFlBQVYsQ0FBdUIsRUFBdkIsRUFBNkM7SUFDakQsU0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQUgsR0FBa0IsRUFBRSxDQUFDLFlBQXhCLEdBQXVDLEtBQWhEO0lBQ0Q7QUFFRCxJQUFNLFNBQVUsaUJBQVYsQ0FBNEIsR0FBNUIsRUFBOEM7SUFDbEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFKLEVBQWI7SUFDQSxLQUFHLE9BQUgsQ0FBVyxJQUFYLENBQWdCLEdBQWhCLEVBQXFCLFVBQUMsRUFBRCxFQUFnQjtJQUFLLFdBQUEsSUFBSSxDQUFDLEdBQUwsQ0FBUyxFQUFFLENBQVgsU0FBQSxDQUFBO0lBQXNCLEdBQWhFO0lBQ0EsU0FBTyxJQUFJLENBQUMsSUFBTCxHQUFZLENBQW5CO0lBQ0Q7O0lDMUJEOzs7O0lBSUEsSUFBSSxxQkFBSjtJQUVBOzs7OztJQUlBLElBQUksZ0JBQUo7O0lBRUEsU0FBUyxzQkFBVCxDQUFnQyxTQUFoQyxFQUFpRDtJQUMvQztJQUNBO0lBQ0EsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQTNCO0lBQ0EsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtJQUNBLEVBQUEsSUFBSSxDQUFDLFNBQUwsR0FBaUIsdUNBQWpCO0lBQ0EsRUFBQSxRQUFRLENBQUMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFOK0M7SUFTL0M7SUFDQTtJQUNBOztJQUNBLE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxnQkFBVixDQUEyQixJQUEzQixDQUF0QjtJQUNBLE1BQU0sZUFBZSxHQUFHLGFBQWEsS0FBSyxJQUFsQixJQUEwQixhQUFhLENBQUMsY0FBZCxLQUFpQyxPQUFuRjtJQUNBLEVBQUEsSUFBSSxDQUFDLE1BQUw7SUFDQSxTQUFPLGVBQVA7SUFDRDs7QUFFRCxJQUFNLFNBQVUsb0JBQVYsQ0FBK0IsU0FBL0IsRUFBa0QsWUFBbEQsRUFBc0U7SUFBcEIsTUFBQSxZQUFBLEtBQUEsS0FBQSxDQUFBLEVBQUE7SUFBQSxJQUFBLFlBQUEsR0FBQSxLQUFBO0lBQW9COztJQUNuRSxNQUFBLEdBQUEsR0FBQSxTQUFBLENBQUEsR0FBQTtJQUNQLE1BQUksZUFBZSxHQUFHLHFCQUF0Qjs7SUFDQSxNQUFJLE9BQU8scUJBQVAsS0FBaUMsU0FBakMsSUFBOEMsQ0FBQyxZQUFuRCxFQUFpRTtJQUMvRCxXQUFPLHFCQUFQO0lBQ0Q7O0lBRUQsTUFBTSx1QkFBdUIsR0FBRyxHQUFHLElBQUksT0FBTyxHQUFHLENBQUMsUUFBWCxLQUF3QixVQUEvRDs7SUFDQSxNQUFJLENBQUMsdUJBQUwsRUFBOEI7SUFDNUIsV0FBTyxLQUFQO0lBQ0Q7O0lBRUQsTUFBTSx5QkFBeUIsR0FBRyxHQUFHLENBQUMsUUFBSixDQUFhLFlBQWIsRUFBMkIsS0FBM0IsQ0FBbEMsQ0FaMEU7SUFjMUU7O0lBQ0EsTUFBTSxpQ0FBaUMsR0FDbkMsR0FBRyxDQUFDLFFBQUosQ0FBYSxtQkFBYixLQUNBLEdBQUcsQ0FBQyxRQUFKLENBQWEsT0FBYixFQUFzQixXQUF0QixDQUZKOztJQUtBLE1BQUkseUJBQXlCLElBQUksaUNBQWpDLEVBQW9FO0lBQ2xFLElBQUEsZUFBZSxHQUFHLENBQUMsc0JBQXNCLENBQUMsU0FBRCxDQUF6QztJQUNELEdBRkQsTUFFTztJQUNMLElBQUEsZUFBZSxHQUFHLEtBQWxCO0lBQ0Q7O0lBRUQsTUFBSSxDQUFDLFlBQUwsRUFBbUI7SUFDakIsSUFBQSxxQkFBcUIsR0FBRyxlQUF4QjtJQUNEOztJQUNELFNBQU8sZUFBUDtJQUNEO0lBRUQ7Ozs7O0FBSUEsSUFBTSxTQUFVLFlBQVYsQ0FBdUIsU0FBdkIsRUFBbUQsWUFBbkQsRUFBdUU7SUFBaEQsTUFBQSxTQUFBLEtBQUEsS0FBQSxDQUFBLEVBQUE7SUFBQSxJQUFBLFNBQUEsR0FBQSxNQUFBO0lBQTBCOztJQUFFLE1BQUEsWUFBQSxLQUFBLEtBQUEsQ0FBQSxFQUFBO0lBQUEsSUFBQSxZQUFBLEdBQUEsS0FBQTtJQUFvQjs7SUFFM0UsTUFBSSxnQkFBZ0IsS0FBSyxTQUFyQixJQUFrQyxZQUF0QyxFQUFvRDtJQUNsRCxRQUFJLGFBQVcsR0FBRyxLQUFsQjs7SUFDQSxRQUFJO0lBQ0YsTUFBQSxTQUFTLENBQUMsUUFBVixDQUFtQixnQkFBbkIsQ0FBb0MsTUFBcEMsRUFBNEMsWUFBQTtJQUFNLGVBQUEsU0FBQTtJQUFTLE9BQTNELEVBQTZEO0lBQzNELFlBQUksT0FBSixHQUFXO0lBQ1QsVUFBQSxhQUFXLEdBQUcsSUFBZDtJQUNBLGlCQUFPLGFBQVA7SUFDRDs7SUFKMEQsT0FBN0Q7SUFNRCxLQVBELENBT0UsT0FBTyxDQUFQLEVBQVUsRUFUc0M7OztJQVlsRCxJQUFBLGdCQUFnQixHQUFHLGFBQW5CO0lBQ0Q7O0lBRUQsU0FBTyxnQkFBZ0IsR0FBRztJQUFDLElBQUEsT0FBTyxFQUFFO0lBQVYsR0FBSCxHQUE2QyxLQUFwRTtJQUNEO0FBRUQsSUFBTSxTQUFVLHdCQUFWLENBQW1DLEdBQW5DLEVBQTJELFVBQTNELEVBQXVGLFVBQXZGLEVBQTZHO0lBRWpILE1BQUksQ0FBQyxHQUFMLEVBQVU7SUFDUixXQUFPO0lBQUMsTUFBQSxDQUFDLEVBQUUsQ0FBSjtJQUFPLE1BQUEsQ0FBQyxFQUFFO0lBQVYsS0FBUDtJQUNEOztJQUNNLE1BQUEsQ0FBQSxHQUFBLFVBQUEsQ0FBQSxDQUFBO0lBQUEsTUFBRyxDQUFBLEdBQUEsVUFBQSxDQUFBLENBQUg7SUFDUCxNQUFNLFNBQVMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQWpDO0lBQ0EsTUFBTSxTQUFTLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFqQztJQUVBLE1BQUksV0FBSjtJQUNBLE1BQUksV0FBSixDQVZpSDs7SUFZakgsTUFBSSxHQUFHLENBQUMsSUFBSixLQUFhLFlBQWpCLEVBQStCO0lBQzdCLFFBQU0sVUFBVSxHQUFHLEdBQW5CO0lBQ0EsSUFBQSxXQUFXLEdBQUcsVUFBVSxDQUFDLGNBQVgsQ0FBMEIsQ0FBMUIsRUFBNkIsS0FBN0IsR0FBcUMsU0FBbkQ7SUFDQSxJQUFBLFdBQVcsR0FBRyxVQUFVLENBQUMsY0FBWCxDQUEwQixDQUExQixFQUE2QixLQUE3QixHQUFxQyxTQUFuRDtJQUNELEdBSkQsTUFJTztJQUNMLFFBQU0sVUFBVSxHQUFHLEdBQW5CO0lBQ0EsSUFBQSxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQVgsR0FBbUIsU0FBakM7SUFDQSxJQUFBLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBWCxHQUFtQixTQUFqQztJQUNEOztJQUVELFNBQU87SUFBQyxJQUFBLENBQUMsRUFBRSxXQUFKO0lBQWlCLElBQUEsQ0FBQyxFQUFFO0lBQXBCLEdBQVA7SUFDRDs7SUNySUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMEJBLElBQUEsWUFBQTtJQUFBO0lBQUEsWUFBQTtJQVlFLFdBQUEsWUFBQSxDQUNJLElBREosRUFFSSxVQUZKLEVBRStCO0lBQzNCLFFBQUEsSUFBQSxHQUFBLEVBQUE7O2FBQUEsSUFBQSxFQUFBLEdBQUEsR0FBQSxFQUFBLEdBQUEsU0FBQSxDQUFBLFFBQUEsRUFBQSxJQUF1QjtJQUF2QixNQUFBLElBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBQTs7O0lBRUYsU0FBSyxLQUFMLEdBQWEsSUFBYjtJQUNBLFNBQUssVUFBTCxDQUFlLEtBQWYsQ0FBQSxJQUFBLEVBQUl3RCxRQUFBLENBQWUsSUFBZixDQUFKLEVBSjZCO0lBTTdCOztJQUNBLFNBQUssV0FBTCxHQUFtQixVQUFVLEtBQUssU0FBZixHQUEyQixLQUFLLG9CQUFMLEVBQTNCLEdBQXlELFVBQTVFO0lBQ0EsU0FBSyxXQUFMLENBQWlCLElBQWpCO0lBQ0EsU0FBSyxrQkFBTDtJQUNEOztJQXZCTSxFQUFBLFlBQUEsQ0FBQSxRQUFBLEdBQVAsVUFBZ0IsSUFBaEIsRUFBNkI7SUFDM0I7SUFDQTtJQUNBO0lBQ0E7SUFDQSxXQUFPLElBQUksWUFBSixDQUFpQixJQUFqQixFQUF1QixJQUFJLGFBQUosQ0FBa0IsRUFBbEIsQ0FBdkIsQ0FBUDtJQUNELEdBTk07SUF5QlA7OztJQUNBLEVBQUEsWUFBQSxDQUFBLFNBQUEsQ0FBQSxVQUFBLEdBQUEsWUFBQTtJQUFXLFFBQUEsS0FBQSxHQUFBLEVBQUE7O2FBQUEsSUFBQSxFQUFBLEdBQUEsR0FBQSxFQUFBLEdBQUEsU0FBQSxDQUFBLFFBQUEsRUFBQSxJQUF3QjtJQUF4QixNQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUEsR0FBQSxTQUFBLENBQUEsRUFBQSxDQUFBO1NBQVg7SUFFRTtJQUNBOztJQUNELEdBSkQ7O0lBTUEsRUFBQSxZQUFBLENBQUEsU0FBQSxDQUFBLG9CQUFBLEdBQUEsWUFBQTtJQUNFO0lBQ0E7SUFDQSxVQUFNLElBQUksS0FBSixDQUFVLG1GQUNaLGtCQURFLENBQU47SUFFRCxHQUxEOztJQU9BLEVBQUEsWUFBQSxDQUFBLFNBQUEsQ0FBQSxrQkFBQSxHQUFBLFlBQUE7SUFFRTtJQUNBO0lBQ0E7SUFDRCxHQUxEOztJQU9BLEVBQUEsWUFBQSxDQUFBLFNBQUEsQ0FBQSxPQUFBLEdBQUEsWUFBQTtJQUNFO0lBQ0E7SUFDQSxTQUFLLFdBQUwsQ0FBaUIsT0FBakI7SUFDRCxHQUpEOztJQVlBLEVBQUEsWUFBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBLEdBQUEsVUFBTyxPQUFQLEVBQXdCLE9BQXhCLEVBQThDO0lBQzVDLFNBQUssS0FBTCxDQUFXLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLE9BQXJDO0lBQ0QsR0FGRDs7SUFVQSxFQUFBLFlBQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxHQUFBLFVBQVMsT0FBVCxFQUEwQixPQUExQixFQUFnRDtJQUM5QyxTQUFLLEtBQUwsQ0FBVyxtQkFBWCxDQUErQixPQUEvQixFQUF3QyxPQUF4QztJQUNELEdBRkQ7SUFJQTs7Ozs7SUFHQSxFQUFBLFlBQUEsQ0FBQSxTQUFBLENBQUEsSUFBQSxHQUFBLFVBQXVCLE9BQXZCLEVBQXdDLE9BQXhDLEVBQW9ELFlBQXBELEVBQXdFO0lBQXBCLFFBQUEsWUFBQSxLQUFBLEtBQUEsQ0FBQSxFQUFBO0lBQUEsTUFBQSxZQUFBLEdBQUEsS0FBQTtJQUFvQjs7SUFDdEUsUUFBSSxHQUFKOztJQUNBLFFBQUksT0FBTyxXQUFQLEtBQXVCLFVBQTNCLEVBQXVDO0lBQ3JDLE1BQUEsR0FBRyxHQUFHLElBQUksV0FBSixDQUFtQixPQUFuQixFQUE0QjtJQUNoQyxRQUFBLE9BQU8sRUFBRSxZQUR1QjtJQUVoQyxRQUFBLE1BQU0sRUFBRTtJQUZ3QixPQUE1QixDQUFOO0lBSUQsS0FMRCxNQUtPO0lBQ0wsTUFBQSxHQUFHLEdBQUcsUUFBUSxDQUFDLFdBQVQsQ0FBcUIsYUFBckIsQ0FBTjtJQUNBLE1BQUEsR0FBRyxDQUFDLGVBQUosQ0FBb0IsT0FBcEIsRUFBNkIsWUFBN0IsRUFBMkMsS0FBM0MsRUFBa0QsT0FBbEQ7SUFDRDs7SUFFRCxTQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLEdBQXpCO0lBQ0QsR0FiRDs7SUFjRixTQUFBLFlBQUE7SUFBQyxDQTFGRCxFQUFBOztJQzFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1QkE7Ozs7QUFLQSxJQUFNLFNBQVUsT0FBVixDQUFrQixPQUFsQixFQUFvQyxRQUFwQyxFQUFvRDtJQUN4RCxNQUFJLE9BQU8sQ0FBQyxPQUFaLEVBQXFCO0lBQ25CLFdBQU8sT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsUUFBaEIsQ0FBUDtJQUNEOztJQUVELE1BQUksRUFBRSxHQUFtQixPQUF6Qjs7SUFDQSxTQUFPLEVBQVAsRUFBVztJQUNULFFBQUk5SSxTQUFPLENBQUMsRUFBRCxFQUFLLFFBQUwsQ0FBWCxFQUEyQjtJQUN6QixhQUFPLEVBQVA7SUFDRDs7SUFDRCxJQUFBLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBUjtJQUNEOztJQUNELFNBQU8sSUFBUDtJQUNEO0FBRUQsSUFBTSxTQUFVQSxTQUFWLENBQWtCLE9BQWxCLEVBQW9DLFFBQXBDLEVBQW9EO0lBQ3hELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxPQUFSLElBQ2YsT0FBTyxDQUFDLHFCQURPLElBRWYsT0FBTyxDQUFDLGlCQUZmO0lBR0EsU0FBTyxhQUFhLENBQUMsSUFBZCxDQUFtQixPQUFuQixFQUE0QixRQUE1QixDQUFQO0lBQ0Q7O0lDaEREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBLElBQU8sSUFBTStJLFlBQVUsR0FBRztJQUN4QjtJQUNBO0lBQ0E7SUFDQSxFQUFBLFVBQVUsRUFBRSx5Q0FKWTtJQUt4QixFQUFBLGFBQWEsRUFBRSw0Q0FMUztJQU14QixFQUFBLGVBQWUsRUFBRSw4Q0FOTztJQU94QixFQUFBLElBQUksRUFBRSxxQkFQa0I7SUFReEIsRUFBQSxTQUFTLEVBQUU7SUFSYSxDQUFuQjtBQVdQLElBQU8sSUFBTUMsU0FBTyxHQUFHO0lBQ3JCLEVBQUEsWUFBWSxFQUFFLHVCQURPO0lBRXJCLEVBQUEsV0FBVyxFQUFFLHNCQUZRO0lBR3JCLEVBQUEsb0JBQW9CLEVBQUUsK0JBSEQ7SUFJckIsRUFBQSxzQkFBc0IsRUFBRSxpQ0FKSDtJQUtyQixFQUFBLFFBQVEsRUFBRSxtQkFMVztJQU1yQixFQUFBLE9BQU8sRUFBRTtJQU5ZLENBQWhCO0FBU1AsSUFBTyxJQUFNQyxTQUFPLEdBQUc7SUFDckIsRUFBQSx1QkFBdUIsRUFBRSxHQURKO0lBRXJCLEVBQUEsa0JBQWtCLEVBQUUsR0FGQztJQUdyQixFQUFBLG9CQUFvQixFQUFFLEdBSEQ7SUFJckIsRUFBQSxPQUFPLEVBQUUsRUFKWTtJQUtyQixFQUFBLFlBQVksRUFBRTtJQUxPLENBQWhCOztJQzNDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvREEsSUFBTSxzQkFBc0IsR0FBMEIsQ0FDcEQsWUFEb0QsRUFDdEMsYUFEc0MsRUFDdkIsV0FEdUIsRUFDVixTQURVLENBQXREOztJQUtBLElBQU0sZ0NBQWdDLEdBQTRCLENBQ2hFLFVBRGdFLEVBQ3BELFdBRG9ELEVBQ3ZDLFNBRHVDLEVBQzVCLGFBRDRCLENBQWxFOztJQUtBLElBQUksZ0JBQWdCLEdBQThCLEVBQWxEOztJQUVBLElBQUEsbUJBQUE7SUFBQTtJQUFBLFVBQUEsTUFBQSxFQUFBO0lBQXlDLEVBQUF0SixTQUFBLENBQUEsbUJBQUEsRUFBQSxNQUFBOztJQXNEdkMsV0FBQSxtQkFBQSxDQUFZLE9BQVosRUFBK0M7SUFBL0MsUUFBQSxLQUFBLEdBQ0UsTUFBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLEVBQUFDLE9BQUEsQ0FBQSxFQUFBLEVBQVUsbUJBQW1CLENBQUMsY0FBOUIsRUFBaUQsT0FBakQsQ0FBQSxLQUEwRCxJQUQ1RDs7SUFwQlEsSUFBQSxLQUFBLENBQUEsNEJBQUEsR0FBK0IsS0FBL0I7SUFFQSxJQUFBLEtBQUEsQ0FBQSxnQkFBQSxHQUFtQixDQUFuQjtJQUNBLElBQUEsS0FBQSxDQUFBLDJCQUFBLEdBQThCLENBQTlCO0lBQ0EsSUFBQSxLQUFBLENBQUEsUUFBQSxHQUFXLEdBQVg7SUFDQSxJQUFBLEtBQUEsQ0FBQSxNQUFBLEdBQVM7SUFBQyxNQUFBLEtBQUssRUFBRSxDQUFSO0lBQVcsTUFBQSxNQUFNLEVBQUU7SUFBbkIsS0FBVDtJQUNBLElBQUEsS0FBQSxDQUFBLFlBQUEsR0FBZSxDQUFmO0lBQ0EsSUFBQSxLQUFBLENBQUEsWUFBQSxHQUFlLENBQWY7SUFDQSxJQUFBLEtBQUEsQ0FBQSxVQUFBLEdBQWEsQ0FBYjtJQUNBLElBQUEsS0FBQSxDQUFBLGdCQUFBLEdBQWdDO0lBQUMsTUFBQSxJQUFJLEVBQUUsQ0FBUDtJQUFVLE1BQUEsR0FBRyxFQUFFO0lBQWYsS0FBaEM7SUFjTixJQUFBLEtBQUksQ0FBQyxnQkFBTCxHQUF3QixLQUFJLENBQUMsdUJBQUwsRUFBeEI7O0lBRUEsSUFBQSxLQUFJLENBQUMsd0JBQUwsR0FBZ0MsWUFBQTtJQUM5QixNQUFBLEtBQUksQ0FBQyw0QkFBTCxHQUFvQyxJQUFwQzs7SUFDQSxNQUFBLEtBQUksQ0FBQyw4QkFBTDtJQUNELEtBSEQ7O0lBSUEsSUFBQSxLQUFJLENBQUMsZ0JBQUwsR0FBd0IsVUFBQyxDQUFELEVBQUU7SUFBSyxhQUFBLEtBQUksQ0FBQyxTQUFMLENBQUEsQ0FBQSxDQUFBO0lBQWlCLEtBQWhEOztJQUNBLElBQUEsS0FBSSxDQUFDLGtCQUFMLEdBQTBCLFlBQUE7SUFBTSxhQUFBLEtBQUksQ0FBSixXQUFBLEVBQUE7SUFBa0IsS0FBbEQ7O0lBQ0EsSUFBQSxLQUFJLENBQUMsYUFBTCxHQUFxQixZQUFBO0lBQU0sYUFBQSxLQUFJLENBQUosV0FBQSxFQUFBO0lBQWtCLEtBQTdDOztJQUNBLElBQUEsS0FBSSxDQUFDLFlBQUwsR0FBb0IsWUFBQTtJQUFNLGFBQUEsS0FBSSxDQUFKLFVBQUEsRUFBQTtJQUFpQixLQUEzQzs7SUFDQSxJQUFBLEtBQUksQ0FBQyxjQUFMLEdBQXNCLFlBQUE7SUFBTSxhQUFBLEtBQUksQ0FBSixNQUFBLEVBQUE7SUFBYSxLQUF6Qzs7O0lBQ0Q7O0lBbkVELEVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBVyxtQkFBWCxFQUFXLFlBQVgsRUFBcUI7YUFBckIsZUFBQTtJQUNFLGFBQU9tSixZQUFQO0lBQ0QsS0FGb0I7d0JBQUE7O0lBQUEsR0FBckI7SUFJQSxFQUFBLE1BQUEsQ0FBQSxjQUFBLENBQVcsbUJBQVgsRUFBVyxTQUFYLEVBQWtCO2FBQWxCLGVBQUE7SUFDRSxhQUFPQyxTQUFQO0lBQ0QsS0FGaUI7d0JBQUE7O0lBQUEsR0FBbEI7SUFJQSxFQUFBLE1BQUEsQ0FBQSxjQUFBLENBQVcsbUJBQVgsRUFBVyxTQUFYLEVBQWtCO2FBQWxCLGVBQUE7SUFDRSxhQUFPQyxTQUFQO0lBQ0QsS0FGaUI7d0JBQUE7O0lBQUEsR0FBbEI7SUFJQSxFQUFBLE1BQUEsQ0FBQSxjQUFBLENBQVcsbUJBQVgsRUFBVyxnQkFBWCxFQUF5QjthQUF6QixlQUFBO0lBQ0UsYUFBTztJQUNMLFFBQUEsUUFBUSxFQUFFLG9CQUFBO0lBQU0saUJBQUEsU0FBQTtJQUFTLFNBRHBCO0lBRUwsUUFBQSxzQkFBc0IsRUFBRSxrQ0FBQTtJQUFNLGlCQUFBLElBQUE7SUFBSSxTQUY3QjtJQUdMLFFBQUEsbUJBQW1CLEVBQUUsK0JBQUE7SUFBTSxpQkFBQztJQUFDLFlBQUEsR0FBRyxFQUFFLENBQU47SUFBUyxZQUFBLEtBQUssRUFBRSxDQUFoQjtJQUFtQixZQUFBLE1BQU0sRUFBRSxDQUEzQjtJQUE4QixZQUFBLElBQUksRUFBRSxDQUFwQztJQUF1QyxZQUFBLEtBQUssRUFBRSxDQUE5QztJQUFpRCxZQUFBLE1BQU0sRUFBeEQ7SUFBQyxXQUFEO0lBQTZELFNBSG5GO0lBSUwsUUFBQSxtQkFBbUIsRUFBRSwrQkFBQTtJQUFNLGlCQUFBLElBQUE7SUFBSSxTQUoxQjtJQUtMLFFBQUEsb0NBQW9DLEVBQUUsZ0RBQUE7SUFBTSxpQkFBQSxTQUFBO0lBQVMsU0FMaEQ7SUFNTCxRQUFBLDRCQUE0QixFQUFFLHdDQUFBO0lBQU0saUJBQUEsU0FBQTtJQUFTLFNBTnhDO0lBT0wsUUFBQSx1QkFBdUIsRUFBRSxtQ0FBQTtJQUFNLGlCQUFBLFNBQUE7SUFBUyxTQVBuQztJQVFMLFFBQUEsbUJBQW1CLEVBQUUsK0JBQUE7SUFBTSxpQkFBQztJQUFDLFlBQUEsQ0FBQyxFQUFFLENBQUo7SUFBTyxZQUFBLENBQUMsRUFBVDtJQUFDLFdBQUQ7SUFBYyxTQVJwQztJQVNMLFFBQUEsZUFBZSxFQUFFLDJCQUFBO0lBQU0saUJBQUEsSUFBQTtJQUFJLFNBVHRCO0lBVUwsUUFBQSxpQkFBaUIsRUFBRSw2QkFBQTtJQUFNLGlCQUFBLElBQUE7SUFBSSxTQVZ4QjtJQVdMLFFBQUEsV0FBVyxFQUFFLHVCQUFBO0lBQU0saUJBQUEsSUFBQTtJQUFJLFNBWGxCO0lBWUwsUUFBQSxrQ0FBa0MsRUFBRSw4Q0FBQTtJQUFNLGlCQUFBLFNBQUE7SUFBUyxTQVo5QztJQWFMLFFBQUEsMEJBQTBCLEVBQUUsc0NBQUE7SUFBTSxpQkFBQSxTQUFBO0lBQVMsU0FidEM7SUFjTCxRQUFBLHFCQUFxQixFQUFFLGlDQUFBO0lBQU0saUJBQUEsU0FBQTtJQUFTLFNBZGpDO0lBZUwsUUFBQSxXQUFXLEVBQUUsdUJBQUE7SUFBTSxpQkFBQSxTQUFBO0lBQVMsU0FmdkI7SUFnQkwsUUFBQSxpQkFBaUIsRUFBRSw2QkFBQTtJQUFNLGlCQUFBLFNBQUE7SUFBUztJQWhCN0IsT0FBUDtJQWtCRCxLQW5Cd0I7d0JBQUE7O0lBQUEsR0FBekI7O0lBeURBLEVBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsSUFBQSxHQUFBLFlBQUE7SUFBQSxRQUFBLEtBQUEsR0FBQSxJQUFBOztJQUNFLFFBQU0sbUJBQW1CLEdBQUcsS0FBSyxvQkFBTCxFQUE1QjtJQUVBLFNBQUsscUJBQUwsQ0FBMkIsbUJBQTNCOztJQUVBLFFBQUksbUJBQUosRUFBeUI7SUFDakIsVUFBQSxFQUFBLEdBQUEsbUJBQUEsQ0FBQSxVQUFBO0lBQUEsVUFBQyxNQUFBLEdBQUEsRUFBQSxDQUFBLElBQUQ7SUFBQSxVQUFPLFdBQUEsR0FBQSxFQUFBLENBQUEsU0FBUDtJQUNOLE1BQUEscUJBQXFCLENBQUMsWUFBQTtJQUNwQixRQUFBLEtBQUksQ0FBQyxRQUFMLENBQWMsUUFBZCxDQUF1QixNQUF2Qjs7SUFDQSxZQUFJLEtBQUksQ0FBQyxRQUFMLENBQWMsV0FBZCxFQUFKLEVBQWlDO0lBQy9CLFVBQUEsS0FBSSxDQUFDLFFBQUwsQ0FBYyxRQUFkLENBQXVCLFdBQXZCLEVBRCtCOzs7SUFHL0IsVUFBQSxLQUFJLENBQUMsZUFBTDtJQUNEO0lBQ0YsT0FQb0IsQ0FBckI7SUFRRDtJQUNGLEdBaEJEOztJQWtCQSxFQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLE9BQUEsR0FBQSxZQUFBO0lBQUEsUUFBQSxLQUFBLEdBQUEsSUFBQTs7SUFDRSxRQUFJLEtBQUssb0JBQUwsRUFBSixFQUFpQztJQUMvQixVQUFJLEtBQUssZ0JBQVQsRUFBMkI7SUFDekIsUUFBQSxZQUFZLENBQUMsS0FBSyxnQkFBTixDQUFaO0lBQ0EsYUFBSyxnQkFBTCxHQUF3QixDQUF4QjtJQUNBLGFBQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsbUJBQW1CLENBQUMsVUFBcEIsQ0FBK0IsYUFBekQ7SUFDRDs7SUFFRCxVQUFJLEtBQUssMkJBQVQsRUFBc0M7SUFDcEMsUUFBQSxZQUFZLENBQUMsS0FBSywyQkFBTixDQUFaO0lBQ0EsYUFBSywyQkFBTCxHQUFtQyxDQUFuQztJQUNBLGFBQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsbUJBQW1CLENBQUMsVUFBcEIsQ0FBK0IsZUFBekQ7SUFDRDs7SUFFSyxVQUFBLEVBQUEsR0FBQSxtQkFBQSxDQUFBLFVBQUE7SUFBQSxVQUFDLE1BQUEsR0FBQSxFQUFBLENBQUEsSUFBRDtJQUFBLFVBQU8sV0FBQSxHQUFBLEVBQUEsQ0FBQSxTQUFQO0lBQ04sTUFBQSxxQkFBcUIsQ0FBQyxZQUFBO0lBQ3BCLFFBQUEsS0FBSSxDQUFDLFFBQUwsQ0FBYyxXQUFkLENBQTBCLE1BQTFCOztJQUNBLFFBQUEsS0FBSSxDQUFDLFFBQUwsQ0FBYyxXQUFkLENBQTBCLFdBQTFCOztJQUNBLFFBQUEsS0FBSSxDQUFDLGNBQUw7SUFDRCxPQUpvQixDQUFyQjtJQUtEOztJQUVELFNBQUssdUJBQUw7SUFDQSxTQUFLLCtCQUFMO0lBQ0QsR0F4QkQ7SUEwQkE7Ozs7O0lBR0EsRUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLEdBQUEsVUFBUyxHQUFULEVBQW9CO0lBQ2xCLFNBQUssU0FBTCxDQUFlLEdBQWY7SUFDRCxHQUZEOztJQUlBLEVBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsVUFBQSxHQUFBLFlBQUE7SUFDRSxTQUFLLFdBQUw7SUFDRCxHQUZEOztJQUlBLEVBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxHQUFBLFlBQUE7SUFBQSxRQUFBLEtBQUEsR0FBQSxJQUFBOztJQUNFLFFBQUksS0FBSyxZQUFULEVBQXVCO0lBQ3JCLE1BQUEsb0JBQW9CLENBQUMsS0FBSyxZQUFOLENBQXBCO0lBQ0Q7O0lBQ0QsU0FBSyxZQUFMLEdBQW9CLHFCQUFxQixDQUFDLFlBQUE7SUFDeEMsTUFBQSxLQUFJLENBQUMsZUFBTDs7SUFDQSxNQUFBLEtBQUksQ0FBQyxZQUFMLEdBQW9CLENBQXBCO0lBQ0QsS0FId0MsQ0FBekM7SUFJRCxHQVJEOztJQVVBLEVBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsWUFBQSxHQUFBLFVBQWEsU0FBYixFQUErQjtJQUN0QixRQUFBLFNBQUEsR0FBQSxtQkFBQSxDQUFBLFVBQUEsQ0FBQSxTQUFBOztJQUNQLFFBQUksU0FBSixFQUFlO0lBQ2IsV0FBSyxRQUFMLENBQWMsUUFBZCxDQUF1QixTQUF2QjtJQUNELEtBRkQsTUFFTztJQUNMLFdBQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsU0FBMUI7SUFDRDtJQUNGLEdBUEQ7O0lBU0EsRUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxXQUFBLEdBQUEsWUFBQTtJQUFBLFFBQUEsS0FBQSxHQUFBLElBQUE7O0lBQ0UsSUFBQSxxQkFBcUIsQ0FBQyxZQUFBO0lBQ2xCLGFBQUEsS0FBSSxDQUFDLFFBQUwsQ0FBYyxRQUFkLENBQXVCLG1CQUFtQixDQUFDLFVBQXBCLENBQStCLFVBQXRELENBQUE7SUFBaUUsS0FEaEQsQ0FBckI7SUFFRCxHQUhEOztJQUtBLEVBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsVUFBQSxHQUFBLFlBQUE7SUFBQSxRQUFBLEtBQUEsR0FBQSxJQUFBOztJQUNFLElBQUEscUJBQXFCLENBQUMsWUFBQTtJQUNsQixhQUFBLEtBQUksQ0FBQyxRQUFMLENBQWMsV0FBZCxDQUEwQixtQkFBbUIsQ0FBQyxVQUFwQixDQUErQixVQUF6RCxDQUFBO0lBQW9FLEtBRG5ELENBQXJCO0lBRUQsR0FIRDtJQUtBOzs7Ozs7OztJQU1RLEVBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsb0JBQUEsR0FBUixZQUFBO0lBQ0UsV0FBTyxLQUFLLFFBQUwsQ0FBYyxzQkFBZCxFQUFQO0lBQ0QsR0FGTzs7SUFJQSxFQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLHVCQUFBLEdBQVIsWUFBQTtJQUNFLFdBQU87SUFDTCxNQUFBLGVBQWUsRUFBRSxTQURaO0lBRUwsTUFBQSxvQkFBb0IsRUFBRSxLQUZqQjtJQUdMLE1BQUEsV0FBVyxFQUFFLEtBSFI7SUFJTCxNQUFBLGNBQWMsRUFBRSxLQUpYO0lBS0wsTUFBQSxxQkFBcUIsRUFBRSxLQUxsQjtJQU1MLE1BQUEsb0JBQW9CLEVBQUU7SUFOakIsS0FBUDtJQVFELEdBVE87SUFXUjs7Ozs7SUFHUSxFQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLHFCQUFBLEdBQVIsVUFBOEIsbUJBQTlCLEVBQTBEO0lBQTFELFFBQUEsS0FBQSxHQUFBLElBQUE7O0lBQ0UsUUFBSSxtQkFBSixFQUF5QjtJQUN2QixNQUFBLHNCQUFzQixDQUFDLE9BQXZCLENBQStCLFVBQUMsT0FBRCxFQUFRO0lBQ3JDLFFBQUEsS0FBSSxDQUFDLFFBQUwsQ0FBYywwQkFBZCxDQUF5QyxPQUF6QyxFQUFrRCxLQUFJLENBQUMsZ0JBQXZEO0lBQ0QsT0FGRDs7SUFHQSxVQUFJLEtBQUssUUFBTCxDQUFjLFdBQWQsRUFBSixFQUFpQztJQUMvQixhQUFLLFFBQUwsQ0FBYyxxQkFBZCxDQUFvQyxLQUFLLGNBQXpDO0lBQ0Q7SUFDRjs7SUFFRCxTQUFLLFFBQUwsQ0FBYywwQkFBZCxDQUF5QyxPQUF6QyxFQUFrRCxLQUFLLGFBQXZEO0lBQ0EsU0FBSyxRQUFMLENBQWMsMEJBQWQsQ0FBeUMsTUFBekMsRUFBaUQsS0FBSyxZQUF0RDtJQUNELEdBWk87O0lBY0EsRUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSw2QkFBQSxHQUFSLFVBQXNDLEdBQXRDLEVBQWdEO0lBQWhELFFBQUEsS0FBQSxHQUFBLElBQUE7O0lBQ0UsUUFBSSxHQUFHLENBQUMsSUFBSixLQUFhLFNBQWpCLEVBQTRCO0lBQzFCLFdBQUssUUFBTCxDQUFjLDBCQUFkLENBQXlDLE9BQXpDLEVBQWtELEtBQUssa0JBQXZEO0lBQ0QsS0FGRCxNQUVPO0lBQ0wsTUFBQSxnQ0FBZ0MsQ0FBQyxPQUFqQyxDQUF5QyxVQUFDLE9BQUQsRUFBUTtJQUMvQyxRQUFBLEtBQUksQ0FBQyxRQUFMLENBQWMsa0NBQWQsQ0FBaUQsT0FBakQsRUFBMEQsS0FBSSxDQUFDLGtCQUEvRDtJQUNELE9BRkQ7SUFHRDtJQUNGLEdBUk87O0lBVUEsRUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSx1QkFBQSxHQUFSLFlBQUE7SUFBQSxRQUFBLEtBQUEsR0FBQSxJQUFBOztJQUNFLElBQUEsc0JBQXNCLENBQUMsT0FBdkIsQ0FBK0IsVUFBQyxPQUFELEVBQVE7SUFDckMsTUFBQSxLQUFJLENBQUMsUUFBTCxDQUFjLDRCQUFkLENBQTJDLE9BQTNDLEVBQW9ELEtBQUksQ0FBQyxnQkFBekQ7SUFDRCxLQUZEO0lBR0EsU0FBSyxRQUFMLENBQWMsNEJBQWQsQ0FBMkMsT0FBM0MsRUFBb0QsS0FBSyxhQUF6RDtJQUNBLFNBQUssUUFBTCxDQUFjLDRCQUFkLENBQTJDLE1BQTNDLEVBQW1ELEtBQUssWUFBeEQ7O0lBRUEsUUFBSSxLQUFLLFFBQUwsQ0FBYyxXQUFkLEVBQUosRUFBaUM7SUFDL0IsV0FBSyxRQUFMLENBQWMsdUJBQWQsQ0FBc0MsS0FBSyxjQUEzQztJQUNEO0lBQ0YsR0FWTzs7SUFZQSxFQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLCtCQUFBLEdBQVIsWUFBQTtJQUFBLFFBQUEsS0FBQSxHQUFBLElBQUE7O0lBQ0UsU0FBSyxRQUFMLENBQWMsNEJBQWQsQ0FBMkMsT0FBM0MsRUFBb0QsS0FBSyxrQkFBekQ7SUFDQSxJQUFBLGdDQUFnQyxDQUFDLE9BQWpDLENBQXlDLFVBQUMsT0FBRCxFQUFRO0lBQy9DLE1BQUEsS0FBSSxDQUFDLFFBQUwsQ0FBYyxvQ0FBZCxDQUFtRCxPQUFuRCxFQUE0RCxLQUFJLENBQUMsa0JBQWpFO0lBQ0QsS0FGRDtJQUdELEdBTE87O0lBT0EsRUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxjQUFBLEdBQVIsWUFBQTtJQUFBLFFBQUEsS0FBQSxHQUFBLElBQUE7O0lBQ0UsUUFBTSxhQUFhLEdBQUcsbUJBQW1CLENBQUMsT0FBMUM7SUFDQSxRQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBUCxDQUFZLGFBQVosQ0FBYjtJQUNBLElBQUEsSUFBSSxDQUFDLE9BQUwsQ0FBYSxVQUFDLEdBQUQsRUFBSTtJQUNmLFVBQUksR0FBRyxDQUFDLE9BQUosQ0FBWSxNQUFaLE1BQXdCLENBQTVCLEVBQStCO0lBQzdCLFFBQUEsS0FBSSxDQUFDLFFBQUwsQ0FBYyxpQkFBZCxDQUFnQyxhQUFhLENBQUMsR0FBRCxDQUE3QyxFQUFvRCxJQUFwRDtJQUNEO0lBQ0YsS0FKRDtJQUtELEdBUk87O0lBVUEsRUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxTQUFBLEdBQVIsVUFBa0IsR0FBbEIsRUFBNkI7SUFBN0IsUUFBQSxLQUFBLEdBQUEsSUFBQTs7SUFDRSxRQUFJLEtBQUssUUFBTCxDQUFjLGlCQUFkLEVBQUosRUFBdUM7SUFDckM7SUFDRDs7SUFFRCxRQUFNLGVBQWUsR0FBRyxLQUFLLGdCQUE3Qjs7SUFDQSxRQUFJLGVBQWUsQ0FBQyxXQUFwQixFQUFpQztJQUMvQjtJQUNELEtBUjBCOzs7SUFXM0IsUUFBTSx1QkFBdUIsR0FBRyxLQUFLLHdCQUFyQztJQUNBLFFBQU0saUJBQWlCLEdBQUcsdUJBQXVCLElBQUksR0FBRyxLQUFLLFNBQW5DLElBQWdELHVCQUF1QixDQUFDLElBQXhCLEtBQWlDLEdBQUcsQ0FBQyxJQUEvRzs7SUFDQSxRQUFJLGlCQUFKLEVBQXVCO0lBQ3JCO0lBQ0Q7O0lBRUQsSUFBQSxlQUFlLENBQUMsV0FBaEIsR0FBOEIsSUFBOUI7SUFDQSxJQUFBLGVBQWUsQ0FBQyxjQUFoQixHQUFpQyxHQUFHLEtBQUssU0FBekM7SUFDQSxJQUFBLGVBQWUsQ0FBQyxlQUFoQixHQUFrQyxHQUFsQztJQUNBLElBQUEsZUFBZSxDQUFDLHFCQUFoQixHQUF3QyxlQUFlLENBQUMsY0FBaEIsR0FBaUMsS0FBakMsR0FBeUMsR0FBRyxLQUFLLFNBQVIsS0FDN0UsR0FBRyxDQUFDLElBQUosS0FBYSxXQUFiLElBQTRCLEdBQUcsQ0FBQyxJQUFKLEtBQWEsWUFBekMsSUFBeUQsR0FBRyxDQUFDLElBQUosS0FBYSxhQURPLENBQWpGO0lBSUEsUUFBTSxpQkFBaUIsR0FBRyxHQUFHLEtBQUssU0FBUixJQUFxQixnQkFBZ0IsQ0FBQyxNQUFqQixHQUEwQixDQUEvQyxJQUFvRCxnQkFBZ0IsQ0FBQyxJQUFqQixDQUMxRSxVQUFDLE1BQUQsRUFBTztJQUFLLGFBQUEsS0FBSSxDQUFDLFFBQUwsQ0FBYyxtQkFBZCxDQUFBLE1BQUEsQ0FBQTtJQUF5QyxLQURxQixDQUE5RTs7SUFFQSxRQUFJLGlCQUFKLEVBQXVCO0lBQ3JCO0lBQ0EsV0FBSyxxQkFBTDtJQUNBO0lBQ0Q7O0lBRUQsUUFBSSxHQUFHLEtBQUssU0FBWixFQUF1QjtJQUNyQixNQUFBLGdCQUFnQixDQUFDLElBQWpCLENBQXNCLEdBQUcsQ0FBQyxNQUExQjtJQUNBLFdBQUssNkJBQUwsQ0FBbUMsR0FBbkM7SUFDRDs7SUFFRCxJQUFBLGVBQWUsQ0FBQyxvQkFBaEIsR0FBdUMsS0FBSyx1QkFBTCxDQUE2QixHQUE3QixDQUF2Qzs7SUFDQSxRQUFJLGVBQWUsQ0FBQyxvQkFBcEIsRUFBMEM7SUFDeEMsV0FBSyxrQkFBTDtJQUNEOztJQUVELElBQUEscUJBQXFCLENBQUMsWUFBQTtJQUNwQjtJQUNBLE1BQUEsZ0JBQWdCLEdBQUcsRUFBbkI7O0lBRUEsVUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBakIsSUFDRyxHQUFHLEtBQUssU0FEWCxLQUVLLEdBQXFCLENBQUMsR0FBdEIsS0FBOEIsR0FBOUIsSUFBc0MsR0FBcUIsQ0FBQyxPQUF0QixLQUFrQyxFQUY3RSxDQUFKLEVBRXNGO0lBQ3BGO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLFFBQUEsZUFBZSxDQUFDLG9CQUFoQixHQUF1QyxLQUFJLENBQUMsdUJBQUwsQ0FBNkIsR0FBN0IsQ0FBdkM7O0lBQ0EsWUFBSSxlQUFlLENBQUMsb0JBQXBCLEVBQTBDO0lBQ3hDLFVBQUEsS0FBSSxDQUFDLGtCQUFMO0lBQ0Q7SUFDRjs7SUFFRCxVQUFJLENBQUMsZUFBZSxDQUFDLG9CQUFyQixFQUEyQztJQUN6QztJQUNBLFFBQUEsS0FBSSxDQUFDLGdCQUFMLEdBQXdCLEtBQUksQ0FBQyx1QkFBTCxFQUF4QjtJQUNEO0lBQ0YsS0F2Qm9CLENBQXJCO0lBd0JELEdBbEVPOztJQW9FQSxFQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLHVCQUFBLEdBQVIsVUFBZ0MsR0FBaEMsRUFBMkM7SUFDekMsV0FBUSxHQUFHLEtBQUssU0FBUixJQUFxQixHQUFHLENBQUMsSUFBSixLQUFhLFNBQW5DLEdBQWdELEtBQUssUUFBTCxDQUFjLGVBQWQsRUFBaEQsR0FBa0YsSUFBekY7SUFDRCxHQUZPOztJQUlBLEVBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsa0JBQUEsR0FBUixZQUFBO0lBQUEsUUFBQSxLQUFBLEdBQUEsSUFBQTs7SUFDUSxRQUFBLEVBQUEsR0FBQSxtQkFBQSxDQUFBLE9BQUE7SUFBQSxRQUFDLHNCQUFBLEdBQUEsRUFBQSxDQUFBLHNCQUFEO0lBQUEsUUFBeUIsb0JBQUEsR0FBQSxFQUFBLENBQUEsb0JBQXpCO0lBQ0EsUUFBQSxFQUFBLEdBQUEsbUJBQUEsQ0FBQSxVQUFBO0lBQUEsUUFBQyxlQUFBLEdBQUEsRUFBQSxDQUFBLGVBQUQ7SUFBQSxRQUFrQixhQUFBLEdBQUEsRUFBQSxDQUFBLGFBQWxCO0lBQ0MsUUFBQSx1QkFBQSxHQUFBLG1CQUFBLENBQUEsT0FBQSxDQUFBLHVCQUFBO0lBRVAsU0FBSyxlQUFMO0lBRUEsUUFBSSxjQUFjLEdBQUcsRUFBckI7SUFDQSxRQUFJLFlBQVksR0FBRyxFQUFuQjs7SUFFQSxRQUFJLENBQUMsS0FBSyxRQUFMLENBQWMsV0FBZCxFQUFMLEVBQWtDO0lBQzFCLFVBQUEsRUFBQSxHQUFBLEtBQUEsNEJBQUEsRUFBQTtJQUFBLFVBQUMsVUFBQSxHQUFBLEVBQUEsQ0FBQSxVQUFEO0lBQUEsVUFBYSxRQUFBLEdBQUEsRUFBQSxDQUFBLFFBQWI7O0lBQ04sTUFBQSxjQUFjLEdBQU0sVUFBVSxDQUFDLENBQVgsR0FBWSxNQUFaLEdBQW1CLFVBQVUsQ0FBQyxDQUE5QixHQUErQixJQUFuRDtJQUNBLE1BQUEsWUFBWSxHQUFNLFFBQVEsQ0FBQyxDQUFULEdBQVUsTUFBVixHQUFpQixRQUFRLENBQUMsQ0FBMUIsR0FBMkIsSUFBN0M7SUFDRDs7SUFFRCxTQUFLLFFBQUwsQ0FBYyxpQkFBZCxDQUFnQyxzQkFBaEMsRUFBd0QsY0FBeEQ7SUFDQSxTQUFLLFFBQUwsQ0FBYyxpQkFBZCxDQUFnQyxvQkFBaEMsRUFBc0QsWUFBdEQsRUFqQkY7O0lBbUJFLElBQUEsWUFBWSxDQUFDLEtBQUssZ0JBQU4sQ0FBWjtJQUNBLElBQUEsWUFBWSxDQUFDLEtBQUssMkJBQU4sQ0FBWjtJQUNBLFNBQUssMkJBQUw7SUFDQSxTQUFLLFFBQUwsQ0FBYyxXQUFkLENBQTBCLGVBQTFCLEVBdEJGOztJQXlCRSxTQUFLLFFBQUwsQ0FBYyxtQkFBZDtJQUNBLFNBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsYUFBdkI7SUFDQSxTQUFLLGdCQUFMLEdBQXdCLFVBQVUsQ0FBQyxZQUFBO0lBQU0sYUFBQSxLQUFJLENBQUosd0JBQUEsRUFBQTtJQUErQixLQUF0QyxFQUF3Qyx1QkFBeEMsQ0FBbEM7SUFDRCxHQTVCTzs7SUE4QkEsRUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSw0QkFBQSxHQUFSLFlBQUE7SUFDUSxRQUFBLEVBQUEsR0FBQSxLQUFBLGdCQUFBO0lBQUEsUUFBQyxlQUFBLEdBQUEsRUFBQSxDQUFBLGVBQUQ7SUFBQSxRQUFrQixxQkFBQSxHQUFBLEVBQUEsQ0FBQSxxQkFBbEI7SUFFTixRQUFJLFVBQUo7O0lBQ0EsUUFBSSxxQkFBSixFQUEyQjtJQUN6QixNQUFBLFVBQVUsR0FBRyx3QkFBd0IsQ0FDakMsZUFEaUMsRUFFakMsS0FBSyxRQUFMLENBQWMsbUJBQWQsRUFGaUMsRUFHakMsS0FBSyxRQUFMLENBQWMsbUJBQWQsRUFIaUMsQ0FBckM7SUFLRCxLQU5ELE1BTU87SUFDTCxNQUFBLFVBQVUsR0FBRztJQUNYLFFBQUEsQ0FBQyxFQUFFLEtBQUssTUFBTCxDQUFZLEtBQVosR0FBb0IsQ0FEWjtJQUVYLFFBQUEsQ0FBQyxFQUFFLEtBQUssTUFBTCxDQUFZLE1BQVosR0FBcUI7SUFGYixPQUFiO0lBSUQsS0FmSDs7O0lBaUJFLElBQUEsVUFBVSxHQUFHO0lBQ1gsTUFBQSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQVgsR0FBZ0IsS0FBSyxZQUFMLEdBQW9CLENBRDVCO0lBRVgsTUFBQSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQVgsR0FBZ0IsS0FBSyxZQUFMLEdBQW9CO0lBRjVCLEtBQWI7SUFLQSxRQUFNLFFBQVEsR0FBRztJQUNmLE1BQUEsQ0FBQyxFQUFHLEtBQUssTUFBTCxDQUFZLEtBQVosR0FBb0IsQ0FBckIsR0FBMkIsS0FBSyxZQUFMLEdBQW9CLENBRG5DO0lBRWYsTUFBQSxDQUFDLEVBQUcsS0FBSyxNQUFMLENBQVksTUFBWixHQUFxQixDQUF0QixHQUE0QixLQUFLLFlBQUwsR0FBb0I7SUFGcEMsS0FBakI7SUFLQSxXQUFPO0lBQUMsTUFBQSxVQUFVLEVBQUEsVUFBWDtJQUFhLE1BQUEsUUFBUSxFQUFBO0lBQXJCLEtBQVA7SUFDRCxHQTVCTzs7SUE4QkEsRUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSw4QkFBQSxHQUFSLFlBQUE7SUFBQSxRQUFBLEtBQUEsR0FBQSxJQUFBLENBQUE7SUFFRTs7O0lBQ08sUUFBQSxlQUFBLEdBQUEsbUJBQUEsQ0FBQSxVQUFBLENBQUEsZUFBQTtJQUNELFFBQUEsRUFBQSxHQUFBLEtBQUEsZ0JBQUE7SUFBQSxRQUFDLG9CQUFBLEdBQUEsRUFBQSxDQUFBLG9CQUFEO0lBQUEsUUFBdUIsV0FBQSxHQUFBLEVBQUEsQ0FBQSxXQUF2QjtJQUNOLFFBQU0sa0JBQWtCLEdBQUcsb0JBQW9CLElBQUksQ0FBQyxXQUFwRDs7SUFFQSxRQUFJLGtCQUFrQixJQUFJLEtBQUssNEJBQS9CLEVBQTZEO0lBQzNELFdBQUssMkJBQUw7SUFDQSxXQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLGVBQXZCO0lBQ0EsV0FBSywyQkFBTCxHQUFtQyxVQUFVLENBQUMsWUFBQTtJQUM1QyxRQUFBLEtBQUksQ0FBQyxRQUFMLENBQWMsV0FBZCxDQUEwQixlQUExQjtJQUNELE9BRjRDLEVBRTFDQSxTQUFPLENBQUMsa0JBRmtDLENBQTdDO0lBR0Q7SUFDRixHQWRPOztJQWdCQSxFQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLDJCQUFBLEdBQVIsWUFBQTtJQUNTLFFBQUEsYUFBQSxHQUFBLG1CQUFBLENBQUEsVUFBQSxDQUFBLGFBQUE7SUFDUCxTQUFLLFFBQUwsQ0FBYyxXQUFkLENBQTBCLGFBQTFCO0lBQ0EsU0FBSyw0QkFBTCxHQUFvQyxLQUFwQztJQUNBLFNBQUssUUFBTCxDQUFjLG1CQUFkO0lBQ0QsR0FMTzs7SUFPQSxFQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLHFCQUFBLEdBQVIsWUFBQTtJQUFBLFFBQUEsS0FBQSxHQUFBLElBQUE7O0lBQ0UsU0FBSyx3QkFBTCxHQUFnQyxLQUFLLGdCQUFMLENBQXNCLGVBQXREO0lBQ0EsU0FBSyxnQkFBTCxHQUF3QixLQUFLLHVCQUFMLEVBQXhCLENBRkY7SUFJRTs7SUFDQSxJQUFBLFVBQVUsQ0FBQyxZQUFBO0lBQU0sYUFBQSxLQUFJLENBQUMsd0JBQUwsR0FBQSxTQUFBO0lBQXlDLEtBQWhELEVBQWtELG1CQUFtQixDQUFDLE9BQXBCLENBQTRCLFlBQTlFLENBQVY7SUFDRCxHQU5POztJQVFBLEVBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsV0FBQSxHQUFSLFlBQUE7SUFBQSxRQUFBLEtBQUEsR0FBQSxJQUFBOztJQUNFLFFBQU0sZUFBZSxHQUFHLEtBQUssZ0JBQTdCLENBREY7O0lBR0UsUUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFyQixFQUFrQztJQUNoQztJQUNEOztJQUVELFFBQU0sS0FBSyxHQUFBckosT0FBQSxDQUFBLEVBQUEsRUFBNEIsZUFBNUIsQ0FBWDs7SUFFQSxRQUFJLGVBQWUsQ0FBQyxjQUFwQixFQUFvQztJQUNsQyxNQUFBLHFCQUFxQixDQUFDLFlBQUE7SUFBTSxlQUFBLEtBQUksQ0FBQyxvQkFBTCxDQUFBLEtBQUEsQ0FBQTtJQUFnQyxPQUF2QyxDQUFyQjtJQUNBLFdBQUsscUJBQUw7SUFDRCxLQUhELE1BR087SUFDTCxXQUFLLCtCQUFMO0lBQ0EsTUFBQSxxQkFBcUIsQ0FBQyxZQUFBO0lBQ3BCLFFBQUEsS0FBSSxDQUFDLGdCQUFMLENBQXNCLG9CQUF0QixHQUE2QyxJQUE3Qzs7SUFDQSxRQUFBLEtBQUksQ0FBQyxvQkFBTCxDQUEwQixLQUExQjs7SUFDQSxRQUFBLEtBQUksQ0FBQyxxQkFBTDtJQUNELE9BSm9CLENBQXJCO0lBS0Q7SUFDRixHQXBCTzs7SUFzQkEsRUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxvQkFBQSxHQUFSLFVBQTZCLEVBQTdCLEVBQStGO1lBQWpFLHFCQUFBLEdBQUEsRUFBQSxDQUFBO1lBQXVCLG9CQUFBLEdBQUEsRUFBQSxDQUFBOztJQUNuRCxRQUFJLHFCQUFxQixJQUFJLG9CQUE3QixFQUFtRDtJQUNqRCxXQUFLLDhCQUFMO0lBQ0Q7SUFDRixHQUpPOztJQU1BLEVBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsZUFBQSxHQUFSLFlBQUE7SUFBQSxRQUFBLEtBQUEsR0FBQSxJQUFBOztJQUNFLFNBQUssTUFBTCxHQUFjLEtBQUssUUFBTCxDQUFjLG1CQUFkLEVBQWQ7SUFDQSxRQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBTCxDQUFTLEtBQUssTUFBTCxDQUFZLE1BQXJCLEVBQTZCLEtBQUssTUFBTCxDQUFZLEtBQXpDLENBQWYsQ0FGRjtJQUtFO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBQ0EsUUFBTSxnQkFBZ0IsR0FBRyxTQUFuQixnQkFBbUIsR0FBQTtJQUN2QixVQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBTCxDQUFVLElBQUksQ0FBQyxHQUFMLENBQVMsS0FBSSxDQUFDLE1BQUwsQ0FBWSxLQUFyQixFQUE0QixDQUE1QixJQUFpQyxJQUFJLENBQUMsR0FBTCxDQUFTLEtBQUksQ0FBQyxNQUFMLENBQVksTUFBckIsRUFBNkIsQ0FBN0IsQ0FBM0MsQ0FBbkI7SUFDQSxhQUFPLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQyxPQUFwQixDQUE0QixPQUFoRDtJQUNELEtBSEQ7O0lBS0EsU0FBSyxVQUFMLEdBQWtCLEtBQUssUUFBTCxDQUFjLFdBQWQsS0FBOEIsTUFBOUIsR0FBdUMsZ0JBQWdCLEVBQXpFLENBZkY7O0lBa0JFLFNBQUssWUFBTCxHQUFvQixJQUFJLENBQUMsS0FBTCxDQUFXLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxPQUFwQixDQUE0QixvQkFBaEQsQ0FBcEI7SUFDQSxTQUFLLFFBQUwsR0FBZ0IsS0FBRyxLQUFLLFVBQUwsR0FBa0IsS0FBSyxZQUExQztJQUVBLFNBQUssb0JBQUw7SUFDRCxHQXRCTzs7SUF3QkEsRUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxvQkFBQSxHQUFSLFlBQUE7SUFDUSxRQUFBLEVBQUEsR0FBQSxtQkFBQSxDQUFBLE9BQUE7SUFBQSxRQUNKLFdBQUEsR0FBQSxFQUFBLENBQUEsV0FESTtJQUFBLFFBQ1MsUUFBQSxHQUFBLEVBQUEsQ0FBQSxRQURUO0lBQUEsUUFDbUIsT0FBQSxHQUFBLEVBQUEsQ0FBQSxPQURuQjtJQUFBLFFBQzRCLFlBQUEsR0FBQSxFQUFBLENBQUEsWUFENUI7SUFJTixTQUFLLFFBQUwsQ0FBYyxpQkFBZCxDQUFnQyxXQUFoQyxFQUFnRCxLQUFLLFlBQUwsR0FBaUIsSUFBakU7SUFDQSxTQUFLLFFBQUwsQ0FBYyxpQkFBZCxDQUFnQyxZQUFoQyxFQUE4QyxLQUFLLFFBQW5EOztJQUVBLFFBQUksS0FBSyxRQUFMLENBQWMsV0FBZCxFQUFKLEVBQWlDO0lBQy9CLFdBQUssZ0JBQUwsR0FBd0I7SUFDdEIsUUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUwsQ0FBWSxLQUFLLE1BQUwsQ0FBWSxLQUFaLEdBQW9CLENBQXJCLEdBQTJCLEtBQUssWUFBTCxHQUFvQixDQUExRCxDQURnQjtJQUV0QixRQUFBLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBTCxDQUFZLEtBQUssTUFBTCxDQUFZLE1BQVosR0FBcUIsQ0FBdEIsR0FBNEIsS0FBSyxZQUFMLEdBQW9CLENBQTNEO0lBRmlCLE9BQXhCO0lBS0EsV0FBSyxRQUFMLENBQWMsaUJBQWQsQ0FBZ0MsUUFBaEMsRUFBNkMsS0FBSyxnQkFBTCxDQUFzQixJQUF0QixHQUEwQixJQUF2RTtJQUNBLFdBQUssUUFBTCxDQUFjLGlCQUFkLENBQWdDLE9BQWhDLEVBQTRDLEtBQUssZ0JBQUwsQ0FBc0IsR0FBdEIsR0FBeUIsSUFBckU7SUFDRDtJQUNGLEdBakJPOztJQWtCVixTQUFBLG1CQUFBO0lBQUMsQ0FoZEQsQ0FBeUMsYUFBekMsQ0FBQTs7SUNoRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZ0NBLElBQUEsU0FBQTtJQUFBO0lBQUEsVUFBQSxNQUFBLEVBQUE7SUFBK0IsRUFBQUQsU0FBQSxDQUFBLFNBQUEsRUFBQSxNQUFBOztJQUEvQixXQUFBLFNBQUEsR0FBQTtJQUFBLFFBQUEsS0FBQSxHQUFBLE1BQUEsS0FBQSxJQUFBLElBQUEsTUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLEVBQUEsU0FBQSxDQUFBLElBQUEsSUFBQTs7SUFzQ0UsSUFBQSxLQUFBLENBQUEsUUFBQSxHQUFXLEtBQVg7O0lBMkNEOztJQWhGUSxFQUFBLFNBQUEsQ0FBQSxRQUFBLEdBQVAsVUFBZ0IsSUFBaEIsRUFBK0IsSUFBL0IsRUFBbUY7SUFBcEQsUUFBQSxJQUFBLEtBQUEsS0FBQSxDQUFBLEVBQUE7SUFBQSxNQUFBLElBQUEsR0FBQTtJQUE2QixRQUFBLFdBQVcsRUFBRTtJQUExQyxPQUFBO0lBQW9EOztJQUNqRixRQUFNLE1BQU0sR0FBRyxJQUFJLFNBQUosQ0FBYyxJQUFkLENBQWYsQ0FEaUY7O0lBR2pGLFFBQUksSUFBSSxDQUFDLFdBQUwsS0FBcUIsU0FBekIsRUFBb0M7SUFDbEMsTUFBQSxNQUFNLENBQUMsU0FBUCxHQUFtQixJQUFJLENBQUMsV0FBeEI7SUFDRDs7SUFDRCxXQUFPLE1BQVA7SUFDRCxHQVBNOztJQVNBLEVBQUEsU0FBQSxDQUFBLGFBQUEsR0FBUCxVQUFxQixRQUFyQixFQUFzRDtJQUNwRCxXQUFPO0lBQ0wsTUFBQSxRQUFRLEVBQUUsa0JBQUMsU0FBRCxFQUFVO0lBQUssZUFBQSxRQUFRLENBQUMsS0FBVCxDQUFlLFNBQWYsQ0FBeUIsR0FBekIsQ0FBQSxTQUFBLENBQUE7SUFBdUMsT0FEM0Q7SUFFTCxNQUFBLHNCQUFzQixFQUFFLGtDQUFBO0lBQU0sZUFBQXVKLG9CQUFBLENBQUEsTUFBQSxDQUFBO0lBQWlDLE9BRjFEO0lBR0wsTUFBQSxtQkFBbUIsRUFBRSwrQkFBQTtJQUFNLGVBQUEsUUFBUSxDQUFDLEtBQVQsQ0FBQSxxQkFBQSxFQUFBO0lBQXNDLE9BSDVEO0lBSUwsTUFBQSxtQkFBbUIsRUFBRSw2QkFBQyxNQUFELEVBQU87SUFBSyxlQUFBLFFBQVEsQ0FBQyxLQUFULENBQWUsUUFBZixDQUFBLE1BQUEsQ0FBQTtJQUF1QyxPQUpuRTtJQUtMLE1BQUEsb0NBQW9DLEVBQUUsOENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBaUI7SUFDbkQsZUFBQSxRQUFRLENBQUMsZUFBVCxDQUF5QixtQkFBekIsQ0FBNkMsT0FBN0MsRUFBc0QsT0FBdEQsRUFBK0RDLFlBQUEsRUFBL0QsQ0FBQTtJQUFtRixPQU5sRjtJQU9MLE1BQUEsNEJBQTRCLEVBQUUsc0NBQUMsT0FBRCxFQUFVLE9BQVYsRUFBaUI7SUFDM0MsZUFBQSxRQUFRLENBQUMsS0FBVCxDQUFlLG1CQUFmLENBQW1DLE9BQW5DLEVBQTRDLE9BQTVDLEVBQXFEQSxZQUFBLEVBQXJELENBQUE7SUFBeUUsT0FSeEU7SUFTTCxNQUFBLHVCQUF1QixFQUFFLGlDQUFDLE9BQUQsRUFBUTtJQUFLLGVBQUEsTUFBTSxDQUFDLG1CQUFQLENBQTJCLFFBQTNCLEVBQUEsT0FBQSxDQUFBO0lBQTZDLE9BVDlFO0lBVUwsTUFBQSxtQkFBbUIsRUFBRSwrQkFBQTtJQUFNLGVBQUM7SUFBQyxVQUFBLENBQUMsRUFBRSxNQUFNLENBQUMsV0FBWDtJQUF3QixVQUFBLENBQUMsRUFBRSxNQUFNLENBQWxDO0lBQUMsU0FBRDtJQUFnRCxPQVZ0RTtJQVdMLE1BQUEsZUFBZSxFQUFFLDJCQUFBO0lBQU0sZUFBQUMsU0FBQSxDQUFpQixRQUFRLENBQUMsS0FBMUIsRUFBQSxTQUFBLENBQUE7SUFBMkMsT0FYN0Q7SUFZTCxNQUFBLGlCQUFpQixFQUFFLDZCQUFBO0lBQU0sZUFBQSxPQUFPLENBQUMsUUFBUSxDQUFoQixRQUFPLENBQVA7SUFBMEIsT0FaOUM7SUFhTCxNQUFBLFdBQVcsRUFBRSx1QkFBQTtJQUFNLGVBQUEsT0FBTyxDQUFDLFFBQVEsQ0FBaEIsU0FBTyxDQUFQO0lBQTJCLE9BYnpDO0lBY0wsTUFBQSxrQ0FBa0MsRUFBRSw0Q0FBQyxPQUFELEVBQVUsT0FBVixFQUFpQjtJQUNqRCxlQUFBLFFBQVEsQ0FBQyxlQUFULENBQXlCLGdCQUF6QixDQUEwQyxPQUExQyxFQUFtRCxPQUFuRCxFQUE0REQsWUFBQSxFQUE1RCxDQUFBO0lBQWdGLE9BZi9FO0lBZ0JMLE1BQUEsMEJBQTBCLEVBQUUsb0NBQUMsT0FBRCxFQUFVLE9BQVYsRUFBaUI7SUFDekMsZUFBQSxRQUFRLENBQUMsS0FBVCxDQUFlLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLE9BQXpDLEVBQWtEQSxZQUFBLEVBQWxELENBQUE7SUFBc0UsT0FqQnJFO0lBa0JMLE1BQUEscUJBQXFCLEVBQUUsK0JBQUMsT0FBRCxFQUFRO0lBQUssZUFBQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBQSxPQUFBLENBQUE7SUFBMEMsT0FsQnpFO0lBbUJMLE1BQUEsV0FBVyxFQUFFLHFCQUFDLFNBQUQsRUFBVTtJQUFLLGVBQUEsUUFBUSxDQUFDLEtBQVQsQ0FBZSxTQUFmLENBQXlCLE1BQXpCLENBQUEsU0FBQSxDQUFBO0lBQTBDLE9BbkJqRTtJQW9CTCxNQUFBLGlCQUFpQixFQUFFLDJCQUFDLE9BQUQsRUFBVSxLQUFWLEVBQWU7SUFBSyxlQUFDLFFBQVEsQ0FBQyxLQUFULENBQStCLEtBQS9CLENBQXFDLFdBQXJDLENBQWlELE9BQWpELEVBQUQsS0FBQyxDQUFEO0lBQWlFO0lBcEJuRyxLQUFQO0lBc0JELEdBdkJNOztJQWdDUCxFQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUksU0FBQSxDQUFBLFNBQUosRUFBSSxXQUFKLEVBQWE7YUFBYixlQUFBO0lBQ0UsYUFBTyxPQUFPLENBQUMsS0FBSyxVQUFOLENBQWQ7SUFDRCxLQUZZO2FBSWIsYUFBYyxTQUFkLEVBQWdDO0lBQzlCLFdBQUssVUFBTCxHQUFrQixPQUFPLENBQUMsU0FBRCxDQUF6QjtJQUNBLFdBQUssYUFBTDtJQUNELEtBUFk7d0JBQUE7O0lBQUEsR0FBYjs7SUFTQSxFQUFBLFNBQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxHQUFBLFlBQUE7SUFDRSxTQUFLLFdBQUwsQ0FBaUIsUUFBakI7SUFDRCxHQUZEOztJQUlBLEVBQUEsU0FBQSxDQUFBLFNBQUEsQ0FBQSxVQUFBLEdBQUEsWUFBQTtJQUNFLFNBQUssV0FBTCxDQUFpQixVQUFqQjtJQUNELEdBRkQ7O0lBSUEsRUFBQSxTQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsR0FBQSxZQUFBO0lBQ0UsU0FBSyxXQUFMLENBQWlCLE1BQWpCO0lBQ0QsR0FGRDs7SUFJQSxFQUFBLFNBQUEsQ0FBQSxTQUFBLENBQUEsb0JBQUEsR0FBQSxZQUFBO0lBQ0UsV0FBTyxJQUFJLG1CQUFKLENBQXdCLFNBQVMsQ0FBQyxhQUFWLENBQXdCLElBQXhCLENBQXhCLENBQVA7SUFDRCxHQUZEOztJQUlBLEVBQUEsU0FBQSxDQUFBLFNBQUEsQ0FBQSxrQkFBQSxHQUFBLFlBQUE7SUFDRSxRQUFNLElBQUksR0FBRyxLQUFLLEtBQWxCO0lBQ0EsU0FBSyxTQUFMLEdBQWlCLDBCQUEwQixJQUFJLENBQUMsT0FBaEQ7SUFDRCxHQUhEO0lBS0E7Ozs7Ozs7O0lBTVEsRUFBQSxTQUFBLENBQUEsU0FBQSxDQUFBLGFBQUEsR0FBUixZQUFBO0lBQ0UsU0FBSyxXQUFMLENBQWlCLFlBQWpCLENBQThCLE9BQU8sQ0FBQyxLQUFLLFVBQU4sQ0FBckM7SUFDRCxHQUZPOztJQUdWLFNBQUEsU0FBQTtJQUFDLENBakZELENBQStCLFlBQS9CLENBQUE7O0lDaENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQ0lhRSxVQUFiO0lBQUE7SUFBQTtJQUFBOztJQUFBO0lBQUE7SUFBQSxvQ0FTeUJDLEdBVHpCLEVBUzhCO0lBQzFCLGFBQU9BLEdBQUcsQ0FBQ0QsVUFBVSxDQUFDRSxPQUFaLENBQUgsQ0FBd0IsU0FBeEIsQ0FBUDtJQUNEO0lBWEg7SUFBQTtJQUFBLHdCQUN1QjtJQUNuQjtJQUNBLGFBQ0VGLFVBQVUsQ0FBQ0csUUFBWCxLQUNDSCxVQUFVLENBQUNHLFFBQVgsR0FBc0J4SixTQUFPLENBQUN5SixXQUFXLENBQUN4TCxTQUFiLENBRDlCLENBREY7SUFJRDtJQVBIOztJQWFFLHNCQUFZM0UsRUFBWixFQUFnQmdILE9BQWhCLEVBQXlCO0lBQUE7O0lBQUEsbUZBRXJCLFNBQ0U7SUFDRW9KLE1BQUFBLHNCQUFzQixFQUFFLGtDQUFNO0lBQzVCLGVBQU9DLG9CQUFvQixDQUFDN1EsTUFBRCxDQUEzQjtJQUNELE9BSEg7SUFJRThRLE1BQUFBLFdBQVcsRUFBRSx1QkFBTTtJQUNqQixlQUFPLEtBQVA7SUFDRCxPQU5IO0lBT0VDLE1BQUFBLGVBQWUsRUFBRSwyQkFBTTtJQUNyQixlQUFPdlEsRUFBRSxDQUFDd1EsR0FBSCxDQUFPVCxVQUFVLENBQUNFLE9BQWxCLEVBQTJCLFNBQTNCLENBQVA7SUFDRCxPQVRIO0lBVUVRLE1BQUFBLGlCQUFpQixFQUFFLDZCQUFNO0lBQ3ZCLGVBQU96USxFQUFFLENBQUNnQyxRQUFWO0lBQ0QsT0FaSDtJQWFFME8sTUFBQUEsUUFiRixvQkFhV0MsU0FiWCxFQWFzQjtJQUNsQjNRLFFBQUFBLEVBQUUsQ0FBQzRRLElBQUgsQ0FBUTVRLEVBQUUsQ0FBQzZRLE9BQVgsRUFBb0JGLFNBQXBCLEVBQStCLElBQS9CO0lBQ0QsT0FmSDtJQWdCRUcsTUFBQUEsV0FoQkYsdUJBZ0JjSCxTQWhCZCxFQWdCeUI7SUFDckIzUSxRQUFBQSxFQUFFLENBQUMrUSxPQUFILENBQVcvUSxFQUFFLENBQUM2USxPQUFkLEVBQXVCRixTQUF2QjtJQUNELE9BbEJIO0lBbUJFSyxNQUFBQSxtQkFBbUIsRUFBRSw2QkFBQS9OLE1BQU07SUFBQSxlQUFJakQsRUFBRSxDQUFDd1EsR0FBSCxDQUFPaEMsUUFBUCxDQUFnQnZMLE1BQWhCLENBQUo7SUFBQSxPQW5CN0I7SUFvQkVnTyxNQUFBQSwwQkFBMEIsRUFBRSxvQ0FBQ25PLEdBQUQsRUFBTW9PLE9BQU4sRUFBa0I7SUFDNUNsUixRQUFBQSxFQUFFLENBQUN3USxHQUFILENBQU96QyxnQkFBUCxDQUF3QmpMLEdBQXhCLEVBQTZCb08sT0FBN0IsRUFBc0NDLFlBQVksRUFBbEQ7SUFDRCxPQXRCSDtJQXVCRUMsTUFBQUEsNEJBQTRCLEVBQUUsc0NBQUN0TyxHQUFELEVBQU1vTyxPQUFOLEVBQWtCO0lBQzlDbFIsUUFBQUEsRUFBRSxDQUFDd1EsR0FBSCxDQUFPcEMsbUJBQVAsQ0FBMkJ0TCxHQUEzQixFQUFnQ29PLE9BQWhDLEVBQXlDQyxZQUFZLEVBQXJEO0lBQ0QsT0F6Qkg7SUEwQkVFLE1BQUFBLGtDQUFrQyxFQUFFLDRDQUFDQyxPQUFELEVBQVVKLE9BQVY7SUFBQSxlQUNsQ2hGLFFBQVEsQ0FBQ25CLGVBQVQsQ0FBeUJnRCxnQkFBekIsQ0FDRXVELE9BREYsRUFFRUosT0FGRixFQUdFQyxZQUFZLEVBSGQsQ0FEa0M7SUFBQSxPQTFCdEM7SUFnQ0VJLE1BQUFBLG9DQUFvQyxFQUFFLDhDQUFDRCxPQUFELEVBQVVKLE9BQVY7SUFBQSxlQUNwQ2hGLFFBQVEsQ0FBQ25CLGVBQVQsQ0FBeUJxRCxtQkFBekIsQ0FDRWtELE9BREYsRUFFRUosT0FGRixFQUdFQyxZQUFZLEVBSGQsQ0FEb0M7SUFBQSxPQWhDeEM7SUFzQ0VLLE1BQUFBLHFCQUFxQixFQUFFLCtCQUFBTixPQUFPLEVBQUk7SUFDaEMsZUFBTzFSLE1BQU0sQ0FBQ3VPLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDbUQsT0FBbEMsQ0FBUDtJQUNELE9BeENIO0lBeUNFTyxNQUFBQSx1QkFBdUIsRUFBRSxpQ0FBQVAsT0FBTyxFQUFJO0lBQ2xDLGVBQU8xUixNQUFNLENBQUM0TyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQzhDLE9BQXJDLENBQVA7SUFDRCxPQTNDSDtJQTRDRVEsTUFBQUEsaUJBQWlCLEVBQUUsMkJBQUNDLE9BQUQsRUFBVTFMLEtBQVYsRUFBb0I7SUFDckNqRyxRQUFBQSxFQUFFLENBQUM0USxJQUFILENBQVE1USxFQUFFLENBQUM0UixNQUFYLEVBQW1CRCxPQUFuQixFQUE0QjFMLEtBQTVCO0lBQ0QsT0E5Q0g7SUErQ0U0TCxNQUFBQSxtQkFBbUIsRUFBRSwrQkFBTTtJQUN6QixlQUFPN1IsRUFBRSxDQUFDd1EsR0FBSCxDQUFPc0IscUJBQVAsRUFBUDtJQUNELE9BakRIO0lBa0RFQyxNQUFBQSxtQkFBbUIsRUFBRSwrQkFBTTtJQUN6QixlQUFPO0lBQUVDLFVBQUFBLENBQUMsRUFBRXhTLE1BQU0sQ0FBQ3lTLFdBQVo7SUFBeUJDLFVBQUFBLENBQUMsRUFBRTFTLE1BQU0sQ0FBQzJTO0lBQW5DLFNBQVA7SUFDRDtJQXBESCxLQURGLEVBdURFbkwsT0F2REYsQ0FGcUI7SUE0RHhCOztJQXpFSDtJQUFBLEVBQWdDb0wsbUJBQWhDO0FBNEVBLElBQU8sSUFBTUMsV0FBVyxHQUFHO0lBQ3pCelIsRUFBQUEsSUFEeUIsa0JBQ2xCO0lBQ0wsV0FBTztJQUNMaVEsTUFBQUEsT0FBTyxFQUFFLEVBREo7SUFFTGUsTUFBQUEsTUFBTSxFQUFFO0lBRkgsS0FBUDtJQUlELEdBTndCO0lBT3pCVSxFQUFBQSxPQVB5QixxQkFPZjtJQUNSLFNBQUtDLE1BQUwsR0FBYyxJQUFJeEMsVUFBSixDQUFlLElBQWYsQ0FBZDtJQUNBLFNBQUt3QyxNQUFMLENBQVlDLElBQVo7SUFDRCxHQVZ3QjtJQVd6QkMsRUFBQUEsYUFYeUIsMkJBV1Q7SUFDZCxTQUFLRixNQUFMLENBQVlHLE9BQVo7SUFDRDtJQWJ3QixDQUFwQjs7O0FDbEVQOzs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWRBLElBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNnQkE7Ozs7Ozs7OztLQUFBOzs7QUFsQkEsSUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBQUE7OztBQUhBLElBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3FEQSwyQ0FBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUFBOzs7QUF6REEsSUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHQSxpQkFBZTlTLFVBQVUsQ0FBQztJQUN4QitTLEVBQUFBLFNBQVMsRUFBVEE7SUFEd0IsQ0FBRCxDQUF6Qjs7SUNBQXRULFFBQVEsQ0FBQ0MsTUFBRCxDQUFSOzs7Ozs7OzsifQ==
