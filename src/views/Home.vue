<template>
    <!-- <Student /> -->
  <AppSkeleton> 
    <template v-slot:nav-content>
      <router-view name="nav_slot"/>      
    </template>
    <template v-slot:main-content>
      <router-view name="content_slot" />
    </template>
  </AppSkeleton>
</template>


<script lang="ts">
import Vue from 'vue';
import AppSkeleton from '../components/AppSkeleton.vue';
import EventFilters from '../components/nav/EventFilters.vue';


export default Vue.extend({
  components: {
    AppSkeleton,
    EventFilters,
  },
});
</script>
