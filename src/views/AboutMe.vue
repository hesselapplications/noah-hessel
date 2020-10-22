<template>
  <v-layout v-if="aboutMe" align-center justify-center fill-height class="white">
    <v-flex shrink class="ma-4 slide-x">
      <v-avatar size="175" class="mb-4">
        <img :src="aboutMe.src" />
      </v-avatar>
      <div
        class="display-2 text-uppercase font-weight-black grey--text text--darken-3 mb-3"
      >
        <prismic-rich-text :field="aboutMe.aboutMe" />
      </div>
      <div>
        <v-tooltip v-for="(link, index) in aboutMe.links" :key="index" bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
              :color="link.color"
              fab
              depressed
              dark
              small
              class="ml-0 mr-3"
              :href="link.link"
            >
              <v-icon>{{ link.icon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ link.label }}</span>
        </v-tooltip>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import api from "@/api.js"

export default {
  data() {
    return {
      aboutMe: null
    };
  },
  async created() {
    this.aboutMe = await api.getAboutMe();
  },
};
</script>

