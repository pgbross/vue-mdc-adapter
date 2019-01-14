/**
* @module vue-mdc-adaptertypography 0.19.0-beta
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

var typos = ['headline1', 'headline2', 'headline3', 'headline4', 'headline5', 'headline6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'];
var mdcTypoMixin = function mdcTypoMixin(name) {
  return {
    render: function render(createElement) {
      var _class;

      return createElement(this.tag, {
        class: (_class = {
          'mdc-typo': true
        }, _defineProperty(_class, name, true), _defineProperty(_class, "mdc-typography--".concat(this.typo), true), _class),
        attrs: this.$attrs,
        on: this.$listeners
      }, this.$slots.default);
    }
  };
};
function mdcTypoPropMixin(defaultTag, defaultTypo, validTypos) {
  return {
    props: {
      tag: {
        type: String,
        default: defaultTag
      },
      typo: {
        type: String,
        default: defaultTypo,
        validator: function validator(value) {
          return validTypos.indexOf(value) !== -1;
        }
      }
    }
  };
}
var mdcTextSection = {
  name: 'mdc-text-section',
  props: {
    tag: {
      type: String,
      default: 'section'
    }
  },
  render: function render(createElement) {
    return createElement(this.tag, {
      class: {
        'mdc-typography': true,
        'mdc-text-section': true
      },
      attrs: this.$attrs,
      on: this.$listeners
    }, this.$slots.default);
  }
};
var mdcText = {
  name: 'mdc-text',
  mixins: [mdcTypoMixin('mdc-text'), mdcTypoPropMixin('p', 'body1', typos)]
};
var mdcDisplay = {
  name: 'mdc-display',
  mixins: [mdcTypoMixin('mdc-display'), mdcTypoPropMixin('h1', 'headline4', ['headline4', 'headline3', 'headline2', 'headline1'])]
};
var mdcHeadline = {
  name: 'mdc-headline',
  mixins: [mdcTypoMixin('mdc-headline'), mdcTypoPropMixin('h2', 'headline5', ['headline5'])]
};
var mdcTitle = {
  name: 'mdc-title',
  mixins: [mdcTypoMixin('mdc-title'), mdcTypoPropMixin('h3', 'headline6', ['headline6'])]
};
var mdcSubHeading = {
  name: 'mdc-subheading',
  mixins: [mdcTypoMixin('mdc-subheading'), mdcTypoPropMixin('h4', 'subtitle2', ['subtitle1', 'subtitle2'])]
};
var mdcBody = {
  name: 'mdc-body',
  mixins: [mdcTypoMixin('mdc-body'), mdcTypoPropMixin('p', 'body1', ['body1', 'body2'])]
};
var mdcCaption = {
  name: 'mdc-caption',
  mixins: [mdcTypoMixin('mdc-caption'), mdcTypoPropMixin('span', 'caption', ['caption'])]
};

var index = BasePlugin({
  mdcTextSection: mdcTextSection,
  mdcText: mdcText,
  mdcBody: mdcBody,
  mdcCaption: mdcCaption,
  mdcDisplay: mdcDisplay,
  mdcHeadline: mdcHeadline,
  mdcSubHeading: mdcSubHeading,
  mdcTitle: mdcTitle
});

export default index;
export { mdcTextSection, mdcText, mdcBody, mdcCaption, mdcDisplay, mdcHeadline, mdcSubHeading, mdcTitle };
//# sourceMappingURL=index.js.map
