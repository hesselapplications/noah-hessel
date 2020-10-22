<template>
  <Section label="Projects" class="deep-orange lighten-1">
    <v-layout row wrap>
      <v-flex xs12 lg4 v-for="(project, index) in projects" :key="index">
        <Project
          :src="project.src"
          :title="project.title"
          :description="project.description"
          :url="project.url"
        ></Project>
      </v-flex>
    </v-layout>
  </Section>
</template>

<script>
import Section from "@/components/Section";
import Project from "@/components/Project";

export default {
  components: {
    Section,
    Project
  },
  data() {
    return {
      projects: []
    };
  },
  async created() {
    this.projects = await this.$api.getProjects();
  },
};
</script>

