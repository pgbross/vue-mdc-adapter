/**
* @module vue-mdc-adaptersnackbar 0.19.4-beta
* @exports VueMDCSnackbar
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^1.0.0-0","material-components-web":"^1.0.0-0"}
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

  /* global CustomEvent */

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
  var cssClasses = {
    CLOSING: 'mdc-snackbar--closing',
    OPEN: 'mdc-snackbar--open',
    OPENING: 'mdc-snackbar--opening'
  };
  var strings = {
    ACTION_SELECTOR: '.mdc-snackbar__action',
    ARIA_LIVE_LABEL_TEXT_ATTR: 'data-mdc-snackbar-label-text',
    CLOSED_EVENT: 'MDCSnackbar:closed',
    CLOSING_EVENT: 'MDCSnackbar:closing',
    DISMISS_SELECTOR: '.mdc-snackbar__dismiss',
    LABEL_SELECTOR: '.mdc-snackbar__label',
    OPENED_EVENT: 'MDCSnackbar:opened',
    OPENING_EVENT: 'MDCSnackbar:opening',
    REASON_ACTION: 'action',
    REASON_DISMISS: 'dismiss',
    SURFACE_SELECTOR: '.mdc-snackbar__surface'
  };
  var numbers = {
    DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5000,
    MAX_AUTO_DISMISS_TIMEOUT_MS: 10000,
    MIN_AUTO_DISMISS_TIMEOUT_MS: 4000,
    // These variables need to be kept in sync with the values in _variables.scss.
    SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
    SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,

    /**
     * Number of milliseconds to wait between temporarily clearing the label text
     * in the DOM and subsequently restoring it. This is necessary to force IE 11
     * to pick up the `aria-live` content change and announce it to the user.
     */
    ARIA_LIVE_DELAY_MS: 1000
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
  var OPENING = cssClasses.OPENING,
      OPEN = cssClasses.OPEN,
      CLOSING = cssClasses.CLOSING;
  var REASON_ACTION = strings.REASON_ACTION,
      REASON_DISMISS = strings.REASON_DISMISS;

  var MDCSnackbarFoundation =
  /** @class */
  function (_super) {
    __extends(MDCSnackbarFoundation, _super);

    function MDCSnackbarFoundation(adapter) {
      var _this = _super.call(this, _assign({}, MDCSnackbarFoundation.defaultAdapter, adapter)) || this;

      _this.isOpen_ = false;
      _this.animationFrame_ = 0;
      _this.animationTimer_ = 0;
      _this.autoDismissTimer_ = 0;
      _this.autoDismissTimeoutMs_ = numbers.DEFAULT_AUTO_DISMISS_TIMEOUT_MS;
      _this.closeOnEscape_ = true;
      return _this;
    }

    Object.defineProperty(MDCSnackbarFoundation, "cssClasses", {
      get: function get() {
        return cssClasses;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSnackbarFoundation, "strings", {
      get: function get() {
        return strings;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSnackbarFoundation, "numbers", {
      get: function get() {
        return numbers;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSnackbarFoundation, "defaultAdapter", {
      get: function get() {
        return {
          addClass: function addClass() {
            return undefined;
          },
          announce: function announce() {
            return undefined;
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
          removeClass: function removeClass() {
            return undefined;
          }
        };
      },
      enumerable: true,
      configurable: true
    });

    MDCSnackbarFoundation.prototype.destroy = function () {
      this.clearAutoDismissTimer_();
      cancelAnimationFrame(this.animationFrame_);
      this.animationFrame_ = 0;
      clearTimeout(this.animationTimer_);
      this.animationTimer_ = 0;
      this.adapter_.removeClass(OPENING);
      this.adapter_.removeClass(OPEN);
      this.adapter_.removeClass(CLOSING);
    };

    MDCSnackbarFoundation.prototype.open = function () {
      var _this = this;

      this.clearAutoDismissTimer_();
      this.isOpen_ = true;
      this.adapter_.notifyOpening();
      this.adapter_.removeClass(CLOSING);
      this.adapter_.addClass(OPENING);
      this.adapter_.announce(); // Wait a frame once display is no longer "none", to establish basis for animation

      this.runNextAnimationFrame_(function () {
        _this.adapter_.addClass(OPEN);

        _this.animationTimer_ = setTimeout(function () {
          _this.handleAnimationTimerEnd_();

          _this.adapter_.notifyOpened();

          _this.autoDismissTimer_ = setTimeout(function () {
            _this.close(REASON_DISMISS);
          }, _this.getTimeoutMs());
        }, numbers.SNACKBAR_ANIMATION_OPEN_TIME_MS);
      });
    };
    /**
     * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
     *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
     *     client-specific values may also be used if desired.
     */


    MDCSnackbarFoundation.prototype.close = function (reason) {
      var _this = this;

      if (reason === void 0) {
        reason = '';
      }

      if (!this.isOpen_) {
        // Avoid redundant close calls (and events), e.g. repeated interactions as the snackbar is animating closed
        return;
      }

      cancelAnimationFrame(this.animationFrame_);
      this.animationFrame_ = 0;
      this.clearAutoDismissTimer_();
      this.isOpen_ = false;
      this.adapter_.notifyClosing(reason);
      this.adapter_.addClass(cssClasses.CLOSING);
      this.adapter_.removeClass(cssClasses.OPEN);
      this.adapter_.removeClass(cssClasses.OPENING);
      clearTimeout(this.animationTimer_);
      this.animationTimer_ = setTimeout(function () {
        _this.handleAnimationTimerEnd_();

        _this.adapter_.notifyClosed(reason);
      }, numbers.SNACKBAR_ANIMATION_CLOSE_TIME_MS);
    };

    MDCSnackbarFoundation.prototype.isOpen = function () {
      return this.isOpen_;
    };

    MDCSnackbarFoundation.prototype.getTimeoutMs = function () {
      return this.autoDismissTimeoutMs_;
    };

    MDCSnackbarFoundation.prototype.setTimeoutMs = function (timeoutMs) {
      // Use shorter variable names to make the code more readable
      var minValue = numbers.MIN_AUTO_DISMISS_TIMEOUT_MS;
      var maxValue = numbers.MAX_AUTO_DISMISS_TIMEOUT_MS;

      if (timeoutMs <= maxValue && timeoutMs >= minValue) {
        this.autoDismissTimeoutMs_ = timeoutMs;
      } else {
        throw new Error("timeoutMs must be an integer in the range " + minValue + "\u2013" + maxValue + ", but got '" + timeoutMs + "'");
      }
    };

    MDCSnackbarFoundation.prototype.getCloseOnEscape = function () {
      return this.closeOnEscape_;
    };

    MDCSnackbarFoundation.prototype.setCloseOnEscape = function (closeOnEscape) {
      this.closeOnEscape_ = closeOnEscape;
    };

    MDCSnackbarFoundation.prototype.handleKeyDown = function (evt) {
      var isEscapeKey = evt.key === 'Escape' || evt.keyCode === 27;

      if (isEscapeKey && this.getCloseOnEscape()) {
        this.close(REASON_DISMISS);
      }
    };

    MDCSnackbarFoundation.prototype.handleActionButtonClick = function (_evt) {
      this.close(REASON_ACTION);
    };

    MDCSnackbarFoundation.prototype.handleActionIconClick = function (_evt) {
      this.close(REASON_DISMISS);
    };

    MDCSnackbarFoundation.prototype.clearAutoDismissTimer_ = function () {
      clearTimeout(this.autoDismissTimer_);
      this.autoDismissTimer_ = 0;
    };

    MDCSnackbarFoundation.prototype.handleAnimationTimerEnd_ = function () {
      this.animationTimer_ = 0;
      this.adapter_.removeClass(cssClasses.OPENING);
      this.adapter_.removeClass(cssClasses.CLOSING);
    };
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     */


    MDCSnackbarFoundation.prototype.runNextAnimationFrame_ = function (callback) {
      var _this = this;

      cancelAnimationFrame(this.animationFrame_);
      this.animationFrame_ = requestAnimationFrame(function () {
        _this.animationFrame_ = 0;
        clearTimeout(_this.animationTimer_);
        _this.animationTimer_ = setTimeout(callback, 0);
      });
    };

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
   // Old namespace for backward compatibility

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

  //
  var script = {
    name: 'mdc-snackbar',
    model: {
      prop: 'open',
      event: 'change'
    },
    props: {
      open: Boolean,
      stacked: Boolean,
      leading: Boolean,
      labelText: String,
      actionText: String,
      timeoutMs: [String, Number],
      dismissAction: {
        type: [String, Boolean],
        default: true
      }
    },
    data: function data() {
      return {
        classes: {
          'mdc-snackbar--leading': this.leading,
          'mdc-snackbar--stacked': this.stacked
        },
        hidden: false,
        actionHidden: false,
        showLabelText: true
      };
    },
    watch: {
      open: 'onOpen_',
      timeoutMs: 'onTimeoutMs_'
    },
    mounted: function mounted() {
      var _this = this;

      window.addEventListener('keydown', this.handleKeydownEvent);
      this.foundation = new MDCSnackbarFoundation({
        addClass: function addClass(className) {
          return _this.$set(_this.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this.$delete(_this.classes, className);
        },
        announce: function announce() {
          return _this.announce(_this.$refs.labelEl);
        },
        notifyOpening: function notifyOpening() {
          return _this.$emit(MDCSnackbarFoundation.strings.OPENING_EVENT, {});
        },
        notifyOpened: function notifyOpened() {
          _this.$emit(MDCSnackbarFoundation.strings.OPENED_EVENT, {});

          _this.$emit('change', true);

          _this.$emit('show', {});
        },
        notifyClosing: function notifyClosing(reason) {
          return _this.$emit(MDCSnackbarFoundation.strings.CLOSING_EVENT, reason ? {
            reason: reason
          } : {});
        },
        notifyClosed: function notifyClosed(reason) {
          _this.$emit(MDCSnackbarFoundation.strings.CLOSED_EVENT, reason ? {
            reason: reason
          } : {});

          _this.$emit('change', false);

          _this.$emit('hide');
        }
      });
      this.foundation.init();

      if (this.timeoutMs !== void 0) {
        this.foundation.setTimeoutMs(this.timeoutMs);
      }
    },
    computed: {
      showDismissAction: function showDismissAction() {
        return typeof this.dismissAction === 'string' ? this.dismissAction != 'false' : this.dismissAction;
      }
    },
    beforeDestroy: function beforeDestroy() {
      window.removeEventListener('keydown', this.handleKeydownEvent);
      this.foundation.destroy();
    },
    methods: {
      onTimeoutMs_: function onTimeoutMs_(value) {
        if (value !== void 0) {
          this.foundation.setTimeoutMs(value);
        }
      },
      onOpen_: function onOpen_(value) {
        if (value) {
          this.foundation.open();
        } else {
          this.foundation.close();
        }
      },
      surfaceClickHandler: function surfaceClickHandler(evt) {
        if (this.isActionButton_(evt.target)) {
          this.foundation.handleActionButtonClick(evt);
        } else if (this.isActionIcon_(evt.target)) {
          this.foundation.handleActionIconClick(evt);
        }
      },
      handleKeydownEvent: function handleKeydownEvent(evt) {
        this.foundation.handleKeyDown(evt);
      },
      isActionButton_: function isActionButton_(target) {
        return Boolean(closest(target, MDCSnackbarFoundation.strings.ACTION_SELECTOR));
      },
      isActionIcon_: function isActionIcon_(target) {
        return Boolean(closest(target, MDCSnackbarFoundation.strings.DISMISS_SELECTOR));
      },
      announce: function announce(ariaEl) {
        var _this2 = this;

        var labelEl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ariaEl;
        var priority = ariaEl.getAttribute('aria-live');
        var text = this.labelText;

        if (!text) {
          return;
        } // Temporarily disable `aria-live` to prevent JAWS+Firefox from announcing the message twice.


        ariaEl.setAttribute('aria-live', 'off'); // Temporarily clear `textContent` to force a DOM mutation event that will be detected by screen readers.
        // `aria-live` elements are only announced when the element's `textContent` *changes*, so snackbars
        // sent to the browser in the initial HTML response won't be read unless we clear the element's `textContent` first.
        // Similarly, displaying the same snackbar message twice in a row doesn't trigger a DOM mutation event,
        // so screen readers won't announce the second message unless we first clear `textContent`.
        //
        // We have to clear the label text two different ways to make it work in all browsers and screen readers:
        //
        //   1. `textContent = ''` is required for IE11 + JAWS
        //   2. `innerHTML = '&nbsp;'` is required for Chrome + JAWS and NVDA
        //
        // All other browser/screen reader combinations support both methods.
        //
        // The wrapper `<span>` visually hides the space character so that it doesn't cause jank when added/removed.
        // N.B.: Setting `position: absolute`, `opacity: 0`, or `height: 0` prevents Chrome from detecting the DOM change.
        //
        // This technique has been tested in:
        //
        //   * JAWS 2019:
        //       - Chrome 70
        //       - Firefox 60 (ESR)
        //       - IE 11
        //   * NVDA 2018:
        //       - Chrome 70
        //       - Firefox 60 (ESR)
        //       - IE 11
        //   * ChromeVox 53

        this.showLabelText = false; // Prevent visual jank by temporarily displaying the label text in the ::before pseudo-element.
        // CSS generated content is normally announced by screen readers
        // (except in IE 11; see https://tink.uk/accessibility-support-for-css-generated-content/);
        // however, `aria-live` is turned off, so this DOM update will be ignored by screen readers.

        labelEl.setAttribute(MDCSnackbarFoundation.strings.ARIA_LIVE_LABEL_TEXT_ATTR, this.labelText);
        setTimeout(function () {
          // Allow screen readers to announce changes to the DOM again.
          ariaEl.setAttribute('aria-live', priority); // Remove the message from the ::before pseudo-element.

          labelEl.removeAttribute(MDCSnackbarFoundation.strings.ARIA_LIVE_LABEL_TEXT_ATTR); // Restore the original label text, which will be announced by screen readers.

          _this2.showLabelText = true;
        }, MDCSnackbarFoundation.numbers.ARIA_LIVE_DELAY_MS);
      }
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
      "div",
      { ref: "root", staticClass: "mdc-snackbar", class: _vm.classes },
      [
        _c(
          "div",
          {
            staticClass: "mdc-snackbar__surface",
            on: { click: _vm.surfaceClickHandler }
          },
          [
            _c(
              "div",
              {
                ref: "labelEl",
                staticClass: "mdc-snackbar__label",
                attrs: { role: "status", "aria-live": "polite" }
              },
              [
                _vm.showLabelText
                  ? [_vm._v("\n        " + _vm._s(_vm.labelText) + "\n      ")]
                  : _c(
                      "span",
                      {
                        staticStyle: {
                          display: "inline-block",
                          width: "0",
                          height: "1px"
                        }
                      },
                      [_vm._v(" ")]
                    )
              ],
              2
            ),
            _vm._v(" "),
            _vm.showDismissAction || _vm.actionText
              ? _c("div", { staticClass: "mdc-snackbar__actions" }, [
                  _vm.actionText
                    ? _c(
                        "button",
                        _vm._g(
                          {
                            ref: "actionEl",
                            staticClass: "mdc-button mdc-snackbar__action",
                            attrs: { type: "button" }
                          },
                          _vm.$listeners
                        ),
                        [
                          _vm._v(
                            "\n        " + _vm._s(_vm.actionText) + "\n      "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.showDismissAction
                    ? _c(
                        "button",
                        {
                          staticClass:
                            "mdc-icon-button mdc-snackbar__dismiss material-icons",
                          attrs: { title: "Dismiss" }
                        },
                        [_vm._v("\n        close\n      ")]
                      )
                    : _vm._e()
                ])
              : _vm._e()
          ]
        )
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
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcSnackbar = normalizeComponent_1(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2tiYXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9hdXRvLWluaXQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYmFzZS1wbHVnaW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWV2ZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zbmFja2Jhci9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NuYWNrYmFyL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2FuaW1hdGlvbi91dGlsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9hbmltYXRpb24vaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9wb255ZmlsbC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvc25hY2tiYXIvbWRjLXNuYWNrYmFyLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvc25hY2tiYXIvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3NuYWNrYmFyL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCIvKiBnbG9iYWwgQ3VzdG9tRXZlbnQgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXRDdXN0b21FdmVudChlbCwgZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgbGV0IGV2dFxuICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpXG4gIH1cbiAgZWwuZGlzcGF0Y2hFdmVudChldnQpXG59XG4iLCJjb25zdCBzY29wZSA9XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMHgxMDAwMDAwMCkpLnRvU3RyaW5nKCkgKyAnLSdcblxuZXhwb3J0IGNvbnN0IFZNQVVuaXF1ZUlkTWl4aW4gPSB7XG4gIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICB0aGlzLnZtYV91aWRfID0gc2NvcGUgKyB0aGlzLl91aWRcbiAgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBNRENGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1EQ0ZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICBpZiAoYWRhcHRlciA9PT0gdm9pZCAwKSB7IGFkYXB0ZXIgPSB7fTsgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgICAgICAgICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgICAgICAgICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgICAgICAgICAvLyB2YWxpZGF0aW9uLlxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICByZXR1cm4gTURDRm91bmRhdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBNRENGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBDTE9TSU5HOiAnbWRjLXNuYWNrYmFyLS1jbG9zaW5nJyxcbiAgICBPUEVOOiAnbWRjLXNuYWNrYmFyLS1vcGVuJyxcbiAgICBPUEVOSU5HOiAnbWRjLXNuYWNrYmFyLS1vcGVuaW5nJyxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBBQ1RJT05fU0VMRUNUT1I6ICcubWRjLXNuYWNrYmFyX19hY3Rpb24nLFxuICAgIEFSSUFfTElWRV9MQUJFTF9URVhUX0FUVFI6ICdkYXRhLW1kYy1zbmFja2Jhci1sYWJlbC10ZXh0JyxcbiAgICBDTE9TRURfRVZFTlQ6ICdNRENTbmFja2JhcjpjbG9zZWQnLFxuICAgIENMT1NJTkdfRVZFTlQ6ICdNRENTbmFja2JhcjpjbG9zaW5nJyxcbiAgICBESVNNSVNTX1NFTEVDVE9SOiAnLm1kYy1zbmFja2Jhcl9fZGlzbWlzcycsXG4gICAgTEFCRUxfU0VMRUNUT1I6ICcubWRjLXNuYWNrYmFyX19sYWJlbCcsXG4gICAgT1BFTkVEX0VWRU5UOiAnTURDU25hY2tiYXI6b3BlbmVkJyxcbiAgICBPUEVOSU5HX0VWRU5UOiAnTURDU25hY2tiYXI6b3BlbmluZycsXG4gICAgUkVBU09OX0FDVElPTjogJ2FjdGlvbicsXG4gICAgUkVBU09OX0RJU01JU1M6ICdkaXNtaXNzJyxcbiAgICBTVVJGQUNFX1NFTEVDVE9SOiAnLm1kYy1zbmFja2Jhcl9fc3VyZmFjZScsXG59O1xudmFyIG51bWJlcnMgPSB7XG4gICAgREVGQVVMVF9BVVRPX0RJU01JU1NfVElNRU9VVF9NUzogNTAwMCxcbiAgICBNQVhfQVVUT19ESVNNSVNTX1RJTUVPVVRfTVM6IDEwMDAwLFxuICAgIE1JTl9BVVRPX0RJU01JU1NfVElNRU9VVF9NUzogNDAwMCxcbiAgICAvLyBUaGVzZSB2YXJpYWJsZXMgbmVlZCB0byBiZSBrZXB0IGluIHN5bmMgd2l0aCB0aGUgdmFsdWVzIGluIF92YXJpYWJsZXMuc2Nzcy5cbiAgICBTTkFDS0JBUl9BTklNQVRJT05fQ0xPU0VfVElNRV9NUzogNzUsXG4gICAgU05BQ0tCQVJfQU5JTUFUSU9OX09QRU5fVElNRV9NUzogMTUwLFxuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZXR3ZWVuIHRlbXBvcmFyaWx5IGNsZWFyaW5nIHRoZSBsYWJlbCB0ZXh0XG4gICAgICogaW4gdGhlIERPTSBhbmQgc3Vic2VxdWVudGx5IHJlc3RvcmluZyBpdC4gVGhpcyBpcyBuZWNlc3NhcnkgdG8gZm9yY2UgSUUgMTFcbiAgICAgKiB0byBwaWNrIHVwIHRoZSBgYXJpYS1saXZlYCBjb250ZW50IGNoYW5nZSBhbmQgYW5ub3VuY2UgaXQgdG8gdGhlIHVzZXIuXG4gICAgICovXG4gICAgQVJJQV9MSVZFX0RFTEFZX01TOiAxMDAwLFxufTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE9QRU5JTkcgPSBjc3NDbGFzc2VzLk9QRU5JTkcsIE9QRU4gPSBjc3NDbGFzc2VzLk9QRU4sIENMT1NJTkcgPSBjc3NDbGFzc2VzLkNMT1NJTkc7XG52YXIgUkVBU09OX0FDVElPTiA9IHN0cmluZ3MuUkVBU09OX0FDVElPTiwgUkVBU09OX0RJU01JU1MgPSBzdHJpbmdzLlJFQVNPTl9ESVNNSVNTO1xudmFyIE1EQ1NuYWNrYmFyRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENTbmFja2JhckZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDU25hY2tiYXJGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDU25hY2tiYXJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaXNPcGVuXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25UaW1lcl8gPSAwO1xuICAgICAgICBfdGhpcy5hdXRvRGlzbWlzc1RpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmF1dG9EaXNtaXNzVGltZW91dE1zXyA9IG51bWJlcnMuREVGQVVMVF9BVVRPX0RJU01JU1NfVElNRU9VVF9NUztcbiAgICAgICAgX3RoaXMuY2xvc2VPbkVzY2FwZV8gPSB0cnVlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENTbmFja2JhckZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENTbmFja2JhckZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENTbmFja2JhckZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENTbmFja2JhckZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBhbm5vdW5jZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeUNsb3NlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeUNsb3Npbmc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlPcGVuZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlPcGVuaW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jbGVhckF1dG9EaXNtaXNzVGltZXJfKCk7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWVfKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25UaW1lcl8pO1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoT1BFTklORyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoT1BFTik7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoQ0xPU0lORyk7XG4gICAgfTtcbiAgICBNRENTbmFja2JhckZvdW5kYXRpb24ucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2xlYXJBdXRvRGlzbWlzc1RpbWVyXygpO1xuICAgICAgICB0aGlzLmlzT3Blbl8gPSB0cnVlO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeU9wZW5pbmcoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhDTE9TSU5HKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhPUEVOSU5HKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hbm5vdW5jZSgpO1xuICAgICAgICAvLyBXYWl0IGEgZnJhbWUgb25jZSBkaXNwbGF5IGlzIG5vIGxvbmdlciBcIm5vbmVcIiwgdG8gZXN0YWJsaXNoIGJhc2lzIGZvciBhbmltYXRpb25cbiAgICAgICAgdGhpcy5ydW5OZXh0QW5pbWF0aW9uRnJhbWVfKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE9QRU4pO1xuICAgICAgICAgICAgX3RoaXMuYW5pbWF0aW9uVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ubm90aWZ5T3BlbmVkKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuYXV0b0Rpc21pc3NUaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xvc2UoUkVBU09OX0RJU01JU1MpO1xuICAgICAgICAgICAgICAgIH0sIF90aGlzLmdldFRpbWVvdXRNcygpKTtcbiAgICAgICAgICAgIH0sIG51bWJlcnMuU05BQ0tCQVJfQU5JTUFUSU9OX09QRU5fVElNRV9NUyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHJlYXNvbiBXaHkgdGhlIHNuYWNrYmFyIHdhcyBjbG9zZWQuIFZhbHVlIHdpbGwgYmUgcGFzc2VkIHRvIENMT1NJTkdfRVZFTlQgYW5kIENMT1NFRF9FVkVOVCB2aWEgdGhlXG4gICAgICogICAgIGBldmVudC5kZXRhaWwucmVhc29uYCBwcm9wZXJ0eS4gU3RhbmRhcmQgdmFsdWVzIGFyZSBSRUFTT05fQUNUSU9OIGFuZCBSRUFTT05fRElTTUlTUywgYnV0IGN1c3RvbVxuICAgICAqICAgICBjbGllbnQtc3BlY2lmaWMgdmFsdWVzIG1heSBhbHNvIGJlIHVzZWQgaWYgZGVzaXJlZC5cbiAgICAgKi9cbiAgICBNRENTbmFja2JhckZvdW5kYXRpb24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAocmVhc29uID09PSB2b2lkIDApIHsgcmVhc29uID0gJyc7IH1cbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbl8pIHtcbiAgICAgICAgICAgIC8vIEF2b2lkIHJlZHVuZGFudCBjbG9zZSBjYWxscyAoYW5kIGV2ZW50cyksIGUuZy4gcmVwZWF0ZWQgaW50ZXJhY3Rpb25zIGFzIHRoZSBzbmFja2JhciBpcyBhbmltYXRpbmcgY2xvc2VkXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZV8pO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IDA7XG4gICAgICAgIHRoaXMuY2xlYXJBdXRvRGlzbWlzc1RpbWVyXygpO1xuICAgICAgICB0aGlzLmlzT3Blbl8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDbG9zaW5nKHJlYXNvbik7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5DTE9TSU5HKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLk9QRU4pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuT1BFTklORyk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVBbmltYXRpb25UaW1lckVuZF8oKTtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLm5vdGlmeUNsb3NlZChyZWFzb24pO1xuICAgICAgICB9LCBudW1iZXJzLlNOQUNLQkFSX0FOSU1BVElPTl9DTE9TRV9USU1FX01TKTtcbiAgICB9O1xuICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc09wZW5fO1xuICAgIH07XG4gICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRUaW1lb3V0TXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dG9EaXNtaXNzVGltZW91dE1zXztcbiAgICB9O1xuICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VGltZW91dE1zID0gZnVuY3Rpb24gKHRpbWVvdXRNcykge1xuICAgICAgICAvLyBVc2Ugc2hvcnRlciB2YXJpYWJsZSBuYW1lcyB0byBtYWtlIHRoZSBjb2RlIG1vcmUgcmVhZGFibGVcbiAgICAgICAgdmFyIG1pblZhbHVlID0gbnVtYmVycy5NSU5fQVVUT19ESVNNSVNTX1RJTUVPVVRfTVM7XG4gICAgICAgIHZhciBtYXhWYWx1ZSA9IG51bWJlcnMuTUFYX0FVVE9fRElTTUlTU19USU1FT1VUX01TO1xuICAgICAgICBpZiAodGltZW91dE1zIDw9IG1heFZhbHVlICYmIHRpbWVvdXRNcyA+PSBtaW5WYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5hdXRvRGlzbWlzc1RpbWVvdXRNc18gPSB0aW1lb3V0TXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0aW1lb3V0TXMgbXVzdCBiZSBhbiBpbnRlZ2VyIGluIHRoZSByYW5nZSBcIiArIG1pblZhbHVlICsgXCJcXHUyMDEzXCIgKyBtYXhWYWx1ZSArIFwiLCBidXQgZ290ICdcIiArIHRpbWVvdXRNcyArIFwiJ1wiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRDbG9zZU9uRXNjYXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbG9zZU9uRXNjYXBlXztcbiAgICB9O1xuICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0Q2xvc2VPbkVzY2FwZSA9IGZ1bmN0aW9uIChjbG9zZU9uRXNjYXBlKSB7XG4gICAgICAgIHRoaXMuY2xvc2VPbkVzY2FwZV8gPSBjbG9zZU9uRXNjYXBlO1xuICAgIH07XG4gICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgaXNFc2NhcGVLZXkgPSBldnQua2V5ID09PSAnRXNjYXBlJyB8fCBldnQua2V5Q29kZSA9PT0gMjc7XG4gICAgICAgIGlmIChpc0VzY2FwZUtleSAmJiB0aGlzLmdldENsb3NlT25Fc2NhcGUoKSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZShSRUFTT05fRElTTUlTUyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQWN0aW9uQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiAoX2V2dCkge1xuICAgICAgICB0aGlzLmNsb3NlKFJFQVNPTl9BQ1RJT04pO1xuICAgIH07XG4gICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVBY3Rpb25JY29uQ2xpY2sgPSBmdW5jdGlvbiAoX2V2dCkge1xuICAgICAgICB0aGlzLmNsb3NlKFJFQVNPTl9ESVNNSVNTKTtcbiAgICB9O1xuICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuY2xlYXJBdXRvRGlzbWlzc1RpbWVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYXV0b0Rpc21pc3NUaW1lcl8pO1xuICAgICAgICB0aGlzLmF1dG9EaXNtaXNzVGltZXJfID0gMDtcbiAgICB9O1xuICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOSU5HKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkNMT1NJTkcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUnVucyB0aGUgZ2l2ZW4gbG9naWMgb24gdGhlIG5leHQgYW5pbWF0aW9uIGZyYW1lLCB1c2luZyBzZXRUaW1lb3V0IHRvIGZhY3RvciBpbiBGaXJlZm94IHJlZmxvdyBiZWhhdmlvci5cbiAgICAgKi9cbiAgICBNRENTbmFja2JhckZvdW5kYXRpb24ucHJvdG90eXBlLnJ1bk5leHRBbmltYXRpb25GcmFtZV8gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZV8pO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDU25hY2tiYXJGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENTbmFja2JhckZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENTbmFja2JhckZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc1Byb3BlcnR5TmFtZU1hcCA9IHtcbiAgICBhbmltYXRpb246IHtcbiAgICAgICAgcHJlZml4ZWQ6ICctd2Via2l0LWFuaW1hdGlvbicsXG4gICAgICAgIHN0YW5kYXJkOiAnYW5pbWF0aW9uJyxcbiAgICB9LFxuICAgIHRyYW5zZm9ybToge1xuICAgICAgICBwcmVmaXhlZDogJy13ZWJraXQtdHJhbnNmb3JtJyxcbiAgICAgICAgc3RhbmRhcmQ6ICd0cmFuc2Zvcm0nLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBwcmVmaXhlZDogJy13ZWJraXQtdHJhbnNpdGlvbicsXG4gICAgICAgIHN0YW5kYXJkOiAndHJhbnNpdGlvbicsXG4gICAgfSxcbn07XG52YXIganNFdmVudFR5cGVNYXAgPSB7XG4gICAgYW5pbWF0aW9uZW5kOiB7XG4gICAgICAgIGNzc1Byb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbmVuZCcsXG4gICAgfSxcbiAgICBhbmltYXRpb25pdGVyYXRpb246IHtcbiAgICAgICAgY3NzUHJvcGVydHk6ICdhbmltYXRpb24nLFxuICAgICAgICBwcmVmaXhlZDogJ3dlYmtpdEFuaW1hdGlvbkl0ZXJhdGlvbicsXG4gICAgICAgIHN0YW5kYXJkOiAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgICB9LFxuICAgIGFuaW1hdGlvbnN0YXJ0OiB7XG4gICAgICAgIGNzc1Byb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRBbmltYXRpb25TdGFydCcsXG4gICAgICAgIHN0YW5kYXJkOiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbmVuZDoge1xuICAgICAgICBjc3NQcm9wZXJ0eTogJ3RyYW5zaXRpb24nLFxuICAgICAgICBwcmVmaXhlZDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICAgICBzdGFuZGFyZDogJ3RyYW5zaXRpb25lbmQnLFxuICAgIH0sXG59O1xuZnVuY3Rpb24gaXNXaW5kb3cod2luZG93T2JqKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4od2luZG93T2JqLmRvY3VtZW50KSAmJiB0eXBlb2Ygd2luZG93T2JqLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29ycmVjdFByb3BlcnR5TmFtZSh3aW5kb3dPYmosIGNzc1Byb3BlcnR5KSB7XG4gICAgaWYgKGlzV2luZG93KHdpbmRvd09iaikgJiYgY3NzUHJvcGVydHkgaW4gY3NzUHJvcGVydHlOYW1lTWFwKSB7XG4gICAgICAgIHZhciBlbCA9IHdpbmRvd09iai5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFyIF9hID0gY3NzUHJvcGVydHlOYW1lTWFwW2Nzc1Byb3BlcnR5XSwgc3RhbmRhcmQgPSBfYS5zdGFuZGFyZCwgcHJlZml4ZWQgPSBfYS5wcmVmaXhlZDtcbiAgICAgICAgdmFyIGlzU3RhbmRhcmQgPSBzdGFuZGFyZCBpbiBlbC5zdHlsZTtcbiAgICAgICAgcmV0dXJuIGlzU3RhbmRhcmQgPyBzdGFuZGFyZCA6IHByZWZpeGVkO1xuICAgIH1cbiAgICByZXR1cm4gY3NzUHJvcGVydHk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29ycmVjdEV2ZW50TmFtZSh3aW5kb3dPYmosIGV2ZW50VHlwZSkge1xuICAgIGlmIChpc1dpbmRvdyh3aW5kb3dPYmopICYmIGV2ZW50VHlwZSBpbiBqc0V2ZW50VHlwZU1hcCkge1xuICAgICAgICB2YXIgZWwgPSB3aW5kb3dPYmouZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciBfYSA9IGpzRXZlbnRUeXBlTWFwW2V2ZW50VHlwZV0sIHN0YW5kYXJkID0gX2Euc3RhbmRhcmQsIHByZWZpeGVkID0gX2EucHJlZml4ZWQsIGNzc1Byb3BlcnR5ID0gX2EuY3NzUHJvcGVydHk7XG4gICAgICAgIHZhciBpc1N0YW5kYXJkID0gY3NzUHJvcGVydHkgaW4gZWwuc3R5bGU7XG4gICAgICAgIHJldHVybiBpc1N0YW5kYXJkID8gc3RhbmRhcmQgOiBwcmVmaXhlZDtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50VHlwZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5leHBvcnQgeyB1dGlsIH07IC8vIE5ldyBuYW1lc3BhY2VcbmV4cG9ydCAqIGZyb20gJy4vdXRpbCc7IC8vIE9sZCBuYW1lc3BhY2UgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEEgXCJwb255ZmlsbFwiIGlzIGEgcG9seWZpbGwgdGhhdCBkb2Vzbid0IG1vZGlmeSB0aGUgZ2xvYmFsIHByb3RvdHlwZSBjaGFpbi5cbiAqIFRoaXMgbWFrZXMgcG9ueWZpbGxzIHNhZmVyIHRoYW4gdHJhZGl0aW9uYWwgcG9seWZpbGxzLCBlc3BlY2lhbGx5IGZvciBsaWJyYXJpZXMgbGlrZSBNREMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xvc2VzdCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICB9XG4gICAgdmFyIGVsID0gZWxlbWVudDtcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKG1hdGNoZXMoZWwsIHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG4gICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hlcyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHZhciBuYXRpdmVNYXRjaGVzID0gZWxlbWVudC5tYXRjaGVzXG4gICAgICAgIHx8IGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yXG4gICAgICAgIHx8IGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3I7XG4gICAgcmV0dXJuIG5hdGl2ZU1hdGNoZXMuY2FsbChlbGVtZW50LCBzZWxlY3Rvcik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb255ZmlsbC5qcy5tYXAiLCI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwicm9vdFwiIDpjbGFzcz1cImNsYXNzZXNcIiBjbGFzcz1cIm1kYy1zbmFja2JhclwiPlxuICAgIDxkaXYgY2xhc3M9XCJtZGMtc25hY2tiYXJfX3N1cmZhY2VcIiBAY2xpY2s9XCJzdXJmYWNlQ2xpY2tIYW5kbGVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj1cImxhYmVsRWxcIlxuICAgICAgICBjbGFzcz1cIm1kYy1zbmFja2Jhcl9fbGFiZWxcIlxuICAgICAgICByb2xlPVwic3RhdHVzXCJcbiAgICAgICAgYXJpYS1saXZlPVwicG9saXRlXCJcbiAgICAgID5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJzaG93TGFiZWxUZXh0XCI+XG4gICAgICAgICAge3sgbGFiZWxUZXh0IH19XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxzcGFuIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMDsgaGVpZ2h0OiAxcHg7XCIgdi1lbHNlXG4gICAgICAgICAgPiZuYnNwOzwvc3BhblxuICAgICAgICA+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc25hY2tiYXJfX2FjdGlvbnNcIiB2LWlmPVwic2hvd0Rpc21pc3NBY3Rpb24gfHwgYWN0aW9uVGV4dFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdi1pZj1cImFjdGlvblRleHRcIlxuICAgICAgICAgIHJlZj1cImFjdGlvbkVsXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzcz1cIm1kYy1idXR0b24gbWRjLXNuYWNrYmFyX19hY3Rpb25cIlxuICAgICAgICAgIHYtb249XCIkbGlzdGVuZXJzXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IGFjdGlvblRleHQgfX1cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwibWRjLWljb24tYnV0dG9uIG1kYy1zbmFja2Jhcl9fZGlzbWlzcyBtYXRlcmlhbC1pY29uc1wiXG4gICAgICAgICAgdGl0bGU9XCJEaXNtaXNzXCJcbiAgICAgICAgICB2LWlmPVwic2hvd0Rpc21pc3NBY3Rpb25cIlxuICAgICAgICA+XG4gICAgICAgICAgY2xvc2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1EQ1NuYWNrYmFyRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvc25hY2tiYXIvZm91bmRhdGlvbidcbmltcG9ydCB7IGdldENvcnJlY3RFdmVudE5hbWUgfSBmcm9tICdAbWF0ZXJpYWwvYW5pbWF0aW9uL2luZGV4J1xuaW1wb3J0ICogYXMgcG9ueWZpbGwgZnJvbSAnQG1hdGVyaWFsL2RvbS9wb255ZmlsbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXNuYWNrYmFyJyxcbiAgbW9kZWw6IHtcbiAgICBwcm9wOiAnb3BlbicsXG4gICAgZXZlbnQ6ICdjaGFuZ2UnXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgb3BlbjogQm9vbGVhbixcbiAgICBzdGFja2VkOiBCb29sZWFuLFxuICAgIGxlYWRpbmc6IEJvb2xlYW4sXG4gICAgbGFiZWxUZXh0OiBTdHJpbmcsXG4gICAgYWN0aW9uVGV4dDogU3RyaW5nLFxuICAgIHRpbWVvdXRNczogW1N0cmluZywgTnVtYmVyXSxcblxuICAgIGRpc21pc3NBY3Rpb246IHsgdHlwZTogW1N0cmluZywgQm9vbGVhbl0sIGRlZmF1bHQ6IHRydWUgfVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgICdtZGMtc25hY2tiYXItLWxlYWRpbmcnOiB0aGlzLmxlYWRpbmcsXG5cbiAgICAgICAgJ21kYy1zbmFja2Jhci0tc3RhY2tlZCc6IHRoaXMuc3RhY2tlZFxuICAgICAgfSxcbiAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICBhY3Rpb25IaWRkZW46IGZhbHNlLFxuICAgICAgc2hvd0xhYmVsVGV4dDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBvcGVuOiAnb25PcGVuXycsXG5cbiAgICB0aW1lb3V0TXM6ICdvblRpbWVvdXRNc18nXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25FdmVudClcblxuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENTbmFja2JhckZvdW5kYXRpb24oe1xuICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRkZWxldGUodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUpLFxuICAgICAgYW5ub3VuY2U6ICgpID0+IHRoaXMuYW5ub3VuY2UodGhpcy4kcmVmcy5sYWJlbEVsKSxcbiAgICAgIG5vdGlmeU9wZW5pbmc6ICgpID0+XG4gICAgICAgIHRoaXMuJGVtaXQoTURDU25hY2tiYXJGb3VuZGF0aW9uLnN0cmluZ3MuT1BFTklOR19FVkVOVCwge30pLFxuICAgICAgbm90aWZ5T3BlbmVkOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuJGVtaXQoTURDU25hY2tiYXJGb3VuZGF0aW9uLnN0cmluZ3MuT1BFTkVEX0VWRU5ULCB7fSlcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdHJ1ZSlcbiAgICAgICAgdGhpcy4kZW1pdCgnc2hvdycsIHt9KVxuICAgICAgfSxcbiAgICAgIG5vdGlmeUNsb3Npbmc6IHJlYXNvbiA9PlxuICAgICAgICB0aGlzLiRlbWl0KFxuICAgICAgICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5zdHJpbmdzLkNMT1NJTkdfRVZFTlQsXG4gICAgICAgICAgcmVhc29uID8geyByZWFzb24gfSA6IHt9XG4gICAgICAgICksXG4gICAgICBub3RpZnlDbG9zZWQ6IHJlYXNvbiA9PiB7XG4gICAgICAgIHRoaXMuJGVtaXQoXG4gICAgICAgICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnN0cmluZ3MuQ0xPU0VEX0VWRU5ULFxuICAgICAgICAgIHJlYXNvbiA/IHsgcmVhc29uIH0gOiB7fVxuICAgICAgICApXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGZhbHNlKVxuICAgICAgICB0aGlzLiRlbWl0KCdoaWRlJylcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcblxuICAgIGlmICh0aGlzLnRpbWVvdXRNcyAhPT0gdm9pZCAwKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0VGltZW91dE1zKHRoaXMudGltZW91dE1zKVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBzaG93RGlzbWlzc0FjdGlvbigpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5kaXNtaXNzQWN0aW9uID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHRoaXMuZGlzbWlzc0FjdGlvbiAhPSAnZmFsc2UnXG4gICAgICAgIDogdGhpcy5kaXNtaXNzQWN0aW9uXG4gICAgfVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duRXZlbnQpXG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25UaW1lb3V0TXNfKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uc2V0VGltZW91dE1zKHZhbHVlKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25PcGVuXyh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5vcGVuKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5jbG9zZSgpXG4gICAgICB9XG4gICAgfSxcbiAgICBzdXJmYWNlQ2xpY2tIYW5kbGVyKGV2dCkge1xuICAgICAgaWYgKHRoaXMuaXNBY3Rpb25CdXR0b25fKGV2dC50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVBY3Rpb25CdXR0b25DbGljayhldnQpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNBY3Rpb25JY29uXyhldnQudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlQWN0aW9uSWNvbkNsaWNrKGV2dClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlS2V5ZG93bkV2ZW50KGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUtleURvd24oZXZ0KVxuICAgIH0sXG5cbiAgICBpc0FjdGlvbkJ1dHRvbl8odGFyZ2V0KSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihcbiAgICAgICAgcG9ueWZpbGwuY2xvc2VzdCh0YXJnZXQsIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5zdHJpbmdzLkFDVElPTl9TRUxFQ1RPUilcbiAgICAgIClcbiAgICB9LFxuXG4gICAgaXNBY3Rpb25JY29uXyh0YXJnZXQpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgICBwb255ZmlsbC5jbG9zZXN0KHRhcmdldCwgTURDU25hY2tiYXJGb3VuZGF0aW9uLnN0cmluZ3MuRElTTUlTU19TRUxFQ1RPUilcbiAgICAgIClcbiAgICB9LFxuXG4gICAgYW5ub3VuY2UoYXJpYUVsLCBsYWJlbEVsID0gYXJpYUVsKSB7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IGFyaWFFbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScpXG5cbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLmxhYmVsVGV4dFxuICAgICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBUZW1wb3JhcmlseSBkaXNhYmxlIGBhcmlhLWxpdmVgIHRvIHByZXZlbnQgSkFXUytGaXJlZm94IGZyb20gYW5ub3VuY2luZyB0aGUgbWVzc2FnZSB0d2ljZS5cbiAgICAgIGFyaWFFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdvZmYnKVxuXG4gICAgICAvLyBUZW1wb3JhcmlseSBjbGVhciBgdGV4dENvbnRlbnRgIHRvIGZvcmNlIGEgRE9NIG11dGF0aW9uIGV2ZW50IHRoYXQgd2lsbCBiZSBkZXRlY3RlZCBieSBzY3JlZW4gcmVhZGVycy5cbiAgICAgIC8vIGBhcmlhLWxpdmVgIGVsZW1lbnRzIGFyZSBvbmx5IGFubm91bmNlZCB3aGVuIHRoZSBlbGVtZW50J3MgYHRleHRDb250ZW50YCAqY2hhbmdlcyosIHNvIHNuYWNrYmFyc1xuICAgICAgLy8gc2VudCB0byB0aGUgYnJvd3NlciBpbiB0aGUgaW5pdGlhbCBIVE1MIHJlc3BvbnNlIHdvbid0IGJlIHJlYWQgdW5sZXNzIHdlIGNsZWFyIHRoZSBlbGVtZW50J3MgYHRleHRDb250ZW50YCBmaXJzdC5cbiAgICAgIC8vIFNpbWlsYXJseSwgZGlzcGxheWluZyB0aGUgc2FtZSBzbmFja2JhciBtZXNzYWdlIHR3aWNlIGluIGEgcm93IGRvZXNuJ3QgdHJpZ2dlciBhIERPTSBtdXRhdGlvbiBldmVudCxcbiAgICAgIC8vIHNvIHNjcmVlbiByZWFkZXJzIHdvbid0IGFubm91bmNlIHRoZSBzZWNvbmQgbWVzc2FnZSB1bmxlc3Mgd2UgZmlyc3QgY2xlYXIgYHRleHRDb250ZW50YC5cbiAgICAgIC8vXG4gICAgICAvLyBXZSBoYXZlIHRvIGNsZWFyIHRoZSBsYWJlbCB0ZXh0IHR3byBkaWZmZXJlbnQgd2F5cyB0byBtYWtlIGl0IHdvcmsgaW4gYWxsIGJyb3dzZXJzIGFuZCBzY3JlZW4gcmVhZGVyczpcbiAgICAgIC8vXG4gICAgICAvLyAgIDEuIGB0ZXh0Q29udGVudCA9ICcnYCBpcyByZXF1aXJlZCBmb3IgSUUxMSArIEpBV1NcbiAgICAgIC8vICAgMi4gYGlubmVySFRNTCA9ICcmbmJzcDsnYCBpcyByZXF1aXJlZCBmb3IgQ2hyb21lICsgSkFXUyBhbmQgTlZEQVxuICAgICAgLy9cbiAgICAgIC8vIEFsbCBvdGhlciBicm93c2VyL3NjcmVlbiByZWFkZXIgY29tYmluYXRpb25zIHN1cHBvcnQgYm90aCBtZXRob2RzLlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSB3cmFwcGVyIGA8c3Bhbj5gIHZpc3VhbGx5IGhpZGVzIHRoZSBzcGFjZSBjaGFyYWN0ZXIgc28gdGhhdCBpdCBkb2Vzbid0IGNhdXNlIGphbmsgd2hlbiBhZGRlZC9yZW1vdmVkLlxuICAgICAgLy8gTi5CLjogU2V0dGluZyBgcG9zaXRpb246IGFic29sdXRlYCwgYG9wYWNpdHk6IDBgLCBvciBgaGVpZ2h0OiAwYCBwcmV2ZW50cyBDaHJvbWUgZnJvbSBkZXRlY3RpbmcgdGhlIERPTSBjaGFuZ2UuXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyB0ZWNobmlxdWUgaGFzIGJlZW4gdGVzdGVkIGluOlxuICAgICAgLy9cbiAgICAgIC8vICAgKiBKQVdTIDIwMTk6XG4gICAgICAvLyAgICAgICAtIENocm9tZSA3MFxuICAgICAgLy8gICAgICAgLSBGaXJlZm94IDYwIChFU1IpXG4gICAgICAvLyAgICAgICAtIElFIDExXG4gICAgICAvLyAgICogTlZEQSAyMDE4OlxuICAgICAgLy8gICAgICAgLSBDaHJvbWUgNzBcbiAgICAgIC8vICAgICAgIC0gRmlyZWZveCA2MCAoRVNSKVxuICAgICAgLy8gICAgICAgLSBJRSAxMVxuICAgICAgLy8gICAqIENocm9tZVZveCA1M1xuICAgICAgdGhpcy5zaG93TGFiZWxUZXh0ID0gZmFsc2VcblxuICAgICAgLy8gUHJldmVudCB2aXN1YWwgamFuayBieSB0ZW1wb3JhcmlseSBkaXNwbGF5aW5nIHRoZSBsYWJlbCB0ZXh0IGluIHRoZSA6OmJlZm9yZSBwc2V1ZG8tZWxlbWVudC5cbiAgICAgIC8vIENTUyBnZW5lcmF0ZWQgY29udGVudCBpcyBub3JtYWxseSBhbm5vdW5jZWQgYnkgc2NyZWVuIHJlYWRlcnNcbiAgICAgIC8vIChleGNlcHQgaW4gSUUgMTE7IHNlZSBodHRwczovL3RpbmsudWsvYWNjZXNzaWJpbGl0eS1zdXBwb3J0LWZvci1jc3MtZ2VuZXJhdGVkLWNvbnRlbnQvKTtcbiAgICAgIC8vIGhvd2V2ZXIsIGBhcmlhLWxpdmVgIGlzIHR1cm5lZCBvZmYsIHNvIHRoaXMgRE9NIHVwZGF0ZSB3aWxsIGJlIGlnbm9yZWQgYnkgc2NyZWVuIHJlYWRlcnMuXG4gICAgICBsYWJlbEVsLnNldEF0dHJpYnV0ZShcbiAgICAgICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnN0cmluZ3MuQVJJQV9MSVZFX0xBQkVMX1RFWFRfQVRUUixcbiAgICAgICAgdGhpcy5sYWJlbFRleHRcbiAgICAgIClcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIEFsbG93IHNjcmVlbiByZWFkZXJzIHRvIGFubm91bmNlIGNoYW5nZXMgdG8gdGhlIERPTSBhZ2Fpbi5cbiAgICAgICAgYXJpYUVsLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgcHJpb3JpdHkpXG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBtZXNzYWdlIGZyb20gdGhlIDo6YmVmb3JlIHBzZXVkby1lbGVtZW50LlxuICAgICAgICBsYWJlbEVsLnJlbW92ZUF0dHJpYnV0ZShcbiAgICAgICAgICBNRENTbmFja2JhckZvdW5kYXRpb24uc3RyaW5ncy5BUklBX0xJVkVfTEFCRUxfVEVYVF9BVFRSXG4gICAgICAgIClcblxuICAgICAgICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBsYWJlbCB0ZXh0LCB3aGljaCB3aWxsIGJlIGFubm91bmNlZCBieSBzY3JlZW4gcmVhZGVycy5cbiAgICAgICAgdGhpcy5zaG93TGFiZWxUZXh0ID0gdHJ1ZVxuICAgICAgfSwgTURDU25hY2tiYXJGb3VuZGF0aW9uLm51bWJlcnMuQVJJQV9MSVZFX0RFTEFZX01TKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBtZGNTbmFja2JhciBmcm9tICcuL21kYy1zbmFja2Jhci52dWUnXG5cbmV4cG9ydCB7IG1kY1NuYWNrYmFyIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY1NuYWNrYmFyXG59KVxuIiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJ1xuaW1wb3J0IHsgYXV0b0luaXQgfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHBsdWdpbiBmcm9tICcuL2luZGV4LmpzJ1xuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXG5cbmF1dG9Jbml0KHBsdWdpbilcbiJdLCJuYW1lcyI6WyJhdXRvSW5pdCIsInBsdWdpbiIsIl9WdWUiLCJ3aW5kb3ciLCJWdWUiLCJnbG9iYWwiLCJ1c2UiLCJCYXNlUGx1Z2luIiwiY29tcG9uZW50cyIsInZlcnNpb24iLCJpbnN0YWxsIiwidm0iLCJrZXkiLCJjb21wb25lbnQiLCJuYW1lIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJfX2V4dGVuZHMiLCJfXyIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiY3JlYXRlIiwiX19hc3NpZ24iLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY2FsbCIsImFwcGx5IiwidHNsaWJfMS5fX2V4dGVuZHMiLCJ0c2xpYl8xLl9fYXNzaWduIiwibWRjU25hY2tiYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtFQUMvQjtFQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztFQUNBLE1BQUksT0FBT0MsTUFBUCxLQUFrQixX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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNUNBLEVBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDR0EsZUFBZXRDLFVBQVUsQ0FBQztFQUN4QnVDLEVBQUFBLFdBQVcsRUFBWEE7RUFEd0IsQ0FBRCxDQUF6Qjs7RUNBQTlDLFFBQVEsQ0FBQ0MsTUFBRCxDQUFSOzs7Ozs7OzsifQ==
