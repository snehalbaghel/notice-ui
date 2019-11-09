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
  import { Vue, Component } from 'vue-property-decorator';
  import AppSkeleton from '../components/AppSkeleton.vue';

  @Component({
    components: {
      AppSkeleton,
    },
  })
  export default class Home extends Vue {

  }
</script>
