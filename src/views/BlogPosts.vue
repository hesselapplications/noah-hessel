<template>
  <home-section label="Blog Posts" to="/blog" color="#434D60">
    <v-row>
      <v-col
        cols="6"
        md="4"
        xl="3"
        v-for="(post, index) in blogPosts"
        :key="index"
      >
        <preview-card v-bind="post" :to="`blog/${post.slug.current}`"></preview-card>
      </v-col>
    </v-row>
  </home-section>
</template>

<script>
import HomeSection from "@/components/HomeSection";
import PreviewCard from "@/components/PreviewCard";

export default {
  components: {
    HomeSection,
    PreviewCard
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

