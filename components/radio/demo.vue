<template>
  <div class="mdc-demo mdc-demo--container">
    <mdc-radio v-model="picked" label="Radio1" name="radios" checked />
    <mdc-radio v-model="picked" label="Radio2" name="radios" /><mdc-button
      @click="picked = 'Radio2'"
      >set 2</mdc-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: 'Radio1'
    }
  }
}
</script>
