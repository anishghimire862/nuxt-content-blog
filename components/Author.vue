<template>
  <div
    v-if="author"
    class="space-y-4 border border-gray-100 p-6 shadow-md rounded-lg"
  >
    <div class="flex space-x-4 items-center">
      <div class="w-16 h-16 overflow-hidden rounded-full flex-shrink-0">
        <NuxtImg
          class="w-full h-full object-cover"
          :alt="author.name"
          :src="author.image"
          format="webp"
          placeholder
          loading="lazy"
        />
      </div>
      <div class="space-y-1">
        <div class="flex items-center space-x-2">
          <h1 class="text-lg font-semibold text-gray-900 leading-relaxed">
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
            <Icon
              name="uil:linkedin"
              class="text-gray-500 hover:text-blue-500"
            />
          </NuxtLink>
          <NuxtLink
            v-if="author.links.twitter"
            :to="author.links.twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              name="uil:twitter"
              class="text-gray-500 hover:text-blue-500"
            />
          </NuxtLink>
        </div>
        <h2 class="text-sm font-medium text-gray-600 leading-relaxed">
          {{ author.title }}
        </h2>
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
