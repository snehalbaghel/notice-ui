<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{ event.time }}</div>
        <v-list-item-title class="headline mb-1">{{ event.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ event.description }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <!-- <v-card-actions>
      <v-btn text>Button</v-btn>
      <v-btn text>Button</v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script lang="ts">
  import { Vue, Component, Prop  }  from 'vue-property-decorator'
  import { Event } from '../store/models'; 

  @Component
  export default class EventItem extends Vue {

    @Prop() event!: Event;

  }
</script>