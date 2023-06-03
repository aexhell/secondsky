<template>
   <div id="__secondsky-content" class="md:w-3/4 md:px-8 h-full flex">
      <div class="w-full h-full xl:py-12 md:py-8 py-4 my-auto flex flex-col">
         <article class="flex md:flex-row md:items-start items-center flex-col justify-between gap-4">
            <section class="lg:w-2/3 w-3/4 mb-4">
               <h2 class="font-bold xl:text-5xl text-gray dark:text-white-200 text-4xl"><span class="lifeisshort">Mylium</span></h2>
               <p class="lg:my-12 mt-8 mb-4 w-full md:w-3/4 xl:text-2xl lg:text-lg font-regular text-md text-gray dark:text-white-200 leading-normal">
                  Some random project I made. Currently its development is on hiatus. Sorry. You can visit the project <a href="https://mylium.app">here</a>.
               </p>
               <nuxt-link to="/" class="gap-2 flex w-fit font-semibold text-gray no-underline hover:underline dark:text-white-200 items-center"><ArrowLeftIcon class="w-4 h-4" /><span>Go back</span></nuxt-link>
            </section>
            <section class="lg:w-1/3 md:w-1/2 w-3/4">
               <h2 class="font-bold xl:text-5xl text-4xl"><span class="lifeisshort">Features</span></h2>
               <div class="lg:my-12 mt-8 mb-4">
                  <Project title="Nuxt 3" position="Front-end" />
                  <Project title="Supabase (Postgres)" position="Back-end" />
                  <Project title="Figma" position="Mock-up" />
               </div>
            </section>
         </article>
      </div>
   </div>
</template>

<script setup>
import {ArrowLeftIcon} from '@heroicons/vue/24/outline';
</script>
