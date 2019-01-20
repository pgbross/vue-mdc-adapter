<template>
  <div class="demo-home">
    <mdc-headline1 ref="title">{{ title }}</mdc-headline1>
    <about class="markdown" />
  </div>
</template>

<script>
export default {
  components: {
    about: () => import('../docs/about.md')
  },
  data() {
    return {
      title: 'Material Components for Vue.js'
    }
  }
}
</script>
