/**
* @module vue-mdc-adaptersnackbar 0.19.1-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

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

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Snackbar. Provides an interface for managing:
 * - CSS classes
 * - Event handlers
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
var MDCSnackbarAdapter =
/*#__PURE__*/
function () {
  function MDCSnackbarAdapter() {
    _classCallCheck(this, MDCSnackbarAdapter);
  }

  _createClass(MDCSnackbarAdapter, [{
    key: "addClass",

    /** @param {string} className */
    value: function addClass(className) {}
    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}
  }, {
    key: "announce",
    value: function announce() {}
  }, {
    key: "notifyOpening",
    value: function notifyOpening() {}
  }, {
    key: "notifyOpened",
    value: function notifyOpened() {}
    /**
     * @param {string} reason
     */

  }, {
    key: "notifyClosing",
    value: function notifyClosing(reason) {}
    /**
     * @param {string} reason
     */

  }, {
    key: "notifyClosed",
    value: function notifyClosed(reason) {}
  }]);

  return MDCSnackbarAdapter;
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
  OPENING: 'mdc-snackbar--opening',
  OPEN: 'mdc-snackbar--open',
  CLOSING: 'mdc-snackbar--closing'
};
var strings = {
  SURFACE_SELECTOR: '.mdc-snackbar__surface',
  LABEL_SELECTOR: '.mdc-snackbar__label',
  ACTION_SELECTOR: '.mdc-snackbar__action',
  DISMISS_SELECTOR: '.mdc-snackbar__dismiss',
  OPENING_EVENT: 'MDCSnackbar:opening',
  OPENED_EVENT: 'MDCSnackbar:opened',
  CLOSING_EVENT: 'MDCSnackbar:closing',
  CLOSED_EVENT: 'MDCSnackbar:closed',
  REASON_ACTION: 'action',
  REASON_DISMISS: 'dismiss',
  ARIA_LIVE_LABEL_TEXT_ATTR: 'data-mdc-snackbar-label-text'
};
var numbers = {
  MIN_AUTO_DISMISS_TIMEOUT_MS: 4000,
  MAX_AUTO_DISMISS_TIMEOUT_MS: 10000,
  DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5000,
  // These variables need to be kept in sync with the values in _variables.scss.
  SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
  SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,

  /**
   * Number of milliseconds to wait between temporarily clearing the label text
   * in the DOM and subsequently restoring it. This is necessary to force IE 11
   * to pick up the `aria-live` content change and announce it to the user.
   */
  ARIA_LIVE_DELAY_MS: 1000
};

var OPENING = cssClasses.OPENING,
    OPEN = cssClasses.OPEN,
    CLOSING = cssClasses.CLOSING;
var REASON_ACTION = strings.REASON_ACTION,
    REASON_DISMISS = strings.REASON_DISMISS;

var MDCSnackbarFoundation =
/*#__PURE__*/
function (_MDCFoundation) {
  _inherits(MDCSnackbarFoundation, _MDCFoundation);

  _createClass(MDCSnackbarFoundation, null, [{
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
    /**
     * @return {!MDCSnackbarAdapter}
     */

  }, {
    key: "defaultAdapter",
    get: function get() {
      return (
        /** @type {!MDCSnackbarAdapter} */
        {
          addClass: function addClass()
          /* className: string */
          {},
          removeClass: function removeClass()
          /* className: string */
          {},
          announce: function announce() {},
          notifyOpening: function notifyOpening() {},
          notifyOpened: function notifyOpened() {},
          notifyClosing: function notifyClosing()
          /* reason: string */
          {},
          notifyClosed: function notifyClosed()
          /* reason: string */
          {}
        }
      );
    }
    /**
     * @param {!MDCSnackbarAdapter=} adapter
     */

  }]);

  function MDCSnackbarFoundation(adapter) {
    var _this;

    _classCallCheck(this, MDCSnackbarFoundation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCSnackbarFoundation).call(this, _extends(MDCSnackbarFoundation.defaultAdapter, adapter)));
    /** @private {boolean} */

    _this.isOpen_ = false;
    /** @private {number} */

    _this.animationFrame_ = 0;
    /** @private {number} */

    _this.animationTimer_ = 0;
    /** @private {number} */

    _this.autoDismissTimer_ = 0;
    /** @private {number} */

    _this.autoDismissTimeoutMs_ = numbers.DEFAULT_AUTO_DISMISS_TIMEOUT_MS;
    /** @private {boolean} */

    _this.closeOnEscape_ = true;
    return _this;
  }

  _createClass(MDCSnackbarFoundation, [{
    key: "destroy",
    value: function destroy() {
      this.clearAutoDismissTimer_();
      cancelAnimationFrame(this.animationFrame_);
      this.animationFrame_ = 0;
      clearTimeout(this.animationTimer_);
      this.animationTimer_ = 0;
      this.adapter_.removeClass(OPENING);
      this.adapter_.removeClass(OPEN);
      this.adapter_.removeClass(CLOSING);
    }
  }, {
    key: "open",
    value: function open() {
      var _this2 = this;

      this.clearAutoDismissTimer_();
      this.isOpen_ = true;
      this.adapter_.notifyOpening();
      this.adapter_.removeClass(CLOSING);
      this.adapter_.addClass(OPENING);
      this.adapter_.announce(); // Wait a frame once display is no longer "none", to establish basis for animation

      this.runNextAnimationFrame_(function () {
        _this2.adapter_.addClass(OPEN);

        _this2.animationTimer_ = setTimeout(function () {
          _this2.handleAnimationTimerEnd_();

          _this2.adapter_.notifyOpened();

          _this2.autoDismissTimer_ = setTimeout(function () {
            _this2.close(REASON_DISMISS);
          }, _this2.getTimeoutMs());
        }, numbers.SNACKBAR_ANIMATION_OPEN_TIME_MS);
      });
    }
    /**
     * @param {string=} reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
     *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
     *     client-specific values may also be used if desired.
     */

  }, {
    key: "close",
    value: function close() {
      var _this3 = this;

      var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

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
        _this3.handleAnimationTimerEnd_();

        _this3.adapter_.notifyClosed(reason);
      }, numbers.SNACKBAR_ANIMATION_CLOSE_TIME_MS);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isOpen",
    value: function isOpen() {
      return this.isOpen_;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getTimeoutMs",
    value: function getTimeoutMs() {
      return this.autoDismissTimeoutMs_;
    }
    /**
     * @param {number} timeoutMs
     */

  }, {
    key: "setTimeoutMs",
    value: function setTimeoutMs(timeoutMs) {
      // Use shorter variable names to make the code more readable
      var minValue = numbers.MIN_AUTO_DISMISS_TIMEOUT_MS;
      var maxValue = numbers.MAX_AUTO_DISMISS_TIMEOUT_MS;

      if (timeoutMs <= maxValue && timeoutMs >= minValue) {
        this.autoDismissTimeoutMs_ = timeoutMs;
      } else {
        throw new Error("timeoutMs must be an integer in the range ".concat(minValue, "\u2013").concat(maxValue, ", but got '").concat(timeoutMs, "'"));
      }
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getCloseOnEscape",
    value: function getCloseOnEscape() {
      return this.closeOnEscape_;
    }
    /**
     * @param {boolean} closeOnEscape
     */

  }, {
    key: "setCloseOnEscape",
    value: function setCloseOnEscape(closeOnEscape) {
      this.closeOnEscape_ = closeOnEscape;
    }
    /**
     * @param {!KeyboardEvent} evt
     */

  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(evt) {
      if (this.getCloseOnEscape() && (evt.key === 'Escape' || evt.keyCode === 27)) {
        this.close(REASON_DISMISS);
      }
    }
    /**
     * @param {!MouseEvent} evt
     */

  }, {
    key: "handleActionButtonClick",
    value: function handleActionButtonClick(evt) {
      this.close(REASON_ACTION);
    }
    /**
     * @param {!MouseEvent} evt
     */

  }, {
    key: "handleActionIconClick",
    value: function handleActionIconClick(evt) {
      this.close(REASON_DISMISS);
    }
    /** @private */

  }, {
    key: "clearAutoDismissTimer_",
    value: function clearAutoDismissTimer_() {
      clearTimeout(this.autoDismissTimer_);
      this.autoDismissTimer_ = 0;
    }
    /** @private */

  }, {
    key: "handleAnimationTimerEnd_",
    value: function handleAnimationTimerEnd_() {
      this.animationTimer_ = 0;
      this.adapter_.removeClass(cssClasses.OPENING);
      this.adapter_.removeClass(cssClasses.CLOSING);
    }
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     * @param {Function} callback
     * @private
     */

  }, {
    key: "runNextAnimationFrame_",
    value: function runNextAnimationFrame_(callback) {
      var _this4 = this;

      cancelAnimationFrame(this.animationFrame_);
      this.animationFrame_ = requestAnimationFrame(function () {
        _this4.animationFrame_ = 0;
        clearTimeout(_this4.animationTimer_);
        _this4.animationTimer_ = setTimeout(callback, 0);
      });
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

/**
 * @param {!Element} element
 * @param {string} selector
 * @return {?Element}
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
/**
 * @param {!Element} element
 * @param {string} selector
 * @return {boolean}
 */


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
script.__file = "/ddata/extra/vma/components/snackbar/mdc-snackbar.vue";

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
          _c("div", { staticClass: "mdc-snackbar__actions" }, [
            _c(
              "button",
              _vm._g(
                {
                  ref: "actionEl",
                  staticClass: "mdc-button mdc-snackbar__action",
                  attrs: { type: "button" }
                },
                _vm.$listeners
              ),
              [_vm._v("\n        " + _vm._s(_vm.actionText) + "\n      ")]
            ),
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
  

  
  var mdcSnackbar = normalizeComponent(
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
