/**
* @module vue-mdc-adapterslider 0.19.4-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^1.0.0-0","material-components-web":"^1.0.0-0"}
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
var cssPropertyNameMap = {
  animation: {
    prefixed: '-webkit-animation',
    standard: 'animation'
  },
  transform: {
    prefixed: '-webkit-transform',
    standard: 'transform'
  },
  transition: {
    prefixed: '-webkit-transition',
    standard: 'transition'
  }
};
var jsEventTypeMap = {
  animationend: {
    cssProperty: 'animation',
    prefixed: 'webkitAnimationEnd',
    standard: 'animationend'
  },
  animationiteration: {
    cssProperty: 'animation',
    prefixed: 'webkitAnimationIteration',
    standard: 'animationiteration'
  },
  animationstart: {
    cssProperty: 'animation',
    prefixed: 'webkitAnimationStart',
    standard: 'animationstart'
  },
  transitionend: {
    cssProperty: 'transition',
    prefixed: 'webkitTransitionEnd',
    standard: 'transitionend'
  }
};

function isWindow(windowObj) {
  return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}

function getCorrectPropertyName(windowObj, cssProperty) {
  if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
    var el = windowObj.document.createElement('div');
    var _a = cssPropertyNameMap[cssProperty],
        standard = _a.standard,
        prefixed = _a.prefixed;
    var isStandard = standard in el.style;
    return isStandard ? standard : prefixed;
  }

  return cssProperty;
}
function getCorrectEventName(windowObj, eventType) {
  if (isWindow(windowObj) && eventType in jsEventTypeMap) {
    var el = windowObj.document.createElement('div');
    var _a = jsEventTypeMap[eventType],
        standard = _a.standard,
        prefixed = _a.prefixed,
        cssProperty = _a.cssProperty;
    var isStandard = cssProperty in el.style;
    return isStandard ? standard : prefixed;
  }

  return eventType;
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
var cssClasses = {
  ACTIVE: 'mdc-slider--active',
  DISABLED: 'mdc-slider--disabled',
  DISCRETE: 'mdc-slider--discrete',
  FOCUS: 'mdc-slider--focus',
  HAS_TRACK_MARKER: 'mdc-slider--display-markers',
  IN_TRANSIT: 'mdc-slider--in-transit',
  IS_DISCRETE: 'mdc-slider--discrete'
};
var strings = {
  ARIA_DISABLED: 'aria-disabled',
  ARIA_VALUEMAX: 'aria-valuemax',
  ARIA_VALUEMIN: 'aria-valuemin',
  ARIA_VALUENOW: 'aria-valuenow',
  CHANGE_EVENT: 'MDCSlider:change',
  INPUT_EVENT: 'MDCSlider:input',
  LAST_TRACK_MARKER_SELECTOR: '.mdc-slider__track-marker:last-child',
  PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
  STEP_DATA_ATTR: 'data-step',
  THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
  TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
  TRACK_SELECTOR: '.mdc-slider__track'
};
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
var DOWN_EVENTS = ['mousedown', 'pointerdown', 'touchstart'];
var UP_EVENTS = ['mouseup', 'pointerup', 'touchend'];
var MOVE_EVENT_MAP = {
  mousedown: 'mousemove',
  pointerdown: 'pointermove',
  touchstart: 'touchmove'
};
var KEY_IDS = {
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  END: 'End',
  HOME: 'Home',
  PAGE_DOWN: 'PageDown',
  PAGE_UP: 'PageUp'
};

var MDCSliderFoundation =
/** @class */
function (_super) {
  __extends(MDCSliderFoundation, _super);

  function MDCSliderFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCSliderFoundation.defaultAdapter, adapter)) || this;
    /**
     * We set this to NaN since we want it to be a number, but we can't use '0' or '-1'
     * because those could be valid tabindices set by the client code.
     */


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

    _this.thumbContainerPointerHandler_ = function () {
      return _this.handlingThumbTargetEvt_ = true;
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

  Object.defineProperty(MDCSliderFoundation, "cssClasses", {
    get: function get() {
      return cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSliderFoundation, "strings", {
    get: function get() {
      return strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSliderFoundation, "numbers", {
    get: function get() {
      return numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSliderFoundation, "defaultAdapter", {
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        hasClass: function hasClass() {
          return false;
        },
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        getAttribute: function getAttribute() {
          return null;
        },
        setAttribute: function setAttribute() {
          return undefined;
        },
        removeAttribute: function removeAttribute() {
          return undefined;
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
        getTabIndex: function getTabIndex() {
          return 0;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        },
        registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler() {
          return undefined;
        },
        deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler() {
          return undefined;
        },
        registerBodyInteractionHandler: function registerBodyInteractionHandler() {
          return undefined;
        },
        deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler() {
          return undefined;
        },
        registerResizeHandler: function registerResizeHandler() {
          return undefined;
        },
        deregisterResizeHandler: function deregisterResizeHandler() {
          return undefined;
        },
        notifyInput: function notifyInput() {
          return undefined;
        },
        notifyChange: function notifyChange() {
          return undefined;
        },
        setThumbContainerStyleProperty: function setThumbContainerStyleProperty() {
          return undefined;
        },
        setTrackStyleProperty: function setTrackStyleProperty() {
          return undefined;
        },
        setMarkerValue: function setMarkerValue() {
          return undefined;
        },
        appendTrackMarkers: function appendTrackMarkers() {
          return undefined;
        },
        removeTrackMarkers: function removeTrackMarkers() {
          return undefined;
        },
        setLastTrackMarkersStyleProperty: function setLastTrackMarkersStyleProperty() {
          return undefined;
        },
        isRTL: function isRTL() {
          return false;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCSliderFoundation.prototype.init = function () {
    var _this = this;

    this.isDiscrete_ = this.adapter_.hasClass(cssClasses.IS_DISCRETE);
    this.hasTrackMarker_ = this.adapter_.hasClass(cssClasses.HAS_TRACK_MARKER);
    DOWN_EVENTS.forEach(function (evtName) {
      _this.adapter_.registerInteractionHandler(evtName, _this.interactionStartHandler_);

      _this.adapter_.registerThumbContainerInteractionHandler(evtName, _this.thumbContainerPointerHandler_);
    });
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    this.adapter_.registerResizeHandler(this.resizeHandler_);
    this.layout(); // At last step, provide a reasonable default value to discrete slider

    if (this.isDiscrete_ && this.getStep() === 0) {
      this.step_ = 1;
    }
  };

  MDCSliderFoundation.prototype.destroy = function () {
    var _this = this;

    DOWN_EVENTS.forEach(function (evtName) {
      _this.adapter_.deregisterInteractionHandler(evtName, _this.interactionStartHandler_);

      _this.adapter_.deregisterThumbContainerInteractionHandler(evtName, _this.thumbContainerPointerHandler_);
    });
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  };

  MDCSliderFoundation.prototype.setupTrackMarker = function () {
    if (this.isDiscrete_ && this.hasTrackMarker_ && this.getStep() !== 0) {
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
        this.adapter_.setLastTrackMarkersStyleProperty('flex-grow', String(lastStepRatio));
      }
    }
  };

  MDCSliderFoundation.prototype.layout = function () {
    this.rect_ = this.adapter_.computeBoundingRect();
    this.updateUIForCurrentValue_();
  };

  MDCSliderFoundation.prototype.getValue = function () {
    return this.value_;
  };

  MDCSliderFoundation.prototype.setValue = function (value) {
    this.setValue_(value, false);
  };

  MDCSliderFoundation.prototype.getMax = function () {
    return this.max_;
  };

  MDCSliderFoundation.prototype.setMax = function (max) {
    if (max < this.min_) {
      throw new Error('Cannot set max to be less than the slider\'s minimum value');
    }

    this.max_ = max;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(strings.ARIA_VALUEMAX, String(this.max_));
    this.setupTrackMarker();
  };

  MDCSliderFoundation.prototype.getMin = function () {
    return this.min_;
  };

  MDCSliderFoundation.prototype.setMin = function (min) {
    if (min > this.max_) {
      throw new Error('Cannot set min to be greater than the slider\'s maximum value');
    }

    this.min_ = min;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(strings.ARIA_VALUEMIN, String(this.min_));
    this.setupTrackMarker();
  };

  MDCSliderFoundation.prototype.getStep = function () {
    return this.step_;
  };

  MDCSliderFoundation.prototype.setStep = function (step) {
    if (step < 0) {
      throw new Error('Step cannot be set to a negative number');
    }

    if (this.isDiscrete_ && (typeof step !== 'number' || step < 1)) {
      step = 1;
    }

    this.step_ = step;
    this.setValue_(this.value_, false, true);
    this.setupTrackMarker();
  };

  MDCSliderFoundation.prototype.isDisabled = function () {
    return this.disabled_;
  };

  MDCSliderFoundation.prototype.setDisabled = function (disabled) {
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
  };
  /**
   * Called when the user starts interacting with the slider
   */


  MDCSliderFoundation.prototype.handleDown_ = function (downEvent) {
    var _this = this;

    if (this.disabled_) {
      return;
    }

    this.preventFocusState_ = true;
    this.setInTransit_(!this.handlingThumbTargetEvt_);
    this.handlingThumbTargetEvt_ = false;
    this.setActive_(true);

    var moveHandler = function moveHandler(moveEvent) {
      _this.handleMove_(moveEvent);
    };

    var moveEventType = MOVE_EVENT_MAP[downEvent.type]; // Note: upHandler is [de]registered on ALL potential pointer-related release event types, since some browsers
    // do not always fire these consistently in pairs.
    // (See https://github.com/material-components/material-components-web/issues/1192)

    var upHandler = function upHandler() {
      _this.handleUp_();

      _this.adapter_.deregisterBodyInteractionHandler(moveEventType, moveHandler);

      UP_EVENTS.forEach(function (evtName) {
        return _this.adapter_.deregisterBodyInteractionHandler(evtName, upHandler);
      });
    };

    this.adapter_.registerBodyInteractionHandler(moveEventType, moveHandler);
    UP_EVENTS.forEach(function (evtName) {
      return _this.adapter_.registerBodyInteractionHandler(evtName, upHandler);
    });
    this.setValueFromEvt_(downEvent);
  };
  /**
   * Called when the user moves the slider
   */


  MDCSliderFoundation.prototype.handleMove_ = function (evt) {
    evt.preventDefault();
    this.setValueFromEvt_(evt);
  };
  /**
   * Called when the user's interaction with the slider ends
   */


  MDCSliderFoundation.prototype.handleUp_ = function () {
    this.setActive_(false);
    this.adapter_.notifyChange();
  };
  /**
   * Returns the pageX of the event
   */


  MDCSliderFoundation.prototype.getPageX_ = function (evt) {
    if (evt.targetTouches && evt.targetTouches.length > 0) {
      return evt.targetTouches[0].pageX;
    }

    return evt.pageX;
  };
  /**
   * Sets the slider value from an event
   */


  MDCSliderFoundation.prototype.setValueFromEvt_ = function (evt) {
    var pageX = this.getPageX_(evt);
    var value = this.computeValueFromPageX_(pageX);
    this.setValue_(value, true);
  };
  /**
   * Computes the new value from the pageX position
   */


  MDCSliderFoundation.prototype.computeValueFromPageX_ = function (pageX) {
    var _a = this,
        max = _a.max_,
        min = _a.min_;

    var xPos = pageX - this.rect_.left;
    var pctComplete = xPos / this.rect_.width;

    if (this.adapter_.isRTL()) {
      pctComplete = 1 - pctComplete;
    } // Fit the percentage complete between the range [min,max]
    // by remapping from [0, 1] to [min, min+(max-min)].


    return min + pctComplete * (max - min);
  };
  /**
   * Handles keydown events
   */


  MDCSliderFoundation.prototype.handleKeydown_ = function (evt) {
    var keyId = this.getKeyId_(evt);
    var value = this.getValueForKeyId_(keyId);

    if (isNaN(value)) {
      return;
    } // Prevent page from scrolling due to key presses that would normally scroll the page


    evt.preventDefault();
    this.adapter_.addClass(cssClasses.FOCUS);
    this.setValue_(value, true);
    this.adapter_.notifyChange();
  };
  /**
   * Returns the computed name of the event
   */


  MDCSliderFoundation.prototype.getKeyId_ = function (kbdEvt) {
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
  };
  /**
   * Computes the value given a keyboard key ID
   */


  MDCSliderFoundation.prototype.getValueForKeyId_ = function (keyId) {
    var _a = this,
        max = _a.max_,
        min = _a.min_,
        step = _a.step_;

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
  };

  MDCSliderFoundation.prototype.handleFocus_ = function () {
    if (this.preventFocusState_) {
      return;
    }

    this.adapter_.addClass(cssClasses.FOCUS);
  };

  MDCSliderFoundation.prototype.handleBlur_ = function () {
    this.preventFocusState_ = false;
    this.adapter_.removeClass(cssClasses.FOCUS);
  };
  /**
   * Sets the value of the slider
   */


  MDCSliderFoundation.prototype.setValue_ = function (value, shouldFireInput, force) {
    if (force === void 0) {
      force = false;
    }

    if (value === this.value_ && !force) {
      return;
    }

    var _a = this,
        min = _a.min_,
        max = _a.max_;

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
  };
  /**
   * Calculates the quantized value
   */


  MDCSliderFoundation.prototype.quantize_ = function (value) {
    var numSteps = Math.round(value / this.step_);
    return numSteps * this.step_;
  };

  MDCSliderFoundation.prototype.updateUIForCurrentValue_ = function () {
    var _this = this;

    var _a = this,
        max = _a.max_,
        min = _a.min_,
        value = _a.value_;

    var pctComplete = (value - min) / (max - min);
    var translatePx = pctComplete * this.rect_.width;

    if (this.adapter_.isRTL()) {
      translatePx = this.rect_.width - translatePx;
    }

    var transformProp = getCorrectPropertyName(window, 'transform');
    var transitionendEvtName = getCorrectEventName(window, 'transitionend');

    if (this.inTransit_) {
      var onTransitionEnd_1 = function onTransitionEnd_1() {
        _this.setInTransit_(false);

        _this.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd_1);
      };

      this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd_1);
    }

    requestAnimationFrame(function () {
      // NOTE(traviskaufman): It would be nice to use calc() here,
      // but IE cannot handle calcs in transforms correctly.
      // See: https://goo.gl/NC2itk
      // Also note that the -50% offset is used to center the slider thumb.
      _this.adapter_.setThumbContainerStyleProperty(transformProp, "translateX(" + translatePx + "px) translateX(-50%)");

      _this.adapter_.setTrackStyleProperty(transformProp, "scaleX(" + pctComplete + ")");
    });
  };
  /**
   * Toggles the active state of the slider
   */


  MDCSliderFoundation.prototype.setActive_ = function (active) {
    this.active_ = active;
    this.toggleClass_(cssClasses.ACTIVE, this.active_);
  };
  /**
   * Toggles the inTransit state of the slider
   */


  MDCSliderFoundation.prototype.setInTransit_ = function (inTransit) {
    this.inTransit_ = inTransit;
    this.toggleClass_(cssClasses.IN_TRANSIT, this.inTransit_);
  };
  /**
   * Conditionally adds or removes a class based on shouldBePresent
   */


  MDCSliderFoundation.prototype.toggleClass_ = function (className, shouldBePresent) {
    if (shouldBePresent) {
      this.adapter_.addClass(className);
    } else {
      this.adapter_.removeClass(className);
    }
  };

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
  

  
  var mdcSlider = normalizeComponent_1(
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
