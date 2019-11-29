<template>
    <v-container >
      <v-row>
        <v-col class="flex-shrink-1" >
      <v-card class="status-card">
        <ApprovalStatus :id="id"/>
      </v-card>
        </v-col>
        <v-col cols="12" md="7">
          <EventInfo :event="event"/>
        </v-col>
      </v-row>
    </v-container>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import EventStore from '../../store/modules/event';
  import ApprovalStatus from './ApprovalStatus.vue';
  import EventInfo from './EventInfo.vue';

  @Component({
    components: {
      ApprovalStatus,
      EventInfo,
    },
  })
  export default class EventSummary extends Vue {

    @Prop() private id: string | undefined;

    get event() {
      const events = EventStore.savedEvents;
      if (events) {
        return events.filter((event) => event.id === this.id)[0];
      }

    }

  }

</script>

<style lang="scss" scoped>
  .status-card {
    max-width: 450px;
  }
</style>
