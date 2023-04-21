<template>
   <nav id="__secondsky-topbar" class="w-full flex flex-col md:items-center justify-center py-12">
      <ul class="w-3/4 px-8 mx-auto list-style-none flex items-center justify-between">
         <nuxt-link to="/" class="uppercase w-fit no-underline hover:underline text-gray dark:text-white-300 font-bold md:text-xl">
            <svg width="47" height="53" viewBox="0 0 47 53" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M0 0H13.8389L23.2389 14.84L33.1611 0H47L42.8222 6.36H33.1611L23.7611 21.2H23.2389L13.8389 6.36H4.17778L0 0Z" fill="currentColor"/>
               <path d="M4.17778 12.72H14.1L23.2389 27.56H23.7611L33.1611 12.72H42.8222L33.6833 26.5L47 46.64H42.8222L33.6833 32.86L31.5944 36.04L42.8222 53H33.1611L23.7611 38.16H23.2389L13.5778 53H4.17778L15.4056 36.04L13.3167 32.86L4.17778 46.64H0L13.3167 26.5L4.17778 12.72Z" fill="currentColor"/>
            </svg>
         </nuxt-link>
         <div class="flex items-center relative gap-8">
            <nuxt-link to="#" class="uppercase no-underline hover:underline text-gray dark:text-white-300 w-fit text-xs">About</nuxt-link>
            <nuxt-link to="#" class="uppercase no-underline hover:underline text-gray dark:text-white-300 w-fit text-xs">Contact</nuxt-link>
            <button @click="changeTheme">
               <SunIcon v-if="theme === 'dark'" class="w-6 h-6 text-gray dark:text-white-300" />
               <MoonIcon v-else class="w-6 h-6 text-gray dark:text-white-300" />
            </button>
         </div>
      </ul>
   </nav>
</template>

<script>
export default {
   methods: {
      changeTheme () {
         switch (this.theme) {
            case 'dark':
               this.theme = 'light';
               break;
            case 'light':
               this.theme = 'dark';
               break;
            default:
               this.theme  = 'dark';
               break;
         }

         if (this.theme === 'dark') {
            document.documentElement.classList.add('dark')
         } else {
            document.documentElement.classList.remove('dark')
         }
      }
   },
   data () {
      return {
         theme: 'light'
      }
   }
}
</script>

<script setup>
import {FingerPrintIcon, SunIcon, MoonIcon} from '@heroicons/vue/24/outline';
</script>