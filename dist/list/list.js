/**
* @module vue-mdc-adapterlist 0.19.2-beta
* @exports VueMDCList
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.VueMDCList = factory());
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
        version: '0.19.2-beta',
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
     * Adapter for MDC List. Provides an interface for managing focus.
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
    var MDCListAdapter =
    /*#__PURE__*/
    function () {
      function MDCListAdapter() {
        _classCallCheck(this, MDCListAdapter);
      }

      _createClass(MDCListAdapter, [{
        key: "getListItemCount",

        /** @return {number} */
        value: function getListItemCount() {}
        /**
         * @return {number} */

      }, {
        key: "getFocusedElementIndex",
        value: function getFocusedElementIndex() {}
        /**
         * @param {number} index
         * @param {string} attribute
         * @param {string} value
         */

      }, {
        key: "setAttributeForElementIndex",
        value: function setAttributeForElementIndex(index, attribute, value) {}
        /**
         * @param {number} index
         * @param {string} attribute
         */

      }, {
        key: "removeAttributeForElementIndex",
        value: function removeAttributeForElementIndex(index, attribute) {}
        /**
         * @param {number} index
         * @param {string} className
         */

      }, {
        key: "addClassForElementIndex",
        value: function addClassForElementIndex(index, className) {}
        /**
         * @param {number} index
         * @param {string} className
         */

      }, {
        key: "removeClassForElementIndex",
        value: function removeClassForElementIndex(index, className) {}
        /**
         * Focuses list item at the index specified.
         * @param {number} index
         */

      }, {
        key: "focusItemAtIndex",
        value: function focusItemAtIndex(index) {}
        /**
         * Sets the tabindex to the value specified for all button/a element children of
         * the list item at the index specified.
         * @param {number} listItemIndex
         * @param {number} tabIndexValue
         */

      }, {
        key: "setTabIndexForListItemChildren",
        value: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {}
        /**
         * If the given element has an href, follows the link.
         * @param {!Element} ele
         */

      }, {
        key: "followHref",
        value: function followHref(ele) {}
        /**
         * @param {number} index
         * @return {boolean} Returns true if radio button is present at given list item index.
         */

      }, {
        key: "hasRadioAtIndex",
        value: function hasRadioAtIndex(index) {}
        /**
         * @param {number} index
         * @return {boolean} Returns true if checkbox is present at given list item index.
         */

      }, {
        key: "hasCheckboxAtIndex",
        value: function hasCheckboxAtIndex(index) {}
        /**
         * @param {number} index
         * @return {boolean} Returns true if checkbox inside a list item is checked.
         */

      }, {
        key: "isCheckboxCheckedAtIndex",
        value: function isCheckboxCheckedAtIndex(index) {}
        /**
         * Sets the checked status of checkbox or radio at given list item index.
         * @param {number} index
         * @param {boolean} isChecked
         */

      }, {
        key: "setCheckedCheckboxOrRadioAtIndex",
        value: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {}
        /**
         * @return {boolean} Returns true when the current focused element is inside list root.
         */

      }, {
        key: "isFocusInsideList",
        value: function isFocusInsideList() {}
      }]);

      return MDCListAdapter;
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

    /** @enum {string} */
    var cssClasses = {
      ROOT: 'mdc-list',
      LIST_ITEM_CLASS: 'mdc-list-item',
      LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
      LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated'
    };
    /** @enum {string} */

    var strings = {
      ARIA_ORIENTATION: 'aria-orientation',
      ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
      ARIA_SELECTED: 'aria-selected',
      ARIA_CHECKED: 'aria-checked',
      ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
      ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
      ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
      RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)',
      CHECKBOX_SELECTOR: 'input[type="checkbox"]:not(:disabled)',
      CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
      CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: ".".concat(cssClasses.LIST_ITEM_CLASS, " button:not(:disabled),\n  .").concat(cssClasses.LIST_ITEM_CLASS, " a"),
      FOCUSABLE_CHILD_ELEMENTS: ".".concat(cssClasses.LIST_ITEM_CLASS, " button:not(:disabled), .").concat(cssClasses.LIST_ITEM_CLASS, " a,\n  .").concat(cssClasses.LIST_ITEM_CLASS, " input[type=\"radio\"]:not(:disabled),\n  .").concat(cssClasses.LIST_ITEM_CLASS, " input[type=\"checkbox\"]:not(:disabled)"),
      ENABLED_ITEMS_SELECTOR: '.mdc-list-item:not(.mdc-list-item--disabled)'
    };

    var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];

    var MDCListFoundation =
    /*#__PURE__*/
    function (_MDCFoundation) {
      _inherits(MDCListFoundation, _MDCFoundation);

      _createClass(MDCListFoundation, null, [{
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
         * {@see MDCListAdapter} for typing information on parameters and return
         * types.
         * @return {!MDCListAdapter}
         */

      }, {
        key: "defaultAdapter",
        get: function get() {
          return (
            /** @type {!MDCListAdapter} */
            {
              getListItemCount: function getListItemCount() {},
              getFocusedElementIndex: function getFocusedElementIndex() {},
              setAttributeForElementIndex: function setAttributeForElementIndex() {},
              removeAttributeForElementIndex: function removeAttributeForElementIndex() {},
              addClassForElementIndex: function addClassForElementIndex() {},
              removeClassForElementIndex: function removeClassForElementIndex() {},
              focusItemAtIndex: function focusItemAtIndex() {},
              setTabIndexForListItemChildren: function setTabIndexForListItemChildren() {},
              followHref: function followHref() {},
              hasRadioAtIndex: function hasRadioAtIndex() {},
              hasCheckboxAtIndex: function hasCheckboxAtIndex() {},
              isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex() {},
              setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex() {},
              isFocusInsideList: function isFocusInsideList() {}
            }
          );
        }
        /**
         * @param {!MDCListAdapter=} adapter
         */

      }]);

      function MDCListFoundation(adapter) {
        var _this;

        _classCallCheck(this, MDCListFoundation);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCListFoundation).call(this, _extends(MDCListFoundation.defaultAdapter, adapter)));
        /** @private {boolean} */

        _this.wrapFocus_ = false;
        /** @private {boolean} */

        _this.isVertical_ = true;
        /** @private {boolean} */

        _this.isSingleSelectionList_ = false;
        /** @private {!Index} */

        _this.selectedIndex_ = -1;
        /** @private {number} */

        _this.focusedItemIndex_ = -1;
        /** @private {boolean} */

        _this.useActivatedClass_ = false;
        /** @private {boolean} */

        _this.isCheckboxList_ = false;
        /** @private {boolean} */

        _this.isRadioList_ = false;
        return _this;
      }

      _createClass(MDCListFoundation, [{
        key: "layout",
        value: function layout() {
          if (this.adapter_.getListItemCount() === 0) return;

          if (this.adapter_.hasCheckboxAtIndex(0)) {
            this.isCheckboxList_ = true;
          } else if (this.adapter_.hasRadioAtIndex(0)) {
            this.isRadioList_ = true;
          }
        }
        /**
         * Sets the private wrapFocus_ variable.
         * @param {boolean} value
         */

      }, {
        key: "setWrapFocus",
        value: function setWrapFocus(value) {
          this.wrapFocus_ = value;
        }
        /**
         * Sets the isVertical_ private variable.
         * @param {boolean} value
         */

      }, {
        key: "setVerticalOrientation",
        value: function setVerticalOrientation(value) {
          this.isVertical_ = value;
        }
        /**
         * Sets the isSingleSelectionList_ private variable.
         * @param {boolean} value
         */

      }, {
        key: "setSingleSelection",
        value: function setSingleSelection(value) {
          this.isSingleSelectionList_ = value;
        }
        /**
         * Sets the useActivatedClass_ private variable.
         * @param {boolean} useActivated
         */

      }, {
        key: "setUseActivatedClass",
        value: function setUseActivatedClass(useActivated) {
          this.useActivatedClass_ = useActivated;
        }
        /** @return {!Index} */

      }, {
        key: "getSelectedIndex",
        value: function getSelectedIndex() {
          return this.selectedIndex_;
        }
        /** @param {!Index} index */

      }, {
        key: "setSelectedIndex",
        value: function setSelectedIndex(index) {
          if (!this.isIndexValid_(index)) return;

          if (this.isCheckboxList_) {
            this.setCheckboxAtIndex_(
            /** @type {!Array<number>} */
            index);
          } else if (this.isRadioList_) {
            this.setRadioAtIndex_(
            /** @type {number} */
            index);
          } else {
            this.setSingleSelectionAtIndex_(
            /** @type {number} */
            index);
          }
        }
        /**
         * Focus in handler for the list items.
         * @param evt
         * @param {number} listItemIndex
         */

      }, {
        key: "handleFocusIn",
        value: function handleFocusIn(evt, listItemIndex) {
          if (listItemIndex >= 0) {
            this.adapter_.setTabIndexForListItemChildren(listItemIndex, 0);
          }
        }
        /**
         * Focus out handler for the list items.
         * @param {Event} evt
         * @param {number} listItemIndex
         */

      }, {
        key: "handleFocusOut",
        value: function handleFocusOut(evt, listItemIndex) {
          var _this2 = this;

          if (listItemIndex >= 0) {
            this.adapter_.setTabIndexForListItemChildren(listItemIndex, -1);
          }
          /**
           * Between Focusout & Focusin some browsers do not have focus on any element. Setting a delay to wait till the focus
           * is moved to next element.
           */


          setTimeout(function () {
            if (!_this2.adapter_.isFocusInsideList()) {
              _this2.setTabindexToFirstSelectedItem_();
            }
          }, 0);
        }
        /**
         * Key handler for the list.
         * @param {Event} evt
         * @param {boolean} isRootListItem
         * @param {number} listItemIndex
         */

      }, {
        key: "handleKeydown",
        value: function handleKeydown(evt, isRootListItem, listItemIndex) {
          var arrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
          var arrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
          var arrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
          var arrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
          var isHome = evt.key === 'Home' || evt.keyCode === 36;
          var isEnd = evt.key === 'End' || evt.keyCode === 35;
          var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
          var isSpace = evt.key === 'Space' || evt.keyCode === 32;
          var currentIndex = this.adapter_.getFocusedElementIndex();
          var nextIndex = -1;

          if (currentIndex === -1) {
            currentIndex = listItemIndex;

            if (currentIndex < 0) {
              // If this event doesn't have a mdc-list-item ancestor from the
              // current list (not from a sublist), return early.
              return;
            }
          }

          if (this.isVertical_ && arrowDown || !this.isVertical_ && arrowRight) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusNextElement(currentIndex);
          } else if (this.isVertical_ && arrowUp || !this.isVertical_ && arrowLeft) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusPrevElement(currentIndex);
          } else if (isHome) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusFirstElement();
          } else if (isEnd) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusLastElement();
          } else if (isEnter || isSpace) {
            if (isRootListItem) {
              if (this.isSelectableList_()) {
                this.setSelectedIndexOnAction_(currentIndex);
                this.preventDefaultEvent_(evt);
              } // Explicitly activate links, since we're preventing default on Enter, and Space doesn't activate them.


              this.adapter_.followHref(currentIndex);
            }
          }

          this.focusedItemIndex_ = currentIndex;

          if (nextIndex >= 0) {
            this.setTabindexAtIndex_(nextIndex);
            this.focusedItemIndex_ = nextIndex;
          }
        }
        /**
         * Click handler for the list.
         * @param {number} index
         * @param {boolean} toggleCheckbox
         */

      }, {
        key: "handleClick",
        value: function handleClick(index, toggleCheckbox) {
          if (index === -1) return;

          if (this.isSelectableList_()) {
            this.setSelectedIndexOnAction_(index, toggleCheckbox);
          }

          this.setTabindexAtIndex_(index);
          this.focusedItemIndex_ = index;
        }
        /**
         * Ensures that preventDefault is only called if the containing element doesn't
         * consume the event, and it will cause an unintended scroll.
         * @param {Event} evt
         * @private
         */

      }, {
        key: "preventDefaultEvent_",
        value: function preventDefaultEvent_(evt) {
          var tagName = "".concat(evt.target.tagName).toLowerCase();

          if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
            evt.preventDefault();
          }
        }
        /**
         * Focuses the next element on the list.
         * @param {number} index
         * @return {number}
         */

      }, {
        key: "focusNextElement",
        value: function focusNextElement(index) {
          var count = this.adapter_.getListItemCount();
          var nextIndex = index + 1;

          if (nextIndex >= count) {
            if (this.wrapFocus_) {
              nextIndex = 0;
            } else {
              // Return early because last item is already focused.
              return index;
            }
          }

          this.adapter_.focusItemAtIndex(nextIndex);
          return nextIndex;
        }
        /**
         * Focuses the previous element on the list.
         * @param {number} index
         * @return {number}
         */

      }, {
        key: "focusPrevElement",
        value: function focusPrevElement(index) {
          var prevIndex = index - 1;

          if (prevIndex < 0) {
            if (this.wrapFocus_) {
              prevIndex = this.adapter_.getListItemCount() - 1;
            } else {
              // Return early because first item is already focused.
              return index;
            }
          }

          this.adapter_.focusItemAtIndex(prevIndex);
          return prevIndex;
        }
        /**
         * @return {number}
         */

      }, {
        key: "focusFirstElement",
        value: function focusFirstElement() {
          this.adapter_.focusItemAtIndex(0);
          return 0;
        }
        /**
         * @return {number}
         */

      }, {
        key: "focusLastElement",
        value: function focusLastElement() {
          var lastIndex = this.adapter_.getListItemCount() - 1;
          this.adapter_.focusItemAtIndex(lastIndex);
          return lastIndex;
        }
        /**
         * @param {number} index
         * @private
         */

      }, {
        key: "setSingleSelectionAtIndex_",
        value: function setSingleSelectionAtIndex_(index) {
          var selectedClassName = cssClasses.LIST_ITEM_SELECTED_CLASS;

          if (this.useActivatedClass_) {
            selectedClassName = cssClasses.LIST_ITEM_ACTIVATED_CLASS;
          }

          if (this.selectedIndex_ >= 0 && this.selectedIndex_ !== index) {
            this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
            this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings.ARIA_SELECTED, 'false');
          }

          this.adapter_.addClassForElementIndex(index, selectedClassName);
          this.adapter_.setAttributeForElementIndex(index, strings.ARIA_SELECTED, 'true');
          this.selectedIndex_ = index;
        }
        /**
         * Toggles radio at give index. Radio doesn't change the checked state if it is already checked.
         * @param {number} index
         * @private
         */

      }, {
        key: "setRadioAtIndex_",
        value: function setRadioAtIndex_(index) {
          this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, true);

          if (this.selectedIndex_ >= 0) {
            this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings.ARIA_CHECKED, 'false');
          }

          this.adapter_.setAttributeForElementIndex(index, strings.ARIA_CHECKED, 'true');
          this.selectedIndex_ = index;
        }
        /**
         * @param {!Array<number>} index
         * @private
         */

      }, {
        key: "setCheckboxAtIndex_",
        value: function setCheckboxAtIndex_(index) {
          for (var i = 0; i < this.adapter_.getListItemCount(); i++) {
            var isChecked = false;

            if (index.indexOf(i) >= 0) {
              isChecked = true;
            }

            this.adapter_.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
            this.adapter_.setAttributeForElementIndex(i, strings.ARIA_CHECKED, isChecked ? 'true' : 'false');
          }

          this.selectedIndex_ = index;
        }
        /**
         * @param {number} index
         * @private
         */

      }, {
        key: "setTabindexAtIndex_",
        value: function setTabindexAtIndex_(index) {
          if (this.focusedItemIndex_ === -1 && index !== 0) {
            // If no list item was selected set first list item's tabindex to -1.
            // Generally, tabindex is set to 0 on first list item of list that has no preselected items.
            this.adapter_.setAttributeForElementIndex(0, 'tabindex', -1);
          } else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
            this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, 'tabindex', -1);
          }

          this.adapter_.setAttributeForElementIndex(index, 'tabindex', 0);
        }
        /**
         * @return {boolean} Return true if it is single selectin list, checkbox list or radio list.
         * @private
         */

      }, {
        key: "isSelectableList_",
        value: function isSelectableList_() {
          return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
        }
        /** @private */

      }, {
        key: "setTabindexToFirstSelectedItem_",
        value: function setTabindexToFirstSelectedItem_() {
          var targetIndex = 0;

          if (this.isSelectableList_()) {
            if (typeof this.selectedIndex_ === 'number' && this.selectedIndex_ !== -1) {
              targetIndex = this.selectedIndex_;
            } else if (this.selectedIndex_ instanceof Array && this.selectedIndex_.length > 0) {
              targetIndex = this.selectedIndex_.reduce(function (currentIndex, minIndex) {
                return Math.min(currentIndex, minIndex);
              });
            }
          }

          this.setTabindexAtIndex_(targetIndex);
        }
        /**
         * @param {!Index} index
         * @return {boolean}
         * @private
         */

      }, {
        key: "isIndexValid_",
        value: function isIndexValid_(index) {
          var _this3 = this;

          if (index instanceof Array) {
            if (!this.isCheckboxList_) {
              throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
            }

            if (index.length === 0) {
              return true;
            } else {
              return index.some(function (i) {
                return _this3.isIndexInRange_(i);
              });
            }
          } else if (typeof index === 'number') {
            if (this.isCheckboxList_) {
              throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' + index);
            }

            return this.isIndexInRange_(index);
          } else {
            return false;
          }
        }
        /**
         * @param {number} index
         * @return {boolean}
         * @private
         */

      }, {
        key: "isIndexInRange_",
        value: function isIndexInRange_(index) {
          var listSize = this.adapter_.getListItemCount();
          return index >= 0 && index < listSize;
        }
        /**
         * @param {number} index
         * @param {boolean=} toggleCheckbox
         * @private
         */

      }, {
        key: "setSelectedIndexOnAction_",
        value: function setSelectedIndexOnAction_(index) {
          var toggleCheckbox = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (this.isCheckboxList_) {
            this.toggleCheckboxAtIndex_(index, toggleCheckbox);
          } else {
            this.setSelectedIndex(index);
          }
        }
        /**
         * @param {number} index
         * @param {boolean} toggleCheckbox
         * @private
         */

      }, {
        key: "toggleCheckboxAtIndex_",
        value: function toggleCheckboxAtIndex_(index, toggleCheckbox) {
          var isChecked = this.adapter_.isCheckboxCheckedAtIndex(index);

          if (toggleCheckbox) {
            isChecked = !isChecked;
            this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
          }

          this.adapter_.setAttributeForElementIndex(index, strings.ARIA_CHECKED, isChecked ? 'true' : 'false'); // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.

          if (this.selectedIndex_ === -1) {
            this.selectedIndex_ = [];
          }

          if (isChecked) {
            this.selectedIndex_.push(index);
          } else {
            this.selectedIndex_ = this.selectedIndex_.filter(function (i) {
              return i !== index;
            });
          }
        }
      }]);

      return MDCListFoundation;
    }(MDCFoundation);

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
      name: 'mdc-list',
      props: {
        dense: Boolean,
        avatarList: Boolean,
        twoLine: Boolean,
        bordered: Boolean,
        interactive: {
          type: Boolean,
          default: true
        },
        singleSelection: Boolean,
        vertical: {
          type: Boolean,
          default: true
        }
      },
      provide: function provide() {
        return {
          mdcList: this
        };
      },
      computed: {
        classes: function classes() {
          return {
            'mdc-list--dense': this.dense,
            'mdc-list--avatar-list': this.avatarList,
            'mdc-list--two-line': this.twoLine,
            'mdc-list--bordered': this.bordered,
            'mdc-list--non-interactive': !this.interactive
          };
        },
        orientation: function orientation() {
          return this.vertical ? 'vertical' : 'horizontal';
        },
        listElements: function listElements() {
          return [].slice.call(this.$el.querySelectorAll(MDCListFoundation.strings.ENABLED_ITEMS_SELECTOR));
        }
      },
      methods: {
        handleFocusInEvent: function handleFocusInEvent(evt) {
          var index = this.getListItemIndex(evt);
          this.foundation.handleFocusIn(evt, index);
        },
        handleFocusOutEvent: function handleFocusOutEvent(evt) {
          var index = this.getListItemIndex(evt);
          this.foundation.handleFocusOut(evt, index);
        },
        handleKeydownEvent: function handleKeydownEvent(evt) {
          var index = this.getListItemIndex(evt);

          if (index >= 0) {
            this.foundation.handleKeydown(evt, evt.target.classList.contains(MDCListFoundation.cssClasses.LIST_ITEM_CLASS), index);
          }
        },
        handleClickEvent: function handleClickEvent(evt) {
          var index = this.getListItemIndex(evt); // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.

          var toggleCheckbox = !matches(evt.target, MDCListFoundation.strings.CHECKBOX_RADIO_SELECTOR);
          this.foundation.handleClick(index, toggleCheckbox);
        },
        layout: function layout() {
          [].slice.call(this.$el.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (ele) {
            ele.setAttribute('tabindex', -1);
          }) // Child button/a elements are not tabbable until the list item is focused.
          ;
          [].slice.call(this.$el.querySelectorAll(MDCListFoundation.strings.FOCUSABLE_CHILD_ELEMENTS)).forEach(function (ele) {
            return ele.setAttribute('tabindex', -1);
          });
        },
        initializeListType: function initializeListType() {
          // Automatically set single selection if selected/activated classes are present.
          var preselectedElement = this.$el.querySelector(".".concat(MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS, ", .").concat(MDCListFoundation.cssClasses.LIST_ITEM_SELECTED_CLASS));

          if (preselectedElement) {
            if (preselectedElement.classList.contains(MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS)) {
              this.foundation.setUseActivatedClass(true);
            }

            this.singleSelection = true;
            this.selectedIndex = this.listElements.indexOf(preselectedElement);
          }
        },
        getListItemIndex: function getListItemIndex(evt) {
          var eventTarget = evt.target;
          var index = -1; // Find the first ancestor that is a list item or the list.

          while (!eventTarget.classList.contains(MDCListFoundation.cssClasses.LIST_ITEM_CLASS) && !eventTarget.classList.contains(MDCListFoundation.cssClasses.ROOT)) {
            eventTarget = eventTarget.parentElement;
          } // Get the index of the element if it is a list item.


          if (eventTarget.classList.contains(MDCListFoundation.cssClasses.LIST_ITEM_CLASS)) {
            index = this.listElements.indexOf(eventTarget);
          }

          return index;
        }
      },
      mounted: function mounted() {
        var _this = this;

        this.foundation = new MDCListFoundation({
          getListItemCount: function getListItemCount() {
            return _this.listElements.length;
          },
          getFocusedElementIndex: function getFocusedElementIndex() {
            return _this.listElements.indexOf(document.activeElement);
          },
          setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
            var element = _this.listElements[index];

            if (element) {
              element.setAttribute(attr, value);
            }
          },
          removeAttributeForElementIndex: function removeAttributeForElementIndex(index, attr) {
            var element = _this.listElements[index];

            if (element) {
              element.removeAttribute(attr);
            }
          },
          addClassForElementIndex: function addClassForElementIndex(index, className) {
            var element = _this.listElements[index];

            if (element) {
              element.classList.add(className);
            }
          },
          removeClassForElementIndex: function removeClassForElementIndex(index, className) {
            var element = _this.listElements[index];

            if (element) {
              element.classList.remove(className);
            }
          },
          focusItemAtIndex: function focusItemAtIndex(index) {
            var element = _this.listElements[index];

            if (element) {
              element.focus();
            }
          },
          setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
            var element = _this.listElements[listItemIndex];
            var listItemChildren = [].slice.call(element.querySelectorAll(MDCListFoundation.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
            listItemChildren.forEach(function (ele) {
              return ele.setAttribute('tabindex', tabIndexValue);
            });
          },
          followHref: function followHref(index) {
            var listItem = _this.listElements[index];

            if (listItem && listItem.href) {
              listItem.click();
            }
          },
          hasCheckboxAtIndex: function hasCheckboxAtIndex(index) {
            var listItem = _this.listElements[index];
            return !!listItem.querySelector(MDCListFoundation.strings.CHECKBOX_SELECTOR);
          },
          hasRadioAtIndex: function hasRadioAtIndex(index) {
            var listItem = _this.listElements[index];
            return !!listItem.querySelector(MDCListFoundation.strings.RADIO_SELECTOR);
          },
          isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
            var listItem = _this.listElements[index];
            var toggleEl = listItem.querySelector(MDCListFoundation.strings.CHECKBOX_SELECTOR);
            return toggleEl.checked;
          },
          setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
            var listItem = _this.listElements[index];
            var toggleEl = listItem.querySelector(MDCListFoundation.strings.CHECKBOX_RADIO_SELECTOR);
            toggleEl.checked = isChecked;
            var event = document.createEvent('Event');
            event.initEvent('change', true, true);
            toggleEl.dispatchEvent(event);
          },
          isFocusInsideList: function isFocusInsideList() {
            return _this.$el.contains(document.activeElement);
          }
        });
        this.foundation.init();
        this.foundation.setSingleSelection(this.singleSelection);
        this.foundation.setVerticalOrientation(this.vertical);
        this.layout();
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
    script.__file = "/ddata/extra/vma/components/list/mdc-list.vue";

    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "ul",
        {
          staticClass: "mdc-list",
          class: _vm.classes,
          attrs: { "aria-orientation": _vm.orientation },
          on: {
            click: _vm.handleClickEvent,
            keydown: _vm.handleKeydownEvent,
            focusin: _vm.handleFocusInEvent,
            focusout: _vm.handleFocusOutEvent
          }
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
      

      
      var mdcList = normalizeComponent(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        undefined,
        undefined
      );

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
    var script$1 = {
      name: 'mdc-ripple',
      mixins: [CustomElementMixin, RippleMixin],
      props: {
        tag: String
      }
    };

    /* script */
    const __vue_script__$1 = script$1;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$1.__file = "/ddata/extra/vma/components/ripple/mdc-ripple.vue";

    /* template */
    var __vue_render__$1 = function() {
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
      

      
      normalizeComponent(
        { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
        __vue_inject_styles__$1,
        __vue_script__$1,
        __vue_scope_id__$1,
        __vue_is_functional_template__$1,
        __vue_module_identifier__$1,
        undefined,
        undefined
      );

    //
    var script$2 = {
      name: 'mdc-list-item',
      inject: ['mdcList'],
      props: {
        selected: Boolean,
        activated: Boolean
      },
      data: function data() {
        return {
          classes: {},
          styles: {}
        };
      },
      computed: {
        itemClasses: function itemClasses() {
          return {
            'mdc-list-item--selected': this.selected,
            'mdc-list-item--activated': this.activated
          };
        },
        isInteractive: function isInteractive() {
          return this.mdcList && this.mdcList.interactive;
        },
        hasSecondary: function hasSecondary() {
          return this.$slots['secondary'] && this.mdcList && this.mdcList.twoLine;
        },
        hasEndDetail: function hasEndDetail() {
          return !!this.$slots['end-detail'];
        },
        hasStartDetail: function hasStartDetail() {
          return !!this.$slots['start-detail'];
        }
      },
      watch: {
        isInteractive: function isInteractive(value) {
          if (value) {
            this.addRipple();
          } else {
            this.removeRipple();
          }
        }
      },
      mounted: function mounted() {
        this.isInteractive && this.addRipple();
      },
      beforeDestroy: function beforeDestroy() {
        this.removeRipple();
      },
      methods: {
        addRipple: function addRipple() {
          if (!this.ripple) {
            var ripple = new RippleBase(this);
            ripple.init();
            this.ripple = ripple;
          }
        },
        removeRipple: function removeRipple() {
          if (this.ripple) {
            var ripple = this.ripple;
            this.ripple = null;
            ripple.destroy();
          }
        }
      }
    };

    /* script */
    const __vue_script__$2 = script$2;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$2.__file = "/ddata/extra/vma/components/list/mdc-list-item.vue";

    /* template */
    var __vue_render__$2 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "li",
        _vm._g(
          {
            staticClass: "mdc-list-item",
            class: [_vm.classes, _vm.itemClasses],
            style: _vm.styles,
            attrs: { tabindex: _vm.isInteractive ? "0" : undefined }
          },
          _vm.isInteractive ? _vm.$listeners : {}
        ),
        [
          _vm._t("start-detail"),
          _vm._v(" "),
          _vm.hasSecondary
            ? _c("span", { staticClass: "mdc-list-item__text" }, [
                _c(
                  "span",
                  { staticClass: "mdc-list-item__primary-text" },
                  [_vm._t("default")],
                  2
                ),
                _vm._v(" "),
                _vm.hasSecondary
                  ? _c(
                      "span",
                      { staticClass: "mdc-list-item__secondary-text" },
                      [_vm._t("secondary")],
                      2
                    )
                  : _vm._e()
              ])
            : _c(
                "span",
                { staticClass: "mdc-list-item__text" },
                [_vm._t("default")],
                2
              ),
          _vm._v(" "),
          _vm._t("end-detail")
        ],
        2
      )
    };
    var __vue_staticRenderFns__$2 = [];
    __vue_render__$2._withStripped = true;

      /* style */
      const __vue_inject_styles__$2 = undefined;
      /* scoped */
      const __vue_scope_id__$2 = undefined;
      /* module identifier */
      const __vue_module_identifier__$2 = undefined;
      /* functional template */
      const __vue_is_functional_template__$2 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcListItem = normalizeComponent(
        { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
        __vue_inject_styles__$2,
        __vue_script__$2,
        __vue_scope_id__$2,
        __vue_is_functional_template__$2,
        __vue_module_identifier__$2,
        undefined,
        undefined
      );

    //
    //
    //
    //
    //
    //
    //
    var script$3 = {
      name: 'mdc-list-divider',
      props: {
        inset: Boolean,
        padded: Boolean
      },
      computed: {
        classes: function classes() {
          return {
            'mdc-list-divider--inset': this.inset,
            'mdc-list-divider--padded': this.padded
          };
        }
      }
    };

    /* script */
    const __vue_script__$3 = script$3;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$3.__file = "/ddata/extra/vma/components/list/mdc-list-divider.vue";

    /* template */
    var __vue_render__$3 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("li", {
        staticClass: "mdc-list-divider",
        class: _vm.classes,
        attrs: { role: "separator" }
      })
    };
    var __vue_staticRenderFns__$3 = [];
    __vue_render__$3._withStripped = true;

      /* style */
      const __vue_inject_styles__$3 = undefined;
      /* scoped */
      const __vue_scope_id__$3 = undefined;
      /* module identifier */
      const __vue_module_identifier__$3 = undefined;
      /* functional template */
      const __vue_is_functional_template__$3 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcListDivider = normalizeComponent(
        { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
        __vue_inject_styles__$3,
        __vue_script__$3,
        __vue_scope_id__$3,
        __vue_is_functional_template__$3,
        __vue_module_identifier__$3,
        undefined,
        undefined
      );

    //
    //
    //
    //
    var script$4 = {
      name: 'mdc-list-group'
    };

    /* script */
    const __vue_script__$4 = script$4;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$4.__file = "/ddata/extra/vma/components/list/mdc-list-group.vue";

    /* template */
    var __vue_render__$4 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "mdc-list-group" }, [_vm._t("default")], 2)
    };
    var __vue_staticRenderFns__$4 = [];
    __vue_render__$4._withStripped = true;

      /* style */
      const __vue_inject_styles__$4 = undefined;
      /* scoped */
      const __vue_scope_id__$4 = undefined;
      /* module identifier */
      const __vue_module_identifier__$4 = undefined;
      /* functional template */
      const __vue_is_functional_template__$4 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcListGroup = normalizeComponent(
        { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
        __vue_inject_styles__$4,
        __vue_script__$4,
        __vue_scope_id__$4,
        __vue_is_functional_template__$4,
        __vue_module_identifier__$4,
        undefined,
        undefined
      );

    //
    //
    //
    //
    var script$5 = {
      name: 'mdc-list-group-header'
    };

    /* script */
    const __vue_script__$5 = script$5;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$5.__file = "/ddata/extra/vma/components/list/mdc-list-group-header.vue";

    /* template */
    var __vue_render__$5 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "h3",
        { staticClass: "mdc-list-group-header mdc-list-group__subheader" },
        [_vm._t("default")],
        2
      )
    };
    var __vue_staticRenderFns__$5 = [];
    __vue_render__$5._withStripped = true;

      /* style */
      const __vue_inject_styles__$5 = undefined;
      /* scoped */
      const __vue_scope_id__$5 = undefined;
      /* module identifier */
      const __vue_module_identifier__$5 = undefined;
      /* functional template */
      const __vue_is_functional_template__$5 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcListGroupHeader = normalizeComponent(
        { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
        __vue_inject_styles__$5,
        __vue_script__$5,
        __vue_scope_id__$5,
        __vue_is_functional_template__$5,
        __vue_module_identifier__$5,
        undefined,
        undefined
      );

    //
    //
    //
    //
    var script$6 = {
      name: 'mdc-list-group-divider'
    };

    /* script */
    const __vue_script__$6 = script$6;
    // For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
    script$6.__file = "/ddata/extra/vma/components/list/mdc-list-group-divider.vue";

    /* template */
    var __vue_render__$6 = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("hr", { staticClass: "mdc-list-group-divider mdc-list-divider" })
    };
    var __vue_staticRenderFns__$6 = [];
    __vue_render__$6._withStripped = true;

      /* style */
      const __vue_inject_styles__$6 = undefined;
      /* scoped */
      const __vue_scope_id__$6 = undefined;
      /* module identifier */
      const __vue_module_identifier__$6 = undefined;
      /* functional template */
      const __vue_is_functional_template__$6 = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var mdcListGroupDivider = normalizeComponent(
        { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
        __vue_inject_styles__$6,
        __vue_script__$6,
        __vue_scope_id__$6,
        __vue_is_functional_template__$6,
        __vue_module_identifier__$6,
        undefined,
        undefined
      );

    var plugin = BasePlugin({
      mdcList: mdcList,
      mdcListItem: mdcListItem,
      mdcListDivider: mdcListDivider,
      mdcListGroup: mdcListGroup,
      mdcListGroupHeader: mdcListGroupHeader,
      mdcListGroupDivider: mdcListGroupDivider
    });

    autoInit(plugin);

    return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9iYXNlL2F1dG8taW5pdC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9iYXNlLXBsdWdpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZWxlbWVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZXZlbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvdW5pcXVlaWQtbWl4aW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGlzdC9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGlzdC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vcG9ueWZpbGwuanMiLCIuLi8uLi9jb21wb25lbnRzL2xpc3QvbWRjLWxpc3QudnVlIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1ydW50aW1lLWhlbHBlcnMvbm9ybWFsaXplLWNvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9hZGFwdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUtYmFzZS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvcmlwcGxlL21kYy1yaXBwbGUudnVlIiwiLi4vLi4vY29tcG9uZW50cy9saXN0L21kYy1saXN0LWl0ZW0udnVlIiwiLi4vLi4vY29tcG9uZW50cy9saXN0L21kYy1saXN0LWRpdmlkZXIudnVlIiwiLi4vLi4vY29tcG9uZW50cy9saXN0L21kYy1saXN0LWdyb3VwLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvbGlzdC9tZGMtbGlzdC1ncm91cC1oZWFkZXIudnVlIiwiLi4vLi4vY29tcG9uZW50cy9saXN0L21kYy1saXN0LWdyb3VwLWRpdmlkZXIudnVlIiwiLi4vLi4vY29tcG9uZW50cy9saXN0L2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9saXN0L2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhdXRvSW5pdChwbHVnaW4pIHtcbiAgLy8gQXV0by1pbnN0YWxsXG4gIGxldCBfVnVlID0gbnVsbFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBfVnVlID0gd2luZG93LlZ1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLypnbG9iYWwgZ2xvYmFsKi9cbiAgICBfVnVlID0gZ2xvYmFsLlZ1ZVxuICB9XG4gIGlmIChfVnVlKSB7XG4gICAgX1Z1ZS51c2UocGx1Z2luKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQmFzZVBsdWdpbihjb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJ19fVkVSU0lPTl9fJyxcbiAgICBpbnN0YWxsOiB2bSA9PiB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgIHZtLmNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50c1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHtcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIGNvbnRleHQucHJvcHMuaXMgfHwgY29udGV4dC5wcm9wcy50YWcgfHwgJ2RpdicsXG4gICAgICBjb250ZXh0LmRhdGEsXG4gICAgICBjb250ZXh0LmNoaWxkcmVuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50TWl4aW4gPSB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDdXN0b21FbGVtZW50XG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImNvbnN0IHNjb3BlID1cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigweDEwMDAwMDAwKSkudG9TdHJpbmcoKSArICctJ1xuXG5leHBvcnQgY29uc3QgVk1BVW5pcXVlSWRNaXhpbiA9IHtcbiAgYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMudm1hX3VpZF8gPSBzY29wZSArIHRoaXMuX3VpZFxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgQVxuICovXG5jbGFzcyBNRENGb3VuZGF0aW9uIHtcbiAgLyoqIEByZXR1cm4gZW51bXtjc3NDbGFzc2VzfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17c3RyaW5nc30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJuIGVudW17bnVtYmVyc30gKi9cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKiogQHJldHVybiB7IU9iamVjdH0gKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgLy8gdmFsaWRhdGlvbi5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlciA9IHt9KSB7XG4gICAgLyoqIEBwcm90ZWN0ZWQgeyFBfSAqL1xuICAgIHRoaXMuYWRhcHRlcl8gPSBhZGFwdGVyO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogWzIsIHtcImFyZ3NcIjogXCJub25lXCJ9XSAqL1xuXG4vKipcbiAqIEFkYXB0ZXIgZm9yIE1EQyBMaXN0LiBQcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIG1hbmFnaW5nIGZvY3VzLlxuICpcbiAqIEFkZGl0aW9uYWxseSwgcHJvdmlkZXMgdHlwZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGFkYXB0ZXIgdG8gdGhlIENsb3N1cmVcbiAqIGNvbXBpbGVyLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGFkYXB0ZXIgZm9yIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZSB0byBkZWxlZ2F0ZSB1cGRhdGVzIHRvXG4gKiB0aGUgY29tcG9uZW50IGluIHlvdXIgZnJhbWV3b3JrIG9mIGNob2ljZS4gU2VlIGFyY2hpdGVjdHVyZSBkb2N1bWVudGF0aW9uXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9tYXN0ZXIvZG9jcy9jb2RlL2FyY2hpdGVjdHVyZS5tZFxuICpcbiAqIEByZWNvcmRcbiAqL1xuY2xhc3MgTURDTGlzdEFkYXB0ZXIge1xuICAvKiogQHJldHVybiB7bnVtYmVyfSAqL1xuICBnZXRMaXN0SXRlbUNvdW50KCkge31cblxuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfSAqL1xuICBnZXRGb2N1c2VkRWxlbWVudEluZGV4KCkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIGF0dHJpYnV0ZSwgdmFsdWUpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlXG4gICAqL1xuICByZW1vdmVBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIGF0dHJpYnV0ZSkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIGFkZENsYXNzRm9yRWxlbWVudEluZGV4KGluZGV4LCBjbGFzc05hbWUpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqL1xuICByZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleChpbmRleCwgY2xhc3NOYW1lKSB7fVxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIGxpc3QgaXRlbSBhdCB0aGUgaW5kZXggc3BlY2lmaWVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICovXG4gIGZvY3VzSXRlbUF0SW5kZXgoaW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRhYmluZGV4IHRvIHRoZSB2YWx1ZSBzcGVjaWZpZWQgZm9yIGFsbCBidXR0b24vYSBlbGVtZW50IGNoaWxkcmVuIG9mXG4gICAqIHRoZSBsaXN0IGl0ZW0gYXQgdGhlIGluZGV4IHNwZWNpZmllZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxpc3RJdGVtSW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRhYkluZGV4VmFsdWVcbiAgICovXG4gIHNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbihsaXN0SXRlbUluZGV4LCB0YWJJbmRleFZhbHVlKSB7fVxuXG4gIC8qKlxuICAgKiBJZiB0aGUgZ2l2ZW4gZWxlbWVudCBoYXMgYW4gaHJlZiwgZm9sbG93cyB0aGUgbGluay5cbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlXG4gICAqL1xuICBmb2xsb3dIcmVmKGVsZSkge31cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiByYWRpbyBidXR0b24gaXMgcHJlc2VudCBhdCBnaXZlbiBsaXN0IGl0ZW0gaW5kZXguXG4gICAqL1xuICBoYXNSYWRpb0F0SW5kZXgoaW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgY2hlY2tib3ggaXMgcHJlc2VudCBhdCBnaXZlbiBsaXN0IGl0ZW0gaW5kZXguXG4gICAqL1xuICBoYXNDaGVja2JveEF0SW5kZXgoaW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgY2hlY2tib3ggaW5zaWRlIGEgbGlzdCBpdGVtIGlzIGNoZWNrZWQuXG4gICAqL1xuICBpc0NoZWNrYm94Q2hlY2tlZEF0SW5kZXgoaW5kZXgpIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNoZWNrZWQgc3RhdHVzIG9mIGNoZWNrYm94IG9yIHJhZGlvIGF0IGdpdmVuIGxpc3QgaXRlbSBpbmRleC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNDaGVja2VkXG4gICAqL1xuICBzZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleChpbmRleCwgaXNDaGVja2VkKSB7fVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm5zIHRydWUgd2hlbiB0aGUgY3VycmVudCBmb2N1c2VkIGVsZW1lbnQgaXMgaW5zaWRlIGxpc3Qgcm9vdC5cbiAgICovXG4gIGlzRm9jdXNJbnNpZGVMaXN0KCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDTGlzdEFkYXB0ZXI7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqIEBlbnVtIHtzdHJpbmd9ICovXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICBST09UOiAnbWRjLWxpc3QnLFxuICBMSVNUX0lURU1fQ0xBU1M6ICdtZGMtbGlzdC1pdGVtJyxcbiAgTElTVF9JVEVNX1NFTEVDVEVEX0NMQVNTOiAnbWRjLWxpc3QtaXRlbS0tc2VsZWN0ZWQnLFxuICBMSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTOiAnbWRjLWxpc3QtaXRlbS0tYWN0aXZhdGVkJyxcbn07XG5cbi8qKiBAZW51bSB7c3RyaW5nfSAqL1xuY29uc3Qgc3RyaW5ncyA9IHtcbiAgQVJJQV9PUklFTlRBVElPTjogJ2FyaWEtb3JpZW50YXRpb24nLFxuICBBUklBX09SSUVOVEFUSU9OX0hPUklaT05UQUw6ICdob3Jpem9udGFsJyxcbiAgQVJJQV9TRUxFQ1RFRDogJ2FyaWEtc2VsZWN0ZWQnLFxuICBBUklBX0NIRUNLRUQ6ICdhcmlhLWNoZWNrZWQnLFxuICBBUklBX0NIRUNLRURfUkFESU9fU0VMRUNUT1I6ICdbcm9sZT1cInJhZGlvXCJdW2FyaWEtY2hlY2tlZD1cInRydWVcIl0nLFxuICBBUklBX1JPTEVfQ0hFQ0tCT1hfU0VMRUNUT1I6ICdbcm9sZT1cImNoZWNrYm94XCJdJyxcbiAgQVJJQV9DSEVDS0VEX0NIRUNLQk9YX1NFTEVDVE9SOiAnW3JvbGU9XCJjaGVja2JveFwiXVthcmlhLWNoZWNrZWQ9XCJ0cnVlXCJdJyxcbiAgUkFESU9fU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpkaXNhYmxlZCknLFxuICBDSEVDS0JPWF9TRUxFQ1RPUjogJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmRpc2FibGVkKScsXG4gIENIRUNLQk9YX1JBRElPX1NFTEVDVE9SOiAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6ZGlzYWJsZWQpLCBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpkaXNhYmxlZCknLFxuICBDSElMRF9FTEVNRU5UU19UT19UT0dHTEVfVEFCSU5ERVg6IGAuJHtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU30gYnV0dG9uOm5vdCg6ZGlzYWJsZWQpLFxuICAuJHtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU30gYWAsXG4gIEZPQ1VTQUJMRV9DSElMRF9FTEVNRU5UUzogYC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTfSBidXR0b246bm90KDpkaXNhYmxlZCksIC4ke2Nzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTfSBhLFxuICAuJHtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU30gaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6ZGlzYWJsZWQpLFxuICAuJHtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU30gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6ZGlzYWJsZWQpYCxcbiAgRU5BQkxFRF9JVEVNU19TRUxFQ1RPUjogJy5tZGMtbGlzdC1pdGVtOm5vdCgubWRjLWxpc3QtaXRlbS0tZGlzYWJsZWQpJyxcbn07XG5cbi8qKiBAdHlwZWRlZiB7bnVtYmVyfCFBcnJheTxudW1iZXI+fSAqL1xubGV0IEluZGV4O1xuXG5leHBvcnQge3N0cmluZ3MsIGNzc0NsYXNzZXMsIEluZGV4fTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCBNRENMaXN0QWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtzdHJpbmdzLCBjc3NDbGFzc2VzLCBJbmRleH0gZnJvbSAnLi9jb25zdGFudHMnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbmNvbnN0IEVMRU1FTlRTX0tFWV9BTExPV0VEX0lOID0gWydpbnB1dCcsICdidXR0b24nLCAndGV4dGFyZWEnLCAnc2VsZWN0J107XG5cbmNsYXNzIE1EQ0xpc3RGb3VuZGF0aW9uIGV4dGVuZHMgTURDRm91bmRhdGlvbiB7XG4gIC8qKiBAcmV0dXJuIGVudW0ge3N0cmluZ30gKi9cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgLyoqIEByZXR1cm4gZW51bSB7c3RyaW5nfSAqL1xuICBzdGF0aWMgZ2V0IGNzc0NsYXNzZXMoKSB7XG4gICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gIH1cblxuICAvKipcbiAgICoge0BzZWUgTURDTGlzdEFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuXG4gICAqIHR5cGVzLlxuICAgKiBAcmV0dXJuIHshTURDTGlzdEFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRBZGFwdGVyKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFNRENMaXN0QWRhcHRlcn0gKi8gKHtcbiAgICAgIGdldExpc3RJdGVtQ291bnQ6ICgpID0+IHt9LFxuICAgICAgZ2V0Rm9jdXNlZEVsZW1lbnRJbmRleDogKCkgPT4ge30sXG4gICAgICBzZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXg6ICgpID0+IHt9LFxuICAgICAgcmVtb3ZlQXR0cmlidXRlRm9yRWxlbWVudEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGFkZENsYXNzRm9yRWxlbWVudEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGZvY3VzSXRlbUF0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuOiAoKSA9PiB7fSxcbiAgICAgIGZvbGxvd0hyZWY6ICgpID0+IHt9LFxuICAgICAgaGFzUmFkaW9BdEluZGV4OiAoKSA9PiB7fSxcbiAgICAgIGhhc0NoZWNrYm94QXRJbmRleDogKCkgPT4ge30sXG4gICAgICBpc0NoZWNrYm94Q2hlY2tlZEF0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXg6ICgpID0+IHt9LFxuICAgICAgaXNGb2N1c0luc2lkZUxpc3Q6ICgpID0+IHt9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1EQ0xpc3RBZGFwdGVyPX0gYWRhcHRlclxuICAgKi9cbiAgY29uc3RydWN0b3IoYWRhcHRlcikge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oTURDTGlzdEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy53cmFwRm9jdXNfID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5pc1ZlcnRpY2FsXyA9IHRydWU7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy5pc1NpbmdsZVNlbGVjdGlvbkxpc3RfID0gZmFsc2U7XG5cbiAgICAvKiogQHByaXZhdGUgeyFJbmRleH0gKi9cbiAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gLTE7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID0gLTE7XG5cbiAgICAvKiogQHByaXZhdGUge2Jvb2xlYW59ICovXG4gICAgdGhpcy51c2VBY3RpdmF0ZWRDbGFzc18gPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLmlzQ2hlY2tib3hMaXN0XyA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuaXNSYWRpb0xpc3RfID0gZmFsc2U7XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpID09PSAwKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5oYXNDaGVja2JveEF0SW5kZXgoMCkpIHtcbiAgICAgIHRoaXMuaXNDaGVja2JveExpc3RfID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWRhcHRlcl8uaGFzUmFkaW9BdEluZGV4KDApKSB7XG4gICAgICB0aGlzLmlzUmFkaW9MaXN0XyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHByaXZhdGUgd3JhcEZvY3VzXyB2YXJpYWJsZS5cbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgc2V0V3JhcEZvY3VzKHZhbHVlKSB7XG4gICAgdGhpcy53cmFwRm9jdXNfID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaXNWZXJ0aWNhbF8gcHJpdmF0ZSB2YXJpYWJsZS5cbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgc2V0VmVydGljYWxPcmllbnRhdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuaXNWZXJ0aWNhbF8gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpc1NpbmdsZVNlbGVjdGlvbkxpc3RfIHByaXZhdGUgdmFyaWFibGUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICovXG4gIHNldFNpbmdsZVNlbGVjdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuaXNTaW5nbGVTZWxlY3Rpb25MaXN0XyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHVzZUFjdGl2YXRlZENsYXNzXyBwcml2YXRlIHZhcmlhYmxlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZUFjdGl2YXRlZFxuICAgKi9cbiAgc2V0VXNlQWN0aXZhdGVkQ2xhc3ModXNlQWN0aXZhdGVkKSB7XG4gICAgdGhpcy51c2VBY3RpdmF0ZWRDbGFzc18gPSB1c2VBY3RpdmF0ZWQ7XG4gIH1cblxuICAvKiogQHJldHVybiB7IUluZGV4fSAqL1xuICBnZXRTZWxlY3RlZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSW5kZXhfO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7IUluZGV4fSBpbmRleCAqL1xuICBzZXRTZWxlY3RlZEluZGV4KGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLmlzSW5kZXhWYWxpZF8oaW5kZXgpKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5pc0NoZWNrYm94TGlzdF8pIHtcbiAgICAgIHRoaXMuc2V0Q2hlY2tib3hBdEluZGV4XygvKiogQHR5cGUgeyFBcnJheTxudW1iZXI+fSAqLyAoaW5kZXgpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNSYWRpb0xpc3RfKSB7XG4gICAgICB0aGlzLnNldFJhZGlvQXRJbmRleF8oLyoqIEB0eXBlIHtudW1iZXJ9ICovIChpbmRleCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFNpbmdsZVNlbGVjdGlvbkF0SW5kZXhfKC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoaW5kZXgpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9jdXMgaW4gaGFuZGxlciBmb3IgdGhlIGxpc3QgaXRlbXMuXG4gICAqIEBwYXJhbSBldnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxpc3RJdGVtSW5kZXhcbiAgICovXG4gIGhhbmRsZUZvY3VzSW4oZXZ0LCBsaXN0SXRlbUluZGV4KSB7XG4gICAgaWYgKGxpc3RJdGVtSW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW4obGlzdEl0ZW1JbmRleCwgMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzIG91dCBoYW5kbGVyIGZvciB0aGUgbGlzdCBpdGVtcy5cbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaXN0SXRlbUluZGV4XG4gICAqL1xuICBoYW5kbGVGb2N1c091dChldnQsIGxpc3RJdGVtSW5kZXgpIHtcbiAgICBpZiAobGlzdEl0ZW1JbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbihsaXN0SXRlbUluZGV4LCAtMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmV0d2VlbiBGb2N1c291dCAmIEZvY3VzaW4gc29tZSBicm93c2VycyBkbyBub3QgaGF2ZSBmb2N1cyBvbiBhbnkgZWxlbWVudC4gU2V0dGluZyBhIGRlbGF5IHRvIHdhaXQgdGlsbCB0aGUgZm9jdXNcbiAgICAgKiBpcyBtb3ZlZCB0byBuZXh0IGVsZW1lbnQuXG4gICAgICovXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaXNGb2N1c0luc2lkZUxpc3QoKSkge1xuICAgICAgICB0aGlzLnNldFRhYmluZGV4VG9GaXJzdFNlbGVjdGVkSXRlbV8oKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBLZXkgaGFuZGxlciBmb3IgdGhlIGxpc3QuXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzUm9vdExpc3RJdGVtXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaXN0SXRlbUluZGV4XG4gICAqL1xuICBoYW5kbGVLZXlkb3duKGV2dCwgaXNSb290TGlzdEl0ZW0sIGxpc3RJdGVtSW5kZXgpIHtcbiAgICBjb25zdCBhcnJvd0xlZnQgPSBldnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBldnQua2V5Q29kZSA9PT0gMzc7XG4gICAgY29uc3QgYXJyb3dVcCA9IGV2dC5rZXkgPT09ICdBcnJvd1VwJyB8fCBldnQua2V5Q29kZSA9PT0gMzg7XG4gICAgY29uc3QgYXJyb3dSaWdodCA9IGV2dC5rZXkgPT09ICdBcnJvd1JpZ2h0JyB8fCBldnQua2V5Q29kZSA9PT0gMzk7XG4gICAgY29uc3QgYXJyb3dEb3duID0gZXZ0LmtleSA9PT0gJ0Fycm93RG93bicgfHwgZXZ0LmtleUNvZGUgPT09IDQwO1xuICAgIGNvbnN0IGlzSG9tZSA9IGV2dC5rZXkgPT09ICdIb21lJyB8fCBldnQua2V5Q29kZSA9PT0gMzY7XG4gICAgY29uc3QgaXNFbmQgPSBldnQua2V5ID09PSAnRW5kJyB8fCBldnQua2V5Q29kZSA9PT0gMzU7XG4gICAgY29uc3QgaXNFbnRlciA9IGV2dC5rZXkgPT09ICdFbnRlcicgfHwgZXZ0LmtleUNvZGUgPT09IDEzO1xuICAgIGNvbnN0IGlzU3BhY2UgPSBldnQua2V5ID09PSAnU3BhY2UnIHx8IGV2dC5rZXlDb2RlID09PSAzMjtcblxuICAgIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldEZvY3VzZWRFbGVtZW50SW5kZXgoKTtcbiAgICBsZXQgbmV4dEluZGV4ID0gLTE7XG4gICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcbiAgICAgIGN1cnJlbnRJbmRleCA9IGxpc3RJdGVtSW5kZXg7XG4gICAgICBpZiAoY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgICAvLyBJZiB0aGlzIGV2ZW50IGRvZXNuJ3QgaGF2ZSBhIG1kYy1saXN0LWl0ZW0gYW5jZXN0b3IgZnJvbSB0aGVcbiAgICAgICAgLy8gY3VycmVudCBsaXN0IChub3QgZnJvbSBhIHN1Ymxpc3QpLCByZXR1cm4gZWFybHkuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoKHRoaXMuaXNWZXJ0aWNhbF8gJiYgYXJyb3dEb3duKSB8fCAoIXRoaXMuaXNWZXJ0aWNhbF8gJiYgYXJyb3dSaWdodCkpIHtcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgIG5leHRJbmRleCA9IHRoaXMuZm9jdXNOZXh0RWxlbWVudChjdXJyZW50SW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoKHRoaXMuaXNWZXJ0aWNhbF8gJiYgYXJyb3dVcCkgfHwgKCF0aGlzLmlzVmVydGljYWxfICYmIGFycm93TGVmdCkpIHtcbiAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgIG5leHRJbmRleCA9IHRoaXMuZm9jdXNQcmV2RWxlbWVudChjdXJyZW50SW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoaXNIb21lKSB7XG4gICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICBuZXh0SW5kZXggPSB0aGlzLmZvY3VzRmlyc3RFbGVtZW50KCk7XG4gICAgfSBlbHNlIGlmIChpc0VuZCkge1xuICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgbmV4dEluZGV4ID0gdGhpcy5mb2N1c0xhc3RFbGVtZW50KCk7XG4gICAgfSBlbHNlIGlmIChpc0VudGVyIHx8IGlzU3BhY2UpIHtcbiAgICAgIGlmIChpc1Jvb3RMaXN0SXRlbSkge1xuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGFibGVMaXN0XygpKSB7XG4gICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4T25BY3Rpb25fKGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXhwbGljaXRseSBhY3RpdmF0ZSBsaW5rcywgc2luY2Ugd2UncmUgcHJldmVudGluZyBkZWZhdWx0IG9uIEVudGVyLCBhbmQgU3BhY2UgZG9lc24ndCBhY3RpdmF0ZSB0aGVtLlxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvbGxvd0hyZWYoY3VycmVudEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID0gY3VycmVudEluZGV4O1xuXG4gICAgaWYgKG5leHRJbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLnNldFRhYmluZGV4QXRJbmRleF8obmV4dEluZGV4KTtcbiAgICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPSBuZXh0SW5kZXg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsaWNrIGhhbmRsZXIgZm9yIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtib29sZWFufSB0b2dnbGVDaGVja2JveFxuICAgKi9cbiAgaGFuZGxlQ2xpY2soaW5kZXgsIHRvZ2dsZUNoZWNrYm94KSB7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuaXNTZWxlY3RhYmxlTGlzdF8oKSkge1xuICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4T25BY3Rpb25fKGluZGV4LCB0b2dnbGVDaGVja2JveCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRUYWJpbmRleEF0SW5kZXhfKGluZGV4KTtcbiAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID0gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlcyB0aGF0IHByZXZlbnREZWZhdWx0IGlzIG9ubHkgY2FsbGVkIGlmIHRoZSBjb250YWluaW5nIGVsZW1lbnQgZG9lc24ndFxuICAgKiBjb25zdW1lIHRoZSBldmVudCwgYW5kIGl0IHdpbGwgY2F1c2UgYW4gdW5pbnRlbmRlZCBzY3JvbGwuXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJldmVudERlZmF1bHRFdmVudF8oZXZ0KSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IGAke2V2dC50YXJnZXQudGFnTmFtZX1gLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKEVMRU1FTlRTX0tFWV9BTExPV0VEX0lOLmluZGV4T2YodGFnTmFtZSkgPT09IC0xKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgbmV4dCBlbGVtZW50IG9uIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZm9jdXNOZXh0RWxlbWVudChpbmRleCkge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCk7XG4gICAgbGV0IG5leHRJbmRleCA9IGluZGV4ICsgMTtcbiAgICBpZiAobmV4dEluZGV4ID49IGNvdW50KSB7XG4gICAgICBpZiAodGhpcy53cmFwRm9jdXNfKSB7XG4gICAgICAgIG5leHRJbmRleCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gZWFybHkgYmVjYXVzZSBsYXN0IGl0ZW0gaXMgYWxyZWFkeSBmb2N1c2VkLlxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleChuZXh0SW5kZXgpO1xuXG4gICAgcmV0dXJuIG5leHRJbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIHRoZSBwcmV2aW91cyBlbGVtZW50IG9uIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZm9jdXNQcmV2RWxlbWVudChpbmRleCkge1xuICAgIGxldCBwcmV2SW5kZXggPSBpbmRleCAtIDE7XG4gICAgaWYgKHByZXZJbmRleCA8IDApIHtcbiAgICAgIGlmICh0aGlzLndyYXBGb2N1c18pIHtcbiAgICAgICAgcHJldkluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCkgLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGJlY2F1c2UgZmlyc3QgaXRlbSBpcyBhbHJlYWR5IGZvY3VzZWQuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KHByZXZJbmRleCk7XG5cbiAgICByZXR1cm4gcHJldkluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGZvY3VzRmlyc3RFbGVtZW50KCkge1xuICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleCgwKTtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBmb2N1c0xhc3RFbGVtZW50KCkge1xuICAgIGNvbnN0IGxhc3RJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpIC0gMTtcbiAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgobGFzdEluZGV4KTtcbiAgICByZXR1cm4gbGFzdEluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0U2luZ2xlU2VsZWN0aW9uQXRJbmRleF8oaW5kZXgpIHtcbiAgICBsZXQgc2VsZWN0ZWRDbGFzc05hbWUgPSBjc3NDbGFzc2VzLkxJU1RfSVRFTV9TRUxFQ1RFRF9DTEFTUztcbiAgICBpZiAodGhpcy51c2VBY3RpdmF0ZWRDbGFzc18pIHtcbiAgICAgIHNlbGVjdGVkQ2xhc3NOYW1lID0gY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhfID49IDAgJiYgdGhpcy5zZWxlY3RlZEluZGV4XyAhPT0gaW5kZXgpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3NGb3JFbGVtZW50SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4Xywgc2VsZWN0ZWRDbGFzc05hbWUpO1xuICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4Xywgc3RyaW5ncy5BUklBX1NFTEVDVEVELCAnZmFsc2UnKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzRm9yRWxlbWVudEluZGV4KGluZGV4LCBzZWxlY3RlZENsYXNzTmFtZSk7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9TRUxFQ1RFRCwgJ3RydWUnKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8gPSBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHJhZGlvIGF0IGdpdmUgaW5kZXguIFJhZGlvIGRvZXNuJ3QgY2hhbmdlIHRoZSBjaGVja2VkIHN0YXRlIGlmIGl0IGlzIGFscmVhZHkgY2hlY2tlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRSYWRpb0F0SW5kZXhfKGluZGV4KSB7XG4gICAgdGhpcy5hZGFwdGVyXy5zZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleChpbmRleCwgdHJ1ZSk7XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4XyA+PSAwKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXhfLCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgJ2ZhbHNlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9DSEVDS0VELCAndHJ1ZScpO1xuXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUFycmF5PG51bWJlcj59IGluZGV4XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRDaGVja2JveEF0SW5kZXhfKGluZGV4KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKTsgaSsrKSB7XG4gICAgICBsZXQgaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICBpZiAoaW5kZXguaW5kZXhPZihpKSA+PSAwKSB7XG4gICAgICAgIGlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXgoaSwgaXNDaGVja2VkKTtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGksIHN0cmluZ3MuQVJJQV9DSEVDS0VELCBpc0NoZWNrZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzZXRUYWJpbmRleEF0SW5kZXhfKGluZGV4KSB7XG4gICAgaWYgKHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPT09IC0xICYmIGluZGV4ICE9PSAwKSB7XG4gICAgICAvLyBJZiBubyBsaXN0IGl0ZW0gd2FzIHNlbGVjdGVkIHNldCBmaXJzdCBsaXN0IGl0ZW0ncyB0YWJpbmRleCB0byAtMS5cbiAgICAgIC8vIEdlbmVyYWxseSwgdGFiaW5kZXggaXMgc2V0IHRvIDAgb24gZmlyc3QgbGlzdCBpdGVtIG9mIGxpc3QgdGhhdCBoYXMgbm8gcHJlc2VsZWN0ZWQgaXRlbXMuXG4gICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCgwLCAndGFiaW5kZXgnLCAtMSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID49IDAgJiYgdGhpcy5mb2N1c2VkSXRlbUluZGV4XyAhPT0gaW5kZXgpIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8sICd0YWJpbmRleCcsIC0xKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgJ3RhYmluZGV4JywgMCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJuIHRydWUgaWYgaXQgaXMgc2luZ2xlIHNlbGVjdGluIGxpc3QsIGNoZWNrYm94IGxpc3Qgb3IgcmFkaW8gbGlzdC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGlzU2VsZWN0YWJsZUxpc3RfKCkge1xuICAgIHJldHVybiB0aGlzLmlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gfHwgdGhpcy5pc0NoZWNrYm94TGlzdF8gfHwgdGhpcy5pc1JhZGlvTGlzdF87XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgc2V0VGFiaW5kZXhUb0ZpcnN0U2VsZWN0ZWRJdGVtXygpIHtcbiAgICBsZXQgdGFyZ2V0SW5kZXggPSAwO1xuXG4gICAgaWYgKHRoaXMuaXNTZWxlY3RhYmxlTGlzdF8oKSkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGVkSW5kZXhfID09PSAnbnVtYmVyJyAmJiB0aGlzLnNlbGVjdGVkSW5kZXhfICE9PSAtMSkge1xuICAgICAgICB0YXJnZXRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleF87XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gaW5zdGFuY2VvZiBBcnJheSAmJiB0aGlzLnNlbGVjdGVkSW5kZXhfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGFyZ2V0SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXhfLnJlZHVjZSgoY3VycmVudEluZGV4LCBtaW5JbmRleCkgPT4gTWF0aC5taW4oY3VycmVudEluZGV4LCBtaW5JbmRleCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0VGFiaW5kZXhBdEluZGV4Xyh0YXJnZXRJbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshSW5kZXh9IGluZGV4XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc0luZGV4VmFsaWRfKGluZGV4KSB7XG4gICAgaWYgKGluZGV4IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGlmICghdGhpcy5pc0NoZWNrYm94TGlzdF8pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNRENMaXN0Rm91bmRhdGlvbjogQXJyYXkgb2YgaW5kZXggaXMgb25seSBzdXBwb3J0ZWQgZm9yIGNoZWNrYm94IGJhc2VkIGxpc3QnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbmRleC5zb21lKChpKSA9PiB0aGlzLmlzSW5kZXhJblJhbmdlXyhpKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAodGhpcy5pc0NoZWNrYm94TGlzdF8pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNRENMaXN0Rm91bmRhdGlvbjogRXhwZWN0ZWQgYXJyYXkgb2YgaW5kZXggZm9yIGNoZWNrYm94IGJhc2VkIGxpc3QgYnV0IGdvdCBudW1iZXI6ICcgKyBpbmRleCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5pc0luZGV4SW5SYW5nZV8oaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaXNJbmRleEluUmFuZ2VfKGluZGV4KSB7XG4gICAgY29uc3QgbGlzdFNpemUgPSB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKTtcbiAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IGxpc3RTaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSB0b2dnbGVDaGVja2JveFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc2V0U2VsZWN0ZWRJbmRleE9uQWN0aW9uXyhpbmRleCwgdG9nZ2xlQ2hlY2tib3ggPSB0cnVlKSB7XG4gICAgaWYgKHRoaXMuaXNDaGVja2JveExpc3RfKSB7XG4gICAgICB0aGlzLnRvZ2dsZUNoZWNrYm94QXRJbmRleF8oaW5kZXgsIHRvZ2dsZUNoZWNrYm94KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdG9nZ2xlQ2hlY2tib3hcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRvZ2dsZUNoZWNrYm94QXRJbmRleF8oaW5kZXgsIHRvZ2dsZUNoZWNrYm94KSB7XG4gICAgbGV0IGlzQ2hlY2tlZCA9IHRoaXMuYWRhcHRlcl8uaXNDaGVja2JveENoZWNrZWRBdEluZGV4KGluZGV4KTtcblxuICAgIGlmICh0b2dnbGVDaGVja2JveCkge1xuICAgICAgaXNDaGVja2VkID0gIWlzQ2hlY2tlZDtcbiAgICAgIHRoaXMuYWRhcHRlcl8uc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXgoaW5kZXgsIGlzQ2hlY2tlZCk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9DSEVDS0VELCBpc0NoZWNrZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcblxuICAgIC8vIElmIG5vbmUgb2YgdGhlIGNoZWNrYm94IGl0ZW1zIGFyZSBzZWxlY3RlZCBhbmQgc2VsZWN0ZWRJbmRleCBpcyBub3QgaW5pdGlhbGl6ZWQgdGhlbiBwcm92aWRlIGEgZGVmYXVsdCB2YWx1ZS5cbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4XyA9PT0gLTEpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8gPSBbXTtcbiAgICB9XG5cbiAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXhfLnB1c2goaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gdGhpcy5zZWxlY3RlZEluZGV4Xy5maWx0ZXIoKGkpID0+IGkgIT09IGluZGV4KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDTGlzdEZvdW5kYXRpb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEEgXCJwb255ZmlsbFwiIGlzIGEgcG9seWZpbGwgdGhhdCBkb2Vzbid0IG1vZGlmeSB0aGUgZ2xvYmFsIHByb3RvdHlwZSBjaGFpbi5cbiAqIFRoaXMgbWFrZXMgcG9ueWZpbGxzIHNhZmVyIHRoYW4gdHJhZGl0aW9uYWwgcG9seWZpbGxzLCBlc3BlY2lhbGx5IGZvciBsaWJyYXJpZXMgbGlrZSBNREMuXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4gez9FbGVtZW50fVxuICovXG5mdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIGlmIChlbGVtZW50LmNsb3Nlc3QpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgfVxuXG4gIGxldCBlbCA9IGVsZW1lbnQ7XG4gIHdoaWxlIChlbCkge1xuICAgIGlmIChtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gbWF0Y2hlcyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICBjb25zdCBuYXRpdmVNYXRjaGVzID0gZWxlbWVudC5tYXRjaGVzXG4gICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICB8fCBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cblxuZXhwb3J0IHtjbG9zZXN0LCBtYXRjaGVzfTtcbiIsIjx0ZW1wbGF0ZT5cbiAgPHVsXG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiXG4gICAgY2xhc3M9XCJtZGMtbGlzdFwiXG4gICAgOmFyaWEtb3JpZW50YXRpb249XCJvcmllbnRhdGlvblwiXG4gICAgQGNsaWNrPVwiaGFuZGxlQ2xpY2tFdmVudFwiXG4gICAgQGtleWRvd249XCJoYW5kbGVLZXlkb3duRXZlbnRcIlxuICAgIEBmb2N1c2luPVwiaGFuZGxlRm9jdXNJbkV2ZW50XCJcbiAgICBAZm9jdXNvdXQ9XCJoYW5kbGVGb2N1c091dEV2ZW50XCJcbiAgPlxuICAgIDxzbG90IC8+XG4gIDwvdWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1EQ0xpc3RGb3VuZGF0aW9uIGZyb20gJ0BtYXRlcmlhbC9saXN0L2ZvdW5kYXRpb24nXG5pbXBvcnQgeyBtYXRjaGVzIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9wb255ZmlsbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWxpc3QnLFxuICBwcm9wczoge1xuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGF2YXRhckxpc3Q6IEJvb2xlYW4sXG4gICAgdHdvTGluZTogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBpbnRlcmFjdGl2ZTogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH0sXG4gICAgc2luZ2xlU2VsZWN0aW9uOiBCb29sZWFuLFxuICAgIHZlcnRpY2FsOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfVxuICB9LFxuICBwcm92aWRlKCkge1xuICAgIHJldHVybiB7IG1kY0xpc3Q6IHRoaXMgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnbWRjLWxpc3QtLWRlbnNlJzogdGhpcy5kZW5zZSxcbiAgICAgICAgJ21kYy1saXN0LS1hdmF0YXItbGlzdCc6IHRoaXMuYXZhdGFyTGlzdCxcbiAgICAgICAgJ21kYy1saXN0LS10d28tbGluZSc6IHRoaXMudHdvTGluZSxcbiAgICAgICAgJ21kYy1saXN0LS1ib3JkZXJlZCc6IHRoaXMuYm9yZGVyZWQsXG4gICAgICAgICdtZGMtbGlzdC0tbm9uLWludGVyYWN0aXZlJzogIXRoaXMuaW50ZXJhY3RpdmVcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb3JpZW50YXRpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCdcbiAgICB9LFxuXG4gICAgbGlzdEVsZW1lbnRzKCkge1xuICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoXG4gICAgICAgIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgTURDTGlzdEZvdW5kYXRpb24uc3RyaW5ncy5FTkFCTEVEX0lURU1TX1NFTEVDVE9SXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVGb2N1c0luRXZlbnQoZXZ0KSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0TGlzdEl0ZW1JbmRleChldnQpXG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlRm9jdXNJbihldnQsIGluZGV4KVxuICAgIH0sXG4gICAgaGFuZGxlRm9jdXNPdXRFdmVudChldnQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRMaXN0SXRlbUluZGV4KGV2dClcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVGb2N1c091dChldnQsIGluZGV4KVxuICAgIH0sXG5cbiAgICBoYW5kbGVLZXlkb3duRXZlbnQoZXZ0KSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0TGlzdEl0ZW1JbmRleChldnQpXG5cbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVLZXlkb3duKFxuICAgICAgICAgIGV2dCxcbiAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICAgICAgIE1EQ0xpc3RGb3VuZGF0aW9uLmNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTXG4gICAgICAgICAgKSxcbiAgICAgICAgICBpbmRleFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGVDbGlja0V2ZW50KGV2dCkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldExpc3RJdGVtSW5kZXgoZXZ0KVxuXG4gICAgICAvLyBUb2dnbGUgdGhlIGNoZWNrYm94IG9ubHkgaWYgaXQncyBub3QgdGhlIHRhcmdldCBvZiB0aGUgZXZlbnQsIG9yIHRoZSBjaGVja2JveCB3aWxsIGhhdmUgMiBjaGFuZ2UgZXZlbnRzLlxuICAgICAgY29uc3QgdG9nZ2xlQ2hlY2tib3ggPSAhbWF0Y2hlcyhcbiAgICAgICAgZXZ0LnRhcmdldCxcbiAgICAgICAgTURDTGlzdEZvdW5kYXRpb24uc3RyaW5ncy5DSEVDS0JPWF9SQURJT19TRUxFQ1RPUlxuICAgICAgKVxuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUNsaWNrKGluZGV4LCB0b2dnbGVDaGVja2JveClcbiAgICB9LFxuXG4gICAgbGF5b3V0KCkge1xuICAgICAgLy8gTGlzdCBpdGVtcyBuZWVkIHRvIGhhdmUgYXQgbGVhc3QgdGFiaW5kZXg9LTEgdG8gYmUgZm9jdXNhYmxlLlxuICAgICAgO1tdLnNsaWNlXG4gICAgICAgIC5jYWxsKHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZGMtbGlzdC1pdGVtOm5vdChbdGFiaW5kZXhdKScpKVxuICAgICAgICAuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpXG4gICAgICAgIH0pXG5cbiAgICAgIC8vIENoaWxkIGJ1dHRvbi9hIGVsZW1lbnRzIGFyZSBub3QgdGFiYmFibGUgdW50aWwgdGhlIGxpc3QgaXRlbSBpcyBmb2N1c2VkLlxuICAgICAgO1tdLnNsaWNlXG4gICAgICAgIC5jYWxsKFxuICAgICAgICAgIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICBNRENMaXN0Rm91bmRhdGlvbi5zdHJpbmdzLkZPQ1VTQUJMRV9DSElMRF9FTEVNRU5UU1xuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAuZm9yRWFjaChlbGUgPT4gZWxlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSkpXG4gICAgfSxcblxuICAgIGluaXRpYWxpemVMaXN0VHlwZSgpIHtcbiAgICAgIC8vIEF1dG9tYXRpY2FsbHkgc2V0IHNpbmdsZSBzZWxlY3Rpb24gaWYgc2VsZWN0ZWQvYWN0aXZhdGVkIGNsYXNzZXMgYXJlIHByZXNlbnQuXG4gICAgICBjb25zdCBwcmVzZWxlY3RlZEVsZW1lbnQgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLiR7TURDTGlzdEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTfSwgLiR7XG4gICAgICAgICAgTURDTGlzdEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5MSVNUX0lURU1fU0VMRUNURURfQ0xBU1NcbiAgICAgICAgfWBcbiAgICAgIClcblxuICAgICAgaWYgKHByZXNlbGVjdGVkRWxlbWVudCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJlc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICAgICAgIE1EQ0xpc3RGb3VuZGF0aW9uLmNzc0NsYXNzZXMuTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTU1xuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldFVzZUFjdGl2YXRlZENsYXNzKHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNpbmdsZVNlbGVjdGlvbiA9IHRydWVcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5saXN0RWxlbWVudHMuaW5kZXhPZihwcmVzZWxlY3RlZEVsZW1lbnQpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGdldExpc3RJdGVtSW5kZXgoZXZ0KSB7XG4gICAgICBsZXQgZXZlbnRUYXJnZXQgPSBldnQudGFyZ2V0XG4gICAgICBsZXQgaW5kZXggPSAtMVxuXG4gICAgICAvLyBGaW5kIHRoZSBmaXJzdCBhbmNlc3RvciB0aGF0IGlzIGEgbGlzdCBpdGVtIG9yIHRoZSBsaXN0LlxuICAgICAgd2hpbGUgKFxuICAgICAgICAhZXZlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFxuICAgICAgICAgIE1EQ0xpc3RGb3VuZGF0aW9uLmNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTXG4gICAgICAgICkgJiZcbiAgICAgICAgIWV2ZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhNRENMaXN0Rm91bmRhdGlvbi5jc3NDbGFzc2VzLlJPT1QpXG4gICAgICApIHtcbiAgICAgICAgZXZlbnRUYXJnZXQgPSBldmVudFRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8vIEdldCB0aGUgaW5kZXggb2YgdGhlIGVsZW1lbnQgaWYgaXQgaXMgYSBsaXN0IGl0ZW0uXG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICAgICBNRENMaXN0Rm91bmRhdGlvbi5jc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU1xuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgaW5kZXggPSB0aGlzLmxpc3RFbGVtZW50cy5pbmRleE9mKGV2ZW50VGFyZ2V0KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5kZXhcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ0xpc3RGb3VuZGF0aW9uKHtcbiAgICAgIGdldExpc3RJdGVtQ291bnQ6ICgpID0+IHRoaXMubGlzdEVsZW1lbnRzLmxlbmd0aCxcbiAgICAgIGdldEZvY3VzZWRFbGVtZW50SW5kZXg6ICgpID0+XG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnRzLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCksXG4gICAgICBzZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXg6IChpbmRleCwgYXR0ciwgdmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XVxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVtb3ZlQXR0cmlidXRlRm9yRWxlbWVudEluZGV4OiAoaW5kZXgsIGF0dHIpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XVxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHIpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhZGRDbGFzc0ZvckVsZW1lbnRJbmRleDogKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XVxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleDogKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XVxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmb2N1c0l0ZW1BdEluZGV4OiBpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmxpc3RFbGVtZW50c1tpbmRleF1cbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbjogKGxpc3RJdGVtSW5kZXgsIHRhYkluZGV4VmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2xpc3RJdGVtSW5kZXhdXG4gICAgICAgIGNvbnN0IGxpc3RJdGVtQ2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKFxuICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnN0cmluZ3MuQ0hJTERfRUxFTUVOVFNfVE9fVE9HR0xFX1RBQklOREVYXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIGxpc3RJdGVtQ2hpbGRyZW4uZm9yRWFjaChlbGUgPT5cbiAgICAgICAgICBlbGUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRhYkluZGV4VmFsdWUpXG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICBmb2xsb3dIcmVmOiBpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdXG4gICAgICAgIGlmIChsaXN0SXRlbSAmJiBsaXN0SXRlbS5ocmVmKSB7XG4gICAgICAgICAgbGlzdEl0ZW0uY2xpY2soKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaGFzQ2hlY2tib3hBdEluZGV4OiBpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdXG4gICAgICAgIHJldHVybiAhIWxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgTURDTGlzdEZvdW5kYXRpb24uc3RyaW5ncy5DSEVDS0JPWF9TRUxFQ1RPUlxuICAgICAgICApXG4gICAgICB9LFxuICAgICAgaGFzUmFkaW9BdEluZGV4OiBpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdXG4gICAgICAgIHJldHVybiAhIWxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgTURDTGlzdEZvdW5kYXRpb24uc3RyaW5ncy5SQURJT19TRUxFQ1RPUlxuICAgICAgICApXG4gICAgICB9LFxuICAgICAgaXNDaGVja2JveENoZWNrZWRBdEluZGV4OiBpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdXG4gICAgICAgIGNvbnN0IHRvZ2dsZUVsID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBNRENMaXN0Rm91bmRhdGlvbi5zdHJpbmdzLkNIRUNLQk9YX1NFTEVDVE9SXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHRvZ2dsZUVsLmNoZWNrZWRcbiAgICAgIH0sXG4gICAgICBzZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleDogKGluZGV4LCBpc0NoZWNrZWQpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSB0aGlzLmxpc3RFbGVtZW50c1tpbmRleF1cbiAgICAgICAgY29uc3QgdG9nZ2xlRWwgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnN0cmluZ3MuQ0hFQ0tCT1hfUkFESU9fU0VMRUNUT1JcbiAgICAgICAgKVxuICAgICAgICB0b2dnbGVFbC5jaGVja2VkID0gaXNDaGVja2VkXG5cbiAgICAgICAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKVxuICAgICAgICBldmVudC5pbml0RXZlbnQoJ2NoYW5nZScsIHRydWUsIHRydWUpXG4gICAgICAgIHRvZ2dsZUVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICB9LFxuICAgICAgaXNGb2N1c0luc2lkZUxpc3Q6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZm91bmRhdGlvbi5pbml0KClcblxuICAgIHRoaXMuZm91bmRhdGlvbi5zZXRTaW5nbGVTZWxlY3Rpb24odGhpcy5zaW5nbGVTZWxlY3Rpb24pXG5cbiAgICB0aGlzLmZvdW5kYXRpb24uc2V0VmVydGljYWxPcmllbnRhdGlvbih0aGlzLnZlcnRpY2FsKVxuXG4gICAgdGhpcy5sYXlvdXQoKVxuICB9XG59XG48L3NjcmlwdD5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudChjb21waWxlZFRlbXBsYXRlLCBpbmplY3RTdHlsZSwgZGVmYXVsdEV4cG9ydCwgc2NvcGVJZCwgaXNGdW5jdGlvbmFsVGVtcGxhdGUsIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi8sIGlzU2hhZG93TW9kZSwgY3JlYXRlSW5qZWN0b3IsIGNyZWF0ZUluamVjdG9yU1NSLCBjcmVhdGVJbmplY3RvclNoYWRvdykge1xuICAgIGlmICh0eXBlb2YgaXNTaGFkb3dNb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNyZWF0ZUluamVjdG9yU1NSID0gY3JlYXRlSW5qZWN0b3I7XG4gICAgICAgIGNyZWF0ZUluamVjdG9yID0gaXNTaGFkb3dNb2RlO1xuICAgICAgICBpc1NoYWRvd01vZGUgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICAgIGNvbnN0IG9wdGlvbnMgPSB0eXBlb2YgZGVmYXVsdEV4cG9ydCA9PT0gJ2Z1bmN0aW9uJyA/IGRlZmF1bHRFeHBvcnQub3B0aW9ucyA6IGRlZmF1bHRFeHBvcnQ7XG4gICAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICAgIGlmIChjb21waWxlZFRlbXBsYXRlICYmIGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyKSB7XG4gICAgICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXI7XG4gICAgICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnM7XG4gICAgICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICAgICAgICBpZiAoaXNGdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gc2NvcGVkSWRcbiAgICBpZiAoc2NvcGVJZCkge1xuICAgICAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZDtcbiAgICB9XG4gICAgbGV0IGhvb2s7XG4gICAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgLy8gc2VydmVyIGJ1aWxkXG4gICAgICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgICAgICAgY29udGV4dCA9XG4gICAgICAgICAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAgICAgICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCk7IC8vIGZ1bmN0aW9uYWxcbiAgICAgICAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgICAgICAgIGlmIChpbmplY3RTdHlsZSkge1xuICAgICAgICAgICAgICAgIGluamVjdFN0eWxlLmNhbGwodGhpcywgY3JlYXRlSW5qZWN0b3JTU1IoY29udGV4dCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcmVuY2VcbiAgICAgICAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgICAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgICAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2s7XG4gICAgfVxuICAgIGVsc2UgaWYgKGluamVjdFN0eWxlKSB7XG4gICAgICAgIGhvb2sgPSBpc1NoYWRvd01vZGVcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGluamVjdFN0eWxlLmNhbGwodGhpcywgY3JlYXRlSW5qZWN0b3JTaGFkb3codGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0U3R5bGUuY2FsbCh0aGlzLCBjcmVhdGVJbmplY3Rvcihjb250ZXh0KSk7XG4gICAgICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoaG9vaykge1xuICAgICAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAgICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXI7XG4gICAgICAgICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbihoLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0RXhwb3J0O1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBNRENGb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbi8qKlxuICogQHRlbXBsYXRlIEZcbiAqL1xuY2xhc3MgTURDQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHJldHVybiB7IU1EQ0NvbXBvbmVudH1cbiAgICovXG4gIHN0YXRpYyBhdHRhY2hUbyhyb290KSB7XG4gICAgLy8gU3ViY2xhc3NlcyB3aGljaCBleHRlbmQgTURDQmFzZSBzaG91bGQgcHJvdmlkZSBhbiBhdHRhY2hUbygpIG1ldGhvZCB0aGF0IHRha2VzIGEgcm9vdCBlbGVtZW50IGFuZFxuICAgIC8vIHJldHVybnMgYW4gaW5zdGFudGlhdGVkIGNvbXBvbmVudCB3aXRoIGl0cyByb290IHNldCB0byB0aGF0IGVsZW1lbnQuIEFsc28gbm90ZSB0aGF0IGluIHRoZSBjYXNlcyBvZlxuICAgIC8vIHN1YmNsYXNzZXMsIGFuIGV4cGxpY2l0IGZvdW5kYXRpb24gY2xhc3Mgd2lsbCBub3QgaGF2ZSB0byBiZSBwYXNzZWQgaW47IGl0IHdpbGwgc2ltcGx5IGJlIGluaXRpYWxpemVkXG4gICAgLy8gZnJvbSBnZXREZWZhdWx0Rm91bmRhdGlvbigpLlxuICAgIHJldHVybiBuZXcgTURDQ29tcG9uZW50KHJvb3QsIG5ldyBNRENGb3VuZGF0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IHJvb3RcbiAgICogQHBhcmFtIHtGPX0gZm91bmRhdGlvblxuICAgKiBAcGFyYW0gey4uLj99IGFyZ3NcbiAgICovXG4gIGNvbnN0cnVjdG9yKHJvb3QsIGZvdW5kYXRpb24gPSB1bmRlZmluZWQsIC4uLmFyZ3MpIHtcbiAgICAvKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG4gICAgdGhpcy5yb290XyA9IHJvb3Q7XG4gICAgdGhpcy5pbml0aWFsaXplKC4uLmFyZ3MpO1xuICAgIC8vIE5vdGUgdGhhdCB3ZSBpbml0aWFsaXplIGZvdW5kYXRpb24gaGVyZSBhbmQgbm90IHdpdGhpbiB0aGUgY29uc3RydWN0b3IncyBkZWZhdWx0IHBhcmFtIHNvIHRoYXRcbiAgICAvLyB0aGlzLnJvb3RfIGlzIGRlZmluZWQgYW5kIGNhbiBiZSB1c2VkIHdpdGhpbiB0aGUgZm91bmRhdGlvbiBjbGFzcy5cbiAgICAvKiogQHByb3RlY3RlZCB7IUZ9ICovXG4gICAgdGhpcy5mb3VuZGF0aW9uXyA9IGZvdW5kYXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSA6IGZvdW5kYXRpb247XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5pbml0KCk7XG4gICAgdGhpcy5pbml0aWFsU3luY1dpdGhET00oKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoLyogLi4uYXJncyAqLykge1xuICAgIC8vIFN1YmNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoaXMgdG8gZG8gYW55IGFkZGl0aW9uYWwgc2V0dXAgd29yayB0aGF0IHdvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiBhXG4gICAgLy8gXCJjb25zdHJ1Y3RvclwiLiBFc3NlbnRpYWxseSwgaXQgaXMgYSBob29rIGludG8gdGhlIHBhcmVudCBjb25zdHJ1Y3RvciBiZWZvcmUgdGhlIGZvdW5kYXRpb24gaXNcbiAgICAvLyBpbml0aWFsaXplZC4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIGJlc2lkZXMgcm9vdCBhbmQgZm91bmRhdGlvbiB3aWxsIGJlIHBhc3NlZCBpbiBoZXJlLlxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4geyFGfSBmb3VuZGF0aW9uXG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICAvLyBTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCBmb3VuZGF0aW9uIGNsYXNzIGZvciB0aGVcbiAgICAvLyBjb21wb25lbnQuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgZ2V0RGVmYXVsdEZvdW5kYXRpb24gdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCAnICtcbiAgICAgICdmb3VuZGF0aW9uIGNsYXNzJyk7XG4gIH1cblxuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgdGhleSBuZWVkIHRvIHBlcmZvcm0gd29yayB0byBzeW5jaHJvbml6ZSB3aXRoIGEgaG9zdCBET01cbiAgICAvLyBvYmplY3QuIEFuIGV4YW1wbGUgb2YgdGhpcyB3b3VsZCBiZSBhIGZvcm0gY29udHJvbCB3cmFwcGVyIHRoYXQgbmVlZHMgdG8gc3luY2hyb25pemUgaXRzIGludGVybmFsIHN0YXRlXG4gICAgLy8gdG8gc29tZSBwcm9wZXJ0eSBvciBhdHRyaWJ1dGUgb2YgdGhlIGhvc3QgRE9NLiBQbGVhc2Ugbm90ZTogdGhpcyBpcyAqbm90KiB0aGUgcGxhY2UgdG8gcGVyZm9ybSBET01cbiAgICAvLyByZWFkcy93cml0ZXMgdGhhdCB3b3VsZCBjYXVzZSBsYXlvdXQgLyBwYWludCwgYXMgdGhpcyBpcyBjYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIHdpdGhpbiB0aGUgY29uc3RydWN0b3IuXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFN1YmNsYXNzZXMgbWF5IGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZWxlYXNlIGFueSByZXNvdXJjZXMgLyBkZXJlZ2lzdGVyIGFueSBsaXN0ZW5lcnMgdGhleSBoYXZlXG4gICAgLy8gYXR0YWNoZWQuIEFuIGV4YW1wbGUgb2YgdGhpcyBtaWdodCBiZSBkZXJlZ2lzdGVyaW5nIGEgcmVzaXplIGV2ZW50IGZyb20gdGhlIHdpbmRvdyBvYmplY3QuXG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogV3JhcHBlciBtZXRob2QgdG8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjb21wb25lbnQncyByb290IGVsZW1lbnQuIFRoaXMgaXMgbW9zdCB1c2VmdWwgd2hlblxuICAgKiBsaXN0ZW5pbmcgZm9yIGN1c3RvbSBldmVudHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBsaXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIG1ldGhvZCB0byByZW1vdmUgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudC4gVGhpcyBpcyBtb3N0IHVzZWZ1bCB3aGVuXG4gICAqIHVubGlzdGVuaW5nIGZvciBjdXN0b20gZXZlbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgdW5saXN0ZW4oZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBhIGNyb3NzLWJyb3dzZXItY29tcGF0aWJsZSBjdXN0b20gZXZlbnQgZnJvbSB0aGUgY29tcG9uZW50IHJvb3Qgb2YgdGhlIGdpdmVuIHR5cGUsXG4gICAqIHdpdGggdGhlIGdpdmVuIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IU9iamVjdH0gZXZ0RGF0YVxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBzaG91bGRCdWJibGVcbiAgICovXG4gIGVtaXQoZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlID0gZmFsc2UpIHtcbiAgICBsZXQgZXZ0O1xuICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvb3RfLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENDb21wb25lbnQ7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBbMiwge1wiYXJnc1wiOiBcIm5vbmVcIn1dICovXG5cbi8qKlxuICogQWRhcHRlciBmb3IgTURDIFJpcHBsZS4gUHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBtYW5hZ2luZ1xuICogLSBjbGFzc2VzXG4gKiAtIGRvbVxuICogLSBDU1MgdmFyaWFibGVzXG4gKiAtIHBvc2l0aW9uXG4gKiAtIGRpbWVuc2lvbnNcbiAqIC0gc2Nyb2xsIHBvc2l0aW9uXG4gKiAtIGV2ZW50IGhhbmRsZXJzXG4gKiAtIHVuYm91bmRlZCwgYWN0aXZlIGFuZCBkaXNhYmxlZCBzdGF0ZXNcbiAqXG4gKiBBZGRpdGlvbmFsbHksIHByb3ZpZGVzIHR5cGUgaW5mb3JtYXRpb24gZm9yIHRoZSBhZGFwdGVyIHRvIHRoZSBDbG9zdXJlXG4gKiBjb21waWxlci5cbiAqXG4gKiBJbXBsZW1lbnQgdGhpcyBhZGFwdGVyIGZvciB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UgdG8gZGVsZWdhdGUgdXBkYXRlcyB0b1xuICogdGhlIGNvbXBvbmVudCBpbiB5b3VyIGZyYW1ld29yayBvZiBjaG9pY2UuIFNlZSBhcmNoaXRlY3R1cmUgZG9jdW1lbnRhdGlvblxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL2RvY3MvY29kZS9hcmNoaXRlY3R1cmUubWRcbiAqXG4gKiBAcmVjb3JkXG4gKi9cbmNsYXNzIE1EQ1JpcHBsZUFkYXB0ZXIge1xuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpIHt9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGlzVW5ib3VuZGVkKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNTdXJmYWNlQWN0aXZlKCkge31cblxuICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cbiAgaXNTdXJmYWNlRGlzYWJsZWQoKSB7fVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge31cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHt9XG5cbiAgLyoqIEBwYXJhbSB7IUV2ZW50VGFyZ2V0fSB0YXJnZXQgKi9cbiAgY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnRUeXBlXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBoYW5kbGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0VHlwZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3RlclJlc2l6ZUhhbmRsZXIoaGFuZGxlcikge31cblxuICAvKipcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKGhhbmRsZXIpIHt9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YXJOYW1lXG4gICAqIEBwYXJhbSB7P251bWJlcnxzdHJpbmd9IHZhbHVlXG4gICAqL1xuICB1cGRhdGVDc3NWYXJpYWJsZSh2YXJOYW1lLCB2YWx1ZSkge31cblxuICAvKiogQHJldHVybiB7IUNsaWVudFJlY3R9ICovXG4gIGNvbXB1dGVCb3VuZGluZ1JlY3QoKSB7fVxuXG4gIC8qKiBAcmV0dXJuIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSAqL1xuICBnZXRXaW5kb3dQYWdlT2Zmc2V0KCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlQWRhcHRlcjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5jb25zdCBjc3NDbGFzc2VzID0ge1xuICAvLyBSaXBwbGUgaXMgYSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIFwicm9vdFwiIGNvbXBvbmVudCBpcyByZWFsbHkgYSBcIm1peGluXCIgb2Ygc29ydHMsXG4gIC8vIGdpdmVuIHRoYXQgaXQncyBhbiAndXBncmFkZScgdG8gYW4gZXhpc3RpbmcgY29tcG9uZW50LiBUaGF0IGJlaW5nIHNhaWQgaXQgaXMgdGhlIHJvb3RcbiAgLy8gQ1NTIGNsYXNzIHRoYXQgYWxsIG90aGVyIENTUyBjbGFzc2VzIGRlcml2ZSBmcm9tLlxuICBST09UOiAnbWRjLXJpcHBsZS11cGdyYWRlZCcsXG4gIFVOQk9VTkRFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZCcsXG4gIEJHX0ZPQ1VTRUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQnLFxuICBGR19BQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uJyxcbiAgRkdfREVBQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1kZWFjdGl2YXRpb24nLFxufTtcblxuY29uc3Qgc3RyaW5ncyA9IHtcbiAgVkFSX0xFRlQ6ICctLW1kYy1yaXBwbGUtbGVmdCcsXG4gIFZBUl9UT1A6ICctLW1kYy1yaXBwbGUtdG9wJyxcbiAgVkFSX0ZHX1NJWkU6ICctLW1kYy1yaXBwbGUtZmctc2l6ZScsXG4gIFZBUl9GR19TQ0FMRTogJy0tbWRjLXJpcHBsZS1mZy1zY2FsZScsXG4gIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0JyxcbiAgVkFSX0ZHX1RSQU5TTEFURV9FTkQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCcsXG59O1xuXG5jb25zdCBudW1iZXJzID0ge1xuICBQQURESU5HOiAxMCxcbiAgSU5JVElBTF9PUklHSU5fU0NBTEU6IDAuNixcbiAgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM6IDIyNSwgLy8gQ29ycmVzcG9uZHMgdG8gJG1kYy1yaXBwbGUtdHJhbnNsYXRlLWR1cmF0aW9uIChpLmUuIGFjdGl2YXRpb24gYW5pbWF0aW9uIGR1cmF0aW9uKVxuICBGR19ERUFDVElWQVRJT05fTVM6IDE1MCwgLy8gQ29ycmVzcG9uZHMgdG8gJG1kYy1yaXBwbGUtZmFkZS1vdXQtZHVyYXRpb24gKGkuZS4gZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBkdXJhdGlvbilcbiAgVEFQX0RFTEFZX01TOiAzMDAsIC8vIERlbGF5IGJldHdlZW4gdG91Y2ggYW5kIHNpbXVsYXRlZCBtb3VzZSBldmVudHMgb24gdG91Y2ggZGV2aWNlc1xufTtcblxuZXhwb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3QgQ1NTIGN1c3RvbSB2YXJpYWJsZSBzdXBwb3J0LlxuICogQHByaXZhdGUge2Jvb2xlYW58dW5kZWZpbmVkfVxuICovXG5sZXQgc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuXG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBhcHBseVBhc3NpdmUgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG8gZGV0ZWN0IHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgc3VwcG9ydC5cbiAqIEBwcml2YXRlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xubGV0IHN1cHBvcnRzUGFzc2l2ZV87XG5cbi8qKlxuICogQHBhcmFtIHshV2luZG93fSB3aW5kb3dPYmpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKSB7XG4gIC8vIERldGVjdCB2ZXJzaW9ucyBvZiBFZGdlIHdpdGggYnVnZ3kgdmFyKCkgc3VwcG9ydFxuICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzExNDk1NDQ4L1xuICBjb25zdCBkb2N1bWVudCA9IHdpbmRvd09iai5kb2N1bWVudDtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub2RlLmNsYXNzTmFtZSA9ICdtZGMtcmlwcGxlLXN1cmZhY2UtLXRlc3QtZWRnZS12YXItYnVnJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcblxuICAvLyBUaGUgYnVnIGV4aXN0cyBpZiA6OmJlZm9yZSBzdHlsZSBlbmRzIHVwIHByb3BhZ2F0aW5nIHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgLy8gQWRkaXRpb25hbGx5LCBnZXRDb21wdXRlZFN0eWxlIHJldHVybnMgbnVsbCBpbiBpZnJhbWVzIHdpdGggZGlzcGxheTogXCJub25lXCIgaW4gRmlyZWZveCxcbiAgLy8gYnV0IEZpcmVmb3ggaXMga25vd24gdG8gc3VwcG9ydCBDU1MgY3VzdG9tIHByb3BlcnRpZXMgY29ycmVjdGx5LlxuICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93T2JqLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIGNvbnN0IGhhc1BzZXVkb1ZhckJ1ZyA9IGNvbXB1dGVkU3R5bGUgIT09IG51bGwgJiYgY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BTdHlsZSA9PT0gJ3NvbGlkJztcbiAgbm9kZS5yZW1vdmUoKTtcbiAgcmV0dXJuIGhhc1BzZXVkb1ZhckJ1Zztcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFXaW5kb3d9IHdpbmRvd09ialxuICogQHBhcmFtIHtib29sZWFuPX0gZm9yY2VSZWZyZXNoXG4gKiBAcmV0dXJuIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3dPYmosIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gIGxldCBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgaWYgKHR5cGVvZiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPT09ICdib29sZWFuJyAmJiAhZm9yY2VSZWZyZXNoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xuICB9XG5cbiAgY29uc3Qgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSB3aW5kb3dPYmouQ1NTICYmIHR5cGVvZiB3aW5kb3dPYmouQ1NTLnN1cHBvcnRzID09PSAnZnVuY3Rpb24nO1xuICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyA9IHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NDY2OVxuICAvLyBTZWU6IFJFQURNRSBzZWN0aW9uIG9uIFNhZmFyaVxuICBjb25zdCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMgPSAoXG4gICAgd2luZG93T2JqLkNTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgIHdpbmRvd09iai5DU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpXG4gICk7XG5cbiAgaWYgKGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgfHwgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzKSB7XG4gICAgc3VwcG9ydHNDc3NWYXJpYWJsZXMgPSAhZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1Zyh3aW5kb3dPYmopO1xuICB9IGVsc2Uge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzID0gZmFsc2U7XG4gIH1cblxuICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzO1xuICB9XG4gIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcztcbn1cblxuLy9cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBwYXNzaXZlIGV2ZW50IGxpc3RlbmVycywgYW5kIGlmIHNvLCB1c2UgdGhlbS5cbiAqIEBwYXJhbSB7IVdpbmRvdz19IGdsb2JhbE9ialxuICogQHBhcmFtIHtib29sZWFuPX0gZm9yY2VSZWZyZXNoXG4gKiBAcmV0dXJuIHtib29sZWFufCFFdmVudExpc3RlbmVyT3B0aW9uc31cbiAqL1xuZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiA9IHdpbmRvdywgZm9yY2VSZWZyZXNoID0gZmFsc2UpIHtcbiAgaWYgKHN1cHBvcnRzUGFzc2l2ZV8gPT09IHVuZGVmaW5lZCB8fCBmb3JjZVJlZnJlc2gpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgZ2xvYmFsT2JqLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCB7Z2V0IHBhc3NpdmUoKSB7XG4gICAgICAgIGlzU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkO1xuICAgICAgfX0pO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuXG4gICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkO1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZV9cbiAgICA/IC8qKiBAdHlwZSB7IUV2ZW50TGlzdGVuZXJPcHRpb25zfSAqLyAoe3Bhc3NpdmU6IHRydWV9KVxuICAgIDogZmFsc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHshT2JqZWN0fSBIVE1MRWxlbWVudFByb3RvdHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRNYXRjaGVzUHJvcGVydHkoSFRNTEVsZW1lbnRQcm90b3R5cGUpIHtcbiAgLyoqXG4gICAqIE9yZGVyIGlzIGltcG9ydGFudCBiZWNhdXNlIHdlIHJldHVybiB0aGUgZmlyc3QgZXhpc3RpbmcgbWV0aG9kIHdlIGZpbmQuXG4gICAqIERvIG5vdCBjaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBpdGVtcyBpbiB0aGUgYmVsb3cgYXJyYXkuXG4gICAqL1xuICBjb25zdCBtYXRjaGVzTWV0aG9kcyA9IFsnbWF0Y2hlcycsICd3ZWJraXRNYXRjaGVzU2VsZWN0b3InLCAnbXNNYXRjaGVzU2VsZWN0b3InXTtcbiAgbGV0IG1ldGhvZCA9ICdtYXRjaGVzJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaGVzTWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1hdGNoZXNNZXRob2QgPSBtYXRjaGVzTWV0aG9kc1tpXTtcbiAgICBpZiAobWF0Y2hlc01ldGhvZCBpbiBIVE1MRWxlbWVudFByb3RvdHlwZSkge1xuICAgICAgbWV0aG9kID0gbWF0Y2hlc01ldGhvZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXRob2Q7XG59XG5cbi8qKlxuICogQHBhcmFtIHshRXZlbnR9IGV2XG4gKiBAcGFyYW0ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19IHBhZ2VPZmZzZXRcbiAqIEBwYXJhbSB7IUNsaWVudFJlY3R9IGNsaWVudFJlY3RcbiAqIEByZXR1cm4ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19XG4gKi9cbmZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhldiwgcGFnZU9mZnNldCwgY2xpZW50UmVjdCkge1xuICBjb25zdCB7eCwgeX0gPSBwYWdlT2Zmc2V0O1xuICBjb25zdCBkb2N1bWVudFggPSB4ICsgY2xpZW50UmVjdC5sZWZ0O1xuICBjb25zdCBkb2N1bWVudFkgPSB5ICsgY2xpZW50UmVjdC50b3A7XG5cbiAgbGV0IG5vcm1hbGl6ZWRYO1xuICBsZXQgbm9ybWFsaXplZFk7XG4gIC8vIERldGVybWluZSB0b3VjaCBwb2ludCByZWxhdGl2ZSB0byB0aGUgcmlwcGxlIGNvbnRhaW5lci5cbiAgaWYgKGV2LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgIGV2ID0gLyoqIEB0eXBlIHshVG91Y2hFdmVudH0gKi8gKGV2KTtcbiAgICBub3JtYWxpemVkWCA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgIG5vcm1hbGl6ZWRZID0gZXYuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSBkb2N1bWVudFk7XG4gIH0gZWxzZSB7XG4gICAgZXYgPSAvKiogQHR5cGUgeyFNb3VzZUV2ZW50fSAqLyAoZXYpO1xuICAgIG5vcm1hbGl6ZWRYID0gZXYucGFnZVggLSBkb2N1bWVudFg7XG4gICAgbm9ybWFsaXplZFkgPSBldi5wYWdlWSAtIGRvY3VtZW50WTtcbiAgfVxuXG4gIHJldHVybiB7eDogbm9ybWFsaXplZFgsIHk6IG5vcm1hbGl6ZWRZfTtcbn1cblxuZXhwb3J0IHtzdXBwb3J0c0Nzc1ZhcmlhYmxlcywgYXBwbHlQYXNzaXZlLCBnZXRNYXRjaGVzUHJvcGVydHksIGdldE5vcm1hbGl6ZWRFdmVudENvb3Jkc307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IE1EQ0ZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgTURDUmlwcGxlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHtjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge2dldE5vcm1hbGl6ZWRFdmVudENvb3Jkc30gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICBpc0FjdGl2YXRlZDogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IChib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGFjdGl2YXRpb25FdmVudDogKCFFdmVudHx1bmRlZmluZWQpLFxuICogICBpc1Byb2dyYW1tYXRpYzogKGJvb2xlYW58dW5kZWZpbmVkKVxuICogfX1cbiAqL1xubGV0IEFjdGl2YXRpb25TdGF0ZVR5cGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgYWN0aXZhdGU6IChzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgZGVhY3RpdmF0ZTogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBmb2N1czogKHN0cmluZ3x1bmRlZmluZWQpLFxuICogICBibHVyOiAoc3RyaW5nfHVuZGVmaW5lZClcbiAqIH19XG4gKi9cbmxldCBMaXN0ZW5lckluZm9UeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGFjdGl2YXRlOiBmdW5jdGlvbighRXZlbnQpLFxuICogICBkZWFjdGl2YXRlOiBmdW5jdGlvbighRXZlbnQ9KSxcbiAqICAgZm9jdXM6IGZ1bmN0aW9uKCksXG4gKiAgIGJsdXI6IGZ1bmN0aW9uKClcbiAqIH19XG4gKi9cbmxldCBMaXN0ZW5lcnNUeXBlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIHg6IG51bWJlcixcbiAqICAgeTogbnVtYmVyXG4gKiB9fVxuICovXG5sZXQgUG9pbnRUeXBlO1xuXG4vLyBBY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIHRoZSByb290IGVsZW1lbnQgb2YgZWFjaCBpbnN0YW5jZSBmb3IgYWN0aXZhdGlvblxuY29uc3QgQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFsndG91Y2hzdGFydCcsICdwb2ludGVyZG93bicsICdtb3VzZWRvd24nLCAna2V5ZG93biddO1xuXG4vLyBEZWFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gZG9jdW1lbnRFbGVtZW50IHdoZW4gYSBwb2ludGVyLXJlbGF0ZWQgZG93biBldmVudCBvY2N1cnNcbmNvbnN0IFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gWyd0b3VjaGVuZCcsICdwb2ludGVydXAnLCAnbW91c2V1cCcsICdjb250ZXh0bWVudSddO1xuXG4vLyBUcmFja3MgYWN0aXZhdGlvbnMgdGhhdCBoYXZlIG9jY3VycmVkIG9uIHRoZSBjdXJyZW50IGZyYW1lLCB0byBhdm9pZCBzaW11bHRhbmVvdXMgbmVzdGVkIGFjdGl2YXRpb25zXG4vKiogQHR5cGUgeyFBcnJheTwhRXZlbnRUYXJnZXQ+fSAqL1xubGV0IGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcblxuLyoqXG4gKiBAZXh0ZW5kcyB7TURDRm91bmRhdGlvbjwhTURDUmlwcGxlQWRhcHRlcj59XG4gKi9cbmNsYXNzIE1EQ1JpcHBsZUZvdW5kYXRpb24gZXh0ZW5kcyBNRENGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBjc3NDbGFzc2VzKCkge1xuICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiBzdHJpbmdzO1xuICB9XG5cbiAgc3RhdGljIGdldCBudW1iZXJzKCkge1xuICAgIHJldHVybiBudW1iZXJzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0QWRhcHRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnJvd3NlclN1cHBvcnRzQ3NzVmFyczogKCkgPT4gLyogYm9vbGVhbiAtIGNhY2hlZCAqLyB7fSxcbiAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiAvKiBib29sZWFuICovIHt9LFxuICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IC8qIGJvb2xlYW4gKi8ge30sXG4gICAgICBhZGRDbGFzczogKC8qIGNsYXNzTmFtZTogc3RyaW5nICovKSA9PiB7fSxcbiAgICAgIHJlbW92ZUNsYXNzOiAoLyogY2xhc3NOYW1lOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgY29udGFpbnNFdmVudFRhcmdldDogKC8qIHRhcmdldDogIUV2ZW50VGFyZ2V0ICovKSA9PiB7fSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoLyogZXZ0VHlwZTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudExpc3RlbmVyICovKSA9PiB7fSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKC8qIGV2dFR5cGU6IHN0cmluZywgaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6ICgvKiBldnRUeXBlOiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoLyogaGFuZGxlcjogRXZlbnRMaXN0ZW5lciAqLykgPT4ge30sXG4gICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKC8qIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgKi8pID0+IHt9LFxuICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICgvKiB2YXJOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgKi8pID0+IHt9LFxuICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gLyogQ2xpZW50UmVjdCAqLyB7fSxcbiAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+IC8qIHt4OiBudW1iZXIsIHk6IG51bWJlcn0gKi8ge30sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXIpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKE1EQ1JpcHBsZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIsIGFkYXB0ZXIpKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7bnVtYmVyfSAqL1xuICAgIHRoaXMubGF5b3V0RnJhbWVfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUNsaWVudFJlY3R9ICovXG4gICAgdGhpcy5mcmFtZV8gPSAvKiogQHR5cGUgeyFDbGllbnRSZWN0fSAqLyAoe3dpZHRoOiAwLCBoZWlnaHQ6IDB9KTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5pbml0aWFsU2l6ZV8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5tYXhSYWRpdXNfID0gMDtcblxuICAgIC8qKiBAcHJpdmF0ZSB7ZnVuY3Rpb24oIUV2ZW50KX0gKi9cbiAgICB0aGlzLmFjdGl2YXRlSGFuZGxlcl8gPSAoZSkgPT4gdGhpcy5hY3RpdmF0ZV8oZSk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudD0pfSAqL1xuICAgIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfID0gKCkgPT4gdGhpcy5kZWFjdGl2YXRlXygpO1xuXG4gICAgLyoqIEBwcml2YXRlIHtmdW5jdGlvbighRXZlbnQ9KX0gKi9cbiAgICB0aGlzLmZvY3VzSGFuZGxlcl8gPSAoKSA9PiB0aGlzLmhhbmRsZUZvY3VzKCk7XG5cbiAgICAvKiogQHByaXZhdGUge2Z1bmN0aW9uKCFFdmVudD0pfSAqL1xuICAgIHRoaXMuYmx1ckhhbmRsZXJfID0gKCkgPT4gdGhpcy5oYW5kbGVCbHVyKCk7XG5cbiAgICAvKiogQHByaXZhdGUgeyFGdW5jdGlvbn0gKi9cbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXJfID0gKCkgPT4gdGhpcy5sYXlvdXQoKTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7e2xlZnQ6IG51bWJlciwgdG9wOm51bWJlcn19ICovXG4gICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICB9O1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5mZ1NjYWxlXyA9IDA7XG5cbiAgICAvKiogQHByaXZhdGUge251bWJlcn0gKi9cbiAgICB0aGlzLmFjdGl2YXRpb25UaW1lcl8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtudW1iZXJ9ICovXG4gICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuXG4gICAgLyoqIEBwcml2YXRlIHtib29sZWFufSAqL1xuICAgIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuXG4gICAgLyoqIEBwcml2YXRlIHshRnVuY3Rpb259ICovXG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18gPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSB0cnVlO1xuICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICB9O1xuXG4gICAgLyoqIEBwcml2YXRlIHshRXZlbnR8dW5kZWZpbmVkfSAqL1xuICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfO1xuICB9XG5cbiAgLyoqXG4gICAqIFdlIGNvbXB1dGUgdGhpcyBwcm9wZXJ0eSBzbyB0aGF0IHdlIGFyZSBub3QgcXVlcnlpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNsaWVudFxuICAgKiB1bnRpbCB0aGUgcG9pbnQgaW4gdGltZSB3aGVyZSB0aGUgZm91bmRhdGlvbiByZXF1ZXN0cyBpdC4gVGhpcyBwcmV2ZW50cyBzY2VuYXJpb3Mgd2hlcmVcbiAgICogY2xpZW50LXNpZGUgZmVhdHVyZS1kZXRlY3Rpb24gbWF5IGhhcHBlbiB0b28gZWFybHksIHN1Y2ggYXMgd2hlbiBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyXG4gICAqIGFuZCB0aGVuIGluaXRpYWxpemVkIGF0IG1vdW50IHRpbWUgb24gdGhlIGNsaWVudC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN1cHBvcnRzUHJlc3NSaXBwbGVfKCkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJfLmJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshQWN0aXZhdGlvblN0YXRlVHlwZX1cbiAgICovXG4gIGRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2YXRlZDogZmFsc2UsXG4gICAgICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogZmFsc2UsXG4gICAgICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IGZhbHNlLFxuICAgICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IGZhbHNlLFxuICAgICAgYWN0aXZhdGlvbkV2ZW50OiB1bmRlZmluZWQsXG4gICAgICBpc1Byb2dyYW1tYXRpYzogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBzdXBwb3J0c1ByZXNzUmlwcGxlID0gdGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpO1xuXG4gICAgdGhpcy5yZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSk7XG5cbiAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgY29uc3Qge1JPT1QsIFVOQk9VTkRFRH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFJPT1QpO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGVzIG5lZWQgbGF5b3V0IGxvZ2ljIGFwcGxpZWQgaW1tZWRpYXRlbHkgdG8gc2V0IGNvb3JkaW5hdGVzIGZvciBib3RoIHNoYWRlIGFuZCByaXBwbGVcbiAgICAgICAgICB0aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZhdGlvblRpbWVyXykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8pO1xuICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtST09ULCBVTkJPVU5ERUR9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhST09UKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB0aGlzLnJlbW92ZUNzc1ZhcnNfKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCk7XG4gICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSBzdXBwb3J0c1ByZXNzUmlwcGxlIFBhc3NlZCBmcm9tIGluaXQgdG8gc2F2ZSBhIHJlZHVuZGFudCBmdW5jdGlvbiBjYWxsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcih0eXBlLCB0aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhlKSB7XG4gICAgaWYgKGUudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIodHlwZSwgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCkge1xuICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgfSk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuXG4gICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgdGhpcy5hZGFwdGVyXy5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICB9XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpIHtcbiAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKHR5cGUsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICByZW1vdmVDc3NWYXJzXygpIHtcbiAgICBjb25zdCB7c3RyaW5nc30gPSBNRENSaXBwbGVGb3VuZGF0aW9uO1xuICAgIE9iamVjdC5rZXlzKHN0cmluZ3MpLmZvckVhY2goKGspID0+IHtcbiAgICAgIGlmIChrLmluZGV4T2YoJ1ZBUl8nKSA9PT0gMCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKHN0cmluZ3Nba10sIG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUV2ZW50PX0gZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWN0aXZhdGVfKGUpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VEaXNhYmxlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBdm9pZCByZWFjdGluZyB0byBmb2xsb3ctb24gZXZlbnRzIGZpcmVkIGJ5IHRvdWNoIGRldmljZSBhZnRlciBhbiBhbHJlYWR5LXByb2Nlc3NlZCB1c2VyIGludGVyYWN0aW9uXG4gICAgY29uc3QgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgPSB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgICBjb25zdCBpc1NhbWVJbnRlcmFjdGlvbiA9IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ICYmIGUgIT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c0FjdGl2YXRpb25FdmVudC50eXBlICE9PSBlLnR5cGU7XG4gICAgaWYgKGlzU2FtZUludGVyYWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPSBlID09PSB1bmRlZmluZWQ7XG4gICAgYWN0aXZhdGlvblN0YXRlLmFjdGl2YXRpb25FdmVudCA9IGU7XG4gICAgYWN0aXZhdGlvblN0YXRlLndhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA/IGZhbHNlIDogZSAhPT0gdW5kZWZpbmVkICYmIChcbiAgICAgIGUudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAncG9pbnRlcmRvd24nXG4gICAgKTtcblxuICAgIGNvbnN0IGhhc0FjdGl2YXRlZENoaWxkID0gZSAhPT0gdW5kZWZpbmVkICYmIGFjdGl2YXRlZFRhcmdldHMubGVuZ3RoID4gMCAmJiBhY3RpdmF0ZWRUYXJnZXRzLnNvbWUoXG4gICAgICAodGFyZ2V0KSA9PiB0aGlzLmFkYXB0ZXJfLmNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KSk7XG4gICAgaWYgKGhhc0FjdGl2YXRlZENoaWxkKSB7XG4gICAgICAvLyBJbW1lZGlhdGVseSByZXNldCBhY3RpdmF0aW9uIHN0YXRlLCB3aGlsZSBwcmVzZXJ2aW5nIGxvZ2ljIHRoYXQgcHJldmVudHMgdG91Y2ggZm9sbG93LW9uIGV2ZW50c1xuICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhY3RpdmF0ZWRUYXJnZXRzLnB1c2goLyoqIEB0eXBlIHshRXZlbnRUYXJnZXR9ICovIChlLnRhcmdldCkpO1xuICAgICAgdGhpcy5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhlKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGUpO1xuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIC8vIFJlc2V0IGFycmF5IG9uIG5leHQgZnJhbWUgYWZ0ZXIgdGhlIGN1cnJlbnQgZXZlbnQgaGFzIGhhZCBhIGNoYW5jZSB0byBidWJibGUgdG8gcHJldmVudCBhbmNlc3RvciByaXBwbGVzXG4gICAgICBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG5cbiAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlICYmIGUgIT09IHVuZGVmaW5lZCAmJiAoZS5rZXkgPT09ICcgJyB8fCBlLmtleUNvZGUgPT09IDMyKSkge1xuICAgICAgICAvLyBJZiBzcGFjZSB3YXMgcHJlc3NlZCwgdHJ5IGFnYWluIHdpdGhpbiBhbiByQUYgY2FsbCB0byBkZXRlY3QgOmFjdGl2ZSwgYmVjYXVzZSBkaWZmZXJlbnQgVUFzIHJlcG9ydFxuICAgICAgICAvLyBhY3RpdmUgc3RhdGVzIGluY29uc2lzdGVudGx5IHdoZW4gdGhleSdyZSBjYWxsZWQgd2l0aGluIGV2ZW50IGhhbmRsaW5nIGNvZGU6XG4gICAgICAgIC8vIC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjM1OTcxXG4gICAgICAgIC8vIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTI5Mzc0MVxuICAgICAgICAvLyBXZSB0cnkgZmlyc3Qgb3V0c2lkZSByQUYgdG8gc3VwcG9ydCBFZGdlLCB3aGljaCBkb2VzIG5vdCBleGhpYml0IHRoaXMgcHJvYmxlbSwgYnV0IHdpbGwgY3Jhc2ggaWYgYSBDU1NcbiAgICAgICAgLy8gdmFyaWFibGUgaXMgc2V0IHdpdGhpbiBhIHJBRiBjYWxsYmFjayBmb3IgYSBzdWJtaXQgYnV0dG9uIGludGVyYWN0aW9uICgjMjI0MSkuXG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZSk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgIC8vIFJlc2V0IGFjdGl2YXRpb24gc3RhdGUgaW1tZWRpYXRlbHkgaWYgZWxlbWVudCB3YXMgbm90IG1hZGUgYWN0aXZlLlxuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnQ9fSBlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhlKSB7XG4gICAgcmV0dXJuIChlICE9PSB1bmRlZmluZWQgJiYgZS50eXBlID09PSAna2V5ZG93bicpID8gdGhpcy5hZGFwdGVyXy5pc1N1cmZhY2VBY3RpdmUoKSA6IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRXZlbnQ9fSBldmVudCBPcHRpb25hbCBldmVudCBjb250YWluaW5nIHBvc2l0aW9uIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgYWN0aXZhdGUoZXZlbnQpIHtcbiAgICB0aGlzLmFjdGl2YXRlXyhldmVudCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgYW5pbWF0ZUFjdGl2YXRpb25fKCkge1xuICAgIGNvbnN0IHtWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCBWQVJfRkdfVFJBTlNMQVRFX0VORH0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3M7XG4gICAgY29uc3Qge0ZHX0RFQUNUSVZBVElPTiwgRkdfQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgY29uc3Qge0RFQUNUSVZBVElPTl9USU1FT1VUX01TfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycztcblxuICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG5cbiAgICBsZXQgdHJhbnNsYXRlU3RhcnQgPSAnJztcbiAgICBsZXQgdHJhbnNsYXRlRW5kID0gJyc7XG5cbiAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaXNVbmJvdW5kZWQoKSkge1xuICAgICAgY29uc3Qge3N0YXJ0UG9pbnQsIGVuZFBvaW50fSA9IHRoaXMuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpO1xuICAgICAgdHJhbnNsYXRlU3RhcnQgPSBgJHtzdGFydFBvaW50Lnh9cHgsICR7c3RhcnRQb2ludC55fXB4YDtcbiAgICAgIHRyYW5zbGF0ZUVuZCA9IGAke2VuZFBvaW50Lnh9cHgsICR7ZW5kUG9pbnQueX1weGA7XG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCB0cmFuc2xhdGVTdGFydCk7XG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX0VORCwgdHJhbnNsYXRlRW5kKTtcbiAgICAvLyBDYW5jZWwgYW55IG9uZ29pbmcgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5pbWF0aW9uc1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG5cbiAgICAvLyBGb3JjZSBsYXlvdXQgaW4gb3JkZXIgdG8gcmUtdHJpZ2dlciB0aGUgYW5pbWF0aW9uLlxuICAgIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmFjdGl2YXRpb25UaW1lckNhbGxiYWNrXygpLCBERUFDVElWQVRJT05fVElNRU9VVF9NUyk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHJldHVybiB7e3N0YXJ0UG9pbnQ6IFBvaW50VHlwZSwgZW5kUG9pbnQ6IFBvaW50VHlwZX19XG4gICAqL1xuICBnZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCkge1xuICAgIGNvbnN0IHthY3RpdmF0aW9uRXZlbnQsIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcn0gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG5cbiAgICBsZXQgc3RhcnRQb2ludDtcbiAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyKSB7XG4gICAgICBzdGFydFBvaW50ID0gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKFxuICAgICAgICAvKiogQHR5cGUgeyFFdmVudH0gKi8gKGFjdGl2YXRpb25FdmVudCksXG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZ2V0V2luZG93UGFnZU9mZnNldCgpLCB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgeDogdGhpcy5mcmFtZV8ud2lkdGggLyAyLFxuICAgICAgICB5OiB0aGlzLmZyYW1lXy5oZWlnaHQgLyAyLFxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gQ2VudGVyIHRoZSBlbGVtZW50IGFyb3VuZCB0aGUgc3RhcnQgcG9pbnQuXG4gICAgc3RhcnRQb2ludCA9IHtcbiAgICAgIHg6IHN0YXJ0UG9pbnQueCAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgeTogc3RhcnRQb2ludC55IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgfTtcblxuICAgIGNvbnN0IGVuZFBvaW50ID0ge1xuICAgICAgeDogKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgIHk6ICh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgIH07XG5cbiAgICByZXR1cm4ge3N0YXJ0UG9pbnQsIGVuZFBvaW50fTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKSB7XG4gICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJvdGggd2hlbiBhIHBvaW50aW5nIGRldmljZSBpcyByZWxlYXNlZCwgYW5kIHdoZW4gdGhlIGFjdGl2YXRpb24gYW5pbWF0aW9uIGVuZHMuXG4gICAgLy8gVGhlIGRlYWN0aXZhdGlvbiBhbmltYXRpb24gc2hvdWxkIG9ubHkgcnVuIGFmdGVyIGJvdGggb2YgdGhvc2Ugb2NjdXIuXG4gICAgY29uc3Qge0ZHX0RFQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgY29uc3Qge2hhc0RlYWN0aXZhdGlvblVYUnVuLCBpc0FjdGl2YXRlZH0gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgY29uc3QgYWN0aXZhdGlvbkhhc0VuZGVkID0gaGFzRGVhY3RpdmF0aW9uVVhSdW4gfHwgIWlzQWN0aXZhdGVkO1xuXG4gICAgaWYgKGFjdGl2YXRpb25IYXNFbmRlZCAmJiB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8pIHtcbiAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICB9LCBudW1iZXJzLkZHX0RFQUNUSVZBVElPTl9NUyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXygpIHtcbiAgICBjb25zdCB7RkdfQUNUSVZBVElPTn0gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXM7XG4gICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgfVxuXG4gIHJlc2V0QWN0aXZhdGlvblN0YXRlXygpIHtcbiAgICB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXy5hY3RpdmF0aW9uRXZlbnQ7XG4gICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgIC8vIFRvdWNoIGRldmljZXMgbWF5IGZpcmUgYWRkaXRpb25hbCBldmVudHMgZm9yIHRoZSBzYW1lIGludGVyYWN0aW9uIHdpdGhpbiBhIHNob3J0IHRpbWUuXG4gICAgLy8gU3RvcmUgdGhlIHByZXZpb3VzIGV2ZW50IHVudGlsIGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhhdCBzdWJzZXF1ZW50IGV2ZW50cyBhcmUgZm9yIG5ldyBpbnRlcmFjdGlvbnMuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHVuZGVmaW5lZCwgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlRBUF9ERUxBWV9NUyk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGRlYWN0aXZhdGVfKCkge1xuICAgIGNvbnN0IGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gc2NlbmFyaW9zIHN1Y2ggYXMgd2hlbiB5b3UgaGF2ZSBhIGtleXVwIGV2ZW50IHRoYXQgYmx1cnMgdGhlIGVsZW1lbnQuXG4gICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZSA9IC8qKiBAdHlwZSB7IUFjdGl2YXRpb25TdGF0ZVR5cGV9ICovIChPYmplY3QuYXNzaWduKHt9LCBhY3RpdmF0aW9uU3RhdGUpKTtcblxuICAgIGlmIChhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKSk7XG4gICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblN0YXRlXy5oYXNEZWFjdGl2YXRpb25VWFJ1biA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpO1xuICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmRlYWN0aXZhdGVfKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshQWN0aXZhdGlvblN0YXRlVHlwZX0gb3B0aW9uc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYW5pbWF0ZURlYWN0aXZhdGlvbl8oe3dhc0FjdGl2YXRlZEJ5UG9pbnRlciwgd2FzRWxlbWVudE1hZGVBY3RpdmV9KSB7XG4gICAgaWYgKHdhc0FjdGl2YXRlZEJ5UG9pbnRlciB8fCB3YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICB9XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0RnJhbWVfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICB0aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgbGF5b3V0SW50ZXJuYWxfKCkge1xuICAgIHRoaXMuZnJhbWVfID0gdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgY29uc3QgbWF4RGltID0gTWF0aC5tYXgodGhpcy5mcmFtZV8uaGVpZ2h0LCB0aGlzLmZyYW1lXy53aWR0aCk7XG5cbiAgICAvLyBTdXJmYWNlIGRpYW1ldGVyIGlzIHRyZWF0ZWQgZGlmZmVyZW50bHkgZm9yIHVuYm91bmRlZCB2cy4gYm91bmRlZCByaXBwbGVzLlxuICAgIC8vIFVuYm91bmRlZCByaXBwbGUgZGlhbWV0ZXIgaXMgY2FsY3VsYXRlZCBzbWFsbGVyIHNpbmNlIHRoZSBzdXJmYWNlIGlzIGV4cGVjdGVkIHRvIGFscmVhZHkgYmUgcGFkZGVkIGFwcHJvcHJpYXRlbHlcbiAgICAvLyB0byBleHRlbmQgdGhlIGhpdGJveCwgYW5kIHRoZSByaXBwbGUgaXMgZXhwZWN0ZWQgdG8gbWVldCB0aGUgZWRnZXMgb2YgdGhlIHBhZGRlZCBoaXRib3ggKHdoaWNoIGlzIHR5cGljYWxseVxuICAgIC8vIHNxdWFyZSkuIEJvdW5kZWQgcmlwcGxlcywgb24gdGhlIG90aGVyIGhhbmQsIGFyZSBmdWxseSBleHBlY3RlZCB0byBleHBhbmQgYmV5b25kIHRoZSBzdXJmYWNlJ3MgbG9uZ2VzdCBkaWFtZXRlclxuICAgIC8vIChjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBkaWFnb25hbCBwbHVzIGEgY29uc3RhbnQgcGFkZGluZyksIGFuZCBhcmUgY2xpcHBlZCBhdCB0aGUgc3VyZmFjZSdzIGJvcmRlciB2aWFcbiAgICAvLyBgb3ZlcmZsb3c6IGhpZGRlbmAuXG4gICAgY29uc3QgZ2V0Qm91bmRlZFJhZGl1cyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGh5cG90ZW51c2UgPSBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy5mcmFtZV8ud2lkdGgsIDIpICsgTWF0aC5wb3codGhpcy5mcmFtZV8uaGVpZ2h0LCAyKSk7XG4gICAgICByZXR1cm4gaHlwb3RlbnVzZSArIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5QQURESU5HO1xuICAgIH07XG5cbiAgICB0aGlzLm1heFJhZGl1c18gPSB0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkgPyBtYXhEaW0gOiBnZXRCb3VuZGVkUmFkaXVzKCk7XG5cbiAgICAvLyBSaXBwbGUgaXMgc2l6ZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgbGFyZ2VzdCBkaW1lbnNpb24gb2YgdGhlIHN1cmZhY2UsIHRoZW4gc2NhbGVzIHVwIHVzaW5nIGEgQ1NTIHNjYWxlIHRyYW5zZm9ybVxuICAgIHRoaXMuaW5pdGlhbFNpemVfID0gTWF0aC5mbG9vcihtYXhEaW0gKiBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuSU5JVElBTF9PUklHSU5fU0NBTEUpO1xuICAgIHRoaXMuZmdTY2FsZV8gPSB0aGlzLm1heFJhZGl1c18gLyB0aGlzLmluaXRpYWxTaXplXztcblxuICAgIHRoaXMudXBkYXRlTGF5b3V0Q3NzVmFyc18oKTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICB1cGRhdGVMYXlvdXRDc3NWYXJzXygpIHtcbiAgICBjb25zdCB7XG4gICAgICBWQVJfRkdfU0laRSwgVkFSX0xFRlQsIFZBUl9UT1AsIFZBUl9GR19TQ0FMRSxcbiAgICB9ID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuXG4gICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0laRSwgYCR7dGhpcy5pbml0aWFsU2l6ZV99cHhgKTtcbiAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TQ0FMRSwgdGhpcy5mZ1NjYWxlXyk7XG5cbiAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICAgIGxlZnQ6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgIHRvcDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9MRUZULCBgJHt0aGlzLnVuYm91bmRlZENvb3Jkc18ubGVmdH1weGApO1xuICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfVE9QLCBgJHt0aGlzLnVuYm91bmRlZENvb3Jkc18udG9wfXB4YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwYXJhbSB7Ym9vbGVhbn0gdW5ib3VuZGVkICovXG4gIHNldFVuYm91bmRlZCh1bmJvdW5kZWQpIHtcbiAgICBjb25zdCB7VU5CT1VOREVEfSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcztcbiAgICBpZiAodW5ib3VuZGVkKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGb2N1cygpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpKTtcbiAgfVxuXG4gIGhhbmRsZUJsdXIoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+XG4gICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDUmlwcGxlRm91bmRhdGlvbjtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTURDQ29tcG9uZW50IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgTURDUmlwcGxlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IE1EQ1JpcHBsZUZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBNRENDb21wb25lbnQ8IU1EQ1JpcHBsZUZvdW5kYXRpb24+XG4gKi9cbmNsYXNzIE1EQ1JpcHBsZSBleHRlbmRzIE1EQ0NvbXBvbmVudCB7XG4gIC8qKiBAcGFyYW0gey4uLj99IGFyZ3MgKi9cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKiBAcHJpdmF0ZSB7Ym9vbGVhbn0gKi9cbiAgICB0aGlzLnVuYm91bmRlZF87XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgKiBAcGFyYW0ge3tpc1VuYm91bmRlZDogKGJvb2xlYW58dW5kZWZpbmVkKX09fSBvcHRpb25zXG4gICAqIEByZXR1cm4geyFNRENSaXBwbGV9XG4gICAqL1xuICBzdGF0aWMgYXR0YWNoVG8ocm9vdCwge2lzVW5ib3VuZGVkID0gdW5kZWZpbmVkfSA9IHt9KSB7XG4gICAgY29uc3QgcmlwcGxlID0gbmV3IE1EQ1JpcHBsZShyb290KTtcbiAgICAvLyBPbmx5IG92ZXJyaWRlIHVuYm91bmRlZCBiZWhhdmlvciBpZiBvcHRpb24gaXMgZXhwbGljaXRseSBzcGVjaWZpZWRcbiAgICBpZiAoaXNVbmJvdW5kZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmlwcGxlLnVuYm91bmRlZCA9IC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi8gKGlzVW5ib3VuZGVkKTtcbiAgICB9XG4gICAgcmV0dXJuIHJpcHBsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFSaXBwbGVDYXBhYmxlU3VyZmFjZX0gaW5zdGFuY2VcbiAgICogQHJldHVybiB7IU1EQ1JpcHBsZUFkYXB0ZXJ9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlQWRhcHRlcihpbnN0YW5jZSkge1xuICAgIGNvbnN0IE1BVENIRVMgPSB1dGlsLmdldE1hdGNoZXNQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IHV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KSxcbiAgICAgIGlzVW5ib3VuZGVkOiAoKSA9PiBpbnN0YW5jZS51bmJvdW5kZWQsXG4gICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IGluc3RhbmNlLnJvb3RfW01BVENIRVNdKCc6YWN0aXZlJyksXG4gICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4gaW5zdGFuY2UuZGlzYWJsZWQsXG4gICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICh0YXJnZXQpID0+IGluc3RhbmNlLnJvb3RfLmNvbnRhaW5zKHRhcmdldCksXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGluc3RhbmNlLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSksXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgaW5zdGFuY2Uucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKSxcbiAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpLFxuICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IChoYW5kbGVyKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKHZhck5hbWUsIHZhbHVlKSA9PiBpbnN0YW5jZS5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSksXG4gICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiBpbnN0YW5jZS5yb290Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+ICh7eDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXR9KSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG4gIGdldCB1bmJvdW5kZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5ib3VuZGVkXztcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge2Jvb2xlYW59IHVuYm91bmRlZCAqL1xuICBzZXQgdW5ib3VuZGVkKHVuYm91bmRlZCkge1xuICAgIHRoaXMudW5ib3VuZGVkXyA9IEJvb2xlYW4odW5ib3VuZGVkKTtcbiAgICB0aGlzLnNldFVuYm91bmRlZF8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zdXJlIENvbXBpbGVyIHRocm93cyBhbiBhY2Nlc3MgY29udHJvbCBlcnJvciB3aGVuIGRpcmVjdGx5IGFjY2Vzc2luZyBhXG4gICAqIHByb3RlY3RlZCBvciBwcml2YXRlIHByb3BlcnR5IGluc2lkZSBhIGdldHRlci9zZXR0ZXIsIGxpa2UgdW5ib3VuZGVkIGFib3ZlLlxuICAgKiBCeSBhY2Nlc3NpbmcgdGhlIHByb3RlY3RlZCBwcm9wZXJ0eSBpbnNpZGUgYSBtZXRob2QsIHdlIHNvbHZlIHRoYXQgcHJvYmxlbS5cbiAgICogVGhhdCdzIHdoeSB0aGlzIGZ1bmN0aW9uIGV4aXN0cy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHNldFVuYm91bmRlZF8oKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVbmJvdW5kZWQodGhpcy51bmJvdW5kZWRfKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuZm91bmRhdGlvbl8uYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5kZWFjdGl2YXRlKCk7XG4gIH1cblxuICBsYXlvdXQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uXy5sYXlvdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshTURDUmlwcGxlRm91bmRhdGlvbn1cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBnZXREZWZhdWx0Rm91bmRhdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIodGhpcykpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBpbml0aWFsU3luY1dpdGhET00oKSB7XG4gICAgdGhpcy51bmJvdW5kZWQgPSAnbWRjUmlwcGxlSXNVbmJvdW5kZWQnIGluIHRoaXMucm9vdF8uZGF0YXNldDtcbiAgfVxufVxuXG4vKipcbiAqIFNlZSBNYXRlcmlhbCBEZXNpZ24gc3BlYyBmb3IgbW9yZSBkZXRhaWxzIG9uIHdoZW4gdG8gdXNlIHJpcHBsZXMuXG4gKiBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvbW90aW9uL2Nob3Jlb2dyYXBoeS5odG1sI2Nob3Jlb2dyYXBoeS1jcmVhdGlvblxuICogQHJlY29yZFxuICovXG5jbGFzcyBSaXBwbGVDYXBhYmxlU3VyZmFjZSB7fVxuXG4vKiogQHByb3RlY3RlZCB7IUVsZW1lbnR9ICovXG5SaXBwbGVDYXBhYmxlU3VyZmFjZS5wcm90b3R5cGUucm9vdF87XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHJpcHBsZSBibGVlZHMgb3V0IG9mIHRoZSBib3VuZHMgb2YgdGhlIGVsZW1lbnQuXG4gKiBAdHlwZSB7Ym9vbGVhbnx1bmRlZmluZWR9XG4gKi9cblJpcHBsZUNhcGFibGVTdXJmYWNlLnByb3RvdHlwZS51bmJvdW5kZWQ7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIHJpcHBsZSBpcyBhdHRhY2hlZCB0byBhIGRpc2FibGVkIGNvbXBvbmVudC5cbiAqIEB0eXBlIHtib29sZWFufHVuZGVmaW5lZH1cbiAqL1xuUmlwcGxlQ2FwYWJsZVN1cmZhY2UucHJvdG90eXBlLmRpc2FibGVkO1xuXG5leHBvcnQge01EQ1JpcHBsZSwgTURDUmlwcGxlRm91bmRhdGlvbiwgUmlwcGxlQ2FwYWJsZVN1cmZhY2UsIHV0aWx9O1xuIiwiaW1wb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvaW5kZXgnXG5pbXBvcnQge1xuICBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyxcbiAgZ2V0TWF0Y2hlc1Byb3BlcnR5LFxuICBhcHBseVBhc3NpdmVcbn0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS91dGlsJ1xuXG5leHBvcnQgY2xhc3MgUmlwcGxlQmFzZSBleHRlbmRzIE1EQ1JpcHBsZUZvdW5kYXRpb24ge1xuICBzdGF0aWMgZ2V0IE1BVENIRVMoKSB7XG4gICAgLyogZ2xvYmFsIEhUTUxFbGVtZW50ICovXG4gICAgcmV0dXJuIChcbiAgICAgIFJpcHBsZUJhc2UuX21hdGNoZXMgfHxcbiAgICAgIChSaXBwbGVCYXNlLl9tYXRjaGVzID0gZ2V0TWF0Y2hlc1Byb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSkpXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGlzU3VyZmFjZUFjdGl2ZShyZWYpIHtcbiAgICByZXR1cm4gcmVmW1JpcHBsZUJhc2UuTUFUQ0hFU10oJzphY3RpdmUnKVxuICB9XG5cbiAgY29uc3RydWN0b3Iodm0sIG9wdGlvbnMpIHtcbiAgICBzdXBlcihcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uJGVsW1JpcHBsZUJhc2UuTUFUQ0hFU10oJzphY3RpdmUnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS5kaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2bS4kc2V0KHZtLmNsYXNzZXMsIGNsYXNzTmFtZSwgdHJ1ZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdm0uJGRlbGV0ZSh2bS5jbGFzc2VzLCBjbGFzc05hbWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiB0YXJnZXQgPT4gdm0uJGVsLmNvbnRhaW5zKHRhcmdldCksXG4gICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHZtLiRlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB2bS4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6ICh2YXJOYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdm0uJHNldCh2bS5zdHlsZXMsIHZhck5hbWUsIHZhbHVlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgUmlwcGxlTWl4aW4gPSB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgdGhpcy5yaXBwbGUuaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5yaXBwbGUuZGVzdHJveSgpXG4gIH1cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPGN1c3RvbS1lbGVtZW50IFxuICAgIDp0YWc9XCJ0YWdcIiBcbiAgICA6Y2xhc3Nlcz1cImNsYXNzZXNcIlxuICAgIDpzdHlsZXM9XCJzdHlsZXNcIiBcbiAgICBjbGFzcz1cIm1kYy1yaXBwbGVcIj5cbiAgICA8c2xvdCAvPlxuICA8L2N1c3RvbS1lbGVtZW50PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IEN1c3RvbUVsZW1lbnRNaXhpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgeyBSaXBwbGVNaXhpbiB9IGZyb20gJy4vbWRjLXJpcHBsZS1iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtcmlwcGxlJyxcbiAgbWl4aW5zOiBbQ3VzdG9tRWxlbWVudE1peGluLCBSaXBwbGVNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgdGFnOiBTdHJpbmdcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxsaVxuICAgIDpjbGFzcz1cIltjbGFzc2VzLCBpdGVtQ2xhc3Nlc11cIlxuICAgIDpzdHlsZT1cInN0eWxlc1wiXG4gICAgOnRhYmluZGV4PVwiaXNJbnRlcmFjdGl2ZSA/ICcwJyA6IHVuZGVmaW5lZFwiXG4gICAgY2xhc3M9XCJtZGMtbGlzdC1pdGVtXCJcbiAgICB2LW9uPVwiaXNJbnRlcmFjdGl2ZSA/ICRsaXN0ZW5lcnMgOiB7fVwiXG4gID5cbiAgICA8IS0tIDxzcGFuIHYtaWY9XCJoYXNTdGFydERldGFpbFwiIGNsYXNzPVwibWRjLWxpc3QtaXRlbV9fZ3JhcGhpY1wiPiAtLT5cbiAgICA8c2xvdCBuYW1lPVwic3RhcnQtZGV0YWlsXCIgLz5cbiAgICA8IS0tIDwvc3Bhbj4gLS0+XG5cbiAgICA8c3BhbiBjbGFzcz1cIm1kYy1saXN0LWl0ZW1fX3RleHRcIiB2LWlmPVwiaGFzU2Vjb25kYXJ5XCJcbiAgICAgID48c3BhbiBjbGFzcz1cIm1kYy1saXN0LWl0ZW1fX3ByaW1hcnktdGV4dFwiPiA8c2xvdCAvPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibWRjLWxpc3QtaXRlbV9fc2Vjb25kYXJ5LXRleHRcIiB2LWlmPVwiaGFzU2Vjb25kYXJ5XCI+XG4gICAgICAgIDxzbG90IG5hbWU9XCJzZWNvbmRhcnlcIiAvPlxuICAgICAgPC9zcGFuPlxuICAgIDwvc3Bhbj5cblxuICAgIDxzcGFuIGNsYXNzPVwibWRjLWxpc3QtaXRlbV9fdGV4dFwiIHYtZWxzZT4gPHNsb3QgLz4gPC9zcGFuPlxuXG4gICAgPCEtLSA8c3BhbiB2LWlmPVwiaGFzRW5kRGV0YWlsXCIgY2xhc3M9XCJtZGMtbGlzdC1pdGVtX19tZXRhXCI+IC0tPlxuICAgIDxzbG90IG5hbWU9XCJlbmQtZGV0YWlsXCIgLz5cbiAgICA8IS0tIDwvc3Bhbj4gLS0+XG4gIDwvbGk+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgUmlwcGxlQmFzZSB9IGZyb20gJy4uL3JpcHBsZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWxpc3QtaXRlbScsXG4gIGluamVjdDogWydtZGNMaXN0J10sXG4gIHByb3BzOiB7XG4gICAgc2VsZWN0ZWQ6IEJvb2xlYW4sXG4gICAgYWN0aXZhdGVkOiBCb29sZWFuXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpdGVtQ2xhc3NlcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdtZGMtbGlzdC1pdGVtLS1zZWxlY3RlZCc6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICAgICdtZGMtbGlzdC1pdGVtLS1hY3RpdmF0ZWQnOiB0aGlzLmFjdGl2YXRlZFxuICAgICAgfVxuICAgIH0sXG4gICAgaXNJbnRlcmFjdGl2ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1kY0xpc3QgJiYgdGhpcy5tZGNMaXN0LmludGVyYWN0aXZlXG4gICAgfSxcbiAgICBoYXNTZWNvbmRhcnkoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kc2xvdHNbJ3NlY29uZGFyeSddICYmICh0aGlzLm1kY0xpc3QgJiYgdGhpcy5tZGNMaXN0LnR3b0xpbmUpXG4gICAgfSxcbiAgICBoYXNFbmREZXRhaWwoKSB7XG4gICAgICByZXR1cm4gISF0aGlzLiRzbG90c1snZW5kLWRldGFpbCddXG4gICAgfSxcbiAgICBoYXNTdGFydERldGFpbCgpIHtcbiAgICAgIHJldHVybiAhIXRoaXMuJHNsb3RzWydzdGFydC1kZXRhaWwnXVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBpc0ludGVyYWN0aXZlKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hZGRSaXBwbGUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVSaXBwbGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmlzSW50ZXJhY3RpdmUgJiYgdGhpcy5hZGRSaXBwbGUoKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMucmVtb3ZlUmlwcGxlKClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFkZFJpcHBsZSgpIHtcbiAgICAgIGlmICghdGhpcy5yaXBwbGUpIHtcbiAgICAgICAgbGV0IHJpcHBsZSA9IG5ldyBSaXBwbGVCYXNlKHRoaXMpXG4gICAgICAgIHJpcHBsZS5pbml0KClcbiAgICAgICAgdGhpcy5yaXBwbGUgPSByaXBwbGVcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZVJpcHBsZSgpIHtcbiAgICAgIGlmICh0aGlzLnJpcHBsZSkge1xuICAgICAgICBsZXQgcmlwcGxlID0gdGhpcy5yaXBwbGVcbiAgICAgICAgdGhpcy5yaXBwbGUgPSBudWxsXG4gICAgICAgIHJpcHBsZS5kZXN0cm95KClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8bGkgXG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiIFxuICAgIHJvbGU9XCJzZXBhcmF0b3JcIiBcbiAgICBjbGFzcz1cIm1kYy1saXN0LWRpdmlkZXJcIi8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWxpc3QtZGl2aWRlcicsXG4gIHByb3BzOiB7XG4gICAgaW5zZXQ6IEJvb2xlYW4sXG4gICAgcGFkZGVkOiBCb29sZWFuXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdtZGMtbGlzdC1kaXZpZGVyLS1pbnNldCc6IHRoaXMuaW5zZXQsXG4gICAgICAgICdtZGMtbGlzdC1kaXZpZGVyLS1wYWRkZWQnOiB0aGlzLnBhZGRlZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtZGMtbGlzdC1ncm91cFwiPjxzbG90Lz48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtbGlzdC1ncm91cCdcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8aDMgY2xhc3M9XCJtZGMtbGlzdC1ncm91cC1oZWFkZXIgbWRjLWxpc3QtZ3JvdXBfX3N1YmhlYWRlclwiPjxzbG90Lz48L2gzPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1saXN0LWdyb3VwLWhlYWRlcidcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8aHIgY2xhc3M9XCJtZGMtbGlzdC1ncm91cC1kaXZpZGVyIG1kYy1saXN0LWRpdmlkZXJcIj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtbGlzdC1ncm91cC1kaXZpZGVyJ1xufVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBtZGNMaXN0IGZyb20gJy4vbWRjLWxpc3QudnVlJ1xuaW1wb3J0IG1kY0xpc3RJdGVtIGZyb20gJy4vbWRjLWxpc3QtaXRlbS52dWUnXG5pbXBvcnQgbWRjTGlzdERpdmlkZXIgZnJvbSAnLi9tZGMtbGlzdC1kaXZpZGVyLnZ1ZSdcbmltcG9ydCBtZGNMaXN0R3JvdXAgZnJvbSAnLi9tZGMtbGlzdC1ncm91cC52dWUnXG5pbXBvcnQgbWRjTGlzdEdyb3VwSGVhZGVyIGZyb20gJy4vbWRjLWxpc3QtZ3JvdXAtaGVhZGVyLnZ1ZSdcbmltcG9ydCBtZGNMaXN0R3JvdXBEaXZpZGVyIGZyb20gJy4vbWRjLWxpc3QtZ3JvdXAtZGl2aWRlci52dWUnXG5cbmV4cG9ydCB7XG4gIG1kY0xpc3QsXG4gIG1kY0xpc3RJdGVtLFxuICBtZGNMaXN0RGl2aWRlcixcbiAgbWRjTGlzdEdyb3VwLFxuICBtZGNMaXN0R3JvdXBIZWFkZXIsXG4gIG1kY0xpc3RHcm91cERpdmlkZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY0xpc3QsXG4gIG1kY0xpc3RJdGVtLFxuICBtZGNMaXN0RGl2aWRlcixcbiAgbWRjTGlzdEdyb3VwLFxuICBtZGNMaXN0R3JvdXBIZWFkZXIsXG4gIG1kY0xpc3RHcm91cERpdmlkZXJcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJDdXN0b21FbGVtZW50IiwiZnVuY3Rpb25hbCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwicHJvcHMiLCJpcyIsInRhZyIsImRhdGEiLCJjaGlsZHJlbiIsIkN1c3RvbUVsZW1lbnRNaXhpbiIsInNjb3BlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJNRENGb3VuZGF0aW9uIiwiYWRhcHRlciIsImFkYXB0ZXJfIiwiTURDTGlzdEFkYXB0ZXIiLCJpbmRleCIsImF0dHJpYnV0ZSIsInZhbHVlIiwiY2xhc3NOYW1lIiwibGlzdEl0ZW1JbmRleCIsInRhYkluZGV4VmFsdWUiLCJlbGUiLCJpc0NoZWNrZWQiLCJjc3NDbGFzc2VzIiwiUk9PVCIsIkxJU1RfSVRFTV9DTEFTUyIsIkxJU1RfSVRFTV9TRUxFQ1RFRF9DTEFTUyIsIkxJU1RfSVRFTV9BQ1RJVkFURURfQ0xBU1MiLCJzdHJpbmdzIiwiQVJJQV9PUklFTlRBVElPTiIsIkFSSUFfT1JJRU5UQVRJT05fSE9SSVpPTlRBTCIsIkFSSUFfU0VMRUNURUQiLCJBUklBX0NIRUNLRUQiLCJBUklBX0NIRUNLRURfUkFESU9fU0VMRUNUT1IiLCJBUklBX1JPTEVfQ0hFQ0tCT1hfU0VMRUNUT1IiLCJBUklBX0NIRUNLRURfQ0hFQ0tCT1hfU0VMRUNUT1IiLCJSQURJT19TRUxFQ1RPUiIsIkNIRUNLQk9YX1NFTEVDVE9SIiwiQ0hFQ0tCT1hfUkFESU9fU0VMRUNUT1IiLCJDSElMRF9FTEVNRU5UU19UT19UT0dHTEVfVEFCSU5ERVgiLCJGT0NVU0FCTEVfQ0hJTERfRUxFTUVOVFMiLCJFTkFCTEVEX0lURU1TX1NFTEVDVE9SIiwiRUxFTUVOVFNfS0VZX0FMTE9XRURfSU4iLCJNRENMaXN0Rm91bmRhdGlvbiIsImdldExpc3RJdGVtQ291bnQiLCJnZXRGb2N1c2VkRWxlbWVudEluZGV4Iiwic2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4IiwicmVtb3ZlQXR0cmlidXRlRm9yRWxlbWVudEluZGV4IiwiYWRkQ2xhc3NGb3JFbGVtZW50SW5kZXgiLCJyZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleCIsImZvY3VzSXRlbUF0SW5kZXgiLCJzZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW4iLCJmb2xsb3dIcmVmIiwiaGFzUmFkaW9BdEluZGV4IiwiaGFzQ2hlY2tib3hBdEluZGV4IiwiaXNDaGVja2JveENoZWNrZWRBdEluZGV4Iiwic2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXgiLCJpc0ZvY3VzSW5zaWRlTGlzdCIsImRlZmF1bHRBZGFwdGVyIiwid3JhcEZvY3VzXyIsImlzVmVydGljYWxfIiwiaXNTaW5nbGVTZWxlY3Rpb25MaXN0XyIsInNlbGVjdGVkSW5kZXhfIiwiZm9jdXNlZEl0ZW1JbmRleF8iLCJ1c2VBY3RpdmF0ZWRDbGFzc18iLCJpc0NoZWNrYm94TGlzdF8iLCJpc1JhZGlvTGlzdF8iLCJ1c2VBY3RpdmF0ZWQiLCJpc0luZGV4VmFsaWRfIiwic2V0Q2hlY2tib3hBdEluZGV4XyIsInNldFJhZGlvQXRJbmRleF8iLCJzZXRTaW5nbGVTZWxlY3Rpb25BdEluZGV4XyIsImV2dCIsInNldFRpbWVvdXQiLCJzZXRUYWJpbmRleFRvRmlyc3RTZWxlY3RlZEl0ZW1fIiwiaXNSb290TGlzdEl0ZW0iLCJhcnJvd0xlZnQiLCJrZXlDb2RlIiwiYXJyb3dVcCIsImFycm93UmlnaHQiLCJhcnJvd0Rvd24iLCJpc0hvbWUiLCJpc0VuZCIsImlzRW50ZXIiLCJpc1NwYWNlIiwiY3VycmVudEluZGV4IiwibmV4dEluZGV4IiwicHJldmVudERlZmF1bHRFdmVudF8iLCJmb2N1c05leHRFbGVtZW50IiwiZm9jdXNQcmV2RWxlbWVudCIsImZvY3VzRmlyc3RFbGVtZW50IiwiZm9jdXNMYXN0RWxlbWVudCIsImlzU2VsZWN0YWJsZUxpc3RfIiwic2V0U2VsZWN0ZWRJbmRleE9uQWN0aW9uXyIsInNldFRhYmluZGV4QXRJbmRleF8iLCJ0b2dnbGVDaGVja2JveCIsInRhZ05hbWUiLCJ0YXJnZXQiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJwcmV2ZW50RGVmYXVsdCIsImNvdW50IiwicHJldkluZGV4IiwibGFzdEluZGV4Iiwic2VsZWN0ZWRDbGFzc05hbWUiLCJpIiwidGFyZ2V0SW5kZXgiLCJBcnJheSIsImxlbmd0aCIsInJlZHVjZSIsIm1pbkluZGV4IiwibWluIiwiRXJyb3IiLCJzb21lIiwiaXNJbmRleEluUmFuZ2VfIiwibGlzdFNpemUiLCJ0b2dnbGVDaGVja2JveEF0SW5kZXhfIiwic2V0U2VsZWN0ZWRJbmRleCIsInB1c2giLCJmaWx0ZXIiLCJtYXRjaGVzIiwiZWxlbWVudCIsInNlbGVjdG9yIiwibmF0aXZlTWF0Y2hlcyIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiY2FsbCIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsImNvbXBpbGVkVGVtcGxhdGUiLCJpbmplY3RTdHlsZSIsImRlZmF1bHRFeHBvcnQiLCJzY29wZUlkIiwiaXNGdW5jdGlvbmFsVGVtcGxhdGUiLCJtb2R1bGVJZGVudGlmaWVyIiwiaXNTaGFkb3dNb2RlIiwiY3JlYXRlSW5qZWN0b3IiLCJjcmVhdGVJbmplY3RvclNTUiIsImNyZWF0ZUluamVjdG9yU2hhZG93Iiwib3B0aW9ucyIsInN0YXRpY1JlbmRlckZucyIsIl9jb21waWxlZCIsIl9zY29wZUlkIiwiaG9vayIsIiR2bm9kZSIsInNzckNvbnRleHQiLCJwYXJlbnQiLCJfX1ZVRV9TU1JfQ09OVEVYVF9fIiwiX3JlZ2lzdGVyZWRDb21wb25lbnRzIiwiYWRkIiwiX3NzclJlZ2lzdGVyIiwiJHJvb3QiLCIkb3B0aW9ucyIsInNoYWRvd1Jvb3QiLCJvcmlnaW5hbFJlbmRlciIsInJlbmRlcldpdGhTdHlsZUluamVjdGlvbiIsImgiLCJleGlzdGluZyIsImJlZm9yZUNyZWF0ZSIsImNvbmNhdCIsIk1EQ0NvbXBvbmVudCIsInJvb3QiLCJmb3VuZGF0aW9uIiwidW5kZWZpbmVkIiwicm9vdF8iLCJhcmdzIiwiaW5pdGlhbGl6ZSIsImZvdW5kYXRpb25fIiwiZ2V0RGVmYXVsdEZvdW5kYXRpb24iLCJpbml0IiwiaW5pdGlhbFN5bmNXaXRoRE9NIiwiZGVzdHJveSIsImV2dFR5cGUiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldnREYXRhIiwic2hvdWxkQnViYmxlIiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJNRENSaXBwbGVBZGFwdGVyIiwidmFyTmFtZSIsIlVOQk9VTkRFRCIsIkJHX0ZPQ1VTRUQiLCJGR19BQ1RJVkFUSU9OIiwiRkdfREVBQ1RJVkFUSU9OIiwiVkFSX0xFRlQiLCJWQVJfVE9QIiwiVkFSX0ZHX1NJWkUiLCJWQVJfRkdfU0NBTEUiLCJWQVJfRkdfVFJBTlNMQVRFX1NUQVJUIiwiVkFSX0ZHX1RSQU5TTEFURV9FTkQiLCJudW1iZXJzIiwiUEFERElORyIsIklOSVRJQUxfT1JJR0lOX1NDQUxFIiwiREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMiLCJGR19ERUFDVElWQVRJT05fTVMiLCJUQVBfREVMQVlfTVMiLCJzdXBwb3J0c0Nzc1ZhcmlhYmxlc18iLCJzdXBwb3J0c1Bhc3NpdmVfIiwiZGV0ZWN0RWRnZVBzZXVkb1ZhckJ1ZyIsIndpbmRvd09iaiIsIm5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImhhc1BzZXVkb1ZhckJ1ZyIsImJvcmRlclRvcFN0eWxlIiwicmVtb3ZlIiwic3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJmb3JjZVJlZnJlc2giLCJzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCIsIkNTUyIsInN1cHBvcnRzIiwiZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyIsIndlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyIsImFwcGx5UGFzc2l2ZSIsImdsb2JhbE9iaiIsImlzU3VwcG9ydGVkIiwicGFzc2l2ZSIsImUiLCJnZXRNYXRjaGVzUHJvcGVydHkiLCJIVE1MRWxlbWVudFByb3RvdHlwZSIsIm1hdGNoZXNNZXRob2RzIiwibWV0aG9kIiwibWF0Y2hlc01ldGhvZCIsImdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyIsImV2IiwicGFnZU9mZnNldCIsImNsaWVudFJlY3QiLCJ4IiwieSIsImRvY3VtZW50WCIsImxlZnQiLCJkb2N1bWVudFkiLCJ0b3AiLCJub3JtYWxpemVkWCIsIm5vcm1hbGl6ZWRZIiwidHlwZSIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsIkFDVElWQVRJT05fRVZFTlRfVFlQRVMiLCJQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyIsImFjdGl2YXRlZFRhcmdldHMiLCJNRENSaXBwbGVGb3VuZGF0aW9uIiwiYnJvd3NlclN1cHBvcnRzQ3NzVmFycyIsImlzVW5ib3VuZGVkIiwiaXNTdXJmYWNlQWN0aXZlIiwiaXNTdXJmYWNlRGlzYWJsZWQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiY29udGFpbnNFdmVudFRhcmdldCIsInJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyIiwiZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZWdpc3RlclJlc2l6ZUhhbmRsZXIiLCJkZXJlZ2lzdGVyUmVzaXplSGFuZGxlciIsInVwZGF0ZUNzc1ZhcmlhYmxlIiwiY29tcHV0ZUJvdW5kaW5nUmVjdCIsImdldFdpbmRvd1BhZ2VPZmZzZXQiLCJsYXlvdXRGcmFtZV8iLCJmcmFtZV8iLCJ3aWR0aCIsImhlaWdodCIsImFjdGl2YXRpb25TdGF0ZV8iLCJkZWZhdWx0QWN0aXZhdGlvblN0YXRlXyIsImluaXRpYWxTaXplXyIsIm1heFJhZGl1c18iLCJhY3RpdmF0ZUhhbmRsZXJfIiwiYWN0aXZhdGVfIiwiZGVhY3RpdmF0ZUhhbmRsZXJfIiwiZGVhY3RpdmF0ZV8iLCJmb2N1c0hhbmRsZXJfIiwiaGFuZGxlRm9jdXMiLCJibHVySGFuZGxlcl8iLCJoYW5kbGVCbHVyIiwicmVzaXplSGFuZGxlcl8iLCJsYXlvdXQiLCJ1bmJvdW5kZWRDb29yZHNfIiwiZmdTY2FsZV8iLCJhY3RpdmF0aW9uVGltZXJfIiwiZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfIiwiYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyIsImFjdGl2YXRpb25UaW1lckNhbGxiYWNrXyIsInJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XyIsInByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyIsImlzQWN0aXZhdGVkIiwiaGFzRGVhY3RpdmF0aW9uVVhSdW4iLCJ3YXNBY3RpdmF0ZWRCeVBvaW50ZXIiLCJ3YXNFbGVtZW50TWFkZUFjdGl2ZSIsImFjdGl2YXRpb25FdmVudCIsImlzUHJvZ3JhbW1hdGljIiwic3VwcG9ydHNQcmVzc1JpcHBsZSIsInN1cHBvcnRzUHJlc3NSaXBwbGVfIiwicmVnaXN0ZXJSb290SGFuZGxlcnNfIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibGF5b3V0SW50ZXJuYWxfIiwiY2xlYXJUaW1lb3V0IiwicmVtb3ZlQ3NzVmFyc18iLCJkZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXyIsImRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18iLCJmb3JFYWNoIiwiT2JqZWN0Iiwia2V5cyIsImsiLCJhY3RpdmF0aW9uU3RhdGUiLCJwcmV2aW91c0FjdGl2YXRpb25FdmVudCIsImlzU2FtZUludGVyYWN0aW9uIiwiaGFzQWN0aXZhdGVkQ2hpbGQiLCJyZXNldEFjdGl2YXRpb25TdGF0ZV8iLCJyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyIsImNoZWNrRWxlbWVudE1hZGVBY3RpdmVfIiwiYW5pbWF0ZUFjdGl2YXRpb25fIiwiZXZlbnQiLCJ0cmFuc2xhdGVTdGFydCIsInRyYW5zbGF0ZUVuZCIsImdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18iLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18iLCJhY3RpdmF0aW9uSGFzRW5kZWQiLCJzdGF0ZSIsImFuaW1hdGVEZWFjdGl2YXRpb25fIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtYXhEaW0iLCJtYXgiLCJnZXRCb3VuZGVkUmFkaXVzIiwiaHlwb3RlbnVzZSIsInNxcnQiLCJwb3ciLCJ1cGRhdGVMYXlvdXRDc3NWYXJzXyIsInJvdW5kIiwidW5ib3VuZGVkIiwiTURDUmlwcGxlIiwiZGlzYWJsZWQiLCJ1bmJvdW5kZWRfIiwic2V0VW5ib3VuZGVkIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiY3JlYXRlQWRhcHRlciIsImRhdGFzZXQiLCJCb29sZWFuIiwic2V0VW5ib3VuZGVkXyIsInJpcHBsZSIsImluc3RhbmNlIiwiTUFUQ0hFUyIsInV0aWwiLCJIVE1MRWxlbWVudCIsInByb3RvdHlwZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJSaXBwbGVDYXBhYmxlU3VyZmFjZSIsIlJpcHBsZUJhc2UiLCJyZWYiLCJfbWF0Y2hlcyIsIiRlbCIsIiRzZXQiLCJjbGFzc2VzIiwiJGRlbGV0ZSIsInN0eWxlcyIsIlJpcHBsZU1peGluIiwibW91bnRlZCIsImJlZm9yZURlc3Ryb3kiLCJzY3JpcHQiLCJtZGNMaXN0IiwibWRjTGlzdEl0ZW0iLCJtZGNMaXN0RGl2aWRlciIsIm1kY0xpc3RHcm91cCIsIm1kY0xpc3RHcm91cEhlYWRl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
