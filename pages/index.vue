<template>
   <div id="__secondsky-content" class="md:w-3/4 px-8 h-full flex">
      <div class="w-full h-full py-12 my-auto flex">
         <article class="flex md:flex-row md:items-start items-center flex-col justify-between gap-4">
            <section class="lg:w-2/3 w-1/2 mb-8">
               <h2 class="font-bold xl:text-5xl text-gray dark:text-white-200 text-2xl">“Life is <span class="lifeisshort">short</span>.”</h2>
               <p class="md:mt-12 my-4 md:mb-14 w-full md:w-3/4 xl:text-2xl lg:text-lg font-regular sm:text-sm text-xs text-gray dark:text-white-200 leading-normal">
                  Welcome to my sky. Name's <b>Aex</b>. I surf the Internet as <code>aexhell</code> and work as a graphic designer and web developer.
               </p>
               <nuxt-link to="#" class="gap-2 flex w-fit text-gray no-underline hover:underline dark:text-white-200 items-center"><span>Read more</span><ArrowRightIcon class="w-4 h-4" /></nuxt-link>
            </section>
            <section class="md:w-1/3 w-1/2">
               <h2 class="font-bold xl:text-5xl text-white-200 text-2xl lifeisshort"><span class="lifeisshort">Projects</span></h2>
               <div class="mt-12 mb-8">
                  <Project title="Mylium" position="Web Dev" />
                  <Project title="Second Sky" position="this" />
               </div>
               <nuxt-link to="#" class="gap-2 flex w-fit text-gray no-underline hover:underline dark:text-white-200 items-center"><span>See more</span><ArrowRightIcon class="w-4 h-4" /></nuxt-link>
            </section>
         </article>
      </div>
   </div>
</template>

<script setup>
import {ArrowRightIcon} from '@heroicons/vue/24/outline';
</script>
