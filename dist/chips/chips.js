/**
* @module vue-mdc-adapterchips 0.19.1-beta
* @exports VueMDCChips
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.VueMDCChips = factory());
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

    var CustomElement = {
      functional: true,
      render: function render(createElement, context) {
        return createElement(context.props.is || context.props.tag || 'div', context.data, context.children);
      }
    };
    var CustomElementMixin = {
      components: {
        CustomElement: CustomElement
      }
    };

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

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
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

    var CustomLink = {
      name: 'custom-link',
      functional: true,
      props: {
        tag: {
          type: String,
          default: 'a'
        },
        link: Object
      },
      render: function render(h, context) {
        var element;

        var data = _extends({}, context.data);

        if (context.props.link && context.parent.$router) {
          // router-link case
          element = context.parent.$root.$options.components['router-link'];
          data.props = _extends({
            tag: context.props.tag
          }, context.props.link);

          if (data.on.click) {
            data.nativeOn = {
              click: data.on.click
            };
          }
        } else {
          // element fallback
          element = context.props.tag;
        }

        return h(element, data, context.children);
      }
    };
    var CustomLinkMixin = {
      props: {
        to: [String, Object],
        exact: Boolean,
        append: Boolean,
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String
      },
      computed: {
        link: function link() {
          return this.to && {
            to: this.to,
            exact: this.exact,
            append: this.append,
            replace: this.replace,
            activeClass: this.activeClass,
            exactActiveClass: this.exactActiveClass
          };
        }
      },
      components: {
        CustomLink: CustomLink
      }
    };

    /* global CustomEvent */
    function emitCustomEvent(el, evtType, evtData) {
      var shouldBubble = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
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

      el.dispatchEvent(evt);
    }

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

    /* eslint no-unused-vars: [2, {"args": "none"}] */

    /**
     * Adapter for MDC Chip.
     *
     * Defines the shape of the adapter expected by the foundation. Implement this
     * adapter to integrate the Chip into your framework. See
     * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
     * for more information.
     *
     * @record
     */
    var MDCChipAdapter =
    /*#__PURE__*/
    function () {
      function MDCChipAdapter() {
        _classCallCheck(this, MDCChipAdapter);
      }

      _createClass(MDCChipAdapter, [{
        key: "addClass",

        /**
         * Adds a class to the root element.
         * @param {string} className
         */
        value: function addClass(className) {}
        /**
         * Removes a class from the root element.
         * @param {string} className
         */

      }, {
        key: "removeClass",
        value: function removeClass(className) {}
        /**
         * Returns true if the root element contains the given class.
         * @param {string} className
         * @return {boolean}
         */

      }, {
        key: "hasClass",
        value: function hasClass(className) {}
        /**
         * Adds a class to the leading icon element.
         * @param {string} className
         */

      }, {
        key: "addClassToLeadingIcon",
        value: function addClassToLeadingIcon(className) {}
        /**
         * Removes a class from the leading icon element.
         * @param {string} className
         */

      }, {
        key: "removeClassFromLeadingIcon",
        value: function removeClassFromLeadingIcon(className) {}
        /**
         * Returns true if target has className, false otherwise.
         * @param {!EventTarget} target
         * @param {string} className
         * @return {boolean}
         */

      }, {
        key: "eventTargetHasClass",
        value: function eventTargetHasClass(target, className) {}
        /**
         * Emits a custom "MDCChip:interaction" event denoting the chip has been
         * interacted with (typically on click or keydown).
         */

      }, {
        key: "notifyInteraction",
        value: function notifyInteraction() {}
        /**
         * Emits a custom "MDCChip:selection" event denoting the chip has been selected or deselected.
         * @param {boolean} selected
         */

      }, {
        key: "notifySelection",
        value: function notifySelection(selected) {}
        /**
         * Emits a custom "MDCChip:trailingIconInteraction" event denoting the trailing icon has been
         * interacted with (typically on click or keydown).
         */

      }, {
        key: "notifyTrailingIconInteraction",
        value: function notifyTrailingIconInteraction() {}
        /**
         * Emits a custom event "MDCChip:removal" denoting the chip will be removed.
         */

      }, {
        key: "notifyRemoval",
        value: function notifyRemoval() {}
        /**
         * Returns the computed property value of the given style property on the root element.
         * @param {string} propertyName
         * @return {string}
         */

      }, {
        key: "getComputedStyleValue",
        value: function getComputedStyleValue(propertyName) {}
        /**
         * Sets the property value of the given style property on the root element.
         * @param {string} propertyName
         * @param {string} value
         */

      }, {
        key: "setStyleProperty",
        value: function setStyleProperty(propertyName, value) {}
      }]);

      return MDCChipAdapter;
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

    /** @enum {string} */
    var strings = {
      ENTRY_ANIMATION_NAME: 'mdc-chip-entry',
      INTERACTION_EVENT: 'MDCChip:interaction',
      SELECTION_EVENT: 'MDCChip:selection',
      TRAILING_ICON_INTERACTION_EVENT: 'MDCChip:trailingIconInteraction',
      REMOVAL_EVENT: 'MDCChip:removal',
      CHECKMARK_SELECTOR: '.mdc-chip__checkmark',
      LEADING_ICON_SELECTOR: '.mdc-chip__icon--leading',
      TRAILING_ICON_SELECTOR: '.mdc-chip__icon--trailing'
    };
    /** @enum {string} */

    var cssClasses = {
      CHECKMARK: 'mdc-chip__checkmark',
      CHIP_EXIT: 'mdc-chip--exit',
      HIDDEN_LEADING_ICON: 'mdc-chip__icon--leading-hidden',
      LEADING_ICON: 'mdc-chip__icon--leading',
      TRAILING_ICON: 'mdc-chip__icon--trailing',
      SELECTED: 'mdc-chip--selected'
    };

    /**
     * @extends {MDCFoundation<!MDCChipAdapter>}
     * @final
     */

    var MDCChipFoundation =
    /*#__PURE__*/
    function (_MDCFoundation) {
      _inherits(MDCChipFoundation, _MDCFoundation);

      _createClass(MDCChipFoundation, null, [{
        key: "strings",

        /** @return enum {string} */
        get: function get() {
          return strings;
        }
        /** @return enum {string} */

      }, {
        key: "cssClasses",
        get: function get() {
          return cssClasses;
        }
        /**
         * {@see MDCChipAdapter} for typing information on parameters and return
         * types.
         * @return {!MDCChipAdapter}
         */

      }, {
        key: "defaultAdapter",
        get: function get() {
          return (
            /** @type {!MDCChipAdapter} */
            {
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              hasClass: function hasClass() {},
              addClassToLeadingIcon: function addClassToLeadingIcon() {},
              removeClassFromLeadingIcon: function removeClassFromLeadingIcon() {},
              eventTargetHasClass: function eventTargetHasClass() {},
              notifyInteraction: function notifyInteraction() {},
              notifySelection: function notifySelection() {},
              notifyTrailingIconInteraction: function notifyTrailingIconInteraction() {},
              notifyRemoval: function notifyRemoval() {},
              getComputedStyleValue: function getComputedStyleValue() {},
              setStyleProperty: function setStyleProperty() {}
            }
          );
        }
        /**
         * @param {!MDCChipAdapter} adapter
         */

      }]);

      function MDCChipFoundation(adapter) {
        var _this;

        _classCallCheck(this, MDCChipFoundation);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCChipFoundation).call(this, _extends(MDCChipFoundation.defaultAdapter, adapter)));
        /**
         * Whether a trailing icon click should immediately trigger exit/removal of the chip.
         * @private {boolean}
         * */

        _this.shouldRemoveOnTrailingIconClick_ = true;
        return _this;
      }
      /**
       * @return {boolean}
       */


      _createClass(MDCChipFoundation, [{
        key: "isSelected",
        value: function isSelected() {
          return this.adapter_.hasClass(cssClasses.SELECTED);
        }
        /**
         * @param {boolean} selected
         */

      }, {
        key: "setSelected",
        value: function setSelected(selected) {
          if (selected) {
            this.adapter_.addClass(cssClasses.SELECTED);
          } else {
            this.adapter_.removeClass(cssClasses.SELECTED);
          }

          this.adapter_.notifySelection(selected);
        }
        /**
         * @return {boolean}
         */

      }, {
        key: "getShouldRemoveOnTrailingIconClick",
        value: function getShouldRemoveOnTrailingIconClick() {
          return this.shouldRemoveOnTrailingIconClick_;
        }
        /**
         * @param {boolean} shouldRemove
         */

      }, {
        key: "setShouldRemoveOnTrailingIconClick",
        value: function setShouldRemoveOnTrailingIconClick(shouldRemove) {
          this.shouldRemoveOnTrailingIconClick_ = shouldRemove;
        }
        /**
         * Begins the exit animation which leads to removal of the chip.
         */

      }, {
        key: "beginExit",
        value: function beginExit() {
          this.adapter_.addClass(cssClasses.CHIP_EXIT);
        }
        /**
         * Handles an interaction event on the root element.
         * @param {!Event} evt
         */

      }, {
        key: "handleInteraction",
        value: function handleInteraction(evt) {
          if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
            this.adapter_.notifyInteraction();
          }
        }
        /**
         * Handles a transition end event on the root element.
         * @param {!Event} evt
         */

      }, {
        key: "handleTransitionEnd",
        value: function handleTransitionEnd(evt) {
          var _this2 = this;

          // Handle transition end event on the chip when it is about to be removed.
          if (this.adapter_.eventTargetHasClass(
          /** @type {!EventTarget} */
          evt.target, cssClasses.CHIP_EXIT)) {
            if (evt.propertyName === 'width') {
              this.adapter_.notifyRemoval();
            } else if (evt.propertyName === 'opacity') {
              // See: https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5
              var chipWidth = this.adapter_.getComputedStyleValue('width'); // On the next frame (once we get the computed width), explicitly set the chip's width
              // to its current pixel width, so we aren't transitioning out of 'auto'.

              requestAnimationFrame(function () {
                _this2.adapter_.setStyleProperty('width', chipWidth); // To mitigate jitter, start transitioning padding and margin before width.


                _this2.adapter_.setStyleProperty('padding', '0');

                _this2.adapter_.setStyleProperty('margin', '0'); // On the next frame (once width is explicitly set), transition width to 0.


                requestAnimationFrame(function () {
                  _this2.adapter_.setStyleProperty('width', '0');
                });
              });
            }

            return;
          } // Handle a transition end event on the leading icon or checkmark, since the transition end event bubbles.


          if (evt.propertyName !== 'opacity') {
            return;
          }

          if (this.adapter_.eventTargetHasClass(
          /** @type {!EventTarget} */
          evt.target, cssClasses.LEADING_ICON) && this.adapter_.hasClass(cssClasses.SELECTED)) {
            this.adapter_.addClassToLeadingIcon(cssClasses.HIDDEN_LEADING_ICON);
          } else if (this.adapter_.eventTargetHasClass(
          /** @type {!EventTarget} */
          evt.target, cssClasses.CHECKMARK) && !this.adapter_.hasClass(cssClasses.SELECTED)) {
            this.adapter_.removeClassFromLeadingIcon(cssClasses.HIDDEN_LEADING_ICON);
          }
        }
        /**
         * Handles an interaction event on the trailing icon element. This is used to
         * prevent the ripple from activating on interaction with the trailing icon.
         * @param {!Event} evt
         */

      }, {
        key: "handleTrailingIconInteraction",
        value: function handleTrailingIconInteraction(evt) {
          evt.stopPropagation();

          if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
            this.adapter_.notifyTrailingIconInteraction();

            if (this.shouldRemoveOnTrailingIconClick_) {
              this.beginExit();
            }
          }
        }
      }]);

      return MDCChipFoundation;
    }(MDCFoundation);

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
    var cssClasses$1 = {
      // Ripple is a special case where the "root" component is really a "mixin" of sorts,
      // given that it's an 'upgrade' to an existing component. That being said it is the root
      // CSS class that all other CSS classes derive from.
      ROOT: 'mdc-ripple-upgraded',
      UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
      BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
      FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
      FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
    };
    var strings$1 = {
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
          return cssClasses$1;
        }
      }, {
        key: "strings",
        get: function get() {
          return strings$1;
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

          var strings = MDCRippleFoundation.strings;
          Object.keys(strings).forEach(function (k) {
            if (k.indexOf('VAR_') === 0) {
              _this8.adapter_.updateCssVariable(strings[k], null);
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

    var RippleBase =
    /*#__PURE__*/
    function (_MDCRippleFoundation) {
      _inherits(RippleBase, _MDCRippleFoundation);

      _createClass(RippleBase, null, [{
        key: "isSurfaceActive",
        value: function isSurfaceActive(ref) {
          return ref[RippleBase.MATCHES](':active');
        }
      }, {
        key: "MATCHES",
        get: function get() {
          /* global HTMLElement */
          return RippleBase._matches || (RippleBase._matches = getMatchesProperty(HTMLElement.prototype));
        }
      }]);

      function RippleBase(vm, options) {
        _classCallCheck(this, RippleBase);

        return _possibleConstructorReturn(this, _getPrototypeOf(RippleBase).call(this, _extends({
          browserSupportsCssVars: function browserSupportsCssVars() {
            return supportsCssVariables(window);
          },
          isUnbounded: function isUnbounded() {
            return false;
          },
          isSurfaceActive: function isSurfaceActive() {
            return vm.$el[RippleBase.MATCHES](':active');
          },
          isSurfaceDisabled: function isSurfaceDisabled() {
            return vm.disabled;
          },
          addClass: function addClass(className) {
            vm.$set(vm.classes, className, true);
          },
          removeClass: function removeClass(className) {
            vm.$delete(vm.classes, className);
          },
          containsEventTarget: function containsEventTarget(target) {
            return vm.$el.contains(target);
          },
          registerInteractionHandler: function registerInteractionHandler(evt, handler) {
            vm.$el.addEventListener(evt, handler, applyPassive$1());
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
            vm.$el.removeEventListener(evt, handler, applyPassive$1());
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
            vm.$set(vm.styles, varName, value);
          },
          computeBoundingRect: function computeBoundingRect() {
            return vm.$el.getBoundingClientRect();
          },
          getWindowPageOffset: function getWindowPageOffset() {
            return {
              x: window.pageXOffset,
              y: window.pageYOffset
            };
          }
        }, options)));
      }

      return RippleBase;
    }(MDCRippleFoundation);
    var RippleMixin = {
      data: function data() {
        return {
          classes: {},
          styles: {}
        };
      },
      mounted: function mounted() {
        this.ripple = new RippleBase(this);
        this.ripple.init();
      },
      beforeDestroy: function beforeDestroy() {
        this.ripple.destroy();
      }
    };

    //
    var script = {
      name: 'mdc-ripple',
      mixins: [CustomElementMixin, RippleMixin],
      props: {
        tag: String
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
    script.__file = "/ddata/extra/vma/components/ripple/mdc-ripple.vue";

    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "custom-element",
        {
          staticClass: "mdc-ripple",
          attrs: { tag: _vm.tag, classes: _vm.classes, styles: _vm.styles }
        },
        [_vm._t("default")],
        2
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
      

      
      normalizeComponent(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        undefined,
        undefined
      );

    var script$1 = {
      name: 'mdc-chip',
      mixins: [CustomLinkMixin],
      props: {
        leadingIcon: [String],
        trailingIcon: [String],
        leadingIconClasses: [Object],
        trailingIconClasses: [Object]
      },
      inject: ['mdcChipSet'],
      data: function data() {
        return {
          classes: {
            'mdc-chip': true
          },
          styles: {},
          id: ''
        };
      },
      computed: {
        selected: {
          get: function get() {
            return this.foundation.isSelected();
          },
          set: function set(nv) {
            this.foundation.setSelected(nv);
          }
        },
        isFilter: function isFilter() {
          return this.mdcChipSet && this.mdcChipSet.filter;
        },
        haveleadingIcon: function haveleadingIcon() {
          return !!this.leadingIcon || this.leadingIconClasses;
        },
        havetrailingIcon: function havetrailingIcon() {
          return !!this.trailingIcon || this.trailingIconClasses;
        },
        leadingClasses: function leadingClasses() {
          return _extends({}, {
            'material-icons': !!this.leadingIcon
          }, this.leadingIconClasses);
        },
        trailingClasses: function trailingClasses() {
          return _extends({}, {
            'material-icons': !!this.trailingIcon
          }, this.trailingIconClasses);
        }
      },
      created: function created() {
        this.id = this.mdcChipSet.nextId();
      },
      mounted: function mounted() {
        var _this = this;

        this.foundation = new MDCChipFoundation({
          addClass: function addClass(className) {
            return _this.$set(_this.classes, className, true);
          },
          removeClass: function removeClass(className) {
            return _this.$delete(_this.classes, className);
          },
          hasClass: function hasClass(className) {
            return _this.$el.classList.contains(className);
          },
          addClassToLeadingIcon: function addClassToLeadingIcon(className) {
            if (_this.haveleadingIcon) {
              _this.$refs.leadingIcon.classList.add(className);
            }
          },
          removeClassFromLeadingIcon: function removeClassFromLeadingIcon(className) {
            if (_this.haveleadingIcon) {
              _this.$refs.leadingIcon.classList.remove(className);
            }
          },
          eventTargetHasClass: function eventTargetHasClass(target, className) {
            return target.classList.contains(className);
          },
          notifyInteraction: function notifyInteraction() {
            emitCustomEvent(_this.$el, MDCChipFoundation.strings.INTERACTION_EVENT, {
              chipId: _this.id
            }, true);
            _this.mdcChipSet && _this.mdcChipSet.handleInteraction;
          },
          notifySelection: function notifySelection(selected) {
            return emitCustomEvent(_this.$el, MDCChipFoundation.strings.SELECTION_EVENT, {
              chipId: _this.id,
              selected: selected
            }, true
            /* shouldBubble */
            );
          },
          notifyTrailingIconInteraction: function notifyTrailingIconInteraction() {
            emitCustomEvent(_this.$el, MDCChipFoundation.strings.TRAILING_ICON_INTERACTION_EVENT, {
              chipId: _this.id
            }, true);
          },
          notifyRemoval: function notifyRemoval() {
            emitCustomEvent(_this.$el, MDCChipFoundation.strings.REMOVAL_EVENT, {
              chipId: _this.id,
              root: _this.$el
            }, true);
          },
          getComputedStyleValue: function getComputedStyleValue(propertyName) {
            return window.getComputedStyle(_this.$el).getPropertyValue(propertyName);
          },
          setStyleProperty: function setStyleProperty(property, value) {
            return _this.$set(_this.styles, property, value);
          }
        });
        this.foundation.init();
        this.mdcChipSet.chips.push(this);
        this.ripple = new RippleBase(this);
        this.ripple.init();
      },
      beforeDestroy: function beforeDestroy() {
        this.ripple.destroy();
        this.foundation.destroy();
      },
      methods: {
        handleInteraction: function handleInteraction(evt) {
          this.foundation.handleInteraction(evt);
        },
        handleTransitionEnd: function handleTransitionEnd(evt) {
          this.foundation.handleTransitionEnd(evt);
        },
        handleTrailingIconInteraction: function handleTrailingIconInteraction(evt) {
          this.foundation.handleTrailingIconInteraction(evt);
        },
        toggleSelected: function toggleSelected() {
          this.foundation.toggleSelected();
        },
        isSelected: function isSelected() {
          return this.foundation.isSelected();
        }
      }
    };

    /* script */
    const __vue_script__$1 = script$1;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$1.__file = "/ddata/extra/vma/components/chips/mdc-chip.vue";

    /* template */
    var __vue_render__$1 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "div",
        {
          class: _vm.classes,
          style: _vm.styles,
          attrs: { id: _vm.id, tabindex: "0" },
          on: {
            click: _vm.handleInteraction,
            keydown: _vm.handleInteraction,
            transitionend: _vm.handleTransitionEnd
          }
        },
        [
          _vm.haveleadingIcon
            ? _c(
                "i",
                {
                  ref: "leadingIcon",
                  staticClass: "mdc-chip__icon mdc-chip__icon--leading",
                  class: _vm.leadingClasses
                },
                [_vm._v(_vm._s(_vm.leadingIcon))]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isFilter
            ? _c("div", { staticClass: "mdc-chip__checkmark" }, [
                _c(
                  "svg",
                  {
                    staticClass: "mdc-chip__checkmark-svg",
                    attrs: { viewBox: "-2 -3 30 30" }
                  },
                  [
                    _c("path", {
                      staticClass: "mdc-chip__checkmark-path",
                      attrs: {
                        fill: "none",
                        stroke: "black",
                        d: "M1.73,12.91 8.1,19.28 22.79,4.59"
                      }
                    })
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "mdc-chip__text" }, [_vm._t("default")], 2),
          _vm._v(" "),
          _vm.havetrailingIcon
            ? _c(
                "i",
                {
                  ref: "trailingIcon",
                  staticClass: "mdc-chip__icon mdc-chip__icon--trailing",
                  class: _vm.trailingClasses,
                  attrs: { tabindex: "0", role: "button" },
                  on: {
                    click: _vm.handleTrailingIconInteraction,
                    keydown: _vm.handleTrailingIconInteraction
                  }
                },
                [_vm._v(_vm._s(_vm.trailingIcon))]
              )
            : _vm._e()
        ]
      )
    };
    var __vue_staticRenderFns__$1 = [];
    __vue_render__$1._withStripped = true;

      /* style */
      const __vue_inject_styles__$1 = undefined;
      /* scoped */
      const __vue_scope_id__$1 = undefined;
      /* module identifier */
      const __vue_module_identifier__$1 = undefined;
      /* functional template */
      const __vue_is_functional_template__$1 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcChip = normalizeComponent(
        { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
        __vue_inject_styles__$1,
        __vue_script__$1,
        __vue_scope_id__$1,
        __vue_is_functional_template__$1,
        __vue_module_identifier__$1,
        undefined,
        undefined
      );

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

    /* eslint no-unused-vars: [2, {"args": "none"}] */

    /**
     * Adapter for MDC Chip Set.
     *
     * Defines the shape of the adapter expected by the foundation. Implement this
     * adapter to integrate the Chip Set into your framework. See
     * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
     * for more information.
     *
     * @record
     */
    var MDCChipSetAdapter =
    /*#__PURE__*/
    function () {
      function MDCChipSetAdapter() {
        _classCallCheck(this, MDCChipSetAdapter);
      }

      _createClass(MDCChipSetAdapter, [{
        key: "hasClass",

        /**
         * Returns true if the root element contains the given class name.
         * @param {string} className
         * @return {boolean}
         */
        value: function hasClass(className) {}
        /**
         * Removes the chip with the given id from the chip set.
         * @param {string} chipId
         */

      }, {
        key: "removeChip",
        value: function removeChip(chipId) {}
        /**
         * Sets the selected state of the chip with the given id.
         * @param {string} chipId
         * @param {boolean} selected
         */

      }, {
        key: "setSelected",
        value: function setSelected(chipId, selected) {}
      }]);

      return MDCChipSetAdapter;
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

    /** @enum {string} */
    var strings$2 = {
      CHIP_SELECTOR: '.mdc-chip'
    };
    /** @enum {string} */

    var cssClasses$2 = {
      CHOICE: 'mdc-chip-set--choice',
      FILTER: 'mdc-chip-set--filter'
    };

    /**
     * @extends {MDCFoundation<!MDCChipSetAdapter>}
     * @final
     */

    var MDCChipSetFoundation =
    /*#__PURE__*/
    function (_MDCFoundation) {
      _inherits(MDCChipSetFoundation, _MDCFoundation);

      _createClass(MDCChipSetFoundation, null, [{
        key: "strings",

        /** @return enum {string} */
        get: function get() {
          return strings$2;
        }
        /** @return enum {string} */

      }, {
        key: "cssClasses",
        get: function get() {
          return cssClasses$2;
        }
        /**
         * {@see MDCChipSetAdapter} for typing information on parameters and return
         * types.
         * @return {!MDCChipSetAdapter}
         */

      }, {
        key: "defaultAdapter",
        get: function get() {
          return (
            /** @type {!MDCChipSetAdapter} */
            {
              hasClass: function hasClass() {},
              removeChip: function removeChip() {},
              setSelected: function setSelected() {}
            }
          );
        }
        /**
         * @param {!MDCChipSetAdapter} adapter
         */

      }]);

      function MDCChipSetFoundation(adapter) {
        var _this;

        _classCallCheck(this, MDCChipSetFoundation);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCChipSetFoundation).call(this, _extends(MDCChipSetFoundation.defaultAdapter, adapter)));
        /**
         * The ids of the selected chips in the set. Only used for choice chip set or filter chip set.
         * @private {!Array<string>}
         */

        _this.selectedChipIds_ = [];
        return _this;
      }
      /**
       * Returns an array of the IDs of all selected chips.
       * @return {!Array<string>}
       */


      _createClass(MDCChipSetFoundation, [{
        key: "getSelectedChipIds",
        value: function getSelectedChipIds() {
          return this.selectedChipIds_;
        }
        /**
         * Toggles selection of the chip with the given id.
         * @private
         * @param {string} chipId
         */

      }, {
        key: "toggleSelect_",
        value: function toggleSelect_(chipId) {
          if (this.selectedChipIds_.indexOf(chipId) >= 0) {
            this.deselect_(chipId);
          } else {
            this.select(chipId);
          }
        }
        /**
         * Selects the chip with the given id. Deselects all other chips if the chip set is of the choice variant.
         * @param {string} chipId
         */

      }, {
        key: "select",
        value: function select(chipId) {
          if (this.selectedChipIds_.indexOf(chipId) >= 0) {
            return;
          }

          if (this.adapter_.hasClass(cssClasses$2.CHOICE) && this.selectedChipIds_.length > 0) {
            var previouslySelectedChip = this.selectedChipIds_[0];
            this.selectedChipIds_.length = 0;
            this.adapter_.setSelected(previouslySelectedChip, false);
          }

          this.selectedChipIds_.push(chipId);
          this.adapter_.setSelected(chipId, true);
        }
        /**
         * Deselects the chip with the given id.
         * @private
         * @param {string} chipId
         */

      }, {
        key: "deselect_",
        value: function deselect_(chipId) {
          var index = this.selectedChipIds_.indexOf(chipId);

          if (index >= 0) {
            this.selectedChipIds_.splice(index, 1);
            this.adapter_.setSelected(chipId, false);
          }
        }
        /**
         * Handles a chip interaction event
         * @param {string} chipId
         */

      }, {
        key: "handleChipInteraction",
        value: function handleChipInteraction(chipId) {
          if (this.adapter_.hasClass(cssClasses$2.CHOICE) || this.adapter_.hasClass(cssClasses$2.FILTER)) {
            this.toggleSelect_(chipId);
          }
        }
        /**
         * Handles a chip selection event, used to handle discrepancy when selection state is set directly on the Chip.
         * @param {string} chipId
         * @param {boolean} selected
         */

      }, {
        key: "handleChipSelection",
        value: function handleChipSelection(chipId, selected) {
          var chipIsSelected = this.selectedChipIds_.indexOf(chipId) >= 0;

          if (selected && !chipIsSelected) {
            this.select(chipId);
          } else if (!selected && chipIsSelected) {
            this.deselect_(chipId);
          }
        }
        /**
         * Handles the event when a chip is removed.
         * @param {string} chipId
         */

      }, {
        key: "handleChipRemoval",
        value: function handleChipRemoval(chipId) {
          this.deselect_(chipId);
          this.adapter_.removeChip(chipId);
        }
      }]);

      return MDCChipSetFoundation;
    }(MDCFoundation);

    var idCounter = 0;
    var script$2 = {
      name: 'mdc-chip-set',
      props: {
        choice: [Boolean],
        filter: [Boolean],
        input: [Boolean]
      },
      provide: function provide() {
        return {
          mdcChipSet: this
        };
      },
      data: function data() {
        return {
          classes: {
            'mdc-chip-set': true,
            'mdc-chip-set--choice': this.choice,
            'mdc-chip-set--filter': this.filter,
            'mdc-chip-set--input': this.input
          },
          chips: []
        };
      },
      mounted: function mounted() {
        var _this = this;

        this.foundation = new MDCChipSetFoundation({
          hasClass: function hasClass(className) {
            return _this.$el.classList.contains(className);
          },
          removeChip: function removeChip(chipId) {
            var index = _this.findChipIndex(chipId);

            if (index > 0) {
              _this.$nextTick(function () {
                _this.chips.splice(index, 1);
              });
            }
          },
          setSelected: function setSelected(chipId, selected) {
            var index = _this.findChipIndex(chipId);

            if (index >= 0) {
              _this.chips[index].selected = selected;
            }
          }
        });
        this.foundation.init();
      },
      beforeDestroy: function beforeDestroy() {
        this.foundation.destroy();
      },
      methods: {
        nextId: function nextId() {
          return "mdc-chip-".concat(++idCounter);
        },
        findChipIndex: function findChipIndex(chipId) {
          for (var i = 0; i < this.chips.length; i++) {
            if (this.chips[i].id === chipId) {
              return i;
            }
          }

          return -1;
        },
        handleChipInteraction: function handleChipInteraction(evt) {
          this.foundation.handleChipInteraction(evt.detail.chipId);
        },
        handleChipRemoval: function handleChipRemoval(evt) {
          this.foundation.handleChipRemoval(evt.detail.chipId);
        },
        handleChipSelection: function handleChipSelection(evt) {
          this.foundation.handleChipSelection(evt.detail.chipId, evt.detail.selected);
        }
      },
      render: function render(h) {
        var _this2 = this,
            _on;

        return h('div', {
          class: this.classes,
          on: (_on = {}, _defineProperty(_on, MDCChipFoundation.strings.INTERACTION_EVENT, function (evt) {
            return _this2.handleChipInteraction(evt);
          }), _defineProperty(_on, MDCChipFoundation.strings.SELECTION_EVENT, function (evt) {
            return _this2.handleChipSelection(evt);
          }), _defineProperty(_on, MDCChipFoundation.strings.REMOVAL_EVENT, function (evt) {
            return _this2.handleChipRemoval(evt);
          }), _on)
        }, this.$slots.default);
      }
    };

    /* script */
    const __vue_script__$2 = script$2;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$2.__file = "/ddata/extra/vma/components/chips/mdc-chip-set.vue";

    /* template */

      /* style */
      const __vue_inject_styles__$2 = undefined;
      /* scoped */
      const __vue_scope_id__$2 = undefined;
      /* module identifier */
      const __vue_module_identifier__$2 = undefined;
      /* functional template */
      const __vue_is_functional_template__$2 = undefined;
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcChipSet = normalizeComponent(
        {},
        __vue_inject_styles__$2,
        __vue_script__$2,
        __vue_scope_id__$2,
        __vue_is_functional_template__$2,
        __vue_module_identifier__$2,
        undefined,
        undefined
      );

    var plugin = BasePlugin({
      mdcChip: mdcChip,
      mdcChipSet: mdcChipSet
    });

    autoInit(plugin);

    return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9hdXRvLWluaXQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYmFzZS1wbHVnaW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWVsZW1lbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWxpbmsuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWV2ZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2NoaXBzL2NoaXAvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvY2hpcHMvY2hpcC9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2NoaXBzL2NoaXAvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUtYmFzZS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUudnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1ydW50aW1lLWhlbHBlcnMvbm9ybWFsaXplLWNvbXBvbmVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvY2hpcHMvbWRjLWNoaXAudnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9jaGlwcy9jaGlwLXNldC9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9jaGlwcy9jaGlwLXNldC9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2NoaXBzL2NoaXAtc2V0L2ZvdW5kYXRpb24uanMiLCIuLi8uLi9jb21wb25lbnRzL2NoaXBzL21kYy1jaGlwLXNldC52dWUiLCIuLi8uLi9jb21wb25lbnRzL2NoaXBzL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9jaGlwcy9lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXV0b0luaXQocGx1Z2luKSB7XG4gIC8vIEF1dG8taW5zdGFsbFxuICBsZXQgX1Z1ZSA9IG51bGxcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgX1Z1ZSA9IHdpbmRvdy5WdWVcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8qZ2xvYmFsIGdsb2JhbCovXG4gICAgX1Z1ZSA9IGdsb2JhbC5WdWVcbiAgfVxuICBpZiAoX1Z1ZSkge1xuICAgIF9WdWUudXNlKHBsdWdpbilcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIEJhc2VQbHVnaW4oY29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICdfX1ZFUlNJT05fXycsXG4gICAgaW5zdGFsbDogdm0gPT4ge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNba2V5XVxuICAgICAgICB2bS5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHNcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEN1c3RvbUVsZW1lbnQgPSB7XG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHJlbmRlcihjcmVhdGVFbGVtZW50LCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBjb250ZXh0LnByb3BzLmlzIHx8IGNvbnRleHQucHJvcHMudGFnIHx8ICdkaXYnLFxuICAgICAgY29udGV4dC5kYXRhLFxuICAgICAgY29udGV4dC5jaGlsZHJlblxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudE1peGluID0ge1xuICBjb21wb25lbnRzOiB7XG4gICAgQ3VzdG9tRWxlbWVudFxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tTGluayA9IHtcbiAgbmFtZTogJ2N1c3RvbS1saW5rJyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICB0YWc6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnYScgfSxcbiAgICBsaW5rOiBPYmplY3RcbiAgfSxcbiAgcmVuZGVyKGgsIGNvbnRleHQpIHtcbiAgICBsZXQgZWxlbWVudFxuICAgIGxldCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dC5kYXRhKVxuXG4gICAgaWYgKGNvbnRleHQucHJvcHMubGluayAmJiBjb250ZXh0LnBhcmVudC4kcm91dGVyKSB7XG4gICAgICAvLyByb3V0ZXItbGluayBjYXNlXG4gICAgICBlbGVtZW50ID0gY29udGV4dC5wYXJlbnQuJHJvb3QuJG9wdGlvbnMuY29tcG9uZW50c1sncm91dGVyLWxpbmsnXVxuICAgICAgZGF0YS5wcm9wcyA9IE9iamVjdC5hc3NpZ24oeyB0YWc6IGNvbnRleHQucHJvcHMudGFnIH0sIGNvbnRleHQucHJvcHMubGluaylcbiAgICAgIGlmIChkYXRhLm9uLmNsaWNrKSB7XG4gICAgICAgIGRhdGEubmF0aXZlT24gPSB7IGNsaWNrOiBkYXRhLm9uLmNsaWNrIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZWxlbWVudCBmYWxsYmFja1xuICAgICAgZWxlbWVudCA9IGNvbnRleHQucHJvcHMudGFnXG4gICAgfVxuXG4gICAgcmV0dXJuIGgoZWxlbWVudCwgZGF0YSwgY29udGV4dC5jaGlsZHJlbilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9tTGlua01peGluID0ge1xuICBwcm9wczoge1xuICAgIHRvOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgIGV4YWN0OiBCb29sZWFuLFxuICAgIGFwcGVuZDogQm9vbGVhbixcbiAgICByZXBsYWNlOiBCb29sZWFuLFxuICAgIGFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gICAgZXhhY3RBY3RpdmVDbGFzczogU3RyaW5nXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbGluaygpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMudG8gJiYge1xuICAgICAgICAgIHRvOiB0aGlzLnRvLFxuICAgICAgICAgIGV4YWN0OiB0aGlzLmV4YWN0LFxuICAgICAgICAgIGFwcGVuZDogdGhpcy5hcHBlbmQsXG4gICAgICAgICAgcmVwbGFjZTogdGhpcy5yZXBsYWNlLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzOiB0aGlzLmFjdGl2ZUNsYXNzLFxuICAgICAgICAgIGV4YWN0QWN0aXZlQ2xhc3M6IHRoaXMuZXhhY3RBY3RpdmVDbGFzc1xuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgQ3VzdG9tTGlua1xuICB9XG59XG4iLCIvKiBnbG9iYWwgQ3VzdG9tRXZlbnQgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXRDdXN0b21FdmVudChlbCwgZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgbGV0IGV2dFxuICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpXG4gIH1cbiAgZWwuZGlzcGF0Y2hFdmVudChldnQpXG59XG4iLCJjb25zdCBzY29wZSA9XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMHgxMDAwMDAwMCkpLnRvU3RyaW5nKCkgKyAnLSdcblxuZXhwb3J0IGNvbnN0IFZNQVVuaXF1ZUlkTWl4aW4gPSB7XG4gIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICB0aGlzLnZtYV91aWRfID0gc2NvcGUgKyB0aGlzLl91aWRcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIEFcbiAqL1xuY2xhc3MgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW17Y3NzQ2xhc3Nlc30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte3N0cmluZ3N9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVte251bWJlcnN9ICovXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4geyFPYmplY3R9ICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgIC8vIHZhbGlkYXRpb24uXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7QT19IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIgPSB7fSkge1xuICAgIC8qKiBAcHJvdGVjdGVkIHshQX0gKi9cbiAgICB0aGlzLmFkYXB0ZXJfID0gYWRhcHRlcjtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgQ2hpcC5cbiAqXG4gKiBEZWZpbmVzIHRoZSBzaGFwZSBvZiB0aGUgYWRhcHRlciBleHBlY3RlZCBieSB0aGUgZm91bmRhdGlvbi4gSW1wbGVtZW50IHRoaXNcbiAqIGFkYXB0ZXIgdG8gaW50ZWdyYXRlIHRoZSBDaGlwIGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENDaGlwQWRhcHRlciB7XG4gIC8qKlxuICAgKiBBZGRzIGEgY2xhc3MgdG8gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2xhc3MgZnJvbSB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcm9vdCBlbGVtZW50IGNvbnRhaW5zIHRoZSBnaXZlbiBjbGFzcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2xhc3MgdG8gdGhlIGxlYWRpbmcgaWNvbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICBhZGRDbGFzc1RvTGVhZGluZ0ljb24oY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2xhc3MgZnJvbSB0aGUgbGVhZGluZyBpY29uIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHJlbW92ZUNsYXNzRnJvbUxlYWRpbmdJY29uKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRhcmdldCBoYXMgY2xhc3NOYW1lLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwYXJhbSB7IUV2ZW50VGFyZ2V0fSB0YXJnZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXZlbnRUYXJnZXRIYXNDbGFzcyh0YXJnZXQsIGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogRW1pdHMgYSBjdXN0b20gXCJNRENDaGlwOmludGVyYWN0aW9uXCIgZXZlbnQgZGVub3RpbmcgdGhlIGNoaXAgaGFzIGJlZW5cbiAgICogaW50ZXJhY3RlZCB3aXRoICh0eXBpY2FsbHkgb24gY2xpY2sgb3Iga2V5ZG93bikuXG4gICAqL1xuICBub3RpZnlJbnRlcmFjdGlvbigpIHt9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGEgY3VzdG9tIFwiTURDQ2hpcDpzZWxlY3Rpb25cIiBldmVudCBkZW5vdGluZyB0aGUgY2hpcCBoYXMgYmVlbiBzZWxlY3RlZCBvciBkZXNlbGVjdGVkLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkXG4gICAqL1xuICBub3RpZnlTZWxlY3Rpb24oc2VsZWN0ZWQpIHt9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGEgY3VzdG9tIFwiTURDQ2hpcDp0cmFpbGluZ0ljb25JbnRlcmFjdGlvblwiIGV2ZW50IGRlbm90aW5nIHRoZSB0cmFpbGluZyBpY29uIGhhcyBiZWVuXG4gICAqIGludGVyYWN0ZWQgd2l0aCAodHlwaWNhbGx5IG9uIGNsaWNrIG9yIGtleWRvd24pLlxuICAgKi9cbiAgbm90aWZ5VHJhaWxpbmdJY29uSW50ZXJhY3Rpb24oKSB7fVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhIGN1c3RvbSBldmVudCBcIk1EQ0NoaXA6cmVtb3ZhbFwiIGRlbm90aW5nIHRoZSBjaGlwIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICovXG4gIG5vdGlmeVJlbW92YWwoKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb21wdXRlZCBwcm9wZXJ0eSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gc3R5bGUgcHJvcGVydHkgb24gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5TmFtZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXRDb21wdXRlZFN0eWxlVmFsdWUocHJvcGVydHlOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gc3R5bGUgcHJvcGVydHkgb24gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5TmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHNldFN0eWxlUHJvcGVydHkocHJvcGVydHlOYW1lLCB2YWx1ZSkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDQ2hpcEFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBzdHJpbmdzID0ge1xuICBFTlRSWV9BTklNQVRJT05fTkFNRTogJ21kYy1jaGlwLWVudHJ5JyxcbiAgSU5URVJBQ1RJT05fRVZFTlQ6ICdNRENDaGlwOmludGVyYWN0aW9uJyxcbiAgU0VMRUNUSU9OX0VWRU5UOiAnTURDQ2hpcDpzZWxlY3Rpb24nLFxuICBUUkFJTElOR19JQ09OX0lOVEVSQUNUSU9OX0VWRU5UOiAnTURDQ2hpcDp0cmFpbGluZ0ljb25JbnRlcmFjdGlvbicsXG4gIFJFTU9WQUxfRVZFTlQ6ICdNRENDaGlwOnJlbW92YWwnLFxuICBDSEVDS01BUktfU0VMRUNUT1I6ICcubWRjLWNoaXBfX2NoZWNrbWFyaycsXG4gIExFQURJTkdfSUNPTl9TRUxFQ1RPUjogJy5tZGMtY2hpcF9faWNvbi0tbGVhZGluZycsXG4gIFRSQUlMSU5HX0lDT05fU0VMRUNUT1I6ICcubWRjLWNoaXBfX2ljb24tLXRyYWlsaW5nJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgQ0hFQ0tNQVJLOiAnbWRjLWNoaXBfX2NoZWNrbWFyaycsXG4gIENISVBfRVhJVDogJ21kYy1jaGlwLS1leGl0JyxcbiAgSElEREVOX0xFQURJTkdfSUNPTjogJ21kYy1jaGlwX19pY29uLS1sZWFkaW5nLWhpZGRlbicsXG4gIExFQURJTkdfSUNPTjogJ21kYy1jaGlwX19pY29uLS1sZWFkaW5nJyxcbiAgVFJBSUxJTkdfSUNPTjogJ21kYy1jaGlwX19pY29uLS10cmFpbGluZycsXG4gIFNFTEVDVEVEOiAnbWRjLWNoaXAtLXNlbGVjdGVkJyxcbn07XG5cbmV4cG9ydCB7c3RyaW5ncywgY3NzQ2xhc3Nlc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDQ2hpcEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7c3RyaW5ncywgY3NzQ2xhc3Nlc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ0NoaXBBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENDaGlwRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAc2VlIE1EQ0NoaXBBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ0NoaXBBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDQ2hpcEFkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBoYXNDbGFzczogKCkgPT4ge30sXG4gICAgICBhZGRDbGFzc1RvTGVhZGluZ0ljb246ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3NGcm9tTGVhZGluZ0ljb246ICgpID0+IHt9LFxuICAgICAgZXZlbnRUYXJnZXRIYXNDbGFzczogKCkgPT4ge30sXG4gICAgICBub3RpZnlJbnRlcmFjdGlvbjogKCkgPT4ge30sXG4gICAgICBub3RpZnlTZWxlY3Rpb246ICgpID0+IHt9LFxuICAgICAgbm90aWZ5VHJhaWxpbmdJY29uSW50ZXJhY3Rpb246ICgpID0+IHt9LFxuICAgICAgbm90aWZ5UmVtb3ZhbDogKCkgPT4ge30sXG4gICAgICBnZXRDb21wdXRlZFN0eWxlVmFsdWU6ICgpID0+IHt9LFxuICAgICAgc2V0U3R5bGVQcm9wZXJ0eTogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDQ2hpcEFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ0NoaXBGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGEgdHJhaWxpbmcgaWNvbiBjbGljayBzaG91bGQgaW1tZWRpYXRlbHkgdHJpZ2dlciBleGl0L3JlbW92YWwgb2YgdGhlIGNoaXAuXG4gICAgICogQHByaXZhdGUge2Jvb2xlYW59XG4gICAgICogKi9cbiAgICB0aGlzLnNob3VsZFJlbW92ZU9uVHJhaWxpbmdJY29uQ2xpY2tfID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLlNFTEVDVEVEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkXG4gICAqL1xuICBzZXRTZWxlY3RlZChzZWxlY3RlZCkge1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLlNFTEVDVEVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLlNFTEVDVEVEKTtcbiAgICB9XG4gICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlTZWxlY3Rpb24oc2VsZWN0ZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBnZXRTaG91bGRSZW1vdmVPblRyYWlsaW5nSWNvbkNsaWNrKCkge1xuICAgIHJldHVybiB0aGlzLnNob3VsZFJlbW92ZU9uVHJhaWxpbmdJY29uQ2xpY2tfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkUmVtb3ZlXG4gICAqL1xuICBzZXRTaG91bGRSZW1vdmVPblRyYWlsaW5nSWNvbkNsaWNrKHNob3VsZFJlbW92ZSkge1xuICAgIHRoaXMuc2hvdWxkUmVtb3ZlT25UcmFpbGluZ0ljb25DbGlja18gPSBzaG91bGRSZW1vdmU7XG4gIH1cblxuICAvKipcbiAgICogQmVnaW5zIHRoZSBleGl0IGFuaW1hdGlvbiB3aGljaCBsZWFkcyB0byByZW1vdmFsIG9mIHRoZSBjaGlwLlxuICAgKi9cbiAgYmVnaW5FeGl0KCkge1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5DSElQX0VYSVQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYW4gaW50ZXJhY3Rpb24gZXZlbnQgb24gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KSB7XG4gICAgaWYgKGV2dC50eXBlID09PSAnY2xpY2snIHx8IGV2dC5rZXkgPT09ICdFbnRlcicgfHwgZXZ0LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUludGVyYWN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYSB0cmFuc2l0aW9uIGVuZCBldmVudCBvbiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZ0XG4gICAqL1xuICBoYW5kbGVUcmFuc2l0aW9uRW5kKGV2dCkge1xuICAgIC8vIEhhbmRsZSB0cmFuc2l0aW9uIGVuZCBldmVudCBvbiB0aGUgY2hpcCB3aGVuIGl0IGlzIGFib3V0IHRvIGJlIHJlbW92ZWQuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uZXZlbnRUYXJnZXRIYXNDbGFzcygvKiogQHR5cGUgeyFFdmVudFRhcmdldH0gKi8gKGV2dC50YXJnZXQpLCBjc3NDbGFzc2VzLkNISVBfRVhJVCkpIHtcbiAgICAgIGlmIChldnQucHJvcGVydHlOYW1lID09PSAnd2lkdGgnKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5UmVtb3ZhbCgpO1xuICAgICAgfSBlbHNlIGlmIChldnQucHJvcGVydHlOYW1lID09PSAnb3BhY2l0eScpIHtcbiAgICAgICAgLy8gU2VlOiBodHRwczovL2Nzcy10cmlja3MuY29tL3VzaW5nLWNzcy10cmFuc2l0aW9ucy1hdXRvLWRpbWVuc2lvbnMvI2FydGljbGUtaGVhZGVyLWlkLTVcbiAgICAgICAgY29uc3QgY2hpcFdpZHRoID0gdGhpcy5hZGFwdGVyXy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJ3dpZHRoJyk7XG5cbiAgICAgICAgLy8gT24gdGhlIG5leHQgZnJhbWUgKG9uY2Ugd2UgZ2V0IHRoZSBjb21wdXRlZCB3aWR0aCksIGV4cGxpY2l0bHkgc2V0IHRoZSBjaGlwJ3Mgd2lkdGhcbiAgICAgICAgLy8gdG8gaXRzIGN1cnJlbnQgcGl4ZWwgd2lkdGgsIHNvIHdlIGFyZW4ndCB0cmFuc2l0aW9uaW5nIG91dCBvZiAnYXV0bycuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZVByb3BlcnR5KCd3aWR0aCcsIGNoaXBXaWR0aCk7XG5cbiAgICAgICAgICAvLyBUbyBtaXRpZ2F0ZSBqaXR0ZXIsIHN0YXJ0IHRyYW5zaXRpb25pbmcgcGFkZGluZyBhbmQgbWFyZ2luIGJlZm9yZSB3aWR0aC5cbiAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFN0eWxlUHJvcGVydHkoJ3BhZGRpbmcnLCAnMCcpO1xuICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U3R5bGVQcm9wZXJ0eSgnbWFyZ2luJywgJzAnKTtcblxuICAgICAgICAgIC8vIE9uIHRoZSBuZXh0IGZyYW1lIChvbmNlIHdpZHRoIGlzIGV4cGxpY2l0bHkgc2V0KSwgdHJhbnNpdGlvbiB3aWR0aCB0byAwLlxuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFN0eWxlUHJvcGVydHkoJ3dpZHRoJywgJzAnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGEgdHJhbnNpdGlvbiBlbmQgZXZlbnQgb24gdGhlIGxlYWRpbmcgaWNvbiBvciBjaGVja21hcmssIHNpbmNlIHRoZSB0cmFuc2l0aW9uIGVuZCBldmVudCBidWJibGVzLlxuICAgIGlmIChldnQucHJvcGVydHlOYW1lICE9PSAnb3BhY2l0eScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uZXZlbnRUYXJnZXRIYXNDbGFzcygvKiogQHR5cGUgeyFFdmVudFRhcmdldH0gKi8gKGV2dC50YXJnZXQpLCBjc3NDbGFzc2VzLkxFQURJTkdfSUNPTikgJiZcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLlNFTEVDVEVEKSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzc1RvTGVhZGluZ0ljb24oY3NzQ2xhc3Nlcy5ISURERU5fTEVBRElOR19JQ09OKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWRhcHRlcl8uZXZlbnRUYXJnZXRIYXNDbGFzcygvKiogQHR5cGUgeyFFdmVudFRhcmdldH0gKi8gKGV2dC50YXJnZXQpLCBjc3NDbGFzc2VzLkNIRUNLTUFSSykgJiZcbiAgICAgICAgICAgICAgICF0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuU0VMRUNURUQpKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzRnJvbUxlYWRpbmdJY29uKGNzc0NsYXNzZXMuSElEREVOX0xFQURJTkdfSUNPTik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYW4gaW50ZXJhY3Rpb24gZXZlbnQgb24gdGhlIHRyYWlsaW5nIGljb24gZWxlbWVudC4gVGhpcyBpcyB1c2VkIHRvXG4gICAqIHByZXZlbnQgdGhlIHJpcHBsZSBmcm9tIGFjdGl2YXRpbmcgb24gaW50ZXJhY3Rpb24gd2l0aCB0aGUgdHJhaWxpbmcgaWNvbi5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlVHJhaWxpbmdJY29uSW50ZXJhY3Rpb24oZXZ0KSB7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChldnQudHlwZSA9PT0gJ2NsaWNrJyB8fCBldnQua2V5ID09PSAnRW50ZXInIHx8IGV2dC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlUcmFpbGluZ0ljb25JbnRlcmFjdGlvbigpO1xuICAgICAgaWYgKHRoaXMuc2hvdWxkUmVtb3ZlT25UcmFpbGluZ0ljb25DbGlja18pIHtcbiAgICAgICAgdGhpcy5iZWdpbkV4aXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBkZXRhaWw6IHtcbiAqICAgICBjaGlwSWQ6IHN0cmluZyxcbiAqICAgfSxcbiAqICAgYnViYmxlczogYm9vbGVhbixcbiAqIH19XG4gKi9cbmxldCBNRENDaGlwSW50ZXJhY3Rpb25FdmVudFR5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgZGV0YWlsOiB7XG4gKiAgICAgY2hpcElkOiBzdHJpbmcsXG4gKiAgICAgc2VsZWN0ZWQ6IGJvb2xlYW4sXG4gKiAgIH0sXG4gKiAgIGJ1YmJsZXM6IGJvb2xlYW4sXG4gKiB9fVxuICovXG5sZXQgTURDQ2hpcFNlbGVjdGlvbkV2ZW50VHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBkZXRhaWw6IHtcbiAqICAgICBjaGlwSWQ6IHN0cmluZyxcbiAqICAgICByb290OiBFbGVtZW50LFxuICogICB9LFxuICogICBidWJibGVzOiBib29sZWFuLFxuICogfX1cbiAqL1xubGV0IE1EQ0NoaXBSZW1vdmFsRXZlbnRUeXBlO1xuXG5leHBvcnQge01EQ0NoaXBGb3VuZGF0aW9uLCBNRENDaGlwSW50ZXJhY3Rpb25FdmVudFR5cGUsIE1EQ0NoaXBTZWxlY3Rpb25FdmVudFR5cGUsIE1EQ0NoaXBSZW1vdmFsRXZlbnRUeXBlfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBGXG4gKi9cbmNsYXNzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEByZXR1cm4geyFNRENDb21wb25lbnR9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCkge1xuICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAvLyByZXR1cm5zIGFuIGluc3RhbnRpYXRlZCBjb21wb25lbnQgd2l0aCBpdHMgcm9vdCBzZXQgdG8gdGhhdCBlbGVtZW50LiBBbHNvIG5vdGUgdGhhdCBpbiB0aGUgY2FzZXMgb2ZcbiAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICByZXR1cm4gbmV3IE1EQ0NvbXBvbmVudChyb290LCBuZXcgTURDRm91bmRhdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7Rj19IGZvdW5kYXRpb25cbiAgICogQHBhcmFtIHsuLi4/fSBhcmdzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihyb290LCBmb3VuZGF0aW9uID0gdW5kZWZpbmVkLCAuLi5hcmdzKSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuICAgIHRoaXMucm9vdF8gPSByb290O1xuICAgIHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcbiAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgLy8gdGhpcy5yb290XyBpcyBkZWZpbmVkIGFuZCBjYW4gYmUgdXNlZCB3aXRoaW4gdGhlIGZvdW5kYXRpb24gY2xhc3MuXG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFGfSAqL1xuICAgIHRoaXMuZm91bmRhdGlvbl8gPSBmb3VuZGF0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLmdldERlZmF1bHRGb3VuZGF0aW9uKCkgOiBmb3VuZGF0aW9uO1xuICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gIH1cblxuICBpbml0aWFsaXplKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgLy8gaW5pdGlhbGl6ZWQuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBiZXNpZGVzIHJvb3QgYW5kIGZvdW5kYXRpb24gd2lsbCBiZSBwYXNzZWQgaW4gaGVyZS5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshRn0gZm91bmRhdGlvblxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgLy8gY29tcG9uZW50LlxuICAgIHRocm93IG5ldyBFcnJvcignU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIGdldERlZmF1bHRGb3VuZGF0aW9uIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgJyArXG4gICAgICAnZm91bmRhdGlvbiBjbGFzcycpO1xuICB9XG5cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIGlmIHRoZXkgbmVlZCB0byBwZXJmb3JtIHdvcmsgdG8gc3luY2hyb25pemUgd2l0aCBhIGhvc3QgRE9NXG4gICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgLy8gcmVhZHMvd3JpdGVzIHRoYXQgd291bGQgY2F1c2UgbGF5b3V0IC8gcGFpbnQsIGFzIHRoaXMgaXMgY2FsbGVkIHN5bmNocm9ub3VzbHkgZnJvbSB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yLlxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG1heSBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmVsZWFzZSBhbnkgcmVzb3VyY2VzIC8gZGVyZWdpc3RlciBhbnkgbGlzdGVuZXJzIHRoZXkgaGF2ZVxuICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogbGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgbGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gcmVtb3ZlIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiB1bmxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVubGlzdGVuKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLFxuICAgKiB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFPYmplY3R9IGV2dERhdGFcbiAgICogQHBhcmFtIHtib29sZWFuPX0gc2hvdWxkQnViYmxlXG4gICAqL1xuICBlbWl0KGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gICAgbGV0IGV2dDtcbiAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5yb290Xy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBSaXBwbGUuIFByb3ZpZGVzIGFuIGludGVyZmFjZSBmb3IgbWFuYWdpbmdcbiAqIC0gY2xhc3Nlc1xuICogLSBkb21cbiAqIC0gQ1NTIHZhcmlhYmxlc1xuICogLSBwb3NpdGlvblxuICogLSBkaW1lbnNpb25zXG4gKiAtIHNjcm9sbCBwb3NpdGlvblxuICogLSBldmVudCBoYW5kbGVyc1xuICogLSB1bmJvdW5kZWQsIGFjdGl2ZSBhbmQgZGlzYWJsZWQgc3RhdGVzXG4gKlxuICogQWRkaXRpb25hbGx5LCBwcm92aWRlcyB0eXBlIGluZm9ybWF0aW9uIGZvciB0aGUgYWRhcHRlciB0byB0aGUgQ2xvc3VyZVxuICogY29tcGlsZXIuXG4gKlxuICogSW1wbGVtZW50IHRoaXMgYWRhcHRlciBmb3IgeW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlIHRvIGRlbGVnYXRlIHVwZGF0ZXMgdG9cbiAqIHRoZSBjb21wb25lbnQgaW4geW91ciBmcmFtZXdvcmsgb2YgY2hvaWNlLiBTZWUgYXJjaGl0ZWN0dXJlIGRvY3VtZW50YXRpb25cbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2NvZGUvYXJjaGl0ZWN0dXJlLm1kXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENSaXBwbGVBZGFwdGVyIHtcbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1VuYm91bmRlZCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZUFjdGl2ZSgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzU3VyZmFjZURpc2FibGVkKCkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBhZGRDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0geyFFdmVudFRhcmdldH0gdGFyZ2V0ICovXG4gIGNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFyTmFtZVxuICAgKiBAcGFyYW0gez9udW1iZXJ8c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgdXBkYXRlQ3NzVmFyaWFibGUodmFyTmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqIEByZXR1cm4geyFDbGllbnRSZWN0fSAqL1xuICBjb21wdXRlQm91bmRpbmdSZWN0KCkge31cblxuICAvKiogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gKi9cbiAgZ2V0V2luZG93UGFnZU9mZnNldCgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgLy8gUmlwcGxlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZXJlIHRoZSBcInJvb3RcIiBjb21wb25lbnQgaXMgcmVhbGx5IGEgXCJtaXhpblwiIG9mIHNvcnRzLFxuICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICBVTkJPVU5ERUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnLFxuICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgRkdfQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbicsXG4gIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbn07XG5cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICBWQVJfVE9QOiAnLS1tZGMtcmlwcGxlLXRvcCcsXG4gIFZBUl9GR19TSVpFOiAnLS1tZGMtcmlwcGxlLWZnLXNpemUnLFxuICBWQVJfRkdfU0NBTEU6ICctLW1kYy1yaXBwbGUtZmctc2NhbGUnLFxuICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gIFZBUl9GR19UUkFOU0xBVEVfRU5EOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQnLFxufTtcblxuY29uc3QgbnVtYmVycyA9IHtcbiAgUEFERElORzogMTAsXG4gIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gIERFQUNUSVZBVElPTl9USU1FT1VUX01TOiAyMjUsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLXRyYW5zbGF0ZS1kdXJhdGlvbiAoaS5lLiBhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgRkdfREVBQ1RJVkFUSU9OX01TOiAxNTAsIC8vIENvcnJlc3BvbmRzIHRvICRtZGMtcmlwcGxlLWZhZGUtb3V0LWR1cmF0aW9uIChpLmUuIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIFRBUF9ERUxBWV9NUzogMzAwLCAvLyBEZWxheSBiZXR3ZWVuIHRvdWNoIGFuZCBzaW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXNcbn07XG5cbmV4cG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcblxuLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gYXBwbHlQYXNzaXZlIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c1Bhc3NpdmVfO1xuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAvLyBEZXRlY3QgdmVyc2lvbnMgb2YgRWRnZSB3aXRoIGJ1Z2d5IHZhcigpIHN1cHBvcnRcbiAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMTQ5NTQ0OC9cbiAgY29uc3QgZG9jdW1lbnQgPSB3aW5kb3dPYmouZG9jdW1lbnQ7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgLy8gVGhlIGJ1ZyBleGlzdHMgaWYgOjpiZWZvcmUgc3R5bGUgZW5kcyB1cCBwcm9wYWdhdGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gIC8vIEFkZGl0aW9uYWxseSwgZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIG51bGwgaW4gaWZyYW1lcyB3aXRoIGRpc3BsYXk6IFwibm9uZVwiIGluIEZpcmVmb3gsXG4gIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvd09iai5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBjb25zdCBoYXNQc2V1ZG9WYXJCdWcgPSBjb21wdXRlZFN0eWxlICE9PSBudWxsICYmIGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wU3R5bGUgPT09ICdzb2xpZCc7XG4gIG5vZGUucmVtb3ZlKCk7XG4gIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBsZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuXG4gIGNvbnN0IHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gd2luZG93T2JqLkNTUyAmJiB0eXBlb2Ygd2luZG93T2JqLkNTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTQ2NjlcbiAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgY29uc3Qgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKFxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKVxuICApO1xuXG4gIGlmIChleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cykge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgfSBlbHNlIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbiAgfVxuICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG59XG5cbi8vXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZCBpZiBzbywgdXNlIHRoZW0uXG4gKiBAcGFyYW0geyFXaW5kb3c9fSBnbG9iYWxPYmpcbiAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlUmVmcmVzaFxuICogQHJldHVybiB7Ym9vbGVhbnwhRXZlbnRMaXN0ZW5lck9wdGlvbnN9XG4gKi9cbmZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmogPSB3aW5kb3csIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwge2dldCBwYXNzaXZlKCkge1xuICAgICAgICBpc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBpc1N1cHBvcnRlZDtcbiAgICAgIH19KTtcbiAgICB9IGNhdGNoIChlKSB7IH1cblxuICAgIHN1cHBvcnRzUGFzc2l2ZV8gPSBpc1N1cHBvcnRlZDtcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfXG4gICAgPyAvKiogQHR5cGUgeyFFdmVudExpc3RlbmVyT3B0aW9uc30gKi8gKHtwYXNzaXZlOiB0cnVlfSlcbiAgICA6IGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IU9iamVjdH0gSFRNTEVsZW1lbnRQcm90b3R5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gIC8qKlxuICAgKiBPcmRlciBpcyBpbXBvcnRhbnQgYmVjYXVzZSB3ZSByZXR1cm4gdGhlIGZpcnN0IGV4aXN0aW5nIG1ldGhvZCB3ZSBmaW5kLlxuICAgKiBEbyBub3QgY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgaXRlbXMgaW4gdGhlIGJlbG93IGFycmF5LlxuICAgKi9cbiAgY29uc3QgbWF0Y2hlc01ldGhvZHMgPSBbJ21hdGNoZXMnLCAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJywgJ21zTWF0Y2hlc1NlbGVjdG9yJ107XG4gIGxldCBtZXRob2QgPSAnbWF0Y2hlcyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlc01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0aG9kID0gbWF0Y2hlc01ldGhvZHNbaV07XG4gICAgaWYgKG1hdGNoZXNNZXRob2QgaW4gSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgICAgIG1ldGhvZCA9IG1hdGNoZXNNZXRob2Q7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0aG9kO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUV2ZW50fSBldlxuICogQHBhcmFtIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSBwYWdlT2Zmc2V0XG4gKiBAcGFyYW0geyFDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxuICovXG5mdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXYsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgY29uc3Qge3gsIHl9ID0gcGFnZU9mZnNldDtcbiAgY29uc3QgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgY29uc3QgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuXG4gIGxldCBub3JtYWxpemVkWDtcbiAgbGV0IG5vcm1hbGl6ZWRZO1xuICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gIGlmIChldi50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICBldiA9IC8qKiBAdHlwZSB7IVRvdWNoRXZlbnR9ICovIChldik7XG4gICAgbm9ybWFsaXplZFggPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9IGVsc2Uge1xuICAgIGV2ID0gLyoqIEB0eXBlIHshTW91c2VFdmVudH0gKi8gKGV2KTtcbiAgICBub3JtYWxpemVkWCA9IGV2LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYucGFnZVkgLSBkb2N1bWVudFk7XG4gIH1cblxuICByZXR1cm4ge3g6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWX07XG59XG5cbmV4cG9ydCB7c3VwcG9ydHNDc3NWYXJpYWJsZXMsIGFwcGx5UGFzc2l2ZSwgZ2V0TWF0Y2hlc1Byb3BlcnR5LCBnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7Y3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVyc30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtnZXROb3JtYWxpemVkRXZlbnRDb29yZHN9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgaXNBY3RpdmF0ZWQ6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBhY3RpdmF0aW9uRXZlbnQ6ICghRXZlbnR8dW5kZWZpbmVkKSxcbiAqICAgaXNQcm9ncmFtbWF0aWM6IChib29sZWFufHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBBY3RpdmF0aW9uU3RhdGVUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGRlYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZm9jdXM6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgYmx1cjogKHN0cmluZ3x1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJJbmZvVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50KSxcbiAqICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24oIUV2ZW50PSksXG4gKiAgIGZvY3VzOiBmdW5jdGlvbigpLFxuICogICBibHVyOiBmdW5jdGlvbigpXG4gKiB9fVxuICovXG5sZXQgTGlzdGVuZXJzVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICB4OiBudW1iZXIsXG4gKiAgIHk6IG51bWJlclxuICogfX1cbiAqL1xubGV0IFBvaW50VHlwZTtcblxuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbmNvbnN0IEFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoc3RhcnQnLCAncG9pbnRlcmRvd24nLCAnbW91c2Vkb3duJywgJ2tleWRvd24nXTtcblxuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG5jb25zdCBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnXTtcblxuLy8gVHJhY2tzIGFjdGl2YXRpb25zIHRoYXQgaGF2ZSBvY2N1cnJlZCBvbiB0aGUgY3VycmVudCBmcmFtZSwgdG8gYXZvaWQgc2ltdWx0YW5lb3VzIG5lc3RlZCBhY3RpdmF0aW9uc1xuLyoqIEB0eXBlIHshQXJyYXk8IUV2ZW50VGFyZ2V0Pn0gKi9cbmxldCBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ1JpcHBsZUFkYXB0ZXI+fVxuICovXG5jbGFzcyBNRENSaXBwbGVGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gbnVtYmVycztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IC8qIGJvb2xlYW4gLSBjYWNoZWQgKi8ge30sXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgYWRkQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICgvKiB0YXJnZXQ6ICFFdmVudFRhcmdldCAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAoLyogdmFyTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IC8qIENsaWVudFJlY3QgKi8ge30sXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAvKiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9ICovIHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhZGFwdGVyKSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbihNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUgeyFDbGllbnRSZWN0fSAqL1xuICAgIHRoaXMuZnJhbWVfID0gLyoqIEB0eXBlIHshQ2xpZW50UmVjdH0gKi8gKHt3aWR0aDogMCwgaGVpZ2h0OiAwfSk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubWF4UmFkaXVzXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudCl9ICovXG4gICAgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gKGUpID0+IHRoaXMuYWN0aXZhdGVfKGUpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9ICgpID0+IHRoaXMuZGVhY3RpdmF0ZV8oKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5mb2N1c0hhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVGb2N1cygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmJsdXJIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlQmx1cigpO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyXyA9ICgpID0+IHRoaXMubGF5b3V0KCk7XG5cbiAgICAvKiogQHByaXZhdGUge3tsZWZ0OiBudW1iZXIsIHRvcDpudW1iZXJ9fSAqL1xuICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdTY2FsZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUV2ZW50fHVuZGVmaW5lZH0gKi9cbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjb21wdXRlIHRoaXMgcHJvcGVydHkgc28gdGhhdCB3ZSBhcmUgbm90IHF1ZXJ5aW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjbGllbnRcbiAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgKiBhbmQgdGhlbiBpbml0aWFsaXplZCBhdCBtb3VudCB0aW1lIG9uIHRoZSBjbGllbnQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdXBwb3J0c1ByZXNzUmlwcGxlXygpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9XG4gICAqL1xuICBkZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcblxuICAgIHRoaXMucmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpO1xuXG4gICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhST09UKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlcyBuZWVkIGxheW91dCBsb2dpYyBhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIHNldCBjb29yZGluYXRlcyBmb3IgYm90aCBzaGFkZSBhbmQgcmlwcGxlXG4gICAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCkpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2YXRpb25UaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT04pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoUk9PVCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJSb290SGFuZGxlcnNfKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudH0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSkge1xuICAgIGlmIChlLnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpIHtcbiAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignYmx1cicsIHRoaXMuYmx1ckhhbmRsZXJfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKSB7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcmVtb3ZlQ3NzVmFyc18oKSB7XG4gICAgY29uc3Qge3N0cmluZ3N9ID0gTURDUmlwcGxlRm91bmRhdGlvbjtcbiAgICBPYmplY3Qua2V5cyhzdHJpbmdzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBpZiAoay5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShzdHJpbmdzW2tdLCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFjdGl2YXRlXyhlKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgIGNvbnN0IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgY29uc3QgaXNTYW1lSW50ZXJhY3Rpb24gPSBwcmV2aW91c0FjdGl2YXRpb25FdmVudCAmJiBlICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZS50eXBlO1xuICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID0gZSA9PT0gdW5kZWZpbmVkO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5hY3RpdmF0aW9uRXZlbnQgPSBlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPyBmYWxzZSA6IGUgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICBlLnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3BvaW50ZXJkb3duJ1xuICAgICk7XG5cbiAgICBjb25zdCBoYXNBY3RpdmF0ZWRDaGlsZCA9IGUgIT09IHVuZGVmaW5lZCAmJiBhY3RpdmF0ZWRUYXJnZXRzLmxlbmd0aCA+IDAgJiYgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKFxuICAgICAgKHRhcmdldCkgPT4gdGhpcy5hZGFwdGVyXy5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkpO1xuICAgIGlmIChoYXNBY3RpdmF0ZWRDaGlsZCkge1xuICAgICAgLy8gSW1tZWRpYXRlbHkgcmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSwgd2hpbGUgcHJlc2VydmluZyBsb2dpYyB0aGF0IHByZXZlbnRzIHRvdWNoIGZvbGxvdy1vbiBldmVudHNcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKC8qKiBAdHlwZSB7IUV2ZW50VGFyZ2V0fSAqLyAoZS50YXJnZXQpKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSAmJiBlICE9PSB1bmRlZmluZWQgJiYgKGUua2V5ID09PSAnICcgfHwgZS5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgLy8gYWN0aXZlIHN0YXRlcyBpbmNvbnNpc3RlbnRseSB3aGVuIHRoZXkncmUgY2FsbGVkIHdpdGhpbiBldmVudCBoYW5kbGluZyBjb2RlOlxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgLy8gV2UgdHJ5IGZpcnN0IG91dHNpZGUgckFGIHRvIHN1cHBvcnQgRWRnZSwgd2hpY2ggZG9lcyBub3QgZXhoaWJpdCB0aGlzIHByb2JsZW0sIGJ1dCB3aWxsIGNyYXNoIGlmIGEgQ1NTXG4gICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSkge1xuICAgIHJldHVybiAoZSAhPT0gdW5kZWZpbmVkICYmIGUudHlwZSA9PT0gJ2tleWRvd24nKSA/IHRoaXMuYWRhcHRlcl8uaXNTdXJmYWNlQWN0aXZlKCkgOiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZXZlbnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICovXG4gIGFjdGl2YXRlKGV2ZW50KSB7XG4gICAgdGhpcy5hY3RpdmF0ZV8oZXZlbnQpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGFuaW1hdGVBY3RpdmF0aW9uXygpIHtcbiAgICBjb25zdCB7VkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtERUFDVElWQVRJT05fVElNRU9VVF9NU30gPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnM7XG5cbiAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuXG4gICAgbGV0IHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgbGV0IHRyYW5zbGF0ZUVuZCA9ICcnO1xuXG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIGNvbnN0IHtzdGFydFBvaW50LCBlbmRQb2ludH0gPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKTtcbiAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gYCR7c3RhcnRQb2ludC54fXB4LCAke3N0YXJ0UG9pbnQueX1weGA7XG4gICAgICB0cmFuc2xhdGVFbmQgPSBgJHtlbmRQb2ludC54fXB4LCAke2VuZFBvaW50Lnl9cHhgO1xuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgdHJhbnNsYXRlU3RhcnQpO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1RSQU5TTEFURV9FTkQsIHRyYW5zbGF0ZUVuZCk7XG4gICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuXG4gICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm4ge3tzdGFydFBvaW50OiBQb2ludFR5cGUsIGVuZFBvaW50OiBQb2ludFR5cGV9fVxuICAgKi9cbiAgZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpIHtcbiAgICBjb25zdCB7YWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXJ9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuXG4gICAgbGV0IHN0YXJ0UG9pbnQ7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlcikge1xuICAgICAgc3RhcnRQb2ludCA9IGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhcbiAgICAgICAgLyoqIEB0eXBlIHshRXZlbnR9ICovIChhY3RpdmF0aW9uRXZlbnQpLFxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy5mcmFtZV8uaGVpZ2h0IC8gMixcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICB4OiBzdGFydFBvaW50LnggLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6IHN0YXJ0UG9pbnQueSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICBjb25zdCBlbmRQb2ludCA9IHtcbiAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtzdGFydFBvaW50LCBlbmRQb2ludH07XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCkge1xuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgIGNvbnN0IHtGR19ERUFDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGNvbnN0IHtoYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWR9ID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGNvbnN0IGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcblxuICAgIGlmIChhY3RpdmF0aW9uSGFzRW5kZWQgJiYgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfKSB7XG4gICAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKSB7XG4gICAgY29uc3Qge0ZHX0FDVElWQVRJT059ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gIH1cblxuICByZXNldEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQsIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBkZWFjdGl2YXRlXygpIHtcbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgIGlmICghYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSAvKiogQHR5cGUgeyFBY3RpdmF0aW9uU3RhdGVUeXBlfSAqLyAoT2JqZWN0LmFzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKSk7XG5cbiAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSkpO1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9IG9wdGlvbnNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFuaW1hdGVEZWFjdGl2YXRpb25fKHt3YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlfSkge1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgfVxuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIGlmICh0aGlzLmxheW91dEZyYW1lXykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRGcmFtZV8pO1xuICAgIH1cbiAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGxheW91dEludGVybmFsXygpIHtcbiAgICB0aGlzLmZyYW1lXyA9IHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIGNvbnN0IG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuXG4gICAgLy8gU3VyZmFjZSBkaWFtZXRlciBpcyB0cmVhdGVkIGRpZmZlcmVudGx5IGZvciB1bmJvdW5kZWQgdnMuIGJvdW5kZWQgcmlwcGxlcy5cbiAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAvLyBzcXVhcmUpLiBCb3VuZGVkIHJpcHBsZXMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgZnVsbHkgZXhwZWN0ZWQgdG8gZXhwYW5kIGJleW9uZCB0aGUgc3VyZmFjZSdzIGxvbmdlc3QgZGlhbWV0ZXJcbiAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgIGNvbnN0IGdldEJvdW5kZWRSYWRpdXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMuZnJhbWVfLndpZHRoLCAyKSArIE1hdGgucG93KHRoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICB9O1xuXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpID8gbWF4RGltIDogZ2V0Qm91bmRlZFJhZGl1cygpO1xuXG4gICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICB0aGlzLmluaXRpYWxTaXplXyA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICB0aGlzLmZnU2NhbGVfID0gdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG5cbiAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgdXBkYXRlTGF5b3V0Q3NzVmFyc18oKSB7XG4gICAgY29uc3Qge1xuICAgICAgVkFSX0ZHX1NJWkUsIFZBUl9MRUZULCBWQVJfVE9QLCBWQVJfRkdfU0NBTEUsXG4gICAgfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcblxuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIGAke3RoaXMuaW5pdGlhbFNpemVffXB4YCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0NBTEUsIHRoaXMuZmdTY2FsZV8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnR9cHhgKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX1RPUCwgYCR7dGhpcy51bmJvdW5kZWRDb29yZHNfLnRvcH1weGApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXRVbmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgY29uc3Qge1VOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRm9jdXMoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKSk7XG4gIH1cblxuICBoYW5kbGVCbHVyKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0NvbXBvbmVudCBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IE1EQ1JpcHBsZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCBNRENSaXBwbGVGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQGV4dGVuZHMgTURDQ29tcG9uZW50PCFNRENSaXBwbGVGb3VuZGF0aW9uPlxuICovXG5jbGFzcyBNRENSaXBwbGUgZXh0ZW5kcyBNRENDb21wb25lbnQge1xuICAvKiogQHBhcmFtIHsuLi4/fSBhcmdzICovXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHt7aXNVbmJvdW5kZWQ6IChib29sZWFufHVuZGVmaW5lZCl9PX0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlfVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QsIHtpc1VuYm91bmRlZCA9IHVuZGVmaW5lZH0gPSB7fSkge1xuICAgIGNvbnN0IHJpcHBsZSA9IG5ldyBNRENSaXBwbGUocm9vdCk7XG4gICAgLy8gT25seSBvdmVycmlkZSB1bmJvdW5kZWQgYmVoYXZpb3IgaWYgb3B0aW9uIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgaWYgKGlzVW5ib3VuZGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSAvKiogQHR5cGUge2Jvb2xlYW59ICovIChpc1VuYm91bmRlZCk7XG4gICAgfVxuICAgIHJldHVybiByaXBwbGU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshUmlwcGxlQ2FwYWJsZVN1cmZhY2V9IGluc3RhbmNlXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUFkYXB0ZXIoaW5zdGFuY2UpIHtcbiAgICBjb25zdCBNQVRDSEVTID0gdXRpbC5nZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyksXG4gICAgICBpc1VuYm91bmRlZDogKCkgPT4gaW5zdGFuY2UudW5ib3VuZGVkLFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiBpbnN0YW5jZS5yb290X1tNQVRDSEVTXSgnOmFjdGl2ZScpLFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IGluc3RhbmNlLmRpc2FibGVkLFxuICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiAodGFyZ2V0KSA9PiBpbnN0YW5jZS5yb290Xy5jb250YWlucyh0YXJnZXQpLFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpLFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gaW5zdGFuY2Uucm9vdF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAoe3g6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0fSksXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBnZXQgdW5ib3VuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0IHVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICB0aGlzLnVuYm91bmRlZF8gPSBCb29sZWFuKHVuYm91bmRlZCk7XG4gICAgdGhpcy5zZXRVbmJvdW5kZWRfKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc3VyZSBDb21waWxlciB0aHJvd3MgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3Igd2hlbiBkaXJlY3RseSBhY2Nlc3NpbmcgYVxuICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICogQnkgYWNjZXNzaW5nIHRoZSBwcm90ZWN0ZWQgcHJvcGVydHkgaW5zaWRlIGEgbWV0aG9kLCB3ZSBzb2x2ZSB0aGF0IHByb2JsZW0uXG4gICAqIFRoYXQncyB3aHkgdGhpcyBmdW5jdGlvbiBleGlzdHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRVbmJvdW5kZWRfKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uc2V0VW5ib3VuZGVkKHRoaXMudW5ib3VuZGVkXyk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICB9XG5cbiAgbGF5b3V0KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUZvdW5kYXRpb259XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKE1EQ1JpcHBsZS5jcmVhdGVBZGFwdGVyKHRoaXMpKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgaW5pdGlhbFN5bmNXaXRoRE9NKCkge1xuICAgIHRoaXMudW5ib3VuZGVkID0gJ21kY1JpcHBsZUlzVW5ib3VuZGVkJyBpbiB0aGlzLnJvb3RfLmRhdGFzZXQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTZWUgTWF0ZXJpYWwgRGVzaWduIHNwZWMgZm9yIG1vcmUgZGV0YWlscyBvbiB3aGVuIHRvIHVzZSByaXBwbGVzLlxuICogaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL21vdGlvbi9jaG9yZW9ncmFwaHkuaHRtbCNjaG9yZW9ncmFwaHktY3JlYXRpb25cbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgUmlwcGxlQ2FwYWJsZVN1cmZhY2Uge31cblxuLyoqIEBwcm90ZWN0ZWQgeyFFbGVtZW50fSAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLnJvb3RfO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgYmxlZWRzIG91dCBvZiB0aGUgYm91bmRzIG9mIHRoZSBlbGVtZW50LlxuICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUudW5ib3VuZGVkO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSByaXBwbGUgaXMgYXR0YWNoZWQgdG8gYSBkaXNhYmxlZCBjb21wb25lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS5kaXNhYmxlZDtcblxuZXhwb3J0IHtNRENSaXBwbGUsIE1EQ1JpcHBsZUZvdW5kYXRpb24sIFJpcHBsZUNhcGFibGVTdXJmYWNlLCB1dGlsfTtcbiIsImltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2luZGV4J1xuaW1wb3J0IHtcbiAgc3VwcG9ydHNDc3NWYXJpYWJsZXMsXG4gIGdldE1hdGNoZXNQcm9wZXJ0eSxcbiAgYXBwbHlQYXNzaXZlXG59IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvdXRpbCdcblxuZXhwb3J0IGNsYXNzIFJpcHBsZUJhc2UgZXh0ZW5kcyBNRENSaXBwbGVGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBNQVRDSEVTKCkge1xuICAgIC8qIGdsb2JhbCBIVE1MRWxlbWVudCAqL1xuICAgIHJldHVybiAoXG4gICAgICBSaXBwbGVCYXNlLl9tYXRjaGVzIHx8XG4gICAgICAoUmlwcGxlQmFzZS5fbWF0Y2hlcyA9IGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpKVxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBpc1N1cmZhY2VBY3RpdmUocmVmKSB7XG4gICAgcmV0dXJuIHJlZltSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZtLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbFtSaXBwbGVCYXNlLk1BVENIRVNdKCc6YWN0aXZlJylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uZGlzYWJsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRkZWxldGUodm0uY2xhc3NlcywgY2xhc3NOYW1lKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogdGFyZ2V0ID0+IHZtLiRlbC5jb250YWlucyh0YXJnZXQpLFxuICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uc3R5bGVzLCB2YXJOYW1lLCB2YWx1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFJpcHBsZU1peGluID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzKVxuICAgIHRoaXMucmlwcGxlLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmlwcGxlLmRlc3Ryb3koKVxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxjdXN0b20tZWxlbWVudCBcbiAgICA6dGFnPVwidGFnXCIgXG4gICAgOmNsYXNzZXM9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGVzPVwic3R5bGVzXCIgXG4gICAgY2xhc3M9XCJtZGMtcmlwcGxlXCI+XG4gICAgPHNsb3QgLz5cbiAgPC9jdXN0b20tZWxlbWVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBDdXN0b21FbGVtZW50TWl4aW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlTWl4aW4gfSBmcm9tICcuL21kYy1yaXBwbGUtYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLXJpcHBsZScsXG4gIG1peGluczogW0N1c3RvbUVsZW1lbnRNaXhpbiwgUmlwcGxlTWl4aW5dLFxuICBwcm9wczoge1xuICAgIHRhZzogU3RyaW5nXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50KGNvbXBpbGVkVGVtcGxhdGUsIGluamVjdFN0eWxlLCBkZWZhdWx0RXhwb3J0LCBzY29wZUlkLCBpc0Z1bmN0aW9uYWxUZW1wbGF0ZSwgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLywgaXNTaGFkb3dNb2RlLCBjcmVhdGVJbmplY3RvciwgY3JlYXRlSW5qZWN0b3JTU1IsIGNyZWF0ZUluamVjdG9yU2hhZG93KSB7XG4gICAgaWYgKHR5cGVvZiBpc1NoYWRvd01vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3JTU1IgPSBjcmVhdGVJbmplY3RvcjtcbiAgICAgICAgY3JlYXRlSW5qZWN0b3IgPSBpc1NoYWRvd01vZGU7XG4gICAgICAgIGlzU2hhZG93TW9kZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gICAgY29uc3Qgb3B0aW9ucyA9IHR5cGVvZiBkZWZhdWx0RXhwb3J0ID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdEV4cG9ydC5vcHRpb25zIDogZGVmYXVsdEV4cG9ydDtcbiAgICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gICAgaWYgKGNvbXBpbGVkVGVtcGxhdGUgJiYgY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXIpIHtcbiAgICAgICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlcjtcbiAgICAgICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgICAgICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlO1xuICAgICAgICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzY29wZWRJZFxuICAgIGlmIChzY29wZUlkKSB7XG4gICAgICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkO1xuICAgIH1cbiAgICBsZXQgaG9vaztcbiAgICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgICAgICAvLyBzZXJ2ZXIgYnVpbGRcbiAgICAgICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICAgICAgICBjb250ZXh0ID1cbiAgICAgICAgICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KTsgLy8gZnVuY3Rpb25hbFxuICAgICAgICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICAgICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX187XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgICAgICAgaWYgKGluamVjdFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNTUihjb250ZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVyZW5jZVxuICAgICAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9vaztcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5qZWN0U3R5bGUpIHtcbiAgICAgICAgaG9vayA9IGlzU2hhZG93TW9kZVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3RvclNoYWRvdyh0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTdHlsZS5jYWxsKHRoaXMsIGNyZWF0ZUluamVjdG9yKGNvbnRleHQpKTtcbiAgICAgICAgICAgIH07XG4gICAgfVxuICAgIGlmIChob29rKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcbiAgICAgICAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBob29rLmNhbGwoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlO1xuICAgICAgICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRFeHBvcnQ7XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICA6aWQ9XCJpZFwiXG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiXG4gICAgOnN0eWxlPVwic3R5bGVzXCJcbiAgICB0YWJpbmRleD1cIjBcIlxuICAgIEBjbGljaz1cImhhbmRsZUludGVyYWN0aW9uXCJcbiAgICBAa2V5ZG93bj1cImhhbmRsZUludGVyYWN0aW9uXCJcbiAgICBAdHJhbnNpdGlvbmVuZD1cImhhbmRsZVRyYW5zaXRpb25FbmRcIlxuICA+XG4gICAgPGlcbiAgICAgIHYtaWY9XCJoYXZlbGVhZGluZ0ljb25cIlxuICAgICAgcmVmPVwibGVhZGluZ0ljb25cIlxuICAgICAgOmNsYXNzPVwibGVhZGluZ0NsYXNzZXNcIlxuICAgICAgY2xhc3M9XCJtZGMtY2hpcF9faWNvbiBtZGMtY2hpcF9faWNvbi0tbGVhZGluZ1wiXG4gICAgICA+e3sgbGVhZGluZ0ljb24gfX08L2lcbiAgICA+XG4gICAgPGRpdiB2LWlmPVwiaXNGaWx0ZXJcIiBjbGFzcz1cIm1kYy1jaGlwX19jaGVja21hcmtcIj5cbiAgICAgIDxzdmcgY2xhc3M9XCJtZGMtY2hpcF9fY2hlY2ttYXJrLXN2Z1wiIHZpZXdCb3g9XCItMiAtMyAzMCAzMFwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGNsYXNzPVwibWRjLWNoaXBfX2NoZWNrbWFyay1wYXRoXCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICAgIGQ9XCJNMS43MywxMi45MSA4LjEsMTkuMjggMjIuNzksNC41OVwiXG4gICAgICAgIC8+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWRjLWNoaXBfX3RleHRcIj48c2xvdCAvPjwvZGl2PlxuICAgIDxpXG4gICAgICB2LWlmPVwiaGF2ZXRyYWlsaW5nSWNvblwiXG4gICAgICByZWY9XCJ0cmFpbGluZ0ljb25cIlxuICAgICAgOmNsYXNzPVwidHJhaWxpbmdDbGFzc2VzXCJcbiAgICAgIGNsYXNzPVwibWRjLWNoaXBfX2ljb24gbWRjLWNoaXBfX2ljb24tLXRyYWlsaW5nXCJcbiAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgIEBjbGljaz1cImhhbmRsZVRyYWlsaW5nSWNvbkludGVyYWN0aW9uXCJcbiAgICAgIEBrZXlkb3duPVwiaGFuZGxlVHJhaWxpbmdJY29uSW50ZXJhY3Rpb25cIlxuICAgICAgPnt7IHRyYWlsaW5nSWNvbiB9fTwvaVxuICAgID5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuYXBwbHlQYXNzaXZlXG48c2NyaXB0PlxuaW1wb3J0IHsgTURDQ2hpcEZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvY2hpcHMvY2hpcC9mb3VuZGF0aW9uJ1xuaW1wb3J0IHsgQ3VzdG9tTGlua01peGluLCBlbWl0Q3VzdG9tRXZlbnQgfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHsgUmlwcGxlQmFzZSB9IGZyb20gJy4uL3JpcHBsZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWNoaXAnLFxuICBtaXhpbnM6IFtDdXN0b21MaW5rTWl4aW5dLFxuICBwcm9wczoge1xuICAgIGxlYWRpbmdJY29uOiBbU3RyaW5nXSxcbiAgICB0cmFpbGluZ0ljb246IFtTdHJpbmddLFxuICAgIGxlYWRpbmdJY29uQ2xhc3NlczogW09iamVjdF0sXG4gICAgdHJhaWxpbmdJY29uQ2xhc3NlczogW09iamVjdF1cbiAgfSxcbiAgaW5qZWN0OiBbJ21kY0NoaXBTZXQnXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICAnbWRjLWNoaXAnOiB0cnVlXG4gICAgICB9LFxuICAgICAgc3R5bGVzOiB7fSxcbiAgICAgIGlkOiAnJ1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBzZWxlY3RlZDoge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uLmlzU2VsZWN0ZWQoKVxuICAgICAgfSxcbiAgICAgIHNldChudikge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uc2V0U2VsZWN0ZWQobnYpXG4gICAgICB9XG4gICAgfSxcbiAgICBpc0ZpbHRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLm1kY0NoaXBTZXQgJiYgdGhpcy5tZGNDaGlwU2V0LmZpbHRlclxuICAgIH0sXG4gICAgaGF2ZWxlYWRpbmdJY29uKCkge1xuICAgICAgcmV0dXJuICEhdGhpcy5sZWFkaW5nSWNvbiB8fCB0aGlzLmxlYWRpbmdJY29uQ2xhc3Nlc1xuICAgIH0sXG4gICAgaGF2ZXRyYWlsaW5nSWNvbigpIHtcbiAgICAgIHJldHVybiAhIXRoaXMudHJhaWxpbmdJY29uIHx8IHRoaXMudHJhaWxpbmdJY29uQ2xhc3Nlc1xuICAgIH0sXG4gICAgbGVhZGluZ0NsYXNzZXMoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHtcbiAgICAgICAgICAnbWF0ZXJpYWwtaWNvbnMnOiAhIXRoaXMubGVhZGluZ0ljb25cbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5sZWFkaW5nSWNvbkNsYXNzZXNcbiAgICAgIClcbiAgICB9LFxuICAgIHRyYWlsaW5nQ2xhc3NlcygpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAge1xuICAgICAgICAgICdtYXRlcmlhbC1pY29ucyc6ICEhdGhpcy50cmFpbGluZ0ljb25cbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy50cmFpbGluZ0ljb25DbGFzc2VzXG4gICAgICApXG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5pZCA9IHRoaXMubWRjQ2hpcFNldC5uZXh0SWQoKVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENDaGlwRm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJHNldCh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSksXG4gICAgICByZW1vdmVDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGRlbGV0ZSh0aGlzLmNsYXNzZXMsIGNsYXNzTmFtZSksXG4gICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgYWRkQ2xhc3NUb0xlYWRpbmdJY29uOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICBpZiAodGhpcy5oYXZlbGVhZGluZ0ljb24pIHtcbiAgICAgICAgICB0aGlzLiRyZWZzLmxlYWRpbmdJY29uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVtb3ZlQ2xhc3NGcm9tTGVhZGluZ0ljb246IGNsYXNzTmFtZSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmhhdmVsZWFkaW5nSWNvbikge1xuICAgICAgICAgIHRoaXMuJHJlZnMubGVhZGluZ0ljb24uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBldmVudFRhcmdldEhhc0NsYXNzOiAodGFyZ2V0LCBjbGFzc05hbWUpID0+XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcbiAgICAgIG5vdGlmeUludGVyYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgIGVtaXRDdXN0b21FdmVudChcbiAgICAgICAgICB0aGlzLiRlbCxcbiAgICAgICAgICBNRENDaGlwRm91bmRhdGlvbi5zdHJpbmdzLklOVEVSQUNUSU9OX0VWRU5ULFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoaXBJZDogdGhpcy5pZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApXG4gICAgICAgIHRoaXMubWRjQ2hpcFNldCAmJiB0aGlzLm1kY0NoaXBTZXQuaGFuZGxlSW50ZXJhY3Rpb25cbiAgICAgIH0sXG5cbiAgICAgIG5vdGlmeVNlbGVjdGlvbjogc2VsZWN0ZWQgPT5cbiAgICAgICAgZW1pdEN1c3RvbUV2ZW50KFxuICAgICAgICAgIHRoaXMuJGVsLFxuICAgICAgICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnN0cmluZ3MuU0VMRUNUSU9OX0VWRU5ULFxuICAgICAgICAgIHsgY2hpcElkOiB0aGlzLmlkLCBzZWxlY3RlZDogc2VsZWN0ZWQgfSxcbiAgICAgICAgICB0cnVlIC8qIHNob3VsZEJ1YmJsZSAqL1xuICAgICAgICApLFxuICAgICAgbm90aWZ5VHJhaWxpbmdJY29uSW50ZXJhY3Rpb246ICgpID0+IHtcbiAgICAgICAgZW1pdEN1c3RvbUV2ZW50KFxuICAgICAgICAgIHRoaXMuJGVsLFxuICAgICAgICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnN0cmluZ3MuVFJBSUxJTkdfSUNPTl9JTlRFUkFDVElPTl9FVkVOVCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlwSWQ6IHRoaXMuaWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIG5vdGlmeVJlbW92YWw6ICgpID0+IHtcbiAgICAgICAgZW1pdEN1c3RvbUV2ZW50KFxuICAgICAgICAgIHRoaXMuJGVsLFxuICAgICAgICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnN0cmluZ3MuUkVNT1ZBTF9FVkVOVCxcbiAgICAgICAgICB7IGNoaXBJZDogdGhpcy5pZCwgcm9vdDogdGhpcy4kZWwgfSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICBnZXRDb21wdXRlZFN0eWxlVmFsdWU6IHByb3BlcnR5TmFtZSA9PlxuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiRlbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eU5hbWUpLFxuICAgICAgc2V0U3R5bGVQcm9wZXJ0eTogKHByb3BlcnR5LCB2YWx1ZSkgPT5cbiAgICAgICAgdGhpcy4kc2V0KHRoaXMuc3R5bGVzLCBwcm9wZXJ0eSwgdmFsdWUpXG4gICAgfSlcblxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcblxuICAgIHRoaXMubWRjQ2hpcFNldC5jaGlwcy5wdXNoKHRoaXMpXG5cbiAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5yaXBwbGUuZGVzdHJveSgpXG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KVxuICAgIH0sXG4gICAgaGFuZGxlVHJhbnNpdGlvbkVuZChldnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVUcmFuc2l0aW9uRW5kKGV2dClcbiAgICB9LFxuICAgIGhhbmRsZVRyYWlsaW5nSWNvbkludGVyYWN0aW9uKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZVRyYWlsaW5nSWNvbkludGVyYWN0aW9uKGV2dClcbiAgICB9LFxuICAgIHRvZ2dsZVNlbGVjdGVkKCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnRvZ2dsZVNlbGVjdGVkKClcbiAgICB9LFxuICAgIGlzU2VsZWN0ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uLmlzU2VsZWN0ZWQoKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIENoaXAgU2V0LlxuICpcbiAqIERlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBhZGFwdGVyIGV4cGVjdGVkIGJ5IHRoZSBmb3VuZGF0aW9uLiBJbXBsZW1lbnQgdGhpc1xuICogYWRhcHRlciB0byBpbnRlZ3JhdGUgdGhlIENoaXAgU2V0IGludG8geW91ciBmcmFtZXdvcmsuIFNlZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9hdXRob3JpbmctY29tcG9uZW50cy5tZFxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQHJlY29yZFxuICovXG5jbGFzcyBNRENDaGlwU2V0QWRhcHRlciB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHJvb3QgZWxlbWVudCBjb250YWlucyB0aGUgZ2l2ZW4gY2xhc3MgbmFtZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBjaGlwIHdpdGggdGhlIGdpdmVuIGlkIGZyb20gdGhlIGNoaXAgc2V0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hpcElkXG4gICAqL1xuICByZW1vdmVDaGlwKGNoaXBJZCkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgc2VsZWN0ZWQgc3RhdGUgb2YgdGhlIGNoaXAgd2l0aCB0aGUgZ2l2ZW4gaWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGlwSWRcbiAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZFxuICAgKi9cbiAgc2V0U2VsZWN0ZWQoY2hpcElkLCBzZWxlY3RlZCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDQ2hpcFNldEFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBzdHJpbmdzID0ge1xuICBDSElQX1NFTEVDVE9SOiAnLm1kYy1jaGlwJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgQ0hPSUNFOiAnbWRjLWNoaXAtc2V0LS1jaG9pY2UnLFxuICBGSUxURVI6ICdtZGMtY2hpcC1zZXQtLWZpbHRlcicsXG59O1xuXG5leHBvcnQge3N0cmluZ3MsIGNzc0NsYXNzZXN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IE1EQ0NoaXBTZXRBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7TURDQ2hpcEludGVyYWN0aW9uRXZlbnRUeXBlLCBNRENDaGlwU2VsZWN0aW9uRXZlbnRUeXBlLCBNRENDaGlwUmVtb3ZhbEV2ZW50VHlwZX0gZnJvbSAnLi4vY2hpcC9mb3VuZGF0aW9uJztcbmltcG9ydCB7c3RyaW5ncywgY3NzQ2xhc3Nlc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENDaGlwU2V0QWRhcHRlcj59XG4gKiBAZmluYWxcbiAqL1xuY2xhc3MgTURDQ2hpcFNldEZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QHNlZSBNRENDaGlwU2V0QWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm5cbiAgICogdHlwZXMuXG4gICAqIEByZXR1cm4geyFNRENDaGlwU2V0QWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdEFkYXB0ZXIoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IU1EQ0NoaXBTZXRBZGFwdGVyfSAqLyAoe1xuICAgICAgaGFzQ2xhc3M6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQ2hpcDogKCkgPT4ge30sXG4gICAgICBzZXRTZWxlY3RlZDogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDQ2hpcFNldEFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ0NoaXBTZXRGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWRzIG9mIHRoZSBzZWxlY3RlZCBjaGlwcyBpbiB0aGUgc2V0LiBPbmx5IHVzZWQgZm9yIGNob2ljZSBjaGlwIHNldCBvciBmaWx0ZXIgY2hpcCBzZXQuXG4gICAgICogQHByaXZhdGUgeyFBcnJheTxzdHJpbmc+fVxuICAgICAqL1xuICAgIHRoaXMuc2VsZWN0ZWRDaGlwSWRzXyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIElEcyBvZiBhbGwgc2VsZWN0ZWQgY2hpcHMuXG4gICAqIEByZXR1cm4geyFBcnJheTxzdHJpbmc+fVxuICAgKi9cbiAgZ2V0U2VsZWN0ZWRDaGlwSWRzKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkQ2hpcElkc187XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBzZWxlY3Rpb24gb2YgdGhlIGNoaXAgd2l0aCB0aGUgZ2l2ZW4gaWQuXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGlwSWRcbiAgICovXG4gIHRvZ2dsZVNlbGVjdF8oY2hpcElkKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRDaGlwSWRzXy5pbmRleE9mKGNoaXBJZCkgPj0gMCkge1xuICAgICAgdGhpcy5kZXNlbGVjdF8oY2hpcElkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3QoY2hpcElkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0cyB0aGUgY2hpcCB3aXRoIHRoZSBnaXZlbiBpZC4gRGVzZWxlY3RzIGFsbCBvdGhlciBjaGlwcyBpZiB0aGUgY2hpcCBzZXQgaXMgb2YgdGhlIGNob2ljZSB2YXJpYW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hpcElkXG4gICAqL1xuICBzZWxlY3QoY2hpcElkKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRDaGlwSWRzXy5pbmRleE9mKGNoaXBJZCkgPj0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKGNzc0NsYXNzZXMuQ0hPSUNFKSAmJiB0aGlzLnNlbGVjdGVkQ2hpcElkc18ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcHJldmlvdXNseVNlbGVjdGVkQ2hpcCA9IHRoaXMuc2VsZWN0ZWRDaGlwSWRzX1swXTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDaGlwSWRzXy5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTZWxlY3RlZChwcmV2aW91c2x5U2VsZWN0ZWRDaGlwLCBmYWxzZSk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRDaGlwSWRzXy5wdXNoKGNoaXBJZCk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRTZWxlY3RlZChjaGlwSWQsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VsZWN0cyB0aGUgY2hpcCB3aXRoIHRoZSBnaXZlbiBpZC5cbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoaXBJZFxuICAgKi9cbiAgZGVzZWxlY3RfKGNoaXBJZCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZENoaXBJZHNfLmluZGV4T2YoY2hpcElkKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5zZWxlY3RlZENoaXBJZHNfLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldFNlbGVjdGVkKGNoaXBJZCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgY2hpcCBpbnRlcmFjdGlvbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hpcElkXG4gICAqL1xuICBoYW5kbGVDaGlwSW50ZXJhY3Rpb24oY2hpcElkKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5DSE9JQ0UpIHx8IHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5GSUxURVIpKSB7XG4gICAgICB0aGlzLnRvZ2dsZVNlbGVjdF8oY2hpcElkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBhIGNoaXAgc2VsZWN0aW9uIGV2ZW50LCB1c2VkIHRvIGhhbmRsZSBkaXNjcmVwYW5jeSB3aGVuIHNlbGVjdGlvbiBzdGF0ZSBpcyBzZXQgZGlyZWN0bHkgb24gdGhlIENoaXAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGlwSWRcbiAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZFxuICAgKi9cbiAgaGFuZGxlQ2hpcFNlbGVjdGlvbihjaGlwSWQsIHNlbGVjdGVkKSB7XG4gICAgY29uc3QgY2hpcElzU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkQ2hpcElkc18uaW5kZXhPZihjaGlwSWQpID49IDA7XG4gICAgaWYgKHNlbGVjdGVkICYmICFjaGlwSXNTZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZWxlY3QoY2hpcElkKTtcbiAgICB9IGVsc2UgaWYgKCFzZWxlY3RlZCAmJiBjaGlwSXNTZWxlY3RlZCkge1xuICAgICAgdGhpcy5kZXNlbGVjdF8oY2hpcElkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgZXZlbnQgd2hlbiBhIGNoaXAgaXMgcmVtb3ZlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoaXBJZFxuICAgKi9cbiAgaGFuZGxlQ2hpcFJlbW92YWwoY2hpcElkKSB7XG4gICAgdGhpcy5kZXNlbGVjdF8oY2hpcElkKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNoaXAoY2hpcElkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENDaGlwU2V0Rm91bmRhdGlvbjtcbiIsIjxzY3JpcHQ+XG5pbXBvcnQgTURDQ2hpcFNldEZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2NoaXBzL2NoaXAtc2V0L2ZvdW5kYXRpb24nXG5pbXBvcnQgeyBNRENDaGlwRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9jaGlwcy9jaGlwL2ZvdW5kYXRpb24nXG5cbmxldCBpZENvdW50ZXIgPSAwXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1jaGlwLXNldCcsXG4gIHByb3BzOiB7XG4gICAgY2hvaWNlOiBbQm9vbGVhbl0sXG4gICAgZmlsdGVyOiBbQm9vbGVhbl0sXG4gICAgaW5wdXQ6IFtCb29sZWFuXVxuICB9LFxuICBwcm92aWRlKCkge1xuICAgIHJldHVybiB7IG1kY0NoaXBTZXQ6IHRoaXMgfVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgICdtZGMtY2hpcC1zZXQnOiB0cnVlLFxuICAgICAgICAnbWRjLWNoaXAtc2V0LS1jaG9pY2UnOiB0aGlzLmNob2ljZSxcbiAgICAgICAgJ21kYy1jaGlwLXNldC0tZmlsdGVyJzogdGhpcy5maWx0ZXIsXG4gICAgICAgICdtZGMtY2hpcC1zZXQtLWlucHV0JzogdGhpcy5pbnB1dFxuICAgICAgfSxcblxuICAgICAgY2hpcHM6IFtdXG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENDaGlwU2V0Rm91bmRhdGlvbih7XG4gICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2hpcDogY2hpcElkID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRDaGlwSW5kZXgoY2hpcElkKVxuXG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoaXBzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2V0U2VsZWN0ZWQ6IChjaGlwSWQsIHNlbGVjdGVkKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kQ2hpcEluZGV4KGNoaXBJZClcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICB0aGlzLmNoaXBzW2luZGV4XS5zZWxlY3RlZCA9IHNlbGVjdGVkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5mb3VuZGF0aW9uLmluaXQoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG5leHRJZCgpIHtcbiAgICAgIHJldHVybiBgbWRjLWNoaXAtJHsrK2lkQ291bnRlcn1gXG4gICAgfSxcbiAgICBmaW5kQ2hpcEluZGV4KGNoaXBJZCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmNoaXBzW2ldLmlkID09PSBjaGlwSWQpIHtcbiAgICAgICAgICByZXR1cm4gaVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gLTFcbiAgICB9LFxuICAgIGhhbmRsZUNoaXBJbnRlcmFjdGlvbihldnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVDaGlwSW50ZXJhY3Rpb24oZXZ0LmRldGFpbC5jaGlwSWQpXG4gICAgfSxcbiAgICBoYW5kbGVDaGlwUmVtb3ZhbChldnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVDaGlwUmVtb3ZhbChldnQuZGV0YWlsLmNoaXBJZClcbiAgICB9LFxuICAgIGhhbmRsZUNoaXBTZWxlY3Rpb24oZXZ0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlQ2hpcFNlbGVjdGlvbihcbiAgICAgICAgZXZ0LmRldGFpbC5jaGlwSWQsXG4gICAgICAgIGV2dC5kZXRhaWwuc2VsZWN0ZWRcbiAgICAgIClcbiAgICB9XG4gIH0sXG4gIHJlbmRlcihoKSB7XG4gICAgcmV0dXJuIGgoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6IHRoaXMuY2xhc3NlcyxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBbTURDQ2hpcEZvdW5kYXRpb24uc3RyaW5ncy5JTlRFUkFDVElPTl9FVkVOVF06IGV2dCA9PlxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGlwSW50ZXJhY3Rpb24oZXZ0KSxcbiAgICAgICAgICBbTURDQ2hpcEZvdW5kYXRpb24uc3RyaW5ncy5TRUxFQ1RJT05fRVZFTlRdOiBldnQgPT5cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hpcFNlbGVjdGlvbihldnQpLFxuICAgICAgICAgIFtNRENDaGlwRm91bmRhdGlvbi5zdHJpbmdzLlJFTU9WQUxfRVZFTlRdOiBldnQgPT5cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hpcFJlbW92YWwoZXZ0KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdFxuICAgIClcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBtZGNDaGlwIGZyb20gJy4vbWRjLWNoaXAudnVlJ1xuaW1wb3J0IG1kY0NoaXBTZXQgZnJvbSAnLi9tZGMtY2hpcC1zZXQudnVlJ1xuXG5leHBvcnQgeyBtZGNDaGlwLCBtZGNDaGlwU2V0IH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY0NoaXAsXG4gIG1kY0NoaXBTZXRcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJDdXN0b21FbGVtZW50IiwiZnVuY3Rpb25hbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwicHJvcHMiLCJpcyIsInRhZyIsImRhdGEiLCJjaGlsZHJlbiIsIkN1c3RvbUVsZW1lbnRNaXhpbiIsIkN1c3RvbUxpbmsiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImxpbmsiLCJPYmplY3QiLCJoIiwiZWxlbWVudCIsInBhcmVudCIsIiRyb3V0ZXIiLCIkcm9vdCIsIiRvcHRpb25zIiwib24iLCJjbGljayIsIm5hdGl2ZU9uIiwiQ3VzdG9tTGlua01peGluIiwidG8iLCJleGFjdCIsIkJvb2xlYW4iLCJhcHBlbmQiLCJyZXBsYWNlIiwiYWN0aXZlQ2xhc3MiLCJleGFjdEFjdGl2ZUNsYXNzIiwiY29tcHV0ZWQiLCJlbWl0Q3VzdG9tRXZlbnQiLCJlbCIsImV2dFR5cGUiLCJldnREYXRhIiwic2hvdWxkQnViYmxlIiwiZXZ0IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJzY29wZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiTURDRm91bmRhdGlvbiIsImFkYXB0ZXIiLCJhZGFwdGVyXyIsIk1EQ0NoaXBBZGFwdGVyIiwiY2xhc3NOYW1lIiwidGFyZ2V0Iiwic2VsZWN0ZWQiLCJwcm9wZXJ0eU5hbWUiLCJ2YWx1ZSIsInN0cmluZ3MiLCJFTlRSWV9BTklNQVRJT05fTkFNRSIsIklOVEVSQUNUSU9OX0VWRU5UIiwiU0VMRUNUSU9OX0VWRU5UIiwiVFJBSUxJTkdfSUNPTl9JTlRFUkFDVElPTl9FVkVOVCIsIlJFTU9WQUxfRVZFTlQiLCJDSEVDS01BUktfU0VMRUNUT1IiLCJMRUFESU5HX0lDT05fU0VMRUNUT1IiLCJUUkFJTElOR19JQ09OX1NFTEVDVE9SIiwiY3NzQ2xhc3NlcyIsIkNIRUNLTUFSSyIsIkNISVBfRVhJVCIsIkhJRERFTl9MRUFESU5HX0lDT04iLCJMRUFESU5HX0lDT04iLCJUUkFJTElOR19JQ09OIiwiU0VMRUNURUQiLCJNRENDaGlwRm91bmRhdGlvbiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsImFkZENsYXNzVG9MZWFkaW5nSWNvbiIsInJlbW92ZUNsYXNzRnJvbUxlYWRpbmdJY29uIiwiZXZlbnRUYXJnZXRIYXNDbGFzcyIsIm5vdGlmeUludGVyYWN0aW9uIiwibm90aWZ5U2VsZWN0aW9uIiwibm90aWZ5VHJhaWxpbmdJY29uSW50ZXJhY3Rpb24iLCJub3RpZnlSZW1vdmFsIiwiZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlIiwic2V0U3R5bGVQcm9wZXJ0eSIsImRlZmF1bHRBZGFwdGVyIiwic2hvdWxkUmVtb3ZlT25UcmFpbGluZ0ljb25DbGlja18iLCJzaG91bGRSZW1vdmUiLCJrZXlDb2RlIiwiY2hpcFdpZHRoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RvcFByb3BhZ2F0aW9uIiwiYmVnaW5FeGl0IiwiTURDQ29tcG9uZW50Iiwicm9vdCIsImZvdW5kYXRpb24iLCJ1bmRlZmluZWQiLCJyb290XyIsImFyZ3MiLCJpbml0aWFsaXplIiwiZm91bmRhdGlvbl8iLCJnZXREZWZhdWx0Rm91bmRhdGlvbiIsImluaXQiLCJpbml0aWFsU3luY1dpdGhET00iLCJFcnJvciIsImRlc3Ryb3kiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJNRENSaXBwbGVBZGFwdGVyIiwidmFyTmFtZSIsIlJPT1QiLCJVTkJPVU5ERUQiLCJCR19GT0NVU0VEIiwiRkdfQUNUSVZBVElPTiIsIkZHX0RFQUNUSVZBVElPTiIsIlZBUl9MRUZUIiwiVkFSX1RPUCIsIlZBUl9GR19TSVpFIiwiVkFSX0ZHX1NDQUxFIiwiVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCIsIlZBUl9GR19UUkFOU0xBVEVfRU5EIiwibnVtYmVycyIsIlBBRERJTkciLCJJTklUSUFMX09SSUdJTl9TQ0FMRSIsIkRFQUNUSVZBVElPTl9USU1FT1VUX01TIiwiRkdfREVBQ1RJVkFUSU9OX01TIiwiVEFQX0RFTEFZX01TIiwic3VwcG9ydHNDc3NWYXJpYWJsZXNfIiwic3VwcG9ydHNQYXNzaXZlXyIsImRldGVjdEVkZ2VQc2V1ZG9WYXJCdWciLCJ3aW5kb3dPYmoiLCJub2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY29tcHV0ZWRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJoYXNQc2V1ZG9WYXJCdWciLCJib3JkZXJUb3BTdHlsZSIsInJlbW92ZSIsInN1cHBvcnRzQ3NzVmFyaWFibGVzIiwiZm9yY2VSZWZyZXNoIiwic3VwcG9ydHNGdW5jdGlvblByZXNlbnQiLCJDU1MiLCJzdXBwb3J0cyIsImV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMiLCJ3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMiLCJhcHBseVBhc3NpdmUiLCJnbG9iYWxPYmoiLCJpc1N1cHBvcnRlZCIsInBhc3NpdmUiLCJlIiwiZ2V0TWF0Y2hlc1Byb3BlcnR5IiwiSFRNTEVsZW1lbnRQcm90b3R5cGUiLCJtYXRjaGVzTWV0aG9kcyIsIm1ldGhvZCIsImkiLCJsZW5ndGgiLCJtYXRjaGVzTWV0aG9kIiwiZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzIiwiZXYiLCJwYWdlT2Zmc2V0IiwiY2xpZW50UmVjdCIsIngiLCJ5IiwiZG9jdW1lbnRYIiwibGVmdCIsImRvY3VtZW50WSIsInRvcCIsIm5vcm1hbGl6ZWRYIiwibm9ybWFsaXplZFkiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTIiwiUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMiLCJhY3RpdmF0ZWRUYXJnZXRzIiwiTURDUmlwcGxlRm91bmRhdGlvbiIsImJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMiLCJpc1VuYm91bmRlZCIsImlzU3VyZmFjZUFjdGl2ZSIsImlzU3VyZmFjZURpc2FibGVkIiwiY29udGFpbnNFdmVudFRhcmdldCIsInJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwiZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJkZXJlZ2lzdGVyUmVzaXplSGFuZGxlciIsInVwZGF0ZUNzc1ZhcmlhYmxlIiwiY29tcHV0ZUJvdW5kaW5nUmVjdCIsImdldFdpbmRvd1BhZ2VPZmZzZXQiLCJsYXlvdXRGcmFtZV8iLCJmcmFtZV8iLCJ3aWR0aCIsImhlaWdodCIsImFjdGl2YXRpb25TdGF0ZV8iLCJkZWZhdWx0QWN0aXZhdGlvblN0YXRlXyIsImluaXRpYWxTaXplXyIsIm1heFJhZGl1c18iLCJhY3RpdmF0ZUhhbmRsZXJfIiwiYWN0aXZhdGVfIiwiZGVhY3RpdmF0ZUhhbmRsZXJfIiwiZGVhY3RpdmF0ZV8iLCJmb2N1c0hhbmRsZXJfIiwiaGFuZGxlRm9jdXMiLCJibHVySGFuZGxlcl8iLCJoYW5kbGVCbHVyIiwicmVzaXplSGFuZGxlcl8iLCJsYXlvdXQiLCJ1bmJvdW5kZWRDb29yZHNfIiwiZmdTY2FsZV8iLCJhY3RpdmF0aW9uVGltZXJfIiwiZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfIiwiYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyIsImFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyIsInJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XyIsInByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyIsImlzQWN0aXZhdGVkIiwiaGFzRGVhY3RpdmF0aW9uVVhSdW4iLCJ3YXNBY3RpdmF0ZWRCeVBvaW50ZXIiLCJ3YXNFbGVtZW50TWFkZUFjdGl2ZSIsImFjdGl2YXRpb25FdmVudCIsImlzUHJvZ3JhbW1hdGljIiwic3VwcG9ydHNQcmVzc1JpcHBsZSIsInN1cHBvcnRzUHJlc3NSaXBwbGVfIiwicmVnaXN0ZXJSb290SGFuZGxlcnNfIiwibGF5b3V0SW50ZXJuYWxfIiwiY2xlYXJUaW1lb3V0IiwicmVtb3ZlQ3NzVmFyc18iLCJkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXyIsImRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18iLCJmb3JFYWNoIiwia2V5cyIsImsiLCJpbmRleE9mIiwiYWN0aXZhdGlvblN0YXRlIiwicHJldmlvdXNBY3RpdmF0aW9uRXZlbnQiLCJpc1NhbWVJbnRlcmFjdGlvbiIsImhhc0FjdGl2YXRlZENoaWxkIiwic29tZSIsInJlc2V0QWN0aXZhdGlvblN0YXRlXyIsInB1c2giLCJyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyIsImNoZWNrRWxlbWVudE1hZGVBY3RpdmVfIiwiYW5pbWF0ZUFjdGl2YXRpb25fIiwiZXZlbnQiLCJ0cmFuc2xhdGVTdGFydCIsInRyYW5zbGF0ZUVuZCIsImdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18iLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18iLCJzZXRUaW1lb3V0IiwiYWN0aXZhdGlvbkhhc0VuZGVkIiwic3RhdGUiLCJhbmltYXRlRGVhY3RpdmF0aW9uXyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibWF4RGltIiwibWF4IiwiZ2V0Qm91bmRlZFJhZGl1cyIsImh5cG90ZW51c2UiLCJzcXJ0IiwicG93IiwidXBkYXRlTGF5b3V0Q3NzVmFyc18iLCJyb3VuZCIsInVuYm91bmRlZCIsIk1EQ1JpcHBsZSIsImRpc2FibGVkIiwidW5ib3VuZGVkXyIsInNldFVuYm91bmRlZCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImNyZWF0ZUFkYXB0ZXIiLCJkYXRhc2V0Iiwic2V0VW5ib3VuZGVkXyIsInJpcHBsZSIsImluc3RhbmNlIiwiTUFUQ0hFUyIsInV0aWwiLCJIVE1MRWxlbWVudCIsInByb3RvdHlwZSIsImNsYXNzTGlzdCIsImFkZCIsImNvbnRhaW5zIiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJSaXBwbGVDYXBhYmxlU3VyZmFjZSIsIlJpcHBsZUJhc2UiLCJyZWYiLCJfbWF0Y2hlcyIsIm9wdGlvbnMiLCIkZWwiLCIkc2V0IiwiY2xhc3NlcyIsIiRkZWxldGUiLCJzdHlsZXMiLCJSaXBwbGVNaXhpbiIsIm1vdW50ZWQiLCJiZWZvcmVEZXN0cm95Iiwibm9ybWFsaXplQ29tcG9uZW50IiwiY29tcGlsZWRUZW1wbGF0ZSIsImluamVjdFN0eWxlIiwiZGVmYXVsdEV4cG9ydCIsInNjb3BlSWQiLCJpc0Z1bmN0aW9uYWxUZW1wbGF0ZSIsIm1vZHVsZUlkZW50aWZpZXIiLCJpc1NoYWRvd01vZGUiLCJjcmVhdGVJbmplY3RvciIsImNyZWF0ZUluamVjdG9yU1NSIiwiY3JlYXRlSW5qZWN0b3JTaGFkb3ciLCJzdGF0aWNSZW5kZXJGbnMiLCJfY29tcGlsZWQiLCJfc2NvcGVJZCIsImhvb2siLCIkdm5vZGUiLCJzc3JDb250ZXh0IiwiX19WVUVfU1NSX0NPTlRFWFRfXyIsImNhbGwiLCJfcmVnaXN0ZXJlZENvbXBvbmVudHMiLCJfc3NyUmVnaXN0ZXIiLCJzaGFkb3dSb290Iiwib3JpZ2luYWxSZW5kZXIiLCJyZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24iLCJleGlzdGluZyIsImJlZm9yZUNyZWF0ZSIsImNvbmNhdCIsInNjcmlwdCIsIk1EQ0NoaXBTZXRBZGFwdGVyIiwiY2hpcElkIiwiQ0hJUF9TRUxFQ1RPUiIsIkNIT0lDRSIsIkZJTFRFUiIsIk1EQ0NoaXBTZXRGb3VuZGF0aW9uIiwicmVtb3ZlQ2hpcCIsInNldFNlbGVjdGVkIiwic2VsZWN0ZWRDaGlwSWRzXyIsImRlc2VsZWN0XyIsInNlbGVjdCIsInByZXZpb3VzbHlTZWxlY3RlZENoaXAiLCJpbmRleCIsInNwbGljZSIsInRvZ2dsZVNlbGVjdF8iLCJjaGlwSXNTZWxlY3RlZCIsIm1kY0NoaXAiLCJtZGNDaGlwU2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQU8sU0FBU0EsUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEI7SUFDL0I7SUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7SUFDQSxNQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7SUFDakNELElBQUFBLElBQUksR0FBR0MsTUFBTSxDQUFDQyxHQUFkO0lBQ0QsR0FGRCxNQUVPLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztJQUN4QztJQUNBSCxJQUFBQSxJQUFJLEdBQUdHLE1BQU0sQ0FBQ0QsR0FBZDtJQUNEOztJQUNELE1BQUlGLElBQUosRUFBVTtJQUNSQSxJQUFBQSxJQUFJLENBQUNJLEdBQUwsQ0FBU0wsTUFBVDtJQUNEO0lBQ0Y7O0lDWk0sU0FBU00sVUFBVCxDQUFvQkMsVUFBcEIsRUFBZ0M7SUFDckMsU0FBTztJQUNMQyxJ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
