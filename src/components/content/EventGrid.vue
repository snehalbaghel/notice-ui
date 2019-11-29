<template>
  <v-container>
    <v-row>
      <v-col v-for="(event, i) in events" :key="i"
        sm="12" md="6" lg="4">
        <EventItem :event="event"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import EventItem from '../EventItem.vue';
  import { Event } from '../../store/models';
  import EventStore from '../../store/modules/event';

  @Component({
    components: {
      EventItem,
    },
  })
  export default class EventGrid extends Vue {

    private mounted() {
      EventStore.fetchPublishedEvents();
    }

    get events() {
      return EventStore.events;
    }
  }
</script>