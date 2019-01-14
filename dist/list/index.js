/**
* @module vue-mdc-adapterlist 0.19.0-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.42.0","material-components-web":"^0.42.1"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

import { RippleBase } from '../ripple';

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
          setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex() {}
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
    /** {boolean} */

    _this.wrapFocus_ = false;
    /** {boolean} */

    _this.isVertical_ = true;
    /** {boolean} */

    _this.isSingleSelectionList_ = false;
    /** {number} */

    _this.selectedIndex_ = -1;
    /** {boolean} */

    _this.useActivatedClass_ = false;
    return _this;
  }
  /**
   * Sets the private wrapFocus_ variable.
   * @param {boolean} value
   */


  _createClass(MDCListFoundation, [{
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
    /** @param {number} index */

  }, {
    key: "setSelectedIndex",
    value: function setSelectedIndex(index) {
      if (index < 0 || index >= this.adapter_.getListItemCount()) return;

      if (this.adapter_.hasCheckboxAtIndex(index)) {
        this.setAriaAttributesForCheckbox_(index);
      } else if (this.adapter_.hasRadioAtIndex(index)) {
        this.setAriaAttributesForRadio_(index);
      } else {
        this.setAriaAttributesForSingleSelect_(index);
        this.setClassNamesForSingleSelect_(index);
      }

      if (this.selectedIndex_ >= 0 && this.selectedIndex_ !== index) {
        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, 'tabindex', -1);
      } else if (this.selectedIndex_ === -1 && index !== 0) {
        // If no list item was selected set first list item's tabindex to -1.
        // Generally, tabindex is set to 0 on first list item of list that has no preselected items.
        this.adapter_.setAttributeForElementIndex(0, 'tabindex', -1);
      }

      this.adapter_.setAttributeForElementIndex(index, 'tabindex', 0);
      this.selectedIndex_ = index;
    }
    /**
     * @param {number} index
     * @private
     */

  }, {
    key: "setAriaAttributesForCheckbox_",
    value: function setAriaAttributesForCheckbox_(index) {
      var ariaAttributeValue = this.adapter_.isCheckboxCheckedAtIndex(index) ? 'true' : 'false';
      this.adapter_.setAttributeForElementIndex(index, strings.ARIA_CHECKED, ariaAttributeValue);
    }
    /**
     * @param {number} index
     * @private
     */

  }, {
    key: "setAriaAttributesForRadio_",
    value: function setAriaAttributesForRadio_(index) {
      if (this.selectedIndex_ >= 0) {
        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings.ARIA_CHECKED, 'false');
      }

      this.adapter_.setAttributeForElementIndex(index, strings.ARIA_CHECKED, 'true');
    }
    /**
    * @param {number} index
    * @private
    */

  }, {
    key: "setAriaAttributesForSingleSelect_",
    value: function setAriaAttributesForSingleSelect_(index) {
      if (this.selectedIndex_ >= 0 && this.selectedIndex_ !== index) {
        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings.ARIA_SELECTED, 'false');
      }

      this.adapter_.setAttributeForElementIndex(index, strings.ARIA_SELECTED, 'true');
    }
    /**
     * @param {number} index
     * @private
     */

  }, {
    key: "setClassNamesForSingleSelect_",
    value: function setClassNamesForSingleSelect_(index) {
      var selectedClassName = cssClasses.LIST_ITEM_SELECTED_CLASS;

      if (this.useActivatedClass_) {
        selectedClassName = cssClasses.LIST_ITEM_ACTIVATED_CLASS;
      }

      if (this.selectedIndex_ >= 0) {
        this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
      }

      this.adapter_.addClassForElementIndex(index, selectedClassName);
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
      if (listItemIndex >= 0) {
        this.adapter_.setTabIndexForListItemChildren(listItemIndex, -1);
      }
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
        this.focusNextElement(currentIndex);
      } else if (this.isVertical_ && arrowUp || !this.isVertical_ && arrowLeft) {
        this.preventDefaultEvent_(evt);
        this.focusPrevElement(currentIndex);
      } else if (isHome) {
        this.preventDefaultEvent_(evt);
        this.focusFirstElement();
      } else if (isEnd) {
        this.preventDefaultEvent_(evt);
        this.focusLastElement();
      } else if (isEnter || isSpace) {
        if (isRootListItem) {
          if (this.isSingleSelectionList_) {
            // Check if the space key was pressed on the list item or a child element.
            this.preventDefaultEvent_(evt);
          }

          var hasCheckboxOrRadio = this.hasCheckboxOrRadioAtIndex_(listItemIndex);

          if (hasCheckboxOrRadio) {
            this.toggleCheckboxOrRadioAtIndex_(listItemIndex);
            this.preventDefaultEvent_(evt);
          }

          if (this.isSingleSelectionList_ || hasCheckboxOrRadio) {
            this.setSelectedIndex(currentIndex);
          } // Explicitly activate links, since we're preventing default on Enter, and Space doesn't activate them.


          this.adapter_.followHref(currentIndex);
        }
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

      if (toggleCheckbox) {
        this.toggleCheckboxOrRadioAtIndex_(index);
      }

      if (this.isSingleSelectionList_ || this.hasCheckboxOrRadioAtIndex_(index)) {
        this.setSelectedIndex(index);
      }
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
          return;
        }
      }

      this.adapter_.focusItemAtIndex(nextIndex);
    }
    /**
     * Focuses the previous element on the list.
     * @param {number} index
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
          return;
        }
      }

      this.adapter_.focusItemAtIndex(prevIndex);
    }
  }, {
    key: "focusFirstElement",
    value: function focusFirstElement() {
      if (this.adapter_.getListItemCount() > 0) {
        this.adapter_.focusItemAtIndex(0);
      }
    }
  }, {
    key: "focusLastElement",
    value: function focusLastElement() {
      var lastIndex = this.adapter_.getListItemCount() - 1;

      if (lastIndex >= 0) {
        this.adapter_.focusItemAtIndex(lastIndex);
      }
    }
    /**
     * Toggles checkbox or radio at give index. Radio doesn't change the checked state if it is already checked.
     * @param {number} index
     * @private
     */

  }, {
    key: "toggleCheckboxOrRadioAtIndex_",
    value: function toggleCheckboxOrRadioAtIndex_(index) {
      if (!this.hasCheckboxOrRadioAtIndex_(index)) return;
      var isChecked = true;

      if (this.adapter_.hasCheckboxAtIndex(index)) {
        isChecked = !this.adapter_.isCheckboxCheckedAtIndex(index);
      }

      this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
    }
    /**
     * @param {number} index
     * @return {boolean} Return true if list item contains checkbox or radio input at given index.
     */

  }, {
    key: "hasCheckboxOrRadioAtIndex_",
    value: function hasCheckboxOrRadioAtIndex_(index) {
      return this.adapter_.hasCheckboxAtIndex(index) || this.adapter_.hasRadioAtIndex(index);
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
      }
    });
    this.foundation.init();
    this.foundation.setSingleSelection(this.singleSelection);
    this.foundation.setVerticalOrientation(this.vertical);
    this.layout();
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
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/ddata/extra/vma/components/list/mdc-list.vue";

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
  

  
  var mdcList = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

//
var script$1 = {
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
            const __vue_script__$1 = script$1;
            
/* template */
var __vue_render__$1 = function() {
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
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/ddata/extra/vma/components/list/mdc-list-item.vue";

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
  

  
  var mdcListItem = __vue_normalize__$1(
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
//
//
//
//
//
//
var script$2 = {
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
            const __vue_script__$2 = script$2;
            
/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("li", {
    staticClass: "mdc-list-divider",
    class: _vm.classes,
    attrs: { role: "separator" }
  })
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
  /* component normalizer */
  function __vue_normalize__$2(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/ddata/extra/vma/components/list/mdc-list-divider.vue";

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
  

  
  var mdcListDivider = __vue_normalize__$2(
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
var script$3 = {
  name: 'mdc-list-group'
};

/* script */
            const __vue_script__$3 = script$3;
            
/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "mdc-list-group" }, [_vm._t("default")], 2)
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
  /* component normalizer */
  function __vue_normalize__$3(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/ddata/extra/vma/components/list/mdc-list-group.vue";

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
  

  
  var mdcListGroup = __vue_normalize__$3(
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
  name: 'mdc-list-group-header'
};

/* script */
            const __vue_script__$4 = script$4;
            
/* template */
var __vue_render__$4 = function() {
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
  /* component normalizer */
  function __vue_normalize__$4(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/ddata/extra/vma/components/list/mdc-list-group-header.vue";

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
  

  
  var mdcListGroupHeader = __vue_normalize__$4(
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
  name: 'mdc-list-group-divider'
};

/* script */
            const __vue_script__$5 = script$5;
            
/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("hr", { staticClass: "mdc-list-group-divider mdc-list-divider" })
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
  /* component normalizer */
  function __vue_normalize__$5(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/ddata/extra/vma/components/list/mdc-list-group-divider.vue";

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
  

  
  var mdcListGroupDivider = __vue_normalize__$5(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    undefined,
    undefined
  );

var index = BasePlugin({
  mdcList: mdcList,
  mdcListItem: mdcListItem,
  mdcListDivider: mdcListDivider,
  mdcListGroup: mdcListGroup,
  mdcListGroupHeader: mdcListGroupHeader,
  mdcListGroupDivider: mdcListGroupDivider
});

export default index;
export { mdcList, mdcListItem, mdcListDivider, mdcListGroup, mdcListGroupHeader, mdcListGroupDivider };
//# sourceMappingURL=index.js.map
