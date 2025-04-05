export interface Blog {
  title: string;
  slug: string;
  description: string;
  authorSlug: string;
  posted: Date;
  published: boolean;
  banner: string;
  bannerAlt: string;
  tags: string[];
  featured: boolean;
}

declare module '#app' {
  interface NuxtApp {
    $loadAnalyticsScript: () => void;
  }
}
