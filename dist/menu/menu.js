/**
* @module vue-mdc-adaptermenu 0.19.4-beta
* @exports VueMDCMenu
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^1.0.0-0","material-components-web":"^1.0.0-0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueMDCMenu = factory());
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
  function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator],
        i = 0;
    if (m) return m.call(o);
    return {
      next: function next() {
        if (o && i >= o.length) o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
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
  var cssClasses$1 = {
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    ROOT: 'mdc-list'
  };
  var strings = {
    ACTION_EVENT: 'MDCList:action',
    ARIA_CHECKED: 'aria-checked',
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_ORIENTATION: 'aria-orientation',
    ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: 'aria-selected',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]:not(:disabled)',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses$1.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$1.LIST_ITEM_CLASS + " a\n  ",
    ENABLED_ITEMS_SELECTOR: '.mdc-list-item:not(.mdc-list-item--disabled)',
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses$1.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$1.LIST_ITEM_CLASS + " a,\n    ." + cssClasses$1.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses$1.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled)\n  ",
    RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)'
  };

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
  var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];

  function isNumberArray(selectedIndex) {
    return selectedIndex instanceof Array;
  }

  var MDCListFoundation =
  /** @class */
  function (_super) {
    __extends(MDCListFoundation, _super);

    function MDCListFoundation(adapter) {
      var _this = _super.call(this, _assign({}, MDCListFoundation.defaultAdapter, adapter)) || this;

      _this.wrapFocus_ = false;
      _this.isVertical_ = true;
      _this.isSingleSelectionList_ = false;
      _this.selectedIndex_ = -1;
      _this.focusedItemIndex_ = -1;
      _this.useActivatedClass_ = false;
      _this.isCheckboxList_ = false;
      _this.isRadioList_ = false;
      return _this;
    }

    Object.defineProperty(MDCListFoundation, "strings", {
      get: function get() {
        return strings;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCListFoundation, "cssClasses", {
      get: function get() {
        return cssClasses$1;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCListFoundation, "defaultAdapter", {
      get: function get() {
        return {
          addClassForElementIndex: function addClassForElementIndex() {
            return undefined;
          },
          focusItemAtIndex: function focusItemAtIndex() {
            return undefined;
          },
          getFocusedElementIndex: function getFocusedElementIndex() {
            return 0;
          },
          getListItemCount: function getListItemCount() {
            return 0;
          },
          hasCheckboxAtIndex: function hasCheckboxAtIndex() {
            return false;
          },
          hasRadioAtIndex: function hasRadioAtIndex() {
            return false;
          },
          isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex() {
            return false;
          },
          isFocusInsideList: function isFocusInsideList() {
            return false;
          },
          notifyAction: function notifyAction() {
            return undefined;
          },
          removeAttributeForElementIndex: function removeAttributeForElementIndex() {
            return undefined;
          },
          removeClassForElementIndex: function removeClassForElementIndex() {
            return undefined;
          },
          setAttributeForElementIndex: function setAttributeForElementIndex() {
            return undefined;
          },
          setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex() {
            return undefined;
          },
          setTabIndexForListItemChildren: function setTabIndexForListItemChildren() {
            return undefined;
          }
        };
      },
      enumerable: true,
      configurable: true
    });

    MDCListFoundation.prototype.layout = function () {
      if (this.adapter_.getListItemCount() === 0) return;

      if (this.adapter_.hasCheckboxAtIndex(0)) {
        this.isCheckboxList_ = true;
      } else if (this.adapter_.hasRadioAtIndex(0)) {
        this.isRadioList_ = true;
      }
    };
    /**
     * Sets the private wrapFocus_ variable.
     */


    MDCListFoundation.prototype.setWrapFocus = function (value) {
      this.wrapFocus_ = value;
    };
    /**
     * Sets the isVertical_ private variable.
     */


    MDCListFoundation.prototype.setVerticalOrientation = function (value) {
      this.isVertical_ = value;
    };
    /**
     * Sets the isSingleSelectionList_ private variable.
     */


    MDCListFoundation.prototype.setSingleSelection = function (value) {
      this.isSingleSelectionList_ = value;
    };
    /**
     * Sets the useActivatedClass_ private variable.
     */


    MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
      this.useActivatedClass_ = useActivated;
    };

    MDCListFoundation.prototype.getSelectedIndex = function () {
      return this.selectedIndex_;
    };

    MDCListFoundation.prototype.setSelectedIndex = function (index) {
      if (!this.isIndexValid_(index)) {
        return;
      }

      if (this.isCheckboxList_) {
        this.setCheckboxAtIndex_(index);
      } else if (this.isRadioList_) {
        this.setRadioAtIndex_(index);
      } else {
        this.setSingleSelectionAtIndex_(index);
      }
    };
    /**
     * Focus in handler for the list items.
     */


    MDCListFoundation.prototype.handleFocusIn = function (_, listItemIndex) {
      if (listItemIndex >= 0) {
        this.adapter_.setTabIndexForListItemChildren(listItemIndex, '0');
      }
    };
    /**
     * Focus out handler for the list items.
     */


    MDCListFoundation.prototype.handleFocusOut = function (_, listItemIndex) {
      var _this = this;

      if (listItemIndex >= 0) {
        this.adapter_.setTabIndexForListItemChildren(listItemIndex, '-1');
      }
      /**
       * Between Focusout & Focusin some browsers do not have focus on any element. Setting a delay to wait till the focus
       * is moved to next element.
       */


      setTimeout(function () {
        if (!_this.adapter_.isFocusInsideList()) {
          _this.setTabindexToFirstSelectedItem_();
        }
      }, 0);
    };
    /**
     * Key handler for the list.
     */


    MDCListFoundation.prototype.handleKeydown = function (evt, isRootListItem, listItemIndex) {
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
          // Return early if enter key is pressed on anchor element which triggers synthetic MouseEvent event.
          var target = evt.target;

          if (target && target.tagName === 'A' && isEnter) {
            return;
          }

          this.preventDefaultEvent_(evt);

          if (this.isSelectableList_()) {
            this.setSelectedIndexOnAction_(currentIndex);
          }

          this.adapter_.notifyAction(currentIndex);
        }
      }

      this.focusedItemIndex_ = currentIndex;

      if (nextIndex >= 0) {
        this.setTabindexAtIndex_(nextIndex);
        this.focusedItemIndex_ = nextIndex;
      }
    };
    /**
     * Click handler for the list.
     */


    MDCListFoundation.prototype.handleClick = function (index, toggleCheckbox) {
      if (index === -1) return;

      if (this.isSelectableList_()) {
        this.setSelectedIndexOnAction_(index, toggleCheckbox);
      }

      this.adapter_.notifyAction(index);
      this.setTabindexAtIndex_(index);
      this.focusedItemIndex_ = index;
    };
    /**
     * Focuses the next element on the list.
     */


    MDCListFoundation.prototype.focusNextElement = function (index) {
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
    };
    /**
     * Focuses the previous element on the list.
     */


    MDCListFoundation.prototype.focusPrevElement = function (index) {
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
    };

    MDCListFoundation.prototype.focusFirstElement = function () {
      this.adapter_.focusItemAtIndex(0);
      return 0;
    };

    MDCListFoundation.prototype.focusLastElement = function () {
      var lastIndex = this.adapter_.getListItemCount() - 1;
      this.adapter_.focusItemAtIndex(lastIndex);
      return lastIndex;
    };
    /**
     * Ensures that preventDefault is only called if the containing element doesn't
     * consume the event, and it will cause an unintended scroll.
     */


    MDCListFoundation.prototype.preventDefaultEvent_ = function (evt) {
      var target = evt.target;
      var tagName = ("" + target.tagName).toLowerCase();

      if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
        evt.preventDefault();
      }
    };

    MDCListFoundation.prototype.setSingleSelectionAtIndex_ = function (index) {
      var selectedClassName = cssClasses$1.LIST_ITEM_SELECTED_CLASS;

      if (this.useActivatedClass_) {
        selectedClassName = cssClasses$1.LIST_ITEM_ACTIVATED_CLASS;
      }

      if (this.selectedIndex_ >= 0 && this.selectedIndex_ !== index) {
        this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings.ARIA_SELECTED, 'false');
      }

      this.adapter_.addClassForElementIndex(index, selectedClassName);
      this.adapter_.setAttributeForElementIndex(index, strings.ARIA_SELECTED, 'true');
      this.selectedIndex_ = index;
    };
    /**
     * Toggles radio at give index. Radio doesn't change the checked state if it is already checked.
     */


    MDCListFoundation.prototype.setRadioAtIndex_ = function (index) {
      this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, true);

      if (this.selectedIndex_ >= 0) {
        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, strings.ARIA_CHECKED, 'false');
      }

      this.adapter_.setAttributeForElementIndex(index, strings.ARIA_CHECKED, 'true');
      this.selectedIndex_ = index;
    };

    MDCListFoundation.prototype.setCheckboxAtIndex_ = function (index) {
      for (var i = 0; i < this.adapter_.getListItemCount(); i++) {
        var isChecked = false;

        if (index.indexOf(i) >= 0) {
          isChecked = true;
        }

        this.adapter_.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
        this.adapter_.setAttributeForElementIndex(i, strings.ARIA_CHECKED, isChecked ? 'true' : 'false');
      }

      this.selectedIndex_ = index;
    };

    MDCListFoundation.prototype.setTabindexAtIndex_ = function (index) {
      if (this.focusedItemIndex_ === -1 && index !== 0) {
        // If no list item was selected set first list item's tabindex to -1.
        // Generally, tabindex is set to 0 on first list item of list that has no preselected items.
        this.adapter_.setAttributeForElementIndex(0, 'tabindex', '-1');
      } else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
        this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, 'tabindex', '-1');
      }

      this.adapter_.setAttributeForElementIndex(index, 'tabindex', '0');
    };
    /**
     * @return Return true if it is single selectin list, checkbox list or radio list.
     */


    MDCListFoundation.prototype.isSelectableList_ = function () {
      return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
    };

    MDCListFoundation.prototype.setTabindexToFirstSelectedItem_ = function () {
      var targetIndex = 0;

      if (this.isSelectableList_()) {
        if (typeof this.selectedIndex_ === 'number' && this.selectedIndex_ !== -1) {
          targetIndex = this.selectedIndex_;
        } else if (isNumberArray(this.selectedIndex_) && this.selectedIndex_.length > 0) {
          targetIndex = this.selectedIndex_.reduce(function (currentIndex, minIndex) {
            return Math.min(currentIndex, minIndex);
          });
        }
      }

      this.setTabindexAtIndex_(targetIndex);
    };

    MDCListFoundation.prototype.isIndexValid_ = function (index) {
      var _this = this;

      if (index instanceof Array) {
        if (!this.isCheckboxList_) {
          throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
        }

        if (index.length === 0) {
          return true;
        } else {
          return index.some(function (i) {
            return _this.isIndexInRange_(i);
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
    };

    MDCListFoundation.prototype.isIndexInRange_ = function (index) {
      var listSize = this.adapter_.getListItemCount();
      return index >= 0 && index < listSize;
    };

    MDCListFoundation.prototype.setSelectedIndexOnAction_ = function (index, toggleCheckbox) {
      if (toggleCheckbox === void 0) {
        toggleCheckbox = true;
      }

      if (this.isCheckboxList_) {
        this.toggleCheckboxAtIndex_(index, toggleCheckbox);
      } else {
        this.setSelectedIndex(index);
      }
    };

    MDCListFoundation.prototype.toggleCheckboxAtIndex_ = function (index, toggleCheckbox) {
      var isChecked = this.adapter_.isCheckboxCheckedAtIndex(index);

      if (toggleCheckbox) {
        isChecked = !isChecked;
        this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
      }

      this.adapter_.setAttributeForElementIndex(index, strings.ARIA_CHECKED, isChecked ? 'true' : 'false'); // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.

      var selectedIndexes = this.selectedIndex_ === -1 ? [] : this.selectedIndex_.slice();

      if (isChecked) {
        selectedIndexes.push(index);
      } else {
        selectedIndexes = selectedIndexes.filter(function (i) {
          return i !== index;
        });
      }

      this.selectedIndex_ = selectedIndexes;
    };

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
  var cssClasses$2 = {
    ANCHOR: 'mdc-menu-surface--anchor',
    ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
    ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
    FIXED: 'mdc-menu-surface--fixed',
    OPEN: 'mdc-menu-surface--open',
    ROOT: 'mdc-menu-surface'
  }; // tslint:disable:object-literal-sort-keys

  var strings$1 = {
    CLOSED_EVENT: 'MDCMenuSurface:closed',
    OPENED_EVENT: 'MDCMenuSurface:opened',
    FOCUSABLE_ELEMENTS: ['button:not(:disabled)', '[href]:not([aria-disabled="true"])', 'input:not(:disabled)', 'select:not(:disabled)', 'textarea:not(:disabled)', '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(', ')
  }; // tslint:enable:object-literal-sort-keys

  var numbers = {
    /** Total duration of menu-surface open animation. */
    TRANSITION_OPEN_DURATION: 120,

    /** Total duration of menu-surface close animation. */
    TRANSITION_CLOSE_DURATION: 75,

    /** Margin left to the edge of the viewport when menu-surface is at maximum possible height. */
    MARGIN_TO_EDGE: 32,

    /** Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning. */
    ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67
  };
  /**
   * Enum for bits in the {@see Corner) bitmap.
   */

  var CornerBit;

  (function (CornerBit) {
    CornerBit[CornerBit["BOTTOM"] = 1] = "BOTTOM";
    CornerBit[CornerBit["CENTER"] = 2] = "CENTER";
    CornerBit[CornerBit["RIGHT"] = 4] = "RIGHT";
    CornerBit[CornerBit["FLIP_RTL"] = 8] = "FLIP_RTL";
  })(CornerBit || (CornerBit = {}));
  /**
   * Enum for representing an element corner for positioning the menu-surface.
   *
   * The START constants map to LEFT if element directionality is left
   * to right and RIGHT if the directionality is right to left.
   * Likewise END maps to RIGHT or LEFT depending on the directionality.
   */


  var Corner;

  (function (Corner) {
    Corner[Corner["TOP_LEFT"] = 0] = "TOP_LEFT";
    Corner[Corner["TOP_RIGHT"] = 4] = "TOP_RIGHT";
    Corner[Corner["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
    Corner[Corner["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
    Corner[Corner["TOP_START"] = 8] = "TOP_START";
    Corner[Corner["TOP_END"] = 12] = "TOP_END";
    Corner[Corner["BOTTOM_START"] = 9] = "BOTTOM_START";
    Corner[Corner["BOTTOM_END"] = 13] = "BOTTOM_END";
  })(Corner || (Corner = {}));

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

  var MDCMenuSurfaceFoundation =
  /** @class */
  function (_super) {
    __extends(MDCMenuSurfaceFoundation, _super);

    function MDCMenuSurfaceFoundation(adapter) {
      var _this = _super.call(this, _assign({}, MDCMenuSurfaceFoundation.defaultAdapter, adapter)) || this;

      _this.isOpen_ = false;
      _this.isQuickOpen_ = false;
      _this.isHoistedElement_ = false;
      _this.isFixedPosition_ = false;
      _this.openAnimationEndTimerId_ = 0;
      _this.closeAnimationEndTimerId_ = 0;
      _this.animationRequestId_ = 0;
      _this.anchorCorner_ = Corner.TOP_START;
      _this.anchorMargin_ = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
      _this.position_ = {
        x: 0,
        y: 0
      };
      return _this;
    }

    Object.defineProperty(MDCMenuSurfaceFoundation, "cssClasses", {
      get: function get() {
        return cssClasses$2;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "strings", {
      get: function get() {
        return strings$1;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "numbers", {
      get: function get() {
        return numbers;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "Corner", {
      get: function get() {
        return Corner;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "defaultAdapter", {
      /**
       * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
       */
      get: function get() {
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
          addClass: function addClass() {
            return undefined;
          },
          removeClass: function removeClass() {
            return undefined;
          },
          hasClass: function hasClass() {
            return false;
          },
          hasAnchor: function hasAnchor() {
            return false;
          },
          isElementInContainer: function isElementInContainer() {
            return false;
          },
          isFocused: function isFocused() {
            return false;
          },
          isFirstElementFocused: function isFirstElementFocused() {
            return false;
          },
          isLastElementFocused: function isLastElementFocused() {
            return false;
          },
          isRtl: function isRtl() {
            return false;
          },
          getInnerDimensions: function getInnerDimensions() {
            return {
              height: 0,
              width: 0
            };
          },
          getAnchorDimensions: function getAnchorDimensions() {
            return null;
          },
          getWindowDimensions: function getWindowDimensions() {
            return {
              height: 0,
              width: 0
            };
          },
          getBodyDimensions: function getBodyDimensions() {
            return {
              height: 0,
              width: 0
            };
          },
          getWindowScroll: function getWindowScroll() {
            return {
              x: 0,
              y: 0
            };
          },
          setPosition: function setPosition() {
            return undefined;
          },
          setMaxHeight: function setMaxHeight() {
            return undefined;
          },
          setTransformOrigin: function setTransformOrigin() {
            return undefined;
          },
          saveFocus: function saveFocus() {
            return undefined;
          },
          restoreFocus: function restoreFocus() {
            return undefined;
          },
          focusFirstElement: function focusFirstElement() {
            return undefined;
          },
          focusLastElement: function focusLastElement() {
            return undefined;
          },
          notifyClose: function notifyClose() {
            return undefined;
          },
          notifyOpen: function notifyOpen() {
            return undefined;
          }
        }; // tslint:enable:object-literal-sort-keys
      },
      enumerable: true,
      configurable: true
    });

    MDCMenuSurfaceFoundation.prototype.init = function () {
      var _a = MDCMenuSurfaceFoundation.cssClasses,
          ROOT = _a.ROOT,
          OPEN = _a.OPEN;

      if (!this.adapter_.hasClass(ROOT)) {
        throw new Error(ROOT + " class required in root element.");
      }

      if (this.adapter_.hasClass(OPEN)) {
        this.isOpen_ = true;
      }
    };

    MDCMenuSurfaceFoundation.prototype.destroy = function () {
      clearTimeout(this.openAnimationEndTimerId_);
      clearTimeout(this.closeAnimationEndTimerId_); // Cancel any currently running animations.

      cancelAnimationFrame(this.animationRequestId_);
    };
    /**
     * @param corner Default anchor corner alignment of top-left menu surface corner.
     */


    MDCMenuSurfaceFoundation.prototype.setAnchorCorner = function (corner) {
      this.anchorCorner_ = corner;
    };
    /**
     * @param margin Set of margin values from anchor.
     */


    MDCMenuSurfaceFoundation.prototype.setAnchorMargin = function (margin) {
      this.anchorMargin_.top = margin.top || 0;
      this.anchorMargin_.right = margin.right || 0;
      this.anchorMargin_.bottom = margin.bottom || 0;
      this.anchorMargin_.left = margin.left || 0;
    };
    /** Used to indicate if the menu-surface is hoisted to the body. */


    MDCMenuSurfaceFoundation.prototype.setIsHoisted = function (isHoisted) {
      this.isHoistedElement_ = isHoisted;
    };
    /** Used to set the menu-surface calculations based on a fixed position menu. */


    MDCMenuSurfaceFoundation.prototype.setFixedPosition = function (isFixedPosition) {
      this.isFixedPosition_ = isFixedPosition;
    };
    /** Sets the menu-surface position on the page. */


    MDCMenuSurfaceFoundation.prototype.setAbsolutePosition = function (x, y) {
      this.position_.x = this.isFinite_(x) ? x : 0;
      this.position_.y = this.isFinite_(y) ? y : 0;
    };

    MDCMenuSurfaceFoundation.prototype.setQuickOpen = function (quickOpen) {
      this.isQuickOpen_ = quickOpen;
    };

    MDCMenuSurfaceFoundation.prototype.isOpen = function () {
      return this.isOpen_;
    };
    /**
     * Open the menu surface.
     */


    MDCMenuSurfaceFoundation.prototype.open = function () {
      var _this = this;

      this.adapter_.saveFocus();

      if (!this.isQuickOpen_) {
        this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
      }

      this.animationRequestId_ = requestAnimationFrame(function () {
        _this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);

        _this.dimensions_ = _this.adapter_.getInnerDimensions();

        _this.autoPosition_();

        if (_this.isQuickOpen_) {
          _this.adapter_.notifyOpen();
        } else {
          _this.openAnimationEndTimerId_ = setTimeout(function () {
            _this.openAnimationEndTimerId_ = 0;

            _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);

            _this.adapter_.notifyOpen();
          }, numbers.TRANSITION_OPEN_DURATION);
        }
      });
      this.isOpen_ = true;
    };
    /**
     * Closes the menu surface.
     */


    MDCMenuSurfaceFoundation.prototype.close = function () {
      var _this = this;

      if (!this.isQuickOpen_) {
        this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
      }

      requestAnimationFrame(function () {
        _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);

        if (_this.isQuickOpen_) {
          _this.adapter_.notifyClose();
        } else {
          _this.closeAnimationEndTimerId_ = setTimeout(function () {
            _this.closeAnimationEndTimerId_ = 0;

            _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);

            _this.adapter_.notifyClose();
          }, numbers.TRANSITION_CLOSE_DURATION);
        }
      });
      this.isOpen_ = false;
      this.maybeRestoreFocus_();
    };
    /** Handle clicks and close if not within menu-surface element. */


    MDCMenuSurfaceFoundation.prototype.handleBodyClick = function (evt) {
      var el = evt.target;

      if (this.adapter_.isElementInContainer(el)) {
        return;
      }

      this.close();
    };
    /** Handle keys that close the surface. */


    MDCMenuSurfaceFoundation.prototype.handleKeydown = function (evt) {
      var keyCode = evt.keyCode,
          key = evt.key,
          shiftKey = evt.shiftKey;
      var isEscape = key === 'Escape' || keyCode === 27;
      var isTab = key === 'Tab' || keyCode === 9;

      if (isEscape) {
        this.close();
      } else if (isTab) {
        if (this.adapter_.isLastElementFocused() && !shiftKey) {
          this.adapter_.focusFirstElement();
          evt.preventDefault();
        } else if (this.adapter_.isFirstElementFocused() && shiftKey) {
          this.adapter_.focusLastElement();
          evt.preventDefault();
        }
      }
    };

    MDCMenuSurfaceFoundation.prototype.autoPosition_ = function () {
      var _a; // Compute measurements for autoposition methods reuse.


      this.measurements_ = this.getAutoLayoutMeasurements_();
      var corner = this.getOriginCorner_();
      var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight_(corner);
      var verticalAlignment = this.hasBit_(corner, CornerBit.BOTTOM) ? 'bottom' : 'top';
      var horizontalAlignment = this.hasBit_(corner, CornerBit.RIGHT) ? 'right' : 'left';
      var horizontalOffset = this.getHorizontalOriginOffset_(corner);
      var verticalOffset = this.getVerticalOriginOffset_(corner);
      var _b = this.measurements_,
          anchorSize = _b.anchorSize,
          surfaceSize = _b.surfaceSize;
      var position = (_a = {}, _a[horizontalAlignment] = horizontalOffset, _a[verticalAlignment] = verticalOffset, _a); // Center align when anchor width is comparable or greater than menu surface, otherwise keep corner.

      if (anchorSize.width / surfaceSize.width > numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
        horizontalAlignment = 'center';
      } // If the menu-surface has been hoisted to the body, it's no longer relative to the anchor element


      if (this.isHoistedElement_ || this.isFixedPosition_) {
        this.adjustPositionForHoistedElement_(position);
      }

      this.adapter_.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
      this.adapter_.setPosition(position);
      this.adapter_.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '');
    };
    /**
     * @return Measurements used to position menu surface popup.
     */


    MDCMenuSurfaceFoundation.prototype.getAutoLayoutMeasurements_ = function () {
      var anchorRect = this.adapter_.getAnchorDimensions();
      var bodySize = this.adapter_.getBodyDimensions();
      var viewportSize = this.adapter_.getWindowDimensions();
      var windowScroll = this.adapter_.getWindowScroll();

      if (!anchorRect) {
        // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
        anchorRect = {
          top: this.position_.y,
          right: this.position_.x,
          bottom: this.position_.y,
          left: this.position_.x,
          width: 0,
          height: 0
        }; // tslint:enable:object-literal-sort-keys
      }

      return {
        anchorSize: anchorRect,
        bodySize: bodySize,
        surfaceSize: this.dimensions_,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: anchorRect.top,
          right: viewportSize.width - anchorRect.right,
          bottom: viewportSize.height - anchorRect.bottom,
          left: anchorRect.left
        },
        viewportSize: viewportSize,
        windowScroll: windowScroll
      };
    };
    /**
     * Computes the corner of the anchor from which to animate and position the menu surface.
     */


    MDCMenuSurfaceFoundation.prototype.getOriginCorner_ = function () {
      // Defaults: open from the top left.
      var corner = Corner.TOP_LEFT;
      var _a = this.measurements_,
          viewportDistance = _a.viewportDistance,
          anchorSize = _a.anchorSize,
          surfaceSize = _a.surfaceSize;
      var isBottomAligned = this.hasBit_(this.anchorCorner_, CornerBit.BOTTOM);
      var availableTop = isBottomAligned ? viewportDistance.top + anchorSize.height + this.anchorMargin_.bottom : viewportDistance.top + this.anchorMargin_.top;
      var availableBottom = isBottomAligned ? viewportDistance.bottom - this.anchorMargin_.bottom : viewportDistance.bottom + anchorSize.height - this.anchorMargin_.top;
      var topOverflow = surfaceSize.height - availableTop;
      var bottomOverflow = surfaceSize.height - availableBottom;

      if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
        corner = this.setBit_(corner, CornerBit.BOTTOM);
      }

      var isRtl = this.adapter_.isRtl();
      var isFlipRtl = this.hasBit_(this.anchorCorner_, CornerBit.FLIP_RTL);
      var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, CornerBit.RIGHT);
      var isAlignedRight = avoidHorizontalOverlap && !isRtl || !avoidHorizontalOverlap && isFlipRtl && isRtl;
      var availableLeft = isAlignedRight ? viewportDistance.left + anchorSize.width + this.anchorMargin_.right : viewportDistance.left + this.anchorMargin_.left;
      var availableRight = isAlignedRight ? viewportDistance.right - this.anchorMargin_.right : viewportDistance.right + anchorSize.width - this.anchorMargin_.left;
      var leftOverflow = surfaceSize.width - availableLeft;
      var rightOverflow = surfaceSize.width - availableRight;

      if (leftOverflow < 0 && isAlignedRight && isRtl || avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0 || rightOverflow > 0 && leftOverflow < rightOverflow) {
        corner = this.setBit_(corner, CornerBit.RIGHT);
      }

      return corner;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Maximum height of the menu surface, based on available space. 0 indicates should not be set.
     */


    MDCMenuSurfaceFoundation.prototype.getMenuSurfaceMaxHeight_ = function (corner) {
      var viewportDistance = this.measurements_.viewportDistance;
      var maxHeight = 0;
      var isBottomAligned = this.hasBit_(corner, CornerBit.BOTTOM);
      var isBottomAnchored = this.hasBit_(this.anchorCorner_, CornerBit.BOTTOM);
      var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE; // When maximum height is not specified, it is handled from CSS.

      if (isBottomAligned) {
        maxHeight = viewportDistance.top + this.anchorMargin_.top - MARGIN_TO_EDGE;

        if (!isBottomAnchored) {
          maxHeight += this.measurements_.anchorSize.height;
        }
      } else {
        maxHeight = viewportDistance.bottom - this.anchorMargin_.bottom + this.measurements_.anchorSize.height - MARGIN_TO_EDGE;

        if (isBottomAnchored) {
          maxHeight -= this.measurements_.anchorSize.height;
        }
      }

      return maxHeight;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Horizontal offset of menu surface origin corner from corresponding anchor corner.
     */


    MDCMenuSurfaceFoundation.prototype.getHorizontalOriginOffset_ = function (corner) {
      var anchorSize = this.measurements_.anchorSize; // isRightAligned corresponds to using the 'right' property on the surface.

      var isRightAligned = this.hasBit_(corner, CornerBit.RIGHT);
      var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, CornerBit.RIGHT);

      if (isRightAligned) {
        var rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.left : this.anchorMargin_.right; // For hoisted or fixed elements, adjust the offset by the difference between viewport width and body width so
        // when we calculate the right value (`adjustPositionForHoistedElement_`) based on the element position,
        // the right property is correct.

        if (this.isHoistedElement_ || this.isFixedPosition_) {
          return rightOffset - (this.measurements_.viewportSize.width - this.measurements_.bodySize.width);
        }

        return rightOffset;
      }

      return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.right : this.anchorMargin_.left;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Vertical offset of menu surface origin corner from corresponding anchor corner.
     */


    MDCMenuSurfaceFoundation.prototype.getVerticalOriginOffset_ = function (corner) {
      var anchorSize = this.measurements_.anchorSize;
      var isBottomAligned = this.hasBit_(corner, CornerBit.BOTTOM);
      var avoidVerticalOverlap = this.hasBit_(this.anchorCorner_, CornerBit.BOTTOM);
      var y = 0;

      if (isBottomAligned) {
        y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin_.top : -this.anchorMargin_.bottom;
      } else {
        y = avoidVerticalOverlap ? anchorSize.height + this.anchorMargin_.bottom : this.anchorMargin_.top;
      }

      return y;
    };
    /** Calculates the offsets for positioning the menu-surface when the menu-surface has been hoisted to the body. */


    MDCMenuSurfaceFoundation.prototype.adjustPositionForHoistedElement_ = function (position) {
      var e_1, _a;

      var _b = this.measurements_,
          windowScroll = _b.windowScroll,
          viewportDistance = _b.viewportDistance;
      var props = Object.keys(position);

      try {
        for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
          var prop = props_1_1.value;
          var value = position[prop] || 0; // Hoisted surfaces need to have the anchor elements location on the page added to the
          // position properties for proper alignment on the body.

          value += viewportDistance[prop]; // Surfaces that are absolutely positioned need to have additional calculations for scroll
          // and bottom positioning.

          if (!this.isFixedPosition_) {
            if (prop === 'top') {
              value += windowScroll.y;
            } else if (prop === 'bottom') {
              value -= windowScroll.y;
            } else if (prop === 'left') {
              value += windowScroll.x;
            } else {
              // prop === 'right'
              value -= windowScroll.x;
            }
          }

          position[prop] = value;
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    };
    /**
     * The last focused element when the menu surface was opened should regain focus, if the user is
     * focused on or within the menu surface when it is closed.
     */


    MDCMenuSurfaceFoundation.prototype.maybeRestoreFocus_ = function () {
      var isRootFocused = this.adapter_.isFocused();
      var childHasFocus = document.activeElement && this.adapter_.isElementInContainer(document.activeElement);

      if (isRootFocused || childHasFocus) {
        this.adapter_.restoreFocus();
      }
    };

    MDCMenuSurfaceFoundation.prototype.hasBit_ = function (corner, bit) {
      return Boolean(corner & bit); // tslint:disable-line:no-bitwise
    };

    MDCMenuSurfaceFoundation.prototype.setBit_ = function (corner, bit) {
      return corner | bit; // tslint:disable-line:no-bitwise
    };
    /**
     * isFinite that doesn't force conversion to number type.
     * Equivalent to Number.isFinite in ES2015, which is not supported in IE.
     */


    MDCMenuSurfaceFoundation.prototype.isFinite_ = function (num) {
      return typeof num === 'number' && isFinite(num);
    };

    return MDCMenuSurfaceFoundation;
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
  var cssClasses$3 = {
    MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
    MENU_SELECTION_GROUP: 'mdc-menu__selection-group',
    ROOT: 'mdc-menu'
  };
  var strings$2 = {
    ARIA_SELECTED_ATTR: 'aria-selected',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    LIST_SELECTOR: '.mdc-list',
    SELECTED_EVENT: 'MDCMenu:selected'
  };

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

  var MDCMenuFoundation =
  /** @class */
  function (_super) {
    __extends(MDCMenuFoundation, _super);

    function MDCMenuFoundation(adapter) {
      var _this = _super.call(this, _assign({}, MDCMenuFoundation.defaultAdapter, adapter)) || this;

      _this.closeAnimationEndTimerId_ = 0;
      return _this;
    }

    Object.defineProperty(MDCMenuFoundation, "cssClasses", {
      get: function get() {
        return cssClasses$3;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "strings", {
      get: function get() {
        return strings$2;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "defaultAdapter", {
      /**
       * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
       */
      get: function get() {
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
          addClassToElementAtIndex: function addClassToElementAtIndex() {
            return undefined;
          },
          removeClassFromElementAtIndex: function removeClassFromElementAtIndex() {
            return undefined;
          },
          addAttributeToElementAtIndex: function addAttributeToElementAtIndex() {
            return undefined;
          },
          removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex() {
            return undefined;
          },
          elementContainsClass: function elementContainsClass() {
            return false;
          },
          closeSurface: function closeSurface() {
            return undefined;
          },
          getElementIndex: function getElementIndex() {
            return -1;
          },
          getParentElement: function getParentElement() {
            return null;
          },
          getSelectedElementIndex: function getSelectedElementIndex() {
            return -1;
          },
          notifySelected: function notifySelected() {
            return undefined;
          }
        }; // tslint:enable:object-literal-sort-keys
      },
      enumerable: true,
      configurable: true
    });

    MDCMenuFoundation.prototype.destroy = function () {
      if (this.closeAnimationEndTimerId_) {
        clearTimeout(this.closeAnimationEndTimerId_);
      }

      this.adapter_.closeSurface();
    };

    MDCMenuFoundation.prototype.handleKeydown = function (evt) {
      var key = evt.key,
          keyCode = evt.keyCode;
      var isTab = key === 'Tab' || keyCode === 9;

      if (isTab) {
        this.adapter_.closeSurface();
      }
    };

    MDCMenuFoundation.prototype.handleItemAction = function (listItem) {
      var _this = this;

      var index = this.adapter_.getElementIndex(listItem);

      if (index < 0) {
        return;
      }

      this.adapter_.notifySelected({
        index: index
      });
      this.adapter_.closeSurface(); // Wait for the menu to close before adding/removing classes that affect styles.

      this.closeAnimationEndTimerId_ = setTimeout(function () {
        var selectionGroup = _this.getSelectionGroup_(listItem);

        if (selectionGroup) {
          _this.handleSelectionGroup_(selectionGroup, index);
        }
      }, MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
    };
    /**
     * Handles toggling the selected classes in a selection group when a selection is made.
     */


    MDCMenuFoundation.prototype.handleSelectionGroup_ = function (selectionGroup, index) {
      // De-select the previous selection in this group.
      var selectedIndex = this.adapter_.getSelectedElementIndex(selectionGroup);

      if (selectedIndex >= 0) {
        this.adapter_.removeAttributeFromElementAtIndex(selectedIndex, strings$2.ARIA_SELECTED_ATTR);
        this.adapter_.removeClassFromElementAtIndex(selectedIndex, cssClasses$3.MENU_SELECTED_LIST_ITEM);
      } // Select the new list item in this group.


      this.adapter_.addClassToElementAtIndex(index, cssClasses$3.MENU_SELECTED_LIST_ITEM);
      this.adapter_.addAttributeToElementAtIndex(index, strings$2.ARIA_SELECTED_ATTR, 'true');
    };
    /**
     * Returns the parent selection group of an element if one exists.
     */


    MDCMenuFoundation.prototype.getSelectionGroup_ = function (listItem) {
      var parent = this.adapter_.getParentElement(listItem);

      if (!parent) {
        return null;
      }

      var isGroup = this.adapter_.elementContainsClass(parent, cssClasses$3.MENU_SELECTION_GROUP); // Iterate through ancestors until we find the group or get to the list.

      while (!isGroup && parent && !this.adapter_.elementContainsClass(parent, MDCListFoundation.cssClasses.ROOT)) {
        parent = this.adapter_.getParentElement(parent);
        isGroup = parent ? this.adapter_.elementContainsClass(parent, cssClasses$3.MENU_SELECTION_GROUP) : false;
      }

      if (isGroup) {
        return parent;
      } else {
        return null;
      }
    };

    return MDCMenuFoundation;
  }(MDCFoundation);

  //
  var script = {
    name: 'mdc-menu',
    model: {
      prop: 'open',
      event: 'change'
    },
    props: {
      open: [Boolean, Object],
      'quick-open': Boolean,
      'anchor-corner': [String, Number],
      'anchor-margin': Object
    },
    data: function data() {
      return {
        classes: {},
        styles: {}
      };
    },
    provide: function provide() {
      return {
        mdcMenu: this
      };
    },
    watch: {// anchorCorner(nv) {
      //   this.foundation.setAnchorCorner(Number(nv))
      // },
      // anchorMargin(nv) {
      //   this.foundation.setAnchorMargin(nv)
      // }
    },
    mounted: function mounted() {
      var _this = this;

      this._previousFocus = undefined;
      this.foundation = new MDCMenuFoundation({
        addClassToElementAtIndex: function addClassToElementAtIndex(index, className) {
          var list = _this.items;
          list[index].classList.add(className);
        },
        removeClassFromElementAtIndex: function removeClassFromElementAtIndex(index, className) {
          var list = _this.items;
          list[index].classList.remove(className);
        },
        addAttributeToElementAtIndex: function addAttributeToElementAtIndex(index, attr, value) {
          var list = _this.items;
          list[index].setAttribute(attr, value);
        },
        removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex(index, attr) {
          var list = _this.items;
          list[index].removeAttribute(attr);
        },
        elementContainsClass: function elementContainsClass(element, className) {
          return element.classList.contains(className);
        },
        closeSurface: function closeSurface() {
          _this.$emit('change', false);
        },
        getElementIndex: function getElementIndex(element) {
          return _this.items.indexOf(element);
        },
        getParentElement: function getParentElement(element) {
          return element.parentElement;
        },
        getSelectedElementIndex: function getSelectedElementIndex(selectionGroup) {
          var idx = _this.items.indexOf(selectionGroup.querySelector(".".concat(MDCMenuFoundation.cssClasses.MENU_SELECTED_LIST_ITEM)));

          return idx;
        },
        notifySelected: function notifySelected(evtData) {
          emitCustomEvent(_this.$el, MDCMenuFoundation.strings.SELECTED_EVENT, {
            index: evtData.index,
            item: _this.items[evtData.index]
          });

          _this.$emit('select', {
            index: evtData.index,
            item: _this.items[evtData.index]
          });
        }
      });
      this.foundation.init();
    },
    beforeDestroy: function beforeDestroy() {
      this._previousFocus = null;
      this.foundation.destroy();
    },
    computed: {
      items: function items() {
        return this.$refs.list.listElements;
      }
    },
    methods: {
      handleAction: function handleAction(_ref) {
        var index = _ref.detail.index;
        this.foundation.handleItemAction(this.items[index]);
      },
      handleKeydown: function handleKeydown(evt) {
        this.foundation.handleKeydown(evt);
      },
      onChange: function onChange(item) {
        this.$emit('change', item);
      } // onOpen_(value) {
      //   if (value) {
      //     this.foundation.open(typeof value === 'object' ? value : void 0)
      //   } else {
      //     this.foundation.close()
      //   }
      // },
      // show(options) {
      //   this.foundation.open(options)
      // },
      // hide() {
      //   this.foundation.close()
      // },
      // isOpen() {
      //   return this.foundation ? this.foundation.isOpen() : false
      // }

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
      "mdc-menu-surface",
      {
        ref: "root",
        attrs: { "quick-open": _vm.quickOpen, open: _vm.open },
        on: { change: _vm.onChange, keydown: _vm.handleKeydown }
      },
      [
        _c(
          "mdc-list",
          {
            ref: "list",
            nativeOn: {
              "MDCList:action": function($event) {
                return _vm.handleAction($event)
              }
            }
          },
          [_vm._t("default")],
          2
        )
      ],
      1
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
    

    
    var mdcMenu = normalizeComponent_1(
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
  var cachedCssTransformPropertyName_;
  /**
   * Returns the name of the correct transform property to use on the current browser.
   */

  function getTransformPropertyName(globalObj, forceRefresh) {
    if (forceRefresh === void 0) {
      forceRefresh = false;
    }

    if (cachedCssTransformPropertyName_ === undefined || forceRefresh) {
      var el = globalObj.document.createElement('div');
      cachedCssTransformPropertyName_ = 'transform' in el.style ? 'transform' : 'webkitTransform';
    }

    return cachedCssTransformPropertyName_;
  }

  var script$1 = {
    name: 'mdc-menu-surface',
    model: {
      prop: 'open',
      event: 'change'
    },
    props: {
      open: [Boolean, Object],
      'quick-open': Boolean,
      'anchor-corner': [String, Number],
      'anchor-margin': Object
    },
    data: function data() {
      return {
        classes: {},
        styles: {}
      };
    },
    provide: function provide() {
      return {
        mdcMenu: this
      };
    },
    watch: {
      open: 'onOpen_',
      quickOpen: function quickOpen(nv) {
        this.foundation.setQuickOpen(nv);
      }
    },
    mounted: function mounted() {
      var _this = this;

      this._previousFocus = undefined;
      this.foundation = new MDCMenuSurfaceFoundation(_extends({
        addClass: function addClass(className) {
          return _this.$set(_this.classes, className, true);
        },
        removeClass: function removeClass(className) {
          return _this.$delete(_this.classes, className);
        },
        hasClass: function hasClass(className) {
          return _this.$el.classList.contains(className);
        },
        hasAnchor: function hasAnchor() {
          return !!_this.anchorElement;
        },
        notifyClose: function notifyClose() {
          emitCustomEvent(_this.$el, MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, {});

          _this.$emit('change', false);
        },
        notifyOpen: function notifyOpen() {
          emitCustomEvent(_this.$el, MDCMenuSurfaceFoundation.strings.OPENED_EVENT, {});

          _this.$emit('change', true);
        },
        isElementInContainer: function isElementInContainer(el) {
          return _this.$el === el || _this.$el.contains(el);
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this.$el).getPropertyValue('direction') === 'rtl';
        },
        setTransformOrigin: function setTransformOrigin(origin) {
          _this.$el.style["".concat(getTransformPropertyName(window), "-origin")] = origin;
        }
      }, this.getFocusAdapterMethods(), this.getDimensionAdapterMethods()));

      if (this.$el.parentElement && this.$el.parentElement.classList.contains(MDCMenuSurfaceFoundation.cssClasses.ANCHOR)) {
        this.anchorElement = this.$el.parentElement;
      }

      this.foundation.init();
    },
    beforeDestroy: function beforeDestroy() {
      this._previousFocus = null;
      this.foundation.destroy();
    },
    methods: {
      handleBodyClick: function handleBodyClick(evt) {
        this.foundation.handleBodyClick(evt);
      },
      registerBodyClickListener: function registerBodyClickListener() {
        document.body.addEventListener('click', this.handleBodyClick);
      },
      deregisterBodyClickListener: function deregisterBodyClickListener() {
        document.body.removeEventListener('click', this.handleBodyClick);
      },
      handleKeydown: function handleKeydown(evt) {
        this.foundation.handleKeydown(evt);
      },
      getFocusAdapterMethods: function getFocusAdapterMethods() {
        var _this2 = this;

        return {
          isFocused: function isFocused() {
            return document.activeElement === _this2.$el;
          },
          saveFocus: function saveFocus() {
            _this2.previousFocus_ = document.activeElement;
          },
          restoreFocus: function restoreFocus() {
            if (_this2.$el.contains(document.activeElement)) {
              if (_this2.previousFocus_ && _this2.previousFocus_.focus) {
                _this2.previousFocus_.focus();
              }
            }
          },
          isFirstElementFocused: function isFirstElementFocused() {
            return _this2.firstFocusableElement_ && _this2.firstFocusableElement_ === document.activeElement;
          },
          isLastElementFocused: function isLastElementFocused() {
            return _this2.lastFocusableElement_ && _this2.lastFocusableElement_ === document.activeElement;
          },
          focusFirstElement: function focusFirstElement() {
            return _this2.firstFocusableElement_ && _this2.firstFocusableElement_.focus && _this2.firstFocusableElement_.focus();
          },
          focusLastElement: function focusLastElement() {
            return _this2.lastFocusableElement_ && _this2.lastFocusableElement_.focus && _this2.lastFocusableElement_.focus();
          }
        };
      },
      getDimensionAdapterMethods: function getDimensionAdapterMethods() {
        var _this3 = this;

        return {
          getInnerDimensions: function getInnerDimensions() {
            return {
              width: _this3.$el.offsetWidth,
              height: _this3.$el.offsetHeight
            };
          },
          getAnchorDimensions: function getAnchorDimensions() {
            return _this3.anchorElement && _this3.anchorElement.getBoundingClientRect();
          },
          getWindowDimensions: function getWindowDimensions() {
            return {
              width: window.innerWidth,
              height: window.innerHeight
            };
          },
          getBodyDimensions: function getBodyDimensions() {
            return {
              width: document.body.clientWidth,
              height: document.body.clientHeight
            };
          },
          getWindowScroll: function getWindowScroll() {
            return {
              x: window.pageXOffset,
              y: window.pageYOffset
            };
          },
          setPosition: function setPosition(position) {
            _this3.$el.style.left = 'left' in position ? position.left : null;
            _this3.$el.style.right = 'right' in position ? position.right : null;
            _this3.$el.style.top = 'top' in position ? position.top : null;
            _this3.$el.style.bottom = 'bottom' in position ? position.bottom : null;
          },
          setMaxHeight: function setMaxHeight(height) {
            _this3.$el.style.maxHeight = height;
          }
        };
      },
      onOpen_: function onOpen_(value) {
        if (value) {
          var focusableElements = this.$el.querySelectorAll(MDCMenuSurfaceFoundation.strings.FOCUSABLE_ELEMENTS);
          this.firstFocusableElement_ = focusableElements.length > 0 ? focusableElements[0] : null;
          this.lastFocusableElement_ = focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
          this.foundation.open();
        } else {
          this.foundation.close();
        }
      },
      hoistMenuToBody: function hoistMenuToBody() {
        document.body.appendChild(this.$el.parentElement.removeChild(this.$el));
        this.setIsHoisted(true);
      },
      setIsHoisted: function setIsHoisted(isHoisted) {
        this.foundation.setIsHoisted(isHoisted);
      },
      setMenuSurfaceAnchorElement: function setMenuSurfaceAnchorElement(element) {
        this.anchorElement = element;
      },
      setFixedPosition: function setFixedPosition(isFixed) {
        if (isFixed) {
          this.$el.classList.add(cssClasses.FIXED);
        } else {
          this.$el.classList.remove(cssClasses.FIXED);
        }

        this.foundation.setFixedPosition(isFixed);
      },
      setAbsolutePosition: function setAbsolutePosition(x, y) {
        this.foundation.setAbsolutePosition(x, y);
        this.setIsHoisted(true);
      },
      setAnchorCorner: function setAnchorCorner(corner) {
        this.foundation.setAnchorCorner(corner);
      },
      setAnchorMargin: function setAnchorMargin(margin) {
        this.foundation.setAnchorMargin(margin);
      },
      show: function show(options) {
        this.foundation.open(options);
      },
      hide: function hide() {
        this.foundation.close();
      },
      isOpen: function isOpen() {
        return this.foundation ? this.foundation.isOpen() : false;
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
        staticClass: "mdc-menu mdc-menu-surface",
        class: _vm.classes,
        on: {
          keydown: _vm.handleKeydown,
          "MDCMenuSurface:opened": _vm.registerBodyClickListener,
          "MDCMenuSurface:closed": _vm.deregisterBodyClickListener
        }
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
    

    
    var mdcMenuSurface = normalizeComponent_1(
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
  //
  //
  //
  //
  var script$2 = {
    name: 'mdc-menu-item',
    props: {
      disabled: Boolean
    },
    inject: ['mdcMenu'],
    mounted: function mounted() {
      console.dir(this.mdcMenu);
      this.mdcMenu.items.push(this.$el);
    }
  };

  /* script */
  const __vue_script__$2 = script$2;

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "li",
      {
        staticClass: "mdc-menu-item mdc-list-item",
        attrs: {
          tabindex: _vm.disabled ? "-1" : "0",
          "aria-disabled": _vm.disabled,
          role: "menuitem"
        }
      },
      [_vm._t("default")],
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
    

    
    var mdcMenuItem = normalizeComponent_1(
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
  var script$3 = {
    name: 'mdc-menu-divider'
  };

  /* script */
  const __vue_script__$3 = script$3;

  /* template */
  var __vue_render__$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("li", {
      staticClass: "mdc-menu-divider mdc-list-divider",
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
    

    
    var mdcMenuDivider = normalizeComponent_1(
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
    name: 'mdc-menu-anchor'
  };

  /* script */
  const __vue_script__$4 = script$4;

  /* template */
  var __vue_render__$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "mdc-menu-surface--anchor" },
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
    /* style inject */
    
    /* style inject SSR */
    

    
    var mdcMenuAnchor = normalizeComponent_1(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      undefined,
      undefined
    );

  var plugin = BasePlugin({
    mdcMenu: mdcMenu,
    mdcMenuSurface: mdcMenuSurface,
    mdcMenuItem: mdcMenuItem,
    mdcMenuDivider: mdcMenuDivider,
    mdcMenuAnchor: mdcMenuAnchor
  });

  autoInit(plugin);

  return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9iYXNlL2F1dG8taW5pdC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9iYXNlLXBsdWdpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZXZlbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvdW5pcXVlaWQtbWl4aW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpc3QvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUtc3VyZmFjZS9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUtc3VyZmFjZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9tZW51L2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbWVudS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vY29tcG9uZW50cy9tZW51L21kYy1tZW51LnZ1ZSIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbWVudS1zdXJmYWNlL3V0aWwuanMiLCIuLi8uLi9jb21wb25lbnRzL21lbnUvbWRjLW1lbnUtc3VyZmFjZS52dWUiLCIuLi8uLi9jb21wb25lbnRzL21lbnUvbWRjLW1lbnUtaXRlbS52dWUiLCIuLi8uLi9jb21wb25lbnRzL21lbnUvbWRjLW1lbnUtZGl2aWRlci52dWUiLCIuLi8uLi9jb21wb25lbnRzL21lbnUvbWRjLW1lbnUtYW5jaG9yLnZ1ZSIsIi4uLy4uL2NvbXBvbmVudHMvbWVudS9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvbWVudS9lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXV0b0luaXQocGx1Z2luKSB7XG4gIC8vIEF1dG8taW5zdGFsbFxuICBsZXQgX1Z1ZSA9IG51bGxcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgX1Z1ZSA9IHdpbmRvdy5WdWVcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8qZ2xvYmFsIGdsb2JhbCovXG4gICAgX1Z1ZSA9IGdsb2JhbC5WdWVcbiAgfVxuICBpZiAoX1Z1ZSkge1xuICAgIF9WdWUudXNlKHBsdWdpbilcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIEJhc2VQbHVnaW4oY29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICdfX1ZFUlNJT05fXycsXG4gICAgaW5zdGFsbDogdm0gPT4ge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNba2V5XVxuICAgICAgICB2bS5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHNcbiAgfVxufVxuIiwiLyogZ2xvYmFsIEN1c3RvbUV2ZW50ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Q3VzdG9tRXZlbnQoZWwsIGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gIGxldCBldnRcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICBidWJibGVzOiBzaG91bGRCdWJibGVcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKVxuICB9XG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgTURDRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgaWYgKGFkYXB0ZXIgPT09IHZvaWQgMCkgeyBhZGFwdGVyID0ge307IH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAgICAgICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAgICAgICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0ZvdW5kYXRpb247XG59KCkpO1xuZXhwb3J0IHsgTURDRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTUzogJ21kYy1saXN0LWl0ZW0tLWFjdGl2YXRlZCcsXG4gICAgTElTVF9JVEVNX0NMQVNTOiAnbWRjLWxpc3QtaXRlbScsXG4gICAgTElTVF9JVEVNX1NFTEVDVEVEX0NMQVNTOiAnbWRjLWxpc3QtaXRlbS0tc2VsZWN0ZWQnLFxuICAgIFJPT1Q6ICdtZGMtbGlzdCcsXG59O1xudmFyIHN0cmluZ3MgPSB7XG4gICAgQUNUSU9OX0VWRU5UOiAnTURDTGlzdDphY3Rpb24nLFxuICAgIEFSSUFfQ0hFQ0tFRDogJ2FyaWEtY2hlY2tlZCcsXG4gICAgQVJJQV9DSEVDS0VEX0NIRUNLQk9YX1NFTEVDVE9SOiAnW3JvbGU9XCJjaGVja2JveFwiXVthcmlhLWNoZWNrZWQ9XCJ0cnVlXCJdJyxcbiAgICBBUklBX0NIRUNLRURfUkFESU9fU0VMRUNUT1I6ICdbcm9sZT1cInJhZGlvXCJdW2FyaWEtY2hlY2tlZD1cInRydWVcIl0nLFxuICAgIEFSSUFfT1JJRU5UQVRJT046ICdhcmlhLW9yaWVudGF0aW9uJyxcbiAgICBBUklBX09SSUVOVEFUSU9OX0hPUklaT05UQUw6ICdob3Jpem9udGFsJyxcbiAgICBBUklBX1JPTEVfQ0hFQ0tCT1hfU0VMRUNUT1I6ICdbcm9sZT1cImNoZWNrYm94XCJdJyxcbiAgICBBUklBX1NFTEVDVEVEOiAnYXJpYS1zZWxlY3RlZCcsXG4gICAgQ0hFQ0tCT1hfUkFESU9fU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpkaXNhYmxlZCksIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmRpc2FibGVkKScsXG4gICAgQ0hFQ0tCT1hfU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpkaXNhYmxlZCknLFxuICAgIENISUxEX0VMRU1FTlRTX1RPX1RPR0dMRV9UQUJJTkRFWDogXCJcXG4gICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MgKyBcIiBidXR0b246bm90KDpkaXNhYmxlZCksXFxuICAgIC5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTICsgXCIgYVxcbiAgXCIsXG4gICAgRU5BQkxFRF9JVEVNU19TRUxFQ1RPUjogJy5tZGMtbGlzdC1pdGVtOm5vdCgubWRjLWxpc3QtaXRlbS0tZGlzYWJsZWQpJyxcbiAgICBGT0NVU0FCTEVfQ0hJTERfRUxFTUVOVFM6IFwiXFxuICAgIC5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTICsgXCIgYnV0dG9uOm5vdCg6ZGlzYWJsZWQpLFxcbiAgICAuXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUyArIFwiIGEsXFxuICAgIC5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTICsgXCIgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpub3QoOmRpc2FibGVkKSxcXG4gICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MgKyBcIiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOm5vdCg6ZGlzYWJsZWQpXFxuICBcIixcbiAgICBSQURJT19TRUxFQ1RPUjogJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmRpc2FibGVkKScsXG59O1xuZXhwb3J0IHsgc3RyaW5ncywgY3NzQ2xhc3NlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgRUxFTUVOVFNfS0VZX0FMTE9XRURfSU4gPSBbJ2lucHV0JywgJ2J1dHRvbicsICd0ZXh0YXJlYScsICdzZWxlY3QnXTtcbmZ1bmN0aW9uIGlzTnVtYmVyQXJyYXkoc2VsZWN0ZWRJbmRleCkge1xuICAgIHJldHVybiBzZWxlY3RlZEluZGV4IGluc3RhbmNlb2YgQXJyYXk7XG59XG52YXIgTURDTGlzdEZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDTGlzdEZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTGlzdEZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENMaXN0Rm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLndyYXBGb2N1c18gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNWZXJ0aWNhbF8gPSB0cnVlO1xuICAgICAgICBfdGhpcy5pc1NpbmdsZVNlbGVjdGlvbkxpc3RfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnNlbGVjdGVkSW5kZXhfID0gLTE7XG4gICAgICAgIF90aGlzLmZvY3VzZWRJdGVtSW5kZXhfID0gLTE7XG4gICAgICAgIF90aGlzLnVzZUFjdGl2YXRlZENsYXNzXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc0NoZWNrYm94TGlzdF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNSYWRpb0xpc3RfID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpc3RGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTGlzdEZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaXN0Rm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzc0ZvckVsZW1lbnRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGZvY3VzSXRlbUF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRGb2N1c2VkRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGdldExpc3RJdGVtQ291bnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgaGFzQ2hlY2tib3hBdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBoYXNSYWRpb0F0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzQ2hlY2tib3hDaGVja2VkQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNGb2N1c0luc2lkZUxpc3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeUFjdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW46IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKSA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzQ2hlY2tib3hBdEluZGV4KDApKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ2hlY2tib3hMaXN0XyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5hZGFwdGVyXy5oYXNSYWRpb0F0SW5kZXgoMCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSYWRpb0xpc3RfID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJpdmF0ZSB3cmFwRm9jdXNfIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRXcmFwRm9jdXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy53cmFwRm9jdXNfID0gdmFsdWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBpc1ZlcnRpY2FsXyBwcml2YXRlIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRWZXJ0aWNhbE9yaWVudGF0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaXNWZXJ0aWNhbF8gPSB2YWx1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gcHJpdmF0ZSB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0U2luZ2xlU2VsZWN0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaXNTaW5nbGVTZWxlY3Rpb25MaXN0XyA9IHZhbHVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdXNlQWN0aXZhdGVkQ2xhc3NfIHByaXZhdGUgdmFyaWFibGUuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFVzZUFjdGl2YXRlZENsYXNzID0gZnVuY3Rpb24gKHVzZUFjdGl2YXRlZCkge1xuICAgICAgICB0aGlzLnVzZUFjdGl2YXRlZENsYXNzXyA9IHVzZUFjdGl2YXRlZDtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRTZWxlY3RlZEluZGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEluZGV4XztcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTZWxlY3RlZEluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGlmICghdGhpcy5pc0luZGV4VmFsaWRfKGluZGV4KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzQ2hlY2tib3hMaXN0Xykge1xuICAgICAgICAgICAgdGhpcy5zZXRDaGVja2JveEF0SW5kZXhfKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzUmFkaW9MaXN0Xykge1xuICAgICAgICAgICAgdGhpcy5zZXRSYWRpb0F0SW5kZXhfKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2luZ2xlU2VsZWN0aW9uQXRJbmRleF8oaW5kZXgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGb2N1cyBpbiBoYW5kbGVyIGZvciB0aGUgbGlzdCBpdGVtcy5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlRm9jdXNJbiA9IGZ1bmN0aW9uIChfLCBsaXN0SXRlbUluZGV4KSB7XG4gICAgICAgIGlmIChsaXN0SXRlbUluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuKGxpc3RJdGVtSW5kZXgsICcwJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZvY3VzIG91dCBoYW5kbGVyIGZvciB0aGUgbGlzdCBpdGVtcy5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlRm9jdXNPdXQgPSBmdW5jdGlvbiAoXywgbGlzdEl0ZW1JbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobGlzdEl0ZW1JbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbihsaXN0SXRlbUluZGV4LCAnLTEnKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQmV0d2VlbiBGb2N1c291dCAmIEZvY3VzaW4gc29tZSBicm93c2VycyBkbyBub3QgaGF2ZSBmb2N1cyBvbiBhbnkgZWxlbWVudC4gU2V0dGluZyBhIGRlbGF5IHRvIHdhaXQgdGlsbCB0aGUgZm9jdXNcbiAgICAgICAgICogaXMgbW92ZWQgdG8gbmV4dCBlbGVtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIV90aGlzLmFkYXB0ZXJfLmlzRm9jdXNJbnNpZGVMaXN0KCkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRUYWJpbmRleFRvRmlyc3RTZWxlY3RlZEl0ZW1fKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogS2V5IGhhbmRsZXIgZm9yIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVLZXlkb3duID0gZnVuY3Rpb24gKGV2dCwgaXNSb290TGlzdEl0ZW0sIGxpc3RJdGVtSW5kZXgpIHtcbiAgICAgICAgdmFyIGFycm93TGVmdCA9IGV2dC5rZXkgPT09ICdBcnJvd0xlZnQnIHx8IGV2dC5rZXlDb2RlID09PSAzNztcbiAgICAgICAgdmFyIGFycm93VXAgPSBldnQua2V5ID09PSAnQXJyb3dVcCcgfHwgZXZ0LmtleUNvZGUgPT09IDM4O1xuICAgICAgICB2YXIgYXJyb3dSaWdodCA9IGV2dC5rZXkgPT09ICdBcnJvd1JpZ2h0JyB8fCBldnQua2V5Q29kZSA9PT0gMzk7XG4gICAgICAgIHZhciBhcnJvd0Rvd24gPSBldnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldnQua2V5Q29kZSA9PT0gNDA7XG4gICAgICAgIHZhciBpc0hvbWUgPSBldnQua2V5ID09PSAnSG9tZScgfHwgZXZ0LmtleUNvZGUgPT09IDM2O1xuICAgICAgICB2YXIgaXNFbmQgPSBldnQua2V5ID09PSAnRW5kJyB8fCBldnQua2V5Q29kZSA9PT0gMzU7XG4gICAgICAgIHZhciBpc0VudGVyID0gZXZ0LmtleSA9PT0gJ0VudGVyJyB8fCBldnQua2V5Q29kZSA9PT0gMTM7XG4gICAgICAgIHZhciBpc1NwYWNlID0gZXZ0LmtleSA9PT0gJ1NwYWNlJyB8fCBldnQua2V5Q29kZSA9PT0gMzI7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldEZvY3VzZWRFbGVtZW50SW5kZXgoKTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IC0xO1xuICAgICAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gbGlzdEl0ZW1JbmRleDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBldmVudCBkb2Vzbid0IGhhdmUgYSBtZGMtbGlzdC1pdGVtIGFuY2VzdG9yIGZyb20gdGhlXG4gICAgICAgICAgICAgICAgLy8gY3VycmVudCBsaXN0IChub3QgZnJvbSBhIHN1Ymxpc3QpLCByZXR1cm4gZWFybHkuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgodGhpcy5pc1ZlcnRpY2FsXyAmJiBhcnJvd0Rvd24pIHx8ICghdGhpcy5pc1ZlcnRpY2FsXyAmJiBhcnJvd1JpZ2h0KSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgICAgICAgbmV4dEluZGV4ID0gdGhpcy5mb2N1c05leHRFbGVtZW50KGN1cnJlbnRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHRoaXMuaXNWZXJ0aWNhbF8gJiYgYXJyb3dVcCkgfHwgKCF0aGlzLmlzVmVydGljYWxfICYmIGFycm93TGVmdCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgICAgICAgIG5leHRJbmRleCA9IHRoaXMuZm9jdXNQcmV2RWxlbWVudChjdXJyZW50SW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzSG9tZSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgICAgICAgbmV4dEluZGV4ID0gdGhpcy5mb2N1c0ZpcnN0RWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzRW5kKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICAgICAgICBuZXh0SW5kZXggPSB0aGlzLmZvY3VzTGFzdEVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0VudGVyIHx8IGlzU3BhY2UpIHtcbiAgICAgICAgICAgIGlmIChpc1Jvb3RMaXN0SXRlbSkge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiBlYXJseSBpZiBlbnRlciBrZXkgaXMgcHJlc3NlZCBvbiBhbmNob3IgZWxlbWVudCB3aGljaCB0cmlnZ2VycyBzeW50aGV0aWMgTW91c2VFdmVudCBldmVudC5cbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZ0LnRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lID09PSAnQScgJiYgaXNFbnRlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGFibGVMaXN0XygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleE9uQWN0aW9uXyhjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUFjdGlvbihjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPSBjdXJyZW50SW5kZXg7XG4gICAgICAgIGlmIChuZXh0SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRUYWJpbmRleEF0SW5kZXhfKG5leHRJbmRleCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID0gbmV4dEluZGV4O1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbGljayBoYW5kbGVyIGZvciB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoaW5kZXgsIHRvZ2dsZUNoZWNrYm94KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0YWJsZUxpc3RfKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleE9uQWN0aW9uXyhpbmRleCwgdG9nZ2xlQ2hlY2tib3gpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5QWN0aW9uKGluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRUYWJpbmRleEF0SW5kZXhfKGluZGV4KTtcbiAgICAgICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4XyA9IGluZGV4O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRm9jdXNlcyB0aGUgbmV4dCBlbGVtZW50IG9uIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5mb2N1c05leHRFbGVtZW50ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBjb3VudCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICBpZiAobmV4dEluZGV4ID49IGNvdW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy53cmFwRm9jdXNfKSB7XG4gICAgICAgICAgICAgICAgbmV4dEluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiBlYXJseSBiZWNhdXNlIGxhc3QgaXRlbSBpcyBhbHJlYWR5IGZvY3VzZWQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleChuZXh0SW5kZXgpO1xuICAgICAgICByZXR1cm4gbmV4dEluZGV4O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRm9jdXNlcyB0aGUgcHJldmlvdXMgZWxlbWVudCBvbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuZm9jdXNQcmV2RWxlbWVudCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgcHJldkluZGV4ID0gaW5kZXggLSAxO1xuICAgICAgICBpZiAocHJldkluZGV4IDwgMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMud3JhcEZvY3VzXykge1xuICAgICAgICAgICAgICAgIHByZXZJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiBlYXJseSBiZWNhdXNlIGZpcnN0IGl0ZW0gaXMgYWxyZWFkeSBmb2N1c2VkLlxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgocHJldkluZGV4KTtcbiAgICAgICAgcmV0dXJuIHByZXZJbmRleDtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5mb2N1c0ZpcnN0RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KDApO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5mb2N1c0xhc3RFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGFzdEluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCkgLSAxO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgobGFzdEluZGV4KTtcbiAgICAgICAgcmV0dXJuIGxhc3RJbmRleDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEVuc3VyZXMgdGhhdCBwcmV2ZW50RGVmYXVsdCBpcyBvbmx5IGNhbGxlZCBpZiB0aGUgY29udGFpbmluZyBlbGVtZW50IGRvZXNuJ3RcbiAgICAgKiBjb25zdW1lIHRoZSBldmVudCwgYW5kIGl0IHdpbGwgY2F1c2UgYW4gdW5pbnRlbmRlZCBzY3JvbGwuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnByZXZlbnREZWZhdWx0RXZlbnRfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZ0LnRhcmdldDtcbiAgICAgICAgdmFyIHRhZ05hbWUgPSAoXCJcIiArIHRhcmdldC50YWdOYW1lKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoRUxFTUVOVFNfS0VZX0FMTE9XRURfSU4uaW5kZXhPZih0YWdOYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0U2luZ2xlU2VsZWN0aW9uQXRJbmRleF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkQ2xhc3NOYW1lID0gY3NzQ2xhc3Nlcy5MSVNUX0lURU1fU0VMRUNURURfQ0xBU1M7XG4gICAgICAgIGlmICh0aGlzLnVzZUFjdGl2YXRlZENsYXNzXykge1xuICAgICAgICAgICAgc2VsZWN0ZWRDbGFzc05hbWUgPSBjc3NDbGFzc2VzLkxJU1RfSVRFTV9BQ1RJVkFURURfQ0xBU1M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gPj0gMCAmJiB0aGlzLnNlbGVjdGVkSW5kZXhfICE9PSBpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXhfLCBzZWxlY3RlZENsYXNzTmFtZSk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXhfLCBzdHJpbmdzLkFSSUFfU0VMRUNURUQsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3NGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHNlbGVjdGVkQ2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9TRUxFQ1RFRCwgJ3RydWUnKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IGluZGV4O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyByYWRpbyBhdCBnaXZlIGluZGV4LiBSYWRpbyBkb2Vzbid0IGNoYW5nZSB0aGUgY2hlY2tlZCBzdGF0ZSBpZiBpdCBpcyBhbHJlYWR5IGNoZWNrZWQuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFJhZGlvQXRJbmRleF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleChpbmRleCwgdHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhfID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleF8sIHN0cmluZ3MuQVJJQV9DSEVDS0VELCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgc3RyaW5ncy5BUklBX0NIRUNLRUQsICd0cnVlJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8gPSBpbmRleDtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRDaGVja2JveEF0SW5kZXhfID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCk7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGluZGV4LmluZGV4T2YoaSkgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4KGksIGlzQ2hlY2tlZCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpLCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgaXNDaGVja2VkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IGluZGV4O1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFRhYmluZGV4QXRJbmRleF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPT09IC0xICYmIGluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBJZiBubyBsaXN0IGl0ZW0gd2FzIHNlbGVjdGVkIHNldCBmaXJzdCBsaXN0IGl0ZW0ncyB0YWJpbmRleCB0byAtMS5cbiAgICAgICAgICAgIC8vIEdlbmVyYWxseSwgdGFiaW5kZXggaXMgc2V0IHRvIDAgb24gZmlyc3QgbGlzdCBpdGVtIG9mIGxpc3QgdGhhdCBoYXMgbm8gcHJlc2VsZWN0ZWQgaXRlbXMuXG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCgwLCAndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID49IDAgJiYgdGhpcy5mb2N1c2VkSXRlbUluZGV4XyAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8sICd0YWJpbmRleCcsICctMScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGluZGV4LCAndGFiaW5kZXgnLCAnMCcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBSZXR1cm4gdHJ1ZSBpZiBpdCBpcyBzaW5nbGUgc2VsZWN0aW4gbGlzdCwgY2hlY2tib3ggbGlzdCBvciByYWRpbyBsaXN0LlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5pc1NlbGVjdGFibGVMaXN0XyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTaW5nbGVTZWxlY3Rpb25MaXN0XyB8fCB0aGlzLmlzQ2hlY2tib3hMaXN0XyB8fCB0aGlzLmlzUmFkaW9MaXN0XztcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRUYWJpbmRleFRvRmlyc3RTZWxlY3RlZEl0ZW1fID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGFyZ2V0SW5kZXggPSAwO1xuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGFibGVMaXN0XygpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0ZWRJbmRleF8gPT09ICdudW1iZXInICYmIHRoaXMuc2VsZWN0ZWRJbmRleF8gIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXhfO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNOdW1iZXJBcnJheSh0aGlzLnNlbGVjdGVkSW5kZXhfKSAmJiB0aGlzLnNlbGVjdGVkSW5kZXhfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleF8ucmVkdWNlKGZ1bmN0aW9uIChjdXJyZW50SW5kZXgsIG1pbkluZGV4KSB7IHJldHVybiBNYXRoLm1pbihjdXJyZW50SW5kZXgsIG1pbkluZGV4KTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRUYWJpbmRleEF0SW5kZXhfKHRhcmdldEluZGV4KTtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5pc0luZGV4VmFsaWRfID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChpbmRleCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDaGVja2JveExpc3RfKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNRENMaXN0Rm91bmRhdGlvbjogQXJyYXkgb2YgaW5kZXggaXMgb25seSBzdXBwb3J0ZWQgZm9yIGNoZWNrYm94IGJhc2VkIGxpc3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbmRleC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleC5zb21lKGZ1bmN0aW9uIChpKSB7IHJldHVybiBfdGhpcy5pc0luZGV4SW5SYW5nZV8oaSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2hlY2tib3hMaXN0Xykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTURDTGlzdEZvdW5kYXRpb246IEV4cGVjdGVkIGFycmF5IG9mIGluZGV4IGZvciBjaGVja2JveCBiYXNlZCBsaXN0IGJ1dCBnb3QgbnVtYmVyOiAnICsgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNJbmRleEluUmFuZ2VfKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmlzSW5kZXhJblJhbmdlXyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgbGlzdFNpemUgPSB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKTtcbiAgICAgICAgcmV0dXJuIGluZGV4ID49IDAgJiYgaW5kZXggPCBsaXN0U2l6ZTtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTZWxlY3RlZEluZGV4T25BY3Rpb25fID0gZnVuY3Rpb24gKGluZGV4LCB0b2dnbGVDaGVja2JveCkge1xuICAgICAgICBpZiAodG9nZ2xlQ2hlY2tib3ggPT09IHZvaWQgMCkgeyB0b2dnbGVDaGVja2JveCA9IHRydWU7IH1cbiAgICAgICAgaWYgKHRoaXMuaXNDaGVja2JveExpc3RfKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNoZWNrYm94QXRJbmRleF8oaW5kZXgsIHRvZ2dsZUNoZWNrYm94KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS50b2dnbGVDaGVja2JveEF0SW5kZXhfID0gZnVuY3Rpb24gKGluZGV4LCB0b2dnbGVDaGVja2JveCkge1xuICAgICAgICB2YXIgaXNDaGVja2VkID0gdGhpcy5hZGFwdGVyXy5pc0NoZWNrYm94Q2hlY2tlZEF0SW5kZXgoaW5kZXgpO1xuICAgICAgICBpZiAodG9nZ2xlQ2hlY2tib3gpIHtcbiAgICAgICAgICAgIGlzQ2hlY2tlZCA9ICFpc0NoZWNrZWQ7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4KGluZGV4LCBpc0NoZWNrZWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgaXNDaGVja2VkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgICAgIC8vIElmIG5vbmUgb2YgdGhlIGNoZWNrYm94IGl0ZW1zIGFyZSBzZWxlY3RlZCBhbmQgc2VsZWN0ZWRJbmRleCBpcyBub3QgaW5pdGlhbGl6ZWQgdGhlbiBwcm92aWRlIGEgZGVmYXVsdCB2YWx1ZS5cbiAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXhlcyA9IHRoaXMuc2VsZWN0ZWRJbmRleF8gPT09IC0xID8gW10gOiB0aGlzLnNlbGVjdGVkSW5kZXhfLnNsaWNlKCk7XG4gICAgICAgIGlmIChpc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhlcy5wdXNoKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhlcyA9IHNlbGVjdGVkSW5kZXhlcy5maWx0ZXIoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkgIT09IGluZGV4OyB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gc2VsZWN0ZWRJbmRleGVzO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0xpc3RGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENMaXN0Rm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0xpc3RGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIEFOQ0hPUjogJ21kYy1tZW51LXN1cmZhY2UtLWFuY2hvcicsXG4gICAgQU5JTUFUSU5HX0NMT1NFRDogJ21kYy1tZW51LXN1cmZhY2UtLWFuaW1hdGluZy1jbG9zZWQnLFxuICAgIEFOSU1BVElOR19PUEVOOiAnbWRjLW1lbnUtc3VyZmFjZS0tYW5pbWF0aW5nLW9wZW4nLFxuICAgIEZJWEVEOiAnbWRjLW1lbnUtc3VyZmFjZS0tZml4ZWQnLFxuICAgIE9QRU46ICdtZGMtbWVudS1zdXJmYWNlLS1vcGVuJyxcbiAgICBST09UOiAnbWRjLW1lbnUtc3VyZmFjZScsXG59O1xuLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG52YXIgc3RyaW5ncyA9IHtcbiAgICBDTE9TRURfRVZFTlQ6ICdNRENNZW51U3VyZmFjZTpjbG9zZWQnLFxuICAgIE9QRU5FRF9FVkVOVDogJ01EQ01lbnVTdXJmYWNlOm9wZW5lZCcsXG4gICAgRk9DVVNBQkxFX0VMRU1FTlRTOiBbXG4gICAgICAgICdidXR0b246bm90KDpkaXNhYmxlZCknLCAnW2hyZWZdOm5vdChbYXJpYS1kaXNhYmxlZD1cInRydWVcIl0pJywgJ2lucHV0Om5vdCg6ZGlzYWJsZWQpJyxcbiAgICAgICAgJ3NlbGVjdDpub3QoOmRpc2FibGVkKScsICd0ZXh0YXJlYTpub3QoOmRpc2FibGVkKScsICdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSk6bm90KFthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSknLFxuICAgIF0uam9pbignLCAnKSxcbn07XG4vLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xudmFyIG51bWJlcnMgPSB7XG4gICAgLyoqIFRvdGFsIGR1cmF0aW9uIG9mIG1lbnUtc3VyZmFjZSBvcGVuIGFuaW1hdGlvbi4gKi9cbiAgICBUUkFOU0lUSU9OX09QRU5fRFVSQVRJT046IDEyMCxcbiAgICAvKiogVG90YWwgZHVyYXRpb24gb2YgbWVudS1zdXJmYWNlIGNsb3NlIGFuaW1hdGlvbi4gKi9cbiAgICBUUkFOU0lUSU9OX0NMT1NFX0RVUkFUSU9OOiA3NSxcbiAgICAvKiogTWFyZ2luIGxlZnQgdG8gdGhlIGVkZ2Ugb2YgdGhlIHZpZXdwb3J0IHdoZW4gbWVudS1zdXJmYWNlIGlzIGF0IG1heGltdW0gcG9zc2libGUgaGVpZ2h0LiAqL1xuICAgIE1BUkdJTl9UT19FREdFOiAzMixcbiAgICAvKiogUmF0aW8gb2YgYW5jaG9yIHdpZHRoIHRvIG1lbnUtc3VyZmFjZSB3aWR0aCBmb3Igc3dpdGNoaW5nIGZyb20gY29ybmVyIHBvc2l0aW9uaW5nIHRvIGNlbnRlciBwb3NpdGlvbmluZy4gKi9cbiAgICBBTkNIT1JfVE9fTUVOVV9TVVJGQUNFX1dJRFRIX1JBVElPOiAwLjY3LFxufTtcbi8qKlxuICogRW51bSBmb3IgYml0cyBpbiB0aGUge0BzZWUgQ29ybmVyKSBiaXRtYXAuXG4gKi9cbnZhciBDb3JuZXJCaXQ7XG4oZnVuY3Rpb24gKENvcm5lckJpdCkge1xuICAgIENvcm5lckJpdFtDb3JuZXJCaXRbXCJCT1RUT01cIl0gPSAxXSA9IFwiQk9UVE9NXCI7XG4gICAgQ29ybmVyQml0W0Nvcm5lckJpdFtcIkNFTlRFUlwiXSA9IDJdID0gXCJDRU5URVJcIjtcbiAgICBDb3JuZXJCaXRbQ29ybmVyQml0W1wiUklHSFRcIl0gPSA0XSA9IFwiUklHSFRcIjtcbiAgICBDb3JuZXJCaXRbQ29ybmVyQml0W1wiRkxJUF9SVExcIl0gPSA4XSA9IFwiRkxJUF9SVExcIjtcbn0pKENvcm5lckJpdCB8fCAoQ29ybmVyQml0ID0ge30pKTtcbi8qKlxuICogRW51bSBmb3IgcmVwcmVzZW50aW5nIGFuIGVsZW1lbnQgY29ybmVyIGZvciBwb3NpdGlvbmluZyB0aGUgbWVudS1zdXJmYWNlLlxuICpcbiAqIFRoZSBTVEFSVCBjb25zdGFudHMgbWFwIHRvIExFRlQgaWYgZWxlbWVudCBkaXJlY3Rpb25hbGl0eSBpcyBsZWZ0XG4gKiB0byByaWdodCBhbmQgUklHSFQgaWYgdGhlIGRpcmVjdGlvbmFsaXR5IGlzIHJpZ2h0IHRvIGxlZnQuXG4gKiBMaWtld2lzZSBFTkQgbWFwcyB0byBSSUdIVCBvciBMRUZUIGRlcGVuZGluZyBvbiB0aGUgZGlyZWN0aW9uYWxpdHkuXG4gKi9cbnZhciBDb3JuZXI7XG4oZnVuY3Rpb24gKENvcm5lcikge1xuICAgIENvcm5lcltDb3JuZXJbXCJUT1BfTEVGVFwiXSA9IDBdID0gXCJUT1BfTEVGVFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJUT1BfUklHSFRcIl0gPSA0XSA9IFwiVE9QX1JJR0hUXCI7XG4gICAgQ29ybmVyW0Nvcm5lcltcIkJPVFRPTV9MRUZUXCJdID0gMV0gPSBcIkJPVFRPTV9MRUZUXCI7XG4gICAgQ29ybmVyW0Nvcm5lcltcIkJPVFRPTV9SSUdIVFwiXSA9IDVdID0gXCJCT1RUT01fUklHSFRcIjtcbiAgICBDb3JuZXJbQ29ybmVyW1wiVE9QX1NUQVJUXCJdID0gOF0gPSBcIlRPUF9TVEFSVFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJUT1BfRU5EXCJdID0gMTJdID0gXCJUT1BfRU5EXCI7XG4gICAgQ29ybmVyW0Nvcm5lcltcIkJPVFRPTV9TVEFSVFwiXSA9IDldID0gXCJCT1RUT01fU1RBUlRcIjtcbiAgICBDb3JuZXJbQ29ybmVyW1wiQk9UVE9NX0VORFwiXSA9IDEzXSA9IFwiQk9UVE9NX0VORFwiO1xufSkoQ29ybmVyIHx8IChDb3JuZXIgPSB7fSkpO1xuZXhwb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncywgbnVtYmVycywgQ29ybmVyQml0LCBDb3JuZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBDb3JuZXIsIENvcm5lckJpdCwgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRzbGliXzEuX19hc3NpZ24oe30sIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlzT3Blbl8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNRdWlja09wZW5fID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzSG9pc3RlZEVsZW1lbnRfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzRml4ZWRQb3NpdGlvbl8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMub3BlbkFuaW1hdGlvbkVuZFRpbWVySWRfID0gMDtcbiAgICAgICAgX3RoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXyA9IDA7XG4gICAgICAgIF90aGlzLmFuaW1hdGlvblJlcXVlc3RJZF8gPSAwO1xuICAgICAgICBfdGhpcy5hbmNob3JDb3JuZXJfID0gQ29ybmVyLlRPUF9TVEFSVDtcbiAgICAgICAgX3RoaXMuYW5jaG9yTWFyZ2luXyA9IHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwIH07XG4gICAgICAgIF90aGlzLnBvc2l0aW9uXyA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51U3VyZmFjZUZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51U3VyZmFjZUZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51U3VyZmFjZUZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51U3VyZmFjZUZvdW5kYXRpb24sIFwiQ29ybmVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQ29ybmVyO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBzZWUge0BsaW5rIE1EQ01lbnVTdXJmYWNlQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaGFzQW5jaG9yOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc0VsZW1lbnRJbkNvbnRhaW5lcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNGb2N1c2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc0ZpcnN0RWxlbWVudEZvY3VzZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzTGFzdEVsZW1lbnRGb2N1c2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc1J0bDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgZ2V0SW5uZXJEaW1lbnNpb25zOiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyBoZWlnaHQ6IDAsIHdpZHRoOiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGdldEFuY2hvckRpbWVuc2lvbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICAgICAgZ2V0V2luZG93RGltZW5zaW9uczogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgaGVpZ2h0OiAwLCB3aWR0aDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBnZXRCb2R5RGltZW5zaW9uczogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgaGVpZ2h0OiAwLCB3aWR0aDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBnZXRXaW5kb3dTY3JvbGw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHg6IDAsIHk6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgc2V0UG9zaXRpb246IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRNYXhIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRUcmFuc2Zvcm1PcmlnaW46IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzYXZlRm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZXN0b3JlRm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBmb2N1c0ZpcnN0RWxlbWVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGZvY3VzTGFzdEVsZW1lbnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlDbG9zZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeU9wZW46IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBST09UID0gX2EuUk9PVCwgT1BFTiA9IF9hLk9QRU47XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyXy5oYXNDbGFzcyhST09UKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFJPT1QgKyBcIiBjbGFzcyByZXF1aXJlZCBpbiByb290IGVsZW1lbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmhhc0NsYXNzKE9QRU4pKSB7XG4gICAgICAgICAgICB0aGlzLmlzT3Blbl8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm9wZW5BbmltYXRpb25FbmRUaW1lcklkXyk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8pO1xuICAgICAgICAvLyBDYW5jZWwgYW55IGN1cnJlbnRseSBydW5uaW5nIGFuaW1hdGlvbnMuXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uUmVxdWVzdElkXyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29ybmVyIERlZmF1bHQgYW5jaG9yIGNvcm5lciBhbGlnbm1lbnQgb2YgdG9wLWxlZnQgbWVudSBzdXJmYWNlIGNvcm5lci5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldEFuY2hvckNvcm5lciA9IGZ1bmN0aW9uIChjb3JuZXIpIHtcbiAgICAgICAgdGhpcy5hbmNob3JDb3JuZXJfID0gY29ybmVyO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIG1hcmdpbiBTZXQgb2YgbWFyZ2luIHZhbHVlcyBmcm9tIGFuY2hvci5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldEFuY2hvck1hcmdpbiA9IGZ1bmN0aW9uIChtYXJnaW4pIHtcbiAgICAgICAgdGhpcy5hbmNob3JNYXJnaW5fLnRvcCA9IG1hcmdpbi50b3AgfHwgMDtcbiAgICAgICAgdGhpcy5hbmNob3JNYXJnaW5fLnJpZ2h0ID0gbWFyZ2luLnJpZ2h0IHx8IDA7XG4gICAgICAgIHRoaXMuYW5jaG9yTWFyZ2luXy5ib3R0b20gPSBtYXJnaW4uYm90dG9tIHx8IDA7XG4gICAgICAgIHRoaXMuYW5jaG9yTWFyZ2luXy5sZWZ0ID0gbWFyZ2luLmxlZnQgfHwgMDtcbiAgICB9O1xuICAgIC8qKiBVc2VkIHRvIGluZGljYXRlIGlmIHRoZSBtZW51LXN1cmZhY2UgaXMgaG9pc3RlZCB0byB0aGUgYm9keS4gKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldElzSG9pc3RlZCA9IGZ1bmN0aW9uIChpc0hvaXN0ZWQpIHtcbiAgICAgICAgdGhpcy5pc0hvaXN0ZWRFbGVtZW50XyA9IGlzSG9pc3RlZDtcbiAgICB9O1xuICAgIC8qKiBVc2VkIHRvIHNldCB0aGUgbWVudS1zdXJmYWNlIGNhbGN1bGF0aW9ucyBiYXNlZCBvbiBhIGZpeGVkIHBvc2l0aW9uIG1lbnUuICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRGaXhlZFBvc2l0aW9uID0gZnVuY3Rpb24gKGlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICB0aGlzLmlzRml4ZWRQb3NpdGlvbl8gPSBpc0ZpeGVkUG9zaXRpb247XG4gICAgfTtcbiAgICAvKiogU2V0cyB0aGUgbWVudS1zdXJmYWNlIHBvc2l0aW9uIG9uIHRoZSBwYWdlLiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0QWJzb2x1dGVQb3NpdGlvbiA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25fLnggPSB0aGlzLmlzRmluaXRlXyh4KSA/IHggOiAwO1xuICAgICAgICB0aGlzLnBvc2l0aW9uXy55ID0gdGhpcy5pc0Zpbml0ZV8oeSkgPyB5IDogMDtcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0UXVpY2tPcGVuID0gZnVuY3Rpb24gKHF1aWNrT3Blbikge1xuICAgICAgICB0aGlzLmlzUXVpY2tPcGVuXyA9IHF1aWNrT3BlbjtcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc09wZW5fO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgbWVudSBzdXJmYWNlLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zYXZlRm9jdXMoKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzUXVpY2tPcGVuXykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkdfT1BFTik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbmltYXRpb25SZXF1ZXN0SWRfID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmFkZENsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLk9QRU4pO1xuICAgICAgICAgICAgX3RoaXMuZGltZW5zaW9uc18gPSBfdGhpcy5hZGFwdGVyXy5nZXRJbm5lckRpbWVuc2lvbnMoKTtcbiAgICAgICAgICAgIF90aGlzLmF1dG9Qb3NpdGlvbl8oKTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5pc1F1aWNrT3Blbl8pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5ub3RpZnlPcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vcGVuQW5pbWF0aW9uRW5kVGltZXJJZF8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub3BlbkFuaW1hdGlvbkVuZFRpbWVySWRfID0gMDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HX09QRU4pO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5ub3RpZnlPcGVuKCk7XG4gICAgICAgICAgICAgICAgfSwgbnVtYmVycy5UUkFOU0lUSU9OX09QRU5fRFVSQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc09wZW5fID0gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgbWVudSBzdXJmYWNlLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5pc1F1aWNrT3Blbl8pIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HX0NMT1NFRCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLk9QRU4pO1xuICAgICAgICAgICAgaWYgKF90aGlzLmlzUXVpY2tPcGVuXykge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLm5vdGlmeUNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8gPSAwO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkdfQ0xPU0VEKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ubm90aWZ5Q2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9LCBudW1iZXJzLlRSQU5TSVRJT05fQ0xPU0VfRFVSQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc09wZW5fID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWF5YmVSZXN0b3JlRm9jdXNfKCk7XG4gICAgfTtcbiAgICAvKiogSGFuZGxlIGNsaWNrcyBhbmQgY2xvc2UgaWYgbm90IHdpdGhpbiBtZW51LXN1cmZhY2UgZWxlbWVudC4gKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUJvZHlDbGljayA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGVsID0gZXZ0LnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNFbGVtZW50SW5Db250YWluZXIoZWwpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH07XG4gICAgLyoqIEhhbmRsZSBrZXlzIHRoYXQgY2xvc2UgdGhlIHN1cmZhY2UuICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVLZXlkb3duID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIga2V5Q29kZSA9IGV2dC5rZXlDb2RlLCBrZXkgPSBldnQua2V5LCBzaGlmdEtleSA9IGV2dC5zaGlmdEtleTtcbiAgICAgICAgdmFyIGlzRXNjYXBlID0ga2V5ID09PSAnRXNjYXBlJyB8fCBrZXlDb2RlID09PSAyNztcbiAgICAgICAgdmFyIGlzVGFiID0ga2V5ID09PSAnVGFiJyB8fCBrZXlDb2RlID09PSA5O1xuICAgICAgICBpZiAoaXNFc2NhcGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1RhYikge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNMYXN0RWxlbWVudEZvY3VzZWQoKSAmJiAhc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzRmlyc3RFbGVtZW50KCk7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFkYXB0ZXJfLmlzRmlyc3RFbGVtZW50Rm9jdXNlZCgpICYmIHNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0xhc3RFbGVtZW50KCk7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuYXV0b1Bvc2l0aW9uXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBDb21wdXRlIG1lYXN1cmVtZW50cyBmb3IgYXV0b3Bvc2l0aW9uIG1ldGhvZHMgcmV1c2UuXG4gICAgICAgIHRoaXMubWVhc3VyZW1lbnRzXyA9IHRoaXMuZ2V0QXV0b0xheW91dE1lYXN1cmVtZW50c18oKTtcbiAgICAgICAgdmFyIGNvcm5lciA9IHRoaXMuZ2V0T3JpZ2luQ29ybmVyXygpO1xuICAgICAgICB2YXIgbWF4TWVudVN1cmZhY2VIZWlnaHQgPSB0aGlzLmdldE1lbnVTdXJmYWNlTWF4SGVpZ2h0Xyhjb3JuZXIpO1xuICAgICAgICB2YXIgdmVydGljYWxBbGlnbm1lbnQgPSB0aGlzLmhhc0JpdF8oY29ybmVyLCBDb3JuZXJCaXQuQk9UVE9NKSA/ICdib3R0b20nIDogJ3RvcCc7XG4gICAgICAgIHZhciBob3Jpem9udGFsQWxpZ25tZW50ID0gdGhpcy5oYXNCaXRfKGNvcm5lciwgQ29ybmVyQml0LlJJR0hUKSA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgICAgIHZhciBob3Jpem9udGFsT2Zmc2V0ID0gdGhpcy5nZXRIb3Jpem9udGFsT3JpZ2luT2Zmc2V0Xyhjb3JuZXIpO1xuICAgICAgICB2YXIgdmVydGljYWxPZmZzZXQgPSB0aGlzLmdldFZlcnRpY2FsT3JpZ2luT2Zmc2V0Xyhjb3JuZXIpO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLm1lYXN1cmVtZW50c18sIGFuY2hvclNpemUgPSBfYi5hbmNob3JTaXplLCBzdXJmYWNlU2l6ZSA9IF9iLnN1cmZhY2VTaXplO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSAoX2EgPSB7fSxcbiAgICAgICAgICAgIF9hW2hvcml6b250YWxBbGlnbm1lbnRdID0gaG9yaXpvbnRhbE9mZnNldCxcbiAgICAgICAgICAgIF9hW3ZlcnRpY2FsQWxpZ25tZW50XSA9IHZlcnRpY2FsT2Zmc2V0LFxuICAgICAgICAgICAgX2EpO1xuICAgICAgICAvLyBDZW50ZXIgYWxpZ24gd2hlbiBhbmNob3Igd2lkdGggaXMgY29tcGFyYWJsZSBvciBncmVhdGVyIHRoYW4gbWVudSBzdXJmYWNlLCBvdGhlcndpc2Uga2VlcCBjb3JuZXIuXG4gICAgICAgIGlmIChhbmNob3JTaXplLndpZHRoIC8gc3VyZmFjZVNpemUud2lkdGggPiBudW1iZXJzLkFOQ0hPUl9UT19NRU5VX1NVUkZBQ0VfV0lEVEhfUkFUSU8pIHtcbiAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQgPSAnY2VudGVyJztcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgbWVudS1zdXJmYWNlIGhhcyBiZWVuIGhvaXN0ZWQgdG8gdGhlIGJvZHksIGl0J3Mgbm8gbG9uZ2VyIHJlbGF0aXZlIHRvIHRoZSBhbmNob3IgZWxlbWVudFxuICAgICAgICBpZiAodGhpcy5pc0hvaXN0ZWRFbGVtZW50XyB8fCB0aGlzLmlzRml4ZWRQb3NpdGlvbl8pIHtcbiAgICAgICAgICAgIHRoaXMuYWRqdXN0UG9zaXRpb25Gb3JIb2lzdGVkRWxlbWVudF8ocG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0VHJhbnNmb3JtT3JpZ2luKGhvcml6b250YWxBbGlnbm1lbnQgKyBcIiBcIiArIHZlcnRpY2FsQWxpZ25tZW50KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0TWF4SGVpZ2h0KG1heE1lbnVTdXJmYWNlSGVpZ2h0ID8gbWF4TWVudVN1cmZhY2VIZWlnaHQgKyAncHgnIDogJycpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBNZWFzdXJlbWVudHMgdXNlZCB0byBwb3NpdGlvbiBtZW51IHN1cmZhY2UgcG9wdXAuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRBdXRvTGF5b3V0TWVhc3VyZW1lbnRzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFuY2hvclJlY3QgPSB0aGlzLmFkYXB0ZXJfLmdldEFuY2hvckRpbWVuc2lvbnMoKTtcbiAgICAgICAgdmFyIGJvZHlTaXplID0gdGhpcy5hZGFwdGVyXy5nZXRCb2R5RGltZW5zaW9ucygpO1xuICAgICAgICB2YXIgdmlld3BvcnRTaXplID0gdGhpcy5hZGFwdGVyXy5nZXRXaW5kb3dEaW1lbnNpb25zKCk7XG4gICAgICAgIHZhciB3aW5kb3dTY3JvbGwgPSB0aGlzLmFkYXB0ZXJfLmdldFdpbmRvd1Njcm9sbCgpO1xuICAgICAgICBpZiAoIWFuY2hvclJlY3QpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBQb3NpdGlvbmFsIHByb3BlcnRpZXMgYXJlIG1vcmUgcmVhZGFibGUgd2hlbiB0aGV5J3JlIGdyb3VwZWQgdG9nZXRoZXJcbiAgICAgICAgICAgIGFuY2hvclJlY3QgPSB7XG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uXy55LFxuICAgICAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uXy54LFxuICAgICAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbl8ueSxcbiAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uXy54LFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbmNob3JTaXplOiBhbmNob3JSZWN0LFxuICAgICAgICAgICAgYm9keVNpemU6IGJvZHlTaXplLFxuICAgICAgICAgICAgc3VyZmFjZVNpemU6IHRoaXMuZGltZW5zaW9uc18sXG4gICAgICAgICAgICB2aWV3cG9ydERpc3RhbmNlOiB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIFBvc2l0aW9uYWwgcHJvcGVydGllcyBhcmUgbW9yZSByZWFkYWJsZSB3aGVuIHRoZXkncmUgZ3JvdXBlZCB0b2dldGhlclxuICAgICAgICAgICAgICAgIHRvcDogYW5jaG9yUmVjdC50b3AsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHZpZXdwb3J0U2l6ZS53aWR0aCAtIGFuY2hvclJlY3QucmlnaHQsXG4gICAgICAgICAgICAgICAgYm90dG9tOiB2aWV3cG9ydFNpemUuaGVpZ2h0IC0gYW5jaG9yUmVjdC5ib3R0b20sXG4gICAgICAgICAgICAgICAgbGVmdDogYW5jaG9yUmVjdC5sZWZ0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpZXdwb3J0U2l6ZTogdmlld3BvcnRTaXplLFxuICAgICAgICAgICAgd2luZG93U2Nyb2xsOiB3aW5kb3dTY3JvbGwsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgY29ybmVyIG9mIHRoZSBhbmNob3IgZnJvbSB3aGljaCB0byBhbmltYXRlIGFuZCBwb3NpdGlvbiB0aGUgbWVudSBzdXJmYWNlLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0T3JpZ2luQ29ybmVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRGVmYXVsdHM6IG9wZW4gZnJvbSB0aGUgdG9wIGxlZnQuXG4gICAgICAgIHZhciBjb3JuZXIgPSBDb3JuZXIuVE9QX0xFRlQ7XG4gICAgICAgIHZhciBfYSA9IHRoaXMubWVhc3VyZW1lbnRzXywgdmlld3BvcnREaXN0YW5jZSA9IF9hLnZpZXdwb3J0RGlzdGFuY2UsIGFuY2hvclNpemUgPSBfYS5hbmNob3JTaXplLCBzdXJmYWNlU2l6ZSA9IF9hLnN1cmZhY2VTaXplO1xuICAgICAgICB2YXIgaXNCb3R0b21BbGlnbmVkID0gdGhpcy5oYXNCaXRfKHRoaXMuYW5jaG9yQ29ybmVyXywgQ29ybmVyQml0LkJPVFRPTSk7XG4gICAgICAgIHZhciBhdmFpbGFibGVUb3AgPSBpc0JvdHRvbUFsaWduZWQgPyB2aWV3cG9ydERpc3RhbmNlLnRvcCArIGFuY2hvclNpemUuaGVpZ2h0ICsgdGhpcy5hbmNob3JNYXJnaW5fLmJvdHRvbVxuICAgICAgICAgICAgOiB2aWV3cG9ydERpc3RhbmNlLnRvcCArIHRoaXMuYW5jaG9yTWFyZ2luXy50b3A7XG4gICAgICAgIHZhciBhdmFpbGFibGVCb3R0b20gPSBpc0JvdHRvbUFsaWduZWQgPyB2aWV3cG9ydERpc3RhbmNlLmJvdHRvbSAtIHRoaXMuYW5jaG9yTWFyZ2luXy5ib3R0b21cbiAgICAgICAgICAgIDogdmlld3BvcnREaXN0YW5jZS5ib3R0b20gKyBhbmNob3JTaXplLmhlaWdodCAtIHRoaXMuYW5jaG9yTWFyZ2luXy50b3A7XG4gICAgICAgIHZhciB0b3BPdmVyZmxvdyA9IHN1cmZhY2VTaXplLmhlaWdodCAtIGF2YWlsYWJsZVRvcDtcbiAgICAgICAgdmFyIGJvdHRvbU92ZXJmbG93ID0gc3VyZmFjZVNpemUuaGVpZ2h0IC0gYXZhaWxhYmxlQm90dG9tO1xuICAgICAgICBpZiAoYm90dG9tT3ZlcmZsb3cgPiAwICYmIHRvcE92ZXJmbG93IDwgYm90dG9tT3ZlcmZsb3cpIHtcbiAgICAgICAgICAgIGNvcm5lciA9IHRoaXMuc2V0Qml0Xyhjb3JuZXIsIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc1J0bCA9IHRoaXMuYWRhcHRlcl8uaXNSdGwoKTtcbiAgICAgICAgdmFyIGlzRmxpcFJ0bCA9IHRoaXMuaGFzQml0Xyh0aGlzLmFuY2hvckNvcm5lcl8sIENvcm5lckJpdC5GTElQX1JUTCk7XG4gICAgICAgIHZhciBhdm9pZEhvcml6b250YWxPdmVybGFwID0gdGhpcy5oYXNCaXRfKHRoaXMuYW5jaG9yQ29ybmVyXywgQ29ybmVyQml0LlJJR0hUKTtcbiAgICAgICAgdmFyIGlzQWxpZ25lZFJpZ2h0ID0gKGF2b2lkSG9yaXpvbnRhbE92ZXJsYXAgJiYgIWlzUnRsKSB8fFxuICAgICAgICAgICAgKCFhdm9pZEhvcml6b250YWxPdmVybGFwICYmIGlzRmxpcFJ0bCAmJiBpc1J0bCk7XG4gICAgICAgIHZhciBhdmFpbGFibGVMZWZ0ID0gaXNBbGlnbmVkUmlnaHQgPyB2aWV3cG9ydERpc3RhbmNlLmxlZnQgKyBhbmNob3JTaXplLndpZHRoICsgdGhpcy5hbmNob3JNYXJnaW5fLnJpZ2h0IDpcbiAgICAgICAgICAgIHZpZXdwb3J0RGlzdGFuY2UubGVmdCArIHRoaXMuYW5jaG9yTWFyZ2luXy5sZWZ0O1xuICAgICAgICB2YXIgYXZhaWxhYmxlUmlnaHQgPSBpc0FsaWduZWRSaWdodCA/IHZpZXdwb3J0RGlzdGFuY2UucmlnaHQgLSB0aGlzLmFuY2hvck1hcmdpbl8ucmlnaHQgOlxuICAgICAgICAgICAgdmlld3BvcnREaXN0YW5jZS5yaWdodCArIGFuY2hvclNpemUud2lkdGggLSB0aGlzLmFuY2hvck1hcmdpbl8ubGVmdDtcbiAgICAgICAgdmFyIGxlZnRPdmVyZmxvdyA9IHN1cmZhY2VTaXplLndpZHRoIC0gYXZhaWxhYmxlTGVmdDtcbiAgICAgICAgdmFyIHJpZ2h0T3ZlcmZsb3cgPSBzdXJmYWNlU2l6ZS53aWR0aCAtIGF2YWlsYWJsZVJpZ2h0O1xuICAgICAgICBpZiAoKGxlZnRPdmVyZmxvdyA8IDAgJiYgaXNBbGlnbmVkUmlnaHQgJiYgaXNSdGwpIHx8XG4gICAgICAgICAgICAoYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCAmJiAhaXNBbGlnbmVkUmlnaHQgJiYgbGVmdE92ZXJmbG93IDwgMCkgfHxcbiAgICAgICAgICAgIChyaWdodE92ZXJmbG93ID4gMCAmJiBsZWZ0T3ZlcmZsb3cgPCByaWdodE92ZXJmbG93KSkge1xuICAgICAgICAgICAgY29ybmVyID0gdGhpcy5zZXRCaXRfKGNvcm5lciwgQ29ybmVyQml0LlJJR0hUKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29ybmVyO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvcm5lciBPcmlnaW4gY29ybmVyIG9mIHRoZSBtZW51IHN1cmZhY2UuXG4gICAgICogQHJldHVybiBNYXhpbXVtIGhlaWdodCBvZiB0aGUgbWVudSBzdXJmYWNlLCBiYXNlZCBvbiBhdmFpbGFibGUgc3BhY2UuIDAgaW5kaWNhdGVzIHNob3VsZCBub3QgYmUgc2V0LlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0TWVudVN1cmZhY2VNYXhIZWlnaHRfID0gZnVuY3Rpb24gKGNvcm5lcikge1xuICAgICAgICB2YXIgdmlld3BvcnREaXN0YW5jZSA9IHRoaXMubWVhc3VyZW1lbnRzXy52aWV3cG9ydERpc3RhbmNlO1xuICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gMDtcbiAgICAgICAgdmFyIGlzQm90dG9tQWxpZ25lZCA9IHRoaXMuaGFzQml0Xyhjb3JuZXIsIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB2YXIgaXNCb3R0b21BbmNob3JlZCA9IHRoaXMuaGFzQml0Xyh0aGlzLmFuY2hvckNvcm5lcl8sIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB2YXIgTUFSR0lOX1RPX0VER0UgPSBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ubnVtYmVycy5NQVJHSU5fVE9fRURHRTtcbiAgICAgICAgLy8gV2hlbiBtYXhpbXVtIGhlaWdodCBpcyBub3Qgc3BlY2lmaWVkLCBpdCBpcyBoYW5kbGVkIGZyb20gQ1NTLlxuICAgICAgICBpZiAoaXNCb3R0b21BbGlnbmVkKSB7XG4gICAgICAgICAgICBtYXhIZWlnaHQgPSB2aWV3cG9ydERpc3RhbmNlLnRvcCArIHRoaXMuYW5jaG9yTWFyZ2luXy50b3AgLSBNQVJHSU5fVE9fRURHRTtcbiAgICAgICAgICAgIGlmICghaXNCb3R0b21BbmNob3JlZCkge1xuICAgICAgICAgICAgICAgIG1heEhlaWdodCArPSB0aGlzLm1lYXN1cmVtZW50c18uYW5jaG9yU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtYXhIZWlnaHQgPVxuICAgICAgICAgICAgICAgIHZpZXdwb3J0RGlzdGFuY2UuYm90dG9tIC0gdGhpcy5hbmNob3JNYXJnaW5fLmJvdHRvbSArIHRoaXMubWVhc3VyZW1lbnRzXy5hbmNob3JTaXplLmhlaWdodCAtIE1BUkdJTl9UT19FREdFO1xuICAgICAgICAgICAgaWYgKGlzQm90dG9tQW5jaG9yZWQpIHtcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQgLT0gdGhpcy5tZWFzdXJlbWVudHNfLmFuY2hvclNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXhIZWlnaHQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29ybmVyIE9yaWdpbiBjb3JuZXIgb2YgdGhlIG1lbnUgc3VyZmFjZS5cbiAgICAgKiBAcmV0dXJuIEhvcml6b250YWwgb2Zmc2V0IG9mIG1lbnUgc3VyZmFjZSBvcmlnaW4gY29ybmVyIGZyb20gY29ycmVzcG9uZGluZyBhbmNob3IgY29ybmVyLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0SG9yaXpvbnRhbE9yaWdpbk9mZnNldF8gPSBmdW5jdGlvbiAoY29ybmVyKSB7XG4gICAgICAgIHZhciBhbmNob3JTaXplID0gdGhpcy5tZWFzdXJlbWVudHNfLmFuY2hvclNpemU7XG4gICAgICAgIC8vIGlzUmlnaHRBbGlnbmVkIGNvcnJlc3BvbmRzIHRvIHVzaW5nIHRoZSAncmlnaHQnIHByb3BlcnR5IG9uIHRoZSBzdXJmYWNlLlxuICAgICAgICB2YXIgaXNSaWdodEFsaWduZWQgPSB0aGlzLmhhc0JpdF8oY29ybmVyLCBDb3JuZXJCaXQuUklHSFQpO1xuICAgICAgICB2YXIgYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCA9IHRoaXMuaGFzQml0Xyh0aGlzLmFuY2hvckNvcm5lcl8sIENvcm5lckJpdC5SSUdIVCk7XG4gICAgICAgIGlmIChpc1JpZ2h0QWxpZ25lZCkge1xuICAgICAgICAgICAgdmFyIHJpZ2h0T2Zmc2V0ID0gYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCA/IGFuY2hvclNpemUud2lkdGggLSB0aGlzLmFuY2hvck1hcmdpbl8ubGVmdCA6IHRoaXMuYW5jaG9yTWFyZ2luXy5yaWdodDtcbiAgICAgICAgICAgIC8vIEZvciBob2lzdGVkIG9yIGZpeGVkIGVsZW1lbnRzLCBhZGp1c3QgdGhlIG9mZnNldCBieSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHZpZXdwb3J0IHdpZHRoIGFuZCBib2R5IHdpZHRoIHNvXG4gICAgICAgICAgICAvLyB3aGVuIHdlIGNhbGN1bGF0ZSB0aGUgcmlnaHQgdmFsdWUgKGBhZGp1c3RQb3NpdGlvbkZvckhvaXN0ZWRFbGVtZW50X2ApIGJhc2VkIG9uIHRoZSBlbGVtZW50IHBvc2l0aW9uLFxuICAgICAgICAgICAgLy8gdGhlIHJpZ2h0IHByb3BlcnR5IGlzIGNvcnJlY3QuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0hvaXN0ZWRFbGVtZW50XyB8fCB0aGlzLmlzRml4ZWRQb3NpdGlvbl8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmlnaHRPZmZzZXQgLSAodGhpcy5tZWFzdXJlbWVudHNfLnZpZXdwb3J0U2l6ZS53aWR0aCAtIHRoaXMubWVhc3VyZW1lbnRzXy5ib2R5U2l6ZS53aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmlnaHRPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF2b2lkSG9yaXpvbnRhbE92ZXJsYXAgPyBhbmNob3JTaXplLndpZHRoIC0gdGhpcy5hbmNob3JNYXJnaW5fLnJpZ2h0IDogdGhpcy5hbmNob3JNYXJnaW5fLmxlZnQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29ybmVyIE9yaWdpbiBjb3JuZXIgb2YgdGhlIG1lbnUgc3VyZmFjZS5cbiAgICAgKiBAcmV0dXJuIFZlcnRpY2FsIG9mZnNldCBvZiBtZW51IHN1cmZhY2Ugb3JpZ2luIGNvcm5lciBmcm9tIGNvcnJlc3BvbmRpbmcgYW5jaG9yIGNvcm5lci5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldFZlcnRpY2FsT3JpZ2luT2Zmc2V0XyA9IGZ1bmN0aW9uIChjb3JuZXIpIHtcbiAgICAgICAgdmFyIGFuY2hvclNpemUgPSB0aGlzLm1lYXN1cmVtZW50c18uYW5jaG9yU2l6ZTtcbiAgICAgICAgdmFyIGlzQm90dG9tQWxpZ25lZCA9IHRoaXMuaGFzQml0Xyhjb3JuZXIsIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB2YXIgYXZvaWRWZXJ0aWNhbE92ZXJsYXAgPSB0aGlzLmhhc0JpdF8odGhpcy5hbmNob3JDb3JuZXJfLCBDb3JuZXJCaXQuQk9UVE9NKTtcbiAgICAgICAgdmFyIHkgPSAwO1xuICAgICAgICBpZiAoaXNCb3R0b21BbGlnbmVkKSB7XG4gICAgICAgICAgICB5ID0gYXZvaWRWZXJ0aWNhbE92ZXJsYXAgPyBhbmNob3JTaXplLmhlaWdodCAtIHRoaXMuYW5jaG9yTWFyZ2luXy50b3AgOiAtdGhpcy5hbmNob3JNYXJnaW5fLmJvdHRvbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHkgPSBhdm9pZFZlcnRpY2FsT3ZlcmxhcCA/IChhbmNob3JTaXplLmhlaWdodCArIHRoaXMuYW5jaG9yTWFyZ2luXy5ib3R0b20pIDogdGhpcy5hbmNob3JNYXJnaW5fLnRvcDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geTtcbiAgICB9O1xuICAgIC8qKiBDYWxjdWxhdGVzIHRoZSBvZmZzZXRzIGZvciBwb3NpdGlvbmluZyB0aGUgbWVudS1zdXJmYWNlIHdoZW4gdGhlIG1lbnUtc3VyZmFjZSBoYXMgYmVlbiBob2lzdGVkIHRvIHRoZSBib2R5LiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuYWRqdXN0UG9zaXRpb25Gb3JIb2lzdGVkRWxlbWVudF8gPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIHZhciBfYiA9IHRoaXMubWVhc3VyZW1lbnRzXywgd2luZG93U2Nyb2xsID0gX2Iud2luZG93U2Nyb2xsLCB2aWV3cG9ydERpc3RhbmNlID0gX2Iudmlld3BvcnREaXN0YW5jZTtcbiAgICAgICAgdmFyIHByb3BzID0gT2JqZWN0LmtleXMocG9zaXRpb24pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcHNfMSA9IHRzbGliXzEuX192YWx1ZXMocHJvcHMpLCBwcm9wc18xXzEgPSBwcm9wc18xLm5leHQoKTsgIXByb3BzXzFfMS5kb25lOyBwcm9wc18xXzEgPSBwcm9wc18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBvc2l0aW9uW3Byb3BdIHx8IDA7XG4gICAgICAgICAgICAgICAgLy8gSG9pc3RlZCBzdXJmYWNlcyBuZWVkIHRvIGhhdmUgdGhlIGFuY2hvciBlbGVtZW50cyBsb2NhdGlvbiBvbiB0aGUgcGFnZSBhZGRlZCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbiBwcm9wZXJ0aWVzIGZvciBwcm9wZXIgYWxpZ25tZW50IG9uIHRoZSBib2R5LlxuICAgICAgICAgICAgICAgIHZhbHVlICs9IHZpZXdwb3J0RGlzdGFuY2VbcHJvcF07XG4gICAgICAgICAgICAgICAgLy8gU3VyZmFjZXMgdGhhdCBhcmUgYWJzb2x1dGVseSBwb3NpdGlvbmVkIG5lZWQgdG8gaGF2ZSBhZGRpdGlvbmFsIGNhbGN1bGF0aW9ucyBmb3Igc2Nyb2xsXG4gICAgICAgICAgICAgICAgLy8gYW5kIGJvdHRvbSBwb3NpdGlvbmluZy5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXhlZFBvc2l0aW9uXykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IHdpbmRvd1Njcm9sbC55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAtPSB3aW5kb3dTY3JvbGwueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IHdpbmRvd1Njcm9sbC54O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyAvLyBwcm9wID09PSAncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAtPSB3aW5kb3dTY3JvbGwueDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbltwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNfMV8xICYmICFwcm9wc18xXzEuZG9uZSAmJiAoX2EgPSBwcm9wc18xLnJldHVybikpIF9hLmNhbGwocHJvcHNfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBsYXN0IGZvY3VzZWQgZWxlbWVudCB3aGVuIHRoZSBtZW51IHN1cmZhY2Ugd2FzIG9wZW5lZCBzaG91bGQgcmVnYWluIGZvY3VzLCBpZiB0aGUgdXNlciBpc1xuICAgICAqIGZvY3VzZWQgb24gb3Igd2l0aGluIHRoZSBtZW51IHN1cmZhY2Ugd2hlbiBpdCBpcyBjbG9zZWQuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5tYXliZVJlc3RvcmVGb2N1c18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpc1Jvb3RGb2N1c2VkID0gdGhpcy5hZGFwdGVyXy5pc0ZvY3VzZWQoKTtcbiAgICAgICAgdmFyIGNoaWxkSGFzRm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIHRoaXMuYWRhcHRlcl8uaXNFbGVtZW50SW5Db250YWluZXIoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgIGlmIChpc1Jvb3RGb2N1c2VkIHx8IGNoaWxkSGFzRm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVzdG9yZUZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFzQml0XyA9IGZ1bmN0aW9uIChjb3JuZXIsIGJpdCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihjb3JuZXIgJiBiaXQpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWJpdHdpc2VcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0Qml0XyA9IGZ1bmN0aW9uIChjb3JuZXIsIGJpdCkge1xuICAgICAgICByZXR1cm4gY29ybmVyIHwgYml0OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWJpdHdpc2VcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIGlzRmluaXRlIHRoYXQgZG9lc24ndCBmb3JjZSBjb252ZXJzaW9uIHRvIG51bWJlciB0eXBlLlxuICAgICAqIEVxdWl2YWxlbnQgdG8gTnVtYmVyLmlzRmluaXRlIGluIEVTMjAxNSwgd2hpY2ggaXMgbm90IHN1cHBvcnRlZCBpbiBJRS5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmlzRmluaXRlXyA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInICYmIGlzRmluaXRlKG51bSk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENNZW51U3VyZmFjZUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgTUVOVV9TRUxFQ1RFRF9MSVNUX0lURU06ICdtZGMtbWVudS1pdGVtLS1zZWxlY3RlZCcsXG4gICAgTUVOVV9TRUxFQ1RJT05fR1JPVVA6ICdtZGMtbWVudV9fc2VsZWN0aW9uLWdyb3VwJyxcbiAgICBST09UOiAnbWRjLW1lbnUnLFxufTtcbnZhciBzdHJpbmdzID0ge1xuICAgIEFSSUFfU0VMRUNURURfQVRUUjogJ2FyaWEtc2VsZWN0ZWQnLFxuICAgIENIRUNLQk9YX1NFTEVDVE9SOiAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyxcbiAgICBMSVNUX1NFTEVDVE9SOiAnLm1kYy1saXN0JyxcbiAgICBTRUxFQ1RFRF9FVkVOVDogJ01EQ01lbnU6c2VsZWN0ZWQnLFxufTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBNRENMaXN0Rm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9saXN0L2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL21lbnUtc3VyZmFjZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDTWVudUZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDTWVudUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTWVudUZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENNZW51Rm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8gPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51Rm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnVGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHNlZSB7QGxpbmsgTURDTWVudUFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHR5cGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzc1RvRWxlbWVudEF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzc0Zyb21FbGVtZW50QXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGFkZEF0dHJpYnV0ZVRvRWxlbWVudEF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVBdHRyaWJ1dGVGcm9tRWxlbWVudEF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBlbGVtZW50Q29udGFpbnNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgY2xvc2VTdXJmYWNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0RWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiAtMTsgfSxcbiAgICAgICAgICAgICAgICBnZXRQYXJlbnRFbGVtZW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgICAgIGdldFNlbGVjdGVkRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiAtMTsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlTZWxlY3RlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmNsb3NlU3VyZmFjZSgpO1xuICAgIH07XG4gICAgTURDTWVudUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUtleWRvd24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBrZXkgPSBldnQua2V5LCBrZXlDb2RlID0gZXZ0LmtleUNvZGU7XG4gICAgICAgIHZhciBpc1RhYiA9IGtleSA9PT0gJ1RhYicgfHwga2V5Q29kZSA9PT0gOTtcbiAgICAgICAgaWYgKGlzVGFiKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmNsb3NlU3VyZmFjZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENNZW51Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlSXRlbUFjdGlvbiA9IGZ1bmN0aW9uIChsaXN0SXRlbSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldEVsZW1lbnRJbmRleChsaXN0SXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeVNlbGVjdGVkKHsgaW5kZXg6IGluZGV4IH0pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmNsb3NlU3VyZmFjZSgpO1xuICAgICAgICAvLyBXYWl0IGZvciB0aGUgbWVudSB0byBjbG9zZSBiZWZvcmUgYWRkaW5nL3JlbW92aW5nIGNsYXNzZXMgdGhhdCBhZmZlY3Qgc3R5bGVzLlxuICAgICAgICB0aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZF8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3Rpb25Hcm91cCA9IF90aGlzLmdldFNlbGVjdGlvbkdyb3VwXyhsaXN0SXRlbSk7XG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uR3JvdXApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVTZWxlY3Rpb25Hcm91cF8oc2VsZWN0aW9uR3JvdXAsIGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLm51bWJlcnMuVFJBTlNJVElPTl9DTE9TRV9EVVJBVElPTik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRvZ2dsaW5nIHRoZSBzZWxlY3RlZCBjbGFzc2VzIGluIGEgc2VsZWN0aW9uIGdyb3VwIHdoZW4gYSBzZWxlY3Rpb24gaXMgbWFkZS5cbiAgICAgKi9cbiAgICBNRENNZW51Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlU2VsZWN0aW9uR3JvdXBfID0gZnVuY3Rpb24gKHNlbGVjdGlvbkdyb3VwLCBpbmRleCkge1xuICAgICAgICAvLyBEZS1zZWxlY3QgdGhlIHByZXZpb3VzIHNlbGVjdGlvbiBpbiB0aGlzIGdyb3VwLlxuICAgICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0U2VsZWN0ZWRFbGVtZW50SW5kZXgoc2VsZWN0aW9uR3JvdXApO1xuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUF0dHJpYnV0ZUZyb21FbGVtZW50QXRJbmRleChzZWxlY3RlZEluZGV4LCBzdHJpbmdzLkFSSUFfU0VMRUNURURfQVRUUik7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnRBdEluZGV4KHNlbGVjdGVkSW5kZXgsIGNzc0NsYXNzZXMuTUVOVV9TRUxFQ1RFRF9MSVNUX0lURU0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNlbGVjdCB0aGUgbmV3IGxpc3QgaXRlbSBpbiB0aGlzIGdyb3VwLlxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzVG9FbGVtZW50QXRJbmRleChpbmRleCwgY3NzQ2xhc3Nlcy5NRU5VX1NFTEVDVEVEX0xJU1RfSVRFTSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQXR0cmlidXRlVG9FbGVtZW50QXRJbmRleChpbmRleCwgc3RyaW5ncy5BUklBX1NFTEVDVEVEX0FUVFIsICd0cnVlJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwYXJlbnQgc2VsZWN0aW9uIGdyb3VwIG9mIGFuIGVsZW1lbnQgaWYgb25lIGV4aXN0cy5cbiAgICAgKi9cbiAgICBNRENNZW51Rm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0U2VsZWN0aW9uR3JvdXBfID0gZnVuY3Rpb24gKGxpc3RJdGVtKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLmFkYXB0ZXJfLmdldFBhcmVudEVsZW1lbnQobGlzdEl0ZW0pO1xuICAgICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzR3JvdXAgPSB0aGlzLmFkYXB0ZXJfLmVsZW1lbnRDb250YWluc0NsYXNzKHBhcmVudCwgY3NzQ2xhc3Nlcy5NRU5VX1NFTEVDVElPTl9HUk9VUCk7XG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBhbmNlc3RvcnMgdW50aWwgd2UgZmluZCB0aGUgZ3JvdXAgb3IgZ2V0IHRvIHRoZSBsaXN0LlxuICAgICAgICB3aGlsZSAoIWlzR3JvdXAgJiYgcGFyZW50ICYmICF0aGlzLmFkYXB0ZXJfLmVsZW1lbnRDb250YWluc0NsYXNzKHBhcmVudCwgTURDTGlzdEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5ST09UKSkge1xuICAgICAgICAgICAgcGFyZW50ID0gdGhpcy5hZGFwdGVyXy5nZXRQYXJlbnRFbGVtZW50KHBhcmVudCk7XG4gICAgICAgICAgICBpc0dyb3VwID0gcGFyZW50ID8gdGhpcy5hZGFwdGVyXy5lbGVtZW50Q29udGFpbnNDbGFzcyhwYXJlbnQsIGNzc0NsYXNzZXMuTUVOVV9TRUxFQ1RJT05fR1JPVVApIDogZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzR3JvdXApIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ01lbnVGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENNZW51Rm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ01lbnVGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCI8dGVtcGxhdGU+XG4gIDxtZGMtbWVudS1zdXJmYWNlXG4gICAgcmVmPVwicm9vdFwiXG4gICAgOnF1aWNrLW9wZW49XCJxdWlja09wZW5cIlxuICAgIDpvcGVuPVwib3BlblwiXG4gICAgQGNoYW5nZT1cIm9uQ2hhbmdlXCJcbiAgICBAa2V5ZG93bj1cImhhbmRsZUtleWRvd25cIlxuICA+XG4gICAgPG1kYy1saXN0IHJlZj1cImxpc3RcIiBATURDTGlzdDphY3Rpb24ubmF0aXZlPVwiaGFuZGxlQWN0aW9uXCI+XG4gICAgICA8c2xvdCAvPlxuICAgIDwvbWRjLWxpc3Q+XG4gIDwvbWRjLW1lbnUtc3VyZmFjZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBNRENNZW51Rm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9tZW51L2ZvdW5kYXRpb24nXG5pbXBvcnQgeyBlbWl0Q3VzdG9tRXZlbnQgfSBmcm9tICcuLi9iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtbWVudScsXG4gIG1vZGVsOiB7XG4gICAgcHJvcDogJ29wZW4nLFxuICAgIGV2ZW50OiAnY2hhbmdlJ1xuICB9LFxuICBwcm9wczoge1xuICAgIG9wZW46IFtCb29sZWFuLCBPYmplY3RdLFxuICAgICdxdWljay1vcGVuJzogQm9vbGVhbixcbiAgICAnYW5jaG9yLWNvcm5lcic6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgJ2FuY2hvci1tYXJnaW4nOiBPYmplY3RcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuICBwcm92aWRlKCkge1xuICAgIHJldHVybiB7IG1kY01lbnU6IHRoaXMgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIC8vIGFuY2hvckNvcm5lcihudikge1xuICAgIC8vICAgdGhpcy5mb3VuZGF0aW9uLnNldEFuY2hvckNvcm5lcihOdW1iZXIobnYpKVxuICAgIC8vIH0sXG4gICAgLy8gYW5jaG9yTWFyZ2luKG52KSB7XG4gICAgLy8gICB0aGlzLmZvdW5kYXRpb24uc2V0QW5jaG9yTWFyZ2luKG52KVxuICAgIC8vIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLl9wcmV2aW91c0ZvY3VzID0gdW5kZWZpbmVkXG5cbiAgICB0aGlzLmZvdW5kYXRpb24gPSBuZXcgTURDTWVudUZvdW5kYXRpb24oe1xuICAgICAgYWRkQ2xhc3NUb0VsZW1lbnRBdEluZGV4OiAoaW5kZXgsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5pdGVtc1xuICAgICAgICBsaXN0W2luZGV4XS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgIH0sXG4gICAgICByZW1vdmVDbGFzc0Zyb21FbGVtZW50QXRJbmRleDogKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuaXRlbXNcbiAgICAgICAgbGlzdFtpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgICB9LFxuICAgICAgYWRkQXR0cmlidXRlVG9FbGVtZW50QXRJbmRleDogKGluZGV4LCBhdHRyLCB2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5pdGVtc1xuICAgICAgICBsaXN0W2luZGV4XS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpXG4gICAgICB9LFxuICAgICAgcmVtb3ZlQXR0cmlidXRlRnJvbUVsZW1lbnRBdEluZGV4OiAoaW5kZXgsIGF0dHIpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuaXRlbXNcbiAgICAgICAgbGlzdFtpbmRleF0ucmVtb3ZlQXR0cmlidXRlKGF0dHIpXG4gICAgICB9LFxuICAgICAgZWxlbWVudENvbnRhaW5zQ2xhc3M6IChlbGVtZW50LCBjbGFzc05hbWUpID0+XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSksXG4gICAgICBjbG9zZVN1cmZhY2U6ICgpID0+IHtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZmFsc2UpXG4gICAgICB9LFxuICAgICAgZ2V0RWxlbWVudEluZGV4OiBlbGVtZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuaW5kZXhPZihlbGVtZW50KVxuICAgICAgfSxcbiAgICAgIGdldFBhcmVudEVsZW1lbnQ6IGVsZW1lbnQgPT4gZWxlbWVudC5wYXJlbnRFbGVtZW50LFxuICAgICAgZ2V0U2VsZWN0ZWRFbGVtZW50SW5kZXg6IHNlbGVjdGlvbkdyb3VwID0+IHtcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5pdGVtcy5pbmRleE9mKFxuICAgICAgICAgIHNlbGVjdGlvbkdyb3VwLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLiR7TURDTWVudUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5NRU5VX1NFTEVDVEVEX0xJU1RfSVRFTX1gXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBpZHhcbiAgICAgIH0sXG4gICAgICBub3RpZnlTZWxlY3RlZDogZXZ0RGF0YSA9PiB7XG4gICAgICAgIGVtaXRDdXN0b21FdmVudCh0aGlzLiRlbCwgTURDTWVudUZvdW5kYXRpb24uc3RyaW5ncy5TRUxFQ1RFRF9FVkVOVCwge1xuICAgICAgICAgIGluZGV4OiBldnREYXRhLmluZGV4LFxuICAgICAgICAgIGl0ZW06IHRoaXMuaXRlbXNbZXZ0RGF0YS5pbmRleF1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCB7XG4gICAgICAgICAgaW5kZXg6IGV2dERhdGEuaW5kZXgsXG4gICAgICAgICAgaXRlbTogdGhpcy5pdGVtc1tldnREYXRhLmluZGV4XVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5fcHJldmlvdXNGb2N1cyA9IG51bGxcbiAgICB0aGlzLmZvdW5kYXRpb24uZGVzdHJveSgpXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBpdGVtcygpIHtcbiAgICAgIHJldHVybiB0aGlzLiRyZWZzLmxpc3QubGlzdEVsZW1lbnRzXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVBY3Rpb24oeyBkZXRhaWw6IHsgaW5kZXggfSB9KSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlSXRlbUFjdGlvbih0aGlzLml0ZW1zW2luZGV4XSlcbiAgICB9LFxuXG4gICAgaGFuZGxlS2V5ZG93bihldnQpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVLZXlkb3duKGV2dClcbiAgICB9LFxuICAgIG9uQ2hhbmdlKGl0ZW0pIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGl0ZW0pXG4gICAgfVxuICAgIC8vIG9uT3Blbl8odmFsdWUpIHtcbiAgICAvLyAgIGlmICh2YWx1ZSkge1xuICAgIC8vICAgICB0aGlzLmZvdW5kYXRpb24ub3Blbih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB2b2lkIDApXG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB0aGlzLmZvdW5kYXRpb24uY2xvc2UoKVxuICAgIC8vICAgfVxuICAgIC8vIH0sXG4gICAgLy8gc2hvdyhvcHRpb25zKSB7XG4gICAgLy8gICB0aGlzLmZvdW5kYXRpb24ub3BlbihvcHRpb25zKVxuICAgIC8vIH0sXG4gICAgLy8gaGlkZSgpIHtcbiAgICAvLyAgIHRoaXMuZm91bmRhdGlvbi5jbG9zZSgpXG4gICAgLy8gfSxcbiAgICAvLyBpc09wZW4oKSB7XG4gICAgLy8gICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uID8gdGhpcy5mb3VuZGF0aW9uLmlzT3BlbigpIDogZmFsc2VcbiAgICAvLyB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY2FjaGVkQ3NzVHJhbnNmb3JtUHJvcGVydHlOYW1lXztcbi8qKlxuICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgY29ycmVjdCB0cmFuc2Zvcm0gcHJvcGVydHkgdG8gdXNlIG9uIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gKi9cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVByb3BlcnR5TmFtZShnbG9iYWxPYmosIGZvcmNlUmVmcmVzaCkge1xuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxuICAgIGlmIChjYWNoZWRDc3NUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHZhciBlbCA9IGdsb2JhbE9iai5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FjaGVkQ3NzVHJhbnNmb3JtUHJvcGVydHlOYW1lXyA9ICd0cmFuc2Zvcm0nIGluIGVsLnN0eWxlID8gJ3RyYW5zZm9ybScgOiAnd2Via2l0VHJhbnNmb3JtJztcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZENzc1RyYW5zZm9ybVByb3BlcnR5TmFtZV87XG59XG5leHBvcnQgeyBnZXRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgOmNsYXNzPVwiY2xhc3Nlc1wiXG4gICAgY2xhc3M9XCJtZGMtbWVudSBtZGMtbWVudS1zdXJmYWNlXCJcbiAgICBAa2V5ZG93bj1cImhhbmRsZUtleWRvd25cIlxuICAgIEBNRENNZW51U3VyZmFjZTpvcGVuZWQ9XCJyZWdpc3RlckJvZHlDbGlja0xpc3RlbmVyXCJcbiAgICBATURDTWVudVN1cmZhY2U6Y2xvc2VkPVwiZGVyZWdpc3RlckJvZHlDbGlja0xpc3RlbmVyXCJcbiAgPlxuICAgIDxzbG90IC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvZm91bmRhdGlvbidcbmltcG9ydCB7IGVtaXRDdXN0b21FdmVudCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJ0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLW1lbnUtc3VyZmFjZScsXG4gIG1vZGVsOiB7XG4gICAgcHJvcDogJ29wZW4nLFxuICAgIGV2ZW50OiAnY2hhbmdlJ1xuICB9LFxuICBwcm9wczoge1xuICAgIG9wZW46IFtCb29sZWFuLCBPYmplY3RdLFxuICAgICdxdWljay1vcGVuJzogQm9vbGVhbixcbiAgICAnYW5jaG9yLWNvcm5lcic6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgJ2FuY2hvci1tYXJnaW4nOiBPYmplY3RcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuICBwcm92aWRlKCkge1xuICAgIHJldHVybiB7IG1kY01lbnU6IHRoaXMgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIG9wZW46ICdvbk9wZW5fJyxcbiAgICBxdWlja09wZW4obnYpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRRdWlja09wZW4obnYpXG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuX3ByZXZpb3VzRm9jdXMgPSB1bmRlZmluZWRcblxuICAgIHRoaXMuZm91bmRhdGlvbiA9IG5ldyBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24oXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYWRkQ2xhc3M6IGNsYXNzTmFtZSA9PiB0aGlzLiRzZXQodGhpcy5jbGFzc2VzLCBjbGFzc05hbWUsIHRydWUpLFxuICAgICAgICAgIHJlbW92ZUNsYXNzOiBjbGFzc05hbWUgPT4gdGhpcy4kZGVsZXRlKHRoaXMuY2xhc3NlcywgY2xhc3NOYW1lKSxcbiAgICAgICAgICBoYXNDbGFzczogY2xhc3NOYW1lID0+IHRoaXMuJGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgICAgIGhhc0FuY2hvcjogKCkgPT4gISF0aGlzLmFuY2hvckVsZW1lbnQsXG4gICAgICAgICAgbm90aWZ5Q2xvc2U6ICgpID0+IHtcbiAgICAgICAgICAgIGVtaXRDdXN0b21FdmVudChcbiAgICAgICAgICAgICAgdGhpcy4kZWwsXG4gICAgICAgICAgICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5zdHJpbmdzLkNMT1NFRF9FVkVOVCxcbiAgICAgICAgICAgICAge31cbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZmFsc2UpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBub3RpZnlPcGVuOiAoKSA9PiB7XG4gICAgICAgICAgICBlbWl0Q3VzdG9tRXZlbnQoXG4gICAgICAgICAgICAgIHRoaXMuJGVsLFxuICAgICAgICAgICAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uc3RyaW5ncy5PUEVORURfRVZFTlQsXG4gICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRydWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc0VsZW1lbnRJbkNvbnRhaW5lcjogZWwgPT4gdGhpcy4kZWwgPT09IGVsIHx8IHRoaXMuJGVsLmNvbnRhaW5zKGVsKSxcbiAgICAgICAgICBpc1J0bDogKCkgPT5cbiAgICAgICAgICAgIGdldENvbXB1dGVkU3R5bGUodGhpcy4kZWwpLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJyxcbiAgICAgICAgICBzZXRUcmFuc2Zvcm1PcmlnaW46IG9yaWdpbiA9PiB7XG4gICAgICAgICAgICB0aGlzLiRlbC5zdHlsZVtcbiAgICAgICAgICAgICAgYCR7dXRpbC5nZXRUcmFuc2Zvcm1Qcm9wZXJ0eU5hbWUod2luZG93KX0tb3JpZ2luYFxuICAgICAgICAgICAgXSA9IG9yaWdpblxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5nZXRGb2N1c0FkYXB0ZXJNZXRob2RzKCksXG4gICAgICAgIHRoaXMuZ2V0RGltZW5zaW9uQWRhcHRlck1ldGhvZHMoKVxuICAgICAgKVxuICAgIClcblxuICAgIGlmIChcbiAgICAgIHRoaXMuJGVsLnBhcmVudEVsZW1lbnQgJiZcbiAgICAgIHRoaXMuJGVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFxuICAgICAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTkNIT1JcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHRoaXMuYW5jaG9yRWxlbWVudCA9IHRoaXMuJGVsLnBhcmVudEVsZW1lbnRcbiAgICB9XG5cbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5fcHJldmlvdXNGb2N1cyA9IG51bGxcblxuICAgIHRoaXMuZm91bmRhdGlvbi5kZXN0cm95KClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlQm9keUNsaWNrKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUJvZHlDbGljayhldnQpXG4gICAgfSxcblxuICAgIHJlZ2lzdGVyQm9keUNsaWNrTGlzdGVuZXIoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVCb2R5Q2xpY2spXG4gICAgfSxcbiAgICBkZXJlZ2lzdGVyQm9keUNsaWNrTGlzdGVuZXIoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVCb2R5Q2xpY2spXG4gICAgfSxcbiAgICBoYW5kbGVLZXlkb3duKGV2dCkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUtleWRvd24oZXZ0KVxuICAgIH0sXG4gICAgZ2V0Rm9jdXNBZGFwdGVyTWV0aG9kcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzRm9jdXNlZDogKCkgPT4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy4kZWwsXG4gICAgICAgIHNhdmVGb2N1czogKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJldmlvdXNGb2N1c18gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3RvcmVGb2N1czogKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLiRlbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlvdXNGb2N1c18gJiYgdGhpcy5wcmV2aW91c0ZvY3VzXy5mb2N1cykge1xuICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzRm9jdXNfLmZvY3VzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGlzRmlyc3RFbGVtZW50Rm9jdXNlZDogKCkgPT5cbiAgICAgICAgICB0aGlzLmZpcnN0Rm9jdXNhYmxlRWxlbWVudF8gJiZcbiAgICAgICAgICB0aGlzLmZpcnN0Rm9jdXNhYmxlRWxlbWVudF8gPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsXG4gICAgICAgIGlzTGFzdEVsZW1lbnRGb2N1c2VkOiAoKSA9PlxuICAgICAgICAgIHRoaXMubGFzdEZvY3VzYWJsZUVsZW1lbnRfICYmXG4gICAgICAgICAgdGhpcy5sYXN0Rm9jdXNhYmxlRWxlbWVudF8gPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsXG4gICAgICAgIGZvY3VzRmlyc3RFbGVtZW50OiAoKSA9PlxuICAgICAgICAgIHRoaXMuZmlyc3RGb2N1c2FibGVFbGVtZW50XyAmJlxuICAgICAgICAgIHRoaXMuZmlyc3RGb2N1c2FibGVFbGVtZW50Xy5mb2N1cyAmJlxuICAgICAgICAgIHRoaXMuZmlyc3RGb2N1c2FibGVFbGVtZW50Xy5mb2N1cygpLFxuICAgICAgICBmb2N1c0xhc3RFbGVtZW50OiAoKSA9PlxuICAgICAgICAgIHRoaXMubGFzdEZvY3VzYWJsZUVsZW1lbnRfICYmXG4gICAgICAgICAgdGhpcy5sYXN0Rm9jdXNhYmxlRWxlbWVudF8uZm9jdXMgJiZcbiAgICAgICAgICB0aGlzLmxhc3RGb2N1c2FibGVFbGVtZW50Xy5mb2N1cygpXG4gICAgICB9XG4gICAgfSxcbiAgICBnZXREaW1lbnNpb25BZGFwdGVyTWV0aG9kcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGdldElubmVyRGltZW5zaW9uczogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy4kZWwub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuJGVsLm9mZnNldEhlaWdodFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0QW5jaG9yRGltZW5zaW9uczogKCkgPT5cbiAgICAgICAgICB0aGlzLmFuY2hvckVsZW1lbnQgJiYgdGhpcy5hbmNob3JFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBnZXRXaW5kb3dEaW1lbnNpb25zOiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldEJvZHlEaW1lbnNpb25zOiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0V2luZG93U2Nyb2xsOiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfVxuICAgICAgICB9LFxuICAgICAgICBzZXRQb3NpdGlvbjogcG9zaXRpb24gPT4ge1xuICAgICAgICAgIHRoaXMuJGVsLnN0eWxlLmxlZnQgPSAnbGVmdCcgaW4gcG9zaXRpb24gPyBwb3NpdGlvbi5sZWZ0IDogbnVsbFxuICAgICAgICAgIHRoaXMuJGVsLnN0eWxlLnJpZ2h0ID0gJ3JpZ2h0JyBpbiBwb3NpdGlvbiA/IHBvc2l0aW9uLnJpZ2h0IDogbnVsbFxuICAgICAgICAgIHRoaXMuJGVsLnN0eWxlLnRvcCA9ICd0b3AnIGluIHBvc2l0aW9uID8gcG9zaXRpb24udG9wIDogbnVsbFxuICAgICAgICAgIHRoaXMuJGVsLnN0eWxlLmJvdHRvbSA9ICdib3R0b20nIGluIHBvc2l0aW9uID8gcG9zaXRpb24uYm90dG9tIDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBzZXRNYXhIZWlnaHQ6IGhlaWdodCA9PiB7XG4gICAgICAgICAgdGhpcy4kZWwuc3R5bGUubWF4SGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25PcGVuXyh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uc3RyaW5ncy5GT0NVU0FCTEVfRUxFTUVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmZpcnN0Rm9jdXNhYmxlRWxlbWVudF8gPVxuICAgICAgICAgIGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCA+IDAgPyBmb2N1c2FibGVFbGVtZW50c1swXSA6IG51bGxcbiAgICAgICAgdGhpcy5sYXN0Rm9jdXNhYmxlRWxlbWVudF8gPVxuICAgICAgICAgIGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB0aGlzLmZvdW5kYXRpb24ub3BlbigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb24uY2xvc2UoKVxuICAgICAgfVxuICAgIH0sXG4gICAgaG9pc3RNZW51VG9Cb2R5KCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLiRlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuJGVsKSlcbiAgICAgIHRoaXMuc2V0SXNIb2lzdGVkKHRydWUpXG4gICAgfSxcbiAgICBzZXRJc0hvaXN0ZWQoaXNIb2lzdGVkKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0SXNIb2lzdGVkKGlzSG9pc3RlZClcbiAgICB9LFxuICAgIHNldE1lbnVTdXJmYWNlQW5jaG9yRWxlbWVudChlbGVtZW50KSB7XG4gICAgICB0aGlzLmFuY2hvckVsZW1lbnQgPSBlbGVtZW50XG4gICAgfSxcbiAgICBzZXRGaXhlZFBvc2l0aW9uKGlzRml4ZWQpIHtcbiAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgIHRoaXMuJGVsLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcy5GSVhFRClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJGVsLmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3Nlcy5GSVhFRClcbiAgICAgIH1cblxuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldEZpeGVkUG9zaXRpb24oaXNGaXhlZClcbiAgICB9LFxuICAgIHNldEFic29sdXRlUG9zaXRpb24oeCwgeSkge1xuICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldEFic29sdXRlUG9zaXRpb24oeCwgeSlcbiAgICAgIHRoaXMuc2V0SXNIb2lzdGVkKHRydWUpXG4gICAgfSxcbiAgICBzZXRBbmNob3JDb3JuZXIoY29ybmVyKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24uc2V0QW5jaG9yQ29ybmVyKGNvcm5lcilcbiAgICB9LFxuICAgIHNldEFuY2hvck1hcmdpbihtYXJnaW4pIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5zZXRBbmNob3JNYXJnaW4obWFyZ2luKVxuICAgIH0sXG4gICAgc2hvdyhvcHRpb25zKSB7XG4gICAgICB0aGlzLmZvdW5kYXRpb24ub3BlbihvcHRpb25zKVxuICAgIH0sXG4gICAgaGlkZSgpIHtcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5jbG9zZSgpXG4gICAgfSxcbiAgICBpc09wZW4oKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3VuZGF0aW9uID8gdGhpcy5mb3VuZGF0aW9uLmlzT3BlbigpIDogZmFsc2VcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8bGlcbiAgICA6dGFiaW5kZXg9XCJkaXNhYmxlZCA/ICctMScgOiAnMCdcIlxuICAgIDphcmlhLWRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgIGNsYXNzPVwibWRjLW1lbnUtaXRlbSBtZGMtbGlzdC1pdGVtXCJcbiAgICByb2xlPVwibWVudWl0ZW1cIlxuICA+XG4gICAgPHNsb3QgLz5cbiAgPC9saT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtbWVudS1pdGVtJyxcbiAgcHJvcHM6IHtcbiAgICBkaXNhYmxlZDogQm9vbGVhblxuICB9LFxuICBpbmplY3Q6IFsnbWRjTWVudSddLFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgY29uc29sZS5kaXIodGhpcy5tZGNNZW51KVxuICAgIHRoaXMubWRjTWVudS5pdGVtcy5wdXNoKHRoaXMuJGVsKVxuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGxpIFxuICAgIHJvbGU9XCJzZXBhcmF0b3JcIiBcbiAgICBjbGFzcz1cIm1kYy1tZW51LWRpdmlkZXIgbWRjLWxpc3QtZGl2aWRlclwiLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtbWVudS1kaXZpZGVyJ1xufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtZGMtbWVudS1zdXJmYWNlLS1hbmNob3JcIj48c2xvdCAvPjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1tZW51LWFuY2hvcidcbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgbWRjTWVudSBmcm9tICcuL21kYy1tZW51LnZ1ZSdcbmltcG9ydCBtZGNNZW51U3VyZmFjZSBmcm9tICcuL21kYy1tZW51LXN1cmZhY2UudnVlJ1xuaW1wb3J0IG1kY01lbnVJdGVtIGZyb20gJy4vbWRjLW1lbnUtaXRlbS52dWUnXG5pbXBvcnQgbWRjTWVudURpdmlkZXIgZnJvbSAnLi9tZGMtbWVudS1kaXZpZGVyLnZ1ZSdcbmltcG9ydCBtZGNNZW51QW5jaG9yIGZyb20gJy4vbWRjLW1lbnUtYW5jaG9yLnZ1ZSdcblxuZXhwb3J0IHsgbWRjTWVudSwgbWRjTWVudUl0ZW0sIG1kY01lbnVEaXZpZGVyLCBtZGNNZW51QW5jaG9yIH1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBsdWdpbih7XG4gIG1kY01lbnUsXG4gIG1kY01lbnVTdXJmYWNlLFxuICBtZGNNZW51SXRlbSxcbiAgbWRjTWVudURpdmlkZXIsXG4gIG1kY01lbnVBbmNob3Jcbn0pXG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXG5pbXBvcnQgeyBhdXRvSW5pdCB9IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vaW5kZXguanMnXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuYXV0b0luaXQocGx1Z2luKVxuIl0sIm5hbWVzIjpbImF1dG9Jbml0IiwicGx1Z2luIiwiX1Z1ZSIsIndpbmRvdyIsIlZ1ZSIsImdsb2JhbCIsInVzZSIsIkJhc2VQbHVnaW4iLCJjb21wb25lbnRzIiwidmVyc2lvbiIsImluc3RhbGwiLCJ2bSIsImtleSIsImNvbXBvbmVudCIsIm5hbWUiLCJlbWl0Q3VzdG9tRXZlbnQiLCJlbCIsImV2dFR5cGUiLCJldnREYXRhIiwic2hvdWxkQnViYmxlIiwiZXZ0IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJzY29wZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fZXh0ZW5kcyIsIl9fIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJfX2Fzc2lnbiIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjYWxsIiwiYXBwbHkiLCJfX3ZhbHVlcyIsIm8iLCJtIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuZXh0IiwidmFsdWUiLCJkb25lIiwiY3NzQ2xhc3NlcyIsInRzbGliXzEuX19leHRlbmRzIiwidHNsaWJfMS5fX2Fzc2lnbiIsInN0cmluZ3MiLCJ0c2xpYl8xLl9fdmFsdWVzIiwibWRjTWVudSIsIm1kY01lbnVTdXJmYWNlIiwibWRjTWVudUl0ZW0iLCJtZGNNZW51RGl2aWRlciIsIm1kY01lbnVBbmNob3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtFQUMvQjtFQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztFQUNBLE1BQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztFQUNqQ0QsSUFBQUEsSUFBSSxHQUFHQyxNQUFNLENBQUNDLEdBQWQ7RUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0VBQ3hDO0VBQ0FILElBQUFBLElBQUksR0FBR0csTUFBTSxDQUFDRCxHQUFkO0VBQ0Q7O0VBQ0QsTUFBSUYsSUFBSixFQUFVO0VBQ1JBLElBQUFBLElBQUksQ0FBQ0ksR0FBTCxDQUFTTCxNQUFUO0VBQ0Q7RUFDRjs7RUNaTSxTQUFTTSxVQUFULENBQW9CQyxVQUFwQixFQUFnQztFQUNyQyxTQUFPO0VBQ0xDLElBQUFBLE9BQU8sRUFBRSxhQURKO0VBRUxDLElBQUFBLE9BQU8sRUFBRSxpQkFBQUMsRUFB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
