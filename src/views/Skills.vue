<template>
  <Section label="Skills" class="blue-grey darken-3">
    <v-row>
      <v-col cols="6" lg="3" v-for="(skill, index) in skills" :key="index">
        <skill v-model="skills[index]" class="my-2"></skill>
      </v-col>
    </v-row>
  </Section>
</template>

<script>
import Section from "@/components/Section";
import Skill from "@/components/Skill";

export default {
  components: {
    Section,
    Skill,
  },
  data() {
    return {
      skills: [],
    };
  },
  async created() {
    this.skills = await this.$api.getSkills();
  },
};
</script>

