import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import PrismicVue from '@prismicio/vue'
import linkResolver from './link-resolver.js';

Vue.config.productionTip = false;

Vue.use(PrismicVue, {
  endpoint: "https://noahhessel.cdn.prismic.io/api/v2",
  linkResolver
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
