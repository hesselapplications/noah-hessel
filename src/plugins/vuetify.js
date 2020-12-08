import Vue from "vue"
import Vuetify from "vuetify/lib"

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#434D60",
        secondary: "#2C363F",
        experience: "#7E4E52",
        skills: "#44404F",
        projects: "#2C363F",
        blogPosts: "#434D60"
      },
    },
  },
});
