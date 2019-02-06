/**
* @module vue-mdc-adapterslider 0.19.4-beta
* @exports VueMDCSlider
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.44.0","material-components-web":"^0.44.0"}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlcyI6WyIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYXBwbHktcGFzc2l2ZS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9hdXRvLWluaXQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYmFzZS1wbHVnaW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWV2ZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL2Rpc3BhdGNoLWZvY3VzLW1peGluLmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zbGlkZXIvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zbGlkZXIvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYW5pbWF0aW9uL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NsaWRlci9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vY29tcG9uZW50cy9zbGlkZXIvbWRjLXNsaWRlci52dWUiLCIuLi8uLi9jb21wb25lbnRzL3NsaWRlci9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvc2xpZGVyL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBzdXBwb3J0c1Bhc3NpdmVfXG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycywgYW5kIGlmIHNvLCB1c2UgdGhlbS5cbiAqIEBwYXJhbSB7IVdpbmRvdz19IGdsb2JhbE9ialxuICogQHBhcmFtIHtib29sZWFuPX0gZm9yY2VSZWZyZXNoXG4gKiBAcmV0dXJuIHtib29sZWFufHtwYXNzaXZlOiBib29sZWFufX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmogPSB3aW5kb3csIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkID0gZmFsc2VcbiAgICB0cnkge1xuICAgICAgZ2xvYmFsT2JqLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCB7XG4gICAgICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgICAgIGlzU3VwcG9ydGVkID0geyBwYXNzaXZlOiB0cnVlIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvL2VtcHR5XG4gICAgfVxuXG4gICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkXG4gIH1cblxuICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlX1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGF1dG9Jbml0KHBsdWdpbikge1xuICAvLyBBdXRvLWluc3RhbGxcbiAgbGV0IF9WdWUgPSBudWxsXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIF9WdWUgPSB3aW5kb3cuVnVlXG4gIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvKmdsb2JhbCBnbG9iYWwqL1xuICAgIF9WdWUgPSBnbG9iYWwuVnVlXG4gIH1cbiAgaWYgKF9WdWUpIHtcbiAgICBfVnVlLnVzZShwbHVnaW4pXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBCYXNlUGx1Z2luKGNvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnX19WRVJTSU9OX18nLFxuICAgIGluc3RhbGw6IHZtID0+IHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2tleV1cbiAgICAgICAgdm0uY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQpXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImV4cG9ydCBjb25zdCBEaXNwYXRjaEZvY3VzTWl4aW4gPSB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHsgaGFzRm9jdXM6IGZhbHNlIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uTW91c2VEb3duKCkge1xuICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZVxuICAgIH0sXG4gICAgb25Nb3VzZVVwKCkge1xuICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2VcbiAgICB9LFxuICAgIG9uRm9jdXNFdmVudCgpIHtcbiAgICAgIC8vIGRpc3BhdGNoIGFzeW5jIHRvIGxldCB0aW1lIHRvIG90aGVyIGZvY3VzIGV2ZW50IHRvIHByb3BhZ2F0ZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRpc3BhdGNoRm9jdXNFdmVudCgpLCAwKVxuICAgIH0sXG4gICAgb25CbHVyRXZlbnQoKSB7XG4gICAgICAvLyBkaXNwYXRjaCBhc3luYyB0byBsZXQgdGltZSB0byBvdGhlciBmb2N1cyBldmVudCB0byBwcm9wYWdhdGVcbiAgICAgIC8vIGFsc28gZmlsdHVyIGJsdXIgaWYgbW91c2Vkb3duXG4gICAgICB0aGlzLl9hY3RpdmUgfHwgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRpc3BhdGNoRm9jdXNFdmVudCgpLCAwKVxuICAgIH0sXG4gICAgZGlzcGF0Y2hGb2N1c0V2ZW50KCkge1xuICAgICAgbGV0IGhhc0ZvY3VzID1cbiAgICAgICAgdGhpcy4kZWwgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgfHxcbiAgICAgICAgdGhpcy4kZWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudClcbiAgICAgIGlmIChoYXNGb2N1cyAhPSB0aGlzLmhhc0ZvY3VzKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoaGFzRm9jdXMgPyAnZm9jdXMnIDogJ2JsdXInKVxuICAgICAgICB0aGlzLmhhc0ZvY3VzID0gaGFzRm9jdXNcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMub25Gb2N1c0V2ZW50KVxuICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdGhpcy5vbkJsdXJFdmVudClcbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duKVxuICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcClcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5vbkZvY3VzRXZlbnQpXG4gICAgdGhpcy4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB0aGlzLm9uQmx1ckV2ZW50KVxuICAgIHRoaXMuJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24pXG4gICAgdGhpcy4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwKVxuICB9XG59XG4iLCJjb25zdCBzY29wZSA9XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMHgxMDAwMDAwMCkpLnRvU3RyaW5nKCkgKyAnLSdcblxuZXhwb3J0IGNvbnN0IFZNQVVuaXF1ZUlkTWl4aW4gPSB7XG4gIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICB0aGlzLnZtYV91aWRfID0gc2NvcGUgKyB0aGlzLl91aWRcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgQUNUSVZFOiAnbWRjLXNsaWRlci0tYWN0aXZlJyxcbiAgRElTQUJMRUQ6ICdtZGMtc2xpZGVyLS1kaXNhYmxlZCcsXG4gIERJU0NSRVRFOiAnbWRjLXNsaWRlci0tZGlzY3JldGUnLFxuICBGT0NVUzogJ21kYy1zbGlkZXItLWZvY3VzJyxcbiAgSU5fVFJBTlNJVDogJ21kYy1zbGlkZXItLWluLXRyYW5zaXQnLFxuICBJU19ESVNDUkVURTogJ21kYy1zbGlkZXItLWRpc2NyZXRlJyxcbiAgSEFTX1RSQUNLX01BUktFUjogJ21kYy1zbGlkZXItLWRpc3BsYXktbWFya2VycycsXG59O1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFRSQUNLX1NFTEVDVE9SOiAnLm1kYy1zbGlkZXJfX3RyYWNrJyxcbiAgVFJBQ0tfTUFSS0VSX0NPTlRBSU5FUl9TRUxFQ1RPUjogJy5tZGMtc2xpZGVyX190cmFjay1tYXJrZXItY29udGFpbmVyJyxcbiAgTEFTVF9UUkFDS19NQVJLRVJfU0VMRUNUT1I6ICcubWRjLXNsaWRlcl9fdHJhY2stbWFya2VyOmxhc3QtY2hpbGQnLFxuICBUSFVNQl9DT05UQUlORVJfU0VMRUNUT1I6ICcubWRjLXNsaWRlcl9fdGh1bWItY29udGFpbmVyJyxcbiAgUElOX1ZBTFVFX01BUktFUl9TRUxFQ1RPUjogJy5tZGMtc2xpZGVyX19waW4tdmFsdWUtbWFya2VyJyxcbiAgQVJJQV9WQUxVRU1JTjogJ2FyaWEtdmFsdWVtaW4nLFxuICBBUklBX1ZBTFVFTUFYOiAnYXJpYS12YWx1ZW1heCcsXG4gIEFSSUFfVkFMVUVOT1c6ICdhcmlhLXZhbHVlbm93JyxcbiAgQVJJQV9ESVNBQkxFRDogJ2FyaWEtZGlzYWJsZWQnLFxuICBTVEVQX0RBVEFfQVRUUjogJ2RhdGEtc3RlcCcsXG4gIENIQU5HRV9FVkVOVDogJ01EQ1NsaWRlcjpjaGFuZ2UnLFxuICBJTlBVVF9FVkVOVDogJ01EQ1NsaWRlcjppbnB1dCcsXG59O1xuXG4vKiogQGVudW0ge251bWJlcn0gKi9cbmNvbnN0IG51bWJlcnMgPSB7XG4gIFBBR0VfRkFDVE9SOiA0LFxufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBTbGlkZXIuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgU2xpZGVyIGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENTbGlkZXJBZGFwdGVyIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBjbGFzc05hbWUgZXhpc3RzIGZvciB0aGUgc2xpZGVyIEVsZW1lbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2xhc3MgdG8gdGhlIHNsaWRlciBFbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGNsYXNzIGZyb20gdGhlIHNsaWRlciBFbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyBpZiBhdHRyaWJ1dGUgbmFtZSBleGlzdHMgb24gdGhlIHNsaWRlciBFbGVtZW50LFxuICAgKiBvdGhlcndpc2UgcmV0dXJucyBudWxsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEByZXR1cm4gez9zdHJpbmd9XG4gICAqL1xuICBnZXRBdHRyaWJ1dGUobmFtZSkge31cblxuICAvKipcbiAgICogU2V0cyBhdHRyaWJ1dGUgbmFtZSBvbiBzbGlkZXIgRWxlbWVudCB0byB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhdHRyaWJ1dGUgbmFtZSBmcm9tIHNsaWRlciBFbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqL1xuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYm91bmRpbmcgY2xpZW50IHJlY3QgZm9yIHRoZSBzbGlkZXIgRWxlbWVudFxuICAgKiBAcmV0dXJuIHs/Q2xpZW50UmVjdH1cbiAgICovXG4gIGNvbXB1dGVCb3VuZGluZ1JlY3QoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0YWIgaW5kZXggb2YgdGhlIHNsaWRlciBFbGVtZW50XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldFRhYkluZGV4KCkge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXIgb24gdGhlIHJvb3QgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXIgb24gdGhlIHJvb3QgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXIgb24gdGhlIHRodW1iIGNvbnRhaW5lciBlbGVtZW50IGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJUaHVtYkNvbnRhaW5lckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEZXJlZ2lzdGVycyBhbiBldmVudCBoYW5kbGVyIG9uIHRoZSB0aHVtYiBjb250YWluZXIgZWxlbWVudCBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJUaHVtYkNvbnRhaW5lckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgaGFuZGxlciBvbiB0aGUgYm9keSBmb3IgYSBnaXZlbiBldmVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyQm9keUludGVyYWN0aW9uSGFuZGxlcih0eXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBEZXJlZ2lzdGVycyBhbiBldmVudCBoYW5kbGVyIG9uIHRoZSBib2R5IGZvciBhIGdpdmVuIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFFdmVudCk6IHVuZGVmaW5lZH0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckJvZHlJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSB3aW5kb3cgcmVzaXplIGV2ZW50XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUV2ZW50KTogdW5kZWZpbmVkfSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlclJlc2l6ZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKipcbiAgICogRGVyZWdpc3RlcnMgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIHdpbmRvdyByZXNpemUgZXZlbnRcbiAgICogQHBhcmFtIHtmdW5jdGlvbighRXZlbnQpOiB1bmRlZmluZWR9IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGEgY3VzdG9tIGV2ZW50IE1EQ1NsaWRlcjppbnB1dCBmcm9tIHRoZSByb290XG4gICAqL1xuICBub3RpZnlJbnB1dCgpIHt9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGEgY3VzdG9tIGV2ZW50IE1EQ1NsaWRlcjpjaGFuZ2UgZnJvbSB0aGUgcm9vdFxuICAgKi9cbiAgbm90aWZ5Q2hhbmdlKCkge31cblxuICAvKipcbiAgICogU2V0cyBhIHN0eWxlIHByb3BlcnR5IG9mIHRoZSB0aHVtYiBjb250YWluZXIgZWxlbWVudCB0byB0aGUgcGFzc2VkIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXRUaHVtYkNvbnRhaW5lclN0eWxlUHJvcGVydHkocHJvcGVydHlOYW1lLCB2YWx1ZSkge31cblxuICAvKipcbiAgICogU2V0cyBhIHN0eWxlIHByb3BlcnR5IG9mIHRoZSB0cmFjayBlbGVtZW50IHRvIHRoZSBwYXNzZWQgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5TmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHNldFRyYWNrU3R5bGVQcm9wZXJ0eShwcm9wZXJ0eU5hbWUsIHZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbm5lciB0ZXh0IG9mIHRoZSBwaW4gbWFya2VyIHRvIHRoZSBwYXNzZWQgdmFsdWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAqL1xuICBzZXRNYXJrZXJWYWx1ZSh2YWx1ZSkge31cblxuICAvKipcbiAgICogQXBwZW5kcyB0aGUgcGFzc2VkIG51bWJlciBvZiB0cmFjayBtYXJrZXJzIHRvIHRoZSB0cmFjayBtYXJrIGNvbnRhaW5lciBlbGVtZW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1NYXJrZXJzXG4gICAqL1xuICBhcHBlbmRUcmFja01hcmtlcnMobnVtTWFya2Vycykge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgdHJhY2sgbWFya2VycyBmcm9tdCBoZSB0cmFjayBtYXJrIGNvbnRhaW5lciBlbGVtZW50XG4gICAqL1xuICByZW1vdmVUcmFja01hcmtlcnMoKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGxhc3QgdHJhY2sgbWFya2VyIHRvIHRoZSBwYXNzZWQgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5TmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHNldExhc3RUcmFja01hcmtlcnNTdHlsZVByb3BlcnR5KHByb3BlcnR5TmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcm9vdCBlbGVtZW50IGlzIFJUTCwgb3RoZXJ3aXNlIGZhbHNlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc1JUTCgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1NsaWRlckFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBub1ByZWZpeDogc3RyaW5nLFxuICogICB3ZWJraXRQcmVmaXg6IHN0cmluZyxcbiAqICAgc3R5bGVQcm9wZXJ0eTogc3RyaW5nXG4gKiB9fVxuICovXG5sZXQgVmVuZG9yUHJvcGVydHlNYXBUeXBlO1xuXG4vKiogQGNvbnN0IHtPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gKi9cbmNvbnN0IGV2ZW50VHlwZU1hcCA9IHtcbiAgJ2FuaW1hdGlvbnN0YXJ0Jzoge1xuICAgIG5vUHJlZml4OiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIHdlYmtpdFByZWZpeDogJ3dlYmtpdEFuaW1hdGlvblN0YXJ0JyxcbiAgICBzdHlsZVByb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgfSxcbiAgJ2FuaW1hdGlvbmVuZCc6IHtcbiAgICBub1ByZWZpeDogJ2FuaW1hdGlvbmVuZCcsXG4gICAgd2Via2l0UHJlZml4OiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICBzdHlsZVByb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgfSxcbiAgJ2FuaW1hdGlvbml0ZXJhdGlvbic6IHtcbiAgICBub1ByZWZpeDogJ2FuaW1hdGlvbml0ZXJhdGlvbicsXG4gICAgd2Via2l0UHJlZml4OiAnd2Via2l0QW5pbWF0aW9uSXRlcmF0aW9uJyxcbiAgICBzdHlsZVByb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgfSxcbiAgJ3RyYW5zaXRpb25lbmQnOiB7XG4gICAgbm9QcmVmaXg6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICB3ZWJraXRQcmVmaXg6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBzdHlsZVByb3BlcnR5OiAndHJhbnNpdGlvbicsXG4gIH0sXG59O1xuXG4vKiogQGNvbnN0IHtPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gKi9cbmNvbnN0IGNzc1Byb3BlcnR5TWFwID0ge1xuICAnYW5pbWF0aW9uJzoge1xuICAgIG5vUHJlZml4OiAnYW5pbWF0aW9uJyxcbiAgICB3ZWJraXRQcmVmaXg6ICctd2Via2l0LWFuaW1hdGlvbicsXG4gIH0sXG4gICd0cmFuc2Zvcm0nOiB7XG4gICAgbm9QcmVmaXg6ICd0cmFuc2Zvcm0nLFxuICAgIHdlYmtpdFByZWZpeDogJy13ZWJraXQtdHJhbnNmb3JtJyxcbiAgfSxcbiAgJ3RyYW5zaXRpb24nOiB7XG4gICAgbm9QcmVmaXg6ICd0cmFuc2l0aW9uJyxcbiAgICB3ZWJraXRQcmVmaXg6ICctd2Via2l0LXRyYW5zaXRpb24nLFxuICB9LFxufTtcblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IHdpbmRvd09ialxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaGFzUHJvcGVyU2hhcGUod2luZG93T2JqKSB7XG4gIHJldHVybiAod2luZG93T2JqWydkb2N1bWVudCddICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHdpbmRvd09ialsnZG9jdW1lbnQnXVsnY3JlYXRlRWxlbWVudCddID09PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBldmVudEZvdW5kSW5NYXBzKGV2ZW50VHlwZSkge1xuICByZXR1cm4gKGV2ZW50VHlwZSBpbiBldmVudFR5cGVNYXAgfHwgZXZlbnRUeXBlIGluIGNzc1Byb3BlcnR5TWFwKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlXG4gKiBAcGFyYW0geyFPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gbWFwXG4gKiBAcGFyYW0geyFFbGVtZW50fSBlbFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRKYXZhU2NyaXB0RXZlbnROYW1lKGV2ZW50VHlwZSwgbWFwLCBlbCkge1xuICByZXR1cm4gbWFwW2V2ZW50VHlwZV0uc3R5bGVQcm9wZXJ0eSBpbiBlbC5zdHlsZSA/IG1hcFtldmVudFR5cGVdLm5vUHJlZml4IDogbWFwW2V2ZW50VHlwZV0ud2Via2l0UHJlZml4O1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBkZXRlcm1pbmUgYnJvd3NlciBwcmVmaXggZm9yIENTUzMgYW5pbWF0aW9uIGV2ZW50c1xuICogYW5kIHByb3BlcnR5IG5hbWVzLlxuICogQHBhcmFtIHshT2JqZWN0fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uTmFtZSh3aW5kb3dPYmosIGV2ZW50VHlwZSkge1xuICBpZiAoIWhhc1Byb3BlclNoYXBlKHdpbmRvd09iaikgfHwgIWV2ZW50Rm91bmRJbk1hcHMoZXZlbnRUeXBlKSkge1xuICAgIHJldHVybiBldmVudFR5cGU7XG4gIH1cblxuICBjb25zdCBtYXAgPSAvKiogQHR5cGUgeyFPYmplY3Q8c3RyaW5nLCAhVmVuZG9yUHJvcGVydHlNYXBUeXBlPn0gKi8gKFxuICAgIGV2ZW50VHlwZSBpbiBldmVudFR5cGVNYXAgPyBldmVudFR5cGVNYXAgOiBjc3NQcm9wZXJ0eU1hcFxuICApO1xuICBjb25zdCBlbCA9IHdpbmRvd09ialsnZG9jdW1lbnQnXVsnY3JlYXRlRWxlbWVudCddKCdkaXYnKTtcbiAgbGV0IGV2ZW50TmFtZSA9ICcnO1xuXG4gIGlmIChtYXAgPT09IGV2ZW50VHlwZU1hcCkge1xuICAgIGV2ZW50TmFtZSA9IGdldEphdmFTY3JpcHRFdmVudE5hbWUoZXZlbnRUeXBlLCBtYXAsIGVsKTtcbiAgfSBlbHNlIHtcbiAgICBldmVudE5hbWUgPSBtYXBbZXZlbnRUeXBlXS5ub1ByZWZpeCBpbiBlbC5zdHlsZSA/IG1hcFtldmVudFR5cGVdLm5vUHJlZml4IDogbWFwW2V2ZW50VHlwZV0ud2Via2l0UHJlZml4O1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TmFtZTtcbn1cblxuLy8gUHVibGljIGZ1bmN0aW9ucyB0byBhY2Nlc3MgZ2V0QW5pbWF0aW9uTmFtZSgpIGZvciBKYXZhU2NyaXB0IGV2ZW50cyBvciBDU1Ncbi8vIHByb3BlcnR5IG5hbWVzLlxuXG5jb25zdCB0cmFuc2Zvcm1TdHlsZVByb3BlcnRpZXMgPSBbJ3RyYW5zZm9ybScsICdXZWJraXRUcmFuc2Zvcm0nLCAnTW96VHJhbnNmb3JtJywgJ09UcmFuc2Zvcm0nLCAnTVNUcmFuc2Zvcm0nXTtcblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IHdpbmRvd09ialxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb3JyZWN0RXZlbnROYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKSB7XG4gIHJldHVybiBnZXRBbmltYXRpb25OYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IHdpbmRvd09ialxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb3JyZWN0UHJvcGVydHlOYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKSB7XG4gIHJldHVybiBnZXRBbmltYXRpb25OYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKTtcbn1cblxuZXhwb3J0IHt0cmFuc2Zvcm1TdHlsZVByb3BlcnRpZXMsIGdldENvcnJlY3RFdmVudE5hbWUsIGdldENvcnJlY3RQcm9wZXJ0eU5hbWV9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIEFcbiAqL1xuY2xhc3MgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW17Y3NzQ2xhc3Nlc30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte3N0cmluZ3N9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte251bWJlcnN9ICovXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFPYmplY3R9ICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgIC8vIHZhbGlkYXRpb24uXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7QT19IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIgPSB7fSkge1xuICAgIC8qKiBAcHJvdGVjdGVkIHshQX0gKi9cbiAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBNRENTbGlkZXJBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmltcG9ydCB7Z2V0Q29ycmVjdEV2ZW50TmFtZSwgZ2V0Q29ycmVjdFByb3BlcnR5TmFtZX0gZnJvbSAnQG1hdGVyaWFsL2FuaW1hdGlvbi9pbmRleCc7XG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBLRVlfSURTID0ge1xuICBBUlJPV19MRUZUOiAnQXJyb3dMZWZ0JyxcbiAgQVJST1dfUklHSFQ6ICdBcnJvd1JpZ2h0JyxcbiAgQVJST1dfVVA6ICdBcnJvd1VwJyxcbiAgQVJST1dfRE9XTjogJ0Fycm93RG93bicsXG4gIEhPTUU6ICdIb21lJyxcbiAgRU5EOiAnRW5kJyxcbiAgUEFHRV9VUDogJ1BhZ2VVcCcsXG4gIFBBR0VfRE9XTjogJ1BhZ2VEb3duJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgTU9WRV9FVkVOVF9NQVAgPSB7XG4gICdtb3VzZWRvd24nOiAnbW91c2Vtb3ZlJyxcbiAgJ3RvdWNoc3RhcnQnOiAndG91Y2htb3ZlJyxcbiAgJ3BvaW50ZXJkb3duJzogJ3BvaW50ZXJtb3ZlJyxcbn07XG5cbmNvbnN0IERPV05fRVZFTlRTID0gWydtb3VzZWRvd24nLCAncG9pbnRlcmRvd24nLCAndG91Y2hzdGFydCddO1xuY29uc3QgVVBfRVZFTlRTID0gWydtb3VzZXVwJywgJ3BvaW50ZXJ1cCcsICd0b3VjaGVuZCddO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENTbGlkZXJBZGFwdGVyPn1cbiAqL1xuY2xhc3MgTURDU2xpZGVyRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtjc3NDbGFzc2VzfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmdzfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVtIHtudW1iZXJzfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICAvKiogQHJldHVybiB7IU1EQ1NsaWRlckFkYXB0ZXJ9ICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ1NsaWRlckFkYXB0ZXJ9ICovICh7XG4gICAgICBoYXNDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiAvKiBib29sZWFuICovIGZhbHNlLFxuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGdldEF0dHJpYnV0ZTogKC8qIG5hbWU6IHN0cmluZyAqLykgPT4gLyogc3RyaW5nfG51bGwgKi8gbnVsbCxcbiAgICAgIHNldEF0dHJpYnV0ZTogKC8qIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVBdHRyaWJ1dGU6ICgvKiBuYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gLyogQ2xpZW50UmVjdCAqLyAoe1xuICAgICAgICB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAsXG4gICAgICB9KSxcbiAgICAgIGdldFRhYkluZGV4OiAoKSA9PiAvKiBudW1iZXIgKi8gMCxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogdHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiB0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJUaHVtYkNvbnRhaW5lckludGVyYWN0aW9uSGFuZGxlcjogKC8qIHR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyVGh1bWJDb250YWluZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiB0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJCb2R5SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogdHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJCb2R5SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogdHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIG5vdGlmeUlucHV0OiAoKSA9PiB7fSxcbiAgICAgIG5vdGlmeUNoYW5nZTogKCkgPT4ge30sXG4gICAgICBzZXRUaHVtYkNvbnRhaW5lclN0eWxlUHJvcGVydHk6ICgvKiBwcm9wZXJ0eU5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBzZXRUcmFja1N0eWxlUHJvcGVydHk6ICgvKiBwcm9wZXJ0eU5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBzZXRNYXJrZXJWYWx1ZTogKC8qIHZhbHVlOiBudW1iZXIgKi8pID0+IHt9LFxuICAgICAgYXBwZW5kVHJhY2tNYXJrZXJzOiAoLyogbnVtTWFya2VyczogbnVtYmVyICovKSA9PiB7fSxcbiAgICAgIHJlbW92ZVRyYWNrTWFya2VyczogKCkgPT4ge30sXG4gICAgICBzZXRMYXN0VHJhY2tNYXJrZXJzU3R5bGVQcm9wZXJ0eTogKC8qIHByb3BlcnR5TmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGlzUlRMOiAoKSA9PiAvKiBib29sZWFuICovIGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgTURDU2xpZGVyRm91bmRhdGlvblxuICAgKiBAcGFyYW0gez9NRENTbGlkZXJBZGFwdGVyfSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENTbGlkZXJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG4gICAgLyoqIEBwcml2YXRlIHs/Q2xpZW50UmVjdH0gKi9cbiAgICB0aGlzLnJlY3RfID0gbnVsbDtcbiAgICAvLyBXZSBzZXQgdGhpcyB0byBOYU4gc2luY2Ugd2Ugd2FudCBpdCB0byBiZSBhIG51bWJlciwgYnV0IHdlIGNhbid0IHVzZSAnMCcgb3IgJy0xJ1xuICAgIC8vIGJlY2F1c2UgdGhvc2UgY291bGQgYmUgdmFsaWQgdGFiaW5kaWNlcyBzZXQgYnkgdGhlIGNsaWVudCBjb2RlLlxuICAgIHRoaXMuc2F2ZWRUYWJJbmRleF8gPSBOYU47XG4gICAgdGhpcy5hY3RpdmVfID0gZmFsc2U7XG4gICAgdGhpcy5pblRyYW5zaXRfID0gZmFsc2U7XG4gICAgdGhpcy5pc0Rpc2NyZXRlXyA9IGZhbHNlO1xuICAgIHRoaXMuaGFzVHJhY2tNYXJrZXJfID0gZmFsc2U7XG4gICAgdGhpcy5oYW5kbGluZ1RodW1iVGFyZ2V0RXZ0XyA9IGZhbHNlO1xuICAgIHRoaXMubWluXyA9IDA7XG4gICAgdGhpcy5tYXhfID0gMTAwO1xuICAgIHRoaXMuc3RlcF8gPSAwO1xuICAgIHRoaXMudmFsdWVfID0gMDtcbiAgICB0aGlzLmRpc2FibGVkXyA9IGZhbHNlO1xuICAgIHRoaXMucHJldmVudEZvY3VzU3RhdGVfID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVVSUZyYW1lXyA9IDA7XG4gICAgdGhpcy50aHVtYkNvbnRhaW5lclBvaW50ZXJIYW5kbGVyXyA9ICgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxpbmdUaHVtYlRhcmdldEV2dF8gPSB0cnVlO1xuICAgIH07XG4gICAgdGhpcy5pbnRlcmFjdGlvblN0YXJ0SGFuZGxlcl8gPSAoZXZ0KSA9PiB0aGlzLmhhbmRsZURvd25fKGV2dCk7XG4gICAgdGhpcy5rZXlkb3duSGFuZGxlcl8gPSAoZXZ0KSA9PiB0aGlzLmhhbmRsZUtleWRvd25fKGV2dCk7XG4gICAgdGhpcy5mb2N1c0hhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVGb2N1c18oKTtcbiAgICB0aGlzLmJsdXJIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlQmx1cl8oKTtcbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXJfID0gKCkgPT4gdGhpcy5sYXlvdXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5pc0Rpc2NyZXRlXyA9IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5JU19ESVNDUkVURSk7XG4gICAgdGhpcy5oYXNUcmFja01hcmtlcl8gPSB0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuSEFTX1RSQUNLX01BUktFUik7XG4gICAgRE9XTl9FVkVOVFMuZm9yRWFjaCgoZXZ0TmFtZSkgPT4gdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnROYW1lLCB0aGlzLmludGVyYWN0aW9uU3RhcnRIYW5kbGVyXykpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleWRvd24nLCB0aGlzLmtleWRvd25IYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgRE9XTl9FVkVOVFMuZm9yRWFjaCgoZXZ0TmFtZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclRodW1iQ29udGFpbmVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dE5hbWUsIHRoaXMudGh1bWJDb250YWluZXJQb2ludGVySGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgIHRoaXMubGF5b3V0KCk7XG4gICAgLy8gQXQgbGFzdCBzdGVwLCBwcm92aWRlIGEgcmVhc29uYWJsZSBkZWZhdWx0IHZhbHVlIHRvIGRpc2NyZXRlIHNsaWRlclxuICAgIGlmICh0aGlzLmlzRGlzY3JldGVfICYmIHRoaXMuZ2V0U3RlcCgpID09IDApIHtcbiAgICAgIHRoaXMuc3RlcF8gPSAxO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgRE9XTl9FVkVOVFMuZm9yRWFjaCgoZXZ0TmFtZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dE5hbWUsIHRoaXMuaW50ZXJhY3Rpb25TdGFydEhhbmRsZXJfKTtcbiAgICB9KTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleWRvd24nLCB0aGlzLmtleWRvd25IYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgIERPV05fRVZFTlRTLmZvckVhY2goKGV2dE5hbWUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclRodW1iQ29udGFpbmVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dE5hbWUsIHRoaXMudGh1bWJDb250YWluZXJQb2ludGVySGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gIH1cblxuICBzZXR1cFRyYWNrTWFya2VyKCkge1xuICAgIGlmICh0aGlzLmlzRGlzY3JldGVfICYmIHRoaXMuaGFzVHJhY2tNYXJrZXJfJiYgdGhpcy5nZXRTdGVwKCkgIT0gMCkge1xuICAgICAgY29uc3QgbWluID0gdGhpcy5nZXRNaW4oKTtcbiAgICAgIGNvbnN0IG1heCA9IHRoaXMuZ2V0TWF4KCk7XG4gICAgICBjb25zdCBzdGVwID0gdGhpcy5nZXRTdGVwKCk7XG4gICAgICBsZXQgbnVtTWFya2VycyA9IChtYXggLSBtaW4pIC8gc3RlcDtcblxuICAgICAgLy8gSW4gY2FzZSBkaXN0YW5jZSBiZXR3ZWVuIG1heCAmIG1pbiBpcyBpbmRpdmlzaWJsZSB0byBzdGVwLFxuICAgICAgLy8gd2UgcGxhY2UgdGhlIHNlY29uZGFyeSB0byBsYXN0IG1hcmtlciBwcm9wb3J0aW9uYWxseSBhdCB3aGVyZSB0aHVtYlxuICAgICAgLy8gY291bGQgcmVhY2ggYW5kIHBsYWNlIHRoZSBsYXN0IG1hcmtlciBhdCBtYXggdmFsdWVcbiAgICAgIGNvbnN0IGluZGl2aXNpYmxlID0gTWF0aC5jZWlsKG51bU1hcmtlcnMpICE9PSBudW1NYXJrZXJzO1xuICAgICAgaWYgKGluZGl2aXNpYmxlKSB7XG4gICAgICAgIG51bU1hcmtlcnMgPSBNYXRoLmNlaWwobnVtTWFya2Vycyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlVHJhY2tNYXJrZXJzKCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFwcGVuZFRyYWNrTWFya2VycyhudW1NYXJrZXJzKTtcblxuICAgICAgaWYgKGluZGl2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGxhc3RTdGVwUmF0aW8gPSAobWF4IC0gbnVtTWFya2VycyAqIHN0ZXApIC8gc3RlcCArIDE7XG4gICAgICAgIGNvbnN0IGZsZXggPSBnZXRDb3JyZWN0UHJvcGVydHlOYW1lKHdpbmRvdywgJ2ZsZXgnKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRMYXN0VHJhY2tNYXJrZXJzU3R5bGVQcm9wZXJ0eShmbGV4LCBTdHJpbmcobGFzdFN0ZXBSYXRpbykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICB0aGlzLnJlY3RfID0gdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgdGhpcy51cGRhdGVVSUZvckN1cnJlbnRWYWx1ZV8oKTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtudW1iZXJ9ICovXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlXztcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgKi9cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNldFZhbHVlXyh2YWx1ZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge251bWJlcn0gKi9cbiAgZ2V0TWF4KCkge1xuICAgIHJldHVybiB0aGlzLm1heF87XG4gIH1cblxuICAvKiogQHBhcmFtIHtudW1iZXJ9IG1heCAqL1xuICBzZXRNYXgobWF4KSB7XG4gICAgaWYgKG1heCA8IHRoaXMubWluXykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgc2V0IG1heCB0byBiZSBsZXNzIHRoYW4gdGhlIHNsaWRlclxcJ3MgbWluaW11bSB2YWx1ZScpO1xuICAgIH1cbiAgICB0aGlzLm1heF8gPSBtYXg7XG4gICAgdGhpcy5zZXRWYWx1ZV8odGhpcy52YWx1ZV8sIGZhbHNlLCB0cnVlKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZShzdHJpbmdzLkFSSUFfVkFMVUVNQVgsIFN0cmluZyh0aGlzLm1heF8pKTtcbiAgICB0aGlzLnNldHVwVHJhY2tNYXJrZXIoKTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtudW1iZXJ9ICovXG4gIGdldE1pbigpIHtcbiAgICByZXR1cm4gdGhpcy5taW5fO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7bnVtYmVyfSBtaW4gKi9cbiAgc2V0TWluKG1pbikge1xuICAgIGlmIChtaW4gPiB0aGlzLm1heF8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHNldCBtaW4gdG8gYmUgZ3JlYXRlciB0aGFuIHRoZSBzbGlkZXJcXCdzIG1heGltdW0gdmFsdWUnKTtcbiAgICB9XG4gICAgdGhpcy5taW5fID0gbWluO1xuICAgIHRoaXMuc2V0VmFsdWVfKHRoaXMudmFsdWVfLCBmYWxzZSwgdHJ1ZSk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX1ZBTFVFTUlOLCBTdHJpbmcodGhpcy5taW5fKSk7XG4gICAgdGhpcy5zZXR1cFRyYWNrTWFya2VyKCk7XG4gIH1cblxuICAvKiogQHJldHVybiB7bnVtYmVyfSAqL1xuICBnZXRTdGVwKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBfO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7bnVtYmVyfSBzdGVwICovXG4gIHNldFN0ZXAoc3RlcCkge1xuICAgIGlmIChzdGVwIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdGVwIGNhbm5vdCBiZSBzZXQgdG8gYSBuZWdhdGl2ZSBudW1iZXInKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNEaXNjcmV0ZV8gJiYgKHR5cGVvZihzdGVwKSAhPT0gJ251bWJlcicgfHwgc3RlcCA8IDEpKSB7XG4gICAgICBzdGVwID0gMTtcbiAgICB9XG4gICAgdGhpcy5zdGVwXyA9IHN0ZXA7XG4gICAgdGhpcy5zZXRWYWx1ZV8odGhpcy52YWx1ZV8sIGZhbHNlLCB0cnVlKTtcbiAgICB0aGlzLnNldHVwVHJhY2tNYXJrZXIoKTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkXztcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IGRpc2FibGVkICovXG4gIHNldERpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgdGhpcy5kaXNhYmxlZF8gPSBkaXNhYmxlZDtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzXyhjc3NDbGFzc2VzLkRJU0FCTEVELCB0aGlzLmRpc2FibGVkXyk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWRfKSB7XG4gICAgICB0aGlzLnNhdmVkVGFiSW5kZXhfID0gdGhpcy5hZGFwdGVyXy5nZXRUYWJJbmRleCgpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX0RJU0FCTEVELCAndHJ1ZScpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQXR0cmlidXRlKHN0cmluZ3MuQVJJQV9ESVNBQkxFRCk7XG4gICAgICBpZiAoIWlzTmFOKHRoaXMuc2F2ZWRUYWJJbmRleF8pKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIFN0cmluZyh0aGlzLnNhdmVkVGFiSW5kZXhfKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBpbnRlcmFjdGluZyB3aXRoIHRoZSBzbGlkZXJcbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaGFuZGxlRG93bl8oZXZ0KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWRfKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcmV2ZW50Rm9jdXNTdGF0ZV8gPSB0cnVlO1xuICAgIHRoaXMuc2V0SW5UcmFuc2l0XyghdGhpcy5oYW5kbGluZ1RodW1iVGFyZ2V0RXZ0Xyk7XG4gICAgdGhpcy5oYW5kbGluZ1RodW1iVGFyZ2V0RXZ0XyA9IGZhbHNlO1xuICAgIHRoaXMuc2V0QWN0aXZlXyh0cnVlKTtcblxuICAgIGNvbnN0IG1vdmVIYW5kbGVyID0gKGV2dCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVNb3ZlXyhldnQpO1xuICAgIH07XG5cbiAgICAvLyBOb3RlOiB1cEhhbmRsZXIgaXMgW2RlXXJlZ2lzdGVyZWQgb24gQUxMIHBvdGVudGlhbCBwb2ludGVyLXJlbGF0ZWQgcmVsZWFzZSBldmVudCB0eXBlcywgc2luY2Ugc29tZSBicm93c2Vyc1xuICAgIC8vIGRvIG5vdCBhbHdheXMgZmlyZSB0aGVzZSBjb25zaXN0ZW50bHkgaW4gcGFpcnMuXG4gICAgLy8gKFNlZSBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9pc3N1ZXMvMTE5MilcbiAgICBjb25zdCB1cEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZVVwXygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyQm9keUludGVyYWN0aW9uSGFuZGxlcihNT1ZFX0VWRU5UX01BUFtldnQudHlwZV0sIG1vdmVIYW5kbGVyKTtcbiAgICAgIFVQX0VWRU5UUy5mb3JFYWNoKChldnROYW1lKSA9PiB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJCb2R5SW50ZXJhY3Rpb25IYW5kbGVyKGV2dE5hbWUsIHVwSGFuZGxlcikpO1xuICAgIH07XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyQm9keUludGVyYWN0aW9uSGFuZGxlcihNT1ZFX0VWRU5UX01BUFtldnQudHlwZV0sIG1vdmVIYW5kbGVyKTtcbiAgICBVUF9FVkVOVFMuZm9yRWFjaCgoZXZ0TmFtZSkgPT4gdGhpcy5hZGFwdGVyXy5yZWdpc3RlckJvZHlJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0TmFtZSwgdXBIYW5kbGVyKSk7XG4gICAgdGhpcy5zZXRWYWx1ZUZyb21FdnRfKGV2dCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgbW92ZXMgdGhlIHNsaWRlclxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoYW5kbGVNb3ZlXyhldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFZhbHVlRnJvbUV2dF8oZXZ0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdXNlcidzIGludGVyYWN0aW9uIHdpdGggdGhlIHNsaWRlciBlbmRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBoYW5kbGVVcF8oKSB7XG4gICAgdGhpcy5zZXRBY3RpdmVfKGZhbHNlKTtcbiAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUNoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBhZ2VYIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldFBhZ2VYXyhldnQpIHtcbiAgICBpZiAoZXZ0LnRhcmdldFRvdWNoZXMgJiYgZXZ0LnRhcmdldFRvdWNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGV2dC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgIH1cbiAgICByZXR1cm4gZXZ0LnBhZ2VYO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNsaWRlciB2YWx1ZSBmcm9tIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFZhbHVlRnJvbUV2dF8oZXZ0KSB7XG4gICAgY29uc3QgcGFnZVggPSB0aGlzLmdldFBhZ2VYXyhldnQpO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb21wdXRlVmFsdWVGcm9tUGFnZVhfKHBhZ2VYKTtcbiAgICB0aGlzLnNldFZhbHVlXyh2YWx1ZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgdGhlIG5ldyB2YWx1ZSBmcm9tIHRoZSBwYWdlWCBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZVhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgY29tcHV0ZVZhbHVlRnJvbVBhZ2VYXyhwYWdlWCkge1xuICAgIGNvbnN0IHttYXhfOiBtYXgsIG1pbl86IG1pbn0gPSB0aGlzO1xuICAgIGNvbnN0IHhQb3MgPSBwYWdlWCAtIHRoaXMucmVjdF8ubGVmdDtcbiAgICBsZXQgcGN0Q29tcGxldGUgPSB4UG9zIC8gdGhpcy5yZWN0Xy53aWR0aDtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1JUTCgpKSB7XG4gICAgICBwY3RDb21wbGV0ZSA9IDEgLSBwY3RDb21wbGV0ZTtcbiAgICB9XG4gICAgLy8gRml0IHRoZSBwZXJjZW50YWdlIGNvbXBsZXRlIGJldHdlZW4gdGhlIHJhbmdlIFttaW4sbWF4XVxuICAgIC8vIGJ5IHJlbWFwcGluZyBmcm9tIFswLCAxXSB0byBbbWluLCBtaW4rKG1heC1taW4pXS5cbiAgICByZXR1cm4gbWluICsgcGN0Q29tcGxldGUgKiAobWF4IC0gbWluKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGtleWRvd24gZXZlbnRzXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZUtleWRvd25fKGV2dCkge1xuICAgIGNvbnN0IGtleUlkID0gdGhpcy5nZXRLZXlJZF8oZXZ0KTtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWVGb3JLZXlJZF8oa2V5SWQpO1xuICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50IHBhZ2UgZnJvbSBzY3JvbGxpbmcgZHVlIHRvIGtleSBwcmVzc2VzIHRoYXQgd291bGQgbm9ybWFsbHkgc2Nyb2xsIHRoZSBwYWdlXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkZPQ1VTKTtcbiAgICB0aGlzLnNldFZhbHVlXyh2YWx1ZSwgdHJ1ZSk7XG4gICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlDaGFuZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb21wdXRlZCBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0geyFFdmVudH0ga2JkRXZ0XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldEtleUlkXyhrYmRFdnQpIHtcbiAgICBpZiAoa2JkRXZ0LmtleSA9PT0gS0VZX0lEUy5BUlJPV19MRUZUIHx8IGtiZEV2dC5rZXlDb2RlID09PSAzNykge1xuICAgICAgcmV0dXJuIEtFWV9JRFMuQVJST1dfTEVGVDtcbiAgICB9XG4gICAgaWYgKGtiZEV2dC5rZXkgPT09IEtFWV9JRFMuQVJST1dfUklHSFQgfHwga2JkRXZ0LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICByZXR1cm4gS0VZX0lEUy5BUlJPV19SSUdIVDtcbiAgICB9XG4gICAgaWYgKGtiZEV2dC5rZXkgPT09IEtFWV9JRFMuQVJST1dfVVAgfHwga2JkRXZ0LmtleUNvZGUgPT09IDM4KSB7XG4gICAgICByZXR1cm4gS0VZX0lEUy5BUlJPV19VUDtcbiAgICB9XG4gICAgaWYgKGtiZEV2dC5rZXkgPT09IEtFWV9JRFMuQVJST1dfRE9XTiB8fCBrYmRFdnQua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgIHJldHVybiBLRVlfSURTLkFSUk9XX0RPV047XG4gICAgfVxuICAgIGlmIChrYmRFdnQua2V5ID09PSBLRVlfSURTLkhPTUUgfHwga2JkRXZ0LmtleUNvZGUgPT09IDM2KSB7XG4gICAgICByZXR1cm4gS0VZX0lEUy5IT01FO1xuICAgIH1cbiAgICBpZiAoa2JkRXZ0LmtleSA9PT0gS0VZX0lEUy5FTkQgfHwga2JkRXZ0LmtleUNvZGUgPT09IDM1KSB7XG4gICAgICByZXR1cm4gS0VZX0lEUy5FTkQ7XG4gICAgfVxuICAgIGlmIChrYmRFdnQua2V5ID09PSBLRVlfSURTLlBBR0VfVVAgfHwga2JkRXZ0LmtleUNvZGUgPT09IDMzKSB7XG4gICAgICByZXR1cm4gS0VZX0lEUy5QQUdFX1VQO1xuICAgIH1cbiAgICBpZiAoa2JkRXZ0LmtleSA9PT0gS0VZX0lEUy5QQUdFX0RPV04gfHwga2JkRXZ0LmtleUNvZGUgPT09IDM0KSB7XG4gICAgICByZXR1cm4gS0VZX0lEUy5QQUdFX0RPV047XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSB2YWx1ZSBnaXZlbiBhIGtleWJvYXJkIGtleSBJRFxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5SWRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0VmFsdWVGb3JLZXlJZF8oa2V5SWQpIHtcbiAgICBjb25zdCB7bWF4XzogbWF4LCBtaW5fOiBtaW4sIHN0ZXBfOiBzdGVwfSA9IHRoaXM7XG4gICAgbGV0IGRlbHRhID0gc3RlcCB8fCAobWF4IC0gbWluKSAvIDEwMDtcbiAgICBjb25zdCB2YWx1ZU5lZWRzVG9CZUZsaXBwZWQgPSB0aGlzLmFkYXB0ZXJfLmlzUlRMKCkgJiYgKFxuICAgICAga2V5SWQgPT09IEtFWV9JRFMuQVJST1dfTEVGVCB8fCBrZXlJZCA9PT0gS0VZX0lEUy5BUlJPV19SSUdIVFxuICAgICk7XG4gICAgaWYgKHZhbHVlTmVlZHNUb0JlRmxpcHBlZCkge1xuICAgICAgZGVsdGEgPSAtZGVsdGE7XG4gICAgfVxuXG4gICAgc3dpdGNoIChrZXlJZCkge1xuICAgIGNhc2UgS0VZX0lEUy5BUlJPV19MRUZUOlxuICAgIGNhc2UgS0VZX0lEUy5BUlJPV19ET1dOOlxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVfIC0gZGVsdGE7XG4gICAgY2FzZSBLRVlfSURTLkFSUk9XX1JJR0hUOlxuICAgIGNhc2UgS0VZX0lEUy5BUlJPV19VUDpcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlXyArIGRlbHRhO1xuICAgIGNhc2UgS0VZX0lEUy5IT01FOlxuICAgICAgcmV0dXJuIHRoaXMubWluXztcbiAgICBjYXNlIEtFWV9JRFMuRU5EOlxuICAgICAgcmV0dXJuIHRoaXMubWF4XztcbiAgICBjYXNlIEtFWV9JRFMuUEFHRV9VUDpcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlXyArIGRlbHRhICogbnVtYmVycy5QQUdFX0ZBQ1RPUjtcbiAgICBjYXNlIEtFWV9JRFMuUEFHRV9ET1dOOlxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVfIC0gZGVsdGEgKiBudW1iZXJzLlBBR0VfRkFDVE9SO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZvY3VzXygpIHtcbiAgICBpZiAodGhpcy5wcmV2ZW50Rm9jdXNTdGF0ZV8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkZPQ1VTKTtcbiAgfVxuXG4gIGhhbmRsZUJsdXJfKCkge1xuICAgIHRoaXMucHJldmVudEZvY3VzU3RhdGVfID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkZPQ1VTKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgc2xpZGVyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZEZpcmVJbnB1dFxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVxuICAgKi9cbiAgc2V0VmFsdWVfKHZhbHVlLCBzaG91bGRGaXJlSW5wdXQsIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMudmFsdWVfICYmICFmb3JjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHttaW5fOiBtaW4sIG1heF86IG1heH0gPSB0aGlzO1xuICAgIGNvbnN0IHZhbHVlU2V0VG9Cb3VuZGFyeSA9IHZhbHVlID09PSBtaW4gfHwgdmFsdWUgPT09IG1heDtcbiAgICBpZiAodGhpcy5zdGVwXyAmJiAhdmFsdWVTZXRUb0JvdW5kYXJ5KSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucXVhbnRpemVfKHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlIDwgbWluKSB7XG4gICAgICB2YWx1ZSA9IG1pbjtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID4gbWF4KSB7XG4gICAgICB2YWx1ZSA9IG1heDtcbiAgICB9XG4gICAgdGhpcy52YWx1ZV8gPSB2YWx1ZTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZShzdHJpbmdzLkFSSUFfVkFMVUVOT1csIFN0cmluZyh0aGlzLnZhbHVlXykpO1xuICAgIHRoaXMudXBkYXRlVUlGb3JDdXJyZW50VmFsdWVfKCk7XG5cbiAgICBpZiAoc2hvdWxkRmlyZUlucHV0KSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUlucHV0KCk7XG4gICAgICBpZiAodGhpcy5pc0Rpc2NyZXRlXykge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldE1hcmtlclZhbHVlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgcXVhbnRpemVkIHZhbHVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBxdWFudGl6ZV8odmFsdWUpIHtcbiAgICBjb25zdCBudW1TdGVwcyA9IE1hdGgucm91bmQodmFsdWUgLyB0aGlzLnN0ZXBfKTtcbiAgICBjb25zdCBxdWFudGl6ZWRWYWwgPSBudW1TdGVwcyAqIHRoaXMuc3RlcF87XG4gICAgcmV0dXJuIHF1YW50aXplZFZhbDtcbiAgfVxuXG4gIHVwZGF0ZVVJRm9yQ3VycmVudFZhbHVlXygpIHtcbiAgICBjb25zdCB7bWF4XzogbWF4LCBtaW5fOiBtaW4sIHZhbHVlXzogdmFsdWV9ID0gdGhpcztcbiAgICBjb25zdCBwY3RDb21wbGV0ZSA9ICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKTtcbiAgICBsZXQgdHJhbnNsYXRlUHggPSBwY3RDb21wbGV0ZSAqIHRoaXMucmVjdF8ud2lkdGg7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNSVEwoKSkge1xuICAgICAgdHJhbnNsYXRlUHggPSB0aGlzLnJlY3RfLndpZHRoIC0gdHJhbnNsYXRlUHg7XG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNmb3JtUHJvcCA9IGdldENvcnJlY3RQcm9wZXJ0eU5hbWUod2luZG93LCAndHJhbnNmb3JtJyk7XG4gICAgY29uc3QgdHJhbnNpdGlvbmVuZEV2dE5hbWUgPSBnZXRDb3JyZWN0RXZlbnROYW1lKHdpbmRvdywgJ3RyYW5zaXRpb25lbmQnKTtcblxuICAgIGlmICh0aGlzLmluVHJhbnNpdF8pIHtcbiAgICAgIGNvbnN0IG9uVHJhbnNpdGlvbkVuZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRJblRyYW5zaXRfKGZhbHNlKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyVGh1bWJDb250YWluZXJJbnRlcmFjdGlvbkhhbmRsZXIodHJhbnNpdGlvbmVuZEV2dE5hbWUsIG9uVHJhbnNpdGlvbkVuZCk7XG4gICAgICB9O1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclRodW1iQ29udGFpbmVySW50ZXJhY3Rpb25IYW5kbGVyKHRyYW5zaXRpb25lbmRFdnROYW1lLCBvblRyYW5zaXRpb25FbmQpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlVUlGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogSXQgd291bGQgYmUgbmljZSB0byB1c2UgY2FsYygpIGhlcmUsXG4gICAgICAvLyBidXQgSUUgY2Fubm90IGhhbmRsZSBjYWxjcyBpbiB0cmFuc2Zvcm1zIGNvcnJlY3RseS5cbiAgICAgIC8vIFNlZTogaHR0cHM6Ly9nb28uZ2wvTkMyaXRrXG4gICAgICAvLyBBbHNvIG5vdGUgdGhhdCB0aGUgLTUwJSBvZmZzZXQgaXMgdXNlZCB0byBjZW50ZXIgdGhlIHNsaWRlciB0aHVtYi5cbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0VGh1bWJDb250YWluZXJTdHlsZVByb3BlcnR5KHRyYW5zZm9ybVByb3AsIGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlUHh9cHgpIHRyYW5zbGF0ZVgoLTUwJSlgKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0VHJhY2tTdHlsZVByb3BlcnR5KHRyYW5zZm9ybVByb3AsIGBzY2FsZVgoJHtwY3RDb21wbGV0ZX0pYCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgYWN0aXZlIHN0YXRlIG9mIHRoZSBzbGlkZXJcbiAgICogQHBhcmFtIHtib29sZWFufSBhY3RpdmVcbiAgICovXG4gIHNldEFjdGl2ZV8oYWN0aXZlKSB7XG4gICAgdGhpcy5hY3RpdmVfID0gYWN0aXZlO1xuICAgIHRoaXMudG9nZ2xlQ2xhc3NfKGNzc0NsYXNzZXMuQUNUSVZFLCB0aGlzLmFjdGl2ZV8pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGluVHJhbnNpdCBzdGF0ZSBvZiB0aGUgc2xpZGVyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5UcmFuc2l0XG4gICAqL1xuICBzZXRJblRyYW5zaXRfKGluVHJhbnNpdCkge1xuICAgIHRoaXMuaW5UcmFuc2l0XyA9IGluVHJhbnNpdDtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzXyhjc3NDbGFzc2VzLklOX1RSQU5TSVQsIHRoaXMuaW5UcmFuc2l0Xyk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZGl0aW9uYWxseSBhZGRzIG9yIHJlbW92ZXMgYSBjbGFzcyBiYXNlZCBvbiBzaG91bGRCZVByZXNlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZEJlUHJlc2VudFxuICAgKi9cbiAgdG9nZ2xlQ2xhc3NfKGNsYXNzTmFtZSwgc2hvdWxkQmVQcmVzZW50KSB7XG4gICAgaWYgKHNob3VsZEJlUHJlc2VudCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1NsaWRlckZvdW5kYXRpb247XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICA6Y2xhc3M9XCJjbGFzc2VzXCJcbiAgICBjbGFzcz1cIm1kYy1zbGlkZXJcIlxuICAgIHRhYmluZGV4PVwiMFwiXG4gICAgcm9sZT1cInNsaWRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJtZGMtc2xpZGVyX190cmFjay1jb250YWluZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgOnN0eWxlPVwidHJhY2tTdHlsZXNcIlxuICAgICAgICBjbGFzcz1cIm1kYy1zbGlkZXJfX3RyYWNrXCIvPlxuICAgICAgPGRpdlxuICAgICAgICB2LWlmPVwiaGFzTWFya2Vyc1wiXG4gICAgICAgIGNsYXNzPVwibWRjLXNsaWRlcl9fdHJhY2stbWFya2VyLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdi1mb3I9XCJtYXJrZXJOdW0gaW4gbnVtTWFya2Vyc1wiXG4gICAgICAgICAgOmtleT1cIm1hcmtlck51bVwiXG4gICAgICAgICAgOnN0eWxlPVwiKG1hcmtlck51bSA9PSBudW1NYXJrZXJzKSA/IGxhc3RUcmFja01hcmtlcnNTdHlsZXMgOiB7fVwiXG4gICAgICAgICAgY2xhc3M9XCJtZGMtc2xpZGVyX190cmFjay1tYXJrZXJcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgcmVmPVwidGh1bWJDb250YWluZXJcIlxuICAgICAgOnN0eWxlPVwidGh1bWJTdHlsZXNcIlxuICAgICAgY2xhc3M9XCJtZGMtc2xpZGVyX190aHVtYi1jb250YWluZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgdi1pZj1cImlzRGlzY3JldGVcIlxuICAgICAgICBjbGFzcz1cIm1kYy1zbGlkZXJfX3BpblwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1kYy1zbGlkZXJfX3Bpbi12YWx1ZS1tYXJrZXJcIj57eyBtYXJrZXJWYWx1ZSB9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN2Z1xuICAgICAgICBjbGFzcz1cIm1kYy1zbGlkZXJfX3RodW1iXCJcbiAgICAgICAgd2lkdGg9XCIyMVwiXG4gICAgICAgIGhlaWdodD1cIjIxXCI+XG4gICAgICAgIDxjaXJjbGVcbiAgICAgICAgICBjeD1cIjEwLjVcIlxuICAgICAgICAgIGN5PVwiMTAuNVwiXG4gICAgICAgICAgcj1cIjcuODc1XCIvPlxuICAgICAgPC9zdmc+XG4gICAgICA8ZGl2IGNsYXNzPVwibWRjLXNsaWRlcl9fZm9jdXMtcmluZ1wiLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1EQ1NsaWRlckZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL3NsaWRlci9mb3VuZGF0aW9uJ1xuaW1wb3J0IHsgRGlzcGF0Y2hGb2N1c01peGluLCBhcHBseVBhc3NpdmUgfSBmcm9tICcuLi9iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtc2xpZGVyJyxcbiAgbWl4aW5zOiBbRGlzcGF0Y2hGb2N1c01peGluXSxcbiAgbW9kZWw6IHtcbiAgICBwcm9wOiAndmFsdWUnLFxuICAgIGV2ZW50OiAnY2hhbmdlJ1xuICB9LFxuICBwcm9wczoge1xuICAgIHZhbHVlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgIG1pbjogeyB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLCBkZWZhdWx0OiAwIH0sXG4gICAgbWF4OiB7IHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sIGRlZmF1bHQ6IDEwMCB9LFxuICAgIHN0ZXA6IHsgdHlwZTogW051bWJlciwgU3RyaW5nXSwgZGVmYXVsdDogMCB9LFxuICAgIGRpc3BsYXlNYXJrZXJzOiBCb29sZWFuLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIGxheW91dE9uOiBTdHJpbmcsXG4gICAgbGF5b3V0T25Tb3VyY2U6IHsgdHlwZTogT2JqZWN0LCByZXF1aXJlZDogZmFsc2UgfVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgICdtZGMtc2xpZGVyLS1kaXNjcmV0ZSc6ICEhdGhpcy5zdGVwLFxuICAgICAgICAnbWRjLXNsaWRlci0tZGlzcGxheS1tYXJrZXJzJzogdGhpcy5kaXNwbGF5TWFya2Vyc1xuICAgICAgfSxcbiAgICAgIHRyYWNrU3R5bGVzOiB7fSxcbiAgICAgIGxhc3RUcmFja01hcmtlcnNTdHlsZXM6IHt9LFxuICAgICAgdGh1bWJTdHlsZXM6IHt9LFxuICAgICAgbWFya2VyVmFsdWU6ICcnLFxuICAgICAgbnVtTWFya2VyczogMFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpc0Rpc2NyZXRlKCkge1xuICAgICAgcmV0dXJuICEhdGhpcy5zdGVwXG4gICAgfSxcbiAgICBoYXNNYXJrZXJzKCkge1xuICAgICAgcmV0dXJuICEhdGhpcy5zdGVwICYmIHRoaXMuZGlzcGxheU1hcmtlcnMgJiYgdGhpcy5udW1NYXJrZXJzXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIHZhbHVlKCkge1xuICAgICAgaWYgKHRoaXMuZm91bmRhdGlvbi5nZXRWYWx1ZSgpICE9PSBOdW1iZXIodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldFZhbHVlKHRoaXMudmFsdWUpXG4gICAgICB9XG4gICAgfSxcbiAgICBtaW4oKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0TWluKE51bWJlcih0aGlzLm1pbikpXG4gICAgfSxcbiAgICBtYXgoKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0TWF4KE51bWJlcih0aGlzLm1heCkpXG4gICAgfSxcbiAgICBzdGVwKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldFN0ZXAoTnVtYmVyKHRoaXMuc3RlcCkpXG4gICAgfSxcbiAgICBkaXNhYmxlZCgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXREaXNhYmxlZCh0aGlzLmRpc2FibGVkKVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDU2xpZGVyRm91bmRhdGlvbih7XG4gICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgIH0sXG4gICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHtcbiAgICAgICAgdGhpcy4kZGVsZXRlKHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKVxuICAgICAgfSxcbiAgICAgIGdldEF0dHJpYnV0ZTogbmFtZSA9PiB0aGlzLiRlbC5nZXRBdHRyaWJ1dGUobmFtZSksXG4gICAgICBzZXRBdHRyaWJ1dGU6IChuYW1lLCB2YWx1ZSkgPT4gdGhpcy4kZWwuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSxcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZTogbmFtZSA9PiB0aGlzLiRlbC5yZW1vdmVBdHRyaWJ1dGUobmFtZSksXG4gICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiB0aGlzLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGdldFRhYkluZGV4OiAoKSA9PiB0aGlzLiRlbC50YWJJbmRleCxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAodHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgfSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICh0eXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgIHRoaXMuJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXJUaHVtYkNvbnRhaW5lckludGVyYWN0aW9uSGFuZGxlcjogKHR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgdGhpcy4kcmVmcy50aHVtYkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICApXG4gICAgICB9LFxuICAgICAgZGVyZWdpc3RlclRodW1iQ29udGFpbmVySW50ZXJhY3Rpb25IYW5kbGVyOiAodHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICB0aGlzLiRyZWZzLnRodW1iQ29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICByZWdpc3RlckJvZHlJbnRlcmFjdGlvbkhhbmRsZXI6ICh0eXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKVxuICAgICAgfSxcbiAgICAgIGRlcmVnaXN0ZXJCb2R5SW50ZXJhY3Rpb25IYW5kbGVyOiAodHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlcilcbiAgICAgIH0sXG4gICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgIH0sXG4gICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgfSxcbiAgICAgIG5vdGlmeUlucHV0OiAoKSA9PiB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdGhpcy5mb3VuZGF0aW9uLmdldFZhbHVlKCkpXG4gICAgICB9LFxuICAgICAgbm90aWZ5Q2hhbmdlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMuZm91bmRhdGlvbi5nZXRWYWx1ZSgpKVxuICAgICAgfSxcbiAgICAgIHNldFRodW1iQ29udGFpbmVyU3R5bGVQcm9wZXJ0eTogKHByb3BlcnR5TmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMudGh1bWJTdHlsZXMsIHByb3BlcnR5TmFtZSwgdmFsdWUpXG4gICAgICB9LFxuICAgICAgc2V0VHJhY2tTdHlsZVByb3BlcnR5OiAocHJvcGVydHlOYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLiRzZXQodGhpcy50cmFja1N0eWxlcywgcHJvcGVydHlOYW1lLCB2YWx1ZSlcbiAgICAgIH0sXG4gICAgICBzZXRNYXJrZXJWYWx1ZTogdmFsdWUgPT4ge1xuICAgICAgICB0aGlzLm1hcmtlclZhbHVlID0gdmFsdWVcbiAgICAgIH0sXG4gICAgICBhcHBlbmRUcmFja01hcmtlcnM6IG51bU1hcmtlcnMgPT4ge1xuICAgICAgICB0aGlzLm51bU1hcmtlcnMgPSBudW1NYXJrZXJzXG4gICAgICB9LFxuICAgICAgcmVtb3ZlVHJhY2tNYXJrZXJzOiAoKSA9PiB7XG4gICAgICAgIHRoaXMubnVtTWFya2VycyA9IDBcbiAgICAgIH0sXG4gICAgICBzZXRMYXN0VHJhY2tNYXJrZXJzU3R5bGVQcm9wZXJ0eTogKHByb3BlcnR5TmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMubGFzdFRyYWNrTWFya2Vyc1N0eWxlcywgcHJvcGVydHlOYW1lLCB2YWx1ZSlcbiAgICAgIH0sXG4gICAgICBpc1JUTDogKCkgPT4gZmFsc2VcbiAgICB9KVxuXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuICAgIHRoaXMuZm91bmRhdGlvbi5zZXREaXNhYmxlZCh0aGlzLmRpc2FibGVkKVxuICAgIGlmIChOdW1iZXIodGhpcy5taW4pIDw9IHRoaXMuZm91bmRhdGlvbi5nZXRNYXgoKSkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldE1pbihOdW1iZXIodGhpcy5taW4pKVxuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldE1heChOdW1iZXIodGhpcy5tYXgpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0TWF4KE51bWJlcih0aGlzLm1heCkpXG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0TWluKE51bWJlcih0aGlzLm1pbikpXG4gICAgfVxuICAgIHRoaXMuZm91bmRhdGlvbi5zZXRTdGVwKE51bWJlcih0aGlzLnN0ZXApKVxuICAgIHRoaXMuZm91bmRhdGlvbi5zZXRWYWx1ZShOdW1iZXIodGhpcy52YWx1ZSkpXG4gICAgaWYgKHRoaXMuaGFzTWFya2Vycykge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldHVwVHJhY2tNYXJrZXIoKVxuICAgIH1cblxuICAgIHRoaXMuJHJvb3QuJG9uKCd2bWE6bGF5b3V0JywgdGhpcy5sYXlvdXQpXG5cbiAgICBpZiAodGhpcy5sYXlvdXRPbikge1xuICAgICAgdGhpcy5sYXlvdXRPbkV2ZW50U291cmNlID0gdGhpcy5sYXlvdXRPblNvdXJjZSB8fCB0aGlzLiRyb290XG4gICAgICB0aGlzLmxheW91dE9uRXZlbnRTb3VyY2UuJG9uKHRoaXMubGF5b3V0T24sIHRoaXMubGF5b3V0KVxuICAgIH1cbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLiRyb290LiRvZmYoJ3ZtYTpsYXlvdXQnLCB0aGlzLmxheW91dClcbiAgICBpZiAodGhpcy5sYXlvdXRPbkV2ZW50U291cmNlKSB7XG4gICAgICB0aGlzLmxheW91dE9uRXZlbnRTb3VyY2UuJG9mZih0aGlzLmxheW91dE9uLCB0aGlzLmxheW91dClcbiAgICB9XG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbGF5b3V0KCkge1xuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24gJiYgdGhpcy5mb3VuZGF0aW9uLmxheW91dCgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBtZGNTbGlkZXIgZnJvbSAnLi9tZGMtc2xpZGVyLnZ1ZSdcblxuZXhwb3J0IHsgbWRjU2xpZGVyIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY1NsaWRlclxufSlcbiIsImltcG9ydCAnLi9zdHlsZXMuc2NzcydcbmltcG9ydCB7IGF1dG9Jbml0IH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBwbHVnaW4gZnJvbSAnLi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG5hdXRvSW5pdChwbHVnaW4pXG4iXSwibmFtZXMiOlsic3VwcG9ydHNQYXNzaXZlXyIsImFwcGx5UGFzc2l2ZSIsImdsb2JhbE9iaiIsIndpbmRvdyIsImZvcmNlUmVmcmVzaCIsInVuZGVmaW5lZCIsImlzU3VwcG9ydGVkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsImUiLCJhdXRvSW5pdCIsInBsdWdpbiIsIl9WdWUiLCJWdWUiLCJnbG9iYWwiLCJ1c2UiLCJCYXNlUGx1Z2luIiwiY29tcG9uZW50cyIsInZlcnNpb24iLCJpbnN0YWxsIiwidm0iLCJrZXkiLCJjb21wb25lbnQiLCJuYW1lIiwiRGlzcGF0Y2hGb2N1c01peGluIiwiZGF0YSIsImhhc0ZvY3VzIiwibWV0aG9kcyIsIm9uTW91c2VEb3duIiwiX2FjdGl2ZSIsIm9uTW91c2VVcCIsIm9uRm9jdXNFdmVudCIsInNldFRpbWVvdXQiLCJkaXNwYXRjaEZvY3VzRXZlbnQiLCJvbkJsdXJFdmVudCIsIiRlbCIsImFjdGl2ZUVsZW1lbnQiLCJjb250YWlucyIsIiRlbWl0IiwibW91bnRlZCIsImJlZm9yZURlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImNzc0NsYXNzZXMiLCJBQ1RJVkUiLCJESVNBQkxFRCIsIkRJU0NSRVRFIiwiRk9DVVMiLCJJTl9UUkFOU0lUIiwiSVNfRElTQ1JFVEUiLCJIQVNfVFJBQ0tfTUFSS0VSIiwic3RyaW5ncyIsIlRSQUNLX1NFTEVDVE9SIiwiVFJBQ0tfTUFSS0VSX0NPTlRBSU5FUl9TRUxFQ1RPUiIsIkxBU1RfVFJBQ0tfTUFSS0VSX1NFTEVDVE9SIiwiVEhVTUJfQ09OVEFJTkVSX1NFTEVDVE9SIiwiUElOX1ZBTFVFX01BUktFUl9TRUxFQ1RPUiIsIkFSSUFfVkFMVUVNSU4iLCJBUklBX1ZBTFVFTUFYIiwiQVJJQV9WQUxVRU5PVyIsIkFSSUFfRElTQUJMRUQiLCJTVEVQX0RBVEFfQVRUUiIsIkNIQU5HRV9FVkVOVCIsIklOUFVUX0VWRU5UIiwibnVtYmVycyIsIlBBR0VfRkFDVE9SIiwiTURDU2xpZGVyQWRhcHRlciIsImNsYXNzTmFtZSIsInZhbHVlIiwidHlwZSIsImhhbmRsZXIiLCJwcm9wZXJ0eU5hbWUiLCJudW1NYXJrZXJzIiwiZXZlbnRUeXBlTWFwIiwibm9QcmVmaXgiLCJ3ZWJraXRQcmVmaXgiLCJzdHlsZVByb3BlcnR5IiwiY3NzUHJvcGVydHlNYXAiLCJoYXNQcm9wZXJTaGFwZSIsIndpbmRvd09iaiIsImV2ZW50Rm91bmRJbk1hcHMiLCJldmVudFR5cGUiLCJnZXRKYXZhU2NyaXB0RXZlbnROYW1lIiwibWFwIiwiZWwiLCJzdHlsZSIsImdldEFuaW1hdGlvbk5hbWUiLCJldmVudE5hbWUiLCJnZXRDb3JyZWN0RXZlbnROYW1lIiwiZ2V0Q29ycmVjdFByb3BlcnR5TmFtZSIsIk1EQ0ZvdW5kYXRpb24iLCJhZGFwdGVyIiwiYWRhcHRlcl8iLCJLRVlfSURTIiwiQVJST1dfTEVGVCIsIkFSUk9XX1JJR0hUIiwiQVJST1dfVVAiLCJBUlJPV19ET1dOIiwiSE9NRSIsIkVORCIsIlBBR0VfVVAiLCJQQUdFX0RPV04iLCJNT1ZFX0VWRU5UX01BUCIsIkRPV05fRVZFTlRTIiwiVVBfRVZFTlRTIiwiTURDU2xpZGVyRm91bmRhdGlvbiIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbXB1dGVCb3VuZGluZ1JlY3QiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsImdldFRhYkluZGV4IiwicmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJUaHVtYkNvbnRhaW5lckludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJUaHVtYkNvbnRhaW5lckludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyQm9keUludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJCb2R5SW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwiZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJub3RpZnlJbnB1dCIsIm5vdGlmeUNoYW5nZSIsInNldFRodW1iQ29udGFpbmVyU3R5bGVQcm9wZXJ0eSIsInNldFRyYWNrU3R5bGVQcm9wZXJ0eSIsInNldE1hcmtlclZhbHVlIiwiYXBwZW5kVHJhY2tNYXJrZXJzIiwicmVtb3ZlVHJhY2tNYXJrZXJzIiwic2V0TGFzdFRyYWNrTWFya2Vyc1N0eWxlUHJvcGVydHkiLCJpc1JUTCIsImRlZmF1bHRBZGFwdGVyIiwicmVjdF8iLCJzYXZlZFRhYkluZGV4XyIsIk5hTiIsImFjdGl2ZV8iLCJpblRyYW5zaXRfIiwiaXNEaXNjcmV0ZV8iLCJoYXNUcmFja01hcmtlcl8iLCJoYW5kbGluZ1RodW1iVGFyZ2V0RXZ0XyIsIm1pbl8iLCJtYXhfIiwic3RlcF8iLCJ2YWx1ZV8iLCJkaXNhYmxlZF8iLCJwcmV2ZW50Rm9jdXNTdGF0ZV8iLCJ1cGRhdGVVSUZyYW1lXyIsInRodW1iQ29udGFpbmVyUG9pbnRlckhhbmRsZXJfIiwiaW50ZXJhY3Rpb25TdGFydEhhbmRsZXJfIiwiZXZ0IiwiaGFuZGxlRG93bl8iLCJrZXlkb3duSGFuZGxlcl8iLCJoYW5kbGVLZXlkb3duXyIsImZvY3VzSGFuZGxlcl8iLCJoYW5kbGVGb2N1c18iLCJibHVySGFuZGxlcl8iLCJoYW5kbGVCbHVyXyIsInJlc2l6ZUhhbmRsZXJfIiwibGF5b3V0IiwiZm9yRWFjaCIsImV2dE5hbWUiLCJnZXRTdGVwIiwibWluIiwiZ2V0TWluIiwibWF4IiwiZ2V0TWF4Iiwic3RlcCIsImluZGl2aXNpYmxlIiwiY2VpbCIsImxhc3RTdGVwUmF0aW8iLCJmbGV4IiwiU3RyaW5nIiwidXBkYXRlVUlGb3JDdXJyZW50VmFsdWVfIiwic2V0VmFsdWVfIiwiRXJyb3IiLCJzZXR1cFRyYWNrTWFya2VyIiwiZGlzYWJsZWQiLCJ0b2dnbGVDbGFzc18iLCJpc05hTiIsInNldEluVHJhbnNpdF8iLCJzZXRBY3RpdmVfIiwibW92ZUhhbmRsZXIiLCJoYW5kbGVNb3ZlXyIsInVwSGFuZGxlciIsImhhbmRsZVVwXyIsInNldFZhbHVlRnJvbUV2dF8iLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldFRvdWNoZXMiLCJsZW5ndGgiLCJwYWdlWCIsImdldFBhZ2VYXyIsImNvbXB1dGVWYWx1ZUZyb21QYWdlWF8iLCJ4UG9zIiwicGN0Q29tcGxldGUiLCJrZXlJZCIsImdldEtleUlkXyIsImdldFZhbHVlRm9yS2V5SWRfIiwia2JkRXZ0Iiwia2V5Q29kZSIsImRlbHRhIiwidmFsdWVOZWVkc1RvQmVGbGlwcGVkIiwic2hvdWxkRmlyZUlucHV0IiwiZm9yY2UiLCJ2YWx1ZVNldFRvQm91bmRhcnkiLCJxdWFudGl6ZV8iLCJudW1TdGVwcyIsInJvdW5kIiwicXVhbnRpemVkVmFsIiwidHJhbnNsYXRlUHgiLCJ0cmFuc2Zvcm1Qcm9wIiwidHJhbnNpdGlvbmVuZEV2dE5hbWUiLCJvblRyYW5zaXRpb25FbmQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhY3RpdmUiLCJpblRyYW5zaXQiLCJzaG91bGRCZVByZXNlbnQiLCJtZGNTbGlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSxJQUFJQSxnQkFBSjtFQUVBOzs7Ozs7O0FBTUEsRUFBTyxTQUFTQyxZQUFULEdBQWdFO0VBQUEsTUFBMUNDLFNBQTBDLHVFQUE5QkMsTUFBOEI7RUFBQSxNQUF0QkMsWUFBc0IsdUVBQVAsS0FBTzs7RUFDckUsTUFBSUosZ0JBQWdCLEtBQUtLLFNBQXJCLElBQWtDRCxZQUF0QyxFQUFvRDtFQUNsRCxRQUFJRSxXQUFXLEdBQUcsS0FBbEI7O0VBQ0EsUUFBSTtFQUNGSixNQUFBQSxTQUFTLENBQUNLLFFBQVYsQ0FBbUJDLGdCQUFuQixDQUFvQyxNQUFwQyxFQUE0QyxJQUE1QyxFQUFrRDtFQUNoRCxZQUFJQyxPQUFKLEdBQWM7RUFDWkgsVUFBQUEsV0FBVyxHQUFHO0VBQUVHLFlBQUFBLE9BQU8sRUFBRTtFQUFYLFdBQWQ7RUFDRDs7RUFIK0MsT0FBbEQ7RUFLRCxLQU5ELENBTUUsT0FBT0MsQ0FBUCxFQUFVO0VBRVg7O0VBRURWLElBQUFBLGdCQUFnQixHQUFHTSxXQUFuQjtFQUNEOztFQUVELFNBQU9OLGdCQUFQO0VBQ0Q7O0VDekJNLFNBQVNXLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0VBQy9CO0VBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0VBQ0EsTUFBSSxPQUFPVixNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0VBQ2pDVSxJQUFBQSxJQUFJLEdBQUdWLE1BQU0sQ0FBQ1csR0FBZDtFQUNELEdBRkQsTUFFTyxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7RUFDeEM7RUFDQUYsSUFBQUEsSUFBSSxHQUFHRSxNQUFNLENBQUNELEdBQWQ7RUFDRDs7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
