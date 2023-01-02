<template>
  <axhl-content class="mx-auto lg:px-24 w-screen px-12 pt-24">
    <h1>Posts</h1>
    <div id="axhl__works-container" class="w-full grid md:grid-cols-1 gap-4">
      <nuxt-link v-for="work in works" :key="work.code" :to="`/blogs/${work.code || '#'}`" :class="`axhl__work-${work.code} axhl__work h-full p-12 relative`">
        <img v-if="work.img" class="absolute top-0 w-full h-full object-cover left-0 overflow-hidden" :src="work.img">
        <div class="relative">
          <h1 class="font-bold font-sans text-3xl my-0">
            {{ work.display }}
          </h1>
          <span>{{ work.date }}</span>
          <p class="mt-4 text-base">
            {{ work.description }}
          </p>
        </div>
      </nuxt-link>
    </div>
  </axhl-content>
</template>

<script>
export default {
  name: 'BlogPage',
  data () {
    return {
      works: [
        {
          code: 'find_your_way_home',
          date: '1/2/2023 9:35 PM',
          display: 'Find your way home.',
          description: 'I\'m bored.',
          img: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
        }
      ]
    }
  },
  head () {
    return {
      title: 'Blog'
    }
  }
}
</script>
