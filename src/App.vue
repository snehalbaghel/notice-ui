<template>
  <v-app>
    <AppHeader />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppHeader from './components/AppHeader.vue';

export default Vue.extend({
  name: 'App',
  components: {
    AppHeader,
  },
  data: () => ({
  }),
});
</script>
