<template>
  <div>
    <v-app-bar flat dark color="primary">
      <v-btn icon @click="$router.go(-1)"><v-icon>mdi-arrow-left</v-icon></v-btn>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/blog">Blog</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-container v-if="post">
      <v-row justify="center">
        <v-col xl="6" lg="8" md="10" cols="12">
          <v-card>
            <image-viewer :src="post.src"></image-viewer>
            <v-divider></v-divider>
            <v-card-title class="pb-0">
              {{ post.title }}
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
  </div>
</template>

<script>
import moment from "moment";
import ImageViewer from "@/components/ImageViewer";
import BlockContent from "@/components/BlockContent";

export default {
  components: {
    ImageViewer,
    BlockContent,
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
    try {
      this.post = await this.$api.getBlogPost(this.slug);
    } catch (error) {
      this.$router.push("/");
    }
  },
};
</script>

