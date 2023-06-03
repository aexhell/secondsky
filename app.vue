<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  script: [
    { children: '/* Not clean, but practical way to get Nuxt add the dark class on load. Ran out of ideas. */\n\nif (window.matchMedia && window.matchMedia(\'(prefers-color-scheme: dark)\').matches) {document.documentElement.classList.add(\'dark\');}'}
  ]
})
useServerSeoMeta({
  ogTitle: 'Aexhell',
  description: 'Web Dev / UX Designer',
  ogDescription: 'Web Dev / UX Designer',
  ogImage: 'https://axhl.me/banner.png',
  twitterCard: 'summary_large_image'
});
</script>
