<template>
  <mdc-drawer modal
    ref="drawer"
    class="primary-drawer"
    toggle-on="toggle-drawer">
    <div class="mdc-drawer__header" slot="header">
      <!-- <h3 class="mdc-drawer__title">Mail</h3> -->
    </div>
    <mdc-drawer-list dense>
      <mdc-drawer-item to="/">Home</mdc-drawer-item>
      <mdc-drawer-item to="/docs/getting-started">Getting Started</mdc-drawer-item>
      <mdc-drawer-divider />
      <mdc-drawer-item
        v-for="link in links"
        :to="link.to"
        :key="link.id">
        {{ link.name }}
      </mdc-drawer-item>
    </mdc-drawer-list>
  </mdc-drawer>
</template>

<script>
import links from './links.js'

export default {
  data() {
    return {
      links
    }
  }
}
</script>
