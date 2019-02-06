/**
* @module vue-mdc-adaptersnackbar 0.19.4-beta
* @exports VueMDCSnackbar
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.44.0","material-components-web":"^0.44.0"}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2tiYXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9hdXRvLWluaXQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYmFzZS1wbHVnaW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWV2ZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NuYWNrYmFyL2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NuYWNrYmFyL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc25hY2tiYXIvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYW5pbWF0aW9uL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vcG9ueWZpbGwuanMiLCIuLi8uLi9jb21wb25lbnRzL3NuYWNrYmFyL21kYy1zbmFja2Jhci52dWUiLCIuLi8uLi9jb21wb25lbnRzL3NuYWNrYmFyL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9zbmFja2Jhci9lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXV0b0luaXQocGx1Z2luKSB7XG4gIC8vIEF1dG8taW5zdGFsbFxuICBsZXQgX1Z1ZSA9IG51bGxcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgX1Z1ZSA9IHdpbmRvdy5WdWVcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8qZ2xvYmFsIGdsb2JhbCovXG4gICAgX1Z1ZSA9IGdsb2JhbC5WdWVcbiAgfVxuICBpZiAoX1Z1ZSkge1xuICAgIF9WdWUudXNlKHBsdWdpbilcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIEJhc2VQbHVnaW4oY29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICdfX1ZFUlNJT05fXycsXG4gICAgaW5zdGFsbDogdm0gPT4ge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNba2V5XVxuICAgICAgICB2bS5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHNcbiAgfVxufVxuIiwiLyogZ2xvYmFsIEN1c3RvbUV2ZW50ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Q3VzdG9tRXZlbnQoZWwsIGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gIGxldCBldnRcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICBidWJibGVzOiBzaG91bGRCdWJibGVcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKVxuICB9XG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBBXG4gKi9cbmNsYXNzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVte2Nzc0NsYXNzZXN9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtzdHJpbmdzfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtudW1iZXJzfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshT2JqZWN0fSAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAvLyB2YWxpZGF0aW9uLlxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0E9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyID0ge30pIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUF9ICovXG4gICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFNuYWNrYmFyLiBQcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIG1hbmFnaW5nOlxuICogLSBDU1MgY2xhc3Nlc1xuICogLSBFdmVudCBoYW5kbGVyc1xuICpcbiAqIEFkZGl0aW9uYWxseSwgcHJvdmlkZXMgdHlwZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGFkYXB0ZXIgdG8gdGhlIENsb3N1cmVcbiAqIGNvbXBpbGVyLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGFkYXB0ZXIgZm9yIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZSB0byBkZWxlZ2F0ZSB1cGRhdGVzIHRvXG4gKiB0aGUgY29tcG9uZW50IGluIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZS4gU2VlIGFyY2hpdGVjdHVyZSBkb2N1bWVudGF0aW9uXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9jb2RlL2FyY2hpdGVjdHVyZS5tZFxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDU25hY2tiYXJBZGFwdGVyIHtcbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICBhbm5vdW5jZSgpIHt9XG5cbiAgbm90aWZ5T3BlbmluZygpIHt9XG4gIG5vdGlmeU9wZW5lZCgpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb25cbiAgICovXG4gIG5vdGlmeUNsb3NpbmcocmVhc29uKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uXG4gICAqL1xuICBub3RpZnlDbG9zZWQocmVhc29uKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENTbmFja2JhckFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgT1BFTklORzogJ21kYy1zbmFja2Jhci0tb3BlbmluZycsXG4gIE9QRU46ICdtZGMtc25hY2tiYXItLW9wZW4nLFxuICBDTE9TSU5HOiAnbWRjLXNuYWNrYmFyLS1jbG9zaW5nJyxcbn07XG5cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFNVUkZBQ0VfU0VMRUNUT1I6ICcubWRjLXNuYWNrYmFyX19zdXJmYWNlJyxcbiAgTEFCRUxfU0VMRUNUT1I6ICcubWRjLXNuYWNrYmFyX19sYWJlbCcsXG4gIEFDVElPTl9TRUxFQ1RPUjogJy5tZGMtc25hY2tiYXJfX2FjdGlvbicsXG4gIERJU01JU1NfU0VMRUNUT1I6ICcubWRjLXNuYWNrYmFyX19kaXNtaXNzJyxcblxuICBPUEVOSU5HX0VWRU5UOiAnTURDU25hY2tiYXI6b3BlbmluZycsXG4gIE9QRU5FRF9FVkVOVDogJ01EQ1NuYWNrYmFyOm9wZW5lZCcsXG4gIENMT1NJTkdfRVZFTlQ6ICdNRENTbmFja2JhcjpjbG9zaW5nJyxcbiAgQ0xPU0VEX0VWRU5UOiAnTURDU25hY2tiYXI6Y2xvc2VkJyxcblxuICBSRUFTT05fQUNUSU9OOiAnYWN0aW9uJyxcbiAgUkVBU09OX0RJU01JU1M6ICdkaXNtaXNzJyxcblxuICBBUklBX0xJVkVfTEFCRUxfVEVYVF9BVFRSOiAnZGF0YS1tZGMtc25hY2tiYXItbGFiZWwtdGV4dCcsXG59O1xuXG5jb25zdCBudW1iZXJzID0ge1xuICBNSU5fQVVUT19ESVNNSVNTX1RJTUVPVVRfTVM6IDQwMDAsXG4gIE1BWF9BVVRPX0RJU01JU1NfVElNRU9VVF9NUzogMTAwMDAsXG4gIERFRkFVTFRfQVVUT19ESVNNSVNTX1RJTUVPVVRfTVM6IDUwMDAsXG5cbiAgLy8gVGhlc2UgdmFyaWFibGVzIG5lZWQgdG8gYmUga2VwdCBpbiBzeW5jIHdpdGggdGhlIHZhbHVlcyBpbiBfdmFyaWFibGVzLnNjc3MuXG4gIFNOQUNLQkFSX0FOSU1BVElPTl9PUEVOX1RJTUVfTVM6IDE1MCxcbiAgU05BQ0tCQVJfQU5JTUFUSU9OX0NMT1NFX1RJTUVfTVM6IDc1LFxuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmV0d2VlbiB0ZW1wb3JhcmlseSBjbGVhcmluZyB0aGUgbGFiZWwgdGV4dFxuICAgKiBpbiB0aGUgRE9NIGFuZCBzdWJzZXF1ZW50bHkgcmVzdG9yaW5nIGl0LiBUaGlzIGlzIG5lY2Vzc2FyeSB0byBmb3JjZSBJRSAxMVxuICAgKiB0byBwaWNrIHVwIHRoZSBgYXJpYS1saXZlYCBjb250ZW50IGNoYW5nZSBhbmQgYW5ub3VuY2UgaXQgdG8gdGhlIHVzZXIuXG4gICAqL1xuICBBUklBX0xJVkVfREVMQVlfTVM6IDEwMDAsXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogW1wiZXJyb3JcIiwge1wiYXJnc0lnbm9yZVBhdHRlcm5cIjogXCJldnRcIiwgXCJ2YXJzSWdub3JlUGF0dGVyblwiOiBcIkFkYXB0ZXIkXCJ9XSAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENTbmFja2JhckFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5nc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCB7T1BFTklORywgT1BFTiwgQ0xPU0lOR30gPSBjc3NDbGFzc2VzO1xuY29uc3Qge1JFQVNPTl9BQ1RJT04sIFJFQVNPTl9ESVNNSVNTfSA9IHN0cmluZ3M7XG5cbmNsYXNzIE1EQ1NuYWNrYmFyRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1NuYWNrYmFyQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1NuYWNrYmFyQWRhcHRlcn0gKi8gKHtcbiAgICAgIGFkZENsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBhbm5vdW5jZTogKCkgPT4ge30sXG4gICAgICBub3RpZnlPcGVuaW5nOiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeU9wZW5lZDogKCkgPT4ge30sXG4gICAgICBub3RpZnlDbG9zaW5nOiAoLyogcmVhc29uOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgbm90aWZ5Q2xvc2VkOiAoLyogcmVhc29uOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ1NuYWNrYmFyQWRhcHRlcj19IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuaXNPcGVuXyA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hbmltYXRpb25UaW1lcl8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hdXRvRGlzbWlzc1RpbWVyXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmF1dG9EaXNtaXNzVGltZW91dE1zXyA9IG51bWJlcnMuREVGQVVMVF9BVVRPX0RJU01JU1NfVElNRU9VVF9NUztcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmNsb3NlT25Fc2NhcGVfID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbGVhckF1dG9EaXNtaXNzVGltZXJfKCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZV8pO1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25UaW1lcl8pO1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gMDtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE9QRU5JTkcpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoT1BFTik7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhDTE9TSU5HKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5jbGVhckF1dG9EaXNtaXNzVGltZXJfKCk7XG4gICAgdGhpcy5pc09wZW5fID0gdHJ1ZTtcbiAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeU9wZW5pbmcoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKENMT1NJTkcpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoT1BFTklORyk7XG4gICAgdGhpcy5hZGFwdGVyXy5hbm5vdW5jZSgpO1xuXG4gICAgLy8gV2FpdCBhIGZyYW1lIG9uY2UgZGlzcGxheSBpcyBubyBsb25nZXIgXCJub25lXCIsIHRvIGVzdGFibGlzaCBiYXNpcyBmb3IgYW5pbWF0aW9uXG4gICAgdGhpcy5ydW5OZXh0QW5pbWF0aW9uRnJhbWVfKCgpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoT1BFTik7XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5T3BlbmVkKCk7XG4gICAgICAgIHRoaXMuYXV0b0Rpc21pc3NUaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsb3NlKFJFQVNPTl9ESVNNSVNTKTtcbiAgICAgICAgfSwgdGhpcy5nZXRUaW1lb3V0TXMoKSk7XG4gICAgICB9LCBudW1iZXJzLlNOQUNLQkFSX0FOSU1BVElPTl9PUEVOX1RJTUVfTVMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gcmVhc29uIFdoeSB0aGUgc25hY2tiYXIgd2FzIGNsb3NlZC4gVmFsdWUgd2lsbCBiZSBwYXNzZWQgdG8gQ0xPU0lOR19FVkVOVCBhbmQgQ0xPU0VEX0VWRU5UIHZpYSB0aGVcbiAgICogICAgIGBldmVudC5kZXRhaWwucmVhc29uYCBwcm9wZXJ0eS4gU3RhbmRhcmQgdmFsdWVzIGFyZSBSRUFTT05fQUNUSU9OIGFuZCBSRUFTT05fRElTTUlTUywgYnV0IGN1c3RvbVxuICAgKiAgICAgY2xpZW50LXNwZWNpZmljIHZhbHVlcyBtYXkgYWxzbyBiZSB1c2VkIGlmIGRlc2lyZWQuXG4gICAqL1xuICBjbG9zZShyZWFzb24gPSAnJykge1xuICAgIGlmICghdGhpcy5pc09wZW5fKSB7XG4gICAgICAvLyBBdm9pZCByZWR1bmRhbnQgY2xvc2UgY2FsbHMgKGFuZCBldmVudHMpLCBlLmcuIHJlcGVhdGVkIGludGVyYWN0aW9ucyBhcyB0aGUgc25hY2tiYXIgaXMgYW5pbWF0aW5nIGNsb3NlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWVfKTtcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IDA7XG4gICAgdGhpcy5jbGVhckF1dG9EaXNtaXNzVGltZXJfKCk7XG5cbiAgICB0aGlzLmlzT3Blbl8gPSBmYWxzZTtcbiAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUNsb3NpbmcocmVhc29uKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQ0xPU0lORyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLk9QRU4pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOSU5HKTtcblxuICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgdGhpcy5hbmltYXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfKCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUNsb3NlZChyZWFzb24pO1xuICAgIH0sIG51bWJlcnMuU05BQ0tCQVJfQU5JTUFUSU9OX0NMT1NFX1RJTUVfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRUaW1lb3V0TXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0b0Rpc21pc3NUaW1lb3V0TXNfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0TXNcbiAgICovXG4gIHNldFRpbWVvdXRNcyh0aW1lb3V0TXMpIHtcbiAgICAvLyBVc2Ugc2hvcnRlciB2YXJpYWJsZSBuYW1lcyB0byBtYWtlIHRoZSBjb2RlIG1vcmUgcmVhZGFibGVcbiAgICBjb25zdCBtaW5WYWx1ZSA9IG51bWJlcnMuTUlOX0FVVE9fRElTTUlTU19USU1FT1VUX01TO1xuICAgIGNvbnN0IG1heFZhbHVlID0gbnVtYmVycy5NQVhfQVVUT19ESVNNSVNTX1RJTUVPVVRfTVM7XG5cbiAgICBpZiAodGltZW91dE1zIDw9IG1heFZhbHVlICYmIHRpbWVvdXRNcyA+PSBtaW5WYWx1ZSkge1xuICAgICAgdGhpcy5hdXRvRGlzbWlzc1RpbWVvdXRNc18gPSB0aW1lb3V0TXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdGltZW91dE1zIG11c3QgYmUgYW4gaW50ZWdlciBpbiB0aGUgcmFuZ2UgJHttaW5WYWx1ZX3igJMke21heFZhbHVlfSwgYnV0IGdvdCAnJHt0aW1lb3V0TXN9J2ApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZ2V0Q2xvc2VPbkVzY2FwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9zZU9uRXNjYXBlXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNsb3NlT25Fc2NhcGVcbiAgICovXG4gIHNldENsb3NlT25Fc2NhcGUoY2xvc2VPbkVzY2FwZSkge1xuICAgIHRoaXMuY2xvc2VPbkVzY2FwZV8gPSBjbG9zZU9uRXNjYXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUtleWJvYXJkRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlS2V5RG93bihldnQpIHtcbiAgICBpZiAodGhpcy5nZXRDbG9zZU9uRXNjYXBlKCkgJiYgKGV2dC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2dC5rZXlDb2RlID09PSAyNykpIHtcbiAgICAgIHRoaXMuY2xvc2UoUkVBU09OX0RJU01JU1MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNb3VzZUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZUFjdGlvbkJ1dHRvbkNsaWNrKGV2dCkge1xuICAgIHRoaXMuY2xvc2UoUkVBU09OX0FDVElPTik7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTW91c2VFdmVudH0gZXZ0XG4gICAqL1xuICBoYW5kbGVBY3Rpb25JY29uQ2xpY2soZXZ0KSB7XG4gICAgdGhpcy5jbG9zZShSRUFTT05fRElTTUlTUyk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgY2xlYXJBdXRvRGlzbWlzc1RpbWVyXygpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5hdXRvRGlzbWlzc1RpbWVyXyk7XG4gICAgdGhpcy5hdXRvRGlzbWlzc1RpbWVyXyA9IDA7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gMDtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuT1BFTklORyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkNMT1NJTkcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgdGhlIGdpdmVuIGxvZ2ljIG9uIHRoZSBuZXh0IGFuaW1hdGlvbiBmcmFtZSwgdXNpbmcgc2V0VGltZW91dCB0byBmYWN0b3IgaW4gRmlyZWZveCByZWZsb3cgYmVoYXZpb3IuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBydW5OZXh0QW5pbWF0aW9uRnJhbWVfKGNhbGxiYWNrKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZV8pO1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1NuYWNrYmFyRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIG5vUHJlZml4OiBzdHJpbmcsXG4gKiAgIHdlYmtpdFByZWZpeDogc3RyaW5nLFxuICogICBzdHlsZVByb3BlcnR5OiBzdHJpbmdcbiAqIH19XG4gKi9cbmxldCBWZW5kb3JQcm9wZXJ0eU1hcFR5cGU7XG5cbi8qKiBAY29uc3Qge09iamVjdDxzdHJpbmcsICFWZW5kb3JQcm9wZXJ0eU1hcFR5cGU+fSAqL1xuY29uc3QgZXZlbnRUeXBlTWFwID0ge1xuICAnYW5pbWF0aW9uc3RhcnQnOiB7XG4gICAgbm9QcmVmaXg6ICdhbmltYXRpb25zdGFydCcsXG4gICAgd2Via2l0UHJlZml4OiAnd2Via2l0QW5pbWF0aW9uU3RhcnQnLFxuICAgIHN0eWxlUHJvcGVydHk6ICdhbmltYXRpb24nLFxuICB9LFxuICAnYW5pbWF0aW9uZW5kJzoge1xuICAgIG5vUHJlZml4OiAnYW5pbWF0aW9uZW5kJyxcbiAgICB3ZWJraXRQcmVmaXg6ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgIHN0eWxlUHJvcGVydHk6ICdhbmltYXRpb24nLFxuICB9LFxuICAnYW5pbWF0aW9uaXRlcmF0aW9uJzoge1xuICAgIG5vUHJlZml4OiAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgICB3ZWJraXRQcmVmaXg6ICd3ZWJraXRBbmltYXRpb25JdGVyYXRpb24nLFxuICAgIHN0eWxlUHJvcGVydHk6ICdhbmltYXRpb24nLFxuICB9LFxuICAndHJhbnNpdGlvbmVuZCc6IHtcbiAgICBub1ByZWZpeDogJ3RyYW5zaXRpb25lbmQnLFxuICAgIHdlYmtpdFByZWZpeDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIHN0eWxlUHJvcGVydHk6ICd0cmFuc2l0aW9uJyxcbiAgfSxcbn07XG5cbi8qKiBAY29uc3Qge09iamVjdDxzdHJpbmcsICFWZW5kb3JQcm9wZXJ0eU1hcFR5cGU+fSAqL1xuY29uc3QgY3NzUHJvcGVydHlNYXAgPSB7XG4gICdhbmltYXRpb24nOiB7XG4gICAgbm9QcmVmaXg6ICdhbmltYXRpb24nLFxuICAgIHdlYmtpdFByZWZpeDogJy13ZWJraXQtYW5pbWF0aW9uJyxcbiAgfSxcbiAgJ3RyYW5zZm9ybSc6IHtcbiAgICBub1ByZWZpeDogJ3RyYW5zZm9ybScsXG4gICAgd2Via2l0UHJlZml4OiAnLXdlYmtpdC10cmFuc2Zvcm0nLFxuICB9LFxuICAndHJhbnNpdGlvbic6IHtcbiAgICBub1ByZWZpeDogJ3RyYW5zaXRpb24nLFxuICAgIHdlYmtpdFByZWZpeDogJy13ZWJraXQtdHJhbnNpdGlvbicsXG4gIH0sXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gd2luZG93T2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBoYXNQcm9wZXJTaGFwZSh3aW5kb3dPYmopIHtcbiAgcmV0dXJuICh3aW5kb3dPYmpbJ2RvY3VtZW50J10gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd2luZG93T2JqWydkb2N1bWVudCddWydjcmVhdGVFbGVtZW50J10gPT09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGV2ZW50Rm91bmRJbk1hcHMoZXZlbnRUeXBlKSB7XG4gIHJldHVybiAoZXZlbnRUeXBlIGluIGV2ZW50VHlwZU1hcCB8fCBldmVudFR5cGUgaW4gY3NzUHJvcGVydHlNYXApO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGVcbiAqIEBwYXJhbSB7IU9iamVjdDxzdHJpbmcsICFWZW5kb3JQcm9wZXJ0eU1hcFR5cGU+fSBtYXBcbiAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEphdmFTY3JpcHRFdmVudE5hbWUoZXZlbnRUeXBlLCBtYXAsIGVsKSB7XG4gIHJldHVybiBtYXBbZXZlbnRUeXBlXS5zdHlsZVByb3BlcnR5IGluIGVsLnN0eWxlID8gbWFwW2V2ZW50VHlwZV0ubm9QcmVmaXggOiBtYXBbZXZlbnRUeXBlXS53ZWJraXRQcmVmaXg7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGRldGVybWluZSBicm93c2VyIHByZWZpeCBmb3IgQ1NTMyBhbmltYXRpb24gZXZlbnRzXG4gKiBhbmQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcGFyYW0geyFPYmplY3R9IHdpbmRvd09ialxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRBbmltYXRpb25OYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKSB7XG4gIGlmICghaGFzUHJvcGVyU2hhcGUod2luZG93T2JqKSB8fCAhZXZlbnRGb3VuZEluTWFwcyhldmVudFR5cGUpKSB7XG4gICAgcmV0dXJuIGV2ZW50VHlwZTtcbiAgfVxuXG4gIGNvbnN0IG1hcCA9IC8qKiBAdHlwZSB7IU9iamVjdDxzdHJpbmcsICFWZW5kb3JQcm9wZXJ0eU1hcFR5cGU+fSAqLyAoXG4gICAgZXZlbnRUeXBlIGluIGV2ZW50VHlwZU1hcCA/IGV2ZW50VHlwZU1hcCA6IGNzc1Byb3BlcnR5TWFwXG4gICk7XG4gIGNvbnN0IGVsID0gd2luZG93T2JqWydkb2N1bWVudCddWydjcmVhdGVFbGVtZW50J10oJ2RpdicpO1xuICBsZXQgZXZlbnROYW1lID0gJyc7XG5cbiAgaWYgKG1hcCA9PT0gZXZlbnRUeXBlTWFwKSB7XG4gICAgZXZlbnROYW1lID0gZ2V0SmF2YVNjcmlwdEV2ZW50TmFtZShldmVudFR5cGUsIG1hcCwgZWwpO1xuICB9IGVsc2Uge1xuICAgIGV2ZW50TmFtZSA9IG1hcFtldmVudFR5cGVdLm5vUHJlZml4IGluIGVsLnN0eWxlID8gbWFwW2V2ZW50VHlwZV0ubm9QcmVmaXggOiBtYXBbZXZlbnRUeXBlXS53ZWJraXRQcmVmaXg7XG4gIH1cblxuICByZXR1cm4gZXZlbnROYW1lO1xufVxuXG4vLyBQdWJsaWMgZnVuY3Rpb25zIHRvIGFjY2VzcyBnZXRBbmltYXRpb25OYW1lKCkgZm9yIEphdmFTY3JpcHQgZXZlbnRzIG9yIENTU1xuLy8gcHJvcGVydHkgbmFtZXMuXG5cbmNvbnN0IHRyYW5zZm9ybVN0eWxlUHJvcGVydGllcyA9IFsndHJhbnNmb3JtJywgJ1dlYmtpdFRyYW5zZm9ybScsICdNb3pUcmFuc2Zvcm0nLCAnT1RyYW5zZm9ybScsICdNU1RyYW5zZm9ybSddO1xuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gd2luZG93T2JqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldENvcnJlY3RFdmVudE5hbWUod2luZG93T2JqLCBldmVudFR5cGUpIHtcbiAgcmV0dXJuIGdldEFuaW1hdGlvbk5hbWUod2luZG93T2JqLCBldmVudFR5cGUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gd2luZG93T2JqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldENvcnJlY3RQcm9wZXJ0eU5hbWUod2luZG93T2JqLCBldmVudFR5cGUpIHtcbiAgcmV0dXJuIGdldEFuaW1hdGlvbk5hbWUod2luZG93T2JqLCBldmVudFR5cGUpO1xufVxuXG5leHBvcnQge3RyYW5zZm9ybVN0eWxlUHJvcGVydGllcywgZ2V0Q29ycmVjdEV2ZW50TmFtZSwgZ2V0Q29ycmVjdFByb3BlcnR5TmFtZX07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEEgXCJwb255ZmlsbFwiIGlzIGEgcG9seWZpbGwgdGhhdCBkb2Vzbid0IG1vZGlmeSB0aGUgZ2xvYmFsIHByb3RvdHlwZSBjaGFpbi5cbiAqIFRoaXMgbWFrZXMgcG9ueWZpbGxzIHNhZmVyIHRoYW4gdHJhZGl0aW9uYWwgcG9seWZpbGxzLCBlc3BlY2lhbGx5IGZvciBsaWJyYXJpZXMgbGlrZSBNREMuXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4gez9FbGVtZW50fVxuICovXG5mdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIGlmIChlbGVtZW50LmNsb3Nlc3QpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgfVxuXG4gIGxldCBlbCA9IGVsZW1lbnQ7XG4gIHdoaWxlIChlbCkge1xuICAgIGlmIChtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbWF0Y2hlcyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICBjb25zdCBuYXRpdmVNYXRjaGVzID0gZWxlbWVudC5tYXRjaGVzXG4gICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICB8fCBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cblxuZXhwb3J0IHtjbG9zZXN0LCBtYXRjaGVzfTtcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiByZWY9XCJyb290XCIgOmNsYXNzPVwiY2xhc3Nlc1wiIGNsYXNzPVwibWRjLXNuYWNrYmFyXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1kYy1zbmFja2Jhcl9fc3VyZmFjZVwiIEBjbGljaz1cInN1cmZhY2VDbGlja0hhbmRsZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPVwibGFiZWxFbFwiXG4gICAgICAgIGNsYXNzPVwibWRjLXNuYWNrYmFyX19sYWJlbFwiXG4gICAgICAgIHJvbGU9XCJzdGF0dXNcIlxuICAgICAgICBhcmlhLWxpdmU9XCJwb2xpdGVcIlxuICAgICAgPlxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInNob3dMYWJlbFRleHRcIj5cbiAgICAgICAgICB7eyBsYWJlbFRleHQgfX1cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHNwYW4gc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiAwOyBoZWlnaHQ6IDFweDtcIiB2LWVsc2VcbiAgICAgICAgICA+Jm5ic3A7PC9zcGFuXG4gICAgICAgID5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1kYy1zbmFja2Jhcl9fYWN0aW9uc1wiIHYtaWY9XCJzaG93RGlzbWlzc0FjdGlvbiB8fCBhY3Rpb25UZXh0XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB2LWlmPVwiYWN0aW9uVGV4dFwiXG4gICAgICAgICAgcmVmPVwiYWN0aW9uRWxcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzPVwibWRjLWJ1dHRvbiBtZGMtc25hY2tiYXJfX2FjdGlvblwiXG4gICAgICAgICAgdi1vbj1cIiRsaXN0ZW5lcnNcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgYWN0aW9uVGV4dCB9fVxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJtZGMtaWNvbi1idXR0b24gbWRjLXNuYWNrYmFyX19kaXNtaXNzIG1hdGVyaWFsLWljb25zXCJcbiAgICAgICAgICB0aXRsZT1cIkRpc21pc3NcIlxuICAgICAgICAgIHYtaWY9XCJzaG93RGlzbWlzc0FjdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICBjbG9zZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTURDU25hY2tiYXJGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9zbmFja2Jhci9mb3VuZGF0aW9uJ1xuaW1wb3J0IHsgZ2V0Q29ycmVjdEV2ZW50TmFtZSB9IGZyb20gJ0BtYXRlcmlhbC9hbmltYXRpb24vaW5kZXgnXG5pbXBvcnQgKiBhcyBwb255ZmlsbCBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtc25hY2tiYXInLFxuICBtb2RlbDoge1xuICAgIHByb3A6ICdvcGVuJyxcbiAgICBldmVudDogJ2NoYW5nZSdcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBvcGVuOiBCb29sZWFuLFxuICAgIHN0YWNrZWQ6IEJvb2xlYW4sXG4gICAgbGVhZGluZzogQm9vbGVhbixcbiAgICBsYWJlbFRleHQ6IFN0cmluZyxcbiAgICBhY3Rpb25UZXh0OiBTdHJpbmcsXG4gICAgdGltZW91dE1zOiBbU3RyaW5nLCBOdW1iZXJdLFxuXG4gICAgZGlzbWlzc0FjdGlvbjogeyB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSwgZGVmYXVsdDogdHJ1ZSB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgJ21kYy1zbmFja2Jhci0tbGVhZGluZyc6IHRoaXMubGVhZGluZyxcblxuICAgICAgICAnbWRjLXNuYWNrYmFyLS1zdGFja2VkJzogdGhpcy5zdGFja2VkXG4gICAgICB9LFxuICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgIGFjdGlvbkhpZGRlbjogZmFsc2UsXG4gICAgICBzaG93TGFiZWxUZXh0OiB0cnVlXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIG9wZW46ICdvbk9wZW5fJyxcblxuICAgIHRpbWVvdXRNczogJ29uVGltZW91dE1zXydcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bkV2ZW50KVxuXG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ1NuYWNrYmFyRm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSksXG4gICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGRlbGV0ZSh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSksXG4gICAgICBhbm5vdW5jZTogKCkgPT4gdGhpcy5hbm5vdW5jZSh0aGlzLiRyZWZzLmxhYmVsRWwpLFxuICAgICAgbm90aWZ5T3BlbmluZzogKCkgPT5cbiAgICAgICAgdGhpcy4kZW1pdChNRENTbmFja2JhckZvdW5kYXRpb24uc3RyaW5ncy5PUEVOSU5HX0VWRU5ULCB7fSksXG4gICAgICBub3RpZnlPcGVuZWQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy4kZW1pdChNRENTbmFja2JhckZvdW5kYXRpb24uc3RyaW5ncy5PUEVORURfRVZFTlQsIHt9KVxuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0cnVlKVxuICAgICAgICB0aGlzLiRlbWl0KCdzaG93Jywge30pXG4gICAgICB9LFxuICAgICAgbm90aWZ5Q2xvc2luZzogcmVhc29uID0+XG4gICAgICAgIHRoaXMuJGVtaXQoXG4gICAgICAgICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnN0cmluZ3MuQ0xPU0lOR19FVkVOVCxcbiAgICAgICAgICByZWFzb24gPyB7IHJlYXNvbiB9IDoge31cbiAgICAgICAgKSxcbiAgICAgIG5vdGlmeUNsb3NlZDogcmVhc29uID0+IHtcbiAgICAgICAgdGhpcy4kZW1pdChcbiAgICAgICAgICBNRENTbmFja2JhckZvdW5kYXRpb24uc3RyaW5ncy5DTE9TRURfRVZFTlQsXG4gICAgICAgICAgcmVhc29uID8geyByZWFzb24gfSA6IHt9XG4gICAgICAgIClcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZmFsc2UpXG4gICAgICAgIHRoaXMuJGVtaXQoJ2hpZGUnKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuXG4gICAgaWYgKHRoaXMudGltZW91dE1zICE9PSB2b2lkIDApIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRUaW1lb3V0TXModGhpcy50aW1lb3V0TXMpXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHNob3dEaXNtaXNzQWN0aW9uKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLmRpc21pc3NBY3Rpb24gPT09ICdzdHJpbmcnXG4gICAgICAgID8gdGhpcy5kaXNtaXNzQWN0aW9uICE9ICdmYWxzZSdcbiAgICAgICAgOiB0aGlzLmRpc21pc3NBY3Rpb25cbiAgICB9XG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25FdmVudClcbiAgICB0aGlzLmZvdW5kYXRpb24uZGVzdHJveSgpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblRpbWVvdXRNc18odmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRUaW1lb3V0TXModmFsdWUpXG4gICAgICB9XG4gICAgfSxcbiAgICBvbk9wZW5fKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLm9wZW4oKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmNsb3NlKClcbiAgICAgIH1cbiAgICB9LFxuICAgIHN1cmZhY2VDbGlja0hhbmRsZXIoZXZ0KSB7XG4gICAgICBpZiAodGhpcy5pc0FjdGlvbkJ1dHRvbl8oZXZ0LnRhcmdldCkpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUFjdGlvbkJ1dHRvbkNsaWNrKGV2dClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FjdGlvbkljb25fKGV2dC50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVBY3Rpb25JY29uQ2xpY2soZXZ0KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVLZXlkb3duRXZlbnQoZXZ0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlS2V5RG93bihldnQpXG4gICAgfSxcblxuICAgIGlzQWN0aW9uQnV0dG9uXyh0YXJnZXQpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgICBwb255ZmlsbC5jbG9zZXN0KHRhcmdldCwgTURDU25hY2tiYXJGb3VuZGF0aW9uLnN0cmluZ3MuQUNUSU9OX1NFTEVDVE9SKVxuICAgICAgKVxuICAgIH0sXG5cbiAgICBpc0FjdGlvbkljb25fKHRhcmdldCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oXG4gICAgICAgIHBvbnlmaWxsLmNsb3Nlc3QodGFyZ2V0LCBNRENTbmFja2JhckZvdW5kYXRpb24uc3RyaW5ncy5ESVNNSVNTX1NFTEVDVE9SKVxuICAgICAgKVxuICAgIH0sXG5cbiAgICBhbm5vdW5jZShhcmlhRWwsIGxhYmVsRWwgPSBhcmlhRWwpIHtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gYXJpYUVsLmdldEF0dHJpYnV0ZSgnYXJpYS1saXZlJylcblxuICAgICAgY29uc3QgdGV4dCA9IHRoaXMubGFiZWxUZXh0XG4gICAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFRlbXBvcmFyaWx5IGRpc2FibGUgYGFyaWEtbGl2ZWAgdG8gcHJldmVudCBKQVdTK0ZpcmVmb3ggZnJvbSBhbm5vdW5jaW5nIHRoZSBtZXNzYWdlIHR3aWNlLlxuICAgICAgYXJpYUVsLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ29mZicpXG5cbiAgICAgIC8vIFRlbXBvcmFyaWx5IGNsZWFyIGB0ZXh0Q29udGVudGAgdG8gZm9yY2UgYSBET00gbXV0YXRpb24gZXZlbnQgdGhhdCB3aWxsIGJlIGRldGVjdGVkIGJ5IHNjcmVlbiByZWFkZXJzLlxuICAgICAgLy8gYGFyaWEtbGl2ZWAgZWxlbWVudHMgYXJlIG9ubHkgYW5ub3VuY2VkIHdoZW4gdGhlIGVsZW1lbnQncyBgdGV4dENvbnRlbnRgICpjaGFuZ2VzKiwgc28gc25hY2tiYXJzXG4gICAgICAvLyBzZW50IHRvIHRoZSBicm93c2VyIGluIHRoZSBpbml0aWFsIEhUTUwgcmVzcG9uc2Ugd29uJ3QgYmUgcmVhZCB1bmxlc3Mgd2UgY2xlYXIgdGhlIGVsZW1lbnQncyBgdGV4dENvbnRlbnRgIGZpcnN0LlxuICAgICAgLy8gU2ltaWxhcmx5LCBkaXNwbGF5aW5nIHRoZSBzYW1lIHNuYWNrYmFyIG1lc3NhZ2UgdHdpY2UgaW4gYSByb3cgZG9lc24ndCB0cmlnZ2VyIGEgRE9NIG11dGF0aW9uIGV2ZW50LFxuICAgICAgLy8gc28gc2NyZWVuIHJlYWRlcnMgd29uJ3QgYW5ub3VuY2UgdGhlIHNlY29uZCBtZXNzYWdlIHVubGVzcyB3ZSBmaXJzdCBjbGVhciBgdGV4dENvbnRlbnRgLlxuICAgICAgLy9cbiAgICAgIC8vIFdlIGhhdmUgdG8gY2xlYXIgdGhlIGxhYmVsIHRleHQgdHdvIGRpZmZlcmVudCB3YXlzIHRvIG1ha2UgaXQgd29yayBpbiBhbGwgYnJvd3NlcnMgYW5kIHNjcmVlbiByZWFkZXJzOlxuICAgICAgLy9cbiAgICAgIC8vICAgMS4gYHRleHRDb250ZW50ID0gJydgIGlzIHJlcXVpcmVkIGZvciBJRTExICsgSkFXU1xuICAgICAgLy8gICAyLiBgaW5uZXJIVE1MID0gJyZuYnNwOydgIGlzIHJlcXVpcmVkIGZvciBDaHJvbWUgKyBKQVdTIGFuZCBOVkRBXG4gICAgICAvL1xuICAgICAgLy8gQWxsIG90aGVyIGJyb3dzZXIvc2NyZWVuIHJlYWRlciBjb21iaW5hdGlvbnMgc3VwcG9ydCBib3RoIG1ldGhvZHMuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIHdyYXBwZXIgYDxzcGFuPmAgdmlzdWFsbHkgaGlkZXMgdGhlIHNwYWNlIGNoYXJhY3RlciBzbyB0aGF0IGl0IGRvZXNuJ3QgY2F1c2UgamFuayB3aGVuIGFkZGVkL3JlbW92ZWQuXG4gICAgICAvLyBOLkIuOiBTZXR0aW5nIGBwb3NpdGlvbjogYWJzb2x1dGVgLCBgb3BhY2l0eTogMGAsIG9yIGBoZWlnaHQ6IDBgIHByZXZlbnRzIENocm9tZSBmcm9tIGRldGVjdGluZyB0aGUgRE9NIGNoYW5nZS5cbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIHRlY2huaXF1ZSBoYXMgYmVlbiB0ZXN0ZWQgaW46XG4gICAgICAvL1xuICAgICAgLy8gICAqIEpBV1MgMjAxOTpcbiAgICAgIC8vICAgICAgIC0gQ2hyb21lIDcwXG4gICAgICAvLyAgICAgICAtIEZpcmVmb3ggNjAgKEVTUilcbiAgICAgIC8vICAgICAgIC0gSUUgMTFcbiAgICAgIC8vICAgKiBOVkRBIDIwMTg6XG4gICAgICAvLyAgICAgICAtIENocm9tZSA3MFxuICAgICAgLy8gICAgICAgLSBGaXJlZm94IDYwIChFU1IpXG4gICAgICAvLyAgICAgICAtIElFIDExXG4gICAgICAvLyAgICogQ2hyb21lVm94IDUzXG4gICAgICB0aGlzLnNob3dMYWJlbFRleHQgPSBmYWxzZVxuXG4gICAgICAvLyBQcmV2ZW50IHZpc3VhbCBqYW5rIGJ5IHRlbXBvcmFyaWx5IGRpc3BsYXlpbmcgdGhlIGxhYmVsIHRleHQgaW4gdGhlIDo6YmVmb3JlIHBzZXVkby1lbGVtZW50LlxuICAgICAgLy8gQ1NTIGdlbmVyYXRlZCBjb250ZW50IGlzIG5vcm1hbGx5IGFubm91bmNlZCBieSBzY3JlZW4gcmVhZGVyc1xuICAgICAgLy8gKGV4Y2VwdCBpbiBJRSAxMTsgc2VlIGh0dHBzOi8vdGluay51ay9hY2Nlc3NpYmlsaXR5LXN1cHBvcnQtZm9yLWNzcy1nZW5lcmF0ZWQtY29udGVudC8pO1xuICAgICAgLy8gaG93ZXZlciwgYGFyaWEtbGl2ZWAgaXMgdHVybmVkIG9mZiwgc28gdGhpcyBET00gdXBkYXRlIHdpbGwgYmUgaWdub3JlZCBieSBzY3JlZW4gcmVhZGVycy5cbiAgICAgIGxhYmVsRWwuc2V0QXR0cmlidXRlKFxuICAgICAgICBNRENTbmFja2JhckZvdW5kYXRpb24uc3RyaW5ncy5BUklBX0xJVkVfTEFCRUxfVEVYVF9BVFRSLFxuICAgICAgICB0aGlzLmxhYmVsVGV4dFxuICAgICAgKVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gQWxsb3cgc2NyZWVuIHJlYWRlcnMgdG8gYW5ub3VuY2UgY2hhbmdlcyB0byB0aGUgRE9NIGFnYWluLlxuICAgICAgICBhcmlhRWwuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCBwcmlvcml0eSlcblxuICAgICAgICAvLyBSZW1vdmUgdGhlIG1lc3NhZ2UgZnJvbSB0aGUgOjpiZWZvcmUgcHNldWRvLWVsZW1lbnQuXG4gICAgICAgIGxhYmVsRWwucmVtb3ZlQXR0cmlidXRlKFxuICAgICAgICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5zdHJpbmdzLkFSSUFfTElWRV9MQUJFTF9URVhUX0FUVFJcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIGxhYmVsIHRleHQsIHdoaWNoIHdpbGwgYmUgYW5ub3VuY2VkIGJ5IHNjcmVlbiByZWFkZXJzLlxuICAgICAgICB0aGlzLnNob3dMYWJlbFRleHQgPSB0cnVlXG4gICAgICB9LCBNRENTbmFja2JhckZvdW5kYXRpb24ubnVtYmVycy5BUklBX0xJVkVfREVMQVlfTVMpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IG1kY1NuYWNrYmFyIGZyb20gJy4vbWRjLXNuYWNrYmFyLnZ1ZSdcblxuZXhwb3J0IHsgbWRjU25hY2tiYXIgfVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlUGx1Z2luKHtcbiAgbWRjU25hY2tiYXJcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJzY29wZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiTURDRm91bmRhdGlvbiIsImFkYXB0ZXIiLCJhZGFwdGVyXyIsIk1EQ1NuYWNrYmFyQWRhcHRlciIsImNsYXNzTmFtZSIsInJlYXNvbiIsImNzc0NsYXNzZXMiLCJPUEVOSU5HIiwiT1BFTiIsIkNMT1NJTkciLCJzdHJpbmdzIiwiU1VSRkFDRV9TRUxFQ1RPUiIsIkxBQkVMX1NFTEVDVE9SIiwiQUNUSU9OX1NFTEVDVE9SIiwiRElTTUlTU19TRUxFQ1RPUiIsIk9QRU5JTkdfRVZFTlQiLCJPUEVORURfRVZFTlQiLCJDTE9TSU5HX0VWRU5UIiwiQ0xPU0VEX0VWRU5UIiwiUkVBU09OX0FDVElPTiIsIlJFQVNPTl9ESVNNSVNTIiwiQVJJQV9MSVZFX0xBQkVMX1RFWFRfQVRUUiIsIm51bWJlcnMiLCJNSU5fQVVUT19ESVNNSVNTX1RJTUVPVVRfTVMiLCJNQVhfQVVUT19ESVNNSVNTX1RJTUVPVVRfTVMiLCJERUZBVUxUX0FVVE9fRElTTUlTU19USU1FT1VUX01TIiwiU05BQ0tCQVJfQU5JTUFUSU9OX09QRU5fVElNRV9NUyIsIlNOQUNLQkFSX0FOSU1BVElPTl9DTE9TRV9USU1FX01TIiwiQVJJQV9MSVZFX0RFTEFZX01TIiwiTURDU25hY2tiYXJGb3VuZGF0aW9uIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFubm91bmNlIiwibm90aWZ5T3BlbmluZyIsIm5vdGlmeU9wZW5lZCIsIm5vdGlmeUNsb3NpbmciLCJub3RpZnlDbG9zZWQiLCJkZWZhdWx0QWRhcHRlciIsImlzT3Blbl8iLCJhbmltYXRpb25GcmFtZV8iLCJhbmltYXRpb25UaW1lcl8iLCJhdXRvRGlzbWlzc1RpbWVyXyIsImF1dG9EaXNtaXNzVGltZW91dE1zXyIsImNsb3NlT25Fc2NhcGVfIiwiY2xlYXJBdXRvRGlzbWlzc1RpbWVyXyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwicnVuTmV4dEFuaW1hdGlvbkZyYW1lXyIsInNldFRpbWVvdXQiLCJoYW5kbGVBbmltYXRpb25UaW1lckVuZF8iLCJjbG9zZSIsImdldFRpbWVvdXRNcyIsInRpbWVvdXRNcyIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJFcnJvciIsImNsb3NlT25Fc2NhcGUiLCJldnQiLCJnZXRDbG9zZU9uRXNjYXBlIiwia2V5Q29kZSIsImNhbGxiYWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xvc2VzdCIsImVsZW1lbnQiLCJzZWxlY3RvciIsImVsIiwibWF0Y2hlcyIsInBhcmVudEVsZW1lbnQiLCJuYXRpdmVNYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJjYWxsIiwibWRjU25hY2tiYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtFQUMvQjtFQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztFQUNBLE1BQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztFQUNqQ0QsSUFBQUEsSUFBSSxHQUFHQyxNQUFNLENBQUNDLEdBQWQ7RUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0VBQ3hDO0VBQ0FILElBQUFBLElBQUksR0FBR0csTUFBTSxDQUFDRCxHQUFkO0VBQ0Q7O0VBQ0QsTUFBSUYsSUFBSixFQUFVO0VBQ1JBLElBQUFBLElBQUksQ0FBQ0ksR0FBTCxDQUFTTCxNQUFUO0VBQ0Q7RUFDRjs7RUNaTSxTQUFTTSxVQUFULENBQW9CQyxVQUFwQixFQUFnQztFQUNyQyxTQUFPO0VBQ0xDLElBQUFBLE9BQU8sRUFBRSxhQURKO0VBRUxDLElBQUFBLE9BQU8sRUFBRSxpQkFBQUMsRUFBRSxFQUFJO0VBQ2IsV0FBSyxJQUFJQyxHQUFULElBQWdCSixVQUFoQixFQUE0QjtFQUMxQixZQUFJSyxTQUFTLEdBQUdMLFVBQVUsQ0FBQ0ksR0FBRCxDQUExQjtFQUNBRCxRQUFBQSxFQUFFLENBQUNFLFNBQUgsQ0FBYUEsU0FBUyxDQUFDQyxJQUF2QixFQUE2QkQsU0FBN0I7RUFDRDtFQUNGLEtBUEk7RUFRTEwsSUFBQUEsVUFBVSxFQUFWQTtFQVJLLEdBQVA7RUFVRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
