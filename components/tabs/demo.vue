<template>
  <div class="">
    <mdc-subheading>Simple</mdc-subheading>
    <section class="mdc-demo mdc-demo--container">
      <mdc-tab-bar @change="onSelected">
        <mdc-tab
          v-for="item in items"
          :key="item.label"
          :active="item.active"
          >{{ item.label }}</mdc-tab
        >
      </mdc-tab-bar>
    </section>
    <br />
    <div v-if="selectedItem" style="text-align: right">
      <mdc-caption>
        Selected:
        <span class="demo-tabs-selected">{{ selectedItem.label }}</span>
      </mdc-caption>
    </div>
    <mdc-subheading>With icons and text</mdc-subheading>
    <section class="mdc-demo mdc-demo--container">
      <mdc-tab-bar>
        <mdc-tab icon="phone">Recents</mdc-tab>
        <mdc-tab icon="favorite">Favorites</mdc-tab>
        <mdc-tab icon="personal_pin">Nearby</mdc-tab>
      </mdc-tab-bar>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    const items = [
      { label: 'item one', active: true },
      { label: 'item two', active: false },
      { label: 'item three', active: false }
    ]
    return {
      selectedItem: items[0],
      items
    }
  },
  methods: {
    onSelected(idx) {
      this.selectedItem = this.items[idx]
    }
  }
}
</script>

<style>
.demo-tabs-selected {
  font-style: italic;
}
</style>
