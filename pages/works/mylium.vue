<template>
   <div id="__secondsky-content" class="w-full md:px-12 h-full flex">
      <div class="py-12 md:w-3/4 w-full mx-auto flex">
         <article class="flex items-start w-full justify-between gap-4">
            <section class="lg:w-2/3 w-1/2 mb-8">
               <h1 class="font-bold xl:text-5xl text-white-200 text-2xl"><span class="lifeisshort">Mylium</span></h1>
               <p class="md:mt-12 my-4 md:mb-14 w-full md:w-3/4 xl:text-2xl dark:text-white-200 text-gray lg:text-lg font-regular sm:text-sm text-xs leading-normal">
                  Just some random social media I tried to pull out of nowhere. I just work on it for fun.
               </p>
            </section>
            <section class="md:w-1/3 w-1/2">
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
