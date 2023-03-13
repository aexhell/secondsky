<template>
   <nav id="__secondsky-topbar" class="w-full flex flex-col fixed md:items-center py-8">
      <nuxt-link v-if="$route.path !== '/'" to="/" class="absolute no-underline hover:underline md:block hidden text-neutral-500 left-12">
         {{ $t('topbar.back') }}
      </nuxt-link>
      <ul class="md:w-1/2 px-8 px-auto list-style-none flex items-center justify-between">
         <nuxt-link to="/" class="uppercase w-fit no-underline hover:underline font-bold md:text-xl">Aexhell</nuxt-link>
         <div class="flex items-center relative">
            <nuxt-link to="/contact" class="uppercase no-underline hover:underline w-fit mx-8 text-xs">{{ $t('topbar.contact') }}</nuxt-link>
            <div class="bg-transculent select-none cursor-pointer active:translate-y-px rounded-full border-gray border px-4 py-1 uppercase w-fit text-xs" v-on:click="isDropdownOpen = !isDropdownOpen" v-text="$t('language')" />
            <div v-if="isDropdownOpen" class="bg-transculent animation-slideup absolute rounded-md border-x border-t border-gray top-8 right-0">
               <div v-for="local of availableLocales" class="p-4 border-b rounded-b text-sm border-gray cursor-pointer" v-bind:key="local.code" v-on:click="setLocale(local.code); isDropdownOpen = false" v-text="local.name"></div>
            </div>
         </div>
      </ul>
   </nav>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return locales.value
})
</script>

<script>
export default {
   data () {
      return {
         isDropdownOpen: false
      }
   },
   mounted () {
      console.log(this.$route)
   }
}
</script>