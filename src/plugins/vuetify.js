import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#52796f',
        secondary: '#354f52',
        // experience: '#7E4E52',
        // skills: '#44404F',
        // blogPosts: '#434D60',
        // projects: '#2C363F',
        experience: '#2f3e46',
        skills: '#354f52',
        projects: '#52796f',
        blogPosts: '#84a98c',
      },
    },
  },
});
