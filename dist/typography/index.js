/**
* @module vue-mdc-adaptertypography 0.19.4-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

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

/* global CustomEvent */

var scope = Math.floor(Math.random() * Math.floor(0x10000000)).toString() + '-';

function mdcTypoMixin(defaultTag, defaultClassModifier) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "mdc-".concat(defaultTag);
  return {
    props: {
      tag: {
        type: String,
        default: defaultTag
      },
      classModifier: {
        type: String,
        default: defaultClassModifier
      }
    },
    render: function render(createElement) {
      var _class;

      return createElement(this.tag, {
        class: (_class = {}, _defineProperty(_class, name, true), _defineProperty(_class, 'mdc-typography', true), _defineProperty(_class, "mdc-typography--".concat(this.classModifier), true), _class),
        attrs: this.$attrs,
        on: this.$listeners
      }, this.$slots.default);
    }
  };
}

var mdcHeadline1 = {
  name: 'mdc-headline1',
  mixins: [mdcTypoMixin('h1', 'headline1')]
};
var mdcHeadline2 = {
  name: 'mdc-headline2',
  mixins: [mdcTypoMixin('h2', 'headline2')]
};
var mdcHeadline3 = {
  name: 'mdc-headline3',
  mixins: [mdcTypoMixin('h3', 'headline3')]
};
var mdcHeadline4 = {
  name: 'mdc-headline4',
  mixins: [mdcTypoMixin('h4', 'headline4')]
};
var mdcHeadline5 = {
  name: 'mdc-headline5',
  mixins: [mdcTypoMixin('h5', 'headline5')]
};
var mdcHeadline6 = {
  name: 'mdc-headline6',
  mixins: [mdcTypoMixin('h6', 'headline6')]
};
var mdcSubtitle1 = {
  name: 'mdc-subtitle1',
  mixins: [mdcTypoMixin('h6', 'subtitle1')]
};
var mdcSubtitle2 = {
  name: 'mdc-subtitle2',
  mixins: [mdcTypoMixin('h6', 'subtitle2')]
};
var mdcBody1 = {
  name: 'mdc-body1',
  mixins: [mdcTypoMixin('p', 'body1')]
};
var mdcBody2 = {
  name: 'mdc-body2',
  mixins: [mdcTypoMixin('p', 'body2')]
};
var mdcButton1 = {
  name: 'mdc-button1',
  mixins: [mdcTypoMixin('span', 'button', 'mdc-button1')]
};
var mdcCaption = {
  name: 'mdc-caption',
  mixins: [mdcTypoMixin('span', 'caption')]
};
var mdcOverline = {
  name: 'mdc-overline',
  mixins: [mdcTypoMixin('span', 'overline')]
};

var index = BasePlugin({
  mdcHeadline1: mdcHeadline1,
  mdcHeadline2: mdcHeadline2,
  mdcHeadline3: mdcHeadline3,
  mdcHeadline4: mdcHeadline4,
  mdcHeadline5: mdcHeadline5,
  mdcHeadline6: mdcHeadline6,
  mdcOverline: mdcOverline,
  mdcSubtitle1: mdcSubtitle1,
  mdcSubtitle2: mdcSubtitle2,
  mdcBody1: mdcBody1,
  mdcBody2: mdcBody2,
  mdcButton1: mdcButton1,
  mdcCaption: mdcCaption
});

export default index;
export { mdcHeadline1, mdcHeadline2, mdcHeadline3, mdcHeadline4, mdcHeadline5, mdcHeadline6, mdcOverline, mdcSubtitle1, mdcSubtitle2, mdcBody1, mdcBody2, mdcButton1, mdcCaption };
//# sourceMappingURL=index.js.map
