/**
* @module vue-mdc-adapterslider 0.19.0-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

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
var cssClasses = {
  ACTIVE: 'mdc-slider--active',
  DISABLED: 'mdc-slider--disabled',
  DISCRETE: 'mdc-slider--discrete',
  FOCUS: 'mdc-slider--focus',
  IN_TRANSIT: 'mdc-slider--in-transit',
  IS_DISCRETE: 'mdc-slider--discrete',
  HAS_TRACK_MARKER: 'mdc-slider--display-markers'
};
/** @enum {string} */

var strings = {
  TRACK_SELECTOR: '.mdc-slider__track',
  TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
  LAST_TRACK_MARKER_SELECTOR: '.mdc-slider__track-marker:last-child',
  THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
  PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
  ARIA_VALUEMIN: 'aria-valuemin',
  ARIA_VALUEMAX: 'aria-valuemax',
  ARIA_VALUENOW: 'aria-valuenow',
  ARIA_DISABLED: 'aria-disabled',
  STEP_DATA_ATTR: 'data-step',
  CHANGE_EVENT: 'MDCSlider:change',
  INPUT_EVENT: 'MDCSlider:input'
};
/** @enum {number} */

var numbers = {
  PAGE_FACTOR: 4
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

/* eslint-disable no-unused-vars */

/**
 * Adapter for MDC Slider.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Slider into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCSliderAdapter =
/*#__PURE__*/
function () {
  function MDCSliderAdapter() {
    _classCallCheck(this, MDCSliderAdapter);
  }

  _createClass(MDCSliderAdapter, [{
    key: "hasClass",

    /**
     * Returns true if className exists for the slider Element
     * @param {string} className
     * @return {boolean}
     */
    value: function hasClass(className) {}
    /**
     * Adds a class to the slider Element
     * @param {string} className
     */

  }, {
    key: "addClass",
    value: function addClass(className) {}
    /**
     * Removes a class from the slider Element
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}
    /**
     * Returns a string if attribute name exists on the slider Element,
     * otherwise returns null
     * @param {string} name
     * @return {?string}
     */

  }, {
    key: "getAttribute",
    value: function getAttribute(name) {}
    /**
     * Sets attribute name on slider Element to value
     * @param {string} name
     * @param {string} value
     */

  }, {
    key: "setAttribute",
    value: function setAttribute(name, value) {}
    /**
     * Removes attribute name from slider Element
     * @param {string} name
     */

  }, {
    key: "removeAttribute",
    value: function removeAttribute(name) {}
    /**
     * Returns the bounding client rect for the slider Element
     * @return {?ClientRect}
     */

  }, {
    key: "computeBoundingRect",
    value: function computeBoundingRect() {}
    /**
     * Returns the tab index of the slider Element
     * @return {number}
     */

  }, {
    key: "getTabIndex",
    value: function getTabIndex() {}
    /**
     * Registers an event handler on the root element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(type, handler) {}
    /**
     * Deregisters an event handler on the root element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(type, handler) {}
    /**
     * Registers an event handler on the thumb container element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerThumbContainerInteractionHandler",
    value: function registerThumbContainerInteractionHandler(type, handler) {}
    /**
     * Deregisters an event handler on the thumb container element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterThumbContainerInteractionHandler",
    value: function deregisterThumbContainerInteractionHandler(type, handler) {}
    /**
     * Registers an event handler on the body for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerBodyInteractionHandler",
    value: function registerBodyInteractionHandler(type, handler) {}
    /**
     * Deregisters an event handler on the body for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterBodyInteractionHandler",
    value: function deregisterBodyInteractionHandler(type, handler) {}
    /**
     * Registers an event handler for the window resize event
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerResizeHandler",
    value: function registerResizeHandler(handler) {}
    /**
     * Deregisters an event handler for the window resize event
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterResizeHandler",
    value: function deregisterResizeHandler(handler) {}
    /**
     * Emits a custom event MDCSlider:input from the root
     */

  }, {
    key: "notifyInput",
    value: function notifyInput() {}
    /**
     * Emits a custom event MDCSlider:change from the root
     */

  }, {
    key: "notifyChange",
    value: function notifyChange() {}
    /**
     * Sets a style property of the thumb container element to the passed value
     * @param {string} propertyName
     * @param {string} value
     */

  }, {
    key: "setThumbContainerStyleProperty",
    value: function setThumbContainerStyleProperty(propertyName, value) {}
    /**
     * Sets a style property of the track element to the passed value
     * @param {string} propertyName
     * @param {string} value
     */

  }, {
    key: "setTrackStyleProperty",
    value: function setTrackStyleProperty(propertyName, value) {}
    /**
     * Sets the inner text of the pin marker to the passed value
     * @param {number} value
     */

  }, {
    key: "setMarkerValue",
    value: function setMarkerValue(value) {}
    /**
     * Appends the passed number of track markers to the track mark container element
     * @param {number} numMarkers
     */

  }, {
    key: "appendTrackMarkers",
    value: function appendTrackMarkers(numMarkers) {}
    /**
     * Removes all track markers fromt he track mark container element
     */

  }, {
    key: "removeTrackMarkers",
    value: function removeTrackMarkers() {}
    /**
     * Sets a style property of the last track marker to the passed value
     * @param {string} propertyName
     * @param {string} value
     */

  }, {
    key: "setLastTrackMarkersStyleProperty",
    value: function setLastTrackMarkersStyleProperty(propertyName, value) {}
    /**
     * Returns true if the root element is RTL, otherwise false
     * @return {boolean}
     */

  }, {
    key: "isRTL",
    value: function isRTL() {}
  }]);

  return MDCSliderAdapter;
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
/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */


function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
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

/** @enum {string} */

var KEY_IDS = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  HOME: 'Home',
  END: 'End',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown'
};
/** @enum {string} */

var MOVE_EVENT_MAP = {
  'mousedown': 'mousemove',
  'touchstart': 'touchmove',
  'pointerdown': 'pointermove'
};
var DOWN_EVENTS = ['mousedown', 'pointerdown', 'touchstart'];
var UP_EVENTS = ['mouseup', 'pointerup', 'touchend'];
/**
 * @extends {MDCFoundation<!MDCSliderAdapter>}
 */

var MDCSliderFoundation =
/*#__PURE__*/
function (_MDCFoundation) {
  _inherits(MDCSliderFoundation, _MDCFoundation);

  _createClass(MDCSliderFoundation, null, [{
    key: "cssClasses",

    /** @return enum {cssClasses} */
    get: function get() {
      return cssClasses;
    }
    /** @return enum {strings} */

  }, {
    key: "strings",
    get: function get() {
      return strings;
    }
    /** @return enum {numbers} */

  }, {
    key: "numbers",
    get: function get() {
      return numbers;
    }
    /** @return {!MDCSliderAdapter} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      return (
        /** @type {!MDCSliderAdapter} */
        {
          hasClass: function hasClass() {
            return (
              /* className: string */

              /* boolean */
              false
            );
          },
          addClass: function addClass()
          /* className: string */
          {},
          removeClass: function removeClass()
          /* className: string */
          {},
          getAttribute: function getAttribute() {
            return (
              /* name: string */

              /* string|null */
              null
            );
          },
          setAttribute: function setAttribute()
          /* name: string, value: string */
          {},
          removeAttribute: function removeAttribute()
          /* name: string */
          {},
          computeBoundingRect: function computeBoundingRect() {
            return (
              /* ClientRect */
              {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0
              }
            );
          },
          getTabIndex: function getTabIndex() {
            return (
              /* number */
              0
            );
          },
          registerInteractionHandler: function registerInteractionHandler()
          /* type: string, handler: EventListener */
          {},
          deregisterInteractionHandler: function deregisterInteractionHandler()
          /* type: string, handler: EventListener */
          {},
          registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler()
          /* type: string, handler: EventListener */
          {},
          deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler()
          /* type: string, handler: EventListener */
          {},
          registerBodyInteractionHandler: function registerBodyInteractionHandler()
          /* type: string, handler: EventListener */
          {},
          deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler()
          /* type: string, handler: EventListener */
          {},
          registerResizeHandler: function registerResizeHandler()
          /* handler: EventListener */
          {},
          deregisterResizeHandler: function deregisterResizeHandler()
          /* handler: EventListener */
          {},
          notifyInput: function notifyInput() {},
          notifyChange: function notifyChange() {},
          setThumbContainerStyleProperty: function setThumbContainerStyleProperty()
          /* propertyName: string, value: string */
          {},
          setTrackStyleProperty: function setTrackStyleProperty()
          /* propertyName: string, value: string */
          {},
          setMarkerValue: function setMarkerValue()
          /* value: number */
          {},
          appendTrackMarkers: function appendTrackMarkers()
          /* numMarkers: number */
          {},
          removeTrackMarkers: function removeTrackMarkers() {},
          setLastTrackMarkersStyleProperty: function setLastTrackMarkersStyleProperty()
          /* propertyName: string, value: string */
          {},
          isRTL: function isRTL() {
            return (
              /* boolean */
              false
            );
          }
        }
      );
    }
    /**
     * Creates a new instance of MDCSliderFoundation
     * @param {?MDCSliderAdapter} adapter
     */

  }]);

  function MDCSliderFoundation(adapter) {
    var _this;

    _classCallCheck(this, MDCSliderFoundation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCSliderFoundation).call(this, _extends(MDCSliderFoundation.defaultAdapter, adapter)));
    /** @private {?ClientRect} */

    _this.rect_ = null; // We set this to NaN since we want it to be a number, but we can't use '0' or '-1'
    // because those could be valid tabindices set by the client code.

    _this.savedTabIndex_ = NaN;
    _this.active_ = false;
    _this.inTransit_ = false;
    _this.isDiscrete_ = false;
    _this.hasTrackMarker_ = false;
    _this.handlingThumbTargetEvt_ = false;
    _this.min_ = 0;
    _this.max_ = 100;
    _this.step_ = 0;
    _this.value_ = 0;
    _this.disabled_ = false;
    _this.preventFocusState_ = false;
    _this.updateUIFrame_ = 0;

    _this.thumbContainerPointerHandler_ = function () {
      _this.handlingThumbTargetEvt_ = true;
    };

    _this.interactionStartHandler_ = function (evt) {
      return _this.handleDown_(evt);
    };

    _this.keydownHandler_ = function (evt) {
      return _this.handleKeydown_(evt);
    };

    _this.focusHandler_ = function () {
      return _this.handleFocus_();
    };

    _this.blurHandler_ = function () {
      return _this.handleBlur_();
    };

    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    return _this;
  }

  _createClass(MDCSliderFoundation, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.isDiscrete_ = this.adapter_.hasClass(cssClasses.IS_DISCRETE);
      this.hasTrackMarker_ = this.adapter_.hasClass(cssClasses.HAS_TRACK_MARKER);
      DOWN_EVENTS.forEach(function (evtName) {
        return _this2.adapter_.registerInteractionHandler(evtName, _this2.interactionStartHandler_);
      });
      this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
      this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
      DOWN_EVENTS.forEach(function (evtName) {
        _this2.adapter_.registerThumbContainerInteractionHandler(evtName, _this2.thumbContainerPointerHandler_);
      });
      this.adapter_.registerResizeHandler(this.resizeHandler_);
      this.layout(); // At last step, provide a reasonable default value to discrete slider

      if (this.isDiscrete_ && this.getStep() == 0) {
        this.step_ = 1;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this3 = this;

      DOWN_EVENTS.forEach(function (evtName) {
        _this3.adapter_.deregisterInteractionHandler(evtName, _this3.interactionStartHandler_);
      });
      this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
      this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
      DOWN_EVENTS.forEach(function (evtName) {
        _this3.adapter_.deregisterThumbContainerInteractionHandler(evtName, _this3.thumbContainerPointerHandler_);
      });
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }, {
    key: "setupTrackMarker",
    value: function setupTrackMarker() {
      if (this.isDiscrete_ && this.hasTrackMarker_ && this.getStep() != 0) {
        var min = this.getMin();
        var max = this.getMax();
        var step = this.getStep();
        var numMarkers = (max - min) / step; // In case distance between max & min is indivisible to step,
        // we place the secondary to last marker proportionally at where thumb
        // could reach and place the last marker at max value

        var indivisible = Math.ceil(numMarkers) !== numMarkers;

        if (indivisible) {
          numMarkers = Math.ceil(numMarkers);
        }

        this.adapter_.removeTrackMarkers();
        this.adapter_.appendTrackMarkers(numMarkers);

        if (indivisible) {
          var lastStepRatio = (max - numMarkers * step) / step + 1;
          var flex = getCorrectPropertyName(window, 'flex');
          this.adapter_.setLastTrackMarkersStyleProperty(flex, String(lastStepRatio));
        }
      }
    }
  }, {
    key: "layout",
    value: function layout() {
      this.rect_ = this.adapter_.computeBoundingRect();
      this.updateUIForCurrentValue_();
    }
    /** @return {number} */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.value_;
    }
    /** @param {number} value */

  }, {
    key: "setValue",
    value: function setValue(value) {
      this.setValue_(value, false);
    }
    /** @return {number} */

  }, {
    key: "getMax",
    value: function getMax() {
      return this.max_;
    }
    /** @param {number} max */

  }, {
    key: "setMax",
    value: function setMax(max) {
      if (max < this.min_) {
        throw new Error('Cannot set max to be less than the slider\'s minimum value');
      }

      this.max_ = max;
      this.setValue_(this.value_, false, true);
      this.adapter_.setAttribute(strings.ARIA_VALUEMAX, String(this.max_));
      this.setupTrackMarker();
    }
    /** @return {number} */

  }, {
    key: "getMin",
    value: function getMin() {
      return this.min_;
    }
    /** @param {number} min */

  }, {
    key: "setMin",
    value: function setMin(min) {
      if (min > this.max_) {
        throw new Error('Cannot set min to be greater than the slider\'s maximum value');
      }

      this.min_ = min;
      this.setValue_(this.value_, false, true);
      this.adapter_.setAttribute(strings.ARIA_VALUEMIN, String(this.min_));
      this.setupTrackMarker();
    }
    /** @return {number} */

  }, {
    key: "getStep",
    value: function getStep() {
      return this.step_;
    }
    /** @param {number} step */

  }, {
    key: "setStep",
    value: function setStep(step) {
      if (step < 0) {
        throw new Error('Step cannot be set to a negative number');
      }

      if (this.isDiscrete_ && (typeof step !== 'number' || step < 1)) {
        step = 1;
      }

      this.step_ = step;
      this.setValue_(this.value_, false, true);
      this.setupTrackMarker();
    }
    /** @return {boolean} */

  }, {
    key: "isDisabled",
    value: function isDisabled() {
      return this.disabled_;
    }
    /** @param {boolean} disabled */

  }, {
    key: "setDisabled",
    value: function setDisabled(disabled) {
      this.disabled_ = disabled;
      this.toggleClass_(cssClasses.DISABLED, this.disabled_);

      if (this.disabled_) {
        this.savedTabIndex_ = this.adapter_.getTabIndex();
        this.adapter_.setAttribute(strings.ARIA_DISABLED, 'true');
        this.adapter_.removeAttribute('tabindex');
      } else {
        this.adapter_.removeAttribute(strings.ARIA_DISABLED);

        if (!isNaN(this.savedTabIndex_)) {
          this.adapter_.setAttribute('tabindex', String(this.savedTabIndex_));
        }
      }
    }
    /**
     * Called when the user starts interacting with the slider
     * @param {!Event} evt
     * @private
     */

  }, {
    key: "handleDown_",
    value: function handleDown_(evt) {
      var _this4 = this;

      if (this.disabled_) {
        return;
      }

      this.preventFocusState_ = true;
      this.setInTransit_(!this.handlingThumbTargetEvt_);
      this.handlingThumbTargetEvt_ = false;
      this.setActive_(true);

      var moveHandler = function moveHandler(evt) {
        _this4.handleMove_(evt);
      }; // Note: upHandler is [de]registered on ALL potential pointer-related release event types, since some browsers
      // do not always fire these consistently in pairs.
      // (See https://github.com/material-components/material-components-web/issues/1192)


      var upHandler = function upHandler() {
        _this4.handleUp_();

        _this4.adapter_.deregisterBodyInteractionHandler(MOVE_EVENT_MAP[evt.type], moveHandler);

        UP_EVENTS.forEach(function (evtName) {
          return _this4.adapter_.deregisterBodyInteractionHandler(evtName, upHandler);
        });
      };

      this.adapter_.registerBodyInteractionHandler(MOVE_EVENT_MAP[evt.type], moveHandler);
      UP_EVENTS.forEach(function (evtName) {
        return _this4.adapter_.registerBodyInteractionHandler(evtName, upHandler);
      });
      this.setValueFromEvt_(evt);
    }
    /**
     * Called when the user moves the slider
     * @param {!Event} evt
     * @private
     */

  }, {
    key: "handleMove_",
    value: function handleMove_(evt) {
      evt.preventDefault();
      this.setValueFromEvt_(evt);
    }
    /**
     * Called when the user's interaction with the slider ends
     * @private
     */

  }, {
    key: "handleUp_",
    value: function handleUp_() {
      this.setActive_(false);
      this.adapter_.notifyChange();
    }
    /**
     * Returns the pageX of the event
     * @param {!Event} evt
     * @return {number}
     * @private
     */

  }, {
    key: "getPageX_",
    value: function getPageX_(evt) {
      if (evt.targetTouches && evt.targetTouches.length > 0) {
        return evt.targetTouches[0].pageX;
      }

      return evt.pageX;
    }
    /**
     * Sets the slider value from an event
     * @param {!Event} evt
     * @private
     */

  }, {
    key: "setValueFromEvt_",
    value: function setValueFromEvt_(evt) {
      var pageX = this.getPageX_(evt);
      var value = this.computeValueFromPageX_(pageX);
      this.setValue_(value, true);
    }
    /**
     * Computes the new value from the pageX position
     * @param {number} pageX
     * @return {number}
     */

  }, {
    key: "computeValueFromPageX_",
    value: function computeValueFromPageX_(pageX) {
      var max = this.max_,
          min = this.min_;
      var xPos = pageX - this.rect_.left;
      var pctComplete = xPos / this.rect_.width;

      if (this.adapter_.isRTL()) {
        pctComplete = 1 - pctComplete;
      } // Fit the percentage complete between the range [min,max]
      // by remapping from [0, 1] to [min, min+(max-min)].


      return min + pctComplete * (max - min);
    }
    /**
     * Handles keydown events
     * @param {!Event} evt
     */

  }, {
    key: "handleKeydown_",
    value: function handleKeydown_(evt) {
      var keyId = this.getKeyId_(evt);
      var value = this.getValueForKeyId_(keyId);

      if (isNaN(value)) {
        return;
      } // Prevent page from scrolling due to key presses that would normally scroll the page


      evt.preventDefault();
      this.adapter_.addClass(cssClasses.FOCUS);
      this.setValue_(value, true);
      this.adapter_.notifyChange();
    }
    /**
     * Returns the computed name of the event
     * @param {!Event} kbdEvt
     * @return {string}
     */

  }, {
    key: "getKeyId_",
    value: function getKeyId_(kbdEvt) {
      if (kbdEvt.key === KEY_IDS.ARROW_LEFT || kbdEvt.keyCode === 37) {
        return KEY_IDS.ARROW_LEFT;
      }

      if (kbdEvt.key === KEY_IDS.ARROW_RIGHT || kbdEvt.keyCode === 39) {
        return KEY_IDS.ARROW_RIGHT;
      }

      if (kbdEvt.key === KEY_IDS.ARROW_UP || kbdEvt.keyCode === 38) {
        return KEY_IDS.ARROW_UP;
      }

      if (kbdEvt.key === KEY_IDS.ARROW_DOWN || kbdEvt.keyCode === 40) {
        return KEY_IDS.ARROW_DOWN;
      }

      if (kbdEvt.key === KEY_IDS.HOME || kbdEvt.keyCode === 36) {
        return KEY_IDS.HOME;
      }

      if (kbdEvt.key === KEY_IDS.END || kbdEvt.keyCode === 35) {
        return KEY_IDS.END;
      }

      if (kbdEvt.key === KEY_IDS.PAGE_UP || kbdEvt.keyCode === 33) {
        return KEY_IDS.PAGE_UP;
      }

      if (kbdEvt.key === KEY_IDS.PAGE_DOWN || kbdEvt.keyCode === 34) {
        return KEY_IDS.PAGE_DOWN;
      }

      return '';
    }
    /**
     * Computes the value given a keyboard key ID
     * @param {string} keyId
     * @return {number}
     */

  }, {
    key: "getValueForKeyId_",
    value: function getValueForKeyId_(keyId) {
      var max = this.max_,
          min = this.min_,
          step = this.step_;
      var delta = step || (max - min) / 100;
      var valueNeedsToBeFlipped = this.adapter_.isRTL() && (keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT);

      if (valueNeedsToBeFlipped) {
        delta = -delta;
      }

      switch (keyId) {
        case KEY_IDS.ARROW_LEFT:
        case KEY_IDS.ARROW_DOWN:
          return this.value_ - delta;

        case KEY_IDS.ARROW_RIGHT:
        case KEY_IDS.ARROW_UP:
          return this.value_ + delta;

        case KEY_IDS.HOME:
          return this.min_;

        case KEY_IDS.END:
          return this.max_;

        case KEY_IDS.PAGE_UP:
          return this.value_ + delta * numbers.PAGE_FACTOR;

        case KEY_IDS.PAGE_DOWN:
          return this.value_ - delta * numbers.PAGE_FACTOR;

        default:
          return NaN;
      }
    }
  }, {
    key: "handleFocus_",
    value: function handleFocus_() {
      if (this.preventFocusState_) {
        return;
      }

      this.adapter_.addClass(cssClasses.FOCUS);
    }
  }, {
    key: "handleBlur_",
    value: function handleBlur_() {
      this.preventFocusState_ = false;
      this.adapter_.removeClass(cssClasses.FOCUS);
    }
    /**
     * Sets the value of the slider
     * @param {number} value
     * @param {boolean} shouldFireInput
     * @param {boolean=} force
     */

  }, {
    key: "setValue_",
    value: function setValue_(value, shouldFireInput) {
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (value === this.value_ && !force) {
        return;
      }

      var min = this.min_,
          max = this.max_;
      var valueSetToBoundary = value === min || value === max;

      if (this.step_ && !valueSetToBoundary) {
        value = this.quantize_(value);
      }

      if (value < min) {
        value = min;
      } else if (value > max) {
        value = max;
      }

      this.value_ = value;
      this.adapter_.setAttribute(strings.ARIA_VALUENOW, String(this.value_));
      this.updateUIForCurrentValue_();

      if (shouldFireInput) {
        this.adapter_.notifyInput();

        if (this.isDiscrete_) {
          this.adapter_.setMarkerValue(value);
        }
      }
    }
    /**
     * Calculates the quantized value
     * @param {number} value
     * @return {number}
     */

  }, {
    key: "quantize_",
    value: function quantize_(value) {
      var numSteps = Math.round(value / this.step_);
      var quantizedVal = numSteps * this.step_;
      return quantizedVal;
    }
  }, {
    key: "updateUIForCurrentValue_",
    value: function updateUIForCurrentValue_() {
      var _this5 = this;

      var max = this.max_,
          min = this.min_,
          value = this.value_;
      var pctComplete = (value - min) / (max - min);
      var translatePx = pctComplete * this.rect_.width;

      if (this.adapter_.isRTL()) {
        translatePx = this.rect_.width - translatePx;
      }

      var transformProp = getCorrectPropertyName(window, 'transform');
      var transitionendEvtName = getCorrectEventName(window, 'transitionend');

      if (this.inTransit_) {
        var onTransitionEnd = function onTransitionEnd() {
          _this5.setInTransit_(false);

          _this5.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
        };

        this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
      }

      this.updateUIFrame_ = requestAnimationFrame(function () {
        // NOTE(traviskaufman): It would be nice to use calc() here,
        // but IE cannot handle calcs in transforms correctly.
        // See: https://goo.gl/NC2itk
        // Also note that the -50% offset is used to center the slider thumb.
        _this5.adapter_.setThumbContainerStyleProperty(transformProp, "translateX(".concat(translatePx, "px) translateX(-50%)"));

        _this5.adapter_.setTrackStyleProperty(transformProp, "scaleX(".concat(pctComplete, ")"));
      });
    }
    /**
     * Toggles the active state of the slider
     * @param {boolean} active
     */

  }, {
    key: "setActive_",
    value: function setActive_(active) {
      this.active_ = active;
      this.toggleClass_(cssClasses.ACTIVE, this.active_);
    }
    /**
     * Toggles the inTransit state of the slider
     * @param {boolean} inTransit
     */

  }, {
    key: "setInTransit_",
    value: function setInTransit_(inTransit) {
      this.inTransit_ = inTransit;
      this.toggleClass_(cssClasses.IN_TRANSIT, this.inTransit_);
    }
    /**
     * Conditionally adds or removes a class based on shouldBePresent
     * @param {string} className
     * @param {boolean} shouldBePresent
     */

  }, {
    key: "toggleClass_",
    value: function toggleClass_(className, shouldBePresent) {
      if (shouldBePresent) {
        this.adapter_.addClass(className);
      } else {
        this.adapter_.removeClass(className);
      }
    }
  }]);

  return MDCSliderFoundation;
}(MDCFoundation);

//
var script = {
  name: 'mdc-slider',
  mixins: [DispatchFocusMixin],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: [Number, String],
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 0
    },
    displayMarkers: Boolean,
    disabled: Boolean,
    layoutOn: String,
    layoutOnSource: {
      type: Object,
      required: false
    }
  },
  data: function data() {
    return {
      classes: {
        'mdc-slider--discrete': !!this.step,
        'mdc-slider--display-markers': this.displayMarkers
      },
      trackStyles: {},
      lastTrackMarkersStyles: {},
      thumbStyles: {},
      markerValue: '',
      numMarkers: 0
    };
  },
  computed: {
    isDiscrete: function isDiscrete() {
      return !!this.step;
    },
    hasMarkers: function hasMarkers() {
      return !!this.step && this.displayMarkers && this.numMarkers;
    }
  },
  watch: {
    value: function value() {
      if (this.foundation.getValue() !== Number(this.value)) {
        this.foundation.setValue(this.value);
      }
    },
    min: function min() {
      this.foundation.setMin(Number(this.min));
    },
    max: function max() {
      this.foundation.setMax(Number(this.max));
    },
    step: function step() {
      this.foundation.setStep(Number(this.step));
    },
    disabled: function disabled() {
      this.foundation.setDisabled(this.disabled);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCSliderFoundation({
      hasClass: function hasClass(className) {
        return _this.$el.classList.contains(className);
      },
      addClass: function addClass(className) {
        _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        _this.$delete(_this.classes, className, true);
      },
      getAttribute: function getAttribute(name) {
        return _this.$el.getAttribute(name);
      },
      setAttribute: function setAttribute(name, value) {
        return _this.$el.setAttribute(name, value);
      },
      removeAttribute: function removeAttribute(name) {
        return _this.$el.removeAttribute(name);
      },
      computeBoundingRect: function computeBoundingRect() {
        return _this.$el.getBoundingClientRect();
      },
      getTabIndex: function getTabIndex() {
        return _this.$el.tabIndex;
      },
      registerInteractionHandler: function registerInteractionHandler(type, handler) {
        _this.$el.addEventListener(type, handler, applyPassive());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
        _this.$el.removeEventListener(type, handler, applyPassive());
      },
      registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler(type, handler) {
        _this.$refs.thumbContainer.addEventListener(type, handler, applyPassive());
      },
      deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler(type, handler) {
        _this.$refs.thumbContainer.removeEventListener(type, handler, applyPassive());
      },
      registerBodyInteractionHandler: function registerBodyInteractionHandler(type, handler) {
        document.body.addEventListener(type, handler);
      },
      deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler(type, handler) {
        document.body.removeEventListener(type, handler);
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        window.removeEventListener('resize', handler);
      },
      notifyInput: function notifyInput() {
        _this.$emit('input', _this.foundation.getValue());
      },
      notifyChange: function notifyChange() {
        _this.$emit('change', _this.foundation.getValue());
      },
      setThumbContainerStyleProperty: function setThumbContainerStyleProperty(propertyName, value) {
        _this.$set(_this.thumbStyles, propertyName, value);
      },
      setTrackStyleProperty: function setTrackStyleProperty(propertyName, value) {
        _this.$set(_this.trackStyles, propertyName, value);
      },
      setMarkerValue: function setMarkerValue(value) {
        _this.markerValue = value;
      },
      appendTrackMarkers: function appendTrackMarkers(numMarkers) {
        _this.numMarkers = numMarkers;
      },
      removeTrackMarkers: function removeTrackMarkers() {
        _this.numMarkers = 0;
      },
      setLastTrackMarkersStyleProperty: function setLastTrackMarkersStyleProperty(propertyName, value) {
        _this.$set(_this.lastTrackMarkersStyles, propertyName, value);
      },
      isRTL: function isRTL() {
        return false;
      }
    });
    this.foundation.init();
    this.foundation.setDisabled(this.disabled);

    if (Number(this.min) <= this.foundation.getMax()) {
      this.foundation.setMin(Number(this.min));
      this.foundation.setMax(Number(this.max));
    } else {
      this.foundation.setMax(Number(this.max));
      this.foundation.setMin(Number(this.min));
    }

    this.foundation.setStep(Number(this.step));
    this.foundation.setValue(Number(this.value));

    if (this.hasMarkers) {
      this.foundation.setupTrackMarker();
    }

    this.$root.$on('vma:layout', this.layout);

    if (this.layoutOn) {
      this.layoutOnEventSource = this.layoutOnSource || this.$root;
      this.layoutOnEventSource.$on(this.layoutOn, this.layout);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$root.$off('vma:layout', this.layout);

    if (this.layoutOnEventSource) {
      this.layoutOnEventSource.$off(this.layoutOn, this.layout);
    }

    this.foundation.destroy();
  },
  methods: {
    layout: function layout() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.foundation && _this2.foundation.layout();
      });
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
script.__file = "/ddata/extra/vma/components/slider/mdc-slider.vue";

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "mdc-slider",
      class: _vm.classes,
      attrs: { tabindex: "0", role: "slider" }
    },
    [
      _c("div", { staticClass: "mdc-slider__track-container" }, [
        _c("div", { staticClass: "mdc-slider__track", style: _vm.trackStyles }),
        _vm._v(" "),
        _vm.hasMarkers
          ? _c(
              "div",
              { staticClass: "mdc-slider__track-marker-container" },
              _vm._l(_vm.numMarkers, function(markerNum) {
                return _c("div", {
                  key: markerNum,
                  staticClass: "mdc-slider__track-marker",
                  style:
                    markerNum == _vm.numMarkers
                      ? _vm.lastTrackMarkersStyles
                      : {}
                })
              }),
              0
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "thumbContainer",
          staticClass: "mdc-slider__thumb-container",
          style: _vm.thumbStyles
        },
        [
          _vm.isDiscrete
            ? _c("div", { staticClass: "mdc-slider__pin" }, [
                _c("span", { staticClass: "mdc-slider__pin-value-marker" }, [
                  _vm._v(_vm._s(_vm.markerValue))
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "svg",
            {
              staticClass: "mdc-slider__thumb",
              attrs: { width: "21", height: "21" }
            },
            [_c("circle", { attrs: { cx: "10.5", cy: "10.5", r: "7.875" } })]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "mdc-slider__focus-ring" })
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
  

  
  var mdcSlider = normalizeComponent(
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
  mdcSlider: mdcSlider
});

export default index;
export { mdcSlider };
//# sourceMappingURL=index.js.map
