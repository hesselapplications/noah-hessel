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
    var { results } = await this.$prismic.client.query(
      this.$prismic.Predicates.at("document.type", "project"),
      { orderings: "[my.project.first_publication_date]" }
    );

    this.projects = results.map(result => {
      return {
        src: result.data.heading_images.map(heading_image => heading_image.heading_image.url),
        title: result.data.title[0].text,
        description: result.data.description[0].text,
        url: result.data.project_link.url
      }
    });
  },
};
</script>

