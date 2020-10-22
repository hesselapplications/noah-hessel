<template>
  <!-- MULTIPLE IMAGES -->
  <v-responsive
    v-if="src.length > 1"
    :aspect-ratio="aspectRatio"
    @click.stop
  >
    <v-carousel hide-delimiters show-arrows-on-hover height="auto" cycle>
      <v-carousel-item
        v-for="(source, index) in src"
        :aspect-ratio="aspectRatio"
        :key="index"
        :src="source"
      ></v-carousel-item>
    </v-carousel>
  </v-responsive>

  <!-- SINGLE IMAGE -->
  <v-img v-else :aspect-ratio="aspectRatio" :src="src[0]"></v-img>
</template>

<script>
export default {
  props: {
    src: {
      type: Array,
      required: true,
    },
    aspectRatio: {
      type: Number,
      default: 16 / 9,
    },
  }
};
</script>