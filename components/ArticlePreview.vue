<template>
  <div v-if="blog" class="p-4 group hover:bg-gray-50 transition-colors">
    <NuxtLink :to="`/blog/${blog.slug}`" class="space-y-2">
      <h1
        class="transition-colors group-hover:text-blue-500 text-1xl font-bold text-gray-500 leading-tight"
      >
        {{ blog.title }}
      </h1>

      <div class="pb-4 space-y-2">
        <ProseP class="text-justify">{{ blog.description }}</ProseP>
        <div class="text-xs text-gray-400">
          {{ blog.posted }}
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ blog: Blog }>();
</script>
