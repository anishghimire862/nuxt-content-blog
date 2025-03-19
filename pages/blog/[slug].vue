<script lang="ts" setup>
import AnishGhimire from "~/components/authors/AnishGhimire.vue";
const runtimeConfig = useRuntimeConfig();
const route = useRoute();

const { slug } = route.params;
const { data: blog, error } = await useAsyncData<Blog>("blog", () =>
  queryCollection("blog").where("slug", "=", slug).first()
);
if (error.value) {
  console.error("Error fetching blogs:", error.value);
}

if (blog.value) {
  useHead({
    title: blog.value.title,
    meta: [
      { name: "description", content: blog.value.description },

      { property: "og:title", content: blog.value.title },
      { property: "og:description", content: blog.value.description },
      {
        property: "og:image",
        content: blog.value.banner,
      },
      {
        property: "og:url",
        content: `https://sarvalekh.com/blog/${blog.value.slug}`,
      },
      { property: "og:type", content: "article" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: blog.value.title },
      { name: "twitter:description", content: blog.value.description },
      {
        name: "twitter:image",
        content: blog.value.banner,
      },
    ],
    link: [
      {
        rel: "canonical",
        href: `${runtimeConfig.public.domain}/blog/${blog.value.slug}`,
      },
      {
        rel: "sitemap",
        type: "application/xml",
        href: `${runtimeConfig.public.domain}/sitemap.xml`,
      },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blog.value.title,
          description: blog.value.description,
          image: blog.value.banner,
          url: `${runtimeConfig.public.domain}/blog/${blog.value.slug}`,
          author: { "@type": "Person", name: "Anish Ghimire" },
          datePublished: blog.value.posted,
          publisher: {
            "@type": "Organization",
            name: `${runtimeConfig.public.name}`,
            logo: {
              "@type": "ImageObject",
              url: `${runtimeConfig.public.domain}/sarvalekh.png`,
            },
          },
        }),
      },
    ],
  });
}

const authorComponent = computed(() => {
  if (blog?.value?.author === "anish-ghimire") {
    return AnishGhimire;
  }
  return AnishGhimire;
});
</script>

<template>
  <div v-if="blog" class="space-y-6 mt-6 p-2">
    <div class="flex justify-center">
      <h1 class="text-3xl font-bold text-gray-500 leading-tight">
        {{ blog.title }}
      </h1>
    </div>

    <div class="mx-auto max-w-md md:max-w-2xl space-y-6">
      <div
        v-if="blog.banner"
        class="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0"
      >
        <NuxtImg
          class="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          :alt="blog.bannerAlt"
          :src="blog.banner"
          loading="lazy"
          :placeholder="[1280, 720]"
          densities="x1 x2"
          format="webp"
          quality="80"
          fit="cover"
          preload
          width="1280"
          height="720"
        />
      </div>

      <ContentRenderer class="prose max-w-full" :value="blog" />
      <component :is="authorComponent" />
    </div>
  </div>
</template>
