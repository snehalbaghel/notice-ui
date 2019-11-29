<template>
<v-card v-if="event" outlined>
  <v-container>
    <v-row>
      <v-col class="pr-0" cols="12" sm="6" @click="overlay = !overlay">
            <v-img class="poster" src="http://127.0.0.1:5000/event/image/88131316-be7e-4446-91da-0cb0b4f8536f">
            </v-img>
      </v-col>
      <v-col cols="12" sm="6">
        <v-row class="display-1 pa-3">
          {{ event.title }}
        </v-row>
        <v-row class="subtitle-1 px-3"> 
          {{ event.subtitle }}
        </v-row>
        
        <v-row class="pa-6">
          <v-icon>mdi-calendar</v-icon>
          <span class="body-1 px-6 font-weight-bold">{{ event.time | date }}</span>
        </v-row>

        <v-row class="px-6">
          <v-col class="px-0" cols="1">
            <v-icon>mdi-map-marker</v-icon>
          </v-col>
          <v-col cols="11">
            <span cols="10" class="body-1 venue">{{ event.venue }}</span>
          </v-col>
        </v-row>

        <v-row class="pt-6 px-6">
          <!-- <div class="subtitle-2"></div> -->
          <div class="body-1">Starts at {{ event.time | time }}</div>
        </v-row>
        <v-row class="pa-4">
        <v-divider></v-divider>

        </v-row>
        <v-row class="px-6">
          <div class="body-2">
            {{ event.description }}
          </div>
        </v-row>
      </v-col>
      <!-- <v-col>
      <span class="pa-3 display-3">Interface 2019</span>
      </v-col> -->

    </v-row>
  </v-container>

  <v-overlay :value="overlay">
    <v-btn class="close-button" icon @click="overlay = false">
        <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-img class="poster" src="http://127.0.0.1:5000/event/image/88131316-be7e-4446-91da-0cb0b4f8536f">
    </v-img>
  </v-overlay>

</v-card>
    
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
import { Event } from '../../store/models';
  
  @Component
  export default class EventInfo extends Vue {

    @Prop() private event: Event | undefined;
    private overlay: boolean = false;
    
    // cool() {
    //    this.event!.
    // }
  
  }
</script>

<style lang="scss" scoped>

  .poster {
    max-width: 340px;
  }

  .venue {
    padding-left: 14px;
    box-decoration-break: clone;
    -webkit-box-decoration-break:clone;
  }

  .close-button {
    position: fixed;
    top: 0;
    right: 0;
  }

</style>