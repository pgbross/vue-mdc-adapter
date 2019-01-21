/**
* @module vue-mdc-adapterchips 0.19.4-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

import { RippleBase } from '../ripple';

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

var script = {
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
script.__file = "/ddata/extra/vma/components/chips/mdc-chip.vue";

/* template */
var __vue_render__ = function() {
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
  

  
  var mdcChip = normalizeComponent(
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
var strings$1 = {
  CHIP_SELECTOR: '.mdc-chip'
};
/** @enum {string} */

var cssClasses$1 = {
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
      return strings$1;
    }
    /** @return enum {string} */

  }, {
    key: "cssClasses",
    get: function get() {
      return cssClasses$1;
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

      if (this.adapter_.hasClass(cssClasses$1.CHOICE) && this.selectedChipIds_.length > 0) {
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
      if (this.adapter_.hasClass(cssClasses$1.CHOICE) || this.adapter_.hasClass(cssClasses$1.FILTER)) {
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
var script$1 = {
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
const __vue_script__$1 = script$1;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$1.__file = "/ddata/extra/vma/components/chips/mdc-chip-set.vue";

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
  

  
  var mdcChipSet = normalizeComponent(
    {},
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

var index = BasePlugin({
  mdcChip: mdcChip,
  mdcChipSet: mdcChipSet
});

export default index;
export { mdcChip, mdcChipSet };
//# sourceMappingURL=index.js.map
