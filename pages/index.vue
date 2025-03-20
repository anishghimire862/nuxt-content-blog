<template>
  <div class="container mx-auto px-4">
    <div v-if="blogs" class="max-w-3xl mx-auto">
      <div
        v-for="blog in blogs"
        :key="blog.slug"
        class="my-6 border-b border-gray-200"
      >
        <ArticlePreview :blog="blog" />
      </div>
    </div>
    <div v-else-if="error" class="text-red-500 text-center mt-6">
      Error fetching blogs: {{ error.message }}
    </div>
    <div v-else class="text-center mt-6 text-gray-500">Loading...</div>
  </div>
</template>

<script lang="ts" setup>
const { data: blogs, error } = await useAsyncData<Blog[]>("blog", () =>
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
      "tags"
    )
    .where("published", "=", true)
    .order("posted", "DESC")
    .all()
);
if (error.value) {
  console.error("Error fetching blogs:", error.value);
}
</script>
