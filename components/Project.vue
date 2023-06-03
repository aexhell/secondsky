<template>
   <nuxt-link v-if="link" :to="link" class="__AXHL-PROJECT overflow-hidden relative border hover:shadow-md no-underline border-gray/50 hover:bg-white-100/10 dark:border-white-100/15 transition hover:border-gray/90 dark:hover:border-white-100/25 dark:hover:bg-gray/10 mb-3 flex justify-between items-center rounded-md py-4 px-6">
      <h3 class="text-gray dark:text-white-100 font-semibold w-full" v-text="title" />
      <div class="sm:xl:block hidden border-t dark:border-gray border-gray/50 w-full" />
      <p class="text-gray dark:text-white-100 w-full text-right text-sm" v-text="position" />
   </nuxt-link>
   <div v-else class="__AXHL-PROJECT overflow-hidden relative border hover:shadow-md no-underline border-gray/50 dark:border-white-100/10 transition hover:border-gray/90 dark:hover:border-white-100/75 dark:hover:bg-gray/20 mb-3 flex justify-between items-center rounded-md py-4 px-6">
      <h3 class="text-gray dark:text-white-100 font-semibold w-full" v-text="title" />
      <p class="text-gray dark:text-white-100 w-full text-right text-sm" v-text="position" />
   </div>
</template>

<script setup>
import {ArrowRightIcon} from '@heroicons/vue/24/outline';
</script>

<script>
export default {
   props: {
      title: {
         default: '',
         type: String
      },
      position: {
         default: '',
         type: String
      },
      link: {
         default: null,
         type: String
      }
   }
}
</script>