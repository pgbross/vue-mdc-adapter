<template>
  <div class="mdc-demo mdc-demo--container">
    <mdc-icon-button :isOn="isOn" @change="onChange"
      ><i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on"
        >favorite</i
      >
      <i class="material-icons mdc-icon-button__icon"
        >favorite_border</i
      ></mdc-icon-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return { isOn: false }
  },
  methods: {
    onChange(value) {
      this.isOn = value
    }
  }
}
</script>
