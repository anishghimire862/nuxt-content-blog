<template>
  <div v-if="author" class="space-y-4">
    <div class="flex space-x-4 items-center">
      <div class="w-8 h-8 overflow-hidden rounded-full flex-shrink-0">
        <NuxtImg
          class="w-full h-full object-cover"
          :alt="author.name"
          :src="author.image"
          format="webp"
          placeholder
          loading="lazy"
        />
      </div>

      <div class="flex space-x-2 pt-1">
        <h1 class="text-sm text-gray-600 leading-relaxed">
          {{ author.name }}
        </h1>
        <NuxtLink
          v-if="author.links.github"
          :to="author.links.github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="uil:github" class="text-gray-500 hover:text-blue-500" />
        </NuxtLink>
        <NuxtLink
          v-if="author.links.linkedin"
          :to="author.links.linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="uil:linkedin" class="text-gray-500 hover:text-blue-500" />
        </NuxtLink>
        <NuxtLink
          v-if="author.links.twitter"
          :to="author.links.twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="uil:twitter" class="text-gray-500 hover:text-blue-500" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { getAuthorDetails } from "~/utils/authors";

const props = defineProps<{ authorSlug: string }>();

const author = computed(() => getAuthorDetails(props.authorSlug));
</script>
