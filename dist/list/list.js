/**
* @module vue-mdc-adapterlist 0.19.4-beta
* @exports VueMDCList
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^1.0.0-0","material-components-web":"^1.0.0-0"}
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
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
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
    var cssClasses = {
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
      CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a\n  ",
      ENABLED_ITEMS_SELECTOR: '.mdc-list-item:not(.mdc-list-item--disabled)',
      FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled)\n  ",
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
          return cssClasses;
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
          notifyAction: function notifyAction(index) {
            emitCustomEvent(_this.$el, MDCListFoundation.strings.ACTION_EVENT, {
              index: index
            },
            /** shouldBubble */
            true);
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
      

      
      var mdcList = normalizeComponent_1(
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
     * Stores result from supportsCssVariables to avoid redundant processing to
     * detect CSS custom variable support.
     */
    var supportsCssVariables_;
    /**
     * Stores result from applyPassive to avoid redundant processing to detect
     * passive event listener support.
     */

    var supportsPassive_;

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

    function supportsCssVariables(windowObj, forceRefresh) {
      if (forceRefresh === void 0) {
        forceRefresh = false;
      }

      var CSS = windowObj.CSS;
      var supportsCssVars = supportsCssVariables_;

      if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables_;
      }

      var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';

      if (!supportsFunctionPresent) {
        return false;
      }

      var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669
      // See: README section on Safari

      var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');

      if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
        supportsCssVars = !detectEdgePseudoVarBug(windowObj);
      } else {
        supportsCssVars = false;
      }

      if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVars;
      }

      return supportsCssVars;
    }
    /**
     * Determine whether the current browser supports passive event listeners, and
     * if so, use them.
     */

    function applyPassive(globalObj, forceRefresh) {
      if (globalObj === void 0) {
        globalObj = window;
      }

      if (forceRefresh === void 0) {
        forceRefresh = false;
      }

      if (supportsPassive_ === undefined || forceRefresh) {
        var isSupported_1 = false;

        try {
          globalObj.document.addEventListener('test', function () {
            return undefined;
          }, {
            get passive() {
              isSupported_1 = true;
              return isSupported_1;
            }

          });
        } catch (e) {} // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.


        supportsPassive_ = isSupported_1;
      }

      return supportsPassive_ ? {
        passive: true
      } : false;
    }
    function getNormalizedEventCoords(evt, pageOffset, clientRect) {
      if (!evt) {
        return {
          x: 0,
          y: 0
        };
      }

      var x = pageOffset.x,
          y = pageOffset.y;
      var documentX = x + clientRect.left;
      var documentY = y + clientRect.top;
      var normalizedX;
      var normalizedY; // Determine touch point relative to the ripple container.

      if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
      } else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
      }

      return {
        x: normalizedX,
        y: normalizedY
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

    var MDCComponent =
    /** @class */
    function () {
      function MDCComponent(root, foundation) {
        var args = [];

        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }

        this.root_ = root;
        this.initialize.apply(this, __spread(args)); // Note that we initialize foundation here and not within the constructor's default param so that
        // this.root_ is defined and can be used within the foundation class.

        this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation_.init();
        this.initialSyncWithDOM();
      }

      MDCComponent.attachTo = function (root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent(root, new MDCFoundation({}));
      };
      /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */


      MDCComponent.prototype.initialize = function () {
        var _args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          _args[_i] = arguments[_i];
        } // Subclasses can override this to do any additional setup work that would be considered part of a
        // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
        // initialized. Any additional arguments besides root and foundation will be passed in here.

      };

      MDCComponent.prototype.getDefaultFoundation = function () {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
      };

      MDCComponent.prototype.initialSyncWithDOM = function () {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
        // object. An example of this would be a form control wrapper that needs to synchronize its internal state
        // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
        // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
      };

      MDCComponent.prototype.destroy = function () {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation_.destroy();
      };

      MDCComponent.prototype.listen = function (evtType, handler) {
        this.root_.addEventListener(evtType, handler);
      };

      MDCComponent.prototype.unlisten = function (evtType, handler) {
        this.root_.removeEventListener(evtType, handler);
      };
      /**
       * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
       */


      MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) {
          shouldBubble = false;
        }

        var evt;

        if (typeof CustomEvent === 'function') {
          evt = new CustomEvent(evtType, {
            bubbles: shouldBubble,
            detail: evtData
          });
        } else {
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }

        this.root_.dispatchEvent(evt);
      };

      return MDCComponent;
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
      BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
      FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
      FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
      ROOT: 'mdc-ripple-upgraded',
      UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
    };
    var strings$1 = {
      VAR_FG_SCALE: '--mdc-ripple-fg-scale',
      VAR_FG_SIZE: '--mdc-ripple-fg-size',
      VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
      VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
      VAR_LEFT: '--mdc-ripple-left',
      VAR_TOP: '--mdc-ripple-top'
    };
    var numbers = {
      DEACTIVATION_TIMEOUT_MS: 225,
      FG_DEACTIVATION_MS: 150,
      INITIAL_ORIGIN_SCALE: 0.6,
      PADDING: 10,
      TAP_DELAY_MS: 300
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

    var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs

    var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu']; // simultaneous nested activations

    var activatedTargets = [];

    var MDCRippleFoundation =
    /** @class */
    function (_super) {
      __extends(MDCRippleFoundation, _super);

      function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, _assign({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;

        _this.activationAnimationHasEnded_ = false;
        _this.activationTimer_ = 0;
        _this.fgDeactivationRemovalTimer_ = 0;
        _this.fgScale_ = '0';
        _this.frame_ = {
          width: 0,
          height: 0
        };
        _this.initialSize_ = 0;
        _this.layoutFrame_ = 0;
        _this.maxRadius_ = 0;
        _this.unboundedCoords_ = {
          left: 0,
          top: 0
        };
        _this.activationState_ = _this.defaultActivationState_();

        _this.activationTimerCallback_ = function () {
          _this.activationAnimationHasEnded_ = true;

          _this.runDeactivationUXLogicIfReady_();
        };

        _this.activateHandler_ = function (e) {
          return _this.activate_(e);
        };

        _this.deactivateHandler_ = function () {
          return _this.deactivate_();
        };

        _this.focusHandler_ = function () {
          return _this.handleFocus();
        };

        _this.blurHandler_ = function () {
          return _this.handleBlur();
        };

        _this.resizeHandler_ = function () {
          return _this.layout();
        };

        return _this;
      }

      Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function get() {
          return cssClasses$1;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function get() {
          return strings$1;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function get() {
          return numbers;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function get() {
          return {
            addClass: function addClass() {
              return undefined;
            },
            browserSupportsCssVars: function browserSupportsCssVars() {
              return true;
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
            containsEventTarget: function containsEventTarget() {
              return true;
            },
            deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {
              return undefined;
            },
            deregisterInteractionHandler: function deregisterInteractionHandler() {
              return undefined;
            },
            deregisterResizeHandler: function deregisterResizeHandler() {
              return undefined;
            },
            getWindowPageOffset: function getWindowPageOffset() {
              return {
                x: 0,
                y: 0
              };
            },
            isSurfaceActive: function isSurfaceActive() {
              return true;
            },
            isSurfaceDisabled: function isSurfaceDisabled() {
              return true;
            },
            isUnbounded: function isUnbounded() {
              return true;
            },
            registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {
              return undefined;
            },
            registerInteractionHandler: function registerInteractionHandler() {
              return undefined;
            },
            registerResizeHandler: function registerResizeHandler() {
              return undefined;
            },
            removeClass: function removeClass() {
              return undefined;
            },
            updateCssVariable: function updateCssVariable() {
              return undefined;
            }
          };
        },
        enumerable: true,
        configurable: true
      });

      MDCRippleFoundation.prototype.init = function () {
        var _this = this;

        var supportsPressRipple = this.supportsPressRipple_();
        this.registerRootHandlers_(supportsPressRipple);

        if (supportsPressRipple) {
          var _a = MDCRippleFoundation.cssClasses,
              ROOT_1 = _a.ROOT,
              UNBOUNDED_1 = _a.UNBOUNDED;
          requestAnimationFrame(function () {
            _this.adapter_.addClass(ROOT_1);

            if (_this.adapter_.isUnbounded()) {
              _this.adapter_.addClass(UNBOUNDED_1); // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple


              _this.layoutInternal_();
            }
          });
        }
      };

      MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;

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

          var _a = MDCRippleFoundation.cssClasses,
              ROOT_2 = _a.ROOT,
              UNBOUNDED_2 = _a.UNBOUNDED;
          requestAnimationFrame(function () {
            _this.adapter_.removeClass(ROOT_2);

            _this.adapter_.removeClass(UNBOUNDED_2);

            _this.removeCssVars_();
          });
        }

        this.deregisterRootHandlers_();
        this.deregisterDeactivationHandlers_();
      };
      /**
       * @param evt Optional event containing position information.
       */


      MDCRippleFoundation.prototype.activate = function (evt) {
        this.activate_(evt);
      };

      MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivate_();
      };

      MDCRippleFoundation.prototype.layout = function () {
        var _this = this;

        if (this.layoutFrame_) {
          cancelAnimationFrame(this.layoutFrame_);
        }

        this.layoutFrame_ = requestAnimationFrame(function () {
          _this.layoutInternal_();

          _this.layoutFrame_ = 0;
        });
      };

      MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

        if (unbounded) {
          this.adapter_.addClass(UNBOUNDED);
        } else {
          this.adapter_.removeClass(UNBOUNDED);
        }
      };

      MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;

        requestAnimationFrame(function () {
          return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      };

      MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;

        requestAnimationFrame(function () {
          return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      };
      /**
       * We compute this property so that we are not querying information about the client
       * until the point in time where the foundation requests it. This prevents scenarios where
       * client-side feature-detection may happen too early, such as when components are rendered on the server
       * and then initialized at mount time on the client.
       */


      MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
        return this.adapter_.browserSupportsCssVars();
      };

      MDCRippleFoundation.prototype.defaultActivationState_ = function () {
        return {
          activationEvent: undefined,
          hasDeactivationUXRun: false,
          isActivated: false,
          isProgrammatic: false,
          wasActivatedByPointer: false,
          wasElementMadeActive: false
        };
      };
      /**
       * supportsPressRipple Passed from init to save a redundant function call
       */


      MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
        var _this = this;

        if (supportsPressRipple) {
          ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
          });

          if (this.adapter_.isUnbounded()) {
            this.adapter_.registerResizeHandler(this.resizeHandler_);
          }
        }

        this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
      };

      MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
        var _this = this;

        if (evt.type === 'keydown') {
          this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
        } else {
          POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
          });
        }
      };

      MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
        var _this = this;

        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
          _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
        });
        this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

        if (this.adapter_.isUnbounded()) {
          this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        }
      };

      MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
        var _this = this;

        this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
          _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
        });
      };

      MDCRippleFoundation.prototype.removeCssVars_ = function () {
        var _this = this;

        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
          if (key.indexOf('VAR_') === 0) {
            _this.adapter_.updateCssVariable(rippleStrings[key], null);
          }
        });
      };

      MDCRippleFoundation.prototype.activate_ = function (evt) {
        var _this = this;

        if (this.adapter_.isSurfaceDisabled()) {
          return;
        }

        var activationState = this.activationState_;

        if (activationState.isActivated) {
          return;
        } // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction


        var previousActivationEvent = this.previousActivationEvent_;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;

        if (isSameInteraction) {
          return;
        }

        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
          return _this.adapter_.containsEventTarget(target);
        });

        if (hasActivatedChild) {
          // Immediately reset activation state, while preserving logic that prevents touch follow-on events
          this.resetActivationState_();
          return;
        }

        if (evt !== undefined) {
          activatedTargets.push(evt.target);
          this.registerDeactivationHandlers_(evt);
        }

        activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);

        if (activationState.wasElementMadeActive) {
          this.animateActivation_();
        }

        requestAnimationFrame(function () {
          // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
          activatedTargets = [];

          if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
            // If space was pressed, try again within an rAF call to detect :active, because different UAs report
            // active states inconsistently when they're called within event handling code:
            // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
            // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
            // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
            // variable is set within a rAF callback for a submit button interaction (#2241).
            activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);

            if (activationState.wasElementMadeActive) {
              _this.animateActivation_();
            }
          }

          if (!activationState.wasElementMadeActive) {
            // Reset activation state immediately if element was not made active.
            _this.activationState_ = _this.defaultActivationState_();
          }
        });
      };

      MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
        return evt !== undefined && evt.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
      };

      MDCRippleFoundation.prototype.animateActivation_ = function () {
        var _this = this;

        var _a = MDCRippleFoundation.strings,
            VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
            VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses,
            FG_DEACTIVATION = _b.FG_DEACTIVATION,
            FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var translateStart = '';
        var translateEnd = '';

        if (!this.adapter_.isUnbounded()) {
          var _c = this.getFgTranslationCoordinates_(),
              startPoint = _c.startPoint,
              endPoint = _c.endPoint;

          translateStart = startPoint.x + "px, " + startPoint.y + "px";
          translateEnd = endPoint.x + "px, " + endPoint.y + "px";
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
          return _this.activationTimerCallback_();
        }, DEACTIVATION_TIMEOUT_MS);
      };

      MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
        var _a = this.activationState_,
            activationEvent = _a.activationEvent,
            wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;

        if (wasActivatedByPointer) {
          startPoint = getNormalizedEventCoords(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
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
      };

      MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
        var _this = this; // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.


        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState_,
            hasDeactivationUXRun = _a.hasDeactivationUXRun,
            isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;

        if (activationHasEnded && this.activationAnimationHasEnded_) {
          this.rmBoundedActivationClasses_();
          this.adapter_.addClass(FG_DEACTIVATION);
          this.fgDeactivationRemovalTimer_ = setTimeout(function () {
            _this.adapter_.removeClass(FG_DEACTIVATION);
          }, numbers.FG_DEACTIVATION_MS);
        }
      };

      MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter_.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded_ = false;
        this.adapter_.computeBoundingRect();
      };

      MDCRippleFoundation.prototype.resetActivationState_ = function () {
        var _this = this;

        this.previousActivationEvent_ = this.activationState_.activationEvent;
        this.activationState_ = this.defaultActivationState_(); // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.

        setTimeout(function () {
          return _this.previousActivationEvent_ = undefined;
        }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
      };

      MDCRippleFoundation.prototype.deactivate_ = function () {
        var _this = this;

        var activationState = this.activationState_; // This can happen in scenarios such as when you have a keyup event that blurs the element.

        if (!activationState.isActivated) {
          return;
        }

        var state = _assign({}, activationState);

        if (activationState.isProgrammatic) {
          requestAnimationFrame(function () {
            return _this.animateDeactivation_(state);
          });
          this.resetActivationState_();
        } else {
          this.deregisterDeactivationHandlers_();
          requestAnimationFrame(function () {
            _this.activationState_.hasDeactivationUXRun = true;

            _this.animateDeactivation_(state);

            _this.resetActivationState_();
          });
        }
      };

      MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer,
            wasElementMadeActive = _a.wasElementMadeActive;

        if (wasActivatedByPointer || wasElementMadeActive) {
          this.runDeactivationUXLogicIfReady_();
        }
      };

      MDCRippleFoundation.prototype.layoutInternal_ = function () {
        var _this = this;

        this.frame_ = this.adapter_.computeBoundingRect();
        var maxDim = Math.max(this.frame_.height, this.frame_.width); // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.

        var getBoundedRadius = function getBoundedRadius() {
          var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
          return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };

        this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius(); // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform

        this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
        this.updateLayoutCssVars_();
      };

      MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
        var _a = MDCRippleFoundation.strings,
            VAR_FG_SIZE = _a.VAR_FG_SIZE,
            VAR_LEFT = _a.VAR_LEFT,
            VAR_TOP = _a.VAR_TOP,
            VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
        this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

        if (this.adapter_.isUnbounded()) {
          this.unboundedCoords_ = {
            left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
            top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
          };
          this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
          this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
        }
      };

      return MDCRippleFoundation;
    }(MDCFoundation);

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

    var MDCRipple =
    /** @class */
    function (_super) {
      __extends(MDCRipple, _super);

      function MDCRipple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.disabled = false;
        return _this;
      }

      MDCRipple.attachTo = function (root, opts) {
        if (opts === void 0) {
          opts = {
            isUnbounded: undefined
          };
        }

        var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

        if (opts.isUnbounded !== undefined) {
          ripple.unbounded = opts.isUnbounded;
        }

        return ripple;
      };

      MDCRipple.createAdapter = function (instance) {
        return {
          addClass: function addClass(className) {
            return instance.root_.classList.add(className);
          },
          browserSupportsCssVars: function browserSupportsCssVars() {
            return supportsCssVariables(window);
          },
          computeBoundingRect: function computeBoundingRect() {
            return instance.root_.getBoundingClientRect();
          },
          containsEventTarget: function containsEventTarget(target) {
            return instance.root_.contains(target);
          },
          deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
            return document.documentElement.removeEventListener(evtType, handler, applyPassive());
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
            return instance.root_.removeEventListener(evtType, handler, applyPassive());
          },
          deregisterResizeHandler: function deregisterResizeHandler(handler) {
            return window.removeEventListener('resize', handler);
          },
          getWindowPageOffset: function getWindowPageOffset() {
            return {
              x: window.pageXOffset,
              y: window.pageYOffset
            };
          },
          isSurfaceActive: function isSurfaceActive() {
            return matches(instance.root_, ':active');
          },
          isSurfaceDisabled: function isSurfaceDisabled() {
            return Boolean(instance.disabled);
          },
          isUnbounded: function isUnbounded() {
            return Boolean(instance.unbounded);
          },
          registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
            return document.documentElement.addEventListener(evtType, handler, applyPassive());
          },
          registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
            return instance.root_.addEventListener(evtType, handler, applyPassive());
          },
          registerResizeHandler: function registerResizeHandler(handler) {
            return window.addEventListener('resize', handler);
          },
          removeClass: function removeClass(className) {
            return instance.root_.classList.remove(className);
          },
          updateCssVariable: function updateCssVariable(varName, value) {
            return instance.root_.style.setProperty(varName, value);
          }
        };
      };

      Object.defineProperty(MDCRipple.prototype, "unbounded", {
        get: function get() {
          return Boolean(this.unbounded_);
        },
        set: function set(unbounded) {
          this.unbounded_ = Boolean(unbounded);
          this.setUnbounded_();
        },
        enumerable: true,
        configurable: true
      });

      MDCRipple.prototype.activate = function () {
        this.foundation_.activate();
      };

      MDCRipple.prototype.deactivate = function () {
        this.foundation_.deactivate();
      };

      MDCRipple.prototype.layout = function () {
        this.foundation_.layout();
      };

      MDCRipple.prototype.getDefaultFoundation = function () {
        return new MDCRippleFoundation(MDCRipple.createAdapter(this));
      };

      MDCRipple.prototype.initialSyncWithDOM = function () {
        var root = this.root_;
        this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
      };
      /**
       * Closure Compiler throws an access control error when directly accessing a
       * protected or private property inside a getter/setter, like unbounded above.
       * By accessing the protected property inside a method, we solve that problem.
       * That's why this function exists.
       */


      MDCRipple.prototype.setUnbounded_ = function () {
        this.foundation_.setUnbounded(Boolean(this.unbounded_));
      };

      return MDCRipple;
    }(MDCComponent);

    /**
     * @license
     * Copyright 2019 Google Inc.
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
          return RippleBase._matches || (RippleBase._matches = matches(HTMLElement.prototype));
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
            vm.$el.addEventListener(evt, handler, applyPassive());
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
            vm.$el.removeEventListener(evt, handler, applyPassive());
          },
          registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
            return document.documentElement.addEventListener(evtType, handler, applyPassive());
          },
          deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
            return document.documentElement.removeEventListener(evtType, handler, applyPassive());
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
      

      
      normalizeComponent_1(
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
      

      
      var mdcListItem = normalizeComponent_1(
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
      

      
      var mdcListDivider = normalizeComponent_1(
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
      

      
      var mdcListGroup = normalizeComponent_1(
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
      

      
      var mdcListGroupHeader = normalizeComponent_1(
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
      

      
      var mdcListGroupDivider = normalizeComponent_1(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9iYXNlL2F1dG8taW5pdC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9iYXNlLXBsdWdpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZWxlbWVudC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZXZlbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvdW5pcXVlaWQtbWl4aW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpc3QvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saXN0L2ZvdW5kYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9wb255ZmlsbC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvbGlzdC9tZGMtbGlzdC52dWUiLCIuLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS91dGlsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZG9tL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbXBvbmVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2luZGV4LmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS1iYXNlLmpzIiwiLi4vLi4vY29tcG9uZW50cy9yaXBwbGUvbWRjLXJpcHBsZS52dWUiLCIuLi8uLi9jb21wb25lbnRzL2xpc3QvbWRjLWxpc3QtaXRlbS52dWUiLCIuLi8uLi9jb21wb25lbnRzL2xpc3QvbWRjLWxpc3QtZGl2aWRlci52dWUiLCIuLi8uLi9jb21wb25lbnRzL2xpc3QvbWRjLWxpc3QtZ3JvdXAudnVlIiwiLi4vLi4vY29tcG9uZW50cy9saXN0L21kYy1saXN0LWdyb3VwLWhlYWRlci52dWUiLCIuLi8uLi9jb21wb25lbnRzL2xpc3QvbWRjLWxpc3QtZ3JvdXAtZGl2aWRlci52dWUiLCIuLi8uLi9jb21wb25lbnRzL2xpc3QvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL2xpc3QvZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGF1dG9Jbml0KHBsdWdpbikge1xuICAvLyBBdXRvLWluc3RhbGxcbiAgbGV0IF9WdWUgPSBudWxsXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIF9WdWUgPSB3aW5kb3cuVnVlXG4gIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvKmdsb2JhbCBnbG9iYWwqL1xuICAgIF9WdWUgPSBnbG9iYWwuVnVlXG4gIH1cbiAgaWYgKF9WdWUpIHtcbiAgICBfVnVlLnVzZShwbHVnaW4pXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBCYXNlUGx1Z2luKGNvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnX19WRVJTSU9OX18nLFxuICAgIGluc3RhbGw6IHZtID0+IHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2tleV1cbiAgICAgICAgdm0uY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQpXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBDdXN0b21FbGVtZW50ID0ge1xuICBmdW5jdGlvbmFsOiB0cnVlLFxuICByZW5kZXIoY3JlYXRlRWxlbWVudCwgY29udGV4dCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFxuICAgICAgY29udGV4dC5wcm9wcy5pcyB8fCBjb250ZXh0LnByb3BzLnRhZyB8fCAnZGl2JyxcbiAgICAgIGNvbnRleHQuZGF0YSxcbiAgICAgIGNvbnRleHQuY2hpbGRyZW5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUVsZW1lbnRNaXhpbiA9IHtcbiAgY29tcG9uZW50czoge1xuICAgIEN1c3RvbUVsZW1lbnRcbiAgfVxufVxuIiwiLyogZ2xvYmFsIEN1c3RvbUV2ZW50ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Q3VzdG9tRXZlbnQoZWwsIGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gIGxldCBldnRcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICBidWJibGVzOiBzaG91bGRCdWJibGVcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKVxuICB9XG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgTURDRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgaWYgKGFkYXB0ZXIgPT09IHZvaWQgMCkgeyBhZGFwdGVyID0ge307IH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXyA9IGFkYXB0ZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAgICAgICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAgICAgICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0ZvdW5kYXRpb247XG59KCkpO1xuZXhwb3J0IHsgTURDRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTUzogJ21kYy1saXN0LWl0ZW0tLWFjdGl2YXRlZCcsXG4gICAgTElTVF9JVEVNX0NMQVNTOiAnbWRjLWxpc3QtaXRlbScsXG4gICAgTElTVF9JVEVNX1NFTEVDVEVEX0NMQVNTOiAnbWRjLWxpc3QtaXRlbS0tc2VsZWN0ZWQnLFxuICAgIFJPT1Q6ICdtZGMtbGlzdCcsXG59O1xudmFyIHN0cmluZ3MgPSB7XG4gICAgQUNUSU9OX0VWRU5UOiAnTURDTGlzdDphY3Rpb24nLFxuICAgIEFSSUFfQ0hFQ0tFRDogJ2FyaWEtY2hlY2tlZCcsXG4gICAgQVJJQV9DSEVDS0VEX0NIRUNLQk9YX1NFTEVDVE9SOiAnW3JvbGU9XCJjaGVja2JveFwiXVthcmlhLWNoZWNrZWQ9XCJ0cnVlXCJdJyxcbiAgICBBUklBX0NIRUNLRURfUkFESU9fU0VMRUNUT1I6ICdbcm9sZT1cInJhZGlvXCJdW2FyaWEtY2hlY2tlZD1cInRydWVcIl0nLFxuICAgIEFSSUFfT1JJRU5UQVRJT046ICdhcmlhLW9yaWVudGF0aW9uJyxcbiAgICBBUklBX09SSUVOVEFUSU9OX0hPUklaT05UQUw6ICdob3Jpem9udGFsJyxcbiAgICBBUklBX1JPTEVfQ0hFQ0tCT1hfU0VMRUNUT1I6ICdbcm9sZT1cImNoZWNrYm94XCJdJyxcbiAgICBBUklBX1NFTEVDVEVEOiAnYXJpYS1zZWxlY3RlZCcsXG4gICAgQ0hFQ0tCT1hfUkFESU9fU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpkaXNhYmxlZCksIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmRpc2FibGVkKScsXG4gICAgQ0hFQ0tCT1hfU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpkaXNhYmxlZCknLFxuICAgIENISUxEX0VMRU1FTlRTX1RPX1RPR0dMRV9UQUJJTkRFWDogXCJcXG4gICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MgKyBcIiBidXR0b246bm90KDpkaXNhYmxlZCksXFxuICAgIC5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTICsgXCIgYVxcbiAgXCIsXG4gICAgRU5BQkxFRF9JVEVNU19TRUxFQ1RPUjogJy5tZGMtbGlzdC1pdGVtOm5vdCgubWRjLWxpc3QtaXRlbS0tZGlzYWJsZWQpJyxcbiAgICBGT0NVU0FCTEVfQ0hJTERfRUxFTUVOVFM6IFwiXFxuICAgIC5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTICsgXCIgYnV0dG9uOm5vdCg6ZGlzYWJsZWQpLFxcbiAgICAuXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUyArIFwiIGEsXFxuICAgIC5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTICsgXCIgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpub3QoOmRpc2FibGVkKSxcXG4gICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MgKyBcIiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOm5vdCg6ZGlzYWJsZWQpXFxuICBcIixcbiAgICBSQURJT19TRUxFQ1RPUjogJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmRpc2FibGVkKScsXG59O1xuZXhwb3J0IHsgc3RyaW5ncywgY3NzQ2xhc3NlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgRUxFTUVOVFNfS0VZX0FMTE9XRURfSU4gPSBbJ2lucHV0JywgJ2J1dHRvbicsICd0ZXh0YXJlYScsICdzZWxlY3QnXTtcbmZ1bmN0aW9uIGlzTnVtYmVyQXJyYXkoc2VsZWN0ZWRJbmRleCkge1xuICAgIHJldHVybiBzZWxlY3RlZEluZGV4IGluc3RhbmNlb2YgQXJyYXk7XG59XG52YXIgTURDTGlzdEZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDTGlzdEZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTGlzdEZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENMaXN0Rm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLndyYXBGb2N1c18gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNWZXJ0aWNhbF8gPSB0cnVlO1xuICAgICAgICBfdGhpcy5pc1NpbmdsZVNlbGVjdGlvbkxpc3RfID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnNlbGVjdGVkSW5kZXhfID0gLTE7XG4gICAgICAgIF90aGlzLmZvY3VzZWRJdGVtSW5kZXhfID0gLTE7XG4gICAgICAgIF90aGlzLnVzZUFjdGl2YXRlZENsYXNzXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc0NoZWNrYm94TGlzdF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNSYWRpb0xpc3RfID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpc3RGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTGlzdEZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaXN0Rm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzc0ZvckVsZW1lbnRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGZvY3VzSXRlbUF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRGb2N1c2VkRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGdldExpc3RJdGVtQ291bnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgaGFzQ2hlY2tib3hBdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBoYXNSYWRpb0F0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzQ2hlY2tib3hDaGVja2VkQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNGb2N1c0luc2lkZUxpc3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeUFjdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0Q2hlY2tlZENoZWNrYm94T3JSYWRpb0F0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRUYWJJbmRleEZvckxpc3RJdGVtQ2hpbGRyZW46IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKSA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaGFzQ2hlY2tib3hBdEluZGV4KDApKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ2hlY2tib3hMaXN0XyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5hZGFwdGVyXy5oYXNSYWRpb0F0SW5kZXgoMCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSYWRpb0xpc3RfID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJpdmF0ZSB3cmFwRm9jdXNfIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRXcmFwRm9jdXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy53cmFwRm9jdXNfID0gdmFsdWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBpc1ZlcnRpY2FsXyBwcml2YXRlIHZhcmlhYmxlLlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRWZXJ0aWNhbE9yaWVudGF0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaXNWZXJ0aWNhbF8gPSB2YWx1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGlzU2luZ2xlU2VsZWN0aW9uTGlzdF8gcHJpdmF0ZSB2YXJpYWJsZS5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0U2luZ2xlU2VsZWN0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaXNTaW5nbGVTZWxlY3Rpb25MaXN0XyA9IHZhbHVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdXNlQWN0aXZhdGVkQ2xhc3NfIHByaXZhdGUgdmFyaWFibGUuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFVzZUFjdGl2YXRlZENsYXNzID0gZnVuY3Rpb24gKHVzZUFjdGl2YXRlZCkge1xuICAgICAgICB0aGlzLnVzZUFjdGl2YXRlZENsYXNzXyA9IHVzZUFjdGl2YXRlZDtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRTZWxlY3RlZEluZGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEluZGV4XztcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTZWxlY3RlZEluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGlmICghdGhpcy5pc0luZGV4VmFsaWRfKGluZGV4KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzQ2hlY2tib3hMaXN0Xykge1xuICAgICAgICAgICAgdGhpcy5zZXRDaGVja2JveEF0SW5kZXhfKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzUmFkaW9MaXN0Xykge1xuICAgICAgICAgICAgdGhpcy5zZXRSYWRpb0F0SW5kZXhfKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2luZ2xlU2VsZWN0aW9uQXRJbmRleF8oaW5kZXgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGb2N1cyBpbiBoYW5kbGVyIGZvciB0aGUgbGlzdCBpdGVtcy5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlRm9jdXNJbiA9IGZ1bmN0aW9uIChfLCBsaXN0SXRlbUluZGV4KSB7XG4gICAgICAgIGlmIChsaXN0SXRlbUluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0VGFiSW5kZXhGb3JMaXN0SXRlbUNoaWxkcmVuKGxpc3RJdGVtSW5kZXgsICcwJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZvY3VzIG91dCBoYW5kbGVyIGZvciB0aGUgbGlzdCBpdGVtcy5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlRm9jdXNPdXQgPSBmdW5jdGlvbiAoXywgbGlzdEl0ZW1JbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobGlzdEl0ZW1JbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbihsaXN0SXRlbUluZGV4LCAnLTEnKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQmV0d2VlbiBGb2N1c291dCAmIEZvY3VzaW4gc29tZSBicm93c2VycyBkbyBub3QgaGF2ZSBmb2N1cyBvbiBhbnkgZWxlbWVudC4gU2V0dGluZyBhIGRlbGF5IHRvIHdhaXQgdGlsbCB0aGUgZm9jdXNcbiAgICAgICAgICogaXMgbW92ZWQgdG8gbmV4dCBlbGVtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIV90aGlzLmFkYXB0ZXJfLmlzRm9jdXNJbnNpZGVMaXN0KCkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRUYWJpbmRleFRvRmlyc3RTZWxlY3RlZEl0ZW1fKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogS2V5IGhhbmRsZXIgZm9yIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVLZXlkb3duID0gZnVuY3Rpb24gKGV2dCwgaXNSb290TGlzdEl0ZW0sIGxpc3RJdGVtSW5kZXgpIHtcbiAgICAgICAgdmFyIGFycm93TGVmdCA9IGV2dC5rZXkgPT09ICdBcnJvd0xlZnQnIHx8IGV2dC5rZXlDb2RlID09PSAzNztcbiAgICAgICAgdmFyIGFycm93VXAgPSBldnQua2V5ID09PSAnQXJyb3dVcCcgfHwgZXZ0LmtleUNvZGUgPT09IDM4O1xuICAgICAgICB2YXIgYXJyb3dSaWdodCA9IGV2dC5rZXkgPT09ICdBcnJvd1JpZ2h0JyB8fCBldnQua2V5Q29kZSA9PT0gMzk7XG4gICAgICAgIHZhciBhcnJvd0Rvd24gPSBldnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldnQua2V5Q29kZSA9PT0gNDA7XG4gICAgICAgIHZhciBpc0hvbWUgPSBldnQua2V5ID09PSAnSG9tZScgfHwgZXZ0LmtleUNvZGUgPT09IDM2O1xuICAgICAgICB2YXIgaXNFbmQgPSBldnQua2V5ID09PSAnRW5kJyB8fCBldnQua2V5Q29kZSA9PT0gMzU7XG4gICAgICAgIHZhciBpc0VudGVyID0gZXZ0LmtleSA9PT0gJ0VudGVyJyB8fCBldnQua2V5Q29kZSA9PT0gMTM7XG4gICAgICAgIHZhciBpc1NwYWNlID0gZXZ0LmtleSA9PT0gJ1NwYWNlJyB8fCBldnQua2V5Q29kZSA9PT0gMzI7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLmFkYXB0ZXJfLmdldEZvY3VzZWRFbGVtZW50SW5kZXgoKTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IC0xO1xuICAgICAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gbGlzdEl0ZW1JbmRleDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBldmVudCBkb2Vzbid0IGhhdmUgYSBtZGMtbGlzdC1pdGVtIGFuY2VzdG9yIGZyb20gdGhlXG4gICAgICAgICAgICAgICAgLy8gY3VycmVudCBsaXN0IChub3QgZnJvbSBhIHN1Ymxpc3QpLCByZXR1cm4gZWFybHkuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgodGhpcy5pc1ZlcnRpY2FsXyAmJiBhcnJvd0Rvd24pIHx8ICghdGhpcy5pc1ZlcnRpY2FsXyAmJiBhcnJvd1JpZ2h0KSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgICAgICAgbmV4dEluZGV4ID0gdGhpcy5mb2N1c05leHRFbGVtZW50KGN1cnJlbnRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHRoaXMuaXNWZXJ0aWNhbF8gJiYgYXJyb3dVcCkgfHwgKCF0aGlzLmlzVmVydGljYWxfICYmIGFycm93TGVmdCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgICAgICAgIG5leHRJbmRleCA9IHRoaXMuZm9jdXNQcmV2RWxlbWVudChjdXJyZW50SW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzSG9tZSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV2ZW50XyhldnQpO1xuICAgICAgICAgICAgbmV4dEluZGV4ID0gdGhpcy5mb2N1c0ZpcnN0RWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzRW5kKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0RXZlbnRfKGV2dCk7XG4gICAgICAgICAgICBuZXh0SW5kZXggPSB0aGlzLmZvY3VzTGFzdEVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0VudGVyIHx8IGlzU3BhY2UpIHtcbiAgICAgICAgICAgIGlmIChpc1Jvb3RMaXN0SXRlbSkge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiBlYXJseSBpZiBlbnRlciBrZXkgaXMgcHJlc3NlZCBvbiBhbmNob3IgZWxlbWVudCB3aGljaCB0cmlnZ2VycyBzeW50aGV0aWMgTW91c2VFdmVudCBldmVudC5cbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZ0LnRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lID09PSAnQScgJiYgaXNFbnRlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHRFdmVudF8oZXZ0KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGFibGVMaXN0XygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleE9uQWN0aW9uXyhjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLm5vdGlmeUFjdGlvbihjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPSBjdXJyZW50SW5kZXg7XG4gICAgICAgIGlmIChuZXh0SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRUYWJpbmRleEF0SW5kZXhfKG5leHRJbmRleCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID0gbmV4dEluZGV4O1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbGljayBoYW5kbGVyIGZvciB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoaW5kZXgsIHRvZ2dsZUNoZWNrYm94KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0YWJsZUxpc3RfKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleE9uQWN0aW9uXyhpbmRleCwgdG9nZ2xlQ2hlY2tib3gpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5QWN0aW9uKGluZGV4KTtcbiAgICAgICAgdGhpcy5zZXRUYWJpbmRleEF0SW5kZXhfKGluZGV4KTtcbiAgICAgICAgdGhpcy5mb2N1c2VkSXRlbUluZGV4XyA9IGluZGV4O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRm9jdXNlcyB0aGUgbmV4dCBlbGVtZW50IG9uIHRoZSBsaXN0LlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5mb2N1c05leHRFbGVtZW50ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBjb3VudCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICBpZiAobmV4dEluZGV4ID49IGNvdW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy53cmFwRm9jdXNfKSB7XG4gICAgICAgICAgICAgICAgbmV4dEluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiBlYXJseSBiZWNhdXNlIGxhc3QgaXRlbSBpcyBhbHJlYWR5IGZvY3VzZWQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZm9jdXNJdGVtQXRJbmRleChuZXh0SW5kZXgpO1xuICAgICAgICByZXR1cm4gbmV4dEluZGV4O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRm9jdXNlcyB0aGUgcHJldmlvdXMgZWxlbWVudCBvbiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuZm9jdXNQcmV2RWxlbWVudCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgcHJldkluZGV4ID0gaW5kZXggLSAxO1xuICAgICAgICBpZiAocHJldkluZGV4IDwgMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMud3JhcEZvY3VzXykge1xuICAgICAgICAgICAgICAgIHByZXZJbmRleCA9IHRoaXMuYWRhcHRlcl8uZ2V0TGlzdEl0ZW1Db3VudCgpIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiBlYXJseSBiZWNhdXNlIGZpcnN0IGl0ZW0gaXMgYWxyZWFkeSBmb2N1c2VkLlxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgocHJldkluZGV4KTtcbiAgICAgICAgcmV0dXJuIHByZXZJbmRleDtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5mb2N1c0ZpcnN0RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5mb2N1c0l0ZW1BdEluZGV4KDApO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5mb2N1c0xhc3RFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGFzdEluZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCkgLSAxO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvY3VzSXRlbUF0SW5kZXgobGFzdEluZGV4KTtcbiAgICAgICAgcmV0dXJuIGxhc3RJbmRleDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEVuc3VyZXMgdGhhdCBwcmV2ZW50RGVmYXVsdCBpcyBvbmx5IGNhbGxlZCBpZiB0aGUgY29udGFpbmluZyBlbGVtZW50IGRvZXNuJ3RcbiAgICAgKiBjb25zdW1lIHRoZSBldmVudCwgYW5kIGl0IHdpbGwgY2F1c2UgYW4gdW5pbnRlbmRlZCBzY3JvbGwuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnByZXZlbnREZWZhdWx0RXZlbnRfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZ0LnRhcmdldDtcbiAgICAgICAgdmFyIHRhZ05hbWUgPSAoXCJcIiArIHRhcmdldC50YWdOYW1lKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoRUxFTUVOVFNfS0VZX0FMTE9XRURfSU4uaW5kZXhPZih0YWdOYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENMaXN0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0U2luZ2xlU2VsZWN0aW9uQXRJbmRleF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkQ2xhc3NOYW1lID0gY3NzQ2xhc3Nlcy5MSVNUX0lURU1fU0VMRUNURURfQ0xBU1M7XG4gICAgICAgIGlmICh0aGlzLnVzZUFjdGl2YXRlZENsYXNzXykge1xuICAgICAgICAgICAgc2VsZWN0ZWRDbGFzc05hbWUgPSBjc3NDbGFzc2VzLkxJU1RfSVRFTV9BQ1RJVkFURURfQ0xBU1M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleF8gPj0gMCAmJiB0aGlzLnNlbGVjdGVkSW5kZXhfICE9PSBpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXhfLCBzZWxlY3RlZENsYXNzTmFtZSk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXhfLCBzdHJpbmdzLkFSSUFfU0VMRUNURUQsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3NGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHNlbGVjdGVkQ2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9TRUxFQ1RFRCwgJ3RydWUnKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IGluZGV4O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyByYWRpbyBhdCBnaXZlIGluZGV4LiBSYWRpbyBkb2Vzbid0IGNoYW5nZSB0aGUgY2hlY2tlZCBzdGF0ZSBpZiBpdCBpcyBhbHJlYWR5IGNoZWNrZWQuXG4gICAgICovXG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFJhZGlvQXRJbmRleF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleChpbmRleCwgdHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhfID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleF8sIHN0cmluZ3MuQVJJQV9DSEVDS0VELCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgc3RyaW5ncy5BUklBX0NIRUNLRUQsICd0cnVlJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleF8gPSBpbmRleDtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRDaGVja2JveEF0SW5kZXhfID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hZGFwdGVyXy5nZXRMaXN0SXRlbUNvdW50KCk7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGluZGV4LmluZGV4T2YoaSkgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4KGksIGlzQ2hlY2tlZCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpLCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgaXNDaGVja2VkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4XyA9IGluZGV4O1xuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFRhYmluZGV4QXRJbmRleF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8gPT09IC0xICYmIGluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBJZiBubyBsaXN0IGl0ZW0gd2FzIHNlbGVjdGVkIHNldCBmaXJzdCBsaXN0IGl0ZW0ncyB0YWJpbmRleCB0byAtMS5cbiAgICAgICAgICAgIC8vIEdlbmVyYWxseSwgdGFiaW5kZXggaXMgc2V0IHRvIDAgb24gZmlyc3QgbGlzdCBpdGVtIG9mIGxpc3QgdGhhdCBoYXMgbm8gcHJlc2VsZWN0ZWQgaXRlbXMuXG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleCgwLCAndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmZvY3VzZWRJdGVtSW5kZXhfID49IDAgJiYgdGhpcy5mb2N1c2VkSXRlbUluZGV4XyAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KHRoaXMuZm9jdXNlZEl0ZW1JbmRleF8sICd0YWJpbmRleCcsICctMScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGluZGV4LCAndGFiaW5kZXgnLCAnMCcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBSZXR1cm4gdHJ1ZSBpZiBpdCBpcyBzaW5nbGUgc2VsZWN0aW4gbGlzdCwgY2hlY2tib3ggbGlzdCBvciByYWRpbyBsaXN0LlxuICAgICAqL1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5pc1NlbGVjdGFibGVMaXN0XyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTaW5nbGVTZWxlY3Rpb25MaXN0XyB8fCB0aGlzLmlzQ2hlY2tib3hMaXN0XyB8fCB0aGlzLmlzUmFkaW9MaXN0XztcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRUYWJpbmRleFRvRmlyc3RTZWxlY3RlZEl0ZW1fID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGFyZ2V0SW5kZXggPSAwO1xuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGFibGVMaXN0XygpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0ZWRJbmRleF8gPT09ICdudW1iZXInICYmIHRoaXMuc2VsZWN0ZWRJbmRleF8gIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXhfO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNOdW1iZXJBcnJheSh0aGlzLnNlbGVjdGVkSW5kZXhfKSAmJiB0aGlzLnNlbGVjdGVkSW5kZXhfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleF8ucmVkdWNlKGZ1bmN0aW9uIChjdXJyZW50SW5kZXgsIG1pbkluZGV4KSB7IHJldHVybiBNYXRoLm1pbihjdXJyZW50SW5kZXgsIG1pbkluZGV4KTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRUYWJpbmRleEF0SW5kZXhfKHRhcmdldEluZGV4KTtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5pc0luZGV4VmFsaWRfID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChpbmRleCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDaGVja2JveExpc3RfKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNRENMaXN0Rm91bmRhdGlvbjogQXJyYXkgb2YgaW5kZXggaXMgb25seSBzdXBwb3J0ZWQgZm9yIGNoZWNrYm94IGJhc2VkIGxpc3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbmRleC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleC5zb21lKGZ1bmN0aW9uIChpKSB7IHJldHVybiBfdGhpcy5pc0luZGV4SW5SYW5nZV8oaSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2hlY2tib3hMaXN0Xykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTURDTGlzdEZvdW5kYXRpb246IEV4cGVjdGVkIGFycmF5IG9mIGluZGV4IGZvciBjaGVja2JveCBiYXNlZCBsaXN0IGJ1dCBnb3QgbnVtYmVyOiAnICsgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNJbmRleEluUmFuZ2VfKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTGlzdEZvdW5kYXRpb24ucHJvdG90eXBlLmlzSW5kZXhJblJhbmdlXyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgbGlzdFNpemUgPSB0aGlzLmFkYXB0ZXJfLmdldExpc3RJdGVtQ291bnQoKTtcbiAgICAgICAgcmV0dXJuIGluZGV4ID49IDAgJiYgaW5kZXggPCBsaXN0U2l6ZTtcbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTZWxlY3RlZEluZGV4T25BY3Rpb25fID0gZnVuY3Rpb24gKGluZGV4LCB0b2dnbGVDaGVja2JveCkge1xuICAgICAgICBpZiAodG9nZ2xlQ2hlY2tib3ggPT09IHZvaWQgMCkgeyB0b2dnbGVDaGVja2JveCA9IHRydWU7IH1cbiAgICAgICAgaWYgKHRoaXMuaXNDaGVja2JveExpc3RfKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNoZWNrYm94QXRJbmRleF8oaW5kZXgsIHRvZ2dsZUNoZWNrYm94KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnByb3RvdHlwZS50b2dnbGVDaGVja2JveEF0SW5kZXhfID0gZnVuY3Rpb24gKGluZGV4LCB0b2dnbGVDaGVja2JveCkge1xuICAgICAgICB2YXIgaXNDaGVja2VkID0gdGhpcy5hZGFwdGVyXy5pc0NoZWNrYm94Q2hlY2tlZEF0SW5kZXgoaW5kZXgpO1xuICAgICAgICBpZiAodG9nZ2xlQ2hlY2tib3gpIHtcbiAgICAgICAgICAgIGlzQ2hlY2tlZCA9ICFpc0NoZWNrZWQ7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldENoZWNrZWRDaGVja2JveE9yUmFkaW9BdEluZGV4KGluZGV4LCBpc0NoZWNrZWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0QXR0cmlidXRlRm9yRWxlbWVudEluZGV4KGluZGV4LCBzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgaXNDaGVja2VkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgICAgIC8vIElmIG5vbmUgb2YgdGhlIGNoZWNrYm94IGl0ZW1zIGFyZSBzZWxlY3RlZCBhbmQgc2VsZWN0ZWRJbmRleCBpcyBub3QgaW5pdGlhbGl6ZWQgdGhlbiBwcm92aWRlIGEgZGVmYXVsdCB2YWx1ZS5cbiAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXhlcyA9IHRoaXMuc2VsZWN0ZWRJbmRleF8gPT09IC0xID8gW10gOiB0aGlzLnNlbGVjdGVkSW5kZXhfLnNsaWNlKCk7XG4gICAgICAgIGlmIChpc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhlcy5wdXNoKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhlcyA9IHNlbGVjdGVkSW5kZXhlcy5maWx0ZXIoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkgIT09IGluZGV4OyB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXhfID0gc2VsZWN0ZWRJbmRleGVzO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0xpc3RGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENMaXN0Rm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0xpc3RGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlldyBBIFwicG9ueWZpbGxcIiBpcyBhIHBvbHlmaWxsIHRoYXQgZG9lc24ndCBtb2RpZnkgdGhlIGdsb2JhbCBwcm90b3R5cGUgY2hhaW4uXG4gKiBUaGlzIG1ha2VzIHBvbnlmaWxscyBzYWZlciB0aGFuIHRyYWRpdGlvbmFsIHBvbHlmaWxscywgZXNwZWNpYWxseSBmb3IgbGlicmFyaWVzIGxpa2UgTURDLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGlmIChlbGVtZW50LmNsb3Nlc3QpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgfVxuICAgIHZhciBlbCA9IGVsZW1lbnQ7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB2YXIgbmF0aXZlTWF0Y2hlcyA9IGVsZW1lbnQubWF0Y2hlc1xuICAgICAgICB8fCBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvclxuICAgICAgICB8fCBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuICAgIHJldHVybiBuYXRpdmVNYXRjaGVzLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9ueWZpbGwuanMubWFwIiwiPHRlbXBsYXRlPlxuICA8dWxcbiAgICA6Y2xhc3M9XCJjbGFzc2VzXCJcbiAgICBjbGFzcz1cIm1kYy1saXN0XCJcbiAgICA6YXJpYS1vcmllbnRhdGlvbj1cIm9yaWVudGF0aW9uXCJcbiAgICBAY2xpY2s9XCJoYW5kbGVDbGlja0V2ZW50XCJcbiAgICBAa2V5ZG93bj1cImhhbmRsZUtleWRvd25FdmVudFwiXG4gICAgQGZvY3VzaW49XCJoYW5kbGVGb2N1c0luRXZlbnRcIlxuICAgIEBmb2N1c291dD1cImhhbmRsZUZvY3VzT3V0RXZlbnRcIlxuICA+XG4gICAgPHNsb3QgLz5cbiAgPC91bD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTURDTGlzdEZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2xpc3QvZm91bmRhdGlvbidcbmltcG9ydCB7IG1hdGNoZXMgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJ1xuaW1wb3J0IHsgZW1pdEN1c3RvbUV2ZW50IH0gZnJvbSAnLi4vYmFzZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWxpc3QnLFxuICBwcm9wczoge1xuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGF2YXRhckxpc3Q6IEJvb2xlYW4sXG4gICAgdHdvTGluZTogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBpbnRlcmFjdGl2ZTogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB0cnVlIH0sXG4gICAgc2luZ2xlU2VsZWN0aW9uOiBCb29sZWFuLFxuICAgIHZlcnRpY2FsOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHRydWUgfVxuICB9LFxuICBwcm92aWRlKCkge1xuICAgIHJldHVybiB7IG1kY0xpc3Q6IHRoaXMgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnbWRjLWxpc3QtLWRlbnNlJzogdGhpcy5kZW5zZSxcbiAgICAgICAgJ21kYy1saXN0LS1hdmF0YXItbGlzdCc6IHRoaXMuYXZhdGFyTGlzdCxcbiAgICAgICAgJ21kYy1saXN0LS10d28tbGluZSc6IHRoaXMudHdvTGluZSxcbiAgICAgICAgJ21kYy1saXN0LS1ib3JkZXJlZCc6IHRoaXMuYm9yZGVyZWQsXG4gICAgICAgICdtZGMtbGlzdC0tbm9uLWludGVyYWN0aXZlJzogIXRoaXMuaW50ZXJhY3RpdmVcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb3JpZW50YXRpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCdcbiAgICB9LFxuXG4gICAgbGlzdEVsZW1lbnRzKCkge1xuICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoXG4gICAgICAgIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgTURDTGlzdEZvdW5kYXRpb24uc3RyaW5ncy5FTkFCTEVEX0lURU1TX1NFTEVDVE9SXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVGb2N1c0luRXZlbnQoZXZ0KSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0TGlzdEl0ZW1JbmRleChldnQpXG4gICAgICB0aGlzLmZvdW5kYXRpb24uaGFuZGxlRm9jdXNJbihldnQsIGluZGV4KVxuICAgIH0sXG4gICAgaGFuZGxlRm9jdXNPdXRFdmVudChldnQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRMaXN0SXRlbUluZGV4KGV2dClcbiAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVGb2N1c091dChldnQsIGluZGV4KVxuICAgIH0sXG5cbiAgICBoYW5kbGVLZXlkb3duRXZlbnQoZXZ0KSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0TGlzdEl0ZW1JbmRleChldnQpXG5cbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbi5oYW5kbGVLZXlkb3duKFxuICAgICAgICAgIGV2dCxcbiAgICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICAgICAgIE1EQ0xpc3RGb3VuZGF0aW9uLmNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTXG4gICAgICAgICAgKSxcbiAgICAgICAgICBpbmRleFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGVDbGlja0V2ZW50KGV2dCkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldExpc3RJdGVtSW5kZXgoZXZ0KVxuXG4gICAgICAvLyBUb2dnbGUgdGhlIGNoZWNrYm94IG9ubHkgaWYgaXQncyBub3QgdGhlIHRhcmdldCBvZiB0aGUgZXZlbnQsIG9yIHRoZSBjaGVja2JveCB3aWxsIGhhdmUgMiBjaGFuZ2UgZXZlbnRzLlxuICAgICAgY29uc3QgdG9nZ2xlQ2hlY2tib3ggPSAhbWF0Y2hlcyhcbiAgICAgICAgZXZ0LnRhcmdldCxcbiAgICAgICAgTURDTGlzdEZvdW5kYXRpb24uc3RyaW5ncy5DSEVDS0JPWF9SQURJT19TRUxFQ1RPUlxuICAgICAgKVxuICAgICAgdGhpcy5mb3VuZGF0aW9uLmhhbmRsZUNsaWNrKGluZGV4LCB0b2dnbGVDaGVja2JveClcbiAgICB9LFxuXG4gICAgbGF5b3V0KCkge1xuICAgICAgLy8gTGlzdCBpdGVtcyBuZWVkIHRvIGhhdmUgYXQgbGVhc3QgdGFiaW5kZXg9LTEgdG8gYmUgZm9jdXNhYmxlLlxuICAgICAgO1tdLnNsaWNlXG4gICAgICAgIC5jYWxsKHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZGMtbGlzdC1pdGVtOm5vdChbdGFiaW5kZXhdKScpKVxuICAgICAgICAuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpXG4gICAgICAgIH0pXG5cbiAgICAgIC8vIENoaWxkIGJ1dHRvbi9hIGVsZW1lbnRzIGFyZSBub3QgdGFiYmFibGUgdW50aWwgdGhlIGxpc3QgaXRlbSBpcyBmb2N1c2VkLlxuICAgICAgO1tdLnNsaWNlXG4gICAgICAgIC5jYWxsKFxuICAgICAgICAgIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICBNRENMaXN0Rm91bmRhdGlvbi5zdHJpbmdzLkZPQ1VTQUJMRV9DSElMRF9FTEVNRU5UU1xuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAuZm9yRWFjaChlbGUgPT4gZWxlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSkpXG4gICAgfSxcblxuICAgIGluaXRpYWxpemVMaXN0VHlwZSgpIHtcbiAgICAgIC8vIEF1dG9tYXRpY2FsbHkgc2V0IHNpbmdsZSBzZWxlY3Rpb24gaWYgc2VsZWN0ZWQvYWN0aXZhdGVkIGNsYXNzZXMgYXJlIHByZXNlbnQuXG4gICAgICBjb25zdCBwcmVzZWxlY3RlZEVsZW1lbnQgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLiR7TURDTGlzdEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTfSwgLiR7XG4gICAgICAgICAgTURDTGlzdEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5MSVNUX0lURU1fU0VMRUNURURfQ0xBU1NcbiAgICAgICAgfWBcbiAgICAgIClcblxuICAgICAgaWYgKHByZXNlbGVjdGVkRWxlbWVudCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJlc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICAgICAgIE1EQ0xpc3RGb3VuZGF0aW9uLmNzc0NsYXNzZXMuTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTU1xuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5mb3VuZGF0aW9uLnNldFVzZUFjdGl2YXRlZENsYXNzKHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNpbmdsZVNlbGVjdGlvbiA9IHRydWVcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5saXN0RWxlbWVudHMuaW5kZXhPZihwcmVzZWxlY3RlZEVsZW1lbnQpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGdldExpc3RJdGVtSW5kZXgoZXZ0KSB7XG4gICAgICBsZXQgZXZlbnRUYXJnZXQgPSBldnQudGFyZ2V0XG4gICAgICBsZXQgaW5kZXggPSAtMVxuXG4gICAgICAvLyBGaW5kIHRoZSBmaXJzdCBhbmNlc3RvciB0aGF0IGlzIGEgbGlzdCBpdGVtIG9yIHRoZSBsaXN0LlxuICAgICAgd2hpbGUgKFxuICAgICAgICAhZXZlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFxuICAgICAgICAgIE1EQ0xpc3RGb3VuZGF0aW9uLmNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTXG4gICAgICAgICkgJiZcbiAgICAgICAgIWV2ZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhNRENMaXN0Rm91bmRhdGlvbi5jc3NDbGFzc2VzLlJPT1QpXG4gICAgICApIHtcbiAgICAgICAgZXZlbnRUYXJnZXQgPSBldmVudFRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8vIEdldCB0aGUgaW5kZXggb2YgdGhlIGVsZW1lbnQgaWYgaXQgaXMgYSBsaXN0IGl0ZW0uXG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICAgICBNRENMaXN0Rm91bmRhdGlvbi5jc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU1xuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgaW5kZXggPSB0aGlzLmxpc3RFbGVtZW50cy5pbmRleE9mKGV2ZW50VGFyZ2V0KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5kZXhcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mb3VuZGF0aW9uID0gbmV3IE1EQ0xpc3RGb3VuZGF0aW9uKHtcbiAgICAgIGdldExpc3RJdGVtQ291bnQ6ICgpID0+IHRoaXMubGlzdEVsZW1lbnRzLmxlbmd0aCxcbiAgICAgIGdldEZvY3VzZWRFbGVtZW50SW5kZXg6ICgpID0+XG4gICAgICAgIHRoaXMubGlzdEVsZW1lbnRzLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCksXG4gICAgICBzZXRBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXg6IChpbmRleCwgYXR0ciwgdmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XVxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVtb3ZlQXR0cmlidXRlRm9yRWxlbWVudEluZGV4OiAoaW5kZXgsIGF0dHIpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XVxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHIpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhZGRDbGFzc0ZvckVsZW1lbnRJbmRleDogKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XVxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZW1vdmVDbGFzc0ZvckVsZW1lbnRJbmRleDogKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2luZGV4XVxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmb2N1c0l0ZW1BdEluZGV4OiBpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmxpc3RFbGVtZW50c1tpbmRleF1cbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldFRhYkluZGV4Rm9yTGlzdEl0ZW1DaGlsZHJlbjogKGxpc3RJdGVtSW5kZXgsIHRhYkluZGV4VmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMubGlzdEVsZW1lbnRzW2xpc3RJdGVtSW5kZXhdXG4gICAgICAgIGNvbnN0IGxpc3RJdGVtQ2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKFxuICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnN0cmluZ3MuQ0hJTERfRUxFTUVOVFNfVE9fVE9HR0xFX1RBQklOREVYXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIGxpc3RJdGVtQ2hpbGRyZW4uZm9yRWFjaChlbGUgPT5cbiAgICAgICAgICBlbGUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRhYkluZGV4VmFsdWUpXG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgICBmb2xsb3dIcmVmOiBpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdXG4gICAgICAgIGlmIChsaXN0SXRlbSAmJiBsaXN0SXRlbS5ocmVmKSB7XG4gICAgICAgICAgbGlzdEl0ZW0uY2xpY2soKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaGFzQ2hlY2tib3hBdEluZGV4OiBpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdXG4gICAgICAgIHJldHVybiAhIWxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgTURDTGlzdEZvdW5kYXRpb24uc3RyaW5ncy5DSEVDS0JPWF9TRUxFQ1RPUlxuICAgICAgICApXG4gICAgICB9LFxuICAgICAgaGFzUmFkaW9BdEluZGV4OiBpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdXG4gICAgICAgIHJldHVybiAhIWxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgTURDTGlzdEZvdW5kYXRpb24uc3RyaW5ncy5SQURJT19TRUxFQ1RPUlxuICAgICAgICApXG4gICAgICB9LFxuICAgICAgaXNDaGVja2JveENoZWNrZWRBdEluZGV4OiBpbmRleCA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGhpcy5saXN0RWxlbWVudHNbaW5kZXhdXG4gICAgICAgIGNvbnN0IHRvZ2dsZUVsID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBNRENMaXN0Rm91bmRhdGlvbi5zdHJpbmdzLkNIRUNLQk9YX1NFTEVDVE9SXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHRvZ2dsZUVsLmNoZWNrZWRcbiAgICAgIH0sXG4gICAgICBzZXRDaGVja2VkQ2hlY2tib3hPclJhZGlvQXRJbmRleDogKGluZGV4LCBpc0NoZWNrZWQpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSB0aGlzLmxpc3RFbGVtZW50c1tpbmRleF1cbiAgICAgICAgY29uc3QgdG9nZ2xlRWwgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnN0cmluZ3MuQ0hFQ0tCT1hfUkFESU9fU0VMRUNUT1JcbiAgICAgICAgKVxuICAgICAgICB0b2dnbGVFbC5jaGVja2VkID0gaXNDaGVja2VkXG5cbiAgICAgICAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKVxuICAgICAgICBldmVudC5pbml0RXZlbnQoJ2NoYW5nZScsIHRydWUsIHRydWUpXG4gICAgICAgIHRvZ2dsZUVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICB9LFxuXG4gICAgICBub3RpZnlBY3Rpb246IGluZGV4ID0+IHtcbiAgICAgICAgZW1pdEN1c3RvbUV2ZW50KFxuICAgICAgICAgIHRoaXMuJGVsLFxuICAgICAgICAgIE1EQ0xpc3RGb3VuZGF0aW9uLnN0cmluZ3MuQUNUSU9OX0VWRU5ULFxuICAgICAgICAgIHsgaW5kZXggfSxcbiAgICAgICAgICAvKiogc2hvdWxkQnViYmxlICovIHRydWVcbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIGlzRm9jdXNJbnNpZGVMaXN0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmZvdW5kYXRpb24uaW5pdCgpXG5cbiAgICB0aGlzLmZvdW5kYXRpb24uc2V0U2luZ2xlU2VsZWN0aW9uKHRoaXMuc2luZ2xlU2VsZWN0aW9uKVxuXG4gICAgdGhpcy5mb3VuZGF0aW9uLnNldFZlcnRpY2FsT3JpZW50YXRpb24odGhpcy52ZXJ0aWNhbClcblxuICAgIHRoaXMubGF5b3V0KClcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCIvKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0b1xuICogZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqL1xudmFyIHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIGFwcGx5UGFzc2l2ZSB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0byBkZXRlY3RcbiAqIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXIgc3VwcG9ydC5cbiAqL1xudmFyIHN1cHBvcnRzUGFzc2l2ZV87XG5mdW5jdGlvbiBkZXRlY3RFZGdlUHNldWRvVmFyQnVnKHdpbmRvd09iaikge1xuICAgIC8vIERldGVjdCB2ZXJzaW9ucyBvZiBFZGdlIHdpdGggYnVnZ3kgdmFyKCkgc3VwcG9ydFxuICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTE0OTU0NDgvXG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93T2JqLmRvY3VtZW50O1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm9kZS5jbGFzc05hbWUgPSAnbWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zyc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAvLyBUaGUgYnVnIGV4aXN0cyBpZiA6OmJlZm9yZSBzdHlsZSBlbmRzIHVwIHByb3BhZ2F0aW5nIHRvIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICAvLyBBZGRpdGlvbmFsbHksIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBudWxsIGluIGlmcmFtZXMgd2l0aCBkaXNwbGF5OiBcIm5vbmVcIiBpbiBGaXJlZm94LFxuICAgIC8vIGJ1dCBGaXJlZm94IGlzIGtub3duIHRvIHN1cHBvcnQgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIGNvcnJlY3RseS5cbiAgICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93T2JqLmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgdmFyIGhhc1BzZXVkb1ZhckJ1ZyA9IGNvbXB1dGVkU3R5bGUgIT09IG51bGwgJiYgY29tcHV0ZWRTdHlsZS5ib3JkZXJUb3BTdHlsZSA9PT0gJ3NvbGlkJztcbiAgICBub2RlLnJlbW92ZSgpO1xuICAgIHJldHVybiBoYXNQc2V1ZG9WYXJCdWc7XG59XG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2gpIHtcbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICB2YXIgQ1NTID0gd2luZG93T2JqLkNTUztcbiAgICB2YXIgc3VwcG9ydHNDc3NWYXJzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIH1cbiAgICB2YXIgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSBDU1MgJiYgdHlwZW9mIENTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSBDU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gICAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgICB2YXIgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKENTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgICAgICBDU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpKTtcbiAgICBpZiAoZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyB8fCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMpIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJzID0gIWRldGVjdEVkZ2VQc2V1ZG9WYXJCdWcod2luZG93T2JqKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFycyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcnM7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcnM7XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZFxuICogaWYgc28sIHVzZSB0aGVtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaiwgZm9yY2VSZWZyZXNoKSB7XG4gICAgaWYgKGdsb2JhbE9iaiA9PT0gdm9pZCAwKSB7IGdsb2JhbE9iaiA9IHdpbmRvdzsgfVxuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxuICAgIGlmIChzdXBwb3J0c1Bhc3NpdmVfID09PSB1bmRlZmluZWQgfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHZhciBpc1N1cHBvcnRlZF8xID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSwge1xuICAgICAgICAgICAgICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgICAgICAgICAgICAgICBpc1N1cHBvcnRlZF8xID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkXzE7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH0gLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1lbXB0eSBjYW5ub3QgdGhyb3cgZXJyb3IgZHVlIHRvIHRlc3RzLiB0c2xpbnQgYWxzbyBkaXNhYmxlcyBjb25zb2xlLmxvZy5cbiAgICAgICAgc3VwcG9ydHNQYXNzaXZlXyA9IGlzU3VwcG9ydGVkXzE7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVfID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXZ0LCBwYWdlT2Zmc2V0LCBjbGllbnRSZWN0KSB7XG4gICAgaWYgKCFldnQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICB2YXIgeCA9IHBhZ2VPZmZzZXQueCwgeSA9IHBhZ2VPZmZzZXQueTtcbiAgICB2YXIgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgICB2YXIgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuICAgIHZhciBub3JtYWxpemVkWDtcbiAgICB2YXIgbm9ybWFsaXplZFk7XG4gICAgLy8gRGV0ZXJtaW5lIHRvdWNoIHBvaW50IHJlbGF0aXZlIHRvIHRoZSByaXBwbGUgY29udGFpbmVyLlxuICAgIGlmIChldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIHZhciB0b3VjaEV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBtb3VzZUV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IG1vdXNlRXZlbnQucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gbW91c2VFdmVudC5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgcmV0dXJuIHsgeDogbm9ybWFsaXplZFgsIHk6IG5vcm1hbGl6ZWRZIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENDb21wb25lbnQocm9vdCwgZm91bmRhdGlvbikge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3RfID0gcm9vdDtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIHRzbGliXzEuX19zcHJlYWQoYXJncykpO1xuICAgICAgICAvLyBOb3RlIHRoYXQgd2UgaW5pdGlhbGl6ZSBmb3VuZGF0aW9uIGhlcmUgYW5kIG5vdCB3aXRoaW4gdGhlIGNvbnN0cnVjdG9yJ3MgZGVmYXVsdCBwYXJhbSBzbyB0aGF0XG4gICAgICAgIC8vIHRoaXMucm9vdF8gaXMgZGVmaW5lZCBhbmQgY2FuIGJlIHVzZWQgd2l0aGluIHRoZSBmb3VuZGF0aW9uIGNsYXNzLlxuICAgICAgICB0aGlzLmZvdW5kYXRpb25fID0gZm91bmRhdGlvbiA9PT0gdW5kZWZpbmVkID8gdGhpcy5nZXREZWZhdWx0Rm91bmRhdGlvbigpIDogZm91bmRhdGlvbjtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5pbml0KCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFN5bmNXaXRoRE9NKCk7XG4gICAgfVxuICAgIE1EQ0NvbXBvbmVudC5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgd2hpY2ggZXh0ZW5kIE1EQ0Jhc2Ugc2hvdWxkIHByb3ZpZGUgYW4gYXR0YWNoVG8oKSBtZXRob2QgdGhhdCB0YWtlcyBhIHJvb3QgZWxlbWVudCBhbmRcbiAgICAgICAgLy8gcmV0dXJucyBhbiBpbnN0YW50aWF0ZWQgY29tcG9uZW50IHdpdGggaXRzIHJvb3Qgc2V0IHRvIHRoYXQgZWxlbWVudC4gQWxzbyBub3RlIHRoYXQgaW4gdGhlIGNhc2VzIG9mXG4gICAgICAgIC8vIHN1YmNsYXNzZXMsIGFuIGV4cGxpY2l0IGZvdW5kYXRpb24gY2xhc3Mgd2lsbCBub3QgaGF2ZSB0byBiZSBwYXNzZWQgaW47IGl0IHdpbGwgc2ltcGx5IGJlIGluaXRpYWxpemVkXG4gICAgICAgIC8vIGZyb20gZ2V0RGVmYXVsdEZvdW5kYXRpb24oKS5cbiAgICAgICAgcmV0dXJuIG5ldyBNRENDb21wb25lbnQocm9vdCwgbmV3IE1EQ0ZvdW5kYXRpb24oe30pKTtcbiAgICB9O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBtZXRob2QgcGFyYW0gb25seSBleGlzdHMgZm9yIHR5cGluZyBwdXJwb3NlczsgaXQgZG9lcyBub3QgbmVlZCB0byBiZSB1bml0IHRlc3RlZCAqL1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBfYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoaXMgdG8gZG8gYW55IGFkZGl0aW9uYWwgc2V0dXAgd29yayB0aGF0IHdvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiBhXG4gICAgICAgIC8vIFwiY29uc3RydWN0b3JcIi4gRXNzZW50aWFsbHksIGl0IGlzIGEgaG9vayBpbnRvIHRoZSBwYXJlbnQgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBmb3VuZGF0aW9uIGlzXG4gICAgICAgIC8vIGluaXRpYWxpemVkLiBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgYmVzaWRlcyByb290IGFuZCBmb3VuZGF0aW9uIHdpbGwgYmUgcGFzc2VkIGluIGhlcmUuXG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCBmb3VuZGF0aW9uIGNsYXNzIGZvciB0aGVcbiAgICAgICAgLy8gY29tcG9uZW50LlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1YmNsYXNzZXMgbXVzdCBvdmVycmlkZSBnZXREZWZhdWx0Rm91bmRhdGlvbiB0byByZXR1cm4gYSBwcm9wZXJseSBjb25maWd1cmVkICcgK1xuICAgICAgICAgICAgJ2ZvdW5kYXRpb24gY2xhc3MnKTtcbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCBpZiB0aGV5IG5lZWQgdG8gcGVyZm9ybSB3b3JrIHRvIHN5bmNocm9uaXplIHdpdGggYSBob3N0IERPTVxuICAgICAgICAvLyBvYmplY3QuIEFuIGV4YW1wbGUgb2YgdGhpcyB3b3VsZCBiZSBhIGZvcm0gY29udHJvbCB3cmFwcGVyIHRoYXQgbmVlZHMgdG8gc3luY2hyb25pemUgaXRzIGludGVybmFsIHN0YXRlXG4gICAgICAgIC8vIHRvIHNvbWUgcHJvcGVydHkgb3IgYXR0cmlidXRlIG9mIHRoZSBob3N0IERPTS4gUGxlYXNlIG5vdGU6IHRoaXMgaXMgKm5vdCogdGhlIHBsYWNlIHRvIHBlcmZvcm0gRE9NXG4gICAgICAgIC8vIHJlYWRzL3dyaXRlcyB0aGF0IHdvdWxkIGNhdXNlIGxheW91dCAvIHBhaW50LCBhcyB0aGlzIGlzIGNhbGxlZCBzeW5jaHJvbm91c2x5IGZyb20gd2l0aGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBtYXkgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJlbGVhc2UgYW55IHJlc291cmNlcyAvIGRlcmVnaXN0ZXIgYW55IGxpc3RlbmVycyB0aGV5IGhhdmVcbiAgICAgICAgLy8gYXR0YWNoZWQuIEFuIGV4YW1wbGUgb2YgdGhpcyBtaWdodCBiZSBkZXJlZ2lzdGVyaW5nIGEgcmVzaXplIGV2ZW50IGZyb20gdGhlIHdpbmRvdyBvYmplY3QuXG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uZGVzdHJveSgpO1xuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLnJvb3RfLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLnVubGlzdGVuID0gZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5yb290Xy5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmlyZXMgYSBjcm9zcy1icm93c2VyLWNvbXBhdGlibGUgY3VzdG9tIGV2ZW50IGZyb20gdGhlIGNvbXBvbmVudCByb290IG9mIHRoZSBnaXZlbiB0eXBlLCB3aXRoIHRoZSBnaXZlbiBkYXRhLlxuICAgICAqL1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIChldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUpIHtcbiAgICAgICAgaWYgKHNob3VsZEJ1YmJsZSA9PT0gdm9pZCAwKSB7IHNob3VsZEJ1YmJsZSA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBldnQ7XG4gICAgICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlLFxuICAgICAgICAgICAgICAgIGRldGFpbDogZXZ0RGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICAgICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2dFR5cGUsIHNob3VsZEJ1YmJsZSwgZmFsc2UsIGV2dERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vdF8uZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0NvbXBvbmVudDtcbn0oKSk7XG5leHBvcnQgeyBNRENDb21wb25lbnQgfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENDb21wb25lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyBwb255ZmlsbCBmcm9tICcuL3BvbnlmaWxsJztcbmV4cG9ydCB7IHBvbnlmaWxsIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICAvLyBSaXBwbGUgaXMgYSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIFwicm9vdFwiIGNvbXBvbmVudCBpcyByZWFsbHkgYSBcIm1peGluXCIgb2Ygc29ydHMsXG4gICAgLy8gZ2l2ZW4gdGhhdCBpdCdzIGFuICd1cGdyYWRlJyB0byBhbiBleGlzdGluZyBjb21wb25lbnQuIFRoYXQgYmVpbmcgc2FpZCBpdCBpcyB0aGUgcm9vdFxuICAgIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgICBGR19BQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uJyxcbiAgICBGR19ERUFDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbicsXG4gICAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICAgIFVOQk9VTkRFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZCcsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIFZBUl9GR19TQ0FMRTogJy0tbWRjLXJpcHBsZS1mZy1zY2FsZScsXG4gICAgVkFSX0ZHX1NJWkU6ICctLW1kYy1yaXBwbGUtZmctc2l6ZScsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9FTkQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCcsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQnLFxuICAgIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICAgIFZBUl9UT1A6ICctLW1kYy1yaXBwbGUtdG9wJyxcbn07XG5leHBvcnQgdmFyIG51bWJlcnMgPSB7XG4gICAgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM6IDIyNSxcbiAgICBGR19ERUFDVElWQVRJT05fTVM6IDE1MCxcbiAgICBJTklUSUFMX09SSUdJTl9TQ0FMRTogMC42LFxuICAgIFBBRERJTkc6IDEwLFxuICAgIFRBUF9ERUxBWV9NUzogMzAwLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzIH0gZnJvbSAnLi91dGlsJztcbi8vIEFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gdGhlIHJvb3QgZWxlbWVudCBvZiBlYWNoIGluc3RhbmNlIGZvciBhY3RpdmF0aW9uXG52YXIgQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFtcbiAgICAndG91Y2hzdGFydCcsICdwb2ludGVyZG93bicsICdtb3VzZWRvd24nLCAna2V5ZG93bicsXG5dO1xuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG52YXIgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbXG4gICAgJ3RvdWNoZW5kJywgJ3BvaW50ZXJ1cCcsICdtb3VzZXVwJywgJ2NvbnRleHRtZW51Jyxcbl07XG4vLyBzaW11bHRhbmVvdXMgbmVzdGVkIGFjdGl2YXRpb25zXG52YXIgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xudmFyIE1EQ1JpcHBsZUZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDUmlwcGxlRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENSaXBwbGVGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDUmlwcGxlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmZnU2NhbGVfID0gJzAnO1xuICAgICAgICBfdGhpcy5mcmFtZV8gPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgICAgICAgX3RoaXMuaW5pdGlhbFNpemVfID0gMDtcbiAgICAgICAgX3RoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgX3RoaXMubWF4UmFkaXVzXyA9IDA7XG4gICAgICAgIF90aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7IGxlZnQ6IDAsIHRvcDogMCB9O1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gX3RoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IHRydWU7XG4gICAgICAgICAgICBfdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5hY3RpdmF0ZV8oZSk7IH07XG4gICAgICAgIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmRlYWN0aXZhdGVfKCk7IH07XG4gICAgICAgIF90aGlzLmZvY3VzSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVGb2N1cygpOyB9O1xuICAgICAgICBfdGhpcy5ibHVySGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVCbHVyKCk7IH07XG4gICAgICAgIF90aGlzLnJlc2l6ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubGF5b3V0KCk7IH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHg6IDAsIHk6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGlzVW5ib3VuZGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdXBwb3J0c1ByZXNzUmlwcGxlID0gdGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKTtcbiAgICAgICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVF8xID0gX2EuUk9PVCwgVU5CT1VOREVEXzEgPSBfYS5VTkJPVU5ERUQ7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFJPT1RfMSk7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEXzEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlcyBuZWVkIGxheW91dCBsb2dpYyBhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIHNldCBjb29yZGluYXRlcyBmb3IgYm90aCBzaGFkZSBhbmQgcmlwcGxlXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmF0aW9uVGltZXJfKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgICAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIFJPT1RfMiA9IF9hLlJPT1QsIFVOQk9VTkRFRF8yID0gX2EuVU5CT1VOREVEO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhST09UXzIpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKFVOQk9VTkRFRF8yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBldnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZV8oZXZ0KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZV8oKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldFVuYm91bmRlZCA9IGZ1bmN0aW9uICh1bmJvdW5kZWQpIHtcbiAgICAgICAgdmFyIFVOQk9VTkRFRCA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5VTkJPVU5ERUQ7XG4gICAgICAgIGlmICh1bmJvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdlIGNvbXB1dGUgdGhpcyBwcm9wZXJ0eSBzbyB0aGF0IHdlIGFyZSBub3QgcXVlcnlpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNsaWVudFxuICAgICAqIHVudGlsIHRoZSBwb2ludCBpbiB0aW1lIHdoZXJlIHRoZSBmb3VuZGF0aW9uIHJlcXVlc3RzIGl0LiBUaGlzIHByZXZlbnRzIHNjZW5hcmlvcyB3aGVyZVxuICAgICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgICAqIGFuZCB0aGVuIGluaXRpYWxpemVkIGF0IG1vdW50IHRpbWUgb24gdGhlIGNsaWVudC5cbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zdXBwb3J0c1ByZXNzUmlwcGxlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uYnJvd3NlclN1cHBvcnRzQ3NzVmFycygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3RpdmF0aW9uRXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGhhc0RlYWN0aXZhdGlvblVYUnVuOiBmYWxzZSxcbiAgICAgICAgICAgIGlzQWN0aXZhdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzUHJvZ3JhbW1hdGljOiBmYWxzZSxcbiAgICAgICAgICAgIHdhc0FjdGl2YXRlZEJ5UG9pbnRlcjogZmFsc2UsXG4gICAgICAgICAgICB3YXNFbGVtZW50TWFkZUFjdGl2ZTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBzdXBwb3J0c1ByZXNzUmlwcGxlIFBhc3NlZCBmcm9tIGluaXQgdG8gc2F2ZSBhIHJlZHVuZGFudCBmdW5jdGlvbiBjYWxsXG4gICAgICovXG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVnaXN0ZXJSb290SGFuZGxlcnNfID0gZnVuY3Rpb24gKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdrZXl1cCcsIHRoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyXy5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlclJlc2l6ZUhhbmRsZXIodGhpcy5yZXNpemVIYW5kbGVyXyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlbW92ZUNzc1ZhcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmlwcGxlU3RyaW5ncyA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhyaXBwbGVTdHJpbmdzKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignVkFSXycpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8udXBkYXRlQ3NzVmFyaWFibGUocmlwcGxlU3RyaW5nc1trZXldLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZV8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZURpc2FibGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgICAgICB2YXIgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgPSB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgICAgICAgdmFyIGlzU2FtZUludGVyYWN0aW9uID0gcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgJiYgZXZ0ICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZXZ0LnR5cGU7XG4gICAgICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA9IGV2dCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuYWN0aXZhdGlvbkV2ZW50ID0gZXZ0O1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzQWN0aXZhdGVkQnlQb2ludGVyID0gYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID8gZmFsc2UgOiBldnQgIT09IHVuZGVmaW5lZCAmJiAoZXZ0LnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGV2dC50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZXZ0LnR5cGUgPT09ICdwb2ludGVyZG93bicpO1xuICAgICAgICB2YXIgaGFzQWN0aXZhdGVkQ2hpbGQgPSBldnQgIT09IHVuZGVmaW5lZCAmJiBhY3RpdmF0ZWRUYXJnZXRzLmxlbmd0aCA+IDAgJiYgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIF90aGlzLmFkYXB0ZXJfLmNvbnRhaW5zRXZlbnRUYXJnZXQodGFyZ2V0KTsgfSk7XG4gICAgICAgIGlmIChoYXNBY3RpdmF0ZWRDaGlsZCkge1xuICAgICAgICAgICAgLy8gSW1tZWRpYXRlbHkgcmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSwgd2hpbGUgcHJlc2VydmluZyBsb2dpYyB0aGF0IHByZXZlbnRzIHRvdWNoIGZvbGxvdy1vbiBldmVudHNcbiAgICAgICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhY3RpdmF0ZWRUYXJnZXRzLnB1c2goZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKGV2dCk7XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhldnQpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBSZXNldCBhcnJheSBvbiBuZXh0IGZyYW1lIGFmdGVyIHRoZSBjdXJyZW50IGV2ZW50IGhhcyBoYWQgYSBjaGFuY2UgdG8gYnViYmxlIHRvIHByZXZlbnQgYW5jZXN0b3IgcmlwcGxlc1xuICAgICAgICAgICAgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xuICAgICAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmVcbiAgICAgICAgICAgICAgICAmJiBldnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICYmIChldnQua2V5ID09PSAnICcgfHwgZXZ0LmtleUNvZGUgPT09IDMyKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHNwYWNlIHdhcyBwcmVzc2VkLCB0cnkgYWdhaW4gd2l0aGluIGFuIHJBRiBjYWxsIHRvIGRldGVjdCA6YWN0aXZlLCBiZWNhdXNlIGRpZmZlcmVudCBVQXMgcmVwb3J0XG4gICAgICAgICAgICAgICAgLy8gYWN0aXZlIHN0YXRlcyBpbmNvbnNpc3RlbnRseSB3aGVuIHRoZXkncmUgY2FsbGVkIHdpdGhpbiBldmVudCBoYW5kbGluZyBjb2RlOlxuICAgICAgICAgICAgICAgIC8vIC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjM1OTcxXG4gICAgICAgICAgICAgICAgLy8gLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjkzNzQxXG4gICAgICAgICAgICAgICAgLy8gV2UgdHJ5IGZpcnN0IG91dHNpZGUgckFGIHRvIHN1cHBvcnQgRWRnZSwgd2hpY2ggZG9lcyBub3QgZXhoaWJpdCB0aGlzIHByb2JsZW0sIGJ1dCB3aWxsIGNyYXNoIGlmIGEgQ1NTXG4gICAgICAgICAgICAgICAgLy8gdmFyaWFibGUgaXMgc2V0IHdpdGhpbiBhIHJBRiBjYWxsYmFjayBmb3IgYSBzdWJtaXQgYnV0dG9uIGludGVyYWN0aW9uICgjMjI0MSkuXG4gICAgICAgICAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlID0gX3RoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZXZ0KTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVBY3RpdmF0aW9uXygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgYWN0aXZhdGlvbiBzdGF0ZSBpbW1lZGlhdGVseSBpZiBlbGVtZW50IHdhcyBub3QgbWFkZSBhY3RpdmUuXG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvblN0YXRlXyA9IF90aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHJldHVybiAoZXZ0ICE9PSB1bmRlZmluZWQgJiYgZXZ0LnR5cGUgPT09ICdrZXlkb3duJykgPyB0aGlzLmFkYXB0ZXJfLmlzU3VyZmFjZUFjdGl2ZSgpIDogdHJ1ZTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFuaW1hdGVBY3RpdmF0aW9uXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzLCBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUID0gX2EuVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkQgPSBfYS5WQVJfRkdfVFJBTlNMQVRFX0VORDtcbiAgICAgICAgdmFyIF9iID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBGR19ERUFDVElWQVRJT04gPSBfYi5GR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT04gPSBfYi5GR19BQ1RJVkFUSU9OO1xuICAgICAgICB2YXIgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMgPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM7XG4gICAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgIHZhciB0cmFuc2xhdGVTdGFydCA9ICcnO1xuICAgICAgICB2YXIgdHJhbnNsYXRlRW5kID0gJyc7XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB2YXIgX2MgPSB0aGlzLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18oKSwgc3RhcnRQb2ludCA9IF9jLnN0YXJ0UG9pbnQsIGVuZFBvaW50ID0gX2MuZW5kUG9pbnQ7XG4gICAgICAgICAgICB0cmFuc2xhdGVTdGFydCA9IHN0YXJ0UG9pbnQueCArIFwicHgsIFwiICsgc3RhcnRQb2ludC55ICsgXCJweFwiO1xuICAgICAgICAgICAgdHJhbnNsYXRlRW5kID0gZW5kUG9pbnQueCArIFwicHgsIFwiICsgZW5kUG9pbnQueSArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIHRyYW5zbGF0ZVN0YXJ0KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX0VORCwgdHJhbnNsYXRlRW5kKTtcbiAgICAgICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgLy8gRm9yY2UgbGF5b3V0IGluIG9yZGVyIHRvIHJlLXRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cbiAgICAgICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfKCk7IH0sIERFQUNUSVZBVElPTl9USU1FT1VUX01TKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXywgYWN0aXZhdGlvbkV2ZW50ID0gX2EuYWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBfYS53YXNBY3RpdmF0ZWRCeVBvaW50ZXI7XG4gICAgICAgIHZhciBzdGFydFBvaW50O1xuICAgICAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyKSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGFjdGl2YXRpb25FdmVudCwgdGhpcy5hZGFwdGVyXy5nZXRXaW5kb3dQYWdlT2Zmc2V0KCksIHRoaXMuYWRhcHRlcl8uY29tcHV0ZUJvdW5kaW5nUmVjdCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5mcmFtZV8ud2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuZnJhbWVfLmhlaWdodCAvIDIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICAgICAgeDogc3RhcnRQb2ludC54IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgICAgICB5OiBzdGFydFBvaW50LnkgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGVuZFBvaW50ID0ge1xuICAgICAgICAgICAgeDogKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgICAgIHk6ICh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBzdGFydFBvaW50OiBzdGFydFBvaW50LCBlbmRQb2ludDogZW5kUG9pbnQgfTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJvdGggd2hlbiBhIHBvaW50aW5nIGRldmljZSBpcyByZWxlYXNlZCwgYW5kIHdoZW4gdGhlIGFjdGl2YXRpb24gYW5pbWF0aW9uIGVuZHMuXG4gICAgICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgICAgICB2YXIgRkdfREVBQ1RJVkFUSU9OID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTjtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLCBoYXNEZWFjdGl2YXRpb25VWFJ1biA9IF9hLmhhc0RlYWN0aXZhdGlvblVYUnVuLCBpc0FjdGl2YXRlZCA9IF9hLmlzQWN0aXZhdGVkO1xuICAgICAgICB2YXIgYWN0aXZhdGlvbkhhc0VuZGVkID0gaGFzRGVhY3RpdmF0aW9uVVhSdW4gfHwgIWlzQWN0aXZhdGVkO1xuICAgICAgICBpZiAoYWN0aXZhdGlvbkhhc0VuZGVkICYmIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXykge1xuICAgICAgICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH0sIG51bWJlcnMuRkdfREVBQ1RJVkFUSU9OX01TKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgRkdfQUNUSVZBVElPTiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZXNldEFjdGl2YXRpb25TdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmFjdGl2YXRpb25FdmVudDtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgICAgICAvLyBTdG9yZSB0aGUgcHJldmlvdXMgZXZlbnQgdW50aWwgaXQncyBzYWZlIHRvIGFzc3VtZSB0aGF0IHN1YnNlcXVlbnQgZXZlbnRzIGFyZSBmb3IgbmV3IGludGVyYWN0aW9ucy5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQ7IH0sIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBzY2VuYXJpb3Mgc3VjaCBhcyB3aGVuIHlvdSBoYXZlIGEga2V5dXAgZXZlbnQgdGhhdCBibHVycyB0aGUgZWxlbWVudC5cbiAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhdGUgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCBhY3RpdmF0aW9uU3RhdGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpOyB9KTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvblN0YXRlXy5oYXNEZWFjdGl2YXRpb25VWFJ1biA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFuaW1hdGVEZWFjdGl2YXRpb25fID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciB3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBfYS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlID0gX2Eud2FzRWxlbWVudE1hZGVBY3RpdmU7XG4gICAgICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dEludGVybmFsXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5mcmFtZV8gPSB0aGlzLmFkYXB0ZXJfLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICAgICAgdmFyIG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuICAgICAgICAvLyBTdXJmYWNlIGRpYW1ldGVyIGlzIHRyZWF0ZWQgZGlmZmVyZW50bHkgZm9yIHVuYm91bmRlZCB2cy4gYm91bmRlZCByaXBwbGVzLlxuICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgICAgIC8vIHRvIGV4dGVuZCB0aGUgaGl0Ym94LCBhbmQgdGhlIHJpcHBsZSBpcyBleHBlY3RlZCB0byBtZWV0IHRoZSBlZGdlcyBvZiB0aGUgcGFkZGVkIGhpdGJveCAod2hpY2ggaXMgdHlwaWNhbGx5XG4gICAgICAgIC8vIHNxdWFyZSkuIEJvdW5kZWQgcmlwcGxlcywgb24gdGhlIG90aGVyIGhhbmQsIGFyZSBmdWxseSBleHBlY3RlZCB0byBleHBhbmQgYmV5b25kIHRoZSBzdXJmYWNlJ3MgbG9uZ2VzdCBkaWFtZXRlclxuICAgICAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgICAgIC8vIGBvdmVyZmxvdzogaGlkZGVuYC5cbiAgICAgICAgdmFyIGdldEJvdW5kZWRSYWRpdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdyhfdGhpcy5mcmFtZV8ud2lkdGgsIDIpICsgTWF0aC5wb3coX3RoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyXy5pc1VuYm91bmRlZCgpID8gbWF4RGltIDogZ2V0Qm91bmRlZFJhZGl1cygpO1xuICAgICAgICAvLyBSaXBwbGUgaXMgc2l6ZWQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgbGFyZ2VzdCBkaW1lbnNpb24gb2YgdGhlIHN1cmZhY2UsIHRoZW4gc2NhbGVzIHVwIHVzaW5nIGEgQ1NTIHNjYWxlIHRyYW5zZm9ybVxuICAgICAgICB0aGlzLmluaXRpYWxTaXplXyA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICAgICAgdGhpcy5mZ1NjYWxlXyA9IFwiXCIgKyB0aGlzLm1heFJhZGl1c18gLyB0aGlzLmluaXRpYWxTaXplXztcbiAgICAgICAgdGhpcy51cGRhdGVMYXlvdXRDc3NWYXJzXygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUudXBkYXRlTGF5b3V0Q3NzVmFyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncywgVkFSX0ZHX1NJWkUgPSBfYS5WQVJfRkdfU0laRSwgVkFSX0xFRlQgPSBfYS5WQVJfTEVGVCwgVkFSX1RPUCA9IF9hLlZBUl9UT1AsIFZBUl9GR19TQ0FMRSA9IF9hLlZBUl9GR19TQ0FMRTtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0laRSwgdGhpcy5pbml0aWFsU2l6ZV8gKyBcInB4XCIpO1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TQ0FMRSwgdGhpcy5mZ1NjYWxlXyk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICAgICAgICAgIHRvcDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgdGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnQgKyBcInB4XCIpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy51cGRhdGVDc3NWYXJpYWJsZShWQVJfVE9QLCB0aGlzLnVuYm91bmRlZENvb3Jkc18udG9wICsgXCJweFwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ1JpcHBsZUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgcG9ueWZpbGwgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL2luZGV4JztcbmltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xudmFyIE1EQ1JpcHBsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENSaXBwbGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDUmlwcGxlKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBNRENSaXBwbGUuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCwgb3B0cykge1xuICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7IGlzVW5ib3VuZGVkOiB1bmRlZmluZWQgfTsgfVxuICAgICAgICB2YXIgcmlwcGxlID0gbmV3IE1EQ1JpcHBsZShyb290KTtcbiAgICAgICAgLy8gT25seSBvdmVycmlkZSB1bmJvdW5kZWQgYmVoYXZpb3IgaWYgb3B0aW9uIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgICAgIGlmIChvcHRzLmlzVW5ib3VuZGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSBvcHRzLmlzVW5ib3VuZGVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByaXBwbGU7XG4gICAgfTtcbiAgICBNRENSaXBwbGUuY3JlYXRlQWRhcHRlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KTsgfSxcbiAgICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyB9LFxuICAgICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uY29udGFpbnModGFyZ2V0KTsgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgdXRpbC5hcHBseVBhc3NpdmUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2Uucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCB1dGlsLmFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH0pOyB9LFxuICAgICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBwb255ZmlsbC5tYXRjaGVzKGluc3RhbmNlLnJvb3RfLCAnOmFjdGl2ZScpOyB9LFxuICAgICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEJvb2xlYW4oaW5zdGFuY2UuZGlzYWJsZWQpOyB9LFxuICAgICAgICAgICAgaXNVbmJvdW5kZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEJvb2xlYW4oaW5zdGFuY2UudW5ib3VuZGVkKTsgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIHV0aWwuYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTsgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogZnVuY3Rpb24gKHZhck5hbWUsIHZhbHVlKSB7IHJldHVybiBpbnN0YW5jZS5yb290Xy5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSk7IH0sXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlLnByb3RvdHlwZSwgXCJ1bmJvdW5kZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMudW5ib3VuZGVkXyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHVuYm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy51bmJvdW5kZWRfID0gQm9vbGVhbih1bmJvdW5kZWQpO1xuICAgICAgICAgICAgdGhpcy5zZXRVbmJvdW5kZWRfKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uYWN0aXZhdGUoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5kZWFjdGl2YXRlKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5sYXlvdXQoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuZ2V0RGVmYXVsdEZvdW5kYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDUmlwcGxlRm91bmRhdGlvbihNRENSaXBwbGUuY3JlYXRlQWRhcHRlcih0aGlzKSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJvb3QgPSB0aGlzLnJvb3RfO1xuICAgICAgICB0aGlzLnVuYm91bmRlZCA9ICdtZGNSaXBwbGVJc1VuYm91bmRlZCcgaW4gcm9vdC5kYXRhc2V0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xvc3VyZSBDb21waWxlciB0aHJvd3MgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3Igd2hlbiBkaXJlY3RseSBhY2Nlc3NpbmcgYVxuICAgICAqIHByb3RlY3RlZCBvciBwcml2YXRlIHByb3BlcnR5IGluc2lkZSBhIGdldHRlci9zZXR0ZXIsIGxpa2UgdW5ib3VuZGVkIGFib3ZlLlxuICAgICAqIEJ5IGFjY2Vzc2luZyB0aGUgcHJvdGVjdGVkIHByb3BlcnR5IGluc2lkZSBhIG1ldGhvZCwgd2Ugc29sdmUgdGhhdCBwcm9ibGVtLlxuICAgICAqIFRoYXQncyB3aHkgdGhpcyBmdW5jdGlvbiBleGlzdHMuXG4gICAgICovXG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5zZXRVbmJvdW5kZWRfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldFVuYm91bmRlZChCb29sZWFuKHRoaXMudW5ib3VuZGVkXykpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1JpcHBsZTtcbn0oTURDQ29tcG9uZW50KSk7XG5leHBvcnQgeyBNRENSaXBwbGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvbmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcbmV4cG9ydCB7IHV0aWwgfTtcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZm91bmRhdGlvbic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZS9pbmRleCdcbmltcG9ydCB7IHN1cHBvcnRzQ3NzVmFyaWFibGVzLCBhcHBseVBhc3NpdmUgfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL3V0aWwnXG5pbXBvcnQgeyBtYXRjaGVzIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9wb255ZmlsbCdcblxuZXhwb3J0IGNsYXNzIFJpcHBsZUJhc2UgZXh0ZW5kcyBNRENSaXBwbGVGb3VuZGF0aW9uIHtcbiAgc3RhdGljIGdldCBNQVRDSEVTKCkge1xuICAgIC8qIGdsb2JhbCBIVE1MRWxlbWVudCAqL1xuICAgIHJldHVybiAoXG4gICAgICBSaXBwbGVCYXNlLl9tYXRjaGVzIHx8XG4gICAgICAoUmlwcGxlQmFzZS5fbWF0Y2hlcyA9IG1hdGNoZXMoSFRNTEVsZW1lbnQucHJvdG90eXBlKSlcbiAgICApXG4gIH1cblxuICBzdGF0aWMgaXNTdXJmYWNlQWN0aXZlKHJlZikge1xuICAgIHJldHVybiByZWZbUmlwcGxlQmFzZS5NQVRDSEVTXSgnOmFjdGl2ZScpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcih2bSwgb3B0aW9ucykge1xuICAgIHN1cGVyKFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3cpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1VuYm91bmRlZDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kZWxbUmlwcGxlQmFzZS5NQVRDSEVTXSgnOmFjdGl2ZScpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZtLmRpc2FibGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHZtLiRzZXQodm0uY2xhc3NlcywgY2xhc3NOYW1lLCB0cnVlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2bS4kZGVsZXRlKHZtLmNsYXNzZXMsIGNsYXNzTmFtZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IHRhcmdldCA9PiB2bS4kZWwuY29udGFpbnModGFyZ2V0KSxcbiAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdm0uJGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHZtLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogaGFuZGxlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogKHZhck5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2bS4kc2V0KHZtLnN0eWxlcywgdmFyTmFtZSwgdmFsdWUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wdXRlQm91bmRpbmdSZWN0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdm0uJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyB4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBSaXBwbGVNaXhpbiA9IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMucmlwcGxlID0gbmV3IFJpcHBsZUJhc2UodGhpcylcbiAgICB0aGlzLnJpcHBsZS5pbml0KClcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnJpcHBsZS5kZXN0cm95KClcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICA8Y3VzdG9tLWVsZW1lbnQgXG4gICAgOnRhZz1cInRhZ1wiIFxuICAgIDpjbGFzc2VzPVwiY2xhc3Nlc1wiXG4gICAgOnN0eWxlcz1cInN0eWxlc1wiIFxuICAgIGNsYXNzPVwibWRjLXJpcHBsZVwiPlxuICAgIDxzbG90IC8+XG4gIDwvY3VzdG9tLWVsZW1lbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgQ3VzdG9tRWxlbWVudE1peGluIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7IFJpcHBsZU1peGluIH0gZnJvbSAnLi9tZGMtcmlwcGxlLWJhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1yaXBwbGUnLFxuICBtaXhpbnM6IFtDdXN0b21FbGVtZW50TWl4aW4sIFJpcHBsZU1peGluXSxcbiAgcHJvcHM6IHtcbiAgICB0YWc6IFN0cmluZ1xuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGxpXG4gICAgOmNsYXNzPVwiW2NsYXNzZXMsIGl0ZW1DbGFzc2VzXVwiXG4gICAgOnN0eWxlPVwic3R5bGVzXCJcbiAgICA6dGFiaW5kZXg9XCJpc0ludGVyYWN0aXZlID8gJzAnIDogdW5kZWZpbmVkXCJcbiAgICBjbGFzcz1cIm1kYy1saXN0LWl0ZW1cIlxuICAgIHYtb249XCJpc0ludGVyYWN0aXZlID8gJGxpc3RlbmVycyA6IHt9XCJcbiAgPlxuICAgIDwhLS0gPHNwYW4gdi1pZj1cImhhc1N0YXJ0RGV0YWlsXCIgY2xhc3M9XCJtZGMtbGlzdC1pdGVtX19ncmFwaGljXCI+IC0tPlxuICAgIDxzbG90IG5hbWU9XCJzdGFydC1kZXRhaWxcIiAvPlxuICAgIDwhLS0gPC9zcGFuPiAtLT5cblxuICAgIDxzcGFuIGNsYXNzPVwibWRjLWxpc3QtaXRlbV9fdGV4dFwiIHYtaWY9XCJoYXNTZWNvbmRhcnlcIlxuICAgICAgPjxzcGFuIGNsYXNzPVwibWRjLWxpc3QtaXRlbV9fcHJpbWFyeS10ZXh0XCI+IDxzbG90IC8+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtbGlzdC1pdGVtX19zZWNvbmRhcnktdGV4dFwiIHYtaWY9XCJoYXNTZWNvbmRhcnlcIj5cbiAgICAgICAgPHNsb3QgbmFtZT1cInNlY29uZGFyeVwiIC8+XG4gICAgICA8L3NwYW4+XG4gICAgPC9zcGFuPlxuXG4gICAgPHNwYW4gY2xhc3M9XCJtZGMtbGlzdC1pdGVtX190ZXh0XCIgdi1lbHNlPiA8c2xvdCAvPiA8L3NwYW4+XG5cbiAgICA8IS0tIDxzcGFuIHYtaWY9XCJoYXNFbmREZXRhaWxcIiBjbGFzcz1cIm1kYy1saXN0LWl0ZW1fX21ldGFcIj4gLS0+XG4gICAgPHNsb3QgbmFtZT1cImVuZC1kZXRhaWxcIiAvPlxuICAgIDwhLS0gPC9zcGFuPiAtLT5cbiAgPC9saT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBSaXBwbGVCYXNlIH0gZnJvbSAnLi4vcmlwcGxlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtbGlzdC1pdGVtJyxcbiAgaW5qZWN0OiBbJ21kY0xpc3QnXSxcbiAgcHJvcHM6IHtcbiAgICBzZWxlY3RlZDogQm9vbGVhbixcbiAgICBhY3RpdmF0ZWQ6IEJvb2xlYW5cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGl0ZW1DbGFzc2VzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ21kYy1saXN0LWl0ZW0tLXNlbGVjdGVkJzogdGhpcy5zZWxlY3RlZCxcbiAgICAgICAgJ21kYy1saXN0LWl0ZW0tLWFjdGl2YXRlZCc6IHRoaXMuYWN0aXZhdGVkXG4gICAgICB9XG4gICAgfSxcbiAgICBpc0ludGVyYWN0aXZlKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWRjTGlzdCAmJiB0aGlzLm1kY0xpc3QuaW50ZXJhY3RpdmVcbiAgICB9LFxuICAgIGhhc1NlY29uZGFyeSgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzbG90c1snc2Vjb25kYXJ5J10gJiYgKHRoaXMubWRjTGlzdCAmJiB0aGlzLm1kY0xpc3QudHdvTGluZSlcbiAgICB9LFxuICAgIGhhc0VuZERldGFpbCgpIHtcbiAgICAgIHJldHVybiAhIXRoaXMuJHNsb3RzWydlbmQtZGV0YWlsJ11cbiAgICB9LFxuICAgIGhhc1N0YXJ0RGV0YWlsKCkge1xuICAgICAgcmV0dXJuICEhdGhpcy4kc2xvdHNbJ3N0YXJ0LWRldGFpbCddXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGlzSW50ZXJhY3RpdmUodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmFkZFJpcHBsZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZVJpcHBsZSgpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuaXNJbnRlcmFjdGl2ZSAmJiB0aGlzLmFkZFJpcHBsZSgpXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy5yZW1vdmVSaXBwbGUoKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYWRkUmlwcGxlKCkge1xuICAgICAgaWYgKCF0aGlzLnJpcHBsZSkge1xuICAgICAgICBsZXQgcmlwcGxlID0gbmV3IFJpcHBsZUJhc2UodGhpcylcbiAgICAgICAgcmlwcGxlLmluaXQoKVxuICAgICAgICB0aGlzLnJpcHBsZSA9IHJpcHBsZVxuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlUmlwcGxlKCkge1xuICAgICAgaWYgKHRoaXMucmlwcGxlKSB7XG4gICAgICAgIGxldCByaXBwbGUgPSB0aGlzLnJpcHBsZVxuICAgICAgICB0aGlzLnJpcHBsZSA9IG51bGxcbiAgICAgICAgcmlwcGxlLmRlc3Ryb3koKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxsaSBcbiAgICA6Y2xhc3M9XCJjbGFzc2VzXCIgXG4gICAgcm9sZT1cInNlcGFyYXRvclwiIFxuICAgIGNsYXNzPVwibWRjLWxpc3QtZGl2aWRlclwiLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZGMtbGlzdC1kaXZpZGVyJyxcbiAgcHJvcHM6IHtcbiAgICBpbnNldDogQm9vbGVhbixcbiAgICBwYWRkZWQ6IEJvb2xlYW5cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ21kYy1saXN0LWRpdmlkZXItLWluc2V0JzogdGhpcy5pbnNldCxcbiAgICAgICAgJ21kYy1saXN0LWRpdmlkZXItLXBhZGRlZCc6IHRoaXMucGFkZGVkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1kYy1saXN0LWdyb3VwXCI+PHNsb3QvPjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1saXN0LWdyb3VwJ1xufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxoMyBjbGFzcz1cIm1kYy1saXN0LWdyb3VwLWhlYWRlciBtZGMtbGlzdC1ncm91cF9fc3ViaGVhZGVyXCI+PHNsb3QvPjwvaDM+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRjLWxpc3QtZ3JvdXAtaGVhZGVyJ1xufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxociBjbGFzcz1cIm1kYy1saXN0LWdyb3VwLWRpdmlkZXIgbWRjLWxpc3QtZGl2aWRlclwiPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kYy1saXN0LWdyb3VwLWRpdmlkZXInXG59XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IG1kY0xpc3QgZnJvbSAnLi9tZGMtbGlzdC52dWUnXG5pbXBvcnQgbWRjTGlzdEl0ZW0gZnJvbSAnLi9tZGMtbGlzdC1pdGVtLnZ1ZSdcbmltcG9ydCBtZGNMaXN0RGl2aWRlciBmcm9tICcuL21kYy1saXN0LWRpdmlkZXIudnVlJ1xuaW1wb3J0IG1kY0xpc3RHcm91cCBmcm9tICcuL21kYy1saXN0LWdyb3VwLnZ1ZSdcbmltcG9ydCBtZGNMaXN0R3JvdXBIZWFkZXIgZnJvbSAnLi9tZGMtbGlzdC1ncm91cC1oZWFkZXIudnVlJ1xuaW1wb3J0IG1kY0xpc3RHcm91cERpdmlkZXIgZnJvbSAnLi9tZGMtbGlzdC1ncm91cC1kaXZpZGVyLnZ1ZSdcblxuZXhwb3J0IHtcbiAgbWRjTGlzdCxcbiAgbWRjTGlzdEl0ZW0sXG4gIG1kY0xpc3REaXZpZGVyLFxuICBtZGNMaXN0R3JvdXAsXG4gIG1kY0xpc3RHcm91cEhlYWRlcixcbiAgbWRjTGlzdEdyb3VwRGl2aWRlclxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlUGx1Z2luKHtcbiAgbWRjTGlzdCxcbiAgbWRjTGlzdEl0ZW0sXG4gIG1kY0xpc3REaXZpZGVyLFxuICBtZGNMaXN0R3JvdXAsXG4gIG1kY0xpc3RHcm91cEhlYWRlcixcbiAgbWRjTGlzdEdyb3VwRGl2aWRlclxufSlcbiIsImltcG9ydCAnLi9zdHlsZXMuc2NzcydcbmltcG9ydCB7IGF1dG9Jbml0IH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBwbHVnaW4gZnJvbSAnLi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG5hdXRvSW5pdChwbHVnaW4pXG4iXSwibmFtZXMiOlsiYXV0b0luaXQiLCJwbHVnaW4iLCJfVnVlIiwid2luZG93IiwiVnVlIiwiZ2xvYmFsIiwidXNlIiwiQmFzZVBsdWdpbiIsImNvbXBvbmVudHMiLCJ2ZXJzaW9uIiwiaW5zdGFsbCIsInZtIiwia2V5IiwiY29tcG9uZW50IiwibmFtZSIsIkN1c3RvbUVsZW1lbnQiLCJmdW5jdGlvbmFsIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJwcm9wcyIsImlzIiwidGFnIiwiZGF0YSIsImNoaWxkcmVuIiwiQ3VzdG9tRWxlbWVudE1peGluIiwiZW1pdEN1c3RvbUV2ZW50IiwiZWwiLCJldnRUeXBlIiwiZXZ0RGF0YSIsInNob3VsZEJ1YmJsZSIsImV2dCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiYnViYmxlcyIsImRvY3VtZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50Iiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJfX2V4dGVuZHMiLCJfXyIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiY3JlYXRlIiwiX19hc3NpZ24iLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY2FsbCIsImFwcGx5IiwiX19yZWFkIiwibyIsIm0iLCJTeW1ib2wiLCJpdGVyYXRvciIsInIiLCJhciIsImUiLCJuZXh0IiwiZG9uZSIsInB1c2giLCJ2YWx1ZSIsImVycm9yIiwiX19zcHJlYWQiLCJjb25jYXQiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsInRzbGliXzEuX19hc3NpZ24iLCJ0c2xpYl8xLl9fc3ByZWFkIiwiY3NzQ2xhc3NlcyIsInN0cmluZ3MiLCJ1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzIiwidXRpbC5hcHBseVBhc3NpdmUiLCJwb255ZmlsbC5tYXRjaGVzIiwiUmlwcGxlQmFzZSIsInJlZiIsIk1BVENIRVMiLCJfbWF0Y2hlcyIsIm1hdGNoZXMiLCJIVE1MRWxlbWVudCIsIm9wdGlvbnMiLCJicm93c2VyU3VwcG9ydHNDc3NWYXJzIiwic3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJpc1VuYm91bmRlZCIsImlzU3VyZmFjZUFjdGl2ZSIsIiRlbCIsImlzU3VyZmFjZURpc2FibGVkIiwiZGlzYWJsZWQiLCJhZGRDbGFzcyIsImNsYXNzTmFtZSIsIiRzZXQiLCJjbGFzc2VzIiwicmVtb3ZlQ2xhc3MiLCIkZGVsZXRlIiwiY29udGFpbnNFdmVudFRhcmdldCIsInRhcmdldCIsImNvbnRhaW5zIiwicmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGx5UGFzc2l2ZSIsImRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsImRvY3VtZW50RWxlbWVudCIsImRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlciIsInJlZ2lzdGVyUmVzaXplSGFuZGxlciIsImRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyIiwidXBkYXRlQ3NzVmFyaWFibGUiLCJ2YXJOYW1lIiwic3R5bGVzIiwiY29tcHV0ZUJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdldFdpbmRvd1BhZ2VPZmZzZXQiLCJ4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJNRENSaXBwbGVGb3VuZGF0aW9uIiwiUmlwcGxlTWl4aW4iLCJtb3VudGVkIiwicmlwcGxlIiwiaW5pdCIsImJlZm9yZURlc3Ryb3kiLCJkZXN0cm95IiwibWRjTGlzdCIsIm1kY0xpc3RJdGVtIiwibWRjTGlzdERpdmlkZXIiLCJtZGNMaXN0R3JvdXAiLCJtZGNMaXN0R3JvdXBIZWFkZXIiLCJtZGNMaXN0R3JvdXBEaXZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBQU8sU0FBU0EsUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEI7SUFDL0I7SUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBWDs7SUFDQSxNQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7SUFDakNELElBQUFBLElBQUksR0FBR0MsTUFBTSxDQUFDQyxHQUFkO0lBQ0QsR0FGRCxNQUVPLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFt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
