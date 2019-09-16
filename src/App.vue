<template>
  <v-app>
    <!--Admin /-->
    <!--Student /-->
    <!--Status /-->
    <!--AppHeader /-->
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppHeader from './components/AppHeader.vue';
import Student from './components/Student.vue';
import Admin from './components/Admin.vue';
import Status from './components/Status.vue';
export default Vue.extend({
  name: 'App',
  components: {
    Admin,
    AppHeader,
    Student,
    Status,
  },
  data: () => ({
  }),
});
</script>
