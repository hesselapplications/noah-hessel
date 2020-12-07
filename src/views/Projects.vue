<template>
  <home-section label="Projects" color="#2C363F">
    <v-row>
      <v-col
        cols="6"
        md="4"
        xl="3"
        v-for="(project, index) in projects"
        :key="index"
      >
        <preview-card v-bind="project" @click="goToUrl(project.url)"></preview-card>
      </v-col>
    </v-row>
  </home-section>
</template>

<script>
import HomeSection from "@/components/HomeSection";
import PreviewCard from "@/components/PreviewCard";

export default {
  components: {
    HomeSection,
    PreviewCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  async created() {
    this.projects = await this.$api.getProjects();
  },
  methods: {
    goToUrl(url) {
      window.location.href = url;
    }
  }
};
</script>

