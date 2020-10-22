<template>
  <Section label="Blogs" class="blue-grey">
    <v-layout row wrap>
      <v-flex xs12 lg4 v-for="(post, index) in blogPosts" :key="index">
        <BlogCard
          :src="post.src"
          :title="post.title"
          :description="post.description"
          :uid="post.uid"
        ></BlogCard>
      </v-flex>
    </v-layout>
  </Section>
</template>

<script>
import Section from "@/components/Section";
import BlogCard from "@/components/BlogCard";

export default {
  components: {
    Section,
    BlogCard,
  },
  data() {
    return {
      blogPosts: [],
    };
  },
  async created() {
    this.blogPosts = await this.$api.getBlogPosts();
  },
};
</script>

