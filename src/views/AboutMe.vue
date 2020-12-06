<template>
  <v-layout v-if="aboutMe" align-center justify-center fill-height class="white">
    <v-flex shrink class="ma-4 slide-x">
      <v-avatar size="175" class="mb-4">
        <img :src="aboutMe.src" />
      </v-avatar>
      <div
        class="display-2 text-uppercase font-weight-black grey--text text--darken-3 mb-3"
      >
        <block-content :blocks="aboutMe.aboutMe"></block-content>
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
              @click="goToUrl(link.url)"
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
import BlockContent from "@/components/BlockContent"

export default {
  components: {
    BlockContent
  },
  data() {
    return {
      aboutMe: null
    };
  },
  async created() {
    this.aboutMe = await api.getAboutMe();
  },
  methods: {
    goToUrl(url) {
      const rootUrl = "https://noahhessel.com"
      if (url.includes("noahhessel.com")) {
        const path = url.replace(rootUrl, "");
        this.$router.push(path);

      } else {
        window.location.href = url;
      }
    }
  }
};
</script>

