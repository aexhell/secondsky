<template>
   <div id="__secondsky-content" class="md:w-1/2 px-8 py-32 h-full">
      <h1 class="font-bold xl:text-4xl lg:text-2xl text-lg" v-text="$t('pages.about.content.title')" />
      <p class="mt-4 mb-8" v-html="$t('pages.about.content.paragraph')" />
      <h2 class="font-semibold mb-4 xl:text-2xl lg:text-xl text-md" v-text="$t('pages.about.content.guidelines.title')" />
      <p class="my-4" v-html="$t('pages.about.content.guidelines.paragraph')" />
      <ul class="pl-12 py-4 list-disc">
        <li class="mb-2" v-for="guide in 5" v-bind:key="guide" v-text="$t(`pages.about.content.guidelines.content[${guide-1}]`)" />
      </ul>
      <p>
        {{ $t('pages.about.content.guidelines.footer') }}
        <nuxt-link to="/contact">{{ $t('pages.about.content.guidelines.contact') }}</nuxt-link>.
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
