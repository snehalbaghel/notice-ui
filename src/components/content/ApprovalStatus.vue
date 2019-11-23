<template>
  <v-container>
    <v-row>
      <v-col sm="12" :md="6" :lg="8">

        <v-row>
          <v-col>
            <span class="header">Approval Status</span>
          </v-col>
        </v-row>

        <v-row>
          <v-col sm="12" md="6">
            <EventItem :event="event"/>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="title font-weight-regular">Status: <span class="font-weight-bold">Approved</span></v-col>
        </v-row>

        <v-row>
          <v-col class="subtitle-1">
            Feedback: 
            <span>Update picture.</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import EventItem from '../EventItem.vue';
  import { Event } from '../../store/models';

  @Component({
    components: {
      EventItem,
    },
  })
  export default class ApprovalStatus extends Vue {
    private event: Event = {
        title: 'Title',
        subtitle: 'Subtitle',
        description: 'Description',
        venue: 'wasup',
        time: '10 Sep 2019',
        link: '1039',
      };
  }
</script>