<template>
  <v-container>
    <div class="content-grid">
      <v-card outlined>
          <v-card-title>
            Pending Requests
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="search" label="Search"
              single-line hide-details>
            </v-text-field>
          </v-card-title>
          <v-data-table :loading="!pendingRequests" :headers="headers" 
          loading-text="Loading... Please wait" :items="pendingRequests" 
          :search="search" v-model="selected" show-select>
            <template v-slot:item.preview="{ item }">
              <!-- <template v-slot:activator="{ on }"> -->
                <v-icon small class="mr-2" @click.stop="previewSummary(item)">
                  mdi-eye
                </v-icon>
              <!-- </template> -->
            </template>
          </v-data-table>
        </v-card>
        <div class="form-grid">
          <div class="review-field">
              <h1 class="display-1">Admin Panel</h1>
              <v-textarea class="review-field" pa-0 ma-0 outlined label="Review Message" name="name" ></v-textarea>

          </div>
          <v-btn class="review-btn" color="warning">{{ multipleSelected ? 'Review All' : 'Review' }}</v-btn>
          <v-btn class="approve-btn" color="success">
              <v-icon>mdi-check</v-icon>
              {{ multipleSelected ? 'Approve All' : 'Approve' }}
          </v-btn>
        </div>
    </div>
    <v-bottom-sheet v-model="previewDialog" >
      <v-sheet>
        <!-- <EventSummary :id="previewId"/> -->
      </v-sheet>
    </v-bottom-sheet>
    <!-- <template v-for="item in items"> -->
      <!-- <EventSummary :key="request.event_id" :id="request.event_id" v-for="request in selected"/> -->
    <!-- </template> -->
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import EventSummary from '../EventSummary.vue';
  import RequestStore from '../../../store/modules/request';
  import request from '../../../store/modules/request';

  @Component({
    components: {
      EventSummary
    }
  })
  export default class EventRequest extends Vue {
  
    mounted() {
      RequestStore.fetchPendingRequests();
    }

    private selected = [];
    private search = '';
    private headers = [
          { text: 'Title', align: 'left', value: 'title' },
          { text: 'User', value: 'username' },
          { text: 'Event Date', value: 'event_date', sortable: false, },
          { text: 'Request Date', value: 'request_date', sortable: false, },
          { text: 'Preview', align: 'center', value: 'preview', sortable: false },
        ];
    private previewId = null;
    private previewDialog = false;

    previewSummary(item: any) {
      // console.log(item);
      this.previewId = item.event_id;
      this.previewDialog = true;
    }

    get pendingRequests() {
      if (RequestStore.pendingRequests) {
        return RequestStore.pendingRequests.map( 
          request => ({ 
            ...request,
            id: request.request_id,
            event_date: this.$options.filters!.date(request.event_date),
            request_date: this.$options.filters!.date(request.request_date),
            current_status: this.$options.filters!.capitalize(request.current_status),
          }))
      }
      return [];
    }

    get multipleSelected() {
      return this.selected.length > 1;
    }
  }
</script>

<style lang="scss" scoped>

  .content-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 24px;
  }

  .form-grid {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;

  }

  .approve-btn {
    justify-self: start;
    grid-column: 2 / 4;
    // justify-self: end;
    // grid-column: 1 / 1;
  }

  .review-field {
    grid-column: 1 / 4;
    grid-row: 1 / 1;
    position: relative;
    top: 16px;
    align-self: end;
    // grid-row: 
    // grid-column: 1 / 2;
  }

  .review-btn {
    padding-top: 8px;
    grid-column: 1 / 2  ;
    grid-row: 2 / 2;
    align-self: start;
    // align-self: center;
    // position: relative;
    // bottom: 16px;
    // align-self: center;
  }

</style>