<template>
  <div>
    <app-navigation></app-navigation>
    <v-container>
      <v-row>
        <v-col
          cols="6"
          md="4"
          lg="3"
          xl="2"
          v-for="(post, index) in blogPosts"
          :key="index"
        >
          <preview-card v-bind="post" :to="`blog/${post.slug.current}`"></preview-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";
import PreviewCard from "@/components/PreviewCard";

export default {
  components: {
    AppNavigation,
    PreviewCard,
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

