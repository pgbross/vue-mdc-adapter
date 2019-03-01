/**
* @module vue-mdc-adapter 0.19.4-beta
* @exports default
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {"@material/tabs":"^1.0.0-0","material-components-web":"^1.0.0-0"}
* @requires {"vue":"^2.5.6"}
* @see https://github.com/stasson/vue-mdc-adapter
*/

import VueMDCButton from './button';
import VueMDCCard from './card';
import VueMDCCheckbox from './checkbox';
import VueMDCChips from './chips';
import VueMDCDialog from './dialog';
import VueMDCDrawer from './drawer';
import VueMDCElevation from './elevation';
import VueMDCFab from './fab';
import VueMDCFloatingLabel from './floating-label';
import VueMDCGridList from './grid-list';
import VueMDCIcon from './icon';
import VueMDCIconButton from './icon-button';
import VueMDCLayoutApp from './layout-app';
import VueMDCLayoutGrid from './layout-grid';
import VueMDCLinearProgress from './linear-progress';
import VueMDCLineRipple from './line-ripple';
import VueMDCList from './list';
import VueMDCMaterialIcon from './material-icon';
import VueMDCMenu from './menu';
import VueMDCNotchedOutline from './notched-outline';
import VueMDCRadio from './radio';
import VueMDCRipple from './ripple';
import VueMDCSelect from './select';
import VueMDCSlider from './slider';
import VueMDCSnackbar from './snackbar';
import VueMDCSwitch from './switch';
import VueMDCTabs from './tabs';
import VueMDCTextfield from './textfield';
import VueMDCTheme from './theme';
import VueMDCToolbar from './toolbar';
import VueMDCTopAppBar from './top-app-bar';
import VueMDCTypography from './typography';

//
var index = {
  version: '0.19.4-beta',
  install: function install(vm) {
    vm.use(VueMDCButton);
    vm.use(VueMDCCard);
    vm.use(VueMDCCheckbox);
    vm.use(VueMDCChips);
    vm.use(VueMDCElevation);
    vm.use(VueMDCDialog);
    vm.use(VueMDCDrawer);
    vm.use(VueMDCElevation);
    vm.use(VueMDCFab);
    vm.use(VueMDCFloatingLabel);
    vm.use(VueMDCGridList);
    vm.use(VueMDCIcon);
    vm.use(VueMDCIconButton); // vm.use(VueMDCIconToggle)

    vm.use(VueMDCLayoutApp);
    vm.use(VueMDCLayoutGrid);
    vm.use(VueMDCLinearProgress);
    vm.use(VueMDCList);
    vm.use(VueMDCLineRipple);
    vm.use(VueMDCMenu);
    vm.use(VueMDCMaterialIcon);
    vm.use(VueMDCNotchedOutline);
    vm.use(VueMDCRadio);
    vm.use(VueMDCRipple);
    vm.use(VueMDCSelect);
    vm.use(VueMDCSlider);
    vm.use(VueMDCSnackbar);
    vm.use(VueMDCSwitch);
    vm.use(VueMDCTabs);
    vm.use(VueMDCTextfield);
    vm.use(VueMDCTheme);
    vm.use(VueMDCToolbar);
    vm.use(VueMDCTopAppBar);
    vm.use(VueMDCTypography);
  }
};

export default index;

export { VueMDCButton }
export { VueMDCCard }
export { VueMDCCheckbox }
export { VueMDCChips }
export { VueMDCDialog }
export { VueMDCDrawer }
export { VueMDCElevation }
export { VueMDCFab }
export { VueMDCFloatingLabel }
export { VueMDCGridList }
export { VueMDCIconButton }
export { VueMDCIcon }
export { VueMDCLayoutApp }
export { VueMDCLayoutGrid }
export { VueMDCLinearProgress }
export { VueMDCLineRipple }
export { VueMDCList }
export { VueMDCMaterialIcon }
export { VueMDCMenu }
export { VueMDCNotchedOutline }
export { VueMDCRadio }
export { VueMDCRipple }
export { VueMDCSelect }
export { VueMDCSlider }
export { VueMDCSnackbar }
export { VueMDCSwitch }
export { VueMDCTabs }
export { VueMDCTextfield }
export { VueMDCTheme }
export { VueMDCToolbar }
export { VueMDCTopAppBar }
export { VueMDCTypography }

export * from './button'
export * from './card'
export * from './checkbox'
export * from './chips'
export * from './dialog'
export * from './drawer'
export * from './elevation'
export * from './fab'
export * from './floating-label'
export * from './grid-list'
export * from './icon-button'
export * from './icon'
export * from './layout-app'
export * from './layout-grid'
export * from './linear-progress'
export * from './line-ripple'
export * from './list'
export * from './material-icon'
export * from './menu'
export * from './notched-outline'
export * from './radio'
export * from './ripple'
export * from './select'
export * from './slider'
export * from './snackbar'
export * from './switch'
export * from './tabs'
export * from './textfield'
export * from './theme'
export * from './toolbar'
export * from './top-app-bar'
export * from './typography'
//# sourceMappingURL=index.js.map
