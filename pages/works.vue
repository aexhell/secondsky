<template>
  <axhl-content class="mx-auto lg:px-24 w-screen px-12 py-24">
    <h1>Works</h1>
    <div id="axhl__works-container" class="w-full grid md:grid-cols-2 gap-4">
      <a v-for="work in works" :key="work.code" :href="work.href || '#'" :class="`axhl__work-${work.code} axhl__work h-full p-12 relative`">
        <img v-if="work.img" class="absolute top-0 w-full h-full object-cover left-0 overflow-hidden" :src="`/img/${work.code}.png`">
        <div class="relative">
          <h1 class="text-3xl my-4">{{ work.display }}</h1>
          <p class="my-0 italic text-base">{{ work.description }}</p>
        </div>
      </a>
    </div>
  </axhl-content>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      works: [
        {
          code: 'puroto',
          display: 'Puroto',
          description: 'Worked on this with some friend around Aug 2021 as a front-end developer.',
          href: 'https://github.com/PurotoApp',
          img: true
        },
        {
          code: 'mylium',
          display: 'Mylium',
          description: 'Social media made with Nuxt.',
          href: 'https://mylium.app/',
          img: true
        },
        {
          code: 'secondsky',
          display: 'Second Sky',
          description: 'This portfolio. Yeah.',
          img: false
        }
      ]
    }
  }
}
</script>
