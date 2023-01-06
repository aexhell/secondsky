<template>
  <axhl-content class="mx-auto lg:px-24 w-screen px-12 py-24">
    <div v-for="posted in posts" v-if="post.found" id="axhl__post-container" :key="posted.code" class="w-full">
      <img v-if="post.img" class="rounded-md w-full h-64 mt-8 object-cover overflow-hidden" :src="posted.img">
      <div>
        <h1 class="mt-8 mb-2">
          {{ post.title }}.
        </h1>
        <span v-if="post.date" class="italic font-medium">[{{ posted.date }}]</span>
        <p v-if="post.article" class="mt-4 text-base" v-html="posted.article" />
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
          article:
            'It\'s high noon. You are walking through a hilly meadow. The grass greets you. The sun shines on you and warms you. The water envelops the land where you perch. ' +
            'In the meadow, you meet a stout-looking old man in peasant clothes. The old man approaches. He notices your gaze on him, and asks: "what do you think?" ' +
            'You answer while looking around you: "It is a very beautiful meadow. Varied flora. A perfect ecosystem." The old man just laughs. "Ha ha! Yes, it is, but I was talking about myself."<br /><br />  ' +
            'You fix your gaze on the old man\'s face. You see years of life. Personal achievements. Offspring. You look beyond. Deterioration. Tiredness. Mistakes made and irremediable. Exeunt omnes. ' +
            'You can\'t help but feel sad and you divert your gaze towards the flora. The old man notices your sensation, and speaks. "How does it feel to see the soul of a being?" You don\'t know what to answer. ' +
            '"How can you think that life is a road? No. There are many definitions of life, which cannot be described by a simple straight road with potholes."<br /><br />You answer: "Mistakes shape us. They make us who we are." ' +
            'The old man hesitates, but answers. "Yes. But is making mistakes the thing to do to grow as a person? Is affecting the people around you what makes you \'better\'?" ' +
            'Your train of thought stops. You have made mistakes. You have affected the people around you. Why would that make you a better person? The old man, reading your soul, replies: ' +
            '"Your mistakes, just like mine, are not torture. Your actions have consequences. They are there for you to remember. So you don\'t make them again. Embrace their consequences." ' +
            'You both decide to sit near the river. You watch the fish dance around the seaweed. The school of fish stops and approaches you. One of the fish raises his voice: "What are you?" ' +
            'You take air. You feel your heart pumping blood. The air flows inside you. You exhale, and answer to the fish: "I am a consequence." The old man adds: "We are."<br /><br />The fish grimaces in agreement. Nature accepts you. Welcome home.',
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
