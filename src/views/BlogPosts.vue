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
    BlogCard
  },
  data() {
    return {
      blogPosts: [],
    };
  },
  async created() {
    var { results } = await this.$prismic.client.query(
      this.$prismic.Predicates.at("document.type", "blog_post"),
      { orderings: "[my.blog_post.first_publication_date]" }
    );

    this.blogPosts = results.map(result => {
      return {
        src: result.data.heading_images.map(heading_image => heading_image.heading_image.url),
        title: result.data.title[0].text,
        description: result.data.description[0].text,
        uid: result.uid
      }
    });
  },
};
</script>

