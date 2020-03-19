<template>
  <Section label="Projects" class="deep-orange lighten-1">
    <v-layout row wrap>
      <v-flex xs12 lg4 v-for="(project, index) in projects" :key="index">
        <Project
          :images="project.images"
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
      projects: [
        {
          images: [
            "snowblower/1.jpg",
            "snowblower/2.jpg",
            "snowblower/3.jpg",
            "snowblower/4.jpg",
            "snowblower/5.jpg",
            "snowblower/6.jpg"
          ],
          title: "Self Driving Snowblower",
          description:
            "Funded by a $10,000 grant from the Lemelson MIT InvenTeams program. Presented to peers and experts on MIT campus",
          url: "https://lemelson.mit.edu/teams/90"
        },
        {
          images: ["metrofit.png"],
          title: "Metrofit",
          description:
            "A website for helping people find a city to relocate to. Allows filtering based on temperature, precipitation, population, cost of living and unemployment",
          url: "https://metrofit.netlify.com"
        },
        {
          images: ["808designstudio.png"],
          title: "808 Design Studio",
          description: "My father's architectural firm, specializing in residential design services",
          url: "http://808designstudio.com"
        }
      ]
    };
  }
};
</script>

