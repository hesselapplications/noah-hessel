<template>
  <v-container v-if="blogPost">
    <v-row justify="center">
      <v-col xl="6" lg="8" md="10" cols="12">
        <v-card>
          <image-viewer :src="blogPost.data.heading_image.url"></image-viewer>
          <prismic-rich-text :field="blogPost.data.title" />
          <prismic-rich-text :field="blogPost.data.description" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ImageViewer from "@/components/ImageViewer";

export default {
  components: {
    ImageViewer,
  },
  props: {
    uid: null,
  },
  data() {
    return {
      blogPost: null,
    };
  },
  async created() {
    this.blogPost = await this.$prismic.client.getByUID("blog_post", this.uid);
    console.log(this.blogPost);
  },
};
</script>

