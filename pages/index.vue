<template>
  <axhl-content class="h-full mx-auto lg:px-24 px-12 pt-24">
    <h1>Welcome to the second sky.</h1>
    <p class="mb-8">
      Name's <b>Aex</b>, aka <code>aexhell</code>. I am a spanish front-end developer creating web applications. I have always been fascinated by the power of the web to connect people,
      and I am excited to be a part of the dynamic field of web development. My goal is to create the best web experience for you.
    </p>
    <p class="mb-8">
      Since I was little I always had an interest in computer science. At the age of 9 (2014), I started experimenting with YoYoGames's GameMaker 8.1, and the GML language.
      At the age of 13 (2019), I joined Wikia (currently <a href="https://fandom.com">Fandom</a>) and started using it as a CSS playground. At the age of 15 (2020), I started using the Vue framework, and the following year, Nuxt.js.
      In 2022 when I turned 17, I started using React, especially React Native, apart from Svelte.
    </p>
    <nuxt-link to="/contact">
      <button>_contact</button>
    </nuxt-link>
  </axhl-content>
</template>

<script>
export default {
  name: 'IndexPage',
  head () {
    return {
      title: 'Home'
    }
  }
}
</script>
