<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 4}`"
      @click="goToUrl"
      height="100%"
    >
      <!-- MULTIPLE IMAGES -->
      <v-img v-if="images.length == 1" :aspect-ratio="16/9" :src="require('@/assets/' + images[0])"></v-img>

      <!-- MULTIPLE IMAGES -->
      <v-responsive v-else :aspect-ratio="16/9" @click.stop>
        <v-carousel hide-delimiters height="auto">
          <v-carousel-item
            v-for="(image, index) in images"
            :key="index"
            :src="require('@/assets/' + image)"
          ></v-carousel-item>
        </v-carousel>
      </v-responsive>

      <v-divider></v-divider>

      <!-- TITLE -->
      <v-card-title class="title pb-2">{{title}}</v-card-title>

      <!-- DESCRIPTION -->
      <v-card-text class="grey--text text--darken-1 pt-1 font-italic">{{description}}</v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    images: Array,
    title: String,
    description: String,
    url: String
  },
  methods: {
    goToUrl() {
      window.location.href = this.url;
    }
  }
};
</script>