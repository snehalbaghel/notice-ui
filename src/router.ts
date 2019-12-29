import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/SignUp.vue'),
    },
    {
      path: '',
      component:  () => import('./views/Home.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          components: {
            content_slot: () => import('./components/content/EventGrid.vue'),
            nav_slot:  () => import('./components/nav/EventFilters.vue'),
          },
        },
        {
          path: '/add',
          name: 'add',
          components: {
            content_slot: () => import('./components/content/AddEvent.vue'),
            nav_slot:  () => import('./components/nav/SavedEvents.vue'),
          },
        },
        {
          path: '/user/event/:id',
          name: 'event_summary',
          components: {
            content_slot: () => import('./components/content/EventSummary.vue'),
            nav_slot: () => import('./components/nav/SavedEvents.vue'),
          },
          props: { content_slot: true },
        },
        {
          path: '*',
          redirect: 'home',
        },
      ],
    },
    {
      path: '*',
      redirect: 'home',
    },
  ],
});
