<template>
   <div id="__secondsky-content" class="md:w-1/2 px-8 py-32 h-full">
      <h1 class="font-bold mb-4 xl:text-4xl lg:text-2xl text-lg" v-text="$t('pages.contact.content.title')" />
      <p v-html="$t('pages.contact.content.paragraph')" />
      <ul class="ml-12 list-disc">
         <li class="my-4">aexhell@gmail.com</li>
         <li class="mb-2">github/polywork: @aexhell</li>
      </ul>
      <div class="flex items-center w-full mt-16">
         <hr class="w-1/2 border-gray mr-8">
         <img src="/logo.svg">
         <hr class="w-1/2 border-gray ml-8">
      </div>
   </div>
</template>

<script setup>
const i18n = useI18n()
useSeoMeta({ title: `${i18n.t('pages.contact.title')} /` });
</script>

<script>
export default {
  inject: ["layout"],
  layout(context) {
    return 'default';
  },
};
</script>
