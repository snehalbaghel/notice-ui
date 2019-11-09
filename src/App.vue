<template>
    <router-view />
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