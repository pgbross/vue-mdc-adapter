/**
* @module vue-mdc-adaptersnackbar 0.19.4-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^1.0.0-0","material-components-web":"^1.0.0-0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

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

var index = BasePlugin({
  mdcSnackbar: mdcSnackbar
});

export default index;
export { mdcSnackbar };
//# sourceMappingURL=index.js.map
