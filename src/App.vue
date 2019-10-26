<template>
  <v-app>
    <v-content class="grey lighten-4">
      <div :class="{'sidebar-wrapper': $vuetify.breakpoint.mdAndUp}">
        <AboutMe></AboutMe>
      </div>
      <div :class="{'content-wrapper': $vuetify.breakpoint.mdAndUp}">
        <Experience></Experience>
        <Skills></Skills>
        <Projects></Projects>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import AboutMe from "./views/AboutMe";
import Experience from "./views/Experience";
import Projects from "./views/Projects";
import Skills from "./views/Skills";

export default {
  components: {
    AboutMe,
    Experience,
    Projects,
    Skills
  }
};
</script>
<style>
.sidebar-wrapper {
  position: fixed;
  height: 100%;
  width: 35%;
}

.content-wrapper {
  width: 65%;
  margin-left: 35%;
}

@keyframes slideX {
  0% {
    transform: translateX(-10%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideY {
  0% {
    transform: translateY(-10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-x {
  animation: 1s ease-out 0s 1 slideX;
}

.slide-y {
  animation: 1s ease-out 0s 1 slideY;
}
</style>


