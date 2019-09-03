<template>
  <v-app>
    <Student />
    <!--AppHeader /-->
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppHeader from './components/AppHeader.vue';
import Student from './components/Student.vue';

export default Vue.extend({
  name: 'App',
  components: {
    AppHeader,
    Student,
  },
  data: () => ({
  }),
});
</script>
