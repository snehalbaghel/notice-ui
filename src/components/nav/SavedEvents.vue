<template>
  <div class="grey lighten-4 fill-height">
    <v-list class="top">
      <v-list-item>
          <v-list-item-icon>  
            <!-- <v-avatar color="white"> -->
              <v-icon>add</v-icon>

                <!-- <span class="white--text headline">{{ event.title[0] }}</span> -->
            <!-- </v-avatar> -->
          </v-list-item-icon>

          <v-list-item-content>
            <!-- Add Event -->
            <!-- <h4>Add Event</h4> -->
            <v-list-item-title>Add Event</v-list-item-title>
            <!-- <v-list-item-subtitle><span class='text--primary'>{{ event.time }}</span> &mdash; {{ event.subtitle }}</v-list-item-subtitle> -->
          </v-list-item-content>
        </v-list-item>
    </v-list>
    <v-list three-line class="bottom">
      <v-subheader>Your Events</v-subheader>
      <template v-for="(event, index) in events.slice().reverse()">
        <v-list-item @click="eventClicked()" :key="index">
          <v-list-item-avatar>
            <v-avatar color="primary">
                <span class="white--text headline">{{ event.title[0] }}</span>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ event.title }}</v-list-item-title>
            <v-list-item-subtitle><span class='text--primary'>{{ event.time }}</span> &mdash; {{ event.subtitle }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider
          v-if="index+1 !== events.length" :key="index+'div'" inset>
        </v-divider>
      </template>

    </v-list>
  </div>  
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import { Event } from '../../store/models';
  import EventStore from '../../store/modules/event';


  @Component
  export default class SavedEvents extends Vue {

    private mounted() {
      EventStore.fetchSEvents();
    }

    get events() {
        return EventStore.savedEvents ? EventStore.savedEvents : [];
    }
    private eventClicked() {
      // console.log('Event clicked');
    }
  }
</script>

<style lang="scss">
  .top {
    padding-bottom: 0px;
  }

  .bottom {
    padding-top: 0px; 
  }
</style>