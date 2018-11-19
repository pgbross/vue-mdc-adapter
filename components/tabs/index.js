import { BasePlugin } from '../base'
import mdcTab from './mdc-tab.vue'
import mdcTabBar from './mdc-tab-bar.vue'
import mdcTabScroller from './mdc-tab-scroller.vue'
import mdcTabIndicator from './mdc-tab-indicator.vue'
export { mdcTab, mdcTabBar, mdcTabScroller, mdcTabIndicator }

export default BasePlugin({
  mdcTab,
  mdcTabBar,
  mdcTabScroller,
  mdcTabIndicator
})
