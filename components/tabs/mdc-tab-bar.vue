<template>
  <div :class="classes" class="mdc-tab-bar" v-on="listeners" role="tablist">
    <mdc-tab-scroller ref="scroller"> <slot></slot> </mdc-tab-scroller>
  </div>
</template>

<script>
import MDCTabBarFoundation from '@material/tab-bar/foundation'
import { emitCustomEvent } from '../base'

export default {
  name: 'mdc-tab-bar',
  data() {
    return {
      classes: {},
      indicatorStyles: {},
      tabList: []
    }
  },

  provide() {
    return { mdcTabBar: this }
  },
  mounted() {
    this.foundation = new MDCTabBarFoundation({
      scrollTo: scrollX => this.$refs.scroller.scrollTo(scrollX),
      incrementScroll: scrollXIncrement =>
        this.$refs.scroller.incrementScroll(scrollXIncrement),
      getScrollPosition: () => this.$refs.scroller.getScrollPosition(),
      getScrollContentWidth: () => this.$refs.scroller.getScrollContentWidth(),
      getOffsetWidth: () => this.$el.offsetWidth,
      isRTL: () =>
        window.getComputedStyle(this.$el).getPropertyValue('direction') ===
        'rtl',
      setActiveTab: index => {
        this.foundation.activateTab(index)
      },
      activateTabAtIndex: (index, clientRect) => {
        this.tabList[index].activate(clientRect)
      },
      deactivateTabAtIndex: index => {
        this.tabList[index].deactivate()
      },
      focusTabAtIndex: index => this.tabList[index].focus(),
      getTabIndicatorClientRectAtIndex: index => {
        return this.tabList[index].computeIndicatorClientRect()
      },
      getTabDimensionsAtIndex: index => {
        return this.tabList[index].computeDimensions()
      },
      getPreviousActiveTabIndex: () => {
        for (let i = 0; i < this.tabList.length; i++) {
          if (this.tabList[i].isActive()) {
            return i
          }
        }
        return -1
      },
      getFocusedTabIndex: () => {
        const tabElements = this.getTabElements_()
        const activeElement = document.activeElement
        return tabElements.indexOf(activeElement)
      },
      getIndexOfTab: tabToFind => this.tabList.indexOf(tabToFind),
      getTabListLength: () => this.tabList.length,
      notifyTabActivated: index => {
        emitCustomEvent(
          this.$el,
          MDCTabBarFoundation.strings.TAB_ACTIVATED_EVENT,
          { index },
          true
        )

        this.$emit('change', index)
      }
    })
    this.foundation.init()
  },
  beforeDestroy() {
    this.foundation.destroy()
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        'MDCTab:interacted': event => this.handleInteraction(event)
      }
    }
  },
  methods: {
    handleInteraction(evt) {
      this.foundation.handleTabInteraction(evt)
    },
    onSelect({ detail }) {
      const { tab } = detail
      const index = this.tabs.indexOf(tab)
      if (index < 0) {
        throw new Error('mdc-tab-bar internal error: index not found')
      }
      this.foundation.switchToTabAtIndex(index, true)
    }
  }
}
</script>
