<template>
  <v-layout align-center justify-center fill-height class="white">
      <v-flex shrink class="ma-4 slide-x">
        <v-avatar size="175" class="mb-4">
          <img :src="require('@/assets/me.jpg')" />
        </v-avatar>
        <div class="display-2 text-uppercase font-weight-black grey--text text--darken-3 mb-3">
          Noah Hessel
          <br />Full Stack Dev
        </div>
        <div>
          <v-tooltip v-for="(button, index) in buttons" :key="index" bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                v-on="on"
                :color="button.color"
                icon
                dark
                large
                class="ml-0 mr-3"
                :href="button.url"
              >
                <v-icon>{{button.icon}}</v-icon>
              </v-btn>
            </template>
            <span>{{button.label}}</span>
          </v-tooltip>
        </div>
      </v-flex>
    </v-slide-x-transition>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          icon: "mdi-gmail",
          label: "Email",
          url: "mailto:nwhessel@gmail.com",
          color: "red"
        },
        {
          icon: "mdi-linkedin",
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/noahhessel",
          color: "blue"
        },
        {
          icon: "mdi-file-document",
          label: "Resume",
          url:
            "https://docs.google.com/document/d/1EgYaVc7SsUYpegLAES_rkvtLFKeLo1HedruMgyEYKx8/edit?usp=sharing",
          color: "teal"
        }
      ]
    };
  }
};
</script>

