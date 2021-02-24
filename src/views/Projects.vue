<template>
  <home-section label="Projects" color="projects">
    <div>
      <!-- CARDS -->
      <v-row :dense="$vuetify.breakpoint.smAndDown">
        <v-col
          cols="6"
          md="4"
          xl="3"
          v-for="(project, index) in projects"
          :key="index"
        >
          <preview-card
            v-bind="project"
            @click="showProject(project)"
          ></preview-card>
        </v-col>
      </v-row>

      <!-- DIALOG -->
      <project-dialog
        v-if="selectedProject"
        v-model="dialog"
        v-bind="selectedProject"
      />
    </div>
  </home-section>
</template>

<script>
import HomeSection from "@/components/HomeSection";
import PreviewCard from "@/components/PreviewCard";
import ProjectDialog from "@/components/ProjectDialog";

export default {
  components: {
    HomeSection,
    PreviewCard,
    ProjectDialog,
  },
  data() {
    return {
      projects: [],
      dialog: false,
      selectedProject: null,
    };
  },
  async created() {
    this.projects = await this.$api.getProjects();
  },
  methods: {
    showProject(project) {
      this.selectedProject = project;
      this.dialog = true;
    },
  },
};
</script>

