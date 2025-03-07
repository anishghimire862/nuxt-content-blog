<template>
  <NuxtImg class="rounded-xl shadow-lg w-full" :src="src" :alt="alt" />
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
