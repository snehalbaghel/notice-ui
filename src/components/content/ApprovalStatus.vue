<template>
  <!-- TODO: Fix tablet -->
  <v-container>
    <v-col>
      <span class="display-1">Status</span>
    </v-col>
    <v-col class="currentStatus">
      <span class="title font-weight-regular status">{{ requestHistory.current_status | capitalize}}</span>    
    </v-col>

    <template>
      <v-timeline align-top dense>
          <v-timeline-item v-for="(item, i) in requestHistory.timeline.slice().reverse()" :key="i"
            :color="item.actor === 'You' ? 'yellow darken-2' : 'pink'" small>
            <v-row class="pd-1"> 
              <v-col>
                <strong>{{ item.actor }}</strong>
                <div class="caption">{{ item.message }}</div>
              </v-col>
              <v-col class="flex-shrink-1 date-field">
                <strong>{{ item.datetime | date }}</strong>
              </v-col>
            </v-row>
          </v-timeline-item>
      </v-timeline>
    </template>

    <v-col v-if="requestHistory.current_status === 'saved'">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn color="primary" v-on="on" @click="sendRequest()" class="ma-2 white--text">
          Request
          </v-btn>  
        </template>
        <span>Request admin to get published.</span>
      </v-tooltip>
    </v-col>

    <v-snackbar v-model="snackbar">
      {{ snackbarMessage }}
      <v-btn text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>

  </v-container>
</template>

<script lang="ts">
  import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
  import EventItem from '../EventItem.vue';
  import { Event, RequestHistoryResponse } from '../../store/models';
  import { postRequest } from '../../store/api';
  import RequestStore from '../../store/modules/request';
  
  
  @Component({
    components: {
      EventItem,
    },
  })
  export default class ApprovalStatus extends Vue {

    @Prop() private id: any; 
    private snackbar: boolean = false;
    private snackbarMessage: string = "";

    mounted() {
      return RequestStore.fetchHistory(this.id);
    }

    get requestHistory() {
      return RequestStore.requestHistory ? RequestStore.requestHistory : { current_status: 'Loading..', timeline: [] }; 
    }

    @Watch('id')
    onIdChanged(id: string, oldId: string) {
      RequestStore.fetchHistory(id);
    }

    private async sendRequest() {
      const response = await postRequest(this.id);

      if(response.message) {
        this.snackbarMessage = response.message;

        this.snackbar = true;
      }

      RequestStore.fetchHistory(this.id);

    }
  }
</script>

<style lang="scss">
  .status {
    position: relative;
    top: 6px;
    border-radius: 32px;
    background: #e0e0e0;
    padding: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: #8888;
  }

  .currentStatus {
    padding-left: 0px;
  }

  .date-field {
    min-width: 8rem;
  }
</style>