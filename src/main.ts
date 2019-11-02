declare module 'v-calendar';
/// <reference path='./v-calendar.d.ts' />

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import VCalendar from 'v-calendar';
import { setJWT } from './store/api';
import auth from './store/modules/auth';

Vue.config.productionTip = false;

Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
});

const  accessToken  =  localStorage.getItem('access_token');
const user = localStorage.getItem('user');

if (accessToken) {
  setJWT(accessToken);
}

if (user) {
  auth.setUser(JSON.parse(user));
}

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
