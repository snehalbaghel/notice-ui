import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import AppHeader from './components/AppHeader.vue';
import Student from './components/Student.vue';
import Admin from './components/Admin.vue';
import Status from './components/Status.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: AppHeader,
    },
    {
      path: '/student',
      name: 'student',
      component: Student,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: '/status',
      name: 'status',
      component: Status,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
