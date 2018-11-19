<template>
  <custom-link
    :class="classes"
    :style="styles"
    :link="link"
    class="mdc-tab"
    @click="handleClick"
    role="tab"
    aria-selected="false"
    tabindex="-1"
  >
    <span ref="content" class="mdc-tab__content">
      <i
        v-if="!!hasIcon"
        ref="icon"
        :class="hasIcon.classes"
        tabindex="0"
        class="mdc-tab__icon"
        aria-hidden="true"
      >
        <slot name="icon">{{ hasIcon.content }}</slot>
      </i>

      <span v-if="hasText" class="mdc-tab__text-label"> <slot /> </span>
    </span>

    <mdc-tab-indicator ref="tabIndicator"></mdc-tab-indicator>
    <span class="mdc-tab__ripple"></span>
  </custom-link>
</template>

<script>
import MDCTabFoundation from '@material/tab/foundation'

import {
  CustomLinkMixin,
  DispatchEventMixin,
  emitCustomEvent,
  extractIconProp
} from '../base'
import { RippleBase } from '../ripple'

export default {
  name: 'mdc-tab',
  mixins: [CustomLinkMixin, DispatchEventMixin],
  props: {
    active: Boolean,
    icon: [String, Array, Object]
  },
  data() {
    return {
      classes: {},
      styles: {}
    }
  },

  inject: ['mdcTabBar'],
  computed: {
    hasIcon() {
      if (this.icon || this.$slots.icon) {
        return this.icon ? extractIconProp(this.icon) : {}
      }
      return false
    },
    hasText() {
      return !!this.$slots.default
    }
  },
  watch: {
    active(value) {
      if (value) {
        this.foundation.adapter_.notifySelected()
      }
    }
  },
  mounted() {
    this.foundation = new MDCTabFoundation({
      setAttr: (attr, value) => this.$el.setAttribute(attr, value),
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),
      hasClass: className => this.$el.classList.contains(className),
      activateIndicator: previousIndicatorClientRect => {
        this.$refs.tabIndicator.activate(previousIndicatorClientRect)
      },
      deactivateIndicator: () => {
        this.$refs.tabIndicator.deactivate()
      },
      notifyInteracted: () =>
        emitCustomEvent(
          this.$el,
          MDCTabFoundation.strings.INTERACTED_EVENT,
          { tab: this },
          true /* bubble */
        ),
      getOffsetLeft: () => this.$el.offsetLeft,
      getOffsetWidth: () => this.$el.offsetWidth,
      getContentOffsetLeft: () => this.$refs.content.offsetLeft,
      getContentOffsetWidth: () => this.$refs.content.offsetWidth,
      focus: () => this.$el.focus()
    })
    this.foundation.init()

    this.mdcTabBar.tabList.push(this)

    this.setActive(this.active)

    // const ripple = this.$el.querySelector('mdc-tab__ripple')
    // this.ripple = new RippleBase(ripple)
    // this.ripple.init()
  },
  beforeDestroy() {
    this.foundation.destroy()
    // this.ripple.destroy()
  },
  methods: {
    activate(computeIndicatorClientRect) {
      this.foundation.activate(computeIndicatorClientRect)
    },

    deactivate() {
      this.foundation.deactivate()
    },
    handleClick(evt) {
      this.foundation.handleClick(evt)
    },
    isActive() {
      return this.foundation.isActive()
    },
    setActive(isActive) {
      if (isActive) {
        this.$set(this.classes, 'mdc-tab--active', true),
          this.$refs.tabIndicator.activate()
      }
      //  isActive && this.$refs.tabIndicator.activate()
    },
    computeIndicatorClientRect() {
      return this.$refs.tabIndicator.computeContentClientRect()
    },

    computeDimensions() {
      return this.foundation.computeDimensions()
    },

    focus() {
      this.$el.focus()
    }
  }
}
</script>
