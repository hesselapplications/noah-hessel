<template>
  <v-layout v-if="loaded" align-center justify-center fill-height class="white">
    <v-flex shrink class="ma-4 slide-x">
      <v-avatar size="175" class="mb-4">
        <img :src="src" />
      </v-avatar>
      <div
        class="display-2 text-uppercase font-weight-black grey--text text--darken-3 mb-3"
      >
        <prismic-rich-text :field="aboutMe" />
      </div>
      <div>
        <v-tooltip v-for="(button, index) in buttons" :key="index" bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
              :color="button.color"
              fab
              depressed
              dark
              small
              class="ml-0 mr-3"
              :href="button.link"
            >
              <v-icon>{{ button.icon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ button.label }}</span>
        </v-tooltip>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
      src: null,
      aboutMe: null,
      buttons: [],
    };
  },
  async created() {
    var { data } = await this.$prismic.client.getSingle("about_me");

    this.aboutMe = data.about_me;
    this.src = data.my_picture.url;
    this.buttons = data.links;
    this.loaded = true;
  },
};
</script>

