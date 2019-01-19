/**
* @module vue-mdc-adapterslider 0.19.1-beta
* @exports VueMDCSlider
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
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

  var plugin = BasePlugin({
    mdcSlider: mdcSlider
  });

  autoInit(plugin);

  return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXBwbHktcGFzc2l2ZS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9hdXRvLWluaXQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYmFzZS1wbHVnaW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWV2ZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Rpc3BhdGNoLWZvY3VzLW1peGluLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zbGlkZXIvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zbGlkZXIvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYW5pbWF0aW9uL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NsaWRlci9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vY29tcG9uZW50cy9zbGlkZXIvbWRjLXNsaWRlci52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXJ1bnRpbWUtaGVscGVycy9ub3JtYWxpemUtY29tcG9uZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9zbGlkZXIvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3NsaWRlci9lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc3VwcG9ydHNQYXNzaXZlX1xuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZCBpZiBzbywgdXNlIHRoZW0uXG4gKiBAcGFyYW0geyFXaW5kb3c9fSBnbG9iYWxPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnx7cGFzc2l2ZTogYm9vbGVhbn19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBhc3NpdmUoZ2xvYmFsT2JqID0gd2luZG93LCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBpZiAoc3VwcG9ydHNQYXNzaXZlXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgIGxldCBpc1N1cHBvcnRlZCA9IGZhbHNlXG4gICAgdHJ5IHtcbiAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwge1xuICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICBpc1N1cHBvcnRlZCA9IHsgcGFzc2l2ZTogdHJ1ZSB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy9lbXB0eVxuICAgIH1cblxuICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZFxuICB9XG5cbiAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZV9cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCIvKiBnbG9iYWwgQ3VzdG9tRXZlbnQgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXRDdXN0b21FdmVudChlbCwgZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgbGV0IGV2dFxuICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpXG4gIH1cbiAgZWwuZGlzcGF0Y2hFdmVudChldnQpXG59XG4iLCJleHBvcnQgY29uc3QgRGlzcGF0Y2hGb2N1c01peGluID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7IGhhc0ZvY3VzOiBmYWxzZSB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbk1vdXNlRG93bigpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IHRydWVcbiAgICB9LFxuICAgIG9uTW91c2VVcCgpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlXG4gICAgfSxcbiAgICBvbkZvY3VzRXZlbnQoKSB7XG4gICAgICAvLyBkaXNwYXRjaCBhc3luYyB0byBsZXQgdGltZSB0byBvdGhlciBmb2N1cyBldmVudCB0byBwcm9wYWdhdGVcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kaXNwYXRjaEZvY3VzRXZlbnQoKSwgMClcbiAgICB9LFxuICAgIG9uQmx1ckV2ZW50KCkge1xuICAgICAgLy8gZGlzcGF0Y2ggYXN5bmMgdG8gbGV0IHRpbWUgdG8gb3RoZXIgZm9jdXMgZXZlbnQgdG8gcHJvcGFnYXRlXG4gICAgICAvLyBhbHNvIGZpbHR1ciBibHVyIGlmIG1vdXNlZG93blxuICAgICAgdGhpcy5fYWN0aXZlIHx8IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kaXNwYXRjaEZvY3VzRXZlbnQoKSwgMClcbiAgICB9LFxuICAgIGRpc3BhdGNoRm9jdXNFdmVudCgpIHtcbiAgICAgIGxldCBoYXNGb2N1cyA9XG4gICAgICAgIHRoaXMuJGVsID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50IHx8XG4gICAgICAgIHRoaXMuJGVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpXG4gICAgICBpZiAoaGFzRm9jdXMgIT0gdGhpcy5oYXNGb2N1cykge1xuICAgICAgICB0aGlzLiRlbWl0KGhhc0ZvY3VzID8gJ2ZvY3VzJyA6ICdibHVyJylcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGhhc0ZvY3VzXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLm9uRm9jdXNFdmVudClcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMub25CbHVyRXZlbnQpXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bilcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXApXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMub25Gb2N1c0V2ZW50KVxuICAgIHRoaXMuJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdGhpcy5vbkJsdXJFdmVudClcbiAgICB0aGlzLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duKVxuICAgIHRoaXMuJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcClcbiAgfVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIEFDVElWRTogJ21kYy1zbGlkZXItLWFjdGl2ZScsXG4gIERJU0FCTEVEOiAnbWRjLXNsaWRlci0tZGlzYWJsZWQnLFxuICBESVNDUkVURTogJ21kYy1zbGlkZXItLWRpc2NyZXRlJyxcbiAgRk9DVVM6ICdtZGMtc2xpZGVyLS1mb2N1cycsXG4gIElOX1RSQU5TSVQ6ICdtZGMtc2xpZGVyLS1pbi10cmFuc2l0JyxcbiAgSVNfRElTQ1JFVEU6ICdtZGMtc2xpZGVyLS1kaXNjcmV0ZScsXG4gIEhBU19UUkFDS19NQVJLRVI6ICdtZGMtc2xpZGVyLS1kaXNwbGF5LW1hcmtlcnMnLFxufTtcblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBzdHJpbmdzID0ge1xuICBUUkFDS19TRUxFQ1RPUjogJy5tZGMtc2xpZGVyX190cmFjaycsXG4gIFRSQUNLX01BUktFUl9DT05UQUlORVJfU0VMRUNUT1I6ICcubWRjLXNsaWRlcl9fdHJhY2stbWFya2VyLWNvbnRhaW5lcicsXG4gIExBU1RfVFJBQ0tfTUFSS0VSX1NFTEVDVE9SOiAnLm1kYy1zbGlkZXJfX3RyYWNrLW1hcmtlcjpsYXN0LWNoaWxkJyxcbiAgVEhVTUJfQ09OVEFJTkVSX1NFTEVDVE9SOiAnLm1kYy1zbGlkZXJfX3RodW1iLWNvbnRhaW5lcicsXG4gIFBJTl9WQUxVRV9NQVJLRVJfU0VMRUNUT1I6ICcubWRjLXNsaWRlcl9fcGluLXZhbHVlLW1hcmtlcicsXG4gIEFSSUFfVkFMVUVNSU46ICdhcmlhLXZhbHVlbWluJyxcbiAgQVJJQV9WQUxVRU1BWDogJ2FyaWEtdmFsdWVtYXgnLFxuICBBUklBX1ZBTFVFTk9XOiAnYXJpYS12YWx1ZW5vdycsXG4gIEFSSUFfRElTQUJMRUQ6ICdhcmlhLWRpc2FibGVkJyxcbiAgU1RFUF9EQVRBX0FUVFI6ICdkYXRhLXN0ZXAnLFxuICBDSEFOR0VfRVZFTlQ6ICdNRENTbGlkZXI6Y2hhbmdlJyxcbiAgSU5QVVRfRVZFTlQ6ICdNRENTbGlkZXI6aW5wdXQnLFxufTtcblxuLyoqIEBlbnVtIHtudW1iZXJ9ICovXG5jb25zdCBudW1iZXJzID0ge1xuICBQQUdFX0ZBQ1RPUjogNCxcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgU2xpZGVyLlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIFNsaWRlciBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDU2xpZGVyQWRhcHRlciB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgY2xhc3NOYW1lIGV4aXN0cyBmb3IgdGhlIHNsaWRlciBFbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogQWRkcyBhIGNsYXNzIHRvIHRoZSBzbGlkZXIgRWxlbWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBjbGFzcyBmcm9tIHRoZSBzbGlkZXIgRWxlbWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgaWYgYXR0cmlidXRlIG5hbWUgZXhpc3RzIG9uIHRoZSBzbGlkZXIgRWxlbWVudCxcbiAgICogb3RoZXJ3aXNlIHJldHVybnMgbnVsbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcmV0dXJuIHs/c3RyaW5nfVxuICAgKi9cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgYXR0cmlidXRlIG5hbWUgb24gc2xpZGVyIEVsZW1lbnQgdG8gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYXR0cmlidXRlIG5hbWUgZnJvbSBzbGlkZXIgRWxlbWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKi9cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJvdW5kaW5nIGNsaWVudCByZWN0IGZvciB0aGUgc2xpZGVyIEVsZW1lbnRcbiAgICogQHJldHVybiB7P0NsaWVudFJlY3R9XG4gICAqL1xuICBjb21wdXRlQm91bmRpbmdSZWN0KCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGFiIGluZGV4IG9mIHRoZSBzbGlkZXIgRWxlbWVudFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXRUYWJJbmRleCgpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBoYW5kbGVyIG9uIHRoZSByb290IGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEZXJlZ2lzdGVycyBhbiBldmVudCBoYW5kbGVyIG9uIHRoZSByb290IGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBoYW5kbGVyIG9uIHRoZSB0aHVtYiBjb250YWluZXIgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyVGh1bWJDb250YWluZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogRGVyZWdpc3RlcnMgYW4gZXZlbnQgaGFuZGxlciBvbiB0aGUgdGh1bWIgY29udGFpbmVyIGVsZW1lbnQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyVGh1bWJDb250YWluZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXIgb24gdGhlIGJvZHkgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckJvZHlJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogRGVyZWdpc3RlcnMgYW4gZXZlbnQgaGFuZGxlciBvbiB0aGUgYm9keSBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJCb2R5SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgd2luZG93IHJlc2l6ZSBldmVudFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSB3aW5kb3cgcmVzaXplIGV2ZW50XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhIGN1c3RvbSBldmVudCBNRENTbGlkZXI6aW5wdXQgZnJvbSB0aGUgcm9vdFxuICAgKi9cbiAgbm90aWZ5SW5wdXQoKSB7fVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhIGN1c3RvbSBldmVudCBNRENTbGlkZXI6Y2hhbmdlIGZyb20gdGhlIHJvb3RcbiAgICovXG4gIG5vdGlmeUNoYW5nZSgpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgdGh1bWIgY29udGFpbmVyIGVsZW1lbnQgdG8gdGhlIHBhc3NlZCB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlOYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgc2V0VGh1bWJDb250YWluZXJTdHlsZVByb3BlcnR5KHByb3BlcnR5TmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgdHJhY2sgZWxlbWVudCB0byB0aGUgcGFzc2VkIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXRUcmFja1N0eWxlUHJvcGVydHkocHJvcGVydHlOYW1lLCB2YWx1ZSkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgaW5uZXIgdGV4dCBvZiB0aGUgcGluIG1hcmtlciB0byB0aGUgcGFzc2VkIHZhbHVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgKi9cbiAgc2V0TWFya2VyVmFsdWUodmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhlIHBhc3NlZCBudW1iZXIgb2YgdHJhY2sgbWFya2VycyB0byB0aGUgdHJhY2sgbWFyayBjb250YWluZXIgZWxlbWVudFxuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtTWFya2Vyc1xuICAgKi9cbiAgYXBwZW5kVHJhY2tNYXJrZXJzKG51bU1hcmtlcnMpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIHRyYWNrIG1hcmtlcnMgZnJvbXQgaGUgdHJhY2sgbWFyayBjb250YWluZXIgZWxlbWVudFxuICAgKi9cbiAgcmVtb3ZlVHJhY2tNYXJrZXJzKCkge31cblxuICAvKipcbiAgICogU2V0cyBhIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBsYXN0IHRyYWNrIG1hcmtlciB0byB0aGUgcGFzc2VkIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXRMYXN0VHJhY2tNYXJrZXJzU3R5bGVQcm9wZXJ0eShwcm9wZXJ0eU5hbWUsIHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHJvb3QgZWxlbWVudCBpcyBSVEwsIG90aGVyd2lzZSBmYWxzZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNSVEwoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENTbGlkZXJBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgbm9QcmVmaXg6IHN0cmluZyxcbiAqICAgd2Via2l0UHJlZml4OiBzdHJpbmcsXG4gKiAgIHN0eWxlUHJvcGVydHk6IHN0cmluZ1xuICogfX1cbiAqL1xubGV0IFZlbmRvclByb3BlcnR5TWFwVHlwZTtcblxuLyoqIEBjb25zdCB7T2JqZWN0PHN0cmluZywgIVZlbmRvclByb3BlcnR5TWFwVHlwZT59ICovXG5jb25zdCBldmVudFR5cGVNYXAgPSB7XG4gICdhbmltYXRpb25zdGFydCc6IHtcbiAgICBub1ByZWZpeDogJ2FuaW1hdGlvbnN0YXJ0JyxcbiAgICB3ZWJraXRQcmVmaXg6ICd3ZWJraXRBbmltYXRpb25TdGFydCcsXG4gICAgc3R5bGVQcm9wZXJ0eTogJ2FuaW1hdGlvbicsXG4gIH0sXG4gICdhbmltYXRpb25lbmQnOiB7XG4gICAgbm9QcmVmaXg6ICdhbmltYXRpb25lbmQnLFxuICAgIHdlYmtpdFByZWZpeDogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgc3R5bGVQcm9wZXJ0eTogJ2FuaW1hdGlvbicsXG4gIH0sXG4gICdhbmltYXRpb25pdGVyYXRpb24nOiB7XG4gICAgbm9QcmVmaXg6ICdhbmltYXRpb25pdGVyYXRpb24nLFxuICAgIHdlYmtpdFByZWZpeDogJ3dlYmtpdEFuaW1hdGlvbkl0ZXJhdGlvbicsXG4gICAgc3R5bGVQcm9wZXJ0eTogJ2FuaW1hdGlvbicsXG4gIH0sXG4gICd0cmFuc2l0aW9uZW5kJzoge1xuICAgIG5vUHJlZml4OiAndHJhbnNpdGlvbmVuZCcsXG4gICAgd2Via2l0UHJlZml4OiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgc3R5bGVQcm9wZXJ0eTogJ3RyYW5zaXRpb24nLFxuICB9LFxufTtcblxuLyoqIEBjb25zdCB7T2JqZWN0PHN0cmluZywgIVZlbmRvclByb3BlcnR5TWFwVHlwZT59ICovXG5jb25zdCBjc3NQcm9wZXJ0eU1hcCA9IHtcbiAgJ2FuaW1hdGlvbic6IHtcbiAgICBub1ByZWZpeDogJ2FuaW1hdGlvbicsXG4gICAgd2Via2l0UHJlZml4OiAnLXdlYmtpdC1hbmltYXRpb24nLFxuICB9LFxuICAndHJhbnNmb3JtJzoge1xuICAgIG5vUHJlZml4OiAndHJhbnNmb3JtJyxcbiAgICB3ZWJraXRQcmVmaXg6ICctd2Via2l0LXRyYW5zZm9ybScsXG4gIH0sXG4gICd0cmFuc2l0aW9uJzoge1xuICAgIG5vUHJlZml4OiAndHJhbnNpdGlvbicsXG4gICAgd2Via2l0UHJlZml4OiAnLXdlYmtpdC10cmFuc2l0aW9uJyxcbiAgfSxcbn07XG5cbi8qKlxuICogQHBhcmFtIHshT2JqZWN0fSB3aW5kb3dPYmpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGhhc1Byb3BlclNoYXBlKHdpbmRvd09iaikge1xuICByZXR1cm4gKHdpbmRvd09ialsnZG9jdW1lbnQnXSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3dPYmpbJ2RvY3VtZW50J11bJ2NyZWF0ZUVsZW1lbnQnXSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZXZlbnRGb3VuZEluTWFwcyhldmVudFR5cGUpIHtcbiAgcmV0dXJuIChldmVudFR5cGUgaW4gZXZlbnRUeXBlTWFwIHx8IGV2ZW50VHlwZSBpbiBjc3NQcm9wZXJ0eU1hcCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICogQHBhcmFtIHshT2JqZWN0PHN0cmluZywgIVZlbmRvclByb3BlcnR5TWFwVHlwZT59IG1hcFxuICogQHBhcmFtIHshRWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0SmF2YVNjcmlwdEV2ZW50TmFtZShldmVudFR5cGUsIG1hcCwgZWwpIHtcbiAgcmV0dXJuIG1hcFtldmVudFR5cGVdLnN0eWxlUHJvcGVydHkgaW4gZWwuc3R5bGUgPyBtYXBbZXZlbnRUeXBlXS5ub1ByZWZpeCA6IG1hcFtldmVudFR5cGVdLndlYmtpdFByZWZpeDtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGJyb3dzZXIgcHJlZml4IGZvciBDU1MzIGFuaW1hdGlvbiBldmVudHNcbiAqIGFuZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBwYXJhbSB7IU9iamVjdH0gd2luZG93T2JqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEFuaW1hdGlvbk5hbWUod2luZG93T2JqLCBldmVudFR5cGUpIHtcbiAgaWYgKCFoYXNQcm9wZXJTaGFwZSh3aW5kb3dPYmopIHx8ICFldmVudEZvdW5kSW5NYXBzKGV2ZW50VHlwZSkpIHtcbiAgICByZXR1cm4gZXZlbnRUeXBlO1xuICB9XG5cbiAgY29uc3QgbWFwID0gLyoqIEB0eXBlIHshT2JqZWN0PHN0cmluZywgIVZlbmRvclByb3BlcnR5TWFwVHlwZT59ICovIChcbiAgICBldmVudFR5cGUgaW4gZXZlbnRUeXBlTWFwID8gZXZlbnRUeXBlTWFwIDogY3NzUHJvcGVydHlNYXBcbiAgKTtcbiAgY29uc3QgZWwgPSB3aW5kb3dPYmpbJ2RvY3VtZW50J11bJ2NyZWF0ZUVsZW1lbnQnXSgnZGl2Jyk7XG4gIGxldCBldmVudE5hbWUgPSAnJztcblxuICBpZiAobWFwID09PSBldmVudFR5cGVNYXApIHtcbiAgICBldmVudE5hbWUgPSBnZXRKYXZhU2NyaXB0RXZlbnROYW1lKGV2ZW50VHlwZSwgbWFwLCBlbCk7XG4gIH0gZWxzZSB7XG4gICAgZXZlbnROYW1lID0gbWFwW2V2ZW50VHlwZV0ubm9QcmVmaXggaW4gZWwuc3R5bGUgPyBtYXBbZXZlbnRUeXBlXS5ub1ByZWZpeCA6IG1hcFtldmVudFR5cGVdLndlYmtpdFByZWZpeDtcbiAgfVxuXG4gIHJldHVybiBldmVudE5hbWU7XG59XG5cbi8vIFB1YmxpYyBmdW5jdGlvbnMgdG8gYWNjZXNzIGdldEFuaW1hdGlvbk5hbWUoKSBmb3IgSmF2YVNjcmlwdCBldmVudHMgb3IgQ1NTXG4vLyBwcm9wZXJ0eSBuYW1lcy5cblxuY29uc3QgdHJhbnNmb3JtU3R5bGVQcm9wZXJ0aWVzID0gWyd0cmFuc2Zvcm0nLCAnV2Via2l0VHJhbnNmb3JtJywgJ01velRyYW5zZm9ybScsICdPVHJhbnNmb3JtJywgJ01TVHJhbnNmb3JtJ107XG5cbi8qKlxuICogQHBhcmFtIHshT2JqZWN0fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0Q29ycmVjdEV2ZW50TmFtZSh3aW5kb3dPYmosIGV2ZW50VHlwZSkge1xuICByZXR1cm4gZ2V0QW5pbWF0aW9uTmFtZSh3aW5kb3dPYmosIGV2ZW50VHlwZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHshT2JqZWN0fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0Q29ycmVjdFByb3BlcnR5TmFtZSh3aW5kb3dPYmosIGV2ZW50VHlwZSkge1xuICByZXR1cm4gZ2V0QW5pbWF0aW9uTmFtZSh3aW5kb3dPYmosIGV2ZW50VHlwZSk7XG59XG5cbmV4cG9ydCB7dHJhbnNmb3JtU3R5bGVQcm9wZXJ0aWVzLCBnZXRDb3JyZWN0RXZlbnROYW1lLCBnZXRDb3JyZWN0UHJvcGVydHlOYW1lfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBBXG4gKi9cbmNsYXNzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVte2Nzc0NsYXNzZXN9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtzdHJpbmdzfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtudW1iZXJzfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshT2JqZWN0fSAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAvLyB2YWxpZGF0aW9uLlxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0E9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyID0ge30pIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUF9ICovXG4gICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgTURDU2xpZGVyQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG5pbXBvcnQge2dldENvcnJlY3RFdmVudE5hbWUsIGdldENvcnJlY3RQcm9wZXJ0eU5hbWV9IGZyb20gJ0BtYXRlcmlhbC9hbmltYXRpb24vaW5kZXgnO1xuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgS0VZX0lEUyA9IHtcbiAgQVJST1dfTEVGVDogJ0Fycm93TGVmdCcsXG4gIEFSUk9XX1JJR0hUOiAnQXJyb3dSaWdodCcsXG4gIEFSUk9XX1VQOiAnQXJyb3dVcCcsXG4gIEFSUk9XX0RPV046ICdBcnJvd0Rvd24nLFxuICBIT01FOiAnSG9tZScsXG4gIEVORDogJ0VuZCcsXG4gIFBBR0VfVVA6ICdQYWdlVXAnLFxuICBQQUdFX0RPV046ICdQYWdlRG93bicsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IE1PVkVfRVZFTlRfTUFQID0ge1xuICAnbW91c2Vkb3duJzogJ21vdXNlbW92ZScsXG4gICd0b3VjaHN0YXJ0JzogJ3RvdWNobW92ZScsXG4gICdwb2ludGVyZG93bic6ICdwb2ludGVybW92ZScsXG59O1xuXG5jb25zdCBET1dOX0VWRU5UUyA9IFsnbW91c2Vkb3duJywgJ3BvaW50ZXJkb3duJywgJ3RvdWNoc3RhcnQnXTtcbmNvbnN0IFVQX0VWRU5UUyA9IFsnbW91c2V1cCcsICdwb2ludGVydXAnLCAndG91Y2hlbmQnXTtcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDU2xpZGVyQWRhcHRlcj59XG4gKi9cbmNsYXNzIE1EQ1NsaWRlckZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7Y3NzQ2xhc3Nlc30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7bnVtYmVyc30gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFNRENTbGlkZXJBZGFwdGVyfSAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENTbGlkZXJBZGFwdGVyfSAqLyAoe1xuICAgICAgaGFzQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4gLyogYm9vbGVhbiAqLyBmYWxzZSxcbiAgICAgIGFkZENsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBnZXRBdHRyaWJ1dGU6ICgvKiBuYW1lOiBzdHJpbmcgKi8pID0+IC8qIHN0cmluZ3xudWxsICovIG51bGwsXG4gICAgICBzZXRBdHRyaWJ1dGU6ICgvKiBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlQXR0cmlidXRlOiAoLyogbmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IC8qIENsaWVudFJlY3QgKi8gKHtcbiAgICAgICAgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwLFxuICAgICAgfSksXG4gICAgICBnZXRUYWJJbmRleDogKCkgPT4gLyogbnVtYmVyICovIDAsXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIHR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogdHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyVGh1bWJDb250YWluZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiB0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclRodW1iQ29udGFpbmVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogdHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyQm9keUludGVyYWN0aW9uSGFuZGxlcjogKC8qIHR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyQm9keUludGVyYWN0aW9uSGFuZGxlcjogKC8qIHR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBub3RpZnlJbnB1dDogKCkgPT4ge30sXG4gICAgICBub3RpZnlDaGFuZ2U6ICgpID0+IHt9LFxuICAgICAgc2V0VGh1bWJDb250YWluZXJTdHlsZVByb3BlcnR5OiAoLyogcHJvcGVydHlOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgc2V0VHJhY2tTdHlsZVByb3BlcnR5OiAoLyogcHJvcGVydHlOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgc2V0TWFya2VyVmFsdWU6ICgvKiB2YWx1ZTogbnVtYmVyICovKSA9PiB7fSxcbiAgICAgIGFwcGVuZFRyYWNrTWFya2VyczogKC8qIG51bU1hcmtlcnM6IG51bWJlciAqLykgPT4ge30sXG4gICAgICByZW1vdmVUcmFja01hcmtlcnM6ICgpID0+IHt9LFxuICAgICAgc2V0TGFzdFRyYWNrTWFya2Vyc1N0eWxlUHJvcGVydHk6ICgvKiBwcm9wZXJ0eU5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBpc1JUTDogKCkgPT4gLyogYm9vbGVhbiAqLyBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIE1EQ1NsaWRlckZvdW5kYXRpb25cbiAgICogQHBhcmFtIHs/TURDU2xpZGVyQWRhcHRlcn0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDU2xpZGVyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuICAgIC8qKiBAcHJpdmF0ZSB7P0NsaWVudFJlY3R9ICovXG4gICAgdGhpcy5yZWN0XyA9IG51bGw7XG4gICAgLy8gV2Ugc2V0IHRoaXMgdG8gTmFOIHNpbmNlIHdlIHdhbnQgaXQgdG8gYmUgYSBudW1iZXIsIGJ1dCB3ZSBjYW4ndCB1c2UgJzAnIG9yICctMSdcbiAgICAvLyBiZWNhdXNlIHRob3NlIGNvdWxkIGJlIHZhbGlkIHRhYmluZGljZXMgc2V0IGJ5IHRoZSBjbGllbnQgY29kZS5cbiAgICB0aGlzLnNhdmVkVGFiSW5kZXhfID0gTmFOO1xuICAgIHRoaXMuYWN0aXZlXyA9IGZhbHNlO1xuICAgIHRoaXMuaW5UcmFuc2l0XyA9IGZhbHNlO1xuICAgIHRoaXMuaXNEaXNjcmV0ZV8gPSBmYWxzZTtcbiAgICB0aGlzLmhhc1RyYWNrTWFya2VyXyA9IGZhbHNlO1xuICAgIHRoaXMuaGFuZGxpbmdUaHVtYlRhcmdldEV2dF8gPSBmYWxzZTtcbiAgICB0aGlzLm1pbl8gPSAwO1xuICAgIHRoaXMubWF4XyA9IDEwMDtcbiAgICB0aGlzLnN0ZXBfID0gMDtcbiAgICB0aGlzLnZhbHVlXyA9IDA7XG4gICAgdGhpcy5kaXNhYmxlZF8gPSBmYWxzZTtcbiAgICB0aGlzLnByZXZlbnRGb2N1c1N0YXRlXyA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlVUlGcmFtZV8gPSAwO1xuICAgIHRoaXMudGh1bWJDb250YWluZXJQb2ludGVySGFuZGxlcl8gPSAoKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsaW5nVGh1bWJUYXJnZXRFdnRfID0gdHJ1ZTtcbiAgICB9O1xuICAgIHRoaXMuaW50ZXJhY3Rpb25TdGFydEhhbmRsZXJfID0gKGV2dCkgPT4gdGhpcy5oYW5kbGVEb3duXyhldnQpO1xuICAgIHRoaXMua2V5ZG93bkhhbmRsZXJfID0gKGV2dCkgPT4gdGhpcy5oYW5kbGVLZXlkb3duXyhldnQpO1xuICAgIHRoaXMuZm9jdXNIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlRm9jdXNfKCk7XG4gICAgdGhpcy5ibHVySGFuZGxlcl8gPSAoKSA9PiB0aGlzLmhhbmRsZUJsdXJfKCk7XG4gICAgdGhpcy5yZXNpemVIYW5kbGVyXyA9ICgpID0+IHRoaXMubGF5b3V0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuaXNEaXNjcmV0ZV8gPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuSVNfRElTQ1JFVEUpO1xuICAgIHRoaXMuaGFzVHJhY2tNYXJrZXJfID0gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkhBU19UUkFDS19NQVJLRVIpO1xuICAgIERPV05fRVZFTlRTLmZvckVhY2goKGV2dE5hbWUpID0+IHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0TmFtZSwgdGhpcy5pbnRlcmFjdGlvblN0YXJ0SGFuZGxlcl8pKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXlkb3duJywgdGhpcy5rZXlkb3duSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgIERPV05fRVZFTlRTLmZvckVhY2goKGV2dE5hbWUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJUaHVtYkNvbnRhaW5lckludGVyYWN0aW9uSGFuZGxlcihldnROYW1lLCB0aGlzLnRodW1iQ29udGFpbmVyUG9pbnRlckhhbmRsZXJfKTtcbiAgICB9KTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICB0aGlzLmxheW91dCgpO1xuICAgIC8vIEF0IGxhc3Qgc3RlcCwgcHJvdmlkZSBhIHJlYXNvbmFibGUgZGVmYXVsdCB2YWx1ZSB0byBkaXNjcmV0ZSBzbGlkZXJcbiAgICBpZiAodGhpcy5pc0Rpc2NyZXRlXyAmJiB0aGlzLmdldFN0ZXAoKSA9PSAwKSB7XG4gICAgICB0aGlzLnN0ZXBfID0gMTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIERPV05fRVZFTlRTLmZvckVhY2goKGV2dE5hbWUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnROYW1lLCB0aGlzLmludGVyYWN0aW9uU3RhcnRIYW5kbGVyXyk7XG4gICAgfSk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXlkb3duJywgdGhpcy5rZXlkb3duSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgICBET1dOX0VWRU5UUy5mb3JFYWNoKChldnROYW1lKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJUaHVtYkNvbnRhaW5lckludGVyYWN0aW9uSGFuZGxlcihldnROYW1lLCB0aGlzLnRodW1iQ29udGFpbmVyUG9pbnRlckhhbmRsZXJfKTtcbiAgICB9KTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICB9XG5cbiAgc2V0dXBUcmFja01hcmtlcigpIHtcbiAgICBpZiAodGhpcy5pc0Rpc2NyZXRlXyAmJiB0aGlzLmhhc1RyYWNrTWFya2VyXyYmIHRoaXMuZ2V0U3RlcCgpICE9IDApIHtcbiAgICAgIGNvbnN0IG1pbiA9IHRoaXMuZ2V0TWluKCk7XG4gICAgICBjb25zdCBtYXggPSB0aGlzLmdldE1heCgpO1xuICAgICAgY29uc3Qgc3RlcCA9IHRoaXMuZ2V0U3RlcCgpO1xuICAgICAgbGV0IG51bU1hcmtlcnMgPSAobWF4IC0gbWluKSAvIHN0ZXA7XG5cbiAgICAgIC8vIEluIGNhc2UgZGlzdGFuY2UgYmV0d2VlbiBtYXggJiBtaW4gaXMgaW5kaXZpc2libGUgdG8gc3RlcCxcbiAgICAgIC8vIHdlIHBsYWNlIHRoZSBzZWNvbmRhcnkgdG8gbGFzdCBtYXJrZXIgcHJvcG9ydGlvbmFsbHkgYXQgd2hlcmUgdGh1bWJcbiAgICAgIC8vIGNvdWxkIHJlYWNoIGFuZCBwbGFjZSB0aGUgbGFzdCBtYXJrZXIgYXQgbWF4IHZhbHVlXG4gICAgICBjb25zdCBpbmRpdmlzaWJsZSA9IE1hdGguY2VpbChudW1NYXJrZXJzKSAhPT0gbnVtTWFya2VycztcbiAgICAgIGlmIChpbmRpdmlzaWJsZSkge1xuICAgICAgICBudW1NYXJrZXJzID0gTWF0aC5jZWlsKG51bU1hcmtlcnMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZVRyYWNrTWFya2VycygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5hcHBlbmRUcmFja01hcmtlcnMobnVtTWFya2Vycyk7XG5cbiAgICAgIGlmIChpbmRpdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBsYXN0U3RlcFJhdGlvID0gKG1heCAtIG51bU1hcmtlcnMgKiBzdGVwKSAvIHN0ZXAgKyAxO1xuICAgICAgICBjb25zdCBmbGV4ID0gZ2V0Q29ycmVjdFByb3BlcnR5TmFtZSh3aW5kb3csICdmbGV4Jyk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0TGFzdFRyYWNrTWFya2Vyc1N0eWxlUHJvcGVydHkoZmxleCwgU3RyaW5nKGxhc3RTdGVwUmF0aW8pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgdGhpcy5yZWN0XyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIHRoaXMudXBkYXRlVUlGb3JDdXJyZW50VmFsdWVfKCk7XG4gIH1cblxuICAvKiogQHJldHVybiB7bnVtYmVyfSAqL1xuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZV87XG4gIH1cblxuICAvKiogQHBhcmFtIHtudW1iZXJ9IHZhbHVlICovXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRWYWx1ZV8odmFsdWUsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtudW1iZXJ9ICovXG4gIGdldE1heCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhfO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7bnVtYmVyfSBtYXggKi9cbiAgc2V0TWF4KG1heCkge1xuICAgIGlmIChtYXggPCB0aGlzLm1pbl8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHNldCBtYXggdG8gYmUgbGVzcyB0aGFuIHRoZSBzbGlkZXJcXCdzIG1pbmltdW0gdmFsdWUnKTtcbiAgICB9XG4gICAgdGhpcy5tYXhfID0gbWF4O1xuICAgIHRoaXMuc2V0VmFsdWVfKHRoaXMudmFsdWVfLCBmYWxzZSwgdHJ1ZSk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX1ZBTFVFTUFYLCBTdHJpbmcodGhpcy5tYXhfKSk7XG4gICAgdGhpcy5zZXR1cFRyYWNrTWFya2VyKCk7XG4gIH1cblxuICAvKiogQHJldHVybiB7bnVtYmVyfSAqL1xuICBnZXRNaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMubWluXztcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge251bWJlcn0gbWluICovXG4gIHNldE1pbihtaW4pIHtcbiAgICBpZiAobWluID4gdGhpcy5tYXhfKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBzZXQgbWluIHRvIGJlIGdyZWF0ZXIgdGhhbiB0aGUgc2xpZGVyXFwncyBtYXhpbXVtIHZhbHVlJyk7XG4gICAgfVxuICAgIHRoaXMubWluXyA9IG1pbjtcbiAgICB0aGlzLnNldFZhbHVlXyh0aGlzLnZhbHVlXywgZmFsc2UsIHRydWUpO1xuICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlKHN0cmluZ3MuQVJJQV9WQUxVRU1JTiwgU3RyaW5nKHRoaXMubWluXykpO1xuICAgIHRoaXMuc2V0dXBUcmFja01hcmtlcigpO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge251bWJlcn0gKi9cbiAgZ2V0U3RlcCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwXztcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge251bWJlcn0gc3RlcCAqL1xuICBzZXRTdGVwKHN0ZXApIHtcbiAgICBpZiAoc3RlcCA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU3RlcCBjYW5ub3QgYmUgc2V0IHRvIGEgbmVnYXRpdmUgbnVtYmVyJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzRGlzY3JldGVfICYmICh0eXBlb2Yoc3RlcCkgIT09ICdudW1iZXInIHx8IHN0ZXAgPCAxKSkge1xuICAgICAgc3RlcCA9IDE7XG4gICAgfVxuICAgIHRoaXMuc3RlcF8gPSBzdGVwO1xuICAgIHRoaXMuc2V0VmFsdWVfKHRoaXMudmFsdWVfLCBmYWxzZSwgdHJ1ZSk7XG4gICAgdGhpcy5zZXR1cFRyYWNrTWFya2VyKCk7XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZF87XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZCAqL1xuICBzZXREaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIHRoaXMuZGlzYWJsZWRfID0gZGlzYWJsZWQ7XG4gICAgdGhpcy50b2dnbGVDbGFzc18oY3NzQ2xhc3Nlcy5ESVNBQkxFRCwgdGhpcy5kaXNhYmxlZF8pO1xuICAgIGlmICh0aGlzLmRpc2FibGVkXykge1xuICAgICAgdGhpcy5zYXZlZFRhYkluZGV4XyA9IHRoaXMuYWRhcHRlcl8uZ2V0VGFiSW5kZXgoKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlKHN0cmluZ3MuQVJJQV9ESVNBQkxFRCwgJ3RydWUnKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHJpYnV0ZShzdHJpbmdzLkFSSUFfRElTQUJMRUQpO1xuICAgICAgaWYgKCFpc05hTih0aGlzLnNhdmVkVGFiSW5kZXhfKSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCBTdHJpbmcodGhpcy5zYXZlZFRhYkluZGV4XykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgc2xpZGVyXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGhhbmRsZURvd25fKGV2dCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkXykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJldmVudEZvY3VzU3RhdGVfID0gdHJ1ZTtcbiAgICB0aGlzLnNldEluVHJhbnNpdF8oIXRoaXMuaGFuZGxpbmdUaHVtYlRhcmdldEV2dF8pO1xuICAgIHRoaXMuaGFuZGxpbmdUaHVtYlRhcmdldEV2dF8gPSBmYWxzZTtcbiAgICB0aGlzLnNldEFjdGl2ZV8odHJ1ZSk7XG5cbiAgICBjb25zdCBtb3ZlSGFuZGxlciA9IChldnQpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlTW92ZV8oZXZ0KTtcbiAgICB9O1xuXG4gICAgLy8gTm90ZTogdXBIYW5kbGVyIGlzIFtkZV1yZWdpc3RlcmVkIG9uIEFMTCBwb3RlbnRpYWwgcG9pbnRlci1yZWxhdGVkIHJlbGVhc2UgZXZlbnQgdHlwZXMsIHNpbmNlIHNvbWUgYnJvd3NlcnNcbiAgICAvLyBkbyBub3QgYWx3YXlzIGZpcmUgdGhlc2UgY29uc2lzdGVudGx5IGluIHBhaXJzLlxuICAgIC8vIChTZWUgaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvaXNzdWVzLzExOTIpXG4gICAgY29uc3QgdXBIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVVcF8oKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckJvZHlJbnRlcmFjdGlvbkhhbmRsZXIoTU9WRV9FVkVOVF9NQVBbZXZ0LnR5cGVdLCBtb3ZlSGFuZGxlcik7XG4gICAgICBVUF9FVkVOVFMuZm9yRWFjaCgoZXZ0TmFtZSkgPT4gdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyQm9keUludGVyYWN0aW9uSGFuZGxlcihldnROYW1lLCB1cEhhbmRsZXIpKTtcbiAgICB9O1xuXG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckJvZHlJbnRlcmFjdGlvbkhhbmRsZXIoTU9WRV9FVkVOVF9NQVBbZXZ0LnR5cGVdLCBtb3ZlSGFuZGxlcik7XG4gICAgVVBfRVZFTlRTLmZvckVhY2goKGV2dE5hbWUpID0+IHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJCb2R5SW50ZXJhY3Rpb25IYW5kbGVyKGV2dE5hbWUsIHVwSGFuZGxlcikpO1xuICAgIHRoaXMuc2V0VmFsdWVGcm9tRXZ0XyhldnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIG1vdmVzIHRoZSBzbGlkZXJcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlTW92ZV8oZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRWYWx1ZUZyb21FdnRfKGV2dCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIncyBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZXIgZW5kc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlVXBfKCkge1xuICAgIHRoaXMuc2V0QWN0aXZlXyhmYWxzZSk7XG4gICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDaGFuZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYWdlWCBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXRQYWdlWF8oZXZ0KSB7XG4gICAgaWYgKGV2dC50YXJnZXRUb3VjaGVzICYmIGV2dC50YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBldnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWDtcbiAgICB9XG4gICAgcmV0dXJuIGV2dC5wYWdlWDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBzbGlkZXIgdmFsdWUgZnJvbSBhbiBldmVudFxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRWYWx1ZUZyb21FdnRfKGV2dCkge1xuICAgIGNvbnN0IHBhZ2VYID0gdGhpcy5nZXRQYWdlWF8oZXZ0KTtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29tcHV0ZVZhbHVlRnJvbVBhZ2VYXyhwYWdlWCk7XG4gICAgdGhpcy5zZXRWYWx1ZV8odmFsdWUsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBuZXcgdmFsdWUgZnJvbSB0aGUgcGFnZVggcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2VYXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGNvbXB1dGVWYWx1ZUZyb21QYWdlWF8ocGFnZVgpIHtcbiAgICBjb25zdCB7bWF4XzogbWF4LCBtaW5fOiBtaW59ID0gdGhpcztcbiAgICBjb25zdCB4UG9zID0gcGFnZVggLSB0aGlzLnJlY3RfLmxlZnQ7XG4gICAgbGV0IHBjdENvbXBsZXRlID0geFBvcyAvIHRoaXMucmVjdF8ud2lkdGg7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNSVEwoKSkge1xuICAgICAgcGN0Q29tcGxldGUgPSAxIC0gcGN0Q29tcGxldGU7XG4gICAgfVxuICAgIC8vIEZpdCB0aGUgcGVyY2VudGFnZSBjb21wbGV0ZSBiZXR3ZWVuIHRoZSByYW5nZSBbbWluLG1heF1cbiAgICAvLyBieSByZW1hcHBpbmcgZnJvbSBbMCwgMV0gdG8gW21pbiwgbWluKyhtYXgtbWluKV0uXG4gICAgcmV0dXJuIG1pbiArIHBjdENvbXBsZXRlICogKG1heCAtIG1pbik7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBrZXlkb3duIGV2ZW50c1xuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqL1xuICBoYW5kbGVLZXlkb3duXyhldnQpIHtcbiAgICBjb25zdCBrZXlJZCA9IHRoaXMuZ2V0S2V5SWRfKGV2dCk7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlRm9yS2V5SWRfKGtleUlkKTtcbiAgICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUHJldmVudCBwYWdlIGZyb20gc2Nyb2xsaW5nIGR1ZSB0byBrZXkgcHJlc3NlcyB0aGF0IHdvdWxkIG5vcm1hbGx5IHNjcm9sbCB0aGUgcGFnZVxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5GT0NVUyk7XG4gICAgdGhpcy5zZXRWYWx1ZV8odmFsdWUsIHRydWUpO1xuICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5Q2hhbmdlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29tcHV0ZWQgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHshRXZlbnR9IGtiZEV2dFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXRLZXlJZF8oa2JkRXZ0KSB7XG4gICAgaWYgKGtiZEV2dC5rZXkgPT09IEtFWV9JRFMuQVJST1dfTEVGVCB8fCBrYmRFdnQua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgIHJldHVybiBLRVlfSURTLkFSUk9XX0xFRlQ7XG4gICAgfVxuICAgIGlmIChrYmRFdnQua2V5ID09PSBLRVlfSURTLkFSUk9XX1JJR0hUIHx8IGtiZEV2dC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgcmV0dXJuIEtFWV9JRFMuQVJST1dfUklHSFQ7XG4gICAgfVxuICAgIGlmIChrYmRFdnQua2V5ID09PSBLRVlfSURTLkFSUk9XX1VQIHx8IGtiZEV2dC5rZXlDb2RlID09PSAzOCkge1xuICAgICAgcmV0dXJuIEtFWV9JRFMuQVJST1dfVVA7XG4gICAgfVxuICAgIGlmIChrYmRFdnQua2V5ID09PSBLRVlfSURTLkFSUk9XX0RPV04gfHwga2JkRXZ0LmtleUNvZGUgPT09IDQwKSB7XG4gICAgICByZXR1cm4gS0VZX0lEUy5BUlJPV19ET1dOO1xuICAgIH1cbiAgICBpZiAoa2JkRXZ0LmtleSA9PT0gS0VZX0lEUy5IT01FIHx8IGtiZEV2dC5rZXlDb2RlID09PSAzNikge1xuICAgICAgcmV0dXJuIEtFWV9JRFMuSE9NRTtcbiAgICB9XG4gICAgaWYgKGtiZEV2dC5rZXkgPT09IEtFWV9JRFMuRU5EIHx8IGtiZEV2dC5rZXlDb2RlID09PSAzNSkge1xuICAgICAgcmV0dXJuIEtFWV9JRFMuRU5EO1xuICAgIH1cbiAgICBpZiAoa2JkRXZ0LmtleSA9PT0gS0VZX0lEUy5QQUdFX1VQIHx8IGtiZEV2dC5rZXlDb2RlID09PSAzMykge1xuICAgICAgcmV0dXJuIEtFWV9JRFMuUEFHRV9VUDtcbiAgICB9XG4gICAgaWYgKGtiZEV2dC5rZXkgPT09IEtFWV9JRFMuUEFHRV9ET1dOIHx8IGtiZEV2dC5rZXlDb2RlID09PSAzNCkge1xuICAgICAgcmV0dXJuIEtFWV9JRFMuUEFHRV9ET1dOO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgdmFsdWUgZ2l2ZW4gYSBrZXlib2FyZCBrZXkgSURcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleUlkXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFZhbHVlRm9yS2V5SWRfKGtleUlkKSB7XG4gICAgY29uc3Qge21heF86IG1heCwgbWluXzogbWluLCBzdGVwXzogc3RlcH0gPSB0aGlzO1xuICAgIGxldCBkZWx0YSA9IHN0ZXAgfHwgKG1heCAtIG1pbikgLyAxMDA7XG4gICAgY29uc3QgdmFsdWVOZWVkc1RvQmVGbGlwcGVkID0gdGhpcy5hZGFwdGVyXy5pc1JUTCgpICYmIChcbiAgICAgIGtleUlkID09PSBLRVlfSURTLkFSUk9XX0xFRlQgfHwga2V5SWQgPT09IEtFWV9JRFMuQVJST1dfUklHSFRcbiAgICApO1xuICAgIGlmICh2YWx1ZU5lZWRzVG9CZUZsaXBwZWQpIHtcbiAgICAgIGRlbHRhID0gLWRlbHRhO1xuICAgIH1cblxuICAgIHN3aXRjaCAoa2V5SWQpIHtcbiAgICBjYXNlIEtFWV9JRFMuQVJST1dfTEVGVDpcbiAgICBjYXNlIEtFWV9JRFMuQVJST1dfRE9XTjpcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlXyAtIGRlbHRhO1xuICAgIGNhc2UgS0VZX0lEUy5BUlJPV19SSUdIVDpcbiAgICBjYXNlIEtFWV9JRFMuQVJST1dfVVA6XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZV8gKyBkZWx0YTtcbiAgICBjYXNlIEtFWV9JRFMuSE9NRTpcbiAgICAgIHJldHVybiB0aGlzLm1pbl87XG4gICAgY2FzZSBLRVlfSURTLkVORDpcbiAgICAgIHJldHVybiB0aGlzLm1heF87XG4gICAgY2FzZSBLRVlfSURTLlBBR0VfVVA6XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZV8gKyBkZWx0YSAqIG51bWJlcnMuUEFHRV9GQUNUT1I7XG4gICAgY2FzZSBLRVlfSURTLlBBR0VfRE9XTjpcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlXyAtIGRlbHRhICogbnVtYmVycy5QQUdFX0ZBQ1RPUjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGb2N1c18oKSB7XG4gICAgaWYgKHRoaXMucHJldmVudEZvY3VzU3RhdGVfKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5GT0NVUyk7XG4gIH1cblxuICBoYW5kbGVCbHVyXygpIHtcbiAgICB0aGlzLnByZXZlbnRGb2N1c1N0YXRlXyA9IGZhbHNlO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5GT0NVUyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHNsaWRlclxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBzaG91bGRGaXJlSW5wdXRcbiAgICogQHBhcmFtIHtib29sZWFuPX0gZm9yY2VcbiAgICovXG4gIHNldFZhbHVlXyh2YWx1ZSwgc2hvdWxkRmlyZUlucHV0LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYgKHZhbHVlID09PSB0aGlzLnZhbHVlXyAmJiAhZm9yY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7bWluXzogbWluLCBtYXhfOiBtYXh9ID0gdGhpcztcbiAgICBjb25zdCB2YWx1ZVNldFRvQm91bmRhcnkgPSB2YWx1ZSA9PT0gbWluIHx8IHZhbHVlID09PSBtYXg7XG4gICAgaWYgKHRoaXMuc3RlcF8gJiYgIXZhbHVlU2V0VG9Cb3VuZGFyeSkge1xuICAgICAgdmFsdWUgPSB0aGlzLnF1YW50aXplXyh2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA8IG1pbikge1xuICAgICAgdmFsdWUgPSBtaW47XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA+IG1heCkge1xuICAgICAgdmFsdWUgPSBtYXg7XG4gICAgfVxuICAgIHRoaXMudmFsdWVfID0gdmFsdWU7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX1ZBTFVFTk9XLCBTdHJpbmcodGhpcy52YWx1ZV8pKTtcbiAgICB0aGlzLnVwZGF0ZVVJRm9yQ3VycmVudFZhbHVlXygpO1xuXG4gICAgaWYgKHNob3VsZEZpcmVJbnB1dCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlJbnB1dCgpO1xuICAgICAgaWYgKHRoaXMuaXNEaXNjcmV0ZV8pIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRNYXJrZXJWYWx1ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIHF1YW50aXplZCB2YWx1ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgcXVhbnRpemVfKHZhbHVlKSB7XG4gICAgY29uc3QgbnVtU3RlcHMgPSBNYXRoLnJvdW5kKHZhbHVlIC8gdGhpcy5zdGVwXyk7XG4gICAgY29uc3QgcXVhbnRpemVkVmFsID0gbnVtU3RlcHMgKiB0aGlzLnN0ZXBfO1xuICAgIHJldHVybiBxdWFudGl6ZWRWYWw7XG4gIH1cblxuICB1cGRhdGVVSUZvckN1cnJlbnRWYWx1ZV8oKSB7XG4gICAgY29uc3Qge21heF86IG1heCwgbWluXzogbWluLCB2YWx1ZV86IHZhbHVlfSA9IHRoaXM7XG4gICAgY29uc3QgcGN0Q29tcGxldGUgPSAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbik7XG4gICAgbGV0IHRyYW5zbGF0ZVB4ID0gcGN0Q29tcGxldGUgKiB0aGlzLnJlY3RfLndpZHRoO1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzUlRMKCkpIHtcbiAgICAgIHRyYW5zbGF0ZVB4ID0gdGhpcy5yZWN0Xy53aWR0aCAtIHRyYW5zbGF0ZVB4O1xuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zZm9ybVByb3AgPSBnZXRDb3JyZWN0UHJvcGVydHlOYW1lKHdpbmRvdywgJ3RyYW5zZm9ybScpO1xuICAgIGNvbnN0IHRyYW5zaXRpb25lbmRFdnROYW1lID0gZ2V0Q29ycmVjdEV2ZW50TmFtZSh3aW5kb3csICd0cmFuc2l0aW9uZW5kJyk7XG5cbiAgICBpZiAodGhpcy5pblRyYW5zaXRfKSB7XG4gICAgICBjb25zdCBvblRyYW5zaXRpb25FbmQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0SW5UcmFuc2l0XyhmYWxzZSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclRodW1iQ29udGFpbmVySW50ZXJhY3Rpb25IYW5kbGVyKHRyYW5zaXRpb25lbmRFdnROYW1lLCBvblRyYW5zaXRpb25FbmQpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJUaHVtYkNvbnRhaW5lckludGVyYWN0aW9uSGFuZGxlcih0cmFuc2l0aW9uZW5kRXZ0TmFtZSwgb25UcmFuc2l0aW9uRW5kKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVVJRnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIC8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEl0IHdvdWxkIGJlIG5pY2UgdG8gdXNlIGNhbGMoKSBoZXJlLFxuICAgICAgLy8gYnV0IElFIGNhbm5vdCBoYW5kbGUgY2FsY3MgaW4gdHJhbnNmb3JtcyBjb3JyZWN0bHkuXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vZ29vLmdsL05DMml0a1xuICAgICAgLy8gQWxzbyBub3RlIHRoYXQgdGhlIC01MCUgb2Zmc2V0IGlzIHVzZWQgdG8gY2VudGVyIHRoZSBzbGlkZXIgdGh1bWIuXG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldFRodW1iQ29udGFpbmVyU3R5bGVQcm9wZXJ0eSh0cmFuc2Zvcm1Qcm9wLCBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVB4fXB4KSB0cmFuc2xhdGVYKC01MCUpYCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldFRyYWNrU3R5bGVQcm9wZXJ0eSh0cmFuc2Zvcm1Qcm9wLCBgc2NhbGVYKCR7cGN0Q29tcGxldGV9KWApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGFjdGl2ZSBzdGF0ZSBvZiB0aGUgc2xpZGVyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWN0aXZlXG4gICAqL1xuICBzZXRBY3RpdmVfKGFjdGl2ZSkge1xuICAgIHRoaXMuYWN0aXZlXyA9IGFjdGl2ZTtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzXyhjc3NDbGFzc2VzLkFDVElWRSwgdGhpcy5hY3RpdmVfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBpblRyYW5zaXQgc3RhdGUgb2YgdGhlIHNsaWRlclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluVHJhbnNpdFxuICAgKi9cbiAgc2V0SW5UcmFuc2l0XyhpblRyYW5zaXQpIHtcbiAgICB0aGlzLmluVHJhbnNpdF8gPSBpblRyYW5zaXQ7XG4gICAgdGhpcy50b2dnbGVDbGFzc18oY3NzQ2xhc3Nlcy5JTl9UUkFOU0lULCB0aGlzLmluVHJhbnNpdF8pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmRpdGlvbmFsbHkgYWRkcyBvciByZW1vdmVzIGEgY2xhc3MgYmFzZWQgb24gc2hvdWxkQmVQcmVzZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHBhcmFtIHtib29sZWFufSBzaG91bGRCZVByZXNlbnRcbiAgICovXG4gIHRvZ2dsZUNsYXNzXyhjbGFzc05hbWUsIHNob3VsZEJlUHJlc2VudCkge1xuICAgIGlmIChzaG91bGRCZVByZXNlbnQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENTbGlkZXJGb3VuZGF0aW9uO1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiXG4gICAgY2xhc3M9XCJtZGMtc2xpZGVyXCJcbiAgICB0YWJpbmRleD1cIjBcIlxuICAgIHJvbGU9XCJzbGlkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWRjLXNsaWRlcl9fdHJhY2stY29udGFpbmVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIDpzdHlsZT1cInRyYWNrU3R5bGVzXCJcbiAgICAgICAgY2xhc3M9XCJtZGMtc2xpZGVyX190cmFja1wiLz5cbiAgICAgIDxkaXZcbiAgICAgICAgdi1pZj1cImhhc01hcmtlcnNcIlxuICAgICAgICBjbGFzcz1cIm1kYy1zbGlkZXJfX3RyYWNrLW1hcmtlci1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHYtZm9yPVwibWFya2VyTnVtIGluIG51bU1hcmtlcnNcIlxuICAgICAgICAgIDprZXk9XCJtYXJrZXJOdW1cIlxuICAgICAgICAgIDpzdHlsZT1cIihtYXJrZXJOdW0gPT0gbnVtTWFya2VycykgPyBsYXN0VHJhY2tNYXJrZXJzU3R5bGVzIDoge31cIlxuICAgICAgICAgIGNsYXNzPVwibWRjLXNsaWRlcl9fdHJhY2stbWFya2VyXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgIHJlZj1cInRodW1iQ29udGFpbmVyXCJcbiAgICAgIDpzdHlsZT1cInRodW1iU3R5bGVzXCJcbiAgICAgIGNsYXNzPVwibWRjLXNsaWRlcl9fdGh1bWItY29udGFpbmVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIHYtaWY9XCJpc0Rpc2NyZXRlXCJcbiAgICAgICAgY2xhc3M9XCJtZGMtc2xpZGVyX19waW5cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtc2xpZGVyX19waW4tdmFsdWUtbWFya2VyXCI+e3sgbWFya2VyVmFsdWUgfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3M9XCJtZGMtc2xpZGVyX190aHVtYlwiXG4gICAgICAgIHdpZHRoPVwiMjFcIlxuICAgICAgICBoZWlnaHQ9XCIyMVwiPlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgY3g9XCIxMC41XCJcbiAgICAgICAgICBjeT1cIjEwLjVcIlxuICAgICAgICAgIHI9XCI3Ljg3NVwiLz5cbiAgICAgIDwvc3ZnPlxuICAgICAgPGRpdiBjbGFzcz1cIm1kYy1zbGlkZXJfX2ZvY3VzLXJpbmdcIi8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNRENTbGlkZXJGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9zbGlkZXIvZm91bmRhdGlvbidcbmltcG9ydCB7IERpc3BhdGNoRm9jdXNNaXhpbiwgYXBwbHlQYXNzaXZlIH0gZnJvbSAnLi4vYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXNsaWRlcicsXG4gIG1peGluczogW0Rpc3BhdGNoRm9jdXNNaXhpbl0sXG4gIG1vZGVsOiB7XG4gICAgcHJvcDogJ3ZhbHVlJyxcbiAgICBldmVudDogJ2NoYW5nZSdcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICB2YWx1ZTogW051bWJlciwgU3RyaW5nXSxcbiAgICBtaW46IHsgdHlwZTogW051bWJlciwgU3RyaW5nXSwgZGVmYXVsdDogMCB9LFxuICAgIG1heDogeyB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLCBkZWZhdWx0OiAxMDAgfSxcbiAgICBzdGVwOiB7IHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sIGRlZmF1bHQ6IDAgfSxcbiAgICBkaXNwbGF5TWFya2VyczogQm9vbGVhbixcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBsYXlvdXRPbjogU3RyaW5nLFxuICAgIGxheW91dE9uU291cmNlOiB7IHR5cGU6IE9iamVjdCwgcmVxdWlyZWQ6IGZhbHNlIH1cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICAnbWRjLXNsaWRlci0tZGlzY3JldGUnOiAhIXRoaXMuc3RlcCxcbiAgICAgICAgJ21kYy1zbGlkZXItLWRpc3BsYXktbWFya2Vycyc6IHRoaXMuZGlzcGxheU1hcmtlcnNcbiAgICAgIH0sXG4gICAgICB0cmFja1N0eWxlczoge30sXG4gICAgICBsYXN0VHJhY2tNYXJrZXJzU3R5bGVzOiB7fSxcbiAgICAgIHRodW1iU3R5bGVzOiB7fSxcbiAgICAgIG1hcmtlclZhbHVlOiAnJyxcbiAgICAgIG51bU1hcmtlcnM6IDBcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaXNEaXNjcmV0ZSgpIHtcbiAgICAgIHJldHVybiAhIXRoaXMuc3RlcFxuICAgIH0sXG4gICAgaGFzTWFya2VycygpIHtcbiAgICAgIHJldHVybiAhIXRoaXMuc3RlcCAmJiB0aGlzLmRpc3BsYXlNYXJrZXJzICYmIHRoaXMubnVtTWFya2Vyc1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZSgpIHtcbiAgICAgIGlmICh0aGlzLmZvdW5kYXRpb24uZ2V0VmFsdWUoKSAhPT0gTnVtYmVyKHRoaXMudmFsdWUpKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRWYWx1ZSh0aGlzLnZhbHVlKVxuICAgICAgfVxuICAgIH0sXG4gICAgbWluKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldE1pbihOdW1iZXIodGhpcy5taW4pKVxuICAgIH0sXG4gICAgbWF4KCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldE1heChOdW1iZXIodGhpcy5tYXgpKVxuICAgIH0sXG4gICAgc3RlcCgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRTdGVwKE51bWJlcih0aGlzLnN0ZXApKVxuICAgIH0sXG4gICAgZGlzYWJsZWQoKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0RGlzYWJsZWQodGhpcy5kaXNhYmxlZClcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ1NsaWRlckZvdW5kYXRpb24oe1xuICAgICAgaGFzQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcbiAgICAgIGFkZENsYXNzOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICB9LFxuICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgIHRoaXMuJGRlbGV0ZSh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgIH0sXG4gICAgICBnZXRBdHRyaWJ1dGU6IG5hbWUgPT4gdGhpcy4kZWwuZ2V0QXR0cmlidXRlKG5hbWUpLFxuICAgICAgc2V0QXR0cmlidXRlOiAobmFtZSwgdmFsdWUpID0+IHRoaXMuJGVsLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSksXG4gICAgICByZW1vdmVBdHRyaWJ1dGU6IG5hbWUgPT4gdGhpcy4kZWwucmVtb3ZlQXR0cmlidXRlKG5hbWUpLFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gdGhpcy4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBnZXRUYWJJbmRleDogKCkgPT4gdGhpcy4kZWwudGFiSW5kZXgsXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKHR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgIH0sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAodHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICB0aGlzLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVyVGh1bWJDb250YWluZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICh0eXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgIHRoaXMuJHJlZnMudGh1bWJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIGRlcmVnaXN0ZXJUaHVtYkNvbnRhaW5lckludGVyYWN0aW9uSGFuZGxlcjogKHR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgdGhpcy4kcmVmcy50aHVtYkNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICApXG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXJCb2R5SW50ZXJhY3Rpb25IYW5kbGVyOiAodHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlcilcbiAgICAgIH0sXG4gICAgICBkZXJlZ2lzdGVyQm9keUludGVyYWN0aW9uSGFuZGxlcjogKHR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIpXG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICB9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgIH0sXG4gICAgICBub3RpZnlJbnB1dDogKCkgPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMuZm91bmRhdGlvbi5nZXRWYWx1ZSgpKVxuICAgICAgfSxcbiAgICAgIG5vdGlmeUNoYW5nZTogKCkgPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLmZvdW5kYXRpb24uZ2V0VmFsdWUoKSlcbiAgICAgIH0sXG4gICAgICBzZXRUaHVtYkNvbnRhaW5lclN0eWxlUHJvcGVydHk6IChwcm9wZXJ0eU5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLnRodW1iU3R5bGVzLCBwcm9wZXJ0eU5hbWUsIHZhbHVlKVxuICAgICAgfSxcbiAgICAgIHNldFRyYWNrU3R5bGVQcm9wZXJ0eTogKHByb3BlcnR5TmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMudHJhY2tTdHlsZXMsIHByb3BlcnR5TmFtZSwgdmFsdWUpXG4gICAgICB9LFxuICAgICAgc2V0TWFya2VyVmFsdWU6IHZhbHVlID0+IHtcbiAgICAgICAgdGhpcy5tYXJrZXJWYWx1ZSA9IHZhbHVlXG4gICAgICB9LFxuICAgICAgYXBwZW5kVHJhY2tNYXJrZXJzOiBudW1NYXJrZXJzID0+IHtcbiAgICAgICAgdGhpcy5udW1NYXJrZXJzID0gbnVtTWFya2Vyc1xuICAgICAgfSxcbiAgICAgIHJlbW92ZVRyYWNrTWFya2VyczogKCkgPT4ge1xuICAgICAgICB0aGlzLm51bU1hcmtlcnMgPSAwXG4gICAgICB9LFxuICAgICAgc2V0TGFzdFRyYWNrTWFya2Vyc1N0eWxlUHJvcGVydHk6IChwcm9wZXJ0eU5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLmxhc3RUcmFja01hcmtlcnNTdHlsZXMsIHByb3BlcnR5TmFtZSwgdmFsdWUpXG4gICAgICB9LFxuICAgICAgaXNSVEw6ICgpID0+IGZhbHNlXG4gICAgfSlcblxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcbiAgICB0aGlzLmZvdW5kYXRpb24uc2V0RGlzYWJsZWQodGhpcy5kaXNhYmxlZClcbiAgICBpZiAoTnVtYmVyKHRoaXMubWluKSA8PSB0aGlzLmZvdW5kYXRpb24uZ2V0TWF4KCkpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRNaW4oTnVtYmVyKHRoaXMubWluKSlcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRNYXgoTnVtYmVyKHRoaXMubWF4KSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldE1heChOdW1iZXIodGhpcy5tYXgpKVxuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldE1pbihOdW1iZXIodGhpcy5taW4pKVxuICAgIH1cbiAgICB0aGlzLmZvdW5kYXRpb24uc2V0U3RlcChOdW1iZXIodGhpcy5zdGVwKSlcbiAgICB0aGlzLmZvdW5kYXRpb24uc2V0VmFsdWUoTnVtYmVyKHRoaXMudmFsdWUpKVxuICAgIGlmICh0aGlzLmhhc01hcmtlcnMpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXR1cFRyYWNrTWFya2VyKClcbiAgICB9XG5cbiAgICB0aGlzLiRyb290LiRvbigndm1hOmxheW91dCcsIHRoaXMubGF5b3V0KVxuXG4gICAgaWYgKHRoaXMubGF5b3V0T24pIHtcbiAgICAgIHRoaXMubGF5b3V0T25FdmVudFNvdXJjZSA9IHRoaXMubGF5b3V0T25Tb3VyY2UgfHwgdGhpcy4kcm9vdFxuICAgICAgdGhpcy5sYXlvdXRPbkV2ZW50U291cmNlLiRvbih0aGlzLmxheW91dE9uLCB0aGlzLmxheW91dClcbiAgICB9XG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy4kcm9vdC4kb2ZmKCd2bWE6bGF5b3V0JywgdGhpcy5sYXlvdXQpXG4gICAgaWYgKHRoaXMubGF5b3V0T25FdmVudFNvdXJjZSkge1xuICAgICAgdGhpcy5sYXlvdXRPbkV2ZW50U291cmNlLiRvZmYodGhpcy5sYXlvdXRPbiwgdGhpcy5sYXlvdXQpXG4gICAgfVxuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGxheW91dCgpIHtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uICYmIHRoaXMuZm91bmRhdGlvbi5sYXlvdXQoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50KGNvbXBpbGVkVGVtcGxhdGUsIGluamVjdFN0eWxlLCBkZWZhdWx0RXhwb3J0LCBzY29wZUlkLCBpc0Z1bmN0aW9uYWxUZW1wbGF0ZSwgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLywgaXNTaGFkb3dNb2RlLCBjcmVhdGVJbmplY3RvciwgY3JlYXRlSW5qZWN0b3JTU1IsIGNyZWF0ZUluamVjdG9yU2hhZG93KSB7XG4gICAgaWYgKHR5cGVvZiBpc1NoYWRvd01vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3JTU1IgPSBjcmVhdGVJbmplY3RvcjtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3IgPSBpc1NoYWRvd01vZGU7XG4gICAgICAgIGlzU2hhZG93TW9kZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gICAgY29uc3Qgb3B0aW9ucyA9IHR5cGVvZiBkZWZhdWx0RXhwb3J0ID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdEV4cG9ydC5vcHRpb25zIDogZGVmYXVsdEV4cG9ydDtcbiAgICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gICAgaWYgKGNvbXBpbGVkVGVtcGxhdGUgJiYgY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXIpIHtcbiAgICAgICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlcjtcbiAgICAgICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgICAgICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlO1xuICAgICAgICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzY29wZWRJZFxuICAgIGlmIChzY29wZUlkKSB7XG4gICAgICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkO1xuICAgIH1cbiAgICBsZXQgaG9vaztcbiAgICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgICAgICAvLyBzZXJ2ZXIgYnVpbGRcbiAgICAgICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICAgICAgICBjb250ZXh0ID1cbiAgICAgICAgICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KTsgLy8gZnVuY3Rpb25hbFxuICAgICAgICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICAgICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX187XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgICAgICAgaWYgKGluamVjdFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNTUihjb250ZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVyZW5jZVxuICAgICAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9vaztcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5qZWN0U3R5bGUpIHtcbiAgICAgICAgaG9vayA9IGlzU2hhZG93TW9kZVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNoYWRvdyh0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH07XG4gICAgfVxuICAgIGlmIChob29rKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcbiAgICAgICAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBob29rLmNhbGwoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlO1xuICAgICAgICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRFeHBvcnQ7XG59XG4iLCJpbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBtZGNTbGlkZXIgZnJvbSAnLi9tZGMtc2xpZGVyLnZ1ZSdcblxuZXhwb3J0IHsgbWRjU2xpZGVyIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY1NsaWRlclxufSlcbiIsImltcG9ydCAnLi9zdHlsZXMuc2NzcydcbmltcG9ydCB7IGF1dG9Jbml0IH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBwbHVnaW4gZnJvbSAnLi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG5hdXRvSW5pdChwbHVnaW4pXG4iXSwibmFtZXMiOlsic3VwcG9ydHNQYXNzaXZlXyIsImFwcGx5UGFzc2l2ZSIsImdsb2JhbE9iaiIsIndpbmRvdyIsImZvcmNlUmVmcmVzaCIsInVuZGVmaW5lZCIsImlzU3VwcG9ydGVkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsImUiLCJhdXRvSW5pdCIsInBsdWdpbiIsIl9WdWUiLCJWdWUiLCJnbG9iYWwiLCJ1c2UiLCJCYXNlUGx1Z2luIiwiY29tcG9uZW50cyIsInZlcnNpb24iLCJpbnN0YWxsIiwidm0iLCJrZXkiLCJjb21wb25lbnQiLCJuYW1lIiwiRGlzcGF0Y2hGb2N1c01peGluIiwiZGF0YSIsImhhc0ZvY3VzIiwibWV0aG9kcyIsIm9uTW91c2VEb3duIiwiX2FjdGl2ZSIsIm9uTW91c2VVcCIsIm9uRm9jdXNFdmVudCIsInNldFRpbWVvdXQiLCJkaXNwYXRjaEZvY3VzRXZlbnQiLCJvbkJsdXJFdmVudCIsIiRlbCIsImFjdGl2ZUVsZW1lbnQiLCJjb250YWlucyIsIiRlbWl0IiwibW91bnRlZCIsImJlZm9yZURlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImNzc0NsYXNzZXMiLCJBQ1RJVkUiLCJESVNBQkxFRCIsIkRJU0NSRVRFIiwiRk9DVVMiLCJJTl9UUkFOU0lUIiwiSVNfRElTQ1JFVEUiLCJIQVNfVFJBQ0tfTUFSS0VSIiwic3RyaW5ncyIsIlRSQUNLX1NFTEVDVE9SIiwiVFJBQ0tfTUFSS0VSX0NPTlRBSU5FUl9TRUxFQ1RPUiIsIkxBU1RfVFJBQ0tfTUFSS0VSX1NFTEVDVE9SIiwiVEhVTUJfQ09OVEFJTkVSX1NFTEVDVE9SIiwiUElOX1ZBTFVFX01BUktFUl9TRUxFQ1RPUiIsIkFSSUFfVkFMVUVNSU4iLCJBUklBX1ZBTFVFTUFYIiwiQVJJQV9WQUxVRU5PVyIsIkFSSUFfRElTQUJMRUQiLCJTVEVQX0RBVEFfQVRUUiIsIkNIQU5HRV9FVkVOVCIsIklOUFVUX0VWRU5UIiwibnVtYmVycyIsIlBBR0VfRkFDVE9SIiwiTURDU2xpZGVyQWRhcHRlciIsImNsYXNzTmFtZSIsInZhbHVlIiwidHlwZSIsImhhbmRsZXIiLCJwcm9wZXJ0eU5hbWUiLCJudW1NYXJrZXJzIiwiZXZlbnRUeXBlTWFwIiwibm9QcmVmaXgiLCJ3ZWJraXRQcmVmaXgiLCJzdHlsZVByb3BlcnR5IiwiY3NzUHJvcGVydHlNYXAiLCJoYXNQcm9wZXJTaGFwZSIsIndpbmRvd09iaiIsImV2ZW50Rm91bmRJbk1hcHMiLCJldmVudFR5cGUiLCJnZXRKYXZhU2NyaXB0RXZlbnROYW1lIiwibWFwIiwiZWwiLCJzdHlsZSIsImdldEFuaW1hdGlvbk5hbWUiLCJldmVudE5hbWUiLCJnZXRDb3JyZWN0RXZlbnROYW1lIiwiZ2V0Q29ycmVjdFByb3BlcnR5TmFtZSIsIk1EQ0ZvdW5kYXRpb24iLCJhZGFwdGVyIiwiYWRhcHRlcl8iLCJLRVlfSURTIiwiQVJST1dfTEVGVCIsIkFSUk9XX1JJR0hUIiwiQVJST1dfVVAiLCJBUlJPV19ET1dOIiwiSE9NRSIsIkVORCIsIlBBR0VfVVAiLCJQQUdFX0RPV04iLCJNT1ZFX0VWRU5UX01BUCIsIkRPV05fRVZFTlRTIiwiVVBfRVZFTlRTIiwiTURDU2xpZGVyRm91bmRhdGlvbiIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbXB1dGVCb3VuZGluZ1JlY3QiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsImdldFRhYkluZGV4IiwicmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJUaHVtYkNvbnRhaW5lckludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJUaHVtYkNvbnRhaW5lckludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyQm9keUludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJCb2R5SW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwiZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJub3RpZnlJbnB1dCIsIm5vdGlmeUNoYW5nZSIsInNldFRodW1iQ29udGFpbmVyU3R5bGVQcm9wZXJ0eSIsInNldFRyYWNrU3R5bGVQcm9wZXJ0eSIsInNldE1hcmtlclZhbHVlIiwiYXBwZW5kVHJhY2tNYXJrZXJzIiwicmVtb3ZlVHJhY2tNYXJrZXJzIiwic2V0TGFzdFRyYWNrTWFya2Vyc1N0eWxlUHJvcGVydHkiLCJpc1JUTCIsImRlZmF1bHRBZGFwdGVyIiwicmVjdF8iLCJzYXZlZFRhYkluZGV4XyIsIk5hTiIsImFjdGl2ZV8iLCJpblRyYW5zaXRfIiwiaXNEaXNjcmV0ZV8iLCJoYXNUcmFja01hcmtlcl8iLCJoYW5kbGluZ1RodW1iVGFyZ2V0RXZ0XyIsIm1pbl8iLCJtYXhfIiwic3RlcF8iLCJ2YWx1ZV8iLCJkaXNhYmxlZF8iLCJwcmV2ZW50Rm9jdXNTdGF0ZV8iLCJ1cGRhdGVVSUZyYW1lXyIsInRodW1iQ29udGFpbmVyUG9pbnRlckhhbmRsZXJfIiwiaW50ZXJhY3Rpb25TdGFydEhhbmRsZXJfIiwiZXZ0IiwiaGFuZGxlRG93bl8iLCJrZXlkb3duSGFuZGxlcl8iLCJoYW5kbGVLZXlkb3duXyIsImZvY3VzSGFuZGxlcl8iLCJoYW5kbGVGb2N1c18iLCJibHVySGFuZGxlcl8iLCJoYW5kbGVCbHVyXyIsInJlc2l6ZUhhbmRsZXJfIiwibGF5b3V0IiwiZm9yRWFjaCIsImV2dE5hbWUiLCJnZXRTdGVwIiwibWluIiwiZ2V0TWluIiwibWF4IiwiZ2V0TWF4Iiwic3RlcCIsImluZGl2aXNpYmxlIiwiY2VpbCIsImxhc3RTdGVwUmF0aW8iLCJmbGV4IiwiU3RyaW5nIiwidXBkYXRlVUlGb3JDdXJyZW50VmFsdWVfIiwic2V0VmFsdWVfIiwiRXJyb3IiLCJzZXR1cFRyYWNrTWFya2VyIiwiZGlzYWJsZWQiLCJ0b2dnbGVDbGFzc18iLCJpc05hTiIsInNldEluVHJhbnNpdF8iLCJzZXRBY3RpdmVfIiwibW92ZUhhbmRsZXIiLCJoYW5kbGVNb3ZlXyIsInVwSGFuZGxlciIsImhhbmRsZVVwXyIsInNldFZhbHVlRnJvbUV2dF8iLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldFRvdWNoZXMiLCJsZW5ndGgiLCJwYWdlWCIsImdldFBhZ2VYXyIsImNvbXB1dGVWYWx1ZUZyb21QYWdlWF8iLCJ4UG9zIiwicGN0Q29tcGxldGUiLCJrZXlJZCIsImdldEtleUlkXyIsImdldFZhbHVlRm9yS2V5SWRfIiwia2JkRXZ0Iiwia2V5Q29kZSIsImRlbHRhIiwidmFsdWVOZWVkc1RvQmVGbGlwcGVkIiwic2hvdWxkRmlyZUlucHV0IiwiZm9yY2UiLCJ2YWx1ZVNldFRvQm91bmRhcnkiLCJxdWFudGl6ZV8iLCJudW1TdGVwcyIsInJvdW5kIiwicXVhbnRpemVkVmFsIiwidHJhbnNsYXRlUHgiLCJ0cmFuc2Zvcm1Qcm9wIiwidHJhbnNpdGlvbmVuZEV2dE5hbWUiLCJvblRyYW5zaXRpb25FbmQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhY3RpdmUiLCJpblRyYW5zaXQiLCJzaG91bGRCZVByZXNlbnQiLCJub3JtYWxpemVDb21wb25lbnQiLCJjb21waWxlZFRlbXBsYXRlIiwiaW5qZWN0U3R5bGUiLCJkZWZhdWx0RXhwb3J0Iiwic2NvcGVJZCIsImlzRnVuY3Rpb25hbFRlbXBsYXRlIiwibW9kdWxlSWRlbnRpZmllciIsImlzU2hhZG93TW9kZSIsImNyZWF0ZUluamVjdG9yIiwiY3JlYXRlSW5qZWN0b3JTU1IiLCJjcmVhdGVJbmplY3RvclNoYWRvdyIsIm9wdGlvbnMiLCJyZW5kZXIiLCJzdGF0aWNSZW5kZXJGbnMiLCJfY29tcGlsZWQiLCJmdW5jdGlvbmFsIiwiX3Njb3BlSWQiLCJob29rIiwiY29udGV4dCIsIiR2bm9kZSIsInNzckNvbnRleHQiLCJwYXJlbnQiLCJfX1ZVRV9TU1JfQ09OVEVYVF9fIiwiY2FsbCIsIl9yZWdpc3RlcmVkQ29tcG9uZW50cyIsImFkZCIsIl9zc3JSZWdpc3RlciIsIiRyb290IiwiJG9wdGlvbnMiLCJzaGFkb3dSb290Iiwib3JpZ2luYWxSZW5kZXIiLCJyZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24iLCJoIiwiZXhpc3RpbmciLCJiZWZvcmVDcmVhdGUiLCJjb25jYXQiLCJtZGNTbGlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSxJQUFJQSxnQkFBSjtFQUVBOzs7Ozs7O0FBTUEsRUFBTyxTQUFTQyxZQUFULEdBQWdFO0VBQUEsTUFBMUNDLFNBQTBDLHVFQUE5QkMsTUFBOEI7RUFBQSxNQUF0QkMsWUFBc0IsdUVBQVAsS0FBTzs7RUFDckUsTUFBSUosZ0JBQWdCLEtBQUtLLFNBQXJCLElBQWtDRCxZQUF0QyxFQUFvRDtFQUNsRCxRQUFJRSxXQUFXLEdBQUcsS0FBbEI7O0VBQ0EsUUFBSTtFQUNGSixNQUFBQSxTQUFTLENBQUNLLFFBQVYsQ0FBbUJDLGdCQUFuQixDQUFvQyxNQUFwQyxFQUE0QyxJQUE1QyxFQUFrRDtFQUNoRCxZQUFJQyxPQUFKLEdBQWM7RUFDWkgsVUFBQUEsV0FBVyxHQUFHO0VBQUVHLFlBQUFBLE9BQU8sRUFBRTtFQUFYLFdBQWQ7RUFDRDs7RUFIK0MsT0FBbEQ7RUFLRCxLQU5ELENBTUUsT0FBT0MsQ0FBUCxFQUFVO0VBRVg7O0VBRURWLElBQUFBLGdCQUFnQixHQUFHTSxXQUFuQjtFQUNEOztFQUVELFNBQU9OLGdCQUFQO0VBQ0Q7O0VDekJNLFNBQVNXLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0VBQy9CO0VBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0VBQ0EsTUFBSSxPQUFPVixNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0VBQ2pDVSxJQUFBQSxJQUFJLEdBQUdWLE1BQU0sQ0FBQ1csR0FBZDtFQUNELEdBRkQsTUFFTyxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7RUFDeEM7RUFDQUYsSUFBQUEsSUFBSSxHQUFHRSxNQUFNLENB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
