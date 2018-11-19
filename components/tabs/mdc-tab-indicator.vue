<template>
  <span class="mdc-tab-indicator" :class="classes">
    <span
      ref="tabindicatorcontent"
      class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
    ></span>
  </span>
</template>

<script>
import MDCSlidingTabIndicatorFoundation from '@material/tab-indicator/sliding-foundation'

export default {
  name: 'mdc-tab-indicator',
  data() {
    return { classes: {} }
  },

  mounted() {
    this.foundation = new MDCSlidingTabIndicatorFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      computeContentClientRect: () =>
        this.$refs.tabindicatorcontent.getBoundingClientRect(),
      setContentStyleProperty: (prop, value) =>
        this.$refs.tabindicatorcontent.style.setProperty(prop, value)
    })

    this.foundation.init()
  },
  beforeDestroy() {
    this.foundation.destroy()
  },
  methods: {
    activate(previousIndicatorClientRect) {
      this.foundation.activate(previousIndicatorClientRect)
    },
    deactivate() {
      this.foundation.deactivate()
    },
    computeContentClientRect() {
      return this.foundation.computeContentClientRect()
    }
  }
}
</script>
