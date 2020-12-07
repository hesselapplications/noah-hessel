<template>
  <home-section label="Blog Posts" to="/blog" color="#434D60">
    <v-row>
      <!-- POSTS -->
      <v-col
        cols="6"
        md="4"
        xl="3"
        v-for="(post, index) in blogPosts"
        :key="index"
      >
        <preview-card
          v-bind="post"
          :to="`/blog/${post.slug.current}`"
        ></preview-card>
      </v-col>

      <!-- ALL POSTS -->
      <v-col cols="6" md="4" xl="3">
        <placeholder-card to="/blog" icon="mdi-arrow-right" label="All posts"></placeholder-card>
      </v-col>
    </v-row>
  </home-section>
</template>

<script>
import HomeSection from "@/components/HomeSection";
import PreviewCard from "@/components/PreviewCard";
import PlaceholderCard from "@/components/PlaceholderCard";

export default {
  components: {
    HomeSection,
    PreviewCard,
    PlaceholderCard,
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

