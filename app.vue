<template>
  <div>
    <div
      class="w-full shadow-lg shadow-gray-200 flex justify-between p-2 items-center"
    >
      <NuxtLink to="/">
        <span
          class="font-sans text-xl subpixel-antialiased font-extrabold tracking-wide text-blue-500"
        >
          Sarva Lekh
        </span>
      </NuxtLink>
      <div>
        <NuxtLink to="/">
          <Button
            variant="ghost"
            class="text-gray-600 transition-all duration-300 ease-in-out hover:font-bold hover:text-blue-500"
            :class="{
              'underline decoration-4 decoration-blue-500':
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
const { $loadAnalyticsScript } = useNuxtApp();

const route = useRoute();

const currentRoute = ref(route.path);

watchEffect(() => {
  currentRoute.value = route.path ?? "/";
});

useHead({
  titleTemplate: `%s | ${runtimeConfig.public.name ?? "Sarva Lekh"}`,
});

onMounted(() => {
  $loadAnalyticsScript();
});
</script>
