/**
* @module vue-mdc-adaptericon-toggle 0.19.0-beta
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
 * Adapter for MDC Icon Toggle. Provides an interface for managing
 * - classes
 * - dom
 * - inner text
 * - event handlers
 * - event dispatch
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
var MDCIconToggleAdapter =
/*#__PURE__*/
function () {
  function MDCIconToggleAdapter() {
    _classCallCheck(this, MDCIconToggleAdapter);
  }

  _createClass(MDCIconToggleAdapter, [{
    key: "addClass",

    /** @param {string} className */
    value: function addClass(className) {}
    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}
    /**
     * @param {string} type
     * @param {!EventListener} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(type, handler) {}
    /**
     * @param {string} type
     * @param {!EventListener} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(type, handler) {}
    /** @param {string} text */

  }, {
    key: "setText",
    value: function setText(text) {}
    /** @return {number} */

  }, {
    key: "getTabIndex",
    value: function getTabIndex() {}
    /** @param {number} tabIndex */

  }, {
    key: "setTabIndex",
    value: function setTabIndex(tabIndex) {}
    /**
     * @param {string} name
     * @return {string}
     */

  }, {
    key: "getAttr",
    value: function getAttr(name) {}
    /**
     * @param {string} name
     * @param {string} value
     */

  }, {
    key: "setAttr",
    value: function setAttr(name, value) {}
    /** @param {string} name */

  }, {
    key: "rmAttr",
    value: function rmAttr(name) {}
    /** @param {!IconToggleEvent} evtData */

  }, {
    key: "notifyChange",
    value: function notifyChange(evtData) {}
  }]);

  return MDCIconToggleAdapter;
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
var cssClasses = {
  ROOT: 'mdc-icon-toggle',
  DISABLED: 'mdc-icon-toggle--disabled'
};
/** @enum {string} */

var strings = {
  DATA_TOGGLE_ON: 'data-toggle-on',
  DATA_TOGGLE_OFF: 'data-toggle-off',
  ARIA_PRESSED: 'aria-pressed',
  ARIA_DISABLED: 'aria-disabled',
  ARIA_LABEL: 'aria-label',
  CHANGE_EVENT: 'MDCIconToggle:change'
};

/**
 * @extends {MDCFoundation<!MDCIconToggleAdapter>}
 */

var MDCIconToggleFoundation =
/*#__PURE__*/
function (_MDCFoundation) {
  _inherits(MDCIconToggleFoundation, _MDCFoundation);

  _createClass(MDCIconToggleFoundation, null, [{
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
    key: "defaultAdapter",
    get: function get() {
      return {
        addClass: function addClass()
        /* className: string */
        {},
        removeClass: function removeClass()
        /* className: string */
        {},
        registerInteractionHandler: function registerInteractionHandler()
        /* type: string, handler: EventListener */
        {},
        deregisterInteractionHandler: function deregisterInteractionHandler()
        /* type: string, handler: EventListener */
        {},
        setText: function setText()
        /* text: string */
        {},
        getTabIndex: function getTabIndex() {
          return (
            /* number */
            0
          );
        },
        setTabIndex: function setTabIndex()
        /* tabIndex: number */
        {},
        getAttr: function getAttr() {
          return (
            /* name: string */

            /* string */
            ''
          );
        },
        setAttr: function setAttr()
        /* name: string, value: string */
        {},
        rmAttr: function rmAttr()
        /* name: string */
        {},
        notifyChange: function notifyChange()
        /* evtData: IconToggleEvent */
        {}
      };
    }
  }]);

  function MDCIconToggleFoundation(adapter) {
    var _this;

    _classCallCheck(this, MDCIconToggleFoundation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MDCIconToggleFoundation).call(this, _extends(MDCIconToggleFoundation.defaultAdapter, adapter)));
    /** @private {boolean} */

    _this.on_ = false;
    /** @private {boolean} */

    _this.disabled_ = false;
    /** @private {number} */

    _this.savedTabIndex_ = -1;
    /** @private {?IconToggleState} */

    _this.toggleOnData_ = null;
    /** @private {?IconToggleState} */

    _this.toggleOffData_ = null;

    _this.clickHandler_ =
    /** @private {!EventListener} */
    function () {
      return _this.toggleFromEvt_();
    };
    /** @private {boolean} */


    _this.isHandlingKeydown_ = false;

    _this.keydownHandler_ =
    /** @private {!EventListener} */
    function (
    /** @type {!KeyboardKey} */
    evt) {
      if (isSpace(evt)) {
        _this.isHandlingKeydown_ = true;
        return evt.preventDefault();
      }
    };

    _this.keyupHandler_ =
    /** @private {!EventListener} */
    function (
    /** @type {!KeyboardKey} */
    evt) {
      if (isSpace(evt)) {
        _this.isHandlingKeydown_ = false;

        _this.toggleFromEvt_();
      }
    };

    return _this;
  }

  _createClass(MDCIconToggleFoundation, [{
    key: "init",
    value: function init() {
      this.refreshToggleData();
      this.savedTabIndex_ = this.adapter_.getTabIndex();
      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
      this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
    }
  }, {
    key: "refreshToggleData",
    value: function refreshToggleData() {
      var _MDCIconToggleFoundat = MDCIconToggleFoundation.strings,
          DATA_TOGGLE_ON = _MDCIconToggleFoundat.DATA_TOGGLE_ON,
          DATA_TOGGLE_OFF = _MDCIconToggleFoundat.DATA_TOGGLE_OFF;
      this.toggleOnData_ = this.parseJsonDataAttr_(DATA_TOGGLE_ON);
      this.toggleOffData_ = this.parseJsonDataAttr_(DATA_TOGGLE_OFF);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
      this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
    }
    /** @private */

  }, {
    key: "toggleFromEvt_",
    value: function toggleFromEvt_() {
      this.toggle();
      var isOn = this.on_;
      this.adapter_.notifyChange(
      /** @type {!IconToggleEvent} */
      {
        isOn: isOn
      });
    }
    /** @return {boolean} */

  }, {
    key: "isOn",
    value: function isOn() {
      return this.on_;
    }
    /** @param {boolean=} isOn */

  }, {
    key: "toggle",
    value: function toggle() {
      var isOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.on_;
      this.on_ = isOn;
      var _MDCIconToggleFoundat2 = MDCIconToggleFoundation.strings,
          ARIA_LABEL = _MDCIconToggleFoundat2.ARIA_LABEL,
          ARIA_PRESSED = _MDCIconToggleFoundat2.ARIA_PRESSED;

      if (this.on_) {
        this.adapter_.setAttr(ARIA_PRESSED, 'true');
      } else {
        this.adapter_.setAttr(ARIA_PRESSED, 'false');
      }

      var _ref = this.on_ ? this.toggleOffData_ : this.toggleOnData_,
          classToRemove = _ref.cssClass;

      if (classToRemove) {
        this.adapter_.removeClass(classToRemove);
      }

      var _ref2 = this.on_ ? this.toggleOnData_ : this.toggleOffData_,
          content = _ref2.content,
          label = _ref2.label,
          cssClass = _ref2.cssClass;

      if (cssClass) {
        this.adapter_.addClass(cssClass);
      }

      if (content) {
        this.adapter_.setText(content);
      }

      if (label) {
        this.adapter_.setAttr(ARIA_LABEL, label);
      }
    }
    /**
     * @param {string} dataAttr
     * @return {!IconToggleState}
     */

  }, {
    key: "parseJsonDataAttr_",
    value: function parseJsonDataAttr_(dataAttr) {
      var val = this.adapter_.getAttr(dataAttr);

      if (!val) {
        return {};
      }

      return (
        /** @type {!IconToggleState} */
        JSON.parse(val)
      );
    }
    /** @return {boolean} */

  }, {
    key: "isDisabled",
    value: function isDisabled() {
      return this.disabled_;
    }
    /** @param {boolean} isDisabled */

  }, {
    key: "setDisabled",
    value: function setDisabled(isDisabled) {
      this.disabled_ = isDisabled;
      var DISABLED = MDCIconToggleFoundation.cssClasses.DISABLED;
      var ARIA_DISABLED = MDCIconToggleFoundation.strings.ARIA_DISABLED;

      if (this.disabled_) {
        this.savedTabIndex_ = this.adapter_.getTabIndex();
        this.adapter_.setTabIndex(-1);
        this.adapter_.setAttr(ARIA_DISABLED, 'true');
        this.adapter_.addClass(DISABLED);
      } else {
        this.adapter_.setTabIndex(this.savedTabIndex_);
        this.adapter_.rmAttr(ARIA_DISABLED);
        this.adapter_.removeClass(DISABLED);
      }
    }
    /** @return {boolean} */

  }, {
    key: "isKeyboardActivated",
    value: function isKeyboardActivated() {
      return this.isHandlingKeydown_;
    }
  }]);

  return MDCIconToggleFoundation;
}(MDCFoundation);
/**
 * @param {!KeyboardKey} keyboardKey
 * @return {boolean}
 */

function isSpace(keyboardKey) {
  return keyboardKey.key === 'Space' || keyboardKey.keyCode === 32;
}
/** @record */


var IconToggleState = function IconToggleState() {
  _classCallCheck(this, IconToggleState);
};
/**
 * The aria-label value of the icon toggle, or undefined if there is no aria-label.
 * @export {string|undefined}
 */


IconToggleState.prototype.label;
/**
 * The text for the icon toggle, or undefined if there is no text.
 * @export {string|undefined}
 */

IconToggleState.prototype.content;
/**
 * The CSS class to add to the icon toggle, or undefined if there is no CSS class.
 * @export {string|undefined}
 */

IconToggleState.prototype.cssClass;

//
var script = {
  name: 'mdc-icon-toggle',
  props: {
    toggleOn: [String, Object],
    toggleOff: [String, Object],
    value: Boolean,
    disabled: Boolean,
    accent: Boolean
  },
  data: function data() {
    return {
      classes: {
        'mdc-icon-toggle--accent': this.accent
      },
      styles: {},
      iconClasses: {},
      tabIndex: 0,
      text: ''
    };
  },
  computed: {
    toggleOnData: function toggleOnData() {
      var toggle = this.toggleOn;
      return toggle && JSON.stringify(typeof toggle === 'string' ? {
        content: toggle,
        cssClass: 'material-icons'
      } : {
        content: toggle.icon || toggle.content,
        label: toggle.label,
        cssClass: toggle.icon ? 'material-icons' : toggle.cssClass
      });
    },
    toggleOffData: function toggleOffData() {
      var toggle = this.toggleOff;
      return toggle && JSON.stringify(typeof toggle === 'string' ? {
        content: toggle,
        cssClass: 'material-icons'
      } : {
        content: toggle.icon || toggle.content,
        label: toggle.label,
        cssClass: toggle.icon ? 'material-icons' : toggle.cssClass
      });
    }
  },
  watch: {
    value: function value(_value) {
      this.foundation && this.foundation.toggle(_value);
    },
    disabled: function disabled(_disabled) {
      this.foundation && this.foundation.setDisabled(_disabled);
    },
    toggleOnData: function toggleOnData() {
      this.foundation && this.foundation.refreshToggleData();
    },
    toggleOffData: function toggleOffData() {
      this.foundation && this.foundation.refreshToggleData();
    },
    accent: function accent(value) {
      this.$set(this.classes, 'mdc-icon-toggle--secondary', value);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCIconToggleFoundation({
      addClass: function addClass(className) {
        return _this.$set(_this.iconClasses, className, true);
      },
      removeClass: function removeClass(className) {
        return _this.$delete(_this.iconClasses, className);
      },
      registerInteractionHandler: function registerInteractionHandler(evt, handler) {
        return _this.$el.addEventListener(evt, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
        return _this.$el.removeEventListener(evt, handler);
      },
      setText: function setText(text) {
        _this.text = text;
      },
      getTabIndex: function getTabIndex() {
        return _this.tabIndex;
      },
      setTabIndex: function setTabIndex(tabIndex) {
        _this.tabIndex = tabIndex;
      },
      getAttr: function getAttr(name, value) {
        return _this.$el.getAttribute(name, value);
      },
      setAttr: function setAttr(name, value) {
        _this.$el.setAttribute(name, value);
      },
      rmAttr: function rmAttr(name) {
        _this.$el.removeAttribute(name);
      },
      notifyChange: function notifyChange(evtData) {
        _this.$emit('input', evtData.isOn);
      }
    });
    this.foundation.init();
    this.foundation.toggle(this.value);
    this.foundation.setDisabled(this.disabled);
    this.ripple = new RippleBase(this, {
      isUnbounded: function isUnbounded() {
        return true;
      },
      isSurfaceActive: function isSurfaceActive() {
        return _this.foundation.isKeyboardActivated();
      }
    });
    this.ripple.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
    this.ripple.destroy();
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
    "span",
    {
      staticClass: "mdc-icon-toggle",
      class: _vm.classes,
      style: _vm.styles,
      attrs: {
        tabindex: _vm.tabIndex,
        "data-toggle-on": _vm.toggleOnData,
        "data-toggle-off": _vm.toggleOffData,
        role: "button",
        "aria-pressed": "false"
      }
    },
    [
      _c("i", { class: _vm.iconClasses, attrs: { "aria-hidden": "true" } }, [
        _vm._v(_vm._s(_vm.text))
      ])
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
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/ddata/extra/vma/components/icon-toggle/mdc-icon-toggle.vue";

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
  

  
  var mdcIConToggle = __vue_normalize__(
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
  mdcIConToggle: mdcIConToggle
});

export default index;
export { mdcIConToggle };
//# sourceMappingURL=index.js.map
