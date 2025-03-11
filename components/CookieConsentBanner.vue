<template>
  <!-- 
    TODO: Make cookie consent more granular that allows users to select from the following:
    'ad_user_data': 'granted',
    'ad_personalization': 'granted',
    'ad_storage': 'granted',
    'analytics_storage': 'granted',
  -->
  <div
    v-if="showBanner"
    class="bg-gray-50 fixed bottom-4 right-4 text-gray-500 px-4 py-2 rounded-lg shadow-md flex items-center gap-3"
  >
    <span class="text-sm">
      We use cookies for analytics, ads, and to improve user experience.
    </span>
    <Button
      variant="ghost"
      class="text-gray-600 transition-all duration-300 ease-in-out hover:text-gray-500"
      @click="acceptConsent"
    >
      Accept
    </Button>
  </div>
</template>

<script setup lang="ts">
const { gtag, initialize } = useGtag();
import { ref, onMounted } from "vue";
const showBanner = ref(false);

onMounted(() => {
  if (!localStorage.getItem("cookie-consent")) {
    showBanner.value = true;
  }
});

const acceptConsent = () => {
  localStorage.setItem("cookie-consent", "true");
  showBanner.value = false;

  initialize();
  gtag("consent", "update", {
    ad_user_data: "granted",
    ad_personalization: "granted",
    ad_storage: "granted",
    analytics_storage: "granted",
  });
};
</script>
