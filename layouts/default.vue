<template>
   <main id="__secondsky-init" class="w-full h-full flex items-center flex-col overflow-y-auto">
      <Topbar />
      <slot />
      <div class="absolute transition z-[5] select-none pointer-events-none ease-in-out w-4 h-4" />
   </main>
</template>
