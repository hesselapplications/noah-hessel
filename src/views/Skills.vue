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
      skills: []
    };
  },
  async created() {
    this.skills = await this.$api.getSkills();
  }
};
</script>

