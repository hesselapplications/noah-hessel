<template>
  <Section label="Blog" class="blue-grey">
    <v-layout row wrap>
      <v-flex xs12 lg4 v-for="(post, index) in blogPosts" :key="index">
        <BlogCard :post="post"></BlogCard>
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

