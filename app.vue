<template>
  <div>
    <section class="relative w-full flex items-center bg-white py-2">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <nav class="flex items-center justify-between">
          <div class="flex items-center">
            <NuxtLink to="/">
              <span class="text-2xl font-bold text-blue-600">SL</span>
            </NuxtLink>
          </div>

          <div class="hidden md:flex items-center space-x-8">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-gray-600 hover:text-gray-900"
              :class="isActive(item.href) ? 'font-bold text-gray-900' : ''"
            >
              {{ item.name }}
            </a>
          </div>

          <div class="md:hidden">
            <Button variant="ghost" @click="isOpen = !isOpen">
              <Menu v-if="!isOpen" class="h-6 w-6" />
              <X v-else class="h-6 w-6" />
            </Button>
          </div>
        </nav>

        <div
          v-if="isOpen"
          class="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 py-4"
        >
          <div class="container mx-auto px-4">
            <div class="flex flex-col space-y-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="text-gray-600 hover:text-gray-900"
              >
                {{ item.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <div
      class="w-full shadow-lg shadow-gray-200 flex justify-between p-4 items-center bg-white relative"
    >
      <NuxtLink to="/" class="flex items-center space-x-2">
        <span class="text-2xl font-semibold text-blue-600"> Sarva Lekh </span>
      </NuxtLink>
      <div class="flex space-x-4">
        <NuxtLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.to"
          class="relative"
        >
          <Button
            variant="ghost"
            class="text-gray-700 transition-all duration-300 ease-in-out hover:text-blue-600"
            :class="{
              'font-bold text-blue-600': isActive(item.to),
            }"
          >
            {{ item.name }}
          </Button>
          <div
            v-if="isActive(item.to)"
            class="absolute bottom-0 left-0 w-full h-1 bg-blue-600"
          ></div>
        </NuxtLink>
      </div>
    </div> -->

    <NuxtLoadingIndicator />
    <NuxtPage />

    <CookieConsentBanner />
  </div>
</template>

<script setup lang="ts">
import { Menu, X } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const { gtag, initialize } = useGtag();

const currentRoute = ref(route.path);
const isOpen = ref(false);

watchEffect(() => {
  currentRoute.value = route.path ?? "/";
});

useHead({
  titleTemplate: `%s | ${runtimeConfig.public.name ?? "Sarva Lekh"}`,
});

onMounted(() => {
  if (localStorage.getItem("cookie-consent")) {
    initialize();
    gtag("consent", "update", {
      ad_user_data: "granted",
      ad_personalization: "granted",
      ad_storage: "granted",
      analytics_storage: "granted",
    });
  }
});

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blog" },
];

const isActive = (path: string) => {
  if (path === "/blog") {
    return currentRoute.value.startsWith("/blog");
  }
  return currentRoute.value === path;
};
</script>
