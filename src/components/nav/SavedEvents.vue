<template>
  <div class="grey lighten-4 fill-height">
    <v-list class="top">

      <v-list-item :class="{active: isActive('-1') }" @click="addEvent()">
          <v-list-item-icon>  
              <v-icon>add</v-icon>

          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Add Event</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-list>
    <v-list three-line class="bottom">
      <v-subheader>Your Events</v-subheader>

      <template v-for="(event, index) in events.slice().reverse()">
        <v-list-item :class="{active: isActive(event.id) }" @click="eventClicked(event.id)" :key="index">
          <v-list-item-avatar>
            <v-avatar color="primary">
                <span class="white--text headline">{{ event.title[0] }}</span>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ event.title }}</v-list-item-title>
            <v-list-item-subtitle><span class='text--primary'>{{ event.time | date }}</span> &mdash; {{ event.subtitle }}</v-list-item-subtitle>
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

    // TODO: Refres everthing when login.
    private selected: string = '';

    private mounted() {
      EventStore.fetchSEvents();
    }

    private isActive(id: string) {
      return this.selected === id;
    }

    private setActive(id: string) {
      this.selected = id;
    }

    get events() {
        return EventStore.savedEvents ? EventStore.savedEvents : [];
    }

    private addEvent() {
      this.setActive('-1');
      this.$router.push({ name: 'add' });
    }

    private eventClicked(id: string) {
      this.setActive(id);
      this.$router.push({ name: 'event_summary', params: {id}});
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

  .active {
    background-color: #FFF8E1;
  }
</style>