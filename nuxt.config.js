import en from './i18n/en';
import es from './i18n/es';

export default defineNuxtConfig({
   modules: [
      '@nuxtjs/i18n',
   ],
   i18n: {
      strategy: 'no_prefix',
      locales: [
         {
           code: 'en',
           name: 'English'
         },
         {
           code: 'es',
           name: 'Español'
         }
      ],
      vueI18n: {
         legacy: false,
         fallbackLocale: 'en',
         locale: 'en',
         locales: ['en', 'es'],
         messages: {
           en,
           es
         }
      }
   },
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
      rootId: '__secondsky',
      head: {
         titleTemplate: '%s Aexhell',
         meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
         ],
         script: [],
         link: [
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'icon', href: '/icon.png', type: 'image/png' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' }
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
