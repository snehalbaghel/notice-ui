<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  
  @Component
  export default class App extends Vue {
  }

</script>
<style lang="scss">
  .header {
    font-size: 3rem;
    font-weight: 300;
  }
</style>