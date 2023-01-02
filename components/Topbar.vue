<template>
  <div id="axhl__topbar" class="w-full fixed px-24 py-16 flex justify-between items-center">
    <nuxt-link to="/" class="no-underline axhl__topbar-left uppercase font-sans font-bold text-lg text-white">
      Aexhell
    </nuxt-link>
    <div class="axhl__topbar-right z-10">
      <nuxt-link to="/about" class="uppercase font-sans mr-8 no-underline">
        About
      </nuxt-link>
      <nuxt-link to="/works" class="uppercase font-sans no-underline">
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
