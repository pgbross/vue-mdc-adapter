/**
* @module vue-mdc-adapterchips 0.19.4-beta
* @exports VueMDCChips
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.44.0","material-components-web":"^0.44.0"}
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
          element = context.parent.$root.$options.components['RouterLink'];
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
        /**
         * Returns whether the chip has a leading icon.
         * @return {boolean}
         */

      }, {
        key: "hasLeadingIcon",
        value: function hasLeadingIcon() {}
        /**
         * Returns the bounding client rect of the root element.
         * @return {!ClientRect}
         */

      }, {
        key: "getRootBoundingClientRect",
        value: function getRootBoundingClientRect() {}
        /**
         * Returns the bounding client rect of the checkmark element or null if it doesn't exist.
         * @return {?ClientRect}
         */

      }, {
        key: "getCheckmarkBoundingClientRect",
        value: function getCheckmarkBoundingClientRect() {}
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
              setStyleProperty: function setStyleProperty() {},
              hasLeadingIcon: function hasLeadingIcon() {},
              getRootBoundingClientRect: function getRootBoundingClientRect() {},
              getCheckmarkBoundingClientRect: function getCheckmarkBoundingClientRect() {}
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
        /** @return {!ClientRect} */

      }, {
        key: "getDimensions",
        value: function getDimensions() {
          // When a chip has a checkmark and not a leading icon, the bounding rect changes in size depending on the current
          // size of the checkmark.
          if (!this.adapter_.hasLeadingIcon() && this.adapter_.getCheckmarkBoundingClientRect() !== null) {
            var height = this.adapter_.getRootBoundingClientRect().height; // The checkmark's width is initially set to 0, so use the checkmark's height as a proxy since the checkmark
            // should always be square.

            var width = this.adapter_.getRootBoundingClientRect().width + this.adapter_.getCheckmarkBoundingClientRect().height;
            return (
              /** @type {!ClientRect} */
              {
                height: height,
                width: width
              }
            );
          } else {
            return this.adapter_.getRootBoundingClientRect();
          }
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
      

      
      normalizeComponent_1(
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
          },
          hasLeadingIcon: function hasLeadingIcon() {
            return !!_this.haveleadingIcon;
          },
          getRootBoundingClientRect: function getRootBoundingClientRect() {
            return _this.$el.getBoundingClientRect();
          },
          getCheckmarkBoundingClientRect: function getCheckmarkBoundingClientRect() {
            return _this.$refs.checkmarkEl ? _this.$refs.checkmarkEl.getBoundingClientRect() : null;
          }
        });
        this.foundation.init();
        this.mdcChipSet.chips.push(this);
        this.ripple = new RippleBase(this, {
          computeBoundingRect: function computeBoundingRect() {
            return _this.foundation.getDimensions();
          }
        });
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
            ? _c(
                "div",
                { ref: "checkmarkEl", staticClass: "mdc-chip__checkmark" },
                [
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
                ]
              )
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
      

      
      var mdcChip = normalizeComponent_1(
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
      

      
      var mdcChipSet = normalizeComponent_1(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuanMiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9hdXRvLWluaXQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvYmFzZS1wbHVnaW4uanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWVsZW1lbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWxpbmsuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvY3VzdG9tLWV2ZW50LmpzIiwiLi4vLi4vY29tcG9uZW50cy9iYXNlL3VuaXF1ZWlkLW1peGluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2NoaXBzL2NoaXAvYWRhcHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvY2hpcHMvY2hpcC9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2NoaXBzL2NoaXAvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUtYmFzZS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUudnVlIiwiLi4vLi4vY29tcG9uZW50cy9jaGlwcy9tZGMtY2hpcC52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2NoaXBzL2NoaXAtc2V0L2FkYXB0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2NoaXBzL2NoaXAtc2V0L2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvY2hpcHMvY2hpcC1zZXQvZm91bmRhdGlvbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvY2hpcHMvbWRjLWNoaXAtc2V0LnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvY2hpcHMvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL2NoaXBzL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHtcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIGNvbnRleHQucHJvcHMuaXMgfHwgY29udGV4dC5wcm9wcy50YWcgfHwgJ2RpdicsXG4gICAgICBjb250ZXh0LmRhdGEsXG4gICAgICBjb250ZXh0LmNoaWxkcmVuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50TWl4aW4gPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21FbGVtZW50XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDdXN0b21MaW5rID0ge1xuICBuYW1lOiAnY3VzdG9tLWxpbmsnLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIHRhZzogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdhJyB9LFxuICAgIGxpbms6IE9iamVjdFxuICB9LFxuICByZW5kZXIoaCwgY29udGV4dCkge1xuICAgIGxldCBlbGVtZW50XG4gICAgbGV0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LmRhdGEpXG5cbiAgICBpZiAoY29udGV4dC5wcm9wcy5saW5rICYmIGNvbnRleHQucGFyZW50LiRyb3V0ZXIpIHtcbiAgICAgIC8vIHJvdXRlci1saW5rIGNhc2VcbiAgICAgIGVsZW1lbnQgPSBjb250ZXh0LnBhcmVudC4kcm9vdC4kb3B0aW9ucy5jb21wb25lbnRzWydSb3V0ZXJMaW5rJ11cbiAgICAgIGRhdGEucHJvcHMgPSBPYmplY3QuYXNzaWduKHsgdGFnOiBjb250ZXh0LnByb3BzLnRhZyB9LCBjb250ZXh0LnByb3BzLmxpbmspXG4gICAgICBpZiAoZGF0YS5vbi5jbGljaykge1xuICAgICAgICBkYXRhLm5hdGl2ZU9uID0geyBjbGljazogZGF0YS5vbi5jbGljayB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVsZW1lbnQgZmFsbGJhY2tcbiAgICAgIGVsZW1lbnQgPSBjb250ZXh0LnByb3BzLnRhZ1xuICAgIH1cblxuICAgIHJldHVybiBoKGVsZW1lbnQsIGRhdGEsIGNvbnRleHQuY2hpbGRyZW4pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUxpbmtNaXhpbiA9IHtcbiAgcHJvcHM6IHtcbiAgICB0bzogW1N0cmluZywgT2JqZWN0XSxcbiAgICBleGFjdDogQm9vbGVhbixcbiAgICBhcHBlbmQ6IEJvb2xlYW4sXG4gICAgcmVwbGFjZTogQm9vbGVhbixcbiAgICBhY3RpdmVDbGFzczogU3RyaW5nLFxuICAgIGV4YWN0QWN0aXZlQ2xhc3M6IFN0cmluZ1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpbmsoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLnRvICYmIHtcbiAgICAgICAgICB0bzogdGhpcy50byxcbiAgICAgICAgICBleGFjdDogdGhpcy5leGFjdCxcbiAgICAgICAgICBhcHBlbmQ6IHRoaXMuYXBwZW5kLFxuICAgICAgICAgIHJlcGxhY2U6IHRoaXMucmVwbGFjZSxcbiAgICAgICAgICBhY3RpdmVDbGFzczogdGhpcy5hY3RpdmVDbGFzcyxcbiAgICAgICAgICBleGFjdEFjdGl2ZUNsYXNzOiB0aGlzLmV4YWN0QWN0aXZlQ2xhc3NcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUxpbmtcbiAgfVxufVxuIiwiLyogZ2xvYmFsIEN1c3RvbUV2ZW50ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Q3VzdG9tRXZlbnQoZWwsIGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gIGxldCBldnRcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICBidWJibGVzOiBzaG91bGRCdWJibGVcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKVxuICB9XG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBBXG4gKi9cbmNsYXNzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVte2Nzc0NsYXNzZXN9ICovXG4gIHN0YXRpYyBnZXQgY3NzQ2xhc3NlcygpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtzdHJpbmdzfSAqL1xuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bXtudW1iZXJzfSAqL1xuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIHshT2JqZWN0fSAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAvLyB2YWxpZGF0aW9uLlxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0E9fSBhZGFwdGVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyID0ge30pIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUF9ICovXG4gICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIENoaXAuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgQ2hpcCBpbnRvIHlvdXIgZnJhbWV3b3JrLiBTZWVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvYXV0aG9yaW5nLWNvbXBvbmVudHMubWRcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDQ2hpcEFkYXB0ZXIge1xuICAvKipcbiAgICogQWRkcyBhIGNsYXNzIHRvIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGNsYXNzIGZyb20gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHJvb3QgZWxlbWVudCBjb250YWlucyB0aGUgZ2l2ZW4gY2xhc3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogQWRkcyBhIGNsYXNzIHRvIHRoZSBsZWFkaW5nIGljb24gZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgYWRkQ2xhc3NUb0xlYWRpbmdJY29uKGNsYXNzTmFtZSkge31cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGNsYXNzIGZyb20gdGhlIGxlYWRpbmcgaWNvbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzc0Zyb21MZWFkaW5nSWNvbihjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0YXJnZXQgaGFzIGNsYXNzTmFtZSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcGFyYW0geyFFdmVudFRhcmdldH0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGV2ZW50VGFyZ2V0SGFzQ2xhc3ModGFyZ2V0LCBjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGEgY3VzdG9tIFwiTURDQ2hpcDppbnRlcmFjdGlvblwiIGV2ZW50IGRlbm90aW5nIHRoZSBjaGlwIGhhcyBiZWVuXG4gICAqIGludGVyYWN0ZWQgd2l0aCAodHlwaWNhbGx5IG9uIGNsaWNrIG9yIGtleWRvd24pLlxuICAgKi9cbiAgbm90aWZ5SW50ZXJhY3Rpb24oKSB7fVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhIGN1c3RvbSBcIk1EQ0NoaXA6c2VsZWN0aW9uXCIgZXZlbnQgZGVub3RpbmcgdGhlIGNoaXAgaGFzIGJlZW4gc2VsZWN0ZWQgb3IgZGVzZWxlY3RlZC5cbiAgICogQHBhcmFtIHtib29sZWFufSBzZWxlY3RlZFxuICAgKi9cbiAgbm90aWZ5U2VsZWN0aW9uKHNlbGVjdGVkKSB7fVxuXG4gIC8qKlxuICAgKiBFbWl0cyBhIGN1c3RvbSBcIk1EQ0NoaXA6dHJhaWxpbmdJY29uSW50ZXJhY3Rpb25cIiBldmVudCBkZW5vdGluZyB0aGUgdHJhaWxpbmcgaWNvbiBoYXMgYmVlblxuICAgKiBpbnRlcmFjdGVkIHdpdGggKHR5cGljYWxseSBvbiBjbGljayBvciBrZXlkb3duKS5cbiAgICovXG4gIG5vdGlmeVRyYWlsaW5nSWNvbkludGVyYWN0aW9uKCkge31cblxuICAvKipcbiAgICogRW1pdHMgYSBjdXN0b20gZXZlbnQgXCJNRENDaGlwOnJlbW92YWxcIiBkZW5vdGluZyB0aGUgY2hpcCB3aWxsIGJlIHJlbW92ZWQuXG4gICAqL1xuICBub3RpZnlSZW1vdmFsKCkge31cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29tcHV0ZWQgcHJvcGVydHkgdmFsdWUgb2YgdGhlIGdpdmVuIHN0eWxlIHByb3BlcnR5IG9uIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKHByb3BlcnR5TmFtZSkge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgcHJvcGVydHkgdmFsdWUgb2YgdGhlIGdpdmVuIHN0eWxlIHByb3BlcnR5IG9uIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXRTdHlsZVByb3BlcnR5KHByb3BlcnR5TmFtZSwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgY2hpcCBoYXMgYSBsZWFkaW5nIGljb24uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNMZWFkaW5nSWNvbigpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJvdW5kaW5nIGNsaWVudCByZWN0IG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEByZXR1cm4geyFDbGllbnRSZWN0fVxuICAgKi9cbiAgZ2V0Um9vdEJvdW5kaW5nQ2xpZW50UmVjdCgpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJvdW5kaW5nIGNsaWVudCByZWN0IG9mIHRoZSBjaGVja21hcmsgZWxlbWVudCBvciBudWxsIGlmIGl0IGRvZXNuJ3QgZXhpc3QuXG4gICAqIEByZXR1cm4gez9DbGllbnRSZWN0fVxuICAgKi9cbiAgZ2V0Q2hlY2ttYXJrQm91bmRpbmdDbGllbnRSZWN0KCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDQ2hpcEFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBzdHJpbmdzID0ge1xuICBFTlRSWV9BTklNQVRJT05fTkFNRTogJ21kYy1jaGlwLWVudHJ5JyxcbiAgSU5URVJBQ1RJT05fRVZFTlQ6ICdNRENDaGlwOmludGVyYWN0aW9uJyxcbiAgU0VMRUNUSU9OX0VWRU5UOiAnTURDQ2hpcDpzZWxlY3Rpb24nLFxuICBUUkFJTElOR19JQ09OX0lOVEVSQUNUSU9OX0VWRU5UOiAnTURDQ2hpcDp0cmFpbGluZ0ljb25JbnRlcmFjdGlvbicsXG4gIFJFTU9WQUxfRVZFTlQ6ICdNRENDaGlwOnJlbW92YWwnLFxuICBDSEVDS01BUktfU0VMRUNUT1I6ICcubWRjLWNoaXBfX2NoZWNrbWFyaycsXG4gIExFQURJTkdfSUNPTl9TRUxFQ1RPUjogJy5tZGMtY2hpcF9faWNvbi0tbGVhZGluZycsXG4gIFRSQUlMSU5HX0lDT05fU0VMRUNUT1I6ICcubWRjLWNoaXBfX2ljb24tLXRyYWlsaW5nJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3QgY3NzQ2xhc3NlcyA9IHtcbiAgQ0hFQ0tNQVJLOiAnbWRjLWNoaXBfX2NoZWNrbWFyaycsXG4gIENISVBfRVhJVDogJ21kYy1jaGlwLS1leGl0JyxcbiAgSElEREVOX0xFQURJTkdfSUNPTjogJ21kYy1jaGlwX19pY29uLS1sZWFkaW5nLWhpZGRlbicsXG4gIExFQURJTkdfSUNPTjogJ21kYy1jaGlwX19pY29uLS1sZWFkaW5nJyxcbiAgVFJBSUxJTkdfSUNPTjogJ21kYy1jaGlwX19pY29uLS10cmFpbGluZycsXG4gIFNFTEVDVEVEOiAnbWRjLWNoaXAtLXNlbGVjdGVkJyxcbn07XG5cbmV4cG9ydCB7c3RyaW5ncywgY3NzQ2xhc3Nlc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDQ2hpcEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbmltcG9ydCB7c3RyaW5ncywgY3NzQ2xhc3Nlc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ0NoaXBBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENDaGlwRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAc2VlIE1EQ0NoaXBBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ0NoaXBBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDQ2hpcEFkYXB0ZXJ9ICovICh7XG4gICAgICBhZGRDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDbGFzczogKCkgPT4ge30sXG4gICAgICBoYXNDbGFzczogKCkgPT4ge30sXG4gICAgICBhZGRDbGFzc1RvTGVhZGluZ0ljb246ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3NGcm9tTGVhZGluZ0ljb246ICgpID0+IHt9LFxuICAgICAgZXZlbnRUYXJnZXRIYXNDbGFzczogKCkgPT4ge30sXG4gICAgICBub3RpZnlJbnRlcmFjdGlvbjogKCkgPT4ge30sXG4gICAgICBub3RpZnlTZWxlY3Rpb246ICgpID0+IHt9LFxuICAgICAgbm90aWZ5VHJhaWxpbmdJY29uSW50ZXJhY3Rpb246ICgpID0+IHt9LFxuICAgICAgbm90aWZ5UmVtb3ZhbDogKCkgPT4ge30sXG4gICAgICBnZXRDb21wdXRlZFN0eWxlVmFsdWU6ICgpID0+IHt9LFxuICAgICAgc2V0U3R5bGVQcm9wZXJ0eTogKCkgPT4ge30sXG4gICAgICBoYXNMZWFkaW5nSWNvbjogKCkgPT4ge30sXG4gICAgICBnZXRSb290Qm91bmRpbmdDbGllbnRSZWN0OiAoKSA9PiB7fSxcbiAgICAgIGdldENoZWNrbWFya0JvdW5kaW5nQ2xpZW50UmVjdDogKCkgPT4ge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshTURDQ2hpcEFkYXB0ZXJ9IGFkYXB0ZXJcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ0NoaXBGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSk7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGEgdHJhaWxpbmcgaWNvbiBjbGljayBzaG91bGQgaW1tZWRpYXRlbHkgdHJpZ2dlciBleGl0L3JlbW92YWwgb2YgdGhlIGNoaXAuXG4gICAgICogQHByaXZhdGUge2Jvb2xlYW59XG4gICAgICogKi9cbiAgICB0aGlzLnNob3VsZFJlbW92ZU9uVHJhaWxpbmdJY29uQ2xpY2tfID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLlNFTEVDVEVEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkXG4gICAqL1xuICBzZXRTZWxlY3RlZChzZWxlY3RlZCkge1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLlNFTEVDVEVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLlNFTEVDVEVEKTtcbiAgICB9XG4gICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlTZWxlY3Rpb24oc2VsZWN0ZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBnZXRTaG91bGRSZW1vdmVPblRyYWlsaW5nSWNvbkNsaWNrKCkge1xuICAgIHJldHVybiB0aGlzLnNob3VsZFJlbW92ZU9uVHJhaWxpbmdJY29uQ2xpY2tfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkUmVtb3ZlXG4gICAqL1xuICBzZXRTaG91bGRSZW1vdmVPblRyYWlsaW5nSWNvbkNsaWNrKHNob3VsZFJlbW92ZSkge1xuICAgIHRoaXMuc2hvdWxkUmVtb3ZlT25UcmFpbGluZ0ljb25DbGlja18gPSBzaG91bGRSZW1vdmU7XG4gIH1cblxuICAvKiogQHJldHVybiB7IUNsaWVudFJlY3R9ICovXG4gIGdldERpbWVuc2lvbnMoKSB7XG4gICAgLy8gV2hlbiBhIGNoaXAgaGFzIGEgY2hlY2ttYXJrIGFuZCBub3QgYSBsZWFkaW5nIGljb24sIHRoZSBib3VuZGluZyByZWN0IGNoYW5nZXMgaW4gc2l6ZSBkZXBlbmRpbmcgb24gdGhlIGN1cnJlbnRcbiAgICAvLyBzaXplIG9mIHRoZSBjaGVja21hcmsuXG4gICAgaWYgKCF0aGlzLmFkYXB0ZXJfLmhhc0xlYWRpbmdJY29uKCkgJiYgdGhpcy5hZGFwdGVyXy5nZXRDaGVja21hcmtCb3VuZGluZ0NsaWVudFJlY3QoKSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5hZGFwdGVyXy5nZXRSb290Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgLy8gVGhlIGNoZWNrbWFyaydzIHdpZHRoIGlzIGluaXRpYWxseSBzZXQgdG8gMCwgc28gdXNlIHRoZSBjaGVja21hcmsncyBoZWlnaHQgYXMgYSBwcm94eSBzaW5jZSB0aGUgY2hlY2ttYXJrXG4gICAgICAvLyBzaG91bGQgYWx3YXlzIGJlIHNxdWFyZS5cbiAgICAgIGNvbnN0IHdpZHRoID1cbiAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmdldFJvb3RCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCArIHRoaXMuYWRhcHRlcl8uZ2V0Q2hlY2ttYXJrQm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgcmV0dXJuIC8qKiBAdHlwZSB7IUNsaWVudFJlY3R9ICovICh7aGVpZ2h0LCB3aWR0aH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5nZXRSb290Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJlZ2lucyB0aGUgZXhpdCBhbmltYXRpb24gd2hpY2ggbGVhZHMgdG8gcmVtb3ZhbCBvZiB0aGUgY2hpcC5cbiAgICovXG4gIGJlZ2luRXhpdCgpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQ0hJUF9FWElUKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGFuIGludGVyYWN0aW9uIGV2ZW50IG9uIHRoZSByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZUludGVyYWN0aW9uKGV2dCkge1xuICAgIGlmIChldnQudHlwZSA9PT0gJ2NsaWNrJyB8fCBldnQua2V5ID09PSAnRW50ZXInIHx8IGV2dC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5hZGFwdGVyXy5ub3RpZnlJbnRlcmFjdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgdHJhbnNpdGlvbiBlbmQgZXZlbnQgb24gdGhlIHJvb3QgZWxlbWVudC5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2dFxuICAgKi9cbiAgaGFuZGxlVHJhbnNpdGlvbkVuZChldnQpIHtcbiAgICAvLyBIYW5kbGUgdHJhbnNpdGlvbiBlbmQgZXZlbnQgb24gdGhlIGNoaXAgd2hlbiBpdCBpcyBhYm91dCB0byBiZSByZW1vdmVkLlxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmV2ZW50VGFyZ2V0SGFzQ2xhc3MoLyoqIEB0eXBlIHshRXZlbnRUYXJnZXR9ICovIChldnQudGFyZ2V0KSwgY3NzQ2xhc3Nlcy5DSElQX0VYSVQpKSB7XG4gICAgICBpZiAoZXZ0LnByb3BlcnR5TmFtZSA9PT0gJ3dpZHRoJykge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeVJlbW92YWwoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZ0LnByb3BlcnR5TmFtZSA9PT0gJ29wYWNpdHknKSB7XG4gICAgICAgIC8vIFNlZTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS91c2luZy1jc3MtdHJhbnNpdGlvbnMtYXV0by1kaW1lbnNpb25zLyNhcnRpY2xlLWhlYWRlci1pZC01XG4gICAgICAgIGNvbnN0IGNoaXBXaWR0aCA9IHRoaXMuYWRhcHRlcl8uZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKCd3aWR0aCcpO1xuXG4gICAgICAgIC8vIE9uIHRoZSBuZXh0IGZyYW1lIChvbmNlIHdlIGdldCB0aGUgY29tcHV0ZWQgd2lkdGgpLCBleHBsaWNpdGx5IHNldCB0aGUgY2hpcCdzIHdpZHRoXG4gICAgICAgIC8vIHRvIGl0cyBjdXJyZW50IHBpeGVsIHdpZHRoLCBzbyB3ZSBhcmVuJ3QgdHJhbnNpdGlvbmluZyBvdXQgb2YgJ2F1dG8nLlxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U3R5bGVQcm9wZXJ0eSgnd2lkdGgnLCBjaGlwV2lkdGgpO1xuXG4gICAgICAgICAgLy8gVG8gbWl0aWdhdGUgaml0dGVyLCBzdGFydCB0cmFuc2l0aW9uaW5nIHBhZGRpbmcgYW5kIG1hcmdpbiBiZWZvcmUgd2lkdGguXG4gICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZVByb3BlcnR5KCdwYWRkaW5nJywgJzAnKTtcbiAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFN0eWxlUHJvcGVydHkoJ21hcmdpbicsICcwJyk7XG5cbiAgICAgICAgICAvLyBPbiB0aGUgbmV4dCBmcmFtZSAob25jZSB3aWR0aCBpcyBleHBsaWNpdGx5IHNldCksIHRyYW5zaXRpb24gd2lkdGggdG8gMC5cbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRTdHlsZVByb3BlcnR5KCd3aWR0aCcsICcwJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBhIHRyYW5zaXRpb24gZW5kIGV2ZW50IG9uIHRoZSBsZWFkaW5nIGljb24gb3IgY2hlY2ttYXJrLCBzaW5jZSB0aGUgdHJhbnNpdGlvbiBlbmQgZXZlbnQgYnViYmxlcy5cbiAgICBpZiAoZXZ0LnByb3BlcnR5TmFtZSAhPT0gJ29wYWNpdHknKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmV2ZW50VGFyZ2V0SGFzQ2xhc3MoLyoqIEB0eXBlIHshRXZlbnRUYXJnZXR9ICovIChldnQudGFyZ2V0KSwgY3NzQ2xhc3Nlcy5MRUFESU5HX0lDT04pICYmXG4gICAgICAgIHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5TRUxFQ1RFRCkpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3NUb0xlYWRpbmdJY29uKGNzc0NsYXNzZXMuSElEREVOX0xFQURJTkdfSUNPTik7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFkYXB0ZXJfLmV2ZW50VGFyZ2V0SGFzQ2xhc3MoLyoqIEB0eXBlIHshRXZlbnRUYXJnZXR9ICovIChldnQudGFyZ2V0KSwgY3NzQ2xhc3Nlcy5DSEVDS01BUkspICYmXG4gICAgICAgICAgICAgICAhdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLlNFTEVDVEVEKSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzc0Zyb21MZWFkaW5nSWNvbihjc3NDbGFzc2VzLkhJRERFTl9MRUFESU5HX0lDT04pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGFuIGludGVyYWN0aW9uIGV2ZW50IG9uIHRoZSB0cmFpbGluZyBpY29uIGVsZW1lbnQuIFRoaXMgaXMgdXNlZCB0b1xuICAgKiBwcmV2ZW50IHRoZSByaXBwbGUgZnJvbSBhY3RpdmF0aW5nIG9uIGludGVyYWN0aW9uIHdpdGggdGhlIHRyYWlsaW5nIGljb24uXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldnRcbiAgICovXG4gIGhhbmRsZVRyYWlsaW5nSWNvbkludGVyYWN0aW9uKGV2dCkge1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoZXZ0LnR5cGUgPT09ICdjbGljaycgfHwgZXZ0LmtleSA9PT0gJ0VudGVyJyB8fCBldnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5VHJhaWxpbmdJY29uSW50ZXJhY3Rpb24oKTtcbiAgICAgIGlmICh0aGlzLnNob3VsZFJlbW92ZU9uVHJhaWxpbmdJY29uQ2xpY2tfKSB7XG4gICAgICAgIHRoaXMuYmVnaW5FeGl0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgZGV0YWlsOiB7XG4gKiAgICAgY2hpcElkOiBzdHJpbmcsXG4gKiAgIH0sXG4gKiAgIGJ1YmJsZXM6IGJvb2xlYW4sXG4gKiB9fVxuICovXG5sZXQgTURDQ2hpcEludGVyYWN0aW9uRXZlbnRUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGRldGFpbDoge1xuICogICAgIGNoaXBJZDogc3RyaW5nLFxuICogICAgIHNlbGVjdGVkOiBib29sZWFuLFxuICogICB9LFxuICogICBidWJibGVzOiBib29sZWFuLFxuICogfX1cbiAqL1xubGV0IE1EQ0NoaXBTZWxlY3Rpb25FdmVudFR5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgZGV0YWlsOiB7XG4gKiAgICAgY2hpcElkOiBzdHJpbmcsXG4gKiAgICAgcm9vdDogRWxlbWVudCxcbiAqICAgfSxcbiAqICAgYnViYmxlczogYm9vbGVhbixcbiAqIH19XG4gKi9cbmxldCBNRENDaGlwUmVtb3ZhbEV2ZW50VHlwZTtcblxuZXhwb3J0IHtNRENDaGlwRm91bmRhdGlvbiwgTURDQ2hpcEludGVyYWN0aW9uRXZlbnRUeXBlLCBNRENDaGlwU2VsZWN0aW9uRXZlbnRUeXBlLCBNRENDaGlwUmVtb3ZhbEV2ZW50VHlwZX07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuLyoqXG4gKiBAdGVtcGxhdGUgRlxuICovXG5jbGFzcyBNRENDb21wb25lbnQge1xuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcmV0dXJuIHshTURDQ29tcG9uZW50fVxuICAgKi9cbiAgc3RhdGljIGF0dGFjaFRvKHJvb3QpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHdoaWNoIGV4dGVuZCBNRENCYXNlIHNob3VsZCBwcm92aWRlIGFuIGF0dGFjaFRvKCkgbWV0aG9kIHRoYXQgdGFrZXMgYSByb290IGVsZW1lbnQgYW5kXG4gICAgLy8gcmV0dXJucyBhbiBpbnN0YW50aWF0ZWQgY29tcG9uZW50IHdpdGggaXRzIHJvb3Qgc2V0IHRvIHRoYXQgZWxlbWVudC4gQWxzbyBub3RlIHRoYXQgaW4gdGhlIGNhc2VzIG9mXG4gICAgLy8gc3ViY2xhc3NlcywgYW4gZXhwbGljaXQgZm91bmRhdGlvbiBjbGFzcyB3aWxsIG5vdCBoYXZlIHRvIGJlIHBhc3NlZCBpbjsgaXQgd2lsbCBzaW1wbHkgYmUgaW5pdGlhbGl6ZWRcbiAgICAvLyBmcm9tIGdldERlZmF1bHRGb3VuZGF0aW9uKCkuXG4gICAgcmV0dXJuIG5ldyBNRENDb21wb25lbnQocm9vdCwgbmV3IE1EQ0ZvdW5kYXRpb24oKSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcGFyYW0ge0Y9fSBmb3VuZGF0aW9uXG4gICAqIEBwYXJhbSB7Li4uP30gYXJnc1xuICAgKi9cbiAgY29uc3RydWN0b3Iocm9vdCwgZm91bmRhdGlvbiA9IHVuZGVmaW5lZCwgLi4uYXJncykge1xuICAgIC8qKiBAcHJvdGVjdGVkIHshRWxlbWVudH0gKi9cbiAgICB0aGlzLnJvb3RfID0gcm9vdDtcbiAgICB0aGlzLmluaXRpYWxpemUoLi4uYXJncyk7XG4gICAgLy8gTm90ZSB0aGF0IHdlIGluaXRpYWxpemUgZm91bmRhdGlvbiBoZXJlIGFuZCBub3Qgd2l0aGluIHRoZSBjb25zdHJ1Y3RvcidzIGRlZmF1bHQgcGFyYW0gc28gdGhhdFxuICAgIC8vIHRoaXMucm9vdF8gaXMgZGVmaW5lZCBhbmQgY2FuIGJlIHVzZWQgd2l0aGluIHRoZSBmb3VuZGF0aW9uIGNsYXNzLlxuICAgIC8qKiBAcHJvdGVjdGVkIHshRn0gKi9cbiAgICB0aGlzLmZvdW5kYXRpb25fID0gZm91bmRhdGlvbiA9PT0gdW5kZWZpbmVkID8gdGhpcy5nZXREZWZhdWx0Rm91bmRhdGlvbigpIDogZm91bmRhdGlvbjtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmluaXQoKTtcbiAgICB0aGlzLmluaXRpYWxTeW5jV2l0aERPTSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgvKiAuLi5hcmdzICovKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBjYW4gb3ZlcnJpZGUgdGhpcyB0byBkbyBhbnkgYWRkaXRpb25hbCBzZXR1cCB3b3JrIHRoYXQgd291bGQgYmUgY29uc2lkZXJlZCBwYXJ0IG9mIGFcbiAgICAvLyBcImNvbnN0cnVjdG9yXCIuIEVzc2VudGlhbGx5LCBpdCBpcyBhIGhvb2sgaW50byB0aGUgcGFyZW50IGNvbnN0cnVjdG9yIGJlZm9yZSB0aGUgZm91bmRhdGlvbiBpc1xuICAgIC8vIGluaXRpYWxpemVkLiBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgYmVzaWRlcyByb290IGFuZCBmb3VuZGF0aW9uIHdpbGwgYmUgcGFzc2VkIGluIGhlcmUuXG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7IUZ9IGZvdW5kYXRpb25cbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIC8vIFN1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkIGZvdW5kYXRpb24gY2xhc3MgZm9yIHRoZVxuICAgIC8vIGNvbXBvbmVudC5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSBnZXREZWZhdWx0Rm91bmRhdGlvbiB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkICcgK1xuICAgICAgJ2ZvdW5kYXRpb24gY2xhc3MnKTtcbiAgfVxuXG4gIGluaXRpYWxTeW5jV2l0aERPTSgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCBpZiB0aGV5IG5lZWQgdG8gcGVyZm9ybSB3b3JrIHRvIHN5bmNocm9uaXplIHdpdGggYSBob3N0IERPTVxuICAgIC8vIG9iamVjdC4gQW4gZXhhbXBsZSBvZiB0aGlzIHdvdWxkIGJlIGEgZm9ybSBjb250cm9sIHdyYXBwZXIgdGhhdCBuZWVkcyB0byBzeW5jaHJvbml6ZSBpdHMgaW50ZXJuYWwgc3RhdGVcbiAgICAvLyB0byBzb21lIHByb3BlcnR5IG9yIGF0dHJpYnV0ZSBvZiB0aGUgaG9zdCBET00uIFBsZWFzZSBub3RlOiB0aGlzIGlzICpub3QqIHRoZSBwbGFjZSB0byBwZXJmb3JtIERPTVxuICAgIC8vIHJlYWRzL3dyaXRlcyB0aGF0IHdvdWxkIGNhdXNlIGxheW91dCAvIHBhaW50LCBhcyB0aGlzIGlzIGNhbGxlZCBzeW5jaHJvbm91c2x5IGZyb20gd2l0aGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBtYXkgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJlbGVhc2UgYW55IHJlc291cmNlcyAvIGRlcmVnaXN0ZXIgYW55IGxpc3RlbmVycyB0aGV5IGhhdmVcbiAgICAvLyBhdHRhY2hlZC4gQW4gZXhhbXBsZSBvZiB0aGlzIG1pZ2h0IGJlIGRlcmVnaXN0ZXJpbmcgYSByZXNpemUgZXZlbnQgZnJvbSB0aGUgd2luZG93IG9iamVjdC5cbiAgICB0aGlzLmZvdW5kYXRpb25fLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIG1ldGhvZCB0byBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudC4gVGhpcyBpcyBtb3N0IHVzZWZ1bCB3aGVuXG4gICAqIGxpc3RlbmluZyBmb3IgY3VzdG9tIGV2ZW50cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGxpc3RlbihldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgbWV0aG9kIHRvIHJlbW92ZSBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgY29tcG9uZW50J3Mgcm9vdCBlbGVtZW50LiBUaGlzIGlzIG1vc3QgdXNlZnVsIHdoZW5cbiAgICogdW5saXN0ZW5pbmcgZm9yIGN1c3RvbSBldmVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICB1bmxpc3RlbihldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGEgY3Jvc3MtYnJvd3Nlci1jb21wYXRpYmxlIGN1c3RvbSBldmVudCBmcm9tIHRoZSBjb21wb25lbnQgcm9vdCBvZiB0aGUgZ2l2ZW4gdHlwZSxcbiAgICogd2l0aCB0aGUgZ2l2ZW4gZGF0YS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshT2JqZWN0fSBldnREYXRhXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IHNob3VsZEJ1YmJsZVxuICAgKi9cbiAgZW1pdChldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICAgIGxldCBldnQ7XG4gICAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2dFR5cGUsIHtcbiAgICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgICBidWJibGVzOiBzaG91bGRCdWJibGUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpO1xuICAgIH1cblxuICAgIHRoaXMucm9vdF8uZGlzcGF0Y2hFdmVudChldnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0NvbXBvbmVudDtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgUmlwcGxlLiBQcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIG1hbmFnaW5nXG4gKiAtIGNsYXNzZXNcbiAqIC0gZG9tXG4gKiAtIENTUyB2YXJpYWJsZXNcbiAqIC0gcG9zaXRpb25cbiAqIC0gZGltZW5zaW9uc1xuICogLSBzY3JvbGwgcG9zaXRpb25cbiAqIC0gZXZlbnQgaGFuZGxlcnNcbiAqIC0gdW5ib3VuZGVkLCBhY3RpdmUgYW5kIGRpc2FibGVkIHN0YXRlc1xuICpcbiAqIEFkZGl0aW9uYWxseSwgcHJvdmlkZXMgdHlwZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGFkYXB0ZXIgdG8gdGhlIENsb3N1cmVcbiAqIGNvbXBpbGVyLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGFkYXB0ZXIgZm9yIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZSB0byBkZWxlZ2F0ZSB1cGRhdGVzIHRvXG4gKiB0aGUgY29tcG9uZW50IGluIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZS4gU2VlIGFyY2hpdGVjdHVyZSBkb2N1bWVudGF0aW9uXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9jb2RlL2FyY2hpdGVjdHVyZS5tZFxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDUmlwcGxlQWRhcHRlciB7XG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBicm93c2VyU3VwcG9ydHNDc3NWYXJzKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNVbmJvdW5kZWQoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1N1cmZhY2VBY3RpdmUoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuICBpc1N1cmZhY2VEaXNhYmxlZCgpIHt9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHshRXZlbnRUYXJnZXR9IHRhcmdldCAqL1xuICBjb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dFR5cGVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIoZXZ0VHlwZSwgaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyUmVzaXplSGFuZGxlcihoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhck5hbWVcbiAgICogQHBhcmFtIHs/bnVtYmVyfHN0cmluZ30gdmFsdWVcbiAgICovXG4gIHVwZGF0ZUNzc1ZhcmlhYmxlKHZhck5hbWUsIHZhbHVlKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHshQ2xpZW50UmVjdH0gKi9cbiAgY29tcHV0ZUJvdW5kaW5nUmVjdCgpIHt9XG5cbiAgLyoqIEByZXR1cm4ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19ICovXG4gIGdldFdpbmRvd1BhZ2VPZmZzZXQoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVBZGFwdGVyO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmNvbnN0IGNzc0NsYXNzZXMgPSB7XG4gIC8vIFJpcHBsZSBpcyBhIHNwZWNpYWwgY2FzZSB3aGVyZSB0aGUgXCJyb290XCIgY29tcG9uZW50IGlzIHJlYWxseSBhIFwibWl4aW5cIiBvZiBzb3J0cyxcbiAgLy8gZ2l2ZW4gdGhhdCBpdCdzIGFuICd1cGdyYWRlJyB0byBhbiBleGlzdGluZyBjb21wb25lbnQuIFRoYXQgYmVpbmcgc2FpZCBpdCBpcyB0aGUgcm9vdFxuICAvLyBDU1MgY2xhc3MgdGhhdCBhbGwgb3RoZXIgQ1NTIGNsYXNzZXMgZGVyaXZlIGZyb20uXG4gIFJPT1Q6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkJyxcbiAgVU5CT1VOREVEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkJyxcbiAgQkdfRk9DVVNFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZCcsXG4gIEZHX0FDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb24nLFxuICBGR19ERUFDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbicsXG59O1xuXG5jb25zdCBzdHJpbmdzID0ge1xuICBWQVJfTEVGVDogJy0tbWRjLXJpcHBsZS1sZWZ0JyxcbiAgVkFSX1RPUDogJy0tbWRjLXJpcHBsZS10b3AnLFxuICBWQVJfRkdfU0laRTogJy0tbWRjLXJpcHBsZS1mZy1zaXplJyxcbiAgVkFSX0ZHX1NDQUxFOiAnLS1tZGMtcmlwcGxlLWZnLXNjYWxlJyxcbiAgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQnLFxuICBWQVJfRkdfVFJBTlNMQVRFX0VORDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kJyxcbn07XG5cbmNvbnN0IG51bWJlcnMgPSB7XG4gIFBBRERJTkc6IDEwLFxuICBJTklUSUFMX09SSUdJTl9TQ0FMRTogMC42LFxuICBERUFDVElWQVRJT05fVElNRU9VVF9NUzogMjI1LCAvLyBDb3JyZXNwb25kcyB0byAkbWRjLXJpcHBsZS10cmFuc2xhdGUtZHVyYXRpb24gKGkuZS4gYWN0aXZhdGlvbiBhbmltYXRpb24gZHVyYXRpb24pXG4gIEZHX0RFQUNUSVZBVElPTl9NUzogMTUwLCAvLyBDb3JyZXNwb25kcyB0byAkbWRjLXJpcHBsZS1mYWRlLW91dC1kdXJhdGlvbiAoaS5lLiBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIGR1cmF0aW9uKVxuICBUQVBfREVMQVlfTVM6IDMwMCwgLy8gRGVsYXkgYmV0d2VlbiB0b3VjaCBhbmQgc2ltdWxhdGVkIG1vdXNlIGV2ZW50cyBvbiB0b3VjaCBkZXZpY2VzXG59O1xuXG5leHBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIHN1cHBvcnRzQ3NzVmFyaWFibGVzIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvIGRldGVjdCBDU1MgY3VzdG9tIHZhcmlhYmxlIHN1cHBvcnQuXG4gKiBAcHJpdmF0ZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cbmxldCBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG5cbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGFwcGx5UGFzc2l2ZSB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3QgcGFzc2l2ZSBldmVudCBsaXN0ZW5lciBzdXBwb3J0LlxuICogQHByaXZhdGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5sZXQgc3VwcG9ydHNQYXNzaXZlXztcblxuLyoqXG4gKiBAcGFyYW0geyFXaW5kb3d9IHdpbmRvd09ialxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopIHtcbiAgLy8gRGV0ZWN0IHZlcnNpb25zIG9mIEVkZ2Ugd2l0aCBidWdneSB2YXIoKSBzdXBwb3J0XG4gIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTE0OTU0NDgvXG4gIGNvbnN0IGRvY3VtZW50ID0gd2luZG93T2JqLmRvY3VtZW50O1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vZGUuY2xhc3NOYW1lID0gJ21kYy1yaXBwbGUtc3VyZmFjZS0tdGVzdC1lZGdlLXZhci1idWcnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gIC8vIFRoZSBidWcgZXhpc3RzIGlmIDo6YmVmb3JlIHN0eWxlIGVuZHMgdXAgcHJvcGFnYXRpbmcgdG8gdGhlIHBhcmVudCBlbGVtZW50LlxuICAvLyBBZGRpdGlvbmFsbHksIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBudWxsIGluIGlmcmFtZXMgd2l0aCBkaXNwbGF5OiBcIm5vbmVcIiBpbiBGaXJlZm94LFxuICAvLyBidXQgRmlyZWZveCBpcyBrbm93biB0byBzdXBwb3J0IENTUyBjdXN0b20gcHJvcGVydGllcyBjb3JyZWN0bHkuXG4gIC8vIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3dPYmouZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgY29uc3QgaGFzUHNldWRvVmFyQnVnID0gY29tcHV0ZWRTdHlsZSAhPT0gbnVsbCAmJiBjb21wdXRlZFN0eWxlLmJvcmRlclRvcFN0eWxlID09PSAnc29saWQnO1xuICBub2RlLnJlbW92ZSgpO1xuICByZXR1cm4gaGFzUHNldWRvVmFyQnVnO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IVdpbmRvd30gd2luZG93T2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvd09iaiwgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgbGV0IHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICBpZiAodHlwZW9mIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9PT0gJ2Jvb2xlYW4nICYmICFmb3JjZVJlZnJlc2gpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG4gIH1cblxuICBjb25zdCBzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCA9IHdpbmRvd09iai5DU1MgJiYgdHlwZW9mIHdpbmRvd09iai5DU1Muc3VwcG9ydHMgPT09ICdmdW5jdGlvbic7XG4gIGlmICghc3VwcG9ydHNGdW5jdGlvblByZXNlbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzID0gd2luZG93T2JqLkNTUy5zdXBwb3J0cygnLS1jc3MtdmFycycsICd5ZXMnKTtcbiAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gIC8vIFNlZTogUkVBRE1FIHNlY3Rpb24gb24gU2FmYXJpXG4gIGNvbnN0IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyA9IChcbiAgICB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzKCcoLS1jc3MtdmFyczogeWVzKScpICYmXG4gICAgd2luZG93T2JqLkNTUy5zdXBwb3J0cygnY29sb3InLCAnIzAwMDAwMDAwJylcbiAgKTtcblxuICBpZiAoZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyB8fCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMpIHtcbiAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9ICFkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaik7XG4gIH0gZWxzZSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICghZm9yY2VSZWZyZXNoKSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXNfID0gc3VwcG9ydHNDc3NWYXJpYWJsZXM7XG4gIH1cbiAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xufVxuXG4vL1xuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmQgaWYgc28sIHVzZSB0aGVtLlxuICogQHBhcmFtIHshV2luZG93PX0gZ2xvYmFsT2JqXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBmb3JjZVJlZnJlc2hcbiAqIEByZXR1cm4ge2Jvb2xlYW58IUV2ZW50TGlzdGVuZXJPcHRpb25zfVxuICovXG5mdW5jdGlvbiBhcHBseVBhc3NpdmUoZ2xvYmFsT2JqID0gd2luZG93LCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICBpZiAoc3VwcG9ydHNQYXNzaXZlXyA9PT0gdW5kZWZpbmVkIHx8IGZvcmNlUmVmcmVzaCkge1xuICAgIGxldCBpc1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIHtnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgaXNTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gaXNTdXBwb3J0ZWQ7XG4gICAgICB9fSk7XG4gICAgfSBjYXRjaCAoZSkgeyB9XG5cbiAgICBzdXBwb3J0c1Bhc3NpdmVfID0gaXNTdXBwb3J0ZWQ7XG4gIH1cblxuICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlX1xuICAgID8gLyoqIEB0eXBlIHshRXZlbnRMaXN0ZW5lck9wdGlvbnN9ICovICh7cGFzc2l2ZTogdHJ1ZX0pXG4gICAgOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFPYmplY3R9IEhUTUxFbGVtZW50UHJvdG90eXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudFByb3RvdHlwZSkge1xuICAvKipcbiAgICogT3JkZXIgaXMgaW1wb3J0YW50IGJlY2F1c2Ugd2UgcmV0dXJuIHRoZSBmaXJzdCBleGlzdGluZyBtZXRob2Qgd2UgZmluZC5cbiAgICogRG8gbm90IGNoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIGl0ZW1zIGluIHRoZSBiZWxvdyBhcnJheS5cbiAgICovXG4gIGNvbnN0IG1hdGNoZXNNZXRob2RzID0gWydtYXRjaGVzJywgJ3dlYmtpdE1hdGNoZXNTZWxlY3RvcicsICdtc01hdGNoZXNTZWxlY3RvciddO1xuICBsZXQgbWV0aG9kID0gJ21hdGNoZXMnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZXNNZXRob2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbWF0Y2hlc01ldGhvZCA9IG1hdGNoZXNNZXRob2RzW2ldO1xuICAgIGlmIChtYXRjaGVzTWV0aG9kIGluIEhUTUxFbGVtZW50UHJvdG90eXBlKSB7XG4gICAgICBtZXRob2QgPSBtYXRjaGVzTWV0aG9kO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ldGhvZDtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFFdmVudH0gZXZcbiAqIEBwYXJhbSB7e3g6IG51bWJlciwgeTogbnVtYmVyfX0gcGFnZU9mZnNldFxuICogQHBhcmFtIHshQ2xpZW50UmVjdH0gY2xpZW50UmVjdFxuICogQHJldHVybiB7e3g6IG51bWJlciwgeTogbnVtYmVyfX1cbiAqL1xuZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGV2LCBwYWdlT2Zmc2V0LCBjbGllbnRSZWN0KSB7XG4gIGNvbnN0IHt4LCB5fSA9IHBhZ2VPZmZzZXQ7XG4gIGNvbnN0IGRvY3VtZW50WCA9IHggKyBjbGllbnRSZWN0LmxlZnQ7XG4gIGNvbnN0IGRvY3VtZW50WSA9IHkgKyBjbGllbnRSZWN0LnRvcDtcblxuICBsZXQgbm9ybWFsaXplZFg7XG4gIGxldCBub3JtYWxpemVkWTtcbiAgLy8gRGV0ZXJtaW5lIHRvdWNoIHBvaW50IHJlbGF0aXZlIHRvIHRoZSByaXBwbGUgY29udGFpbmVyLlxuICBpZiAoZXYudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgZXYgPSAvKiogQHR5cGUgeyFUb3VjaEV2ZW50fSAqLyAoZXYpO1xuICAgIG5vcm1hbGl6ZWRYID0gZXYuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBkb2N1bWVudFg7XG4gICAgbm9ybWFsaXplZFkgPSBldi5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGRvY3VtZW50WTtcbiAgfSBlbHNlIHtcbiAgICBldiA9IC8qKiBAdHlwZSB7IU1vdXNlRXZlbnR9ICovIChldik7XG4gICAgbm9ybWFsaXplZFggPSBldi5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICBub3JtYWxpemVkWSA9IGV2LnBhZ2VZIC0gZG9jdW1lbnRZO1xuICB9XG5cbiAgcmV0dXJuIHt4OiBub3JtYWxpemVkWCwgeTogbm9ybWFsaXplZFl9O1xufVxuXG5leHBvcnQge3N1cHBvcnRzQ3NzVmFyaWFibGVzLCBhcHBseVBhc3NpdmUsIGdldE1hdGNoZXNQcm9wZXJ0eSwgZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENSaXBwbGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQge2Nzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7Z2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGlzQWN0aXZhdGVkOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgYWN0aXZhdGlvbkV2ZW50OiAoIUV2ZW50fHVuZGVmaW5lZCksXG4gKiAgIGlzUHJvZ3JhbW1hdGljOiAoYm9vbGVhbnx1bmRlZmluZWQpXG4gKiB9fVxuICovXG5sZXQgQWN0aXZhdGlvblN0YXRlVHlwZTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBhY3RpdmF0ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBkZWFjdGl2YXRlOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGZvY3VzOiAoc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGJsdXI6IChzdHJpbmd8dW5kZWZpbmVkKVxuICogfX1cbiAqL1xubGV0IExpc3RlbmVySW5mb1R5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgYWN0aXZhdGU6IGZ1bmN0aW9uKCFFdmVudCksXG4gKiAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uKCFFdmVudD0pLFxuICogICBmb2N1czogZnVuY3Rpb24oKSxcbiAqICAgYmx1cjogZnVuY3Rpb24oKVxuICogfX1cbiAqL1xubGV0IExpc3RlbmVyc1R5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgeDogbnVtYmVyLFxuICogICB5OiBudW1iZXJcbiAqIH19XG4gKi9cbmxldCBQb2ludFR5cGU7XG5cbi8vIEFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gdGhlIHJvb3QgZWxlbWVudCBvZiBlYWNoIGluc3RhbmNlIGZvciBhY3RpdmF0aW9uXG5jb25zdCBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gWyd0b3VjaHN0YXJ0JywgJ3BvaW50ZXJkb3duJywgJ21vdXNlZG93bicsICdrZXlkb3duJ107XG5cbi8vIERlYWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiBkb2N1bWVudEVsZW1lbnQgd2hlbiBhIHBvaW50ZXItcmVsYXRlZCBkb3duIGV2ZW50IG9jY3Vyc1xuY29uc3QgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbJ3RvdWNoZW5kJywgJ3BvaW50ZXJ1cCcsICdtb3VzZXVwJywgJ2NvbnRleHRtZW51J107XG5cbi8vIFRyYWNrcyBhY3RpdmF0aW9ucyB0aGF0IGhhdmUgb2NjdXJyZWQgb24gdGhlIGN1cnJlbnQgZnJhbWUsIHRvIGF2b2lkIHNpbXVsdGFuZW91cyBuZXN0ZWQgYWN0aXZhdGlvbnNcbi8qKiBAdHlwZSB7IUFycmF5PCFFdmVudFRhcmdldD59ICovXG5sZXQgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuXG4vKipcbiAqIEBleHRlbmRzIHtNRENGb3VuZGF0aW9uPCFNRENSaXBwbGVBZGFwdGVyPn1cbiAqL1xuY2xhc3MgTURDUmlwcGxlRm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0cmluZ3MoKSB7XG4gICAgcmV0dXJuIHN0cmluZ3M7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG51bWJlcnMoKSB7XG4gICAgcmV0dXJuIG51bWJlcnM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiAvKiBib29sZWFuIC0gY2FjaGVkICovIHt9LFxuICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4gLyogYm9vbGVhbiAqLyB7fSxcbiAgICAgIGFkZENsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgcmVtb3ZlQ2xhc3M6ICgvKiBjbGFzc05hbWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiAoLyogdGFyZ2V0OiAhRXZlbnRUYXJnZXQgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6ICgvKiBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKC8qIHZhck5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyAqLykgPT4ge30sXG4gICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiAvKiBDbGllbnRSZWN0ICovIHt9LFxuICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4gLyoge3g6IG51bWJlciwgeTogbnVtYmVyfSAqLyB7fSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDUmlwcGxlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHshQ2xpZW50UmVjdH0gKi9cbiAgICB0aGlzLmZyYW1lXyA9IC8qKiBAdHlwZSB7IUNsaWVudFJlY3R9ICovICh7d2lkdGg6IDAsIGhlaWdodDogMH0pO1xuXG4gICAgLyoqIEBwcml2YXRlIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmluaXRpYWxTaXplXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLm1heFJhZGl1c18gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQpfSAqL1xuICAgIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyA9IChlKSA9PiB0aGlzLmFjdGl2YXRlXyhlKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmRlYWN0aXZhdGVfKCk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudD0pfSAqL1xuICAgIHRoaXMuZm9jdXNIYW5kbGVyXyA9ICgpID0+IHRoaXMuaGFuZGxlRm9jdXMoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50PSl9ICovXG4gICAgdGhpcy5ibHVySGFuZGxlcl8gPSAoKSA9PiB0aGlzLmhhbmRsZUJsdXIoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUZ1bmN0aW9ufSAqL1xuICAgIHRoaXMucmVzaXplSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmxheW91dCgpO1xuXG4gICAgLyoqIEBwcml2YXRlIHt7bGVmdDogbnVtYmVyLCB0b3A6bnVtYmVyfX0gKi9cbiAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgIH07XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmZnU2NhbGVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IHRydWU7XG4gICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgIH07XG5cbiAgICAvKiogQHByaXZhdGUgeyFFdmVudHx1bmRlZmluZWR9ICovXG4gICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gIH1cblxuICAvKipcbiAgICogV2UgY29tcHV0ZSB0aGlzIHByb3BlcnR5IHNvIHRoYXQgd2UgYXJlIG5vdCBxdWVyeWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2xpZW50XG4gICAqIHVudGlsIHRoZSBwb2ludCBpbiB0aW1lIHdoZXJlIHRoZSBmb3VuZGF0aW9uIHJlcXVlc3RzIGl0LiBUaGlzIHByZXZlbnRzIHNjZW5hcmlvcyB3aGVyZVxuICAgKiBjbGllbnQtc2lkZSBmZWF0dXJlLWRldGVjdGlvbiBtYXkgaGFwcGVuIHRvbyBlYXJseSwgc3VjaCBhcyB3aGVuIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXJcbiAgICogYW5kIHRoZW4gaW5pdGlhbGl6ZWQgYXQgbW91bnQgdGltZSBvbiB0aGUgY2xpZW50LlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFBY3RpdmF0aW9uU3RhdGVUeXBlfVxuICAgKi9cbiAgZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQWN0aXZhdGVkOiBmYWxzZSxcbiAgICAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiBmYWxzZSxcbiAgICAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogZmFsc2UsXG4gICAgICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogZmFsc2UsXG4gICAgICBhY3RpdmF0aW9uRXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgIGlzUHJvZ3JhbW1hdGljOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBpbml0KCkge1xuICAgIGNvbnN0IHN1cHBvcnRzUHJlc3NSaXBwbGUgPSB0aGlzLnN1cHBvcnRzUHJlc3NSaXBwbGVfKCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKTtcblxuICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICBjb25zdCB7Uk9PVCwgVU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoUk9PVCk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZXMgbmVlZCBsYXlvdXQgbG9naWMgYXBwbGllZCBpbW1lZGlhdGVseSB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGJvdGggc2hhZGUgYW5kIHJpcHBsZVxuICAgICAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmF0aW9uVGltZXJfKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1JPT1QsIFVOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFJPT1QpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIHRoaXMucmVtb3ZlQ3NzVmFyc18oKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKTtcbiAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN1cHBvcnRzUHJlc3NSaXBwbGUgUGFzc2VkIGZyb20gaW5pdCB0byBzYXZlIGEgcmVkdW5kYW50IGZ1bmN0aW9uIGNhbGxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnR9IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGUpIHtcbiAgICBpZiAoZS50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGVyZWdpc3RlclJvb3RIYW5kbGVyc18oKSB7XG4gICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9KTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBkZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJlbW92ZUNzc1ZhcnNfKCkge1xuICAgIGNvbnN0IHtzdHJpbmdzfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4gICAgT2JqZWN0LmtleXMoc3RyaW5ncykuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgaWYgKGsuaW5kZXhPZignVkFSXycpID09PSAwKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoc3RyaW5nc1trXSwgbnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnQ9fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhY3RpdmF0ZV8oZSkge1xuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZURpc2FibGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEF2b2lkIHJlYWN0aW5nIHRvIGZvbGxvdy1vbiBldmVudHMgZmlyZWQgYnkgdG91Y2ggZGV2aWNlIGFmdGVyIGFuIGFscmVhZHktcHJvY2Vzc2VkIHVzZXIgaW50ZXJhY3Rpb25cbiAgICBjb25zdCBwcmV2aW91c0FjdGl2YXRpb25FdmVudCA9IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICAgIGNvbnN0IGlzU2FtZUludGVyYWN0aW9uID0gcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgJiYgZSAhPT0gdW5kZWZpbmVkICYmIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50LnR5cGUgIT09IGUudHlwZTtcbiAgICBpZiAoaXNTYW1lSW50ZXJhY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQgPSB0cnVlO1xuICAgIGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA9IGUgPT09IHVuZGVmaW5lZDtcbiAgICBhY3RpdmF0aW9uU3RhdGUuYWN0aXZhdGlvbkV2ZW50ID0gZTtcbiAgICBhY3RpdmF0aW9uU3RhdGUud2FzQWN0aXZhdGVkQnlQb2ludGVyID0gYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID8gZmFsc2UgOiBlICE9PSB1bmRlZmluZWQgJiYgKFxuICAgICAgZS50eXBlID09PSAnbW91c2Vkb3duJyB8fCBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICdwb2ludGVyZG93bidcbiAgICApO1xuXG4gICAgY29uc3QgaGFzQWN0aXZhdGVkQ2hpbGQgPSBlICE9PSB1bmRlZmluZWQgJiYgYWN0aXZhdGVkVGFyZ2V0cy5sZW5ndGggPiAwICYmIGFjdGl2YXRlZFRhcmdldHMuc29tZShcbiAgICAgICh0YXJnZXQpID0+IHRoaXMuYWRhcHRlcl8uY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpKTtcbiAgICBpZiAoaGFzQWN0aXZhdGVkQ2hpbGQpIHtcbiAgICAgIC8vIEltbWVkaWF0ZWx5IHJlc2V0IGFjdGl2YXRpb24gc3RhdGUsIHdoaWxlIHByZXNlcnZpbmcgbG9naWMgdGhhdCBwcmV2ZW50cyB0b3VjaCBmb2xsb3ctb24gZXZlbnRzXG4gICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFjdGl2YXRlZFRhcmdldHMucHVzaCgvKiogQHR5cGUgeyFFdmVudFRhcmdldH0gKi8gKGUudGFyZ2V0KSk7XG4gICAgICB0aGlzLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGUpO1xuICAgIH1cblxuICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSk7XG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgLy8gUmVzZXQgYXJyYXkgb24gbmV4dCBmcmFtZSBhZnRlciB0aGUgY3VycmVudCBldmVudCBoYXMgaGFkIGEgY2hhbmNlIHRvIGJ1YmJsZSB0byBwcmV2ZW50IGFuY2VzdG9yIHJpcHBsZXNcbiAgICAgIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcblxuICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgJiYgZSAhPT0gdW5kZWZpbmVkICYmIChlLmtleSA9PT0gJyAnIHx8IGUua2V5Q29kZSA9PT0gMzIpKSB7XG4gICAgICAgIC8vIElmIHNwYWNlIHdhcyBwcmVzc2VkLCB0cnkgYWdhaW4gd2l0aGluIGFuIHJBRiBjYWxsIHRvIGRldGVjdCA6YWN0aXZlLCBiZWNhdXNlIGRpZmZlcmVudCBVQXMgcmVwb3J0XG4gICAgICAgIC8vIGFjdGl2ZSBzdGF0ZXMgaW5jb25zaXN0ZW50bHkgd2hlbiB0aGV5J3JlIGNhbGxlZCB3aXRoaW4gZXZlbnQgaGFuZGxpbmcgY29kZTpcbiAgICAgICAgLy8gLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02MzU5NzFcbiAgICAgICAgLy8gLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjkzNzQxXG4gICAgICAgIC8vIFdlIHRyeSBmaXJzdCBvdXRzaWRlIHJBRiB0byBzdXBwb3J0IEVkZ2UsIHdoaWNoIGRvZXMgbm90IGV4aGliaXQgdGhpcyBwcm9ibGVtLCBidXQgd2lsbCBjcmFzaCBpZiBhIENTU1xuICAgICAgICAvLyB2YXJpYWJsZSBpcyBzZXQgd2l0aGluIGEgckFGIGNhbGxiYWNrIGZvciBhIHN1Ym1pdCBidXR0b24gaW50ZXJhY3Rpb24gKCMyMjQxKS5cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgLy8gUmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSBpbW1lZGlhdGVseSBpZiBlbGVtZW50IHdhcyBub3QgbWFkZSBhY3RpdmUuXG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXyA9IHRoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpIHtcbiAgICByZXR1cm4gKGUgIT09IHVuZGVmaW5lZCAmJiBlLnR5cGUgPT09ICdrZXlkb3duJykgPyB0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZUFjdGl2ZSgpIDogdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFdmVudD19IGV2ZW50IE9wdGlvbmFsIGV2ZW50IGNvbnRhaW5pbmcgcG9zaXRpb24gaW5mb3JtYXRpb24uXG4gICAqL1xuICBhY3RpdmF0ZShldmVudCkge1xuICAgIHRoaXMuYWN0aXZhdGVfKGV2ZW50KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBhbmltYXRlQWN0aXZhdGlvbl8oKSB7XG4gICAgY29uc3Qge1ZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIFZBUl9GR19UUkFOU0xBVEVfRU5EfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcbiAgICBjb25zdCB7RkdfREVBQ1RJVkFUSU9OLCBGR19BQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBjb25zdCB7REVBQ1RJVkFUSU9OX1RJTUVPVVRfTVN9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzO1xuXG4gICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcblxuICAgIGxldCB0cmFuc2xhdGVTdGFydCA9ICcnO1xuICAgIGxldCB0cmFuc2xhdGVFbmQgPSAnJztcblxuICAgIGlmICghdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICBjb25zdCB7c3RhcnRQb2ludCwgZW5kUG9pbnR9ID0gdGhpcy5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCk7XG4gICAgICB0cmFuc2xhdGVTdGFydCA9IGAke3N0YXJ0UG9pbnQueH1weCwgJHtzdGFydFBvaW50Lnl9cHhgO1xuICAgICAgdHJhbnNsYXRlRW5kID0gYCR7ZW5kUG9pbnQueH1weCwgJHtlbmRQb2ludC55fXB4YDtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIHRyYW5zbGF0ZVN0YXJ0KTtcbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfRU5ELCB0cmFuc2xhdGVFbmQpO1xuICAgIC8vIENhbmNlbCBhbnkgb25nb2luZyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBhbmltYXRpb25zXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICB0aGlzLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcblxuICAgIC8vIEZvcmNlIGxheW91dCBpbiBvcmRlciB0byByZS10cmlnZ2VyIHRoZSBhbmltYXRpb24uXG4gICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfKCksIERFQUNUSVZBVElPTl9USU1FT1VUX01TKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJuIHt7c3RhcnRQb2ludDogUG9pbnRUeXBlLCBlbmRQb2ludDogUG9pbnRUeXBlfX1cbiAgICovXG4gIGdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKSB7XG4gICAgY29uc3Qge2FjdGl2YXRpb25FdmVudCwgd2FzQWN0aXZhdGVkQnlQb2ludGVyfSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcblxuICAgIGxldCBzdGFydFBvaW50O1xuICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIpIHtcbiAgICAgIHN0YXJ0UG9pbnQgPSBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoXG4gICAgICAgIC8qKiBAdHlwZSB7IUV2ZW50fSAqLyAoYWN0aXZhdGlvbkV2ZW50KSxcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5nZXRXaW5kb3dQYWdlT2Zmc2V0KCksIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICB4OiB0aGlzLmZyYW1lXy53aWR0aCAvIDIsXG4gICAgICAgIHk6IHRoaXMuZnJhbWVfLmhlaWdodCAvIDIsXG4gICAgICB9O1xuICAgIH1cbiAgICAvLyBDZW50ZXIgdGhlIGVsZW1lbnQgYXJvdW5kIHRoZSBzdGFydCBwb2ludC5cbiAgICBzdGFydFBvaW50ID0ge1xuICAgICAgeDogc3RhcnRQb2ludC54IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICB5OiBzdGFydFBvaW50LnkgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICB9O1xuXG4gICAgY29uc3QgZW5kUG9pbnQgPSB7XG4gICAgICB4OiAodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgeTogKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgfTtcblxuICAgIHJldHVybiB7c3RhcnRQb2ludCwgZW5kUG9pbnR9O1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpIHtcbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYm90aCB3aGVuIGEgcG9pbnRpbmcgZGV2aWNlIGlzIHJlbGVhc2VkLCBhbmQgd2hlbiB0aGUgYWN0aXZhdGlvbiBhbmltYXRpb24gZW5kcy5cbiAgICAvLyBUaGUgZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBzaG91bGQgb25seSBydW4gYWZ0ZXIgYm90aCBvZiB0aG9zZSBvY2N1ci5cbiAgICBjb25zdCB7RkdfREVBQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBjb25zdCB7aGFzRGVhY3RpdmF0aW9uVVhSdW4sIGlzQWN0aXZhdGVkfSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICBjb25zdCBhY3RpdmF0aW9uSGFzRW5kZWQgPSBoYXNEZWFjdGl2YXRpb25VWFJ1biB8fCAhaXNBY3RpdmF0ZWQ7XG5cbiAgICBpZiAoYWN0aXZhdGlvbkhhc0VuZGVkICYmIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXykge1xuICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgIH0sIG51bWJlcnMuRkdfREVBQ1RJVkFUSU9OX01TKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgcm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCkge1xuICAgIGNvbnN0IHtGR19BQ1RJVkFUSU9OfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICB9XG5cbiAgcmVzZXRBY3RpdmF0aW9uU3RhdGVfKCkge1xuICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmFjdGl2YXRpb25FdmVudDtcbiAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgLy8gVG91Y2ggZGV2aWNlcyBtYXkgZmlyZSBhZGRpdGlvbmFsIGV2ZW50cyBmb3IgdGhlIHNhbWUgaW50ZXJhY3Rpb24gd2l0aGluIGEgc2hvcnQgdGltZS5cbiAgICAvLyBTdG9yZSB0aGUgcHJldmlvdXMgZXZlbnQgdW50aWwgaXQncyBzYWZlIHRvIGFzc3VtZSB0aGF0IHN1YnNlcXVlbnQgZXZlbnRzIGFyZSBmb3IgbmV3IGludGVyYWN0aW9ucy5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdW5kZWZpbmVkLCBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuVEFQX0RFTEFZX01TKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZGVhY3RpdmF0ZV8oKSB7XG4gICAgY29uc3QgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBzY2VuYXJpb3Mgc3VjaCBhcyB3aGVuIHlvdSBoYXZlIGEga2V5dXAgZXZlbnQgdGhhdCBibHVycyB0aGUgZWxlbWVudC5cbiAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlID0gLyoqIEB0eXBlIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gKi8gKE9iamVjdC5hc3NpZ24oe30sIGFjdGl2YXRpb25TdGF0ZSkpO1xuXG4gICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYykge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpKTtcbiAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmhhc0RlYWN0aXZhdGlvblVYUnVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltYXRlRGVhY3RpdmF0aW9uXyhzdGF0ZSk7XG4gICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZGVhY3RpdmF0ZV8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFBY3RpdmF0aW9uU3RhdGVUeXBlfSBvcHRpb25zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhbmltYXRlRGVhY3RpdmF0aW9uXyh7d2FzQWN0aXZhdGVkQnlQb2ludGVyLCB3YXNFbGVtZW50TWFkZUFjdGl2ZX0pIHtcbiAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyIHx8IHdhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgIH1cbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICB9XG4gICAgdGhpcy5sYXlvdXRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBsYXlvdXRJbnRlcm5hbF8oKSB7XG4gICAgdGhpcy5mcmFtZV8gPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICBjb25zdCBtYXhEaW0gPSBNYXRoLm1heCh0aGlzLmZyYW1lXy5oZWlnaHQsIHRoaXMuZnJhbWVfLndpZHRoKTtcblxuICAgIC8vIFN1cmZhY2UgZGlhbWV0ZXIgaXMgdHJlYXRlZCBkaWZmZXJlbnRseSBmb3IgdW5ib3VuZGVkIHZzLiBib3VuZGVkIHJpcHBsZXMuXG4gICAgLy8gVW5ib3VuZGVkIHJpcHBsZSBkaWFtZXRlciBpcyBjYWxjdWxhdGVkIHNtYWxsZXIgc2luY2UgdGhlIHN1cmZhY2UgaXMgZXhwZWN0ZWQgdG8gYWxyZWFkeSBiZSBwYWRkZWQgYXBwcm9wcmlhdGVseVxuICAgIC8vIHRvIGV4dGVuZCB0aGUgaGl0Ym94LCBhbmQgdGhlIHJpcHBsZSBpcyBleHBlY3RlZCB0byBtZWV0IHRoZSBlZGdlcyBvZiB0aGUgcGFkZGVkIGhpdGJveCAod2hpY2ggaXMgdHlwaWNhbGx5XG4gICAgLy8gc3F1YXJlKS4gQm91bmRlZCByaXBwbGVzLCBvbiB0aGUgb3RoZXIgaGFuZCwgYXJlIGZ1bGx5IGV4cGVjdGVkIHRvIGV4cGFuZCBiZXlvbmQgdGhlIHN1cmZhY2UncyBsb25nZXN0IGRpYW1ldGVyXG4gICAgLy8gKGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGRpYWdvbmFsIHBsdXMgYSBjb25zdGFudCBwYWRkaW5nKSwgYW5kIGFyZSBjbGlwcGVkIGF0IHRoZSBzdXJmYWNlJ3MgYm9yZGVyIHZpYVxuICAgIC8vIGBvdmVyZmxvdzogaGlkZGVuYC5cbiAgICBjb25zdCBnZXRCb3VuZGVkUmFkaXVzID0gKCkgPT4ge1xuICAgICAgY29uc3QgaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdyh0aGlzLmZyYW1lXy53aWR0aCwgMikgKyBNYXRoLnBvdyh0aGlzLmZyYW1lXy5oZWlnaHQsIDIpKTtcbiAgICAgIHJldHVybiBoeXBvdGVudXNlICsgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlBBRERJTkc7XG4gICAgfTtcblxuICAgIHRoaXMubWF4UmFkaXVzXyA9IHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSA/IG1heERpbSA6IGdldEJvdW5kZWRSYWRpdXMoKTtcblxuICAgIC8vIFJpcHBsZSBpcyBzaXplZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiBvZiB0aGUgc3VyZmFjZSwgdGhlbiBzY2FsZXMgdXAgdXNpbmcgYSBDU1Mgc2NhbGUgdHJhbnNmb3JtXG4gICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBNYXRoLmZsb29yKG1heERpbSAqIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5JTklUSUFMX09SSUdJTl9TQ0FMRSk7XG4gICAgdGhpcy5mZ1NjYWxlXyA9IHRoaXMubWF4UmFkaXVzXyAvIHRoaXMuaW5pdGlhbFNpemVfO1xuXG4gICAgdGhpcy51cGRhdGVMYXlvdXRDc3NWYXJzXygpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHVwZGF0ZUxheW91dENzc1ZhcnNfKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIFZBUl9GR19TSVpFLCBWQVJfTEVGVCwgVkFSX1RPUCwgVkFSX0ZHX1NDQUxFLFxuICAgIH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TSVpFLCBgJHt0aGlzLmluaXRpYWxTaXplX31weGApO1xuICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NDQUxFLCB0aGlzLmZnU2NhbGVfKTtcblxuICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgICAgbGVmdDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUoVkFSX0xFRlQsIGAke3RoaXMudW5ib3VuZGVkQ29vcmRzXy5sZWZ0fXB4YCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9UT1AsIGAke3RoaXMudW5ib3VuZGVkQ29vcmRzXy50b3B9cHhgKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHBhcmFtIHtib29sZWFufSB1bmJvdW5kZWQgKi9cbiAgc2V0VW5ib3VuZGVkKHVuYm91bmRlZCkge1xuICAgIGNvbnN0IHtVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgIGlmICh1bmJvdW5kZWQpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZvY3VzKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCkpO1xuICB9XG5cbiAgaGFuZGxlQmx1cigpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENDb21wb25lbnQgZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCBNRENSaXBwbGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5pbXBvcnQgTURDUmlwcGxlRm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEBleHRlbmRzIE1EQ0NvbXBvbmVudDwhTURDUmlwcGxlRm91bmRhdGlvbj5cbiAqL1xuY2xhc3MgTURDUmlwcGxlIGV4dGVuZHMgTURDQ29tcG9uZW50IHtcbiAgLyoqIEBwYXJhbSB7Li4uP30gYXJncyAqL1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMudW5ib3VuZGVkXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAqIEBwYXJhbSB7e2lzVW5ib3VuZGVkOiAoYm9vbGVhbnx1bmRlZmluZWQpfT19IG9wdGlvbnNcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZX1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290LCB7aXNVbmJvdW5kZWQgPSB1bmRlZmluZWR9ID0ge30pIHtcbiAgICBjb25zdCByaXBwbGUgPSBuZXcgTURDUmlwcGxlKHJvb3QpO1xuICAgIC8vIE9ubHkgb3ZlcnJpZGUgdW5ib3VuZGVkIGJlaGF2aW9yIGlmIG9wdGlvbiBpcyBleHBsaWNpdGx5IHNwZWNpZmllZFxuICAgIGlmIChpc1VuYm91bmRlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByaXBwbGUudW5ib3VuZGVkID0gLyoqIEB0eXBlIHtib29sZWFufSAqLyAoaXNVbmJvdW5kZWQpO1xuICAgIH1cbiAgICByZXR1cm4gcmlwcGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IVJpcHBsZUNhcGFibGVTdXJmYWNlfSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlQWRhcHRlcn1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVBZGFwdGVyKGluc3RhbmNlKSB7XG4gICAgY29uc3QgTUFUQ0hFUyA9IHV0aWwuZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4gdXRpbC5zdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpLFxuICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IGluc3RhbmNlLnVuYm91bmRlZCxcbiAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT4gaW5zdGFuY2Uucm9vdF9bTUFUQ0hFU10oJzphY3RpdmUnKSxcbiAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiBpbnN0YW5jZS5kaXNhYmxlZCxcbiAgICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgICAgY29udGFpbnNFdmVudFRhcmdldDogKHRhcmdldCkgPT4gaW5zdGFuY2Uucm9vdF8uY29udGFpbnModGFyZ2V0KSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgaW5zdGFuY2Uucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBpbnN0YW5jZS5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IChoYW5kbGVyKSA9PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiAodmFyTmFtZSwgdmFsdWUpID0+IGluc3RhbmNlLnJvb3RfLnN0eWxlLnNldFByb3BlcnR5KHZhck5hbWUsIHZhbHVlKSxcbiAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IGluc3RhbmNlLnJvb3RfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4gKHt4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldH0pLFxuICAgIH07XG4gIH1cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgZ2V0IHVuYm91bmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy51bmJvdW5kZWRfO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdW5ib3VuZGVkICovXG4gIHNldCB1bmJvdW5kZWQodW5ib3VuZGVkKSB7XG4gICAgdGhpcy51bmJvdW5kZWRfID0gQm9vbGVhbih1bmJvdW5kZWQpO1xuICAgIHRoaXMuc2V0VW5ib3VuZGVkXygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3N1cmUgQ29tcGlsZXIgdGhyb3dzIGFuIGFjY2VzcyBjb250cm9sIGVycm9yIHdoZW4gZGlyZWN0bHkgYWNjZXNzaW5nIGFcbiAgICogcHJvdGVjdGVkIG9yIHByaXZhdGUgcHJvcGVydHkgaW5zaWRlIGEgZ2V0dGVyL3NldHRlciwgbGlrZSB1bmJvdW5kZWQgYWJvdmUuXG4gICAqIEJ5IGFjY2Vzc2luZyB0aGUgcHJvdGVjdGVkIHByb3BlcnR5IGluc2lkZSBhIG1ldGhvZCwgd2Ugc29sdmUgdGhhdCBwcm9ibGVtLlxuICAgKiBUaGF0J3Mgd2h5IHRoaXMgZnVuY3Rpb24gZXhpc3RzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0VW5ib3VuZGVkXygpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLnNldFVuYm91bmRlZCh0aGlzLnVuYm91bmRlZF8pO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5hY3RpdmF0ZSgpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmRlYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGxheW91dCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb25fLmxheW91dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGVGb3VuZGF0aW9ufVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIGdldERlZmF1bHRGb3VuZGF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgTURDUmlwcGxlRm91bmRhdGlvbihNRENSaXBwbGUuY3JlYXRlQWRhcHRlcih0aGlzKSk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGluaXRpYWxTeW5jV2l0aERPTSgpIHtcbiAgICB0aGlzLnVuYm91bmRlZCA9ICdtZGNSaXBwbGVJc1VuYm91bmRlZCcgaW4gdGhpcy5yb290Xy5kYXRhc2V0O1xuICB9XG59XG5cbi8qKlxuICogU2VlIE1hdGVyaWFsIERlc2lnbiBzcGVjIGZvciBtb3JlIGRldGFpbHMgb24gd2hlbiB0byB1c2UgcmlwcGxlcy5cbiAqIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9tb3Rpb24vY2hvcmVvZ3JhcGh5Lmh0bWwjY2hvcmVvZ3JhcGh5LWNyZWF0aW9uXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIFJpcHBsZUNhcGFibGVTdXJmYWNlIHt9XG5cbi8qKiBAcHJvdGVjdGVkIHshRWxlbWVudH0gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS5yb290XztcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgcmlwcGxlIGJsZWVkcyBvdXQgb2YgdGhlIGJvdW5kcyBvZiB0aGUgZWxlbWVudC5cbiAqIEB0eXBlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLnVuYm91bmRlZDtcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgcmlwcGxlIGlzIGF0dGFjaGVkIHRvIGEgZGlzYWJsZWQgY29tcG9uZW50LlxuICogQHR5cGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUuZGlzYWJsZWQ7XG5cbmV4cG9ydCB7TURDUmlwcGxlLCBNRENSaXBwbGVGb3VuZGF0aW9uLCBSaXBwbGVDYXBhYmxlU3VyZmFjZSwgdXRpbH07XG4iLCJpbXBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9pbmRleCdcbmltcG9ydCB7XG4gIHN1cHBvcnRzQ3NzVmFyaWFibGVzLFxuICBnZXRNYXRjaGVzUHJvcGVydHksXG4gIGFwcGx5UGFzc2l2ZVxufSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL3V0aWwnXG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVCYXNlIGV4dGVuZHMgTURDUmlwcGxlRm91bmRhdGlvbiB7XG4gIHN0YXRpYyBnZXQgTUFUQ0hFUygpIHtcbiAgICAvKiBnbG9iYWwgSFRNTEVsZW1lbnQgKi9cbiAgICByZXR1cm4gKFxuICAgICAgUmlwcGxlQmFzZS5fbWF0Y2hlcyB8fFxuICAgICAgKFJpcHBsZUJhc2UuX21hdGNoZXMgPSBnZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlKSlcbiAgICApXG4gIH1cblxuICBzdGF0aWMgaXNTdXJmYWNlQWN0aXZlKHJlZikge1xuICAgIHJldHVybiByZWZbUmlwcGxlQmFzZS5NQVRDSEVTXSgnOmFjdGl2ZScpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcih2bSwgb3B0aW9ucykge1xuICAgIHN1cGVyKFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1VuYm91bmRlZDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWxbUmlwcGxlQmFzZS5NQVRDSEVTXSgnOmFjdGl2ZScpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2bS4kZGVsZXRlKHZtLmNsYXNzZXMsIGNsYXNzTmFtZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IHRhcmdldCA9PiB2bS4kZWwuY29udGFpbnModGFyZ2V0KSxcbiAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHZtLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKHZhck5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2bS4kc2V0KHZtLnN0eWxlcywgdmFyTmFtZSwgdmFsdWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyB4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBSaXBwbGVNaXhpbiA9IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMucmlwcGxlID0gbmV3IFJpcHBsZUJhc2UodGhpcylcbiAgICB0aGlzLnJpcHBsZS5pbml0KClcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnJpcHBsZS5kZXN0cm95KClcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICA8Y3VzdG9tLWVsZW1lbnQgXG4gICAgOnRhZz1cInRhZ1wiIFxuICAgIDpjbGFzc2VzPVwiY2xhc3Nlc1wiXG4gICAgOnN0eWxlcz1cInN0eWxlc1wiIFxuICAgIGNsYXNzPVwibWRjLXJpcHBsZVwiPlxuICAgIDxzbG90IC8+XG4gIDwvY3VzdG9tLWVsZW1lbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudE1peGluIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IFJpcHBsZU1peGluIH0gZnJvbSAnLi9tZGMtcmlwcGxlLWJhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1yaXBwbGUnLFxuICBtaXhpbnM6IFtDdXN0b21FbGVtZW50TWl4aW4sIFJpcHBsZU1peGluXSxcbiAgcHJvcHM6IHtcbiAgICB0YWc6IFN0cmluZ1xuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIDppZD1cImlkXCJcbiAgICA6Y2xhc3M9XCJjbGFzc2VzXCJcbiAgICA6c3R5bGU9XCJzdHlsZXNcIlxuICAgIHRhYmluZGV4PVwiMFwiXG4gICAgQGNsaWNrPVwiaGFuZGxlSW50ZXJhY3Rpb25cIlxuICAgIEBrZXlkb3duPVwiaGFuZGxlSW50ZXJhY3Rpb25cIlxuICAgIEB0cmFuc2l0aW9uZW5kPVwiaGFuZGxlVHJhbnNpdGlvbkVuZFwiXG4gID5cbiAgICA8aVxuICAgICAgdi1pZj1cImhhdmVsZWFkaW5nSWNvblwiXG4gICAgICByZWY9XCJsZWFkaW5nSWNvblwiXG4gICAgICA6Y2xhc3M9XCJsZWFkaW5nQ2xhc3Nlc1wiXG4gICAgICBjbGFzcz1cIm1kYy1jaGlwX19pY29uIG1kYy1jaGlwX19pY29uLS1sZWFkaW5nXCJcbiAgICAgID57eyBsZWFkaW5nSWNvbiB9fTwvaVxuICAgID5cbiAgICA8ZGl2IHYtaWY9XCJpc0ZpbHRlclwiIHJlZj1cImNoZWNrbWFya0VsXCIgY2xhc3M9XCJtZGMtY2hpcF9fY2hlY2ttYXJrXCI+XG4gICAgICA8c3ZnIGNsYXNzPVwibWRjLWNoaXBfX2NoZWNrbWFyay1zdmdcIiB2aWV3Qm94PVwiLTIgLTMgMzAgMzBcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBjbGFzcz1cIm1kYy1jaGlwX19jaGVja21hcmstcGF0aFwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgICAgICBkPVwiTTEuNzMsMTIuOTEgOC4xLDE5LjI4IDIyLjc5LDQuNTlcIlxuICAgICAgICAvPlxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1kYy1jaGlwX190ZXh0XCI+PHNsb3QgLz48L2Rpdj5cbiAgICA8aVxuICAgICAgdi1pZj1cImhhdmV0cmFpbGluZ0ljb25cIlxuICAgICAgcmVmPVwidHJhaWxpbmdJY29uXCJcbiAgICAgIDpjbGFzcz1cInRyYWlsaW5nQ2xhc3Nlc1wiXG4gICAgICBjbGFzcz1cIm1kYy1jaGlwX19pY29uIG1kYy1jaGlwX19pY29uLS10cmFpbGluZ1wiXG4gICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICBAY2xpY2s9XCJoYW5kbGVUcmFpbGluZ0ljb25JbnRlcmFjdGlvblwiXG4gICAgICBAa2V5ZG93bj1cImhhbmRsZVRyYWlsaW5nSWNvbkludGVyYWN0aW9uXCJcbiAgICAgID57eyB0cmFpbGluZ0ljb24gfX08L2lcbiAgICA+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbmFwcGx5UGFzc2l2ZVxuPHNjcmlwdD5cbmltcG9ydCB7IE1EQ0NoaXBGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2NoaXBzL2NoaXAvZm91bmRhdGlvbidcbmltcG9ydCB7IEN1c3RvbUxpbmtNaXhpbiwgZW1pdEN1c3RvbUV2ZW50IH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IFJpcHBsZUJhc2UgfSBmcm9tICcuLi9yaXBwbGUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1jaGlwJyxcbiAgbWl4aW5zOiBbQ3VzdG9tTGlua01peGluXSxcbiAgcHJvcHM6IHtcbiAgICBsZWFkaW5nSWNvbjogW1N0cmluZ10sXG4gICAgdHJhaWxpbmdJY29uOiBbU3RyaW5nXSxcbiAgICBsZWFkaW5nSWNvbkNsYXNzZXM6IFtPYmplY3RdLFxuICAgIHRyYWlsaW5nSWNvbkNsYXNzZXM6IFtPYmplY3RdXG4gIH0sXG4gIGluamVjdDogWydtZGNDaGlwU2V0J10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgJ21kYy1jaGlwJzogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHN0eWxlczoge30sXG4gICAgICBpZDogJydcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgc2VsZWN0ZWQ6IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbi5pc1NlbGVjdGVkKClcbiAgICAgIH0sXG4gICAgICBzZXQobnYpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldFNlbGVjdGVkKG52KVxuICAgICAgfVxuICAgIH0sXG4gICAgaXNGaWx0ZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tZGNDaGlwU2V0ICYmIHRoaXMubWRjQ2hpcFNldC5maWx0ZXJcbiAgICB9LFxuICAgIGhhdmVsZWFkaW5nSWNvbigpIHtcbiAgICAgIHJldHVybiAhIXRoaXMubGVhZGluZ0ljb24gfHwgdGhpcy5sZWFkaW5nSWNvbkNsYXNzZXNcbiAgICB9LFxuICAgIGhhdmV0cmFpbGluZ0ljb24oKSB7XG4gICAgICByZXR1cm4gISF0aGlzLnRyYWlsaW5nSWNvbiB8fCB0aGlzLnRyYWlsaW5nSWNvbkNsYXNzZXNcbiAgICB9LFxuICAgIGxlYWRpbmdDbGFzc2VzKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICB7XG4gICAgICAgICAgJ21hdGVyaWFsLWljb25zJzogISF0aGlzLmxlYWRpbmdJY29uXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMubGVhZGluZ0ljb25DbGFzc2VzXG4gICAgICApXG4gICAgfSxcbiAgICB0cmFpbGluZ0NsYXNzZXMoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHtcbiAgICAgICAgICAnbWF0ZXJpYWwtaWNvbnMnOiAhIXRoaXMudHJhaWxpbmdJY29uXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMudHJhaWxpbmdJY29uQ2xhc3Nlc1xuICAgICAgKVxuICAgIH1cbiAgfSxcblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuaWQgPSB0aGlzLm1kY0NoaXBTZXQubmV4dElkKClcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDQ2hpcEZvdW5kYXRpb24oe1xuICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRkZWxldGUodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUpLFxuICAgICAgaGFzQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcbiAgICAgIGFkZENsYXNzVG9MZWFkaW5nSWNvbjogY2xhc3NOYW1lID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaGF2ZWxlYWRpbmdJY29uKSB7XG4gICAgICAgICAgdGhpcy4kcmVmcy5sZWFkaW5nSWNvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlbW92ZUNsYXNzRnJvbUxlYWRpbmdJY29uOiBjbGFzc05hbWUgPT4ge1xuICAgICAgICBpZiAodGhpcy5oYXZlbGVhZGluZ0ljb24pIHtcbiAgICAgICAgICB0aGlzLiRyZWZzLmxlYWRpbmdJY29uLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXZlbnRUYXJnZXRIYXNDbGFzczogKHRhcmdldCwgY2xhc3NOYW1lKSA9PlxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICBub3RpZnlJbnRlcmFjdGlvbjogKCkgPT4ge1xuICAgICAgICBlbWl0Q3VzdG9tRXZlbnQoXG4gICAgICAgICAgdGhpcy4kZWwsXG4gICAgICAgICAgTURDQ2hpcEZvdW5kYXRpb24uc3RyaW5ncy5JTlRFUkFDVElPTl9FVkVOVCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlwSWQ6IHRoaXMuaWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKVxuICAgICAgICB0aGlzLm1kY0NoaXBTZXQgJiYgdGhpcy5tZGNDaGlwU2V0LmhhbmRsZUludGVyYWN0aW9uXG4gICAgICB9LFxuXG4gICAgICBub3RpZnlTZWxlY3Rpb246IHNlbGVjdGVkID0+XG4gICAgICAgIGVtaXRDdXN0b21FdmVudChcbiAgICAgICAgICB0aGlzLiRlbCxcbiAgICAgICAgICBNRENDaGlwRm91bmRhdGlvbi5zdHJpbmdzLlNFTEVDVElPTl9FVkVOVCxcbiAgICAgICAgICB7IGNoaXBJZDogdGhpcy5pZCwgc2VsZWN0ZWQ6IHNlbGVjdGVkIH0sXG4gICAgICAgICAgdHJ1ZSAvKiBzaG91bGRCdWJibGUgKi9cbiAgICAgICAgKSxcbiAgICAgIG5vdGlmeVRyYWlsaW5nSWNvbkludGVyYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgIGVtaXRDdXN0b21FdmVudChcbiAgICAgICAgICB0aGlzLiRlbCxcbiAgICAgICAgICBNRENDaGlwRm91bmRhdGlvbi5zdHJpbmdzLlRSQUlMSU5HX0lDT05fSU5URVJBQ1RJT05fRVZFTlQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hpcElkOiB0aGlzLmlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICBub3RpZnlSZW1vdmFsOiAoKSA9PiB7XG4gICAgICAgIGVtaXRDdXN0b21FdmVudChcbiAgICAgICAgICB0aGlzLiRlbCxcbiAgICAgICAgICBNRENDaGlwRm91bmRhdGlvbi5zdHJpbmdzLlJFTU9WQUxfRVZFTlQsXG4gICAgICAgICAgeyBjaGlwSWQ6IHRoaXMuaWQsIHJvb3Q6IHRoaXMuJGVsIH0sXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApXG4gICAgICB9LFxuICAgICAgZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlOiBwcm9wZXJ0eU5hbWUgPT5cbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy4kZWwpLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHlOYW1lKSxcbiAgICAgIHNldFN0eWxlUHJvcGVydHk6IChwcm9wZXJ0eSwgdmFsdWUpID0+XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLnN0eWxlcywgcHJvcGVydHksIHZhbHVlKSxcblxuICAgICAgaGFzTGVhZGluZ0ljb246ICgpID0+ICEhdGhpcy5oYXZlbGVhZGluZ0ljb24sXG4gICAgICBnZXRSb290Qm91bmRpbmdDbGllbnRSZWN0OiAoKSA9PiB0aGlzLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGdldENoZWNrbWFya0JvdW5kaW5nQ2xpZW50UmVjdDogKCkgPT5cbiAgICAgICAgdGhpcy4kcmVmcy5jaGVja21hcmtFbFxuICAgICAgICAgID8gdGhpcy4kcmVmcy5jaGVja21hcmtFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgIDogbnVsbFxuICAgIH0pXG5cbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG5cbiAgICB0aGlzLm1kY0NoaXBTZXQuY2hpcHMucHVzaCh0aGlzKVxuXG4gICAgdGhpcy5yaXBwbGUgPSBuZXcgUmlwcGxlQmFzZSh0aGlzLCB7XG4gICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiB0aGlzLmZvdW5kYXRpb24uZ2V0RGltZW5zaW9ucygpXG4gICAgfSlcbiAgICB0aGlzLnJpcHBsZS5pbml0KClcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnJpcHBsZS5kZXN0cm95KClcbiAgICB0aGlzLmZvdW5kYXRpb24uZGVzdHJveSgpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVJbnRlcmFjdGlvbihldnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVJbnRlcmFjdGlvbihldnQpXG4gICAgfSxcbiAgICBoYW5kbGVUcmFuc2l0aW9uRW5kKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZVRyYW5zaXRpb25FbmQoZXZ0KVxuICAgIH0sXG4gICAgaGFuZGxlVHJhaWxpbmdJY29uSW50ZXJhY3Rpb24oZXZ0KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlVHJhaWxpbmdJY29uSW50ZXJhY3Rpb24oZXZ0KVxuICAgIH0sXG4gICAgdG9nZ2xlU2VsZWN0ZWQoKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24udG9nZ2xlU2VsZWN0ZWQoKVxuICAgIH0sXG4gICAgaXNTZWxlY3RlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvdW5kYXRpb24uaXNTZWxlY3RlZCgpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFsyLCB7XCJhcmdzXCI6IFwibm9uZVwifV0gKi9cblxuLyoqXG4gKiBBZGFwdGVyIGZvciBNREMgQ2hpcCBTZXQuXG4gKlxuICogRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGFkYXB0ZXIgZXhwZWN0ZWQgYnkgdGhlIGZvdW5kYXRpb24uIEltcGxlbWVudCB0aGlzXG4gKiBhZGFwdGVyIHRvIGludGVncmF0ZSB0aGUgQ2hpcCBTZXQgaW50byB5b3VyIGZyYW1ld29yay4gU2VlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9kb2NzL2F1dGhvcmluZy1jb21wb25lbnRzLm1kXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ0NoaXBTZXRBZGFwdGVyIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcm9vdCBlbGVtZW50IGNvbnRhaW5zIHRoZSBnaXZlbiBjbGFzcyBuYW1lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGNoaXAgd2l0aCB0aGUgZ2l2ZW4gaWQgZnJvbSB0aGUgY2hpcCBzZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGlwSWRcbiAgICovXG4gIHJlbW92ZUNoaXAoY2hpcElkKSB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBzZWxlY3RlZCBzdGF0ZSBvZiB0aGUgY2hpcCB3aXRoIHRoZSBnaXZlbiBpZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoaXBJZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkXG4gICAqL1xuICBzZXRTZWxlY3RlZChjaGlwSWQsIHNlbGVjdGVkKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENDaGlwU2V0QWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiogQGVudW0ge3N0cmluZ30gKi9cbmNvbnN0IHN0cmluZ3MgPSB7XG4gIENISVBfU0VMRUNUT1I6ICcubWRjLWNoaXAnLFxufTtcblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICBDSE9JQ0U6ICdtZGMtY2hpcC1zZXQtLWNob2ljZScsXG4gIEZJTFRFUjogJ21kYy1jaGlwLXNldC0tZmlsdGVyJyxcbn07XG5cbmV4cG9ydCB7c3RyaW5ncywgY3NzQ2xhc3Nlc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDQ2hpcFNldEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IHtNRENDaGlwSW50ZXJhY3Rpb25FdmVudFR5cGUsIE1EQ0NoaXBTZWxlY3Rpb25FdmVudFR5cGUsIE1EQ0NoaXBSZW1vdmFsRXZlbnRUeXBlfSBmcm9tICcuLi9jaGlwL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHtzdHJpbmdzLCBjc3NDbGFzc2VzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQGV4dGVuZHMge01EQ0ZvdW5kYXRpb248IU1EQ0NoaXBTZXRBZGFwdGVyPn1cbiAqIEBmaW5hbFxuICovXG5jbGFzcyBNRENDaGlwU2V0Rm91bmRhdGlvbiBleHRlbmRzIE1EQ0ZvdW5kYXRpb24ge1xuICAvKiogQHJldHVybiBlbnVtIHtzdHJpbmd9ICovXG4gIHN0YXRpYyBnZXQgc3RyaW5ncygpIHtcbiAgICByZXR1cm4gc3RyaW5ncztcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAc2VlIE1EQ0NoaXBTZXRBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVyblxuICAgKiB0eXBlcy5cbiAgICogQHJldHVybiB7IU1EQ0NoaXBTZXRBZGFwdGVyfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTURDQ2hpcFNldEFkYXB0ZXJ9ICovICh7XG4gICAgICBoYXNDbGFzczogKCkgPT4ge30sXG4gICAgICByZW1vdmVDaGlwOiAoKSA9PiB7fSxcbiAgICAgIHNldFNlbGVjdGVkOiAoKSA9PiB7fSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFNRENDaGlwU2V0QWRhcHRlcn0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDQ2hpcFNldEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpZHMgb2YgdGhlIHNlbGVjdGVkIGNoaXBzIGluIHRoZSBzZXQuIE9ubHkgdXNlZCBmb3IgY2hvaWNlIGNoaXAgc2V0IG9yIGZpbHRlciBjaGlwIHNldC5cbiAgICAgKiBAcHJpdmF0ZSB7IUFycmF5PHN0cmluZz59XG4gICAgICovXG4gICAgdGhpcy5zZWxlY3RlZENoaXBJZHNfID0gW107XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgSURzIG9mIGFsbCBzZWxlY3RlZCBjaGlwcy5cbiAgICogQHJldHVybiB7IUFycmF5PHN0cmluZz59XG4gICAqL1xuICBnZXRTZWxlY3RlZENoaXBJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRDaGlwSWRzXztcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHNlbGVjdGlvbiBvZiB0aGUgY2hpcCB3aXRoIHRoZSBnaXZlbiBpZC5cbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoaXBJZFxuICAgKi9cbiAgdG9nZ2xlU2VsZWN0XyhjaGlwSWQpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZENoaXBJZHNfLmluZGV4T2YoY2hpcElkKSA+PSAwKSB7XG4gICAgICB0aGlzLmRlc2VsZWN0XyhjaGlwSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdChjaGlwSWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBjaGlwIHdpdGggdGhlIGdpdmVuIGlkLiBEZXNlbGVjdHMgYWxsIG90aGVyIGNoaXBzIGlmIHRoZSBjaGlwIHNldCBpcyBvZiB0aGUgY2hvaWNlIHZhcmlhbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGlwSWRcbiAgICovXG4gIHNlbGVjdChjaGlwSWQpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZENoaXBJZHNfLmluZGV4T2YoY2hpcElkKSA+PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5DSE9JQ0UpICYmIHRoaXMuc2VsZWN0ZWRDaGlwSWRzXy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBwcmV2aW91c2x5U2VsZWN0ZWRDaGlwID0gdGhpcy5zZWxlY3RlZENoaXBJZHNfWzBdO1xuICAgICAgdGhpcy5zZWxlY3RlZENoaXBJZHNfLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldFNlbGVjdGVkKHByZXZpb3VzbHlTZWxlY3RlZENoaXAsIGZhbHNlKTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZENoaXBJZHNfLnB1c2goY2hpcElkKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnNldFNlbGVjdGVkKGNoaXBJZCwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzZWxlY3RzIHRoZSBjaGlwIHdpdGggdGhlIGdpdmVuIGlkLlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hpcElkXG4gICAqL1xuICBkZXNlbGVjdF8oY2hpcElkKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkQ2hpcElkc18uaW5kZXhPZihjaGlwSWQpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2hpcElkc18uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0U2VsZWN0ZWQoY2hpcElkLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYSBjaGlwIGludGVyYWN0aW9uIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGlwSWRcbiAgICovXG4gIGhhbmRsZUNoaXBJbnRlcmFjdGlvbihjaGlwSWQpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkNIT0lDRSkgfHwgdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhjc3NDbGFzc2VzLkZJTFRFUikpIHtcbiAgICAgIHRoaXMudG9nZ2xlU2VsZWN0XyhjaGlwSWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgY2hpcCBzZWxlY3Rpb24gZXZlbnQsIHVzZWQgdG8gaGFuZGxlIGRpc2NyZXBhbmN5IHdoZW4gc2VsZWN0aW9uIHN0YXRlIGlzIHNldCBkaXJlY3RseSBvbiB0aGUgQ2hpcC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoaXBJZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkXG4gICAqL1xuICBoYW5kbGVDaGlwU2VsZWN0aW9uKGNoaXBJZCwgc2VsZWN0ZWQpIHtcbiAgICBjb25zdCBjaGlwSXNTZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRDaGlwSWRzXy5pbmRleE9mKGNoaXBJZCkgPj0gMDtcbiAgICBpZiAoc2VsZWN0ZWQgJiYgIWNoaXBJc1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdChjaGlwSWQpO1xuICAgIH0gZWxzZSBpZiAoIXNlbGVjdGVkICYmIGNoaXBJc1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLmRlc2VsZWN0XyhjaGlwSWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBldmVudCB3aGVuIGEgY2hpcCBpcyByZW1vdmVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hpcElkXG4gICAqL1xuICBoYW5kbGVDaGlwUmVtb3ZhbChjaGlwSWQpIHtcbiAgICB0aGlzLmRlc2VsZWN0XyhjaGlwSWQpO1xuICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2hpcChjaGlwSWQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ0NoaXBTZXRGb3VuZGF0aW9uO1xuIiwiPHNjcmlwdD5cbmltcG9ydCBNRENDaGlwU2V0Rm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvY2hpcHMvY2hpcC1zZXQvZm91bmRhdGlvbidcbmltcG9ydCB7IE1EQ0NoaXBGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2NoaXBzL2NoaXAvZm91bmRhdGlvbidcblxubGV0IGlkQ291bnRlciA9IDBcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWNoaXAtc2V0JyxcbiAgcHJvcHM6IHtcbiAgICBjaG9pY2U6IFtCb29sZWFuXSxcbiAgICBmaWx0ZXI6IFtCb29sZWFuXSxcbiAgICBpbnB1dDogW0Jvb2xlYW5dXG4gIH0sXG4gIHByb3ZpZGUoKSB7XG4gICAgcmV0dXJuIHsgbWRjQ2hpcFNldDogdGhpcyB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgJ21kYy1jaGlwLXNldCc6IHRydWUsXG4gICAgICAgICdtZGMtY2hpcC1zZXQtLWNob2ljZSc6IHRoaXMuY2hvaWNlLFxuICAgICAgICAnbWRjLWNoaXAtc2V0LS1maWx0ZXInOiB0aGlzLmZpbHRlcixcbiAgICAgICAgJ21kYy1jaGlwLXNldC0taW5wdXQnOiB0aGlzLmlucHV0XG4gICAgICB9LFxuXG4gICAgICBjaGlwczogW11cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ0NoaXBTZXRGb3VuZGF0aW9uKHtcbiAgICAgIGhhc0NsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVDaGlwOiBjaGlwSWQgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZENoaXBJbmRleChjaGlwSWQpXG5cbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hpcHMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZXRTZWxlY3RlZDogKGNoaXBJZCwgc2VsZWN0ZWQpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRDaGlwSW5kZXgoY2hpcElkKVxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIHRoaXMuY2hpcHNbaW5kZXhdLnNlbGVjdGVkID0gc2VsZWN0ZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uLmRlc3Ryb3koKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbmV4dElkKCkge1xuICAgICAgcmV0dXJuIGBtZGMtY2hpcC0keysraWRDb3VudGVyfWBcbiAgICB9LFxuICAgIGZpbmRDaGlwSW5kZXgoY2hpcElkKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpcHNbaV0uaWQgPT09IGNoaXBJZCkge1xuICAgICAgICAgIHJldHVybiBpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAtMVxuICAgIH0sXG4gICAgaGFuZGxlQ2hpcEludGVyYWN0aW9uKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUNoaXBJbnRlcmFjdGlvbihldnQuZGV0YWlsLmNoaXBJZClcbiAgICB9LFxuICAgIGhhbmRsZUNoaXBSZW1vdmFsKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUNoaXBSZW1vdmFsKGV2dC5kZXRhaWwuY2hpcElkKVxuICAgIH0sXG4gICAgaGFuZGxlQ2hpcFNlbGVjdGlvbihldnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVDaGlwU2VsZWN0aW9uKFxuICAgICAgICBldnQuZGV0YWlsLmNoaXBJZCxcbiAgICAgICAgZXZ0LmRldGFpbC5zZWxlY3RlZFxuICAgICAgKVxuICAgIH1cbiAgfSxcbiAgcmVuZGVyKGgpIHtcbiAgICByZXR1cm4gaChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzczogdGhpcy5jbGFzc2VzLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFtNRENDaGlwRm91bmRhdGlvbi5zdHJpbmdzLklOVEVSQUNUSU9OX0VWRU5UXTogZXZ0ID0+XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoaXBJbnRlcmFjdGlvbihldnQpLFxuICAgICAgICAgIFtNRENDaGlwRm91bmRhdGlvbi5zdHJpbmdzLlNFTEVDVElPTl9FVkVOVF06IGV2dCA9PlxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGlwU2VsZWN0aW9uKGV2dCksXG4gICAgICAgICAgW01EQ0NoaXBGb3VuZGF0aW9uLnN0cmluZ3MuUkVNT1ZBTF9FVkVOVF06IGV2dCA9PlxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGlwUmVtb3ZhbChldnQpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0aGlzLiRzbG90cy5kZWZhdWx0XG4gICAgKVxuICB9XG59XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IG1kY0NoaXAgZnJvbSAnLi9tZGMtY2hpcC52dWUnXG5pbXBvcnQgbWRjQ2hpcFNldCBmcm9tICcuL21kYy1jaGlwLXNldC52dWUnXG5cbmV4cG9ydCB7IG1kY0NoaXAsIG1kY0NoaXBTZXQgfVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlUGx1Z2luKHtcbiAgbWRjQ2hpcCxcbiAgbWRjQ2hpcFNldFxufSlcbiIsImltcG9ydCAnLi9zdHlsZXMuc2NzcydcbmltcG9ydCB7IGF1dG9Jbml0IH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBwbHVnaW4gZnJvbSAnLi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG5hdXRvSW5pdChwbHVnaW4pXG4iXSwibmFtZXMiOlsiYXV0b0luaXQiLCJwbHVnaW4iLCJfVnVlIiwid2luZG93IiwiVnVlIiwiZ2xvYmFsIiwidXNlIiwiQmFzZVBsdWdpbiIsImNvbXBvbmVudHMiLCJ2ZXJzaW9uIiwiaW5zdGFsbCIsInZtIiwia2V5IiwiY29tcG9uZW50IiwibmFtZSIsIkN1c3RvbUVsZW1lbnQiLCJmdW5jdGlvbmFsIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJwcm9wcyIsImlzIiwidGFnIiwiZGF0YSIsImNoaWxkcmVuIiwiQ3VzdG9tRWxlbWVudE1peGluIiwiQ3VzdG9tTGluayIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwibGluayIsIk9iamVjdCIsImgiLCJlbGVtZW50IiwicGFyZW50IiwiJHJvdXRlciIsIiRyb290IiwiJG9wdGlvbnMiLCJvbiIsImNsaWNrIiwibmF0aXZlT24iLCJDdXN0b21MaW5rTWl4aW4iLCJ0byIsImV4YWN0IiwiQm9vbGVhbiIsImFwcGVuZCIsInJlcGxhY2UiLCJhY3RpdmVDbGFzcyIsImV4YWN0QWN0aXZlQ2xhc3MiLCJjb21wdXRlZCIsImVtaXRDdXN0b21FdmVudCIsImVsIiwiZXZ0VHlwZSIsImV2dERhdGEiLCJzaG91bGRCdWJibGUiLCJldnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImJ1YmJsZXMiLCJkb2N1bWVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsInNjb3BlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJNRENGb3VuZGF0aW9uIiwiYWRhcHRlciIsImFkYXB0ZXJfIiwiTURDQ2hpcEFkYXB0ZXIiLCJjbGFzc05hbWUiLCJ0YXJnZXQiLCJzZWxlY3RlZCIsInByb3BlcnR5TmFtZSIsInZhbHVlIiwic3RyaW5ncyIsIkVOVFJZX0FOSU1BVElPTl9OQU1FIiwiSU5URVJBQ1RJT05fRVZFTlQiLCJTRUxFQ1RJT05fRVZFTlQiLCJUUkFJTElOR19JQ09OX0lOVEVSQUNUSU9OX0VWRU5UIiwiUkVNT1ZBTF9FVkVOVCIsIkNIRUNLTUFSS19TRUxFQ1RPUiIsIkxFQURJTkdfSUNPTl9TRUxFQ1RPUiIsIlRSQUlMSU5HX0lDT05fU0VMRUNUT1IiLCJjc3NDbGFzc2VzIiwiQ0hFQ0tNQVJLIiwiQ0hJUF9FWElUIiwiSElEREVOX0xFQURJTkdfSUNPTiIsIkxFQURJTkdfSUNPTiIsIlRSQUlMSU5HX0lDT04iLCJTRUxFQ1RFRCIsIk1EQ0NoaXBGb3VuZGF0aW9uIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwiYWRkQ2xhc3NUb0xlYWRpbmdJY29uIiwicmVtb3ZlQ2xhc3NGcm9tTGVhZGluZ0ljb24iLCJldmVudFRhcmdldEhhc0NsYXNzIiwibm90aWZ5SW50ZXJhY3Rpb24iLCJub3RpZnlTZWxlY3Rpb24iLCJub3RpZnlUcmFpbGluZ0ljb25JbnRlcmFjdGlvbiIsIm5vdGlmeVJlbW92YWwiLCJnZXRDb21wdXRlZFN0eWxlVmFsdWUiLCJzZXRTdHlsZVByb3BlcnR5IiwiaGFzTGVhZGluZ0ljb24iLCJnZXRSb290Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2V0Q2hlY2ttYXJrQm91bmRpbmdDbGllbnRSZWN0IiwiZGVmYXVsdEFkYXB0ZXIiLCJzaG91bGRSZW1vdmVPblRyYWlsaW5nSWNvbkNsaWNrXyIsInNob3VsZFJlbW92ZSIsImhlaWdodCIsIndpZHRoIiwia2V5Q29kZSIsImNoaXBXaWR0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0b3BQcm9wYWdhdGlvbiIsImJlZ2luRXhpdCIsIk1EQ0NvbXBvbmVudCIsInJvb3QiLCJmb3VuZGF0aW9uIiwidW5kZWZpbmVkIiwicm9vdF8iLCJhcmdzIiwiaW5pdGlhbGl6ZSIsImZvdW5kYXRpb25fIiwiZ2V0RGVmYXVsdEZvdW5kYXRpb24iLCJpbml0IiwiaW5pdGlhbFN5bmNXaXRoRE9NIiwiRXJyb3IiLCJkZXN0cm95IiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTURDUmlwcGxlQWRhcHRlciIsInZhck5hbWUiLCJST09UIiwiVU5CT1VOREVEIiwiQkdfRk9DVVNFRCIsIkZHX0FDVElWQVRJT04iLCJGR19ERUFDVElWQVRJT04iLCJWQVJfTEVGVCIsIlZBUl9UT1AiLCJWQVJfRkdfU0laRSIsIlZBUl9GR19TQ0FMRSIsIlZBUl9GR19UUkFOU0xBVEVfU1RBUlQiLCJWQVJfRkdfVFJBTlNMQVRFX0VORCIsIm51bWJlcnMiLCJQQURESU5HIiwiSU5JVElBTF9PUklHSU5fU0NBTEUiLCJERUFDVElWQVRJT05fVElNRU9VVF9NUyIsIkZHX0RFQUNUSVZBVElPTl9NUyIsIlRBUF9ERUxBWV9NUyIsInN1cHBvcnRzQ3NzVmFyaWFibGVzXyIsInN1cHBvcnRzUGFzc2l2ZV8iLCJkZXRlY3RFZGdlUHNldWRvVmFyQnVnIiwid2luZG93T2JqIiwibm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNvbXB1dGVkU3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaGFzUHNldWRvVmFyQnVnIiwiYm9yZGVyVG9wU3R5bGUiLCJyZW1vdmUiLCJzdXBwb3J0c0Nzc1ZhcmlhYmxlcyIsImZvcmNlUmVmcmVzaCIsInN1cHBvcnRzRnVuY3Rpb25QcmVzZW50IiwiQ1NTIiwic3VwcG9ydHMiLCJleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIiwid2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzIiwiYXBwbHlQYXNzaXZlIiwiZ2xvYmFsT2JqIiwiaXNTdXBwb3J0ZWQiLCJwYXNzaXZlIiwiZSIsImdldE1hdGNoZXNQcm9wZXJ0eSIsIkhUTUxFbGVtZW50UHJvdG90eXBlIiwibWF0Y2hlc01ldGhvZHMiLCJtZXRob2QiLCJpIiwibGVuZ3RoIiwibWF0Y2hlc01ldGhvZCIsImdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyIsImV2IiwicGFnZU9mZnNldCIsImNsaWVudFJlY3QiLCJ4IiwieSIsImRvY3VtZW50WCIsImxlZnQiLCJkb2N1bWVudFkiLCJ0b3AiLCJub3JtYWxpemVkWCIsIm5vcm1hbGl6ZWRZIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiQUNUSVZBVElPTl9FVkVOVF9UWVBFUyIsIlBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTIiwiYWN0aXZhdGVkVGFyZ2V0cyIsIk1EQ1JpcHBsZUZvdW5kYXRpb24iLCJicm93c2VyU3VwcG9ydHNDc3NWYXJzIiwiaXNVbmJvdW5kZWQiLCJpc1N1cmZhY2VBY3RpdmUiLCJpc1N1cmZhY2VEaXNhYmxlZCIsImNvbnRhaW5zRXZlbnRUYXJnZXQiLCJyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsImRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyIiwiZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyIiwicmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwiZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJ1cGRhdGVDc3NWYXJpYWJsZSIsImNvbXB1dGVCb3VuZGluZ1JlY3QiLCJnZXRXaW5kb3dQYWdlT2Zmc2V0IiwibGF5b3V0RnJhbWVfIiwiZnJhbWVfIiwiYWN0aXZhdGlvblN0YXRlXyIsImRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfIiwiaW5pdGlhbFNpemVfIiwibWF4UmFkaXVzXyIsImFjdGl2YXRlSGFuZGxlcl8iLCJhY3RpdmF0ZV8iLCJkZWFjdGl2YXRlSGFuZGxlcl8iLCJkZWFjdGl2YXRlXyIsImZvY3VzSGFuZGxlcl8iLCJoYW5kbGVGb2N1cyIsImJsdXJIYW5kbGVyXyIsImhhbmRsZUJsdXIiLCJyZXNpemVIYW5kbGVyXyIsImxheW91dCIsInVuYm91bmRlZENvb3Jkc18iLCJmZ1NjYWxlXyIsImFjdGl2YXRpb25UaW1lcl8iLCJmZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8iLCJhY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfIiwiYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfIiwicnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfIiwicHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfIiwiaXNBY3RpdmF0ZWQiLCJoYXNEZWFjdGl2YXRpb25VWFJ1biIsIndhc0FjdGl2YXRlZEJ5UG9pbnRlciIsIndhc0VsZW1lbnRNYWRlQWN0aXZlIiwiYWN0aXZhdGlvbkV2ZW50IiwiaXNQcm9ncmFtbWF0aWMiLCJzdXBwb3J0c1ByZXNzUmlwcGxlIiwic3VwcG9ydHNQcmVzc1JpcHBsZV8iLCJyZWdpc3RlclJvb3RIYW5kbGVyc18iLCJsYXlvdXRJbnRlcm5hbF8iLCJjbGVhclRpbWVvdXQiLCJyZW1vdmVDc3NWYXJzXyIsImRlcmVnaXN0ZXJSb290SGFuZGxlcnNfIiwiZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyIsImZvckVhY2giLCJrZXlzIiwiayIsImluZGV4T2YiLCJhY3RpdmF0aW9uU3RhdGUiLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudCIsImlzU2FtZUludGVyYWN0aW9uIiwiaGFzQWN0aXZhdGVkQ2hpbGQiLCJzb21lIiwicmVzZXRBY3RpdmF0aW9uU3RhdGVfIiwicHVzaCIsInJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfIiwiY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8iLCJhbmltYXRlQWN0aXZhdGlvbl8iLCJldmVudCIsInRyYW5zbGF0ZVN0YXJ0IiwidHJhbnNsYXRlRW5kIiwiZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXyIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXyIsInNldFRpbWVvdXQiLCJhY3RpdmF0aW9uSGFzRW5kZWQiLCJzdGF0ZSIsImFuaW1hdGVEZWFjdGl2YXRpb25fIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtYXhEaW0iLCJtYXgiLCJnZXRCb3VuZGVkUmFkaXVzIiwiaHlwb3RlbnVzZSIsInNxcnQiLCJwb3ciLCJ1cGRhdGVMYXlvdXRDc3NWYXJzXyIsInJvdW5kIiwidW5ib3VuZGVkIiwiTURDUmlwcGxlIiwiZGlzYWJsZWQiLCJ1bmJvdW5kZWRfIiwic2V0VW5ib3VuZGVkIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiY3JlYXRlQWRhcHRlciIsImRhdGFzZXQiLCJzZXRVbmJvdW5kZWRfIiwicmlwcGxlIiwiaW5zdGFuY2UiLCJNQVRDSEVTIiwidXRpbCIsIkhUTUxFbGVtZW50IiwicHJvdG90eXBlIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29udGFpbnMiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsIlJpcHBsZUNhcGFibGVTdXJmYWNlIiwiUmlwcGxlQmFzZSIsInJlZiIsIl9tYXRjaGVzIiwib3B0aW9ucyIsIiRlbCIsIiRzZXQiLCJjbGFzc2VzIiwiJGRlbGV0ZSIsInN0eWxlcyIsIlJpcHBsZU1peGluIiwibW91bnRlZCIsImJlZm9yZURlc3Ryb3kiLCJNRENDaGlwU2V0QWRhcHRlciIsImNoaXBJZCIsIkNISVBfU0VMRUNUT1IiLCJDSE9JQ0UiLCJGSUxURVIiLCJNRENDaGlwU2V0Rm91bmRhdGlvbiIsInJlbW92ZUNoaXAiLCJzZXRTZWxlY3RlZCIsInNlbGVjdGVkQ2hpcElkc18iLCJkZXNlbGVjdF8iLCJzZWxlY3QiLCJwcmV2aW91c2x5U2VsZWN0ZWRDaGlwIiwiaW5kZXgiLCJzcGxpY2UiLCJ0b2dnbGVTZWxlY3RfIiwiY2hpcElzU2VsZWN0ZWQiLCJtZGNDaGlwIiwibWRjQ2hpcFNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUFPLFNBQVNBLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0lBQy9CO0lBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVg7O0lBQ0EsTUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0lBQ2pDRCxJQUFBQSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBZDtJQUNELEdBRkQsTUFFTyxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7SUFDeEM7SUFDQUgsSUFBQUEsSUFBSSxHQUFHRyxNQUFNLENBQUNELEdBQWQ7SUFDRDs7SUFDRCxNQUFJRixJQUFKLEVBQVU7SUFDUkEsSUFBQUEsSUFBSSxDQUFDSSxH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
