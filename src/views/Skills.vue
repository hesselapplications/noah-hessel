<template>
  <Section label="Skills" class="blue-grey darken-3">
    <v-layout row wrap>
      <Skill class="my-2" v-for="(skill, index) in skills" :key="index" v-model="skills[index]"></Skill>
    </v-layout>
  </Section>
</template>

<script>
import Section from "@/components/Section";
import Skill from "@/components/Skill";

export default {
  components: {
    Section,
    Skill
  },
  data() {
    return {
      skills: [
        {
          icon: "mdi-language-html5",
          label: "HTML",
          level: 80,
          color: "deep-orange"
        },
        {
          icon: "mdi-language-css3",
          label: "CSS",
          level: 60,
          color: "blue"
        },
        {
          icon: "mdi-language-javascript",
          label: "Javascript",
          level: 70,
          color: "amber"
        },
        {
          icon: "mdi-vuetify",
          label: "Vuetify",
          level: 90,
          color: "blue lighten-2"
        },
        {
          icon: "mdi-vuejs",
          label: "Vue",
          level: 90,
          color: "green lighten-1"
        },
        {
          icon: "mdi-leaf",
          label: "Spring",
          level: 90,
          color: "green darken-2"
        },
        {
          icon: "mdi-android",
          label: "Android",
          level: 50,
          color: "green"
        },
        {
          icon: "mdi-database",
          label: "SQL",
          level: 70,
          color: "blue-grey lighten-2"
        },
        {
          icon: "mdi-git",
          label: "Git",
          level: 70,
          color: "orange darken-2"
        },
        {
          icon: "mdi-language-java",
          label: "Java",
          level: 90,
          color: "red lighten-1"
        }
      ]
    };
  }
};
</script>

