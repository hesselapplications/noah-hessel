<template>
  <div>
    <v-app-bar app dark elevate-on-scroll color="primary">
      <!-- NAV ICON -->
      <v-app-bar-nav-icon
        v-if="isSmallScreen"
        @click.stop="drawer = !drawer"
        class="mr-1"
      ></v-app-bar-nav-icon>

      <!-- AVATAR -->
      <v-avatar @click="goHome" size="35" color="secondary" class="mr-4">
        <v-img :src="src"></v-img>
      </v-avatar>

      <!-- TITLE -->
      <v-toolbar-title @click="goHome">Noah Hessel</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- DESKTOP NAV -->
      <v-toolbar-items v-if="!isSmallScreen">
        <v-btn v-for="{ title, icon, to } in pages" :key="to" text :to="to" small>
          <v-icon left>{{ icon }}</v-icon>
          {{ title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- MOBILE NAV -->
    <v-navigation-drawer
      v-if="isSmallScreen"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list nav dense>
        <v-list-item
          v-for="{ title, icon, to } in pages"
          :key="to"
          text
          :to="to"
          color="accent"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import api from "@/api.js";

export default {
  data() {
    return {
      drawer: false,
      src: null,
      pages: [
        {
          title: "Home",
          icon: "mdi-home",
          to: "/",
        },
        {
          title: "Blog",
          icon: "mdi-text-box",
          to: "/blog",
        },
        {
          title: "Contact",
          icon: "mdi-email",
          to: "/contact",
        },
      ],
    };
  },
  computed: {
    isSmallScreen() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
  async created() {
    this.src = await api.getMyPictureSrc();
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

