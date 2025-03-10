<script lang="ts" setup>
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

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

      {
        property: "og:image",
        content: blog.value.banner,
      },
      { property: "og:title", content: blog.value.title },
      { property: "og:description", content: blog.value.description },

      {
        name: "twitter:image",
        content: blog.value.banner,
      },
      { name: "twitter:title", content: blog.value.title },
      { name: "twitter:description", content: blog.value.description },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    link: [
      {
        rel: "canonical",
        href: `${runtimeConfig.public.domain}/${slug}`,
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
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blog.value.title,
          description: blog.value.description,
          image: blog.value.banner,
          url: `${runtimeConfig.public.domain}/${slug}`,
          author: { "@type": "Person", name: "Anish Ghimire" },
          datePublished: blog.value.posted,
          publisher: {
            "@type": "Organization",
            name: `${runtimeConfig.public.name}`,
            logo: {
              "@type": "ImageObject",
              url: `${runtimeConfig.public.domain}/logo.png`,
            },
          },
        }),
      },
    ],
  });
}
</script>

<template>
  <div v-if="blog" class="space-y-6 mt-6 p-2">
    <div class="flex justify-center">
      <ProseH1>{{ blog.title }}</ProseH1>
    </div>

    <div class="mx-auto max-w-md md:max-w-2xl space-y-6">
      <div
        class="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0"
      >
        <NuxtImg
          class="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          :alt="blog.title"
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

      <ContentRenderer class="prose" :value="blog" />

      <div class="space-y-4 border border-gray-100 p-4 shadow-md">
        <div class="flex space-x-4 items-center">
          <div class="w-12 h-12 overflow-hidden rounded-full flex-shrink-0">
            <NuxtImg
              class="w-full h-full object-cover"
              alt="Anish Ghimire"
              src="/img/anish-ghimire.jpeg"
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
                <Icon
                  name="uil:github"
                  class="text-gray-500 hover:text-blue-500"
                />
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

        <p class="space-y-2 text-gray-500 text-sm">
          I’m a full-stack software developer. I love solving problems,
          improving user experiences, and sharing knowledge through blogs and
          videos. Always eager to grow, I embrace challenges that help me learn
          and build impactful, scalable solutions.
        </p>
      </div>
    </div>
  </div>
</template>
