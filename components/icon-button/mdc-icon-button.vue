<template>
  <button class="mdc-icon-button material-icons">{{ icon }}</button>
</template>

<script>
export default {
  name: 'mdc-icon-button',
  // model: {
  //   prop: 'open',
  //   event: 'change'
  // },
  props: {
    icon: String
    //   open: Boolean,
    //   stacked: Boolean,
    //   leading: Boolean,
    //   labelText: String,
    //   actionText: String,
    //   timeoutMs: [String, Number],
    //
    //   dismissAction: { type: [String, Boolean], default: true }
  },
  data() {
    return {}
  }
}
</script>
