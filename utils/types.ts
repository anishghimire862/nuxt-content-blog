export interface Blog {
  title: string;
  slug: string;
  description: string;
  authorSlug: string;
  posted: string;
  published: boolean;
  banner: string;
  bannerAlt: string;
  tags: string[];
}

declare module '#app' {
  interface NuxtApp {
    $loadAnalyticsScript: () => void;
  }
}
