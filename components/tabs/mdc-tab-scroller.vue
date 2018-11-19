<template>
  <div class="mdc-tab-scroller">
    <div
      ref="area"
      class="mdc-tab-scroller__scroll-area"
      @mousedown="handleInteraction"
      @wheel="handleInteraction"
      @pointerdown="handleInteraction"
      @touchstart="handleInteraction"
      @keydown="handleInteraction"
    >
      <div
        ref="content"
        class="mdc-tab-scroller__scroll-content"
        @transitionend="handleTransitionEnd"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import MDCTabScrollerFoundation from '@material/tab-scroller/foundation'
import * as util from '@material/tab-scroller/util'

export default {
  name: 'mdc-tab-scroller',
  data() {
    return {}
  },

  mounted() {
    this.foundation = new MDCTabScrollerFoundation({
      eventTargetMatchesSelector: (evtTarget, selector) => {
        const MATCHES = util.getMatchesProperty(HTMLElement.prototype)
        return evtTarget[MATCHES](selector)
      },
      addClass: className => this.$el.classList.add(className),
      removeClass: className => this.$el.classList.remove(className),
      addScrollAreaClass: className => this.$refs.area.classList.add(className),
      setScrollAreaStyleProperty: (prop, value) =>
        this.$refs.area.style.setProperty(prop, value),
      setScrollContentStyleProperty: (prop, value) =>
        this.$refs.content.style.setProperty(prop, value),
      getScrollContentStyleValue: propName =>
        window.getComputedStyle(this.$refs.content).getPropertyValue(propName),
      setScrollAreaScrollLeft: scrollX =>
        (this.$refs.area.scrollLeft = scrollX),
      getScrollAreaScrollLeft: () => this.$refs.area.scrollLeft,
      getScrollContentOffsetWidth: () => this.$refs.content.offsetWidth,
      getScrollAreaOffsetWidth: () => this.$refs.area.offsetWidth,
      computeScrollAreaClientRect: () =>
        this.$refs.area.getBoundingClientRect(),
      computeScrollContentClientRect: () =>
        this.$refs.content.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () =>
        util.computeHorizontalScrollbarHeight(document)
    })
    this.foundation.init()
  },
  beforeDestroy() {
    this.foundation.destroy()
  },
  methods: {
    handleTransitionEnd(evt) {
      this.foundation.handleTransitionEnd(evt)
    },
    handleInteraction(evt) {
      this.foundation.handleInteraction(evt)
    },
    getScrollPosition() {
      return this.foundation.getScrollPosition()
    },
    getScrollContentWidth() {
      return this.$refs.content.offsetWidth
    },
    incrementScroll(scrollXIncrement) {
      this.foundation.incrementScroll(scrollXIncrement)
    },
    scrollTo(scrollX) {
      this.foundation.scrollTo(scrollX)
    }
  }
}
</script>
