<template>
   <div id="__secondsky-init" class="w-full h-full flex items-center flex-col overflow-y-auto">
      <Topbar />
      <slot />
   </div>
</template>

<script>
export default {
   name: 'LandingLayout',
   provide() {
      return { layout: "default" };
   }
}
</script>