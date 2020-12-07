<template>
  <Section label="Projects" class="deep-orange lighten-1">
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
  </Section>
</template>

<script>
import Section from "@/components/Section";
import PreviewCard from "@/components/PreviewCard";

export default {
  components: {
    Section,
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

