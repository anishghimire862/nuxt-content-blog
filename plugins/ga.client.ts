declare global {
  interface Window {
    dataLayer: any[];
    gtag: Function;
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const loadAnalyticsScript: () => void = () => {
    if (localStorage.getItem('cookie-consent')) {
      console.log('Cookie consent has been granted. Setting up analytics..');

      const runtimeConfig = useRuntimeConfig();
      const gaScript = document.createElement('script');
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${runtimeConfig.public.GOOGLE_ANALYTICS_ID}`;
      gaScript.async = true;
      document.head.appendChild(gaScript);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }

      gaScript.onload = () => {
        console.log('Analytics script loaded');
        gtag('js', new Date());
        gtag('config', runtimeConfig.public.GOOGLE_ANALYTICS_ID);

        gtag('consent', 'update', {
          'ad_storage': 'granted',
          'analytics_storage': 'granted',
        });

        console.log('Analytics script initialized and consent granted');
      };
    } else {
      console.log('Cookie consent has not been granted. Skip setting analytics..');
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'consent',
        ad_storage: 'denied',
        analytics_storage: 'denied',
      });
    }
  };

  nuxtApp.provide('loadAnalyticsScript', loadAnalyticsScript);
});