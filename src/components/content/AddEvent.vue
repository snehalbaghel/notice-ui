<template>
  <v-container>
    <v-row>
      <v-col>
        <span class="header">Add Event</span>
        <em>&nbsp;(All fields are required)</em>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" md="8">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="title" label="Title" outlined>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="subtitle" label="Sub-Title" outlined>
            </v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-textarea v-model="description" outlined name="input-7-4" 
              label="Description">
            </v-textarea>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="venue" label="Venue" outlined append-icon="mdi-map-marker">
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <vc-date-picker
              v-model="date"
              :popover="{ placement: 'bottom', visibility: 'click' }">
              <v-text-field label="Date" readonly outlined
                append-icon="event" v-model="formattedDate">
              </v-text-field>
            </vc-date-picker>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <v-menu ref="menu" v-model="timeMenu" :close-on-content-click="false"
              :nudge-right="40" :return-value.sync="time" transition="scale-transition" 
              offset-y max-width="250px" min-width="250px">
              <template v-slot:activator="{ on }">
                <v-text-field label="Time" readonly v-model="time"
                  append-icon="access_time" outlined v-on="on">
                </v-text-field>
              </template>
              <v-time-picker v-if="timeMenu" v-model="time" full-width no-title
                format="24hr" @click:minute="$refs.menu.save(time)">
              </v-time-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="regLink" label="Registration Link" outlined
                append-icon="link"></v-text-field>
          </v-col>
        </v-row>
      </v-col>


      <v-col cols="12" sm="6" md="4">
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
              <v-file-input  v-model="file" accept="image/*" label="Upload poster image"></v-file-input>
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
        <v-btn @click="submitForm()" color="primary">Save
          <v-icon right>mdi-content-save</v-icon>  
        </v-btn>  
      </v-col>
      <v-snackbar v-model="snackbar">
        {{ snackbarMessage }}
        <v-btn text @click="snackbar = false">
          Close
        </v-btn>
      </v-snackbar>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import { Event } from '../../store/models';
  import EventItem from '../EventItem.vue';
  import EventStore from '../../store/modules/event';
  import { postEvent, uploadImage } from '../../store/api';

  @Component({
    components: {
      EventItem,
    },
  })
  export default class AddEvent extends Vue {

    // Form
    private title: string | null = null;
    private subtitle: string | null = null;
    private description: string | null = null;
    private venue: string | null = null;
    private regLink: string | null = null;
    private date: Date | null = null;
    private time: string | null = null;
    private selectedTags: string[] | null = null;
    private file: File | null = null;

    private timeMenu: boolean = false;
    private snackbarMessage: string | null = null;
    private snackbar: boolean = false;

    private mounted() {
      if (!EventStore.tags) {
        EventStore.fetchTags();
      }
    }

    get event() {
      return {
        title: this.title || 'Preview Title',
        subtitle: this.subtitle || 'Preview Subtitle',
        description: this.description || 'Preview Description',
        venue: this.venue || 'Preview Venue',
        time: this.date || 'Time/Date',
        link: this.regLink || '',
        tags: this.selectedTags,
      };
    }

    private async uploadImg() {
      const data = await uploadImage(this.file!);
      if (data.status === 'success') {
        return data.picture_id;
      }
    }


    private async submitForm() {
      if (this.validate()) {

        const uploadId = await this.uploadImg();

        if (!uploadId) {
          this.snackbarMessage = 'We were unable to upload your image.'
          this.snackbar = true;
          return;
        }

        const combineDT = this.date;
        combineDT!.setHours(parseInt(this.time!.slice(0, 2), 10));
        combineDT!.setMinutes(parseInt(this.time!.slice(3), 10));

        const data: Event = {
          title: this.title!,
          subtitle: this.subtitle!,
          description: this.description!,
          time: combineDT!.toISOString(),
          venue: this.venue!,
          link: this.regLink!,
          tags: this.selectedTags!,
          picture_id: uploadId,
        };

        const response = await postEvent(data);

        this.snackbarMessage = response.status === 'success' ? 'Event successfully saved.' :
          'Sorry, we\'re having some trouble.';

        await EventStore.fetchSEvents();
        this.snackbar = true;

      } else {
        this.snackbar = true;
      }
    }

    private removeTag(item: string) {
      this.selectedTags = this.selectedTags!.filter( (tag) => tag !== item );
    }

    // TODO: Add better validation
    private validate() {

      const message = 'is required.';
      this.snackbarMessage = null;

      if(!this.file) {
        this.snackbarMessage = 'Please select an image';
      }

      if (!this.selectedTags || this.selectedTags.length === 0) {
        this.snackbarMessage = 'Add atleast one tag to your event';
      }

      if (!this.regLink) {
        this.snackbarMessage = `Registration link ${message}`;
      }

      if (!this.time) {
        this.snackbarMessage = `Time ${message}`;
      }

      if (!this.date) {
        this.snackbarMessage = `Date ${message}`;
      }

      if (!this.venue) {
        this.snackbarMessage = `Venue ${message}`;
      }

      if (!this.description) {
        this.snackbarMessage = `Description ${message}`;
      }

      if (!this.subtitle) {
        this.snackbarMessage = `Subtitle ${message}`;
      }

      if (!this.title) {
        this.snackbarMessage = `Title ${message}`;
      }

      return this.snackbarMessage ? false : true;

    }

    get formattedDate() {
      return this.date ? (this.date.getDate() + ' ' + this.date.getMonth() +
        ' ' + this.date.getFullYear()) : '';
    }

    get tags() {
      return EventStore.tags ? EventStore.tags.map((tag) => tag.name) : [];
    }

  }
</script>
