<template>
  <div>
    <div :class="{ 'sidebar-wrapper': $vuetify.breakpoint.mdAndUp }">
      <about-me></about-me>
    </div>
    <div :class="{ 'content-wrapper': $vuetify.breakpoint.mdAndUp }">
      <experience></experience>
      <skills></skills>
      <projects></projects>
      <blog-posts></blog-posts>
    </div>
  </div>
</template>

<script>
import AboutMe from "@/views/AboutMe";
import Experience from "@/views/Experience";
import Projects from "@/views/Projects";
import Skills from "@/views/Skills";
import BlogPosts from "@/views/BlogPosts";

export default {
  components: {
    AboutMe,
    Experience,
    Projects,
    Skills,
    BlogPosts,
  },
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
  min-height: 100vh;
  display:flex;
  flex-direction:column;
}

.content-wrapper > *:last-child {
  flex: 1;
}
</style>