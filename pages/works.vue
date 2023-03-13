<template>
   <div id="__secondsky-content" class="md:w-1/2 px-8 pt-32 mb-32 h-full">
      <h1 class="font-bold mb-8 xl:text-4xl lg:text-2xl md:text-xl sm:text-md" v-text="$t('pages.works.content.title')" />
      <div class="__secondsky-works flex flex-col my-4">
         <a v-for="work of projs" :href="work.link" :class="`__secondsky-project-${work.code} w-full mb-4 no-underline bg-transculent border border-gray rounded-md`" v-bind:key="work.code">
            <img class="w-full h-48 object-top rounded-t-md object-cover border-b border-gray" :src="`/projects/${work.code}.png`">
            <div class="p-8">
               <div class="flex w-full items-end justify-between border-b border-gray pb-4">
                  <h2 class="font-semibold xl:text-4xl lg:text-2xl md:text-xl sm:text-md" v-text="work.title" />
                  <span v-text="work.details" />
               </div>
               <p class="mt-4" v-text="$t(`pages.works.content.works.${work.code}.description`)" />
            </div>
         </a>
      </div>
   </div>
</template>

<script setup>
const i18n = useI18n()
useSeoMeta({ title: `${i18n.t('pages.works.title')} /` });
</script>

<script>
export default {
   data () {
      return {
         projs: [
            {
               code: 'puroto',
               link: 'https://github.com/purotoapp',
               title: 'Puroto',
               details: 'Front-end'
            },
            {
               code: 'mylium',
               link: 'https://mylium.app',
               title: 'Mylium',
               details: 'Full Stack'
            }
         ]
      }
   },
   inject: ["layout"],
   layout(context) {
      return 'default';
   }
};
</script>
