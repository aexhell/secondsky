<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
export default {
  transition(to, from) {
    if (!from) {
      return 'slide-left'
    }

    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  }
}
</script>

<script setup>
useServerSeoMeta({
  ogTitle: 'Aexhell',
  description: 'Web Dev / UX Designer',
  ogDescription: 'Web Dev / UX Designer',
  ogImage: 'https://axhl.me/banner.png',
  twitterCard: 'summary_large_image'
});
</script>
