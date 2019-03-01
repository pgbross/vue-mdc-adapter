/**
* @module vue-mdc-adapterslider 0.19.4-beta
* @exports VueMDCSlider
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^1.0.0-0","material-components-web":"^1.0.0-0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueMDCSlider = factory());
}(this, function () { 'use strict';

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

  var plugin = BasePlugin({
    mdcSlider: mdcSlider
  });

  autoInit(plugin);

  return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXBwbHktcGFzc2l2ZS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9hdXRvLWluaXQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYmFzZS1wbHVnaW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWV2ZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Rpc3BhdGNoLWZvY3VzLW1peGluLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYW5pbWF0aW9uL3V0aWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2xpZGVyL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2xpZGVyL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9jb21wb25lbnRzL3NsaWRlci9tZGMtc2xpZGVyLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvc2xpZGVyL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9zbGlkZXIvZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHN1cHBvcnRzUGFzc2l2ZV9cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmQgaWYgc28sIHVzZSB0aGVtLlxuICogQHBhcmFtIHshV2luZG93PX0gZ2xvYmFsT2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58e3Bhc3NpdmU6IGJvb2xlYW59fVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiA9IHdpbmRvdywgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgaWYgKHN1cHBvcnRzUGFzc2l2ZV8gPT09IHVuZGVmaW5lZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWQgPSBmYWxzZVxuICAgIHRyeSB7XG4gICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIHtcbiAgICAgICAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgICAgICAgaXNTdXBwb3J0ZWQgPSB7IHBhc3NpdmU6IHRydWUgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vZW1wdHlcbiAgICB9XG5cbiAgICBzdXBwb3J0c1Bhc3NpdmVfID0gaXNTdXBwb3J0ZWRcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYXV0b0luaXQocGx1Z2luKSB7XG4gIC8vIEF1dG8taW5zdGFsbFxuICBsZXQgX1Z1ZSA9IG51bGxcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgX1Z1ZSA9IHdpbmRvdy5WdWVcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8qZ2xvYmFsIGdsb2JhbCovXG4gICAgX1Z1ZSA9IGdsb2JhbC5WdWVcbiAgfVxuICBpZiAoX1Z1ZSkge1xuICAgIF9WdWUudXNlKHBsdWdpbilcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIEJhc2VQbHVnaW4oY29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICdfX1ZFUlNJT05fXycsXG4gICAgaW5zdGFsbDogdm0gPT4ge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNba2V5XVxuICAgICAgICB2bS5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHNcbiAgfVxufVxuIiwiLyogZ2xvYmFsIEN1c3RvbUV2ZW50ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Q3VzdG9tRXZlbnQoZWwsIGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gIGxldCBldnRcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICBidWJibGVzOiBzaG91bGRCdWJibGVcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKVxuICB9XG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxufVxuIiwiZXhwb3J0IGNvbnN0IERpc3BhdGNoRm9jdXNNaXhpbiA9IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4geyBoYXNGb2N1czogZmFsc2UgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25Nb3VzZURvd24oKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlXG4gICAgfSxcbiAgICBvbk1vdXNlVXAoKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZVxuICAgIH0sXG4gICAgb25Gb2N1c0V2ZW50KCkge1xuICAgICAgLy8gZGlzcGF0Y2ggYXN5bmMgdG8gbGV0IHRpbWUgdG8gb3RoZXIgZm9jdXMgZXZlbnQgdG8gcHJvcGFnYXRlXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGlzcGF0Y2hGb2N1c0V2ZW50KCksIDApXG4gICAgfSxcbiAgICBvbkJsdXJFdmVudCgpIHtcbiAgICAgIC8vIGRpc3BhdGNoIGFzeW5jIHRvIGxldCB0aW1lIHRvIG90aGVyIGZvY3VzIGV2ZW50IHRvIHByb3BhZ2F0ZVxuICAgICAgLy8gYWxzbyBmaWx0dXIgYmx1ciBpZiBtb3VzZWRvd25cbiAgICAgIHRoaXMuX2FjdGl2ZSB8fCBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGlzcGF0Y2hGb2N1c0V2ZW50KCksIDApXG4gICAgfSxcbiAgICBkaXNwYXRjaEZvY3VzRXZlbnQoKSB7XG4gICAgICBsZXQgaGFzRm9jdXMgPVxuICAgICAgICB0aGlzLiRlbCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCB8fFxuICAgICAgICB0aGlzLiRlbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KVxuICAgICAgaWYgKGhhc0ZvY3VzICE9IHRoaXMuaGFzRm9jdXMpIHtcbiAgICAgICAgdGhpcy4kZW1pdChoYXNGb2N1cyA/ICdmb2N1cycgOiAnYmx1cicpXG4gICAgICAgIHRoaXMuaGFzRm9jdXMgPSBoYXNGb2N1c1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5vbkZvY3VzRXZlbnQpXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB0aGlzLm9uQmx1ckV2ZW50KVxuICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24pXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLm9uRm9jdXNFdmVudClcbiAgICB0aGlzLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMub25CbHVyRXZlbnQpXG4gICAgdGhpcy4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bilcbiAgICB0aGlzLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApXG4gIH1cbn1cbiIsImNvbnN0IHNjb3BlID1cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigweDEwMDAwMDAwKSkudG9TdHJpbmcoKSArICctJ1xuXG5leHBvcnQgY29uc3QgVk1BVW5pcXVlSWRNaXhpbiA9IHtcbiAgYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMudm1hX3VpZF8gPSBzY29wZSArIHRoaXMuX3VpZFxuICB9XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc1Byb3BlcnR5TmFtZU1hcCA9IHtcbiAgICBhbmltYXRpb246IHtcbiAgICAgICAgcHJlZml4ZWQ6ICctd2Via2l0LWFuaW1hdGlvbicsXG4gICAgICAgIHN0YW5kYXJkOiAnYW5pbWF0aW9uJyxcbiAgICB9LFxuICAgIHRyYW5zZm9ybToge1xuICAgICAgICBwcmVmaXhlZDogJy13ZWJraXQtdHJhbnNmb3JtJyxcbiAgICAgICAgc3RhbmRhcmQ6ICd0cmFuc2Zvcm0nLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBwcmVmaXhlZDogJy13ZWJraXQtdHJhbnNpdGlvbicsXG4gICAgICAgIHN0YW5kYXJkOiAndHJhbnNpdGlvbicsXG4gICAgfSxcbn07XG52YXIganNFdmVudFR5cGVNYXAgPSB7XG4gICAgYW5pbWF0aW9uZW5kOiB7XG4gICAgICAgIGNzc1Byb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbmVuZCcsXG4gICAgfSxcbiAgICBhbmltYXRpb25pdGVyYXRpb246IHtcbiAgICAgICAgY3NzUHJvcGVydHk6ICdhbmltYXRpb24nLFxuICAgICAgICBwcmVmaXhlZDogJ3dlYmtpdEFuaW1hdGlvbkl0ZXJhdGlvbicsXG4gICAgICAgIHN0YW5kYXJkOiAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgICB9LFxuICAgIGFuaW1hdGlvbnN0YXJ0OiB7XG4gICAgICAgIGNzc1Byb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRBbmltYXRpb25TdGFydCcsXG4gICAgICAgIHN0YW5kYXJkOiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbmVuZDoge1xuICAgICAgICBjc3NQcm9wZXJ0eTogJ3RyYW5zaXRpb24nLFxuICAgICAgICBwcmVmaXhlZDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICAgICBzdGFuZGFyZDogJ3RyYW5zaXRpb25lbmQnLFxuICAgIH0sXG59O1xuZnVuY3Rpb24gaXNXaW5kb3cod2luZG93T2JqKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4od2luZG93T2JqLmRvY3VtZW50KSAmJiB0eXBlb2Ygd2luZG93T2JqLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29ycmVjdFByb3BlcnR5TmFtZSh3aW5kb3dPYmosIGNzc1Byb3BlcnR5KSB7XG4gICAgaWYgKGlzV2luZG93KHdpbmRvd09iaikgJiYgY3NzUHJvcGVydHkgaW4gY3NzUHJvcGVydHlOYW1lTWFwKSB7XG4gICAgICAgIHZhciBlbCA9IHdpbmRvd09iai5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFyIF9hID0gY3NzUHJvcGVydHlOYW1lTWFwW2Nzc1Byb3BlcnR5XSwgc3RhbmRhcmQgPSBfYS5zdGFuZGFyZCwgcHJlZml4ZWQgPSBfYS5wcmVmaXhlZDtcbiAgICAgICAgdmFyIGlzU3RhbmRhcmQgPSBzdGFuZGFyZCBpbiBlbC5zdHlsZTtcbiAgICAgICAgcmV0dXJuIGlzU3RhbmRhcmQgPyBzdGFuZGFyZCA6IHByZWZpeGVkO1xuICAgIH1cbiAgICByZXR1cm4gY3NzUHJvcGVydHk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29ycmVjdEV2ZW50TmFtZSh3aW5kb3dPYmosIGV2ZW50VHlwZSkge1xuICAgIGlmIChpc1dpbmRvdyh3aW5kb3dPYmopICYmIGV2ZW50VHlwZSBpbiBqc0V2ZW50VHlwZU1hcCkge1xuICAgICAgICB2YXIgZWwgPSB3aW5kb3dPYmouZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciBfYSA9IGpzRXZlbnRUeXBlTWFwW2V2ZW50VHlwZV0sIHN0YW5kYXJkID0gX2Euc3RhbmRhcmQsIHByZWZpeGVkID0gX2EucHJlZml4ZWQsIGNzc1Byb3BlcnR5ID0gX2EuY3NzUHJvcGVydHk7XG4gICAgICAgIHZhciBpc1N0YW5kYXJkID0gY3NzUHJvcGVydHkgaW4gZWwuc3R5bGU7XG4gICAgICAgIHJldHVybiBpc1N0YW5kYXJkID8gc3RhbmRhcmQgOiBwcmVmaXhlZDtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50VHlwZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgTURDRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgaWYgKGFkYXB0ZXIgPT09IHZvaWQgMCkgeyBhZGFwdGVyID0ge307IH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAgICAgICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAgICAgICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0ZvdW5kYXRpb247XG59KCkpO1xuZXhwb3J0IHsgTURDRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgQUNUSVZFOiAnbWRjLXNsaWRlci0tYWN0aXZlJyxcbiAgICBESVNBQkxFRDogJ21kYy1zbGlkZXItLWRpc2FibGVkJyxcbiAgICBESVNDUkVURTogJ21kYy1zbGlkZXItLWRpc2NyZXRlJyxcbiAgICBGT0NVUzogJ21kYy1zbGlkZXItLWZvY3VzJyxcbiAgICBIQVNfVFJBQ0tfTUFSS0VSOiAnbWRjLXNsaWRlci0tZGlzcGxheS1tYXJrZXJzJyxcbiAgICBJTl9UUkFOU0lUOiAnbWRjLXNsaWRlci0taW4tdHJhbnNpdCcsXG4gICAgSVNfRElTQ1JFVEU6ICdtZGMtc2xpZGVyLS1kaXNjcmV0ZScsXG59O1xudmFyIHN0cmluZ3MgPSB7XG4gICAgQVJJQV9ESVNBQkxFRDogJ2FyaWEtZGlzYWJsZWQnLFxuICAgIEFSSUFfVkFMVUVNQVg6ICdhcmlhLXZhbHVlbWF4JyxcbiAgICBBUklBX1ZBTFVFTUlOOiAnYXJpYS12YWx1ZW1pbicsXG4gICAgQVJJQV9WQUxVRU5PVzogJ2FyaWEtdmFsdWVub3cnLFxuICAgIENIQU5HRV9FVkVOVDogJ01EQ1NsaWRlcjpjaGFuZ2UnLFxuICAgIElOUFVUX0VWRU5UOiAnTURDU2xpZGVyOmlucHV0JyxcbiAgICBMQVNUX1RSQUNLX01BUktFUl9TRUxFQ1RPUjogJy5tZGMtc2xpZGVyX190cmFjay1tYXJrZXI6bGFzdC1jaGlsZCcsXG4gICAgUElOX1ZBTFVFX01BUktFUl9TRUxFQ1RPUjogJy5tZGMtc2xpZGVyX19waW4tdmFsdWUtbWFya2VyJyxcbiAgICBTVEVQX0RBVEFfQVRUUjogJ2RhdGEtc3RlcCcsXG4gICAgVEhVTUJfQ09OVEFJTkVSX1NFTEVDVE9SOiAnLm1kYy1zbGlkZXJfX3RodW1iLWNvbnRhaW5lcicsXG4gICAgVFJBQ0tfTUFSS0VSX0NPTlRBSU5FUl9TRUxFQ1RPUjogJy5tZGMtc2xpZGVyX190cmFjay1tYXJrZXItY29udGFpbmVyJyxcbiAgICBUUkFDS19TRUxFQ1RPUjogJy5tZGMtc2xpZGVyX190cmFjaycsXG59O1xudmFyIG51bWJlcnMgPSB7XG4gICAgUEFHRV9GQUNUT1I6IDQsXG59O1xuZXhwb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVycyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGdldENvcnJlY3RFdmVudE5hbWUsIGdldENvcnJlY3RQcm9wZXJ0eU5hbWUgfSBmcm9tICdAbWF0ZXJpYWwvYW5pbWF0aW9uL3V0aWwnO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBET1dOX0VWRU5UUyA9IFsnbW91c2Vkb3duJywgJ3BvaW50ZXJkb3duJywgJ3RvdWNoc3RhcnQnXTtcbnZhciBVUF9FVkVOVFMgPSBbJ21vdXNldXAnLCAncG9pbnRlcnVwJywgJ3RvdWNoZW5kJ107XG52YXIgTU9WRV9FVkVOVF9NQVAgPSB7XG4gICAgbW91c2Vkb3duOiAnbW91c2Vtb3ZlJyxcbiAgICBwb2ludGVyZG93bjogJ3BvaW50ZXJtb3ZlJyxcbiAgICB0b3VjaHN0YXJ0OiAndG91Y2htb3ZlJyxcbn07XG52YXIgS0VZX0lEUyA9IHtcbiAgICBBUlJPV19ET1dOOiAnQXJyb3dEb3duJyxcbiAgICBBUlJPV19MRUZUOiAnQXJyb3dMZWZ0JyxcbiAgICBBUlJPV19SSUdIVDogJ0Fycm93UmlnaHQnLFxuICAgIEFSUk9XX1VQOiAnQXJyb3dVcCcsXG4gICAgRU5EOiAnRW5kJyxcbiAgICBIT01FOiAnSG9tZScsXG4gICAgUEFHRV9ET1dOOiAnUGFnZURvd24nLFxuICAgIFBBR0VfVVA6ICdQYWdlVXAnLFxufTtcbnZhciBNRENTbGlkZXJGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1NsaWRlckZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDU2xpZGVyRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ1NsaWRlckZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2Ugc2V0IHRoaXMgdG8gTmFOIHNpbmNlIHdlIHdhbnQgaXQgdG8gYmUgYSBudW1iZXIsIGJ1dCB3ZSBjYW4ndCB1c2UgJzAnIG9yICctMSdcbiAgICAgICAgICogYmVjYXVzZSB0aG9zZSBjb3VsZCBiZSB2YWxpZCB0YWJpbmRpY2VzIHNldCBieSB0aGUgY2xpZW50IGNvZGUuXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5zYXZlZFRhYkluZGV4XyA9IE5hTjtcbiAgICAgICAgX3RoaXMuYWN0aXZlXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pblRyYW5zaXRfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzRGlzY3JldGVfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmhhc1RyYWNrTWFya2VyXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5oYW5kbGluZ1RodW1iVGFyZ2V0RXZ0XyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5taW5fID0gMDtcbiAgICAgICAgX3RoaXMubWF4XyA9IDEwMDtcbiAgICAgICAgX3RoaXMuc3RlcF8gPSAwO1xuICAgICAgICBfdGhpcy52YWx1ZV8gPSAwO1xuICAgICAgICBfdGhpcy5kaXNhYmxlZF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMucHJldmVudEZvY3VzU3RhdGVfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnRodW1iQ29udGFpbmVyUG9pbnRlckhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxpbmdUaHVtYlRhcmdldEV2dF8gPSB0cnVlOyB9O1xuICAgICAgICBfdGhpcy5pbnRlcmFjdGlvblN0YXJ0SGFuZGxlcl8gPSBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBfdGhpcy5oYW5kbGVEb3duXyhldnQpOyB9O1xuICAgICAgICBfdGhpcy5rZXlkb3duSGFuZGxlcl8gPSBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBfdGhpcy5oYW5kbGVLZXlkb3duXyhldnQpOyB9O1xuICAgICAgICBfdGhpcy5mb2N1c0hhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlRm9jdXNfKCk7IH07XG4gICAgICAgIF90aGlzLmJsdXJIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUJsdXJfKCk7IH07XG4gICAgICAgIF90aGlzLnJlc2l6ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubGF5b3V0KCk7IH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1NsaWRlckZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENTbGlkZXJGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDU2xpZGVyRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1NsaWRlckZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0QXR0cmlidXRlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUF0dHJpYnV0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBnZXRUYWJJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlclRodW1iQ29udGFpbmVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlclRodW1iQ29udGFpbmVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJCb2R5SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckJvZHlJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeUlucHV0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5Q2hhbmdlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0VGh1bWJDb250YWluZXJTdHlsZVByb3BlcnR5OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0VHJhY2tTdHlsZVByb3BlcnR5OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0TWFya2VyVmFsdWU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBhcHBlbmRUcmFja01hcmtlcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVUcmFja01hcmtlcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRMYXN0VHJhY2tNYXJrZXJzU3R5bGVQcm9wZXJ0eTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGlzUlRMOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmlzRGlzY3JldGVfID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLklTX0RJU0NSRVRFKTtcbiAgICAgICAgdGhpcy5oYXNUcmFja01hcmtlcl8gPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuSEFTX1RSQUNLX01BUktFUik7XG4gICAgICAgIERPV05fRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2dE5hbWUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dE5hbWUsIF90aGlzLmludGVyYWN0aW9uU3RhcnRIYW5kbGVyXyk7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZWdpc3RlclRodW1iQ29udGFpbmVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dE5hbWUsIF90aGlzLnRodW1iQ29udGFpbmVyUG9pbnRlckhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleWRvd24nLCB0aGlzLmtleWRvd25IYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMubGF5b3V0KCk7XG4gICAgICAgIC8vIEF0IGxhc3Qgc3RlcCwgcHJvdmlkZSBhIHJlYXNvbmFibGUgZGVmYXVsdCB2YWx1ZSB0byBkaXNjcmV0ZSBzbGlkZXJcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNjcmV0ZV8gJiYgdGhpcy5nZXRTdGVwKCkgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcF8gPSAxO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBET1dOX0VWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldnROYW1lKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dE5hbWUsIF90aGlzLmludGVyYWN0aW9uU3RhcnRIYW5kbGVyXyk7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyVGh1bWJDb250YWluZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0TmFtZSwgX3RoaXMudGh1bWJDb250YWluZXJQb2ludGVySGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXlkb3duJywgdGhpcy5rZXlkb3duSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgIH07XG4gICAgTURDU2xpZGVyRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0dXBUcmFja01hcmtlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNjcmV0ZV8gJiYgdGhpcy5oYXNUcmFja01hcmtlcl8gJiYgdGhpcy5nZXRTdGVwKCkgIT09IDApIHtcbiAgICAgICAgICAgIHZhciBtaW4gPSB0aGlzLmdldE1pbigpO1xuICAgICAgICAgICAgdmFyIG1heCA9IHRoaXMuZ2V0TWF4KCk7XG4gICAgICAgICAgICB2YXIgc3RlcCA9IHRoaXMuZ2V0U3RlcCgpO1xuICAgICAgICAgICAgdmFyIG51bU1hcmtlcnMgPSAobWF4IC0gbWluKSAvIHN0ZXA7XG4gICAgICAgICAgICAvLyBJbiBjYXNlIGRpc3RhbmNlIGJldHdlZW4gbWF4ICYgbWluIGlzIGluZGl2aXNpYmxlIHRvIHN0ZXAsXG4gICAgICAgICAgICAvLyB3ZSBwbGFjZSB0aGUgc2Vjb25kYXJ5IHRvIGxhc3QgbWFya2VyIHByb3BvcnRpb25hbGx5IGF0IHdoZXJlIHRodW1iXG4gICAgICAgICAgICAvLyBjb3VsZCByZWFjaCBhbmQgcGxhY2UgdGhlIGxhc3QgbWFya2VyIGF0IG1heCB2YWx1ZVxuICAgICAgICAgICAgdmFyIGluZGl2aXNpYmxlID0gTWF0aC5jZWlsKG51bU1hcmtlcnMpICE9PSBudW1NYXJrZXJzO1xuICAgICAgICAgICAgaWYgKGluZGl2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgbnVtTWFya2VycyA9IE1hdGguY2VpbChudW1NYXJrZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlVHJhY2tNYXJrZXJzKCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFwcGVuZFRyYWNrTWFya2VycyhudW1NYXJrZXJzKTtcbiAgICAgICAgICAgIGlmIChpbmRpdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciBsYXN0U3RlcFJhdGlvID0gKG1heCAtIG51bU1hcmtlcnMgKiBzdGVwKSAvIHN0ZXAgKyAxO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0TGFzdFRyYWNrTWFya2Vyc1N0eWxlUHJvcGVydHkoJ2ZsZXgtZ3JvdycsIFN0cmluZyhsYXN0U3RlcFJhdGlvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZWN0XyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVVJRm9yQ3VycmVudFZhbHVlXygpO1xuICAgIH07XG4gICAgTURDU2xpZGVyRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlXztcbiAgICB9O1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWVfKHZhbHVlLCBmYWxzZSk7XG4gICAgfTtcbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRNYXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1heF87XG4gICAgfTtcbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRNYXggPSBmdW5jdGlvbiAobWF4KSB7XG4gICAgICAgIGlmIChtYXggPCB0aGlzLm1pbl8pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHNldCBtYXggdG8gYmUgbGVzcyB0aGFuIHRoZSBzbGlkZXJcXCdzIG1pbmltdW0gdmFsdWUnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1heF8gPSBtYXg7XG4gICAgICAgIHRoaXMuc2V0VmFsdWVfKHRoaXMudmFsdWVfLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlKHN0cmluZ3MuQVJJQV9WQUxVRU1BWCwgU3RyaW5nKHRoaXMubWF4XykpO1xuICAgICAgICB0aGlzLnNldHVwVHJhY2tNYXJrZXIoKTtcbiAgICB9O1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmdldE1pbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluXztcbiAgICB9O1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLnNldE1pbiA9IGZ1bmN0aW9uIChtaW4pIHtcbiAgICAgICAgaWYgKG1pbiA+IHRoaXMubWF4Xykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgc2V0IG1pbiB0byBiZSBncmVhdGVyIHRoYW4gdGhlIHNsaWRlclxcJ3MgbWF4aW11bSB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWluXyA9IG1pbjtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZV8odGhpcy52YWx1ZV8sIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX1ZBTFVFTUlOLCBTdHJpbmcodGhpcy5taW5fKSk7XG4gICAgICAgIHRoaXMuc2V0dXBUcmFja01hcmtlcigpO1xuICAgIH07XG4gICAgTURDU2xpZGVyRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0U3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RlcF87XG4gICAgfTtcbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTdGVwID0gZnVuY3Rpb24gKHN0ZXApIHtcbiAgICAgICAgaWYgKHN0ZXAgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0ZXAgY2Fubm90IGJlIHNldCB0byBhIG5lZ2F0aXZlIG51bWJlcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzRGlzY3JldGVfICYmICh0eXBlb2YgKHN0ZXApICE9PSAnbnVtYmVyJyB8fCBzdGVwIDwgMSkpIHtcbiAgICAgICAgICAgIHN0ZXAgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RlcF8gPSBzdGVwO1xuICAgICAgICB0aGlzLnNldFZhbHVlXyh0aGlzLnZhbHVlXywgZmFsc2UsIHRydWUpO1xuICAgICAgICB0aGlzLnNldHVwVHJhY2tNYXJrZXIoKTtcbiAgICB9O1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmlzRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVkXztcbiAgICB9O1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLnNldERpc2FibGVkID0gZnVuY3Rpb24gKGRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWRfID0gZGlzYWJsZWQ7XG4gICAgICAgIHRoaXMudG9nZ2xlQ2xhc3NfKGNzc0NsYXNzZXMuRElTQUJMRUQsIHRoaXMuZGlzYWJsZWRfKTtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRfKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVkVGFiSW5kZXhfID0gdGhpcy5hZGFwdGVyXy5nZXRUYWJJbmRleCgpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX0RJU0FCTEVELCAndHJ1ZScpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHJpYnV0ZShzdHJpbmdzLkFSSUFfRElTQUJMRUQpO1xuICAgICAgICAgICAgaWYgKCFpc05hTih0aGlzLnNhdmVkVGFiSW5kZXhfKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIFN0cmluZyh0aGlzLnNhdmVkVGFiSW5kZXhfKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBpbnRlcmFjdGluZyB3aXRoIHRoZSBzbGlkZXJcbiAgICAgKi9cbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVEb3duXyA9IGZ1bmN0aW9uIChkb3duRXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRfKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmV2ZW50Rm9jdXNTdGF0ZV8gPSB0cnVlO1xuICAgICAgICB0aGlzLnNldEluVHJhbnNpdF8oIXRoaXMuaGFuZGxpbmdUaHVtYlRhcmdldEV2dF8pO1xuICAgICAgICB0aGlzLmhhbmRsaW5nVGh1bWJUYXJnZXRFdnRfID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlXyh0cnVlKTtcbiAgICAgICAgdmFyIG1vdmVIYW5kbGVyID0gZnVuY3Rpb24gKG1vdmVFdmVudCkge1xuICAgICAgICAgICAgX3RoaXMuaGFuZGxlTW92ZV8obW92ZUV2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG1vdmVFdmVudFR5cGUgPSBNT1ZFX0VWRU5UX01BUFtkb3duRXZlbnQudHlwZV07XG4gICAgICAgIC8vIE5vdGU6IHVwSGFuZGxlciBpcyBbZGVdcmVnaXN0ZXJlZCBvbiBBTEwgcG90ZW50aWFsIHBvaW50ZXItcmVsYXRlZCByZWxlYXNlIGV2ZW50IHR5cGVzLCBzaW5jZSBzb21lIGJyb3dzZXJzXG4gICAgICAgIC8vIGRvIG5vdCBhbHdheXMgZmlyZSB0aGVzZSBjb25zaXN0ZW50bHkgaW4gcGFpcnMuXG4gICAgICAgIC8vIChTZWUgaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvaXNzdWVzLzExOTIpXG4gICAgICAgIHZhciB1cEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVVcF8oKTtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJCb2R5SW50ZXJhY3Rpb25IYW5kbGVyKG1vdmVFdmVudFR5cGUsIG1vdmVIYW5kbGVyKTtcbiAgICAgICAgICAgIFVQX0VWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldnROYW1lKSB7IHJldHVybiBfdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyQm9keUludGVyYWN0aW9uSGFuZGxlcihldnROYW1lLCB1cEhhbmRsZXIpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckJvZHlJbnRlcmFjdGlvbkhhbmRsZXIobW92ZUV2ZW50VHlwZSwgbW92ZUhhbmRsZXIpO1xuICAgICAgICBVUF9FVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0TmFtZSkgeyByZXR1cm4gX3RoaXMuYWRhcHRlcl8ucmVnaXN0ZXJCb2R5SW50ZXJhY3Rpb25IYW5kbGVyKGV2dE5hbWUsIHVwSGFuZGxlcik7IH0pO1xuICAgICAgICB0aGlzLnNldFZhbHVlRnJvbUV2dF8oZG93bkV2ZW50KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIG1vdmVzIHRoZSBzbGlkZXJcbiAgICAgKi9cbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVNb3ZlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWVGcm9tRXZ0XyhldnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIncyBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZXIgZW5kc1xuICAgICAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVVwXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVfKGZhbHNlKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDaGFuZ2UoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBhZ2VYIG9mIHRoZSBldmVudFxuICAgICAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmdldFBhZ2VYXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgaWYgKGV2dC50YXJnZXRUb3VjaGVzICYmIGV2dC50YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBldnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZ0LnBhZ2VYO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc2xpZGVyIHZhbHVlIGZyb20gYW4gZXZlbnRcbiAgICAgKi9cbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRWYWx1ZUZyb21FdnRfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgcGFnZVggPSB0aGlzLmdldFBhZ2VYXyhldnQpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmNvbXB1dGVWYWx1ZUZyb21QYWdlWF8ocGFnZVgpO1xuICAgICAgICB0aGlzLnNldFZhbHVlXyh2YWx1ZSwgdHJ1ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgbmV3IHZhbHVlIGZyb20gdGhlIHBhZ2VYIHBvc2l0aW9uXG4gICAgICovXG4gICAgTURDU2xpZGVyRm91bmRhdGlvbi5wcm90b3R5cGUuY29tcHV0ZVZhbHVlRnJvbVBhZ2VYXyA9IGZ1bmN0aW9uIChwYWdlWCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBtYXggPSBfYS5tYXhfLCBtaW4gPSBfYS5taW5fO1xuICAgICAgICB2YXIgeFBvcyA9IHBhZ2VYIC0gdGhpcy5yZWN0Xy5sZWZ0O1xuICAgICAgICB2YXIgcGN0Q29tcGxldGUgPSB4UG9zIC8gdGhpcy5yZWN0Xy53aWR0aDtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNSVEwoKSkge1xuICAgICAgICAgICAgcGN0Q29tcGxldGUgPSAxIC0gcGN0Q29tcGxldGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRml0IHRoZSBwZXJjZW50YWdlIGNvbXBsZXRlIGJldHdlZW4gdGhlIHJhbmdlIFttaW4sbWF4XVxuICAgICAgICAvLyBieSByZW1hcHBpbmcgZnJvbSBbMCwgMV0gdG8gW21pbiwgbWluKyhtYXgtbWluKV0uXG4gICAgICAgIHJldHVybiBtaW4gKyBwY3RDb21wbGV0ZSAqIChtYXggLSBtaW4pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBrZXlkb3duIGV2ZW50c1xuICAgICAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUtleWRvd25fID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIga2V5SWQgPSB0aGlzLmdldEtleUlkXyhldnQpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlRm9yS2V5SWRfKGtleUlkKTtcbiAgICAgICAgaWYgKGlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByZXZlbnQgcGFnZSBmcm9tIHNjcm9sbGluZyBkdWUgdG8ga2V5IHByZXNzZXMgdGhhdCB3b3VsZCBub3JtYWxseSBzY3JvbGwgdGhlIHBhZ2VcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5GT0NVUyk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWVfKHZhbHVlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDaGFuZ2UoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbXB1dGVkIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgICovXG4gICAgTURDU2xpZGVyRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0S2V5SWRfID0gZnVuY3Rpb24gKGtiZEV2dCkge1xuICAgICAgICBpZiAoa2JkRXZ0LmtleSA9PT0gS0VZX0lEUy5BUlJPV19MRUZUIHx8IGtiZEV2dC5rZXlDb2RlID09PSAzNykge1xuICAgICAgICAgICAgcmV0dXJuIEtFWV9JRFMuQVJST1dfTEVGVDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2JkRXZ0LmtleSA9PT0gS0VZX0lEUy5BUlJPV19SSUdIVCB8fCBrYmRFdnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgICAgIHJldHVybiBLRVlfSURTLkFSUk9XX1JJR0hUO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrYmRFdnQua2V5ID09PSBLRVlfSURTLkFSUk9XX1VQIHx8IGtiZEV2dC5rZXlDb2RlID09PSAzOCkge1xuICAgICAgICAgICAgcmV0dXJuIEtFWV9JRFMuQVJST1dfVVA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtiZEV2dC5rZXkgPT09IEtFWV9JRFMuQVJST1dfRE9XTiB8fCBrYmRFdnQua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgICAgICAgIHJldHVybiBLRVlfSURTLkFSUk9XX0RPV047XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtiZEV2dC5rZXkgPT09IEtFWV9JRFMuSE9NRSB8fCBrYmRFdnQua2V5Q29kZSA9PT0gMzYpIHtcbiAgICAgICAgICAgIHJldHVybiBLRVlfSURTLkhPTUU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtiZEV2dC5rZXkgPT09IEtFWV9JRFMuRU5EIHx8IGtiZEV2dC5rZXlDb2RlID09PSAzNSkge1xuICAgICAgICAgICAgcmV0dXJuIEtFWV9JRFMuRU5EO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrYmRFdnQua2V5ID09PSBLRVlfSURTLlBBR0VfVVAgfHwga2JkRXZ0LmtleUNvZGUgPT09IDMzKSB7XG4gICAgICAgICAgICByZXR1cm4gS0VZX0lEUy5QQUdFX1VQO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrYmRFdnQua2V5ID09PSBLRVlfSURTLlBBR0VfRE9XTiB8fCBrYmRFdnQua2V5Q29kZSA9PT0gMzQpIHtcbiAgICAgICAgICAgIHJldHVybiBLRVlfSURTLlBBR0VfRE9XTjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgdmFsdWUgZ2l2ZW4gYSBrZXlib2FyZCBrZXkgSURcbiAgICAgKi9cbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRWYWx1ZUZvcktleUlkXyA9IGZ1bmN0aW9uIChrZXlJZCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBtYXggPSBfYS5tYXhfLCBtaW4gPSBfYS5taW5fLCBzdGVwID0gX2Euc3RlcF87XG4gICAgICAgIHZhciBkZWx0YSA9IHN0ZXAgfHwgKG1heCAtIG1pbikgLyAxMDA7XG4gICAgICAgIHZhciB2YWx1ZU5lZWRzVG9CZUZsaXBwZWQgPSB0aGlzLmFkYXB0ZXJfLmlzUlRMKCkgJiYgKGtleUlkID09PSBLRVlfSURTLkFSUk9XX0xFRlQgfHwga2V5SWQgPT09IEtFWV9JRFMuQVJST1dfUklHSFQpO1xuICAgICAgICBpZiAodmFsdWVOZWVkc1RvQmVGbGlwcGVkKSB7XG4gICAgICAgICAgICBkZWx0YSA9IC1kZWx0YTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGtleUlkKSB7XG4gICAgICAgICAgICBjYXNlIEtFWV9JRFMuQVJST1dfTEVGVDpcbiAgICAgICAgICAgIGNhc2UgS0VZX0lEUy5BUlJPV19ET1dOOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlXyAtIGRlbHRhO1xuICAgICAgICAgICAgY2FzZSBLRVlfSURTLkFSUk9XX1JJR0hUOlxuICAgICAgICAgICAgY2FzZSBLRVlfSURTLkFSUk9XX1VQOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlXyArIGRlbHRhO1xuICAgICAgICAgICAgY2FzZSBLRVlfSURTLkhPTUU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWluXztcbiAgICAgICAgICAgIGNhc2UgS0VZX0lEUy5FTkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF4XztcbiAgICAgICAgICAgIGNhc2UgS0VZX0lEUy5QQUdFX1VQOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlXyArIGRlbHRhICogbnVtYmVycy5QQUdFX0ZBQ1RPUjtcbiAgICAgICAgICAgIGNhc2UgS0VZX0lEUy5QQUdFX0RPV046XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVfIC0gZGVsdGEgKiBudW1iZXJzLlBBR0VfRkFDVE9SO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVGb2N1c18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnByZXZlbnRGb2N1c1N0YXRlXykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5GT0NVUyk7XG4gICAgfTtcbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVCbHVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wcmV2ZW50Rm9jdXNTdGF0ZV8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkZPQ1VTKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSBzbGlkZXJcbiAgICAgKi9cbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRWYWx1ZV8gPSBmdW5jdGlvbiAodmFsdWUsIHNob3VsZEZpcmVJbnB1dCwgZm9yY2UpIHtcbiAgICAgICAgaWYgKGZvcmNlID09PSB2b2lkIDApIHsgZm9yY2UgPSBmYWxzZTsgfVxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMudmFsdWVfICYmICFmb3JjZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIG1pbiA9IF9hLm1pbl8sIG1heCA9IF9hLm1heF87XG4gICAgICAgIHZhciB2YWx1ZVNldFRvQm91bmRhcnkgPSB2YWx1ZSA9PT0gbWluIHx8IHZhbHVlID09PSBtYXg7XG4gICAgICAgIGlmICh0aGlzLnN0ZXBfICYmICF2YWx1ZVNldFRvQm91bmRhcnkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5xdWFudGl6ZV8odmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA8IG1pbikge1xuICAgICAgICAgICAgdmFsdWUgPSBtaW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPiBtYXgpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbWF4O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWVfID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlKHN0cmluZ3MuQVJJQV9WQUxVRU5PVywgU3RyaW5nKHRoaXMudmFsdWVfKSk7XG4gICAgICAgIHRoaXMudXBkYXRlVUlGb3JDdXJyZW50VmFsdWVfKCk7XG4gICAgICAgIGlmIChzaG91bGRGaXJlSW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5SW5wdXQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRGlzY3JldGVfKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRNYXJrZXJWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHF1YW50aXplZCB2YWx1ZVxuICAgICAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLnF1YW50aXplXyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgbnVtU3RlcHMgPSBNYXRoLnJvdW5kKHZhbHVlIC8gdGhpcy5zdGVwXyk7XG4gICAgICAgIHJldHVybiBudW1TdGVwcyAqIHRoaXMuc3RlcF87XG4gICAgfTtcbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVVSUZvckN1cnJlbnRWYWx1ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIG1heCA9IF9hLm1heF8sIG1pbiA9IF9hLm1pbl8sIHZhbHVlID0gX2EudmFsdWVfO1xuICAgICAgICB2YXIgcGN0Q29tcGxldGUgPSAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbik7XG4gICAgICAgIHZhciB0cmFuc2xhdGVQeCA9IHBjdENvbXBsZXRlICogdGhpcy5yZWN0Xy53aWR0aDtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNSVEwoKSkge1xuICAgICAgICAgICAgdHJhbnNsYXRlUHggPSB0aGlzLnJlY3RfLndpZHRoIC0gdHJhbnNsYXRlUHg7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRyYW5zZm9ybVByb3AgPSBnZXRDb3JyZWN0UHJvcGVydHlOYW1lKHdpbmRvdywgJ3RyYW5zZm9ybScpO1xuICAgICAgICB2YXIgdHJhbnNpdGlvbmVuZEV2dE5hbWUgPSBnZXRDb3JyZWN0RXZlbnROYW1lKHdpbmRvdywgJ3RyYW5zaXRpb25lbmQnKTtcbiAgICAgICAgaWYgKHRoaXMuaW5UcmFuc2l0Xykge1xuICAgICAgICAgICAgdmFyIG9uVHJhbnNpdGlvbkVuZF8xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldEluVHJhbnNpdF8oZmFsc2UpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJUaHVtYkNvbnRhaW5lckludGVyYWN0aW9uSGFuZGxlcih0cmFuc2l0aW9uZW5kRXZ0TmFtZSwgb25UcmFuc2l0aW9uRW5kXzEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJUaHVtYkNvbnRhaW5lckludGVyYWN0aW9uSGFuZGxlcih0cmFuc2l0aW9uZW5kRXZ0TmFtZSwgb25UcmFuc2l0aW9uRW5kXzEpO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBJdCB3b3VsZCBiZSBuaWNlIHRvIHVzZSBjYWxjKCkgaGVyZSxcbiAgICAgICAgICAgIC8vIGJ1dCBJRSBjYW5ub3QgaGFuZGxlIGNhbGNzIGluIHRyYW5zZm9ybXMgY29ycmVjdGx5LlxuICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2dvby5nbC9OQzJpdGtcbiAgICAgICAgICAgIC8vIEFsc28gbm90ZSB0aGF0IHRoZSAtNTAlIG9mZnNldCBpcyB1c2VkIHRvIGNlbnRlciB0aGUgc2xpZGVyIHRodW1iLlxuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uc2V0VGh1bWJDb250YWluZXJTdHlsZVByb3BlcnR5KHRyYW5zZm9ybVByb3AsIFwidHJhbnNsYXRlWChcIiArIHRyYW5zbGF0ZVB4ICsgXCJweCkgdHJhbnNsYXRlWCgtNTAlKVwiKTtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnNldFRyYWNrU3R5bGVQcm9wZXJ0eSh0cmFuc2Zvcm1Qcm9wLCBcInNjYWxlWChcIiArIHBjdENvbXBsZXRlICsgXCIpXCIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGFjdGl2ZSBzdGF0ZSBvZiB0aGUgc2xpZGVyXG4gICAgICovXG4gICAgTURDU2xpZGVyRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0QWN0aXZlXyA9IGZ1bmN0aW9uIChhY3RpdmUpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVfID0gYWN0aXZlO1xuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzXyhjc3NDbGFzc2VzLkFDVElWRSwgdGhpcy5hY3RpdmVfKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGluVHJhbnNpdCBzdGF0ZSBvZiB0aGUgc2xpZGVyXG4gICAgICovXG4gICAgTURDU2xpZGVyRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0SW5UcmFuc2l0XyA9IGZ1bmN0aW9uIChpblRyYW5zaXQpIHtcbiAgICAgICAgdGhpcy5pblRyYW5zaXRfID0gaW5UcmFuc2l0O1xuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzXyhjc3NDbGFzc2VzLklOX1RSQU5TSVQsIHRoaXMuaW5UcmFuc2l0Xyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb25kaXRpb25hbGx5IGFkZHMgb3IgcmVtb3ZlcyBhIGNsYXNzIGJhc2VkIG9uIHNob3VsZEJlUHJlc2VudFxuICAgICAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLnRvZ2dsZUNsYXNzXyA9IGZ1bmN0aW9uIChjbGFzc05hbWUsIHNob3VsZEJlUHJlc2VudCkge1xuICAgICAgICBpZiAoc2hvdWxkQmVQcmVzZW50KSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENTbGlkZXJGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENTbGlkZXJGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDU2xpZGVyRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiXG4gICAgY2xhc3M9XCJtZGMtc2xpZGVyXCJcbiAgICB0YWJpbmRleD1cIjBcIlxuICAgIHJvbGU9XCJzbGlkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWRjLXNsaWRlcl9fdHJhY2stY29udGFpbmVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIDpzdHlsZT1cInRyYWNrU3R5bGVzXCJcbiAgICAgICAgY2xhc3M9XCJtZGMtc2xpZGVyX190cmFja1wiLz5cbiAgICAgIDxkaXZcbiAgICAgICAgdi1pZj1cImhhc01hcmtlcnNcIlxuICAgICAgICBjbGFzcz1cIm1kYy1zbGlkZXJfX3RyYWNrLW1hcmtlci1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHYtZm9yPVwibWFya2VyTnVtIGluIG51bU1hcmtlcnNcIlxuICAgICAgICAgIDprZXk9XCJtYXJrZXJOdW1cIlxuICAgICAgICAgIDpzdHlsZT1cIihtYXJrZXJOdW0gPT0gbnVtTWFya2VycykgPyBsYXN0VHJhY2tNYXJrZXJzU3R5bGVzIDoge31cIlxuICAgICAgICAgIGNsYXNzPVwibWRjLXNsaWRlcl9fdHJhY2stbWFya2VyXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgIHJlZj1cInRodW1iQ29udGFpbmVyXCJcbiAgICAgIDpzdHlsZT1cInRodW1iU3R5bGVzXCJcbiAgICAgIGNsYXNzPVwibWRjLXNsaWRlcl9fdGh1bWItY29udGFpbmVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIHYtaWY9XCJpc0Rpc2NyZXRlXCJcbiAgICAgICAgY2xhc3M9XCJtZGMtc2xpZGVyX19waW5cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtc2xpZGVyX19waW4tdmFsdWUtbWFya2VyXCI+e3sgbWFya2VyVmFsdWUgfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3M9XCJtZGMtc2xpZGVyX190aHVtYlwiXG4gICAgICAgIHdpZHRoPVwiMjFcIlxuICAgICAgICBoZWlnaHQ9XCIyMVwiPlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgY3g9XCIxMC41XCJcbiAgICAgICAgICBjeT1cIjEwLjVcIlxuICAgICAgICAgIHI9XCI3Ljg3NVwiLz5cbiAgICAgIDwvc3ZnPlxuICAgICAgPGRpdiBjbGFzcz1cIm1kYy1zbGlkZXJfX2ZvY3VzLXJpbmdcIi8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENTbGlkZXJGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9zbGlkZXIvZm91bmRhdGlvbidcbmltcG9ydCB7IERpc3BhdGNoRm9jdXNNaXhpbiwgYXBwbHlQYXNzaXZlIH0gZnJvbSAnLi4vYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXNsaWRlcicsXG4gIG1peGluczogW0Rpc3BhdGNoRm9jdXNNaXhpbl0sXG4gIG1vZGVsOiB7XG4gICAgcHJvcDogJ3ZhbHVlJyxcbiAgICBldmVudDogJ2NoYW5nZSdcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICB2YWx1ZTogW051bWJlciwgU3RyaW5nXSxcbiAgICBtaW46IHsgdHlwZTogW051bWJlciwgU3RyaW5nXSwgZGVmYXVsdDogMCB9LFxuICAgIG1heDogeyB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLCBkZWZhdWx0OiAxMDAgfSxcbiAgICBzdGVwOiB7IHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sIGRlZmF1bHQ6IDAgfSxcbiAgICBkaXNwbGF5TWFya2VyczogQm9vbGVhbixcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBsYXlvdXRPbjogU3RyaW5nLFxuICAgIGxheW91dE9uU291cmNlOiB7IHR5cGU6IE9iamVjdCwgcmVxdWlyZWQ6IGZhbHNlIH1cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICAnbWRjLXNsaWRlci0tZGlzY3JldGUnOiAhIXRoaXMuc3RlcCxcbiAgICAgICAgJ21kYy1zbGlkZXItLWRpc3BsYXktbWFya2Vycyc6IHRoaXMuZGlzcGxheU1hcmtlcnNcbiAgICAgIH0sXG4gICAgICB0cmFja1N0eWxlczoge30sXG4gICAgICBsYXN0VHJhY2tNYXJrZXJzU3R5bGVzOiB7fSxcbiAgICAgIHRodW1iU3R5bGVzOiB7fSxcbiAgICAgIG1hcmtlclZhbHVlOiAnJyxcbiAgICAgIG51bU1hcmtlcnM6IDBcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaXNEaXNjcmV0ZSgpIHtcbiAgICAgIHJldHVybiAhIXRoaXMuc3RlcFxuICAgIH0sXG4gICAgaGFzTWFya2VycygpIHtcbiAgICAgIHJldHVybiAhIXRoaXMuc3RlcCAmJiB0aGlzLmRpc3BsYXlNYXJrZXJzICYmIHRoaXMubnVtTWFya2Vyc1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZSgpIHtcbiAgICAgIGlmICh0aGlzLmZvdW5kYXRpb24uZ2V0VmFsdWUoKSAhPT0gTnVtYmVyKHRoaXMudmFsdWUpKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRWYWx1ZSh0aGlzLnZhbHVlKVxuICAgICAgfVxuICAgIH0sXG4gICAgbWluKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldE1pbihOdW1iZXIodGhpcy5taW4pKVxuICAgIH0sXG4gICAgbWF4KCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldE1heChOdW1iZXIodGhpcy5tYXgpKVxuICAgIH0sXG4gICAgc3RlcCgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRTdGVwKE51bWJlcih0aGlzLnN0ZXApKVxuICAgIH0sXG4gICAgZGlzYWJsZWQoKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0RGlzYWJsZWQodGhpcy5kaXNhYmxlZClcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ1NsaWRlckZvdW5kYXRpb24oe1xuICAgICAgaGFzQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcbiAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICB9LFxuICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgIHRoaXMuJGRlbGV0ZSh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgIH0sXG4gICAgICBnZXRBdHRyaWJ1dGU6IG5hbWUgPT4gdGhpcy4kZWwuZ2V0QXR0cmlidXRlKG5hbWUpLFxuICAgICAgc2V0QXR0cmlidXRlOiAobmFtZSwgdmFsdWUpID0+IHRoaXMuJGVsLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSksXG4gICAgICByZW1vdmVBdHRyaWJ1dGU6IG5hbWUgPT4gdGhpcy4kZWwucmVtb3ZlQXR0cmlidXRlKG5hbWUpLFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gdGhpcy4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBnZXRUYWJJbmRleDogKCkgPT4gdGhpcy4kZWwudGFiSW5kZXgsXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKHR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgIH0sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAodHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICB0aGlzLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVyVGh1bWJDb250YWluZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICh0eXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgIHRoaXMuJHJlZnMudGh1bWJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIGRlcmVnaXN0ZXJUaHVtYkNvbnRhaW5lckludGVyYWN0aW9uSGFuZGxlcjogKHR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgdGhpcy4kcmVmcy50aHVtYkNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICApXG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXJCb2R5SW50ZXJhY3Rpb25IYW5kbGVyOiAodHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlcilcbiAgICAgIH0sXG4gICAgICBkZXJlZ2lzdGVyQm9keUludGVyYWN0aW9uSGFuZGxlcjogKHR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIpXG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICB9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgIH0sXG4gICAgICBub3RpZnlJbnB1dDogKCkgPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMuZm91bmRhdGlvbi5nZXRWYWx1ZSgpKVxuICAgICAgfSxcbiAgICAgIG5vdGlmeUNoYW5nZTogKCkgPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLmZvdW5kYXRpb24uZ2V0VmFsdWUoKSlcbiAgICAgIH0sXG4gICAgICBzZXRUaHVtYkNvbnRhaW5lclN0eWxlUHJvcGVydHk6IChwcm9wZXJ0eU5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLnRodW1iU3R5bGVzLCBwcm9wZXJ0eU5hbWUsIHZhbHVlKVxuICAgICAgfSxcbiAgICAgIHNldFRyYWNrU3R5bGVQcm9wZXJ0eTogKHByb3BlcnR5TmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMudHJhY2tTdHlsZXMsIHByb3BlcnR5TmFtZSwgdmFsdWUpXG4gICAgICB9LFxuICAgICAgc2V0TWFya2VyVmFsdWU6IHZhbHVlID0+IHtcbiAgICAgICAgdGhpcy5tYXJrZXJWYWx1ZSA9IHZhbHVlXG4gICAgICB9LFxuICAgICAgYXBwZW5kVHJhY2tNYXJrZXJzOiBudW1NYXJrZXJzID0+IHtcbiAgICAgICAgdGhpcy5udW1NYXJrZXJzID0gbnVtTWFya2Vyc1xuICAgICAgfSxcbiAgICAgIHJlbW92ZVRyYWNrTWFya2VyczogKCkgPT4ge1xuICAgICAgICB0aGlzLm51bU1hcmtlcnMgPSAwXG4gICAgICB9LFxuICAgICAgc2V0TGFzdFRyYWNrTWFya2Vyc1N0eWxlUHJvcGVydHk6IChwcm9wZXJ0eU5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLmxhc3RUcmFja01hcmtlcnNTdHlsZXMsIHByb3BlcnR5TmFtZSwgdmFsdWUpXG4gICAgICB9LFxuICAgICAgaXNSVEw6ICgpID0+IGZhbHNlXG4gICAgfSlcblxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcbiAgICB0aGlzLmZvdW5kYXRpb24uc2V0RGlzYWJsZWQodGhpcy5kaXNhYmxlZClcbiAgICBpZiAoTnVtYmVyKHRoaXMubWluKSA8PSB0aGlzLmZvdW5kYXRpb24uZ2V0TWF4KCkpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRNaW4oTnVtYmVyKHRoaXMubWluKSlcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRNYXgoTnVtYmVyKHRoaXMubWF4KSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldE1heChOdW1iZXIodGhpcy5tYXgpKVxuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldE1pbihOdW1iZXIodGhpcy5taW4pKVxuICAgIH1cbiAgICB0aGlzLmZvdW5kYXRpb24uc2V0U3RlcChOdW1iZXIodGhpcy5zdGVwKSlcbiAgICB0aGlzLmZvdW5kYXRpb24uc2V0VmFsdWUoTnVtYmVyKHRoaXMudmFsdWUpKVxuICAgIGlmICh0aGlzLmhhc01hcmtlcnMpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXR1cFRyYWNrTWFya2VyKClcbiAgICB9XG5cbiAgICB0aGlzLiRyb290LiRvbigndm1hOmxheW91dCcsIHRoaXMubGF5b3V0KVxuXG4gICAgaWYgKHRoaXMubGF5b3V0T24pIHtcbiAgICAgIHRoaXMubGF5b3V0T25FdmVudFNvdXJjZSA9IHRoaXMubGF5b3V0T25Tb3VyY2UgfHwgdGhpcy4kcm9vdFxuICAgICAgdGhpcy5sYXlvdXRPbkV2ZW50U291cmNlLiRvbih0aGlzLmxheW91dE9uLCB0aGlzLmxheW91dClcbiAgICB9XG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy4kcm9vdC4kb2ZmKCd2bWE6bGF5b3V0JywgdGhpcy5sYXlvdXQpXG4gICAgaWYgKHRoaXMubGF5b3V0T25FdmVudFNvdXJjZSkge1xuICAgICAgdGhpcy5sYXlvdXRPbkV2ZW50U291cmNlLiRvZmYodGhpcy5sYXlvdXRPbiwgdGhpcy5sYXlvdXQpXG4gICAgfVxuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGxheW91dCgpIHtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uICYmIHRoaXMuZm91bmRhdGlvbi5sYXlvdXQoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgbWRjU2xpZGVyIGZyb20gJy4vbWRjLXNsaWRlci52dWUnXG5cbmV4cG9ydCB7IG1kY1NsaWRlciB9XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VQbHVnaW4oe1xuICBtZGNTbGlkZXJcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbInN1cHBvcnRzUGFzc2l2ZV8iLCJhcHBseVBhc3NpdmUiLCJnbG9iYWxPYmoiLCJ3aW5kb3ciLCJmb3JjZVJlZnJlc2giLCJ1bmRlZmluZWQiLCJpc1N1cHBvcnRlZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJlIiwiYXV0b0luaXQiLCJwbHVnaW4iLCJfVnVlIiwiVnVlIiwiZ2xvYmFsIiwidXNlIiwiQmFzZVBsdWdpbiIsImNvbXBvbmVudHMiLCJ2ZXJzaW9uIiwiaW5zdGFsbCIsInZtIiwia2V5IiwiY29tcG9uZW50IiwibmFtZSIsIkRpc3BhdGNoRm9jdXNNaXhpbiIsImRhdGEiLCJoYXNGb2N1cyIsIm1ldGhvZHMiLCJvbk1vdXNlRG93biIsIl9hY3RpdmUiLCJvbk1vdXNlVXAiLCJvbkZvY3VzRXZlbnQiLCJzZXRUaW1lb3V0IiwiZGlzcGF0Y2hGb2N1c0V2ZW50Iiwib25CbHVyRXZlbnQiLCIkZWwiLCJhY3RpdmVFbGVtZW50IiwiY29udGFpbnMiLCIkZW1pdCIsIm1vdW50ZWQiLCJiZWZvcmVEZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjb3BlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsImhhc093blByb3BlcnR5IiwiX19leHRlbmRzIiwiX18iLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImNyZWF0ZSIsIl9fYXNzaWduIiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNhbGwiLCJhcHBseSIsInRzbGliXzEuX19leHRlbmRzIiwidHNsaWJfMS5fX2Fzc2lnbiIsIm1kY1NsaWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztFQUFBLElBQUlBLGdCQUFKO0VBRUE7Ozs7Ozs7QUFNQSxFQUFPLFNBQVNDLFlBQVQsR0FBZ0U7RUFBQSxNQUExQ0MsU0FBMEMsdUVBQTlCQyxNQUE4QjtFQUFBLE1BQXRCQyxZQUFzQix1RUFBUCxLQUFPOztFQUNyRSxNQUFJSixnQkFBZ0IsS0FBS0ssU0FBckIsSUFBa0NELFlBQXRDLEVBQW9EO0VBQ2xELFFBQUlFLFdBQVcsR0FBRyxLQUFsQjs7RUFDQSxRQUFJO0VBQ0ZKLE1BQUFBLFNBQVMsQ0FBQ0ssUUFBVixDQUFtQkMsZ0JBQW5CLENBQW9DLE1BQXBDLEVBQTRDLElBQTVDLEVBQWtEO0VBQ2hELFlBQUlDLE9BQUosR0FBYztFQUNaSCxVQUFBQSxXQUFXLEdBQUc7RUFBRUcsWUFBQUEsT0FBTyxFQUFFO0VBQVgsV0FBZDtFQUNEOztFQUgrQyxPQUFsRDtFQUtELEtBTkQsQ0FNRSxPQUFPQyxDQUFQLEVBQVU7RUFFWDs7RUFFRFYsSUFBQUEsZ0JBQWdCLEdBQUdNLFdBQW5CO0VBQ0Q7O0VBRUQsU0FBT04sZ0JBQVA7RUFDRDs7RUN6Qk0sU0FBU1csUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEI7RUFDL0I7RUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7RUFDQSxNQUFJLE9BQU9WLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7RUFDakNVLElBQUFBLElBQUksR0FBR1YsTUFBTSxDQUFDVyxHQUFkO0VBQ0QsR0FGRCxNQUVPLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztFQUN4QztFQUNBRixJQUFBQSxJQUFJLEdBQUdFLE1BQU0sQ0FBQ0QsR0FBZDtFQUNEOztFQUNELE1BQUlELElBQUosRUFBVTtFQUNSQSxJQUFB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
