/**
* @module vue-mdc-adaptertypography 0.19.4-beta
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

  var plugin = BasePlugin({
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

  autoInit(plugin);

  return plugin;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vY29tcG9uZW50cy9iYXNlL2F1dG8taW5pdC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9iYXNlLXBsdWdpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9jdXN0b20tZXZlbnQuanMiLCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvdW5pcXVlaWQtbWl4aW4uanMiLCIuLi8uLi9jb21wb25lbnRzL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS1taXhpbi5qcyIsIi4uLy4uL2NvbXBvbmVudHMvdHlwb2dyYXBoeS9tZGMtdHlwb2dyYXBoeS5qcyIsIi4uLy4uL2NvbXBvbmVudHMvdHlwb2dyYXBoeS9pbmRleC5qcyIsIi4uLy4uL2NvbXBvbmVudHMvdHlwb2dyYXBoeS9lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXV0b0luaXQocGx1Z2luKSB7XG4gIC8vIEF1dG8taW5zdGFsbFxuICBsZXQgX1Z1ZSA9IG51bGxcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgX1Z1ZSA9IHdpbmRvdy5WdWVcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8qZ2xvYmFsIGdsb2JhbCovXG4gICAgX1Z1ZSA9IGdsb2JhbC5WdWVcbiAgfVxuICBpZiAoX1Z1ZSkge1xuICAgIF9WdWUudXNlKHBsdWdpbilcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIEJhc2VQbHVnaW4oY29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICdfX1ZFUlNJT05fXycsXG4gICAgaW5zdGFsbDogdm0gPT4ge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNba2V5XVxuICAgICAgICB2bS5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHNcbiAgfVxufVxuIiwiLyogZ2xvYmFsIEN1c3RvbUV2ZW50ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Q3VzdG9tRXZlbnQoZWwsIGV2dFR5cGUsIGV2dERhdGEsIHNob3VsZEJ1YmJsZSA9IGZhbHNlKSB7XG4gIGxldCBldnRcbiAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldnRUeXBlLCB7XG4gICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICBidWJibGVzOiBzaG91bGRCdWJibGVcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKVxuICB9XG4gIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxufVxuIiwiY29uc3Qgc2NvcGUgPVxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDApKS50b1N0cmluZygpICsgJy0nXG5cbmV4cG9ydCBjb25zdCBWTUFVbmlxdWVJZE1peGluID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy52bWFfdWlkXyA9IHNjb3BlICsgdGhpcy5fdWlkXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBtZGNUeXBvTWl4aW4oXG4gIGRlZmF1bHRUYWcsXG4gIGRlZmF1bHRDbGFzc01vZGlmaWVyLFxuICBuYW1lID0gYG1kYy0ke2RlZmF1bHRUYWd9YFxuKSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRhZzoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6IGRlZmF1bHRUYWdcbiAgICAgIH0sXG4gICAgICBjbGFzc01vZGlmaWVyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogZGVmYXVsdENsYXNzTW9kaWZpZXJcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlcihjcmVhdGVFbGVtZW50KSB7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgICAgdGhpcy50YWcsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgW25hbWVdOiB0cnVlLFxuICAgICAgICAgICAgJ21kYy10eXBvZ3JhcGh5JzogdHJ1ZSxcbiAgICAgICAgICAgIFtgbWRjLXR5cG9ncmFwaHktLSR7dGhpcy5jbGFzc01vZGlmaWVyfWBdOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczogdGhpcy4kYXR0cnMsXG4gICAgICAgICAgb246IHRoaXMuJGxpc3RlbmVyc1xuICAgICAgICB9LFxuICAgICAgICB0aGlzLiRzbG90cy5kZWZhdWx0XG4gICAgICApXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBtZGNUeXBvTWl4aW4gfSBmcm9tICcuL3R5cG9ncmFwaHktbWl4aW4uanMnXG5cbmV4cG9ydCBjb25zdCBtZGNIZWFkbGluZTEgPSB7XG4gIG5hbWU6ICdtZGMtaGVhZGxpbmUxJyxcbiAgbWl4aW5zOiBbbWRjVHlwb01peGluKCdoMScsICdoZWFkbGluZTEnKV1cbn1cblxuZXhwb3J0IGNvbnN0IG1kY0hlYWRsaW5lMiA9IHtcbiAgbmFtZTogJ21kYy1oZWFkbGluZTInLFxuICBtaXhpbnM6IFttZGNUeXBvTWl4aW4oJ2gyJywgJ2hlYWRsaW5lMicpXVxufVxuXG5leHBvcnQgY29uc3QgbWRjSGVhZGxpbmUzID0ge1xuICBuYW1lOiAnbWRjLWhlYWRsaW5lMycsXG4gIG1peGluczogW21kY1R5cG9NaXhpbignaDMnLCAnaGVhZGxpbmUzJyldXG59XG5cbmV4cG9ydCBjb25zdCBtZGNIZWFkbGluZTQgPSB7XG4gIG5hbWU6ICdtZGMtaGVhZGxpbmU0JyxcbiAgbWl4aW5zOiBbbWRjVHlwb01peGluKCdoNCcsICdoZWFkbGluZTQnKV1cbn1cblxuZXhwb3J0IGNvbnN0IG1kY0hlYWRsaW5lNSA9IHtcbiAgbmFtZTogJ21kYy1oZWFkbGluZTUnLFxuICBtaXhpbnM6IFttZGNUeXBvTWl4aW4oJ2g1JywgJ2hlYWRsaW5lNScpXVxufVxuXG5leHBvcnQgY29uc3QgbWRjSGVhZGxpbmU2ID0ge1xuICBuYW1lOiAnbWRjLWhlYWRsaW5lNicsXG4gIG1peGluczogW21kY1R5cG9NaXhpbignaDYnLCAnaGVhZGxpbmU2JyldXG59XG5cbmV4cG9ydCBjb25zdCBtZGNTdWJ0aXRsZTEgPSB7XG4gIG5hbWU6ICdtZGMtc3VidGl0bGUxJyxcbiAgbWl4aW5zOiBbbWRjVHlwb01peGluKCdoNicsICdzdWJ0aXRsZTEnKV1cbn1cbmV4cG9ydCBjb25zdCBtZGNTdWJ0aXRsZTIgPSB7XG4gIG5hbWU6ICdtZGMtc3VidGl0bGUyJyxcbiAgbWl4aW5zOiBbbWRjVHlwb01peGluKCdoNicsICdzdWJ0aXRsZTInKV1cbn1cblxuZXhwb3J0IGNvbnN0IG1kY0JvZHkxID0ge1xuICBuYW1lOiAnbWRjLWJvZHkxJyxcbiAgbWl4aW5zOiBbbWRjVHlwb01peGluKCdwJywgJ2JvZHkxJyldXG59XG5cbmV4cG9ydCBjb25zdCBtZGNCb2R5MiA9IHtcbiAgbmFtZTogJ21kYy1ib2R5MicsXG4gIG1peGluczogW21kY1R5cG9NaXhpbigncCcsICdib2R5MicpXVxufVxuXG5leHBvcnQgY29uc3QgbWRjQnV0dG9uMSA9IHtcbiAgbmFtZTogJ21kYy1idXR0b24xJyxcbiAgbWl4aW5zOiBbbWRjVHlwb01peGluKCdzcGFuJywgJ2J1dHRvbicsICdtZGMtYnV0dG9uMScpXVxufVxuXG5leHBvcnQgY29uc3QgbWRjQ2FwdGlvbiA9IHtcbiAgbmFtZTogJ21kYy1jYXB0aW9uJyxcbiAgbWl4aW5zOiBbbWRjVHlwb01peGluKCdzcGFuJywgJ2NhcHRpb24nKV1cbn1cblxuZXhwb3J0IGNvbnN0IG1kY092ZXJsaW5lID0ge1xuICBuYW1lOiAnbWRjLW92ZXJsaW5lJyxcbiAgbWl4aW5zOiBbbWRjVHlwb01peGluKCdzcGFuJywgJ292ZXJsaW5lJyldXG59XG4iLCJpbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCB7XG4gIG1kY0hlYWRsaW5lMSxcbiAgbWRjSGVhZGxpbmUyLFxuICBtZGNIZWFkbGluZTMsXG4gIG1kY0hlYWRsaW5lNCxcbiAgbWRjSGVhZGxpbmU1LFxuICBtZGNIZWFkbGluZTYsXG4gIG1kY092ZXJsaW5lLFxuICBtZGNTdWJ0aXRsZTEsXG4gIG1kY1N1YnRpdGxlMixcbiAgbWRjQm9keTEsXG4gIG1kY0JvZHkyLFxuICBtZGNCdXR0b24xLFxuICBtZGNDYXB0aW9uXG59IGZyb20gJy4vbWRjLXR5cG9ncmFwaHkuanMnXG5cbmV4cG9ydCB7XG4gIG1kY0hlYWRsaW5lMSxcbiAgbWRjSGVhZGxpbmUyLFxuICBtZGNIZWFkbGluZTMsXG4gIG1kY0hlYWRsaW5lNCxcbiAgbWRjSGVhZGxpbmU1LFxuICBtZGNIZWFkbGluZTYsXG4gIG1kY092ZXJsaW5lLFxuICBtZGNTdWJ0aXRsZTEsXG4gIG1kY1N1YnRpdGxlMixcbiAgbWRjQm9keTEsXG4gIG1kY0JvZHkyLFxuICBtZGNCdXR0b24xLFxuICBtZGNDYXB0aW9uXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VQbHVnaW4oe1xuICBtZGNIZWFkbGluZTEsXG4gIG1kY0hlYWRsaW5lMixcbiAgbWRjSGVhZGxpbmUzLFxuICBtZGNIZWFkbGluZTQsXG4gIG1kY0hlYWRsaW5lNSxcbiAgbWRjSGVhZGxpbmU2LFxuICBtZGNPdmVybGluZSxcbiAgbWRjU3VidGl0bGUxLFxuICBtZGNTdWJ0aXRsZTIsXG4gIG1kY0JvZHkxLFxuICBtZGNCb2R5MixcbiAgbWRjQnV0dG9uMSxcbiAgbWRjQ2FwdGlvblxufSlcbiIsImltcG9ydCAnLi9zdHlsZXMuc2NzcydcbmltcG9ydCB7IGF1dG9Jbml0IH0gZnJvbSAnLi4vYmFzZSdcbmltcG9ydCBwbHVnaW4gZnJvbSAnLi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG5hdXRvSW5pdChwbHVnaW4pXG4iXSwibmFtZXMiOlsiYXV0b0luaXQiLCJwbHVnaW4iLCJfVnVlIiwid2luZG93IiwiVnVlIiwiZ2xvYmFsIiwidXNlIiwiQmFzZVBsdWdpbiIsImNvbXBvbmVudHMiLCJ2ZXJzaW9uIiwiaW5zdGFsbCIsInZtIiwia2V5IiwiY29tcG9uZW50IiwibmFtZSIsInNjb3BlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJtZGNUeXBvTWl4aW4iLCJkZWZhdWx0VGFnIiwiZGVmYXVsdENsYXNzTW9kaWZpZXIiLCJwcm9wcyIsInRhZyIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwiY2xhc3NNb2RpZmllciIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzcyIsImF0dHJzIiwiJGF0dHJzIiwib24iLCIkbGlzdGVuZXJzIiwiJHNsb3RzIiwibWRjSGVhZGxpbmUxIiwibWl4aW5zIiwibWRjSGVhZGxpbmUyIiwibWRjSGVhZGxpbmUzIiwibWRjSGVhZGxpbmU0IiwibWRjSGVhZGxpbmU1IiwibWRjSGVhZGxpbmU2IiwibWRjU3VidGl0bGUxIiwibWRjU3VidGl0bGUyIiwibWRjQm9keTEiLCJtZGNCb2R5MiIsIm1kY0J1dHRvbjEiLCJtZGNDYXB0aW9uIiwibWRjT3ZlcmxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBTyxTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtFQUMvQjtFQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYOztFQUNBLE1BQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztFQUNqQ0QsSUFBQUEsSUFBSSxHQUFHQyxNQUFNLENBQUNDLEdBQWQ7RUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0VBQ3hDO0VBQ0FILElBQUFBLElBQUksR0FBR0csTUFBTSxDQUFDRCxHQUFkO0VBQ0Q7O0VBQ0QsTUFBSUYsSUFBSixFQUFVO0VBQ1JBLElBQUFBLElBQUksQ0FBQ0ksR0FBTCxDQUFTTCxNQUFUO0VBQ0Q7RUFDRjs7RUNaTSxTQUFTTSxVQUFULENBQW9CQyxVQUFwQixFQUFnQztFQUNyQyxTQUFPO0VBQ0xDLElBQUFBLE9BQU8sRUFBRSxhQURKO0VBRUxDLElBQUFBLE9BQU8sRUFBRSxpQkFBQUMsRUFBRSxFQUFJO0VBQ2IsV0FBSyxJQUFJQyxHQUFULElBQWdCSixVQUFoQixFQUE0QjtFQUMxQixZQUFJSyxTQUFTLEdBQUdMLFVBQVUsQ0FBQ0ksR0FBRCxDQUExQjtFQUNBRCxRQUFBQSxFQUFFLENBQUNFLFNBQUgsQ0FBYUEsU0FBUyxDQUFDQyxJQUF2QixFQUE2QkQsU0FBN0I7RUFDRDtFQUNGLEtBUEk7RUFRTEwsSUFBQUEsVUFBVSxFQUFWQTtFQVJLLEdBQVA7RUFVRDs7Ozs7Ozs7Ozs7Ozs7Ozs7RUNYRDs7RUNBQSxJQUFNTyxLQUFLLEdBQ1RDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JGLElBQUksQ0FBQ0MsS0FBTCxDQUFXLFVBQVgsQ0FBM0IsRUFBbURFLFFBQW5ELEtBQWdFLEdBRGxFOztFQ0FPLFNBQVNDLFlBQVQsQ0FDTEMsVUFESyxFQUVMQyxvQkFGSyxFQUlMO0VBQUEsTUFEQVIsSUFDQSxxRkFEY08sVUFDZDtFQUNBLFNBQU87RUFDTEUsSUFBQUEsS0FBSyxFQUFFO0VBQ0xDLE1BQUFBLEdBQUcsRUFBRTtFQUNIQyxRQUFBQSxJQUFJLEVBQUVDLE1BREg7RUFFSEMsUUFBQUEsT0FBTyxFQUFFTjtFQUZOLE9BREE7RUFLTE8sTUFBQUEsYUFBYSxFQUFFO0VBQ2JILFFBQUFBLElBQUksRUFBRUMsTUFETztFQUViQyxRQUFBQSxPQUFPLEVBQUVMO0VBRkk7RUFMVixLQURGO0VBV0xPLElBQUFBLE1BWEssa0JBV0VDLGFBWEYsRUFXaUI7RUFBQTs7RUFDcEIsYUFBT0EsYUFBYSxDQUNsQixLQUFLTixHQURhLEVBRWxCO0VBQ0VPLFFBQUFBLEtBQUssd0NBQ0ZqQixJQURFLEVBQ0ssSUFETCwyQkFFSCxnQkFGRyxFQUVlLElBRmYscURBR2lCLEtBQUtjLGFBSHRCLEdBR3dDLElBSHhDLFVBRFA7RUFNRUksUUFBQUEsS0FBSyxFQUFFLEtBQUtDLE1BTmQ7RUFPRUMsUUFBQUEsRUFBRSxFQUFFLEtBQUtDO0VBUFgsT0FGa0IsRUFXbEIsS0FBS0MsTUFBTCxDQUFZVCxPQVhNLENBQXBCO0VBYUQ7RUF6QkksR0FBUDtFQTJCRDs7RUM5Qk0sSUFBTVUsWUFBWSxHQUFHO0VBQzFCdkIsRUFBQUEsSUFBSSxFQUFFLGVBRG9CO0VBRTFCd0IsRUFBQUEsTUFBTSxFQUFFLENBQUNsQixZQUFZLENBQUMsSUFBRCxFQUFPLFdBQVAsQ0FBYjtFQUZrQixDQUFyQjtBQUtQLEVBQU8sSUFBTW1CLFlBQVksR0FBRztFQUMxQnpCLEVBQUFBLElBQUksRUFBRSxlQURvQjtFQUUxQndCLEVBQUFBLE1BQU0sRUFBRSxDQUFDbEIsWUFBWSxDQUFDLElBQUQsRUFBTyxXQUFQLENBQWI7RUFGa0IsQ0FBckI7QUFLUCxFQUFPLElBQU1vQixZQUFZLEdBQUc7RUFDMUIxQixFQUFBQSxJQUFJLEVBQUUsZUFEb0I7RUFFMUJ3QixFQUFBQSxNQUFNLEVBQUUsQ0FBQ2xCLFlBQVksQ0FBQyxJQUFELEVBQU8sV0FBUCxDQUFiO0VBRmtCLENBQXJCO0FBS1AsRUFBTyxJQUFNcUIsWUFBWSxHQUFHO0VBQzFCM0IsRUFBQUEsSUFBSSxFQUFFLGVBRG9CO0VBRTFCd0IsRUFBQUEsTUFBTSxFQUFFLENBQUNsQixZQUFZLENBQUMsSUFBRCxFQUFPLFdBQVAsQ0FBYjtFQUZrQixDQUFyQjtBQUtQLEVBQU8sSUFBTXNCLFlBQVksR0FBRztFQUMxQjVCLEVBQUFBLElBQUksRUFBRSxlQURvQjtFQUUxQndCLEVBQUFBLE1BQU0sRUFBRSxDQUFDbEIsWUFBWSxDQUFDLElBQUQsRUFBTyxXQUFQLENBQWI7RUFGa0IsQ0FBckI7QUFLUCxFQUFPLElBQU11QixZQUFZLEdBQUc7RUFDMUI3QixFQUFBQSxJQUFJLEVBQUUsZUFEb0I7RUFFMUJ3QixFQUFBQSxNQUFNLEVBQUUsQ0FBQ2xCLFlBQVksQ0FBQyxJQUFELEVBQU8sV0FBUCxDQUFiO0VBRmtCLENBQXJCO0FBS1AsRUFBTyxJQUFNd0IsWUFBWSxHQUFHO0VBQzFCOUIsRUFBQUEsSUFBSSxFQUFFLGVBRG9CO0VBRTFCd0IsRUFBQUEsTUFBTSxFQUFFLENBQUNsQixZQUFZLENBQUMsSUFBRCxFQUFPLFdBQVAsQ0FBYjtFQUZrQixDQUFyQjtBQUlQLEVBQU8sSUFBTXlCLFlBQVksR0FBRztFQUMxQi9CLEVBQUFBLElBQUksRUFBRSxlQURvQjtFQUUxQndCLEVBQUFBLE1BQU0sRUFBRSxDQUFDbEIsWUFBWSxDQUFDLElBQUQsRUFBTyxXQUFQLENBQWI7RUFGa0IsQ0FBckI7QUFLUCxFQUFPLElBQU0wQixRQUFRLEdBQUc7RUFDdEJoQyxFQUFBQSxJQUFJLEVBQUUsV0FEZ0I7RUFFdEJ3QixFQUFBQSxNQUFNLEVBQUUsQ0FBQ2xCLFlBQVksQ0FBQyxHQUFELEVBQU0sT0FBTixDQUFiO0VBRmMsQ0FBakI7QUFLUCxFQUFPLElBQU0yQixRQUFRLEdBQUc7RUFDdEJqQyxFQUFBQSxJQUFJLEVBQUUsV0FEZ0I7RUFFdEJ3QixFQUFBQSxNQUFNLEVBQUUsQ0FBQ2xCLFlBQVksQ0FBQyxHQUFELEVBQU0sT0FBTixDQUFiO0VBRmMsQ0FBakI7QUFLUCxFQUFPLElBQU00QixVQUFVLEdBQUc7RUFDeEJsQyxFQUFBQSxJQUFJLEVBQUUsYUFEa0I7RUFFeEJ3QixFQUFBQSxNQUFNLEVBQUUsQ0FBQ2xCLFlBQVksQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixhQUFuQixDQUFiO0VBRmdCLENBQW5CO0FBS1AsRUFBTyxJQUFNNkIsVUFBVSxHQUFHO0VBQ3hCbkMsRUFBQUEsSUFBSSxFQUFFLGFBRGtCO0VBRXhCd0IsRUFBQUEsTUFBTSxFQUFFLENBQUNsQixZQUFZLENBQUMsTUFBRCxFQUFTLFNBQVQsQ0FBYjtFQUZnQixDQUFuQjtBQUtQLEVBQU8sSUFBTThCLFdBQVcsR0FBRztFQUN6QnBDLEVBQUFBLElBQUksRUFBRSxjQURtQjtFQUV6QndCLEVBQUFBLE1BQU0sRUFBRSxDQUFDbEIsWUFBWSxDQUFDLE1BQUQsRUFBUyxVQUFULENBQWI7RUFGaUIsQ0FBcEI7O0FDNUJQLGVBQWViLFVBQVUsQ0FBQztFQUN4QjhCLEVBQUFBLFlBQVksRUFBWkEsWUFEd0I7RUFFeEJFLEVBQUFBLFlBQVksRUFBWkEsWUFGd0I7RUFHeEJDLEVBQUFBLFlBQVksRUFBWkEsWUFId0I7RUFJeEJDLEVBQUFBLFlBQVksRUFBWkEsWUFKd0I7RUFLeEJDLEVBQUFBLFlBQVksRUFBWkEsWUFMd0I7RUFNeEJDLEVBQUFBLFlBQVksRUFBWkEsWUFOd0I7RUFPeEJPLEVBQUFBLFdBQVcsRUFBWEEsV0FQd0I7RUFReEJOLEVBQUFBLFlBQVksRUFBWkEsWUFSd0I7RUFTeEJDLEVBQUFBLFlBQVksRUFBWkEsWUFUd0I7RUFVeEJDLEVBQUFBLFFBQVEsRUFBUkEsUUFWd0I7RUFXeEJDLEVBQUFBLFFBQVEsRUFBUkEsUUFYd0I7RUFZeEJDLEVBQUFBLFVBQVUsRUFBVkEsVUFad0I7RUFheEJDLEVBQUFBLFVBQVUsRUFBVkE7RUFid0IsQ0FBRCxDQUF6Qjs7RUM1QkFqRCxRQUFRLENBQUNDLE1BQUQsQ0FBUjs7Ozs7Ozs7In0=
