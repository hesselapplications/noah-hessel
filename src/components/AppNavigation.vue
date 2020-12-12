<template>
  <v-app-bar app dark elevate-on-scroll color="primary">
    <v-avatar size="40" color="secondary" class="mr-4">
      <v-img :src="src"></v-img>
    </v-avatar>
    <v-toolbar-title>Noah Hessel</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/blog">Blog</v-btn>
      <v-btn text to="/contact">Contact</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import api from "@/api.js";

export default {
  data() {
    return {
      src: null,
    };
  },
  async created() {
    this.src = await api.getMyPictureSrc();
  },
};
</script>

