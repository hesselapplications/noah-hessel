<template>
  <Section label="Blog Posts" to="/blog" class="blue-grey">
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
  </Section>
</template>

<script>
import Section from "@/components/Section";
import PreviewCard from "@/components/PreviewCard";

export default {
  components: {
    Section,
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

