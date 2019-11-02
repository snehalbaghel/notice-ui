import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      component:  () => import('./views/Home.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('./components/EventGrid.vue'),
        },
        {
          path: '/add',
          name: 'add',
          component: () => import('./components/AddEvent.vue'),
        },
        {
          path: '/publish',
          name: 'publish',
          component: () => import('./components/PublishEvent.vue'),
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '*',
      redirect: '/home',
    },
  ],
});
