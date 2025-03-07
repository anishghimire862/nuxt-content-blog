<template>
  <div v-if="blog" class="p-4 group hover:bg-gray-50 transition-colors">
    <NuxtLink :to="`/${blog.slug}`" class="space-y-2">
      <ProseH5 class="transition-colors group-hover:text-blue-500">{{
        blog.title
      }}</ProseH5>
      <div class="pb-4 space-y-2">
        <ProseP>{{ blog.description }}</ProseP>
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
