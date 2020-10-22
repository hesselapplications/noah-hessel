<template>
  <v-container v-if="blogPost">
    <v-row justify="center">
      <v-col xl="6" lg="8" md="10" cols="12">
        <v-card>
          <image-viewer :src="blogPost.src"></image-viewer>
          <prismic-rich-text :field="blogPost.title" />
          <prismic-rich-text :field="blogPost.description" />
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
    this.blogPost = await this.$api.getBlogPost(this.uid);
  },
};
</script>

