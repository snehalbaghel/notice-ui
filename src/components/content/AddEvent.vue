<template>
  <v-container>
    <v-row>
      <v-col>
        <span class="header">Add Event</span>
        <em>&nbsp;(All fields are required)</em>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="12" md="6" lg="8">
        <v-row>
          <v-col sm="12" md="6">
            <v-text-field label="Title" outlined>
            </v-text-field>
          </v-col>
          <v-col sm="12" md="6">
            <v-text-field label="Sub-Title" outlined>
            </v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col sm="12">
            <v-textarea outlined name="input-7-4" 
              label="Description">
            </v-textarea>
          </v-col>
        </v-row>

        <v-row>
          <v-col sm="12" md="6">
            <v-text-field label="Venue" outlined append-icon="my_location">
            </v-text-field>
          </v-col>
          <v-col sm="12" md="6">
            <vc-date-picker
              v-model="date"
              :popover="{ placement: 'bottom', visibility: 'click' }">
              <v-text-field label="Date" readonly outlined
                append-icon="event">
              </v-text-field>
            </vc-date-picker>
          </v-col>
        </v-row>

        <v-row>
          <v-col sm="12" md="6">
            <v-menu ref="menu" v-model="timeMenu" :close-on-content-click="false"
              :nudge-right="40" :return-value.sync="time" transition="scale-transition" 
              offset-y max-width="250px" min-width="250px">
              <template v-slot:activator="{ on }">
                <v-text-field v-model="time" label="Time" 
                  append-icon="access_time" readonly outlined v-on="on">
                </v-text-field>
              </template>
              <v-time-picker v-if="timeMenu" v-model="time" full-width no-title
                format="24hr" @click:minute="$refs.menu.save(time)">
              </v-time-picker>
            </v-menu>
          </v-col>
          <v-col sm="12" md="6">
            <v-text-field label="Registration Link" readonly outlined
                append-icon="link"></v-text-field>
          </v-col>
        </v-row>
      </v-col>


      <v-col sm="12" md="6" lg="4">
        <v-row>
          <v-col>
            <v-combobox v-model="selectedTags" :items="tags" chips
            label="Add Tags" placeholder="Like debating, coding.."
            multiple prepend-icon="mdi-tag-outline">
            <template v-slot:selection="{ attrs, item, select }">
              <v-chip class="chip" v-bind="attrs" close @click:close="removeTag(item)" label>
                <strong>{{ item }}</strong>&nbsp;
              </v-chip>
            </template>
            <template v-slot:item="data">
              <v-list-item-title>{{ data.item }}</v-list-item-title>
              </template>
            </v-combobox>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
              <v-file-input  accept="image/*" label="Upload poster image"></v-file-input>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <strong>Preview</strong>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <EventItem :event="event" />
          </v-col>
        </v-row>

      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn color="primary">Save</v-btn>  
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import { Event } from '../../store/models';
  import EventItem from '../EventItem.vue';

  @Component({
    components: {
      EventItem,
    },
  })
  export default class AddEvent extends Vue {

    private event: Event = {
      title: 'Preview Title',
      subtitle: 'Subtitle',
      description: 'Preview Description',
      venue: 'Preview Venue',
      time: 'Somethin',
      link: '',
    };

    private date: Date | null = null;
    private time: any | null = null;
    private timeMenu: boolean = false;
    private selectedTags: string[] | null = null;


  get tags() {
    return ['programming', 'sports', 'debating']
  }

  }
</script>
