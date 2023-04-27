<template>
   <div id="__secondsky-content" class="w-full md:px-12 h-full flex">
      <div class="md:py-12 md:w-3/4 w-full md:px-0 px-20 mx-auto flex">
         <article class="flex md:flex-row flex-col items-start w-full justify-between md:gap-4 gap-8">
            <section class="lg:w-2/3 md:w-1/2 w-full mb-8">
               <h1 class="font-bold xl:text-5xl text-white-200 text-2xl"><span class="lifeisshort">Mylium</span></h1>
               <p class="md:mt-12 my-4 md:mb-16 w-full md:w-3/4 xl:text-2xl dark:text-white-200 text-gray lg:text-lg font-regular sm:text-sm text-xs leading-normal">
                  Just some random social media I tried to pull out of nowhere. I just work on it for fun. You can visit the project <a href="https://mylium.app">here</a>.
               </p>
               <nuxt-link to="/" class="gap-2 flex w-fit font-semibold text-gray no-underline hover:underline dark:text-white-200 items-center"><ArrowLeftIcon class="w-4 h-4" /><span>Go back</span></nuxt-link>
            </section>
            <section class="md:w-1/3 md:w-1/2 w-full">
               <h1 class="font-bold xl:text-5xl text-white-200 text-2xl lifeisshort"><span class="lifeisshort">Features</span></h1>
               <div class="mt-12 mb-8">
                  <Project title="Figma" position="Mockup" :link="false" />
                  <Project title="Supabase" position="Database" :link="false" />
                  <Project title="Nuxt 3" position="Front-end" :link="false" />
               </div>
            </section>
         </article>
      </div>
   </div>
</template>

<script setup>
import {ArrowLeftIcon} from '@heroicons/vue/24/outline';
</script>
