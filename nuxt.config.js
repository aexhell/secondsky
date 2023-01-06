const _ = {
  capitalize: (str) => {
    return str[0].toUpperCase() + str.slice(1)
  }
}

export default {
  head: {
    titleTemplate: '%s - Aexhell',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'aexhell. front-end developer. reach for the moon.' },
      { hid: 'og:title', name: 'og:title', content: 'Aexhell' },
      { name: 'og:url', content: 'axhl.me' },
      { name: 'og:image', content: '/img/banner.png' },
      { name: 'twitter:image', content: '/img/banner.png' },
      { name: 'og:image:type', content: 'image/png' },
      { name: 'og:image:width', content: '1920' },
      { name: 'og:image:height', content: '1080' },
      { name: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:description', content: 'aexhell. front-end developer. reach for the moon.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#320f17' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'icon', type: 'image/png', href: '/icon.png' },
      { rel: 'preconnect', crossorigin: '', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Hahmlet:wght@100;200;300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' }
    ]
  },
  globalName: 'secondsky',
  globals: {
    id: globalName => `__${globalName}`,
    nuxt: globalName => `$${globalName}`,
    context: globalName => `__${globalName.toUpperCase()}__`,
    pluginPrefix: globalName => globalName,
    readyCallback: globalName => `on${_.capitalize(globalName)}Ready`,
    loadedCallback: globalName => `_on${_.capitalize(globalName)}Loaded`
  },
  css: [
    '~/assets/global.css'
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  modules: [],
  build: {}
}
