<template>
  <v-card v-bind="$attrs" v-on="$listeners" hover height="100%">
    <!-- IMAGES -->
    <image-viewer v-if="!$vuetify.breakpoint.mobile" :src="src"></image-viewer>

    <v-divider></v-divider>

    <!-- TITLE -->
    <v-card-title class="text-subtitle-2 font-weight-bold pb-0">{{
      title
    }}</v-card-title>

    <!-- DESCRIPTION -->
    <v-card-text class="text-caption grey--text text--darken-1 pt-1">{{
      description
    }}</v-card-text>
  </v-card>
</template>

<script>
import ImageViewer from "@/components/ImageViewer";

export default {
  components: {
    ImageViewer,
  },
  props: {
    src: Array,
    title: String,
    description: String,
  },
};
</script>