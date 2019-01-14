/**
* @module vue-mdc-adaptercheckbox 0.19.0-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.42.0","material-components-web":"^0.42.1"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

import { RippleBase } from '../ripple';

var supportsPassive_;
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */

function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;

    try {
      globalObj.document.addEventListener('test', null, {
        get passive() {
          isSupported = {
            passive: true
          };
        }

      });
    } catch (e) {//empty
    }

    supportsPassive_ = isSupported;
  }

  return supportsPassive_;
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

var DispatchFocusMixin = {
  data: function data() {
    return {
      hasFocus: false
    };
  },
  methods: {
    onMouseDown: function onMouseDown() {
      this._active = true;
    },
    onMouseUp: function onMouseUp() {
      this._active = false;
    },
    onFocusEvent: function onFocusEvent() {
      var _this = this;

      // dispatch async to let time to other focus event to propagate
      setTimeout(function () {
        return _this.dispatchFocusEvent();
      }, 0);
    },
    onBlurEvent: function onBlurEvent() {
      var _this2 = this;

      // dispatch async to let time to other focus event to propagate
      // also filtur blur if mousedown
      this._active || setTimeout(function () {
        return _this2.dispatchFocusEvent();
      }, 0);
    },
    dispatchFocusEvent: function dispatchFocusEvent() {
      var hasFocus = this.$el === document.activeElement || this.$el.contains(document.activeElement);

      if (hasFocus != this.hasFocus) {
        this.$emit(hasFocus ? 'focus' : 'blur');
        this.hasFocus = hasFocus;
      }
    }
  },
  mounted: function mounted() {
    this.$el.addEventListener('focusin', this.onFocusEvent);
    this.$el.addEventListener('focusout', this.onBlurEvent);
    this.$el.addEventListener('mousedown', this.onMouseDown);
    this.$el.addEventListener('mouseup', this.onMouseUp);
  },
  beforeDestroy: function beforeDestroy() {
    this.$el.removeEventListener('focusin', this.onFocusEvent);
    this.$el.removeEventListener('focusout', this.onBlurEvent);
    this.$el.removeEventListener('mousedown', this.onMouseDown);
    this.$el.removeEventListener('mouseup', this.onMouseUp);
  }
};

var scope = Math.floor(Math.random() * Math.floor(0x10000000)).toString() + '-';
var VMAUniqueIdMixin = {
  beforeCreate: function beforeCreate() {
    this.vma_uid_ = scope + this._uid;
  }
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
var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};
var strings = {
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

      var strings$$1 = MDCRippleFoundation.strings;
      Object.keys(strings$$1).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this8.adapter_.updateCssVariable(strings$$1[k], null);
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

/**
 * @record
 */

var MDCSelectionControl =
/*#__PURE__*/
function () {
  function MDCSelectionControl() {
    _classCallCheck(this, MDCSelectionControl);
  }

  _createClass(MDCSelectionControl, [{
    key: "ripple",

    /** @return {?MDCRipple} */
    get: function get() {}
  }]);

  return MDCSelectionControl;
}();

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Checkbox. Provides an interface for managing
 * - classes
 * - dom
 * - event handlers
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

var MDCCheckboxAdapter =
/*#__PURE__*/
function () {
  function MDCCheckboxAdapter() {
    _classCallCheck(this, MDCCheckboxAdapter);
  }

  _createClass(MDCCheckboxAdapter, [{
    key: "addClass",

    /** @param {string} className */
    value: function addClass(className) {}
    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}
    /**
     * Sets an attribute with a given value on the input element.
     * @param {string} attr
     * @param {string} value
     */

  }, {
    key: "setNativeControlAttr",
    value: function setNativeControlAttr(attr, value) {}
    /**
     * Removes an attribute from the input element.
     * @param {string} attr
     */

  }, {
    key: "removeNativeControlAttr",
    value: function removeNativeControlAttr(attr) {}
  }, {
    key: "forceLayout",
    value: function forceLayout() {}
    /** @return {boolean} */

  }, {
    key: "isAttachedToDOM",
    value: function isAttachedToDOM() {}
    /** @return {boolean} */

  }, {
    key: "isIndeterminate",
    value: function isIndeterminate() {}
    /** @return {boolean} */

  }, {
    key: "isChecked",
    value: function isChecked() {}
    /** @return {boolean} */

  }, {
    key: "hasNativeControl",
    value: function hasNativeControl() {}
    /** @param {boolean} disabled */

  }, {
    key: "setNativeControlDisabled",
    value: function setNativeControlDisabled(disabled) {}
  }]);

  return MDCCheckboxAdapter;
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

/** @const {string} */
var ROOT = 'mdc-checkbox';
/** @enum {string} */

var cssClasses$1 = {
  UPGRADED: 'mdc-checkbox--upgraded',
  CHECKED: 'mdc-checkbox--checked',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  DISABLED: 'mdc-checkbox--disabled',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked'
};
/** @enum {string} */

var strings$1 = {
  NATIVE_CONTROL_SELECTOR: ".".concat(ROOT, "__native-control"),
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_UNCHECKED: 'unchecked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate',
  ARIA_CHECKED_ATTR: 'aria-checked',
  ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed'
};
/** @enum {number} */

var numbers$1 = {
  ANIM_END_LATCH_MS: 250
};

/**
 * @extends {MDCFoundation<!MDCCheckboxAdapter>}
 */

var MDCCheckboxFoundation =
/*#__PURE__*/
function (_MDCFoundation) {
  _inherits(MDCCheckboxFoundation, _MDCFoundation);

  _createClass(MDCCheckboxFoundation, null, [{
    key: "cssClasses",

    /** @return enum {cssClasses} */
    get: function get() {
      return cssClasses$1;
    }
    /** @return enum {strings} */

  }, {
    key: "strings",
    get: function get() {
      return strings$1;
    }
    /** @return enum {numbers} */

  }, {
    key: "numbers",
    get: function get() {
      return numbers$1;
    }
    /** @return {!MDCCheckboxAdapter} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      return (
        /** @type {!MDCCheckboxAdapter} */
        {
          addClass: function addClass()
          /* className: string */
          {},
          removeClass: function removeClass()
          /* className: string */
          {},
          setNativeControlAttr: function setNativeControlAttr()
          /* attr: string, value: string */
          {},
          removeNativeControlAttr: function removeNativeControlAttr()
          /* attr: string */
          {},
          forceLayout: function forceLayout() {},
          isAttachedToDOM: function isAttachedToDOM()
          /* boolean */
          {},
          isIndeterminate: function isIndeterminate()
          /* boolean */
          {},
          isChecked: function isChecked()
          /* boolean */
          {},
          hasNativeControl: function hasNativeControl()
          /* boolean */
          {},
          setNativeControlDisabled: function setNativeControlDisabled()
          /* disabled: boolean */
          {}
        }
      );
    }
  }]);

  function MDCCheckboxFoundation(adapter) {
    var _this;

    _classCallCheck(this, MDCCheckboxFoundation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCCheckboxFoundation).call(this, _extends(MDCCheckboxFoundation.defaultAdapter, adapter)));
    /** @private {string} */

    _this.currentCheckState_ = strings$1.TRANSITION_STATE_INIT;
    /** @private {string} */

    _this.currentAnimationClass_ = '';
    /** @private {number} */

    _this.animEndLatchTimer_ = 0;
    /** @private {boolean} */

    _this.enableAnimationEndHandler_ = false;
    return _this;
  }
  /** @override */


  _createClass(MDCCheckboxFoundation, [{
    key: "init",
    value: function init() {
      this.currentCheckState_ = this.determineCheckState_();
      this.updateAriaChecked_();
      this.adapter_.addClass(cssClasses$1.UPGRADED);
    }
    /** @override */

  }, {
    key: "destroy",
    value: function destroy() {
      clearTimeout(this.animEndLatchTimer_);
    }
    /** @param {boolean} disabled */

  }, {
    key: "setDisabled",
    value: function setDisabled(disabled) {
      this.adapter_.setNativeControlDisabled(disabled);

      if (disabled) {
        this.adapter_.addClass(cssClasses$1.DISABLED);
      } else {
        this.adapter_.removeClass(cssClasses$1.DISABLED);
      }
    }
    /**
     * Handles the animationend event for the checkbox
     */

  }, {
    key: "handleAnimationEnd",
    value: function handleAnimationEnd() {
      var _this2 = this;

      if (!this.enableAnimationEndHandler_) return;
      clearTimeout(this.animEndLatchTimer_);
      this.animEndLatchTimer_ = setTimeout(function () {
        _this2.adapter_.removeClass(_this2.currentAnimationClass_);

        _this2.enableAnimationEndHandler_ = false;
      }, numbers$1.ANIM_END_LATCH_MS);
    }
    /**
     * Handles the change event for the checkbox
     */

  }, {
    key: "handleChange",
    value: function handleChange() {
      this.transitionCheckState_();
    }
    /** @private */

  }, {
    key: "transitionCheckState_",
    value: function transitionCheckState_() {
      if (!this.adapter_.hasNativeControl()) {
        return;
      }

      var oldState = this.currentCheckState_;
      var newState = this.determineCheckState_();

      if (oldState === newState) {
        return;
      }

      this.updateAriaChecked_(); // Check to ensure that there isn't a previously existing animation class, in case for example
      // the user interacted with the checkbox before the animation was finished.

      if (this.currentAnimationClass_.length > 0) {
        clearTimeout(this.animEndLatchTimer_);
        this.adapter_.forceLayout();
        this.adapter_.removeClass(this.currentAnimationClass_);
      }

      this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
      this.currentCheckState_ = newState; // Check for parentNode so that animations are only run when the element is attached
      // to the DOM.

      if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
        this.adapter_.addClass(this.currentAnimationClass_);
        this.enableAnimationEndHandler_ = true;
      }
    }
    /**
     * @return {string}
     * @private
     */

  }, {
    key: "determineCheckState_",
    value: function determineCheckState_() {
      var TRANSITION_STATE_INDETERMINATE = strings$1.TRANSITION_STATE_INDETERMINATE,
          TRANSITION_STATE_CHECKED = strings$1.TRANSITION_STATE_CHECKED,
          TRANSITION_STATE_UNCHECKED = strings$1.TRANSITION_STATE_UNCHECKED;

      if (this.adapter_.isIndeterminate()) {
        return TRANSITION_STATE_INDETERMINATE;
      }

      return this.adapter_.isChecked() ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
    }
    /**
     * @param {string} oldState
     * @param {string} newState
     * @return {string}
     */

  }, {
    key: "getTransitionAnimationClass_",
    value: function getTransitionAnimationClass_(oldState, newState) {
      var TRANSITION_STATE_INIT = strings$1.TRANSITION_STATE_INIT,
          TRANSITION_STATE_CHECKED = strings$1.TRANSITION_STATE_CHECKED,
          TRANSITION_STATE_UNCHECKED = strings$1.TRANSITION_STATE_UNCHECKED;
      var _MDCCheckboxFoundatio = MDCCheckboxFoundation.cssClasses,
          ANIM_UNCHECKED_CHECKED = _MDCCheckboxFoundatio.ANIM_UNCHECKED_CHECKED,
          ANIM_UNCHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_UNCHECKED_INDETERMINATE,
          ANIM_CHECKED_UNCHECKED = _MDCCheckboxFoundatio.ANIM_CHECKED_UNCHECKED,
          ANIM_CHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_CHECKED_INDETERMINATE,
          ANIM_INDETERMINATE_CHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_CHECKED,
          ANIM_INDETERMINATE_UNCHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_UNCHECKED;

      switch (oldState) {
        case TRANSITION_STATE_INIT:
          if (newState === TRANSITION_STATE_UNCHECKED) {
            return '';
          }

        // fallthrough

        case TRANSITION_STATE_UNCHECKED:
          return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;

        case TRANSITION_STATE_CHECKED:
          return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
        // TRANSITION_STATE_INDETERMINATE

        default:
          return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
      }
    }
  }, {
    key: "updateAriaChecked_",
    value: function updateAriaChecked_() {
      // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
      if (this.adapter_.isIndeterminate()) {
        this.adapter_.setNativeControlAttr(strings$1.ARIA_CHECKED_ATTR, strings$1.ARIA_CHECKED_INDETERMINATE_VALUE);
      } else {
        // The on/off state does not need to keep track of aria-checked, since
        // the screenreader uses the checked property on the checkbox element.
        this.adapter_.removeNativeControlAttr(strings$1.ARIA_CHECKED_ATTR);
      }
    }
  }]);

  return MDCCheckboxFoundation;
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

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Form Field. Provides an interface for managing
 * - event handlers
 * - ripple activation
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
var MDCFormFieldAdapter =
/*#__PURE__*/
function () {
  function MDCFormFieldAdapter() {
    _classCallCheck(this, MDCFormFieldAdapter);
  }

  _createClass(MDCFormFieldAdapter, [{
    key: "registerInteractionHandler",

    /**
     * @param {string} type
     * @param {!EventListener} handler
     */
    value: function registerInteractionHandler(type, handler) {}
    /**
     * @param {string} type
     * @param {!EventListener} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(type, handler) {}
  }, {
    key: "activateInputRipple",
    value: function activateInputRipple() {}
  }, {
    key: "deactivateInputRipple",
    value: function deactivateInputRipple() {}
  }]);

  return MDCFormFieldAdapter;
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

/** @enum {string} */
var cssClasses$2 = {
  ROOT: 'mdc-form-field'
};
/** @enum {string} */

var strings$2 = {
  LABEL_SELECTOR: '.mdc-form-field > label'
};

/**
 * @extends {MDCFoundation<!MDCFormFieldAdapter>}
 */

var MDCFormFieldFoundation =
/*#__PURE__*/
function (_MDCFoundation) {
  _inherits(MDCFormFieldFoundation, _MDCFoundation);

  _createClass(MDCFormFieldFoundation, null, [{
    key: "cssClasses",

    /** @return enum {cssClasses} */
    get: function get() {
      return cssClasses$2;
    }
    /** @return enum {strings} */

  }, {
    key: "strings",
    get: function get() {
      return strings$2;
    }
    /** @return {!MDCFormFieldAdapter} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      return {
        registerInteractionHandler: function registerInteractionHandler()
        /* type: string, handler: EventListener */
        {},
        deregisterInteractionHandler: function deregisterInteractionHandler()
        /* type: string, handler: EventListener */
        {},
        activateInputRipple: function activateInputRipple() {},
        deactivateInputRipple: function deactivateInputRipple() {}
      };
    }
  }]);

  function MDCFormFieldFoundation(adapter) {
    var _this;

    _classCallCheck(this, MDCFormFieldFoundation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCFormFieldFoundation).call(this, _extends(MDCFormFieldFoundation.defaultAdapter, adapter)));
    /** @private {!EventListener} */

    _this.clickHandler_ =
    /** @type {!EventListener} */
    function () {
      return _this.handleClick_();
    };

    return _this;
  }

  _createClass(MDCFormFieldFoundation, [{
    key: "init",
    value: function init() {
      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    }
    /** @private */

  }, {
    key: "handleClick_",
    value: function handleClick_() {
      var _this2 = this;

      this.adapter_.activateInputRipple();
      requestAnimationFrame(function () {
        return _this2.adapter_.deactivateInputRipple();
      });
    }
  }]);

  return MDCFormFieldFoundation;
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
var CB_PROTO_PROPS = ['checked', 'indeterminate'];
var script = {
  name: 'mdc-checkbox',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: [Boolean, Array],
    indeterminate: Boolean,
    disabled: Boolean,
    label: String,
    'align-end': Boolean,
    value: {
      type: [String, Number],
      default: function _default() {
        return 'on';
      }
    },
    name: String
  },
  data: function data() {
    return {
      styles: {},
      classes: {}
    };
  },
  computed: {
    hasLabel: function hasLabel() {
      return this.label || this.$slots.default;
    },
    formFieldClasses: function formFieldClasses() {
      return {
        'mdc-form-field': this.hasLabel,
        'mdc-form-field--align-end': this.hasLabel && this.alignEnd
      };
    }
  },
  watch: {
    checked: 'setChecked',
    disabled: function disabled(value) {
      this.foundation.setDisabled(value);
    },
    indeterminate: function indeterminate(value) {
      this.setIndeterminate(value);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCCheckboxFoundation({
      addClass: function addClass(className) {
        return _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      setNativeControlAttr: function setNativeControlAttr(attr, value) {
        _this.$refs.control.setAttribute(attr, value);
      },
      removeNativeControlAttr: function removeNativeControlAttr(attr) {
        _this.$refs.control.removeAttribute(attr);
      },
      // getNativeControl: () => this.$refs.control,
      isIndeterminate: function isIndeterminate() {
        return _this.$refs.control.indeterminate;
      },
      isChecked: function isChecked() {
        return _this.checked;
      },
      hasNativeControl: function hasNativeControl() {
        return !!_this.$refs.control;
      },
      setNativeControlDisabled: function setNativeControlDisabled(disabled) {
        return _this.$refs.control.disabled = disabled;
      },
      forceLayout: function forceLayout() {
        return _this.$refs.root.offsetWidth;
      },
      isAttachedToDOM: function isAttachedToDOM() {
        return Boolean(_this.$el.parentNode);
      }
    });

    this.handleAnimationEnd_ = function () {
      return _this.foundation.handleAnimationEnd();
    };

    this.$el.addEventListener(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
    this.installPropertyChangeHooks_();
    this.ripple = new RippleBase(this, {
      isUnbounded: function isUnbounded() {
        return true;
      },
      isSurfaceActive: function isSurfaceActive() {
        return RippleBase.isSurfaceActive(_this.$refs.control);
      },
      registerInteractionHandler: function registerInteractionHandler(evt, handler) {
        _this.$refs.control.addEventListener(evt, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
        _this.$refs.control.removeEventListener(evt, handler, applyPassive());
      },
      computeBoundingRect: function computeBoundingRect() {
        return _this.$refs.root.getBoundingClientRect();
      }
    });
    this.formField = new MDCFormFieldFoundation({
      registerInteractionHandler: function registerInteractionHandler(type, handler) {
        _this.$refs.label.addEventListener(type, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
        _this.$refs.label.removeEventListener(type, handler);
      },
      activateInputRipple: function activateInputRipple() {
        _this.ripple && _this.ripple.activate();
      },
      deactivateInputRipple: function deactivateInputRipple() {
        _this.ripple && _this.ripple.deactivate();
      }
    });
    this.foundation.init();
    this.ripple.init();
    this.formField.init();
    this.setChecked(this.checked);
    this.foundation.setDisabled(this.disabled);
    this.setIndeterminate(this.indeterminate);
  },
  beforeDestroy: function beforeDestroy() {
    this.$el.removeEventListener(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
    this.formField.destroy();
    this.ripple.destroy();
    this.uninstallPropertyChangeHooks_();
    this.foundation.destroy();
  },
  methods: {
    setChecked: function setChecked(checked) {
      this.$refs.control.checked = Array.isArray(checked) ? checked.indexOf(this.value) > -1 : checked;
    },
    setIndeterminate: function setIndeterminate(indeterminate) {
      this.$refs.control.indeterminate = indeterminate;
    },
    onChange: function onChange() {
      this.$emit('update:indeterminate', this.indeterminate);
      var isChecked = this.$refs.control.checked;

      if (Array.isArray(this.checked)) {
        var idx = this.checked.indexOf(this.value);

        if (isChecked) {
          idx < 0 && this.$emit('change', this.checked.concat(this.value));
        } else {
          idx > -1 && this.$emit('change', this.checked.slice(0, idx).concat(this.checked.slice(idx + 1)));
        }
      } else {
        this.$emit('change', isChecked);
      }
    },
    installPropertyChangeHooks_: function installPropertyChangeHooks_() {
      var _this2 = this;

      var nativeCb = this.$refs.control;
      var cbProto = Object.getPrototypeOf(nativeCb);
      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc = Object.getOwnPropertyDescriptor(cbProto, controlState); // We have to check for this descriptor, since some browsers (Safari) don't support its return.
        // See: https://bugs.webkit.org/show_bug.cgi?id=49739

        if (validDescriptor(desc)) {
          var nativeCbDesc =
          /** @type {!ObjectPropertyDescriptor} */
          {
            get: desc.get,
            set: function set(state) {
              desc.set.call(nativeCb, state);

              _this2.foundation.handleChange();
            },
            configurable: desc.configurable,
            enumerable: desc.enumerable
          };
          Object.defineProperty(nativeCb, controlState, nativeCbDesc);
        }
      });
    },
    uninstallPropertyChangeHooks_: function uninstallPropertyChangeHooks_() {
      var nativeCb = this.$refs.control;
      var cbProto = Object.getPrototypeOf(nativeCb);
      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc =
        /** @type {!ObjectPropertyDescriptor} */
        Object.getOwnPropertyDescriptor(cbProto, controlState);

        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, desc);
        }
      });
    }
  } // ===
  // Private functions
  // ===

};

function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}

/* script */
            const __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "mdc-checkbox-wrapper", class: _vm.formFieldClasses },
    [
      _c(
        "div",
        {
          ref: "root",
          staticClass: "mdc-checkbox",
          class: _vm.classes,
          style: _vm.styles
        },
        [
          _c("input", {
            ref: "control",
            staticClass: "mdc-checkbox__native-control",
            attrs: { id: _vm.vma_uid_, name: _vm.name, type: "checkbox" },
            domProps: { value: _vm.value },
            on: { change: _vm.onChange }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "mdc-checkbox__background" }, [
            _c(
              "svg",
              {
                staticClass: "mdc-checkbox__checkmark",
                attrs: { viewBox: "0 0 24 24" }
              },
              [
                _c("path", {
                  staticClass: "mdc-checkbox__checkmark-path",
                  attrs: {
                    fill: "none",
                    stroke: "white",
                    d: "M1.73,12.91 8.1,19.28 22.79,4.59"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mdc-checkbox__mixedmark" })
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "label",
        { ref: "label", attrs: { for: _vm.vma_uid_ } },
        [_vm._t("default", [_vm._v(_vm._s(_vm.label))])],
        2
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
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/ddata/extra/vma/components/checkbox/mdc-checkbox.vue";

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
  

  
  var mdcCheckbox = __vue_normalize__(
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
  mdcCheckbox: mdcCheckbox
});

export default index;
export { mdcCheckbox };
//# sourceMappingURL=index.js.map
