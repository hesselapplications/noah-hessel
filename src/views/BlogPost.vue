<template>
  <v-container v-if="blogPost">
    <v-btn class="mt-11" color="primary" fab dark absolute top left to="/">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-row justify="center">
      <v-col xl="6" lg="8" md="10" cols="12">
        <v-card>
          <image-viewer :src="blogPost.src"></image-viewer>
          <v-divider></v-divider>
          <v-card-title>
            <prismic-rich-text :field="blogPost.title" />
          </v-card-title>
          <v-card-text>{{ datePosted }}</v-card-text>
          <v-card-text>
            <prismic-rich-text :field="blogPost.description" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from "moment";
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
  computed: {
    datePosted() {
      return moment(this.blogPost.datePosted).format('MMM Do YYYY');
    }
  },
  async created() {
    this.blogPost = await this.$api.getBlogPost(this.uid);
  }
};
</script>

