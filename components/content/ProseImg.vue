<template>
  <NuxtImg
    class="w-full h-full object-cover object-center transition-transform duration-300 flex-shrink-0 rounded-lg"
    :alt="alt"
    :src="src"
    loading="lazy"
    :placeholder="[1280, 720]"
    placeholder-class="bg-gray-200"
    densities="x1 x2"
    format="webp"
    quality="80"
    fit="cover"
    preload
    width="1280"
    height="720"
  />
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
});
</script>
