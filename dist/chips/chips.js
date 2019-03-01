/**
* @module vue-mdc-adapterchips 0.19.4-beta
* @exports VueMDCChips
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^1.0.0-0","material-components-web":"^1.0.0-0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.VueMDCChips = factory());
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
    function emitCustomEvent(el, evtType, evtData) {
      var shouldBubble = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
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

      el.dispatchEvent(evt);
    }

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
    var strings = {
      CHECKMARK_SELECTOR: '.mdc-chip__checkmark',
      ENTRY_ANIMATION_NAME: 'mdc-chip-entry',
      INTERACTION_EVENT: 'MDCChip:interaction',
      LEADING_ICON_SELECTOR: '.mdc-chip__icon--leading',
      REMOVAL_EVENT: 'MDCChip:removal',
      SELECTION_EVENT: 'MDCChip:selection',
      TRAILING_ICON_INTERACTION_EVENT: 'MDCChip:trailingIconInteraction',
      TRAILING_ICON_SELECTOR: '.mdc-chip__icon--trailing'
    };
    var cssClasses = {
      CHECKMARK: 'mdc-chip__checkmark',
      CHIP_EXIT: 'mdc-chip--exit',
      HIDDEN_LEADING_ICON: 'mdc-chip__icon--leading-hidden',
      LEADING_ICON: 'mdc-chip__icon--leading',
      SELECTED: 'mdc-chip--selected',
      TRAILING_ICON: 'mdc-chip__icon--trailing'
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
    var emptyClientRect = {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0
    };

    var MDCChipFoundation =
    /** @class */
    function (_super) {
      __extends(MDCChipFoundation, _super);

      function MDCChipFoundation(adapter) {
        var _this = _super.call(this, _assign({}, MDCChipFoundation.defaultAdapter, adapter)) || this;
        /**
         * Whether a trailing icon click should immediately trigger exit/removal of the chip.
         */


        _this.shouldRemoveOnTrailingIconClick_ = true;
        return _this;
      }

      Object.defineProperty(MDCChipFoundation, "strings", {
        get: function get() {
          return strings;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCChipFoundation, "cssClasses", {
        get: function get() {
          return cssClasses;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCChipFoundation, "defaultAdapter", {
        get: function get() {
          return {
            addClass: function addClass() {
              return undefined;
            },
            addClassToLeadingIcon: function addClassToLeadingIcon() {
              return undefined;
            },
            eventTargetHasClass: function eventTargetHasClass() {
              return false;
            },
            getCheckmarkBoundingClientRect: function getCheckmarkBoundingClientRect() {
              return emptyClientRect;
            },
            getComputedStyleValue: function getComputedStyleValue() {
              return '';
            },
            getRootBoundingClientRect: function getRootBoundingClientRect() {
              return emptyClientRect;
            },
            hasClass: function hasClass() {
              return false;
            },
            hasLeadingIcon: function hasLeadingIcon() {
              return false;
            },
            notifyInteraction: function notifyInteraction() {
              return undefined;
            },
            notifyRemoval: function notifyRemoval() {
              return undefined;
            },
            notifySelection: function notifySelection() {
              return undefined;
            },
            notifyTrailingIconInteraction: function notifyTrailingIconInteraction() {
              return undefined;
            },
            removeClass: function removeClass() {
              return undefined;
            },
            removeClassFromLeadingIcon: function removeClassFromLeadingIcon() {
              return undefined;
            },
            setStyleProperty: function setStyleProperty() {
              return undefined;
            }
          };
        },
        enumerable: true,
        configurable: true
      });

      MDCChipFoundation.prototype.isSelected = function () {
        return this.adapter_.hasClass(cssClasses.SELECTED);
      };

      MDCChipFoundation.prototype.setSelected = function (selected) {
        if (selected) {
          this.adapter_.addClass(cssClasses.SELECTED);
        } else {
          this.adapter_.removeClass(cssClasses.SELECTED);
        }

        this.adapter_.notifySelection(selected);
      };

      MDCChipFoundation.prototype.getShouldRemoveOnTrailingIconClick = function () {
        return this.shouldRemoveOnTrailingIconClick_;
      };

      MDCChipFoundation.prototype.setShouldRemoveOnTrailingIconClick = function (shouldRemove) {
        this.shouldRemoveOnTrailingIconClick_ = shouldRemove;
      };

      MDCChipFoundation.prototype.getDimensions = function () {
        var _this = this;

        var getRootRect = function getRootRect() {
          return _this.adapter_.getRootBoundingClientRect();
        };

        var getCheckmarkRect = function getCheckmarkRect() {
          return _this.adapter_.getCheckmarkBoundingClientRect();
        }; // When a chip has a checkmark and not a leading icon, the bounding rect changes in size depending on the current
        // size of the checkmark.


        if (!this.adapter_.hasLeadingIcon()) {
          var checkmarkRect = getCheckmarkRect();

          if (checkmarkRect) {
            var rootRect = getRootRect();
            var height = rootRect.height; // Checkmark is a square, meaning the client rect's width and height are identical once the animation completes.
            // However, the checkbox is initially hidden by setting the width to 0.
            // To account for an initial width of 0, we use the checkbox's height instead (which equals the end-state width)
            // when adding it to the root client rect's width.

            var checkmarkWidth = checkmarkRect.height;
            var width = rootRect.width + checkmarkWidth;
            return _assign({}, rootRect, {
              width: width,
              height: height
            });
          }
        }

        return getRootRect();
      };
      /**
       * Begins the exit animation which leads to removal of the chip.
       */


      MDCChipFoundation.prototype.beginExit = function () {
        this.adapter_.addClass(cssClasses.CHIP_EXIT);
      };
      /**
       * Handles an interaction event on the root element.
       */


      MDCChipFoundation.prototype.handleInteraction = function (evt) {
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;

        if (evt.type === 'click' || isEnter) {
          this.adapter_.notifyInteraction();
        }
      };
      /**
       * Handles a transition end event on the root element.
       */


      MDCChipFoundation.prototype.handleTransitionEnd = function (evt) {
        var _this = this; // Handle transition end event on the chip when it is about to be removed.


        if (this.adapter_.eventTargetHasClass(evt.target, cssClasses.CHIP_EXIT)) {
          if (evt.propertyName === 'width') {
            this.adapter_.notifyRemoval();
          } else if (evt.propertyName === 'opacity') {
            // See: https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5
            var chipWidth_1 = this.adapter_.getComputedStyleValue('width'); // On the next frame (once we get the computed width), explicitly set the chip's width
            // to its current pixel width, so we aren't transitioning out of 'auto'.

            requestAnimationFrame(function () {
              _this.adapter_.setStyleProperty('width', chipWidth_1); // To mitigate jitter, start transitioning padding and margin before width.


              _this.adapter_.setStyleProperty('padding', '0');

              _this.adapter_.setStyleProperty('margin', '0'); // On the next frame (once width is explicitly set), transition width to 0.


              requestAnimationFrame(function () {
                _this.adapter_.setStyleProperty('width', '0');
              });
            });
          }

          return;
        } // Handle a transition end event on the leading icon or checkmark, since the transition end event bubbles.


        if (evt.propertyName !== 'opacity') {
          return;
        }

        if (this.adapter_.eventTargetHasClass(evt.target, cssClasses.LEADING_ICON) && this.adapter_.hasClass(cssClasses.SELECTED)) {
          this.adapter_.addClassToLeadingIcon(cssClasses.HIDDEN_LEADING_ICON);
        } else if (this.adapter_.eventTargetHasClass(evt.target, cssClasses.CHECKMARK) && !this.adapter_.hasClass(cssClasses.SELECTED)) {
          this.adapter_.removeClassFromLeadingIcon(cssClasses.HIDDEN_LEADING_ICON);
        }
      };
      /**
       * Handles an interaction event on the trailing icon element. This is used to
       * prevent the ripple from activating on interaction with the trailing icon.
       */


      MDCChipFoundation.prototype.handleTrailingIconInteraction = function (evt) {
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        evt.stopPropagation();

        if (evt.type === 'click' || isEnter) {
          this.adapter_.notifyTrailingIconInteraction();

          if (this.shouldRemoveOnTrailingIconClick_) {
            this.beginExit();
          }
        }
      };

      return MDCChipFoundation;
    }(MDCFoundation);

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

    var script$1 = {
      name: 'mdc-chip',
      mixins: [CustomLinkMixin],
      props: {
        leadingIcon: [String],
        trailingIcon: [String],
        leadingIconClasses: [Object],
        trailingIconClasses: [Object]
      },
      inject: ['mdcChipSet'],
      data: function data() {
        return {
          classes: {
            'mdc-chip': true
          },
          styles: {},
          id: ''
        };
      },
      computed: {
        selected: {
          get: function get() {
            return this.foundation.isSelected();
          },
          set: function set(nv) {
            this.foundation.setSelected(nv);
          }
        },
        isFilter: function isFilter() {
          return this.mdcChipSet && this.mdcChipSet.filter;
        },
        haveleadingIcon: function haveleadingIcon() {
          return !!this.leadingIcon || this.leadingIconClasses;
        },
        havetrailingIcon: function havetrailingIcon() {
          return !!this.trailingIcon || this.trailingIconClasses;
        },
        leadingClasses: function leadingClasses() {
          return _extends({}, {
            'material-icons': !!this.leadingIcon
          }, this.leadingIconClasses);
        },
        trailingClasses: function trailingClasses() {
          return _extends({}, {
            'material-icons': !!this.trailingIcon
          }, this.trailingIconClasses);
        }
      },
      created: function created() {
        this.id = this.mdcChipSet.nextId();
      },
      mounted: function mounted() {
        var _this = this;

        this.foundation = new MDCChipFoundation({
          addClass: function addClass(className) {
            return _this.$set(_this.classes, className, true);
          },
          removeClass: function removeClass(className) {
            return _this.$delete(_this.classes, className);
          },
          hasClass: function hasClass(className) {
            return _this.$el.classList.contains(className);
          },
          addClassToLeadingIcon: function addClassToLeadingIcon(className) {
            if (_this.haveleadingIcon) {
              _this.$refs.leadingIcon.classList.add(className);
            }
          },
          removeClassFromLeadingIcon: function removeClassFromLeadingIcon(className) {
            if (_this.haveleadingIcon) {
              _this.$refs.leadingIcon.classList.remove(className);
            }
          },
          eventTargetHasClass: function eventTargetHasClass(target, className) {
            return target.classList.contains(className);
          },
          notifyInteraction: function notifyInteraction() {
            emitCustomEvent(_this.$el, MDCChipFoundation.strings.INTERACTION_EVENT, {
              chipId: _this.id
            }, true);
            _this.mdcChipSet && _this.mdcChipSet.handleInteraction;
          },
          notifySelection: function notifySelection(selected) {
            return emitCustomEvent(_this.$el, MDCChipFoundation.strings.SELECTION_EVENT, {
              chipId: _this.id,
              selected: selected
            }, true
            /* shouldBubble */
            );
          },
          notifyTrailingIconInteraction: function notifyTrailingIconInteraction() {
            emitCustomEvent(_this.$el, MDCChipFoundation.strings.TRAILING_ICON_INTERACTION_EVENT, {
              chipId: _this.id
            }, true);
          },
          notifyRemoval: function notifyRemoval() {
            emitCustomEvent(_this.$el, MDCChipFoundation.strings.REMOVAL_EVENT, {
              chipId: _this.id,
              root: _this.$el
            }, true);
          },
          getComputedStyleValue: function getComputedStyleValue(propertyName) {
            return window.getComputedStyle(_this.$el).getPropertyValue(propertyName);
          },
          setStyleProperty: function setStyleProperty(property, value) {
            return _this.$set(_this.styles, property, value);
          },
          hasLeadingIcon: function hasLeadingIcon() {
            return !!_this.haveleadingIcon;
          },
          getRootBoundingClientRect: function getRootBoundingClientRect() {
            return _this.$el.getBoundingClientRect();
          },
          getCheckmarkBoundingClientRect: function getCheckmarkBoundingClientRect() {
            return _this.$refs.checkmarkEl ? _this.$refs.checkmarkEl.getBoundingClientRect() : null;
          }
        });
        this.foundation.init();
        this.mdcChipSet.chips.push(this);
        this.ripple = new RippleBase(this, {
          computeBoundingRect: function computeBoundingRect() {
            return _this.foundation.getDimensions();
          }
        });
        this.ripple.init();
      },
      beforeDestroy: function beforeDestroy() {
        this.ripple.destroy();
        this.foundation.destroy();
      },
      methods: {
        handleInteraction: function handleInteraction(evt) {
          this.foundation.handleInteraction(evt);
        },
        handleTransitionEnd: function handleTransitionEnd(evt) {
          this.foundation.handleTransitionEnd(evt);
        },
        handleTrailingIconInteraction: function handleTrailingIconInteraction(evt) {
          this.foundation.handleTrailingIconInteraction(evt);
        },
        toggleSelected: function toggleSelected() {
          this.foundation.toggleSelected();
        },
        isSelected: function isSelected() {
          return this.foundation.isSelected();
        }
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
        "div",
        {
          class: _vm.classes,
          style: _vm.styles,
          attrs: { id: _vm.id, tabindex: "0" },
          on: {
            click: _vm.handleInteraction,
            keydown: _vm.handleInteraction,
            transitionend: _vm.handleTransitionEnd
          }
        },
        [
          _vm.haveleadingIcon
            ? _c(
                "i",
                {
                  ref: "leadingIcon",
                  staticClass: "mdc-chip__icon mdc-chip__icon--leading",
                  class: _vm.leadingClasses
                },
                [_vm._v(_vm._s(_vm.leadingIcon))]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isFilter
            ? _c(
                "div",
                { ref: "checkmarkEl", staticClass: "mdc-chip__checkmark" },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "mdc-chip__checkmark-svg",
                      attrs: { viewBox: "-2 -3 30 30" }
                    },
                    [
                      _c("path", {
                        staticClass: "mdc-chip__checkmark-path",
                        attrs: {
                          fill: "none",
                          stroke: "black",
                          d: "M1.73,12.91 8.1,19.28 22.79,4.59"
                        }
                      })
                    ]
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "mdc-chip__text" }, [_vm._t("default")], 2),
          _vm._v(" "),
          _vm.havetrailingIcon
            ? _c(
                "i",
                {
                  ref: "trailingIcon",
                  staticClass: "mdc-chip__icon mdc-chip__icon--trailing",
                  class: _vm.trailingClasses,
                  attrs: { tabindex: "0", role: "button" },
                  on: {
                    click: _vm.handleTrailingIconInteraction,
                    keydown: _vm.handleTrailingIconInteraction
                  }
                },
                [_vm._v(_vm._s(_vm.trailingIcon))]
              )
            : _vm._e()
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
      

      
      var mdcChip = normalizeComponent_1(
        { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
        __vue_inject_styles__$1,
        __vue_script__$1,
        __vue_scope_id__$1,
        __vue_is_functional_template__$1,
        __vue_module_identifier__$1,
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
    var strings$2 = {
      CHIP_SELECTOR: '.mdc-chip'
    };
    var cssClasses$2 = {
      CHOICE: 'mdc-chip-set--choice',
      FILTER: 'mdc-chip-set--filter'
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

    var MDCChipSetFoundation =
    /** @class */
    function (_super) {
      __extends(MDCChipSetFoundation, _super);

      function MDCChipSetFoundation(adapter) {
        var _this = _super.call(this, _assign({}, MDCChipSetFoundation.defaultAdapter, adapter)) || this;
        /**
         * The ids of the selected chips in the set. Only used for choice chip set or filter chip set.
         */


        _this.selectedChipIds_ = [];
        return _this;
      }

      Object.defineProperty(MDCChipSetFoundation, "strings", {
        get: function get() {
          return strings$2;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCChipSetFoundation, "cssClasses", {
        get: function get() {
          return cssClasses$2;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCChipSetFoundation, "defaultAdapter", {
        get: function get() {
          return {
            hasClass: function hasClass() {
              return false;
            },
            removeChip: function removeChip() {
              return undefined;
            },
            setSelected: function setSelected() {
              return undefined;
            }
          };
        },
        enumerable: true,
        configurable: true
      });
      /**
       * Returns an array of the IDs of all selected chips.
       */

      MDCChipSetFoundation.prototype.getSelectedChipIds = function () {
        return this.selectedChipIds_.slice();
      };
      /**
       * Selects the chip with the given id. Deselects all other chips if the chip set is of the choice variant.
       */


      MDCChipSetFoundation.prototype.select = function (chipId) {
        if (this.selectedChipIds_.indexOf(chipId) >= 0) {
          return;
        }

        if (this.adapter_.hasClass(cssClasses$2.CHOICE) && this.selectedChipIds_.length > 0) {
          var previouslySelectedChip = this.selectedChipIds_[0];
          this.selectedChipIds_.length = 0;
          this.adapter_.setSelected(previouslySelectedChip, false);
        }

        this.selectedChipIds_.push(chipId);
        this.adapter_.setSelected(chipId, true);
      };
      /**
       * Handles a chip interaction event
       */


      MDCChipSetFoundation.prototype.handleChipInteraction = function (chipId) {
        if (this.adapter_.hasClass(cssClasses$2.CHOICE) || this.adapter_.hasClass(cssClasses$2.FILTER)) {
          this.toggleSelect_(chipId);
        }
      };
      /**
       * Handles a chip selection event, used to handle discrepancy when selection state is set directly on the Chip.
       */


      MDCChipSetFoundation.prototype.handleChipSelection = function (chipId, selected) {
        var chipIsSelected = this.selectedChipIds_.indexOf(chipId) >= 0;

        if (selected && !chipIsSelected) {
          this.select(chipId);
        } else if (!selected && chipIsSelected) {
          this.deselect_(chipId);
        }
      };
      /**
       * Handles the event when a chip is removed.
       */


      MDCChipSetFoundation.prototype.handleChipRemoval = function (chipId) {
        this.deselect_(chipId);
        this.adapter_.removeChip(chipId);
      };
      /**
       * Deselects the chip with the given id.
       */


      MDCChipSetFoundation.prototype.deselect_ = function (chipId) {
        var index = this.selectedChipIds_.indexOf(chipId);

        if (index >= 0) {
          this.selectedChipIds_.splice(index, 1);
          this.adapter_.setSelected(chipId, false);
        }
      };
      /**
       * Toggles selection of the chip with the given id.
       */


      MDCChipSetFoundation.prototype.toggleSelect_ = function (chipId) {
        if (this.selectedChipIds_.indexOf(chipId) >= 0) {
          this.deselect_(chipId);
        } else {
          this.select(chipId);
        }
      };

      return MDCChipSetFoundation;
    }(MDCFoundation);

    var idCounter = 0;
    var script$2 = {
      name: 'mdc-chip-set',
      props: {
        choice: [Boolean],
        filter: [Boolean],
        input: [Boolean]
      },
      provide: function provide() {
        return {
          mdcChipSet: this
        };
      },
      data: function data() {
        return {
          classes: {
            'mdc-chip-set': true,
            'mdc-chip-set--choice': this.choice,
            'mdc-chip-set--filter': this.filter,
            'mdc-chip-set--input': this.input
          },
          chips: []
        };
      },
      mounted: function mounted() {
        var _this = this;

        this.foundation = new MDCChipSetFoundation({
          hasClass: function hasClass(className) {
            return _this.$el.classList.contains(className);
          },
          removeChip: function removeChip(chipId) {
            var index = _this.findChipIndex(chipId);

            if (index > 0) {
              _this.$nextTick(function () {
                _this.chips.splice(index, 1);
              });
            }
          },
          setSelected: function setSelected(chipId, selected) {
            var index = _this.findChipIndex(chipId);

            if (index >= 0) {
              _this.chips[index].selected = selected;
            }
          }
        });
        this.foundation.init();
      },
      beforeDestroy: function beforeDestroy() {
        this.foundation.destroy();
      },
      methods: {
        nextId: function nextId() {
          return "mdc-chip-".concat(++idCounter);
        },
        findChipIndex: function findChipIndex(chipId) {
          for (var i = 0; i < this.chips.length; i++) {
            if (this.chips[i].id === chipId) {
              return i;
            }
          }

          return -1;
        },
        handleChipInteraction: function handleChipInteraction(evt) {
          this.foundation.handleChipInteraction(evt.detail.chipId);
        },
        handleChipRemoval: function handleChipRemoval(evt) {
          this.foundation.handleChipRemoval(evt.detail.chipId);
        },
        handleChipSelection: function handleChipSelection(evt) {
          this.foundation.handleChipSelection(evt.detail.chipId, evt.detail.selected);
        }
      },
      render: function render(h) {
        var _this2 = this,
            _on;

        return h('div', {
          class: this.classes,
          on: (_on = {}, _defineProperty(_on, MDCChipFoundation.strings.INTERACTION_EVENT, function (evt) {
            return _this2.handleChipInteraction(evt);
          }), _defineProperty(_on, MDCChipFoundation.strings.SELECTION_EVENT, function (evt) {
            return _this2.handleChipSelection(evt);
          }), _defineProperty(_on, MDCChipFoundation.strings.REMOVAL_EVENT, function (evt) {
            return _this2.handleChipRemoval(evt);
          }), _on)
        }, this.$slots.default);
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
      

      
      var mdcChipSet = normalizeComponent_1(
        {},
        __vue_inject_styles__$2,
        __vue_script__$2,
        __vue_scope_id__$2,
        __vue_is_functional_template__$2,
        __vue_module_identifier__$2,
        undefined,
        undefined
      );

    var plugin = BasePlugin({
      mdcChip: mdcChip,
      mdcChipSet: mdcChipSet
    });

    autoInit(plugin);

    return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9hdXRvLWluaXQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYmFzZS1wbHVnaW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWVsZW1lbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWxpbmsuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWV2ZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9jaGlwcy9jaGlwL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvY2hpcHMvY2hpcC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9wb255ZmlsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZG9tL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS1iYXNlLmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS52dWUiLCIuLi8uLi9jb21wb25lbnRzL2NoaXBzL21kYy1jaGlwLnZ1ZSIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvY2hpcHMvY2hpcC1zZXQvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9jaGlwcy9jaGlwLXNldC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vY29tcG9uZW50cy9jaGlwcy9tZGMtY2hpcC1zZXQudnVlIiwiLi4vLi4vY29tcG9uZW50cy9jaGlwcy9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvY2hpcHMvZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGF1dG9Jbml0KHBsdWdpbikge1xuICAvLyBBdXRvLWluc3RhbGxcbiAgbGV0IF9WdWUgPSBudWxsXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIF9WdWUgPSB3aW5kb3cuVnVlXG4gIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvKmdsb2JhbCBnbG9iYWwqL1xuICAgIF9WdWUgPSBnbG9iYWwuVnVlXG4gIH1cbiAgaWYgKF9WdWUpIHtcbiAgICBfVnVlLnVzZShwbHVnaW4pXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBCYXNlUGx1Z2luKGNvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnX19WRVJTSU9OX18nLFxuICAgIGluc3RhbGw6IHZtID0+IHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2tleV1cbiAgICAgICAgdm0uY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQpXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50ID0ge1xuICBmdW5jdGlvbmFsOiB0cnVlLFxuICByZW5kZXIoY3JlYXRlRWxlbWVudCwgY29udGV4dCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFxuICAgICAgY29udGV4dC5wcm9wcy5pcyB8fCBjb250ZXh0LnByb3BzLnRhZyB8fCAnZGl2JyxcbiAgICAgIGNvbnRleHQuZGF0YSxcbiAgICAgIGNvbnRleHQuY2hpbGRyZW5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUVsZW1lbnRNaXhpbiA9IHtcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUVsZW1lbnRcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEN1c3RvbUxpbmsgPSB7XG4gIG5hbWU6ICdjdXN0b20tbGluaycsXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgdGFnOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJ2EnIH0sXG4gICAgbGluazogT2JqZWN0XG4gIH0sXG4gIHJlbmRlcihoLCBjb250ZXh0KSB7XG4gICAgbGV0IGVsZW1lbnRcbiAgICBsZXQgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQuZGF0YSlcblxuICAgIGlmIChjb250ZXh0LnByb3BzLmxpbmsgJiYgY29udGV4dC5wYXJlbnQuJHJvdXRlcikge1xuICAgICAgLy8gcm91dGVyLWxpbmsgY2FzZVxuICAgICAgZWxlbWVudCA9IGNvbnRleHQucGFyZW50LiRyb290LiRvcHRpb25zLmNvbXBvbmVudHNbJ1JvdXRlckxpbmsnXVxuICAgICAgZGF0YS5wcm9wcyA9IE9iamVjdC5hc3NpZ24oeyB0YWc6IGNvbnRleHQucHJvcHMudGFnIH0sIGNvbnRleHQucHJvcHMubGluaylcbiAgICAgIGlmIChkYXRhLm9uLmNsaWNrKSB7XG4gICAgICAgIGRhdGEubmF0aXZlT24gPSB7IGNsaWNrOiBkYXRhLm9uLmNsaWNrIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZWxlbWVudCBmYWxsYmFja1xuICAgICAgZWxlbWVudCA9IGNvbnRleHQucHJvcHMudGFnXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoZWxlbWVudCwgZGF0YSwgY29udGV4dC5jaGlsZHJlbilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9tTGlua01peGluID0ge1xuICBwcm9wczoge1xuICAgIHRvOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgIGV4YWN0OiBCb29sZWFuLFxuICAgIGFwcGVuZDogQm9vbGVhbixcbiAgICByZXBsYWNlOiBCb29sZWFuLFxuICAgIGFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gICAgZXhhY3RBY3RpdmVDbGFzczogU3RyaW5nXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbGluaygpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMudG8gJiYge1xuICAgICAgICAgIHRvOiB0aGlzLnRvLFxuICAgICAgICAgIGV4YWN0OiB0aGlzLmV4YWN0LFxuICAgICAgICAgIGFwcGVuZDogdGhpcy5hcHBlbmQsXG4gICAgICAgICAgcmVwbGFjZTogdGhpcy5yZXBsYWNlLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzOiB0aGlzLmFjdGl2ZUNsYXNzLFxuICAgICAgICAgIGV4YWN0QWN0aXZlQ2xhc3M6IHRoaXMuZXhhY3RBY3RpdmVDbGFzc1xuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgQ3VzdG9tTGlua1xuICB9XG59XG4iLCIvKiBnbG9iYWwgQ3VzdG9tRXZlbnQgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXRDdXN0b21FdmVudChlbCwgZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgbGV0IGV2dFxuICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpXG4gIH1cbiAgZWwuZGlzcGF0Y2hFdmVudChldnQpXG59XG4iLCJjb25zdCBzY29wZSA9XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMHgxMDAwMDAwMCkpLnRvU3RyaW5nKCkgKyAnLSdcblxuZXhwb3J0IGNvbnN0IFZNQVVuaXF1ZUlkTWl4aW4gPSB7XG4gIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICB0aGlzLnZtYV91aWRfID0gc2NvcGUgKyB0aGlzLl91aWRcbiAgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBNRENGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1EQ0ZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICBpZiAoYWRhcHRlciA9PT0gdm9pZCAwKSB7IGFkYXB0ZXIgPSB7fTsgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgICAgICAgICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgICAgICAgICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgICAgICAgICAvLyB2YWxpZGF0aW9uLlxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICByZXR1cm4gTURDRm91bmRhdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBNRENGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgdmFyIHN0cmluZ3MgPSB7XG4gICAgQ0hFQ0tNQVJLX1NFTEVDVE9SOiAnLm1kYy1jaGlwX19jaGVja21hcmsnLFxuICAgIEVOVFJZX0FOSU1BVElPTl9OQU1FOiAnbWRjLWNoaXAtZW50cnknLFxuICAgIElOVEVSQUNUSU9OX0VWRU5UOiAnTURDQ2hpcDppbnRlcmFjdGlvbicsXG4gICAgTEVBRElOR19JQ09OX1NFTEVDVE9SOiAnLm1kYy1jaGlwX19pY29uLS1sZWFkaW5nJyxcbiAgICBSRU1PVkFMX0VWRU5UOiAnTURDQ2hpcDpyZW1vdmFsJyxcbiAgICBTRUxFQ1RJT05fRVZFTlQ6ICdNRENDaGlwOnNlbGVjdGlvbicsXG4gICAgVFJBSUxJTkdfSUNPTl9JTlRFUkFDVElPTl9FVkVOVDogJ01EQ0NoaXA6dHJhaWxpbmdJY29uSW50ZXJhY3Rpb24nLFxuICAgIFRSQUlMSU5HX0lDT05fU0VMRUNUT1I6ICcubWRjLWNoaXBfX2ljb24tLXRyYWlsaW5nJyxcbn07XG5leHBvcnQgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgQ0hFQ0tNQVJLOiAnbWRjLWNoaXBfX2NoZWNrbWFyaycsXG4gICAgQ0hJUF9FWElUOiAnbWRjLWNoaXAtLWV4aXQnLFxuICAgIEhJRERFTl9MRUFESU5HX0lDT046ICdtZGMtY2hpcF9faWNvbi0tbGVhZGluZy1oaWRkZW4nLFxuICAgIExFQURJTkdfSUNPTjogJ21kYy1jaGlwX19pY29uLS1sZWFkaW5nJyxcbiAgICBTRUxFQ1RFRDogJ21kYy1jaGlwLS1zZWxlY3RlZCcsXG4gICAgVFJBSUxJTkdfSUNPTjogJ21kYy1jaGlwX19pY29uLS10cmFpbGluZycsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgZW1wdHlDbGllbnRSZWN0ID0ge1xuICAgIGJvdHRvbTogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICB0b3A6IDAsXG4gICAgd2lkdGg6IDAsXG59O1xudmFyIE1EQ0NoaXBGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ0NoaXBGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0NoaXBGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDQ2hpcEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hldGhlciBhIHRyYWlsaW5nIGljb24gY2xpY2sgc2hvdWxkIGltbWVkaWF0ZWx5IHRyaWdnZXIgZXhpdC9yZW1vdmFsIG9mIHRoZSBjaGlwLlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuc2hvdWxkUmVtb3ZlT25UcmFpbGluZ0ljb25DbGlja18gPSB0cnVlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENDaGlwRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoaXBGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2hpcEZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBhZGRDbGFzc1RvTGVhZGluZ0ljb246IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldEhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBnZXRDaGVja21hcmtCb3VuZGluZ0NsaWVudFJlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVtcHR5Q2xpZW50UmVjdDsgfSxcbiAgICAgICAgICAgICAgICBnZXRDb21wdXRlZFN0eWxlVmFsdWU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcnOyB9LFxuICAgICAgICAgICAgICAgIGdldFJvb3RCb3VuZGluZ0NsaWVudFJlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVtcHR5Q2xpZW50UmVjdDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaGFzTGVhZGluZ0ljb246IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeUludGVyYWN0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5UmVtb3ZhbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeVNlbGVjdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeVRyYWlsaW5nSWNvbkludGVyYWN0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzc0Zyb21MZWFkaW5nSWNvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldFN0eWxlUHJvcGVydHk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5pc1NlbGVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLlNFTEVDVEVEKTtcbiAgICB9O1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTZWxlY3RlZCA9IGZ1bmN0aW9uIChzZWxlY3RlZCkge1xuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5TRUxFQ1RFRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuU0VMRUNURUQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5U2VsZWN0aW9uKHNlbGVjdGVkKTtcbiAgICB9O1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRTaG91bGRSZW1vdmVPblRyYWlsaW5nSWNvbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaG91bGRSZW1vdmVPblRyYWlsaW5nSWNvbkNsaWNrXztcbiAgICB9O1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTaG91bGRSZW1vdmVPblRyYWlsaW5nSWNvbkNsaWNrID0gZnVuY3Rpb24gKHNob3VsZFJlbW92ZSkge1xuICAgICAgICB0aGlzLnNob3VsZFJlbW92ZU9uVHJhaWxpbmdJY29uQ2xpY2tfID0gc2hvdWxkUmVtb3ZlO1xuICAgIH07XG4gICAgTURDQ2hpcEZvdW5kYXRpb24ucHJvdG90eXBlLmdldERpbWVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBnZXRSb290UmVjdCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFkYXB0ZXJfLmdldFJvb3RCb3VuZGluZ0NsaWVudFJlY3QoKTsgfTtcbiAgICAgICAgdmFyIGdldENoZWNrbWFya1JlY3QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hZGFwdGVyXy5nZXRDaGVja21hcmtCb3VuZGluZ0NsaWVudFJlY3QoKTsgfTtcbiAgICAgICAgLy8gV2hlbiBhIGNoaXAgaGFzIGEgY2hlY2ttYXJrIGFuZCBub3QgYSBsZWFkaW5nIGljb24sIHRoZSBib3VuZGluZyByZWN0IGNoYW5nZXMgaW4gc2l6ZSBkZXBlbmRpbmcgb24gdGhlIGN1cnJlbnRcbiAgICAgICAgLy8gc2l6ZSBvZiB0aGUgY2hlY2ttYXJrLlxuICAgICAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaGFzTGVhZGluZ0ljb24oKSkge1xuICAgICAgICAgICAgdmFyIGNoZWNrbWFya1JlY3QgPSBnZXRDaGVja21hcmtSZWN0KCk7XG4gICAgICAgICAgICBpZiAoY2hlY2ttYXJrUmVjdCkge1xuICAgICAgICAgICAgICAgIHZhciByb290UmVjdCA9IGdldFJvb3RSZWN0KCk7XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IHJvb3RSZWN0LmhlaWdodDtcbiAgICAgICAgICAgICAgICAvLyBDaGVja21hcmsgaXMgYSBzcXVhcmUsIG1lYW5pbmcgdGhlIGNsaWVudCByZWN0J3Mgd2lkdGggYW5kIGhlaWdodCBhcmUgaWRlbnRpY2FsIG9uY2UgdGhlIGFuaW1hdGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAgICAgICAgLy8gSG93ZXZlciwgdGhlIGNoZWNrYm94IGlzIGluaXRpYWxseSBoaWRkZW4gYnkgc2V0dGluZyB0aGUgd2lkdGggdG8gMC5cbiAgICAgICAgICAgICAgICAvLyBUbyBhY2NvdW50IGZvciBhbiBpbml0aWFsIHdpZHRoIG9mIDAsIHdlIHVzZSB0aGUgY2hlY2tib3gncyBoZWlnaHQgaW5zdGVhZCAod2hpY2ggZXF1YWxzIHRoZSBlbmQtc3RhdGUgd2lkdGgpXG4gICAgICAgICAgICAgICAgLy8gd2hlbiBhZGRpbmcgaXQgdG8gdGhlIHJvb3QgY2xpZW50IHJlY3QncyB3aWR0aC5cbiAgICAgICAgICAgICAgICB2YXIgY2hlY2ttYXJrV2lkdGggPSBjaGVja21hcmtSZWN0LmhlaWdodDtcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSByb290UmVjdC53aWR0aCArIGNoZWNrbWFya1dpZHRoO1xuICAgICAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXNzaWduKHt9LCByb290UmVjdCwgeyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXRSb290UmVjdCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQmVnaW5zIHRoZSBleGl0IGFuaW1hdGlvbiB3aGljaCBsZWFkcyB0byByZW1vdmFsIG9mIHRoZSBjaGlwLlxuICAgICAqL1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5iZWdpbkV4aXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5DSElQX0VYSVQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBhbiBpbnRlcmFjdGlvbiBldmVudCBvbiB0aGUgcm9vdCBlbGVtZW50LlxuICAgICAqL1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGlzRW50ZXIgPSBldnQua2V5ID09PSAnRW50ZXInIHx8IGV2dC5rZXlDb2RlID09PSAxMztcbiAgICAgICAgaWYgKGV2dC50eXBlID09PSAnY2xpY2snIHx8IGlzRW50ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5SW50ZXJhY3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBhIHRyYW5zaXRpb24gZW5kIGV2ZW50IG9uIHRoZSByb290IGVsZW1lbnQuXG4gICAgICovXG4gICAgTURDQ2hpcEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIEhhbmRsZSB0cmFuc2l0aW9uIGVuZCBldmVudCBvbiB0aGUgY2hpcCB3aGVuIGl0IGlzIGFib3V0IHRvIGJlIHJlbW92ZWQuXG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmV2ZW50VGFyZ2V0SGFzQ2xhc3MoZXZ0LnRhcmdldCwgY3NzQ2xhc3Nlcy5DSElQX0VYSVQpKSB7XG4gICAgICAgICAgICBpZiAoZXZ0LnByb3BlcnR5TmFtZSA9PT0gJ3dpZHRoJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5UmVtb3ZhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZ0LnByb3BlcnR5TmFtZSA9PT0gJ29wYWNpdHknKSB7XG4gICAgICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2Nzcy10cmlja3MuY29tL3VzaW5nLWNzcy10cmFuc2l0aW9ucy1hdXRvLWRpbWVuc2lvbnMvI2FydGljbGUtaGVhZGVyLWlkLTVcbiAgICAgICAgICAgICAgICB2YXIgY2hpcFdpZHRoXzEgPSB0aGlzLmFkYXB0ZXJfLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnd2lkdGgnKTtcbiAgICAgICAgICAgICAgICAvLyBPbiB0aGUgbmV4dCBmcmFtZSAob25jZSB3ZSBnZXQgdGhlIGNvbXB1dGVkIHdpZHRoKSwgZXhwbGljaXRseSBzZXQgdGhlIGNoaXAncyB3aWR0aFxuICAgICAgICAgICAgICAgIC8vIHRvIGl0cyBjdXJyZW50IHBpeGVsIHdpZHRoLCBzbyB3ZSBhcmVuJ3QgdHJhbnNpdGlvbmluZyBvdXQgb2YgJ2F1dG8nLlxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnNldFN0eWxlUHJvcGVydHkoJ3dpZHRoJywgY2hpcFdpZHRoXzEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUbyBtaXRpZ2F0ZSBqaXR0ZXIsIHN0YXJ0IHRyYW5zaXRpb25pbmcgcGFkZGluZyBhbmQgbWFyZ2luIGJlZm9yZSB3aWR0aC5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uc2V0U3R5bGVQcm9wZXJ0eSgncGFkZGluZycsICcwJyk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnNldFN0eWxlUHJvcGVydHkoJ21hcmdpbicsICcwJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9uIHRoZSBuZXh0IGZyYW1lIChvbmNlIHdpZHRoIGlzIGV4cGxpY2l0bHkgc2V0KSwgdHJhbnNpdGlvbiB3aWR0aCB0byAwLlxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uc2V0U3R5bGVQcm9wZXJ0eSgnd2lkdGgnLCAnMCcpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgYSB0cmFuc2l0aW9uIGVuZCBldmVudCBvbiB0aGUgbGVhZGluZyBpY29uIG9yIGNoZWNrbWFyaywgc2luY2UgdGhlIHRyYW5zaXRpb24gZW5kIGV2ZW50IGJ1YmJsZXMuXG4gICAgICAgIGlmIChldnQucHJvcGVydHlOYW1lICE9PSAnb3BhY2l0eScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5ldmVudFRhcmdldEhhc0NsYXNzKGV2dC50YXJnZXQsIGNzc0NsYXNzZXMuTEVBRElOR19JQ09OKSAmJlxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLlNFTEVDVEVEKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzc1RvTGVhZGluZ0ljb24oY3NzQ2xhc3Nlcy5ISURERU5fTEVBRElOR19JQ09OKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmFkYXB0ZXJfLmV2ZW50VGFyZ2V0SGFzQ2xhc3MoZXZ0LnRhcmdldCwgY3NzQ2xhc3Nlcy5DSEVDS01BUkspICYmXG4gICAgICAgICAgICAhdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLlNFTEVDVEVEKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzc0Zyb21MZWFkaW5nSWNvbihjc3NDbGFzc2VzLkhJRERFTl9MRUFESU5HX0lDT04pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGFuIGludGVyYWN0aW9uIGV2ZW50IG9uIHRoZSB0cmFpbGluZyBpY29uIGVsZW1lbnQuIFRoaXMgaXMgdXNlZCB0b1xuICAgICAqIHByZXZlbnQgdGhlIHJpcHBsZSBmcm9tIGFjdGl2YXRpbmcgb24gaW50ZXJhY3Rpb24gd2l0aCB0aGUgdHJhaWxpbmcgaWNvbi5cbiAgICAgKi9cbiAgICBNRENDaGlwRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlVHJhaWxpbmdJY29uSW50ZXJhY3Rpb24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBpc0VudGVyID0gZXZ0LmtleSA9PT0gJ0VudGVyJyB8fCBldnQua2V5Q29kZSA9PT0gMTM7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKGV2dC50eXBlID09PSAnY2xpY2snIHx8IGlzRW50ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5VHJhaWxpbmdJY29uSW50ZXJhY3Rpb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZFJlbW92ZU9uVHJhaWxpbmdJY29uQ2xpY2tfKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iZWdpbkV4aXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0NoaXBGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENDaGlwRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0NoaXBGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0b1xuICogZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqL1xudmFyIHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGFwcGx5UGFzc2l2ZSB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3RcbiAqIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgc3VwcG9ydC5cbiAqL1xudmFyIHN1cHBvcnRzUGFzc2l2ZV87XG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAgIC8vIERldGVjdCB2ZXJzaW9ucyBvZiBFZGdlIHdpdGggYnVnZ3kgdmFyKCkgc3VwcG9ydFxuICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTE0OTU0NDgvXG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93T2JqLmRvY3VtZW50O1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAvLyBUaGUgYnVnIGV4aXN0cyBpZiA6OmJlZm9yZSBzdHlsZSBlbmRzIHVwIHByb3BhZ2F0aW5nIHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICAvLyBBZGRpdGlvbmFsbHksIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBudWxsIGluIGlmcmFtZXMgd2l0aCBkaXNwbGF5OiBcIm5vbmVcIiBpbiBGaXJlZm94LFxuICAgIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93T2JqLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgdmFyIGhhc1BzZXVkb1ZhckJ1ZyA9IGNvbXB1dGVkU3R5bGUgIT09IG51bGwgJiYgY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BTdHlsZSA9PT0gJ3NvbGlkJztcbiAgICBub2RlLnJlbW92ZSgpO1xuICAgIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2gpIHtcbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICB2YXIgQ1NTID0gd2luZG93T2JqLkNTUztcbiAgICB2YXIgc3VwcG9ydHNDc3NWYXJzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIH1cbiAgICB2YXIgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSBDU1MgJiYgdHlwZW9mIENTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSBDU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gICAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgICB2YXIgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKENTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgICAgICBDU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpKTtcbiAgICBpZiAoZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyB8fCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMpIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFycyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcnM7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcnM7XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZFxuICogaWYgc28sIHVzZSB0aGVtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiwgZm9yY2VSZWZyZXNoKSB7XG4gICAgaWYgKGdsb2JhbE9iaiA9PT0gdm9pZCAwKSB7IGdsb2JhbE9iaiA9IHdpbmRvdzsgfVxuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxuICAgIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHZhciBpc1N1cHBvcnRlZF8xID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSwge1xuICAgICAgICAgICAgICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgICAgICAgICAgICAgICBpc1N1cHBvcnRlZF8xID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkXzE7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH0gLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1lbXB0eSBjYW5ub3QgdGhyb3cgZXJyb3IgZHVlIHRvIHRlc3RzLiB0c2xpbnQgYWxzbyBkaXNhYmxlcyBjb25zb2xlLmxvZy5cbiAgICAgICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkXzE7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXZ0LCBwYWdlT2Zmc2V0LCBjbGllbnRSZWN0KSB7XG4gICAgaWYgKCFldnQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICB2YXIgeCA9IHBhZ2VPZmZzZXQueCwgeSA9IHBhZ2VPZmZzZXQueTtcbiAgICB2YXIgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgICB2YXIgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuICAgIHZhciBub3JtYWxpemVkWDtcbiAgICB2YXIgbm9ybWFsaXplZFk7XG4gICAgLy8gRGV0ZXJtaW5lIHRvdWNoIHBvaW50IHJlbGF0aXZlIHRvIHRoZSByaXBwbGUgY29udGFpbmVyLlxuICAgIGlmIChldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIHZhciB0b3VjaEV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBtb3VzZUV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IG1vdXNlRXZlbnQucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gbW91c2VFdmVudC5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgcmV0dXJuIHsgeDogbm9ybWFsaXplZFgsIHk6IG5vcm1hbGl6ZWRZIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENDb21wb25lbnQocm9vdCwgZm91bmRhdGlvbikge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3RfID0gcm9vdDtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIHRzbGliXzEuX19zcHJlYWQoYXJncykpO1xuICAgICAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgICAgIC8vIHRoaXMucm9vdF8gaXMgZGVmaW5lZCBhbmQgY2FuIGJlIHVzZWQgd2l0aGluIHRoZSBmb3VuZGF0aW9uIGNsYXNzLlxuICAgICAgICB0aGlzLmZvdW5kYXRpb25fID0gZm91bmRhdGlvbiA9PT0gdW5kZWZpbmVkID8gdGhpcy5nZXREZWZhdWx0Rm91bmRhdGlvbigpIDogZm91bmRhdGlvbjtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5pbml0KCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gICAgfVxuICAgIE1EQ0NvbXBvbmVudC5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAgICAgLy8gcmV0dXJucyBhbiBpbnN0YW50aWF0ZWQgY29tcG9uZW50IHdpdGggaXRzIHJvb3Qgc2V0IHRvIHRoYXQgZWxlbWVudC4gQWxzbyBub3RlIHRoYXQgaW4gdGhlIGNhc2VzIG9mXG4gICAgICAgIC8vIHN1YmNsYXNzZXMsIGFuIGV4cGxpY2l0IGZvdW5kYXRpb24gY2xhc3Mgd2lsbCBub3QgaGF2ZSB0byBiZSBwYXNzZWQgaW47IGl0IHdpbGwgc2ltcGx5IGJlIGluaXRpYWxpemVkXG4gICAgICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICAgICAgcmV0dXJuIG5ldyBNRENDb21wb25lbnQocm9vdCwgbmV3IE1EQ0ZvdW5kYXRpb24oe30pKTtcbiAgICB9O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBtZXRob2QgcGFyYW0gb25seSBleGlzdHMgZm9yIHR5cGluZyBwdXJwb3NlczsgaXQgZG9lcyBub3QgbmVlZCB0byBiZSB1bml0IHRlc3RlZCAqL1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBfYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoaXMgdG8gZG8gYW55IGFkZGl0aW9uYWwgc2V0dXAgd29yayB0aGF0IHdvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiBhXG4gICAgICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgICAgIC8vIGluaXRpYWxpemVkLiBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgYmVzaWRlcyByb290IGFuZCBmb3VuZGF0aW9uIHdpbGwgYmUgcGFzc2VkIGluIGhlcmUuXG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCBmb3VuZGF0aW9uIGNsYXNzIGZvciB0aGVcbiAgICAgICAgLy8gY29tcG9uZW50LlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSBnZXREZWZhdWx0Rm91bmRhdGlvbiB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkICcgK1xuICAgICAgICAgICAgJ2ZvdW5kYXRpb24gY2xhc3MnKTtcbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCBpZiB0aGV5IG5lZWQgdG8gcGVyZm9ybSB3b3JrIHRvIHN5bmNocm9uaXplIHdpdGggYSBob3N0IERPTVxuICAgICAgICAvLyBvYmplY3QuIEFuIGV4YW1wbGUgb2YgdGhpcyB3b3VsZCBiZSBhIGZvcm0gY29udHJvbCB3cmFwcGVyIHRoYXQgbmVlZHMgdG8gc3luY2hyb25pemUgaXRzIGludGVybmFsIHN0YXRlXG4gICAgICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgICAgIC8vIHJlYWRzL3dyaXRlcyB0aGF0IHdvdWxkIGNhdXNlIGxheW91dCAvIHBhaW50LCBhcyB0aGlzIGlzIGNhbGxlZCBzeW5jaHJvbm91c2x5IGZyb20gd2l0aGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBtYXkgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJlbGVhc2UgYW55IHJlc291cmNlcyAvIGRlcmVnaXN0ZXIgYW55IGxpc3RlbmVycyB0aGV5IGhhdmVcbiAgICAgICAgLy8gYXR0YWNoZWQuIEFuIGV4YW1wbGUgb2YgdGhpcyBtaWdodCBiZSBkZXJlZ2lzdGVyaW5nIGEgcmVzaXplIGV2ZW50IGZyb20gdGhlIHdpbmRvdyBvYmplY3QuXG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLnVubGlzdGVuID0gZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLCB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgICAqL1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIChldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUpIHtcbiAgICAgICAgaWYgKHNob3VsZEJ1YmJsZSA9PT0gdm9pZCAwKSB7IHNob3VsZEJ1YmJsZSA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBldnQ7XG4gICAgICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlLFxuICAgICAgICAgICAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICAgICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vdF8uZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0NvbXBvbmVudDtcbn0oKSk7XG5leHBvcnQgeyBNRENDb21wb25lbnQgfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENDb21wb25lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBcInBvbnlmaWxsXCIgaXMgYSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgbW9kaWZ5IHRoZSBnbG9iYWwgcHJvdG90eXBlIGNoYWluLlxuICogVGhpcyBtYWtlcyBwb255ZmlsbHMgc2FmZXIgdGhhbiB0cmFkaXRpb25hbCBwb2x5ZmlsbHMsIGVzcGVjaWFsbHkgZm9yIGxpYnJhcmllcyBsaWtlIE1EQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgIH1cbiAgICB2YXIgZWwgPSBlbGVtZW50O1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgdmFyIG5hdGl2ZU1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXNcbiAgICAgICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcjtcbiAgICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbnlmaWxsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgcG9ueWZpbGwgZnJvbSAnLi9wb255ZmlsbCc7XG5leHBvcnQgeyBwb255ZmlsbCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAgIC8vIGdpdmVuIHRoYXQgaXQncyBhbiAndXBncmFkZScgdG8gYW4gZXhpc3RpbmcgY29tcG9uZW50LiBUaGF0IGJlaW5nIHNhaWQgaXQgaXMgdGhlIHJvb3RcbiAgICAvLyBDU1MgY2xhc3MgdGhhdCBhbGwgb3RoZXIgQ1NTIGNsYXNzZXMgZGVyaXZlIGZyb20uXG4gICAgQkdfRk9DVVNFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZCcsXG4gICAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gICAgRkdfREVBQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1kZWFjdGl2YXRpb24nLFxuICAgIFJPT1Q6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkJyxcbiAgICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxufTtcbmV4cG9ydCB2YXIgc3RyaW5ncyA9IHtcbiAgICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICAgIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICAgIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxuICAgIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0JyxcbiAgICBWQVJfTEVGVDogJy0tbWRjLXJpcHBsZS1sZWZ0JyxcbiAgICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG59O1xuZXhwb3J0IHZhciBudW1iZXJzID0ge1xuICAgIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsXG4gICAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsXG4gICAgSU5JVElBTF9PUklHSU5fU0NBTEU6IDAuNixcbiAgICBQQURESU5HOiAxMCxcbiAgICBUQVBfREVMQVlfTVM6IDMwMCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyB9IGZyb20gJy4vdXRpbCc7XG4vLyBBY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIHRoZSByb290IGVsZW1lbnQgb2YgZWFjaCBpbnN0YW5jZSBmb3IgYWN0aXZhdGlvblxudmFyIEFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbXG4gICAgJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nLCAnbW91c2Vkb3duJywgJ2tleWRvd24nLFxuXTtcbi8vIERlYWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiBkb2N1bWVudEVsZW1lbnQgd2hlbiBhIHBvaW50ZXItcmVsYXRlZCBkb3duIGV2ZW50IG9jY3Vyc1xudmFyIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gW1xuICAgICd0b3VjaGVuZCcsICdwb2ludGVydXAnLCAnbW91c2V1cCcsICdjb250ZXh0bWVudScsXG5dO1xuLy8gc2ltdWx0YW5lb3VzIG5lc3RlZCBhY3RpdmF0aW9uc1xudmFyIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcbnZhciBNRENSaXBwbGVGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1JpcHBsZUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDUmlwcGxlRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1JpcHBsZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICBfdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICBfdGhpcy5mZ1NjYWxlXyA9ICcwJztcbiAgICAgICAgX3RoaXMuZnJhbWVfID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XG4gICAgICAgIF90aGlzLmluaXRpYWxTaXplXyA9IDA7XG4gICAgICAgIF90aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgICAgIF90aGlzLm1heFJhZGl1c18gPSAwO1xuICAgICAgICBfdGhpcy51bmJvdW5kZWRDb29yZHNfID0geyBsZWZ0OiAwLCB0b3A6IDAgfTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblN0YXRlXyA9IF90aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSB0cnVlO1xuICAgICAgICAgICAgX3RoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8gPSBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMuYWN0aXZhdGVfKGUpOyB9O1xuICAgICAgICBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5kZWFjdGl2YXRlXygpOyB9O1xuICAgICAgICBfdGhpcy5mb2N1c0hhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlRm9jdXMoKTsgfTtcbiAgICAgICAgX3RoaXMuYmx1ckhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlQmx1cigpOyB9O1xuICAgICAgICBfdGhpcy5yZXNpemVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmxheW91dCgpOyB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB4OiAwLCB5OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICBpc1VuYm91bmRlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSk7XG4gICAgICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIFJPT1RfMSA9IF9hLlJPT1QsIFVOQk9VTkRFRF8xID0gX2EuVU5CT1VOREVEO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhST09UXzEpO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRF8xKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZXMgbmVlZCBsYXlvdXQgbG9naWMgYXBwbGllZCBpbW1lZGlhdGVseSB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGJvdGggc2hhZGUgYW5kIHJpcHBsZVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZhdGlvblRpbWVyXykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgICAgICAgICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBST09UXzIgPSBfYS5ST09ULCBVTkJPVU5ERURfMiA9IF9hLlVOQk9VTkRFRDtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoUk9PVF8yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERURfMik7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlQ3NzVmFyc18oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKTtcbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZXZ0IE9wdGlvbmFsIGV2ZW50IGNvbnRhaW5pbmcgcG9zaXRpb24gaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVfKGV2dCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGVfKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRVbmJvdW5kZWQgPSBmdW5jdGlvbiAodW5ib3VuZGVkKSB7XG4gICAgICAgIHZhciBVTkJPVU5ERUQgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuVU5CT1VOREVEO1xuICAgICAgICBpZiAodW5ib3VuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICAgKiB1bnRpbCB0aGUgcG9pbnQgaW4gdGltZSB3aGVyZSB0aGUgZm91bmRhdGlvbiByZXF1ZXN0cyBpdC4gVGhpcyBwcmV2ZW50cyBzY2VuYXJpb3Mgd2hlcmVcbiAgICAgKiBjbGllbnQtc2lkZSBmZWF0dXJlLWRldGVjdGlvbiBtYXkgaGFwcGVuIHRvbyBlYXJseSwgc3VjaCBhcyB3aGVuIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXJcbiAgICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAgICovXG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuc3VwcG9ydHNQcmVzc1JpcHBsZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZhdGlvbkV2ZW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogZmFsc2UsXG4gICAgICAgICAgICBpc0FjdGl2YXRlZDogZmFsc2UsXG4gICAgICAgICAgICBpc1Byb2dyYW1tYXRpYzogZmFsc2UsXG4gICAgICAgICAgICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyA9IGZ1bmN0aW9uIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoZXZ0LnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZW1vdmVDc3NWYXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHJpcHBsZVN0cmluZ3MgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocmlwcGxlU3RyaW5ncyk7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ1ZBUl8nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKHJpcHBsZVN0cmluZ3Nba2V5XSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGVfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VEaXNhYmxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF2b2lkIHJlYWN0aW5nIHRvIGZvbGxvdy1vbiBldmVudHMgZmlyZWQgYnkgdG91Y2ggZGV2aWNlIGFmdGVyIGFuIGFscmVhZHktcHJvY2Vzc2VkIHVzZXIgaW50ZXJhY3Rpb25cbiAgICAgICAgdmFyIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgICAgIHZhciBpc1NhbWVJbnRlcmFjdGlvbiA9IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ICYmIGV2dCAhPT0gdW5kZWZpbmVkICYmIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50LnR5cGUgIT09IGV2dC50eXBlO1xuICAgICAgICBpZiAoaXNTYW1lSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPSBldnQgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmFjdGl2YXRpb25FdmVudCA9IGV2dDtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA/IGZhbHNlIDogZXZ0ICE9PSB1bmRlZmluZWQgJiYgKGV2dC50eXBlID09PSAnbW91c2Vkb3duJyB8fCBldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGV2dC50eXBlID09PSAncG9pbnRlcmRvd24nKTtcbiAgICAgICAgdmFyIGhhc0FjdGl2YXRlZENoaWxkID0gZXZ0ICE9PSB1bmRlZmluZWQgJiYgYWN0aXZhdGVkVGFyZ2V0cy5sZW5ndGggPiAwICYmIGFjdGl2YXRlZFRhcmdldHMuc29tZShmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiBfdGhpcy5hZGFwdGVyXy5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCk7IH0pO1xuICAgICAgICBpZiAoaGFzQWN0aXZhdGVkQ2hpbGQpIHtcbiAgICAgICAgICAgIC8vIEltbWVkaWF0ZWx5IHJlc2V0IGFjdGl2YXRpb24gc3RhdGUsIHdoaWxlIHByZXNlcnZpbmcgbG9naWMgdGhhdCBwcmV2ZW50cyB0b3VjaCBmb2xsb3ctb24gZXZlbnRzXG4gICAgICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKGV2dC50YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhldnQpO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZXZ0KTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUmVzZXQgYXJyYXkgb24gbmV4dCBmcmFtZSBhZnRlciB0aGUgY3VycmVudCBldmVudCBoYXMgaGFkIGEgY2hhbmNlIHRvIGJ1YmJsZSB0byBwcmV2ZW50IGFuY2VzdG9yIHJpcHBsZXNcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcbiAgICAgICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlXG4gICAgICAgICAgICAgICAgJiYgZXZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAmJiAoZXZ0LmtleSA9PT0gJyAnIHx8IGV2dC5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzcGFjZSB3YXMgcHJlc3NlZCwgdHJ5IGFnYWluIHdpdGhpbiBhbiByQUYgY2FsbCB0byBkZXRlY3QgOmFjdGl2ZSwgYmVjYXVzZSBkaWZmZXJlbnQgVUFzIHJlcG9ydFxuICAgICAgICAgICAgICAgIC8vIGFjdGl2ZSBzdGF0ZXMgaW5jb25zaXN0ZW50bHkgd2hlbiB0aGV5J3JlIGNhbGxlZCB3aXRoaW4gZXZlbnQgaGFuZGxpbmcgY29kZTpcbiAgICAgICAgICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAgICAgICAgIC8vIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTI5Mzc0MVxuICAgICAgICAgICAgICAgIC8vIFdlIHRyeSBmaXJzdCBvdXRzaWRlIHJBRiB0byBzdXBwb3J0IEVkZ2UsIHdoaWNoIGRvZXMgbm90IGV4aGliaXQgdGhpcyBwcm9ibGVtLCBidXQgd2lsbCBjcmFzaCBpZiBhIENTU1xuICAgICAgICAgICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICAgICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IF90aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGV2dCk7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IGFjdGl2YXRpb24gc3RhdGUgaW1tZWRpYXRlbHkgaWYgZWxlbWVudCB3YXMgbm90IG1hZGUgYWN0aXZlLlxuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSBfdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICByZXR1cm4gKGV2dCAhPT0gdW5kZWZpbmVkICYmIGV2dC50eXBlID09PSAna2V5ZG93bicpID8gdGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VBY3RpdmUoKSA6IHRydWU7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hbmltYXRlQWN0aXZhdGlvbl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncywgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCA9IF9hLlZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIFZBUl9GR19UUkFOU0xBVEVfRU5EID0gX2EuVkFSX0ZHX1RSQU5TTEFURV9FTkQ7XG4gICAgICAgIHZhciBfYiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgRkdfREVBQ1RJVkFUSU9OID0gX2IuRkdfREVBQ1RJVkFUSU9OLCBGR19BQ1RJVkFUSU9OID0gX2IuRkdfQUNUSVZBVElPTjtcbiAgICAgICAgdmFyIERFQUNUSVZBVElPTl9USU1FT1VUX01TID0gTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLkRFQUNUSVZBVElPTl9USU1FT1VUX01TO1xuICAgICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICB2YXIgdHJhbnNsYXRlU3RhcnQgPSAnJztcbiAgICAgICAgdmFyIHRyYW5zbGF0ZUVuZCA9ICcnO1xuICAgICAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdmFyIF9jID0gdGhpcy5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCksIHN0YXJ0UG9pbnQgPSBfYy5zdGFydFBvaW50LCBlbmRQb2ludCA9IF9jLmVuZFBvaW50O1xuICAgICAgICAgICAgdHJhbnNsYXRlU3RhcnQgPSBzdGFydFBvaW50LnggKyBcInB4LCBcIiArIHN0YXJ0UG9pbnQueSArIFwicHhcIjtcbiAgICAgICAgICAgIHRyYW5zbGF0ZUVuZCA9IGVuZFBvaW50LnggKyBcInB4LCBcIiArIGVuZFBvaW50LnkgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCB0cmFuc2xhdGVTdGFydCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgICAgIC8vIENhbmNlbCBhbnkgb25nb2luZyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBhbmltYXRpb25zXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgIC8vIEZvcmNlIGxheW91dCBpbiBvcmRlciB0byByZS10cmlnZ2VyIHRoZSBhbmltYXRpb24uXG4gICAgICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXygpOyB9LCBERUFDVElWQVRJT05fVElNRU9VVF9NUyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8sIGFjdGl2YXRpb25FdmVudCA9IF9hLmFjdGl2YXRpb25FdmVudCwgd2FzQWN0aXZhdGVkQnlQb2ludGVyID0gX2Eud2FzQWN0aXZhdGVkQnlQb2ludGVyO1xuICAgICAgICB2YXIgc3RhcnRQb2ludDtcbiAgICAgICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhhY3RpdmF0aW9uRXZlbnQsIHRoaXMuYWRhcHRlcl8uZ2V0V2luZG93UGFnZU9mZnNldCgpLCB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgICAgICAgICB5OiB0aGlzLmZyYW1lXy5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDZW50ZXIgdGhlIGVsZW1lbnQgYXJvdW5kIHRoZSBzdGFydCBwb2ludC5cbiAgICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IHN0YXJ0UG9pbnQueCAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICAgICAgeTogc3RhcnRQb2ludC55IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgIH07XG4gICAgICAgIHZhciBlbmRQb2ludCA9IHtcbiAgICAgICAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgc3RhcnRQb2ludDogc3RhcnRQb2ludCwgZW5kUG9pbnQ6IGVuZFBvaW50IH07XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgICAgICAvLyBUaGUgZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBzaG91bGQgb25seSBydW4gYWZ0ZXIgYm90aCBvZiB0aG9zZSBvY2N1ci5cbiAgICAgICAgdmFyIEZHX0RFQUNUSVZBVElPTiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT047XG4gICAgICAgIHZhciBfYSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXywgaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSBfYS5oYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWQgPSBfYS5pc0FjdGl2YXRlZDtcbiAgICAgICAgdmFyIGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25IYXNFbmRlZCAmJiB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8pIHtcbiAgICAgICAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9LCBudW1iZXJzLkZHX0RFQUNUSVZBVElPTl9NUyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIEZHX0FDVElWQVRJT04gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTjtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVzZXRBY3RpdmF0aW9uU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXy5hY3RpdmF0aW9uRXZlbnQ7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgLy8gVG91Y2ggZGV2aWNlcyBtYXkgZmlyZSBhZGRpdGlvbmFsIGV2ZW50cyBmb3IgdGhlIHNhbWUgaW50ZXJhY3Rpb24gd2l0aGluIGEgc2hvcnQgdGltZS5cbiAgICAgICAgLy8gU3RvcmUgdGhlIHByZXZpb3VzIGV2ZW50IHVudGlsIGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhhdCBzdWJzZXF1ZW50IGV2ZW50cyBhcmUgZm9yIG5ldyBpbnRlcmFjdGlvbnMuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdW5kZWZpbmVkOyB9LCBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuVEFQX0RFTEFZX01TKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gc2NlbmFyaW9zIHN1Y2ggYXMgd2hlbiB5b3UgaGF2ZSBhIGtleXVwIGV2ZW50IHRoYXQgYmx1cnMgdGhlIGVsZW1lbnQuXG4gICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0YXRlID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYykge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTsgfSk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hbmltYXRlRGVhY3RpdmF0aW9uXyA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgd2FzQWN0aXZhdGVkQnlQb2ludGVyID0gX2Eud2FzQWN0aXZhdGVkQnlQb2ludGVyLCB3YXNFbGVtZW50TWFkZUFjdGl2ZSA9IF9hLndhc0VsZW1lbnRNYWRlQWN0aXZlO1xuICAgICAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyIHx8IHdhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXRJbnRlcm5hbF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZnJhbWVfID0gdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgICAgIHZhciBtYXhEaW0gPSBNYXRoLm1heCh0aGlzLmZyYW1lXy5oZWlnaHQsIHRoaXMuZnJhbWVfLndpZHRoKTtcbiAgICAgICAgLy8gU3VyZmFjZSBkaWFtZXRlciBpcyB0cmVhdGVkIGRpZmZlcmVudGx5IGZvciB1bmJvdW5kZWQgdnMuIGJvdW5kZWQgcmlwcGxlcy5cbiAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZSBkaWFtZXRlciBpcyBjYWxjdWxhdGVkIHNtYWxsZXIgc2luY2UgdGhlIHN1cmZhY2UgaXMgZXhwZWN0ZWQgdG8gYWxyZWFkeSBiZSBwYWRkZWQgYXBwcm9wcmlhdGVseVxuICAgICAgICAvLyB0byBleHRlbmQgdGhlIGhpdGJveCwgYW5kIHRoZSByaXBwbGUgaXMgZXhwZWN0ZWQgdG8gbWVldCB0aGUgZWRnZXMgb2YgdGhlIHBhZGRlZCBoaXRib3ggKHdoaWNoIGlzIHR5cGljYWxseVxuICAgICAgICAvLyBzcXVhcmUpLiBCb3VuZGVkIHJpcHBsZXMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgZnVsbHkgZXhwZWN0ZWQgdG8gZXhwYW5kIGJleW9uZCB0aGUgc3VyZmFjZSdzIGxvbmdlc3QgZGlhbWV0ZXJcbiAgICAgICAgLy8gKGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGRpYWdvbmFsIHBsdXMgYSBjb25zdGFudCBwYWRkaW5nKSwgYW5kIGFyZSBjbGlwcGVkIGF0IHRoZSBzdXJmYWNlJ3MgYm9yZGVyIHZpYVxuICAgICAgICAvLyBgb3ZlcmZsb3c6IGhpZGRlbmAuXG4gICAgICAgIHZhciBnZXRCb3VuZGVkUmFkaXVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGh5cG90ZW51c2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coX3RoaXMuZnJhbWVfLndpZHRoLCAyKSArIE1hdGgucG93KF90aGlzLmZyYW1lXy5oZWlnaHQsIDIpKTtcbiAgICAgICAgICAgIHJldHVybiBoeXBvdGVudXNlICsgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlBBRERJTkc7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWF4UmFkaXVzXyA9IHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSA/IG1heERpbSA6IGdldEJvdW5kZWRSYWRpdXMoKTtcbiAgICAgICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICAgICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBNYXRoLmZsb29yKG1heERpbSAqIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5JTklUSUFMX09SSUdJTl9TQ0FMRSk7XG4gICAgICAgIHRoaXMuZmdTY2FsZV8gPSBcIlwiICsgdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG4gICAgICAgIHRoaXMudXBkYXRlTGF5b3V0Q3NzVmFyc18oKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnVwZGF0ZUxheW91dENzc1ZhcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3MsIFZBUl9GR19TSVpFID0gX2EuVkFSX0ZHX1NJWkUsIFZBUl9MRUZUID0gX2EuVkFSX0xFRlQsIFZBUl9UT1AgPSBfYS5WQVJfVE9QLCBWQVJfRkdfU0NBTEUgPSBfYS5WQVJfRkdfU0NBTEU7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIHRoaXMuaW5pdGlhbFNpemVfICsgXCJweFwiKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0xFRlQsIHRoaXMudW5ib3VuZGVkQ29vcmRzXy5sZWZ0ICsgXCJweFwiKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgdGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcCArIFwicHhcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENSaXBwbGVGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IHBvbnlmaWxsIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9pbmRleCc7XG5pbXBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcbnZhciBNRENSaXBwbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDUmlwcGxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1JpcHBsZSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTURDUmlwcGxlLmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QsIG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0geyBpc1VuYm91bmRlZDogdW5kZWZpbmVkIH07IH1cbiAgICAgICAgdmFyIHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgICAgIC8vIE9ubHkgb3ZlcnJpZGUgdW5ib3VuZGVkIGJlaGF2aW9yIGlmIG9wdGlvbiBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxuICAgICAgICBpZiAob3B0cy5pc1VuYm91bmRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByaXBwbGUudW5ib3VuZGVkID0gb3B0cy5pc1VuYm91bmRlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmlwcGxlO1xuICAgIH07XG4gICAgTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyk7IH0sXG4gICAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmNvbnRhaW5zKHRhcmdldCk7IH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB9KTsgfSxcbiAgICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gcG9ueWZpbGwubWF0Y2hlcyhpbnN0YW5jZS5yb290XywgJzphY3RpdmUnKTsgfSxcbiAgICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBCb29sZWFuKGluc3RhbmNlLmRpc2FibGVkKTsgfSxcbiAgICAgICAgICAgIGlzVW5ib3VuZGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBCb29sZWFuKGluc3RhbmNlLnVuYm91bmRlZCk7IH0sXG4gICAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2Uucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6IGZ1bmN0aW9uICh2YXJOYW1lLCB2YWx1ZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpOyB9LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZS5wcm90b3R5cGUsIFwidW5ib3VuZGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLnVuYm91bmRlZF8pO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh1bmJvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5ib3VuZGVkXyA9IEJvb2xlYW4odW5ib3VuZGVkKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VW5ib3VuZGVkXygpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIodGhpcykpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByb290ID0gdGhpcy5yb290XztcbiAgICAgICAgdGhpcy51bmJvdW5kZWQgPSAnbWRjUmlwcGxlSXNVbmJvdW5kZWQnIGluIHJvb3QuZGF0YXNldDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb3N1cmUgQ29tcGlsZXIgdGhyb3dzIGFuIGFjY2VzcyBjb250cm9sIGVycm9yIHdoZW4gZGlyZWN0bHkgYWNjZXNzaW5nIGFcbiAgICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICAgKiBCeSBhY2Nlc3NpbmcgdGhlIHByb3RlY3RlZCBwcm9wZXJ0eSBpbnNpZGUgYSBtZXRob2QsIHdlIHNvbHZlIHRoYXQgcHJvYmxlbS5cbiAgICAgKiBUaGF0J3Mgd2h5IHRoaXMgZnVuY3Rpb24gZXhpc3RzLlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuc2V0VW5ib3VuZGVkXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVbmJvdW5kZWQoQm9vbGVhbih0aGlzLnVuYm91bmRlZF8pKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENSaXBwbGU7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDUmlwcGxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5leHBvcnQgeyB1dGlsIH07XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvaW5kZXgnXG5pbXBvcnQgeyBzdXBwb3J0c0Nzc1ZhcmlhYmxlcywgYXBwbHlQYXNzaXZlIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS91dGlsJ1xuaW1wb3J0IHsgbWF0Y2hlcyB9IGZyb20gJ0BtYXRlcmlhbC9kb20vcG9ueWZpbGwnXG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVCYXNlIGV4dGVuZHMgTURDUmlwcGxlRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgTUFUQ0hFUygpIHtcbiAgICAvKiBnbG9iYWwgSFRNTEVsZW1lbnQgKi9cbiAgICByZXR1cm4gKFxuICAgICAgUmlwcGxlQmFzZS5fbWF0Y2hlcyB8fFxuICAgICAgKFJpcHBsZUJhc2UuX21hdGNoZXMgPSBtYXRjaGVzKEhUTUxFbGVtZW50LnByb3RvdHlwZSkpXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGlzU3VyZmFjZUFjdGl2ZShyZWYpIHtcbiAgICByZXR1cm4gcmVmW1JpcHBsZUJhc2UuTUFUQ0hFU10oJzphY3RpdmUnKVxuICB9XG5cbiAgY29uc3RydWN0b3Iodm0sIG9wdGlvbnMpIHtcbiAgICBzdXBlcihcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uJGVsW1JpcHBsZUJhc2UuTUFUQ0hFU10oJzphY3RpdmUnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS5kaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2bS4kc2V0KHZtLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJGRlbGV0ZSh2bS5jbGFzc2VzLCBjbGFzc05hbWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiB0YXJnZXQgPT4gdm0uJGVsLmNvbnRhaW5zKHRhcmdldCksXG4gICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHZtLiRlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5zdHlsZXMsIHZhck5hbWUsIHZhbHVlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgUmlwcGxlTWl4aW4gPSB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5yaXBwbGUuZGVzdHJveSgpXG4gIH1cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGN1c3RvbS1lbGVtZW50IFxuICAgIDp0YWc9XCJ0YWdcIiBcbiAgICA6Y2xhc3Nlcz1cImNsYXNzZXNcIlxuICAgIDpzdHlsZXM9XCJzdHlsZXNcIiBcbiAgICBjbGFzcz1cIm1kYy1yaXBwbGVcIj5cbiAgICA8c2xvdCAvPlxuICA8L2N1c3RvbS1lbGVtZW50PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnRNaXhpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgeyBSaXBwbGVNaXhpbiB9IGZyb20gJy4vbWRjLXJpcHBsZS1iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtcmlwcGxlJyxcbiAgbWl4aW5zOiBbQ3VzdG9tRWxlbWVudE1peGluLCBSaXBwbGVNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgdGFnOiBTdHJpbmdcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICA6aWQ9XCJpZFwiXG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiXG4gICAgOnN0eWxlPVwic3R5bGVzXCJcbiAgICB0YWJpbmRleD1cIjBcIlxuICAgIEBjbGljaz1cImhhbmRsZUludGVyYWN0aW9uXCJcbiAgICBAa2V5ZG93bj1cImhhbmRsZUludGVyYWN0aW9uXCJcbiAgICBAdHJhbnNpdGlvbmVuZD1cImhhbmRsZVRyYW5zaXRpb25FbmRcIlxuICA+XG4gICAgPGlcbiAgICAgIHYtaWY9XCJoYXZlbGVhZGluZ0ljb25cIlxuICAgICAgcmVmPVwibGVhZGluZ0ljb25cIlxuICAgICAgOmNsYXNzPVwibGVhZGluZ0NsYXNzZXNcIlxuICAgICAgY2xhc3M9XCJtZGMtY2hpcF9faWNvbiBtZGMtY2hpcF9faWNvbi0tbGVhZGluZ1wiXG4gICAgICA+e3sgbGVhZGluZ0ljb24gfX08L2lcbiAgICA+XG4gICAgPGRpdiB2LWlmPVwiaXNGaWx0ZXJcIiByZWY9XCJjaGVja21hcmtFbFwiIGNsYXNzPVwibWRjLWNoaXBfX2NoZWNrbWFya1wiPlxuICAgICAgPHN2ZyBjbGFzcz1cIm1kYy1jaGlwX19jaGVja21hcmstc3ZnXCIgdmlld0JveD1cIi0yIC0zIDMwIDMwXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgY2xhc3M9XCJtZGMtY2hpcF9fY2hlY2ttYXJrLXBhdGhcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgICAgZD1cIk0xLjczLDEyLjkxIDguMSwxOS4yOCAyMi43OSw0LjU5XCJcbiAgICAgICAgLz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZGMtY2hpcF9fdGV4dFwiPjxzbG90IC8+PC9kaXY+XG4gICAgPGlcbiAgICAgIHYtaWY9XCJoYXZldHJhaWxpbmdJY29uXCJcbiAgICAgIHJlZj1cInRyYWlsaW5nSWNvblwiXG4gICAgICA6Y2xhc3M9XCJ0cmFpbGluZ0NsYXNzZXNcIlxuICAgICAgY2xhc3M9XCJtZGMtY2hpcF9faWNvbiBtZGMtY2hpcF9faWNvbi0tdHJhaWxpbmdcIlxuICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgQGNsaWNrPVwiaGFuZGxlVHJhaWxpbmdJY29uSW50ZXJhY3Rpb25cIlxuICAgICAgQGtleWRvd249XCJoYW5kbGVUcmFpbGluZ0ljb25JbnRlcmFjdGlvblwiXG4gICAgICA+e3sgdHJhaWxpbmdJY29uIH19PC9pXG4gICAgPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5hcHBseVBhc3NpdmVcbjxzY3JpcHQ+XG5pbXBvcnQgeyBNRENDaGlwRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9jaGlwcy9jaGlwL2ZvdW5kYXRpb24nXG5pbXBvcnQgeyBDdXN0b21MaW5rTWl4aW4sIGVtaXRDdXN0b21FdmVudCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgeyBSaXBwbGVCYXNlIH0gZnJvbSAnLi4vcmlwcGxlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtY2hpcCcsXG4gIG1peGluczogW0N1c3RvbUxpbmtNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgbGVhZGluZ0ljb246IFtTdHJpbmddLFxuICAgIHRyYWlsaW5nSWNvbjogW1N0cmluZ10sXG4gICAgbGVhZGluZ0ljb25DbGFzc2VzOiBbT2JqZWN0XSxcbiAgICB0cmFpbGluZ0ljb25DbGFzc2VzOiBbT2JqZWN0XVxuICB9LFxuICBpbmplY3Q6IFsnbWRjQ2hpcFNldCddLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgICdtZGMtY2hpcCc6IHRydWVcbiAgICAgIH0sXG4gICAgICBzdHlsZXM6IHt9LFxuICAgICAgaWQ6ICcnXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHNlbGVjdGVkOiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb24uaXNTZWxlY3RlZCgpXG4gICAgICB9LFxuICAgICAgc2V0KG52KSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRTZWxlY3RlZChudilcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzRmlsdGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWRjQ2hpcFNldCAmJiB0aGlzLm1kY0NoaXBTZXQuZmlsdGVyXG4gICAgfSxcbiAgICBoYXZlbGVhZGluZ0ljb24oKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmxlYWRpbmdJY29uIHx8IHRoaXMubGVhZGluZ0ljb25DbGFzc2VzXG4gICAgfSxcbiAgICBoYXZldHJhaWxpbmdJY29uKCkge1xuICAgICAgcmV0dXJuICEhdGhpcy50cmFpbGluZ0ljb24gfHwgdGhpcy50cmFpbGluZ0ljb25DbGFzc2VzXG4gICAgfSxcbiAgICBsZWFkaW5nQ2xhc3NlcygpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAge1xuICAgICAgICAgICdtYXRlcmlhbC1pY29ucyc6ICEhdGhpcy5sZWFkaW5nSWNvblxuICAgICAgICB9LFxuICAgICAgICB0aGlzLmxlYWRpbmdJY29uQ2xhc3Nlc1xuICAgICAgKVxuICAgIH0sXG4gICAgdHJhaWxpbmdDbGFzc2VzKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICB7XG4gICAgICAgICAgJ21hdGVyaWFsLWljb25zJzogISF0aGlzLnRyYWlsaW5nSWNvblxuICAgICAgICB9LFxuICAgICAgICB0aGlzLnRyYWlsaW5nSWNvbkNsYXNzZXNcbiAgICAgIClcbiAgICB9XG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmlkID0gdGhpcy5tZGNDaGlwU2V0Lm5leHRJZCgpXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ0NoaXBGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kc2V0KHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKSxcbiAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZGVsZXRlKHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lKSxcbiAgICAgIGhhc0NsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICBhZGRDbGFzc1RvTGVhZGluZ0ljb246IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmhhdmVsZWFkaW5nSWNvbikge1xuICAgICAgICAgIHRoaXMuJHJlZnMubGVhZGluZ0ljb24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZW1vdmVDbGFzc0Zyb21MZWFkaW5nSWNvbjogY2xhc3NOYW1lID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaGF2ZWxlYWRpbmdJY29uKSB7XG4gICAgICAgICAgdGhpcy4kcmVmcy5sZWFkaW5nSWNvbi5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGV2ZW50VGFyZ2V0SGFzQ2xhc3M6ICh0YXJnZXQsIGNsYXNzTmFtZSkgPT5cbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgbm90aWZ5SW50ZXJhY3Rpb246ICgpID0+IHtcbiAgICAgICAgZW1pdEN1c3RvbUV2ZW50KFxuICAgICAgICAgIHRoaXMuJGVsLFxuICAgICAgICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnN0cmluZ3MuSU5URVJBQ1RJT05fRVZFTlQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hpcElkOiB0aGlzLmlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5tZGNDaGlwU2V0ICYmIHRoaXMubWRjQ2hpcFNldC5oYW5kbGVJbnRlcmFjdGlvblxuICAgICAgfSxcblxuICAgICAgbm90aWZ5U2VsZWN0aW9uOiBzZWxlY3RlZCA9PlxuICAgICAgICBlbWl0Q3VzdG9tRXZlbnQoXG4gICAgICAgICAgdGhpcy4kZWwsXG4gICAgICAgICAgTURDQ2hpcEZvdW5kYXRpb24uc3RyaW5ncy5TRUxFQ1RJT05fRVZFTlQsXG4gICAgICAgICAgeyBjaGlwSWQ6IHRoaXMuaWQsIHNlbGVjdGVkOiBzZWxlY3RlZCB9LFxuICAgICAgICAgIHRydWUgLyogc2hvdWxkQnViYmxlICovXG4gICAgICAgICksXG4gICAgICBub3RpZnlUcmFpbGluZ0ljb25JbnRlcmFjdGlvbjogKCkgPT4ge1xuICAgICAgICBlbWl0Q3VzdG9tRXZlbnQoXG4gICAgICAgICAgdGhpcy4kZWwsXG4gICAgICAgICAgTURDQ2hpcEZvdW5kYXRpb24uc3RyaW5ncy5UUkFJTElOR19JQ09OX0lOVEVSQUNUSU9OX0VWRU5ULFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoaXBJZDogdGhpcy5pZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApXG4gICAgICB9LFxuICAgICAgbm90aWZ5UmVtb3ZhbDogKCkgPT4ge1xuICAgICAgICBlbWl0Q3VzdG9tRXZlbnQoXG4gICAgICAgICAgdGhpcy4kZWwsXG4gICAgICAgICAgTURDQ2hpcEZvdW5kYXRpb24uc3RyaW5ncy5SRU1PVkFMX0VWRU5ULFxuICAgICAgICAgIHsgY2hpcElkOiB0aGlzLmlkLCByb290OiB0aGlzLiRlbCB9LFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIGdldENvbXB1dGVkU3R5bGVWYWx1ZTogcHJvcGVydHlOYW1lID0+XG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuJGVsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZSksXG4gICAgICBzZXRTdHlsZVByb3BlcnR5OiAocHJvcGVydHksIHZhbHVlKSA9PlxuICAgICAgICB0aGlzLiRzZXQodGhpcy5zdHlsZXMsIHByb3BlcnR5LCB2YWx1ZSksXG5cbiAgICAgIGhhc0xlYWRpbmdJY29uOiAoKSA9PiAhIXRoaXMuaGF2ZWxlYWRpbmdJY29uLFxuICAgICAgZ2V0Um9vdEJvdW5kaW5nQ2xpZW50UmVjdDogKCkgPT4gdGhpcy4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBnZXRDaGVja21hcmtCb3VuZGluZ0NsaWVudFJlY3Q6ICgpID0+XG4gICAgICAgIHRoaXMuJHJlZnMuY2hlY2ttYXJrRWxcbiAgICAgICAgICA/IHRoaXMuJHJlZnMuY2hlY2ttYXJrRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICA6IG51bGxcbiAgICB9KVxuXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuXG4gICAgdGhpcy5tZGNDaGlwU2V0LmNoaXBzLnB1c2godGhpcylcblxuICAgIHRoaXMucmlwcGxlID0gbmV3IFJpcHBsZUJhc2UodGhpcywge1xuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gdGhpcy5mb3VuZGF0aW9uLmdldERpbWVuc2lvbnMoKVxuICAgIH0pXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5yaXBwbGUuZGVzdHJveSgpXG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KVxuICAgIH0sXG4gICAgaGFuZGxlVHJhbnNpdGlvbkVuZChldnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVUcmFuc2l0aW9uRW5kKGV2dClcbiAgICB9LFxuICAgIGhhbmRsZVRyYWlsaW5nSWNvbkludGVyYWN0aW9uKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZVRyYWlsaW5nSWNvbkludGVyYWN0aW9uKGV2dClcbiAgICB9LFxuICAgIHRvZ2dsZVNlbGVjdGVkKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnRvZ2dsZVNlbGVjdGVkKClcbiAgICB9LFxuICAgIGlzU2VsZWN0ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uLmlzU2VsZWN0ZWQoKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgc3RyaW5ncyA9IHtcbiAgICBDSElQX1NFTEVDVE9SOiAnLm1kYy1jaGlwJyxcbn07XG5leHBvcnQgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgQ0hPSUNFOiAnbWRjLWNoaXAtc2V0LS1jaG9pY2UnLFxuICAgIEZJTFRFUjogJ21kYy1jaGlwLXNldC0tZmlsdGVyJyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENDaGlwU2V0Rm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENDaGlwU2V0Rm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENDaGlwU2V0Rm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ0NoaXBTZXRGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpZHMgb2YgdGhlIHNlbGVjdGVkIGNoaXBzIGluIHRoZSBzZXQuIE9ubHkgdXNlZCBmb3IgY2hvaWNlIGNoaXAgc2V0IG9yIGZpbHRlciBjaGlwIHNldC5cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLnNlbGVjdGVkQ2hpcElkc18gPSBbXTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2hpcFNldEZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENDaGlwU2V0Rm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoaXBTZXRGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDaGlwOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIElEcyBvZiBhbGwgc2VsZWN0ZWQgY2hpcHMuXG4gICAgICovXG4gICAgTURDQ2hpcFNldEZvdW5kYXRpb24ucHJvdG90eXBlLmdldFNlbGVjdGVkQ2hpcElkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRDaGlwSWRzXy5zbGljZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2VsZWN0cyB0aGUgY2hpcCB3aXRoIHRoZSBnaXZlbiBpZC4gRGVzZWxlY3RzIGFsbCBvdGhlciBjaGlwcyBpZiB0aGUgY2hpcCBzZXQgaXMgb2YgdGhlIGNob2ljZSB2YXJpYW50LlxuICAgICAqL1xuICAgIE1EQ0NoaXBTZXRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbiAoY2hpcElkKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2hpcElkc18uaW5kZXhPZihjaGlwSWQpID49IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkNIT0lDRSkgJiYgdGhpcy5zZWxlY3RlZENoaXBJZHNfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBwcmV2aW91c2x5U2VsZWN0ZWRDaGlwID0gdGhpcy5zZWxlY3RlZENoaXBJZHNfWzBdO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoaXBJZHNfLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFNlbGVjdGVkKHByZXZpb3VzbHlTZWxlY3RlZENoaXAsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hpcElkc18ucHVzaChjaGlwSWQpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFNlbGVjdGVkKGNoaXBJZCwgdHJ1ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGEgY2hpcCBpbnRlcmFjdGlvbiBldmVudFxuICAgICAqL1xuICAgIE1EQ0NoaXBTZXRGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVDaGlwSW50ZXJhY3Rpb24gPSBmdW5jdGlvbiAoY2hpcElkKSB7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuQ0hPSUNFKSB8fCB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuRklMVEVSKSkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3RfKGNoaXBJZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgYSBjaGlwIHNlbGVjdGlvbiBldmVudCwgdXNlZCB0byBoYW5kbGUgZGlzY3JlcGFuY3kgd2hlbiBzZWxlY3Rpb24gc3RhdGUgaXMgc2V0IGRpcmVjdGx5IG9uIHRoZSBDaGlwLlxuICAgICAqL1xuICAgIE1EQ0NoaXBTZXRGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVDaGlwU2VsZWN0aW9uID0gZnVuY3Rpb24gKGNoaXBJZCwgc2VsZWN0ZWQpIHtcbiAgICAgICAgdmFyIGNoaXBJc1NlbGVjdGVkID0gdGhpcy5zZWxlY3RlZENoaXBJZHNfLmluZGV4T2YoY2hpcElkKSA+PSAwO1xuICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgIWNoaXBJc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdChjaGlwSWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFzZWxlY3RlZCAmJiBjaGlwSXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdF8oY2hpcElkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgZXZlbnQgd2hlbiBhIGNoaXAgaXMgcmVtb3ZlZC5cbiAgICAgKi9cbiAgICBNRENDaGlwU2V0Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQ2hpcFJlbW92YWwgPSBmdW5jdGlvbiAoY2hpcElkKSB7XG4gICAgICAgIHRoaXMuZGVzZWxlY3RfKGNoaXBJZCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2hpcChjaGlwSWQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGVzZWxlY3RzIHRoZSBjaGlwIHdpdGggdGhlIGdpdmVuIGlkLlxuICAgICAqL1xuICAgIE1EQ0NoaXBTZXRGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXNlbGVjdF8gPSBmdW5jdGlvbiAoY2hpcElkKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuc2VsZWN0ZWRDaGlwSWRzXy5pbmRleE9mKGNoaXBJZCk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hpcElkc18uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U2VsZWN0ZWQoY2hpcElkLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgc2VsZWN0aW9uIG9mIHRoZSBjaGlwIHdpdGggdGhlIGdpdmVuIGlkLlxuICAgICAqL1xuICAgIE1EQ0NoaXBTZXRGb3VuZGF0aW9uLnByb3RvdHlwZS50b2dnbGVTZWxlY3RfID0gZnVuY3Rpb24gKGNoaXBJZCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENoaXBJZHNfLmluZGV4T2YoY2hpcElkKSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc2VsZWN0XyhjaGlwSWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QoY2hpcElkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0NoaXBTZXRGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENDaGlwU2V0Rm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0NoaXBTZXRGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCI8c2NyaXB0PlxuaW1wb3J0IE1EQ0NoaXBTZXRGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9jaGlwcy9jaGlwLXNldC9mb3VuZGF0aW9uJ1xuaW1wb3J0IHsgTURDQ2hpcEZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvY2hpcHMvY2hpcC9mb3VuZGF0aW9uJ1xuXG5sZXQgaWRDb3VudGVyID0gMFxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtY2hpcC1zZXQnLFxuICBwcm9wczoge1xuICAgIGNob2ljZTogW0Jvb2xlYW5dLFxuICAgIGZpbHRlcjogW0Jvb2xlYW5dLFxuICAgIGlucHV0OiBbQm9vbGVhbl1cbiAgfSxcbiAgcHJvdmlkZSgpIHtcbiAgICByZXR1cm4geyBtZGNDaGlwU2V0OiB0aGlzIH1cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICAnbWRjLWNoaXAtc2V0JzogdHJ1ZSxcbiAgICAgICAgJ21kYy1jaGlwLXNldC0tY2hvaWNlJzogdGhpcy5jaG9pY2UsXG4gICAgICAgICdtZGMtY2hpcC1zZXQtLWZpbHRlcic6IHRoaXMuZmlsdGVyLFxuICAgICAgICAnbWRjLWNoaXAtc2V0LS1pbnB1dCc6IHRoaXMuaW5wdXRcbiAgICAgIH0sXG5cbiAgICAgIGNoaXBzOiBbXVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDQ2hpcFNldEZvdW5kYXRpb24oe1xuICAgICAgaGFzQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNoaXA6IGNoaXBJZCA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kQ2hpcEluZGV4KGNoaXBJZClcblxuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGlwcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldFNlbGVjdGVkOiAoY2hpcElkLCBzZWxlY3RlZCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZENoaXBJbmRleChjaGlwSWQpXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5jaGlwc1tpbmRleF0uc2VsZWN0ZWQgPSBzZWxlY3RlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24uZGVzdHJveSgpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBuZXh0SWQoKSB7XG4gICAgICByZXR1cm4gYG1kYy1jaGlwLSR7KytpZENvdW50ZXJ9YFxuICAgIH0sXG4gICAgZmluZENoaXBJbmRleChjaGlwSWQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5jaGlwc1tpXS5pZCA9PT0gY2hpcElkKSB7XG4gICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIC0xXG4gICAgfSxcbiAgICBoYW5kbGVDaGlwSW50ZXJhY3Rpb24oZXZ0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlQ2hpcEludGVyYWN0aW9uKGV2dC5kZXRhaWwuY2hpcElkKVxuICAgIH0sXG4gICAgaGFuZGxlQ2hpcFJlbW92YWwoZXZ0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlQ2hpcFJlbW92YWwoZXZ0LmRldGFpbC5jaGlwSWQpXG4gICAgfSxcbiAgICBoYW5kbGVDaGlwU2VsZWN0aW9uKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUNoaXBTZWxlY3Rpb24oXG4gICAgICAgIGV2dC5kZXRhaWwuY2hpcElkLFxuICAgICAgICBldnQuZGV0YWlsLnNlbGVjdGVkXG4gICAgICApXG4gICAgfVxuICB9LFxuICByZW5kZXIoaCkge1xuICAgIHJldHVybiBoKFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiB0aGlzLmNsYXNzZXMsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgW01EQ0NoaXBGb3VuZGF0aW9uLnN0cmluZ3MuSU5URVJBQ1RJT05fRVZFTlRdOiBldnQgPT5cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hpcEludGVyYWN0aW9uKGV2dCksXG4gICAgICAgICAgW01EQ0NoaXBGb3VuZGF0aW9uLnN0cmluZ3MuU0VMRUNUSU9OX0VWRU5UXTogZXZ0ID0+XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoaXBTZWxlY3Rpb24oZXZ0KSxcbiAgICAgICAgICBbTURDQ2hpcEZvdW5kYXRpb24uc3RyaW5ncy5SRU1PVkFMX0VWRU5UXTogZXZ0ID0+XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoaXBSZW1vdmFsKGV2dClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRoaXMuJHNsb3RzLmRlZmF1bHRcbiAgICApXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgbWRjQ2hpcCBmcm9tICcuL21kYy1jaGlwLnZ1ZSdcbmltcG9ydCBtZGNDaGlwU2V0IGZyb20gJy4vbWRjLWNoaXAtc2V0LnZ1ZSdcblxuZXhwb3J0IHsgbWRjQ2hpcCwgbWRjQ2hpcFNldCB9XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VQbHVnaW4oe1xuICBtZGNDaGlwLFxuICBtZGNDaGlwU2V0XG59KVxuIiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJ1xuaW1wb3J0IHsgYXV0b0luaXQgfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHBsdWdpbiBmcm9tICcuL2luZGV4LmpzJ1xuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXG5cbmF1dG9Jbml0KHBsdWdpbilcbiJdLCJuYW1lcyI6WyJhdXRvSW5pdCIsInBsdWdpbiIsIl9WdWUiLCJ3aW5kb3ciLCJWdWUiLCJnbG9iYWwiLCJ1c2UiLCJCYXNlUGx1Z2luIiwiY29tcG9uZW50cyIsInZlcnNpb24iLCJpbnN0YWxsIiwidm0iLCJrZXkiLCJjb21wb25lbnQiLCJuYW1lIiwiQ3VzdG9tRWxlbWVudCIsImZ1bmN0aW9uYWwiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsInByb3BzIiwiaXMiLCJ0YWciLCJkYXRhIiwiY2hpbGRyZW4iLCJDdXN0b21FbGVtZW50TWl4aW4iLCJDdXN0b21MaW5rIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJsaW5rIiwiT2JqZWN0IiwiaCIsImVsZW1lbnQiLCJwYXJlbnQiLCIkcm91dGVyIiwiJHJvb3QiLCIkb3B0aW9ucyIsIm9uIiwiY2xpY2siLCJuYXRpdmVPbiIsIkN1c3RvbUxpbmtNaXhpbiIsInRvIiwiZXhhY3QiLCJCb29sZWFuIiwiYXBwZW5kIiwicmVwbGFjZSIsImFjdGl2ZUNsYXNzIiwiZXhhY3RBY3RpdmVDbGFzcyIsImNvbXB1dGVkIiwiZW1pdEN1c3RvbUV2ZW50IiwiZWwiLCJldnRUeXBlIiwiZXZ0RGF0YSIsInNob3VsZEJ1YmJsZSIsImV2dCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiYnViYmxlcyIsImRvY3VtZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50Iiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJfX2V4dGVuZHMiLCJfXyIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiY3JlYXRlIiwiX19hc3NpZ24iLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY2FsbCIsImFwcGx5IiwiX19yZWFkIiwibyIsIm0iLCJTeW1ib2wiLCJpdGVyYXRvciIsInIiLCJhciIsImUiLCJuZXh0IiwiZG9uZSIsInB1c2giLCJ2YWx1ZSIsImVycm9yIiwiX19zcHJlYWQiLCJjb25jYXQiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsInRzbGliXzEuX19hc3NpZ24iLCJ0c2xpYl8xLl9fc3ByZWFkIiwiY3NzQ2xhc3NlcyIsInN0cmluZ3MiLCJ1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzIiwidXRpbC5hcHBseVBhc3NpdmUiLCJwb255ZmlsbC5tYXRjaGVzIiwiUmlwcGxlQmFzZSIsInJlZiIsIk1BVENIRVMiLCJfbWF0Y2hlcyIsIm1hdGNoZXMiLCJIVE1MRWxlbWVudCIsIm9wdGlvbnMiLCJicm93c2VyU3VwcG9ydHNDc3NWYXJzIiwic3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJpc1VuYm91bmRlZCIsImlzU3VyZmFjZUFjdGl2ZSIsIiRlbCIsImlzU3VyZmFjZURpc2FibGVkIiwiZGlzYWJsZWQiLCJhZGRDbGFzcyIsImNsYXNzTmFtZSIsIiRzZXQiLCJjbGFzc2VzIiwicmVtb3ZlQ2xhc3MiLCIkZGVsZXRlIiwiY29udGFpbnNFdmVudFRhcmdldCIsInRhcmdldCIsImNvbnRhaW5zIiwicmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGx5UGFzc2l2ZSIsImRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsImRvY3VtZW50RWxlbWVudCIsImRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyUmVzaXplSGFuZGxlciIsImRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwidXBkYXRlQ3NzVmFyaWFibGUiLCJ2YXJOYW1lIiwic3R5bGVzIiwiY29tcHV0ZUJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdldFdpbmRvd1BhZ2VPZmZzZXQiLCJ4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJNRENSaXBwbGVGb3VuZGF0aW9uIiwiUmlwcGxlTWl4aW4iLCJtb3VudGVkIiwicmlwcGxlIiwiaW5pdCIsImJlZm9yZURlc3Ryb3kiLCJkZXN0cm95IiwibWRjQ2hpcCIsIm1kY0NoaXBTZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtJQUMvQjtJQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztJQUNBLE1BQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztJQUNqQ0QsSUFBQUEsSUFBSSxHQUFHQyxNQUFNLENBQUNDLEdBQWQ7SUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0lBQ3hDO0lBQ0FILElBQUFBLElBQUksR0FBR0csTUFBTSxDQUFDRCxHQUFkO0lBQ0Q7O0lBQ0QsTUFBSUYsSUFBSixFQUFVO0lBQ1JBLElBQUFBLElBQUksQ0FBQ0ksR0FBTCxDQUFTTCxNQUFUO0lBQ0Q7SUFDRjs7SUNaTSxTQUFTTSxVQUFULENBQW9CQyxVQUFwQixFQUFnQztJQUNyQyxTQUFPO0lBQ0xDLElBQUFBLE9BQU8sRUFBRSxhQURKO0lBRUxDLElBQUFBLE9BQU8sRUFBRSxpQkFBQUMsRUFBRSxFQUFJO0lBQ2IsV0FB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
