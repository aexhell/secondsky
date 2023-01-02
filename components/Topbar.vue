<template>
  <div id="axhl__topbar" class="w-full fixed md:px-24 px-12 py-16 flex justify-between items-center">
    <nuxt-link to="/" class="no-underline axhl__topbar-left uppercase font-sans font-bold text-lg text-white">
      Aexhell
    </nuxt-link>
    <div class="axhl__topbar-right z-10">
      <nuxt-link to="/contact" class="uppercase sm:text-sm text-xs font-sans mr-4 no-underline">
        Contact
      </nuxt-link>
      <nuxt-link to="/works" class="uppercase sm:text-sm text-xs font-sans no-underline">
        Works
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>
