<template>
  <axhl-content class="mx-auto lg:px-24 w-screen px-12 pt-24">
    <div v-for="posted in posts" v-if="post.found" id="axhl__post-container" :key="posted.code" class="w-full">
      <img v-if="post.img" class="rounded-md w-full h-64 mt-8 object-cover overflow-hidden" :src="posted.img">
      <div>
        <h1 class="mt-8 mb-2">
          {{ post.title }}.
        </h1>
        <span v-if="post.date">{{ posted.date }}</span>
        <p v-if="post.article" class="mt-4 text-base">
          {{ posted.article }}
        </p>
      </div>
    </div>
    <div v-else id="axhl__post-container" class="w-full">
      <div>
        <h1 class="mt-4 mb-2">
          404
        </h1>
        <p class="mt-4 text-base">
          This post does not exist.
        </p>
      </div>
    </div>
  </axhl-content>
</template>

<script>
export default {
  name: 'BlogPage',
  data () {
    return {
      post: {
        title: '[Loading]',
        found: true,
        img: false,
        loading: true
      },
      posts: [
        {
          code: 'find_your_way_home',
          date: '1/2/2023 9:35 PM',
          title: 'Find your way home',
          description: 'I\'m bored.',
          img: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
          article: 'It is a funny thing. Think about it.',
          found: true
        }
      ]
    }
  },
  head () {
    return {
      title: this.post.title
    }
  },
  mounted () {
    if (!this.$route.params) { return this.$router.push('/blog') }

    const post = this.posts.find(post => post.code === this.$route.params.id)
    if (!post) { this.post.found = false } else { this.post = post }
  }
}
</script>
