<template>
  <axhl-mount class="w-full h-full flex flex-col">
    <Topbar />
    <Nuxt />
  </axhl-mount>
</template>

<script>
export default {
  name: 'LayOut',
  mounted () {
    window.customElements.define('axhl-mount', class AppDrawer extends HTMLElement {})
    window.customElements.define('axhl-content', class AppContent extends HTMLElement {})
  }
}
</script>
