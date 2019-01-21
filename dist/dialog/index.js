/**
* @module vue-mdc-adapterdialog 0.19.4-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

import { mdcButton } from '../button';

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

var scope = Math.floor(Math.random() * Math.floor(0x10000000)).toString() + '-';
var VMAUniqueIdMixin = {
  beforeCreate: function beforeCreate() {
    this.vma_uid_ = scope + this._uid;
  }
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
 * Adapter for MDC Dialog. Provides an interface for managing:
 * - CSS classes
 * - DOM
 * - Event handlers
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
var MDCDialogAdapter =
/*#__PURE__*/
function () {
  function MDCDialogAdapter() {
    _classCallCheck(this, MDCDialogAdapter);
  }

  _createClass(MDCDialogAdapter, [{
    key: "addClass",

    /** @param {string} className */
    value: function addClass(className) {}
    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}
    /**
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}
    /** @param {string} className */

  }, {
    key: "addBodyClass",
    value: function addBodyClass(className) {}
    /** @param {string} className */

  }, {
    key: "removeBodyClass",
    value: function removeBodyClass(className) {}
    /**
     * @param {!EventTarget} target
     * @param {string} selector
     * @return {boolean}
     */

  }, {
    key: "eventTargetMatches",
    value: function eventTargetMatches(target, selector) {}
  }, {
    key: "trapFocus",
    value: function trapFocus() {}
  }, {
    key: "releaseFocus",
    value: function releaseFocus() {}
    /** @return {boolean} */

  }, {
    key: "isContentScrollable",
    value: function isContentScrollable() {}
    /** @return {boolean} */

  }, {
    key: "areButtonsStacked",
    value: function areButtonsStacked() {}
    /**
     * @param {!Event} event
     * @return {?string}
     */

  }, {
    key: "getActionFromEvent",
    value: function getActionFromEvent(event) {}
  }, {
    key: "clickDefaultButton",
    value: function clickDefaultButton() {}
  }, {
    key: "reverseButtons",
    value: function reverseButtons() {}
  }, {
    key: "notifyOpening",
    value: function notifyOpening() {}
  }, {
    key: "notifyOpened",
    value: function notifyOpened() {}
    /**
     * @param {string} action
     */

  }, {
    key: "notifyClosing",
    value: function notifyClosing(action) {}
    /**
     * @param {string} action
     */

  }, {
    key: "notifyClosed",
    value: function notifyClosed(action) {}
  }]);

  return MDCDialogAdapter;
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
var cssClasses = {
  OPEN: 'mdc-dialog--open',
  OPENING: 'mdc-dialog--opening',
  CLOSING: 'mdc-dialog--closing',
  SCROLLABLE: 'mdc-dialog--scrollable',
  STACKED: 'mdc-dialog--stacked',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock'
};
var strings = {
  SCRIM_SELECTOR: '.mdc-dialog__scrim',
  CONTAINER_SELECTOR: '.mdc-dialog__container',
  SURFACE_SELECTOR: '.mdc-dialog__surface',
  CONTENT_SELECTOR: '.mdc-dialog__content',
  BUTTON_SELECTOR: '.mdc-dialog__button',
  DEFAULT_BUTTON_SELECTOR: '.mdc-dialog__button--default',
  SUPPRESS_DEFAULT_PRESS_SELECTOR: ['textarea', '.mdc-menu .mdc-list-item'].join(', '),
  OPENING_EVENT: 'MDCDialog:opening',
  OPENED_EVENT: 'MDCDialog:opened',
  CLOSING_EVENT: 'MDCDialog:closing',
  CLOSED_EVENT: 'MDCDialog:closed',
  ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
  CLOSE_ACTION: 'close',
  DESTROY_ACTION: 'destroy'
};
var numbers = {
  DIALOG_ANIMATION_OPEN_TIME_MS: 150,
  DIALOG_ANIMATION_CLOSE_TIME_MS: 75
};

var MDCDialogFoundation =
/*#__PURE__*/
function (_MDCFoundation) {
  _inherits(MDCDialogFoundation, _MDCFoundation);

  _createClass(MDCDialogFoundation, null, [{
    key: "cssClasses",
    get: function get() {
      return cssClasses;
    }
  }, {
    key: "strings",
    get: function get() {
      return strings;
    }
  }, {
    key: "numbers",
    get: function get() {
      return numbers;
    }
  }, {
    key: "defaultAdapter",
    get: function get() {
      return (
        /** @type {!MDCDialogAdapter} */
        {
          addClass: function addClass()
          /* className: string */
          {},
          removeClass: function removeClass()
          /* className: string */
          {},
          hasClass: function hasClass()
          /* className: string */
          {},
          addBodyClass: function addBodyClass()
          /* className: string */
          {},
          removeBodyClass: function removeBodyClass()
          /* className: string */
          {},
          eventTargetMatches: function eventTargetMatches()
          /* target: !EventTarget, selector: string */
          {},
          trapFocus: function trapFocus() {},
          releaseFocus: function releaseFocus() {},
          isContentScrollable: function isContentScrollable() {},
          areButtonsStacked: function areButtonsStacked() {},
          getActionFromEvent: function getActionFromEvent()
          /* event: !Event */
          {},
          clickDefaultButton: function clickDefaultButton() {},
          reverseButtons: function reverseButtons() {},
          notifyOpening: function notifyOpening() {},
          notifyOpened: function notifyOpened() {},
          notifyClosing: function notifyClosing()
          /* action: ?string */
          {},
          notifyClosed: function notifyClosed()
          /* action: ?string */
          {}
        }
      );
    }
    /**
     * @param {!MDCDialogAdapter=} adapter
     */

  }]);

  function MDCDialogFoundation(adapter) {
    var _this;

    _classCallCheck(this, MDCDialogFoundation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCDialogFoundation).call(this, _extends(MDCDialogFoundation.defaultAdapter, adapter)));
    /** @private {boolean} */

    _this.isOpen_ = false;
    /** @private {number} */

    _this.animationFrame_ = 0;
    /** @private {number} */

    _this.animationTimer_ = 0;
    /** @private {number} */

    _this.layoutFrame_ = 0;
    /** @private {string} */

    _this.escapeKeyAction_ = strings.CLOSE_ACTION;
    /** @private {string} */

    _this.scrimClickAction_ = strings.CLOSE_ACTION;
    /** @private {boolean} */

    _this.autoStackButtons_ = true;
    /** @private {boolean} */

    _this.areButtonsStacked_ = false;
    return _this;
  }

  _createClass(MDCDialogFoundation, [{
    key: "init",
    value: function init() {
      if (this.adapter_.hasClass(cssClasses.STACKED)) {
        this.setAutoStackButtons(false);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.isOpen_) {
        this.close(strings.DESTROY_ACTION);
      }

      if (this.animationTimer_) {
        clearTimeout(this.animationTimer_);
        this.handleAnimationTimerEnd_();
      }

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
        this.layoutFrame_ = 0;
      }
    }
  }, {
    key: "open",
    value: function open() {
      var _this2 = this;

      this.isOpen_ = true;
      this.adapter_.notifyOpening();
      this.adapter_.addClass(cssClasses.OPENING); // Wait a frame once display is no longer "none", to establish basis for animation

      this.runNextAnimationFrame_(function () {
        _this2.adapter_.addClass(cssClasses.OPEN);

        _this2.adapter_.addBodyClass(cssClasses.SCROLL_LOCK);

        _this2.layout();

        _this2.animationTimer_ = setTimeout(function () {
          _this2.handleAnimationTimerEnd_();

          _this2.adapter_.trapFocus();

          _this2.adapter_.notifyOpened();
        }, numbers.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }
    /**
     * @param {string=} action
     */

  }, {
    key: "close",
    value: function close() {
      var _this3 = this;

      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (!this.isOpen_) {
        // Avoid redundant close calls (and events), e.g. from keydown on elements that inherently emit click
        return;
      }

      this.isOpen_ = false;
      this.adapter_.notifyClosing(action);
      this.adapter_.addClass(cssClasses.CLOSING);
      this.adapter_.removeClass(cssClasses.OPEN);
      this.adapter_.removeBodyClass(cssClasses.SCROLL_LOCK);
      cancelAnimationFrame(this.animationFrame_);
      this.animationFrame_ = 0;
      clearTimeout(this.animationTimer_);
      this.animationTimer_ = setTimeout(function () {
        _this3.adapter_.releaseFocus();

        _this3.handleAnimationTimerEnd_();

        _this3.adapter_.notifyClosed(action);
      }, numbers.DIALOG_ANIMATION_CLOSE_TIME_MS);
    }
  }, {
    key: "isOpen",
    value: function isOpen() {
      return this.isOpen_;
    }
    /** @return {string} */

  }, {
    key: "getEscapeKeyAction",
    value: function getEscapeKeyAction() {
      return this.escapeKeyAction_;
    }
    /** @param {string} action */

  }, {
    key: "setEscapeKeyAction",
    value: function setEscapeKeyAction(action) {
      this.escapeKeyAction_ = action;
    }
    /** @return {string} */

  }, {
    key: "getScrimClickAction",
    value: function getScrimClickAction() {
      return this.scrimClickAction_;
    }
    /** @param {string} action */

  }, {
    key: "setScrimClickAction",
    value: function setScrimClickAction(action) {
      this.scrimClickAction_ = action;
    }
    /** @return {boolean} */

  }, {
    key: "getAutoStackButtons",
    value: function getAutoStackButtons() {
      return this.autoStackButtons_;
    }
    /** @param {boolean} autoStack */

  }, {
    key: "setAutoStackButtons",
    value: function setAutoStackButtons(autoStack) {
      this.autoStackButtons_ = autoStack;
    }
  }, {
    key: "layout",
    value: function layout() {
      var _this4 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }

      this.layoutFrame_ = requestAnimationFrame(function () {
        _this4.layoutInternal_();

        _this4.layoutFrame_ = 0;
      });
    }
  }, {
    key: "layoutInternal_",
    value: function layoutInternal_() {
      if (this.autoStackButtons_) {
        this.detectStackedButtons_();
      }

      this.detectScrollableContent_();
    }
    /** @private */

  }, {
    key: "detectStackedButtons_",
    value: function detectStackedButtons_() {
      // Remove the class first to let us measure the buttons' natural positions.
      this.adapter_.removeClass(cssClasses.STACKED);
      var areButtonsStacked = this.adapter_.areButtonsStacked();

      if (areButtonsStacked) {
        this.adapter_.addClass(cssClasses.STACKED);
      }

      if (areButtonsStacked !== this.areButtonsStacked_) {
        this.adapter_.reverseButtons();
        this.areButtonsStacked_ = areButtonsStacked;
      }
    }
    /** @private */

  }, {
    key: "detectScrollableContent_",
    value: function detectScrollableContent_() {
      // Remove the class first to let us measure the natural height of the content.
      this.adapter_.removeClass(cssClasses.SCROLLABLE);

      if (this.adapter_.isContentScrollable()) {
        this.adapter_.addClass(cssClasses.SCROLLABLE);
      }
    }
    /**
     * @param {!Event} evt
     * @private
     */

  }, {
    key: "handleInteraction",
    value: function handleInteraction(evt) {
      var isClick = evt.type === 'click';
      var isEnter = evt.key === 'Enter' || evt.keyCode === 13; // Check for scrim click first since it doesn't require querying ancestors

      if (isClick && this.adapter_.eventTargetMatches(evt.target, strings.SCRIM_SELECTOR) && this.scrimClickAction_ !== '') {
        this.close(this.scrimClickAction_);
      } else if (isClick || evt.key === 'Space' || evt.keyCode === 32 || isEnter) {
        var action = this.adapter_.getActionFromEvent(evt);

        if (action) {
          this.close(action);
        } else if (isEnter && !this.adapter_.eventTargetMatches(evt.target, strings.SUPPRESS_DEFAULT_PRESS_SELECTOR)) {
          this.adapter_.clickDefaultButton();
        }
      }
    }
    /**
     * @param {!KeyboardEvent} evt
     * @private
     */

  }, {
    key: "handleDocumentKeydown",
    value: function handleDocumentKeydown(evt) {
      if ((evt.key === 'Escape' || evt.keyCode === 27) && this.escapeKeyAction_ !== '') {
        this.close(this.escapeKeyAction_);
      }
    }
    /** @private */

  }, {
    key: "handleAnimationTimerEnd_",
    value: function handleAnimationTimerEnd_() {
      this.animationTimer_ = 0;
      this.adapter_.removeClass(cssClasses.OPENING);
      this.adapter_.removeClass(cssClasses.CLOSING);
    }
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     * @param {Function} callback
     * @private
     */

  }, {
    key: "runNextAnimationFrame_",
    value: function runNextAnimationFrame_(callback) {
      var _this5 = this;

      cancelAnimationFrame(this.animationFrame_);
      this.animationFrame_ = requestAnimationFrame(function () {
        _this5.animationFrame_ = 0;
        clearTimeout(_this5.animationTimer_);
        _this5.animationTimer_ = setTimeout(callback, 0);
      });
    }
  }]);

  return MDCDialogFoundation;
}(MDCFoundation);

var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
var candidateSelector = candidateSelectors.join(',');
var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

function tabbable(el, options) {
  options = options || {};
  var elementDocument = el.ownerDocument || el;
  var regularTabbables = [];
  var orderedTabbables = [];
  var untouchabilityChecker = new UntouchabilityChecker(elementDocument);
  var candidates = el.querySelectorAll(candidateSelector);

  if (options.includeContainer) {
    if (matches.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var i, candidate, candidateTabindex;

  for (i = 0; i < candidates.length; i++) {
    candidate = candidates[i];
    if (!isNodeMatchingSelectorTabbable(candidate, untouchabilityChecker)) continue;
    candidateTabindex = getTabindex(candidate);

    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate
      });
    }
  }

  var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
    return a.node;
  }).concat(regularTabbables);
  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node, untouchabilityChecker) {
  if (!isNodeMatchingSelectorFocusable(node, untouchabilityChecker) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
    return false;
  }

  return true;
}

function isTabbable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, candidateSelector) === false) return false;
  return isNodeMatchingSelectorTabbable(node, untouchabilityChecker);
}

function isNodeMatchingSelectorFocusable(node, untouchabilityChecker) {
  untouchabilityChecker = untouchabilityChecker || new UntouchabilityChecker(node.ownerDocument || node);

  if (node.disabled || isHiddenInput(node) || untouchabilityChecker.isUntouchable(node)) {
    return false;
  }

  return true;
}

var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');

function isFocusable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, focusableCandidateSelector) === false) return false;
  return isNodeMatchingSelectorFocusable(node, untouchabilityChecker);
}

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
  if (!isNaN(tabindexAttr)) return tabindexAttr; // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.

  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
} // Array.prototype.find not available in IE.


function find(list, predicate) {
  for (var i = 0, length = list.length; i < length; i++) {
    if (predicate(list[i])) return list[i];
  }
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }
}

function isTabbableRadio(node) {
  if (!node.name) return true; // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.

  var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
} // An element is "untouchable" if *it or one of its ancestors* has
// `visibility: hidden` or `display: none`.


function UntouchabilityChecker(elementDocument) {
  this.doc = elementDocument; // Node cache must be refreshed on every check, in case
  // the content of the element has changed. The cache contains tuples
  // mapping nodes to their boolean result.

  this.cache = [];
} // getComputedStyle accurately reflects `visibility: hidden` of ancestors
// but not `display: none`, so we need to recursively check parents.


UntouchabilityChecker.prototype.hasDisplayNone = function hasDisplayNone(node, nodeComputedStyle) {
  if (node.nodeType !== Node.ELEMENT_NODE) return false; // Search for a cached result.

  var cached = find(this.cache, function (item) {
    return item === node;
  });
  if (cached) return cached[1];
  nodeComputedStyle = nodeComputedStyle || this.doc.defaultView.getComputedStyle(node);
  var result = false;

  if (nodeComputedStyle.display === 'none') {
    result = true;
  } else if (node.parentNode) {
    result = this.hasDisplayNone(node.parentNode);
  }

  this.cache.push([node, result]);
  return result;
};

UntouchabilityChecker.prototype.isUntouchable = function isUntouchable(node) {
  if (node === this.doc.documentElement) return false;
  var computedStyle = this.doc.defaultView.getComputedStyle(node);
  if (this.hasDisplayNone(node, computedStyle)) return true;
  return computedStyle.visibility === 'hidden';
};

var tabbable_1 = tabbable;

var immutable = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
  var target = {};

  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}

var activeFocusTraps = function () {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];

        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();

function focusTrap(element, userOptions) {
  var doc = document;
  var container = typeof element === 'string' ? doc.querySelector(element) : element;
  var config = immutable({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true
  }, userOptions);
  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };
  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };
  return trap;

  function activate(activateOptions) {
    if (state.active) return;
    updateTabbableNodes();
    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;
    var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;

    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;
    removeListeners();
    state.active = false;
    state.paused = false;
    activeFocusTraps.deactivateTrap(trap);
    var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;

    if (onDeactivate) {
      onDeactivate();
    }

    var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;

    if (returnFocus) {
      delay(function () {
        tryFocus(state.nodeFocusedBeforeActivation);
      });
    }

    return trap;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    addListeners();
  }

  function addListeners() {
    if (!state.active) return; // There can be only one listening focus trap at a time

    activeFocusTraps.activateTrap(trap);
    updateTabbableNodes(); // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.

    delay(function () {
      tryFocus(getInitialFocusNode());
    });
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, true);
    doc.addEventListener('touchstart', checkPointerDown, true);
    doc.addEventListener('click', checkClick, true);
    doc.addEventListener('keydown', checkKey, true);
    return trap;
  }

  function removeListeners() {
    if (!state.active) return;
    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;

    if (!optionValue) {
      return null;
    }

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);

      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }

    if (typeof optionValue === 'function') {
      node = optionValue();

      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }

    return node;
  }

  function getInitialFocusNode() {
    var node;

    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error("You can't have a focus-trap without at least one focusable element");
    }

    return node;
  } // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.


  function checkPointerDown(e) {
    if (container.contains(e.target)) return;

    if (config.clickOutsideDeactivates) {
      deactivate({
        returnFocus: !tabbable_1.isFocusable(e.target)
      });
    } else {
      e.preventDefault();
    }
  } // In case focus escapes the trap for some strange reason, pull it back in.


  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (container.contains(e.target) || e.target instanceof Document) {
      return;
    }

    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      deactivate();
      return;
    }

    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  } // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.


  function checkTab(e) {
    updateTabbableNodes();

    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }

    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = tabbable_1(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode = tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;

    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus();
    state.mostRecentlyFocusedNode = node;

    if (isSelectableInput(node)) {
      node.select();
    }
  }
}

function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
}

function delay(fn) {
  return setTimeout(fn, 0);
}

var focusTrap_1 = focusTrap;

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
 * @param {!Element} surfaceEl
 * @param {?Element=} initialFocusEl
 * @param {function(!Element, !FocusTrapCreateOptions): !FocusTrapInstance} focusTrapFactory
 * @return {!FocusTrapInstance}
 */

function createFocusTrapInstance(surfaceEl) {
  var focusTrapFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : focusTrap_1;
  var initialFocusEl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return focusTrapFactory(surfaceEl, {
    initialFocus: initialFocusEl,
    escapeDeactivates: false,
    // Dialog foundation handles escape key
    clickOutsideDeactivates: true // Allow handling of scrim clicks

  });
}
/**
 * @param {!Element} el
 * @return {boolean}
 */


function isScrollable(el) {
  return el.scrollHeight > el.offsetHeight;
}
/**
 * @param {!Array<!Element>|!NodeList} els
 * @return {boolean}
 */


function areTopsMisaligned(els) {
  var tops = new Set();
  [].forEach.call(els, function (el) {
    return tops.add(el.offsetTop);
  });
  return tops.size > 1;
}

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
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */

/**
 * @param {!Element} element
 * @param {string} selector
 * @return {?Element}
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  var el = element;

  while (el) {
    if (matches$1(el, selector)) {
      return el;
    }

    el = el.parentElement;
  }

  return null;
}
/**
 * @param {!Element} element
 * @param {string} selector
 * @return {boolean}
 */


function matches$1(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}

var activeFocusTraps$1 = function () {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];

        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();

function focusTrap$1(element, userOptions) {
  var doc = document;
  var container = typeof element === 'string' ? doc.querySelector(element) : element;
  var config = immutable({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true
  }, userOptions);
  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };
  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };
  return trap;

  function activate(activateOptions) {
    if (state.active) return;
    updateTabbableNodes();
    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;
    var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;

    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;
    removeListeners();
    state.active = false;
    state.paused = false;
    activeFocusTraps$1.deactivateTrap(trap);
    var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;

    if (onDeactivate) {
      onDeactivate();
    }

    var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;

    if (returnFocus) {
      delay$1(function () {
        tryFocus(state.nodeFocusedBeforeActivation);
      });
    }

    return trap;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    addListeners();
  }

  function addListeners() {
    if (!state.active) return; // There can be only one listening focus trap at a time

    activeFocusTraps$1.activateTrap(trap);
    updateTabbableNodes(); // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.

    delay$1(function () {
      tryFocus(getInitialFocusNode());
    });
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, true);
    doc.addEventListener('touchstart', checkPointerDown, true);
    doc.addEventListener('click', checkClick, true);
    doc.addEventListener('keydown', checkKey, true);
    return trap;
  }

  function removeListeners() {
    if (!state.active) return;
    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;

    if (!optionValue) {
      return null;
    }

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);

      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }

    if (typeof optionValue === 'function') {
      node = optionValue();

      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }

    return node;
  }

  function getInitialFocusNode() {
    var node;

    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error("You can't have a focus-trap without at least one focusable element");
    }

    return node;
  } // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.


  function checkPointerDown(e) {
    if (container.contains(e.target)) return;

    if (config.clickOutsideDeactivates) {
      deactivate({
        returnFocus: !tabbable_1.isFocusable(e.target)
      });
    } else {
      e.preventDefault();
    }
  } // In case focus escapes the trap for some strange reason, pull it back in.


  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (container.contains(e.target) || e.target instanceof Document) {
      return;
    }

    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent$1(e)) {
      e.preventDefault();
      deactivate();
      return;
    }

    if (isTabEvent$1(e)) {
      checkTab(e);
      return;
    }
  } // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.


  function checkTab(e) {
    updateTabbableNodes();

    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }

    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = tabbable_1(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode = tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;

    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus();
    state.mostRecentlyFocusedNode = node;

    if (isSelectableInput$1(node)) {
      node.select();
    }
  }
}

function isSelectableInput$1(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
}

function isEscapeEvent$1(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function isTabEvent$1(e) {
  return e.key === 'Tab' || e.keyCode === 9;
}

function delay$1(fn) {
  return setTimeout(fn, 0);
}

var focusTrap_1$1 = focusTrap$1;

//
var strings$1 = MDCDialogFoundation.strings;
var script = {
  name: 'mdc-dialog',
  components: {
    mdcButton: mdcButton
  },
  mixins: [VMAUniqueIdMixin],
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    title: {
      type: String
    },
    accept: {
      type: String,
      default: 'Ok'
    },
    acceptDisabled: Boolean,
    acceptRaised: {
      type: Boolean,
      default: false
    },
    cancel: {
      type: String
    },
    cancelRaised: {
      type: Boolean,
      default: false
    },
    accent: Boolean,
    scrollable: Boolean,
    open: Boolean
  },
  data: function data() {
    return {
      classes: {
        'mdc-theme--dark': this.dark
      },
      styles: {},
      surfaceClasses: {},
      bodyClasses: {
        'mdc-dialog__body--scrollable': this.scrollable
      }
    };
  },
  watch: {
    open: 'onOpen_'
  },
  mounted: function mounted() {
    var _this = this;

    if (this.accept) {
      this.focusTrap = createFocusTrapInstance(this.$refs.container, focusTrap_1$1);
    }

    this.buttons_ = [].slice.call(this.$el.querySelectorAll(strings$1.BUTTON_SELECTOR));
    this.foundation = new MDCDialogFoundation({
      addClass: function addClass(className) {
        return _this.$set(_this.classes, className, true);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.classes, className);
      },
      hasClass: function hasClass(className) {
        return _this.$el.classList.contains(className);
      },
      addBodyClass: function addBodyClass(className) {
        return document.body.classList.add(className);
      },
      removeBodyClass: function removeBodyClass(className) {
        return document.body.classList.remove(className);
      },
      eventTargetMatches: function eventTargetMatches(target, selector) {
        return matches$1(target, selector);
      },
      trapFocus: function trapFocus() {
        return _this.focusTrap && _this.focusTrap.activate();
      },
      releaseFocus: function releaseFocus() {
        return _this.focusTrap && _this.focusTrap.deactivate();
      },
      isContentScrollable: function isContentScrollable() {
        return !!_this.$refs.content && isScrollable(_this.$refs.content);
      },
      areButtonsStacked: function areButtonsStacked() {
        return areTopsMisaligned(_this.buttons_);
      },
      getActionFromEvent: function getActionFromEvent(event) {
        var element = closest(event.target, "[".concat(strings$1.ACTION_ATTRIBUTE, "]"));
        return element && element.getAttribute(strings$1.ACTION_ATTRIBUTE);
      },
      clickDefaultButton: function clickDefaultButton() {
        if (_this.$refs.defaultButton) {
          _this.$refs.defaultButton.click();
        }
      },
      reverseButtons: function reverseButtons() {
        _this.buttons_.reverse();

        _this.buttons_.forEach(function (button) {
          return button.parentElement.appendChild(button);
        });
      },
      notifyOpening: function notifyOpening() {
        return _this.$emit(strings$1.OPENING_EVENT, {});
      },
      notifyOpened: function notifyOpened() {
        return _this.$emit(strings$1.OPENED_EVENT, {});
      },
      notifyClosing: function notifyClosing(action) {
        _this.$emit('change', false); // console.log(action)


        _this.$emit(strings$1.CLOSING_EVENT, action ? {
          action: action
        } : {});
      },
      notifyClosed: function notifyClosed(action) {
        return _this.$emit(strings$1.CLOSED_EVENT, action ? {
          action: action
        } : {});
      }
    });
    this.foundation.init();
    this.open && this.foundation.open();
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
  },
  methods: {
    onOpen_: function onOpen_(value) {
      if (value) {
        this.foundation.open();
      } else {
        this.foundation.close();
      }
    },
    onClick: function onClick(event) {
      this.foundation.handleInteraction(event);
    },
    onCancel: function onCancel() {
      var _this2 = this;

      if (this.$listeners['validateCancel']) {
        this.$emit('validateCancel', {
          cancel: function cancel() {
            var notify = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            // if notify = false, the dialog will close
            // but the notifyAccept method will not be called
            // so we need to notify listeners the open state
            // is changing.
            if (!notify) {
              _this2.$emit('change', false);
            }

            _this2.foundation.cancel(notify);
          }
        });
      } else {
        this.foundation.cancel(true);
      }
    },
    onAccept: function onAccept() {
      var _this3 = this;

      if (this.$listeners['validate']) {
        this.$emit('validate', {
          accept: function accept() {
            var notify = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            // if notify = false, the dialog will close
            // but the notifyAccept method will not be called
            // so we need to notify listeners the open state
            // is changing.
            if (!notify) {
              _this3.$emit('change', false);
            }

            _this3.foundation.accept(notify);
          }
        });
      } else {
        this.foundation.accept(true);
      }
    },
    show: function show() {
      this.foundation.open();
    },
    close: function close() {
      this.foundation.close();
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
script.__file = "/ddata/extra/vma/components/dialog/mdc-dialog.vue";

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      ref: "root",
      staticClass: "mdc-dialog",
      class: _vm.classes,
      style: _vm.styles,
      attrs: {
        "aria-modal": "true",
        "aria-labelledby": "label" + _vm.vma_uid_,
        "aria-describedby": "desc" + _vm.vma_uid_,
        role: "alertdialog"
      },
      on: { click: _vm.onClick, keydown: _vm.onClick }
    },
    [
      _c("div", { ref: "container", staticClass: "mdc-dialog__container" }, [
        _c(
          "div",
          {
            ref: "surface",
            staticClass: "mdc-dialog__surface",
            class: _vm.surfaceClasses
          },
          [
            _vm.title
              ? _c(
                  "h2",
                  {
                    staticClass: "mdc-dialog__title",
                    attrs: { id: "label" + _vm.vma_uid_ }
                  },
                  [_vm._v(_vm._s(_vm.title))]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                ref: "content",
                staticClass: "mdc-dialog__content",
                attrs: { id: "desc" + _vm.vma_uid_ }
              },
              [_vm._t("default")],
              2
            ),
            _vm._v(" "),
            _vm.accept || _vm.cancel
              ? _c("footer", { staticClass: "mdc-dialog__actions" }, [
                  _vm.cancel
                    ? _c(
                        "button",
                        {
                          staticClass: "mdc-button mdc-dialog__button",
                          attrs: {
                            type: "button",
                            "data-mdc-dialog-action": "no"
                          }
                        },
                        [
                          _vm._v(
                            "\n          " + _vm._s(_vm.cancel) + "\n        "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      ref: "defaultButton",
                      staticClass: "mdc-button mdc-dialog__button ",
                      attrs: {
                        type: "button",
                        disabled: _vm.acceptDisabled,
                        "data-mdc-dialog-action": "yes"
                      }
                    },
                    [_vm._v("\n          " + _vm._s(_vm.accept) + "\n        ")]
                  )
                ])
              : _vm._e()
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mdc-dialog__scrim" })
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
  

  
  var mdcDialog = normalizeComponent(
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
  mdcDialog: mdcDialog
});

export default index;
export { mdcDialog };
//# sourceMappingURL=index.js.map
