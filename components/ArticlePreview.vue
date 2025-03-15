<template>
  <div v-if="blog" class="p-4 group hover:bg-gray-50 transition-colors">
    <NuxtLink :to="`/blog/${blog.slug}`" class="space-y-2">
      <h1
        class="transition-colors group-hover:text-blue-500 text-1xl font-bold text-gray-500 leading-tight"
      >
        {{ blog.title }}
      </h1>
      <div
        class="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0"
      >
        <NuxtImg
          class="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          :alt="blog.bannerAlt"
          :src="blog.banner"
          loading="eager"
          :placeholder="[1280, 720]"
          densities="x1 x2"
          format="webp"
          quality="80"
          fit="cover"
          preload
          width="1280"
          height="720"
        />
      </div>

      <div class="pb-4 space-y-2">
        <ProseP class="text-balance">{{ blog.description }}</ProseP>
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
