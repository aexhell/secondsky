<template>
   <div id="__secondsky-content" class="md:w-3/4 md:px-8 h-full flex">
      <div class="w-full h-full xl:py-12 md:py-8 py-4 my-auto flex flex-col">
         <article class="flex md:flex-row md:items-start items-center flex-col justify-between gap-4">
            <section class="lg:w-2/3 w-3/4 mb-4">
               <h2 class="font-bold xl:text-5xl text-gray dark:text-white-200 text-4xl"><span class="lifeisshort">Puroto</span></h2>
               <p class="lg:my-12 mt-8 mb-4 w-full md:w-3/4 xl:text-2xl lg:text-lg font-regular text-md text-gray dark:text-white-200 leading-normal">
                  I worked on this social media around 2022 Q3 and left the team in Q4 due to issues around us. The project is currently dead, but you can visit the GitHub organization <a href="https://github.com/PurotoApp">here</a>.
               </p>
               <nuxt-link to="/" class="gap-2 flex w-fit font-semibold text-gray no-underline hover:underline dark:text-white-200 items-center"><ArrowLeftIcon class="w-4 h-4" /><span>Go back</span></nuxt-link>
            </section>
            <section class="lg:w-1/2 md:w-1/2 w-3/4 md:mt-0 my-4">
               <h2 class="font-bold xl:text-5xl text-4xl"><span class="lifeisshort">Features</span></h2>
               <div class="lg:my-12 mt-8 mb-4">
                  <Project title="Figma" position="Mockup" />
                  <Project title="Supabase" position="Database" />
                  <Project title="Nuxt 2" position="Front-end" />
                  <Project title="PHP" position="Back-end" />
               </div>
            </section>
         </article>
      </div>
   </div>
</template>

<script setup>
import {ArrowLeftIcon} from '@heroicons/vue/24/outline';
</script>
