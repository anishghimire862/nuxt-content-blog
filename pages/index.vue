<template>
  <div v-if="blogs" class="mx-auto max-w-md md:max-w-1xl">
    <div v-for="blog in blogs" class="my-4 border-b border-b-gray-200">
      <ArticlePreview v-if="blog" :blog="blog" :key="blog.slug" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: blogs, error } = await useAsyncData<Blog[]>("blog", () =>
  queryCollection("blog")
    .select(
      "title",
      "slug",
      "description",
      "author",
      "posted",
      "published",
      "banner",
      "bannerAlt"
    )
    .where("published", "=", true)
    .all()
);
if (error.value) {
  console.error("Error fetching blogs:", error.value);
}
</script>
