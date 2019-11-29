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

Vue.filter('date', (value: string) => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'
    , 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const date: Date = new Date(Date.parse(value));

  return date.getDate().toString() + ' ' +
            monthNames[date.getMonth() - 1] + ' ' +
            date.getFullYear();
});

Vue.filter('capitalize', (value: string) => {
  if (!value) {
    return '';
  }

  Vue.filter('time', (value: string) => {

  const date = new Date(Date.parse(value));

  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return hours + ':' + minutes + ', ' + ampm;
});

  return value.charAt(0).toUpperCase() + value.slice(1);
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
