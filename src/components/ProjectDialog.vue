<template>
  <v-dialog
    v-bind="$attrs"
    v-on="$listeners"
    overlay-opacity="0.75"
    max-width="500"
  >
    <v-card>
      <image-viewer :src="src"></image-viewer>
      <v-card-title class="text-h4">
        {{ title }}
      </v-card-title>

      <v-card-text>
        <div>
          <v-chip
            v-for="({ icon, title, color }, index) in categories"
            :key="index"
            class="mr-2 mb-2"
            :color="`${color} darken-2`"
            label
            outlined
            small
          >
            <v-icon small left :color="color">{{ icon }}</v-icon>
            <span>{{ title }}</span>
          </v-chip>
        </div>

        <block-content class="mt-4" :blocks="body" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import ImageViewer from "@/components/ImageViewer";
import BlockContent from "@/components/BlockContent";

export default {
  components: {
    ImageViewer,
    BlockContent,
  },
  props: {
    src: Array,
    title: String,
    body: Array,
    categories: Array,
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
  },
};
</script>