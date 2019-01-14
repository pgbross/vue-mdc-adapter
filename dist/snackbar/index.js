/**
* @module vue-mdc-adaptersnackbar 0.19.0-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.42.0","material-components-web":"^0.42.1"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

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

var index = BasePlugin({
  mdcSnackbar: mdcSnackbar
});

export default index;
export { mdcSnackbar };
//# sourceMappingURL=index.js.map
