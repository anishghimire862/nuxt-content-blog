<template>
  <div class="space-y-4 border border-gray-100 p-4 shadow-md">
    <div class="flex space-x-4 items-center">
      <div class="w-12 h-12 overflow-hidden rounded-full flex-shrink-0">
        <NuxtImg
          class="w-full h-full object-cover"
          alt="Anish Ghimire"
          format="webp"
          src="/anish-ghimire.jpeg"
          placeholder
          loading="lazy"
        />
      </div>
      <div class="space-y-0.5">
        <div class="flex items-center space-x-2">
          <h1 class="text-sm font-semibold text-black">Anish Ghimire</h1>
          <NuxtLink
            to="https://github.com/anishghimire862"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="uil:github" class="text-gray-500 hover:text-blue-500" />
          </NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/in/anishghimire862"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              name="uil:linkedin"
              class="text-gray-500 hover:text-blue-500"
            />
          </NuxtLink>
          <NuxtLink
            to="https://x.com/anishghimire862"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              name="uil:twitter"
              class="text-gray-500 hover:text-blue-500"
            />
          </NuxtLink>
        </div>
        <h2 class="text-sm font-medium text-gray-500">
          Full-stack software developer
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
