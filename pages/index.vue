<template>
  <div class="mx-auto container space-y-8 p-4">
    <div class="py-10 space-y-4">
      <h3 class="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
        Technical Blogs on AI, Software Development & More
      </h3>
      <p class="text-muted-foreground lg:text-lg">
        Explore blogs on AI, software development, tutorials, and industry
        insights. Learn from personal experiences, tips, and expert advice for
        tech enthusiasts.
      </p>
      <div class="flex justify-center">
        <NuxtLink to="/blog">
          <Button class="group gap-2">
            Browse Blogs
            <span class="ml-1 text-xs">→</span>
          </Button>
        </NuxtLink>
      </div>
    </div>
    <div v-if="featuredBlogs" class="space-y-8 max-w-3xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-800 leading-relaxed">
        Featured Articles
      </h1>

      <div v-for="blog in featuredBlogs" :key="blog.slug">
        <ArticlePreview :blog="blog" />
      </div>
    </div>
    <div
      v-else-if="error"
      class="text-2xl font-bold text-red-900 leading-relaxed text-center mt-6"
    >
      Error fetching blogs: {{ error.message }}
    </div>
    <div
      v-else
      class="text-center mt-6 text-2xl font-bold text-red-900 leading-relaxed"
    >
      Loading...
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: featuredBlogs, error } = await useAsyncData<Blog[]>("blog", () =>
  queryCollection("blog")
    .select(
      "title",
      "slug",
      "description",
      "authorSlug",
      "posted",
      "published",
      "banner",
      "bannerAlt",
      "tags",
      "featured"
    )
    .where("published", "=", true)
    .where("featured", "=", true)
    .order("posted", "DESC")
    .all()
);
if (error.value) {
  console.error("Error fetching blogs:", error.value);
}
</script>
