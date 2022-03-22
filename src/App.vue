<template>
  <div id="app">
      <component :is="layout">
        <router-view/>
      </component>
  </div>
</template>
<script>
import MainLayout from '@/layouts/MainLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'

export default {
  name: 'app',
  components: {
    MainLayout,EmptyLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
}
</script>
<style lang="scss">
  @import '@/assets/index.scss';
</style>
