<template>
  <div
    v-if="blog"
    class="p-4 group hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md rounded-lg"
  >
    <div class="flex flex-wrap gap-2 mb-2">
      <span
        v-for="tag in blog.tags"
        :key="tag"
        class="bg-gray-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded uppercase"
      >
        {{ tag }}
      </span>
    </div>

    <NuxtLink :to="`/blog/${blog.slug}`" class="space-y-2 block">
      <h1
        class="transition-colors group-hover:text-blue-500 text-2xl font-bold text-gray-800 leading-snug"
      >
        {{ blog.title }}
      </h1>

      <div class="pb-4 space-y-2">
        <ProseP>{{ blog.description }}</ProseP>
        <div class="text-xs text-gray-500">
          {{ blog.posted }}
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ blog: Blog }>();
</script>
