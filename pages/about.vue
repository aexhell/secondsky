<template>
   <div id="__secondsky-content" class="md:w-1/2 px-8 pt-32 mb-48 h-full">
      <h1 class="font-bold xl:text-4xl lg:text-2xl text-lg" v-text="$t('pages.about.content.title')" />
      <p class="mt-4 mb-8" v-html="$t('pages.about.content.paragraph')" />
      <h2 class="font-semibold mb-4 xl:text-2xl lg:text-xl text-md" v-text="$t('pages.about.content.guidelines.title')" />
      <p class="my-4" v-html="$t('pages.about.content.guidelines.paragraph')" />
      <ul class="pl-12 py-4 list-disc">
        <li class="mb-2" v-for="guide in 5" v-bind:key="guide" v-text="$t(`pages.about.content.guidelines.content[${guide-1}]`)" />
      </ul>
      <p class="pb-12">
        {{ $t('pages.about.content.guidelines.footer') }}
        <nuxt-link to="/contact">{{ $t('pages.about.content.guidelines.contact') }}</nuxt-link>.
        <div class="flex items-center w-full mt-12">
          <hr class="w-1/2 border-gray mr-8">
          <img src="/logo.svg">
          <hr class="w-1/2 border-gray ml-8">
        </div>
      </p>
   </div>
</template>

<script setup>
const i18n = useI18n()
useSeoMeta({ title: `${i18n.t('pages.about.title')} /` });
</script>

<script>
export default {
  inject: ["layout"],
  data () {
    return {
      guidelines: [
        {
          
        }
      ]
    }
  },
  layout(context) {
    return 'default';
  },
};
</script>
