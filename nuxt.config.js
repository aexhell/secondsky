export default defineNuxtConfig({
   generate: {
      fallback: true
   },
   plugins: [],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
   app: {
      rootId: '__AXHL_ELIXIR',
      head: {
         title: 'Aexhell',
         meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
         ],
         script: [],
         link: [
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'icon', href: '/icon.png', type: 'image/png' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap&family=Rufina:wght@400;700&display=swap' }
         ],
         style: [],
         noscript: [
            { children: 'JavaScript is required' }
         ]
      }
   },
   css: [
      '@/assets/global.css'
   ]
})
