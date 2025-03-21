<template>
  <div>
    <div
      class="w-full shadow-lg shadow-gray-200 flex justify-between p-4 items-center bg-white"
    >
      <NuxtLink to="/">
        <span class="text-2xl font-bold tracking-wide text-blue-600">
          Sarva Lekh
        </span>
      </NuxtLink>
      <div>
        <NuxtLink to="/">
          <Button
            variant="ghost"
            class="text-gray-700 transition-all duration-300 ease-in-out hover:font-bold hover:text-blue-600 text-md"
            :class="{
              'underline decoration-4 decoration-blue-600':
                currentRoute === '/',
            }"
          >
            Home
          </Button>
        </NuxtLink>
      </div>
    </div>

    <NuxtLoadingIndicator />
    <NuxtPage />

    <CookieConsentBanner />
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const { gtag, initialize } = useGtag();

const currentRoute = ref(route.path);

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
</script>
