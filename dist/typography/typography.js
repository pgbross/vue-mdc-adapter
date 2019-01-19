/**
* @module vue-mdc-adaptertypography 0.19.1-beta
* @exports VueMDCTypography
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^0.43.0","material-components-web":"^0.43.0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.VueMDCTypography = factory());
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
        version: '0.19.1-beta',
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

    var plugin = BasePlugin({
      mdcTextSection: mdcTextSection,
      mdcText: mdcText,
      mdcBody: mdcBody,
      mdcCaption: mdcCaption,
      mdcDisplay: mdcDisplay,
      mdcHeadline: mdcHeadline,
      mdcSubHeading: mdcSubHeading,
      mdcTitle: mdcTitle
    });

    autoInit(plugin);

    return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9iYXNlL2F1dG8taW5pdC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9iYXNlLXBsdWdpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZXZlbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvdW5pcXVlaWQtbWl4aW4uanMiLCIuLi8uLi9jb21wb25lbnRzL3R5cG9ncmFwaHkvbWRjLXR5cG9ncmFwaHkuanMiLCIuLi8uLi9jb21wb25lbnRzL3R5cG9ncmFwaHkvaW5kZXguanMiLCIuLi8uLi9jb21wb25lbnRzL3R5cG9ncmFwaHkvZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGF1dG9Jbml0KHBsdWdpbikge1xuICAvLyBBdXRvLWluc3RhbGxcbiAgbGV0IF9WdWUgPSBudWxsXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIF9WdWUgPSB3aW5kb3cuVnVlXG4gIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvKmdsb2JhbCBnbG9iYWwqL1xuICAgIF9WdWUgPSBnbG9iYWwuVnVlXG4gIH1cbiAgaWYgKF9WdWUpIHtcbiAgICBfVnVlLnVzZShwbHVnaW4pXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBCYXNlUGx1Z2luKGNvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnX19WRVJTSU9OX18nLFxuICAgIGluc3RhbGw6IHZtID0+IHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2tleV1cbiAgICAgICAgdm0uY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQpXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBDdXN0b21FdmVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdEN1c3RvbUV2ZW50KGVsLCBldnRUeXBlLCBldnREYXRhLCBzaG91bGRCdWJibGUgPSBmYWxzZSkge1xuICBsZXQgZXZ0XG4gIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgZGV0YWlsOiBldnREYXRhLFxuICAgICAgYnViYmxlczogc2hvdWxkQnViYmxlXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZ0VHlwZSwgc2hvdWxkQnViYmxlLCBmYWxzZSwgZXZ0RGF0YSlcbiAgfVxuICBlbC5kaXNwYXRjaEV2ZW50KGV2dClcbn1cbiIsImNvbnN0IHNjb3BlID1cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigweDEwMDAwMDAwKSkudG9TdHJpbmcoKSArICctJ1xuXG5leHBvcnQgY29uc3QgVk1BVW5pcXVlSWRNaXhpbiA9IHtcbiAgYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMudm1hX3VpZF8gPSBzY29wZSArIHRoaXMuX3VpZFxuICB9XG59XG4iLCJjb25zdCB0eXBvcyA9IFtcbiAgJ2hlYWRsaW5lMScsXG4gICdoZWFkbGluZTInLFxuICAnaGVhZGxpbmUzJyxcbiAgJ2hlYWRsaW5lNCcsXG4gICdoZWFkbGluZTUnLFxuICAnaGVhZGxpbmU2JyxcbiAgJ3N1YnRpdGxlMScsXG4gICdzdWJ0aXRsZTInLFxuICAnYm9keTEnLFxuICAnYm9keTInLFxuICAnY2FwdGlvbicsXG4gICdidXR0b24nLFxuICAnb3ZlcmxpbmUnXG5dXG5cbmV4cG9ydCBjb25zdCBtZGNUeXBvTWl4aW4gPSBuYW1lID0+IHtcbiAgcmV0dXJuIHtcbiAgICByZW5kZXIoY3JlYXRlRWxlbWVudCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIHRoaXMudGFnLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICdtZGMtdHlwbyc6IHRydWUsXG4gICAgICAgICAgICBbbmFtZV06IHRydWUsXG4gICAgICAgICAgICBbYG1kYy10eXBvZ3JhcGh5LS0ke3RoaXMudHlwb31gXTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHRoaXMuJGF0dHJzLFxuICAgICAgICAgIG9uOiB0aGlzLiRsaXN0ZW5lcnNcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdFxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWRjVHlwb1Byb3BNaXhpbihkZWZhdWx0VGFnLCBkZWZhdWx0VHlwbywgdmFsaWRUeXBvcykge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB0YWc6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiBkZWZhdWx0VGFnXG4gICAgICB9LFxuICAgICAgdHlwbzoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6IGRlZmF1bHRUeXBvLFxuICAgICAgICB2YWxpZGF0b3I6IHZhbHVlID0+IHZhbGlkVHlwb3MuaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtZGNUZXh0U2VjdGlvbiA9IHtcbiAgbmFtZTogJ21kYy10ZXh0LXNlY3Rpb24nLFxuICBwcm9wczoge1xuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3NlY3Rpb24nXG4gICAgfVxuICB9LFxuICByZW5kZXIoY3JlYXRlRWxlbWVudCkge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFxuICAgICAgdGhpcy50YWcsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgJ21kYy10eXBvZ3JhcGh5JzogdHJ1ZSxcbiAgICAgICAgICAnbWRjLXRleHQtc2VjdGlvbic6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYXR0cnM6IHRoaXMuJGF0dHJzLFxuICAgICAgICBvbjogdGhpcy4kbGlzdGVuZXJzXG4gICAgICB9LFxuICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdFxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbWRjVGV4dCA9IHtcbiAgbmFtZTogJ21kYy10ZXh0JyxcbiAgbWl4aW5zOiBbbWRjVHlwb01peGluKCdtZGMtdGV4dCcpLCBtZGNUeXBvUHJvcE1peGluKCdwJywgJ2JvZHkxJywgdHlwb3MpXVxufVxuXG5leHBvcnQgY29uc3QgbWRjRGlzcGxheSA9IHtcbiAgbmFtZTogJ21kYy1kaXNwbGF5JyxcbiAgbWl4aW5zOiBbXG4gICAgbWRjVHlwb01peGluKCdtZGMtZGlzcGxheScpLFxuICAgIG1kY1R5cG9Qcm9wTWl4aW4oJ2gxJywgJ2hlYWRsaW5lNCcsIFtcbiAgICAgICdoZWFkbGluZTQnLFxuICAgICAgJ2hlYWRsaW5lMycsXG4gICAgICAnaGVhZGxpbmUyJyxcbiAgICAgICdoZWFkbGluZTEnXG4gICAgXSlcbiAgXVxufVxuXG5leHBvcnQgY29uc3QgbWRjSGVhZGxpbmUgPSB7XG4gIG5hbWU6ICdtZGMtaGVhZGxpbmUnLFxuICBtaXhpbnM6IFtcbiAgICBtZGNUeXBvTWl4aW4oJ21kYy1oZWFkbGluZScpLFxuICAgIG1kY1R5cG9Qcm9wTWl4aW4oJ2gyJywgJ2hlYWRsaW5lNScsIFsnaGVhZGxpbmU1J10pXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IG1kY1RpdGxlID0ge1xuICBuYW1lOiAnbWRjLXRpdGxlJyxcbiAgbWl4aW5zOiBbXG4gICAgbWRjVHlwb01peGluKCdtZGMtdGl0bGUnKSxcbiAgICBtZGNUeXBvUHJvcE1peGluKCdoMycsICdoZWFkbGluZTYnLCBbJ2hlYWRsaW5lNiddKVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBtZGNTdWJIZWFkaW5nID0ge1xuICBuYW1lOiAnbWRjLXN1YmhlYWRpbmcnLFxuICBtaXhpbnM6IFtcbiAgICBtZGNUeXBvTWl4aW4oJ21kYy1zdWJoZWFkaW5nJyksXG4gICAgbWRjVHlwb1Byb3BNaXhpbignaDQnLCAnc3VidGl0bGUyJywgWydzdWJ0aXRsZTEnLCAnc3VidGl0bGUyJ10pXG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IG1kY0JvZHkgPSB7XG4gIG5hbWU6ICdtZGMtYm9keScsXG4gIG1peGluczogW1xuICAgIG1kY1R5cG9NaXhpbignbWRjLWJvZHknKSxcbiAgICBtZGNUeXBvUHJvcE1peGluKCdwJywgJ2JvZHkxJywgWydib2R5MScsICdib2R5MiddKVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBtZGNDYXB0aW9uID0ge1xuICBuYW1lOiAnbWRjLWNhcHRpb24nLFxuICBtaXhpbnM6IFtcbiAgICBtZGNUeXBvTWl4aW4oJ21kYy1jYXB0aW9uJyksXG4gICAgbWRjVHlwb1Byb3BNaXhpbignc3BhbicsICdjYXB0aW9uJywgWydjYXB0aW9uJ10pXG4gIF1cbn1cbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHtcbiAgbWRjVGV4dFNlY3Rpb24sXG4gIG1kY1RleHQsXG4gIG1kY0JvZHksXG4gIG1kY0NhcHRpb24sXG4gIG1kY0Rpc3BsYXksXG4gIG1kY0hlYWRsaW5lLFxuICBtZGNTdWJIZWFkaW5nLFxuICBtZGNUaXRsZVxufSBmcm9tICcuL21kYy10eXBvZ3JhcGh5LmpzJ1xuXG5leHBvcnQge1xuICBtZGNUZXh0U2VjdGlvbixcbiAgbWRjVGV4dCxcbiAgbWRjQm9keSxcbiAgbWRjQ2FwdGlvbixcbiAgbWRjRGlzcGxheSxcbiAgbWRjSGVhZGxpbmUsXG4gIG1kY1N1YkhlYWRpbmcsXG4gIG1kY1RpdGxlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VQbHVnaW4oe1xuICBtZGNUZXh0U2VjdGlvbixcbiAgbWRjVGV4dCxcbiAgbWRjQm9keSxcbiAgbWRjQ2FwdGlvbixcbiAgbWRjRGlzcGxheSxcbiAgbWRjSGVhZGxpbmUsXG4gIG1kY1N1YkhlYWRpbmcsXG4gIG1kY1RpdGxlXG59KVxuIiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJ1xuaW1wb3J0IHsgYXV0b0luaXQgfSBmcm9tICcuLi9iYXNlJ1xuaW1wb3J0IHBsdWdpbiBmcm9tICcuL2luZGV4LmpzJ1xuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXG5cbmF1dG9Jbml0KHBsdWdpbilcbiJdLCJuYW1lcyI6WyJhdXRvSW5pdCIsInBsdWdpbiIsIl9WdWUiLCJ3aW5kb3ciLCJWdWUiLCJnbG9iYWwiLCJ1c2UiLCJCYXNlUGx1Z2luIiwiY29tcG9uZW50cyIsInZlcnNpb24iLCJpbnN0YWxsIiwidm0iLCJrZXkiLCJjb21wb25lbnQiLCJuYW1lIiwic2NvcGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInR5cG9zIiwibWRjVHlwb01peGluIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsInRhZyIsImNsYXNzIiwidHlwbyIsImF0dHJzIiwiJGF0dHJzIiwib24iLCIkbGlzdGVuZXJzIiwiJHNsb3RzIiwiZGVmYXVsdCIsIm1kY1R5cG9Qcm9wTWl4aW4iLCJkZWZhdWx0VGFnIiwiZGVmYXVsdFR5cG8iLCJ2YWxpZFR5cG9zIiwicHJvcHMiLCJ0eXBlIiwiU3RyaW5nIiwidmFsaWRhdG9yIiwidmFsdWUiLCJpbmRleE9mIiwibWRjVGV4dFNlY3Rpb24iLCJtZGNUZXh0IiwibWl4aW5zIiwibWRjRGlzcGxheSIsIm1kY0hlYWRsaW5lIiwibWRjVGl0bGUiLCJtZGNTdWJIZWFkaW5nIiwibWRjQm9keSIsIm1kY0NhcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtJQUMvQjtJQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztJQUNBLE1BQUksT0FB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
