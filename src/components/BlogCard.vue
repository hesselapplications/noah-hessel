<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 4}`"
      @click="goToBlogPost"
      height="100%"
    >
      <!-- IMAGES -->
      <image-viewer :src="src"></image-viewer>

      <v-divider></v-divider>

      <!-- TITLE -->
      <v-card-title class="title pb-2">{{title}}</v-card-title>

      <!-- DESCRIPTION -->
      <v-card-text class="grey--text text--darken-1 pt-1 font-italic">{{description}}</v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import ImageViewer from "@/components/ImageViewer"

export default {
  components: {
    ImageViewer
  },
  props: {
    src: Array,
    title: String,
    description: String,
    uid: String
  },
  methods: {
    goToBlogPost() {
      this.$router.push(this.uid);
    }
  }
};
</script>