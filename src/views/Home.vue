<template>
    <!-- <Student /> -->
  <AppSkeleton> 
    <template v-slot:nav-content>
      <NavFilters />      
    </template>
    <template v-slot:main-content>
      <!-- <EventGrid /> -->
      <router-view />
    </template>
  </AppSkeleton>
</template>


<script lang="ts">
import Vue from 'vue';
import AppSkeleton from '../components/AppSkeleton.vue';
import Student from '../components/Student.vue';
import NavFilters from '../components/NavFilters.vue';
import EventGrid from '../components/EventGrid.vue';


export default Vue.extend({
  components: {
    AppSkeleton,
    Student,
    NavFilters,
    EventGrid
  },
});
</script>
