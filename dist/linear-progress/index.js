/**
* @module vue-mdc-adapterlinear-progress 0.19.0-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.42.0","material-components-web":"^0.42.1"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

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
// property names.


var transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];

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
var cssClasses = {
  CLOSED_CLASS: 'mdc-linear-progress--closed',
  INDETERMINATE_CLASS: 'mdc-linear-progress--indeterminate',
  REVERSED_CLASS: 'mdc-linear-progress--reversed'
};
var strings = {
  PRIMARY_BAR_SELECTOR: '.mdc-linear-progress__primary-bar',
  BUFFER_SELECTOR: '.mdc-linear-progress__buffer'
};

var MDCLinearProgressFoundation =
/*#__PURE__*/
function (_MDCFoundation) {
  _inherits(MDCLinearProgressFoundation, _MDCFoundation);

  _createClass(MDCLinearProgressFoundation, null, [{
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
        getPrimaryBar: function getPrimaryBar()
        /* el: Element */
        {},
        getBuffer: function getBuffer()
        /* el: Element */
        {},
        hasClass: function hasClass() {
          return (
            /* className: string */
            false
          );
        },
        removeClass: function removeClass()
        /* className: string */
        {},
        setStyle: function setStyle()
        /* el: Element, styleProperty: string, value: string */
        {}
      };
    }
  }]);

  function MDCLinearProgressFoundation(adapter) {
    _classCallCheck(this, MDCLinearProgressFoundation);

    return _possibleConstructorReturn(this, _getPrototypeOf(MDCLinearProgressFoundation).call(this, _extends(MDCLinearProgressFoundation.defaultAdapter, adapter)));
  }

  _createClass(MDCLinearProgressFoundation, [{
    key: "init",
    value: function init() {
      this.determinate_ = !this.adapter_.hasClass(cssClasses.INDETERMINATE_CLASS);
      this.reverse_ = this.adapter_.hasClass(cssClasses.REVERSED_CLASS);
      this.progress_ = 0;
    }
  }, {
    key: "setDeterminate",
    value: function setDeterminate(isDeterminate) {
      this.determinate_ = isDeterminate;

      if (this.determinate_) {
        this.adapter_.removeClass(cssClasses.INDETERMINATE_CLASS);
        this.setScale_(this.adapter_.getPrimaryBar(), this.progress_);
      } else {
        this.adapter_.addClass(cssClasses.INDETERMINATE_CLASS);
        this.setScale_(this.adapter_.getPrimaryBar(), 1);
        this.setScale_(this.adapter_.getBuffer(), 1);
      }
    }
  }, {
    key: "setProgress",
    value: function setProgress(value) {
      this.progress_ = value;

      if (this.determinate_) {
        this.setScale_(this.adapter_.getPrimaryBar(), value);
      }
    }
  }, {
    key: "setBuffer",
    value: function setBuffer(value) {
      if (this.determinate_) {
        this.setScale_(this.adapter_.getBuffer(), value);
      }
    }
  }, {
    key: "setReverse",
    value: function setReverse(isReversed) {
      this.reverse_ = isReversed;

      if (this.reverse_) {
        this.adapter_.addClass(cssClasses.REVERSED_CLASS);
      } else {
        this.adapter_.removeClass(cssClasses.REVERSED_CLASS);
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.adapter_.removeClass(cssClasses.CLOSED_CLASS);
    }
  }, {
    key: "close",
    value: function close() {
      this.adapter_.addClass(cssClasses.CLOSED_CLASS);
    }
  }, {
    key: "setScale_",
    value: function setScale_(el, scaleValue) {
      var _this = this;

      var value = 'scaleX(' + scaleValue + ')';
      transformStyleProperties.forEach(function (transformStyleProperty) {
        _this.adapter_.setStyle(el, transformStyleProperty, value);
      });
    }
  }]);

  return MDCLinearProgressFoundation;
}(MDCFoundation);

//
var ProgressPropType = {
  type: [Number, String],
  validator: function validator(value) {
    return Number(value) >= 0 && Number(value) <= 1;
  }
};
var script = {
  name: 'mdc-linear-progress',
  props: {
    open: {
      type: Boolean,
      default: true
    },
    indeterminate: Boolean,
    reverse: Boolean,
    accent: Boolean,
    progress: ProgressPropType,
    buffer: ProgressPropType
  },
  data: function data() {
    return {
      classes: {
        'mdc-linear-progress--accent': this.accent
      },
      styles: {}
    };
  },
  watch: {
    open: function open() {
      if (this.open) {
        this.foundation.open();
      } else {
        this.foundation.close();
      }
    },
    progress: function progress() {
      this.foundation.setProgress(Number(this.progress));
    },
    buffer: function buffer() {
      this.foundation.setBuffer(Number(this.buffer));
    },
    indeterminate: function indeterminate() {
      this.foundation.setDeterminate(!this.indeterminate);
    },
    reverse: function reverse() {
      this.foundation.setReverse(this.reverse);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.foundation = new MDCLinearProgressFoundation({
      addClass: function addClass(className) {
        _this.$set(_this.classes, className, true);
      },
      getPrimaryBar: function getPrimaryBar()
      /* el: Element */
      {
        return _this.$refs.primary;
      },
      getBuffer: function getBuffer()
      /* el: Element */
      {
        return _this.$refs.buffer;
      },
      hasClass: function hasClass(className) {
        _this.$el.classList.contains(className);
      },
      removeClass: function removeClass(className) {
        _this.$delete(_this.classes, className);
      },
      setStyle: function setStyle(el, styleProperty, value) {
        el.style[styleProperty] = value;
      }
    });
    this.foundation.init();
    this.foundation.setReverse(this.reverse);
    this.foundation.setProgress(Number(this.progress));
    this.foundation.setBuffer(Number(this.buffer));
    this.foundation.setDeterminate(!this.indeterminate);

    if (this.open) {
      this.foundation.open();
    } else {
      this.foundation.close();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.foundation.destroy();
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
    "div",
    {
      staticClass: "mdc-linear-progress",
      class: _vm.classes,
      style: _vm.styles,
      attrs: { role: "progressbar" }
    },
    [
      _c("div", { staticClass: "mdc-linear-progress__buffering-dots" }),
      _vm._v(" "),
      _c("div", { ref: "buffer", staticClass: "mdc-linear-progress__buffer" }),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "primary",
          staticClass:
            "mdc-linear-progress__bar mdc-linear-progress__primary-bar"
        },
        [_c("span", { staticClass: "mdc-linear-progress__bar-inner" })]
      ),
      _vm._v(" "),
      _vm._m(0)
    ]
  )
};
var __vue_staticRenderFns__ = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass:
          "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"
      },
      [_c("span", { staticClass: "mdc-linear-progress__bar-inner" })]
    )
  }
];
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
    component.__file = "/ddata/extra/vma/components/linear-progress/mdc-linear-progress.vue";

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
  

  
  var mdcLinearProgress = __vue_normalize__(
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
  mdcLinearProgress: mdcLinearProgress
});

export default index;
export { mdcLinearProgress };
//# sourceMappingURL=index.js.map
