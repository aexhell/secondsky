<template>
   <div id="__secondsky-content" class="md:w-1/2 px-8 h-full flex">
      <article :class="`w-full flex flex-col justify-between my-auto`">
         <section v-for="sec of sections" v-bind:key="sec.title" :class="`w-full items-${sec.last ? 'end' : 'start'} flex flex-col`">
            <nuxt-link :to="sec.link" :class="`my-8 transition no-underline hover:underline flex items-${sec.last ? 'start' : 'end'} flex-col hover:${sec.last ? '-' : ''}translate-x-6`">
               <h1 class="uppercase stroke font-black xl:text-8xl lg:text-6xl text-4xl" v-text="$t(sec.title)" />
               <h2 class="uppercase font-black xl:text-8xl mt-4 lg:text-6xl text-4xl" v-text="$t(sec.sub)" />
            </nuxt-link>
         </section>
      </article>
   </div>
</template>

<script setup>
const i18n = useI18n();
const title = computed(() => i18n.t('pages.index.title'));
useSeoMeta({ title: `${title.value} /` });
</script>

<script>
export default {
  inject: ["layout"],
  data () {
   return {
      sections: [
         {
            title: 'pages.index.about.title',
            sub: 'pages.index.about.sub',
            link: '/about'
         },
         {
            title: 'pages.index.works.title',
            sub: 'pages.index.works.sub',
            link: '/works',
            last: true
         }
      ]
   }
  },
  computed: {
   getTitle () {
      return this.$t('pages.index.title')
   }
  },
  layout(context) {
    return 'default';
  },
};
</script>
