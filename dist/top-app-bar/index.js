/**
* @module vue-mdc-adaptertop-app-bar 0.19.4-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^1.0.0-0","material-components-web":"^1.0.0-0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

import { RippleMixin } from '../ripple';

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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/* global CustomEvent */

var DispatchEventMixin = {
  props: {
    event: String,
    'event-target': Object,
    'event-args': Array
  },
  methods: {
    dispatchEvent: function dispatchEvent(evt) {
      evt && this.$emit(evt.type, evt);

      if (this.event) {
        var target = this.eventTarget || this.$root;
        var args = this.eventArgs || [];
        target.$emit.apply(target, [this.event].concat(_toConsumableArray(args)));
      }
    }
  },
  computed: {
    listeners: function listeners() {
      var _this = this;

      return _objectSpread({}, this.$listeners, {
        click: function click(e) {
          return _this.dispatchEvent(e);
        }
      });
    }
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
  FIXED_CLASS: 'mdc-top-app-bar--fixed',
  FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
  SHORT_CLASS: 'mdc-top-app-bar--short',
  SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
  SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item'
};
var numbers = {
  DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
  MAX_TOP_APP_BAR_HEIGHT: 128
};
var strings = {
  ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
  NAVIGATION_EVENT: 'MDCTopAppBar:nav',
  NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
  ROOT_SELECTOR: '.mdc-top-app-bar',
  TITLE_SELECTOR: '.mdc-top-app-bar__title'
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

var MDCTopAppBarBaseFoundation =
/** @class */
function (_super) {
  __extends(MDCTopAppBarBaseFoundation, _super);
  /* istanbul ignore next: optional argument is not a branch statement */


  function MDCTopAppBarBaseFoundation(adapter) {
    var _this = _super.call(this, _assign({}, MDCTopAppBarBaseFoundation.defaultAdapter, adapter)) || this;

    _this.navClickHandler_ = function () {
      return _this.adapter_.notifyNavigationIconClicked();
    };

    return _this;
  }

  Object.defineProperty(MDCTopAppBarBaseFoundation, "strings", {
    get: function get() {
      return strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation, "cssClasses", {
    get: function get() {
      return cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation, "numbers", {
    get: function get() {
      return numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
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
        setStyle: function setStyle() {
          return undefined;
        },
        getTopAppBarHeight: function getTopAppBarHeight() {
          return 0;
        },
        registerNavigationIconInteractionHandler: function registerNavigationIconInteractionHandler() {
          return undefined;
        },
        deregisterNavigationIconInteractionHandler: function deregisterNavigationIconInteractionHandler() {
          return undefined;
        },
        notifyNavigationIconClicked: function notifyNavigationIconClicked() {
          return undefined;
        },
        registerScrollHandler: function registerScrollHandler() {
          return undefined;
        },
        deregisterScrollHandler: function deregisterScrollHandler() {
          return undefined;
        },
        registerResizeHandler: function registerResizeHandler() {
          return undefined;
        },
        deregisterResizeHandler: function deregisterResizeHandler() {
          return undefined;
        },
        getViewportScrollY: function getViewportScrollY() {
          return 0;
        },
        getTotalActionItems: function getTotalActionItems() {
          return 0;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTopAppBarBaseFoundation.prototype.init = function () {
    this.initScrollHandler();
    this.initResizeHandler_();
    this.adapter_.registerNavigationIconInteractionHandler('click', this.navClickHandler_);
  };

  MDCTopAppBarBaseFoundation.prototype.destroy = function () {
    this.destroyScrollHandler();
    this.destroyResizeHandler_();
    this.adapter_.deregisterNavigationIconInteractionHandler('click', this.navClickHandler_);
  };

  MDCTopAppBarBaseFoundation.prototype.initScrollHandler = function () {
    if (this.scrollHandler_) {
      this.adapter_.registerScrollHandler(this.scrollHandler_);
    }
  };

  MDCTopAppBarBaseFoundation.prototype.destroyScrollHandler = function () {
    if (this.scrollHandler_) {
      this.adapter_.deregisterScrollHandler(this.scrollHandler_);
    }
  };

  MDCTopAppBarBaseFoundation.prototype.initResizeHandler_ = function () {
    if (this.resizeHandler_) {
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
  };

  MDCTopAppBarBaseFoundation.prototype.destroyResizeHandler_ = function () {
    if (this.resizeHandler_) {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  };

  return MDCTopAppBarBaseFoundation;
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
var INITIAL_VALUE = 0;

var MDCTopAppBarFoundation =
/** @class */
function (_super) {
  __extends(MDCTopAppBarFoundation, _super);
  /* istanbul ignore next: optional argument is not a branch statement */


  function MDCTopAppBarFoundation(adapter) {
    var _this = _super.call(this, adapter) || this;
    /**
     * Indicates if the top app bar was docked in the previous scroll handler iteration.
     */


    _this.wasDocked_ = true;
    /**
     * Indicates if the top app bar is docked in the fully shown position.
     */

    _this.isDockedShowing_ = true;
    /**
     * Variable for current scroll position of the top app bar
     */

    _this.currentAppBarOffsetTop_ = 0;
    /**
     * Used to prevent the top app bar from being scrolled out of view during resize events
     */

    _this.isCurrentlyBeingResized_ = false;
    /**
     * The timeout that's used to throttle the resize events
     */

    _this.resizeThrottleId_ = INITIAL_VALUE;
    /**
     * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
     */

    _this.resizeDebounceId_ = INITIAL_VALUE;
    _this.lastScrollPosition_ = _this.adapter_.getViewportScrollY();
    _this.topAppBarHeight_ = _this.adapter_.getTopAppBarHeight();

    _this.scrollHandler_ = function () {
      return _this.topAppBarScrollHandler_();
    };

    _this.resizeHandler_ = function () {
      return _this.topAppBarResizeHandler_();
    };

    return _this;
  }

  MDCTopAppBarFoundation.prototype.destroy = function () {
    _super.prototype.destroy.call(this);

    this.adapter_.setStyle('top', '');
  };
  /**
   * Function to determine if the DOM needs to update.
   */


  MDCTopAppBarFoundation.prototype.checkForUpdate_ = function () {
    var offscreenBoundaryTop = -this.topAppBarHeight_;
    var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
    var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
    var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen; // If it's partially showing, it can't be docked.

    if (partiallyShowing) {
      this.wasDocked_ = false;
    } else {
      // Not previously docked and not partially showing, it's now docked.
      if (!this.wasDocked_) {
        this.wasDocked_ = true;
        return true;
      } else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
        this.isDockedShowing_ = hasAnyPixelsOnscreen;
        return true;
      }
    }

    return partiallyShowing;
  };
  /**
   * Function to move the top app bar if needed.
   */


  MDCTopAppBarFoundation.prototype.moveTopAppBar_ = function () {
    if (this.checkForUpdate_()) {
      // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
      // so the top app bar doesn't show if the window resizes and the new height > the old height.
      var offset = this.currentAppBarOffsetTop_;

      if (Math.abs(offset) >= this.topAppBarHeight_) {
        offset = -numbers.MAX_TOP_APP_BAR_HEIGHT;
      }

      this.adapter_.setStyle('top', offset + 'px');
    }
  };
  /**
   * Scroll handler for the default scroll behavior of the top app bar.
   */


  MDCTopAppBarFoundation.prototype.topAppBarScrollHandler_ = function () {
    var currentScrollPosition = Math.max(this.adapter_.getViewportScrollY(), 0);
    var diff = currentScrollPosition - this.lastScrollPosition_;
    this.lastScrollPosition_ = currentScrollPosition; // If the window is being resized the lastScrollPosition_ needs to be updated but the
    // current scroll of the top app bar should stay in the same position.

    if (!this.isCurrentlyBeingResized_) {
      this.currentAppBarOffsetTop_ -= diff;

      if (this.currentAppBarOffsetTop_ > 0) {
        this.currentAppBarOffsetTop_ = 0;
      } else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
        this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
      }

      this.moveTopAppBar_();
    }
  };
  /**
   * Top app bar resize handler that throttle/debounce functions that execute updates.
   */


  MDCTopAppBarFoundation.prototype.topAppBarResizeHandler_ = function () {
    var _this = this; // Throttle resize events 10 p/s


    if (!this.resizeThrottleId_) {
      this.resizeThrottleId_ = setTimeout(function () {
        _this.resizeThrottleId_ = INITIAL_VALUE;

        _this.throttledResizeHandler_();
      }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    }

    this.isCurrentlyBeingResized_ = true;

    if (this.resizeDebounceId_) {
      clearTimeout(this.resizeDebounceId_);
    }

    this.resizeDebounceId_ = setTimeout(function () {
      _this.topAppBarScrollHandler_();

      _this.isCurrentlyBeingResized_ = false;
      _this.resizeDebounceId_ = INITIAL_VALUE;
    }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
  };
  /**
   * Throttled function that updates the top app bar scrolled values if the
   * top app bar height changes.
   */


  MDCTopAppBarFoundation.prototype.throttledResizeHandler_ = function () {
    var currentHeight = this.adapter_.getTopAppBarHeight();

    if (this.topAppBarHeight_ !== currentHeight) {
      this.wasDocked_ = false; // Since the top app bar has a different height depending on the screen width, this
      // will ensure that the top app bar remains in the correct location if
      // completely hidden and a resize makes the top app bar a different height.

      this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
      this.topAppBarHeight_ = currentHeight;
    }

    this.topAppBarScrollHandler_();
  };

  return MDCTopAppBarFoundation;
}(MDCTopAppBarBaseFoundation);

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

var MDCShortTopAppBarFoundation =
/** @class */
function (_super) {
  __extends(MDCShortTopAppBarFoundation, _super);
  /* istanbul ignore next: optional argument is not a branch statement */


  function MDCShortTopAppBarFoundation(adapter) {
    var _this = _super.call(this, adapter) || this;
    /**
     * State variable for the current top app bar state
     */


    _this.isCollapsed = false;
    return _this;
  }

  MDCShortTopAppBarFoundation.prototype.init = function () {
    var _this = this;

    _super.prototype.init.call(this);

    if (this.adapter_.getTotalActionItems() > 0) {
      this.adapter_.addClass(cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
    }

    if (!this.adapter_.hasClass(cssClasses.SHORT_COLLAPSED_CLASS)) {
      this.scrollHandler_ = function () {
        return _this.shortAppBarScrollHandler_();
      };

      this.adapter_.registerScrollHandler(this.scrollHandler_);
      this.shortAppBarScrollHandler_();
    }
  };

  MDCShortTopAppBarFoundation.prototype.destroy = function () {
    _super.prototype.destroy.call(this);
  };
  /**
   * Scroll handler for applying/removing the collapsed modifier class on the short top app bar.
   */


  MDCShortTopAppBarFoundation.prototype.shortAppBarScrollHandler_ = function () {
    var currentScroll = this.adapter_.getViewportScrollY();

    if (currentScroll <= 0) {
      if (this.isCollapsed) {
        this.adapter_.removeClass(cssClasses.SHORT_COLLAPSED_CLASS);
        this.isCollapsed = false;
      }
    } else {
      if (!this.isCollapsed) {
        this.adapter_.addClass(cssClasses.SHORT_COLLAPSED_CLASS);
        this.isCollapsed = true;
      }
    }
  };

  return MDCShortTopAppBarFoundation;
}(MDCTopAppBarBaseFoundation);

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

var MDCFixedTopAppBarFoundation =
/** @class */
function (_super) {
  __extends(MDCFixedTopAppBarFoundation, _super);
  /* istanbul ignore next: optional argument is not a branch statement */


  function MDCFixedTopAppBarFoundation(adapter) {
    var _this = _super.call(this, adapter) || this;
    /**
     * State variable for the previous scroll iteration top app bar state
     */


    _this.wasScrolled_ = false;

    _this.scrollHandler_ = function () {
      return _this.fixedScrollHandler_();
    };

    return _this;
  }
  /**
   * Scroll handler for applying/removing the modifier class on the fixed top app bar.
   */


  MDCFixedTopAppBarFoundation.prototype.fixedScrollHandler_ = function () {
    var currentScroll = this.adapter_.getViewportScrollY();

    if (currentScroll <= 0) {
      if (this.wasScrolled_) {
        this.adapter_.removeClass(cssClasses.FIXED_SCROLLED_CLASS);
        this.wasScrolled_ = false;
      }
    } else {
      if (!this.wasScrolled_) {
        this.adapter_.addClass(cssClasses.FIXED_SCROLLED_CLASS);
        this.wasScrolled_ = true;
      }
    }
  };

  return MDCFixedTopAppBarFoundation;
}(MDCTopAppBarFoundation);

var script = {
  name: 'mdc-top-app-bar',
  mixins: [DispatchEventMixin],
  props: {
    short: Boolean,
    shortCollapsed: Boolean,
    prominent: Boolean,
    fixed: Boolean,
    title: String,
    icon: {
      type: [String, Boolean],
      default: 'menu'
    },
    iconClasses: Object,
    dense: Boolean
  },
  data: function data() {
    return {
      rootStyles: {
        top: '0'
      },
      rootClasses: {
        'mdc-top-app-bar': true,
        'mdc-top-app-bar--dense': this.dense,
        'mdc-top-app-bar--short': this.short,
        'mdc-top-app-bar--short-collapsed': this.shortCollapsed,
        'mdc-top-app-bar--prominent': this.prominent,
        'mdc-top-app-bar--fixed': this.fixed
      },
      foundation: null
    };
  },
  computed: {
    haveNavigationIcon: function haveNavigationIcon() {
      return !!this.icon || this.iconClasses;
    },
    naviconClasses: function naviconClasses() {
      return _objectSpread({
        'mdc-top-app-bar__navigation-icon': true,
        'material-icons': !!this.icon
      }, this.iconClasses);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var adapter = {
      addClass: function addClass(className) {
        _this.$set(_this.rootClasses, className, true);
      },
      removeClass: function removeClass(className) {
        _this.$delete(_this.rootClasses, className);
      },
      hasClass: function hasClass(className) {
        return Boolean(_this.rootClasses[className]);
      },
      setStyle: function setStyle(property, value) {
        _this.$set(_this.rootStyles, property, value);
      },
      getTopAppBarHeight: function getTopAppBarHeight() {
        return _this.$el.clientHeight;
      },
      registerNavigationIconInteractionHandler: function registerNavigationIconInteractionHandler(type, handler) {
        if (_this.$refs.navigationIcon) {
          _this.$refs.navigationIcon.addEventListener(type, handler);
        }
      },
      deregisterNavigationIconInteractionHandler: function deregisterNavigationIconInteractionHandler(type, handler) {
        if (_this.$refs.navigationIcon) {
          _this.$refs.navigationIcon.removeEventListener(type, handler);
        }
      },
      notifyNavigationIconClicked: function notifyNavigationIconClicked() {
        _this.$emit('nav');
      },
      registerScrollHandler: function registerScrollHandler(handler) {
        window.addEventListener('scroll', handler);
      },
      deregisterScrollHandler: function deregisterScrollHandler(handler) {
        window.removeEventListener('scroll', handler);
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      getViewportScrollY: function getViewportScrollY() {
        return window.pageYOffset;
      },
      getTotalActionItems: function getTotalActionItems() {
        return _this.$refs.root.querySelectorAll(MDCTopAppBarFoundation.strings.ACTION_ITEM_SELECTOR).length;
      }
    };
    this.foundation = this.short ? new MDCShortTopAppBarFoundation(adapter) : this.fixed ? new MDCFixedTopAppBarFoundation(adapter) : new MDCTopAppBarFoundation(adapter);
    this.foundation.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
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
    "header",
    _vm._g(
      { ref: "root", class: _vm.rootClasses, style: _vm.rootStyles },
      _vm.$listeners
    ),
    [
      _c("div", { staticClass: "mdc-top-app-bar__row" }, [
        _c(
          "section",
          {
            staticClass:
              "mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
          },
          [
            _vm.haveNavigationIcon
              ? _c(
                  "button",
                  _vm._g(
                    { ref: "navigationIcon", class: _vm.naviconClasses },
                    _vm.listeners
                  ),
                  [_vm._v("\n        " + _vm._s(_vm.icon) + "\n      ")]
                )
              : _vm._e(),
            _vm._v(" "),
            !!_vm.title
              ? _c("span", { staticClass: "mdc-top-app-bar__title" }, [
                  _vm._v(_vm._s(_vm.title))
                ])
              : _vm._e()
          ]
        ),
        _vm._v(" "),
        _vm.$slots.default
          ? _c(
              "section",
              {
                staticClass:
                  "mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
              },
              [_vm._t("default")],
              2
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm._t("tabs")
    ],
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
  

  
  var mdcTopAppBar = normalizeComponent_1(
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
  name: 'mdc-top-app-bar-action',
  mixins: [DispatchEventMixin, RippleMixin],
  props: {
    tag: {
      type: String,
      default: 'a'
    },
    icon: String,
    iconClasses: Object
  },
  render: function render(h) {
    return h(this.tag, {
      class: {
        'mdc-top-app-bar-action': true,
        'mdc-top-app-bar--action': true,
        'mdc-top-app-bar__action-item': true,
        'material-icons': !!this.icon && !this.$slots.default
      },
      attrs: this.$attrs,
      on: this.$listeners
    }, this.$slots.default || [this.icon]);
  }
};

/* script */
const __vue_script__$1 = script$1;

/* template */

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = undefined;
  /* style inject */
  
  /* style inject SSR */
  

  
  var mdcTopAppBarAction = normalizeComponent_1(
    {},
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

var script$2 = {
  name: 'mdc-fixed-adjust',
  props: {
    tag: {
      type: String,
      default: 'main'
    },
    dense: Boolean,
    short: Boolean,
    prominent: Boolean
  },
  computed: {
    classnames: function classnames() {}
  },
  render: function render(h) {
    var _class;

    var base = 'mdc-top-app-bar';
    var suffix = '-fixed-adjust';
    return h(this.tag, {
      class: (_class = {}, _defineProperty(_class, base + '--short' + suffix, this.short), _defineProperty(_class, base + '--dense' + suffix, this.dense && !this.prominent), _defineProperty(_class, base + '--dense-prominent' + suffix, this.dense && this.prominent), _defineProperty(_class, base + '--prominent' + suffix, !this.dense && this.prominent), _defineProperty(_class, base + '-' + suffix, !this.short && !this.dense && !this.prominent), _class),
      attrs: this.$attrs
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
  

  
  var mdcFixedAdjust = normalizeComponent_1(
    {},
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

var index = BasePlugin({
  mdcTopAppBar: mdcTopAppBar,
  mdcTopAppBarAction: mdcTopAppBarAction,
  mdcFixedAdjust: mdcFixedAdjust
});

export default index;
export { mdcTopAppBar, mdcTopAppBarAction, mdcFixedAdjust };
//# sourceMappingURL=index.js.map
