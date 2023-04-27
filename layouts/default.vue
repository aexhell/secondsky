<template>
   <main id="__secondsky-init" class="w-full h-full flex items-center flex-col overflow-y-auto">
      <Topbar />
      <slot />
      <div @click="unmute" id="__secondsky-ascension-control" class="z-10 p-8 md:block absolute hidden transition-colors top-0 left-0 dark:hover:text-white hover:text-gray text-transparent">
         <div class="active:translate-y-px hover:cursor-pointer">
            <SpeakerXMarkIcon v-if="muted" class="w-8 h-8" />
            <SpeakerWaveIcon v-else class="w-8 h-8" />
         </div>
      </div>
      <audio v-if="muted" muted loop autoplay>
         <source src="/ascension.ogg" type="audio/ogg">
         <source src="/ascension.mp3" type="audio/mpeg">
         Your browser does not support the audio element.
      </audio>
      <audio v-else autoplay loop>
         <source src="/ascension.ogg" type="audio/ogg">
         <source src="/ascension.mp3" type="audio/mpeg">
         Your browser does not support the audio element.
      </audio>
   </main>
</template>

<script setup>
import {SpeakerWaveIcon, SpeakerXMarkIcon} from '@heroicons/vue/24/outline';
</script>

<script>
export default {
   data () {
      return {
         muted: true
      }
   },
   methods: {
      unmute () {
         return this.muted = !this.muted;
      }
   }
}
</script>
