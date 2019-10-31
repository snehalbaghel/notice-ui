<template>
  <v-container>
    <v-row>
      <v-col v-for="n in count" :key="n"
        :sm="12" :md="6" :lg="3">
        <EventItem :event="events[n-1]"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import EventItem from './EventItem.vue'
  import { Event } from '../store/models'
  
  @Component({
    components: {
      EventItem,
    },
  })
  export default class EventGrid extends Vue {
    events: Event[] | undefined = [
      {
        title: 'Test',
        description: 'None',
        venue: 'wasup',
        time: 'sup',
        link: '1039'
      },
      {
        title: 'Test',
        description: 'None',
        venue: 'wasup',
        time: 'sup',
        link: '1039'
      },
      {
        title: 'Test',
        description: 'None',
        venue: 'wasup',
        time: 'sup',
        link: '1039'
      },
      {
        title: 'Test',
        description: 'None',
        venue: 'wasup',
        time: 'sup',
        link: '1039'
      },
    ];

    get count () {
      if(this.events)
        return this.events.length

      return 0
    }
  }
</script>