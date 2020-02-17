<template>
    <v-container >
      <v-row>
        <v-col cols="12" md="7">
          <EventInfo :id="id" />
        </v-col>
        <v-col class="flex-shrink-1" >
          <v-card class="status-card">
            <ApprovalStatus :id="id"/>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import EventStore from '../../store/modules/event';
  import ApprovalStatus from './ApprovalStatus.vue';
  import EventInfo from './EventInfo.vue';
  import Auth from '../../store/modules/auth';
  import { Event } from '../../store/models';

  @Component({
    components: {
      ApprovalStatus,
      EventInfo,
    },
  })
  export default class EventSummary extends Vue {

    @Prop() private id: string | undefined;

  }

</script>

<style lang="scss" scoped>
  .status-card {
    max-width: 450px;
  }
</style>
