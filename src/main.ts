declare module 'v-calendar';
/// <reference path='./v-calendar.d.ts' />

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import VCalendar from 'v-calendar';

Vue.config.productionTip = false;

Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
