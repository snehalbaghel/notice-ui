<template>
  <v-container>
    <v-row>
      <v-col xs="12" :md="6" :lg="8">

        <v-row>
          <v-col>
            <span class="header">Publish Event</span>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  
  @Component
  export default class PublishEvent extends Vue {
  
  }
</script>