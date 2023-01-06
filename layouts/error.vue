<template>
  <axhl-mount class="w-full h-full flex flex-col overflow-x-hidden">
    <Topbar />
    <axhl-content class="mx-auto lg:px-24 w-screen px-12 pt-24">
      <h1>404</h1>
      <p>
        This page does not exist. Return to <nuxt-link to="/">
          Home
        </nuxt-link>
      </p>
    </axhl-content>
  </axhl-mount>
</template>

<script>
export default {
  name: 'ErrorView',
  mounted () {
    window.customElements.define('axhl-mount', class AppDrawer extends HTMLElement {})
    window.customElements.define('axhl-content', class AppContent extends HTMLElement {})
  }
}
</script>
