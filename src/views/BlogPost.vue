<template>
  <div>
    <app-navigation></app-navigation>

    <v-container v-if="post">
      <v-row justify="center">
        <v-col xl="6" lg="8" md="10" cols="12">
          <v-card>
            <image-viewer :src="post.src"></image-viewer>
            <v-divider></v-divider>
            <v-card-title class="text-h4 pb-0">
              {{ post.title }}
            </v-card-title>
            <v-card-text class="caption">{{ datePosted }}</v-card-text>
            <v-card-text>
              <block-content :blocks="post.body" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <share v-bind="post"></share>
    </v-container>
  </div>
</template>

<script>
import moment from "moment";
import ImageViewer from "@/components/ImageViewer";
import BlockContent from "@/components/BlockContent";
import AppNavigation from "@/components/AppNavigation";
import Share from "@/components/Share.vue";

export default {
  components: {
    ImageViewer,
    BlockContent,
    AppNavigation,
    Share,
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
      return moment(this.post.datePosted).format("MMMM Do YYYY");
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

