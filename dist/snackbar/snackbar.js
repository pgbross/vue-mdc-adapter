/**
* @module vue-mdc-adaptersnackbar 0.19.3-beta
* @exports VueMDCSnackbar
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
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
      version: '0.19.3-beta',
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

  var plugin = BasePlugin({
    mdcSnackbar: mdcSnackbar
  });

  autoInit(plugin);

  return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2tiYXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9hdXRvLWluaXQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYmFzZS1wbHVnaW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWV2ZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NuYWNrYmFyL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NuYWNrYmFyL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc25hY2tiYXIvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYW5pbWF0aW9uL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vcG9ueWZpbGwuanMiLCIuLi8uLi9jb21wb25lbnRzL3NuYWNrYmFyL21kYy1zbmFja2Jhci52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXJ1bnRpbWUtaGVscGVycy9ub3JtYWxpemUtY29tcG9uZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9zbmFja2Jhci9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvc25hY2tiYXIvZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGF1dG9Jbml0KHBsdWdpbikge1xuICAvLyBBdXRvLWluc3RhbGxcbiAgbGV0IF9WdWUgPSBudWxsXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIF9WdWUgPSB3aW5kb3cuVnVlXG4gIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvKmdsb2JhbCBnbG9iYWwqL1xuICAgIF9WdWUgPSBnbG9iYWwuVnVlXG4gIH1cbiAgaWYgKF9WdWUpIHtcbiAgICBfVnVlLnVzZShwbHVnaW4pXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBCYXNlUGx1Z2luKGNvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnX19WRVJTSU9OX18nLFxuICAgIGluc3RhbGw6IHZtID0+IHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2tleV1cbiAgICAgICAgdm0uY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQpXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImNvbnN0IHNjb3BlID1cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigweDEwMDAwMDAwKSkudG9TdHJpbmcoKSArICctJ1xuXG5leHBvcnQgY29uc3QgVk1BVW5pcXVlSWRNaXhpbiA9IHtcbiAgYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMudm1hX3VpZF8gPSBzY29wZSArIHRoaXMuX3VpZFxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgQVxuICovXG5jbGFzcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bXtjc3NDbGFzc2VzfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17bnVtYmVyc30gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiB7IU9iamVjdH0gKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgLy8gdmFsaWRhdGlvbi5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciA9IHt9KSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFBfSAqL1xuICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBTbmFja2Jhci4gUHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBtYW5hZ2luZzpcbiAqIC0gQ1NTIGNsYXNzZXNcbiAqIC0gRXZlbnQgaGFuZGxlcnNcbiAqXG4gKiBBZGRpdGlvbmFsbHksIHByb3ZpZGVzIHR5cGUgaW5mb3JtYXRpb24gZm9yIHRoZSBhZGFwdGVyIHRvIHRoZSBDbG9zdXJlXG4gKiBjb21waWxlci5cbiAqXG4gKiBJbXBsZW1lbnQgdGhpcyBhZGFwdGVyIGZvciB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UgdG8gZGVsZWdhdGUgdXBkYXRlcyB0b1xuICogdGhlIGNvbXBvbmVudCBpbiB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UuIFNlZSBhcmNoaXRlY3R1cmUgZG9jdW1lbnRhdGlvblxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvY29kZS9hcmNoaXRlY3R1cmUubWRcbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1NuYWNrYmFyQWRhcHRlciB7XG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgYW5ub3VuY2UoKSB7fVxuXG4gIG5vdGlmeU9wZW5pbmcoKSB7fVxuICBub3RpZnlPcGVuZWQoKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uXG4gICAqL1xuICBub3RpZnlDbG9zaW5nKHJlYXNvbikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvblxuICAgKi9cbiAgbm90aWZ5Q2xvc2VkKHJlYXNvbikge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDU25hY2tiYXJBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIE9QRU5JTkc6ICdtZGMtc25hY2tiYXItLW9wZW5pbmcnLFxuICBPUEVOOiAnbWRjLXNuYWNrYmFyLS1vcGVuJyxcbiAgQ0xPU0lORzogJ21kYy1zbmFja2Jhci0tY2xvc2luZycsXG59O1xuXG5jb25zdCBzdHJpbmdzID0ge1xuICBTVVJGQUNFX1NFTEVDVE9SOiAnLm1kYy1zbmFja2Jhcl9fc3VyZmFjZScsXG4gIExBQkVMX1NFTEVDVE9SOiAnLm1kYy1zbmFja2Jhcl9fbGFiZWwnLFxuICBBQ1RJT05fU0VMRUNUT1I6ICcubWRjLXNuYWNrYmFyX19hY3Rpb24nLFxuICBESVNNSVNTX1NFTEVDVE9SOiAnLm1kYy1zbmFja2Jhcl9fZGlzbWlzcycsXG5cbiAgT1BFTklOR19FVkVOVDogJ01EQ1NuYWNrYmFyOm9wZW5pbmcnLFxuICBPUEVORURfRVZFTlQ6ICdNRENTbmFja2JhcjpvcGVuZWQnLFxuICBDTE9TSU5HX0VWRU5UOiAnTURDU25hY2tiYXI6Y2xvc2luZycsXG4gIENMT1NFRF9FVkVOVDogJ01EQ1NuYWNrYmFyOmNsb3NlZCcsXG5cbiAgUkVBU09OX0FDVElPTjogJ2FjdGlvbicsXG4gIFJFQVNPTl9ESVNNSVNTOiAnZGlzbWlzcycsXG5cbiAgQVJJQV9MSVZFX0xBQkVMX1RFWFRfQVRUUjogJ2RhdGEtbWRjLXNuYWNrYmFyLWxhYmVsLXRleHQnLFxufTtcblxuY29uc3QgbnVtYmVycyA9IHtcbiAgTUlOX0FVVE9fRElTTUlTU19USU1FT1VUX01TOiA0MDAwLFxuICBNQVhfQVVUT19ESVNNSVNTX1RJTUVPVVRfTVM6IDEwMDAwLFxuICBERUZBVUxUX0FVVE9fRElTTUlTU19USU1FT1VUX01TOiA1MDAwLFxuXG4gIC8vIFRoZXNlIHZhcmlhYmxlcyBuZWVkIHRvIGJlIGtlcHQgaW4gc3luYyB3aXRoIHRoZSB2YWx1ZXMgaW4gX3ZhcmlhYmxlcy5zY3NzLlxuICBTTkFDS0JBUl9BTklNQVRJT05fT1BFTl9USU1FX01TOiAxNTAsXG4gIFNOQUNLQkFSX0FOSU1BVElPTl9DTE9TRV9USU1FX01TOiA3NSxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJldHdlZW4gdGVtcG9yYXJpbHkgY2xlYXJpbmcgdGhlIGxhYmVsIHRleHRcbiAgICogaW4gdGhlIERPTSBhbmQgc3Vic2VxdWVudGx5IHJlc3RvcmluZyBpdC4gVGhpcyBpcyBuZWNlc3NhcnkgdG8gZm9yY2UgSUUgMTFcbiAgICogdG8gcGljayB1cCB0aGUgYGFyaWEtbGl2ZWAgY29udGVudCBjaGFuZ2UgYW5kIGFubm91bmNlIGl0IHRvIHRoZSB1c2VyLlxuICAgKi9cbiAgQVJJQV9MSVZFX0RFTEFZX01TOiAxMDAwLFxufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFtcImVycm9yXCIsIHtcImFyZ3NJZ25vcmVQYXR0ZXJuXCI6IFwiZXZ0XCIsIFwidmFyc0lnbm9yZVBhdHRlcm5cIjogXCJBZGFwdGVyJFwifV0gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDU25hY2tiYXJBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3N9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3Qge09QRU5JTkcsIE9QRU4sIENMT1NJTkd9ID0gY3NzQ2xhc3NlcztcbmNvbnN0IHtSRUFTT05fQUNUSU9OLCBSRUFTT05fRElTTUlTU30gPSBzdHJpbmdzO1xuXG5jbGFzcyBNRENTbmFja2JhckZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENTbmFja2JhckFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENTbmFja2JhckFkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgYW5ub3VuY2U6ICgpID0+IHt9LFxuICAgICAgbm90aWZ5T3BlbmluZzogKCkgPT4ge30sXG4gICAgICBub3RpZnlPcGVuZWQ6ICgpID0+IHt9LFxuICAgICAgbm90aWZ5Q2xvc2luZzogKC8qIHJlYXNvbjogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIG5vdGlmeUNsb3NlZDogKC8qIHJlYXNvbjogc3RyaW5nICovKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENTbmFja2JhckFkYXB0ZXI9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENTbmFja2JhckZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzT3Blbl8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuYXV0b0Rpc21pc3NUaW1lcl8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hdXRvRGlzbWlzc1RpbWVvdXRNc18gPSBudW1iZXJzLkRFRkFVTFRfQVVUT19ESVNNSVNTX1RJTUVPVVRfTVM7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5jbG9zZU9uRXNjYXBlXyA9IHRydWU7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuY2xlYXJBdXRvRGlzbWlzc1RpbWVyXygpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWVfKTtcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IDA7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0aW9uVGltZXJfKTtcbiAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IDA7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhPUEVOSU5HKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE9QRU4pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoQ0xPU0lORyk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuY2xlYXJBdXRvRGlzbWlzc1RpbWVyXygpO1xuICAgIHRoaXMuaXNPcGVuXyA9IHRydWU7XG4gICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlPcGVuaW5nKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhDTE9TSU5HKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE9QRU5JTkcpO1xuICAgIHRoaXMuYWRhcHRlcl8uYW5ub3VuY2UoKTtcblxuICAgIC8vIFdhaXQgYSBmcmFtZSBvbmNlIGRpc3BsYXkgaXMgbm8gbG9uZ2VyIFwibm9uZVwiLCB0byBlc3RhYmxpc2ggYmFzaXMgZm9yIGFuaW1hdGlvblxuICAgIHRoaXMucnVuTmV4dEFuaW1hdGlvbkZyYW1lXygoKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE9QRU4pO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUFuaW1hdGlvblRpbWVyRW5kXygpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeU9wZW5lZCgpO1xuICAgICAgICB0aGlzLmF1dG9EaXNtaXNzVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbG9zZShSRUFTT05fRElTTUlTUyk7XG4gICAgICAgIH0sIHRoaXMuZ2V0VGltZW91dE1zKCkpO1xuICAgICAgfSwgbnVtYmVycy5TTkFDS0JBUl9BTklNQVRJT05fT1BFTl9USU1FX01TKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZz19IHJlYXNvbiBXaHkgdGhlIHNuYWNrYmFyIHdhcyBjbG9zZWQuIFZhbHVlIHdpbGwgYmUgcGFzc2VkIHRvIENMT1NJTkdfRVZFTlQgYW5kIENMT1NFRF9FVkVOVCB2aWEgdGhlXG4gICAqICAgICBgZXZlbnQuZGV0YWlsLnJlYXNvbmAgcHJvcGVydHkuIFN0YW5kYXJkIHZhbHVlcyBhcmUgUkVBU09OX0FDVElPTiBhbmQgUkVBU09OX0RJU01JU1MsIGJ1dCBjdXN0b21cbiAgICogICAgIGNsaWVudC1zcGVjaWZpYyB2YWx1ZXMgbWF5IGFsc28gYmUgdXNlZCBpZiBkZXNpcmVkLlxuICAgKi9cbiAgY2xvc2UocmVhc29uID0gJycpIHtcbiAgICBpZiAoIXRoaXMuaXNPcGVuXykge1xuICAgICAgLy8gQXZvaWQgcmVkdW5kYW50IGNsb3NlIGNhbGxzIChhbmQgZXZlbnRzKSwgZS5nLiByZXBlYXRlZCBpbnRlcmFjdGlvbnMgYXMgdGhlIHNuYWNrYmFyIGlzIGFuaW1hdGluZyBjbG9zZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lXyk7XG4gICAgdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuICAgIHRoaXMuY2xlYXJBdXRvRGlzbWlzc1RpbWVyXygpO1xuXG4gICAgdGhpcy5pc09wZW5fID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDbG9zaW5nKHJlYXNvbik7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkNMT1NJTkcpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuT1BFTklORyk7XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25UaW1lcl8pO1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUFuaW1hdGlvblRpbWVyRW5kXygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDbG9zZWQocmVhc29uKTtcbiAgICB9LCBudW1iZXJzLlNOQUNLQkFSX0FOSU1BVElPTl9DTE9TRV9USU1FX01TKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLmlzT3Blbl87XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0VGltZW91dE1zKCkge1xuICAgIHJldHVybiB0aGlzLmF1dG9EaXNtaXNzVGltZW91dE1zXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZW91dE1zXG4gICAqL1xuICBzZXRUaW1lb3V0TXModGltZW91dE1zKSB7XG4gICAgLy8gVXNlIHNob3J0ZXIgdmFyaWFibGUgbmFtZXMgdG8gbWFrZSB0aGUgY29kZSBtb3JlIHJlYWRhYmxlXG4gICAgY29uc3QgbWluVmFsdWUgPSBudW1iZXJzLk1JTl9BVVRPX0RJU01JU1NfVElNRU9VVF9NUztcbiAgICBjb25zdCBtYXhWYWx1ZSA9IG51bWJlcnMuTUFYX0FVVE9fRElTTUlTU19USU1FT1VUX01TO1xuXG4gICAgaWYgKHRpbWVvdXRNcyA8PSBtYXhWYWx1ZSAmJiB0aW1lb3V0TXMgPj0gbWluVmFsdWUpIHtcbiAgICAgIHRoaXMuYXV0b0Rpc21pc3NUaW1lb3V0TXNfID0gdGltZW91dE1zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHRpbWVvdXRNcyBtdXN0IGJlIGFuIGludGVnZXIgaW4gdGhlIHJhbmdlICR7bWluVmFsdWV94oCTJHttYXhWYWx1ZX0sIGJ1dCBnb3QgJyR7dGltZW91dE1zfSdgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGdldENsb3NlT25Fc2NhcGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvc2VPbkVzY2FwZV87XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSBjbG9zZU9uRXNjYXBlXG4gICAqL1xuICBzZXRDbG9zZU9uRXNjYXBlKGNsb3NlT25Fc2NhcGUpIHtcbiAgICB0aGlzLmNsb3NlT25Fc2NhcGVfID0gY2xvc2VPbkVzY2FwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFLZXlib2FyZEV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZUtleURvd24oZXZ0KSB7XG4gICAgaWYgKHRoaXMuZ2V0Q2xvc2VPbkVzY2FwZSgpICYmIChldnQua2V5ID09PSAnRXNjYXBlJyB8fCBldnQua2V5Q29kZSA9PT0gMjcpKSB7XG4gICAgICB0aGlzLmNsb3NlKFJFQVNPTl9ESVNNSVNTKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTW91c2VFdmVudH0gZXZ0XG4gICAqL1xuICBoYW5kbGVBY3Rpb25CdXR0b25DbGljayhldnQpIHtcbiAgICB0aGlzLmNsb3NlKFJFQVNPTl9BQ1RJT04pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1vdXNlRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlQWN0aW9uSWNvbkNsaWNrKGV2dCkge1xuICAgIHRoaXMuY2xvc2UoUkVBU09OX0RJU01JU1MpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGNsZWFyQXV0b0Rpc21pc3NUaW1lcl8oKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuYXV0b0Rpc21pc3NUaW1lcl8pO1xuICAgIHRoaXMuYXV0b0Rpc21pc3NUaW1lcl8gPSAwO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGhhbmRsZUFuaW1hdGlvblRpbWVyRW5kXygpIHtcbiAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IDA7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLk9QRU5JTkcpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5DTE9TSU5HKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW5zIHRoZSBnaXZlbiBsb2dpYyBvbiB0aGUgbmV4dCBhbmltYXRpb24gZnJhbWUsIHVzaW5nIHNldFRpbWVvdXQgdG8gZmFjdG9yIGluIEZpcmVmb3ggcmVmbG93IGJlaGF2aW9yLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcnVuTmV4dEFuaW1hdGlvbkZyYW1lXyhjYWxsYmFjaykge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWVfKTtcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IDA7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25UaW1lcl8pO1xuICAgICAgdGhpcy5hbmltYXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENTbmFja2JhckZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBub1ByZWZpeDogc3RyaW5nLFxuICogICB3ZWJraXRQcmVmaXg6IHN0cmluZyxcbiAqICAgc3R5bGVQcm9wZXJ0eTogc3RyaW5nXG4gKiB9fVxuICovXG5sZXQgVmVuZG9yUHJvcGVydHlNYXBUeXBlO1xuXG4vKiogQGNvbnN0IHtPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gKi9cbmNvbnN0IGV2ZW50VHlwZU1hcCA9IHtcbiAgJ2FuaW1hdGlvbnN0YXJ0Jzoge1xuICAgIG5vUHJlZml4OiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIHdlYmtpdFByZWZpeDogJ3dlYmtpdEFuaW1hdGlvblN0YXJ0JyxcbiAgICBzdHlsZVByb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgfSxcbiAgJ2FuaW1hdGlvbmVuZCc6IHtcbiAgICBub1ByZWZpeDogJ2FuaW1hdGlvbmVuZCcsXG4gICAgd2Via2l0UHJlZml4OiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICBzdHlsZVByb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgfSxcbiAgJ2FuaW1hdGlvbml0ZXJhdGlvbic6IHtcbiAgICBub1ByZWZpeDogJ2FuaW1hdGlvbml0ZXJhdGlvbicsXG4gICAgd2Via2l0UHJlZml4OiAnd2Via2l0QW5pbWF0aW9uSXRlcmF0aW9uJyxcbiAgICBzdHlsZVByb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgfSxcbiAgJ3RyYW5zaXRpb25lbmQnOiB7XG4gICAgbm9QcmVmaXg6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICB3ZWJraXRQcmVmaXg6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBzdHlsZVByb3BlcnR5OiAndHJhbnNpdGlvbicsXG4gIH0sXG59O1xuXG4vKiogQGNvbnN0IHtPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gKi9cbmNvbnN0IGNzc1Byb3BlcnR5TWFwID0ge1xuICAnYW5pbWF0aW9uJzoge1xuICAgIG5vUHJlZml4OiAnYW5pbWF0aW9uJyxcbiAgICB3ZWJraXRQcmVmaXg6ICctd2Via2l0LWFuaW1hdGlvbicsXG4gIH0sXG4gICd0cmFuc2Zvcm0nOiB7XG4gICAgbm9QcmVmaXg6ICd0cmFuc2Zvcm0nLFxuICAgIHdlYmtpdFByZWZpeDogJy13ZWJraXQtdHJhbnNmb3JtJyxcbiAgfSxcbiAgJ3RyYW5zaXRpb24nOiB7XG4gICAgbm9QcmVmaXg6ICd0cmFuc2l0aW9uJyxcbiAgICB3ZWJraXRQcmVmaXg6ICctd2Via2l0LXRyYW5zaXRpb24nLFxuICB9LFxufTtcblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IHdpbmRvd09ialxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaGFzUHJvcGVyU2hhcGUod2luZG93T2JqKSB7XG4gIHJldHVybiAod2luZG93T2JqWydkb2N1bWVudCddICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHdpbmRvd09ialsnZG9jdW1lbnQnXVsnY3JlYXRlRWxlbWVudCddID09PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBldmVudEZvdW5kSW5NYXBzKGV2ZW50VHlwZSkge1xuICByZXR1cm4gKGV2ZW50VHlwZSBpbiBldmVudFR5cGVNYXAgfHwgZXZlbnRUeXBlIGluIGNzc1Byb3BlcnR5TWFwKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiBAcGFyYW0geyFPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gbWFwXG4gKiBAcGFyYW0geyFFbGVtZW50fSBlbFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRKYXZhU2NyaXB0RXZlbnROYW1lKGV2ZW50VHlwZSwgbWFwLCBlbCkge1xuICByZXR1cm4gbWFwW2V2ZW50VHlwZV0uc3R5bGVQcm9wZXJ0eSBpbiBlbC5zdHlsZSA/IG1hcFtldmVudFR5cGVdLm5vUHJlZml4IDogbWFwW2V2ZW50VHlwZV0ud2Via2l0UHJlZml4O1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBkZXRlcm1pbmUgYnJvd3NlciBwcmVmaXggZm9yIENTUzMgYW5pbWF0aW9uIGV2ZW50c1xuICogYW5kIHByb3BlcnR5IG5hbWVzLlxuICogQHBhcmFtIHshT2JqZWN0fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uTmFtZSh3aW5kb3dPYmosIGV2ZW50VHlwZSkge1xuICBpZiAoIWhhc1Byb3BlclNoYXBlKHdpbmRvd09iaikgfHwgIWV2ZW50Rm91bmRJbk1hcHMoZXZlbnRUeXBlKSkge1xuICAgIHJldHVybiBldmVudFR5cGU7XG4gIH1cblxuICBjb25zdCBtYXAgPSAvKiogQHR5cGUgeyFPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gKi8gKFxuICAgIGV2ZW50VHlwZSBpbiBldmVudFR5cGVNYXAgPyBldmVudFR5cGVNYXAgOiBjc3NQcm9wZXJ0eU1hcFxuICApO1xuICBjb25zdCBlbCA9IHdpbmRvd09ialsnZG9jdW1lbnQnXVsnY3JlYXRlRWxlbWVudCddKCdkaXYnKTtcbiAgbGV0IGV2ZW50TmFtZSA9ICcnO1xuXG4gIGlmIChtYXAgPT09IGV2ZW50VHlwZU1hcCkge1xuICAgIGV2ZW50TmFtZSA9IGdldEphdmFTY3JpcHRFdmVudE5hbWUoZXZlbnRUeXBlLCBtYXAsIGVsKTtcbiAgfSBlbHNlIHtcbiAgICBldmVudE5hbWUgPSBtYXBbZXZlbnRUeXBlXS5ub1ByZWZpeCBpbiBlbC5zdHlsZSA/IG1hcFtldmVudFR5cGVdLm5vUHJlZml4IDogbWFwW2V2ZW50VHlwZV0ud2Via2l0UHJlZml4O1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TmFtZTtcbn1cblxuLy8gUHVibGljIGZ1bmN0aW9ucyB0byBhY2Nlc3MgZ2V0QW5pbWF0aW9uTmFtZSgpIGZvciBKYXZhU2NyaXB0IGV2ZW50cyBvciBDU1Ncbi8vIHByb3BlcnR5IG5hbWVzLlxuXG5jb25zdCB0cmFuc2Zvcm1TdHlsZVByb3BlcnRpZXMgPSBbJ3RyYW5zZm9ybScsICdXZWJraXRUcmFuc2Zvcm0nLCAnTW96VHJhbnNmb3JtJywgJ09UcmFuc2Zvcm0nLCAnTVNUcmFuc2Zvcm0nXTtcblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IHdpbmRvd09ialxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb3JyZWN0RXZlbnROYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKSB7XG4gIHJldHVybiBnZXRBbmltYXRpb25OYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IHdpbmRvd09ialxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb3JyZWN0UHJvcGVydHlOYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKSB7XG4gIHJldHVybiBnZXRBbmltYXRpb25OYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKTtcbn1cblxuZXhwb3J0IHt0cmFuc2Zvcm1TdHlsZVByb3BlcnRpZXMsIGdldENvcnJlY3RFdmVudE5hbWUsIGdldENvcnJlY3RQcm9wZXJ0eU5hbWV9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBBIFwicG9ueWZpbGxcIiBpcyBhIHBvbHlmaWxsIHRoYXQgZG9lc24ndCBtb2RpZnkgdGhlIGdsb2JhbCBwcm90b3R5cGUgY2hhaW4uXG4gKiBUaGlzIG1ha2VzIHBvbnlmaWxscyBzYWZlciB0aGFuIHRyYWRpdGlvbmFsIHBvbHlmaWxscywgZXNwZWNpYWxseSBmb3IgbGlicmFyaWVzIGxpa2UgTURDLlxuICovXG5cbi8qKlxuICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHs/RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBzZWxlY3Rvcikge1xuICBpZiAoZWxlbWVudC5jbG9zZXN0KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdChzZWxlY3Rvcik7XG4gIH1cblxuICBsZXQgZWwgPSBlbGVtZW50O1xuICB3aGlsZSAoZWwpIHtcbiAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgY29uc3QgbmF0aXZlTWF0Y2hlcyA9IGVsZW1lbnQubWF0Y2hlc1xuICAgIHx8IGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yXG4gICAgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcjtcbiAgcmV0dXJuIG5hdGl2ZU1hdGNoZXMuY2FsbChlbGVtZW50LCBzZWxlY3Rvcik7XG59XG5cbmV4cG9ydCB7Y2xvc2VzdCwgbWF0Y2hlc307XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwicm9vdFwiIDpjbGFzcz1cImNsYXNzZXNcIiBjbGFzcz1cIm1kYy1zbmFja2JhclwiPlxuICAgIDxkaXYgY2xhc3M9XCJtZGMtc25hY2tiYXJfX3N1cmZhY2VcIiBAY2xpY2s9XCJzdXJmYWNlQ2xpY2tIYW5kbGVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj1cImxhYmVsRWxcIlxuICAgICAgICBjbGFzcz1cIm1kYy1zbmFja2Jhcl9fbGFiZWxcIlxuICAgICAgICByb2xlPVwic3RhdHVzXCJcbiAgICAgICAgYXJpYS1saXZlPVwicG9saXRlXCJcbiAgICAgID5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJzaG93TGFiZWxUZXh0XCI+XG4gICAgICAgICAge3sgbGFiZWxUZXh0IH19XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxzcGFuIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMDsgaGVpZ2h0OiAxcHg7XCIgdi1lbHNlXG4gICAgICAgICAgPiZuYnNwOzwvc3BhblxuICAgICAgICA+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc25hY2tiYXJfX2FjdGlvbnNcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHJlZj1cImFjdGlvbkVsXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzcz1cIm1kYy1idXR0b24gbWRjLXNuYWNrYmFyX19hY3Rpb25cIlxuICAgICAgICAgIHYtb249XCIkbGlzdGVuZXJzXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IGFjdGlvblRleHQgfX1cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwibWRjLWljb24tYnV0dG9uIG1kYy1zbmFja2Jhcl9fZGlzbWlzcyBtYXRlcmlhbC1pY29uc1wiXG4gICAgICAgICAgdGl0bGU9XCJEaXNtaXNzXCJcbiAgICAgICAgICB2LWlmPVwic2hvd0Rpc21pc3NBY3Rpb25cIlxuICAgICAgICA+XG4gICAgICAgICAgY2xvc2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1EQ1NuYWNrYmFyRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvc25hY2tiYXIvZm91bmRhdGlvbidcbmltcG9ydCB7IGdldENvcnJlY3RFdmVudE5hbWUgfSBmcm9tICdAbWF0ZXJpYWwvYW5pbWF0aW9uL2luZGV4J1xuaW1wb3J0ICogYXMgcG9ueWZpbGwgZnJvbSAnQG1hdGVyaWFsL2RvbS9wb255ZmlsbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXNuYWNrYmFyJyxcbiAgbW9kZWw6IHtcbiAgICBwcm9wOiAnb3BlbicsXG4gICAgZXZlbnQ6ICdjaGFuZ2UnXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgb3BlbjogQm9vbGVhbixcbiAgICBzdGFja2VkOiBCb29sZWFuLFxuICAgIGxlYWRpbmc6IEJvb2xlYW4sXG4gICAgbGFiZWxUZXh0OiBTdHJpbmcsXG4gICAgYWN0aW9uVGV4dDogU3RyaW5nLFxuICAgIHRpbWVvdXRNczogW1N0cmluZywgTnVtYmVyXSxcblxuICAgIGRpc21pc3NBY3Rpb246IHsgdHlwZTogW1N0cmluZywgQm9vbGVhbl0sIGRlZmF1bHQ6IHRydWUgfVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgICdtZGMtc25hY2tiYXItLWxlYWRpbmcnOiB0aGlzLmxlYWRpbmcsXG5cbiAgICAgICAgJ21kYy1zbmFja2Jhci0tc3RhY2tlZCc6IHRoaXMuc3RhY2tlZFxuICAgICAgfSxcbiAgICAgIGhpZGRlbjogZmFsc2UsXG4gICAgICBhY3Rpb25IaWRkZW46IGZhbHNlLFxuICAgICAgc2hvd0xhYmVsVGV4dDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBvcGVuOiAnb25PcGVuXycsXG5cbiAgICB0aW1lb3V0TXM6ICdvblRpbWVvdXRNc18nXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25FdmVudClcblxuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENTbmFja2JhckZvdW5kYXRpb24oe1xuICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRkZWxldGUodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUpLFxuICAgICAgYW5ub3VuY2U6ICgpID0+IHRoaXMuYW5ub3VuY2UodGhpcy4kcmVmcy5sYWJlbEVsKSxcbiAgICAgIG5vdGlmeU9wZW5pbmc6ICgpID0+XG4gICAgICAgIHRoaXMuJGVtaXQoTURDU25hY2tiYXJGb3VuZGF0aW9uLnN0cmluZ3MuT1BFTklOR19FVkVOVCwge30pLFxuICAgICAgbm90aWZ5T3BlbmVkOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuJGVtaXQoTURDU25hY2tiYXJGb3VuZGF0aW9uLnN0cmluZ3MuT1BFTkVEX0VWRU5ULCB7fSlcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdHJ1ZSlcbiAgICAgICAgdGhpcy4kZW1pdCgnc2hvdycsIHt9KVxuICAgICAgfSxcbiAgICAgIG5vdGlmeUNsb3Npbmc6IHJlYXNvbiA9PlxuICAgICAgICB0aGlzLiRlbWl0KFxuICAgICAgICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5zdHJpbmdzLkNMT1NJTkdfRVZFTlQsXG4gICAgICAgICAgcmVhc29uID8geyByZWFzb24gfSA6IHt9XG4gICAgICAgICksXG4gICAgICBub3RpZnlDbG9zZWQ6IHJlYXNvbiA9PiB7XG4gICAgICAgIHRoaXMuJGVtaXQoXG4gICAgICAgICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnN0cmluZ3MuQ0xPU0VEX0VWRU5ULFxuICAgICAgICAgIHJlYXNvbiA/IHsgcmVhc29uIH0gOiB7fVxuICAgICAgICApXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGZhbHNlKVxuICAgICAgICB0aGlzLiRlbWl0KCdoaWRlJylcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcblxuICAgIGlmICh0aGlzLnRpbWVvdXRNcyAhPT0gdm9pZCAwKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0VGltZW91dE1zKHRoaXMudGltZW91dE1zKVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBzaG93RGlzbWlzc0FjdGlvbigpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5kaXNtaXNzQWN0aW9uID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHRoaXMuZGlzbWlzc0FjdGlvbiAhPSAnZmFsc2UnXG4gICAgICAgIDogdGhpcy5kaXNtaXNzQWN0aW9uXG4gICAgfVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duRXZlbnQpXG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25UaW1lb3V0TXNfKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uc2V0VGltZW91dE1zKHZhbHVlKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25PcGVuXyh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5vcGVuKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5jbG9zZSgpXG4gICAgICB9XG4gICAgfSxcbiAgICBzdXJmYWNlQ2xpY2tIYW5kbGVyKGV2dCkge1xuICAgICAgaWYgKHRoaXMuaXNBY3Rpb25CdXR0b25fKGV2dC50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVBY3Rpb25CdXR0b25DbGljayhldnQpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNBY3Rpb25JY29uXyhldnQudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlQWN0aW9uSWNvbkNsaWNrKGV2dClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlS2V5ZG93bkV2ZW50KGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUtleURvd24oZXZ0KVxuICAgIH0sXG5cbiAgICBpc0FjdGlvbkJ1dHRvbl8odGFyZ2V0KSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihcbiAgICAgICAgcG9ueWZpbGwuY2xvc2VzdCh0YXJnZXQsIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5zdHJpbmdzLkFDVElPTl9TRUxFQ1RPUilcbiAgICAgIClcbiAgICB9LFxuXG4gICAgaXNBY3Rpb25JY29uXyh0YXJnZXQpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgICBwb255ZmlsbC5jbG9zZXN0KHRhcmdldCwgTURDU25hY2tiYXJGb3VuZGF0aW9uLnN0cmluZ3MuRElTTUlTU19TRUxFQ1RPUilcbiAgICAgIClcbiAgICB9LFxuXG4gICAgYW5ub3VuY2UoYXJpYUVsLCBsYWJlbEVsID0gYXJpYUVsKSB7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IGFyaWFFbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScpXG5cbiAgICAgIGNvbnN0IHRleHQgPSB0aGlzLmxhYmVsVGV4dFxuICAgICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBUZW1wb3JhcmlseSBkaXNhYmxlIGBhcmlhLWxpdmVgIHRvIHByZXZlbnQgSkFXUytGaXJlZm94IGZyb20gYW5ub3VuY2luZyB0aGUgbWVzc2FnZSB0d2ljZS5cbiAgICAgIGFyaWFFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdvZmYnKVxuXG4gICAgICAvLyBUZW1wb3JhcmlseSBjbGVhciBgdGV4dENvbnRlbnRgIHRvIGZvcmNlIGEgRE9NIG11dGF0aW9uIGV2ZW50IHRoYXQgd2lsbCBiZSBkZXRlY3RlZCBieSBzY3JlZW4gcmVhZGVycy5cbiAgICAgIC8vIGBhcmlhLWxpdmVgIGVsZW1lbnRzIGFyZSBvbmx5IGFubm91bmNlZCB3aGVuIHRoZSBlbGVtZW50J3MgYHRleHRDb250ZW50YCAqY2hhbmdlcyosIHNvIHNuYWNrYmFyc1xuICAgICAgLy8gc2VudCB0byB0aGUgYnJvd3NlciBpbiB0aGUgaW5pdGlhbCBIVE1MIHJlc3BvbnNlIHdvbid0IGJlIHJlYWQgdW5sZXNzIHdlIGNsZWFyIHRoZSBlbGVtZW50J3MgYHRleHRDb250ZW50YCBmaXJzdC5cbiAgICAgIC8vIFNpbWlsYXJseSwgZGlzcGxheWluZyB0aGUgc2FtZSBzbmFja2JhciBtZXNzYWdlIHR3aWNlIGluIGEgcm93IGRvZXNuJ3QgdHJpZ2dlciBhIERPTSBtdXRhdGlvbiBldmVudCxcbiAgICAgIC8vIHNvIHNjcmVlbiByZWFkZXJzIHdvbid0IGFubm91bmNlIHRoZSBzZWNvbmQgbWVzc2FnZSB1bmxlc3Mgd2UgZmlyc3QgY2xlYXIgYHRleHRDb250ZW50YC5cbiAgICAgIC8vXG4gICAgICAvLyBXZSBoYXZlIHRvIGNsZWFyIHRoZSBsYWJlbCB0ZXh0IHR3byBkaWZmZXJlbnQgd2F5cyB0byBtYWtlIGl0IHdvcmsgaW4gYWxsIGJyb3dzZXJzIGFuZCBzY3JlZW4gcmVhZGVyczpcbiAgICAgIC8vXG4gICAgICAvLyAgIDEuIGB0ZXh0Q29udGVudCA9ICcnYCBpcyByZXF1aXJlZCBmb3IgSUUxMSArIEpBV1NcbiAgICAgIC8vICAgMi4gYGlubmVySFRNTCA9ICcmbmJzcDsnYCBpcyByZXF1aXJlZCBmb3IgQ2hyb21lICsgSkFXUyBhbmQgTlZEQVxuICAgICAgLy9cbiAgICAgIC8vIEFsbCBvdGhlciBicm93c2VyL3NjcmVlbiByZWFkZXIgY29tYmluYXRpb25zIHN1cHBvcnQgYm90aCBtZXRob2RzLlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSB3cmFwcGVyIGA8c3Bhbj5gIHZpc3VhbGx5IGhpZGVzIHRoZSBzcGFjZSBjaGFyYWN0ZXIgc28gdGhhdCBpdCBkb2Vzbid0IGNhdXNlIGphbmsgd2hlbiBhZGRlZC9yZW1vdmVkLlxuICAgICAgLy8gTi5CLjogU2V0dGluZyBgcG9zaXRpb246IGFic29sdXRlYCwgYG9wYWNpdHk6IDBgLCBvciBgaGVpZ2h0OiAwYCBwcmV2ZW50cyBDaHJvbWUgZnJvbSBkZXRlY3RpbmcgdGhlIERPTSBjaGFuZ2UuXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyB0ZWNobmlxdWUgaGFzIGJlZW4gdGVzdGVkIGluOlxuICAgICAgLy9cbiAgICAgIC8vICAgKiBKQVdTIDIwMTk6XG4gICAgICAvLyAgICAgICAtIENocm9tZSA3MFxuICAgICAgLy8gICAgICAgLSBGaXJlZm94IDYwIChFU1IpXG4gICAgICAvLyAgICAgICAtIElFIDExXG4gICAgICAvLyAgICogTlZEQSAyMDE4OlxuICAgICAgLy8gICAgICAgLSBDaHJvbWUgNzBcbiAgICAgIC8vICAgICAgIC0gRmlyZWZveCA2MCAoRVNSKVxuICAgICAgLy8gICAgICAgLSBJRSAxMVxuICAgICAgLy8gICAqIENocm9tZVZveCA1M1xuICAgICAgdGhpcy5zaG93TGFiZWxUZXh0ID0gZmFsc2VcblxuICAgICAgLy8gUHJldmVudCB2aXN1YWwgamFuayBieSB0ZW1wb3JhcmlseSBkaXNwbGF5aW5nIHRoZSBsYWJlbCB0ZXh0IGluIHRoZSA6OmJlZm9yZSBwc2V1ZG8tZWxlbWVudC5cbiAgICAgIC8vIENTUyBnZW5lcmF0ZWQgY29udGVudCBpcyBub3JtYWxseSBhbm5vdW5jZWQgYnkgc2NyZWVuIHJlYWRlcnNcbiAgICAgIC8vIChleGNlcHQgaW4gSUUgMTE7IHNlZSBodHRwczovL3RpbmsudWsvYWNjZXNzaWJpbGl0eS1zdXBwb3J0LWZvci1jc3MtZ2VuZXJhdGVkLWNvbnRlbnQvKTtcbiAgICAgIC8vIGhvd2V2ZXIsIGBhcmlhLWxpdmVgIGlzIHR1cm5lZCBvZmYsIHNvIHRoaXMgRE9NIHVwZGF0ZSB3aWxsIGJlIGlnbm9yZWQgYnkgc2NyZWVuIHJlYWRlcnMuXG4gICAgICBsYWJlbEVsLnNldEF0dHJpYnV0ZShcbiAgICAgICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnN0cmluZ3MuQVJJQV9MSVZFX0xBQkVMX1RFWFRfQVRUUixcbiAgICAgICAgdGhpcy5sYWJlbFRleHRcbiAgICAgIClcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIEFsbG93IHNjcmVlbiByZWFkZXJzIHRvIGFubm91bmNlIGNoYW5nZXMgdG8gdGhlIERPTSBhZ2Fpbi5cbiAgICAgICAgYXJpYUVsLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgcHJpb3JpdHkpXG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBtZXNzYWdlIGZyb20gdGhlIDo6YmVmb3JlIHBzZXVkby1lbGVtZW50LlxuICAgICAgICBsYWJlbEVsLnJlbW92ZUF0dHJpYnV0ZShcbiAgICAgICAgICBNRENTbmFja2JhckZvdW5kYXRpb24uc3RyaW5ncy5BUklBX0xJVkVfTEFCRUxfVEVYVF9BVFRSXG4gICAgICAgIClcblxuICAgICAgICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBsYWJlbCB0ZXh0LCB3aGljaCB3aWxsIGJlIGFubm91bmNlZCBieSBzY3JlZW4gcmVhZGVycy5cbiAgICAgICAgdGhpcy5zaG93TGFiZWxUZXh0ID0gdHJ1ZVxuICAgICAgfSwgTURDU25hY2tiYXJGb3VuZGF0aW9uLm51bWJlcnMuQVJJQV9MSVZFX0RFTEFZX01TKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoY29tcGlsZWRUZW1wbGF0ZSwgaW5qZWN0U3R5bGUsIGRlZmF1bHRFeHBvcnQsIHNjb3BlSWQsIGlzRnVuY3Rpb25hbFRlbXBsYXRlLCBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovLCBpc1NoYWRvd01vZGUsIGNyZWF0ZUluamVjdG9yLCBjcmVhdGVJbmplY3RvclNTUiwgY3JlYXRlSW5qZWN0b3JTaGFkb3cpIHtcbiAgICBpZiAodHlwZW9mIGlzU2hhZG93TW9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjcmVhdGVJbmplY3RvclNTUiA9IGNyZWF0ZUluamVjdG9yO1xuICAgICAgICBjcmVhdGVJbmplY3RvciA9IGlzU2hhZG93TW9kZTtcbiAgICAgICAgaXNTaGFkb3dNb2RlID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgICBjb25zdCBvcHRpb25zID0gdHlwZW9mIGRlZmF1bHRFeHBvcnQgPT09ICdmdW5jdGlvbicgPyBkZWZhdWx0RXhwb3J0Lm9wdGlvbnMgOiBkZWZhdWx0RXhwb3J0O1xuICAgIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgICBpZiAoY29tcGlsZWRUZW1wbGF0ZSAmJiBjb21waWxlZFRlbXBsYXRlLnJlbmRlcikge1xuICAgICAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyO1xuICAgICAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zO1xuICAgICAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWU7XG4gICAgICAgIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgICAgICAgaWYgKGlzRnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHNjb3BlZElkXG4gICAgaWYgKHNjb3BlSWQpIHtcbiAgICAgICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWQ7XG4gICAgfVxuICAgIGxldCBob29rO1xuICAgIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7XG4gICAgICAgIC8vIHNlcnZlciBidWlsZFxuICAgICAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgICAgICAgIGNvbnRleHQgPVxuICAgICAgICAgICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpOyAvLyBmdW5jdGlvbmFsXG4gICAgICAgICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgICAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfXztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICAgICAgICBpZiAoaW5qZWN0U3R5bGUpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yU1NSKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJlbmNlXG4gICAgICAgICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAgICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICAgICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmplY3RTdHlsZSkge1xuICAgICAgICBob29rID0gaXNTaGFkb3dNb2RlXG4gICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yU2hhZG93KHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGluamVjdFN0eWxlLmNhbGwodGhpcywgY3JlYXRlSW5qZWN0b3IoY29udGV4dCkpO1xuICAgICAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGhvb2spIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyO1xuICAgICAgICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24oaCwgY29udGV4dCkge1xuICAgICAgICAgICAgICAgIGhvb2suY2FsbChjb250ZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGU7XG4gICAgICAgICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKSA6IFtob29rXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdEV4cG9ydDtcbn1cbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IG1kY1NuYWNrYmFyIGZyb20gJy4vbWRjLXNuYWNrYmFyLnZ1ZSdcblxuZXhwb3J0IHsgbWRjU25hY2tiYXIgfVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlUGx1Z2luKHtcbiAgbWRjU25hY2tiYXJcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJzY29wZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiTURDRm91bmRhdGlvbiIsImFkYXB0ZXIiLCJhZGFwdGVyXyIsIk1EQ1NuYWNrYmFyQWRhcHRlciIsImNsYXNzTmFtZSIsInJlYXNvbiIsImNzc0NsYXNzZXMiLCJPUEVOSU5HIiwiT1BFTiIsIkNMT1NJTkciLCJzdHJpbmdzIiwiU1VSRkFDRV9TRUxFQ1RPUiIsIkxBQkVMX1NFTEVDVE9SIiwiQUNUSU9OX1NFTEVDVE9SIiwiRElTTUlTU19TRUxFQ1RPUiIsIk9QRU5JTkdfRVZFTlQiLCJPUEVORURfRVZFTlQiLCJDTE9TSU5HX0VWRU5UIiwiQ0xPU0VEX0VWRU5UIiwiUkVBU09OX0FDVElPTiIsIlJFQVNPTl9ESVNNSVNTIiwiQVJJQV9MSVZFX0xBQkVMX1RFWFRfQVRUUiIsIm51bWJlcnMiLCJNSU5fQVVUT19ESVNNSVNTX1RJTUVPVVRfTVMiLCJNQVhfQVVUT19ESVNNSVNTX1RJTUVPVVRfTVMiLCJERUZBVUxUX0FVVE9fRElTTUlTU19USU1FT1VUX01TIiwiU05BQ0tCQVJfQU5JTUFUSU9OX09QRU5fVElNRV9NUyIsIlNOQUNLQkFSX0FOSU1BVElPTl9DTE9TRV9USU1FX01TIiwiQVJJQV9MSVZFX0RFTEFZX01TIiwiTURDU25hY2tiYXJGb3VuZGF0aW9uIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFubm91bmNlIiwibm90aWZ5T3BlbmluZyIsIm5vdGlmeU9wZW5lZCIsIm5vdGlmeUNsb3NpbmciLCJub3RpZnlDbG9zZWQiLCJkZWZhdWx0QWRhcHRlciIsImlzT3Blbl8iLCJhbmltYXRpb25GcmFtZV8iLCJhbmltYXRpb25UaW1lcl8iLCJhdXRvRGlzbWlzc1RpbWVyXyIsImF1dG9EaXNtaXNzVGltZW91dE1zXyIsImNsb3NlT25Fc2NhcGVfIiwiY2xlYXJBdXRvRGlzbWlzc1RpbWVyXyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwicnVuTmV4dEFuaW1hdGlvbkZyYW1lXyIsInNldFRpbWVvdXQiLCJoYW5kbGVBbmltYXRpb25UaW1lckVuZF8iLCJjbG9zZSIsImdldFRpbWVvdXRNcyIsInRpbWVvdXRNcyIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJFcnJvciIsImNsb3NlT25Fc2NhcGUiLCJldnQiLCJnZXRDbG9zZU9uRXNjYXBlIiwia2V5Q29kZSIsImNhbGxiYWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xvc2VzdCIsImVsZW1lbnQiLCJzZWxlY3RvciIsImVsIiwibWF0Y2hlcyIsInBhcmVudEVsZW1lbnQiLCJuYXRpdmVNYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJjYWxsIiwibm9ybWFsaXplQ29tcG9uZW50IiwiY29tcGlsZWRUZW1wbGF0ZSIsImluamVjdFN0eWxlIiwiZGVmYXVsdEV4cG9ydCIsInNjb3BlSWQiLCJpc0Z1bmN0aW9uYWxUZW1wbGF0ZSIsIm1vZHVsZUlkZW50aWZpZXIiLCJpc1NoYWRvd01vZGUiLCJjcmVhdGVJbmplY3RvciIsImNyZWF0ZUluamVjdG9yU1NSIiwiY3JlYXRlSW5qZWN0b3JTaGFkb3ciLCJvcHRpb25zIiwicmVuZGVyIiwic3RhdGljUmVuZGVyRm5zIiwiX2NvbXBpbGVkIiwiZnVuY3Rpb25hbCIsIl9zY29wZUlkIiwiaG9vayIsImNvbnRleHQiLCIkdm5vZGUiLCJzc3JDb250ZXh0IiwicGFyZW50IiwiX19WVUVfU1NSX0NPTlRFWFRfXyIsIl9yZWdpc3RlcmVkQ29tcG9uZW50cyIsImFkZCIsIl9zc3JSZWdpc3RlciIsIiRyb290IiwiJG9wdGlvbnMiLCJzaGFkb3dSb290Iiwib3JpZ2luYWxSZW5kZXIiLCJyZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24iLCJoIiwiZXhpc3RpbmciLCJiZWZvcmVDcmVhdGUiLCJjb25jYXQiLCJtZGNTbmFja2JhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztFQUFPLFNBQVNBLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0VBQy9CO0VBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0VBQ0EsTUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0VBQ2pDRCxJQUFBQSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBZDtFQUNELEdBRkQsTUFFTyxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7RUFDeEM7RUFDQUgsSUFBQUEsSUFBSSxHQUFHRyxNQUFNLENBQUNELEdBQWQ7RUFDRDs7RUFDRCxNQUFJRixJQUFKLEVBQVU7RUFDUkEsSUFBQUEsSUFBSSxDQUFDSSxHQUFMLENBQVNMLE1BQVQ7RUFDRDtFQUNGOztFQ1pNLFNBQVNNLFVBQVQsQ0FBb0JDLFVBQXBCLEVBQWdDO0VBQ3JDLFNBQU87RUFDTEMsSUFBQUEsT0FBTyxFQUFFLGFBREo7RUFFTEMsSUFBQUEsT0FBTyxFQUFFLGlCQUFBQyxFQUFFLEVBQUk7RUFDYixXQUFLLElBQUlDLEdBQVQsSUFBZ0JKLFVBQWhCLEVBQTRCO0VBQzFCLFlBQUlLLFNBQVMsR0FBR0wsVUFBVSxDQUFDSSxHQUFELENBQTFCO0VBQ0FELFFBQUFBLEVBQUUsQ0FBQ0UsU0FBSCxDQUFhQSxTQUFTLENBQUNDLElBQXZCLEVBQTZCRCxTQUE3QjtFQUNEO0VBQ0YsS0FQSTtFQVFMTCxJQUFBQSxVQUFVLEVBQVZBO0VBUkssR0FBUDtFQVVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQ1hEOztFQ0FBLElBQU1PLEtBQUssR0FDVEMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkYsSUFBSSxDQUFDQyxLQUFMLENBQVcsVUFBWCxDQUEzQixFQUFtREUsUUFBbkQsS0FBZ0UsR0FEbEU7O0VDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdUJBOzs7TUFHTUM7Ozs7OztFQUNKOzBCQUN3QjtFQUN0QjtFQUNBO0VBQ0EsYUFBTyxFQUFQO0VBQ0Q7RUFFRDs7OzswQkFDcUI7RUFDbkI7RUFDQTtFQUNBLGFBQU8sRUFBUDtFQUNEO0VBRUQ7Ozs7MEJBQ3FCO0VBQ25CO0VBQ0E7RUFDQSxhQUFPLEVBQVA7RUFDRDtFQUVEOzs7OzBCQUM0QjtFQUMxQjtFQUNBO0VBQ0E7RUFDQSxhQUFPLEVBQVA7RUFDRDtFQUVEOzs7Ozs7RUFHQSwyQkFBMEI7RUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0VBQUE7O0VBQ3hCO0VBQ0EsU0FBS0MsUUFBTCxHQUFnQkQsT0FBaEI7RUFDRDs7Ozs2QkFFTTtFQUVOOzs7Z0NBRVM7RUFFVDs7Ozs7O0VDdEVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXVCQTs7RUFFQTs7Ozs7Ozs7Ozs7Ozs7O01BZU1FOzs7Ozs7Ozs7O0VBQ0o7K0JBQ1NDLFdBQVc7RUFFcEI7Ozs7a0NBQ1lBLFdBQVc7OztpQ0FFWjs7O3NDQUVLOzs7cUNBQ0Q7RUFFZjs7Ozs7O29DQUdjQyxRQUFRO0VBRXRCOzs7Ozs7bUNBR2FBLFFBQVE7Ozs7OztFQzVEdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF1QkEsSUFBTUMsVUFBVSxHQUFHO0VBQ2pCQyxFQUFBQSxPQUFPLEVBQUUsdUJBRFE7RUFFakJDLEVBQUFBLElBQUksRUFBRSxvQkFGVztFQUdqQkMsRUFBQUEsT0FBTyxFQUFFO0VBSFEsQ0FBbkI7RUFNQSxJQUFNQyxPQUFPLEdBQUc7RUFDZEMsRUFBQUEsZ0JBQWdCLEVBQUUsd0JBREo7RUFFZEMsRUFBQUEsY0FBYyxFQUFFLHNCQUZGO0VBR2RDLEVBQUFBLGVBQWUsRUFBRSx1QkFISDtFQUlkQyxFQUFBQSxnQkFBZ0IsRUFBRSx3QkFKSjtFQU1kQyxFQUFBQSxhQUFhLEVBQUUscUJBTkQ7RUFPZEMsRUFBQUEsWUFBWSxFQUFFLG9CQVBBO0VBUWRDLEVBQUFBLGFBQWEsRUFBRSxxQkFSRDtFQVNkQyxFQUFBQSxZQUFZLEVBQUUsb0JBVEE7RUFXZEMsRUFBQUEsYUFBYSxFQUFFLFFBWEQ7RUFZZEMsRUFBQUEsY0FBYyxFQUFFLFNBWkY7RUFjZEMsRUFBQUEseUJBQXlCLEVBQUU7RUFkYixDQUFoQjtFQWlCQSxJQUFNQyxPQUFPLEdBQUc7RUFDZEMsRUFBQUEsMkJBQTJCLEVBQUUsSUFEZjtFQUVkQyxFQUFBQSwyQkFBMkIsRUFBRSxLQUZmO0VBR2RDLEVBQUFBLCtCQUErQixFQUFFLElBSG5CO0VBS2Q7RUFDQUMsRUFBQUEsK0JBQStCLEVBQUUsR0FObkI7RUFPZEMsRUFBQUEsZ0NBQWdDLEVBQUUsRUFQcEI7O0VBU2Q7Ozs7O0VBS0FDLEVBQUFBLGtCQUFrQixFQUFFO0VBZE4sQ0FBaEI7O01DakJPckIsVUFBMEJELFdBQTFCQztNQUFTQyxPQUFpQkYsV0FBakJFO01BQU1DLFVBQVdILFdBQVhHO01BQ2ZVLGdCQUFpQ1QsUUFBakNTO01BQWVDLGlCQUFrQlYsUUFBbEJVOztNQUVoQlM7Ozs7Ozs7MEJBQ29CO0VBQ3RCLGFBQU92QixVQUFQO0VBQ0Q7OzswQkFFb0I7RUFDbkIsYUFBT0ksT0FBUDtFQUNEOzs7MEJBRW9CO0VBQ25CLGFBQU9ZLE9BQVA7RUFDRDtFQUVEOzs7Ozs7MEJBRzRCO0VBQzFCO0VBQU87RUFBb0M7RUFDekNRLFVBQUFBLFFBQVEsRUFBRTtFQUFDO0VBQTRCLFlBREU7RUFFekNDLFVBQUFBLFdBQVcsRUFBRTtFQUFDO0VBQTRCLFlBRkQ7RUFHekNDLFVBQUFBLFFBQVEsRUFBRSxvQkFBTSxFQUh5QjtFQUl6Q0MsVUFBQUEsYUFBYSxFQUFFLHlCQUFNLEVBSm9CO0VBS3pDQyxVQUFBQSxZQUFZLEVBQUUsd0JBQU0sRUFMcUI7RUFNekNDLFVBQUFBLGFBQWEsRUFBRTtFQUFDO0VBQXlCLFlBTkE7RUFPekNDLFVBQUFBLFlBQVksRUFBRTtFQUFDO0VBQXlCO0VBUEM7RUFBM0M7RUFTRDtFQUVEOzs7Ozs7RUFHQSxpQ0FBWW5DLE9BQVosRUFBcUI7RUFBQTs7RUFBQTs7RUFDbkIsK0ZBQU0sU0FBYzRCLHFCQUFxQixDQUFDUSxjQUFwQyxFQUFvRHBDLE9BQXBELENBQU47RUFFQTs7RUFDQSxVQUFLcUMsT0FBTCxHQUFlLEtBQWY7RUFFQTs7RUFDQSxVQUFLQyxlQUFMLEdBQXVCLENBQXZCO0VBRUE7O0VBQ0EsVUFBS0MsZUFBTCxHQUF1QixDQUF2QjtFQUVBOztFQUNBLFVBQUtDLGlCQUFMLEdBQXlCLENBQXpCO0VBRUE7O0VBQ0EsVUFBS0MscUJBQUwsR0FBNkJwQixPQUFPLENBQUNHLCtCQUFyQztFQUVBOztFQUNBLFVBQUtrQixjQUFMLEdBQXNCLElBQXRCO0VBbkJtQjtFQW9CcEI7Ozs7Z0NBRVM7RUFDUixXQUFLQyxzQkFBTDtFQUNBQyxNQUFBQSxvQkFBb0IsQ0FBQyxLQUFLTixlQUFOLENBQXBCO0VBQ0EsV0FBS0EsZUFBTCxHQUF1QixDQUF2QjtFQUNBTyxNQUFBQSxZQUFZLENBQUMsS0FBS04sZUFBTixDQUFaO0VBQ0EsV0FBS0EsZUFBTCxHQUF1QixDQUF2QjtFQUNBLFdBQUt0QyxRQUFMLENBQWM2QixXQUFkLENBQTBCeEIsT0FBMUI7RUFDQSxXQUFLTCxRQUFMLENBQWM2QixXQUFkLENBQTBCdkIsSUFBMUI7RUFDQSxXQUFLTixRQUFMLENBQWM2QixXQUFkLENBQTBCdEIsT0FBMUI7RUFDRDs7OzZCQUVNO0VBQUE7O0VBQ0wsV0FBS21DLHNCQUFMO0VBQ0EsV0FBS04sT0FBTCxHQUFlLElBQWY7RUFDQSxXQUFLcEMsUUFBTCxDQUFjK0IsYUFBZDtFQUNBLFdBQUsvQixRQUFMLENBQWM2QixXQUFkLENBQTBCdEIsT0FBMUI7RUFDQSxXQUFLUCxRQUFMLENBQWM0QixRQUFkLENBQXVCdkIsT0FBdkI7RUFDQSxXQUFLTCxRQUFMLENBQWM4QixRQUFkLEdBTks7O0VBU0wsV0FBS2Usc0JBQUwsQ0FBNEIsWUFBTTtFQUNoQyxRQUFBLE1BQUksQ0FBQzdDLFFBQUwsQ0FBYzRCLFFBQWQsQ0FBdUJ0QixJQUF2Qjs7RUFFQSxRQUFBLE1BQUksQ0FBQ2dDLGVBQUwsR0FBdUJRLFVBQVUsQ0FBQyxZQUFNO0VBQ3RDLFVBQUEsTUFBSSxDQUFDQyx3QkFBTDs7RUFDQSxVQUFBLE1BQUksQ0FBQy9DLFFBQUwsQ0FBY2dDLFlBQWQ7O0VBQ0EsVUFBQSxNQUFJLENBQUNPLGlCQUFMLEdBQXlCTyxVQUFVLENBQUMsWUFBTTtFQUN4QyxZQUFBLE1BQUksQ0FBQ0UsS0FBTCxDQUFXOUIsY0FBWDtFQUNELFdBRmtDLEVBRWhDLE1BQUksQ0FBQytCLFlBQUwsRUFGZ0MsQ0FBbkM7RUFHRCxTQU5nQyxFQU05QjdCLE9BQU8sQ0FBQ0ksK0JBTnNCLENBQWpDO0VBT0QsT0FWRDtFQVdEO0VBRUQ7Ozs7Ozs7OzhCQUttQjtFQUFBOztFQUFBLFVBQWJyQixNQUFhLHVFQUFKLEVBQUk7O0VBQ2pCLFVBQUksQ0FBQyxLQUFLaUMsT0FBVixFQUFtQjtFQUNqQjtFQUNBO0VBQ0Q7O0VBRURPLE1BQUFBLG9CQUFvQixDQUFDLEtBQUtOLGVBQU4sQ0FBcEI7RUFDQSxXQUFLQSxlQUFMLEdBQXVCLENBQXZCO0VBQ0EsV0FBS0ssc0JBQUw7RUFFQSxXQUFLTixPQUFMLEdBQWUsS0FBZjtFQUNBLFdBQUtwQyxRQUFMLENBQWNpQyxhQUFkLENBQTRCOUIsTUFBNUI7RUFDQSxXQUFLSCxRQUFMLENBQWM0QixRQUFkLENBQXVCeEIsVUFBVSxDQUFDRyxPQUFsQztFQUNBLFdBQUtQLFFBQUwsQ0FBYzZCLFdBQWQsQ0FBMEJ6QixVQUFVLENBQUNFLElBQXJDO0VBQ0EsV0FBS04sUUFBTCxDQUFjNkIsV0FBZCxDQUEwQnpCLFVBQVUsQ0FBQ0MsT0FBckM7RUFFQXVDLE1BQUFBLFlBQVksQ0FBQyxLQUFLTixlQUFOLENBQVo7RUFDQSxXQUFLQSxlQUFMLEdBQXVCUSxVQUFVLENBQUMsWUFBTTtFQUN0QyxRQUFBLE1BQUksQ0FBQ0Msd0JBQUw7O0VBQ0EsUUFBQSxNQUFJLENBQUMvQyxRQUFMLENBQWNrQyxZQUFkLENBQTJCL0IsTUFBM0I7RUFDRCxPQUhnQyxFQUc5QmlCLE9BQU8sQ0FBQ0ssZ0NBSHNCLENBQWpDO0VBSUQ7RUFFRDs7Ozs7OytCQUdTO0VBQ1AsYUFBTyxLQUFLVyxPQUFaO0VBQ0Q7RUFFRDs7Ozs7O3FDQUdlO0VBQ2IsYUFBTyxLQUFLSSxxQkFBWjtFQUNEO0VBRUQ7Ozs7OzttQ0FHYVUsV0FBVztFQUN0QjtFQUNBLFVBQU1DLFFBQVEsR0FBRy9CLE9BQU8sQ0FBQ0MsMkJBQXpCO0VBQ0EsVUFBTStCLFFBQVEsR0FBR2hDLE9BQU8sQ0FBQ0UsMkJBQXpCOztFQUVBLFVBQUk0QixTQUFTLElBQUlFLFFBQWIsSUFBeUJGLFNBQVMsSUFBSUMsUUFBMUMsRUFBb0Q7RUFDbEQsYUFBS1gscUJBQUwsR0FBNkJVLFNBQTdCO0VBQ0QsT0FGRCxNQUVPO0VBQ0wsY0FBTSxJQUFJRyxLQUFKLHFEQUF1REYsUUFBdkQsbUJBQW1FQyxRQUFuRSx3QkFBeUZGLFNBQXpGLE9BQU47RUFDRDtFQUNGO0VBRUQ7Ozs7Ozt5Q0FHbUI7RUFDakIsYUFBTyxLQUFLVCxjQUFaO0VBQ0Q7RUFFRDs7Ozs7O3VDQUdpQmEsZUFBZTtFQUM5QixXQUFLYixjQUFMLEdBQXNCYSxhQUF0QjtFQUNEO0VBRUQ7Ozs7OztvQ0FHY0MsS0FBSztFQUNqQixVQUFJLEtBQUtDLGdCQUFMLE9BQTRCRCxHQUFHLENBQUNqRSxHQUFKLEtBQVksUUFBWixJQUF3QmlFLEdBQUcsQ0FBQ0UsT0FBSixLQUFnQixFQUFwRSxDQUFKLEVBQTZFO0VBQzNFLGFBQUtULEtBQUwsQ0FBVzlCLGNBQVg7RUFDRDtFQUNGO0VBRUQ7Ozs7Ozs4Q0FHd0JxQyxLQUFLO0VBQzNCLFdBQUtQLEtBQUwsQ0FBVy9CLGFBQVg7RUFDRDtFQUVEOzs7Ozs7NENBR3NCc0MsS0FBSztFQUN6QixXQUFLUCxLQUFMLENBQVc5QixjQUFYO0VBQ0Q7RUFFRDs7OzsrQ0FDeUI7RUFDdkIwQixNQUFBQSxZQUFZLENBQUMsS0FBS0wsaUJBQU4sQ0FBWjtFQUNBLFdBQUtBLGlCQUFMLEdBQXlCLENBQXpCO0VBQ0Q7RUFFRDs7OztpREFDMkI7RUFDekIsV0FBS0QsZUFBTCxHQUF1QixDQUF2QjtFQUNBLFdBQUt0QyxRQUFMLENBQWM2QixXQUFkLENBQTBCekIsVUFBVSxDQUFDQyxPQUFyQztFQUNBLFdBQUtMLFFBQUwsQ0FBYzZCLFdBQWQsQ0FBMEJ6QixVQUFVLENBQUNHLE9BQXJDO0VBQ0Q7RUFFRDs7Ozs7Ozs7NkNBS3VCbUQsVUFBVTtFQUFBOztFQUMvQmYsTUFBQUEsb0JBQW9CLENBQUMsS0FBS04sZUFBTixDQUFwQjtFQUNBLFdBQUtBLGVBQUwsR0FBdUJzQixxQkFBcUIsQ0FBQyxZQUFNO0VBQ2pELFFBQUEsTUFBSSxDQUFDdEIsZUFBTCxHQUF1QixDQUF2QjtFQUNBTyxRQUFBQSxZQUFZLENBQUMsTUFBSSxDQUFDTixlQUFOLENBQVo7RUFDQSxRQUFBLE1BQUksQ0FBQ0EsZUFBTCxHQUF1QlEsVUFBVSxDQUFDWSxRQUFELEVBQVcsQ0FBWCxDQUFqQztFQUNELE9BSjJDLENBQTVDO0VBS0Q7Ozs7SUE3TWlDNUQ7O0VDaENwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF1QkE7Ozs7O0VBS0E7Ozs7O0VBS0EsU0FBUzhELE9BQVQsQ0FBaUJDLE9BQWpCLEVBQTBCQyxRQUExQixFQUFvQztFQUNsQyxNQUFJRCxPQUFPLENBQUNELE9BQVosRUFBcUI7RUFDbkIsV0FBT0MsT0FBTyxDQUFDRCxPQUFSLENBQWdCRSxRQUFoQixDQUFQO0VBQ0Q7O0VBRUQsTUFBSUMsRUFBRSxHQUFHRixPQUFUOztFQUNBLFNBQU9FLEVBQVAsRUFBVztFQUNULFFBQUlDLE9BQU8sQ0FBQ0QsRUFBRCxFQUFLRCxRQUFMLENBQVgsRUFBMkI7RUFDekIsYUFBT0MsRUFBUDtFQUNEOztFQUNEQSxJQUFBQSxFQUFFLEdBQUdBLEVBQUUsQ0FBQ0UsYUFBUjtFQUNEOztFQUNELFNBQU8sSUFBUDtFQUNEO0VBRUQ7Ozs7Ozs7RUFLQSxTQUFTRCxPQUFULENBQWlCSCxPQUFqQixFQUEwQkMsUUFBMUIsRUFBb0M7RUFDbEMsTUFBTUksYUFBYSxHQUFHTCxPQUFPLENBQUNHLE9BQVIsSUFDakJILE9BQU8sQ0FBQ00scUJBRFMsSUFFakJOLE9BQU8sQ0FBQ08saUJBRmI7RUFHQSxTQUFPRixhQUFhLENBQUNHLElBQWQsQ0FBbUJSLE9BQW5CLEVBQTRCQyxRQUE1QixDQUFQO0VBQ0Q7OztBQ2ZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUE7O0VDM0NlLFNBQVNRLGtCQUFULENBQTRCQyxnQkFBNUIsRUFBOENDLFdBQTlDLEVBQTJEQyxhQUEzRCxFQUEwRUMsT0FBMUUsRUFBbUZDLG9CQUFuRixFQUF5R0M7RUFBaUI7RUFBMUgsRUFBNklDLFlBQTdJLEVBQTJKQyxjQUEzSixFQUEyS0MsaUJBQTNLLEVBQThMQyxvQkFBOUwsRUFBb047RUFDL04sTUFBSSxPQUFPSCxZQUFQLEtBQXdCLFVBQTVCLEVBQXdDO0VBQ3BDRSxJQUFBQSxpQkFBaUIsR0FBR0QsY0FBcEI7RUFDQUEsSUFBQUEsY0FBYyxHQUFHRCxZQUFqQjtFQUNBQSxJQUFBQSxZQUFZLEdBQUcsS0FBZjtFQUNILEdBTDhOOzs7RUFPL04sTUFBTUksT0FBTyxHQUFHLE9BQU9SLGFBQVAsS0FBeUIsVUFBekIsR0FBc0NBLGFBQWEsQ0FBQ1EsT0FBcEQsR0FBOERSLGFBQTlFLENBUCtOOztFQVMvTixNQUFJRixnQkFBZ0IsSUFBSUEsZ0JBQWdCLENBQUNXLE1BQXpDLEVBQWlEO0VBQzdDRCxJQUFBQSxPQUFPLENBQUNDLE1BQVIsR0FBaUJYLGdCQUFnQixDQUFDVyxNQUFsQztFQUNBRCxJQUFBQSxPQUFPLENBQUNFLGVBQVIsR0FBMEJaLGdCQUFnQixDQUFDWSxlQUEzQztFQUNBRixJQUFBQSxPQUFPLENBQUNHLFNBQVIsR0FBb0IsSUFBcEIsQ0FINkM7O0VBSzdDLFFBQUlULG9CQUFKLEVBQTBCO0VBQ3RCTSxNQUFBQSxPQUFPLENBQUNJLFVBQVIsR0FBcUIsSUFBckI7RUFDSDtFQUNKLEdBakI4Tjs7O0VBbUIvTixNQUFJWCxPQUFKLEVBQWE7RUFDVE8sSUFBQUEsT0FBTyxDQUFDSyxRQUFSLEdBQW1CWixPQUFuQjtFQUNIOztFQUNELE1BQUlhLElBQUo7O0VBQ0EsTUFBSVgsZ0JBQUosRUFBc0I7RUFDbEI7RUFDQVcsSUFBQUEsSUFBSSxHQUFHLGNBQVVDLE9BQVYsRUFBbUI7RUFDdEI7RUFDQUEsTUFBQUEsT0FBTyxHQUNIQSxPQUFPO0VBQ0YsV0FBS0MsTUFBTCxJQUFlLEtBQUtBLE1BQUwsQ0FBWUMsVUFEaEM7RUFFSyxXQUFLQyxNQUFMLElBQWUsS0FBS0EsTUFBTCxDQUFZRixNQUEzQixJQUFxQyxLQUFLRSxNQUFMLENBQVlGLE1BQVosQ0FBbUJDLFVBSGpFLENBRnNCO0VBTXRCOztFQUNBLFVBQUksQ0FBQ0YsT0FBRCxJQUFZLE9BQU9JLG1CQUFQLEtBQStCLFdBQS9DLEVBQTREO0VBQ3hESixRQUFBQSxPQUFPLEdBQUdJLG1CQUFWO0VBQ0gsT0FUcUI7OztFQVd0QixVQUFJcEIsV0FBSixFQUFpQjtFQUNiQSxRQUFBQSxXQUFXLENBQUNILElBQVosQ0FBaUIsSUFBakIsRUFBdUJVLGlCQUFpQixDQUFDUyxPQUFELENBQXhDO0VBQ0gsT0FicUI7OztFQWV0QixVQUFJQSxPQUFPLElBQUlBLE9BQU8sQ0FBQ0sscUJBQXZCLEVBQThDO0VBQzFDTCxRQUFBQSxPQUFPLENBQUNLLHFCQUFSLENBQThCQyxHQUE5QixDQUFrQ2xCLGdCQUFsQztFQUNIO0VBQ0osS0FsQkQsQ0FGa0I7RUFzQmxCOzs7RUFDQUssSUFBQUEsT0FBTyxDQUFDYyxZQUFSLEdBQXVCUixJQUF2QjtFQUNILEdBeEJELE1BeUJLLElBQUlmLFdBQUosRUFBaUI7RUFDbEJlLElBQUFBLElBQUksR0FBR1YsWUFBWSxHQUNiLFlBQVk7RUFDVkwsTUFBQUEsV0FBVyxDQUFDSCxJQUFaLENBQWlCLElBQWpCLEVBQXVCVyxvQkFBb0IsQ0FBQyxLQUFLZ0IsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxVQUFyQixDQUEzQztFQUNILEtBSGMsR0FJYixVQUFVVixPQUFWLEVBQW1CO0VBQ2pCaEIsTUFBQUEsV0FBVyxDQUFDSCxJQUFaLENBQWlCLElBQWpCLEVBQXVCUyxjQUFjLENBQUNVLE9BQUQsQ0FBckM7RUFDSCxLQU5MO0VBT0g7O0VBQ0QsTUFBSUQsSUFBSixFQUFVO0VBQ04sUUFBSU4sT0FBTyxDQUFDSSxVQUFaLEVBQXdCO0VBQ3BCO0VBQ0EsVUFBTWMsY0FBYyxHQUFHbEIsT0FBTyxDQUFDQyxNQUEvQjs7RUFDQUQsTUFBQUEsT0FBTyxDQUFDQyxNQUFSLEdBQWlCLFNBQVNrQix3QkFBVCxDQUFrQ0MsQ0FBbEMsRUFBcUNiLE9BQXJDLEVBQThDO0VBQzNERCxRQUFBQSxJQUFJLENBQUNsQixJQUFMLENBQVVtQixPQUFWO0VBQ0EsZUFBT1csY0FBYyxDQUFDRSxDQUFELEVBQUliLE9BQUosQ0FBckI7RUFDSCxPQUhEO0VBSUgsS0FQRCxNQVFLO0VBQ0Q7RUFDQSxVQUFNYyxRQUFRLEdBQUdyQixPQUFPLENBQUNzQixZQUF6QjtFQUNBdEIsTUFBQUEsT0FBTyxDQUFDc0IsWUFBUixHQUF1QkQsUUFBUSxHQUFHLEdBQUdFLE1BQUgsQ0FBVUYsUUFBVixFQUFvQmYsSUFBcEIsQ0FBSCxHQUErQixDQUFDQSxJQUFELENBQTlEO0VBQ0g7RUFDSjs7RUFDRCxTQUFPZCxhQUFQO0VBQ0g7OztBRHpFRCxFQUVBO0VBQ0E7RUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFQ0EsZUFBZXhGLFVBQVUsQ0FBQztFQUN4QndILEVBQUFBLFdBQVcsRUFBWEE7RUFEd0IsQ0FBRCxDQUF6Qjs7RUNBQS9ILFFBQVEsQ0FBQ0MsTUFBRCxDQUFSOzs7Ozs7OzsifQ==
