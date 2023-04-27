<template>
   <div id="__secondsky-content" class="md:w-3/4 md:px-8 h-full flex">
      <div class="w-full h-full py-12 my-auto flex flex-col">
         <article class="flex md:flex-row md:items-start items-center flex-col justify-between gap-4">
            <section class="lg:w-2/3 w-3/4 mb-4">
               <h2 class="font-bold xl:text-5xl text-gray dark:text-white-200 text-4xl">“Life is <span class="lifeisshort">short</span>.”</h2>
               <p class="lg:my-12 mt-8 mb-4 w-full md:w-3/4 xl:text-2xl lg:text-lg font-regular text-md text-gray dark:text-white-200 leading-normal">
                  Welcome to my sky. Name's <b>Aex</b>. I surf the Internet as <code>aexhell</code> and work as an interface designer and web developer. Wanna see my works?
               </p>
               <nuxt-link to="#" class="md:hidden gap-2 mb-4 flex w-fit font-semibold text-gray no-underline hover:underline dark:text-white-200 items-center"><span>Read more</span><ArrowRightIcon class="w-4 h-4" /></nuxt-link>
            </section>
            <section class="lg:w-1/3 md:w-1/2 w-3/4">
               <h2 class="font-bold xl:text-5xl text-4xl"><span class="lifeisshort">Projects</span></h2>
               <div class="lg:my-12 mt-8 mb-4">
                  <Project title="Mylium" link="#" position="Web Dev" />
                  <Project title="Puroto" link="#" position="Front-end" />
               </div>
               <nuxt-link to="#" class="md:hidden gap-2 flex mt-4 w-fit font-semibold text-gray no-underline hover:underline dark:text-white-200 items-center"><span>See more</span><ArrowRightIcon class="w-4 h-4" /></nuxt-link>
            </section>
         </article>
         <div class="md:flex hidden w-full mt-4 justify-between">
            <nuxt-link to="#" class="gap-2 flex w-fit font-semibold text-gray no-underline hover:underline dark:text-white-200 items-center"><span>Read more</span><ArrowRightIcon class="w-4 h-4" /></nuxt-link>
            <nuxt-link to="#" class="gap-2 flex w-fit font-semibold text-gray no-underline hover:underline dark:text-white-200 items-center"><span>See more</span><ArrowRightIcon class="w-4 h-4" /></nuxt-link>
         </div>
      </div>
   </div>
</template>

<script setup>
import {ArrowRightIcon} from '@heroicons/vue/24/outline';
</script>
