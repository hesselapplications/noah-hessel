<template>
  <v-container v-if="post">
    <v-btn class="mt-11" color="primary" fab dark absolute top left to="/">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-row justify="center">
      <v-col xl="6" lg="8" md="10" cols="12">
        <v-card>
          <image-viewer :src="post.src"></image-viewer>
          <v-divider></v-divider>
          <v-card-title class="pb-0">
            {{ post.title}}
          </v-card-title>
          <v-card-text>{{ datePosted }}</v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <block-content :blocks="post.body" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from "moment";
import ImageViewer from "@/components/ImageViewer";
import BlockContent from "@/components/BlockContent"

export default {
  components: {
    ImageViewer,
    BlockContent
  },
  props: {
    slug: null,
  },
  data() {
    return {
      post: null,
    };
  },
  computed: {
    datePosted() {
      return moment(this.post.datePosted).format("MMM Do YYYY");
    },
  },
  async created() {
    this.post = await this.$api.getBlogPost(this.slug);
  },
};
</script>

