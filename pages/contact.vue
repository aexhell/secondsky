<template>
  <axhl-content class="overflow-auto mx-auto w-full h-full lg:px-24 px-12 pt-24">
    <section class="mb-12">
      <h1>Contact.</h1>
      <p>You may contact me using the following methods:</p>
      <ul class="list-disc ml-10 mt-4">
        <li>Discord: aexhell#0001</li>
        <li>Email: <a href="mailto:aexhell@gmail.com">aexhell@gmail.com</a></li>
        <li>Polywork: <a href="https://polywork.com/aexhell">@aexhell</a></li>
        <li>GitHub: <a href="https://github.com/aexhell">@aexhell</a></li>
      </ul>
    </section>
    <section class="my-12">
      <h1>Signature.</h1>
      <p class="mb-8">
        All of my projects are signed with my logo and a data matrix code which includes the codename and the release date. Here's an example below:
      </p>
      <Signature />
    </section>
  </axhl-content>
</template>

<script>
export default {
  name: 'ContactPage',
  head () {
    return {
      title: 'Contact'
    }
  }
}
</script>
