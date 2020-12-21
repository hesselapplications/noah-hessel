<template>
  <home-section label="Skills" color="skills">
    <v-row :dense="$vuetify.breakpoint.smAndDown">
      <v-col cols="6" lg="3" v-for="(skill, index) in skills" :key="index">
        <skill v-bind="skill" class="my-2"></skill>
      </v-col>
    </v-row>
  </home-section>
</template>

<script>
import HomeSection from "@/components/HomeSection";
import Skill from "@/components/Skill";

export default {
  components: {
    HomeSection,
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

