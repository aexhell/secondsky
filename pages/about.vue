<template>
  <axhl-content class="overflow-auto mx-auto h-full lg:px-24 px-12 pt-24">
    <section class="mb-12">
      <h1>About me.</h1>
      <p>
        Since I was little I always had an interest in computer science. At the age of 9 (2014), I started experimenting with YoYoGames's GameMaker 8.1, and the GML language.
        At the age of 13 (2019), I joined Wikia (currently <a href="fandom.com">Fandom</a>) and started using it as a CSS playground. At the age of 15 (2020), I started using the Vue framework, and the following year, Nuxt.js.
        In 2022 when I turned 17, I started using React, especially React Native, apart from Svelte.
      </p>
    </section>
    <section class="my-12">
      <h1>Signature.</h1>
      <p class="mb-8">
        All my designs are signed with my logo and a data matrix code which includes the codename and the release date. Example below:
      </p>
      <Signature />
    </section>
    <section class="my-12">
      <h1>Contact</h1>
      <p>You may contact me using the following methods:</p>
      <ul class="list-disc ml-10 mt-4">
        <li>Discord: aexhell#0001</li>
        <li>Email: <a href="mailto:aexhell@gmail.com">aexhell@gmail.com</a></li>
        <li>Polywork: <a href="https://polywork.com/aexhell">@aexhell</a></li>
      </ul>
    </section>
  </axhl-content>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>
