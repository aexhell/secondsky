<template>
   <div id="__secondsky-content" class="w-3/4 px-8 h-full flex">
      <div class="w-full h-full py-12 my-auto flex">
         <div class="w-full h-full">
            <div class="w-full mb-8">
               <h2 class="font-bold xl:text-5xl text-gray dark:text-white-200 text-4xl"><span class="lifeisshort">Projects</span></h2>
            </div>
            <nuxt-link v-for="proj of projects" :key="proj" :to="`works/${proj.code}`" class="w-full border hover:shadow-md no-underline border-gray/50 hover:border-gray/90 dark:hover:border-white-100/75 dark:hover:bg-gray/20 relative dark:border-white-100/10 transition mb-3 flex justify-between items-center rounded-md p-16">
               <div class="w-full flex justify-between items-center">
                  <h2 class="font-bold xl:text-3xl text-gray dark:text-white-200 z-10 text-xl capitalize" v-text="proj.code" />
                  <p class="font-bold xl:text-2xl text-gray dark:text-white-200 z-10 text-lg" v-text="proj.description" />
               </div>
               <div class="__secondsky-project w-full h-full top-0 left-0 absolute" :style="`background: url(/projects/${proj.code}.png)`"></div>
            </nuxt-link>
         </div>
      </div>
   </div>
</template>

<script setup>
import {ArrowRightIcon} from '@heroicons/vue/24/outline';

const projects = [
   {
      code: 'mylium',
      description: 'Social media attempt.'
   },
   {
      code: 'puroto',
      description: 'Furry social media.'
   }
]
</script>
