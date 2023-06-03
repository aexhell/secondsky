<template>
   <header id="__secondsky-topbar" class="w-full flex">
      <nav class="w-full flex flex-col md:items-center justify-center py-12">
         <ul class="w-3/4 md:px-8 mx-auto list-style-none flex items-center justify-between">
            <nuxt-link to="/" class="uppercase w-fit active:translate-y-px no-underline hover:underline text-gray dark:text-white-300 font-bold md:text-xl">
               <svg class="md:w-12 md:h-12 sm:w-10 sm:h-10 w-8 h-8" width="47" height="53" viewBox="0 0 47 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H13.8389L23.2389 14.84L33.1611 0H47L42.8222 6.36H33.1611L23.7611 21.2H23.2389L13.8389 6.36H4.17778L0 0Z" fill="currentColor"/>
                  <path d="M4.17778 12.72H14.1L23.2389 27.56H23.7611L33.1611 12.72H42.8222L33.6833 26.5L47 46.64H42.8222L33.6833 32.86L31.5944 36.04L42.8222 53H33.1611L23.7611 38.16H23.2389L13.5778 53H4.17778L15.4056 36.04L13.3167 32.86L4.17778 46.64H0L13.3167 26.5L4.17778 12.72Z" fill="currentColor"/>
               </svg>
            </nuxt-link>
            <div class="flex items-center relative gap-4 md:gap-6">
               <a href="https://github.com/aexhell" class="uppercase active:translate-y-px no-underline hover:underline text-gray dark:text-white-300 w-fit text-sm">
                  <svg class="w-6 h-6 text-gray dark:text-white-300" xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 24 24" fill="none">
                     <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
               </a>
               <button @click="changeTheme">
                  <SunIcon v-if="theme === 'dark'" class="w-6 h-6 active:translate-y-px text-gray dark:text-white-300" />
                  <MoonIcon v-else class="w-6 h-6 active:translate-y-px text-gray dark:text-white-300" />
               </button>
               <div @click="unmute" id="__secondsky-ascension-control" class="transition-colors dark:text-white-300 text-gray">
                  <div class="active:translate-y-px hover:cursor-pointer">
                     <SpeakerXMarkIcon v-if="muted" class="w-6 h-6" />
                     <SpeakerWaveIcon v-else class="w-6 h-6" />
                  </div>
               </div>
            </div>
         </ul>
         <audio loop>
            <source :src="`/${rand[randnumb]}.ogg`" type="audio/ogg">
            <source :src="`/${rand[randnumb]}.mp3`" type="audio/mpeg">
            Your browser does not support the audio element.
         </audio>
      </nav>
   </header>
</template>

<script>
export default {
   methods: {
      unmute () {
         let elem = document.getElementsByTagName('audio')

         this.muted ? elem[0].play() : elem[0].pause()
         this.muted = !this.muted
      },
      changeTheme () {
         switch (this.theme) {
            case 'dark':
               this.theme = 'light';
               break;
            case 'light':
               this.theme = 'dark';
               break;
            default:
               this.theme  = 'dark';
               break;
         }

         if (this.theme === 'dark') {
            document.documentElement.classList.add('dark')
         } else {
            document.documentElement.classList.remove('dark')
         }
      }
   },
   mounted () {
       if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
         this.theme = 'dark'
      }
   },
   data () {
      return {
         muted: true,
         randnumb: Math.floor(Math.random() * 3),
         theme: 'light',
         rand: ['exile', 'ethereal', 'smoothoperator']
      }
   }
}
</script>

<script setup>
import {FingerPrintIcon, SunIcon, MoonIcon, SpeakerWaveIcon, SpeakerXMarkIcon} from '@heroicons/vue/24/outline';
</script>